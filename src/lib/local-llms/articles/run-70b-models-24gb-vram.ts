// Auto-generated from src/lib/local-llms/content.ts
// Slug: run-70b-models-24gb-vram
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Hardware & Performance',
      title: 'How to Run 70B Models on 24GB VRAM: Advanced Techniques',
      seoTitle: 'Run 70B Models on 24 GB VRAM: Complete Setup Guide 2026',
      intro: 'Running a 70B model (normally requires 40+ GB) on 24 GB VRAM is possible with aggressive quantization (Q2-Q3) and layer offloading, but the result is slow (~3-5 tokens/sec). As of April 2026, this is impractical for real-time chat but viable for batch processing or experimentation.',
      metaDescription: 'Run 70B models on 24GB VRAM 2026: quantization (Q4_K_M), offloading, layer splitting. Techniques with trade-offs and performance data.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**Running a 70B model (normally requires 40+ GB) on 24 GB VRAM is possible with aggressive quantization (Q2-Q3) and layer offloading, but the result is slow (~3-5 tokens/sec).**',
      audience: 'Engineers deploying local LLMs in production or enterprise environments',
      readTime: '10 min read',
      educationalLevel: 'Advanced',
      primaryTerm: '70B model optimization',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Theoretical Limits', anchor: '#limits' },
        { label: 'Quantization Strategy', anchor: '#quantization' },
        { label: 'Offloading Strategy', anchor: '#offloading' },
        { label: 'Practical Setup', anchor: '#setup' },
        { label: 'Realistic Performance', anchor: '#performance' },
        { label: 'Better Alternatives', anchor: '#alternatives' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Related Reading', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'Llama 3.1 70B at Q4 = 35 GB (too large for 24GB). At Q3 = 26 GB (still too large). At Q2 = 17 GB (fits!).',
            'Trade-off: Q2 has noticeable quality loss. ~70% of FP16 quality.',
            'Speed: 3-5 tokens/sec with 20 GB offloaded to system RAM (ultra-slow).',
            'Better option: Use 13B model at Q5, or buy a second GPU for layer splitting.',
            'As of April 2026, this is a constraint workaround, not a recommended approach.',
          ],
        },
        limits: {
          id: 'limits',
          title: 'The Theoretical VRAM Math',
          content: [
            '**Llama 3.1 70B at various quantizations:**',
          ],
          rows: [
            { 'Quantization': 'FP16 (baseline)', 'Size': '140 GB', 'Fits 24GB?': 'No' },
            { 'Quantization': 'Q8 (8-bit)', 'Size': '70 GB', 'Fits 24GB?': 'No' },
            { 'Quantization': 'Q5 (5-bit)', 'Size': '43.75 GB', 'Fits 24GB?': 'No' },
            { 'Quantization': 'Q4 (4-bit)', 'Size': '35 GB', 'Fits 24GB?': 'No (with offloading: maybe)' },
            { 'Quantization': 'Q3 (3-bit)', 'Size': '26 GB', 'Fits 24GB?': 'No (barely)' },
            { 'Quantization': 'Q2 (2-bit)', 'Size': '17.5 GB', 'Fits 24GB?': 'Yes' },
          ],
          columns: ['Quantization', 'Model Size', 'Fits 24GB?'],
        },
        quantization: {
          id: 'quantization',
          title: 'Aggressive Quantization: The Primary Tool',
          content: [
            '**To fit 70B in 24GB, you must use Q2 or Q3 quantization.**',
            '- **Q3**: 26 GB (still 2 GB over). Can offload 2 GB to RAM. Slightly better quality than Q2.',
            '- **Q2**: 17.5 GB (fits!). 70% quality vs FP16. Noticeable degradation but usable.',
            'Download the quantized model: `ollama pull llama3.1:70b-q2` (if available) or use conversion tools like llama.cpp.',
          ],
        },
        offloading: {
          id: 'offloading',
          title: 'Offloading to System RAM',
          content: [
            '**If using Q4 (35 GB) on 24GB GPU, you can offload the remaining 11 GB to system RAM.** Speed penalty is severe (10× slower).',
            'Only practical for batch processing where you can wait hours for results.',
          ],
        },
        setup: {
          id: 'setup',
          title: 'Practical Setup: Running 70B on 24GB',
          content: 'Step-by-step:',
          numberedItems: [
            'Use Q2 quantization: `ollama pull llama3.1:70b-q2` (if available, else convert with llama.cpp)',
            'Verify VRAM: `nvidia-smi` should show ~18 GB used',
            'Run the model: `ollama run llama3.1:70b-q2`',
            'Expect 3-5 tokens/sec (very slow)',
            'Use only for batch/offline processing, not interactive chat',
          ],
        },
        performance: {
          id: 'performance',
          title: 'Realistic Performance Expectations',
          content: [
            '**Running 70B on 24GB VRAM is slow:**',
          ],
          rows: [
            { 'Quantization': 'Q2 (24GB VRAM)', 'Speed': '5-8 tok/sec', 'Latency': '2-4 sec per token', 'Use Case': 'Batch processing only' },
            { 'Quantization': 'Q3 + offload (24GB)', 'Speed': '3-5 tok/sec', 'Latency': '3-5 sec per token', 'Use Case': 'Extremely limited' },
            { 'Quantization': 'Q4 + offload (24GB)', 'Speed': '1-3 tok/sec', 'Latency': '5-10 sec per token', 'Use Case': 'Overnight batch only' },
          ],
          columns: ['Quantization', 'Speed', 'Latency', 'Use Case'],
        },
        alternatives: {
          id: 'alternatives',
          title: 'Better Alternatives to Constrained 70B',
          content: 'Instead of struggling with 70B on limited VRAM, consider:',
          items: [
            'Use a 13B model (Llama 3.1 13B at Q5 = 8 GB, very fast)',
            'Buy a second RTX 4090 for layer splitting (2× 24GB = 48GB, 100+ tok/sec)',
            'Use a cloud API (GPT-4o for important tasks, local for experimentation)',
            'Wait for more efficient models (smaller, same quality)',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Common Mistakes With Constrained 70B',
          items: [
            '**Expecting Q2 to be usable for chat.** It is not. Quality degradation is too severe for real-time interaction.',
            '**Not measuring actual speed before committing.** Test with a small prompt (10 tokens) and verify speed before running large batch jobs.',
            '**Assuming offloading is "free".** System RAM is 100× slower than GPU VRAM. Offloading makes inference impractical.',
            '**Not considering alternatives.** A 13B model is dramatically faster and often sufficient in quality.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'Can I actually run a 70B model on a single RTX 4090?',
              a: 'Yes, but with significant caveats. At Q2 quantization (17.5 GB), the model fits in 24 GB VRAM but runs at 5–8 tokens/sec and has ~70% of FP16 quality. At Q4 (35 GB), you need to offload 11 GB to system RAM, dropping speed to 1–3 tokens/sec. Neither is suitable for real-time chat — only offline batch processing.',
            },
            {
              q: 'What quantization is needed to fit 70B in 24 GB VRAM?',
              a: 'Q2 quantization fits in 24 GB (17.5 GB model size). Q3 (26 GB) requires 2 GB of RAM offloading. Q4 (35 GB) requires 11 GB offloading and makes inference very slow. Q5 and above (44–70 GB) cannot fit even with offloading on a 24 GB GPU. Q2 is the only option that runs fully in VRAM.',
            },
            {
              q: 'How slow is a 70B model on 24 GB VRAM?',
              a: 'At Q2 (fully in VRAM): 5–8 tokens/sec. At Q3 with 2 GB RAM offload: 3–5 tokens/sec. At Q4 with 11 GB RAM offload: 1–3 tokens/sec. Compare to a 13B model at Q5 on the same GPU: 80–100 tokens/sec. The 70B constrained setup is 10–20× slower than a properly sized smaller model.',
            },
            {
              q: 'Is it better to use a 13B model than a constrained 70B?',
              a: 'For most tasks, yes. A 13B model at Q5 quantization runs at 80–100 tokens/sec on an RTX 4090 and delivers strong quality. A 70B model at Q2 runs at 5–8 tokens/sec with degraded quality. The 13B wins on speed and often on practical quality due to Q2 degradation. Only use 70B-on-24GB if you need specific 70B capabilities and can tolerate batch-only usage.',
            },
            {
              q: 'What is the best use case for 70B on 24 GB VRAM?',
              a: 'Overnight batch processing — tasks where you submit 100+ prompts and retrieve results hours later. Examples: document analysis, code review batches, dataset annotation. Real-time chat is impractical at 1–8 tokens/sec. For interactive use, a second RTX 4090 ($1,800) with layer splitting achieves ~100 tokens/sec — a far better investment.',
            },
            {
              q: 'How do I download Q2 quantized 70B models?',
              a: 'Via Ollama: `ollama pull llama3.1:70b-instruct-q2_K` (availability varies). Via llama.cpp: download GGUF Q2_K files from Hugging Face (search "llama-3.1-70b GGUF"). TheBloke and bartowski publish quantized versions. Verify the model with `nvidia-smi` after loading — VRAM usage should be ~18–20 GB for Q2.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) -- Buy better hardware instead.',
            '[Multi-GPU Local LLMs](/local-llms/multi-gpu-local-llms) -- Use layer splitting instead.',
            '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding) -- Smaller models often sufficient.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'llama.cpp Quantization -- github.com/ggerganov/llama.cpp/blob/master/gguf-py/gguf/quants.py',
            'Model Card: Llama 3.1 70B -- huggingface.co/meta-llama/Llama-3.1-70B',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Run 70B Models on 24 GB VRAM: Complete Setup Guide 2026',
        description: 'Run 70B models on 24GB VRAM 2026: quantization (Q4_K_M), offloading, layer splitting. Techniques with trade-offs and performance data.',
        datePublished: '2026-04-04',
        dateModified: '2026-04-19',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Advanced',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can I actually run a 70B model on a single RTX 4090?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes, but with significant caveats. At Q2 quantization (17.5 GB), the model fits in 24 GB VRAM but runs at 5–8 tokens/sec and has ~70% of FP16 quality. At Q4 (35 GB), you need to offload 11 GB to system RAM, dropping speed to 1–3 tokens/sec. Neither is suitable for real-time chat.' },
          },
          {
            '@type': 'Question',
            name: 'What quantization is needed to fit 70B in 24 GB VRAM?',
            acceptedAnswer: { '@type': 'Answer', text: 'Q2 quantization fits in 24 GB (17.5 GB model size). Q3 (26 GB) requires 2 GB of RAM offloading. Q4 (35 GB) requires 11 GB offloading and makes inference very slow. Q5 and above cannot fit even with offloading. Q2 is the only option that runs fully in VRAM.' },
          },
          {
            '@type': 'Question',
            name: 'How slow is a 70B model on 24 GB VRAM?',
            acceptedAnswer: { '@type': 'Answer', text: 'At Q2 (fully in VRAM): 5–8 tokens/sec. At Q3 with 2 GB RAM offload: 3–5 tokens/sec. At Q4 with 11 GB RAM offload: 1–3 tokens/sec. A 13B model at Q5 on the same GPU runs at 80–100 tokens/sec — 10–20× faster.' },
          },
          {
            '@type': 'Question',
            name: 'Is it better to use a 13B model than a constrained 70B?',
            acceptedAnswer: { '@type': 'Answer', text: 'For most tasks, yes. A 13B model at Q5 runs at 80–100 tokens/sec on an RTX 4090. A 70B model at Q2 runs at 5–8 tokens/sec with degraded quality. The 13B wins on speed and often on practical quality. Only use 70B-on-24GB if you need specific 70B capabilities and can tolerate batch-only usage.' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Techniques to Run 70B Models on 24 GB VRAM',
        numberOfItems: 3,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Q2 Quantization (17.5 GB)', description: 'Fits fully in 24 GB VRAM. Quality: ~70% of FP16. Speed: 5–8 tokens/sec.' },
          { '@type': 'ListItem', position: 2, name: 'Q4 + CPU Offloading (11 GB offloaded)', description: 'Better quality but very slow: 1–3 tokens/sec. Suitable only for overnight batch.' },
          { '@type': 'ListItem', position: 3, name: 'Layer Splitting (2× RTX 4090)', description: 'Best option: 48 GB total, runs Q5 at ~100 tokens/sec. Recommended over single-GPU constraint.' },
        ],
      },
    },
  };
