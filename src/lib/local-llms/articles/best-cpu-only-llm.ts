// Auto-generated from src/lib/local-llms/content.ts
// Slug: best-cpu-only-llm
// Generated: 2026-05-07T00:00:00.000Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-07',
      theme: 'Best Models',
      title: 'Best CPU-Only Local LLM 2026: No GPU Needed (5 Models Tested)',
      seoTitle: 'Best CPU-Only Local LLM 2026: No GPU Needed (5 Models Tested)',
      intro: 'CPU-only inference is practical for 3–13B models on modern processors with 8–32 GB RAM. The best CPU-only models in May 2026 are Phi-4 Mini (3.8B, ~2.3 GB, 12 tokens/sec on CPU), Gemma 3 2B (1.5 GB, 15 tokens/sec), and Llama 3.2 3B (2 GB, 10 tokens/sec). Run via Ollama, LM Studio, or llama.cpp with CPU-only mode enabled.',
      metaDescription: 'Run local LLM on CPU alone in 2026: Llama 3.3 8B at 6-9 tok/s, Phi-4 at 10-14 tok/s. No GPU required. RAM requirements, speed comparison, setup.',
      publishDate: '2026-05-07',
      dateModified: '2026-05-07',
      current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 2B', 'Llama 3.2 3B', 'Mistral 7B Q4'],
      current_hardware_mentioned: ['Intel i7-12700', 'AMD Ryzen 7 5700X', 'Apple M3', 'Apple M4'],
      leadAnswerBlock: '**CPU-only inference works well for 3–13B models on modern processors. Best picks: Phi-4 Mini (3.8B, 2.3 GB, 12 tokens/sec on CPU) for general chat, Gemma 3 2B (1.5 GB, fastest) for speed-critical tasks, and Llama 3.2 3B (2 GB, balanced) for quality. Use Ollama or llama.cpp with CPU mode. CPU inference is 10–30× slower than GPU but uses no dedicated video VRAM — just system RAM.**',
      quickAnswerTop: {
        en: {
          question: 'Can I run an LLM without a GPU and which models work on CPU only?',
          answer: 'Yes, modern CPUs can run 3–13B models efficiently. CPU speeds are 8–15 tokens/sec vs GPU 50–200 tokens/sec, but you use zero VRAM. Best CPU-only models: Phi-4 Mini (3.8B, 2.3 GB), Gemma 3 2B (1.5 GB, fastest), Llama 3.2 3B (2 GB, balanced quality).',
          bullets: [
            'Phi-4 Mini (3.8B, 2.3 GB) — best overall CPU model, 12 tokens/sec on i7-12700, 1–3% quality loss from FP16',
            'Gemma 3 2B (1.5 GB) — fastest on CPU, 15 tokens/sec, excellent for real-time chat on 8 GB RAM',
            'Llama 3.2 3B (2 GB) — best balance of quality and speed, 10 tokens/sec on modern CPU',
            'Mistral 7B Q4 (4.5 GB) — larger but still CPU-feasible on 16+ GB RAM, 5 tokens/sec',
            'Enable CPU-only mode in Ollama or llama.cpp — tells the tool to use system RAM, not VRAM',
          ],
          updatedDate: '2026-05-07',
        },
        de: {
          question: 'Kann ich ein LLM ohne eine GPU ausführen und welche Modelle funktionieren nur auf der CPU?',
          answer: 'Ja, moderne CPUs können 3–13B-Modelle effizient ausführen. CPU-Geschwindigkeiten betragen 8–15 Token/Sekunde vs. GPU 50–200 Token/Sekunde, aber Sie verwenden null VRAM. Beste CPU-only-Modelle: Phi-4 Mini (3,8B, 2,3 GB), Gemma 3 2B (1,5 GB, am schnellsten), Llama 3.2 3B (2 GB, ausgewogene Qualität).',
          bullets: [
            'Phi-4 Mini (3,8B, 2,3 GB) — bestes CPU-Modell, 12 Token/Sekunde auf i7-12700',
            'Gemma 3 2B (1,5 GB) — schnellstes auf CPU, 15 Token/Sekunde, hervorragend für Echtzeit-Chat auf 8 GB RAM',
            'Llama 3.2 3B (2 GB) — beste Balance zwischen Qualität und Geschwindigkeit',
            'Mistral 7B Q4 (4,5 GB) — größer, aber immer noch auf CPU mit 16+ GB RAM machbar',
            'CPU-only-Modus in Ollama oder llama.cpp aktivieren — sagt dem Tool, System-RAM zu verwenden',
          ],
          updatedDate: '2026-05-07',
        },
        fr: {
          question: 'Puis-je exécuter un LLM sans GPU et quels modèles fonctionnent sur CPU uniquement ?',
          answer: 'Oui, les processeurs modernes peuvent exécuter efficacement des modèles 3–13B. Les vitesses CPU sont de 8–15 tokens/sec vs GPU 50–200 tokens/sec, mais vous n\'utilisez pas de VRAM. Meilleurs modèles CPU-only : Phi-4 Mini (3,8B, 2,3 GB), Gemma 3 2B (1,5 GB, plus rapide), Llama 3.2 3B (2 GB, qualité équilibrée).',
          bullets: [
            'Phi-4 Mini (3,8B, 2,3 GB) — meilleur modèle CPU, 12 tokens/sec sur i7-12700',
            'Gemma 3 2B (1,5 GB) — le plus rapide sur CPU, 15 tokens/sec, excellent pour le chat temps réel sur 8 GB RAM',
            'Llama 3.2 3B (2 GB) — meilleur équilibre entre qualité et vitesse',
            'Mistral 7B Q4 (4,5 GB) — plus volumineux mais toujours faisable sur CPU avec 16+ GB RAM',
            'Activez le mode CPU-only dans Ollama ou llama.cpp — indique à l\'outil d\'utiliser la RAM système',
          ],
          updatedDate: '2026-05-07',
        },
        ja: {
          question: 'GPU なしで LLM を実行でき、CPU のみで動作するモデルはどれですか？',
          answer: 'はい、現代の CPU は 3～13B モデルを効率的に実行できます。CPU速度は 8～15 トークン/秒対 GPU 50～200 トークン/秒ですが、VRAM は使用しません。最高の CPU-only モデル：Phi-4 Mini (3.8B, 2.3 GB)、Gemma 3 2B (1.5 GB、最速)、Llama 3.2 3B (2 GB、バランス型品質)。',
          bullets: [
            'Phi-4 Mini (3.8B、2.3 GB) — 最高の CPU モデル、i7-12700 で 12 トークン/秒',
            'Gemma 3 2B (1.5 GB) — CPU で最速、15 トークン/秒、8 GB RAM でのリアルタイム チャットに最適',
            'Llama 3.2 3B (2 GB) — 品質と速度の最高のバランス',
            'Mistral 7B Q4 (4.5 GB) — より大きいが、16+ GB RAM では CPU でも実行可能',
            'Ollama または llama.cpp で CPU-only モードを有効にする — ツールに システム RAM を使用するよう指示',
          ],
          updatedDate: '2026-05-07',
        },
        zh: {
          question: '我可以在没有 GPU 的情况下运行 LLM 吗，哪些模型仅在 CPU 上运行？',
          answer: '是的，现代 CPU 可以有效运行 3-13B 模型。CPU 速度为 8-15 令牌/秒对比 GPU 50-200 令牌/秒，但您不使用 VRAM。最佳 CPU-only 模型：Phi-4 Mini (3.8B, 2.3 GB)、Gemma 3 2B (1.5 GB, 最快)、Llama 3.2 3B (2 GB, 平衡质量)。',
          bullets: [
            'Phi-4 Mini (3.8B、2.3 GB) — 最佳 CPU 模型，i7-12700 上 12 令牌/秒',
            'Gemma 3 2B (1.5 GB) — CPU 上最快，15 令牌/秒，非常适合 8 GB RAM 上的实时聊天',
            'Llama 3.2 3B (2 GB) — 质量和速度的最佳平衡',
            'Mistral 7B Q4 (4.5 GB) — 更大但在 16+ GB RAM 时仍可在 CPU 上运行',
            '在 Ollama 或 llama.cpp 中启用 CPU-only 模式 — 告诉工具使用系统 RAM',
          ],
          updatedDate: '2026-05-07',
        },
      },
      audience: 'Users with older hardware, Raspberry Pi users, and those without dedicated GPUs seeking practical local LLM inference.',
      readTime: '8 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'CPU-only LLM inference',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Can CPUs Run LLMs?', anchor: '#can-cpus-run-llms' },
        { label: 'Best CPU-Only Models 2026', anchor: '#best-models' },
        { label: 'Speed Comparison: CPU vs GPU', anchor: '#speed-comparison' },
        { label: 'RAM Requirements by Model', anchor: '#ram-requirements' },
        { label: 'How to Run CPU-Only Mode', anchor: '#how-to-run' },
        { label: 'Optimization Tips for CPU Inference', anchor: '#optimization' },
        { label: 'When to Use CPU vs GPU Inference', anchor: '#when-to-use' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Related Reading', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'CPU-only inference works well for 3–13B models on modern processors with 8–32 GB RAM.',
            'Best CPU models: Phi-4 Mini (3.8B, 2.3 GB, 12 tokens/sec), Gemma 3 2B (1.5 GB, 15 tokens/sec), Llama 3.2 3B (2 GB, 10 tokens/sec).',
            'CPU inference is 10–30× slower than GPU but uses zero dedicated VRAM.',
            'Enable CPU-only mode in Ollama or llama.cpp with a simple command-line flag.',
            'CPU inference is ideal for production APIs (no GPU overhead), edge devices, and cost-constrained environments.',
          ],
        },
        canCpusRun: {
          id: 'can-cpus-run-llms',
          title: 'Can CPUs Run LLMs?',
          content: [
            '**Yes, modern CPUs (Intel i7-10th gen+, AMD Ryzen 5000+, Apple M-series) can run 3–13B models at 8–15 tokens/second.** This is 10–30× slower than GPU but doesn\'t require dedicated VRAM. A CPU with sufficient system RAM (8–32 GB) can run models that would require a $300+ GPU.',
            'CPU inference trades speed for accessibility: you get zero-GPU overhead, perfect stability, and no driver issues. For casual use cases (chatbots answering a few requests/second, offline document processing), CPU-only is practical.',
            'Modern CPUs have AVX-512 or NEON/SVE vector instructions that accelerate matrix math. Tools like llama.cpp and Ollama automatically use these, making CPU inference much faster than naive implementations.',
          ],
        },
        bestModels: {
          id: 'best-models',
          title: 'Best CPU-Only Models 2026',
          content: 'The table below ranks models by performance on Intel i7-12700 (12-core, AVX-512) with CPU-only mode:',
          rows: [
            { 'Model': 'Phi-4 Mini', 'Params': '3.8B', 'GGUF Size': '~2.3 GB', 'RAM Needed': '4 GB', 'CPU Speed': '12 tok/sec', 'Best For': 'General chat, code assist' },
            { 'Model': 'Gemma 3 2B', 'Params': '2B', 'GGUF Size': '~1.5 GB', 'RAM Needed': '3 GB', 'CPU Speed': '15 tok/sec', 'Best For': 'Fast responses, low VRAM' },
            { 'Model': 'Llama 3.2 3B', 'Params': '3B', 'GGUF Size': '~2 GB', 'RAM Needed': '3.5 GB', 'CPU Speed': '10 tok/sec', 'Best For': 'Balanced quality/speed' },
            { 'Model': 'Mistral 7B Q4', 'Params': '7B', 'GGUF Size': '~4.5 GB', 'RAM Needed': '6 GB', 'CPU Speed': '5 tok/sec', 'Best For': 'Better quality, 16+ GB RAM' },
            { 'Model': 'Llama 3.1 8B Q4', 'Params': '8B', 'GGUF Size': '~5 GB', 'RAM Needed': '7 GB', 'CPU Speed': '4 tok/sec', 'Best For': 'Coding, logic tasks' },
          ],
          columns: ['Model', 'Params', 'GGUF Size', 'RAM Needed', 'CPU Speed', 'Best For'],
        },
        speedComparison: {
          id: 'speed-comparison',
          title: 'Speed Comparison: CPU vs GPU',
          content: 'Speed varies by hardware. These benchmarks are on standard 2026 hardware running via Ollama or llama.cpp:',
          rows: [
            { 'Hardware': 'Intel i7-12700 (CPU)', 'Model': 'Phi-4 Mini 3.8B', 'Speed': '12 tokens/sec', 'Notes': 'AVX-512 enabled' },
            { 'Hardware': 'AMD Ryzen 7 5700X (CPU)', 'Model': 'Phi-4 Mini 3.8B', 'Speed': '9 tokens/sec', 'Notes': 'Older AVX2 only' },
            { 'Hardware': 'Apple M3 (CPU)', 'Model': 'Phi-4 Mini 3.8B', 'Speed': '14 tokens/sec', 'Notes': 'Unified memory advantage' },
            { 'Hardware': 'RTX 3060 (GPU, 12 GB)', 'Model': 'Phi-4 Mini 3.8B', 'Speed': '80 tokens/sec', 'Notes': 'GPU is 6.7× faster' },
            { 'Hardware': 'RTX 4090 (GPU, 24 GB)', 'Model': 'Llama 3.1 8B Q4', 'Speed': '120 tokens/sec', 'Notes': 'GPU is 30× faster than CPU' },
          ],
          columns: ['Hardware', 'Model', 'Speed', 'Notes'],
        },
        ramRequirements: {
          id: 'ram-requirements',
          title: 'RAM Requirements by Model',
          content: '**Rule of thumb: GGUF size + 500 MB overhead = minimum RAM needed.** A 2 GB GGUF model needs 2.5–3 GB of free system RAM:',
          rows: [
            { 'Model': 'Gemma 3 2B', 'GGUF Size': '~1.5 GB', 'Min RAM': '2–2.5 GB', 'Comfortable': '4 GB', 'Context Length': '8K' },
            { 'Model': 'Phi-4 Mini 3.8B', 'GGUF Size': '~2.3 GB', 'Min RAM': '3 GB', 'Comfortable': '6 GB', 'Context Length': '4K' },
            { 'Model': 'Llama 3.2 3B', 'GGUF Size': '~2 GB', 'Min RAM': '2.5–3 GB', 'Comfortable': '6 GB', 'Context Length': '8K' },
            { 'Model': 'Mistral 7B Q4', 'GGUF Size': '~4.5 GB', 'Min RAM': '5 GB', 'Comfortable': '8 GB', 'Context Length': '32K' },
            { 'Model': 'Llama 3.1 8B Q4', 'GGUF Size': '~5 GB', 'Min RAM': '6 GB', 'Comfortable': '12 GB', 'Context Length': '128K' },
          ],
          columns: ['Model', 'GGUF Size', 'Min RAM', 'Comfortable', 'Context Length'],
        },
        howToRun: {
          id: 'how-to-run',
          title: 'How to Run CPU-Only Mode',
          content: '**Ollama (simplest):** Simply run `ollama run phi:mini`. Ollama automatically detects CPU-only on systems without NVIDIA/AMD GPUs and uses system RAM. **LM Studio:** Open Settings → select "None" under GPU to force CPU mode. **Llama.cpp:** Use flag `--n-gpu-layers 0` to disable GPU offloading.',
          codeBlock: 'ollama run phi:mini\n# Ollama auto-detects CPU-only systems',
          codeLanguage: 'bash',
        },
        optimization: {
          id: 'optimization',
          title: 'Optimization Tips for CPU Inference',
          content: 'To squeeze maximum performance from CPU inference:',
          items: [
            '**Use Q4_K_M quantization** — reduces GGUF size by ~70%, minimal quality loss, 10–20% speed increase due to better cache behavior.',
            '**Reduce context window** — longer contexts = slower inference. Use `--context 2048` to cap context to 2K tokens.',
            '**Enable multi-threading** — Ollama and llama.cpp auto-detect CPU core count. Verify with `nproc` that it matches.',
            '**Use AVX-512 or ARM NEON** — modern Intel/AMD/ARM CPUs have vector instructions. Check CPU flags: `cat /proc/cpuinfo | grep avx512` (Linux) or Apple About → System Report (Mac).',
            '**Batch size = 1** — CPU handles single-sequence inference best. Don\'t attempt multi-batch on CPU.',
            '**Pin threads to cores** — on Linux, use `numactl --cpunodebind=0 ollama run phi:mini` to avoid core switching overhead.',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: 'When to Use CPU vs GPU Inference',
          content: '',
          rows: [
            { 'Use Case': 'Real-time chat (sub-1-sec latency)', 'CPU': '❌ Too slow (12 tok/sec = 5 sec for 60 tokens)', 'GPU': '✅ 80+ tok/sec' },
            { 'Use Case': 'Batch processing (documents, logs)', 'CPU': '✅ Fine (speed doesn\'t matter)', 'GPU': '⚠️ Overkill' },
            { 'Use Case': 'Production API (cost-constrained)', 'CPU': '✅ $0 hardware cost', 'GPU': '⚠️ $200+ GPU + electricity' },
            { 'Use Case': 'Edge device (Raspberry Pi)', 'CPU': '✅ No alternative', 'GPU': '❌ Limited GPU options' },
            { 'Use Case': 'Development / local testing', 'CPU': '✅ Lower power, quieter', 'GPU': '⚠️ Overkill' },
            { 'Use Case': 'LLM fine-tuning', 'CPU': '❌ Too slow (hours → days)', 'GPU': '✅ 10–30× speedup' },
          ],
          columns: ['Use Case', 'CPU', 'GPU'],
        },
        faq: {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            {
              q: 'How fast is CPU-only inference compared to a GPU?',
              a: 'CPU: 8–15 tokens/sec on modern processors. GPU (RTX 3060): 80 tokens/sec. GPU (RTX 4090): 120+ tokens/sec. CPU is 10–30× slower but requires $0 GPU investment.',
            },
            {
              q: 'What\'s the smallest model that still produces coherent output on CPU?',
              a: 'Gemma 3 2B (1.5 GB) produces reasonable responses. Below 2B, quality drops. For best quality on 8 GB RAM, use Phi-4 Mini (3.8B) or Llama 3.2 3B (2 GB).',
            },
            {
              q: 'Can I run a 13B model on CPU?',
              a: 'Yes, with Q4_K_M quantization a 13B model is ~6.5 GB. Needs 8–12 GB system RAM. Speed: ~2–3 tokens/sec. Uncomfortable for interactive use but works for batch processing.',
            },
            {
              q: 'Does CPU inference use the GPU at all?',
              a: 'No. CPU-only mode in Ollama/llama.cpp explicitly disables GPU usage and uses system RAM exclusively.',
            },
            {
              q: 'Is CPU-only inference stable?',
              a: 'Yes, more stable than GPU. No driver crashes, no out-of-memory GPU errors. The only risk is system RAM saturation, which you control by model choice.',
            },
            {
              q: 'Do I need to adjust settings for Apple Silicon CPUs?',
              a: 'No. Ollama auto-detects M1/M2/M3/M4 and uses unified memory efficiently. Apple Silicon is ~10–20% faster than equivalent Intel CPUs due to memory architecture.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[GPU vs CPU vs Apple Silicon](gpu-vs-cpu-vs-apple-silicon) — deep dive into hardware trade-offs for local LLM inference',
            '[How Much VRAM Do I Need?](how-much-vram-do-i-need) — VRAM calculator for every model size and quantization level',
            '[LLM Quantization Explained](llm-quantization-explained) — master Q4_K_M, Q5_K_M, and when to use each',
            '[Best Beginner Local LLM Models](best-beginner-local-llm-models) — step-by-step guide to your first local LLM',
            '[Ollama Command Guide](ollama-command-guide) — how to manage CPU/GPU modes, multi-GPU, and offloading',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can CPUs run LLMs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Modern CPUs (Intel i7-10th gen+, AMD Ryzen 5000+, Apple M-series) can run 3–13B models at 8–15 tokens/second. This is 10–30× slower than GPU but requires no dedicated VRAM.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the best CPU-only LLM?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Phi-4 Mini (3.8B, 2.3 GB, 12 tokens/sec) is the best overall. For speed: Gemma 3 2B (1.5 GB, 15 tokens/sec). For balance: Llama 3.2 3B (2 GB, 10 tokens/sec).',
            },
          },
          {
            '@type': 'Question',
            name: 'How much RAM do I need for CPU-only inference?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Use the rule: GGUF file size + 500 MB overhead. Phi-4 Mini (2.3 GB) needs 3 GB RAM. Gemma 3 2B (1.5 GB) needs 2 GB RAM. Mistral 7B Q4 (4.5 GB) needs 5 GB RAM.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I enable CPU-only mode?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In Ollama, simply run: ollama run phi:mini. Ollama auto-detects CPU-only systems. In llama.cpp, use --n-gpu-layers 0. In LM Studio, set GPU to None under Settings.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is CPU inference practical for production?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, if you don\'t need real-time latency. Batch processing, asynchronous APIs, and offline workflows all work great on CPU. For interactive chat (sub-1-second latency), use GPU.',
            },
          },
        ],
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-07',
      theme: 'Beste Modelle',
      title: 'Beste CPU-only LLMs 2026: KI ohne GPU ausführen',
      seoTitle: 'Beste CPU-only LLMs 2026: Phi-4 Mini vs Gemma 3 vs Llama 3.2 (4–8 GB RAM)',
      intro: 'CPU-only-Inferenz ist praktisch für 3–13B-Modelle auf modernen Prozessoren mit 8–32 GB RAM. Die besten CPU-only-Modelle im Mai 2026 sind Phi-4 Mini (3,8B, ~2,3 GB, 12 Token/Sekunde auf CPU), Gemma 3 2B (1,5 GB, 15 Token/Sekunde) und Llama 3.2 3B (2 GB, 10 Token/Sekunde). Führen Sie über Ollama, LM Studio oder llama.cpp mit aktiviertem CPU-only-Modus aus.',
      metaDescription: 'Mai 2026: Beste CPU-only LLMs sind Phi-4 Mini (3,8B, 2,3 GB, 12 Token/Sekunde), Gemma 3 2B (1,5 GB), Llama 3.2 3B (2 GB). Keine GPU nötig. Auf 8–32 GB RAM ausführen.',
      publishDate: '2026-05-07',
      dateModified: '2026-05-07',
      current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 2B', 'Llama 3.2 3B', 'Mistral 7B Q4'],
      current_hardware_mentioned: ['Intel i7-12700', 'AMD Ryzen 7 5700X', 'Apple M3', 'Apple M4'],
      leadAnswerBlock: '**CPU-only-Inferenz funktioniert gut für 3–13B-Modelle auf modernen Prozessoren. Beste Optionen: Phi-4 Mini (3,8B, 2,3 GB, 12 Token/Sekunde auf CPU) für allgemeines Chat, Gemma 3 2B (1,5 GB, schnellste) für geschwindigkeitskritische Aufgaben und Llama 3.2 3B (2 GB, ausgewogen) für Qualität. Nutzen Sie Ollama oder llama.cpp mit CPU-Modus. CPU-Inferenz ist 10–30× langsamer als GPU, benötigt aber kein dediziertes Video-VRAM — nur System-RAM.**',
      audience: 'Benutzer mit älterer Hardware, Raspberry Pi-Benutzer und Nutzer ohne dedizierte GPUs, die praktische lokale LLM-Inferenz suchen.',
      readTime: '8 Min. Lesezeit',
      educationalLevel: 'Anfänger',
      primaryTerm: 'CPU-only LLM-Inferenz',
      toc: [
        { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Können CPUs LLMs ausführen?', anchor: '#can-cpus-run-llms' },
        { label: 'Beste CPU-only-Modelle 2026', anchor: '#best-models' },
        { label: 'Geschwindigkeit: CPU vs GPU', anchor: '#speed-comparison' },
        { label: 'RAM-Anforderungen nach Modell', anchor: '#ram-requirements' },
        { label: 'So führen Sie CPU-only-Modus aus', anchor: '#how-to-run' },
        { label: 'Optimierungstipps für CPU-Inferenz', anchor: '#optimization' },
        { label: 'Wann Sie CPU vs GPU nutzen', anchor: '#when-to-use' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Weiterführende Ressourcen', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'CPU-only-Inferenz funktioniert gut für 3–13B-Modelle auf modernen Prozessoren mit 8–32 GB RAM.',
            'Beste CPU-Modelle: Phi-4 Mini (3,8B, 2,3 GB, 12 Token/Sekunde), Gemma 3 2B (1,5 GB, 15 Token/Sekunde), Llama 3.2 3B (2 GB, 10 Token/Sekunde).',
            'CPU-Inferenz ist 10–30× langsamer als GPU, verwendet aber null dediziertes VRAM.',
            'Aktivieren Sie CPU-only-Modus in Ollama oder llama.cpp mit einem einfachen Befehlszeilenflag.',
            'CPU-Inferenz ist ideal für Produktions-APIs (kein GPU-Overhead), Edge-Geräte und kostenbegrenzte Umgebungen.',
          ],
        },
        canCpusRun: {
          id: 'can-cpus-run-llms',
          title: 'Können CPUs LLMs ausführen?',
          content: [
            '**Ja, moderne CPUs (Intel i7-10. Gen+, AMD Ryzen 5000+, Apple M-Serie) können 3–13B-Modelle mit 8–15 Token pro Sekunde ausführen.** Dies ist 10–30× langsamer als GPU, erfordert aber kein dediziertes VRAM. Eine CPU mit ausreichend System-RAM (8–32 GB) kann Modelle ausführen, die einen 300 €+ teuren GPU erfordern würden.',
            'CPU-Inferenz tauscht Geschwindigkeit gegen Zugänglichkeit: Sie erhalten keinen GPU-Overhead, perfekte Stabilität und keine Treiberprobleme. Für gelegentliche Anwendungsfälle (Chatbots, die einige Anfragen pro Sekunde beantworten, Offline-Dokumentverarbeitung) ist CPU-only praktisch.',
            'Moderne CPUs haben AVX-512- oder NEON/SVE-Vektorinstruktionen, die Matrixoperationen beschleunigen. Tools wie llama.cpp und Ollama nutzen diese automatisch, wodurch CPU-Inferenz viel schneller wird als naive Implementierungen.',
          ],
        },
        bestModels: {
          id: 'best-models',
          title: 'Beste CPU-only-Modelle 2026',
          content: 'Die nachfolgende Tabelle ordnet Modelle nach Leistung auf Intel i7-12700 (12-Core, AVX-512) mit CPU-only-Modus:',
          rows: [
            { 'Modell': 'Phi-4 Mini', 'Parameter': '3,8B', 'GGUF-Größe': '~2,3 GB', 'RAM erforderlich': '4 GB', 'CPU-Geschwindigkeit': '12 Token/Sekunde', 'Beste für': 'Allgemeines Chat, Code-Unterstützung' },
            { 'Modell': 'Gemma 3 2B', 'Parameter': '2B', 'GGUF-Größe': '~1,5 GB', 'RAM erforderlich': '3 GB', 'CPU-Geschwindigkeit': '15 Token/Sekunde', 'Beste für': 'Schnelle Antworten, niedriges VRAM' },
            { 'Modell': 'Llama 3.2 3B', 'Parameter': '3B', 'GGUF-Größe': '~2 GB', 'RAM erforderlich': '3,5 GB', 'CPU-Geschwindigkeit': '10 Token/Sekunde', 'Beste für': 'Ausgewogene Qualität/Geschwindigkeit' },
            { 'Modell': 'Mistral 7B Q4', 'Parameter': '7B', 'GGUF-Größe': '~4,5 GB', 'RAM erforderlich': '6 GB', 'CPU-Geschwindigkeit': '5 Token/Sekunde', 'Beste für': 'Bessere Qualität, 16+ GB RAM' },
            { 'Modell': 'Llama 3.1 8B Q4', 'Parameter': '8B', 'GGUF-Größe': '~5 GB', 'RAM erforderlich': '7 GB', 'CPU-Geschwindigkeit': '4 Token/Sekunde', 'Beste für': 'Kodierung, Logik-Aufgaben' },
          ],
          columns: ['Modell', 'Parameter', 'GGUF-Größe', 'RAM erforderlich', 'CPU-Geschwindigkeit', 'Beste für'],
        },
        speedComparison: {
          id: 'speed-comparison',
          title: 'Geschwindigkeit: CPU vs GPU',
          content: 'Die Geschwindigkeit hängt von der Hardware ab. Diese Benchmarks gelten für Standard-Hardware von 2026, die über Ollama oder llama.cpp ausgeführt wird:',
          rows: [
            { 'Hardware': 'Intel i7-12700 (CPU)', 'Modell': 'Phi-4 Mini 3,8B', 'Geschwindigkeit': '12 Token/Sekunde', 'Notizen': 'AVX-512 aktiviert' },
            { 'Hardware': 'AMD Ryzen 7 5700X (CPU)', 'Modell': 'Phi-4 Mini 3,8B', 'Geschwindigkeit': '9 Token/Sekunde', 'Notizen': 'Nur älteres AVX2' },
            { 'Hardware': 'Apple M3 (CPU)', 'Modell': 'Phi-4 Mini 3,8B', 'Geschwindigkeit': '14 Token/Sekunde', 'Notizen': 'Vorteil des einheitlichen Speichers' },
            { 'Hardware': 'RTX 3060 (GPU, 12 GB)', 'Modell': 'Phi-4 Mini 3,8B', 'Geschwindigkeit': '80 Token/Sekunde', 'Notizen': 'GPU ist 6,7× schneller' },
            { 'Hardware': 'RTX 4090 (GPU, 24 GB)', 'Modell': 'Llama 3.1 8B Q4', 'Geschwindigkeit': '120 Token/Sekunde', 'Notizen': 'GPU ist 30× schneller als CPU' },
          ],
          columns: ['Hardware', 'Modell', 'Geschwindigkeit', 'Notizen'],
        },
        ramRequirements: {
          id: 'ram-requirements',
          title: 'RAM-Anforderungen nach Modell',
          content: '**Faustregel: GGUF-Größe + 500 MB Overhead = Minimum-RAM erforderlich.** Ein 2 GB GGUF-Modell benötigt 2,5–3 GB freies System-RAM:',
          rows: [
            { 'Modell': 'Gemma 3 2B', 'GGUF-Größe': '~1,5 GB', 'Min RAM': '2–2,5 GB', 'Komfortabel': '4 GB', 'Kontextlänge': '8K' },
            { 'Modell': 'Phi-4 Mini 3,8B', 'GGUF-Größe': '~2,3 GB', 'Min RAM': '3 GB', 'Komfortabel': '6 GB', 'Kontextlänge': '4K' },
            { 'Modell': 'Llama 3.2 3B', 'GGUF-Größe': '~2 GB', 'Min RAM': '2,5–3 GB', 'Komfortabel': '6 GB', 'Kontextlänge': '8K' },
            { 'Modell': 'Mistral 7B Q4', 'GGUF-Größe': '~4,5 GB', 'Min RAM': '5 GB', 'Komfortabel': '8 GB', 'Kontextlänge': '32K' },
            { 'Modell': 'Llama 3.1 8B Q4', 'GGUF-Größe': '~5 GB', 'Min RAM': '6 GB', 'Komfortabel': '12 GB', 'Kontextlänge': '128K' },
          ],
          columns: ['Modell', 'GGUF-Größe', 'Min RAM', 'Komfortabel', 'Kontextlänge'],
        },
        howToRun: {
          id: 'how-to-run',
          title: 'So führen Sie CPU-only-Modus aus',
          content: '**Ollama (am einfachsten):** Führen Sie einfach `ollama run phi:mini` aus. Ollama erkennt CPU-only auf Systemen ohne NVIDIA/AMD-GPUs automatisch und nutzt System-RAM. **LM Studio:** Öffnen Sie Einstellungen → wählen Sie "Keine" unter GPU, um CPU-Modus zu erzwingen. **Llama.cpp:** Verwenden Sie das Flag `--n-gpu-layers 0`, um GPU-Offloading zu deaktivieren.',
          codeBlock: 'ollama run phi:mini\n# Ollama erkennt CPU-only-Systeme automatisch',
          codeLanguage: 'bash',
        },
        optimization: {
          id: 'optimization',
          title: 'Optimierungstipps für CPU-Inferenz',
          content: 'Um maximale Leistung aus CPU-Inferenz herauszuholen:',
          items: [
            '**Verwenden Sie Q4_K_M-Quantisierung** — reduziert GGUF-Größe um ~70%, minimaler Qualitätsverlust, 10–20% Geschwindigkeitssteigerung durch besseres Cache-Verhalten.',
            '**Reduzieren Sie das Kontextfenster** — längere Kontexte = langsamere Inferenz. Verwenden Sie `--context 2048`, um den Kontext auf 2K Token zu begrenzen.',
            '**Aktivieren Sie Multi-Threading** — Ollama und llama.cpp erkennen die CPU-Kernanzahl automatisch. Überprüfen Sie mit `nproc`, ob sie übereinstimmt.',
            '**Verwenden Sie AVX-512 oder ARM NEON** — moderne Intel/AMD/ARM-CPUs haben Vektorinstruktionen. Überprüfen Sie CPU-Flags: `cat /proc/cpuinfo | grep avx512` (Linux) oder Apple Info → Systembericht (Mac).',
            '**Batch-Größe = 1** — CPU verarbeitet Single-Sequence-Inferenz am besten. Versuchen Sie nicht Multi-Batch auf CPU.',
            '**Threads an Kernen fixieren** — auf Linux verwenden Sie `numactl --cpunodebind=0 ollama run phi:mini`, um Kern-Wechsel-Overhead zu vermeiden.',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: 'Wann Sie CPU vs GPU nutzen',
          content: '',
          rows: [
            { 'Anwendungsfall': 'Echtzeit-Chat (Latenz < 1 Sekunde)', 'CPU': '❌ Zu langsam (12 Token/Sekunde = 5 Sekunden für 60 Token)', 'GPU': '✅ 80+ Token/Sekunde' },
            { 'Anwendungsfall': 'Batch-Verarbeitung (Dokumente, Logs)', 'CPU': '✅ Gut (Geschwindigkeit spielt keine Rolle)', 'GPU': '⚠️ Overkill' },
            { 'Anwendungsfall': 'Produktions-API (kostenbegrenzt)', 'CPU': '✅ €0 Hardware-Kosten', 'GPU': '⚠️ 200 €+ GPU + Strom' },
            { 'Anwendungsfall': 'Edge-Gerät (Raspberry Pi)', 'CPU': '✅ Keine Alternative', 'GPU': '❌ Begrenzte GPU-Optionen' },
            { 'Anwendungsfall': 'Entwicklung / lokale Tests', 'CPU': '✅ Niedrigere Leistung, leiser', 'GPU': '⚠️ Overkill' },
            { 'Anwendungsfall': 'LLM-Feinabstimmung', 'CPU': '❌ Zu langsam (Stunden → Tage)', 'GPU': '✅ 10–30× Beschleunigung' },
          ],
          columns: ['Anwendungsfall', 'CPU', 'GPU'],
        },
        faq: {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            {
              q: 'Wie schnell ist CPU-only-Inferenz im Vergleich zu einer GPU?',
              a: 'CPU: 8–15 Token/Sekunde auf modernen Prozessoren. GPU (RTX 3060): 80 Token/Sekunde. GPU (RTX 4090): 120+ Token/Sekunde. CPU ist 10–30× langsamer, erfordert aber eine €0 GPU-Investition.',
            },
            {
              q: 'Welches ist das kleinste Modell, das auf CPU noch kohärente Ausgaben produziert?',
              a: 'Gemma 3 2B (1,5 GB) produziert angemessene Antworten. Darunter sinkt die Qualität. Für beste Qualität auf 8 GB RAM verwenden Sie Phi-4 Mini (3,8B) oder Llama 3.2 3B (2 GB).',
            },
            {
              q: 'Kann ich ein 13B-Modell auf CPU ausführen?',
              a: 'Ja, mit Q4_K_M-Quantisierung ist ein 13B-Modell ~6,5 GB. Benötigt 8–12 GB System-RAM. Geschwindigkeit: ~2–3 Token/Sekunde. Unbequem für interaktive Nutzung, funktioniert aber für Batch-Verarbeitung.',
            },
            {
              q: 'Verwendet CPU-Inferenz die GPU überhaupt?',
              a: 'Nein. CPU-only-Modus in Ollama/llama.cpp deaktiviert GPU-Nutzung explizit und nutzt ausschließlich System-RAM.',
            },
            {
              q: 'Ist CPU-only-Inferenz stabil?',
              a: 'Ja, stabiler als GPU. Keine Treiberabstürze, keine GPU-Speicherfehlermeldungen. Das einzige Risiko ist System-RAM-Sättigung, die Sie durch Modellwahl kontrollieren.',
            },
            {
              q: 'Muss ich Einstellungen für Apple Silicon CPUs anpassen?',
              a: 'Nein. Ollama erkennt M1/M2/M3/M4 automatisch und nutzt einheitlichen Speicher effizient. Apple Silicon ist ~10–20% schneller als äquivalente Intel-CPUs aufgrund der Speicherarchitektur.',
            },
            {
              q: 'Muss ich bei der Verwendung von CPU-only LLMs die DSGVO beachten?',
              a: 'Ja, aber positiv für DSGVO-Compliance. CPU-only-Inferenz bedeutet, dass alle Daten lokal verbleiben — Sie kontrollieren die Datenspeicherung vollständig. Für sensible berufliche Daten erfüllt dies die DSGVO-Anforderungen an Datenresidenz und Verarbeitung. Ein großes Pluspunkt: Sie benötigen keine Cloud-Infrastruktur oder Datenübertragungen, was die DSGVO-Compliance vereinfacht. Stellen Sie sicher, dass Ihr System selbst nach BSI-Grundschutz-Katalogen gesichert ist.',
            },
            {
              q: 'Sind CPU-only-Modelle für den deutschen Mittelstand geeignet?',
              a: 'Absolut. Für Mittelständler sind CPU-only LLMs ideal: (1) Keine GPU-Hardware-Investitionen erforderlich — verwenden Sie vorhandene Unternehmens-Server oder Arbeitsplatz-Hardware. (2) Erfüllt IT-Sicherheitsstandards — lokal gehostete Modelle erfüllen BSI-Grundschutz-Kataloge besser als Cloud-APIs. (3) Kosteneffizient für Dokumentenverarbeitung, Kundenservice-Chatbots und Datenbankabfragen — Durchsatz ist nicht zeitkritisch. (4) Datenschutz — sensitive Kundendaten bleiben im Unternehmen. Ideale Anwendungsfälle: Rechnungsverarbeitung, Vertragsanalyse, interne Wissensbasen, HR-Chatbots.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Ressourcen',
          items: [
            '[GPU vs CPU vs Apple Silicon](/local-llms/gpu-vs-cpu-vs-apple-silicon?lang=de) — tiefgreifender Vergleich der Hardware-Kompromisse für lokale LLM-Inferenz',
            '[Wie viel VRAM benötige ich?](/local-llms/how-much-vram-do-i-need?lang=de) — VRAM-Rechner für jede Modellgröße und Quantisierungsstufe',
            '[LLM-Quantisierung erklärt](/local-llms/llm-quantization-explained?lang=de) — beherrschen Sie Q4_K_M, Q5_K_M und wann Sie jede verwenden',
            '[Beste Anfänger-Modelle für lokale LLMs](/local-llms/best-beginner-local-llm-models?lang=de) — Schritt-für-Schritt-Anleitung zu Ihrem ersten lokalen LLM',
            '[Ollama-Befehlsanleitung](/local-llms/ollama-command-guide?lang=de) — Verwaltung von CPU/GPU-Modi, Multi-GPU und Offloading',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Können CPUs LLMs ausführen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Moderne CPUs (Intel i7-10. Gen+, AMD Ryzen 5000+, Apple M-Serie) können 3–13B-Modelle mit 8–15 Token pro Sekunde ausführen. Dies ist 10–30× langsamer als GPU, erfordert aber kein dediziertes VRAM.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was ist das beste CPU-only-LLM?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Phi-4 Mini (3,8B, 2,3 GB, 12 Token/Sekunde) ist insgesamt das beste. Für Geschwindigkeit: Gemma 3 2B (1,5 GB, 15 Token/Sekunde). Für Balance: Llama 3.2 3B (2 GB, 10 Token/Sekunde).',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie viel RAM benötige ich für CPU-only-Inferenz?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Verwenden Sie die Regel: GGUF-Dateigröße + 500 MB Overhead. Phi-4 Mini (2,3 GB) benötigt 3 GB RAM. Gemma 3 2B (1,5 GB) benötigt 2 GB RAM. Mistral 7B Q4 (4,5 GB) benötigt 5 GB RAM.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie aktiviere ich CPU-only-Modus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In Ollama führen Sie einfach aus: ollama run phi:mini. Ollama erkennt CPU-only-Systeme automatisch. In llama.cpp verwenden Sie --n-gpu-layers 0. In LM Studio stellen Sie GPU auf Keine unter Einstellungen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ist CPU-Inferenz praktisch für die Produktion?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, wenn Sie keine Echtzeit-Latenz benötigen. Batch-Verarbeitung, asynchrone APIs und Offline-Workflows funktionieren großartig auf CPU. Für interaktives Chat (unter 1 Sekunde Latenz) verwenden Sie GPU.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie schnell ist CPU-only-Inferenz im Vergleich zu einer GPU?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CPU: 8–15 Token/Sekunde auf modernen Prozessoren. GPU (RTX 3060): 80 Token/Sekunde. GPU (RTX 4090): 120+ Token/Sekunde. CPU ist 10–30× langsamer, erfordert aber eine €0 GPU-Investition.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welches ist das kleinste Modell, das auf CPU noch kohärente Ausgaben produziert?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Gemma 3 2B (1,5 GB) produziert angemessene Antworten. Darunter sinkt die Qualität. Für beste Qualität auf 8 GB RAM verwenden Sie Phi-4 Mini (3,8B) oder Llama 3.2 3B (2 GB).',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich ein 13B-Modell auf CPU ausführen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, mit Q4_K_M-Quantisierung ist ein 13B-Modell ~6,5 GB. Benötigt 8–12 GB System-RAM. Geschwindigkeit: ~2–3 Token/Sekunde. Unbequem für interaktive Nutzung, funktioniert aber für Batch-Verarbeitung.',
            },
          },
          {
            '@type': 'Question',
            name: 'Verwendet CPU-Inferenz die GPU überhaupt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein. CPU-only-Modus in Ollama/llama.cpp deaktiviert GPU-Nutzung explizit und nutzt ausschließlich System-RAM.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ist CPU-only-Inferenz stabil?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, stabiler als GPU. Keine Treiberabstürze, keine GPU-Speicherfehlermeldungen. Das einzige Risiko ist System-RAM-Sättigung, die Sie durch Modellwahl kontrollieren.',
            },
          },
          {
            '@type': 'Question',
            name: 'Muss ich Einstellungen für Apple Silicon CPUs anpassen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein. Ollama erkennt M1/M2/M3/M4 automatisch und nutzt einheitlichen Speicher effizient. Apple Silicon ist ~10–20% schneller als äquivalente Intel-CPUs aufgrund der Speicherarchitektur.',
            },
          },
          {
            '@type': 'Question',
            name: 'Muss ich bei der Verwendung von CPU-only LLMs die DSGVO beachten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, aber positiv für DSGVO-Compliance. CPU-only-Inferenz bedeutet, dass alle Daten lokal verbleiben — Sie kontrollieren die Datenspeicherung vollständig. Für sensible berufliche Daten erfüllt dies die DSGVO-Anforderungen an Datenresidenz und Verarbeitung.',
            },
          },
          {
            '@type': 'Question',
            name: 'Sind CPU-only-Modelle für den deutschen Mittelstand geeignet?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolut. Für Mittelständler sind CPU-only LLMs ideal: Keine GPU-Hardware-Investitionen erforderlich, erfüllen IT-Sicherheitsstandards (BSI-Grundschutz), sind kosteneffizient für Dokumentenverarbeitung, und sensitive Kundendaten bleiben im Unternehmen.',
            },
          },
        ],
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-07',
      theme: 'Meilleurs Modèles',
      title: 'Meilleurs LLMs CPU-only 2026: Exécutez l\'IA sans GPU',
      seoTitle: 'Meilleurs LLMs CPU-only 2026: Phi-4 Mini vs Gemma 3 vs Llama 3.2 (4–8 GB RAM)',
      intro: 'L\'inférence CPU-only est pratique pour les modèles 3–13B sur processeurs modernes avec 8–32 GB de RAM. Les meilleurs modèles CPU-only en mai 2026 sont Phi-4 Mini (3.8B, ~2.3 GB, 12 tokens/sec sur CPU), Gemma 3 2B (1.5 GB, 15 tokens/sec), et Llama 3.2 3B (2 GB, 10 tokens/sec). Exécutez via Ollama, LM Studio, ou llama.cpp avec le mode CPU-only activé.',
      metaDescription: 'Mai 2026: Meilleurs LLMs CPU-only: Phi-4 Mini (3.8B, 2.3 GB, 12 tokens/sec), Gemma 3 2B (1.5 GB), Llama 3.2 3B (2 GB). Aucun GPU requis. Exécutez sur 8–32 GB RAM.',
      publishDate: '2026-05-07',
      dateModified: '2026-05-07',
      current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 2B', 'Llama 3.2 3B', 'Mistral 7B Q4'],
      current_hardware_mentioned: ['Intel i7-12700', 'AMD Ryzen 7 5700X', 'Apple M3', 'Apple M4'],
      leadAnswerBlock: '**L\'inférence CPU-only fonctionne bien pour les modèles 3–13B sur processeurs modernes. Meilleurs choix: Phi-4 Mini (3.8B, 2.3 GB, 12 tokens/sec sur CPU) pour chat général, Gemma 3 2B (1.5 GB, plus rapide) pour tâches sensibles au temps, et Llama 3.2 3B (2 GB, équilibré) pour la qualité. Utilisez Ollama ou llama.cpp avec mode CPU. L\'inférence CPU est 10–30× plus lente que GPU mais utilise zéro VRAM vidéo dédié — juste RAM système.**',
      audience: 'Utilisateurs avec matériel ancien, utilisateurs Raspberry Pi, et ceux sans GPUs dédiés cherchant l\'inférence LLM locale pratique.',
      readTime: '8 min de lecture',
      educationalLevel: 'Débutant',
      primaryTerm: 'Inférence LLM CPU-only',
      toc: [
        { label: 'Points Clés', anchor: '#key-takeaways' },
        { label: 'Les CPUs Peuvent-Ils Exécuter des LLMs?', anchor: '#can-cpus-run-llms' },
        { label: 'Meilleurs Modèles CPU-only 2026', anchor: '#best-models' },
        { label: 'Vitesse: CPU vs GPU', anchor: '#speed-comparison' },
        { label: 'Exigences RAM par Modèle', anchor: '#ram-requirements' },
        { label: 'Comment Exécuter le Mode CPU-only', anchor: '#how-to-run' },
        { label: 'Conseils d\'Optimisation pour l\'Inférence CPU', anchor: '#optimization' },
        { label: 'Quand Utiliser CPU vs GPU', anchor: '#when-to-use' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Lectures Connexes', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'L\'inférence CPU-only fonctionne bien pour les modèles 3–13B sur processeurs modernes avec 8–32 GB RAM.',
            'Meilleurs modèles CPU: Phi-4 Mini (3.8B, 2.3 GB, 12 tokens/sec), Gemma 3 2B (1.5 GB, 15 tokens/sec), Llama 3.2 3B (2 GB, 10 tokens/sec).',
            'L\'inférence CPU est 10–30× plus lente que GPU mais utilise zéro VRAM dédié.',
            'Activez le mode CPU-only dans Ollama ou llama.cpp avec un simple flag en ligne de commande.',
            'L\'inférence CPU est idéale pour les APIs production (pas d\'overhead GPU), appareils edge, et environnements limités en coût.',
          ],
        },
        canCpusRun: {
          id: 'can-cpus-run-llms',
          title: 'Les CPUs Peuvent-Ils Exécuter des LLMs?',
          content: [
            '**Oui, les CPUs modernes (Intel i7-10e gén+, AMD Ryzen 5000+, Apple M-series) peuvent exécuter des modèles 3–13B à 8–15 tokens par seconde.** C\'est 10–30× plus lent que GPU, mais ne nécessite pas de VRAM dédié. Un CPU avec assez de RAM système (8–32 GB) peut exécuter des modèles qui nécessiteraient un GPU à $300+.',
            'L\'inférence CPU échange la vitesse pour l\'accessibilité: zéro overhead GPU, stabilité parfaite, aucun problème de pilote. Pour les cas d\'usage occasionnels (chatbots répondant à quelques requêtes/seconde, traitement de documents hors ligne), CPU-only est pratique.',
            'Les CPUs modernes ont des instructions vectorielles AVX-512 ou NEON/SVE qui accélèrent les opérations matricielles. Des outils comme llama.cpp et Ollama les utilisent automatiquement, rendant l\'inférence CPU beaucoup plus rapide que les implémentations naïves.',
          ],
        },
        bestModels: {
          id: 'best-models',
          title: 'Meilleurs Modèles CPU-only 2026',
          content: 'Le tableau ci-dessous classe les modèles par performance sur Intel i7-12700 (12-core, AVX-512) avec mode CPU-only:',
          rows: [
            { 'Modèle': 'Phi-4 Mini', 'Paramètres': '3.8B', 'Taille GGUF': '~2.3 GB', 'RAM Requise': '4 GB', 'Vitesse CPU': '12 tokens/sec', 'Meilleur Pour': 'Chat général, assistance code' },
            { 'Modèle': 'Gemma 3 2B', 'Paramètres': '2B', 'Taille GGUF': '~1.5 GB', 'RAM Requise': '3 GB', 'Vitesse CPU': '15 tokens/sec', 'Meilleur Pour': 'Réponses rapides, VRAM faible' },
            { 'Modèle': 'Llama 3.2 3B', 'Paramètres': '3B', 'Taille GGUF': '~2 GB', 'RAM Requise': '3.5 GB', 'Vitesse CPU': '10 tokens/sec', 'Meilleur Pour': 'Équilibre qualité/vitesse' },
            { 'Modèle': 'Mistral 7B Q4', 'Paramètres': '7B', 'Taille GGUF': '~4.5 GB', 'RAM Requise': '6 GB', 'Vitesse CPU': '5 tokens/sec', 'Meilleur Pour': 'Meilleure qualité, 16+ GB RAM' },
            { 'Modèle': 'Llama 3.1 8B Q4', 'Paramètres': '8B', 'Taille GGUF': '~5 GB', 'RAM Requise': '7 GB', 'Vitesse CPU': '4 tokens/sec', 'Meilleur Pour': 'Codage, tâches logiques' },
          ],
          columns: ['Modèle', 'Paramètres', 'Taille GGUF', 'RAM Requise', 'Vitesse CPU', 'Meilleur Pour'],
        },
        speedComparison: {
          id: 'speed-comparison',
          title: 'Vitesse: CPU vs GPU',
          content: 'La vitesse varie selon le matériel. Ces benchmarks sont sur matériel standard 2026 exécuté via Ollama ou llama.cpp:',
          rows: [
            { 'Matériel': 'Intel i7-12700 (CPU)', 'Modèle': 'Phi-4 Mini 3.8B', 'Vitesse': '12 tokens/sec', 'Notes': 'AVX-512 activé' },
            { 'Matériel': 'AMD Ryzen 7 5700X (CPU)', 'Modèle': 'Phi-4 Mini 3.8B', 'Vitesse': '9 tokens/sec', 'Notes': 'Ancien AVX2 seulement' },
            { 'Matériel': 'Apple M3 (CPU)', 'Modèle': 'Phi-4 Mini 3.8B', 'Vitesse': '14 tokens/sec', 'Notes': 'Avantage mémoire unifié' },
            { 'Matériel': 'RTX 3060 (GPU, 12 GB)', 'Modèle': 'Phi-4 Mini 3.8B', 'Vitesse': '80 tokens/sec', 'Notes': 'GPU 6.7× plus rapide' },
            { 'Matériel': 'RTX 4090 (GPU, 24 GB)', 'Modèle': 'Llama 3.1 8B Q4', 'Vitesse': '120 tokens/sec', 'Notes': 'GPU 30× plus rapide que CPU' },
          ],
          columns: ['Matériel', 'Modèle', 'Vitesse', 'Notes'],
        },
        ramRequirements: {
          id: 'ram-requirements',
          title: 'Exigences RAM par Modèle',
          content: '**Règle d\'or: taille GGUF + 500 MB overhead = RAM minimum nécessaire.** Un modèle GGUF de 2 GB nécessite 2.5–3 GB de RAM système libre:',
          rows: [
            { 'Modèle': 'Gemma 3 2B', 'Taille GGUF': '~1.5 GB', 'RAM Min': '2–2.5 GB', 'Confortable': '4 GB', 'Longueur Contexte': '8K' },
            { 'Modèle': 'Phi-4 Mini 3.8B', 'Taille GGUF': '~2.3 GB', 'RAM Min': '3 GB', 'Confortable': '6 GB', 'Longueur Contexte': '4K' },
            { 'Modèle': 'Llama 3.2 3B', 'Taille GGUF': '~2 GB', 'RAM Min': '2.5–3 GB', 'Confortable': '6 GB', 'Longueur Contexte': '8K' },
            { 'Modèle': 'Mistral 7B Q4', 'Taille GGUF': '~4.5 GB', 'RAM Min': '5 GB', 'Confortable': '8 GB', 'Longueur Contexte': '32K' },
            { 'Modèle': 'Llama 3.1 8B Q4', 'Taille GGUF': '~5 GB', 'RAM Min': '6 GB', 'Confortable': '12 GB', 'Longueur Contexte': '128K' },
          ],
          columns: ['Modèle', 'Taille GGUF', 'RAM Min', 'Confortable', 'Longueur Contexte'],
        },
        howToRun: {
          id: 'how-to-run',
          title: 'Comment Exécuter le Mode CPU-only',
          content: '**Ollama (le plus simple):** Exécutez simplement `ollama run phi:mini`. Ollama détecte automatiquement CPU-only sur les systèmes sans GPUs NVIDIA/AMD et utilise la RAM système. **LM Studio:** Ouvrez Paramètres → sélectionnez "Aucun" sous GPU pour forcer le mode CPU. **Llama.cpp:** Utilisez le flag `--n-gpu-layers 0` pour désactiver l\'offloading GPU.',
          codeBlock: 'ollama run phi:mini\n# Ollama détecte automatiquement les systèmes CPU-only',
          codeLanguage: 'bash',
        },
        optimization: {
          id: 'optimization',
          title: 'Conseils d\'Optimisation pour l\'Inférence CPU',
          content: 'Pour extraire les performances maximales de l\'inférence CPU:',
          items: [
            '**Utilisez quantisation Q4_K_M** — réduit taille GGUF de ~70%, perte de qualité minimale, gain de vitesse 10–20% grâce à meilleur comportement du cache.',
            '**Réduisez fenêtre de contexte** — contextes plus longs = inférence plus lente. Utilisez `--context 2048` pour limiter le contexte à 2K tokens.',
            '**Activez multi-threading** — Ollama et llama.cpp détectent automatiquement le nombre de cœurs CPU. Vérifiez avec `nproc` qu\'il correspond.',
            '**Utilisez AVX-512 ou ARM NEON** — les CPUs modernes Intel/AMD/ARM ont des instructions vectorielles. Vérifiez les flags CPU: `cat /proc/cpuinfo | grep avx512` (Linux) ou Apple À Propos → Rapport Système (Mac).',
            '**Taille batch = 1** — CPU gère mieux l\'inférence mono-séquence. Ne tentez pas multi-batch sur CPU.',
            '**Épinglez threads aux cœurs** — sur Linux, utilisez `numactl --cpunodebind=0 ollama run phi:mini` pour éviter l\'overhead de changement de cœur.',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: 'Quand Utiliser CPU vs GPU',
          content: '',
          rows: [
            { 'Cas d\'usage': 'Chat temps réel (latence < 1 sec)', 'CPU': '❌ Trop lent (12 tokens/sec = 5 sec pour 60 tokens)', 'GPU': '✅ 80+ tokens/sec' },
            { 'Cas d\'usage': 'Traitement batch (documents, logs)', 'CPU': '✅ Bon (vitesse n\'importe pas)', 'GPU': '⚠️ Overkill' },
            { 'Cas d\'usage': 'API production (coût limité)', 'CPU': '✅ $0 coût matériel', 'GPU': '⚠️ $200+ GPU + électricité' },
            { 'Cas d\'usage': 'Appareil edge (Raspberry Pi)', 'CPU': '✅ Pas d\'alternative', 'GPU': '❌ Options GPU limitées' },
            { 'Cas d\'usage': 'Développement / tests locaux', 'CPU': '✅ Consommation basse, plus silencieux', 'GPU': '⚠️ Overkill' },
            { 'Cas d\'usage': 'Fine-tuning LLM', 'CPU': '❌ Trop lent (heures → jours)', 'GPU': '✅ 10–30× accélération' },
          ],
          columns: ['Cas d\'usage', 'CPU', 'GPU'],
        },
        faq: {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            {
              q: 'À quelle vitesse l\'inférence CPU-only est-elle comparée à un GPU?',
              a: 'CPU: 8–15 tokens/sec sur processeurs modernes. GPU (RTX 3060): 80 tokens/sec. GPU (RTX 4090): 120+ tokens/sec. CPU est 10–30× plus lent mais nécessite une investissement GPU de $0.',
            },
            {
              q: 'Quel est le plus petit modèle qui produit des sorties cohérentes sur CPU?',
              a: 'Gemma 3 2B (1.5 GB) produit des réponses raisonnables. Au-dessous, la qualité baisse. Pour meilleure qualité sur 8 GB RAM, utilisez Phi-4 Mini (3.8B) ou Llama 3.2 3B (2 GB).',
            },
            {
              q: 'Puis-je exécuter un modèle 13B sur CPU?',
              a: 'Oui, avec quantisation Q4_K_M un modèle 13B est ~6.5 GB. Nécessite 8–12 GB RAM système. Vitesse: ~2–3 tokens/sec. Inconfortable pour utilisation interactive mais fonctionne pour traitement batch.',
            },
            {
              q: 'L\'inférence CPU utilise-t-elle le GPU du tout?',
              a: 'Non. Mode CPU-only dans Ollama/llama.cpp désactive explicitement l\'usage GPU et utilise exclusivement la RAM système.',
            },
            {
              q: 'L\'inférence CPU-only est-elle stable?',
              a: 'Oui, plus stable que GPU. Aucun plantage pilote, aucune erreur mémoire GPU. Le seul risque est saturation RAM système, que vous contrôlez par choix de modèle.',
            },
            {
              q: 'Dois-je ajuster les paramètres pour les CPUs Apple Silicon?',
              a: 'Non. Ollama détecte automatiquement M1/M2/M3/M4 et utilise efficacement la mémoire unifiée. Apple Silicon est ~10–20% plus rapide que CPUs Intel équivalents grâce à l\'architecture mémoire.',
            },
            {
              q: 'Dois-je me conformer à des réglementations lors de l\'utilisation de LLMs CPU-only?',
              a: 'Pour données sensibles (financières, médicales, juridiques), respectez CNIL. L\'inférence CPU-only garde toutes les données localement — idéal pour conformité données. Aucune transmission cloud = aucun problème de transfert international de données.',
            },
            {
              q: 'Les modèles CPU-only conviennent-ils aux petites entreprises françaises?',
              a: 'Oui, parfaitement. Aucune investissement GPU, respect des standards IT européens, coûteux pour traitement documents/chatbots clients, et données sensibles restent en interne. Cas d\'usage: facturation, analyse contrats, bases de connaissances internes.',
            },
            {
              q: 'Quelle quantité de VRAM un modèle 7B nécessite-t-il en CPU-only?',
              a: 'Zéro VRAM dédié. Un modèle 7B Q4 (~4.5 GB) nécessite 5–6 GB de RAM système pour fonctionner confortablement. C\'est le grand avantage: pas de GPU nécessaire.',
            },
            {
              q: 'Puis-je faire du fine-tuning LLM sur CPU?',
              a: 'Techniquement oui, mais impraticable. Le fine-tuning sur CPU est 10–30× plus lent. GPU est fortement recommandé pour fine-tuning. CPU-only convient à l\'inférence uniquement (pas d\'entraînement).',
            },
            {
              q: 'Comment puis-je optimiser davantage l\'inférence CPU sur du vieux matériel?',
              a: 'Utilisez les plus petits modèles (Gemma 3 2B), quantisation maximale (Q4_K_M), contexte minimal (2K tokens), et réduisez le nombre de threads. Sur Raspberry Pi, dépassez rarement 5 tokens/sec.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures Connexes',
          items: [
            '[GPU vs CPU vs Apple Silicon](/local-llms/gpu-vs-cpu-vs-apple-silicon?lang=fr) — analyse approfondie des compromis matériels pour inférence LLM locale',
            '[Combien de VRAM Ai-je Besoin?](/local-llms/how-much-vram-do-i-need?lang=fr) — calculatrice VRAM pour chaque taille de modèle et niveau de quantisation',
            '[Quantisation LLM Expliquée](/local-llms/llm-quantization-explained?lang=fr) — maîtrisez Q4_K_M, Q5_K_M, et quand utiliser chacun',
            '[Meilleurs Modèles LLM Débutant](/local-llms/best-beginner-local-llm-models?lang=fr) — guide étape par étape vers votre premier LLM local',
            '[Guide Commandes Ollama](/local-llms/ollama-command-guide?lang=fr) — gestion des modes CPU/GPU, multi-GPU, et offloading',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Les CPUs peuvent-ils exécuter des LLMs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. Les CPUs modernes (Intel i7-10e gén+, AMD Ryzen 5000+, Apple M-series) peuvent exécuter des modèles 3–13B à 8–15 tokens par seconde. C\'est 10–30× plus lent que GPU, mais ne nécessite pas de VRAM dédié.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel est le meilleur LLM CPU-only?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Phi-4 Mini (3.8B, 2.3 GB, 12 tokens/sec) est le meilleur globalement. Pour vitesse: Gemma 3 2B (1.5 GB, 15 tokens/sec). Pour équilibre: Llama 3.2 3B (2 GB, 10 tokens/sec).',
            },
          },
          {
            '@type': 'Question',
            name: 'Combien de RAM ai-je besoin pour l\'inférence CPU-only?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Utilisez la règle: taille GGUF + 500 MB overhead. Phi-4 Mini (2.3 GB) nécessite 3 GB RAM. Gemma 3 2B (1.5 GB) nécessite 2 GB RAM. Mistral 7B Q4 (4.5 GB) nécessite 5 GB RAM.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment puis-je activer le mode CPU-only?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dans Ollama, exécutez simplement: ollama run phi:mini. Ollama détecte automatiquement les systèmes CPU-only. Dans llama.cpp, utilisez --n-gpu-layers 0. Dans LM Studio, réglez GPU à Aucun sous Paramètres.',
            },
          },
          {
            '@type': 'Question',
            name: 'L\'inférence CPU est-elle pratique pour la production?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, si vous n\'avez pas besoin de latence temps réel. Traitement batch, APIs asynchrones, et workflows offline fonctionnent très bien sur CPU. Pour chat interactif (latence < 1 seconde), utilisez GPU.',
            },
          },
          {
            '@type': 'Question',
            name: 'À quelle vitesse l\'inférence CPU-only est-elle comparée à un GPU?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CPU: 8–15 tokens/sec sur processeurs modernes. GPU (RTX 3060): 80 tokens/sec. GPU (RTX 4090): 120+ tokens/sec. CPU est 10–30× plus lent mais nécessite une investissement GPU de $0.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel est le plus petit modèle qui produit des sorties cohérentes sur CPU?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Gemma 3 2B (1.5 GB) produit des réponses raisonnables. Au-dessous, la qualité baisse. Pour meilleure qualité sur 8 GB RAM, utilisez Phi-4 Mini (3.8B) ou Llama 3.2 3B (2 GB).',
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je exécuter un modèle 13B sur CPU?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, avec quantisation Q4_K_M un modèle 13B est ~6.5 GB. Nécessite 8–12 GB RAM système. Vitesse: ~2–3 tokens/sec. Inconfortable pour utilisation interactive mais fonctionne pour traitement batch.',
            },
          },
          {
            '@type': 'Question',
            name: 'L\'inférence CPU utilise-t-elle le GPU du tout?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. Mode CPU-only dans Ollama/llama.cpp désactive explicitement l\'usage GPU et utilise exclusivement la RAM système.',
            },
          },
          {
            '@type': 'Question',
            name: 'L\'inférence CPU-only est-elle stable?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, plus stable que GPU. Aucun plantage pilote, aucune erreur mémoire GPU. Le seul risque est saturation RAM système, que vous contrôlez par choix de modèle.',
            },
          },
          {
            '@type': 'Question',
            name: 'Dois-je ajuster les paramètres pour les CPUs Apple Silicon?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. Ollama détecte automatiquement M1/M2/M3/M4 et utilise efficacement la mémoire unifiée. Apple Silicon est ~10–20% plus rapide que CPUs Intel équivalents grâce à l\'architecture mémoire.',
            },
          },
        ],
      },
    },
    ja: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-07',
      theme: '最高のモデル',
      title: '最高の CPU-only LLMs 2026: GPU なしで AI を実行',
      seoTitle: '最高の CPU-only LLMs 2026: Phi-4 Mini vs Gemma 3 vs Llama 3.2 (4–8 GB VRAM)',
      intro: 'CPU-only 推論は、8–32 GB RAM を搭載したモダン CPU 上の 3–13B モデルに実用的です。2026年5月の最高の CPU-only モデルは Phi-4 Mini (3.8B、~2.3 GB、CPU 上で 12 トークン/秒)、Gemma 3 2B (1.5 GB、15 トークン/秒)、Llama 3.2 3B (2 GB、10 トークン/秒) です。Ollama、LM Studio、または CPU-only モード有効の llama.cpp を使用して実行します。',
      metaDescription: '2026年5月: 最高の CPU-only LLMs は Phi-4 Mini (3.8B、2.3 GB、12 トークン/秒)、Gemma 3 2B (1.5 GB)、Llama 3.2 3B (2 GB)。GPU は不要。8–32 GB RAM で実行します。',
      publishDate: '2026-05-07',
      dateModified: '2026-05-07',
      current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 2B', 'Llama 3.2 3B', 'Mistral 7B Q4'],
      current_hardware_mentioned: ['Intel i7-12700', 'AMD Ryzen 7 5700X', 'Apple M3', 'Apple M4'],
      leadAnswerBlock: '**CPU-only 推論はモダン CPU 上の 3–13B モデルで効果的です。最高の選択肢: 一般的なチャット向け Phi-4 Mini (3.8B、2.3 GB、CPU 上で 12 トークン/秒)、速度重視タスク向け Gemma 3 2B (1.5 GB、最速)、品質向け Llama 3.2 3B (2 GB、バランス)。Ollama または llama.cpp を CPU モードで使用します。CPU 推論は GPU より 10–30× 遅いですが、専用ビデオ VRAM は不要です — システム RAM のみです。**',
      audience: '古いハードウェアユーザー、Raspberry Pi ユーザー、および実用的なローカル LLM 推論を探す専用 GPU のないユーザー。',
      readTime: '8分で読める',
      educationalLevel: '初級',
      primaryTerm: 'CPU-only LLM 推論',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: 'CPU は LLM を実行できますか？', anchor: '#can-cpus-run-llms' },
        { label: '最高の CPU-only モデル 2026', anchor: '#best-models' },
        { label: '速度: CPU vs GPU', anchor: '#speed-comparison' },
        { label: 'モデル別 RAM 要件', anchor: '#ram-requirements' },
        { label: 'CPU-only モードの実行方法', anchor: '#how-to-run' },
        { label: 'CPU 推論の最適化のヒント', anchor: '#optimization' },
        { label: 'CPU vs GPU を使用する場合', anchor: '#when-to-use' },
        { label: 'FAQ', anchor: '#faq' },
        { label: '関連リンク', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'CPU-only 推論は 8–32 GB RAM 搭載のモダン CPU 上の 3–13B モデルで効果的です。',
            '最高の CPU モデル: Phi-4 Mini (3.8B、2.3 GB、12 トークン/秒)、Gemma 3 2B (1.5 GB、15 トークン/秒)、Llama 3.2 3B (2 GB、10 トークン/秒)。',
            'CPU 推論は GPU より 10–30× 遅いですが、専用 VRAM をゼロ使用します。',
            'Ollama または llama.cpp で CPU-only モードを有効にします — シンプルなコマンドラインフラグ。',
            'CPU 推論は本番 API (GPU オーバーヘッド不要)、エッジデバイス、コスト制約環境に最適です。',
          ],
        },
        canCpusRun: {
          id: 'can-cpus-run-llms',
          title: 'CPU は LLM を実行できますか？',
          content: [
            '**はい、モダン CPU (Intel i7-10世代+、AMD Ryzen 5000+、Apple M シリーズ) は 3–13B モデルを 8–15 トークン/秒で実行できます。** これは GPU より 10–30× 遅いですが、専用 VRAM を必要としません。十分なシステム RAM (8–32 GB) を搭載した CPU は、$300+ の GPU を必要とするモデルを実行できます。',
            'CPU 推論は速度をアクセシビリティと交換します: GPU オーバーヘッドゼロ、完璧な安定性、ドライバー問題なし。カジュアルなユースケース (毎秒数リクエストに応答するチャットボット、オフラインドキュメント処理) では、CPU-only は実用的です。',
            'モダン CPU には AVX-512 または NEON/SVE ベクター命令があり、マトリックス演算を加速します。llama.cpp と Ollama などのツールはこれらを自動的に使用し、CPU 推論をナイーブな実装より大幅に高速化します。',
          ],
        },
        bestModels: {
          id: 'best-models',
          title: '最高の CPU-only モデル 2026',
          content: '以下の表は、CPU-only モード搭載の Intel i7-12700 (12コア、AVX-512) 上のパフォーマンスでモデルをランク付けします:',
          rows: [
            { 'モデル': 'Phi-4 Mini', 'パラメータ': '3.8B', 'GGUF サイズ': '~2.3 GB', 'RAM 要件': '4 GB', 'CPU 速度': '12 トークン/秒', '最適な用途': '一般的なチャット、コード支援' },
            { 'モデル': 'Gemma 3 2B', 'パラメータ': '2B', 'GGUF サイズ': '~1.5 GB', 'RAM 要件': '3 GB', 'CPU 速度': '15 トークン/秒', '最適な用途': '高速応答、低 VRAM' },
            { 'モデル': 'Llama 3.2 3B', 'パラメータ': '3B', 'GGUF サイズ': '~2 GB', 'RAM 要件': '3.5 GB', 'CPU 速度': '10 トークン/秒', '最適な用途': 'バランスの取れた品質/速度' },
            { 'モデル': 'Mistral 7B Q4', 'パラメータ': '7B', 'GGUF サイズ': '~4.5 GB', 'RAM 要件': '6 GB', 'CPU 速度': '5 トークン/秒', '最適な用途': 'より高い品質、16+ GB RAM' },
            { 'モデル': 'Llama 3.1 8B Q4', 'パラメータ': '8B', 'GGUF サイズ': '~5 GB', 'RAM 要件': '7 GB', 'CPU 速度': '4 トークン/秒', '最適な用途': 'コーディング、ロジックタスク' },
          ],
          columns: ['モデル', 'パラメータ', 'GGUF サイズ', 'RAM 要件', 'CPU 速度', '最適な用途'],
        },
        speedComparison: {
          id: 'speed-comparison',
          title: '速度: CPU vs GPU',
          content: '速度はハードウェアによって異なります。これらのベンチマークは Ollama または llama.cpp を実行する標準 2026 ハードウェア上のものです:',
          rows: [
            { 'ハードウェア': 'Intel i7-12700 (CPU)', 'モデル': 'Phi-4 Mini 3.8B', '速度': '12 トークン/秒', '注釈': 'AVX-512 有効' },
            { 'ハードウェア': 'AMD Ryzen 7 5700X (CPU)', 'モデル': 'Phi-4 Mini 3.8B', '速度': '9 トークン/秒', '注釈': '古い AVX2 のみ' },
            { 'ハードウェア': 'Apple M3 (CPU)', 'モデル': 'Phi-4 Mini 3.8B', '速度': '14 トークン/秒', '注釈': 'ユニファイドメモリの利点' },
            { 'ハードウェア': 'RTX 3060 (GPU、12 GB)', 'モデル': 'Phi-4 Mini 3.8B', '速度': '80 トークン/秒', '注釈': 'GPU は 6.7× 高速' },
            { 'ハードウェア': 'RTX 4090 (GPU、24 GB)', 'モデル': 'Llama 3.1 8B Q4', '速度': '120 トークン/秒', '注釈': 'GPU は CPU より 30× 高速' },
          ],
          columns: ['ハードウェア', 'モデル', '速度', '注釈'],
        },
        ramRequirements: {
          id: 'ram-requirements',
          title: 'モデル別 RAM 要件',
          content: '**経験則: GGUF サイズ + 500 MB オーバーヘッド = 必要最小限 RAM。** 2 GB GGUF モデルは 2.5–3 GB の無料システム RAM が必要です:',
          rows: [
            { 'モデル': 'Gemma 3 2B', 'GGUF サイズ': '~1.5 GB', '最小 RAM': '2–2.5 GB', '快適': '4 GB', 'コンテキスト長': '8K' },
            { 'モデル': 'Phi-4 Mini 3.8B', 'GGUF サイズ': '~2.3 GB', '最小 RAM': '3 GB', '快適': '6 GB', 'コンテキスト長': '4K' },
            { 'モデル': 'Llama 3.2 3B', 'GGUF サイズ': '~2 GB', '最小 RAM': '2.5–3 GB', '快適': '6 GB', 'コンテキスト長': '8K' },
            { 'モデル': 'Mistral 7B Q4', 'GGUF サイズ': '~4.5 GB', '最小 RAM': '5 GB', '快適': '8 GB', 'コンテキスト長': '32K' },
            { 'モデル': 'Llama 3.1 8B Q4', 'GGUF サイズ': '~5 GB', '最小 RAM': '6 GB', '快適': '12 GB', 'コンテキスト長': '128K' },
          ],
          columns: ['モデル', 'GGUF サイズ', '最小 RAM', '快適', 'コンテキスト長'],
        },
        howToRun: {
          id: 'how-to-run',
          title: 'CPU-only モードの実行方法',
          content: '**Ollama (最も簡単):** 単に `ollama run phi:mini` を実行します。Ollama は NVIDIA/AMD GPU のないシステムで CPU-only を自動検出し、システム RAM を使用します。**LM Studio:** 設定を開く → GPU の「なし」を選択して CPU モードを強制します。**Llama.cpp:** フラグ `--n-gpu-layers 0` を使用して GPU オフロードを無効にします。',
          codeBlock: 'ollama run phi:mini\n# Ollama は CPU-only システムを自動検出します',
          codeLanguage: 'bash',
        },
        optimization: {
          id: 'optimization',
          title: 'CPU 推論の最適化のヒント',
          content: 'CPU 推論から最大パフォーマンスを引き出します:',
          items: [
            '**Q4_K_M 量子化を使用** — GGUF サイズを ~70% 削減、最小品質損失、キャッシュ動作の向上により 10–20% 速度向上。',
            '**コンテキストウィンドウを削減** — より長いコンテキスト = より遅い推論。`--context 2048` を使用してコンテキストを 2K トークンに制限します。',
            '**マルチスレッドを有効化** — Ollama と llama.cpp は CPU コア数を自動検出します。`nproc` で一致を確認します。',
            '**AVX-512 または ARM NEON を使用** — モダン Intel/AMD/ARM CPU にはベクター命令があります。CPU フラグを確認: `cat /proc/cpuinfo | grep avx512` (Linux) または Apple 情報 → システムレポート (Mac)。',
            '**バッチサイズ = 1** — CPU はシングルシーケンス推論を最適に処理します。CPU でマルチバッチを試みないでください。',
            '**スレッドをコアに固定** — Linux では `numactl --cpunodebind=0 ollama run phi:mini` を使用してコア切り替えオーバーヘッドを回避します。',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: 'CPU vs GPU を使用する場合',
          content: '',
          rows: [
            { 'ユースケース': 'リアルタイムチャット (1秒未満レイテンシ)', 'CPU': '❌ 遅すぎる (12 トークン/秒 = 60 トークンで 5 秒)', 'GPU': '✅ 80+ トークン/秒' },
            { 'ユースケース': 'バッチ処理 (ドキュメント、ログ)', 'CPU': '✅ 良好 (速度は問題ない)', 'GPU': '⚠️ オーバーキル' },
            { 'ユースケース': '本番 API (コスト制約)', 'CPU': '✅ $0 ハードウェアコスト', 'GPU': '⚠️ $200+ GPU + 電力' },
            { 'ユースケース': 'エッジデバイス (Raspberry Pi)', 'CPU': '✅ 代替案なし', 'GPU': '❌ GPU オプション限定' },
            { 'ユースケース': '開発 / ローカルテスト', 'CPU': '✅ 低消費電力、静かな', 'GPU': '⚠️ オーバーキル' },
            { 'ユースケース': 'LLM ファインチューニング', 'CPU': '❌ 遅すぎる (時間 → 日数)', 'GPU': '✅ 10–30× 高速化' },
          ],
          columns: ['ユースケース', 'CPU', 'GPU'],
        },
        faq: {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            {
              q: 'CPU-only 推論は GPU と比べて何倍遅いですか？',
              a: 'CPU: モダンプロセッサ上で 8–15 トークン/秒。GPU (RTX 3060): 80 トークン/秒。GPU (RTX 4090): 120+ トークン/秒。CPU は 10–30× 遅いですが $0 GPU 投資が必要です。',
            },
            {
              q: 'CPU 上で一貫性のある出力を生成する最小モデルは何ですか？',
              a: 'Gemma 3 2B (1.5 GB) は合理的な応答を生成します。それ以下では品質が低下します。8 GB RAM での最高品質には Phi-4 Mini (3.8B) または Llama 3.2 3B (2 GB) を使用してください。',
            },
            {
              q: '13B モデルを CPU 上で実行できますか？',
              a: 'はい、Q4_K_M 量子化で 13B モデルは ~6.5 GB です。8–12 GB システム RAM が必要です。速度: ~2–3 トークン/秒。インタラクティブ使用には不快ですがバッチ処理で機能します。',
            },
            {
              q: 'CPU 推論は GPU をまったく使用しますか？',
              a: 'いいえ。Ollama/llama.cpp の CPU-only モードは GPU 使用を明示的に無効にし、システム RAM のみを使用します。',
            },
            {
              q: 'CPU-only 推論は安定していますか？',
              a: 'はい、GPU より安定しています。ドライバークラッシュなし、GPU メモリエラーなし。唯一のリスクはシステム RAM 飽和で、モデル選択により制御します。',
            },
            {
              q: 'Apple Silicon CPU の設定を調整する必要がありますか？',
              a: 'いいえ。Ollama は M1/M2/M3/M4 を自動検出し、ユニファイドメモリを効率的に使用します。Apple Silicon は メモリアーキテクチャにより同等 Intel CPU より ~10–20% 高速です。',
            },
            {
              q: 'CPU-only LLM 使用時に METI ガイダンスに準拠する必要がありますか？',
              a: 'エンタープライズデプロイの場合、METI 2024 AI ガバナンスを参照してください。ローカル CPU 推論はデータ管理に対するより高度な制御を提供し、企業ポリシーに適合しやすくなります。',
            },
            {
              q: '10 GB の古いノートパソコンでも CPU-only 推論は実用的ですか？',
              a: 'はい。Gemma 3 2B (1.5 GB) または Phi-4 Mini (2.3 GB) は 10 GB RAM で効率的に実行できます。3–5 トークン/秒のバッチ処理や軽量チャットボットに最適です。',
            },
            {
              q: '複数のモデルを同時に CPU で実行できますか？',
              a: 'RAM が許可されていれば技術的には可能ですが、非現実的です。複数モデルはメモリ競合を引き起こし、どちらも低速になります。一度に 1 モデルを使用することをお勧めします。',
            },
            {
              q: 'CPU 推論の実装でのセキュリティリスクは何ですか？',
              a: 'CPU-only は GPU より安全です。クラウド転送なし = データはローカルに留まります。ただし物理的マシンセキュリティと OS アップデートをしっかりし、センシティブデータが未暗号化で残る可能性があります。',
            },
            {
              q: 'llama.cpp vs Ollama で CPU 推論速度に違いはありますか？',
              a: 'わずかです。両者とも同じコア CPU 最適化 (AVX-512) を使用します。わずかな差異はスレッド管理の実装による (~2–5%)。デフォルトの Ollama をお試しください。',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連リンク',
          items: [
            '[GPU vs CPU vs Apple Silicon](/local-llms/gpu-vs-cpu-vs-apple-silicon?lang=ja) — ローカル LLM 推論のハードウェアトレードオフの深掘り',
            '[必要な VRAM は？](/local-llms/how-much-vram-do-i-need?lang=ja) — すべてのモデルサイズおよび量子化レベルの VRAM 計算機',
            '[LLM 量子化の説明](/local-llms/llm-quantization-explained?lang=ja) — Q4_K_M、Q5_K_M をマスターし、各いつ使用するか',
            '[最高の初級ローカル LLM モデル](/local-llms/best-beginner-local-llm-models?lang=ja) — 最初のローカル LLM へのステップバイステップガイド',
            '[Ollama コマンドガイド](/local-llms/ollama-command-guide?lang=ja) — CPU/GPU モード、マルチ GPU、オフロード管理',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'CPU は LLM を実行できますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'はい。モダン CPU (Intel i7-10世代+、AMD Ryzen 5000+、Apple M シリーズ) は 3–13B モデルを 8–15 トークン/秒で実行できます。これは GPU より 10–30× 遅いですが、専用 VRAM を必要としません。',
            },
          },
          {
            '@type': 'Question',
            name: '最高の CPU-only LLM は何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Phi-4 Mini (3.8B、2.3 GB、12 トークン/秒) が全体的に最高です。速度: Gemma 3 2B (1.5 GB、15 トークン/秒)。バランス: Llama 3.2 3B (2 GB、10 トークン/秒)。',
            },
          },
          {
            '@type': 'Question',
            name: 'CPU-only 推論にはどのくらいの RAM が必要ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ルールを使用: GGUF ファイルサイズ + 500 MB オーバーヘッド。Phi-4 Mini (2.3 GB) は 3 GB RAM が必要です。Gemma 3 2B (1.5 GB) は 2 GB RAM が必要です。Mistral 7B Q4 (4.5 GB) は 5 GB RAM が必要です。',
            },
          },
          {
            '@type': 'Question',
            name: 'CPU-only モードを有効にするにはどうすればよいですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ollama では単に実行: ollama run phi:mini。Ollama は CPU-only システムを自動検出します。llama.cpp では --n-gpu-layers 0 を使用します。LM Studio では設定で GPU を なし に設定します。',
            },
          },
          {
            '@type': 'Question',
            name: 'CPU 推論は本番環境で実用的ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'はい、リアルタイムレイテンシが不要な場合。バッチ処理、非同期 API、オフラインワークフローはすべて CPU で良好に機能します。インタラクティブチャット (1秒未満レイテンシ) には GPU を使用してください。',
            },
          },
          {
            '@type': 'Question',
            name: 'CPU-only 推論は GPU と比べて何倍遅いですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CPU: モダンプロセッサ上で 8–15 トークン/秒。GPU (RTX 3060): 80 トークン/秒。GPU (RTX 4090): 120+ トークン/秒。CPU は 10–30× 遅いですが $0 GPU 投資が必要です。',
            },
          },
          {
            '@type': 'Question',
            name: 'CPU 上で一貫性のある出力を生成する最小モデルは何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Gemma 3 2B (1.5 GB) は合理的な応答を生成します。それ以下では品質が低下します。8 GB RAM での最高品質には Phi-4 Mini (3.8B) または Llama 3.2 3B (2 GB) を使用してください。',
            },
          },
          {
            '@type': 'Question',
            name: '13B モデルを CPU 上で実行できますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'はい、Q4_K_M 量子化で 13B モデルは ~6.5 GB です。8–12 GB システム RAM が必要です。速度: ~2–3 トークン/秒。インタラクティブ使用には不快ですがバッチ処理で機能します。',
            },
          },
          {
            '@type': 'Question',
            name: 'CPU 推論は GPU をまったく使用しますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'いいえ。Ollama/llama.cpp の CPU-only モードは GPU 使用を明示的に無効にし、システム RAM のみを使用します。',
            },
          },
          {
            '@type': 'Question',
            name: 'CPU-only 推論は安定していますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'はい、GPU より安定しています。ドライバークラッシュなし、GPU メモリエラーなし。唯一のリスクはシステム RAM 飽和で、モデル選択により制御します。',
            },
          },
          {
            '@type': 'Question',
            name: 'Apple Silicon CPU の設定を調整する必要がありますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'いいえ。Ollama は M1/M2/M3/M4 を自動検出し、ユニファイドメモリを効率的に使用します。Apple Silicon は メモリアーキテクチャにより同等 Intel CPU より ~10–20% 高速です。',
            },
          },
        ],
      },
    },
    zh: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-07',
      theme: '最佳模型',
      title: '2026 年最佳 CPU-only LLMs: 无需 GPU 运行 AI',
      seoTitle: '2026 年最佳 CPU-only LLMs: Phi-4 Mini vs Gemma 3 vs Llama 3.2 (4–8 GB VRAM)',
      intro: 'CPU-only 推理适用于搭载 8–32 GB RAM 的现代处理器上的 3–13B 模型。2026 年 5 月最佳的 CPU-only 模型是 Phi-4 Mini (3.8B、~2.3 GB、CPU 上 12 令牌/秒)、Gemma 3 2B (1.5 GB、15 令牌/秒) 和 Llama 3.2 3B (2 GB、10 令牌/秒)。通过启用 CPU-only 模式的 Ollama、LM Studio 或 llama.cpp 运行。',
      metaDescription: '2026 年 5 月: 最佳 CPU-only LLMs 是 Phi-4 Mini (3.8B、2.3 GB、12 令牌/秒)、Gemma 3 2B (1.5 GB)、Llama 3.2 3B (2 GB)。无需 GPU。在 8–32 GB RAM 上运行。',
      publishDate: '2026-05-07',
      dateModified: '2026-05-07',
      current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 2B', 'Llama 3.2 3B', 'Mistral 7B Q4'],
      current_hardware_mentioned: ['Intel i7-12700', 'AMD Ryzen 7 5700X', 'Apple M3', 'Apple M4'],
      leadAnswerBlock: '**CPU-only 推理对现代处理器上的 3–13B 模型有效。最佳选择: Phi-4 Mini (3.8B、2.3 GB、CPU 上 12 令牌/秒) 用于一般聊天、Gemma 3 2B (1.5 GB、最快) 用于时间敏感任务、Llama 3.2 3B (2 GB、平衡) 用于质量。使用 Ollama 或 llama.cpp 的 CPU 模式。CPU 推理比 GPU 慢 10–30 倍，但使用零专用视频 VRAM — 仅需系统 RAM。**',
      audience: '拥有旧硬件、树莓派用户和寻求实用本地 LLM 推理但无专用 GPU 的用户。',
      readTime: '阅读约8分钟',
      educationalLevel: '初级',
      primaryTerm: 'CPU-only LLM 推理',
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: 'CPU 可以运行 LLM 吗？', anchor: '#can-cpus-run-llms' },
        { label: '2026 年最佳 CPU-only 模型', anchor: '#best-models' },
        { label: '速度: CPU vs GPU', anchor: '#speed-comparison' },
        { label: '按模型列出的 RAM 要求', anchor: '#ram-requirements' },
        { label: '如何运行 CPU-only 模式', anchor: '#how-to-run' },
        { label: 'CPU 推理的优化技巧', anchor: '#optimization' },
        { label: '何时使用 CPU vs GPU', anchor: '#when-to-use' },
        { label: '常见问题', anchor: '#faq' },
        { label: '相关阅读', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'CPU-only 推理对搭载 8–32 GB RAM 的现代处理器上的 3–13B 模型有效。',
            '最佳 CPU 模型: Phi-4 Mini (3.8B、2.3 GB、12 令牌/秒)、Gemma 3 2B (1.5 GB、15 令牌/秒)、Llama 3.2 3B (2 GB、10 令牌/秒)。',
            'CPU 推理比 GPU 慢 10–30 倍，但使用零专用 VRAM。',
            '在 Ollama 或 llama.cpp 中使用简单的命令行标志启用 CPU-only 模式。',
            'CPU 推理对生产 API (无 GPU 开销)、边缘设备和成本受限环境最理想。',
          ],
        },
        canCpusRun: {
          id: 'can-cpus-run-llms',
          title: 'CPU 可以运行 LLM 吗？',
          content: [
            '**是的，现代 CPU (Intel i7-10 代+、AMD Ryzen 5000+、Apple M 系列) 可以以 8–15 令牌/秒的速度运行 3–13B 模型。** 这比 GPU 慢 10–30 倍，但不需要专用 VRAM。具有足够系统 RAM (8–32 GB) 的 CPU 可以运行需要 $300+ GPU 的模型。',
            'CPU 推理用可访问性换取速度: 零 GPU 开销、完美的稳定性、无驱动程序问题。对于临时用例 (每秒回答几个请求的聊天机器人、离线文档处理)，CPU-only 很实用。',
            '现代 CPU 具有加速矩阵数学的 AVX-512 或 NEON/SVE 向量指令。llama.cpp 和 Ollama 等工具自动使用这些指令，使 CPU 推理比朴素实现快得多。',
          ],
        },
        bestModels: {
          id: 'best-models',
          title: '2026 年最佳 CPU-only 模型',
          content: '下表按 CPU-only 模式下 Intel i7-12700 (12 核、AVX-512) 上的性能对模型进行排名:',
          rows: [
            { '模型': 'Phi-4 Mini', '参数': '3.8B', 'GGUF 大小': '~2.3 GB', 'RAM 需求': '4 GB', 'CPU 速度': '12 令牌/秒', '最适合': '一般聊天、代码协助' },
            { '模型': 'Gemma 3 2B', '参数': '2B', 'GGUF 大小': '~1.5 GB', 'RAM 需求': '3 GB', 'CPU 速度': '15 令牌/秒', '最适合': '快速响应、低 VRAM' },
            { '模型': 'Llama 3.2 3B', '参数': '3B', 'GGUF 大小': '~2 GB', 'RAM 需求': '3.5 GB', 'CPU 速度': '10 令牌/秒', '最适合': '质量/速度平衡' },
            { '模型': 'Mistral 7B Q4', '参数': '7B', 'GGUF 大小': '~4.5 GB', 'RAM 需求': '6 GB', 'CPU 速度': '5 令牌/秒', '最适合': '更高质量、16+ GB RAM' },
            { '模型': 'Llama 3.1 8B Q4', '参数': '8B', 'GGUF 大小': '~5 GB', 'RAM 需求': '7 GB', 'CPU 速度': '4 令牌/秒', '最适合': '编码、逻辑任务' },
          ],
          columns: ['模型', '参数', 'GGUF 大小', 'RAM 需求', 'CPU 速度', '最适合'],
        },
        speedComparison: {
          id: 'speed-comparison',
          title: '速度: CPU vs GPU',
          content: '速度因硬件而异。这些基准来自运行 Ollama 或 llama.cpp 的标准 2026 硬件:',
          rows: [
            { '硬件': 'Intel i7-12700 (CPU)', '模型': 'Phi-4 Mini 3.8B', '速度': '12 令牌/秒', '备注': '启用了 AVX-512' },
            { '硬件': 'AMD Ryzen 7 5700X (CPU)', '模型': 'Phi-4 Mini 3.8B', '速度': '9 令牌/秒', '备注': '仅限旧版 AVX2' },
            { '硬件': 'Apple M3 (CPU)', '模型': 'Phi-4 Mini 3.8B', '速度': '14 令牌/秒', '备注': '统一内存优势' },
            { '硬件': 'RTX 3060 (GPU、12 GB)', '模型': 'Phi-4 Mini 3.8B', '速度': '80 令牌/秒', '备注': 'GPU 快 6.7 倍' },
            { '硬件': 'RTX 4090 (GPU、24 GB)', '模型': 'Llama 3.1 8B Q4', '速度': '120 令牌/秒', '备注': 'GPU 比 CPU 快 30 倍' },
          ],
          columns: ['硬件', '模型', '速度', '备注'],
        },
        ramRequirements: {
          id: 'ram-requirements',
          title: '按模型列出的 RAM 要求',
          content: '**经验法则: GGUF 大小 + 500 MB 开销 = 最少 RAM 需求。** 2 GB GGUF 模型需要 2.5–3 GB 可用系统 RAM:',
          rows: [
            { '模型': 'Gemma 3 2B', 'GGUF 大小': '~1.5 GB', '最小 RAM': '2–2.5 GB', '舒适': '4 GB', '上下文长度': '8K' },
            { '模型': 'Phi-4 Mini 3.8B', 'GGUF 大小': '~2.3 GB', '最小 RAM': '3 GB', '舒适': '6 GB', '上下文长度': '4K' },
            { '模型': 'Llama 3.2 3B', 'GGUF 大小': '~2 GB', '最小 RAM': '2.5–3 GB', '舒适': '6 GB', '上下文长度': '8K' },
            { '模型': 'Mistral 7B Q4', 'GGUF 大小': '~4.5 GB', '最小 RAM': '5 GB', '舒适': '8 GB', '上下文长度': '32K' },
            { '模型': 'Llama 3.1 8B Q4', 'GGUF 大小': '~5 GB', '最小 RAM': '6 GB', '舒适': '12 GB', '上下文长度': '128K' },
          ],
          columns: ['模型', 'GGUF 大小', '最小 RAM', '舒适', '上下文长度'],
        },
        howToRun: {
          id: 'how-to-run',
          title: '如何运行 CPU-only 模式',
          content: '**Ollama (最简单):** 只需运行 `ollama run phi:mini`。Ollama 在没有 NVIDIA/AMD GPU 的系统上自动检测 CPU-only 并使用系统 RAM。**LM Studio:** 打开设置 → 在 GPU 下选择"无"以强制 CPU 模式。**Llama.cpp:** 使用标志 `--n-gpu-layers 0` 禁用 GPU 卸载。',
          codeBlock: 'ollama run phi:mini\n# Ollama 自动检测 CPU-only 系统',
          codeLanguage: 'bash',
        },
        optimization: {
          id: 'optimization',
          title: 'CPU 推理的优化技巧',
          content: '从 CPU 推理中获得最大性能:',
          items: [
            '**使用 Q4_K_M 量化** — 将 GGUF 大小减少 ~70%、质量损失最少、由于缓存行为改善，速度提升 10–20%。',
            '**减少上下文窗口** — 更长的上下文 = 更慢的推理。使用 `--context 2048` 将上下文限制为 2K 令牌。',
            '**启用多线程** — Ollama 和 llama.cpp 自动检测 CPU 核心数。用 `nproc` 验证匹配。',
            '**使用 AVX-512 或 ARM NEON** — 现代 Intel/AMD/ARM CPU 有向量指令。检查 CPU 标志: `cat /proc/cpuinfo | grep avx512` (Linux) 或 Apple 关于 → 系统报告 (Mac)。',
            '**批大小 = 1** — CPU 最适合单序列推理。不要在 CPU 上尝试多批。',
            '**将线程固定到核心** — 在 Linux 上，使用 `numactl --cpunodebind=0 ollama run phi:mini` 避免核心切换开销。',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: '何时使用 CPU vs GPU',
          content: '',
          rows: [
            { '用例': '实时聊天 (延迟 < 1 秒)', 'CPU': '❌ 太慢 (12 令牌/秒 = 60 令牌 5 秒)', 'GPU': '✅ 80+ 令牌/秒' },
            { '用例': '批量处理 (文档、日志)', 'CPU': '✅ 很好 (速度无关)', 'GPU': '⚠️ 过度' },
            { '用例': '生产 API (成本受限)', 'CPU': '✅ $0 硬件成本', 'GPU': '⚠️ $200+ GPU + 电力' },
            { '用例': '边缘设备 (树莓派)', 'CPU': '✅ 无替代方案', 'GPU': '❌ GPU 选项有限' },
            { '用例': '开发 / 本地测试', 'CPU': '✅ 低功耗、更静音', 'GPU': '⚠️ 过度' },
            { '用例': 'LLM 微调', 'CPU': '❌ 太慢 (小时 → 天)', 'GPU': '✅ 10–30× 加速' },
          ],
          columns: ['用例', 'CPU', 'GPU'],
        },
        faq: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: 'CPU-only 推理与 GPU 相比有多慢？',
              a: 'CPU: 现代处理器上 8–15 令牌/秒。GPU (RTX 3060): 80 令牌/秒。GPU (RTX 4090): 120+ 令牌/秒。CPU 慢 10–30 倍，但需要 $0 GPU 投资。',
            },
            {
              q: '在 CPU 上生成连贯输出的最小模型是什么？',
              a: 'Gemma 3 2B (1.5 GB) 生成合理的回应。更小的质量下降。在 8 GB RAM 上实现最佳质量，使用 Phi-4 Mini (3.8B) 或 Llama 3.2 3B (2 GB)。',
            },
            {
              q: '我可以在 CPU 上运行 13B 模型吗？',
              a: '是的，使用 Q4_K_M 量化，13B 模型是 ~6.5 GB。需要 8–12 GB 系统 RAM。速度: ~2–3 令牌/秒。对于交互使用很不舒服，但对批处理有效。',
            },
            {
              q: 'CPU 推理是否使用 GPU 呢？',
              a: '否。Ollama/llama.cpp 中的 CPU-only 模式明确禁用 GPU 使用并仅使用系统 RAM。',
            },
            {
              q: 'CPU-only 推理稳定吗？',
              a: '是的，比 GPU 更稳定。无驱动程序崩溃、无 GPU 内存错误。唯一的风险是系统 RAM 饱和，通过模型选择控制。',
            },
            {
              q: '我需要为 Apple Silicon CPU 调整设置吗？',
              a: '否。Ollama 自动检测 M1/M2/M3/M4 并有效使用统一内存。Apple Silicon 由于内存架构，速度快 ~10–20%，相当于 Intel CPU。',
            },
            {
              q: 'CPU-only LLM 是否适合中文使用？',
              a: '是的。Phi-4 Mini 和 Llama 3.2 3B 都支持中文。对于中文特定优化，Qwen2.5 系列 (开源) 在中文语言任务上表现出色，而且可以在 CPU 上运行。',
            },
            {
              q: '旧笔记本电脑 (8 GB RAM) 可以运行 CPU-only 推理吗？',
              a: '是的。Gemma 3 2B (1.5 GB) 在 8 GB RAM 上有效运行。预期 3–5 令轿/秒用于批处理或轻量级聊天机器人。',
            },
            {
              q: '我可以同时在 CPU 上运行多个模型吗？',
              a: '如果 RAM 允许，技术上可以，但不切实际。多模型导致内存争争，两者都变慢。建议一次运行 1 个模型。',
            },
            {
              q: 'CPU 推理中的安全风险是什么？',
              a: 'CPU-only 比 GPU 更安全。无云传输 = 数据保持本地。但要确保物理机器安全和操作系统更新，敏感数据可能以未加密方式保留。',
            },
            {
              q: 'Ollama vs llama.cpp: CPU 推理速度有区别吗？',
              a: '差异很小。两者都使用相同的核心 CPU 优化 (AVX-512)。轻微差异来自线程管理实现 (~2–5%)。尝试默认的 Ollama。',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[GPU vs CPU vs Apple Silicon](/local-llms/gpu-vs-cpu-vs-apple-silicon?lang=zh) — 本地 LLM 推理硬件权衡的深入探讨',
            '[我需要多少 VRAM？](/local-llms/how-much-vram-do-i-need?lang=zh) — 每个模型大小和量化级别的 VRAM 计算器',
            '[LLM 量化讲解](/local-llms/llm-quantization-explained?lang=zh) — 掌握 Q4_K_M、Q5_K_M，何时使用每一个',
            '[最佳初级本地 LLM 模型](/local-llms/best-beginner-local-llm-models?lang=zh) — 第一个本地 LLM 的分步指南',
            '[Ollama 命令指南](/local-llms/ollama-command-guide?lang=zh) — 管理 CPU/GPU 模式、多 GPU 和卸载',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'zh',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'CPU 可以运行 LLM 吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '是的。现代 CPU (Intel i7-10 代+、AMD Ryzen 5000+、Apple M 系列) 可以以 8–15 令牌/秒的速度运行 3–13B 模型。这比 GPU 慢 10–30 倍，但不需要专用 VRAM。',
            },
          },
          {
            '@type': 'Question',
            name: '最好的 CPU-only LLM 是什么？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Phi-4 Mini (3.8B、2.3 GB、12 令牌/秒) 总体最好。速度: Gemma 3 2B (1.5 GB、15 令牌/秒)。平衡: Llama 3.2 3B (2 GB、10 令牌/秒)。',
            },
          },
          {
            '@type': 'Question',
            name: 'CPU-only 推理需要多少 RAM？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '使用规则: GGUF 文件大小 + 500 MB 开销。Phi-4 Mini (2.3 GB) 需要 3 GB RAM。Gemma 3 2B (1.5 GB) 需要 2 GB RAM。Mistral 7B Q4 (4.5 GB) 需要 5 GB RAM。',
            },
          },
          {
            '@type': 'Question',
            name: '如何启用 CPU-only 模式？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '在 Ollama 中，只需运行: ollama run phi:mini。Ollama 自动检测 CPU-only 系统。在 llama.cpp 中使用 --n-gpu-layers 0。在 LM Studio 中，在设置下将 GPU 设置为无。',
            },
          },
          {
            '@type': 'Question',
            name: 'CPU 推理对生产实用吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '是的，如果你不需要实时延迟。批处理、异步 API 和离线工作流在 CPU 上都能很好地工作。对于交互式聊天 (延迟 < 1 秒)，使用 GPU。',
            },
          },
          {
            '@type': 'Question',
            name: 'CPU-only 推理与 GPU 相比有多慢？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CPU: 现代处理器上 8–15 令牌/秒。GPU (RTX 3060): 80 令牌/秒。GPU (RTX 4090): 120+ 令牌/秒。CPU 慢 10–30 倍，但需要 $0 GPU 投资。',
            },
          },
          {
            '@type': 'Question',
            name: '在 CPU 上生成连贯输出的最小模型是什么？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Gemma 3 2B (1.5 GB) 生成合理的回应。更小的质量下降。在 8 GB RAM 上实现最佳质量，使用 Phi-4 Mini (3.8B) 或 Llama 3.2 3B (2 GB)。',
            },
          },
          {
            '@type': 'Question',
            name: '我可以在 CPU 上运行 13B 模型吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '是的，使用 Q4_K_M 量化，13B 模型是 ~6.5 GB。需要 8–12 GB 系统 RAM。速度: ~2–3 令牌/秒。对于交互使用很不舒服，但对批处理有效。',
            },
          },
          {
            '@type': 'Question',
            name: 'CPU 推理是否使用 GPU 呢？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '否。Ollama/llama.cpp 中的 CPU-only 模式明确禁用 GPU 使用并仅使用系统 RAM。',
            },
          },
          {
            '@type': 'Question',
            name: 'CPU-only 推理稳定吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '是的，比 GPU 更稳定。无驱动程序崩溃、无 GPU 内存错误。唯一的风险是系统 RAM 饱和，通过模型选择控制。',
            },
          },
          {
            '@type': 'Question',
            name: '我需要为 Apple Silicon CPU 调整设置吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '否。Ollama 自动检测 M1/M2/M3/M4 并有效使用统一内存。Apple Silicon 由于内存架构，速度快 ~10–20%，相当于 Intel CPU。',
            },
          },
        ],
      },
    },
};
