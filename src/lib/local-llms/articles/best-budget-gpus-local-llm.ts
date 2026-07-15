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
      current_models_mentioned: ['Qwen3 8B', 'Qwen3 14B', 'Gemma 4 E12B', 'Gemma 4 E4B', 'Mistral Small', 'DeepSeek-R1 7B', 'gpt-oss:20b'],
      theme: 'GPU Buying Guides',
      title: 'Best Budget GPU for Local LLMs 2026: RTX 3060 12GB & Alternatives',
      seoTitle: 'Best Budget GPU for Local LLMs 2026: RTX 3060 12GB',
      intro: '**RTX 3060 12GB runs Qwen3 14B at 9–12 tok/sec, Qwen3 8B at 16–20 tok/sec, Gemma 4 E12B at 11–14 tok/sec, Mistral Small at 18 tok/sec, and DeepSeek-R1 7B at 10–12 tok/sec — all at Q4 quantization.** (DeepSeek has since released DeepSeek-V4 — Flash/Pro — as a newer open-weight generation; R1/V3 remain valid to run locally.) The 6GB variant is limited to 3B models only. As of June 2026, the RTX 3060 12GB ($200–250 used) remains the best budget GPU for local LLMs: 12GB VRAM fits every 7B-8B model at Q4/Q5 and most dense 13B-14B models at Q4. (Note: Llama 4 Scout is a 17B-active/109B-total MoE that needs ~55 GB at Q4 — it does not fit 12 GB normally.) This guide covers exactly which models run on each VRAM tier, with real speeds and practical setups.',
      metaDescription: 'Best budget GPU for local LLMs 2026: RTX 3060 12GB ($200–250 used) runs Qwen3 14B at 9–12 tok/s. Cheaper: RX 6700 XT. Best VRAM/$: RTX A4000. Full speed table.',
      publishDate: '2026-04-05',
      dateModified: '2026-06-19',
      leadAnswerBlock: '**RTX 3060 12GB runs Qwen3 14B at 9–12 tok/sec, Qwen3 8B at 16–20 tok/sec, Gemma 4 E12B at 11–14 tok/sec, Mistral Small at 18 tok/sec, and DeepSeek-R1 7B at 10–12 tok/sec. The 6GB variant handles 3B models only. Best budget GPU for local LLMs in 2026 at $200–250 used.**',
      quickAnswerTop: {
        question: 'What is the best budget GPU for local LLMs in 2026?',
        answer: 'RTX 3060 12 GB ($200–250 used) is the best budget GPU for local LLMs in 2026 — runs Qwen3 14B at 9–12 tok/s at Q4, handles all 7B-8B models, and fits within a $250 budget. For $350–400 new, the RTX 4070 Super 12 GB runs the same models 20–30% faster.',
        bullets: [
          '→ RTX 3060 12 GB used ($200–250): runs Qwen3 14B at 9–12 tok/s — best value overall',
          '→ RTX 4060 Ti 8 GB new (~$250): faster than 3060 on 7B, but only 8 GB VRAM',
          '→ RTX 4070 Super 12 GB new ($350–400): best new budget card — 20% faster, same VRAM',
          '→ Used RTX A4000 (~$200): 16 GB VRAM at budget price, great for 13B-20B models',
        ],
        updatedDate: '2026-06-19',
      },
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
        { label: 'How Does RTX 3060 Compare to Other Budget GPUs?', anchor: '#which-budget-gpus' },
        { label: 'How Much VRAM Do You Need for 7B Models?', anchor: '#vram-7b' },
        { label: 'Which Models Run Best on RTX 3060 by Use Case?', anchor: '#best-by-use-case' },
        { label: 'Used vs. New: Where Should You Buy?', anchor: '#used-vs-new' },
        { label: 'What Are the Most Common Budget GPU Mistakes?', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'RTX 3060 12 GB ($200–250 used) runs Qwen3 14B at 9–12 tok/s and is the best budget GPU for local LLMs in 2026.' },
            { type: 'plain-terms', text: 'A budget GPU for AI means a graphics card that costs under $300 but still has enough video memory (VRAM) to run a capable AI model at a usable speed on your own computer.' },
          ],
          items: [
            '**Best pick by budget:** Under $200 — RX 6700 XT 12GB ($150–200, cheapest, AMD setup friction) or RTX A4000 16GB if found sub-$230 (best VRAM per dollar). ~$250 — RTX 3060 12GB (best overall). Under $500 — RTX 4070 Super 12GB (fastest at 25–30 tok/s).',
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
          snippetBlocks: [
            { type: 'one-sentence', text: 'RTX 3060 12 GB runs Qwen3 14B at Q4 (9 GB, ~9–12 tok/s), Qwen3 8B (5.5 GB, ~16–20 tok/s), and all 7B models comfortably.' },
            { type: 'plain-terms', text: 'The RTX 3060 12 GB has 12 gigabytes of video memory — enough for AI models up to about 14 billion parameters. Larger models will not fit and will run slowly.' },
          ],
          content: [
            '**The RTX 3060 12GB is the best budget GPU for local LLMs in 2026.** 12GB VRAM fits every 7B model at Q4/Q5 quantization, and most 13B models at Q4. For detailed guidance on VRAM requirements across model sizes, see the [VRAM requirements guide →](/local-llms/how-much-vram-local-llm). Here are the exact models and speeds you can expect:',
          ],
          columns: ['Model', 'Size', 'Quantization', 'VRAM Used', 'Speed', 'Best For'],
          rows: [
            { 'Model': 'Qwen3 14B', 'Size': '14B (dense)', 'Quantization': 'Q4_K_M', 'VRAM Used': '~9 GB', 'Speed': '9–12 tok/sec', 'Best For': 'Best overall quality that fits' },
            { 'Model': 'Qwen3 8B', 'Size': '8B', 'Quantization': 'Q4_K_M', 'VRAM Used': '~7 GB', 'Speed': '16–20 tok/sec', 'Best For': 'Coding, all-round' },
            { 'Model': 'Gemma 4 E12B', 'Size': '26B MoE', 'Quantization': 'Q4_K_M', 'VRAM Used': '~9 GB', 'Speed': '11–14 tok/sec', 'Best For': 'Vision, multimodal' },
            { 'Model': 'Mistral Small v0.3', 'Size': '7B', 'Quantization': 'Q4_K_M', 'VRAM Used': '~7 GB', 'Speed': '18 tok/sec', 'Best For': 'Instruction following' },
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
          title: 'How Does RTX 3060 Compare to Other Budget GPUs?',
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
          id: 'vram-7b',
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
          title: 'Which Models Run Best on RTX 3060 by Use Case?',
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
            '**Home automation / always-on AI:** `ollama run phi4-mini` — Phi-4 Mini (3.8B, ~3 GB VRAM) handles Home Assistant voice queries on a mini PC without a discrete GPU. See [best hardware for local smart home AI →](/smart-home/best-hardware-for-local-smart-home).',
          ],
        },
        'used-vs-new': {
          id: 'used-vs-new',
          title: 'Used vs. New: Where Should You Buy?',
          items: [
            '**Used ($50-100 cheaper)**: eBay, Facebook Marketplace, Craigslist, local computer repair shops. Higher risk of dead cards or bad VRAM. Always test before committing.',
            '**New ($280-400)**: Newegg, Amazon, Best Buy, Microcenter. Warranty included. No surprises. Prices stable. Good for risk-averse buyers.',
            '**Mined cards (crypto, dirt cheap)**: Extreme risk. VRAM degradation common. Only buy if you can fully bench-test on-site.',
          ],
        },
        'mistakes': {
          title: 'What Are the Most Common Budget GPU Mistakes?',
          items: [
            'Buying a 4GB RTX 2060 and expecting smooth 7B inference--you\'ll hit out-of-memory errors constantly.',
            'Pairing a $250 GPU with a $30 PSU (power supply)--voltage sag kills stability. Budget 80+ Gold certified, 650W minimum.',
            'Assuming DDR5 RAM and i9 CPU speed up LLM inference--they don\'t. GPU VRAM bandwidth is the only bottleneck that matters for inference speed.',
            'Assuming Llama 4 Scout fits 12 GB. Scout is a 17B-active / 109B-total MoE that needs ~55 GB at Q4 (it only squeezes into 24 GB at 1.78-bit, ~20 tok/s). On a 12 GB RTX 3060, run dense models instead: Qwen3 14B (~9 GB), Qwen3 8B, or Gemma 4 E12B.',
            'Buying a 16 GB card just for 13B models. A 12 GB RTX 3060 already runs Qwen3 14B at Q4. Step up to 16 GB only if you specifically need gpt-oss:20b (16 GB), dense 20B+ models, or more context headroom.',
          ],
        },
        'nextSteps': {
          id: 'next-steps',
          title: 'Next steps',
          items: [
            '[Best AMD GPUs for Local LLMs](/local-llms/best-amd-gpus-local-llm) — Considering AMD? Full AMD vs NVIDIA breakdown →',
            '[Best Open-Source Ollama Models](/local-llms/top-open-source-models-ollama) — See which models run best on a budget GPU →',
            '[How Much VRAM Do I Need?](/local-llms/how-much-vram-local-llm) — Match your GPU to your model size →',
          ],
        },
        'regionalContext': {
          id: 'regional-context',
          title: 'How Do Regional Privacy Laws Affect GPU Choice for Local LLMs?',
          content: [
            '**EU GDPR: Budget GPU local inference is fully compliant — no cloud, no data transfer.** Running Qwen3 or Gemma 4 on an RTX 3060 keeps all inference on-device. GDPR Article 25 (privacy by design) and Article 32 (technical security) are satisfied by default. European freelancers, legal firms, and healthcare providers increasingly use budget NVIDIA setups for document processing that cannot touch cloud APIs.',
            '**Japan APPI and Asia-Pacific: Local GPU inference eliminates cross-border data transfer.** Under Japan\'s amended APPI, sensitive personal data cannot be transferred to servers outside Japan without explicit consent. A €250 RTX 3060 running Ollama locally removes this concern entirely — inference happens on-device with no network requests.',
            '**US and global SMBs: Budget GPU setups reduce API cost and eliminate vendor lock-in.** For small businesses, an RTX 3060 ($200–250 used) pays back its cost in roughly 2–3 months compared to GPT-4o API usage at comparable token volumes, with no per-token costs thereafter.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            { q: 'Is RTX 3060 12GB still worth buying in 2026?', a: 'Yes. It\'s 4+ years old, but 12GB VRAM is timeless. Runs Qwen3 14B, Qwen3 8B, Gemma 4 E12B, and Mistral Small smoothly at Q4. It fits every 7B-8B model and most dense 13B-14B models.' },
            { q: 'Should I buy RTX 5060 Ti or RTX 4060 Ti for local LLMs?', a: 'RTX 5060 Ti. The newer generation (2026) offers 10-15% better performance. If budget-constrained, RTX 4060 Ti is still solid. Avoid base 4060/5060 (8GB) and 4070 (12GB)—poor value.' },
            { q: 'Can I use an AMD RX 7900 XT or RX 7900 XTX instead?', a: 'Yes, but driver support for AMD is weaker than NVIDIA + CUDA. HIP/ROCm setup requires more effort. RTX is safer for beginners.' },
            { q: 'Is 12GB VRAM enough for 13B models?', a: 'Barely, at Q4 quantization. Q5 or Q8 will cause OOM errors. If you want 13B comfort, aim for 16GB.' },
            { q: 'Should I buy a used enterprise GPU like RTX A4000?', a: 'Yes, if available. 16GB VRAM, professional-grade cooling, usually $180-230 used. Slightly slower than RTX 3060, but VRAM cushion is worth it.' },
            { q: 'What PSU wattage should I buy with a $250 GPU?', a: '650W, 80+ Gold minimum. A $250 GPU + CPU + motherboard doesn\'t exceed 400W draw, but you want headroom for spikes.' },
            { q: 'Can I run Ollama with a $200 budget GPU?', a: 'Yes. Ollama is lightweight. A 4-year-old RTX 3060 with Ollama will run Qwen3 14B at 9-12 tok/sec or Qwen3 8B at 16-20 tok/sec — totally usable for interactive chat and coding assistance.' },
            { q: 'Can I run Llama 4 Scout on an RTX 3060 12GB?', a: 'Not normally. Llama 4 Scout is a 17B-active / 109B-total MoE that needs ~55 GB VRAM at Q4 — far beyond a 12 GB card. It only squeezes into 24 GB at an extreme 1.78-bit quant (~20 tok/sec). On an RTX 3060 12GB, run dense models instead: `ollama pull qwen3:14b` (best quality that fits), Qwen3 8B, or Gemma 4 E12B. Scout is a long-context (10M-token) / large-multimodal pick for 48 GB+ rigs.' },
            { q: 'What is the best budget GPU under $200?', a: 'Used RTX 2080 (8GB, ~$150) or RTX A2000 (12GB, ~$180-200). Both run 7B models at Q4. The A2000 is preferred for its 12GB VRAM headroom.' },
            { q: 'How do I test a used GPU for VRAM defects before buying?', a: 'Run VRAM stress tests: gpu-burn (Linux), HWiNFO64 memory stress test (Windows), or load a large model in Ollama and watch for OOM errors. Test before returning the card.' },
            { q: 'Can I upgrade my current GPU to run larger models later?', a: 'Yes, GPU upgrades are straightforward in desktop PCs. Start with RTX 3060 12GB, then upgrade to RTX 4090 or 5090 later. PCIE slot is backward-compatible across generations.' },
            { q: 'What is the best budget NVIDIA GPU for local LLM inference?', a: 'RTX 4060 Ti (8 GB, ~$250) for 7B models, or RTX 4070 Super (12 GB, ~$350-400) for 13B models. For used: RTX 3060 12GB ($200–250) runs 7-13B models smoothly at Q4. Best value is RTX 3060 12GB used, or RTX 4070 Super new.' },
            { q: 'How does the AMD 6800XT compare to the RTX 4070 for AI inference?', a: 'AMD RX 6800 XT (16 GB) beats RTX 4070 (12 GB) on VRAM and gaming performance but lags on LLM inference speed (15-20% slower). ROCm driver setup for llama.cpp is also more complex than CUDA. For pure LLM work, RTX 4070 is easier; for gaming + LLMs, 6800 XT offers better value.' },
            { q: 'What is the best price-per-GB VRAM GPU for local LLMs in 2026?', a: 'Used RTX 3090 (24 GB, ~$450-500) = $18-20 per GB. Used RTX 3060 (12 GB, ~$150-180) = $12-15 per GB. RTX 4070 Ti (12 GB, ~$600 new) = $50 per GB. Best value: RTX 3060 12GB used. Most capacity per dollar: RTX 3090 24GB used. Balance price + power: RTX 4070 new.' },
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
            '[Prompt Engineering for Local LLMs](/local-llms/prompt-engineering-for-local-models) — optimize prompts for models running on budget hardware.',
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — significantly improves DeepSeek-R1 output quality.',
            '[Mac Mini M5 as Local AI Server](/local-llms/mac-mini-m5-local-ai-server) — Budget alternative to GPU builds: always-on AI at $599 hardware + $35/year electricity.',
            '[Apple Silicon M5 for Local LLMs](/local-llms/apple-silicon-m5-local-llm) — Complete M5 Pro/Max guide: benchmarks, Mac configurations, memory tiers, and which Mac to buy for local inference.',
            '[Apple Silicon vs NVIDIA GPU for Local LLMs](/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Full cost and performance comparison: when a Mac beats a budget GPU.',
            '[Best Models for Apple Silicon 2026](/local-llms/best-models-apple-silicon-2026) — Model recommendations for 16GB–128GB unified memory tiers.',
            '[Melhores GPUs Econômicas para LLMs Locais (Português)](/pt/local-llms/best-budget-gpus-local-llm) — versão em português deste guia',
            '[Best Value GPU for Local LLMs in Japan — Akihabara retailers, Mercari and Yahoo Auctions pricing guide](/prompt-bites/best-gpu-local-llm-japan-price)',
            '[Best-Value GPU for Local LLMs at UAE/Gulf Pricing — Sharaf DG, noon.com, Amazon.ae, and dubizzle pricing guide](/prompt-bites/best-gpu-local-llm-uae-price)',
          ],
        },
        'sources': {
          title: 'Sources',
          items: [
            'Meta AI. (2025). "Llama 4 Model Card." — Scout MoE architecture, VRAM requirements',
            'Qwen Team. (2026). "Qwen3 Technical Report." — Qwen3 8B specifications',
            'TechPowerUp GPU Database: RTX 3060 / RTX 4060 Ti / RTX 4070 Super specs and power consumption',
            'NVIDIA CUDA Capability Matrix: GPU memory bandwidth and theoretical throughput for inference workloads',
            'Ollama Model Requirements: VRAM recommendations for Llama 4 Scout, Qwen3, and Mistral Small quantization levels',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'RTX 3060 Local LLM Guide 2026: What Models You Can Run',
        'description': 'What local LLMs can you run on RTX 3060 12GB or 6GB? See best models for coding, chat, and reasoning in 2026 with real VRAM limits and performance tips.',
        'url': 'https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm',
        'datePublished': '2026-04-05',
        'dateModified': '2026-06-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'budget GPU' },
          { '@type': 'Thing', 'name': 'RTX 3060' },
          { '@type': 'Thing', 'name': 'GPU VRAM' },
          { '@type': 'Thing', 'name': 'local LLM inference' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro'],
        },
        'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
        'inLanguage': 'en',
        'audience': { '@type': 'Audience', 'audienceType': 'Beginners running their first local LLM on consumer hardware' },
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
              'text': 'Yes. It\'s 4+ years old, but 12 GB VRAM is still current. Runs Qwen3 14B (Q4, ~9 GB), Qwen3 8B, Gemma 4 E12B, and gpt-oss:20b smoothly at Q4. It handles every 7B-8B model and most dense 13B-14B models.'
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
              'text': 'Yes. Ollama is lightweight. A 4-year-old RTX 3060 with Ollama will run Mistral Small at 10-15 tokens/sec -- totally usable for personal inference.'
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
              'text': 'RTX 4060 Ti (8 GB, ~$250) for 7B models, or RTX 4070 Super (12 GB, ~$350-400) for 13B models. For used: RTX 3060 12GB ($200–250) runs 7-13B models smoothly at Q4. Best value is RTX 3060 12GB used, or RTX 4070 Super new.'
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
      title: 'Mejor GPU económica para LLMs locales 2026: RTX 3060 12GB',
      seoTitle: 'Mejor GPU económica para LLMs locales 2026: RTX 3060',
      intro: '**RTX 3060 12GB ejecuta Qwen3 14B a 9–12 tok/seg, Qwen3 8B a 16–20 tok/seg, Gemma 4 E12B a 11–14 tok/seg, Mistral Small a 18 tok/seg y DeepSeek-R1 7B a 10–12 tok/seg — todo a cuantización Q4.** (DeepSeek ha lanzado desde entonces DeepSeek-V4 —Flash/Pro— como nueva generación de pesos abiertos; R1/V3 siguen siendo válidos para ejecutar en local.) La variante de 6GB está limitada solo a modelos de 3B. A junio de 2026, la RTX 3060 12GB ($200–250 usada) sigue siendo la mejor GPU económica para LLMs locales: 12GB de VRAM cabe con todos los modelos 7B-8B en Q4/Q5 y la mayoría de los densos 13B-14B en Q4. (Nota: Llama 4 Scout es un MoE de 17B activos/109B totales que necesita ~55 GB en Q4 — no cabe en 12 GB normalmente.) Esta guía cubre exactamente qué modelos funcionan en cada nivel de VRAM, con velocidades reales y configuraciones prácticas. Los precios pueden variar según tu país.',
      metaDescription: 'Mejor GPU económica para LLMs locales 2026: RTX 3060 12GB ($200–250 usada) ejecuta Qwen3 14B a 9–12 tok/s. Más barata: RX 6700 XT. Mejor VRAM/$: RTX A4000.',
      publishDate: '2026-04-05',
      dateModified: '2026-06-19',
      leadAnswerBlock: '**RTX 3060 12GB ejecuta Qwen3 14B a 9–12 tok/seg, Qwen3 8B a 16–20 tok/seg, Gemma 4 E12B a 11–14 tok/seg, Mistral Small a 18 tok/seg y DeepSeek-R1 7B a 10–12 tok/seg. La variante de 6GB solo maneja modelos de 3B. Mejor GPU económica para LLMs locales en 2026 a $200–250 usada. Los precios pueden variar según tu país.**',
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
            '**Mejor opción por presupuesto:** Menos de $200 — RX 6700 XT 12GB ($150–200, la más barata, fricción de configuración AMD) o RTX A4000 16GB si la encuentras por menos de $230 (mejor VRAM por dólar). ~$250 — RTX 3060 12GB (mejor en general). Menos de $500 — RTX 4070 Super 12GB (la más rápida, 25–30 tok/s).',
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
            { 'Modelo': 'Mistral Small v0.3', 'Tamaño': '7B', 'Cuantización': 'Q4_K_M', 'VRAM usada': '~7 GB', 'Velocidad': '18 tok/seg', 'Ideal para': 'Seguimiento de instrucciones' },
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
            '**Automatización del hogar / IA siempre activa:** `ollama run phi4-mini` — Phi-4 Mini (3,8B, ~3 GB VRAM) gestiona consultas de voz de Home Assistant en una mini PC sin GPU dedicada. Consulta [mejor hardware para IA en smart home →](/smart-home/best-hardware-for-local-smart-home).',
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
        'nextSteps': {
          id: 'next-steps',
          title: 'Próximos pasos',
          items: [
            '[Mejores GPU AMD para LLM local](/es/local-llms/best-amd-gpus-local-llm) — ¿Consideras AMD? Comparativa completa AMD vs NVIDIA →',
            '[Mejores modelos Ollama de código abierto](/es/local-llms/top-open-source-models-ollama) — Qué modelos rinden mejor en una GPU de bajo costo →',
            '[¿Cuánta VRAM necesito?](/es/local-llms/how-much-vram-local-llm) — Ajusta tu GPU al tamaño del modelo →',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Sigue valiendo la pena comprar una RTX 3060 12GB en 2026?', a: 'Sí. Tiene más de 4 años, pero 12GB de VRAM sigue siendo muy relevante. Ejecuta Qwen3 14B, Qwen3 8B, Gemma 4 E12B y Mistral Small sin problemas en Q4. Cabe con todos los modelos 7B-8B y la mayoría de los densos 13B-14B.' },
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
            '[Prompt Engineering para LLMs locales](/es/local-llms/prompt-engineering-for-local-models) — Optimiza prompts para modelos que se ejecutan en hardware económico.',
            '[Prompting Chain-of-Thought](/es/prompt-engineering/chain-of-thought-prompting) — Mejora significativamente la calidad de salida de DeepSeek-R1.',
            '[Mac Mini M5 como servidor de IA local](/es/local-llms/mac-mini-m5-local-ai-server) — Alternativa económica a las builds de GPU: IA siempre activa a $599 de hardware + $35/año de electricidad.',
            '[Apple Silicon M5 para LLMs locales](/es/local-llms/apple-silicon-m5-local-llm) — Guía completa de M5 Pro/Max: benchmarks, configuraciones de Mac, niveles de memoria y qué Mac comprar para inferencia local.',
            '[Apple Silicon vs GPU NVIDIA para LLMs locales](/es/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Comparación completa de costo y rendimiento: cuándo un Mac supera a una GPU económica.',
            '[Mejores modelos para Apple Silicon 2026](/es/local-llms/best-models-apple-silicon-2026) — Recomendaciones de modelos para niveles de memoria unificada de 16GB–128GB.',
            'Para precios de GPU en Japón, minoristas de Akihabara y opciones del mercado de segunda mano en Mercari y Yahoo Auctions, consulta nuestra <a href="/es/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">guía de las mejores GPUs para LLMs locales en Japón</a>.',
            'Para precios de GPU en los Emiratos Árabes Unidos y el Golfo, minoristas como Sharaf DG, noon.com y Amazon.ae, además del mercado de segunda mano en dubizzle, consulta nuestra <a href="/es/prompt-bites/best-gpu-local-llm-uae-price" class="text-primary hover:underline">guía de la GPU con mejor relación calidad-precio para LLMs locales en los EAU</a>.',
          ],
        },
        'sources': {
          title: 'Fuentes',
          items: [
            'Meta AI. (2025). "Llama 4 Model Card." — Arquitectura MoE de Scout, requisitos de VRAM',
            'Qwen Team. (2026). "Qwen3 Technical Report." — Especificaciones de Qwen3 8B',
            'Base de datos de GPUs TechPowerUp: especificaciones y consumo de energía de RTX 3060 / RTX 4060 Ti / RTX 4070 Super',
            'Matriz de capacidades CUDA de NVIDIA: ancho de banda de memoria de GPU y rendimiento teórico para cargas de trabajo de inferencia',
            'Requisitos de modelos de Ollama: recomendaciones de VRAM para niveles de cuantización de Llama 4 Scout, Qwen3 y Mistral Small',
            'El cumplimiento normativo requiere flujos de trabajo auditables. Establece estándares de gobernanza para la calidad y revisión de prompts de IA: [gobernanza de prompts en producción](https://www.promptquorum.com/es/prompt-engineering/prompt-governance-in-production) cubre políticas, control de versiones y procesos de aprobación.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Guía de LLMs locales con RTX 3060 2026: qué modelos puedes ejecutar',
        'description': '¿Qué LLMs locales puedes ejecutar en RTX 3060 12GB o 6GB? Consulta los mejores modelos para código, chat y razonamiento en 2026 con límites reales de VRAM y consejos de rendimiento.',
        'url': 'https://www.promptquorum.com/es/local-llms/best-budget-gpus-local-llm',
        'datePublished': '2026-04-05',
        'dateModified': '2026-06-01',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
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
        'proficiencyLevel': 'Beginner',
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
              'text': 'Sí. Tiene más de 4 años, pero 12GB de VRAM es atemporal para modelos de 7B-13B. Ejecuta Llama 3 8B y Mistral Small sin problemas. Ideal si encuentras una usada por menos de $250.'
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
              'text': 'Sí. Ollama es ligero. Una RTX 3060 de 4 años con Ollama ejecutará Mistral Small a 10-15 tokens/seg — completamente utilizable para inferencia personal.'
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
              'text': 'RTX 4060 Ti (8 GB, ~$250) para modelos 7B, o RTX 4070 Super (12 GB, ~$350-400) para modelos 13B. Usada: RTX 3060 12GB ($200–250) ejecuta modelos 7-13B sin problemas a Q4. El mejor valor es RTX 3060 12GB usada, o RTX 4070 Super nueva.'
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
    ar: {
      freshness_tier: 'monthly',
      theme: 'GPU Buying Guides',
      title: 'أفضل ⁨GPU⁩ اقتصادية لنماذج ⁨LLM⁩ المحلية ⁨2026⁩: ⁨RTX 3060 12GB⁩',
      seoTitle: 'أفضل ⁨GPU⁩ اقتصادية لنماذج ⁨LLM⁩ المحلية ⁨2026⁩: ⁨RTX 3060⁩',
      intro: '**تشغّل RTX 3060 12GB نموذج Qwen3 14B بسرعة 9–12 tok/ث، وQwen3 8B بسرعة 16–20 tok/ث، وGemma 4 E12B بسرعة 11–14 tok/ث، وMistral Small بسرعة 18 tok/ث، وDeepSeek-R1 7B بسرعة 10–12 tok/ث — كل ذلك بتكميم Q4.** (أصدرت DeepSeek منذ ذلك الحين DeepSeek-V4 — Flash/Pro — كجيل جديد بأوزان مفتوحة؛ يظل R1/V3 صالحًا للتشغيل محليًا.) النسخة بسعة 6GB محدودة بنماذج 3B فقط. اعتباراً من يونيو 2026، تبقى RTX 3060 12GB (200–250 دولار مستعملة) أفضل GPU اقتصادية لنماذج LLM المحلية: تتسع 12GB من VRAM لجميع نماذج 7B-8B بصيغة Q4/Q5 ومعظم النماذج الكثيفة 13B-14B بصيغة Q4. (ملاحظة: Llama 4 Scout هو MoE بـ 17B نشطة/109B إجمالاً يحتاج إلى ~55 GB بصيغة Q4 — لا يتسع في 12 GB عادةً.) يغطي هذا الدليل بالضبط أي النماذج تعمل عند كل مستوى VRAM، بسرعات حقيقية وإعدادات عملية. قد تختلف الأسعار حسب بلدك.',
      metaDescription: 'أفضل ⁨GPU⁩ اقتصادية لنماذج ⁨LLM⁩ المحلية ⁨2026⁩: ⁨RTX 3060 12GB⁩ (⁨200⁩–⁨250⁩$ مستعملة) تشغّل ⁨Qwen3 14B⁩ بـ ⁨9⁩–⁨12 tok⁩/ث. الأرخص: ⁨RX 6700 XT⁩. أفضل ⁨VRAM⁩ لكل دولار: ⁨RTX A4000⁩.',
      publishDate: '2026-04-05',
      dateModified: '2026-06-19',
      leadAnswerBlock: '**تشغّل RTX 3060 12GB نموذج Qwen3 14B بسرعة 9–12 tok/ث، وQwen3 8B بسرعة 16–20 tok/ث، وGemma 4 E12B بسرعة 11–14 tok/ث، وMistral Small بسرعة 18 tok/ث، وDeepSeek-R1 7B بسرعة 10–12 tok/ث. النسخة بسعة 6GB تتعامل مع نماذج 3B فقط. أفضل GPU اقتصادية لنماذج LLM المحلية في 2026 بسعر 200–250 دولار مستعملة. قد تختلف الأسعار حسب بلدك.**',
      nextStep: {
        text: 'هل لديك GPU بالفعل؟ الآن اختر البرنامج المناسب لتشغيل النماذج عليها.',
        label: 'أفضل واجهات LLM المحلية 2026 →',
        href: '/local-llms/best-local-llm-frontends',
      },
      audience: 'المبتدئون الذين يشغّلون أول نموذج LLM محلي لهم على عتاد استهلاكي',
      readTime: '7 دقائق للقراءة',
      educationalLevel: 'Beginner',
      primaryTerm: 'Budget GPU',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#tldr' },
        { label: 'ماذا يمكنك تشغيله على RTX 3060 12GB؟', anchor: '#rtx-3060-12gb' },
        { label: 'ماذا يمكنك تشغيله على RTX 3060 6GB؟', anchor: '#rtx-3060-6gb' },
        { label: 'RTX 3060 مقابل بطاقات GPU اقتصادية أخرى', anchor: '#which-budget-gpus' },
        { label: 'كم تحتاج من VRAM لنماذج 7B؟', anchor: '#vram-7b' },
        { label: 'أفضل النماذج حسب حالة الاستخدام على RTX 3060', anchor: '#best-by-use-case' },
        { label: 'مستعملة مقابل جديدة: من أين تشتري؟', anchor: '#used-vs-new' },
        { label: 'أخطاء شائعة مع بطاقات GPU الاقتصادية', anchor: '#mistakes' },
        { label: 'الأسئلة الشائعة', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**أفضل خيار حسب الميزانية:** أقل من 200$ — RX 6700 XT 12GB (150–200$، الأرخص، احتكاك إعداد AMD) أو RTX A4000 16GB إذا وجدتها بأقل من 230$ (أفضل VRAM لكل دولار). ~250$ — RTX 3060 12GB (الأفضل إجمالاً). أقل من 500$ — RTX 4070 Super 12GB (الأسرع، 25–30 tok/ث).',
            '**RTX 3060 12GB** (200–250 دولار مستعملة): تشغّل جميع نماذج 7B-8B بصيغة Q4/Q5 ومعظم النماذج الكثيفة 13B-14B بصيغة Q4. أفضل خيار اقتصادي.',
            '**RTX 3060 6GB**: محدودة بنماذج 3B (Phi-4 Mini، Llama 3.2 3B). غير كافية لـ 7B.',
            '**أفضل نموذج عام على 12GB:** Qwen3 14B بـ ~9 GB VRAM، 9–12 tok/ث. أفضل جودة كثيفة تتسع بأريحية.',
            '**أفضل نموذج برمجة على 12GB:** Qwen3 8B بسرعة 16–20 tok/ث.',
            '**أفضل نموذج استدلال على 12GB:** DeepSeek-R1 7B بسرعة 10–12 tok/ث. سلسلة تفكير.',
            '**تجاهلها إذا:** أردت نماذج 70B، أو Llama 4 Scout (يحتاج ~55 GB)، أو 13B بصيغة Q8 — تحتاج إلى 24GB+ (RTX 4090).',
          ],
        },
        'rtx-3060-12gb': {
          id: 'rtx-3060-12gb',
          title: 'ماذا يمكنك تشغيله على RTX 3060 12GB؟',
          content: [
            '**RTX 3060 12GB هي أفضل GPU اقتصادية لنماذج LLM المحلية في 2026.** تتسع 12GB من VRAM لجميع نماذج 7B بتكميم Q4/Q5، ومعظم نماذج 13B بصيغة Q4. للحصول على إرشاد تفصيلي حول متطلبات VRAM حسب حجم النموذج، راجع [دليل متطلبات VRAM →](/ar/local-llms/how-much-vram-local-llm). إليك النماذج بالضبط والسرعات التي يمكنك توقعها:',
          ],
          columns: ['النموذج', 'الحجم', 'التكميم', 'VRAM المستخدمة', 'السرعة', 'مثالي لـ'],
          rows: [
            { 'النموذج': 'Qwen3 14B', 'الحجم': '14B (كثيف)', 'التكميم': 'Q4_K_M', 'VRAM المستخدمة': '~9 GB', 'السرعة': '9–12 tok/ث', 'مثالي لـ': 'أفضل جودة عامة تتسع' },
            { 'النموذج': 'Qwen3 8B', 'الحجم': '8B', 'التكميم': 'Q4_K_M', 'VRAM المستخدمة': '~7 GB', 'السرعة': '16–20 tok/ث', 'مثالي لـ': 'البرمجة، الاستخدام العام' },
            { 'النموذج': 'Gemma 4 E12B', 'الحجم': '26B MoE', 'التكميم': 'Q4_K_M', 'VRAM المستخدمة': '~9 GB', 'السرعة': '11–14 tok/ث', 'مثالي لـ': 'الرؤية، متعدد الوسائط' },
            { 'النموذج': 'Mistral Small v0.3', 'الحجم': '7B', 'التكميم': 'Q4_K_M', 'VRAM المستخدمة': '~7 GB', 'السرعة': '18 tok/ث', 'مثالي لـ': 'اتباع التعليمات' },
            { 'النموذج': 'DeepSeek-R1 7B', 'الحجم': '7B', 'التكميم': 'Q4_K_M', 'VRAM المستخدمة': '~7 GB', 'السرعة': '10–12 tok/ث', 'مثالي لـ': 'الاستدلال، الرياضيات' },
            { 'النموذج': 'Gemma 4 E4B', 'الحجم': 'E4B (متعدد الوسائط)', 'التكميم': 'Q4_K_M', 'VRAM المستخدمة': '~5 GB', 'السرعة': '18–22 tok/ث', 'مثالي لـ': 'رؤية خفيفة، محادثة سريعة' },
            { 'النموذج': 'Llama 3.2 13B', 'الحجم': '13B', 'التكميم': 'Q4_K_M', 'VRAM المستخدمة': '~11 GB', 'السرعة': '8–10 tok/ث', 'مثالي لـ': 'محادثة بجودة أعلى (Q4 فقط، ضيق)' },
          ],
          note: 'Qwen3 14B (كثيف) هو النموذج الأعلى جودة الذي يتسع بأريحية في RTX 3060 12GB بصيغة Q4_K_M، مستخدماً ~9 GB. `ollama pull qwen3:14b`. ملاحظة: Llama 4 Scout (MoE بـ 17B نشطة / 109B إجمالاً، سياق 10M رمز، متعدد الوسائط) يحتاج ~55 GB بصيغة Q4 ولا يتسع في 12 GB عادةً — هو خيار سياق طويل / متعدد وسائط كبير للأجهزة ذات VRAM كبيرة، وليس توصية GPU اقتصادية. gpt-oss:20b (21B إجمالاً / 3.6B نشطة MoE) يحتاج 16 GB، لذا يبقى خارج نطاق بطاقة 12 GB بقليل. جميع السرعات مُقاسة بـ Ollama على RTX 3060 12GB، 16GB من RAM النظام، Ryzen 7 7700X. تكميم Q4_K_M. تختلف السرعات ±15% حسب طول الموجّه ونافذة السياق.',
        },
        'rtx-3060-6gb': {
          id: 'rtx-3060-6gb',
          title: 'ماذا يمكنك تشغيله على RTX 3060 6GB؟',
          content: [
            '**النسخة بسعة 6GB محدودة جداً.** نماذج 3B فقط تتسع بأريحية. تحتاج نماذج 7B بصيغة Q4 إلى ~7GB — أكثر من المتاح. يعمل التفريغ إلى CPU لكنه يقلل السرعة بنسبة 50–70%.',
          ],
          items: [
            '**Phi-4 Mini 3.8B (Q4):** ~3GB VRAM، 20–25 tok/ث. أفضل استدلال في هذا الحجم. قوي للرياضيات والمنطق.',
            '**Llama 3.2 3B (Q4):** ~2.5GB VRAM، 25–35 tok/ث. الخيار الأسرع. جيد للمحادثة البسيطة والأسئلة والأجوبة.',
            '**Gemma 2 2B (Q4):** ~1.7GB VRAM، 35–45 tok/ث. النموذج الأخف. جيد لاختبار الإعدادات.',
            '**7B مع التفريغ:** ممكن لكنه بطيء. Llama 7B مع تفريغ إلى CPU = ~5–8 tok/ث. صالح فقط للعمل الدفعي غير التفاعلي.',
            '**التوصية:** إذا كانت لديك بطاقة 6GB، رقِّ إلى 12GB مستعملة (200–250 دولار) قبل استثمار الوقت في حلول بديلة. التحسن في السرعة وجودة النموذج يستحق العناء.',
          ],
        },
        'which-budget-gpus': {
          id: 'which-budget-gpus',
          title: 'RTX 3060 مقابل بطاقات GPU اقتصادية أخرى',
          columns: ['GPU', 'VRAM', 'السعر (مستعملة)', 'سرعة 7B', 'النموذج الأقصى', 'الحكم'],
          rows: [
            { 'GPU': 'RTX 3060 12GB ★', 'VRAM': '12 GB', 'السعر (مستعملة)': '200–250 دولار', 'سرعة 7B': '15–20 tok/ث', 'النموذج الأقصى': '13B (Q4)', 'الحكم': 'أفضل نسبة جودة إلى سعر' },
            { 'GPU': 'RTX 4060 Ti 8GB', 'VRAM': '8 GB', 'السعر (مستعملة)': '250–300 دولار', 'سرعة 7B': '20–25 tok/ث', 'النموذج الأقصى': '7B (Q5 أقصى)', 'الحكم': 'أسرع لكن VRAM أقل' },
            { 'GPU': 'RTX A4000', 'VRAM': '16 GB', 'السعر (مستعملة)': '180–230 دولار', 'سرعة 7B': '12–15 tok/ث', 'النموذج الأقصى': '13B (Q5)', 'الحكم': 'أفضل VRAM لكل دولار' },
            { 'GPU': 'RTX 4070 Super', 'VRAM': '12 GB', 'السعر (مستعملة)': '400–450 دولار', 'سرعة 7B': '25–30 tok/ث', 'النموذج الأقصى': '13B (Q5)', 'الحكم': 'أسرع، لكن ضعف السعر' },
            { 'GPU': 'RX 6700 XT', 'VRAM': '12 GB', 'السعر (مستعملة)': '150–200 دولار', 'سرعة 7B': '10–14 tok/ث', 'النموذج الأقصى': '13B (Q4)', 'الحكم': 'الأرخص، احتكاك مع AMD' },
          ],
          note: 'تفوز RTX 3060 12GB في القيمة: 12GB من VRAM بسعر 200–250 دولار تشغّل جميع نماذج 7B ومعظم نماذج 13B. RTX A4000 خيار ثانٍ قريب إذا وجدت واحدة بأقل من 230 دولار. قد تختلف الأسعار حسب بلدك.',
        },
        'vram-7b': {
          title: 'كم تحتاج من VRAM لنماذج 7B؟',
          content: [
            '**تتطلب نماذج 7B المكمَّمة إلى Q4 (4 بت) 6-8GB من VRAM؛ وتتطلب Q5 (5 بت) 8-10GB؛ وتتطلب Q8 (8 بت) 14-16GB.**',
            'عملياً: **8GB هو الحد الأدنى المطلق** لاستدلال مريح على نماذج 7B بصيغة Q4 مع هامش للمعالجة الدفعية.',
            'تعمل بطاقات 6GB (RTX 2060) تقنياً لكنها تتطلب تحسيناً عنيفاً ولا تترك هامشاً لدفعات أكبر.',
            'إذا كان لديك أقل من 8 GB من VRAM، لا يزال بإمكانك تشغيل نماذج LLM المحلية بفعالية — **[راجع النماذج المحسّنة للعتاد بسعة 4–8 GB](/ar/local-llms/fastest-local-llms-low-end-pcs)**.',
            'تكلفة GPU جانب من الاقتصاد؛ والتكلفة لكل رمز هي الجانب الآخر. يلغي الاستدلال المحلي رسوم API لكل رمز، لكن طول الموجّه لا يزال يؤثر على زمن الاستجابة والإنتاجية. لرؤية الصورة الكاملة للتكاليف — الرموز ومستويات الأسعار واستراتيجيات التحسين — راجع [الرموز والتكاليف والحدود: اقتصاديات الموجّهات بالذكاء الاصطناعي](https://www.promptquorum.com/ar/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting).',
          ],
        },
        'best-by-use-case': {
          id: 'best-by-use-case',
          title: 'أفضل النماذج حسب حالة الاستخدام على RTX 3060',
          content: [
            '**اختر نموذجك بناءً على ما تحتاجه فعلاً، وليس على عدد المعاملات.** إليك أفضل الخيارات لكل حالة استخدام على RTX 3060 12GB:',
            'يشغّل العتاد الاقتصادي نماذج أصغر — لكن الموجّهات الجيدة تسد فجوة الجودة. يغطي [دليل هندسة الموجّهات](https://www.promptquorum.com/ar/prompt-engineering) تقنيات مثل سلسلة التفكير والمخرجات المنظمة التي تساعد النماذج الصغيرة على الأداء فوق حجمها. حمل عمل ملموس يلائم مستوى RTX 3060 12 GB هو المراجعة الآلية لطلبات السحب — راجع [مراجعة الكود بـ LLM محلي في CI/CD](/ar/power-local-llm/local-llm-code-review-ci-cd) لرؤية نمط GitHub Actions الذي يشغّل Qwen3 8B على طلبات السحب على هذا العتاد بالضبط.',
          ],
          items: [
            '**المحادثة / الأسئلة والأجوبة:** `ollama run qwen3:14b` — كثيف 14B، ~9 GB VRAM، أفضل جودة على 12 GB. لخيار أخف: `ollama run qwen3:8b` بـ ~7 GB.',
            '**البرمجة:** `ollama run qwen3:8b` — متين لبرمجة عامة الأغراض. ~7 GB VRAM. 16–20 tok/ث.',
            '**الاستدلال / الرياضيات:** `ollama run deepseek-r1:7b` — استدلال بسلسلة تفكير. 10–12 tok/ث. أبطأ لكن أدق بشكل ملحوظ في المسائل متعددة الخطوات.',
            '**الكتابة / الإبداع:** `ollama run mistral:7b` — أفضل اتباع للتعليمات. 18 tok/ث. مخرجات نظيفة ومنظمة. مثالي للمسودات وإعادة الصياغة.',
            '**الرؤية / الصور:** `ollama run gemma4:e12b` — متعدد الوسائط (يقبل الصور). 11–14 tok/ث. يستخدم ~9GB VRAM. لخيار أخف، `ollama run gemma4:e4b` بـ ~5 GB. يصف الصور ويقرأ لقطات الشاشة ويحلل المخططات.',
            '**الخصوصية / دون اتصال:** أي مما سبق. تعمل جميعها محلياً 100%. لا تغادر أي بيانات جهازك. لا يتطلب إنترنت بعد تنزيل النموذج.',
            '**أتمتة المنزل / ذكاء اصطناعي دائم التشغيل:** `ollama run phi4-mini` — يتعامل Phi-4 Mini (3.8B، ~3 GB VRAM) مع استعلامات Home Assistant الصوتية على حاسوب مصغر دون GPU مخصصة. راجع [أفضل عتاد للذكاء الاصطناعي في المنزل الذكي →](/smart-home/best-hardware-for-local-smart-home).',
          ],
        },
        'used-vs-new': {
          title: 'مستعملة مقابل جديدة: من أين تشتري؟',
          items: [
            '**مستعملة (أرخص بـ 50-100 دولار)**: eBay، Facebook Marketplace، Craigslist، متاجر إصلاح الحواسيب المحلية. خطر أعلى لبطاقات معيبة أو VRAM تالفة. اختبر دائماً قبل الالتزام.',
            '**جديدة (280-400 دولار)**: Newegg، Amazon، Best Buy، Microcenter. ضمان مشمول. دون مفاجآت. أسعار مستقرة. مثالية للمشترين الذين يفضّلون تجنب المخاطر.',
            '**بطاقات التعدين (تشفير، رخيصة جداً)**: خطر شديد. تدهور VRAM شائع. اشترِ فقط إذا كان بإمكانك إجراء اختبارات ضغط كاملة في الموقع.',
          ],
        },
        'mistakes': {
          title: 'أخطاء شائعة مع بطاقات GPU الاقتصادية',
          items: [
            'شراء RTX 2060 بسعة 4GB توقعاً لاستدلال سلس لـ 7B — ستحصل على أخطاء ذاكرة باستمرار.',
            'دمج GPU بـ 250 دولاراً مع مصدر طاقة بـ 30 دولاراً — يفسد انخفاض الجهد الاستقرار. خصّص 650W على الأقل بشهادة 80+ Gold.',
            'افتراض أن ذاكرة DDR5 ومعالج i9 يسرّعان استدلال LLM — لا يفعلان ذلك. عرض نطاق VRAM في GPU هو الاختناق الوحيد المهم لسرعة الاستدلال.',
            'افتراض أن Llama 4 Scout يتسع في 12 GB. Scout هو MoE بـ 17B نشطة / 109B إجمالاً يحتاج ~55 GB بصيغة Q4 (يدخل فقط في 24 GB بتكميم متطرف 1.78 بت، ~20 tok/ث). على RTX 3060 بسعة 12 GB، شغّل نماذج كثيفة بدلاً من ذلك: Qwen3 14B (~9 GB)، Qwen3 8B أو Gemma 4 E12B.',
            'شراء بطاقة 16 GB فقط لنماذج 13B. تشغّل RTX 3060 بسعة 12 GB بالفعل Qwen3 14B بصيغة Q4. انتقل إلى 16 GB فقط إذا كنت تحتاج تحديداً gpt-oss:20b (16 GB)، أو نماذج كثيفة 20B+ أو هامش سياق أكبر.',
          ],
        },
        'nextSteps': {
          id: 'next-steps',
          title: 'الخطوات التالية',
          items: [
            '[أفضل وحدات GPU من AMD لنماذج LLM المحلية](/ar/local-llms/best-amd-gpus-local-llm) — تفكر في AMD؟ مقارنة شاملة AMD مقابل NVIDIA →',
            '[أفضل نماذج Ollama مفتوحة المصدر](/ar/local-llms/top-open-source-models-ollama) — أي النماذج يعمل بشكل أفضل على GPU اقتصادية →',
            '[كم سعة VRAM أحتاج؟](/ar/local-llms/how-much-vram-local-llm) — طابق حجم GPU مع حجم النموذج →',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            { q: 'هل لا يزال شراء RTX 3060 12GB يستحق العناء في 2026؟', a: 'نعم. عمرها أكثر من 4 سنوات، لكن 12GB من VRAM لا تزال وثيقة الصلة جداً. تشغّل Qwen3 14B وQwen3 8B وGemma 4 E12B وMistral Small دون مشاكل بصيغة Q4. تتسع لجميع نماذج 7B-8B ومعظم النماذج الكثيفة 13B-14B.' },
            { q: 'هل يجب أن أشتري RTX 5060 Ti أم RTX 4060 Ti لنماذج LLM المحلية؟', a: 'RTX 5060 Ti. يوفر الجيل الأحدث (2026) أداءً أفضل بنسبة 10-15%. إذا كانت ميزانيتك محدودة، تبقى RTX 4060 Ti متينة. تجنّب الأساس 4060/5060 (8GB) و4070 (12GB) — نسبة جودة إلى سعر سيئة.' },
            { q: 'هل يمكنني استخدام AMD RX 7900 XT أو RX 7900 XTX بدلاً من ذلك؟', a: 'نعم، لكن دعم برامج تشغيل AMD أضعف من NVIDIA + CUDA. يتطلب إعداد HIP/ROCm جهداً أكبر. RTX أكثر أماناً للمبتدئين.' },
            { q: 'هل 12GB من VRAM كافية لنماذج 13B؟', a: 'بالكاد، بتكميم Q4. ستسبب Q5 أو Q8 أخطاء OOM. إذا أردت 13B مريحاً، استهدف 16GB.' },
            { q: 'هل يجب أن أشتري GPU مؤسسية مستعملة مثل RTX A4000؟', a: 'نعم، إن توفرت. 16GB من VRAM، تبريد بجودة احترافية، عادةً بسعر 180-230 دولاراً مستعملة. أبطأ قليلاً من RTX 3060، لكن هامش VRAM الإضافي يستحق ذلك.' },
            { q: 'كم واط من مصدر الطاقة يجب أن أشتري مع GPU بـ 250 دولاراً؟', a: '650W كحد أدنى، بشهادة 80+ Gold. لا تتجاوز GPU بـ 250 دولاراً + CPU + اللوحة الأم 400W من الاستهلاك، لكنك تريد هامشاً للذروات.' },
            { q: 'هل يمكنني تشغيل Ollama على GPU اقتصادية بـ 200 دولار؟', a: 'نعم. Ollama خفيف. ستشغّل RTX 3060 عمرها 4 سنوات مع Ollama نموذج Qwen3 14B بسرعة 9-12 tok/ث أو Qwen3 8B بسرعة 16-20 tok/ث — صالح تماماً للمحادثة التفاعلية ومساعدة الكود.' },
            { q: 'هل يمكنني تشغيل Llama 4 Scout على RTX 3060 12GB؟', a: 'عادةً لا. Llama 4 Scout هو MoE بـ 17B نشطة / 109B إجمالاً يحتاج ~55 GB من VRAM بصيغة Q4 — أعلى بكثير من بطاقة 12 GB. يدخل فقط في 24 GB بتكميم متطرف 1.78 بت (~20 tok/ث). على RTX 3060 12GB، شغّل نماذج كثيفة بدلاً من ذلك: `ollama pull qwen3:14b` (أفضل جودة تتسع)، Qwen3 8B أو Gemma 4 E12B. Scout خيار سياق طويل (10M رمز) / متعدد وسائط كبير للأجهزة ذات 48 GB+.' },
          ],
        },
        'relatedReading': {
          title: 'قراءة ذات صلة',
          items: [
            '[أجهزة AMD Ryzen AI Max+ المصغرة (2026)](/ar/local-llms/best-amd-mini-pc-local-llm-2026) — بديل لبطاقات GPU المنفصلة: iGPU + NPU بقدرة 50 TOPS بسعر 1,200–2,500 دولار.',
            '[كم VRAM لنماذج LLM المحلية؟](/ar/local-llms/how-much-vram-local-llm)',
            '[RTX 5090 مقابل RTX 4090](/ar/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[بطاقات GPU مستعملة لنماذج LLM المحلية](/ar/local-llms/used-gpus-for-local-llms)',
            '[أفضل بطاقات GPU لنماذج LLM المحلية](/ar/local-llms/best-gpus-for-local-llms)',
            '[حاسبة VRAM](/ar/local-llms/vram-calculator-local-llm)',
            '[لابتوب مقابل حاسوب مكتبي لنماذج LLM المحلية](/ar/local-llms/laptop-vs-desktop-local-llm) — مقارنة منصات كاملة: GPU مكتبية مقابل MacBook لنماذج LLM المحلية.',
            '[هندسة الموجّهات لنماذج LLM المحلية](/ar/local-llms/prompt-engineering-for-local-models) — حسّن الموجّهات للنماذج التي تعمل على عتاد اقتصادي.',
            '[الموجّهات بسلسلة التفكير](/ar/prompt-engineering/chain-of-thought-prompting) — تحسّن بشكل ملحوظ جودة مخرجات DeepSeek-R1.',
            '[Mac Mini M5 كخادم ذكاء اصطناعي محلي](/ar/local-llms/mac-mini-m5-local-ai-server) — بديل اقتصادي لتجميعات GPU: ذكاء اصطناعي دائم التشغيل بعتاد 599 دولاراً + 35 دولاراً سنوياً للكهرباء.',
            '[Apple Silicon M5 لنماذج LLM المحلية](/ar/local-llms/apple-silicon-m5-local-llm) — دليل كامل لـ M5 Pro/Max: اختبارات الأداء وإعدادات Mac ومستويات الذاكرة وأي Mac تشتري للاستدلال المحلي.',
            '[Apple Silicon مقابل GPU من NVIDIA لنماذج LLM المحلية](/ar/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — مقارنة تكلفة وأداء كاملة: متى يتفوق Mac على GPU اقتصادية.',
            '[أفضل النماذج لـ Apple Silicon 2026](/ar/local-llms/best-models-apple-silicon-2026) — توصيات نماذج لمستويات الذاكرة الموحدة من 16GB–128GB.',
            'لأسعار GPU في اليابان وتجار Akihabara وخيارات السوق المستعملة على Mercari وYahoo Auctions، راجع <a href="/ar/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">دليلنا لأفضل بطاقات GPU لنماذج LLM المحلية في اليابان</a>.',
            'لأسعار GPU في الإمارات ومنطقة الخليج، بما في ذلك متاجر Sharaf DG وnoon.com وAmazon.ae وسوق dubizzle للمستعمل، راجع <a href="/ar/prompt-bites/best-gpu-local-llm-uae-price" class="text-primary hover:underline">دليلنا لأفضل بطاقة GPU من حيث القيمة للنماذج اللغوية المحلية في الإمارات</a>.',
          ],
        },
        'sources': {
          title: 'المصادر',
          items: [
            'Meta AI. (2025). "Llama 4 Model Card." — بنية MoE لـ Scout، متطلبات VRAM',
            'Qwen Team. (2026). "Qwen3 Technical Report." — مواصفات Qwen3 8B',
            'قاعدة بيانات GPU من TechPowerUp: مواصفات واستهلاك طاقة RTX 3060 / RTX 4060 Ti / RTX 4070 Super',
            'مصفوفة قدرات CUDA من NVIDIA: عرض نطاق ذاكرة GPU والإنتاجية النظرية لأحمال عمل الاستدلال',
            'متطلبات نماذج Ollama: توصيات VRAM لمستويات تكميم Llama 4 Scout وQwen3 وMistral Small',
            'يتطلب الامتثال التنظيمي سير عمل قابلاً للتدقيق. ضع معايير حوكمة لجودة ومراجعة موجّهات الذكاء الاصطناعي: تغطي [حوكمة الموجّهات في الإنتاج](https://www.promptquorum.com/ar/prompt-engineering/prompt-governance-in-production) السياسات والتحكم بالإصدارات وعمليات الموافقة.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'دليل نماذج LLM المحلية مع RTX 3060 2026: أي النماذج يمكنك تشغيلها',
        'description': 'أي نماذج LLM محلية يمكنك تشغيلها على RTX 3060 12GB أو 6GB؟ راجع أفضل النماذج للبرمجة والمحادثة والاستدلال في 2026 بحدود VRAM حقيقية ونصائح للأداء.',
        'url': 'https://www.promptquorum.com/ar/local-llms/best-budget-gpus-local-llm',
        'datePublished': '2026-04-05',
        'dateModified': '2026-06-01',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'GPU اقتصادية' },
          { '@type': 'Thing', 'name': 'RTX 3060' },
          { '@type': 'Thing', 'name': 'VRAM في GPU' },
          { '@type': 'Thing', 'name': 'استدلال LLM المحلي' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'هل لا يزال شراء RTX 3060 12GB يستحق العناء في 2026؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم. عمرها أكثر من 4 سنوات، لكن 12GB من VRAM خالدة لنماذج 7B-13B. تشغّل Llama 3 8B وMistral Small دون مشاكل. مثالية إذا وجدت واحدة مستعملة بأقل من 250 دولاراً.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يجب أن أشتري RTX 4060 أم RTX 4060 Ti لنماذج LLM المحلية؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 4060 Ti. توفر RTX 4060 الأساسية (8GB) وRTX 4070 (12GB) نسبة جودة إلى سعر سيئة للعمل مع نماذج LLM. الـ Ti هي أفضل بطاقة في سلسلة RTX 40 من حيث السعر للاستدلال المحلي.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني استخدام AMD RX 6700 أو 6800 XT بدلاً من NVIDIA لنماذج LLM المحلية؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم، لكن دعم برامج تشغيل AMD لـ ONNX Runtime أضعف من NVIDIA CUDA. توقع احتكاكاً أكبر في الإعداد. NVIDIA أكثر أماناً للتجميعات الاقتصادية.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل 12GB من VRAM كافية لنماذج 13B؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'بالكاد، بتكميم Q4. ستسبب Q5 أو Q8 أخطاء OOM. إذا أردت 13B مريحاً، استهدف 16GB من VRAM.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يجب أن أشتري GPU مؤسسية مستعملة مثل RTX A4000؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم، إن توفرت. 16GB من VRAM، تبريد بجودة احترافية، عادةً بسعر 180-230 دولاراً مستعملة. أبطأ قليلاً من RTX 3060 في الاختبارات، لكن هامش VRAM الإضافي يستحق ذلك.'
            }
          },
          {
            '@type': 'Question',
            'name': 'كم واط من مصدر الطاقة يجب أن أشتري مع GPU بـ 250 دولاراً؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '650W كحد أدنى، بشهادة 80+ Gold. لا تتجاوز GPU بـ 250 دولاراً + CPU + اللوحة الأم 400W من الاستهلاك، لكن الهامش يمنع مشاكل الاستقرار الناتجة عن الذروات.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني تشغيل Ollama على GPU اقتصادية بـ 200 دولار؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم. Ollama خفيف. ستشغّل RTX 3060 عمرها 4 سنوات مع Ollama نموذج Mistral Small بسرعة 10-15 رمزاً/ث — صالح تماماً للاستدلال الشخصي.'
            }
          },
          {
            '@type': 'Question',
            'name': 'ما أفضل GPU اقتصادية بأقل من 200 دولار؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 2080 مستعملة (8GB، ~150 دولاراً) أو RTX A2000 (12GB، ~180-200 دولار). تشغّل كلتاهما نماذج 7B بصيغة Q4. يُفضَّل A2000 لهامش 12GB من VRAM.'
            }
          },
          {
            '@type': 'Question',
            'name': 'كيف أختبر GPU مستعملة بحثاً عن عيوب VRAM قبل الشراء؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'شغّل اختبارات ضغط VRAM: gpu-burn (Linux)، اختبار ضغط ذاكرة HWiNFO64 (Windows)، أو حمّل نموذجاً كبيراً في Ollama وراقب أخطاء OOM. اختبر قبل إعادة البطاقة.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني ترقية GPU لتشغيل نماذج أكبر لاحقاً؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم، ترقيات GPU سهلة في الحواسيب المكتبية. ابدأ بـ RTX 3060 12GB ثم رقِّ إلى RTX 4090 أو 5090 لاحقاً. منفذ PCIe متوافق رجعياً بين الأجيال.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني تشغيل Llama 4 Scout على RTX 3060 12GB؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'عادةً لا. Llama 4 Scout هو MoE بـ 17B نشطة / 109B إجمالاً يحتاج ~55 GB من VRAM بصيغة Q4 — أعلى بكثير من بطاقة 12 GB. يدخل فقط في 24 GB بتكميم متطرف 1.78 بت (~20 tok/ث). على RTX 3060 12GB، شغّل نماذج كثيفة بدلاً من ذلك: qwen3:14b (أفضل جودة تتسع)، Qwen3 8B أو Gemma 4 E12B. Scout خيار سياق طويل (10M رمز) / متعدد وسائط كبير للأجهزة ذات 48 GB+.'
            }
          },
          {
            '@type': 'Question',
            'name': 'ما أفضل GPU من NVIDIA اقتصادية لاستدلال LLM المحلي؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 4060 Ti (8 GB، ~250 دولاراً) لنماذج 7B، أو RTX 4070 Super (12 GB، ~350-400 دولار) لنماذج 13B. مستعملة: RTX 3060 12GB (200–250 دولار) تشغّل نماذج 7-13B دون مشاكل بصيغة Q4. أفضل قيمة هي RTX 3060 12GB مستعملة، أو RTX 4070 Super جديدة.'
            }
          },
          {
            '@type': 'Question',
            'name': 'كيف تقارَن AMD 6800XT بـ RTX 4070 لاستدلال الذكاء الاصطناعي؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'تتفوق AMD RX 6800 XT (16 GB) على RTX 4070 (12 GB) في VRAM وأداء الألعاب، لكنها أبطأ في استدلال LLM (أقل بـ 15-20%). إعداد برنامج تشغيل ROCm لـ llama.cpp أكثر تعقيداً من CUDA أيضاً. للعمل الخالص مع LLM، RTX 4070 أسهل؛ للألعاب + LLM، توفر 6800 XT قيمة أفضل.'
            }
          },
          {
            '@type': 'Question',
            'name': 'ما GPU بأفضل سعر لكل GB من VRAM لنماذج LLM المحلية في 2026؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 3090 مستعملة (24 GB، ~450-500 دولار) = 18-20 دولاراً لكل GB. RTX 3060 مستعملة (12 GB، ~150-180 دولاراً) = 12-15 دولاراً لكل GB. RTX 4070 Ti (12 GB، ~600 دولاراً جديدة) = 50 دولاراً لكل GB. أفضل قيمة: RTX 3060 12GB مستعملة. أعلى سعة لكل دولار: RTX 3090 24GB مستعملة. توازن السعر + الأداء: RTX 4070 جديدة.'
            }
          },
        ]
      },
    },
    pt: {
      freshness_tier: 'monthly',
      theme: 'GPU Buying Guides',
      title: 'Melhor GPU econômica para LLMs locais 2026: RTX 3060 12 GB',
      seoTitle: 'Melhor GPU econômica para LLMs locais 2026: RTX 3060',
      intro: '**RTX 3060 12 GB roda Qwen3 14B a 9-12 tok/s, Qwen3 8B a 16-20 tok/s, Gemma 4 E12B a 11-14 tok/s, Mistral Small a 18 tok/s e DeepSeek-R1 7B a 10-12 tok/s -- tudo em quantização Q4.** (Desde então, a DeepSeek lançou o DeepSeek-V4 — Flash/Pro — como nova geração de pesos abertos; R1/V3 continuam válidos para uso local.) A variante de 6 GB está limitada apenas a modelos de 3B. Em junho de 2026, a RTX 3060 12 GB (US$ 200-250 usada) continua sendo a melhor GPU econômica para LLMs locais.',
      metaDescription: 'Melhor GPU econômica para LLMs locais 2026: RTX 3060 12 GB (US$ 200–250 usada) roda Qwen3 14B a 9–12 tok/s. Mais barata: RX 6700 XT. Melhor VRAM/$: RTX A4000.',
      publishDate: '2026-04-05',
      dateModified: '2026-06-19',
      leadAnswerBlock: '**RTX 3060 12 GB roda Qwen3 14B a 9-12 tok/s, Qwen3 8B a 16-20 tok/s, Mistral Small a 18 tok/s e DeepSeek-R1 7B a 10-12 tok/s. A melhor GPU econômica para LLMs locais em 2026 a US$ 200-250 usada.**',
      audience: 'Iniciantes rodando seu primeiro LLM local em hardware de consumo',
      readTime: '7 min de leitura',
      educationalLevel: 'Beginner',
      primaryTerm: 'Budget GPU',
      toc: [
        { label: 'Pontos-chave', anchor: '#tldr' },
        { label: 'O que você pode rodar na RTX 3060 12 GB?', anchor: '#rtx-3060-12gb' },
        { label: 'O que você pode rodar na RTX 3060 6 GB?', anchor: '#rtx-3060-6gb' },
        { label: 'RTX 3060 vs outras GPUs econômicas', anchor: '#which-budget-gpus' },
        { label: 'Quanta VRAM você precisa para modelos 7B?', anchor: '#vram-7b' },
        { label: 'Melhores modelos por caso de uso na RTX 3060', anchor: '#best-by-use-case' },
        { label: 'Usada vs. nova: onde comprar?', anchor: '#used-vs-new' },
        { label: 'Erros comuns com GPUs econômicas', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Melhor opção por orçamento:** Menos de US$ 200 — RX 6700 XT 12GB (US$ 150–200, a mais barata, atrito de configuração AMD) ou RTX A4000 16GB se a encontrar abaixo de US$ 230 (melhor VRAM por dólar). ~US$ 250 — RTX 3060 12 GB (melhor no geral). Menos de US$ 500 — RTX 4070 Super 12GB (a mais rápida, 25–30 tok/s).',
            '**RTX 3060 12 GB** (US$ 200-250 usada): Roda todos os modelos 7B-8B em Q4/Q5 e a maioria dos densos 13B-14B em Q4. Melhor opção econômica.',
            '**RTX 3060 6 GB**: Limitada a modelos 3B (Phi-4 Mini, Llama 3.2 3B). Insuficiente para 7B.',
            '**Melhor modelo geral em 12 GB:** Qwen3 14B a ~9 GB VRAM, 9-12 tok/s. Melhor qualidade densa que cabe confortavelmente.',
            '**Melhor modelo de código em 12 GB:** Qwen3 8B a 16-20 tok/s.',
            '**Melhor modelo de raciocínio em 12 GB:** DeepSeek-R1 7B a 10-12 tok/s. Chain-of-thought.',
            '**Descarte se:** você quiser modelos de 70B ou 13B em Q8 -- você precisa de 24 GB+ (RTX 4090).',
            '**Automação residencial / IA always-on:** `ollama run phi4-mini` — Phi-4 Mini (3,8B, ~3 GB VRAM) lida com consultas de voz do Home Assistant em um mini PC sem GPU dedicada. Veja o [melhor hardware para IA em smart home →](/smart-home/best-hardware-for-local-smart-home).',
          ],
        },
        'rtx-3060-12gb': {
          id: 'rtx-3060-12gb',
          title: 'O que você pode rodar na RTX 3060 12 GB?',
          content: [
            '**A RTX 3060 12 GB é a melhor GPU econômica para LLMs locais em 2026.** 12 GB de VRAM cabem todos os modelos 7B em quantização Q4/Q5, e a maioria dos 13B em Q4.',
          ],
          columns: ['Modelo', 'Tamanho', 'Quantização', 'VRAM usada', 'Velocidade', 'Ideal para'],
          rows: [
            { 'Modelo': 'Qwen3 14B', 'Tamanho': '14B (denso)', 'Quantização': 'Q4_K_M', 'VRAM usada': '~9 GB', 'Velocidade': '9-12 tok/s', 'Ideal para': 'Melhor qualidade geral que cabe' },
            { 'Modelo': 'Qwen3 8B', 'Tamanho': '8B', 'Quantização': 'Q4_K_M', 'VRAM usada': '~7 GB', 'Velocidade': '16-20 tok/s', 'Ideal para': 'Código, uso geral' },
            { 'Modelo': 'Mistral Small v0.3', 'Tamanho': '7B', 'Quantização': 'Q4_K_M', 'VRAM usada': '~7 GB', 'Velocidade': '18 tok/s', 'Ideal para': 'Seguimento de instruções' },
            { 'Modelo': 'DeepSeek-R1 7B', 'Tamanho': '7B', 'Quantização': 'Q4_K_M', 'VRAM usada': '~7 GB', 'Velocidade': '10-12 tok/s', 'Ideal para': 'Raciocínio, matemática' },
          ],
          note: 'Qwen3 14B (denso) é o modelo de maior qualidade que cabe confortavelmente numa RTX 3060 12 GB em Q4_K_M, usando ~9 GB. `ollama pull qwen3:14b`.',
        },
        'rtx-3060-6gb': {
          id: 'rtx-3060-6gb',
          title: 'O que você pode rodar na RTX 3060 6 GB?',
          content: [
            '**A variante de 6 GB está muito limitada.** Apenas modelos de 3B cabem confortavelmente. Modelos 7B em Q4 precisam de ~7 GB -- mais do que disponível.',
          ],
          items: [
            '**Phi-4 Mini 3.8B (Q4):** ~3 GB VRAM, 20-25 tok/s. Melhor raciocínio neste tamanho.',
            '**Llama 3.2 3B (Q4):** ~2,5 GB VRAM, 25-35 tok/s. Opção mais rápida.',
            '**Gemma 2 2B (Q4):** ~1,7 GB VRAM, 35-45 tok/s. Modelo mais leve.',
            '**Recomendação:** Se você tem uma placa de 6 GB, atualize para 12 GB usada (US$ 200-250) antes de investir tempo em soluções alternativas.',
          ],
        },
        'which-budget-gpus': {
          id: 'which-budget-gpus',
          title: 'RTX 3060 vs outras GPUs econômicas',
          columns: ['GPU', 'VRAM', 'Preço (usada)', 'Velocidade 7B', 'Modelo máx.', 'Veredicto'],
          rows: [
            { 'GPU': 'RTX 3060 12 GB ★', 'VRAM': '12 GB', 'Preço (usada)': 'US$ 200-250', 'Velocidade 7B': '15-20 tok/s', 'Modelo máx.': '13B (Q4)', 'Veredicto': 'Melhor custo-benefício' },
            { 'GPU': 'RTX 3060 6 GB', 'VRAM': '6 GB', 'Preço (usada)': 'US$ 150-180', 'Velocidade 7B': 'Offloading lento', 'Modelo máx.': '3B (Q4)', 'Veredicto': 'Muito limitada para LLMs' },
            { 'GPU': 'RTX 3090 24 GB', 'VRAM': '24 GB', 'Preço (usada)': 'US$ 450-500', 'Velocidade 7B': '35-50 tok/s', 'Modelo máx.': '34B (Q4)', 'Veredicto': 'Melhor valor para 24 GB' },
            { 'GPU': 'RTX 4070 12 GB', 'VRAM': '12 GB', 'Preço (nova)': 'US$ 550-600', 'Velocidade 7B': '25-30 tok/s', 'Modelo máx.': '13B (Q4)', 'Veredicto': 'Mais rápida mas 2× mais cara' },
          ],
        },
        'nextSteps': {
          id: 'next-steps',
          title: 'Próximos passos',
          items: [
            '[Melhores GPUs AMD para LLMs locais](/pt/local-llms/best-amd-gpus-local-llm) — Considera AMD? Comparação completa AMD vs NVIDIA →',
            '[Melhores modelos Ollama open source](/pt/local-llms/top-open-source-models-ollama) — Quais modelos rodam melhor em GPU econômica →',
            '[Quanta VRAM preciso?](/pt/local-llms/how-much-vram-local-llm) — Encontre o equilíbrio entre GPU e tamanho do modelo →',
            '[Melhor GPU custo-benefício nos Emirados Árabes Unidos](/pt/prompt-bites/best-gpu-local-llm-uae-price) — preços reais em AED de varejistas como Sharaf DG, noon.com e Amazon.ae →',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'A RTX 3060 12 GB é boa para LLMs locais em 2026?', a: 'Sim. É a melhor GPU econômica para LLMs locais em 2026. 12 GB de VRAM cabem todos os modelos 7B-8B e a maioria dos 13B-14B em Q4. A US$ 200-250 usada, oferece o melhor custo-benefício da categoria.' },
            { q: 'A RTX 3060 12 GB funciona para português?', a: 'Sim. A GPU apenas executa o modelo -- a qualidade do idioma depende do modelo escolhido. Qwen3 8B ou Qwen3 14B (ambos com excelente suporte em português) rodam bem na RTX 3060 12 GB.' },
            { q: 'Onde comprar uma RTX 3060 12 GB usada no Brasil?', a: 'Mercado Livre, OLX e grupos de Facebook são as melhores fontes para GPUs usadas no Brasil. Espere pagar R$ 900-1.200 por uma RTX 3060 12 GB usada em bom estado. Verifique a procedência e teste antes de comprar.' },
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'RTX 3060 12 GB: melhor GPU econômica para LLMs locais 2026',
        'description': 'RTX 3060 12 GB: Qwen3 8B (16-20 tok/s), Qwen3 14B (9-12 tok/s). Tabela completa com benchmarks de VRAM e velocidade.',
        'url': 'https://www.promptquorum.com/pt/local-llms/best-budget-gpus-local-llm',
        'inLanguage': 'pt-BR',
        'datePublished': '2026-04-05',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      },
    },
    de: {
      freshness_tier: 'monthly',
      next_seo_review_due: '2026-07-01',
      next_refresh_due: '2026-06-30',
      last_full_refresh: '2026-06-01',
      current_models_mentioned: ['Qwen3 8B', 'Qwen3 14B', 'Gemma 4 E12B', 'Gemma 4 E4B', 'Mistral Small', 'DeepSeek-R1 7B', 'gpt-oss:20b'],
      theme: 'GPU Buying Guides',
      title: 'Beste Budget-GPU für lokale LLMs 2026: RTX 3060 12GB & Alternativen',
      seoTitle: 'Beste Budget-GPU für lokale LLMs 2026: RTX 3060 12GB',
      intro: '**Die RTX 3060 12GB betreibt Qwen3 14B mit 9–12 Tok/Sek, Qwen3 8B mit 16–20 Tok/Sek, Gemma 4 E12B mit 11–14 Tok/Sek, Mistral Small mit 18 Tok/Sek und DeepSeek-R1 7B mit 10–12 Tok/Sek — alles bei Q4-Quantisierung.** (DeepSeek hat inzwischen DeepSeek-V4 — Flash/Pro — als neuere offene Generation veröffentlicht; R1/V3 bleiben weiterhin lokal nutzbar.) Die 6-GB-Variante ist auf reine 3B-Modelle beschränkt. Stand Juni 2026 bleibt die RTX 3060 12GB (200–250 € gebraucht) die beste Budget-GPU für lokale LLMs: 12 GB VRAM fassen jedes 7B-8B-Modell bei Q4/Q5 und die meisten dichten 13B-14B-Modelle bei Q4. (Hinweis: Llama 4 Scout ist ein MoE mit 17B aktiven / 109B Gesamt-Parametern, das bei Q4 ca. 55 GB benötigt — es passt normalerweise nicht in 12 GB.) Dieser Leitfaden zeigt genau, welche Modelle auf welcher VRAM-Stufe laufen, mit echten Geschwindigkeiten und praxistauglichen Setups.',
      metaDescription: 'Beste Budget-GPU für lokale LLMs 2026: RTX 3060 12GB (200–250 € gebraucht) betreibt Qwen3 14B mit 9–12 Tok/s. Günstiger: RX 6700 XT. Bestes VRAM/€: RTX A4000. Komplette Speed-Tabelle.',
      publishDate: '2026-04-05',
      dateModified: '2026-06-19',
      leadAnswerBlock: '**Die RTX 3060 12GB betreibt Qwen3 14B mit 9–12 Tok/Sek, Qwen3 8B mit 16–20 Tok/Sek, Gemma 4 E12B mit 11–14 Tok/Sek, Mistral Small mit 18 Tok/Sek und DeepSeek-R1 7B mit 10–12 Tok/Sek. Die 6-GB-Variante schafft nur 3B-Modelle. Beste Budget-GPU für lokale LLMs 2026 für 200–250 € gebraucht.**',
      nextStep: { text: 'GPU besorgt? Wählen Sie jetzt die passende Software, um Modelle darauf auszuführen.', label: 'Beste lokale LLM-Frontends 2026 →', href: '/de/local-llms/best-local-llm-frontends' },
      audience: 'Einsteiger, die ihr erstes lokales LLM auf Consumer-Hardware betreiben',
      readTime: '7 Min. Lesezeit',
      educationalLevel: 'Beginner',
      primaryTerm: 'Budget-GPU',
      toc: [
        { label: 'Zusammenfassung', anchor: '#tldr' },
        { label: 'Was läuft auf der RTX 3060 12GB?', anchor: '#rtx-3060-12gb' },
        { label: 'Was läuft auf der RTX 3060 6GB?', anchor: '#rtx-3060-6gb' },
        { label: 'RTX 3060 vs. andere Budget-GPUs', anchor: '#which-budget-gpus' },
        { label: 'Wie viel VRAM brauchen Sie für 7B-Modelle?', anchor: '#vram-7b' },
        { label: 'Beste Modelle nach Anwendungsfall auf der RTX 3060', anchor: '#best-by-use-case' },
        { label: 'Gebraucht vs. neu: Wo sollten Sie kaufen?', anchor: '#used-vs-new' },
        { label: 'Häufige Budget-GPU-Fehler', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: { id: 'key-takeaways', isTldr: true, items: [
          '**Beste Wahl nach Budget:** Unter 200 € — RX 6700 XT 12GB (200–250 €, am günstigsten, AMD-Setup-Reibung) oder RTX A4000 16GB, falls unter ca. 300 € zu finden (bestes VRAM pro Euro). Ca. 250 € — RTX 3060 12GB (insgesamt am besten). Unter 500 € — RTX 4070 Super 12GB (am schnellsten mit 25–30 Tok/s).',
          '**RTX 3060 12GB** (200–250 € gebraucht): Betreibt jedes 7B-8B-Modell bei Q4/Q5 und die meisten dichten 13B-14B bei Q4. Beste Budget-Wahl.',
          '**RTX 3060 6GB**: Auf 3B-Modelle beschränkt (Phi-4 Mini, Llama 3.2 3B). Zu knapp für 7B.',
          '**Bestes Gesamtmodell auf 12 GB:** Qwen3 14B bei ca. 9 GB VRAM, 9–12 Tok/Sek. Beste dichte Qualität, die komfortabel passt.',
          '**Bestes Coding-Modell auf 12 GB:** Qwen3 8B mit 16–20 Tok/Sek.',
          '**Bestes Reasoning-Modell auf 12 GB:** DeepSeek-R1 7B mit 10–12 Tok/Sek. Chain-of-Thought.',
          '**Überspringen, wenn:** Sie 70B-Modelle, Llama 4 Scout (benötigt ca. 55 GB) oder 13B bei Q8 wollen — dann brauchen Sie 24 GB+ (RTX 4090).',
        ] },
        'rtx-3060-12gb': { id: 'rtx-3060-12gb', title: 'Was läuft auf der RTX 3060 12GB?', content: [ '**Die RTX 3060 12GB ist 2026 die beste Budget-GPU für lokale LLMs.** 12 GB VRAM fassen jedes 7B-Modell bei Q4/Q5-Quantisierung und die meisten 13B-Modelle bei Q4. Eine detaillierte Anleitung zu VRAM-Anforderungen über alle Modellgrößen hinweg finden Sie im [VRAM-Anforderungs-Leitfaden →](/de/local-llms/how-much-vram-local-llm). Hier die genauen Modelle und Geschwindigkeiten, die Sie erwarten können:' ], columns: ['Modell', 'Größe', 'Quantisierung', 'VRAM-Verbrauch', 'Geschwindigkeit', 'Am besten für'], rows: [
          { 'Modell': 'Qwen3 14B', 'Größe': '14B (dicht)', 'Quantisierung': 'Q4_K_M', 'VRAM-Verbrauch': '~9 GB', 'Geschwindigkeit': '9–12 Tok/Sek', 'Am besten für': 'Beste Gesamtqualität, die passt' },
          { 'Modell': 'Qwen3 8B', 'Größe': '8B', 'Quantisierung': 'Q4_K_M', 'VRAM-Verbrauch': '~7 GB', 'Geschwindigkeit': '16–20 Tok/Sek', 'Am besten für': 'Coding, Allrounder' },
          { 'Modell': 'Gemma 4 E12B', 'Größe': '26B MoE', 'Quantisierung': 'Q4_K_M', 'VRAM-Verbrauch': '~9 GB', 'Geschwindigkeit': '11–14 Tok/Sek', 'Am besten für': 'Vision, multimodal' },
          { 'Modell': 'Mistral Small v0.3', 'Größe': '7B', 'Quantisierung': 'Q4_K_M', 'VRAM-Verbrauch': '~7 GB', 'Geschwindigkeit': '18 Tok/Sek', 'Am besten für': 'Instruktionsbefolgung' },
          { 'Modell': 'DeepSeek-R1 7B', 'Größe': '7B', 'Quantisierung': 'Q4_K_M', 'VRAM-Verbrauch': '~7 GB', 'Geschwindigkeit': '10–12 Tok/Sek', 'Am besten für': 'Reasoning, Mathematik' },
          { 'Modell': 'Gemma 4 E4B', 'Größe': 'E4B (multimodal)', 'Quantisierung': 'Q4_K_M', 'VRAM-Verbrauch': '~5 GB', 'Geschwindigkeit': '18–22 Tok/Sek', 'Am besten für': 'Leichte Vision, schneller Chat' },
          { 'Modell': 'Llama 3.2 13B', 'Größe': '13B', 'Quantisierung': 'Q4_K_M', 'VRAM-Verbrauch': '~11 GB', 'Geschwindigkeit': '8–10 Tok/Sek', 'Am besten für': 'Höhere Chat-Qualität (nur Q4, knappe Passung)' },
        ], note: 'Qwen3 14B (dicht) ist das qualitativ beste Modell, das bei Q4_K_M komfortabel auf eine RTX 3060 12GB passt und ca. 9 GB belegt. `ollama pull qwen3:14b`. Hinweis: Llama 4 Scout (MoE mit 17B aktiven / 109B Gesamt-Parametern, 10M-Token-Kontext, multimodal) benötigt bei Q4 ca. 55 GB und passt normalerweise nicht in 12 GB — es ist eine Wahl für Long-Context / große Multimodalität auf High-VRAM-Rigs, keine Budget-GPU-Empfehlung. gpt-oss:20b (21B gesamt / 3,6B aktiv MoE) benötigt 16 GB und liegt damit auf einer 12-GB-Karte knapp außer Reichweite. Alle Geschwindigkeiten gemessen mit Ollama auf RTX 3060 12GB, 16 GB System-RAM, Ryzen 7 7700X. Q4_K_M-Quantisierung. Geschwindigkeiten variieren um ±15 % je nach Prompt-Länge und Kontextfenster.' },
        'rtx-3060-6gb': { id: 'rtx-3060-6gb', title: 'Was läuft auf der RTX 3060 6GB?', content: [ '**Die 6-GB-Variante ist stark eingeschränkt.** Nur 3B-Modelle passen komfortabel. 7B-Modelle bei Q4 benötigen ca. 7 GB — mehr, als Sie haben. CPU-Offloading funktioniert, kostet aber 50–70 % Geschwindigkeit.' ], items: [
          '**Phi-4 Mini 3.8B (Q4):** ca. 3 GB VRAM, 20–25 Tok/Sek. Bestes Reasoning in dieser Größe. Stark bei Mathematik und Logik.',
          '**Llama 3.2 3B (Q4):** ca. 2,5 GB VRAM, 25–35 Tok/Sek. Schnellste Option. Gut für einfachen Chat und Q&A.',
          '**Gemma 2 2B (Q4):** ca. 1,7 GB VRAM, 35–45 Tok/Sek. Leichtestes Modell. Gut zum Testen von Setups.',
          '**7B mit Offloading:** Möglich, aber langsam. Llama 7B mit CPU-Offload = ca. 5–8 Tok/Sek. Nur für nicht-interaktive Batch-Arbeit brauchbar.',
          '**Empfehlung:** Wenn Sie eine 6-GB-Karte haben, steigen Sie auf eine gebrauchte 12-GB-Karte um (200–250 €), bevor Sie Zeit in Workarounds investieren. Die Verbesserung bei Geschwindigkeit und Modellqualität ist es wert.',
        ] },
        'which-budget-gpus': { id: 'which-budget-gpus', title: 'RTX 3060 vs. andere Budget-GPUs', columns: ['GPU', 'VRAM', 'Preis (gebraucht)', '7B-Geschwindigkeit', 'Max. Modell', 'Fazit'], rows: [
          { 'GPU': 'RTX 3060 12GB ★', 'VRAM': '12 GB', 'Preis (gebraucht)': '200–250 €', '7B-Geschwindigkeit': '15–20 Tok/Sek', 'Max. Modell': '13B (Q4)', 'Fazit': 'Insgesamt bestes Budget' },
          { 'GPU': 'RTX 4060 Ti 8GB', 'VRAM': '8 GB', 'Preis (gebraucht)': '250–300 €', '7B-Geschwindigkeit': '20–25 Tok/Sek', 'Max. Modell': '7B (max. Q5)', 'Fazit': 'Schneller, aber weniger VRAM' },
          { 'GPU': 'RTX A4000', 'VRAM': '16 GB', 'Preis (gebraucht)': 'ca. 280–330 €', '7B-Geschwindigkeit': '12–15 Tok/Sek', 'Max. Modell': '13B (Q5)', 'Fazit': 'Bestes VRAM pro Euro' },
          { 'GPU': 'RTX 4070 Super', 'VRAM': '12 GB', 'Preis (gebraucht)': '450–490 €', '7B-Geschwindigkeit': '25–30 Tok/Sek', 'Max. Modell': '13B (Q5)', 'Fazit': 'Schneller, aber doppelter Preis' },
          { 'GPU': 'RX 6700 XT', 'VRAM': '12 GB', 'Preis (gebraucht)': '200–250 €', '7B-Geschwindigkeit': '10–14 Tok/Sek', 'Max. Modell': '13B (Q4)', 'Fazit': 'Am günstigsten, AMD-Reibung' },
        ], note: 'Die RTX 3060 12GB gewinnt beim Preis-Leistungs-Verhältnis: 12 GB VRAM für 200–250 € betreiben jedes 7B-Modell und die meisten 13B. Die RTX A4000 ist ein knapper Zweiter, wenn Sie eine unter ca. 300 € finden.' },
        'vram-7b': { title: 'Wie viel VRAM brauchen Sie für 7B-Modelle?', content: [
          '**7B-Modelle bei Q4 (4-Bit) quantisiert benötigen 6–8 GB VRAM; Q5 (5-Bit) benötigt 8–10 GB; Q8 (8-Bit) benötigt 14–16 GB.**',
          'In der Praxis: **8 GB sind das absolute Minimum** für komfortable Inferenz bei 7B-Modellen mit Q4 und etwas Platz für Batch-Verarbeitung.',
          '6-GB-Karten (RTX 2060) funktionieren technisch, erfordern aber aggressive Optimierung und lassen keinen Spielraum für höhere Batches.',
          'Wenn Sie mit weniger als 8 GB VRAM auskommen müssen, können Sie lokale LLMs trotzdem effektiv betreiben — **[siehe geschwindigkeitsoptimierte Modelle für 4–8 GB Hardware](/de/local-llms/fastest-local-llms-low-end-pcs)**.',
          'Die GPU-Kosten sind die eine Seite der Wirtschaftlichkeit; die Token-Kosten die andere. Lokale Inferenz eliminiert API-Gebühren pro Token, aber die Prompt-Länge beeinflusst weiterhin Latenz und Durchsatz. Das vollständige Kostenbild — Tokens, Preisstufen und Optimierungsstrategien — finden Sie unter [Tokens, Kosten und Limits: die Wirtschaftlichkeit von KI-Prompting](https://www.promptquorum.com/de/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting).',
        ] },
        'best-by-use-case': { id: 'best-by-use-case', title: 'Beste Modelle nach Anwendungsfall auf der RTX 3060', content: [
          '**Wählen Sie Ihr Modell danach, was Sie tatsächlich brauchen, nicht nach Parameteranzahl.** Hier die besten Optionen für jeden Anwendungsfall auf der RTX 3060 12GB:',
          'Budget-Hardware betreibt kleinere Modelle — aber geschicktes Prompting schließt die Qualitätslücke. Der [Prompt-Engineering-Leitfaden](https://www.promptquorum.com/de/prompt-engineering) behandelt Techniken wie Chain-of-Thought und strukturierte Ausgabe, die kleineren Modellen helfen, über ihrer Gewichtsklasse zu spielen. Eine konkrete Arbeitslast, die in die RTX-3060-12-GB-Klasse passt, ist die automatisierte Pull-Request-Prüfung — siehe [Lokales LLM-Code-Review in CI/CD](/de/power-local-llm/local-llm-code-review-ci-cd) für das GitHub-Actions-Muster, das Qwen3 8B genau auf dieser Hardware gegen PRs laufen lässt.',
        ], items: [
          '**Chat / Q&A:** `ollama run qwen3:14b` — dichtes 14B, ca. 9 GB VRAM, beste Qualität auf 12 GB. Für eine leichtere Option: `ollama run qwen3:8b` bei ca. 7 GB.',
          '**Coding:** `ollama run qwen3:8b` — starkes Allround-Coding. ca. 7 GB VRAM. 16–20 Tok/Sek.',
          '**Reasoning / Mathematik:** `ollama run deepseek-r1:7b` — Chain-of-Thought-Reasoning. 10–12 Tok/Sek. Langsamer, aber deutlich genauer bei mehrstufigen Problemen.',
          '**Schreiben / Kreativ:** `ollama run mistral:7b` — Beste Instruktionsbefolgung. 18 Tok/Sek. Saubere, strukturierte Ausgabe. Gut für Entwürfe und Umformulierungen.',
          '**Vision / Bilder:** `ollama run gemma4:e12b` — Multimodal (akzeptiert Bilder). 11–14 Tok/Sek. Belegt ca. 9 GB VRAM. Für eine leichtere Wahl `ollama run gemma4:e4b` bei ca. 5 GB. Fotos beschreiben, Screenshots lesen, Diagramme analysieren.',
          '**Datenschutz / Offline:** Jedes der oben genannten. Alle laufen zu 100 % lokal. Keine Daten verlassen Ihren Rechner. Nach dem Modell-Download ist kein Internet erforderlich.',
          '**Heimautomatisierung / Always-on-KI:** `ollama run phi4-mini` — Phi-4 Mini (3,8B, ca. 3 GB VRAM) bewältigt Home-Assistant-Sprachabfragen auf einem Mini-PC ohne dedizierte GPU. Siehe [beste Hardware für lokale Smart-Home-KI →](/de/smart-home/best-hardware-for-local-smart-home).',
        ] },
        'used-vs-new': { title: 'Gebraucht vs. neu: Wo sollten Sie kaufen?', items: [
          '**Gebraucht (50–100 € günstiger)**: eBay, Kleinanzeigen, lokale Computer-Reparaturwerkstätten. Höheres Risiko defekter Karten oder fehlerhaften VRAMs. Vor dem Kauf immer testen.',
          '**Neu (280–400 €)**: Mindfactory, Amazon, MediaMarkt, Alternate. Garantie inklusive. Keine Überraschungen. Stabile Preise. Gut für risikoscheue Käufer.',
          '**Mining-Karten (Krypto, spottbillig)**: Extremes Risiko. VRAM-Degradation häufig. Nur kaufen, wenn Sie vor Ort vollständig benchen können.',
        ] },
        'mistakes': { title: 'Häufige Budget-GPU-Fehler', items: [
          'Eine 4-GB-RTX-2060 kaufen und reibungslose 7B-Inferenz erwarten — Sie werden ständig auf Out-of-Memory-Fehler stoßen.',
          'Eine GPU für 250 € mit einem Netzteil für 30 € kombinieren — Spannungseinbrüche killen die Stabilität. Planen Sie 80+ Gold-zertifiziert, mindestens 650 W ein.',
          'Annehmen, dass DDR5-RAM und eine i9-CPU die LLM-Inferenz beschleunigen — tun sie nicht. Die VRAM-Bandbreite der GPU ist der einzige Flaschenhals, der für die Inferenzgeschwindigkeit zählt.',
          'Annehmen, dass Llama 4 Scout in 12 GB passt. Scout ist ein MoE mit 17B aktiven / 109B Gesamt-Parametern, das bei Q4 ca. 55 GB benötigt (es quetscht sich nur bei 1,78-Bit in 24 GB, ca. 20 Tok/s). Auf einer 12-GB-RTX-3060 betreiben Sie stattdessen dichte Modelle: Qwen3 14B (ca. 9 GB), Qwen3 8B oder Gemma 4 E12B.',
          'Eine 16-GB-Karte nur für 13B-Modelle kaufen. Eine 12-GB-RTX-3060 betreibt Qwen3 14B bereits bei Q4. Steigen Sie nur auf 16 GB um, wenn Sie speziell gpt-oss:20b (16 GB), dichte 20B+-Modelle oder mehr Kontext-Spielraum benötigen.',
        ] },
        'nextSteps': {
          id: 'next-steps',
          title: 'Nächste Schritte',
          items: [
            '[Beste AMD-GPUs für lokale LLMs](/de/local-llms/best-amd-gpus-local-llm) — AMD in Betracht ziehen? Vollständiger AMD-vs-NVIDIA-Vergleich →',
            '[Beste Open-Source-Ollama-Modelle](/de/local-llms/top-open-source-models-ollama) — Welche Modelle laufen am besten auf einer Budget-GPU? →',
            '[Wie viel VRAM brauche ich?](/de/local-llms/how-much-vram-local-llm) — GPU-VRAM auf Modellgröße abstimmen →',
          ],
        },
        'faqSection': { title: 'Häufig gestellte Fragen', faqs: [
          { q: 'Lohnt sich die RTX 3060 12GB 2026 noch?', a: 'Ja. Sie ist über 4 Jahre alt, aber 12 GB VRAM sind zeitlos. Betreibt Qwen3 14B, Qwen3 8B, Gemma 4 E12B und Mistral Small reibungslos bei Q4. Sie fasst jedes 7B-8B-Modell und die meisten dichten 13B-14B-Modelle.' },
          { q: 'Soll ich die RTX 5060 Ti oder RTX 4060 Ti für lokale LLMs kaufen?', a: 'RTX 5060 Ti. Die neuere Generation (2026) bietet 10–15 % mehr Leistung. Bei knappem Budget ist die RTX 4060 Ti weiterhin solide. Meiden Sie die Basis-4060/5060 (8 GB) und 4070 (12 GB) — schlechtes Preis-Leistungs-Verhältnis.' },
          { q: 'Kann ich stattdessen eine AMD RX 7900 XT oder RX 7900 XTX verwenden?', a: 'Ja, aber die Treiberunterstützung für AMD ist schwächer als NVIDIA + CUDA. Das HIP/ROCm-Setup erfordert mehr Aufwand. RTX ist für Einsteiger sicherer.' },
          { q: 'Reichen 12 GB VRAM für 13B-Modelle?', a: 'Knapp, bei Q4-Quantisierung. Q5 oder Q8 verursachen OOM-Fehler. Wenn Sie 13B komfortabel wollen, peilen Sie 16 GB an.' },
          { q: 'Soll ich eine gebrauchte Enterprise-GPU wie die RTX A4000 kaufen?', a: 'Ja, falls verfügbar. 16 GB VRAM, professionelle Kühlung, üblicherweise ca. 280–330 € gebraucht. Etwas langsamer als die RTX 3060, aber der VRAM-Puffer ist es wert.' },
          { q: 'Welche Netzteil-Wattzahl sollte ich zu einer GPU für 250 € kaufen?', a: '650 W, mindestens 80+ Gold. Eine GPU für 250 € + CPU + Mainboard überschreitet keine 400 W Aufnahme, aber Sie wollen Spielraum für Spitzen.' },
          { q: 'Kann ich Ollama mit einer Budget-GPU für 200 € betreiben?', a: 'Ja. Ollama ist schlank. Eine 4 Jahre alte RTX 3060 mit Ollama betreibt Qwen3 14B mit 9–12 Tok/Sek oder Qwen3 8B mit 16–20 Tok/Sek — völlig brauchbar für interaktiven Chat und Coding-Unterstützung.' },
          { q: 'Kann ich Llama 4 Scout auf einer RTX 3060 12GB betreiben?', a: 'Normalerweise nicht. Llama 4 Scout ist ein MoE mit 17B aktiven / 109B Gesamt-Parametern, das bei Q4 ca. 55 GB VRAM benötigt — weit jenseits einer 12-GB-Karte. Es quetscht sich nur bei einer extremen 1,78-Bit-Quantisierung in 24 GB (ca. 20 Tok/Sek). Auf einer RTX 3060 12GB betreiben Sie stattdessen dichte Modelle: `ollama pull qwen3:14b` (beste Qualität, die passt), Qwen3 8B oder Gemma 4 E12B. Scout ist eine Wahl für Long-Context (10M-Token) / große Multimodalität für Rigs mit 48 GB+.' },
        ] },
        'relatedReading': { title: 'Weiterführende Artikel', items: [
          '[AMD Ryzen AI Max+ Mini-PCs (2026)](/de/local-llms/best-amd-mini-pc-local-llm-2026) — Alternative zu dedizierten GPUs: iGPU + 50-TOPS-NPU für 1.200–2.500 €.',
          '[Wie viel VRAM für lokale LLMs](/de/local-llms/how-much-vram-local-llm)',
          '[RTX 5090 vs. RTX 4090](/de/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
          '[Gebrauchte GPUs für lokale LLMs](/de/local-llms/used-gpus-for-local-llms)',
          '[Beste GPUs für lokale LLMs](/de/local-llms/best-gpus-for-local-llms)',
          '[VRAM-Rechner](/de/local-llms/vram-calculator-local-llm)',
          '[Laptop vs. Desktop für lokale LLMs](/de/local-llms/laptop-vs-desktop-local-llm) — Vollständiger Plattformvergleich: GPU-Desktop vs. MacBook für lokale LLMs.',
          '[Prompt Engineering für lokale LLMs](/de/local-llms/prompt-engineering-for-local-models) — Prompts für Modelle auf Budget-Hardware optimieren.',
          '[Chain-of-Thought-Prompting](/de/prompt-engineering/chain-of-thought-prompting) — verbessert die Ausgabequalität von DeepSeek-R1 deutlich.',
          '[Mac Mini M5 als lokaler KI-Server](/de/local-llms/mac-mini-m5-local-ai-server) — Budget-Alternative zu GPU-Builds: Always-on-KI für ca. 599 € Hardware + ca. 35 €/Jahr Strom.',
          '[Apple Silicon M5 für lokale LLMs](/de/local-llms/apple-silicon-m5-local-llm) — Vollständiger M5-Pro/Max-Leitfaden: Benchmarks, Mac-Konfigurationen, Speicherstufen und welchen Mac man für lokale Inferenz kaufen sollte.',
          '[Apple Silicon vs. NVIDIA-GPU für lokale LLMs](/de/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Vollständiger Kosten- und Leistungsvergleich: wann ein Mac eine Budget-GPU schlägt.',
          '[Beste Modelle für Apple Silicon 2026](/de/local-llms/best-models-apple-silicon-2026) — Modellempfehlungen für 16-GB- bis 128-GB-Unified-Memory-Stufen.',
          '[Melhores GPUs Econômicas para LLMs Locais (Português)](/pt/local-llms/best-budget-gpus-local-llm) — versão em português deste guia',
          'Für Japan-spezifische GPU-Preise, Akihabara-Händler und Gebrauchtmarkt-Optionen auf Mercari und Yahoo Auctions siehe unseren <a href="/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">Leitfaden zur preiswertesten GPU für lokale LLMs in Japan</a>.',
          'Für GPU-Preise in den VAE und der Golfregion, Händler wie Sharaf DG, noon.com und Amazon.ae sowie den Gebrauchtmarkt auf dubizzle, siehe unseren <a href="/de/prompt-bites/best-gpu-local-llm-uae-price" class="text-primary hover:underline">Leitfaden zur besten Preis-Leistungs-GPU für lokale LLMs in den VAE</a>.',
        ] },
        'sources': { title: 'Quellen', items: [
          'Meta AI. (2025). „Llama 4 Model Card." — Scout-MoE-Architektur, VRAM-Anforderungen',
          'Qwen Team. (2026). „Qwen3 Technical Report." — Qwen3-8B-Spezifikationen',
          'TechPowerUp GPU-Datenbank: RTX 3060 / RTX 4060 Ti / RTX 4070 Super Spezifikationen und Leistungsaufnahme',
          'NVIDIA CUDA Capability Matrix: GPU-Speicherbandbreite und theoretischer Durchsatz für Inferenz-Workloads',
          'Ollama Model Requirements: VRAM-Empfehlungen für Llama 4 Scout, Qwen3 und Mistral Small Quantisierungsstufen',
          'Compliance-Frameworks erfordern auditierbare Workflows. Etablieren Sie Governance-Standards für KI-Prompt-Qualität und -Review: [Prompt-Governance in der Produktion](https://www.promptquorum.com/de/prompt-engineering/prompt-governance-in-production) behandelt Richtlinien, Versionskontrolle und Freigabeprozesse.',
        ] },
      },
      schema: { '@context': 'https://schema.org', '@type': 'TechArticle', 'headline': 'RTX 3060 Leitfaden für lokale LLMs 2026: Welche Modelle laufen', 'description': 'Welche lokalen LLMs können Sie auf der RTX 3060 12GB oder 6GB betreiben? Sehen Sie die besten Modelle für Coding, Chat und Reasoning 2026 mit echten VRAM-Grenzen und Performance-Tipps.', 'url': 'https://www.promptquorum.com/de/local-llms/best-budget-gpus-local-llm', 'datePublished': '2026-04-05', 'dateModified': '2026-06-19', 'inLanguage': 'de', 'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' }, 'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, 'about': [ { '@type': 'Thing', 'name': 'budget GPU' }, { '@type': 'Thing', 'name': 'RTX 3060' }, { '@type': 'Thing', 'name': 'GPU VRAM' }, { '@type': 'Thing', 'name': 'local LLM inference' } ], 'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] }, 'educationalLevel': 'Beginner' },
      faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'de', 'mainEntity': [
        { '@type': 'Question', 'name': 'Lohnt sich die RTX 3060 12GB 2026 noch?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Sie ist über 4 Jahre alt, aber 12 GB VRAM sind zeitlos für 7B-13B-Modelle. Betreibt Qwen3 14B, Qwen3 8B und Mistral Small reibungslos. Ideal, wenn Sie eine gebraucht unter 250 € finden.' } },
        { '@type': 'Question', 'name': 'Soll ich die RTX 4060 oder RTX 4060 Ti für lokale LLMs kaufen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 4060 Ti. Die Basis-RTX-4060 (8 GB) und die RTX 4070 (12 GB) bieten ein schlechtes Preis-Leistungs-Verhältnis für LLM-Arbeit. Die Ti ist die preislich beste RTX-40-Serie-Karte für lokale Inferenz.' } },
        { '@type': 'Question', 'name': 'Kann ich eine AMD RX 6700 oder 6800 XT statt NVIDIA für lokale LLMs verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, aber die AMD-ROCm-Treiberunterstützung für ONNX Runtime ist schwächer als NVIDIA CUDA. Erwarten Sie mehr Setup-Reibung. NVIDIA ist für Budget-Builds sicherer.' } },
        { '@type': 'Question', 'name': 'Reichen 12 GB VRAM für 13B-Modelle?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Knapp, bei Q4-Quantisierung. Q5 oder Q8 verursachen OOM-Fehler. Wenn Sie 13B komfortabel wollen, peilen Sie 16 GB VRAM an.' } },
        { '@type': 'Question', 'name': 'Soll ich eine gebrauchte Enterprise-GPU wie die RTX A4000 kaufen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, falls verfügbar. 16 GB VRAM, professionelle Kühlung, üblicherweise ca. 280–330 € gebraucht. Pro Benchmark etwas langsamer als die RTX 3060, aber der VRAM-Puffer ist es wert.' } },
        { '@type': 'Question', 'name': 'Welche Netzteil-Wattzahl sollte ich zu einer GPU für 250 € kaufen?', 'acceptedAnswer': { '@type': 'Answer', 'text': '650 W, mindestens 80+ Gold. Eine GPU für 250 € + CPU + Mainboard überschreitet keine 400 W Aufnahme, aber Spielraum für Spitzen verhindert Stabilitätsprobleme.' } },
        { '@type': 'Question', 'name': 'Kann ich Ollama mit einer Budget-GPU für 200 € betreiben?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Ollama ist schlank. Eine 4 Jahre alte RTX 3060 mit Ollama betreibt Qwen3 8B mit 16–20 Tokens/Sek — völlig brauchbar für persönliche Inferenz.' } },
        { '@type': 'Question', 'name': 'Was ist die beste Budget-GPU unter 200 €?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Gebrauchte RX 6700 XT (12 GB, ca. 200–250 €) oder RTX A2000 (12 GB, ca. 250–300 €). Beide betreiben 7B-Modelle bei Q4. Die 12 GB VRAM geben auch Spielraum für 13B-Modelle.' } },
        { '@type': 'Question', 'name': 'Wie teste ich eine gebrauchte GPU vor dem Kauf auf VRAM-Defekte?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Führen Sie VRAM-Stresstests durch: gpu-burn (Linux), HWiNFO64-Speicherstresstest (Windows) oder laden Sie ein großes Modell in Ollama und achten Sie auf OOM-Fehler. Testen Sie, bevor Sie die Karte zurückgeben.' } },
        { '@type': 'Question', 'name': 'Kann ich meine aktuelle GPU später für größere Modelle aufrüsten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, GPU-Upgrades sind in Desktop-PCs unkompliziert. Beginnen Sie mit der RTX 3060 12GB und rüsten Sie später auf RTX 4090 oder 5090 auf. Der PCIe-Steckplatz ist über Generationen hinweg abwärtskompatibel.' } },
        { '@type': 'Question', 'name': 'Kann ich Llama 4 Scout auf einer RTX 3060 12GB betreiben?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Normalerweise nicht. Llama 4 Scout ist ein MoE mit 17B aktiven / 109B Gesamt-Parametern, das bei Q4 ca. 55 GB VRAM benötigt — weit jenseits einer 12-GB-Karte. Es quetscht sich nur bei einer extremen 1,78-Bit-Quantisierung in 24 GB (ca. 20 Tok/Sek). Auf einer RTX 3060 12GB betreiben Sie stattdessen dichte Modelle: qwen3:14b (beste Qualität, die passt), Qwen3 8B oder Gemma 4 E12B. Scout ist eine Wahl für Long-Context (10M-Token) / große Multimodalität für Rigs mit 48 GB+.' } },
        { '@type': 'Question', 'name': 'Was ist die beste Budget-NVIDIA-GPU für lokale LLM-Inferenz?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 4060 Ti (8 GB, ca. 250 €) für 7B-Modelle oder RTX 4070 Super (12 GB, ca. 450–490 €) für 13B-Modelle. Gebraucht: Die RTX 3060 12GB (200–250 €) betreibt 7-13B-Modelle reibungslos bei Q4. Bestes Preis-Leistungs-Verhältnis ist die RTX 3060 12GB gebraucht oder die RTX 4070 Super neu.' } },
        { '@type': 'Question', 'name': 'Wie schneidet die AMD 6800XT im Vergleich zur RTX 4070 bei der KI-Inferenz ab?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Die AMD RX 6800 XT (16 GB) schlägt die RTX 4070 (12 GB) bei VRAM und Gaming-Leistung, hinkt aber bei der LLM-Inferenzgeschwindigkeit hinterher (15–20 % langsamer). Das ROCm-Treiber-Setup für llama.cpp ist zudem komplexer als CUDA. Für reine LLM-Arbeit ist die RTX 4070 einfacher; für Gaming + LLMs bietet die 6800 XT das bessere Preis-Leistungs-Verhältnis.' } },
        { '@type': 'Question', 'name': 'Was ist die GPU mit dem besten Preis pro GB VRAM für lokale LLMs 2026?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Gebrauchte RTX 3090 (24 GB, ca. 800–900 €) = ca. 33–38 € pro GB. Gebrauchte RTX 3060 (12 GB, ca. 200–250 €) = ca. 17–21 € pro GB. RTX 4070 Ti (12 GB, ca. 700 € neu) = ca. 58 € pro GB. Bestes Preis-Leistungs-Verhältnis: RTX 3060 12GB gebraucht. Meiste Kapazität pro Euro: RTX 3090 24GB gebraucht. Balance aus Preis + Leistung: RTX 4070 neu.' } },
      ] },
    },
    fr: {
      freshness_tier: 'monthly',
      next_seo_review_due: '2026-07-01',
      next_refresh_due: '2026-06-30',
      last_full_refresh: '2026-06-01',
      current_models_mentioned: ['Qwen3 8B', 'Qwen3 14B', 'Gemma 4 E12B', 'Gemma 4 E4B', 'Mistral Small', 'DeepSeek-R1 7B', 'gpt-oss:20b'],
      theme: 'GPU Buying Guides',
      title: 'Meilleur GPU économique pour LLM locaux 2026 : RTX 3060 12GB et alternatives',
      seoTitle: 'Meilleur GPU économique pour LLM locaux 2026 : RTX 3060 12GB',
      intro: '**La RTX 3060 12GB fait tourner Qwen3 14B à 9–12 tok/sec, Qwen3 8B à 16–20 tok/sec, Gemma 4 E12B à 11–14 tok/sec, Mistral Small à 18 tok/sec et DeepSeek-R1 7B à 10–12 tok/sec — le tout en quantification Q4.** (DeepSeek a depuis publié DeepSeek-V4 — Flash/Pro — comme nouvelle génération à poids ouverts ; R1/V3 restent utilisables en local.) La variante 6GB se limite aux modèles 3B. En juin 2026, la RTX 3060 12GB (200–250 € d\'occasion) reste le meilleur GPU économique pour les LLM locaux : ses 12GB de VRAM accueillent tous les modèles 7B-8B en Q4/Q5 et la plupart des modèles denses 13B-14B en Q4. (Remarque : Llama 4 Scout est un MoE 17B actifs/109B au total qui réclame ~55 GB en Q4 — il ne tient normalement pas dans 12 GB.) Ce guide détaille précisément quels modèles tournent sur chaque palier de VRAM, avec vitesses réelles et configurations pratiques.',
      metaDescription: 'Meilleur GPU économique pour LLM locaux 2026 : la RTX 3060 12GB (200–250 € d\'occasion) fait tourner Qwen3 14B à 9–12 tok/s. Moins cher : RX 6700 XT. Meilleur VRAM/€ : RTX A4000. Tableau de vitesses complet.',
      publishDate: '2026-04-05',
      dateModified: '2026-06-19',
      leadAnswerBlock: '**La RTX 3060 12GB fait tourner Qwen3 14B à 9–12 tok/sec, Qwen3 8B à 16–20 tok/sec, Gemma 4 E12B à 11–14 tok/sec, Mistral Small à 18 tok/sec et DeepSeek-R1 7B à 10–12 tok/sec. La variante 6GB ne gère que les modèles 3B. Meilleur GPU économique pour LLM locaux en 2026, à 200–250 € d\'occasion.**',
      nextStep: { text: 'Votre GPU est prêt ? Choisissez maintenant le bon logiciel pour exécuter vos modèles.', label: 'Meilleures interfaces pour LLM locaux 2026 →', href: '/fr/local-llms/best-local-llm-frontends' },
      audience: 'Débutants exécutant leur premier LLM local sur du matériel grand public',
      readTime: '7 min de lecture',
      educationalLevel: 'Beginner',
      primaryTerm: 'GPU économique',
      toc: [
        { label: 'Points clés', anchor: '#tldr' },
        { label: 'Que peut faire tourner la RTX 3060 12GB ?', anchor: '#rtx-3060-12gb' },
        { label: 'Que peut faire tourner la RTX 3060 6GB ?', anchor: '#rtx-3060-6gb' },
        { label: 'RTX 3060 vs autres GPU économiques', anchor: '#which-budget-gpus' },
        { label: 'Combien de VRAM faut-il pour les modèles 7B ?', anchor: '#vram-7b' },
        { label: 'Meilleurs modèles par usage sur RTX 3060', anchor: '#best-by-use-case' },
        { label: 'Occasion ou neuf : où acheter ?', anchor: '#used-vs-new' },
        { label: 'Erreurs courantes avec les GPU économiques', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: { id: 'key-takeaways', isTldr: true, items: [
          '**Meilleur choix par budget :** Moins de 200 € — RX 6700 XT 12GB (140–190 €, la moins chère, friction de configuration AMD) ou RTX A4000 16GB si trouvée sous 220 € (meilleur rapport VRAM/€). ~250 € — RTX 3060 12GB (meilleur choix global). Moins de 450 € — RTX 4070 Super 12GB (la plus rapide à 25–30 tok/s).',
          '**RTX 3060 12GB** (200–250 € d\'occasion) : fait tourner tous les modèles 7B-8B en Q4/Q5 et la plupart des denses 13B-14B en Q4. Meilleur choix économique.',
          '**RTX 3060 6GB** : limitée aux modèles 3B (Phi-4 Mini, Llama 3.2 3B). Trop juste pour le 7B.',
          '**Meilleur modèle global sur 12GB :** Qwen3 14B, ~9 GB de VRAM, 9–12 tok/sec. Meilleure qualité dense qui tient confortablement.',
          '**Meilleur modèle de code sur 12GB :** Qwen3 8B à 16–20 tok/sec.',
          '**Meilleur modèle de raisonnement sur 12GB :** DeepSeek-R1 7B à 10–12 tok/sec. Chaîne de pensée.',
          '**À éviter si :** vous visez des modèles 70B, Llama 4 Scout (~55 GB) ou du 13B en Q8 — il vous faut 24GB+ (RTX 4090).',
        ] },
        'rtx-3060-12gb': { id: 'rtx-3060-12gb', title: 'Que peut faire tourner la RTX 3060 12GB ?', content: ['**La RTX 3060 12GB est le meilleur GPU économique pour les LLM locaux en 2026.** Ses 12GB de VRAM accueillent tous les modèles 7B en quantification Q4/Q5, et la plupart des 13B en Q4. Pour un guide détaillé des besoins en VRAM selon la taille des modèles, voir le [guide des besoins en VRAM →](/fr/local-llms/how-much-vram-local-llm). Voici les modèles et vitesses précis auxquels vous attendre :'], columns: ['Modèle', 'Taille', 'Quantification', 'VRAM utilisée', 'Vitesse', 'Idéal pour'], rows: [
          { 'Modèle': 'Qwen3 14B', 'Taille': '14B (dense)', 'Quantification': 'Q4_K_M', 'VRAM utilisée': '~9 GB', 'Vitesse': '9–12 tok/sec', 'Idéal pour': 'Meilleure qualité globale qui tient' },
          { 'Modèle': 'Qwen3 8B', 'Taille': '8B', 'Quantification': 'Q4_K_M', 'VRAM utilisée': '~7 GB', 'Vitesse': '16–20 tok/sec', 'Idéal pour': 'Code, polyvalence' },
          { 'Modèle': 'Gemma 4 E12B', 'Taille': '26B MoE', 'Quantification': 'Q4_K_M', 'VRAM utilisée': '~9 GB', 'Vitesse': '11–14 tok/sec', 'Idéal pour': 'Vision, multimodal' },
          { 'Modèle': 'Mistral Small v0.3', 'Taille': '7B', 'Quantification': 'Q4_K_M', 'VRAM utilisée': '~7 GB', 'Vitesse': '18 tok/sec', 'Idéal pour': 'Suivi des instructions' },
          { 'Modèle': 'DeepSeek-R1 7B', 'Taille': '7B', 'Quantification': 'Q4_K_M', 'VRAM utilisée': '~7 GB', 'Vitesse': '10–12 tok/sec', 'Idéal pour': 'Raisonnement, maths' },
          { 'Modèle': 'Gemma 4 E4B', 'Taille': 'E4B (multimodal)', 'Quantification': 'Q4_K_M', 'VRAM utilisée': '~5 GB', 'Vitesse': '18–22 tok/sec', 'Idéal pour': 'Vision légère, chat rapide' },
          { 'Modèle': 'Llama 3.2 13B', 'Taille': '13B', 'Quantification': 'Q4_K_M', 'VRAM utilisée': '~11 GB', 'Vitesse': '8–10 tok/sec', 'Idéal pour': 'Chat de meilleure qualité (Q4 uniquement, ajustement serré)' },
        ], note: 'Qwen3 14B (dense) est le modèle de meilleure qualité qui tient confortablement sur une RTX 3060 12GB en Q4_K_M, avec ~9 GB. `ollama pull qwen3:14b`. Remarque : Llama 4 Scout (MoE 17B actifs / 109B au total, contexte de 10M tokens, multimodal) réclame ~55 GB en Q4 et ne tient normalement pas dans 12 GB — c\'est un choix long contexte / grand multimodal pour les configurations à forte VRAM, pas une recommandation de GPU économique. gpt-oss:20b (MoE 21B au total / 3.6B actifs) réclame 16 GB, donc il reste tout juste hors de portée d\'une carte 12 GB. Toutes les vitesses mesurées avec Ollama sur RTX 3060 12GB, 16GB de RAM système, Ryzen 7 7700X. Quantification Q4_K_M. Les vitesses varient de ±15 % selon la longueur du prompt et la fenêtre de contexte.' },
        'rtx-3060-6gb': { id: 'rtx-3060-6gb', title: 'Que peut faire tourner la RTX 3060 6GB ?', content: ['**La variante 6GB est très limitée.** Seuls les modèles 3B tiennent confortablement. Les modèles 7B en Q4 réclament ~7GB — plus que ce dont vous disposez. Le déchargement CPU fonctionne mais réduit la vitesse de 50–70 %.'], items: [
          '**Phi-4 Mini 3.8B (Q4) :** ~3GB de VRAM, 20–25 tok/sec. Meilleur raisonnement à cette taille. Solide en maths et logique.',
          '**Llama 3.2 3B (Q4) :** ~2.5GB de VRAM, 25–35 tok/sec. Option la plus rapide. Bon pour le chat simple et les questions-réponses.',
          '**Gemma 2 2B (Q4) :** ~1.7GB de VRAM, 35–45 tok/sec. Modèle le plus léger. Bon pour tester des configurations.',
          '**7B avec déchargement :** possible mais lent. Llama 7B avec déchargement CPU = ~5–8 tok/sec. Utilisable uniquement pour du traitement par lots non interactif.',
          '**Recommandation :** si vous avez une carte 6GB, passez à une 12GB d\'occasion (200–250 €) avant d\'investir du temps dans des contournements. Le gain en vitesse et en qualité de modèle en vaut la peine.',
        ] },
        'which-budget-gpus': { id: 'which-budget-gpus', title: 'RTX 3060 vs autres GPU économiques', columns: ['GPU', 'VRAM', 'Prix (occasion)', 'Vitesse 7B', 'Modèle max', 'Verdict'], rows: [
          { 'GPU': 'RTX 3060 12GB ★', 'VRAM': '12 GB', 'Prix (occasion)': '200–250 €', 'Vitesse 7B': '15–20 tok/sec', 'Modèle max': '13B (Q4)', 'Verdict': 'Meilleur choix économique global' },
          { 'GPU': 'RTX 4060 Ti 8GB', 'VRAM': '8 GB', 'Prix (occasion)': '250–300 €', 'Vitesse 7B': '20–25 tok/sec', 'Modèle max': '7B (Q5 max)', 'Verdict': 'Plus rapide mais moins de VRAM' },
          { 'GPU': 'RTX A4000', 'VRAM': '16 GB', 'Prix (occasion)': '170–220 €', 'Vitesse 7B': '12–15 tok/sec', 'Modèle max': '13B (Q5)', 'Verdict': 'Meilleur rapport VRAM/€' },
          { 'GPU': 'RTX 4070 Super', 'VRAM': '12 GB', 'Prix (occasion)': '380–430 €', 'Vitesse 7B': '25–30 tok/sec', 'Modèle max': '13B (Q5)', 'Verdict': 'Plus rapide, mais 2× le prix' },
          { 'GPU': 'RX 6700 XT', 'VRAM': '12 GB', 'Prix (occasion)': '140–190 €', 'Vitesse 7B': '10–14 tok/sec', 'Modèle max': '13B (Q4)', 'Verdict': 'La moins chère, friction AMD' },
        ], note: 'La RTX 3060 12GB l\'emporte sur la valeur : 12GB de VRAM à 200–250 € font tourner tous les modèles 7B et la plupart des 13B. La RTX A4000 arrive juste derrière si vous en trouvez une sous 220 €.' },
        'vram-7b': { title: 'Combien de VRAM faut-il pour les modèles 7B ?', content: [
          '**Les modèles 7B quantifiés en Q4 (4 bits) réclament 6-8GB de VRAM ; en Q5 (5 bits) 8-10GB ; en Q8 (8 bits) 14-16GB.**',
          'En pratique : **8GB est le strict minimum** pour une inférence confortable sur des modèles 7B en Q4, avec de la marge pour le traitement par lots.',
          'Les cartes 6GB (RTX 2060) fonctionnent techniquement mais exigent une optimisation agressive et ne laissent aucune marge pour des lots plus importants.',
          'Si vous êtes limité à moins de 8 GB de VRAM, vous pouvez tout de même exécuter des LLM locaux efficacement — **[voir les modèles optimisés pour la vitesse sur du matériel 4–8 GB](/fr/local-llms/fastest-local-llms-low-end-pcs)**.',
          'Le coût du GPU n\'est qu\'un aspect de l\'économie ; le coût des tokens en est un autre. L\'inférence locale élimine les frais d\'API par token, mais la longueur du prompt influe toujours sur la latence et le débit. Pour le panorama complet des coûts — tokens, paliers tarifaires et stratégies d\'optimisation — voir [tokens, coûts et limites : l\'économie du prompting IA](https://www.promptquorum.com/fr/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting).',
        ] },
        'best-by-use-case': { id: 'best-by-use-case', title: 'Meilleurs modèles par usage sur RTX 3060', content: [
          '**Choisissez votre modèle selon vos besoins réels, pas selon le nombre de paramètres.** Voici les meilleurs choix pour chaque usage sur RTX 3060 12GB :',
          'Le matériel économique fait tourner de plus petits modèles — mais un prompting habile comble l\'écart de qualité. Le [guide d\'ingénierie de prompts](https://www.promptquorum.com/fr/prompt-engineering) couvre des techniques comme la chaîne de pensée et la sortie structurée qui aident les petits modèles à se surpasser. Une charge concrète qui tient sur le palier RTX 3060 12 GB est la revue automatisée de pull requests — voir [Revue de code par LLM local en CI/CD](/fr/power-local-llm/local-llm-code-review-ci-cd) pour le schéma GitHub Actions qui fait tourner Qwen3 8B sur les PR avec exactement ce matériel.',
        ], items: [
          '**Chat / Q&R :** `ollama run qwen3:14b` — 14B dense, ~9 GB de VRAM, meilleure qualité sur 12 GB. Pour une option plus légère : `ollama run qwen3:8b` à ~7 GB.',
          '**Code :** `ollama run qwen3:8b` — solide polyvalence en code. ~7 GB de VRAM. 16–20 tok/sec.',
          '**Raisonnement / Maths :** `ollama run deepseek-r1:7b` — raisonnement en chaîne de pensée. 10–12 tok/sec. Plus lent mais nettement plus précis sur les problèmes multi-étapes.',
          '**Rédaction / Créatif :** `ollama run mistral:7b` — meilleur suivi des instructions. 18 tok/sec. Sortie propre et structurée. Bon pour rédiger et réécrire.',
          '**Vision / Images :** `ollama run gemma4:e12b` — multimodal (accepte les images). 11–14 tok/sec. Utilise ~9GB de VRAM. Pour un choix plus léger, `ollama run gemma4:e4b` à ~5 GB. Décrit des photos, lit des captures d\'écran, analyse des graphiques.',
          '**Confidentialité / Hors ligne :** n\'importe lequel des précédents. Tous tournent 100 % en local. Aucune donnée ne quitte votre machine. Aucune connexion requise après le téléchargement du modèle.',
          '**Domotique / IA toujours active :** `ollama run phi4-mini` — Phi-4 Mini (3.8B, ~3 GB de VRAM) gère les requêtes vocales Home Assistant sur un mini PC sans GPU dédié. Voir [meilleur matériel pour une IA domotique locale →](/fr/smart-home/best-hardware-for-local-smart-home).',
        ] },
        'used-vs-new': { title: 'Occasion ou neuf : où acheter ?', items: [
          '**Occasion (50-100 € moins cher)** : leboncoin, Marketplace Facebook, magasins de réparation locaux. Risque accru de cartes mortes ou de VRAM défectueuse. Testez toujours avant de vous engager.',
          '**Neuf (260-380 €)** : LDLC, Materiel.net, Amazon, Top Achat. Garantie incluse. Aucune surprise. Prix stables. Idéal pour les acheteurs prudents.',
          '**Cartes de minage (crypto, très bon marché)** : risque extrême. Dégradation de la VRAM fréquente. À acheter uniquement si vous pouvez la tester intégralement sur place.',
        ] },
        'mistakes': { title: 'Erreurs courantes avec les GPU économiques', items: [
          'Acheter une RTX 2060 4GB en s\'attendant à une inférence 7B fluide — vous rencontrerez constamment des erreurs de mémoire insuffisante.',
          'Associer un GPU à 250 € à une alimentation à 30 € — la chute de tension tue la stabilité. Prévoyez une 80+ Gold, 650W minimum.',
          'Croire que de la RAM DDR5 et un CPU i9 accélèrent l\'inférence LLM — ce n\'est pas le cas. La bande passante de la VRAM du GPU est le seul goulot d\'étranglement qui compte pour la vitesse d\'inférence.',
          'Croire que Llama 4 Scout tient dans 12 GB. Scout est un MoE 17B actifs / 109B au total qui réclame ~55 GB en Q4 (il ne se glisse dans 24 GB qu\'en 1.78 bit, ~20 tok/s). Sur une RTX 3060 12 GB, faites plutôt tourner des modèles denses : Qwen3 14B (~9 GB), Qwen3 8B ou Gemma 4 E12B.',
          'Acheter une carte 16 GB juste pour les modèles 13B. Une RTX 3060 12 GB fait déjà tourner Qwen3 14B en Q4. Passez au 16 GB uniquement si vous avez spécifiquement besoin de gpt-oss:20b (16 GB), de modèles denses 20B+ ou de plus de marge de contexte.',
        ] },
        'nextSteps': {
          id: 'next-steps',
          title: 'Étapes suivantes',
          items: [
            '[Meilleures GPU AMD pour LLM local](/fr/local-llms/best-amd-gpus-local-llm) — Envisagez AMD ? Comparaison complète AMD vs NVIDIA →',
            '[Meilleurs modèles Ollama open source](/fr/local-llms/top-open-source-models-ollama) — Quels modèles tournent le mieux sur une GPU budget ? →',
            '[Combien de VRAM me faut-il ?](/fr/local-llms/how-much-vram-local-llm) — Adaptez votre GPU à la taille du modèle →',
          ],
        },
        'faqSection': { title: 'Questions fréquemment posées', faqs: [
          { q: 'La RTX 3060 12GB vaut-elle encore l\'achat en 2026 ?', a: 'Oui. Elle a 4 ans et plus, mais ses 12GB de VRAM sont intemporels. Elle fait tourner Qwen3 14B, Qwen3 8B, Gemma 4 E12B et Mistral Small sans accroc en Q4. Elle accueille tous les modèles 7B-8B et la plupart des denses 13B-14B.' },
          { q: 'Faut-il acheter une RTX 5060 Ti ou une RTX 4060 Ti pour les LLM locaux ?', a: 'La RTX 5060 Ti. La nouvelle génération (2026) offre 10-15 % de performances en plus. Avec un budget serré, la RTX 4060 Ti reste solide. Évitez les 4060/5060 de base (8GB) et la 4070 (12GB) — mauvaise valeur.' },
          { q: 'Puis-je utiliser une AMD RX 7900 XT ou RX 7900 XTX à la place ?', a: 'Oui, mais le support des pilotes AMD est plus faible que NVIDIA + CUDA. La configuration HIP/ROCm demande plus d\'efforts. RTX reste plus sûr pour les débutants.' },
          { q: 'Les 12GB de VRAM suffisent-ils pour les modèles 13B ?', a: 'Tout juste, en quantification Q4. Le Q5 ou le Q8 provoqueront des erreurs OOM. Si vous voulez du 13B confortable, visez 16GB.' },
          { q: 'Faut-il acheter un GPU professionnel d\'occasion comme la RTX A4000 ?', a: 'Oui, si disponible. 16GB de VRAM, refroidissement de qualité professionnelle, généralement 170-220 € d\'occasion. Légèrement plus lente que la RTX 3060, mais le coussin de VRAM en vaut la peine.' },
          { q: 'Quelle puissance d\'alimentation acheter avec un GPU à 250 € ?', a: '650W, 80+ Gold minimum. Un GPU à 250 € + CPU + carte mère ne dépasse pas 400W de consommation, mais vous voulez de la marge pour les pics.' },
          { q: 'Puis-je faire tourner Ollama avec un GPU économique à 200 € ?', a: 'Oui. Ollama est léger. Une RTX 3060 vieille de 4 ans avec Ollama fera tourner Qwen3 14B à 9-12 tok/sec ou Qwen3 8B à 16-20 tok/sec — totalement utilisable pour le chat interactif et l\'assistance au code.' },
          { q: 'Puis-je faire tourner Llama 4 Scout sur une RTX 3060 12GB ?', a: 'Pas normalement. Llama 4 Scout est un MoE 17B actifs / 109B au total qui réclame ~55 GB de VRAM en Q4 — bien au-delà d\'une carte 12 GB. Il ne se glisse dans 24 GB qu\'avec une quantification extrême 1.78 bit (~20 tok/sec). Sur une RTX 3060 12GB, faites plutôt tourner des modèles denses : `ollama pull qwen3:14b` (meilleure qualité qui tient), Qwen3 8B ou Gemma 4 E12B. Scout est un choix long contexte (10M tokens) / grand multimodal pour les configurations 48 GB+.' },
        ] },
        'relatedReading': { title: 'Lectures complémentaires', items: [
          '[Mini PC AMD Ryzen AI Max+ (2026)](/fr/local-llms/best-amd-mini-pc-local-llm-2026) — Alternative aux GPU dédiés : iGPU + NPU 50 TOPS à 1 100–2 300 €.',
          '[Combien de VRAM pour les LLM locaux](/fr/local-llms/how-much-vram-local-llm)',
          '[RTX 5090 vs RTX 4090](/fr/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
          '[GPU d\'occasion pour LLM locaux](/fr/local-llms/used-gpus-for-local-llms)',
          '[Meilleurs GPU pour LLM locaux](/fr/local-llms/best-gpus-for-local-llms)',
          '[Calculateur de VRAM](/fr/local-llms/vram-calculator-local-llm)',
          '[Portable ou fixe pour les LLM locaux](/fr/local-llms/laptop-vs-desktop-local-llm) — Comparaison complète des plateformes : fixe avec GPU vs MacBook pour les LLM locaux.',
          '[Ingénierie de prompts pour LLM locaux](/fr/local-llms/prompt-engineering-for-local-models) — optimisez vos prompts pour les modèles sur matériel économique.',
          '[Prompting en chaîne de pensée](/fr/prompt-engineering/chain-of-thought-prompting) — améliore nettement la qualité de sortie de DeepSeek-R1.',
          '[Mac Mini M5 comme serveur IA local](/fr/local-llms/mac-mini-m5-local-ai-server) — Alternative économique aux configurations GPU : IA toujours active à env. 560 € de matériel + 35 €/an d\'électricité.',
          '[Apple Silicon M5 pour LLM locaux](/fr/local-llms/apple-silicon-m5-local-llm) — Guide complet M5 Pro/Max : benchmarks, configurations Mac, paliers de mémoire et quel Mac acheter pour l\'inférence locale.',
          '[Apple Silicon vs GPU NVIDIA pour LLM locaux](/fr/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Comparaison complète coût et performance : quand un Mac bat un GPU économique.',
          '[Meilleurs modèles pour Apple Silicon 2026](/fr/local-llms/best-models-apple-silicon-2026) — Recommandations de modèles pour les paliers de mémoire unifiée 16GB–128GB.',
          '[Melhores GPUs Econômicas para LLMs Locais (Português)](/pt/local-llms/best-budget-gpus-local-llm) — versão em português deste guia',
          'Pour les prix des GPU au Japon, les détaillants d\'Akihabara et les options du marché de l\'occasion sur Mercari et Yahoo Auctions, voir notre <a href="/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">guide du GPU au meilleur rapport qualité-prix pour LLM locaux au Japon</a>.',
          'Pour les prix des GPU aux Émirats arabes unis et dans le Golfe, des détaillants comme Sharaf DG, noon.com et Amazon.ae, ainsi que le marché de l\'occasion sur dubizzle, voir notre <a href="/fr/prompt-bites/best-gpu-local-llm-uae-price" class="text-primary hover:underline">guide du GPU au meilleur rapport qualité-prix pour LLM locaux aux EAU</a>.',
        ] },
        'sources': { title: 'Sources', items: [
          'Meta AI. (2025). « Llama 4 Model Card. » — architecture MoE de Scout, besoins en VRAM',
          'Qwen Team. (2026). « Qwen3 Technical Report. » — spécifications de Qwen3 8B',
          'Base de données GPU TechPowerUp : spécifications et consommation des RTX 3060 / RTX 4060 Ti / RTX 4070 Super',
          'Matrice de capacité CUDA NVIDIA : bande passante mémoire des GPU et débit théorique pour les charges d\'inférence',
          'Besoins des modèles Ollama : recommandations de VRAM pour les niveaux de quantification de Llama 4 Scout, Qwen3 et Mistral Small',
          'Les cadres de conformité exigent des flux de travail auditables. Établissez des normes de gouvernance pour la qualité et la revue des prompts IA : [gouvernance des prompts en production](https://www.promptquorum.com/fr/prompt-engineering/prompt-governance-in-production) couvre les politiques, le contrôle de version et les processus d\'approbation.',
        ] },
      },
      schema: { '@context': 'https://schema.org', '@type': 'TechArticle', 'headline': 'Guide RTX 3060 pour LLM locaux 2026 : quels modèles pouvez-vous exécuter', 'description': 'Quels LLM locaux pouvez-vous faire tourner sur une RTX 3060 12GB ou 6GB ? Découvrez les meilleurs modèles pour le code, le chat et le raisonnement en 2026, avec limites de VRAM réelles et conseils de performance.', 'url': 'https://www.promptquorum.com/fr/local-llms/best-budget-gpus-local-llm', 'datePublished': '2026-04-05', 'dateModified': '2026-06-19', 'inLanguage': 'fr', 'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' }, 'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, 'about': [ { '@type': 'Thing', 'name': 'budget GPU' }, { '@type': 'Thing', 'name': 'RTX 3060' }, { '@type': 'Thing', 'name': 'GPU VRAM' }, { '@type': 'Thing', 'name': 'local LLM inference' } ], 'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] }, 'educationalLevel': 'Beginner' },
      faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'fr', 'mainEntity': [
        { '@type': 'Question', 'name': 'La RTX 3060 12GB vaut-elle encore l\'achat en 2026 ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Elle a 4 ans et plus, mais ses 12GB de VRAM sont intemporels pour les modèles 7B-13B. Elle fait tourner Qwen3 14B, Qwen3 8B et Mistral Small sans accroc. Idéale si vous en trouvez une d\'occasion sous 250 €.' } },
        { '@type': 'Question', 'name': 'Faut-il acheter une RTX 4060 ou une RTX 4060 Ti pour les LLM locaux ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'La RTX 4060 Ti. La RTX 4060 de base (8GB) et la RTX 4070 (12GB) offrent une mauvaise valeur pour le travail LLM. La Ti est la carte RTX série 40 au meilleur prix pour l\'inférence locale.' } },
        { '@type': 'Question', 'name': 'Puis-je utiliser une AMD RX 6700 ou 6800 XT au lieu d\'une NVIDIA pour les LLM locaux ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, mais le support des pilotes AMD ROCm pour ONNX Runtime est plus faible que NVIDIA CUDA. Attendez-vous à plus de friction de configuration. NVIDIA reste plus sûr pour les configurations économiques.' } },
        { '@type': 'Question', 'name': 'Les 12GB de VRAM suffisent-ils pour les modèles 13B ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Tout juste, en quantification Q4. Le Q5 ou le Q8 provoqueront des erreurs OOM. Si vous voulez du 13B confortable, visez 16GB de VRAM.' } },
        { '@type': 'Question', 'name': 'Faut-il acheter un GPU professionnel d\'occasion comme la RTX A4000 ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, si disponible. 16GB de VRAM, refroidissement de qualité professionnelle, généralement 170-220 € d\'occasion. Légèrement plus lente que la RTX 3060 au benchmark, mais le coussin de VRAM en vaut la peine.' } },
        { '@type': 'Question', 'name': 'Quelle puissance d\'alimentation acheter avec un GPU à 250 € ?', 'acceptedAnswer': { '@type': 'Answer', 'text': '650W, 80+ Gold minimum. Un GPU à 250 € + CPU + carte mère ne dépasse pas 400W de consommation, mais une marge pour les pics évite les problèmes de stabilité.' } },
        { '@type': 'Question', 'name': 'Puis-je faire tourner Ollama avec un GPU économique à 200 € ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Ollama est léger. Une RTX 3060 vieille de 4 ans avec Ollama fera tourner Qwen3 8B à 16-20 tokens/sec — totalement utilisable pour l\'inférence personnelle.' } },
        { '@type': 'Question', 'name': 'Quel est le meilleur GPU économique sous 200 € ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RX 6700 XT d\'occasion (12GB, ~140-190 €) ou RTX A2000 (12GB, ~170-200 €). Les deux font tourner les modèles 7B en Q4. Les 12GB de VRAM offrent aussi de la marge pour les modèles 13B.' } },
        { '@type': 'Question', 'name': 'Comment tester une VRAM défectueuse sur un GPU d\'occasion avant l\'achat ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Lancez des tests de stress de VRAM : gpu-burn (Linux), test de stress mémoire HWiNFO64 (Windows), ou chargez un gros modèle dans Ollama et surveillez les erreurs OOM. Testez avant de renvoyer la carte.' } },
        { '@type': 'Question', 'name': 'Puis-je faire évoluer mon GPU actuel pour exécuter de plus gros modèles plus tard ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, les mises à niveau de GPU sont simples sur les PC fixes. Commencez avec une RTX 3060 12GB, puis passez à une RTX 4090 ou 5090 plus tard. Le slot PCIE est rétrocompatible entre générations.' } },
        { '@type': 'Question', 'name': 'Puis-je faire tourner Llama 4 Scout sur une RTX 3060 12GB ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Pas normalement. Llama 4 Scout est un MoE 17B actifs / 109B au total qui réclame ~55 GB de VRAM en Q4 — bien au-delà d\'une carte 12 GB. Il ne se glisse dans 24 GB qu\'avec une quantification extrême 1.78 bit (~20 tok/sec). Sur une RTX 3060 12GB, faites plutôt tourner des modèles denses : qwen3:14b, Qwen3 8B ou Gemma 4 E12B. Scout est un choix long contexte (10M tokens) / grand multimodal pour les configurations 48 GB+.' } },
        { '@type': 'Question', 'name': 'Quel est le meilleur GPU NVIDIA économique pour l\'inférence LLM locale ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 4060 Ti (8 GB, ~250 €) pour les modèles 7B, ou RTX 4070 Super (12 GB, ~350-400 €) pour les modèles 13B. En occasion : RTX 3060 12GB (200–250 €) fait tourner les modèles 7-13B sans accroc en Q4. Le meilleur rapport qualité-prix est la RTX 3060 12GB d\'occasion, ou la RTX 4070 Super neuve.' } },
        { '@type': 'Question', 'name': 'Comment l\'AMD 6800XT se compare-t-elle à la RTX 4070 pour l\'inférence IA ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'L\'AMD RX 6800 XT (16 GB) bat la RTX 4070 (12 GB) sur la VRAM et le jeu mais reste en retrait sur la vitesse d\'inférence LLM (15-20 % plus lente). La configuration ROCm pour llama.cpp est plus complexe que CUDA. Pour du LLM pur, la RTX 4070 est plus simple ; pour jeu + LLM, la 6800 XT offre une meilleure valeur.' } },
        { '@type': 'Question', 'name': 'Quel est le meilleur GPU au prix par Go de VRAM pour les LLM locaux en 2026 ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 3090 d\'occasion (24 GB, ~650-750 €, soit ~30 €/Go). RTX 3060 d\'occasion (12 GB, ~150-180 €, soit ~14 €/Go). RTX 4070 Ti (12 GB, ~900 € neuf, soit ~75 €/Go). Meilleur rapport qualité-prix : RTX 3060 12GB d\'occasion. Plus de capacité par euro : RTX 3090 24GB d\'occasion. Équilibre prix + puissance : RTX 4070 neuve.' } },
      ] },
    },
    ja: {
      theme: 'GPU Buying Guides',
      title: 'ローカルLLM向けの最高のバジェットGPU',
      seoTitle: 'RTX 3060 12GB 2026：Qwen3 14Bを9-12トークン/秒',
      intro: '**RTX 3060 12GBはQwen3 14Bを9–12トークン/秒、Qwen3 8Bを16–20トークン/秒、Gemma 4 E12Bを11–14トークン/秒、Mistral Smallを18トークン/秒、DeepSeek-R1 7Bを10–12トークン/秒で実行します — すべてQ4量子化。** (DeepSeekはその後、オープンウェイトの新世代としてDeepSeek-V4—Flash/Pro—をリリースしました。R1/V3は引き続きローカルで利用可能です。) 6GB版は3Bモデルのみ対応。2026年6月時点、RTX 3060 12GB（中古$200–250）はローカルLLM用の最良バジェットGPUです。12GB VRAMはすべての7B-8BモデルをQ4/Q5で、ほとんどの稠密13B-14BモデルをQ4で実行できます。（注：Llama 4 Scoutは17Bアクティブ/109B合計のMoEで、Q4で~55GB必要なため、通常12GBには収まりません。）',
      metaDescription: 'RTX 3060 12GB（中古約2万5千円）はローカルLLMを7種実行：Qwen3 14B（9-12トークン/秒）、Qwen3 8B（16-20トークン/秒）、Gemma 4 E12B、Mistral Small。VRAMと速度の早見表を掲載。',
      nextStep: {
        text: 'GPUは決まりましたか？次はモデルを動かすための最適なソフトウェアを選びましょう。',
        label: 'ローカルLLMベストフロントエンド2026 →',
        href: '/local-llms/best-local-llm-frontends',
      },
      publishDate: '2026-04-05',
      dateModified: '2026-06-19',
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
        'rtx-3060-12gb': { id: 'rtx-3060-12gb', title: 'RTX 3060 12GBで何が動く？', content: ['**RTX 3060 12GBは2026年のローカルLLM用最良バジェットGPUです。** 12GB VRAMはQ4/Q5のすべての7Bモデルと、Q4のほとんどの13Bモデルに対応。モデルサイズ別のVRAM要件について詳しくは、[VRAM要件ガイド →](/ja/local-llms/how-much-vram-local-llm)をご参照ください。期待できる正確なモデルと速度は次の通りです：'], columns: ['モデル', 'サイズ', '量子化', 'VRAM使用', '速度', '最適用途'], rows: [{ 'モデル': 'Qwen3 14B', 'サイズ': '14B（稠密）', '量子化': 'Q4_K_M', 'VRAM使用': '~9 GB', '速度': '9–12トークン/秒', '最適用途': '収まる範囲で最良総合品質' }, { 'モデル': 'Qwen3 8B', 'サイズ': '8B', '量子化': 'Q4_K_M', 'VRAM使用': '~7 GB', '速度': '16–20トークン/秒', '最適用途': 'コーディング、万能' }, { 'モデル': 'Gemma 4 E12B', 'サイズ': '26B MoE', '量子化': 'Q4_K_M', 'VRAM使用': '~9 GB', '速度': '11–14トークン/秒', '最適用途': 'ビジョン、マルチモーダル' }, { 'モデル': 'Mistral Small v0.3', 'サイズ': '7B', '量子化': 'Q4_K_M', 'VRAM使用': '~7 GB', '速度': '18トークン/秒', '最適用途': '指示従行' }, { 'モデル': 'DeepSeek-R1 7B', 'サイズ': '7B', '量子化': 'Q4_K_M', 'VRAM使用': '~7 GB', '速度': '10–12トークン/秒', '最適用途': '推論、数学' }, { 'モデル': 'Gemma 4 E4B', 'サイズ': 'E4B（マルチモーダル）', '量子化': 'Q4_K_M', 'VRAM使用': '~5 GB', '速度': '18–22トークン/秒', '最適用途': '軽量ビジョン、高速チャット' }, { 'モデル': 'Llama 3.2 13B', 'サイズ': '13B', '量子化': 'Q4_K_M', 'VRAM使用': '~11 GB', '速度': '8–10トークン/秒', '最適用途': '高品質チャット（Q4のみ）' }], note: 'Qwen3 14B（稠密）はQ4_K_MでRTX 3060 12GBに快適に収まる最高品質のモデルで、~9 GBを使用します。`ollama pull qwen3:14b`。注：Llama 4 Scout（17Bアクティブ/109B合計のMoE、10Mトークンコンテキスト、マルチモーダル）はQ4で~55GB必要で、通常12GBには収まりません — 大容量VRAM環境向けの長コンテキスト/大規模マルチモーダル用途であり、バジェットGPUの推奨ではありません。gpt-oss:20b（21B合計/3.6BアクティブMoE）は16GB必要なため、12GBカードでは僅かに手が届きません。すべての速度はOllama、RTX 3060 12GB、16GBシステムRAM、Ryzen 7 7700Xで計測。Q4_K_M量子化。速度は±15%変動。' },
        'rtx-3060-6gb': { id: 'rtx-3060-6gb', title: 'RTX 3060 6GBで何が動く？', content: ['**6GB版は大幅に制限されています。** 3Bモデルのみ快適に動作。7BモデルのQ4は~7GB必要で、容量不足です。'], items: ['**Phi-4 Mini 3.8B（Q4）：** ~3GB VRAM、20–25トークン/秒。このサイズでの最良推論。', '**Llama 3.2 3B（Q4）：** ~2.5GB VRAM、25–35トークン/秒。最速オプション。', '**Gemma 2 2B（Q4）：** ~1.7GB VRAM、35–45トークン/秒。最軽量モデル。', '**7Bオフローディング：** 可能だが遅い。Llama 7BのCPUオフロード = ~5–8トークン/秒。', '**推奨：** 6GBカードをお持ちなら、12GB中古（$200–250）にアップグレードを。'] },
        'which-budget-gpus': { title: 'RTX 3060 vs 他のバジェットGPU', columns: ['GPU', 'VRAM', '価格（中古）', '7B速度', '最大モデル', '評価'], rows: [{ 'GPU': 'RTX 3060 12GB ★', 'VRAM': '12 GB', '価格（中古）': '¥30,000–38,000', '7B速度': '15–20トークン/秒', '最大モデル': '13B（Q4）', '評価': '最良バジェット' }, { 'GPU': 'RTX 4060 Ti 8GB', 'VRAM': '8 GB', '価格（中古）': '¥38,000–45,000', '7B速度': '20–25トークン/秒', '最大モデル': '7B（Q5最大）', '評価': '高速だがVRAM少' }, { 'GPU': 'RTX A4000', 'VRAM': '16 GB', '価格（中古）': '¥27,000–35,000', '7B速度': '12–15トークン/秒', '最大モデル': '13B（Q5）', '評価': 'VRAM/円最良' }, { 'GPU': 'RTX 4070 Super', 'VRAM': '12 GB', '価格（中古）': '¥60,000–68,000', '7B速度': '25–30トークン/秒', '最大モデル': '13B（Q5）', '評価': '高速だが2倍の価格' }, { 'GPU': 'RX 6700 XT', 'VRAM': '12 GB', '価格（中古）': '¥23,000–30,000', '7B速度': '10–14トークン/秒', '最大モデル': '13B（Q4）', '評価': '最安、AMDの手間' }], note: 'RTX 3060 12GBが価格性能比で勝利：¥30,000–38,000の12GB VRAMですべての7Bとほとんどの13Bを実行。' },
        'vram-7b': { title: '7Bモデルに必要なVRAMは？', content: ['Q4（4ビット）で量子化された7Bモデルは**6～8GB VRAM**を必要とし、Q5（5ビット）は**8～10GB**、Q8（8ビット）は**14～16GB**を必要とします。', '実際には：**8GBは最低限**で、Q4で7Bモデルでの快適な推論とバッチ処理用のスペースがあります。', '6GBカード（RTX 2060）は技術的に機能しますがアグレッシブな最適化が必要で、より高いバッチに余裕がありません。', 'GPUコストは経済性の一面であり、トークンコストはもう一面です。ローカル推論はAPIのトークン課金を排除しますが、プロンプト長は依然としてレイテンシとスループットに影響します。トークン、価格体系、最適化戦略を含むコスト全体像については、[トークン、コスト、制限：AIプロンプティングの経済学](https://www.promptquorum.com/ja/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)をご覧ください。'] },
        'best-by-use-case': { id: 'best-by-use-case', title: 'RTX 3060でのユースケース別最適モデル', content: ['**パラメータ数ではなく、実際のニーズに基づいてモデルを選択してください：**', 'バジェットハードウェアは小さなモデルを実行しますが、巧みなプロンプティングが品質差を縮めます。[プロンプトエンジニアリングガイド](https://www.promptquorum.com/ja/prompt-engineering)では、Chain-of-Thoughtや構造化出力など、小さなモデルの実力を引き出すテクニックを解説しています。RTX 3060 12 GB の VRAM に収まる具体的なワークロードのひとつが、プルリクエストの自動レビューです。まさに同じハードウェア上で Qwen3 8B を PR にぶつける GitHub Actions のパターンは、[CI/CD でのローカル LLM コードレビュー](/ja/power-local-llm/local-llm-code-review-ci-cd)で解説しています。'], items: ['**チャット / Q&A：** `ollama run qwen3:14b` — 稠密14B、~9GB VRAM、12GBで最良品質。軽量オプションは `ollama run qwen3:8b`（~7GB）。', '**コーディング：** `ollama run qwen3:8b` — 万能で強力なコーディング。~7GB VRAM。16–20トークン/秒。', '**推論 / 数学：** `ollama run deepseek-r1:7b` — Chain-of-Thought。10–12トークン/秒。', '**ライティング / クリエイティブ：** `ollama run mistral:7b` — 最良の指示従行。18トークン/秒。', '**ビジョン / 画像：** `ollama run gemma4:e12b` — マルチモーダル。11–14トークン/秒。~9GB VRAM。軽量な選択肢は `ollama run gemma4:e4b`（~5GB）。', '**プライバシー / オフライン：** 上記すべて。100%ローカル。データは外部送信されません。', '**ホームオートメーション / 常時稼働AI：** `ollama run phi4-mini` — Phi-4 Mini（3.8B、~3 GB VRAM）は専用GPUなしのミニPCでHome Assistantの音声クエリを処理します。[ローカルスマートホームAIの最適ハードウェア →](/smart-home/best-hardware-for-local-smart-home)をご覧ください。'] },
        'used-vs-new': { title: '中古 vs 新品：どこで買う？', items: ['**中古（50～100ドル安い）**：eBay、Facebook Marketplace、Craigslist、地元のコンピュータ修理店。死んだカードまたは不良VRAMのリスクが高い。確約する前に常にテストしてください。', '**新品（280～400ドル）**：Newegg、Amazon、Best Buy、Microcenter。保証付き。驚きなし。価格安定。リスク回避買い手に最適。', '**マイニングカード（暗号、超安い）**：極端なリスク。VRAM劣化は一般的。その場で完全にベンチテストできる場合のみ購入してください。'] },
        'mistakes': { title: 'よくあるバジェットGPUの間違い', items: ['4GB RTX 2060を購入してスムーズな7B推論を期待する。常にメモリ不足エラーが発生します。', '250ドルのGPUを30ドルのPSU（電源）と組み合わせます。電圧サグは安定性を殺します。80+ Gold認定、650W最小をバジェット化してください。', 'DDR5 RAMとi9 CPUがLLM推論を高速化すると想定する。それらは高速化しません。GPU VRAMバンド幅は推論速度に影響する唯一のボトルネックです。'] },
        'nextSteps': {
          id: 'next-steps',
          title: '次のステップ',
          items: [
            '[ローカルLLM向け最高AMD GPU](/ja/local-llms/best-amd-gpus-local-llm) — AMDを検討中？AMD対NVIDIA完全比較 →',
            '[最高オープンソースOllamaモデル](/ja/local-llms/top-open-source-models-ollama) — 予算GPUで最高の性能を出すモデルは →',
            '[必要なVRAMは？](/ja/local-llms/how-much-vram-local-llm) — GPUとモデルサイズを一致させる →',
          ],
        },
        'faqSection': { title: 'よくある質問', faqs: [{ q: 'RTX 3060 12GBは2026年でもまだ価値があるか？', a: 'はい。4年以上前ですが12GB VRAMは時代遅れではありません。Llama 3.3 8Bとよりすぐに実行します。中古で250ドル未満で見つけたら最適。' }, { q: 'ローカルLLM用にRTX 4060またはRTX 4060 Tiを購入すべきか？', a: 'RTX 4060 Ti。ベース4060（8GB）と4070（12GB）は悪い価値です。TiはLLM作業に最適な価格のRTX 40シリーズカードです。' }, { q: 'AMD RX 6700または6800 XTを代わりに使用できるか？', a: 'はい、ただしAMD上のONNX RuntimeのドライバサポートはNVIDIA + CUDAより弱い。セットアップの摩擦を増します。RTXはバジェットにより安全です。' }, { q: '12GB VRAM 13Bモデルに十分か？', a: 'かろうじて、Q4量子化で。Q5またはQ8はOOMエラーを起こします。13Bの快適さが必要な場合は16GBを目指してください。' }, { q: 'RTX A4000などの中古企業GPUを購入すべきか？', a: 'はい、利用可能な場合。16GB VRAM、プロフェッショナルグレード冷却、通常180～230ドルで中古。RTX 3060より若干遅いですがVRAMクッションの価値があります。' }, { q: '250ドルGPUで購入するPSU電力はいくらか？', a: '650W、80+ Gold最小。250ドルGPU + CPU + マザーボード400W以下ですがスパイク用に余裕が必要。' }, { q: '200ドルのバジェットGPUでOllamaを実行できるか？', a: 'はい。Ollamaは軽量です。4年前のRTX 3060にOllamaはMistral Smallを10～15トークン/秒で実行します。完全に使用可能。' }, { q: 'エンタープライズでのGDPR準拠ローカル推論に推奨GPUは？', a: 'Llama 3.3 13B Q4で最大50ユーザーにはRTX 3060 12GBまたはA4000 16GB最小。ECC GPUはエラー検出に推奨。ファームウェア/物理セキュリティはGPUメモリダンプを防止します。' }, { q: '中小企業のチームサーバーに推奨GPUは？', a: '1～50従業員にはRTX 3060 12GBまたはA4000。50～200従業員にはRTX 4070 SuperまたはA6000。RTX 3060はLlama 3.3 13B Q4 + vLLMを3～5同時要求で実行可能。より大規模なチームはA100エンタープライズクラスタリングが必要。' }, { q: 'RTX 3060と4060 Tiのパフォーマンス差は？', a: 'RTX 4060 Tiは約15～20%高速ですが、RTX 3060は4GB追加VRAMがあります。7Bモデルでは両方が快適な推論を提供します。バジェットで選択してください。' }, { q: 'マイニングカードはローカルLLMで安全か？', a: 'リスクあり。VRAMは集約的な運用年後に劣化します。確約前に完全にその場でストレステストできる場合のみ購入してください。' }] },
        'relatedReading': { title: '関連資料', items: ['[ローカルLLMに必要なVRAMはいくらか](/ja/local-llms/how-much-vram-local-llm)', '[コンシューマーハードウェアの70Bモデル](/ja/local-llms/70b-models-consumer-hardware)', '[RTX 5090 vs RTX 4090](/ja/local-llms/rtx-5090-vs-rtx-4090-local-llm)', '[ローカルLLM用の中古GPU](/ja/local-llms/used-gpus-for-local-llms)', '[ローカルLLM向けの最高のGPU](/ja/local-llms/best-gpus-for-local-llms)', '[VRAM計算機](/ja/local-llms/how-much-vram-local-llm)', '[Mac Mini M5ローカルAIサーバーとして](/ja/local-llms/mac-mini-m5-local-ai-server)', '[ローカルLLM向けApple Silicon M5](/ja/local-llms/apple-silicon-m5-local-llm) — M5 Pro/Max完全ガイド：ベンチマーク、Mac構成、メモリ層、ローカル推論用Mac購入ガイド', '[ローカルLLM向けApple Silicon対NVIDIA GPU](/ja/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026)', '[Apple Silicon向けベストモデル2026](/ja/local-llms/best-models-apple-silicon-2026)', '秋葉原の販売店、メルカリ・Yahoo!オークションの中古市場を含む日本のGPU価格については、<a href="/ja/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">日本でコスパ最強のローカルLLM用GPUガイド</a>をご覧ください。', 'UAE（アラブ首長国連邦)・湾岸地域のGPU価格については、Sharaf DG、noon.com、Amazon.aeなどの販売店や中古市場dubizzleを含め、<a href="/ja/prompt-bites/best-gpu-local-llm-uae-price" class="text-primary hover:underline">UAEでコスパ最強のローカルLLM用GPUガイド</a>をご覧ください。'] },
        'sources': { title: 'ソース', items: ['TechPowerUp GPUデータベース：RTX 3060 / RTX 4060 Ti / RTX 4070 Super仕様と電力消費', 'NVIDIA CUDA能力マトリックス：推論ワークロード用GPU メモリバンド幅と理論的スループット', 'Ollama モデル要件：Llama 3.3 7B、Mistral Small、Qwen量子化レベルVRAM推奨'] },
      },
      itemListSchema: { '@context': 'https://schema.org', '@type': 'ItemList', 'url': 'https://www.promptquorum.com/ja/local-llms/best-budget-gpus-local-llm', 'inLanguage': 'ja', name: 'ローカルLLM向けの最高のバジェットGPU', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'RTX 3060 12GB（中古200～250ドル）は7B～13Bモデルの最高の全体的なバジェット選択肢です。' }, { '@type': 'ListItem', position: 2, name: 'RTX 4060 Ti 8GB（280～320ドル）は新しいテクノロジーと優れた効率を提供しますがVRAMは少なくなります。' }, { '@type': 'ListItem', position: 3, name: 'ローカルLLM用に2GBまたは4GBカードを決して購入しないでください。快適な推論のための最小限のVRAMは8GBです。' }, { '@type': 'ListItem', position: 4, name: '中古企業GPU（RTX A2000、RTX A4000）は150～250ドルで優れた12GB～16GBVRAMを提供します。' }, { '@type': 'ListItem', position: 5, name: 'ボトルネック回避のためGPUに300～400ドル、残りのシステム（CPU、RAM、SSD）に400～500ドルを予算化します。' }, { '@type': 'ListItem', position: 6, name: 'バジェットGPUではDDR5 RAMとハイエンドCPUを避けてください。これらはLLM速度を向上させません。' }], regionalContext: { title: '地域採用とコンプライアンスコンテキスト', content: ['**日本のGPU市場は世界市場と異なる価格設定です。** 輸入関税、小売マージン、限定的なエンタープライズGPU在庫は調達タイムラインに影響します。日本の組織はコンシューマー小売ではなくエンタープライズチャネルを通じて調達します。コンパクトワークステーションに適合する省スペースGPUが優先されます。', '**アジア太平洋地域（APAC）では、企業はローカルGPU供給と支援を優先しています。** 中国、韓国、シンガポールは独立したGPUデータセンターインフラストラクチャを開発しています。PromptQuorumは地域組織がローカルハードウェアオプションを評価するのに役立ちます。', '**北米GPU調達は製造業者との直接関係と競争力のある価格から恩恵を受けます。** エンタープライズ顧客はNVIDIAサポートとボリュームディスカウントにアクセスしています。コンシューマーGPU（RTX 4060～4090）は小規模チーム向けに幅広く利用可能です。PromptQuorumは大規模購入前に候補GPUでのベンチマークを有効にします。'] } },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://www.promptquorum.com/ja/local-llms/best-budget-gpus-local-llm',
        'mainEntity': [
          { '@type': 'Question', 'name': 'RTX 3060 12GBは2026年でも買う価値がありますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。4年以上前ですが、12GB VRAMは時代遅れになりません。Llama 3.3 8BとMistral Smallを滑らかに実行できます。中古で¥37,500未満で見つかれば買いです。' } },
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
      seoTitle: 'RTX 3060 12GB 2026：Qwen3 14B跑9-12令牌/秒',
      intro: '**RTX 3060 12GB以9–12令牌/秒运行Qwen3 14B，以16–20令牌/秒运行Qwen3 8B，以11–14令牌/秒运行Gemma 4 E12B，以18令牌/秒运行Mistral Small，以10–12令牌/秒运行DeepSeek-R1 7B——均为Q4量化。** (DeepSeek 此后发布了开源权重新一代模型 DeepSeek-V4——Flash/Pro;R1/V3 仍可在本地正常使用。) 6GB版本仅限3B模型。截至2026年6月，RTX 3060 12GB（二手$200–250）仍是本地LLM最佳预算GPU。12GB VRAM以Q4/Q5适配所有7B-8B模型，以Q4适配大部分密集13B-14B模型。（注：Llama 4 Scout是17B激活/109B总计的MoE，Q4下需要~55GB，通常无法装入12GB。）',
      metaDescription: 'RTX 3060 12GB（二手约1400-1800元）可跑7款本地LLM：Qwen3 14B（9-12令牌/秒）、Qwen3 8B（16-20令牌/秒）、Gemma 4 E12B、Mistral Small。附完整VRAM与速度对照表。',
      nextStep: {
        text: '选好GPU了？现在选择合适的软件来运行模型。',
        label: '最佳本地LLM前端2026 →',
        href: '/local-llms/best-local-llm-frontends',
      },
      publishDate: '2026-04-05',
      dateModified: '2026-06-19',
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
            { '模型': 'Mistral Small v0.3', '大小': '7B', '量化': 'Q4_K_M', 'VRAM占用': '~7 GB', '速度': '18令牌/秒', '最适合': '指令遵循' },
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
            '**智能家居 / 常驻AI：** `ollama run phi4-mini` — Phi-4 Mini（3.8B，~3 GB VRAM）可在无独显的迷你PC上处理Home Assistant语音查询。参阅[本地智能家居AI最佳硬件 →](/smart-home/best-hardware-for-local-smart-home)。',
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
        'nextSteps': {
          id: 'next-steps',
          title: '下一步',
          items: [
            '[本地LLM最佳AMD GPU](/zh/local-llms/best-amd-gpus-local-llm) — 考虑AMD？AMD vs NVIDIA完整对比 →',
            '[最佳开源Ollama模型](/zh/local-llms/top-open-source-models-ollama) — 哪些模型在预算GPU上表现最佳 →',
            '[我需要多少VRAM？](/zh/local-llms/how-much-vram-local-llm) — 根据模型大小选择合适的GPU →',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: '常见问题',
          faqs: [
            { q: 'RTX 3060 12GB在2026年还值得买吗？', a: '是的。它已有4年多，但12GB VRAM永不过时。平稳运行Llama 3.3 8B和Mistral Small。如果能找到二手250美元以下的就买。' },
            { q: '对于本地LLM我应该买RTX 4060还是RTX 4060 Ti？', a: 'RTX 4060 Ti。基础4060（8GB）和4070（12GB）价值不好。Ti是LLM工作最佳定价的RTX 40系列显卡。' },
            { q: '我可以用AMD RX 6700或6800 XT代替吗？', a: '可以，但AMD上ONNX Runtime驱动支持弱于NVIDIA + CUDA。预计更多设置摩擦。RTX对预算更安全。' },
            { q: '12GB VRAM够13B模型吗？', a: '勉强，在Q4量化下。Q5或Q8会导致OOM错误。如果需要13B的舒适运行，目标16GB。' },
            { q: '我应该买二手企业GPU如RTX A4000吗？', a: '是的，如果有的话。16GB VRAM、专业级冷却、通常二手180-230美元。比RTX 3060稍慢，但VRAM缓冲值得。' },
            { q: '250美元GPU配什么功率PSU？', a: '650W、80+ Gold最小。250美元GPU + CPU + 主板不超过400W，但你想要尖峰余量。' },
            { q: '我能用200美元预算GPU运行Ollama吗？', a: '能。Ollama很轻。4年前RTX 3060配Ollama运行Mistral Small 10-15令牌/秒----完全可用。' },
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
            '如需阿联酋及海湾地区GPU价格，包括Sharaf DG、noon.com、Amazon.ae等零售商及二手市场dubizzle，请参阅<a href="/zh/prompt-bites/best-gpu-local-llm-uae-price" class="text-primary hover:underline">阿联酋本地LLM性价比最高GPU指南</a>。',
          ],
        },
        'sources': {
          title: '来源',
          items: [
            'TechPowerUp GPU数据库：RTX 3060 / RTX 4060 Ti / RTX 4070 Super规格和功耗',
            'NVIDIA CUDA能力矩阵：推理工作负载的GPU内存带宽和理论吞吐量',
            'Ollama模型要求：Llama 3.3 7B、Mistral Small和Qwen量子化级别的VRAM建议',
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
          { '@type': 'Question', 'name': 'RTX 3060 12GB在2026年还值得买吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是的。它已有4年多，但12GB VRAM永不过时。平稳运行Llama 3.3 8B和Mistral Small。如果能找到二手250美元以下的就买。' } },
          { '@type': 'Question', 'name': '对于本地LLM我应该买RTX 4060还是RTX 4060 Ti？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 4060 Ti。基础4060（8GB）和4070（12GB）价值不好。Ti是LLM工作最佳定价的RTX 40系列显卡。' } },
          { '@type': 'Question', 'name': '我可以用AMD RX 6700或6800 XT代替吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以，但AMD上ONNX Runtime驱动支持弱于NVIDIA + CUDA。预计更多设置摩擦。RTX对预算更安全。' } },
          { '@type': 'Question', 'name': '12GB VRAM够13B模型吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '勉强，在Q4量化下。Q5或Q8会导致OOM错误。如果需要13B的舒适运行，目标16GB。' } },
          { '@type': 'Question', 'name': '我应该买二手企业GPU如RTX A4000吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是的，如果有的话。16GB VRAM、专业级冷却、通常二手180-230美元。比RTX 3060稍慢，但VRAM缓冲值得。' } },
          { '@type': 'Question', 'name': '250美元GPU配什么功率PSU？', 'acceptedAnswer': { '@type': 'Answer', 'text': '650W、80+ Gold最小。250美元GPU + CPU + 主板不超过400W，但你想要尖峰余量。' } },
          { '@type': 'Question', 'name': '我能用200美元预算GPU运行Ollama吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '能。Ollama很轻。4年前RTX 3060配Ollama运行Mistral Small 10-15令牌/秒----完全可用。' } },
          { '@type': 'Question', 'name': '企业GDPR合规本地推理推荐什么GPU？', 'acceptedAnswer': { '@type': 'Answer', 'text': '最少RTX 3060 12GB或A4000 16GB最多50用户运行Llama 3.3 13B Q4。ECC GPU推荐错误检测。固件/物理安全防止GPU内存转储。' } },
          { '@type': 'Question', 'name': '中小企业团队服务器推荐什么GPU？', 'acceptedAnswer': { '@type': 'Answer', 'text': '1-50员工RTX 3060 12GB或A4000。50-200员工RTX 4070 Super或A6000。RTX 3060可运行Llama 3.3 13B Q4 + vLLM 3-5同时请求。更大团队需A100企业集群。' } },
          { '@type': 'Question', 'name': 'RTX 3060和4060 Ti的性能差异？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 4060 Ti快约15-20%，但RTX 3060有4GB额外VRAM。两者在7B模型上提供舒适推理；按预算选择。' } },
          { '@type': 'Question', 'name': '矿卡对本地LLM安全吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '有风险。VRAM在多年密集运行后退化。只有能在现场完全压力测试时才购买。' } },
        ],
      },
    },
  ko: {
      freshness_tier: 'monthly',
      next_seo_review_due: '2026-07-01',
      next_refresh_due: '2026-06-30',
      last_full_refresh: '2026-06-01',
      current_models_mentioned: ['Qwen3 8B', 'Qwen3 14B', 'Gemma 4 E12B', 'Gemma 4 E4B', 'Mistral Small', 'DeepSeek-R1 7B', 'gpt-oss:20b'],
      theme: 'GPU 구매 가이드',
      title: '2026 로컬 LLM 최고의 예산형 GPU: RTX 3060 12GB',
      seoTitle: 'RTX 3060 12GB: 2026년 로컬 LLM 최고의 예산형 GPU',
      intro: '**RTX 3060 12GB는 Q4 양자화 기준으로 Qwen3 14B를 초당 9–12토큰, Qwen3 8B를 초당 16–20토큰, Gemma 4 E12B를 초당 11–14토큰, Mistral Small을 초당 18토큰, DeepSeek-R1 7B를 초당 10–12토큰으로 실행합니다.** (DeepSeek는 이후 오픈 웨이트 신세대 모델인 DeepSeek-V4—Flash/Pro—를 출시했습니다. R1/V3는 계속 로컬에서 사용할 수 있습니다.) 6GB 버전은 3B 모델만 실행 가능합니다. 2026년 6월 현재, RTX 3060 12GB(중고 $200–250)는 로컬 LLM용 최고의 예산형 GPU로 자리잡고 있습니다. 12GB VRAM은 Q4/Q5로 모든 7B-8B 모델과 대부분의 밀집형 13B-14B 모델을 Q4로 실행할 수 있습니다. (참고: Llama 4 Scout는 활성 파라미터 17B/총 109B의 MoE 모델로 Q4에서 약 55GB가 필요하므로 12GB에서는 일반적으로 실행되지 않습니다.) 이 가이드는 각 VRAM 등급에서 실행 가능한 모델과 실측 속도, 실용적인 설정 방법을 상세히 안내합니다.',
      metaDescription: 'RTX 3060 12GB: Qwen3 8B(초당 16-20토큰), Qwen3 14B(초당 9-12토큰), Gemma 4 E12B, Mistral Small, DeepSeek-R1. VRAM 및 속도 벤치마크를 포함한 전체 모델 표.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**RTX 3060 12GB는 Qwen3 14B를 초당 9–12토큰, Qwen3 8B를 초당 16–20토큰, Gemma 4 E12B를 초당 11–14토큰, Mistral Small을 초당 18토큰, DeepSeek-R1 7B를 초당 10–12토큰으로 실행합니다. 6GB 버전은 3B 모델만 처리 가능합니다. 2026년 중고 $200–250에 구매할 수 있는 로컬 LLM용 최고의 예산형 GPU입니다.**',
      nextStep: {
        text: 'GPU를 준비하셨습니까? 이제 모델 실행에 적합한 소프트웨어를 선택하십시오.',
        label: '2026년 최고의 로컬 LLM 프론트엔드 →',
        href: '/local-llms/best-local-llm-frontends',
      },
      audience: '소비자용 하드웨어에서 처음으로 로컬 LLM을 실행하는 입문자',
      readTime: '7분 분량',
      educationalLevel: 'Beginner',
      primaryTerm: '예산형 GPU',
      toc: [
        { label: '요약', anchor: '#tldr' },
        { label: 'RTX 3060 12GB에서 실행 가능한 모델은?', anchor: '#rtx-3060-12gb' },
        { label: 'RTX 3060 6GB에서 실행 가능한 모델은?', anchor: '#rtx-3060-6gb' },
        { label: 'RTX 3060 대 다른 예산형 GPU 비교', anchor: '#which-budget-gpus' },
        { label: '7B 모델에 필요한 VRAM 용량은?', anchor: '#vram-7b' },
        { label: 'RTX 3060에서 용도별 최적 모델', anchor: '#best-by-use-case' },
        { label: '중고 vs. 신품: 어디서 구매해야 할까?', anchor: '#used-vs-new' },
        { label: '예산형 GPU 구매 시 흔한 실수', anchor: '#mistakes' },
        { label: '자주 묻는 질문', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**예산별 추천:** $200 미만 — RX 6700 XT 12GB($150–200, 가장 저렴, AMD 설정 번거로움) 또는 $230 미만이면 RTX A4000 16GB(달러당 최고의 VRAM). ~$250 — RTX 3060 12GB(종합 최고). $500 미만 — RTX 4070 Super 12GB(가장 빠름, 초당 25–30토큰).',
            '**RTX 3060 12GB** (중고 $200–250): Q4/Q5로 모든 7B-8B 모델과 대부분의 밀집형 13B-14B 모델을 Q4로 실행합니다. 최고의 예산형 선택입니다.',
            '**RTX 3060 6GB**: 3B 모델(Phi-4 Mini, Llama 3.2 3B)만 지원합니다. 7B 모델에는 용량이 부족합니다.',
            '**12GB 최고의 전체 모델:** Qwen3 14B (~9GB VRAM, 초당 9–12토큰). 편안하게 실행 가능한 최고 품질의 밀집형 모델입니다.',
            '**12GB 최고의 코딩 모델:** Qwen3 8B (초당 16–20토큰).',
            '**12GB 최고의 추론 모델:** DeepSeek-R1 7B (초당 10–12토큰). 연쇄 사고(Chain-of-thought) 지원.',
            '**이 GPU가 적합하지 않은 경우:** 70B 모델, Llama 4 Scout(~55GB 필요), 또는 13B Q8 실행을 원하신다면 24GB 이상(RTX 4090)이 필요합니다.',
          ],
        },
        'rtx-3060-12gb': {
          id: 'rtx-3060-12gb',
          title: 'RTX 3060 12GB에서 실행 가능한 모델은?',
          content: [
            '**RTX 3060 12GB는 2026년 로컬 LLM용 최고의 예산형 GPU입니다.** 12GB VRAM은 Q4/Q5 양자화로 모든 7B 모델과 대부분의 13B 모델을 Q4로 실행할 수 있습니다. 모델 크기별 VRAM 요구 사항에 대한 자세한 안내는 [VRAM 요구 사항 가이드 →](/local-llms/how-much-vram-local-llm)를 참조하십시오. 실행 가능한 정확한 모델과 예상 속도는 다음과 같습니다:',
          ],
          columns: ['모델', '크기', '양자화', 'VRAM 사용량', '속도', '최적 용도'],
          rows: [
            { '모델': 'Qwen3 14B', '크기': '14B (밀집형)', '양자화': 'Q4_K_M', 'VRAM 사용량': '~9 GB', '속도': '초당 9–12토큰', '최적 용도': '실행 가능한 최고 품질' },
            { '모델': 'Qwen3 8B', '크기': '8B', '양자화': 'Q4_K_M', 'VRAM 사용량': '~7 GB', '속도': '초당 16–20토큰', '최적 용도': '코딩, 범용' },
            { '모델': 'Gemma 4 E12B', '크기': '26B MoE', '양자화': 'Q4_K_M', 'VRAM 사용량': '~9 GB', '속도': '초당 11–14토큰', '최적 용도': '비전, 멀티모달' },
            { '모델': 'Mistral Small v0.3', '크기': '7B', '양자화': 'Q4_K_M', 'VRAM 사용량': '~7 GB', '속도': '초당 18토큰', '최적 용도': '명령어 따르기' },
            { '모델': 'DeepSeek-R1 7B', '크기': '7B', '양자화': 'Q4_K_M', 'VRAM 사용량': '~7 GB', '속도': '초당 10–12토큰', '최적 용도': '추론, 수학' },
            { '모델': 'Gemma 4 E4B', '크기': 'E4B (멀티모달)', '양자화': 'Q4_K_M', 'VRAM 사용량': '~5 GB', '속도': '초당 18–22토큰', '최적 용도': '경량 비전, 빠른 채팅' },
            { '모델': 'Llama 3.2 13B', '크기': '13B', '양자화': 'Q4_K_M', 'VRAM 사용량': '~11 GB', '속도': '초당 8–10토큰', '최적 용도': '고품질 채팅 (Q4 전용, 빡빡한 구성)' },
          ],
          note: 'Qwen3 14B (밀집형)은 Q4_K_M으로 약 9GB를 사용하여 RTX 3060 12GB에서 가장 편안하게 실행되는 최고 품질의 모델입니다. `ollama pull qwen3:14b`. 참고: Llama 4 Scout (활성 파라미터 17B / 총 109B MoE, 1000만 토큰 컨텍스트, 멀티모달)는 Q4에서 약 55GB VRAM이 필요하므로 12GB 카드에서는 일반적으로 실행되지 않습니다. 이 모델은 고VRAM 시스템을 위한 장문 컨텍스트/대형 멀티모달 선택지입니다. gpt-oss:20b (총 21B / 활성 3.6B MoE)는 16GB가 필요하므로 12GB 카드에서는 실행이 불가능합니다. 모든 속도는 RTX 3060 12GB, 시스템 RAM 16GB, Ryzen 7 7700X 환경에서 Ollama로 측정되었습니다. Q4_K_M 양자화 기준이며, 프롬프트 길이 및 컨텍스트 창에 따라 ±15% 차이가 발생할 수 있습니다.',
        },
        'rtx-3060-6gb': {
          id: 'rtx-3060-6gb',
          title: 'RTX 3060 6GB에서 실행 가능한 모델은?',
          content: [
            '**6GB 버전은 심각하게 제한적입니다.** 3B 모델만 편안하게 실행 가능합니다. Q4의 7B 모델은 약 7GB가 필요하므로 용량이 부족합니다. CPU 오프로딩은 가능하지만 속도가 50–70% 저하됩니다.',
          ],
          items: [
            '**Phi-4 Mini 3.8B (Q4):** ~3GB VRAM, 초당 20–25토큰. 이 크기에서 최고의 추론 성능. 수학과 논리에 강합니다.',
            '**Llama 3.2 3B (Q4):** ~2.5GB VRAM, 초당 25–35토큰. 가장 빠른 옵션. 단순 채팅과 Q&A에 적합합니다.',
            '**Gemma 2 2B (Q4):** ~1.7GB VRAM, 초당 35–45토큰. 가장 경량의 모델. 설정 테스트에 적합합니다.',
            '**CPU 오프로딩을 통한 7B 실행:** 가능하지만 느립니다. CPU 오프로드를 사용한 Llama 7B = 초당 ~5–8토큰. 비대화형 배치 작업에만 실용적입니다.',
            '**권장 사항:** 6GB 카드를 보유하고 있다면 우회 방법에 시간을 투자하기 전에 중고 12GB 카드($200–250)로 업그레이드하십시오. 속도와 모델 품질 향상이 충분한 가치를 제공합니다.',
          ],
        },
        'which-budget-gpus': {
          id: 'which-budget-gpus',
          title: 'RTX 3060 대 다른 예산형 GPU 비교',
          columns: ['GPU', 'VRAM', '가격 (중고)', '7B 속도', '최대 모델', '평가'],
          rows: [
            { 'GPU': 'RTX 3060 12GB ★', 'VRAM': '12 GB', '가격 (중고)': '$200–250', '7B 속도': '초당 15–20토큰', '최대 모델': '13B (Q4)', '평가': '전체 최고 예산형' },
            { 'GPU': 'RTX 4060 Ti 8GB', 'VRAM': '8 GB', '가격 (중고)': '$250–300', '7B 속도': '초당 20–25토큰', '최대 모델': '7B (Q5 최대)', '평가': '더 빠르지만 VRAM 부족' },
            { 'GPU': 'RTX A4000', 'VRAM': '16 GB', '가격 (중고)': '$180–230', '7B 속도': '초당 12–15토큰', '최대 모델': '13B (Q5)', '평가': '달러당 최고 VRAM' },
            { 'GPU': 'RTX 4070 Super', 'VRAM': '12 GB', '가격 (중고)': '$400–450', '7B 속도': '초당 25–30토큰', '최대 모델': '13B (Q5)', '평가': '더 빠르지만 가격 2배' },
            { 'GPU': 'RX 6700 XT', 'VRAM': '12 GB', '가격 (중고)': '$150–200', '7B 속도': '초당 10–14토큰', '최대 모델': '13B (Q4)', '평가': '가장 저렴하지만 AMD 설정 복잡' },
          ],
          note: 'RTX 3060 12GB는 가성비에서 앞섭니다. $200–250에 12GB VRAM으로 모든 7B 모델과 대부분의 13B 모델을 실행할 수 있습니다. RTX A4000을 $230 이하에 구할 수 있다면 좋은 차선책입니다.',
        },
        'vram-7b': {
          title: '7B 모델에 필요한 VRAM 용량은?',
          content: [
            '**Q4(4비트)로 양자화된 7B 모델은 6-8GB VRAM이 필요하고, Q5(5비트)는 8-10GB, Q8(8비트)는 14-16GB가 필요합니다.**',
            '실제로 **8GB는 최소 요구 사항입니다.** Q4로 7B 모델을 편안하게 실행하고 배치 처리를 위한 여유 공간을 확보하려면 8GB가 필요합니다.',
            '6GB 카드(RTX 2060)도 기술적으로 작동하지만 적극적인 최적화가 필요하고 더 높은 배치를 위한 여유 공간이 없습니다.',
            '8GB 미만의 VRAM으로 제한된 경우에도 로컬 LLM을 효과적으로 실행할 수 있습니다 — **[4–8 GB 하드웨어를 위한 속도 최적화 모델 보기](/local-llms/fastest-local-llms-low-end-pcs)**.',
            'GPU 비용은 경제성의 한 측면이며 토큰 비용은 또 다른 측면입니다. 로컬 추론은 토큰당 API 요금을 없애지만 프롬프트 길이는 여전히 지연 시간과 처리량에 영향을 미칩니다. 토큰, 가격 정책, 최적화 전략을 포함한 전체 비용 구조는 [토큰, 비용 및 한계: AI 프롬프팅의 경제학](https://www.promptquorum.com/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)을 참조하십시오.',
          ],
        },
        'best-by-use-case': {
          id: 'best-by-use-case',
          title: 'RTX 3060에서 용도별 최적 모델',
          content: [
            '**파라미터 수가 아닌 실제 필요에 맞는 모델을 선택하십시오.** RTX 3060 12GB에서 각 용도에 맞는 최선의 선택은 다음과 같습니다:',
            '예산형 하드웨어는 소형 모델을 실행하지만 숙련된 프롬프팅으로 품질 격차를 좁힐 수 있습니다. [프롬프트 엔지니어링 가이드](https://www.promptquorum.com/prompt-engineering)에서는 소형 모델이 성능을 발휘할 수 있도록 도와주는 연쇄 사고 및 구조화된 출력과 같은 기법을 다룹니다. RTX 3060 12GB 등급에 적합한 실제 작업 부하로는 자동화된 풀 리퀘스트 검토가 있습니다. 이 정확한 하드웨어에서 Qwen3 8B를 PR에 실행하는 GitHub Actions 패턴은 [로컬 LLM CI/CD 코드 리뷰](/power-local-llm/local-llm-code-review-ci-cd)를 참조하십시오.',
          ],
          items: [
            '**채팅 / Q&A:** `ollama run qwen3:14b` — 밀집형 14B, ~9GB VRAM, 12GB에서 최고 품질. 경량 옵션: `ollama run qwen3:8b` (~7GB).',
            '**코딩:** `ollama run qwen3:8b` — 뛰어난 범용 코딩 성능. ~7GB VRAM. 초당 16–20토큰.',
            '**추론 / 수학:** `ollama run deepseek-r1:7b` — 연쇄 사고 추론. 초당 10–12토큰. 속도는 느리지만 다단계 문제에서 정확도가 크게 향상됩니다.',
            '**작문 / 창작:** `ollama run mistral:7b` — 최고의 명령어 따르기 성능. 초당 18토큰. 깔끔하고 구조화된 출력. 초안 작성과 재작성에 적합합니다.',
            '**비전 / 이미지:** `ollama run gemma4:e12b` — 멀티모달(이미지 입력 가능). 초당 11–14토큰. ~9GB VRAM 사용. 경량 옵션: `ollama run gemma4:e4b` (~5GB). 사진 설명, 스크린샷 읽기, 차트 분석에 활용하십시오.',
            '**프라이버시 / 오프라인:** 위의 모든 모델 사용 가능. 100% 로컬 실행. 데이터가 외부로 전송되지 않습니다. 모델 다운로드 후 인터넷 불필요.',
            '**홈 자동화 / 항상 켜진 AI:** `ollama run phi4-mini` — Phi-4 Mini (3.8B, ~3GB VRAM)는 별도의 GPU 없이 미니 PC에서 Home Assistant 음성 쿼리를 처리합니다. [로컬 스마트홈 최고의 하드웨어 →](/smart-home/best-hardware-for-local-smart-home) 참조.',
          ],
        },
        'used-vs-new': {
          title: '중고 vs. 신품: 어디서 구매해야 할까?',
          items: [
            '**중고 ($50-100 저렴)**: eBay, Facebook Marketplace, Craigslist, 로컬 컴퓨터 수리점. 불량 카드 또는 VRAM 결함 위험이 높습니다. 구매 전 반드시 테스트하십시오.',
            '**신품 ($280-400)**: Newegg, Amazon, Best Buy, Microcenter. 보증 포함. 예상치 못한 문제 없음. 가격 안정적. 위험 회피형 구매자에게 적합합니다.',
            '**채굴 카드 (암호화폐, 매우 저렴)**: 극도로 위험합니다. VRAM 열화가 흔합니다. 현장에서 완전한 벤치마크 테스트가 가능한 경우에만 구매하십시오.',
          ],
        },
        'mistakes': {
          title: '예산형 GPU 구매 시 흔한 실수',
          items: [
            '4GB RTX 2060을 구매하고 원활한 7B 추론을 기대하는 경우 — 메모리 부족 오류가 계속 발생합니다.',
            '$250 GPU에 $30짜리 전원 공급 장치(PSU) 조합 — 전압 저하가 안정성을 해칩니다. 650W 이상, 80+ Gold 인증 제품을 사용하십시오.',
            'DDR5 RAM과 i9 CPU 속도가 LLM 추론을 빠르게 한다고 가정하는 경우 — 그렇지 않습니다. 추론 속도에서 유일하게 중요한 병목은 GPU VRAM 대역폭입니다.',
            'Llama 4 Scout가 12GB에 맞다고 가정하는 경우. Scout는 활성 파라미터 17B / 총 109B의 MoE로 Q4에서 약 55GB가 필요합니다(24GB에서 1.78비트로만 실행 가능, ~초당 20토큰). RTX 3060 12GB에서는 밀집형 모델을 실행하십시오: Qwen3 14B (~9GB), Qwen3 8B, 또는 Gemma 4 E12B.',
            '13B 모델만을 위해 16GB 카드를 구매하는 경우. RTX 3060 12GB는 이미 Qwen3 14B를 Q4로 실행합니다. gpt-oss:20b (16GB), 밀집형 20B+ 모델, 또는 더 많은 컨텍스트 여유 공간이 구체적으로 필요한 경우에만 16GB로 업그레이드하십시오.',
          ],
        },
        'nextSteps': {
          id: 'next-steps',
          title: '다음 단계',
          items: [
            '[로컬 LLM 최고 AMD GPU](/ko/local-llms/best-amd-gpus-local-llm) — AMD 고려 중? AMD vs NVIDIA 완전 비교 →',
            '[최고 오픈소스 Ollama 모델](/ko/local-llms/top-open-source-models-ollama) — 예산 GPU에서 최고 성능 모델은 →',
            '[필요한 VRAM은 얼마나?](/ko/local-llms/how-much-vram-local-llm) — GPU와 모델 크기 맞추기 →',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            { q: 'RTX 3060 12GB는 2026년에도 구매할 가치가 있습니까?', a: '예. 4년 이상 된 제품이지만 12GB VRAM은 여전히 유효합니다. Q4로 Qwen3 14B, Qwen3 8B, Gemma 4 E12B, Mistral Small을 원활하게 실행합니다. 모든 7B-8B 모델과 대부분의 밀집형 13B-14B 모델에 적합합니다.' },
            { q: '로컬 LLM에 RTX 5060 Ti와 RTX 4060 Ti 중 어느 것을 구매해야 합니까?', a: 'RTX 5060 Ti를 권장합니다. 최신 세대(2026)는 10-15% 더 나은 성능을 제공합니다. 예산이 제한적인 경우 RTX 4060 Ti도 훌륭한 선택입니다. 기본형 4060/5060(8GB)과 4070(12GB)은 가성비가 낮으므로 피하십시오.' },
            { q: 'AMD RX 7900 XT 또는 RX 7900 XTX를 대안으로 사용할 수 있습니까?', a: '예, 하지만 AMD의 드라이버 지원은 NVIDIA + CUDA보다 약합니다. HIP/ROCm 설정에는 더 많은 노력이 필요합니다. 초보자에게는 RTX가 더 안전합니다.' },
            { q: '12GB VRAM은 13B 모델에 충분합니까?', a: 'Q4 양자화로는 간신히 가능합니다. Q5 또는 Q8은 메모리 부족 오류를 유발합니다. 13B 모델을 편안하게 실행하려면 16GB를 목표로 하십시오.' },
            { q: 'RTX A4000 같은 중고 엔터프라이즈 GPU를 구매해야 합니까?', a: '가능하다면 예. 16GB VRAM, 전문가급 냉각 시스템, 중고 가격 $180-230. RTX 3060보다 약간 느리지만 VRAM 여유 공간이 가치 있습니다.' },
            { q: '$250 GPU 구매 시 PSU 와트 수는 얼마나 필요합니까?', a: '650W, 80+ Gold 최소 사양. $250 GPU + CPU + 마더보드의 소비 전력은 400W를 넘지 않지만 전압 스파이크를 위한 여유 공간이 필요합니다.' },
            { q: '$200 예산형 GPU로 Ollama를 실행할 수 있습니까?', a: '예. Ollama는 경량입니다. 4년 된 RTX 3060에 Ollama를 설치하면 Qwen3 14B를 초당 9-12토큰, Qwen3 8B를 초당 16-20토큰으로 실행할 수 있습니다 — 대화형 채팅과 코딩 지원에 완전히 실용적입니다.' },
            { q: 'RTX 3060 12GB에서 Llama 4 Scout를 실행할 수 있습니까?', a: '일반적으로는 불가능합니다. Llama 4 Scout는 활성 파라미터 17B / 총 109B의 MoE로 Q4에서 약 55GB VRAM이 필요하며 — 12GB 카드의 용량을 훨씬 초과합니다. 극단적인 1.78비트 양자화로만 24GB에서 실행 가능합니다(~초당 20토큰). RTX 3060 12GB에서는 대신 밀집형 모델을 실행하십시오: `ollama pull qwen3:14b`(실행 가능한 최고 품질), Qwen3 8B, 또는 Gemma 4 E12B. Scout는 48GB 이상 시스템을 위한 장문 컨텍스트(1000만 토큰)/대형 멀티모달 모델입니다.' },
          ],
        },
        'relatedReading': {
          title: '관련 자료',
          items: [
            '[AMD Ryzen AI Max+ 미니 PC (2026)](/local-llms/best-amd-mini-pc-local-llm-2026) — 별도 GPU의 대안: iGPU + 50 TOPS NPU, $1,200–2,500.',
            '[로컬 LLM에 필요한 VRAM 용량](/local-llms/how-much-vram-local-llm)',
            '[RTX 5090 vs RTX 4090](/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[로컬 LLM용 중고 GPU](/local-llms/used-gpus-for-local-llms)',
            '[로컬 LLM용 최고의 GPU](/local-llms/best-gpus-for-local-llms)',
            '[VRAM 계산기](/local-llms/vram-calculator-local-llm)',
            '[로컬 LLM: 노트북 vs 데스크탑](/local-llms/laptop-vs-desktop-local-llm) — GPU 데스크탑 vs MacBook 전체 플랫폼 비교.',
            '[로컬 LLM을 위한 프롬프트 엔지니어링](/local-llms/prompt-engineering-for-local-models) — 예산형 하드웨어에서 실행되는 모델을 위한 프롬프트 최적화.',
            '[연쇄 사고 프롬프팅](/prompt-engineering/chain-of-thought-prompting) — DeepSeek-R1 출력 품질을 크게 향상시킵니다.',
            '[로컬 AI 서버로서의 Mac Mini M5](/local-llms/mac-mini-m5-local-ai-server) — GPU 빌드의 예산형 대안: $599 하드웨어 + 연간 $35 전기 요금으로 항상 켜진 AI.',
            '[로컬 LLM을 위한 Apple Silicon M5](/local-llms/apple-silicon-m5-local-llm) — M5 Pro/Max 완전 가이드: 벤치마크, Mac 구성, 메모리 등급, 로컬 추론을 위한 최적 Mac 선택.',
            '[로컬 LLM: Apple Silicon vs NVIDIA GPU](/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — 전체 비용 및 성능 비교: Mac이 예산형 GPU를 능가하는 경우.',
            '[2026년 Apple Silicon 최고의 모델](/local-llms/best-models-apple-silicon-2026) — 16GB–128GB 통합 메모리 등급별 모델 권장 사항.',
            '[Melhores GPUs Econômicas para LLMs Locais (Português)](/pt/local-llms/best-budget-gpus-local-llm) — versão em português deste guia',
            '일본 특화 GPU 가격, 아키하바라 소매점 및 메르카리·야후 옥션의 중고 시장 정보는 <a href="/ko/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">일본 로컬 LLM 최고 가성비 GPU 가이드</a>를 참조하십시오.',
            'UAE 및 걸프 지역 GPU 가격, Sharaf DG·noon.com·Amazon.ae 소매점 및 중고 시장 dubizzle 정보는 <a href="/ko/prompt-bites/best-gpu-local-llm-uae-price" class="text-primary hover:underline">UAE 로컬 LLM 최고 가성비 GPU 가이드</a>를 참조하십시오.',
          ],
        },
        'sources': {
          title: '출처',
          items: [
            'Meta AI. (2025). "Llama 4 Model Card." — Scout MoE 아키텍처, VRAM 요구 사항',
            'Qwen Team. (2026). "Qwen3 Technical Report." — Qwen3 8B 사양',
            'TechPowerUp GPU 데이터베이스: RTX 3060 / RTX 4060 Ti / RTX 4070 Super 사양 및 소비 전력',
            'NVIDIA CUDA 호환성 매트릭스: 추론 작업 부하를 위한 GPU 메모리 대역폭 및 이론적 처리량',
            'Ollama 모델 요구 사항: Llama 4 Scout, Qwen3, Mistral Small 양자화 수준에 대한 VRAM 권장 사항',
            '규정 준수 프레임워크에는 감사 가능한 워크플로우가 필요합니다. AI 프롬프트 품질 및 검토를 위한 거버넌스 표준을 수립하십시오: [프로덕션 환경에서의 프롬프트 거버넌스](https://www.promptquorum.com/prompt-engineering/prompt-governance-in-production)에서는 정책, 버전 관리 및 승인 프로세스를 다룹니다.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'RTX 3060 로컬 LLM 가이드 2026: 실행 가능한 모델 안내',
        'description': 'RTX 3060 12GB 또는 6GB에서 어떤 로컬 LLM을 실행할 수 있습니까? 실제 VRAM 한계 및 성능 팁과 함께 2026년 코딩, 채팅, 추론에 최적인 모델을 확인하십시오.',
        'url': 'https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm',
        'datePublished': '2026-04-05',
        'dateModified': '2026-06-01',
        'inLanguage': 'ko',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': '예산형 GPU' },
          { '@type': 'Thing', 'name': 'RTX 3060' },
          { '@type': 'Thing', 'name': 'GPU VRAM' },
          { '@type': 'Thing', 'name': '로컬 LLM 추론' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'RTX 3060 12GB는 2026년에도 구매할 가치가 있습니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '예. 출시된 지 4년 이상 지났지만 12GB VRAM은 7B-13B 모델에서 여전히 뛰어납니다. Llama 3 8B와 Mistral Small을 원활하게 실행합니다. 중고로 $250 미만에 구할 수 있다면 최적입니다.'
            }
          },
          {
            '@type': 'Question',
            'name': '로컬 LLM용으로 RTX 4060과 RTX 4060 Ti 중 어느 것을 구매해야 합니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 4060 Ti. 베이스 RTX 4060 (8GB)과 RTX 4070 (12GB)은 LLM 작업에서 가성비가 낮습니다. Ti는 로컬 추론에서 RTX 40 시리즈 중 가장 합리적인 가격의 카드입니다.'
            }
          },
          {
            '@type': 'Question',
            'name': '로컬 LLM용으로 AMD RX 6700 또는 6800 XT를 대신 사용할 수 있습니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '예, 가능합니다. 하지만 AMD의 ONNX Runtime 드라이버 지원은 NVIDIA CUDA보다 약합니다. 설정 시 더 많은 번거로움이 예상됩니다. 예산 빌드에서는 NVIDIA가 더 안전합니다.'
            }
          },
          {
            '@type': 'Question',
            'name': '12GB VRAM은 13B 모델에 충분합니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4 양자화에서 겨우 수용 가능합니다. Q5 또는 Q8에서는 OOM 오류가 발생합니다. 13B를 편안하게 실행하려면 16GB VRAM을 목표로 하십시오.'
            }
          },
          {
            '@type': 'Question',
            'name': 'RTX A4000 같은 중고 엔터프라이즈 GPU를 구매해야 합니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '예, 구할 수 있다면 적극 권장합니다. 16GB VRAM, 전문가급 냉각 시스템, 보통 중고로 $180-230에 구매 가능합니다. 벤치마크에서 RTX 3060보다 약간 느리지만 VRAM 여유 용량이 그 가치를 합니다.'
            }
          },
          {
            '@type': 'Question',
            'name': '$250 GPU와 함께 구매할 PSU 용량은 얼마입니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '최소 650W, 80+ Gold 인증. $250 GPU + CPU + 마더보드의 소비 전력은 400W를 초과하지 않지만, 전력 급등에 대한 여유를 확보해야 안정성이 보장됩니다.'
            }
          },
          {
            '@type': 'Question',
            'name': '$200 예산 GPU로 Ollama를 실행할 수 있습니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '예. Ollama는 가볍습니다. 4년 된 RTX 3060에서 Ollama를 사용하면 Mistral Small을 10-15 토큰/초로 실행할 수 있으며, 개인 추론에 충분히 활용 가능합니다.'
            }
          },
          {
            '@type': 'Question',
            'name': 'RTX 3060 12GB에서 Llama 4 Scout를 실행할 수 있습니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '일반적으로 불가능합니다. Llama 4 Scout는 17B 활성 / 109B 전체 MoE로 Q4에서 ~55GB VRAM이 필요합니다 — 12GB 카드로는 턱없이 부족합니다. 24GB에서도 1.78비트 극단적 양자화 (~20 토큰/초)로만 가까스로 실행됩니다. RTX 3060 12GB에서는 대신 고밀도 모델을 실행하십시오: qwen3:14b (수용 가능한 최고 품질), Qwen3 8B, 또는 Gemma 4 E12B. Scout는 48GB 이상의 환경을 위한 긴 컨텍스트 (10M 토큰) / 대형 멀티모달 선택입니다.'
            }
          },
        ]
      },
    },
  };
