import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Best Ollama Models for Apple Silicon 2026: Recommendations for 16GB, 36GB, 64GB, 128GB',
    seoTitle: 'Best Ollama Models for Apple Silicon 2026: 16GB–128GB',
    intro: 'Local LLM recommendations by Mac memory: 16GB (Phi-4), 36GB (Llama 3.1 8B), 64GB (Qwen3 32B), 128GB (Llama 3.3 70B), with estimated tok/s based on memory bandwidth. M5 Pro tops out at 64GB.',
    metaDescription: 'Best Ollama models for Apple Silicon: Phi-4 (16GB), Llama 8B (36GB), Qwen3 32B (64GB), Llama 70B (128GB). Estimated tok/s and memory limits.',
    heroImage: '/images/best-models-apple-silicon-2026-by-tier-hero-en.webp',
    twitterDescription: 'Best Ollama models for your Mac: 16GB→Phi-4, 36GB→Llama 8B, 64GB→Qwen3 32B, 128GB→Llama 70B.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    last_full_refresh: '2026-08-27',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-27',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen3 14B', 'Qwen3 32B', 'Mixtral 8x7B', 'Llama 3.3 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M6', 'M5 Ultra'],
    audience: 'Mac users wanting model recommendations per their Mac configuration.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'best models Apple Silicon Mac',
    targetKeywords: ['best LLM Mac', 'model recommendations', 'performance by Mac configuration'],
    leadAnswerBlock: '**16GB: Phi-4. 36GB: Llama 3.1 8B Q8. 64GB: Qwen3 32B Q4. 128GB: Llama 3.3 70B Q5. Estimated speeds on M5 Max: ~32–43 tok/s (36GB pick), ~18–25 (64GB pick), ~7–10 (128GB pick). M5 Pro tops out at 64GB. All run via Ollama on Metal.**',
    quickAnswerTop: {
      en: {
        question: 'Which LLM model should I run on my Mac?',
        answer: '16GB → Phi-4. 36GB → Llama 3.1 8B or Qwen3 14B. 64GB → Qwen3 32B. 128GB → Llama 3.3 70B. Estimates from memory bandwidth, not benchmarks: on M5 Max ~32–43 tok/s (8B Q8, 36GB), ~18–25 (32B Q4, 64GB), ~7–10 (70B Q5, 128GB). M5 Pro tops out at 64GB.',
        bullets: ['16GB: Phi-4 (est. ~10–13 tok/s on M6)', '36GB: Llama 3.1 8B Q8 (est. ~32–43 tok/s, M5 Max)', '64GB: Qwen3 32B Q4 (est. ~9–12 M5 Pro, ~18–25 M5 Max)', '128GB: Llama 3.3 70B Q5 (est. ~7–10 tok/s, M5 Max)', 'M5 Pro tops out at 64GB', 'All available via Ollama'],
        updatedDate: '2026-11-28',
      },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Best Model per Memory Tier', anchor: '#by-tier' },
      { label: 'How to Compare Quality', anchor: '#quality-benchmarks' },
      { label: 'Best Model per Use Case', anchor: '#by-usecase' },
      { label: 'Real User Scenarios', anchor: '#scenarios' },
      { label: 'Models to Avoid', anchor: '#avoid' },
      { label: 'Model Formats Reference', anchor: '#format-reference' },
      { label: 'Downloading These Models', anchor: '#download-guide' },
      { label: 'Related Articles', anchor: '#related-articles' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      byTier: {
        id: 'by-tier',
        title: 'Best Model Recommendations by Mac Memory',
        content: 'Hardware specs checked 2026-11-28 on Apple\'s spec pages for [Mac mini](https://www.apple.com/mac-mini/specs/), [Mac Studio](https://www.apple.com/mac-studio/specs/) and [MacBook Pro](https://www.apple.com/macbook-pro/specs/). Mac mini: M6 (up to 32GB) or M5 Pro (24, 48 or 64GB). Mac Studio: M5 Max (36 to 128GB) or M5 Ultra (96, 256 or 512GB). Apple announced both desktops on August 25, 2026, with availability from September 22 and the 512GB configuration announced for late October. US launch starting prices: Mac mini M6 $899 (16GB), M5 Pro $1,699 (24GB); Mac Studio M5 Max $2,499 (36GB), M5 Ultra $5,499 (96GB). More memory costs extra. Price sources: [MacRumors](https://www.macrumors.com/roundup/mac-mini/), [9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/). The model picks are our editorial recommendations based on model size and memory fit, not a ranking from tests.',
        columns: ['Memory', 'Primary Pick', 'Quantization', 'Size', 'M5 Pro tok/s', 'M5 Max tok/s', 'Alternative'],
        rows: [
          { 'Memory': '16 GB', 'Primary Pick': 'Phi-4', 'Quantization': 'Q4_K_M', 'Size': '9.1 GB', 'M5 Pro tok/s': 'No 16 GB option', 'M5 Max tok/s': 'No 16 GB option', 'Alternative': 'Llama 3.1 8B Q4 (4.9 GB)' },
          { 'Memory': '36 GB', 'Primary Pick': 'Llama 3.1 8B', 'Quantization': 'Q8', 'Size': '8.5 GB', 'M5 Pro tok/s': 'No 36 GB option', 'M5 Max tok/s': '~32–43', 'Alternative': 'Qwen3 14B Q4 (9.3 GB)' },
          { 'Memory': '48 GB', 'Primary Pick': 'Qwen3 14B', 'Quantization': 'Q8', 'Size': '16 GB', 'M5 Pro tok/s': '~12–15', 'M5 Max tok/s': '~23–31', 'Alternative': 'Mixtral 8x7B Q4 (26 GB)' },
          { 'Memory': '64 GB', 'Primary Pick': 'Qwen3 32B', 'Quantization': 'Q4_K_M', 'Size': '20 GB', 'M5 Pro tok/s': '~9–12', 'M5 Max tok/s': '~18–25', 'Alternative': 'Mixtral 8x7B Q5 (33 GB)' },
          { 'Memory': '96 GB', 'Primary Pick': 'Llama 3.3 70B', 'Quantization': 'Q4_K_M', 'Size': '43 GB', 'M5 Pro tok/s': 'No 96 GB option', 'M5 Max tok/s': 'No 96 GB option', 'Alternative': 'M5 Ultra: ~17–21 (est.)' },
          { 'Memory': '128 GB', 'Primary Pick': 'Llama 3.3 70B', 'Quantization': 'Q5_K_M', 'Size': '50 GB', 'M5 Pro tok/s': 'No 128 GB option', 'M5 Max tok/s': '~7–10', 'Alternative': '—' },
          { 'Memory': '128 GB', 'Primary Pick': 'Llama 3.3 70B', 'Quantization': 'Q8', 'Size': '75 GB', 'M5 Pro tok/s': 'No 128 GB option', 'M5 Max tok/s': '~5–7', 'Alternative': 'Larger file, slower' },
        ],
        note: 'Sizes are Ollama download sizes (GGUF), checked 2026-11-28; context needs extra memory. All tok/s figures are estimates, not benchmarks: 60–80% of memory bandwidth divided by model size (M5 Pro 307 GB/s; M5 Max 460 GB/s at 36GB, 614 GB/s at 48–128GB). Actual speed can differ, especially with small models. A 16GB M6 Mac or M5 MacBook Air has 153 GB/s: about 10–13 tok/s for Phi-4 (estimate). An M5 Pro with 64GB can also hold 70B Q4, at about 4–5 tok/s (estimate, see our [70B hardware guide](/local-llms/70b-models-consumer-hardware)).',
        image: '',
        imageCaption: '',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: 'How to Compare Model Quality',
        columns: ['Model', 'Ollama download size', 'Official listing'],
        rows: [
          { 'Model': 'Phi-4', 'Ollama download size': 'Q4_K_M 9.1 GB / Q8 16 GB', 'Official listing': '[phi4](https://ollama.com/library/phi4)' },
          { 'Model': 'Llama 3.1 8B', 'Ollama download size': 'Q4_K_M 4.9 GB / Q8 8.5 GB', 'Official listing': '[llama3.1](https://ollama.com/library/llama3.1)' },
          { 'Model': 'Qwen3 14B', 'Ollama download size': 'Q4_K_M 9.3 GB / Q8 16 GB', 'Official listing': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'Model': 'Qwen3 32B', 'Ollama download size': 'Q4_K_M 20 GB / Q8 35 GB', 'Official listing': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'Model': 'Mixtral 8x7B', 'Ollama download size': 'Q4_0 26 GB / Q8 50 GB', 'Official listing': '[mixtral](https://ollama.com/library/mixtral)' },
          { 'Model': 'Llama 3.3 70B', 'Ollama download size': 'Q4_K_M 43 GB / Q8 75 GB', 'Official listing': '[llama3.3](https://ollama.com/library/llama3.3)' },
        ],
        note: 'This page lists no benchmark scores. PromptQuorum has not benchmarked these models, and we have no single checkable source that tests all of them under the same conditions. Read the benchmark notes on the model maker\'s model card, check which version and settings were tested, and try the models on your own prompts. Sizes checked 2026-11-28.',
        image: '',
        imageCaption: '',
      },
      byUsecase: {
        id: 'by-usecase',
        title: 'Best Models by Use Case (2026)',
        columns: ['Use Case', 'Best for 36GB Mac', 'Best for 64GB Mac', 'Best for 128GB Mac'],
        rows: [
          { 'Use Case': 'Coding (general)', 'Best for 36GB Mac': 'Llama 3.1 8B', 'Best for 64GB Mac': 'DeepSeek Coder V2 16B', 'Best for 128GB Mac': 'Llama 3.3 70B' },
          { 'Use Case': 'Coding (Python)', 'Best for 36GB Mac': 'DeepSeek Coder V2 Lite', 'Best for 64GB Mac': 'DeepSeek Coder V2 16B', 'Best for 128GB Mac': 'DeepSeek Coder V2 16B' },
          { 'Use Case': 'Long-form writing', 'Best for 36GB Mac': 'Llama 3.1 8B Q8', 'Best for 64GB Mac': 'Qwen3 32B Q4', 'Best for 128GB Mac': 'Llama 3.3 70B Q5' },
          { 'Use Case': 'Chat / conversation', 'Best for 36GB Mac': 'Mistral Small', 'Best for 64GB Mac': 'Mixtral 8x7B', 'Best for 128GB Mac': 'Llama 3.3 70B' },
          { 'Use Case': 'Reasoning / math', 'Best for 36GB Mac': 'Qwen3 14B', 'Best for 64GB Mac': 'Qwen3 32B', 'Best for 128GB Mac': 'Qwen3 32B' },
          { 'Use Case': 'RAG / Q&A', 'Best for 36GB Mac': 'Llama 3.1 8B + nomic-embed', 'Best for 64GB Mac': '[Llama 3.1 8B](/power-local-llm/local-rag-for-private-business-data) + bge-large', 'Best for 128GB Mac': 'Llama 3.3 70B + bge-large' },
          { 'Use Case': 'Vision / multimodal', 'Best for 36GB Mac': 'LLaVA 7B', 'Best for 64GB Mac': '[Llama 3.2 Vision 11B](/power-local-llm/local-vision-models-llava-ollama-2026)', 'Best for 128GB Mac': 'Llama 3.2 Vision 90B' },
          { 'Use Case': 'Translation', 'Best for 36GB Mac': 'Qwen3 14B', 'Best for 64GB Mac': 'Qwen3 32B', 'Best for 128GB Mac': 'Aya Expanse 32B' },
          { 'Use Case': 'Summarization', 'Best for 36GB Mac': 'Llama 3.1 8B', 'Best for 64GB Mac': 'Qwen3 32B', 'Best for 128GB Mac': 'Llama 3.3 70B' },
          { 'Use Case': 'Code review', 'Best for 36GB Mac': 'DeepSeek Coder V2 Lite', 'Best for 64GB Mac': 'DeepSeek Coder V2 16B', 'Best for 128GB Mac': 'Llama 3.3 70B' },
        ],
        note: 'These are editorial suggestions, not test results. A specialized model may suit a task better, so test on your own work.',
      },
      scenarios: {
        id: 'scenarios',
        title: 'Real-World Setups by User Type',
        callouts: [
          { type: 'tip', text: '**Indie Developer (Mac Mini M5 Pro 64GB, from $2,699 with 15-core CPU/512GB, per [Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios), 25 Aug 2026)**\n- Coding: DeepSeek Coder V2 Lite 16B (Q4, 8.9 GB)\n- Writing: Llama 3.1 8B Q8 (8.5 GB) for docs and emails\n- Both can be loaded together with `OLLAMA_MAX_LOADED_MODELS=2`; `OLLAMA_KEEP_ALIVE` sets how long they stay loaded\n- Costs: no per-token fee for local use; hardware and electricity still cost money' },
          { type: 'tip', text: '**Privacy-Focused Professional (MacBook Pro M5 Pro 48GB)**\n- Primary: Llama 3.1 8B Q8 for general work\n- Sensitive: Qwen3 14B Q4 for legal/medical/financial docs\n- Travel: works offline once the models are downloaded\n- Inference runs locally; the app may still check for updates unless configured otherwise\n- General information, not legal, medical or financial advice; a qualified person decides' },
          { type: 'tip', text: '**Researcher / ML Engineer (Mac Studio M5 Max 128GB; $2,499 buys the 36GB base, so 128GB costs more)**\n- Primary: Llama 3.3 70B Q5 (50 GB)\n- Specialized: Qwen3 32B Q4 for non-English research\n- Coding: DeepSeek Coder V2 16B\n- Vision: Llama 3.2 Vision 11B for paper figures\n- The four downloads total about 87 GB before context; whether all stay loaded at once depends on context length and the macOS GPU memory limit' },
          { type: 'tip', text: '**Family AI Server (Mac Mini M5 Pro 64GB, always-on)**\n- Voice assistant: Llama 3.1 8B + Whisper + Piper\n- RAG: family document Q&A with embeddings\n- Coding help for family members via REST API\n- Costs: hardware plus electricity; we have not measured power use' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: 'Models to Avoid in 2026 (and Why)',
        callouts: [
          { type: 'warning', text: '**Llama 2 (any size): an older generation** — Meta has released newer Llama versions since. Older tutorials may still use it. Consider instead: Llama 3.1 8B.' },
          { type: 'warning', text: '**Vicuna, Alpaca, WizardLM: older community fine-tunes** — They are built on earlier base models. For a new setup, start with a newer instruct model such as Qwen3 14B or Llama 3.1 8B.' },
          { type: 'warning', text: '**Falcon 180B: very large for a Mac** — A model of this size needs far more memory than most Mac configurations have. A smaller, newer model such as [Llama 3.3 70B](/local-llms/running-70b-models-apple-silicon-m5-max) is usually the more practical choice.' },
          { type: 'warning', text: '**Avoid FP16 for 70B on most Macs** — The Llama 3.3 70B FP16 download is 141 GB, more than an M5 Max (128GB maximum) can hold. By capacity, only a Mac with more memory, such as a 256GB or 512GB M5 Ultra, has room. We have not measured the quality difference to Q5. Start with [Q4_K_M or Q5_K_M](/local-llms/llm-quantization-explained).' },
          { type: 'warning', text: '**Avoid pure base models (no instruct variant)** — Base models complete text but do not follow instructions. Look for "-instruct" or "-chat" suffix. Replace with: the instruct variant of the same model.' },
          { type: 'warning', text: '**Check the release date before you pick a model** — Guides may still mention older families such as StableLM, RedPajama, MPT or Pythia. Check each model card for release date and license, and compare with newer models.' },
        ],
      },
      formatReference: {
        id: 'format-reference',
        title: 'Model Format Quick Reference',
        columns: ['Format', 'Used by', 'Size vs original'],
        rows: [
          { 'Format': 'GGUF Q4_K_M', 'Used by': '[Ollama](/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Size vs original': '~30% of FP16' },
          { 'Format': 'GGUF Q5_K_M', 'Used by': '[Ollama](/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Size vs original': '~35% of FP16' },
          { 'Format': 'GGUF Q8_0', 'Used by': '[Ollama](/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Size vs original': '~50% of FP16' },
          { 'Format': 'MLX 4-bit', 'Used by': 'MLX framework', 'Size vs original': '~30% of FP16' },
          { 'Format': 'MLX 8-bit', 'Used by': 'MLX framework', 'Size vs original': '~50% of FP16' },
          { 'Format': 'FP16 (original)', 'Used by': 'All frameworks', 'Size vs original': '100%' },
        ],
        note: 'Sizes in this article are GGUF Q4_K_M unless specified. MLX 4-bit equivalents are similar size. For exact bytes, check the model card on HuggingFace. llama.cpp runs GGUF directly on the Metal backend and is what Ollama uses under the hood — MLX is Apple\'s own framework and tends to be faster for MLX-native builds on the same chip. LM Studio supports both GGUF and MLX and lets you switch backends per model from its UI.',
      },
      downloadGuide: {
        id: 'download-guide',
        title: 'Quick Reference: Downloading These Models',
        codeBlock: `# 16 GB Mac
ollama pull phi4

# 36 GB Mac (pick one)
ollama pull llama3.1:8b
ollama pull qwen3:14b
ollama pull mistral-small

# 64 GB Mac
ollama pull qwen3:32b
ollama pull mixtral:8x7b

# 128 GB Mac
ollama pull llama3.3:70b                  # Q4_K_M, 43 GB
ollama pull llama3.3:70b-instruct-q5_K_M  # Q5_K_M, 50 GB

# Specialty models
ollama pull deepseek-coder-v2:16b   # coding
ollama pull llama3.2-vision:11b     # vision
ollama pull aya-expanse:32b         # translation`,
        codeLanguage: 'bash',
        note: 'Each model is several GB. Total disk space for multiple models can hit 50–100 GB. Check usage with `du -sh ~/.ollama/`. LM Studio users can pull the same GGUF or MLX weights directly from its in-app model browser instead of the CLI.',
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Related Articles',
        items: [
          '[Apple Silicon for Local LLMs: Complete Guide](/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max for Local LLMs: Specs and Speed Estimates](/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[How Much Unified Memory for Local LLMs?](/local-llms/how-much-unified-memory-for-local-llm)',
          '[MLX vs Ollama vs llama.cpp Comparison](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Ollama on Mac Setup Guide](/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[Running 70B Models on Apple Silicon](/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[LLM Quantization Explained](/local-llms/llm-quantization-explained)',
          '[Qwen vs Llama vs Mistral Comparison](/local-llms/qwen-vs-llama-vs-mistral)',
          '[Apple\'s On-Device AI vs Real Local LLMs: What WWDC 2026 Actually Changed](/local-llms/apple-on-device-ai-vs-local-llms) -- Apple on-device AI vs local LLMs',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Can I run two different models simultaneously?', a: 'Yes, set `OLLAMA_MAX_LOADED_MODELS=2` in env. 64GB can run 8B + 32B simultaneously.' },
          { q: 'Which model is best for beginners?', a: 'Llama 3.1 8B is a practical starting point: it is widely supported and the Q4_K_M download is 4.9 GB. A 16GB Mac leaves headroom for macOS and context.' },
          { q: 'Is Mixtral 8x7B faster than Llama 8B?', a: 'Do not count on it. Mixtral 8x7B is a much larger download (26 GB at Q4 in Ollama, versus 4.9 GB for Llama 3.1 8B Q4). [Mistral says](https://mistral.ai/news/mixtral-of-experts/) it uses 12.9B parameters per token, which is still more than 8B, so at a similar quantization expect the 8B model to be faster. PromptQuorum has not benchmarked this. Which one is better depends on the task.' },
          { q: 'What is the best local LLM in 2026?', a: 'For most users on Apple Silicon: Qwen3 (any size that fits your Mac) is a strong choice, and Llama 3.3 70B is another strong option for 128GB Macs. For 16GB: [Phi-4](/local-llms/llm-quantization-explained) is a capable small option.' },
          { q: 'Can I run Llama 3.1 405B on a Mac?', a: 'Only with very large unified memory. The Q4 downloads of Llama 3.1 405B in Ollama are about 229–243 GB, far above the 128GB maximum of the M5 Max. By capacity it needs a 512GB Mac Studio: an earlier 512GB configuration, or the M5 Ultra, for which Apple lists 512GB (announced August 25, 2026; the 512GB configuration was announced for late October 2026). $5,499 is the M5 Ultra starting price with 96GB, so 512GB costs more. We have not tested 405B on a Mac.' },
          { q: 'Is Qwen better than Llama for local use?', a: 'It depends on the task and model size. Compare the model cards, check each license, and test both with your own prompts. PromptQuorum has not run a head-to-head test.' },
          { q: 'What is the smallest model that is actually useful?', a: 'Phi-4 Mini at 3.8B parameters. For chat and Q&A it is capable for its size. For coding or complex reasoning, jump to Llama 3.1 8B or [Qwen3 14B](/local-llms/qwen-vs-llama-vs-mistral).' },
          { q: 'Does vLLM run on Apple Silicon?', a: 'Check the current [vLLM documentation](https://docs.vllm.ai) for Apple Silicon support, because it can change. vLLM is mainly aimed at serving many requests. For a single user on a Mac, Ollama or LM Studio are simpler places to start. PromptQuorum has not benchmarked vLLM on a Mac.' },
          { q: 'What can a MacBook Air M5 run?', a: 'Apple lists the [MacBook Air](https://www.apple.com/macbook-air/specs/) with M5, 16, 24 or 32GB of unified memory and 153 GB/s of bandwidth. That is half the M5 Pro bandwidth, so the M5 Pro and M5 Max figures above do not apply. At 16GB, Phi-4 (9.1 GB) fits with limited headroom (about 10–13 tok/s, estimate). With 24GB or more, Llama 3.1 8B Q8 is an option (about 11–14 tok/s, estimate). Speed during long generations may be lower.' },
          { q: 'What is the best setup for a MacBook Pro M5 Max with 128GB RAM?', a: 'Llama 3.3 70B Q5_K_M (50 GB) for daily use, with room to load a second model such as Qwen3 14B Q4 (9.3 GB) or DeepSeek Coder V2 16B (8.9 GB) via `OLLAMA_MAX_LOADED_MODELS=2`, depending on context length. With the 40-core GPU (614 GB/s), expect about 7–10 tok/s on 70B Q5. Llama 3.3 70B Q8 (75 GB) also fits, at about 5–7 tok/s. Both speeds are estimates, not benchmarks.' },
        ],
      },
    },
    ctaText: 'Picked a model for your Mac? Compare its responses against GPT-4, Claude, Gemini, and 22 other models side-by-side with PromptQuorum — verify your local Llama, Qwen, or Phi model matches cloud quality for your specific use cases.',
  },
  es: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Mejores modelos Ollama para Apple Silicon 2026: Recomendaciones para 16 GB, 36 GB, 64 GB, 128 GB',
    seoTitle: 'Mejores modelos Ollama para Apple Silicon 2026: 16 GB–128 GB',
    intro: 'Recomendaciones de LLM locales según la memoria del Mac: 16 GB (Phi-4), 36 GB (Llama 3.1 8B), 64 GB (Qwen3 32B) y 128 GB (Llama 3.3 70B), con tok/s estimados a partir del ancho de banda de memoria. El M5 Pro llega como máximo a 64 GB.',
    metaDescription: 'Mejores modelos Ollama para Apple Silicon: Phi-4 (16 GB), Llama 8B (36 GB), Qwen3 32B (64 GB) y Llama 70B (128 GB). tok/s estimados y límites.',
    heroImage: '/images/best-models-apple-silicon-2026-by-tier-hero-es.webp',
    twitterDescription: 'Mejores modelos Ollama para tu Mac: 16 GB→Phi-4, 36 GB→Llama 8B, 64 GB→Qwen3 32B, 128 GB→Llama 70B.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen3 14B', 'Qwen3 32B', 'Mixtral 8x7B', 'Llama 3.3 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M6', 'M5 Ultra'],
    audience: 'Usuarios de Mac que buscan recomendaciones de modelos según su configuración.',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'mejores modelos Apple Silicon Mac',
    targetKeywords: ['mejor LLM Mac', 'recomendaciones de modelos', 'rendimiento por configuración Mac'],
    leadAnswerBlock: '**16 GB: Phi-4. 36 GB: Llama 3.1 8B Q8. 64 GB: Qwen3 32B Q4. 128 GB: Llama 3.3 70B Q5. Velocidad estimada en M5 Max: ~32–43 tok/s (opción de 36 GB), ~18–25 (64 GB), ~7–10 (128 GB). El M5 Pro llega como máximo a 64 GB. Todos funcionan con Ollama en Metal.**',
    quickAnswerTop: {
      es: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Mejor modelo por nivel de memoria', anchor: '#by-tier' },
      { label: 'Cómo comparar la calidad', anchor: '#quality-benchmarks' },
      { label: 'Mejor modelo por caso de uso', anchor: '#by-usecase' },
      { label: 'Escenarios de usuarios reales', anchor: '#scenarios' },
      { label: 'Modelos que debes evitar', anchor: '#avoid' },
      { label: 'Referencia de formatos de modelo', anchor: '#format-reference' },
      { label: 'Descargar estos modelos', anchor: '#download-guide' },
      { label: 'Artículos relacionados', anchor: '#related-articles' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      byTier: {
        id: 'by-tier',
        title: 'Mejores recomendaciones de modelos por memoria del Mac',
        content: 'Especificaciones comprobadas el 28-11-2026 en las páginas de Apple del [Mac mini](https://www.apple.com/mac-mini/specs/), [Mac Studio](https://www.apple.com/mac-studio/specs/) y [MacBook Pro](https://www.apple.com/macbook-pro/specs/). Mac mini: M6 (hasta 32 GB) o M5 Pro (24, 48 o 64 GB). Mac Studio: M5 Max (de 36 a 128 GB) o M5 Ultra (96, 256 o 512 GB). Apple anunció ambos equipos de sobremesa el 25 de agosto de 2026, disponibles desde el 22 de septiembre; la configuración de 512 GB se anunció para finales de octubre. Precios iniciales de lanzamiento en EE. UU.: Mac mini M6 $899 (16 GB), M5 Pro $1,699 (24 GB); Mac Studio M5 Max $2,499 (36 GB), M5 Ultra $5,499 (96 GB). Más memoria cuesta más. Los precios pueden variar según tu país. Fuentes de precios: [MacRumors](https://www.macrumors.com/roundup/mac-mini/), [9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/). La selección de modelos es una recomendación editorial según su tamaño y si caben en memoria, no una clasificación basada en pruebas.',
        columns: ['Memoria', 'Elección principal', 'Cuantización', 'Tamaño', 'M5 Pro tok/s', 'M5 Max tok/s', 'Alternativa'],
        rows: [
          { 'Memoria': '16 GB', 'Elección principal': 'Phi-4', 'Cuantización': 'Q4_K_M', 'Tamaño': '9,1 GB', 'M5 Pro tok/s': 'No hay de 16 GB', 'M5 Max tok/s': 'No hay de 16 GB', 'Alternativa': 'Llama 3.1 8B Q4 (4,9 GB)' },
          { 'Memoria': '36 GB', 'Elección principal': 'Llama 3.1 8B', 'Cuantización': 'Q8', 'Tamaño': '8,5 GB', 'M5 Pro tok/s': 'No hay de 36 GB', 'M5 Max tok/s': '~32–43', 'Alternativa': 'Qwen3 14B Q4 (9,3 GB)' },
          { 'Memoria': '48 GB', 'Elección principal': 'Qwen3 14B', 'Cuantización': 'Q8', 'Tamaño': '16 GB', 'M5 Pro tok/s': '~12–15', 'M5 Max tok/s': '~23–31', 'Alternativa': 'Mixtral 8x7B Q4 (26 GB)' },
          { 'Memoria': '64 GB', 'Elección principal': 'Qwen3 32B', 'Cuantización': 'Q4_K_M', 'Tamaño': '20 GB', 'M5 Pro tok/s': '~9–12', 'M5 Max tok/s': '~18–25', 'Alternativa': 'Mixtral 8x7B Q5 (33 GB)' },
          { 'Memoria': '96 GB', 'Elección principal': 'Llama 3.3 70B', 'Cuantización': 'Q4_K_M', 'Tamaño': '43 GB', 'M5 Pro tok/s': 'No hay de 96 GB', 'M5 Max tok/s': 'No hay de 96 GB', 'Alternativa': 'M5 Ultra: ~17–21 (est.)' },
          { 'Memoria': '128 GB', 'Elección principal': 'Llama 3.3 70B', 'Cuantización': 'Q5_K_M', 'Tamaño': '50 GB', 'M5 Pro tok/s': 'No hay de 128 GB', 'M5 Max tok/s': '~7–10', 'Alternativa': '—' },
          { 'Memoria': '128 GB', 'Elección principal': 'Llama 3.3 70B', 'Cuantización': 'Q8', 'Tamaño': '75 GB', 'M5 Pro tok/s': 'No hay de 128 GB', 'M5 Max tok/s': '~5–7', 'Alternativa': 'Archivo mayor, más lento' },
        ],
        note: 'Los tamaños son los de descarga en Ollama (GGUF), comprobados el 28-11-2026; el contexto necesita memoria adicional. Todas las cifras de tok/s son estimaciones, no benchmarks: el 60-80 % del ancho de banda de memoria dividido por el tamaño del modelo (M5 Pro 307 GB/s; M5 Max 460 GB/s con 36 GB y 614 GB/s con 48-128 GB). La velocidad real puede variar, sobre todo con modelos pequeños. Un Mac M6 de 16 GB o un MacBook Air M5 tiene 153 GB/s: unos 10–13 tok/s con Phi-4 (estimación). Un M5 Pro de 64 GB también aloja 70B Q4, a unos 4–5 tok/s (estimación; consulta nuestra [guía de hardware 70B](/es/local-llms/70b-models-consumer-hardware)).',
        image: '',
        imageCaption: '',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: 'Cómo comparar la calidad de los modelos',
        columns: ['Modelo', 'Tamaño de descarga en Ollama', 'Ficha oficial'],
        rows: [
          { 'Modelo': 'Phi-4', 'Tamaño de descarga en Ollama': 'Q4_K_M 9,1 GB / Q8 16 GB', 'Ficha oficial': '[phi4](https://ollama.com/library/phi4)' },
          { 'Modelo': 'Llama 3.1 8B', 'Tamaño de descarga en Ollama': 'Q4_K_M 4,9 GB / Q8 8,5 GB', 'Ficha oficial': '[llama3.1](https://ollama.com/library/llama3.1)' },
          { 'Modelo': 'Qwen3 14B', 'Tamaño de descarga en Ollama': 'Q4_K_M 9,3 GB / Q8 16 GB', 'Ficha oficial': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'Modelo': 'Qwen3 32B', 'Tamaño de descarga en Ollama': 'Q4_K_M 20 GB / Q8 35 GB', 'Ficha oficial': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'Modelo': 'Mixtral 8x7B', 'Tamaño de descarga en Ollama': 'Q4_0 26 GB / Q8 50 GB', 'Ficha oficial': '[mixtral](https://ollama.com/library/mixtral)' },
          { 'Modelo': 'Llama 3.3 70B', 'Tamaño de descarga en Ollama': 'Q4_K_M 43 GB / Q8 75 GB', 'Ficha oficial': '[llama3.3](https://ollama.com/library/llama3.3)' },
        ],
        note: 'Esta página no publica puntuaciones de benchmarks. PromptQuorum no ha evaluado estos modelos y no disponemos de una única fuente verificable que los pruebe todos en las mismas condiciones. Lee las notas de benchmarks en la ficha del fabricante del modelo, comprueba qué versión y ajustes se probaron y prueba los modelos con tus propios prompts. Tamaños comprobados el 28-11-2026.',
        image: '',
        imageCaption: '',
      },
      byUsecase: {
        id: 'by-usecase',
        title: 'Mejores modelos por caso de uso (2026)',
        columns: ['Caso de uso', 'Mejor para Mac 36 GB', 'Mejor para Mac 64 GB', 'Mejor para Mac 128 GB'],
        rows: [
          { 'Caso de uso': 'Programación (general)', 'Mejor para Mac 36 GB': 'Llama 3.1 8B', 'Mejor para Mac 64 GB': 'DeepSeek Coder V2 16B', 'Mejor para Mac 128 GB': 'Llama 3.3 70B' },
          { 'Caso de uso': 'Programación (Python)', 'Mejor para Mac 36 GB': 'DeepSeek Coder V2 Lite', 'Mejor para Mac 64 GB': 'DeepSeek Coder V2 16B', 'Mejor para Mac 128 GB': 'DeepSeek Coder V2 16B' },
          { 'Caso de uso': 'Escritura larga', 'Mejor para Mac 36 GB': 'Llama 3.1 8B Q8', 'Mejor para Mac 64 GB': 'Qwen3 32B Q4', 'Mejor para Mac 128 GB': 'Llama 3.3 70B Q5' },
          { 'Caso de uso': 'Chat / conversación', 'Mejor para Mac 36 GB': 'Mistral Small', 'Mejor para Mac 64 GB': 'Mixtral 8x7B', 'Mejor para Mac 128 GB': 'Llama 3.3 70B' },
          { 'Caso de uso': 'Razonamiento / matemáticas', 'Mejor para Mac 36 GB': 'Qwen3 14B', 'Mejor para Mac 64 GB': 'Qwen3 32B', 'Mejor para Mac 128 GB': 'Qwen3 32B' },
          { 'Caso de uso': 'RAG / preguntas y respuestas', 'Mejor para Mac 36 GB': 'Llama 3.1 8B + nomic-embed', 'Mejor para Mac 64 GB': '[Llama 3.1 8B](/es/power-local-llm/local-rag-for-private-business-data) + bge-large', 'Mejor para Mac 128 GB': 'Llama 3.3 70B + bge-large' },
          { 'Caso de uso': 'Visión / multimodal', 'Mejor para Mac 36 GB': 'LLaVA 7B', 'Mejor para Mac 64 GB': '[Llama 3.2 Vision 11B](/es/power-local-llm/local-vision-models-llava-ollama-2026)', 'Mejor para Mac 128 GB': 'Llama 3.2 Vision 90B' },
          { 'Caso de uso': 'Traducción', 'Mejor para Mac 36 GB': 'Qwen3 14B', 'Mejor para Mac 64 GB': 'Qwen3 32B', 'Mejor para Mac 128 GB': 'Aya Expanse 32B' },
          { 'Caso de uso': 'Resumen', 'Mejor para Mac 36 GB': 'Llama 3.1 8B', 'Mejor para Mac 64 GB': 'Qwen3 32B', 'Mejor para Mac 128 GB': 'Llama 3.3 70B' },
          { 'Caso de uso': 'Revisión de código', 'Mejor para Mac 36 GB': 'DeepSeek Coder V2 Lite', 'Mejor para Mac 64 GB': 'DeepSeek Coder V2 16B', 'Mejor para Mac 128 GB': 'Llama 3.3 70B' },
        ],
        note: 'Son sugerencias editoriales, no resultados de pruebas. Un modelo especializado puede encajar mejor en una tarea; pruébalo con tu propio trabajo.',
      },
      scenarios: {
        id: 'scenarios',
        title: 'Configuraciones reales por tipo de usuario',
        callouts: [
          { type: 'tip', text: '**Desarrollador independiente (Mac Mini M5 Pro 64 GB, desde $2,699 con CPU de 15 núcleos/512 GB, según [Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios), 25 ago 2026)**\n- Programación: DeepSeek Coder V2 Lite 16B (Q4, 8,9 GB)\n- Escritura: Llama 3.1 8B Q8 (8,5 GB) para documentación y correos\n- Ambos pueden cargarse a la vez con `OLLAMA_MAX_LOADED_MODELS=2`; `OLLAMA_KEEP_ALIVE` define cuánto tiempo siguen cargados\n- Costes: sin tarifa por token en uso local; el hardware y la electricidad siguen costando dinero\n- Los precios pueden variar según tu país.' },
          { type: 'tip', text: '**Profesional con enfoque en privacidad (MacBook Pro M5 Pro 48 GB)**\n- Principal: Llama 3.1 8B Q8 para trabajo general\n- Sensible: Qwen3 14B Q4 para documentos legales/médicos/financieros\n- Viajes: funciona sin conexión una vez descargados los modelos\n- La inferencia se ejecuta en local; la aplicación puede seguir buscando actualizaciones salvo que la configures de otro modo\n- Información general, no asesoramiento legal, médico ni financiero; decide una persona cualificada' },
          { type: 'tip', text: '**Investigador / Ingeniero ML (Mac Studio M5 Max 128 GB; por $2,499 es la base de 36 GB, así que 128 GB cuesta más)**\n- Principal: Llama 3.3 70B Q5 (50 GB)\n- Especializado: Qwen3 32B Q4 para investigación en otros idiomas\n- Programación: DeepSeek Coder V2 16B\n- Visión: Llama 3.2 Vision 11B para figuras de artículos\n- Las cuatro descargas suman unos 87 GB sin contexto; que sigan cargadas a la vez depende de la longitud del contexto y del límite de memoria de GPU de macOS\n- Los precios pueden variar según tu país.' },
          { type: 'tip', text: '**Servidor de IA familiar (Mac Mini M5 Pro 64 GB, siempre encendido)**\n- Asistente de voz: Llama 3.1 8B + Whisper + Piper\n- RAG: preguntas y respuestas sobre documentos familiares con embeddings\n- Ayuda de programación para miembros de la familia vía REST API\n- Costes: hardware y electricidad; no hemos medido el consumo' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: 'Modelos que debes evitar en 2026 (y por qué)',
        callouts: [
          { type: 'warning', text: '**Llama 2 (cualquier tamaño): una generación anterior** — Meta ha publicado versiones más nuevas de Llama desde entonces. Algunos tutoriales antiguos todavía lo usan. Valora en su lugar: Llama 3.1 8B.' },
          { type: 'warning', text: '**Vicuna, Alpaca, WizardLM: fine-tunes comunitarios antiguos** — Se basan en modelos base anteriores. Para una instalación nueva, empieza con un modelo instruct más reciente, como Qwen3 14B o Llama 3.1 8B.' },
          { type: 'warning', text: '**Falcon 180B: muy grande para un Mac** — Un modelo de este tamaño necesita mucha más memoria de la que tienen la mayoría de configuraciones de Mac. Un modelo más pequeño y reciente como [Llama 3.3 70B](/es/local-llms/running-70b-models-apple-silicon-m5-max) suele ser la opción más práctica.' },
          { type: 'warning', text: '**Evita FP16 con 70B en la mayoría de Mac** — La descarga FP16 de Llama 3.3 70B ocupa 141 GB, más de lo que admite un M5 Max (máximo 128 GB). Por capacidad, solo cabe en un Mac con más memoria, como un M5 Ultra de 256 o 512 GB. No hemos medido la diferencia de calidad frente a Q5. Empieza con [Q4_K_M o Q5_K_M](/es/local-llms/llm-quantization-explained).' },
          { type: 'warning', text: '**Evita los modelos base puros (sin variante instruct)** — Los modelos base completan texto pero no siguen instrucciones. Busca el sufijo "-instruct" o "-chat". Reemplaza con: la variante instruct del mismo modelo.' },
          { type: 'warning', text: '**Comprueba la fecha de lanzamiento antes de elegir un modelo** — Algunas guías aún mencionan familias antiguas como StableLM, RedPajama, MPT o Pythia. Revisa en cada ficha la fecha y la licencia, y compara con modelos más nuevos.' },
        ],
      },
      formatReference: {
        id: 'format-reference',
        title: 'Referencia rápida de formatos de modelo',
        columns: ['Formato', 'Usado por', 'Tamaño vs original'],
        rows: [
          { 'Formato': 'GGUF Q4_K_M', 'Usado por': '[Ollama](/es/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Tamaño vs original': '~30% de FP16' },
          { 'Formato': 'GGUF Q5_K_M', 'Usado por': '[Ollama](/es/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Tamaño vs original': '~35% de FP16' },
          { 'Formato': 'GGUF Q8_0', 'Usado por': '[Ollama](/es/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Tamaño vs original': '~50% de FP16' },
          { 'Formato': 'MLX 4-bit', 'Usado por': 'Framework MLX', 'Tamaño vs original': '~30% de FP16' },
          { 'Formato': 'MLX 8-bit', 'Usado por': 'Framework MLX', 'Tamaño vs original': '~50% de FP16' },
          { 'Formato': 'FP16 (original)', 'Usado por': 'Todos los frameworks', 'Tamaño vs original': '100%' },
        ],
        note: 'Los tamaños en este artículo son GGUF Q4_K_M salvo que se indique lo contrario. Los equivalentes MLX 4-bit son de tamaño similar. Para bytes exactos, consulta la ficha del modelo en HuggingFace. llama.cpp ejecuta GGUF directamente sobre el backend Metal y es lo que Ollama usa por dentro — MLX es el framework propio de Apple y tiende a ser más rápido para builds nativos de MLX en el mismo chip. LM Studio admite tanto GGUF como MLX y permite cambiar de backend por modelo desde su interfaz.',
      },
      downloadGuide: {
        id: 'download-guide',
        title: 'Referencia rápida: descargar estos modelos',
        codeBlock: `# Mac 16 GB
ollama pull phi4

# Mac 36 GB (elige uno)
ollama pull llama3.1:8b
ollama pull qwen3:14b
ollama pull mistral-small

# Mac 64 GB
ollama pull qwen3:32b
ollama pull mixtral:8x7b

# Mac 128 GB
ollama pull llama3.3:70b                  # Q4_K_M, 43 GB
ollama pull llama3.3:70b-instruct-q5_K_M  # Q5_K_M, 50 GB

# Modelos especializados
ollama pull deepseek-coder-v2:16b   # programación
ollama pull llama3.2-vision:11b     # visión
ollama pull aya-expanse:32b         # traducción`,
        codeLanguage: 'bash',
        note: 'Cada modelo pesa varios GB. El espacio total en disco para varios modelos puede alcanzar los 50–100 GB. Comprueba el uso con `du -sh ~/.ollama/`. Los usuarios de LM Studio pueden descargar los mismos pesos GGUF o MLX directamente desde su explorador de modelos integrado, sin usar la CLI.',
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Artículos relacionados',
        items: [
          '[Apple Silicon para LLMs locales: Guía completa](/es/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max para LLM locales: especificaciones y velocidades estimadas](/es/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[¿Cuánta memoria unificada necesito para LLMs locales?](/es/local-llms/how-much-unified-memory-for-local-llm)',
          '[Comparativa MLX vs Ollama vs llama.cpp](/es/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Guía de instalación de Ollama en Mac](/es/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[Ejecutar modelos 70B en Apple Silicon](/es/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[Cuantización LLM explicada](/es/local-llms/llm-quantization-explained)',
          '[Comparativa Qwen vs Llama vs Mistral](/es/local-llms/qwen-vs-llama-vs-mistral)',
          '[La IA on-device de Apple vs los LLM locales reales: qué cambió realmente en WWDC 2026](/es/local-llms/apple-on-device-ai-vs-local-llms) -- Apple on-device AI vs local LLMs',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '¿Puedo ejecutar dos modelos diferentes a la vez?', a: 'Sí, establece `OLLAMA_MAX_LOADED_MODELS=2` en las variables de entorno. Con 64 GB puedes ejecutar 8B + 32B simultáneamente.' },
          { q: '¿Qué modelo es mejor para principiantes?', a: 'Llama 3.1 8B es un punto de partida práctico: tiene un soporte amplio y la descarga Q4_K_M ocupa 4,9 GB. Un Mac de 16 GB deja margen para macOS y el contexto.' },
          { q: '¿Es Mixtral 8x7B más rápido que Llama 8B?', a: 'No cuentes con ello. Mixtral 8x7B es una descarga mucho mayor (26 GB en Q4 en Ollama frente a 4,9 GB de Llama 3.1 8B Q4). [Según Mistral](https://mistral.ai/news/mixtral-of-experts/), usa 12.900 millones de parámetros por token, que sigue siendo más que 8B, así que con una cuantización similar cabe esperar que el modelo 8B sea más rápido. PromptQuorum no lo ha medido. Cuál es mejor depende de la tarea.' },
          { q: '¿Cuál es el mejor LLM local en 2026?', a: 'Para la mayoría de usuarios en Apple Silicon: Qwen3 (cualquier tamaño que quepa en tu Mac) es una buena opción, y Llama 3.3 70B es otra opción sólida en Macs de 128 GB. Para 16 GB: [Phi-4](/es/local-llms/llm-quantization-explained) es una opción pequeña y capaz.' },
          { q: '¿Puedo ejecutar Llama 3.1 405B en un Mac?', a: 'Solo con una memoria unificada muy grande. Las descargas Q4 de Llama 3.1 405B en Ollama ocupan unos 229–243 GB, muy por encima del máximo de 128 GB del M5 Max. Por capacidad necesita un Mac Studio de 512 GB: una configuración anterior de 512 GB o el M5 Ultra, para el que Apple indica 512 GB (anunciado el 25 de agosto de 2026; la configuración de 512 GB se anunció para finales de octubre de 2026). $5,499 es el precio inicial del M5 Ultra con 96 GB, así que 512 GB cuesta más. No hemos probado 405B en un Mac.' },
          { q: '¿Es Qwen mejor que Llama para uso local?', a: 'Depende de la tarea y del tamaño del modelo. Compara las fichas, revisa cada licencia y prueba ambos con tus propios prompts. PromptQuorum no ha hecho una prueba comparativa directa.' },
          { q: '¿Cuál es el modelo más pequeño que realmente es útil?', a: 'Phi-4 Mini con 3,8B parámetros. Para chat y preguntas y respuestas es capaz para su tamaño. Para programación o razonamiento complejo, pasa a Llama 3.1 8B o [Qwen3 14B](/es/local-llms/qwen-vs-llama-vs-mistral).' },
          { q: '¿vLLM funciona en Apple Silicon?', a: 'Consulta la [documentación actual de vLLM](https://docs.vllm.ai) sobre el soporte para Apple Silicon, porque puede cambiar. vLLM está orientado sobre todo a atender muchas solicitudes. Para un solo usuario en Mac, Ollama o LM Studio son un punto de partida más sencillo. PromptQuorum no ha medido vLLM en un Mac.' },
          { q: '¿Qué puede ejecutar un MacBook Air M5?', a: 'Apple indica para el [MacBook Air](https://www.apple.com/macbook-air/specs/) el chip M5, 16, 24 o 32 GB de memoria unificada y 153 GB/s de ancho de banda. Es la mitad que el del M5 Pro, así que las cifras anteriores de M5 Pro y M5 Max no se aplican. Con 16 GB, Phi-4 (9,1 GB) cabe con poco margen (unos 10–13 tok/s, estimación). Con 24 GB o más, Llama 3.1 8B Q8 es una opción (unos 11–14 tok/s, estimación). En generaciones largas la velocidad puede ser menor.' },
          { q: '¿Cuál es la mejor configuración para un MacBook Pro M5 Max con 128 GB de RAM?', a: 'Llama 3.3 70B Q5_K_M (50 GB) para uso diario, con margen para cargar un segundo modelo, como Qwen3 14B Q4 (9,3 GB) o DeepSeek Coder V2 16B (8,9 GB), mediante `OLLAMA_MAX_LOADED_MODELS=2`, según la longitud del contexto. Con la GPU de 40 núcleos (614 GB/s), espera unos 7–10 tok/s en 70B Q5. Llama 3.3 70B Q8 (75 GB) también cabe, a unos 5–7 tok/s. Ambas cifras son estimaciones, no benchmarks.' },
        ],
      },
    },
    ctaText: '¿Ya elegiste un modelo para tu Mac? Compara sus respuestas con GPT-4, Claude, Gemini y 22 modelos más en paralelo con PromptQuorum — verifica si tu modelo local Llama, Qwen o Phi iguala la calidad en la nube para tus casos de uso específicos.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejores modelos LLM para Apple Silicon 2026: 16 GB–128 GB',
      description: 'Mejores modelos LLM para Apple Silicon: Phi-4 (16 GB), Llama 8B (36 GB), Llama 70B (128 GB).',
      url: 'https://www.promptquorum.com/es/local-llms/best-models-apple-silicon-2026',
      inLanguage: 'es',
      datePublished: '2026-05-15',
      dateModified: '2026-11-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ar: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'أفضل نماذج ⁨Ollama⁩ لـ ⁨Apple Silicon 2026⁩: توصيات لـ ⁨16 GB⁩ و⁨36 GB⁩ و⁨64 GB⁩ و⁨128 GB⁩',
    seoTitle: 'أفضل نماذج ⁨Ollama⁩ لـ ⁨Apple Silicon 2026⁩: ⁨16⁩ إلى ⁨128 GB⁩',
    intro: 'توصيات نماذج LLM المحلية حسب ذاكرة Mac: ‏16 GB ‏(Phi-4)، و36 GB ‏(Llama 3.1 8B)، و64 GB ‏(Qwen3 32B)، و128 GB ‏(Llama 3.3 70B)، مع قيم tok/s تقديرية مبنية على عرض نطاق الذاكرة. الحد الأقصى لـ M5 Pro هو 64 GB.',
    metaDescription: 'أفضل نماذج ⁨Ollama⁩ لـ ⁨Apple Silicon⁩: ⁨Phi-4⁩ (⁨16 GB⁩)، ⁨Llama 8B⁩ (⁨36 GB⁩)، ⁨Qwen3 32B⁩ (⁨64 GB⁩)، ⁨Llama 70B⁩ (⁨128 GB⁩). تقديرات ⁨tok/s⁩ وحدود الذاكرة.',
    heroImage: '/images/best-models-apple-silicon-2026-by-tier-hero-ar.webp',
    twitterDescription: 'أفضل نماذج ⁨Ollama⁩ لجهاز ⁨Mac⁩: ⁨16 GB⁩→⁨Phi-4⁩، ⁨36 GB⁩→⁨Llama 8B⁩، ⁨64 GB⁩→⁨Qwen3 32B⁩، ⁨128 GB⁩→⁨Llama 70B⁩.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen3 14B', 'Qwen3 32B', 'Mixtral 8x7B', 'Llama 3.3 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M6', 'M5 Ultra'],
    audience: 'مستخدمو Mac الباحثون عن توصيات نماذج بحسب تكوينهم.',
    readTime: '10 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'أفضل نماذج Apple Silicon Mac',
    targetKeywords: ['أفضل LLM لـ Mac', 'توصيات النماذج', 'الأداء حسب تكوين Mac'],
    leadAnswerBlock: '**16 GB: ‏Phi-4. ‏36 GB: ‏Llama 3.1 8B Q8. ‏64 GB: ‏Qwen3 32B Q4. ‏128 GB: ‏Llama 3.3 70B Q5. السرعات التقديرية على M5 Max: نحو 32–43 tok/s (خيار 36 GB)، ونحو 18–25 (خيار 64 GB)، ونحو 7–10 (خيار 128 GB). الحد الأقصى لـ M5 Pro هو 64 GB. جميعها تعمل عبر Ollama على Metal.**',
    quickAnswerTop: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    toc: [
      { label: 'أفضل نموذج حسب مستوى الذاكرة', anchor: '#by-tier' },
      { label: 'كيف تقارن الجودة', anchor: '#quality-benchmarks' },
      { label: 'أفضل نموذج حسب حالة الاستخدام', anchor: '#by-usecase' },
      { label: 'سيناريوهات مستخدمين حقيقية', anchor: '#scenarios' },
      { label: 'نماذج يجب تجنّبها', anchor: '#avoid' },
      { label: 'مرجع صيغ النماذج', anchor: '#format-reference' },
      { label: 'تنزيل هذه النماذج', anchor: '#download-guide' },
      { label: 'مقالات ذات صلة', anchor: '#related-articles' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    sections: {
      byTier: {
        id: 'by-tier',
        title: 'أفضل توصيات النماذج حسب ذاكرة Mac',
        content: 'تحققنا من المواصفات في 2026-11-28 من صفحات Apple الخاصة بـ [Mac mini](https://www.apple.com/mac-mini/specs/) و[Mac Studio](https://www.apple.com/mac-studio/specs/) و[MacBook Pro](https://www.apple.com/macbook-pro/specs/). يأتي Mac mini بمعالج M6 (حتى 32 GB) أو M5 Pro ‏(24 أو 48 أو 64 GB). ويأتي Mac Studio بمعالج M5 Max (من 36 إلى 128 GB) أو M5 Ultra ‏(96 أو 256 أو 512 GB). أعلنت Apple عن الجهازين المكتبيين في 25 أغسطس 2026، وبدأ توفرهما في 22 سبتمبر، وأعلنت أن تكوين 512 GB يأتي أواخر أكتوبر. أسعار البداية الأمريكية عند الإطلاق: Mac mini M6 بسعر 899 دولارًا (16 GB)، وM5 Pro بسعر 1,699 دولارًا (24 GB)؛ وMac Studio M5 Max بسعر 2,499 دولارًا (36 GB)، وM5 Ultra بسعر 5,499 دولارًا (96 GB). الذاكرة الإضافية بتكلفة إضافية. قد تختلف الأسعار حسب بلدك. مصادر الأسعار: [MacRumors](https://www.macrumors.com/roundup/mac-mini/) و[9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/). اختيارات النماذج توصيات تحريرية مبنية على حجم النموذج واتساع الذاكرة له، وليست ترتيبًا مستندًا إلى اختبارات.',
        columns: ['الذاكرة', 'الاختيار الأول', 'التكميم', 'الحجم', 'M5 Pro tok/s', 'M5 Max tok/s', 'البديل'],
        rows: [
          { 'الذاكرة': '16 GB', 'الاختيار الأول': 'Phi-4', 'التكميم': 'Q4_K_M', 'الحجم': '9.1 GB', 'M5 Pro tok/s': 'لا يوجد إصدار 16 GB', 'M5 Max tok/s': 'لا يوجد إصدار 16 GB', 'البديل': 'Llama 3.1 8B Q4 (4.9 GB)' },
          { 'الذاكرة': '36 GB', 'الاختيار الأول': 'Llama 3.1 8B', 'التكميم': 'Q8', 'الحجم': '8.5 GB', 'M5 Pro tok/s': 'لا يوجد إصدار 36 GB', 'M5 Max tok/s': '~32–43', 'البديل': 'Qwen3 14B Q4 (9.3 GB)' },
          { 'الذاكرة': '48 GB', 'الاختيار الأول': 'Qwen3 14B', 'التكميم': 'Q8', 'الحجم': '16 GB', 'M5 Pro tok/s': '~12–15', 'M5 Max tok/s': '~23–31', 'البديل': 'Mixtral 8x7B Q4 (26 GB)' },
          { 'الذاكرة': '64 GB', 'الاختيار الأول': 'Qwen3 32B', 'التكميم': 'Q4_K_M', 'الحجم': '20 GB', 'M5 Pro tok/s': '~9–12', 'M5 Max tok/s': '~18–25', 'البديل': 'Mixtral 8x7B Q5 (33 GB)' },
          { 'الذاكرة': '96 GB', 'الاختيار الأول': 'Llama 3.3 70B', 'التكميم': 'Q4_K_M', 'الحجم': '43 GB', 'M5 Pro tok/s': 'لا يوجد إصدار 96 GB', 'M5 Max tok/s': 'لا يوجد إصدار 96 GB', 'البديل': 'M5 Ultra: نحو 17–21 (تقديري)' },
          { 'الذاكرة': '128 GB', 'الاختيار الأول': 'Llama 3.3 70B', 'التكميم': 'Q5_K_M', 'الحجم': '50 GB', 'M5 Pro tok/s': 'لا يوجد إصدار 128 GB', 'M5 Max tok/s': '~7–10', 'البديل': '—' },
          { 'الذاكرة': '128 GB', 'الاختيار الأول': 'Llama 3.3 70B', 'التكميم': 'Q8', 'الحجم': '75 GB', 'M5 Pro tok/s': 'لا يوجد إصدار 128 GB', 'M5 Max tok/s': '~5–7', 'البديل': 'ملف أكبر وأبطأ' },
        ],
        note: 'الأحجام هي أحجام التنزيل في Ollama (بصيغة GGUF) كما تحققنا منها في 2026-11-28، ويحتاج السياق إلى ذاكرة إضافية. جميع قيم tok/s تقديرية وليست اختبارات قياسية: 60–80% من عرض نطاق الذاكرة مقسومًا على حجم النموذج (M5 Pro: ‏307 GB/s؛ وM5 Max: ‏460 GB/s مع 36 GB و614 GB/s مع 48–128 GB). قد تختلف السرعة الفعلية، خصوصًا مع النماذج الصغيرة. جهاز Mac بمعالج M6 وذاكرة 16 GB أو MacBook Air M5 يوفّر 153 GB/s: نحو 10–13 tok/s مع Phi-4 (تقديري). ويتسع M5 Pro بذاكرة 64 GB أيضًا لنموذج 70B Q4 بنحو 4–5 tok/s (تقديري؛ راجع [دليل عتاد 70B](/ar/local-llms/70b-models-consumer-hardware)).',
        image: '',
        imageCaption: '',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: 'كيف تقارن جودة النماذج',
        columns: ['النموذج', 'حجم التنزيل في Ollama', 'الصفحة الرسمية'],
        rows: [
          { 'النموذج': 'Phi-4', 'حجم التنزيل في Ollama': 'Q4_K_M 9.1 GB / Q8 16 GB', 'الصفحة الرسمية': '[phi4](https://ollama.com/library/phi4)' },
          { 'النموذج': 'Llama 3.1 8B', 'حجم التنزيل في Ollama': 'Q4_K_M 4.9 GB / Q8 8.5 GB', 'الصفحة الرسمية': '[llama3.1](https://ollama.com/library/llama3.1)' },
          { 'النموذج': 'Qwen3 14B', 'حجم التنزيل في Ollama': 'Q4_K_M 9.3 GB / Q8 16 GB', 'الصفحة الرسمية': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'النموذج': 'Qwen3 32B', 'حجم التنزيل في Ollama': 'Q4_K_M 20 GB / Q8 35 GB', 'الصفحة الرسمية': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'النموذج': 'Mixtral 8x7B', 'حجم التنزيل في Ollama': 'Q4_0 26 GB / Q8 50 GB', 'الصفحة الرسمية': '[mixtral](https://ollama.com/library/mixtral)' },
          { 'النموذج': 'Llama 3.3 70B', 'حجم التنزيل في Ollama': 'Q4_K_M 43 GB / Q8 75 GB', 'الصفحة الرسمية': '[llama3.3](https://ollama.com/library/llama3.3)' },
        ],
        note: 'لا تعرض هذه الصفحة درجات اختبارات قياسية. لم تختبر PromptQuorum هذه النماذج، ولا يتوفر لدينا مصدر واحد يمكن التحقق منه يختبرها كلها في الظروف نفسها. اقرأ ملاحظات الاختبارات في بطاقة النموذج لدى الجهة المطوِّرة، وتحقق من الإصدار والإعدادات المختبَرة، ثم جرّب النماذج بمطالباتك. تحققنا من الأحجام في 2026-11-28.',
        image: '',
        imageCaption: '',
      },
      byUsecase: {
        id: 'by-usecase',
        title: 'أفضل النماذج حسب حالة الاستخدام (2026)',
        columns: ['حالة الاستخدام', 'الأفضل لـ Mac 36 GB', 'الأفضل لـ Mac 64 GB', 'الأفضل لـ Mac 128 GB'],
        rows: [
          { 'حالة الاستخدام': 'البرمجة (عام)', 'الأفضل لـ Mac 36 GB': 'Llama 3.1 8B', 'الأفضل لـ Mac 64 GB': 'DeepSeek Coder V2 16B', 'الأفضل لـ Mac 128 GB': 'Llama 3.3 70B' },
          { 'حالة الاستخدام': 'البرمجة (Python)', 'الأفضل لـ Mac 36 GB': 'DeepSeek Coder V2 Lite', 'الأفضل لـ Mac 64 GB': 'DeepSeek Coder V2 16B', 'الأفضل لـ Mac 128 GB': 'DeepSeek Coder V2 16B' },
          { 'حالة الاستخدام': 'الكتابة الطويلة', 'الأفضل لـ Mac 36 GB': 'Llama 3.1 8B Q8', 'الأفضل لـ Mac 64 GB': 'Qwen3 32B Q4', 'الأفضل لـ Mac 128 GB': 'Llama 3.3 70B Q5' },
          { 'حالة الاستخدام': 'الدردشة / المحادثة', 'الأفضل لـ Mac 36 GB': 'Mistral Small', 'الأفضل لـ Mac 64 GB': 'Mixtral 8x7B', 'الأفضل لـ Mac 128 GB': 'Llama 3.3 70B' },
          { 'حالة الاستخدام': 'الاستدلال / الرياضيات', 'الأفضل لـ Mac 36 GB': 'Qwen3 14B', 'الأفضل لـ Mac 64 GB': 'Qwen3 32B', 'الأفضل لـ Mac 128 GB': 'Qwen3 32B' },
          { 'حالة الاستخدام': 'RAG / الأسئلة والأجوبة', 'الأفضل لـ Mac 36 GB': 'Llama 3.1 8B + nomic-embed', 'الأفضل لـ Mac 64 GB': '[Llama 3.1 8B](/ar/power-local-llm/local-rag-for-private-business-data) + bge-large', 'الأفضل لـ Mac 128 GB': 'Llama 3.3 70B + bge-large' },
          { 'حالة الاستخدام': 'الرؤية / متعدد الوسائط', 'الأفضل لـ Mac 36 GB': 'LLaVA 7B', 'الأفضل لـ Mac 64 GB': '[Llama 3.2 Vision 11B](/ar/power-local-llm/local-vision-models-llava-ollama-2026)', 'الأفضل لـ Mac 128 GB': 'Llama 3.2 Vision 90B' },
          { 'حالة الاستخدام': 'الترجمة', 'الأفضل لـ Mac 36 GB': 'Qwen3 14B', 'الأفضل لـ Mac 64 GB': 'Qwen3 32B', 'الأفضل لـ Mac 128 GB': 'Aya Expanse 32B' },
          { 'حالة الاستخدام': 'التلخيص', 'الأفضل لـ Mac 36 GB': 'Llama 3.1 8B', 'الأفضل لـ Mac 64 GB': 'Qwen3 32B', 'الأفضل لـ Mac 128 GB': 'Llama 3.3 70B' },
          { 'حالة الاستخدام': 'مراجعة الكود', 'الأفضل لـ Mac 36 GB': 'DeepSeek Coder V2 Lite', 'الأفضل لـ Mac 64 GB': 'DeepSeek Coder V2 16B', 'الأفضل لـ Mac 128 GB': 'Llama 3.3 70B' },
        ],
        note: 'هذه اقتراحات تحريرية وليست نتائج اختبارات. قد يناسب نموذج متخصص مهمة معينة أكثر، لذا جرّبه على عملك.',
      },
      scenarios: {
        id: 'scenarios',
        title: 'تكوينات حقيقية حسب نوع المستخدم',
        callouts: [
          { type: 'tip', text: '**مطوّر مستقل (Mac Mini M5 Pro 64 GB، من 2,699 دولارًا بمعالج 15 نواة و512 GB، وفق [Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios)، 25 أغسطس 2026)**\n- البرمجة: DeepSeek Coder V2 Lite 16B ‏(Q4، 8.9 GB)\n- الكتابة: Llama 3.1 8B Q8 (8.5 GB) للتوثيق والبريد\n- يمكن تحميل النموذجين معًا عبر `OLLAMA_MAX_LOADED_MODELS=2`، ويحدد `OLLAMA_KEEP_ALIVE` مدة بقائهما محمّلين\n- التكاليف: لا رسوم لكل token عند الاستخدام المحلي، لكن العتاد والكهرباء يكلفان مالًا\n- قد تختلف الأسعار حسب بلدك.' },
          { type: 'tip', text: '**محترف يهتم بالخصوصية (MacBook Pro M5 Pro 48 GB)**\n- الأساسي: Llama 3.1 8B Q8 للعمل العام\n- الحساس: Qwen3 14B Q4 للمستندات القانونية/الطبية/المالية\n- السفر: يعمل دون اتصال بعد تنزيل النماذج\n- يعمل الاستدلال محلياً؛ وقد يظل التطبيق يتحقق من التحديثات ما لم تضبطه بخلاف ذلك\n- معلومات عامة وليست نصيحة قانونية أو طبية أو مالية؛ والقرار لشخص مؤهل' },
          { type: 'tip', text: '**باحث / مهندس ML (Mac Studio M5 Max 128 GB؛ سعر 2,499 دولارًا للطراز الأساسي 36 GB، و128 GB أغلى)**\n- الأساسي: Llama 3.3 70B Q5 (50 GB)\n- المتخصص: Qwen3 32B Q4 للبحث بلغات أخرى\n- البرمجة: DeepSeek Coder V2 16B\n- الرؤية: Llama 3.2 Vision 11B لأشكال المقالات\n- مجموع التنزيلات الأربعة نحو 87 GB قبل احتساب السياق؛ ويتوقف إبقاؤها محمّلة معًا على طول السياق وحد ذاكرة GPU في macOS\n- قد تختلف الأسعار حسب بلدك.' },
          { type: 'tip', text: '**خادم ذكاء اصطناعي عائلي (Mac Mini M5 Pro 64 GB، دائم التشغيل)**\n- مساعد صوتي: Llama 3.1 8B + Whisper + Piper\n- RAG: أسئلة وأجوبة حول مستندات العائلة بالتضمينات\n- مساعدة برمجية لأفراد العائلة عبر REST API\n- التكاليف: العتاد والكهرباء؛ لم نقِس استهلاك الطاقة' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: 'نماذج يجب تجنّبها في 2026 (ولماذا)',
        callouts: [
          { type: 'warning', text: '**Llama 2 (أي حجم): جيل أقدم** — أصدرت Meta منذ ذلك الحين إصدارات أحدث من Llama. وقد تستخدمه دروس قديمة حتى الآن. فكّر بدلًا منه في: Llama 3.1 8B.' },
          { type: 'warning', text: '**Vicuna وAlpaca وWizardLM: إصدارات ضبط دقيق مجتمعية أقدم** — وهي مبنية على نماذج أساسية سابقة. عند إعداد جديد، ابدأ بنموذج instruct أحدث مثل Qwen3 14B أو Llama 3.1 8B.' },
          { type: 'warning', text: '**Falcon 180B: ضخم جدًا على Mac** — يحتاج نموذج بهذا الحجم إلى ذاكرة تفوق كثيرًا ما في معظم تكوينات Mac. وعادةً يكون نموذج أصغر وأحدث مثل [Llama 3.3 70B](/ar/local-llms/running-70b-models-apple-silicon-m5-max) الخيار العملي.' },
          { type: 'warning', text: '**تجنّب FP16 مع 70B على معظم أجهزة Mac** — حجم تنزيل Llama 3.3 70B بصيغة FP16 هو 141 GB، أي أكثر مما يتسع له M5 Max (بحد أقصى 128 GB). من حيث السعة يلزم جهاز Mac بذاكرة أكبر، مثل M5 Ultra بذاكرة 256 أو 512 GB. لم نقِس فرق الجودة مقارنةً بـ Q5. ابدأ بـ [Q4_K_M أو Q5_K_M](/ar/local-llms/llm-quantization-explained).' },
          { type: 'warning', text: '**تجنّب النماذج الأساسية الصرفة (دون إصدار instruct)** — تكمل النماذج الأساسية النص لكنها لا تتبع التعليمات. ابحث عن اللاحقة "-instruct" أو "-chat". استبدلها بـ: إصدار instruct من النموذج نفسه.' },
          { type: 'warning', text: '**تحقق من تاريخ الإصدار قبل اختيار النموذج** — قد تذكر بعض الأدلة عائلات أقدم مثل StableLM وRedPajama وMPT وPythia. راجع في كل بطاقة نموذج تاريخ الإصدار والترخيص، وقارن بنماذج أحدث.' },
        ],
      },
      formatReference: {
        id: 'format-reference',
        title: 'مرجع سريع لصيغ النماذج',
        columns: ['الصيغة', 'يستخدمها', 'الحجم مقابل الأصلي'],
        rows: [
          { 'الصيغة': 'GGUF Q4_K_M', 'يستخدمها': '[Ollama](/ar/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'الحجم مقابل الأصلي': '~30% من FP16' },
          { 'الصيغة': 'GGUF Q5_K_M', 'يستخدمها': '[Ollama](/ar/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'الحجم مقابل الأصلي': '~35% من FP16' },
          { 'الصيغة': 'GGUF Q8_0', 'يستخدمها': '[Ollama](/ar/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'الحجم مقابل الأصلي': '~50% من FP16' },
          { 'الصيغة': 'MLX 4-bit', 'يستخدمها': 'إطار MLX', 'الحجم مقابل الأصلي': '~30% من FP16' },
          { 'الصيغة': 'MLX 8-bit', 'يستخدمها': 'إطار MLX', 'الحجم مقابل الأصلي': '~50% من FP16' },
          { 'الصيغة': 'FP16 (الأصلي)', 'يستخدمها': 'جميع الأطر', 'الحجم مقابل الأصلي': '100%' },
        ],
        note: 'الأحجام في هذا المقال بصيغة GGUF Q4_K_M ما لم يُذكر خلاف ذلك. المكافئات MLX بدقة 4-bit بحجم مماثل. للبايتات الدقيقة، راجع بطاقة النموذج على HuggingFace. يشغّل llama.cpp صيغة GGUF مباشرةً عبر واجهة Metal الخلفية، وهو ما تستخدمه Ollama داخلياً — أما MLX فهو إطار Apple الخاص ويميل إلى أن يكون أسرع مع البنى المصممة خصيصاً لـ MLX على الشريحة نفسها. يدعم LM Studio كلاً من GGUF وMLX ويتيح تبديل الواجهة الخلفية لكل نموذج من واجهته.',
      },
      downloadGuide: {
        id: 'download-guide',
        title: 'مرجع سريع: تنزيل هذه النماذج',
        codeBlock: `# Mac 16 GB
ollama pull phi4

# Mac 36 GB (pick one)
ollama pull llama3.1:8b
ollama pull qwen3:14b
ollama pull mistral-small

# Mac 64 GB
ollama pull qwen3:32b
ollama pull mixtral:8x7b

# Mac 128 GB
ollama pull llama3.3:70b                  # Q4_K_M, 43 GB
ollama pull llama3.3:70b-instruct-q5_K_M  # Q5_K_M, 50 GB

# Specialty models
ollama pull deepseek-coder-v2:16b   # coding
ollama pull llama3.2-vision:11b     # vision
ollama pull aya-expanse:32b         # translation`,
        codeLanguage: 'bash',
        note: 'يزن كل نموذج عدة GB. قد تصل مساحة القرص الإجمالية لعدة نماذج إلى 50–100 GB. تحقق من الاستخدام بـ `du -sh ~/.ollama/`. يمكن لمستخدمي LM Studio تنزيل أوزان GGUF أو MLX نفسها مباشرةً من متصفح النماذج داخل التطبيق بدلاً من سطر الأوامر.',
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'مقالات ذات صلة',
        items: [
          '[Apple Silicon لنماذج LLM المحلية: دليل كامل](/ar/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro مقابل M5 Max لنماذج LLM المحلية: المواصفات والسرعات التقديرية](/ar/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[كم ذاكرة موحدة أحتاج لنماذج LLM المحلية؟](/ar/local-llms/how-much-unified-memory-for-local-llm)',
          '[مقارنة MLX مقابل Ollama مقابل llama.cpp](/ar/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[دليل تثبيت Ollama على Mac](/ar/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[تشغيل نماذج 70B على Apple Silicon](/ar/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[شرح تكميم LLM](/ar/local-llms/llm-quantization-explained)',
          '[مقارنة Qwen مقابل Llama مقابل Mistral](/ar/local-llms/qwen-vs-llama-vs-mistral)',
          '[الذكاء الاصطناعي المحلي من Apple مقابل نماذج LLM المستضافة ذاتياً: ما الذي غيّرته WWDC 2026 فعلاً](/ar/local-llms/apple-on-device-ai-vs-local-llms) -- Apple on-device AI vs local LLMs',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'هل يمكنني تشغيل نموذجين مختلفين في آن واحد؟', a: 'نعم، اضبط `OLLAMA_MAX_LOADED_MODELS=2` في متغيرات البيئة. مع 64 GB يمكنك تشغيل 8B + 32B في آن واحد.' },
          { q: 'أي نموذج أفضل للمبتدئين؟', a: 'Llama 3.1 8B نقطة بداية عملية: دعمه واسع، وحجم تنزيل Q4_K_M هو 4.9 GB. ويترك جهاز Mac بذاكرة 16 GB هامشًا لنظام macOS وللسياق.' },
          { q: 'هل Mixtral 8x7B أسرع من Llama 8B؟', a: 'لا تعوّل على ذلك. تنزيل Mixtral 8x7B أكبر بكثير (26 GB عند Q4 في Ollama مقابل 4.9 GB لـ Llama 3.1 8B Q4). [وتقول Mistral](https://mistral.ai/news/mixtral-of-experts/) إنه يستخدم 12.9 مليار معامل لكل token، وهو ما يظل أكثر من 8B، لذا يُتوقع مع تكميم متقارب أن يكون نموذج 8B أسرع. لم تقِس PromptQuorum ذلك. أيهما أفضل يعتمد على المهمة.' },
          { q: 'ما أفضل LLM محلي في 2026؟', a: 'لمعظم المستخدمين على Apple Silicon: يُعدّ Qwen3 (بأي حجم يتناسب مع جهاز Mac لديك) خياراً قوياً، كما يُعدّ Llama 3.3 70B خياراً قوياً آخر لأجهزة Mac بسعة 128 GB. لأجهزة 16 GB: يُعدّ [Phi-4](/ar/local-llms/llm-quantization-explained) خياراً صغيراً قادراً.' },
          { q: 'هل يمكنني تشغيل Llama 3.1 405B على جهاز Mac؟', a: 'فقط مع ذاكرة موحدة كبيرة جدًا. تبلغ تنزيلات Q4 لنموذج Llama 3.1 405B في Ollama نحو 229–243 GB، وهو أعلى بكثير من الحد الأقصى 128 GB في M5 Max. من حيث السعة يحتاج إلى Mac Studio بذاكرة 512 GB: تكوين سابق بسعة 512 GB، أو M5 Ultra الذي تذكر Apple له 512 GB (أُعلن عنه في 25 أغسطس 2026، وأُعلن أن تكوين 512 GB يأتي أواخر أكتوبر 2026). سعر 5,499 دولارًا هو سعر بداية M5 Ultra بذاكرة 96 GB، لذا فإن 512 GB أغلى. لم نختبر 405B على جهاز Mac.' },
          { q: 'هل Qwen أفضل من Llama للاستخدام المحلي؟', a: 'يعتمد ذلك على المهمة وحجم النموذج. قارن بطاقات النماذج، وتحقق من ترخيص كل منها، وجرّب كليهما بمطالباتك. لم تُجرِ PromptQuorum اختبار مقارنة مباشرة.' },
          { q: 'ما أصغر نموذج مفيد فعلاً؟', a: 'Phi-4 Mini بـ 3.8B معامل. للدردشة والأسئلة والأجوبة، يُعدّ قادراً بالنسبة إلى حجمه. للبرمجة أو الاستدلال المعقد، انتقل إلى Llama 3.1 8B أو [Qwen3 14B](/ar/local-llms/qwen-vs-llama-vs-mistral).' },
          { q: 'هل يعمل vLLM على Apple Silicon؟', a: 'راجع [وثائق vLLM الحالية](https://docs.vllm.ai) بشأن دعم Apple Silicon لأنه قد يتغير. يستهدف vLLM أساسًا خدمة عدد كبير من الطلبات. للمستخدم الواحد على Mac، يُعدّ Ollama أو LM Studio نقطة بداية أبسط. لم تقِس PromptQuorum أداء vLLM على Mac.' },
          { q: 'ماذا يمكن لجهاز MacBook Air M5 تشغيله؟', a: 'تذكر Apple أن [MacBook Air](https://www.apple.com/macbook-air/specs/) يأتي بمعالج M5 وذاكرة موحدة 16 أو 24 أو 32 GB وعرض نطاق 153 GB/s. وهذا نصف عرض نطاق M5 Pro، لذا لا تنطبق عليه أرقام M5 Pro وM5 Max أعلاه. مع 16 GB يتسع الجهاز لـ Phi-4 ‏(9.1 GB) بهامش محدود (نحو 10–13 tok/s، تقديريًا). ومع 24 GB أو أكثر يكون Llama 3.1 8B Q8 خيارًا (نحو 11–14 tok/s، تقديريًا). وقد تنخفض السرعة أثناء التوليد الطويل.' },
          { q: 'ما أفضل إعداد لجهاز MacBook Pro M5 Max بذاكرة 128GB؟', a: 'Llama 3.3 70B Q5_K_M ‏(50 GB) للاستخدام اليومي، مع مساحة لتحميل نموذج ثانٍ مثل Qwen3 14B Q4 ‏(9.3 GB) أو DeepSeek Coder V2 16B ‏(8.9 GB) عبر `OLLAMA_MAX_LOADED_MODELS=2` بحسب طول السياق. مع GPU ذي 40 نواة (614 GB/s) توقّع نحو 7–10 tok/s على 70B Q5. ويتسع الجهاز أيضًا لـ Llama 3.3 70B Q8 ‏(75 GB) بنحو 5–7 tok/s. القيمتان تقديريتان وليستا من اختبارات قياسية.' },
        ],
      },
    },
    ctaText: 'هل اخترت بالفعل نموذجاً لجهاز Mac لديك؟ قارن إجاباته مع GPT-4 وClaude وGemini و22 نموذجاً آخر بالتوازي عبر PromptQuorum — تحقق إن كان نموذجك المحلي Llama أو Qwen أو Phi يضاهي جودة السحابة لحالات استخدامك المحددة.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل نماذج LLM لـ Apple Silicon 2026: 16 GB–128 GB',
      description: 'أفضل نماذج LLM لـ Apple Silicon: Phi-4 (16 GB)، Llama 8B (36 GB)، Llama 70B (128 GB).',
      url: 'https://www.promptquorum.com/ar/local-llms/best-models-apple-silicon-2026',
      inLanguage: 'ar',
      datePublished: '2026-05-15',
      dateModified: '2026-11-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  // VERIFY: preços de configurações de Mac (US$ 1.200-4.000) mantidos em USD (referência da Apple US). No Brasil, a Apple cobra valores bem mais altos em reais (Mac Mini M5 Pro 64GB ~R$ 18-25k; Mac Studio M5 Max 128GB ~R$ 50k+). Assinaturas (Copilot/ChatGPT) também em USD. Confirmar preços Apple BR antes de publicar.
  pt: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Melhores modelos Ollama para Apple Silicon 2026: Recomendações para 16 GB, 36 GB, 64 GB, 128 GB',
    seoTitle: 'Melhores modelos Ollama para Apple Silicon 2026: 16 GB–128 GB',
    intro: 'Recomendações de LLMs locais conforme a memória do Mac: 16 GB (Phi-4), 36 GB (Llama 3.1 8B), 64 GB (Qwen3 32B) e 128 GB (Llama 3.3 70B), com tok/s estimados a partir da largura de banda da memória. O M5 Pro vai até 64 GB.',
    metaDescription: 'Melhores modelos Ollama para Apple Silicon: Phi-4 (16 GB), Llama 8B (36 GB), Qwen3 32B (64 GB) e Llama 70B (128 GB). tok/s estimados e limites.',
    heroImage: '/images/best-models-apple-silicon-2026-by-tier-hero-pt.webp',
    twitterDescription: 'Melhores modelos Ollama para o seu Mac: 16 GB→Phi-4, 36 GB→Llama 8B, 64 GB→Qwen3 32B, 128 GB→Llama 70B.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen3 14B', 'Qwen3 32B', 'Mixtral 8x7B', 'Llama 3.3 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M6', 'M5 Ultra'],
    audience: 'Usuários de Mac que buscam recomendações de modelos conforme sua configuração.',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'melhores modelos Apple Silicon Mac',
    targetKeywords: ['melhor LLM Mac', 'recomendações de modelos', 'desempenho por configuração Mac'],
    leadAnswerBlock: '**16 GB: Phi-4. 36 GB: Llama 3.1 8B Q8. 64 GB: Qwen3 32B Q4. 128 GB: Llama 3.3 70B Q5. Velocidade estimada no M5 Max: ~32–43 tok/s (escolha de 36 GB), ~18–25 (64 GB), ~7–10 (128 GB). O M5 Pro vai até 64 GB. Todos funcionam via Ollama no Metal.**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      pt: {
        question: 'Qual modelo de LLM devo rodar no meu Mac?', // VERIFY
        answer: '16 GB → Phi-4. 36 GB → Llama 3.1 8B ou Qwen3 14B. 64 GB → Qwen3 32B. 128 GB → Llama 3.3 70B. Estimativas pela largura de banda, não benchmarks: no M5 Max ~32–43 tok/s (8B Q8, 36 GB), ~18–25 (32B Q4, 64 GB), ~7–10 (70B Q5, 128 GB). O M5 Pro vai até 64 GB.', // VERIFY
        bullets: ['16 GB: Phi-4 (est. ~10–13 tok/s no M6)', '36 GB: Llama 3.1 8B Q8 (est. ~32–43 tok/s, M5 Max)', '64 GB: Qwen3 32B Q4 (est. ~9–12 M5 Pro, ~18–25 M5 Max)', '128 GB: Llama 3.3 70B Q5 (est. ~7–10 tok/s, M5 Max)', 'O M5 Pro vai até 64 GB', 'Todos disponíveis via Ollama'], // VERIFY
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'Melhor modelo por nível de memória', anchor: '#by-tier' },
      { label: 'Como comparar a qualidade', anchor: '#quality-benchmarks' },
      { label: 'Melhor modelo por caso de uso', anchor: '#by-usecase' },
      { label: 'Cenários de usuários reais', anchor: '#scenarios' },
      { label: 'Modelos que você deve evitar', anchor: '#avoid' },
      { label: 'Referência de formatos de modelo', anchor: '#format-reference' },
      { label: 'Baixar estes modelos', anchor: '#download-guide' },
      { label: 'Artigos relacionados', anchor: '#related-articles' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    sections: {
      byTier: {
        id: 'by-tier',
        title: 'Melhores recomendações de modelos por memória do Mac',
        content: 'Especificações conferidas em 28/11/2026 nas páginas da Apple do [Mac mini](https://www.apple.com/mac-mini/specs/), do [Mac Studio](https://www.apple.com/mac-studio/specs/) e do [MacBook Pro](https://www.apple.com/macbook-pro/specs/). Mac mini: M6 (até 32 GB) ou M5 Pro (24, 48 ou 64 GB). Mac Studio: M5 Max (de 36 a 128 GB) ou M5 Ultra (96, 256 ou 512 GB). A Apple anunciou os dois desktops em 25 de agosto de 2026, com disponibilidade a partir de 22 de setembro; a configuração de 512 GB foi anunciada para o fim de outubro. Preços iniciais de lançamento nos EUA: Mac mini M6 US$ 899 (16 GB), M5 Pro US$ 1.699 (24 GB); Mac Studio M5 Max US$ 2.499 (36 GB), M5 Ultra US$ 5.499 (96 GB). Mais memória custa mais. Os preços variam conforme o país. Fontes dos preços: [MacRumors](https://www.macrumors.com/roundup/mac-mini/), [9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/). A escolha dos modelos é uma recomendação editorial baseada no tamanho e no encaixe na memória, não um ranking de testes.',
        columns: ['Memória', 'Escolha principal', 'Quantização', 'Tamanho', 'M5 Pro tok/s', 'M5 Max tok/s', 'Alternativa'],
        rows: [
          { 'Memória': '16 GB', 'Escolha principal': 'Phi-4', 'Quantização': 'Q4_K_M', 'Tamanho': '9,1 GB', 'M5 Pro tok/s': 'Não há versão de 16 GB', 'M5 Max tok/s': 'Não há versão de 16 GB', 'Alternativa': 'Llama 3.1 8B Q4 (4,9 GB)' },
          { 'Memória': '36 GB', 'Escolha principal': 'Llama 3.1 8B', 'Quantização': 'Q8', 'Tamanho': '8,5 GB', 'M5 Pro tok/s': 'Não há versão de 36 GB', 'M5 Max tok/s': '~32–43', 'Alternativa': 'Qwen3 14B Q4 (9,3 GB)' },
          { 'Memória': '48 GB', 'Escolha principal': 'Qwen3 14B', 'Quantização': 'Q8', 'Tamanho': '16 GB', 'M5 Pro tok/s': '~12–15', 'M5 Max tok/s': '~23–31', 'Alternativa': 'Mixtral 8x7B Q4 (26 GB)' },
          { 'Memória': '64 GB', 'Escolha principal': 'Qwen3 32B', 'Quantização': 'Q4_K_M', 'Tamanho': '20 GB', 'M5 Pro tok/s': '~9–12', 'M5 Max tok/s': '~18–25', 'Alternativa': 'Mixtral 8x7B Q5 (33 GB)' },
          { 'Memória': '96 GB', 'Escolha principal': 'Llama 3.3 70B', 'Quantização': 'Q4_K_M', 'Tamanho': '43 GB', 'M5 Pro tok/s': 'Não há versão de 96 GB', 'M5 Max tok/s': 'Não há versão de 96 GB', 'Alternativa': 'M5 Ultra: ~17–21 (est.)' },
          { 'Memória': '128 GB', 'Escolha principal': 'Llama 3.3 70B', 'Quantização': 'Q5_K_M', 'Tamanho': '50 GB', 'M5 Pro tok/s': 'Não há versão de 128 GB', 'M5 Max tok/s': '~7–10', 'Alternativa': '—' },
          { 'Memória': '128 GB', 'Escolha principal': 'Llama 3.3 70B', 'Quantização': 'Q8', 'Tamanho': '75 GB', 'M5 Pro tok/s': 'Não há versão de 128 GB', 'M5 Max tok/s': '~5–7', 'Alternativa': 'Arquivo maior, mais lento' },
        ],
        note: 'Os tamanhos são os de download no Ollama (GGUF), conferidos em 28/11/2026; o contexto exige memória adicional. Todos os valores de tok/s são estimativas, não benchmarks: 60 a 80% da largura de banda da memória dividida pelo tamanho do modelo (M5 Pro 307 GB/s; M5 Max 460 GB/s com 36 GB e 614 GB/s de 48 a 128 GB). A velocidade real pode ser diferente, principalmente com modelos pequenos. Um Mac M6 de 16 GB ou um MacBook Air M5 tem 153 GB/s: cerca de 10–13 tok/s com o Phi-4 (estimativa). Um M5 Pro de 64 GB também comporta o 70B Q4, a cerca de 4–5 tok/s (estimativa; veja nosso [guia de hardware 70B](/pt/local-llms/70b-models-consumer-hardware)).',
        image: '',
        imageCaption: '',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: 'Como comparar a qualidade dos modelos',
        columns: ['Modelo', 'Tamanho do download no Ollama', 'Página oficial'],
        rows: [
          { 'Modelo': 'Phi-4', 'Tamanho do download no Ollama': 'Q4_K_M 9,1 GB / Q8 16 GB', 'Página oficial': '[phi4](https://ollama.com/library/phi4)' },
          { 'Modelo': 'Llama 3.1 8B', 'Tamanho do download no Ollama': 'Q4_K_M 4,9 GB / Q8 8,5 GB', 'Página oficial': '[llama3.1](https://ollama.com/library/llama3.1)' },
          { 'Modelo': 'Qwen3 14B', 'Tamanho do download no Ollama': 'Q4_K_M 9,3 GB / Q8 16 GB', 'Página oficial': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'Modelo': 'Qwen3 32B', 'Tamanho do download no Ollama': 'Q4_K_M 20 GB / Q8 35 GB', 'Página oficial': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'Modelo': 'Mixtral 8x7B', 'Tamanho do download no Ollama': 'Q4_0 26 GB / Q8 50 GB', 'Página oficial': '[mixtral](https://ollama.com/library/mixtral)' },
          { 'Modelo': 'Llama 3.3 70B', 'Tamanho do download no Ollama': 'Q4_K_M 43 GB / Q8 75 GB', 'Página oficial': '[llama3.3](https://ollama.com/library/llama3.3)' },
        ],
        note: 'Esta página não lista notas de benchmarks. A PromptQuorum não avaliou esses modelos, e não temos uma única fonte verificável que teste todos nas mesmas condições. Leia as notas de benchmark na ficha do fabricante do modelo, confira qual versão e quais ajustes foram testados e experimente os modelos com seus próprios prompts. Tamanhos conferidos em 28/11/2026.',
        image: '',
        imageCaption: '',
      },
      byUsecase: {
        id: 'by-usecase',
        title: 'Melhores modelos por caso de uso (2026)',
        columns: ['Caso de uso', 'Melhor para Mac 36 GB', 'Melhor para Mac 64 GB', 'Melhor para Mac 128 GB'],
        rows: [
          { 'Caso de uso': 'Programação (geral)', 'Melhor para Mac 36 GB': 'Llama 3.1 8B', 'Melhor para Mac 64 GB': 'DeepSeek Coder V2 16B', 'Melhor para Mac 128 GB': 'Llama 3.3 70B' },
          { 'Caso de uso': 'Programação (Python)', 'Melhor para Mac 36 GB': 'DeepSeek Coder V2 Lite', 'Melhor para Mac 64 GB': 'DeepSeek Coder V2 16B', 'Melhor para Mac 128 GB': 'DeepSeek Coder V2 16B' },
          { 'Caso de uso': 'Escrita longa', 'Melhor para Mac 36 GB': 'Llama 3.1 8B Q8', 'Melhor para Mac 64 GB': 'Qwen3 32B Q4', 'Melhor para Mac 128 GB': 'Llama 3.3 70B Q5' },
          { 'Caso de uso': 'Chat / conversa', 'Melhor para Mac 36 GB': 'Mistral Small', 'Melhor para Mac 64 GB': 'Mixtral 8x7B', 'Melhor para Mac 128 GB': 'Llama 3.3 70B' },
          { 'Caso de uso': 'Raciocínio / matemática', 'Melhor para Mac 36 GB': 'Qwen3 14B', 'Melhor para Mac 64 GB': 'Qwen3 32B', 'Melhor para Mac 128 GB': 'Qwen3 32B' },
          { 'Caso de uso': 'RAG / perguntas e respostas', 'Melhor para Mac 36 GB': 'Llama 3.1 8B + nomic-embed', 'Melhor para Mac 64 GB': '[Llama 3.1 8B](/pt/power-local-llm/local-rag-for-private-business-data) + bge-large', 'Melhor para Mac 128 GB': 'Llama 3.3 70B + bge-large' },
          { 'Caso de uso': 'Visão / multimodal', 'Melhor para Mac 36 GB': 'LLaVA 7B', 'Melhor para Mac 64 GB': '[Llama 3.2 Vision 11B](/pt/power-local-llm/local-vision-models-llava-ollama-2026)', 'Melhor para Mac 128 GB': 'Llama 3.2 Vision 90B' },
          { 'Caso de uso': 'Tradução', 'Melhor para Mac 36 GB': 'Qwen3 14B', 'Melhor para Mac 64 GB': 'Qwen3 32B', 'Melhor para Mac 128 GB': 'Aya Expanse 32B' },
          { 'Caso de uso': 'Resumo', 'Melhor para Mac 36 GB': 'Llama 3.1 8B', 'Melhor para Mac 64 GB': 'Qwen3 32B', 'Melhor para Mac 128 GB': 'Llama 3.3 70B' },
          { 'Caso de uso': 'Revisão de código', 'Melhor para Mac 36 GB': 'DeepSeek Coder V2 Lite', 'Melhor para Mac 64 GB': 'DeepSeek Coder V2 16B', 'Melhor para Mac 128 GB': 'Llama 3.3 70B' },
        ],
        note: 'São sugestões editoriais, não resultados de testes. Um modelo especializado pode servir melhor a uma tarefa; teste com o seu próprio trabalho.',
      },
      scenarios: {
        id: 'scenarios',
        title: 'Configurações reais por tipo de usuário',
        callouts: [
          { type: 'tip', text: '**Desenvolvedor independente (Mac Mini M5 Pro 64 GB, a partir de US$ 2.699 com CPU de 15 núcleos/512 GB, segundo o [Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios), 25 ago 2026)**\n- Programação: DeepSeek Coder V2 Lite 16B (Q4, 8,9 GB)\n- Escrita: Llama 3.1 8B Q8 (8,5 GB) para documentação e e-mails\n- Os dois podem ficar carregados juntos com `OLLAMA_MAX_LOADED_MODELS=2`; `OLLAMA_KEEP_ALIVE` define por quanto tempo\n- Custos: sem cobrança por token no uso local; hardware e energia continuam custando dinheiro\n- Os preços variam conforme o país.' },
          { type: 'tip', text: '**Profissional focado em privacidade (MacBook Pro M5 Pro 48 GB)**\n- Principal: Llama 3.1 8B Q8 para trabalho geral\n- Sensível: Qwen3 14B Q4 para documentos jurídicos/médicos/financeiros\n- Viagens: funciona offline depois que os modelos são baixados\n- A inferência roda localmente; o app ainda pode verificar atualizações, a menos que você o configure de outra forma\n- Informação geral, não é aconselhamento jurídico, médico ou financeiro; quem decide é um profissional qualificado' },
          { type: 'tip', text: '**Pesquisador / Engenheiro de ML (Mac Studio M5 Max 128 GB; US$ 2.499 é a base de 36 GB, então 128 GB custa mais)**\n- Principal: Llama 3.3 70B Q5 (50 GB)\n- Especializado: Qwen3 32B Q4 para pesquisa em outros idiomas\n- Programação: DeepSeek Coder V2 16B\n- Visão: Llama 3.2 Vision 11B para figuras de artigos\n- Os quatro downloads somam cerca de 87 GB sem contar o contexto; mantê-los carregados ao mesmo tempo depende do tamanho do contexto e do limite de memória de GPU do macOS\n- Os preços variam conforme o país.' },
          { type: 'tip', text: '**Servidor de IA familiar (Mac Mini M5 Pro 64 GB, sempre ligado)**\n- Assistente de voz: Llama 3.1 8B + Whisper + Piper\n- RAG: perguntas e respostas sobre documentos da família com embeddings\n- Ajuda de programação para os familiares via REST API\n- Custos: hardware e energia; não medimos o consumo' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: 'Modelos que você deve evitar em 2026 (e por quê)',
        callouts: [
          { type: 'warning', text: '**Llama 2 (qualquer tamanho): uma geração mais antiga** — A Meta lançou versões mais novas do Llama desde então. Tutoriais antigos ainda podem usá-lo. Considere no lugar: Llama 3.1 8B.' },
          { type: 'warning', text: '**Vicuna, Alpaca, WizardLM: fine-tunes antigos da comunidade** — Eles se baseiam em modelos base anteriores. Em uma instalação nova, comece com um modelo instruct mais recente, como Qwen3 14B ou Llama 3.1 8B.' },
          { type: 'warning', text: '**Falcon 180B: muito grande para um Mac** — Um modelo desse tamanho precisa de muito mais memória do que a maioria das configurações de Mac tem. Um modelo menor e mais novo como o [Llama 3.3 70B](/pt/local-llms/running-70b-models-apple-silicon-m5-max) costuma ser a escolha mais prática.' },
          { type: 'warning', text: '**Evite FP16 com 70B na maioria dos Macs** — O download FP16 do Llama 3.3 70B tem 141 GB, mais do que um M5 Max (máximo de 128 GB) comporta. Em capacidade, só cabe em um Mac com mais memória, como um M5 Ultra de 256 ou 512 GB. Não medimos a diferença de qualidade em relação ao Q5. Comece com [Q4_K_M ou Q5_K_M](/pt/local-llms/llm-quantization-explained).' },
          { type: 'warning', text: '**Evite os modelos base puros (sem variante instruct)** — Os modelos base completam texto, mas não seguem instruções. Procure o sufixo "-instruct" ou "-chat". Substitua por: a variante instruct do mesmo modelo.' },
          { type: 'warning', text: '**Confira a data de lançamento antes de escolher um modelo** — Alguns guias ainda citam famílias antigas como StableLM, RedPajama, MPT ou Pythia. Veja em cada ficha a data e a licença e compare com modelos mais novos.' },
        ],
      },
      formatReference: {
        id: 'format-reference',
        title: 'Referência rápida de formatos de modelo',
        columns: ['Formato', 'Usado por', 'Tamanho vs original'],
        rows: [
          { 'Formato': 'GGUF Q4_K_M', 'Usado por': '[Ollama](/pt/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Tamanho vs original': '~30% do FP16' },
          { 'Formato': 'GGUF Q5_K_M', 'Usado por': '[Ollama](/pt/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Tamanho vs original': '~35% do FP16' },
          { 'Formato': 'GGUF Q8_0', 'Usado por': '[Ollama](/pt/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Tamanho vs original': '~50% do FP16' },
          { 'Formato': 'MLX 4-bit', 'Usado por': 'Framework MLX', 'Tamanho vs original': '~30% do FP16' },
          { 'Formato': 'MLX 8-bit', 'Usado por': 'Framework MLX', 'Tamanho vs original': '~50% do FP16' },
          { 'Formato': 'FP16 (original)', 'Usado por': 'Todos os frameworks', 'Tamanho vs original': '100%' },
        ],
        note: 'Os tamanhos neste artigo são GGUF Q4_K_M salvo indicação em contrário. Os equivalentes MLX 4-bit têm tamanho similar. Para bytes exatos, consulte a ficha do modelo no HuggingFace. O llama.cpp roda GGUF diretamente no backend Metal e é o que o Ollama usa por baixo dos panos — o MLX é o framework da própria Apple e costuma ser mais rápido para builds nativas em MLX no mesmo chip. O LM Studio suporta tanto GGUF quanto MLX e permite trocar de backend por modelo direto na interface.',
      },
      downloadGuide: {
        id: 'download-guide',
        title: 'Referência rápida: baixar estes modelos',
        codeBlock: `# Mac 16 GB
ollama pull phi4

# Mac 36 GB (escolha um)
ollama pull llama3.1:8b
ollama pull qwen3:14b
ollama pull mistral-small

# Mac 64 GB
ollama pull qwen3:32b
ollama pull mixtral:8x7b

# Mac 128 GB
ollama pull llama3.3:70b                  # Q4_K_M, 43 GB
ollama pull llama3.3:70b-instruct-q5_K_M  # Q5_K_M, 50 GB

# Modelos especializados
ollama pull deepseek-coder-v2:16b   # programação
ollama pull llama3.2-vision:11b     # visão
ollama pull aya-expanse:32b         # tradução`,
        codeLanguage: 'bash',
        note: 'Cada modelo pesa vários GB. O espaço total em disco para vários modelos pode alcançar 50–100 GB. Verifique o uso com `du -sh ~/.ollama/`. Usuários do LM Studio podem baixar os mesmos pesos GGUF ou MLX diretamente pelo navegador de modelos do próprio app, sem precisar da linha de comando.',
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Artigos relacionados',
        items: [
          '[Apple Silicon para LLMs locais: Guia completo](/pt/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max para LLMs locais: especificações e velocidades estimadas](/pt/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Quanta memória unificada preciso para LLMs locais?](/pt/local-llms/how-much-unified-memory-for-local-llm)',
          '[Comparativo MLX vs Ollama vs llama.cpp](/pt/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Guia de instalação do Ollama no Mac](/pt/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[Rodar modelos 70B em Apple Silicon](/pt/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[Quantização de LLM explicada](/pt/local-llms/llm-quantization-explained)',
          '[Comparativo Qwen vs Llama vs Mistral](/pt/local-llms/qwen-vs-llama-vs-mistral)',
          '[A IA no dispositivo da Apple vs LLMs locais reais: o que a WWDC 2026 mudou de verdade](/pt/local-llms/apple-on-device-ai-vs-local-llms) -- Apple on-device AI vs local LLMs',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Posso rodar dois modelos diferentes ao mesmo tempo?', a: 'Sim, defina `OLLAMA_MAX_LOADED_MODELS=2` nas variáveis de ambiente. Com 64 GB você pode rodar 8B + 32B simultaneamente.' },
          { q: 'Qual modelo é melhor para iniciantes?', a: 'O Llama 3.1 8B é um ponto de partida prático: tem amplo suporte, e o download Q4_K_M tem 4,9 GB. Um Mac de 16 GB deixa folga para o macOS e o contexto.' },
          { q: 'O Mixtral 8x7B é mais rápido que o Llama 8B?', a: 'Não conte com isso. O Mixtral 8x7B é um download bem maior (26 GB em Q4 no Ollama, contra 4,9 GB do Llama 3.1 8B Q4). [Segundo a Mistral](https://mistral.ai/news/mixtral-of-experts/), ele usa 12,9 bilhões de parâmetros por token, o que ainda é mais que 8B; com quantização semelhante, espere que o modelo 8B seja mais rápido. A PromptQuorum não mediu isso. Qual é melhor depende da tarefa.' },
          { q: 'Qual é o melhor LLM local em 2026?', a: 'Para a maioria dos usuários em Apple Silicon: o Qwen3 (qualquer tamanho que caiba no seu Mac) é uma boa escolha, e o Llama 3.3 70B é outra opção sólida em Macs de 128 GB. Para 16 GB: o [Phi-4](/pt/local-llms/llm-quantization-explained) é uma opção pequena e capaz.' },
          { q: 'Posso rodar o Llama 3.1 405B em um Mac?', a: 'Somente com uma memória unificada muito grande. Os downloads Q4 do Llama 3.1 405B no Ollama têm cerca de 229–243 GB, muito acima do máximo de 128 GB do M5 Max. Em capacidade, ele precisa de um Mac Studio de 512 GB: uma configuração anterior de 512 GB ou o M5 Ultra, para o qual a Apple lista 512 GB (anunciado em 25 de agosto de 2026; a configuração de 512 GB foi anunciada para o fim de outubro de 2026). US$ 5.499 é o preço inicial do M5 Ultra com 96 GB, então 512 GB custa mais. Não testamos o 405B em um Mac.' },
          { q: 'O Qwen é melhor que o Llama para uso local?', a: 'Depende da tarefa e do tamanho do modelo. Compare as fichas, confira cada licença e teste os dois com seus próprios prompts. A PromptQuorum não fez um teste comparativo direto.' },
          { q: 'Qual é o menor modelo que realmente é útil?', a: 'Phi-4 Mini com 3,8B parâmetros. Para chat e perguntas e respostas é capaz para o seu tamanho. Para programação ou raciocínio complexo, passe para o Llama 3.1 8B ou [Qwen3 14B](/pt/local-llms/qwen-vs-llama-vs-mistral).' },
          { q: 'O vLLM roda em Apple Silicon?', a: 'Consulte a [documentação atual do vLLM](https://docs.vllm.ai) sobre o suporte a Apple Silicon, porque isso pode mudar. O vLLM é voltado principalmente a atender muitas requisições. Para um único usuário no Mac, o Ollama ou o LM Studio são um começo mais simples. A PromptQuorum não mediu o vLLM em um Mac.' },
          { q: 'O que um MacBook Air M5 consegue rodar?', a: 'A Apple lista o [MacBook Air](https://www.apple.com/macbook-air/specs/) com M5, 16, 24 ou 32 GB de memória unificada e 153 GB/s de largura de banda. É metade da largura de banda do M5 Pro, então os valores de M5 Pro e M5 Max acima não se aplicam. Com 16 GB, o Phi-4 (9,1 GB) cabe com pouca folga (cerca de 10–13 tok/s, estimativa). Com 24 GB ou mais, o Llama 3.1 8B Q8 é uma opção (cerca de 11–14 tok/s, estimativa). Em gerações longas, a velocidade pode ser menor.' },
          { q: 'Qual é a melhor configuração para um MacBook Pro M5 Max com 128 GB de RAM?', a: 'Llama 3.3 70B Q5_K_M (50 GB) para o dia a dia, com espaço para carregar um segundo modelo, como Qwen3 14B Q4 (9,3 GB) ou DeepSeek Coder V2 16B (8,9 GB), via `OLLAMA_MAX_LOADED_MODELS=2`, dependendo do tamanho do contexto. Com a GPU de 40 núcleos (614 GB/s), espere cerca de 7–10 tok/s no 70B Q5. O Llama 3.3 70B Q8 (75 GB) também cabe, a cerca de 5–7 tok/s. Os dois valores são estimativas, não benchmarks.' },
        ],
      },
    },
    ctaText: 'Já escolheu um modelo para o seu Mac? Compare as respostas dele com GPT-4, Claude, Gemini e mais 22 modelos em paralelo com o PromptQuorum — verifique se o seu modelo local Llama, Qwen ou Phi iguala a qualidade da nuvem para seus casos de uso específicos.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhores modelos LLM para Apple Silicon 2026: 16 GB–128 GB',
      description: 'Melhores modelos LLM para Apple Silicon: Phi-4 (16 GB), Llama 8B (36 GB), Llama 70B (128 GB).',
      url: 'https://www.promptquorum.com/pt/local-llms/best-models-apple-silicon-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-15',
      dateModified: '2026-11-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  de: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Beste Ollama-Modelle für Apple Silicon 2026: Empfehlungen für 16 GB, 36 GB, 64 GB, 128 GB',
    seoTitle: 'Beste Ollama-Modelle für Apple Silicon 2026: 16–128 GB',
    intro: 'Lokale LLM-Empfehlungen nach Mac-Speicher: 16 GB (Phi-4), 36 GB (Llama 3.1 8B), 64 GB (Qwen3 32B), 128 GB (Llama 3.3 70B), mit aus der Speicherbandbreite geschätzten tok/s. Der M5 Pro endet bei 64 GB.',
    metaDescription: 'Beste Ollama-Modelle für Apple Silicon: Phi-4 (16 GB), Llama 8B (36 GB), Qwen3 32B (64 GB), Llama 70B (128 GB). Geschätzte tok/s und Speichergrenzen.',
    heroImage: '/images/best-models-apple-silicon-2026-by-tier-hero-de.webp',
    twitterDescription: 'Beste Ollama-Modelle für Ihren Mac: 16 GB→Phi-4, 36 GB→Llama 8B, 64 GB→Qwen3 32B, 128 GB→Llama 70B.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen3 14B', 'Qwen3 32B', 'Mixtral 8x7B', 'Llama 3.3 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M6', 'M5 Ultra'],
    audience: 'Mac-Benutzer, die Modellempfehlungen für ihre Mac-Konfiguration suchen.',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'beste Modelle Apple Silicon Mac',
    targetKeywords: ['bestes LLM Mac', 'Modellempfehlungen', 'Leistung nach Mac-Konfiguration'],
    leadAnswerBlock: '**16 GB: Phi-4. 36 GB: Llama 3.1 8B Q8. 64 GB: Qwen3 32B Q4. 128 GB: Llama 3.3 70B Q5. Geschätztes Tempo auf dem M5 Max: ~32–43 tok/s (36-GB-Wahl), ~18–25 (64 GB), ~7–10 (128 GB). Der M5 Pro endet bei 64 GB. Alle laufen über Ollama auf Metal.**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: {
        question: 'Welches LLM-Modell sollte ich auf meinem Mac verwenden?',
        answer: '16 GB → Phi-4. 36 GB → Llama 3.1 8B oder Qwen3 14B. 64 GB → Qwen3 32B. 128 GB → Llama 3.3 70B. Aus der Speicherbandbreite geschätzt, nicht gemessen: auf dem M5 Max ~32–43 tok/s (8B Q8, 36 GB), ~18–25 (32B Q4, 64 GB), ~7–10 (70B Q5, 128 GB). Der M5 Pro endet bei 64 GB.',
        bullets: ['16 GB: Phi-4 (geschätzt ~10–13 tok/s auf M6)', '36 GB: Llama 3.1 8B Q8 (geschätzt ~32–43 tok/s, M5 Max)', '64 GB: Qwen3 32B Q4 (geschätzt ~9–12 M5 Pro, ~18–25 M5 Max)', '128 GB: Llama 3.3 70B Q5 (geschätzt ~7–10 tok/s, M5 Max)', 'Der M5 Pro endet bei 64 GB', 'Alle über Ollama verfügbar'],
        updatedDate: '2026-11-28',
      },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Bestes Modell pro Speicherstufe', anchor: '#by-tier' },
      { label: 'Qualität vergleichen', anchor: '#quality-benchmarks' },
      { label: 'Bestes Modell nach Anwendungsfall', anchor: '#by-usecase' },
      { label: 'Reale Nutzungsszenarien', anchor: '#scenarios' },
      { label: 'Zu vermeidende Modelle', anchor: '#avoid' },
      { label: 'Modellformate Referenz', anchor: '#format-reference' },
      { label: 'Diese Modelle herunterladen', anchor: '#download-guide' },
      { label: 'Verwandte Artikel', anchor: '#related-articles' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      byTier: {
        id: 'by-tier',
        title: 'Beste Modellempfehlungen nach Mac-Speicher',
        content: 'Hardwaredaten am 28.11.2026 auf Apples Datenblättern für [Mac mini](https://www.apple.com/mac-mini/specs/), [Mac Studio](https://www.apple.com/mac-studio/specs/) und [MacBook Pro](https://www.apple.com/macbook-pro/specs/) geprüft. Mac mini: M6 (bis 32 GB) oder M5 Pro (24, 48 oder 64 GB). Mac Studio: M5 Max (36 bis 128 GB) oder M5 Ultra (96, 256 oder 512 GB). Apple hat beide Desktops am 25. August 2026 angekündigt, verfügbar ab 22. September; die 512-GB-Konfiguration war für Ende Oktober angekündigt. US-Startpreise zur Vorstellung: Mac mini M6 899 $ (16 GB), M5 Pro 1.699 $ (24 GB); Mac Studio M5 Max 2.499 $ (36 GB), M5 Ultra 5.499 $ (96 GB). Mehr Speicher kostet Aufpreis. Preisquellen: [MacRumors](https://www.macrumors.com/roundup/mac-mini/), [9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/). Die Modellauswahl ist eine redaktionelle Empfehlung nach Modellgröße und Speicherbedarf, keine Rangliste aus Tests.',
        columns: ['Speicher', 'Primäre Wahl', 'Quantisierung', 'Größe', 'M5 Pro tok/s', 'M5 Max tok/s', 'Alternative'],
        rows: [
          { 'Speicher': '16 GB', 'Primäre Wahl': 'Phi-4', 'Quantisierung': 'Q4_K_M', 'Größe': '9,1 GB', 'M5 Pro tok/s': 'Keine 16-GB-Version', 'M5 Max tok/s': 'Keine 16-GB-Version', 'Alternative': 'Llama 3.1 8B Q4 (4,9 GB)' },
          { 'Speicher': '36 GB', 'Primäre Wahl': 'Llama 3.1 8B', 'Quantisierung': 'Q8', 'Größe': '8,5 GB', 'M5 Pro tok/s': 'Keine 36-GB-Version', 'M5 Max tok/s': '~32–43', 'Alternative': 'Qwen3 14B Q4 (9,3 GB)' },
          { 'Speicher': '48 GB', 'Primäre Wahl': 'Qwen3 14B', 'Quantisierung': 'Q8', 'Größe': '16 GB', 'M5 Pro tok/s': '~12–15', 'M5 Max tok/s': '~23–31', 'Alternative': 'Mixtral 8x7B Q4 (26 GB)' },
          { 'Speicher': '64 GB', 'Primäre Wahl': 'Qwen3 32B', 'Quantisierung': 'Q4_K_M', 'Größe': '20 GB', 'M5 Pro tok/s': '~9–12', 'M5 Max tok/s': '~18–25', 'Alternative': 'Mixtral 8x7B Q5 (33 GB)' },
          { 'Speicher': '96 GB', 'Primäre Wahl': 'Llama 3.3 70B', 'Quantisierung': 'Q4_K_M', 'Größe': '43 GB', 'M5 Pro tok/s': 'Keine 96-GB-Version', 'M5 Max tok/s': 'Keine 96-GB-Version', 'Alternative': 'M5 Ultra: ~17–21 (geschätzt)' },
          { 'Speicher': '128 GB', 'Primäre Wahl': 'Llama 3.3 70B', 'Quantisierung': 'Q5_K_M', 'Größe': '50 GB', 'M5 Pro tok/s': 'Keine 128-GB-Version', 'M5 Max tok/s': '~7–10', 'Alternative': '—' },
          { 'Speicher': '128 GB', 'Primäre Wahl': 'Llama 3.3 70B', 'Quantisierung': 'Q8', 'Größe': '75 GB', 'M5 Pro tok/s': 'Keine 128-GB-Version', 'M5 Max tok/s': '~5–7', 'Alternative': 'Größere Datei, langsamer' },
        ],
        note: 'Die Größen sind Ollama-Downloadgrößen (GGUF), geprüft am 28.11.2026; der Kontext braucht zusätzlichen Speicher. Alle tok/s-Werte sind Schätzungen, keine Benchmarks: 60–80 % von Speicherbandbreite geteilt durch Modellgröße (M5 Pro 307 GB/s; M5 Max 460 GB/s bei 36 GB, 614 GB/s bei 48–128 GB). Das reale Tempo kann abweichen, besonders bei kleinen Modellen. Ein Mac mit M6 und 16 GB oder ein MacBook Air M5 hat 153 GB/s: etwa 10–13 tok/s mit Phi-4 (Schätzung). Ein M5 Pro mit 64 GB fasst auch 70B Q4, bei etwa 4–5 tok/s (Schätzung, siehe unseren [70B-Hardware-Leitfaden](/de/local-llms/70b-models-consumer-hardware)).',
        image: '',
        imageCaption: '',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: 'So vergleichen Sie die Modellqualität',
        columns: ['Modell', 'Ollama-Downloadgröße', 'Offizieller Eintrag'],
        rows: [
          { 'Modell': 'Phi-4', 'Ollama-Downloadgröße': 'Q4_K_M 9,1 GB / Q8 16 GB', 'Offizieller Eintrag': '[phi4](https://ollama.com/library/phi4)' },
          { 'Modell': 'Llama 3.1 8B', 'Ollama-Downloadgröße': 'Q4_K_M 4,9 GB / Q8 8,5 GB', 'Offizieller Eintrag': '[llama3.1](https://ollama.com/library/llama3.1)' },
          { 'Modell': 'Qwen3 14B', 'Ollama-Downloadgröße': 'Q4_K_M 9,3 GB / Q8 16 GB', 'Offizieller Eintrag': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'Modell': 'Qwen3 32B', 'Ollama-Downloadgröße': 'Q4_K_M 20 GB / Q8 35 GB', 'Offizieller Eintrag': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'Modell': 'Mixtral 8x7B', 'Ollama-Downloadgröße': 'Q4_0 26 GB / Q8 50 GB', 'Offizieller Eintrag': '[mixtral](https://ollama.com/library/mixtral)' },
          { 'Modell': 'Llama 3.3 70B', 'Ollama-Downloadgröße': 'Q4_K_M 43 GB / Q8 75 GB', 'Offizieller Eintrag': '[llama3.3](https://ollama.com/library/llama3.3)' },
        ],
        note: 'Diese Seite nennt keine Benchmark-Werte. PromptQuorum hat diese Modelle nicht gebenchmarkt, und uns liegt keine einzelne überprüfbare Quelle vor, die alle unter gleichen Bedingungen testet. Lesen Sie die Benchmark-Angaben auf der Modellkarte des Herstellers, prüfen Sie getestete Version und Einstellungen und probieren Sie die Modelle mit eigenen Prompts aus. Größen geprüft am 28.11.2026.',
        image: '',
        imageCaption: '',
      },
      byUsecase: {
        id: 'by-usecase',
        title: 'Beste Modelle nach Anwendungsfall (2026)',
        columns: ['Anwendungsfall', 'Bestes für 36-GB-Mac', 'Bestes für 64-GB-Mac', 'Bestes für 128-GB-Mac'],
        rows: [
          { 'Anwendungsfall': 'Programmierung (allgemein)', 'Bestes für 36-GB-Mac': 'Llama 3.1 8B', 'Bestes für 64-GB-Mac': 'DeepSeek Coder V2 16B', 'Bestes für 128-GB-Mac': 'Llama 3.3 70B' },
          { 'Anwendungsfall': 'Programmierung (Python)', 'Bestes für 36-GB-Mac': 'DeepSeek Coder V2 Lite', 'Bestes für 64-GB-Mac': 'DeepSeek Coder V2 16B', 'Bestes für 128-GB-Mac': 'DeepSeek Coder V2 16B' },
          { 'Anwendungsfall': 'Langtexte verfassen', 'Bestes für 36-GB-Mac': 'Llama 3.1 8B Q8', 'Bestes für 64-GB-Mac': 'Qwen3 32B Q4', 'Bestes für 128-GB-Mac': 'Llama 3.3 70B Q5' },
          { 'Anwendungsfall': 'Chat / Konversation', 'Bestes für 36-GB-Mac': 'Mistral Small', 'Bestes für 64-GB-Mac': 'Mixtral 8x7B', 'Bestes für 128-GB-Mac': 'Llama 3.3 70B' },
          { 'Anwendungsfall': 'Reasoning / Mathematik', 'Bestes für 36-GB-Mac': 'Qwen3 14B', 'Bestes für 64-GB-Mac': 'Qwen3 32B', 'Bestes für 128-GB-Mac': 'Qwen3 32B' },
          { 'Anwendungsfall': 'RAG / Frage & Antwort', 'Bestes für 36-GB-Mac': 'Llama 3.1 8B + nomic-embed', 'Bestes für 64-GB-Mac': '[Llama 3.1 8B](/de/power-local-llm/local-rag-for-private-business-data) + bge-large', 'Bestes für 128-GB-Mac': 'Llama 3.3 70B + bge-large' },
          { 'Anwendungsfall': 'Vision / Multimodal', 'Bestes für 36-GB-Mac': 'LLaVA 7B', 'Bestes für 64-GB-Mac': '[Llama 3.2 Vision 11B](/de/power-local-llm/local-vision-models-llava-ollama-2026)', 'Bestes für 128-GB-Mac': 'Llama 3.2 Vision 90B' },
          { 'Anwendungsfall': 'Übersetzung', 'Bestes für 36-GB-Mac': 'Qwen3 14B', 'Bestes für 64-GB-Mac': 'Qwen3 32B', 'Bestes für 128-GB-Mac': 'Aya Expanse 32B' },
          { 'Anwendungsfall': 'Zusammenfassung', 'Bestes für 36-GB-Mac': 'Llama 3.1 8B', 'Bestes für 64-GB-Mac': 'Qwen3 32B', 'Bestes für 128-GB-Mac': 'Llama 3.3 70B' },
          { 'Anwendungsfall': 'Code-Review', 'Bestes für 36-GB-Mac': 'DeepSeek Coder V2 Lite', 'Bestes für 64-GB-Mac': 'DeepSeek Coder V2 16B', 'Bestes für 128-GB-Mac': 'Llama 3.3 70B' },
        ],
        note: 'Das sind redaktionelle Vorschläge, keine Testergebnisse. Ein spezialisiertes Modell kann zu einer Aufgabe besser passen – testen Sie mit Ihrer eigenen Arbeit.',
      },
      scenarios: {
        id: 'scenarios',
        title: 'Praxisszenarien nach Nutzertyp',
        callouts: [
          { type: 'tip', text: '**Indie-Entwickler (Mac Mini M5 Pro 64 GB, ab 2.699 $ mit 15-Kern-CPU/512 GB, laut [Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios), 25.08.2026)**\n- Programmierung: DeepSeek Coder V2 Lite 16B (Q4, 8,9 GB)\n- Texte: Llama 3.1 8B Q8 (8,5 GB) für Dokumentation und E-Mails\n- Beide lassen sich mit `OLLAMA_MAX_LOADED_MODELS=2` gemeinsam laden; `OLLAMA_KEEP_ALIVE` legt fest, wie lange sie geladen bleiben\n- Kosten: keine Token-Gebühr bei lokaler Nutzung; Hardware und Strom kosten weiterhin Geld' },
          { type: 'tip', text: '**Datenschutzbewusster Profi (MacBook Pro M5 Pro 48 GB)**\n- Hauptmodell: Llama 3.1 8B Q8 für allgemeine Arbeit\n- Sensibel: Qwen3 14B Q4 für rechtliche/medizinische/finanzielle Dokumente\n- Reisen: funktioniert offline, sobald die Modelle heruntergeladen sind\n- Die Inferenz läuft lokal; die App kann dennoch nach Updates suchen, sofern nicht anders konfiguriert\n- Allgemeine Informationen, keine Rechts-, Medizin- oder Finanzberatung; die Entscheidung trifft eine qualifizierte Person' },
          { type: 'tip', text: '**Forscher / ML-Ingenieur (Mac Studio M5 Max 128 GB; 2.499 $ kostet die US-Basis mit 36 GB, 128 GB sind teurer)**\n- Primär: Llama 3.3 70B Q5 (50 GB)\n- Spezialisiert: Qwen3 32B Q4 für nicht-englische Forschung\n- Programmierung: DeepSeek Coder V2 16B\n- Vision: Llama 3.2 Vision 11B für Abbildungen in Fachartikeln\n- Die vier Downloads ergeben zusammen rund 87 GB ohne Kontext; ob alle gleichzeitig geladen bleiben, hängt von der Kontextlänge und dem GPU-Speicherlimit von macOS ab' },
          { type: 'tip', text: '**Familien-KI-Server (Mac Mini M5 Pro 64 GB, dauerhaft aktiv)**\n- Sprachassistent: Llama 3.1 8B + Whisper + Piper\n- RAG: Fragen und Antworten zu Familiendokumenten mit Embeddings\n- Programmierhilfe für Familienmitglieder via REST API\n- Kosten: Hardware und Strom; den Stromverbrauch haben wir nicht gemessen' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: 'Zu vermeidende Modelle in 2026 (und warum)',
        callouts: [
          { type: 'warning', text: '**Llama 2 (jede Größe): eine ältere Generation** — Meta hat seitdem neuere Llama-Versionen veröffentlicht. Ältere Tutorials nutzen es eventuell noch. Stattdessen prüfen: Llama 3.1 8B.' },
          { type: 'warning', text: '**Vicuna, Alpaca, WizardLM: ältere Community-Feinabstimmungen** — Sie bauen auf früheren Basismodellen auf. Beginnen Sie ein neues Setup besser mit einem neueren Instruct-Modell wie Qwen3 14B oder Llama 3.1 8B.' },
          { type: 'warning', text: '**Falcon 180B: sehr groß für einen Mac** — Ein Modell dieser Größe braucht weit mehr Speicher, als die meisten Mac-Konfigurationen haben. Ein kleineres, neueres Modell wie [Llama 3.3 70B](/de/local-llms/running-70b-models-apple-silicon-m5-max) ist meist die praktischere Wahl.' },
          { type: 'warning', text: '**FP16 bei 70B auf den meisten Macs vermeiden** — Der FP16-Download von Llama 3.3 70B ist 141 GB groß, mehr als ein M5 Max (maximal 128 GB) fasst. Von der Kapazität her reicht nur ein Mac mit mehr Speicher, etwa ein M5 Ultra mit 256 oder 512 GB. Den Qualitätsunterschied zu Q5 haben wir nicht gemessen. Beginnen Sie mit [Q4_K_M oder Q5_K_M](/de/local-llms/llm-quantization-explained).' },
          { type: 'warning', text: '**Reine Basismodelle vermeiden (keine Instruct-Variante)** — Basismodelle ergänzen Text, folgen aber keine Anweisungen. Auf "-instruct" oder "-chat"-Suffix achten. Ersetzen durch: die Instruct-Variante desselben Modells.' },
          { type: 'warning', text: '**Vor der Modellwahl das Veröffentlichungsdatum prüfen** — Anleitungen nennen eventuell noch ältere Familien wie StableLM, RedPajama, MPT oder Pythia. Prüfen Sie auf jeder Modellkarte Datum und Lizenz und vergleichen Sie mit neueren Modellen.' },
        ],
      },
      formatReference: {
        id: 'format-reference',
        title: 'Modellformat-Kurzreferenz',
        columns: ['Format', 'Verwendet von', 'Größe vs. Original'],
        rows: [
          { 'Format': 'GGUF Q4_K_M', 'Verwendet von': '[Ollama](/de/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Größe vs. Original': '~30% von FP16' },
          { 'Format': 'GGUF Q5_K_M', 'Verwendet von': '[Ollama](/de/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Größe vs. Original': '~35% von FP16' },
          { 'Format': 'GGUF Q8_0', 'Verwendet von': '[Ollama](/de/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Größe vs. Original': '~50% von FP16' },
          { 'Format': 'MLX 4-bit', 'Verwendet von': 'MLX Framework', 'Größe vs. Original': '~30% von FP16' },
          { 'Format': 'MLX 8-bit', 'Verwendet von': 'MLX Framework', 'Größe vs. Original': '~50% von FP16' },
          { 'Format': 'FP16 (Original)', 'Verwendet von': 'Alle Frameworks', 'Größe vs. Original': '100%' },
        ],
        note: 'Größen in diesem Artikel sind GGUF Q4_K_M, sofern nicht anders angegeben. MLX 4-Bit-Äquivalente sind ähnlich groß. Für genaue Bytes die Modellkarte auf HuggingFace prüfen. llama.cpp führt GGUF direkt über das Metal-Backend aus und ist die Grundlage, auf der Ollama intern aufbaut — MLX ist Apples eigenes Framework und ist bei MLX-nativen Builds auf demselben Chip tendenziell schneller. LM Studio unterstützt sowohl GGUF als auch MLX und erlaubt es, das Backend pro Modell direkt in der Benutzeroberfläche zu wechseln.',
      },
      downloadGuide: {
        id: 'download-guide',
        title: 'Kurzreferenz: Diese Modelle herunterladen',
        codeBlock: `# 16 GB Mac
ollama pull phi4

# 36 GB Mac (eines wählen)
ollama pull llama3.1:8b
ollama pull qwen3:14b
ollama pull mistral-small

# 64 GB Mac
ollama pull qwen3:32b
ollama pull mixtral:8x7b

# 128 GB Mac
ollama pull llama3.3:70b                  # Q4_K_M, 43 GB
ollama pull llama3.3:70b-instruct-q5_K_M  # Q5_K_M, 50 GB

# Spezialmodelle
ollama pull deepseek-coder-v2:16b   # Programmierung
ollama pull llama3.2-vision:11b     # Vision
ollama pull aya-expanse:32b         # Übersetzung`,
        codeLanguage: 'bash',
        note: 'Jedes Modell ist mehrere GB groß. Der gesamte Speicherplatz für mehrere Modelle kann 50–100 GB erreichen. Verwendung prüfen mit `du -sh ~/.ollama/`. LM-Studio-Nutzer können dieselben GGUF- oder MLX-Gewichte direkt über den integrierten Modell-Browser statt über die Kommandozeile herunterladen.',
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Verwandte Artikel',
        items: [
          '[Apple Silicon für lokale LLMs: Vollständiger Leitfaden](/de/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs. M5 Max für lokale LLMs: Spezifikationen und Geschwindigkeitsschätzungen](/de/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Wie viel vereinigter Speicher für lokale LLMs?](/de/local-llms/how-much-unified-memory-for-local-llm)',
          '[MLX vs Ollama vs llama.cpp Vergleich](/de/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Ollama auf Mac Setup-Anleitung](/de/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[70B-Modelle auf Apple Silicon ausführen](/de/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained)',
          '[Qwen vs Llama vs Mistral Vergleich](/de/local-llms/qwen-vs-llama-vs-mistral)',
          '[Apples On-Device-KI vs. echte lokale LLMs: Was WWDC 2026 wirklich geändert hat](/de/local-llms/apple-on-device-ai-vs-local-llms) -- Apple on-device AI vs local LLMs',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Kann ich zwei verschiedene Modelle gleichzeitig ausführen?', a: 'Ja, `OLLAMA_MAX_LOADED_MODELS=2` in der Umgebungsvariablen setzen. 64 GB kann 8B + 32B gleichzeitig ausführen.' },
          { q: 'Welches Modell eignet sich am besten für Anfänger?', a: 'Llama 3.1 8B ist ein praktischer Einstieg: Es wird breit unterstützt, und der Q4_K_M-Download ist 4,9 GB groß. Ein Mac mit 16 GB lässt Platz für macOS und Kontext.' },
          { q: 'Ist Mixtral 8x7B schneller als Llama 8B?', a: 'Darauf sollten Sie nicht zählen. Mixtral 8x7B ist ein deutlich größerer Download (26 GB bei Q4 in Ollama gegenüber 4,9 GB für Llama 3.1 8B Q4). [Laut Mistral](https://mistral.ai/news/mixtral-of-experts/) nutzt es 12,9 Mrd. Parameter pro Token – immer noch mehr als 8B. Bei ähnlicher Quantisierung ist daher zu erwarten, dass das 8B-Modell schneller ist. PromptQuorum hat das nicht gemessen. Welches besser ist, hängt von der Aufgabe ab.' },
          { q: 'Was ist das beste lokale LLM im Jahr 2026?', a: 'Für die meisten Benutzer auf Apple Silicon: Qwen3 (jede Größe, die auf Ihren Mac passt) ist eine starke Wahl, und Llama 3.3 70B ist eine weitere starke Option für 128-GB-Macs. Für 16 GB: Phi-4 ist eine leistungsfähige kleine Option.' },
          { q: 'Kann ich Llama 3.1 405B auf einem Mac ausführen?', a: 'Nur mit sehr viel vereinigtem Speicher. Die Q4-Downloads von Llama 3.1 405B in Ollama sind rund 229–243 GB groß, weit über dem Maximum von 128 GB beim M5 Max. Von der Kapazität her ist ein Mac Studio mit 512 GB nötig: eine frühere 512-GB-Konfiguration oder der M5 Ultra, für den Apple 512 GB aufführt (angekündigt am 25. August 2026; die 512-GB-Konfiguration war für Ende Oktober 2026 angekündigt). 5.499 $ ist der Startpreis des M5 Ultra mit 96 GB, 512 GB kosten also mehr. Wir haben 405B nicht auf einem Mac getestet.' },
          { q: 'Ist Qwen besser als Llama für den lokalen Einsatz?', a: 'Das hängt von Aufgabe und Modellgröße ab. Vergleichen Sie die Modellkarten, prüfen Sie die jeweilige Lizenz und testen Sie beide mit eigenen Prompts. PromptQuorum hat keinen direkten Vergleichstest durchgeführt.' },
          { q: 'Was ist das kleinste Modell, das wirklich nützlich ist?', a: 'Phi-4 Mini mit 3,8B Parametern. Für Chat und Fragen & Antworten ist es für seine Größe leistungsfähig. Für Programmierung oder komplexes Reasoning zu Llama 3.1 8B oder Qwen3 14B wechseln.' },
          { q: 'Muss ich bei der Nutzung lokaler Modelle die DSGVO beachten?', a: 'Ja, sobald Sie personenbezogene Daten verarbeiten. Lokale Verarbeitung allein macht eine Anwendung nicht DSGVO-konform. Läuft die Inferenz ausschließlich auf Ihrem Gerät und ist kein Cloud-Dienst eingebunden, werden die Eingaben dafür nicht an einen Modellanbieter übertragen. Prüfen Sie dennoch Telemetrie, Updates, Plugins, Backups und Protokolle. Pflichten wie Rechtsgrundlage, Datenminimierung (Art. 5), Verzeichnis von Verarbeitungstätigkeiten (Art. 30, soweit anwendbar) sowie technische und organisatorische Maßnahmen bleiben bestehen. Dies ist keine Rechtsberatung; fragen Sie Ihren Datenschutzbeauftragten oder eine Anwältin bzw. einen Anwalt.' },
          { q: 'Eignen sich lokale Modelle für den Mittelstand?', a: 'Das hängt vom Anwendungsfall ab. Ein Mac Mini M5 Pro mit 64 GB (ab 2.699 $ mit 15-Kern-CPU und 512 GB, laut [Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios) vom 25.08.2026) hat Platz für Modelle wie 8B und 32B; wie viele gleichzeitig geladen bleiben, hängt von Kontextlänge und Speicherlimit ab. Ob und wann sich die Hardware gegenüber Cloud-APIs amortisiert, hängt von Ihren bisherigen API-Kosten und der Nutzung ab. Lokale Verarbeitung kann die Weitergabe vertraulicher Dokumente an externe Anbieter verringern, ersetzt aber keine DSGVO-Prüfung.' },
          { q: 'Läuft vLLM auf Apple Silicon?', a: 'Prüfen Sie in der aktuellen [vLLM-Dokumentation](https://docs.vllm.ai), wie Apple Silicon unterstützt wird, denn das kann sich ändern. vLLM ist vor allem auf das Bedienen vieler Anfragen ausgelegt. Für eine einzelne Person am Mac sind Ollama oder LM Studio der einfachere Einstieg. PromptQuorum hat vLLM nicht auf einem Mac gemessen.' },
          { q: 'Was schafft ein MacBook Air M5?', a: 'Apple führt das [MacBook Air](https://www.apple.com/macbook-air/specs/) mit M5, 16, 24 oder 32 GB vereinigtem Speicher und 153 GB/s Bandbreite. Das ist die Hälfte der Bandbreite des M5 Pro, die Werte für M5 Pro und M5 Max oben gelten also nicht. Mit 16 GB passt Phi-4 (9,1 GB) mit wenig Reserve (etwa 10–13 tok/s, Schätzung). Ab 24 GB ist Llama 3.1 8B Q8 möglich (etwa 11–14 tok/s, Schätzung). Bei langen Generierungen kann das Tempo niedriger sein.' },
          { q: 'Was ist das beste Setup für ein MacBook Pro M5 Max mit 128 GB RAM?', a: 'Llama 3.3 70B Q5_K_M (50 GB) für den Alltag; je nach Kontextlänge bleibt Platz für ein zweites Modell wie Qwen3 14B Q4 (9,3 GB) oder DeepSeek Coder V2 16B (8,9 GB) über `OLLAMA_MAX_LOADED_MODELS=2`. Mit der 40-Core-GPU (614 GB/s) sind bei 70B Q5 etwa 7–10 tok/s zu erwarten. Llama 3.3 70B Q8 (75 GB) passt ebenfalls, bei etwa 5–7 tok/s. Beide Werte sind Schätzungen, keine Benchmarks.' },
        ],
      },
    },
    ctaText: 'Ein Modell für Ihren Mac ausgewählt? Vergleichen Sie seine Antworten mit GPT-4, Claude, Gemini und 22 weiteren Modellen nebeneinander mit PromptQuorum — überprüfen Sie, ob Ihr lokales Llama, Qwen oder Phi-Modell die Cloud-Qualität für Ihre spezifischen Anwendungsfälle erreicht.',
  },
  fr: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Meilleurs modèles Ollama pour Apple Silicon 2026 : Recommandations 16 Go, 36 Go, 64 Go, 128 Go',
    seoTitle: 'Meilleurs modèles Ollama pour Apple Silicon 2026 : 16–128 Go',
    intro: 'Recommandations de LLM locaux selon la mémoire du Mac : 16 Go (Phi-4), 36 Go (Llama 3.1 8B), 64 Go (Qwen3 32B), 128 Go (Llama 3.3 70B), avec des tok/s estimés à partir de la bande passante mémoire. Le M5 Pro plafonne à 64 Go.',
    metaDescription: 'Meilleurs modèles Ollama pour Apple Silicon : Phi-4 (16 Go), Llama 8B (36 Go), Qwen3 32B (64 Go), Llama 70B (128 Go). tok/s estimés et limites mémoire.',
    heroImage: '/images/best-models-apple-silicon-2026-by-tier-hero-fr.webp',
    twitterDescription: 'Meilleurs modèles Ollama pour votre Mac : 16 Go→Phi-4, 36 Go→Llama 8B, 64 Go→Qwen3 32B, 128 Go→Llama 70B.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen3 14B', 'Qwen3 32B', 'Mixtral 8x7B', 'Llama 3.3 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M6', 'M5 Ultra'],
    audience: 'Utilisateurs Mac recherchant des recommandations de modèles pour leur configuration.',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'meilleurs modèles Apple Silicon Mac',
    targetKeywords: ['meilleur LLM Mac', 'recommandations de modèles', 'performance par configuration Mac'],
    leadAnswerBlock: '**16 Go : Phi-4. 36 Go : Llama 3.1 8B Q8. 64 Go : Qwen3 32B Q4. 128 Go : Llama 3.3 70B Q5. Vitesses estimées sur M5 Max : ~32–43 tok/s (choix 36 Go), ~18–25 (64 Go), ~7–10 (128 Go). Le M5 Pro plafonne à 64 Go. Tous fonctionnent avec Ollama sur Metal.**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: {
        question: 'Quel modèle LLM devrais-je utiliser sur mon Mac ?',
        answer: '16 Go → Phi-4. 36 Go → Llama 3.1 8B ou Qwen3 14B. 64 Go → Qwen3 32B. 128 Go → Llama 3.3 70B. Estimations d\'après la bande passante, pas des benchmarks : sur M5 Max ~32–43 tok/s (8B Q8, 36 Go), ~18–25 (32B Q4, 64 Go), ~7–10 (70B Q5, 128 Go). Le M5 Pro plafonne à 64 Go.',
        bullets: ['16 Go : Phi-4 (est. ~10–13 tok/s sur M6)', '36 Go : Llama 3.1 8B Q8 (est. ~32–43 tok/s, M5 Max)', '64 Go : Qwen3 32B Q4 (est. ~9–12 M5 Pro, ~18–25 M5 Max)', '128 Go : Llama 3.3 70B Q5 (est. ~7–10 tok/s, M5 Max)', 'Le M5 Pro plafonne à 64 Go', 'Tous disponibles via Ollama'],
        updatedDate: '2026-11-28',
      },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Meilleur modèle par niveau mémoire', anchor: '#by-tier' },
      { label: 'Comparer la qualité', anchor: '#quality-benchmarks' },
      { label: 'Meilleur modèle par cas d\'usage', anchor: '#by-usecase' },
      { label: 'Scénarios utilisateurs réels', anchor: '#scenarios' },
      { label: 'Modèles à éviter', anchor: '#avoid' },
      { label: 'Référence formats de modèles', anchor: '#format-reference' },
      { label: 'Télécharger ces modèles', anchor: '#download-guide' },
      { label: 'Articles connexes', anchor: '#related-articles' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      byTier: {
        id: 'by-tier',
        title: 'Meilleures recommandations par mémoire Mac',
        content: 'Caractéristiques vérifiées le 28/11/2026 sur les fiches Apple du [Mac mini](https://www.apple.com/mac-mini/specs/), du [Mac Studio](https://www.apple.com/mac-studio/specs/) et du [MacBook Pro](https://www.apple.com/macbook-pro/specs/). Mac mini : M6 (jusqu\'à 32 Go) ou M5 Pro (24, 48 ou 64 Go). Mac Studio : M5 Max (36 à 128 Go) ou M5 Ultra (96, 256 ou 512 Go). Apple a annoncé ces deux ordinateurs de bureau le 25 août 2026, disponibles à partir du 22 septembre ; la configuration 512 Go était annoncée pour fin octobre. Prix de départ américains au lancement : Mac mini M6 899 $ (16 Go), M5 Pro 1 699 $ (24 Go) ; Mac Studio M5 Max 2 499 $ (36 Go), M5 Ultra 5 499 $ (96 Go). Plus de mémoire coûte plus cher. Sources des prix : [MacRumors](https://www.macrumors.com/roundup/mac-mini/), [9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/). Le choix des modèles est une recommandation de la rédaction, fondée sur leur taille et la mémoire requise, et non un classement issu de tests.',
        columns: ['Mémoire', 'Choix principal', 'Quantification', 'Taille', 'M5 Pro tok/s', 'M5 Max tok/s', 'Alternative'],
        rows: [
          { 'Mémoire': '16 Go', 'Choix principal': 'Phi-4', 'Quantification': 'Q4_K_M', 'Taille': '9,1 Go', 'M5 Pro tok/s': 'Pas de version 16 Go', 'M5 Max tok/s': 'Pas de version 16 Go', 'Alternative': 'Llama 3.1 8B Q4 (4,9 Go)' },
          { 'Mémoire': '36 Go', 'Choix principal': 'Llama 3.1 8B', 'Quantification': 'Q8', 'Taille': '8,5 Go', 'M5 Pro tok/s': 'Pas de version 36 Go', 'M5 Max tok/s': '~32–43', 'Alternative': 'Qwen3 14B Q4 (9,3 Go)' },
          { 'Mémoire': '48 Go', 'Choix principal': 'Qwen3 14B', 'Quantification': 'Q8', 'Taille': '16 Go', 'M5 Pro tok/s': '~12–15', 'M5 Max tok/s': '~23–31', 'Alternative': 'Mixtral 8x7B Q4 (26 Go)' },
          { 'Mémoire': '64 Go', 'Choix principal': 'Qwen3 32B', 'Quantification': 'Q4_K_M', 'Taille': '20 Go', 'M5 Pro tok/s': '~9–12', 'M5 Max tok/s': '~18–25', 'Alternative': 'Mixtral 8x7B Q5 (33 Go)' },
          { 'Mémoire': '96 Go', 'Choix principal': 'Llama 3.3 70B', 'Quantification': 'Q4_K_M', 'Taille': '43 Go', 'M5 Pro tok/s': 'Pas de version 96 Go', 'M5 Max tok/s': 'Pas de version 96 Go', 'Alternative': 'M5 Ultra : ~17–21 (est.)' },
          { 'Mémoire': '128 Go', 'Choix principal': 'Llama 3.3 70B', 'Quantification': 'Q5_K_M', 'Taille': '50 Go', 'M5 Pro tok/s': 'Pas de version 128 Go', 'M5 Max tok/s': '~7–10', 'Alternative': '—' },
          { 'Mémoire': '128 Go', 'Choix principal': 'Llama 3.3 70B', 'Quantification': 'Q8', 'Taille': '75 Go', 'M5 Pro tok/s': 'Pas de version 128 Go', 'M5 Max tok/s': '~5–7', 'Alternative': 'Fichier plus gros, plus lent' },
        ],
        note: 'Les tailles sont celles des téléchargements Ollama (GGUF), vérifiées le 28/11/2026 ; le contexte demande de la mémoire en plus. Tous les tok/s sont des estimations, pas des benchmarks : 60 à 80 % de la bande passante mémoire divisée par la taille du modèle (M5 Pro 307 Go/s ; M5 Max 460 Go/s avec 36 Go, 614 Go/s de 48 à 128 Go). La vitesse réelle peut différer, surtout avec les petits modèles. Un Mac M6 de 16 Go ou un MacBook Air M5 offre 153 Go/s : environ 10–13 tok/s avec Phi-4 (estimation). Un M5 Pro de 64 Go peut aussi contenir un 70B Q4, à environ 4–5 tok/s (estimation, voir notre [guide matériel 70B](/fr/local-llms/70b-models-consumer-hardware)).',
        image: '',
        imageCaption: '',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: 'Comment comparer la qualité des modèles',
        columns: ['Modèle', 'Taille du téléchargement Ollama', 'Fiche officielle'],
        rows: [
          { 'Modèle': 'Phi-4', 'Taille du téléchargement Ollama': 'Q4_K_M 9,1 Go / Q8 16 Go', 'Fiche officielle': '[phi4](https://ollama.com/library/phi4)' },
          { 'Modèle': 'Llama 3.1 8B', 'Taille du téléchargement Ollama': 'Q4_K_M 4,9 Go / Q8 8,5 Go', 'Fiche officielle': '[llama3.1](https://ollama.com/library/llama3.1)' },
          { 'Modèle': 'Qwen3 14B', 'Taille du téléchargement Ollama': 'Q4_K_M 9,3 Go / Q8 16 Go', 'Fiche officielle': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'Modèle': 'Qwen3 32B', 'Taille du téléchargement Ollama': 'Q4_K_M 20 Go / Q8 35 Go', 'Fiche officielle': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'Modèle': 'Mixtral 8x7B', 'Taille du téléchargement Ollama': 'Q4_0 26 Go / Q8 50 Go', 'Fiche officielle': '[mixtral](https://ollama.com/library/mixtral)' },
          { 'Modèle': 'Llama 3.3 70B', 'Taille du téléchargement Ollama': 'Q4_K_M 43 Go / Q8 75 Go', 'Fiche officielle': '[llama3.3](https://ollama.com/library/llama3.3)' },
        ],
        note: 'Cette page ne publie aucun score de benchmark. PromptQuorum n\'a pas évalué ces modèles et nous ne disposons d\'aucune source unique et vérifiable qui les teste tous dans les mêmes conditions. Lisez les indications de benchmark sur la fiche de l\'éditeur du modèle, vérifiez la version et les réglages testés, puis essayez les modèles avec vos propres prompts. Tailles vérifiées le 28/11/2026.',
        image: '',
        imageCaption: '',
      },
      byUsecase: {
        id: 'by-usecase',
        title: 'Meilleurs modèles par cas d\'usage (2026)',
        columns: ['Cas d\'usage', 'Meilleur pour Mac 36 Go', 'Meilleur pour Mac 64 Go', 'Meilleur pour Mac 128 Go'],
        rows: [
          { 'Cas d\'usage': 'Programmation (général)', 'Meilleur pour Mac 36 Go': 'Llama 3.1 8B', 'Meilleur pour Mac 64 Go': 'DeepSeek Coder V2 16B', 'Meilleur pour Mac 128 Go': 'Llama 3.3 70B' },
          { 'Cas d\'usage': 'Programmation (Python)', 'Meilleur pour Mac 36 Go': 'DeepSeek Coder V2 Lite', 'Meilleur pour Mac 64 Go': 'DeepSeek Coder V2 16B', 'Meilleur pour Mac 128 Go': 'DeepSeek Coder V2 16B' },
          { 'Cas d\'usage': 'Rédaction longue', 'Meilleur pour Mac 36 Go': 'Llama 3.1 8B Q8', 'Meilleur pour Mac 64 Go': 'Qwen3 32B Q4', 'Meilleur pour Mac 128 Go': 'Llama 3.3 70B Q5' },
          { 'Cas d\'usage': 'Chat / conversation', 'Meilleur pour Mac 36 Go': 'Mistral Small', 'Meilleur pour Mac 64 Go': 'Mixtral 8x7B', 'Meilleur pour Mac 128 Go': 'Llama 3.3 70B' },
          { 'Cas d\'usage': 'Raisonnement / maths', 'Meilleur pour Mac 36 Go': 'Qwen3 14B', 'Meilleur pour Mac 64 Go': 'Qwen3 32B', 'Meilleur pour Mac 128 Go': 'Qwen3 32B' },
          { 'Cas d\'usage': 'RAG / Q&R', 'Meilleur pour Mac 36 Go': 'Llama 3.1 8B + nomic-embed', 'Meilleur pour Mac 64 Go': '[Llama 3.1 8B](/fr/power-local-llm/local-rag-for-private-business-data) + bge-large', 'Meilleur pour Mac 128 Go': 'Llama 3.3 70B + bge-large' },
          { 'Cas d\'usage': 'Vision / multimodal', 'Meilleur pour Mac 36 Go': 'LLaVA 7B', 'Meilleur pour Mac 64 Go': '[Llama 3.2 Vision 11B](/fr/power-local-llm/local-vision-models-llava-ollama-2026)', 'Meilleur pour Mac 128 Go': 'Llama 3.2 Vision 90B' },
          { 'Cas d\'usage': 'Traduction', 'Meilleur pour Mac 36 Go': 'Qwen3 14B', 'Meilleur pour Mac 64 Go': 'Qwen3 32B', 'Meilleur pour Mac 128 Go': 'Aya Expanse 32B' },
          { 'Cas d\'usage': 'Résumé', 'Meilleur pour Mac 36 Go': 'Llama 3.1 8B', 'Meilleur pour Mac 64 Go': 'Qwen3 32B', 'Meilleur pour Mac 128 Go': 'Llama 3.3 70B' },
          { 'Cas d\'usage': 'Revue de code', 'Meilleur pour Mac 36 Go': 'DeepSeek Coder V2 Lite', 'Meilleur pour Mac 64 Go': 'DeepSeek Coder V2 16B', 'Meilleur pour Mac 128 Go': 'Llama 3.3 70B' },
        ],
        note: 'Il s\'agit de suggestions de la rédaction, pas de résultats de tests. Un modèle spécialisé peut mieux convenir à une tâche : testez-le sur votre propre travail.',
      },
      scenarios: {
        id: 'scenarios',
        title: 'Configurations réelles par type d\'utilisateur',
        callouts: [
          { type: 'tip', text: '**Développeur indépendant (Mac Mini M5 Pro 64 Go, dès 2 699 $ avec CPU 15 cœurs/512 Go, selon [Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios), 25 août 2026)**\n- Programmation : DeepSeek Coder V2 Lite 16B (Q4, 8,9 Go)\n- Rédaction : Llama 3.1 8B Q8 (8,5 Go) pour docs et e-mails\n- Les deux peuvent être chargés ensemble avec `OLLAMA_MAX_LOADED_MODELS=2` ; `OLLAMA_KEEP_ALIVE` règle leur durée de maintien en mémoire\n- Coûts : pas de frais au token en local ; le matériel et l\'électricité coûtent toujours de l\'argent' },
          { type: 'tip', text: '**Professionnel soucieux de la confidentialité (MacBook Pro M5 Pro 48 Go)**\n- Principal : Llama 3.1 8B Q8 pour le travail général\n- Sensible : Qwen3 14B Q4 pour documents juridiques/médicaux/financiers\n- Voyage : fonctionne hors ligne une fois les modèles téléchargés\n- L\'inférence s\'exécute en local ; l\'application peut tout de même rechercher des mises à jour sauf configuration contraire\n- Informations générales, pas un conseil juridique, médical ou financier ; la décision revient à une personne qualifiée' },
          { type: 'tip', text: '**Chercheur / Ingénieur ML (Mac Studio M5 Max 128 Go ; 2 499 $ est la base 36 Go aux États-Unis, 128 Go coûtent plus cher)**\n- Principal : Llama 3.3 70B Q5 (50 Go)\n- Spécialisé : Qwen3 32B Q4 pour la recherche non anglophone\n- Programmation : DeepSeek Coder V2 16B\n- Vision : Llama 3.2 Vision 11B pour les figures d\'articles\n- Les quatre téléchargements totalisent environ 87 Go hors contexte ; leur maintien simultané en mémoire dépend de la longueur du contexte et de la limite de mémoire GPU de macOS' },
          { type: 'tip', text: '**Serveur IA familial (Mac Mini M5 Pro 64 Go, toujours allumé)**\n- Assistant vocal : Llama 3.1 8B + Whisper + Piper\n- RAG : questions-réponses sur les documents familiaux avec embeddings\n- Aide à la programmation pour les membres de la famille via REST API\n- Coûts : matériel et électricité ; nous n\'avons pas mesuré la consommation' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: 'Modèles à éviter en 2026 (et pourquoi)',
        callouts: [
          { type: 'warning', text: '**Llama 2 (toute taille) : une génération ancienne** — Meta a publié depuis des versions plus récentes de Llama. D\'anciens tutoriels l\'utilisent parfois encore. À envisager à la place : Llama 3.1 8B.' },
          { type: 'warning', text: '**Vicuna, Alpaca, WizardLM : d\'anciens ajustements communautaires** — Ils reposent sur des modèles de base antérieurs. Pour une nouvelle installation, partez d\'un modèle instruct plus récent, comme Qwen3 14B ou Llama 3.1 8B.' },
          { type: 'warning', text: '**Falcon 180B : très volumineux pour un Mac** — Un modèle de cette taille demande bien plus de mémoire que n\'en ont la plupart des configurations Mac. Un modèle plus petit et plus récent comme [Llama 3.3 70B](/fr/local-llms/running-70b-models-apple-silicon-m5-max) est en général le choix le plus pratique.' },
          { type: 'warning', text: '**Évitez FP16 en 70B sur la plupart des Mac** — Le téléchargement FP16 de Llama 3.3 70B pèse 141 Go, plus que ce qu\'un M5 Max (128 Go au maximum) peut contenir. En capacité, il faut un Mac avec plus de mémoire, par exemple un M5 Ultra de 256 ou 512 Go. Nous n\'avons pas mesuré l\'écart de qualité avec Q5. Commencez par [Q4_K_M ou Q5_K_M](/fr/local-llms/llm-quantization-explained).' },
          { type: 'warning', text: '**Éviter les modèles de base purs (sans variante instruct)** — Les modèles de base complètent du texte mais ne suivent pas les instructions. Rechercher le suffixe "-instruct" ou "-chat". Remplacer par : la variante instruct du même modèle.' },
          { type: 'warning', text: '**Vérifiez la date de sortie avant de choisir un modèle** — Certains guides citent encore d\'anciennes familles comme StableLM, RedPajama, MPT ou Pythia. Vérifiez sur chaque fiche la date et la licence, et comparez avec des modèles plus récents.' },
        ],
      },
      formatReference: {
        id: 'format-reference',
        title: 'Référence rapide des formats de modèles',
        columns: ['Format', 'Utilisé par', 'Taille vs original'],
        rows: [
          { 'Format': 'GGUF Q4_K_M', 'Utilisé par': '[Ollama](/fr/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Taille vs original': '~30% de FP16' },
          { 'Format': 'GGUF Q5_K_M', 'Utilisé par': '[Ollama](/fr/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Taille vs original': '~35% de FP16' },
          { 'Format': 'GGUF Q8_0', 'Utilisé par': '[Ollama](/fr/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', 'Taille vs original': '~50% de FP16' },
          { 'Format': 'MLX 4-bit', 'Utilisé par': 'Framework MLX', 'Taille vs original': '~30% de FP16' },
          { 'Format': 'MLX 8-bit', 'Utilisé par': 'Framework MLX', 'Taille vs original': '~50% de FP16' },
          { 'Format': 'FP16 (original)', 'Utilisé par': 'Tous les frameworks', 'Taille vs original': '100%' },
        ],
        note: 'Les tailles dans cet article sont GGUF Q4_K_M sauf indication. Les équivalents MLX 4-bit sont similaires. Pour les octets exacts, consulter la fiche modèle sur HuggingFace. llama.cpp exécute directement les fichiers GGUF sur le backend Metal et c\'est ce qu\'Ollama utilise en interne — MLX est le framework propriétaire d\'Apple et tend à être plus rapide pour les builds natifs MLX sur la même puce. LM Studio prend en charge à la fois GGUF et MLX et permet de changer de backend par modèle depuis son interface.',
      },
      downloadGuide: {
        id: 'download-guide',
        title: 'Référence rapide : télécharger ces modèles',
        codeBlock: `# Mac 16 Go
ollama pull phi4

# Mac 36 Go (choisir un)
ollama pull llama3.1:8b
ollama pull qwen3:14b
ollama pull mistral-small

# Mac 64 Go
ollama pull qwen3:32b
ollama pull mixtral:8x7b

# Mac 128 Go
ollama pull llama3.3:70b                  # Q4_K_M, 43 GB
ollama pull llama3.3:70b-instruct-q5_K_M  # Q5_K_M, 50 GB

# Modèles spécialisés
ollama pull deepseek-coder-v2:16b   # programmation
ollama pull llama3.2-vision:11b     # vision
ollama pull aya-expanse:32b         # traduction`,
        codeLanguage: 'bash',
        note: 'Chaque modèle pèse plusieurs Go. L\'espace total pour plusieurs modèles peut atteindre 50–100 Go. Vérifier avec `du -sh ~/.ollama/`. Les utilisateurs de LM Studio peuvent télécharger les mêmes poids GGUF ou MLX directement depuis son navigateur de modèles intégré, sans passer par la ligne de commande.',
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Articles connexes',
        items: [
          '[Apple Silicon pour les LLM locaux : Guide complet](/fr/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max pour les LLM locaux : caractéristiques et vitesses estimées](/fr/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Quelle quantité de mémoire unifiée pour les LLM locaux ?](/fr/local-llms/how-much-unified-memory-for-local-llm)',
          '[Comparaison MLX vs Ollama vs llama.cpp](/fr/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Guide d\'installation Ollama sur Mac](/fr/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[Exécuter des modèles 70B sur Apple Silicon](/fr/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[La quantification LLM expliquée](/fr/local-llms/llm-quantization-explained)',
          '[Comparaison Qwen vs Llama vs Mistral](/fr/local-llms/qwen-vs-llama-vs-mistral)',
          '[L\'IA on-device d\'Apple vs les vrais LLM locaux : ce que WWDC 2026 a vraiment changé](/fr/local-llms/apple-on-device-ai-vs-local-llms) -- Apple on-device AI vs local LLMs',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Puis-je exécuter deux modèles différents simultanément ?', a: 'Oui, définir `OLLAMA_MAX_LOADED_MODELS=2` dans l\'environnement. 64 Go peut exécuter 8B + 32B simultanément.' },
          { q: 'Quel modèle convient le mieux aux débutants ?', a: 'Llama 3.1 8B est un point de départ pratique : il est largement pris en charge et le téléchargement Q4_K_M pèse 4,9 Go. Un Mac de 16 Go laisse de la marge pour macOS et le contexte.' },
          { q: 'Mixtral 8x7B est-il plus rapide que Llama 8B ?', a: 'N\'y comptez pas. Mixtral 8x7B est un téléchargement bien plus gros (26 Go en Q4 dans Ollama, contre 4,9 Go pour Llama 3.1 8B Q4). [Selon Mistral](https://mistral.ai/news/mixtral-of-experts/), il utilise 12,9 milliards de paramètres par token, soit toujours plus que 8B ; à quantification comparable, attendez-vous donc à ce que le modèle 8B soit plus rapide. PromptQuorum ne l\'a pas mesuré. Le meilleur des deux dépend de la tâche.' },
          { q: 'Quel est le meilleur LLM local en 2026 ?', a: 'Pour la plupart des utilisateurs sur Apple Silicon : Qwen3 (toute taille tenant sur votre Mac) est un choix solide, et Llama 3.3 70B est une autre option solide pour les Mac 128 Go. Pour 16 Go : Phi-4 est une option compacte et capable.' },
          { q: 'Puis-je exécuter Llama 3.1 405B sur un Mac ?', a: 'Uniquement avec une très grande mémoire unifiée. Les téléchargements Q4 de Llama 3.1 405B dans Ollama pèsent environ 229 à 243 Go, bien au-delà des 128 Go maximum du M5 Max. En capacité, il faut un Mac Studio de 512 Go : une ancienne configuration 512 Go, ou le M5 Ultra, pour lequel Apple indique 512 Go (annoncé le 25 août 2026 ; la configuration 512 Go était annoncée pour fin octobre 2026). 5 499 $ est le prix de départ du M5 Ultra avec 96 Go : 512 Go coûtent donc plus cher. Nous n\'avons pas testé le 405B sur un Mac.' },
          { q: 'Qwen est-il meilleur que Llama pour un usage local ?', a: 'Cela dépend de la tâche et de la taille du modèle. Comparez les fiches, vérifiez chaque licence et testez les deux avec vos propres prompts. PromptQuorum n\'a pas réalisé de test comparatif direct.' },
          { q: 'Quel est le plus petit modèle vraiment utile ?', a: 'Phi-4 Mini à 3,8B paramètres. Pour le chat et les Q&R, il est capable pour sa taille. Pour la programmation ou le raisonnement complexe, passer à Llama 3.1 8B ou [Qwen3 14B](/fr/local-llms/qwen-vs-llama-vs-mistral).' },
          { q: 'vLLM fonctionne-t-il sur Apple Silicon ?', a: 'Consultez la [documentation actuelle de vLLM](https://docs.vllm.ai) sur la prise en charge d\'Apple Silicon, car elle peut évoluer. vLLM vise surtout à servir de nombreuses requêtes. Pour un seul utilisateur sur Mac, Ollama ou LM Studio sont un point de départ plus simple. PromptQuorum n\'a pas mesuré vLLM sur un Mac.' },
          { q: 'Que peut exécuter un MacBook Air M5 ?', a: 'Apple indique pour le [MacBook Air](https://www.apple.com/macbook-air/specs/) une puce M5, 16, 24 ou 32 Go de mémoire unifiée et 153 Go/s de bande passante. C\'est la moitié de celle du M5 Pro : les chiffres M5 Pro et M5 Max ci-dessus ne s\'appliquent donc pas. Avec 16 Go, Phi-4 (9,1 Go) tient avec peu de marge (environ 10–13 tok/s, estimation). Avec 24 Go ou plus, Llama 3.1 8B Q8 est envisageable (environ 11–14 tok/s, estimation). Sur de longues générations, la vitesse peut être plus faible.' },
          { q: 'Quelle est la meilleure configuration pour un MacBook Pro M5 Max avec 128 Go de RAM ?', a: 'Llama 3.3 70B Q5_K_M (50 Go) au quotidien, avec de la place pour charger un second modèle, par exemple Qwen3 14B Q4 (9,3 Go) ou DeepSeek Coder V2 16B (8,9 Go), via `OLLAMA_MAX_LOADED_MODELS=2`, selon la longueur du contexte. Avec le GPU 40 cœurs (614 Go/s), comptez environ 7–10 tok/s en 70B Q5. Llama 3.3 70B Q8 (75 Go) tient aussi, à environ 5–7 tok/s. Ces deux valeurs sont des estimations, pas des benchmarks.' },
        ],
      },
    },
    ctaText: 'Vous avez choisi un modèle pour votre Mac ? Comparez ses réponses avec GPT-4, Claude, Gemini et 22 autres modèles côte à côte avec PromptQuorum — vérifiez que votre Llama, Qwen ou Phi local atteint la qualité cloud pour vos cas d\'usage spécifiques.',
  },
  ja: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Apple Silicon向けベストOllamaモデル2026：16GB、36GB、64GB、128GBの推奨モデル',
    seoTitle: 'Apple Silicon 2026向けベストOllamaモデル：16GB–128GB',
    intro: 'Macのメモリ容量別のローカルLLM推奨です。16GB（Phi-4）、36GB（Llama 3.1 8B）、64GB（Qwen3 32B）、128GB（Llama 3.3 70B）と、メモリ帯域から推定したtok/sを示します。M5 Proは最大64GBです。',
    metaDescription: 'Apple Silicon向けOllamaモデル推奨：Phi-4（16GB）、Llama 8B（36GB）、Qwen3 32B（64GB）、Llama 70B（128GB）。tok/sの推定値とメモリの上限を解説。',
    heroImage: '/images/best-models-apple-silicon-2026-by-tier-hero-ja.webp',
    twitterDescription: 'MacのベストOllamaモデル：16GB→Phi-4、36GB→Llama 8B、64GB→Qwen3 32B、128GB→Llama 70B。',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen3 14B', 'Qwen3 32B', 'Mixtral 8x7B', 'Llama 3.3 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M6', 'M5 Ultra'],
    audience: 'Mac設定に合ったモデル推奨を求めるMacユーザー。',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Apple Silicon Mac向けベストモデル',
    targetKeywords: ['ベストLLM Mac', 'モデル推奨', 'Mac設定別パフォーマンス'],
    leadAnswerBlock: '**16GB：Phi-4。36GB：Llama 3.1 8B Q8。64GB：Qwen3 32B Q4。128GB：Llama 3.3 70B Q5。M5 Maxでの推定速度：約32–43 tok/s（36GB向け）、約18–25（64GB向け）、約7–10（128GB向け）。M5 Proは最大64GBです。すべてMetal上のOllamaで動作します。**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: {
        question: 'MacでどのLLMモデルを使うべきですか？',
        answer: '16GB → Phi-4。36GB → Llama 3.1 8BまたはQwen3 14B。64GB → Qwen3 32B。128GB → Llama 3.3 70B。メモリ帯域からの推定値でベンチマークではありません。M5 Maxで約32–43 tok/s（8B Q8、36GB）、約18–25（32B Q4、64GB）、約7–10（70B Q5、128GB）。M5 Proは最大64GBです。',
        bullets: ['16GB：Phi-4（M6で推定約10–13 tok/s）', '36GB：Llama 3.1 8B Q8（M5 Maxで推定約32–43 tok/s）', '64GB：Qwen3 32B Q4（推定：M5 Pro約9–12、M5 Max約18–25）', '128GB：Llama 3.3 70B Q5（M5 Maxで推定約7–10 tok/s）', 'M5 Proは最大64GB', 'すべてOllamaで利用できます'],
        updatedDate: '2026-11-28',
      },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'メモリ別ベストモデル', anchor: '#by-tier' },
      { label: '品質の比較方法', anchor: '#quality-benchmarks' },
      { label: 'ユースケース別ベストモデル', anchor: '#by-usecase' },
      { label: '実際のユーザーシナリオ', anchor: '#scenarios' },
      { label: '避けるべきモデル', anchor: '#avoid' },
      { label: 'モデルフォーマット参照', anchor: '#format-reference' },
      { label: 'これらのモデルをダウンロード', anchor: '#download-guide' },
      { label: '関連記事', anchor: '#related-articles' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      byTier: {
        id: 'by-tier',
        title: 'Macメモリ別ベストモデル推奨',
        content: 'ハードウェア仕様は2026-11-28にAppleの仕様ページ（[Mac mini](https://www.apple.com/mac-mini/specs/)、[Mac Studio](https://www.apple.com/mac-studio/specs/)、[MacBook Pro](https://www.apple.com/macbook-pro/specs/)）で確認しました。Mac miniはM6（最大32GB）またはM5 Pro（24、48、64GB）です。Mac StudioはM5 Max（36〜128GB）またはM5 Ultra（96、256、512GB）です。Appleは2026年8月25日に両デスクトップを発表し、9月22日から提供開始、512GB構成は10月下旬の予定と発表しました。発売時の米国での開始価格は、Mac mini M6が899ドル（16GB）、M5 Proが1,699ドル（24GB）、Mac Studio M5 Maxが2,499ドル（36GB）、M5 Ultraが5,499ドル（96GB）です。メモリの増設は追加料金です。価格の出典：[MacRumors](https://www.macrumors.com/roundup/mac-mini/)、[9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/)。モデルの選定は、モデルサイズとメモリに収まるかに基づく編集部の推奨で、テストによる順位ではありません。',
        columns: ['メモリ', '第一選択', '量子化', 'サイズ', 'M5 Pro tok/s', 'M5 Max tok/s', '代替'],
        rows: [
          { 'メモリ': '16 GB', '第一選択': 'Phi-4', '量子化': 'Q4_K_M', 'サイズ': '9.1 GB', 'M5 Pro tok/s': '16GB構成なし', 'M5 Max tok/s': '16GB構成なし', '代替': 'Llama 3.1 8B Q4（4.9 GB）' },
          { 'メモリ': '36 GB', '第一選択': 'Llama 3.1 8B', '量子化': 'Q8', 'サイズ': '8.5 GB', 'M5 Pro tok/s': '36GB構成なし', 'M5 Max tok/s': '~32–43', '代替': 'Qwen3 14B Q4（9.3 GB）' },
          { 'メモリ': '48 GB', '第一選択': 'Qwen3 14B', '量子化': 'Q8', 'サイズ': '16 GB', 'M5 Pro tok/s': '~12–15', 'M5 Max tok/s': '~23–31', '代替': 'Mixtral 8x7B Q4 (26 GB)' },
          { 'メモリ': '64 GB', '第一選択': 'Qwen3 32B', '量子化': 'Q4_K_M', 'サイズ': '20 GB', 'M5 Pro tok/s': '~9–12', 'M5 Max tok/s': '~18–25', '代替': 'Mixtral 8x7B Q5 (33 GB)' },
          { 'メモリ': '96 GB', '第一選択': 'Llama 3.3 70B', '量子化': 'Q4_K_M', 'サイズ': '43 GB', 'M5 Pro tok/s': '96GB構成なし', 'M5 Max tok/s': '96GB構成なし', '代替': 'M5 Ultra：約17–21（推定）' },
          { 'メモリ': '128 GB', '第一選択': 'Llama 3.3 70B', '量子化': 'Q5_K_M', 'サイズ': '50 GB', 'M5 Pro tok/s': '128GB構成なし', 'M5 Max tok/s': '~7–10', '代替': '—' },
          { 'メモリ': '128 GB', '第一選択': 'Llama 3.3 70B', '量子化': 'Q8', 'サイズ': '75 GB', 'M5 Pro tok/s': '128GB構成なし', 'M5 Max tok/s': '~5–7', '代替': 'ファイルが大きく低速' },
        ],
        note: 'サイズは2026-11-28に確認したOllamaのダウンロードサイズ（GGUF）です。コンテキストには追加のメモリが必要です。tok/sはすべて推定値でベンチマークではありません。メモリ帯域をモデルサイズで割った値の60〜80%としています（M5 Proは307 GB/s、M5 Maxは36GBで460 GB/s、48〜128GBで614 GB/s）。実際の速度は、特に小型モデルでは異なる場合があります。16GBのM6搭載MacやMacBook Air M5は153 GB/sで、Phi-4は約10–13 tok/s（推定）です。64GBのM5 Proは70B Q4も保持でき、約4–5 tok/s（推定。[70Bハードウェアガイド](/ja/local-llms/70b-models-consumer-hardware)を参照）です。',
        image: '',
        imageCaption: '',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: 'モデル品質の比較方法',
        columns: ['モデル', 'Ollamaのダウンロードサイズ', '公式ページ'],
        rows: [
          { 'モデル': 'Phi-4', 'Ollamaのダウンロードサイズ': 'Q4_K_M 9.1 GB / Q8 16 GB', '公式ページ': '[phi4](https://ollama.com/library/phi4)' },
          { 'モデル': 'Llama 3.1 8B', 'Ollamaのダウンロードサイズ': 'Q4_K_M 4.9 GB / Q8 8.5 GB', '公式ページ': '[llama3.1](https://ollama.com/library/llama3.1)' },
          { 'モデル': 'Qwen3 14B', 'Ollamaのダウンロードサイズ': 'Q4_K_M 9.3 GB / Q8 16 GB', '公式ページ': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'モデル': 'Qwen3 32B', 'Ollamaのダウンロードサイズ': 'Q4_K_M 20 GB / Q8 35 GB', '公式ページ': '[qwen3](https://ollama.com/library/qwen3)' },
          { 'モデル': 'Mixtral 8x7B', 'Ollamaのダウンロードサイズ': 'Q4_0 26 GB / Q8 50 GB', '公式ページ': '[mixtral](https://ollama.com/library/mixtral)' },
          { 'モデル': 'Llama 3.3 70B', 'Ollamaのダウンロードサイズ': 'Q4_K_M 43 GB / Q8 75 GB', '公式ページ': '[llama3.3](https://ollama.com/library/llama3.3)' },
        ],
        note: 'このページではベンチマークのスコアを掲載していません。PromptQuorumはこれらのモデルのベンチマークを実施しておらず、全モデルを同じ条件で検証した確認可能な単一の情報源もありません。開発元のモデルカードにあるベンチマーク情報を読み、対象バージョンと設定を確認したうえで、ご自身のプロンプトで試してください。サイズは2026-11-28に確認しました。',
        image: '',
        imageCaption: '',
      },
      byUsecase: {
        id: 'by-usecase',
        title: 'ユースケース別ベストモデル（2026）',
        columns: ['ユースケース', '36GB Mac向けベスト', '64GB Mac向けベスト', '128GB Mac向けベスト'],
        rows: [
          { 'ユースケース': 'コーディング（一般）', '36GB Mac向けベスト': 'Llama 3.1 8B', '64GB Mac向けベスト': 'DeepSeek Coder V2 16B', '128GB Mac向けベスト': 'Llama 3.3 70B' },
          { 'ユースケース': 'コーディング（Python）', '36GB Mac向けベスト': 'DeepSeek Coder V2 Lite', '64GB Mac向けベスト': 'DeepSeek Coder V2 16B', '128GB Mac向けベスト': 'DeepSeek Coder V2 16B' },
          { 'ユースケース': '長文ライティング', '36GB Mac向けベスト': 'Llama 3.1 8B Q8', '64GB Mac向けベスト': 'Qwen3 32B Q4', '128GB Mac向けベスト': 'Llama 3.3 70B Q5' },
          { 'ユースケース': 'チャット / 会話', '36GB Mac向けベスト': 'Mistral Small', '64GB Mac向けベスト': 'Mixtral 8x7B', '128GB Mac向けベスト': 'Llama 3.3 70B' },
          { 'ユースケース': '推論 / 数学', '36GB Mac向けベスト': 'Qwen3 14B', '64GB Mac向けベスト': 'Qwen3 32B', '128GB Mac向けベスト': 'Qwen3 32B' },
          { 'ユースケース': 'RAG / Q&A', '36GB Mac向けベスト': 'Llama 3.1 8B + nomic-embed', '64GB Mac向けベスト': '[Llama 3.1 8B](/ja/power-local-llm/local-rag-for-private-business-data) + bge-large', '128GB Mac向けベスト': 'Llama 3.3 70B + bge-large' },
          { 'ユースケース': 'ビジョン / マルチモーダル', '36GB Mac向けベスト': 'LLaVA 7B', '64GB Mac向けベスト': '[Llama 3.2 Vision 11B](/ja/power-local-llm/local-vision-models-llava-ollama-2026)', '128GB Mac向けベスト': 'Llama 3.2 Vision 90B' },
          { 'ユースケース': '翻訳', '36GB Mac向けベスト': 'Qwen3 14B', '64GB Mac向けベスト': 'Qwen3 32B', '128GB Mac向けベスト': 'Aya Expanse 32B' },
          { 'ユースケース': '要約', '36GB Mac向けベスト': 'Llama 3.1 8B', '64GB Mac向けベスト': 'Qwen3 32B', '128GB Mac向けベスト': 'Llama 3.3 70B' },
          { 'ユースケース': 'コードレビュー', '36GB Mac向けベスト': 'DeepSeek Coder V2 Lite', '64GB Mac向けベスト': 'DeepSeek Coder V2 16B', '128GB Mac向けベスト': 'Llama 3.3 70B' },
        ],
        note: 'これは編集部の提案であり、テスト結果ではありません。特化モデルのほうが合うタスクもあるため、ご自身の作業で試してください。',
      },
      scenarios: {
        id: 'scenarios',
        title: 'ユーザータイプ別の実際の設定',
        callouts: [
          { type: 'tip', text: '**インディー開発者（Mac Mini M5 Pro 64GB、15コアCPU・512GB構成は2,699ドルから（[Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios)、2026年8月25日））**\n- コーディング：DeepSeek Coder V2 Lite 16B（Q4、8.9 GB）\n- 執筆：Llama 3.1 8B Q8（8.5 GB）でドキュメントとメール\n- `OLLAMA_MAX_LOADED_MODELS=2`で両モデルを同時にロードできます。保持時間は`OLLAMA_KEEP_ALIVE`で設定します\n- コスト：ローカル利用にトークン課金はありませんが、機器代と電気代はかかります' },
          { type: 'tip', text: '**プライバシー重視のプロ（MacBook Pro M5 Pro 48GB）**\n- メイン：一般業務にLlama 3.1 8B Q8\n- 機密：法律/医療/金融文書にQwen3 14B Q4\n- 出張：モデルのダウンロード後はオフラインで動作\n- 推論はローカルで実行されますが、設定によってはアプリが更新確認を行う場合があります\n- 一般的な情報であり、法律・医療・金融上の助言ではありません。判断は有資格者が行ってください' },
          { type: 'tip', text: '**研究者 / MLエンジニア（Mac Studio M5 Max 128GB。米国の2,499ドルは36GBの基本構成で、128GBはより高価）**\n- メイン：Llama 3.3 70B Q5（50 GB）\n- 専門：非英語研究にQwen3 32B Q4\n- コーディング：DeepSeek Coder V2 16B\n- ビジョン：論文の図のためLlama 3.2 Vision 11B\n- 4つのダウンロードはコンテキストを除いて合計約87 GBです。すべてを同時に保持できるかは、コンテキスト長とmacOSのGPUメモリ上限によります' },
          { type: 'tip', text: '**家族用AIサーバー（Mac Mini M5 Pro 64GB、常時稼働）**\n- 音声アシスタント：Llama 3.1 8B + Whisper + Piper\n- RAG：埋め込みによる家族文書Q&A\n- REST API経由で家族のコーディング支援\n- コスト：機器代と電気代がかかります。消費電力は測定していません' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: '2026年に避けるべきモデル（その理由）',
        callouts: [
          { type: 'warning', text: '**Llama 2（全サイズ）は旧世代です** — その後Metaはより新しいLlamaを公開しています。古いチュートリアルでは今も使われている場合があります。代替候補：Llama 3.1 8B。' },
          { type: 'warning', text: '**Vicuna、Alpaca、WizardLMは過去のコミュニティファインチューンです** — 以前のベースモデルを元にしています。新しく構築するなら、Qwen3 14BやLlama 3.1 8Bなど、より新しいinstructモデルから始めてください。' },
          { type: 'warning', text: '**Falcon 180BはMacには非常に大型です** — この規模のモデルには、ほとんどのMac構成を大きく超えるメモリが必要です。通常は[Llama 3.3 70B](/ja/local-llms/running-70b-models-apple-silicon-m5-max)のような、より小型で新しいモデルが実用的です。' },
          { type: 'warning', text: '**ほとんどのMacでは70BのFP16を避けてください** — Llama 3.3 70BのFP16ダウンロードは141 GBで、M5 Max（最大128GB）には収まりません。容量の面では、256GBや512GBのM5 Ultraのような大容量メモリのMacが必要です。Q5との品質差は測定していません。まずは[Q4_K_MまたはQ5_K_M](/ja/local-llms/llm-quantization-explained)から始めてください。' },
          { type: 'warning', text: '**純粋なベースモデル（instructバリアントなし）は避ける** — ベースモデルはテキストを補完するが指示に従わない。"-instruct"または"-chat"サフィックスを探すこと。代替：同じモデルのinstructバリアント。' },
          { type: 'warning', text: '**モデルを選ぶ前に公開日を確認する** — ガイドによってはStableLM、RedPajama、MPT、Pythiaなどの古いモデル群が今も紹介されています。各モデルカードで公開日とライセンスを確認し、新しいモデルと比較してください。' },
        ],
      },
      formatReference: {
        id: 'format-reference',
        title: 'モデルフォーマットクイックリファレンス',
        columns: ['フォーマット', '使用ツール', 'オリジナル比サイズ'],
        rows: [
          { 'フォーマット': 'GGUF Q4_K_M', '使用ツール': '[Ollama](/ja/local-llms/ollama-on-mac-apple-silicon-setup-2026)、llama.cpp', 'オリジナル比サイズ': 'FP16の約30%' },
          { 'フォーマット': 'GGUF Q5_K_M', '使用ツール': '[Ollama](/ja/local-llms/ollama-on-mac-apple-silicon-setup-2026)、llama.cpp', 'オリジナル比サイズ': 'FP16の約35%' },
          { 'フォーマット': 'GGUF Q8_0', '使用ツール': '[Ollama](/ja/local-llms/ollama-on-mac-apple-silicon-setup-2026)、llama.cpp', 'オリジナル比サイズ': 'FP16の約50%' },
          { 'フォーマット': 'MLX 4-bit', '使用ツール': 'MLXフレームワーク', 'オリジナル比サイズ': 'FP16の約30%' },
          { 'フォーマット': 'MLX 8-bit', '使用ツール': 'MLXフレームワーク', 'オリジナル比サイズ': 'FP16の約50%' },
          { 'フォーマット': 'FP16（オリジナル）', '使用ツール': '全フレームワーク', 'オリジナル比サイズ': '100%' },
        ],
        note: 'この記事のサイズは特記なき限りGGUF Q4_K_M。MLX 4ビット相当品は同様のサイズ。正確なバイト数はHuggingFaceのモデルカードを確認。llama.cppはMetalバックエンド上でGGUFを直接実行し、Ollamaも内部でこれを使用しています——MLXはApple独自のフレームワークで、同じチップ上でもMLXネイティブビルドではより高速になる傾向があります。LM StudioはGGUFとMLXの両方をサポートし、UIからモデルごとにバックエンドを切り替えられます。',
      },
      downloadGuide: {
        id: 'download-guide',
        title: 'クイックリファレンス：これらのモデルのダウンロード',
        codeBlock: `# 16 GB Mac
ollama pull phi4

# 36 GB Mac (いずれか選択)
ollama pull llama3.1:8b
ollama pull qwen3:14b
ollama pull mistral-small

# 64 GB Mac
ollama pull qwen3:32b
ollama pull mixtral:8x7b

# 128 GB Mac
ollama pull llama3.3:70b                  # Q4_K_M, 43 GB
ollama pull llama3.3:70b-instruct-q5_K_M  # Q5_K_M, 50 GB

# 専門モデル
ollama pull deepseek-coder-v2:16b   # コーディング
ollama pull llama3.2-vision:11b     # ビジョン
ollama pull aya-expanse:32b         # 翻訳`,
        codeLanguage: 'bash',
        note: '各モデルは数GB。複数モデルの合計ディスク使用量は50–100GBに達する可能性があります。`du -sh ~/.ollama/`で使用量を確認。LM Studioユーザーは、CLIの代わりにアプリ内のモデルブラウザから同じGGUFまたはMLXウェイトを直接プルできます。',
      },
      relatedArticles: {
        id: 'related-articles',
        title: '関連記事',
        items: [
          '[ローカルLLM向けApple Silicon：完全ガイド](/ja/local-llms/apple-silicon-local-llm-guide-2026)',
          '[ローカルLLM向けM5 Pro対M5 Max：仕様と推定速度](/ja/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[ローカルLLMに必要なユニファイドメモリ量](/ja/local-llms/how-much-unified-memory-for-local-llm)',
          '[MLX vs Ollama vs llama.cpp 比較](/ja/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Mac用Ollamaセットアップガイド](/ja/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[Apple Siliconで70Bモデルを実行する](/ja/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[LLM量子化の説明](/ja/local-llms/llm-quantization-explained)',
          '[Qwen vs Llama vs Mistral 比較](/ja/local-llms/qwen-vs-llama-vs-mistral)',
          '[AppleのオンデバイスAI対ローカルLLM：WWDC 2026で実際に何が変わったか](/ja/local-llms/apple-on-device-ai-vs-local-llms) -- Apple on-device AI vs local LLMs',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '2つの異なるモデルを同時に実行できますか？', a: 'はい、`OLLAMA_MAX_LOADED_MODELS=2`を環境変数に設定します。64GBで8B + 32Bを同時実行できます。' },
          { q: '初心者に最適なモデルはどれですか？', a: 'Llama 3.1 8Bは実用的な出発点です。対応ツールが多く、Q4_K_Mのダウンロードは4.9 GBです。16GBのMacならmacOSとコンテキスト用の余裕があります。' },
          { q: 'Mixtral 8x7BはLlama 8Bより高速ですか？', a: '期待しないほうがよいでしょう。Mixtral 8x7Bはダウンロードがかなり大きいモデルです（OllamaのQ4で26 GB、Llama 3.1 8B Q4は4.9 GB）。[Mistralによると](https://mistral.ai/news/mixtral-of-experts/)トークンごとに使うのは129億パラメータで、8Bより多いため、同程度の量子化なら8Bのほうが速いと考えられます。PromptQuorumは測定していません。どちらが優れているかはタスク次第です。' },
          { q: '2026年のベストローカルLLMは何ですか？', a: 'Apple Silicon上のほとんどのユーザーに：Qwen3（Macに収まる任意のサイズ）は有力な選択肢で、128GB MacではLlama 3.3 70Bも有力です。16GBの場合：Phi-4は小型ながら有能な選択肢です。' },
          { q: 'MacでLlama 3.1 405Bを実行できますか？', a: '非常に大容量のユニファイドメモリが必要です。OllamaのLlama 3.1 405BのQ4ダウンロードは約229–243 GBで、M5 Maxの上限128GBを大きく超えます。容量の面では512GBのMac Studioが必要です。従来の512GB構成か、Appleが512GBを掲載しているM5 Ultraです（2026年8月25日発表、512GB構成は2026年10月下旬の予定と発表）。5,499ドルは96GBのM5 Ultraの開始価格で、512GBはさらに高価です。Macで405Bを動かすテストはしていません。' },
          { q: 'ローカル使用ではQwenはLlamaより優れていますか？', a: 'タスクとモデルサイズによります。モデルカードを比較し、それぞれのライセンスを確認して、ご自身のプロンプトで両方を試してください。PromptQuorumは直接の比較テストを実施していません。' },
          { q: '実際に役立つ最小のモデルは何ですか？', a: 'Phi-4 Mini（3.8Bパラメータ）。チャットやQ&Aでは、サイズの割に有能です。コーディングや複雑な推論はLlama 3.1 8Bや[Qwen3 14B](/ja/local-llms/qwen-vs-llama-vs-mistral)に進んでください。' },
          { q: 'vLLMはApple Siliconで動作しますか？', a: 'Apple Siliconへの対応は変わる可能性があるため、最新の[vLLMドキュメント](https://docs.vllm.ai)を確認してください。vLLMは主に多数のリクエストを処理する用途向けです。Macを1人で使うなら、OllamaやLM Studioのほうが始めやすいでしょう。PromptQuorumはMac上のvLLMを測定していません。' },
          { q: 'MacBook Air M5では何が実行できますか？', a: 'Appleの[MacBook Air](https://www.apple.com/macbook-air/specs/)の仕様は、M5、ユニファイドメモリ16、24、32GB、帯域153 GB/sです。帯域はM5 Proの半分なので、上記のM5 ProとM5 Maxの数値は当てはまりません。16GBではPhi-4（9.1 GB）が少ない余裕で収まります（推定約10–13 tok/s）。24GB以上ならLlama 3.1 8B Q8も選べます（推定約11–14 tok/s）。長時間の生成では速度が下がる場合があります。' },
          { q: '128GB RAMを搭載したMacBook Pro M5 Maxに最適な構成は？', a: '日常使いにはLlama 3.3 70B Q5_K_M（50 GB）です。コンテキスト長にもよりますが、`OLLAMA_MAX_LOADED_MODELS=2`でQwen3 14B Q4（9.3 GB）やDeepSeek Coder V2 16B（8.9 GB）を2つ目としてロードする余裕があります。40コアGPU（614 GB/s）では70B Q5で約7–10 tok/sが目安です。Llama 3.3 70B Q8（75 GB）も収まり、約5–7 tok/sです。どちらも推定値で、ベンチマークではありません。' },
        ],
      },
    },
    ctaText: 'Macのモデルを選びましたか？PromptQuorumでGPT-4、Claude、Geminiや他22モデルと並べて比較 — 特定のユースケースでローカルのLlama、Qwen、Phiモデルがクラウド品質に達しているかを検証できます。',
  },
  zh: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Apple Silicon最佳Ollama模型2026：16GB、36GB、64GB、128GB推荐',
    seoTitle: 'Apple Silicon 2026最佳Ollama模型：16GB–128GB',
    intro: '按Mac内存容量推荐本地LLM：16GB（Phi-4）、36GB（Llama 3.1 8B）、64GB（Qwen3 32B）、128GB（Llama 3.3 70B），并给出根据内存带宽估算的tok/s。M5 Pro最高64GB。',
    metaDescription: 'Apple Silicon的Ollama模型推荐：Phi-4（16GB）、Llama 8B（36GB）、Qwen3 32B（64GB）、Llama 70B（128GB），附tok/s估算与内存上限。',
    heroImage: '/images/best-models-apple-silicon-2026-by-tier-hero-zh.webp',
    twitterDescription: '你的Mac最佳Ollama模型：16GB→Phi-4，36GB→Llama 8B，64GB→Qwen3 32B，128GB→Llama 70B。',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen3 14B', 'Qwen3 32B', 'Mixtral 8x7B', 'Llama 3.3 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M6', 'M5 Ultra'],
    audience: '希望获得Mac配置对应模型推荐的用户。',
    readTime: '阅读约10分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Apple Silicon Mac最佳模型',
    targetKeywords: ['最佳LLM Mac', '模型推荐', '按Mac配置的性能'],
    leadAnswerBlock: '**16GB：Phi-4。36GB：Llama 3.1 8B Q8。64GB：Qwen3 32B Q4。128GB：Llama 3.3 70B Q5。M5 Max上的估算速度：约32–43 tok/s（36GB之选）、约18–25（64GB之选）、约7–10（128GB之选）。M5 Pro最高64GB。全部通过Metal上的Ollama运行。**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: {
        question: '我应该在Mac上运行哪个LLM模型？',
        answer: '16GB → Phi-4。36GB → Llama 3.1 8B或Qwen3 14B。64GB → Qwen3 32B。128GB → Llama 3.3 70B。以下为按内存带宽估算，并非基准测试：M5 Max上约32–43 tok/s（8B Q8，36GB）、约18–25（32B Q4，64GB）、约7–10（70B Q5，128GB）。M5 Pro最高64GB。',
        bullets: ['16GB：Phi-4（M6上估算约10–13 tok/s）', '36GB：Llama 3.1 8B Q8（M5 Max估算约32–43 tok/s）', '64GB：Qwen3 32B Q4（估算：M5 Pro约9–12，M5 Max约18–25）', '128GB：Llama 3.3 70B Q5（M5 Max估算约7–10 tok/s）', 'M5 Pro最高64GB', '全部可通过Ollama获取'],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: '按内存的最佳模型', anchor: '#by-tier' },
      { label: '如何比较质量', anchor: '#quality-benchmarks' },
      { label: '按用例的最佳模型', anchor: '#by-usecase' },
      { label: '真实用户场景', anchor: '#scenarios' },
      { label: '应避免的模型', anchor: '#avoid' },
      { label: '模型格式参考', anchor: '#format-reference' },
      { label: '下载这些模型', anchor: '#download-guide' },
      { label: '相关文章', anchor: '#related-articles' },
      { label: '常见问题', anchor: '#faq' },
    ],
    sections: {
      byTier: {
        id: 'by-tier',
        title: '按Mac内存的最佳模型推荐',
        content: '硬件规格于2026-11-28在苹果的[Mac mini](https://www.apple.com/mac-mini/specs/)、[Mac Studio](https://www.apple.com/mac-studio/specs/)和[MacBook Pro](https://www.apple.com/macbook-pro/specs/)规格页面核对。Mac mini：M6（最高32GB）或M5 Pro（24、48或64GB）。Mac Studio：M5 Max（36至128GB）或M5 Ultra（96、256或512GB）。苹果于2026年8月25日发布这两款台式机，9月22日起发售，并称512GB配置将于10月下旬推出。发布时的美国起售价：Mac mini M6为$899（16GB），M5 Pro为$1,699（24GB）；Mac Studio M5 Max为$2,499（36GB），M5 Ultra为$5,499（96GB）。增加内存需另外付费。价格来源：[MacRumors](https://www.macrumors.com/roundup/mac-mini/)、[9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/)。模型选择是根据模型大小和能否装入内存给出的编辑推荐，并非测试排名。',
        columns: ['内存', '主要推荐', '量化', '大小', 'M5 Pro tok/s', 'M5 Max tok/s', '备选'],
        rows: [
          { '内存': '16 GB', '主要推荐': 'Phi-4', '量化': 'Q4_K_M', '大小': '9.1 GB', 'M5 Pro tok/s': '无16GB版本', 'M5 Max tok/s': '无16GB版本', '备选': 'Llama 3.1 8B Q4（4.9 GB）' },
          { '内存': '36 GB', '主要推荐': 'Llama 3.1 8B', '量化': 'Q8', '大小': '8.5 GB', 'M5 Pro tok/s': '无36GB版本', 'M5 Max tok/s': '~32–43', '备选': 'Qwen3 14B Q4（9.3 GB）' },
          { '内存': '48 GB', '主要推荐': 'Qwen3 14B', '量化': 'Q8', '大小': '16 GB', 'M5 Pro tok/s': '~12–15', 'M5 Max tok/s': '~23–31', '备选': 'Mixtral 8x7B Q4 (26 GB)' },
          { '内存': '64 GB', '主要推荐': 'Qwen3 32B', '量化': 'Q4_K_M', '大小': '20 GB', 'M5 Pro tok/s': '~9–12', 'M5 Max tok/s': '~18–25', '备选': 'Mixtral 8x7B Q5 (33 GB)' },
          { '内存': '96 GB', '主要推荐': 'Llama 3.3 70B', '量化': 'Q4_K_M', '大小': '43 GB', 'M5 Pro tok/s': '无96GB版本', 'M5 Max tok/s': '无96GB版本', '备选': 'M5 Ultra：约17–21（估算）' },
          { '内存': '128 GB', '主要推荐': 'Llama 3.3 70B', '量化': 'Q5_K_M', '大小': '50 GB', 'M5 Pro tok/s': '无128GB版本', 'M5 Max tok/s': '~7–10', '备选': '—' },
          { '内存': '128 GB', '主要推荐': 'Llama 3.3 70B', '量化': 'Q8', '大小': '75 GB', 'M5 Pro tok/s': '无128GB版本', 'M5 Max tok/s': '~5–7', '备选': '文件更大，速度更慢' },
        ],
        note: '大小为2026-11-28核对的Ollama下载大小（GGUF），上下文还需要额外内存。所有tok/s均为估算值，并非基准测试：按内存带宽除以模型大小后的60–80%计算（M5 Pro为307 GB/s；M5 Max在36GB时为460 GB/s，48–128GB时为614 GB/s）。实际速度可能不同，小模型尤其如此。16GB的M6 Mac或MacBook Air M5带宽为153 GB/s，运行Phi-4约10–13 tok/s（估算）。64GB的M5 Pro也能装下70B Q4，约4–5 tok/s（估算，参见[70B硬件指南](/zh/local-llms/70b-models-consumer-hardware)）。',
        image: '',
        imageCaption: '',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: '如何比较模型质量',
        columns: ['模型', 'Ollama下载大小', '官方页面'],
        rows: [
          { '模型': 'Phi-4', 'Ollama下载大小': 'Q4_K_M 9.1 GB / Q8 16 GB', '官方页面': '[phi4](https://ollama.com/library/phi4)' },
          { '模型': 'Llama 3.1 8B', 'Ollama下载大小': 'Q4_K_M 4.9 GB / Q8 8.5 GB', '官方页面': '[llama3.1](https://ollama.com/library/llama3.1)' },
          { '模型': 'Qwen3 14B', 'Ollama下载大小': 'Q4_K_M 9.3 GB / Q8 16 GB', '官方页面': '[qwen3](https://ollama.com/library/qwen3)' },
          { '模型': 'Qwen3 32B', 'Ollama下载大小': 'Q4_K_M 20 GB / Q8 35 GB', '官方页面': '[qwen3](https://ollama.com/library/qwen3)' },
          { '模型': 'Mixtral 8x7B', 'Ollama下载大小': 'Q4_0 26 GB / Q8 50 GB', '官方页面': '[mixtral](https://ollama.com/library/mixtral)' },
          { '模型': 'Llama 3.3 70B', 'Ollama下载大小': 'Q4_K_M 43 GB / Q8 75 GB', '官方页面': '[llama3.3](https://ollama.com/library/llama3.3)' },
        ],
        note: '本页不列出基准测试分数。PromptQuorum没有对这些模型做过基准测试，我们也没有一个可核查的单一来源在相同条件下测试过全部模型。请阅读模型发布方模型卡上的基准说明，确认测试的版本和设置，并用你自己的提示词试用。大小于2026-11-28核对。',
        image: '',
        imageCaption: '',
      },
      byUsecase: {
        id: 'by-usecase',
        title: '按用例的最佳模型（2026）',
        columns: ['用例', '36GB Mac最佳', '64GB Mac最佳', '128GB Mac最佳'],
        rows: [
          { '用例': '编程（通用）', '36GB Mac最佳': 'Llama 3.1 8B', '64GB Mac最佳': 'DeepSeek Coder V2 16B', '128GB Mac最佳': 'Llama 3.3 70B' },
          { '用例': '编程（Python）', '36GB Mac最佳': 'DeepSeek Coder V2 Lite', '64GB Mac最佳': 'DeepSeek Coder V2 16B', '128GB Mac最佳': 'DeepSeek Coder V2 16B' },
          { '用例': '长文写作', '36GB Mac最佳': 'Llama 3.1 8B Q8', '64GB Mac最佳': 'Qwen3 32B Q4', '128GB Mac最佳': 'Llama 3.3 70B Q5' },
          { '用例': '聊天/对话', '36GB Mac最佳': 'Mistral Small', '64GB Mac最佳': 'Mixtral 8x7B', '128GB Mac最佳': 'Llama 3.3 70B' },
          { '用例': '推理/数学', '36GB Mac最佳': 'Qwen3 14B', '64GB Mac最佳': 'Qwen3 32B', '128GB Mac最佳': 'Qwen3 32B' },
          { '用例': 'RAG/问答', '36GB Mac最佳': 'Llama 3.1 8B + nomic-embed', '64GB Mac最佳': '[Llama 3.1 8B](/zh/power-local-llm/local-rag-for-private-business-data) + bge-large', '128GB Mac最佳': 'Llama 3.3 70B + bge-large' },
          { '用例': '视觉/多模态', '36GB Mac最佳': 'LLaVA 7B', '64GB Mac最佳': '[Llama 3.2 Vision 11B](/zh/power-local-llm/local-vision-models-llava-ollama-2026)', '128GB Mac最佳': 'Llama 3.2 Vision 90B' },
          { '用例': '翻译', '36GB Mac最佳': 'Qwen3 14B', '64GB Mac最佳': 'Qwen3 32B', '128GB Mac最佳': 'Aya Expanse 32B' },
          { '用例': '摘要', '36GB Mac最佳': 'Llama 3.1 8B', '64GB Mac最佳': 'Qwen3 32B', '128GB Mac最佳': 'Llama 3.3 70B' },
          { '用例': '代码审查', '36GB Mac最佳': 'DeepSeek Coder V2 Lite', '64GB Mac最佳': 'DeepSeek Coder V2 16B', '128GB Mac最佳': 'Llama 3.3 70B' },
        ],
        note: '以上是编辑建议，并非测试结果。专用模型可能更适合某项任务，请用你自己的工作内容测试。',
      },
      scenarios: {
        id: 'scenarios',
        title: '按用户类型的实际配置',
        callouts: [
          { type: 'tip', text: '**独立开发者（Mac Mini M5 Pro 64GB，15核CPU/512GB配置$2,699起，见[Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios)，2026年8月25日）**\n- 编程：DeepSeek Coder V2 Lite 16B（Q4，8.9 GB）\n- 写作：Llama 3.1 8B Q8（8.5 GB）用于文档和邮件\n- 用`OLLAMA_MAX_LOADED_MODELS=2`可同时加载两个模型；保留时长由`OLLAMA_KEEP_ALIVE`设置\n- 成本：本地使用不按token收费，但硬件和电费仍需花钱' },
          { type: 'tip', text: '**注重隐私的专业人士（MacBook Pro M5 Pro 48GB）**\n- 主要：Llama 3.1 8B Q8用于一般工作\n- 敏感：Qwen3 14B Q4用于法律/医疗/金融文档\n- 出行：模型下载完成后可离线工作\n- 推理在本地运行；除非另行配置，应用仍可能检查更新\n- 以上为一般性信息，不构成法律、医疗或金融建议；请由合格人员作出决定' },
          { type: 'tip', text: '**研究员/ML工程师（Mac Studio M5 Max 128GB；$2,499是36GB基础款价格，128GB更贵）**\n- 主要：Llama 3.3 70B Q5（50 GB）\n- 专用：Qwen3 32B Q4用于非英语研究\n- 编程：DeepSeek Coder V2 16B\n- 视觉：Llama 3.2 Vision 11B处理论文图表\n- 四个模型的下载合计约87 GB（不含上下文）；能否同时保持加载，取决于上下文长度和macOS的GPU内存上限' },
          { type: 'tip', text: '**家庭AI服务器（Mac Mini M5 Pro 64GB，始终在线）**\n- 语音助手：Llama 3.1 8B + Whisper + Piper\n- RAG：用嵌入进行家庭文档问答\n- 通过REST API为家庭成员提供编程帮助\n- 成本：硬件加电费；我们没有测量功耗' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: '2026年应避免的模型（及原因）',
        callouts: [
          { type: 'warning', text: '**Llama 2（任何尺寸）属于较早的一代** — 此后Meta已发布更新的Llama版本。一些旧教程仍在使用它。可考虑改用：Llama 3.1 8B。' },
          { type: 'warning', text: '**Vicuna、Alpaca、WizardLM是较早的社区微调版本** — 它们基于更早的基础模型。新搭建环境时，建议从较新的instruct模型入手，例如Qwen3 14B或Llama 3.1 8B。' },
          { type: 'warning', text: '**Falcon 180B对Mac来说非常大** — 这种规模的模型所需内存远超大多数Mac配置。通常，[Llama 3.3 70B](/zh/local-llms/running-70b-models-apple-silicon-m5-max)这类更小、更新的模型更实用。' },
          { type: 'warning', text: '**大多数Mac上不要用FP16运行70B** — Llama 3.3 70B的FP16下载为141 GB，超过M5 Max能容纳的上限（最高128GB）。仅从容量看，需要内存更大的Mac，例如256GB或512GB的M5 Ultra。我们没有测量它与Q5的质量差异。建议从[Q4_K_M或Q5_K_M](/zh/local-llms/llm-quantization-explained)开始。' },
          { type: 'warning', text: '**避免纯基础模型（无instruct变体）** — 基础模型补全文本但不遵循指令。查找"-instruct"或"-chat"后缀。替代：同一模型的instruct变体。' },
          { type: 'warning', text: '**选模型前先看发布日期** — 一些指南仍提到StableLM、RedPajama、MPT或Pythia等较早的模型系列。请在各模型卡上查看发布日期和许可证，并与更新的模型比较。' },
        ],
      },
      formatReference: {
        id: 'format-reference',
        title: '模型格式快速参考',
        columns: ['格式', '使用工具', '相对原始大小'],
        rows: [
          { '格式': 'GGUF Q4_K_M', '使用工具': '[Ollama](/zh/local-llms/ollama-on-mac-apple-silicon-setup-2026)、llama.cpp', '相对原始大小': 'FP16的约30%' },
          { '格式': 'GGUF Q5_K_M', '使用工具': '[Ollama](/zh/local-llms/ollama-on-mac-apple-silicon-setup-2026)、llama.cpp', '相对原始大小': 'FP16的约35%' },
          { '格式': 'GGUF Q8_0', '使用工具': '[Ollama](/zh/local-llms/ollama-on-mac-apple-silicon-setup-2026)、llama.cpp', '相对原始大小': 'FP16的约50%' },
          { '格式': 'MLX 4-bit', '使用工具': 'MLX框架', '相对原始大小': 'FP16的约30%' },
          { '格式': 'MLX 8-bit', '使用工具': 'MLX框架', '相对原始大小': 'FP16的约50%' },
          { '格式': 'FP16（原始）', '使用工具': '所有框架', '相对原始大小': '100%' },
        ],
        note: '本文中的大小为GGUF Q4_K_M，除非另有说明。MLX 4位等效大小类似。确切字节数请查看HuggingFace上的模型卡。llama.cpp直接在Metal后端运行GGUF，Ollama底层正是使用它——MLX是苹果自家的框架，在同一芯片上运行MLX原生构建版本时往往更快。LM Studio同时支持GGUF和MLX，可在其界面中按模型切换后端。',
      },
      downloadGuide: {
        id: 'download-guide',
        title: '快速参考：下载这些模型',
        codeBlock: `# 16 GB Mac
ollama pull phi4

# 36 GB Mac (选一个)
ollama pull llama3.1:8b
ollama pull qwen3:14b
ollama pull mistral-small

# 64 GB Mac
ollama pull qwen3:32b
ollama pull mixtral:8x7b

# 128 GB Mac
ollama pull llama3.3:70b                  # Q4_K_M, 43 GB
ollama pull llama3.3:70b-instruct-q5_K_M  # Q5_K_M, 50 GB

# 专用模型
ollama pull deepseek-coder-v2:16b   # 编程
ollama pull llama3.2-vision:11b     # 视觉
ollama pull aya-expanse:32b         # 翻译`,
        codeLanguage: 'bash',
        note: '每个模型几GB。多个模型的总磁盘空间可达50–100 GB。用`du -sh ~/.ollama/`检查使用量。LM Studio用户也可以直接通过其内置模型浏览器下载相同的GGUF或MLX权重，无需使用命令行。',
      },
      relatedArticles: {
        id: 'related-articles',
        title: '相关文章',
        items: [
          '[本地LLM的Apple Silicon：完整指南](/zh/local-llms/apple-silicon-local-llm-guide-2026)',
          '[本地 LLM：M5 Pro 与 M5 Max 规格和速度估算](/zh/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[本地LLM需要多少统一内存？](/zh/local-llms/how-much-unified-memory-for-local-llm)',
          '[MLX vs Ollama vs llama.cpp比较](/zh/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Ollama Mac安装指南](/zh/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[在Apple Silicon上运行70B模型](/zh/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[LLM量化解释](/zh/local-llms/llm-quantization-explained)',
          '[Qwen vs Llama vs Mistral比较](/zh/local-llms/qwen-vs-llama-vs-mistral)',
          '[Apple的本地AI与真正的本地LLM：WWDC 2026到底改变了什么](/zh/local-llms/apple-on-device-ai-vs-local-llms) -- Apple on-device AI vs local LLMs',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '我可以同时运行两个不同的模型吗？', a: '是的，在环境中设置`OLLAMA_MAX_LOADED_MODELS=2`。64GB可以同时运行8B + 32B。' },
          { q: '哪个模型最适合初学者？', a: 'Llama 3.1 8B是实用的起点：支持广泛，Q4_K_M下载为4.9 GB。16GB的Mac能为macOS和上下文留出余量。' },
          { q: 'Mixtral 8x7B比Llama 8B快吗？', a: '不要指望如此。Mixtral 8x7B的下载大得多（Ollama中Q4为26 GB，而Llama 3.1 8B Q4为4.9 GB）。[Mistral表示](https://mistral.ai/news/mixtral-of-experts/)它每个token使用129亿参数，仍多于8B，因此在相近量化下，可预期8B模型更快。PromptQuorum没有实测过。哪个更好取决于具体任务。' },
          { q: '2026年最好的本地LLM是什么？', a: '对于Apple Silicon上的大多数用户：Qwen3（任何适合你Mac的大小）是不错的选择，128GB Mac上Llama 3.3 70B也是不错的选项。16GB：Phi-4是一个小巧而能干的选择。' },
          { q: '我可以在Mac上运行Llama 3.1 405B吗？', a: '只有统一内存非常大才行。Ollama中Llama 3.1 405B的Q4下载约229–243 GB，远超M5 Max的128GB上限。仅从容量看，需要512GB的Mac Studio：早期的512GB配置，或苹果列有512GB选项的M5 Ultra（2026年8月25日发布，512GB配置当时称将于2026年10月下旬推出）。$5,499是96GB版M5 Ultra的起售价，512GB更贵。我们没有在Mac上测试过405B。' },
          { q: 'Qwen在本地使用上比Llama好吗？', a: '取决于任务和模型大小。请比较模型卡，确认各自的许可证，并用你自己的提示词试用两者。PromptQuorum没有做过直接对比测试。' },
          { q: '实际有用的最小模型是什么？', a: 'Phi-4 Mini，3.8B参数。对于聊天和问答，就其体量而言表现不错。编程或复杂推理请选择Llama 3.1 8B或[Qwen3 14B](/zh/local-llms/qwen-vs-llama-vs-mistral)。' },
          { q: 'vLLM能在Apple Silicon上运行吗？', a: 'Apple Silicon的支持情况可能变化，请查看最新的[vLLM文档](https://docs.vllm.ai)。vLLM主要面向处理大量请求的场景。在Mac上单人使用时，从Ollama或LM Studio入手更简单。PromptQuorum没有在Mac上测试过vLLM。' },
          { q: 'MacBook Air M5能运行什么模型？', a: '苹果列出的[MacBook Air](https://www.apple.com/macbook-air/specs/)配备M5、16、24或32GB统一内存，带宽153 GB/s。这是M5 Pro带宽的一半，因此上面M5 Pro和M5 Max的数值并不适用。16GB时Phi-4（9.1 GB）可以装下，但余量有限（估算约10–13 tok/s）。24GB及以上可考虑Llama 3.1 8B Q8（估算约11–14 tok/s）。长时间生成时速度可能更低。' },
          { q: '配备128GB内存的MacBook Pro M5 Max最佳配置是什么？', a: '日常使用推荐Llama 3.3 70B Q5_K_M（50 GB），视上下文长度而定，还可通过`OLLAMA_MAX_LOADED_MODELS=2`再加载一个模型，例如Qwen3 14B Q4（9.3 GB）或DeepSeek Coder V2 16B（8.9 GB）。使用40核GPU（614 GB/s）时，70B Q5预计约7–10 tok/s。Llama 3.3 70B Q8（75 GB）也装得下，约5–7 tok/s。两个数值都是估算，并非基准测试。' },
        ],
      },
    },
    ctaText: '已为您的Mac选好模型？使用PromptQuorum将其响应与GPT-4、Claude、Gemini及其他22个模型并排比较——验证您的本地Llama、Qwen或Phi模型是否在特定用例中达到云端质量。',
  },
  ko: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: '하드웨어 & 성능',
    title: 'Apple Silicon 최적 Ollama 모델 2026: 16GB, 36GB, 64GB, 128GB별 추천',
    seoTitle: 'Apple Silicon 최적 Ollama 모델 2026: 16GB~128GB',
    intro: 'Mac 메모리 용량별 로컬 LLM 추천입니다. 16GB(Phi-4), 36GB(Llama 3.1 8B), 64GB(Qwen3 32B), 128GB(Llama 3.3 70B)와 메모리 대역폭으로 추정한 tok/s를 제공합니다. M5 Pro는 최대 64GB입니다.',
    metaDescription: 'Apple Silicon Ollama 모델 추천: Phi-4(16GB), Llama 8B(36GB), Qwen3 32B(64GB), Llama 70B(128GB). 추정 tok/s와 메모리 한계를 안내합니다.',
    heroImage: '/images/best-models-apple-silicon-2026-by-tier-hero-ko.webp',
    twitterDescription: 'Mac용 최적 Ollama 모델: 16GB→Phi-4, 36GB→Llama 8B, 64GB→Qwen3 32B, 128GB→Llama 70B.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen3 14B', 'Qwen3 32B', 'Mixtral 8x7B', 'Llama 3.3 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M6', 'M5 Ultra'],
    audience: '자신의 Mac 구성에 맞는 모델 추천을 원하는 Mac 사용자.',
    readTime: '10분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Apple Silicon Mac 최적 모델',
    targetKeywords: ['최적 LLM Mac', '모델 추천', 'Mac 구성별 성능'],
    leadAnswerBlock: '**16GB: Phi-4. 36GB: Llama 3.1 8B Q8. 64GB: Qwen3 32B Q4. 128GB: Llama 3.3 70B Q5. M5 Max 추정 속도: 약 32~43 tok/s(36GB 추천 모델), 약 18~25(64GB), 약 7~10(128GB). M5 Pro는 최대 64GB입니다. 모두 Metal 기반 Ollama로 실행됩니다.**',
    quickAnswerTop: {
      en: {
        question: 'Mac에서 어떤 LLM 모델을 실행해야 합니까?',
        answer: '16GB → Phi-4. 36GB → Llama 3.1 8B 또는 Qwen3 14B. 64GB → Qwen3 32B. 128GB → Llama 3.3 70B. 메모리 대역폭 기반 추정치이며 벤치마크가 아닙니다. M5 Max에서 약 32~43 tok/s(8B Q8, 36GB), 약 18~25(32B Q4, 64GB), 약 7~10(70B Q5, 128GB)입니다. M5 Pro는 최대 64GB입니다.',
        bullets: ['16GB: Phi-4(M6 추정 약 10~13 tok/s)', '36GB: Llama 3.1 8B Q8(M5 Max 추정 약 32~43 tok/s)', '64GB: Qwen3 32B Q4(추정: M5 Pro 약 9~12, M5 Max 약 18~25)', '128GB: Llama 3.3 70B Q5(M5 Max 추정 약 7~10 tok/s)', 'M5 Pro는 최대 64GB입니다', '모두 Ollama에서 이용할 수 있습니다'],
        updatedDate: '2026-11-28',
      },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ko: {
        question: 'Mac에서 어떤 LLM 모델을 실행해야 합니까?',
        answer: '16GB → Phi-4. 36GB → Llama 3.1 8B 또는 Qwen3 14B. 64GB → Qwen3 32B. 128GB → Llama 3.3 70B. 메모리 대역폭 기반 추정치이며 벤치마크가 아닙니다. M5 Max에서 약 32~43 tok/s(8B Q8, 36GB), 약 18~25(32B Q4, 64GB), 약 7~10(70B Q5, 128GB)입니다. M5 Pro는 최대 64GB입니다.',
        bullets: ['16GB: Phi-4(M6 추정 약 10~13 tok/s)', '36GB: Llama 3.1 8B Q8(M5 Max 추정 약 32~43 tok/s)', '64GB: Qwen3 32B Q4(추정: M5 Pro 약 9~12, M5 Max 약 18~25)', '128GB: Llama 3.3 70B Q5(M5 Max 추정 약 7~10 tok/s)', 'M5 Pro는 최대 64GB입니다', '모두 Ollama에서 이용할 수 있습니다'],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: '메모리 용량별 최적 모델', anchor: '#by-tier' },
      { label: '품질 비교 방법', anchor: '#quality-benchmarks' },
      { label: '사용 사례별 최적 모델', anchor: '#by-usecase' },
      { label: '실제 사용자 시나리오', anchor: '#scenarios' },
      { label: '피해야 할 모델', anchor: '#avoid' },
      { label: '모델 형식 참조', anchor: '#format-reference' },
      { label: '모델 다운로드 방법', anchor: '#download-guide' },
      { label: '관련 문서', anchor: '#related-articles' },
      { label: '자주 묻는 질문', anchor: '#faq' },
    ],
    sections: {
      byTier: {
        id: 'by-tier',
        title: 'Mac 메모리 용량별 모델 추천',
        content: '하드웨어 사양은 2026-11-28에 Apple의 [Mac mini](https://www.apple.com/mac-mini/specs/), [Mac Studio](https://www.apple.com/mac-studio/specs/), [MacBook Pro](https://www.apple.com/macbook-pro/specs/) 사양 페이지에서 확인했습니다. Mac mini는 M6(최대 32GB) 또는 M5 Pro(24, 48, 64GB)입니다. Mac Studio는 M5 Max(36~128GB) 또는 M5 Ultra(96, 256, 512GB)입니다. Apple은 2026년 8월 25일 두 데스크톱을 발표했고 9월 22일부터 출시했으며, 512GB 구성은 10월 말로 안내했습니다. 출시 당시 미국 시작가는 Mac mini M6 $899(16GB), M5 Pro $1,699(24GB), Mac Studio M5 Max $2,499(36GB), M5 Ultra $5,499(96GB)입니다. 메모리를 늘리면 추가 비용이 듭니다. 가격 출처: [MacRumors](https://www.macrumors.com/roundup/mac-mini/), [9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/). 모델 선정은 모델 크기와 메모리 적합성에 따른 편집부 추천이며, 테스트에 기반한 순위가 아닙니다.',
        columns: ['메모리', '주요 추천', '양자화', '크기', 'M5 Pro tok/s', 'M5 Max tok/s', '대안'],
        rows: [
          { '메모리': '16 GB', '주요 추천': 'Phi-4', '양자화': 'Q4_K_M', '크기': '9.1 GB', 'M5 Pro tok/s': '16GB 구성 없음', 'M5 Max tok/s': '16GB 구성 없음', '대안': 'Llama 3.1 8B Q4 (4.9 GB)' },
          { '메모리': '36 GB', '주요 추천': 'Llama 3.1 8B', '양자화': 'Q8', '크기': '8.5 GB', 'M5 Pro tok/s': '36GB 구성 없음', 'M5 Max tok/s': '~32–43', '대안': 'Qwen3 14B Q4 (9.3 GB)' },
          { '메모리': '48 GB', '주요 추천': 'Qwen3 14B', '양자화': 'Q8', '크기': '16 GB', 'M5 Pro tok/s': '~12–15', 'M5 Max tok/s': '~23–31', '대안': 'Mixtral 8x7B Q4 (26 GB)' },
          { '메모리': '64 GB', '주요 추천': 'Qwen3 32B', '양자화': 'Q4_K_M', '크기': '20 GB', 'M5 Pro tok/s': '~9–12', 'M5 Max tok/s': '~18–25', '대안': 'Mixtral 8x7B Q5 (33 GB)' },
          { '메모리': '96 GB', '주요 추천': 'Llama 3.3 70B', '양자화': 'Q4_K_M', '크기': '43 GB', 'M5 Pro tok/s': '96GB 구성 없음', 'M5 Max tok/s': '96GB 구성 없음', '대안': 'M5 Ultra: 약 17–21 (추정)' },
          { '메모리': '128 GB', '주요 추천': 'Llama 3.3 70B', '양자화': 'Q5_K_M', '크기': '50 GB', 'M5 Pro tok/s': '128GB 구성 없음', 'M5 Max tok/s': '~7–10', '대안': '—' },
          { '메모리': '128 GB', '주요 추천': 'Llama 3.3 70B', '양자화': 'Q8', '크기': '75 GB', 'M5 Pro tok/s': '128GB 구성 없음', 'M5 Max tok/s': '~5–7', '대안': '파일이 더 크고 느림' },
        ],
        note: '크기는 2026-11-28에 확인한 Ollama 다운로드 크기(GGUF)이며, 컨텍스트에는 추가 메모리가 필요합니다. 모든 tok/s 수치는 벤치마크가 아닌 추정치로, 메모리 대역폭을 모델 크기로 나눈 값의 60~80%입니다(M5 Pro 307 GB/s, M5 Max는 36GB에서 460 GB/s, 48~128GB에서 614 GB/s). 실제 속도는 특히 소형 모델에서 다를 수 있습니다. 16GB M6 Mac이나 MacBook Air M5는 153 GB/s이며 Phi-4는 약 10~13 tok/s(추정)입니다. 64GB M5 Pro는 70B Q4도 담을 수 있으며 약 4~5 tok/s입니다(추정, [70B 하드웨어 가이드](/ko/local-llms/70b-models-consumer-hardware) 참고).',
        image: '',
        imageCaption: '',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: '모델 품질을 비교하는 방법',
        columns: ['모델', 'Ollama 다운로드 크기', '공식 페이지'],
        rows: [
          { '모델': 'Phi-4', 'Ollama 다운로드 크기': 'Q4_K_M 9.1 GB / Q8 16 GB', '공식 페이지': '[phi4](https://ollama.com/library/phi4)' },
          { '모델': 'Llama 3.1 8B', 'Ollama 다운로드 크기': 'Q4_K_M 4.9 GB / Q8 8.5 GB', '공식 페이지': '[llama3.1](https://ollama.com/library/llama3.1)' },
          { '모델': 'Qwen3 14B', 'Ollama 다운로드 크기': 'Q4_K_M 9.3 GB / Q8 16 GB', '공식 페이지': '[qwen3](https://ollama.com/library/qwen3)' },
          { '모델': 'Qwen3 32B', 'Ollama 다운로드 크기': 'Q4_K_M 20 GB / Q8 35 GB', '공식 페이지': '[qwen3](https://ollama.com/library/qwen3)' },
          { '모델': 'Mixtral 8x7B', 'Ollama 다운로드 크기': 'Q4_0 26 GB / Q8 50 GB', '공식 페이지': '[mixtral](https://ollama.com/library/mixtral)' },
          { '모델': 'Llama 3.3 70B', 'Ollama 다운로드 크기': 'Q4_K_M 43 GB / Q8 75 GB', '공식 페이지': '[llama3.3](https://ollama.com/library/llama3.3)' },
        ],
        note: '이 페이지는 벤치마크 점수를 싣지 않습니다. PromptQuorum은 이 모델들을 벤치마크하지 않았으며, 모든 모델을 같은 조건에서 시험한 확인 가능한 단일 출처도 없습니다. 모델 개발사의 모델 카드에 있는 벤치마크 설명을 읽고, 시험한 버전과 설정을 확인한 뒤 직접 작성한 프롬프트로 시험해 보십시오. 크기는 2026-11-28에 확인했습니다.',
        image: '',
        imageCaption: '',
      },
      byUsecase: {
        id: 'by-usecase',
        title: '사용 사례별 최적 모델 (2026)',
        columns: ['사용 사례', '36GB Mac 최적', '64GB Mac 최적', '128GB Mac 최적'],
        rows: [
          { '사용 사례': '코딩 (일반)', '36GB Mac 최적': 'Llama 3.1 8B', '64GB Mac 최적': 'DeepSeek Coder V2 16B', '128GB Mac 최적': 'Llama 3.3 70B' },
          { '사용 사례': '코딩 (Python)', '36GB Mac 최적': 'DeepSeek Coder V2 Lite', '64GB Mac 최적': 'DeepSeek Coder V2 16B', '128GB Mac 최적': 'DeepSeek Coder V2 16B' },
          { '사용 사례': '장문 글쓰기', '36GB Mac 최적': 'Llama 3.1 8B Q8', '64GB Mac 최적': 'Qwen3 32B Q4', '128GB Mac 최적': 'Llama 3.3 70B Q5' },
          { '사용 사례': '채팅 / 대화', '36GB Mac 최적': 'Mistral Small', '64GB Mac 최적': 'Mixtral 8x7B', '128GB Mac 최적': 'Llama 3.3 70B' },
          { '사용 사례': '추론 / 수학', '36GB Mac 최적': 'Qwen3 14B', '64GB Mac 최적': 'Qwen3 32B', '128GB Mac 최적': 'Qwen3 32B' },
          { '사용 사례': 'RAG / Q&A', '36GB Mac 최적': 'Llama 3.1 8B + nomic-embed', '64GB Mac 최적': '[Llama 3.1 8B](/power-local-llm/local-rag-for-private-business-data) + bge-large', '128GB Mac 최적': 'Llama 3.3 70B + bge-large' },
          { '사용 사례': '비전 / 멀티모달', '36GB Mac 최적': 'LLaVA 7B', '64GB Mac 최적': '[Llama 3.2 Vision 11B](/power-local-llm/local-vision-models-llava-ollama-2026)', '128GB Mac 최적': 'Llama 3.2 Vision 90B' },
          { '사용 사례': '번역', '36GB Mac 최적': 'Qwen3 14B', '64GB Mac 최적': 'Qwen3 32B', '128GB Mac 최적': 'Aya Expanse 32B' },
          { '사용 사례': '요약', '36GB Mac 최적': 'Llama 3.1 8B', '64GB Mac 최적': 'Qwen3 32B', '128GB Mac 최적': 'Llama 3.3 70B' },
          { '사용 사례': '코드 리뷰', '36GB Mac 최적': 'DeepSeek Coder V2 Lite', '64GB Mac 최적': 'DeepSeek Coder V2 16B', '128GB Mac 최적': 'Llama 3.3 70B' },
        ],
        note: '편집부의 제안이며 테스트 결과가 아닙니다. 작업에 따라 특화 모델이 더 맞을 수 있으므로 실제 작업으로 시험해 보십시오.',
      },
      scenarios: {
        id: 'scenarios',
        title: '사용자 유형별 실제 구성 사례',
        callouts: [
          { type: 'tip', text: '**인디 개발자 (Mac Mini M5 Pro 64GB, 15코어 CPU/512GB 구성 $2,699부터, [Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios) 2026년 8월 25일)**\n- 코딩: DeepSeek Coder V2 Lite 16B (Q4, 8.9 GB)\n- 글쓰기: 문서 및 이메일용 Llama 3.1 8B Q8 (8.5 GB)\n- `OLLAMA_MAX_LOADED_MODELS=2`로 두 모델을 함께 로드할 수 있으며, 유지 시간은 `OLLAMA_KEEP_ALIVE`로 정합니다\n- 비용: 로컬 사용에는 토큰 요금이 없지만 하드웨어와 전기 비용은 듭니다' },
          { type: 'tip', text: '**개인정보 보호 중심 전문가 (MacBook Pro M5 Pro 48GB)**\n- 주요: 일반 업무용 Llama 3.1 8B Q8\n- 민감 업무: 법률/의료/금융 문서용 Qwen3 14B Q4\n- 이동 중: 모델을 내려받은 뒤에는 오프라인에서 동작합니다\n- 추론은 로컬에서 실행되지만, 설정에 따라 앱이 업데이트를 확인할 수 있습니다\n- 일반 정보이며 법률·의료·금융 자문이 아닙니다. 판단은 자격을 갖춘 전문가가 합니다' },
          { type: 'tip', text: '**연구자 / ML 엔지니어 (Mac Studio M5 Max 128GB. $2,499는 36GB 기본형 가격이며 128GB는 더 비쌉니다)**\n- 주요: Llama 3.3 70B Q5 (50 GB)\n- 전문: 비영어권 연구용 Qwen3 32B Q4\n- 코딩: DeepSeek Coder V2 16B\n- 비전: 논문 그림 분석용 Llama 3.2 Vision 11B\n- 네 모델의 다운로드는 컨텍스트를 제외하고 합계 약 87 GB입니다. 모두 동시에 유지할 수 있는지는 컨텍스트 길이와 macOS GPU 메모리 한도에 따라 다릅니다' },
          { type: 'tip', text: '**가정용 AI 서버 (Mac Mini M5 Pro 64GB, 상시 가동)**\n- 음성 어시스턴트: Llama 3.1 8B + Whisper + Piper\n- RAG: 임베딩을 활용한 가족 문서 Q&A\n- REST API를 통한 가족 구성원 코딩 지원\n- 비용: 하드웨어와 전기 요금이 듭니다. 소비 전력은 측정하지 않았습니다' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: '2026년 피해야 할 모델 및 이유',
        callouts: [
          { type: 'warning', text: '**Llama 2(모든 크기)는 이전 세대입니다** — 이후 Meta는 더 새로운 Llama 버전을 출시했습니다. 오래된 튜토리얼에서는 아직 사용할 수 있습니다. 대안: Llama 3.1 8B.' },
          { type: 'warning', text: '**Vicuna, Alpaca, WizardLM은 오래된 커뮤니티 파인튜닝 모델입니다** — 이전 세대 베이스 모델을 기반으로 합니다. 새로 구성한다면 Qwen3 14B나 Llama 3.1 8B 같은 더 새로운 instruct 모델로 시작하십시오.' },
          { type: 'warning', text: '**Falcon 180B는 Mac에 매우 큰 모델입니다** — 이 규모의 모델은 대부분의 Mac 구성보다 훨씬 많은 메모리가 필요합니다. 보통은 [Llama 3.3 70B](/ko/local-llms/running-70b-models-apple-silicon-m5-max)처럼 더 작고 새로운 모델이 실용적입니다.' },
          { type: 'warning', text: '**대부분의 Mac에서는 70B FP16을 피하십시오** — Llama 3.3 70B FP16 다운로드는 141 GB로, M5 Max(최대 128GB)에는 담을 수 없습니다. 용량만 보면 256GB 또는 512GB M5 Ultra처럼 메모리가 더 큰 Mac이 필요합니다. Q5와의 품질 차이는 측정하지 않았습니다. [Q4_K_M 또는 Q5_K_M](/ko/local-llms/llm-quantization-explained)으로 시작하십시오.' },
          { type: 'warning', text: '**순수 베이스 모델 (instruct 변형 없음) 사용 금지** — 베이스 모델은 텍스트를 완성하지만 지시를 따르지 않습니다. "-instruct" 또는 "-chat" 접미사를 확인하십시오. 대체: 동일 모델의 instruct 변형.' },
          { type: 'warning', text: '**모델을 고르기 전에 출시일을 확인하십시오** — 일부 가이드는 StableLM, RedPajama, MPT, Pythia 같은 오래된 모델 계열을 아직 소개합니다. 각 모델 카드에서 출시일과 라이선스를 확인하고 새 모델과 비교하십시오.' },
        ],
      },
      formatReference: {
        id: 'format-reference',
        title: '모델 형식 빠른 참조',
        columns: ['형식', '사용 도구', '원본 대비 크기'],
        rows: [
          { '형식': 'GGUF Q4_K_M', '사용 도구': '[Ollama](/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', '원본 대비 크기': 'FP16의 약 30%' },
          { '형식': 'GGUF Q5_K_M', '사용 도구': '[Ollama](/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', '원본 대비 크기': 'FP16의 약 35%' },
          { '형식': 'GGUF Q8_0', '사용 도구': '[Ollama](/local-llms/ollama-on-mac-apple-silicon-setup-2026), llama.cpp', '원본 대비 크기': 'FP16의 약 50%' },
          { '형식': 'MLX 4비트', '사용 도구': 'MLX 프레임워크', '원본 대비 크기': 'FP16의 약 30%' },
          { '형식': 'MLX 8비트', '사용 도구': 'MLX 프레임워크', '원본 대비 크기': 'FP16의 약 50%' },
          { '형식': 'FP16 (원본)', '사용 도구': '모든 프레임워크', '원본 대비 크기': '100%' },
        ],
        note: '이 문서의 크기는 별도 명시가 없는 한 GGUF Q4_K_M 기준입니다. MLX 4비트 동등 모델은 크기가 비슷합니다. 정확한 바이트 수는 HuggingFace의 모델 카드를 확인하십시오. llama.cpp는 Metal 백엔드에서 GGUF를 직접 실행하며, Ollama가 내부적으로 사용하는 방식이 바로 이것입니다 — MLX는 Apple 자체 프레임워크로, 동일 칩에서 MLX 전용 빌드를 실행할 때 더 빠른 경향이 있습니다. LM Studio는 GGUF와 MLX를 모두 지원하며 UI에서 모델별로 백엔드를 전환할 수 있습니다.',
      },
      downloadGuide: {
        id: 'download-guide',
        title: '빠른 참조: 모델 다운로드 방법',
        codeBlock: `# 16 GB Mac
ollama pull phi4

# 36 GB Mac (하나 선택)
ollama pull llama3.1:8b
ollama pull qwen3:14b
ollama pull mistral-small

# 64 GB Mac
ollama pull qwen3:32b
ollama pull mixtral:8x7b

# 128 GB Mac
ollama pull llama3.3:70b                  # Q4_K_M, 43 GB
ollama pull llama3.3:70b-instruct-q5_K_M  # Q5_K_M, 50 GB

# 특화 모델
ollama pull deepseek-coder-v2:16b   # 코딩
ollama pull llama3.2-vision:11b     # 비전
ollama pull aya-expanse:32b         # 번역`,
        codeLanguage: 'bash',
        note: '각 모델은 수 GB 크기입니다. 여러 모델을 보유할 경우 총 디스크 사용량이 50~100 GB에 달할 수 있습니다. `du -sh ~/.ollama/`로 사용량을 확인하십시오. LM Studio 사용자는 CLI 대신 앱 내 모델 브라우저에서 동일한 GGUF 또는 MLX 가중치를 직접 받을 수 있습니다.',
      },
      relatedArticles: {
        id: 'related-articles',
        title: '관련 문서',
        items: [
          '[Apple Silicon 로컬 LLM 완전 가이드](/local-llms/apple-silicon-local-llm-guide-2026)',
          '[로컬 LLM용 M5 Pro vs M5 Max: 사양과 속도 추정치](/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[로컬 LLM에 필요한 통합 메모리 용량](/local-llms/how-much-unified-memory-for-local-llm)',
          '[MLX vs Ollama vs llama.cpp 비교](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Mac에서 Ollama 설치 가이드](/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[Apple Silicon에서 70B 모델 실행하기](/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[LLM 양자화 해설](/local-llms/llm-quantization-explained)',
          '[Qwen vs Llama vs Mistral 비교](/local-llms/qwen-vs-llama-vs-mistral)',
          '[Apple 온디바이스 AI vs 실제 로컬 LLM: WWDC 2026이 실제로 바꾼 것](/ko/local-llms/apple-on-device-ai-vs-local-llms) -- Apple on-device AI vs local LLMs',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '두 가지 모델을 동시에 실행할 수 있습니까?', a: '예, 환경 변수에 `OLLAMA_MAX_LOADED_MODELS=2`를 설정하십시오. 64GB에서는 8B와 32B 모델을 동시에 실행할 수 있습니다.' },
          { q: '초보자에게 가장 좋은 모델은 무엇입니까?', a: 'Llama 3.1 8B는 실용적인 출발점입니다. 지원이 폭넓고 Q4_K_M 다운로드는 4.9 GB입니다. 16GB Mac이면 macOS와 컨텍스트를 위한 여유가 있습니다.' },
          { q: 'Mixtral 8x7B는 Llama 8B보다 빠릅니까?', a: '기대하지 않는 편이 좋습니다. Mixtral 8x7B는 다운로드가 훨씬 큽니다(Ollama Q4 기준 26 GB, Llama 3.1 8B Q4는 4.9 GB). [Mistral에 따르면](https://mistral.ai/news/mixtral-of-experts/) 토큰마다 129억 개의 파라미터를 사용해 8B보다 많으므로, 비슷한 양자화에서는 8B 모델이 더 빠를 것으로 예상됩니다. PromptQuorum은 측정하지 않았습니다. 어느 쪽이 나은지는 작업에 따라 다릅니다.' },
          { q: '2026년 최고의 로컬 LLM은 무엇입니까?', a: 'Apple Silicon 대부분의 사용자에게는 Qwen3(Mac에 맞는 크기)은 좋은 선택이며, 128GB Mac에서는 Llama 3.3 70B도 좋은 선택입니다. 16GB의 경우 [Phi-4](/local-llms/llm-quantization-explained)가 작지만 유능한 선택입니다.' },
          { q: 'Mac에서 Llama 3.1 405B를 실행할 수 있습니까?', a: '통합 메모리가 매우 커야만 가능합니다. Ollama의 Llama 3.1 405B Q4 다운로드는 약 229~243 GB로 M5 Max의 최대치 128GB를 크게 넘습니다. 용량만 보면 512GB Mac Studio가 필요합니다. 이전 512GB 구성이나, Apple이 512GB 옵션을 표기한 M5 Ultra입니다(2026년 8월 25일 발표, 512GB 구성은 2026년 10월 말로 안내). $5,499는 96GB M5 Ultra의 시작가이므로 512GB는 더 비쌉니다. Mac에서 405B를 시험하지는 않았습니다.' },
          { q: 'Qwen이 로컬 사용에서 Llama보다 낫습니까?', a: '작업과 모델 크기에 따라 다릅니다. 모델 카드를 비교하고 각 라이선스를 확인한 뒤 직접 작성한 프롬프트로 두 모델을 시험해 보십시오. PromptQuorum은 직접 비교 테스트를 하지 않았습니다.' },
          { q: '실제로 유용한 최소 모델은 무엇입니까?', a: '파라미터 3.8B의 Phi-4 Mini입니다. 채팅과 Q&A에서 크기에 비해 유능합니다. 코딩이나 복잡한 추론에는 Llama 3.1 8B 또는 [Qwen3 14B](/local-llms/qwen-vs-llama-vs-mistral)로 이동하십시오.' },
          { q: 'vLLM이 Apple Silicon에서 실행됩니까?', a: 'Apple Silicon 지원 상황은 바뀔 수 있으므로 최신 [vLLM 문서](https://docs.vllm.ai)를 확인하십시오. vLLM은 주로 많은 요청을 처리하는 용도를 목표로 합니다. Mac을 혼자 사용한다면 Ollama나 LM Studio로 시작하는 편이 더 간단합니다. PromptQuorum은 Mac에서 vLLM을 측정하지 않았습니다.' },
          { q: 'MacBook Air M5는 어떤 모델을 실행할 수 있습니까?', a: 'Apple은 [MacBook Air](https://www.apple.com/macbook-air/specs/)를 M5, 통합 메모리 16, 24, 32GB, 대역폭 153 GB/s로 표기합니다. M5 Pro 대역폭의 절반이므로 위의 M5 Pro와 M5 Max 수치는 적용되지 않습니다. 16GB에서는 Phi-4(9.1 GB)가 여유가 크지 않게 들어갑니다(추정 약 10~13 tok/s). 24GB 이상이면 Llama 3.1 8B Q8도 선택할 수 있습니다(추정 약 11~14 tok/s). 긴 생성 작업에서는 속도가 더 낮아질 수 있습니다.' },
          { q: '128GB RAM MacBook Pro M5 Max에 가장 적합한 구성은 무엇입니까?', a: '일상 사용에는 Llama 3.3 70B Q5_K_M(50 GB)을 추천합니다. 컨텍스트 길이에 따라 `OLLAMA_MAX_LOADED_MODELS=2`로 Qwen3 14B Q4(9.3 GB)나 DeepSeek Coder V2 16B(8.9 GB)를 함께 로드할 여유가 있습니다. 40코어 GPU(614 GB/s)에서는 70B Q5가 약 7~10 tok/s로 예상됩니다. Llama 3.3 70B Q8(75 GB)도 들어가며 약 5~7 tok/s입니다. 두 수치 모두 추정치이며 벤치마크가 아닙니다.' },
        ],
      },
    },
    ctaText: 'Mac에 맞는 모델을 선택하셨습니까? PromptQuorum으로 해당 모델의 응답을 GPT-4, Claude, Gemini 및 22개 이상의 모델과 나란히 비교해 보십시오 — 로컬 Llama, Qwen 또는 Phi 모델이 특정 사용 사례에서 클라우드 품질에 부합하는지 검증하십시오.',
  },
}
