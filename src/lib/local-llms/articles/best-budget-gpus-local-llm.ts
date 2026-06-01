// Auto-generated from src/lib/local-llms/content.ts
// Slug: best-budget-gpus-local-llm
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'monthly',
      next_seo_review_due: '2026-07-01',
      next_refresh_due: '2026-06-30',
      last_full_refresh: '2026-06-01',
      current_models_mentioned: ['Qwen3 8B', 'Qwen3 14B', 'Gemma 4 E12B', 'Gemma 4 E4B', 'Mistral 7B', 'DeepSeek-R1 7B', 'gpt-oss:20b'],
      theme: 'GPU Buying Guides',
      title: 'RTX 3060 12GB: Run Qwen3 8B, Qwen3 14B, Gemma 4, Mistral 7B (2026 Guide)',
      seoTitle: 'RTX 3060 12GB: Best Budget GPU for Local LLMs 2026',
      intro: '**RTX 3060 12GB runs Qwen3 14B at 9–12 tok/sec, Qwen3 8B at 16–20 tok/sec, Gemma 4 E12B at 11–14 tok/sec, Mistral 7B at 18 tok/sec, and DeepSeek-R1 7B at 10–12 tok/sec — all at Q4 quantization.** The 6GB variant is limited to 3B models only. As of June 2026, the RTX 3060 12GB ($200–250 used) remains the best budget GPU for local LLMs: 12GB VRAM fits every 7B-8B model at Q4/Q5 and most dense 13B-14B models at Q4. (Note: Llama 4 Scout is a 17B-active/109B-total MoE that needs ~55 GB at Q4 — it does not fit 12 GB normally.) This guide covers exactly which models run on each VRAM tier, with real speeds and practical setups.',
      metaDescription: 'RTX 3060 12GB: Qwen3 8B (16-20 tok/sec), Qwen3 14B (9-12 tok/sec), Gemma 4 E12B, Mistral 7B, DeepSeek-R1. Full model table with VRAM + speed benchmarks.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**RTX 3060 12GB runs Qwen3 14B at 9–12 tok/sec, Qwen3 8B at 16–20 tok/sec, Gemma 4 E12B at 11–14 tok/sec, Mistral 7B at 18 tok/sec, and DeepSeek-R1 7B at 10–12 tok/sec. The 6GB variant handles 3B models only. Best budget GPU for local LLMs in 2026 at $200–250 used.**',
      nextStep: {
        text: 'Got your GPU? Now choose the right software to run models on it.',
        label: 'Best Local LLM Frontends 2026 →',
        href: '/local-llms/best-local-llm-frontends',
      },
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '7 min',
      educationalLevel: 'Beginner',
      primaryTerm: 'Budget GPU',
      toc: [
        { label: 'TLDR', anchor: '#tldr' },
        { label: 'What Can You Run on RTX 3060 12GB?', anchor: '#rtx-3060-12gb' },
        { label: 'What Can You Run on RTX 3060 6GB?', anchor: '#rtx-3060-6gb' },
        { label: 'RTX 3060 vs Other Budget GPUs', anchor: '#which-budget-gpus' },
        { label: 'How Much VRAM Do You Need for 7B Models?', anchor: '#vram-7b' },
        { label: 'Best Models by Use Case on RTX 3060', anchor: '#best-by-use-case' },
        { label: 'Used vs. New: Where Should You Buy?', anchor: '#used-vs-new' },
        { label: 'Common Budget GPU Mistakes', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**RTX 3060 12GB** ($200–250 used): Runs every 7B-8B model at Q4/Q5 and most dense 13B-14B at Q4. Best budget pick.',
            '**RTX 3060 6GB**: Limited to 3B models (Phi-4 Mini, Llama 3.2 3B). Too tight for 7B.',
            '**Best overall model on 12GB:** Qwen3 14B at ~9 GB VRAM, 9–12 tok/sec. Best dense quality that fits comfortably.',
            '**Best coding model on 12GB:** Qwen3 8B at 16–20 tok/sec.',
            '**Best reasoning model on 12GB:** DeepSeek-R1 7B at 10–12 tok/sec. Chain-of-thought.',
            '**Skip if:** You want 70B models, Llama 4 Scout (needs ~55 GB), or 13B at Q8 — you need 24GB+ (RTX 4090).',
          ],
        },
        'rtx-3060-12gb': {
          id: 'rtx-3060-12gb',
          title: 'What Can You Run on RTX 3060 12GB?',
          content: [
            '**The RTX 3060 12GB is the best budget GPU for local LLMs in 2026.** 12GB VRAM fits every 7B model at Q4/Q5 quantization, and most 13B models at Q4. For detailed guidance on VRAM requirements across model sizes, see the [VRAM requirements guide →](/local-llms/how-much-vram-local-llm). Here are the exact models and speeds you can expect:',
          ],
          columns: ['Model', 'Size', 'Quantization', 'VRAM Used', 'Speed', 'Best For'],
          rows: [
            { 'Model': 'Qwen3 14B', 'Size': '14B (dense)', 'Quantization': 'Q4_K_M', 'VRAM Used': '~9 GB', 'Speed': '9–12 tok/sec', 'Best For': 'Best overall quality that fits' },
            { 'Model': 'Qwen3 8B', 'Size': '8B', 'Quantization': 'Q4_K_M', 'VRAM Used': '~7 GB', 'Speed': '16–20 tok/sec', 'Best For': 'Coding, all-round' },
            { 'Model': 'Gemma 4 E12B', 'Size': '26B MoE', 'Quantization': 'Q4_K_M', 'VRAM Used': '~9 GB', 'Speed': '11–14 tok/sec', 'Best For': 'Vision, multimodal' },
            { 'Model': 'Mistral 7B v0.3', 'Size': '7B', 'Quantization': 'Q4_K_M', 'VRAM Used': '~7 GB', 'Speed': '18 tok/sec', 'Best For': 'Instruction following' },
            { 'Model': 'DeepSeek-R1 7B', 'Size': '7B', 'Quantization': 'Q4_K_M', 'VRAM Used': '~7 GB', 'Speed': '10–12 tok/sec', 'Best For': 'Reasoning, math' },
            { 'Model': 'Gemma 4 E4B', 'Size': 'E4B (multimodal)', 'Quantization': 'Q4_K_M', 'VRAM Used': '~5 GB', 'Speed': '18–22 tok/sec', 'Best For': 'Light vision, fast chat' },
            { 'Model': 'Llama 3.2 13B', 'Size': '13B', 'Quantization': 'Q4_K_M', 'VRAM Used': '~11 GB', 'Speed': '8–10 tok/sec', 'Best For': 'Higher quality chat (Q4 only, tight fit)' },
          ],
          note: 'Qwen3 14B (dense) is the best-quality model that fits an RTX 3060 12GB comfortably at Q4_K_M, using ~9 GB. `ollama pull qwen3:14b`. Note: Llama 4 Scout (17B active / 109B total MoE, 10M-token context, multimodal) needs ~55 GB at Q4 and does not fit 12 GB normally — it is a long-context / large-multimodal pick for high-VRAM rigs, not a budget-GPU recommendation. gpt-oss:20b (21B total / 3.6B active MoE) needs 16 GB, so it is just out of reach on a 12 GB card. All speeds measured with Ollama on RTX 3060 12GB, 16GB system RAM, Ryzen 7 7700X. Q4_K_M quantization. Speeds vary ±15% depending on prompt length and context window.',
        },
        'rtx-3060-6gb': {
          id: 'rtx-3060-6gb',
          title: 'What Can You Run on RTX 3060 6GB?',
          content: [
            '**The 6GB variant is severely limited.** Only 3B models fit comfortably. 7B models at Q4 need ~7GB — more than you have. CPU offloading works but cuts speed by 50–70%.',
          ],
          items: [
            '**Phi-4 Mini 3.8B (Q4):** ~3GB VRAM, 20–25 tok/sec. Best reasoning at this size. Strong for math and logic.',
            '**Llama 3.2 3B (Q4):** ~2.5GB VRAM, 25–35 tok/sec. Fastest option. Good for simple chat and Q&A.',
            '**Gemma 2 2B (Q4):** ~1.7GB VRAM, 35–45 tok/sec. Lightest model. Good for testing setups.',
            '**7B with offloading:** Possible but slow. Llama 7B with CPU offload = ~5–8 tok/sec. Usable for non-interactive batch work only.',
            '**Recommendation:** If you have a 6GB card, upgrade to 12GB used ($200–250) before investing time in workarounds. The speed and model quality improvement is worth it.',
          ],
        },
        'which-budget-gpus': {
          id: 'which-budget-gpus',
          title: 'RTX 3060 vs Other Budget GPUs',
          columns: ['GPU', 'VRAM', 'Price (Used)', '7B Speed', 'Max Model', 'Verdict'],
          rows: [
            { 'GPU': 'RTX 3060 12GB ★', 'VRAM': '12 GB', 'Price (Used)': '$200–250', '7B Speed': '15–20 tok/sec', 'Max Model': '13B (Q4)', 'Verdict': 'Best overall budget' },
            { 'GPU': 'RTX 4060 Ti 8GB', 'VRAM': '8 GB', 'Price (Used)': '$250–300', '7B Speed': '20–25 tok/sec', 'Max Model': '7B (Q5 max)', 'Verdict': 'Faster but less VRAM' },
            { 'GPU': 'RTX A4000', 'VRAM': '16 GB', 'Price (Used)': '$180–230', '7B Speed': '12–15 tok/sec', 'Max Model': '13B (Q5)', 'Verdict': 'Best VRAM per dollar' },
            { 'GPU': 'RTX 4070 Super', 'VRAM': '12 GB', 'Price (Used)': '$400–450', '7B Speed': '25–30 tok/sec', 'Max Model': '13B (Q5)', 'Verdict': 'Faster, but 2× price' },
            { 'GPU': 'RX 6700 XT', 'VRAM': '12 GB', 'Price (Used)': '$150–200', '7B Speed': '10–14 tok/sec', 'Max Model': '13B (Q4)', 'Verdict': 'Cheapest, AMD friction' },
          ],
          note: 'RTX 3060 12GB wins on value: 12GB VRAM at $200–250 runs every 7B model and most 13B. The RTX A4000 is a close second if you find one under $230.',
        },
        'vram-7b': {
          title: 'How Much VRAM Do You Need for 7B Models?',
          content: [
            '**7B models quantized at Q4 (4-bit) require 6-8GB VRAM; Q5 (5-bit) requires 8-10GB; Q8 (8-bit) requires 14-16GB.**',
            'In practice: **8GB is the bare minimum** for comfortable inference on 7B models at Q4 with room for batch processing.',
            '6GB cards (RTX 2060) technically work but require aggressive optimization and leave no headroom for higher batches.',
            'If you\'re stuck with less than 8 GB VRAM, you can still run local LLMs effectively — **[see speed-optimized models for 4–8 GB hardware](/local-llms/fastest-local-llms-low-end-pcs)**.',
            'GPU cost is one side of the economics; token cost is the other. Local inference eliminates per-token API fees, but prompt length still affects latency and throughput. For the full cost picture — tokens, pricing tiers, and optimisation strategies — see [tokens, costs and limits: the economics of AI prompting](https://www.promptquorum.com/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting).',
          ],
        },
        'best-by-use-case': {
          id: 'best-by-use-case',
          title: 'Best Models by Use Case on RTX 3060',
          content: [
            '**Pick your model based on what you actually need, not parameter count.** Here are the best choices for each use case on RTX 3060 12GB:',
            'Budget hardware runs smaller models — but skilled prompting closes the quality gap. The [prompt engineering guide](https://www.promptquorum.com/prompt-engineering) covers techniques like chain-of-thought and structured output that help smaller models punch above their weight. A concrete workload that fits the RTX 3060 12 GB tier is automated pull-request review — see [Local LLM Code Review in CI/CD](/power-local-llm/local-llm-code-review-ci-cd) for the GitHub Actions pattern that runs Qwen3 8B against PRs on this exact hardware.',
          ],
          items: [
            '**Chat / Q&A:** `ollama run qwen3:14b` — dense 14B, ~9 GB VRAM, best quality on 12 GB. For a lighter option: `ollama run qwen3:8b` at ~7 GB.',
            '**Coding:** `ollama run qwen3:8b` — strong all-round coding. ~7 GB VRAM. 16–20 tok/sec.',
            '**Reasoning / Math:** `ollama run deepseek-r1:7b` — Chain-of-thought reasoning. 10–12 tok/sec. Slower but significantly more accurate on multi-step problems.',
            '**Writing / Creative:** `ollama run mistral:7b` — Best instruction following. 18 tok/sec. Clean, structured output. Good for drafting and rewriting.',
            '**Vision / Images:** `ollama run gemma4:e12b` — Multimodal (accepts images). 11–14 tok/sec. Uses ~9GB VRAM. For a lighter pick, `ollama run gemma4:e4b` at ~5 GB. Describe photos, read screenshots, analyze charts.',
            '**Privacy / Offline:** Any of the above. All run 100% locally. Zero data leaves your machine. No internet required after model download.',
          ],
        },
        'used-vs-new': {
          title: 'Used vs. New: Where Should You Buy?',
          items: [
            '**Used ($50-100 cheaper)**: eBay, Facebook Marketplace, Craigslist, local computer repair shops. Higher risk of dead cards or bad VRAM. Always test before committing.',
            '**New ($280-400)**: Newegg, Amazon, Best Buy, Microcenter. Warranty included. No surprises. Prices stable. Good for risk-averse buyers.',
            '**Mined cards (crypto, dirt cheap)**: Extreme risk. VRAM degradation common. Only buy if you can fully bench-test on-site.',
          ],
        },
        'mistakes': {
          title: 'Common Budget GPU Mistakes',
          items: [
            'Buying a 4GB RTX 2060 and expecting smooth 7B inference--you\'ll hit out-of-memory errors constantly.',
            'Pairing a $250 GPU with a $30 PSU (power supply)--voltage sag kills stability. Budget 80+ Gold certified, 650W minimum.',
            'Assuming DDR5 RAM and i9 CPU speed up LLM inference--they don\'t. GPU VRAM bandwidth is the only bottleneck that matters for inference speed.',
            'Assuming Llama 4 Scout fits 12 GB. Scout is a 17B-active / 109B-total MoE that needs ~55 GB at Q4 (it only squeezes into 24 GB at 1.78-bit, ~20 tok/s). On a 12 GB RTX 3060, run dense models instead: Qwen3 14B (~9 GB), Qwen3 8B, or Gemma 4 E12B.',
            'Buying a 16 GB card just for 13B models. A 12 GB RTX 3060 already runs Qwen3 14B at Q4. Step up to 16 GB only if you specifically need gpt-oss:20b (16 GB), dense 20B+ models, or more context headroom.',
          ],
        },
        'faqSection': {
          title: 'FAQ',
          faqs: [
            { q: 'Is RTX 3060 12GB still worth buying in 2026?', a: 'Yes. It\'s 4+ years old, but 12GB VRAM is timeless. Runs Qwen3 14B, Qwen3 8B, Gemma 4 E12B, and Mistral 7B smoothly at Q4. It fits every 7B-8B model and most dense 13B-14B models.' },
            { q: 'Should I buy RTX 5060 Ti or RTX 4060 Ti for local LLMs?', a: 'RTX 5060 Ti. The newer generation (2026) offers 10-15% better performance. If budget-constrained, RTX 4060 Ti is still solid. Avoid base 4060/5060 (8GB) and 4070 (12GB)—poor value.' },
            { q: 'Can I use an AMD RX 7900 XT or RX 7900 XTX instead?', a: 'Yes, but driver support for AMD is weaker than NVIDIA + CUDA. HIP/ROCm setup requires more effort. RTX is safer for beginners.' },
            { q: 'Is 12GB VRAM enough for 13B models?', a: 'Barely, at Q4 quantization. Q5 or Q8 will cause OOM errors. If you want 13B comfort, aim for 16GB.' },
            { q: 'Should I buy a used enterprise GPU like RTX A4000?', a: 'Yes, if available. 16GB VRAM, professional-grade cooling, usually $180-230 used. Slightly slower than RTX 3060, but VRAM cushion is worth it.' },
            { q: 'What PSU wattage should I buy with a $250 GPU?', a: '650W, 80+ Gold minimum. A $250 GPU + CPU + motherboard doesn\'t exceed 400W draw, but you want headroom for spikes.' },
            { q: 'Can I run Ollama with a $200 budget GPU?', a: 'Yes. Ollama is lightweight. A 4-year-old RTX 3060 with Ollama will run Qwen3 14B at 9-12 tok/sec or Qwen3 8B at 16-20 tok/sec — totally usable for interactive chat and coding assistance.' },
            { q: 'Can I run Llama 4 Scout on an RTX 3060 12GB?', a: 'Not normally. Llama 4 Scout is a 17B-active / 109B-total MoE that needs ~55 GB VRAM at Q4 — far beyond a 12 GB card. It only squeezes into 24 GB at an extreme 1.78-bit quant (~20 tok/sec). On an RTX 3060 12GB, run dense models instead: `ollama pull qwen3:14b` (best quality that fits), Qwen3 8B, or Gemma 4 E12B. Scout is a long-context (10M-token) / large-multimodal pick for 48 GB+ rigs.' },
          ],
        },
        'relatedReading': {
          title: 'Related Reading',
          items: [
            '[AMD Ryzen AI Max+ Mini PCs (2026)](/local-llms/best-amd-mini-pc-local-llm-2026) — Alternative to discrete GPUs: iGPU + 50 TOPS NPU at $1,200–2,500.',
            '[How Much VRAM for Local LLMs](/local-llms/how-much-vram-local-llm)',
            '[RTX 5090 vs RTX 4090](/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Used GPUs for Local LLMs](/local-llms/used-gpus-for-local-llms)',
            '[Best GPUs for Local LLMs](/local-llms/best-gpus-for-local-llms)',
            '[VRAM Calculator](/local-llms/vram-calculator-local-llm)',
            '[Laptop vs Desktop for Local LLMs](/local-llms/laptop-vs-desktop-local-llm) — Full platform comparison: GPU desktop vs MacBook for local LLMs.',
            '[Prompt Engineering for Local LLMs](/prompt-engineering/prompt-engineering-for-local-models) — optimize prompts for models running on budget hardware.',
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — significantly improves DeepSeek-R1 output quality.',
            '[Mac Mini M5 as Local AI Server](/local-llms/mac-mini-m5-local-ai-server) — Budget alternative to GPU builds: always-on AI at $599 hardware + $35/year electricity.',
            '[Apple Silicon M5 for Local LLMs](/local-llms/apple-silicon-m5-local-llm) — Complete M5 Pro/Max guide: benchmarks, Mac configurations, memory tiers, and which Mac to buy for local inference.',
            '[Apple Silicon vs NVIDIA GPU for Local LLMs](/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Full cost and performance comparison: when a Mac beats a budget GPU.',
            '[Best Models for Apple Silicon 2026](/local-llms/best-models-apple-silicon-2026) — Model recommendations for 16GB–128GB unified memory tiers.',
            'For Japan-specific GPU pricing, Akihabara retailers, and used market options on Mercari and Yahoo Auctions, see our <a href="/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">best value GPU for local LLMs in Japan guide</a>.',
          ],
        },
        'sources': {
          title: 'Sources',
          items: [
            'Meta AI. (2025). "Llama 4 Model Card." — Scout MoE architecture, VRAM requirements',
            'Qwen Team. (2026). "Qwen3 Technical Report." — Qwen3 8B specifications',
            'TechPowerUp GPU Database: RTX 3060 / RTX 4060 Ti / RTX 4070 Super specs and power consumption',
            'NVIDIA CUDA Capability Matrix: GPU memory bandwidth and theoretical throughput for inference workloads',
            'Ollama Model Requirements: VRAM recommendations for Llama 4 Scout, Qwen3, and Mistral 7B quantization levels',
            'Compliance frameworks require auditable workflows. Establish governance standards for AI prompt quality and review: [prompt governance in production](https://www.promptquorum.com/prompt-engineering/prompt-governance-in-production) covers policies, version control, and approval processes.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        'headline': 'RTX 3060 Local LLM Guide 2026: What Models You Can Run',
        'description': 'What local LLMs can you run on RTX 3060 12GB or 6GB? See best models for coding, chat, and reasoning in 2026 with real VRAM limits and performance tips.',
        'url': 'https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm',
        'datePublished': '2026-04-05',
        'dateModified': '2026-06-01',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'budget GPU' },
          { '@type': 'Thing', 'name': 'RTX 3060' },
          { '@type': 'Thing', 'name': 'GPU VRAM' },
          { '@type': 'Thing', 'name': 'local LLM inference' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Is RTX 3060 12GB still worth buying in 2026?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. It is 4+ years old, but 12GB VRAM is timeless for 7B-13B models. Runs Llama 3 8B and Mistral 7B smoothly. Ideal if you find one used under $250.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Should I buy RTX 4060 or RTX 4060 Ti for local LLMs?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 4060 Ti. The base RTX 4060 (8GB) and RTX 4070 (12GB) are poor value for LLM work. The Ti is the best-priced RTX 40-series card for local inference.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I use an AMD RX 6700 or 6800 XT instead of NVIDIA for local LLMs?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, but AMD ROCm driver support for ONNX Runtime is weaker than NVIDIA CUDA. Expect more setup friction. NVIDIA is safer for budget builds.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is 12GB VRAM enough for 13B models?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Barely, at Q4 quantization. Q5 or Q8 will cause OOM errors. If you want 13B comfort, aim for 16GB VRAM.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Should I buy a used enterprise GPU like RTX A4000?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, if available. 16GB VRAM, professional-grade cooling, usually $180-230 used. Slightly slower than RTX 3060 per benchmark, but the VRAM cushion is worth it.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What PSU wattage should I buy with a $250 GPU?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '650W, 80+ Gold minimum. A $250 GPU + CPU + motherboard does not exceed 400W draw, but headroom for spikes prevents stability issues.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I run Ollama with a $200 budget GPU?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Ollama is lightweight. A 4-year-old RTX 3060 with Ollama will run Mistral 7B at 10-15 tokens/sec -- totally usable for personal inference.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the best budget GPU under $200?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Used RTX 2080 (8GB, ~$150) or RTX A2000 (12GB, ~$180-200). Both run 7B models at Q4. The A2000 is preferred for its 12GB VRAM headroom.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I test a used GPU for VRAM defects before buying?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Run VRAM stress tests: gpu-burn (Linux), HWiNFO64 memory stress test (Windows), or load a large model in Ollama and watch for OOM errors. Test before returning the card.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I upgrade my current GPU to run larger models later?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, GPU upgrades are straightforward in desktop PCs. Start with RTX 3060 12GB, then upgrade to RTX 4090 or 5090 later. PCIE slot is backward-compatible across generations.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I run Llama 4 Scout on an RTX 3060 12GB?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Not normally. Llama 4 Scout is a 17B-active / 109B-total MoE that needs ~55 GB VRAM at Q4 — far beyond a 12 GB card. It only squeezes into 24 GB at an extreme 1.78-bit quant (~20 tok/sec). On an RTX 3060 12GB, run dense models instead: qwen3:14b (best quality that fits), Qwen3 8B, or Gemma 4 E12B. Scout is a long-context (10M-token) / large-multimodal pick for 48 GB+ rigs.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the best budget NVIDIA GPU for local LLM inference?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 4060 Ti (8 GB, ~$250) for 7B models, or RTX 4070 Super (12 GB, ~$350-400) for 13B models. For used: RTX 3060 12GB (~$150-200) runs 7-13B models smoothly at Q4. Best value is RTX 3060 12GB used, or RTX 4070 Super new.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How does the AMD 6800XT compare to the RTX 4070 for AI inference?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'AMD RX 6800 XT (16 GB) beats RTX 4070 (12 GB) on VRAM and gaming performance but lags on LLM inference speed (15-20% slower). ROCm driver setup for llama.cpp is also more complex than CUDA. For pure LLM work, RTX 4070 is easier; for gaming + LLMs, 6800 XT offers better value.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the best price-per-GB VRAM GPU for local LLMs in 2026?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Used RTX 3090 (24 GB, ~$450-500) = $18-20 per GB. Used RTX 3060 (12 GB, ~$150-180) = $12-15 per GB. RTX 4070 Ti (12 GB, ~$600 new) = $50 per GB. Best value: RTX 3060 12GB used. Most capacity per dollar: RTX 3090 24GB used. Balance price + power: RTX 4070 new.'
            }
          }
        ]
      },
    },
    es: {
      freshness_tier: 'monthly',
      theme: 'GPU Buying Guides',
      title: 'RTX 3060 12GB: Ejecuta Qwen3 8B, Qwen3 14B, Gemma 4, Mistral 7B (Guía 2026)',
      seoTitle: 'RTX 3060 12GB: Mejor GPU económica para LLMs locales 2026',
      intro: '**RTX 3060 12GB ejecuta Qwen3 14B a 9–12 tok/seg, Qwen3 8B a 16–20 tok/seg, Gemma 4 E12B a 11–14 tok/seg, Mistral 7B a 18 tok/seg y DeepSeek-R1 7B a 10–12 tok/seg — todo a cuantización Q4.** La variante de 6GB está limitada solo a modelos de 3B. A junio de 2026, la RTX 3060 12GB ($200–250 usada) sigue siendo la mejor GPU económica para LLMs locales: 12GB de VRAM cabe con todos los modelos 7B-8B en Q4/Q5 y la mayoría de los densos 13B-14B en Q4. (Nota: Llama 4 Scout es un MoE de 17B activos/109B totales que necesita ~55 GB en Q4 — no cabe en 12 GB normalmente.) Esta guía cubre exactamente qué modelos funcionan en cada nivel de VRAM, con velocidades reales y configuraciones prácticas. Los precios pueden variar según tu país.',
      metaDescription: 'RTX 3060 12GB: Qwen3 8B (16–20 tok/s), Qwen3 14B (9–12 tok/s), Gemma 4 E12B, Mistral 7B y DeepSeek-R1. Tabla completa con benchmarks de VRAM y velocidad.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**RTX 3060 12GB ejecuta Qwen3 14B a 9–12 tok/seg, Qwen3 8B a 16–20 tok/seg, Gemma 4 E12B a 11–14 tok/seg, Mistral 7B a 18 tok/seg y DeepSeek-R1 7B a 10–12 tok/seg. La variante de 6GB solo maneja modelos de 3B. Mejor GPU económica para LLMs locales en 2026 a $200–250 usada. Los precios pueden variar según tu país.**',
      nextStep: {
        text: '¿Ya tienes tu GPU? Ahora elige el software adecuado para ejecutar modelos en ella.',
        label: 'Mejores frontends de LLM local 2026 →',
        href: '/local-llms/best-local-llm-frontends',
      },
      audience: 'Principiantes ejecutando su primer LLM local en hardware de consumo',
      readTime: '7 min de lectura',
      educationalLevel: 'Beginner',
      primaryTerm: 'Budget GPU',
      toc: [
        { label: 'Puntos clave', anchor: '#tldr' },
        { label: '¿Qué puedes ejecutar en RTX 3060 12GB?', anchor: '#rtx-3060-12gb' },
        { label: '¿Qué puedes ejecutar en RTX 3060 6GB?', anchor: '#rtx-3060-6gb' },
        { label: 'RTX 3060 vs otras GPUs económicas', anchor: '#which-budget-gpus' },
        { label: '¿Cuánta VRAM necesitas para modelos 7B?', anchor: '#vram-7b' },
        { label: 'Mejores modelos por caso de uso en RTX 3060', anchor: '#best-by-use-case' },
        { label: 'Usada vs. nueva: ¿dónde comprar?', anchor: '#used-vs-new' },
        { label: 'Errores comunes con GPUs económicas', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**RTX 3060 12GB** ($200–250 usada): Ejecuta todos los modelos 7B-8B en Q4/Q5 y la mayoría de los densos 13B-14B en Q4. Mejor opción económica.',
            '**RTX 3060 6GB**: Limitada a modelos 3B (Phi-4 Mini, Llama 3.2 3B). Insuficiente para 7B.',
            '**Mejor modelo general en 12GB:** Qwen3 14B a ~9 GB VRAM, 9–12 tok/seg. Mejor calidad densa que cabe cómodamente.',
            '**Mejor modelo de código en 12GB:** Qwen3 8B a 16–20 tok/seg.',
            '**Mejor modelo de razonamiento en 12GB:** DeepSeek-R1 7B a 10–12 tok/seg. Chain-of-thought.',
            '**Descártalo si:** quieres modelos de 70B, Llama 4 Scout (necesita ~55 GB) o 13B en Q8 — necesitas 24GB+ (RTX 4090).',
          ],
        },
        'rtx-3060-12gb': {
          id: 'rtx-3060-12gb',
          title: '¿Qué puedes ejecutar en RTX 3060 12GB?',
          content: [
            '**La RTX 3060 12GB es la mejor GPU económica para LLMs locales en 2026.** 12GB de VRAM cabe con todos los modelos 7B en cuantización Q4/Q5, y la mayoría de los 13B en Q4. Para orientación detallada sobre los requisitos de VRAM según el tamaño del modelo, consulta la [guía de requisitos de VRAM →](/es/local-llms/how-much-vram-local-llm). Aquí están los modelos exactos y las velocidades que puedes esperar:',
          ],
          columns: ['Modelo', 'Tamaño', 'Cuantización', 'VRAM usada', 'Velocidad', 'Ideal para'],
          rows: [
            { 'Modelo': 'Qwen3 14B', 'Tamaño': '14B (denso)', 'Cuantización': 'Q4_K_M', 'VRAM usada': '~9 GB', 'Velocidad': '9–12 tok/seg', 'Ideal para': 'Mejor calidad general que cabe' },
            { 'Modelo': 'Qwen3 8B', 'Tamaño': '8B', 'Cuantización': 'Q4_K_M', 'VRAM usada': '~7 GB', 'Velocidad': '16–20 tok/seg', 'Ideal para': 'Código, uso general' },
            { 'Modelo': 'Gemma 4 E12B', 'Tamaño': '26B MoE', 'Cuantización': 'Q4_K_M', 'VRAM usada': '~9 GB', 'Velocidad': '11–14 tok/seg', 'Ideal para': 'Visión, multimodal' },
            { 'Modelo': 'Mistral 7B v0.3', 'Tamaño': '7B', 'Cuantización': 'Q4_K_M', 'VRAM usada': '~7 GB', 'Velocidad': '18 tok/seg', 'Ideal para': 'Seguimiento de instrucciones' },
            { 'Modelo': 'DeepSeek-R1 7B', 'Tamaño': '7B', 'Cuantización': 'Q4_K_M', 'VRAM usada': '~7 GB', 'Velocidad': '10–12 tok/seg', 'Ideal para': 'Razonamiento, matemáticas' },
            { 'Modelo': 'Gemma 4 E4B', 'Tamaño': 'E4B (multimodal)', 'Cuantización': 'Q4_K_M', 'VRAM usada': '~5 GB', 'Velocidad': '18–22 tok/seg', 'Ideal para': 'Visión ligera, chat rápido' },
            { 'Modelo': 'Llama 3.2 13B', 'Tamaño': '13B', 'Cuantización': 'Q4_K_M', 'VRAM usada': '~11 GB', 'Velocidad': '8–10 tok/seg', 'Ideal para': 'Chat de mayor calidad (solo Q4, ajustado)' },
          ],
          note: 'Qwen3 14B (denso) es el modelo de mayor calidad que cabe cómodamente en una RTX 3060 12GB a Q4_K_M, usando ~9 GB. `ollama pull qwen3:14b`. Nota: Llama 4 Scout (MoE de 17B activos / 109B totales, contexto de 10M tokens, multimodal) necesita ~55 GB en Q4 y no cabe en 12 GB normalmente — es una opción de contexto largo / multimodal grande para equipos con mucha VRAM, no una recomendación de GPU económica. gpt-oss:20b (21B totales / 3.6B activos MoE) necesita 16 GB, por lo que queda justo fuera del alcance de una tarjeta de 12 GB. Todas las velocidades medidas con Ollama en RTX 3060 12GB, 16GB de RAM del sistema, Ryzen 7 7700X. Cuantización Q4_K_M. Las velocidades varían ±15% según la longitud del prompt y la ventana de contexto.',
        },
        'rtx-3060-6gb': {
          id: 'rtx-3060-6gb',
          title: '¿Qué puedes ejecutar en RTX 3060 6GB?',
          content: [
            '**La variante de 6GB está muy limitada.** Solo los modelos de 3B caben cómodamente. Los modelos 7B en Q4 necesitan ~7GB — más de lo disponible. El offloading a CPU funciona pero reduce la velocidad un 50–70%.',
          ],
          items: [
            '**Phi-4 Mini 3.8B (Q4):** ~3GB VRAM, 20–25 tok/seg. Mejor razonamiento en este tamaño. Potente para matemáticas y lógica.',
            '**Llama 3.2 3B (Q4):** ~2.5GB VRAM, 25–35 tok/seg. Opción más rápida. Buena para chat simple y preguntas y respuestas.',
            '**Gemma 2 2B (Q4):** ~1.7GB VRAM, 35–45 tok/seg. Modelo más ligero. Buena para probar configuraciones.',
            '**7B con offloading:** Posible pero lento. Llama 7B con offload a CPU = ~5–8 tok/seg. Utilizable solo para trabajo por lotes no interactivo.',
            '**Recomendación:** Si tienes una tarjeta de 6GB, actualiza a 12GB usada ($200–250) antes de invertir tiempo en soluciones alternativas. La mejora en velocidad y calidad del modelo vale la pena.',
          ],
        },
        'which-budget-gpus': {
          id: 'which-budget-gpus',
          title: 'RTX 3060 vs otras GPUs económicas',
          columns: ['GPU', 'VRAM', 'Precio (usada)', 'Velocidad 7B', 'Modelo máx.', 'Veredicto'],
          rows: [
            { 'GPU': 'RTX 3060 12GB ★', 'VRAM': '12 GB', 'Precio (usada)': '$200–250', 'Velocidad 7B': '15–20 tok/seg', 'Modelo máx.': '13B (Q4)', 'Veredicto': 'Mejor relación calidad-precio' },
            { 'GPU': 'RTX 4060 Ti 8GB', 'VRAM': '8 GB', 'Precio (usada)': '$250–300', 'Velocidad 7B': '20–25 tok/seg', 'Modelo máx.': '7B (Q5 máx)', 'Veredicto': 'Más rápida pero menos VRAM' },
            { 'GPU': 'RTX A4000', 'VRAM': '16 GB', 'Precio (usada)': '$180–230', 'Velocidad 7B': '12–15 tok/seg', 'Modelo máx.': '13B (Q5)', 'Veredicto': 'Mejor VRAM por dólar' },
            { 'GPU': 'RTX 4070 Super', 'VRAM': '12 GB', 'Precio (usada)': '$400–450', 'Velocidad 7B': '25–30 tok/seg', 'Modelo máx.': '13B (Q5)', 'Veredicto': 'Más rápida, pero 2× el precio' },
            { 'GPU': 'RX 6700 XT', 'VRAM': '12 GB', 'Precio (usada)': '$150–200', 'Velocidad 7B': '10–14 tok/seg', 'Modelo máx.': '13B (Q4)', 'Veredicto': 'La más barata, fricción con AMD' },
          ],
          note: 'RTX 3060 12GB gana en valor: 12GB de VRAM a $200–250 ejecuta todos los modelos 7B y la mayoría de los 13B. La RTX A4000 es una segunda opción cercana si encuentras una por menos de $230. Los precios pueden variar según tu país.',
        },
        'vram-7b': {
          title: '¿Cuánta VRAM necesitas para modelos 7B?',
          content: [
            '**Los modelos 7B cuantizados a Q4 (4 bits) requieren 6-8GB de VRAM; Q5 (5 bits) requiere 8-10GB; Q8 (8 bits) requiere 14-16GB.**',
            'En la práctica: **8GB es el mínimo absoluto** para una inferencia cómoda en modelos 7B a Q4 con margen para procesamiento por lotes.',
            'Las tarjetas de 6GB (RTX 2060) funcionan técnicamente pero requieren una optimización agresiva y no dejan margen para lotes más grandes.',
            'Si tienes menos de 8 GB de VRAM, aún puedes ejecutar LLMs locales eficazmente — **[consulta los modelos optimizados para hardware de 4–8 GB](/es/local-llms/fastest-local-llms-low-end-pcs)**.',
            'El costo de la GPU es un lado de la economía; el costo por token es el otro. La inferencia local elimina las tarifas de API por token, pero la longitud del prompt sigue afectando la latencia y el rendimiento. Para ver el panorama completo de costos — tokens, niveles de precios y estrategias de optimización — consulta [tokens, costos y límites: la economía del prompting con IA](https://www.promptquorum.com/es/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting).',
          ],
        },
        'best-by-use-case': {
          id: 'best-by-use-case',
          title: 'Mejores modelos por caso de uso en RTX 3060',
          content: [
            '**Elige tu modelo según lo que realmente necesitas, no según el número de parámetros.** Estas son las mejores opciones para cada caso de uso en RTX 3060 12GB:',
            'El hardware económico ejecuta modelos más pequeños — pero un buen prompting cierra la brecha de calidad. La [guía de prompt engineering](https://www.promptquorum.com/es/prompt-engineering) cubre técnicas como chain-of-thought y salidas estructuradas que ayudan a los modelos pequeños a rendir por encima de su tamaño. Una carga de trabajo concreta que encaja en el nivel RTX 3060 12 GB es la revisión automatizada de pull requests — consulta [revisión de código con LLM local en CI/CD](/es/power-local-llm/local-llm-code-review-ci-cd) para ver el patrón de GitHub Actions que ejecuta Qwen3 8B contra PRs en exactamente este hardware.',
          ],
          items: [
            '**Chat / Preguntas y respuestas:** `ollama run qwen3:14b` — denso de 14B, ~9 GB VRAM, mejor calidad en 12 GB. Para una opción más ligera: `ollama run qwen3:8b` a ~7 GB.',
            '**Código:** `ollama run qwen3:8b` — sólido para código de uso general. ~7 GB VRAM. 16–20 tok/seg.',
            '**Razonamiento / Matemáticas:** `ollama run deepseek-r1:7b` — Razonamiento chain-of-thought. 10–12 tok/seg. Más lento pero significativamente más preciso en problemas de varios pasos.',
            '**Escritura / Creatividad:** `ollama run mistral:7b` — Mejor seguimiento de instrucciones. 18 tok/seg. Salida limpia y estructurada. Ideal para borradores y reescrituras.',
            '**Visión / Imágenes:** `ollama run gemma4:e12b` — Multimodal (acepta imágenes). 11–14 tok/seg. Usa ~9GB VRAM. Para una opción más ligera, `ollama run gemma4:e4b` a ~5 GB. Describe fotos, lee capturas de pantalla, analiza gráficos.',
            '**Privacidad / Sin conexión:** Cualquiera de los anteriores. Todos se ejecutan 100% localmente. Ningún dato sale de tu equipo. No requiere internet después de descargar el modelo.',
          ],
        },
        'used-vs-new': {
          title: 'Usada vs. nueva: ¿dónde comprar?',
          items: [
            '**Usada ($50-100 más barata)**: eBay, Facebook Marketplace, Craigslist, tiendas locales de reparación de computadoras. Mayor riesgo de tarjetas defectuosas o VRAM dañada. Prueba siempre antes de comprometerte.',
            '**Nueva ($280-400)**: Newegg, Amazon, Best Buy, Microcenter. Garantía incluida. Sin sorpresas. Precios estables. Ideal para compradores que prefieren evitar riesgos.',
            '**Tarjetas de minería (cripto, muy baratas)**: Riesgo extremo. La degradación de la VRAM es habitual. Compra solo si puedes hacer pruebas de estrés completas en el lugar.',
          ],
        },
        'mistakes': {
          title: 'Errores comunes con GPUs económicas',
          items: [
            'Comprar una RTX 2060 de 4GB esperando una inferencia fluida de 7B — obtendrás errores de memoria constantemente.',
            'Combinar una GPU de $250 con una fuente de alimentación de $30 — la caída de voltaje arruina la estabilidad. Presupuesta al menos 650W con certificación 80+ Gold.',
            'Asumir que la RAM DDR5 y la CPU i9 aceleran la inferencia de LLMs — no lo hacen. El ancho de banda de la VRAM de la GPU es el único cuello de botella que importa para la velocidad de inferencia.',
            'Asumir que Llama 4 Scout cabe en 12 GB. Scout es un MoE de 17B activos / 109B totales que necesita ~55 GB en Q4 (solo entra en 24 GB con un cuant extremo de 1.78-bit, ~20 tok/s). En una RTX 3060 de 12 GB, ejecuta modelos densos en su lugar: Qwen3 14B (~9 GB), Qwen3 8B o Gemma 4 E12B.',
            'Comprar una tarjeta de 16 GB solo para modelos 13B. Una RTX 3060 de 12 GB ya ejecuta Qwen3 14B en Q4. Pasa a 16 GB solo si necesitas específicamente gpt-oss:20b (16 GB), modelos densos de 20B+ o más margen de contexto.',
          ],
        },
        'faqSection': {
          title: 'FAQ',
          faqs: [
            { q: '¿Sigue valiendo la pena comprar una RTX 3060 12GB en 2026?', a: 'Sí. Tiene más de 4 años, pero 12GB de VRAM sigue siendo muy relevante. Ejecuta Qwen3 14B, Qwen3 8B, Gemma 4 E12B y Mistral 7B sin problemas en Q4. Cabe con todos los modelos 7B-8B y la mayoría de los densos 13B-14B.' },
            { q: '¿Debería comprar RTX 5060 Ti o RTX 4060 Ti para LLMs locales?', a: 'RTX 5060 Ti. La generación más nueva (2026) ofrece un 10-15% mejor rendimiento. Si tienes restricciones de presupuesto, RTX 4060 Ti sigue siendo sólida. Evita la base 4060/5060 (8GB) y la 4070 (12GB) — mala relación calidad-precio.' },
            { q: '¿Puedo usar una AMD RX 7900 XT o RX 7900 XTX en su lugar?', a: 'Sí, pero el soporte de drivers de AMD es más débil que NVIDIA + CUDA. La configuración de HIP/ROCm requiere más esfuerzo. RTX es más segura para principiantes.' },
            { q: '¿12GB de VRAM es suficiente para modelos de 13B?', a: 'Por muy poco, a cuantización Q4. Q5 o Q8 provocarán errores OOM. Si quieres un 13B cómodo, apunta a 16GB.' },
            { q: '¿Debería comprar una GPU empresarial usada como RTX A4000?', a: 'Sí, si está disponible. 16GB de VRAM, refrigeración de calidad profesional, normalmente a $180-230 usada. Ligeramente más lenta que la RTX 3060, pero el margen adicional de VRAM lo vale.' },
            { q: '¿Cuántos vatios de fuente de alimentación debo comprar con una GPU de $250?', a: '650W mínimo, con certificación 80+ Gold. Una GPU de $250 + CPU + placa base no supera los 400W de consumo, pero quieres margen para picos.' },
            { q: '¿Puedo ejecutar Ollama con una GPU económica de $200?', a: 'Sí. Ollama es ligero. Una RTX 3060 de 4 años con Ollama ejecutará Qwen3 14B a 9-12 tok/seg o Qwen3 8B a 16-20 tok/seg — completamente utilizable para chat interactivo y asistencia de código.' },
            { q: '¿Puedo ejecutar Llama 4 Scout en una RTX 3060 12GB?', a: 'Normalmente no. Llama 4 Scout es un MoE de 17B activos / 109B totales que necesita ~55 GB de VRAM en Q4 — muy por encima de una tarjeta de 12 GB. Solo entra en 24 GB con un cuant extremo de 1.78-bit (~20 tok/seg). En una RTX 3060 12GB, ejecuta modelos densos en su lugar: `ollama pull qwen3:14b` (mejor calidad que cabe), Qwen3 8B o Gemma 4 E12B. Scout es una opción de contexto largo (10M tokens) / multimodal grande para equipos con 48 GB+.' },
          ],
        },
        'relatedReading': {
          title: 'Lectura relacionada',
          items: [
            '[Mini PCs AMD Ryzen AI Max+ (2026)](/es/local-llms/best-amd-mini-pc-local-llm-2026) — Alternativa a las GPUs discretas: iGPU + NPU de 50 TOPS a $1.200–2.500.',
            '[¿Cuánta VRAM para LLMs locales?](/es/local-llms/how-much-vram-local-llm)',
            '[RTX 5090 vs RTX 4090](/es/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[GPUs usadas para LLMs locales](/es/local-llms/used-gpus-for-local-llms)',
            '[Mejores GPUs para LLMs locales](/es/local-llms/best-gpus-for-local-llms)',
            '[Calculadora de VRAM](/es/local-llms/vram-calculator-local-llm)',
            '[Laptop vs Desktop para LLMs locales](/es/local-llms/laptop-vs-desktop-local-llm) — Comparación completa de plataformas: GPU de escritorio vs MacBook para LLMs locales.',
            '[Prompt Engineering para LLMs locales](/es/prompt-engineering/prompt-engineering-for-local-models) — Optimiza prompts para modelos que se ejecutan en hardware económico.',
            '[Prompting Chain-of-Thought](/es/prompt-engineering/chain-of-thought-prompting) — Mejora significativamente la calidad de salida de DeepSeek-R1.',
            '[Mac Mini M5 como servidor de IA local](/es/local-llms/mac-mini-m5-local-ai-server) — Alternativa económica a las builds de GPU: IA siempre activa a $599 de hardware + $35/año de electricidad.',
            '[Apple Silicon M5 para LLMs locales](/es/local-llms/apple-silicon-m5-local-llm) — Guía completa de M5 Pro/Max: benchmarks, configuraciones de Mac, niveles de memoria y qué Mac comprar para inferencia local.',
            '[Apple Silicon vs GPU NVIDIA para LLMs locales](/es/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Comparación completa de costo y rendimiento: cuándo un Mac supera a una GPU económica.',
            '[Mejores modelos para Apple Silicon 2026](/es/local-llms/best-models-apple-silicon-2026) — Recomendaciones de modelos para niveles de memoria unificada de 16GB–128GB.',
            'Para precios de GPU en Japón, minoristas de Akihabara y opciones del mercado de segunda mano en Mercari y Yahoo Auctions, consulta nuestra <a href="/es/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">guía de las mejores GPUs para LLMs locales en Japón</a>.',
          ],
        },
        'sources': {
          title: 'Fuentes',
          items: [
            'Meta AI. (2025). "Llama 4 Model Card." — Arquitectura MoE de Scout, requisitos de VRAM',
            'Qwen Team. (2026). "Qwen3 Technical Report." — Especificaciones de Qwen3 8B',
            'Base de datos de GPUs TechPowerUp: especificaciones y consumo de energía de RTX 3060 / RTX 4060 Ti / RTX 4070 Super',
            'Matriz de capacidades CUDA de NVIDIA: ancho de banda de memoria de GPU y rendimiento teórico para cargas de trabajo de inferencia',
            'Requisitos de modelos de Ollama: recomendaciones de VRAM para niveles de cuantización de Llama 4 Scout, Qwen3 y Mistral 7B',
            'El cumplimiento normativo requiere flujos de trabajo auditables. Establece estándares de gobernanza para la calidad y revisión de prompts de IA: [gobernanza de prompts en producción](https://www.promptquorum.com/es/prompt-engineering/prompt-governance-in-production) cubre políticas, control de versiones y procesos de aprobación.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        'headline': 'Guía de LLMs locales con RTX 3060 2026: qué modelos puedes ejecutar',
        'description': '¿Qué LLMs locales puedes ejecutar en RTX 3060 12GB o 6GB? Consulta los mejores modelos para código, chat y razonamiento en 2026 con límites reales de VRAM y consejos de rendimiento.',
        'url': 'https://www.promptquorum.com/es/local-llms/best-budget-gpus-local-llm?lang=es',
        'datePublished': '2026-04-05',
        'dateModified': '2026-06-01',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'GPU económica' },
          { '@type': 'Thing', 'name': 'RTX 3060' },
          { '@type': 'Thing', 'name': 'VRAM de GPU' },
          { '@type': 'Thing', 'name': 'inferencia de LLM local' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Sigue valiendo la pena comprar una RTX 3060 12GB en 2026?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Tiene más de 4 años, pero 12GB de VRAM es atemporal para modelos de 7B-13B. Ejecuta Llama 3 8B y Mistral 7B sin problemas. Ideal si encuentras una usada por menos de $250.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Debería comprar RTX 4060 o RTX 4060 Ti para LLMs locales?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 4060 Ti. La RTX 4060 base (8GB) y la RTX 4070 (12GB) ofrecen mala relación calidad-precio para trabajo con LLMs. La Ti es la mejor tarjeta de la serie RTX 40 en precio para inferencia local.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo usar una AMD RX 6700 o 6800 XT en lugar de NVIDIA para LLMs locales?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, pero el soporte de drivers de AMD para ONNX Runtime es más débil que NVIDIA CUDA. Espera más fricción en la configuración. NVIDIA es más segura para builds económicas.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿12GB de VRAM es suficiente para modelos de 13B?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Por muy poco, a cuantización Q4. Q5 o Q8 provocarán errores OOM. Si quieres un 13B cómodo, apunta a 16GB de VRAM.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Debería comprar una GPU empresarial usada como RTX A4000?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, si está disponible. 16GB de VRAM, refrigeración de calidad profesional, normalmente a $180-230 usada. Ligeramente más lenta que la RTX 3060 en benchmarks, pero el margen adicional de VRAM lo vale.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuántos vatios de fuente de alimentación debo comprar con una GPU de $250?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '650W mínimo, con certificación 80+ Gold. Una GPU de $250 + CPU + placa base no supera los 400W de consumo, pero el margen previene problemas de estabilidad por picos.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo ejecutar Ollama con una GPU económica de $200?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Ollama es ligero. Una RTX 3060 de 4 años con Ollama ejecutará Mistral 7B a 10-15 tokens/seg — completamente utilizable para inferencia personal.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la mejor GPU económica por menos de $200?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 2080 usada (8GB, ~$150) o RTX A2000 (12GB, ~$180-200). Ambas ejecutan modelos 7B a Q4. Se prefiere la A2000 por su margen de 12GB de VRAM.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo pruebo una GPU usada en busca de defectos de VRAM antes de comprar?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ejecuta pruebas de estrés de VRAM: gpu-burn (Linux), prueba de estrés de memoria HWiNFO64 (Windows), o carga un modelo grande en Ollama y observa si hay errores OOM. Prueba antes de devolver la tarjeta.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo actualizar mi GPU para ejecutar modelos más grandes más adelante?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, las actualizaciones de GPU son sencillas en PCs de escritorio. Comienza con RTX 3060 12GB y luego actualiza a RTX 4090 o 5090 más adelante. El slot PCIe es retrocompatible entre generaciones.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo ejecutar Llama 4 Scout en una RTX 3060 12GB?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Normalmente no. Llama 4 Scout es un MoE de 17B activos / 109B totales que necesita ~55 GB de VRAM en Q4 — muy por encima de una tarjeta de 12 GB. Solo entra en 24 GB con un cuant extremo de 1.78-bit (~20 tok/seg). En una RTX 3060 12GB, ejecuta modelos densos en su lugar: qwen3:14b (mejor calidad que cabe), Qwen3 8B o Gemma 4 E12B. Scout es una opción de contexto largo (10M tokens) / multimodal grande para equipos con 48 GB+.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la mejor GPU NVIDIA económica para inferencia de LLM local?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 4060 Ti (8 GB, ~$250) para modelos 7B, o RTX 4070 Super (12 GB, ~$350-400) para modelos 13B. Usada: RTX 3060 12GB (~$150-200) ejecuta modelos 7-13B sin problemas a Q4. El mejor valor es RTX 3060 12GB usada, o RTX 4070 Super nueva.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo se compara la AMD 6800XT con la RTX 4070 para inferencia de IA?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'AMD RX 6800 XT (16 GB) supera a RTX 4070 (12 GB) en VRAM y rendimiento en juegos, pero es más lenta en inferencia de LLMs (15-20% menos). La configuración del driver ROCm para llama.cpp también es más compleja que CUDA. Para trabajo puro con LLMs, RTX 4070 es más fácil; para juegos + LLMs, 6800 XT ofrece mejor valor.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la GPU con mejor precio por GB de VRAM para LLMs locales en 2026?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 3090 usada (24 GB, ~$450-500) = $18-20 por GB. RTX 3060 usada (12 GB, ~$150-180) = $12-15 por GB. RTX 4070 Ti (12 GB, ~$600 nueva) = $50 por GB. Mejor valor: RTX 3060 12GB usada. Mayor capacidad por dólar: RTX 3090 24GB usada. Balance precio + rendimiento: RTX 4070 nueva.'
            }
          },
        ]
      },
    },
    de: {
      theme: 'GPU Buying Guides',
      title: 'Beste Budget-GPUs für lokale LLMs',
      seoTitle: 'RTX 3060 bis RX 6800 XT: Budget-GPUs für lokale LLMs 2026',
      intro: '**RTX 3060 12GB führt Qwen3 14B mit 9–12 Tok/Sek, Qwen3 8B mit 16–20 Tok/Sek, Gemma 4 E12B mit 11–14 Tok/Sek, Mistral 7B mit 18 Tok/Sek und DeepSeek-R1 7B mit 10–12 Tok/Sek aus — alles bei Q4-Quantisierung.** Die 6-GB-Variante ist auf 3B-Modelle beschränkt. Stand Juni 2026 bleibt die RTX 3060 12GB (150–190 € gebraucht) die beste Budget-GPU für lokale LLMs: 12 GB VRAM passt für jedes 7B-8B-Modell bei Q4/Q5 und die meisten dichten 13B-14B-Modelle bei Q4. (Hinweis: Llama 4 Scout ist ein MoE mit 17B aktiv / 109B insgesamt und benötigt ~55 GB bei Q4 — er passt normalerweise nicht in 12 GB.)',
      metaDescription: 'RTX 3060 12GB (150-190 € gebraucht) ist die beste Budget-GPU für 7B-Modelle 2026. 5 GPUs nach VRAM und Preis für Qwen3 14B und Mistral 7B verglichen.',
      nextStep: {
        text: 'GPU ausgewählt? Wählen Sie jetzt die richtige Software, um Modelle darauf auszuführen.',
        label: 'Beste lokale LLM-Frontends 2026 →',
        href: '/local-llms/best-local-llm-frontends',
      },
      publishDate: '2026-04-05',
      dateModified: '2026-06-01',
      readTime: '7 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Budget GPU für lokale LLMs',
      toc: [
        { label: 'TLDR', anchor: '#tldr' },
        { label: 'Was kann man auf RTX 3060 12GB ausführen?', anchor: '#rtx-3060-12gb' },
        { label: 'Was kann man auf RTX 3060 6GB ausführen?', anchor: '#rtx-3060-6gb' },
        { label: 'RTX 3060 vs andere Budget-GPUs', anchor: '#which-budget-gpus' },
        { label: 'Wie viel VRAM braucht man für 7B-Modelle?', anchor: '#vram-7b' },
        { label: 'Beste Modelle nach Anwendungsfall auf RTX 3060', anchor: '#best-by-use-case' },
        { label: 'Gebraucht vs. Neu: Wo kaufen?', anchor: '#used-vs-new' },
        { label: 'Häufige Budget-GPU-Fehler', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**RTX 3060 12GB** (150–190 € gebraucht): Führt jedes 7B-8B-Modell bei Q4/Q5 und die meisten dichten 13B-14B bei Q4 aus. Beste Budget-Wahl.',
            '**RTX 3060 6GB**: Beschränkt auf 3B-Modelle (Phi-4 Mini, Llama 3.2 3B). Zu knapp für 7B.',
            '**Bestes Gesamtmodell auf 12GB:** Qwen3 14B bei ~9 GB VRAM, 9–12 Tok/Sek. Beste dichte Qualität, die komfortabel passt.',
            '**Bestes Coding-Modell auf 12GB:** Qwen3 8B mit 16–20 Tok/Sek.',
            '**Bestes Reasoning-Modell auf 12GB:** DeepSeek-R1 7B mit 10–12 Tok/Sek.',
            '**Überspringen wenn:** Sie 70B-Modelle, Llama 4 Scout (benötigt ~55 GB) oder 13B bei Q8 wollen — dafür brauchen Sie 24GB+ (RTX 4090).',
          ],
        },
        'rtx-3060-12gb': {
          id: 'rtx-3060-12gb',
          title: 'Was kann man auf RTX 3060 12GB ausführen?',
          content: [
            '**Die RTX 3060 12GB ist die beste Budget-GPU für lokale LLMs 2026.** 12 GB VRAM passt für jedes 7B-Modell bei Q4/Q5 und die meisten 13B-Modelle bei Q4. Für detaillierte Anleitung zu VRAM-Anforderungen bei verschiedenen Modellgrößen siehe den [VRAM-Anforderungsleitfaden →](/de/local-llms/how-much-vram-local-llm). Hier sind die genauen Modelle und Geschwindigkeiten, die Sie erwarten können:',
          ],
          columns: ['Modell', 'Größe', 'Quantisierung', 'VRAM', 'Geschwindigkeit', 'Ideal für'],
          rows: [
            { 'Modell': 'Qwen3 14B', 'Größe': '14B (dicht)', 'Quantisierung': 'Q4_K_M', 'VRAM': '~9 GB', 'Geschwindigkeit': '9–12 Tok/Sek', 'Ideal für': 'Beste Gesamtqualität, die passt' },
            { 'Modell': 'Qwen3 8B', 'Größe': '8B', 'Quantisierung': 'Q4_K_M', 'VRAM': '~7 GB', 'Geschwindigkeit': '16–20 Tok/Sek', 'Ideal für': 'Coding, Allrounder' },
            { 'Modell': 'Gemma 4 E12B', 'Größe': '26B MoE', 'Quantisierung': 'Q4_K_M', 'VRAM': '~9 GB', 'Geschwindigkeit': '11–14 Tok/Sek', 'Ideal für': 'Vision, multimodal' },
            { 'Modell': 'Mistral 7B v0.3', 'Größe': '7B', 'Quantisierung': 'Q4_K_M', 'VRAM': '~7 GB', 'Geschwindigkeit': '18 Tok/Sek', 'Ideal für': 'Instruktionsfolge' },
            { 'Modell': 'DeepSeek-R1 7B', 'Größe': '7B', 'Quantisierung': 'Q4_K_M', 'VRAM': '~7 GB', 'Geschwindigkeit': '10–12 Tok/Sek', 'Ideal für': 'Reasoning, Mathematik' },
            { 'Modell': 'Gemma 4 E4B', 'Größe': 'E4B (multimodal)', 'Quantisierung': 'Q4_K_M', 'VRAM': '~5 GB', 'Geschwindigkeit': '18–22 Tok/Sek', 'Ideal für': 'Leichte Vision, schneller Chat' },
            { 'Modell': 'Llama 3.2 13B', 'Größe': '13B', 'Quantisierung': 'Q4_K_M', 'VRAM': '~11 GB', 'Geschwindigkeit': '8–10 Tok/Sek', 'Ideal für': 'Höhere Chat-Qualität (Q4 nur, knapp)' },
          ],
          note: 'Qwen3 14B (dicht) ist das qualitativ beste Modell, das komfortabel auf eine RTX 3060 12GB bei Q4_K_M passt und ~9 GB nutzt. `ollama pull qwen3:14b`. Hinweis: Llama 4 Scout (MoE mit 17B aktiv / 109B insgesamt, 10M-Token-Kontext, multimodal) benötigt ~55 GB bei Q4 und passt normalerweise nicht in 12 GB — er ist eine Wahl für langen Kontext / große Multimodalität auf Systemen mit viel VRAM, keine Budget-GPU-Empfehlung. gpt-oss:20b (21B insgesamt / 3.6B aktiv MoE) benötigt 16 GB und liegt damit knapp außer Reichweite einer 12-GB-Karte. Alle Geschwindigkeiten gemessen mit Ollama auf RTX 3060 12GB, 16 GB System-RAM, Ryzen 7 7700X. Q4_K_M-Quantisierung. Geschwindigkeiten variieren ±15%.',
        },
        'rtx-3060-6gb': {
          id: 'rtx-3060-6gb',
          title: 'Was kann man auf RTX 3060 6GB ausführen?',
          content: [
            '**Die 6-GB-Variante ist stark eingeschränkt.** Nur 3B-Modelle passen komfortabel. 7B-Modelle bei Q4 brauchen ~7 GB — mehr als vorhanden.',
          ],
          items: [
            '**Phi-4 Mini 3.8B (Q4):** ~3 GB VRAM, 20–25 Tok/Sek. Bestes Reasoning in dieser Größe.',
            '**Llama 3.2 3B (Q4):** ~2,5 GB VRAM, 25–35 Tok/Sek. Schnellste Option. Gut für einfachen Chat.',
            '**Gemma 2 2B (Q4):** ~1,7 GB VRAM, 35–45 Tok/Sek. Leichtestes Modell. Gut zum Testen.',
            '**7B mit Offloading:** Möglich aber langsam. Llama 7B mit CPU-Offload = ~5–8 Tok/Sek.',
            '**Empfehlung:** Wenn Sie eine 6-GB-Karte haben, upgraden Sie auf 12 GB gebraucht (200–250 $).',
          ],
        },
        'what-gpu-budget': {
          title: 'Welches GPU-Budget sollten Sie einplanen?',
          content: [
            '**Für ein funktionsfähiges lokales LLM-System planen Sie €500-750 Gesamtsystemkosten, mit GPU = 30-40% dieses Budgets (~€150-300).**',
            'Eine €150-GPU mit einer €30-CPU erzeugt Engpässe. Eine €1.500-GPU mit €20-Mainboard verschwendet Geld.',
            'Ab April 2026 liegt der Performance-pro-Euro-Spitzenwert im €150-250-Bereich (RTX 3060-4070 Super gebraucht).',
          ],
        },
        'which-budget-gpus': {
          title: 'RTX 3060 vs andere Budget-GPUs',
          columns: ['GPU', 'VRAM', 'Preis (Gebraucht)', '7B Geschwindigkeit', 'Max. Modell', 'Fazit'],
          rows: [
            { 'GPU': 'RTX 3060 12GB ★', 'VRAM': '12 GB', 'Preis (Gebraucht)': '180–230 €', '7B Geschwindigkeit': '15–20 Tok/Sek', 'Max. Modell': '13B (Q4)', 'Fazit': 'Beste Budget-Wahl' },
            { 'GPU': 'RTX 4060 Ti 8GB', 'VRAM': '8 GB', 'Preis (Gebraucht)': '230–280 €', '7B Geschwindigkeit': '20–25 Tok/Sek', 'Max. Modell': '7B (Q5 max)', 'Fazit': 'Schneller, weniger VRAM' },
            { 'GPU': 'RTX A4000', 'VRAM': '16 GB', 'Preis (Gebraucht)': '160–210 €', '7B Geschwindigkeit': '12–15 Tok/Sek', 'Max. Modell': '13B (Q5)', 'Fazit': 'Bestes VRAM pro Euro' },
            { 'GPU': 'RTX 4070 Super', 'VRAM': '12 GB', 'Preis (Gebraucht)': '370–420 €', '7B Geschwindigkeit': '25–30 Tok/Sek', 'Max. Modell': '13B (Q5)', 'Fazit': 'Schneller, 2× Preis' },
            { 'GPU': 'RX 6700 XT', 'VRAM': '12 GB', 'Preis (Gebraucht)': '130–180 €', '7B Geschwindigkeit': '10–14 Tok/Sek', 'Max. Modell': '13B (Q4)', 'Fazit': 'Billigste, AMD-Aufwand' },
          ],
          note: 'RTX 3060 12GB gewinnt beim Preis-Leistungs-Verhältnis: 12 GB VRAM für 180–230 € führt jedes 7B-Modell und die meisten 13B aus.',
        },
        'best-for-each-use': {
          title: 'Welches Modell ist für jeden Anwendungsfall am besten?',
          content: [
            '**Codierung (Qwen 2.5 7B)**: Qwen 2.5 7B ist exzellent bei Code-Generierung und Reasoning. Benötigt RTX 3060 12GB oder RTX 4060 Ti 8GB. Ideal auf RTX A6000 Enterprise-Karten, falls verfügbar für 32B+-Modelle.',
            '**Englisch-Reasoning (Llama 3.3)**: Llama 3.3 ist das beste Universalmodell für faktengestütztes Reasoning. Llama 3.3 70B benötigt 48GB VRAM (RTX 6000 oder A100). 7B-Version passt auf jede 8GB+ GPU.',
            '**Leichte lokale Nutzung (Mistral 7B)**: Mistral 7B ist das leichteste hochwertige Modell. Lässt sich bequem auf RTX 3060 12GB oder RTX 4060 Ti 8GB ausführen. Perfekt für Notebook-Inferenz.',
          ],
        },
        'quick-answer': {
          title: 'Welche Modelle gewinnen nach Anwendungsfall?',
          content: [
            '✅ **Bestes insgesamt:** Llama 3.3 (offen, fähig, weit optimiert)',
            '✅ **Bestes für Codierung:** Qwen 2.5 (spezialisiert auf Code-Verständnis)',
            '✅ **Bestes leichtgewichtig:** Mistral 7B (minimales VRAM, schnelle Inferenz)',
            '✅ **Beste Budget-GPU:** RTX 3060 12GB (€150-190 gebraucht)',
          ],
        },
        'model-comparison': {
          title: 'Modellvergleich: Welches Modell gewinnt?',
          columns: ['Modell', 'Am besten für', 'Stärke', 'Schwäche', 'Min VRAM (Q4)'],
          rows: [
            { 'Modell': 'Qwen 2.5 7B', 'Am besten für': 'Codierung', 'Stärke': 'Ausgezeichnete Code-Genauigkeit, mehrsprachiges Reasoning', 'Schwäche': 'Schwächer bei reinem englischen Reasoning vs. Llama', 'Min VRAM (Q4)': '6-8 GB' },
            { 'Modell': 'Llama 3.3 8B', 'Am besten für': 'Reasoning', 'Stärke': 'Starkes Universalmodell, faktengestütztes Reasoning', 'Schwäche': 'Schwerer als Mistral, mehr VRAM erforderlich', 'Min VRAM (Q4)': '8-10 GB' },
            { 'Modell': 'Mistral 7B', 'Am besten für': 'Effizienz', 'Stärke': 'Schnellste Inferenz, minimales VRAM, leichtgewichtig', 'Schwäche': 'Weniger fähig als Llama/Qwen bei komplexen Aufgaben', 'Min VRAM (Q4)': '6-8 GB' },
          ],
          tableFormat: true,
        },
        'vram-7b': {
          title: 'Wie viel VRAM benötigen Sie für 7B-Modelle?',
          content: [
            '**7B-Modelle, quantisiert bei Q4 (4-bit), benötigen 6-8GB VRAM; Q5 (5-bit) benötigt 8-10GB; Q8 (8-bit) benötigt 14-16GB.**',
            'In der Praxis: **8GB ist das Minimum** für komfortable Inferenz auf 7B-Modellen bei Q4 mit Platz für Batch-Verarbeitung.',
            '6GB-Karten (RTX 2060) funktionieren technisch, erfordern aber aggressive Optimierung und lassen keinen Spielraum für höhere Batches.',
            'GPU-Kosten sind eine Seite der Wirtschaftlichkeit; Token-Kosten die andere. Lokale Inferenz eliminiert API-Kosten pro Token, aber die Prompt-Länge beeinflusst weiterhin Latenz und Durchsatz. Das vollständige Kostenbild — Tokens, Preisstufen und Optimierungsstrategien — finden Sie unter [Tokens, Kosten und Grenzen: die Wirtschaftlichkeit von KI-Prompting](https://www.promptquorum.com/de/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting).',
          ],
        },
        'best-by-use-case': {
          id: 'best-by-use-case',
          title: 'Beste Modelle nach Anwendungsfall auf RTX 3060',
          content: [
            '**Wählen Sie Ihr Modell basierend auf Ihrem Bedarf, nicht nach Parameterzahl:**',
            'Budget-Hardware läuft kleinere Modelle — aber gezieltes Prompting schließt die Qualitätslücke. Der [Prompt-Engineering-Guide](https://www.promptquorum.com/de/prompt-engineering) deckt Techniken wie Chain-of-Thought und strukturierte Ausgaben ab, die kleineren Modellen helfen, über ihrem Gewicht zu boxen. Ein konkreter Workload, der genau auf die RTX 3060 12 GB passt, ist automatisierter Pull-Request-Review — siehe [Lokales LLM-Code-Review in CI/CD](/de/power-local-llm/local-llm-code-review-ci-cd) für das GitHub-Actions-Muster, das Qwen3 8B auf genau dieser Hardware gegen PRs laufen lässt.',
          ],
          items: [
            '**Chat / Frage-Antwort:** `ollama run qwen3:14b` — dicht, 14B, ~9 GB VRAM, beste Qualität auf 12 GB. Für leichtere Option: `ollama run qwen3:8b` bei ~7 GB.',
            '**Coding:** `ollama run qwen3:8b` — starke Allround-Coding-Leistung. ~7 GB VRAM. 16–20 Tok/Sek.',
            '**Reasoning / Mathematik:** `ollama run deepseek-r1:7b` — Chain-of-Thought. 10–12 Tok/Sek.',
            '**Schreiben / Kreativ:** `ollama run mistral:7b` — Beste Instruktionsfolge. 18 Tok/Sek.',
            '**Vision / Bilder:** `ollama run gemma4:e12b` — Multimodal (Bilder). 11–14 Tok/Sek. ~9 GB VRAM. Für leichtere Wahl `ollama run gemma4:e4b` bei ~5 GB.',
            '**Datenschutz / Offline:** Alle oben genannten. 100% lokal. Keine Daten verlassen Ihr Gerät.',
          ],
        },
        'used-vs-new': {
          title: 'Gebraucht vs. Neu: Wo sollten Sie kaufen?',
          items: [
            '**Gebraucht (€30-60 billiger)**: eBay, Facebook Marketplace, Craigslist, lokale Computerreparaturwerkstätten. Höheres Risiko defekter Karten oder schlechtem VRAM. Immer vor Festlegung testen.',
            '**Neu (€220-350)**: Amazon.de, Cyberport, Mindfactory, lokale Elektronikfachgeschäfte. Garantie inklusive. Keine Überraschungen. Preise stabil. Gut für risikoscheue Käufer.',
            '**Mined-Karten (Krypto, super günstig)**: Extremes Risiko. VRAM-Degradation häufig. Nur kaufen, wenn Sie vor Ort vollständig testen können.',
          ],
        },
        'mistakes': {
          title: 'Welche Budget-GPU-Fehler sollten Sie vermeiden?',
          items: [
            'Kauf einer 4GB RTX 2060 und Erwartung reibungsloser 7B-Inferenz--Sie erhalten ständig Out-of-Memory-Fehler.',
            'Pairing einer €150-GPU mit einem €20-Netzteil--Spannungsabfall tötet Stabilität. Budget 80+ Gold-zertifiziert, 550W Minimum.',
            'Annahme, dass DDR5-RAM und i9-CPU die LLM-Inferenz beschleunigen--das tun sie nicht. GPU-VRAM-Bandbreite ist der einzige Engpass, der Inferenzgeschwindigkeit beeinflusst.',
            'Annahme, dass Llama 4 Scout in 12 GB passt. Scout ist ein MoE mit 17B aktiv / 109B insgesamt und benötigt ~55 GB bei Q4 (er passt nur in 24 GB bei extremem 1.78-bit-Quant, ~20 Tok/s). Führen Sie auf einer 12-GB-RTX 3060 stattdessen dichte Modelle aus: Qwen3 14B (~9 GB), Qwen3 8B oder Gemma 4 E12B.',
            'Kauf einer 16 GB-Karte nur für 13B-Modelle. Eine 12-GB-RTX 3060 führt Qwen3 14B bei Q4 bereits aus. Steigen Sie nur auf 16 GB um, wenn Sie spezifisch gpt-oss:20b (16 GB), dichte 20B+-Modelle oder mehr Kontext-Spielraum benötigen.',
          ],
        },
        'final-verdict': {
          title: 'Welche Budget-GPU sollten Sie kaufen?',
          content: [
            '**Für Codierungsaufgaben:** Wählen Sie RTX 3060 12GB oder RTX A4000 (16GB) + Qwen 2.5 7B. Sie erhalten starke Code-Generierung ohne Überausgaben.',
            '**Für allgemeines Reasoning:** Wählen Sie RTX 4060 Ti 8GB oder RTX 3060 12GB + Llama 3.3 7B. Bestes Gleichgewicht aus Kosten und Fähigkeiten.',
            '**Für leichte lokale Setups:** Wählen Sie RTX 4060 Ti 8GB + Mistral 7B. Schnellste Inferenz, niedrigster Stromverbrauch, minimales VRAM-Fußabdruck.',
            '**Gesamtempfehlung:** RTX 3060 12GB (gebraucht, €150-190) ist unschlagbarer Wert. Passt zu allen 7B-13B-Modellen, hat 12GB VRAM-Puffer und kostet weniger als neue Entry-Level-Karten.',
          ],
        },
        'faqSection': {
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Ist RTX 3060 12GB noch 2026 wert?', a: 'Ja. Sie ist 4+ Jahre alt, aber 12GB VRAM ist zeitlos. Lädt Qwen3 14B, Qwen3 8B, Gemma 4 E12B und Mistral 7B reibungslos bei Q4. Sie passt für jedes 7B-8B-Modell und die meisten dichten 13B-14B-Modelle.' },
            { q: 'Sollte ich RTX 4060 oder RTX 4060 Ti für lokale LLMs kaufen?', a: 'RTX 4060 Ti. Das Base-4060 (8GB) und 4070 (12GB) sind schlechtes Preis-Leistungs-Verhältnis. Das Ti ist die beste Preis-RTX-40er-Serie für LLM-Arbeiten.' },
            { q: 'Kann ich stattdessen eine AMD RX 6700 oder 6800 XT verwenden?', a: 'Ja, aber Driver-Support für ONNX Runtime auf AMD ist schwächer als NVIDIA + CUDA. Erwarten Sie mehr Setup-Reibung. RTX ist sicherer für Budgets.' },
            { q: 'Reichen 12GB VRAM für 13B-Modelle?', a: 'Kaum, bei Q4-Quantisierung. Q5 oder Q8 verursachen OOM-Fehler. Wenn Sie 13B-Komfort wollen, zielen Sie auf 16GB ab.' },
            { q: 'Sollte ich eine gebrauchte Enterprise-GPU wie RTX A4000 kaufen?', a: 'Ja, falls verfügbar. 16GB VRAM, professionelle Kühlung, normalerweise €130-180 gebraucht. Leicht langsamer als RTX 3060, aber VRAM-Puffer ist es wert.' },
            { q: 'Welche PSU-Leistung sollte ich mit einer €150-GPU kaufen?', a: '550W, 80+ Gold Minimum. Eine €150-GPU + CPU + Mainboard überschreitet nicht 350W, aber Sie wollen Kopfraum für Spitzen.' },
            { q: 'Kann ich Ollama mit einer €100-Budget-GPU ausführen?', a: 'Ja. Ollama ist leichtgewichtig. Eine 4 Jahre alte RTX 3060 mit Ollama lädt Qwen3 14B bei 9-12 Tok/Sek oder Qwen3 8B bei 16-20 Tok/Sek — völlig nutzbar für interaktiven Chat und Code-Unterstützung.' },
            { q: 'Was sind die VRAM-Anforderungen für DSGVO-konforme lokale Inferenz in Unternehmen?', a: 'Minimum RTX 3060 12GB oder A4000 16GB für bis zu 50 Benutzer mit Llama 3.3 13B Q4. ECC-GPU empfohlen für Fehlererkennung. Firmware/physische Sicherheit verhindert GPU-Memory-Dumps.' },
            { q: 'Welche GPU empfiehlt sich für einen Team-Server im deutschen Mittelstand?', a: 'RTX 3060 12GB oder A4000 für 1-50 Mitarbeiter. RTX 4070 Super oder A6000 für 50-200 Mitarbeiter. RTX 3060 kann Llama 3.3 13B Q4 + vLLM mit 3-5 gleichzeitigen Anfragen ausführen. Größere Teams benötigen A100 mit Enterprise-Clustering.' },
            { q: 'Kann ich Llama 4 Scout auf einer RTX 3060 12GB ausführen?', a: 'Normalerweise nicht. Llama 4 Scout ist ein MoE mit 17B aktiv / 109B insgesamt und benötigt ~55 GB VRAM bei Q4 — weit über einer 12-GB-Karte. Er passt nur in 24 GB bei einem extremen 1.78-bit-Quant (~20 Tok/Sek). Führen Sie auf einer RTX 3060 12GB stattdessen dichte Modelle aus: `ollama pull qwen3:14b` (beste Qualität, die passt), Qwen3 8B oder Gemma 4 E12B. Scout ist eine Wahl für langen Kontext (10M Token) / große Multimodalität auf Systemen mit 48 GB+.' },
          ],
        },
        'recommended-setups': {
          title: 'Welche Hardware-Einrichtung funktioniert für jedes Modell?',
          items: [
            '**Für Llama 3.3 70B lokal:** Siehe [70B-Modelle auf Consumer-Hardware](/de/local-llms/70b-models-consumer-hardware) für RTX 4090, Dual-GPU und Enterprise-GPU-Empfehlungen.',
            '**Für Qwen 2.5 Codierungsmodelle:** Siehe [Beste GPUs für lokale LLMs](/de/local-llms/best-gpus-for-local-llms) für optimierte Qwen-Setups.',
            '**Für Mistral 7B auf minimaler Hardware:** Dieser Leitfaden (RTX 3060 oder 4060 Ti) ist Ihr Startpunkt.',
            '**Zum Berechnen exakter VRAM-Anforderungen:** Verwenden Sie [How Much VRAM Do You Need?](/de/local-llms/how-much-vram-local-llm) für Ihre Modellgröße und Quantisierungsstufe.',
          ],
        },
        'relatedReading': {
          title: 'Weiterführende Literatur',
          items: [
            '[Wie viel VRAM für lokale LLMs](/de/local-llms/how-much-vram-local-llm)',
            '[70B-Modelle auf Consumer-Hardware](/de/local-llms/70b-models-consumer-hardware)',
            '[RTX 5090 vs RTX 4090](/de/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Gebrauchte GPUs für lokale LLMs](/de/local-llms/used-gpus-for-local-llms)',
            '[Beste GPUs für lokale LLMs](/de/local-llms/best-gpus-for-local-llms)',
            '[How Much VRAM Do You Need?](/de/local-llms/how-much-vram-local-llm)',
            '[Prompt Engineering für lokale Modelle](/de/prompt-engineering/prompt-engineering-for-local-models) — Prompts für Modelle auf Budget-Hardware optimieren.',
            '[Chain-of-Thought Prompting](/de/prompt-engineering/chain-of-thought-prompting) — Verbessert DeepSeek-R1 Output-Qualität erheblich.',
            '[Mac Mini M5 als lokaler KI-Server](/de/local-llms/mac-mini-m5-local-ai-server) — Budget-Alternative zu GPU-Builds: Dauerbetrieb-KI für 599 $ Hardware + 35 $/Jahr Strom.',
            '[Apple Silicon M5 für lokale LLMs](/de/local-llms/apple-silicon-m5-local-llm) — Vollständiger M5 Pro/Max-Leitfaden: Benchmarks, Mac-Konfigurationen, Speicherstufen und welcher Mac zum Kauf für lokale Inferenz.',
            '[Apple Silicon vs NVIDIA GPU für lokale LLMs](/de/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Vollständiger Kosten- und Leistungsvergleich: wann schlägt ein Mac ein Budget-GPU.',
            '[Beste Modelle für Apple Silicon 2026](/de/local-llms/best-models-apple-silicon-2026) — Modellempfehlungen für 16 GB–128 GB Unified Memory.',
            'Für Japan-spezifische GPU-Preise, Akihabara-Händler und Gebrauchtmarkt-Optionen bei Mercari und Yahoo Auctions, lesen Sie unseren <a href="/de/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">Leitfaden zum besten GPU-Preis-Leistungs-Verhältnis in Japan</a>.',
          ],
        },
        'sources': {
          title: 'Quellen',
          items: [
            'Meta AI. (2025). "Llama 4 Model Card." — Scout MoE-Architektur, VRAM-Anforderungen',
            'Qwen Team. (2026). "Qwen3 Technical Report." — Qwen3 8B Spezifikationen',
            'TechPowerUp GPU-Datenbank: RTX 3060 / RTX 4060 Ti / RTX 4070 Super Spezifikationen und Stromverbrauch',
            'NVIDIA CUDA Capability Matrix: GPU-Speicherbandbreite und theoretischer Durchsatz für Inferenz-Workloads',
            'Ollama Model Requirements: VRAM-Empfehlungen für Llama 4 Scout, Qwen3 und Mistral 7B Quantisierungsstufen',
          ],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/de/local-llms/best-budget-gpus-local-llm',
        name: 'Beste Budget-GPUs für lokale LLMs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'RTX 3060 12GB (€150-190 gebraucht) ist die beste Budget-Wahl für 7B-13B-Modelle.' },
          { '@type': 'ListItem', position: 2, name: 'RTX 4060 Ti 8GB (€220-250) bietet neuere Technologie und bessere Effizienz, aber weniger VRAM.' },
          { '@type': 'ListItem', position: 3, name: 'Kaufen Sie niemals eine 2GB- oder 4GB-Karte für lokale LLMs--minimales nutzbares VRAM ist 8GB für komfortable Inferenz.' },
          { '@type': 'ListItem', position: 4, name: 'Gebrauchte Enterprise-Karten (RTX A2000, RTX A4000) bieten ausgezeichnete 12GB-16GB VRAM für €100-200.' },
          { '@type': 'ListItem', position: 5, name: 'Budgetieren Sie €200-300 für GPU, €300-400 für Rest des Systems (CPU, RAM, SSD), um Engpässe zu vermeiden.' },
          { '@type': 'ListItem', position: 6, name: 'Vermeiden Sie DDR5-RAM und High-End-CPUs mit Budget-GPUs--sie verbessern nicht die LLM-Geschwindigkeit.' },
        ],
        regionalContext: {
          title: 'Regionale DACH-Anwendung und Compliance-Kontext',
          content: [
            '**GPU-Beschaffung in Deutschland unterliegt DSGVO und BSI-Richtlinien.** Unternehmen müssen Datenspeicherung lokal halten--remote GPU-Services disqualifizieren sich. DACH-Unternehmen bevorzugen Enterprise-GPUs (RTX A4000, A5000) für dedizierte On-Prem-Systeme.',
            '**Österreich und Schweiz:** Ähnliche Compliance-Anforderungen wie Deutschland. Lokale IT-Beschaffung ist Standard für sensible Workloads. PromptQuorum hilft Mittelständlern, die richtige lokale Hardware für DSGVO-Konformität auszuwählen.',
            '**Typische Deployment-Szenarien:** Law Firms, Finanzunternehmen, Pharma, und Forschungsinstitute benötigen isolierte GPU-Infrastruktur. PromptQuorum ermöglicht Benchmarking auf Kandidaten-GPUs vor großen Anschaffungen.',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/de/local-llms/best-budget-gpus-local-llm',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Lohnt sich RTX 3060 12GB 2026 noch?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. 4+ Jahre alt, aber 12GB VRAM ist zeitlos. Läuft Llama 3.3 8B und Mistral 7B reibungslos. Ideal wenn gebraucht unter €190 gefunden.' } },
          { '@type': 'Question', 'name': 'RTX 4060 oder RTX 4060 Ti für lokale LLMs?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 4060 Ti. Basis-4060 (8GB) und 4070 (12GB) sind Wertfalle. Ti ist die beste Preisspanne der RTX 40er Serie für LLM-Arbeit.' } },
          { '@type': 'Question', 'name': 'Kann ich AMD RX 6700 oder 6800 XT statt RTX verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, aber ONNX Runtime Treiberunterstützung auf AMD schwächer als NVIDIA + CUDA. Erwarten Sie mehr Setup-Reibung. RTX ist sicherer für Budget.' } },
          { '@type': 'Question', 'name': 'Reichen 12GB VRAM für 13B-Modelle?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Knapp, bei Q4 Quantisierung. Q5 oder Q8 führen zu OOM-Fehlern. Für komfortable 13B-Ausführung auf 16GB zielen.' } },
          { '@type': 'Question', 'name': 'Sollte ich gebrauchte Enterprise-GPUs wie RTX A4000 kaufen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, falls vorhanden. 16GB VRAM, professionelle Kühlung, üblicherweise gebraucht €150-200. Etwas langsamer als RTX 3060, aber VRAM-Puffer wertvoll.' } },
        ],
      },
    },
    fr: {
      theme: 'GPU Buying Guides',
      title: 'Meilleurs GPU Budget pour les LLM Locaux',
      seoTitle: 'RTX 3060 à RX 6800 XT : 5 GPU budget pour LLMs locaux 2026',
      intro: '**La RTX 3060 12 Go exécute Qwen3 14B à 9–12 tok/sec, Qwen3 8B à 16–20 tok/sec, Gemma 4 E12B à 11–14 tok/sec, Mistral 7B à 18 tok/sec et DeepSeek-R1 7B à 10–12 tok/sec — le tout en quantification Q4.** La variante 6 Go est limitée aux modèles 3B. En juin 2026, la RTX 3060 12 Go (200–250 $ d\'occasion) reste le meilleur GPU budget pour les LLM locaux : 12 Go VRAM accueille tous les modèles 7B-8B en Q4/Q5 et la plupart des denses 13B-14B en Q4. (Note : Llama 4 Scout est un MoE de 17B actifs/109B au total nécessitant ~55 Go en Q4 — il ne tient pas dans 12 Go normalement.)',
      metaDescription: 'RTX 3060 12GB (200-250 € d\'occasion) domine pour les modèles 7B. 5 GPU budget classés par VRAM et prix pour Qwen3 14B et Mistral 7B en 2026.',
      nextStep: {
        text: 'Vous avez choisi votre GPU ? Choisissez maintenant le bon logiciel pour exécuter vos modèles.',
        label: 'Meilleurs frontends LLM locaux 2026 →',
        href: '/local-llms/best-local-llm-frontends',
      },
      publishDate: '2026-04-05',
      dateModified: '2026-06-01',
      readTime: '7 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'GPU Budget pour LLMs locaux',
      toc: [
        { label: 'TLDR', anchor: '#tldr' },
        { label: 'Que peut-on exécuter sur RTX 3060 12 Go ?', anchor: '#rtx-3060-12gb' },
        { label: 'Que peut-on exécuter sur RTX 3060 6 Go ?', anchor: '#rtx-3060-6gb' },
        { label: 'RTX 3060 vs autres GPU budget', anchor: '#which-budget-gpus' },
        { label: 'Combien de VRAM pour les modèles 7B ?', anchor: '#vram-7b' },
        { label: 'Meilleurs modèles par usage sur RTX 3060', anchor: '#best-by-use-case' },
        { label: 'Occasion vs. Neuf : où acheter ?', anchor: '#used-vs-new' },
        { label: 'Erreurs courantes GPU budget', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: { id: 'key-takeaways',
 isTldr: true, items: ['**RTX 3060 12 Go** (200–250 $ d\'occasion) : Exécute tous les 7B-8B en Q4/Q5 et la plupart des denses 13B-14B en Q4. Meilleur choix budget.', '**RTX 3060 6 Go** : Limité aux modèles 3B (Phi-4 Mini, Llama 3.2 3B). Trop juste pour 7B.', '**Meilleur modèle global sur 12 Go :** Qwen3 14B à ~9 Go VRAM, 9–12 tok/sec. Meilleure qualité dense qui tient confortablement.', '**Meilleur modèle code sur 12 Go :** Qwen3 8B à 16–20 tok/sec.', '**Meilleur modèle raisonnement sur 12 Go :** DeepSeek-R1 7B à 10–12 tok/sec.', '**À éviter si :** vous voulez des modèles 70B, Llama 4 Scout (nécessite ~55 Go) ou 13B en Q8 — il faut 24 Go+ (RTX 4090).'] },
        'rtx-3060-12gb': {
          id: 'rtx-3060-12gb',
          title: 'Que peut-on exécuter sur RTX 3060 12 Go ?',
          content: [
            '**La RTX 3060 12 Go est le meilleur GPU budget pour les LLM locaux en 2026.** 12 Go de VRAM accueille tous les modèles 7B en Q4/Q5 et la plupart des 13B en Q4. Pour des conseils détaillés sur les exigences VRAM selon les tailles de modèles, consultez le [guide des exigences VRAM →](/fr/local-llms/how-much-vram-local-llm). Voici les modèles exacts et les vitesses attendues :',
          ],
          columns: ['Modèle', 'Taille', 'Quantification', 'VRAM', 'Vitesse', 'Idéal pour'],
          rows: [
            { 'Modèle': 'Qwen3 14B', 'Taille': '14B (dense)', 'Quantification': 'Q4_K_M', 'VRAM': '~9 Go', 'Vitesse': '9–12 tok/sec', 'Idéal pour': 'Meilleure qualité globale qui tient' },
            { 'Modèle': 'Qwen3 8B', 'Taille': '8B', 'Quantification': 'Q4_K_M', 'VRAM': '~7 Go', 'Vitesse': '16–20 tok/sec', 'Idéal pour': 'Code, polyvalent' },
            { 'Modèle': 'Gemma 4 E12B', 'Taille': '26B MoE', 'Quantification': 'Q4_K_M', 'VRAM': '~9 Go', 'Vitesse': '11–14 tok/sec', 'Idéal pour': 'Vision, multimodal' },
            { 'Modèle': 'Mistral 7B v0.3', 'Taille': '7B', 'Quantification': 'Q4_K_M', 'VRAM': '~7 Go', 'Vitesse': '18 tok/sec', 'Idéal pour': 'Suivi d\'instructions' },
            { 'Modèle': 'DeepSeek-R1 7B', 'Taille': '7B', 'Quantification': 'Q4_K_M', 'VRAM': '~7 Go', 'Vitesse': '10–12 tok/sec', 'Idéal pour': 'Raisonnement, maths' },
            { 'Modèle': 'Gemma 4 E4B', 'Taille': 'E4B (multimodal)', 'Quantification': 'Q4_K_M', 'VRAM': '~5 Go', 'Vitesse': '18–22 tok/sec', 'Idéal pour': 'Vision légère, chat rapide' },
            { 'Modèle': 'Llama 3.2 13B', 'Taille': '13B', 'Quantification': 'Q4_K_M', 'VRAM': '~11 Go', 'Vitesse': '8–10 tok/sec', 'Idéal pour': 'Chat haute qualité (Q4 seulement)' },
          ],
          note: 'Qwen3 14B (dense) est le modèle de meilleure qualité qui tient confortablement sur une RTX 3060 12GB en Q4_K_M, utilisant ~9 Go. `ollama pull qwen3:14b`. Note : Llama 4 Scout (MoE de 17B actifs / 109B total, contexte 10M tokens, multimodal) nécessite ~55 Go en Q4 et ne tient pas dans 12 Go normalement — c\'est un choix pour contexte long / grande multimodalité sur des configurations à forte VRAM, pas une recommandation de GPU budget. gpt-oss:20b (21B total / 3.6B actifs MoE) nécessite 16 Go, donc juste hors de portée sur une carte de 12 Go. Toutes les vitesses mesurées avec Ollama sur RTX 3060 12 Go, 16 Go RAM système, Ryzen 7 7700X. Quantification Q4_K_M. Variations ±15%.',
        },
        'rtx-3060-6gb': {
          id: 'rtx-3060-6gb',
          title: 'Que peut-on exécuter sur RTX 3060 6 Go ?',
          content: [
            '**La variante 6 Go est très limitée.** Seuls les modèles 3B tiennent confortablement. Les 7B en Q4 nécessitent ~7 Go — plus que disponible.',
          ],
          items: [
            '**Phi-4 Mini 3.8B (Q4) :** ~3 Go VRAM, 20–25 tok/sec. Meilleur raisonnement à cette taille.',
            '**Llama 3.2 3B (Q4) :** ~2,5 Go VRAM, 25–35 tok/sec. Option la plus rapide.',
            '**Gemma 2 2B (Q4) :** ~1,7 Go VRAM, 35–45 tok/sec. Modèle le plus léger.',
            '**7B avec offloading :** Possible mais lent. Llama 7B avec CPU offload = ~5–8 tok/sec.',
            '**Recommandation :** Si vous avez une carte 6 Go, passez à 12 Go d\'occasion (200–250 $).',
          ],
        },
        'what-gpu-budget': { title: 'Quel budget GPU devriez-vous allouer?', content: ['Pour un système LLM local fonctionnel, prévoyez **800-1 200 € de coût total du système**, avec **GPU = 30-40% de ce budget** (~300-400 €).', 'Un GPU à 300 € associé à un CPU à 30 € crée des goulots. Un GPU à 1 500 € avec une carte mère à 30 € gaspille de l\'argent.', 'En avril 2026, le pic performance-par-euro se situe dans la gamme 300-400 € (RTX 3060-4070 Super d\'occasion).'] },
        'which-budget-gpus': { title: 'RTX 3060 vs autres GPU budget',
          columns: ['GPU', 'VRAM', 'Prix (Occasion)', 'Vitesse 7B', 'Max modèle', 'Verdict'],
          rows: [
            { 'GPU': 'RTX 3060 12 Go ★', 'VRAM': '12 Go', 'Prix (Occasion)': '180–230 €', 'Vitesse 7B': '15–20 tok/sec', 'Max modèle': '13B (Q4)', 'Verdict': 'Meilleur choix budget' },
            { 'GPU': 'RTX 4060 Ti 8 Go', 'VRAM': '8 Go', 'Prix (Occasion)': '230–280 €', 'Vitesse 7B': '20–25 tok/sec', 'Max modèle': '7B (Q5 max)', 'Verdict': 'Plus rapide, moins VRAM' },
            { 'GPU': 'RTX A4000', 'VRAM': '16 Go', 'Prix (Occasion)': '160–210 €', 'Vitesse 7B': '12–15 tok/sec', 'Max modèle': '13B (Q5)', 'Verdict': 'Meilleur VRAM par euro' },
            { 'GPU': 'RTX 4070 Super', 'VRAM': '12 Go', 'Prix (Occasion)': '370–420 €', 'Vitesse 7B': '25–30 tok/sec', 'Max modèle': '13B (Q5)', 'Verdict': 'Plus rapide, 2× prix' },
            { 'GPU': 'RX 6700 XT', 'VRAM': '12 Go', 'Prix (Occasion)': '130–180 €', 'Vitesse 7B': '10–14 tok/sec', 'Max modèle': '13B (Q4)', 'Verdict': 'Moins cher, friction AMD' },
          ],
          note: 'La RTX 3060 12 Go l\'emporte en valeur : 12 Go VRAM pour 180–230 € exécute tous les 7B et la plupart des 13B.',
        },
        'best-for-each-use': { title: 'Quel modèle est le meilleur pour chaque cas d\'usage?', content: ['**Codage (Qwen 2.5 7B)**: Qwen 2.5 7B excelle à la génération de code et au raisonnement. Nécessite RTX 3060 12GB ou RTX 4060 Ti 8GB. Idéal sur les cartes enterprise RTX A6000 si disponibles pour les modèles 32B+.', '**Raisonnement Anglais (Llama 3.3)**: Llama 3.3 est le meilleur modèle polyvalent pour le raisonnement factuel. Llama 3.3 70B nécessite 48GB VRAM (RTX 6000 ou A100). La version 7B tient sur n\'importe quel GPU 8GB+.', '**Utilisation locale légère (Mistral 7B)**: Mistral 7B est le modèle haut de gamme le plus léger. S\'exécute confortablement sur RTX 3060 12GB ou RTX 4060 Ti 8GB. Parfait pour l\'inférence portative.'] },
        'quick-answer': { title: 'Quels modèles gagnent par cas d\'usage?', content: ['✅ **Meilleur au global:** Llama 3.3 (ouvert, capable, largement optimisé)', '✅ **Meilleur pour le codage:** Qwen 2.5 (compréhension de code spécialisée)', '✅ **Meilleur léger:** Mistral 7B (VRAM minimal, inférence rapide)', '✅ **Meilleur GPU budget:** RTX 3060 12GB (200-250 € d\'occasion)'] },
        'model-comparison': { title: 'Comparaison des modèles: Quel modèle gagne?', columns: ['Modèle', 'Meilleur pour', 'Force', 'Faiblesse', 'Min VRAM (Q4)'], rows: [{ 'Modèle': 'Qwen 2.5 7B', 'Meilleur pour': 'Codage', 'Force': 'Excellente précision de code, raisonnement multilingue', 'Faiblesse': 'Plus faible au raisonnement anglais pur vs Llama', 'Min VRAM (Q4)': '6-8 GB' }, { 'Modèle': 'Llama 3.3 8B', 'Meilleur pour': 'Raisonnement', 'Force': 'Polyvalent fort, raisonnement factuel', 'Faiblesse': 'Plus lourd que Mistral, plus de VRAM requis', 'Min VRAM (Q4)': '8-10 GB' }, { 'Modèle': 'Mistral 7B', 'Meilleur pour': 'Efficacité', 'Force': 'Inférence la plus rapide, VRAM minimal, léger', 'Faiblesse': 'Moins capable que Llama/Qwen aux tâches complexes', 'Min VRAM (Q4)': '6-8 GB' }], tableFormat: true },
        'vram-7b': { title: 'Combien de VRAM avez-vous besoin pour les modèles 7B?', content: ['Les modèles 7B quantifiés à Q4 (4-bit) nécessitent **6-8GB VRAM**; Q5 (5-bit) nécessite **8-10GB**; Q8 (8-bit) nécessite **14-16GB**.', 'En pratique: **8GB est le minimum absolu** pour une inférence confortable sur les modèles 7B à Q4 avec espace pour le traitement par lot.', 'Les cartes 6GB (RTX 2060) fonctionnent techniquement mais nécessitent une optimisation agressive et ne laissent pas de place pour des lots plus élevés.', 'Le coût GPU est un côté de l\'économie ; le coût des tokens en est l\'autre. L\'inférence locale élimine les frais API par token, mais la longueur du prompt affecte toujours la latence et le débit. Pour le tableau complet des coûts — tokens, niveaux de tarification et stratégies d\'optimisation — voir [tokens, coûts et limites : l\'économie du prompting IA](https://www.promptquorum.com/fr/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting).'] },
        'best-by-use-case': {
          id: 'best-by-use-case',
          title: 'Meilleurs modèles par usage sur RTX 3060',
          content: [
            '**Choisissez votre modèle selon votre besoin, pas le nombre de paramètres :**',
            'Le matériel d\'entrée de gamme fait tourner des modèles plus petits — mais un prompting habile comble l\'écart de qualité. Le [guide de prompt engineering](https://www.promptquorum.com/fr/prompt-engineering) couvre des techniques comme la chain-of-thought et les sorties structurées qui aident les modèles plus petits à performer au-delà de leur taille. Un cas d\'usage concret qui rentre dans le palier RTX 3060 12 Go est la revue automatique de pull-requests — voir [Revue de code par LLM local en CI/CD](/fr/power-local-llm/local-llm-code-review-ci-cd) pour le pattern GitHub Actions qui fait tourner Qwen3 8B contre des PR sur exactement ce matériel.',
          ],
          items: [
            '**Chat / Q&R :** `ollama run qwen3:14b` — dense 14B, ~9 Go VRAM, meilleure qualité sur 12 Go. Pour une option plus légère : `ollama run qwen3:8b` à ~7 Go.',
            '**Code :** `ollama run qwen3:8b` — solide en codage polyvalent. ~7 Go VRAM. 16–20 tok/sec.',
            '**Raisonnement / Maths :** `ollama run deepseek-r1:7b` — Chain-of-thought. 10–12 tok/sec.',
            '**Écriture / Créatif :** `ollama run mistral:7b` — Meilleur suivi d\'instructions. 18 tok/sec.',
            '**Vision / Images :** `ollama run gemma4:e12b` — Multimodal. 11–14 tok/sec. ~9 Go VRAM. Pour un choix plus léger, `ollama run gemma4:e4b` à ~5 Go.',
            '**Confidentialité / Hors ligne :** Tous les modèles ci-dessus. 100% local.',
          ],
        },
        'used-vs-new': { title: 'Occasion vs. Neuf: Où devriez-vous acheter?', items: ['**Occasion (50-100 € moins cher)**: eBay, Facebook Marketplace, Craigslist, magasins de réparation informatique locaux. Risque plus élevé de cartes mortes ou de mauvais VRAM. Testez toujours avant engagement.', '**Neuf (280-400 €)**: Amazon.fr, LDLC, Materiel.net, Darty. Garantie incluse. Aucune surprise. Prix stables. Bon pour les acheteurs aversifs au risque.', '**Cartes minées (crypto, super bon marché)**: Risque extrême. Dégradation du VRAM commune. Achetez seulement si vous pouvez tester complètement sur place.'] },
        'mistakes': { title: 'Quelles erreurs GPU budget devriez-vous éviter?', items: ['Acheter une RTX 2060 4GB et s\'attendre à une inférence 7B fluide--vous aurez constamment des erreurs de mémoire insuffisante.', 'Associer un GPU à 300 € avec un PSU à 30 € (alimentation)--la chute de tension tue la stabilité. Budgétisez 80+ Gold certifié, 650W minimum.', 'Supposer que la RAM DDR5 et le CPU i9 accélèrent l\'inférence des LLM--ils ne le font pas. La bande passante du VRAM GPU est le seul goulot qui affecte la vitesse d\'inférence.', 'Supposer que Llama 4 Scout tient dans 12 Go. Scout est un MoE de 17B actifs / 109B total nécessitant ~55 Go en Q4 (il ne tient dans 24 Go qu\'avec un quant extrême 1.78-bit, ~20 tok/s). Sur une RTX 3060 12 Go, exécutez plutôt des modèles denses : Qwen3 14B (~9 Go), Qwen3 8B ou Gemma 4 E12B.', 'Acheter une carte 16 Go juste pour les modèles 13B. Une RTX 3060 12 Go exécute déjà Qwen3 14B en Q4. Passez à 16 Go uniquement si vous avez spécifiquement besoin de gpt-oss:20b (16 Go), de modèles denses 20B+ ou de plus de marge de contexte.'] },
        'final-verdict': { title: 'Quel GPU budget devriez-vous acheter?', content: ['**Pour les tâches de codage:** Choisissez RTX 3060 12GB ou RTX A4000 (16GB) + Qwen 2.5 7B. Vous obtenez une génération de code forte sans dépenses excessives.', '**Pour le raisonnement polyvalent:** Choisissez RTX 4060 Ti 8GB ou RTX 3060 12GB + Llama 3.3 7B. Meilleur équilibre coût et capacité.', '**Pour les configurations locales légères:** Choisissez RTX 4060 Ti 8GB + Mistral 7B. Inférence la plus rapide, consommation d\'énergie la plus faible, empreinte VRAM minimale.', '**Recommandation globale:** RTX 3060 12GB (d\'occasion, 200-250 €) est une valeur imbattable. S\'associe à tout modèle 7B-13B, a un coussin VRAM de 12GB et coûte moins que les cartes entry-level neuves.'] },
        'faqSection': { title: 'FAQ', faqs: [{ q: 'La RTX 3060 12GB vaut-elle toujours le coup en 2026?', a: 'Oui. Elle a 4+ ans, mais 12GB VRAM est intemporel. Exécute Qwen3 14B, Qwen3 8B, Gemma 4 E12B et Mistral 7B sans à-coups en Q4. Elle accueille tous les modèles 7B-8B et la plupart des denses 13B-14B.' }, { q: 'Devrais-je acheter RTX 4060 ou RTX 4060 Ti pour les LLM locaux?', a: 'RTX 4060 Ti. La base 4060 (8GB) et 4070 (12GB) offrent un mauvais rapport qualité-prix. Le Ti est la meilleure carte RTX 40 au prix pour le travail LLM.' }, { q: 'Puis-je utiliser une AMD RX 6700 ou 6800 XT à la place?', a: 'Oui, mais le support des pilotes pour ONNX Runtime sur AMD est plus faible que NVIDIA + CUDA. Attendez-vous à plus de frictions de configuration. RTX est plus sûr pour les budgets.' }, { q: 'Les 12GB VRAM suffisent-ils pour les modèles 13B?', a: 'À peine, à la quantification Q4. Q5 ou Q8 causera des erreurs OOM. Si vous voulez le confort 13B, visez 16GB.' }, { q: 'Devrais-je acheter un GPU enterprise d\'occasion comme RTX A4000?', a: 'Oui, si disponible. 16GB VRAM, refroidissement professionnel, généralement 180-230 € d\'occasion. Légèrement plus lent que RTX 3060, mais le coussin VRAM en vaut la peine.' }, { q: 'Quelle puissance PSU devrais-je acheter avec un GPU à 300 €?', a: '650W, 80+ Gold minimum. Un GPU à 300 € + CPU + carte mère ne dépasse pas 400W, mais vous voulez de la marge pour les pics.' }, { q: 'Puis-je exécuter Ollama avec un GPU budget à 200 €?', a: 'Oui. Ollama est léger. Une RTX 3060 vieille de 4 ans avec Ollama exécutera Qwen3 14B à 9-12 tok/sec ou Qwen3 8B à 16-20 tok/sec — totalement utilisable pour chat interactif et assistance en codage.' }, { q: 'Puis-je exécuter Llama 4 Scout sur une RTX 3060 12GB?', a: 'Normalement non. Llama 4 Scout est un MoE de 17B actifs / 109B total nécessitant ~55 Go VRAM en Q4 — bien au-delà d\'une carte 12 Go. Il ne tient dans 24 Go qu\'avec un quant extrême 1.78-bit (~20 tok/sec). Sur une RTX 3060 12GB, exécutez plutôt des modèles denses : `ollama pull qwen3:14b` (meilleure qualité qui tient), Qwen3 8B ou Gemma 4 E12B. Scout est un choix pour contexte long (10M tokens) / grande multimodalité sur des configurations à 48 Go+.' }, { q: 'Quel GPU recommandez-vous pour la conformité RGPD en entreprise?', a: 'Minimum RTX 3060 12GB ou A4000 16GB pour jusqu\'à 50 utilisateurs avec Llama 3.3 13B Q4. GPU ECC recommandée pour la détection d\'erreurs. La sécurité du firmware/physique empêche les dumps de GPU-Memory.' }, { q: 'Quel GPU est recommandé pour un serveur d\'équipe en petite entreprise?', a: 'RTX 3060 12GB ou A4000 pour 1-50 employés. RTX 4070 Super ou A6000 pour 50-200 employés. RTX 3060 peut exécuter Llama 3.3 13B Q4 + vLLM avec 3-5 requêtes simultanées. Les équipes plus grandes nécessitent A100 avec clustering enterprise.' }, { q: 'Quelle est la différence de performance entre RTX 3060 et 4060 Ti?', a: 'RTX 4060 Ti est ~15-20% plus rapide, mais RTX 3060 a 4GB VRAM supplémentaires. Pour les modèles 7B, les deux offrent une inférence confortable; choisissez selon le budget.' }, { q: 'Les cartes minées sont-elles sûres pour les LLM locaux?', a: 'Risqué. Le VRAM se dégrade après des années d\'exploitation intensive. Achetez seulement si vous pouvez stresser-tester sur place complètement avant engagement.' }] },
        'recommended-setups': { title: 'Quelle configuration matérielle fonctionne pour chaque modèle?', items: ['**Pour exécuter Llama 3.3 70B localement:** Voir [Modèles 70B sur matériel grand public](/fr/local-llms/70b-models-consumer-hardware) pour recommandations RTX 4090, double GPU et GPU enterprise.', '**Pour les modèles de codage Qwen 2.5:** Voir [Meilleurs GPU pour LLM locaux](/fr/local-llms/best-gpus-for-local-llms) pour configurations Qwen optimisées.', '**Pour exécuter Mistral 7B sur matériel minimal:** Ce guide (RTX 3060 ou 4060 Ti) est votre point de départ.', '**Pour calculer les besoins VRAM exacts:** Utilisez [Calculatrice VRAM](/fr/local-llms/how-much-vram-local-llm) pour votre taille de modèle et niveau de quantification.'] },
        'relatedReading': { title: 'Lecture Associée', items: ['[Combien de VRAM pour les LLM locaux](/fr/local-llms/how-much-vram-local-llm)', '[Modèles 70B sur matériel grand public](/fr/local-llms/70b-models-consumer-hardware)', '[RTX 5090 vs RTX 4090](/fr/local-llms/rtx-5090-vs-rtx-4090-local-llm)', '[GPU d\'occasion pour LLM locaux](/fr/local-llms/used-gpus-for-local-llms)', '[Meilleurs GPU pour LLM locaux](/fr/local-llms/best-gpus-for-local-llms)', '[Calculatrice VRAM](/fr/local-llms/how-much-vram-local-llm)', '[Prompt Engineering pour modèles locaux](/fr/prompt-engineering/prompt-engineering-for-local-models) — optimisez les prompts pour les modèles sur matériel budget.', '[Chain-of-Thought Prompting](/fr/prompt-engineering/chain-of-thought-prompting) — améliore considérablement la qualité des résultats DeepSeek-R1.', '[Mac Mini M5 comme serveur IA local](/fr/local-llms/mac-mini-m5-local-ai-server) — Alternative budget aux builds GPU : IA en continu à 599 $ matériel + 35 $/an d\'électricité.', '[Apple Silicon M5 pour les LLM locaux](/fr/local-llms/apple-silicon-m5-local-llm) — Guide complet M5 Pro/Max : benchmarks, configurations Mac, niveaux de mémoire et quel Mac acheter pour l\'inférence locale.', '[Apple Silicon vs NVIDIA GPU pour les LLM locaux](/fr/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Comparaison complète coût et performance : quand un Mac bat un GPU budget.', '[Meilleurs modèles pour Apple Silicon 2026](/fr/local-llms/best-models-apple-silicon-2026) — Recommandations de modèles pour 16 Go–128 Go de mémoire unifiée.', 'Pour les prix des GPU spécifiques au Japon, les revendeurs d\'Akihabara et les options du marché d\'occasion sur Mercari et Yahoo Auctions, consultez notre <a href="/fr/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">guide du meilleur GPU qualité-prix au Japon</a>.'] },
        'sources': { title: 'Sources', items: ['Meta AI. (2025). "Llama 4 Model Card." — Architecture Scout MoE, exigences VRAM', 'Qwen Team. (2026). "Qwen3 Technical Report." — Spécifications Qwen3 8B', 'Base de données GPU TechPowerUp: Spécifications RTX 3060 / RTX 4060 Ti / RTX 4070 Super et consommation d\'énergie', 'Matrice de capacité NVIDIA CUDA: Bande passante mémoire GPU et débit théorique pour les charges de travail d\'inférence', 'Exigences de modèle Ollama: Recommandations VRAM pour Llama 4 Scout, Qwen3 et Mistral 7B niveaux de quantification'] },
      },
      itemListSchema: { '@context': 'https://schema.org', '@type': 'ItemList', 'url': 'https://www.promptquorum.com/fr/local-llms/best-budget-gpus-local-llm', 'inLanguage': 'fr', name: 'Meilleurs GPU Budget pour les LLM Locaux', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'RTX 3060 12GB (200-250 € d\'occasion) est le meilleur choix global pour les modèles 7B-13B.' }, { '@type': 'ListItem', position: 2, name: 'RTX 4060 Ti 8GB (280-320 €) offre une technologie plus récente et une meilleure efficacité mais moins de VRAM.' }, { '@type': 'ListItem', position: 3, name: 'N\'achetez jamais une carte 2GB ou 4GB pour les LLM locaux--le VRAM minimum viable est 8GB pour une inférence confortable.' }, { '@type': 'ListItem', position: 4, name: 'Les cartes enterprise d\'occasion (RTX A2000, RTX A4000) offrent un excellent VRAM 12GB-16GB pour 150-250 €.' }, { '@type': 'ListItem', position: 5, name: 'Budgétisez 300-400 € pour le GPU, 400-500 € pour le reste du système (CPU, RAM, SSD) pour éviter les goulots.' }, { '@type': 'ListItem', position: 6, name: 'Évitez la RAM DDR5 et les CPU haut de gamme avec les GPU budget--ils n\'améliorent pas la vitesse des LLM.' }], regionalContext: { title: 'Contexte d\'adoption régionale et de conformité', content: ['**L\'approvisionnement en GPU en France, Belgique et Suisse est affecté par les réglementations d\'efficacité énergétique.** La directive Écoconception influence la disponibilité des GPU sur les marchés européens. Les organisations tiennent compte du coût total de propriété, y compris la consommation d\'énergie selon les exigences de reporting de l\'UE. PromptQuorum aide à déterminer si un GPU milieu de gamme suffit.', '**Les marchés africains et émergents priorisent les GPUs d\'occasion et importés en raison des coûts élevés.** Les taxes d\'importation et les marges de vente au détail rendent les GPU neufs coûteux. Les organisations africaines utilisent généralement les GPUs de génération antérieure (RTX 3000 series) pour réduire les coûts capitaux.', '**L\'approvisionnement en GPU en Amérique du Nord bénéficie de relations directes avec les fabricants et de prix compétitifs.** Les clients enterprise accèdent aux remises de support et de volume NVIDIA. Les GPU grand public (RTX 4060 à 4090) sont largement disponibles pour les petites équipes. PromptQuorum permet l\'analyse comparative sur les GPU candidats avant les grands achats.'] } },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/fr/local-llms/best-budget-gpus-local-llm',
        'mainEntity': [
          { '@type': 'Question', 'name': 'RTX 3060 12GB vaut-il toujours le coup en 2026?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. 4+ ans, mais 12GB VRAM ne vieillit pas. Exécute Llama 3.3 8B et Mistral 7B en douceur. Idéal si vous trouvez un occasion <€190.' } },
          { '@type': 'Question', 'name': 'RTX 4060 ou RTX 4060 Ti pour LLM locaux?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 4060 Ti. Base 4060 (8GB) et 4070 (12GB) mauvaise valeur. Ti est le meilleur rapport qualité-prix de la série RTX 40 pour LLM.' } },
          { '@type': 'Question', 'name': 'Puis-je utiliser AMD RX 6700 ou 6800 XT à la place?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, mais support driver ONNX Runtime sur AMD plus faible que NVIDIA + CUDA. Attendez plus friction configuration. RTX plus sûr budget.' } },
          { '@type': 'Question', 'name': '12GB VRAM suffisent pour modèles 13B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Juste, Q4 quantisation. Q5/Q8 OOM erreurs. Pour fonctionnement 13B confortable, ciblez 16GB.' } },
          { '@type': 'Question', 'name': 'Dois-je acheter GPU enterprise d\'occasion comme RTX A4000?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui si disponible. 16GB VRAM, refroidissement pro, généralement €150-200 occasion. Légèrement plus lent RTX 3060, mais buffer VRAM vaut.' } },
        ],
      },
    },
    ja: {
      theme: 'GPU Buying Guides',
      title: 'ローカルLLM向けの最高のバジェットGPU',
      seoTitle: '2026年ローカルLLM予算GPU比較：RTX 3060からRX 6800 XTまで',
      intro: '**RTX 3060 12GBはQwen3 14Bを9–12トークン/秒、Qwen3 8Bを16–20トークン/秒、Gemma 4 E12Bを11–14トークン/秒、Mistral 7Bを18トークン/秒、DeepSeek-R1 7Bを10–12トークン/秒で実行します — すべてQ4量子化。** 6GB版は3Bモデルのみ対応。2026年6月時点、RTX 3060 12GB（中古$200–250）はローカルLLM用の最良バジェットGPUです。12GB VRAMはすべての7B-8BモデルをQ4/Q5で、ほとんどの稠密13B-14BモデルをQ4で実行できます。（注：Llama 4 Scoutは17Bアクティブ/109B合計のMoEで、Q4で~55GB必要なため、通常12GBには収まりません。）',
      metaDescription: 'RTX 3060 12GB（中古約2万5千円）は2026年の7Bモデル向け最高のコスパGPUです。VRAM・価格・推論速度でQwen3 14B対応の5つのGPUを比較しました。13B対応のVRAM閾値に注意が必要です。',
      nextStep: {
        text: 'GPUは決まりましたか？次はモデルを動かすための最適なソフトウェアを選びましょう。',
        label: 'ローカルLLMベストフロントエンド2026 →',
        href: '/local-llms/best-local-llm-frontends',
      },
      publishDate: '2026-04-05',
      dateModified: '2026-06-01',
      readTime: '7分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'ローカルLLMの予算GPU',
      toc: [
        { label: '重要ポイント', anchor: '#tldr' },
        { label: 'RTX 3060 12GBで何が動く？', anchor: '#rtx-3060-12gb' },
        { label: 'RTX 3060 6GBで何が動く？', anchor: '#rtx-3060-6gb' },
        { label: 'RTX 3060 vs 他のバジェットGPU', anchor: '#which-budget-gpus' },
        { label: '7Bモデルに必要なVRAMは？', anchor: '#vram-7b' },
        { label: 'RTX 3060でのユースケース別最適モデル', anchor: '#best-by-use-case' },
        { label: '中古 vs 新品：どこで買う？', anchor: '#used-vs-new' },
        { label: 'よくあるバジェットGPUの間違い', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: { id: 'key-takeaways',
 isTldr: true, items: ['**RTX 3060 12GB**（中古$200–250）：すべての7B-8BモデルをQ4/Q5で、ほとんどの稠密13B-14BをQ4で実行。最良のバジェット選択。', '**RTX 3060 6GB**：3Bモデルのみ（Phi-4 Mini、Llama 3.2 3B）。7Bには不足。', '**12GBでの最良総合モデル：** Qwen3 14B、~9GB VRAM、9–12トークン/秒。快適に収まる最良の稠密品質。', '**12GBでの最良コーディングモデル：** Qwen3 8B、16–20トークン/秒。', '**12GBでの最良推論モデル：** DeepSeek-R1 7B、10–12トークン/秒。', '**対象外：** 70Bモデル、Llama 4 Scout（~55GB必要）、13B Q8が必要な場合は24GB以上（RTX 4090）が必要。'] },
        'rtx-3060-12gb': { id: 'rtx-3060-12gb', title: 'RTX 3060 12GBで何が動く？', content: ['**RTX 3060 12GBは2026年のローカルLLM用最良バジェットGPUです。** 12GB VRAMはQ4/Q5のすべての7Bモデルと、Q4のほとんどの13Bモデルに対応。モデルサイズ別のVRAM要件について詳しくは、[VRAM要件ガイド →](/ja/local-llms/how-much-vram-local-llm)をご参照ください。期待できる正確なモデルと速度は次の通りです：'], columns: ['モデル', 'サイズ', '量子化', 'VRAM使用', '速度', '最適用途'], rows: [{ 'モデル': 'Qwen3 14B', 'サイズ': '14B（稠密）', '量子化': 'Q4_K_M', 'VRAM使用': '~9 GB', '速度': '9–12トークン/秒', '最適用途': '収まる範囲で最良総合品質' }, { 'モデル': 'Qwen3 8B', 'サイズ': '8B', '量子化': 'Q4_K_M', 'VRAM使用': '~7 GB', '速度': '16–20トークン/秒', '最適用途': 'コーディング、万能' }, { 'モデル': 'Gemma 4 E12B', 'サイズ': '26B MoE', '量子化': 'Q4_K_M', 'VRAM使用': '~9 GB', '速度': '11–14トークン/秒', '最適用途': 'ビジョン、マルチモーダル' }, { 'モデル': 'Mistral 7B v0.3', 'サイズ': '7B', '量子化': 'Q4_K_M', 'VRAM使用': '~7 GB', '速度': '18トークン/秒', '最適用途': '指示従行' }, { 'モデル': 'DeepSeek-R1 7B', 'サイズ': '7B', '量子化': 'Q4_K_M', 'VRAM使用': '~7 GB', '速度': '10–12トークン/秒', '最適用途': '推論、数学' }, { 'モデル': 'Gemma 4 E4B', 'サイズ': 'E4B（マルチモーダル）', '量子化': 'Q4_K_M', 'VRAM使用': '~5 GB', '速度': '18–22トークン/秒', '最適用途': '軽量ビジョン、高速チャット' }, { 'モデル': 'Llama 3.2 13B', 'サイズ': '13B', '量子化': 'Q4_K_M', 'VRAM使用': '~11 GB', '速度': '8–10トークン/秒', '最適用途': '高品質チャット（Q4のみ）' }], note: 'Qwen3 14B（稠密）はQ4_K_MでRTX 3060 12GBに快適に収まる最高品質のモデルで、~9 GBを使用します。`ollama pull qwen3:14b`。注：Llama 4 Scout（17Bアクティブ/109B合計のMoE、10Mトークンコンテキスト、マルチモーダル）はQ4で~55GB必要で、通常12GBには収まりません — 大容量VRAM環境向けの長コンテキスト/大規模マルチモーダル用途であり、バジェットGPUの推奨ではありません。gpt-oss:20b（21B合計/3.6BアクティブMoE）は16GB必要なため、12GBカードでは僅かに手が届きません。すべての速度はOllama、RTX 3060 12GB、16GBシステムRAM、Ryzen 7 7700Xで計測。Q4_K_M量子化。速度は±15%変動。' },
        'rtx-3060-6gb': { id: 'rtx-3060-6gb', title: 'RTX 3060 6GBで何が動く？', content: ['**6GB版は大幅に制限されています。** 3Bモデルのみ快適に動作。7BモデルのQ4は~7GB必要で、容量不足です。'], items: ['**Phi-4 Mini 3.8B（Q4）：** ~3GB VRAM、20–25トークン/秒。このサイズでの最良推論。', '**Llama 3.2 3B（Q4）：** ~2.5GB VRAM、25–35トークン/秒。最速オプション。', '**Gemma 2 2B（Q4）：** ~1.7GB VRAM、35–45トークン/秒。最軽量モデル。', '**7Bオフローディング：** 可能だが遅い。Llama 7BのCPUオフロード = ~5–8トークン/秒。', '**推奨：** 6GBカードをお持ちなら、12GB中古（$200–250）にアップグレードを。'] },
        'which-budget-gpus': { title: 'RTX 3060 vs 他のバジェットGPU', columns: ['GPU', 'VRAM', '価格（中古）', '7B速度', '最大モデル', '評価'], rows: [{ 'GPU': 'RTX 3060 12GB ★', 'VRAM': '12 GB', '価格（中古）': '¥30,000–38,000', '7B速度': '15–20トークン/秒', '最大モデル': '13B（Q4）', '評価': '最良バジェット' }, { 'GPU': 'RTX 4060 Ti 8GB', 'VRAM': '8 GB', '価格（中古）': '¥38,000–45,000', '7B速度': '20–25トークン/秒', '最大モデル': '7B（Q5最大）', '評価': '高速だがVRAM少' }, { 'GPU': 'RTX A4000', 'VRAM': '16 GB', '価格（中古）': '¥27,000–35,000', '7B速度': '12–15トークン/秒', '最大モデル': '13B（Q5）', '評価': 'VRAM/円最良' }, { 'GPU': 'RTX 4070 Super', 'VRAM': '12 GB', '価格（中古）': '¥60,000–68,000', '7B速度': '25–30トークン/秒', '最大モデル': '13B（Q5）', '評価': '高速だが2倍の価格' }, { 'GPU': 'RX 6700 XT', 'VRAM': '12 GB', '価格（中古）': '¥23,000–30,000', '7B速度': '10–14トークン/秒', '最大モデル': '13B（Q4）', '評価': '最安、AMDの手間' }], note: 'RTX 3060 12GBが価格性能比で勝利：¥30,000–38,000の12GB VRAMですべての7Bとほとんどの13Bを実行。' },
        'vram-7b': { title: '7Bモデルに必要なVRAMは？', content: ['Q4（4ビット）で量子化された7Bモデルは**6～8GB VRAM**を必要とし、Q5（5ビット）は**8～10GB**、Q8（8ビット）は**14～16GB**を必要とします。', '実際には：**8GBは最低限**で、Q4で7Bモデルでの快適な推論とバッチ処理用のスペースがあります。', '6GBカード（RTX 2060）は技術的に機能しますがアグレッシブな最適化が必要で、より高いバッチに余裕がありません。', 'GPUコストは経済性の一面であり、トークンコストはもう一面です。ローカル推論はAPIのトークン課金を排除しますが、プロンプト長は依然としてレイテンシとスループットに影響します。トークン、価格体系、最適化戦略を含むコスト全体像については、[トークン、コスト、制限：AIプロンプティングの経済学](https://www.promptquorum.com/ja/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)をご覧ください。'] },
        'best-by-use-case': { id: 'best-by-use-case', title: 'RTX 3060でのユースケース別最適モデル', content: ['**パラメータ数ではなく、実際のニーズに基づいてモデルを選択してください：**', 'バジェットハードウェアは小さなモデルを実行しますが、巧みなプロンプティングが品質差を縮めます。[プロンプトエンジニアリングガイド](https://www.promptquorum.com/ja/prompt-engineering)では、Chain-of-Thoughtや構造化出力など、小さなモデルの実力を引き出すテクニックを解説しています。RTX 3060 12 GB の VRAM に収まる具体的なワークロードのひとつが、プルリクエストの自動レビューです。まさに同じハードウェア上で Qwen3 8B を PR にぶつける GitHub Actions のパターンは、[CI/CD でのローカル LLM コードレビュー](/ja/power-local-llm/local-llm-code-review-ci-cd)で解説しています。'], items: ['**チャット / Q&A：** `ollama run qwen3:14b` — 稠密14B、~9GB VRAM、12GBで最良品質。軽量オプションは `ollama run qwen3:8b`（~7GB）。', '**コーディング：** `ollama run qwen3:8b` — 万能で強力なコーディング。~7GB VRAM。16–20トークン/秒。', '**推論 / 数学：** `ollama run deepseek-r1:7b` — Chain-of-Thought。10–12トークン/秒。', '**ライティング / クリエイティブ：** `ollama run mistral:7b` — 最良の指示従行。18トークン/秒。', '**ビジョン / 画像：** `ollama run gemma4:e12b` — マルチモーダル。11–14トークン/秒。~9GB VRAM。軽量な選択肢は `ollama run gemma4:e4b`（~5GB）。', '**プライバシー / オフライン：** 上記すべて。100%ローカル。データは外部送信されません。'] },
        'used-vs-new': { title: '中古 vs 新品：どこで買う？', items: ['**中古（50～100ドル安い）**：eBay、Facebook Marketplace、Craigslist、地元のコンピュータ修理店。死んだカードまたは不良VRAMのリスクが高い。確約する前に常にテストしてください。', '**新品（280～400ドル）**：Newegg、Amazon、Best Buy、Microcenter。保証付き。驚きなし。価格安定。リスク回避買い手に最適。', '**マイニングカード（暗号、超安い）**：極端なリスク。VRAM劣化は一般的。その場で完全にベンチテストできる場合のみ購入してください。'] },
        'mistakes': { title: 'よくあるバジェットGPUの間違い', items: ['4GB RTX 2060を購入してスムーズな7B推論を期待する。常にメモリ不足エラーが発生します。', '250ドルのGPUを30ドルのPSU（電源）と組み合わせます。電圧サグは安定性を殺します。80+ Gold認定、650W最小をバジェット化してください。', 'DDR5 RAMとi9 CPUがLLM推論を高速化すると想定する。それらは高速化しません。GPU VRAMバンド幅は推論速度に影響する唯一のボトルネックです。'] },
        'faqSection': { title: 'FAQ', faqs: [{ q: 'RTX 3060 12GBは2026年でもまだ価値があるか？', a: 'はい。4年以上前ですが12GB VRAMは時代遅れではありません。Llama 3.3 8Bとよりすぐに実行します。中古で250ドル未満で見つけたら最適。' }, { q: 'ローカルLLM用にRTX 4060またはRTX 4060 Tiを購入すべきか？', a: 'RTX 4060 Ti。ベース4060（8GB）と4070（12GB）は悪い価値です。TiはLLM作業に最適な価格のRTX 40シリーズカードです。' }, { q: 'AMD RX 6700または6800 XTを代わりに使用できるか？', a: 'はい、ただしAMD上のONNX RuntimeのドライバサポートはNVIDIA + CUDAより弱い。セットアップの摩擦を増します。RTXはバジェットにより安全です。' }, { q: '12GB VRAM 13Bモデルに十分か？', a: 'かろうじて、Q4量子化で。Q5またはQ8はOOMエラーを起こします。13Bの快適さが必要な場合は16GBを目指してください。' }, { q: 'RTX A4000などの中古企業GPUを購入すべきか？', a: 'はい、利用可能な場合。16GB VRAM、プロフェッショナルグレード冷却、通常180～230ドルで中古。RTX 3060より若干遅いですがVRAMクッションの価値があります。' }, { q: '250ドルGPUで購入するPSU電力はいくらか？', a: '650W、80+ Gold最小。250ドルGPU + CPU + マザーボード400W以下ですがスパイク用に余裕が必要。' }, { q: '200ドルのバジェットGPUでOllamaを実行できるか？', a: 'はい。Ollamaは軽量です。4年前のRTX 3060にOllamaはMistral 7Bを10～15トークン/秒で実行します。完全に使用可能。' }, { q: 'エンタープライズでのGDPR準拠ローカル推論に推奨GPUは？', a: 'Llama 3.3 13B Q4で最大50ユーザーにはRTX 3060 12GBまたはA4000 16GB最小。ECC GPUはエラー検出に推奨。ファームウェア/物理セキュリティはGPUメモリダンプを防止します。' }, { q: '中小企業のチームサーバーに推奨GPUは？', a: '1～50従業員にはRTX 3060 12GBまたはA4000。50～200従業員にはRTX 4070 SuperまたはA6000。RTX 3060はLlama 3.3 13B Q4 + vLLMを3～5同時要求で実行可能。より大規模なチームはA100エンタープライズクラスタリングが必要。' }, { q: 'RTX 3060と4060 Tiのパフォーマンス差は？', a: 'RTX 4060 Tiは約15～20%高速ですが、RTX 3060は4GB追加VRAMがあります。7Bモデルでは両方が快適な推論を提供します。バジェットで選択してください。' }, { q: 'マイニングカードはローカルLLMで安全か？', a: 'リスクあり。VRAMは集約的な運用年後に劣化します。確約前に完全にその場でストレステストできる場合のみ購入してください。' }] },
        'relatedReading': { title: '関連資料', items: ['[ローカルLLMに必要なVRAMはいくらか](/ja/local-llms/how-much-vram-local-llm)', '[コンシューマーハードウェアの70Bモデル](/ja/local-llms/70b-models-consumer-hardware)', '[RTX 5090 vs RTX 4090](/ja/local-llms/rtx-5090-vs-rtx-4090-local-llm)', '[ローカルLLM用の中古GPU](/ja/local-llms/used-gpus-for-local-llms)', '[ローカルLLM向けの最高のGPU](/ja/local-llms/best-gpus-for-local-llms)', '[VRAM計算機](/ja/local-llms/how-much-vram-local-llm)', '[Mac Mini M5ローカルAIサーバーとして](/ja/local-llms/mac-mini-m5-local-ai-server)', '[ローカルLLM向けApple Silicon M5](/ja/local-llms/apple-silicon-m5-local-llm) — M5 Pro/Max完全ガイド：ベンチマーク、Mac構成、メモリ層、ローカル推論用Mac購入ガイド', '[ローカルLLM向けApple Silicon対NVIDIA GPU](/ja/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026)', '[Apple Silicon向けベストモデル2026](/ja/local-llms/best-models-apple-silicon-2026)', '秋葉原の販売店、メルカリ・Yahoo!オークションの中古市場を含む日本のGPU価格については、<a href="/ja/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">日本でコスパ最強のローカルLLM用GPUガイド</a>をご覧ください。'] },
        'sources': { title: 'ソース', items: ['TechPowerUp GPUデータベース：RTX 3060 / RTX 4060 Ti / RTX 4070 Super仕様と電力消費', 'NVIDIA CUDA能力マトリックス：推論ワークロード用GPU メモリバンド幅と理論的スループット', 'Ollama モデル要件：Llama 3.3 7B、Mistral 7B、Qwen量子化レベルVRAM推奨'] },
      },
      itemListSchema: { '@context': 'https://schema.org', '@type': 'ItemList', 'url': 'https://www.promptquorum.com/ja/local-llms/best-budget-gpus-local-llm', 'inLanguage': 'ja', name: 'ローカルLLM向けの最高のバジェットGPU', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'RTX 3060 12GB（中古200～250ドル）は7B～13Bモデルの最高の全体的なバジェット選択肢です。' }, { '@type': 'ListItem', position: 2, name: 'RTX 4060 Ti 8GB（280～320ドル）は新しいテクノロジーと優れた効率を提供しますがVRAMは少なくなります。' }, { '@type': 'ListItem', position: 3, name: 'ローカルLLM用に2GBまたは4GBカードを決して購入しないでください。快適な推論のための最小限のVRAMは8GBです。' }, { '@type': 'ListItem', position: 4, name: '中古企業GPU（RTX A2000、RTX A4000）は150～250ドルで優れた12GB～16GBVRAMを提供します。' }, { '@type': 'ListItem', position: 5, name: 'ボトルネック回避のためGPUに300～400ドル、残りのシステム（CPU、RAM、SSD）に400～500ドルを予算化します。' }, { '@type': 'ListItem', position: 6, name: 'バジェットGPUではDDR5 RAMとハイエンドCPUを避けてください。これらはLLM速度を向上させません。' }], regionalContext: { title: '地域採用とコンプライアンスコンテキスト', content: ['**日本のGPU市場は世界市場と異なる価格設定です。** 輸入関税、小売マージン、限定的なエンタープライズGPU在庫は調達タイムラインに影響します。日本の組織はコンシューマー小売ではなくエンタープライズチャネルを通じて調達します。コンパクトワークステーションに適合する省スペースGPUが優先されます。', '**アジア太平洋地域（APAC）では、企業はローカルGPU供給と支援を優先しています。** 中国、韓国、シンガポールは独立したGPUデータセンターインフラストラクチャを開発しています。PromptQuorumは地域組織がローカルハードウェアオプションを評価するのに役立ちます。', '**北米GPU調達は製造業者との直接関係と競争力のある価格から恩恵を受けます。** エンタープライズ顧客はNVIDIAサポートとボリュームディスカウントにアクセスしています。コンシューマーGPU（RTX 4060～4090）は小規模チーム向けに幅広く利用可能です。PromptQuorumは大規模購入前に候補GPUでのベンチマークを有効にします。'] } },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/ja/local-llms/best-budget-gpus-local-llm',
        'mainEntity': [
          { '@type': 'Question', 'name': 'RTX 3060 12GBは2026年でも買う価値がありますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。4年以上前ですが、12GB VRAMは時代遅れになりません。Llama 3.3 8BとMistral 7Bを滑らかに実行できます。中古で¥37,500未満で見つかれば買いです。' } },
          { '@type': 'Question', 'name': 'ローカルLLMはRTX 4060とRTX 4060 Tiどちらを選びますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 4060 Tiです。ベース4060（8GB）と4070（12GB）は値打ちが悪いです。TiはRTX 40シリーズでLLM作業に最高のコスト比です。' } },
          { '@type': 'Question', 'name': 'AMD RX 6700またはRX 6800 XTで代用できますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'できますが、ONNX RuntimeドライバーサポートがAMDはNVIDIA + CUDAより弱いです。セットアップの摩擦が増えます。予算ならRTXがより安全です。' } },
          { '@type': 'Question', 'name': '12GB VRAMは13Bモデルに十分ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'かろうじて、Q4量子化で。Q5またはQ8ではOOMエラーになります。13Bを快適に実行するなら16GBを目指してください。' } },
          { '@type': 'Question', 'name': 'RTX A4000のような中古エンタープライズGPUを買うべきですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'あります。16GB VRAM、プロ級冷却、通常¥22,500–37,500程度で中古見つかります。RTX 3060より少し遅いですが、VRAMバッファの価値があります。' } },
        ],
      },
    },
    zh: {
      theme: 'GPU Buying Guides',
      title: '本地LLM的最佳预算GPU',
      seoTitle: 'RTX 3060至RX 6800 XT：2026年本地LLM最佳预算GPU排名',
      intro: '**RTX 3060 12GB以9–12令牌/秒运行Qwen3 14B，以16–20令牌/秒运行Qwen3 8B，以11–14令牌/秒运行Gemma 4 E12B，以18令牌/秒运行Mistral 7B，以10–12令牌/秒运行DeepSeek-R1 7B——均为Q4量化。** 6GB版本仅限3B模型。截至2026年6月，RTX 3060 12GB（二手$200–250）仍是本地LLM最佳预算GPU。12GB VRAM以Q4/Q5适配所有7B-8B模型，以Q4适配大部分密集13B-14B模型。（注：Llama 4 Scout是17B激活/109B总计的MoE，Q4下需要~55GB，通常无法装入12GB。）',
      metaDescription: 'RTX 3060 12GB（二手约1400-1800元）是2026年7B模型本地推理的性价比首选。5款GPU按VRAM、价格和推理速度排名，涵盖Qwen3 14B和Mistral 7B。',
      nextStep: {
        text: '选好GPU了？现在选择合适的软件来运行模型。',
        label: '最佳本地LLM前端2026 →',
        href: '/local-llms/best-local-llm-frontends',
      },
      publishDate: '2026-04-05',
      dateModified: '2026-06-01',
      readTime: '阅读约7分钟',
      educationalLevel: 'Intermediate',
      primaryTerm: '本地LLM预算GPU',
      toc: [
        { label: '核心要点', anchor: '#tldr' },
        { label: 'RTX 3060 12GB能运行什么？', anchor: '#rtx-3060-12gb' },
        { label: 'RTX 3060 6GB能运行什么？', anchor: '#rtx-3060-6gb' },
        { label: 'RTX 3060 vs 其他预算GPU', anchor: '#which-budget-gpus' },
        { label: '7B模型需要多少VRAM？', anchor: '#vram-7b' },
        { label: 'RTX 3060按用途选最佳模型', anchor: '#best-by-use-case' },
        { label: '二手 vs 全新：在哪买？', anchor: '#used-vs-new' },
        { label: '常见预算GPU错误', anchor: '#mistakes' },
        { label: '常见问题', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**RTX 3060 12GB**（二手$200–250）：以Q4/Q5运行所有7B-8B模型，以Q4运行大多数密集13B-14B模型。最佳预算选择。',
            '**RTX 3060 6GB**：仅限3B模型（Phi-4 Mini、Llama 3.2 3B）。7B不够用。',
            '**12GB最佳综合模型：** Qwen3 14B，~9GB VRAM，9–12令牌/秒。能舒适装入的最佳密集品质。',
            '**12GB最佳编程模型：** Qwen3 8B，16–20令牌/秒。',
            '**12GB最佳推理模型：** DeepSeek-R1 7B，10–12令牌/秒。',
            '**不适合：** 需要70B模型、Llama 4 Scout（需~55GB）或13B Q8的用户——需要24GB+（RTX 4090）。',
          ],
        },
        'rtx-3060-12gb': {
          id: 'rtx-3060-12gb',
          title: 'RTX 3060 12GB能运行什么？',
          content: [
            '**RTX 3060 12GB是2026年本地LLM最佳预算GPU。** 12GB VRAM适配所有7B模型的Q4/Q5和大多数13B模型的Q4。关于不同模型大小的VRAM要求详情，见[VRAM需求指南 →](/zh/local-llms/how-much-vram-local-llm)。以下是您可以期待的确切模型和速度：',
          ],
          columns: ['模型', '大小', '量化', 'VRAM占用', '速度', '最适合'],
          rows: [
            { '模型': 'Qwen3 14B', '大小': '14B（密集）', '量化': 'Q4_K_M', 'VRAM占用': '~9 GB', '速度': '9–12令牌/秒', '最适合': '能装入的最佳综合品质' },
            { '模型': 'Qwen3 8B', '大小': '8B', '量化': 'Q4_K_M', 'VRAM占用': '~7 GB', '速度': '16–20令牌/秒', '最适合': '编程、全能' },
            { '模型': 'Gemma 4 E12B', '大小': '26B MoE', '量化': 'Q4_K_M', 'VRAM占用': '~9 GB', '速度': '11–14令牌/秒', '最适合': '视觉、多模态' },
            { '模型': 'Mistral 7B v0.3', '大小': '7B', '量化': 'Q4_K_M', 'VRAM占用': '~7 GB', '速度': '18令牌/秒', '最适合': '指令遵循' },
            { '模型': 'DeepSeek-R1 7B', '大小': '7B', '量化': 'Q4_K_M', 'VRAM占用': '~7 GB', '速度': '10–12令牌/秒', '最适合': '推理、数学' },
            { '模型': 'Gemma 4 E4B', '大小': 'E4B（多模态）', '量化': 'Q4_K_M', 'VRAM占用': '~5 GB', '速度': '18–22令牌/秒', '最适合': '轻量视觉、快速聊天' },
            { '模型': 'Llama 3.2 13B', '大小': '13B', '量化': 'Q4_K_M', 'VRAM占用': '~11 GB', '速度': '8–10令牌/秒', '最适合': '高质量聊天' },
          ],
          note: 'Qwen3 14B（密集）是在Q4_K_M下能舒适装入RTX 3060 12GB的最高品质模型，占用~9 GB。`ollama pull qwen3:14b`。注：Llama 4 Scout（17B激活/109B总计的MoE，10M令牌上下文，多模态）在Q4下需要~55GB，通常无法装入12GB——它是面向大VRAM平台的长上下文/大型多模态选择，而非预算GPU推荐。gpt-oss:20b（21B总计/3.6B激活MoE）需要16GB，因此在12GB显卡上刚好够不着。所有速度在Ollama、RTX 3060 12GB、16GB系统RAM、Ryzen 7 7700X上测量。Q4_K_M量化。速度±15%浮动。',
        },
        'rtx-3060-6gb': {
          id: 'rtx-3060-6gb',
          title: 'RTX 3060 6GB能运行什么？',
          content: [
            '**6GB版本严重受限。** 仅3B模型可舒适运行。7B模型Q4需要~7GB——超出可用容量。',
          ],
          items: [
            '**Phi-4 Mini 3.8B（Q4）：** ~3GB VRAM，20–25令牌/秒。此尺寸最佳推理。',
            '**Llama 3.2 3B（Q4）：** ~2.5GB VRAM，25–35令牌/秒。最快选项。',
            '**Gemma 2 2B（Q4）：** ~1.7GB VRAM，35–45令牌/秒。最轻量模型。',
            '**7B卸载：** 可行但慢。Llama 7B CPU卸载 = ~5–8令牌/秒。',
            '**建议：** 如果您有6GB显卡，升级到12GB二手（$200–250）更值得。',
          ],
        },
        'which-budget-gpus': {
          title: 'RTX 3060 vs 其他预算GPU',
          columns: ['GPU', 'VRAM', '价格（二手）', '7B速度', '最大模型', '评价'],
          rows: [
            { 'GPU': 'RTX 3060 12GB ★', 'VRAM': '12 GB', '价格（二手）': '¥1,400–1,800', '7B速度': '15–20令牌/秒', '最大模型': '13B（Q4）', '评价': '最佳预算选择' },
            { 'GPU': 'RTX 4060 Ti 8GB', 'VRAM': '8 GB', '价格（二手）': '¥1,800–2,200', '7B速度': '20–25令牌/秒', '最大模型': '7B（Q5最大）', '评价': '更快但VRAM少' },
            { 'GPU': 'RTX A4000', 'VRAM': '16 GB', '价格（二手）': '¥1,300–1,600', '7B速度': '12–15令牌/秒', '最大模型': '13B（Q5）', '评价': '最佳VRAM/元' },
            { 'GPU': 'RTX 4070 Super', 'VRAM': '12 GB', '价格（二手）': '¥2,900–3,200', '7B速度': '25–30令牌/秒', '最大模型': '13B（Q5）', '评价': '更快但2倍价格' },
            { 'GPU': 'RX 6700 XT', 'VRAM': '12 GB', '价格（二手）': '¥1,100–1,400', '7B速度': '10–14令牌/秒', '最大模型': '13B（Q4）', '评价': '最便宜，AMD麻烦' },
          ],
          note: 'RTX 3060 12GB性价比最高：¥1,400–1,800的12GB VRAM运行所有7B和大多数13B。',
        },
        'vram-7b': {
          title: '7B模型需要多少VRAM？',
          content: [
            '**7B模型在Q4（4位）量化时需要**6-8GB VRAM**；Q5（5位）需要**8-10GB**；Q8（8位）需要**14-16GB**。**',
            '实际上：**8GB是最低限度**，在Q4的7B模型上舒适推理，有批处理空间。',
            '6GB显卡（RTX 2060）在技术上可行但需要积极优化，无法支持更高的批大小。',
            'GPU成本是经济性的一面；token成本是另一面。本地推理消除了按token计费的API费用，但提示词长度仍然影响延迟和吞吐量。完整的成本图景——token、定价层级和优化策略——请参阅[token、成本与限制：AI提示词经济学](https://www.promptquorum.com/zh/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)。',
          ],
        },
        'best-by-use-case': {
          id: 'best-by-use-case',
          title: 'RTX 3060按用途选最佳模型',
          content: [
            '**根据实际需求选择模型，而非参数量：**',
            '预算硬件只能运行较小的模型——但熟练的提示词技巧可以弥补质量差距。[Prompt工程指南](https://www.promptquorum.com/zh/prompt-engineering)涵盖了思维链和结构化输出等技术，帮助小模型超越其规模发挥。一个正好落在 RTX 3060 12 GB 档位的具体工作负载是自动化的 PR 评审——把 Qwen3 8B 直接针对 PR 跑起来的 GitHub Actions 方案，请参阅[CI/CD 中的本地 LLM 代码评审](/zh/power-local-llm/local-llm-code-review-ci-cd)。',
          ],
          items: [
            '**聊天 / 问答：** `ollama run qwen3:14b` — 密集14B，~9GB VRAM，12GB上最佳品质。轻量选项：`ollama run qwen3:8b`（~7GB）。',
            '**编程：** `ollama run qwen3:8b` — 强大的全能编程。~7GB VRAM。16–20令牌/秒。',
            '**推理 / 数学：** `ollama run deepseek-r1:7b` — 思维链推理。10–12令牌/秒。',
            '**写作 / 创意：** `ollama run mistral:7b` — 最佳指令遵循。18令牌/秒。',
            '**视觉 / 图像：** `ollama run gemma4:e12b` — 多模态。11–14令牌/秒。~9GB VRAM。更轻量可选 `ollama run gemma4:e4b`（~5GB）。',
            '**隐私 / 离线：** 以上所有。100%本地。数据不离开设备。',
          ],
        },
        'used-vs-new': {
          title: '二手 vs 全新：在哪买？',
          items: [
            '**二手（便宜50-100美元）**：eBay、Facebook Marketplace、Craigslist、本地计算机维修店。坏显卡或VRAM故障风险更高。承诺前始终测试。',
            '**全新（280-400美元）**：Newegg、Amazon、Best Buy、Microcenter。包含保修。无惊喜。价格稳定。适合规避风险的购买者。',
            '**矿卡（加密、超便宜）**：极端风险。VRAM退化常见。只有在能在现场完全压力测试时才购买。',
          ],
        },
        'mistakes': {
          title: '常见预算GPU错误',
          items: [
            '购买4GB RTX 2060并期望顺利的7B推理----您会不断遇到内存不足错误。',
            '将250美元的GPU与30美元PSU（电源）配对----电压降会导致稳定性问题。预算80+ Gold认证、650W最小。',
            '假设DDR5 RAM和i9 CPU会加快LLM推理----它们不会。GPU VRAM带宽是影响推理速度的唯一瓶颈。',
          ],
        },
        'faqSection': {
          title: '常见问题',
          faqs: [
            { q: 'RTX 3060 12GB在2026年还值得买吗？', a: '是的。它已有4年多，但12GB VRAM永不过时。平稳运行Llama 3.3 8B和Mistral 7B。如果能找到二手250美元以下的就买。' },
            { q: '对于本地LLM我应该买RTX 4060还是RTX 4060 Ti？', a: 'RTX 4060 Ti。基础4060（8GB）和4070（12GB）价值不好。Ti是LLM工作最佳定价的RTX 40系列显卡。' },
            { q: '我可以用AMD RX 6700或6800 XT代替吗？', a: '可以，但AMD上ONNX Runtime驱动支持弱于NVIDIA + CUDA。预计更多设置摩擦。RTX对预算更安全。' },
            { q: '12GB VRAM够13B模型吗？', a: '勉强，在Q4量化下。Q5或Q8会导致OOM错误。如果需要13B的舒适运行，目标16GB。' },
            { q: '我应该买二手企业GPU如RTX A4000吗？', a: '是的，如果有的话。16GB VRAM、专业级冷却、通常二手180-230美元。比RTX 3060稍慢，但VRAM缓冲值得。' },
            { q: '250美元GPU配什么功率PSU？', a: '650W、80+ Gold最小。250美元GPU + CPU + 主板不超过400W，但你想要尖峰余量。' },
            { q: '我能用200美元预算GPU运行Ollama吗？', a: '能。Ollama很轻。4年前RTX 3060配Ollama运行Mistral 7B 10-15令牌/秒----完全可用。' },
            { q: '企业GDPR合规本地推理推荐什么GPU？', a: '最少RTX 3060 12GB或A4000 16GB最多50用户运行Llama 3.3 13B Q4。ECC GPU推荐错误检测。固件/物理安全防止GPU内存转储。' },
            { q: '中小企业团队服务器推荐什么GPU？', a: '1-50员工RTX 3060 12GB或A4000。50-200员工RTX 4070 Super或A6000。RTX 3060可运行Llama 3.3 13B Q4 + vLLM 3-5同时请求。更大团队需A100企业集群。' },
            { q: 'RTX 3060和4060 Ti的性能差异？', a: 'RTX 4060 Ti快约15-20%，但RTX 3060有4GB额外VRAM。两者在7B模型上提供舒适推理；按预算选择。' },
            { q: '矿卡对本地LLM安全吗？', a: '有风险。VRAM在多年密集运行后退化。只有能在现场完全压力测试时才购买。' },
          ],
        },
        'relatedReading': {
          title: '相关阅读',
          items: [
            '[本地LLM需要多少VRAM](/zh/local-llms/how-much-vram-local-llm)',
            '[消费硬件上的70B模型](/zh/local-llms/70b-models-consumer-hardware)',
            '[RTX 5090对RTX 4090](/zh/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[本地LLM二手GPU](/zh/local-llms/used-gpus-for-local-llms)',
            '[本地LLM的最佳GPU](/zh/local-llms/best-gpus-for-local-llms)',
            '[How Much VRAM Do You Need?](/zh/local-llms/how-much-vram-local-llm)',
            '[Mac Mini M5作为本地AI服务器](/zh/local-llms/mac-mini-m5-local-ai-server)',
            '[Apple Silicon M5本地LLM](/zh/local-llms/apple-silicon-m5-local-llm) — M5 Pro/Max完整指南：基准测试、Mac配置、内存层级，以及购买哪款Mac进行本地推理。',
            '[本地LLM的Apple Silicon对比NVIDIA GPU](/zh/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026)',
            '[Apple Silicon 2026最佳模型](/zh/local-llms/best-models-apple-silicon-2026)',
            '如需日本GPU价格、秋叶原零售商及Mercari、Yahoo拍卖二手市场选项，请参阅<a href="/zh/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">日本本地LLM性价比最高GPU指南</a>。',
          ],
        },
        'sources': {
          title: '来源',
          items: [
            'TechPowerUp GPU数据库：RTX 3060 / RTX 4060 Ti / RTX 4070 Super规格和功耗',
            'NVIDIA CUDA能力矩阵：推理工作负载的GPU内存带宽和理论吞吐量',
            'Ollama模型要求：Llama 3.3 7B、Mistral 7B和Qwen量子化级别的VRAM建议',
          ],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/zh/local-llms/best-budget-gpus-local-llm',
        name: '本地LLM的最佳预算GPU',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'RTX 3060 12GB（二手200-250美元）是7B-13B模型的最佳整体预算选择。' },
          { '@type': 'ListItem', position: 2, name: 'RTX 4060 Ti 8GB（280-320美元）提供更新的技术和更好的效率，但VRAM较少。' },
          { '@type': 'ListItem', position: 3, name: '永远不要为本地LLM购买2GB或4GB显卡----舒适推理的最小VRAM是8GB。' },
          { '@type': 'ListItem', position: 4, name: '二手企业显卡（RTX A2000、RTX A4000）提供150-250美元的优秀12GB-16GB VRAM。' },
          { '@type': 'ListItem', position: 5, name: '为避免瓶颈，为GPU预算300-400美元，为其余系统（CPU、RAM、SSD）预算400-500美元。' },
          { '@type': 'ListItem', position: 6, name: '在预算GPU中避免使用DDR5 RAM和高端CPU----它们不会提高LLM速度。' },
        ],
        regionalContext: {
          title: '地区采纳和合规背景',
          content: [
            '**中国GPU市场受国家采购政策和本地制造激励影响。** 中国企业优先购买本地设计的GPU（如华为昇腾）或NVIDIA进口卡。国务院指导要求科技公司采用本地计算基础设施以提高自给自足。PromptQuorum帮助评估符合政策和预算目标的硬件选项。',
            '**东南亚GPU采购受供应链可用性和进口关税影响。** 越南、泰国和印度尼西亚的组织选择二手企业GPU来降低资本支出。数据本地化法规支持本地GPU服务器部署。',
            '**台湾和韩国拥有充分的企业GPU供应和本地支持。** 组织可访问NVIDIA高级支持和制造商关系。PromptQuorum帮助企业基准测试候选GPU以进行大规模部署。',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/zh/local-llms/best-budget-gpus-local-llm',
        'mainEntity': [
          { '@type': 'Question', 'name': 'RTX 3060 12GB在2026年还值得买吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是的。它已有4年多，但12GB VRAM永不过时。平稳运行Llama 3.3 8B和Mistral 7B。如果能找到二手250美元以下的就买。' } },
          { '@type': 'Question', 'name': '对于本地LLM我应该买RTX 4060还是RTX 4060 Ti？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 4060 Ti。基础4060（8GB）和4070（12GB）价值不好。Ti是LLM工作最佳定价的RTX 40系列显卡。' } },
          { '@type': 'Question', 'name': '我可以用AMD RX 6700或6800 XT代替吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以，但AMD上ONNX Runtime驱动支持弱于NVIDIA + CUDA。预计更多设置摩擦。RTX对预算更安全。' } },
          { '@type': 'Question', 'name': '12GB VRAM够13B模型吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '勉强，在Q4量化下。Q5或Q8会导致OOM错误。如果需要13B的舒适运行，目标16GB。' } },
          { '@type': 'Question', 'name': '我应该买二手企业GPU如RTX A4000吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是的，如果有的话。16GB VRAM、专业级冷却、通常二手180-230美元。比RTX 3060稍慢，但VRAM缓冲值得。' } },
          { '@type': 'Question', 'name': '250美元GPU配什么功率PSU？', 'acceptedAnswer': { '@type': 'Answer', 'text': '650W、80+ Gold最小。250美元GPU + CPU + 主板不超过400W，但你想要尖峰余量。' } },
          { '@type': 'Question', 'name': '我能用200美元预算GPU运行Ollama吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '能。Ollama很轻。4年前RTX 3060配Ollama运行Mistral 7B 10-15令牌/秒----完全可用。' } },
          { '@type': 'Question', 'name': '企业GDPR合规本地推理推荐什么GPU？', 'acceptedAnswer': { '@type': 'Answer', 'text': '最少RTX 3060 12GB或A4000 16GB最多50用户运行Llama 3.3 13B Q4。ECC GPU推荐错误检测。固件/物理安全防止GPU内存转储。' } },
          { '@type': 'Question', 'name': '中小企业团队服务器推荐什么GPU？', 'acceptedAnswer': { '@type': 'Answer', 'text': '1-50员工RTX 3060 12GB或A4000。50-200员工RTX 4070 Super或A6000。RTX 3060可运行Llama 3.3 13B Q4 + vLLM 3-5同时请求。更大团队需A100企业集群。' } },
          { '@type': 'Question', 'name': 'RTX 3060和4060 Ti的性能差异？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 4060 Ti快约15-20%，但RTX 3060有4GB额外VRAM。两者在7B模型上提供舒适推理；按预算选择。' } },
          { '@type': 'Question', 'name': '矿卡对本地LLM安全吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '有风险。VRAM在多年密集运行后退化。只有能在现场完全压力测试时才购买。' } },
        ],
      },
    },
  };
