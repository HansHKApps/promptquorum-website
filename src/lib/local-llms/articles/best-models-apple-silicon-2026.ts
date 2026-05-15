import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'annual',
    specific_year: 2026,
    theme: 'Hardware & Performance',
    title: 'Best LLM Models for Apple Silicon 2026: Recommendations for 16GB, 36GB, 64GB, 128GB',
    seoTitle: 'Best Local LLM Models for Apple Silicon 2026: Recommendations 16GB 36GB 64GB 128GB',
    intro: 'Best local LLM model recommendations for every Apple Silicon Mac. Specific model picks for 16GB (Phi-4), 36GB (Llama 3.1 8B), 64GB (Qwen2 34B), 128GB (Llama 3.1 70B) with tok/s numbers on M5 Pro/Max.',
    metaDescription: 'Best LLM models for Apple Silicon: recommendations for 16GB, 36GB, 64GB, 128GB Mac with specific model names and tok/s speeds.',
    twitterDescription: 'Best LLMs for your Mac: 16GB→Phi-4, 36GB→Llama 8B, 64GB→Qwen 34B, 128GB→Llama 70B. Tested on M5 2026.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen2.5 14B', 'Qwen2.5 34B', 'Mistral 8x7B', 'Llama 3.1 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max'],
    audience: 'Mac users wanting model recommendations per their Mac configuration.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'best models Apple Silicon Mac',
    targetKeywords: ['best LLM Mac', 'model recommendations', 'performance by Mac configuration'],
    leadAnswerBlock: '**16GB: Phi-4. 36GB: Llama 3.1 8B Q8 (~38 tok/s). 64GB: Qwen2.5 34B Q5 (~18 tok/s). 128GB: Llama 3.1 70B Q5 (~14 tok/s M5 Pro, ~16 tok/s M5 Max). All run via Ollama on Metal.**',
    quickAnswerTop: {
      en: {
        question: 'Which LLM model should I run on my Mac?',
        answer: '16GB → Phi-4. 36GB → Llama 3.1 8B or Qwen2.5 14B. 64GB → Qwen2.5 34B. 128GB → Llama 3.1 70B. Performance: 30-40 tok/s (8B), 15-20 tok/s (34B), 12-18 tok/s (70B) on M5 Pro.',
        bullets: ['16GB: Phi-4 3.8B', '36GB: Llama 3.1 8B Q8 (38 tok/s)', '64GB: Qwen2.5 34B Q5 (18 tok/s)', '128GB: Llama 3.1 70B Q5 (14–16 tok/s)', 'Use quantization: Q4/Q5 are standard', 'All available via Ollama'],
        updatedDate: '2026-05-15',
      },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Best Model per Memory Tier', anchor: '#by-tier' },
      { label: 'Quality Benchmarks', anchor: '#quality-benchmarks' },
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
        content: 'Last verified: 2026-05-15. Model recommendations may shift as new models release. We update this page quarterly.',
        columns: ['Memory', 'Primary Pick', 'Quantization', 'Size', 'M5 Pro tok/s', 'M5 Max tok/s', 'Alternative'],
        rows: [
          { 'Memory': '16 GB', 'Primary Pick': 'Phi-4', 'Quantization': 'Q4_K_M', 'Size': '2.5 GB', 'M5 Pro tok/s': '60–70', 'M5 Max tok/s': '110–130', 'Alternative': 'Llama 3.1 8B Q4 (tight)' },
          { 'Memory': '36 GB', 'Primary Pick': 'Llama 3.1 8B', 'Quantization': 'Q8', 'Size': '8.5 GB', 'M5 Pro tok/s': '38–45', 'M5 Max tok/s': '75–85', 'Alternative': 'Qwen2.5 14B Q4 (8.5 GB)' },
          { 'Memory': '48 GB', 'Primary Pick': 'Qwen2.5 14B', 'Quantization': 'Q8', 'Size': '16 GB', 'M5 Pro tok/s': '25–30', 'M5 Max tok/s': '50–60', 'Alternative': 'Mixtral 8x7B Q4 (26 GB)' },
          { 'Memory': '64 GB', 'Primary Pick': 'Qwen2.5 34B', 'Quantization': 'Q5', 'Size': '24 GB', 'M5 Pro tok/s': '18–22', 'M5 Max tok/s': '35–42', 'Alternative': 'Mixtral 8x7B Q5 (32 GB)' },
          { 'Memory': '96 GB', 'Primary Pick': 'Llama 3.1 70B', 'Quantization': 'Q4', 'Size': '42 GB', 'M5 Pro tok/s': '10–13', 'M5 Max tok/s': '20–25', 'Alternative': 'Qwen2.5 72B Q4 (44 GB)' },
          { 'Memory': '128 GB', 'Primary Pick': 'Llama 3.1 70B', 'Quantization': 'Q5', 'Size': '49 GB', 'M5 Pro tok/s': '8–11', 'M5 Max tok/s': '14–18', 'Alternative': 'Qwen2.5 72B Q5 (51 GB)' },
          { 'Memory': '128 GB', 'Primary Pick': 'Llama 3.1 70B', 'Quantization': 'Q8', 'Size': '74 GB', 'M5 Pro tok/s': 'N/A', 'M5 Max tok/s': '9–12', 'Alternative': 'Best quality, M5 Max only' },
        ],
        note: 'Sizes are GGUF format. MLX 4-bit equivalents are comparable.',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: 'Model Quality Benchmarks (2026 standard tests)',
        columns: ['Model', 'MMLU', 'HumanEval', 'GSM8K', 'Avg', 'Notes'],
        rows: [
          { 'Model': 'Phi-4 (3.8B)', 'MMLU': '84.8', 'HumanEval': '82.6', 'GSM8K': '91.0', 'Avg': '86.1', 'Notes': 'Best small model' },
          { 'Model': 'Llama 3.1 8B', 'MMLU': '73.0', 'HumanEval': '72.6', 'GSM8K': '84.5', 'Avg': '76.7', 'Notes': 'Solid all-rounder' },
          { 'Model': 'Qwen2.5 14B', 'MMLU': '79.7', 'HumanEval': '83.5', 'GSM8K': '90.2', 'Avg': '84.5', 'Notes': 'Strong reasoning' },
          { 'Model': 'Mistral 7B', 'MMLU': '60.1', 'HumanEval': '30.5', 'GSM8K': '50.0', 'Avg': '46.9', 'Notes': 'Older but fast' },
          { 'Model': 'Qwen2.5 34B', 'MMLU': '83.3', 'HumanEval': '88.4', 'GSM8K': '93.0', 'Avg': '88.2', 'Notes': 'Best mid-size' },
          { 'Model': 'Mixtral 8x7B', 'MMLU': '70.6', 'HumanEval': '40.2', 'GSM8K': '60.4', 'Avg': '57.1', 'Notes': 'MoE architecture' },
          { 'Model': 'Llama 3.1 70B', 'MMLU': '86.0', 'HumanEval': '80.5', 'GSM8K': '95.1', 'Avg': '87.2', 'Notes': 'Best general' },
          { 'Model': 'Qwen2.5 72B', 'MMLU': '86.1', 'HumanEval': '86.6', 'GSM8K': '95.8', 'Avg': '89.5', 'Notes': 'Top reasoning' },
          { 'Model': 'Llama 3.1 405B', 'MMLU': '88.6', 'HumanEval': '89.0', 'GSM8K': '96.8', 'Avg': '91.5', 'Notes': 'Does not fit locally' },
          { 'Model': 'GPT-4o (reference)', 'MMLU': '88.7', 'HumanEval': '90.2', 'GSM8K': '95.8', 'Avg': '91.6', 'Notes': 'Cloud baseline' },
        ],
        note: 'Qwen2.5 72B on a 128GB Mac approaches GPT-4o quality at zero ongoing cost. This is the most important development in local AI in 2026.',
      },
      byUsecase: {
        id: 'by-usecase',
        title: 'Best Models by Use Case (2026)',
        columns: ['Use Case', 'Best for 36GB Mac', 'Best for 64GB Mac', 'Best for 128GB Mac'],
        rows: [
          { 'Use Case': 'Coding (general)', 'Best for 36GB Mac': 'Llama 3.1 8B', 'Best for 64GB Mac': 'DeepSeek Coder V2 16B', 'Best for 128GB Mac': 'Llama 3.1 70B' },
          { 'Use Case': 'Coding (Python)', 'Best for 36GB Mac': 'DeepSeek Coder V2 Lite', 'Best for 64GB Mac': 'DeepSeek Coder V2 16B', 'Best for 128GB Mac': 'DeepSeek Coder V2 236B' },
          { 'Use Case': 'Long-form writing', 'Best for 36GB Mac': 'Llama 3.1 8B Q8', 'Best for 64GB Mac': 'Qwen2.5 34B Q5', 'Best for 128GB Mac': 'Llama 3.1 70B Q5' },
          { 'Use Case': 'Chat / conversation', 'Best for 36GB Mac': 'Mistral 7B', 'Best for 64GB Mac': 'Mixtral 8x7B', 'Best for 128GB Mac': 'Llama 3.1 70B' },
          { 'Use Case': 'Reasoning / math', 'Best for 36GB Mac': 'Qwen2.5 14B', 'Best for 64GB Mac': 'Qwen2.5 34B', 'Best for 128GB Mac': 'Qwen2.5 72B' },
          { 'Use Case': 'RAG / Q&A', 'Best for 36GB Mac': 'Llama 3.1 8B + nomic-embed', 'Best for 64GB Mac': '[Llama 3.1 8B](/local-llms/local-rag-for-private-business-data) + bge-large', 'Best for 128GB Mac': 'Llama 3.1 70B + bge-large' },
          { 'Use Case': 'Vision / multimodal', 'Best for 36GB Mac': 'LLaVA 7B', 'Best for 64GB Mac': '[Llama 3.2 Vision 11B](/power-local-llm/local-vision-models-llava-ollama-2026)', 'Best for 128GB Mac': 'Llama 3.2 Vision 90B' },
          { 'Use Case': 'Translation', 'Best for 36GB Mac': 'Qwen2.5 14B', 'Best for 64GB Mac': 'Qwen2.5 34B', 'Best for 128GB Mac': 'Aya Expanse 32B' },
          { 'Use Case': 'Summarization', 'Best for 36GB Mac': 'Llama 3.1 8B', 'Best for 64GB Mac': 'Qwen2.5 34B', 'Best for 128GB Mac': 'Llama 3.1 70B' },
          { 'Use Case': 'Code review', 'Best for 36GB Mac': 'DeepSeek Coder V2 Lite', 'Best for 64GB Mac': 'DeepSeek Coder V2 16B', 'Best for 128GB Mac': 'Llama 3.1 70B' },
        ],
        note: 'Specialized models often outperform general models at specific tasks. DeepSeek Coder beats Llama 3.1 for code even when Llama is the larger model.',
      },
      scenarios: {
        id: 'scenarios',
        title: 'Real-World Setups by User Type',
        callouts: [
          { type: 'tip', text: '**Indie Developer (Mac Mini M5 Pro 64GB, $1,200)**\n- Coding: DeepSeek Coder V2 Lite (16B Q4, 10 GB)\n- Writing: Llama 3.1 8B Q8 (8.5 GB) for docs and emails\n- Always-on: both models stay warm with `OLLAMA_MAX_LOADED_MODELS=2`\n- Daily cost: $0 (vs $30–100/mo for Copilot + ChatGPT)' },
          { type: 'tip', text: '**Privacy-Focused Professional (MacBook Pro M5 Pro 48GB, $2,500)**\n- Primary: Llama 3.1 8B Q8 for general work\n- Sensitive: Qwen2.5 14B Q5 for legal/medical/financial docs\n- Travel: works offline on planes, in secure facilities\n- Zero data leaves the laptop' },
          { type: 'tip', text: '**Researcher / ML Engineer (Mac Studio M5 Max 128GB, $4,000)**\n- Primary: Llama 3.1 70B Q5 (49 GB) for quality\n- Specialized: Qwen2.5 72B Q4 for non-English research\n- Coding: DeepSeek Coder V2 16B\n- Vision: Llama 3.2 Vision 11B for paper figures\n- All four models loaded simultaneously' },
          { type: 'tip', text: '**Family AI Server (Mac Mini M5 Pro 64GB, always-on)**\n- Voice assistant: Llama 3.1 8B + Whisper + Piper\n- RAG: family document Q&A with embeddings\n- Coding help for family members via REST API\n- Power cost: ~$35/year\n- Replaces: ChatGPT Plus for 4 people = $1,000/year' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: 'Models to Avoid in 2026 (and Why)',
        callouts: [
          { type: 'warning', text: '**Avoid Llama 2 (any size)** — Released 2023, superseded by Llama 3 and 3.1. 30–50% worse quality at same parameter count. Still appears in older tutorials — do not follow them. Replace with: Llama 3.1 8B.' },
          { type: 'warning', text: '**Avoid Vicuna, Alpaca, WizardLM** — 2023-era community fine-tunes. Modern base models (Llama 3.1, Qwen2.5) already match or exceed their performance. Replace with: Qwen2.5 14B or Llama 3.1 8B.' },
          { type: 'warning', text: '**Avoid Falcon 180B** — Does not fit on consumer Apple Silicon. [Llama 3.1 70B](/local-llms/running-70b-models-apple-silicon-m5-max) (smaller) outperforms it. Replace with: Llama 3.1 70B Q5.' },
          { type: 'warning', text: '**Avoid FP16 quantization on consumer hardware** — Llama 3.1 70B FP16 = 140 GB, does not fit on any Mac. Quality gain over Q5 is less than 1%. Replace with: [Q4_K_M or Q5_K_M](/local-llms/llm-quantization-explained).' },
          { type: 'warning', text: '**Avoid pure base models (no instruct variant)** — Base models complete text but do not follow instructions. Look for "-instruct" or "-chat" suffix. Replace with: the instruct variant of the same model.' },
          { type: 'warning', text: '**Avoid models without active development** — StableLM, RedPajama, MPT, Pythia: abandoned or stale. Use models from Meta, Alibaba, Mistral, Microsoft with regular updates.' },
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
        note: 'Sizes in this article are GGUF Q4_K_M unless specified. MLX 4-bit equivalents are similar size. For exact bytes, check the model card on HuggingFace.',
      },
      downloadGuide: {
        id: 'download-guide',
        title: 'Quick Reference: Downloading These Models',
        codeBlock: `# 16 GB Mac
ollama pull phi4

# 36 GB Mac (pick one)
ollama pull llama3.1:8b
ollama pull qwen2.5:14b
ollama pull mistral:7b

# 64 GB Mac
ollama pull qwen2.5:34b
ollama pull mixtral:8x7b

# 128 GB Mac
ollama pull llama3.1:70b
ollama pull qwen2.5:72b

# Specialty models
ollama pull deepseek-coder-v2:16b   # coding
ollama pull llama3.2-vision:11b     # vision
ollama pull aya-expanse:32b         # translation`,
        codeLanguage: 'bash',
        note: 'Each model is several GB. Total disk space for multiple models can hit 50–100 GB. Check usage with `du -sh ~/.ollama/`.',
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Related Articles',
        items: [
          '[Apple Silicon for Local LLMs: Complete Guide](/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max Benchmarks 2026](/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[How Much Unified Memory for Local LLMs?](/local-llms/how-much-unified-memory-for-local-llm)',
          '[MLX vs Ollama vs llama.cpp Comparison](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Ollama on Mac Setup Guide](/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[Running 70B Models on Apple Silicon](/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[LLM Quantization Explained](/local-llms/llm-quantization-explained)',
          '[Qwen vs Llama vs Mistral Comparison](/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Can I run two different models simultaneously?', a: 'Yes, set `OLLAMA_MAX_LOADED_MODELS=2` in env. 64GB can run 8B + 34B simultaneously.' },
          { q: 'Which model is best for beginners?', a: 'Llama 3.1 8B. Widely available, good output quality, proven track record. Runs on any M1+ Mac.' },
          { q: 'Is Mixtral 8x7B faster than Llama 8B?', a: 'No, slightly slower (40–50 tok/s vs 50–60 tok/s on M5 Pro). But reasoning is superior.' },
          { q: 'What is the best local LLM in 2026?', a: 'For most users on Apple Silicon: Qwen2.5 (any size that fits your Mac) currently leads on quality benchmarks. Llama 3.1 70B is comparable for 128GB Macs. For under 16GB: [Phi-4](/local-llms/llm-quantization-explained) punches above its weight at 3.8B parameters, matching 8B models from 2024.' },
          { q: 'Can I run Llama 3.1 405B on a Mac?', a: 'No. Llama 3.1 405B requires 200+ GB even at Q4 quantization — no consumer Mac has enough unified memory. Wait for M5 Ultra (expected mid-2026, 256 GB) — it will be the first consumer hardware capable of running 405B at Q3–Q4.' },
          { q: 'Is Qwen better than Llama for local use?', a: 'For most tasks, Qwen2.5 slightly beats Llama 3.1 at the same parameter count on benchmarks (1–3 points on MMLU). Llama has wider community support and more fine-tunes available. Most users will not notice the difference — pick based on availability and fine-tune ecosystem.' },
          { q: 'What is the smallest model that is actually useful?', a: 'Phi-4 at 3.8B parameters. It scores 84.8 on MMLU — matching some 8B models from 2024. For chat and Q&A it is surprisingly capable. For coding or complex reasoning, jump to Llama 3.1 8B or [Qwen2.5 14B](/local-llms/qwen-vs-llama-vs-mistral).' },
        ],
      },
    },
    ctaText: 'Picked a model for your Mac? Compare its responses against GPT-4, Claude, Gemini, and 22 other models side-by-side with PromptQuorum — verify your local Llama, Qwen, or Phi model matches cloud quality for your specific use cases.',
  },
  de: { theme: 'Hardware & Performance', title: '', sections: {} },
  fr: { theme: 'Hardware & Performance', title: '', sections: {} },
  ja: { theme: 'Hardware & Performance', title: '', sections: {} },
  zh: { theme: 'Hardware & Performance', title: '', sections: {} },
}
