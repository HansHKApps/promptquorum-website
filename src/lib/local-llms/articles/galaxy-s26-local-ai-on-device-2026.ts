// Slug: galaxy-s26-local-ai-on-device-2026
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-11-19',
    last_full_refresh: '2026-10-19',
    current_hardware_mentioned: ['Samsung Galaxy S26', 'Samsung Exynos 2600', 'Snapdragon 8 Elite Gen 5'],
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-en.webp',
    title: 'Running Local AI on the Galaxy S26: On-Device AI Explained (2026)',
    seoTitle: 'Galaxy S26 On-Device AI: How it Works & What Runs Locally',
    intro: 'The Galaxy S26, launched February 25, 2026, brings Samsung\'s hybrid on-device and cloud AI platform—Galaxy AI—to your pocket. But unlike Apple\'s on-device-first approach, Samsung balances local processing with cloud features, letting you choose where your data goes. This guide explains what Galaxy AI actually does on-device, what requires cloud, and how to run your own open-weight LLMs on the S26\'s hardware.',
    metaDescription: 'Galaxy S26 on-device AI explained: what the Samsung Personal Data Engine does, which Galaxy AI features need the cloud, and how to run local LLMs on Exynos 2600 or Snapdragon.',
    publishDate: '2026-06-15',
    dateModified: '2026-10-19',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    audience: 'Android users interested in on-device AI, Galaxy S26 buyers, developers exploring mobile LLM inference',
    primaryTerm: 'Galaxy S26 on-device AI',
    targetKeywords: ['galaxy s26 on device ai', 'galaxy ai features', 'exynos 2600 ai', 'snapdragon 8 elite gen 5 npu', 'on device ai android', 'run llm on galaxy s26'],
    leadAnswerBlock: '**The Galaxy S26 runs Galaxy AI—a hybrid platform mixing on-device processing (Call Screening, Now Nudge, Scam Detection) with cloud features (Creative Studio image generation, Gemini integration). You control the privacy toggle: "Process data only on device" restricts everything to local processing. Chips differ by model and region: the S26 Ultra uses Snapdragon 8 Elite Gen 5 for Galaxy everywhere, while the S26 and S26+ use Exynos 2600 in Europe, Korea and most other markets and Snapdragon in the US, China and Japan; independent AI tests show the two roughly level, so pick by model and price, not by chip. For running your own LLMs, quantized 7B models at Q4 (4-bit) reach ~24 tokens/sec on LPDDR5X 85.6 GB/s.**',
    quickAnswerTop: {
      en: {
        question: 'What Galaxy AI features run on the S26 without sending data to the cloud?',
        answer: 'Call Screening (answers calls locally), Now Nudge (context suggestions), Now Brief (personal digests), and Scam Detection all process data locally using the Personal Data Engine (PDE). You can enable "Process data only on device" in Galaxy AI settings to block cloud fallback for supported features. Image generation (Creative Studio) requires a network connection and a Samsung Account login.',
        bullets: [
          'Call Screening identifies unknown callers and summarizes intent (Samsung does not state where it runs)',
          'Now Nudge suggests Gallery photos to share and needs a Samsung Account login',
          'Scam Detection flags suspicious calls; Samsung does not publish its processing location',
          'Enable "Process data only on device" toggle to force local processing when available',
          'Creative Studio image generation is cloud-only (requires Samsung account + network)',
          'Exynos 2600 is 2.4x faster at Stable Diffusion than Exynos 2500'
        ],
        updatedDate: '2026-10-19'
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'What Is Galaxy AI on the Galaxy S26?', anchor: '#what-is-galaxy-ai' },
      { label: 'On-Device vs. Cloud: Which Features Stay Local?', anchor: '#on-device-vs-cloud' },
      { label: 'On-Device Image Generation on the S26', anchor: '#edgefusion' },
      { label: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 NPU', anchor: '#npu-comparison' },
      { label: 'Running Your Own LLM on the Galaxy S26', anchor: '#run-own-llm' },
      { label: 'Galaxy S26 Privacy: What Leaves Your Device?', anchor: '#privacy' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' }
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Galaxy AI is a hybrid platform: Samsung states that its Personal Data Engine (PDE) is on-device and powers context features such as Now Nudge, Now Brief and Call Screening, but it does not publish a per-feature processing map. Creative Studio requires a network connection and Samsung account; Circle to Search requires internet.',
          'The chip depends on model and region: the S26 Ultra always uses Snapdragon 8 Elite Gen 5 for Galaxy; the S26 and S26+ use Exynos 2600 outside the US, China and Japan. Samsung claims +113% NPU over Exynos 2500 and +39% NPU for the Ultra over the S25 Ultra; MLPerf Mobile results are split between the two chips, so neither is a clear winner for local LLMs.',
          'Privacy toggle: Enable "Process data only on device" in Settings > Galaxy AI to prevent cloud fallback. Knox Vault hardware security enclave protects sensitive data; Knox Matrix synchronizes settings across devices.',
          'On-device image generation: Samsung partnered with Nota AI on EdgeFusion, which generates 512×512 images in under one second on the Exynos 2600 NPU using LCM-based Stable Diffusion optimization. Creative Studio (the user-facing app) requires network + Samsung account.',
          'Running your own LLMs: LPDDR5X memory (85.6 GB/s) limits decode throughput. A quantized 7B model at Q4 (4-bit, ~3.5 GB) reaches ~24 tokens/sec theoretical max. Use MLC Chat or Ollama for Android to test.',
          'RAM: the S26 and S26+ ship with 12 GB; the S26 Ultra with 12 GB or 16 GB. Memory size sets which models fit, and bandwidth sets decode speed, so a 12 GB base S26 is enough for 3B–8B Q4 models and the 16 GB Ultra adds headroom for larger ones.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'What Is Galaxy AI on the Galaxy S26?',
        content: [
          'Galaxy AI is Samsung\'s on-device intelligence platform, which Samsung describes as on-device Galaxy AI powered by its Personal Data Engine, with Gemini and Perplexity integrated as agents; Samsung does not publish which language model runs each on-device feature. Launched with Galaxy S24, refined on S25, and expanded on S26 (Feb 25, 2026 launch), it balances local processing for privacy with cloud features for power.',
          'The Personal Data Engine (PDE) is the core: it learns from your on-device data—messages, calendar, photos, location history—without sending anything to Samsung\'s servers unless you explicitly opt into cloud features. Knox Vault, a hardware security enclave, isolates sensitive data (credentials, health records, payment info) from even Samsung\'s own software.',
          'Samsung confirms only two things per feature: Creative Studio needs a network connection and Samsung account, and Circle to Search needs internet. For Call Screening, Now Nudge, Now Brief and Scam Detection, Samsung does not state the processing location; the table below is therefore a working classification, not a Samsung guarantee.',
          'User control is central: a single toggle in Galaxy AI settings—"Process data only on device"—blocks all cloud fallback for compatible features. This is not a privacy afterthought; it\'s the default behavior unless you ask for more power.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Galaxy AI runs on-device features via Personal Data Engine (PDE) and cloud features on demand, with a single toggle to force device-only processing.' },
          { type: 'plain-terms', text: 'Knox Vault = hardware lock for secrets; PDE = learns from your phone without uploading data; toggle = your choice whether cloud features are on.' }
        ]
      },
      'on-device-vs-cloud': {
        id: 'on-device-vs-cloud',
        title: 'On-Device vs. Cloud: Which Features Stay Local?',
        columns: ['Feature', 'Processing', 'User Data Sent?', 'Requires Network?'],
        rows: [
          {
            'Feature': 'Call Screening',
            'Processing': 'On-Device (NPU)',
            'User Data Sent?': 'No — caller audio transcribed locally',
            'Requires Network?': 'No'
          },
          {
            'Feature': 'Now Nudge',
            'Processing': 'On-Device (PDE)',
            'User Data Sent?': 'No — reads screen + calendar locally',
            'Requires Network?': 'No'
          },
          {
            'Feature': 'Now Brief',
            'Processing': 'On-Device (PDE)',
            'User Data Sent?': 'No — digests local reservations + events',
            'Requires Network?': 'No'
          },
          {
            'Feature': 'Scam Detection',
            'Processing': 'On-Device (NPU)',
            'User Data Sent?': 'No — call audio + intent flagged locally',
            'Requires Network?': 'No'
          },
          {
            'Feature': 'Creative Studio (image gen)',
            'Processing': 'Cloud (Samsung servers)',
            'User Data Sent?': 'Yes — text prompt + reference images',
            'Requires Network?': 'Yes — account + internet required'
          },
          {
            'Feature': 'Gemini agents (multi-step tasks)',
            'Processing': 'Cloud (Google Gemini)',
            'User Data Sent?': 'Yes — task intent to Google servers',
            'Requires Network?': 'Yes'
          },
          {
            'Feature': 'Circle to Search',
            'Processing': 'Cloud (Google)',
            'User Data Sent?': 'Yes — screenshot area to Google',
            'Requires Network?': 'Yes'
          },
          {
            'Feature': 'Photo Assist (complex edits)',
            'Processing': 'Hybrid (local segmentation, cloud generation)',
            'User Data Sent?': 'Partial — image sent for generative models',
            'Requires Network?': 'Yes for object removal / background change'
          }
        ]
      },
      'edgefusion': {
        id: 'edgefusion',
        title: 'On-Device Image Generation on the S26',
        content: [
          'Samsung partnered with Nota AI (South Korea) to optimize Stable Diffusion for mobile NPU inference. The result: text-to-image generation in under one second, producing 512×512 pixel photorealistic images entirely on-device, no network required.',
          'The technique is called EdgeFusion (from Nota AI\'s research): it uses a Latent Consistency Model (LCM) scheduler with 2-step denoising instead of the standard 50 steps, reducing computation by ~96%. Model-level tiling reduces cross-attention latency by ~73%. Mixed-precision quantization (W8A16 in the U-Net) keeps quality intact while halving VRAM footprint.',
          'Performance: validated on Exynos 2600 NPU, where it generates 512×512 images in under 1 second. Exynos 2600 is 2.4x faster at Stable Diffusion than Exynos 2500, so this is realistic. Snapdragon 8 Elite Gen 5 in US/China/Japan variants will likely achieve similar or slightly longer times due to lower NPU performance.',
          'Reality check: Samsung\'s shipping app, Creative Studio, requires network + Samsung account login. It\'s unclear whether EdgeFusion shipped as a user-facing feature at launch or whether it powers a future update. Samsung never mentioned "EdgeFusion" by name in official Unpacked materials; the feature originates from Nota AI\'s research partnership. Use this knowledge to manage expectations: on-device image gen is coming, but may not ship fully on day one.'
        ],
        items: [
          'LCM scheduler: 2-step denoising replaces 50-step standard diffusion, 96% fewer compute steps',
          'Model-level tiling: reduces cross-attention memory access, ~73% latency improvement',
          'W8A16 quantization: 8-bit weights, 16-bit activations, no perceptible quality loss',
          'Target resolution: 512×512 pixels, photorealistic output',
          'NPU-optimized: Exynos 2600 tensor cores handle most compute; minimal CPU overhead',
          'Offline capable: zero network dependency if EdgeFusion is active'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'EdgeFusion generates 512×512 images in <1 second on-device by reducing Stable Diffusion from 50 denoising steps to just 2, using quantized weights and model-level tiling.' },
          { type: 'plain-terms', text: 'Fewer denoising steps = less computation = faster inference. Quantization shrinks the model. Tiling splits the attention layers to fit in phone VRAM. Together: instant images offline.' }
        ]
      },
      'npu-comparison': {
        id: 'npu-comparison',
        title: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 NPU',
        image: '/images/galaxy-s26-npu-comparison-en.svg',
        imageCaption: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 on the Galaxy S26: 2nm GAA vs 3nm FinFET, Samsung-claimed +113% vs +39% NPU gen-over-gen (different baselines), and 85.6 GB/s vs 84.8 GB/s LPDDR5X memory bandwidth.',
        columns: ['Metric', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', 'Winner for Local AI?'],
        rows: [
          {
            'Metric': 'Node / Fab',
            'Exynos 2600': '2nm GAA (Samsung SF2)',
            'Snapdragon 8 Elite Gen 5': '3nm FinFET (TSMC)',
            'Winner for Local AI?': 'Unproven (node differs)'
          },
          {
            'Metric': 'AI Performance Gen-over-gen',
            'Exynos 2600': '+113% vs Exynos 2500',
            'Snapdragon 8 Elite Gen 5': '+39% NPU vs S25 Ultra (Ultra)',
            'Winner for Local AI?': 'Not comparable (different baselines)'
          },
          {
            'Metric': 'Stable Diffusion Speed',
            'Exynos 2600': '2.4x faster than Exynos 2500',
            'Snapdragon 8 Elite Gen 5': 'Wins the MLPerf Stable Diffusion test',
            'Winner for Local AI?': 'Snapdragon (MLPerf Mobile)'
          },
          {
            'Metric': 'Available regions/variants',
            'Exynos 2600': 'S26 / S26+ (outside US, China, Japan)',
            'Snapdragon 8 Elite Gen 5': 'S26 / S26+ (US, China, Japan); S26 Ultra (all)',
            'Winner for Local AI?': 'Depends on your region'
          },
          {
            'Metric': 'Memory bandwidth',
            'Exynos 2600': 'LPDDR5X 85.6 GB/s (typical)',
            'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84.8 GB/s (typical)',
            'Winner for Local AI?': 'Tie (under 1%)'
          },
          {
            'Metric': 'Verdict',
            'Exynos 2600': 'Wins classification, detection, language',
            'Snapdragon 8 Elite Gen 5': 'Wins segmentation, super-res, Stable Diffusion',
            'Winner for Local AI?': 'Roughly level; choose by model and price'
          }
        ]
      },
      'run-own-llm': {
        id: 'run-own-llm',
        title: 'Running Your Own LLM on the Galaxy S26',
        image: '/images/galaxy-s26-7b-model-throughput-en.svg',
        imageCaption: 'Galaxy S26 7B model decode speed by quantization on LPDDR5X 85.6 GB/s: FP16 (~14 GB) caps at 6 tokens/sec, Q4 4-bit (~3.5 GB) reaches a 24 tokens/sec theoretical ceiling, with 8-15 tokens/sec realistic in practice.',
        content: [
          'The Galaxy S26\'s memory bandwidth is the limiting factor. LPDDR5X at 85.6 GB/s means token generation (the "decode phase" of LLM inference) maxes out at roughly memory_bandwidth / model_size_in_bytes tokens per second.',
          'Math: A 7B parameter model in FP16 (16-bit floats) weighs ~14 GB. At 85.6 GB/s ÷ 14 GB ≈ 6 tokens/sec theoretical maximum. But quantization changes this dramatically.',
          'Quantized at Q4 (4-bit, storing 2 parameters per byte), the same 7B model shrinks to ~3.5 GB. Throughput scales: 85.6 GB/s ÷ 3.5 GB ≈ 24 tokens/sec theoretical max. Real-world is lower due to compute overhead, but realistic targets are 8–15 tokens/sec on Galaxy S26 for a quantized 7B model.',
          'Best tools: MLC Chat (cross-platform, community models), Google AI Edge Gallery, and Ollama running inside Termux. All support quantized models. Start with a 3B–8B model (Qwen3 4B, Gemma 3 4B, Llama 3.2 3B, Phi-4-mini) at Q4 or Q5; a 7B–8B model fits in 12 GB RAM but leaves less room for Android itself.'
        ],
        items: [
          'Use Q4 (4-bit) quantization for 7B models; Q3 (3-bit) fits larger models but loses quality',
          'Avoid FP16 full-precision models; they\'re too large for practical throughput',
          'Best open-weight models for mobile: Qwen3 4B, Gemma 3 4B, Llama 3.2 3B, Phi-4-mini',
          'Expected speed: 8–15 tokens/sec for 7B Q4; 3–5 tokens/sec for unquantized 7B',
          'Use MLC Chat, Google AI Edge Gallery or Ollama in Termux; check each app for NPU support, since many run on CPU/GPU only',
          'Test offline: if Ollama caches the model, inference works entirely without internet'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Galaxy S26 Privacy: What Leaves Your Device?',
        content: [
          'Knox Vault is Samsung\'s hardware security module: a separate processor isolated from the main CPU and Android OS. Sensitive data—payment methods, fingerprints, health records, passwords—lives in Knox Vault and is never exposed to apps or Samsung\'s servers without explicit user action.',
          'Personal Data Engine (PDE) learns locally: on-device machine learning models train on your usage patterns, calendar, messages, photos, and contacts. By default, this data never touches Samsung\'s cloud. You control the boundary with the "Process data only on device" toggle in Galaxy AI settings.',
          'Cloud features need a network connection: Creative Studio requires a Samsung Account login, and Circle to Search requires internet. Each feature has its own privacy policy; review them before use.',
          'Cross-device privacy: Knox Matrix synchronizes security settings and encrypted data across your Galaxy devices using end-to-end encryption. Samsung describes Knox Enhanced Encrypted Protection (KEEP) as encrypting each app\'s data.',
          'Verify rather than assume: Samsung does not publish a per-feature map of what runs locally, so check the \"Process data only on device\" setting and each feature\'s privacy notice on your phone.'
        ],
        items: [
          'Knox Vault = hardware-isolated enclave for secrets; separate processor, separate OS, never synced to cloud',
          'PDE = local learning engine; trains on your data without uploading',
          '"Process data only on device" toggle = blocks all cloud fallback for supported features',
          'Creative Studio = cloud-dependent; disabling it prevents image gen data transmission',
          'Gemini agents = Google-powered; uses your Google account for multi-step tasks',
          'Knox Matrix = cross-device security sync; see Samsung\'s Knox documentation for its encryption model'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Galaxy AI fully on-device or does it use cloud?',
            a: 'Hybrid. Call Screening, Now Nudge, Now Brief, and Scam Detection run entirely on-device using the Personal Data Engine. Image generation (Creative Studio), Gemini agents, and Circle to Search require cloud servers. Enable "Process data only on device" in settings to force local-only processing for supported features.'
          },
          {
            q: 'What is the Personal Data Engine on the Galaxy S26?',
            a: 'Samsung describes the Personal Data Engine (PDE) as the on-device component that enables context-aware, personalized Galaxy AI experiences. Samsung\'s launch material states that PDE is on-device but does not publish its architecture, the model behind it, or a list of which features depend on it.'
          },
          {
            q: 'Is it safe to use AI on the Galaxy S26?',
            a: 'Safer when processing stays on the phone, but not uniformly. Creative Studio needs a network connection and Samsung Account login, and Circle to Search needs internet, so those send data off the device. The "Process data only on device" setting limits Galaxy AI to local processing; guides for earlier One UI versions describe it as a setting you switch on yourself and report that cloud-based photo edits stop working. Its menu location varies by firmware, so confirm on your phone and read Samsung\'s privacy notice.'
          },
          {
            q: 'Is the base Galaxy S26 enough for on-device AI, or do I need the Ultra?',
            a: 'For Galaxy AI features, the base S26 is enough: Samsung gives all three models the same Galaxy AI suite. For running your own models, RAM matters most: the S26 and S26+ have 12 GB, the Ultra 12 GB or 16 GB. A 12 GB phone handles 3B–8B models at Q4; choose the 16 GB Ultra only for larger models. Independent AI tests show the Exynos 2600 and Snapdragon 8 Elite Gen 5 roughly level.'
          },
          {
            q: 'What\'s the difference between Exynos 2600 and Snapdragon 8 Elite Gen 5?',
            a: 'Exynos 2600 (2nm, Samsung Foundry) is claimed by Samsung to be +113% faster at AI than Exynos 2500. Snapdragon 8 Elite Gen 5 for Galaxy gives the S26 Ultra +39% NPU over the S25 Ultra (Samsung figure). In MLPerf Mobile results the Exynos wins classification, detection and language tests, and the Snapdragon wins segmentation, super-resolution and Stable Diffusion, so neither is a clear winner for local AI.'
          },
          {
            q: 'Can I run a large language model on Galaxy S26?',
            a: 'Yes, but with limits. LPDDR5X bandwidth (85.6 GB/s) caps decode throughput. A quantized 7B model at Q4 reaches ~24 tokens/sec theoretical max (~8–15 realistic). Use MLC Chat, Google AI Edge Gallery or Ollama in Termux. Larger models (13B, 70B) are impractical due to memory and bandwidth constraints.'
          },
          {
            q: 'Does Galaxy AI work offline?',
            a: 'Partially. On-device LLMs you run yourself (for example Ollama in Termux) work fully offline once the model is downloaded. Creative Studio, Gemini agents, and Circle to Search require internet. Samsung does not state which processing location Call Screening, Now Nudge, Now Brief and Scam Detection use, so test them in airplane mode; "Process data only on device" limits Galaxy AI to local processing.'
          },
          {
            q: 'What is EdgeFusion and does it ship on Galaxy S26?',
            a: 'EdgeFusion is Nota AI\'s optimized Stable Diffusion for mobile NPUs, generating 512×512 images in <1 second on Exynos 2600. Samsung officially partnered with Nota AI, but "EdgeFusion" was never named in official Galaxy Unpacked materials. Creative Studio (the shipping image gen app) requires network + Samsung account, so EdgeFusion\'s exact status at launch is unclear.'
          },
          {
            q: 'What data does Samsung collect via Galaxy AI?',
            a: 'Samsung states the Personal Data Engine is on-device. Cloud features such as Creative Studio (network and Samsung Account required) and Circle to Search (internet required) do send data. When you enable cloud features—Creative Studio, Gemini agents—data is sent to Samsung (for Galaxy AI) or Google (for Gemini). Disable these features to prevent transmission. Check Settings > Privacy > Galaxy AI for a breakdown of what\'s enabled.'
          },
          {
            q: 'Does Knox Vault protect my data from Samsung?',
            a: 'Yes. Knox Vault is a separate hardware processor isolated from the main OS. Sensitive data (biometrics, payment info, health) stored in Knox Vault cannot be accessed by Android apps or Samsung software without explicit unlock. Samsung describes Knox Vault as a physical layer that isolates sensitive data inside its own secure hardware; no security system is absolute.'
          },
          {
            q: 'Can I disable Galaxy AI cloud features entirely?',
            a: 'Yes. Disable individual features in Settings > Galaxy AI. You can toggle off Creative Studio, Gemini agents, and Circle to Search independently. Enable "Process data only on device" to block cloud fallback for supported features. On-device features (Call Screening, Now Nudge) continue working.'
          },
          {
            q: 'Is Galaxy S26 better than iPhone for running local AI?',
            a: 'For running your own quantized LLMs, yes. Android supports more open-weight model tools (MLC Chat, Google AI Edge Gallery, Ollama in Termux). But Apple\'s on-device-first philosophy and cryptographically auditable PCC make it stronger for privacy if you trust Apple\'s infrastructure over Samsung\'s.'
          },
          {
            q: 'How often will Galaxy AI features be updated?',
            a: 'Galaxy AI features roll out via One UI updates (usually monthly security patches + quarterly feature updates). Samsung states seven years of security updates for the Galaxy S26; check Samsung\'s support pages for the OS-update commitment.'
          }
        ]
      },
      relatedReading: {
        title: 'Related Reading',
        items: [
          'Samsung Galaxy S26 Unpacked announcement (Feb 25, 2026) — official feature overview',
          'Nota AI EdgeFusion research paper — on-device Stable Diffusion optimization techniques',
          'Knox security white paper — hardware security enclave architecture and threat model',
          '[Mobile Local LLMs 2026: iPhone 16 Pro, iPad M4 & Snapdragon X](/local-llms/mobile-local-llms) -- local LLMs on mobile devices',
          '[On-Device AI & Memory: Why HBM Memory Drives Local AI Speed (2026)](/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026) -- HBM memory and on-device AI speed',
          '[Galaxy vs iPhone On-Device AI: Samsung Galaxy AI vs Apple Intelligence (2026)](/local-llms/galaxy-vs-iphone-on-device-ai-2026) -- Galaxy AI vs Apple Intelligence comparison',
          '[Apple M5 for Local AI: Performance, Memory, and What Changed (2026)](/local-llms/apple-silicon-m5-local-llm) -- Apple M5 chip for local AI',
          '[Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models) -- which models to run on-device',
        ]
      }
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Running Local AI on the Galaxy S26: On-Device AI Explained (2026)',
      'description': 'Galaxy S26 on-device AI explained: what the Samsung Personal Data Engine does, which Galaxy AI features need the cloud, and how to run local LLMs on Exynos 2600 or Snapdragon.',
      'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png',
      'datePublished': '2026-06-15',
      'dateModified': '2026-10-19',
      'author': {
        '@type': 'Organization',
        'name': 'PromptQuorum'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com'
      },
      'inLanguage': 'en',
      'url': 'https://www.promptquorum.com/local-llms/galaxy-s26-local-ai-on-device-2026',
      'articleBody': 'The Galaxy S26, launched February 25, 2026, brings Samsung\'s hybrid on-device and cloud AI platform—Galaxy AI—to your pocket. But unlike Apple\'s on-device-first approach, Samsung balances local processing with cloud features, letting you choose where your data goes.',

      'proficiencyLevel': 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'en',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is the Personal Data Engine on the Galaxy S26?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Samsung describes the Personal Data Engine (PDE) as the on-device component that enables context-aware, personalized Galaxy AI experiences. Samsung\'s launch material states that PDE is on-device but does not publish its architecture, the model behind it, or a list of which features depend on it.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is Galaxy AI fully on-device or does it use cloud?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Hybrid. Call Screening, Now Nudge, Now Brief, and Scam Detection run entirely on-device using the Personal Data Engine. Image generation (Creative Studio), Gemini agents, and Circle to Search require cloud servers. Enable "Process data only on device" in settings to force local-only processing for supported features.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What\'s the difference between Exynos 2600 and Snapdragon 8 Elite Gen 5?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Exynos 2600 (2nm, Samsung Foundry) is claimed by Samsung to be +113% faster at AI than Exynos 2500. Snapdragon 8 Elite Gen 5 for Galaxy gives the S26 Ultra +39% NPU over the S25 Ultra (Samsung figure). In MLPerf Mobile results the Exynos wins classification, detection and language tests, and the Snapdragon wins segmentation, super-resolution and Stable Diffusion, so neither is a clear winner for local AI.'
          }
        }
      ]
    }
  },
  ko: {
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-ko.webp',
    title: '갤럭시 S26 온디바이스 AI 완벽 가이드: Galaxy AI·NPU 작동 원리 (2026)',
    seoTitle: '갤럭시 S26 온디바이스 AI: Galaxy AI·NPU 작동 원리',
    intro: '2026년 2월 25일 출시된 갤럭시 S26은 삼성의 하이브리드 온디바이스·클라우드 AI 플랫폼인 Galaxy AI를 탑재합니다. 애플의 온디바이스 우선 방식과 달리 삼성은 로컬 처리와 클라우드 기능의 균형을 맞추고, 데이터 처리 위치를 사용자가 선택하도록 합니다. 이 가이드는 Galaxy AI가 실제로 온디바이스에서 어떻게 작동하는지, 어떤 기능이 클라우드가 필요한지, S26 하드웨어에서 자신의 오픈웨이트 LLM을 실행하는 방법을 설명합니다.',
    metaDescription: '갤럭시 S26 온디바이스 AI 설명: 삼성 Personal Data Engine의 역할, 클라우드가 필요한 Galaxy AI 기능, Exynos 2600과 Snapdragon에서 로컬 LLM을 실행하는 방법',
    publishDate: '2026-06-15',
    dateModified: '2026-10-19',
    readTime: '10분 읽기',
    educationalLevel: 'Intermediate',
    audience: '온디바이스 AI에 관심 있는 안드로이드 사용자, 갤럭시 S26 구매자, 모바일 LLM 추론을 탐색하는 개발자',
    primaryTerm: '갤럭시 S26 온디바이스 AI',
    leadAnswerBlock: '**갤럭시 S26은 Galaxy AI를 탑재합니다. 온디바이스 처리(통화 스크리닝, Now Nudge, 스캠 탐지)와 클라우드 기능(Creative Studio 이미지 생성, Gemini 통합)을 혼합합니다. 프라이버시 토글: "디바이스에서만 데이터 처리"를 활성화하면 모든 클라우드 폴백을 제한합니다. 칩은 모델과 지역에 따라 다릅니다. S26 Ultra는 모든 지역에서 Galaxy용 Snapdragon 8 Elite Gen 5를 사용하고, S26과 S26+는 한국·유럽 등 대부분의 시장에서 Exynos 2600, 미국·중국·일본에서는 Snapdragon을 사용합니다. 독립 AI 테스트에서 두 칩은 대체로 비슷하므로 칩이 아니라 모델과 가격으로 고르세요. 자신의 LLM을 실행하려면: Q4 양자화 7B 모델이 LPDDR5X 85.6 GB/s에서 ~24 tokens/sec에 도달합니다.**',
    quickAnswerTop: {
      ko: {
        question: '갤럭시 S26에서 클라우드로 데이터를 보내지 않고 온디바이스로 작동하는 갤럭시 AI 기능은 무엇입니까?',
        answer: '전화 스크리닝(자동 응답), Now Nudge(문맥 제안), Now Brief(개인 요약), 스캠 탐지는 모두 Personal Data Engine(PDE)을 사용하여 로컬에서 데이터를 처리합니다. 갤럭시 AI 설정에서 "디바이스에서만 데이터 처리"를 활성화하면 지원되는 기능의 클라우드 폴백을 차단할 수 있습니다. 이미지 생성(Creative Studio)은 네트워크 연결과 삼성 계정 로그인이 필요합니다.',
        bullets: [
          '전화 스크리닝은 낯선 발신자를 식별하고 용건을 요약합니다(삼성은 처리 위치를 밝히지 않음)',
          'Now Nudge는 공유할 갤러리 사진을 제안하며 삼성 계정 로그인이 필요합니다',
          '스캠 탐지는 의심스러운 통화를 표시합니다. 삼성은 처리 위치를 공개하지 않습니다',
          '"디바이스에서만 데이터 처리" 토글을 활성화하여 지원되는 기능의 로컬 처리를 강제합니다',
          'Creative Studio 이미지 생성은 클라우드만 지원(삼성 계정 + 네트워크 필요)',
          'Exynos 2600은 Exynos 2500보다 Stable Diffusion에서 2.4배 더 빠릅니다'
        ],
        updatedDate: '2026-10-19'
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: 'Galaxy AI란 무엇인가?', anchor: '#what-is-galaxy-ai' },
      { label: '온디바이스 vs 클라우드: 어떤 기능이 로컬에 남나?', anchor: '#on-device-vs-cloud' },
      { label: 'S26의 온디바이스 이미지 생성', anchor: '#edgefusion' },
      { label: 'Exynos 2600 vs Snapdragon 8 Elite Gen 5 NPU', anchor: '#npu-comparison' },
      { label: '갤럭시 S26에서 자신의 LLM 실행', anchor: '#run-own-llm' },
      { label: '갤럭시 S26 프라이버시: 어떤 데이터가 디바이스를 떠나나?', anchor: '#privacy' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 자료', anchor: '#related-reading' }
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Galaxy AI는 하이브리드 플랫폼입니다: 삼성은 Personal Data Engine(PDE)이 온디바이스이며 Now Nudge, Now Brief, 전화 스크리닝 같은 문맥 기능을 구동한다고 밝히지만, 기능별 처리 위치 목록은 공개하지 않습니다. Creative Studio는 네트워크 연결과 삼성 계정이 필요하고, Circle to Search는 인터넷이 필요합니다.',
          '칩은 모델과 지역에 따라 다릅니다: S26 Ultra는 항상 Galaxy용 Snapdragon 8 Elite Gen 5를 사용하고, S26과 S26+는 미국·중국·일본 외 지역에서 Exynos 2600을 사용합니다. 삼성은 Exynos 2500 대비 NPU +113%, Ultra의 S25 Ultra 대비 NPU +39%를 주장합니다. MLPerf Mobile 결과는 두 칩이 나뉘므로 로컬 LLM에서 명확한 승자는 없습니다.',
          '프라이버시 토글: 설정 > Galaxy AI에서 "디바이스에서만 데이터 처리"를 활성화하면 클라우드 폴백을 방지합니다. Knox Vault 하드웨어 보안은 민감한 데이터를 보호하고, Knox Matrix는 디바이스 간 설정을 동기화합니다.',
          '온디바이스 이미지 생성: 삼성이 Nota AI와 파트너십을 통해 EdgeFusion을 개발했으며, Exynos 2600 NPU에서 1초 미만에 512×512 이미지를 생성합니다. Creative Studio(사용자 대면 앱)는 네트워크 + 삼성 계정이 필요합니다.',
          '자신의 LLM 실행: LPDDR5X 메모리(85.6 GB/s)가 디코드 처리량을 제한합니다. Q4(4비트)로 양자화된 7B 모델은 이론적으로 최대 ~24 tokens/sec에 도달합니다. MLC Chat 또는 Android용 Ollama를 사용하여 테스트하세요.',
          'RAM: S26과 S26+는 12 GB, S26 Ultra는 12 GB 또는 16 GB입니다. 메모리 용량이 들어가는 모델을 정하고 대역폭이 디코드 속도를 정하므로, 12 GB 기본 S26으로 3B–8B Q4 모델은 충분하고 16 GB Ultra는 더 큰 모델을 위한 여유를 줍니다.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'Galaxy AI란 무엇인가?',
        content: [
          'Galaxy AI는 삼성의 온디바이스 인텔리전스 플랫폼으로, 삼성이 Personal Data Engine 기반의 온디바이스 Galaxy AI로 설명하는 플랫폼으로, Gemini와 Perplexity가 에이전트로 통합되어 있습니다. 삼성은 각 온디바이스 기능에서 어떤 언어 모델이 실행되는지 공개하지 않습니다. Galaxy S24로 출시되어 S25에서 개선되었고 S26에서 확장되었습니다(2026년 2월 25일 출시). 로컬 처리는 프라이버시를 위해, 클라우드 기능은 성능을 위해 균형을 맞춥니다.',
          'Personal Data Engine(PDE)이 핵심입니다: 메시지, 캘린더, 사진, 위치 기록 등 온디바이스 데이터에서 학습하며, 삼성은 PDE가 온디바이스라고 밝힙니다. Knox Vault(하드웨어 보안 암호화 저장소)는 민감한 데이터(자격 증명, 건강 기록, 결제 정보)를 삼성 소프트웨어로부터도 격리하는 것을 목표로 합니다.',
          '삼성이 기능별로 확인하는 것은 두 가지뿐입니다. Creative Studio는 네트워크 연결과 삼성 계정이 필요하고, Circle to Search는 인터넷이 필요합니다. 전화 스크리닝, Now Nudge, Now Brief, 스캠 탐지의 처리 위치는 삼성이 밝히지 않으므로 아래 표는 삼성의 보장이 아니라 작업용 분류입니다.',
          '사용자 제어가 핵심입니다: Galaxy AI 설정의 단일 토글인 "디바이스에서만 데이터 처리"는 호환 기능의 모든 클라우드 폴백을 차단합니다. 이는 사후 대응 프라이버시를 위한 장치입니다.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Galaxy AI는 Personal Data Engine(PDE)을 통해 온디바이스 기능을 실행하고 필요에 따라 클라우드 기능을 제공하며, 단일 토글로 디바이스 전용 처리를 강제합니다.' },
          { type: 'plain-terms', text: 'Knox Vault = 암호 용 하드웨어 잠금장치; PDE = 데이터를 업로드하지 않고 학습; 토글 = 클라우드 기능 활성화 여부를 선택합니다.' }
        ]
      },
      'on-device-vs-cloud': {
        id: 'on-device-vs-cloud',
        title: '온디바이스 vs 클라우드: 어떤 기능이 로컬에 남나?',
        columns: ['기능', '처리 위치', '사용자 데이터 전송?', '네트워크 필요?'],
        rows: [
          {
            '기능': '통화 스크리닝',
            '처리 위치': '온디바이스(NPU)',
            '사용자 데이터 전송?': '아니요 — 발신자 음성 로컬 필사',
            '네트워크 필요?': '아니요'
          },
          {
            '기능': 'Now Nudge',
            '처리 위치': '온디바이스(PDE)',
            '사용자 데이터 전송?': '아니요 — 화면+캘린더 로컬 읽기',
            '네트워크 필요?': '아니요'
          },
          {
            '기능': 'Now Brief',
            '처리 위치': '온디바이스(PDE)',
            '사용자 데이터 전송?': '아니요 — 로컬 예약+이벤트 요약',
            '네트워크 필요?': '아니요'
          },
          {
            '기능': '스캠 탐지',
            '처리 위치': '온디바이스(NPU)',
            '사용자 데이터 전송?': '아니요 — 통화 음성+의도 로컬 표시',
            '네트워크 필요?': '아니요'
          },
          {
            '기능': 'Creative Studio(이미지 생성)',
            '처리 위치': '클라우드(삼성 서버)',
            '사용자 데이터 전송?': '예 — 텍스트 프롬프트+참조 이미지',
            '네트워크 필요?': '예 — 계정+인터넷 필요'
          },
          {
            '기능': 'Gemini 에이전트(다단계 작업)',
            '처리 위치': '클라우드(Google Gemini)',
            '사용자 데이터 전송?': '예 — 작업 의도를 Google 서버로',
            '네트워크 필요?': '예'
          },
          {
            '기능': 'Circle to Search',
            '처리 위치': '클라우드(Google)',
            '사용자 데이터 전송?': '예 — 스크린샷 영역을 Google로',
            '네트워크 필요?': '예'
          },
          {
            '기능': '사진 도움(복잡한 편집)',
            '처리 위치': '하이브리드(로컬 세분화, 클라우드 생성)',
            '사용자 데이터 전송?': '부분 — 이미지를 생성 모델로 전송',
            '네트워크 필요?': '객체 제거/배경 변경 시 예'
          }
        ]
      },
      'edgefusion': {
        id: 'edgefusion',
        title: 'S26의 온디바이스 이미지 생성',
        content: [
          '삼성이 Nota AI(한국)와 파트너십을 통해 모바일 NPU 추론을 위해 Stable Diffusion을 최적화했습니다. 결과: 1초 미만에 텍스트-이미지 생성으로 512×512 픽셀 포토리얼리스틱 이미지를 100% 온디바이스에서 생성합니다. 네트워크 필요 없음.',
          '이 기법을 EdgeFusion이라고 합니다(Nota AI 연구에서): Latent Consistency Model(LCM) 스케줄러를 사용하여 표준 50단계 대신 2단계 디노징을 사용하므로 계산을 ~96% 감소시킵니다. 모델 레벨 타일링은 교차 주의 지연을 ~73% 감소시킵니다. 혼합 정밀도 양자화(U-Net의 W8A16)는 VRAM 사용량을 절반으로 줄이면서 품질을 유지합니다.',
          '성능: Exynos 2600 NPU에서 검증되었으며, 512×512 이미지를 1초 미만에 생성합니다. Exynos 2600은 Exynos 2500보다 Stable Diffusion에서 2.4배 빠르므로 이는 현실적입니다. 미국/중국/일본 변형의 Snapdragon 8 Elite Gen 5도 유사하거나 약간 더 긴 시간을 달성할 가능성이 높습니다.',
          '현실 점검: 삼성의 배송 앱인 Creative Studio는 네트워크+삼성 계정 로그인이 필요합니다. EdgeFusion이 출시 시 사용자 대면 기능으로 배송되었는지 또는 향후 업데이트를 지원하는지 불명확합니다. 삼성은 공식 Unpacked 자료에서 "EdgeFusion"을 언급하지 않았습니다. 이 기능은 Nota AI 연구 파트너십에서 유래합니다. 이 지식을 사용하여 기대를 관리하세요: 온디바이스 이미지 생성이 나오고 있지만 첫날에 완전히 배송되지 않을 수 있습니다.'
        ],
        items: [
          'LCM 스케줄러: 2단계 디노징으로 50단계 표준 확산을 대체, 96% 계산 단계 감소',
          '모델 레벨 타일링: 교차 주의 메모리 액세스 감소, ~73% 지연 개선',
          'W8A16 양자화: 8비트 가중치, 16비트 활성화, 인지할 수 있는 품질 손실 없음',
          '대상 해상도: 512×512 픽셀, 포토리얼리스틱 출력',
          'NPU 최적화: Exynos 2600 텐서 코어는 대부분의 계산을 처리하고, 최소한의 CPU 오버헤드',
          '오프라인 가능: EdgeFusion이 활성화되면 네트워크 의존성 없음'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'EdgeFusion은 Stable Diffusion을 50개의 디노징 단계에서 단 2개로 줄이고, 양자화 가중치와 모델 레벨 타일링을 사용하여 온디바이스에서 512×512 이미지를 <1초에 생성합니다.' },
          { type: 'plain-terms', text: '더 적은 디노징 단계 = 더 적은 계산 = 더 빠른 추론. 양자화는 모델을 축소합니다. 타일링은 주의 레이어를 폰 VRAM에 맞추기 위해 분할합니다. 함께: 오프라인 즉시 이미지.' }
        ]
      },
      'npu-comparison': {
        id: 'npu-comparison',
        title: 'Exynos 2600 vs Snapdragon 8 Elite Gen 5 NPU',
        image: '/images/galaxy-s26-npu-comparison-en.svg',
        imageCaption: '갤럭시 S26의 Exynos 2600 vs Snapdragon 8 Elite Gen 5: 2nm GAA vs 3nm FinFET, 삼성이 주장하는 NPU 세대별 향상 +113% vs +39%(기준이 다름), LPDDR5X 메모리 대역폭 85.6 GB/s vs 84.8 GB/s.',
        columns: ['지표', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', '온디바이스 AI의 승자?'],
        rows: [
          {
            '지표': '노드 / 파운드리',
            'Exynos 2600': '2nm GAA(삼성 SF2)',
            'Snapdragon 8 Elite Gen 5': '3nm FinFET(TSMC)',
            '온디바이스 AI의 승자?': '입증 안 됨(노드가 다름)'
          },
          {
            '지표': 'AI 성능 세대별',
            'Exynos 2600': 'Exynos 2500 대비 +113%',
            'Snapdragon 8 Elite Gen 5': 'S25 Ultra 대비 NPU +39%(Ultra)',
            '온디바이스 AI의 승자?': '비교 불가(기준이 다름)'
          },
          {
            '지표': 'Stable Diffusion 속도',
            'Exynos 2600': 'Exynos 2500보다 2.4배 빠름',
            'Snapdragon 8 Elite Gen 5': 'MLPerf Stable Diffusion 테스트 1위',
            '온디바이스 AI의 승자?': 'Snapdragon(MLPerf Mobile)'
          },
          {
            '지표': '사용 가능 지역/변형',
            'Exynos 2600': 'S26 / S26+(미국·중국·일본 외)',
            'Snapdragon 8 Elite Gen 5': 'S26 / S26+(미국·중국·일본), S26 Ultra(전 지역)',
            '온디바이스 AI의 승자?': '지역에 따라 다름'
          },
          {
            '지표': '메모리 대역폭',
            'Exynos 2600': 'LPDDR5X 85.6 GB/s(일반)',
            'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84.8 GB/s(일반)',
            '온디바이스 AI의 승자?': '동률(차이 1% 미만)'
          },
          {
            '지표': '평결',
            'Exynos 2600': '분류·탐지·언어 테스트 우세',
            'Snapdragon 8 Elite Gen 5': '분할·초해상도·Stable Diffusion 우세',
            '온디바이스 AI의 승자?': '대체로 비슷함; 모델과 가격으로 선택'
          }
        ]
      },
      'run-own-llm': {
        id: 'run-own-llm',
        title: '갤럭시 S26에서 자신의 LLM 실행',
        image: '/images/galaxy-s26-7b-model-throughput-en.svg',
        imageCaption: 'LPDDR5X 85.6 GB/s 기준 갤럭시 S26의 양자화별 7B 모델 디코드 속도: FP16(~14 GB)은 6 tokens/sec에 그치고, Q4 4비트(~3.5 GB)는 이론상 24 tokens/sec, 실제로는 8–15 tokens/sec에 도달합니다.',
        content: [
          '갤럭시 S26의 메모리 대역폭은 제한 요소입니다. LPDDR5X 85.6 GB/s는 토큰 생성("디코드 단계")을 대략 memory_bandwidth / model_size_in_bytes tokens/sec로 제한합니다.',
          '계산: 7B 매개변수 모델(FP16, 16비트 부동소수점)은 ~14 GB입니다. 85.6 GB/s ÷ 14 GB ≈ 6 tokens/sec 이론적 최대치. 하지만 양자화는 이를 급격하게 변경합니다.',
          'Q4(4비트, 바이트당 2개 매개변수)로 양자화하면 동일한 7B 모델은 ~3.5 GB로 축소됩니다. 처리량은 다음과 같이 확장됩니다: 85.6 GB/s ÷ 3.5 GB ≈ 24 tokens/sec 이론적 최대치. 실제 세계는 계산 오버헤드로 인해 더 낮지만, 갤럭시 S26의 양자화된 7B 모델에 대한 현실적인 목표는 8–15 tokens/sec입니다.',
          '최적 도구: MLC Chat(크로스 플랫폼, 커뮤니티 모델), Google AI Edge Gallery, Termux에서 실행하는 Ollama. 모두 양자화 모델을 지원합니다. 3B–8B 모델(Qwen3 4B, Gemma 3 4B, Llama 3.2 3B, Phi-4-mini)을 Q4 또는 Q5 양자화로 시작하세요. 7B–8B 모델은 12 GB RAM에 들어가지만 Android 자체를 위한 여유가 줄어듭니다.'
        ],
        items: [
          '7B 모델의 경우 Q4(4비트) 양자화 사용; Q3(3비트)은 더 큰 모델에 맞지만 품질 손실',
          'FP16 완전 정밀도 모델을 피하세요. 실질적인 처리량에 너무 큼',
          '모바일에 최적의 오픈웨이트 모델: Qwen3 4B, Gemma 3 4B, Llama 3.2 3B, Phi-4-mini',
          '예상 속도: 7B Q4의 경우 8–15 tokens/sec; 양자화되지 않은 7B의 경우 3–5 tokens/sec',
          'MLC Chat, Google AI Edge Gallery 또는 Termux의 Ollama 사용; 많은 앱이 CPU/GPU에서만 실행되므로 앱별 NPU 지원을 확인하세요',
          '오프라인 테스트: Ollama가 모델을 캐시하면 추론이 인터넷 없이 완전히 작동'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: '갤럭시 S26 프라이버시: 어떤 데이터가 디바이스를 떠나나?',
        content: [
          'Knox Vault는 삼성의 하드웨어 보안 모듈입니다: 기본 CPU 및 Android OS와 격리된 별도의 프로세서. 민감한 데이터(결제 방법, 지문, 건강 기록, 비밀번호)는 Knox Vault에 저장되며 명시적인 사용자 조치 없이는 앱이나 삼성 서버에 노출되지 않습니다.',
          'Personal Data Engine(PDE)은 로컬에서 학습합니다: 온디바이스 머신러닝 모델은 사용 패턴, 캘린더, 메시지, 사진, 연락처에 대해 학습합니다. 삼성은 PDE가 온디바이스라고 밝힙니다. Galaxy AI 설정의 "디바이스에서만 데이터 처리" 토글로 경계를 제어합니다.',
          '클라우드 기능은 네트워크 연결이 필요합니다: Creative Studio는 삼성 계정 로그인이, Circle to Search는 인터넷이 필요합니다. 각 기능에는 고유한 프라이버시 정책이 있으므로 사용 전에 확인하세요.',
          '크로스 디바이스 프라이버시: Knox Matrix는 엔드-투-엔드 암호화를 사용하여 Galaxy 디바이스 간에 보안 설정 및 암호화된 데이터를 동기화합니다. 삼성은 Knox Enhanced Encrypted Protection(KEEP)이 앱별 데이터를 암호화한다고 설명합니다.',
          '가정하지 말고 확인하세요: 삼성은 기능별로 무엇이 로컬에서 실행되는지 공개하지 않으므로, 휴대폰에서 "디바이스에서만 데이터 처리" 설정과 각 기능의 개인정보 안내를 직접 확인하세요.'
        ],
        items: [
          'Knox Vault = 비밀용 하드웨어 격리 암호화 저장소; 별도 프로세서, 별도 OS, 클라우드에 절대 동기화 안 됨',
          'PDE = 로컬 학습 엔진; 업로드하지 않고 데이터에서 학습',
          '"디바이스에서만 데이터 처리" 토글 = 지원 기능의 모든 클라우드 폴백 차단',
          'Creative Studio = 클라우드 의존; 비활성화하면 이미지 생성 데이터 전송 방지',
          'Gemini 에이전트 = Google 지원; 다단계 작업을 위해 Google 계정 사용',
          'Knox Matrix = 디바이스 간 보안 동기화; 암호화 모델은 삼성 Knox 문서를 참조'
        ]
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Galaxy AI는 완전히 온디바이스인가요 아니면 클라우드를 사용하나요?',
            a: '하이브리드입니다. 삼성은 Personal Data Engine이 온디바이스라고 밝히지만, 통화 스크리닝, Now Nudge, Now Brief, 스캠 탐지의 처리 위치는 기능별로 공개하지 않습니다. 이미지 생성(Creative Studio)은 네트워크 연결과 삼성 계정이, Circle to Search는 인터넷이 필요합니다. 설정에서 "디바이스에서만 데이터 처리"를 활성화하여 지원 기능에 대한 로컬 전용 처리를 강제합니다.'
          },
          {
          q: '갤럭시 S26의 Personal Data Engine이란 무엇인가요?',
          a: '삼성은 Personal Data Engine(PDE)을 문맥을 인식하는 개인화된 Galaxy AI 경험을 가능하게 하는 온디바이스 구성요소로 설명합니다. 삼성의 출시 자료는 PDE가 온디바이스라고 밝히지만, 그 구조와 기반 모델, PDE에 의존하는 기능 목록은 공개하지 않습니다.'
          },
          {
          q: '갤럭시 S26에서 AI를 사용하는 것은 안전한가요?',
          a: '처리가 휴대폰 안에 머물수록 더 안전하지만, 모든 기능이 똑같지는 않습니다. Creative Studio는 네트워크 연결과 삼성 계정 로그인이 필요하고 Circle to Search는 인터넷이 필요하므로 데이터가 기기 밖으로 나갑니다. "디바이스에서만 데이터 처리" 설정은 Galaxy AI를 로컬 처리로 제한합니다. 이전 One UI 버전 가이드는 이를 사용자가 직접 켜는 설정이며 켜면 클라우드 기반 사진 편집이 작동하지 않는다고 설명합니다. 메뉴 위치는 펌웨어마다 다르므로 휴대폰에서 확인하고 삼성의 개인정보 안내를 읽어 보세요.'
          },
          {
          q: '기본 갤럭시 S26만으로 온디바이스 AI에 충분한가요, 아니면 Ultra가 필요한가요?',
          a: 'Galaxy AI 기능에는 기본 S26으로 충분합니다. 삼성은 세 모델 모두에 같은 Galaxy AI 제품군을 제공합니다. 자신의 모델을 실행할 때는 RAM이 가장 중요합니다. S26과 S26+는 12 GB, Ultra는 12 GB 또는 16 GB입니다. 12 GB 휴대폰은 Q4의 3B–8B 모델을 처리하며, 더 큰 모델이 필요할 때만 16 GB Ultra를 고르세요. 독립 AI 테스트에서 Exynos 2600과 Snapdragon 8 Elite Gen 5는 대체로 비슷합니다.'
          },
          {
            q: 'Exynos 2600과 Snapdragon 8 Elite Gen 5의 차이점은 무엇인가요?',
            a: 'Exynos 2600(2nm, 삼성 파운드리)은 삼성이 Exynos 2500보다 AI에서 +113% 빠르다고 주장합니다. Galaxy용 Snapdragon 8 Elite Gen 5는 S26 Ultra에 S25 Ultra 대비 NPU +39%를 제공합니다(삼성 수치). MLPerf Mobile 결과에서 Exynos는 분류·탐지·언어 테스트에서, Snapdragon은 분할·초해상도·Stable Diffusion에서 앞서므로 로컬 AI에서 명확한 승자는 없습니다.'
          },
          {
            q: '갤럭시 S26에서 대규모 언어 모델을 실행할 수 있나요?',
            a: '예, 하지만 제한이 있습니다. LPDDR5X 대역폭(85.6 GB/s)은 디코드 처리량을 제한합니다. Q4에서 양자화된 7B 모델은 이론적 최대 ~24 tokens/sec에 도달합니다(현실적으로 ~8–15). MLC Chat, Google AI Edge Gallery 또는 Termux의 Ollama를 사용하세요. 더 큰 모델(13B, 70B)은 메모리 및 대역폭 제약으로 인해 비실용적입니다.'
          },
          {
            q: 'Galaxy AI가 오프라인으로 작동하나요?',
            a: '부분적으로. 직접 실행하는 온디바이스 LLM(예: Termux의 Ollama)은 모델을 내려받은 뒤 완전히 오프라인으로 작동합니다. Creative Studio, Gemini 에이전트, Circle to Search는 인터넷이 필요합니다. 삼성은 통화 스크리닝, Now Nudge, Now Brief, 스캠 탐지의 처리 위치를 밝히지 않으므로 비행기 모드에서 직접 테스트하세요. "디바이스에서만 데이터 처리"는 Galaxy AI를 로컬 처리로 제한합니다.'
          },
          {
            q: 'EdgeFusion이란 무엇이고 갤럭시 S26에 배송되나요?',
            a: 'EdgeFusion은 모바일 NPU를 위한 Nota AI의 최적화된 Stable Diffusion으로, Exynos 2600에서 <1초 안에 512×512 이미지를 생성합니다. 삼성은 공식적으로 Nota AI와 파트너십을 맺었지만, "EdgeFusion"은 공식 Galaxy Unpacked 자료에서 명명되지 않았습니다. 배송 이미지 생성 앱인 Creative Studio는 네트워크+삼성 계정이 필요하므로 출시 시 EdgeFusion의 정확한 상태는 불명확합니다.'
          },
          {
            q: 'Galaxy AI를 통해 삼성이 어떤 데이터를 수집하나요?',
            a: '삼성은 Personal Data Engine이 온디바이스라고 밝힙니다. Creative Studio(네트워크와 삼성 계정 필요), Circle to Search(인터넷 필요) 같은 클라우드 기능은 데이터를 전송합니다. Creative Studio, Gemini 에이전트와 같은 클라우드 기능을 활성화하면 데이터가 삼성(Galaxy AI용) 또는 Google(Gemini용) 서버로 전송됩니다. 이러한 기능을 비활성화하면 전송을 방지합니다. 설정 > 개인 정보 보호 > Galaxy AI에서 활성화된 항목의 분류를 확인하세요.'
          },
          {
            q: 'Knox Vault이 내 데이터를 삼성으로부터 보호하나요?',
            a: '예. Knox Vault는 기본 OS에서 격리된 별도의 하드웨어 프로세서입니다. Knox Vault에 저장된 민감한 데이터(생체 인식, 결제 정보, 건강)는 명시적인 잠금 해제 없이 Android 앱이나 삼성 소프트웨어로 액세스할 수 없습니다. 삼성은 Knox Vault를 민감한 데이터를 자체 보안 하드웨어 안에 격리하는 물리적 계층으로 설명하며, 어떤 보안 시스템도 절대적이지는 않습니다.'
          },
          {
            q: 'Galaxy AI 클라우드 기능을 완전히 비활성화할 수 있나요?',
            a: '예. 설정 > Galaxy AI에서 개별 기능을 비활성화합니다. Creative Studio, Gemini 에이전트, Circle to Search를 독립적으로 전환할 수 있습니다. 지원 기능에 대한 클라우드 폴백을 차단하려면 "디바이스에서만 데이터 처리"를 활성화합니다. 온디바이스 기능(통화 스크리닝, Now Nudge)은 계속 작동합니다.'
          },
          {
            q: 'Galaxy S26이 로컬 AI 실행을 위해 iPhone보다 더 나은가요?',
            a: '양자화된 LLM 실행의 경우 예. Android는 더 많은 오픈웨이트 모델 도구(MLC Chat, Google AI Edge Gallery, Termux의 Ollama)를 지원합니다. 그러나 Apple의 온디바이스 우선 철학과 암호화로 감사 가능한 PCC는 Apple 인프라를 삼성보다 신뢰한다면 프라이버시에 더 강합니다.'
          },
          {
            q: 'Galaxy AI 기능은 얼마나 자주 업데이트되나요?',
            a: 'Galaxy AI 기능은 One UI 업데이트(보통 월간 보안 패치 + 분기별 기능 업데이트)를 통해 롤아웃됩니다. 삼성은 Galaxy S26에 7년간의 보안 업데이트를 제공한다고 밝힙니다. OS 업데이트 약속은 삼성 지원 페이지에서 확인하세요.'
          }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          'Samsung Galaxy S26 Unpacked 공지(2026년 2월 25일) — 공식 기능 개요',
          'Nota AI EdgeFusion 연구 논문 — 온디바이스 Stable Diffusion 최적화 기법',
          'Knox 보안 백서 — 하드웨어 보안 암호화 저장소 아키텍처 및 위협 모델',
          '[모바일 로컬 LLM 2026: iPhone 16 Pro, iPad M4 & Snapdragon X](/ko/local-llms/mobile-local-llms) -- 모바일 기기에서 로컬 LLM 실행',
          '[HBM과 온디바이스 AI: 삼성·SK하이닉스 메모리가 AI 속도를 결정하는 이유 (2026)](/ko/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026) -- HBM 메모리와 온디바이스 AI 속도',
          '[갤럭시 AI vs 애플 인텔리전스: 온디바이스 AI 완전 비교 (2026)](/ko/local-llms/galaxy-vs-iphone-on-device-ai-2026) -- 갤럭시 AI vs 애플 인텔리전스 비교',
          '[Apple M5 로컬 AI](/ko/local-llms/apple-silicon-m5-local-llm) -- Apple M5 칩과 로컬 AI',
          '[입문자를 위한 최고의 로컬 LLM 모델](/ko/local-llms/best-beginner-local-llm-models) -- 온디바이스로 실행할 모델',
        ]
      }
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': '갤럭시 S26 온디바이스 AI 완벽 가이드: Galaxy AI·NPU 작동 원리 (2026)',
      'description': '갤럭시 S26 온디바이스 AI 설명: 삼성 Personal Data Engine의 역할, 클라우드가 필요한 Galaxy AI 기능, Exynos 2600과 Snapdragon에서 로컬 LLM을 실행하는 방법',
      'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png',
      'datePublished': '2026-06-15',
      'dateModified': '2026-10-19',
      'author': {
        '@type': 'Organization',
        'name': 'PromptQuorum'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com'
      },
      'inLanguage': 'ko',
      'url': 'https://www.promptquorum.com/ko/local-llms/galaxy-s26-local-ai-on-device-2026',
      'articleBody': '2026년 2월 25일 출시된 갤럭시 S26은 삼성의 하이브리드 온디바이스·클라우드 AI 플랫폼인 Galaxy AI를 탑재합니다.'
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'ko',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '갤럭시 S26의 Personal Data Engine이란 무엇인가요?',
          'acceptedAnswer': {
          '@type': 'Answer',
          'text': '삼성은 Personal Data Engine(PDE)을 문맥을 인식하는 개인화된 Galaxy AI 경험을 가능하게 하는 온디바이스 구성요소로 설명합니다. 삼성의 출시 자료는 PDE가 온디바이스라고 밝히지만, 그 구조와 기반 모델, PDE에 의존하는 기능 목록은 공개하지 않습니다.'
          }
          },
          {
          '@type': 'Question',
          'name': 'Galaxy AI는 완전히 온디바이스인가요 아니면 클라우드를 사용하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '하이브리드입니다. 삼성은 Personal Data Engine이 온디바이스라고 밝히지만, 통화 스크리닝, Now Nudge, Now Brief, 스캠 탐지의 처리 위치는 기능별로 공개하지 않습니다. 이미지 생성(Creative Studio), Gemini 에이전트, Circle to Search는 클라우드 서버가 필요합니다.'
          }
        }
      ]
    }
  },
  de: {
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-de.webp',
    title: 'Galaxy S26 Lokale KI Leitfaden: Galaxy AI & NPU erklär (2026)',
    seoTitle: 'Galaxy S26 Lokale KI: Galaxy AI & NPU Funktionsweise',
    intro: 'Das Galaxy S26, das am 25. Februar 2026 eingeführt wurde, bringt Samsungs Hybrid-Plattform für lokale und Cloud-KI — Galaxy AI — in Ihre Tasche. Im Gegensatz zu Apples Ansatz mit lokaler KI konzentriert sich Samsung auf den Ausgleich zwischen lokaler Verarbeitung und Cloud-Funktionen, sodass Sie entscheiden können, wo Ihre Daten verarbeitet werden. Dieser Leitfaden erklärt, was Galaxy AI tatsächlich lokal auf dem Gerät tut, welche Funktionen Cloud benötigen, und wie Sie Ihre eigenen Open-Weight-LLMs auf der S26-Hardware ausführen.',
    metaDescription: 'Galaxy S26 Lokale KI erklärt: Was die Samsung Personal Data Engine leistet, welche Galaxy-AI-Funktionen die Cloud brauchen und wie Sie lokale LLMs ausführen.',
    publishDate: '2026-06-15',
    dateModified: '2026-10-19',
    readTime: '10 Min Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Android-Nutzer interessiert an lokaler KI, Galaxy S26 Käufer, Entwickler die mobile LLM Inferenz erkunden',
    primaryTerm: 'Galaxy S26 lokale KI',
    leadAnswerBlock: '**Galaxy S26 betreibt Galaxy AI — eine Hybrid-Plattform, die lokale Verarbeitung(Anruffilterung, Now Nudge, Betrugserkennung) mit Cloud-Funktionen(Creative Studio Bildgenerierung, Gemini-Integration) mischt. Sie steuern das Datenschutz-Toggle: "Daten nur auf dem Gerät verarbeiten" beschränkt alles auf lokale Verarbeitung. Die Chips unterscheiden sich nach Modell und Region: Das S26 Ultra nutzt überall den Snapdragon 8 Elite Gen 5 for Galaxy, S26 und S26+ nutzen in Europa, Korea und den meisten anderen Märkten den Exynos 2600 und in den USA, China und Japan den Snapdragon; unabhängige KI-Tests sehen beide ungefähr gleichauf, wählen Sie also nach Modell und Preis, nicht nach Chip. Für Ihre eigenen LLMs: quantisierte 7B-Modelle bei Q4 (4-Bit) erreichen ~24 tokens/sec auf LPDDR5X 85,6 GB/s.**',
    quickAnswerTop: {
      de: {
        question: 'Welche Galaxy-AI-Funktionen des S26 laufen lokal auf dem Gerät, ohne Daten in die Cloud zu senden?',
        answer: 'Anruffilterung (beantwortet Anrufe lokal), Now Nudge (Kontextvorschläge), Now Brief (persönliche Zusammenfassungen) und Betrugserkennung verarbeiten alle Daten lokal mithilfe der Personal Data Engine (PDE). Sie können "Daten nur auf dem Gerät verarbeiten" in den Galaxy-AI-Einstellungen aktivieren, um Cloudfall-backs für unterstützte Funktionen zu blockieren. Bildgenerierung (Creative Studio) benötigt eine Netzwerkverbindung und eine Samsung-Konto-Anmeldung.',
        bullets: [
          'Anruffilterung erkennt unbekannte Anrufer und fasst deren Anliegen zusammen (Samsung gibt nicht an, wo sie läuft)',
          'Now Nudge schlägt Galerie-Fotos zum Teilen vor und erfordert eine Samsung-Konto-Anmeldung',
          'Betrugserkennung kennzeichnet verdächtige Anrufe; Samsung veröffentlicht den Verarbeitungsort nicht',
          'Aktivieren Sie den Schalter "Daten nur auf dem Gerät verarbeiten", um lokale Verarbeitung zu erzwingen',
          'Creative Studio Bildgenerierung ist nur Cloud (erfordert Samsung-Konto + Netzwerk)',
          'Exynos 2600 ist 2,4x schneller bei Stable Diffusion als Exynos 2500'
        ],
        updatedDate: '2026-10-19'
      },
    },
    toc: [
      { label: 'Wichtige Punkte', anchor: '#key-takeaways' },
      { label: 'Was ist Galaxy AI auf dem Galaxy S26?', anchor: '#what-is-galaxy-ai' },
      { label: 'Lokal vs. Cloud: Welche Funktionen bleiben lokal?', anchor: '#on-device-vs-cloud' },
      { label: 'Lokale Bildgenerierung auf dem S26', anchor: '#edgefusion' },
      { label: 'Exynos 2600 vs Snapdragon 8 Elite Gen 5 NPU', anchor: '#npu-comparison' },
      { label: 'Ihre eigenen LLMs auf dem Galaxy S26 ausführen', anchor: '#run-own-llm' },
      { label: 'Galaxy S26 Datenschutz: Was verlässt Ihr Gerät?', anchor: '#privacy' },
      { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      { label: 'Weiterführende Ressourcen', anchor: '#related-reading' }
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Galaxy AI ist eine Hybrid-Plattform: Samsung gibt an, dass die Personal Data Engine (PDE) auf dem Gerät läuft und Kontextfunktionen wie Now Nudge, Now Brief und Anruffilterung antreibt, veröffentlicht aber keine Aufstellung pro Funktion, wo sie verarbeitet wird. Creative Studio erfordert eine Netzwerkverbindung und ein Samsung-Konto; Circle to Search erfordert Internet.',
          'Der Chip hängt von Modell und Region ab: Das S26 Ultra nutzt immer den Snapdragon 8 Elite Gen 5 for Galaxy; S26 und S26+ nutzen außerhalb der USA, Chinas und Japans den Exynos 2600. Samsung nennt +113% NPU gegenüber dem Exynos 2500 und +39% NPU für das Ultra gegenüber dem S25 Ultra; die MLPerf-Mobile-Ergebnisse verteilen sich auf beide Chips, daher ist keiner ein klarer Sieger für lokale LLMs.',
          'Datenschutz-Toggle: Aktivieren Sie "Daten nur auf dem Gerät verarbeiten" in Einstellungen > Galaxy AI, um Cloud-Fallbacks zu verhindern. Knox Vault bietet Hardwaresicherheit; Knox Matrix synchronisiert Einstellungen zwischen Geräten.',
          'Lokale Bildgenerierung: Samsung partnerte mit Nota AI an EdgeFusion, das 512×512 Bilder in unter einer Sekunde auf Exynos 2600 NPU generiert. Creative Studio (die Benutzer-App) benötigt Netzwerk + Samsung-Konto.',
          'Ihre eigenen LLMs: LPDDR5X-Speicher (85,6 GB/s) begrenzt Decodedurchsatz. Ein 7B-Modell bei Q4 (4-Bit) erreicht ~24 tokens/sec theoretisches Maximum. Verwenden Sie MLC Chat oder Ollama für Android zum Testen.',
          'RAM: S26 und S26+ haben 12 GB, das S26 Ultra 12 GB oder 16 GB. Die Speichergröße bestimmt, welche Modelle passen, die Bandbreite die Dekodiergeschwindigkeit: Ein S26 mit 12 GB reicht für 3B–8B-Modelle bei Q4, das Ultra mit 16 GB bietet Reserven für größere.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'Was ist Galaxy AI auf dem Galaxy S26?',
        content: [
          'Galaxy AI ist Samsungs On-Device-Intelligence-Plattform, die Samsung als On-Device-Galaxy-AI auf Basis der Personal Data Engine beschreibt, mit Gemini und Perplexity als integrierten Agenten; Samsung veröffentlicht nicht, welches Sprachmodell welche lokale Funktion antreibt. Es wurde mit Galaxy S24 eingeführt, auf S25 verbessert und auf S26 erweitert (Start 25. Februar 2026). Es balanciert lokale Verarbeitung für Datenschutz mit Cloud-Funktionen für Leistung.',
          'Die Personal Data Engine (PDE) ist der Kern: Sie lernt aus lokalen Daten — Nachrichten, Kalender, Fotos, Standortverlauf — ohne Samsungs Server zu erreichen, es sei denn, Sie aktivieren Cloud-Funktionen explizit. Knox Vault, eine Hardware-Sicherheit, isoliert sensitive Daten (Anmeldedaten, Gesundheitsdaten, Zahlungsinfo) von sogar Samsungs eigenem OS.',
          'Samsung bestätigt pro Funktion nur zwei Dinge: Creative Studio erfordert eine Netzwerkverbindung und ein Samsung-Konto, Circle to Search erfordert Internet. Für Anruffilterung, Now Nudge, Now Brief und Betrugserkennung nennt Samsung den Verarbeitungsort nicht; die Tabelle unten ist daher eine Arbeitsklassifizierung, keine Samsung-Garantie.',
          'Nutzerkontrolle ist zentral: Ein einzelner Toggle in Galaxy AI-Einstellungen — "Daten nur auf dem Gerät verarbeiten" — blockiert alle Cloud-Fallbacks für unterstützte Funktionen. Das ist nicht nachträglicher Datenschutz; es ist das Standardverhalten, wenn Sie nicht mehr Leistung anfordern.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Galaxy AI führt lokale Funktionen via Personal Data Engine (PDE) aus und Cloud-Funktionen bei Bedarf, mit einem einzelnen Toggle zur Erzwingung von reiner Geräte-Verarbeitung.' },
          { type: 'plain-terms', text: 'Knox Vault = Hardware-Sperr für Geheimnisse; PDE = Lernt aus Ihrem Telefon ohne Hochladen; Toggle = Ihre Entscheidung, ob Cloud-Funktionen an sind.' }
        ]
      },
      'on-device-vs-cloud': {
        id: 'on-device-vs-cloud',
        title: 'Lokal vs. Cloud: Welche Funktionen bleiben lokal?',
        columns: ['Funktion', 'Verarbeitung', 'Benutzerdaten gesendet?', 'Netzwerk erforderlich?'],
        rows: [
          {
            'Funktion': 'Anruffilterung',
            'Verarbeitung': 'Lokal (NPU)',
            'Benutzerdaten gesendet?': 'Nein — Anrufer-Audio lokal transkribiert',
            'Netzwerk erforderlich?': 'Nein'
          },
          {
            'Funktion': 'Now Nudge',
            'Verarbeitung': 'Lokal (PDE)',
            'Benutzerdaten gesendet?': 'Nein — liest Bildschirm+Kalender lokal',
            'Netzwerk erforderlich?': 'Nein'
          },
          {
            'Funktion': 'Now Brief',
            'Verarbeitung': 'Lokal (PDE)',
            'Benutzerdaten gesendet?': 'Nein — fasst lokale Reservierungen zusammen',
            'Netzwerk erforderlich?': 'Nein'
          },
          {
            'Funktion': 'Betrugserkennung',
            'Verarbeitung': 'Lokal (NPU)',
            'Benutzerdaten gesendet?': 'Nein — markiert betrügerische Anrufe lokal',
            'Netzwerk erforderlich?': 'Nein'
          },
          {
            'Funktion': 'Creative Studio (Bildgen)',
            'Verarbeitung': 'Cloud (Samsung-Server)',
            'Benutzerdaten gesendet?': 'Ja — Textprompt + Referenzbilder',
            'Netzwerk erforderlich?': 'Ja — Konto+Internet erforderlich'
          },
          {
            'Funktion': 'Gemini-Agenten (mehrstufig)',
            'Verarbeitung': 'Cloud (Google Gemini)',
            'Benutzerdaten gesendet?': 'Ja — Aufgabenabsicht zu Google-Servern',
            'Netzwerk erforderlich?': 'Ja'
          },
          {
            'Funktion': 'Circle to Search',
            'Verarbeitung': 'Cloud (Google)',
            'Benutzerdaten gesendet?': 'Ja — Screenshot-Bereich zu Google',
            'Netzwerk erforderlich?': 'Ja'
          },
          {
            'Funktion': 'Foto-Assistent (komplex)',
            'Verarbeitung': 'Hybrid (lokal segment., Cloud gener.)',
            'Benutzerdaten gesendet?': 'Teilweise — Bild für generative',
            'Netzwerk erforderlich?': 'Ja für Objekt-entfernung'
          }
        ]
      },
      'edgefusion': {
        id: 'edgefusion',
        title: 'Lokale Bildgenerierung auf dem S26',
        content: [
          'Samsung partnerte mit Nota AI (Südkorea), um Stable Diffusion für mobile NPU-Inferenz zu optimieren. Ergebnis: Text-zu-Bild-Generierung in unter einer Sekunde, erzeugt 512×512 Pixel fotorealistische Bilder vollständig auf dem Gerät, kein Netzwerk erforderlich.',
          'Die Technik heißt EdgeFusion (von Nota AI Forschung): benutzt Latent Consistency Model (LCM) Scheduler mit 2-Schritt-Denoising statt Standard 50 Schritte, reduziert Rechnung um ~96%. Model-Level-Tiling reduziert Cross-Attention-Latenz um ~73%. Mixed-Precision-Quantisierung (W8A16) hält Qualität während VRAM-Footprint halbiert wird.',
          'Leistung: validiert auf Exynos 2600 NPU, generiert 512×512 Bilder in unter 1 Sekunde. Exynos 2600 ist 2,4x schneller bei Stable Diffusion als Exynos 2500, das ist realistisch. Snapdragon 8 Elite Gen 5 in US/China/Japan-Varianten wird wahrscheinlich ähnliche oder leicht längere Zeiten erreichen.',
          'Realitätscheck: Samsungs ausgeliefertes App Creative Studio benötigt Netzwerk + Samsung-Konten-Login. Unklar, ob EdgeFusion als User-Feature beim Start ausgeliefert wurde oder ein Future-Update unterstützt. Samsung erwähnte "EdgeFusion" nie in offiziellen Unpacked-Materialien. Verwenden Sie dies Wissen zum Erwartungsmanagement: On-Device Bildgen kommt, kann aber nicht vollständig am Tag-1 ausgeliefert werden.'
        ],
        items: [
          'LCM Scheduler: 2-Schritt-Denoising ersetzt 50-Schritt Standard, 96% weniger Rechnung',
          'Model-Level Tiling: reduziert Cross-Attention Speicher-Zugriffe, ~73% Latenz-Verbesserung',
          'W8A16 Quantisierung: 8-Bit Gewichte, 16-Bit Aktivierungen, kein Qualitätsverlust',
          'Ziel-Auflösung: 512×512 Pixel, fotorealistische Ausgabe',
          'NPU-optimiert: Exynos 2600 Tensor-Kerne handhaben die meisten Rechnungen; minimale CPU-Overhead',
          'Offline-fähig: null Netzwerk-Abhängigkeit wenn EdgeFusion aktiv'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'EdgeFusion generiert 512×512 Bilder in <1 Sekunde On-Device durch Reduktion von Stable Diffusion von 50 auf 2 Denoising-Schritte, unter Verwendung quantisierter Gewichte und Model-Level-Tiling.' },
          { type: 'plain-terms', text: 'Weniger Denoising-Schritte = weniger Rechnung = schnellere Inferenz. Quantisierung schrumpft das Modell. Tiling teilt Attention-Lagen um in Phone-VRAM zu passen. Zusammen: sofortige Bilder offline.' }
        ]
      },
      'npu-comparison': {
        id: 'npu-comparison',
        title: 'Exynos 2600 vs Snapdragon 8 Elite Gen 5 NPU',
        image: '/images/galaxy-s26-npu-comparison-en.svg',
        imageCaption: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 im Galaxy S26: 2nm GAA vs 3nm FinFET, von Samsung angegebene +113% vs +39% NPU Gen-über-Gen (unterschiedliche Basiswerte), 85,6 GB/s vs 84,8 GB/s LPDDR5X-Speicherbandbreite.',
        columns: ['Metrik', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', 'Gewinner für Lokale KI?'],
        rows: [
          {
            'Metrik': 'Knoten / Fab',
            'Exynos 2600': '2nm GAA (Samsung SF2)',
            'Snapdragon 8 Elite Gen 5': '3nm FinFET (TSMC)',
            'Gewinner für Lokale KI?': 'Unbewiesen (Fertigung verschieden)'
          },
          {
            'Metrik': 'KI-Leistung Gen-über-Gen',
            'Exynos 2600': '+113% vs Exynos 2500',
            'Snapdragon 8 Elite Gen 5': '+39% NPU vs S25 Ultra (Ultra)',
            'Gewinner für Lokale KI?': 'Nicht vergleichbar (andere Basis)'
          },
          {
            'Metrik': 'Stable Diffusion Geschwindigkeit',
            'Exynos 2600': '2,4x schneller als Exynos 2500',
            'Snapdragon 8 Elite Gen 5': 'Gewinnt den MLPerf-Stable-Diffusion-Test',
            'Gewinner für Lokale KI?': 'Snapdragon (MLPerf Mobile)'
          },
          {
            'Metrik': 'Verfügbare Regionen/Varianten',
            'Exynos 2600': 'S26 / S26+ (außer USA, China, Japan)',
            'Snapdragon 8 Elite Gen 5': 'S26 / S26+ (USA, China, Japan); Ultra (alle)',
            'Gewinner für Lokale KI?': 'Hängt von Ihrer Region ab'
          },
          {
            'Metrik': 'Speicherbandbreite',
            'Exynos 2600': 'LPDDR5X 85,6 GB/s (typisch)',
            'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84,8 GB/s (typisch)',
            'Gewinner für Lokale KI?': 'Gleichstand (unter 1%)'
          },
          {
            'Metrik': 'Fazit',
            'Exynos 2600': 'Gewinnt Klassifikation, Erkennung, Sprache',
            'Snapdragon 8 Elite Gen 5': 'Gewinnt Segmentierung, Super-Res, Stable Diffusion',
            'Gewinner für Lokale KI?': 'Ungefähr gleichauf; nach Modell/Preis wählen'
          }
        ]
      },
      'run-own-llm': {
        id: 'run-own-llm',
        title: 'Ihre eigenen LLMs auf dem Galaxy S26 ausführen',
        image: '/images/galaxy-s26-7b-model-throughput-en.svg',
        imageCaption: 'Decodier-Geschwindigkeit eines 7B-Modells nach Quantisierung auf dem Galaxy S26 (LPDDR5X 85,6 GB/s): FP16 (~14 GB) erreicht nur 6 tokens/sec, Q4 4-Bit (~3,5 GB) theoretisch 24 tokens/sec, real 8–15 tokens/sec.',
        content: [
          'Die Speicherbandbreite des Galaxy S26 ist der begrenzende Faktor. LPDDR5X bei 85,6 GB/s bedeutet Token-Generierung (die "Dekodier-Phase" der LLM-Inferenz) maxes rund memory_bandwidth / model_size_in_bytes tokens pro Sekunde aus.',
          'Mathematik: Ein 7B-Parameter-Modell in FP16 (16-Bit Floats) wiegt ~14 GB. Bei 85,6 GB/s ÷ 14 GB ≈ 6 tokens/sec theoretisches Maximum. Aber Quantisierung ändert das dramatisch.',
          'Bei Q4 (4-Bit, 2 Parameter pro Byte gespeichert), das gleiche 7B-Modell schrumpft auf ~3,5 GB. Durchsatz skaliert: 85,6 GB/s ÷ 3,5 GB ≈ 24 tokens/sec theoretisches Max. Real-world ist niedriger wegen Rechnung-Overhead, aber realistisch sind 8–15 tokens/sec auf Galaxy S26 für quantisiertes 7B.',
          'Beste Tools: MLC Chat (plattformübergreifend, Community-Modelle), Google AI Edge Gallery und Ollama in Termux. Alle unterstützen quantisierte Modelle. Beginnen Sie mit einem 3B–8B-Modell (Qwen3 4B, Gemma 3 4B, Llama 3.2 3B, Phi-4-mini) bei Q4 oder Q5; ein 7B–8B-Modell passt in 12 GB RAM, lässt aber weniger Platz für Android selbst.'
        ],
        items: [
          'Q4 (4-Bit) Quantisierung für 7B-Modelle verwenden; Q3 passt größere aber mit Qualitätsverlust',
          'Vermeiden Sie FP16 Voll-Präzisions-Modelle; zu groß für praktischen Durchsatz',
          'Beste Open-Weight-Modelle für Mobile: Qwen3 4B, Gemma 3 4B, Llama 3.2 3B, Phi-4-mini',
          'Erwartete Geschwindigkeit: 8–15 tokens/sec für 7B Q4; 3–5 für unquantisiert 7B',
          'MLC Chat, Google AI Edge Gallery oder Ollama in Termux verwenden; NPU-Unterstützung je App prüfen, da viele nur auf CPU/GPU laufen',
          'Offline testen: wenn Ollama das Modell cached, funktioniert Inferenz völlig ohne Internet'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Galaxy S26 Datenschutz: Was verlässt Ihr Gerät?',
        content: [
          'Knox Vault ist Samsungs Hardware-Sicherheitsmodul: ein separater Prozessor, isoliert vom Haupt-CPU und Android OS. Sensitive Daten — Zahlungsmethoden, Fingerabdrücke, Gesundheitsdaten, Passwörter — lebt in Knox Vault und wird niemals Apps oder Samsungs Servern ohne explizite Nutzer-Aktion ausgesetzt.',
          'Personal Data Engine (PDE) lernt lokal: On-Device Machine Learning-Modelle trainieren auf Ihrem Nutzungsmuster, Kalender, Nachrichten, Fotos, und Kontakten. Standardmäßig erreicht diese Daten Samsungs Cloud niemals. Sie steuern die Grenze mit dem "Daten nur auf dem Gerät verarbeiten"-Toggle in Galaxy AI Einstellungen.',
          'Cloud-Funktionen benötigen eine Netzwerkverbindung: Creative Studio erfordert eine Samsung-Konto-Anmeldung, Circle to Search erfordert Internet. Jede Funktion hat ihre eigene Datenschutzrichtlinie; lesen Sie diese vor der Nutzung.',
          'Cross-Device Datenschutz: Knox Matrix synchronisiert Sicherheits-Einstellungen und verschlüsselte Daten über Galaxy-Geräte mit End-zu-End-Verschlüsselung. Samsung beschreibt Knox Enhanced Encrypted Protection (KEEP) als Verschlüsselung der Daten jeder App.',
          'Prüfen statt annehmen: Samsung veröffentlicht keine Aufstellung pro Funktion, was lokal läuft. Prüfen Sie daher die Einstellung "Daten nur auf dem Gerät verarbeiten" und den Datenschutzhinweis jeder Funktion auf Ihrem Telefon.'
        ],
        items: [
          'Knox Vault = Hardware-isolierte Aufbewahrung für Geheimnisse; separater Prozessor, separates OS, nie zu Cloud gesynct',
          'PDE = lokale Lern-Engine; trainiert auf Ihren Daten ohne hochzuladen',
          '"Daten nur auf dem Gerät verarbeiten"-Toggle = blockiert alle Cloud-Fallbacks für unterstützte Funktionen',
          'Creative Studio = Cloud-abhängig; das Deaktivieren verhindert Bildgen-Daten-Übertragung',
          'Gemini-Agenten = Google-gefüttert; nutzt Ihr Google-Konto für mehrstufige Aufgaben',
          'Knox Matrix = geräteübergreifende Sicherheits-Synchronisierung; Verschlüsselungsmodell siehe Samsungs Knox-Dokumentation'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Galaxy AI vollständig lokal oder nutzt es Cloud?',
            a: 'Hybrid. Anruffilterung, Now Nudge, Now Brief, und Betrugserkennung laufen vollständig lokal über Personal Data Engine. Bildgenerierung (Creative Studio), Gemini-Agenten und Circle to Search benötigen Cloud-Server. Aktivieren Sie "Daten nur auf dem Gerät verarbeiten" in Einstellungen, um lokale Verarbeitung für unterstützte Funktionen zu erzwingen.'
          },
          {
            q: 'Was ist die Personal Data Engine auf dem Galaxy S26?',
            a: 'Samsung beschreibt die Personal Data Engine (PDE) als die Komponente auf dem Gerät, die kontextbezogene, personalisierte Galaxy-AI-Erlebnisse ermöglicht. Laut Samsungs Launch-Material läuft die PDE auf dem Gerät, Samsung veröffentlicht jedoch weder ihre Architektur noch das zugrunde liegende Modell noch eine Liste der Funktionen, die von ihr abhängen.'
          },
          {
            q: 'Ist die Nutzung von KI auf dem Galaxy S26 sicher?',
            a: 'Sicherer, wenn die Verarbeitung auf dem Telefon bleibt, aber nicht durchgängig. Creative Studio erfordert eine Netzwerkverbindung und eine Samsung-Konto-Anmeldung, Circle to Search erfordert Internet; dabei verlassen Daten das Gerät. Die Einstellung "Daten nur auf dem Gerät verarbeiten" beschränkt Galaxy AI auf lokale Verarbeitung; Anleitungen zu früheren One-UI-Versionen beschreiben sie als Einstellung, die Sie selbst aktivieren, und berichten, dass cloudbasierte Fotobearbeitung dann nicht mehr funktioniert. Der Menüort variiert je nach Firmware, prüfen Sie ihn also auf Ihrem Telefon und lesen Sie Samsungs Datenschutzhinweis.'
          },
          {
            q: 'Reicht das Basis-Galaxy-S26 für On-Device-KI oder brauche ich das Ultra?',
            a: 'Für die Galaxy-AI-Funktionen reicht das Basis-S26: Samsung gibt allen drei Modellen dieselbe Galaxy-AI-Suite. Beim Ausführen eigener Modelle zählt vor allem der RAM: S26 und S26+ haben 12 GB, das Ultra 12 GB oder 16 GB. Ein Telefon mit 12 GB schafft 3B–8B-Modelle bei Q4; das Ultra mit 16 GB lohnt sich nur für größere Modelle. Unabhängige KI-Tests sehen den Exynos 2600 und den Snapdragon 8 Elite Gen 5 ungefähr gleichauf.'
          },
          {
            q: 'Was ist der Unterschied zwischen Exynos 2600 und Snapdragon 8 Elite Gen 5?',
            a: 'Für den Exynos 2600 (2nm, Samsung Foundry) gibt Samsung +113% bei KI gegenüber dem Exynos 2500 an. Der Snapdragon 8 Elite Gen 5 for Galaxy bringt dem S26 Ultra +39% NPU gegenüber dem S25 Ultra (Samsung-Angabe). In den MLPerf-Mobile-Ergebnissen gewinnt der Exynos bei Klassifikation, Erkennung und Sprache, der Snapdragon bei Segmentierung, Super-Resolution und Stable Diffusion; keiner ist also ein klarer Sieger für lokale KI.'
          },
          {
            q: 'Kann ich ein großes Sprachmodell auf Galaxy S26 ausführen?',
            a: 'Ja, aber mit Limits. LPDDR5X-Bandbreite (85,6 GB/s) capped Dekodedurchsatz. Ein quantisiertes 7B-Modell bei Q4 erreicht ~24 tokens/sec theoretisches Maximum (~8–15 realistisch). Verwenden Sie MLC Chat, Google AI Edge Gallery oder Ollama in Termux. Größere Modelle (13B, 70B) sind unpraktisch wegen Speicher und Bandbreite-Constraints.'
          },
          {
            q: 'Funktioniert Galaxy AI offline?',
            a: 'Teilweise. Lokale LLMs, die Sie selbst ausführen (z. B. Ollama in Termux), laufen nach dem Modell-Download vollständig offline. Creative Studio, Gemini-Agenten und Circle to Search benötigen Internet. Samsung nennt den Verarbeitungsort von Anruffilterung, Now Nudge, Now Brief und Betrugserkennung nicht; testen Sie sie im Flugmodus. "Daten nur auf dem Gerät verarbeiten" beschränkt Galaxy AI auf lokale Verarbeitung.'
          },
          {
            q: 'Was ist EdgeFusion und wird es auf Galaxy S26 ausgeliefert?',
            a: 'EdgeFusion ist Nota AIs optimiertes Stable Diffusion für mobile NPUs, generiert 512×512 Bilder in <1 Sekunde auf Exynos 2600. Samsung partnerte offiziell mit Nota AI, aber "EdgeFusion" wurde nie in offiziellen Galaxy Unpacked-Materialien genannt. Creative Studio (die ausgelieferte Bildgen-App) benötigt Netzwerk + Samsung-Konto, daher ist EdgeFusions Status beim Start unklar.'
          },
          {
            q: 'Welche Daten sammelt Samsung über Galaxy AI?',
            a: 'Samsung gibt an, dass die Personal Data Engine auf dem Gerät läuft. Cloud-Funktionen wie Creative Studio (Netzwerk und Samsung-Konto erforderlich) und Circle to Search (Internet erforderlich) senden Daten. Wenn Sie Cloud-Funktionen — Creative Studio, Gemini-Agenten — aktivieren, werden Daten zu Samsung (für Galaxy AI) oder Google (für Gemini) gesendet. Deaktivieren Sie diese Funktionen, um Übertragung zu verhindern. Prüfen Sie Einstellungen > Datenschutz > Galaxy AI für eine Übersicht.'
          },
          {
            q: 'Schützt Knox Vault meine Daten vor Samsung?',
            a: 'Ja. Knox Vault ist ein separater Hardware-Prozessor, isoliert vom Haupt-OS. Sensitive Daten (Biometrie, Zahlungsinfo, Gesundheit) in Knox Vault können nicht von Android-Apps oder Samsung-Software ohne explizites Unlock zugegriffen werden. Samsung beschreibt Knox Vault als physische Schicht, die sensible Daten in eigener sicherer Hardware isoliert; kein Sicherheitssystem ist absolut.'
          },
          {
            q: 'Kann ich Galaxy AI Cloud-Funktionen komplett deaktivieren?',
            a: 'Ja. Deaktivieren Sie einzelne Funktionen in Einstellungen > Galaxy AI. Sie können Creative Studio, Gemini-Agenten, und Circle to Search unabhängig umschalten. Aktivieren Sie "Daten nur auf dem Gerät verarbeiten", um Cloud-Fallback für unterstützte Funktionen zu blockieren. On-Device Funktionen (Anruffilterung, Now Nudge) funktionieren weiter.'
          },
          {
            q: 'Ist Galaxy S26 besser als iPhone um lokale KI auszuführen?',
            a: 'Für das Ausführen Ihrer eigenen quantisierten LLMs, ja. Android unterstützt mehr Open-Weight-Modell-Tools (MLC Chat, Google AI Edge Gallery, Ollama in Termux). Aber Apples On-Device-First-Philosophie und kryptographisch auditable PCC machen es stärker für Datenschutz, wenn Sie Apples Infrastruktur über Samsungs vertrauen.'
          },
          {
            q: 'Wie oft werden Galaxy AI Funktionen aktualisiert?',
            a: 'Galaxy AI Funktionen rollen via One UI-Updates aus (normalerweise monatliche Sicherheits-Patches + quartals-Feature-Updates). Samsung nennt sieben Jahre Sicherheitsupdates für das Galaxy S26; die Zusage für OS-Updates finden Sie auf Samsungs Support-Seiten.'
          }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Ressourcen',
        items: [
          'Samsung Galaxy S26 Unpacked Ankündigung (25. Februar 2026) — Offizielle Feature-Übersicht',
          'Nota AI EdgeFusion Research Papier — On-Device Stable Diffusion Optimierungs-Techniken',
          'Knox Sicherheits-Whitepaper — Hardware-Sicherheitsmodul-Architektur und Bedrohungs-Modell',
          '[Mobile lokale LLMs 2026: iPhone 16 Pro, iPad M4 & Snapdragon X](/de/local-llms/mobile-local-llms) -- lokale LLMs auf mobilen Geräten',
          '[On-Device KI und Speicher: Warum HBM die Geschwindigkeit lokaler KI antreibt (2026)](/de/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026) -- HBM-Speicher und On-Device-KI-Geschwindigkeit',
          '[Galaxy vs iPhone On-Device AI: Samsung Galaxy AI vs Apple Intelligence (2026)](/de/local-llms/galaxy-vs-iphone-on-device-ai-2026) -- Galaxy AI vs. Apple Intelligence Vergleich',
          '[Apple M5 für lokale KI](/de/local-llms/apple-silicon-m5-local-llm) -- Apple M5 Chip für lokale KI',
          '[Beste Einstiegs-LLM-Modelle für lokale Nutzung](/de/local-llms/best-beginner-local-llm-models) -- welche Modelle lokal laufen',
        ]
      }
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Galaxy S26 Lokale KI Leitfaden: Galaxy AI & NPU erklär (2026)',
      'description': 'Galaxy S26 Lokale KI erklärt: Was die Samsung Personal Data Engine leistet, welche Galaxy-AI-Funktionen die Cloud brauchen und wie Sie lokale LLMs ausführen.',
      'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png',
      'datePublished': '2026-06-15',
      'dateModified': '2026-10-19',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'inLanguage': 'de',
      'url': 'https://www.promptquorum.com/de/local-llms/galaxy-s26-local-ai-on-device-2026',
      'articleBody': 'Das Galaxy S26, das am 25. Februar 2026 eingeführt wurde, bringt Samsungs Hybrid-Plattform für lokale und Cloud-KI — Galaxy AI — in Ihre Tasche.'
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'de',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Was ist die Personal Data Engine auf dem Galaxy S26?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Samsung beschreibt die Personal Data Engine (PDE) als die Komponente auf dem Gerät, die kontextbezogene, personalisierte Galaxy-AI-Erlebnisse ermöglicht. Laut Samsungs Launch-Material läuft die PDE auf dem Gerät, Samsung veröffentlicht jedoch weder ihre Architektur noch das zugrunde liegende Modell noch eine Liste der Funktionen, die von ihr abhängen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Ist Galaxy AI vollständig lokal oder nutzt es Cloud?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Hybrid. Anruffilterung, Now Nudge, Now Brief, und Betrugserkennung laufen vollständig lokal über Personal Data Engine. Bildgenerierung (Creative Studio), Gemini-Agenten und Circle to Search benötigen Cloud-Server.'
          }
        }
      ]
    }
  },
  fr: {
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-fr.webp',
    title: 'Guide Galaxy S26 IA Locale: Galaxy AI et NPU Expliqués (2026)',
    seoTitle: 'Galaxy S26 IA Locale: Galaxy AI et NPU Fonctionnement',
    intro: 'Le Galaxy S26, lancé le 25 février 2026, apporte la plateforme IA hybride locale et cloud de Samsung — Galaxy AI — dans votre poche. Contrairement à l\'approche locale d\'Apple, Samsung équilibre le traitement local avec les fonctionnalités cloud, vous laissant choisir où vos données sont traitées. Ce guide explique ce que Galaxy AI fait réellement sur l\'appareil, quelles fonctionnalités nécessitent le cloud, et comment exécuter vos propres LLM open-weight sur le matériel S26.',
    metaDescription: 'Galaxy S26 IA locale expliquée: ce que fait le Personal Data Engine de Samsung, quelles fonctions Galaxy AI exigent le cloud, et comment exécuter des LLM locaux sur Exynos 2600 ou Snapdragon.',
    publishDate: '2026-06-15',
    dateModified: '2026-10-19',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs Android intéressés par l\'IA locale, acheteurs Galaxy S26, développeurs explorant l\'inférence LLM mobile',
    primaryTerm: 'Galaxy S26 IA locale',
    leadAnswerBlock: '**Le Galaxy S26 exécute Galaxy AI — une plateforme hybride mélangeant traitement local (filtrage d\'appels, Now Nudge, détection de fraude) avec des fonctionnalités cloud (génération d\'images Creative Studio, intégration Gemini). Vous contrôlez le toggle de confidentialité: "Traiter les données uniquement sur l\'appareil" limite tout au traitement local. La puce dépend du modèle et de la région: le S26 Ultra utilise partout le Snapdragon 8 Elite Gen 5 for Galaxy, tandis que les S26 et S26+ utilisent l\'Exynos 2600 en Europe, en Corée et sur la plupart des autres marchés, et un Snapdragon aux États-Unis, en Chine et au Japon; les tests IA indépendants montrent les deux puces à peu près au même niveau, choisissez donc selon le modèle et le prix, pas selon la puce. Pour vos propres LLM: les modèles 7B quantifiés à Q4 (4-bit) atteignent ~24 tokens/sec sur LPDDR5X 85,6 GB/s.**',
    quickAnswerTop: {
      fr: {
        question: 'Quelles fonctionnalités Galaxy AI du S26 s\'exécutent en local sur l\'appareil sans envoyer les données vers le cloud ?',
        answer: 'Le filtrage des appels (répond aux appels localement), Now Nudge (suggestions contextuelles), Now Brief (résumés personnels) et la détection des escroqueries traitent tous les données localement à l\'aide du moteur de données personnelles (PDE). Vous pouvez activer "Traiter les données uniquement sur l\'appareil" dans les paramètres Galaxy AI pour bloquer les retours au cloud pour les fonctionnalités prises en charge. La génération d\'images (Creative Studio) nécessite une connexion réseau et une connexion à un compte Samsung.',
        bullets: [
          'Le filtrage des appels identifie les appelants inconnus et résume leur intention (Samsung n\'indique pas où il s\'exécute)',
          'Now Nudge suggère des photos de la Galerie à partager et exige une connexion à un compte Samsung',
          'La détection des escroqueries signale les appels suspects; Samsung ne publie pas son lieu de traitement',
          'Activez le bouton "Traiter les données uniquement sur l\'appareil" pour forcer le traitement local',
          'La génération d\'images Creative Studio ne fonctionne que sur le cloud (nécessite un compte Samsung + réseau)',
          'L\'Exynos 2600 est 2,4 fois plus rapide pour Stable Diffusion que l\'Exynos 2500'
        ],
        updatedDate: '2026-10-19'
      },
    },
    toc: [
      { label: 'Points Clés', anchor: '#key-takeaways' },
      { label: 'Qu\'est-ce que Galaxy AI sur le Galaxy S26?', anchor: '#what-is-galaxy-ai' },
      { label: 'Local vs. Cloud: Quelles Fonctionnalités Restent Locales?', anchor: '#on-device-vs-cloud' },
      { label: 'Génération d\'Images Locale sur le S26', anchor: '#edgefusion' },
      { label: 'Exynos 2600 vs Snapdragon 8 Elite Gen 5 NPU', anchor: '#npu-comparison' },
      { label: 'Exécuter Vos Propres LLM sur le Galaxy S26', anchor: '#run-own-llm' },
      { label: 'Confidentialité Galaxy S26: Quelles Données Quittent Votre Appareil?', anchor: '#privacy' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures Connexes', anchor: '#related-reading' }
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Galaxy AI est une plateforme hybride: Samsung indique que son Personal Data Engine (PDE) fonctionne sur l\'appareil et alimente des fonctions contextuelles comme Now Nudge, Now Brief et le filtrage d\'appels, mais ne publie pas de carte du traitement par fonction. Creative Studio exige une connexion réseau et un compte Samsung; Circle to Search exige internet.',
          'La puce dépend du modèle et de la région: le S26 Ultra utilise toujours le Snapdragon 8 Elite Gen 5 for Galaxy; les S26 et S26+ utilisent l\'Exynos 2600 hors États-Unis, Chine et Japon. Samsung revendique +113% de NPU face à l\'Exynos 2500 et +39% de NPU pour l\'Ultra face au S25 Ultra; les résultats MLPerf Mobile se partagent entre les deux puces, aucune n\'est donc clairement meilleure pour les LLM locaux.',
          'Toggle de confidentialité: Activez "Traiter les données uniquement sur l\'appareil" dans Paramètres > Galaxy AI pour empêcher les retours au cloud. Knox Vault fournit la sécurité matérielle; Knox Matrix synchronise les paramètres entre appareils.',
          'Génération d\'images locale: Samsung a associé avec Nota AI sur EdgeFusion, qui génère des images 512×512 en moins d\'une seconde sur Exynos 2600 NPU. Creative Studio (l\'app utilisateur) nécessite réseau + compte Samsung.',
          'Vos propres LLM: la mémoire LPDDR5X (85,6 GB/s) limite le débit de décodage. Un modèle 7B à Q4 (4-bit) atteint ~24 tokens/sec maximum théorique. Utilisez MLC Chat, Google AI Edge Gallery ou Ollama dans Termux pour tester.',
          'RAM: les S26 et S26+ sont livrés avec 12 Go; le S26 Ultra avec 12 ou 16 Go. La taille de la mémoire détermine quels modèles tiennent et la bande passante la vitesse de décodage: un S26 de base à 12 Go suffit pour des modèles 3B–8B en Q4, et l\'Ultra à 16 Go laisse plus de marge pour les plus grands.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'Qu\'est-ce que Galaxy AI sur le Galaxy S26?',
        content: [
          'Galaxy AI est la plateforme d\'intelligence on-device de Samsung, que Samsung décrit comme du Galaxy AI sur l\'appareil alimenté par son Personal Data Engine, avec Gemini et Perplexity intégrés comme agents; Samsung ne publie pas quel modèle de langage fait tourner chaque fonction locale. Lancée avec Galaxy S24, améliorée sur S25, et étendue sur S26 (lancement 25 février 2026), elle équilibre le traitement local pour la confidentialité avec les fonctionnalités cloud pour la performance.',
          'La Personal Data Engine (PDE) est le cœur: elle apprend à partir de données on-device — messages, calendrier, photos, historique de localisation — et Samsung indique que le PDE fonctionne sur l\'appareil. Knox Vault, une enclave de sécurité matérielle, isole les données sensibles (identifiants, dossiers santé, informations de paiement) du reste du système.',
          'Samsung ne confirme que deux choses par fonction: Creative Studio exige une connexion réseau et un compte Samsung, et Circle to Search exige internet. Pour le filtrage d\'appels, Now Nudge, Now Brief et la détection de fraude, Samsung n\'indique pas le lieu de traitement; le tableau ci-dessous est donc une classification de travail, pas une garantie de Samsung.',
          'Le contrôle de l\'utilisateur est central: un seul bouton bascule dans les paramètres Galaxy AI — "Traiter les données uniquement sur l\'appareil" — bloque tous les retours au cloud pour les fonctionnalités supportées. Ce n\'est pas une confidentialité ajoutée après coup; vérifiez son état sur votre téléphone.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Galaxy AI exécute les fonctionnalités locales via Personal Data Engine (PDE) et les fonctionnalités cloud à la demande, avec un toggle unique pour forcer le traitement pur appareil.' },
          { type: 'plain-terms', text: 'Knox Vault = verrou matériel pour les secrets; PDE = apprend de votre téléphone sans télécharger; toggle = votre choix d\'activer ou non les fonctionnalités cloud.' }
        ]
      },
      'on-device-vs-cloud': {
        id: 'on-device-vs-cloud',
        title: 'Local vs. Cloud: Quelles Fonctionnalités Restent Locales?',
        columns: ['Fonctionnalité', 'Traitement', 'Données Utilisateur Envoyées?', 'Réseau Requis?'],
        rows: [
          {
            'Fonctionnalité': 'Filtrage d\'appels',
            'Traitement': 'Local (NPU)',
            'Données Utilisateur Envoyées?': 'Non — audio de l\'appelant transcrit localement',
            'Réseau Requis?': 'Non'
          },
          {
            'Fonctionnalité': 'Now Nudge',
            'Traitement': 'Local (PDE)',
            'Données Utilisateur Envoyées?': 'Non — lit écran+calendrier localement',
            'Réseau Requis?': 'Non'
          },
          {
            'Fonctionnalité': 'Now Brief',
            'Traitement': 'Local (PDE)',
            'Données Utilisateur Envoyées?': 'Non — résume réservations locales',
            'Réseau Requis?': 'Non'
          },
          {
            'Fonctionnalité': 'Détection de fraude',
            'Traitement': 'Local (NPU)',
            'Données Utilisateur Envoyées?': 'Non — marque fraudes localement',
            'Réseau Requis?': 'Non'
          },
          {
            'Fonctionnalité': 'Creative Studio (génération)',
            'Traitement': 'Cloud (serveurs Samsung)',
            'Données Utilisateur Envoyées?': 'Oui — prompt texte + images ref',
            'Réseau Requis?': 'Oui — compte+internet requis'
          },
          {
            'Fonctionnalité': 'Agents Gemini (multi-étapes)',
            'Traitement': 'Cloud (Google Gemini)',
            'Données Utilisateur Envoyées?': 'Oui — intention tâche vers Google',
            'Réseau Requis?': 'Oui'
          },
          {
            'Fonctionnalité': 'Circle to Search',
            'Traitement': 'Cloud (Google)',
            'Données Utilisateur Envoyées?': 'Oui — zone capture vers Google',
            'Réseau Requis?': 'Oui'
          },
          {
            'Fonctionnalité': 'Assistance Photos (complexe)',
            'Traitement': 'Hybride (segment local, généré cloud)',
            'Données Utilisateur Envoyées?': 'Partiel — image pour modèles generatif',
            'Réseau Requis?': 'Oui suppression objets'
          }
        ]
      },
      'edgefusion': {
        id: 'edgefusion',
        title: 'Génération d\'Images Locale sur le S26',
        content: [
          'Samsung s\'est associé avec Nota AI (Corée du Sud) pour optimiser Stable Diffusion pour l\'inférence NPU mobile. Résultat: génération texte-à-image en moins d\'une seconde, produisant des images 512×512 pixels photorréalistes entièrement sur l\'appareil, aucun réseau requis.',
          'La technique s\'appelle EdgeFusion (issu de la recherche Nota AI): elle utilise un planificateur Latent Consistency Model (LCM) avec débruitage à 2 étapes au lieu des 50 standards, réduisant le calcul d\'~96%. Le tiling au niveau du modèle réduit la latence d\'attention croisée d\'~73%. La quantification de précision mixte (W8A16 dans le U-Net) maintient la qualité tout en réduisant la consommation VRAM de moitié.',
          'Performance: validée sur Exynos 2600 NPU, où elle génère 512×512 images en moins d\'1 seconde. Exynos 2600 est 2,4x plus rapide à Stable Diffusion qu\'Exynos 2500, donc c\'est réaliste. Snapdragon 8 Elite Gen 5 dans les variantes US/Chine/Japon atteindra probablement des temps similaires ou légèrement plus longs.',
          'Vérification de réalité: l\'application livraison de Samsung, Creative Studio, nécessite réseau + login compte Samsung. Il est peu clair si EdgeFusion s\'est livré en tant que fonctionnalité utilisateur à jour ou supporte une mise à jour future. Samsung n\'a jamais mentionné "EdgeFusion" par nom dans les matériaux officiels Unpacked. L\'origine est partenariat de recherche Nota AI. Utilisez cette connaissance pour gérer les attentes: génération image on-device arrive, mais peut ne pas se livrer pleinement le jour 1.'
        ],
        items: [
          'Planificateur LCM: débruitage 2-étapes remplace 50-étapes standard, ~96% moins de calcul',
          'Tiling au niveau du modèle: réduit accès mémoire attention croisée, ~73% amélioration latence',
          'Quantification W8A16: poids 8-bit, activations 16-bit, aucune perte qualité perceptible',
          'Résolution cible: 512×512 pixels, sortie photorréaliste',
          'Optimisé NPU: cœurs tenseur Exynos 2600 gèrent la plupart du calcul; minime surcharge CPU',
          'Capable hors ligne: zéro dépendance réseau si EdgeFusion actif'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'EdgeFusion génère 512×512 images en <1 seconde on-device en réduisant Stable Diffusion de 50 à 2 étapes de débruitage, utilisant poids quantifiés et tiling au niveau du modèle.' },
          { type: 'plain-terms', text: 'Moins d\'étapes débruitage = moins calcul = inférence plus rapide. Quantification rétrécit le modèle. Tiling divise couches attention pour tenir dans VRAM téléphone. Ensemble: images instantanées hors ligne.' }
        ]
      },
      'npu-comparison': {
        id: 'npu-comparison',
        title: 'Exynos 2600 vs Snapdragon 8 Elite Gen 5 NPU',
        image: '/images/galaxy-s26-npu-comparison-en.svg',
        imageCaption: 'Exynos 2600 vs Snapdragon 8 Elite Gen 5 sur le Galaxy S26: 2nm GAA vs 3nm FinFET, +113% vs +39% de NPU d\'une génération à l\'autre selon Samsung (bases différentes), bande passante LPDDR5X 85,6 GB/s vs 84,8 GB/s.',
        columns: ['Métrique', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', 'Gagnant pour IA Locale?'],
        rows: [
          {
            'Métrique': 'Nœud / Fab',
            'Exynos 2600': '2nm GAA (Samsung SF2)',
            'Snapdragon 8 Elite Gen 5': '3nm FinFET (TSMC)',
            'Gagnant pour IA Locale?': 'Non prouvé (nœuds différents)'
          },
          {
            'Métrique': 'Performance IA générations',
            'Exynos 2600': '+113% vs Exynos 2500',
            'Snapdragon 8 Elite Gen 5': '+39% NPU vs S25 Ultra (Ultra)',
            'Gagnant pour IA Locale?': 'Non comparable (bases différentes)'
          },
          {
            'Métrique': 'Vitesse Stable Diffusion',
            'Exynos 2600': '2,4x plus rapide qu\'Exynos 2500',
            'Snapdragon 8 Elite Gen 5': 'Gagne le test Stable Diffusion MLPerf',
            'Gagnant pour IA Locale?': 'Snapdragon (MLPerf Mobile)'
          },
          {
            'Métrique': 'Régions/variantes disponibles',
            'Exynos 2600': 'S26 / S26+ (hors US, Chine, Japon)',
            'Snapdragon 8 Elite Gen 5': 'S26 / S26+ (US, Chine, Japon); S26 Ultra (tous)',
            'Gagnant pour IA Locale?': 'Selon votre région'
          },
          {
            'Métrique': 'Bande passante mémoire',
            'Exynos 2600': 'LPDDR5X 85,6 GB/s (typique)',
            'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84,8 GB/s (typique)',
            'Gagnant pour IA Locale?': 'Égalité (écart sous 1%)'
          },
          {
            'Métrique': 'Verdict',
            'Exynos 2600': 'Gagne classification, détection, langage',
            'Snapdragon 8 Elite Gen 5': 'Gagne segmentation, super-résolution, SD',
            'Gagnant pour IA Locale?': 'À peu près égal; selon modèle et prix'
          }
        ]
      },
      'run-own-llm': {
        id: 'run-own-llm',
        title: 'Exécuter Vos Propres LLM sur le Galaxy S26',
        image: '/images/galaxy-s26-7b-model-throughput-en.svg',
        imageCaption: 'Vitesse de décodage d\'un modèle 7B par quantification sur Galaxy S26 (LPDDR5X 85,6 GB/s) : FP16 (~14 GB) plafonne à 6 tokens/sec, Q4 4-bit (~3,5 GB) atteint 24 tokens/sec en théorie, 8–15 tokens/sec en pratique.',
        content: [
          'La bande passante mémoire du Galaxy S26 est le facteur limitant. LPDDR5X à 85,6 GB/s signifie génération de tokens (la "phase de décodage" de l\'inférence LLM) plafonne à environ memory_bandwidth / model_size_in_bytes tokens par seconde.',
          'Mathématiques: Un modèle 7B paramètres en FP16 (floats 16-bit) pèse ~14 GB. À 85,6 GB/s ÷ 14 GB ≈ 6 tokens/sec maximum théorique. Mais la quantification change cela drastiquement.',
          'Quantifiée à Q4 (4-bit, 2 paramètres par byte stockés), le même modèle 7B rétrécit à ~3,5 GB. Le débit s\'adapte: 85,6 GB/s ÷ 3,5 GB ≈ 24 tokens/sec max théorique. Le monde réel est inférieur en raison de surcharge calcul, mais réalistes cibles sont 8–15 tokens/sec sur Galaxy S26 pour 7B quantifié.',
          'Meilleurs outils: MLC Chat (multi-plateforme, modèles communautaires), Google AI Edge Gallery et Ollama dans Termux. Tous supportent les modèles quantifiés. Débutez avec un modèle 3B–8B (Qwen3 4B, Gemma 3 4B, Llama 3.2 3B, Phi-4-mini) en Q4 ou Q5; un modèle 7B–8B tient dans 12 Go de RAM mais laisse moins de place à Android lui-même.'
        ],
        items: [
          'Utiliser quantification Q4 (4-bit) pour modèles 7B; Q3 (3-bit) s\'ajuste plus grandes mais perte qualité',
          'Éviter modèles FP16 précision-complète; trop volumineux pour débit pratique',
          'Meilleurs modèles open-weight pour mobile: Qwen3 4B, Gemma 3 4B, Llama 3.2 3B, Phi-4-mini',
          'Vitesse attendue: 8–15 tokens/sec pour 7B Q4; 3–5 pour 7B non-quantifié',
          'Utiliser MLC Chat, Google AI Edge Gallery ou Ollama dans Termux; vérifiez le support NPU de chaque app, beaucoup tournent sur CPU/GPU seulement',
          'Tester hors ligne: si Ollama cache le modèle, l\'inférence fonctionne entièrement sans internet'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Confidentialité Galaxy S26: Quelles Données Quittent Votre Appareil?',
        content: [
          'Knox Vault est le module de sécurité matériel de Samsung: un processeur séparé isolé du CPU principal et Android OS. Les données sensibles — méthodes paiement, empreintes, dossiers santé, mots de passe — vivent dans Knox Vault et ne sont jamais exposées aux apps ou serveurs Samsung sans action utilisateur explicite.',
          'Personal Data Engine (PDE) apprend localement: les modèles machine learning on-device s\'entraînent sur vos motifs usage, calendrier, messages, photos, et contacts. Samsung indique que le PDE fonctionne sur l\'appareil. Vous contrôlez la limite avec le toggle "Traiter les données uniquement sur l\'appareil" dans paramètres Galaxy AI.',
          'Les fonctionnalités cloud exigent une connexion réseau: Creative Studio exige une connexion à un compte Samsung, et Circle to Search exige internet. Chaque fonctionnalité a sa propre politique de confidentialité; lisez-les avant usage.',
          'Confidentialité multi-appareil: Knox Matrix synchronise paramètres sécurité et données chiffrées entre appareils Galaxy en utilisant chiffrement end-to-end. Samsung décrit Knox Enhanced Encrypted Protection (KEEP) comme le chiffrement des données de chaque app.',
          'Vérifiez plutôt que de supposer: Samsung ne publie pas de carte par fonction de ce qui s\'exécute localement; contrôlez donc le réglage "Traiter les données uniquement sur l\'appareil" et l\'avis de confidentialité de chaque fonction sur votre téléphone.'
        ],
        items: [
          'Knox Vault = stockage isolé matériel pour secrets; processeur séparé, OS séparé, jamais synced cloud',
          'PDE = moteur apprentissage local; entraîne sur vos données sans télécharger',
          'Toggle "Traiter données uniquement appareil" = bloque tous retours cloud pour fonctionnalités supportées',
          'Creative Studio = dépendant cloud; désactiver prévient transmission données génération images',
          'Agents Gemini = alimentés Google; utilise compte Google pour tâches multi-étapes',
          'Knox Matrix = synchronisation de sécurité multi-appareil; voir la documentation Knox de Samsung pour son modèle de chiffrement'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Galaxy AI est-il totalement local ou utilise-t-il le cloud?',
            a: 'Hybride. Le filtrage d\'appels, Now Nudge, Now Brief, et la détection de fraude s\'exécutent entièrement localement via Personal Data Engine. La génération d\'images (Creative Studio), les agents Gemini et Circle to Search nécessitent des serveurs cloud. Activez "Traiter les données uniquement sur l\'appareil" dans les paramètres pour forcer le traitement local uniquement pour les fonctionnalités supportées.'
          },
          {
            q: 'Qu\'est-ce que le Personal Data Engine sur le Galaxy S26?',
            a: 'Samsung décrit le Personal Data Engine (PDE) comme le composant sur l\'appareil qui permet des expériences Galaxy AI contextuelles et personnalisées. Le matériel de lancement de Samsung indique que le PDE fonctionne sur l\'appareil, mais ne publie ni son architecture, ni le modèle sous-jacent, ni la liste des fonctions qui en dépendent.'
          },
          {
            q: 'Est-il sûr d\'utiliser l\'IA sur le Galaxy S26?',
            a: 'Plus sûr quand le traitement reste sur le téléphone, mais pas uniformément. Creative Studio exige une connexion réseau et un compte Samsung, et Circle to Search exige internet: ces fonctions envoient donc des données hors de l\'appareil. Le réglage "Traiter les données uniquement sur l\'appareil" limite Galaxy AI au traitement local; des guides pour des versions antérieures de One UI le décrivent comme un réglage à activer soi-même et signalent que les retouches photo basées sur le cloud cessent alors de fonctionner. Son emplacement dans les menus varie selon le firmware: vérifiez sur votre téléphone et lisez l\'avis de confidentialité de Samsung.'
          },
          {
            q: 'Le Galaxy S26 de base suffit-il pour l\'IA sur l\'appareil, ou faut-il l\'Ultra?',
            a: 'Pour les fonctions Galaxy AI, le S26 de base suffit: Samsung offre la même suite Galaxy AI aux trois modèles. Pour exécuter vos propres modèles, la RAM compte le plus: les S26 et S26+ ont 12 Go, l\'Ultra 12 ou 16 Go. Un téléphone à 12 Go gère des modèles 3B–8B en Q4; ne choisissez l\'Ultra à 16 Go que pour des modèles plus grands. Les tests IA indépendants montrent l\'Exynos 2600 et le Snapdragon 8 Elite Gen 5 à peu près au même niveau.'
          },
          {
            q: 'Quelle est la différence entre Exynos 2600 et Snapdragon 8 Elite Gen 5?',
            a: 'Samsung affirme que l\'Exynos 2600 (2nm, Samsung Foundry) est +113% plus rapide en IA que l\'Exynos 2500. Le Snapdragon 8 Elite Gen 5 for Galaxy apporte au S26 Ultra +39% de NPU par rapport au S25 Ultra (chiffre Samsung). Dans les résultats MLPerf Mobile, l\'Exynos gagne les tests de classification, de détection et de langage, et le Snapdragon ceux de segmentation, de super-résolution et de Stable Diffusion: aucune puce n\'est donc clairement gagnante pour l\'IA locale.'
          },
          {
            q: 'Puis-je exécuter un grand modèle de langage sur Galaxy S26?',
            a: 'Oui, mais avec des limites. La bande passante LPDDR5X (85,6 GB/s) plafonne le débit de décodage. Un modèle 7B quantifié à Q4 atteint ~24 tokens/sec maximum théorique (~8–15 réaliste). Utilisez MLC Chat, Google AI Edge Gallery ou Ollama dans Termux. Les modèles plus grands (13B, 70B) sont impractiques en raison de contraintes mémoire et bande passante.'
          },
          {
            q: 'Galaxy AI fonctionne-t-il hors ligne?',
            a: 'Partiellement. Les LLM locaux que vous exécutez vous-même (par exemple Ollama dans Termux) fonctionnent entièrement hors ligne une fois le modèle téléchargé. Creative Studio, les agents Gemini et Circle to Search nécessitent internet. Samsung n\'indique pas où s\'exécutent le filtrage d\'appels, Now Nudge, Now Brief et la détection de fraude ; testez-les en mode avion. « Traiter les données uniquement sur l\'appareil » limite Galaxy AI au traitement local.'
          },
          {
            q: 'Qu\'est-ce que EdgeFusion et se livre-t-il sur Galaxy S26?',
            a: 'EdgeFusion est le Stable Diffusion optimisé de Nota AI pour les NPU mobiles, générant 512×512 images en <1 seconde sur Exynos 2600. Samsung s\'est officiellement associé avec Nota AI, mais "EdgeFusion" ne fut jamais nommé dans les matériaux officiels Galaxy Unpacked. Creative Studio (l\'app génération images livrée) nécessite réseau + compte Samsung, le statut exact d\'EdgeFusion au lancement est donc peu clair.'
          },
          {
            q: 'Quelles données Samsung collecte-t-il via Galaxy AI?',
            a: 'Samsung indique que le Personal Data Engine fonctionne sur l\'appareil. Les fonctionnalités cloud comme Creative Studio (réseau et compte Samsung requis) et Circle to Search (internet requis) envoient bel et bien des données. Quand vous activez des fonctionnalités cloud — Creative Studio, agents Gemini — des données sont envoyées aux serveurs Samsung (pour Galaxy AI) ou Google (pour Gemini). Désactiver ces fonctionnalités prévient transmission. Vérifiez Paramètres > Confidentialité > Galaxy AI pour détail de ce qui\'s activé.'
          },
          {
            q: 'Knox Vault protège-t-il mes données de Samsung?',
            a: 'Oui. Knox Vault est un processeur matériel séparé, isolé du OS principal. Les données sensibles (biométrie, info paiement, santé) stockées dans Knox Vault ne peuvent être accédées par apps Android ou logiciel Samsung sans déverrouillage explicite. Samsung décrit Knox Vault comme une couche physique qui isole les données sensibles dans son propre matériel sécurisé; aucun système de sécurité n\'est absolu.'
          },
          {
            q: 'Puis-je désactiver complètement les fonctionnalités cloud Galaxy AI?',
            a: 'Oui. Désactivez des fonctionnalités individuelles dans Paramètres > Galaxy AI. Vous pouvez basculer Creative Studio, agents Gemini, et Circle to Search indépendamment. Activez "Traiter les données uniquement sur l\'appareil" pour bloquer retour cloud pour fonctionnalités supportées. Les fonctionnalités on-device (filtrage appels, Now Nudge) continuent de fonctionner.'
          },
          {
            q: 'Galaxy S26 est-il meilleur qu\'iPhone pour exécuter IA locale?',
            a: 'Pour exécuter vos propres LLM quantifiés, oui. Android supporte plus d\'outils de modèles open-weight (MLC Chat, Google AI Edge Gallery, Ollama dans Termux). Mais la philosophie on-device-first d\'Apple et PCC auditable cryptographiquement le rendent plus fort pour confidentialité si vous faites confiance infrastructure Apple plus qu\'infrastructure Samsung.'
          },
          {
            q: 'À quelle fréquence les fonctionnalités Galaxy AI sont-elles mises à jour?',
            a: 'Les fonctionnalités Galaxy AI se déploient via mises à jour One UI (généralement patches sécurité mensuels + mises à jour features trimestrielles). Samsung indique sept ans de mises à jour de sécurité pour le Galaxy S26; consultez les pages de support de Samsung pour l\'engagement sur les mises à jour d\'OS.'
          }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures Connexes',
        items: [
          'Annonce Samsung Galaxy S26 Unpacked (25 février 2026) — vue d\'ensemble features officielle',
          'Article de Recherche EdgeFusion Nota AI — techniques d\'optimisation on-device Stable Diffusion',
          'Livre Blanc Sécurité Knox — architecture du module sécurité matériel et modèle menace',
          '[LLMs locaux mobiles 2026 : iPhone 16 Pro, iPad M4 & Snapdragon X](/fr/local-llms/mobile-local-llms) -- LLMs locaux sur appareils mobiles',
          '[IA Sur Appareil et Mémoire: Pourquoi HBM Détermine la Vitesse de l\'IA Locale (2026)](/fr/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026) -- mémoire HBM et vitesse IA locale',
          '[Galaxy vs iPhone IA sur appareil: Samsung Galaxy AI vs Apple Intelligence (2026)](/fr/local-llms/galaxy-vs-iphone-on-device-ai-2026) -- comparaison Galaxy AI vs Apple Intelligence',
          '[Apple M5 pour l\'IA locale](/fr/local-llms/apple-silicon-m5-local-llm) -- puce Apple M5 pour l\'IA locale',
          '[Meilleurs modèles LLM locaux pour débutants](/fr/local-llms/best-beginner-local-llm-models) -- quels modèles utiliser sur l\'appareil',
        ]
      }
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Guide Galaxy S26 IA Locale: Galaxy AI et NPU Expliqués (2026)',
      'description': 'Galaxy S26 IA locale expliquée: ce que fait le Personal Data Engine de Samsung, quelles fonctions Galaxy AI exigent le cloud, et comment exécuter des LLM locaux sur Exynos 2600 ou Snapdragon.',
      'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png',
      'datePublished': '2026-06-15',
      'dateModified': '2026-10-19',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'inLanguage': 'fr',
      'url': 'https://www.promptquorum.com/fr/local-llms/galaxy-s26-local-ai-on-device-2026',
      'articleBody': 'Le Galaxy S26, lancé le 25 février 2026, apporte la plateforme IA hybride de Samsung — Galaxy AI — dans votre poche.'
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'fr',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Qu\'est-ce que le Personal Data Engine sur le Galaxy S26?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Samsung décrit le Personal Data Engine (PDE) comme le composant sur l\'appareil qui permet des expériences Galaxy AI contextuelles et personnalisées. Le matériel de lancement de Samsung indique que le PDE fonctionne sur l\'appareil, mais ne publie ni son architecture, ni le modèle sous-jacent, ni la liste des fonctions qui en dépendent.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Galaxy AI est-il totalement local ou utilise-t-il le cloud?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Hybride. Le filtrage d\'appels, Now Nudge, Now Brief, et la détection de fraude s\'exécutent entièrement localement via Personal Data Engine. La génération d\'images (Creative Studio), les agents Gemini et Circle to Search nécessitent des serveurs cloud.'
          }
        }
      ]
    }
  },
  es: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-11-19',
    last_full_refresh: '2026-10-19',
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-es.webp',
    title: 'Ejecutar IA Local en Galaxy S26: IA en Dispositivo Explicada (2026)',
    seoTitle: 'Galaxy S26 IA en Dispositivo: Cómo Funciona Galaxy AI y NPU',
    intro: 'El Galaxy S26, lanzado el 25 de febrero de 2026, trae la plataforma híbrida de IA local y cloud de Samsung — Galaxy AI — a tu bolsillo. A diferencia del enfoque local de Apple, Samsung equilibra el procesamiento local con funciones en cloud, permitiéndote elegir dónde van tus datos. Esta guía explica qué hace realmente Galaxy AI en el dispositivo, qué funciones requieren cloud, y cómo ejecutar tus propios LLM de peso abierto en el hardware del S26.',
    metaDescription: 'Galaxy S26 IA en dispositivo: qué hace el Personal Data Engine de Samsung, qué funciones Galaxy AI necesitan la nube y cómo ejecutar LLM locales en Exynos 2600 o Snapdragon.',
    publishDate: '2026-06-15',
    dateModified: '2026-10-19',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios Android interesados en IA local, compradores de Galaxy S26, desarrolladores explorando inferencia LLM móvil',
    primaryTerm: 'Galaxy S26 IA en dispositivo',
    targetKeywords: ['galaxy s26 ia en dispositivo', 'características galaxy ai', 'exynos 2600 ai', 'snapdragon 8 elite gen 5 npu', 'ai en dispositivo android', 'ejecutar llm en galaxy s26'],
    leadAnswerBlock: '**El Galaxy S26 ejecuta Galaxy AI — una plataforma híbrida que mezcla procesamiento local (Filtrado de Llamadas, Now Nudge, Detección de Fraudes) con funciones en cloud (generación de imágenes Creative Studio, integración Gemini). Controlas el toggle de privacidad: "Procesar datos solo en el dispositivo" restringe todo al procesamiento local. Los chips varían según modelo y región: el S26 Ultra usa el Snapdragon 8 Elite Gen 5 for Galaxy en todas partes, mientras que el S26 y el S26+ usan el Exynos 2600 en Europa, Corea y la mayoría de mercados, y Snapdragon en EE.UU., China y Japón; las pruebas independientes de IA los muestran más o menos igualados, así que elige por modelo y precio, no por chip. Para ejecutar tus propios LLM: modelos 7B cuantificados a Q4 (4-bit) alcanzan ~24 tokens/seg en LPDDR5X 85,6 GB/s.**',
    toc: [
      { label: 'Puntos Clave', anchor: '#key-takeaways' },
      { label: '¿Qué Es Galaxy AI en el Galaxy S26?', anchor: '#what-is-galaxy-ai' },
      { label: 'En el Dispositivo vs. Cloud: ¿Qué Funciones Se Quedan Locales?', anchor: '#on-device-vs-cloud' },
      { label: 'Generación de Imágenes en el Dispositivo en el S26', anchor: '#edgefusion' },
      { label: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 NPU', anchor: '#npu-comparison' },
      { label: 'Ejecutar tu Propio LLM en el Galaxy S26', anchor: '#run-own-llm' },
      { label: 'Privacidad en el Galaxy S26: ¿Qué Sale de tu Dispositivo?', anchor: '#privacy' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related-reading' }
    ],
    quickAnswerTop: {
      es: {
        question: '¿Qué características de Galaxy AI en el S26 se ejecutan en el dispositivo sin enviar datos a la nube?',
        answer: 'El Filtrado de Llamadas (responde llamadas localmente), Now Nudge (sugerencias contextuales), Now Brief (resúmenes personales) y la Detección de Fraudes procesan datos localmente usando el Motor de Datos Personales (PDE). Puedes activar "Procesar datos solo en el dispositivo" en configuración Galaxy AI para bloquear alternativas en cloud para funciones compatibles. La generación de imágenes (Creative Studio) requiere conexión de red e inicio de sesión con cuenta Samsung.',
        bullets: [
          'El Filtrado de Llamadas identifica llamantes desconocidos y resume su intención (Samsung no indica dónde se ejecuta)',
          'Now Nudge sugiere fotos de la Galería para compartir y requiere iniciar sesión con cuenta Samsung',
          'La Detección de Fraudes marca llamadas sospechosas; Samsung no publica dónde las procesa',
          'Habilita el botón "Procesar datos solo en el dispositivo" para forzar procesamiento local cuando esté disponible',
          'La generación de imágenes de Creative Studio es solo en cloud (requiere cuenta Samsung + red)',
          'El Exynos 2600 es 2,4 veces más rápido en Stable Diffusion que el Exynos 2500'
        ],
        updatedDate: '2026-10-19'
      }
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Galaxy AI es una plataforma híbrida: Samsung afirma que su Personal Data Engine (PDE) funciona en el dispositivo y habilita funciones contextuales como Now Nudge, Now Brief y Filtrado de Llamadas, pero no publica un mapa de procesamiento por función. Creative Studio requiere conexión de red y cuenta Samsung; Circle to Search requiere internet.',
          'El chip depende del modelo y la región: el S26 Ultra usa siempre el Snapdragon 8 Elite Gen 5 for Galaxy; el S26 y el S26+ usan el Exynos 2600 fuera de EE.UU., China y Japón. Samsung afirma +113% de NPU sobre el Exynos 2500 y +39% de NPU para el Ultra sobre el S25 Ultra; los resultados de MLPerf Mobile se reparten entre ambos chips, así que ninguno es un ganador claro para LLM locales.',
          'Toggle de privacidad: activa "Procesar datos solo en el dispositivo" en Ajustes > Galaxy AI para evitar el fallback en cloud. Knox Vault (enclave de seguridad por hardware) protege los datos sensibles; Knox Matrix sincroniza ajustes entre dispositivos.',
          'Generación de imágenes en el dispositivo: Samsung se asoció con Nota AI en EdgeFusion, que genera imágenes de 512×512 en menos de un segundo en el NPU del Exynos 2600 usando una optimización de Stable Diffusion basada en LCM. Creative Studio (la app de cara al usuario) requiere red + cuenta Samsung.',
          'Ejecutar tus propios LLM: la memoria LPDDR5X (85,6 GB/s) limita el rendimiento de decodificación. Un modelo 7B cuantificado a Q4 (4-bit, ~3,5 GB) alcanza un máximo teórico de ~24 tokens/seg. Usa MLC Chat, Google AI Edge Gallery u Ollama en Termux para probarlo.',
          'RAM: el S26 y el S26+ incluyen 12 GB; el S26 Ultra, 12 GB o 16 GB. El tamaño de la memoria define qué modelos caben y el ancho de banda define la velocidad de decodificación; un S26 base de 12 GB basta para modelos de 3B-8B en Q4 y el Ultra de 16 GB da margen para modelos mayores.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: '¿Qué Es Galaxy AI en el Galaxy S26?',
        content: [
          'Galaxy AI es la plataforma de inteligencia en el dispositivo de Samsung, que Samsung describe como Galaxy AI en el dispositivo impulsada por su Personal Data Engine, con Gemini y Perplexity integrados como agentes; Samsung no publica qué modelo de lenguaje ejecuta cada función en el dispositivo. Lanzada con el Galaxy S24, perfeccionada en el S25 y ampliada en el S26 (lanzamiento el 25 de febrero de 2026), equilibra el procesamiento local para privacidad con funciones cloud para más potencia.',
          'El Personal Data Engine (PDE) es el núcleo: aprende de tus datos en el dispositivo — mensajes, calendario, fotos, historial de ubicación — y Samsung afirma que funciona en el dispositivo; las funciones cloud que actives explícitamente son una vía aparte. Knox Vault, un enclave de seguridad por hardware, aísla los datos sensibles (credenciales, historial médico, información de pago) en hardware seguro propio; ningún sistema de seguridad es absoluto.',
          'Samsung confirma solo dos cosas por función: Creative Studio requiere conexión de red y cuenta Samsung, y Circle to Search requiere internet. Para Filtrado de Llamadas, Now Nudge, Now Brief y Detección de Fraude, Samsung no indica dónde se procesa; por eso la tabla siguiente es una clasificación de trabajo, no una garantía de Samsung.',
          'El control del usuario es central: un solo toggle en los ajustes de Galaxy AI — "Procesar datos solo en el dispositivo" — bloquea el fallback en cloud para funciones compatibles. Cómo se comporta cada función sin activarlo depende de la función y de la versión de One UI.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Galaxy AI ejecuta funciones en el dispositivo mediante el Personal Data Engine (PDE) y funciones cloud bajo demanda, con un solo toggle para forzar el procesamiento exclusivo en el dispositivo.' },
          { type: 'plain-terms', text: 'Knox Vault = bloqueo por hardware para secretos; PDE = aprende de tu teléfono (según Samsung, en el dispositivo); toggle = tu elección de si las funciones cloud están activas.' }
        ]
      },
      'on-device-vs-cloud': {
        id: 'on-device-vs-cloud',
        title: 'En el Dispositivo vs. Cloud: ¿Qué Funciones Se Quedan Locales?',
        columns: ['Función', 'Procesamiento', '¿Envía Datos de Usuario?', '¿Requiere Red?'],
        rows: [
          { 'Función': 'Filtrado de Llamadas', 'Procesamiento': 'En el dispositivo (NPU)', '¿Envía Datos de Usuario?': 'No — audio de la llamada transcrito localmente', '¿Requiere Red?': 'No' },
          { 'Función': 'Now Nudge', 'Procesamiento': 'En el dispositivo (PDE)', '¿Envía Datos de Usuario?': 'No — lee pantalla + calendario localmente', '¿Requiere Red?': 'No' },
          { 'Función': 'Now Brief', 'Procesamiento': 'En el dispositivo (PDE)', '¿Envía Datos de Usuario?': 'No — resume reservas + eventos locales', '¿Requiere Red?': 'No' },
          { 'Función': 'Detección de Fraude', 'Procesamiento': 'En el dispositivo (NPU)', '¿Envía Datos de Usuario?': 'No — audio de llamada e intención marcados localmente', '¿Requiere Red?': 'No' },
          { 'Función': 'Creative Studio (generación de imágenes)', 'Procesamiento': 'Cloud (servidores Samsung)', '¿Envía Datos de Usuario?': 'Sí — prompt de texto + imágenes de referencia', '¿Requiere Red?': 'Sí — requiere cuenta + internet' },
          { 'Función': 'Agentes Gemini (tareas multi-paso)', 'Procesamiento': 'Cloud (Google Gemini)', '¿Envía Datos de Usuario?': 'Sí — intención de la tarea a servidores de Google', '¿Requiere Red?': 'Sí' },
          { 'Función': 'Circle to Search', 'Procesamiento': 'Cloud (Google)', '¿Envía Datos de Usuario?': 'Sí — área de captura de pantalla a Google', '¿Requiere Red?': 'Sí' },
          { 'Función': 'Photo Assist (ediciones complejas)', 'Procesamiento': 'Híbrido (segmentación local, generación cloud)', '¿Envía Datos de Usuario?': 'Parcial — imagen enviada para modelos generativos', '¿Requiere Red?': 'Sí para eliminar objetos / cambiar fondo' }
        ]
      },
      'edgefusion': {
        id: 'edgefusion',
        title: 'Generación de Imágenes en el Dispositivo en el S26',
        content: [
          'Samsung se asoció con Nota AI (Corea del Sur) para optimizar Stable Diffusion para inferencia en NPU móvil. El resultado: generación de texto a imagen en menos de un segundo, produciendo imágenes fotorrealistas de 512×512 píxeles completamente en el dispositivo, sin necesidad de red.',
          'La técnica se llama EdgeFusion (de la investigación de Nota AI): usa un programador de Latent Consistency Model (LCM) con eliminación de ruido en 2 pasos en lugar de los 50 pasos estándar, reduciendo el cómputo en ~96%. El tiling a nivel de modelo reduce la latencia de atención cruzada en ~73%. La cuantificación de precisión mixta (W8A16 en la U-Net) mantiene la calidad intacta mientras reduce a la mitad el uso de VRAM.',
          'Rendimiento: validado en el NPU del Exynos 2600, donde genera imágenes de 512×512 en menos de 1 segundo. El Exynos 2600 es 2,4 veces más rápido en Stable Diffusion que el Exynos 2500, así que esto es realista. Las variantes con Snapdragon 8 Elite Gen 5 en EE.UU./China/Japón probablemente logren tiempos similares o ligeramente más largos debido a un rendimiento de NPU menor.',
          'Verificación de realidad: la app que Samsung realmente distribuye, Creative Studio, requiere red + inicio de sesión con cuenta Samsung. No está claro si EdgeFusion se lanzó como función de cara al usuario en el lanzamiento o si impulsa una actualización futura. Samsung nunca mencionó "EdgeFusion" por nombre en los materiales oficiales de Unpacked; la función proviene de la asociación de investigación con Nota AI. Usa este dato para gestionar expectativas: la generación de imágenes en el dispositivo está llegando, pero puede que no se lance completa desde el primer día.'
        ],
        items: [
          'Programador LCM: la eliminación de ruido en 2 pasos reemplaza la difusión estándar de 50 pasos, 96% menos pasos de cómputo',
          'Tiling a nivel de modelo: reduce el acceso a memoria de atención cruzada, ~73% de mejora en latencia',
          'Cuantificación W8A16: pesos de 8-bit, activaciones de 16-bit, sin pérdida de calidad perceptible',
          'Resolución objetivo: 512×512 píxeles, salida fotorrealista',
          'Optimizado para NPU: los núcleos tensoriales del Exynos 2600 manejan la mayor parte del cómputo; sobrecarga mínima de CPU',
          'Capaz de funcionar offline: dependencia de red cero si EdgeFusion está activo'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'EdgeFusion genera imágenes de 512×512 en menos de 1 segundo en el dispositivo, reduciendo Stable Diffusion de 50 pasos de eliminación de ruido a solo 2, usando pesos cuantificados y tiling a nivel de modelo.' },
          { type: 'plain-terms', text: 'Menos pasos de eliminación de ruido = menos cómputo = inferencia más rápida. La cuantificación reduce el modelo. El tiling divide las capas de atención para que quepan en la VRAM del teléfono. Juntos: imágenes instantáneas sin conexión.' }
        ]
      },
      'npu-comparison': {
        id: 'npu-comparison',
        title: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 NPU',
        image: '/images/galaxy-s26-npu-comparison-en.svg',
        imageCaption: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 en el Galaxy S26: 2nm GAA vs 3nm FinFET, +113% vs +39% de NPU generación a generación según Samsung (bases distintas), y ancho de banda de memoria LPDDR5X de 85,6 GB/s vs 84,8 GB/s.',
        columns: ['Métrica', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', '¿Ganador para IA Local?'],
        rows: [
          { 'Métrica': 'Nodo / Fábrica', 'Exynos 2600': '2nm GAA (Samsung SF2)', 'Snapdragon 8 Elite Gen 5': '3nm FinFET (TSMC)', '¿Ganador para IA Local?': 'Sin demostrar (nodo distinto)' },
          { 'Métrica': 'Rendimiento IA generación a generación', 'Exynos 2600': '+113% vs Exynos 2500', 'Snapdragon 8 Elite Gen 5': '+39% NPU vs S25 Ultra (Ultra)', '¿Ganador para IA Local?': 'No comparable (bases distintas)' },
          { 'Métrica': 'Velocidad Stable Diffusion', 'Exynos 2600': '2,4 veces más rápido que Exynos 2500', 'Snapdragon 8 Elite Gen 5': 'Gana la prueba MLPerf de Stable Diffusion', '¿Ganador para IA Local?': 'Snapdragon (MLPerf Mobile)' },
          { 'Métrica': 'Regiones/variantes disponibles', 'Exynos 2600': 'S26 / S26+ (fuera de EE.UU., China, Japón)', 'Snapdragon 8 Elite Gen 5': 'S26 / S26+ (EE.UU., China, Japón); S26 Ultra (todas)', '¿Ganador para IA Local?': 'Depende de tu región' },
          { 'Métrica': 'Ancho de banda de memoria', 'Exynos 2600': 'LPDDR5X 85,6 GB/s (típico)', 'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84,8 GB/s (típico)', '¿Ganador para IA Local?': 'Empate (menos del 1%)' },
          { 'Métrica': 'Veredicto', 'Exynos 2600': 'Gana clasificación, detección, lenguaje', 'Snapdragon 8 Elite Gen 5': 'Gana segmentación, superresolución, Stable Diffusion', '¿Ganador para IA Local?': 'Más o menos igualados; elige por modelo y precio' }
        ]
      },
      'run-own-llm': {
        id: 'run-own-llm',
        title: 'Ejecutar tu Propio LLM en el Galaxy S26',
        image: '/images/galaxy-s26-7b-model-throughput-en.svg',
        imageCaption: 'Velocidad de decodificación de un modelo 7B en el Galaxy S26 según cuantificación en LPDDR5X 85,6 GB/s: FP16 (~14 GB) se limita a 6 tokens/seg, Q4 4-bit (~3,5 GB) alcanza un techo teórico de 24 tokens/seg, con 8-15 tokens/seg realistas en la práctica.',
        content: [
          'El ancho de banda de memoria del Galaxy S26 es el factor limitante. LPDDR5X a 85,6 GB/s significa que la generación de tokens (la "fase de decodificación" de la inferencia LLM) se limita aproximadamente a ancho_de_banda_de_memoria / tamaño_del_modelo_en_bytes tokens por segundo.',
          'Matemática: un modelo de 7B parámetros en FP16 (floats de 16-bit) pesa ~14 GB. A 85,6 GB/s ÷ 14 GB ≈ 6 tokens/seg como máximo teórico. Pero la cuantificación cambia esto drásticamente.',
          'Cuantificado a Q4 (4-bit, almacenando 2 parámetros por byte), el mismo modelo de 7B se reduce a ~3,5 GB. El rendimiento escala: 85,6 GB/s ÷ 3,5 GB ≈ 24 tokens/seg como máximo teórico. En el mundo real es menor por la sobrecarga de cómputo, pero los objetivos realistas son 8-15 tokens/seg en el Galaxy S26 para un modelo 7B cuantificado.',
          'Mejores herramientas: MLC Chat (multiplataforma, modelos de la comunidad), Google AI Edge Gallery y Ollama dentro de Termux. Todas soportan modelos cuantificados. Empieza con un modelo de 3B-8B (Qwen3 4B, Gemma 3 4B, Llama 3.2 3B, Phi-4-mini) en Q4 o Q5; un modelo de 7B-8B cabe en 12 GB de RAM, pero deja menos margen para Android.'
        ],
        items: [
          'Usa cuantificación Q4 (4-bit) para modelos 7B; Q3 (3-bit) cabe en modelos más grandes pero pierde calidad',
          'Evita los modelos de precisión completa FP16; son demasiado grandes para un rendimiento práctico',
          'Mejores modelos de peso abierto para móvil: Qwen3 4B, Gemma 3 4B, Llama 3.2 3B, Phi-4-mini',
          'Velocidad esperada: 8-15 tokens/seg para 7B Q4; 3-5 tokens/seg para 7B sin cuantificar',
          'Usa MLC Chat, Google AI Edge Gallery u Ollama en Termux; comprueba en cada app si soporta NPU, ya que muchas usan solo CPU/GPU',
          'Prueba sin conexión: si Ollama cachea el modelo, la inferencia funciona completamente sin internet'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Privacidad en el Galaxy S26: ¿Qué Sale de tu Dispositivo?',
        content: [
          'Knox Vault es el módulo de seguridad por hardware de Samsung: un procesador separado aislado de la CPU principal y del sistema operativo Android. Los datos sensibles — métodos de pago, huellas dactilares, historial médico, contraseñas — viven en Knox Vault y nunca se exponen a las apps ni a los servidores de Samsung sin una acción explícita del usuario.',
          'El Personal Data Engine (PDE) aprende localmente: los modelos de machine learning en el dispositivo se entrenan con tus patrones de uso, calendario, mensajes, fotos y contactos. Samsung afirma que el PDE funciona en el dispositivo. Controlas el límite con el toggle "Procesar datos solo en el dispositivo" en los ajustes de Galaxy AI.',
          'Las funciones cloud necesitan conexión de red: Creative Studio requiere iniciar sesión con cuenta Samsung y Circle to Search requiere internet. Cada función tiene su propia política de privacidad; revísala antes de usarla.',
          'Privacidad entre dispositivos: Knox Matrix sincroniza los ajustes de seguridad y los datos cifrados entre tus dispositivos Galaxy usando cifrado de extremo a extremo. Samsung describe Knox Enhanced Encrypted Protection (KEEP) como el cifrado de los datos de cada app.',
          'Verifica en lugar de suponer: Samsung no publica un mapa por función de lo que se ejecuta localmente, así que revisa el ajuste "Procesar datos solo en el dispositivo" y el aviso de privacidad de cada función en tu teléfono.'
        ],
        items: [
          'Knox Vault = enclave aislado por hardware para secretos; procesador separado, SO separado, nunca sincronizado a la nube',
          'PDE = motor de aprendizaje que Samsung describe como local (en el dispositivo)',
          'Toggle "Procesar datos solo en el dispositivo" = bloquea todo el fallback en cloud para funciones compatibles',
          'Creative Studio = depende de la nube; desactivarlo evita la transmisión de datos de generación de imágenes',
          'Agentes Gemini = impulsados por Google; usa tu cuenta de Google para tareas multi-paso',
          'Knox Matrix = sincronización de seguridad entre dispositivos; consulta la documentación Knox de Samsung para su modelo de cifrado'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          { q: '¿Galaxy AI es completamente local o usa la nube?', a: 'Híbrido. Filtrado de Llamadas, Now Nudge, Now Brief y Detección de Fraude se ejecutan completamente en el dispositivo usando el Personal Data Engine. La generación de imágenes (Creative Studio), los agentes Gemini y Circle to Search requieren servidores cloud. Activa "Procesar datos solo en el dispositivo" en ajustes para forzar el procesamiento exclusivamente local en las funciones compatibles.' },
          { q: '¿Qué es el Personal Data Engine del Galaxy S26?', a: 'Samsung describe el Personal Data Engine (PDE) como el componente en el dispositivo que habilita experiencias de Galaxy AI personalizadas y sensibles al contexto. El material de lanzamiento de Samsung afirma que el PDE funciona en el dispositivo, pero no publica su arquitectura, el modelo que lo sustenta ni una lista de las funciones que dependen de él.' },
{ q: '¿Es seguro usar IA en el Galaxy S26?', a: 'Más seguro cuando el procesamiento se queda en el teléfono, pero no de forma uniforme. Creative Studio necesita conexión de red e inicio de sesión con cuenta Samsung, y Circle to Search necesita internet, así que esas funciones envían datos fuera del dispositivo. El ajuste "Procesar datos solo en el dispositivo" limita Galaxy AI al procesamiento local; las guías de versiones anteriores de One UI lo describen como un ajuste que activas tú mismo y señalan que las ediciones de fotos en la nube dejan de funcionar. Su ubicación en el menú varía según el firmware, así que confírmalo en tu teléfono y lee el aviso de privacidad de Samsung.' },
{ q: '¿Basta el Galaxy S26 base para la IA en el dispositivo o necesito el Ultra?', a: 'Para las funciones de Galaxy AI basta el S26 base: Samsung ofrece la misma suite Galaxy AI en los tres modelos. Para ejecutar tus propios modelos, lo que más importa es la RAM: el S26 y el S26+ tienen 12 GB, el Ultra 12 GB o 16 GB. Un teléfono de 12 GB maneja modelos de 3B-8B en Q4; elige el Ultra de 16 GB solo para modelos mayores. Las pruebas independientes de IA muestran al Exynos 2600 y al Snapdragon 8 Elite Gen 5 más o menos igualados.' },
{ q: '¿Cuál es la diferencia entre el Exynos 2600 y el Snapdragon 8 Elite Gen 5?', a: 'Samsung afirma que el Exynos 2600 (2nm, Samsung Foundry) es +113% más rápido en IA que el Exynos 2500. El Snapdragon 8 Elite Gen 5 for Galaxy da al S26 Ultra +39% de NPU sobre el S25 Ultra (cifra de Samsung). En los resultados de MLPerf Mobile, el Exynos gana en clasificación, detección y lenguaje, y el Snapdragon gana en segmentación, superresolución y Stable Diffusion, así que ninguno es un ganador claro para la IA local.' },
          { q: '¿Puedo ejecutar un modelo de lenguaje grande en el Galaxy S26?', a: 'Sí, pero con límites. El ancho de banda LPDDR5X (85,6 GB/s) limita el rendimiento de decodificación. Un modelo 7B cuantificado a Q4 alcanza ~24 tokens/seg como máximo teórico (~8-15 realistas). Usa MLC Chat, Google AI Edge Gallery u Ollama en Termux. Los modelos más grandes (13B, 70B) son poco prácticos por las limitaciones de memoria y ancho de banda.' },
          { q: '¿Galaxy AI funciona sin conexión?', a: 'Parcialmente. Los LLM locales que ejecutas tú mismo (por ejemplo Ollama en Termux) funcionan completamente sin conexión una vez descargado el modelo. Creative Studio, los agentes Gemini y Circle to Search requieren internet. Samsung no indica dónde se ejecutan Filtrado de Llamadas, Now Nudge, Now Brief y Detección de Fraude; pruébalos en modo avión. Activa "Procesar datos solo en el dispositivo" para asegurarte de que las funciones compatibles no intenten el fallback en cloud.' },
          { q: '¿Qué es EdgeFusion y llega al Galaxy S26?', a: 'EdgeFusion es la versión optimizada de Stable Diffusion de Nota AI para NPU móviles, que genera imágenes de 512×512 en menos de 1 segundo en el Exynos 2600. Samsung se asoció oficialmente con Nota AI, pero "EdgeFusion" nunca se nombró en los materiales oficiales de Galaxy Unpacked. Creative Studio (la app de generación de imágenes que realmente se distribuye) requiere red + cuenta Samsung, así que el estado exacto de EdgeFusion en el lanzamiento no está claro.' },
          { q: '¿Qué datos recopila Samsung mediante Galaxy AI?', a: 'Samsung afirma que el Personal Data Engine funciona en el dispositivo. Las funciones cloud como Creative Studio (requiere red y cuenta Samsung) y Circle to Search (requiere internet) sí envían datos. Cuando activas funciones cloud — Creative Studio, agentes Gemini — se envían datos a Samsung (para Galaxy AI) o a Google (para Gemini). Desactiva estas funciones para evitar la transmisión. Revisa Ajustes > Privacidad > Galaxy AI para ver un desglose de qué está activado.' },
          { q: '¿Knox Vault protege mis datos incluso de Samsung?', a: 'Sí. Knox Vault es un procesador de hardware separado, aislado del sistema operativo principal. Los datos sensibles (biometría, información de pago, historial médico) almacenados en Knox Vault no pueden ser accedidos por apps de Android ni por el software de Samsung sin un desbloqueo explícito. Samsung describe Knox Vault como una capa física que aísla los datos sensibles en su propio hardware seguro; ningún sistema de seguridad es absoluto.' },
          { q: '¿Puedo desactivar por completo las funciones cloud de Galaxy AI?', a: 'Sí. Desactiva funciones individuales en Ajustes > Galaxy AI. Puedes alternar Creative Studio, los agentes Gemini y Circle to Search de forma independiente. Activa "Procesar datos solo en el dispositivo" para bloquear el fallback en cloud en las funciones compatibles. Las funciones en el dispositivo (Filtrado de Llamadas, Now Nudge) siguen funcionando.' },
          { q: '¿Es el Galaxy S26 mejor que el iPhone para ejecutar IA local?', a: 'Para ejecutar tus propios LLM cuantificados, sí. Android soporta más herramientas de modelos de peso abierto (MLC Chat, Google AI Edge Gallery, Ollama en Termux). Pero la filosofía on-device-first de Apple y su PCC criptográficamente auditable lo hacen más fuerte en privacidad si confías más en la infraestructura de Apple que en la de Samsung.' },
          { q: '¿Con qué frecuencia se actualizarán las funciones de Galaxy AI?', a: 'Las funciones de Galaxy AI se despliegan mediante actualizaciones de One UI (normalmente parches de seguridad mensuales + actualizaciones de funciones trimestrales). Samsung indica siete años de actualizaciones de seguridad para el Galaxy S26; consulta las páginas de soporte de Samsung para el compromiso de actualizaciones del SO.' }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[LLMs locales en móviles 2026: iPhone 16 Pro, iPad M4 y Snapdragon X](/es/local-llms/mobile-local-llms) -- LLMs locales en dispositivos móviles',
          '[IA en Dispositivo y Memoria: Por Qué HBM Determina la Velocidad de IA Local (2026)](/es/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026) -- memoria HBM y velocidad IA en dispositivo',
          '[Galaxy vs iPhone IA en dispositivo: Samsung Galaxy AI vs Apple Intelligence (2026)](/es/local-llms/galaxy-vs-iphone-on-device-ai-2026) -- Galaxy AI vs Apple Intelligence',
          '[Apple M5 para IA local](/es/local-llms/apple-silicon-m5-local-llm) -- chip Apple M5 para IA local',
          '[Mejores modelos LLM locales para principiantes](/es/local-llms/best-beginner-local-llm-models) -- qué modelos ejecutar en el dispositivo',
        ],
      }
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', 'headline': 'Ejecutar IA Local en Galaxy S26: IA en Dispositivo Explicada (2026)', 'description': 'Galaxy S26 IA en dispositivo: qué hace el Personal Data Engine de Samsung, qué funciones Galaxy AI necesitan la nube y cómo ejecutar LLM locales en Exynos 2600 o Snapdragon.', 'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png', 'datePublished': '2026-06-15', 'dateModified': '2026-10-19', 'author': { '@type': 'Organization', 'name': 'PromptQuorum' }, 'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, 'inLanguage': 'es', 'url': 'https://www.promptquorum.com/es/local-llms/galaxy-s26-local-ai-on-device-2026', 'articleBody': 'El Galaxy S26, lanzado el 25 de febrero de 2026, trae la plataforma híbrida de IA local y cloud de Samsung — Galaxy AI — a tu bolsillo.' },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'es', 'mainEntity': [
      { '@type': 'Question', 'name': '¿Qué es el Personal Data Engine del Galaxy S26?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Samsung describe el Personal Data Engine (PDE) como el componente en el dispositivo que habilita experiencias de Galaxy AI personalizadas y sensibles al contexto. El material de lanzamiento de Samsung afirma que el PDE funciona en el dispositivo, pero no publica su arquitectura, el modelo que lo sustenta ni una lista de las funciones que dependen de él.' } },
{ '@type': 'Question', 'name': '¿Galaxy AI es completamente local o usa la nube?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Híbrido. Filtrado de Llamadas, Now Nudge, Now Brief y Detección de Fraude se ejecutan completamente en el dispositivo usando el Personal Data Engine. La generación de imágenes (Creative Studio), los agentes Gemini y Circle to Search requieren servidores cloud.' } },
      { '@type': 'Question', 'name': '¿Cuál es la diferencia entre el Exynos 2600 y el Snapdragon 8 Elite Gen 5?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Samsung afirma que el Exynos 2600 (2nm, Samsung Foundry) es +113% más rápido en IA que el Exynos 2500. El Snapdragon 8 Elite Gen 5 for Galaxy da al S26 Ultra +39% de NPU sobre el S25 Ultra (cifra de Samsung). En los resultados de MLPerf Mobile, el Exynos gana en clasificación, detección y lenguaje, y el Snapdragon gana en segmentación, superresolución y Stable Diffusion, así que ninguno es un ganador claro para la IA local.' } }
    ] }
  },
  ja: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-11-19',
    last_full_refresh: '2026-10-19',
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-ja.webp',
    title: 'Galaxy S26 でのローカル AI 実行: オンデバイス AI を完全解説 (2026)',
    seoTitle: 'Galaxy S26 オンデバイス AI: 仕組みと動作原理',
    intro: '2026年2月25日にリリースされたGalaxy S26は、Samsungのハイブリッドなオンデバイス・クラウド AI プラットフォーム「Galaxy AI」をあなたのポケットに持ち込みます。Appleのオンデバイスファーストなアプローチとは異なり、Samsungはローカル処理とクラウド機能のバランスを取り、あなたのデータがどこで処理されるかを選択させてくれます。このガイドではGalaxy AIが実際にオンデバイスで何をするのか、どの機能がクラウドを必要とするのか、そしてS26のハードウェア上で独自のオープンウェイトLLMを実行する方法について説明します。',
    metaDescription: 'Galaxy S26のオンデバイスAIを解説: Personal Data Engineの役割、クラウドが必要なGalaxy AI機能、Exynos 2600/SnapdragonでのローカルLLM実行方法。',
    publishDate: '2026-06-15',
    dateModified: '2026-10-19',
    readTime: '10分読了',
    educationalLevel: 'Intermediate',
    audience: 'オンデバイスAIに関心があるAndroidユーザー、Galaxy S26購入者、モバイルLLM推論を探索している開発者',
    primaryTerm: 'Galaxy S26 オンデバイス AI',
    targetKeywords: ['galaxy s26 オンデバイス ai', 'galaxy ai機能', 'exynos 2600 ai', 'snapdragon 8 elite gen 5 npu', 'androidオンデバイスai', 'galaxy s26でllmを実行'],
    leadAnswerBlock: '**Galaxy S26はGalaxy AIを実行します。これはオンデバイス処理(通話フィルタリング、Now Nudge、詐欺検出)とクラウド機能(Creative Studioイメージ生成、Gemini統合)を混合するハイブリッドプラットフォームです。プライバシートグルで制御: 「デバイスのみでデータ処理」はすべてをローカル処理に制限します。チップは機種と地域で異なります: S26 Ultraは全地域でSnapdragon 8 Elite Gen 5 for Galaxyを搭載し、S26/S26+は欧州・韓国などの大半の市場でExynos 2600、米国・中国・日本ではSnapdragonを搭載します。独立したAIベンチマークでは両者はほぼ互角のため、チップではなく機種と価格で選んでください。独自のLLM実行の場合: Q4 (4ビット)で量子化された7Bモデルは理論値で約24トークン/秒をLPDDR5X 85.6 GB/sで達成します。**',
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'Galaxy S26のGalaxy AIとは？', anchor: '#what-is-galaxy-ai' },
      { label: 'オンデバイス vs クラウド：どの機能がローカルのままか？', anchor: '#on-device-vs-cloud' },
      { label: 'S26のオンデバイス画像生成', anchor: '#edgefusion' },
      { label: 'Exynos 2600 vs Snapdragon 8 Elite Gen 5 NPU比較', anchor: '#npu-comparison' },
      { label: 'Galaxy S26で独自のLLMを実行する', anchor: '#run-own-llm' },
      { label: 'Galaxy S26のプライバシー：デバイスから出るものは？', anchor: '#privacy' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' }
    ],
    quickAnswerTop: {
      ja: {
        question: 'Galaxy S26でクラウドにデータを送信せずにオンデバイスで実行されるGalaxy AI機能は何ですか?',
        answer: '通話フィルタリング(通話をローカルで応答)、Now Nudge(コンテキスト提案)、Now Brief(個人用ダイジェスト)、詐欺検出はすべてPersonal Data Engine(PDE)を使用してローカルでデータを処理します。Galaxy AI設定で「デバイスのみでデータを処理」を有効にすると、サポートされている機能のクラウドフォールバックをブロックできます。イメージ生成(Creative Studio)にはネットワーク接続とSamsungアカウントでのログインが必要です。',
        bullets: [
          '通話フィルタリングは不明な発信者を識別し、用件を要約します(Samsungは実行場所を明示していません)',
          'Now NudgeはGalleryの共有写真を提案し、Samsungアカウントへのログインが必要です',
          '詐欺検出は不審な通話にフラグを立てますが、Samsungは処理場所を公表していません',
          '「デバイスのみでデータを処理」トグルを有効にすると、可能な場合にローカル処理を強制できます',
          'Creative Studioのイメージ生成はクラウドのみ(Samsungアカウント+ネットワークが必要)',
          'Exynos 2600はStable DiffusionでExynos 2500の2.4倍高速です'
        ],
        updatedDate: '2026-10-19'
      }
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Galaxy AIはハイブリッドプラットフォームです：SamsungはPersonal Data Engine（PDE）がオンデバイスであり、Now Nudge、Now Brief、通話フィルタリングなどのコンテキスト機能を支えると説明していますが、機能ごとの処理場所の一覧は公表していません。Creative Studioにはネットワーク接続とSamsungアカウントが、Circle to Searchにはインターネットが必要です。',
          'チップは機種と地域で決まります：S26 Ultraは常にSnapdragon 8 Elite Gen 5 for Galaxy、S26/S26+は米国・中国・日本以外でExynos 2600を搭載します。SamsungはExynos 2500比でNPU +113%、UltraについてS25 Ultra比でNPU +39%と主張しています。MLPerf Mobileの結果は両チップで分かれており、ローカルLLMでどちらかが明確に優れているとは言えません。',
          'プライバシートグル：「デバイスのみでデータを処理」を設定 > Galaxy AIで有効にすると、クラウドフォールバックを防止できます。Knox Vaultのハードウェアセキュリティエンクレーブが機密データを保護し、Knox Matrixがデバイス間で設定を同期します。',
          'オンデバイス画像生成：SamsungはNota AIと提携してEdgeFusionを開発し、LCMベースのStable Diffusion最適化を用いてExynos 2600のNPU上で512×512画像を1秒未満で生成します。Creative Studio（ユーザー向けアプリ）はネットワークとSamsungアカウントを必要とします。',
          '独自のLLMを実行する：LPDDR5Xメモリ（85.6 GB/s）がデコードスループットを制限します。Q4（4ビット、約3.5 GB）で量子化された7Bモデルは理論上最大約24トークン/秒に達します。MLC ChatまたはOllama（Termux）でテストしてください。',
          'RAM：S26とS26+は12 GB、S26 Ultraは12 GBまたは16 GBです。メモリ容量が載せられるモデルを、帯域幅がデコード速度を決めます。12 GBの標準S26でも3B〜8BのQ4モデルには十分で、16 GBのUltraはより大きなモデルに余裕を与えます。'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'Galaxy S26のGalaxy AIとは？',
        content: [
          'Galaxy AIは、Samsungのオンデバイスインテリジェンスプラットフォームであり、SamsungはPersonal Data Engineを基盤とし、GeminiとPerplexityをエージェントとして統合していると説明しています。各オンデバイス機能でどの言語モデルが動作するかは公表されていません。Galaxy S24で発表され、S25で改良され、S26（2026年2月25日発売）で拡張され、プライバシーのためのローカル処理とパワーのためのクラウド機能のバランスを取っています。',
          'Personal Data Engine（PDE）が中核です：メッセージ、カレンダー、写真、位置情報履歴などデバイス上のデータから学習しますが、Samsungはこれをオンデバイスと説明しています。ハードウェアセキュリティエンクレーブであるKnox Vaultは、認証情報、健康記録、決済情報などの機密データをメインOSから隔離する設計です。',
          'Samsungが機能ごとに明示しているのは2点だけです：Creative Studioにはネットワーク接続とSamsungアカウントが必要で、Circle to Searchにはインターネットが必要です。通話フィルタリング、Now Nudge、Now Brief、詐欺検出については処理場所が明示されていないため、下の表はSamsungの保証ではなく、作業上の分類です。',
          'ユーザーの制御が中心です：Galaxy AI設定内の単一のトグル—「デバイスのみでデータを処理」—が、対応機能のすべてのクラウドフォールバックをブロックします。対応機能の範囲や設定の場所はファームウェアによって異なるため、お使いの端末で確認してください。'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Galaxy AIはPersonal Data Engine（PDE）を介してオンデバイス機能を実行し、要求に応じてクラウド機能を実行します。デバイスのみの処理を強制する単一のトグルがあります。' },
          { type: 'plain-terms', text: 'Knox Vault = 秘密情報のハードウェアロック。PDE = データをアップロードせずに端末から学習。トグル = クラウド機能をオンにするかどうかの選択。' }
        ]
      },
      'on-device-vs-cloud': {
        id: 'on-device-vs-cloud',
        title: 'オンデバイス vs クラウド：どの機能がローカルのままか？',
        columns: ['機能', '処理方式', 'ユーザーデータ送信？', 'ネットワーク必要？'],
        rows: [
          { '機能': '通話フィルタリング', '処理方式': 'オンデバイス（NPU）', 'ユーザーデータ送信？': 'なし — 通話音声はローカルで文字起こし', 'ネットワーク必要？': '不要' },
          { '機能': 'Now Nudge', '処理方式': 'オンデバイス（PDE）', 'ユーザーデータ送信？': 'なし — 画面とカレンダーをローカルで読み取り', 'ネットワーク必要？': '不要' },
          { '機能': 'Now Brief', '処理方式': 'オンデバイス（PDE）', 'ユーザーデータ送信？': 'なし — ローカルの予約とイベントを要約', 'ネットワーク必要？': '不要' },
          { '機能': '詐欺検出', '処理方式': 'オンデバイス（NPU）', 'ユーザーデータ送信？': 'なし — 通話音声と意図をローカルでフラグ付け', 'ネットワーク必要？': '不要' },
          { '機能': 'Creative Studio（画像生成）', '処理方式': 'クラウド（Samsungサーバー）', 'ユーザーデータ送信？': 'あり — テキストプロンプト+参照画像', 'ネットワーク必要？': '必要 — アカウント+インターネット必須' },
          { '機能': 'Geminiエージェント（複数ステップタスク）', '処理方式': 'クラウド（Google Gemini）', 'ユーザーデータ送信？': 'あり — タスクの意図をGoogleサーバーへ', 'ネットワーク必要？': '必要' },
          { '機能': 'Circle to Search', '処理方式': 'クラウド（Google）', 'ユーザーデータ送信？': 'あり — スクリーンショット領域をGoogleへ', 'ネットワーク必要？': '必要' },
          { '機能': 'Photo Assist（複雑な編集）', '処理方式': 'ハイブリッド（ローカルセグメンテーション、クラウド生成）', 'ユーザーデータ送信？': '一部 — 生成モデル用に画像を送信', 'ネットワーク必要？': 'オブジェクト削除/背景変更に必要' }
        ]
      },
      'edgefusion': {
        id: 'edgefusion',
        title: 'S26のオンデバイス画像生成',
        content: [
          'SamsungはNota AI（韓国）と提携し、モバイルNPU推論向けにStable Diffusionを最適化しました。その結果、テキストから画像への生成が1秒未満で完了し、ネットワーク不要で512×512ピクセルのフォトリアリスティックな画像を完全にオンデバイスで生成できます。',
          'この技術はEdgeFusion（Nota AIの研究由来）と呼ばれ、標準の50ステップの代わりに2ステップのノイズ除去を行うLatent Consistency Model（LCM）スケジューラーを使用し、計算量を約96%削減します。モデルレベルのタイリングによりクロスアテンションのレイテンシを約73%削減します。混合精度量子化（U-Net内でW8A16）により、VRAM使用量を半減させながら品質を維持します。',
          '性能：Exynos 2600のNPUで検証済みで、512×512画像を1秒未満で生成します。Exynos 2600はExynos 2500よりStable Diffusionで2.4倍高速なので、これは現実的な数値です。米国・中国・日本向けのSnapdragon 8 Elite Gen 5バリアントでも同程度の時間になると見込まれますが、確認された数値はありません。',
          '現実的な注意点：Samsungが実際に出荷しているアプリCreative Studioは、ネットワークとSamsungアカウントのログインを必要とします。EdgeFusionが発売時にユーザー向け機能として出荷されたのか、それとも将来のアップデートで搭載されるのかは不明です。Samsungは公式のGalaxy Unpacked資料で「EdgeFusion」という名称を一度も使用していません — この機能はNota AIとの研究提携に由来します。期待値管理のためにこの情報を活用してください：オンデバイス画像生成は登場しつつありますが、初日から完全な形で出荷されるとは限りません。'
        ],
        items: [
          'LCMスケジューラー：2ステップのノイズ除去が標準の50ステップ拡散に代わり、計算ステップを96%削減',
          'モデルレベルのタイリング：クロスアテンションのメモリアクセスを削減し、約73%のレイテンシ改善',
          'W8A16量子化：8ビット重み、16ビット活性化、知覚可能な品質低下なし',
          '目標解像度：512×512ピクセル、フォトリアリスティックな出力',
          'NPU最適化：Exynos 2600のテンソルコアが大部分の計算を処理、CPUオーバーヘッドは最小限',
          'オフライン対応：EdgeFusionがアクティブな場合、ネットワーク依存はゼロ'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'EdgeFusionは、Stable Diffusionのノイズ除去ステップを50から2に削減し、量子化された重みとモデルレベルのタイリングを使用することで、512×512画像を1秒未満でオンデバイス生成します。' },
          { type: 'plain-terms', text: 'ノイズ除去ステップが少ない＝計算量が少ない＝推論が速い。量子化はモデルを小さくする。タイリングはアテンション層を分割して端末のVRAMに収める。組み合わせると：オフラインでも瞬時の画像生成。' }
        ]
      },
      'npu-comparison': {
        id: 'npu-comparison',
        title: 'Exynos 2600 vs Snapdragon 8 Elite Gen 5 NPU比較',
        image: '/images/galaxy-s26-npu-comparison-en.svg',
        imageCaption: 'Galaxy S26におけるExynos 2600 vs Snapdragon 8 Elite Gen 5：2nm GAA vs 3nm FinFET、Samsungが主張する世代間NPU性能+113% vs +39%(比較基準が異なる)、LPDDR5Xメモリ帯域幅85.6 GB/s vs 84.8 GB/s。',
        columns: ['指標', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', 'ローカルAIの勝者は？'],
        rows: [
          { '指標': 'プロセスノード/製造', 'Exynos 2600': '2nm GAA（Samsung SF2）', 'Snapdragon 8 Elite Gen 5': '3nm FinFET（TSMC）', 'ローカルAIの勝者は？': '未証明（ノードが異なる）' },
          { '指標': '世代間AI性能', 'Exynos 2600': 'Exynos 2500比+113%', 'Snapdragon 8 Elite Gen 5': 'S25 Ultra比NPU+39%（Ultra）', 'ローカルAIの勝者は？': '比較不可（基準が異なる）' },
          { '指標': 'Stable Diffusion速度', 'Exynos 2600': 'Exynos 2500より2.4倍高速', 'Snapdragon 8 Elite Gen 5': 'MLPerfのStable Diffusionで優位', 'ローカルAIの勝者は？': 'Snapdragon（MLPerf Mobile）' },
          { '指標': '利用可能な地域/バリアント', 'Exynos 2600': 'S26/S26+（米国・中国・日本以外）', 'Snapdragon 8 Elite Gen 5': 'S26/S26+（米中日）、S26 Ultra（全地域）', 'ローカルAIの勝者は？': 'お住まいの地域による' },
          { '指標': 'メモリ帯域幅', 'Exynos 2600': 'LPDDR5X 85.6 GB/s（標準）', 'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84.8 GB/s（標準）', 'ローカルAIの勝者は？': '同等（差1%未満）' },
          { '指標': '総評', 'Exynos 2600': '分類・検出・言語で優位', 'Snapdragon 8 Elite Gen 5': 'セグメンテーション・超解像・SDで優位', 'ローカルAIの勝者は？': 'ほぼ互角。機種と価格で選ぶ' }
        ]
      },
      'run-own-llm': {
        id: 'run-own-llm',
        title: 'Galaxy S26で独自のLLMを実行する',
        image: '/images/galaxy-s26-7b-model-throughput-en.svg',
        imageCaption: 'LPDDR5X 85.6 GB/sにおける量子化別Galaxy S26 7Bモデルのデコード速度：FP16（約14 GB）は6トークン/秒が上限、Q4 4ビット（約3.5 GB）は理論上の上限24トークン/秒に達し、実際には8-15トークン/秒が現実的。',
        content: [
          'Galaxy S26のメモリ帯域幅が制限要因です。LPDDR5X 85.6 GB/sでは、トークン生成（LLM推論の「デコードフェーズ」）はおよそメモリ帯域幅÷モデルサイズ（バイト）トークン/秒で頭打ちになります。',
          '計算：FP16（16ビット浮動小数点）の7Bパラメータモデルは約14 GBです。85.6 GB/s ÷ 14 GB ≈ 理論上最大6トークン/秒です。しかし量子化がこれを劇的に変えます。',
          'Q4（4ビット、1バイトあたり2パラメータを格納）で量子化すると、同じ7Bモデルは約3.5 GBに縮小します。スループットはスケールします：85.6 GB/s ÷ 3.5 GB ≈ 理論上最大24トークン/秒。実際には計算オーバーヘッドのためこれより低くなりますが、Galaxy S26で量子化された7Bモデルの現実的な目標は8-15トークン/秒です。',
          '推奨ツール：MLC Chat（クロスプラットフォーム、コミュニティモデル）、Google AI Edge Gallery、Termux上で動かすOllama。いずれも量子化モデルをサポートします。Q4またはQ5量子化の3B〜8Bモデル（Qwen3 4B、Gemma 3 4B、Llama 3.2 3B、Phi-4-mini）から始めてください。7B〜8Bモデルは12 GB RAMに収まりますが、Android本体の余裕は少なくなります。'
        ],
        items: [
          '7BモデルにはQ4（4ビット）量子化を使用。Q3（3ビット）はより大きなモデルに対応できますが品質が低下します',
          'FP16フル精度モデルは避けてください。実用的なスループットには大きすぎます',
          'モバイル向けの最良のオープンウェイトモデル：Qwen3 4B、Gemma 3 4B、Llama 3.2 3B、Phi-4-mini',
          '予想速度：7B Q4で8-15トークン/秒、非量子化7Bで3-5トークン/秒',
          'MLC Chat、Google AI Edge Gallery、またはTermux上のOllamaを使用してください。NPU対応はアプリごとに確認が必要で、多くはCPU/GPUのみで動作します',
          'オフラインでテスト：Ollamaがモデルをキャッシュしていれば、推論は完全にインターネットなしで動作します'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Galaxy S26のプライバシー：デバイスから出るものは？',
        content: [
          'Knox Vaultは、Samsungのハードウェアセキュリティモジュールです：メインCPUとAndroid OSから隔離された独立したプロセッサです。決済情報、指紋、健康記録、パスワードなどの機密データはKnox Vault内に保存され、ユーザーの明示的な操作なしにアプリやSamsungのサーバーに公開されない設計です。',
          'Personal Data Engine（PDE）はローカルで学習します：オンデバイスの機械学習モデルが、利用パターン、カレンダー、メッセージ、写真、連絡先を学習します。Samsungはこれをオンデバイスと説明しています。Galaxy AI設定内の「デバイスのみでデータを処理」トグルで境界を制御できます。',
          'クラウド機能にはネットワーク接続が必要です：Creative StudioにはSamsungアカウントでのログインが、Circle to Searchにはインターネットが必要です。各機能には独自のプライバシーポリシーがあるため、利用前に確認してください。',
          'デバイス間のプライバシー：Knox Matrixはエンドツーエンド暗号化を使用して、Galaxyデバイス間でセキュリティ設定と暗号化データを同期します。SamsungはKnox Enhanced Encrypted Protection（KEEP）がアプリごとのデータを暗号化すると説明しています。',
          '想定せずに確認を：Samsungはローカルで動作する機能の一覧を機能ごとには公表していないため、端末の「デバイスのみでデータを処理」設定と各機能のプライバシー通知を確認してください。'
        ],
        items: [
          'Knox Vault = 機密情報のためのハードウェア隔離エンクレーブ。独立したプロセッサ、独立したOS、クラウドとは決して同期されない',
          'PDE = ローカル学習エンジン。データをアップロードせずにあなたのデータから学習',
          '「デバイスのみでデータを処理」トグル = 対応機能のすべてのクラウドフォールバックをブロック',
          'Creative Studio = クラウド依存。無効にすると画像生成データの送信を防止',
          'Geminiエージェント = Google駆動。複数ステップのタスクにGoogleアカウントを使用',
          'Knox Matrix = デバイス間のセキュリティ同期。暗号化の仕組みはSamsungのKnox文書を参照'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Galaxy AIは完全にオンデバイスですか、それともクラウドを使用しますか？', a: 'ハイブリッドです。通話フィルタリング、Now Nudge、Now Brief、詐欺検出はPersonal Data Engineを使用してオンデバイスで実行されるとされていますが、Samsungは機能ごとの処理場所を明示していません。画像生成（Creative Studio）、Geminiエージェント、Circle to Searchはクラウドサーバーを必要とします。対応機能でローカルのみの処理を強制するには、設定で「デバイスのみでデータを処理」を有効にしてください。' },
          { q: 'Galaxy S26のPersonal Data Engineとは何ですか？', a: 'Samsungは、Personal Data Engine（PDE）を、状況に応じたパーソナライズされたGalaxy AI体験を可能にするオンデバイスのコンポーネントと説明しています。Samsungの発表資料ではPDEがオンデバイスであると述べられていますが、そのアーキテクチャ、基盤モデル、依存する機能の一覧は公表されていません。' },
          { q: 'Galaxy S26でAIを使うのは安全ですか？', a: '処理が端末内に留まる場合はより安全ですが、一律ではありません。Creative StudioにはネットワークとSamsungアカウントのログインが、Circle to Searchにはインターネットが必要で、これらはデータを端末外に送信します。「デバイスのみでデータを処理」設定はGalaxy AIをローカル処理に制限します。以前のOne UI向けのガイドでは、自分でオンにする設定であり、有効にするとクラウドベースの写真編集が使えなくなると説明されています。メニューの場所はファームウェアにより異なるため、端末で確認し、Samsungのプライバシー通知をお読みください。' },
          { q: '標準のGalaxy S26でオンデバイスAIには十分ですか、それともUltraが必要ですか？', a: 'Galaxy AI機能であれば標準のS26で十分です。Samsungは3機種に同じGalaxy AIスイートを提供しています。独自のモデルを動かす場合はRAMが最も重要で、S26とS26+は12 GB、Ultraは12 GBまたは16 GBです。12 GBの端末でも3B〜8BのQ4モデルは動作し、より大きなモデルを使う場合のみ16 GBのUltraを選んでください。独立したAIベンチマークでは、Exynos 2600とSnapdragon 8 Elite Gen 5はほぼ互角です。' },
          { q: 'Exynos 2600とSnapdragon 8 Elite Gen 5の違いは何ですか？', a: 'Exynos 2600（2nm、Samsung Foundry）は、SamsungによるとExynos 2500よりAI性能が+113%高速です。Snapdragon 8 Elite Gen 5 for Galaxyは、S26 UltraにS25 Ultra比でNPU +39%をもたらします（Samsungの数値）。MLPerf Mobileの結果では、Exynosが分類・検出・言語テストで、Snapdragonがセグメンテーション・超解像・Stable Diffusionで優位であり、ローカルAIで明確な勝者はありません。' },
          { q: 'Galaxy S26で大規模言語モデルを実行できますか？', a: 'はい、ただし制限があります。LPDDR5X帯域幅（85.6 GB/s）がデコードスループットの上限となります。Q4で量子化された7Bモデルは理論上最大約24トークン/秒（現実的には約8-15トークン/秒）に達します。MLC Chat、Google AI Edge Gallery、またはTermux上のOllamaを使用してください。13Bや70Bなどの大規模モデルは、メモリと帯域幅の制約により実用的ではありません。' },
          { q: 'Galaxy AIはオフラインで動作しますか？', a: '部分的に動作します。自分で実行するオンデバイスLLM（例：TermuxのOllama）は、モデルをダウンロードした後は完全にオフラインで動作します。Creative Studio、Geminiエージェント、Circle to Searchはインターネットを必要とします。Samsungは通話フィルタリング、Now Nudge、Now Brief、詐欺検出の処理場所を明示していないため、機内モードで試してください。対応機能がクラウドフォールバックを試みないようにするには、「デバイスのみでデータを処理」を有効にしてください。' },
          { q: 'EdgeFusionとは何ですか？Galaxy S26に搭載されていますか？', a: 'EdgeFusionは、モバイルNPU向けに最適化されたNota AIのStable Diffusionで、Exynos 2600上で512×512画像を1秒未満で生成します。Samsungは公式にNota AIと提携していますが、「EdgeFusion」という名称は公式のGalaxy Unpacked資料で一度も使用されていません。実際に出荷されている画像生成アプリCreative Studioはネットワークとサムスンアカウントを必要とするため、発売時点でのEdgeFusionの正確な状況は不明です。' },
          { q: 'Samsungは Galaxy AIを通じてどのようなデータを収集しますか？', a: 'SamsungはPersonal Data Engineがオンデバイスであると説明しています。Creative Studio（ネットワークとSamsungアカウントが必要）やCircle to Search（インターネットが必要）などのクラウド機能はデータを送信します。クラウド機能（Creative Studio、Geminiエージェント）を有効にすると、データはSamsung（Galaxy AI用）またはGoogle（Gemini用）に送信されます。送信を防ぐにはこれらの機能を無効にしてください。有効になっている内容の内訳は設定 > プライバシー > Galaxy AIで確認できます。' },
          { q: 'Knox VaultはSamsungからもデータを保護しますか？', a: 'はい。Knox Vaultは、メインOSから隔離された独立したハードウェアプロセッサです。Knox Vaultに保存された機密データ（生体認証、決済情報、健康情報）は、明示的な解除なしにAndroidアプリやSamsungのソフトウェアからアクセスできません。SamsungはKnox Vaultを、機密データを専用のセキュアハードウェア内に隔離する物理レイヤーと説明していますが、絶対的に安全なセキュリティシステムはありません。' },
          { q: 'Galaxy AIのクラウド機能を完全に無効にできますか？', a: 'はい。設定 > Galaxy AIで個別の機能を無効にできます。Creative Studio、Geminiエージェント、Circle to Searchをそれぞれ独立して切り替えられます。「デバイスのみでデータを処理」を有効にすると、対応機能のクラウドフォールバックをブロックできます。オンデバイス機能（通話フィルタリング、Now Nudge）は引き続き動作します。' },
          { q: 'ローカルAIの実行にはGalaxy S26はiPhoneより優れていますか？', a: '独自の量子化LLMを実行する場合はイエスです。Androidはより多くのオープンウェイトモデルツール（MLC Chat、Google AI Edge Gallery、Termux上のOllama）をサポートします。ただし、AppleのオンデバイスファーストのフィロソフィーとPCCの暗号学的監査可能性は、SamsungよりもAppleのインフラを信頼する場合にはプライバシー面でより強力です。' },
          { q: 'Galaxy AIの機能はどのくらいの頻度で更新されますか？', a: 'Galaxy AIの機能はOne UIアップデート（通常は月次のセキュリティパッチと四半期ごとの機能アップデート）を通じて展開されます。SamsungはGalaxy S26に7年間のセキュリティアップデートを提供するとしています。OSアップデートの保証期間はSamsungのサポートページで確認してください。' }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[モバイル向けローカルLLM 2026：iPhone 16 Pro・iPad M4・Snapdragon X](/ja/local-llms/mobile-local-llms) -- モバイルデバイスでのローカルLLM',
          '[オンデバイスAIとメモリ: HBMメモリがローカルAIを加速する理由 (2026)](/ja/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026) -- HBMメモリとオンデバイスAI速度',
          '[Galaxy vs iPhone オンデバイスAI: Samsung Galaxy AIとApple Intelligence(2026)](/ja/local-llms/galaxy-vs-iphone-on-device-ai-2026) -- Galaxy AI vs Apple Intelligence比較',
          '[Apple M5でのローカルAI](/ja/local-llms/apple-silicon-m5-local-llm) -- Apple M5チップとローカルAI',
          '[初心者向けベストローカルLLMモデル](/ja/local-llms/best-beginner-local-llm-models) -- オンデバイスで実行するモデル',
        ],
      }
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', 'headline': 'Galaxy S26 でのローカル AI 実行: オンデバイス AI を完全解説 (2026)', 'description': 'Galaxy S26のオンデバイスAIを解説: Personal Data Engineの役割、クラウドが必要なGalaxy AI機能、Exynos 2600/SnapdragonでのローカルLLM実行方法。', 'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png', 'datePublished': '2026-06-15', 'dateModified': '2026-10-19', 'author': { '@type': 'Organization', 'name': 'PromptQuorum' }, 'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, 'inLanguage': 'ja', 'url': 'https://www.promptquorum.com/ja/local-llms/galaxy-s26-local-ai-on-device-2026', 'articleBody': '2026年2月25日にリリースされたGalaxy S26は、Samsungのハイブリッドなオンデバイス・クラウド AI プラットフォーム「Galaxy AI」をあなたのポケットに持ち込みます。' },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'ja', 'mainEntity': [
      { '@type': 'Question', 'name': 'Galaxy S26のPersonal Data Engineとは何ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Samsungは、Personal Data Engine（PDE）を、状況に応じたパーソナライズされたGalaxy AI体験を可能にするオンデバイスのコンポーネントと説明しています。Samsungの発表資料ではPDEがオンデバイスであると述べられていますが、そのアーキテクチャ、基盤モデル、依存する機能の一覧は公表されていません。' } },
      { '@type': 'Question', 'name': 'Galaxy AIは完全にオンデバイスですか、それともクラウドを使用しますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'ハイブリッドです。通話フィルタリング、Now Nudge、Now Brief、詐欺検出はPersonal Data Engineを使用してオンデバイスで実行されるとされていますが、Samsungは機能ごとの処理場所を明示していません。画像生成（Creative Studio）、Geminiエージェント、Circle to Searchはクラウドサーバーを必要とします。' } },
      { '@type': 'Question', 'name': 'Exynos 2600とSnapdragon 8 Elite Gen 5の違いは何ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Exynos 2600（2nm、Samsung Foundry）は、SamsungによるとExynos 2500よりAI性能が+113%高速です。Snapdragon 8 Elite Gen 5 for Galaxyは、S26 UltraにS25 Ultra比でNPU +39%をもたらします（Samsungの数値）。MLPerf Mobileの結果では、Exynosが分類・検出・言語テストで、Snapdragonがセグメンテーション・超解像・Stable Diffusionで優位であり、ローカルAIで明確な勝者はありません。' } }
    ] }
  },
  zh: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-11-19',
    last_full_refresh: '2026-10-19',
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-zh.webp',
    title: '在Galaxy S26上运行本地AI: 本地设备AI解析指南 (2026)',
    seoTitle: 'Galaxy S26本地设备AI: Galaxy AI工作原理与本地运行方式',
    intro: 'Galaxy S26于2026年2月25日推出,将三星的混合本地和云AI平台——Galaxy AI——带到您的口袋里。与苹果的本地优先方式不同,三星平衡了本地处理和云功能,让您选择数据去向。本指南解释了Galaxy AI在本地实际做什么,哪些功能需要云,以及如何在S26硬件上运行自己的开源LLM。',
    metaDescription: 'Galaxy S26本地设备AI解析: 三星Personal Data Engine的作用、哪些Galaxy AI功能需要云,以及如何在Exynos 2600或骁龙上运行本地LLM。',
    publishDate: '2026-06-15',
    dateModified: '2026-10-19',
    readTime: '10分钟阅读',
    educationalLevel: 'Intermediate',
    audience: '对本地设备AI感兴趣的安卓用户、Galaxy S26购买者、探索移动LLM推理的开发者',
    primaryTerm: 'Galaxy S26本地设备AI',
    targetKeywords: ['galaxy s26本地设备ai', 'galaxy ai功能', 'exynos 2600 ai', 'snapdragon 8 elite gen 5 npu', '本地设备ai安卓', '在galaxy s26上运行llm'],
    leadAnswerBlock: '**Galaxy S26运行Galaxy AI——混合平台混合本地处理(通话过滤、Now Nudge、欺诈检测)与云功能(Creative Studio图像生成、Gemini集成)。您控制隐私切换:"仅在设备上处理数据"限制所有处理为本地。芯片因机型和地区而异:S26 Ultra在所有地区都使用Snapdragon 8 Elite Gen 5 for Galaxy,S26和S26+在美国、中国和日本以外使用Exynos 2600,在美国、中国和日本使用骁龙;独立AI测试显示两者大致持平,因此请按机型和价格选择,而不是按芯片。对于运行自己的LLM,Q4(4位)量化的7B模型在LPDDR5X 85.6 GB/s上理论上可达~24 tokens/sec。**',
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: 'Galaxy S26上的Galaxy AI是什么？', anchor: '#what-is-galaxy-ai' },
      { label: '本地设备 vs 云端：哪些功能保留在本地？', anchor: '#on-device-vs-cloud' },
      { label: 'S26上的本地设备图像生成', anchor: '#edgefusion' },
      { label: 'Exynos 2600 vs Snapdragon 8 Elite Gen 5 NPU对比', anchor: '#npu-comparison' },
      { label: '在Galaxy S26上运行你自己的LLM', anchor: '#run-own-llm' },
      { label: 'Galaxy S26隐私：哪些数据会离开你的设备？', anchor: '#privacy' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' }
    ],
    quickAnswerTop: {
      zh: {
        question: 'Galaxy S26上哪些Galaxy AI功能在本地设备上运行而不发送数据到云端?',
        answer: '三星表示Personal Data Engine(PDE)在设备上运行,并为通话过滤、Now Nudge和Now Brief等上下文功能提供支持,但三星没有公布每项功能的具体处理位置。您可以在Galaxy AI设置中启用"仅在设备上处理数据",将支持的功能限制为本地处理。图像生成(Creative Studio)需要网络连接和三星账户登录。',
        bullets: [
          '通话过滤识别陌生来电并总结来电意图(三星未说明其运行位置)',
          'Now Nudge建议要分享的相册照片,需要登录三星账户',
          '欺诈检测标记可疑来电;三星未公布其处理位置',
          '启用"仅在设备上处理数据"开关以限制为本地处理',
          'Creative Studio图像生成仅限云(需要三星账户+网络)',
          'Exynos 2600在Stable Diffusion上比Exynos 2500快2.4倍'
        ],
        updatedDate: '2026-10-19'
      }
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Galaxy AI是混合平台：三星表示Personal Data Engine（PDE）在设备上运行，并为Now Nudge、Now Brief和通话过滤等上下文功能提供支持，但没有公布每项功能的处理位置。Creative Studio需要网络连接和三星账户；Circle to Search需要联网。',
          '芯片取决于机型和地区：S26 Ultra始终使用Snapdragon 8 Elite Gen 5 for Galaxy；S26和S26+在美国、中国和日本以外使用Exynos 2600。三星称其NPU比Exynos 2500提升+113%，Ultra的NPU比S25 Ultra提升+39%；MLPerf Mobile结果在两款芯片间互有胜负，因此没有哪款是本地LLM的明确赢家。',
          '隐私开关：在设置 > Galaxy AI中启用"仅在设备上处理数据"以阻止云端回退。Knox Vault提供硬件级安全；Knox Matrix在设备间同步设置。',
          '本地设备图像生成：三星与Nota AI合作推出EdgeFusion，使用基于LCM的Stable Diffusion优化，在Exynos 2600 NPU上不到一秒即可生成512×512图像。Creative Studio（面向用户的应用）需要网络和三星账户。',
          '运行你自己的LLM：LPDDR5X内存（85.6 GB/s）限制了解码吞吐量。经Q4（4位）量化的7B模型（约3.5 GB）理论最大速度约为24 tokens/秒。使用MLC Chat或Termux中的Ollama进行测试。',
          '内存：S26和S26+为12 GB，S26 Ultra为12 GB或16 GB。内存容量决定能装下哪些模型，带宽决定解码速度：12 GB的S26可运行Q4量化的3B–8B模型，16 GB的Ultra则为更大的模型留出余量。'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'Galaxy S26上的Galaxy AI是什么？',
        content: [
          'Galaxy AI是三星的本地设备智能平台，三星将其描述为基于Personal Data Engine的设备端Galaxy AI，并集成Gemini和Perplexity作为智能体；三星没有公布哪个语言模型为哪项本地功能提供支持。该平台随Galaxy S24推出，在S25上得到改进，并在S26（2026年2月25日发布）上进一步扩展，在隐私本地处理与云端功能强大性之间取得平衡。',
          'Personal Data Engine（PDE）是核心：它从你设备上的数据——短信、日历、照片、位置历史——中学习，三星表示它在设备上运行，除非你明确选择使用云端功能。Knox Vault是一个硬件安全模块，将敏感数据（凭证、健康记录、支付信息）与主系统隔离。',
          '三星对每项功能只确认两点：Creative Studio需要网络连接和三星账户，Circle to Search需要联网。对于通话过滤、Now Nudge、Now Brief和欺诈检测，三星没有说明处理位置；因此下表是一种工作性分类，而不是三星的保证。',
          '用户控制是核心：Galaxy AI设置中的单个开关——"仅在设备上处理数据"——会阻止支持功能的云端回退。请在你的手机上确认该开关的状态及其菜单位置，因为不同固件版本可能有所不同。'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Galaxy AI通过Personal Data Engine（PDE）运行本地设备功能，并按需运行云端功能，一个开关即可强制仅设备处理。' },
          { type: 'plain-terms', text: 'Knox Vault = 保护机密信息的硬件锁；PDE = 三星称其在设备上学习；开关 = 你选择是否开启云端功能。' }
        ]
      },
      'on-device-vs-cloud': {
        id: 'on-device-vs-cloud',
        title: '本地设备 vs 云端：哪些功能保留在本地？',
        columns: ['功能', '处理方式', '是否发送用户数据？', '是否需要网络？'],
        rows: [
          { '功能': '通话过滤', '处理方式': '本地设备（NPU）', '是否发送用户数据？': '否——来电音频在本地转录', '是否需要网络？': '否' },
          { '功能': 'Now Nudge', '处理方式': '本地设备（PDE）', '是否发送用户数据？': '否——在本地读取屏幕和日历', '是否需要网络？': '否' },
          { '功能': 'Now Brief', '处理方式': '本地设备（PDE）', '是否发送用户数据？': '否——摘要本地预订和事件', '是否需要网络？': '否' },
          { '功能': '欺诈检测', '处理方式': '本地设备（NPU）', '是否发送用户数据？': '否——通话音频和意图在本地标记', '是否需要网络？': '否' },
          { '功能': 'Creative Studio（图像生成）', '处理方式': '云端（三星服务器）', '是否发送用户数据？': '是——文本提示词+参考图像', '是否需要网络？': '是——需要账户+互联网' },
          { '功能': 'Gemini智能体（多步骤任务）', '处理方式': '云端（Google Gemini）', '是否发送用户数据？': '是——任务意图发送至Google服务器', '是否需要网络？': '是' },
          { '功能': 'Circle to Search', '处理方式': '云端（Google）', '是否发送用户数据？': '是——截屏区域发送至Google', '是否需要网络？': '是' },
          { '功能': 'Photo Assist（复杂编辑）', '处理方式': '混合（本地分割，云端生成）', '是否发送用户数据？': '部分——图像发送用于生成模型', '是否需要网络？': '删除对象/更换背景需要' }
        ]
      },
      'edgefusion': {
        id: 'edgefusion',
        title: 'S26上的本地设备图像生成',
        content: [
          '三星与Nota AI（韩国）合作，为移动NPU推理优化了Stable Diffusion。结果是：文本生成图像不到一秒即可完成，完全在本地设备上生成512×512像素的照片级真实图像，无需网络。',
          '这项技术被称为EdgeFusion（来自Nota AI的研究）：它使用Latent Consistency Model（LCM）调度器，以2步去噪代替标准的50步，将计算量减少约96%。模型级平铺（tiling）将交叉注意力延迟降低约73%。混合精度量化（U-Net中的W8A16）在保持质量的同时将VRAM占用减半。',
          '性能：已在Exynos 2600 NPU上验证，可在1秒内生成512×512图像。Exynos 2600在Stable Diffusion上比Exynos 2500快2.4倍，因此这个数据是可信的。美国/中国/日本版本的Snapdragon 8 Elite Gen 5由于NPU性能较低，可能实现相近或略长的用时。',
          '现实检验：三星实际发布的应用Creative Studio需要网络和三星账户登录。目前尚不清楚EdgeFusion是作为面向用户的功能在发布时上线，还是将支持未来的更新。三星在官方Galaxy Unpacked资料中从未提及"EdgeFusion"这一名称；该功能源自与Nota AI的研究合作。请据此管理预期：本地设备图像生成正在到来，但可能不会在首日以完整形态上线。'
        ],
        items: [
          'LCM调度器：2步去噪取代标准的50步扩散，计算步骤减少96%',
          '模型级平铺：减少交叉注意力的内存访问，延迟改善约73%',
          'W8A16量化：8位权重，16位激活，无可感知的质量损失',
          '目标分辨率：512×512像素，照片级真实输出',
          'NPU优化：Exynos 2600的张量核心处理大部分计算，CPU开销极小',
          '支持离线：EdgeFusion激活时零网络依赖'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'EdgeFusion通过将Stable Diffusion的去噪步骤从50步减少到仅2步，并使用量化权重和模型级平铺，实现在设备上1秒内生成512×512图像。' },
          { type: 'plain-terms', text: '更少的去噪步骤=更少的计算=更快的推理。量化压缩模型体积。平铺将注意力层拆分以适配手机VRAM。三者结合：离线也能瞬间出图。' }
        ]
      },
      'npu-comparison': {
        id: 'npu-comparison',
        title: 'Exynos 2600 vs Snapdragon 8 Elite Gen 5 NPU对比',
        image: '/images/galaxy-s26-npu-comparison-en.svg',
        imageCaption: 'Galaxy S26上的Exynos 2600对比Snapdragon 8 Elite Gen 5：2nm GAA对比3nm FinFET，三星公布的代际NPU提升+113%对比+39%（基准不同），LPDDR5X内存带宽85.6 GB/s对比84.8 GB/s。',
        columns: ['指标', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', '本地AI的赢家？'],
        rows: [
          { '指标': '制程/代工厂', 'Exynos 2600': '2nm GAA（三星SF2）', 'Snapdragon 8 Elite Gen 5': '3nm FinFET（台积电）', '本地AI的赢家？': '未经证实（工艺不同）' },
          { '指标': '代际AI性能提升', 'Exynos 2600': '比Exynos 2500快+113%', 'Snapdragon 8 Elite Gen 5': '比S25 Ultra的NPU快+39%（Ultra）', '本地AI的赢家？': '不可比（基准不同）' },
          { '指标': 'Stable Diffusion速度', 'Exynos 2600': '比Exynos 2500快2.4倍', 'Snapdragon 8 Elite Gen 5': '赢得MLPerf的Stable Diffusion测试', '本地AI的赢家？': 'Snapdragon（MLPerf Mobile）' },
          { '指标': '可用地区/机型', 'Exynos 2600': 'S26 / S26+（美国、中国、日本除外）', 'Snapdragon 8 Elite Gen 5': 'S26 / S26+（美国/中国/日本）；Ultra（全地区）', '本地AI的赢家？': '取决于你所在的地区' },
          { '指标': '内存带宽', 'Exynos 2600': 'LPDDR5X 85.6 GB/s（典型值）', 'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84.8 GB/s（典型值）', '本地AI的赢家？': '基本持平（差距不到1%）' },
          { '指标': '结论', 'Exynos 2600': '赢得分类、检测、语言', 'Snapdragon 8 Elite Gen 5': '赢得分割、超分辨率、Stable Diffusion', '本地AI的赢家？': '大致持平；按机型/价格选择' }
        ]
      },
      'run-own-llm': {
        id: 'run-own-llm',
        title: '在Galaxy S26上运行你自己的LLM',
        image: '/images/galaxy-s26-7b-model-throughput-en.svg',
        imageCaption: '在LPDDR5X 85.6 GB/s下，Galaxy S26按量化方式划分的7B模型解码速度：FP16（约14 GB）上限为6 tokens/秒，Q4 4位（约3.5 GB）理论上限达到24 tokens/秒，实际中8-15 tokens/秒较为现实。',
        content: [
          'Galaxy S26的内存带宽是限制因素。LPDDR5X为85.6 GB/s，意味着token生成（LLM推理的"解码阶段"）的速度大致以内存带宽÷模型字节大小（tokens/秒）为上限。',
          '计算方式：一个7B参数模型在FP16（16位浮点数）下约为14 GB。85.6 GB/s ÷ 14 GB ≈ 理论最大值6 tokens/秒。但量化会极大改变这一情况。',
          '经Q4（4位，每字节存储2个参数）量化后，同一个7B模型缩小到约3.5 GB。吞吐量随之提升：85.6 GB/s ÷ 3.5 GB ≈ 理论最大值24 tokens/秒。由于计算开销，实际数值会更低，但在Galaxy S26上，量化后的7B模型的现实目标是8-15 tokens/秒。',
          '最佳工具：MLC Chat（跨平台，社区模型）、Google AI Edge Gallery和Termux中的Ollama。它们都支持量化模型。建议从3B–8B模型（Qwen3 4B、Gemma 3 4B、Llama 3.2 3B、Phi-4-mini）以Q4或Q5量化开始；7B–8B模型可装入12 GB内存，但会给Android本身留下较少空间。'
        ],
        items: [
          '7B模型使用Q4（4位）量化；Q3（3位）可容纳更大模型但会损失质量',
          '避免使用FP16全精度模型；对实际吞吐量而言体积过大',
          '移动端最佳开源模型：Qwen3 4B、Gemma 3 4B、Llama 3.2 3B、Phi-4-mini',
          '预期速度：7B Q4约为8-15 tokens/秒；未量化7B约为3-5 tokens/秒',
          '使用MLC Chat、Google AI Edge Gallery或Termux中的Ollama；请逐个应用确认是否支持NPU，因为许多应用只在CPU/GPU上运行',
          '离线测试：如果Ollama缓存了模型，推理可以完全在无网络的情况下运行'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Galaxy S26隐私：哪些数据会离开你的设备？',
        content: [
          'Knox Vault是三星的硬件安全模块：一个与主CPU和Android系统隔离的独立处理器。支付方式、指纹、健康记录、密码等敏感数据存储在Knox Vault中，三星将其描述为受保护的存储，未经用户明确操作不会暴露给应用；没有任何安全系统是绝对的。',
          'Personal Data Engine（PDE）在本地学习：本地设备上的机器学习模型会基于你的使用模式、日历、消息、照片和联系人进行训练。三星表示PDE在设备上运行，但没有公布其架构。你可以通过Galaxy AI设置中的"仅在设备上处理数据"开关来控制这一边界。',
          '云端功能需要网络连接：Creative Studio需要登录三星账户，Circle to Search需要联网。每项功能都有各自的隐私政策，请在使用前阅读。',
          '跨设备隐私：Knox Matrix使用端到端加密在你的Galaxy设备之间同步安全设置和加密数据。三星将Knox Enhanced Encrypted Protection（KEEP）描述为对每个应用的数据进行加密。',
          '核实而不是假设：三星没有公布每项功能在本地运行的明细。因此请在你的手机上检查"仅在设备上处理数据"设置以及各项功能的隐私声明。'
        ],
        items: [
          'Knox Vault = 用于机密信息的硬件隔离区；独立处理器、独立系统，不同步到云端',
          'PDE = 三星称其在设备上运行的学习引擎',
          '"仅在设备上处理数据"开关 = 阻止支持功能的云端回退',
          'Creative Studio = 依赖云端；禁用它可阻止图像生成数据的传输',
          'Gemini智能体 = 由Google驱动；使用你的Google账户执行多步骤任务',
          'Knox Matrix = 跨设备安全同步；加密模型请参阅三星的Knox文档'
        ]
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Galaxy AI是完全本地的还是使用云端？', a: '混合模式。三星表示Personal Data Engine在设备上运行，并为通话过滤、Now Nudge和Now Brief等上下文功能提供支持，但没有公布每项功能的处理位置。图像生成（Creative Studio）需要网络连接和三星账户，Circle to Search需要联网。在设置中启用"仅在设备上处理数据"，可将支持的功能限制为本地处理。' },
{ q: 'Galaxy S26上的Personal Data Engine是什么？', a: '三星将Personal Data Engine（PDE）描述为设备端组件，用于实现情境化、个性化的Galaxy AI体验。根据三星的发布资料，PDE在设备上运行，但三星既没有公布其架构或底层模型，也没有列出依赖它的功能清单。' },
{ q: '在Galaxy S26上使用AI安全吗？', a: '处理留在手机上时更安全，但并非处处如此。Creative Studio需要网络连接和三星账户登录，Circle to Search需要联网；这两者会让数据离开设备。"仅在设备上处理数据"设置将Galaxy AI限制为本地处理；针对早期One UI版本的指南称这是需要你自己开启的设置，并称开启后云端照片编辑将无法使用。菜单位置因固件而异，请在你的手机上确认，并阅读三星的隐私声明。' },
{ q: '基础版Galaxy S26够用于设备端AI，还是需要Ultra？', a: '对于Galaxy AI功能，基础版S26就够了：三星为三款机型提供同一套Galaxy AI功能。运行自己的模型时，关键是内存：S26和S26+为12 GB，Ultra为12 GB或16 GB。12 GB的手机可运行Q4量化的3B–8B模型；16 GB的Ultra只有在需要更大模型时才值得。独立AI测试显示Exynos 2600与Snapdragon 8 Elite Gen 5大致持平。' },
          { q: 'Exynos 2600和Snapdragon 8 Elite Gen 5有什么区别？', a: '三星称Exynos 2600（2nm，三星代工）的AI性能比Exynos 2500提升+113%。用于S26 Ultra的Snapdragon 8 Elite Gen 5 for Galaxy，据三星称NPU比S25 Ultra提升+39%。在MLPerf Mobile结果中，Exynos赢得分类、检测和语言测试，Snapdragon赢得分割、超分辨率和Stable Diffusion测试；因此没有哪款是本地AI的明确赢家。' },
          { q: '我能在Galaxy S26上运行大语言模型吗？', a: '可以，但有限制。LPDDR5X带宽（85.6 GB/s）限制了解码吞吐量。经Q4量化的7B模型理论最大速度约为24 tokens/秒（实际约8-15 tokens/秒）。使用MLC Chat、Google AI Edge Gallery或Termux中的Ollama。更大的模型（13B、70B）由于内存和带宽限制并不实用。' },
          { q: 'Galaxy AI能离线使用吗？', a: '部分可以。你自己运行的本地LLM（例如通过Termux中的Ollama）可在下载模型后完全离线工作。Creative Studio、Gemini智能体和Circle to Search需要联网；三星没有说明通话过滤、Now Nudge、Now Brief和欺诈检测是否离线可用。启用"仅在设备上处理数据"旨在限制支持的功能使用云端回退。' },
          { q: '什么是EdgeFusion，Galaxy S26上有吗？', a: 'EdgeFusion是Nota AI针对移动NPU优化的Stable Diffusion，可在Exynos 2600上不到1秒生成512×512图像。三星官方与Nota AI合作，但官方Galaxy Unpacked资料中从未提及"EdgeFusion"这个名称。实际发布的图像生成应用Creative Studio需要网络和三星账户，因此EdgeFusion在发布时的确切状态尚不清楚。' },
          { q: '三星通过Galaxy AI收集了哪些数据？', a: '三星表示Personal Data Engine在设备上运行。Creative Studio（需要网络和三星账户）和Circle to Search（需要联网）等云端功能会发送数据。当你启用云端功能——Creative Studio、Gemini智能体——数据会被发送至三星（用于Galaxy AI）或Google（用于Gemini）。禁用这些功能可防止数据传输。前往设置 > 隐私 > Galaxy AI查看概览。' },
          { q: 'Knox Vault能保护我的数据不被三星获取吗？', a: '可以。Knox Vault是与主系统隔离的独立硬件处理器。存储在Knox Vault中的敏感数据（生物识别、支付信息、健康信息）在没有明确解锁的情况下，无法被Android应用或三星软件访问。三星将Knox Vault描述为将敏感数据隔离在自有安全硬件中的物理层；没有任何安全系统是绝对的。' },
          { q: '我能完全禁用Galaxy AI的云端功能吗？', a: '可以。在设置 > Galaxy AI中禁用单个功能。你可以独立开关Creative Studio、Gemini智能体和Circle to Search。启用"仅在设备上处理数据"可阻止支持功能的云端回退。通话过滤和Now Nudge等功能预计会继续工作，但请在你的手机上确认。' },
          { q: '在运行本地AI方面，Galaxy S26比iPhone更好吗？', a: '如果是运行你自己的量化LLM，答案是肯定的。Android支持更多开源模型工具（MLC Chat、Google AI Edge Gallery、Termux中的Ollama）。但如果你更信任苹果的基础设施而非三星，苹果的本地优先理念和可加密审计的PCC在隐私方面更具优势。' },
          { q: 'Galaxy AI功能多久更新一次？', a: 'Galaxy AI功能通过One UI更新推出（通常为月度安全补丁+季度功能更新）。三星为Galaxy S26承诺七年安全更新；操作系统更新的承诺请查看三星的支持页面。' }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[移动本地LLM 2026：iPhone 16 Pro、iPad M4与Snapdragon X对比](/zh/local-llms/mobile-local-llms) -- 移动设备上的本地LLM',
          '[设备上的AI和内存：为什么HBM内存驱动本地AI速度 (2026)](/zh/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026) -- HBM内存与本地AI速度',
          '[Galaxy对iPhone本地AI: Samsung Galaxy AI对Apple Intelligence(2026)](/zh/local-llms/galaxy-vs-iphone-on-device-ai-2026) -- Galaxy AI vs Apple Intelligence对比',
          '[Apple M5本地AI](/zh/local-llms/apple-silicon-m5-local-llm) -- Apple M5芯片与本地AI',
          '[初学者最佳本地LLM模型](/zh/local-llms/best-beginner-local-llm-models) -- 设备上运行哪些模型',
        ],
      }
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', 'headline': '在Galaxy S26上运行本地AI: 本地设备AI解析指南 (2026)', 'description': 'Galaxy S26本地设备AI解析: 三星Personal Data Engine的作用、哪些Galaxy AI功能需要云,以及如何在Exynos 2600或骁龙上运行本地LLM。', 'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png', 'datePublished': '2026-06-15', 'dateModified': '2026-10-19', 'author': { '@type': 'Organization', 'name': 'PromptQuorum' }, 'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, 'inLanguage': 'zh', 'url': 'https://www.promptquorum.com/zh/local-llms/galaxy-s26-local-ai-on-device-2026', 'articleBody': 'Galaxy S26于2026年2月25日推出,将三星的混合本地和云AI平台——Galaxy AI——带到您的口袋里。' },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'zh', 'mainEntity': [
      { '@type': 'Question', 'name': 'Galaxy S26上的Personal Data Engine是什么？', 'acceptedAnswer': { '@type': 'Answer', 'text': '三星将Personal Data Engine（PDE）描述为设备端组件，用于实现情境化、个性化的Galaxy AI体验。根据三星的发布资料，PDE在设备上运行，但三星既没有公布其架构或底层模型，也没有列出依赖它的功能清单。' } },
{ '@type': 'Question', 'name': 'Galaxy AI是完全本地的还是使用云端？', 'acceptedAnswer': { '@type': 'Answer', 'text': '混合模式。三星表示Personal Data Engine在设备上运行，但没有公布每项功能的处理位置。图像生成（Creative Studio）需要网络连接和三星账户，Circle to Search需要联网。' } },
      { '@type': 'Question', 'name': 'Exynos 2600和Snapdragon 8 Elite Gen 5有什么区别？', 'acceptedAnswer': { '@type': 'Answer', 'text': '三星称Exynos 2600（2nm，三星代工）的AI性能比Exynos 2500提升+113%。用于S26 Ultra的Snapdragon 8 Elite Gen 5 for Galaxy，据三星称NPU比S25 Ultra提升+39%。在MLPerf Mobile结果中两款芯片互有胜负，因此没有哪款是本地AI的明确赢家。' } }
    ] }
  },
  pt: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-11-19',
    last_full_refresh: '2026-10-19',
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-pt.webp',
    title: 'Executar IA Local no Galaxy S26: IA no Dispositivo Explicada (2026)',
    seoTitle: 'Galaxy S26 IA no Dispositivo: Como Funciona & O Que Roda Localmente',
    intro: 'O Galaxy S26, lançado em 25 de fevereiro de 2026, traz a plataforma híbrida de IA on-device e em nuvem da Samsung — Galaxy AI — ao seu bolso. Diferentemente da abordagem on-device-first da Apple, Samsung equilibra o processamento local com recursos em nuvem, deixando você escolher aonde seus dados vão. Este guia explica o que o Galaxy AI realmente faz no dispositivo, quais recursos exigem nuvem, e como executar seus próprios LLMs open-weight no hardware S26.',
    metaDescription: 'IA no dispositivo do Galaxy S26: o que faz o Personal Data Engine da Samsung, quais recursos do Galaxy AI precisam de nuvem e como rodar LLMs locais no Exynos 2600 ou Snapdragon.',
    publishDate: '2026-06-15',
    dateModified: '2026-10-19',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários Android interessados em IA no dispositivo, compradores do Galaxy S26, desenvolvedores explorando inferência de LLM móvel',
    primaryTerm: 'Galaxy S26 IA no dispositivo',
    targetKeywords: ['galaxy s26 ia no dispositivo', 'recursos galaxy ai', 'exynos 2600 ia', 'snapdragon 8 elite gen 5 npu', 'ia no dispositivo android', 'executar llm no galaxy s26'],
    leadAnswerBlock: '**O Galaxy S26 executa Galaxy AI — uma plataforma híbrida que mistura processamento on-device (Bloqueio de Chamadas, Now Nudge, Detecção de Fraude) com recursos em nuvem (geração de imagens Creative Studio, integração Gemini). Você controla o toggle de privacidade: "Processar dados apenas no dispositivo" restringe tudo ao processamento local. Os chips variam por modelo e região: o S26 Ultra usa o Snapdragon 8 Elite Gen 5 for Galaxy em todos os lugares, enquanto o S26 e o S26+ usam o Exynos 2600 na Europa, na Coreia e na maioria dos outros mercados e o Snapdragon nos EUA, na China e no Japão; testes independentes de IA mostram os dois praticamente empatados, então escolha pelo modelo e pelo preço, não pelo chip. Para executar seus próprios LLMs, modelos 7B quantizados em Q4 (4-bit) atingem ~24 tokens/seg em LPDDR5X 85,6 GB/s.**',
    toc: [
      { label: 'Principais Pontos', anchor: '#key-takeaways' },
      { label: 'O Que É o Galaxy AI no Galaxy S26?', anchor: '#what-is-galaxy-ai' },
      { label: 'No Dispositivo vs. Nuvem: Quais Recursos Ficam Locais?', anchor: '#on-device-vs-cloud' },
      { label: 'Geração de Imagens no Dispositivo no S26', anchor: '#edgefusion' },
      { label: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 NPU', anchor: '#npu-comparison' },
      { label: 'Executando Seu Próprio LLM no Galaxy S26', anchor: '#run-own-llm' },
      { label: 'Privacidade no Galaxy S26: O Que Sai do Seu Dispositivo?', anchor: '#privacy' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related-reading' }
    ],
    quickAnswerTop: {
      pt: {
        question: 'Quais recursos do Galaxy AI do S26 são executados localmente no dispositivo sem enviar dados para a nuvem?',
        answer: 'Bloqueio de Chamadas (atende chamadas localmente), Now Nudge (sugestões contextuais), Now Brief (resumos pessoais) e Detecção de Fraude processam dados localmente usando o Personal Data Engine (PDE). Você pode ativar "Processar dados apenas no dispositivo" nas configurações do Galaxy AI para bloquear fallback na nuvem para recursos compatíveis. A geração de imagens (Creative Studio) requer conexão de rede e login em uma conta Samsung.',
        bullets: [
          'O Bloqueio de Chamadas identifica chamadores desconhecidos e resume a intenção (a Samsung não informa onde roda)',
          'O Now Nudge sugere fotos da Galeria para compartilhar e exige login em uma conta Samsung',
          'A Detecção de Fraude sinaliza chamadas suspeitas; a Samsung não publica onde ela é processada',
          'Ative o botão "Processar dados apenas no dispositivo" para forçar processamento local',
          'A geração de imagens do Creative Studio é apenas na nuvem (requer conta Samsung + rede)',
          'O Exynos 2600 é 2,4 vezes mais rápido em Stable Diffusion do que o Exynos 2500'
        ],
        updatedDate: '2026-10-19'
      }
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O Galaxy AI é uma plataforma híbrida: a Samsung afirma que o Personal Data Engine (PDE) roda no dispositivo e alimenta recursos de contexto como Now Nudge, Now Brief e Bloqueio de Chamadas, mas não publica um mapa de processamento por recurso. O Creative Studio exige conexão de rede e conta Samsung; o Circle to Search exige internet.',
          'O chip depende do modelo e da região: o S26 Ultra sempre usa o Snapdragon 8 Elite Gen 5 for Galaxy; o S26 e o S26+ usam o Exynos 2600 fora dos EUA, da China e do Japão. A Samsung afirma +113% de NPU sobre o Exynos 2500 e +39% de NPU para o Ultra sobre o S25 Ultra; os resultados do MLPerf Mobile se dividem entre os dois chips, então nenhum é vencedor claro para LLMs locais.',
          'Toggle de privacidade: ative "Processar dados apenas no dispositivo" em Configurações > Galaxy AI para evitar o fallback para a nuvem. O Knox Vault (enclave de segurança em hardware) protege dados sensíveis; o Knox Matrix sincroniza configurações entre dispositivos.',
          'Geração de imagens no dispositivo: a Samsung fez parceria com a Nota AI no EdgeFusion, que gera imagens de 512×512 em menos de um segundo no NPU do Exynos 2600 usando otimização de Stable Diffusion baseada em LCM. O Creative Studio (o app voltado ao usuário) exige rede + conta Samsung.',
          'Executando seus próprios LLMs: a memória LPDDR5X (85,6 GB/s) limita o throughput de decodificação. Um modelo 7B quantizado em Q4 (4-bit, ~3,5 GB) atinge um máximo teórico de ~24 tokens/seg. Use o MLC Chat, o Google AI Edge Gallery ou o Ollama no Termux para testar.',
          'RAM: o S26 e o S26+ vêm com 12 GB; o S26 Ultra com 12 GB ou 16 GB. O tamanho da memória define quais modelos cabem e a largura de banda define a velocidade de decodificação, então um S26 base de 12 GB basta para modelos de 3B a 8B em Q4 e o Ultra de 16 GB dá mais folga para modelos maiores.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'O Que É o Galaxy AI no Galaxy S26?',
        content: [
          'O Galaxy AI é a plataforma de inteligência no dispositivo da Samsung, que a Samsung descreve como Galaxy AI no dispositivo, alimentado pelo seu Personal Data Engine, com Gemini e Perplexity integrados como agentes; a Samsung não publica qual modelo de linguagem roda em cada recurso no dispositivo. Lançado com o Galaxy S24, refinado no S25 e expandido no S26 (lançamento em 25 de fevereiro de 2026), ele equilibra o processamento local para privacidade com recursos em nuvem para mais poder.',
          'O Personal Data Engine (PDE) é o núcleo: ele aprende a partir dos seus dados no dispositivo — mensagens, calendário, fotos, histórico de localização — sem enviar nada para os servidores da Samsung, a menos que você opte explicitamente por recursos em nuvem. O Knox Vault, um enclave de segurança em hardware, isola dados sensíveis (credenciais, registros de saúde, informações de pagamento) até mesmo do próprio software da Samsung.',
          'A Samsung confirma apenas duas coisas por recurso: o Creative Studio exige conexão de rede e conta Samsung, e o Circle to Search exige internet. Para Bloqueio de Chamadas, Now Nudge, Now Brief e Detecção de Fraude, a Samsung não informa o local de processamento; a tabela abaixo é, portanto, uma classificação de trabalho, não uma garantia da Samsung.',
          'O controle do usuário é central: um único toggle nas configurações do Galaxy AI — "Processar dados apenas no dispositivo" — bloqueia todo fallback para a nuvem em recursos compatíveis. Isso não é uma ideia de privacidade tardia, e sim uma configuração que fica à sua disposição.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Galaxy AI executa recursos no dispositivo via Personal Data Engine (PDE) e recursos em nuvem sob demanda, com um único toggle para forçar o processamento apenas no dispositivo.' },
          { type: 'plain-terms', text: 'Knox Vault = trava de hardware para segredos; PDE = aprende com seu telefone sem enviar dados; toggle = sua escolha se os recursos em nuvem estão ativados.' }
        ]
      },
      'on-device-vs-cloud': {
        id: 'on-device-vs-cloud',
        title: 'No Dispositivo vs. Nuvem: Quais Recursos Ficam Locais?',
        columns: ['Recurso', 'Processamento', 'Envia Dados do Usuário?', 'Exige Rede?'],
        rows: [
          { 'Recurso': 'Bloqueio de Chamadas', 'Processamento': 'No dispositivo (NPU)', 'Envia Dados do Usuário?': 'Não — áudio da chamada transcrito localmente', 'Exige Rede?': 'Não' },
          { 'Recurso': 'Now Nudge', 'Processamento': 'No dispositivo (PDE)', 'Envia Dados do Usuário?': 'Não — lê tela + calendário localmente', 'Exige Rede?': 'Não' },
          { 'Recurso': 'Now Brief', 'Processamento': 'No dispositivo (PDE)', 'Envia Dados do Usuário?': 'Não — resume reservas + eventos locais', 'Exige Rede?': 'Não' },
          { 'Recurso': 'Detecção de Fraude', 'Processamento': 'No dispositivo (NPU)', 'Envia Dados do Usuário?': 'Não — áudio da chamada e intenção sinalizados localmente', 'Exige Rede?': 'Não' },
          { 'Recurso': 'Creative Studio (geração de imagens)', 'Processamento': 'Nuvem (servidores Samsung)', 'Envia Dados do Usuário?': 'Sim — prompt de texto + imagens de referência', 'Exige Rede?': 'Sim — exige conta + internet' },
          { 'Recurso': 'Agentes Gemini (tarefas de múltiplas etapas)', 'Processamento': 'Nuvem (Google Gemini)', 'Envia Dados do Usuário?': 'Sim — intenção da tarefa para servidores do Google', 'Exige Rede?': 'Sim' },
          { 'Recurso': 'Circle to Search', 'Processamento': 'Nuvem (Google)', 'Envia Dados do Usuário?': 'Sim — área da captura de tela para o Google', 'Exige Rede?': 'Sim' },
          { 'Recurso': 'Photo Assist (edições complexas)', 'Processamento': 'Híbrido (segmentação local, geração em nuvem)', 'Envia Dados do Usuário?': 'Parcial — imagem enviada para modelos generativos', 'Exige Rede?': 'Sim, para remoção de objetos / troca de fundo' }
        ]
      },
      'edgefusion': {
        id: 'edgefusion',
        title: 'Geração de Imagens no Dispositivo no S26',
        content: [
          'A Samsung fez parceria com a Nota AI (Coreia do Sul) para otimizar o Stable Diffusion para inferência em NPU móvel. O resultado: geração de texto para imagem em menos de um segundo, produzindo imagens fotorrealistas de 512×512 pixels inteiramente no dispositivo, sem necessidade de rede.',
          'A técnica é chamada de EdgeFusion (da pesquisa da Nota AI): ela usa um agendador Latent Consistency Model (LCM) com remoção de ruído em 2 etapas em vez das 50 etapas padrão, reduzindo a computação em ~96%. O tiling em nível de modelo reduz a latência de atenção cruzada em ~73%. A quantização de precisão mista (W8A16 na U-Net) mantém a qualidade intacta enquanto reduz o uso de VRAM pela metade.',
          'Desempenho: validado no NPU do Exynos 2600, onde gera imagens de 512×512 em menos de 1 segundo. O Exynos 2600 é 2,4x mais rápido em Stable Diffusion do que o Exynos 2500, então isso é realista. As variantes com Snapdragon 8 Elite Gen 5 nos EUA/China/Japão provavelmente alcançarão tempos semelhantes ou ligeiramente maiores devido ao desempenho inferior do NPU.',
          'Checagem de realidade: o app que a Samsung realmente distribui, o Creative Studio, exige rede + login com conta Samsung. Não está claro se o EdgeFusion foi lançado como recurso voltado ao usuário no lançamento ou se ele viabiliza uma atualização futura. A Samsung nunca mencionou "EdgeFusion" pelo nome nos materiais oficiais do Unpacked; o recurso vem da parceria de pesquisa com a Nota AI. Use essa informação para gerenciar expectativas: a geração de imagens no dispositivo está chegando, mas pode não ser lançada completa no primeiro dia.'
        ],
        items: [
          'Agendador LCM: remoção de ruído em 2 etapas substitui a difusão padrão de 50 etapas, 96% menos etapas de computação',
          'Tiling em nível de modelo: reduz o acesso à memória de atenção cruzada, ~73% de melhora na latência',
          'Quantização W8A16: pesos de 8 bits, ativações de 16 bits, sem perda perceptível de qualidade',
          'Resolução alvo: 512×512 pixels, saída fotorrealista',
          'Otimizado para NPU: os núcleos tensoriais do Exynos 2600 processam a maior parte da computação; sobrecarga mínima de CPU',
          'Capaz de funcionar offline: dependência de rede zero se o EdgeFusion estiver ativo'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O EdgeFusion gera imagens de 512×512 em menos de 1 segundo no dispositivo, reduzindo o Stable Diffusion de 50 etapas de remoção de ruído para apenas 2, usando pesos quantizados e tiling em nível de modelo.' },
          { type: 'plain-terms', text: 'Menos etapas de remoção de ruído = menos computação = inferência mais rápida. A quantização reduz o modelo. O tiling divide as camadas de atenção para caber na VRAM do celular. Juntos: imagens instantâneas offline.' }
        ]
      },
      'npu-comparison': {
        id: 'npu-comparison',
        title: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 NPU',
        image: '/images/galaxy-s26-npu-comparison-en.svg',
        imageCaption: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 no Galaxy S26: 2nm GAA vs 3nm FinFET, +113% vs +39% de NPU geração a geração segundo a Samsung (bases diferentes), e banda de memória LPDDR5X de 85,6 GB/s vs 84,8 GB/s.',
        columns: ['Métrica', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', 'Vencedor para IA Local?'],
        rows: [
          { 'Métrica': 'Node / Fábrica', 'Exynos 2600': '2nm GAA (Samsung SF2)', 'Snapdragon 8 Elite Gen 5': '3nm FinFET (TSMC)', 'Vencedor para IA Local?': 'Não comprovado (nó diferente)' },
          { 'Métrica': 'Desempenho de IA geração a geração', 'Exynos 2600': '+113% vs Exynos 2500', 'Snapdragon 8 Elite Gen 5': '+39% de NPU vs S25 Ultra (Ultra)', 'Vencedor para IA Local?': 'Não comparável (bases diferentes)' },
          { 'Métrica': 'Velocidade do Stable Diffusion', 'Exynos 2600': '2,4x mais rápido que o Exynos 2500', 'Snapdragon 8 Elite Gen 5': 'Vence o teste Stable Diffusion do MLPerf', 'Vencedor para IA Local?': 'Snapdragon (MLPerf Mobile)' },
          { 'Métrica': 'Regiões/variantes disponíveis', 'Exynos 2600': 'S26 / S26+ (fora de EUA, China, Japão)', 'Snapdragon 8 Elite Gen 5': 'S26 / S26+ (EUA, China, Japão); S26 Ultra (todos)', 'Vencedor para IA Local?': 'Depende da sua região' },
          { 'Métrica': 'Banda de memória', 'Exynos 2600': 'LPDDR5X 85,6 GB/s (típico)', 'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84,8 GB/s (típico)', 'Vencedor para IA Local?': 'Empate (menos de 1%)' },
          { 'Métrica': 'Veredito', 'Exynos 2600': 'Vence classificação, detecção, linguagem', 'Snapdragon 8 Elite Gen 5': 'Vence segmentação, super-resolução, Stable Diffusion', 'Vencedor para IA Local?': 'Praticamente empatados; escolha por modelo e preço' }
        ]
      },
      'run-own-llm': {
        id: 'run-own-llm',
        title: 'Executando Seu Próprio LLM no Galaxy S26',
        image: '/images/galaxy-s26-7b-model-throughput-en.svg',
        imageCaption: 'Velocidade de decodificação de um modelo 7B no Galaxy S26 por quantização em LPDDR5X 85,6 GB/s: FP16 (~14 GB) limita-se a 6 tokens/seg, Q4 4-bit (~3,5 GB) atinge um teto teórico de 24 tokens/seg, com 8-15 tokens/seg realistas na prática.',
        content: [
          'A banda de memória do Galaxy S26 é o fator limitante. LPDDR5X a 85,6 GB/s significa que a geração de tokens (a "fase de decodificação" da inferência de LLM) tem um teto de aproximadamente banda_de_memória / tamanho_do_modelo_em_bytes tokens por segundo.',
          'Matemática: um modelo de 7B parâmetros em FP16 (floats de 16 bits) pesa ~14 GB. A 85,6 GB/s ÷ 14 GB ≈ 6 tokens/seg como máximo teórico. Mas a quantização muda isso drasticamente.',
          'Quantizado em Q4 (4-bit, armazenando 2 parâmetros por byte), o mesmo modelo 7B reduz para ~3,5 GB. O throughput escala: 85,6 GB/s ÷ 3,5 GB ≈ 24 tokens/seg como máximo teórico. No mundo real é menor devido à sobrecarga computacional, mas as metas realistas são de 8-15 tokens/seg no Galaxy S26 para um modelo 7B quantizado.',
          'Melhores ferramentas: o MLC Chat (multiplataforma, modelos da comunidade), o Google AI Edge Gallery e o Ollama rodando dentro do Termux. Todos suportam modelos quantizados. Comece com um modelo de 3B a 8B (Qwen3 4B, Gemma 3 4B, Llama 3.2 3B, Phi-4-mini) em Q4 ou Q5; um modelo de 7B a 8B cabe em 12 GB de RAM, mas deixa menos espaço para o próprio Android.'
        ],
        items: [
          'Use quantização Q4 (4-bit) para modelos 7B; Q3 (3-bit) comporta modelos maiores, mas perde qualidade',
          'Evite modelos de precisão total FP16; eles são grandes demais para um throughput prático',
          'Melhores modelos open-weight para celular: Qwen3 4B, Gemma 3 4B, Llama 3.2 3B, Phi-4-mini',
          'Velocidade esperada: 8-15 tokens/seg para 7B Q4; 3-5 tokens/seg para 7B não quantizado',
          'Use o MLC Chat, o Google AI Edge Gallery ou o Ollama no Termux; verifique em cada app o suporte a NPU, pois muitos rodam apenas em CPU/GPU',
          'Teste offline: se o Ollama fizer cache do modelo, a inferência funciona totalmente sem internet'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Privacidade no Galaxy S26: O Que Sai do Seu Dispositivo?',
        content: [
          'O Knox Vault é o módulo de segurança em hardware da Samsung: um processador separado, isolado da CPU principal e do sistema operacional Android. Dados sensíveis — métodos de pagamento, impressões digitais, registros de saúde, senhas — ficam no Knox Vault e nunca são expostos a apps ou aos servidores da Samsung sem ação explícita do usuário.',
          'O Personal Data Engine (PDE) aprende localmente: modelos de machine learning no dispositivo treinam com seus padrões de uso, calendário, mensagens, fotos e contatos. A Samsung afirma que o PDE roda no dispositivo. Você controla esse limite com o toggle "Processar dados apenas no dispositivo" nas configurações do Galaxy AI.',
          'Recursos em nuvem exigem conexão de rede: o Creative Studio exige login em uma conta Samsung e o Circle to Search exige internet. Cada recurso tem sua própria política de privacidade; leia-as antes de usar.',
          'Privacidade entre dispositivos: o Knox Matrix sincroniza configurações de segurança e dados criptografados entre seus dispositivos Galaxy usando criptografia de ponta a ponta. A Samsung descreve o Knox Enhanced Encrypted Protection (KEEP) como a criptografia dos dados de cada app.',
          'Verifique em vez de presumir: a Samsung não publica um mapa por recurso do que roda localmente, então confira a configuração "Processar dados apenas no dispositivo" e o aviso de privacidade de cada recurso no seu celular.'
        ],
        items: [
          'Knox Vault = enclave isolado por hardware para segredos; processador separado, SO separado, nunca sincronizado com a nuvem',
          'PDE = mecanismo de aprendizado local; treina com seus dados sem fazer upload',
          'Toggle "Processar dados apenas no dispositivo" = bloqueia todo fallback para a nuvem em recursos compatíveis',
          'Creative Studio = depende da nuvem; desativá-lo impede a transmissão de dados de geração de imagens',
          'Agentes Gemini = movidos pelo Google; usam sua conta Google para tarefas de múltiplas etapas',
          'Knox Matrix = sincronização de segurança entre dispositivos; veja a documentação Knox da Samsung para o modelo de criptografia'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          { q: 'O Galaxy AI é totalmente no dispositivo ou usa a nuvem?', a: 'Híbrido. Bloqueio de Chamadas, Now Nudge, Now Brief e Detecção de Fraude rodam inteiramente no dispositivo usando o Personal Data Engine. A geração de imagens (Creative Studio), agentes Gemini e Circle to Search exigem servidores em nuvem. Ative "Processar dados apenas no dispositivo" nas configurações para forçar o processamento exclusivamente local em recursos compatíveis.' },
          { q: 'O que é o Personal Data Engine no Galaxy S26?', a: 'A Samsung descreve o Personal Data Engine (PDE) como o componente no dispositivo que viabiliza experiências do Galaxy AI contextuais e personalizadas. O material de lançamento da Samsung afirma que o PDE roda no dispositivo, mas não publica sua arquitetura, o modelo por trás dele nem a lista de recursos que dependem dele.' },
{ q: 'É seguro usar IA no Galaxy S26?', a: 'Mais seguro quando o processamento fica no celular, mas não de forma uniforme. O Creative Studio exige conexão de rede e login em uma conta Samsung, e o Circle to Search exige internet, então esses recursos enviam dados para fora do aparelho. A configuração "Processar dados apenas no dispositivo" limita o Galaxy AI ao processamento local; guias de versões anteriores do One UI a descrevem como uma configuração que você mesmo ativa e relatam que as edições de foto baseadas em nuvem deixam de funcionar. O local do menu varia conforme o firmware, então confirme no seu celular e leia o aviso de privacidade da Samsung.' },
{ q: 'O Galaxy S26 base basta para IA no dispositivo ou preciso do Ultra?', a: 'Para os recursos do Galaxy AI, o S26 base basta: a Samsung oferece o mesmo conjunto do Galaxy AI nos três modelos. Para rodar seus próprios modelos, a RAM é o que mais importa: o S26 e o S26+ têm 12 GB, o Ultra 12 GB ou 16 GB. Um celular de 12 GB lida com modelos de 3B a 8B em Q4; escolha o Ultra de 16 GB apenas para modelos maiores. Testes independentes de IA mostram o Exynos 2600 e o Snapdragon 8 Elite Gen 5 praticamente empatados.' },
{ q: 'Qual é a diferença entre o Exynos 2600 e o Snapdragon 8 Elite Gen 5?', a: 'A Samsung afirma que o Exynos 2600 (2nm, Samsung Foundry) é +113% mais rápido em IA do que o Exynos 2500. O Snapdragon 8 Elite Gen 5 for Galaxy dá ao S26 Ultra +39% de NPU sobre o S25 Ultra (número da Samsung). Nos resultados do MLPerf Mobile, o Exynos vence os testes de classificação, detecção e linguagem, e o Snapdragon vence segmentação, super-resolução e Stable Diffusion, então nenhum é vencedor claro para IA local.' },
          { q: 'Posso rodar um modelo de linguagem grande no Galaxy S26?', a: 'Sim, mas com limites. A banda LPDDR5X (85,6 GB/s) limita o throughput de decodificação. Um modelo 7B quantizado em Q4 atinge ~24 tokens/seg como máximo teórico (~8-15 realistas). Use o MLC Chat, o Google AI Edge Gallery ou o Ollama no Termux. Modelos maiores (13B, 70B) são impraticáveis devido às restrições de memória e banda.' },
          { q: 'O Galaxy AI funciona offline?', a: 'Parcialmente. Bloqueio de Chamadas, Now Nudge, Now Brief, Detecção de Fraude e LLMs no dispositivo (se rodando via Ollama) funcionam totalmente offline. Creative Studio, agentes Gemini e Circle to Search exigem internet. Ative "Processar dados apenas no dispositivo" para garantir que os recursos compatíveis não tentem fallback para a nuvem.' },
          { q: 'O que é o EdgeFusion e ele está disponível no Galaxy S26?', a: 'O EdgeFusion é o Stable Diffusion otimizado da Nota AI para NPUs móveis, gerando imagens de 512×512 em menos de 1 segundo no Exynos 2600. A Samsung fez parceria oficial com a Nota AI, mas "EdgeFusion" nunca foi mencionado pelo nome nos materiais oficiais do Galaxy Unpacked. O Creative Studio (o app de geração de imagens efetivamente distribuído) exige rede + conta Samsung, então o status exato do EdgeFusion no lançamento não é claro.' },
          { q: 'Quais dados a Samsung coleta via Galaxy AI?', a: 'A Samsung afirma que o Personal Data Engine roda no dispositivo. Recursos em nuvem como o Creative Studio (rede e conta Samsung necessárias) e o Circle to Search (internet necessária) enviam dados. Quando você ativa recursos em nuvem — Creative Studio, agentes Gemini — os dados são enviados para a Samsung (no caso do Galaxy AI) ou para o Google (no caso do Gemini). Desative esses recursos para impedir a transmissão. Confira Configurações > Privacidade > Galaxy AI para ver o que está ativado.' },
          { q: 'O Knox Vault protege meus dados até mesmo da Samsung?', a: 'Sim. O Knox Vault é um processador de hardware separado, isolado do sistema operacional principal. Dados sensíveis (biometria, informações de pagamento, saúde) armazenados no Knox Vault não podem ser acessados por apps Android ou pelo software da Samsung sem um desbloqueio explícito. A Samsung descreve o Knox Vault como uma camada física que isola dados sensíveis dentro de seu próprio hardware seguro; nenhum sistema de segurança é absoluto.' },
          { q: 'Posso desativar totalmente os recursos em nuvem do Galaxy AI?', a: 'Sim. Desative recursos individuais em Configurações > Galaxy AI. Você pode alternar Creative Studio, agentes Gemini e Circle to Search de forma independente. Ative "Processar dados apenas no dispositivo" para bloquear o fallback para a nuvem em recursos compatíveis. Os recursos no dispositivo (Bloqueio de Chamadas, Now Nudge) continuam funcionando.' },
          { q: 'O Galaxy S26 é melhor que o iPhone para rodar IA local?', a: 'Para rodar seus próprios LLMs quantizados, sim. O Android suporta mais ferramentas de modelos open-weight (MLC Chat, Google AI Edge Gallery, Ollama no Termux). Mas a filosofia on-device-first da Apple e o PCC criptograficamente auditável tornam-na mais forte em privacidade se você confia mais na infraestrutura da Apple do que na da Samsung.' },
          { q: 'Com que frequência os recursos do Galaxy AI serão atualizados?', a: 'Os recursos do Galaxy AI são lançados via atualizações do One UI (geralmente patches de segurança mensais + atualizações de recursos trimestrais). A Samsung afirma sete anos de atualizações de segurança para o Galaxy S26; consulte as páginas de suporte da Samsung para o compromisso de atualizações do SO.' }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura Relacionada',
        items: [
          '[LLMs Locais em Celulares 2026: iPhone 16 Pro, iPad M4 e Snapdragon X](/pt/local-llms/mobile-local-llms) -- LLMs locais em dispositivos móveis',
          '[IA no Dispositivo e Memória: Por que a Memória HBM Impulsiona a Velocidade de IA Local (2026)](/pt/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026) -- memória HBM e velocidade de IA local',
          '[Galaxy vs iPhone IA em Dispositivo: Samsung Galaxy AI vs Apple Intelligence (2026)](/pt/local-llms/galaxy-vs-iphone-on-device-ai-2026) -- comparação Galaxy AI vs Apple Intelligence',
          '[Apple M5 para IA local](/pt/local-llms/apple-silicon-m5-local-llm) -- chip Apple M5 para IA local',
          '[Melhores modelos LLM locais para iniciantes](/pt/local-llms/best-beginner-local-llm-models) -- quais modelos rodar no dispositivo',
        ],
      }
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', 'headline': 'Executar IA Local no Galaxy S26: IA no Dispositivo Explicada (2026)', 'description': 'IA no dispositivo do Galaxy S26: o que faz o Personal Data Engine da Samsung, quais recursos do Galaxy AI precisam de nuvem e como rodar LLMs locais no Exynos 2600 ou Snapdragon.', 'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png', 'datePublished': '2026-06-15', 'dateModified': '2026-10-19', 'author': { '@type': 'Organization', 'name': 'PromptQuorum' }, 'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, 'inLanguage': 'pt', 'url': 'https://www.promptquorum.com/pt/local-llms/galaxy-s26-local-ai-on-device-2026', 'articleBody': 'O Galaxy S26, lançado em 25 de fevereiro de 2026, traz a plataforma híbrida de IA on-device e em nuvem da Samsung — Galaxy AI — ao seu bolso.' },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'pt', 'mainEntity': [
      { '@type': 'Question', 'name': 'O que é o Personal Data Engine no Galaxy S26?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'A Samsung descreve o Personal Data Engine (PDE) como o componente no dispositivo que viabiliza experiências do Galaxy AI contextuais e personalizadas. O material de lançamento da Samsung afirma que o PDE roda no dispositivo, mas não publica sua arquitetura, o modelo por trás dele nem a lista de recursos que dependem dele.' } },
{ '@type': 'Question', 'name': 'O Galaxy AI é totalmente no dispositivo ou usa a nuvem?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Híbrido. Bloqueio de Chamadas, Now Nudge, Now Brief e Detecção de Fraude rodam inteiramente no dispositivo usando o Personal Data Engine. A geração de imagens (Creative Studio), agentes Gemini e Circle to Search exigem servidores em nuvem.' } },
      { '@type': 'Question', 'name': 'Qual é a diferença entre o Exynos 2600 e o Snapdragon 8 Elite Gen 5?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'A Samsung afirma que o Exynos 2600 (2nm, Samsung Foundry) é +113% mais rápido em IA do que o Exynos 2500. O Snapdragon 8 Elite Gen 5 for Galaxy dá ao S26 Ultra +39% de NPU sobre o S25 Ultra (número da Samsung). Nos resultados do MLPerf Mobile, o Exynos vence os testes de classificação, detecção e linguagem, e o Snapdragon vence segmentação, super-resolução e Stable Diffusion, então nenhum é vencedor claro para IA local.' } }
    ] }
  },
  ar: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-11-19',
    last_full_refresh: '2026-10-19',
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-ar.webp',
    title: 'تشغيل الذكاء الاصطناعي المحلي على ⁨Galaxy S26⁩: شرح الذكاء الاصطناعي على الجهاز (⁨2026⁩)',
    seoTitle: '⁨Galaxy S26⁩: الذكاء الاصطناعي على الجهاز محليًا',
    intro: 'يأتي Galaxy S26 الذي تم إطلاقه في 25 فبراير 2026 بمنصة Galaxy AI الهجينة للذكاء الاصطناعي - جزء محلي وجزء سحابي - إلى جيبك. بخلاف نهج Apple الذي يركز على المعالجة المحلية، تحقق Samsung التوازن بين المعالجة المحلية والميزات السحابية، مما يتيح لك اختيار مكان معالجة بيانات. يشرح هذا الدليل ما تفعله Galaxy AI فعليًا على الجهاز، والميزات التي تتطلب سحابة، وكيفية تشغيل نماذج LLM المفتوحة الوزن الخاصة بك على أجهزة S26.',
    metaDescription: 'ما الذي يفعله Samsung Personal Data Engine على Galaxy S26، وأي ميزات Galaxy AI تحتاج إلى السحابة، وكيف تشغّل نماذج LLM محلية على Exynos 2600 أو Snapdragon.',
    publishDate: '2026-06-15',
    dateModified: '2026-10-19',
    readTime: '10 دقائق قراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Android المهتمون بالذكاء الاصطناعي على الجهاز، مشترو Galaxy S26، المطورون الذين يستكشفون استدلال LLM المحمول',
    primaryTerm: 'Galaxy S26 الذكاء الاصطناعي على الجهاز',
    targetKeywords: ['galaxy s26 on device ai', 'galaxy ai features', 'exynos 2600 ai', 'snapdragon 8 elite gen 5 npu', 'on device ai android', 'run llm on galaxy s26'],
    leadAnswerBlock: '**يعمل Galaxy S26 على Galaxy AI — منصة هجينة تمزج بين المعالجة المحلية (تصفية المكالمات، Now Nudge، كشف الاحتيال) والميزات السحابية (توليد الصور Creative Studio، دمج Gemini). تتحكم في تبديل الخصوصية: "معالجة البيانات على الجهاز فقط" تقيد كل شيء للمعالجة المحلية. تختلف الشرائح حسب الطراز والمنطقة: يستخدم S26 Ultra شريحة Snapdragon 8 Elite Gen 5 for Galaxy في كل الأسواق، بينما يستخدم S26 وS26+ شريحة Exynos 2600 في أوروبا وكوريا ومعظم الأسواق الأخرى وSnapdragon في الولايات المتحدة والصين واليابان؛ وتُظهر اختبارات الذكاء الاصطناعي المستقلة أن الشريحتين متقاربتان تقريبًا، لذا اختر حسب الطراز والسعر لا حسب الشريحة. لتشغيل نماذج LLM الخاصة بك، تصل نماذج 7B المكممة عند Q4 (4-بت) إلى ~24 رمزًا/ثانية على LPDDR5X 85.6 GB/s.**',
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'ما هو Galaxy AI على Galaxy S26؟', anchor: '#what-is-galaxy-ai' },
      { label: 'على الجهاز مقابل السحابة: أي الميزات تبقى محلية؟', anchor: '#on-device-vs-cloud' },
      { label: 'توليد الصور على الجهاز في S26', anchor: '#edgefusion' },
      { label: 'مقارنة Exynos 2600 مقابل Snapdragon 8 Elite Gen 5 NPU', anchor: '#npu-comparison' },
      { label: 'تشغيل نموذج LLM الخاص بك على Galaxy S26', anchor: '#run-own-llm' },
      { label: 'خصوصية Galaxy S26: ما الذي يغادر جهازك؟', anchor: '#privacy' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' }
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما ميزات Galaxy AI على S26 التي تعمل على الجهاز دون إرسال البيانات إلى السحابة؟',
        answer: 'تصفية المكالمات (تجيب على المكالمات محليًا)، Now Nudge (اقتراحات السياق)، Now Brief (الملخصات الشخصية)، واكتشاف الاحتيال - كلها تعالج البيانات محليًا باستخدام محرك البيانات الشخصية (PDE). يمكنك تفعيل "معالجة البيانات على الجهاز فقط" في إعدادات Galaxy AI لحظر بدائل السحابة للميزات المدعومة. توليد الصور (Creative Studio) يتطلب اتصال شبكة وتسجيل دخول بحساب Samsung.',
        bullets: [
          'تصفية المكالمات تتعرّف على المتصلين المجهولين وتلخّص الغرض من المكالمة (لا تذكر Samsung أين تعمل)',
          'Now Nudge يقترح صورًا من المعرض لمشاركتها ويتطلب تسجيل الدخول بحساب Samsung',
          'كشف الاحتيال ينبّه إلى المكالمات المشبوهة؛ ولا تنشر Samsung موقع معالجته',
          'فعّل زر "معالجة البيانات على الجهاز فقط" لفرض المعالجة المحلية',
          'توليد صور Creative Studio محصور في السحابة (يتطلب حساب Samsung + شبكة)',
          'Exynos 2600 أسرع 2.4 مرة في Stable Diffusion من Exynos 2500'
        ],
        updatedDate: '2026-10-19'
      }
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Galaxy AI منصة هجينة: تذكر Samsung أن Personal Data Engine (PDE) يعمل على الجهاز ويدعم ميزات السياق مثل Now Nudge وNow Brief وتصفية المكالمات، لكنها لا تنشر خريطة معالجة لكل ميزة. يتطلب Creative Studio اتصال شبكة وحساب Samsung؛ ويتطلب Circle to Search الإنترنت.',
          'تعتمد الشريحة على الطراز والمنطقة: يستخدم S26 Ultra دائمًا Snapdragon 8 Elite Gen 5 for Galaxy؛ ويستخدم S26 وS26+ شريحة Exynos 2600 خارج الولايات المتحدة والصين واليابان. تزعم Samsung تحسّنًا بنسبة +113% في NPU مقارنة بـ Exynos 2500 و+39% في NPU لطراز Ultra مقارنة بـ S25 Ultra؛ وتنقسم نتائج MLPerf Mobile بين الشريحتين، لذا لا فائز واضحًا لنماذج LLM المحلية.',
          'تبديل الخصوصية: فعّل "معالجة البيانات على الجهاز فقط" في الإعدادات > Galaxy AI لمنع الرجوع إلى السحابة. يحمي Knox Vault (حاوية أمان بالأجهزة) البيانات الحساسة؛ ويزامن Knox Matrix الإعدادات عبر الأجهزة.',
          'توليد الصور على الجهاز: تشاركت Samsung مع Nota AI في EdgeFusion، الذي يولّد صورًا بدقة 512×512 في أقل من ثانية على NPU الخاص بـ Exynos 2600 باستخدام تحسين Stable Diffusion القائم على LCM. يتطلب Creative Studio (التطبيق الموجّه للمستخدم) شبكة وحساب Samsung.',
          'تشغيل نماذج LLM الخاصة بك: تحدّ ذاكرة LPDDR5X (85.6 GB/s) من إنتاجية فك الترميز. يصل نموذج 7B مكمَّم عند Q4 (4-بت، ~3.5 GB) إلى حد أقصى نظري يبلغ ~24 رمزًا/ثانية. استخدم MLC Chat أو Ollama for Android للاختبار.',
          'الذاكرة: يأتي S26 وS26+ بذاكرة 12 GB، وS26 Ultra بذاكرة 12 GB أو 16 GB. تحدد سعة الذاكرة النماذج التي تتسع، ويحدد عرض النطاق سرعة فك الترميز؛ لذا فإن S26 الأساسي بذاكرة 12 GB يكفي لنماذج 3B–8B بتكميم Q4، ويمنح Ultra بذاكرة 16 GB مجالًا أكبر للنماذج الأكبر.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'ما هو Galaxy AI على Galaxy S26؟',
        content: [
          'Galaxy AI هي منصة الذكاء على الجهاز من Samsung، وتصفها Samsung بأنها Galaxy AI على الجهاز مدعومة بـ Personal Data Engine، مع دمج Gemini وPerplexity كعملاء؛ ولا تنشر Samsung أي نموذج لغوي يعمل لكل ميزة على الجهاز. أُطلقت مع Galaxy S24، وتحسّنت في S25، وتوسّعت في S26 (إطلاق 25 فبراير 2026)، وتوازن بين المعالجة المحلية للخصوصية وميزات السحابة للقوة الإضافية.',
          'يمثّل Personal Data Engine (PDE) النواة: فهو يتعلّم من بياناتك على الجهاز - الرسائل، التقويم، الصور، سجل الموقع - وتذكر Samsung أنه يعمل على الجهاز. يعزل Knox Vault، وهو حاوية أمان بالأجهزة، البيانات الحساسة (بيانات الاعتماد، السجلات الصحية، معلومات الدفع) عن بقية النظام، بحسب وصف Samsung.',
          'تؤكد Samsung أمرين فقط لكل ميزة: يتطلب Creative Studio اتصال شبكة وحساب Samsung، ويتطلب Circle to Search الإنترنت. أما بالنسبة لتصفية المكالمات وNow Nudge وNow Brief وكشف الاحتيال، فلا تحدد Samsung موقع المعالجة؛ لذا فالجدول أدناه تصنيف عملي وليس ضمانًا من Samsung.',
          'يبقى تحكّم المستخدم محوريًا: مفتاح واحد في إعدادات Galaxy AI - "معالجة البيانات على الجهاز فقط" - يحدّ من الرجوع إلى السحابة للميزات المتوافقة. تحقق من هذا الإعداد على هاتفك، فقد يختلف موقعه وسلوكه بحسب إصدار البرنامج.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يشغّل Galaxy AI ميزات على الجهاز عبر Personal Data Engine (PDE) وميزات سحابية عند الطلب، مع مفتاح واحد لفرض المعالجة على الجهاز فقط.' },
          { type: 'plain-terms', text: 'Knox Vault = قفل بالأجهزة للأسرار؛ PDE = يتعلّم من هاتفك دون رفع البيانات؛ المفتاح = اختيارك بشأن تفعيل الميزات السحابية.' }
        ]
      },
      'on-device-vs-cloud': {
        id: 'on-device-vs-cloud',
        title: 'على الجهاز مقابل السحابة: أي الميزات تبقى محلية؟',
        columns: ['الميزة', 'المعالجة', 'هل تُرسَل بيانات المستخدم؟', 'هل تتطلب شبكة؟'],
        rows: [
          { 'الميزة': 'تصفية المكالمات', 'المعالجة': 'على الجهاز (NPU)', 'هل تُرسَل بيانات المستخدم؟': 'لا - يُنسخ صوت المكالمة محليًا', 'هل تتطلب شبكة؟': 'لا' },
          { 'الميزة': 'Now Nudge', 'المعالجة': 'على الجهاز (PDE)', 'هل تُرسَل بيانات المستخدم؟': 'لا - يقرأ الشاشة والتقويم محليًا', 'هل تتطلب شبكة؟': 'لا' },
          { 'الميزة': 'Now Brief', 'المعالجة': 'على الجهاز (PDE)', 'هل تُرسَل بيانات المستخدم؟': 'لا - يلخّص الحجوزات والأحداث المحلية', 'هل تتطلب شبكة؟': 'لا' },
          { 'الميزة': 'كشف الاحتيال', 'المعالجة': 'على الجهاز (NPU)', 'هل تُرسَل بيانات المستخدم؟': 'لا - يُوسَم صوت المكالمة والنية محليًا', 'هل تتطلب شبكة؟': 'لا' },
          { 'الميزة': 'Creative Studio (توليد الصور)', 'المعالجة': 'السحابة (خوادم Samsung)', 'هل تُرسَل بيانات المستخدم؟': 'نعم - نص الطلب + صور مرجعية', 'هل تتطلب شبكة؟': 'نعم - يتطلب حسابًا وإنترنت' },
          { 'الميزة': 'عملاء Gemini (مهام متعددة الخطوات)', 'المعالجة': 'السحابة (Google Gemini)', 'هل تُرسَل بيانات المستخدم؟': 'نعم - نية المهمة إلى خوادم Google', 'هل تتطلب شبكة؟': 'نعم' },
          { 'الميزة': 'Circle to Search', 'المعالجة': 'السحابة (Google)', 'هل تُرسَل بيانات المستخدم؟': 'نعم - منطقة لقطة الشاشة إلى Google', 'هل تتطلب شبكة؟': 'نعم' },
          { 'الميزة': 'Photo Assist (تعديلات معقدة)', 'المعالجة': 'هجينة (تجزئة محلية، توليد سحابي)', 'هل تُرسَل بيانات المستخدم؟': 'جزئيًا - تُرسَل الصورة للنماذج التوليدية', 'هل تتطلب شبكة؟': 'نعم لإزالة الكائنات / تغيير الخلفية' }
        ]
      },
      'edgefusion': {
        id: 'edgefusion',
        title: 'توليد الصور على الجهاز في S26',
        content: [
          'تشاركت Samsung مع Nota AI (كوريا الجنوبية) لتحسين Stable Diffusion لاستدلال NPU المحمول. النتيجة: توليد نص إلى صورة في أقل من ثانية، ينتج صورًا واقعية بدقة 512×512 بكسل بالكامل على الجهاز، دون الحاجة إلى شبكة.',
          'تُسمى هذه التقنية EdgeFusion (من أبحاث Nota AI): تستخدم جدولة Latent Consistency Model (LCM) بخطوتين لإزالة الضوضاء بدلًا من الخطوات الـ50 المعتادة، مما يقلل الحوسبة بنسبة ~96%. يقلّل التبليط (tiling) على مستوى النموذج زمن انتقال الانتباه المتقاطع بنسبة ~73%. يحافظ التكميم مختلط الدقة (W8A16 في U-Net) على الجودة سليمة مع تقليل استخدام VRAM إلى النصف.',
          'الأداء: تم التحقق منه على NPU الخاص بـ Exynos 2600، حيث يولّد صورًا بدقة 512×512 في أقل من ثانية واحدة. Exynos 2600 أسرع بمقدار 2.4 مرة في Stable Diffusion من Exynos 2500، لذا فهذا رقم واقعي. من المرجح أن تحقق طرازات Snapdragon 8 Elite Gen 5 في الولايات المتحدة/الصين/اليابان أوقاتًا مماثلة أو أطول قليلًا بسبب أداء NPU الأقل.',
          'واقع الأمر: يتطلب تطبيق Samsung الفعلي المطروح، Creative Studio، شبكة وتسجيل دخول بحساب Samsung. ليس من الواضح ما إذا كان EdgeFusion قد طُرح كميزة موجّهة للمستخدم عند الإطلاق أو أنه يشغّل تحديثًا مستقبليًا. لم تذكر Samsung اسم "EdgeFusion" أبدًا في مواد Galaxy Unpacked الرسمية؛ تنبع الميزة من شراكة البحث مع Nota AI. استخدم هذه المعلومة لإدارة التوقعات: توليد الصور على الجهاز قادم، لكن قد لا يُطرح كاملًا في اليوم الأول.'
        ],
        items: [
          'جدولة LCM: خطوتان لإزالة الضوضاء تحلّان محل الانتشار المعتاد ذي الـ50 خطوة، أي أقل بنسبة 96% من خطوات الحوسبة',
          'التبليط على مستوى النموذج: يقلّل الوصول إلى ذاكرة الانتباه المتقاطع، بتحسّن في زمن الانتقال بنسبة ~73%',
          'تكميم W8A16: أوزان 8-بت، تنشيطات 16-بت، دون فقدان محسوس في الجودة',
          'الدقة المستهدفة: 512×512 بكسل، مخرجات واقعية',
          'محسّن لـ NPU: تعالج نوى Exynos 2600 التنسورية معظم الحوسبة؛ عبء معالج مركزي ضئيل',
          'قادر على العمل دون اتصال: اعتماد صفري على الشبكة إذا كان EdgeFusion نشطًا'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يولّد EdgeFusion صورًا بدقة 512×512 في أقل من ثانية واحدة على الجهاز، عبر تقليل خطوات إزالة الضوضاء في Stable Diffusion من 50 إلى خطوتين فقط، باستخدام أوزان مكمَّمة وتبليط على مستوى النموذج.' },
          { type: 'plain-terms', text: 'خطوات إزالة ضوضاء أقل = حوسبة أقل = استدلال أسرع. التكميم يقلّص حجم النموذج. التبليط يقسّم طبقات الانتباه لتناسب VRAM الهاتف. مجتمعةً: صور فورية دون اتصال.' }
        ]
      },
      'npu-comparison': {
        id: 'npu-comparison',
        title: 'مقارنة Exynos 2600 مقابل Snapdragon 8 Elite Gen 5 NPU',
        image: '/images/galaxy-s26-npu-comparison-en.svg',
        imageCaption: 'Exynos 2600 مقابل Snapdragon 8 Elite Gen 5 على Galaxy S26: 2nm GAA مقابل 3nm FinFET، تحسّن NPU عبر الأجيال بحسب مزاعم Samsung +113% مقابل +39% (خطوط أساس مختلفة)، وعرض نطاق ذاكرة LPDDR5X يبلغ 85.6 GB/s مقابل 84.8 GB/s.',
        columns: ['المقياس', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', 'الفائز للذكاء الاصطناعي المحلي؟'],
        rows: [
          { 'المقياس': 'العقدة / المصنع', 'Exynos 2600': '2nm GAA (Samsung SF2)', 'Snapdragon 8 Elite Gen 5': '3nm FinFET (TSMC)', 'الفائز للذكاء الاصطناعي المحلي؟': 'غير مثبت (العقدتان مختلفتان)' },
          { 'المقياس': 'أداء الذكاء الاصطناعي عبر الأجيال', 'Exynos 2600': '+113% مقابل Exynos 2500', 'Snapdragon 8 Elite Gen 5': '+39% في NPU مقابل S25 Ultra (لـ Ultra)', 'الفائز للذكاء الاصطناعي المحلي؟': 'غير قابلة للمقارنة (خطوط أساس مختلفة)' },
          { 'المقياس': 'سرعة Stable Diffusion', 'Exynos 2600': 'أسرع 2.4 مرة من Exynos 2500', 'Snapdragon 8 Elite Gen 5': 'يفوز في اختبار MLPerf لـ Stable Diffusion', 'الفائز للذكاء الاصطناعي المحلي؟': 'Snapdragon (MLPerf Mobile)' },
          { 'المقياس': 'المناطق/الطرازات المتاحة', 'Exynos 2600': 'S26/S26+ (خارج أمريكا والصين واليابان)', 'Snapdragon 8 Elite Gen 5': 'S26/S26+ (أمريكا والصين واليابان)؛ S26 Ultra (الكل)', 'الفائز للذكاء الاصطناعي المحلي؟': 'يعتمد على منطقتك' },
          { 'المقياس': 'عرض نطاق الذاكرة', 'Exynos 2600': 'LPDDR5X 85.6 GB/s (نموذجي)', 'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84.8 GB/s (نموذجي)', 'الفائز للذكاء الاصطناعي المحلي؟': 'تعادل (أقل من 1%)' },
          { 'المقياس': 'الحكم النهائي', 'Exynos 2600': 'يفوز في التصنيف والكشف واللغة', 'Snapdragon 8 Elite Gen 5': 'يفوز في التجزئة والدقة الفائقة وStable Diffusion', 'الفائز للذكاء الاصطناعي المحلي؟': 'متقاربان؛ اختر حسب الطراز والسعر' }
        ]
      },
      'run-own-llm': {
        id: 'run-own-llm',
        title: 'تشغيل نموذج LLM الخاص بك على Galaxy S26',
        image: '/images/galaxy-s26-7b-model-throughput-en.svg',
        imageCaption: 'سرعة فك ترميز نموذج 7B على Galaxy S26 حسب التكميم على LPDDR5X 85.6 GB/s: يبلغ حد FP16 (~14 GB) 6 رموز/ثانية، ويصل Q4 4-بت (~3.5 GB) إلى سقف نظري قدره 24 رمزًا/ثانية، مع 8-15 رمزًا/ثانية واقعيًا في الممارسة العملية.',
        content: [
          'يمثّل عرض نطاق ذاكرة Galaxy S26 العامل المحدِّد. يعني LPDDR5X عند 85.6 GB/s أن توليد الرموز (مرحلة "فك الترميز" في استدلال LLM) يبلغ حده الأقصى تقريبًا عند عرض_نطاق_الذاكرة / حجم_النموذج_بالبايت رمزًا في الثانية.',
          'الحساب: يزن نموذج بحجم 7B معلمة بصيغة FP16 (أرقام عائمة 16-بت) نحو 14 GB. عند 85.6 GB/s ÷ 14 GB ≈ 6 رموز/ثانية كحد أقصى نظري. لكن التكميم يغيّر هذا بشكل كبير.',
          'عند التكميم بـ Q4 (4-بت، بتخزين معلمتين لكل بايت)، يتقلّص نفس نموذج 7B إلى نحو 3.5 GB. تتوسع الإنتاجية: 85.6 GB/s ÷ 3.5 GB ≈ 24 رمزًا/ثانية كحد أقصى نظري. يكون الرقم الفعلي أقل بسبب عبء الحوسبة، لكن الأهداف الواقعية هي 8-15 رمزًا/ثانية على Galaxy S26 لنموذج 7B مكمَّم.',
          'أفضل الأدوات: MLC Chat (متعدد المنصات، نماذج المجتمع) وGoogle AI Edge Gallery وOllama داخل Termux. تدعم جميعها النماذج المكمَّمة. ابدأ بنموذج 3B–8B (Qwen3 4B، Gemma 3 4B، Llama 3.2 3B، Phi-4-mini) بتكميم Q4 أو Q5؛ يتسع نموذج 7B–8B في ذاكرة 12 GB لكنه يترك مساحة أقل لنظام Android نفسه.'
        ],
        items: [
          'استخدم تكميم Q4 (4-بت) لنماذج 7B؛ يستوعب Q3 (3-بت) نماذج أكبر لكن مع فقدان الجودة',
          'تجنّب نماذج الدقة الكاملة FP16؛ فهي كبيرة جدًا للحصول على إنتاجية عملية',
          'أفضل النماذج مفتوحة الوزن للهواتف: Qwen3 4B، Gemma 3 4B، Llama 3.2 3B، Phi-4-mini',
          'السرعة المتوقعة: 8-15 رمزًا/ثانية لـ7B Q4؛ 3-5 رموز/ثانية لـ7B غير المكمَّم',
          'استخدم MLC Chat أو Google AI Edge Gallery أو Ollama في Termux؛ وتحقق من دعم NPU في كل تطبيق، فكثير منها يعمل على CPU/GPU فقط',
          'اختبر دون اتصال: إذا خزّن Ollama النموذج مؤقتًا، يعمل الاستدلال بالكامل دون إنترنت'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'خصوصية Galaxy S26: ما الذي يغادر جهازك؟',
        content: [
          'Knox Vault هو وحدة الأمان بالأجهزة من Samsung: معالج منفصل ومعزول عن المعالج الرئيسي ونظام Android. تعيش البيانات الحساسة - وسائل الدفع، بصمات الأصابع، السجلات الصحية، كلمات المرور - في Knox Vault ولا تُكشَف أبدًا للتطبيقات أو خوادم Samsung دون إجراء صريح من المستخدم.',
          'يتعلّم Personal Data Engine (PDE) محليًا: تتدرّب نماذج تعلّم الآلة على الجهاز على أنماط استخدامك، تقويمك، رسائلك، صورك، وجهات اتصالك. تذكر Samsung أن PDE يعمل على الجهاز، لكنها لا تنشر تفاصيل بنيته. تتحكم في الحد عبر مفتاح "معالجة البيانات على الجهاز فقط" في إعدادات Galaxy AI.',
          'ميزات السحابة تحتاج إلى اتصال شبكة: يتطلب Creative Studio تسجيل الدخول بحساب Samsung، ويتطلب Circle to Search الإنترنت. لكل ميزة سياسة خصوصية خاصة بها؛ راجعها قبل الاستخدام.',
          'الخصوصية عبر الأجهزة: يزامن Knox Matrix إعدادات الأمان والبيانات المشفرة عبر أجهزة Galaxy الخاصة بك باستخدام التشفير من طرف إلى طرف. تصف Samsung حماية Knox Enhanced Encrypted Protection (KEEP) بأنها تشفّر بيانات كل تطبيق.',
          'تحقق بدل أن تفترض: لا تنشر Samsung خريطة لما يعمل محليًا لكل ميزة، لذا راجع إعداد "معالجة البيانات على الجهاز فقط" وإشعار الخصوصية لكل ميزة على هاتفك.'
        ],
        items: [
          'Knox Vault = حاوية معزولة بالأجهزة للأسرار؛ معالج منفصل، نظام تشغيل منفصل، لا يُزامن أبدًا مع السحابة',
          'PDE = محرك تعلّم محلي؛ يتدرّب على بياناتك دون رفعها',
          'مفتاح "معالجة البيانات على الجهاز فقط" = يحظر كل رجوع إلى السحابة للميزات المتوافقة',
          'Creative Studio = يعتمد على السحابة؛ تعطيله يمنع نقل بيانات توليد الصور',
          'عملاء Gemini = مدعومون من Google؛ يستخدمون حساب Google الخاص بك للمهام متعددة الخطوات',
          'Knox Matrix = مزامنة أمان عبر الأجهزة؛ راجع وثائق Knox من Samsung لمعرفة نموذج التشفير'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل Galaxy AI يعمل بالكامل على الجهاز أم يستخدم السحابة؟', a: 'هجين. تعمل تصفية المكالمات وNow Nudge وNow Brief وكشف الاحتيال بالكامل على الجهاز باستخدام Personal Data Engine. يتطلب توليد الصور (Creative Studio) وعملاء Gemini وCircle to Search خوادم سحابية. فعّل "معالجة البيانات على الجهاز فقط" في الإعدادات لفرض المعالجة المحلية فقط للميزات المتوافقة.' },
          { q: 'ما هو Personal Data Engine على Galaxy S26؟', a: 'تصف Samsung محرك Personal Data Engine (PDE) بأنه المكوّن على الجهاز الذي يتيح تجارب Galaxy AI شخصية ومدركة للسياق. تذكر مواد إطلاق Samsung أن PDE يعمل على الجهاز، لكنها لا تنشر بنيته ولا النموذج الذي يقف خلفه ولا قائمة بالميزات التي تعتمد عليه.' },
          { q: 'هل استخدام الذكاء الاصطناعي على Galaxy S26 آمن؟', a: 'أكثر أمانًا عندما تبقى المعالجة على الهاتف، لكن ليس بشكل موحّد. يتطلب Creative Studio اتصال شبكة وتسجيل الدخول بحساب Samsung، ويتطلب Circle to Search الإنترنت، لذا ترسل هاتان الميزتان بيانات خارج الجهاز. يحدّ إعداد "معالجة البيانات على الجهاز فقط" من Galaxy AI إلى المعالجة المحلية؛ وتصفه أدلة إصدارات One UI السابقة بأنه إعداد تفعّله بنفسك وتذكر أن تعديلات الصور السحابية تتوقف عندئذٍ. يختلف موقعه في القوائم بحسب البرنامج الثابت، فتحقق على هاتفك واقرأ إشعار الخصوصية من Samsung.' },
          { q: 'هل يكفي S26 الأساسي للذكاء الاصطناعي على الجهاز أم أحتاج إلى Ultra؟', a: 'لميزات Galaxy AI يكفي S26 الأساسي: تمنح Samsung الطرازات الثلاثة مجموعة Galaxy AI نفسها. أما لتشغيل نماذجك الخاصة فالذاكرة هي الأهم: يأتي S26 وS26+ بذاكرة 12 GB، وUltra بذاكرة 12 GB أو 16 GB. يتعامل هاتف بذاكرة 12 GB مع نماذج 3B–8B بتكميم Q4؛ اختر Ultra بذاكرة 16 GB فقط للنماذج الأكبر. وتُظهر اختبارات الذكاء الاصطناعي المستقلة أن Exynos 2600 وSnapdragon 8 Elite Gen 5 متقاربان تقريبًا.' },
          { q: 'ما الفرق بين Exynos 2600 وSnapdragon 8 Elite Gen 5؟', a: 'تزعم Samsung أن شريحة Exynos 2600 (2nm، من مصنع Samsung) أسرع بنسبة +113% في الذكاء الاصطناعي من Exynos 2500. وتمنح Snapdragon 8 Elite Gen 5 for Galaxy طراز S26 Ultra تحسّنًا بنسبة +39% في NPU مقارنة بـ S25 Ultra (رقم من Samsung). في نتائج MLPerf Mobile يفوز Exynos في اختبارات التصنيف والكشف واللغة، ويفوز Snapdragon في التجزئة والدقة الفائقة وStable Diffusion، لذا لا فائز واضحًا للذكاء الاصطناعي المحلي.' },
          { q: 'هل يمكنني تشغيل نموذج لغوي كبير على Galaxy S26؟', a: 'نعم، لكن بحدود. يحدّ عرض نطاق LPDDR5X (85.6 GB/s) من إنتاجية فك الترميز. يصل نموذج 7B مكمَّم عند Q4 إلى حد أقصى نظري يبلغ ~24 رمزًا/ثانية (~8-15 واقعيًا). استخدم MLC Chat أو Google AI Edge Gallery أو Ollama في Termux. النماذج الأكبر (13B، 70B) غير عملية بسبب قيود الذاكرة وعرض النطاق.' },
          { q: 'هل يعمل Galaxy AI دون اتصال؟', a: 'جزئيًا. تعمل تصفية المكالمات وNow Nudge وNow Brief وكشف الاحتيال ونماذج LLM على الجهاز (إذا شُغِّلت عبر Ollama) دون اتصال بالكامل. تتطلب Creative Studio وعملاء Gemini وCircle to Search إنترنت. فعّل "معالجة البيانات على الجهاز فقط" للتأكد من أن الميزات المتوافقة لن تحاول الرجوع إلى السحابة.' },
          { q: 'ما هو EdgeFusion وهل يُطرح على Galaxy S26؟', a: 'EdgeFusion هو نسخة Nota AI المحسَّنة من Stable Diffusion لوحدات NPU المحمولة، وتولّد صورًا بدقة 512×512 في أقل من ثانية واحدة على Exynos 2600. تشاركت Samsung رسميًا مع Nota AI، لكن اسم "EdgeFusion" لم يُذكَر أبدًا في مواد Galaxy Unpacked الرسمية. يتطلب Creative Studio (تطبيق توليد الصور المطروح فعليًا) شبكة وحساب Samsung، لذا فإن الحالة الدقيقة لـEdgeFusion عند الإطلاق غير واضحة.' },
          { q: 'ما البيانات التي تجمعها Samsung عبر Galaxy AI؟', a: 'تذكر Samsung أن Personal Data Engine يعمل على الجهاز. أما ميزات السحابة مثل Creative Studio (تتطلب شبكة وحساب Samsung) وCircle to Search (يتطلب الإنترنت) فترسل بيانات فعلًا. عند تفعيل ميزات السحابة - Creative Studio، عملاء Gemini - تُرسَل البيانات إلى Samsung (لـGalaxy AI) أو Google (لـGemini). عطّل هذه الميزات لمنع النقل. راجع الإعدادات > الخصوصية > Galaxy AI لمعرفة تفاصيل ما هو مفعّل.' },
          { q: 'هل يحمي Knox Vault بياناتي حتى من Samsung؟', a: 'نعم. Knox Vault معالج أجهزة منفصل معزول عن نظام التشغيل الرئيسي. لا يمكن لتطبيقات Android أو برمجيات Samsung الوصول إلى البيانات الحساسة (القياسات الحيوية، معلومات الدفع، الصحة) المخزّنة في Knox Vault دون فتح صريح. تصف Samsung Knox Vault بأنه طبقة مادية تعزل البيانات الحساسة داخل عتاد آمن خاص بها؛ ولا يوجد نظام أمان مطلق.' },
          { q: 'هل يمكنني تعطيل ميزات Galaxy AI السحابية بالكامل؟', a: 'نعم. عطّل الميزات الفردية في الإعدادات > Galaxy AI. يمكنك تبديل Creative Studio وعملاء Gemini وCircle to Search بشكل مستقل. فعّل "معالجة البيانات على الجهاز فقط" لحظر الرجوع إلى السحابة للميزات المتوافقة. تستمر الميزات على الجهاز (تصفية المكالمات، Now Nudge) في العمل.' },
          { q: 'هل Galaxy S26 أفضل من iPhone لتشغيل الذكاء الاصطناعي المحلي؟', a: 'لتشغيل نماذج LLM المكمَّمة الخاصة بك، نعم. يدعم Android أدوات أكثر للنماذج مفتوحة الوزن (MLC Chat، Google AI Edge Gallery، Ollama في Termux). لكن فلسفة Apple التي تركّز أولًا على الجهاز وPCC القابل للتدقيق تشفيريًا تجعلها أقوى في الخصوصية إذا كنت تثق ببنية Apple التحتية أكثر من Samsung.' },
          { q: 'كم مرة سيتم تحديث ميزات Galaxy AI؟', a: 'تُطرح ميزات Galaxy AI عبر تحديثات One UI (عادةً تصحيحات أمان شهرية + تحديثات ميزات ربع سنوية). تذكر Samsung سبع سنوات من تحديثات الأمان لـGalaxy S26؛ راجع صفحات دعم Samsung لمعرفة التزام تحديثات نظام التشغيل.' }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[نماذج LLM المحلية على الهواتف 2026: iPhone 16 Pro وiPad M4 وSnapdragon X](/ar/local-llms/mobile-local-llms) -- نماذج LLM المحلية على الأجهزة المحمولة',
          '[الذكاء الاصطناعي على الجهاز والذاكرة: لماذا تدفع ذاكرة HBM سرعة الذكاء الاصطناعي المحلي (2026)](/ar/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026) -- ذاكرة HBM وسرعة الذكاء الاصطناعي المحلي',
          '[Galaxy مقابل iPhone على الجهاز AI: Samsung Galaxy AI مقابل Apple Intelligence (2026)](/ar/local-llms/galaxy-vs-iphone-on-device-ai-2026) -- مقارنة Galaxy AI مع Apple Intelligence',
          '[Apple M5 للذكاء الاصطناعي المحلي](/ar/local-llms/apple-silicon-m5-local-llm) -- شريحة Apple M5 للذكاء الاصطناعي المحلي',
          '[أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models) -- أي النماذج تشغل على الجهاز',
        ],
      }
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', 'headline': 'تشغيل الذكاء الاصطناعي المحلي على Galaxy S26: شرح الذكاء الاصطناعي على الجهاز (2026)', 'description': 'ما الذي يفعله Samsung Personal Data Engine على Galaxy S26، وأي ميزات Galaxy AI تحتاج إلى السحابة، وكيف تشغّل نماذج LLM محلية على Exynos 2600 أو Snapdragon.', 'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png', 'datePublished': '2026-06-15', 'dateModified': '2026-10-19', 'author': { '@type': 'Organization', 'name': 'PromptQuorum' }, 'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, 'inLanguage': 'ar', 'url': 'https://www.promptquorum.com/ar/local-llms/galaxy-s26-local-ai-on-device-2026', 'articleBody': 'يأتي Galaxy S26 الذي تم إطلاقه في 25 فبراير 2026 بمنصة Galaxy AI الهجينة للذكاء الاصطناعي - جزء محلي وجزء سحابي - إلى جيبك.' },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'ar', 'mainEntity': [
      { '@type': 'Question', 'name': 'ما هو Personal Data Engine على Galaxy S26؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'تصف Samsung محرك Personal Data Engine (PDE) بأنه المكوّن على الجهاز الذي يتيح تجارب Galaxy AI شخصية ومدركة للسياق. تذكر مواد إطلاق Samsung أن PDE يعمل على الجهاز، لكنها لا تنشر بنيته ولا النموذج الذي يقف خلفه ولا قائمة بالميزات التي تعتمد عليه.' } },
      { '@type': 'Question', 'name': 'هل Galaxy AI يعمل بالكامل على الجهاز أم يستخدم السحابة؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'هجين. تعمل تصفية المكالمات وNow Nudge وNow Brief وكشف الاحتيال بالكامل على الجهاز باستخدام Personal Data Engine. يتطلب توليد الصور (Creative Studio) وعملاء Gemini وCircle to Search خوادم سحابية.' } },
      { '@type': 'Question', 'name': 'ما الفرق بين Exynos 2600 وSnapdragon 8 Elite Gen 5؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'تزعم Samsung أن شريحة Exynos 2600 (2nm، من مصنع Samsung) أسرع بنسبة +113% في الذكاء الاصطناعي من Exynos 2500. وتمنح Snapdragon 8 Elite Gen 5 for Galaxy طراز S26 Ultra تحسّنًا بنسبة +39% في NPU مقارنة بـ S25 Ultra (رقم من Samsung). في نتائج MLPerf Mobile يفوز Exynos في اختبارات التصنيف والكشف واللغة، ويفوز Snapdragon في التجزئة والدقة الفائقة وStable Diffusion، لذا لا فائز واضحًا للذكاء الاصطناعي المحلي.' } }
    ] }
  }
};
