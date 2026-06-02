// Auto-generated from src/lib/local-llms/content.ts
// Slug: how-much-vram-local-llm
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'monthly',
      next_seo_review_due: '2026-07-01',
      next_refresh_due: '2026-06-30',
      last_full_refresh: '2026-06-01',
      current_models_mentioned: ['Qwen 3.6 35B-A3B', 'DeepSeek V4-Flash', 'Llama 4 Scout', 'Kimi K2.6', 'gpt-oss:20b'],
      theme: 'GPU Buying Guides',
      title: 'How Much VRAM for Local LLM? 7B to 70B Charts (2026)',
      seoTitle: 'How Much VRAM for Local LLM? 7B to 70B Charts (2026)',
      intro: '**For 7B models, you need 8GB VRAM; for 13B-22B, 12-16GB; for 70B, 24GB minimum.** As of April 2026, these numbers assume Q4 (4-bit) quantization. Full-precision (FP32) models need 2-3× more VRAM and are rarely practical on consumer GPUs. The formula is: Model size (billions) × 2 bytes (FP32) ÷ quantization factor.',
      metaDescription: 'Exact VRAM needed for local LLM: 7B needs 6-8GB, 13B needs 10-14GB, 70B needs 40-48GB at Q4. Charts for Q2-Q8 quantization, batch size, context.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**For 7B models, you need 8GB VRAM; for 13B-22B, 12-16GB; for 70B, 24GB minimum. As of April 2026, these numbers assume Q4 (4-bit) quantization.**',
      nextStep: {
        text: 'You know your VRAM budget. Now pick the right GPU for it.',
        label: 'Best Budget GPUs for Local LLMs →',
        href: '/local-llms/best-budget-gpus-local-llm',
      },
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '7 min',
      educationalLevel: 'Beginner',
      primaryTerm: 'VRAM Requirements',
      toc: [
        { label: 'TLDR', anchor: '#tldr' },
        { label: 'What Is the VRAM Formula for LLMs?', anchor: '#formula' },
        { label: 'How Much VRAM Does Each Model Size Need?', anchor: '#by-model-size' },
        { label: 'MoE Model VRAM', anchor: '#moe-vram' },
        { label: 'How Does Quantization Reduce VRAM Requirements?', anchor: '#quantization' },
        { label: 'What About Batch Size and Multi-User Inference?', anchor: '#batch-size' },
        { label: 'Do You Need More VRAM Than the Model Size?', anchor: '#overhead' },
        { label: 'Common VRAM Misconceptions', anchor: '#mistakes' },
        { label: 'VRAM Calculator', anchor: '#vram-calculator' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '7B models: 8GB minimum (Q4), 10GB comfortable (Q5), 14GB for Q8 full precision.',
            '13B models: 10GB minimum (Q4), 12-14GB comfortable (Q5), 16GB for Q8.',
            '70B models: 24GB minimum (Q4), 32GB+ for Q5/Q8 or multi-user setup.',
            'Quantization (Q4, Q5, Q8) reduces VRAM by 50-75% vs. full precision (FP32).',
            'Always over-allocate by 1-2GB for overhead (KV cache, optimizer state, system OS).',
            'Batch size ≠ VRAM per inference. Single inference uses same VRAM regardless of batch (batch processes sequentially).',
            'More VRAM doesn\'t speed up single-prompt inference. It only helps with multi-user/multi-request setups.',
          ],
        },
        'ruleOfThumb': {
          title: 'VRAM Rule of Thumb — Quick Reference',
          content: [
            '**Don\'t have time for the formula? Use these simple rules:**',
            'Once you know your VRAM budget, [see which GPUs fit each tier →](/local-llms/best-budget-gpus-local-llm)',
          ],
          items: [
            '**3B models** (Phi, StableLM): 4 GB VRAM minimum',
            '**7B models** (Llama, Mistral, Qwen): 8 GB VRAM (Q4), 10 GB (Q5)',
            '**13B models** (Llama 3.3, Mistral): 12 GB VRAM minimum (Q4)',
            '**22B models** (Qwen3, Gemma): 16 GB VRAM (Q4)',
            '**70B models** (Llama 3.3, Qwen 3.6): 24–32 GB VRAM (Q4–Q5)',
            '**MoE models**: VRAM scales with weights you must hold in memory. Example: Qwen 3.6 35B-A3B (3B active) fits a tiny ~2 GB footprint, while Llama 4 Scout (17B active / 109B total) still needs ~55 GB at Q4 because all experts stay resident',
          ],
          codeBlock: '# Quick VRAM formula (memorize this)\nVRAM (GB) ≈ Model Size (B) ÷ 8  # at Q4 quantization\n\n# Examples:\n7B ÷ 8 = 0.875 GB per billion ≈ 8 GB total\n70B ÷ 8 = 8.75 GB per billion ≈ 48 GB total\n\n# For other quantizations:\nQ8 (8-bit): Model Size ÷ 4\nQ5 (5-bit): Model Size ÷ 5\nFP32 (full): Model Size × 4',
          codeLanguage: 'bash',
        },
        'formula': {
          title: 'What Is the VRAM Formula for LLMs?',
          content: [
            '**VRAM (GB) = (Model Size in Billions × 4 bytes × Quantization Factor)**',
            '- Model size: Number of parameters (7B, 13B, 70B, etc.)',
            '- 4 bytes: FP32 precision (1 byte = 8 bits)',
            '- Quantization factor: 1.0 (FP32), 0.5 (Q8), 0.25 (Q4)',
            'Example: Llama 3 70B, FP32, no quantization:',
            '70 billion × 4 bytes = 280GB. Impractical.',
            'Llama 3 70B, Q4 (4-bit) quantization:',
            '70 billion × 4 bytes × 0.25 = 70GB allocated, ~24GB used after compression.',
            '',
            '**MoE Models (Sparse):** Active parameters drive compute, but all experts must stay loaded in VRAM. Example: Llama 4 Scout has 109B total parameters with 17B active per token. At Q4 it still needs ~55 GB of VRAM to hold every expert — it only squeezes into a 24 GB GPU at an aggressive 1.78-bit quant (~20 tok/s). Compute is cheap; memory is the constraint.',
          ],
        },
        'by-model-size': {
          title: 'How Much VRAM Does Each Model Size Need?',
          columns: ['Model Size', 'FP32 (No Quantization)', 'Q8 (8-bit)', 'Q5 (5-bit)', 'Q4 (4-bit)', 'Recommended GPU'],
          rows: [
            { 'Model Size': '3B (Phi, StableLM)', 'FP32 (No Quantization)': '12 GB', 'Q8 (8-bit)': '6 GB', 'Q5 (5-bit)': '4 GB', 'Q4 (4-bit)': '3 GB', 'Recommended GPU': 'RTX 2060 6 GB or RTX 5070 12 GB' },
            { 'Model Size': '7B (Llama 3.3, Mistral)', 'FP32 (No Quantization)': '28 GB', 'Q8 (8-bit)': '14 GB', 'Q5 (5-bit)': '9 GB', 'Q4 (4-bit)': '7 GB', 'Recommended GPU': 'RTX 3060 12 GB or RTX 5070 12 GB' },
            { 'Model Size': '13B (Llama 3.3, Mistral)', 'FP32 (No Quantization)': '52 GB', 'Q8 (8-bit)': '26 GB', 'Q5 (5-bit)': '17 GB', 'Q4 (4-bit)': '13 GB', 'Recommended GPU': 'RTX 3090 24 GB or RTX 5080 16 GB' },
            { 'Model Size': '22B (Qwen, Gemma)', 'FP32 (No Quantization)': '88 GB', 'Q8 (8-bit)': '44 GB', 'Q5 (5-bit)': '28 GB', 'Q4 (4-bit)': '22 GB', 'Recommended GPU': 'RTX 4090 24 GB (Q4) or RTX 5090 32 GB' },
            { 'Model Size': '70B (Llama 3, Qwen)', 'FP32 (No Quantization)': '280 GB', 'Q8 (8-bit)': '140 GB', 'Q5 (5-bit)': '88 GB', 'Q4 (4-bit)': '70 GB', 'Recommended GPU': '2× RTX 4090 (24 GB each), or 1× H100 80 GB' },
            { 'Model Size': 'Qwen 3.6 35B-A3B (3B active, MoE)*', 'FP32 (No Quantization)': '12 GB', 'Q8 (8-bit)': '3 GB', 'Q5 (5-bit)': '2 GB', 'Q4 (4-bit)': '2 GB', 'Recommended GPU': 'RTX 2060 6 GB or RTX 5070 12 GB' },
            { 'Model Size': 'DeepSeek V4-Flash (13B active / 284B total, MoE)*', 'FP32 (No Quantization)': '52 GB', 'Q8 (8-bit)': '13 GB', 'Q5 (5-bit)': '8 GB', 'Q4 (4-bit)': '7 GB', 'Recommended GPU': 'RTX 3060 12 GB or RTX 5070 12 GB' },
            { 'Model Size': 'Llama 4 Scout (17B active / 109B total, MoE)†', 'FP32 (No Quantization)': '436 GB', 'Q8 (8-bit)': '109 GB', 'Q5 (5-bit)': '68 GB', 'Q4 (4-bit)': '55 GB', 'Recommended GPU': '2× RTX 4090 (48 GB) — fits 24 GB only at 1.78-bit (~20 tok/s)' },
            { 'Model Size': 'gpt-oss:20b (3.6B active / 21B total, MoE)*', 'FP32 (No Quantization)': '84 GB', 'Q8 (8-bit)': '21 GB', 'Q5 (5-bit)': '13 GB', 'Q4 (4-bit)': '12 GB', 'Recommended GPU': 'RTX 5070 12 GB or any 16 GB GPU' },
            { 'Model Size': 'Kimi K2.6 (32B active / 1T total, MoE)*', 'FP32 (No Quantization)': '128 GB', 'Q8 (8-bit)': '32 GB', 'Q5 (5-bit)': '20 GB', 'Q4 (4-bit)': '16 GB', 'Recommended GPU': '2× RTX 4090 or RTX 5090 32 GB (Q4 only)' },
          ],
          note: '* MoE models: VRAM is calculated from active parameters only, not total model size. † Llama 4 Scout keeps all 109B parameters resident, so it needs ~55 GB at Q4 despite only 17B active per token.',
        },
        'moe-vram': {
          title: 'MoE Models Need Far Less VRAM Than Their Size Suggests',
          id: 'moe-vram',
          content: [
            'Mixture-of-Experts (MoE) models split their parameters across many "expert" sub-networks and activate only a fraction for each token. Active parameters cut compute and speed up inference, but for most MoE models every expert must still be loaded into VRAM — so memory usage tracks total parameters, not active ones.',
            '**Dense model rule:** VRAM = total_params × bytes_per_param',
            '**MoE model rule (compute):** active_params drive tokens/sec — **but VRAM still scales with total resident weights.**',
            'Example: Llama 4 Scout has 109B total parameters with only 17B active per token. It runs fast for its size, but at Q4 it still needs ~55 GB of VRAM to hold all experts — out of reach for a single 24 GB GPU except at an aggressive 1.78-bit quant (~20 tok/s on an RTX 4090).',
            'Some runtimes can stream or offload inactive experts to system RAM, trading speed for a smaller VRAM footprint. The headline takeaway: do not assume an MoE model fits in active-parameter-sized VRAM — check the actual on-disk size at your quant level.',
          ],
        },
        'quantization': {
          title: 'How Does Quantization Reduce VRAM Requirements?',
          content: [
            '**Quantization** reduces the number of bits needed to represent each model parameter.',
            '- **FP32** (32-bit float): Full precision. 1 parameter = 4 bytes. No loss. Slowest.',
            '- **Q8** (8-bit): 1 parameter = 1 byte. ~6% accuracy loss. 75% VRAM savings.',
            '- **Q5** (5-bit): 1 parameter = 0.625 bytes. ~2% accuracy loss. 84% VRAM savings.',
            '- **Q4** (4-bit): 1 parameter = 0.5 bytes. ~1% accuracy loss. 87.5% VRAM savings.',
            'For most users, Q4 is the sweet spot: imperceptible accuracy loss, 87% smaller VRAM footprint.',
            'As of April 2026, Q4 is standard. Q5 and Q8 are available if you have extra VRAM and want marginal quality gains.',
            'VRAM determines model size, but prompt design determines output quality. Techniques like chain-of-thought and few-shot prompting can close the quality gap between smaller and larger models. Explore the full [prompt engineering toolkit](https://www.promptquorum.com/prompt-engineering) to get more from the models your hardware supports. If you have 12–16 GB VRAM and want a concrete coding workload to put that toolkit against, [Replace GitHub Copilot With a Local LLM](/power-local-llm/replace-github-copilot-with-local-llm) maps the Continue.dev + Ollama + Qwen3-Coder stack onto exactly those VRAM tiers.',
          ],
        },
        'batch-size': {
          title: 'What About Batch Size and Multi-User Inference?',
          content: [
            '**Batch size affects throughput (tokens per second), not single-inference latency.**',
            'A single user prompting "What is 2+2?" uses the same VRAM whether batch size is 1 or 32.',
            'Batch size = 32 means processing 32 prompts in parallel. This uses ~32× more VRAM, but generates 32 responses faster.',
            'For single-user (typical local LLM usage): Batch size = 1. VRAM is model size + 1-2GB overhead.',
            'For multi-user server: Allocate batch size × model VRAM. A 70B model at batch=4 needs ~96GB (24GB × 4).',
          ],
        },
        'overhead': {
          title: 'Do You Need More VRAM Than the Model Size?',
          content: [
            '**Yes. Beyond the model weights, add:**',
            '- **KV cache** (key-value cache for context): ~5-10% extra VRAM.',
            '- **Optimizer state** (if fine-tuning): 2-4× model size (only relevant for training, not inference).',
            '- **System overhead** (OS, drivers, Ollama/LM Studio runtime): ~1-2GB.',
            'Rule: A 70B model Q4 (20GB) + KV cache (2GB) + system (2GB) = ~24GB allocated.',
            'Always buy GPUs with at least 1-2GB headroom above theoretical minimums.',
          ],
        },
        'mistakes': {
          title: 'Common VRAM Misconceptions',
          items: [
            'More VRAM = faster inference. False. VRAM size doesn\'t affect speed. Memory bandwidth (GB/sec) does, and that\'s fixed per GPU.',
            'Batch size = sequential token limit. False. Batch size = parallel requests. Single inference uses batch=1 regardless of VRAM size.',
            'You need 24GB for any 70B model. False. Q4 needs 24GB. Q8 needs 48GB. Depends on quantization.',
          ],
        },
        'vramCalculator': {
          id: 'vram-calculator',
          title: 'VRAM Calculator',
          component: 'VramCalculator',
          content: 'Select your model size and quantization to estimate VRAM requirements.',
        },
        'faqSection': {
          title: 'FAQ',
          faqs: [
            { q: 'Can I run Mistral Small on a 6GB GPU?', a: 'Barely, at Q4 with tight overhead. Practically, no. Buy at least 8GB. You\'ll hit OOM errors with 6GB.' },
            { q: 'How much VRAM do I need for fine-tuning a 7B model?', a: 'For LoRA: 12-16GB. Full fine-tuning: 28GB+. Fine-tuning requires optimizer state (2-4× model VRAM), not just inference.' },
            { q: 'Is 12GB enough for Llama 3 13B?', a: 'At Q4, yes barely. At Q5 or Q8, no. 12GB is cutting it close. 16GB is comfortable.' },
            { q: 'Do I need 24GB for a 70B model?', a: 'At Q4, yes. At Q5+, no. Higher quantization (Q5, Q8) need 32GB+ for 70B.' },
            { q: 'Does increasing batch size reduce VRAM for single inference?', a: 'No. Single inference always uses batch=1 VRAM. Batch size only helps throughput (multi-user scenarios).' },
            { q: 'What\'s the best quantization for accuracy?', a: 'Q8 is nearly imperceptible loss. Q5 is ~2% loss. Q4 is ~1% loss. For most, Q4 is the sweet spot.' },
            { q: 'Can I offload some VRAM to CPU RAM?', a: 'Yes, via layer-splitting (NVLink). Llama.cpp and Ollama support this. Performance drops 30-50% but it works. Under 8 GB VRAM? See **[which models run fastest on your exact hardware tier](/local-llms/fastest-local-llms-low-end-pcs)** — CPU-only, 4 GB, 6 GB, and 8 GB VRAM benchmarks with real tok/sec numbers.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[VRAM Calculator for Local LLMs](/local-llms/vram-calculator-local-llm) -- Interactive calculator: exact VRAM for any model, quantization, and GPU.',
            '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) -- Complete GPU tier recommendations with prices and tok/sec benchmarks.',
            '[Best GPUs for Local LLMs](/local-llms/best-gpus-for-local-llms) -- RTX 4090, 4080, 4070 Ti benchmarks and cost analysis.',
            '[LLM Quantization Explained](/local-llms/llm-quantization-explained) -- Deep dive into Q4, Q5, Q8 formats and quality trade-offs.',
            '[How Much Unified Memory for Local LLMs?](/local-llms/how-much-unified-memory-for-local-llm) -- Mac equivalent of VRAM: 16GB vs 36GB vs 64GB vs 128GB for Apple Silicon.',
            '[Running 70B Models on Apple Silicon M5 Max](/local-llms/running-70b-models-apple-silicon-m5-max) -- How unified memory lets Macs run 70B natively where 24GB VRAM fails.',
            '[Best Models for Apple Silicon 2026](/local-llms/best-models-apple-silicon-2026) -- Specific model picks per unified-memory tier: 16GB through 128GB.',
            '[GPU vs CPU vs Apple Silicon for Local LLMs](/local-llms/gpu-vs-cpu-vs-apple-silicon) -- Three-platform architecture comparison: NVIDIA CUDA, Apple unified memory, and CPU-only inference side by side.',
          ],
        },
        'sources': {
          title: 'Sources',
          items: [
            'NVIDIA CUDA memory architecture and shared memory model documentation',
            'Ollama and LM Studio official documentation: model VRAM requirements and quantization specs',
            'llama.cpp project GitHub: quantization levels (Q4, Q5, Q8) and memory calculations',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Local LLM VRAM Requirements 2026: 7B to 70B Quantized Models',
        'description': 'How much VRAM does a 70B LLM need? See exact 2026 requirements for Q4/Q5 quantization, 13B–70B models, and what fits in 24GB–32GB GPUs.',
        'url': 'https://www.promptquorum.com/local-llms/how-much-vram-local-llm?lang=en',
        'datePublished': '2026-04-05',
        'dateModified': '2026-06-01',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'GPU VRAM' },
          { '@type': 'Thing', 'name': 'LLM memory requirements' },
          { '@type': 'Thing', 'name': 'quantization' },
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
            'name': 'Can I run Mistral Small on a 6GB GPU?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Barely, at Q4 with tight overhead. Practically, no. Buy at least 8GB. You will hit OOM errors with 6GB.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How much VRAM do I need for fine-tuning a 7B model?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'For LoRA fine-tuning: 12-16GB. Full fine-tuning: 28GB+. Fine-tuning requires optimizer state (2-4× model VRAM), not just inference weights.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is 12GB enough for Llama 3 13B?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'At Q4, yes barely. At Q5 or Q8, no. 12GB is cutting it close. 16GB is comfortable for 13B models.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do I need 24GB VRAM for a 70B model?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'At Q4, yes -- 70B models require ~20-24GB VRAM. At Q5+, you need 32GB+. Higher quantization adds VRAM needs proportionally.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Does increasing batch size reduce VRAM for single inference?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Single inference always uses batch=1 VRAM. Batch size only helps throughput in multi-user scenarios. It does not reduce VRAM per request.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What quantization level has the best accuracy?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q8 is nearly imperceptible quality loss. Q5 is ~2% degradation. Q4 is ~1% degradation. For most tasks, Q4 is the sweet spot between VRAM savings and quality.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I offload some VRAM to CPU RAM?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, via layer-splitting. llama.cpp and Ollama support this via --n-gpu-layers. Performance drops 30-50% but models run when VRAM is insufficient.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the VRAM formula for LLMs?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'VRAM (GB) = model parameters (billions) × bytes per parameter + overhead. At Q4 (4-bit): 7B × 0.5 bytes + 1GB overhead ≈ 4.5GB weights + 2GB KV cache = ~7GB total.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How much more VRAM does Q8 need vs Q4?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q8 uses 2× the VRAM of Q4. A 7B model at Q4 needs ~4-5GB; at Q8, ~8-9GB. Always check quantization level before buying a GPU.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I run a 70B model on two GPUs?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Two RTX 5090s (24GB each) combine for 48GB VRAM -- enough for a 70B model at Q4. llama.cpp and Ollama support multi-GPU via tensor parallelism and --n-gpu-layers.'
            }
          }
        ]
      },
    },
    es: {
      freshness_tier: 'monthly',
      next_refresh_due: '2026-06-30',
      theme: 'GPU Buying Guides',
      title: '¿Cuánta VRAM para un LLM local? Tablas 7B a 70B (2026)',
      seoTitle: '¿Cuánta VRAM para un LLM local? Tablas 7B a 70B (2026)',
      intro: '**Para modelos 7B necesitas 8 GB de VRAM; para 13B-22B, 12-16 GB; para 70B, mínimo 24 GB.** A partir de abril de 2026, estos números asumen cuantización Q4 (4 bits). Los modelos en precisión completa (FP32) necesitan 2-3× más VRAM y rara vez son prácticos en GPUs de consumo. La fórmula es: Tamaño del modelo (miles de millones) × 2 bytes (FP32) ÷ factor de cuantización.',
      metaDescription: 'VRAM exacta para LLM local: 7B necesita 6-8 GB, 13B necesita 10-14 GB, 70B necesita 40-48 GB en Q4. Tablas para cuantización Q2-Q8, batch size y contexto.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Para modelos 7B necesitas 8 GB de VRAM; para 13B-22B, 12-16 GB; para 70B, mínimo 24 GB. A partir de abril de 2026, estos números asumen cuantización Q4 (4 bits).**',
      nextStep: {
        text: 'Ya conoces tu presupuesto de VRAM. Ahora elige la GPU correcta para él.',
        label: 'Mejores GPUs económicas para LLMs locales →',
        href: '/es/local-llms/best-budget-gpus-local-llm',
      },
      audience: 'Principiantes ejecutando su primer LLM local en hardware de consumo',
      readTime: '7 min de lectura',
      educationalLevel: 'Beginner',
      primaryTerm: 'VRAM Requirements',
      toc: [
        { label: 'Puntos clave', anchor: '#tldr' },
        { label: '¿Cuál es la fórmula de VRAM para LLMs?', anchor: '#formula' },
        { label: '¿Cuánta VRAM necesita cada tamaño de modelo?', anchor: '#by-model-size' },
        { label: 'VRAM para modelos MoE', anchor: '#moe-vram' },
        { label: '¿Cómo reduce la cuantización los requisitos de VRAM?', anchor: '#quantization' },
        { label: '¿Qué hay del batch size y la inferencia multiusuario?', anchor: '#batch-size' },
        { label: '¿Necesitas más VRAM que el tamaño del modelo?', anchor: '#overhead' },
        { label: 'Errores comunes sobre VRAM', anchor: '#mistakes' },
        { label: 'Calculadora de VRAM', anchor: '#vram-calculator' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Modelos 7B: mínimo 8 GB (Q4), cómodo con 10 GB (Q5), 14 GB para Q8 precisión completa.',
            'Modelos 13B: mínimo 10 GB (Q4), cómodo con 12-14 GB (Q5), 16 GB para Q8.',
            'Modelos 70B: mínimo 24 GB (Q4), 32 GB+ para Q5/Q8 o configuración multiusuario.',
            'La cuantización (Q4, Q5, Q8) reduce la VRAM un 50-75% respecto a la precisión completa (FP32).',
            'Siempre sobredimensiona 1-2 GB para el overhead (caché KV, estado del optimizador, sistema operativo).',
            'El batch size ≠ VRAM por inferencia. La inferencia única usa la misma VRAM sin importar el batch (el batch procesa secuencialmente).',
            'Más VRAM no acelera la inferencia de un solo prompt. Solo ayuda en configuraciones multiusuario/multi-petición.',
          ],
        },
        'ruleOfThumb': {
          title: 'Regla general de VRAM — Referencia rápida',
          content: [
            '**¿No tienes tiempo para la fórmula? Usa estas reglas simples:**',
            'Una vez que conozcas tu presupuesto de VRAM, [consulta qué GPUs se adaptan a cada nivel →](/es/local-llms/best-budget-gpus-local-llm)',
          ],
          items: [
            '**Modelos 3B** (Phi, StableLM): mínimo 4 GB de VRAM',
            '**Modelos 7B** (Llama, Mistral, Qwen): 8 GB de VRAM (Q4), 10 GB (Q5)',
            '**Modelos 13B** (Llama 3.3, Mistral): mínimo 12 GB de VRAM (Q4)',
            '**Modelos 22B** (Qwen3, Gemma): 16 GB de VRAM (Q4)',
            '**Modelos 70B** (Llama 3.3, Qwen 3.6): 24–32 GB de VRAM (Q4–Q5)',
            '**Modelos MoE**: la VRAM escala con los pesos que debes mantener en memoria. Ejemplo: Qwen 3.6 35B-A3B (3B activos) cabe en una huella diminuta de ~2 GB, mientras que Llama 4 Scout (17B activos / 109B totales) aún necesita ~55 GB en Q4 porque todos los expertos permanecen residentes',
          ],
          codeBlock: '# Quick VRAM formula (memorize this)\nVRAM (GB) ≈ Model Size (B) ÷ 8  # at Q4 quantization\n\n# Examples:\n7B ÷ 8 = 0.875 GB per billion ≈ 8 GB total\n70B ÷ 8 = 8.75 GB per billion ≈ 48 GB total\n\n# For other quantizations:\nQ8 (8-bit): Model Size ÷ 4\nQ5 (5-bit): Model Size ÷ 5\nFP32 (full): Model Size × 4',
          codeLanguage: 'bash',
        },
        'formula': {
          title: '¿Cuál es la fórmula de VRAM para LLMs?',
          content: [
            '**VRAM (GB) = (Tamaño del modelo en miles de millones × 4 bytes × Factor de cuantización)**',
            '- Tamaño del modelo: Número de parámetros (7B, 13B, 70B, etc.)',
            '- 4 bytes: precisión FP32 (1 byte = 8 bits)',
            '- Factor de cuantización: 1.0 (FP32), 0.5 (Q8), 0.25 (Q4)',
            'Ejemplo: Llama 3 70B, FP32, sin cuantización:',
            '70 mil millones × 4 bytes = 280 GB. Impracticable.',
            'Llama 3 70B, cuantización Q4 (4 bits):',
            '70 mil millones × 4 bytes × 0.25 = 70 GB asignados, ~24 GB utilizados tras la compresión.',
            '',
            '**Modelos MoE (Dispersos):** Los parámetros activos determinan el cómputo, pero todos los expertos deben permanecer cargados en VRAM. Ejemplo: Llama 4 Scout tiene 109B de parámetros totales con 17B activos por token. En Q4 aún necesita ~55 GB de VRAM para mantener todos los expertos — solo entra en una GPU de 24 GB con un quant agresivo de 1.78 bits (~20 tok/s). El cómputo es barato; la memoria es la restricción.',
          ],
        },
        'by-model-size': {
          title: '¿Cuánta VRAM necesita cada tamaño de modelo?',
          columns: ['Tamaño del modelo', 'FP32 (sin cuantización)', 'Q8 (8 bits)', 'Q5 (5 bits)', 'Q4 (4 bits)', 'GPU recomendada'],
          rows: [
            { 'Tamaño del modelo': '3B (Phi, StableLM)', 'FP32 (sin cuantización)': '12 GB', 'Q8 (8 bits)': '6 GB', 'Q5 (5 bits)': '4 GB', 'Q4 (4 bits)': '3 GB', 'GPU recomendada': 'RTX 2060 6 GB o RTX 5070 12 GB' },
            { 'Tamaño del modelo': '7B (Llama 3.3, Mistral)', 'FP32 (sin cuantización)': '28 GB', 'Q8 (8 bits)': '14 GB', 'Q5 (5 bits)': '9 GB', 'Q4 (4 bits)': '7 GB', 'GPU recomendada': 'RTX 3060 12 GB o RTX 5070 12 GB' },
            { 'Tamaño del modelo': '13B (Llama 3.3, Mistral)', 'FP32 (sin cuantización)': '52 GB', 'Q8 (8 bits)': '26 GB', 'Q5 (5 bits)': '17 GB', 'Q4 (4 bits)': '13 GB', 'GPU recomendada': 'RTX 3090 24 GB o RTX 5080 16 GB' },
            { 'Tamaño del modelo': '22B (Qwen, Gemma)', 'FP32 (sin cuantización)': '88 GB', 'Q8 (8 bits)': '44 GB', 'Q5 (5 bits)': '28 GB', 'Q4 (4 bits)': '22 GB', 'GPU recomendada': 'RTX 4090 24 GB (Q4) o RTX 5090 32 GB' },
            { 'Tamaño del modelo': '70B (Llama 3, Qwen)', 'FP32 (sin cuantización)': '280 GB', 'Q8 (8 bits)': '140 GB', 'Q5 (5 bits)': '88 GB', 'Q4 (4 bits)': '70 GB', 'GPU recomendada': '2× RTX 4090 (24 GB c/u), o 1× H100 80 GB' },
            { 'Tamaño del modelo': 'Qwen 3.6 35B-A3B (3B activos, MoE)*', 'FP32 (sin cuantización)': '12 GB', 'Q8 (8 bits)': '3 GB', 'Q5 (5 bits)': '2 GB', 'Q4 (4 bits)': '2 GB', 'GPU recomendada': 'RTX 2060 6 GB o RTX 5070 12 GB' },
            { 'Tamaño del modelo': 'DeepSeek V4-Flash (13B activos / 284B total, MoE)*', 'FP32 (sin cuantización)': '52 GB', 'Q8 (8 bits)': '13 GB', 'Q5 (5 bits)': '8 GB', 'Q4 (4 bits)': '7 GB', 'GPU recomendada': 'RTX 3060 12 GB o RTX 5070 12 GB' },
            { 'Tamaño del modelo': 'Llama 4 Scout (17B activos / 109B total, MoE)†', 'FP32 (sin cuantización)': '436 GB', 'Q8 (8 bits)': '109 GB', 'Q5 (5 bits)': '68 GB', 'Q4 (4 bits)': '55 GB', 'GPU recomendada': '2× RTX 4090 (48 GB) — entra en 24 GB solo a 1.78 bits (~20 tok/s)' },
            { 'Tamaño del modelo': 'gpt-oss:20b (3.6B activos / 21B total, MoE)*', 'FP32 (sin cuantización)': '84 GB', 'Q8 (8 bits)': '21 GB', 'Q5 (5 bits)': '13 GB', 'Q4 (4 bits)': '12 GB', 'GPU recomendada': 'RTX 5070 12 GB o cualquier GPU de 16 GB' },
            { 'Tamaño del modelo': 'Kimi K2.6 (32B activos / 1T total, MoE)*', 'FP32 (sin cuantización)': '128 GB', 'Q8 (8 bits)': '32 GB', 'Q5 (5 bits)': '20 GB', 'Q4 (4 bits)': '16 GB', 'GPU recomendada': '2× RTX 4090 o RTX 5090 32 GB (solo Q4)' },
          ],
          note: '* Modelos MoE: la VRAM se calcula solo a partir de los parámetros activos, no del tamaño total del modelo. † Llama 4 Scout mantiene los 109B parámetros residentes, por lo que necesita ~55 GB en Q4 pese a tener solo 17B activos por token.',
        },
        'moe-vram': {
          title: 'Los modelos MoE necesitan mucha menos VRAM de lo que su tamaño sugiere',
          id: 'moe-vram',
          content: [
            'Los modelos Mixture-of-Experts (MoE) distribuyen sus parámetros entre muchas sub-redes "expertas" y activan solo una fracción para cada token. Los parámetros activos reducen el cómputo y aceleran la inferencia, pero en la mayoría de los modelos MoE todos los expertos deben permanecer cargados en VRAM — así que el uso de memoria sigue al total de parámetros, no a los activos.',
            '**Regla para modelos densos:** VRAM = parámetros_totales × bytes_por_parámetro',
            '**Regla para modelos MoE (cómputo):** los parámetros_activos determinan los tokens/seg — **pero la VRAM aún escala con los pesos totales residentes.**',
            'Ejemplo: Llama 4 Scout tiene 109B de parámetros totales con solo 17B activos por token. Es rápido para su tamaño, pero en Q4 aún necesita ~55 GB de VRAM para mantener todos los expertos — fuera del alcance de una sola GPU de 24 GB salvo con un quant agresivo de 1.78 bits (~20 tok/s en una RTX 4090).',
            'Algunos runtimes pueden transmitir o descargar los expertos inactivos a la RAM del sistema, sacrificando velocidad por una huella de VRAM menor. La conclusión clave: no asumas que un modelo MoE cabe en una VRAM del tamaño de sus parámetros activos — comprueba el tamaño real en disco para tu nivel de cuantización.',
          ],
        },
        'quantization': {
          title: '¿Cómo reduce la cuantización los requisitos de VRAM?',
          content: [
            '**La cuantización** reduce el número de bits necesarios para representar cada parámetro del modelo.',
            '- **FP32** (float de 32 bits): Precisión completa. 1 parámetro = 4 bytes. Sin pérdida. Más lento.',
            '- **Q8** (8 bits): 1 parámetro = 1 byte. ~6% de pérdida de precisión. 75% de ahorro de VRAM.',
            '- **Q5** (5 bits): 1 parámetro = 0.625 bytes. ~2% de pérdida de precisión. 84% de ahorro de VRAM.',
            '- **Q4** (4 bits): 1 parámetro = 0.5 bytes. ~1% de pérdida de precisión. 87.5% de ahorro de VRAM.',
            'Para la mayoría de los usuarios, Q4 es el punto óptimo: pérdida de precisión imperceptible, huella de VRAM un 87% menor.',
            'A partir de abril de 2026, Q4 es el estándar. Q5 y Q8 están disponibles si tienes VRAM de sobra y quieres ganancias marginales de calidad.',
            'La VRAM determina el tamaño del modelo, pero el diseño del prompt determina la calidad de la salida. Técnicas como chain-of-thought y few-shot prompting pueden cerrar la brecha de calidad entre modelos más pequeños y más grandes. Explora el completo [toolkit de prompt engineering](https://www.promptquorum.com/es/prompt-engineering) para sacar más partido a los modelos que soporta tu hardware. Si tienes 12–16 GB de VRAM y quieres una carga de trabajo de programación concreta para probar ese toolkit, [Reemplazar GitHub Copilot con un LLM local](/es/power-local-llm/replace-github-copilot-with-local-llm) mapea el stack Continue.dev + Ollama + Qwen3-Coder exactamente a esos niveles de VRAM.',
          ],
        },
        'batch-size': {
          title: '¿Qué hay del batch size y la inferencia multiusuario?',
          content: [
            '**El batch size afecta el rendimiento (tokens por segundo), no la latencia de una inferencia individual.**',
            'Un solo usuario que pregunta "¿Cuánto es 2+2?" usa la misma VRAM sin importar si el batch size es 1 o 32.',
            'Batch size = 32 significa procesar 32 prompts en paralelo. Esto usa ~32× más VRAM, pero genera 32 respuestas más rápido.',
            'Para usuario único (uso típico de LLM local): Batch size = 1. La VRAM es el tamaño del modelo + 1-2 GB de overhead.',
            'Para servidor multiusuario: Asigna batch size × VRAM del modelo. Un modelo 70B con batch=4 necesita ~96 GB (24 GB × 4).',
          ],
        },
        'overhead': {
          title: '¿Necesitas más VRAM que el tamaño del modelo?',
          content: [
            '**Sí. Más allá de los pesos del modelo, añade:**',
            '- **Caché KV** (caché clave-valor para el contexto): ~5-10% de VRAM adicional.',
            '- **Estado del optimizador** (si se hace fine-tuning): 2-4× el tamaño del modelo (solo relevante para entrenamiento, no para inferencia).',
            '- **Overhead del sistema** (SO, drivers, runtime de Ollama/LM Studio): ~1-2 GB.',
            'Regla: Un modelo 70B Q4 (20 GB) + caché KV (2 GB) + sistema (2 GB) = ~24 GB asignados.',
            'Siempre compra GPUs con al menos 1-2 GB de margen por encima de los mínimos teóricos.',
          ],
        },
        'mistakes': {
          title: 'Errores comunes sobre VRAM',
          items: [
            'Más VRAM = inferencia más rápida. Falso. El tamaño de VRAM no afecta la velocidad. El ancho de banda de memoria (GB/seg) sí, y es fijo por GPU.',
            'El batch size = límite secuencial de tokens. Falso. Batch size = peticiones en paralelo. La inferencia individual usa batch=1 sin importar el tamaño de VRAM.',
            'Necesitas 24 GB para cualquier modelo 70B. Falso. Q4 necesita 24 GB. Q8 necesita 48 GB. Depende de la cuantización.',
          ],
        },
        'vramCalculator': {
          id: 'vram-calculator',
          title: 'Calculadora de VRAM',
          component: 'VramCalculator',
          content: 'Selecciona el tamaño de tu modelo y la cuantización para estimar los requisitos de VRAM.',
        },
        'faqSection': {
          title: 'FAQ',
          faqs: [
            { q: '¿Puedo ejecutar Mistral Small en una GPU de 6 GB?', a: 'Con dificultad, en Q4 con overhead ajustado. En la práctica, no. Compra al menos 8 GB. Tendrás errores de OOM con 6 GB.' },
            { q: '¿Cuánta VRAM necesito para hacer fine-tuning de un modelo 7B?', a: 'Para LoRA: 12-16 GB. Fine-tuning completo: 28 GB+. El fine-tuning requiere estado del optimizador (2-4× la VRAM del modelo), no solo la inferencia.' },
            { q: '¿Son suficientes 12 GB para Llama 3 13B?', a: 'En Q4, apenas. En Q5 o Q8, no. 12 GB es muy ajustado. 16 GB es cómodo.' },
            { q: '¿Necesito 24 GB para un modelo 70B?', a: 'En Q4, sí. En Q5+, no. Una cuantización más alta (Q5, Q8) necesita 32 GB+ para 70B.' },
            { q: '¿Aumentar el batch size reduce la VRAM para inferencia individual?', a: 'No. La inferencia individual siempre usa la VRAM de batch=1. El batch size solo ayuda al rendimiento (escenarios multiusuario).' },
            { q: '¿Cuál es la mejor cuantización para la precisión?', a: 'Q8 tiene una pérdida casi imperceptible. Q5 tiene ~2% de pérdida. Q4 tiene ~1% de pérdida. Para la mayoría, Q4 es el punto óptimo.' },
            { q: '¿Puedo descargar parte de la VRAM a la RAM de la CPU?', a: 'Sí, mediante la división de capas (NVLink). Llama.cpp y Ollama lo soportan. El rendimiento cae un 30-50% pero funciona. ¿Menos de 8 GB de VRAM? Consulta **[qué modelos corren más rápido en tu nivel exacto de hardware](/es/local-llms/fastest-local-llms-low-end-pcs)** — benchmarks con números reales de tok/seg para solo CPU, 4 GB, 6 GB y 8 GB de VRAM.' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Calculadora de VRAM para LLMs locales](/es/local-llms/vram-calculator-local-llm) -- Calculadora interactiva: VRAM exacta para cualquier modelo, cuantización y GPU.',
            '[Guía de hardware para LLM local 2026](/es/local-llms/local-llm-hardware-guide-2026) -- Recomendaciones completas de niveles de GPU con precios y benchmarks de tok/seg.',
            '[Mejores GPUs para LLMs locales](/es/local-llms/best-gpus-for-local-llms) -- Benchmarks y análisis de costes de RTX 4090, 4080 y 4070 Ti.',
            '[Cuantización de LLM explicada](/es/local-llms/llm-quantization-explained) -- Análisis profundo de los formatos Q4, Q5 y Q8 y sus compromisos de calidad.',
            '[¿Cuánta memoria unificada para LLMs locales?](/es/local-llms/how-much-unified-memory-for-local-llm) -- Equivalente Mac de VRAM: 16 GB vs 36 GB vs 64 GB vs 128 GB para Apple Silicon.',
            '[Ejecutar modelos 70B en Apple Silicon M5 Max](/es/local-llms/running-70b-models-apple-silicon-m5-max) -- Cómo la memoria unificada permite a los Mac ejecutar 70B donde falla una VRAM de 24 GB.',
            '[Mejores modelos para Apple Silicon 2026](/es/local-llms/best-models-apple-silicon-2026) -- Selección de modelos específicos por nivel de memoria unificada: de 16 GB a 128 GB.',
            '[GPU vs CPU vs Apple Silicon para LLMs locales](/es/local-llms/gpu-vs-cpu-vs-apple-silicon) -- Comparativa de tres plataformas: NVIDIA CUDA, memoria unificada de Apple e inferencia solo con CPU, lado a lado.',
          ],
        },
        'sources': {
          title: 'Fuentes',
          items: [
            'Documentación de la arquitectura de memoria CUDA y el modelo de memoria compartida de NVIDIA',
            'Documentación oficial de Ollama y LM Studio: requisitos de VRAM para modelos y especificaciones de cuantización',
            'Proyecto llama.cpp en GitHub: niveles de cuantización (Q4, Q5, Q8) y cálculos de memoria',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Requisitos de VRAM para LLM local 2026: modelos cuantizados de 7B a 70B',
        'description': '¿Cuánta VRAM necesita un LLM de 70B? Consulta los requisitos exactos de 2026 para cuantización Q4/Q5, modelos de 13B a 70B y qué cabe en GPUs de 24 GB a 32 GB.',
        'url': 'https://www.promptquorum.com/es/local-llms/how-much-vram-local-llm?lang=es',
        'datePublished': '2026-04-05',
        'dateModified': '2026-06-01',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'GPU VRAM' },
          { '@type': 'Thing', 'name': 'Requisitos de memoria para LLM' },
          { '@type': 'Thing', 'name': 'cuantización' },
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
            'name': '¿Puedo ejecutar Mistral Small en una GPU de 6 GB?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Con dificultad, en Q4 con overhead ajustado. En la práctica, no. Compra al menos 8 GB. Tendrás errores de OOM con 6 GB.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuánta VRAM necesito para hacer fine-tuning de un modelo 7B?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Para fine-tuning LoRA: 12-16 GB. Fine-tuning completo: 28 GB+. El fine-tuning requiere estado del optimizador (2-4× la VRAM del modelo), no solo los pesos de inferencia.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Son suficientes 12 GB para Llama 3 13B?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'En Q4, apenas. En Q5 o Q8, no. 12 GB es muy ajustado. 16 GB es cómodo para modelos 13B.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Necesito 24 GB de VRAM para un modelo 70B?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'En Q4, sí — los modelos 70B requieren ~20-24 GB de VRAM. En Q5+, necesitas 32 GB+. Una cuantización más alta añade necesidades de VRAM proporcionalmente.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Aumentar el batch size reduce la VRAM para inferencia individual?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. La inferencia individual siempre usa la VRAM de batch=1. El batch size solo ayuda al rendimiento en escenarios multiusuario. No reduce la VRAM por petición.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Qué nivel de cuantización tiene la mejor precisión?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q8 tiene una pérdida de calidad casi imperceptible. Q5 tiene ~2% de degradación. Q4 tiene ~1% de degradación. Para la mayoría de las tareas, Q4 es el punto óptimo entre ahorro de VRAM y calidad.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo descargar parte de la VRAM a la RAM de la CPU?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, mediante la división de capas. llama.cpp y Ollama lo soportan con --n-gpu-layers. El rendimiento cae un 30-50% pero los modelos funcionan cuando la VRAM es insuficiente.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la fórmula de VRAM para LLMs?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'VRAM (GB) = parámetros del modelo (miles de millones) × bytes por parámetro + overhead. En Q4 (4 bits): 7B × 0.5 bytes + 1 GB overhead ≈ 4.5 GB pesos + 2 GB caché KV = ~7 GB total.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuánta más VRAM necesita Q8 frente a Q4?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q8 usa el doble de VRAM que Q4. Un modelo 7B en Q4 necesita ~4-5 GB; en Q8, ~8-9 GB. Comprueba siempre el nivel de cuantización antes de comprar una GPU.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo ejecutar un modelo 70B en dos GPUs?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Dos RTX 5090 (24 GB cada una) combinan 48 GB de VRAM — suficiente para un modelo 70B en Q4. llama.cpp y Ollama soportan múltiples GPUs mediante paralelismo tensorial y --n-gpu-layers.'
            }
          }
        ]
      },
    },
    fr: {
      theme: 'GPU Buying Guides',
      title: 'Règle empirique VRAM: 7B=8GB, 70B=48GB (Guide 2026)',
      seoTitle: 'Règle empirique VRAM: 7B=8GB, 70B=48GB (Guide 2026)',
      intro: 'Pour les modèles 7B à quantification Q4, vous avez besoin de 4-5 GB de VRAM -- n\'importe quelle GPU moderne avec 8 GB la gère confortablement. Pour les modèles 13B: 8-10 GB VRAM. Pour 70B: 35-40 GB, nécessitant deux RTX 4090 ou une seule A100. En avril 2026, Q4 (4-bit) est la quantification standard -- elle réduit les exigences VRAM de 87% par rapport à la précision complète avec moins de 1% de perte de qualité pour la plupart des tâches. La formule VRAM est: (paramètres en milliards × bits par poids) ÷ 8, plus 10-15% de surcharge pour KV cache et runtime.',
      metaDescription: 'Calculatrice VRAM: 7B exige 4-5 GB (Q4), 13B exige 8-10 GB, 70B exige 35-40 GB. Guide quantification Q4/Q5. Exigences GPU précises par taille modèle.',
      nextStep: {
        text: 'Vous connaissez votre budget VRAM. Choisissez maintenant le bon GPU pour l\'exécution locale.',
        label: 'Meilleures GPUs budget pour les LLMs locaux →',
        href: '/local-llms/best-budget-gpus-local-llm',
      },
      publishDate: '2026-04-05',
      dateModified: '2026-06-01',
      readTime: '7 min de lecture',
      educationalLevel: 'Beginner',
      primaryTerm: 'Exigences VRAM',
      toc: [
        { label: 'Points clés', anchor: '#points-cles' },
        { label: 'Formule VRAM pour les LLMs', anchor: '#formula' },
        { label: 'VRAM par taille de modèle', anchor: '#by-model-size' },
        { label: 'Comment la quantification réduit-elle les exigences VRAM?', anchor: '#quantization' },
        { label: 'Taille de lot et inférence multi-utilisateurs', anchor: '#batch-size' },
        { label: 'Surcharge VRAM: Plus que la taille du modèle', anchor: '#overhead' },
        { label: 'Contexte régional', anchor: '#regional-context' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Calculatrice VRAM', anchor: '#vram-calculator' },
        { label: 'Lectures complémentaires', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'Modèles 7B: minimum 8 GB (Q4), 10 GB confortable (Q5), 14 GB pour Q8 précision complète.',
            'Modèles 13B: minimum 10 GB (Q4), 12-14 GB confortable (Q5), 16 GB pour Q8.',
            'Modèles 70B: 35-40 GB (Q4) -- nécessite 2× RTX 4090 ou A100 80GB. Q5/Q8 nécessitent 70 GB+.',
            'La quantification (Q4, Q5, Q8) réduit VRAM de 50-75% par rapport à la précision complète (FP32).',
            'Surdimensionnez toujours de 1-2 GB pour la surcharge (KV cache, état optimiseur, système d\'exploitation).',
            'Taille de lot ≠ VRAM par inférence. L\'inférence unique utilise le même VRAM indépendamment de la taille du lot (le lot traite séquentiellement).',
            'Plus de VRAM n\'accélère pas l\'inférence d\'une seule requête. Cela n\'aide que pour les configurations multi-utilisateurs/multi-requêtes.',
          ],
        },
        formula: {
          title: 'Quelle est la formule VRAM pour les LLMs?',
          content: [
            '**La formule VRAM correcte:**',
            '',
            'VRAM (GB) = (Paramètres × Bits par poids) ÷ 8',
            '',
            'Où les bits par poids par niveau de quantification:',
            '- FP32: 32 bits -- multiplier par 4 (bytes)',
            '- Q8: 8 bits -- multiplier par 1 (byte)',
            '- Q5: 5 bits -- multiplier par 0,625',
            '- Q4: 4 bits -- multiplier par 0,5',
            '',
            '**Exemples:**',
            '',
            'Llama 3 70B en FP32:',
            '70 × 10⁹ × 32 bits ÷ 8 = 280 GB -- impraticable.',
            '',
            'Llama 3 70B en Q4:',
            '70 × 10⁹ × 4 bits ÷ 8 = 35 GB poids du modèle',
            '+ ~3 GB surcharge (KV cache + runtime) = ~38 GB total.',
            'Entre dans deux RTX 4090 (48 GB combiné).',
            '',
            'Llama 3 7B en Q4:',
            '7 × 10⁹ × 4 bits ÷ 8 = 3,5 GB poids du modèle',
            '+ ~1,5 GB surcharge = ~5 GB total.',
            'Entre dans n\'importe quelle GPU 8 GB avec marge.',
            '',
            '**En une phrase**: VRAM = (Paramètres en milliards × Bits par poids) ÷ 8 + 10-15% surcharge pour KV cache et runtime.',
          ],
        },
        byModelSize: {
          title: 'Combien de VRAM chaque taille de modèle nécessite-t-elle?',
          columns: ['Taille du modèle', 'FP32', 'Q8', 'Q5', 'Q4', 'GPU recommandé'],
          rows: [
            { 'Taille du modèle': '3B', 'FP32': '12 GB', 'Q8': '3 GB', 'Q5': '2 GB', 'Q4': '1,8 GB', 'GPU recommandé': 'RTX 5060 Ti 8GB ou n\'importe quelle GPU 8 GB' },
            { 'Taille du modèle': '7B', 'FP32': '28 GB', 'Q8': '7 GB', 'Q5': '4,5 GB', 'Q4': '3,5 GB', 'GPU recommandé': 'RTX 5070 12GB ou RTX 4060 Ti 8GB' },
            { 'Taille du modèle': '13B', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', 'GPU recommandé': 'RTX 5070 Ti 16GB ou RTX 4070 Ti 12GB' },
            { 'Taille du modèle': '22B', 'FP32': '88 GB', 'Q8': '22 GB', 'Q5': '14 GB', 'Q4': '11 GB', 'GPU recommandé': 'RTX 5080 16GB ou RTX 4080 16GB' },
            { 'Taille du modèle': '70B', 'FP32': '280 GB', 'Q8': '70 GB', 'Q5': '44 GB', 'Q4': '35 GB', 'GPU recommandé': '2× RTX 5090 ou A100 80GB' },
            { 'Taille du modèle': 'Qwen 3.6 35B-A3B (3B actif, MoE)*', 'FP32': '12 GB', 'Q8': '3 GB', 'Q5': '2 GB', 'Q4': '1,8 GB', 'GPU recommandé': 'RTX 5060 Ti 8GB ou n\'importe quelle GPU 8 GB' },
            { 'Taille du modèle': 'DeepSeek V4-Flash (13B actif / 284B total, MoE)*', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', 'GPU recommandé': 'RTX 5070 12GB ou RTX 4060 Ti 8GB' },
            { 'Taille du modèle': 'Llama 4 Scout (17B actif / 109B total, MoE)†', 'FP32': '436 GB', 'Q8': '109 GB', 'Q5': '68 GB', 'Q4': '55 GB', 'GPU recommandé': '2× RTX 4090 (48 GB) — entre dans 24 GB seulement en 1,78-bit (~20 tok/s)' },
            { 'Taille du modèle': 'gpt-oss:20b (3,6B actif / 21B total, MoE)*', 'FP32': '84 GB', 'Q8': '21 GB', 'Q5': '13 GB', 'Q4': '12 GB', 'GPU recommandé': 'RTX 5070 12GB ou n\'importe quelle GPU 16 GB' },
            { 'Taille du modèle': 'Kimi K2.6 (32B actif / 1T total, MoE)*', 'FP32': '128 GB', 'Q8': '32 GB', 'Q5': '20 GB', 'Q4': '16 GB', 'GPU recommandé': '2× RTX 5090 ou A100 80GB' },
          ],
          note: '* Modèles MoE: La VRAM est calculée à partir des paramètres actifs uniquement, non de la taille totale du modèle. † Llama 4 Scout garde ses 109B paramètres résidents, donc il nécessite ~55 GB en Q4 malgré seulement 17B actifs par token.',
        },
        quantization: {
          title: 'Comment la quantification réduit-elle les exigences VRAM?',
          content: [
            '**La quantification** réduit le nombre de bits nécessaires pour représenter chaque paramètre du modèle.',
            '- **FP32** (float 32-bit): Précision complète. 1 paramètre = 4 bytes. Aucune perte. Plus lent.',
            '- **Q8** (8-bit): 1 paramètre = 1 byte. ~6% perte de précision. 75% économies VRAM.',
            '- **Q5** (5-bit): 1 paramètre = 0,625 bytes. ~2% perte de précision. 84% économies VRAM.',
            '- **Q4** (4-bit): 1 paramètre = 0,5 bytes. ~1% perte de précision. 87,5% économies VRAM.',
            'Pour la plupart des utilisateurs, Q4 est le juste équilibre: perte de précision imperceptible, empreinte VRAM 87% plus petite.',
            'En avril 2026, Q4 est standard. Q5 et Q8 sont disponibles si vous avez du VRAM supplémentaire et désirez des gains de qualité marginaux.',
            '',
            '**En termes simples**: La quantification ressemble à prendre une photo haute résolution et la réduire en résolution inférieure -- vous perdez quelques détails, mais la taille du fichier diminue considérablement. La quantification Q4 rétrécit VRAM de 87% tout en gardant pratiquement toute l\'intelligence intacte.',
            '',
            '💡 **Conseil Pro**: Q4 est le juste équilibre pour l\'inférence locale des LLM. Tout ce qui est inférieur à Q4 (comme Q2 ou Q3) commence à dégrader notablement la qualité du modèle. Tout ce qui est supérieur (Q5+) gaspille VRAM et ralentit l\'inférence pour des gains de qualité marginaux.',
            'La VRAM détermine la taille du modèle, mais la conception du prompt détermine la qualité des sorties. Les techniques comme la chain-of-thought et le few-shot prompting peuvent combler l\'écart de qualité entre les modèles plus petits et plus grands. Explorez la [boîte à outils complète de prompt engineering](https://www.promptquorum.com/fr/prompt-engineering) pour tirer le meilleur parti des modèles que votre matériel prend en charge. Si vous disposez de 12–16 Go de VRAM et cherchez un cas concret pour tester cette boîte à outils, [Remplacer GitHub Copilot par un LLM local](/fr/power-local-llm/replace-github-copilot-with-local-llm) projette la stack Continue.dev + Ollama + Qwen3-Coder sur ces paliers de VRAM exacts.',
          ],
        },
        batchSize: {
          title: 'Et la taille de lot et l\'inférence multi-utilisateurs?',
          content: [
            '**La taille de lot affecte le débit (tokens par seconde), pas la latence d\'une seule inférence.**',
            'Un utilisateur unique demandant "Qu\'est-ce que 2+2?" utilise le même VRAM que la taille du lot soit 1 ou 32.',
            'Taille de lot = 32 signifie traiter 32 prompts en parallèle. Cela utilise ~32× plus VRAM, mais génère 32 réponses plus rapidement.',
            'Pour un utilisateur unique (utilisation typique des LLM locaux): Taille de lot = 1. VRAM est taille du modèle + 1-2 GB surcharge.',
            'Pour serveur multi-utilisateurs: Allouez taille de lot × VRAM du modèle. Un modèle 70B à lot=4 nécessite ~96 GB (24 GB × 4).',
            '',
            '⚠️ **Malentendu critique**: La taille du lot n\'affecte PAS les exigences VRAM des utilisateurs uniques. Si vous exécutez un LLM local seul, augmenter la taille du lot gaspille du VRAM sans avantage.',
          ],
        },
        overhead: {
          title: 'Avez-vous besoin de plus de VRAM que la taille du modèle?',
          content: [
            '**Oui. Au-delà des poids du modèle, ajoutez:**',
            '- **KV cache** (cache clé-valeur pour le contexte): ~5-10% VRAM supplémentaire.',
            '- **État optimiseur** (si fine-tuning): 2-4× taille du modèle (pertinent uniquement pour l\'entraînement, pas l\'inférence).',
            '- **Surcharge système** (OS, drivers, Ollama/LM Studio runtime): ~1-2 GB.',
            'Règle: Un modèle 70B Q4 (35 GB) + KV cache (3 GB) + système (2 GB) = ~40 GB alloué. Nécessite 2× RTX 4090 (48 GB combiné) ou A100 80GB.',
            'Achetez toujours des GPU avec au moins 1-2 GB de marge au-dessus des minimums théoriques.',
            '',
            '⚠️ **Risque de marge**: Les fenêtres de contexte longues (32K tokens) peuvent gonfler la surcharge KV cache à 8+ GB sur un modèle 70B. Un modèle 70B utilisant ~35 GB sur une GPU 48 GB (2× RTX 4090) laisse seulement 13 GB pour KV cache. Avec une conversation de 32K tokens, le modèle manque de VRAM à mi-conversation, causant des crashes. Réduisez soit la longueur max du contexte, soit achetez une GPU plus grande.',
          ],
        },
        mistakes: {
          title: 'Quelles sont les erreurs VRAM les plus courantes?',
          items: [
            'Plus de VRAM = inférence plus rapide. Faux. La taille VRAM n\'affecte pas la vitesse. La bande passante mémoire (GB/sec) le fait, et c\'est fixe par GPU.',
            'Taille de lot = limite de token séquentielle. Faux. Taille de lot = requêtes parallèles. L\'inférence unique utilise batch=1 indépendamment de la taille VRAM.',
            'Le modèle 70B nécessite 24 GB VRAM. Faux. 70B en Q4 nécessite ~35 GB. Une seule RTX 4090 (24 GB) ne peut pas exécuter de modèle 70B à n\'importe quelle quantification. Q8 nécessite ~70 GB. Calculez toujours: (paramètres × bits/poids) ÷ 8 plus ~10% surcharge.',
            '**Ne pas compter la croissance du KV cache avec les contextes longs**: Un modèle 70B en Q4 nécessite ~35 GB pour les poids. Une fenêtre de contexte 32K ajoute ~3-8 GB supplémentaires selon le mécanisme d\'attention. Sur une GPU 40 GB, il ne reste presque pas de marge et cause des erreurs OOM. Réduisez soit la longueur du contexte, soit utilisez une GPU avec plus de marge VRAM.',
            '**Confondre RAM système avec VRAM GPU**: Quand les gens disent "J\'ai 32 GB de RAM", ils signifient généralement RAM système (mémoire CPU). VRAM est la mémoire dédiée sur la GPU. Ce sont des pools séparés. Une machine avec 32 GB RAM système et une GPU 8 GB peut exécuter un modèle 7B sur GPU, mais ne peut pas exécuter un modèle 13B sur GPU -- elle retomberait sur inférence CPU à 5-15 tok/sec.',
          ],
        },
        regionalContext: {
          title: 'Contexte régional',
          content: [
            '**UE / RGPD**',
            'Les organisations de l\'UE traitant des données localement doivent s\'assurer que leur matériel dispose de suffisamment de VRAM pour exécuter le modèle requis entièrement sur l\'appareil -- le basculement CPU partiel n\'envoie aucune donnée en externe, mais réduit dramatiquement la vitesse d\'inférence, le rendant impraticable pour utilisation en production. Pour les équipes d\'entreprise de l\'UE exécutant le traitement de documents ou l\'extraction de données localement sous le RGPD, la configuration minimale recommandée est une RTX 4090 (24 GB) pour les modèles 13-30B, ou deux RTX 4090 (48 GB combiné) pour les modèles 70B. Les directives CNIL recommandent de valider que le matériel d\'inférence locale est capable d\'exécuter le modèle requis sans basculement cloud.',
            '',
            '**Japon (METI)**',
            'Les exigences de documentation de gouvernance METI bénéficient d\'une configuration de matériel définie et stable. Documenter le modèle GPU, la capacité VRAM et le niveau de quantification du modèle crée un record d\'environnement d\'inférence complet. Les équipes d\'entreprise françaises standardisent généralement sur une seule SKU GPU par déploiement (ex: RTX 4090 pour serveurs d\'inférence d\'équipe) pour simplifier la documentation de gouvernance.',
            '',
            '**Chine**',
            'Les entreprises chinoises déployant Qwen3 72B localement sous la Loi sur la sécurité des données de Chine (数据安全法) nécessitent 40+ GB VRAM -- un serveur dual RTX 4090 (48 GB combiné) est la configuration de qualité grand public standard. Qwen3 32B (20 GB en Q4) est déployable sur une seule RTX 4090 avec marge pour surcharge de contexte et est la configuration recommandée pour les équipes sans budget pour configurations GPU double.',
          ],
        },
        vramCalculator: {
          id: 'vram-calculator',
          title: 'Calculatrice VRAM',
          component: 'VramCalculator',
          content: 'Sélectionnez la taille de votre modèle et la quantification pour estimer les exigences VRAM.',
        },
        faqSection: {
          title: 'FAQ',
          faqs: [
            { q: 'Puis-je exécuter Mistral Small sur une GPU 6 GB?', a: 'À peine, à Q4 avec surcharge serrée. Pratiquement, non. Achetez au moins 8 GB. Vous aurez des erreurs OOM avec 6 GB.' },
            { q: 'Combien de VRAM ai-je besoin pour fine-tuner un modèle 7B?', a: 'Pour LoRA: 12-16 GB. Fine-tuning complet: 28 GB+. Le fine-tuning nécessite l\'état optimiseur (2-4× VRAM du modèle), pas seulement l\'inférence.' },
            { q: 'Est-ce que 12 GB est suffisant pour Llama 3 13B?', a: 'À Q4, oui à peine. À Q5 ou Q8, non. 12 GB est juste. 16 GB est confortable.' },
            { q: 'Ai-je besoin de 24 GB pour un modèle 70B?', a: 'À Q4, oui. À Q5+, non. Une quantification plus élevée (Q5, Q8) nécessite 32 GB+ pour 70B.' },
            { q: 'L\'augmentation de la taille du lot réduit-elle VRAM pour l\'inférence unique?', a: 'Non. L\'inférence unique utilise toujours VRAM batch=1. La taille du lot n\'aide que le débit (scénarios multi-utilisateurs).' },
            { q: 'Quelle est la meilleure quantification pour la précision?', a: 'Q8 est pratiquement une perte imperceptible. Q5 est ~2% perte. Q4 est ~1% perte. Pour la plupart, Q4 est le juste équilibre.' },
            { q: 'Puis-je décharger une partie du VRAM sur RAM CPU?', a: 'Oui, via fractionnement de couches (NVLink). Llama.cpp et Ollama le supportent. Les performances baissent 30-50% mais ça marche.' },
            { q: 'Quel est le minimum VRAM pour exécuter un LLM local?', a: '4 GB VRAM avec un modèle 3B à quantification Q4 -- le modèle utilise ~1,8 GB, laisse de la marge pour KV cache et runtime. Le minimum pratique pour des résultats utiles est 8 GB VRAM avec un modèle 7B à Q4. Sous 6 GB, la sélection de modèle est sévèrement limitée et la plupart des modèles 7B causent des erreurs OOM.' },
            { q: 'Le VRAM Apple Silicon fonctionne-t-il de la même manière que le VRAM GPU pour les LLMs?', a: 'Apple Silicon utilise une mémoire unifiée partagée entre CPU et GPU -- l\'ensemble du pool de mémoire est disponible pour l\'inférence de modèle, pas seulement une tranche GPU dédiée. Un MacBook Pro M3 avec 18 GB de mémoire unifiée peut exécuter un modèle 13B à Q4 (~7 GB) avec marge pour KV cache et surcharge OS. Cela équivaut à 18 GB VRAM GPU sur une GPU discrète.' },
            { q: 'Combien de VRAM un modèle 7B nécessite-t-il à différents niveaux de quantification?', a: '7B en FP32: ~28 GB -- impraticable sur GPU grand public. 7B en Q8: ~7 GB -- rentre sur RTX 4070 Ti 12 GB avec marge. 7B en Q5: ~4,5 GB -- rentre sur n\'importe quelle GPU 8 GB. 7B en Q4: ~3,5 GB modèle + ~1,5 GB surcharge = ~5 GB total -- rentre sur n\'importe quelle GPU 6 GB avec marge serrée, 8 GB confortablement.' },
          ],
        },
        relatedReading: {
          title: 'Lectures complémentaires',
          items: [
            '[Guide de matériel Local LLM 2026](/fr/local-llms/local-llm-hardware-guide-2026) -- recommandations de tiers GPU complètes avec prix et benchmarks tok/sec pour chaque tiers VRAM',
            '[Installer Ollama](/fr/local-llms/how-to-install-ollama) -- configurez Ollama pour exécuter les modèles correspondant à votre tiers VRAM avec quantification correcte',
            '[Qwen vs Llama vs Mistral](/fr/local-llms/qwen-vs-llama-vs-mistral) -- comparaison de famille de modèles avec exigences VRAM exactes pour chaque taille en Q4_K_M',
            '[Exécuter les Local LLMs sur un Laptop](/fr/local-llms/local-llm-on-laptop) -- contraintes VRAM spécifiques au laptop et recommandations de quantification pour mémoire unifiée',
            '[Dépanner la configuration Local LLM](/fr/local-llms/troubleshooting-local-llm-setup) -- corrigez les erreurs mémoire insuffisante quand le modèle dépasse le VRAM disponible',
            '[Combien de mémoire unifiée pour les LLM locaux ?](/fr/local-llms/how-much-unified-memory-for-local-llm) -- L\'équivalent VRAM sur Mac : 16 Go vs 36 Go vs 64 Go vs 128 Go pour Apple Silicon.',
            '[Modèles 70B sur Apple Silicon M5 Max](/fr/local-llms/running-70b-models-apple-silicon-m5-max) -- Comment la mémoire unifiée permet aux Macs de faire tourner 70B là où 24 Go VRAM échoue.',
            '[Meilleurs modèles pour Apple Silicon 2026](/fr/local-llms/best-models-apple-silicon-2026) -- Recommandations de modèles par tier de mémoire : 16 Go à 128 Go.',
            '[GPU vs CPU vs Apple Silicon pour les LLM locaux](/fr/local-llms/gpu-vs-cpu-vs-apple-silicon) -- Comparaison trois plateformes : NVIDIA CUDA, mémoire unifiée Apple et inférence CPU uniquement.',
          ],
        },
        sources: {
          title: 'Sources',
          items: [
            '[NVIDIA. (2026). "CUDA Memory Architecture."](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#memory-hierarchy) -- documentation architecture VRAM GPU, bande passante mémoire et hiérarchie.',
            '[Ollama. (2026). "Ollama Model Library."](https://ollama.com/library) -- exigences VRAM officielles et niveaux de quantification pour tous les modèles supportés.',
            '[llama.cpp Contributors. (2026). "llama.cpp Quantization Guide."](https://github.com/ggerganov/llama.cpp#quantization) -- implémentation quantification Q4/Q5/Q8, calculs mémoire et benchmarks de qualité.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Combien de VRAM avez-vous besoin pour exécuter un Local LLM en 2026?',
        description: 'VRAM exact pour Local LLMs: 7B nécessite 4-5 GB (Q4), 13B nécessite 8-10 GB, 70B nécessite 35-40 GB. Formule, sélection GPU et compromis de quantification. Guide 2026.',
        'url': 'https://www.promptquorum.com/fr/local-llms/how-much-vram-local-llm',
        dateModified: '2026-06-01',
        'datePublished': '2026-04-04',
        author: { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/author/hans-kuepper' },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.points-cles']
        }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Exigences VRAM pour l\'exécution locale des LLM',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Déterminer votre taille de modèle' },
          { '@type': 'HowToStep', position: 2, name: 'Choisir un niveau de quantification (Q4 recommandé)' },
          { '@type': 'HowToStep', position: 3, name: 'Calculer VRAM avec formule: (Paramètres × Bits) ÷ 8' },
          { '@type': 'HowToStep', position: 4, name: 'Ajouter 10-15% surcharge pour KV cache' },
          { '@type': 'HowToStep', position: 5, name: 'Choisir une GPU avec au moins ce VRAM' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Exigences VRAM par taille de modèle',
        numberOfItems: 5,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Modèle 3B', description: '1,8 GB VRAM (Q4), rentre sur RTX 3060 8GB' },
          { '@type': 'ListItem', position: 2, name: 'Modèle 7B', description: '3,5-7 GB VRAM (Q4-Q8), rentre sur RTX 4060 Ti ou supérieur' },
          { '@type': 'ListItem', position: 3, name: 'Modèle 13B', description: '7-13 GB VRAM (Q4-Q8), nécessite RTX 4070 Ti ou supérieur' },
          { '@type': 'ListItem', position: 4, name: 'Modèle 22B', description: '11-22 GB VRAM (Q4-Q8), nécessite RTX 4080 ou RTX 3090' },
          { '@type': 'ListItem', position: 5, name: 'Modèle 70B', description: '35-70 GB VRAM (Q4-Q8), nécessite 2× RTX 4090 ou A100 80GB' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Puis-je exécuter Mistral Small sur une GPU 6 GB?', acceptedAnswer: { '@type': 'Answer', text: 'À peine, à Q4 avec surcharge serrée. Pratiquement, non. Achetez au moins 8 GB. Vous aurez des erreurs OOM avec 6 GB.' } },
          { '@type': 'Question', name: 'Combien de VRAM ai-je besoin pour fine-tuner un modèle 7B?', acceptedAnswer: { '@type': 'Answer', text: 'Pour LoRA: 12-16 GB. Fine-tuning complet: 28 GB+. Le fine-tuning nécessite l\'état optimiseur (2-4× VRAM du modèle), pas seulement l\'inférence.' } },
          { '@type': 'Question', name: 'Est-ce que 12 GB est suffisant pour Llama 3 13B?', acceptedAnswer: { '@type': 'Answer', text: 'À Q4, oui à peine. À Q5 ou Q8, non. 12 GB est juste. 16 GB est confortable.' } },
          { '@type': 'Question', name: 'Ai-je besoin de 24 GB pour un modèle 70B?', acceptedAnswer: { '@type': 'Answer', text: 'À Q4, oui. À Q5+, non. Une quantification plus élevée (Q5, Q8) nécessite 32 GB+ pour 70B.' } },
          { '@type': 'Question', name: 'L\'augmentation de la taille du lot réduit-elle VRAM pour l\'inférence unique?', acceptedAnswer: { '@type': 'Answer', text: 'Non. L\'inférence unique utilise toujours VRAM batch=1. La taille du lot n\'aide que le débit (scénarios multi-utilisateurs).' } },
          { '@type': 'Question', name: 'Quelle est la meilleure quantification pour la précision?', acceptedAnswer: { '@type': 'Answer', text: 'Q8 est pratiquement une perte imperceptible. Q5 est ~2% perte. Q4 est ~1% perte. Pour la plupart, Q4 est le juste équilibre.' } },
          { '@type': 'Question', name: 'Puis-je décharger une partie du VRAM sur RAM CPU?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, via fractionnement de couches (NVLink). Llama.cpp et Ollama le supportent. Les performances baissent 30-50% mais ça marche.' } },
          { '@type': 'Question', name: 'Quel est le minimum VRAM pour exécuter un LLM local?', acceptedAnswer: { '@type': 'Answer', text: '4 GB VRAM avec un modèle 3B à quantification Q4 -- le modèle utilise ~1,8 GB, laisse de la marge pour KV cache et runtime. Le minimum pratique pour des résultats utiles est 8 GB VRAM avec un modèle 7B à Q4. Sous 6 GB, la sélection de modèle est sévèrement limitée et la plupart des modèles 7B causent des erreurs OOM.' } },
          { '@type': 'Question', name: 'Le VRAM Apple Silicon fonctionne-t-il de la même manière que le VRAM GPU pour les LLMs?', acceptedAnswer: { '@type': 'Answer', text: 'Apple Silicon utilise une mémoire unifiée partagée entre CPU et GPU -- l\'ensemble du pool de mémoire est disponible pour l\'inférence de modèle, pas seulement une tranche GPU dédiée. Un MacBook Pro M3 avec 18 GB de mémoire unifiée peut exécuter un modèle 13B à Q4 (~7 GB) avec marge pour KV cache et surcharge OS. Cela équivaut à 18 GB VRAM GPU sur une GPU discrète.' } },
          { '@type': 'Question', name: 'Combien de VRAM un modèle 7B nécessite-t-il à différents niveaux de quantification?', acceptedAnswer: { '@type': 'Answer', text: '7B en FP32: ~28 GB -- impraticable sur GPU grand public. 7B en Q8: ~7 GB -- rentre sur RTX 4070 Ti 12 GB avec marge. 7B en Q5: ~4,5 GB -- rentre sur n\'importe quelle GPU 8 GB. 7B en Q4: ~3,5 GB modèle + ~1,5 GB surcharge = ~5 GB total -- rentre sur n\'importe quelle GPU 6 GB avec marge serrée, 8 GB confortablement.' } },
        ],
      },
    },
    de: {
      theme: 'GPU Buying Guides',
      title: 'VRAM-Richtlinie: 7B=8GB, 70B=48GB (2026 Guide)',
      seoTitle: 'VRAM-Richtlinie: 7B=8GB, 70B=48GB (2026 Guide)',
      intro: 'Für 7B-Modelle bei Q4-Quantisierung benötigen Sie 4-5 GB VRAM -- jede moderne GPU mit 8 GB verwaltet dies mühelos. Für 13B-Modelle: 8-10 GB VRAM. Für 70B: 35-40 GB, erfordert zwei RTX 4090 oder eine einzelne A100. Ab April 2026 ist Q4 (4-Bit) die Standard-Quantisierungsmethode -- sie reduziert VRAM-Anforderungen um 87% gegenüber vollständiger Präzision mit unter 1% Qualitätsverlust für die meisten Aufgaben. Die VRAM-Formel: (Parameter in Milliarden × Bits pro Gewicht) ÷ 8, plus 10-15% Overhead für KV-Cache und Laufzeit.',
      metaDescription: 'VRAM-Richtlinie: 7B=8GB, 13B=16GB, 70B=48GB (Q4). Einfacher Rechner + Formel für jede Modellgröße und Quantisierungsstufe.',
      nextStep: {
        text: 'Sie kennen Ihr VRAM-Budget. Wählen Sie jetzt die richtige GPU dafür.',
        label: 'Beste Budget-GPUs für lokale LLMs →',
        href: '/local-llms/best-budget-gpus-local-llm',
      },
      publishDate: '2026-04-05',
      dateModified: '2026-06-01',
      readTime: '7 min Lesezeit',
      educationalLevel: 'Beginner',
      primaryTerm: 'VRAM-Anforderungen',
      toc: [
        { label: 'Zusammenfassung', anchor: '#tldr' },
        { label: 'VRAM-Berechnungsformel für lokale LLMs', anchor: '#formula' },
        { label: 'VRAM nach Modellgröße', anchor: '#by-model-size' },
        { label: 'MoE-Modell-VRAM', anchor: '#moe-vram' },
        { label: 'Wie reduziert Quantisierung VRAM-Anforderungen?', anchor: '#quantization' },
        { label: 'Batch-Größe und Multi-User-Inferenz', anchor: '#batch-size' },
        { label: 'VRAM-Overhead: Mehr als nur Modellgröße', anchor: '#overhead' },
        { label: 'Regionales Umfeld', anchor: '#regional-context' },
        { label: 'Häufige Fehler', anchor: '#mistakes' },
        { label: 'VRAM-Rechner', anchor: '#vram-calculator' },
        { label: 'Weiterführende Literatur', anchor: '#related-reading' },
        { label: 'Häufig gestellte Fragen', anchor: '#faq' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      sections: {
        tldr: { id: 'key-takeaways',
 isTldr: true, title: 'Zusammenfassung', items: ['7B-Modelle: Minimum 8 GB (Q4), komfortabel 10 GB (Q5), vollständig 14 GB.', '13B-Modelle: Minimum 12 GB (Q4), komfortabel 16 GB (Q5).', '70B-Modelle: Minimum 35-40 GB (Q4) -- erfordert 2× RTX 4090 oder A100.', 'Q4-Quantisierung: Reduziert VRAM um 87% gegenüber vollständiger Präzision, unter 1% Qualitätsverlust.', 'Apple Silicon: Einheitlicher Speicher ist vollständig für LLM-Inferenz verfügbar -- MacBook Pro M3 18 GB kann Llama3 13B Q4 ausführen.', 'RTX 4060 Ti 8 GB: 7B Q4 ist machbar, aber der Cache ist eng. RTX 4070 12 GB ist sicherer.', 'CPU-Inferenz: Möglich, aber GPU ist 20-40× schneller -- praktisch wird ein GPU mit mindestens 8 GB empfohlen.'] },
        formula: { title: 'VRAM-Berechnungsformel für lokale LLMs', content: ['VRAM erforderlich = (Modellparameter in Milliarden × Bits pro Gewicht) ÷ 8 + (KV-Cache + Laufzeit-Overhead)', 'Beispiel: Llama3 7B Q4 = (7 × 4) ÷ 8 + 1,5 GB = 3,5 + 1,5 = 5 GB', 'Q4: 32-Bit-Werte werden auf 4 Bits komprimiert (8× Reduktion).', 'Q8: 32-Bit → 8-Bit (4× Reduktion), nahezu vollständige Präzision.', 'FP32: Keine Kompression, vollständige Präzision, VRAM-intensiv.', 'KV-Cache: Proportional zur Sequenzlänge -- 128-Token-Ausgabe +1-2 GB, 2048-Token +5 GB.'] },
        'by-model-size': { title: 'VRAM nach Modellgröße', columns: ['Modellgröße', 'FP32', 'Q8', 'Q5', 'Q4', 'Empfohlene GPU'], rows: [{ 'Modellgröße': '3B', 'FP32': '12 GB', 'Q8': '3 GB', 'Q5': '2 GB', 'Q4': '1,5 GB', 'Empfohlene GPU': 'CPU oder RTX 3060 (3GB)' }, { 'Modellgröße': '7B', 'FP32': '28 GB', 'Q8': '7 GB', 'Q5': '4,5 GB', 'Q4': '3,5 GB', 'Empfohlene GPU': 'RTX 4060 Ti (8GB), RTX 4070 (12GB)' }, { 'Modellgröße': '13B', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', 'Empfohlene GPU': 'RTX 4080 (16GB), RTX 6800 XT (16GB)' }, { 'Modellgröße': '70B', 'FP32': '280 GB', 'Q8': '70 GB', 'Q5': '44 GB', 'Q4': '35-40 GB', 'Empfohlene GPU': 'Zwei RTX 4090 (24GB×2) oder A100 (80GB)' }, { 'Modellgröße': 'Qwen 3.6 35B-A3B (3B aktiv, MoE)*', 'FP32': '12 GB', 'Q8': '3 GB', 'Q5': '2 GB', 'Q4': '1,5 GB', 'Empfohlene GPU': 'CPU oder RTX 3060 (3GB)' }, { 'Modellgröße': 'DeepSeek V4-Flash (13B aktiv / 284B gesamt, MoE)*', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', 'Empfohlene GPU': 'RTX 4060 Ti (8GB), RTX 4070 (12GB)' }, { 'Modellgröße': 'Llama 4 Scout (17B aktiv / 109B gesamt, MoE)†', 'FP32': '436 GB', 'Q8': '109 GB', 'Q5': '68 GB', 'Q4': '55 GB', 'Empfohlene GPU': 'Zwei RTX 4090 (48 GB) — passt in 24 GB nur bei 1,78-Bit (~20 tok/s)' }, { 'Modellgröße': 'gpt-oss:20b (3,6B aktiv / 21B gesamt, MoE)*', 'FP32': '84 GB', 'Q8': '21 GB', 'Q5': '13 GB', 'Q4': '12 GB', 'Empfohlene GPU': 'RTX 5070 12GB oder jede 16-GB-GPU' }, { 'Modellgröße': 'Kimi K2.6 (32B aktiv / 1T gesamt, MoE)*', 'FP32': '128 GB', 'Q8': '32 GB', 'Q5': '20 GB', 'Q4': '16 GB', 'Empfohlene GPU': 'Zwei RTX 4090 (24GB×2) oder A100 (80GB)' }, { 'Modellgröße': 'Kontext (KV-Cache)', 'FP32': '+40 GB @ 2048 Token', 'Q8': '+10 GB @ 2048 Token', 'Q5': '+6 GB @ 2048 Token', 'Q4': '+3-5 GB @ 2048 Token', 'Empfohlene GPU': 'Durch Ollama-Kontextlänge und top_k verwaltet' }], note: '* MoE-Modelle: VRAM wird nur aus aktiven Parametern berechnet, nicht aus der Gesamtmodellgröße. † Llama 4 Scout hält alle 109B Parameter resident, daher benötigt es ~55 GB bei Q4 trotz nur 17B aktiver Parameter pro Token.' },
        quantization: { title: 'Wie reduziert Quantisierung VRAM-Anforderungen?', content: ['Quantisierung komprimiert Modellgewichte zu niedriger Präzision. Die Umwandlung von FP32 (32-Bit) auf Q4 (4-Bit) reduziert Werte um 87%.', '', '**Q4 (4-Bit)**: Standard für Consumer-GPUs. VRAM: 3,5× Reduktion. Qualität: Unter 1% Verlust. Für fast alle Aufgaben empfohlen.', '**Q5 (5-Bit)**: Ähnlich wie Q4, aber 2% bessere Genauigkeit. VRAM: 25% mehr, minimale Qualitätsverbesserung. Nur für fortgeschrittene Anwendungsfälle.', '**Q8 (8-Bit)**: Nahezu vollständige Präzision (<0,5% Verlust). VRAM-Reduktion: 4×. RTX 4080+ empfohlen.', '**FP32 (Vollständige Präzision)**: Alle Gewichte werden mit 32 Bit gespeichert. Auf Consumer-GPUs nicht praktikabel -- 70B FP32 benötigt 280 GB VRAM.', 'VRAM bestimmt die Modellgröße, aber das Prompt-Design bestimmt die Ausgabequalität. Techniken wie Chain-of-Thought und Few-Shot-Prompting können die Qualitätslücke zwischen kleineren und größeren Modellen schließen. Entdecken Sie das vollständige [Prompt-Engineering-Toolkit](https://www.promptquorum.com/de/prompt-engineering), um mehr aus den Modellen herauszuholen, die Ihre Hardware unterstützt. Wenn Sie 12–16 GB VRAM haben und einen konkreten Coding-Workload zum Testen dieses Toolkits suchen, beschreibt [GitHub Copilot durch ein lokales LLM ersetzen](/de/power-local-llm/replace-github-copilot-with-local-llm) den Continue.dev + Ollama + Qwen3-Coder-Stack passend zu genau diesen VRAM-Stufen.'] },
        'batch-size': { title: 'Batch-Größe und Multi-User-Inferenz', content: ['Batch-Größe ist die Anzahl der Text-Eingaben, die in einer Ausführung verarbeitet werden.', '', '**Single-User-Inferenz (batch=1)**: Eine Eingabeaufforderung auf einer GPU. VRAM: Nur Modellgröße + KV-Cache.', 'Beispiel: Llama3 7B Q4 = 3,5 GB (Modell) + 1,5 GB (KV-Cache) = 5 GB.', '', '**Batch-Verarbeitung (batch=4, 8, 16)**: Mehrere Eingaben gleichzeitig verarbeiten. VRAM: Linear steigend.', 'batch=4: ×4 VRAM (= 20 GB für 7B Q4). Durchsatz: ×3-3,5 (Parallelisierungsgewinn).', '', 'Batch-Inferenz ist wichtig für Multi-User-Server (3-5 Personen, gleichzeitige Anfragen). Für Single-User/Entwicklung nicht erforderlich.', '', 'KV-Cache (abhängig von Sequenzlänge):'] },
        overhead: { title: 'VRAM-Overhead: Mehr als nur Modellgröße', content: ['Die Parametergröße des Modells ist nicht das gesamte VRAM-Anforderungs-Bild. Zusätzlicher Speicher ist erforderlich:', '', '**KV-Cache (Key-Value Cache)**: Das Modell muss vorherige Token „merken". Nebenprodukt des Transformer-Aufmerksamkeitsmechanismus.', '- Proportional zur Eingabe-Ausgabe-Länge.', '- 7B-Modell, 2048-Token-Kontext, batch=1: +2-4 GB.', '', '**Aktivierungen**: Zwischenrechenergebnisse während der Inferenz.', '- Typischerweise 10-15% der Modellgröße.', '- 7B: +0,7-1,5 GB.', '', '**Laufzeit-Overhead**: CUDA-Speicherpool, Framebuffer, OS-Reservierungen.', '- Typischerweise 0,5-1,5 GB.'] },
        mistakes: { title: 'Häufige Fehler', content: ['**Missverständnis 1: „VRAM erforderlich = Modellgröße"**', 'VRAM ist immer größer als die Modellgröße. 3,5 GB-Modell benötigt mindestens 5 GB. RTX 4060 Ti 8 GB ist sicher, aber RTX 3060 6 GB birgt Risiken.', '', '**Missverständnis 2: „Apple Silicon (M3) Speicher ist nicht das gleiche wie GPU VRAM"**', 'Apple Silicon verwendet Unified Memory -- CPU und GPU teilen einen Speicherpool. M3 18 GB entspricht 18 GB GPU VRAM. Llama3 13B Q4 (~7 GB) kann auf M3 16 GB ausgeführt werden.', '', '**Missverständnis 3: „Quantisierung verlangsamt die Inferenz"**', 'Tatsächlich: Q4 ist schneller als Q5/Q8. Niedrigere Speicherbandbreite, effizienterer Cache. Ollama: Q4 ist einige Prozentpunkte schneller.'] },
        'regional-context': { title: 'Regionales Umfeld', content: ['**EU und Deutschland (DSGVO + BSI)**', 'Die DSGVO verlangt von Unternehmen, dass Modellgewichte und Trainingsdaten auf dem EU-Territorium gespeichert bleiben. Lokale LLM-Inferenz ist eine Compliance-Anforderung, nicht optional. Das BSI (Bundesamt für Sicherheit in der Informationstechnik) empfiehlt lokale Inferenz als Best Practice für Unternehmen mit sensiblen Daten.', '', '**Enterprise-Leitlinien für den deutschen Mittelstand:**', '- **1-50 Nutzer:** RTX 4070 Ti (12 GB) mit Llama3 13B Q4 (7-8 GB). Skalierbar mit Ollama im single-GPU-Modus.', '- **50-500 Nutzer:** RTX A6000 (48 GB) oder Dual RTX 4080 (32 GB) für parallele Anfragen und Batch-Verarbeitung. Erfordert vLLM oder Text Generation WebUI.', '- **500+ Nutzer:** A100 (80 GB) oder H100 (80 GB). Enterprise-Setup mit Load-Balancing über mehrere Server.', '', '**BSI-Sicherheitsempfehlungen:**', '- ECC-GPUs (A6000, A100) für Speicherfehler-Detektion.', '- GPU-Speicher-Dumps verhindern durch physische Sicherheit oder Encrypted Memory (wenn verfügbar).', '- DSGVO-Audit für Modell-Abhängigkeiten und Training-Daten-Herkunft obligatorisch.'] },
        vramCalculator: { id: 'vram-calculator', title: 'VRAM-Rechner', component: 'VramCalculator', content: 'Wählen Sie Ihre Modellgröße und Quantisierung aus, um die VRAM-Anforderungen zu schätzen.' },
        faqSection: { faqs: [{ q: 'Kann ein 3B-Modell auf meiner GPU laufen?', a: 'RTX 3060 (3 GB) oder CPU. Q4-Quantisierung benötigt 1,5-2 GB VRAM. Ollama, Llama.cpp, LM Studio unterstützen alle.' }, { q: 'Ist RTX 4060 ausreichend für 7B Q4?', a: 'Knapp. RTX 4060 (8 GB) sollte 5 GB theoretisch verwalten, aber OS/Laufzeit-Overhead (0,5-1,5 GB) wird eng. RTX 4070 (12 GB) empfohlen.' }, { q: 'Sind 12 GB für Llama3 13B ausreichend?', a: 'Q4 knapp. Q5 oder Q8 nicht. 12 GB ist eng. 16 GB komfortabel.' }, { q: 'Benötige ich 24 GB für ein 70B-Modell?', a: 'Q4 ja. Q5+ nein. Höhere Quantisierung (Q5, Q8) benötigt 32 GB+. 70B mindestens 35-40 GB erforderlich.' }, { q: 'Reduziert höhere Batch-Größe VRAM für einzelne Inferenz?', a: 'Nein. Einzelne Inferenz verwendet immer batch=1. Batch-Größe hilft nur Durchsatz (Multi-User-Szenarios).' }, { q: 'Was ist die präziseste Quantisierung?', a: 'Q8 nahezu unmerklicher Verlust. Q5 ~2% Verlust. Q4 ~1% Verlust. Für die meisten Fälle Q4 beste Balance.' }, { q: 'Kann ich Teil des VRAM auf CPU-RAM auslagern?', a: 'Ja, über Layer-Splitting (NVLink). Llama.cpp und Ollama unterstützen es. Leistung sinkt 30-50%.' }, { q: 'Was ist die minimale VRAM für lokale LLM-Ausführung?', a: '4 GB VRAM mit 3B Q4-Modell -- Modell ~1,8 GB, KV-Cache hat Platz. Praktisches Minimum 8 GB VRAM + 7B Q4. Unter 6 GB OOM für die meisten 7B-Modelle.' }, { q: 'Ist Apple Silicon VRAM dasselbe wie GPU VRAM?', a: 'Apple Silicon verwendet Unified Memory zwischen CPU/GPU gemeinsam -- ganzer Speicherpool verfügbar für Modell-Inferenz. M3 18 GB = GPU 18 GB VRAM. MacBook Pro M3 18 GB kann Llama3 13B Q4 (~7 GB) + Overhead ausführen.' }, { q: 'Wie viel VRAM benötigt 7B bei verschiedenen Quantisierungen?', a: '7B FP32: ~28 GB -- unpraktisch auf Consumer-GPUs. 7B Q8: ~7 GB -- passt auf RTX 4070 Ti 12 GB mit Puffer. 7B Q5: ~4,5 GB -- passt auf 8 GB GPU. 7B Q4: ~3,5 GB Modell + ~1,5 GB Overhead = ~5 GB -- passt auf 6 GB GPU eng, 8 GB komfortabel.' }, { q: 'Was sind die VRAM-Anforderungen für DSGVO-konforme lokale Inferenz in Unternehmen?', a: 'Minimum RTX 4070 Ti (12 GB) für bis zu 50 Nutzer mit Llama3 13B Q4. Für 50-500 Nutzer RTX A6000 (48 GB) oder Dual RTX 4080 (32 GB). ECC-GPU empfohlen für Speicherfehler-Detektion. GPU-Speicher-Dumps müssen verhindert werden (Firmware/physische Sicherheit).' }, { q: 'Welche GPU empfiehlt sich für einen Team-Server im deutschen Mittelstand?', a: 'RTX 4070 Ti (12 GB) für 1-50 Mitarbeiter. RTX A6000 (48 GB) oder Dual RTX 4080 (32 GB) für 50-500 Mitarbeiter. RTX 4070 Ti kann Llama3 13B Q4 + vLLM mit 3-5 gleichzeitigen Anfragen verwalten. Größere Teams benötigen A100 (80 GB) oder H100 und Enterprise-Clustering.' }] },
        relatedReading: { title: 'Weiterführende Literatur', items: ['/de/local-llms/best-local-llm-models-2026', '/de/local-llms/how-to-run-ollama-locally', '/de/local-llms/local-llm-hardware-guide-2026', '/de/local-llms/best-amd-gpus-local-llm', '/de/local-llms/local-llm-security-privacy-checklist', '/de/local-llms/how-much-unified-memory-for-local-llm', '/de/local-llms/running-70b-models-apple-silicon-m5-max', '/de/local-llms/best-models-apple-silicon-2026', '/de/local-llms/gpu-vs-cpu-vs-apple-silicon'] },
        sources: { title: 'Quellen', items: ['NVIDIA CUDA-Dokumentation: GPU-Speicherverwaltung, Tensor Cores, Compute Capability', 'Ollama-Dokumentation: VRAM-Anforderungen, Quantisierungsschemata, GPU-Kompatibilitätsmatrix', 'Llama.cpp GitHub: GGUF-Format, Q4/Q5/Q8-Implementierung, Speicher-Profilierung'] },
      },
schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Wie viel VRAM benötigen Sie für einen lokalen LLM im Jahr 2026?', description: 'Exaktes VRAM für lokale LLMs: 7B benötigt 4-5 GB (Q4), 13B benötigt 8-10 GB, 70B benötigt 35-40 GB. Formel, GPU-Auswahl, Quantisierungs-Tradeoffs.', 'url': 'https://www.promptquorum.com/de/local-llms/how-much-vram-local-llm', author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/author/hans-kuepper' }, datePublished: '2026-04-05', dateModified: '2026-06-01', inLanguage: 'de', image: '/og-image.png', publisher: { '@type': 'Organization', name: 'PromptQuorum', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } } },
      howToSchema: { '@context': 'https://schema.org', '@type': 'HowTo', name: 'VRAM-Anforderungen für lokale LLMs berechnen', step: [{ '@type': 'HowToStep', name: 'VRAM-Berechnungsformel verstehen', text: 'VRAM = (Milliarden Parameter × Bits pro Gewicht) ÷ 8 + KV-Cache + Overhead' }, { '@type': 'HowToStep', name: 'Modellgröße auswählen', text: '7B (Anfänger), 13B (empfohlen), 70B (high-performance) wählen.' }, { '@type': 'HowToStep', name: 'Quantisierungsstufe bestimmen', text: 'Q4 (Standard, VRAM-effizient), Q5 (Balance), Q8 (Genauigkeit prioritär) wählen.' }, { '@type': 'HowToStep', name: 'KV-Cache-Overhead addieren', text: 'Bei Sequenzlänge 2048 +2-5 GB addieren.' }, { '@type': 'HowToStep', name: 'GPU-Speicher überprüfen', text: 'RTX 4070 (12 GB) minimum empfohlen. Größer als berechnet wählen.' }] },
      itemListSchema: { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Lokale LLM VRAM-Anforderungen Kurzanleitung', itemListElement: [{ '@type': 'ListItem', position: 1, name: '7B Q4 Modell', description: '4-5 GB VRAM. RTX 4070 (12 GB) empfohlen.' }, { '@type': 'ListItem', position: 2, name: '13B Q4 Modell', description: '8-10 GB VRAM. RTX 4080 (16 GB) empfohlen.' }, { '@type': 'ListItem', position: 3, name: '70B Q4 Modell', description: '35-40 GB VRAM. Zwei RTX 4090 (48 GB total) oder A100 (80 GB).' }, { '@type': 'ListItem', position: 4, name: 'KV-Cache', description: 'Proportional zu Output-Token. 2048 Token +2-5 GB.' }, { '@type': 'ListItem', position: 5, name: 'Apple Silicon (M3)', description: 'Unified Memory gleichwertig zu GPU. M3 18 GB ≈ GPU 18 GB VRAM.' }] },
      faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'de', mainEntity: [{ '@type': 'Question', name: 'Kann ein 3B-Modell auf meiner GPU laufen?', acceptedAnswer: { '@type': 'Answer', text: 'RTX 3060 (3 GB) oder CPU. Q4-Quantisierung benötigt 1,5-2 GB VRAM. Ollama, Llama.cpp, LM Studio unterstützen alle.' } }, { '@type': 'Question', name: 'Ist RTX 4060 ausreichend für 7B Q4?', acceptedAnswer: { '@type': 'Answer', text: 'Knapp. RTX 4060 (8 GB) sollte 5 GB theoretisch verwalten, aber OS/Laufzeit-Overhead wird eng. RTX 4070 (12 GB) empfohlen.' } }, { '@type': 'Question', name: 'Sind 12 GB für Llama3 13B ausreichend?', acceptedAnswer: { '@type': 'Answer', text: 'Q4 knapp. Q5 oder Q8 nicht. 12 GB ist eng. 16 GB komfortabel.' } }, { '@type': 'Question', name: 'Benötige ich 24 GB für ein 70B-Modell?', acceptedAnswer: { '@type': 'Answer', text: 'Q4 ja. Q5+ nein. 70B mindestens 35-40 GB erforderlich.' } }, { '@type': 'Question', name: 'Reduziert höhere Batch-Größe VRAM für einzelne Inferenz?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Einzelne Inferenz verwendet immer batch=1. Batch-Größe hilft nur Durchsatz (Multi-User-Szenarios).' } }, { '@type': 'Question', name: 'Was ist die präziseste Quantisierung?', acceptedAnswer: { '@type': 'Answer', text: 'Q8 nahezu unmerklicher Verlust. Q5 ~2% Verlust. Q4 ~1% Verlust. Für die meisten Fälle Q4 beste Balance.' } }, { '@type': 'Question', name: 'Kann ich Teil des VRAM auf CPU-RAM auslagern?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, über Layer-Splitting. Llama.cpp und Ollama unterstützen es. Leistung sinkt 30-50%.' } }, { '@type': 'Question', name: 'Was ist die minimale VRAM für lokale LLM-Ausführung?', acceptedAnswer: { '@type': 'Answer', text: '4 GB VRAM mit 3B Q4. Praktisches Minimum 8 GB VRAM + 7B Q4. Unter 6 GB OOM für die meisten 7B-Modelle.' } }, { '@type': 'Question', name: 'Ist Apple Silicon VRAM dasselbe wie GPU VRAM?', acceptedAnswer: { '@type': 'Answer', text: 'Apple Silicon verwendet Unified Memory -- ganzer Speicherpool verfügbar. M3 18 GB = GPU 18 GB VRAM. MacBook Pro M3 18 GB kann Llama3 13B Q4 (~7 GB) + Overhead ausführen.' } }, { '@type': 'Question', name: 'Wie viel VRAM benötigt 7B bei verschiedenen Quantisierungen?', acceptedAnswer: { '@type': 'Answer', text: '7B FP32: ~28 GB. 7B Q8: ~7 GB. 7B Q5: ~4,5 GB. 7B Q4: ~5 GB (3,5 GB Modell + 1,5 GB Overhead). 6 GB GPU eng, 8 GB komfortabel.' } }, { '@type': 'Question', name: 'Was sind die VRAM-Anforderungen für DSGVO-konforme lokale Inferenz in Unternehmen?', acceptedAnswer: { '@type': 'Answer', text: 'Minimum RTX 4070 Ti (12 GB) für bis zu 50 Nutzer mit Llama3 13B Q4. Für 50-500 Nutzer RTX A6000 (48 GB) oder Dual RTX 4080 (32 GB). ECC-GPU für Speicherfehler-Detektion empfohlen.' } }, { '@type': 'Question', name: 'Welche GPU empfiehlt sich für einen Team-Server im deutschen Mittelstand?', acceptedAnswer: { '@type': 'Answer', text: 'RTX 4070 Ti (12 GB) für 1-50 Mitarbeiter. RTX A6000 (48 GB) oder Dual RTX 4080 (32 GB) für 50-500 Mitarbeiter. RTX 4070 Ti kann Llama3 13B Q4 + vLLM mit 3-5 gleichzeitigen Anfragen verwalten.' } }] },
    },
    ja: {
      theme: 'GPU Buying Guides',
      title: 'VRAM目安：7B=8GB、70B=48GB（2026ガイド）',
      seoTitle: 'VRAM目安：7B=8GB、70B=48GB（2026ガイド）',
      intro: '7B Q4量子化モデルの場合、4-5 GB VRAMが必要です--最新の8GB GPUであれば快適に実行できます。13B: 8-10 GB VRAM。70B: 35-40 GB、デュアルRTX 4090またはA100が必要です。',
      metaDescription: 'VRAM目安：7B=8GB、13B=16GB、70B=48GB（Q4）。シンプル計算機+各モデルサイズと量子化レベルの公式。',
      nextStep: {
        text: 'VRAMの予算がわかりました。次はそれに合ったGPUを選びましょう。',
        label: 'ローカルLLM向けベストバジェットGPU →',
        href: '/local-llms/best-budget-gpus-local-llm',
      },
      publishDate: '2026-04-05',
      dateModified: '2026-06-01',
      readTime: '7分で読める',
      educationalLevel: 'Beginner',
      primaryTerm: 'VRAM要件',
      toc: [
        { label: 'ポイント', anchor: '#points' },
        { label: 'VRAM計算式', anchor: '#formula' },
        { label: 'モデルサイズ別VRAM', anchor: '#by-model-size' },
        { label: 'MoE VRAMモデル', anchor: '#moe-vram' },
        { label: '量子化', anchor: '#quantization' },
        { label: 'バッチサイズ', anchor: '#batch-size' },
        { label: 'オーバーヘッド', anchor: '#overhead' },
        { label: '地域的背景', anchor: '#regional-context' },
        { label: '一般的な間違い', anchor: '#common-mistakes' },
        { label: 'VRAM計算機', anchor: '#vram-calculator' },
        { label: '関連資料', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: '参考資料', anchor: '#sources' },
      ],
      sections: {
        tldr: { id: 'key-takeaways',
 isTldr: true, title: 'ポイント', items: ['7Bモデル: 最小8 GB (Q4)、快適な10 GB (Q5)。', '13Bモデル: 最小12 GB (Q4)、快適な16 GB (Q5)。', '70Bモデル: 最小35-40 GB (Q4)。', 'Q4量子化: 完全精度比87%削減。'] },
        formula: { title: 'VRAM計算式', content: ['VRAM = (十億パラメータ × 重みあたりビット) ÷ 8 + KVキャッシュ + オーバーヘッド', 'Q4: 32ビット→4ビット (8倍削減)。', 'Q8: 32ビット→8ビット (4倍削減)、ほぼ完全精度。'] },
        'by-model-size': { title: 'モデルサイズ別VRAM', columns: ['モデルサイズ', 'FP32', 'Q8', 'Q5', 'Q4', '推奨GPU'], rows: [{ 'モデルサイズ': '7B', 'FP32': '28 GB', 'Q8': '7 GB', 'Q5': '4.5 GB', 'Q4': '3.5 GB', '推奨GPU': 'RTX 4070 (12GB)' }, { 'モデルサイズ': '13B', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', '推奨GPU': 'RTX 4080 (16GB)' }, { 'モデルサイズ': '70B', 'FP32': '280 GB', 'Q8': '70 GB', 'Q5': '44 GB', 'Q4': '35-40 GB', '推奨GPU': 'デュアルRTX 4090' }, { 'モデルサイズ': 'Qwen 3.6 35B-A3B (3B有効, MoE)*', 'FP32': '12 GB', 'Q8': '3 GB', 'Q5': '2 GB', 'Q4': '2 GB', '推奨GPU': 'RTX 2060 6 GB または RTX 5070 12 GB' }, { 'モデルサイズ': 'DeepSeek V4-Flash (13B有効 / 284B総パラメータ, MoE)*', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', '推奨GPU': 'RTX 3060 12 GB または RTX 5070 12 GB' }, { 'モデルサイズ': 'Llama 4 Scout (17B有効 / 109B総パラメータ, MoE)†', 'FP32': '436 GB', 'Q8': '109 GB', 'Q5': '68 GB', 'Q4': '55 GB', '推奨GPU': '2× RTX 4090 (48 GB) — 24 GBには1.78ビット時のみ収まる(~20 tok/s)' }, { 'モデルサイズ': 'gpt-oss:20b (3.6B有効 / 21B総パラメータ, MoE)*', 'FP32': '84 GB', 'Q8': '21 GB', 'Q5': '13 GB', 'Q4': '12 GB', '推奨GPU': 'RTX 5070 12 GB または16 GBのGPU' }, { 'モデルサイズ': 'Kimi K2.6 (32B有効 / 1T総パラメータ, MoE)*', 'FP32': '128 GB', 'Q8': '32 GB', 'Q5': '20 GB', 'Q4': '16 GB', '推奨GPU': '2× RTX 4090 または RTX 5090 32 GB (Q4のみ)' }], note: '* MoEモデル: VRAMはアクティブパラメータのみから計算され、総モデルサイズではありません。† Llama 4 Scoutは109Bパラメータすべてを常駐させるため、トークンあたり17Bしか有効でなくてもQ4で~55 GB必要です。' },
        quantization: { title: '量子化', content: ['量子化はモデル重みを低精度に圧縮します。Q4が標準。', 'VRAMはモデルサイズを決定しますが、プロンプトの設計が出力品質を決定します。Chain-of-ThoughtやFew-Shotプロンプティングなどのテクニックは、小さなモデルと大きなモデルの品質差を縮めることができます。お使いのハードウェアがサポートするモデルから最大限を引き出すには、[プロンプトエンジニアリング完全ツールキット](https://www.promptquorum.com/ja/prompt-engineering)をご覧ください。VRAM が 12–16 GB あり、このツールキットを試す具体的なコーディングワークロードを探しているなら、[GitHub Copilot をローカル LLM で置き換える](/ja/power-local-llm/replace-github-copilot-with-local-llm)で Continue.dev + Ollama + Qwen3-Coder のスタックがちょうどこれらの VRAM 帯にフィットする様子を解説しています。'] },
        'batch-size': { title: 'バッチサイズ', content: ['シングルユーザー推論はbatch=1です。'] },
        overhead: { title: 'オーバーヘッド', content: ['KVキャッシュ、アクティベーション、ランタイムが追加メモリを消費。'] },
        'regional-context': { title: '地域的背景', content: ['日本 (METI): ローカルLLM推論は主権データ管理として重要。'] },
        mistakes: { title: '一般的な間違い', content: ['VRAM ≠ モデルサイズ。常に5 GB以上の余地が必要。'] },
        vramCalculator: { id: 'vram-calculator', title: 'VRAM計算機', component: 'VramCalculator', content: 'モデルサイズと量子化を選択してVRAM要件を推定します。' },
        faqSection: { faqs: [{ q: 'RTX 4060は7B Q4に十分?', a: 'ぎりぎり。RTX 4070推奨。' }, { q: '70B用に24 GBは?', a: 'Q4で不十分。35-40 GB必要。' }] },
        relatedReading: { title: '関連資料', items: ['/ja/local-llms/best-local-llm-models-2026', '/ja/local-llms/how-much-unified-memory-for-local-llm', '/ja/local-llms/running-70b-models-apple-silicon-m5-max', '/ja/local-llms/best-models-apple-silicon-2026', '/ja/local-llms/gpu-vs-cpu-vs-apple-silicon'] },
        sources: { title: '参考資料', items: ['NVIDIA CUDA ドキュメント', 'Ollama ドキュメント'] },
      },
schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: '2026年にローカルLLMを実行するのに必要なVRAMはどのくらい?', 'url': 'https://www.promptquorum.com/ja/local-llms/how-much-vram-local-llm', inLanguage: 'ja', datePublished: '2026-04-04', dateModified: '2026-06-01', author: { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/author/hans-kuepper' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' } },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'ローカルLLMのVRAM要件を計算する方法',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'モデルパラメータ数(十億単位)を確認' },
          { '@type': 'HowToStep', position: 2, name: 'ほとんどのユーザーの場合はQ4量子化を選択' },
          { '@type': 'HowToStep', position: 3, name: '公式を適用: (パラメータ × ビット) ÷ 8' },
          { '@type': 'HowToStep', position: 4, name: 'KVキャッシュとランタイムオーバーヘッドに10-15%を加算' },
          { '@type': 'HowToStep', position: 5, name: 'VRAM以上のGPUを選択' }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'モデルサイズ別VRAM要件2026',
        numberOfItems: 5,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '3Bモデル', description: 'Q4: 1.8 GB。Q8: 3 GB。FP32: 12 GB。推奨: 8GB GPU。' },
          { '@type': 'ListItem', position: 2, name: '7Bモデル', description: 'Q4: 3.5 GB。Q8: 7 GB。FP32: 28 GB。推奨: 8GB GPU。' },
          { '@type': 'ListItem', position: 3, name: '13Bモデル', description: 'Q4: 7 GB。Q8: 13 GB。FP32: 52 GB。推奨: 12-16GB GPU。' },
          { '@type': 'ListItem', position: 4, name: '22Bモデル', description: 'Q4: 11 GB。Q8: 22 GB。FP32: 88 GB。推奨: 16GB GPU。' },
          { '@type': 'ListItem', position: 5, name: '70Bモデル', description: 'Q4: 35 GB。Q8: 70 GB。FP32: 280 GB。推奨: デュアルRTX 4090。' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: '6GB GPUでMistral Smallを実行できますか?', acceptedAnswer: { '@type': 'Answer', text: 'Q4でギリギリです。実際のところ、いいえ。最低8GBを購入してください。6GBではOOMエラーが発生します。' } },
          { '@type': 'Question', name: '7BモデルのファインチューニングにはどのくらいのVRAMが必要ですか?', acceptedAnswer: { '@type': 'Answer', text: 'LoRA用: 12-16GB。フルファインチューニング: 28GB以上。ファインチューニングはオプティマイザー状態(モデルVRAMの2-4倍)が必要です。' } },
          { '@type': 'Question', name: 'Llama 3 13Bに12GBで十分ですか?', acceptedAnswer: { '@type': 'Answer', text: 'Q4ではギリギリです。Q5またはQ8では、いいえ。12GBはぎりぎりです。16GBが快適です。' } },
          { '@type': 'Question', name: '70Bモデルに24GBが必要ですか?', acceptedAnswer: { '@type': 'Answer', text: 'Q4ではい。Q5以上では、いいえ。より高い量子化(Q5、Q8)は70Bに32GB以上が必要です。' } },
          { '@type': 'Question', name: 'バッチサイズを増やすと単一推論のVRAMが減りますか?', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。単一推論は常にbatch=1 VRAMを使用します。バッチサイズはスループット(マルチユーザーシナリオ)にのみ役立ちます。' } },
          { '@type': 'Question', name: '精度に最適な量子化は何ですか?', acceptedAnswer: { '@type': 'Answer', text: 'Q8はほぼ知覚できないロスです。Q5は~2%ロス。Q4は~1%ロス。ほとんどの場合、Q4がスイートスポットです。' } },
          { '@type': 'Question', name: 'VRAMの一部をCPU RAMにオフロードできますか?', acceptedAnswer: { '@type': 'Answer', text: 'はい、レイヤー分割を使用します。Llama.cppとOllamaがサポートしています。パフォーマンスは30-50%低下します。' } },
          { '@type': 'Question', name: 'ローカルLLM実行の最小VRAMは?', acceptedAnswer: { '@type': 'Answer', text: '3B Q4なら4GB VRAM。実用的な最小値は8GB VRAM + 7B Q4。6GB以下では、ほとんどの7Bモデルでは不十分です。' } },
          { '@type': 'Question', name: 'Apple Silicon VRAMはGPU VRAMと同じですか?', acceptedAnswer: { '@type': 'Answer', text: 'Apple Siliconは共有メモリを使用します。M3 18GB = GPU 18GB VRAM。MacBook Pro M3 18GBはLlama 3 13B Q4(~7GB) + オーバーヘッドを実行できます。' } },
          { '@type': 'Question', name: '異なる量子化レベルで7Bには何GBのVRAMが必要ですか?', acceptedAnswer: { '@type': 'Answer', text: '7B FP32: ~28GB。7B Q8: ~7GB。7B Q5: ~4.5GB。7B Q4: ~5GB(3.5GBモデル + 1.5GBオーバーヘッド)。6GBはきついです、8GBが快適です。' } }
        ]
      },
    },
    zh: {
      theme: 'GPU Buying Guides',
      title: '显存经验法则：7B=8GB、70B=48GB（2026指南）',
      seoTitle: '显存经验法则：7B=8GB、70B=48GB（2026指南）',
      intro: '7B Q4量化模型需要4-5 GB显存。13B: 8-10 GB显存。70B: 35-40 GB,需要双RTX 4090或A100。Q4是标准量化方案,减少显存需求87%。',
      metaDescription: '显存经验法则：7B=8GB、13B=16GB、70B=48GB（Q4）。简单计算器+每种模型大小和量化级别的公式。',
      nextStep: {
        text: '您已了解显存预算。现在为其选择合适的GPU。',
        label: '本地LLM最佳预算GPU →',
        href: '/local-llms/best-budget-gpus-local-llm',
      },
      publishDate: '2026-04-05',
      dateModified: '2026-06-01',
      readTime: '7分钟阅读',
      educationalLevel: 'Beginner',
      primaryTerm: '显存要求',
      toc: [
        { label: '关键要点', anchor: '#key-points' },
        { label: '显存计算公式', anchor: '#formula' },
        { label: '按模型大小的显存', anchor: '#by-model-size' },
        { label: 'MoE显存模型', anchor: '#moe-vram' },
        { label: '量子化', anchor: '#quantization' },
        { label: '批大小', anchor: '#batch-size' },
        { label: '显存开销', anchor: '#overhead' },
        { label: '地区背景', anchor: '#regional-context' },
        { label: '常见错误', anchor: '#common-mistakes' },
        { label: '显存计算器', anchor: '#vram-calculator' },
        { label: '相关阅读', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: '参考资源', anchor: '#sources' },
      ],
      sections: {
        tldr: { id: 'key-takeaways',
 isTldr: true, title: '关键要点', items: ['7B模型: 最少8 GB (Q4)、舒适10 GB (Q5)。', '13B模型: 最少12 GB (Q4)、舒适16 GB (Q5)。', '70B模型: 最少35-40 GB (Q4)。', 'Q4量子化: 减少显存需求87%。'] },
        formula: { title: '显存计算公式', content: ['显存 = (十亿参数 × 每权重位数) ÷ 8 + KV缓存 + 开销', 'Q4: 32位→4位 (8倍减少)。', 'Q8: 32位→8位 (4倍减少),几乎完全精度。'] },
        'by-model-size': { title: '按模型大小的显存', columns: ['模型大小', 'FP32', 'Q8', 'Q5', 'Q4', '推荐GPU'], rows: [{ '模型大小': '7B', 'FP32': '28 GB', 'Q8': '7 GB', 'Q5': '4.5 GB', 'Q4': '3.5 GB', '推荐GPU': 'RTX 4070 (12GB)' }, { '模型大小': '13B', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', '推荐GPU': 'RTX 4080 (16GB)' }, { '模型大小': '70B', 'FP32': '280 GB', 'Q8': '70 GB', 'Q5': '44 GB', 'Q4': '35-40 GB', '推荐GPU': '双RTX 4090' }, { '模型大小': 'Qwen 3.6 35B-A3B (3B活跃, MoE)*', 'FP32': '12 GB', 'Q8': '3 GB', 'Q5': '2 GB', 'Q4': '2 GB', '推荐GPU': 'RTX 2060 6 GB 或 RTX 5070 12 GB' }, { '模型大小': 'DeepSeek V4-Flash (13B活跃 / 284B总参数, MoE)*', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', '推荐GPU': 'RTX 3060 12 GB 或 RTX 5070 12 GB' }, { '模型大小': 'Llama 4 Scout (17B活跃 / 109B总参数, MoE)†', 'FP32': '436 GB', 'Q8': '109 GB', 'Q5': '68 GB', 'Q4': '55 GB', '推荐GPU': '2× RTX 4090 (48 GB) — 仅在1.78位时才能装入24 GB(~20 tok/s)' }, { '模型大小': 'gpt-oss:20b (3.6B活跃 / 21B总参数, MoE)*', 'FP32': '84 GB', 'Q8': '21 GB', 'Q5': '13 GB', 'Q4': '12 GB', '推荐GPU': 'RTX 5070 12 GB 或任意 16 GB GPU' }, { '模型大小': 'Kimi K2.6 (32B活跃 / 1T总参数, MoE)*', 'FP32': '128 GB', 'Q8': '32 GB', 'Q5': '20 GB', 'Q4': '16 GB', '推荐GPU': '2× RTX 4090 或 RTX 5090 32 GB (仅Q4)' }], note: '* MoE模型: 显存仅从活跃参数计算,不包括总模型大小。† Llama 4 Scout 需将全部109B参数常驻显存,因此尽管每个token仅17B活跃,Q4仍需~55 GB。' },
        quantization: { title: '量子化', content: ['量子化将权重压缩至低精度。Q4为消费级GPU标准。', 'VRAM决定模型大小，但提示词设计决定输出质量。思维链和少样本提示等技术可以缩小大小模型之间的质量差距。探索完整的[Prompt工程工具箱](https://www.promptquorum.com/zh/prompt-engineering)，从你的硬件所支持的模型中获取更多。如果你有 12–16 GB 显存，并希望找一个具体的编码任务来检验这套工具箱，[用本地 LLM 替代 GitHub Copilot](/zh/power-local-llm/replace-github-copilot-with-local-llm)正好把 Continue.dev + Ollama + Qwen3-Coder 的方案对应到这些显存档位上。'] },
        'batch-size': { title: '批大小', content: ['单用户推理总是batch=1。批处理仅有助吞吐量。'] },
        overhead: { title: '显存开销', content: ['KV缓存、激活、运行时开销占额外5 GB。'] },
        'regional-context': { title: '地区背景', content: ['中国 (CAC): 本地LLM推理用于数据主权。Qwen3 72B在双RTX 4090上是首选。'] },
        mistakes: { title: '常见错误', content: ['显存 ≠ 模型大小。总需要5 GB以上余地。'] },
        vramCalculator: { id: 'vram-calculator', title: '显存计算器', component: 'VramCalculator', content: '选择你的模型大小和量子化方式以估计显存需求。' },
        faqSection: { faqs: [{ q: 'RTX 4060足以运行7B Q4吗?', a: '勉强。推荐RTX 4070。' }, { q: '70B模型需要24 GB吗?', a: '否。需35-40 GB。' }] },
        relatedReading: { title: '相关阅读', items: ['/zh/local-llms/best-local-llm-models-2026', '/zh/local-llms/how-much-unified-memory-for-local-llm', '/zh/local-llms/running-70b-models-apple-silicon-m5-max', '/zh/local-llms/best-models-apple-silicon-2026', '/zh/local-llms/gpu-vs-cpu-vs-apple-silicon'] },
        sources: { title: '参考资源', items: ['NVIDIA CUDA文档', 'Ollama文档'] },
      },
schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: '2026年运行本地LLM需要多少显存?', 'url': 'https://www.promptquorum.com/zh/local-llms/how-much-vram-local-llm', inLanguage: 'zh', datePublished: '2026-04-04', dateModified: '2026-06-01', author: { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/author/hans-kuepper' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' } },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: '如何计算任何本地LLM的显存要求',
        step: [
          { '@type': 'HowToStep', position: 1, name: '查找模型参数数量(以十亿为单位)' },
          { '@type': 'HowToStep', position: 2, name: '对大多数用户选择Q4量化' },
          { '@type': 'HowToStep', position: 3, name: '应用公式: (参数 × 位数) ÷ 8' },
          { '@type': 'HowToStep', position: 4, name: '为KV缓存和运行时开销添加10-15%' },
          { '@type': 'HowToStep', position: 5, name: '选择显存等于或超过总数的GPU' }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '按模型大小的显存要求2026',
        numberOfItems: 5,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '3B模型', description: 'Q4: 1.8 GB。Q8: 3 GB。FP32: 12 GB。推荐: 8GB GPU。' },
          { '@type': 'ListItem', position: 2, name: '7B模型', description: 'Q4: 3.5 GB。Q8: 7 GB。FP32: 28 GB。推荐: 8GB GPU。' },
          { '@type': 'ListItem', position: 3, name: '13B模型', description: 'Q4: 7 GB。Q8: 13 GB。FP32: 52 GB。推荐: 12-16GB GPU。' },
          { '@type': 'ListItem', position: 4, name: '22B模型', description: 'Q4: 11 GB。Q8: 22 GB。FP32: 88 GB。推荐: 16GB GPU。' },
          { '@type': 'ListItem', position: 5, name: '70B模型', description: 'Q4: 35 GB。Q8: 70 GB。FP32: 280 GB。推荐: 双RTX 4090。' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: '我可以在6GB GPU上运行Mistral Small吗?', acceptedAnswer: { '@type': 'Answer', text: '勉强,Q4显存紧张。实际上不行。至少买8GB。6GB会导致OOM错误。' } },
          { '@type': 'Question', name: '微调7B模型需要多少显存?', acceptedAnswer: { '@type': 'Answer', text: 'LoRA: 12-16GB。全微调: 28GB以上。微调需要优化器状态(模型显存的2-4倍),而不仅仅是推理。' } },
          { '@type': 'Question', name: '12GB足以运行Llama 3 13B吗?', acceptedAnswer: { '@type': 'Answer', text: 'Q4勉强足够。Q5或Q8则不够。12GB很紧张。16GB才舒适。' } },
          { '@type': 'Question', name: '70B模型需要24GB吗?', acceptedAnswer: { '@type': 'Answer', text: 'Q4需要。Q5以上则不需要。更高量子化(Q5、Q8)的70B需要32GB以上。' } },
          { '@type': 'Question', name: '增加批大小会减少单次推理的显存吗?', acceptedAnswer: { '@type': 'Answer', text: '不会。单次推理始终使用batch=1显存。批大小只有助于吞吐量(多用户场景)。' } },
          { '@type': 'Question', name: '精度最好的量化方式是什么?', acceptedAnswer: { '@type': 'Answer', text: 'Q8几乎无法感知的损失。Q5大约2%损失。Q4大约1%损失。对大多数人来说,Q4是最好的折中。' } },
          { '@type': 'Question', name: '我可以将部分显存卸载到CPU RAM吗?', acceptedAnswer: { '@type': 'Answer', text: '可以,通过层分割。Llama.cpp和Ollama都支持。性能会下降30-50%。' } },
          { '@type': 'Question', name: '运行本地LLM的最小显存是多少?', acceptedAnswer: { '@type': 'Answer', text: '3B Q4需要4GB显存。实用最小值是8GB显存+ 7B Q4。低于6GB的话,大多数7B模型会导致内存溢出。' } },
          { '@type': 'Question', name: 'Apple Silicon显存与GPU显存的工作方式相同吗?', acceptedAnswer: { '@type': 'Answer', text: 'Apple Silicon使用统一内存。M3 18GB = GPU 18GB显存。MacBook Pro M3 18GB可以运行Llama 3 13B Q4(~7GB) + 开销。' } },
          { '@type': 'Question', name: '7B模型在不同量化级别需要多少显存?', acceptedAnswer: { '@type': 'Answer', text: '7B FP32: ~28GB。7B Q8: ~7GB。7B Q5: ~4.5GB。7B Q4: ~5GB(3.5GB模型+ 1.5GB开销)。6GB太紧张,8GB比较舒适。' } }
        ]
      },
    },

  };
