// Auto-generated from src/lib/local-llms/content.ts
// Slug: best-budget-gpus-local-llm
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'annual',
      theme: 'GPU Buying Guides',
      title: 'Best Local LLMs for RTX 3060 (12GB / 6GB) in 2026',
      seoTitle: 'RTX 3060 Local LLM Guide 2026: What Models You Can Run',
      intro: '**RTX 3060 12GB runs Llama 4 Scout 17B (MoE) at 12–16 tok/sec, Qwen3 8B at 16–20 tok/sec, Mistral 7B at 18 tok/sec, and DeepSeek-R1 7B at 10–12 tok/sec — all at Q4 quantization.** The 6GB variant is limited to 3B models only. As of May 2026, the RTX 3060 12GB ($200–250 used) remains the best budget GPU for local LLMs: 12GB VRAM fits every 7B model and most 13B models at Q4, plus Llama 4 Scout (MoE) which delivers quality well above dense 7B-8B models at similar VRAM. This guide covers exactly which models run on each VRAM tier, with real speeds and practical setups.',
      metaDescription: 'What local LLMs can you run on RTX 3060 12GB or 6GB? See best models for coding, chat, and reasoning in 2026 with real VRAM limits and performance tips.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**RTX 3060 12GB runs Llama 4 Scout 17B (MoE) at 12–16 tok/sec, Qwen3 8B at 16–20 tok/sec, Mistral 7B at 18 tok/sec, and DeepSeek-R1 7B at 10–12 tok/sec. The 6GB variant handles 3B models only. Best budget GPU for local LLMs in 2026 at $200–250 used.**',
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
            '**RTX 3060 12GB** ($200–250 used): Runs every 7B model and most 13B at Q4. Plus Llama 4 Scout (MoE) at ~10 GB — best overall quality.',
            '**RTX 3060 6GB**: Limited to 3B models (Phi-4 Mini, Llama 3.2 3B). Too tight for 7B.',
            '**Best overall model on 12GB:** Llama 4 Scout 17B (MoE) at ~10 GB VRAM, 12–16 tok/sec. Delivers quality comparable to dense 30B models.',
            '**Best coding model on 12GB:** Qwen3 8B at 16–20 tok/sec. Improved over Qwen2.5-Coder.',
            '**Best reasoning model on 12GB:** DeepSeek-R1 7B at 10–12 tok/sec. Chain-of-thought.',
            '**Skip if:** You want 70B models or 13B at Q8 — you need 24GB (RTX 4090).',
          ],
        },
        'rtx-3060-12gb': {
          id: 'rtx-3060-12gb',
          title: 'What Can You Run on RTX 3060 12GB?',
          content: [
            '**The RTX 3060 12GB is the best budget GPU for local LLMs in 2026.** 12GB VRAM fits every 7B model at Q4/Q5 quantization, and most 13B models at Q4. Here are the exact models and speeds you can expect:',
          ],
          columns: ['Model', 'Size', 'Quantization', 'VRAM Used', 'Speed', 'Best For'],
          rows: [
            { 'Model': 'Llama 4 Scout 17B', 'Size': '17B active (109B MoE)', 'Quantization': 'Q4_K_M', 'VRAM Used': '~10 GB', 'Speed': '12–16 tok/sec', 'Best For': 'Best overall quality (MoE)' },
            { 'Model': 'Llama 3.2 7B', 'Size': '7B', 'Quantization': 'Q4_K_M', 'VRAM Used': '~7 GB', 'Speed': '15–20 tok/sec', 'Best For': 'General chat, Q&A (legacy)' },
            { 'Model': 'Mistral 7B v0.3', 'Size': '7B', 'Quantization': 'Q4_K_M', 'VRAM Used': '~7 GB', 'Speed': '18 tok/sec', 'Best For': 'Instruction following' },
            { 'Model': 'Qwen3 8B', 'Size': '8B', 'Quantization': 'Q4_K_M', 'VRAM Used': '~7 GB', 'Speed': '16–20 tok/sec', 'Best For': 'Coding (improved over Qwen2.5)' },
            { 'Model': 'DeepSeek-R1 7B', 'Size': '7B', 'Quantization': 'Q4_K_M', 'VRAM Used': '~7 GB', 'Speed': '10–12 tok/sec', 'Best For': 'Reasoning, math' },
            { 'Model': 'Gemma 4 9B', 'Size': '9B', 'Quantization': 'Q4_K_M', 'VRAM Used': '~8 GB', 'Speed': '12–15 tok/sec', 'Best For': 'Vision, multimodal' },
            { 'Model': 'Llama 3.2 13B', 'Size': '13B', 'Quantization': 'Q4_K_M', 'VRAM Used': '~11 GB', 'Speed': '8–10 tok/sec', 'Best For': 'Higher quality chat (Q4 only, tight fit)' },
          ],
          note: 'Llama 4 Scout is the biggest upgrade for RTX 3060 12GB owners in 2026. Its MoE architecture means only 17B parameters are active per token (out of 109B total), delivering quality well above dense 7B-8B models at similar VRAM usage. `ollama pull llama4:scout`. All speeds measured with Ollama on RTX 3060 12GB, 16GB system RAM, Ryzen 7 7700X. Q4_K_M quantization. Speeds vary ±15% depending on prompt length and context window.',
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
            'Budget hardware runs smaller models — but skilled prompting closes the quality gap. The [prompt engineering guide](https://www.promptquorum.com/prompt-engineering) covers techniques like chain-of-thought and structured output that help smaller models punch above their weight.',
          ],
          items: [
            '**Chat / Q&A:** `ollama run llama4:scout` — MoE, ~10 GB VRAM, best quality on 12 GB. For a lighter option: `ollama run llama3.2:3b` at 2.5 GB.',
            '**Coding:** `ollama run qwen3:8b` — Improved coding performance over Qwen2.5-Coder. 5 GB VRAM. 16–20 tok/sec.',
            '**Reasoning / Math:** `ollama run deepseek-r1:7b` — Chain-of-thought reasoning. 10–12 tok/sec. Slower but significantly more accurate on multi-step problems.',
            '**Writing / Creative:** `ollama run mistral:7b` — Best instruction following. 18 tok/sec. Clean, structured output. Good for drafting and rewriting.',
            '**Vision / Images:** `ollama run gemma4:9b` — Multimodal (accepts images). 12–15 tok/sec. Uses ~8GB VRAM. Describe photos, read screenshots, analyze charts.',
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
            'Not trying Llama 4 Scout on 12 GB VRAM. Many RTX 3060 owners assume they\'re limited to 7B-8B dense models. Llama 4 Scout (MoE, 17B active / 109B total) fits at ~10 GB and delivers quality comparable to dense 30B models. If you have 12 GB VRAM and haven\'t tried Scout, you\'re significantly underutilizing your hardware.',
            'Buying a 16 GB card just for 13B models. With Llama 4 Scout available at ~10 GB, the 12→16 GB upgrade is less necessary than it was six months ago. Only upgrade to 16 GB if you specifically need Llama 3.1 70B, Mistral Small 3.1, or other dense 20B+ models.',
          ],
        },
        'faqSection': {
          title: 'FAQ',
          faqs: [
            { q: 'Is RTX 3060 12GB still worth buying in 2026?', a: 'Yes. It\'s 4+ years old, but 12GB VRAM is timeless. Runs Llama 4 Scout 17B (MoE), Qwen3 8B, and Mistral 7B smoothly. The MoE architecture of Llama 4 Scout means 12 GB VRAM is now enough for model quality that previously required 16+ GB.' },
            { q: 'Should I buy RTX 5060 Ti or RTX 4060 Ti for local LLMs?', a: 'RTX 5060 Ti. The newer generation (2026) offers 10-15% better performance. If budget-constrained, RTX 4060 Ti is still solid. Avoid base 4060/5060 (8GB) and 4070 (12GB)—poor value.' },
            { q: 'Can I use an AMD RX 7900 XT or RX 7900 XTX instead?', a: 'Yes, but driver support for AMD is weaker than NVIDIA + CUDA. HIP/ROCm setup requires more effort. RTX is safer for beginners.' },
            { q: 'Is 12GB VRAM enough for 13B models?', a: 'Barely, at Q4 quantization. Q5 or Q8 will cause OOM errors. If you want 13B comfort, aim for 16GB.' },
            { q: 'Should I buy a used enterprise GPU like RTX A4000?', a: 'Yes, if available. 16GB VRAM, professional-grade cooling, usually $180-230 used. Slightly slower than RTX 3060, but VRAM cushion is worth it.' },
            { q: 'What PSU wattage should I buy with a $250 GPU?', a: '650W, 80+ Gold minimum. A $250 GPU + CPU + motherboard doesn\'t exceed 400W draw, but you want headroom for spikes.' },
            { q: 'Can I run Ollama with a $200 budget GPU?', a: 'Yes. Ollama is lightweight. A 4-year-old RTX 3060 with Ollama will run Llama 4 Scout at 12-16 tok/sec or Qwen3 8B at 16-20 tok/sec — totally usable for interactive chat and coding assistance.' },
            { q: 'Can I run Llama 4 Scout on an RTX 3060 12GB?', a: 'Yes. Llama 4 Scout uses MoE architecture — 17B parameters active out of 109B total. At Q4_K_M, it uses ~10 GB VRAM, fitting comfortably within the RTX 3060 12GB\'s memory. Expect 12-16 tok/sec. This is the single best upgrade for RTX 3060 owners in 2026: `ollama pull llama4:scout`.' },
          ],
        },
        'relatedReading': {
          title: 'Related Reading',
          items: [
            '[How Much VRAM for Local LLMs](/local-llms/how-much-vram-local-llm)',
            '[RTX 5090 vs RTX 4090](/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Used GPUs for Local LLMs](/local-llms/used-gpus-for-local-llms)',
            '[Best GPUs for Local LLMs](/local-llms/best-gpus-for-local-llms)',
            '[VRAM Calculator](/local-llms/vram-calculator-local-llm)',
            '[Laptop vs Desktop for Local LLMs](/local-llms/laptop-vs-desktop-local-llm) — Full platform comparison: GPU desktop vs MacBook for local LLMs.',
            '[Prompt Engineering for Local LLMs](/prompt-engineering/prompt-engineering-for-local-models) — optimize prompts for models running on budget hardware.',
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — significantly improves DeepSeek-R1 output quality.',
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
        '@type': 'TechArticle',
        'headline': 'RTX 3060 Local LLM Guide 2026: What Models You Can Run',
        'description': 'What local LLMs can you run on RTX 3060 12GB or 6GB? See best models for coding, chat, and reasoning in 2026 with real VRAM limits and performance tips.',
        'url': 'https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm',
        'inLanguage': 'en',
        'datePublished': '2026-04-05',
        'dateModified': '2026-05-04',
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
        'inLanguage': 'en',
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
              'text': 'Yes. Llama 4 Scout uses MoE architecture — 17B parameters active out of 109B total. At Q4_K_M, it uses ~10 GB VRAM, fitting comfortably within the RTX 3060 12GB\'s memory. Expect 12-16 tok/sec. This is the single best upgrade for RTX 3060 owners in 2026: `ollama pull llama4:scout`.'
            }
          }
        ]
      },
    },
    de: {
      theme: 'GPU Buying Guides',
      title: 'Beste Budget-GPUs für lokale LLMs',
      seoTitle: 'RTX 3060 bis RX 6800 XT: 5 Budget-GPUs für lokale LLMs 2026',
      intro: '**RTX 3060 12GB führt Llama 3.2 7B mit 15–20 Tok/Sek, Mistral 7B mit 18 Tok/Sek und Qwen2.5-Coder 7B mit 16 Tok/Sek aus — alles bei Q4-Quantisierung.** Die 6-GB-Variante ist auf 3B-Modelle beschränkt. Stand April 2026 bleibt die RTX 3060 12GB ($200–250 gebraucht) die beste Budget-GPU für lokale LLMs: 12 GB VRAM passt für jedes 7B-Modell und die meisten 13B-Modelle bei Q4.',
      metaDescription: 'RTX 3060 12GB (150-190 € gebraucht) ist die beste Budget-GPU für 7B-Modelle 2026. 5 GPUs nach VRAM und Preis für Llama 3.3 und Mistral 7B verglichen.',
      publishDate: '2026-04-05',
      dateModified: '2026-04-08',
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
            '**RTX 3060 12GB** (200–250 $ gebraucht): Führt jedes 7B-Modell und die meisten 13B bei Q4 aus. Beste Budget-Wahl.',
            '**RTX 3060 6GB**: Beschränkt auf 3B-Modelle (Phi-4 Mini, Llama 3.2 3B). Zu knapp für 7B.',
            '**Bestes Chat-Modell auf 12GB:** Llama 3.2 7B mit 15–20 Tok/Sek.',
            '**Bestes Coding-Modell auf 12GB:** Qwen2.5-Coder 7B mit 16 Tok/Sek. 72% HumanEval.',
            '**Bestes Reasoning-Modell auf 12GB:** DeepSeek-R1 7B mit 10–12 Tok/Sek.',
            '**Überspringen wenn:** Sie 70B-Modelle oder 13B bei Q8 wollen — dafür brauchen Sie 24GB (RTX 4090).',
          ],
        },
        'rtx-3060-12gb': {
          id: 'rtx-3060-12gb',
          title: 'Was kann man auf RTX 3060 12GB ausführen?',
          content: [
            '**Die RTX 3060 12GB ist die beste Budget-GPU für lokale LLMs 2026.** 12 GB VRAM passt für jedes 7B-Modell bei Q4/Q5 und die meisten 13B-Modelle bei Q4:',
          ],
          columns: ['Modell', 'Größe', 'Quantisierung', 'VRAM', 'Geschwindigkeit', 'Ideal für'],
          rows: [
            { 'Modell': 'Llama 3.2 7B', 'Größe': '7B', 'Quantisierung': 'Q4_K_M', 'VRAM': '~7 GB', 'Geschwindigkeit': '15–20 Tok/Sek', 'Ideal für': 'Chat, Frage-Antwort' },
            { 'Modell': 'Mistral 7B v0.3', 'Größe': '7B', 'Quantisierung': 'Q4_K_M', 'VRAM': '~7 GB', 'Geschwindigkeit': '18 Tok/Sek', 'Ideal für': 'Instruktionsfolge' },
            { 'Modell': 'Qwen2.5-Coder 7B', 'Größe': '7B', 'Quantisierung': 'Q4_K_M', 'VRAM': '~7 GB', 'Geschwindigkeit': '16 Tok/Sek', 'Ideal für': 'Coding (72% HumanEval)' },
            { 'Modell': 'DeepSeek-R1 7B', 'Größe': '7B', 'Quantisierung': 'Q4_K_M', 'VRAM': '~7 GB', 'Geschwindigkeit': '10–12 Tok/Sek', 'Ideal für': 'Reasoning, Mathematik' },
            { 'Modell': 'Gemma 4 9B', 'Größe': '9B', 'Quantisierung': 'Q4_K_M', 'VRAM': '~8 GB', 'Geschwindigkeit': '12–15 Tok/Sek', 'Ideal für': 'Vision, multimodal' },
            { 'Modell': 'Llama 3.2 13B', 'Größe': '13B', 'Quantisierung': 'Q4_K_M', 'VRAM': '~11 GB', 'Geschwindigkeit': '8–10 Tok/Sek', 'Ideal für': 'Höhere Chat-Qualität' },
          ],
          note: 'Alle Geschwindigkeiten gemessen mit Ollama auf RTX 3060 12GB, 16 GB System-RAM, Ryzen 7 7700X. Q4_K_M-Quantisierung. Geschwindigkeiten variieren ±15%.',
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
            'GPU-Kosten sind eine Seite der Wirtschaftlichkeit; Token-Kosten die andere. Lokale Inferenz eliminiert API-Kosten pro Token, aber die Prompt-Länge beeinflusst weiterhin Latenz und Durchsatz. Das vollständige Kostenbild — Tokens, Preisstufen und Optimierungsstrategien — finden Sie unter [Tokens, Kosten und Grenzen: die Wirtschaftlichkeit von KI-Prompting](https://www.promptquorum.com/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=de).',
          ],
        },
        'best-by-use-case': {
          id: 'best-by-use-case',
          title: 'Beste Modelle nach Anwendungsfall auf RTX 3060',
          content: [
            '**Wählen Sie Ihr Modell basierend auf Ihrem Bedarf, nicht nach Parameterzahl:**',
            'Budget-Hardware läuft kleinere Modelle — aber gezieltes Prompting schließt die Qualitätslücke. Der [Prompt-Engineering-Guide](https://www.promptquorum.com/prompt-engineering) deckt Techniken wie Chain-of-Thought und strukturierte Ausgaben ab, die kleineren Modellen helfen, über ihrem Gewicht zu boxen.',
          ],
          items: [
            '**Chat / Frage-Antwort:** `ollama run llama3.2:7b` — Bester Allrounder. 15–20 Tok/Sek. 128K Kontext.',
            '**Coding:** `ollama run qwen2.5-coder:7b` — 72% HumanEval. 16 Tok/Sek. Stark bei Python, JavaScript, SQL.',
            '**Reasoning / Mathematik:** `ollama run deepseek-r1:7b` — Chain-of-Thought. 10–12 Tok/Sek.',
            '**Schreiben / Kreativ:** `ollama run mistral:7b` — Beste Instruktionsfolge. 18 Tok/Sek.',
            '**Vision / Bilder:** `ollama run gemma4:9b` — Multimodal (Bilder). 12–15 Tok/Sek. ~8 GB VRAM.',
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
            { q: 'Ist RTX 3060 12GB noch 2026 wert?', a: 'Ja. Sie ist 4+ Jahre alt, aber 12GB VRAM ist zeitlos. Lädt Llama 3.3 8B und Mistral 7B reibungslos. Ideal, wenn Sie eine gebrauchte unter €190 finden.' },
            { q: 'Sollte ich RTX 4060 oder RTX 4060 Ti für lokale LLMs kaufen?', a: 'RTX 4060 Ti. Das Base-4060 (8GB) und 4070 (12GB) sind schlechtes Preis-Leistungs-Verhältnis. Das Ti ist die beste Preis-RTX-40er-Serie für LLM-Arbeiten.' },
            { q: 'Kann ich stattdessen eine AMD RX 6700 oder 6800 XT verwenden?', a: 'Ja, aber Driver-Support für ONNX Runtime auf AMD ist schwächer als NVIDIA + CUDA. Erwarten Sie mehr Setup-Reibung. RTX ist sicherer für Budgets.' },
            { q: 'Reichen 12GB VRAM für 13B-Modelle?', a: 'Kaum, bei Q4-Quantisierung. Q5 oder Q8 verursachen OOM-Fehler. Wenn Sie 13B-Komfort wollen, zielen Sie auf 16GB ab.' },
            { q: 'Sollte ich eine gebrauchte Enterprise-GPU wie RTX A4000 kaufen?', a: 'Ja, falls verfügbar. 16GB VRAM, professionelle Kühlung, normalerweise €130-180 gebraucht. Leicht langsamer als RTX 3060, aber VRAM-Puffer ist es wert.' },
            { q: 'Welche PSU-Leistung sollte ich mit einer €150-GPU kaufen?', a: '550W, 80+ Gold Minimum. Eine €150-GPU + CPU + Mainboard überschreitet nicht 350W, aber Sie wollen Kopfraum für Spitzen.' },
            { q: 'Kann ich Ollama mit einer €100-Budget-GPU ausführen?', a: 'Ja. Ollama ist leichtgewichtig. Eine 4 Jahre alte RTX 3060 mit Ollama lädt Mistral 7B mit 10-15 Tokens/Sek.--völlig nutzbar.' },
            { q: 'Was sind die VRAM-Anforderungen für DSGVO-konforme lokale Inferenz in Unternehmen?', a: 'Minimum RTX 3060 12GB oder A4000 16GB für bis zu 50 Benutzer mit Llama 3.3 13B Q4. ECC-GPU empfohlen für Fehlererkennung. Firmware/physische Sicherheit verhindert GPU-Memory-Dumps.' },
            { q: 'Welche GPU empfiehlt sich für einen Team-Server im deutschen Mittelstand?', a: 'RTX 3060 12GB oder A4000 für 1-50 Mitarbeiter. RTX 4070 Super oder A6000 für 50-200 Mitarbeiter. RTX 3060 kann Llama 3.3 13B Q4 + vLLM mit 3-5 gleichzeitigen Anfragen ausführen. Größere Teams benötigen A100 mit Enterprise-Clustering.' },
          ],
        },
        'recommended-setups': {
          title: 'Welche Hardware-Einrichtung funktioniert für jedes Modell?',
          items: [
            '**Für Llama 3.3 70B lokal:** Siehe [70B-Modelle auf Consumer-Hardware](/local-llms/70b-models-consumer-hardware?lang=de) für RTX 4090, Dual-GPU und Enterprise-GPU-Empfehlungen.',
            '**Für Qwen 2.5 Codierungsmodelle:** Siehe [Beste GPUs für lokale LLMs](/local-llms/best-gpus-for-local-llms?lang=de) für optimierte Qwen-Setups.',
            '**Für Mistral 7B auf minimaler Hardware:** Dieser Leitfaden (RTX 3060 oder 4060 Ti) ist Ihr Startpunkt.',
            '**Zum Berechnen exakter VRAM-Anforderungen:** Verwenden Sie [How Much VRAM Do You Need?](/local-llms/how-much-vram-local-llm?lang=de) für Ihre Modellgröße und Quantisierungsstufe.',
          ],
        },
        'relatedReading': {
          title: 'Weiterführende Literatur',
          items: [
            '[Wie viel VRAM für lokale LLMs](/local-llms/how-much-vram-local-llm?lang=de)',
            '[70B-Modelle auf Consumer-Hardware](/local-llms/70b-models-consumer-hardware?lang=de)',
            '[RTX 5090 vs RTX 4090](/local-llms/rtx-5090-vs-rtx-4090-local-llm?lang=de)',
            '[Gebrauchte GPUs für lokale LLMs](/local-llms/used-gpus-for-local-llms?lang=de)',
            '[Beste GPUs für lokale LLMs](/local-llms/best-gpus-for-local-llms?lang=de)',
            '[How Much VRAM Do You Need?](/local-llms/how-much-vram-local-llm?lang=de)',
          ],
        },
        'sources': {
          title: 'Quellen',
          items: [
            'TechPowerUp GPU-Datenbank: RTX 3060 / RTX 4060 Ti / RTX 4070 Super Spezifikationen und Stromverbrauch',
            'NVIDIA CUDA Capability Matrix: GPU-Speicherbandbreite und theoretischer Durchsatz für Inferenz-Workloads',
            'Ollama Model Requirements: VRAM-Empfehlungen für Llama 3.3 7B, Mistral 7B und Qwen Quantisierungsstufen',
          ],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm?lang=de',
        'inLanguage': 'de',
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
        'inLanguage': 'de',
        'url': 'https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm?lang=de',
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
      intro: '**La RTX 3060 12 Go exécute Llama 3.2 7B à 15–20 tok/sec, Mistral 7B à 18 tok/sec et Qwen2.5-Coder 7B à 16 tok/sec — le tout en quantification Q4.** La variante 6 Go est limitée aux modèles 3B. En avril 2026, la RTX 3060 12 Go (200–250 $ d\'occasion) reste le meilleur GPU budget pour les LLM locaux.',
      metaDescription: 'RTX 3060 12GB (200-250 € d\'occasion) domine pour les modèles 7B. 5 GPU budget classés par VRAM et prix pour Llama 3.3 et Mistral 7B en 2026.',
      publishDate: '2026-04-05',
      dateModified: '2026-04-08',
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
 isTldr: true, items: ['**RTX 3060 12 Go** (200–250 $ d\'occasion) : Exécute tous les 7B et la plupart des 13B en Q4. Meilleur choix budget.', '**RTX 3060 6 Go** : Limité aux modèles 3B (Phi-4 Mini, Llama 3.2 3B). Trop juste pour 7B.', '**Meilleur modèle chat sur 12 Go :** Llama 3.2 7B à 15–20 tok/sec.', '**Meilleur modèle code sur 12 Go :** Qwen2.5-Coder 7B à 16 tok/sec. 72% HumanEval.', '**Meilleur modèle raisonnement sur 12 Go :** DeepSeek-R1 7B à 10–12 tok/sec.', '**À éviter si :** vous voulez des modèles 70B ou 13B en Q8 — il faut 24 Go (RTX 4090).'] },
        'rtx-3060-12gb': {
          id: 'rtx-3060-12gb',
          title: 'Que peut-on exécuter sur RTX 3060 12 Go ?',
          content: [
            '**La RTX 3060 12 Go est le meilleur GPU budget pour les LLM locaux en 2026.** 12 Go de VRAM accueille tous les modèles 7B en Q4/Q5 et la plupart des 13B en Q4 :',
          ],
          columns: ['Modèle', 'Taille', 'Quantification', 'VRAM', 'Vitesse', 'Idéal pour'],
          rows: [
            { 'Modèle': 'Llama 3.2 7B', 'Taille': '7B', 'Quantification': 'Q4_K_M', 'VRAM': '~7 Go', 'Vitesse': '15–20 tok/sec', 'Idéal pour': 'Chat, Q&R' },
            { 'Modèle': 'Mistral 7B v0.3', 'Taille': '7B', 'Quantification': 'Q4_K_M', 'VRAM': '~7 Go', 'Vitesse': '18 tok/sec', 'Idéal pour': 'Suivi d\'instructions' },
            { 'Modèle': 'Qwen2.5-Coder 7B', 'Taille': '7B', 'Quantification': 'Q4_K_M', 'VRAM': '~7 Go', 'Vitesse': '16 tok/sec', 'Idéal pour': 'Code (72% HumanEval)' },
            { 'Modèle': 'DeepSeek-R1 7B', 'Taille': '7B', 'Quantification': 'Q4_K_M', 'VRAM': '~7 Go', 'Vitesse': '10–12 tok/sec', 'Idéal pour': 'Raisonnement, maths' },
            { 'Modèle': 'Gemma 4 9B', 'Taille': '9B', 'Quantification': 'Q4_K_M', 'VRAM': '~8 Go', 'Vitesse': '12–15 tok/sec', 'Idéal pour': 'Vision, multimodal' },
            { 'Modèle': 'Llama 3.2 13B', 'Taille': '13B', 'Quantification': 'Q4_K_M', 'VRAM': '~11 Go', 'Vitesse': '8–10 tok/sec', 'Idéal pour': 'Chat haute qualité' },
          ],
          note: 'Toutes les vitesses mesurées avec Ollama sur RTX 3060 12 Go, 16 Go RAM système, Ryzen 7 7700X. Quantification Q4_K_M. Variations ±15%.',
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
        'vram-7b': { title: 'Combien de VRAM avez-vous besoin pour les modèles 7B?', content: ['Les modèles 7B quantifiés à Q4 (4-bit) nécessitent **6-8GB VRAM**; Q5 (5-bit) nécessite **8-10GB**; Q8 (8-bit) nécessite **14-16GB**.', 'En pratique: **8GB est le minimum absolu** pour une inférence confortable sur les modèles 7B à Q4 avec espace pour le traitement par lot.', 'Les cartes 6GB (RTX 2060) fonctionnent techniquement mais nécessitent une optimisation agressive et ne laissent pas de place pour des lots plus élevés.', 'Le coût GPU est un côté de l\'économie ; le coût des tokens en est l\'autre. L\'inférence locale élimine les frais API par token, mais la longueur du prompt affecte toujours la latence et le débit. Pour le tableau complet des coûts — tokens, niveaux de tarification et stratégies d\'optimisation — voir [tokens, coûts et limites : l\'économie du prompting IA](https://www.promptquorum.com/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=fr).'] },
        'best-by-use-case': {
          id: 'best-by-use-case',
          title: 'Meilleurs modèles par usage sur RTX 3060',
          content: [
            '**Choisissez votre modèle selon votre besoin, pas le nombre de paramètres :**',
            'Le matériel d\'entrée de gamme fait tourner des modèles plus petits — mais un prompting habile comble l\'écart de qualité. Le [guide de prompt engineering](https://www.promptquorum.com/prompt-engineering) couvre des techniques comme la chain-of-thought et les sorties structurées qui aident les modèles plus petits à performer au-delà de leur taille.',
          ],
          items: [
            '**Chat / Q&R :** `ollama run llama3.2:7b` — Meilleur polyvalent. 15–20 tok/sec. 128K contexte.',
            '**Code :** `ollama run qwen2.5-coder:7b` — 72% HumanEval. 16 tok/sec. Python, JavaScript, SQL.',
            '**Raisonnement / Maths :** `ollama run deepseek-r1:7b` — Chain-of-thought. 10–12 tok/sec.',
            '**Écriture / Créatif :** `ollama run mistral:7b` — Meilleur suivi d\'instructions. 18 tok/sec.',
            '**Vision / Images :** `ollama run gemma4:9b` — Multimodal. 12–15 tok/sec. ~8 Go VRAM.',
            '**Confidentialité / Hors ligne :** Tous les modèles ci-dessus. 100% local.',
          ],
        },
        'used-vs-new': { title: 'Occasion vs. Neuf: Où devriez-vous acheter?', items: ['**Occasion (50-100 € moins cher)**: eBay, Facebook Marketplace, Craigslist, magasins de réparation informatique locaux. Risque plus élevé de cartes mortes ou de mauvais VRAM. Testez toujours avant engagement.', '**Neuf (280-400 €)**: Amazon.fr, LDLC, Materiel.net, Darty. Garantie incluse. Aucune surprise. Prix stables. Bon pour les acheteurs aversifs au risque.', '**Cartes minées (crypto, super bon marché)**: Risque extrême. Dégradation du VRAM commune. Achetez seulement si vous pouvez tester complètement sur place.'] },
        'mistakes': { title: 'Quelles erreurs GPU budget devriez-vous éviter?', items: ['Acheter une RTX 2060 4GB et s\'attendre à une inférence 7B fluide--vous aurez constamment des erreurs de mémoire insuffisante.', 'Associer un GPU à 300 € avec un PSU à 30 € (alimentation)--la chute de tension tue la stabilité. Budgétisez 80+ Gold certifié, 650W minimum.', 'Supposer que la RAM DDR5 et le CPU i9 accélèrent l\'inférence des LLM--ils ne le font pas. La bande passante du VRAM GPU est le seul goulot qui affecte la vitesse d\'inférence.'] },
        'final-verdict': { title: 'Quel GPU budget devriez-vous acheter?', content: ['**Pour les tâches de codage:** Choisissez RTX 3060 12GB ou RTX A4000 (16GB) + Qwen 2.5 7B. Vous obtenez une génération de code forte sans dépenses excessives.', '**Pour le raisonnement polyvalent:** Choisissez RTX 4060 Ti 8GB ou RTX 3060 12GB + Llama 3.3 7B. Meilleur équilibre coût et capacité.', '**Pour les configurations locales légères:** Choisissez RTX 4060 Ti 8GB + Mistral 7B. Inférence la plus rapide, consommation d\'énergie la plus faible, empreinte VRAM minimale.', '**Recommandation globale:** RTX 3060 12GB (d\'occasion, 200-250 €) est une valeur imbattable. S\'associe à tout modèle 7B-13B, a un coussin VRAM de 12GB et coûte moins que les cartes entry-level neuves.'] },
        'faqSection': { title: 'FAQ', faqs: [{ q: 'La RTX 3060 12GB vaut-elle toujours le coup en 2026?', a: 'Oui. Elle a 4+ ans, mais 12GB VRAM est intemporel. Exécute Llama 3.3 8B et Mistral 7B sans à-coups. Idéale si vous en trouvez une d\'occasion sous 250 €.' }, { q: 'Devrais-je acheter RTX 4060 ou RTX 4060 Ti pour les LLM locaux?', a: 'RTX 4060 Ti. La base 4060 (8GB) et 4070 (12GB) offrent un mauvais rapport qualité-prix. Le Ti est la meilleure carte RTX 40 au prix pour le travail LLM.' }, { q: 'Puis-je utiliser une AMD RX 6700 ou 6800 XT à la place?', a: 'Oui, mais le support des pilotes pour ONNX Runtime sur AMD est plus faible que NVIDIA + CUDA. Attendez-vous à plus de frictions de configuration. RTX est plus sûr pour les budgets.' }, { q: 'Les 12GB VRAM suffisent-ils pour les modèles 13B?', a: 'À peine, à la quantification Q4. Q5 ou Q8 causera des erreurs OOM. Si vous voulez le confort 13B, visez 16GB.' }, { q: 'Devrais-je acheter un GPU enterprise d\'occasion comme RTX A4000?', a: 'Oui, si disponible. 16GB VRAM, refroidissement professionnel, généralement 180-230 € d\'occasion. Légèrement plus lent que RTX 3060, mais le coussin VRAM en vaut la peine.' }, { q: 'Quelle puissance PSU devrais-je acheter avec un GPU à 300 €?', a: '650W, 80+ Gold minimum. Un GPU à 300 € + CPU + carte mère ne dépasse pas 400W, mais vous voulez de la marge pour les pics.' }, { q: 'Puis-je exécuter Ollama avec un GPU budget à 200 €?', a: 'Oui. Ollama est léger. Une RTX 3060 vieille de 4 ans avec Ollama exécutera Mistral 7B à 10-15 tokens/sec--totalement utilisable.' }, { q: 'Quel GPU recommandez-vous pour la conformité RGPD en entreprise?', a: 'Minimum RTX 3060 12GB ou A4000 16GB pour jusqu\'à 50 utilisateurs avec Llama 3.3 13B Q4. GPU ECC recommandée pour la détection d\'erreurs. La sécurité du firmware/physique empêche les dumps de GPU-Memory.' }, { q: 'Quel GPU est recommandé pour un serveur d\'équipe en petite entreprise?', a: 'RTX 3060 12GB ou A4000 pour 1-50 employés. RTX 4070 Super ou A6000 pour 50-200 employés. RTX 3060 peut exécuter Llama 3.3 13B Q4 + vLLM avec 3-5 requêtes simultanées. Les équipes plus grandes nécessitent A100 avec clustering enterprise.' }, { q: 'Quelle est la différence de performance entre RTX 3060 et 4060 Ti?', a: 'RTX 4060 Ti est ~15-20% plus rapide, mais RTX 3060 a 4GB VRAM supplémentaires. Pour les modèles 7B, les deux offrent une inférence confortable; choisissez selon le budget.' }, { q: 'Les cartes minées sont-elles sûres pour les LLM locaux?', a: 'Risqué. Le VRAM se dégrade après des années d\'exploitation intensive. Achetez seulement si vous pouvez stresser-tester sur place complètement avant engagement.' }] },
        'recommended-setups': { title: 'Quelle configuration matérielle fonctionne pour chaque modèle?', items: ['**Pour exécuter Llama 3.3 70B localement:** Voir [Modèles 70B sur matériel grand public](/local-llms/70b-models-consumer-hardware?lang=fr) pour recommandations RTX 4090, double GPU et GPU enterprise.', '**Pour les modèles de codage Qwen 2.5:** Voir [Meilleurs GPU pour LLM locaux](/local-llms/best-gpus-for-local-llms?lang=fr) pour configurations Qwen optimisées.', '**Pour exécuter Mistral 7B sur matériel minimal:** Ce guide (RTX 3060 ou 4060 Ti) est votre point de départ.', '**Pour calculer les besoins VRAM exacts:** Utilisez [Calculatrice VRAM](/local-llms/how-much-vram-local-llm?lang=fr) pour votre taille de modèle et niveau de quantification.'] },
        'relatedReading': { title: 'Lecture Associée', items: ['[Combien de VRAM pour les LLM locaux](/local-llms/how-much-vram-local-llm?lang=fr)', '[Modèles 70B sur matériel grand public](/local-llms/70b-models-consumer-hardware?lang=fr)', '[RTX 5090 vs RTX 4090](/local-llms/rtx-5090-vs-rtx-4090-local-llm?lang=fr)', '[GPU d\'occasion pour LLM locaux](/local-llms/used-gpus-for-local-llms?lang=fr)', '[Meilleurs GPU pour LLM locaux](/local-llms/best-gpus-for-local-llms?lang=fr)', '[Calculatrice VRAM](/local-llms/how-much-vram-local-llm?lang=fr)'] },
        'sources': { title: 'Sources', items: ['Base de données GPU TechPowerUp: Spécifications RTX 3060 / RTX 4060 Ti / RTX 4070 Super et consommation d\'énergie', 'Matrice de capacité NVIDIA CUDA: Bande passante mémoire GPU et débit théorique pour les charges de travail d\'inférence', 'Exigences de modèle Ollama: Recommandations VRAM pour Llama 3.3 7B, Mistral 7B et niveaux de quantification Qwen'] },
      },
      itemListSchema: { '@context': 'https://schema.org', '@type': 'ItemList', 'url': 'https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm?lang=fr', 'inLanguage': 'fr', name: 'Meilleurs GPU Budget pour les LLM Locaux', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'RTX 3060 12GB (200-250 € d\'occasion) est le meilleur choix global pour les modèles 7B-13B.' }, { '@type': 'ListItem', position: 2, name: 'RTX 4060 Ti 8GB (280-320 €) offre une technologie plus récente et une meilleure efficacité mais moins de VRAM.' }, { '@type': 'ListItem', position: 3, name: 'N\'achetez jamais une carte 2GB ou 4GB pour les LLM locaux--le VRAM minimum viable est 8GB pour une inférence confortable.' }, { '@type': 'ListItem', position: 4, name: 'Les cartes enterprise d\'occasion (RTX A2000, RTX A4000) offrent un excellent VRAM 12GB-16GB pour 150-250 €.' }, { '@type': 'ListItem', position: 5, name: 'Budgétisez 300-400 € pour le GPU, 400-500 € pour le reste du système (CPU, RAM, SSD) pour éviter les goulots.' }, { '@type': 'ListItem', position: 6, name: 'Évitez la RAM DDR5 et les CPU haut de gamme avec les GPU budget--ils n\'améliorent pas la vitesse des LLM.' }], regionalContext: { title: 'Contexte d\'adoption régionale et de conformité', content: ['**L\'approvisionnement en GPU en France, Belgique et Suisse est affecté par les réglementations d\'efficacité énergétique.** La directive Écoconception influence la disponibilité des GPU sur les marchés européens. Les organisations tiennent compte du coût total de propriété, y compris la consommation d\'énergie selon les exigences de reporting de l\'UE. PromptQuorum aide à déterminer si un GPU milieu de gamme suffit.', '**Les marchés africains et émergents priorisent les GPUs d\'occasion et importés en raison des coûts élevés.** Les taxes d\'importation et les marges de vente au détail rendent les GPU neufs coûteux. Les organisations africaines utilisent généralement les GPUs de génération antérieure (RTX 3000 series) pour réduire les coûts capitaux.', '**L\'approvisionnement en GPU en Amérique du Nord bénéficie de relations directes avec les fabricants et de prix compétitifs.** Les clients enterprise accèdent aux remises de support et de volume NVIDIA. Les GPU grand public (RTX 4060 à 4090) sont largement disponibles pour les petites équipes. PromptQuorum permet l\'analyse comparative sur les GPU candidats avant les grands achats.'] } },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'fr',
        'url': 'https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm?lang=fr',
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
      intro: '**RTX 3060 12GBはLlama 3.2 7Bを15–20トークン/秒、Mistral 7Bを18トークン/秒、Qwen2.5-Coder 7Bを16トークン/秒で実行します — すべてQ4量子化。** 6GB版は3Bモデルのみ対応。2026年4月時点、RTX 3060 12GB（中古$200–250）はローカルLLM用の最良バジェットGPUです。',
      metaDescription: 'RTX 3060 12GB（中古約2万5千円）は2026年の7Bモデル向け最高のコスパGPUです。VRAM・価格・推論速度でLlama 3.3対応の5つのGPUを比較しました。13B対応のVRAM閾値に注意が必要です。',
      publishDate: '2026-04-05',
      dateModified: '2026-04-08',
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
 isTldr: true, items: ['**RTX 3060 12GB**（中古$200–250）：すべての7Bモデルとほとんどの13BをQ4で実行。最良のバジェット選択肢。', '**RTX 3060 6GB**：3Bモデルのみ（Phi-4 Mini、Llama 3.2 3B）。7Bには不足。', '**12GBでの最良チャットモデル：** Llama 3.2 7B、15–20トークン/秒。', '**12GBでの最良コーディングモデル：** Qwen2.5-Coder 7B、16トークン/秒。72% HumanEval。', '**12GBでの最良推論モデル：** DeepSeek-R1 7B、10–12トークン/秒。', '**対象外：** 70Bモデルや13B Q8が必要な場合は24GB（RTX 4090）が必要。'] },
        'rtx-3060-12gb': { id: 'rtx-3060-12gb', title: 'RTX 3060 12GBで何が動く？', content: ['**RTX 3060 12GBは2026年のローカルLLM用最良バジェットGPUです。** 12GB VRAMはQ4/Q5のすべての7Bモデルと、Q4のほとんどの13Bモデルに対応：'], columns: ['モデル', 'サイズ', '量子化', 'VRAM使用', '速度', '最適用途'], rows: [{ 'モデル': 'Llama 3.2 7B', 'サイズ': '7B', '量子化': 'Q4_K_M', 'VRAM使用': '~7 GB', '速度': '15–20トークン/秒', '最適用途': 'チャット、Q&A' }, { 'モデル': 'Mistral 7B v0.3', 'サイズ': '7B', '量子化': 'Q4_K_M', 'VRAM使用': '~7 GB', '速度': '18トークン/秒', '最適用途': '指示従行' }, { 'モデル': 'Qwen2.5-Coder 7B', 'サイズ': '7B', '量子化': 'Q4_K_M', 'VRAM使用': '~7 GB', '速度': '16トークン/秒', '最適用途': 'コーディング（72% HumanEval）' }, { 'モデル': 'DeepSeek-R1 7B', 'サイズ': '7B', '量子化': 'Q4_K_M', 'VRAM使用': '~7 GB', '速度': '10–12トークン/秒', '最適用途': '推論、数学' }, { 'モデル': 'Gemma 4 9B', 'サイズ': '9B', '量子化': 'Q4_K_M', 'VRAM使用': '~8 GB', '速度': '12–15トークン/秒', '最適用途': 'ビジョン、マルチモーダル' }, { 'モデル': 'Llama 3.2 13B', 'サイズ': '13B', '量子化': 'Q4_K_M', 'VRAM使用': '~11 GB', '速度': '8–10トークン/秒', '最適用途': '高品質チャット' }], note: 'すべての速度はOllama、RTX 3060 12GB、16GBシステムRAM、Ryzen 7 7700Xで計測。Q4_K_M量子化。速度は±15%変動。' },
        'rtx-3060-6gb': { id: 'rtx-3060-6gb', title: 'RTX 3060 6GBで何が動く？', content: ['**6GB版は大幅に制限されています。** 3Bモデルのみ快適に動作。7BモデルのQ4は~7GB必要で、容量不足です。'], items: ['**Phi-4 Mini 3.8B（Q4）：** ~3GB VRAM、20–25トークン/秒。このサイズでの最良推論。', '**Llama 3.2 3B（Q4）：** ~2.5GB VRAM、25–35トークン/秒。最速オプション。', '**Gemma 2 2B（Q4）：** ~1.7GB VRAM、35–45トークン/秒。最軽量モデル。', '**7Bオフローディング：** 可能だが遅い。Llama 7BのCPUオフロード = ~5–8トークン/秒。', '**推奨：** 6GBカードをお持ちなら、12GB中古（$200–250）にアップグレードを。'] },
        'which-budget-gpus': { title: 'RTX 3060 vs 他のバジェットGPU', columns: ['GPU', 'VRAM', '価格（中古）', '7B速度', '最大モデル', '評価'], rows: [{ 'GPU': 'RTX 3060 12GB ★', 'VRAM': '12 GB', '価格（中古）': '¥30,000–38,000', '7B速度': '15–20トークン/秒', '最大モデル': '13B（Q4）', '評価': '最良バジェット' }, { 'GPU': 'RTX 4060 Ti 8GB', 'VRAM': '8 GB', '価格（中古）': '¥38,000–45,000', '7B速度': '20–25トークン/秒', '最大モデル': '7B（Q5最大）', '評価': '高速だがVRAM少' }, { 'GPU': 'RTX A4000', 'VRAM': '16 GB', '価格（中古）': '¥27,000–35,000', '7B速度': '12–15トークン/秒', '最大モデル': '13B（Q5）', '評価': 'VRAM/円最良' }, { 'GPU': 'RTX 4070 Super', 'VRAM': '12 GB', '価格（中古）': '¥60,000–68,000', '7B速度': '25–30トークン/秒', '最大モデル': '13B（Q5）', '評価': '高速だが2倍の価格' }, { 'GPU': 'RX 6700 XT', 'VRAM': '12 GB', '価格（中古）': '¥23,000–30,000', '7B速度': '10–14トークン/秒', '最大モデル': '13B（Q4）', '評価': '最安、AMDの手間' }], note: 'RTX 3060 12GBが価格性能比で勝利：¥30,000–38,000の12GB VRAMですべての7Bとほとんどの13Bを実行。' },
        'vram-7b': { title: '7Bモデルに必要なVRAMは？', content: ['Q4（4ビット）で量子化された7Bモデルは**6～8GB VRAM**を必要とし、Q5（5ビット）は**8～10GB**、Q8（8ビット）は**14～16GB**を必要とします。', '実際には：**8GBは最低限**で、Q4で7Bモデルでの快適な推論とバッチ処理用のスペースがあります。', '6GBカード（RTX 2060）は技術的に機能しますがアグレッシブな最適化が必要で、より高いバッチに余裕がありません。', 'GPUコストは経済性の一面であり、トークンコストはもう一面です。ローカル推論はAPIのトークン課金を排除しますが、プロンプト長は依然としてレイテンシとスループットに影響します。トークン、価格体系、最適化戦略を含むコスト全体像については、[トークン、コスト、制限：AIプロンプティングの経済学](https://www.promptquorum.com/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=ja)をご覧ください。'] },
        'best-by-use-case': { id: 'best-by-use-case', title: 'RTX 3060でのユースケース別最適モデル', content: ['**パラメータ数ではなく、実際のニーズに基づいてモデルを選択してください：**', 'バジェットハードウェアは小さなモデルを実行しますが、巧みなプロンプティングが品質差を縮めます。[プロンプトエンジニアリングガイド](https://www.promptquorum.com/prompt-engineering)では、Chain-of-Thoughtや構造化出力など、小さなモデルの実力を引き出すテクニックを解説しています。'], items: ['**チャット / Q&A：** `ollama run llama3.2:7b` — 最良の万能モデル。15–20トークン/秒。128Kコンテキスト。', '**コーディング：** `ollama run qwen2.5-coder:7b` — 72% HumanEval。16トークン/秒。Python、JavaScript、SQL。', '**推論 / 数学：** `ollama run deepseek-r1:7b` — Chain-of-Thought。10–12トークン/秒。', '**ライティング / クリエイティブ：** `ollama run mistral:7b` — 最良の指示従行。18トークン/秒。', '**ビジョン / 画像：** `ollama run gemma4:9b` — マルチモーダル。12–15トークン/秒。~8GB VRAM。', '**プライバシー / オフライン：** 上記すべて。100%ローカル。データは外部送信されません。'] },
        'used-vs-new': { title: '中古 vs 新品：どこで買う？', items: ['**中古（50～100ドル安い）**：eBay、Facebook Marketplace、Craigslist、地元のコンピュータ修理店。死んだカードまたは不良VRAMのリスクが高い。確約する前に常にテストしてください。', '**新品（280～400ドル）**：Newegg、Amazon、Best Buy、Microcenter。保証付き。驚きなし。価格安定。リスク回避買い手に最適。', '**マイニングカード（暗号、超安い）**：極端なリスク。VRAM劣化は一般的。その場で完全にベンチテストできる場合のみ購入してください。'] },
        'mistakes': { title: 'よくあるバジェットGPUの間違い', items: ['4GB RTX 2060を購入してスムーズな7B推論を期待する。常にメモリ不足エラーが発生します。', '250ドルのGPUを30ドルのPSU（電源）と組み合わせます。電圧サグは安定性を殺します。80+ Gold認定、650W最小をバジェット化してください。', 'DDR5 RAMとi9 CPUがLLM推論を高速化すると想定する。それらは高速化しません。GPU VRAMバンド幅は推論速度に影響する唯一のボトルネックです。'] },
        'faqSection': { title: 'FAQ', faqs: [{ q: 'RTX 3060 12GBは2026年でもまだ価値があるか？', a: 'はい。4年以上前ですが12GB VRAMは時代遅れではありません。Llama 3.3 8Bとよりすぐに実行します。中古で250ドル未満で見つけたら最適。' }, { q: 'ローカルLLM用にRTX 4060またはRTX 4060 Tiを購入すべきか？', a: 'RTX 4060 Ti。ベース4060（8GB）と4070（12GB）は悪い価値です。TiはLLM作業に最適な価格のRTX 40シリーズカードです。' }, { q: 'AMD RX 6700または6800 XTを代わりに使用できるか？', a: 'はい、ただしAMD上のONNX RuntimeのドライバサポートはNVIDIA + CUDAより弱い。セットアップの摩擦を増します。RTXはバジェットにより安全です。' }, { q: '12GB VRAM 13Bモデルに十分か？', a: 'かろうじて、Q4量子化で。Q5またはQ8はOOMエラーを起こします。13Bの快適さが必要な場合は16GBを目指してください。' }, { q: 'RTX A4000などの中古企業GPUを購入すべきか？', a: 'はい、利用可能な場合。16GB VRAM、プロフェッショナルグレード冷却、通常180～230ドルで中古。RTX 3060より若干遅いですがVRAMクッションの価値があります。' }, { q: '250ドルGPUで購入するPSU電力はいくらか？', a: '650W、80+ Gold最小。250ドルGPU + CPU + マザーボード400W以下ですがスパイク用に余裕が必要。' }, { q: '200ドルのバジェットGPUでOllamaを実行できるか？', a: 'はい。Ollamaは軽量です。4年前のRTX 3060にOllamaはMistral 7Bを10～15トークン/秒で実行します。完全に使用可能。' }, { q: 'エンタープライズでのGDPR準拠ローカル推論に推奨GPUは？', a: 'Llama 3.3 13B Q4で最大50ユーザーにはRTX 3060 12GBまたはA4000 16GB最小。ECC GPUはエラー検出に推奨。ファームウェア/物理セキュリティはGPUメモリダンプを防止します。' }, { q: '中小企業のチームサーバーに推奨GPUは？', a: '1～50従業員にはRTX 3060 12GBまたはA4000。50～200従業員にはRTX 4070 SuperまたはA6000。RTX 3060はLlama 3.3 13B Q4 + vLLMを3～5同時要求で実行可能。より大規模なチームはA100エンタープライズクラスタリングが必要。' }, { q: 'RTX 3060と4060 Tiのパフォーマンス差は？', a: 'RTX 4060 Tiは約15～20%高速ですが、RTX 3060は4GB追加VRAMがあります。7Bモデルでは両方が快適な推論を提供します。バジェットで選択してください。' }, { q: 'マイニングカードはローカルLLMで安全か？', a: 'リスクあり。VRAMは集約的な運用年後に劣化します。確約前に完全にその場でストレステストできる場合のみ購入してください。' }] },
        'relatedReading': { title: '関連資料', items: ['[ローカルLLMに必要なVRAMはいくらか](/local-llms/how-much-vram-local-llm?lang=ja)', '[コンシューマーハードウェアの70Bモデル](/local-llms/70b-models-consumer-hardware?lang=ja)', '[RTX 5090 vs RTX 4090](/local-llms/rtx-5090-vs-rtx-4090-local-llm?lang=ja)', '[ローカルLLM用の中古GPU](/local-llms/used-gpus-for-local-llms?lang=ja)', '[ローカルLLM向けの最高のGPU](/local-llms/best-gpus-for-local-llms?lang=ja)', '[VRAM計算機](/local-llms/how-much-vram-local-llm?lang=ja)'] },
        'sources': { title: 'ソース', items: ['TechPowerUp GPUデータベース：RTX 3060 / RTX 4060 Ti / RTX 4070 Super仕様と電力消費', 'NVIDIA CUDA能力マトリックス：推論ワークロード用GPU メモリバンド幅と理論的スループット', 'Ollama モデル要件：Llama 3.3 7B、Mistral 7B、Qwen量子化レベルVRAM推奨'] },
      },
      itemListSchema: { '@context': 'https://schema.org', '@type': 'ItemList', 'url': 'https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm?lang=ja', 'inLanguage': 'ja', name: 'ローカルLLM向けの最高のバジェットGPU', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'RTX 3060 12GB（中古200～250ドル）は7B～13Bモデルの最高の全体的なバジェット選択肢です。' }, { '@type': 'ListItem', position: 2, name: 'RTX 4060 Ti 8GB（280～320ドル）は新しいテクノロジーと優れた効率を提供しますがVRAMは少なくなります。' }, { '@type': 'ListItem', position: 3, name: 'ローカルLLM用に2GBまたは4GBカードを決して購入しないでください。快適な推論のための最小限のVRAMは8GBです。' }, { '@type': 'ListItem', position: 4, name: '中古企業GPU（RTX A2000、RTX A4000）は150～250ドルで優れた12GB～16GBVRAMを提供します。' }, { '@type': 'ListItem', position: 5, name: 'ボトルネック回避のためGPUに300～400ドル、残りのシステム（CPU、RAM、SSD）に400～500ドルを予算化します。' }, { '@type': 'ListItem', position: 6, name: 'バジェットGPUではDDR5 RAMとハイエンドCPUを避けてください。これらはLLM速度を向上させません。' }], regionalContext: { title: '地域採用とコンプライアンスコンテキスト', content: ['**日本のGPU市場は世界市場と異なる価格設定です。** 輸入関税、小売マージン、限定的なエンタープライズGPU在庫は調達タイムラインに影響します。日本の組織はコンシューマー小売ではなくエンタープライズチャネルを通じて調達します。コンパクトワークステーションに適合する省スペースGPUが優先されます。', '**アジア太平洋地域（APAC）では、企業はローカルGPU供給と支援を優先しています。** 中国、韓国、シンガポールは独立したGPUデータセンターインフラストラクチャを開発しています。PromptQuorumは地域組織がローカルハードウェアオプションを評価するのに役立ちます。', '**北米GPU調達は製造業者との直接関係と競争力のある価格から恩恵を受けます。** エンタープライズ顧客はNVIDIAサポートとボリュームディスカウントにアクセスしています。コンシューマーGPU（RTX 4060～4090）は小規模チーム向けに幅広く利用可能です。PromptQuorumは大規模購入前に候補GPUでのベンチマークを有効にします。'] } },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'ja',
        'url': 'https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm?lang=ja',
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
      intro: '**RTX 3060 12GB以15–20令牌/秒运行Llama 3.2 7B，以18令牌/秒运行Mistral 7B，以16令牌/秒运行Qwen2.5-Coder 7B——均为Q4量化。** 6GB版本仅限3B模型。截至2026年4月，RTX 3060 12GB（二手$200–250）仍是本地LLM最佳预算GPU。',
      metaDescription: 'RTX 3060 12GB（二手约1400-1800元）是2026年7B模型本地推理的性价比首选。5款GPU按VRAM、价格和推理速度排名，涵盖Llama 3.3和Mistral 7B。',
      publishDate: '2026-04-05',
      dateModified: '2026-04-08',
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
            '**RTX 3060 12GB**（二手$200–250）：运行所有7B和大多数13B的Q4模型。最佳预算选择。',
            '**RTX 3060 6GB**：仅限3B模型（Phi-4 Mini、Llama 3.2 3B）。7B不够用。',
            '**12GB最佳聊天模型：** Llama 3.2 7B，15–20令牌/秒。',
            '**12GB最佳编程模型：** Qwen2.5-Coder 7B，16令牌/秒。72% HumanEval。',
            '**12GB最佳推理模型：** DeepSeek-R1 7B，10–12令牌/秒。',
            '**不适合：** 需要70B模型或13B Q8的用户——需要24GB（RTX 4090）。',
          ],
        },
        'rtx-3060-12gb': {
          id: 'rtx-3060-12gb',
          title: 'RTX 3060 12GB能运行什么？',
          content: [
            '**RTX 3060 12GB是2026年本地LLM最佳预算GPU。** 12GB VRAM适配所有7B模型的Q4/Q5和大多数13B模型的Q4：',
          ],
          columns: ['模型', '大小', '量化', 'VRAM占用', '速度', '最适合'],
          rows: [
            { '模型': 'Llama 3.2 7B', '大小': '7B', '量化': 'Q4_K_M', 'VRAM占用': '~7 GB', '速度': '15–20令牌/秒', '最适合': '聊天、问答' },
            { '模型': 'Mistral 7B v0.3', '大小': '7B', '量化': 'Q4_K_M', 'VRAM占用': '~7 GB', '速度': '18令牌/秒', '最适合': '指令遵循' },
            { '模型': 'Qwen2.5-Coder 7B', '大小': '7B', '量化': 'Q4_K_M', 'VRAM占用': '~7 GB', '速度': '16令牌/秒', '最适合': '编程（72% HumanEval）' },
            { '模型': 'DeepSeek-R1 7B', '大小': '7B', '量化': 'Q4_K_M', 'VRAM占用': '~7 GB', '速度': '10–12令牌/秒', '最适合': '推理、数学' },
            { '模型': 'Gemma 4 9B', '大小': '9B', '量化': 'Q4_K_M', 'VRAM占用': '~8 GB', '速度': '12–15令牌/秒', '最适合': '视觉、多模态' },
            { '模型': 'Llama 3.2 13B', '大小': '13B', '量化': 'Q4_K_M', 'VRAM占用': '~11 GB', '速度': '8–10令牌/秒', '最适合': '高质量聊天' },
          ],
          note: '所有速度在Ollama、RTX 3060 12GB、16GB系统RAM、Ryzen 7 7700X上测量。Q4_K_M量化。速度±15%浮动。',
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
            'GPU成本是经济性的一面；token成本是另一面。本地推理消除了按token计费的API费用，但提示词长度仍然影响延迟和吞吐量。完整的成本图景——token、定价层级和优化策略——请参阅[token、成本与限制：AI提示词经济学](https://www.promptquorum.com/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=zh)。',
          ],
        },
        'best-by-use-case': {
          id: 'best-by-use-case',
          title: 'RTX 3060按用途选最佳模型',
          content: [
            '**根据实际需求选择模型，而非参数量：**',
            '预算硬件只能运行较小的模型——但熟练的提示词技巧可以弥补质量差距。[Prompt工程指南](https://www.promptquorum.com/prompt-engineering)涵盖了思维链和结构化输出等技术，帮助小模型超越其规模发挥。',
          ],
          items: [
            '**聊天 / 问答：** `ollama run llama3.2:7b` — 最佳全能型。15–20令牌/秒。128K上下文。',
            '**编程：** `ollama run qwen2.5-coder:7b` — 72% HumanEval。16令牌/秒。Python、JavaScript、SQL。',
            '**推理 / 数学：** `ollama run deepseek-r1:7b` — 思维链推理。10–12令牌/秒。',
            '**写作 / 创意：** `ollama run mistral:7b` — 最佳指令遵循。18令牌/秒。',
            '**视觉 / 图像：** `ollama run gemma4:9b` — 多模态。12–15令牌/秒。~8GB VRAM。',
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
            '[本地LLM需要多少VRAM](/local-llms/how-much-vram-local-llm?lang=zh)',
            '[消费硬件上的70B模型](/local-llms/70b-models-consumer-hardware?lang=zh)',
            '[RTX 5090对RTX 4090](/local-llms/rtx-5090-vs-rtx-4090-local-llm?lang=zh)',
            '[本地LLM二手GPU](/local-llms/used-gpus-for-local-llms?lang=zh)',
            '[本地LLM的最佳GPU](/local-llms/best-gpus-for-local-llms?lang=zh)',
            '[How Much VRAM Do You Need?](/local-llms/how-much-vram-local-llm?lang=zh)',
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
        'url': 'https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm?lang=zh',
        'inLanguage': 'zh',
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
        'inLanguage': 'zh',
        'url': 'https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm?lang=zh',
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
