// Auto-generated from src/lib/local-llms/content.ts
// Slug: how-much-vram-local-llm
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-06',
      theme: 'GPU Buying Guides',
      title: 'How Much VRAM for Local LLM? 7B to 70B Charts (2026)',
      seoTitle: 'How Much VRAM for Local LLM? 7B to 70B Charts (2026)',
      intro: '**For 7B models, you need 8GB VRAM; for 13B-22B, 12-16GB; for 70B, 24GB minimum.** As of April 2026, these numbers assume Q4 (4-bit) quantization. Full-precision (FP32) models need 2-3× more VRAM and are rarely practical on consumer GPUs. The formula is: Model size (billions) × 2 bytes (FP32) ÷ quantization factor.',
      metaDescription: 'Exact VRAM needed for local LLM: 7B needs 6-8GB, 13B needs 10-14GB, 70B needs 40-48GB at Q4. Charts for Q2-Q8 quantization, batch size, context.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**For 7B models, you need 8GB VRAM; for 13B-22B, 12-16GB; for 70B, 24GB minimum. As of April 2026, these numbers assume Q4 (4-bit) quantization.**',
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
          ],
          items: [
            '**3B models** (Phi, StableLM): 4 GB VRAM minimum',
            '**7B models** (Llama, Mistral, Qwen): 8 GB VRAM (Q4), 10 GB (Q5)',
            '**13B models** (Llama 3.1, Mistral): 12 GB VRAM minimum (Q4)',
            '**22B models** (Qwen2.5, Gemma): 16 GB VRAM (Q4)',
            '**70B models** (Llama 3.3, Qwen 3.6): 24–32 GB VRAM (Q4–Q5)',
            '**MoE models**: Use active parameters only. Example: Llama 4 Scout has 17B active = ~9 GB VRAM, not 44 GB',
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
            '**MoE Models (Sparse):** Use active parameter count only. Example: Llama 4 Scout has 109B total parameters but only 17B active at once. VRAM = 17B × 0.5 bytes (Q4) ≈ 9 GB — not the 44 GB a naive total-parameter calculation would suggest.',
          ],
        },
        'by-model-size': {
          title: 'How Much VRAM Does Each Model Size Need?',
          columns: ['Model Size', 'FP32 (No Quantization)', 'Q8 (8-bit)', 'Q5 (5-bit)', 'Q4 (4-bit)', 'Recommended GPU'],
          rows: [
            { 'Model Size': '3B (Phi, StableLM)', 'FP32 (No Quantization)': '12 GB', 'Q8 (8-bit)': '6 GB', 'Q5 (5-bit)': '4 GB', 'Q4 (4-bit)': '3 GB', 'Recommended GPU': 'RTX 2060 6 GB or RTX 5070 12 GB' },
            { 'Model Size': '7B (Llama 2, Mistral)', 'FP32 (No Quantization)': '28 GB', 'Q8 (8-bit)': '14 GB', 'Q5 (5-bit)': '9 GB', 'Q4 (4-bit)': '7 GB', 'Recommended GPU': 'RTX 3060 12 GB or RTX 5070 12 GB' },
            { 'Model Size': '13B (Llama 2, Mistral)', 'FP32 (No Quantization)': '52 GB', 'Q8 (8-bit)': '26 GB', 'Q5 (5-bit)': '17 GB', 'Q4 (4-bit)': '13 GB', 'Recommended GPU': 'RTX 3090 24 GB or RTX 5080 16 GB' },
            { 'Model Size': '22B (Qwen, Gemma)', 'FP32 (No Quantization)': '88 GB', 'Q8 (8-bit)': '44 GB', 'Q5 (5-bit)': '28 GB', 'Q4 (4-bit)': '22 GB', 'Recommended GPU': 'RTX 4090 24 GB (Q4) or RTX 5090 32 GB' },
            { 'Model Size': '70B (Llama 3, Qwen)', 'FP32 (No Quantization)': '280 GB', 'Q8 (8-bit)': '140 GB', 'Q5 (5-bit)': '88 GB', 'Q4 (4-bit)': '70 GB', 'Recommended GPU': '2× RTX 4090 (24 GB each), or 1× H100 80 GB' },
            { 'Model Size': 'Qwen 3.6 35B-A3B (3B active, MoE)*', 'FP32 (No Quantization)': '12 GB', 'Q8 (8-bit)': '3 GB', 'Q5 (5-bit)': '2 GB', 'Q4 (4-bit)': '2 GB', 'Recommended GPU': 'RTX 2060 6 GB or RTX 5070 12 GB' },
            { 'Model Size': 'DeepSeek V4-Flash (13B active / 284B total, MoE)*', 'FP32 (No Quantization)': '52 GB', 'Q8 (8-bit)': '13 GB', 'Q5 (5-bit)': '8 GB', 'Q4 (4-bit)': '7 GB', 'Recommended GPU': 'RTX 3060 12 GB or RTX 5070 12 GB' },
            { 'Model Size': 'Llama 4 Scout (17B active / 109B total, MoE)*', 'FP32 (No Quantization)': '68 GB', 'Q8 (8-bit)': '17 GB', 'Q5 (5-bit)': '11 GB', 'Q4 (4-bit)': '9 GB', 'Recommended GPU': 'RTX 3090 24 GB or RTX 5080 16 GB' },
            { 'Model Size': 'Kimi K2.6 (42B active / 1T total, MoE)*', 'FP32 (No Quantization)': '168 GB', 'Q8 (8-bit)': '42 GB', 'Q5 (5-bit)': '27 GB', 'Q4 (4-bit)': '21 GB', 'Recommended GPU': '2× RTX 4090 or RTX 5090 32 GB (Q4 only)' },
          ],
          note: '* MoE models: VRAM is calculated from active parameters only, not total model size.',
        },
        'moe-vram': {
          title: 'MoE Models Need Far Less VRAM Than Their Size Suggests',
          id: 'moe-vram',
          content: [
            'Mixture-of-Experts (MoE) models split their parameters across many "expert" sub-networks and activate only a fraction for each token. VRAM depends on active parameters — the subset loaded during inference — not total parameters.',
            '**Dense model rule:** VRAM = total_params × bytes_per_param',
            '**MoE model rule:** VRAM = active_params × bytes_per_param',
            'Example: Llama 4 Scout has 109B total parameters but only 17B activate per token. At Q4 quantization: 17B × 0.5 bytes ≈ 9 GB — runnable on a single RTX 3090, versus the ~55 GB a dense 109B model would need.',
            'Qwen 3.6 35B-A3B is even more extreme: 3B active out of 35B total gives it the VRAM footprint of a small 3B dense model while delivering 35B-class output quality.',
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
            { q: 'Can I run Mistral 7B on a 6GB GPU?', a: 'Barely, at Q4 with tight overhead. Practically, no. Buy at least 8GB. You\'ll hit OOM errors with 6GB.' },
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
        'inLanguage': 'en',
        'datePublished': '2026-04-05',
        'dateModified': '2026-05-06',
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
        'inLanguage': 'en',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Can I run Mistral 7B on a 6GB GPU?',
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
    fr: {
      theme: 'GPU Buying Guides',
      title: 'Règle empirique VRAM: 7B=8GB, 70B=48GB (Guide 2026)',
      seoTitle: 'Règle empirique VRAM: 7B=8GB, 70B=48GB (Guide 2026)',
      intro: 'Pour les modèles 7B à quantification Q4, vous avez besoin de 4-5 GB de VRAM -- n\'importe quelle GPU moderne avec 8 GB la gère confortablement. Pour les modèles 13B: 8-10 GB VRAM. Pour 70B: 35-40 GB, nécessitant deux RTX 4090 ou une seule A100. En avril 2026, Q4 (4-bit) est la quantification standard -- elle réduit les exigences VRAM de 87% par rapport à la précision complète avec moins de 1% de perte de qualité pour la plupart des tâches. La formule VRAM est: (paramètres en milliards × bits par poids) ÷ 8, plus 10-15% de surcharge pour KV cache et runtime.',
      metaDescription: 'Calculatrice VRAM: 7B exige 4-5 GB (Q4), 13B exige 8-10 GB, 70B exige 35-40 GB. Guide quantification Q4/Q5. Exigences GPU précises par taille modèle.',
      publishDate: '2026-04-05',
      dateModified: '2026-05-06',
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
            { 'Taille du modèle': 'Llama 4 Scout (17B actif / 109B total, MoE)*', 'FP32': '68 GB', 'Q8': '17 GB', 'Q5': '11 GB', 'Q4': '9 GB', 'GPU recommandé': 'RTX 5070 Ti 16GB ou RTX 4070 Ti 12GB' },
            { 'Taille du modèle': 'Kimi K2.6 (42B actif / 1T total, MoE)*', 'FP32': '168 GB', 'Q8': '42 GB', 'Q5': '27 GB', 'Q4': '21 GB', 'GPU recommandé': '2× RTX 5090 ou A100 80GB' },
          ],
          note: '* Modèles MoE: La VRAM est calculée à partir des paramètres actifs uniquement, non de la taille totale du modèle.',
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
            'La VRAM détermine la taille du modèle, mais la conception du prompt détermine la qualité des sorties. Les techniques comme la chain-of-thought et le few-shot prompting peuvent combler l\'écart de qualité entre les modèles plus petits et plus grands. Explorez la [boîte à outils complète de prompt engineering](https://www.promptquorum.com/prompt-engineering?lang=fr) pour tirer le meilleur parti des modèles que votre matériel prend en charge. Si vous disposez de 12–16 Go de VRAM et cherchez un cas concret pour tester cette boîte à outils, [Remplacer GitHub Copilot par un LLM local](/power-local-llm/replace-github-copilot-with-local-llm?lang=fr) projette la stack Continue.dev + Ollama + Qwen3-Coder sur ces paliers de VRAM exacts.',
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
            'Les entreprises chinoises déployant Qwen2.5 72B localement sous la Loi sur la sécurité des données de Chine (数据安全法) nécessitent 40+ GB VRAM -- un serveur dual RTX 4090 (48 GB combiné) est la configuration de qualité grand public standard. Qwen2.5 32B (20 GB en Q4) est déployable sur une seule RTX 4090 avec marge pour surcharge de contexte et est la configuration recommandée pour les équipes sans budget pour configurations GPU double.',
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
            { q: 'Puis-je exécuter Mistral 7B sur une GPU 6 GB?', a: 'À peine, à Q4 avec surcharge serrée. Pratiquement, non. Achetez au moins 8 GB. Vous aurez des erreurs OOM avec 6 GB.' },
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
            '[Guide de matériel Local LLM 2026](/local-llms/local-llm-hardware-guide-2026?lang=fr) -- recommandations de tiers GPU complètes avec prix et benchmarks tok/sec pour chaque tiers VRAM',
            '[Installer Ollama](/local-llms/how-to-install-ollama?lang=fr) -- configurez Ollama pour exécuter les modèles correspondant à votre tiers VRAM avec quantification correcte',
            '[Qwen vs Llama vs Mistral](/local-llms/qwen-vs-llama-vs-mistral?lang=fr) -- comparaison de famille de modèles avec exigences VRAM exactes pour chaque taille en Q4_K_M',
            '[Exécuter les Local LLMs sur un Laptop](/local-llms/local-llm-on-laptop?lang=fr) -- contraintes VRAM spécifiques au laptop et recommandations de quantification pour mémoire unifiée',
            '[Dépanner la configuration Local LLM](/local-llms/troubleshooting-local-llm-setup?lang=fr) -- corrigez les erreurs mémoire insuffisante quand le modèle dépasse le VRAM disponible',
            '[Combien de mémoire unifiée pour les LLM locaux ?](/local-llms/how-much-unified-memory-for-local-llm?lang=fr) -- L\'équivalent VRAM sur Mac : 16 Go vs 36 Go vs 64 Go vs 128 Go pour Apple Silicon.',
            '[Modèles 70B sur Apple Silicon M5 Max](/local-llms/running-70b-models-apple-silicon-m5-max?lang=fr) -- Comment la mémoire unifiée permet aux Macs de faire tourner 70B là où 24 Go VRAM échoue.',
            '[Meilleurs modèles pour Apple Silicon 2026](/local-llms/best-models-apple-silicon-2026?lang=fr) -- Recommandations de modèles par tier de mémoire : 16 Go à 128 Go.',
            '[GPU vs CPU vs Apple Silicon pour les LLM locaux](/local-llms/gpu-vs-cpu-vs-apple-silicon?lang=fr) -- Comparaison trois plateformes : NVIDIA CUDA, mémoire unifiée Apple et inférence CPU uniquement.',
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
        'url': 'https://www.promptquorum.com/local-llms/how-much-vram-local-llm?lang=fr',
        'inLanguage': 'fr',
        dateModified: '2026-04-07',
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
        'inLanguage': 'fr',
        mainEntity: [
          { '@type': 'Question', name: 'Puis-je exécuter Mistral 7B sur une GPU 6 GB?', acceptedAnswer: { '@type': 'Answer', text: 'À peine, à Q4 avec surcharge serrée. Pratiquement, non. Achetez au moins 8 GB. Vous aurez des erreurs OOM avec 6 GB.' } },
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
      publishDate: '2026-04-05',
      dateModified: '2026-05-06',
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
        'by-model-size': { title: 'VRAM nach Modellgröße', columns: ['Modellgröße', 'FP32', 'Q8', 'Q5', 'Q4', 'Empfohlene GPU'], rows: [{ 'Modellgröße': '3B', 'FP32': '12 GB', 'Q8': '3 GB', 'Q5': '2 GB', 'Q4': '1,5 GB', 'Empfohlene GPU': 'CPU oder RTX 3060 (3GB)' }, { 'Modellgröße': '7B', 'FP32': '28 GB', 'Q8': '7 GB', 'Q5': '4,5 GB', 'Q4': '3,5 GB', 'Empfohlene GPU': 'RTX 4060 Ti (8GB), RTX 4070 (12GB)' }, { 'Modellgröße': '13B', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', 'Empfohlene GPU': 'RTX 4080 (16GB), RTX 6800 XT (16GB)' }, { 'Modellgröße': '70B', 'FP32': '280 GB', 'Q8': '70 GB', 'Q5': '44 GB', 'Q4': '35-40 GB', 'Empfohlene GPU': 'Zwei RTX 4090 (24GB×2) oder A100 (80GB)' }, { 'Modellgröße': 'Qwen 3.6 35B-A3B (3B aktiv, MoE)*', 'FP32': '12 GB', 'Q8': '3 GB', 'Q5': '2 GB', 'Q4': '1,5 GB', 'Empfohlene GPU': 'CPU oder RTX 3060 (3GB)' }, { 'Modellgröße': 'DeepSeek V4-Flash (13B aktiv / 284B gesamt, MoE)*', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', 'Empfohlene GPU': 'RTX 4060 Ti (8GB), RTX 4070 (12GB)' }, { 'Modellgröße': 'Llama 4 Scout (17B aktiv / 109B gesamt, MoE)*', 'FP32': '68 GB', 'Q8': '17 GB', 'Q5': '11 GB', 'Q4': '9 GB', 'Empfohlene GPU': 'RTX 4080 (16GB), RTX 6800 XT (16GB)' }, { 'Modellgröße': 'Kimi K2.6 (42B aktiv / 1T gesamt, MoE)*', 'FP32': '168 GB', 'Q8': '42 GB', 'Q5': '27 GB', 'Q4': '21 GB', 'Empfohlene GPU': 'Zwei RTX 4090 (24GB×2) oder A100 (80GB)' }, { 'Modellgröße': 'Kontext (KV-Cache)', 'FP32': '+40 GB @ 2048 Token', 'Q8': '+10 GB @ 2048 Token', 'Q5': '+6 GB @ 2048 Token', 'Q4': '+3-5 GB @ 2048 Token', 'Empfohlene GPU': 'Durch Ollama-Kontextlänge und top_k verwaltet' }], note: '* MoE-Modelle: VRAM wird nur aus aktiven Parametern berechnet, nicht aus der Gesamtmodellgröße.' },
        quantization: { title: 'Wie reduziert Quantisierung VRAM-Anforderungen?', content: ['Quantisierung komprimiert Modellgewichte zu niedriger Präzision. Die Umwandlung von FP32 (32-Bit) auf Q4 (4-Bit) reduziert Werte um 87%.', '', '**Q4 (4-Bit)**: Standard für Consumer-GPUs. VRAM: 3,5× Reduktion. Qualität: Unter 1% Verlust. Für fast alle Aufgaben empfohlen.', '**Q5 (5-Bit)**: Ähnlich wie Q4, aber 2% bessere Genauigkeit. VRAM: 25% mehr, minimale Qualitätsverbesserung. Nur für fortgeschrittene Anwendungsfälle.', '**Q8 (8-Bit)**: Nahezu vollständige Präzision (<0,5% Verlust). VRAM-Reduktion: 4×. RTX 4080+ empfohlen.', '**FP32 (Vollständige Präzision)**: Alle Gewichte werden mit 32 Bit gespeichert. Auf Consumer-GPUs nicht praktikabel -- 70B FP32 benötigt 280 GB VRAM.', 'VRAM bestimmt die Modellgröße, aber das Prompt-Design bestimmt die Ausgabequalität. Techniken wie Chain-of-Thought und Few-Shot-Prompting können die Qualitätslücke zwischen kleineren und größeren Modellen schließen. Entdecken Sie das vollständige [Prompt-Engineering-Toolkit](https://www.promptquorum.com/prompt-engineering?lang=de), um mehr aus den Modellen herauszuholen, die Ihre Hardware unterstützt. Wenn Sie 12–16 GB VRAM haben und einen konkreten Coding-Workload zum Testen dieses Toolkits suchen, beschreibt [GitHub Copilot durch ein lokales LLM ersetzen](/power-local-llm/replace-github-copilot-with-local-llm?lang=de) den Continue.dev + Ollama + Qwen3-Coder-Stack passend zu genau diesen VRAM-Stufen.'] },
        'batch-size': { title: 'Batch-Größe und Multi-User-Inferenz', content: ['Batch-Größe ist die Anzahl der Text-Eingaben, die in einer Ausführung verarbeitet werden.', '', '**Single-User-Inferenz (batch=1)**: Eine Eingabeaufforderung auf einer GPU. VRAM: Nur Modellgröße + KV-Cache.', 'Beispiel: Llama3 7B Q4 = 3,5 GB (Modell) + 1,5 GB (KV-Cache) = 5 GB.', '', '**Batch-Verarbeitung (batch=4, 8, 16)**: Mehrere Eingaben gleichzeitig verarbeiten. VRAM: Linear steigend.', 'batch=4: ×4 VRAM (= 20 GB für 7B Q4). Durchsatz: ×3-3,5 (Parallelisierungsgewinn).', '', 'Batch-Inferenz ist wichtig für Multi-User-Server (3-5 Personen, gleichzeitige Anfragen). Für Single-User/Entwicklung nicht erforderlich.', '', 'KV-Cache (abhängig von Sequenzlänge):'] },
        overhead: { title: 'VRAM-Overhead: Mehr als nur Modellgröße', content: ['Die Parametergröße des Modells ist nicht das gesamte VRAM-Anforderungs-Bild. Zusätzlicher Speicher ist erforderlich:', '', '**KV-Cache (Key-Value Cache)**: Das Modell muss vorherige Token „merken". Nebenprodukt des Transformer-Aufmerksamkeitsmechanismus.', '- Proportional zur Eingabe-Ausgabe-Länge.', '- 7B-Modell, 2048-Token-Kontext, batch=1: +2-4 GB.', '', '**Aktivierungen**: Zwischenrechenergebnisse während der Inferenz.', '- Typischerweise 10-15% der Modellgröße.', '- 7B: +0,7-1,5 GB.', '', '**Laufzeit-Overhead**: CUDA-Speicherpool, Framebuffer, OS-Reservierungen.', '- Typischerweise 0,5-1,5 GB.'] },
        mistakes: { title: 'Häufige Fehler', content: ['**Missverständnis 1: „VRAM erforderlich = Modellgröße"**', 'VRAM ist immer größer als die Modellgröße. 3,5 GB-Modell benötigt mindestens 5 GB. RTX 4060 Ti 8 GB ist sicher, aber RTX 3060 6 GB birgt Risiken.', '', '**Missverständnis 2: „Apple Silicon (M3) Speicher ist nicht das gleiche wie GPU VRAM"**', 'Apple Silicon verwendet Unified Memory -- CPU und GPU teilen einen Speicherpool. M3 18 GB entspricht 18 GB GPU VRAM. Llama3 13B Q4 (~7 GB) kann auf M3 16 GB ausgeführt werden.', '', '**Missverständnis 3: „Quantisierung verlangsamt die Inferenz"**', 'Tatsächlich: Q4 ist schneller als Q5/Q8. Niedrigere Speicherbandbreite, effizienterer Cache. Ollama: Q4 ist einige Prozentpunkte schneller.'] },
        'regional-context': { title: 'Regionales Umfeld', content: ['**EU und Deutschland (DSGVO + BSI)**', 'Die DSGVO verlangt von Unternehmen, dass Modellgewichte und Trainingsdaten auf dem EU-Territorium gespeichert bleiben. Lokale LLM-Inferenz ist eine Compliance-Anforderung, nicht optional. Das BSI (Bundesamt für Sicherheit in der Informationstechnik) empfiehlt lokale Inferenz als Best Practice für Unternehmen mit sensiblen Daten.', '', '**Enterprise-Leitlinien für den deutschen Mittelstand:**', '- **1-50 Nutzer:** RTX 4070 Ti (12 GB) mit Llama3 13B Q4 (7-8 GB). Skalierbar mit Ollama im single-GPU-Modus.', '- **50-500 Nutzer:** RTX A6000 (48 GB) oder Dual RTX 4080 (32 GB) für parallele Anfragen und Batch-Verarbeitung. Erfordert vLLM oder Text Generation WebUI.', '- **500+ Nutzer:** A100 (80 GB) oder H100 (80 GB). Enterprise-Setup mit Load-Balancing über mehrere Server.', '', '**BSI-Sicherheitsempfehlungen:**', '- ECC-GPUs (A6000, A100) für Speicherfehler-Detektion.', '- GPU-Speicher-Dumps verhindern durch physische Sicherheit oder Encrypted Memory (wenn verfügbar).', '- DSGVO-Audit für Modell-Abhängigkeiten und Training-Daten-Herkunft obligatorisch.'] },
        vramCalculator: { id: 'vram-calculator', title: 'VRAM-Rechner', component: 'VramCalculator', content: 'Wählen Sie Ihre Modellgröße und Quantisierung aus, um die VRAM-Anforderungen zu schätzen.' },
        faqSection: { faqs: [{ q: 'Kann ein 3B-Modell auf meiner GPU laufen?', a: 'RTX 3060 (3 GB) oder CPU. Q4-Quantisierung benötigt 1,5-2 GB VRAM. Ollama, Llama.cpp, LM Studio unterstützen alle.' }, { q: 'Ist RTX 4060 ausreichend für 7B Q4?', a: 'Knapp. RTX 4060 (8 GB) sollte 5 GB theoretisch verwalten, aber OS/Laufzeit-Overhead (0,5-1,5 GB) wird eng. RTX 4070 (12 GB) empfohlen.' }, { q: 'Sind 12 GB für Llama3 13B ausreichend?', a: 'Q4 knapp. Q5 oder Q8 nicht. 12 GB ist eng. 16 GB komfortabel.' }, { q: 'Benötige ich 24 GB für ein 70B-Modell?', a: 'Q4 ja. Q5+ nein. Höhere Quantisierung (Q5, Q8) benötigt 32 GB+. 70B mindestens 35-40 GB erforderlich.' }, { q: 'Reduziert höhere Batch-Größe VRAM für einzelne Inferenz?', a: 'Nein. Einzelne Inferenz verwendet immer batch=1. Batch-Größe hilft nur Durchsatz (Multi-User-Szenarios).' }, { q: 'Was ist die präziseste Quantisierung?', a: 'Q8 nahezu unmerklicher Verlust. Q5 ~2% Verlust. Q4 ~1% Verlust. Für die meisten Fälle Q4 beste Balance.' }, { q: 'Kann ich Teil des VRAM auf CPU-RAM auslagern?', a: 'Ja, über Layer-Splitting (NVLink). Llama.cpp und Ollama unterstützen es. Leistung sinkt 30-50%.' }, { q: 'Was ist die minimale VRAM für lokale LLM-Ausführung?', a: '4 GB VRAM mit 3B Q4-Modell -- Modell ~1,8 GB, KV-Cache hat Platz. Praktisches Minimum 8 GB VRAM + 7B Q4. Unter 6 GB OOM für die meisten 7B-Modelle.' }, { q: 'Ist Apple Silicon VRAM dasselbe wie GPU VRAM?', a: 'Apple Silicon verwendet Unified Memory zwischen CPU/GPU gemeinsam -- ganzer Speicherpool verfügbar für Modell-Inferenz. M3 18 GB = GPU 18 GB VRAM. MacBook Pro M3 18 GB kann Llama3 13B Q4 (~7 GB) + Overhead ausführen.' }, { q: 'Wie viel VRAM benötigt 7B bei verschiedenen Quantisierungen?', a: '7B FP32: ~28 GB -- unpraktisch auf Consumer-GPUs. 7B Q8: ~7 GB -- passt auf RTX 4070 Ti 12 GB mit Puffer. 7B Q5: ~4,5 GB -- passt auf 8 GB GPU. 7B Q4: ~3,5 GB Modell + ~1,5 GB Overhead = ~5 GB -- passt auf 6 GB GPU eng, 8 GB komfortabel.' }, { q: 'Was sind die VRAM-Anforderungen für DSGVO-konforme lokale Inferenz in Unternehmen?', a: 'Minimum RTX 4070 Ti (12 GB) für bis zu 50 Nutzer mit Llama3 13B Q4. Für 50-500 Nutzer RTX A6000 (48 GB) oder Dual RTX 4080 (32 GB). ECC-GPU empfohlen für Speicherfehler-Detektion. GPU-Speicher-Dumps müssen verhindert werden (Firmware/physische Sicherheit).' }, { q: 'Welche GPU empfiehlt sich für einen Team-Server im deutschen Mittelstand?', a: 'RTX 4070 Ti (12 GB) für 1-50 Mitarbeiter. RTX A6000 (48 GB) oder Dual RTX 4080 (32 GB) für 50-500 Mitarbeiter. RTX 4070 Ti kann Llama3 13B Q4 + vLLM mit 3-5 gleichzeitigen Anfragen verwalten. Größere Teams benötigen A100 (80 GB) oder H100 und Enterprise-Clustering.' }] },
        relatedReading: { title: 'Weiterführende Literatur', items: ['/local-llms/best-local-llm-models-2026?lang=de', '/local-llms/how-to-run-ollama-locally?lang=de', '/local-llms/local-llm-hardware-guide-2026?lang=de', '/local-llms/best-amd-gpus-local-llm?lang=de', '/local-llms/local-llm-security-privacy-checklist?lang=de', '/local-llms/how-much-unified-memory-for-local-llm?lang=de', '/local-llms/running-70b-models-apple-silicon-m5-max?lang=de', '/local-llms/best-models-apple-silicon-2026?lang=de', '/local-llms/gpu-vs-cpu-vs-apple-silicon?lang=de'] },
        sources: { title: 'Quellen', items: ['NVIDIA CUDA-Dokumentation: GPU-Speicherverwaltung, Tensor Cores, Compute Capability', 'Ollama-Dokumentation: VRAM-Anforderungen, Quantisierungsschemata, GPU-Kompatibilitätsmatrix', 'Llama.cpp GitHub: GGUF-Format, Q4/Q5/Q8-Implementierung, Speicher-Profilierung'] },
      },
schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Wie viel VRAM benötigen Sie für einen lokalen LLM im Jahr 2026?', description: 'Exaktes VRAM für lokale LLMs: 7B benötigt 4-5 GB (Q4), 13B benötigt 8-10 GB, 70B benötigt 35-40 GB. Formel, GPU-Auswahl, Quantisierungs-Tradeoffs.', 'url': 'https://www.promptquorum.com/local-llms/how-much-vram-local-llm?lang=de', author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/author/hans-kuepper' }, datePublished: '2026-04-05', dateModified: '2026-05-06', inLanguage: 'de', image: '/og-image.png', publisher: { '@type': 'Organization', name: 'PromptQuorum', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } } },
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
      publishDate: '2026-04-05',
      dateModified: '2026-05-06',
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
        'by-model-size': { title: 'モデルサイズ別VRAM', columns: ['モデルサイズ', 'FP32', 'Q8', 'Q5', 'Q4', '推奨GPU'], rows: [{ 'モデルサイズ': '7B', 'FP32': '28 GB', 'Q8': '7 GB', 'Q5': '4.5 GB', 'Q4': '3.5 GB', '推奨GPU': 'RTX 4070 (12GB)' }, { 'モデルサイズ': '13B', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', '推奨GPU': 'RTX 4080 (16GB)' }, { 'モデルサイズ': '70B', 'FP32': '280 GB', 'Q8': '70 GB', 'Q5': '44 GB', 'Q4': '35-40 GB', '推奨GPU': 'デュアルRTX 4090' }, { 'モデルサイズ': 'Qwen 3.6 35B-A3B (3B有効, MoE)*', 'FP32': '12 GB', 'Q8': '3 GB', 'Q5': '2 GB', 'Q4': '2 GB', '推奨GPU': 'RTX 2060 6 GB または RTX 5070 12 GB' }, { 'モデルサイズ': 'DeepSeek V4-Flash (13B有効 / 284B総パラメータ, MoE)*', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', '推奨GPU': 'RTX 3060 12 GB または RTX 5070 12 GB' }, { 'モデルサイズ': 'Llama 4 Scout (17B有効 / 109B総パラメータ, MoE)*', 'FP32': '68 GB', 'Q8': '17 GB', 'Q5': '11 GB', 'Q4': '9 GB', '推奨GPU': 'RTX 3090 24 GB または RTX 5080 16 GB' }, { 'モデルサイズ': 'Kimi K2.6 (42B有効 / 1T総パラメータ, MoE)*', 'FP32': '168 GB', 'Q8': '42 GB', 'Q5': '27 GB', 'Q4': '21 GB', '推奨GPU': '2× RTX 4090 または RTX 5090 32 GB (Q4のみ)' }], note: '* MoEモデル: VRAMはアクティブパラメータのみから計算され、総モデルサイズではありません。' },
        quantization: { title: '量子化', content: ['量子化はモデル重みを低精度に圧縮します。Q4が標準。', 'VRAMはモデルサイズを決定しますが、プロンプトの設計が出力品質を決定します。Chain-of-ThoughtやFew-Shotプロンプティングなどのテクニックは、小さなモデルと大きなモデルの品質差を縮めることができます。お使いのハードウェアがサポートするモデルから最大限を引き出すには、[プロンプトエンジニアリング完全ツールキット](https://www.promptquorum.com/prompt-engineering?lang=ja)をご覧ください。VRAM が 12–16 GB あり、このツールキットを試す具体的なコーディングワークロードを探しているなら、[GitHub Copilot をローカル LLM で置き換える](/power-local-llm/replace-github-copilot-with-local-llm?lang=ja)で Continue.dev + Ollama + Qwen3-Coder のスタックがちょうどこれらの VRAM 帯にフィットする様子を解説しています。'] },
        'batch-size': { title: 'バッチサイズ', content: ['シングルユーザー推論はbatch=1です。'] },
        overhead: { title: 'オーバーヘッド', content: ['KVキャッシュ、アクティベーション、ランタイムが追加メモリを消費。'] },
        'regional-context': { title: '地域的背景', content: ['日本 (METI): ローカルLLM推論は主権データ管理として重要。'] },
        mistakes: { title: '一般的な間違い', content: ['VRAM ≠ モデルサイズ。常に5 GB以上の余地が必要。'] },
        vramCalculator: { id: 'vram-calculator', title: 'VRAM計算機', component: 'VramCalculator', content: 'モデルサイズと量子化を選択してVRAM要件を推定します。' },
        faqSection: { faqs: [{ q: 'RTX 4060は7B Q4に十分?', a: 'ぎりぎり。RTX 4070推奨。' }, { q: '70B用に24 GBは?', a: 'Q4で不十分。35-40 GB必要。' }] },
        relatedReading: { title: '関連資料', items: ['/local-llms/best-local-llm-models-2026?lang=ja', '/local-llms/how-much-unified-memory-for-local-llm?lang=ja', '/local-llms/running-70b-models-apple-silicon-m5-max?lang=ja', '/local-llms/best-models-apple-silicon-2026?lang=ja', '/local-llms/gpu-vs-cpu-vs-apple-silicon?lang=ja'] },
        sources: { title: '参考資料', items: ['NVIDIA CUDA ドキュメント', 'Ollama ドキュメント'] },
      },
schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: '2026年にローカルLLMを実行するのに必要なVRAMはどのくらい?', 'url': 'https://www.promptquorum.com/local-llms/how-much-vram-local-llm?lang=ja', inLanguage: 'ja', datePublished: '2026-04-04', dateModified: '2026-05-06', author: { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/author/hans-kuepper' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' } },
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
        'inLanguage': 'ja',
        mainEntity: [
          { '@type': 'Question', name: '6GB GPUでMistral 7Bを実行できますか?', acceptedAnswer: { '@type': 'Answer', text: 'Q4でギリギリです。実際のところ、いいえ。最低8GBを購入してください。6GBではOOMエラーが発生します。' } },
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
      publishDate: '2026-04-05',
      dateModified: '2026-05-06',
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
        'by-model-size': { title: '按模型大小的显存', columns: ['模型大小', 'FP32', 'Q8', 'Q5', 'Q4', '推荐GPU'], rows: [{ '模型大小': '7B', 'FP32': '28 GB', 'Q8': '7 GB', 'Q5': '4.5 GB', 'Q4': '3.5 GB', '推荐GPU': 'RTX 4070 (12GB)' }, { '模型大小': '13B', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', '推荐GPU': 'RTX 4080 (16GB)' }, { '模型大小': '70B', 'FP32': '280 GB', 'Q8': '70 GB', 'Q5': '44 GB', 'Q4': '35-40 GB', '推荐GPU': '双RTX 4090' }, { '模型大小': 'Qwen 3.6 35B-A3B (3B活跃, MoE)*', 'FP32': '12 GB', 'Q8': '3 GB', 'Q5': '2 GB', 'Q4': '2 GB', '推荐GPU': 'RTX 2060 6 GB 或 RTX 5070 12 GB' }, { '模型大小': 'DeepSeek V4-Flash (13B活跃 / 284B总参数, MoE)*', 'FP32': '52 GB', 'Q8': '13 GB', 'Q5': '8 GB', 'Q4': '7 GB', '推荐GPU': 'RTX 3060 12 GB 或 RTX 5070 12 GB' }, { '模型大小': 'Llama 4 Scout (17B活跃 / 109B总参数, MoE)*', 'FP32': '68 GB', 'Q8': '17 GB', 'Q5': '11 GB', 'Q4': '9 GB', '推荐GPU': 'RTX 3090 24 GB 或 RTX 5080 16 GB' }, { '模型大小': 'Kimi K2.6 (42B活跃 / 1T总参数, MoE)*', 'FP32': '168 GB', 'Q8': '42 GB', 'Q5': '27 GB', 'Q4': '21 GB', '推荐GPU': '2× RTX 4090 或 RTX 5090 32 GB (仅Q4)' }], note: '* MoE模型: 显存仅从活跃参数计算,不包括总模型大小。' },
        quantization: { title: '量子化', content: ['量子化将权重压缩至低精度。Q4为消费级GPU标准。', 'VRAM决定模型大小，但提示词设计决定输出质量。思维链和少样本提示等技术可以缩小大小模型之间的质量差距。探索完整的[Prompt工程工具箱](https://www.promptquorum.com/prompt-engineering?lang=zh)，从你的硬件所支持的模型中获取更多。如果你有 12–16 GB 显存，并希望找一个具体的编码任务来检验这套工具箱，[用本地 LLM 替代 GitHub Copilot](/power-local-llm/replace-github-copilot-with-local-llm?lang=zh)正好把 Continue.dev + Ollama + Qwen3-Coder 的方案对应到这些显存档位上。'] },
        'batch-size': { title: '批大小', content: ['单用户推理总是batch=1。批处理仅有助吞吐量。'] },
        overhead: { title: '显存开销', content: ['KV缓存、激活、运行时开销占额外5 GB。'] },
        'regional-context': { title: '地区背景', content: ['中国 (CAC): 本地LLM推理用于数据主权。Qwen2.5 72B在双RTX 4090上是首选。'] },
        mistakes: { title: '常见错误', content: ['显存 ≠ 模型大小。总需要5 GB以上余地。'] },
        vramCalculator: { id: 'vram-calculator', title: '显存计算器', component: 'VramCalculator', content: '选择你的模型大小和量子化方式以估计显存需求。' },
        faqSection: { faqs: [{ q: 'RTX 4060足以运行7B Q4吗?', a: '勉强。推荐RTX 4070。' }, { q: '70B模型需要24 GB吗?', a: '否。需35-40 GB。' }] },
        relatedReading: { title: '相关阅读', items: ['/local-llms/best-local-llm-models-2026?lang=zh', '/local-llms/how-much-unified-memory-for-local-llm?lang=zh', '/local-llms/running-70b-models-apple-silicon-m5-max?lang=zh', '/local-llms/best-models-apple-silicon-2026?lang=zh', '/local-llms/gpu-vs-cpu-vs-apple-silicon?lang=zh'] },
        sources: { title: '参考资源', items: ['NVIDIA CUDA文档', 'Ollama文档'] },
      },
schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: '2026年运行本地LLM需要多少显存?', 'url': 'https://www.promptquorum.com/local-llms/how-much-vram-local-llm?lang=zh', inLanguage: 'zh', datePublished: '2026-04-04', dateModified: '2026-05-06', author: { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/author/hans-kuepper' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' } },
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
        'inLanguage': 'zh',
        mainEntity: [
          { '@type': 'Question', name: '我可以在6GB GPU上运行Mistral 7B吗?', acceptedAnswer: { '@type': 'Answer', text: '勉强,Q4显存紧张。实际上不行。至少买8GB。6GB会导致OOM错误。' } },
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
