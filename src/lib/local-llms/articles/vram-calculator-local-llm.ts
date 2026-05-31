// Auto-generated from src/lib/local-llms/content.ts
// Slug: vram-calculator-local-llm
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Hardware & Performance',
      title: 'VRAM Calculator 2026: 7B/13B/70B LLM GPU Requirements (Q4, Q5, Q8)',
      seoTitle: 'VRAM Calculator 2026: 7B/13B/70B LLM GPU Requirements (Q4, Q5, Q8)',
      intro: 'Interactive VRAM calculator for local LLMs. Enter model size, quantization, context length, and batch size to calculate exact GPU VRAM needs. Works for 1B–405B models at FP16, Q8, Q5, Q4 quantization. Updated April 2026 with RTX 4090, 4080, 3060 fit analysis and overhead calculations.',
      metaDescription: 'Interactive VRAM calculator: Calculate exact GPU requirements for 7B (3.5 GB Q4), 13B (6.5 GB Q4), 70B (35 GB Q4) LLM models. Check RTX 4090, 4080, 4070 Ti fit. Q4/Q5/Q8 quantization. Context, batch, and system overhead included.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**This guide explains how to calculate exact VRAM requirements for any model and hardware combination. The formula is simple: (Model Size GB × Quantization Bits) ÷ 8 = VRAM Needed.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '10 min read',
      educationalLevel: 'Beginner to Intermediate',
      primaryTerm: 'VRAM calculator',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'VRAM Calculator for Local LLMs: Calculate Exact GPU Requirements',
        description: 'VRAM calculator for local LLMs 2026: use formula VRAM = (Model Billions × Quantization Bits) ÷ 8. RTX 4090, 4080, M5 Max examples with overhead, batching, and accuracy data.',
        author: {
          '@type': 'Person',
          name: 'Hans Kuepper',
          sameAs: 'https://www.promptquorum.com/about'
        },
        datePublished: '2026-04-04',
        dateModified: '2026-04-19',
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com'
        },
        proficiencyLevel: 'Beginner',
        audience: {
          '@type': 'Audience',
          audienceType: 'Developers, beginners running local LLMs'
        },
        about: [
          { '@type': 'Thing', name: 'VRAM' },
          { '@type': 'Thing', name: 'GPU memory' },
          { '@type': 'Thing', name: 'Llama models' },
          { '@type': 'Thing', name: 'Quantization' }
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways']
        }
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does the formula work for all model types?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The formula (Model Billions × Quantization Bits) ÷ 8 applies to all Transformer-based models (Llama, Qwen, Mistral, Claude, etc.). Non-Transformer architectures (RNNs, etc.) are rare and may require adjustment.'
            }
          },
          {
            '@type': 'Question',
            name: 'What quantization should I use?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For most use cases: Q5 offers the best balance (95% quality, 68% size reduction). For consumer GPUs: Q4 is standard (90-95% quality, 75% reduction). For production: Q8 if VRAM allows (99% quality). Avoid Q3 and below unless you have no choice.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much system RAM do I need?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Minimum 16 GB for offloading. If using VRAM offloading (CPU spillover), system RAM becomes the fallback. For batch processing, add 8–16 GB system RAM beyond model offload requirements. For single-user chat, 16 GB is sufficient.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does batch size affect VRAM calculation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The formula calculates single-request VRAM. Batch size adds additional VRAM linearly: each concurrent request adds ~500 MB–2 GB depending on context length. If running batch=4, add 2–8 GB to the calculated amount.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I run a 70B model on a 12 GB GPU?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Only with extreme quantization (Q2, ~70% quality loss) and CPU offloading (very slow, 1–3 tokens/sec). Not practical. Better option: use a 13B model at Q4 (same VRAM, much faster and better quality).'
            }
          },
          {
            '@type': 'Question',
            name: 'What if my actual VRAM usage is lower than calculated?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The formula is conservative and includes overhead. Lower actual usage means more headroom for batch processing, longer contexts, or safety margin. Use nvidia-smi to measure real usage, then benchmark your model to confirm performance.'
            }
          },
          {
            '@type': 'Question',
            name: 'Should I buy a GPU exactly at the calculated VRAM size?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Always buy 25% more VRAM than calculated. If you calculate 18 GB need, buy a 24 GB GPU. This safety margin accounts for context growth, batching, and system processes. Exact-fit purchases leave no headroom and cause out-of-memory errors.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the best GPU for 13B models in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTX 4070 Ti (12 GB) for single-user chat at Q4–Q5. RTX 4080 (16 GB) if you want Q8 quality or batch processing. M5 Max (36 GB) if using Mac. All three comfortably run Llama 3.3, Qwen2.5, and Mistral 3.1 13B models.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I run a 70B model on RTX 4090?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Only with Q4 quantization (35 GB) + CPU offloading (slow, 3–5 tok/sec), which is impractical. Better approach: use a 32B model at Q5 (20 GB) on RTX 4090 for fast, quality responses. Or upgrade to RTX 5090 (32 GB) for 70B at Q4 without offloading.'
            }
          }
        ]
      },
      softwareApplicationSchema: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'VRAM Calculator for Local LLMs',
        description: 'Interactive VRAM calculator for local LLMs. Calculate exact GPU VRAM requirements for any combination of model size (1B–405B), quantization (FP16, Q8, Q5, Q4, Q3, Q2), context length (2K–128K tokens), and batch size (1–8). Includes real-time GPU compatibility checking for RTX 5070/5080/5090 and M5 Max.',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Web',
        url: 'https://www.promptquorum.com/local-llms/vram-calculator-local-llm',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        creator: {
          '@type': 'Person',
          name: 'Hans Kuepper'
        }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Calculate VRAM Requirements for Local LLMs',
        description: 'Calculate exact VRAM needed for any local LLM model using the formula: (Model Billions × Quantization Bits) ÷ 8. Includes context, batch, and system overhead.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Identify your model size',
            text: 'Determine the parameter count in billions (e.g., 7B = 7 billion parameters, 13B = 13 billion). Common models: Llama 3.2 (7B, 13B), Qwen2.5 (7B, 14B, 32B, 72B), Mistral 3.1 (7B, 32B), Claude (varies).'
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Choose quantization level',
            text: 'Select quantization bits: FP16 (100% quality, largest), Q8 (99%), Q5 (95%, recommended balance), Q4 (90-95%, consumer default), Q3 (80-85%, extreme compression), Q2 (70%, edge devices).'
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Apply the formula',
            text: 'Calculate: VRAM (GB) = (Model Size in Billions × Quantization Bits) ÷ 8. Example: 13B model at Q4 = (13 × 4) ÷ 8 = 6.5 GB base model weight.'
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Account for overhead',
            text: 'Add overhead for context (1-3 GB for 4k tokens), batch processing (×batch size), and system (1-2 GB). Total = base + overhead.'
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Apply 25% safety margin',
            text: 'Multiply total by 1.25 to get recommended VRAM. Example: 10 GB calculated = buy 12-16 GB GPU. This accounts for runtime variation and headroom.'
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Check GPU compatibility',
            text: 'Compare your recommended VRAM against available GPUs. RTX 5090 (32 GB), RTX 5080 (16 GB), RTX 5070 Ti (16 GB), RTX 5070 (12 GB), M5 Max (48 GB). Use the interactive calculator for real-time matching.'
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'VRAM Calculator for Local LLMs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Calculate base VRAM', 'description': 'Use formula: (Parameters Billions × Quantization Bits) ÷ 8. Q4 = 4 bits, Q8 = 8 bits.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Add context and batch overhead', 'description': 'Context (4K tokens): +2-3 GB. Batch: +(batch-1) × 1-2 GB per request.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Apply 25% safety margin', 'description': 'Multiply total by 1.25. Example: 10 GB calculated → buy 12-16 GB GPU.' },
        ]
      },
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Quick Facts', anchor: '#quick-facts' },
        { label: 'In One Sentence', anchor: '#in-one-sentence' },
        { label: 'In Plain Terms', anchor: '#in-plain-terms' },
        { label: 'VRAM Formula', anchor: '#vram-formula' },
        { label: 'Interactive Calculator', anchor: '#interactive-calculator' },
        { label: 'Quantization Levels Explained', anchor: '#quantization-levels' },
        { label: 'Quick Reference Table', anchor: '#quick-reference' },
        { label: 'Real-World Examples', anchor: '#real-world-examples' },
        { label: 'Which GPU Fits Your Model?', anchor: '#hardware-fit' },
        { label: 'Hidden VRAM Overhead', anchor: '#hidden-overhead' },
        { label: 'Accuracy and Margins', anchor: '#accuracy' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Regional Deployment', anchor: '#regional-context' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Related Reading', anchor: '#related-reading' },
      ],
      gammaEmbedUrl: '/presentations/vram-calculator-local-llm-static.html',
      gammaDescription: 'The slide deck below covers: VRAM formula (Model Billions × Quantization Bits) ÷ 8, quantization levels Q2–FP16 with quality trade-offs, quick reference table (3B–70B models), real-world GPU scenarios (RTX 4090, 4080, M5 Max), and regional compliance (EU GDPR, Japan APPI, China Data Security Law). Download the PDF as a VRAM calculator reference card.',
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'VRAM = (Model Size × Quantization Bits) ÷ 8',
            'FP16 = 16 bits, Q8 = 8, Q5 = 5, Q4 = 4 bits',
            'Example: 13B model at Q4 = (13 × 4) ÷ 8 = 6.5 GB',
            'Always add 25% buffer for context, system overhead, and safe margin',
            'As of April 2026, this formula is accurate within ±10%',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: 'Quick Facts: VRAM Requirements by GPU',
          items: [
            '**RTX 4090 (24 GB):** Llama 3.1 7B at Q4 (3.5 GB), 13B at Q5 (8.1 GB), 70B at Q4 with offloading',
            '**RTX 4080 (16 GB):** Llama 3.1 7B at Q4 (3.5 GB), 13B at Q5 (8.1 GB), 32B at Q4 (16 GB)',
            '**RTX 4070 Ti (12 GB):** Llama 3.1 7B at Q4 (3.5 GB), 13B at Q5 (8.1 GB with tight headroom)',
            '**M5 Max Mac (36 GB unified):** Llama 3.1 13B at FP16 (26 GB), 70B not possible without extreme quantization',
            '**Rule of thumb:** Always budget 25–40% extra VRAM for context, batching, and system overhead beyond the formula result',
          ],
        },
        inOneSentence: {
          id: 'in-one-sentence',
          title: 'In One Sentence',
          content: 'VRAM required (GB) equals model parameters in billions multiplied by quantization bits (16 for FP16, 8 for Q8, 4 for Q4, etc.), divided by 8.',
        },
        inPlainTerms: {
          id: 'in-plain-terms',
          title: 'In Plain Terms',
          content: 'Think of VRAM like bookshelf space. Bigger books (models with more parameters like 70B) take more shelf space. Smaller books (Q4 quantization) take less space than larger ones (FP16). The formula tells you exactly how many "shelves" (GB) you need. Always leave extra empty shelves for conversations, multiple requests at once, and system software.',
        },
        formula: {
          id: 'vram-formula',
          title: 'What Is the VRAM Formula?',
          image: '/images/vram-calculator-local-llm-formula-en.svg',
          imageCaption: 'VRAM formula with 3 calculation examples: 7B model at Q4 = 3.5 GB, 13B at Q5 = 8.1 GB, 70B at Q8 = 70 GB. Always add 25–40% buffer for context, batching, and system overhead.',
          content: [
            'The formula for VRAM requirement is deceptively simple:',
            '💡 **Pro Tip:** This formula calculates model weights only. Real VRAM usage is 25–40% higher due to context, batching, and system overhead. Always add a safety margin.',
          ],
          codeBlock: 'VRAM (GB) = (Model Size in Billions × Quantization Bits) ÷ 8\n\nExample:\n- 7B model at 4-bit quantization\n- (7 × 4) ÷ 8 = 3.5 GB\n\n- 13B model at 5-bit quantization\n- (13 × 5) ÷ 8 = 8.125 GB\n\n- 70B model at 8-bit quantization\n- (70 × 8) ÷ 8 = 70 GB',
          codeLanguage: 'bash',
        },
        calculator: {
          id: 'interactive-calculator',
          title: 'Interactive VRAM Calculator',
          content: 'Use this calculator to compute exact VRAM requirements for any combination of model, quantization, context, and batch size. Select your configuration and see which GPUs fit.',
          component: 'VramCalculator',
        },
        quantization: {
          id: 'quantization-levels',
          title: 'What Do Quantization Levels Mean?',
          image: '/images/vram-calculator-local-llm-quant-levels-en.svg',
          imageCaption: 'Quantization levels comparison: FP16 (100% quality), Q8 (99%), Q5 (95%, recommended), Q4 (90–95%), Q3 (80–85%), Q2 (70%). Q5 reduces a 7B model from 14 GB to 4.4 GB with only 5% quality loss.',
          content: '🔍 **Key Insight:** Quantization trades file size for quality. Q5 is the sweet spot (95% quality, 68% smaller). Q4 is acceptable for most users. Q3 and below are only for edge devices or when VRAM is critically constrained.',
          rows: [
            { 'Quantization': 'FP16 (16-bit)', 'Size Reduction': 'None (baseline)', 'Quality': '100% (perfect)', 'Speed': 'Baseline', 'Use Case': 'Research, fine-tuning' },
            { 'Quantization': 'Q8 (8-bit)', 'Size Reduction': '50%', 'Quality': '99% (imperceptible)', 'Speed': 'Baseline', 'Use Case': 'Production, local servers' },
            { 'Quantization': 'Q6 (6-bit)', 'Size Reduction': '62.5%', 'Quality': '98% (negligible)', 'Speed': 'Baseline', 'Use Case': 'Balanced use' },
            { 'Quantization': 'Q5 (5-bit)', 'Size Reduction': '68.75%', 'Quality': '95% (minor loss)', 'Speed': 'Baseline', 'Use Case': 'Good compression, consumer' },
            { 'Quantization': 'Q4 (4-bit)', 'Size Reduction': '75%', 'Quality': '90-95% (acceptable)', 'Speed': 'Baseline', 'Use Case': 'Maximum compression' },
            { 'Quantization': 'Q3 (3-bit)', 'Size Reduction': '81%', 'Quality': '80-85% (noticeable loss)', 'Speed': 'Faster', 'Use Case': 'Extreme compression, CPU' },
            { 'Quantization': 'Q2 (2-bit)', 'Size Reduction': '87.5%', 'Quality': '70% (visible loss)', 'Speed': 'Fastest', 'Use Case': 'Tiny models, edge devices' },
          ],
          columns: ['Quantization', 'Size Reduction', 'Quality', 'Speed', 'Use Case'],
        },
        quickRef: {
          id: 'quick-reference',
          title: 'Quick Reference Table: VRAM by Model and Quantization',
          image: '/images/vram-calculator-local-llm-quick-ref-en.svg',
          imageCaption: 'VRAM quick reference matrix: 3B to 70B models at FP16, Q8, Q5, and Q4 quantization. Green = fits in 12 GB GPU. Amber = needs 16–24 GB. Red = requires 40+ GB or multi-GPU.',
          rows: [
            { 'Model': '3B', 'FP16': '6 GB', 'Q8': '3 GB', 'Q5': '1.9 GB', 'Q4': '1.5 GB' },
            { 'Model': '7B', 'FP16': '14 GB', 'Q8': '7 GB', 'Q5': '4.4 GB', 'Q4': '3.5 GB' },
            { 'Model': '13B', 'FP16': '26 GB', 'Q8': '13 GB', 'Q5': '8.1 GB', 'Q4': '6.5 GB' },
            { 'Model': '32B', 'FP16': '64 GB', 'Q8': '32 GB', 'Q5': '20 GB', 'Q4': '16 GB' },
            { 'Model': '70B', 'FP16': '140 GB', 'Q8': '70 GB', 'Q5': '43.75 GB', 'Q4': '35 GB' },
          ],
          columns: ['Model', 'FP16', 'Q8', 'Q5', 'Q4'],
        },
        realWorld: {
          id: 'real-world-examples',
          title: 'Real-World Examples',
          image: '/images/vram-calculator-local-llm-gpu-scenarios-en.svg',
          imageCaption: 'Real-world GPU scenarios: RTX 4090 (24 GB), RTX 4080 (16 GB), RTX 4070 Ti (12 GB), M5 Max Mac (36 GB), and RTX 3060 (12 GB) — what Llama 3.1 models each can run at various quantization levels.',
          content: [
            'Practical VRAM calculations for common scenarios:',
            '⚠️ **Warning:** These calculations are for model weights only. Add 25–40% for context, batch processing, and system overhead. Example: 13B Q5 = 8.1 GB model + 2–3 GB overhead = 10–11 GB actual.',
          ],
          items: [
            '**RTX 4070 Ti (12 GB)**: Llama 3.1 7B at Q4 = 3.5 GB ✓ (plenty of room). Llama 3.1 13B at Q5 = 8.1 GB ✓ (tight, but works with no context/batching).',
            '**RTX 4090 (24 GB)**: Llama 3.1 70B at Q5 = 43.75 GB ✗ (too large). Llama 3.1 70B at Q4 = 35 GB ✗ (still too large). Llama 3.1 70B at Q4 with offloading = works (slow, 3–5 tok/sec).',
            '**M5 Max Mac (36 GB)**: Llama 3.1 13B at FP16 = 26 GB ✓ (works). Llama 3.1 70B = impossible (even at Q2, ~70% quality loss).',
          ],
        },
        overhead: {
          id: 'hidden-overhead',
          title: 'What Hidden VRAM Overhead Should You Account For?',
          image: '/images/vram-calculator-local-llm-overhead-en.svg',
          imageCaption: 'Hidden VRAM overhead breakdown: context window (2–3 GB for 4k tokens), batch processing (×4 for batch=4), system overhead (500 MB–1 GB), and 25–40% safety margin total.',
          content: [
            '**The formula calculates model weights only.** Your actual VRAM usage will be higher due to several factors. Budget an additional 25–40% beyond the calculated amount.',
            'Context window (key-value cache) stores conversation history during inference. A 4k-token context uses approximately 2–3 GB for a 7B model.',
            '📌 **Key Point:** Batch processing increases VRAM usage linearly. Each additional concurrent prompt (when processing multiple requests simultaneously) uses 500 MB–2 GB of extra memory. If you run batch=4, multiply the single-request VRAM by 4 and add overhead.',
            'System overhead from the operating system and inference engine framework (Ollama, vLLM, llama.cpp) reserves 500 MB–1 GB. Always maintain a safety margin when choosing a GPU.',
          ],
        },
        hardwareGuide: {
          id: 'hardware-fit',
          title: 'Which Local LLM Fits Your GPU? 2026 Guide',
          content: [
            'Use the interactive calculator above to find your exact fit. Below are common GPU scenarios and recommended models.',
          ],
          items: [
            '**RTX 3060 (12 GB):** Best model: Qwen2.5 7B Q5 (4.4 GB) ✓. Alternative: Llama 3.2 8B Q4 (4 GB) ✓. Not possible: 32B+ models.',
            '**RTX 4070 (12 GB):** Best model: Qwen2.5 13B Q4 (6.5 GB) ✓. With headroom: Llama 3.2 8B Q5 (5 GB) ✓. Not possible: 32B models.',
            '**RTX 4070 Ti (12 GB):** Best model: Qwen2.5 13B Q5 (8.1 GB) ✓. Tight fit: Llama 3.3 13B Q4 (6.5 GB) ✓. Not ideal: Batch processing.',
            '**RTX 4080 (16 GB):** Best model: Qwen2.5 32B Q4 (16 GB) ✓ tight. Comfortable: Mistral 3.1 24B Q5 (15 GB) ✓. Recommended: Llama 3.3 13B Q8 (13 GB) ✓.',
            '**RTX 4090 (24 GB):** Best model: Qwen2.5 32B Q5 (20 GB) ✓. With offload: Llama 3.3 70B Q4 (35 GB – needs offloading). Comfortable: Any 32B at Q5/Q8.',
            '**RTX 5090 (32 GB, if released):** Best model: Llama 3.3 70B Q4 (35 GB – tight fit). Better: Qwen2.5 72B Q3 (27 GB) ✓. Comfortable: 70B at Q5+ with batching.',
          ],
        },
        accuracy: {
          id: 'accuracy',
          title: 'How Accurate Is the Formula?',
          image: '/images/vram-calculator-local-llm-accuracy-en.svg',
          imageCaption: 'VRAM formula accuracy ±10%: variation caused by quantization format (GGUF vs GPTQ vs AWQ), model architecture (Transformer vs MoE), and inference engine (vLLM vs llama.cpp vs Ollama).',
          content: [
            '**The formula is accurate within ±10% for most cases.** Real-world VRAM usage varies based on implementation, model architecture, and inference engine optimizations.',
            'Sources of variation include: different quantization formats (GGUF vs. safetensors vs. AWQ), model architecture (Transformer vs. non-Transformer), and inference engine-specific optimizations (vLLM, llama.cpp, Ollama).',
            'As of April 2026, treat the formula as a conservative estimate. Always add a 25% safety margin when purchasing GPUs to account for context overhead, batching, and system processes.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Common Mistakes in VRAM Calculation',
          image: '/images/vram-calculator-local-llm-mistakes-en.svg',
          imageCaption: '4 common VRAM mistakes: forgetting context overhead (adds 1.5–3 GB), confusing 70B parameters with 70 GB VRAM, ignoring 1–2 GB system overhead, and buying a GPU exactly at the calculated size without 25% margin.',
          items: [
            '**Forgetting the context overhead.** A 7B model at Q4 is 3.5 GB, but with 4k context, it needs 5-6 GB total.',
            '**Using model size from HuggingFace without considering quantization.** 70B means 70 billion parameters, not 70 GB VRAM.',
            '**Not accounting for system overhead.** Models never get the full GPU VRAM. Reserve 1-2 GB for the OS and inference engine.',
            '**Buying GPU exactly at calculated size.** Always buy 25% more. A calculated 18 GB need means get a 24 GB GPU.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Regional Deployment Considerations',
          content: [
            '**European Union (GDPR):** Local inference (on-premises) ensures data residency compliance under GDPR. Running models on your own GPU keeps user data in-country. This VRAM calculator helps you size hardware for privacy-first deployments.',
            '**Japan (APPI):** The Act on Protection of Personal Information (APPI) requires careful data handling. On-device LLM inference reduces data transfer and processing outside Japan. Use this calculator to size systems for Japanese enterprise deployments.',
            '**China (Data Security Law):** China\'s 2021 Data Security Law mandates data residency within Chinese borders. Local LLM inference on domestic servers (Alibaba Cloud, Tencent Cloud) is compliant. This formula applies to sizing those deployments with Chinese-optimized models like Qwen2.5.',
            'In all regions, local inference provides stronger data privacy guarantees than cloud APIs. This VRAM calculator is essential for designing compliant, privacy-preserving AI systems.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'FAQ: VRAM and GPU Requirements',
          faqs: [
            { q: 'Does the formula work for all model types?', a: 'Yes. The formula (Model Billions × Quantization Bits) ÷ 8 applies to all Transformer-based models (Llama, Qwen, Mistral, Claude, etc.). Non-Transformer architectures (RNNs, etc.) are rare and may require adjustment.' },
            { q: 'What quantization should I use?', a: 'For most use cases: Q5 offers the best balance (95% quality, 68% size reduction). For consumer GPUs: Q4 is standard (90-95% quality, 75% reduction). For production: Q8 if VRAM allows (99% quality). Avoid Q3 and below unless you have no choice.' },
            { q: 'How much system RAM do I need?', a: 'Minimum 16 GB for offloading. If using VRAM offloading (CPU spillover), system RAM becomes the fallback. For batch processing, add 8–16 GB system RAM beyond model offload requirements. For single-user chat, 16 GB is sufficient.' },
            { q: 'Does batch size affect VRAM calculation?', a: 'Yes. The formula calculates single-request VRAM. Batch size adds additional VRAM linearly: each concurrent request adds ~500 MB–2 GB depending on context length. If running batch=4, add 2–8 GB to the calculated amount.' },
            { q: 'Can I run a 70B model on a 12 GB GPU?', a: 'Only with extreme quantization (Q2, ~70% quality loss) and CPU offloading (very slow, 1–3 tokens/sec). Not practical. Better option: use a 13B model at Q4 (same VRAM, much faster and better quality).' },
            { q: 'What if my actual VRAM usage is lower than calculated?', a: 'The formula is conservative and includes overhead. Lower actual usage means more headroom for batch processing, longer contexts, or safety margin. Use nvidia-smi to measure real usage, then benchmark your model to confirm performance.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) -- Complete GPU and CPU recommendations for your budget.',
            '[Best GPUs for Local LLMs](/local-llms/best-gpus-for-local-llms) -- RTX 4090, 4080, 4070 Ti benchmarks and cost analysis.',
            '[Run 70B Models on 24GB VRAM](/local-llms/run-70b-models-24gb-vram) -- Quantization and offloading techniques for large models.',
            '[LLM Quantization Explained](/local-llms/llm-quantization-explained) -- Deep dive into Q4, Q5, Q8 formats and quality trade-offs.',
            '[Local LLM Power Consumption](/local-llms/local-llm-power-consumption) -- PSU, cooling, and electricity cost analysis.',
            '[Multi-GPU Local LLMs](/local-llms/multi-gpu-local-llms) -- Layer splitting and distributed inference for 70B+ models.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[GGUF Specification](https://github.com/ggerganov/ggml/blob/master/docs/gguf.md) -- ggerganov/ggml documentation on quantized file format.',
            '[Transformers Quantization Docs](https://huggingface.co/docs/transformers/quantization) -- Hugging Face official guide to quantization methods.',
            '[Ollama Documentation](https://ollama.ai) -- Official Ollama guides for model management.',
            '[vLLM Performance Guide](https://docs.vllm.ai) -- vLLM framework optimization documentation.',
            'Your VRAM limits model size, but model size isn\'t the only limit on output quality. Larger context windows enable better responses: [context windows explained](https://www.promptquorum.com/prompt-engineering/context-windows-explained-why-ai-forgets) covers how to work within constraints.',
          ],
        },
      },
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Hardware & Performance',
      title: 'Calculadora de VRAM 2026: Requisitos de GPU para LLMs 7B/13B/70B (Q4, Q5, Q8)',
      seoTitle: 'Calculadora de VRAM 2026: GPU para LLMs 7B, 13B y 70B',
      intro: 'Calculadora interactiva de VRAM para LLMs locales. Introduce el tamaño del modelo, la cuantización, la longitud del contexto y el tamaño del lote para calcular exactamente cuánta VRAM GPU necesitas. Compatible con modelos de 1B a 405B en FP16, Q8, Q5 y Q4. Actualizado en abril de 2026 con análisis de compatibilidad para RTX 4090, 4080, 3060 y cálculos de sobrecarga.',
      metaDescription: 'Calcula los requisitos exactos de GPU para LLMs de 7B (3,5 GB en Q4), 13B (6,5 GB en Q4) y 70B (35 GB en Q4). Compatibilidad con RTX 4090, 4080 y 4070 Ti.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-19',
      next_refresh_due: '2026-10-04',
      leadAnswerBlock: '**Esta guía explica cómo calcular los requisitos exactos de VRAM para cualquier combinación de modelo y hardware. La fórmula es sencilla: (Tamaño del modelo en GB × Bits de cuantización) ÷ 8 = VRAM necesaria.**',
      audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
      readTime: '10 min de lectura',
      educationalLevel: 'Beginner to Intermediate',
      primaryTerm: 'calculadora de VRAM',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Calculadora de VRAM para LLMs locales: Calcula los requisitos exactos de GPU',
        description: 'Calculadora de VRAM para LLMs locales 2026: usa la fórmula VRAM = (Miles de millones del modelo × Bits de cuantización) ÷ 8. Ejemplos con RTX 4090, 4080, M5 Max con datos de sobrecarga, procesamiento por lotes y precisión.',
        author: {
          '@type': 'Person',
          name: 'Hans Kuepper'
        },
        datePublished: '2026-04-04',
        dateModified: '2026-04-19',
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com'
        },
        proficiencyLevel: 'Principiante',
        audience: {
          '@type': 'Audience',
          audienceType: 'Desarrolladores y principiantes que ejecutan LLMs locales'
        },
        about: [
          { '@type': 'Thing', name: 'VRAM' },
          { '@type': 'Thing', name: 'Memoria GPU' },
          { '@type': 'Thing', name: 'Modelos Llama' },
          { '@type': 'Thing', name: 'Cuantización' }
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways']
        },
        url: 'https://www.promptquorum.com/es/local-llms/vram-calculator-local-llm?lang=es',
        inLanguage: 'es'
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'es',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿La fórmula funciona para todos los tipos de modelos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. La fórmula (Miles de millones del modelo × Bits de cuantización) ÷ 8 se aplica a todos los modelos basados en Transformer (Llama, Qwen, Mistral, Claude, etc.). Las arquitecturas no Transformer (RNN, etc.) son poco frecuentes y pueden requerir ajustes.'
            }
          },
          {
            '@type': 'Question',
            name: '¿Qué cuantización debo usar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Para la mayoría de los casos: Q5 ofrece el mejor equilibrio (95 % de calidad, 68 % de reducción de tamaño). Para GPU de consumo: Q4 es el estándar (90–95 % de calidad, 75 % de reducción). Para producción: Q8 si la VRAM lo permite (99 % de calidad). Evita Q3 y niveles inferiores salvo que no tengas otra opción.'
            }
          },
          {
            '@type': 'Question',
            name: '¿Cuánta RAM del sistema necesito?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Mínimo 16 GB para la descarga (offloading). Si usas descarga de VRAM (desbordamiento a CPU), la RAM del sistema actúa como respaldo. Para procesamiento por lotes, añade 8–16 GB de RAM del sistema más allá de los requisitos de descarga del modelo. Para chat de un solo usuario, 16 GB son suficientes.'
            }
          },
          {
            '@type': 'Question',
            name: '¿El tamaño del lote afecta al cálculo de VRAM?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. La fórmula calcula la VRAM para una sola solicitud. El tamaño del lote añade VRAM de forma lineal: cada solicitud simultánea agrega entre 500 MB y 2 GB según la longitud del contexto. Con batch=4, añade entre 2 y 8 GB a la cantidad calculada.'
            }
          },
          {
            '@type': 'Question',
            name: '¿Puedo ejecutar un modelo de 70B en una GPU de 12 GB?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Solo con cuantización extrema (Q2, ~70 % de pérdida de calidad) y descarga a CPU (muy lento, 1–3 tokens/s). No es práctico. Mejor opción: usa un modelo de 13B en Q4 (misma VRAM, mucho más rápido y mejor calidad).'
            }
          },
          {
            '@type': 'Question',
            name: '¿Qué pasa si el uso real de VRAM es menor que el calculado?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La fórmula es conservadora e incluye sobrecarga. Un uso real menor significa más margen para procesamiento por lotes, contextos más largos o margen de seguridad. Usa nvidia-smi para medir el uso real y luego benchmarkea tu modelo para confirmar el rendimiento.'
            }
          },
          {
            '@type': 'Question',
            name: '¿Debo comprar una GPU exactamente al tamaño de VRAM calculado?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Compra siempre un 25 % más de VRAM del calculado. Si calculas 18 GB, compra una GPU de 24 GB. Este margen de seguridad contempla el crecimiento del contexto, el procesamiento por lotes y los procesos del sistema. Las compras ajustadas al límite no dejan margen y causan errores de memoria insuficiente.'
            }
          },
          {
            '@type': 'Question',
            name: '¿Cuál es la mejor GPU para modelos de 13B en 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTX 4070 Ti (12 GB) para chat de un solo usuario en Q4–Q5. RTX 4080 (16 GB) si quieres calidad Q8 o procesamiento por lotes. M5 Max (36 GB) si usas Mac. Las tres ejecutan cómodamente modelos Llama 3.3, Qwen2.5 y Mistral 3.1 de 13B.'
            }
          },
          {
            '@type': 'Question',
            name: '¿Puedo ejecutar un modelo de 70B en una RTX 4090?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Solo con cuantización Q4 (35 GB) + descarga a CPU (lento, 3–5 tok/s), lo que no es práctico. Mejor enfoque: usa un modelo de 32B en Q5 (20 GB) en la RTX 4090 para respuestas rápidas y de calidad. O actualiza a la RTX 5090 (32 GB) para ejecutar 70B en Q4 sin descarga.'
            }
          }
        ]
      },
      softwareApplicationSchema: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Calculadora de VRAM para LLMs locales',
        description: 'Calculadora interactiva de VRAM para LLMs locales. Calcula los requisitos exactos de GPU para cualquier combinación de tamaño de modelo (1B–405B), cuantización (FP16, Q8, Q5, Q4, Q3, Q2), longitud de contexto (2K–128K tokens) y tamaño de lote (1–8). Incluye verificación de compatibilidad GPU en tiempo real para RTX 5070/5080/5090 y M5 Max.',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Web',
        url: 'https://www.promptquorum.com/es/local-llms/vram-calculator-local-llm?lang=es',
        inLanguage: 'es',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        creator: {
          '@type': 'Person',
          name: 'Hans Kuepper'
        }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Cómo calcular los requisitos de VRAM para LLMs locales',
        description: 'Calcula exactamente la VRAM necesaria para cualquier modelo LLM local usando la fórmula: (Miles de millones del modelo × Bits de cuantización) ÷ 8. Incluye contexto, lote y sobrecarga del sistema.',
        inLanguage: 'es',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Identifica el tamaño de tu modelo',
            text: 'Determina el número de parámetros en miles de millones (p. ej., 7B = 7000 millones de parámetros, 13B = 13 000 millones). Modelos comunes: Llama 3.2 (7B, 13B), Qwen2.5 (7B, 14B, 32B, 72B), Mistral 3.1 (7B, 32B), Claude (varía).'
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Elige el nivel de cuantización',
            text: 'Selecciona los bits de cuantización: FP16 (100 % de calidad, más grande), Q8 (99 %), Q5 (95 %, equilibrio recomendado), Q4 (90–95 %, predeterminado para consumo), Q3 (80–85 %, compresión extrema), Q2 (70 %, dispositivos edge).'
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Aplica la fórmula',
            text: 'Calcula: VRAM (GB) = (Tamaño del modelo en miles de millones × Bits de cuantización) ÷ 8. Ejemplo: modelo de 13B en Q4 = (13 × 4) ÷ 8 = 6,5 GB de peso base del modelo.'
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Cuenta la sobrecarga',
            text: 'Añade sobrecarga por contexto (1–3 GB para 4k tokens), procesamiento por lotes (×tamaño del lote) y sistema (1–2 GB). Total = base + sobrecarga.'
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Aplica un margen de seguridad del 25 %',
            text: 'Multiplica el total por 1,25 para obtener la VRAM recomendada. Ejemplo: 10 GB calculados = compra una GPU de 12–16 GB. Esto contempla la variación en tiempo de ejecución y el margen de seguridad.'
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Verifica la compatibilidad con GPU',
            text: 'Compara tu VRAM recomendada con las GPU disponibles. RTX 5090 (32 GB), RTX 5080 (16 GB), RTX 5070 Ti (16 GB), RTX 5070 (12 GB), M5 Max (48 GB). Usa la calculadora interactiva para obtener coincidencias en tiempo real.'
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Calculadora de VRAM para LLMs locales',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Calcula la VRAM base', 'description': 'Usa la fórmula: (Miles de millones de parámetros × Bits de cuantización) ÷ 8. Q4 = 4 bits, Q8 = 8 bits.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Añade sobrecarga de contexto y lote', 'description': 'Contexto (4K tokens): +2–3 GB. Lote: +(lote-1) × 1–2 GB por solicitud.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Aplica un margen de seguridad del 25 %', 'description': 'Multiplica el total por 1,25. Ejemplo: 10 GB calculados → compra GPU de 12–16 GB.' },
        ]
      },
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'Datos rápidos', anchor: '#quick-facts' },
        { label: 'En una frase', anchor: '#in-one-sentence' },
        { label: 'En términos simples', anchor: '#in-plain-terms' },
        { label: 'Fórmula VRAM', anchor: '#vram-formula' },
        { label: 'Calculadora interactiva', anchor: '#interactive-calculator' },
        { label: 'Niveles de cuantización', anchor: '#quantization-levels' },
        { label: 'Tabla de referencia rápida', anchor: '#quick-reference' },
        { label: 'Ejemplos del mundo real', anchor: '#real-world-examples' },
        { label: '¿Qué GPU encaja con tu modelo?', anchor: '#hardware-fit' },
        { label: 'Sobrecarga oculta de VRAM', anchor: '#hidden-overhead' },
        { label: 'Precisión y márgenes', anchor: '#accuracy' },
        { label: 'Errores comunes', anchor: '#common-mistakes' },
        { label: 'Implementación regional', anchor: '#regional-context' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Lecturas relacionadas', anchor: '#related-reading' },
      ],
      gammaEmbedUrl: '/presentations/vram-calculator-local-llm-static.html',
      gammaDescription: 'La presentación a continuación cubre: fórmula VRAM (Miles de millones del modelo × Bits de cuantización) ÷ 8, niveles de cuantización Q2–FP16 con compromisos de calidad, tabla de referencia rápida (modelos 3B–70B), escenarios GPU del mundo real (RTX 4090, 4080, M5 Max) y cumplimiento regional (GDPR de la UE, APPI de Japón, Ley de Seguridad de Datos de China). Descarga el PDF como tarjeta de referencia de la calculadora de VRAM.',
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'VRAM = (Tamaño del modelo × Bits de cuantización) ÷ 8',
            'FP16 = 16 bits, Q8 = 8, Q5 = 5, Q4 = 4 bits',
            'Ejemplo: modelo de 13B en Q4 = (13 × 4) ÷ 8 = 6,5 GB',
            'Añade siempre un 25 % de margen para contexto, sobrecarga del sistema y seguridad',
            'A partir de abril de 2026, esta fórmula es precisa dentro de ±10 %',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: 'Datos rápidos: requisitos de VRAM por GPU',
          items: [
            '**RTX 4090 (24 GB):** Llama 3.1 7B en Q4 (3,5 GB), 13B en Q5 (8,1 GB), 70B en Q4 con descarga',
            '**RTX 4080 (16 GB):** Llama 3.1 7B en Q4 (3,5 GB), 13B en Q5 (8,1 GB), 32B en Q4 (16 GB)',
            '**RTX 4070 Ti (12 GB):** Llama 3.1 7B en Q4 (3,5 GB), 13B en Q5 (8,1 GB con margen ajustado)',
            '**M5 Max Mac (36 GB unificados):** Llama 3.1 13B en FP16 (26 GB), 70B no es posible sin cuantización extrema',
            '**Regla general:** Siempre presupuesta un 25–40 % adicional de VRAM para contexto, procesamiento por lotes y sobrecarga del sistema más allá del resultado de la fórmula',
          ],
        },
        inOneSentence: {
          id: 'in-one-sentence',
          title: 'En una frase',
          content: 'La VRAM necesaria (GB) es igual a los parámetros del modelo en miles de millones multiplicados por los bits de cuantización (16 para FP16, 8 para Q8, 4 para Q4, etc.), divididos entre 8.',
        },
        inPlainTerms: {
          id: 'in-plain-terms',
          title: 'En términos simples',
          content: 'Imagina la VRAM como el espacio de una estantería. Los libros más grandes (modelos con más parámetros como 70B) necesitan más espacio. Los libros más pequeños (cuantización Q4) ocupan menos espacio que los grandes (FP16). La fórmula te indica exactamente cuántas "estanterías" (GB) necesitas. Deja siempre espacio extra vacío para conversaciones, múltiples solicitudes simultáneas y el software del sistema.',
        },
        formula: {
          id: 'vram-formula',
          title: '¿Cuál es la fórmula de VRAM?',
          image: '/images/vram-calculator-local-llm-formula-es.svg',
          imageCaption: 'Fórmula VRAM con 3 ejemplos de cálculo: modelo de 7B en Q4 = 3,5 GB, 13B en Q5 = 8,1 GB, 70B en Q8 = 70 GB. Añade siempre un 25–40 % de margen para contexto, procesamiento por lotes y sobrecarga del sistema.',
          content: [
            'La fórmula para el requisito de VRAM es engañosamente sencilla:',
            '💡 **Consejo profesional:** Esta fórmula calcula solo los pesos del modelo. El uso real de VRAM es entre un 25 y un 40 % mayor debido al contexto, el procesamiento por lotes y la sobrecarga del sistema. Añade siempre un margen de seguridad.',
          ],
          codeBlock: 'VRAM (GB) = (Model Size in Billions × Quantization Bits) ÷ 8\n\nExample:\n- 7B model at 4-bit quantization\n- (7 × 4) ÷ 8 = 3.5 GB\n\n- 13B model at 5-bit quantization\n- (13 × 5) ÷ 8 = 8.125 GB\n\n- 70B model at 8-bit quantization\n- (70 × 8) ÷ 8 = 70 GB',
          codeLanguage: 'bash',
        },
        calculator: {
          id: 'interactive-calculator',
          title: 'Calculadora interactiva de VRAM',
          content: 'Usa esta calculadora para calcular los requisitos exactos de VRAM para cualquier combinación de modelo, cuantización, contexto y tamaño de lote. Selecciona tu configuración y comprueba qué GPU son compatibles.',
          component: 'VramCalculator',
        },
        quantization: {
          id: 'quantization-levels',
          title: '¿Qué significan los niveles de cuantización?',
          image: '/images/vram-calculator-local-llm-quant-levels-es.svg',
          imageCaption: 'Comparación de niveles de cuantización: FP16 (100 % de calidad), Q8 (99 %), Q5 (95 %, recomendado), Q4 (90–95 %), Q3 (80–85 %), Q2 (70 %). Q5 reduce un modelo de 7B de 14 GB a 4,4 GB con solo un 5 % de pérdida de calidad.',
          content: '🔍 **Idea clave:** La cuantización intercambia tamaño de archivo por calidad. Q5 es el punto óptimo (95 % de calidad, 68 % más pequeño). Q4 es aceptable para la mayoría de los usuarios. Q3 y niveles inferiores son solo para dispositivos edge o cuando la VRAM es críticamente limitada.',
          rows: [
            { 'Cuantización': 'FP16 (16 bits)', 'Reducción de tamaño': 'Ninguna (base)', 'Calidad': '100 % (perfecta)', 'Velocidad': 'Base', 'Caso de uso': 'Investigación, fine-tuning' },
            { 'Cuantización': 'Q8 (8 bits)', 'Reducción de tamaño': '50 %', 'Calidad': '99 % (imperceptible)', 'Velocidad': 'Base', 'Caso de uso': 'Producción, servidores locales' },
            { 'Cuantización': 'Q6 (6 bits)', 'Reducción de tamaño': '62,5 %', 'Calidad': '98 % (negligible)', 'Velocidad': 'Base', 'Caso de uso': 'Uso equilibrado' },
            { 'Cuantización': 'Q5 (5 bits)', 'Reducción de tamaño': '68,75 %', 'Calidad': '95 % (pérdida menor)', 'Velocidad': 'Base', 'Caso de uso': 'Buena compresión, consumo' },
            { 'Cuantización': 'Q4 (4 bits)', 'Reducción de tamaño': '75 %', 'Calidad': '90–95 % (aceptable)', 'Velocidad': 'Base', 'Caso de uso': 'Compresión máxima' },
            { 'Cuantización': 'Q3 (3 bits)', 'Reducción de tamaño': '81 %', 'Calidad': '80–85 % (pérdida notable)', 'Velocidad': 'Más rápido', 'Caso de uso': 'Compresión extrema, CPU' },
            { 'Cuantización': 'Q2 (2 bits)', 'Reducción de tamaño': '87,5 %', 'Calidad': '70 % (pérdida visible)', 'Velocidad': 'El más rápido', 'Caso de uso': 'Modelos pequeños, dispositivos edge' },
          ],
          columns: ['Cuantización', 'Reducción de tamaño', 'Calidad', 'Velocidad', 'Caso de uso'],
        },
        quickRef: {
          id: 'quick-reference',
          title: 'Tabla de referencia rápida: VRAM por modelo y cuantización',
          image: '/images/vram-calculator-local-llm-quick-ref-es.svg',
          imageCaption: 'Matriz de referencia rápida de VRAM: modelos de 3B a 70B en FP16, Q8, Q5 y Q4. Verde = cabe en GPU de 12 GB. Ámbar = requiere 16–24 GB. Rojo = requiere 40+ GB o múltiples GPU.',
          rows: [
            { 'Modelo': '3B', 'FP16': '6 GB', 'Q8': '3 GB', 'Q5': '1,9 GB', 'Q4': '1,5 GB' },
            { 'Modelo': '7B', 'FP16': '14 GB', 'Q8': '7 GB', 'Q5': '4,4 GB', 'Q4': '3,5 GB' },
            { 'Modelo': '13B', 'FP16': '26 GB', 'Q8': '13 GB', 'Q5': '8,1 GB', 'Q4': '6,5 GB' },
            { 'Modelo': '32B', 'FP16': '64 GB', 'Q8': '32 GB', 'Q5': '20 GB', 'Q4': '16 GB' },
            { 'Modelo': '70B', 'FP16': '140 GB', 'Q8': '70 GB', 'Q5': '43,75 GB', 'Q4': '35 GB' },
          ],
          columns: ['Modelo', 'FP16', 'Q8', 'Q5', 'Q4'],
        },
        realWorld: {
          id: 'real-world-examples',
          title: 'Ejemplos del mundo real',
          image: '/images/vram-calculator-local-llm-gpu-scenarios-es.svg',
          imageCaption: 'Escenarios GPU del mundo real: RTX 4090 (24 GB), RTX 4080 (16 GB), RTX 4070 Ti (12 GB), M5 Max Mac (36 GB) y RTX 3060 (12 GB): qué modelos Llama 3.1 puede ejecutar cada uno a varios niveles de cuantización.',
          content: [
            'Cálculos prácticos de VRAM para escenarios habituales:',
            '⚠️ **Advertencia:** Estos cálculos son solo para los pesos del modelo. Añade un 25–40 % para contexto, procesamiento por lotes y sobrecarga del sistema. Ejemplo: 13B Q5 = 8,1 GB de modelo + 2–3 GB de sobrecarga = 10–11 GB reales.',
          ],
          items: [
            '**RTX 4070 Ti (12 GB)**: Llama 3.1 7B en Q4 = 3,5 GB ✓ (mucho margen). Llama 3.1 13B en Q5 = 8,1 GB ✓ (ajustado, pero funciona sin contexto ni procesamiento por lotes).',
            '**RTX 4090 (24 GB)**: Llama 3.1 70B en Q5 = 43,75 GB ✗ (demasiado grande). Llama 3.1 70B en Q4 = 35 GB ✗ (aún demasiado grande). Llama 3.1 70B en Q4 con descarga = funciona (lento, 3–5 tok/s).',
            '**M5 Max Mac (36 GB)**: Llama 3.1 13B en FP16 = 26 GB ✓ (funciona). Llama 3.1 70B = imposible (incluso en Q2, ~70 % de pérdida de calidad).',
          ],
        },
        overhead: {
          id: 'hidden-overhead',
          title: '¿Qué sobrecarga oculta de VRAM debes contemplar?',
          image: '/images/vram-calculator-local-llm-overhead-es.svg',
          imageCaption: 'Desglose de la sobrecarga oculta de VRAM: ventana de contexto (2–3 GB para 4k tokens), procesamiento por lotes (×4 para batch=4), sobrecarga del sistema (500 MB–1 GB) y margen de seguridad total del 25–40 %.',
          content: [
            '**La fórmula calcula solo los pesos del modelo.** El uso real de VRAM será mayor por varios factores. Presupuesta un 25–40 % adicional sobre la cantidad calculada.',
            'La ventana de contexto (caché clave-valor) almacena el historial de conversación durante la inferencia. Un contexto de 4k tokens usa aproximadamente 2–3 GB para un modelo de 7B.',
            '📌 **Punto clave:** El procesamiento por lotes aumenta el uso de VRAM de forma lineal. Cada solicitud simultánea adicional (al procesar varias solicitudes a la vez) consume entre 500 MB y 2 GB de memoria extra. Con batch=4, multiplica la VRAM de solicitud única por 4 y añade la sobrecarga.',
            'La sobrecarga del sistema operativo y del framework de inferencia (Ollama, vLLM, llama.cpp) reserva entre 500 MB y 1 GB. Mantén siempre un margen de seguridad al elegir una GPU.',
          ],
        },
        hardwareGuide: {
          id: 'hardware-fit',
          title: '¿Qué LLM local encaja con tu GPU? Guía 2026',
          content: [
            'Usa la calculadora interactiva de arriba para encontrar tu ajuste exacto. A continuación se muestran escenarios habituales de GPU y modelos recomendados.',
          ],
          items: [
            '**RTX 3060 (12 GB):** Mejor modelo: Qwen2.5 7B Q5 (4,4 GB) ✓. Alternativa: Llama 3.2 8B Q4 (4 GB) ✓. No posible: modelos de 32B+.',
            '**RTX 4070 (12 GB):** Mejor modelo: Qwen2.5 13B Q4 (6,5 GB) ✓. Con margen: Llama 3.2 8B Q5 (5 GB) ✓. No posible: modelos de 32B.',
            '**RTX 4070 Ti (12 GB):** Mejor modelo: Qwen2.5 13B Q5 (8,1 GB) ✓. Ajustado: Llama 3.3 13B Q4 (6,5 GB) ✓. No ideal: procesamiento por lotes.',
            '**RTX 4080 (16 GB):** Mejor modelo: Qwen2.5 32B Q4 (16 GB) ✓ ajustado. Cómodo: Mistral 3.1 24B Q5 (15 GB) ✓. Recomendado: Llama 3.3 13B Q8 (13 GB) ✓.',
            '**RTX 4090 (24 GB):** Mejor modelo: Qwen2.5 32B Q5 (20 GB) ✓. Con descarga: Llama 3.3 70B Q4 (35 GB – necesita descarga). Cómodo: cualquier 32B en Q5/Q8.',
            '**RTX 5090 (32 GB, si disponible):** Mejor modelo: Llama 3.3 70B Q4 (35 GB – ajustado). Mejor: Qwen2.5 72B Q3 (27 GB) ✓. Cómodo: 70B en Q5+ con procesamiento por lotes.',
          ],
        },
        accuracy: {
          id: 'accuracy',
          title: '¿Qué tan precisa es la fórmula?',
          image: '/images/vram-calculator-local-llm-accuracy-es.svg',
          imageCaption: 'Precisión de la fórmula VRAM ±10 %: variación causada por el formato de cuantización (GGUF vs GPTQ vs AWQ), arquitectura del modelo (Transformer vs MoE) y motor de inferencia (vLLM vs llama.cpp vs Ollama).',
          content: [
            '**La fórmula es precisa dentro de ±10 % para la mayoría de los casos.** El uso real de VRAM varía según la implementación, la arquitectura del modelo y las optimizaciones del motor de inferencia.',
            'Las fuentes de variación incluyen: distintos formatos de cuantización (GGUF vs safetensors vs AWQ), arquitectura del modelo (Transformer vs no-Transformer) y optimizaciones específicas del motor de inferencia (vLLM, llama.cpp, Ollama).',
            'A partir de abril de 2026, trata la fórmula como una estimación conservadora. Añade siempre un margen del 25 % al comprar GPU para contemplar la sobrecarga de contexto, el procesamiento por lotes y los procesos del sistema.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Errores comunes en el cálculo de VRAM',
          image: '/images/vram-calculator-local-llm-mistakes-es.svg',
          imageCaption: '4 errores comunes de VRAM: olvidar la sobrecarga de contexto (añade 1,5–3 GB), confundir 70B parámetros con 70 GB de VRAM, ignorar 1–2 GB de sobrecarga del sistema y comprar una GPU exactamente al tamaño calculado sin margen del 25 %.',
          items: [
            '**Olvidar la sobrecarga de contexto.** Un modelo de 7B en Q4 ocupa 3,5 GB, pero con contexto de 4k necesita 5–6 GB en total.',
            '**Usar el tamaño del modelo de HuggingFace sin considerar la cuantización.** 70B significa 70 000 millones de parámetros, no 70 GB de VRAM.',
            '**No contemplar la sobrecarga del sistema.** Los modelos nunca obtienen toda la VRAM de la GPU. Reserva 1–2 GB para el sistema operativo y el motor de inferencia.',
            '**Comprar GPU exactamente al tamaño calculado.** Compra siempre un 25 % más. Si calculas 18 GB, adquiere una GPU de 24 GB.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Consideraciones de implementación regional',
          content: [
            '**Unión Europea (GDPR):** La inferencia local (on-premises) garantiza el cumplimiento de la residencia de datos bajo el GDPR. Ejecutar modelos en tu propia GPU mantiene los datos de los usuarios dentro del país. Esta calculadora de VRAM te ayuda a dimensionar el hardware para implementaciones que priorizan la privacidad.',
            '**España y América Latina (regulaciones locales de datos):** Las regulaciones de protección de datos en España y Latinoamérica exigen un tratamiento cuidadoso de los datos personales. La inferencia local de LLMs reduce la transferencia de datos a servidores externos. Usa esta calculadora para dimensionar sistemas para implementaciones empresariales en entornos hispanohablantes.',
            '**Japón (APPI):** La Ley de Protección de Información Personal (APPI) requiere un manejo cuidadoso de los datos. La inferencia de LLM en dispositivo reduce la transferencia y el procesamiento de datos fuera de Japón. Usa esta calculadora para dimensionar sistemas para implementaciones empresariales japonesas.',
            '**China (Ley de Seguridad de Datos):** La Ley de Seguridad de Datos de China de 2021 exige la residencia de datos dentro de las fronteras chinas. La inferencia local de LLM en servidores nacionales (Alibaba Cloud, Tencent Cloud) cumple la normativa. Esta fórmula se aplica al dimensionamiento de esas implementaciones con modelos optimizados para China como Qwen2.5.',
            'En todas las regiones, la inferencia local ofrece garantías de privacidad de datos más sólidas que las API en la nube. Esta calculadora de VRAM es esencial para diseñar sistemas de IA conformes y que preserven la privacidad.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'FAQ: VRAM y requisitos de GPU',
          faqs: [
            { q: '¿La fórmula funciona para todos los tipos de modelos?', a: 'Sí. La fórmula (Miles de millones del modelo × Bits de cuantización) ÷ 8 se aplica a todos los modelos basados en Transformer (Llama, Qwen, Mistral, Claude, etc.). Las arquitecturas no Transformer (RNN, etc.) son poco frecuentes y pueden requerir ajustes.' },
            { q: '¿Qué cuantización debo usar?', a: 'Para la mayoría de los casos: Q5 ofrece el mejor equilibrio (95 % de calidad, 68 % de reducción de tamaño). Para GPU de consumo: Q4 es el estándar (90–95 % de calidad, 75 % de reducción). Para producción: Q8 si la VRAM lo permite (99 % de calidad). Evita Q3 y niveles inferiores salvo que no tengas otra opción.' },
            { q: '¿Cuánta RAM del sistema necesito?', a: 'Mínimo 16 GB para la descarga (offloading). Si usas descarga de VRAM (desbordamiento a CPU), la RAM del sistema actúa como respaldo. Para procesamiento por lotes, añade 8–16 GB de RAM del sistema más allá de los requisitos de descarga del modelo. Para chat de un solo usuario, 16 GB son suficientes.' },
            { q: '¿El tamaño del lote afecta al cálculo de VRAM?', a: 'Sí. La fórmula calcula la VRAM para una sola solicitud. El tamaño del lote añade VRAM de forma lineal: cada solicitud simultánea agrega entre 500 MB y 2 GB según la longitud del contexto. Con batch=4, añade entre 2 y 8 GB a la cantidad calculada.' },
            { q: '¿Puedo ejecutar un modelo de 70B en una GPU de 12 GB?', a: 'Solo con cuantización extrema (Q2, ~70 % de pérdida de calidad) y descarga a CPU (muy lento, 1–3 tokens/s). No es práctico. Mejor opción: usa un modelo de 13B en Q4 (misma VRAM, mucho más rápido y mejor calidad).' },
            { q: '¿Qué pasa si el uso real de VRAM es menor que el calculado?', a: 'La fórmula es conservadora e incluye sobrecarga. Un uso real menor significa más margen para procesamiento por lotes, contextos más largos o margen de seguridad. Usa nvidia-smi para medir el uso real y luego benchmarkea tu modelo para confirmar el rendimiento.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Guía de hardware para LLMs locales 2026](/es/local-llms/local-llm-hardware-guide-2026) -- Recomendaciones completas de GPU y CPU según tu presupuesto.',
            '[Mejores GPU para LLMs locales](/es/local-llms/best-gpus-for-local-llms) -- Benchmarks y análisis de costes de RTX 4090, 4080, 4070 Ti.',
            '[Ejecutar modelos de 70B con 24 GB de VRAM](/es/local-llms/run-70b-models-24gb-vram) -- Técnicas de cuantización y descarga para modelos grandes.',
            '[Cuantización de LLM explicada](/es/local-llms/llm-quantization-explained) -- Análisis en profundidad de los formatos Q4, Q5, Q8 y sus compromisos de calidad.',
            '[Consumo eléctrico de LLMs locales](/es/local-llms/local-llm-power-consumption) -- Análisis de fuente de alimentación, refrigeración y coste eléctrico.',
            '[LLMs locales con múltiples GPU](/es/local-llms/multi-gpu-local-llms) -- División de capas e inferencia distribuida para modelos de 70B+.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '[Especificación GGUF](https://github.com/ggerganov/ggml/blob/master/docs/gguf.md) -- Documentación de ggerganov/ggml sobre el formato de archivo cuantizado.',
            '[Documentación de cuantización de Transformers](https://huggingface.co/docs/transformers/quantization) -- Guía oficial de Hugging Face sobre métodos de cuantización.',
            '[Documentación de Ollama](https://ollama.ai) -- Guías oficiales de Ollama para la gestión de modelos.',
            '[Guía de rendimiento de vLLM](https://docs.vllm.ai) -- Documentación de optimización del framework vLLM.',
            'Tu VRAM limita el tamaño del modelo, pero el tamaño del modelo no es el único límite para la calidad de salida. Las ventanas de contexto más grandes permiten mejores respuestas: [ventanas de contexto explicadas](https://www.promptquorum.com/prompt-engineering/context-windows-explained-why-ai-forgets) cubre cómo trabajar dentro de las restricciones.',
          ],
        },
      },
    },
    de: {
      theme: 'Hardware & Leistung',
      title: 'VRAM-Rechner 2026: GPU-Anforderungen für 7B/13B/70B LLMs (Q4, Q5, Q8)',
      seoTitle: 'VRAM-Rechner 2026: GPU-Anforderungen für 7B/13B/70B LLMs',
      intro: 'Interaktiver VRAM-Rechner für lokale LLMs. Geben Sie Modellgröße, Quantisierung, Kontextlänge und Batch-Größe ein, um den exakten GPU-VRAM-Bedarf zu berechnen. Funktioniert für 1B–405B-Modelle bei FP16, Q8, Q5, Q4-Quantisierung. Aktualisiert April 2026 mit RTX 4090, 4080, 3060-Kompatibilität und Overhead-Berechnungen.',
      metaDescription: 'Interaktiver VRAM-Rechner: Berechnen Sie exakte GPU-Anforderungen für 7B (3,5 GB Q4), 13B (6,5 GB Q4), 70B (35 GB Q4) LLM-Modelle. Prüfen Sie RTX 4090, 4080, 4070 Ti Kompatibilität. Q4/Q5/Q8-Quantisierung. Kontext-, Batch- und Systemoverhead enthalten.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**Diese Anleitung erklärt, wie Sie exakte VRAM-Anforderungen für jede Modell- und Hardware-Kombination berechnen. Die Formel ist einfach: (Modellgröße GB × Quantisierungs-Bits) ÷ 8 = VRAM erforderlich.**',
      audience: 'Anfänger, die ihr erstes lokales LLM auf Consumer-Hardware ausführen',
      readTime: '10 Min. Lesezeit',
      educationalLevel: 'Anfänger bis Mittelstufe',
      primaryTerm: 'VRAM-Rechner',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'VRAM-Rechner für lokale LLMs: Berechnen Sie exakte GPU-Anforderungen',
        description: 'VRAM-Rechner für lokale LLMs 2026: Verwenden Sie die Formel VRAM = (Modell-Milliarden × Quantisierungs-Bits) ÷ 8. RTX 4090, 4080, M5 Max Beispiele mit Overhead, Batching und Accuracy-Daten.',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
        datePublished: '2026-04-04',
        dateModified: '2026-04-19',
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Anfänger',
        audience: { '@type': 'Audience', audienceType: 'Entwickler, Anfänger, die lokale LLMs ausführen' },
        about: [
          { '@type': 'Thing', name: 'VRAM' },
          { '@type': 'Thing', name: 'GPU-Speicher' },
          { '@type': 'Thing', name: 'Llama-Modelle' },
          { '@type': 'Thing', name: 'Quantisierung' }
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        url: 'https://www.promptquorum.com/de/local-llms/vram-calculator-local-llm',
        inLanguage: 'de'
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          { '@type': 'Question', name: 'Funktioniert die Formel für alle Modelltypen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Die Formel (Modell-Milliarden × Quantisierungs-Bits) ÷ 8 gilt für alle Transformer-basierten Modelle (Llama, Qwen, Mistral, Claude usw.). Nicht-Transformer-Architekturen (RNNs usw.) sind selten und können Anpassungen erfordern.' } },
          { '@type': 'Question', name: 'Welche Quantisierung sollte ich verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Für die meisten Anwendungsfälle: Q5 bietet die beste Balance (95 % Qualität, 68 % Größenreduktion). Für Consumer-GPUs: Q4 ist Standard (90–95 % Qualität, 75 % Reduktion). Für Produktion: Q8, wenn VRAM verfügbar (99 % Qualität). Vermeiden Sie Q3 und darunter, es sei denn, Sie haben keine andere Wahl.' } },
          { '@type': 'Question', name: 'Wie viel System-RAM benötige ich?', acceptedAnswer: { '@type': 'Answer', text: 'Minimum 16 GB für Offloading. Wenn Sie VRAM-Offloading verwenden (CPU-Spillover), wird System-RAM zum Fallback. Für Batch-Verarbeitung addieren Sie 8–16 GB System-RAM zu den Modell-Offload-Anforderungen. Für Single-User-Chat genügen 16 GB.' } },
          { '@type': 'Question', name: 'Beeinflußt die Batch-Größe die VRAM-Berechnung?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Die Formel berechnet Single-Request-VRAM. Batch-Größe addiert zusätzliches VRAM linear: jede gleichzeitige Anfrage addiert ~500 MB–2 GB je nach Kontextlänge. Wenn Sie Batch=4 ausführen, addieren Sie 2–8 GB zur berechneten Menge.' } },
          { '@type': 'Question', name: 'Kann ich ein 70B-Modell auf einer 12 GB GPU ausführen?', acceptedAnswer: { '@type': 'Answer', text: 'Nur mit extremer Quantisierung (Q2, ~70 % Qualitätsverlust) und CPU-Offloading (sehr langsam, 1–3 Tokens/s). Nicht praktisch. Bessere Option: Verwenden Sie ein 13B-Modell bei Q4 (gleiches VRAM, viel schneller und bessere Qualität).' } },
          { '@type': 'Question', name: 'Was ist, wenn meine tatsächliche VRAM-Nutzung niedriger als berechnet ist?', acceptedAnswer: { '@type': 'Answer', text: 'Die Formel ist konservativ und includes Overhead. Niedrigere Nutzung bedeutet mehr Spielraum für Batch-Verarbeitung, längere Kontexte oder Sicherheitsmarge. Verwenden Sie nvidia-smi zur Messung echter Nutzung, dann benchen Sie Ihr Modell zur Leistungsbestätigung.' } },
          { '@type': 'Question', name: 'Sollte ich eine GPU genau in der berechneten VRAM-Größe kaufen?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Kaufen Sie immer 25 % mehr VRAM als berechnet. Wenn Sie 18 GB benötigen, kaufen Sie eine 24 GB GPU. Diese Sicherheitsmarge berücksichtigt Kontextwachstum, Batching und Systemprozesse. Exakte Passungen hinterlassen keinen Spielraum und verursachen Out-of-Memory-Fehler.' } },
          { '@type': 'Question', name: 'Was ist die beste GPU für 13B-Modelle im Jahr 2026?', acceptedAnswer: { '@type': 'Answer', text: 'RTX 4070 Ti (12 GB) für Single-User-Chat bei Q4–Q5. RTX 4080 (16 GB) wenn Sie Q8-Qualität oder Batch-Verarbeitung möchten. M5 Max (36 GB) auf Mac. Alle drei führen Llama 3.3, Qwen2.5 und Mistral 3.1 13B-Modelle problemlos aus.' } },
          { '@type': 'Question', name: 'Kann ich ein 70B-Modell auf RTX 4090 ausführen?', acceptedAnswer: { '@type': 'Answer', text: 'Nur mit Q4-Quantisierung (35 GB) + CPU-Offloading (langsam, 3–5 Tokens/s), was unpraktisch ist. Besserer Ansatz: Verwenden Sie ein 32B-Modell bei Q5 (20 GB) auf RTX 4090 für schnelle, hochwertige Antworten. Oder upgraden Sie auf RTX 5090 (32 GB) für 70B bei Q4 ohne Offloading.' } },
          { '@type': 'Question', name: 'Muss ich bei der Verwendung lokaler LLMs die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Die DSGVO Artikel 28 erfordert Datenverarbeitungsverträge. Lokale Inferenz auf eigenem Hardware erfüllt Datenschutz-Anforderungen: Daten bleiben on-premises, keine Übertragung an Cloud-APIs. BSI-Grundschutz-Kataloge für Bundestechnologiestandards: lokale LLMs erfüllen Anforderungen für sensible Daten in Behörden und Finanzinstitutionen. Diese VRAM-Berechnungen unterstützen DSGVO-konforme Deployments.' } },
          { '@type': 'Question', name: 'Ist der Einsatz lokaler LLMs für den deutschen Mittelstand geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, sehr geeignet. Kleine und mittlere Unternehmen (Mittelstand) profitieren: Kostenenkontrolle (keine wiederkehrenden API-Kosten), Datensicherheit (keine externen Abhängigkeiten), Compliance mit BSI IT-Sicherheitsstandards. Mit diesem VRAM-Rechner können Mittelstand-Unternehmen exakt kalkulieren, welche GPU für ihre Anforderungen passt—oft genügt eine RTX 4070 Ti (€600–800) für 13B-Modelle. Besser als monatliche Cloud-Abos für APIs.' } }
        ]
      },
      softwareApplicationSchema: { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'VRAM-Rechner für lokale LLMs', description: 'Interaktiver VRAM-Rechner für lokale LLMs. Berechnen Sie exakte GPU-VRAM-Anforderungen für jede Kombination von Modellgröße (1B–405B), Quantisierung (FP16, Q8, Q5, Q4, Q3, Q2), Kontextlänge (2K–128K Tokens) und Batch-Größe (1–8). Enthält Echtzeit-GPU-Kompatibilitätsprüfung für RTX 3060/4070/4080/4090 und M5 Max.', applicationCategory: 'UtilityApplication', operatingSystem: 'Web', url: 'https://www.promptquorum.com/de/local-llms/vram-calculator-local-llm', inLanguage: 'de', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, creator: { '@type': 'Person', name: 'Hans Kuepper' } },
      howToSchema: { '@context': 'https://schema.org', '@type': 'HowTo', name: 'So berechnen Sie VRAM-Anforderungen für lokale LLMs', description: 'Berechnen Sie exakten VRAM-Bedarf für lokale LLM-Modelle mit der Formel: (Modell-Milliarden × Quantisierungs-Bits) ÷ 8. Enthält Kontext-, Batch- und Systemoverhead.', inLanguage: 'de', step: [{ '@type': 'HowToStep', position: 1, name: 'Bestimmen Sie Ihre Modellgröße', text: 'Bestimmen Sie die Parameterzahl in Milliarden (z. B. 7B = 7 Milliarden Parameter, 13B = 13 Milliarden). Häufige Modelle: Llama 3.2 (7B, 13B), Qwen2.5 (7B, 14B, 32B, 72B), Mistral 3.1 (7B, 32B), Claude (variiert).' }, { '@type': 'HowToStep', position: 2, name: 'Wählen Sie Quantisierungsstufe', text: 'Wählen Sie Quantisierungs-Bits: FP16 (100 % Qualität, größtes), Q8 (99 %), Q5 (95 %, empfohlene Balance), Q4 (90–95 %, Consumer-Standard), Q3 (80–85 %, extreme Kompression), Q2 (70 %, Edge-Geräte).' }, { '@type': 'HowToStep', position: 3, name: 'Wenden Sie die Formel an', text: 'Berechnen Sie: VRAM (GB) = (Modellgröße in Milliarden × Quantisierungs-Bits) ÷ 8. Beispiel: 13B-Modell bei Q4 = (13 × 4) ÷ 8 = 6,5 GB Basis-Modellgewicht.' }, { '@type': 'HowToStep', position: 4, name: 'Berücksichtigen Sie Overhead', text: 'Addieren Sie Overhead für Kontext (1–3 GB für 4K Tokens), Batch-Verarbeitung (×Batch-Größe) und System (1–2 GB). Gesamt = Basis + Overhead.' }, { '@type': 'HowToStep', position: 5, name: 'Wenden Sie 25 % Sicherheitsmarge an', text: 'Multiplizieren Sie Gesamt mit 1,25 um empfohlenes VRAM zu erhalten. Beispiel: 10 GB berechnet = kaufen Sie 12–16 GB GPU. Dies berücksichtigt Laufzeitvariationen und Spielraum.' }, { '@type': 'HowToStep', position: 6, name: 'Prüfen Sie GPU-Kompatibilität', text: 'Vergleichen Sie Ihr empfohlenes VRAM mit verfügbaren GPUs. RTX 4090 (24 GB), RTX 4080 (16 GB), RTX 4070 Ti (12 GB), RTX 3060 (12 GB), M5 Max (36 GB). Verwenden Sie den interaktiven Rechner für Echtzeit-Matching.' }] },
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Quick Facts', anchor: '#quick-facts' },
        { label: 'In einem Satz', anchor: '#in-one-sentence' },
        { label: 'In einfachen Worten', anchor: '#in-plain-terms' },
        { label: 'VRAM-Formel', anchor: '#vram-formula' },
        { label: 'Interaktiver Rechner', anchor: '#interactive-calculator' },
        { label: 'Quantisierungsstufen erklärt', anchor: '#quantization-levels' },
        { label: 'Quick-Reference-Tabelle', anchor: '#quick-reference' },
        { label: 'Praxisbeispiele', anchor: '#real-world-examples' },
        { label: 'Welche GPU passt zu Ihrem Modell?', anchor: '#hardware-fit' },
        { label: 'Versteckter VRAM-Overhead', anchor: '#hidden-overhead' },
        { label: 'Genauigkeit und Margen', anchor: '#accuracy' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Regionale Bereitstellung', anchor: '#regional-context' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Weiterführende Ressourcen', anchor: '#related-reading' },
      ],
      gammaEmbedUrl: '/presentations/vram-calculator-local-llm-static.html',
      gammaDescription: 'Das Foliendeck unten behandelt: VRAM-Formel (Modell-Milliarden × Quantisierungs-Bits) ÷ 8, Quantisierungsstufen Q2–FP16 mit Qualitäts-Trade-offs, Quick-Reference-Tabelle (3B–70B-Modelle), reale GPU-Szenarien (RTX 4090, 4080, M5 Max) und regionale Compliance (EU GDPR, Japan APPI, China Data Security Law). Laden Sie die PDF als VRAM-Rechner-Referenzkarte herunter.',
      sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['VRAM = (Modellgröße × Quantisierungs-Bits) ÷ 8', 'FP16 = 16 Bits, Q8 = 8, Q5 = 5, Q4 = 4 Bits', 'Beispiel: 13B-Modell bei Q4 = (13 × 4) ÷ 8 = 6,5 GB', 'Addieren Sie immer 25 % Puffer für Kontext, Systemoverhead und Sicherheitsmarge', 'Ab April 2026 ist diese Formel auf ±10 % genau'] }, quickFacts: { id: 'quick-facts', title: 'Quick Facts: VRAM-Anforderungen nach GPU', items: ['**RTX 4090 (24 GB):** Llama 3.1 7B bei Q4 (3,5 GB), 13B bei Q5 (8,1 GB), 70B bei Q4 mit Offloading', '**RTX 4080 (16 GB):** Llama 3.1 7B bei Q4 (3,5 GB), 13B bei Q5 (8,1 GB), 32B bei Q4 (16 GB)', '**RTX 4070 Ti (12 GB):** Llama 3.1 7B bei Q4 (3,5 GB), 13B bei Q5 (8,1 GB mit knappem Spielraum)', '**M5 Max Mac (36 GB unified):** Llama 3.1 13B bei FP16 (26 GB), 70B nicht möglich ohne extreme Quantisierung', '**Faustregel:** Budget immer 25–40 % zusätzliches VRAM für Kontext, Batching und Systemoverhead über dem Formelergebnis'] }, inOneSentence: { id: 'in-one-sentence', title: 'In einem Satz', content: 'Der erforderliche VRAM (GB) entspricht Modellparametern in Milliarden multipliziert mit Quantisierungs-Bits (16 für FP16, 8 für Q8, 4 für Q4 usw.) geteilt durch 8.' }, inPlainTerms: { id: 'in-plain-terms', title: 'In einfachen Worten', content: 'Stellen Sie sich VRAM wie Regalplatz vor. Größere Bücher (Modelle mit mehr Parametern wie 70B) benötigen mehr Regalplatz. Kleinere Bücher (Q4-Quantisierung) benötigen weniger Platz als größere (FP16). Die Formel sagt Ihnen exakt, wie viele „Regale" (GB) Sie benötigen. Lassen Sie immer extra leere Regale für Gespräche, mehrere gleichzeitige Anfragen und Systemsoftware.' }, formula: { id: 'vram-formula', title: 'Was ist die VRAM-Formel?', image: '/images/vram-calculator-local-llm-formula-de.svg', imageCaption: 'VRAM-Formel mit 3 Berechnungsbeispielen: 7B-Modell bei Q4 = 3,5 GB, 13B bei Q5 = 8,1 GB, 70B bei Q8 = 70 GB. Addieren Sie immer 25–40 % Puffer für Kontext, Batching und Systemoverhead.', content: ['Die Formel für VRAM-Anforderung ist betrügerisch einfach:', '💡 **Pro-Tipp:** Diese Formel berechnet nur Modellgewichte. Echte VRAM-Nutzung ist 25–40 % höher aufgrund von Kontext, Batching und Systemoverhead. Addieren Sie immer eine Sicherheitsmarge.'], codeBlock: 'VRAM (GB) = (Modellgröße in Milliarden × Quantisierungs-Bits) ÷ 8\n\nBeispiel:\n- 7B-Modell bei 4-Bit-Quantisierung\n- (7 × 4) ÷ 8 = 3,5 GB\n\n- 13B-Modell bei 5-Bit-Quantisierung\n- (13 × 5) ÷ 8 = 8,125 GB\n\n- 70B-Modell bei 8-Bit-Quantisierung\n- (70 × 8) ÷ 8 = 70 GB', codeLanguage: 'bash' }, calculator: { id: 'interactive-calculator', title: 'Interaktiver VRAM-Rechner', content: 'Verwenden Sie diesen Rechner, um exakte VRAM-Anforderungen für jede Kombination von Modell, Quantisierung, Kontext und Batch-Größe zu berechnen. Wählen Sie Ihre Konfiguration und sehen Sie, welche GPUs passen.', component: 'VramCalculator' }, quantization: { id: 'quantization-levels', title: 'Was bedeuten Quantisierungsstufen?', image: '/images/vram-calculator-local-llm-quant-levels-de.svg', imageCaption: 'Quantisierungsstufen-Vergleich: FP16 (100 % Qualität), Q8 (99 %), Q5 (95 %, empfohlen), Q4 (90–95 %), Q3 (80–85 %), Q2 (70 %). Q5 reduziert ein 7B-Modell von 14 GB auf 4,4 GB mit nur 5 % Qualitätsverlust.', content: '🔍 **Schlüsselinsight:** Quantisierung handelt Dateigröße gegen Qualität. Q5 ist der Sweet Spot (95 % Qualität, 68 % kleiner). Q4 ist für die meisten Benutzer akzeptabel. Q3 und darunter sind nur für Edge-Geräte oder wenn VRAM kritisch begrenzt ist.', rows: [{ 'Quantisierung': 'FP16 (16-Bit)', 'Größenreduktion': 'Keine (Basis)', 'Qualität': '100 % (perfekt)', 'Geschwindigkeit': 'Basis', 'Anwendungsfall': 'Forschung, Fine-Tuning' }, { 'Quantisierung': 'Q8 (8-Bit)', 'Größenreduktion': '50 %', 'Qualität': '99 % (unmerklich)', 'Geschwindigkeit': 'Basis', 'Anwendungsfall': 'Produktion, lokale Server' }, { 'Quantisierung': 'Q6 (6-Bit)', 'Größenreduktion': '62,5 %', 'Qualität': '98 % (vernachlässigbar)', 'Geschwindigkeit': 'Basis', 'Anwendungsfall': 'Ausgewogene Nutzung' }, { 'Quantisierung': 'Q5 (5-Bit)', 'Größenreduktion': '68,75 %', 'Qualität': '95 % (geringer Verlust)', 'Geschwindigkeit': 'Basis', 'Anwendungsfall': 'Gute Kompression, Consumer' }, { 'Quantisierung': 'Q4 (4-Bit)', 'Größenreduktion': '75 %', 'Qualität': '90–95 % (akzeptabel)', 'Geschwindigkeit': 'Basis', 'Anwendungsfall': 'Maximale Kompression' }, { 'Quantisierung': 'Q3 (3-Bit)', 'Größenreduktion': '81 %', 'Qualität': '80–85 % (merklicher Verlust)', 'Geschwindigkeit': 'Schneller', 'Anwendungsfall': 'Extreme Kompression, CPU' }, { 'Quantisierung': 'Q2 (2-Bit)', 'Größenreduktion': '87,5 %', 'Qualität': '70 % (sichtbarer Verlust)', 'Geschwindigkeit': 'Am schnellsten', 'Anwendungsfall': 'Kleine Modelle, Edge-Geräte' }], columns: ['Quantisierung', 'Größenreduktion', 'Qualität', 'Geschwindigkeit', 'Anwendungsfall'] }, quickRef: { id: 'quick-reference', title: 'Quick-Reference-Tabelle: VRAM nach Modell und Quantisierung', image: '/images/vram-calculator-local-llm-quick-ref-de.svg', imageCaption: 'VRAM-Quick-Reference-Matrix: 3B bis 70B-Modelle bei FP16, Q8, Q5 und Q4-Quantisierung. Grün = passt in 12 GB GPU. Orange = benötigt 16–24 GB. Rot = benötigt 40+ GB oder Multi-GPU.', rows: [{ 'Modell': '3B', 'FP16': '6 GB', 'Q8': '3 GB', 'Q5': '1,9 GB', 'Q4': '1,5 GB' }, { 'Modell': '7B', 'FP16': '14 GB', 'Q8': '7 GB', 'Q5': '4,4 GB', 'Q4': '3,5 GB' }, { 'Modell': '13B', 'FP16': '26 GB', 'Q8': '13 GB', 'Q5': '8,1 GB', 'Q4': '6,5 GB' }, { 'Modell': '32B', 'FP16': '64 GB', 'Q8': '32 GB', 'Q5': '20 GB', 'Q4': '16 GB' }, { 'Modell': '70B', 'FP16': '140 GB', 'Q8': '70 GB', 'Q5': '43,75 GB', 'Q4': '35 GB' }], columns: ['Modell', 'FP16', 'Q8', 'Q5', 'Q4'] }, realWorld: { id: 'real-world-examples', title: 'Praxisbeispiele', image: '/images/vram-calculator-local-llm-gpu-scenarios-de.svg', imageCaption: 'Praxis-GPU-Szenarien: RTX 4090 (24 GB), RTX 4080 (16 GB), RTX 4070 Ti (12 GB), M5 Max Mac (36 GB) und RTX 3060 (12 GB) — welche Llama 3.1 Modelle jede bei verschiedenen Quantisierungsstufen ausführen kann.', content: ['Praktische VRAM-Berechnungen für häufige Szenarien:', '⚠️ **Warnung:** Diese Berechnungen sind nur für Modellgewichte. Addieren Sie 25–40 % für Kontext, Batch-Verarbeitung und Systemoverhead. Beispiel: 13B Q5 = 8,1 GB Modell + 2–3 GB Overhead = 10–11 GB tatsächlich.'], items: ['**RTX 4070 Ti (12 GB)**: Llama 3.1 7B bei Q4 = 3,5 GB ✓ (viel Platz). Llama 3.1 13B bei Q5 = 8,1 GB ✓ (knapp, aber funktioniert ohne Kontext/Batching).', '**RTX 4090 (24 GB)**: Llama 3.1 70B bei Q5 = 43,75 GB ✗ (zu groß). Llama 3.1 70B bei Q4 = 35 GB ✗ (immer noch zu groß). Llama 3.1 70B bei Q4 mit Offloading = funktioniert (langsam, 3–5 Tokens/s).', '**M5 Max Mac (36 GB)**: Llama 3.1 13B bei FP16 = 26 GB ✓ (funktioniert). Llama 3.1 70B = unmöglich (selbst bei Q2, ~70 % Qualitätsverlust).'] }, overhead: { id: 'hidden-overhead', title: 'Welcher versteckter VRAM-Overhead sollte man berücksichtigen?', image: '/images/vram-calculator-local-llm-overhead-de.svg', imageCaption: 'Versteckter VRAM-Overhead-Aufschlüsselung: Kontextfenster (2–3 GB für 4K Tokens), Batch-Verarbeitung (×4 für Batch=4), Systemoverhead (500 MB–1 GB) und 25–40 % Sicherheitsmarge gesamt.', content: ['**Die Formel berechnet nur Modellgewichte.** Ihre echte VRAM-Nutzung wird höher sein aufgrund mehrerer Faktoren. Budget zusätzlich 25–40 % über dem berechneten Betrag.', 'Kontextfenster (Key-Value-Cache) speichert Gesprächsverlauf während Inferenz. Ein 4K-Token-Kontext verwendet ca. 2–3 GB für ein 7B-Modell.', '📌 **Schlüsselpunkt:** Batch-Verarbeitung erhöht VRAM-Nutzung linear. Jede zusätzliche gleichzeitige Anfrage (bei simultaner Verarbeitung mehrerer Anfragen) nutzt 500 MB–2 GB zusätzlich. Wenn Sie Batch=4 ausführen, multiplizieren Sie Single-Request-VRAM mit 4 und addieren Overhead.', 'Systemoverhead vom Betriebssystem und Inferenz-Engine-Framework (Ollama, vLLM, llama.cpp) reserviert 500 MB–1 GB. Halten Sie immer Sicherheitsmarge bei GPU-Auswahl.'] }, hardwareGuide: { id: 'hardware-fit', title: 'Welches lokale LLM passt zu Ihrer GPU? 2026-Anleitung', content: ['Verwenden Sie den interaktiven Rechner oben zur exakten Passform. Unten sind häufige GPU-Szenarien und empfohlene Modelle.'], items: ['**RTX 3060 (12 GB):** Bestes Modell: Qwen2.5 7B Q5 (4,4 GB) ✓. Alternative: Llama 3.2 8B Q4 (4 GB) ✓. Nicht möglich: 32B+ Modelle.', '**RTX 4070 (12 GB):** Bestes Modell: Qwen2.5 13B Q4 (6,5 GB) ✓. Mit Spielraum: Llama 3.2 8B Q5 (5 GB) ✓. Nicht möglich: 32B-Modelle.', '**RTX 4070 Ti (12 GB):** Bestes Modell: Qwen2.5 13B Q5 (8,1 GB) ✓. Enge Passform: Llama 3.3 13B Q4 (6,5 GB) ✓. Nicht ideal: Batch-Verarbeitung.', '**RTX 4080 (16 GB):** Bestes Modell: Qwen2.5 32B Q4 (16 GB) ✓ knapp. Komfortabel: Mistral 3.1 24B Q5 (15 GB) ✓. Empfohlen: Llama 3.3 13B Q8 (13 GB) ✓.', '**RTX 4090 (24 GB):** Bestes Modell: Qwen2.5 32B Q5 (20 GB) ✓. Mit Offload: Llama 3.3 70B Q4 (35 GB – benötigt Offloading). Komfortabel: Alle 32B bei Q5/Q8.', '**RTX 5090 (32 GB, wenn veröffentlicht):** Bestes Modell: Llama 3.3 70B Q4 (35 GB – enge Passform). Besser: Qwen2.5 72B Q3 (27 GB) ✓. Komfortabel: 70B bei Q5+ mit Batching.'] }, accuracy: { id: 'accuracy', title: 'Wie genau ist die Formel?', image: '/images/vram-calculator-local-llm-accuracy-de.svg', imageCaption: 'VRAM-Formel-Genauigkeit ±10 %: Abweichung verursacht durch Quantisierungsformat (GGUF vs. GPTQ vs. AWQ), Modellarchitektur (Transformer vs. MoE) und Inferenz-Engine (vLLM vs. llama.cpp vs. Ollama).', content: ['**Die Formel ist für die meisten Fälle auf ±10 % genau.** Echte VRAM-Nutzung variiert basierend auf Implementierung, Modellarchitektur und Inferenz-Engine-Optimierungen.', 'Variationsquellen umfassen: verschiedene Quantisierungsformate (GGUF vs. Safetensors vs. AWQ), Modellarchitektur (Transformer vs. Nicht-Transformer) und Inferenz-Engine-spezifische Optimierungen (vLLM, llama.cpp, Ollama).', 'Ab April 2026 behandeln Sie die Formel als konservative Schätzung. Addieren Sie immer 25 % Sicherheitsmarge beim GPU-Kauf, um Kontext-Overhead, Batching und Systemprozesse zu berücksichtigen.'] }, commonMistakes: { id: 'common-mistakes', title: 'Häufige Fehler bei VRAM-Berechnung', image: '/images/vram-calculator-local-llm-mistakes-de.svg', imageCaption: '4 häufige VRAM-Fehler: Kontext-Overhead vergessen (addiert 1,5–3 GB), 70B-Parameter mit 70 GB VRAM verwechseln, Systemoverhead von 1–2 GB ignorieren, GPU exakt bei berechneter Größe kaufen ohne 25 % Marge.', items: ['**Kontext-Overhead vergessen.** Ein 7B-Modell bei Q4 ist 3,5 GB, aber mit 4K-Kontext benötigt es 5–6 GB gesamt.', '**Modellgröße von HuggingFace ohne Quantisierung verwenden.** 70B bedeutet 70 Milliarden Parameter, nicht 70 GB VRAM.', '**Systemoverhead nicht berücksichtigen.** Modelle erhalten nie vollständiges GPU-VRAM. 1–2 GB für OS und Inferenz-Engine reservieren.', '**GPU exakt bei berechneter Größe kaufen.** Kaufen Sie immer 25 % mehr. Berechneter 18 GB-Bedarf = kaufen Sie 24 GB GPU.'] }, regionalContext: { id: 'regional-context', title: 'Überlegungen zur regionalen Bereitstellung', content: ['**Europäische Union (GDPR):** Lokale Inferenz (On-Premises) gewährleistet Datenschutz-Compliance unter GDPR. Das Ausführen von Modellen auf Ihrer eigenen GPU hält Benutzerdaten im Land. Dieser VRAM-Rechner hilft Ihnen, Hardware für datenschutzfreundliche Deployments richtig zu dimensionieren.', '**Deutschland & DACH-Region (BSI-Grundschutz):** Der BSI-Grundschutz-Katalog ist Standard für deutsche Behörden, Finanzinstitute und Mittelstand. Lokale LLM-Inferenz erfüllt BSI-Anforderungen für sensible Daten: keine Cloud-Abhängigkeiten, vollständige Kontrolle über Datenverarbeitung. Dieser Rechner unterstützt DSGVO-konforme und BSI-konforme Deployments.', '**Japan (APPI):** Das Gesetz zum Schutz personenbezogener Daten (APPI) erfordert sorgfältige Datenbehandlung. On-Device-LLM-Inferenz reduziert Datentransfer und externe Verarbeitung von Japan. Verwenden Sie diesen Rechner zur Dimensionierung für japanische Unternehmensbereitstellungen.', '**China (Datensicherheitsgesetz):** Chinas 2021 Datensicherheitsgesetz erfordert Datenresidenz innerhalb chinesischer Grenzen. Lokale LLM-Inferenz auf inländischen Servern (Alibaba Cloud, Tencent Cloud) ist konform. Diese Formel gilt für Dimensionierung dieser Deployments mit chinesisch-optimierten Modellen wie Qwen2.5.', 'In allen Regionen bietet lokale Inferenz stärkere Datenschutz-Garantien als Cloud-APIs. Dieser VRAM-Rechner ist essentiell für das Design konformer, datenschutzfreundlicher KI-Systeme.'] }, faqSection: { id: 'faq', title: 'FAQ: VRAM und GPU-Anforderungen', faqs: [{ q: 'Funktioniert die Formel für alle Modelltypen?', a: 'Ja. Die Formel (Modell-Milliarden × Quantisierungs-Bits) ÷ 8 gilt für alle Transformer-basierten Modelle (Llama, Qwen, Mistral, Claude usw.). Nicht-Transformer-Architekturen (RNNs usw.) sind selten und können Anpassungen erfordern.' }, { q: 'Welche Quantisierung sollte ich verwenden?', a: 'Für die meisten Anwendungsfälle: Q5 bietet die beste Balance (95 % Qualität, 68 % Größenreduktion). Für Consumer-GPUs: Q4 ist Standard (90–95 % Qualität, 75 % Reduktion). Für Produktion: Q8, wenn VRAM verfügbar (99 % Qualität). Vermeiden Sie Q3 und darunter, es sei denn, Sie haben keine andere Wahl.' }, { q: 'Wie viel System-RAM benötige ich?', a: 'Minimum 16 GB für Offloading. Wenn Sie VRAM-Offloading verwenden (CPU-Spillover), wird System-RAM zum Fallback. Für Batch-Verarbeitung addieren Sie 8–16 GB System-RAM zu den Modell-Offload-Anforderungen. Für Single-User-Chat genügen 16 GB.' }, { q: 'Beeinflußt die Batch-Größe die VRAM-Berechnung?', a: 'Ja. Die Formel berechnet Single-Request-VRAM. Batch-Größe addiert zusätzliches VRAM linear: jede gleichzeitige Anfrage addiert ~500 MB–2 GB je nach Kontextlänge. Wenn Sie Batch=4 ausführen, addieren Sie 2–8 GB zur berechneten Menge.' }, { q: 'Kann ich ein 70B-Modell auf einer 12 GB GPU ausführen?', a: 'Nur mit extremer Quantisierung (Q2, ~70 % Qualitätsverlust) und CPU-Offloading (sehr langsam, 1–3 Tokens/s). Nicht praktisch. Bessere Option: Verwenden Sie ein 13B-Modell bei Q4 (gleiches VRAM, viel schneller und bessere Qualität).' }, { q: 'Was ist, wenn meine tatsächliche VRAM-Nutzung niedriger als berechnet ist?', a: 'Die Formel ist konservativ und includes Overhead. Niedrigere Nutzung bedeutet mehr Spielraum für Batch-Verarbeitung, längere Kontexte oder Sicherheitsmarge. Verwenden Sie nvidia-smi zur Messung echter Nutzung, dann benchen Sie Ihr Modell zur Leistungsbestätigung.' }, { q: 'Muss ich bei der Verwendung lokaler LLMs die DSGVO beachten?', a: 'Ja. Die DSGVO Artikel 28 erfordert Datenverarbeitungsverträge. Lokale Inferenz auf eigenem Hardware erfüllt Datenschutz-Anforderungen: Daten bleiben on-premises, keine Übertragung an Cloud-APIs. BSI-Grundschutz-Kataloge für Bundestechnologiestandards: lokale LLMs erfüllen Anforderungen für sensible Daten in Behörden und Finanzinstitutionen. Diese VRAM-Berechnungen unterstützen DSGVO-konforme Deployments.' }, { q: 'Ist der Einsatz lokaler LLMs für den deutschen Mittelstand geeignet?', a: 'Ja, sehr geeignet. Kleine und mittlere Unternehmen (Mittelstand) profitieren: Kostenenkontrolle (keine wiederkehrenden API-Kosten), Datensicherheit (keine externen Abhängigkeiten), Compliance mit BSI IT-Sicherheitsstandards. Mit diesem VRAM-Rechner können Mittelstand-Unternehmen exakt kalkulieren, welche GPU für ihre Anforderungen passt—oft genügt eine RTX 4070 Ti (€600–800) für 13B-Modelle. Besser als monatliche Cloud-Abos für APIs.' }] }, relatedReading: { id: 'related-reading', title: 'Weiterführende Ressourcen', items: ['[Hardware-Anleitung für lokale LLMs 2026](/de/local-llms/local-llm-hardware-guide-2026) -- Vollständige GPU- und CPU-Empfehlungen für Ihr Budget.', '[Beste GPUs für lokale LLMs](/de/local-llms/best-gpus-for-local-llms) -- RTX 4090, 4080, 4070 Ti Benchmarks und Kostenanalyse.', '[70B-Modelle auf 24GB VRAM ausführen](/de/local-llms/run-70b-models-24gb-vram) -- Quantisierungs- und Offloading-Techniken für große Modelle.', '[LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained) -- Tiefgang in Q4, Q5, Q8-Formate und Qualitäts-Trade-offs.', '[Stromverbrauch lokaler LLMs](/de/local-llms/local-llm-power-consumption) -- Netzteil-, Kühl- und Stromkostenanalyse.', '[Multi-GPU lokale LLMs](/de/local-llms/multi-gpu-local-llms) -- Layer-Splitting und verteilte Inferenz für 70B+ Modelle.'] }, sources: { id: 'sources', title: 'Quellen', items: ['[GGUF-Spezifikation](https://github.com/ggerganov/ggml/blob/master/docs/gguf.md) -- ggerganov/ggml-Dokumentation zum quantisierten Dateiformat.', '[Transformers Quantisierungs-Dokumentation](https://huggingface.co/docs/transformers/quantization) -- Hugging Face offizieller Leitfaden zu Quantisierungsmethoden.', '[Ollama-Dokumentation](https://ollama.ai) -- Offizielle Ollama-Anleitungen zur Modellverwaltung.', '[vLLM Performance-Anleitung](https://docs.vllm.ai) -- vLLM Framework Optimierungs-Dokumentation.'] } },
    },
    fr: {
      theme: 'Matériel & Performance',
      title: 'Calculateur VRAM 2026 : Exigences GPU pour LLMs 7B/13B/70B (Q4, Q5, Q8)',
      seoTitle: 'Calculateur VRAM 2026 : GPU requis pour LLMs 7B/13B/70B (Q4, Q5, Q8)',
      intro: 'Calculateur VRAM interactif pour LLMs locaux. Entrez la taille du modèle, la quantification, la longueur du contexte et la taille du lot pour calculer les besoins exacts en VRAM GPU. Compatible avec les modèles 1B–405B en FP16, Q8, Q5, Q4. Mis à jour avril 2026 avec analyse RTX 4090, 4080, 3060 et calculs de surcharge.',
      metaDescription: 'Calculateur VRAM interactif : calculez les exigences GPU exactes pour LLMs 7B (3.5 Go Q4), 13B (6.5 Go Q4), 70B (35 Go Q4). Vérifiez la compatibilité RTX 4090, 4080, 4070 Ti. Quantification Q4/Q5/Q8. Contexte, lot et surcharge système inclus.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**Ce guide explique comment calculer les exigences VRAM exactes pour toute combinaison modèle/matériel. La formule est simple : (Taille modèle Go × Bits quantification) ÷ 8 = VRAM requise.**',
      audience: 'Débutants exécutant leur premier LLM local sur matériel grand public',
      readTime: '10 min de lecture',
      educationalLevel: 'Débutant à intermédiaire',
      primaryTerm: 'calculateur VRAM',
schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Calculateur VRAM pour LLMs locaux : calculez les exigences GPU exactes', description: 'Calculateur VRAM pour LLMs locaux 2026 : utilisez la formule VRAM = (Milliards modèle × Bits quantification) ÷ 8. Exemples RTX 4090, 4080, M5 Max avec surcharge, traitement par lots et données de précision.', author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' }, datePublished: '2026-04-04', dateModified: '2026-04-19', publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' }, proficiencyLevel: 'Débutant', audience: { '@type': 'Audience', audienceType: 'Développeurs, débutants exécutant des LLMs locaux' }, about: [{ '@type': 'Thing', name: 'VRAM' }, { '@type': 'Thing', name: 'Mémoire GPU' }, { '@type': 'Thing', name: 'Modèles Llama' }, { '@type': 'Thing', name: 'Quantification' }], speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] }, url: 'https://www.promptquorum.com/fr/local-llms/vram-calculator-local-llm', inLanguage: 'fr' },
      faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'fr', mainEntity: [{ '@type': 'Question', name: 'La formule fonctionne-t-elle pour tous les types de modèles ?', acceptedAnswer: { '@type': 'Answer', text: "Oui. La formule (Milliards modèle × Bits quantification) ÷ 8 s'applique à tous les modèles basés sur Transformer (Llama, Qwen, Mistral, Claude, etc.). Les architectures non-Transformer (RNN, etc.) sont rares et peuvent nécessiter des ajustements." } }, { '@type': 'Question', name: 'Quelle quantification utiliser ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour la plupart des usages : Q5 offre le meilleur équilibre (95 % qualité, 68 % réduction). Pour les GPU grand public : Q4 est standard (90–95 % qualité, 75 % réduction). En production : Q8 si la VRAM le permet (99 % qualité). Évitez Q3 et en dessous sauf nécessité absolue.' } }, { '@type': 'Question', name: 'Quelle quantité de RAM système faut-il ?', acceptedAnswer: { '@type': 'Answer', text: '16 Go minimum pour le déchargement. En cas de déchargement VRAM (débordement CPU), la RAM système devient le recours. Pour le traitement par lots, ajoutez 8–16 Go. Pour le chat mono-utilisateur, 16 Go suffisent.' } }, { '@type': 'Question', name: 'La taille du lot affecte-t-elle le calcul VRAM ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. La formule calcule la VRAM pour une requête unique. La taille du lot ajoute de la VRAM linéairement : chaque requête simultanée ajoute ~500 Mo–2 Go selon le contexte. Avec batch=4, ajoutez 2–8 Go au montant calculé.' } }, { '@type': 'Question', name: 'Puis-je exécuter un modèle 70B sur un GPU 12 Go ?', acceptedAnswer: { '@type': 'Answer', text: "Uniquement avec une quantification extrême (Q2, ~70 % de perte qualité) et déchargement CPU (très lent, 1–3 tokens/s). Peu pratique. Meilleure option : un modèle 13B en Q4 (même VRAM, bien plus rapide et de meilleure qualité)." } }, { '@type': 'Question', name: "Que faire si l'utilisation VRAM réelle est inférieure au calcul ?", acceptedAnswer: { '@type': 'Answer', text: "La formule est conservative et inclut la surcharge. Une utilisation inférieure signifie plus de marge pour le traitement par lots, des contextes plus longs ou une sécurité accrue. Utilisez nvidia-smi pour mesurer l'utilisation réelle, puis benchmarkez votre modèle." } }] },
      softwareApplicationSchema: { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Calculateur VRAM pour LLMs locaux', description: 'Calculateur VRAM interactif pour LLMs locaux. Calculez les exigences GPU exactes pour toute combinaison taille modèle (1B–405B), quantification (FP16, Q8, Q5, Q4, Q3, Q2), longueur contexte (2K–128K tokens) et taille lot (1–8). Inclut vérification compatibilité GPU en temps réel pour RTX 3060/4070/4080/4090 et M5 Max.', applicationCategory: 'UtilityApplication', operatingSystem: 'Web', url: 'https://www.promptquorum.com/fr/local-llms/vram-calculator-local-llm', inLanguage: 'fr', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, creator: { '@type': 'Person', name: 'Hans Kuepper' } },
      howToSchema: { '@context': 'https://schema.org', '@type': 'HowTo', name: 'Comment calculer les exigences VRAM pour les LLMs locaux', description: 'Calculez la VRAM exacte pour tout modèle LLM local avec la formule : (Milliards modèle × Bits quantification) ÷ 8. Inclut contexte, lot et surcharge système.', inLanguage: 'fr', step: [{ '@type': 'HowToStep', position: 1, name: 'Identifiez la taille de votre modèle', text: 'Déterminez le nombre de paramètres en milliards (ex. 7B = 7 milliards, 13B = 13 milliards). Modèles courants : Llama 3.2 (7B, 13B), Qwen2.5 (7B, 14B, 32B, 72B), Mistral 3.1 (7B, 32B).' }, { '@type': 'HowToStep', position: 2, name: 'Choisissez le niveau de quantification', text: 'Sélectionnez les bits : FP16 (100 % qualité, plus grand), Q8 (99 %), Q5 (95 %, équilibre recommandé), Q4 (90–95 %, défaut grand public), Q3 (80–85 %, compression extrême), Q2 (70 %, appareils Edge).' }, { '@type': 'HowToStep', position: 3, name: 'Appliquez la formule', text: 'Calculez : VRAM (Go) = (Taille modèle en milliards × Bits quantification) ÷ 8. Exemple : modèle 13B en Q4 = (13 × 4) ÷ 8 = 6.5 Go de poids de modèle de base.' }, { '@type': 'HowToStep', position: 4, name: 'Comptabilisez la surcharge', text: 'Ajoutez la surcharge pour le contexte (1–3 Go pour 4k tokens), le traitement par lots (×taille lot) et le système (1–2 Go). Total = base + surcharge.' }, { '@type': 'HowToStep', position: 5, name: 'Appliquez une marge de sécurité de 25 %', text: 'Multipliez le total par 1.25 pour obtenir la VRAM recommandée. Exemple : 10 Go calculés = achetez un GPU 12–16 Go.' }, { '@type': 'HowToStep', position: 6, name: 'Vérifiez la compatibilité GPU', text: 'Comparez votre VRAM recommandée aux GPU disponibles. RTX 4090 (24 Go), RTX 4080 (16 Go), RTX 4070 Ti (12 Go), RTX 3060 (12 Go), M5 Max (36 Go). Utilisez le calculateur interactif.' }] },
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Faits rapides', anchor: '#quick-facts' },
        { label: 'En une phrase', anchor: '#in-one-sentence' },
        { label: 'En termes simples', anchor: '#in-plain-terms' },
        { label: 'Formule VRAM', anchor: '#vram-formula' },
        { label: 'Calculateur interactif', anchor: '#interactive-calculator' },
        { label: 'Niveaux de quantification', anchor: '#quantization-levels' },
        { label: 'Tableau de référence rapide', anchor: '#quick-reference' },
        { label: 'Exemples concrets', anchor: '#real-world-examples' },
        { label: 'Quel GPU pour votre modèle ?', anchor: '#hardware-fit' },
        { label: 'Surcharge VRAM cachée', anchor: '#hidden-overhead' },
        { label: 'Précision et marges', anchor: '#accuracy' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Déploiement régional', anchor: '#regional-context' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Lectures complémentaires', anchor: '#related-reading' },
      ],
      gammaEmbedUrl: '/presentations/vram-calculator-local-llm-static.html',
      gammaDescription: "Le diaporama ci-dessous couvre : formule VRAM (Milliards modèle × Bits quantification) ÷ 8, niveaux de quantification Q2–FP16 avec compromis qualité, tableau de référence rapide (modèles 3B–70B), scénarios GPU réels (RTX 4090, 4080, M5 Max) et conformité régionale (RGPD UE, APPI Japon, loi chinoise sur la sécurité des données). Téléchargez le PDF comme fiche de référence calculateur VRAM.",
      sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['VRAM = (Taille modèle × Bits quantification) ÷ 8', 'FP16 = 16 bits, Q8 = 8, Q5 = 5, Q4 = 4 bits', 'Exemple : modèle 13B en Q4 = (13 × 4) ÷ 8 = 6.5 Go', 'Ajoutez toujours 25 % de marge pour le contexte, la surcharge système et la sécurité', 'En avril 2026, cette formule est précise à ±10 %'] }, quickFacts: { id: 'quick-facts', title: 'Faits rapides : exigences VRAM par GPU', items: ['**RTX 4090 (24 Go) :** Llama 3.1 7B en Q4 (3.5 Go), 13B en Q5 (8.1 Go), 70B en Q4 avec déchargement', '**RTX 4080 (16 Go) :** Llama 3.1 7B en Q4 (3.5 Go), 13B en Q5 (8.1 Go), 32B en Q4 (16 Go)', '**RTX 4070 Ti (12 Go) :** Llama 3.1 7B en Q4 (3.5 Go), 13B en Q5 (8.1 Go avec marge limitée)', '**M5 Max Mac (36 Go unifié) :** Llama 3.1 13B en FP16 (26 Go), 70B impossible sans quantification extrême', '**Règle empirique :** Prévoyez toujours 25–40 % de VRAM supplémentaire pour le contexte, le traitement par lots et la surcharge système'] }, inOneSentence: { id: 'in-one-sentence', title: 'En une phrase', content: 'La VRAM requise (Go) équivaut aux paramètres du modèle en milliards multipliés par les bits de quantification (16 pour FP16, 8 pour Q8, 4 pour Q4, etc.), divisés par 8.' }, inPlainTerms: { id: 'in-plain-terms', title: 'En termes simples', content: "Imaginez la VRAM comme un espace de bibliothèque. Les gros livres (modèles avec plus de paramètres comme 70B) occupent plus de place. Les petits livres (quantification Q4) prennent moins de place que les grands (FP16). La formule vous indique exactement combien d'étagères (Go) vous avez besoin. Laissez toujours des étagères libres pour les conversations, les requêtes simultanées et les logiciels système." }, formula: { id: 'vram-formula', title: 'Quelle est la formule VRAM ?', image: '/images/vram-calculator-local-llm-formula-fr.svg', imageCaption: 'Formule VRAM avec 3 exemples de calcul : modèle 7B en Q4 = 3.5 Go, 13B en Q5 = 8.1 Go, 70B en Q8 = 70 Go. Ajoutez toujours 25–40 % de marge pour le contexte, le traitement par lots et la surcharge système.', content: ['La formule pour les exigences VRAM est trompeusement simple :', "💡 **Conseil Pro :** Cette formule calcule uniquement les poids du modèle. L'utilisation réelle de VRAM est 25–40 % plus élevée en raison du contexte, du traitement par lots et de la surcharge système. Ajoutez toujours une marge de sécurité."], codeBlock: 'VRAM (GB) = (Model Size in Billions × Quantization Bits) ÷ 8\n\nExample:\n- 7B model at 4-bit quantization\n- (7 × 4) ÷ 8 = 3.5 GB\n\n- 13B model at 5-bit quantization\n- (13 × 5) ÷ 8 = 8.125 GB\n\n- 70B model at 8-bit quantization\n- (70 × 8) ÷ 8 = 70 GB', codeLanguage: 'bash' }, calculator: { id: 'interactive-calculator', title: 'Calculateur VRAM interactif', content: 'Utilisez ce calculateur pour calculer les exigences VRAM exactes pour toute combinaison de modèle, quantification, contexte et taille de lot. Sélectionnez votre configuration et voyez quels GPU sont compatibles.', component: 'VramCalculator' }, quantization: { id: 'quantization-levels', title: 'Que signifient les niveaux de quantification ?', image: '/images/vram-calculator-local-llm-quant-levels-fr.svg', imageCaption: 'Comparaison des niveaux de quantification : FP16 (100 % qualité), Q8 (99 %), Q5 (95 %, recommandé), Q4 (90–95 %), Q3 (80–85 %), Q2 (70 %). Q5 réduit un modèle 7B de 14 Go à 4.4 Go avec seulement 5 % de perte qualité.', content: "🔍 **Insight clé :** La quantification échange la taille de fichier contre la qualité. Q5 est le meilleur compromis (95 % qualité, 68 % plus petit). Q4 est acceptable pour la plupart. Q3 et en dessous uniquement pour les appareils Edge ou quand la VRAM est critiquement limitée.", rows: [{ 'Quantification': 'FP16 (16-bit)', 'Réduction taille': 'Aucune (base)', 'Qualité': '100 % (parfaite)', 'Vitesse': 'Base', "Cas d'usage": 'Recherche, fine-tuning' }, { 'Quantification': 'Q8 (8-bit)', 'Réduction taille': '50 %', 'Qualité': '99 % (imperceptible)', 'Vitesse': 'Base', "Cas d'usage": 'Production, serveurs locaux' }, { 'Quantification': 'Q6 (6-bit)', 'Réduction taille': '62.5 %', 'Qualité': '98 % (négligeable)', 'Vitesse': 'Base', "Cas d'usage": 'Usage équilibré' }, { 'Quantification': 'Q5 (5-bit)', 'Réduction taille': '68.75 %', 'Qualité': '95 % (perte mineure)', 'Vitesse': 'Base', "Cas d'usage": 'Bonne compression, grand public' }, { 'Quantification': 'Q4 (4-bit)', 'Réduction taille': '75 %', 'Qualité': '90–95 % (acceptable)', 'Vitesse': 'Base', "Cas d'usage": 'Compression maximale' }, { 'Quantification': 'Q3 (3-bit)', 'Réduction taille': '81 %', 'Qualité': '80–85 % (perte notable)', 'Vitesse': 'Plus rapide', "Cas d'usage": 'Compression extrême, CPU' }, { 'Quantification': 'Q2 (2-bit)', 'Réduction taille': '87.5 %', 'Qualité': '70 % (perte visible)', 'Vitesse': 'Le plus rapide', "Cas d'usage": 'Petits modèles, appareils Edge' }], columns: ['Quantification', 'Réduction taille', 'Qualité', 'Vitesse', "Cas d'usage"] }, quickRef: { id: 'quick-reference', title: 'Tableau de référence rapide : VRAM par modèle et quantification', image: '/images/vram-calculator-local-llm-quick-ref-fr.svg', imageCaption: 'Matrice de référence VRAM rapide : modèles 3B à 70B en FP16, Q8, Q5 et Q4. Vert = compatible GPU 12 Go. Orange = nécessite 16–24 Go. Rouge = nécessite 40+ Go ou multi-GPU.', rows: [{ 'Modèle': '3B', 'FP16': '6 Go', 'Q8': '3 Go', 'Q5': '1.9 Go', 'Q4': '1.5 Go' }, { 'Modèle': '7B', 'FP16': '14 Go', 'Q8': '7 Go', 'Q5': '4.4 Go', 'Q4': '3.5 Go' }, { 'Modèle': '13B', 'FP16': '26 Go', 'Q8': '13 Go', 'Q5': '8.1 Go', 'Q4': '6.5 Go' }, { 'Modèle': '32B', 'FP16': '64 Go', 'Q8': '32 Go', 'Q5': '20 Go', 'Q4': '16 Go' }, { 'Modèle': '70B', 'FP16': '140 Go', 'Q8': '70 Go', 'Q5': '43.75 Go', 'Q4': '35 Go' }], columns: ['Modèle', 'FP16', 'Q8', 'Q5', 'Q4'] }, realWorld: { id: 'real-world-examples', title: 'Exemples concrets', image: '/images/vram-calculator-local-llm-gpu-scenarios-fr.svg', imageCaption: 'Scénarios GPU réels : RTX 4090 (24 Go), RTX 4080 (16 Go), RTX 4070 Ti (12 Go), M5 Max Mac (36 Go) et RTX 3060 (12 Go) — quels modèles Llama 3.1 chacun peut exécuter à différents niveaux de quantification.', content: ['Calculs VRAM pratiques pour les scénarios courants :', '⚠️ **Avertissement :** Ces calculs concernent uniquement les poids du modèle. Ajoutez 25–40 % pour le contexte, le traitement par lots et la surcharge système. Exemple : 13B Q5 = 8.1 Go modèle + 2–3 Go surcharge = 10–11 Go réels.'], items: ['**RTX 4070 Ti (12 Go)** : Llama 3.1 7B en Q4 = 3.5 Go ✓ (large marge). Llama 3.1 13B en Q5 = 8.1 Go ✓ (serré, mais fonctionne sans contexte/lots).', '**RTX 4090 (24 Go)** : Llama 3.1 70B en Q5 = 43.75 Go ✗ (trop grand). Llama 3.1 70B en Q4 = 35 Go ✗ (toujours trop grand). Llama 3.1 70B en Q4 avec déchargement = fonctionne (lent, 3–5 tok/s).', '**M5 Max Mac (36 Go)** : Llama 3.1 13B en FP16 = 26 Go ✓ (fonctionne). Llama 3.1 70B = impossible (même en Q2, ~70 % de perte qualité).'] }, overhead: { id: 'hidden-overhead', title: 'Quelle surcharge VRAM cachée prendre en compte ?', image: '/images/vram-calculator-local-llm-overhead-fr.svg', imageCaption: 'Décomposition de la surcharge VRAM cachée : fenêtre de contexte (2–3 Go pour 4k tokens), traitement par lots (×4 pour batch=4), surcharge système (500 Mo–1 Go) et marge totale 25–40 %.', content: ['**La formule calcule uniquement les poids du modèle.** Votre utilisation VRAM réelle sera plus élevée en raison de plusieurs facteurs. Prévoyez 25–40 % supplémentaires.', "La fenêtre de contexte (cache clé-valeur) stocke l'historique de conversation pendant l'inférence. Un contexte de 4k tokens utilise environ 2–3 Go pour un modèle 7B.", '📌 **Point clé :** Le traitement par lots augmente la VRAM linéairement. Chaque requête simultanée supplémentaire utilise 500 Mo–2 Go. Avec batch=4, multipliez la VRAM par requête unique par 4 et ajoutez la surcharge.', "La surcharge système du système d'exploitation et du framework d'inférence (Ollama, vLLM, llama.cpp) réserve 500 Mo–1 Go. Maintenez toujours une marge de sécurité."] }, hardwareGuide: { id: 'hardware-fit', title: 'Quel LLM local pour votre GPU ? Guide 2026', content: ['Utilisez le calculateur interactif ci-dessus pour une compatibilité exacte. Voici les scénarios GPU courants et les modèles recommandés.'], items: ['**RTX 3060 (12 Go) :** Meilleur modèle : Qwen2.5 7B Q5 (4.4 Go) ✓. Alternative : Llama 3.2 8B Q4 (4 Go) ✓. Impossible : modèles 32B+.', '**RTX 4070 (12 Go) :** Meilleur modèle : Qwen2.5 13B Q4 (6.5 Go) ✓. Avec marge : Llama 3.2 8B Q5 (5 Go) ✓. Impossible : modèles 32B.', '**RTX 4070 Ti (12 Go) :** Meilleur modèle : Qwen2.5 13B Q5 (8.1 Go) ✓. Serré : Llama 3.3 13B Q4 (6.5 Go) ✓. Non idéal : traitement par lots.', '**RTX 4080 (16 Go) :** Meilleur modèle : Qwen2.5 32B Q4 (16 Go) ✓ serré. Confortable : Mistral 3.1 24B Q5 (15 Go) ✓. Recommandé : Llama 3.3 13B Q8 (13 Go) ✓.', '**RTX 4090 (24 Go) :** Meilleur modèle : Qwen2.5 32B Q5 (20 Go) ✓. Avec déchargement : Llama 3.3 70B Q4 (35 Go). Confortable : tout 32B en Q5/Q8.', '**RTX 5090 (32 Go, si disponible) :** Meilleur modèle : Llama 3.3 70B Q4 (35 Go – serré). Mieux : Qwen2.5 72B Q3 (27 Go) ✓. Confortable : 70B en Q5+ avec lots.'] }, accuracy: { id: 'accuracy', title: 'Quelle est la précision de la formule ?', image: '/images/vram-calculator-local-llm-accuracy-fr.svg', imageCaption: 'Précision formule VRAM ±10 % : variation causée par le format de quantification (GGUF vs GPTQ vs AWQ), architecture du modèle (Transformer vs MoE) et moteur d\'inférence (vLLM vs llama.cpp vs Ollama).', content: ['**La formule est précise à ±10 % pour la plupart des cas.** L\'utilisation VRAM réelle varie selon l\'implémentation, l\'architecture du modèle et les optimisations du moteur d\'inférence.', 'Les sources de variation comprennent : différents formats de quantification (GGUF vs safetensors vs AWQ), architecture du modèle (Transformer vs non-Transformer) et optimisations spécifiques au moteur d\'inférence (vLLM, llama.cpp, Ollama).', 'En avril 2026, traitez la formule comme une estimation conservative. Ajoutez toujours 25 % de marge lors de l\'achat de GPU pour tenir compte de la surcharge de contexte, du traitement par lots et des processus système.'] }, commonMistakes: { id: 'common-mistakes', title: 'Erreurs courantes dans le calcul VRAM', image: '/images/vram-calculator-local-llm-mistakes-fr.svg', imageCaption: '4 erreurs VRAM courantes : oublier la surcharge de contexte (ajoute 1.5–3 Go), confondre 70B paramètres avec 70 Go VRAM, ignorer 1–2 Go de surcharge système, acheter un GPU exactement à la taille calculée sans marge de 25 %.', items: ['**Oublier la surcharge de contexte.** Un modèle 7B en Q4 fait 3.5 Go, mais avec 4k contexte, il nécessite 5–6 Go au total.', '**Utiliser la taille du modèle HuggingFace sans considérer la quantification.** 70B signifie 70 milliards de paramètres, pas 70 Go VRAM.', "**Ne pas tenir compte de la surcharge système.** Les modèles n'obtiennent jamais toute la VRAM GPU. Réservez 1–2 Go pour l'OS et le moteur d'inférence.", '**Acheter un GPU exactement à la taille calculée.** Achetez toujours 25 % de plus. Un besoin calculé de 18 Go = prenez un GPU 24 Go.'] }, regionalContext: { id: 'regional-context', title: 'Considérations de déploiement régional', content: ["**Union européenne (RGPD) :** L'inférence locale (sur site) garantit la conformité à la résidence des données sous le RGPD. Exécuter des modèles sur votre propre GPU maintient les données utilisateur dans le pays. Ce calculateur VRAM vous aide à dimensionner le matériel pour des déploiements respectueux de la vie privée. La CNIL recommande l'inférence locale pour les données professionnelles sensibles (financières, médicales, juridiques) afin d'éviter tout transfert non nécessaire vers des API cloud.", "**Japon (APPI) :** La loi sur la protection des informations personnelles (APPI) exige un traitement rigoureux des données. L'inférence LLM sur appareil réduit les transferts et traitements de données en dehors du Japon. Utilisez ce calculateur pour dimensionner les systèmes pour les déploiements d'entreprise japonais.", "**Chine (Loi sur la sécurité des données) :** La loi chinoise de 2021 sur la sécurité des données impose la résidence des données à l'intérieur des frontières chinoises. L'inférence LLM locale sur des serveurs nationaux (Alibaba Cloud, Tencent Cloud) est conforme.", "Dans toutes les régions, l'inférence locale offre de meilleures garanties de confidentialité des données que les API cloud. Ce calculateur VRAM est essentiel pour concevoir des systèmes d'IA conformes et respectueux de la vie privée."] }, faqSection: { id: 'faq', title: 'FAQ : VRAM et exigences GPU', faqs: [{ q: 'La formule fonctionne-t-elle pour tous les types de modèles ?', a: "Oui. La formule (Milliards modèle × Bits quantification) ÷ 8 s'applique à tous les modèles basés sur Transformer (Llama, Qwen, Mistral, Claude, etc.). Les architectures non-Transformer (RNN, etc.) sont rares et peuvent nécessiter des ajustements." }, { q: 'Quelle quantification utiliser ?', a: "Pour la plupart des usages : Q5 offre le meilleur équilibre (95 % qualité, 68 % réduction). Pour les GPU grand public : Q4 est standard (90–95 % qualité, 75 % réduction). En production : Q8 si la VRAM le permet (99 % qualité). Évitez Q3 et en dessous sauf nécessité absolue." }, { q: 'Quelle quantité de RAM système faut-il ?', a: "16 Go minimum pour le déchargement. En cas de déchargement VRAM (débordement CPU), la RAM système devient le recours. Pour le traitement par lots, ajoutez 8–16 Go. Pour le chat mono-utilisateur, 16 Go suffisent." }, { q: 'La taille du lot affecte-t-elle le calcul VRAM ?', a: "Oui. La formule calcule la VRAM pour une requête unique. La taille du lot ajoute de la VRAM linéairement : chaque requête simultanée ajoute ~500 Mo–2 Go selon le contexte. Avec batch=4, ajoutez 2–8 Go." }, { q: 'Puis-je exécuter un modèle 70B sur un GPU 12 Go ?', a: "Uniquement avec une quantification extrême (Q2, ~70 % de perte qualité) et déchargement CPU (très lent, 1–3 tokens/s). Peu pratique. Meilleure option : un modèle 13B en Q4 (même VRAM, bien plus rapide et de meilleure qualité)." }, { q: "Que faire si l'utilisation VRAM réelle est inférieure au calcul ?", a: "La formule est conservative et inclut la surcharge. Une utilisation inférieure signifie plus de marge pour le traitement par lots, des contextes plus longs ou une sécurité accrue. Utilisez nvidia-smi pour mesurer l'utilisation réelle, puis benchmarkez." }] }, relatedReading: { id: 'related-reading', title: 'Lectures complémentaires', items: ['[Guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026) -- Recommandations GPU et CPU complètes selon votre budget.', '[Meilleurs GPU pour LLMs locaux](/fr/local-llms/best-gpus-for-local-llms) -- Benchmarks et analyse coût RTX 4090, 4080, 4070 Ti.', '[Exécuter modèles 70B sur 24 Go VRAM](/fr/local-llms/run-70b-models-24gb-vram) -- Techniques de quantification et déchargement pour grands modèles.', '[Quantification LLM expliquée](/fr/local-llms/llm-quantization-explained) -- Approfondissement des formats Q4, Q5, Q8 et compromis qualité.', '[Consommation énergie LLMs locaux](/fr/local-llms/local-llm-power-consumption) -- Analyse alimentation, refroidissement et coût électricité.', '[LLMs locaux multi-GPU](/fr/local-llms/multi-gpu-local-llms) -- Découpage de couches et inférence distribuée pour modèles 70B+.'] }, sources: { id: 'sources', title: 'Sources', items: ['[Spécification GGUF](https://github.com/ggerganov/ggml/blob/master/docs/gguf.md) -- Documentation ggerganov/ggml sur le format de fichier quantifié.', '[Documentation Quantification Transformers](https://huggingface.co/docs/transformers/quantization) -- Guide officiel Hugging Face sur les méthodes de quantification.', '[Documentation Ollama](https://ollama.ai) -- Guides officiels Ollama pour la gestion des modèles.', "[Guide Performance vLLM](https://docs.vllm.ai) -- Documentation d'optimisation du framework vLLM."] } },
    },
    ja: {
      theme: 'ハードウェアとパフォーマンス',
      title: 'VRAMカリキュレーター2026：7B/13B/70B LLMのGPU要件（Q4、Q5、Q8）',
      seoTitle: 'VRAMカリキュレーター2026：7B/13B/70B LLMのGPU要件（Q4、Q5、Q8）',
      intro: 'ローカルLLM向けインタラクティブVRAMカリキュレーター。モデルサイズ、量子化、コンテキスト長、バッチサイズを入力して、GPU VRAMの正確な必要量を計算します。1B〜405BモデルのFP16、Q8、Q5、Q4量子化に対応。2026年4月更新：RTX 4090、4080、3060の適合分析とオーバーヘッド計算を含む。',
      metaDescription: 'インタラクティブVRAMカリキュレーター：7B（Q4で3.5 GB）、13B（Q4で6.5 GB）、70B（Q4で35 GB）LLMの正確なGPU要件を計算。RTX 4090、4080、4070 Tiの適合確認。Q4/Q5/Q8量子化。コンテキスト、バッチ、システムオーバーヘッドを含む。',
      publishDate: '2026-04-04',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**このガイドでは、任意のモデルとハードウェアの組み合わせに対して正確なVRAM要件を計算する方法を説明します。計算式はシンプルです：（モデルサイズGB × 量子化ビット数）÷ 8 = 必要VRAM。**',
      audience: 'コンシューマーハードウェアで初めてローカルLLMを実行する初心者',
      readTime: '10分で読める',
      educationalLevel: 'Beginner to Intermediate',
      primaryTerm: 'VRAMカリキュレーター',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'ローカルLLM向けVRAMカリキュレーター：正確なGPU要件の計算',
        description: 'ローカルLLM向けVRAMカリキュレーター2026：VRAM = （モデルの十億パラメータ × 量子化ビット数）÷ 8の計算式を使用。RTX 4090、4080、M5 Maxの例と、オーバーヘッド、バッチ処理、精度データを含む。',
        author: {
          '@type': 'Organization',
          name: 'PromptQuorum'
        },
        datePublished: '2026-04-04',
        dateModified: '2026-04-19',
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com'
        },
        proficiencyLevel: '初心者',
        audience: {
          '@type': 'Audience',
          audienceType: 'ローカルLLMを実行する開発者・初心者'
        },
        about: [
          { '@type': 'Thing', name: 'VRAM' },
          { '@type': 'Thing', name: 'GPUメモリ' },
          { '@type': 'Thing', name: 'Llamaモデル' },
          { '@type': 'Thing', name: '量子化' }
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways']
        },
        url: 'https://www.promptquorum.com/ja/local-llms/vram-calculator-local-llm',
        inLanguage: 'ja'
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          { '@type': 'Question', name: 'この計算式はすべてのモデルタイプに対応していますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。計算式（モデルの十億パラメータ × 量子化ビット数）÷ 8は、すべてのTransformerベースのモデル（Llama、Qwen、Mistral、Claudeなど）に適用されます。非Transformerアーキテクチャ（RNNなど）はまれで、調整が必要な場合があります。' } },
          { '@type': 'Question', name: 'どの量子化レベルを使用すべきですか？', acceptedAnswer: { '@type': 'Answer', text: 'ほとんどの用途：Q5が最適なバランスを提供します（品質95%、サイズ68%削減）。コンシューマーGPU：Q4が標準です（品質90〜95%、75%削減）。本番環境：VRAMが許せばQ8（品質99%）。選択肢がない限り、Q3以下は避けてください。' } },
          { '@type': 'Question', name: 'システムRAMはどのくらい必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'オフロードには最低16 GB。VRAMオフロード（CPUスピルオーバー）を使用する場合、システムRAMがフォールバックになります。バッチ処理には、モデルオフロード要件を超えて8〜16 GBのシステムRAMを追加してください。単一ユーザーチャットには16 GBで十分です。' } },
          { '@type': 'Question', name: 'バッチサイズはVRAM計算に影響しますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。計算式は単一リクエストのVRAMを計算します。バッチサイズはVRAMを線形的に追加します：各同時リクエストがコンテキスト長に応じて約500 MB〜2 GBを追加します。batch=4を実行する場合、計算量に2〜8 GBを追加してください。' } },
          { '@type': 'Question', name: '12 GB GPUで70Bモデルを実行できますか？', acceptedAnswer: { '@type': 'Answer', text: '極端な量子化（Q2、品質損失約70%）とCPUオフロード（非常に遅い、毎秒1〜3トークン）を使用した場合のみ可能です。実用的ではありません。より良い選択肢：Q4の13Bモデルを使用してください（同じVRAM、はるかに高速で品質も優れています）。' } },
          { '@type': 'Question', name: '実際のVRAM使用量が計算値より低い場合はどうなりますか？', acceptedAnswer: { '@type': 'Answer', text: '計算式は保守的で、オーバーヘッドが含まれています。実際の使用量が低い場合は、バッチ処理、より長いコンテキスト、またはセーフティマージンのためのヘッドルームが増えます。nvidia-smiを使用して実際の使用量を測定し、モデルをベンチマークしてパフォーマンスを確認してください。' } },
          { '@type': 'Question', name: '計算されたVRAMサイズぴったりのGPUを購入すべきですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。常に計算値より25%多いVRAMを購入してください。18 GBが必要な場合は、24 GB GPUを購入してください。このセーフティマージンは、コンテキストの増加、バッチ処理、システムプロセスを考慮します。ぴったりサイズの購入はヘッドルームがなく、メモリ不足エラーを引き起こします。' } },
          { '@type': 'Question', name: '2026年に13Bモデルに最適なGPUはどれですか？', acceptedAnswer: { '@type': 'Answer', text: 'Q4〜Q5での単一ユーザーチャットにはRTX 4070 Ti（12 GB）。Q8品質またはバッチ処理が必要な場合はRTX 4080（16 GB）。Macを使用している場合はM5 Max（36 GB）。3つともLlama 3.3、Qwen2.5、Mistral 3.1 13Bモデルを快適に実行できます。' } },
          { '@type': 'Question', name: 'RTX 4090で70Bモデルを実行できますか？', acceptedAnswer: { '@type': 'Answer', text: 'Q4量子化（35 GB）＋CPUオフロード（遅い、毎秒3〜5トークン）でのみ可能で、実用的ではありません。より良いアプローチ：RTX 4090でQ5の32Bモデル（20 GB）を使用して高速・高品質な応答を得る。または、オフロードなしでQ4の70Bを実行するためにRTX 5090（32 GB）にアップグレードする。' } }
        ]
      },
      softwareApplicationSchema: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'ローカルLLM向けVRAMカリキュレーター',
        description: 'ローカルLLM向けインタラクティブVRAMカリキュレーター。モデルサイズ（1B〜405B）、量子化（FP16、Q8、Q5、Q4、Q3、Q2）、コンテキスト長（2K〜128Kトークン）、バッチサイズ（1〜8）の任意の組み合わせに対して正確なGPU VRAM要件を計算。RTX 3060/4070/4080/4090およびM5 Maxのリアルタイムな互換性チェックを含む。',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Web',
        url: 'https://www.promptquorum.com/ja/local-llms/vram-calculator-local-llm',
        inLanguage: 'ja',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        creator: {
          '@type': 'Organization',
          name: 'PromptQuorum'
        }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'ローカルLLMのVRAM要件を計算する方法',
        description: '計算式（モデルの十億パラメータ × 量子化ビット数）÷ 8を使用して、任意のローカルLLMモデルに必要な正確なVRAMを計算します。コンテキスト、バッチ、システムオーバーヘッドを含む。',
        inLanguage: 'ja',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'モデルサイズを特定する', text: 'パラメータ数を十億単位で確認します（例：7B = 70億パラメータ、13B = 130億）。一般的なモデル：Llama 3.2（7B、13B）、Qwen2.5（7B、14B、32B、72B）、Mistral 3.1（7B、32B）、Claude（サイズは様々）。' },
          { '@type': 'HowToStep', position: 2, name: '量子化レベルを選択する', text: '量子化ビット数を選択します：FP16（品質100%、最大）、Q8（99%）、Q5（95%、推奨バランス）、Q4（90〜95%、コンシューマー標準）、Q3（80〜85%、極端な圧縮）、Q2（70%、エッジデバイス）。' },
          { '@type': 'HowToStep', position: 3, name: '計算式を適用する', text: '計算：VRAM（GB）=（十億単位のモデルサイズ × 量子化ビット数）÷ 8。例：Q4での13Bモデル = （13 × 4）÷ 8 = 6.5 GBの基本モデルウェイト。' },
          { '@type': 'HowToStep', position: 4, name: 'オーバーヘッドを考慮する', text: 'コンテキスト（4kトークンで1〜3 GB）、バッチ処理（×バッチサイズ）、システム（1〜2 GB）のオーバーヘッドを追加します。合計 = 基本 + オーバーヘッド。' },
          { '@type': 'HowToStep', position: 5, name: '25%のセーフティマージンを適用する', text: '合計を1.25倍して推奨VRAMを取得します。例：10 GBの計算 = 12〜16 GB GPUを購入。これにより実行時の変動とヘッドルームが考慮されます。' },
          { '@type': 'HowToStep', position: 6, name: 'GPU互換性を確認する', text: '推奨VRAMと利用可能なGPUを比較します。RTX 4090（24 GB）、RTX 4080（16 GB）、RTX 4070 Ti（12 GB）、RTX 3060（12 GB）、M5 Max（36 GB）。インタラクティブカリキュレーターをリアルタイムマッチングに使用してください。' }
        ]
      },
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: 'クイックファクト', anchor: '#quick-facts' },
        { label: '一文で', anchor: '#in-one-sentence' },
        { label: 'わかりやすく言うと', anchor: '#in-plain-terms' },
        { label: 'VRAM計算式', anchor: '#vram-formula' },
        { label: 'インタラクティブカリキュレーター', anchor: '#interactive-calculator' },
        { label: '量子化レベルの解説', anchor: '#quantization-levels' },
        { label: 'クイックリファレンステーブル', anchor: '#quick-reference' },
        { label: '実際の使用例', anchor: '#real-world-examples' },
        { label: 'お使いのGPUに合うモデルは？', anchor: '#hardware-fit' },
        { label: '隠れたVRAMオーバーヘッド', anchor: '#hidden-overhead' },
        { label: '精度とマージン', anchor: '#accuracy' },
        { label: 'よくある間違い', anchor: '#common-mistakes' },
        { label: '地域別デプロイ', anchor: '#regional-context' },
        { label: 'FAQ', anchor: '#faq' },
        { label: '関連読み物', anchor: '#related-reading' },
      ],
      gammaEmbedUrl: '/presentations/vram-calculator-local-llm-static.html',
      gammaDescription: '下のスライドデッキでは以下を解説します：VRAM計算式（モデルの十億パラメータ × 量子化ビット数）÷ 8、Q2〜FP16の量子化レベルと品質トレードオフ、クイックリファレンステーブル（3B〜70Bモデル）、実際のGPUシナリオ（RTX 4090、4080、M5 Max）、地域別コンプライアンス（EU GDPR、日本APPI、中国データセキュリティ法）。VRAMカリキュレーターリファレンスカードとしてPDFをダウンロードしてください。',
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'VRAM = （モデルサイズ × 量子化ビット数）÷ 8',
            'FP16 = 16ビット、Q8 = 8、Q5 = 5、Q4 = 4ビット',
            '例：Q4の13Bモデル = （13 × 4）÷ 8 = 6.5 GB',
            'コンテキスト、システムオーバーヘッド、セーフティマージンのために常に25%のバッファーを追加する',
            '2026年4月現在、この計算式は±10%の精度です',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: 'クイックファクト：GPUごとのVRAM要件',
          items: [
            '**RTX 4090（24 GB）：** Llama 3.1 7B（Q4で3.5 GB）、13B（Q5で8.1 GB）、70B（Q4でオフロードあり）',
            '**RTX 4080（16 GB）：** Llama 3.1 7B（Q4で3.5 GB）、13B（Q5で8.1 GB）、32B（Q4で16 GB）',
            '**RTX 4070 Ti（12 GB）：** Llama 3.1 7B（Q4で3.5 GB）、13B（Q5で8.1 GB、ギリギリ）',
            '**M5 Max Mac（36 GB統合）：** Llama 3.1 13B（FP16で26 GB）、70Bは極端な量子化なしでは不可能',
            '**経験則：** コンテキスト、バッチ処理、システムオーバーヘッドのために計算結果より常に25〜40%多くVRAMを確保する',
          ],
        },
        inOneSentence: {
          id: 'in-one-sentence',
          title: '一文で',
          content: '必要なVRAM（GB）は、モデルパラメータ（十億単位）に量子化ビット数（FP16は16、Q8は8、Q4は4など）を掛けて8で割った値です。',
        },
        inPlainTerms: {
          id: 'in-plain-terms',
          title: 'わかりやすく言うと',
          content: 'VRAMを本棚のスペースと考えてください。大きな本（70Bなど多くのパラメータを持つモデル）はより多くのスペースを必要とします。小さな本（Q4量子化）は大きな本（FP16）よりも少ないスペースで済みます。計算式は必要な「棚の数」（GB）を正確に教えてくれます。会話、複数の同時リクエスト、システムソフトウェアのために、常に余裕の棚を確保しておいてください。',
        },
        formula: {
          id: 'vram-formula',
          title: 'VRAM計算式とは？',
          image: '/images/vram-calculator-local-llm-formula-en.svg',
          imageCaption: 'VRAM計算式と3つの計算例：7BモデルのQ4 = 3.5 GB、13BのQ5 = 8.1 GB、70BのQ8 = 70 GB。コンテキスト、バッチ処理、システムオーバーヘッドのために常に25〜40%のバッファーを追加してください。',
          content: [
            'VRAM要件の計算式は驚くほどシンプルです：',
            '💡 **プロのヒント：** この計算式はモデルウェイトのみを計算します。コンテキスト、バッチ処理、システムオーバーヘッドにより、実際のVRAM使用量は25〜40%多くなります。常にセーフティマージンを追加してください。',
          ],
          codeBlock: 'VRAM (GB) = (Model Size in Billions × Quantization Bits) ÷ 8\n\nExample:\n- 7B model at 4-bit quantization\n- (7 × 4) ÷ 8 = 3.5 GB\n\n- 13B model at 5-bit quantization\n- (13 × 5) ÷ 8 = 8.125 GB\n\n- 70B model at 8-bit quantization\n- (70 × 8) ÷ 8 = 70 GB',
          codeLanguage: 'bash',
        },
        calculator: {
          id: 'interactive-calculator',
          title: 'インタラクティブVRAMカリキュレーター',
          content: 'このカリキュレーターを使用して、モデル、量子化、コンテキスト、バッチサイズの任意の組み合わせに対する正確なVRAM要件を計算してください。設定を選択して、どのGPUが適合するかを確認します。',
          component: 'VramCalculator',
        },
        quantization: {
          id: 'quantization-levels',
          title: '量子化レベルの意味は？',
          image: '/images/vram-calculator-local-llm-quant-levels-en.svg',
          imageCaption: '量子化レベルの比較：FP16（品質100%）、Q8（99%）、Q5（95%、推奨）、Q4（90〜95%）、Q3（80〜85%）、Q2（70%）。Q5は7Bモデルを14 GBから4.4 GBに削減し、品質損失はわずか5%です。',
          content: '🔍 **重要なインサイト：** 量子化はファイルサイズと品質をトレードオフします。Q5がスイートスポットです（品質95%、68%小さい）。Q4はほとんどのユーザーに許容範囲内です。Q3以下はエッジデバイスまたはVRAMが著しく制限されている場合のみ。',
          rows: [
            { '量子化': 'FP16（16ビット）', 'サイズ削減': 'なし（ベースライン）', '品質': '100%（完璧）', '速度': 'ベースライン', '用途': '研究、ファインチューニング' },
            { '量子化': 'Q8（8ビット）', 'サイズ削減': '50%', '品質': '99%（識別不可能）', '速度': 'ベースライン', '用途': '本番環境、ローカルサーバー' },
            { '量子化': 'Q6（6ビット）', 'サイズ削減': '62.5%', '品質': '98%（無視できる）', '速度': 'ベースライン', '用途': 'バランスの取れた使用' },
            { '量子化': 'Q5（5ビット）', 'サイズ削減': '68.75%', '品質': '95%（わずかな損失）', '速度': 'ベースライン', '用途': '良好な圧縮、コンシューマー' },
            { '量子化': 'Q4（4ビット）', 'サイズ削減': '75%', '品質': '90〜95%（許容範囲）', '速度': 'ベースライン', '用途': '最大圧縮' },
            { '量子化': 'Q3（3ビット）', 'サイズ削減': '81%', '品質': '80〜85%（顕著な損失）', '速度': '高速', '用途': '極端な圧縮、CPU' },
            { '量子化': 'Q2（2ビット）', 'サイズ削減': '87.5%', '品質': '70%（目に見える損失）', '速度': '最速', '用途': '小型モデル、エッジデバイス' },
          ],
          columns: ['量子化', 'サイズ削減', '品質', '速度', '用途'],
        },
        quickRef: {
          id: 'quick-reference',
          title: 'クイックリファレンステーブル：モデルと量子化別のVRAM',
          image: '/images/vram-calculator-local-llm-quick-ref-en.svg',
          imageCaption: 'VRAMクイックリファレンスマトリックス：FP16、Q8、Q5、Q4量子化での3B〜70Bモデル。緑 = 12 GB GPUに収まる。黄 = 16〜24 GBが必要。赤 = 40 GB以上またはマルチGPUが必要。',
          rows: [
            { 'モデル': '3B', 'FP16': '6 GB', 'Q8': '3 GB', 'Q5': '1.9 GB', 'Q4': '1.5 GB' },
            { 'モデル': '7B', 'FP16': '14 GB', 'Q8': '7 GB', 'Q5': '4.4 GB', 'Q4': '3.5 GB' },
            { 'モデル': '13B', 'FP16': '26 GB', 'Q8': '13 GB', 'Q5': '8.1 GB', 'Q4': '6.5 GB' },
            { 'モデル': '32B', 'FP16': '64 GB', 'Q8': '32 GB', 'Q5': '20 GB', 'Q4': '16 GB' },
            { 'モデル': '70B', 'FP16': '140 GB', 'Q8': '70 GB', 'Q5': '43.75 GB', 'Q4': '35 GB' },
          ],
          columns: ['モデル', 'FP16', 'Q8', 'Q5', 'Q4'],
        },
        realWorld: {
          id: 'real-world-examples',
          title: '実際の使用例',
          image: '/images/vram-calculator-local-llm-gpu-scenarios-en.svg',
          imageCaption: '実際のGPUシナリオ：RTX 4090（24 GB）、RTX 4080（16 GB）、RTX 4070 Ti（12 GB）、M5 Max Mac（36 GB）、RTX 3060（12 GB）——各GPUがさまざまな量子化レベルで実行できるLlama 3.1モデル。',
          content: [
            '一般的なシナリオの実際のVRAM計算：',
            '⚠️ **警告：** これらの計算はモデルウェイトのみです。コンテキスト、バッチ処理、システムオーバーヘッドのために25〜40%を追加してください。例：13B Q5 = 8.1 GBモデル + 2〜3 GBオーバーヘッド = 実際には10〜11 GB。',
          ],
          items: [
            '**RTX 4070 Ti（12 GB）**：Llama 3.1 7B（Q4で3.5 GB）✓（余裕あり）。Llama 3.1 13B（Q5で8.1 GB）✓（コンテキスト/バッチなしでギリギリ動作）。',
            '**RTX 4090（24 GB）**：Llama 3.1 70B（Q5で43.75 GB）✗（大きすぎ）。Llama 3.1 70B（Q4で35 GB）✗（まだ大きすぎ）。Llama 3.1 70B（Q4でオフロードあり）= 動作可（遅い、毎秒3〜5トークン）。',
            '**M5 Max Mac（36 GB）**：Llama 3.1 13B（FP16で26 GB）✓（動作可）。Llama 3.1 70B = 不可能（Q2でも品質損失約70%）。',
          ],
        },
        overhead: {
          id: 'hidden-overhead',
          title: '考慮すべき隠れたVRAMオーバーヘッドは？',
          image: '/images/vram-calculator-local-llm-overhead-en.svg',
          imageCaption: '隠れたVRAMオーバーヘッドの内訳：コンテキストウィンドウ（4kトークンで2〜3 GB）、バッチ処理（batch=4の場合×4）、システムオーバーヘッド（500 MB〜1 GB）、合計25〜40%のセーフティマージン。',
          content: [
            '**計算式はモデルウェイトのみを計算します。** 実際のVRAM使用量はいくつかの要因により高くなります。計算量を超えて25〜40%の追加予算を確保してください。',
            'コンテキストウィンドウ（キーバリューキャッシュ）は推論中に会話履歴を保存します。4kトークンのコンテキストは7Bモデルで約2〜3 GBを使用します。',
            '📌 **重要ポイント：** バッチ処理はVRAM使用量を線形的に増加させます。各追加の同時プロンプト（複数のリクエストを同時処理する場合）は500 MB〜2 GBの追加メモリを使用します。batch=4を実行する場合、単一リクエストのVRAMを4倍にしてオーバーヘッドを追加してください。',
            'オペレーティングシステムと推論エンジンフレームワーク（Ollama、vLLM、llama.cpp）からのシステムオーバーヘッドは500 MB〜1 GBを予約します。GPU選択時に常にセーフティマージンを維持してください。',
          ],
        },
        hardwareGuide: {
          id: 'hardware-fit',
          title: 'お使いのGPUに適合するローカルLLMは？2026ガイド',
          content: [
            '正確な適合を確認するには上のインタラクティブカリキュレーターを使用してください。以下は一般的なGPUシナリオと推奨モデルです。',
          ],
          items: [
            '**RTX 3060（12 GB）：** 最適モデル：Qwen2.5 7B Q5（4.4 GB）✓。代替：Llama 3.2 8B Q4（4 GB）✓。不可能：32B以上のモデル。',
            '**RTX 4070（12 GB）：** 最適モデル：Qwen2.5 13B Q4（6.5 GB）✓。余裕あり：Llama 3.2 8B Q5（5 GB）✓。不可能：32Bモデル。',
            '**RTX 4070 Ti（12 GB）：** 最適モデル：Qwen2.5 13B Q5（8.1 GB）✓。ギリギリ：Llama 3.3 13B Q4（6.5 GB）✓。非推奨：バッチ処理。',
            '**RTX 4080（16 GB）：** 最適モデル：Qwen2.5 32B Q4（16 GB）✓ギリギリ。余裕あり：Mistral 3.1 24B Q5（15 GB）✓。推奨：Llama 3.3 13B Q8（13 GB）✓。',
            '**RTX 4090（24 GB）：** 最適モデル：Qwen2.5 32B Q5（20 GB）✓。オフロードあり：Llama 3.3 70B Q4（35 GB—オフロード必要）。余裕あり：Q5/Q8の任意の32Bモデル。',
            '**RTX 5090（32 GB、発売予定）：** 最適モデル：Llama 3.3 70B Q4（35 GB—ギリギリ）。より良い：Qwen2.5 72B Q3（27 GB）✓。余裕あり：バッチ処理付きQ5以上の70Bモデル。',
          ],
        },
        accuracy: {
          id: 'accuracy',
          title: '計算式の精度は？',
          image: '/images/vram-calculator-local-llm-accuracy-en.svg',
          imageCaption: 'VRAM計算式の精度±10%：量子化形式（GGUF対GPTQ対AWQ）、モデルアーキテクチャ（Transformer対MoE）、推論エンジン（vLLM対llama.cpp対Ollama）による変動。',
          content: [
            '**計算式はほとんどの場合±10%の精度です。** 実際のVRAM使用量は実装、モデルアーキテクチャ、推論エンジンの最適化によって異なります。',
            '変動の原因には、異なる量子化形式（GGUF対safetensors対AWQ）、モデルアーキテクチャ（Transformer対非Transformer）、推論エンジン固有の最適化（vLLM、llama.cpp、Ollama）が含まれます。',
            '2026年4月現在、計算式を保守的な推定値として扱ってください。コンテキストオーバーヘッド、バッチ処理、システムプロセスを考慮するために、GPUを購入する際は常に25%のセーフティマージンを追加してください。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'VRAM計算でよくある間違い',
          image: '/images/vram-calculator-local-llm-mistakes-en.svg',
          imageCaption: 'VRAMでよくある4つの間違い：コンテキストオーバーヘッドを忘れる（1.5〜3 GBが追加される）、70Bパラメータと70 GB VRAMを混同する、1〜2 GBのシステムオーバーヘッドを無視する、25%マージンなしで計算サイズぴったりのGPUを購入する。',
          items: [
            '**コンテキストオーバーヘッドを忘れること。** Q4の7Bモデルは3.5 GBですが、4kコンテキストでは合計5〜6 GBが必要です。',
            '**量子化を考慮せずにHuggingFaceのモデルサイズを使用すること。** 70Bは700億パラメータを意味し、70 GB VRAMではありません。',
            '**システムオーバーヘッドを考慮しないこと。** モデルはGPU VRAMの全容量を使用できません。OSと推論エンジンのために1〜2 GBを予約してください。',
            '**計算サイズぴったりのGPUを購入すること。** 常に25%多く購入してください。18 GBが必要な計算結果 = 24 GB GPUを購入してください。',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: '地域別デプロイの考慮事項',
          content: [
            '**日本（METI・APPI）：** 経済産業省（METI）のAIガバナンス2024ガイドラインは、企業のAIシステムに対してデータ管理の透明性と説明責任を要求しています。個人情報保護法（APPI）の下、個人データの取り扱いには慎重な管理が必要です。ローカルLLM推論はデータを日本国内に保持し、日本の企業デプロイに適したコンプライアンスを実現します。このVRAMカリキュレーターはMETI準拠のオンプレミスシステムのサイジングに役立ちます。',
            '**アジア太平洋地域（データ越境移転）：** APACでは多くの国でデータ越境移転規制が強化されています。シンガポール（PDPA）、韓国（PIPA）、オーストラリア（Privacy Act）はいずれもデータ処理に関する厳格な要件を持っています。ローカル推論はデータをオンプレミスに保持し、越境データフローの規制を回避します。',
            '**グローバル展開：** すべての地域で、ローカル推論はクラウドAPIよりも強力なデータプライバシー保証を提供します。このVRAMカリキュレーターはコンプライアンスに準拠したプライバシー優先AIシステムの設計に不可欠です。',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'FAQ：VRAMとGPU要件',
          faqs: [
            { q: 'この計算式はすべてのモデルタイプに対応していますか？', a: 'はい。計算式（モデルの十億パラメータ × 量子化ビット数）÷ 8は、すべてのTransformerベースのモデル（Llama、Qwen、Mistral、Claudeなど）に適用されます。非Transformerアーキテクチャ（RNNなど）はまれで、調整が必要な場合があります。' },
            { q: 'どの量子化レベルを使用すべきですか？', a: 'ほとんどの用途：Q5が最適なバランスを提供します（品質95%、サイズ68%削減）。コンシューマーGPU：Q4が標準です（品質90〜95%、75%削減）。本番環境：VRAMが許せばQ8（品質99%）。選択肢がない限り、Q3以下は避けてください。' },
            { q: 'システムRAMはどのくらい必要ですか？', a: 'オフロードには最低16 GB。VRAMオフロード（CPUスピルオーバー）を使用する場合、システムRAMがフォールバックになります。バッチ処理には、モデルオフロード要件を超えて8〜16 GBのシステムRAMを追加してください。単一ユーザーチャットには16 GBで十分です。' },
            { q: 'バッチサイズはVRAM計算に影響しますか？', a: 'はい。計算式は単一リクエストのVRAMを計算します。バッチサイズはVRAMを線形的に追加します：各同時リクエストがコンテキスト長に応じて約500 MB〜2 GBを追加します。batch=4を実行する場合、計算量に2〜8 GBを追加してください。' },
            { q: '12 GB GPUで70Bモデルを実行できますか？', a: '極端な量子化（Q2、品質損失約70%）とCPUオフロード（非常に遅い、毎秒1〜3トークン）を使用した場合のみ可能です。実用的ではありません。より良い選択肢：Q4の13Bモデルを使用してください（同じVRAM、はるかに高速で品質も優れています）。' },
            { q: '実際のVRAM使用量が計算値より低い場合はどうなりますか？', a: '計算式は保守的で、オーバーヘッドが含まれています。実際の使用量が低い場合は、バッチ処理、より長いコンテキスト、またはセーフティマージンのためのヘッドルームが増えます。nvidia-smiを使用して実際の使用量を測定し、モデルをベンチマークしてパフォーマンスを確認してください。' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連読み物',
          items: [
            '[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026) -- 予算に合わせた完全なGPUとCPUの推奨事項。',
            '[ローカルLLMに最適なGPU](/ja/local-llms/best-gpus-for-local-llms) -- RTX 4090、4080、4070 Tiのベンチマークとコスト分析。',
            '[24GB VRAMで70Bモデルを実行](/ja/local-llms/run-70b-models-24gb-vram) -- 大型モデルの量子化とオフロードテクニック。',
            '[LLM量子化の解説](/ja/local-llms/llm-quantization-explained) -- Q4、Q5、Q8形式と品質トレードオフの詳細。',
            '[ローカルLLMの消費電力](/ja/local-llms/local-llm-power-consumption) -- 電源、冷却、電気代の分析。',
            '[マルチGPUローカルLLM](/ja/local-llms/multi-gpu-local-llms) -- 70B以上のモデルのレイヤー分割と分散推論。',
          ],
        },
        sources: {
          id: 'sources',
          title: 'ソース',
          items: [
            '[GGUF仕様](https://github.com/ggerganov/ggml/blob/master/docs/gguf.md) -- 量子化ファイル形式に関するggerganov/ggmlドキュメント。',
            '[Transformers量子化ドキュメント](https://huggingface.co/docs/transformers/quantization) -- 量子化メソッドに関するHugging Face公式ガイド。',
            '[Ollamaドキュメント](https://ollama.ai) -- モデル管理に関する公式Ollamaガイド。',
            '[vLLMパフォーマンスガイド](https://docs.vllm.ai) -- vLLMフレームワーク最適化ドキュメント。',
          ],
        },
      },
    },
    zh: {
      theme: '硬件与性能',
      title: 'VRAM计算器2026：7B/13B/70B LLM的GPU显存需求（Q4、Q5、Q8）',
      seoTitle: 'VRAM计算器2026：7B/13B/70B LLM的GPU显存需求（Q4、Q5、Q8）',
      intro: '本地LLM专用交互式VRAM计算器。输入模型大小、量化级别、上下文长度和批次大小，精确计算GPU显存需求。支持1B至405B模型的FP16、Q8、Q5、Q4量化。2026年4月更新：含RTX 4090、4080、3060适配分析和开销计算。',
      metaDescription: '交互式VRAM计算器：精确计算7B（Q4需3.5 GB）、13B（Q4需6.5 GB）、70B（Q4需35 GB）LLM的GPU需求。验证RTX 4090、4080、4070 Ti适配性。支持Q4/Q5/Q8量化，包含上下文、批次和系统开销。',
      publishDate: '2026-04-04',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**本指南介绍如何为任意模型和硬件组合计算精确的VRAM需求。公式简单：（模型大小GB × 量化位数）÷ 8 = 所需VRAM。**',
      audience: '在消费级硬件上首次运行本地LLM的初学者',
      readTime: '阅读约10分钟',
      educationalLevel: 'Beginner to Intermediate',
      primaryTerm: 'VRAM计算器',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '本地LLM VRAM计算器：精确计算GPU显存需求',
        description: '本地LLM VRAM计算器2026：使用公式VRAM =（模型十亿参数 × 量化位数）÷ 8。含RTX 4090、4080、M5 Max示例，以及开销、批处理和精度数据。',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        datePublished: '2026-04-04',
        dateModified: '2026-04-19',
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: '初学者',
        audience: { '@type': 'Audience', audienceType: '运行本地LLM的开发者和初学者' },
        about: [
          { '@type': 'Thing', name: 'VRAM' },
          { '@type': 'Thing', name: 'GPU显存' },
          { '@type': 'Thing', name: 'Llama模型' },
          { '@type': 'Thing', name: '量化' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        url: 'https://www.promptquorum.com/zh/local-llms/vram-calculator-local-llm',
        inLanguage: 'zh',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'zh',
        mainEntity: [
          { '@type': 'Question', name: '该公式适用于所有模型类型吗？', acceptedAnswer: { '@type': 'Answer', text: '适用。公式（模型十亿参数 × 量化位数）÷ 8适用于所有基于Transformer的模型（Llama、Qwen、Mistral、Claude等）。非Transformer架构（如RNN）较为罕见，可能需要调整。' } },
          { '@type': 'Question', name: '应该使用哪种量化级别？', acceptedAnswer: { '@type': 'Answer', text: '大多数场景：Q5提供最佳平衡（95%质量，68%体积缩减）。消费级GPU：Q4是标准选择（90-95%质量，75%缩减）。生产环境：VRAM允许时使用Q8（99%质量）。除非别无选择，否则避免Q3及以下。' } },
          { '@type': 'Question', name: '需要多少系统内存？', acceptedAnswer: { '@type': 'Answer', text: '卸载至少需要16 GB。使用VRAM卸载（CPU溢出）时，系统内存作为后备。批处理需在模型卸载基础上额外增加8-16 GB系统内存。单用户聊天16 GB已足够。' } },
          { '@type': 'Question', name: '批次大小影响VRAM计算吗？', acceptedAnswer: { '@type': 'Answer', text: '影响。该公式计算单请求VRAM。批次大小线性增加VRAM：每个并发请求根据上下文长度增加约500 MB至2 GB。运行batch=4时，在计算量基础上再加2-8 GB。' } },
          { '@type': 'Question', name: '12 GB GPU能运行70B模型吗？', acceptedAnswer: { '@type': 'Answer', text: '仅在极端量化（Q2，质量损失约70%）和CPU卸载（非常慢，每秒1-3个token）的条件下可行，实用性差。更好的选择：使用Q4的13B模型（相同VRAM，速度更快，质量更好）。' } },
          { '@type': 'Question', name: '实际VRAM用量低于计算值怎么办？', acceptedAnswer: { '@type': 'Answer', text: '该公式偏保守并已含开销。实际用量低意味着批处理、更长上下文或安全余量有更多空间。使用nvidia-smi测量实际用量，然后对模型进行基准测试以确认性能。' } },
          { '@type': 'Question', name: '应该购买刚好达到计算VRAM大小的GPU吗？', acceptedAnswer: { '@type': 'Answer', text: '不应该。始终购买比计算值多25%的VRAM。如果需要18 GB，购买24 GB GPU。此安全余量考虑到上下文增长、批处理和系统进程。刚好匹配的购买没有余量，会导致内存不足错误。' } },
          { '@type': 'Question', name: '2026年13B模型的最佳GPU是什么？', acceptedAnswer: { '@type': 'Answer', text: 'Q4-Q5单用户聊天推荐RTX 4070 Ti（12 GB）。需要Q8质量或批处理时选RTX 4080（16 GB）。使用Mac时选M5 Max（36 GB）。三者均可轻松运行Llama 3.3、Qwen2.5和Mistral 3.1 13B模型。' } },
          { '@type': 'Question', name: 'RTX 4090能运行70B模型吗？', acceptedAnswer: { '@type': 'Answer', text: '仅能以Q4量化（35 GB）+CPU卸载（慢，每秒3-5个token）运行，实用性差。更好方案：在RTX 4090上使用Q5的32B模型（20 GB）获得快速高质量响应；或升级到RTX 5090（32 GB）无需卸载运行Q4的70B。' } },
        ],
      },
      softwareApplicationSchema: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: '本地LLM VRAM计算器',
        description: '本地LLM专用交互式VRAM计算器。精确计算任意模型大小（1B至405B）、量化级别（FP16、Q8、Q5、Q4、Q3、Q2）、上下文长度（2K至128K token）和批次大小（1至8）组合的GPU VRAM需求。含RTX 3060/4070/4080/4090和M5 Max实时兼容性检查。',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Web',
        url: 'https://www.promptquorum.com/zh/local-llms/vram-calculator-local-llm',
        inLanguage: 'zh',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        creator: { '@type': 'Organization', name: 'PromptQuorum' },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: '如何计算本地LLM的VRAM需求',
        description: '使用公式（模型十亿参数 × 量化位数）÷ 8计算任意本地LLM模型所需的精确VRAM。包含上下文、批次和系统开销。',
        inLanguage: 'zh',
        step: [
          { '@type': 'HowToStep', position: 1, name: '确定模型大小', text: '确定参数数量（以十亿为单位，例如7B = 70亿参数，13B = 130亿）。常见模型：Llama 3.2（7B、13B）、Qwen2.5（7B、14B、32B、72B）、Mistral 3.1（7B、32B）、Claude（大小不等）。' },
          { '@type': 'HowToStep', position: 2, name: '选择量化级别', text: '选择量化位数：FP16（100%质量，最大）、Q8（99%）、Q5（95%，推荐平衡）、Q4（90-95%，消费级默认）、Q3（80-85%，极端压缩）、Q2（70%，边缘设备）。' },
          { '@type': 'HowToStep', position: 3, name: '应用公式', text: '计算：VRAM（GB）=（十亿单位模型大小 × 量化位数）÷ 8。示例：Q4的13B模型 =（13 × 4）÷ 8 = 6.5 GB基础模型权重。' },
          { '@type': 'HowToStep', position: 4, name: '计入开销', text: '添加上下文（4k token约1-3 GB）、批处理（×批次大小）和系统（1-2 GB）开销。总计 = 基础 + 开销。' },
          { '@type': 'HowToStep', position: 5, name: '应用25%安全余量', text: '将总计乘以1.25得到推荐VRAM。示例：计算10 GB = 购买12-16 GB GPU。这考虑了运行时变化和余量空间。' },
          { '@type': 'HowToStep', position: 6, name: '检查GPU兼容性', text: '将推荐VRAM与可用GPU对比。RTX 4090（24 GB）、RTX 4080（16 GB）、RTX 4070 Ti（12 GB）、RTX 3060（12 GB）、M5 Max（36 GB）。使用交互式计算器进行实时匹配。' },
        ],
      },
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: '快速概览', anchor: '#quick-facts' },
        { label: '一句话总结', anchor: '#in-one-sentence' },
        { label: '通俗解释', anchor: '#in-plain-terms' },
        { label: 'VRAM计算公式', anchor: '#vram-formula' },
        { label: '交互式计算器', anchor: '#interactive-calculator' },
        { label: '量化级别详解', anchor: '#quantization-levels' },
        { label: '快速参考表', anchor: '#quick-reference' },
        { label: '实际使用案例', anchor: '#real-world-examples' },
        { label: '哪款GPU适合您的模型？', anchor: '#hardware-fit' },
        { label: '隐藏的VRAM开销', anchor: '#hidden-overhead' },
        { label: '精度与余量', anchor: '#accuracy' },
        { label: '常见错误', anchor: '#common-mistakes' },
        { label: '区域合规部署', anchor: '#regional-context' },
        { label: '常见问题', anchor: '#faq' },
        { label: '相关阅读', anchor: '#related-reading' },
      ],
      gammaEmbedUrl: '/presentations/vram-calculator-local-llm-static.html',
      gammaDescription: '下方幻灯片涵盖：VRAM计算公式（模型十亿参数 × 量化位数）÷ 8、Q2至FP16量化级别与质量权衡、快速参考表（3B至70B模型）、实际GPU场景（RTX 4090、4080、M5 Max），以及区域合规（欧盟GDPR、日本APPI、中国数据安全法）。下载PDF作为VRAM计算器参考卡片。',
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'VRAM =（模型大小 × 量化位数）÷ 8',
            'FP16 = 16位，Q8 = 8，Q5 = 5，Q4 = 4位',
            '示例：Q4的13B模型 =（13 × 4）÷ 8 = 6.5 GB',
            '始终为上下文、系统开销和安全余量额外预留25%',
            '截至2026年4月，该公式精度在±10%以内',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: '快速概览：各GPU的VRAM需求',
          items: [
            '**RTX 4090（24 GB）：** Llama 3.1 7B（Q4需3.5 GB）、13B（Q5需8.1 GB）、70B（Q4需卸载）',
            '**RTX 4080（16 GB）：** Llama 3.1 7B（Q4需3.5 GB）、13B（Q5需8.1 GB）、32B（Q4需16 GB）',
            '**RTX 4070 Ti（12 GB）：** Llama 3.1 7B（Q4需3.5 GB）、13B（Q5需8.1 GB，较紧张）',
            '**M5 Max Mac（36 GB统一内存）：** Llama 3.1 13B（FP16需26 GB）、70B无极端量化则不可用',
            '**经验法则：** 在公式计算结果之上，始终为上下文、批处理和系统开销额外预留25-40% VRAM',
          ],
        },
        inOneSentence: {
          id: 'in-one-sentence',
          title: '一句话总结',
          content: '所需VRAM（GB）= 模型参数（十亿为单位）× 量化位数（FP16为16、Q8为8、Q4为4等）÷ 8。',
        },
        inPlainTerms: {
          id: 'in-plain-terms',
          title: '通俗解释',
          content: '把VRAM想象成书架空间。大部头书（参数更多的模型，如70B）占用更多空间。小书（Q4量化）比大书（FP16）占用更少空间。公式告诉你确切需要多少"书架"（GB）。始终留出额外空间，用于对话、同时处理多个请求和系统软件。',
        },
        formula: {
          id: 'vram-formula',
          title: 'VRAM计算公式是什么？',
          image: '/images/vram-calculator-local-llm-formula-en.svg',
          imageCaption: 'VRAM公式含3个计算示例：7B模型Q4 = 3.5 GB，13B Q5 = 8.1 GB，70B Q8 = 70 GB。始终为上下文、批处理和系统开销额外预留25-40%。',
          content: [
            'VRAM需求公式出奇地简单：',
            '💡 **专业提示：** 该公式仅计算模型权重。由于上下文、批处理和系统开销，实际VRAM使用量高出25-40%。始终添加安全余量。',
          ],
          codeBlock:
            'VRAM (GB) = (Model Size in Billions × Quantization Bits) ÷ 8\n\nExample:\n- 7B model at 4-bit quantization\n- (7 × 4) ÷ 8 = 3.5 GB\n\n- 13B model at 5-bit quantization\n- (13 × 5) ÷ 8 = 8.125 GB\n\n- 70B model at 8-bit quantization\n- (70 × 8) ÷ 8 = 70 GB',
          codeLanguage: 'bash',
        },
        calculator: {
          id: 'interactive-calculator',
          title: '交互式VRAM计算器',
          content: '使用此计算器为任意模型、量化、上下文和批次大小组合计算精确的VRAM需求。选择您的配置，查看哪些GPU适配。',
          component: 'VramCalculator',
        },
        quantization: {
          id: 'quantization-levels',
          title: '量化级别意味着什么？',
          image: '/images/vram-calculator-local-llm-quant-levels-en.svg',
          imageCaption: '量化级别对比：FP16（100%质量）、Q8（99%）、Q5（95%，推荐）、Q4（90-95%）、Q3（80-85%）、Q2（70%）。Q5将7B模型从14 GB缩减至4.4 GB，质量仅损失5%。',
          content: '🔍 **关键洞察：** 量化以文件大小换质量。Q5是最优折中点（95%质量，缩小68%）。Q4对大多数用户可接受。Q3及以下仅适用于边缘设备或VRAM极度受限的情况。',
          rows: [
            { '量化': 'FP16（16位）', '体积缩减': '无（基准）', '质量': '100%（完美）', '速度': '基准', '适用场景': '研究、微调' },
            { '量化': 'Q8（8位）', '体积缩减': '50%', '质量': '99%（无感知差异）', '速度': '基准', '适用场景': '生产环境、本地服务器' },
            { '量化': 'Q6（6位）', '体积缩减': '62.5%', '质量': '98%（可忽略）', '速度': '基准', '适用场景': '均衡使用' },
            { '量化': 'Q5（5位）', '体积缩减': '68.75%', '质量': '95%（轻微损失）', '速度': '基准', '适用场景': '良好压缩，消费级' },
            { '量化': 'Q4（4位）', '体积缩减': '75%', '质量': '90-95%（可接受）', '速度': '基准', '适用场景': '最大压缩' },
            { '量化': 'Q3（3位）', '体积缩减': '81%', '质量': '80-85%（明显损失）', '速度': '较快', '适用场景': '极端压缩、CPU' },
            { '量化': 'Q2（2位）', '体积缩减': '87.5%', '质量': '70%（明显损失）', '速度': '最快', '适用场景': '微型模型、边缘设备' },
          ],
          columns: ['量化', '体积缩减', '质量', '速度', '适用场景'],
        },
        quickRef: {
          id: 'quick-reference',
          title: '快速参考表：各模型和量化级别的VRAM',
          image: '/images/vram-calculator-local-llm-quick-ref-en.svg',
          imageCaption: 'VRAM快速参考矩阵：3B至70B模型在FP16、Q8、Q5和Q4量化下的需求。绿色 = 可放入12 GB GPU。黄色 = 需要16-24 GB。红色 = 需要40 GB以上或多GPU。',
          rows: [
            { '模型': '3B', 'FP16': '6 GB', 'Q8': '3 GB', 'Q5': '1.9 GB', 'Q4': '1.5 GB' },
            { '模型': '7B', 'FP16': '14 GB', 'Q8': '7 GB', 'Q5': '4.4 GB', 'Q4': '3.5 GB' },
            { '模型': '13B', 'FP16': '26 GB', 'Q8': '13 GB', 'Q5': '8.1 GB', 'Q4': '6.5 GB' },
            { '模型': '32B', 'FP16': '64 GB', 'Q8': '32 GB', 'Q5': '20 GB', 'Q4': '16 GB' },
            { '模型': '70B', 'FP16': '140 GB', 'Q8': '70 GB', 'Q5': '43.75 GB', 'Q4': '35 GB' },
          ],
          columns: ['模型', 'FP16', 'Q8', 'Q5', 'Q4'],
        },
        realWorld: {
          id: 'real-world-examples',
          title: '实际使用案例',
          image: '/images/vram-calculator-local-llm-gpu-scenarios-en.svg',
          imageCaption: '实际GPU场景：RTX 4090（24 GB）、RTX 4080（16 GB）、RTX 4070 Ti（12 GB）、M5 Max Mac（36 GB）和RTX 3060（12 GB）——各GPU在不同量化级别下能运行的Llama 3.1模型。',
          content: [
            '常见场景的实际VRAM计算：',
            '⚠️ **警告：** 以下计算仅针对模型权重。请为上下文、批处理和系统开销额外预留25-40%。示例：13B Q5 = 8.1 GB模型 + 2-3 GB开销 = 实际需要10-11 GB。',
          ],
          items: [
            '**RTX 4070 Ti（12 GB）**：Llama 3.1 7B（Q4需3.5 GB）✓（空间充裕）。Llama 3.1 13B（Q5需8.1 GB）✓（不含上下文/批处理时勉强可用）。',
            '**RTX 4090（24 GB）**：Llama 3.1 70B（Q5需43.75 GB）✗（太大）。Llama 3.1 70B（Q4需35 GB）✗（仍太大）。Llama 3.1 70B（Q4含卸载）= 可用（较慢，每秒3-5个token）。',
            '**M5 Max Mac（36 GB）**：Llama 3.1 13B（FP16需26 GB）✓（可用）。Llama 3.1 70B = 不可能（即使Q2，质量损失约70%）。',
          ],
        },
        overhead: {
          id: 'hidden-overhead',
          title: '需要考虑哪些隐藏的VRAM开销？',
          image: '/images/vram-calculator-local-llm-overhead-en.svg',
          imageCaption: '隐藏VRAM开销分解：上下文窗口（4k token约2-3 GB）、批处理（batch=4时×4）、系统开销（500 MB至1 GB），总安全余量25-40%。',
          content: [
            '**该公式仅计算模型权重。** 实际VRAM使用量因多种因素而更高。请在计算量基础上额外预留25-40%。',
            '上下文窗口（键值缓存）在推理过程中存储对话历史。4k token的上下文对于7B模型约占用2-3 GB。',
            '📌 **关键点：** 批处理线性增加VRAM使用量。每个额外的并发提示（同时处理多个请求时）使用500 MB至2 GB额外内存。运行batch=4时，将单请求VRAM乘以4并加上开销。',
            '操作系统和推理引擎框架（Ollama、vLLM、llama.cpp）的系统开销预留500 MB至1 GB。选择GPU时始终保持安全余量。',
          ],
        },
        hardwareGuide: {
          id: 'hardware-fit',
          title: '哪款本地LLM适合您的GPU？2026指南',
          content: ['使用上方交互式计算器查找精确适配。以下是常见GPU场景和推荐模型。'],
          items: [
            '**RTX 3060（12 GB）：** 最佳模型：Qwen2.5 7B Q5（4.4 GB）✓。备选：Llama 3.2 8B Q4（4 GB）✓。不可用：32B及以上模型。',
            '**RTX 4070（12 GB）：** 最佳模型：Qwen2.5 13B Q4（6.5 GB）✓。余量充足：Llama 3.2 8B Q5（5 GB）✓。不可用：32B模型。',
            '**RTX 4070 Ti（12 GB）：** 最佳模型：Qwen2.5 13B Q5（8.1 GB）✓。较紧张：Llama 3.3 13B Q4（6.5 GB）✓。不推荐：批处理。',
            '**RTX 4080（16 GB）：** 最佳模型：Qwen2.5 32B Q4（16 GB）✓较紧张。舒适：Mistral 3.1 24B Q5（15 GB）✓。推荐：Llama 3.3 13B Q8（13 GB）✓。',
            '**RTX 4090（24 GB）：** 最佳模型：Qwen2.5 32B Q5（20 GB）✓。含卸载：Llama 3.3 70B Q4（35 GB——需要卸载）。舒适：任何Q5/Q8的32B模型。',
            '**RTX 5090（32 GB，如已发布）：** 最佳模型：Llama 3.3 70B Q4（35 GB——较紧张）。更好：Qwen2.5 72B Q3（27 GB）✓。舒适：含批处理的Q5及以上70B模型。',
          ],
        },
        accuracy: {
          id: 'accuracy',
          title: '公式的精度如何？',
          image: '/images/vram-calculator-local-llm-accuracy-en.svg',
          imageCaption: 'VRAM公式精度±10%：变化来源于量化格式（GGUF对比GPTQ对比AWQ）、模型架构（Transformer对比MoE）和推理引擎（vLLM对比llama.cpp对比Ollama）。',
          content: [
            '**该公式在大多数情况下精度在±10%以内。** 实际VRAM使用量因实现方式、模型架构和推理引擎优化而异。',
            '变化来源包括：不同量化格式（GGUF对比safetensors对比AWQ）、模型架构（Transformer对比非Transformer）以及推理引擎专属优化（vLLM、llama.cpp、Ollama）。',
            '截至2026年4月，将该公式视为保守估算。购买GPU时始终添加25%安全余量，以考虑上下文开销、批处理和系统进程。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'VRAM计算中的常见错误',
          image: '/images/vram-calculator-local-llm-mistakes-zh.svg',
          imageCaption: '4个常见VRAM错误：忘记上下文开销（增加1.5-3 GB）、将70B参数误解为70 GB VRAM、忽略1-2 GB系统开销、购买刚好达到计算大小的GPU而没有25%余量。',
          items: [
            '**忘记上下文开销。** Q4的7B模型是3.5 GB，但4k上下文需要总计5-6 GB。',
            '**不考虑量化直接使用HuggingFace的模型大小。** 70B表示700亿参数，而非70 GB VRAM。',
            '**不考虑系统开销。** 模型永远无法使用GPU VRAM的全部容量。为操作系统和推理引擎预留1-2 GB。',
            '**购买刚好达到计算大小的GPU。** 始终多购买25%。计算需要18 GB = 购买24 GB GPU。',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: '区域合规部署注意事项',
          content: [
            '**中国（数据安全法）：** 中国2021年《数据安全法》要求数据在中国境内存储。本地LLM推理部署在国内服务器（阿里云、腾讯云、华为云）上可满足合规要求。Qwen2.5等国产优化模型专为中国企业场景设计，结合本地推理可实现完全数据主权。此VRAM计算器用于为金融、医疗、法律等行业的合规部署规划硬件规格。',
            '**亚太地区（数据跨境）：** APAC各国数据跨境传输法规持续收紧。新加坡（PDPA）、韩国（PIPA）、日本（APPI）、澳大利亚（Privacy Act）均有严格的数据处理要求。本地LLM推理将数据保留在本地，无需云端API数据传输，有效规避跨境数据流动合规风险。',
            '**企业部署（金融、医疗、法律）：** 银行、医院、律师事务所等受监管行业在使用AI时面临严格的数据保护要求。本地推理确保敏感数据——客户财务信息、病历、法律文件——永不离开组织边界。使用此VRAM计算器为企业级私有化部署精确规划GPU资源，实现合规与性能的最优平衡。',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '常见问题：VRAM和GPU需求',
          faqs: [
            { q: '该公式适用于所有模型类型吗？', a: '适用。公式（模型十亿参数 × 量化位数）÷ 8适用于所有基于Transformer的模型（Llama、Qwen、Mistral、Claude等）。非Transformer架构（如RNN）较为罕见，可能需要调整。' },
            { q: '应该使用哪种量化级别？', a: '大多数场景：Q5提供最佳平衡（95%质量，68%体积缩减）。消费级GPU：Q4是标准选择（90-95%质量，75%缩减）。生产环境：VRAM允许时使用Q8（99%质量）。除非别无选择，否则避免Q3及以下。' },
            { q: '需要多少系统内存？', a: '卸载至少需要16 GB。使用VRAM卸载（CPU溢出）时，系统内存作为后备。批处理需在模型卸载基础上额外增加8-16 GB系统内存。单用户聊天16 GB已足够。' },
            { q: '批次大小影响VRAM计算吗？', a: '影响。该公式计算单请求VRAM。批次大小线性增加VRAM：每个并发请求根据上下文长度增加约500 MB至2 GB。运行batch=4时，在计算量基础上再加2-8 GB。' },
            { q: '12 GB GPU能运行70B模型吗？', a: '仅在极端量化（Q2，质量损失约70%）和CPU卸载（非常慢，每秒1-3个token）的条件下可行，实用性差。更好的选择：使用Q4的13B模型（相同VRAM，速度更快，质量更好）。' },
            { q: '实际VRAM用量低于计算值怎么办？', a: '该公式偏保守并已含开销。实际用量低意味着批处理、更长上下文或安全余量有更多空间。使用nvidia-smi测量实际用量，然后对模型进行基准测试以确认性能。' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[本地LLM硬件指南2026](/zh/local-llms/local-llm-hardware-guide-2026) -- 针对您预算的完整GPU和CPU推荐。',
            '[本地LLM最佳GPU](/zh/local-llms/best-gpus-for-local-llms) -- RTX 4090、4080、4070 Ti基准测试和成本分析。',
            '[在24GB VRAM上运行70B模型](/zh/local-llms/run-70b-models-24gb-vram) -- 大型模型的量化和卸载技术。',
            '[LLM量化详解](/zh/local-llms/llm-quantization-explained) -- Q4、Q5、Q8格式和质量权衡深度解析。',
            '[本地LLM功耗分析](/zh/local-llms/local-llm-power-consumption) -- 电源、散热和电费分析。',
            '[多GPU本地LLM](/zh/local-llms/multi-gpu-local-llms) -- 70B及以上模型的层分割和分布式推理。',
          ],
        },
        sources: {
          id: 'sources',
          title: '参考来源',
          items: [
            '[GGUF规范](https://github.com/ggerganov/ggml/blob/master/docs/gguf.md) -- ggerganov/ggml量化文件格式文档。',
            '[Transformers量化文档](https://huggingface.co/docs/transformers/quantization) -- Hugging Face量化方法官方指南。',
            '[Ollama文档](https://ollama.ai) -- Ollama官方模型管理指南。',
            '[vLLM性能指南](https://docs.vllm.ai) -- vLLM框架优化文档。',
          ],
        },
      },
    },
  };
