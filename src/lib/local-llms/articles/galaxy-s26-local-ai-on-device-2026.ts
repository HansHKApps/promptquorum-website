// Slug: galaxy-s26-local-ai-on-device-2026
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-29',
    last_full_refresh: '2026-08-29',
    current_hardware_mentioned: ['Samsung Galaxy S26', 'Samsung Exynos 2600', 'Snapdragon 8 Elite Gen 5'],
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-en.webp',
    title: 'Running Local AI on the Galaxy S26: On-Device AI Explained (2026)',
    seoTitle: 'Galaxy S26 On-Device AI: How it Works & What Runs Locally',
    intro: 'The Galaxy S26, launched February 25, 2026, brings Samsung\'s hybrid on-device and cloud AI platform—Galaxy AI—to your pocket. But unlike Apple\'s on-device-first approach, Samsung balances local processing with cloud features, letting you choose where your data goes. This guide explains what Galaxy AI actually does on-device, what requires cloud, and how to run your own open-weight LLMs on the S26\'s hardware.',
    metaDescription: 'Galaxy S26 on-device AI explained: which Galaxy AI features run locally, which need cloud, and how to run Ollama or MLC Chat locally on Exynos 2600 or Snapdragon 8 Elite Gen 5.',
    publishDate: '2026-06-15',
    dateModified: '2026-06-15',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    audience: 'Android users interested in on-device AI, Galaxy S26 buyers, developers exploring mobile LLM inference',
    primaryTerm: 'Galaxy S26 on-device AI',
    targetKeywords: ['galaxy s26 on device ai', 'galaxy ai features', 'exynos 2600 ai', 'snapdragon 8 elite gen 5 npu', 'on device ai android', 'run llm on galaxy s26'],
    leadAnswerBlock: '**The Galaxy S26 runs Galaxy AI—a hybrid platform mixing on-device processing (Call Screening, Now Nudge, Scam Detection) with cloud features (Creative Studio image generation, Gemini integration). You control the privacy toggle: "Process data only on device" restricts everything to local processing. The Exynos 2600 (2nm GAA, +113% AI vs S25) is significantly faster for on-device inference than Snapdragon 8 Elite Gen 5, making the global S26/S26+ the better choice for local AI. For running your own LLMs, quantized 7B models at Q4 (4-bit) reach ~24 tokens/sec on LPDDR5X 85.6 GB/s.**',
    quickAnswerTop: {
      en: {
        question: 'What Galaxy AI features run on the S26 without sending data to the cloud?',
        answer: 'Call Screening (answers calls locally), Now Nudge (context suggestions), Now Brief (personal digests), and Scam Detection all process data locally using the Personal Data Engine (PDE). You can enable "Process data only on device" in Galaxy AI settings to block cloud fallback for supported features. Image generation (Creative Studio) requires a network connection and always uses Samsung\'s cloud servers.',
        bullets: [
          'Call Screening transcribes and routes spam calls on-device with no cloud round-trip',
          'Now Nudge reads screen context locally and surfaces one-tap suggestions',
          'Scam Detection runs on-device Gemini model to flag fraudulent calls in real time',
          'Enable "Process data only on device" toggle to force local processing when available',
          'Creative Studio image generation is cloud-only (requires Samsung account + network)',
          'Exynos 2600 is 2.4x faster at Stable Diffusion than Exynos 2500'
        ],
        updatedDate: '2026-06-15'
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
          'Galaxy AI is a hybrid platform: Call Screening, Now Nudge, Now Brief, and Scam Detection run 100% on-device via the Personal Data Engine (PDE). Creative Studio image generation and Gemini integration require cloud servers.',
          'The Galaxy S26 splits hardware by region: Exynos 2600 (Europe/Korea/India) is +113% faster at AI than Exynos 2500, while Snapdragon 8 Elite Gen 5 (US/China/Japan) offers +39% NPU vs S25. Exynos 2600 is the better chip for local LLM inference.',
          'Privacy toggle: Enable "Process data only on device" in Settings > Galaxy AI to prevent cloud fallback. Knox Vault hardware security enclave protects sensitive data; Knox Matrix synchronizes settings across devices.',
          'On-device image generation: Samsung partnered with Nota AI on EdgeFusion, which generates 512×512 images in under one second on the Exynos 2600 NPU using LCM-based Stable Diffusion optimization. Creative Studio (the user-facing app) requires network + Samsung account.',
          'Running your own LLMs: LPDDR5X memory (85.6 GB/s) limits decode throughput. A quantized 7B model at Q4 (4-bit, ~3.5 GB) reaches ~24 tokens/sec theoretical max. Use MLC Chat or Ollama for Android to test.',
          'Snapdragon memory: S26 and S26 Ultra variants in US/China/Japan use Snapdragon 8 Elite Gen 5 (84.8 GB/s LPDDR5X), slightly slower for LLM inference than Exynos 2600 due to lower NPU performance, not memory.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'What Is Galaxy AI on the Galaxy S26?',
        content: [
          'Galaxy AI is Samsung\'s on-device intelligence platform, built on Samsung\'s own Gauss large language model family plus Gemini integration. Launched with Galaxy S24, refined on S25, and expanded on S26 (Feb 25, 2026 launch), it balances local processing for privacy with cloud features for power.',
          'The Personal Data Engine (PDE) is the core: it learns from your on-device data—messages, calendar, photos, location history—without sending anything to Samsung\'s servers unless you explicitly opt into cloud features. Knox Vault, a hardware security enclave, isolates sensitive data (credentials, health records, payment info) from even Samsung\'s own software.',
          'Galaxy AI features split into three categories: pure on-device (Call Screening), hybrid with local-first default (Now Nudge, Now Brief, Scam Detection), and cloud-dependent (Creative Studio, Gemini agents, Circle to Search).',
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
            'Processing': 'On-Device (NPU + Gemini model)',
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
        imageCaption: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 on the Galaxy S26: 2nm GAA vs 3nm FinFET, +113% vs +39% AI gen-over-gen, 2.4x faster Stable Diffusion, and 85.6 GB/s vs 84.8 GB/s LPDDR5X memory bandwidth.',
        columns: ['Metric', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', 'Winner for Local AI?'],
        rows: [
          {
            'Metric': 'Node / Fab',
            'Exynos 2600': '2nm GAA (Samsung SF2)',
            'Snapdragon 8 Elite Gen 5': '3nm FinFET (TSMC)',
            'Winner for Local AI?': 'Exynos (smaller, more efficient)'
          },
          {
            'Metric': 'AI Performance Gen-over-gen',
            'Exynos 2600': '+113% vs Exynos 2500',
            'Snapdragon 8 Elite Gen 5': '+39% NPU vs S25',
            'Winner for Local AI?': 'Exynos (3x larger leap)'
          },
          {
            'Metric': 'Stable Diffusion Speed',
            'Exynos 2600': '2.4x faster than Exynos 2500',
            'Snapdragon 8 Elite Gen 5': 'No published Stable Diffusion benchmark',
            'Winner for Local AI?': 'Exynos (verified; Snapdragon spec TBD)'
          },
          {
            'Metric': 'Available regions/variants',
            'Exynos 2600': 'S26 (global), S26+ (global)',
            'Snapdragon 8 Elite Gen 5': 'S26 (US/China/Japan), S26 Ultra (all regions)',
            'Winner for Local AI?': 'Exynos (global availability)'
          },
          {
            'Metric': 'Memory bandwidth',
            'Exynos 2600': 'LPDDR5X 85.6 GB/s (typical)',
            'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84.8 GB/s (typical)',
            'Winner for Local AI?': 'Exynos (marginally higher)'
          },
          {
            'Metric': 'Verdict',
            'Exynos 2600': 'Best for on-device LLM & image gen',
            'Snapdragon 8 Elite Gen 5': 'Competitive; EdgeFusion unclear if available',
            'Winner for Local AI?': 'Exynos (choose S26/S26+ over S26 Ultra)'
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
          'Best tools: MLC Chat (cross-platform, community models) and Ollama for Android (if available at your launch date). Both support quantized models. Start with a 7B model (Mistral 7B, Llama 2 7B, Phi 2.7B) at Q4 or Q5 quantization.'
        ],
        items: [
          'Use Q4 (4-bit) quantization for 7B models; Q3 (3-bit) fits larger models but loses quality',
          'Avoid FP16 full-precision models; they\'re too large for practical throughput',
          'Best open-weight models for mobile: Mistral 7B, Phi 2.7B, TinyLlama 1.1B',
          'Expected speed: 8–15 tokens/sec for 7B Q4; 3–5 tokens/sec for unquantized 7B',
          'Use MLC Chat or Ollama; both auto-optimize for Exynos/Snapdragon',
          'Test offline: if Ollama caches the model, inference works entirely without internet'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Galaxy S26 Privacy: What Leaves Your Device?',
        content: [
          'Knox Vault is Samsung\'s hardware security module: a separate processor isolated from the main CPU and Android OS. Sensitive data—payment methods, fingerprints, health records, passwords—lives in Knox Vault and is never exposed to apps or Samsung\'s servers without explicit user action.',
          'Personal Data Engine (PDE) learns locally: on-device machine learning models train on your usage patterns, calendar, messages, photos, and contacts. By default, this data never touches Samsung\'s cloud. You control the boundary with the "Process data only on device" toggle in Galaxy AI settings.',
          'Cloud features are opt-in: Creative Studio, Gemini agents, and Circle to Search require your permission and send data to Samsung and Google servers respectively. Each feature has its own privacy policy. Disabling these features prevents any cloud transmission.',
          'Cross-device privacy: Knox Matrix synchronizes security settings and encrypted data across your Galaxy devices using end-to-end encryption. Samsung acts as a relay, not a decryption layer.',
          'Default assumption: if you haven\'t explicitly enabled a cloud feature, your data stays local. This is the opposite of Apple Intelligence (always-on cloud PCC for advanced features) and the opposite of Google Gemini (tighter cloud integration by default).'
        ],
        items: [
          'Knox Vault = hardware-isolated enclave for secrets; separate processor, separate OS, never synced to cloud',
          'PDE = local learning engine; trains on your data without uploading',
          '"Process data only on device" toggle = blocks all cloud fallback for supported features',
          'Creative Studio = cloud-dependent; disabling it prevents image gen data transmission',
          'Gemini agents = Google-powered; uses your Google account for multi-step tasks',
          'Knox Matrix = cross-device sync using end-to-end encryption; Samsung sees encrypted blobs, not plaintext'
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
            q: 'What\'s the difference between Exynos 2600 and Snapdragon 8 Elite Gen 5?',
            a: 'Exynos 2600 (2nm, Samsung Foundry) is +113% faster at AI than the previous-gen Exynos 2500. Snapdragon 8 Elite Gen 5 (3nm, TSMC) is +39% faster at NPU than Snapdragon 8 Gen 1 (S25). Exynos 2600 is the clear winner for on-device LLM inference; it\'s 2.4x faster at Stable Diffusion.'
          },
          {
            q: 'Can I run a large language model on Galaxy S26?',
            a: 'Yes, but with limits. LPDDR5X bandwidth (85.6 GB/s) caps decode throughput. A quantized 7B model at Q4 reaches ~24 tokens/sec theoretical max (~8–15 realistic). Use MLC Chat or Ollama for Android. Larger models (13B, 70B) are impractical due to memory and bandwidth constraints.'
          },
          {
            q: 'Does Galaxy AI work offline?',
            a: 'Partially. Call Screening, Now Nudge, Now Brief, Scam Detection, and on-device LLMs (if running via Ollama) work completely offline. Creative Studio, Gemini agents, and Circle to Search require internet. Enable "Process data only on device" to ensure supported features don\'t attempt cloud fallback.'
          },
          {
            q: 'What is EdgeFusion and does it ship on Galaxy S26?',
            a: 'EdgeFusion is Nota AI\'s optimized Stable Diffusion for mobile NPUs, generating 512×512 images in <1 second on Exynos 2600. Samsung officially partnered with Nota AI, but "EdgeFusion" was never named in official Galaxy Unpacked materials. Creative Studio (the shipping image gen app) requires network + Samsung account, so EdgeFusion\'s exact status at launch is unclear.'
          },
          {
            q: 'What data does Samsung collect via Galaxy AI?',
            a: 'By default, none. Personal Data Engine stays local. When you enable cloud features—Creative Studio, Gemini agents—data is sent to Samsung (for Galaxy AI) or Google (for Gemini). Disable these features to prevent transmission. Check Settings > Privacy > Galaxy AI for a breakdown of what\'s enabled.'
          },
          {
            q: 'Does Knox Vault protect my data from Samsung?',
            a: 'Yes. Knox Vault is a separate hardware processor isolated from the main OS. Sensitive data (biometrics, payment info, health) stored in Knox Vault cannot be accessed by Android apps or Samsung software without explicit unlock. Even Samsung engineers cannot extract Knox Vault data without physical device access and privilege escalation.'
          },
          {
            q: 'Can I disable Galaxy AI cloud features entirely?',
            a: 'Yes. Disable individual features in Settings > Galaxy AI. You can toggle off Creative Studio, Gemini agents, and Circle to Search independently. Enable "Process data only on device" to block cloud fallback for supported features. On-device features (Call Screening, Now Nudge) continue working.'
          },
          {
            q: 'Is Galaxy S26 better than iPhone for running local AI?',
            a: 'For running your own quantized LLMs, yes. Exynos 2600 is faster at Stable Diffusion than Apple\'s A18 Pro NPU, and Android supports more open-weight model tools (Ollama, MLC Chat). But Apple\'s on-device-first philosophy and cryptographically auditable PCC make it stronger for privacy if you trust Apple\'s infrastructure over Samsung\'s.'
          },
          {
            q: 'How often will Galaxy AI features be updated?',
            a: 'Galaxy AI features roll out via One UI updates (usually monthly security patches + quarterly feature updates). Samsung committed to 7 years of OS updates and 7 years of security patches for Galaxy S26, so expect new Galaxy AI features and performance improvements through 2033.'
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
      'description': 'Galaxy S26 on-device AI explained: which Galaxy AI features run locally, which need cloud, and how to run Ollama or MLC Chat locally on Exynos 2600 or Snapdragon 8 Elite Gen 5.',
      'image': '[www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png](https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png)',
      'datePublished': '2026-06-15',
      'dateModified': '2026-06-15',
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
            'text': 'Exynos 2600 (2nm, Samsung Foundry) is +113% faster at AI than the previous-gen Exynos 2500. Snapdragon 8 Elite Gen 5 (3nm, TSMC) is +39% faster at NPU than Snapdragon 8 Gen 1 (S25). Exynos 2600 is the clear winner for on-device LLM inference; it\'s 2.4x faster at Stable Diffusion.'
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
    metaDescription: '갤럭시 S26 온디바이스 AI 설명: Galaxy AI 기능 중 온디바이스에서 작동하는 기능, 클라우드가 필요한 기능, Exynos 2600/Snapdragon 8 Elite Gen 5에서 Ollama 또는 MLC Chat을 실행하는 방법',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '10분 읽기',
    educationalLevel: 'Intermediate',
    audience: '온디바이스 AI에 관심 있는 안드로이드 사용자, 갤럭시 S26 구매자, 모바일 LLM 추론을 탐색하는 개발자',
    primaryTerm: '갤럭시 S26 온디바이스 AI',
    leadAnswerBlock: '**갤럭시 S26은 Galaxy AI를 탑재합니다. 온디바이스 처리(통화 스크리닝, Now Nudge, 스캠 탐지)와 클라우드 기능(Creative Studio 이미지 생성, Gemini 통합)을 혼합합니다. 개인 데이터 엔진(PDE)이 기반입니다. 프라이버시 토글: "디바이스에서만 데이터 처리"를 활성화하면 모든 클라우드 폴백을 제한합니다. Exynos 2600(2nm GAA, Exynos 2500 대비 +113% AI)은 온디바이스 추론에서 Snapdragon 8 Elite Gen 5보다 훨씬 빠릅니다. 자신의 LLM을 실행하려면: Q4 양자화 7B 모델이 LPDDR5X 85.6 GB/s에서 ~24 tokens/sec에 도달합니다.**',
    quickAnswerTop: {
      ko: {
        question: '갤럭시 S26에서 클라우드로 데이터를 보내지 않고 온디바이스로 작동하는 갤럭시 AI 기능은 무엇입니까?',
        answer: '전화 스크리닝(자동 응답), Now Nudge(문맥 제안), Now Brief(개인 요약), 스캠 탐지는 모두 Personal Data Engine(PDE)을 사용하여 로컬에서 데이터를 처리합니다. 갤럭시 AI 설정에서 "디바이스에서만 데이터 처리"를 활성화하면 지원되는 기능의 클라우드 폴백을 차단할 수 있습니다. 이미지 생성(Creative Studio)은 항상 삼성 클라우드 서버를 사용하므로 네트워크 연결이 필요합니다.',
        bullets: [
          '전화 스크리닝은 클라우드 왕복 없이 온디바이스에서 스팸 전화를 필터링합니다',
          'Now Nudge는 화면 문맥을 로컬에서 읽고 한 번의 탭으로 제안을 표시합니다',
          '스캠 탐지는 온디바이스 Gemini 모델을 실행하여 실시간으로 사기성 전화를 표시합니다',
          '"디바이스에서만 데이터 처리" 토글을 활성화하여 지원되는 기능의 로컬 처리를 강제합니다',
          'Creative Studio 이미지 생성은 클라우드만 지원(삼성 계정 + 네트워크 필요)',
          'Exynos 2600은 Exynos 2500보다 Stable Diffusion에서 2.4배 더 빠릅니다'
        ],
        updatedDate: '2026-06-15'
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
          'Galaxy AI는 하이브리드 플랫폼입니다: 통화 스크리닝, Now Nudge, Now Brief, 스캠 탐지는 Personal Data Engine(PDE)을 통해 100% 온디바이스에서 실행됩니다. Creative Studio 이미지 생성과 Gemini 통합은 클라우드 서버가 필요합니다.',
          '갤럭시 S26은 지역별로 칩이 다릅니다: Exynos 2600(유럽/한국/인도)은 Exynos 2500보다 AI에서 +113% 빠르고, Snapdragon 8 Elite Gen 5(미국/중국/일본)는 S25 대비 NPU +39%입니다. Exynos 2600이 로컬 LLM 추론에 더 나은 칩입니다.',
          '프라이버시 토글: 설정 > Galaxy AI에서 "디바이스에서만 데이터 처리"를 활성화하면 클라우드 폴백을 방지합니다. Knox Vault 하드웨어 보안은 민감한 데이터를 보호하고, Knox Matrix는 디바이스 간 설정을 동기화합니다.',
          '온디바이스 이미지 생성: 삼성이 Nota AI와 파트너십을 통해 EdgeFusion을 개발했으며, Exynos 2600 NPU에서 1초 미만에 512×512 이미지를 생성합니다. Creative Studio(사용자 대면 앱)는 네트워크 + 삼성 계정이 필요합니다.',
          '자신의 LLM 실행: LPDDR5X 메모리(85.6 GB/s)가 디코드 처리량을 제한합니다. Q4(4비트)로 양자화된 7B 모델은 이론적으로 최대 ~24 tokens/sec에 도달합니다. MLC Chat 또는 Android용 Ollama를 사용하여 테스트하세요.',
          'Snapdragon 메모리: 미국/중국/일본의 S26 및 S26 Ultra 변형은 Snapdragon 8 Elite Gen 5를 사용합니다(84.8 GB/s LPDDR5X). 메모리가 아닌 낮은 NPU 성능으로 인해 Exynos 2600보다 LLM 추론이 약간 느립니다.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'Galaxy AI란 무엇인가?',
        content: [
          'Galaxy AI는 삼성의 온디바이스 인텔리전스 플랫폼으로, 삼성 자체 Gauss 대규모 언어 모델 제품군과 Gemini 통합을 기반으로 합니다. Galaxy S24로 출시되어 S25에서 개선되었고 S26에서 확장되었습니다(2026년 2월 25일 출시). 로컬 처리는 프라이버시를 위해, 클라우드 기능은 성능을 위해 균형을 맞춥니다.',
          'Personal Data Engine(PDE)이 핵심입니다: 메시지, 캘린더, 사진, 위치 기록 등 온디바이스 데이터에서 학습하며, 사용자가 명시적으로 클라우드 기능을 활성화하지 않는 한 삼성 서버로 아무것도 보내지 않습니다. Knox Vault(하드웨어 보안 암호화 저장소)는 민감한 데이터(자격 증명, 건강 기록, 결제 정보)를 삼성 소프트웨어로부터도 격리합니다.',
          'Galaxy AI 기능은 세 가지 범주로 나뉩니다: 순수 온디바이스(통화 스크리닝), 로컬 우선 하이브리드(Now Nudge, Now Brief, 스캠 탐지), 클라우드 의존(Creative Studio, Gemini 에이전트, Circle to Search).',
          '사용자 제어가 핵심입니다: Galaxy AI 설정의 단일 토글인 "디바이스에서만 데이터 처리"는 호환 기능의 모든 클라우드 폴백을 차단합니다. 이는 사후 대응 프라이버시가 아니라, 사용자가 더 많은 성능을 요청하지 않는 한 기본 동작입니다.'
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
            '처리 위치': '온디바이스(NPU + Gemini 모델)',
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
        imageCaption: '갤럭시 S26의 Exynos 2600 vs Snapdragon 8 Elite Gen 5: 2nm GAA vs 3nm FinFET, AI 세대별 성능 +113% vs +39%, Stable Diffusion 2.4배 속도, LPDDR5X 메모리 대역폭 85.6 GB/s vs 84.8 GB/s.',
        columns: ['지표', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', '온디바이스 AI의 승자?'],
        rows: [
          {
            '지표': '노드 / 파운드리',
            'Exynos 2600': '2nm GAA(삼성 SF2)',
            'Snapdragon 8 Elite Gen 5': '3nm FinFET(TSMC)',
            '온디바이스 AI의 승자?': 'Exynos(더 작고 효율적)'
          },
          {
            '지표': 'AI 성능 세대별',
            'Exynos 2600': 'Exynos 2500 대비 +113%',
            'Snapdragon 8 Elite Gen 5': 'S25 대비 NPU +39%',
            '온디바이스 AI의 승자?': 'Exynos(3배 큰 도약)'
          },
          {
            '지표': 'Stable Diffusion 속도',
            'Exynos 2600': 'Exynos 2500보다 2.4배 빠름',
            'Snapdragon 8 Elite Gen 5': '공개된 Stable Diffusion 벤치마크 없음',
            '온디바이스 AI의 승자?': 'Exynos(검증됨; Snapdragon 미정)'
          },
          {
            '지표': '사용 가능 지역/변형',
            'Exynos 2600': 'S26(글로벌), S26+(글로벌)',
            'Snapdragon 8 Elite Gen 5': 'S26(미국/중국/일본), S26 Ultra(모든 지역)',
            '온디바이스 AI의 승자?': 'Exynos(글로벌 가용성)'
          },
          {
            '지표': '메모리 대역폭',
            'Exynos 2600': 'LPDDR5X 85.6 GB/s(일반)',
            'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84.8 GB/s(일반)',
            '온디바이스 AI의 승자?': 'Exynos(약간 높음)'
          },
          {
            '지표': '평결',
            'Exynos 2600': '온디바이스 LLM 및 이미지 생성에 최적',
            'Snapdragon 8 Elite Gen 5': '경쟁력 있음; EdgeFusion 불명확',
            '온디바이스 AI의 승자?': 'Exynos(S26 Ultra 대신 S26/S26+ 선택)'
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
          '최적 도구: MLC Chat(크로스 플랫폼, 커뮤니티 모델)과 Android용 Ollama(출시 날짜에 사용 가능한 경우). 둘 다 양자화 모델을 지원합니다. 7B 모델(Mistral 7B, Llama 2 7B, Phi 2.7B)로 Q4 또는 Q5 양자화로 시작하세요.'
        ],
        items: [
          '7B 모델의 경우 Q4(4비트) 양자화 사용; Q3(3비트)은 더 큰 모델에 맞지만 품질 손실',
          'FP16 완전 정밀도 모델을 피하세요. 실질적인 처리량에 너무 큼',
          '모바일에 최적의 오픈웨이트 모델: Mistral 7B, Phi 2.7B, TinyLlama 1.1B',
          '예상 속도: 7B Q4의 경우 8–15 tokens/sec; 양자화되지 않은 7B의 경우 3–5 tokens/sec',
          'MLC Chat 또는 Ollama 사용; 둘 다 Exynos/Snapdragon 자동 최적화',
          '오프라인 테스트: Ollama가 모델을 캐시하면 추론이 인터넷 없이 완전히 작동'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: '갤럭시 S26 프라이버시: 어떤 데이터가 디바이스를 떠나나?',
        content: [
          'Knox Vault는 삼성의 하드웨어 보안 모듈입니다: 기본 CPU 및 Android OS와 격리된 별도의 프로세서. 민감한 데이터(결제 방법, 지문, 건강 기록, 비밀번호)는 Knox Vault에 저장되며 명시적인 사용자 조치 없이는 앱이나 삼성 서버에 노출되지 않습니다.',
          'Personal Data Engine(PDE)은 로컬에서 학습합니다: 온디바이스 머신러닝 모델은 사용 패턴, 캘린더, 메시지, 사진, 연락처에 대해 학습합니다. 기본적으로 이 데이터는 삼성 클라우드에 절대 도달하지 않습니다. Galaxy AI 설정의 "디바이스에서만 데이터 처리" 토글로 경계를 제어합니다.',
          '클라우드 기능은 선택적입니다: Creative Studio, Gemini 에이전트, Circle to Search는 사용자의 허가가 필요하며 각각 삼성 및 Google 서버로 데이터를 보냅니다. 각 기능에는 고유한 프라이버시 정책이 있습니다. 이러한 기능을 비활성화하면 클라우드 전송을 방지합니다.',
          '크로스 디바이스 프라이버시: Knox Matrix는 엔드-투-엔드 암호화를 사용하여 Galaxy 디바이스 간에 보안 설정 및 암호화된 데이터를 동기화합니다. 삼성은 릴레이 역할을 하며, 해독 레이어가 아닙니다.',
          '기본 가정: 명시적으로 클라우드 기능을 활성화하지 않은 경우 데이터는 로컬에 유지됩니다. 이는 Apple Intelligence(고급 기능을 위한 항상 켜짐 클라우드 PCC)와는 반대이며 Google Gemini(기본적으로 더 밀접한 클라우드 통합)와도 반대입니다.'
        ],
        items: [
          'Knox Vault = 비밀용 하드웨어 격리 암호화 저장소; 별도 프로세서, 별도 OS, 클라우드에 절대 동기화 안 됨',
          'PDE = 로컬 학습 엔진; 업로드하지 않고 데이터에서 학습',
          '"디바이스에서만 데이터 처리" 토글 = 지원 기능의 모든 클라우드 폴백 차단',
          'Creative Studio = 클라우드 의존; 비활성화하면 이미지 생성 데이터 전송 방지',
          'Gemini 에이전트 = Google 지원; 다단계 작업을 위해 Google 계정 사용',
          'Knox Matrix = 엔드-투-엔드 암호화를 사용한 크로스 디바이스 동기화; 삼성은 암호화된 블롭을 보며, 평문이 아님'
        ]
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Galaxy AI는 완전히 온디바이스인가요 아니면 클라우드를 사용하나요?',
            a: '하이브리드입니다. 통화 스크리닝, Now Nudge, Now Brief, 스캠 탐지는 Personal Data Engine을 사용하여 온디바이스에서 완전히 실행됩니다. 이미지 생성(Creative Studio), Gemini 에이전트, Circle to Search는 클라우드 서버가 필요합니다. 설정에서 "디바이스에서만 데이터 처리"를 활성화하여 지원 기능에 대한 로컬 전용 처리를 강제합니다.'
          },
          {
            q: 'Exynos 2600과 Snapdragon 8 Elite Gen 5의 차이점은 무엇인가요?',
            a: 'Exynos 2600(2nm, 삼성 파운드리)은 이전 세대 Exynos 2500보다 AI에서 +113% 빠릅니다. Snapdragon 8 Elite Gen 5(3nm, TSMC)는 Snapdragon 8 Gen 1 (S25)보다 NPU에서 +39% 빠릅니다. Exynos 2600은 온디바이스 LLM 추론의 명백한 승자입니다. Stable Diffusion에서 2.4배 빠릅니다.'
          },
          {
            q: '갤럭시 S26에서 대규모 언어 모델을 실행할 수 있나요?',
            a: '예, 하지만 제한이 있습니다. LPDDR5X 대역폭(85.6 GB/s)은 디코드 처리량을 제한합니다. Q4에서 양자화된 7B 모델은 이론적 최대 ~24 tokens/sec에 도달합니다(현실적으로 ~8–15). MLC Chat 또는 Android용 Ollama를 사용하세요. 더 큰 모델(13B, 70B)은 메모리 및 대역폭 제약으로 인해 비실용적입니다.'
          },
          {
            q: 'Galaxy AI가 오프라인으로 작동하나요?',
            a: '부분적으로. 통화 스크리닝, Now Nudge, Now Brief, 스캠 탐지, 온디바이스 LLM(Ollama를 통해 실행하는 경우)은 완전히 오프라인으로 작동합니다. Creative Studio, Gemini 에이전트, Circle to Search는 인터넷이 필요합니다. "디바이스에서만 데이터 처리"를 활성화하여 지원 기능이 클라우드 폴백을 시도하지 않도록 하세요.'
          },
          {
            q: 'EdgeFusion이란 무엇이고 갤럭시 S26에 배송되나요?',
            a: 'EdgeFusion은 모바일 NPU를 위한 Nota AI의 최적화된 Stable Diffusion으로, Exynos 2600에서 <1초 안에 512×512 이미지를 생성합니다. 삼성은 공식적으로 Nota AI와 파트너십을 맺었지만, "EdgeFusion"은 공식 Galaxy Unpacked 자료에서 명명되지 않았습니다. 배송 이미지 생성 앱인 Creative Studio는 네트워크+삼성 계정이 필요하므로 출시 시 EdgeFusion의 정확한 상태는 불명확합니다.'
          },
          {
            q: 'Galaxy AI를 통해 삼성이 어떤 데이터를 수집하나요?',
            a: '기본적으로 없습니다. Personal Data Engine은 로컬로 유지됩니다. Creative Studio, Gemini 에이전트와 같은 클라우드 기능을 활성화하면 데이터가 삼성(Galaxy AI용) 또는 Google(Gemini용) 서버로 전송됩니다. 이러한 기능을 비활성화하면 전송을 방지합니다. 설정 > 개인 정보 보호 > Galaxy AI에서 활성화된 항목의 분류를 확인하세요.'
          },
          {
            q: 'Knox Vault이 내 데이터를 삼성으로부터 보호하나요?',
            a: '예. Knox Vault는 기본 OS에서 격리된 별도의 하드웨어 프로세서입니다. Knox Vault에 저장된 민감한 데이터(생체 인식, 결제 정보, 건강)는 명시적인 잠금 해제 없이 Android 앱이나 삼성 소프트웨어로 액세스할 수 없습니다. 삼성 엔지니어도 물리적 디바이스 액세스 및 권한 에스컬레이션 없이 Knox Vault 데이터를 추출할 수 없습니다.'
          },
          {
            q: 'Galaxy AI 클라우드 기능을 완전히 비활성화할 수 있나요?',
            a: '예. 설정 > Galaxy AI에서 개별 기능을 비활성화합니다. Creative Studio, Gemini 에이전트, Circle to Search를 독립적으로 전환할 수 있습니다. 지원 기능에 대한 클라우드 폴백을 차단하려면 "디바이스에서만 데이터 처리"를 활성화합니다. 온디바이스 기능(통화 스크리닝, Now Nudge)은 계속 작동합니다.'
          },
          {
            q: 'Galaxy S26이 로컬 AI 실행을 위해 iPhone보다 더 나은가요?',
            a: '양자화된 LLM 실행의 경우 예. Exynos 2600은 Apple의 A18 Pro NPU보다 Stable Diffusion에서 빠르고, Android는 더 많은 오픈웨이트 모델 도구(Ollama, MLC Chat)를 지원합니다. 그러나 Apple의 온디바이스 우선 철학과 암호화로 감사 가능한 PCC는 Apple 인프라를 삼성보다 신뢰한다면 프라이버시에 더 강합니다.'
          },
          {
            q: 'Galaxy AI 기능은 얼마나 자주 업데이트되나요?',
            a: 'Galaxy AI 기능은 One UI 업데이트(보통 월간 보안 패치 + 분기별 기능 업데이트)를 통해 롤아웃됩니다. 삼성은 Galaxy S26에 대해 7년간의 OS 업데이트와 7년간의 보안 패치를 약속했으므로 2033년까지 새로운 Galaxy AI 기능과 성능 개선을 기대하세요.'
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
      'description': '갤럭시 S26 온디바이스 AI 설명: Galaxy AI 기능 중 온디바이스에서 작동하는 기능, 클라우드가 필요한 기능, Exynos 2600/Snapdragon 8 Elite Gen 5에서 Ollama 또는 MLC Chat을 실행하는 방법',
      'image': '[www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png](https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png)',
      'datePublished': '2026-06-15',
      'dateModified': '2026-06-15',
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
          'name': 'Galaxy AI는 완전히 온디바이스인가요 아니면 클라우드를 사용하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '하이브리드입니다. 통화 스크리닝, Now Nudge, Now Brief, 스캠 탐지는 Personal Data Engine을 사용하여 온디바이스에서 완전히 실행됩니다. 이미지 생성(Creative Studio), Gemini 에이전트, Circle to Search는 클라우드 서버가 필요합니다.'
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
    metaDescription: 'Galaxy S26 Lokale KI erklärt: Welche Galaxy AI-Funktionen lokal laufen, welche Cloud benötigen, und wie Sie Ollama oder MLC Chat auf Exynos 2600/Snapdragon 8 Elite Gen 5 ausführen.',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '10 Min Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Android-Nutzer interessiert an lokaler KI, Galaxy S26 Käufer, Entwickler die mobile LLM Inferenz erkunden',
    primaryTerm: 'Galaxy S26 lokale KI',
    leadAnswerBlock: '**Galaxy S26 betreibt Galaxy AI — eine Hybrid-Plattform, die lokale Verarbeitung(Anruffilterung, Now Nudge, Betrugserkennung) mit Cloud-Funktionen(Creative Studio Bildgenerierung, Gemini-Integration) mischt. Sie steuern das Datenschutz-Toggle: "Daten nur auf dem Gerät verarbeiten" beschränkt alles auf lokale Verarbeitung. Der Exynos 2600 (2nm GAA, +113% KI vs S25) ist deutlich schneller für lokale Inferenz als Snapdragon 8 Elite Gen 5, was das globale S26/S26+ zur besseren Wahl für lokale KI macht. Für Ihre eigenen LLMs: quantisierte 7B-Modelle bei Q4 (4-Bit) erreichen ~24 tokens/sec auf LPDDR5X 85,6 GB/s.**',
    quickAnswerTop: {
      de: {
        question: 'Welche Galaxy-AI-Funktionen des S26 laufen lokal auf dem Gerät, ohne Daten in die Cloud zu senden?',
        answer: 'Anruffilterung (beantwortet Anrufe lokal), Now Nudge (Kontextvorschläge), Now Brief (persönliche Zusammenfassungen) und Betrugserkennung verarbeiten alle Daten lokal mithilfe der Personal Data Engine (PDE). Sie können "Daten nur auf dem Gerät verarbeiten" in den Galaxy-AI-Einstellungen aktivieren, um Cloudfall-backs für unterstützte Funktionen zu blockieren. Bildgenerierung (Creative Studio) ist ausschließlich Cloud-gebunden und benötigt Samsung-Konto und Netzwerkverbindung.',
        bullets: [
          'Anruffilterung transkribiert und leitet Spamrufe lokal ohne Cloud-Roundtrip weiter',
          'Now Nudge liest Bildschirmkontext lokal und zeigt One-Tap-Vorschläge',
          'Betrugserkennung führt lokales Gemini-Modell aus, um betrügerische Anrufe in Echtzeit zu kennzeichnen',
          'Aktivieren Sie den Schalter "Daten nur auf dem Gerät verarbeiten", um lokale Verarbeitung zu erzwingen',
          'Creative Studio Bildgenerierung ist nur Cloud (erfordert Samsung-Konto + Netzwerk)',
          'Exynos 2600 ist 2,4x schneller bei Stable Diffusion als Exynos 2500'
        ],
        updatedDate: '2026-06-15'
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
          'Galaxy AI ist eine Hybrid-Plattform: Anruffilterung, Now Nudge, Now Brief, Betrugserkennung laufen 100% lokal über die Personal Data Engine (PDE). Creative Studio Bildgenerierung und Gemini-Integration benötigen Cloud-Server.',
          'Galaxy S26 teilt Hardware nach Region: Exynos 2600 (Europa/Korea/Indien) ist +113% schneller bei KI als Exynos 2500, während Snapdragon 8 Elite Gen 5 (US/China/Japan) +39% NPU vs S25 bietet. Exynos 2600 ist der bessere Chip für lokale LLM-Inferenz.',
          'Datenschutz-Toggle: Aktivieren Sie "Daten nur auf dem Gerät verarbeiten" in Einstellungen > Galaxy AI, um Cloud-Fallbacks zu verhindern. Knox Vault bietet Hardwaresicherheit; Knox Matrix synchronisiert Einstellungen zwischen Geräten.',
          'Lokale Bildgenerierung: Samsung partnerte mit Nota AI an EdgeFusion, das 512×512 Bilder in unter einer Sekunde auf Exynos 2600 NPU generiert. Creative Studio (die Benutzer-App) benötigt Netzwerk + Samsung-Konto.',
          'Ihre eigenen LLMs: LPDDR5X-Speicher (85,6 GB/s) begrenzt Decodedurchsatz. Ein 7B-Modell bei Q4 (4-Bit) erreicht ~24 tokens/sec theoretisches Maximum. Verwenden Sie MLC Chat oder Ollama für Android zum Testen.',
          'Snapdragon-Speicher: S26- und S26 Ultra-Varianten in US/China/Japan nutzen Snapdragon 8 Elite Gen 5 (84,8 GB/s LPDDR5X), etwas langsamer für LLM-Inferenz als Exynos 2600 aufgrund schwächerer NPU, nicht Speicher.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'Was ist Galaxy AI auf dem Galaxy S26?',
        content: [
          'Galaxy AI ist Samsungs On-Device-Intelligence-Plattform, aufgebaut auf Samsungs eigenem Gauss-Sprachmodell plus Gemini-Integration. Es wurde mit Galaxy S24 eingeführt, auf S25 verbessert und auf S26 erweitert (Start 25. Februar 2026). Es balanciert lokale Verarbeitung für Datenschutz mit Cloud-Funktionen für Leistung.',
          'Die Personal Data Engine (PDE) ist der Kern: Sie lernt aus lokalen Daten — Nachrichten, Kalender, Fotos, Standortverlauf — ohne Samsungs Server zu erreichen, es sei denn, Sie aktivieren Cloud-Funktionen explizit. Knox Vault, eine Hardware-Sicherheit, isoliert sensitive Daten (Anmeldedaten, Gesundheitsdaten, Zahlungsinfo) von sogar Samsungs eigenem OS.',
          'Galaxy AI-Funktionen teilen sich in drei Kategorien: rein lokal (Anruffilterung), Hybrid mit lokaler Priorität (Now Nudge, Now Brief, Betrugserkennung), und Cloud-abhängig (Creative Studio, Gemini-Agenten, Circle to Search).',
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
            'Verarbeitung': 'Lokal (NPU + Gemini-Modell)',
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
        imageCaption: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 im Galaxy S26: 2nm GAA vs 3nm FinFET, +113% vs +39% KI-Leistung Gen-über-Gen, 2,4x schnelleres Stable Diffusion, 85,6 GB/s vs 84,8 GB/s LPDDR5X-Speicherbandbreite.',
        columns: ['Metrik', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', 'Gewinner für Lokale KI?'],
        rows: [
          {
            'Metrik': 'Knoten / Fab',
            'Exynos 2600': '2nm GAA (Samsung SF2)',
            'Snapdragon 8 Elite Gen 5': '3nm FinFET (TSMC)',
            'Gewinner für Lokale KI?': 'Exynos (kleiner, effizienter)'
          },
          {
            'Metrik': 'KI-Leistung Gen-über-Gen',
            'Exynos 2600': '+113% vs Exynos 2500',
            'Snapdragon 8 Elite Gen 5': '+39% NPU vs S25',
            'Gewinner für Lokale KI?': 'Exynos (3x größerer Sprung)'
          },
          {
            'Metrik': 'Stable Diffusion Geschwindigkeit',
            'Exynos 2600': '2,4x schneller als Exynos 2500',
            'Snapdragon 8 Elite Gen 5': 'Keine veröffentlichten SD Benchmarks',
            'Gewinner für Lokale KI?': 'Exynos (verifiziert; Snapdragon TBD)'
          },
          {
            'Metrik': 'Verfügbare Regionen/Varianten',
            'Exynos 2600': 'S26 (global), S26+ (global)',
            'Snapdragon 8 Elite Gen 5': 'S26 (US/China/Japan), S26 Ultra (alle)',
            'Gewinner für Lokale KI?': 'Exynos (globale Verfügbarkeit)'
          },
          {
            'Metrik': 'Speicherbandbreite',
            'Exynos 2600': 'LPDDR5X 85,6 GB/s (typisch)',
            'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84,8 GB/s (typisch)',
            'Gewinner für Lokale KI?': 'Exynos (leicht höher)'
          },
          {
            'Metrik': 'Fazit',
            'Exynos 2600': 'Best für On-Device LLM & Bildgen',
            'Snapdragon 8 Elite Gen 5': 'Wettbewerbsfähig; EdgeFusion unklar',
            'Gewinner für Lokale KI?': 'Exynos (wählen S26/S26+ über Ultra)'
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
          'Beste Tools: MLC Chat (cross-platform, community models) und Ollama für Android. Beide unterstützen quantisierte Modelle. Beginnen Sie mit 7B-Modellen (Mistral 7B, Llama 2 7B, Phi 2.7B) bei Q4 oder Q5 Quantisierung.'
        ],
        items: [
          'Q4 (4-Bit) Quantisierung für 7B-Modelle verwenden; Q3 passt größere aber mit Qualitätsverlust',
          'Vermeiden Sie FP16 Voll-Präzisions-Modelle; zu groß für praktischen Durchsatz',
          'Beste Open-Weight-Modelle für Mobile: Mistral 7B, Phi 2.7B, TinyLlama 1.1B',
          'Erwartete Geschwindigkeit: 8–15 tokens/sec für 7B Q4; 3–5 für unquantisiert 7B',
          'MLC Chat oder Ollama verwenden; beide auto-optimieren für Exynos/Snapdragon',
          'Offline testen: wenn Ollama das Modell cached, funktioniert Inferenz völlig ohne Internet'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Galaxy S26 Datenschutz: Was verlässt Ihr Gerät?',
        content: [
          'Knox Vault ist Samsungs Hardware-Sicherheitsmodul: ein separater Prozessor, isoliert vom Haupt-CPU und Android OS. Sensitive Daten — Zahlungsmethoden, Fingerabdrücke, Gesundheitsdaten, Passwörter — lebt in Knox Vault und wird niemals Apps oder Samsungs Servern ohne explizite Nutzer-Aktion ausgesetzt.',
          'Personal Data Engine (PDE) lernt lokal: On-Device Machine Learning-Modelle trainieren auf Ihrem Nutzungsmuster, Kalender, Nachrichten, Fotos, und Kontakten. Standardmäßig erreicht diese Daten Samsungs Cloud niemals. Sie steuern die Grenze mit dem "Daten nur auf dem Gerät verarbeiten"-Toggle in Galaxy AI Einstellungen.',
          'Cloud-Funktionen sind opt-in: Creative Studio, Gemini-Agenten, und Circle to Search benötigen Ihre Erlaubnis und senden Daten zu Samsung und Google Servern. Jede Funktion hat ihre eigene Datenschutzrichtlinie. Das Deaktivieren dieser Funktionen verhindert jede Cloud-Übertragung.',
          'Cross-Device Datenschutz: Knox Matrix synchronisiert Sicherheits-Einstellungen und verschlüsselte Daten über Galaxy-Geräte mit End-zu-End-Verschlüsselung. Samsung agiert als Relay, nicht als Dekryptionslayer.',
          'Standard-Annahme: wenn Sie nicht explizit eine Cloud-Funktion aktiviert haben, bleiben Ihre Daten lokal. Das ist das Gegenteil von Apple Intelligence (immer-an Cloud PCC) und dem Gegenteil von Google Gemini (engere Cloud-Integration standardmäßig).'
        ],
        items: [
          'Knox Vault = Hardware-isolierte Aufbewahrung für Geheimnisse; separater Prozessor, separates OS, nie zu Cloud gesynct',
          'PDE = lokale Lern-Engine; trainiert auf Ihren Daten ohne hochzuladen',
          '"Daten nur auf dem Gerät verarbeiten"-Toggle = blockiert alle Cloud-Fallbacks für unterstützte Funktionen',
          'Creative Studio = Cloud-abhängig; das Deaktivieren verhindert Bildgen-Daten-Übertragung',
          'Gemini-Agenten = Google-gefüttert; nutzt Ihr Google-Konto für mehrstufige Aufgaben',
          'Knox Matrix = Cross-Device-Sync mit End-zu-End-Verschlüsselung; Samsung sieht verschlüsselte Blobs, kein Klartext'
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
            q: 'Was ist der Unterschied zwischen Exynos 2600 und Snapdragon 8 Elite Gen 5?',
            a: 'Exynos 2600 (2nm, Samsung Foundry) ist +113% schneller bei KI als vorheriger Exynos 2500. Snapdragon 8 Elite Gen 5 (3nm, TSMC) ist +39% schneller bei NPU als Snapdragon 8 Gen 1 (S25). Exynos 2600 ist der klare Gewinner für On-Device LLM-Inferenz; 2,4x schneller bei Stable Diffusion.'
          },
          {
            q: 'Kann ich ein großes Sprachmodell auf Galaxy S26 ausführen?',
            a: 'Ja, aber mit Limits. LPDDR5X-Bandbreite (85,6 GB/s) capped Dekodedurchsatz. Ein quantisiertes 7B-Modell bei Q4 erreicht ~24 tokens/sec theoretisches Maximum (~8–15 realistisch). Verwenden Sie MLC Chat oder Ollama für Android. Größere Modelle (13B, 70B) sind unpraktisch wegen Speicher und Bandbreite-Constraints.'
          },
          {
            q: 'Funktioniert Galaxy AI offline?',
            a: 'Teilweise. Anruffilterung, Now Nudge, Now Brief, Betrugserkennung, und On-Device LLMs (wenn über Ollama) funktionieren vollständig offline. Creative Studio, Gemini-Agenten und Circle to Search benötigen Internet. Aktivieren Sie "Daten nur auf dem Gerät verarbeiten", um sicherzustellen, dass unterstützte Funktionen kein Cloud-Fallback versuchen.'
          },
          {
            q: 'Was ist EdgeFusion und wird es auf Galaxy S26 ausgeliefert?',
            a: 'EdgeFusion ist Nota AIs optimiertes Stable Diffusion für mobile NPUs, generiert 512×512 Bilder in <1 Sekunde auf Exynos 2600. Samsung partnerte offiziell mit Nota AI, aber "EdgeFusion" wurde nie in offiziellen Galaxy Unpacked-Materialien genannt. Creative Studio (die ausgelieferte Bildgen-App) benötigt Netzwerk + Samsung-Konto, daher ist EdgeFusions Status beim Start unklar.'
          },
          {
            q: 'Welche Daten sammelt Samsung über Galaxy AI?',
            a: 'Standardmäßig keine. Personal Data Engine bleibt lokal. Wenn Sie Cloud-Funktionen — Creative Studio, Gemini-Agenten — aktivieren, werden Daten zu Samsung (für Galaxy AI) oder Google (für Gemini) gesendet. Deaktivieren Sie diese Funktionen, um Übertragung zu verhindern. Prüfen Sie Einstellungen > Datenschutz > Galaxy AI für eine Übersicht.'
          },
          {
            q: 'Schützt Knox Vault meine Daten vor Samsung?',
            a: 'Ja. Knox Vault ist ein separater Hardware-Prozessor, isoliert vom Haupt-OS. Sensitive Daten (Biometrie, Zahlungsinfo, Gesundheit) in Knox Vault können nicht von Android-Apps oder Samsung-Software ohne explizites Unlock zugegriffen werden. Sogar Samsung-Ingenieure können Knox Vault-Daten nicht ohne physischen Gerät-Zugriff und Privileg-Eskalation extrahieren.'
          },
          {
            q: 'Kann ich Galaxy AI Cloud-Funktionen komplett deaktivieren?',
            a: 'Ja. Deaktivieren Sie einzelne Funktionen in Einstellungen > Galaxy AI. Sie können Creative Studio, Gemini-Agenten, und Circle to Search unabhängig umschalten. Aktivieren Sie "Daten nur auf dem Gerät verarbeiten", um Cloud-Fallback für unterstützte Funktionen zu blockieren. On-Device Funktionen (Anruffilterung, Now Nudge) funktionieren weiter.'
          },
          {
            q: 'Ist Galaxy S26 besser als iPhone um lokale KI auszuführen?',
            a: 'Für das Ausführen Ihrer eigenen quantisierten LLMs, ja. Exynos 2600 ist schneller bei Stable Diffusion als Apples A18 Pro NPU, und Android unterstützt mehr Open-Weight-Modell-Tools (Ollama, MLC Chat). Aber Apples On-Device-First-Philosophie und kryptographisch auditable PCC machen es stärker für Datenschutz, wenn Sie Apples Infrastruktur über Samsungs vertrauen.'
          },
          {
            q: 'Wie oft werden Galaxy AI Funktionen aktualisiert?',
            a: 'Galaxy AI Funktionen rollen via One UI-Updates aus (normalerweise monatliche Sicherheits-Patches + quartals-Feature-Updates). Samsung hat sich zu 7 Jahren OS-Updates und 7 Jahren Sicherheits-Patches für Galaxy S26 verpflichtet, daher erwarten Sie neue Galaxy AI-Funktionen und Leistungs-Verbesserungen bis 2033.'
          },
          {
            q: 'Datenschutz für Unternehmen: Wie schlüsselt Samsung meine E-Mails auf?',
            a: 'Knox Vault speichert E-Mail-Anmeldedaten in einem hardware-isolierten Bereich. Samsung liest Ihre E-Mails nicht; sein Server agiert nur als Relay. Alle Decodierungen geschehen lokal auf dem Gerät nach Authentifizierung. Für Compliance-Anforderungen (DSGVO, etc.) siehe Knox White Paper.'
          },
          {
            q: 'Kann ich E2E-Verschlüsslung mit Knox Matrix einrichten?',
            a: 'Ja. Knox Matrix synchronisiert alle Daten unter End-zu-End-Verschlüsslung. Samsung nie Schlüssel hat. Für zusätzliche Sicherheit wird Biometrie-Unlock empfohlen (Fingerabdruck oder Gesicht + Knox Vault PIN).'
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
      'description': 'Galaxy S26 Lokale KI erklärt: Welche Galaxy AI-Funktionen lokal laufen, welche Cloud benötigen, und wie Sie Ollama oder MLC Chat auf Exynos 2600/Snapdragon 8 Elite Gen 5 ausführen.',
      'image': '[www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png](https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png)',
      'datePublished': '2026-06-15',
      'dateModified': '2026-06-15',
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
    metaDescription: 'Galaxy S26 IA locale expliquée: quelles fonctionnalités Galaxy AI s\'exécutent localement, lesquelles nécessitent le cloud, et comment exécuter Ollama ou MLC Chat sur Exynos 2600/Snapdragon 8 Elite Gen 5.',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs Android intéressés par l\'IA locale, acheteurs Galaxy S26, développeurs explorant l\'inférence LLM mobile',
    primaryTerm: 'Galaxy S26 IA locale',
    leadAnswerBlock: '**Le Galaxy S26 exécute Galaxy AI — une plateforme hybride mélangeant traitement local (filtrage d\'appels, Now Nudge, détection de fraude) avec des fonctionnalités cloud (génération d\'images Creative Studio, intégration Gemini). Vous contrôlez le toggle de confidentialité: "Traiter les données uniquement sur l\'appareil" limite tout au traitement local. L\'Exynos 2600 (2nm GAA, +113% IA vs S25) est beaucoup plus rapide pour l\'inférence locale que le Snapdragon 8 Elite Gen 5, ce qui rend le S26/S26+ global le meilleur choix pour l\'IA locale. Pour vos propres LLM: les modèles 7B quantifiés à Q4 (4-bit) atteignent ~24 tokens/sec sur LPDDR5X 85,6 GB/s.**',
    quickAnswerTop: {
      fr: {
        question: 'Quelles fonctionnalités Galaxy AI du S26 s\'exécutent en local sur l\'appareil sans envoyer les données vers le cloud ?',
        answer: 'Le filtrage des appels (répond aux appels localement), Now Nudge (suggestions contextuelles), Now Brief (résumés personnels) et la détection des escroqueries traitent tous les données localement à l\'aide du moteur de données personnelles (PDE). Vous pouvez activer "Traiter les données uniquement sur l\'appareil" dans les paramètres Galaxy AI pour bloquer les retours au cloud pour les fonctionnalités prises en charge. La génération d\'images (Creative Studio) dépend entièrement du cloud et nécessite un compte Samsung et une connexion réseau.',
        bullets: [
          'Le filtrage des appels transcrit et achemine les appels indésirables en local sans aller-retour cloud',
          'Now Nudge lit le contexte de l\'écran localement et affiche les suggestions en un clic',
          'La détection des escroqueries exécute un modèle Gemini local pour signaler les appels frauduleux en temps réel',
          'Activez le bouton "Traiter les données uniquement sur l\'appareil" pour forcer le traitement local',
          'La génération d\'images Creative Studio ne fonctionne que sur le cloud (nécessite un compte Samsung + réseau)',
          'L\'Exynos 2600 est 2,4 fois plus rapide pour Stable Diffusion que l\'Exynos 2500'
        ],
        updatedDate: '2026-06-15'
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
          'Galaxy AI est une plateforme hybride: filtrage d\'appels, Now Nudge, Now Brief, détection de fraude s\'exécutent 100% localement via la Personal Data Engine (PDE). La génération d\'images Creative Studio et l\'intégration Gemini nécessitent des serveurs cloud.',
          'Galaxy S26 partage le matériel par région: Exynos 2600 (Europe/Corée/Inde) est +113% plus rapide en IA qu\'Exynos 2500, tandis que Snapdragon 8 Elite Gen 5 (US/Chine/Japon) offre +39% NPU vs S25. Exynos 2600 est la meilleure puce pour l\'inférence LLM locale.',
          'Toggle de confidentialité: Activez "Traiter les données uniquement sur l\'appareil" dans Paramètres > Galaxy AI pour empêcher les retours au cloud. Knox Vault fournit la sécurité matérielle; Knox Matrix synchronise les paramètres entre appareils.',
          'Génération d\'images locale: Samsung a associé avec Nota AI sur EdgeFusion, qui génère des images 512×512 en moins d\'une seconde sur Exynos 2600 NPU. Creative Studio (l\'app utilisateur) nécessite réseau + compte Samsung.',
          'Vos propres LLM: la mémoire LPDDR5X (85,6 GB/s) limite le débit de décodage. Un modèle 7B à Q4 (4-bit) atteint ~24 tokens/sec maximum théorique. Utilisez MLC Chat ou Ollama pour Android pour tester.',
          'Mémoire Snapdragon: les variantes S26 et S26 Ultra aux US/Chine/Japon utilisent Snapdragon 8 Elite Gen 5 (84,8 GB/s LPDDR5X), légèrement plus lent pour l\'inférence LLM qu\'Exynos 2600 en raison de performances NPU plus faibles.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'Qu\'est-ce que Galaxy AI sur le Galaxy S26?',
        content: [
          'Galaxy AI est la plateforme d\'intelligence on-device de Samsung, construite sur sa propre famille de modèles de langage Gauss plus l\'intégration Gemini. Lancée avec Galaxy S24, améliorée sur S25, et étendue sur S26 (lancement 25 février 2026), elle équilibre le traitement local pour la confidentialité avec les fonctionnalités cloud pour la performance.',
          'La Personal Data Engine (PDE) est le cœur: elle apprend à partir de données on-device — messages, calendrier, photos, historique de localisation — sans atteindre les serveurs de Samsung, à moins que vous n\'activiez explicitement les fonctionnalités cloud. Knox Vault, un enclave de sécurité matérielle, isole les données sensibles (identifiants, dossiers santé, informations de paiement) même du propre logiciel de Samsung.',
          'Les fonctionnalités Galaxy AI se divisent en trois catégories: purement local (filtrage d\'appels), hybride avec priorité locale (Now Nudge, Now Brief, détection de fraude), et dépendant du cloud (Creative Studio, agents Gemini, Circle to Search).',
          'Le contrôle de l\'utilisateur est central: un seul bouton bascule dans les paramètres Galaxy AI — "Traiter les données uniquement sur l\'appareil" — bloque tous les retours au cloud pour les fonctionnalités supportées. Ce n\'est pas une confidentialité après-coup; c\'est le comportement par défaut à moins que vous ne demandiez plus de puissance.'
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
            'Traitement': 'Local (NPU + modèle Gemini)',
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
        imageCaption: 'Exynos 2600 vs Snapdragon 8 Elite Gen 5 sur le Galaxy S26: 2nm GAA vs 3nm FinFET, +113% vs +39% de performance IA générationnelle, Stable Diffusion 2,4x plus rapide, bande passante LPDDR5X 85,6 GB/s vs 84,8 GB/s.',
        columns: ['Métrique', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', 'Gagnant pour IA Locale?'],
        rows: [
          {
            'Métrique': 'Nœud / Fab',
            'Exynos 2600': '2nm GAA (Samsung SF2)',
            'Snapdragon 8 Elite Gen 5': '3nm FinFET (TSMC)',
            'Gagnant pour IA Locale?': 'Exynos (plus petit, efficace)'
          },
          {
            'Métrique': 'Performance IA générations',
            'Exynos 2600': '+113% vs Exynos 2500',
            'Snapdragon 8 Elite Gen 5': '+39% NPU vs S25',
            'Gagnant pour IA Locale?': 'Exynos (bond 3x plus grand)'
          },
          {
            'Métrique': 'Vitesse Stable Diffusion',
            'Exynos 2600': '2,4x plus rapide qu\'Exynos 2500',
            'Snapdragon 8 Elite Gen 5': 'Aucun benchmark SD publié',
            'Gagnant pour IA Locale?': 'Exynos (vérifié; Snapdragon TBD)'
          },
          {
            'Métrique': 'Régions/variantes disponibles',
            'Exynos 2600': 'S26 (global), S26+ (global)',
            'Snapdragon 8 Elite Gen 5': 'S26 (US/Chine/Japon), S26 Ultra (tous)',
            'Gagnant pour IA Locale?': 'Exynos (disponibilité globale)'
          },
          {
            'Métrique': 'Bande passante mémoire',
            'Exynos 2600': 'LPDDR5X 85,6 GB/s (typique)',
            'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84,8 GB/s (typique)',
            'Gagnant pour IA Locale?': 'Exynos (légèrement supérieur)'
          },
          {
            'Métrique': 'Verdict',
            'Exynos 2600': 'Meilleur pour LLM on-device & génération',
            'Snapdragon 8 Elite Gen 5': 'Compétitif; EdgeFusion flou',
            'Gagnant pour IA Locale?': 'Exynos (choisir S26/S26+ vs Ultra)'
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
          'Meilleurs outils: MLC Chat (multi-plateforme, modèles communautés) et Ollama pour Android. Tous deux supportent modèles quantifiés. Débutez avec modèles 7B (Mistral 7B, Llama 2 7B, Phi 2.7B) à quantification Q4 ou Q5.'
        ],
        items: [
          'Utiliser quantification Q4 (4-bit) pour modèles 7B; Q3 (3-bit) s\'ajuste plus grandes mais perte qualité',
          'Éviter modèles FP16 précision-complète; trop volumineux pour débit pratique',
          'Meilleurs modèles open-weight pour mobile: Mistral 7B, Phi 2.7B, TinyLlama 1.1B',
          'Vitesse attendue: 8–15 tokens/sec pour 7B Q4; 3–5 pour 7B non-quantifié',
          'Utiliser MLC Chat ou Ollama; les deux auto-optimisent pour Exynos/Snapdragon',
          'Tester hors ligne: si Ollama cache le modèle, l\'inférence fonctionne entièrement sans internet'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Confidentialité Galaxy S26: Quelles Données Quittent Votre Appareil?',
        content: [
          'Knox Vault est le module de sécurité matériel de Samsung: un processeur séparé isolé du CPU principal et Android OS. Les données sensibles — méthodes paiement, empreintes, dossiers santé, mots de passe — vivent dans Knox Vault et ne sont jamais exposées aux apps ou serveurs Samsung sans action utilisateur explicite.',
          'Personal Data Engine (PDE) apprend localement: les modèles machine learning on-device s\'entraînent sur vos motifs usage, calendrier, messages, photos, et contacts. Par défaut, ces données ne touchent jamais le cloud de Samsung. Vous contrôlez la limite avec le toggle "Traiter les données uniquement sur l\'appareil" dans paramètres Galaxy AI.',
          'Les fonctionnalités cloud sont opt-in: Creative Studio, agents Gemini, et Circle to Search nécessitent votre permission et envoient données aux serveurs Samsung et Google respectivement. Chaque fonctionnalité a sa propre politique confidentialité. Désactiver ces fonctionnalités prévient toute transmission cloud.',
          'Confidentialité multi-appareil: Knox Matrix synchronise paramètres sécurité et données chiffrées entre appareils Galaxy en utilisant chiffrement end-to-end. Samsung agit comme relais, pas couche déchiffrement.',
          'Hypothèse par défaut: si vous n\'avez pas explicitement activé une fonctionnalité cloud, vos données restent locales. C\'est le contraire d\'Apple Intelligence (PCC cloud toujours-on) et le contraire de Google Gemini (intégration cloud plus serrée par défaut).'
        ],
        items: [
          'Knox Vault = stockage isolé matériel pour secrets; processeur séparé, OS séparé, jamais synced cloud',
          'PDE = moteur apprentissage local; entraîne sur vos données sans télécharger',
          'Toggle "Traiter données uniquement appareil" = bloque tous retours cloud pour fonctionnalités supportées',
          'Creative Studio = dépendant cloud; désactiver prévient transmission données génération images',
          'Agents Gemini = alimentés Google; utilise compte Google pour tâches multi-étapes',
          'Knox Matrix = sync multi-appareil chiffrement end-to-end; Samsung voit blobs chiffrés, pas texte clair'
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
            q: 'Quelle est la différence entre Exynos 2600 et Snapdragon 8 Elite Gen 5?',
            a: 'Exynos 2600 (2nm, Samsung Foundry) est +113% plus rapide en IA que l\'Exynos 2500 précédent. Snapdragon 8 Elite Gen 5 (3nm, TSMC) est +39% plus rapide en NPU que Snapdragon 8 Gen 1 (S25). Exynos 2600 est le gagnant clair pour l\'inférence LLM on-device; 2,4x plus rapide à Stable Diffusion.'
          },
          {
            q: 'Puis-je exécuter un grand modèle de langage sur Galaxy S26?',
            a: 'Oui, mais avec des limites. La bande passante LPDDR5X (85,6 GB/s) plafonne le débit de décodage. Un modèle 7B quantifié à Q4 atteint ~24 tokens/sec maximum théorique (~8–15 réaliste). Utilisez MLC Chat ou Ollama pour Android. Les modèles plus grands (13B, 70B) sont impractiques en raison de contraintes mémoire et bande passante.'
          },
          {
            q: 'Galaxy AI fonctionne-t-il hors ligne?',
            a: 'Partiellement. Le filtrage d\'appels, Now Nudge, Now Brief, la détection de fraude, et les LLM on-device (si exécutés via Ollama) fonctionnent entièrement hors ligne. Creative Studio, les agents Gemini, et Circle to Search nécessitent internet. Activez "Traiter les données uniquement sur l\'appareil" pour garantir les fonctionnalités supportées n\'essaient pas le retour cloud.'
          },
          {
            q: 'Qu\'est-ce que EdgeFusion et se livre-t-il sur Galaxy S26?',
            a: 'EdgeFusion est le Stable Diffusion optimisé de Nota AI pour les NPU mobiles, générant 512×512 images en <1 seconde sur Exynos 2600. Samsung s\'est officiellement associé avec Nota AI, mais "EdgeFusion" ne fut jamais nommé dans les matériaux officiels Galaxy Unpacked. Creative Studio (l\'app génération images livrée) nécessite réseau + compte Samsung, le statut exact d\'EdgeFusion au lancement est donc peu clair.'
          },
          {
            q: 'Quelles données Samsung collecte-t-il via Galaxy AI?',
            a: 'Par défaut, aucune. Personal Data Engine reste local. Quand vous activez des fonctionnalités cloud — Creative Studio, agents Gemini — données sont envoyées aux serveurs Samsung (pour Galaxy AI) ou Google (pour Gemini). Désactiver ces fonctionnalités prévient transmission. Vérifiez Paramètres > Confidentialité > Galaxy AI pour détail de ce qui\'s activé.'
          },
          {
            q: 'Knox Vault protège-t-il mes données de Samsung?',
            a: 'Oui. Knox Vault est un processeur matériel séparé, isolé du OS principal. Les données sensibles (biométrie, info paiement, santé) stockées dans Knox Vault ne peuvent être accédées par apps Android ou logiciel Samsung sans déverrouillage explicite. Même les ingénieurs Samsung ne peuvent extraire données Knox Vault sans accès appareil physique et escalade privilège.'
          },
          {
            q: 'Puis-je désactiver complètement les fonctionnalités cloud Galaxy AI?',
            a: 'Oui. Désactivez des fonctionnalités individuelles dans Paramètres > Galaxy AI. Vous pouvez basculer Creative Studio, agents Gemini, et Circle to Search indépendamment. Activez "Traiter les données uniquement sur l\'appareil" pour bloquer retour cloud pour fonctionnalités supportées. Les fonctionnalités on-device (filtrage appels, Now Nudge) continuent de fonctionner.'
          },
          {
            q: 'Galaxy S26 est-il meilleur qu\'iPhone pour exécuter IA locale?',
            a: 'Pour exécuter vos propres LLM quantifiés, oui. Exynos 2600 est plus rapide à Stable Diffusion que le NPU A18 Pro d\'Apple, et Android supporte plus d\'outils modèles open-weight (Ollama, MLC Chat). Mais la philosophie on-device-first d\'Apple et PCC auditable cryptographiquement le rendent plus fort pour confidentialité si vous faites confiance infrastructure Apple plus qu\'infrastructure Samsung.'
          },
          {
            q: 'À quelle fréquence les fonctionnalités Galaxy AI sont-elles mises à jour?',
            a: 'Les fonctionnalités Galaxy AI se déploient via mises à jour One UI (généralement patches sécurité mensuels + mises à jour features trimestrielles). Samsung s\'est engagé à 7 ans mises à jour OS et 7 ans patches sécurité pour Galaxy S26, attendez donc nouvelles fonctionnalités Galaxy AI et améliorations performance jusqu\'à 2033.'
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
      'description': 'Galaxy S26 IA locale expliquée: quelles fonctionnalités Galaxy AI s\'exécutent localement, lesquelles nécessitent le cloud, et comment exécuter Ollama ou MLC Chat sur Exynos 2600/Snapdragon 8 Elite Gen 5.',
      'image': '[www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png](https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png)',
      'datePublished': '2026-06-15',
      'dateModified': '2026-06-15',
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
    next_refresh_due: '2026-09-29',
    last_full_refresh: '2026-08-29',
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-es.webp',
    title: 'Ejecutar IA Local en Galaxy S26: IA en Dispositivo Explicada (2026)',
    seoTitle: 'Galaxy S26 IA en Dispositivo: Cómo Funciona Galaxy AI y NPU',
    intro: 'El Galaxy S26, lanzado el 25 de febrero de 2026, trae la plataforma híbrida de IA local y cloud de Samsung — Galaxy AI — a tu bolsillo. A diferencia del enfoque local de Apple, Samsung equilibra el procesamiento local con funciones en cloud, permitiéndote elegir dónde van tus datos. Esta guía explica qué hace realmente Galaxy AI en el dispositivo, qué funciones requieren cloud, y cómo ejecutar tus propios LLM de peso abierto en el hardware del S26.',
    metaDescription: 'Galaxy S26 IA en dispositivo explicada: qué funciones Galaxy AI se ejecutan localmente, cuáles necesitan cloud, y cómo ejecutar Ollama o MLC Chat en Exynos 2600 o Snapdragon 8 Elite Gen 5.',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios Android interesados en IA local, compradores de Galaxy S26, desarrolladores explorando inferencia LLM móvil',
    primaryTerm: 'Galaxy S26 IA en dispositivo',
    targetKeywords: ['galaxy s26 ia en dispositivo', 'características galaxy ai', 'exynos 2600 ai', 'snapdragon 8 elite gen 5 npu', 'ai en dispositivo android', 'ejecutar llm en galaxy s26'],
    leadAnswerBlock: '**El Galaxy S26 ejecuta Galaxy AI — una plataforma híbrida que mezcla procesamiento local (Filtrado de Llamadas, Now Nudge, Detección de Fraudes) con funciones en cloud (generación de imágenes Creative Studio, integración Gemini). Controlas el toggle de privacidad: "Procesar datos solo en el dispositivo" restringe todo al procesamiento local. El Exynos 2600 (2nm GAA, +113% IA vs S25) es significativamente más rápido para inferencia local que el Snapdragon 8 Elite Gen 5, haciendo el S26/S26+ global la mejor opción para IA local. Para ejecutar tus propios LLM: modelos 7B cuantificados a Q4 (4-bit) alcanzan ~24 tokens/seg en LPDDR5X 85,6 GB/s.**',
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
        answer: 'El Filtrado de Llamadas (responde llamadas localmente), Now Nudge (sugerencias contextuales), Now Brief (resúmenes personales) y la Detección de Fraudes procesan datos localmente usando el Motor de Datos Personales (PDE). Puedes activar "Procesar datos solo en el dispositivo" en configuración Galaxy AI para bloquear alternativas en cloud para funciones compatibles. La generación de imágenes (Creative Studio) requiere conexión de red y siempre usa servidores cloud de Samsung.',
        bullets: [
          'El Filtrado de Llamadas transcribe y enruta llamadas spam localmente sin viajes de ida y vuelta a la nube',
          'Now Nudge lee el contexto de la pantalla localmente y muestra sugerencias táctiles rápidas',
          'La Detección de Fraudes ejecuta un modelo Gemini local para marcar llamadas fraudulentas en tiempo real',
          'Habilita el botón "Procesar datos solo en el dispositivo" para forzar procesamiento local cuando esté disponible',
          'La generación de imágenes de Creative Studio es solo en cloud (requiere cuenta Samsung + red)',
          'El Exynos 2600 es 2,4 veces más rápido en Stable Diffusion que el Exynos 2500'
        ],
        updatedDate: '2026-06-15'
      }
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Galaxy AI es una plataforma híbrida: Filtrado de Llamadas, Now Nudge, Now Brief y Detección de Fraude se ejecutan 100% en el dispositivo mediante el Personal Data Engine (PDE). La generación de imágenes de Creative Studio y la integración con Gemini requieren servidores cloud.',
          'El Galaxy S26 divide el hardware por región: el Exynos 2600 (Europa/Corea/India) es +113% más rápido en IA que el Exynos 2500, mientras que el Snapdragon 8 Elite Gen 5 (EE.UU./China/Japón) ofrece +39% de mejora en NPU vs S25. El Exynos 2600 es el mejor chip para inferencia LLM local.',
          'Toggle de privacidad: activa "Procesar datos solo en el dispositivo" en Ajustes > Galaxy AI para evitar el fallback en cloud. Knox Vault (enclave de seguridad por hardware) protege los datos sensibles; Knox Matrix sincroniza ajustes entre dispositivos.',
          'Generación de imágenes en el dispositivo: Samsung se asoció con Nota AI en EdgeFusion, que genera imágenes de 512×512 en menos de un segundo en el NPU del Exynos 2600 usando una optimización de Stable Diffusion basada en LCM. Creative Studio (la app de cara al usuario) requiere red + cuenta Samsung.',
          'Ejecutar tus propios LLM: la memoria LPDDR5X (85,6 GB/s) limita el rendimiento de decodificación. Un modelo 7B cuantificado a Q4 (4-bit, ~3,5 GB) alcanza un máximo teórico de ~24 tokens/seg. Usa MLC Chat u Ollama para Android para probarlo.',
          'Memoria Snapdragon: las variantes S26 y S26 Ultra en EE.UU./China/Japón usan Snapdragon 8 Elite Gen 5 (84,8 GB/s LPDDR5X), ligeramente más lento para inferencia LLM que el Exynos 2600 debido al rendimiento de NPU, no a la memoria.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: '¿Qué Es Galaxy AI en el Galaxy S26?',
        content: [
          'Galaxy AI es la plataforma de inteligencia en el dispositivo de Samsung, construida sobre la familia de LLM propia de Samsung, Gauss, más la integración con Gemini. Lanzada con el Galaxy S24, perfeccionada en el S25 y ampliada en el S26 (lanzamiento el 25 de febrero de 2026), equilibra el procesamiento local para privacidad con funciones cloud para más potencia.',
          'El Personal Data Engine (PDE) es el núcleo: aprende de tus datos en el dispositivo — mensajes, calendario, fotos, historial de ubicación — sin enviar nada a los servidores de Samsung a menos que actives explícitamente funciones cloud. Knox Vault, un enclave de seguridad por hardware, aísla los datos sensibles (credenciales, historial médico, información de pago) incluso del propio software de Samsung.',
          'Las funciones de Galaxy AI se dividen en tres categorías: puramente en el dispositivo (Filtrado de Llamadas), híbridas con local por defecto (Now Nudge, Now Brief, Detección de Fraude), y dependientes de cloud (Creative Studio, agentes Gemini, Circle to Search).',
          'El control del usuario es central: un solo toggle en los ajustes de Galaxy AI — "Procesar datos solo en el dispositivo" — bloquea todo el fallback en cloud para funciones compatibles. No es una idea de privacidad tardía; es el comportamiento por defecto a menos que pidas más potencia.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Galaxy AI ejecuta funciones en el dispositivo mediante el Personal Data Engine (PDE) y funciones cloud bajo demanda, con un solo toggle para forzar el procesamiento exclusivo en el dispositivo.' },
          { type: 'plain-terms', text: 'Knox Vault = bloqueo por hardware para secretos; PDE = aprende de tu teléfono sin subir datos; toggle = tu elección de si las funciones cloud están activas.' }
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
          { 'Función': 'Detección de Fraude', 'Procesamiento': 'En el dispositivo (NPU + modelo Gemini)', '¿Envía Datos de Usuario?': 'No — audio de llamada e intención marcados localmente', '¿Requiere Red?': 'No' },
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
        imageCaption: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 en el Galaxy S26: 2nm GAA vs 3nm FinFET, +113% vs +39% de IA generación a generación, Stable Diffusion 2,4 veces más rápido, y ancho de banda de memoria LPDDR5X de 85,6 GB/s vs 84,8 GB/s.',
        columns: ['Métrica', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', '¿Ganador para IA Local?'],
        rows: [
          { 'Métrica': 'Nodo / Fábrica', 'Exynos 2600': '2nm GAA (Samsung SF2)', 'Snapdragon 8 Elite Gen 5': '3nm FinFET (TSMC)', '¿Ganador para IA Local?': 'Exynos (más pequeño, más eficiente)' },
          { 'Métrica': 'Rendimiento IA generación a generación', 'Exynos 2600': '+113% vs Exynos 2500', 'Snapdragon 8 Elite Gen 5': '+39% NPU vs S25', '¿Ganador para IA Local?': 'Exynos (salto 3 veces mayor)' },
          { 'Métrica': 'Velocidad Stable Diffusion', 'Exynos 2600': '2,4 veces más rápido que Exynos 2500', 'Snapdragon 8 Elite Gen 5': 'Sin benchmark de Stable Diffusion publicado', '¿Ganador para IA Local?': 'Exynos (verificado; Snapdragon pendiente)' },
          { 'Métrica': 'Regiones/variantes disponibles', 'Exynos 2600': 'S26 (global), S26+ (global)', 'Snapdragon 8 Elite Gen 5': 'S26 (EE.UU./China/Japón), S26 Ultra (todas las regiones)', '¿Ganador para IA Local?': 'Exynos (disponibilidad global)' },
          { 'Métrica': 'Ancho de banda de memoria', 'Exynos 2600': 'LPDDR5X 85,6 GB/s (típico)', 'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84,8 GB/s (típico)', '¿Ganador para IA Local?': 'Exynos (marginalmente superior)' },
          { 'Métrica': 'Veredicto', 'Exynos 2600': 'Mejor para LLM y generación de imágenes en el dispositivo', 'Snapdragon 8 Elite Gen 5': 'Competitivo; disponibilidad de EdgeFusion no clara', '¿Ganador para IA Local?': 'Exynos (elige S26/S26+ sobre S26 Ultra)' }
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
          'Mejores herramientas: MLC Chat (multiplataforma, modelos de la comunidad) y Ollama para Android (si está disponible en tu fecha de lanzamiento). Ambos soportan modelos cuantificados. Empieza con un modelo 7B (Mistral 7B, Llama 2 7B, Phi 2.7B) con cuantificación Q4 o Q5.'
        ],
        items: [
          'Usa cuantificación Q4 (4-bit) para modelos 7B; Q3 (3-bit) cabe en modelos más grandes pero pierde calidad',
          'Evita los modelos de precisión completa FP16; son demasiado grandes para un rendimiento práctico',
          'Mejores modelos de peso abierto para móvil: Mistral 7B, Phi 2.7B, TinyLlama 1.1B',
          'Velocidad esperada: 8-15 tokens/seg para 7B Q4; 3-5 tokens/seg para 7B sin cuantificar',
          'Usa MLC Chat u Ollama; ambos se auto-optimizan para Exynos/Snapdragon',
          'Prueba sin conexión: si Ollama cachea el modelo, la inferencia funciona completamente sin internet'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Privacidad en el Galaxy S26: ¿Qué Sale de tu Dispositivo?',
        content: [
          'Knox Vault es el módulo de seguridad por hardware de Samsung: un procesador separado aislado de la CPU principal y del sistema operativo Android. Los datos sensibles — métodos de pago, huellas dactilares, historial médico, contraseñas — viven en Knox Vault y nunca se exponen a las apps ni a los servidores de Samsung sin una acción explícita del usuario.',
          'El Personal Data Engine (PDE) aprende localmente: los modelos de machine learning en el dispositivo se entrenan con tus patrones de uso, calendario, mensajes, fotos y contactos. Por defecto, estos datos nunca tocan la nube de Samsung. Controlas el límite con el toggle "Procesar datos solo en el dispositivo" en los ajustes de Galaxy AI.',
          'Las funciones cloud son opcionales: Creative Studio, los agentes Gemini y Circle to Search requieren tu permiso y envían datos a los servidores de Samsung y Google respectivamente. Cada función tiene su propia política de privacidad. Desactivar estas funciones evita cualquier transmisión a la nube.',
          'Privacidad entre dispositivos: Knox Matrix sincroniza los ajustes de seguridad y los datos cifrados entre tus dispositivos Galaxy usando cifrado de extremo a extremo. Samsung actúa como relé, no como capa de descifrado.',
          'Suposición por defecto: si no has activado explícitamente una función cloud, tus datos permanecen locales. Esto es lo opuesto a Apple Intelligence (cloud PCC siempre activo para funciones avanzadas) y lo opuesto a Google Gemini (integración cloud más estrecha por defecto).'
        ],
        items: [
          'Knox Vault = enclave aislado por hardware para secretos; procesador separado, SO separado, nunca sincronizado a la nube',
          'PDE = motor de aprendizaje local; entrena con tus datos sin subirlos',
          'Toggle "Procesar datos solo en el dispositivo" = bloquea todo el fallback en cloud para funciones compatibles',
          'Creative Studio = depende de la nube; desactivarlo evita la transmisión de datos de generación de imágenes',
          'Agentes Gemini = impulsados por Google; usa tu cuenta de Google para tareas multi-paso',
          'Knox Matrix = sincronización entre dispositivos con cifrado de extremo a extremo; Samsung ve blobs cifrados, no texto plano'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          { q: '¿Galaxy AI es completamente local o usa la nube?', a: 'Híbrido. Filtrado de Llamadas, Now Nudge, Now Brief y Detección de Fraude se ejecutan completamente en el dispositivo usando el Personal Data Engine. La generación de imágenes (Creative Studio), los agentes Gemini y Circle to Search requieren servidores cloud. Activa "Procesar datos solo en el dispositivo" en ajustes para forzar el procesamiento exclusivamente local en las funciones compatibles.' },
          { q: '¿Cuál es la diferencia entre el Exynos 2600 y el Snapdragon 8 Elite Gen 5?', a: 'El Exynos 2600 (2nm, Samsung Foundry) es +113% más rápido en IA que el Exynos 2500 de la generación anterior. El Snapdragon 8 Elite Gen 5 (3nm, TSMC) es +39% más rápido en NPU que el Snapdragon 8 Gen 1 (S25). El Exynos 2600 es el claro ganador para inferencia LLM en el dispositivo; es 2,4 veces más rápido en Stable Diffusion.' },
          { q: '¿Puedo ejecutar un modelo de lenguaje grande en el Galaxy S26?', a: 'Sí, pero con límites. El ancho de banda LPDDR5X (85,6 GB/s) limita el rendimiento de decodificación. Un modelo 7B cuantificado a Q4 alcanza ~24 tokens/seg como máximo teórico (~8-15 realistas). Usa MLC Chat u Ollama para Android. Los modelos más grandes (13B, 70B) son poco prácticos por las limitaciones de memoria y ancho de banda.' },
          { q: '¿Galaxy AI funciona sin conexión?', a: 'Parcialmente. Filtrado de Llamadas, Now Nudge, Now Brief, Detección de Fraude y los LLM en el dispositivo (si se ejecutan vía Ollama) funcionan completamente sin conexión. Creative Studio, los agentes Gemini y Circle to Search requieren internet. Activa "Procesar datos solo en el dispositivo" para asegurarte de que las funciones compatibles no intenten el fallback en cloud.' },
          { q: '¿Qué es EdgeFusion y llega al Galaxy S26?', a: 'EdgeFusion es la versión optimizada de Stable Diffusion de Nota AI para NPU móviles, que genera imágenes de 512×512 en menos de 1 segundo en el Exynos 2600. Samsung se asoció oficialmente con Nota AI, pero "EdgeFusion" nunca se nombró en los materiales oficiales de Galaxy Unpacked. Creative Studio (la app de generación de imágenes que realmente se distribuye) requiere red + cuenta Samsung, así que el estado exacto de EdgeFusion en el lanzamiento no está claro.' },
          { q: '¿Qué datos recopila Samsung mediante Galaxy AI?', a: 'Por defecto, ninguno. El Personal Data Engine se mantiene local. Cuando activas funciones cloud — Creative Studio, agentes Gemini — se envían datos a Samsung (para Galaxy AI) o a Google (para Gemini). Desactiva estas funciones para evitar la transmisión. Revisa Ajustes > Privacidad > Galaxy AI para ver un desglose de qué está activado.' },
          { q: '¿Knox Vault protege mis datos incluso de Samsung?', a: 'Sí. Knox Vault es un procesador de hardware separado, aislado del sistema operativo principal. Los datos sensibles (biometría, información de pago, historial médico) almacenados en Knox Vault no pueden ser accedidos por apps de Android ni por el software de Samsung sin un desbloqueo explícito. Ni siquiera los ingenieros de Samsung pueden extraer datos de Knox Vault sin acceso físico al dispositivo y escalada de privilegios.' },
          { q: '¿Puedo desactivar por completo las funciones cloud de Galaxy AI?', a: 'Sí. Desactiva funciones individuales en Ajustes > Galaxy AI. Puedes alternar Creative Studio, los agentes Gemini y Circle to Search de forma independiente. Activa "Procesar datos solo en el dispositivo" para bloquear el fallback en cloud en las funciones compatibles. Las funciones en el dispositivo (Filtrado de Llamadas, Now Nudge) siguen funcionando.' },
          { q: '¿Es el Galaxy S26 mejor que el iPhone para ejecutar IA local?', a: 'Para ejecutar tus propios LLM cuantificados, sí. El Exynos 2600 es más rápido en Stable Diffusion que el NPU A18 Pro de Apple, y Android soporta más herramientas de modelos de peso abierto (Ollama, MLC Chat). Pero la filosofía on-device-first de Apple y su PCC criptográficamente auditable lo hacen más fuerte en privacidad si confías más en la infraestructura de Apple que en la de Samsung.' },
          { q: '¿Con qué frecuencia se actualizarán las funciones de Galaxy AI?', a: 'Las funciones de Galaxy AI se despliegan mediante actualizaciones de One UI (normalmente parches de seguridad mensuales + actualizaciones de funciones trimestrales). Samsung se comprometió a 7 años de actualizaciones de SO y 7 años de parches de seguridad para el Galaxy S26, así que espera nuevas funciones de Galaxy AI y mejoras de rendimiento hasta 2033.' }
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
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', 'headline': 'Ejecutar IA Local en Galaxy S26: IA en Dispositivo Explicada (2026)', 'description': 'Galaxy S26 IA en dispositivo explicada: qué funciones Galaxy AI se ejecutan localmente, cuáles necesitan cloud, y cómo ejecutar Ollama o MLC Chat en Exynos 2600 o Snapdragon 8 Elite Gen 5.', 'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png', 'datePublished': '2026-06-15', 'dateModified': '2026-08-29', 'author': { '@type': 'Organization', 'name': 'PromptQuorum' }, 'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, 'inLanguage': 'es', 'url': 'https://www.promptquorum.com/es/local-llms/galaxy-s26-local-ai-on-device-2026', 'articleBody': 'El Galaxy S26, lanzado el 25 de febrero de 2026, trae la plataforma híbrida de IA local y cloud de Samsung — Galaxy AI — a tu bolsillo.' },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'es', 'mainEntity': [
      { '@type': 'Question', 'name': '¿Galaxy AI es completamente local o usa la nube?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Híbrido. Filtrado de Llamadas, Now Nudge, Now Brief y Detección de Fraude se ejecutan completamente en el dispositivo usando el Personal Data Engine. La generación de imágenes (Creative Studio), los agentes Gemini y Circle to Search requieren servidores cloud.' } },
      { '@type': 'Question', 'name': '¿Cuál es la diferencia entre el Exynos 2600 y el Snapdragon 8 Elite Gen 5?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El Exynos 2600 (2nm, Samsung Foundry) es +113% más rápido en IA que el Exynos 2500. El Snapdragon 8 Elite Gen 5 (3nm, TSMC) es +39% más rápido en NPU que el Snapdragon 8 Gen 1 (S25). El Exynos 2600 es el claro ganador para inferencia LLM en el dispositivo; es 2,4 veces más rápido en Stable Diffusion.' } }
    ] }
  },
  ja: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-29',
    last_full_refresh: '2026-08-29',
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-ja.webp',
    title: 'Galaxy S26 でのローカル AI 実行: オンデバイス AI を完全解説 (2026)',
    seoTitle: 'Galaxy S26 オンデバイス AI: 仕組みと動作原理',
    intro: '2026年2月25日にリリースされたGalaxy S26は、Samsungのハイブリッドなオンデバイス・クラウド AI プラットフォーム「Galaxy AI」をあなたのポケットに持ち込みます。Appleのオンデバイスファーストなアプローチとは異なり、Samsungはローカル処理とクラウド機能のバランスを取り、あなたのデータがどこで処理されるかを選択させてくれます。このガイドではGalaxy AIが実際にオンデバイスで何をするのか、どの機能がクラウドを必要とするのか、そしてS26のハードウェア上で独自のオープンウェイトLLMを実行する方法について説明します。',
    metaDescription: 'Galaxy S26 オンデバイス AI 解説: Galaxy AI機能のうちローカル実行されるもの、クラウドが必要なもの、およびExynos 2600またはSnapdragon 8 Elite Gen 5でOllamaやMLC Chatを実行する方法。',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '10分読了',
    educationalLevel: 'Intermediate',
    audience: 'オンデバイスAIに関心があるAndroidユーザー、Galaxy S26購入者、モバイルLLM推論を探索している開発者',
    primaryTerm: 'Galaxy S26 オンデバイス AI',
    targetKeywords: ['galaxy s26 オンデバイス ai', 'galaxy ai機能', 'exynos 2600 ai', 'snapdragon 8 elite gen 5 npu', 'androidオンデバイスai', 'galaxy s26でllmを実行'],
    leadAnswerBlock: '**Galaxy S26はGalaxy AIを実行します。これはオンデバイス処理(通話フィルタリング、Now Nudge、詐欺検出)とクラウド機能(Creative Studioイメージ生成、Gemini統合)を混合するハイブリッドプラットフォームです。プライバシートグルで制御: 「デバイスのみでデータ処理」はすべてをローカル処理に制限します。Exynos 2600 (2nm GAA、S25比+113% AI)はSnapdragon 8 Elite Gen 5よりもオンデバイス推論で大幅に高速で、グローバルS26/S26+がローカルAIの最適な選択肢です。独自のLLM実行の場合: Q4 (4ビット)で量子化された7Bモデルはは理論値で約24トークン/秒をLPDDR5X 85.6 GB/sで達成します。**',
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
        answer: '通話フィルタリング(通話をローカルで応答)、Now Nudge(コンテキスト提案)、Now Brief(個人用ダイジェスト)、詐欺検出はすべてPersonal Data Engine(PDE)を使用してローカルでデータを処理します。Galaxy AI設定で「デバイスのみでデータを処理」を有効にすると、サポートされている機能のクラウドフォールバックをブロックできます。イメージ生成(Creative Studio)はクラウドのみに依存し、Samsungアカウントとネットワーク接続が必要です。',
        bullets: [
          '通話フィルタリングはクラウドのラウンドトリップなしにローカルでスパム通話をフィルタリングします',
          'Now Nudgeは画面コンテキストをローカルで読み取り、ワンタップ提案を表示します',
          '詐欺検出はローカルGeminiモデルを実行して、詐欺電話をリアルタイムでフラグを立てます',
          '「デバイスのみでデータを処理」トグルを有効にして、ローカル処理を強制します',
          'Creative Studioのイメージ生成はクラウドのみ(Samsungアカウント+ネットワークが必要)',
          'Exynos 2600はStable DiffusionでExynos 2500の2.4倍高速です'
        ],
        updatedDate: '2026-06-15'
      }
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Galaxy AIはハイブリッドプラットフォームです：通話フィルタリング、Now Nudge、Now Brief、詐欺検出はPersonal Data Engine（PDE）を通じて100%オンデバイスで実行されます。Creative Studioの画像生成とGemini統合はクラウドサーバーを必要とします。',
          'Galaxy S26は地域によってハードウェアが分かれます：Exynos 2600（欧州・韓国・インド）はExynos 2500よりAI性能が+113%高速で、Snapdragon 8 Elite Gen 5（米国・中国・日本）はS25比+39%のNPU性能向上を提供します。Exynos 2600がローカルLLM推論により適したチップです。',
          'プライバシートグル：「デバイスのみでデータを処理」を設定 > Galaxy AIで有効にすると、クラウドフォールバックを防止できます。Knox Vaultのハードウェアセキュリティエンクレーブが機密データを保護し、Knox Matrixがデバイス間で設定を同期します。',
          'オンデバイス画像生成：SamsungはNota AIと提携してEdgeFusionを開発し、LCMベースのStable Diffusion最適化を用いてExynos 2600のNPU上で512×512画像を1秒未満で生成します。Creative Studio（ユーザー向けアプリ）はネットワークとSamsungアカウントを必要とします。',
          '独自のLLMを実行する：LPDDR5Xメモリ（85.6 GB/s）がデコードスループットを制限します。Q4（4ビット、約3.5 GB）で量子化された7Bモデルは理論上最大約24トークン/秒に達します。MLC ChatまたはOllama for Androidでテストしてください。',
          'Snapdragonメモリ：米国・中国・日本のS26およびS26 Ultraバリアントは、Snapdragon 8 Elite Gen 5（84.8 GB/s LPDDR5X）を使用しており、メモリではなくNPU性能の低さにより、Exynos 2600よりもLLM推論がわずかに遅くなります。'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'Galaxy S26のGalaxy AIとは？',
        content: [
          'Galaxy AIは、Samsung独自の大規模言語モデルファミリーであるGaussとGemini統合を基盤とした、Samsungのオンデバイスインテリジェンスプラットフォームです。Galaxy S24で発表され、S25で改良され、S26（2026年2月25日発売）で拡張され、プライバシーのためのローカル処理とパワーのためのクラウド機能のバランスを取っています。',
          'Personal Data Engine（PDE）が中核です：メッセージ、カレンダー、写真、位置情報履歴などデバイス上のデータから学習しますが、クラウド機能に明示的に同意しない限り、Samsungのサーバーには何も送信しません。ハードウェアセキュリティエンクレーブであるKnox Vaultは、認証情報、健康記録、決済情報などの機密データを、Samsung自身のソフトウェアからも隔離します。',
          'Galaxy AIの機能は3つのカテゴリに分かれます：純粋なオンデバイス（通話フィルタリング）、ローカル優先のデフォルトを持つハイブリッド（Now Nudge、Now Brief、詐欺検出）、そしてクラウド依存（Creative Studio、Geminiエージェント、Circle to Search）です。',
          'ユーザーの制御が中心です：Galaxy AI設定内の単一のトグル—「デバイスのみでデータを処理」—が、対応機能のすべてのクラウドフォールバックをブロックします。これはプライバシーの後付けではなく、より高い性能を求めない限りのデフォルトの動作です。'
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
          { '機能': '詐欺検出', '処理方式': 'オンデバイス（NPU + Geminiモデル）', 'ユーザーデータ送信？': 'なし — 通話音声と意図をローカルでフラグ付け', 'ネットワーク必要？': '不要' },
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
          '性能：Exynos 2600のNPUで検証済みで、512×512画像を1秒未満で生成します。Exynos 2600はExynos 2500よりStable Diffusionで2.4倍高速なので、これは現実的な数値です。米国・中国・日本向けのSnapdragon 8 Elite Gen 5バリアントは、NPU性能がやや低いため、同程度かわずかに長い時間になる可能性があります。',
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
        imageCaption: 'Galaxy S26におけるExynos 2600 vs Snapdragon 8 Elite Gen 5：2nm GAA vs 3nm FinFET、世代間AI性能+113% vs +39%、Stable Diffusion 2.4倍高速、LPDDR5Xメモリ帯域幅85.6 GB/s vs 84.8 GB/s。',
        columns: ['指標', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', 'ローカルAIの勝者は？'],
        rows: [
          { '指標': 'プロセスノード/製造', 'Exynos 2600': '2nm GAA（Samsung SF2）', 'Snapdragon 8 Elite Gen 5': '3nm FinFET（TSMC）', 'ローカルAIの勝者は？': 'Exynos（より小型で高効率）' },
          { '指標': '世代間AI性能', 'Exynos 2600': 'Exynos 2500比+113%', 'Snapdragon 8 Elite Gen 5': 'S25比NPU+39%', 'ローカルAIの勝者は？': 'Exynos（3倍大きな飛躍）' },
          { '指標': 'Stable Diffusion速度', 'Exynos 2600': 'Exynos 2500より2.4倍高速', 'Snapdragon 8 Elite Gen 5': '公表されたStable Diffusionベンチマークなし', 'ローカルAIの勝者は？': 'Exynos（検証済み、Snapdragonは未定）' },
          { '指標': '利用可能な地域/バリアント', 'Exynos 2600': 'S26（グローバル）、S26+（グローバル）', 'Snapdragon 8 Elite Gen 5': 'S26（米国/中国/日本）、S26 Ultra（全地域）', 'ローカルAIの勝者は？': 'Exynos（グローバル展開）' },
          { '指標': 'メモリ帯域幅', 'Exynos 2600': 'LPDDR5X 85.6 GB/s（標準）', 'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84.8 GB/s（標準）', 'ローカルAIの勝者は？': 'Exynos（わずかに高い）' },
          { '指標': '総評', 'Exynos 2600': 'オンデバイスLLMと画像生成に最適', 'Snapdragon 8 Elite Gen 5': '競争力あり、EdgeFusion対応は不明', 'ローカルAIの勝者は？': 'Exynos（S26 UltraよりS26/S26+を選択）' }
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
          '推奨ツール：MLC Chat（クロスプラットフォーム、コミュニティモデル）とOllama for Android（発売日に利用可能な場合）。どちらも量子化モデルをサポートします。Q4またはQ5量子化の7Bモデル（Mistral 7B、Llama 2 7B、Phi 2.7B）から始めてください。'
        ],
        items: [
          '7BモデルにはQ4（4ビット）量子化を使用。Q3（3ビット）はより大きなモデルに対応できますが品質が低下します',
          'FP16フル精度モデルは避けてください。実用的なスループットには大きすぎます',
          'モバイル向けの最良のオープンウェイトモデル：Mistral 7B、Phi 2.7B、TinyLlama 1.1B',
          '予想速度：7B Q4で8-15トークン/秒、非量子化7Bで3-5トークン/秒',
          'MLC ChatまたはOllamaを使用してください。どちらもExynos/Snapdragon向けに自動最適化されます',
          'オフラインでテスト：Ollamaがモデルをキャッシュしていれば、推論は完全にインターネットなしで動作します'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Galaxy S26のプライバシー：デバイスから出るものは？',
        content: [
          'Knox Vaultは、Samsungのハードウェアセキュリティモジュールです：メインCPUとAndroid OSから隔離された独立したプロセッサです。決済情報、指紋、健康記録、パスワードなどの機密データはKnox Vault内に保存され、ユーザーの明示的な操作なしにアプリやSamsungのサーバーに公開されることはありません。',
          'Personal Data Engine（PDE）はローカルで学習します：オンデバイスの機械学習モデルが、利用パターン、カレンダー、メッセージ、写真、連絡先を学習します。デフォルトでは、このデータがSamsungのクラウドに触れることはありません。Galaxy AI設定内の「デバイスのみでデータを処理」トグルで境界を制御できます。',
          'クラウド機能はオプトインです：Creative Studio、Geminiエージェント、Circle to Searchはあなたの許可を必要とし、それぞれSamsungとGoogleのサーバーにデータを送信します。各機能には独自のプライバシーポリシーがあります。これらの機能を無効にすると、クラウドへの送信を防止できます。',
          'デバイス間のプライバシー：Knox Matrixはエンドツーエンド暗号化を使用して、Galaxyデバイス間でセキュリティ設定と暗号化データを同期します。Samsungは復号レイヤーではなく中継役として機能します。',
          'デフォルトの想定：クラウド機能を明示的に有効にしていない限り、データはローカルに留まります。これはApple Intelligence（高度な機能のため常時オンのクラウドPCC）とは正反対であり、Google Gemini（デフォルトでより緊密なクラウド統合）とも正反対です。'
        ],
        items: [
          'Knox Vault = 機密情報のためのハードウェア隔離エンクレーブ。独立したプロセッサ、独立したOS、クラウドとは決して同期されない',
          'PDE = ローカル学習エンジン。データをアップロードせずにあなたのデータから学習',
          '「デバイスのみでデータを処理」トグル = 対応機能のすべてのクラウドフォールバックをブロック',
          'Creative Studio = クラウド依存。無効にすると画像生成データの送信を防止',
          'Geminiエージェント = Google駆動。複数ステップのタスクにGoogleアカウントを使用',
          'Knox Matrix = エンドツーエンド暗号化を使用したデバイス間同期。Samsungは暗号化されたデータブロックのみを見て、平文は見えない'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Galaxy AIは完全にオンデバイスですか、それともクラウドを使用しますか？', a: 'ハイブリッドです。通話フィルタリング、Now Nudge、Now Brief、詐欺検出はPersonal Data Engineを使用して完全にオンデバイスで実行されます。画像生成（Creative Studio）、Geminiエージェント、Circle to Searchはクラウドサーバーを必要とします。対応機能でローカルのみの処理を強制するには、設定で「デバイスのみでデータを処理」を有効にしてください。' },
          { q: 'Exynos 2600とSnapdragon 8 Elite Gen 5の違いは何ですか？', a: 'Exynos 2600（2nm、Samsung Foundry）は、前世代のExynos 2500よりAI性能が+113%高速です。Snapdragon 8 Elite Gen 5（3nm、TSMC）は、Snapdragon 8 Gen 1（S25）よりNPU性能が+39%高速です。オンデバイスLLM推論にはExynos 2600が明確な勝者で、Stable Diffusionで2.4倍高速です。' },
          { q: 'Galaxy S26で大規模言語モデルを実行できますか？', a: 'はい、ただし制限があります。LPDDR5X帯域幅（85.6 GB/s）がデコードスループットの上限となります。Q4で量子化された7Bモデルは理論上最大約24トークン/秒（現実的には約8-15トークン/秒）に達します。MLC ChatまたはOllama for Androidを使用してください。13Bや70Bなどの大規模モデルは、メモリと帯域幅の制約により実用的ではありません。' },
          { q: 'Galaxy AIはオフラインで動作しますか？', a: '部分的に動作します。通話フィルタリング、Now Nudge、Now Brief、詐欺検出、そして（Ollama経由で実行している場合の）オンデバイスLLMは完全にオフラインで動作します。Creative Studio、Geminiエージェント、Circle to Searchはインターネットを必要とします。対応機能がクラウドフォールバックを試みないようにするには、「デバイスのみでデータを処理」を有効にしてください。' },
          { q: 'EdgeFusionとは何ですか？Galaxy S26に搭載されていますか？', a: 'EdgeFusionは、モバイルNPU向けに最適化されたNota AIのStable Diffusionで、Exynos 2600上で512×512画像を1秒未満で生成します。Samsungは公式にNota AIと提携していますが、「EdgeFusion」という名称は公式のGalaxy Unpacked資料で一度も使用されていません。実際に出荷されている画像生成アプリCreative Studioはネットワークとサムスンアカウントを必要とするため、発売時点でのEdgeFusionの正確な状況は不明です。' },
          { q: 'Samsungは Galaxy AIを通じてどのようなデータを収集しますか？', a: 'デフォルトでは何も収集しません。Personal Data Engineはローカルに留まります。クラウド機能（Creative Studio、Geminiエージェント）を有効にすると、データはSamsung（Galaxy AI用）またはGoogle（Gemini用）に送信されます。送信を防ぐにはこれらの機能を無効にしてください。有効になっている内容の内訳は設定 > プライバシー > Galaxy AIで確認できます。' },
          { q: 'Knox VaultはSamsungからもデータを保護しますか？', a: 'はい。Knox Vaultは、メインOSから隔離された独立したハードウェアプロセッサです。Knox Vaultに保存された機密データ（生体認証、決済情報、健康情報）は、明示的な解除なしにAndroidアプリやSamsungのソフトウェアからアクセスできません。Samsungのエンジニアであっても、物理的なデバイスへのアクセスと権限昇格なしにKnox Vaultのデータを抽出することはできません。' },
          { q: 'Galaxy AIのクラウド機能を完全に無効にできますか？', a: 'はい。設定 > Galaxy AIで個別の機能を無効にできます。Creative Studio、Geminiエージェント、Circle to Searchをそれぞれ独立して切り替えられます。「デバイスのみでデータを処理」を有効にすると、対応機能のクラウドフォールバックをブロックできます。オンデバイス機能（通話フィルタリング、Now Nudge）は引き続き動作します。' },
          { q: 'ローカルAIの実行にはGalaxy S26はiPhoneより優れていますか？', a: '独自の量子化LLMを実行する場合はイエスです。Exynos 2600はAppleのA18 Pro NPUよりStable Diffusionで高速で、Androidはより多くのオープンウェイトモデルツール（Ollama、MLC Chat）をサポートします。ただし、AppleのオンデバイスファーストのフィロソフィーとPCCの暗号学的監査可能性は、SamsungよりもAppleのインフラを信頼する場合にはプライバシー面でより強力です。' },
          { q: 'Galaxy AIの機能はどのくらいの頻度で更新されますか？', a: 'Galaxy AIの機能はOne UIアップデート（通常は月次のセキュリティパッチと四半期ごとの機能アップデート）を通じて展開されます。SamsungはGalaxy S26に対して7年間のOSアップデートと7年間のセキュリティパッチを約束しているため、2033年まで新しいGalaxy AI機能と性能改善が期待できます。' }
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
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', 'headline': 'Galaxy S26 でのローカル AI 実行: オンデバイス AI を完全解説 (2026)', 'description': 'Galaxy S26 オンデバイス AI 解説: Galaxy AI機能のうちローカル実行されるもの、クラウドが必要なもの、およびExynos 2600またはSnapdragon 8 Elite Gen 5でOllamaやMLC Chatを実行する方法。', 'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png', 'datePublished': '2026-06-15', 'dateModified': '2026-08-29', 'author': { '@type': 'Organization', 'name': 'PromptQuorum' }, 'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, 'inLanguage': 'ja', 'url': 'https://www.promptquorum.com/ja/local-llms/galaxy-s26-local-ai-on-device-2026', 'articleBody': '2026年2月25日にリリースされたGalaxy S26は、Samsungのハイブリッドなオンデバイス・クラウド AI プラットフォーム「Galaxy AI」をあなたのポケットに持ち込みます。' },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'ja', 'mainEntity': [
      { '@type': 'Question', 'name': 'Galaxy AIは完全にオンデバイスですか、それともクラウドを使用しますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'ハイブリッドです。通話フィルタリング、Now Nudge、Now Brief、詐欺検出はPersonal Data Engineを使用して完全にオンデバイスで実行されます。画像生成（Creative Studio）、Geminiエージェント、Circle to Searchはクラウドサーバーを必要とします。' } },
      { '@type': 'Question', 'name': 'Exynos 2600とSnapdragon 8 Elite Gen 5の違いは何ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Exynos 2600（2nm、Samsung Foundry）は、前世代のExynos 2500よりAI性能が+113%高速です。Snapdragon 8 Elite Gen 5（3nm、TSMC）は、Snapdragon 8 Gen 1（S25）よりNPU性能が+39%高速です。オンデバイスLLM推論にはExynos 2600が明確な勝者で、Stable Diffusionで2.4倍高速です。' } }
    ] }
  },
  zh: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-29',
    last_full_refresh: '2026-08-29',
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-zh.webp',
    title: '在Galaxy S26上运行本地AI: 本地设备AI解析指南 (2026)',
    seoTitle: 'Galaxy S26本地设备AI: Galaxy AI工作原理与本地运行方式',
    intro: 'Galaxy S26于2026年2月25日推出,将三星的混合本地和云AI平台——Galaxy AI——带到您的口袋里。与苹果的本地优先方式不同,三星平衡了本地处理和云功能,让您选择数据去向。本指南解释了Galaxy AI在本地实际做什么,哪些功能需要云,以及如何在S26硬件上运行自己的开源LLM。',
    metaDescription: 'Galaxy S26本地设备AI解析: Galaxy AI哪些功能在本地运行、哪些需要云,以及如何在Exynos 2600或Snapdragon 8 Elite Gen 5上运行Ollama或MLC Chat。',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '10分钟阅读',
    educationalLevel: 'Intermediate',
    audience: '对本地设备AI感兴趣的安卓用户、Galaxy S26购买者、探索移动LLM推理的开发者',
    primaryTerm: 'Galaxy S26本地设备AI',
    targetKeywords: ['galaxy s26本地设备ai', 'galaxy ai功能', 'exynos 2600 ai', 'snapdragon 8 elite gen 5 npu', '本地设备ai安卓', '在galaxy s26上运行llm'],
    leadAnswerBlock: '**Galaxy S26运行Galaxy AI——混合平台混合本地处理(通话过滤、Now Nudge、欺诈检测)与云功能(Creative Studio图像生成、Gemini集成)。您控制隐私切换:"仅在设备上处理数据"限制所有处理为本地。Exynos 2600(2nm GAA,+113% AI vs S25)对本地推理的速度明显快于Snapdragon 8 Elite Gen 5,使全球S26/S26+成为本地AI的更好选择。对于运行自己的LLM,Q4(4位)量化的7B模型在LPDDR5X 85.6 GB/s上达到~24 tokens/sec。**',
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
        answer: '通话过滤(本地应答通话)、Now Nudge(上下文建议)、Now Brief(个人摘要)和欺诈检测都使用Personal Data Engine(PDE)在本地处理数据。您可以在Galaxy AI设置中启用"仅在设备上处理数据"来阻止支持功能的云回退。图像生成(Creative Studio)完全依赖云,需要三星账户和网络连接。',
        bullets: [
          '通话过滤在本地转录和路由垃圾电话,无需往返云端',
          'Now Nudge在本地读取屏幕上下文,并显示一键建议',
          '欺诈检测运行本地Gemini模型,实时标记欺诈电话',
          '启用"仅在设备上处理数据"开关以强制本地处理',
          'Creative Studio图像生成仅限云(需要三星账户+网络)',
          'Exynos 2600在Stable Diffusion上比Exynos 2500快2.4倍'
        ],
        updatedDate: '2026-06-15'
      }
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Galaxy AI是混合平台：通话过滤、Now Nudge、Now Brief和欺诈检测都通过Personal Data Engine（PDE）100%在本地设备上运行。Creative Studio图像生成和Gemini集成需要云服务器。',
          'Galaxy S26按地区划分硬件：Exynos 2600（欧洲/韩国/印度）的AI性能比Exynos 2500快+113%，而Snapdragon 8 Elite Gen 5（美国/中国/日本）比S25提升+39%的NPU性能。Exynos 2600是本地LLM推理更好的芯片。',
          '隐私开关：在设置 > Galaxy AI中启用"仅在设备上处理数据"以阻止云端回退。Knox Vault硬件安全隔离区保护敏感数据；Knox Matrix在设备间同步设置。',
          '本地设备图像生成：三星与Nota AI合作推出EdgeFusion，使用基于LCM的Stable Diffusion优化，在Exynos 2600 NPU上不到一秒即可生成512×512图像。Creative Studio（面向用户的应用）需要网络和三星账户。',
          '运行你自己的LLM：LPDDR5X内存（85.6 GB/s）限制了解码吞吐量。经Q4（4位）量化的7B模型（约3.5 GB）理论最大速度约为24 tokens/秒。使用MLC Chat或Ollama for Android进行测试。',
          'Snapdragon内存：美国/中国/日本的S26和S26 Ultra机型使用Snapdragon 8 Elite Gen 5（84.8 GB/s LPDDR5X），由于NPU性能较低（而非内存），LLM推理略慢于Exynos 2600。'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'Galaxy S26上的Galaxy AI是什么？',
        content: [
          'Galaxy AI是三星的本地设备智能平台，构建于三星自研的Gauss大语言模型系列以及Gemini集成之上。该平台随Galaxy S24推出，在S25上得到改进，并在S26（2026年2月25日发布）上进一步扩展，在隐私本地处理与云端功能强大性之间取得平衡。',
          'Personal Data Engine（PDE）是核心：它从你设备上的数据——短信、日历、照片、位置历史——中学习，除非你明确选择使用云端功能，否则不会向三星服务器发送任何内容。Knox Vault是一个硬件安全隔离区，即使对三星自己的软件，也会隔离敏感数据（凭证、健康记录、支付信息）。',
          'Galaxy AI功能分为三类：纯本地设备（通话过滤）、默认本地优先的混合模式（Now Nudge、Now Brief、欺诈检测），以及依赖云端（Creative Studio、Gemini智能体、Circle to Search）。',
          '用户控制是核心：Galaxy AI设置中的单个开关——"仅在设备上处理数据"——会阻止兼容功能的所有云端回退。这不是事后添加的隐私功能；除非你需要更强大的功能，否则这就是默认行为。'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Galaxy AI通过Personal Data Engine（PDE）运行本地设备功能，并按需运行云端功能，一个开关即可强制仅设备处理。' },
          { type: 'plain-terms', text: 'Knox Vault = 保护机密信息的硬件锁；PDE = 从你的手机学习而不上传数据；开关 = 你选择是否开启云端功能。' }
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
          { '功能': '欺诈检测', '处理方式': '本地设备（NPU + Gemini模型）', '是否发送用户数据？': '否——通话音频和意图在本地标记', '是否需要网络？': '否' },
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
        imageCaption: 'Galaxy S26上的Exynos 2600对比Snapdragon 8 Elite Gen 5：2nm GAA对比3nm FinFET，代际AI性能提升+113%对比+39%，Stable Diffusion快2.4倍，LPDDR5X内存带宽85.6 GB/s对比84.8 GB/s。',
        columns: ['指标', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', '本地AI的赢家？'],
        rows: [
          { '指标': '制程/代工厂', 'Exynos 2600': '2nm GAA（三星SF2）', 'Snapdragon 8 Elite Gen 5': '3nm FinFET（台积电）', '本地AI的赢家？': 'Exynos（更小、更高效）' },
          { '指标': '代际AI性能提升', 'Exynos 2600': '比Exynos 2500快+113%', 'Snapdragon 8 Elite Gen 5': '比S25的NPU快+39%', '本地AI的赢家？': 'Exynos（提升幅度大3倍）' },
          { '指标': 'Stable Diffusion速度', 'Exynos 2600': '比Exynos 2500快2.4倍', 'Snapdragon 8 Elite Gen 5': '未公布Stable Diffusion基准', '本地AI的赢家？': 'Exynos（已验证；Snapdragon待定）' },
          { '指标': '可用地区/机型', 'Exynos 2600': 'S26（全球）、S26+（全球）', 'Snapdragon 8 Elite Gen 5': 'S26（美国/中国/日本）、S26 Ultra（全地区）', '本地AI的赢家？': 'Exynos（全球可用）' },
          { '指标': '内存带宽', 'Exynos 2600': 'LPDDR5X 85.6 GB/s（典型值）', 'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84.8 GB/s（典型值）', '本地AI的赢家？': 'Exynos（略高）' },
          { '指标': '结论', 'Exynos 2600': '最适合本地设备LLM和图像生成', 'Snapdragon 8 Elite Gen 5': '具有竞争力；EdgeFusion是否可用尚不明确', '本地AI的赢家？': 'Exynos（选择S26/S26+而非S26 Ultra）' }
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
          '最佳工具：MLC Chat（跨平台，社区模型）和Ollama for Android（如果在你的发布日期可用）。两者都支持量化模型。建议从7B模型（Mistral 7B、Llama 2 7B、Phi 2.7B）以Q4或Q5量化开始。'
        ],
        items: [
          '7B模型使用Q4（4位）量化；Q3（3位）可容纳更大模型但会损失质量',
          '避免使用FP16全精度模型；对实际吞吐量而言体积过大',
          '移动端最佳开源模型：Mistral 7B、Phi 2.7B、TinyLlama 1.1B',
          '预期速度：7B Q4约为8-15 tokens/秒；未量化7B约为3-5 tokens/秒',
          '使用MLC Chat或Ollama；两者都会针对Exynos/Snapdragon自动优化',
          '离线测试：如果Ollama缓存了模型，推理可以完全在无网络的情况下运行'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Galaxy S26隐私：哪些数据会离开你的设备？',
        content: [
          'Knox Vault是三星的硬件安全模块：一个与主CPU和Android系统隔离的独立处理器。支付方式、指纹、健康记录、密码等敏感数据存储在Knox Vault中，未经用户明确操作，绝不会暴露给应用或三星的服务器。',
          'Personal Data Engine（PDE）在本地学习：本地设备上的机器学习模型会基于你的使用模式、日历、消息、照片和联系人进行训练。默认情况下，这些数据永远不会接触三星的云端。你可以通过Galaxy AI设置中的"仅在设备上处理数据"开关来控制这一边界。',
          '云端功能是可选启用的：Creative Studio、Gemini智能体和Circle to Search需要你的授权，并分别向三星和Google服务器发送数据。每项功能都有各自的隐私政策。禁用这些功能可阻止任何云端传输。',
          '跨设备隐私：Knox Matrix使用端到端加密在你的Galaxy设备之间同步安全设置和加密数据。三星充当中继，而非解密层。',
          '默认假设：如果你没有明确启用某项云端功能，你的数据将保留在本地。这与Apple Intelligence（高级功能始终依赖云端PCC）相反，也与Google Gemini（默认更紧密的云端集成）相反。'
        ],
        items: [
          'Knox Vault = 用于机密信息的硬件隔离区；独立处理器、独立系统，从不同步到云端',
          'PDE = 本地学习引擎；基于你的数据进行训练而不上传',
          '"仅在设备上处理数据"开关 = 阻止兼容功能的所有云端回退',
          'Creative Studio = 依赖云端；禁用它可阻止图像生成数据的传输',
          'Gemini智能体 = 由Google驱动；使用你的Google账户执行多步骤任务',
          'Knox Matrix = 使用端到端加密的跨设备同步；三星只能看到加密数据块，而非明文'
        ]
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Galaxy AI是完全本地的还是使用云端？', a: '混合模式。通话过滤、Now Nudge、Now Brief和欺诈检测完全使用Personal Data Engine在本地设备上运行。图像生成（Creative Studio）、Gemini智能体和Circle to Search需要云服务器。在设置中启用"仅在设备上处理数据"，可对支持的功能强制仅本地处理。' },
          { q: 'Exynos 2600和Snapdragon 8 Elite Gen 5有什么区别？', a: 'Exynos 2600（2nm，三星代工）的AI性能比上一代Exynos 2500快+113%。Snapdragon 8 Elite Gen 5（3nm，台积电）的NPU性能比Snapdragon 8 Gen 1（S25）快+39%。对于本地设备LLM推理，Exynos 2600明显更胜一筹，在Stable Diffusion上快2.4倍。' },
          { q: '我能在Galaxy S26上运行大语言模型吗？', a: '可以，但有限制。LPDDR5X带宽（85.6 GB/s）限制了解码吞吐量。经Q4量化的7B模型理论最大速度约为24 tokens/秒（实际约8-15 tokens/秒）。使用MLC Chat或Ollama for Android。更大的模型（13B、70B）由于内存和带宽限制并不实用。' },
          { q: 'Galaxy AI能离线使用吗？', a: '部分可以。通话过滤、Now Nudge、Now Brief、欺诈检测以及本地设备LLM（如果通过Ollama运行）可完全离线工作。Creative Studio、Gemini智能体和Circle to Search需要联网。启用"仅在设备上处理数据"可确保支持的功能不会尝试云端回退。' },
          { q: '什么是EdgeFusion，Galaxy S26上有吗？', a: 'EdgeFusion是Nota AI针对移动NPU优化的Stable Diffusion，可在Exynos 2600上不到1秒生成512×512图像。三星官方与Nota AI合作，但官方Galaxy Unpacked资料中从未提及"EdgeFusion"这个名称。实际发布的图像生成应用Creative Studio需要网络和三星账户，因此EdgeFusion在发布时的确切状态尚不清楚。' },
          { q: '三星通过Galaxy AI收集了哪些数据？', a: '默认情况下不收集任何数据。Personal Data Engine保持本地运行。当你启用云端功能——Creative Studio、Gemini智能体——数据会被发送至三星（用于Galaxy AI）或Google（用于Gemini）。禁用这些功能可防止数据传输。前往设置 > 隐私 > Galaxy AI查看已启用功能的明细。' },
          { q: 'Knox Vault能保护我的数据不被三星获取吗？', a: '可以。Knox Vault是与主系统隔离的独立硬件处理器。存储在Knox Vault中的敏感数据（生物识别、支付信息、健康信息）在没有明确解锁的情况下，无法被Android应用或三星软件访问。即使是三星的工程师，若没有物理设备访问权限和权限提升，也无法提取Knox Vault的数据。' },
          { q: '我能完全禁用Galaxy AI的云端功能吗？', a: '可以。在设置 > Galaxy AI中禁用单个功能。你可以独立开关Creative Studio、Gemini智能体和Circle to Search。启用"仅在设备上处理数据"可阻止支持功能的云端回退。本地设备功能（通话过滤、Now Nudge）会继续正常工作。' },
          { q: '在运行本地AI方面，Galaxy S26比iPhone更好吗？', a: '如果是运行你自己的量化LLM，答案是肯定的。Exynos 2600在Stable Diffusion上比苹果的A18 Pro NPU更快，且Android支持更多开源模型工具（Ollama、MLC Chat）。但如果你更信任苹果的基础设施而非三星，苹果的本地优先理念和可加密审计的PCC在隐私方面更具优势。' },
          { q: 'Galaxy AI功能多久更新一次？', a: 'Galaxy AI功能通过One UI更新推出（通常为月度安全补丁+季度功能更新）。三星承诺为Galaxy S26提供7年操作系统更新和7年安全补丁，因此预计到2033年都会有新的Galaxy AI功能和性能改进。' }
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
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', 'headline': '在Galaxy S26上运行本地AI: 本地设备AI解析指南 (2026)', 'description': 'Galaxy S26本地设备AI解析: Galaxy AI哪些功能在本地运行、哪些需要云,以及如何在Exynos 2600或Snapdragon 8 Elite Gen 5上运行Ollama或MLC Chat。', 'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png', 'datePublished': '2026-06-15', 'dateModified': '2026-08-29', 'author': { '@type': 'Organization', 'name': 'PromptQuorum' }, 'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, 'inLanguage': 'zh', 'url': 'https://www.promptquorum.com/zh/local-llms/galaxy-s26-local-ai-on-device-2026', 'articleBody': 'Galaxy S26于2026年2月25日推出,将三星的混合本地和云AI平台——Galaxy AI——带到您的口袋里。' },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'zh', 'mainEntity': [
      { '@type': 'Question', 'name': 'Galaxy AI是完全本地的还是使用云端？', 'acceptedAnswer': { '@type': 'Answer', 'text': '混合模式。通话过滤、Now Nudge、Now Brief和欺诈检测完全使用Personal Data Engine在本地设备上运行。图像生成（Creative Studio）、Gemini智能体和Circle to Search需要云服务器。' } },
      { '@type': 'Question', 'name': 'Exynos 2600和Snapdragon 8 Elite Gen 5有什么区别？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Exynos 2600（2nm，三星代工）的AI性能比上一代Exynos 2500快+113%。Snapdragon 8 Elite Gen 5（3nm，台积电）的NPU性能比Snapdragon 8 Gen 1（S25）快+39%。对于本地设备LLM推理，Exynos 2600明显更胜一筹，在Stable Diffusion上快2.4倍。' } }
    ] }
  },
  pt: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-29',
    last_full_refresh: '2026-08-29',
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-pt.webp',
    title: 'Executar IA Local no Galaxy S26: IA no Dispositivo Explicada (2026)',
    seoTitle: 'Galaxy S26 IA no Dispositivo: Como Funciona & O Que Roda Localmente',
    intro: 'O Galaxy S26, lançado em 25 de fevereiro de 2026, traz a plataforma híbrida de IA on-device e em nuvem da Samsung — Galaxy AI — ao seu bolso. Diferentemente da abordagem on-device-first da Apple, Samsung equilibra o processamento local com recursos em nuvem, deixando você escolher aonde seus dados vão. Este guia explica o que o Galaxy AI realmente faz no dispositivo, quais recursos exigem nuvem, e como executar seus próprios LLMs open-weight no hardware S26.',
    metaDescription: 'IA no dispositivo Galaxy S26 explicada: quais recursos do Galaxy AI rodam localmente, quais precisam de nuvem, e como executar Ollama ou MLC Chat localmente no Exynos 2600 ou Snapdragon 8 Elite Gen 5.',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários Android interessados em IA no dispositivo, compradores do Galaxy S26, desenvolvedores explorando inferência de LLM móvel',
    primaryTerm: 'Galaxy S26 IA no dispositivo',
    targetKeywords: ['galaxy s26 ia no dispositivo', 'recursos galaxy ai', 'exynos 2600 ia', 'snapdragon 8 elite gen 5 npu', 'ia no dispositivo android', 'executar llm no galaxy s26'],
    leadAnswerBlock: '**O Galaxy S26 executa Galaxy AI — uma plataforma híbrida que mistura processamento on-device (Bloqueio de Chamadas, Now Nudge, Detecção de Fraude) com recursos em nuvem (geração de imagens Creative Studio, integração Gemini). Você controla o toggle de privacidade: "Processar dados apenas no dispositivo" restringe tudo ao processamento local. O Exynos 2600 (2nm GAA, +113% de IA vs S25) é significativamente mais rápido para inferência on-device do que o Snapdragon 8 Elite Gen 5, tornando o S26/S26+ global a melhor escolha para IA local. Para executar seus próprios LLMs, modelos 7B quantizados em Q4 (4-bit) atingem ~24 tokens/seg em LPDDR5X 85,6 GB/s.**',
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
        answer: 'Bloqueio de Chamadas (atende chamadas localmente), Now Nudge (sugestões contextuais), Now Brief (resumos pessoais) e Detecção de Fraude processam dados localmente usando o Personal Data Engine (PDE). Você pode ativar "Processar dados apenas no dispositivo" nas configurações do Galaxy AI para bloquear fallback na nuvem para recursos compatíveis. A geração de imagens (Creative Studio) requer conexão de rede e sempre usa servidores de nuvem da Samsung.',
        bullets: [
          'Bloqueio de Chamadas transcreve e roteia chamadas de spam localmente sem ida e volta na nuvem',
          'Now Nudge lê o contexto da tela localmente e exibe sugestões com um toque',
          'A detecção de fraudes executa um modelo Gemini local para sinalizar chamadas fraudulentas em tempo real',
          'Ative o botão "Processar dados apenas no dispositivo" para forçar processamento local',
          'A geração de imagens do Creative Studio é apenas na nuvem (requer conta Samsung + rede)',
          'O Exynos 2600 é 2,4 vezes mais rápido em Stable Diffusion do que o Exynos 2500'
        ],
        updatedDate: '2026-06-15'
      }
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O Galaxy AI é uma plataforma híbrida: Bloqueio de Chamadas, Now Nudge, Now Brief e Detecção de Fraude rodam 100% no dispositivo via Personal Data Engine (PDE). A geração de imagens do Creative Studio e a integração com o Gemini exigem servidores em nuvem.',
          'O Galaxy S26 divide o hardware por região: o Exynos 2600 (Europa/Coreia/Índia) é +113% mais rápido em IA que o Exynos 2500, enquanto o Snapdragon 8 Elite Gen 5 (EUA/China/Japão) oferece +39% de NPU em relação ao S25. O Exynos 2600 é o melhor chip para inferência de LLM local.',
          'Toggle de privacidade: ative "Processar dados apenas no dispositivo" em Configurações > Galaxy AI para evitar o fallback para a nuvem. O Knox Vault (enclave de segurança em hardware) protege dados sensíveis; o Knox Matrix sincroniza configurações entre dispositivos.',
          'Geração de imagens no dispositivo: a Samsung fez parceria com a Nota AI no EdgeFusion, que gera imagens de 512×512 em menos de um segundo no NPU do Exynos 2600 usando otimização de Stable Diffusion baseada em LCM. O Creative Studio (o app voltado ao usuário) exige rede + conta Samsung.',
          'Executando seus próprios LLMs: a memória LPDDR5X (85,6 GB/s) limita o throughput de decodificação. Um modelo 7B quantizado em Q4 (4-bit, ~3,5 GB) atinge um máximo teórico de ~24 tokens/seg. Use o MLC Chat ou o Ollama para Android para testar.',
          'Memória Snapdragon: as variantes S26 e S26 Ultra nos EUA/China/Japão usam o Snapdragon 8 Elite Gen 5 (84,8 GB/s LPDDR5X), ligeiramente mais lento para inferência de LLM do que o Exynos 2600 devido ao desempenho do NPU, não da memória.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'O Que É o Galaxy AI no Galaxy S26?',
        content: [
          'O Galaxy AI é a plataforma de inteligência no dispositivo da Samsung, construída sobre a própria família de LLM da Samsung, o Gauss, mais a integração com o Gemini. Lançado com o Galaxy S24, refinado no S25 e expandido no S26 (lançamento em 25 de fevereiro de 2026), ele equilibra o processamento local para privacidade com recursos em nuvem para mais poder.',
          'O Personal Data Engine (PDE) é o núcleo: ele aprende a partir dos seus dados no dispositivo — mensagens, calendário, fotos, histórico de localização — sem enviar nada para os servidores da Samsung, a menos que você opte explicitamente por recursos em nuvem. O Knox Vault, um enclave de segurança em hardware, isola dados sensíveis (credenciais, registros de saúde, informações de pagamento) até mesmo do próprio software da Samsung.',
          'Os recursos do Galaxy AI se dividem em três categorias: puramente no dispositivo (Bloqueio de Chamadas), híbridos com padrão local-first (Now Nudge, Now Brief, Detecção de Fraude), e dependentes de nuvem (Creative Studio, agentes Gemini, Circle to Search).',
          'O controle do usuário é central: um único toggle nas configurações do Galaxy AI — "Processar dados apenas no dispositivo" — bloqueia todo fallback para a nuvem em recursos compatíveis. Isso não é uma ideia de privacidade tardia; é o comportamento padrão, a menos que você peça mais poder.'
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
          { 'Recurso': 'Detecção de Fraude', 'Processamento': 'No dispositivo (NPU + modelo Gemini)', 'Envia Dados do Usuário?': 'Não — áudio da chamada e intenção sinalizados localmente', 'Exige Rede?': 'Não' },
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
        imageCaption: 'Exynos 2600 vs. Snapdragon 8 Elite Gen 5 no Galaxy S26: 2nm GAA vs 3nm FinFET, +113% vs +39% de IA geração a geração, Stable Diffusion 2,4x mais rápido, e banda de memória LPDDR5X de 85,6 GB/s vs 84,8 GB/s.',
        columns: ['Métrica', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', 'Vencedor para IA Local?'],
        rows: [
          { 'Métrica': 'Node / Fábrica', 'Exynos 2600': '2nm GAA (Samsung SF2)', 'Snapdragon 8 Elite Gen 5': '3nm FinFET (TSMC)', 'Vencedor para IA Local?': 'Exynos (menor, mais eficiente)' },
          { 'Métrica': 'Desempenho de IA geração a geração', 'Exynos 2600': '+113% vs Exynos 2500', 'Snapdragon 8 Elite Gen 5': '+39% de NPU vs S25', 'Vencedor para IA Local?': 'Exynos (salto 3x maior)' },
          { 'Métrica': 'Velocidade do Stable Diffusion', 'Exynos 2600': '2,4x mais rápido que o Exynos 2500', 'Snapdragon 8 Elite Gen 5': 'Sem benchmark de Stable Diffusion publicado', 'Vencedor para IA Local?': 'Exynos (verificado; Snapdragon pendente)' },
          { 'Métrica': 'Regiões/variantes disponíveis', 'Exynos 2600': 'S26 (global), S26+ (global)', 'Snapdragon 8 Elite Gen 5': 'S26 (EUA/China/Japão), S26 Ultra (todas as regiões)', 'Vencedor para IA Local?': 'Exynos (disponibilidade global)' },
          { 'Métrica': 'Banda de memória', 'Exynos 2600': 'LPDDR5X 85,6 GB/s (típico)', 'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84,8 GB/s (típico)', 'Vencedor para IA Local?': 'Exynos (marginalmente superior)' },
          { 'Métrica': 'Veredito', 'Exynos 2600': 'Melhor para LLM e geração de imagens no dispositivo', 'Snapdragon 8 Elite Gen 5': 'Competitivo; disponibilidade do EdgeFusion não é clara', 'Vencedor para IA Local?': 'Exynos (escolha S26/S26+ em vez do S26 Ultra)' }
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
          'Melhores ferramentas: o MLC Chat (multiplataforma, modelos da comunidade) e o Ollama para Android (se disponível na data do seu lançamento). Ambos suportam modelos quantizados. Comece com um modelo 7B (Mistral 7B, Llama 2 7B, Phi 2.7B) em quantização Q4 ou Q5.'
        ],
        items: [
          'Use quantização Q4 (4-bit) para modelos 7B; Q3 (3-bit) comporta modelos maiores, mas perde qualidade',
          'Evite modelos de precisão total FP16; eles são grandes demais para um throughput prático',
          'Melhores modelos open-weight para celular: Mistral 7B, Phi 2.7B, TinyLlama 1.1B',
          'Velocidade esperada: 8-15 tokens/seg para 7B Q4; 3-5 tokens/seg para 7B não quantizado',
          'Use o MLC Chat ou o Ollama; ambos se otimizam automaticamente para Exynos/Snapdragon',
          'Teste offline: se o Ollama fizer cache do modelo, a inferência funciona totalmente sem internet'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'Privacidade no Galaxy S26: O Que Sai do Seu Dispositivo?',
        content: [
          'O Knox Vault é o módulo de segurança em hardware da Samsung: um processador separado, isolado da CPU principal e do sistema operacional Android. Dados sensíveis — métodos de pagamento, impressões digitais, registros de saúde, senhas — ficam no Knox Vault e nunca são expostos a apps ou aos servidores da Samsung sem ação explícita do usuário.',
          'O Personal Data Engine (PDE) aprende localmente: modelos de machine learning no dispositivo treinam com seus padrões de uso, calendário, mensagens, fotos e contatos. Por padrão, esses dados nunca tocam a nuvem da Samsung. Você controla esse limite com o toggle "Processar dados apenas no dispositivo" nas configurações do Galaxy AI.',
          'Recursos em nuvem são opt-in: Creative Studio, agentes Gemini e Circle to Search exigem sua permissão e enviam dados para os servidores da Samsung e do Google, respectivamente. Cada recurso tem sua própria política de privacidade. Desativar esses recursos impede qualquer transmissão para a nuvem.',
          'Privacidade entre dispositivos: o Knox Matrix sincroniza configurações de segurança e dados criptografados entre seus dispositivos Galaxy usando criptografia de ponta a ponta. A Samsung atua como retransmissora, não como camada de descriptografia.',
          'Suposição padrão: se você não ativou explicitamente um recurso em nuvem, seus dados permanecem locais. Isso é o oposto da Apple Intelligence (nuvem PCC sempre ativa para recursos avançados) e o oposto do Google Gemini (integração em nuvem mais estreita por padrão).'
        ],
        items: [
          'Knox Vault = enclave isolado por hardware para segredos; processador separado, SO separado, nunca sincronizado com a nuvem',
          'PDE = mecanismo de aprendizado local; treina com seus dados sem fazer upload',
          'Toggle "Processar dados apenas no dispositivo" = bloqueia todo fallback para a nuvem em recursos compatíveis',
          'Creative Studio = depende da nuvem; desativá-lo impede a transmissão de dados de geração de imagens',
          'Agentes Gemini = movidos pelo Google; usam sua conta Google para tarefas de múltiplas etapas',
          'Knox Matrix = sincronização entre dispositivos com criptografia de ponta a ponta; a Samsung vê blobs criptografados, não texto simples'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          { q: 'O Galaxy AI é totalmente no dispositivo ou usa a nuvem?', a: 'Híbrido. Bloqueio de Chamadas, Now Nudge, Now Brief e Detecção de Fraude rodam inteiramente no dispositivo usando o Personal Data Engine. A geração de imagens (Creative Studio), agentes Gemini e Circle to Search exigem servidores em nuvem. Ative "Processar dados apenas no dispositivo" nas configurações para forçar o processamento exclusivamente local em recursos compatíveis.' },
          { q: 'Qual é a diferença entre o Exynos 2600 e o Snapdragon 8 Elite Gen 5?', a: 'O Exynos 2600 (2nm, Samsung Foundry) é +113% mais rápido em IA do que o Exynos 2500 da geração anterior. O Snapdragon 8 Elite Gen 5 (3nm, TSMC) é +39% mais rápido em NPU do que o Snapdragon 8 Gen 1 (S25). O Exynos 2600 é o vencedor claro para inferência de LLM no dispositivo; ele é 2,4x mais rápido em Stable Diffusion.' },
          { q: 'Posso rodar um modelo de linguagem grande no Galaxy S26?', a: 'Sim, mas com limites. A banda LPDDR5X (85,6 GB/s) limita o throughput de decodificação. Um modelo 7B quantizado em Q4 atinge ~24 tokens/seg como máximo teórico (~8-15 realistas). Use o MLC Chat ou o Ollama para Android. Modelos maiores (13B, 70B) são impraticáveis devido às restrições de memória e banda.' },
          { q: 'O Galaxy AI funciona offline?', a: 'Parcialmente. Bloqueio de Chamadas, Now Nudge, Now Brief, Detecção de Fraude e LLMs no dispositivo (se rodando via Ollama) funcionam totalmente offline. Creative Studio, agentes Gemini e Circle to Search exigem internet. Ative "Processar dados apenas no dispositivo" para garantir que os recursos compatíveis não tentem fallback para a nuvem.' },
          { q: 'O que é o EdgeFusion e ele está disponível no Galaxy S26?', a: 'O EdgeFusion é o Stable Diffusion otimizado da Nota AI para NPUs móveis, gerando imagens de 512×512 em menos de 1 segundo no Exynos 2600. A Samsung fez parceria oficial com a Nota AI, mas "EdgeFusion" nunca foi mencionado pelo nome nos materiais oficiais do Galaxy Unpacked. O Creative Studio (o app de geração de imagens efetivamente distribuído) exige rede + conta Samsung, então o status exato do EdgeFusion no lançamento não é claro.' },
          { q: 'Quais dados a Samsung coleta via Galaxy AI?', a: 'Por padrão, nenhum. O Personal Data Engine permanece local. Quando você ativa recursos em nuvem — Creative Studio, agentes Gemini — os dados são enviados para a Samsung (no caso do Galaxy AI) ou para o Google (no caso do Gemini). Desative esses recursos para impedir a transmissão. Confira Configurações > Privacidade > Galaxy AI para ver o que está ativado.' },
          { q: 'O Knox Vault protege meus dados até mesmo da Samsung?', a: 'Sim. O Knox Vault é um processador de hardware separado, isolado do sistema operacional principal. Dados sensíveis (biometria, informações de pagamento, saúde) armazenados no Knox Vault não podem ser acessados por apps Android ou pelo software da Samsung sem um desbloqueio explícito. Nem mesmo engenheiros da Samsung conseguem extrair dados do Knox Vault sem acesso físico ao dispositivo e escalonamento de privilégios.' },
          { q: 'Posso desativar totalmente os recursos em nuvem do Galaxy AI?', a: 'Sim. Desative recursos individuais em Configurações > Galaxy AI. Você pode alternar Creative Studio, agentes Gemini e Circle to Search de forma independente. Ative "Processar dados apenas no dispositivo" para bloquear o fallback para a nuvem em recursos compatíveis. Os recursos no dispositivo (Bloqueio de Chamadas, Now Nudge) continuam funcionando.' },
          { q: 'O Galaxy S26 é melhor que o iPhone para rodar IA local?', a: 'Para rodar seus próprios LLMs quantizados, sim. O Exynos 2600 é mais rápido em Stable Diffusion do que o NPU A18 Pro da Apple, e o Android suporta mais ferramentas de modelos open-weight (Ollama, MLC Chat). Mas a filosofia on-device-first da Apple e o PCC criptograficamente auditável tornam-na mais forte em privacidade se você confia mais na infraestrutura da Apple do que na da Samsung.' },
          { q: 'Com que frequência os recursos do Galaxy AI serão atualizados?', a: 'Os recursos do Galaxy AI são lançados via atualizações do One UI (geralmente patches de segurança mensais + atualizações de recursos trimestrais). A Samsung se comprometeu com 7 anos de atualizações de SO e 7 anos de patches de segurança para o Galaxy S26, então espere novos recursos do Galaxy AI e melhorias de desempenho até 2033.' }
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
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', 'headline': 'Executar IA Local no Galaxy S26: IA no Dispositivo Explicada (2026)', 'description': 'IA no dispositivo Galaxy S26 explicada: quais recursos do Galaxy AI rodam localmente, quais precisam de nuvem, e como executar Ollama ou MLC Chat localmente no Exynos 2600 ou Snapdragon 8 Elite Gen 5.', 'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png', 'datePublished': '2026-06-15', 'dateModified': '2026-08-29', 'author': { '@type': 'Organization', 'name': 'PromptQuorum' }, 'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, 'inLanguage': 'pt', 'url': 'https://www.promptquorum.com/pt/local-llms/galaxy-s26-local-ai-on-device-2026', 'articleBody': 'O Galaxy S26, lançado em 25 de fevereiro de 2026, traz a plataforma híbrida de IA on-device e em nuvem da Samsung — Galaxy AI — ao seu bolso.' },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'pt', 'mainEntity': [
      { '@type': 'Question', 'name': 'O Galaxy AI é totalmente no dispositivo ou usa a nuvem?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Híbrido. Bloqueio de Chamadas, Now Nudge, Now Brief e Detecção de Fraude rodam inteiramente no dispositivo usando o Personal Data Engine. A geração de imagens (Creative Studio), agentes Gemini e Circle to Search exigem servidores em nuvem.' } },
      { '@type': 'Question', 'name': 'Qual é a diferença entre o Exynos 2600 e o Snapdragon 8 Elite Gen 5?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'O Exynos 2600 (2nm, Samsung Foundry) é +113% mais rápido em IA do que o Exynos 2500. O Snapdragon 8 Elite Gen 5 (3nm, TSMC) é +39% mais rápido em NPU do que o Snapdragon 8 Gen 1 (S25). O Exynos 2600 é o vencedor claro para inferência de LLM no dispositivo; ele é 2,4x mais rápido em Stable Diffusion.' } }
    ] }
  },
  ar: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-29',
    last_full_refresh: '2026-08-29',
    theme: 'Hardware & Performance',
    heroImage: '/images/galaxy-s26-local-ai-on-device-2026-overview-hero-ar.webp',
    title: 'تشغيل الذكاء الاصطناعي المحلي على ⁨Galaxy S26⁩: شرح الذكاء الاصطناعي على الجهاز (⁨2026⁩)',
    seoTitle: '⁨Galaxy S26⁩: الذكاء الاصطناعي على الجهاز محليًا',
    intro: 'يأتي Galaxy S26 الذي تم إطلاقه في 25 فبراير 2026 بمنصة Galaxy AI الهجينة للذكاء الاصطناعي - جزء محلي وجزء سحابي - إلى جيبك. بخلاف نهج Apple الذي يركز على المعالجة المحلية، تحقق Samsung التوازن بين المعالجة المحلية والميزات السحابية، مما يتيح لك اختيار مكان معالجة بيانات. يشرح هذا الدليل ما تفعله Galaxy AI فعليًا على الجهاز، والميزات التي تتطلب سحابة، وكيفية تشغيل نماذج LLM المفتوحة الوزن الخاصة بك على أجهزة S26.',
    metaDescription: 'ميزات ⁨Galaxy AI⁩ التي تعمل محليًا على ⁨Galaxy S26⁩، أيها يحتاج سحابة، وكيفية تشغيل ⁨Ollama⁩ أو ⁨MLC Chat⁩ على ⁨Exynos 2600⁩ أو ⁨Snapdragon 8 Elite⁩.',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '10 دقائق قراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Android المهتمون بالذكاء الاصطناعي على الجهاز، مشترو Galaxy S26، المطورون الذين يستكشفون استدلال LLM المحمول',
    primaryTerm: 'Galaxy S26 الذكاء الاصطناعي على الجهاز',
    targetKeywords: ['galaxy s26 on device ai', 'galaxy ai features', 'exynos 2600 ai', 'snapdragon 8 elite gen 5 npu', 'on device ai android', 'run llm on galaxy s26'],
    leadAnswerBlock: '**يعمل Galaxy S26 على Galaxy AI — منصة هجينة تمزج بين المعالجة المحلية (تصفية المكالمات، Now Nudge، كشف الاحتيال) والميزات السحابية (توليد الصور Creative Studio، دمج Gemini). تتحكم في تبديل الخصوصية: "معالجة البيانات على الجهاز فقط" تقيد كل شيء للمعالجة المحلية. Exynos 2600 (2nm GAA، +113% ذكاء اصطناعي مقابل S25) أسرع بكثير للاستدلال المحلي من Snapdragon 8 Elite Gen 5، مما يجعل S26/S26+ العالمي الخيار الأفضل للذكاء الاصطناعي المحلي. لتشغيل نماذج LLM الخاصة بك، تصل نماذج 7B المكممة عند Q4 (4-بت) إلى ~24 رمزًا/ثانية على LPDDR5X 85.6 GB/s.**',
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
        answer: 'تصفية المكالمات (تجيب على المكالمات محليًا)، Now Nudge (اقتراحات السياق)، Now Brief (الملخصات الشخصية)، واكتشاف الاحتيال - كلها تعالج البيانات محليًا باستخدام محرك البيانات الشخصية (PDE). يمكنك تفعيل "معالجة البيانات على الجهاز فقط" في إعدادات Galaxy AI لحظر بدائل السحابة للميزات المدعومة. توليد الصور (Creative Studio) يعتمد بالكامل على السحابة ويتطلب حساب Samsung واتصال شبكة.',
        bullets: [
          'تصفية المكالمات تنسخ وتعيد توجيه المكالمات غير المرغوبة محليًا دون عودة إلى السحابة',
          'Now Nudge يقرأ سياق الشاشة محليًا ويعرض الاقتراحات برقة واحدة',
          'اكتشاف الاحتيال يعمل نموذج Gemini محلي لتحديد المكالمات الاحتيالية في الوقت الفعلي',
          'فعّل زر "معالجة البيانات على الجهاز فقط" لفرض المعالجة المحلية',
          'توليد صور Creative Studio محصور في السحابة (يتطلب حساب Samsung + شبكة)',
          'Exynos 2600 أسرع 2.4 مرة في Stable Diffusion من Exynos 2500'
        ],
        updatedDate: '2026-06-15'
      }
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Galaxy AI منصة هجينة: تصفية المكالمات وNow Nudge وNow Brief وكشف الاحتيال تعمل بنسبة 100% على الجهاز عبر Personal Data Engine (PDE). توليد الصور في Creative Studio وتكامل Gemini يتطلبان خوادم سحابية.',
          'يقسّم Galaxy S26 الأجهزة حسب المنطقة: Exynos 2600 (أوروبا/كوريا/الهند) أسرع بنسبة +113% في الذكاء الاصطناعي من Exynos 2500، بينما يقدّم Snapdragon 8 Elite Gen 5 (الولايات المتحدة/الصين/اليابان) تحسّنًا بنسبة +39% في NPU مقارنة بـ S25. Exynos 2600 هو الشريحة الأفضل للاستدلال المحلي بنماذج LLM.',
          'تبديل الخصوصية: فعّل "معالجة البيانات على الجهاز فقط" في الإعدادات > Galaxy AI لمنع الرجوع إلى السحابة. يحمي Knox Vault (حاوية أمان بالأجهزة) البيانات الحساسة؛ ويزامن Knox Matrix الإعدادات عبر الأجهزة.',
          'توليد الصور على الجهاز: تشاركت Samsung مع Nota AI في EdgeFusion، الذي يولّد صورًا بدقة 512×512 في أقل من ثانية على NPU الخاص بـ Exynos 2600 باستخدام تحسين Stable Diffusion القائم على LCM. يتطلب Creative Studio (التطبيق الموجّه للمستخدم) شبكة وحساب Samsung.',
          'تشغيل نماذج LLM الخاصة بك: تحدّ ذاكرة LPDDR5X (85.6 GB/s) من إنتاجية فك الترميز. يصل نموذج 7B مكمَّم عند Q4 (4-بت، ~3.5 GB) إلى حد أقصى نظري يبلغ ~24 رمزًا/ثانية. استخدم MLC Chat أو Ollama for Android للاختبار.',
          'ذاكرة Snapdragon: تستخدم طرازات S26 وS26 Ultra في الولايات المتحدة/الصين/اليابان شريحة Snapdragon 8 Elite Gen 5 (84.8 GB/s LPDDR5X)، وهي أبطأ قليلًا في استدلال LLM من Exynos 2600 بسبب أداء NPU وليس الذاكرة.'
        ]
      },
      'what-is-galaxy-ai': {
        id: 'what-is-galaxy-ai',
        title: 'ما هو Galaxy AI على Galaxy S26؟',
        content: [
          'Galaxy AI هي منصة الذكاء على الجهاز من Samsung، مبنية على عائلة نماذج Gauss الخاصة بشركة Samsung بالإضافة إلى تكامل Gemini. أُطلقت مع Galaxy S24، وتحسّنت في S25، وتوسّعت في S26 (إطلاق 25 فبراير 2026)، وتوازن بين المعالجة المحلية للخصوصية وميزات السحابة للقوة الإضافية.',
          'يمثّل Personal Data Engine (PDE) النواة: فهو يتعلّم من بياناتك على الجهاز - الرسائل، التقويم، الصور، سجل الموقع - دون إرسال أي شيء إلى خوادم Samsung ما لم تختر صراحة ميزات السحابة. يعزل Knox Vault، وهو حاوية أمان بالأجهزة، البيانات الحساسة (بيانات الاعتماد، السجلات الصحية، معلومات الدفع) حتى عن برمجيات Samsung نفسها.',
          'تنقسم ميزات Galaxy AI إلى ثلاث فئات: على الجهاز بالكامل (تصفية المكالمات)، هجينة بإعداد افتراضي محلي أولًا (Now Nudge وNow Brief وكشف الاحتيال)، ومعتمدة على السحابة (Creative Studio وعملاء Gemini وCircle to Search).',
          'يبقى تحكّم المستخدم محوريًا: مفتاح واحد في إعدادات Galaxy AI - "معالجة البيانات على الجهاز فقط" - يحظر كل رجوع إلى السحابة للميزات المتوافقة. هذه ليست فكرة خصوصية لاحقة؛ إنها السلوك الافتراضي ما لم تطلب مزيدًا من القوة.'
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
          { 'الميزة': 'كشف الاحتيال', 'المعالجة': 'على الجهاز (NPU + نموذج Gemini)', 'هل تُرسَل بيانات المستخدم؟': 'لا - يُوسَم صوت المكالمة والنية محليًا', 'هل تتطلب شبكة؟': 'لا' },
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
        imageCaption: 'Exynos 2600 مقابل Snapdragon 8 Elite Gen 5 على Galaxy S26: 2nm GAA مقابل 3nm FinFET، أداء ذكاء اصطناعي عبر الأجيال +113% مقابل +39%، Stable Diffusion أسرع بـ2.4 مرة، وعرض نطاق ذاكرة LPDDR5X يبلغ 85.6 GB/s مقابل 84.8 GB/s.',
        columns: ['المقياس', 'Exynos 2600', 'Snapdragon 8 Elite Gen 5', 'الفائز للذكاء الاصطناعي المحلي؟'],
        rows: [
          { 'المقياس': 'العقدة / المصنع', 'Exynos 2600': '2nm GAA (Samsung SF2)', 'Snapdragon 8 Elite Gen 5': '3nm FinFET (TSMC)', 'الفائز للذكاء الاصطناعي المحلي؟': 'Exynos (أصغر، أكثر كفاءة)' },
          { 'المقياس': 'أداء الذكاء الاصطناعي عبر الأجيال', 'Exynos 2600': '+113% مقابل Exynos 2500', 'Snapdragon 8 Elite Gen 5': '+39% في NPU مقابل S25', 'الفائز للذكاء الاصطناعي المحلي؟': 'Exynos (قفزة أكبر 3 مرات)' },
          { 'المقياس': 'سرعة Stable Diffusion', 'Exynos 2600': 'أسرع 2.4 مرة من Exynos 2500', 'Snapdragon 8 Elite Gen 5': 'لا يوجد معيار Stable Diffusion منشور', 'الفائز للذكاء الاصطناعي المحلي؟': 'Exynos (مؤكد؛ Snapdragon لم يُحدَّد بعد)' },
          { 'المقياس': 'المناطق/الطرازات المتاحة', 'Exynos 2600': 'S26 (عالميًا)، S26+ (عالميًا)', 'Snapdragon 8 Elite Gen 5': 'S26 (الولايات المتحدة/الصين/اليابان)، S26 Ultra (كل المناطق)', 'الفائز للذكاء الاصطناعي المحلي؟': 'Exynos (توفر عالمي)' },
          { 'المقياس': 'عرض نطاق الذاكرة', 'Exynos 2600': 'LPDDR5X 85.6 GB/s (نموذجي)', 'Snapdragon 8 Elite Gen 5': 'LPDDR5X 84.8 GB/s (نموذجي)', 'الفائز للذكاء الاصطناعي المحلي؟': 'Exynos (أعلى قليلًا)' },
          { 'المقياس': 'الحكم النهائي', 'Exynos 2600': 'الأفضل لنماذج LLM وتوليد الصور على الجهاز', 'Snapdragon 8 Elite Gen 5': 'تنافسي؛ توفر EdgeFusion غير واضح', 'الفائز للذكاء الاصطناعي المحلي؟': 'Exynos (اختر S26/S26+ بدلًا من S26 Ultra)' }
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
          'أفضل الأدوات: MLC Chat (متعدد المنصات، نماذج المجتمع) وOllama for Android (إذا كان متاحًا في تاريخ الإطلاق لديك). يدعم كلاهما النماذج المكمَّمة. ابدأ بنموذج 7B (Mistral 7B، Llama 2 7B، Phi 2.7B) بتكميم Q4 أو Q5.'
        ],
        items: [
          'استخدم تكميم Q4 (4-بت) لنماذج 7B؛ يستوعب Q3 (3-بت) نماذج أكبر لكن مع فقدان الجودة',
          'تجنّب نماذج الدقة الكاملة FP16؛ فهي كبيرة جدًا للحصول على إنتاجية عملية',
          'أفضل النماذج مفتوحة الوزن للهواتف: Mistral 7B، Phi 2.7B، TinyLlama 1.1B',
          'السرعة المتوقعة: 8-15 رمزًا/ثانية لـ7B Q4؛ 3-5 رموز/ثانية لـ7B غير المكمَّم',
          'استخدم MLC Chat أو Ollama؛ يتحسّن كلاهما تلقائيًا لشرائح Exynos/Snapdragon',
          'اختبر دون اتصال: إذا خزّن Ollama النموذج مؤقتًا، يعمل الاستدلال بالكامل دون إنترنت'
        ]
      },
      'privacy': {
        id: 'privacy',
        title: 'خصوصية Galaxy S26: ما الذي يغادر جهازك؟',
        content: [
          'Knox Vault هو وحدة الأمان بالأجهزة من Samsung: معالج منفصل ومعزول عن المعالج الرئيسي ونظام Android. تعيش البيانات الحساسة - وسائل الدفع، بصمات الأصابع، السجلات الصحية، كلمات المرور - في Knox Vault ولا تُكشَف أبدًا للتطبيقات أو خوادم Samsung دون إجراء صريح من المستخدم.',
          'يتعلّم Personal Data Engine (PDE) محليًا: تتدرّب نماذج تعلّم الآلة على الجهاز على أنماط استخدامك، تقويمك، رسائلك، صورك، وجهات اتصالك. افتراضيًا، لا تلمس هذه البيانات سحابة Samsung أبدًا. تتحكم في هذا الحد عبر مفتاح "معالجة البيانات على الجهاز فقط" في إعدادات Galaxy AI.',
          'ميزات السحابة اختيارية: تتطلب Creative Studio وعملاء Gemini وCircle to Search إذنك وترسل بيانات إلى خوادم Samsung وGoogle على التوالي. لكل ميزة سياسة خصوصية خاصة بها. تعطيل هذه الميزات يمنع أي نقل إلى السحابة.',
          'الخصوصية عبر الأجهزة: يزامن Knox Matrix إعدادات الأمان والبيانات المشفرة عبر أجهزة Galaxy الخاصة بك باستخدام التشفير من طرف إلى طرف. تعمل Samsung كوسيط تتابع، وليست طبقة فك تشفير.',
          'الافتراض الافتراضي: إذا لم تُفعّل ميزة سحابية صراحةً، تبقى بياناتك محلية. هذا عكس Apple Intelligence (سحابة PCC دائمة التشغيل للميزات المتقدمة) وعكس Google Gemini (تكامل سحابي أوثق افتراضيًا).'
        ],
        items: [
          'Knox Vault = حاوية معزولة بالأجهزة للأسرار؛ معالج منفصل، نظام تشغيل منفصل، لا يُزامن أبدًا مع السحابة',
          'PDE = محرك تعلّم محلي؛ يتدرّب على بياناتك دون رفعها',
          'مفتاح "معالجة البيانات على الجهاز فقط" = يحظر كل رجوع إلى السحابة للميزات المتوافقة',
          'Creative Studio = يعتمد على السحابة؛ تعطيله يمنع نقل بيانات توليد الصور',
          'عملاء Gemini = مدعومون من Google؛ يستخدمون حساب Google الخاص بك للمهام متعددة الخطوات',
          'Knox Matrix = مزامنة عبر الأجهزة باستخدام التشفير من طرف إلى طرف؛ ترى Samsung كتلًا مشفرة، لا نصًا صريحًا'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل Galaxy AI يعمل بالكامل على الجهاز أم يستخدم السحابة؟', a: 'هجين. تعمل تصفية المكالمات وNow Nudge وNow Brief وكشف الاحتيال بالكامل على الجهاز باستخدام Personal Data Engine. يتطلب توليد الصور (Creative Studio) وعملاء Gemini وCircle to Search خوادم سحابية. فعّل "معالجة البيانات على الجهاز فقط" في الإعدادات لفرض المعالجة المحلية فقط للميزات المتوافقة.' },
          { q: 'ما الفرق بين Exynos 2600 وSnapdragon 8 Elite Gen 5؟', a: 'شريحة Exynos 2600 (2nm، من مصنع Samsung) أسرع بنسبة +113% في الذكاء الاصطناعي من الجيل السابق Exynos 2500. شريحة Snapdragon 8 Elite Gen 5 (3nm، من TSMC) أسرع بنسبة +39% في NPU من Snapdragon 8 Gen 1 (S25). Exynos 2600 هو الفائز الواضح لاستدلال LLM على الجهاز؛ فهو أسرع بمقدار 2.4 مرة في Stable Diffusion.' },
          { q: 'هل يمكنني تشغيل نموذج لغوي كبير على Galaxy S26؟', a: 'نعم، لكن بحدود. يحدّ عرض نطاق LPDDR5X (85.6 GB/s) من إنتاجية فك الترميز. يصل نموذج 7B مكمَّم عند Q4 إلى حد أقصى نظري يبلغ ~24 رمزًا/ثانية (~8-15 واقعيًا). استخدم MLC Chat أو Ollama for Android. النماذج الأكبر (13B، 70B) غير عملية بسبب قيود الذاكرة وعرض النطاق.' },
          { q: 'هل يعمل Galaxy AI دون اتصال؟', a: 'جزئيًا. تعمل تصفية المكالمات وNow Nudge وNow Brief وكشف الاحتيال ونماذج LLM على الجهاز (إذا شُغِّلت عبر Ollama) دون اتصال بالكامل. تتطلب Creative Studio وعملاء Gemini وCircle to Search إنترنت. فعّل "معالجة البيانات على الجهاز فقط" للتأكد من أن الميزات المتوافقة لن تحاول الرجوع إلى السحابة.' },
          { q: 'ما هو EdgeFusion وهل يُطرح على Galaxy S26؟', a: 'EdgeFusion هو نسخة Nota AI المحسَّنة من Stable Diffusion لوحدات NPU المحمولة، وتولّد صورًا بدقة 512×512 في أقل من ثانية واحدة على Exynos 2600. تشاركت Samsung رسميًا مع Nota AI، لكن اسم "EdgeFusion" لم يُذكَر أبدًا في مواد Galaxy Unpacked الرسمية. يتطلب Creative Studio (تطبيق توليد الصور المطروح فعليًا) شبكة وحساب Samsung، لذا فإن الحالة الدقيقة لـEdgeFusion عند الإطلاق غير واضحة.' },
          { q: 'ما البيانات التي تجمعها Samsung عبر Galaxy AI؟', a: 'لا شيء افتراضيًا. يبقى Personal Data Engine محليًا. عند تفعيل ميزات السحابة - Creative Studio، عملاء Gemini - تُرسَل البيانات إلى Samsung (لـGalaxy AI) أو Google (لـGemini). عطّل هذه الميزات لمنع النقل. راجع الإعدادات > الخصوصية > Galaxy AI لمعرفة تفاصيل ما هو مفعّل.' },
          { q: 'هل يحمي Knox Vault بياناتي حتى من Samsung؟', a: 'نعم. Knox Vault معالج أجهزة منفصل معزول عن نظام التشغيل الرئيسي. لا يمكن لتطبيقات Android أو برمجيات Samsung الوصول إلى البيانات الحساسة (القياسات الحيوية، معلومات الدفع، الصحة) المخزّنة في Knox Vault دون فتح صريح. حتى مهندسو Samsung لا يمكنهم استخراج بيانات Knox Vault دون وصول فعلي إلى الجهاز وتصعيد امتيازات.' },
          { q: 'هل يمكنني تعطيل ميزات Galaxy AI السحابية بالكامل؟', a: 'نعم. عطّل الميزات الفردية في الإعدادات > Galaxy AI. يمكنك تبديل Creative Studio وعملاء Gemini وCircle to Search بشكل مستقل. فعّل "معالجة البيانات على الجهاز فقط" لحظر الرجوع إلى السحابة للميزات المتوافقة. تستمر الميزات على الجهاز (تصفية المكالمات، Now Nudge) في العمل.' },
          { q: 'هل Galaxy S26 أفضل من iPhone لتشغيل الذكاء الاصطناعي المحلي؟', a: 'لتشغيل نماذج LLM المكمَّمة الخاصة بك، نعم. Exynos 2600 أسرع في Stable Diffusion من NPU الخاص بشريحة A18 Pro من Apple، ويدعم Android أدوات أكثر للنماذج مفتوحة الوزن (Ollama، MLC Chat). لكن فلسفة Apple التي تركّز أولًا على الجهاز وPCC القابل للتدقيق تشفيريًا تجعلها أقوى في الخصوصية إذا كنت تثق ببنية Apple التحتية أكثر من Samsung.' },
          { q: 'كم مرة سيتم تحديث ميزات Galaxy AI؟', a: 'تُطرح ميزات Galaxy AI عبر تحديثات One UI (عادةً تصحيحات أمان شهرية + تحديثات ميزات ربع سنوية). التزمت Samsung بـ7 سنوات من تحديثات نظام التشغيل و7 سنوات من تصحيحات الأمان لـGalaxy S26، لذا توقّع ميزات Galaxy AI جديدة وتحسينات في الأداء حتى عام 2033.' }
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
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', 'headline': 'تشغيل الذكاء الاصطناعي المحلي على Galaxy S26: شرح الذكاء الاصطناعي على الجهاز (2026)', 'description': 'شرح Galaxy S26 للذكاء الاصطناعي على الجهاز: ميزات Galaxy AI التي تعمل محليًا، أيها يحتاج سحابة، وكيفية تشغيل Ollama أو MLC Chat محليًا على Exynos 2600 أو Snapdragon 8 Elite Gen 5.', 'image': 'https://www.promptquorum.com/og-images/galaxy-s26-local-ai-on-device-2026.png', 'datePublished': '2026-06-15', 'dateModified': '2026-08-29', 'author': { '@type': 'Organization', 'name': 'PromptQuorum' }, 'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, 'inLanguage': 'ar', 'url': 'https://www.promptquorum.com/ar/local-llms/galaxy-s26-local-ai-on-device-2026', 'articleBody': 'يأتي Galaxy S26 الذي تم إطلاقه في 25 فبراير 2026 بمنصة Galaxy AI الهجينة للذكاء الاصطناعي - جزء محلي وجزء سحابي - إلى جيبك.' },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'ar', 'mainEntity': [
      { '@type': 'Question', 'name': 'هل Galaxy AI يعمل بالكامل على الجهاز أم يستخدم السحابة؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'هجين. تعمل تصفية المكالمات وNow Nudge وNow Brief وكشف الاحتيال بالكامل على الجهاز باستخدام Personal Data Engine. يتطلب توليد الصور (Creative Studio) وعملاء Gemini وCircle to Search خوادم سحابية.' } },
      { '@type': 'Question', 'name': 'ما الفرق بين Exynos 2600 وSnapdragon 8 Elite Gen 5؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'شريحة Exynos 2600 (2nm، من مصنع Samsung) أسرع بنسبة +113% في الذكاء الاصطناعي من الجيل السابق Exynos 2500. شريحة Snapdragon 8 Elite Gen 5 (3nm، من TSMC) أسرع بنسبة +39% في NPU من Snapdragon 8 Gen 1 (S25). Exynos 2600 هو الفائز الواضح لاستدلال LLM على الجهاز؛ فهو أسرع بمقدار 2.4 مرة في Stable Diffusion.' } }
    ] }
  }
};
