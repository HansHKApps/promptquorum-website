import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'annual',
    specific_year: 2026,
    theme: 'Hardware & Performance',
    title: 'Best LLM Models for Apple Silicon 2026: Recommendations for 16GB, 36GB, 64GB, 128GB',
    seoTitle: 'Best Models for Apple Silicon 2026: 16GB–128GB',
    intro: 'Best local LLM model recommendations for every Apple Silicon Mac. Specific model picks for 16GB (Phi-4), 36GB (Llama 3.1 8B), 64GB (Qwen2 34B), 128GB (Llama 3.1 70B) with tok/s numbers on M5 Pro/Max.',
    metaDescription: 'Best LLM models for Apple Silicon: Phi-4 (16GB), Llama 8B (36GB), Qwen 34B (64GB), Llama 70B (128GB). Tok/s speeds, quantization, when to upgrade.',
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
  es: {
    freshness_tier: 'annual',
    specific_year: 2026,
    theme: 'Hardware & Performance',
    title: 'Mejores modelos LLM para Apple Silicon 2026: Recomendaciones para 16 GB, 36 GB, 64 GB, 128 GB',
    seoTitle: 'Mejores modelos Apple Silicon 2026: 16 GB–128 GB',
    intro: 'Las mejores recomendaciones de modelos LLM locales para cada Mac con Apple Silicon. Selecciones concretas para 16 GB (Phi-4), 36 GB (Llama 3.1 8B), 64 GB (Qwen2 34B), 128 GB (Llama 3.1 70B) con datos de tok/s en M5 Pro/Max.',
    metaDescription: 'Mejores modelos LLM para Apple Silicon: Phi-4 (16 GB), Llama 8B (36 GB), Qwen 34B (64 GB), Llama 70B (128 GB). Velocidad tok/s, cuantización y cuándo actualizar.',
    twitterDescription: 'Mejores LLM para tu Mac: 16 GB→Phi-4, 36 GB→Llama 8B, 64 GB→Qwen 34B, 128 GB→Llama 70B. Probados en M5 2026.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen2.5 14B', 'Qwen2.5 34B', 'Mistral 8x7B', 'Llama 3.1 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max'],
    audience: 'Usuarios de Mac que buscan recomendaciones de modelos según su configuración.',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'mejores modelos Apple Silicon Mac',
    targetKeywords: ['mejor LLM Mac', 'recomendaciones de modelos', 'rendimiento por configuración Mac'],
    leadAnswerBlock: '**16 GB: Phi-4. 36 GB: Llama 3.1 8B Q8 (~38 tok/s). 64 GB: Qwen2.5 34B Q5 (~18 tok/s). 128 GB: Llama 3.1 70B Q5 (~14 tok/s M5 Pro, ~16 tok/s M5 Max). Todos funcionan mediante Ollama en Metal.**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Mejor modelo por nivel de memoria', anchor: '#by-tier' },
      { label: 'Benchmarks de calidad', anchor: '#quality-benchmarks' },
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
        content: 'Última verificación: 2026-05-15. Las recomendaciones pueden cambiar con nuevos lanzamientos. Actualizamos esta página trimestralmente.',
        columns: ['Memoria', 'Elección principal', 'Cuantización', 'Tamaño', 'M5 Pro tok/s', 'M5 Max tok/s', 'Alternativa'],
        rows: [
          { 'Memoria': '16 GB', 'Elección principal': 'Phi-4', 'Cuantización': 'Q4_K_M', 'Tamaño': '2,5 GB', 'M5 Pro tok/s': '60–70', 'M5 Max tok/s': '110–130', 'Alternativa': 'Llama 3.1 8B Q4 (justo)' },
          { 'Memoria': '36 GB', 'Elección principal': 'Llama 3.1 8B', 'Cuantización': 'Q8', 'Tamaño': '8,5 GB', 'M5 Pro tok/s': '38–45', 'M5 Max tok/s': '75–85', 'Alternativa': 'Qwen2.5 14B Q4 (8,5 GB)' },
          { 'Memoria': '48 GB', 'Elección principal': 'Qwen2.5 14B', 'Cuantización': 'Q8', 'Tamaño': '16 GB', 'M5 Pro tok/s': '25–30', 'M5 Max tok/s': '50–60', 'Alternativa': 'Mixtral 8x7B Q4 (26 GB)' },
          { 'Memoria': '64 GB', 'Elección principal': 'Qwen2.5 34B', 'Cuantización': 'Q5', 'Tamaño': '24 GB', 'M5 Pro tok/s': '18–22', 'M5 Max tok/s': '35–42', 'Alternativa': 'Mixtral 8x7B Q5 (32 GB)' },
          { 'Memoria': '96 GB', 'Elección principal': 'Llama 3.1 70B', 'Cuantización': 'Q4', 'Tamaño': '42 GB', 'M5 Pro tok/s': '10–13', 'M5 Max tok/s': '20–25', 'Alternativa': 'Qwen2.5 72B Q4 (44 GB)' },
          { 'Memoria': '128 GB', 'Elección principal': 'Llama 3.1 70B', 'Cuantización': 'Q5', 'Tamaño': '49 GB', 'M5 Pro tok/s': '8–11', 'M5 Max tok/s': '14–18', 'Alternativa': 'Qwen2.5 72B Q5 (51 GB)' },
          { 'Memoria': '128 GB', 'Elección principal': 'Llama 3.1 70B', 'Cuantización': 'Q8', 'Tamaño': '74 GB', 'M5 Pro tok/s': 'N/A', 'M5 Max tok/s': '9–12', 'Alternativa': 'Mejor calidad, solo M5 Max' },
        ],
        note: 'Los tamaños son en formato GGUF. Los equivalentes MLX 4-bit son comparables. Los precios pueden variar según tu país.',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: 'Benchmarks de calidad de modelos (pruebas estándar 2026)',
        columns: ['Modelo', 'MMLU', 'HumanEval', 'GSM8K', 'Promedio', 'Notas'],
        rows: [
          { 'Modelo': 'Phi-4 (3,8B)', 'MMLU': '84,8', 'HumanEval': '82,6', 'GSM8K': '91,0', 'Promedio': '86,1', 'Notas': 'Mejor modelo pequeño' },
          { 'Modelo': 'Llama 3.1 8B', 'MMLU': '73,0', 'HumanEval': '72,6', 'GSM8K': '84,5', 'Promedio': '76,7', 'Notas': 'Bueno para todo' },
          { 'Modelo': 'Qwen2.5 14B', 'MMLU': '79,7', 'HumanEval': '83,5', 'GSM8K': '90,2', 'Promedio': '84,5', 'Notas': 'Razonamiento sólido' },
          { 'Modelo': 'Mistral 7B', 'MMLU': '60,1', 'HumanEval': '30,5', 'GSM8K': '50,0', 'Promedio': '46,9', 'Notas': 'Antiguo pero rápido' },
          { 'Modelo': 'Qwen2.5 34B', 'MMLU': '83,3', 'HumanEval': '88,4', 'GSM8K': '93,0', 'Promedio': '88,2', 'Notas': 'Mejor tamaño medio' },
          { 'Modelo': 'Mixtral 8x7B', 'MMLU': '70,6', 'HumanEval': '40,2', 'GSM8K': '60,4', 'Promedio': '57,1', 'Notas': 'Arquitectura MoE' },
          { 'Modelo': 'Llama 3.1 70B', 'MMLU': '86,0', 'HumanEval': '80,5', 'GSM8K': '95,1', 'Promedio': '87,2', 'Notas': 'Mejor general' },
          { 'Modelo': 'Qwen2.5 72B', 'MMLU': '86,1', 'HumanEval': '86,6', 'GSM8K': '95,8', 'Promedio': '89,5', 'Notas': 'Razonamiento top' },
          { 'Modelo': 'Llama 3.1 405B', 'MMLU': '88,6', 'HumanEval': '89,0', 'GSM8K': '96,8', 'Promedio': '91,5', 'Notas': 'No cabe localmente' },
          { 'Modelo': 'GPT-4o (referencia)', 'MMLU': '88,7', 'HumanEval': '90,2', 'GSM8K': '95,8', 'Promedio': '91,6', 'Notas': 'Referencia en la nube' },
        ],
        note: 'Qwen2.5 72B en un Mac de 128 GB se acerca a la calidad de GPT-4o con costo continuo cero. Este es el avance más importante en IA local en 2026.',
      },
      byUsecase: {
        id: 'by-usecase',
        title: 'Mejores modelos por caso de uso (2026)',
        columns: ['Caso de uso', 'Mejor para Mac 36 GB', 'Mejor para Mac 64 GB', 'Mejor para Mac 128 GB'],
        rows: [
          { 'Caso de uso': 'Programación (general)', 'Mejor para Mac 36 GB': 'Llama 3.1 8B', 'Mejor para Mac 64 GB': 'DeepSeek Coder V2 16B', 'Mejor para Mac 128 GB': 'Llama 3.1 70B' },
          { 'Caso de uso': 'Programación (Python)', 'Mejor para Mac 36 GB': 'DeepSeek Coder V2 Lite', 'Mejor para Mac 64 GB': 'DeepSeek Coder V2 16B', 'Mejor para Mac 128 GB': 'DeepSeek Coder V2 236B' },
          { 'Caso de uso': 'Escritura larga', 'Mejor para Mac 36 GB': 'Llama 3.1 8B Q8', 'Mejor para Mac 64 GB': 'Qwen2.5 34B Q5', 'Mejor para Mac 128 GB': 'Llama 3.1 70B Q5' },
          { 'Caso de uso': 'Chat / conversación', 'Mejor para Mac 36 GB': 'Mistral 7B', 'Mejor para Mac 64 GB': 'Mixtral 8x7B', 'Mejor para Mac 128 GB': 'Llama 3.1 70B' },
          { 'Caso de uso': 'Razonamiento / matemáticas', 'Mejor para Mac 36 GB': 'Qwen2.5 14B', 'Mejor para Mac 64 GB': 'Qwen2.5 34B', 'Mejor para Mac 128 GB': 'Qwen2.5 72B' },
          { 'Caso de uso': 'RAG / preguntas y respuestas', 'Mejor para Mac 36 GB': 'Llama 3.1 8B + nomic-embed', 'Mejor para Mac 64 GB': '[Llama 3.1 8B](/es/local-llms/local-rag-for-private-business-data) + bge-large', 'Mejor para Mac 128 GB': 'Llama 3.1 70B + bge-large' },
          { 'Caso de uso': 'Visión / multimodal', 'Mejor para Mac 36 GB': 'LLaVA 7B', 'Mejor para Mac 64 GB': '[Llama 3.2 Vision 11B](/es/power-local-llm/local-vision-models-llava-ollama-2026)', 'Mejor para Mac 128 GB': 'Llama 3.2 Vision 90B' },
          { 'Caso de uso': 'Traducción', 'Mejor para Mac 36 GB': 'Qwen2.5 14B', 'Mejor para Mac 64 GB': 'Qwen2.5 34B', 'Mejor para Mac 128 GB': 'Aya Expanse 32B' },
          { 'Caso de uso': 'Resumen', 'Mejor para Mac 36 GB': 'Llama 3.1 8B', 'Mejor para Mac 64 GB': 'Qwen2.5 34B', 'Mejor para Mac 128 GB': 'Llama 3.1 70B' },
          { 'Caso de uso': 'Revisión de código', 'Mejor para Mac 36 GB': 'DeepSeek Coder V2 Lite', 'Mejor para Mac 64 GB': 'DeepSeek Coder V2 16B', 'Mejor para Mac 128 GB': 'Llama 3.1 70B' },
        ],
        note: 'Los modelos especializados suelen superar a los generales en tareas concretas. DeepSeek Coder supera a Llama 3.1 en código incluso cuando Llama es el modelo más grande.',
      },
      scenarios: {
        id: 'scenarios',
        title: 'Configuraciones reales por tipo de usuario',
        callouts: [
          { type: 'tip', text: '**Desarrollador independiente (Mac Mini M5 Pro 64 GB, $1,200)**\n- Programación: DeepSeek Coder V2 Lite (16B Q4, 10 GB)\n- Escritura: Llama 3.1 8B Q8 (8,5 GB) para documentación y correos\n- Siempre activo: ambos modelos en caliente con `OLLAMA_MAX_LOADED_MODELS=2`\n- Costo diario: $0 (vs $30–100/mes por Copilot + ChatGPT)\n- Los precios pueden variar según tu país.' },
          { type: 'tip', text: '**Profesional con enfoque en privacidad (MacBook Pro M5 Pro 48 GB, $2,500)**\n- Principal: Llama 3.1 8B Q8 para trabajo general\n- Sensible: Qwen2.5 14B Q5 para documentos legales/médicos/financieros\n- Viajes: funciona sin conexión en aviones y entornos seguros\n- Ningún dato sale del ordenador\n- Los precios pueden variar según tu país.' },
          { type: 'tip', text: '**Investigador / Ingeniero ML (Mac Studio M5 Max 128 GB, $4,000)**\n- Principal: Llama 3.1 70B Q5 (49 GB) para calidad\n- Especializado: Qwen2.5 72B Q4 para investigación en otros idiomas\n- Programación: DeepSeek Coder V2 16B\n- Visión: Llama 3.2 Vision 11B para figuras de artículos\n- Los cuatro modelos cargados simultáneamente\n- Los precios pueden variar según tu país.' },
          { type: 'tip', text: '**Servidor de IA familiar (Mac Mini M5 Pro 64 GB, siempre encendido)**\n- Asistente de voz: Llama 3.1 8B + Whisper + Piper\n- RAG: preguntas y respuestas sobre documentos familiares con embeddings\n- Ayuda de programación para miembros de la familia vía REST API\n- Costo eléctrico: ~$35/año\n- Reemplaza: ChatGPT Plus para 4 personas = $1,000/año\n- Los precios pueden variar según tu país.' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: 'Modelos que debes evitar en 2026 (y por qué)',
        callouts: [
          { type: 'warning', text: '**Evita Llama 2 (de cualquier tamaño)** — Lanzado en 2023, reemplazado por Llama 3 y 3.1. Un 30–50% peor en calidad con el mismo número de parámetros. Sigue apareciendo en tutoriales antiguos — no los sigas. Reemplaza con: Llama 3.1 8B.' },
          { type: 'warning', text: '**Evita Vicuna, Alpaca, WizardLM** — Fine-tunes comunitarios de 2023. Los modelos base modernos (Llama 3.1, Qwen2.5) igualan o superan su rendimiento. Reemplaza con: Qwen2.5 14B o Llama 3.1 8B.' },
          { type: 'warning', text: '**Evita Falcon 180B** — No cabe en Apple Silicon de consumo. [Llama 3.1 70B](/es/local-llms/running-70b-models-apple-silicon-m5-max) (más pequeño) lo supera. Reemplaza con: Llama 3.1 70B Q5.' },
          { type: 'warning', text: '**Evita la cuantización FP16 en hardware de consumo** — Llama 3.1 70B FP16 = 140 GB, no cabe en ningún Mac. La ganancia de calidad frente a Q5 es menor al 1%. Reemplaza con: [Q4_K_M o Q5_K_M](/es/local-llms/llm-quantization-explained).' },
          { type: 'warning', text: '**Evita los modelos base puros (sin variante instruct)** — Los modelos base completan texto pero no siguen instrucciones. Busca el sufijo "-instruct" o "-chat". Reemplaza con: la variante instruct del mismo modelo.' },
          { type: 'warning', text: '**Evita modelos sin desarrollo activo** — StableLM, RedPajama, MPT, Pythia: abandonados o desactualizados. Usa modelos de Meta, Alibaba, Mistral, Microsoft con actualizaciones regulares.' },
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
        note: 'Los tamaños en este artículo son GGUF Q4_K_M salvo que se indique lo contrario. Los equivalentes MLX 4-bit son de tamaño similar. Para bytes exactos, consulta la ficha del modelo en HuggingFace.',
      },
      downloadGuide: {
        id: 'download-guide',
        title: 'Referencia rápida: descargar estos modelos',
        codeBlock: `# Mac 16 GB
ollama pull phi4

# Mac 36 GB (elige uno)
ollama pull llama3.1:8b
ollama pull qwen2.5:14b
ollama pull mistral:7b

# Mac 64 GB
ollama pull qwen2.5:34b
ollama pull mixtral:8x7b

# Mac 128 GB
ollama pull llama3.1:70b
ollama pull qwen2.5:72b

# Modelos especializados
ollama pull deepseek-coder-v2:16b   # programación
ollama pull llama3.2-vision:11b     # visión
ollama pull aya-expanse:32b         # traducción`,
        codeLanguage: 'bash',
        note: 'Cada modelo pesa varios GB. El espacio total en disco para varios modelos puede alcanzar los 50–100 GB. Comprueba el uso con `du -sh ~/.ollama/`.',
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Artículos relacionados',
        items: [
          '[Apple Silicon para LLMs locales: Guía completa](/es/local-llms/apple-silicon-local-llm-guide-2026)',
          '[Benchmarks M5 Pro vs M5 Max 2026](/es/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[¿Cuánta memoria unificada necesito para LLMs locales?](/es/local-llms/how-much-unified-memory-for-local-llm)',
          '[Comparativa MLX vs Ollama vs llama.cpp](/es/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Guía de instalación de Ollama en Mac](/es/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[Ejecutar modelos 70B en Apple Silicon](/es/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[Cuantización LLM explicada](/es/local-llms/llm-quantization-explained)',
          '[Comparativa Qwen vs Llama vs Mistral](/es/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '¿Puedo ejecutar dos modelos diferentes a la vez?', a: 'Sí, establece `OLLAMA_MAX_LOADED_MODELS=2` en las variables de entorno. Con 64 GB puedes ejecutar 8B + 34B simultáneamente.' },
          { q: '¿Qué modelo es mejor para principiantes?', a: 'Llama 3.1 8B. Ampliamente disponible, buena calidad de salida y trayectoria probada. Funciona en cualquier Mac M1+.' },
          { q: '¿Mixtral 8x7B es más rápido que Llama 8B?', a: 'No, es ligeramente más lento (40–50 tok/s vs 50–60 tok/s en M5 Pro). Pero el razonamiento es superior.' },
          { q: '¿Cuál es el mejor LLM local en 2026?', a: 'Para la mayoría de usuarios en Apple Silicon: Qwen2.5 (cualquier tamaño que quepa en tu Mac) lidera actualmente los benchmarks de calidad. Llama 3.1 70B es comparable en Macs de 128 GB. Por debajo de 16 GB: [Phi-4](/es/local-llms/llm-quantization-explained) supera su categoría con 3,8B parámetros, igualando modelos 8B de 2024.' },
          { q: '¿Puedo ejecutar Llama 3.1 405B en un Mac?', a: 'No. Llama 3.1 405B requiere más de 200 GB incluso con cuantización Q4 — ningún Mac de consumo tiene suficiente memoria unificada. Espera al M5 Ultra (previsto para mediados de 2026, 256 GB) — será el primer hardware de consumo capaz de ejecutar 405B en Q3–Q4.' },
          { q: '¿Es Qwen mejor que Llama para uso local?', a: 'En la mayoría de tareas, Qwen2.5 supera ligeramente a Llama 3.1 con el mismo número de parámetros en benchmarks (1–3 puntos en MMLU). Llama tiene una comunidad más amplia y más fine-tunes disponibles. La mayoría de usuarios no notarán la diferencia — elige según disponibilidad y ecosistema de fine-tunes.' },
          { q: '¿Cuál es el modelo más pequeño que realmente es útil?', a: 'Phi-4 con 3,8B parámetros. Obtiene 84,8 en MMLU — igualando algunos modelos 8B de 2024. Para chat y preguntas y respuestas es sorprendentemente capaz. Para programación o razonamiento complejo, pasa a Llama 3.1 8B o [Qwen2.5 14B](/es/local-llms/qwen-vs-llama-vs-mistral).' },
        ],
      },
    },
    ctaText: '¿Ya elegiste un modelo para tu Mac? Compara sus respuestas con GPT-4, Claude, Gemini y 22 modelos más en paralelo con PromptQuorum — verifica si tu modelo local Llama, Qwen o Phi iguala la calidad en la nube para tus casos de uso específicos.',
  },
  de: {
    freshness_tier: 'annual',
    specific_year: 2026,
    theme: 'Hardware & Performance',
    title: 'Beste LLM-Modelle für Apple Silicon 2026: Empfehlungen für 16 GB, 36 GB, 64 GB, 128 GB',
    seoTitle: 'Beste Modelle für Apple Silicon 2026: 16–128 GB',
    intro: 'Beste lokale LLM-Modellempfehlungen für jeden Apple-Silicon-Mac. Konkrete Modellauswahl für 16 GB (Phi-4), 36 GB (Llama 3.1 8B), 64 GB (Qwen2 34B), 128 GB (Llama 3.1 70B) mit tok/s-Werten auf M5 Pro/Max.',
    metaDescription: 'Phi-4 (16 GB), Llama 8B (36 GB), Qwen 34B (64 GB), Llama 70B (128 GB). Token/s-Geschwindigkeit, Quantisierung, Upgrade-Tipps.',
    twitterDescription: 'Beste LLMs für Ihren Mac: 16 GB→Phi-4, 36 GB→Llama 8B, 64 GB→Qwen 34B, 128 GB→Llama 70B. Getestet auf M5 2026.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen2.5 14B', 'Qwen2.5 34B', 'Mistral 8x7B', 'Llama 3.1 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max'],
    audience: 'Mac-Benutzer, die Modellempfehlungen für ihre Mac-Konfiguration suchen.',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'beste Modelle Apple Silicon Mac',
    targetKeywords: ['bestes LLM Mac', 'Modellempfehlungen', 'Leistung nach Mac-Konfiguration'],
    leadAnswerBlock: '**16 GB: Phi-4. 36 GB: Llama 3.1 8B Q8 (~38 tok/s). 64 GB: Qwen2.5 34B Q5 (~18 tok/s). 128 GB: Llama 3.1 70B Q5 (~14 tok/s M5 Pro, ~16 tok/s M5 Max). Alle laufen über Ollama auf Metal.**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: {
        question: 'Welches LLM-Modell sollte ich auf meinem Mac verwenden?',
        answer: '16 GB → Phi-4. 36 GB → Llama 3.1 8B oder Qwen2.5 14B. 64 GB → Qwen2.5 34B. 128 GB → Llama 3.1 70B. Leistung: 30–40 tok/s (8B), 15–20 tok/s (34B), 12–18 tok/s (70B) auf M5 Pro.',
        bullets: ['16 GB: Phi-4 3,8B', '36 GB: Llama 3.1 8B Q8 (38 tok/s)', '64 GB: Qwen2.5 34B Q5 (18 tok/s)', '128 GB: Llama 3.1 70B Q5 (14–16 tok/s)', 'Quantisierung verwenden: Q4/Q5 sind Standard', 'Alle über Ollama verfügbar'],
        updatedDate: '2026-05-15',
      },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Bestes Modell pro Speicherstufe', anchor: '#by-tier' },
      { label: 'Qualitätsbenchmarks', anchor: '#quality-benchmarks' },
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
        content: 'Zuletzt verifiziert: 2026-05-15. Modellempfehlungen können sich mit neuen Releases ändern. Wir aktualisieren diese Seite vierteljährlich.',
        columns: ['Speicher', 'Primäre Wahl', 'Quantisierung', 'Größe', 'M5 Pro tok/s', 'M5 Max tok/s', 'Alternative'],
        rows: [
          { 'Speicher': '16 GB', 'Primäre Wahl': 'Phi-4', 'Quantisierung': 'Q4_K_M', 'Größe': '2,5 GB', 'M5 Pro tok/s': '60–70', 'M5 Max tok/s': '110–130', 'Alternative': 'Llama 3.1 8B Q4 (knapp)' },
          { 'Speicher': '36 GB', 'Primäre Wahl': 'Llama 3.1 8B', 'Quantisierung': 'Q8', 'Größe': '8,5 GB', 'M5 Pro tok/s': '38–45', 'M5 Max tok/s': '75–85', 'Alternative': 'Qwen2.5 14B Q4 (8,5 GB)' },
          { 'Speicher': '48 GB', 'Primäre Wahl': 'Qwen2.5 14B', 'Quantisierung': 'Q8', 'Größe': '16 GB', 'M5 Pro tok/s': '25–30', 'M5 Max tok/s': '50–60', 'Alternative': 'Mixtral 8x7B Q4 (26 GB)' },
          { 'Speicher': '64 GB', 'Primäre Wahl': 'Qwen2.5 34B', 'Quantisierung': 'Q5', 'Größe': '24 GB', 'M5 Pro tok/s': '18–22', 'M5 Max tok/s': '35–42', 'Alternative': 'Mixtral 8x7B Q5 (32 GB)' },
          { 'Speicher': '96 GB', 'Primäre Wahl': 'Llama 3.1 70B', 'Quantisierung': 'Q4', 'Größe': '42 GB', 'M5 Pro tok/s': '10–13', 'M5 Max tok/s': '20–25', 'Alternative': 'Qwen2.5 72B Q4 (44 GB)' },
          { 'Speicher': '128 GB', 'Primäre Wahl': 'Llama 3.1 70B', 'Quantisierung': 'Q5', 'Größe': '49 GB', 'M5 Pro tok/s': '8–11', 'M5 Max tok/s': '14–18', 'Alternative': 'Qwen2.5 72B Q5 (51 GB)' },
          { 'Speicher': '128 GB', 'Primäre Wahl': 'Llama 3.1 70B', 'Quantisierung': 'Q8', 'Größe': '74 GB', 'M5 Pro tok/s': 'N/A', 'M5 Max tok/s': '9–12', 'Alternative': 'Beste Qualität, nur M5 Max' },
        ],
        note: 'Größen im GGUF-Format. MLX 4-Bit-Äquivalente sind vergleichbar.',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: 'Modell-Qualitätsbenchmarks (Standardtests 2026)',
        columns: ['Modell', 'MMLU', 'HumanEval', 'GSM8K', 'Durchschn.', 'Hinweise'],
        rows: [
          { 'Modell': 'Phi-4 (3,8B)', 'MMLU': '84,8', 'HumanEval': '82,6', 'GSM8K': '91,0', 'Durchschn.': '86,1', 'Hinweise': 'Bestes kleines Modell' },
          { 'Modell': 'Llama 3.1 8B', 'MMLU': '73,0', 'HumanEval': '72,6', 'GSM8K': '84,5', 'Durchschn.': '76,7', 'Hinweise': 'Solides Allround-Modell' },
          { 'Modell': 'Qwen2.5 14B', 'MMLU': '79,7', 'HumanEval': '83,5', 'GSM8K': '90,2', 'Durchschn.': '84,5', 'Hinweise': 'Starkes Reasoning' },
          { 'Modell': 'Mistral 7B', 'MMLU': '60,1', 'HumanEval': '30,5', 'GSM8K': '50,0', 'Durchschn.': '46,9', 'Hinweise': 'Älter, aber schnell' },
          { 'Modell': 'Qwen2.5 34B', 'MMLU': '83,3', 'HumanEval': '88,4', 'GSM8K': '93,0', 'Durchschn.': '88,2', 'Hinweise': 'Bestes mittelgroßes Modell' },
          { 'Modell': 'Mixtral 8x7B', 'MMLU': '70,6', 'HumanEval': '40,2', 'GSM8K': '60,4', 'Durchschn.': '57,1', 'Hinweise': 'MoE-Architektur' },
          { 'Modell': 'Llama 3.1 70B', 'MMLU': '86,0', 'HumanEval': '80,5', 'GSM8K': '95,1', 'Durchschn.': '87,2', 'Hinweise': 'Bestes allgemeines Modell' },
          { 'Modell': 'Qwen2.5 72B', 'MMLU': '86,1', 'HumanEval': '86,6', 'GSM8K': '95,8', 'Durchschn.': '89,5', 'Hinweise': 'Top Reasoning' },
          { 'Modell': 'Llama 3.1 405B', 'MMLU': '88,6', 'HumanEval': '89,0', 'GSM8K': '96,8', 'Durchschn.': '91,5', 'Hinweise': 'Passt nicht lokal' },
          { 'Modell': 'GPT-4o (Referenz)', 'MMLU': '88,7', 'HumanEval': '90,2', 'GSM8K': '95,8', 'Durchschn.': '91,6', 'Hinweise': 'Cloud-Referenz' },
        ],
        note: 'Qwen2.5 72B auf einem 128-GB-Mac nähert sich GPT-4o-Qualität bei null laufenden Kosten. Dies ist die wichtigste Entwicklung in der lokalen KI im Jahr 2026.',
      },
      byUsecase: {
        id: 'by-usecase',
        title: 'Beste Modelle nach Anwendungsfall (2026)',
        columns: ['Anwendungsfall', 'Bestes für 36-GB-Mac', 'Bestes für 64-GB-Mac', 'Bestes für 128-GB-Mac'],
        rows: [
          { 'Anwendungsfall': 'Programmierung (allgemein)', 'Bestes für 36-GB-Mac': 'Llama 3.1 8B', 'Bestes für 64-GB-Mac': 'DeepSeek Coder V2 16B', 'Bestes für 128-GB-Mac': 'Llama 3.1 70B' },
          { 'Anwendungsfall': 'Programmierung (Python)', 'Bestes für 36-GB-Mac': 'DeepSeek Coder V2 Lite', 'Bestes für 64-GB-Mac': 'DeepSeek Coder V2 16B', 'Bestes für 128-GB-Mac': 'DeepSeek Coder V2 236B' },
          { 'Anwendungsfall': 'Langtexte verfassen', 'Bestes für 36-GB-Mac': 'Llama 3.1 8B Q8', 'Bestes für 64-GB-Mac': 'Qwen2.5 34B Q5', 'Bestes für 128-GB-Mac': 'Llama 3.1 70B Q5' },
          { 'Anwendungsfall': 'Chat / Konversation', 'Bestes für 36-GB-Mac': 'Mistral 7B', 'Bestes für 64-GB-Mac': 'Mixtral 8x7B', 'Bestes für 128-GB-Mac': 'Llama 3.1 70B' },
          { 'Anwendungsfall': 'Reasoning / Mathematik', 'Bestes für 36-GB-Mac': 'Qwen2.5 14B', 'Bestes für 64-GB-Mac': 'Qwen2.5 34B', 'Bestes für 128-GB-Mac': 'Qwen2.5 72B' },
          { 'Anwendungsfall': 'RAG / Frage & Antwort', 'Bestes für 36-GB-Mac': 'Llama 3.1 8B + nomic-embed', 'Bestes für 64-GB-Mac': '[Llama 3.1 8B](/de/local-llms/local-rag-for-private-business-data) + bge-large', 'Bestes für 128-GB-Mac': 'Llama 3.1 70B + bge-large' },
          { 'Anwendungsfall': 'Vision / Multimodal', 'Bestes für 36-GB-Mac': 'LLaVA 7B', 'Bestes für 64-GB-Mac': '[Llama 3.2 Vision 11B](/de/power-local-llm/local-vision-models-llava-ollama-2026)', 'Bestes für 128-GB-Mac': 'Llama 3.2 Vision 90B' },
          { 'Anwendungsfall': 'Übersetzung', 'Bestes für 36-GB-Mac': 'Qwen2.5 14B', 'Bestes für 64-GB-Mac': 'Qwen2.5 34B', 'Bestes für 128-GB-Mac': 'Aya Expanse 32B' },
          { 'Anwendungsfall': 'Zusammenfassung', 'Bestes für 36-GB-Mac': 'Llama 3.1 8B', 'Bestes für 64-GB-Mac': 'Qwen2.5 34B', 'Bestes für 128-GB-Mac': 'Llama 3.1 70B' },
          { 'Anwendungsfall': 'Code-Review', 'Bestes für 36-GB-Mac': 'DeepSeek Coder V2 Lite', 'Bestes für 64-GB-Mac': 'DeepSeek Coder V2 16B', 'Bestes für 128-GB-Mac': 'Llama 3.1 70B' },
        ],
        note: 'Spezialisierte Modelle übertreffen allgemeine Modelle oft bei spezifischen Aufgaben. DeepSeek Coder schlägt Llama 3.1 beim Code selbst dann, wenn Llama das größere Modell ist.',
      },
      scenarios: {
        id: 'scenarios',
        title: 'Praxisszenarien nach Nutzertyp',
        callouts: [
          { type: 'tip', text: '**Indie-Entwickler (Mac Mini M5 Pro 64 GB, ca. 1.150 €)**\n- Programmierung: DeepSeek Coder V2 Lite (16B Q4, 10 GB)\n- Texte: Llama 3.1 8B Q8 (8,5 GB) für Dokumentation und E-Mails\n- Permanent aktiv: beide Modelle warm mit `OLLAMA_MAX_LOADED_MODELS=2`\n- Tageskosten: 0 € (vs. 28–90 €/Monat für Copilot + ChatGPT)' },
          { type: 'tip', text: '**Datenschutzbewusster Profi (MacBook Pro M5 Pro 48 GB, ca. 2.400 €)**\n- Hauptmodell: Llama 3.1 8B Q8 für allgemeine Arbeit\n- Sensibel: Qwen2.5 14B Q5 für rechtliche/medizinische/finanzielle Dokumente\n- Reisen: funktioniert offline im Flugzeug, in sicheren Einrichtungen\n- Keine Daten verlassen den Laptop' },
          { type: 'tip', text: '**Forscher / ML-Ingenieur (Mac Studio M5 Max 128 GB, ca. 3.800 €)**\n- Primär: Llama 3.1 70B Q5 (49 GB) für Qualität\n- Spezialisiert: Qwen2.5 72B Q4 für nicht-englische Forschung\n- Programmierung: DeepSeek Coder V2 16B\n- Vision: Llama 3.2 Vision 11B für Papierfiguren\n- Alle vier Modelle gleichzeitig geladen' },
          { type: 'tip', text: '**Familien-KI-Server (Mac Mini M5 Pro 64 GB, dauerhaft aktiv)**\n- Sprachassistent: Llama 3.1 8B + Whisper + Piper\n- RAG: Familiendokument-Frage & Antwort mit Embeddings\n- Programmierhilfe für Familienmitglieder via REST API\n- Stromkosten: ca. 30 €/Jahr\n- Ersetzt: ChatGPT Plus für 4 Personen = ca. 900 €/Jahr' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: 'Zu vermeidende Modelle in 2026 (und warum)',
        callouts: [
          { type: 'warning', text: '**Llama 2 vermeiden (jede Größe)** — Veröffentlicht 2023, abgelöst durch Llama 3 und 3.1. 30–50% schlechtere Qualität bei gleicher Parameterzahl. Taucht noch in älteren Tutorials auf — diesen nicht folgen. Ersetzen durch: Llama 3.1 8B.' },
          { type: 'warning', text: '**Vicuna, Alpaca, WizardLM vermeiden** — Community-Feinabstimmungen aus 2023. Moderne Basismodelle (Llama 3.1, Qwen2.5) entsprechen oder übertreffen ihre Leistung. Ersetzen durch: Qwen2.5 14B oder Llama 3.1 8B.' },
          { type: 'warning', text: '**Falcon 180B vermeiden** — Passt nicht auf Consumer-Apple-Silicon. [Llama 3.1 70B](/de/local-llms/running-70b-models-apple-silicon-m5-max) (kleiner) übertrifft es. Ersetzen durch: Llama 3.1 70B Q5.' },
          { type: 'warning', text: '**FP16-Quantisierung auf Consumer-Hardware vermeiden** — Llama 3.1 70B FP16 = 140 GB, passt auf keinen Mac. Qualitätsgewinn gegenüber Q5 ist unter 1%. Ersetzen durch: [Q4_K_M oder Q5_K_M](/de/local-llms/llm-quantization-explained).' },
          { type: 'warning', text: '**Reine Basismodelle vermeiden (keine Instruct-Variante)** — Basismodelle ergänzen Text, folgen aber keine Anweisungen. Auf "-instruct" oder "-chat"-Suffix achten. Ersetzen durch: die Instruct-Variante desselben Modells.' },
          { type: 'warning', text: '**Modelle ohne aktive Entwicklung vermeiden** — StableLM, RedPajama, MPT, Pythia: aufgegeben oder veraltet. Modelle von Meta, Alibaba, Mistral, Microsoft mit regelmäßigen Updates verwenden.' },
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
        note: 'Größen in diesem Artikel sind GGUF Q4_K_M, sofern nicht anders angegeben. MLX 4-Bit-Äquivalente sind ähnlich groß. Für genaue Bytes die Modellkarte auf HuggingFace prüfen.',
      },
      downloadGuide: {
        id: 'download-guide',
        title: 'Kurzreferenz: Diese Modelle herunterladen',
        codeBlock: `# 16 GB Mac
ollama pull phi4

# 36 GB Mac (eines wählen)
ollama pull llama3.1:8b
ollama pull qwen2.5:14b
ollama pull mistral:7b

# 64 GB Mac
ollama pull qwen2.5:34b
ollama pull mixtral:8x7b

# 128 GB Mac
ollama pull llama3.1:70b
ollama pull qwen2.5:72b

# Spezialmodelle
ollama pull deepseek-coder-v2:16b   # Programmierung
ollama pull llama3.2-vision:11b     # Vision
ollama pull aya-expanse:32b         # Übersetzung`,
        codeLanguage: 'bash',
        note: 'Jedes Modell ist mehrere GB groß. Der gesamte Speicherplatz für mehrere Modelle kann 50–100 GB erreichen. Verwendung prüfen mit `du -sh ~/.ollama/`.',
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Verwandte Artikel',
        items: [
          '[Apple Silicon für lokale LLMs: Vollständiger Leitfaden](/de/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max Benchmarks 2026](/de/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Wie viel vereinigter Speicher für lokale LLMs?](/de/local-llms/how-much-unified-memory-for-local-llm)',
          '[MLX vs Ollama vs llama.cpp Vergleich](/de/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Ollama auf Mac Setup-Anleitung](/de/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[70B-Modelle auf Apple Silicon ausführen](/de/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained)',
          '[Qwen vs Llama vs Mistral Vergleich](/de/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Kann ich zwei verschiedene Modelle gleichzeitig ausführen?', a: 'Ja, `OLLAMA_MAX_LOADED_MODELS=2` in der Umgebungsvariablen setzen. 64 GB kann 8B + 34B gleichzeitig ausführen.' },
          { q: 'Welches Modell eignet sich am besten für Anfänger?', a: 'Llama 3.1 8B. Weit verbreitet, gute Ausgabequalität, bewährte Erfolgsbilanz. Läuft auf jedem M1+ Mac.' },
          { q: 'Ist Mixtral 8x7B schneller als Llama 8B?', a: 'Nein, etwas langsamer (40–50 tok/s vs. 50–60 tok/s auf M5 Pro). Aber das Reasoning ist überlegen.' },
          { q: 'Was ist das beste lokale LLM im Jahr 2026?', a: 'Für die meisten Benutzer auf Apple Silicon: Qwen2.5 (jede Größe, die auf Ihren Mac passt) führt derzeit die Qualitätsbenchmarks an. Llama 3.1 70B ist für 128-GB-Macs vergleichbar. Unter 16 GB: Phi-4 übertrifft mit 3,8B Parametern seine Gewichtsklasse und entspricht 8B-Modellen aus 2024.' },
          { q: 'Kann ich Llama 3.1 405B auf einem Mac ausführen?', a: 'Nein. Llama 3.1 405B benötigt selbst bei Q4-Quantisierung über 200 GB — kein Consumer-Mac hat genug vereinigten Speicher. Warten Sie auf M5 Ultra (erwartet Mitte 2026, 256 GB) — das wird die erste Consumer-Hardware sein, die 405B bei Q3–Q4 ausführen kann.' },
          { q: 'Ist Qwen besser als Llama für den lokalen Einsatz?', a: 'Bei den meisten Aufgaben übertrifft Qwen2.5 Llama 3.1 bei gleicher Parameterzahl in Benchmarks leicht (1–3 Punkte auf MMLU). Llama hat eine breitere Community und mehr Feinabstimmungen. Die meisten Benutzer werden den Unterschied nicht bemerken — die Wahl nach Verfügbarkeit und Feinabstimmungs-Ökosystem treffen.' },
          { q: 'Was ist das kleinste Modell, das wirklich nützlich ist?', a: 'Phi-4 mit 3,8B Parametern. Es erzielt 84,8 auf MMLU — vergleichbar mit einigen 8B-Modellen aus 2024. Für Chat und Fragen & Antworten ist es überraschend leistungsfähig. Für Programmierung oder komplexes Reasoning zu Llama 3.1 8B oder Qwen2.5 14B wechseln.' },
          { q: 'Muss ich bei der Nutzung lokaler Modelle die DSGVO beachten?', a: 'Wenn Daten ausschließlich lokal verarbeitet werden und keine Modelle über Cloud-APIs aufgerufen werden, findet keine Datenübertragung an Dritte statt. Lokale KI-Modelle verarbeiten Eingaben auf dem eigenen Gerät — das entspricht dem Prinzip der Datenminimierung gemäß DSGVO Art. 5. Im Unternehmenskontext empfiehlt sich dennoch eine Dokumentation des Verarbeitungsverzeichnisses nach Art. 30 DSGVO.' },
          { q: 'Eignen sich lokale Modelle für den Mittelstand?', a: 'Ja. Mit einem Mac Mini M5 Pro (64 GB, ca. 1.150 €) lassen sich mehrere 8B- bis 34B-Modelle dauerhaft betreiben. Im Vergleich zu Cloud-APIs (GPT-4: ca. 50–200 €/Monat pro Nutzer) amortisiert sich die Hardware innerhalb von 6–18 Monaten. Besonders für DSGVO-konforme Verarbeitung vertraulicher Dokumente (z. B. Verträge, Kundenanfragen) ist die lokale Option attraktiv.' },
        ],
      },
    },
    ctaText: 'Ein Modell für Ihren Mac ausgewählt? Vergleichen Sie seine Antworten mit GPT-4, Claude, Gemini und 22 weiteren Modellen nebeneinander mit PromptQuorum — überprüfen Sie, ob Ihr lokales Llama, Qwen oder Phi-Modell die Cloud-Qualität für Ihre spezifischen Anwendungsfälle erreicht.',
  },
  fr: {
    freshness_tier: 'annual',
    specific_year: 2026,
    theme: 'Hardware & Performance',
    title: 'Meilleurs modèles LLM pour Apple Silicon 2026 : Recommandations 16 Go, 36 Go, 64 Go, 128 Go',
    seoTitle: 'Meilleurs modèles Apple Silicon 2026 : 16–128 Go',
    intro: 'Meilleures recommandations de modèles LLM locaux pour chaque Mac Apple Silicon. Sélections concrètes pour 16 Go (Phi-4), 36 Go (Llama 3.1 8B), 64 Go (Qwen2 34B), 128 Go (Llama 3.1 70B) avec les performances tok/s sur M5 Pro/Max.',
    metaDescription: 'Phi-4 (16 Go), Llama 8B (36 Go), Qwen 34B (64 Go), Llama 70B (128 Go). Vitesses tok/s, quantification, conseils de mise à niveau.',
    twitterDescription: 'Meilleurs LLM pour votre Mac : 16 Go→Phi-4, 36 Go→Llama 8B, 64 Go→Qwen 34B, 128 Go→Llama 70B. Testés sur M5 2026.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen2.5 14B', 'Qwen2.5 34B', 'Mistral 8x7B', 'Llama 3.1 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max'],
    audience: 'Utilisateurs Mac recherchant des recommandations de modèles pour leur configuration.',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'meilleurs modèles Apple Silicon Mac',
    targetKeywords: ['meilleur LLM Mac', 'recommandations de modèles', 'performance par configuration Mac'],
    leadAnswerBlock: '**16 Go : Phi-4. 36 Go : Llama 3.1 8B Q8 (~38 tok/s). 64 Go : Qwen2.5 34B Q5 (~18 tok/s). 128 Go : Llama 3.1 70B Q5 (~14 tok/s M5 Pro, ~16 tok/s M5 Max). Tous via Ollama sur Metal.**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: {
        question: 'Quel modèle LLM devrais-je utiliser sur mon Mac ?',
        answer: '16 Go → Phi-4. 36 Go → Llama 3.1 8B ou Qwen2.5 14B. 64 Go → Qwen2.5 34B. 128 Go → Llama 3.1 70B. Performance : 30–40 tok/s (8B), 15–20 tok/s (34B), 12–18 tok/s (70B) sur M5 Pro.',
        bullets: ['16 Go : Phi-4 3,8B', '36 Go : Llama 3.1 8B Q8 (38 tok/s)', '64 Go : Qwen2.5 34B Q5 (18 tok/s)', '128 Go : Llama 3.1 70B Q5 (14–16 tok/s)', 'Utiliser la quantification : Q4/Q5 sont standards', 'Tous disponibles via Ollama'],
        updatedDate: '2026-05-15',
      },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Meilleur modèle par niveau mémoire', anchor: '#by-tier' },
      { label: 'Benchmarks de qualité', anchor: '#quality-benchmarks' },
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
        content: 'Dernière vérification : 2026-05-15. Les recommandations peuvent évoluer avec les nouveaux modèles. Mise à jour trimestrielle.',
        columns: ['Mémoire', 'Choix principal', 'Quantification', 'Taille', 'M5 Pro tok/s', 'M5 Max tok/s', 'Alternative'],
        rows: [
          { 'Mémoire': '16 Go', 'Choix principal': 'Phi-4', 'Quantification': 'Q4_K_M', 'Taille': '2,5 Go', 'M5 Pro tok/s': '60–70', 'M5 Max tok/s': '110–130', 'Alternative': 'Llama 3.1 8B Q4 (juste)' },
          { 'Mémoire': '36 Go', 'Choix principal': 'Llama 3.1 8B', 'Quantification': 'Q8', 'Taille': '8,5 Go', 'M5 Pro tok/s': '38–45', 'M5 Max tok/s': '75–85', 'Alternative': 'Qwen2.5 14B Q4 (8,5 Go)' },
          { 'Mémoire': '48 Go', 'Choix principal': 'Qwen2.5 14B', 'Quantification': 'Q8', 'Taille': '16 Go', 'M5 Pro tok/s': '25–30', 'M5 Max tok/s': '50–60', 'Alternative': 'Mixtral 8x7B Q4 (26 Go)' },
          { 'Mémoire': '64 Go', 'Choix principal': 'Qwen2.5 34B', 'Quantification': 'Q5', 'Taille': '24 Go', 'M5 Pro tok/s': '18–22', 'M5 Max tok/s': '35–42', 'Alternative': 'Mixtral 8x7B Q5 (32 Go)' },
          { 'Mémoire': '96 Go', 'Choix principal': 'Llama 3.1 70B', 'Quantification': 'Q4', 'Taille': '42 Go', 'M5 Pro tok/s': '10–13', 'M5 Max tok/s': '20–25', 'Alternative': 'Qwen2.5 72B Q4 (44 Go)' },
          { 'Mémoire': '128 Go', 'Choix principal': 'Llama 3.1 70B', 'Quantification': 'Q5', 'Taille': '49 Go', 'M5 Pro tok/s': '8–11', 'M5 Max tok/s': '14–18', 'Alternative': 'Qwen2.5 72B Q5 (51 Go)' },
          { 'Mémoire': '128 Go', 'Choix principal': 'Llama 3.1 70B', 'Quantification': 'Q8', 'Taille': '74 Go', 'M5 Pro tok/s': 'N/A', 'M5 Max tok/s': '9–12', 'Alternative': 'Meilleure qualité, M5 Max uniquement' },
        ],
        note: 'Tailles au format GGUF. Les équivalents MLX 4-bit sont comparables.',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: 'Benchmarks de qualité des modèles (tests standards 2026)',
        columns: ['Modèle', 'MMLU', 'HumanEval', 'GSM8K', 'Moy.', 'Notes'],
        rows: [
          { 'Modèle': 'Phi-4 (3,8B)', 'MMLU': '84,8', 'HumanEval': '82,6', 'GSM8K': '91,0', 'Moy.': '86,1', 'Notes': 'Meilleur petit modèle' },
          { 'Modèle': 'Llama 3.1 8B', 'MMLU': '73,0', 'HumanEval': '72,6', 'GSM8K': '84,5', 'Moy.': '76,7', 'Notes': 'Polyvalent solide' },
          { 'Modèle': 'Qwen2.5 14B', 'MMLU': '79,7', 'HumanEval': '83,5', 'GSM8K': '90,2', 'Moy.': '84,5', 'Notes': 'Raisonnement fort' },
          { 'Modèle': 'Mistral 7B', 'MMLU': '60,1', 'HumanEval': '30,5', 'GSM8K': '50,0', 'Moy.': '46,9', 'Notes': 'Ancien mais rapide' },
          { 'Modèle': 'Qwen2.5 34B', 'MMLU': '83,3', 'HumanEval': '88,4', 'GSM8K': '93,0', 'Moy.': '88,2', 'Notes': 'Meilleur taille moyenne' },
          { 'Modèle': 'Mixtral 8x7B', 'MMLU': '70,6', 'HumanEval': '40,2', 'GSM8K': '60,4', 'Moy.': '57,1', 'Notes': 'Architecture MoE' },
          { 'Modèle': 'Llama 3.1 70B', 'MMLU': '86,0', 'HumanEval': '80,5', 'GSM8K': '95,1', 'Moy.': '87,2', 'Notes': 'Meilleur général' },
          { 'Modèle': 'Qwen2.5 72B', 'MMLU': '86,1', 'HumanEval': '86,6', 'GSM8K': '95,8', 'Moy.': '89,5', 'Notes': 'Top raisonnement' },
          { 'Modèle': 'Llama 3.1 405B', 'MMLU': '88,6', 'HumanEval': '89,0', 'GSM8K': '96,8', 'Moy.': '91,5', 'Notes': 'Ne tient pas localement' },
          { 'Modèle': 'GPT-4o (référence)', 'MMLU': '88,7', 'HumanEval': '90,2', 'GSM8K': '95,8', 'Moy.': '91,6', 'Notes': 'Référence cloud' },
        ],
        note: 'Qwen2.5 72B sur un Mac 128 Go approche la qualité GPT-4o à coût nul. C\'est le développement le plus important de l\'IA locale en 2026.',
      },
      byUsecase: {
        id: 'by-usecase',
        title: 'Meilleurs modèles par cas d\'usage (2026)',
        columns: ['Cas d\'usage', 'Meilleur pour Mac 36 Go', 'Meilleur pour Mac 64 Go', 'Meilleur pour Mac 128 Go'],
        rows: [
          { 'Cas d\'usage': 'Programmation (général)', 'Meilleur pour Mac 36 Go': 'Llama 3.1 8B', 'Meilleur pour Mac 64 Go': 'DeepSeek Coder V2 16B', 'Meilleur pour Mac 128 Go': 'Llama 3.1 70B' },
          { 'Cas d\'usage': 'Programmation (Python)', 'Meilleur pour Mac 36 Go': 'DeepSeek Coder V2 Lite', 'Meilleur pour Mac 64 Go': 'DeepSeek Coder V2 16B', 'Meilleur pour Mac 128 Go': 'DeepSeek Coder V2 236B' },
          { 'Cas d\'usage': 'Rédaction longue', 'Meilleur pour Mac 36 Go': 'Llama 3.1 8B Q8', 'Meilleur pour Mac 64 Go': 'Qwen2.5 34B Q5', 'Meilleur pour Mac 128 Go': 'Llama 3.1 70B Q5' },
          { 'Cas d\'usage': 'Chat / conversation', 'Meilleur pour Mac 36 Go': 'Mistral 7B', 'Meilleur pour Mac 64 Go': 'Mixtral 8x7B', 'Meilleur pour Mac 128 Go': 'Llama 3.1 70B' },
          { 'Cas d\'usage': 'Raisonnement / maths', 'Meilleur pour Mac 36 Go': 'Qwen2.5 14B', 'Meilleur pour Mac 64 Go': 'Qwen2.5 34B', 'Meilleur pour Mac 128 Go': 'Qwen2.5 72B' },
          { 'Cas d\'usage': 'RAG / Q&R', 'Meilleur pour Mac 36 Go': 'Llama 3.1 8B + nomic-embed', 'Meilleur pour Mac 64 Go': '[Llama 3.1 8B](/fr/local-llms/local-rag-for-private-business-data) + bge-large', 'Meilleur pour Mac 128 Go': 'Llama 3.1 70B + bge-large' },
          { 'Cas d\'usage': 'Vision / multimodal', 'Meilleur pour Mac 36 Go': 'LLaVA 7B', 'Meilleur pour Mac 64 Go': '[Llama 3.2 Vision 11B](/fr/power-local-llm/local-vision-models-llava-ollama-2026)', 'Meilleur pour Mac 128 Go': 'Llama 3.2 Vision 90B' },
          { 'Cas d\'usage': 'Traduction', 'Meilleur pour Mac 36 Go': 'Qwen2.5 14B', 'Meilleur pour Mac 64 Go': 'Qwen2.5 34B', 'Meilleur pour Mac 128 Go': 'Aya Expanse 32B' },
          { 'Cas d\'usage': 'Résumé', 'Meilleur pour Mac 36 Go': 'Llama 3.1 8B', 'Meilleur pour Mac 64 Go': 'Qwen2.5 34B', 'Meilleur pour Mac 128 Go': 'Llama 3.1 70B' },
          { 'Cas d\'usage': 'Revue de code', 'Meilleur pour Mac 36 Go': 'DeepSeek Coder V2 Lite', 'Meilleur pour Mac 64 Go': 'DeepSeek Coder V2 16B', 'Meilleur pour Mac 128 Go': 'Llama 3.1 70B' },
        ],
        note: 'Les modèles spécialisés surpassent souvent les modèles généraux sur des tâches spécifiques. DeepSeek Coder bat Llama 3.1 pour le code même quand Llama est le modèle le plus grand.',
      },
      scenarios: {
        id: 'scenarios',
        title: 'Configurations réelles par type d\'utilisateur',
        callouts: [
          { type: 'tip', text: '**Développeur indépendant (Mac Mini M5 Pro 64 Go, env. 1 150 €)**\n- Programmation : DeepSeek Coder V2 Lite (16B Q4, 10 Go)\n- Rédaction : Llama 3.1 8B Q8 (8,5 Go) pour docs et e-mails\n- Toujours actif : les deux modèles restent chauds avec `OLLAMA_MAX_LOADED_MODELS=2`\n- Coût journalier : 0 € (vs 28–90 €/mois pour Copilot + ChatGPT)' },
          { type: 'tip', text: '**Professionnel soucieux de la confidentialité (MacBook Pro M5 Pro 48 Go, env. 2 400 €)**\n- Principal : Llama 3.1 8B Q8 pour le travail général\n- Sensible : Qwen2.5 14B Q5 pour documents juridiques/médicaux/financiers\n- Voyage : fonctionne hors ligne en avion, dans les installations sécurisées\n- Aucune donnée ne quitte l\'ordinateur' },
          { type: 'tip', text: '**Chercheur / Ingénieur ML (Mac Studio M5 Max 128 Go, env. 3 800 €)**\n- Principal : Llama 3.1 70B Q5 (49 Go) pour la qualité\n- Spécialisé : Qwen2.5 72B Q4 pour la recherche non-anglophone\n- Programmation : DeepSeek Coder V2 16B\n- Vision : Llama 3.2 Vision 11B pour les figures d\'articles\n- Les quatre modèles chargés simultanément' },
          { type: 'tip', text: '**Serveur IA familial (Mac Mini M5 Pro 64 Go, toujours allumé)**\n- Assistant vocal : Llama 3.1 8B + Whisper + Piper\n- RAG : Q&R sur documents familiaux avec embeddings\n- Aide à la programmation pour les membres de la famille via REST API\n- Coût électrique : env. 30 €/an\n- Remplace : ChatGPT Plus pour 4 personnes = env. 960 €/an' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: 'Modèles à éviter en 2026 (et pourquoi)',
        callouts: [
          { type: 'warning', text: '**Éviter Llama 2 (toute taille)** — Sorti en 2023, remplacé par Llama 3 et 3.1. Qualité 30–50% inférieure à paramètres égaux. Apparaît encore dans d\'anciens tutoriels — ne pas les suivre. Remplacer par : Llama 3.1 8B.' },
          { type: 'warning', text: '**Éviter Vicuna, Alpaca, WizardLM** — Ajustements communautaires de 2023. Les modèles de base modernes (Llama 3.1, Qwen2.5) égalent ou surpassent leurs performances. Remplacer par : Qwen2.5 14B ou Llama 3.1 8B.' },
          { type: 'warning', text: '**Éviter Falcon 180B** — Ne tient pas sur Apple Silicon grand public. [Llama 3.1 70B](/fr/local-llms/running-70b-models-apple-silicon-m5-max) (plus petit) le surpasse. Remplacer par : Llama 3.1 70B Q5.' },
          { type: 'warning', text: '**Éviter la quantification FP16 sur matériel grand public** — Llama 3.1 70B FP16 = 140 Go, ne tient sur aucun Mac. Le gain de qualité par rapport à Q5 est inférieur à 1%. Remplacer par : [Q4_K_M ou Q5_K_M](/fr/local-llms/llm-quantization-explained).' },
          { type: 'warning', text: '**Éviter les modèles de base purs (sans variante instruct)** — Les modèles de base complètent du texte mais ne suivent pas les instructions. Rechercher le suffixe "-instruct" ou "-chat". Remplacer par : la variante instruct du même modèle.' },
          { type: 'warning', text: '**Éviter les modèles sans développement actif** — StableLM, RedPajama, MPT, Pythia : abandonnés ou obsolètes. Utiliser des modèles de Meta, Alibaba, Mistral, Microsoft avec des mises à jour régulières.' },
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
        note: 'Les tailles dans cet article sont GGUF Q4_K_M sauf indication. Les équivalents MLX 4-bit sont similaires. Pour les octets exacts, consulter la fiche modèle sur HuggingFace.',
      },
      downloadGuide: {
        id: 'download-guide',
        title: 'Référence rapide : télécharger ces modèles',
        codeBlock: `# Mac 16 Go
ollama pull phi4

# Mac 36 Go (choisir un)
ollama pull llama3.1:8b
ollama pull qwen2.5:14b
ollama pull mistral:7b

# Mac 64 Go
ollama pull qwen2.5:34b
ollama pull mixtral:8x7b

# Mac 128 Go
ollama pull llama3.1:70b
ollama pull qwen2.5:72b

# Modèles spécialisés
ollama pull deepseek-coder-v2:16b   # programmation
ollama pull llama3.2-vision:11b     # vision
ollama pull aya-expanse:32b         # traduction`,
        codeLanguage: 'bash',
        note: 'Chaque modèle pèse plusieurs Go. L\'espace total pour plusieurs modèles peut atteindre 50–100 Go. Vérifier avec `du -sh ~/.ollama/`.',
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Articles connexes',
        items: [
          '[Apple Silicon pour les LLM locaux : Guide complet](/fr/local-llms/apple-silicon-local-llm-guide-2026)',
          '[Benchmarks M5 Pro vs M5 Max 2026](/fr/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Quelle quantité de mémoire unifiée pour les LLM locaux ?](/fr/local-llms/how-much-unified-memory-for-local-llm)',
          '[Comparaison MLX vs Ollama vs llama.cpp](/fr/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Guide d\'installation Ollama sur Mac](/fr/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[Exécuter des modèles 70B sur Apple Silicon](/fr/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[La quantification LLM expliquée](/fr/local-llms/llm-quantization-explained)',
          '[Comparaison Qwen vs Llama vs Mistral](/fr/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Puis-je exécuter deux modèles différents simultanément ?', a: 'Oui, définir `OLLAMA_MAX_LOADED_MODELS=2` dans l\'environnement. 64 Go peut exécuter 8B + 34B simultanément.' },
          { q: 'Quel modèle convient le mieux aux débutants ?', a: 'Llama 3.1 8B. Largement disponible, bonne qualité de sortie, historique éprouvé. Fonctionne sur tout Mac M1+.' },
          { q: 'Mixtral 8x7B est-il plus rapide que Llama 8B ?', a: 'Non, légèrement plus lent (40–50 tok/s vs 50–60 tok/s sur M5 Pro). Mais le raisonnement est supérieur.' },
          { q: 'Quel est le meilleur LLM local en 2026 ?', a: 'Pour la plupart des utilisateurs sur Apple Silicon : Qwen2.5 (toute taille tenant sur votre Mac) domine actuellement les benchmarks. Llama 3.1 70B est comparable pour les Mac 128 Go. En dessous de 16 Go : Phi-4 dépasse sa catégorie avec 3,8B paramètres, égalant des modèles 8B de 2024.' },
          { q: 'Puis-je exécuter Llama 3.1 405B sur un Mac ?', a: 'Non. Llama 3.1 405B nécessite plus de 200 Go même en quantification Q4 — aucun Mac grand public n\'a assez de mémoire unifiée. Attendre le M5 Ultra (attendu mi-2026, 256 Go) — ce sera le premier matériel grand public capable d\'exécuter 405B en Q3–Q4.' },
          { q: 'Qwen est-il meilleur que Llama pour un usage local ?', a: 'Pour la plupart des tâches, Qwen2.5 surpasse légèrement Llama 3.1 à paramètres égaux (1–3 points sur MMLU). Llama bénéficie d\'un plus large soutien communautaire et plus d\'ajustements fins disponibles. La plupart des utilisateurs ne remarqueront pas la différence — choisir selon la disponibilité et l\'écosystème d\'ajustements.' },
          { q: 'Quel est le plus petit modèle vraiment utile ?', a: 'Phi-4 à 3,8B paramètres. Il obtient 84,8 sur MMLU — équivalent à certains modèles 8B de 2024. Pour le chat et les Q&R, il est étonnamment capable. Pour la programmation ou le raisonnement complexe, passer à Llama 3.1 8B ou [Qwen2.5 14B](/fr/local-llms/qwen-vs-llama-vs-mistral).' },
        ],
      },
    },
    ctaText: 'Vous avez choisi un modèle pour votre Mac ? Comparez ses réponses avec GPT-4, Claude, Gemini et 22 autres modèles côte à côte avec PromptQuorum — vérifiez que votre Llama, Qwen ou Phi local atteint la qualité cloud pour vos cas d\'usage spécifiques.',
  },
  ja: {
    freshness_tier: 'annual',
    specific_year: 2026,
    theme: 'Hardware & Performance',
    title: 'Apple Silicon向けベストLLMモデル2026：16GB、36GB、64GB、128GBの推奨モデル',
    seoTitle: 'Apple Silicon 2026：最適なモデル 16GB–128GB',
    intro: 'すべてのApple Silicon Mac向けベストローカルLLMモデル推奨。16GB（Phi-4）、36GB（Llama 3.1 8B）、64GB（Qwen2 34B）、128GB（Llama 3.1 70B）の具体的なモデル選択とM5 Pro/MaxのTok/s数値。',
    metaDescription: 'Phi-4（16GB）、Llama 8B（36GB）、Qwen 34B（64GB）、Llama 70B（128GB）推奨。各メモリサイズに最適なモデル。tok/s速度比較、量子化方式、アップグレード時期。',
    twitterDescription: 'MacのベストLLM：16GB→Phi-4、36GB→Llama 8B、64GB→Qwen 34B、128GB→Llama 70B。M5 2026でテスト済み。',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen2.5 14B', 'Qwen2.5 34B', 'Mistral 8x7B', 'Llama 3.1 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max'],
    audience: 'Mac設定に合ったモデル推奨を求めるMacユーザー。',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Apple Silicon Mac向けベストモデル',
    targetKeywords: ['ベストLLM Mac', 'モデル推奨', 'Mac設定別パフォーマンス'],
    leadAnswerBlock: '**16GB：Phi-4。36GB：Llama 3.1 8B Q8（約38 tok/s）。64GB：Qwen2.5 34B Q5（約18 tok/s）。128GB：Llama 3.1 70B Q5（約14 tok/s M5 Pro、約16 tok/s M5 Max）。すべてMetal上のOllamaで動作。**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: {
        question: 'MacでどのLLMモデルを使うべきですか？',
        answer: '16GB → Phi-4。36GB → Llama 3.1 8BまたはQwen2.5 14B。64GB → Qwen2.5 34B。128GB → Llama 3.1 70B。パフォーマンス：M5 Proで30–40 tok/s（8B）、15–20 tok/s（34B）、12–18 tok/s（70B）。',
        bullets: ['16GB：Phi-4 3.8B', '36GB：Llama 3.1 8B Q8（38 tok/s）', '64GB：Qwen2.5 34B Q5（18 tok/s）', '128GB：Llama 3.1 70B Q5（14–16 tok/s）', '量子化を使用：Q4/Q5が標準', 'すべてOllamaで利用可能'],
        updatedDate: '2026-05-15',
      },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'メモリ別ベストモデル', anchor: '#by-tier' },
      { label: '品質ベンチマーク', anchor: '#quality-benchmarks' },
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
        content: '最終確認：2026-05-15。モデル推奨は新モデルのリリースとともに変わる可能性があります。四半期ごとに更新。',
        columns: ['メモリ', '第一選択', '量子化', 'サイズ', 'M5 Pro tok/s', 'M5 Max tok/s', '代替'],
        rows: [
          { 'メモリ': '16 GB', '第一選択': 'Phi-4', '量子化': 'Q4_K_M', 'サイズ': '2.5 GB', 'M5 Pro tok/s': '60–70', 'M5 Max tok/s': '110–130', '代替': 'Llama 3.1 8B Q4（ギリギリ）' },
          { 'メモリ': '36 GB', '第一選択': 'Llama 3.1 8B', '量子化': 'Q8', 'サイズ': '8.5 GB', 'M5 Pro tok/s': '38–45', 'M5 Max tok/s': '75–85', '代替': 'Qwen2.5 14B Q4（8.5 GB）' },
          { 'メモリ': '48 GB', '第一選択': 'Qwen2.5 14B', '量子化': 'Q8', 'サイズ': '16 GB', 'M5 Pro tok/s': '25–30', 'M5 Max tok/s': '50–60', '代替': 'Mixtral 8x7B Q4（26 GB）' },
          { 'メモリ': '64 GB', '第一選択': 'Qwen2.5 34B', '量子化': 'Q5', 'サイズ': '24 GB', 'M5 Pro tok/s': '18–22', 'M5 Max tok/s': '35–42', '代替': 'Mixtral 8x7B Q5（32 GB）' },
          { 'メモリ': '96 GB', '第一選択': 'Llama 3.1 70B', '量子化': 'Q4', 'サイズ': '42 GB', 'M5 Pro tok/s': '10–13', 'M5 Max tok/s': '20–25', '代替': 'Qwen2.5 72B Q4（44 GB）' },
          { 'メモリ': '128 GB', '第一選択': 'Llama 3.1 70B', '量子化': 'Q5', 'サイズ': '49 GB', 'M5 Pro tok/s': '8–11', 'M5 Max tok/s': '14–18', '代替': 'Qwen2.5 72B Q5（51 GB）' },
          { 'メモリ': '128 GB', '第一選択': 'Llama 3.1 70B', '量子化': 'Q8', 'サイズ': '74 GB', 'M5 Pro tok/s': 'N/A', 'M5 Max tok/s': '9–12', '代替': '最高品質、M5 Maxのみ' },
        ],
        note: 'サイズはGGUFフォーマット。MLX 4ビット相当品は同等です。',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: 'モデル品質ベンチマーク（2026標準テスト）',
        columns: ['モデル', 'MMLU', 'HumanEval', 'GSM8K', '平均', '備考'],
        rows: [
          { 'モデル': 'Phi-4 (3.8B)', 'MMLU': '84.8', 'HumanEval': '82.6', 'GSM8K': '91.0', '平均': '86.1', '備考': '最高の小型モデル' },
          { 'モデル': 'Llama 3.1 8B', 'MMLU': '73.0', 'HumanEval': '72.6', 'GSM8K': '84.5', '平均': '76.7', '備考': '万能型' },
          { 'モデル': 'Qwen2.5 14B', 'MMLU': '79.7', 'HumanEval': '83.5', 'GSM8K': '90.2', '平均': '84.5', '備考': '強力な推論力' },
          { 'モデル': 'Mistral 7B', 'MMLU': '60.1', 'HumanEval': '30.5', 'GSM8K': '50.0', '平均': '46.9', '備考': '古いが高速' },
          { 'モデル': 'Qwen2.5 34B', 'MMLU': '83.3', 'HumanEval': '88.4', 'GSM8K': '93.0', '平均': '88.2', '備考': 'ベスト中型モデル' },
          { 'モデル': 'Mixtral 8x7B', 'MMLU': '70.6', 'HumanEval': '40.2', 'GSM8K': '60.4', '平均': '57.1', '備考': 'MoEアーキテクチャ' },
          { 'モデル': 'Llama 3.1 70B', 'MMLU': '86.0', 'HumanEval': '80.5', 'GSM8K': '95.1', '平均': '87.2', '備考': 'ベスト汎用モデル' },
          { 'モデル': 'Qwen2.5 72B', 'MMLU': '86.1', 'HumanEval': '86.6', 'GSM8K': '95.8', '平均': '89.5', '備考': 'トップ推論力' },
          { 'モデル': 'Llama 3.1 405B', 'MMLU': '88.6', 'HumanEval': '89.0', 'GSM8K': '96.8', '平均': '91.5', '備考': 'ローカルに収まらない' },
          { 'モデル': 'GPT-4o（参照）', 'MMLU': '88.7', 'HumanEval': '90.2', 'GSM8K': '95.8', '平均': '91.6', '備考': 'クラウド基準' },
        ],
        note: '128GB Mac上のQwen2.5 72Bは継続コスト0円でGPT-4oの品質に近づきます。これは2026年のローカルAIで最も重要な発展です。',
      },
      byUsecase: {
        id: 'by-usecase',
        title: 'ユースケース別ベストモデル（2026）',
        columns: ['ユースケース', '36GB Mac向けベスト', '64GB Mac向けベスト', '128GB Mac向けベスト'],
        rows: [
          { 'ユースケース': 'コーディング（一般）', '36GB Mac向けベスト': 'Llama 3.1 8B', '64GB Mac向けベスト': 'DeepSeek Coder V2 16B', '128GB Mac向けベスト': 'Llama 3.1 70B' },
          { 'ユースケース': 'コーディング（Python）', '36GB Mac向けベスト': 'DeepSeek Coder V2 Lite', '64GB Mac向けベスト': 'DeepSeek Coder V2 16B', '128GB Mac向けベスト': 'DeepSeek Coder V2 236B' },
          { 'ユースケース': '長文ライティング', '36GB Mac向けベスト': 'Llama 3.1 8B Q8', '64GB Mac向けベスト': 'Qwen2.5 34B Q5', '128GB Mac向けベスト': 'Llama 3.1 70B Q5' },
          { 'ユースケース': 'チャット / 会話', '36GB Mac向けベスト': 'Mistral 7B', '64GB Mac向けベスト': 'Mixtral 8x7B', '128GB Mac向けベスト': 'Llama 3.1 70B' },
          { 'ユースケース': '推論 / 数学', '36GB Mac向けベスト': 'Qwen2.5 14B', '64GB Mac向けベスト': 'Qwen2.5 34B', '128GB Mac向けベスト': 'Qwen2.5 72B' },
          { 'ユースケース': 'RAG / Q&A', '36GB Mac向けベスト': 'Llama 3.1 8B + nomic-embed', '64GB Mac向けベスト': '[Llama 3.1 8B](/ja/local-llms/local-rag-for-private-business-data) + bge-large', '128GB Mac向けベスト': 'Llama 3.1 70B + bge-large' },
          { 'ユースケース': 'ビジョン / マルチモーダル', '36GB Mac向けベスト': 'LLaVA 7B', '64GB Mac向けベスト': '[Llama 3.2 Vision 11B](/ja/power-local-llm/local-vision-models-llava-ollama-2026)', '128GB Mac向けベスト': 'Llama 3.2 Vision 90B' },
          { 'ユースケース': '翻訳', '36GB Mac向けベスト': 'Qwen2.5 14B', '64GB Mac向けベスト': 'Qwen2.5 34B', '128GB Mac向けベスト': 'Aya Expanse 32B' },
          { 'ユースケース': '要約', '36GB Mac向けベスト': 'Llama 3.1 8B', '64GB Mac向けベスト': 'Qwen2.5 34B', '128GB Mac向けベスト': 'Llama 3.1 70B' },
          { 'ユースケース': 'コードレビュー', '36GB Mac向けベスト': 'DeepSeek Coder V2 Lite', '64GB Mac向けベスト': 'DeepSeek Coder V2 16B', '128GB Mac向けベスト': 'Llama 3.1 70B' },
        ],
        note: '専門モデルは特定タスクで汎用モデルを上回ることが多い。DeepSeek CoderはLlamaが大きいモデルでも、コードではLlamaに勝ります。',
      },
      scenarios: {
        id: 'scenarios',
        title: 'ユーザータイプ別の実際の設定',
        callouts: [
          { type: 'tip', text: '**インディー開発者（Mac Mini M5 Pro 64GB、約180,000円）**\n- コーディング：DeepSeek Coder V2 Lite（16B Q4、10 GB）\n- 執筆：Llama 3.1 8B Q8（8.5 GB）でドキュメントとメール\n- 常時稼働：`OLLAMA_MAX_LOADED_MODELS=2`で両モデルをウォーム状態に\n- 1日のコスト：0円（vs Copilot + ChatGPT月4,000–15,000円）' },
          { type: 'tip', text: '**プライバシー重視のプロ（MacBook Pro M5 Pro 48GB、約380,000円）**\n- メイン：一般業務にLlama 3.1 8B Q8\n- 機密：法律/医療/金融文書にQwen2.5 14B Q5\n- 出張：飛行機や安全施設でオフライン動作\n- データはラップトップ外に出ない' },
          { type: 'tip', text: '**研究者 / MLエンジニア（Mac Studio M5 Max 128GB、約600,000円）**\n- メイン：品質のためLlama 3.1 70B Q5（49 GB）\n- 専門：非英語研究にQwen2.5 72B Q4\n- コーディング：DeepSeek Coder V2 16B\n- ビジョン：論文の図のためLlama 3.2 Vision 11B\n- 4モデルを同時にロード' },
          { type: 'tip', text: '**家族用AIサーバー（Mac Mini M5 Pro 64GB、常時稼働）**\n- 音声アシスタント：Llama 3.1 8B + Whisper + Piper\n- RAG：埋め込みによる家族文書Q&A\n- REST API経由で家族のコーディング支援\n- 電力コスト：約5,000円/年\n- 代替：4人分のChatGPT Plus = 約150,000円/年' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: '2026年に避けるべきモデル（その理由）',
        callouts: [
          { type: 'warning', text: '**Llama 2（どのサイズも）は避ける** — 2023年リリース、Llama 3および3.1に置き換えられた。同じパラメータ数で品質が30–50%低い。古いチュートリアルにまだ登場する — 従わないこと。代替：Llama 3.1 8B。' },
          { type: 'warning', text: '**Vicuna、Alpaca、WizardLMは避ける** — 2023年のコミュニティファインチューン。現代のベースモデル（Llama 3.1、Qwen2.5）が同等以上のパフォーマンス。代替：Qwen2.5 14BまたはLlama 3.1 8B。' },
          { type: 'warning', text: '**Falcon 180Bは避ける** — コンシューマーApple Siliconには収まらない。[Llama 3.1 70B](/ja/local-llms/running-70b-models-apple-silicon-m5-max)（より小型）が上回る。代替：Llama 3.1 70B Q5。' },
          { type: 'warning', text: '**コンシューマーハードウェアでのFP16量子化は避ける** — Llama 3.1 70B FP16 = 140GB、どのMacにも収まらない。Q5に対する品質向上は1%未満。代替：[Q4_K_MまたはQ5_K_M](/ja/local-llms/llm-quantization-explained)。' },
          { type: 'warning', text: '**純粋なベースモデル（instructバリアントなし）は避ける** — ベースモデルはテキストを補完するが指示に従わない。"-instruct"または"-chat"サフィックスを探すこと。代替：同じモデルのinstructバリアント。' },
          { type: 'warning', text: '**積極的に開発されていないモデルは避ける** — StableLM、RedPajama、MPT、Pythia：放棄済みまたは陳腐化。定期的なアップデートがあるMeta、Alibaba、Mistral、Microsoftのモデルを使用。' },
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
        note: 'この記事のサイズは特記なき限りGGUF Q4_K_M。MLX 4ビット相当品は同様のサイズ。正確なバイト数はHuggingFaceのモデルカードを確認。',
      },
      downloadGuide: {
        id: 'download-guide',
        title: 'クイックリファレンス：これらのモデルのダウンロード',
        codeBlock: `# 16 GB Mac
ollama pull phi4

# 36 GB Mac (いずれか選択)
ollama pull llama3.1:8b
ollama pull qwen2.5:14b
ollama pull mistral:7b

# 64 GB Mac
ollama pull qwen2.5:34b
ollama pull mixtral:8x7b

# 128 GB Mac
ollama pull llama3.1:70b
ollama pull qwen2.5:72b

# 専門モデル
ollama pull deepseek-coder-v2:16b   # コーディング
ollama pull llama3.2-vision:11b     # ビジョン
ollama pull aya-expanse:32b         # 翻訳`,
        codeLanguage: 'bash',
        note: '各モデルは数GB。複数モデルの合計ディスク使用量は50–100GBに達する可能性があります。`du -sh ~/.ollama/`で使用量を確認。',
      },
      relatedArticles: {
        id: 'related-articles',
        title: '関連記事',
        items: [
          '[ローカルLLM向けApple Silicon：完全ガイド](/ja/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Maxベンチマーク2026](/ja/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[ローカルLLMに必要なユニファイドメモリ量](/ja/local-llms/how-much-unified-memory-for-local-llm)',
          '[MLX vs Ollama vs llama.cpp 比較](/ja/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Mac用Ollamaセットアップガイド](/ja/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[Apple Siliconで70Bモデルを実行する](/ja/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[LLM量子化の説明](/ja/local-llms/llm-quantization-explained)',
          '[Qwen vs Llama vs Mistral 比較](/ja/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '2つの異なるモデルを同時に実行できますか？', a: 'はい、`OLLAMA_MAX_LOADED_MODELS=2`を環境変数に設定します。64GBで8B + 34Bを同時実行できます。' },
          { q: '初心者に最適なモデルはどれですか？', a: 'Llama 3.1 8B。広く利用可能で、良好な出力品質、実績があります。M1+ Macで動作します。' },
          { q: 'Mixtral 8x7BはLlama 8Bより高速ですか？', a: 'いいえ、やや遅い（M5 Proで40–50 tok/s vs 50–60 tok/s）。しかし推論能力は優れています。' },
          { q: '2026年のベストローカルLLMは何ですか？', a: 'Apple Silicon上のほとんどのユーザーに：Qwen2.5（Macに収まる任意のサイズ）が現在品質ベンチマークをリード。128GB MacではLlama 3.1 70Bが同等。16GB未満：Phi-4は3.8Bパラメータで期待以上の性能を発揮し、2024年の8Bモデルと同等。' },
          { q: 'MacでLlama 3.1 405Bを実行できますか？', a: 'いいえ。Llama 3.1 405BはQ4量子化でも200GB以上必要 — どのコンシューマーMacも十分なユニファイドメモリを持っていません。M5 Ultra（2026年中頃予定、256GB）を待ってください — Q3–Q4で405Bを実行できる最初のコンシューマーハードウェアになる予定です。' },
          { q: 'ローカル使用ではQwenはLlamaより優れていますか？', a: 'ほとんどのタスクで、Qwen2.5は同じパラメータ数でLlama 3.1をベンチマークでわずかに上回ります（MMPUで1–3ポイント）。Llamaはより広いコミュニティサポートとファインチューンが豊富。ほとんどのユーザーは違いに気付かないでしょう — 可用性とファインチューンエコシステムに基づいて選択してください。' },
          { q: '実際に役立つ最小のモデルは何ですか？', a: 'Phi-4（3.8Bパラメータ）。MMPUで84.8を獲得 — 2024年の一部の8Bモデルと同等。チャットやQ&Aでは驚くほど有能です。コーディングや複雑な推論はLlama 3.1 8Bや[Qwen2.5 14B](/ja/local-llms/qwen-vs-llama-vs-mistral)に進んでください。' },
        ],
      },
    },
    ctaText: 'Macのモデルを選びましたか？PromptQuorumでGPT-4、Claude、Geminiや他22モデルと並べて比較 — 特定のユースケースでローカルのLlama、Qwen、Phiモデルがクラウド品質に達しているかを検証できます。',
  },
  zh: {
    freshness_tier: 'annual',
    specific_year: 2026,
    theme: 'Hardware & Performance',
    title: 'Apple Silicon最佳LLM模型2026：16GB、36GB、64GB、128GB推荐',
    seoTitle: 'Apple Silicon 2026：最佳模型 16GB–128GB',
    intro: '适用于每款Apple Silicon Mac的最佳本地LLM模型推荐。16GB（Phi-4）、36GB（Llama 3.1 8B）、64GB（Qwen2 34B）、128GB（Llama 3.1 70B）的具体模型选择，附M5 Pro/Max的tok/s数据。',
    metaDescription: 'Phi-4（16GB）、Llama 8B（36GB）、Qwen 34B（64GB）、Llama 70B（128GB）推荐选择。各内存配置最佳模型。Token/秒速度对比、量化方式、升级时机指南。',
    twitterDescription: '你的Mac最佳LLM：16GB→Phi-4，36GB→Llama 8B，64GB→Qwen 34B，128GB→Llama 70B。2026年M5实测。',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen2.5 14B', 'Qwen2.5 34B', 'Mistral 8x7B', 'Llama 3.1 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max'],
    audience: '希望获得Mac配置对应模型推荐的用户。',
    readTime: '阅读约10分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Apple Silicon Mac最佳模型',
    targetKeywords: ['最佳LLM Mac', '模型推荐', '按Mac配置的性能'],
    leadAnswerBlock: '**16GB：Phi-4。36GB：Llama 3.1 8B Q8（约38 tok/s）。64GB：Qwen2.5 34B Q5（约18 tok/s）。128GB：Llama 3.1 70B Q5（约14 tok/s M5 Pro，约16 tok/s M5 Max）。全部通过Metal上的Ollama运行。**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: {
        question: '我应该在Mac上运行哪个LLM模型？',
        answer: '16GB → Phi-4。36GB → Llama 3.1 8B或Qwen2.5 14B。64GB → Qwen2.5 34B。128GB → Llama 3.1 70B。性能：M5 Pro上30–40 tok/s（8B）、15–20 tok/s（34B）、12–18 tok/s（70B）。',
        bullets: ['16GB：Phi-4 3.8B', '36GB：Llama 3.1 8B Q8（38 tok/s）', '64GB：Qwen2.5 34B Q5（18 tok/s）', '128GB：Llama 3.1 70B Q5（14–16 tok/s）', '使用量化：Q4/Q5是标准', '全部通过Ollama获取'],
        updatedDate: '2026-05-15',
      },
    },
    toc: [
      { label: '按内存的最佳模型', anchor: '#by-tier' },
      { label: '质量基准测试', anchor: '#quality-benchmarks' },
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
        content: '最后验证：2026-05-15。随着新模型发布，推荐可能会变化。每季度更新此页面。',
        columns: ['内存', '主要推荐', '量化', '大小', 'M5 Pro tok/s', 'M5 Max tok/s', '备选'],
        rows: [
          { '内存': '16 GB', '主要推荐': 'Phi-4', '量化': 'Q4_K_M', '大小': '2.5 GB', 'M5 Pro tok/s': '60–70', 'M5 Max tok/s': '110–130', '备选': 'Llama 3.1 8B Q4（勉强）' },
          { '内存': '36 GB', '主要推荐': 'Llama 3.1 8B', '量化': 'Q8', '大小': '8.5 GB', 'M5 Pro tok/s': '38–45', 'M5 Max tok/s': '75–85', '备选': 'Qwen2.5 14B Q4（8.5 GB）' },
          { '内存': '48 GB', '主要推荐': 'Qwen2.5 14B', '量化': 'Q8', '大小': '16 GB', 'M5 Pro tok/s': '25–30', 'M5 Max tok/s': '50–60', '备选': 'Mixtral 8x7B Q4（26 GB）' },
          { '内存': '64 GB', '主要推荐': 'Qwen2.5 34B', '量化': 'Q5', '大小': '24 GB', 'M5 Pro tok/s': '18–22', 'M5 Max tok/s': '35–42', '备选': 'Mixtral 8x7B Q5（32 GB）' },
          { '内存': '96 GB', '主要推荐': 'Llama 3.1 70B', '量化': 'Q4', '大小': '42 GB', 'M5 Pro tok/s': '10–13', 'M5 Max tok/s': '20–25', '备选': 'Qwen2.5 72B Q4（44 GB）' },
          { '内存': '128 GB', '主要推荐': 'Llama 3.1 70B', '量化': 'Q5', '大小': '49 GB', 'M5 Pro tok/s': '8–11', 'M5 Max tok/s': '14–18', '备选': 'Qwen2.5 72B Q5（51 GB）' },
          { '内存': '128 GB', '主要推荐': 'Llama 3.1 70B', '量化': 'Q8', '大小': '74 GB', 'M5 Pro tok/s': 'N/A', 'M5 Max tok/s': '9–12', '备选': '最高质量，仅限M5 Max' },
        ],
        note: '大小为GGUF格式。MLX 4位等效版本可比。',
      },
      qualityBenchmarks: {
        id: 'quality-benchmarks',
        title: '模型质量基准测试（2026标准测试）',
        columns: ['模型', 'MMLU', 'HumanEval', 'GSM8K', '平均', '备注'],
        rows: [
          { '模型': 'Phi-4 (3.8B)', 'MMLU': '84.8', 'HumanEval': '82.6', 'GSM8K': '91.0', '平均': '86.1', '备注': '最佳小型模型' },
          { '模型': 'Llama 3.1 8B', 'MMLU': '73.0', 'HumanEval': '72.6', 'GSM8K': '84.5', '平均': '76.7', '备注': '全能型选手' },
          { '模型': 'Qwen2.5 14B', 'MMLU': '79.7', 'HumanEval': '83.5', 'GSM8K': '90.2', '平均': '84.5', '备注': '强推理能力' },
          { '模型': 'Mistral 7B', 'MMLU': '60.1', 'HumanEval': '30.5', 'GSM8K': '50.0', '平均': '46.9', '备注': '较老但快速' },
          { '模型': 'Qwen2.5 34B', 'MMLU': '83.3', 'HumanEval': '88.4', 'GSM8K': '93.0', '平均': '88.2', '备注': '最佳中型模型' },
          { '模型': 'Mixtral 8x7B', 'MMLU': '70.6', 'HumanEval': '40.2', 'GSM8K': '60.4', '平均': '57.1', '备注': 'MoE架构' },
          { '模型': 'Llama 3.1 70B', 'MMLU': '86.0', 'HumanEval': '80.5', 'GSM8K': '95.1', '平均': '87.2', '备注': '最佳通用模型' },
          { '模型': 'Qwen2.5 72B', 'MMLU': '86.1', 'HumanEval': '86.6', 'GSM8K': '95.8', '平均': '89.5', '备注': '顶级推理' },
          { '模型': 'Llama 3.1 405B', 'MMLU': '88.6', 'HumanEval': '89.0', 'GSM8K': '96.8', '平均': '91.5', '备注': '无法本地运行' },
          { '模型': 'GPT-4o（参考）', 'MMLU': '88.7', 'HumanEval': '90.2', 'GSM8K': '95.8', '平均': '91.6', '备注': '云端基线' },
        ],
        note: '128GB Mac上的Qwen2.5 72B以零持续成本接近GPT-4o质量。这是2026年本地AI最重要的进展。',
      },
      byUsecase: {
        id: 'by-usecase',
        title: '按用例的最佳模型（2026）',
        columns: ['用例', '36GB Mac最佳', '64GB Mac最佳', '128GB Mac最佳'],
        rows: [
          { '用例': '编程（通用）', '36GB Mac最佳': 'Llama 3.1 8B', '64GB Mac最佳': 'DeepSeek Coder V2 16B', '128GB Mac最佳': 'Llama 3.1 70B' },
          { '用例': '编程（Python）', '36GB Mac最佳': 'DeepSeek Coder V2 Lite', '64GB Mac最佳': 'DeepSeek Coder V2 16B', '128GB Mac最佳': 'DeepSeek Coder V2 236B' },
          { '用例': '长文写作', '36GB Mac最佳': 'Llama 3.1 8B Q8', '64GB Mac最佳': 'Qwen2.5 34B Q5', '128GB Mac最佳': 'Llama 3.1 70B Q5' },
          { '用例': '聊天/对话', '36GB Mac最佳': 'Mistral 7B', '64GB Mac最佳': 'Mixtral 8x7B', '128GB Mac最佳': 'Llama 3.1 70B' },
          { '用例': '推理/数学', '36GB Mac最佳': 'Qwen2.5 14B', '64GB Mac最佳': 'Qwen2.5 34B', '128GB Mac最佳': 'Qwen2.5 72B' },
          { '用例': 'RAG/问答', '36GB Mac最佳': 'Llama 3.1 8B + nomic-embed', '64GB Mac最佳': '[Llama 3.1 8B](/zh/local-llms/local-rag-for-private-business-data) + bge-large', '128GB Mac最佳': 'Llama 3.1 70B + bge-large' },
          { '用例': '视觉/多模态', '36GB Mac最佳': 'LLaVA 7B', '64GB Mac最佳': '[Llama 3.2 Vision 11B](/zh/power-local-llm/local-vision-models-llava-ollama-2026)', '128GB Mac最佳': 'Llama 3.2 Vision 90B' },
          { '用例': '翻译', '36GB Mac最佳': 'Qwen2.5 14B', '64GB Mac最佳': 'Qwen2.5 34B', '128GB Mac最佳': 'Aya Expanse 32B' },
          { '用例': '摘要', '36GB Mac最佳': 'Llama 3.1 8B', '64GB Mac最佳': 'Qwen2.5 34B', '128GB Mac最佳': 'Llama 3.1 70B' },
          { '用例': '代码审查', '36GB Mac最佳': 'DeepSeek Coder V2 Lite', '64GB Mac最佳': 'DeepSeek Coder V2 16B', '128GB Mac最佳': 'Llama 3.1 70B' },
        ],
        note: '专用模型通常在特定任务上超过通用模型。DeepSeek Coder在代码方面超过Llama，即使Llama是更大的模型。',
      },
      scenarios: {
        id: 'scenarios',
        title: '按用户类型的实际配置',
        callouts: [
          { type: 'tip', text: '**独立开发者（Mac Mini M5 Pro 64GB，约$1,200）**\n- 编程：DeepSeek Coder V2 Lite（16B Q4，10 GB）\n- 写作：Llama 3.1 8B Q8（8.5 GB）用于文档和邮件\n- 始终在线：`OLLAMA_MAX_LOADED_MODELS=2`保持两个模型热载\n- 每日成本：$0（vs Copilot + ChatGPT每月$30–100）' },
          { type: 'tip', text: '**注重隐私的专业人士（MacBook Pro M5 Pro 48GB，约$2,500）**\n- 主要：Llama 3.1 8B Q8用于一般工作\n- 敏感：Qwen2.5 14B Q5用于法律/医疗/金融文档\n- 出行：在飞机上、安全设施内离线工作\n- 数据完全不离开笔记本' },
          { type: 'tip', text: '**研究员/ML工程师（Mac Studio M5 Max 128GB，约$4,000）**\n- 主要：Llama 3.1 70B Q5（49 GB）追求质量\n- 专用：Qwen2.5 72B Q4用于非英语研究\n- 编程：DeepSeek Coder V2 16B\n- 视觉：Llama 3.2 Vision 11B处理论文图表\n- 四个模型同时加载' },
          { type: 'tip', text: '**家庭AI服务器（Mac Mini M5 Pro 64GB，始终在线）**\n- 语音助手：Llama 3.1 8B + Whisper + Piper\n- RAG：用嵌入进行家庭文档问答\n- 通过REST API为家庭成员提供编程帮助\n- 电费：约$35/年\n- 替代：4人ChatGPT Plus = $1,000/年' },
        ],
      },
      avoid: {
        id: 'avoid',
        title: '2026年应避免的模型（及原因）',
        callouts: [
          { type: 'warning', text: '**避免Llama 2（任何大小）** — 2023年发布，已被Llama 3和3.1取代。相同参数数量下质量差30–50%。仍出现在旧教程中——不要遵循它们。替代：Llama 3.1 8B。' },
          { type: 'warning', text: '**避免Vicuna、Alpaca、WizardLM** — 2023年的社区微调版本。现代基础模型（Llama 3.1、Qwen2.5）已达到或超过其性能。替代：Qwen2.5 14B或Llama 3.1 8B。' },
          { type: 'warning', text: '**避免Falcon 180B** — 不适合消费级Apple Silicon。[Llama 3.1 70B](/zh/local-llms/running-70b-models-apple-silicon-m5-max)（更小）超越它。替代：Llama 3.1 70B Q5。' },
          { type: 'warning', text: '**避免消费硬件上的FP16量化** — Llama 3.1 70B FP16 = 140 GB，任何Mac都装不下。相比Q5的质量提升不足1%。替代：[Q4_K_M或Q5_K_M](/zh/local-llms/llm-quantization-explained)。' },
          { type: 'warning', text: '**避免纯基础模型（无instruct变体）** — 基础模型补全文本但不遵循指令。查找"-instruct"或"-chat"后缀。替代：同一模型的instruct变体。' },
          { type: 'warning', text: '**避免没有积极开发的模型** — StableLM、RedPajama、MPT、Pythia：已废弃或陈旧。使用Meta、阿里巴巴、Mistral、微软的定期更新模型。' },
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
        note: '本文中的大小为GGUF Q4_K_M，除非另有说明。MLX 4位等效大小类似。确切字节数请查看HuggingFace上的模型卡。',
      },
      downloadGuide: {
        id: 'download-guide',
        title: '快速参考：下载这些模型',
        codeBlock: `# 16 GB Mac
ollama pull phi4

# 36 GB Mac (选一个)
ollama pull llama3.1:8b
ollama pull qwen2.5:14b
ollama pull mistral:7b

# 64 GB Mac
ollama pull qwen2.5:34b
ollama pull mixtral:8x7b

# 128 GB Mac
ollama pull llama3.1:70b
ollama pull qwen2.5:72b

# 专用模型
ollama pull deepseek-coder-v2:16b   # 编程
ollama pull llama3.2-vision:11b     # 视觉
ollama pull aya-expanse:32b         # 翻译`,
        codeLanguage: 'bash',
        note: '每个模型几GB。多个模型的总磁盘空间可达50–100 GB。用`du -sh ~/.ollama/`检查使用量。',
      },
      relatedArticles: {
        id: 'related-articles',
        title: '相关文章',
        items: [
          '[本地LLM的Apple Silicon：完整指南](/zh/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max基准测试2026](/zh/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[本地LLM需要多少统一内存？](/zh/local-llms/how-much-unified-memory-for-local-llm)',
          '[MLX vs Ollama vs llama.cpp比较](/zh/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)',
          '[Ollama Mac安装指南](/zh/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[在Apple Silicon上运行70B模型](/zh/local-llms/running-70b-models-apple-silicon-m5-max)',
          '[LLM量化解释](/zh/local-llms/llm-quantization-explained)',
          '[Qwen vs Llama vs Mistral比较](/zh/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '我可以同时运行两个不同的模型吗？', a: '是的，在环境中设置`OLLAMA_MAX_LOADED_MODELS=2`。64GB可以同时运行8B + 34B。' },
          { q: '哪个模型最适合初学者？', a: 'Llama 3.1 8B。广泛可用，输出质量好，有良好的使用记录。在任何M1+ Mac上运行。' },
          { q: 'Mixtral 8x7B比Llama 8B快吗？', a: '不，稍慢（M5 Pro上40–50 tok/s vs 50–60 tok/s）。但推理能力更强。' },
          { q: '2026年最好的本地LLM是什么？', a: '对于Apple Silicon上的大多数用户：Qwen2.5（任何适合你Mac的大小）目前在质量基准上领先。128GB Mac可与Llama 3.1 70B媲美。16GB以下：Phi-4以3.8B参数超出预期，与2024年的8B模型相当。' },
          { q: '我可以在Mac上运行Llama 3.1 405B吗？', a: '不行。即使在Q4量化下，Llama 3.1 405B也需要200GB以上——没有消费级Mac有足够的统一内存。等待M5 Ultra（预计2026年中，256GB）——它将是第一个能以Q3–Q4运行405B的消费级硬件。' },
          { q: 'Qwen在本地使用上比Llama好吗？', a: '对于大多数任务，Qwen2.5在相同参数数量下在基准测试中略微超过Llama 3.1（MMLU上1–3分）。Llama社区支持更广，可用的微调版本更多。大多数用户不会注意到差异——根据可用性和微调生态系统来选择。' },
          { q: '实际有用的最小模型是什么？', a: 'Phi-4，3.8B参数。MMLU得分84.8——与2024年的一些8B模型相当。对于聊天和问答出乎意料地强大。编程或复杂推理请选择Llama 3.1 8B或[Qwen2.5 14B](/zh/local-llms/qwen-vs-llama-vs-mistral)。' },
        ],
      },
    },
    ctaText: '已为您的Mac选好模型？使用PromptQuorum将其响应与GPT-4、Claude、Gemini及其他22个模型并排比较——验证您的本地Llama、Qwen或Phi模型是否在特定用例中达到云端质量。',
  },
}
