import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    title: 'Running 70B+ Models on Apple Silicon 2026: M5 Max Complete Guide',
    seoTitle: 'Running 70B Models on Apple Silicon M5 Max 128GB: Setup, Quantization, Quality vs GPT-4o',
    intro: 'Run 70B and larger LLMs locally on Apple Silicon M5 Max (128GB). Complete setup guide with Ollama and MLX, quantization comparison (Q4/Q5/Q8), 8B vs 70B quality benchmarks, real tok/s numbers, 70B vs cloud API cost analysis, alternative 70B+ models, speed optimization, and M5 Ultra projections for 2026.',
    metaDescription: 'Run 70B LLMs on M5 Max 128GB: step-by-step setup, Q4/Q5/Q8 quantization guide, speed benchmarks, quality vs GPT-4o, and M5 Ultra preview. Complete 2026 guide.',
    twitterDescription: '70B LLMs on M5 Max 128GB: 12–20 tok/s, Q4–Q8 options, matches cloud quality within 3%, $0/month. Full setup + benchmark guide.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Llama 3.1 70B', 'Qwen2.5 72B', 'DeepSeek 67B', 'Mixtral 8x22B', 'Llama 3.1 8B'],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'M5 Max owners and prospective buyers wanting maximum local LLM quality without cloud APIs.',
    readTime: '16 min read',
    educationalLevel: 'Advanced',
    primaryTerm: '70B models Apple Silicon',
    targetKeywords: ['70B model Mac', 'M5 Max 128GB LLM', 'run 70B locally', 'Llama 70B Apple Silicon', 'large model local inference'],
    ctaText: 'Running Llama 3.1 70B locally on M5 Max? Compare your local responses against GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and 22 other cloud models with PromptQuorum — validate that your $4,000 hardware investment matches cloud quality for your specific reasoning, coding, and writing tasks. All in one dispatch.',
    leadAnswerBlock: '**M5 Max 128GB runs Llama 3.1 70B at 15–20 tok/s (Q4_K_M) or 12–16 tok/s (Q5_K_M). 70B Q5 scores 86.1 on MMLU — within 3% of GPT-4o (88.7) — while running locally for $0/month. It is the only consumer hardware that fits 70B without complex multi-GPU setups. Setup takes under 10 minutes with Ollama.**',
    quickAnswerTop: {
      en: {
        question: 'Can I run 70B models on M5 Max 128GB?',
        answer: 'Yes. Llama 3.1 70B Q5_K_M runs at 12–16 tok/s. Q4_K_M at 15–20 tok/s. Q8_0 at 8–12 tok/s (lossless quality). All fit in 128GB unified memory. Setup is 10 minutes with Ollama. 70B Q5 matches GPT-4o quality within 3% on standard benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, good quality',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, very good (recommended)',
          '70B Q8_0: 74 GB, 8–12 tok/s, lossless quality',
          'Only consumer option without multi-GPU complexity',
          'MMLU: 70B Q5 = 86.1 vs GPT-4o = 88.7 (3% gap)',
          'Setup: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-05-15',
      },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Why 70B Matters', anchor: '#why' },
      { label: 'Hardware Requirements', anchor: '#hardware' },
      { label: 'Step-by-Step Setup', anchor: '#setup' },
      { label: 'Quality: 8B vs 70B vs GPT-4o', anchor: '#quality' },
      { label: 'Quantization Deep Dive', anchor: '#quantization' },
      { label: 'Alternative 70B+ Models', anchor: '#alternatives' },
      { label: '70B Local vs Cloud APIs', anchor: '#vs-cloud' },
      { label: 'Practical Use Cases', anchor: '#use-cases' },
      { label: 'Speed Optimization', anchor: '#speed-opts' },
      { label: 'M5 Ultra Preview', anchor: '#m5ultra' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Articles', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Why 70B Matters: The Quality Jump from 8B',
        content: [
          'The leap from 8B to 70B parameters is the most significant quality threshold in local AI. Industry benchmark scores:',
        ],
        tableFormat: true,
        columns: ['Benchmark', 'Llama 3.1 8B', 'Llama 3.1 70B Q5', 'GPT-4o'],
        rows: [
          { 'Benchmark': 'MMLU (general knowledge)', 'Llama 3.1 8B': '73.0', 'Llama 3.1 70B Q5': '86.1', 'GPT-4o': '88.7' },
          { 'Benchmark': 'HumanEval (code)', 'Llama 3.1 8B': '72.6', 'Llama 3.1 70B Q5': '80.5', 'GPT-4o': '90.2' },
          { 'Benchmark': 'GSM8K (math)', 'Llama 3.1 8B': '84.5', 'Llama 3.1 70B Q5': '95.1', 'GPT-4o': '95.8' },
          { 'Benchmark': 'BBH (reasoning)', 'Llama 3.1 8B': '71.0', 'Llama 3.1 70B Q5': '85.3', 'GPT-4o': '88.9' },
          { 'Benchmark': 'Average', 'Llama 3.1 8B': '75.3', 'Llama 3.1 70B Q5': '86.8', 'GPT-4o': '90.9' },
        ],
        note: '70B Q5 closes 75% of the quality gap between 8B and GPT-4o — while running locally for $0/month.',
      },
      hardware: {
        id: 'hardware',
        title: 'What Hardware Runs 70B Models',
        tableFormat: true,
        columns: ['Hardware', 'Quantization', 'Model Size', 'tok/s', 'Quality', 'Fits?'],
        rows: [
          { 'Hardware': 'M3 Max 96GB', 'Quantization': 'Q4_K_M', 'Model Size': '42 GB', 'tok/s': '9–13', 'Quality': 'Good', 'Fits?': '✓ Yes' },
          { 'Hardware': 'M3 Max 128GB', 'Quantization': 'Q5_K_M', 'Model Size': '49 GB', 'tok/s': '8–12', 'Quality': 'Very good', 'Fits?': '✓ Yes' },
          { 'Hardware': 'M4 Max 128GB', 'Quantization': 'Q5_K_M', 'Model Size': '49 GB', 'tok/s': '10–14', 'Quality': 'Very good', 'Fits?': '✓ Yes' },
          { 'Hardware': 'M5 Max 128GB', 'Quantization': 'Q4_K_M', 'Model Size': '42 GB', 'tok/s': '15–20', 'Quality': 'Good', 'Fits?': '✓ Yes' },
          { 'Hardware': 'M5 Max 128GB', 'Quantization': 'Q5_K_M', 'Model Size': '49 GB', 'tok/s': '12–16', 'Quality': 'Very good', 'Fits?': '✓ Yes' },
          { 'Hardware': 'M5 Max 128GB', 'Quantization': 'Q8_0', 'Model Size': '74 GB', 'tok/s': '8–12', 'Quality': 'Lossless', 'Fits?': '✓ Yes' },
          { 'Hardware': 'M5 Ultra 256GB (projected)', 'Quantization': 'FP16', 'Model Size': '140 GB', 'tok/s': '14–18', 'Quality': 'Perfect', 'Fits?': '✓ Yes' },
          { 'Hardware': 'RTX 4090 24GB', 'Quantization': 'Any', 'Model Size': '42 GB+', 'tok/s': '—', 'Quality': '—', 'Fits?': '✗ OOM' },
          { 'Hardware': 'Dual RTX 3090 48GB', 'Quantization': 'Q4_K_M', 'Model Size': '42 GB', 'tok/s': '12–15', 'Quality': 'Good', 'Fits?': '✓ Yes (complex)' },
          { 'Hardware': 'Dual RTX 4090 48GB', 'Quantization': 'Q5_K_M', 'Model Size': '49 GB', 'tok/s': '18–25', 'Quality': 'Very good', 'Fits?': '✓ Yes ($5,000+)' },
          { 'Hardware': '4× RTX 3090 96GB', 'Quantization': 'Q8_0', 'Model Size': '74 GB', 'tok/s': '12–16', 'Quality': 'Lossless', 'Fits?': '✓ Yes (expensive)' },
        ],
        note: 'M5 Max 128GB is the only consumer hardware that runs 70B models without complex multi-GPU setups. The Mac Studio config at $4,000 replaces $5,000–8,000 NVIDIA multi-GPU rigs.',
      },
      setupInstall: {
        id: 'setup',
        title: 'Step-by-Step: Running 70B on M5 Max 128GB',
        content: [
          'Step 1: Verify your hardware. Step 2: Install and configure Ollama.',
        ],
        codeBlock: `# Step 1: Verify unified memory (must show 128 GB)
system_profiler SPHardwareDataType | grep Memory
# → Memory: 128 GB

# Step 2: Install Ollama
brew install ollama
brew services start ollama

# Step 3: Configure for 70B (keep model loaded, avoid 60-sec warmup on each request)
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
echo 'export OLLAMA_NUM_PARALLEL=1' >> ~/.zshrc
source ~/.zshrc
brew services restart ollama`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: 'Step 3: Pull the 70B Model',
        content: [
          'Download time on 100 Mbps: 45–90 minutes. On 1 Gbps: 5–10 minutes.',
        ],
        codeBlock: `# Recommended: Q5_K_M — best quality/speed balance (49 GB download)
ollama pull llama3.1:70b-instruct-q5_K_M

# Alternative: Q4 — max speed, 42 GB download
ollama pull llama3.1:70b-instruct-q4_K_M

# Alternative: Q8 — lossless quality, 74 GB download
ollama pull llama3.1:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: 'Step 4–6: First Run, Verify Metal, Check Memory',
        content: [
          'First request takes 30–60 seconds to load 49 GB into unified memory. Subsequent requests are instant.',
        ],
        codeBlock: `# Step 4: First run (wait 30-60 sec for model load)
ollama run llama3.1:70b-instruct-q5_K_M "Write a 200-word essay on local AI"

# Step 5: Verify Metal GPU acceleration is active
ollama run llama3.1:70b-instruct-q5_K_M --verbose
# Expected: ggml_metal_init: found device: Apple M5 Max

# Step 6: API access for your applications
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.1:70b-instruct-q5_K_M",
  "messages": [{"role": "user", "content": "Explain quantum computing"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: 'Quality Comparison: 8B vs 70B vs GPT-4o',
        content: [
          'Prompt: "Explain why a stack overflow happens in recursive functions, then write a Python function that detects infinite recursion before it crashes."',
          'Llama 3.1 8B Q4 response (runs on any 16GB+ Mac):',
        ],
        blockquote: 'A stack overflow happens when too many function calls exceed memory.',
        codeBlock: `def detect_recursion(func):
    count = 0
    try:
        func()
    except RecursionError:
        count += 1
    return count > 0`,
        codeLanguage: 'python',
        note: 'Misses key insight: needs sys.setrecursionlimit, does not handle the actual detection logic correctly.',
      },
      quality70B: {
        id: 'quality-70b',
        title: 'Llama 3.1 70B Q5 Response (M5 Max 128GB)',
        blockquote: 'Stack overflow in recursion occurs when the call stack exceeds the OS-imposed limit (typically 1MB–8MB). Each recursive call adds a stack frame containing local variables and return address. Python\'s default limit is 1000 calls.',
        codeBlock: `import sys
import functools

def detect_recursion(threshold=900):
    def decorator(func):
        depth = 0
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            nonlocal depth
            depth += 1
            try:
                if depth > threshold:
                    raise RecursionError(
                        f"Detected potential infinite recursion at depth {depth}"
                    )
                return func(*args, **kwargs)
            finally:
                depth -= 1
        return wrapper
    return decorator`,
        codeLanguage: 'python',
        note: 'Correct: decorator pattern, depth tracking, proactive detection before crash, configurable threshold. GPT-4o adds slightly more elegant error handling — a 3% quality gap in practice.',
      },
      quantization: {
        id: 'quantization',
        title: 'Quantization Deep Dive for 70B Models',
        items: [
          'Q4 vs Q5 quality difference is LARGER on 70B than on 8B. Q4: ~3–5% quality loss. Q5: ~0.5–1% loss vs FP16.',
          'On 8B models, Q4 vs Q8 is barely noticeable. On 70B, Q4 vs Q8 is significant for complex reasoning and code.',
          'Recommendation: Q5_K_M is the best balance. If speed is critical (chat, autocomplete), use Q4. If output quality is critical (legal, code review), use Q8.',
          'Memory: Q4 = 42 GB, Q5 = 49 GB, Q8 = 74 GB. All fit in M5 Max 128GB. Leave headroom for OS (~8 GB) and apps.',
          'Practical tok/s: Q4 = 15–20, Q5 = 12–16, Q8 = 8–12. At 12 tok/s, a 500-word response takes ~40 seconds.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternative 70B+ Models for Apple Silicon',
        tableFormat: true,
        columns: ['Model', 'Size (Q5)', 'Best For', 'tok/s on M5 Max'],
        rows: [
          { 'Model': 'Llama 3.1 70B Instruct', 'Size (Q5)': '49 GB', 'Best For': 'General use, reasoning', 'tok/s on M5 Max': '12–16' },
          { 'Model': 'Qwen2.5 72B Instruct', 'Size (Q5)': '51 GB', 'Best For': 'Multilingual, math, code', 'tok/s on M5 Max': '11–15' },
          { 'Model': 'DeepSeek 67B', 'Size (Q5)': '47 GB', 'Best For': 'Coding excellence', 'tok/s on M5 Max': '12–16' },
          { 'Model': 'Llama 3.1 70B Coder', 'Size (Q5)': '49 GB', 'Best For': 'Pure coding tasks', 'tok/s on M5 Max': '13–17' },
          { 'Model': 'Mixtral 8x22B (MoE)', 'Size (Q4)': '88 GB', 'Best For': 'High-quality reasoning', 'tok/s on M5 Max': '18–22' },
          { 'Model': 'Cohere Command R+ 104B', 'Size (Q4)': '73 GB', 'Best For': 'RAG, 128K context', 'tok/s on M5 Max': '8–12' },
        ],
        note: 'Recommendations by use case: General reasoning → Llama 3.1 70B Q5. Code → DeepSeek 67B. Non-English → Qwen2.5 72B. Document Q&A → Command R+. Maximum speed → Mixtral 8x22B (MoE uses fewer active params).',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: 'Pull Alternative Models',
        codeBlock: `ollama pull qwen2.5:72b-instruct-q5_K_M
ollama pull deepseek-coder:67b-q5_K_M
ollama pull mixtral:8x22b`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '70B Local vs Cloud APIs — Detailed Comparison',
        tableFormat: true,
        columns: ['Metric', '70B Q5 Local (M5 Max)', 'GPT-4o API', 'Claude Sonnet 3.5', 'Gemini 1.5 Pro'],
        rows: [
          { 'Metric': 'Quality (MMLU)', '70B Q5 Local (M5 Max)': '86.1', 'GPT-4o API': '88.7', 'Claude Sonnet 3.5': '88.7', 'Gemini 1.5 Pro': '85.9' },
          { 'Metric': 'Speed (tok/s)', '70B Q5 Local (M5 Max)': '12–16', 'GPT-4o API': '50–80', 'Claude Sonnet 3.5': '50–80', 'Gemini 1.5 Pro': '60–100' },
          { 'Metric': 'First token latency', '70B Q5 Local (M5 Max)': '1–2 sec', 'GPT-4o API': '0.3–0.8 sec', 'Claude Sonnet 3.5': '0.4–0.9 sec', 'Gemini 1.5 Pro': '0.5–1 sec' },
          { 'Metric': 'Cost per 1M tokens', '70B Q5 Local (M5 Max)': '$0', 'GPT-4o API': '$2.50/$10.00', 'Claude Sonnet 3.5': '$3.00/$15.00', 'Gemini 1.5 Pro': '$1.25/$5.00' },
          { 'Metric': 'Cost/month (5M tokens)', '70B Q5 Local (M5 Max)': '$0', 'GPT-4o API': '$50–150', 'Claude Sonnet 3.5': '$75–200', 'Gemini 1.5 Pro': '$30–80' },
          { 'Metric': 'Privacy', '70B Q5 Local (M5 Max)': '100% local', 'GPT-4o API': 'Sent to OpenAI', 'Claude Sonnet 3.5': 'Sent to Anthropic', 'Gemini 1.5 Pro': 'Sent to Google' },
          { 'Metric': 'Internet required', '70B Q5 Local (M5 Max)': 'No', 'GPT-4o API': 'Yes', 'Claude Sonnet 3.5': 'Yes', 'Gemini 1.5 Pro': 'Yes' },
          { 'Metric': 'Rate limits', '70B Q5 Local (M5 Max)': 'None', 'GPT-4o API': 'Tier-based', 'Claude Sonnet 3.5': 'Tier-based', 'Gemini 1.5 Pro': 'Tier-based' },
          { 'Metric': 'Customization', '70B Q5 Local (M5 Max)': 'Full (fine-tune locally)', 'GPT-4o API': 'Limited', 'Claude Sonnet 3.5': 'Limited', 'Gemini 1.5 Pro': 'Limited' },
        ],
        note: '70B Q5 local matches cloud quality within 3% on MMLU. At $4,000 hardware cost and $50–150/month cloud savings, payback period is 27–80 months depending on usage. Privacy-sensitive work (medical, legal, financial) has no cloud alternative.',
      },
      useCases: {
        id: 'use-cases',
        title: 'Practical Use Cases for 70B Local Inference',
        numberedItems: [
          { title: 'Confidential Document Analysis', whyItMatters: 'Legal contracts, medical records, financial statements, M&A due diligence. Cloud APIs not acceptable under HIPAA, GDPR, or NDA. 70B Q5 on M5 Max delivers cloud-quality analysis with zero data exfiltration.' },
          { title: 'High-Volume Coding Assistance', whyItMatters: 'Solo developer using Copilot 8h/day: ~$10/month. Team of 10 using 70B Coder locally: $0/month. Code never leaves the company network. M5 Max as shared inference server pays back in 3 months for a 10-person team.' },
          { title: 'Long-Form Content Generation', whyItMatters: '5,000-word blog posts, technical documentation. 70B produces dramatically better long-form than 8B. Local: no token limits, no rate limits. Generate 50,000 words/day for $0 vs $50–100 in API costs.' },
          { title: 'Research and Academic Use', whyItMatters: 'Process thousands of papers for literature review, generate hypotheses across many domains. 70B reasoning quality is required. Cloud costs are prohibitive for student and postdoc budgets.' },
          { title: 'Privacy-First Personal AI', whyItMatters: 'Personal journal analysis, family financial planning, health reflection with private data. Replaces ChatGPT Plus for an entire household. Zero data sent to third parties.' },
          { title: 'Offline Critical Workflows', whyItMatters: 'Field journalists in restrictive regions, medical professionals in remote areas, travel without reliable internet, secure facilities with no external network access.' },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: 'Speed Optimization: MLX vs Ollama',
        content: [
          'MLX is Apple\'s native ML framework and runs 15–25% faster than Ollama on the same model. M5 Max with 70B Q5: Ollama = 12–16 tok/s, MLX = 18–22 tok/s.',
        ],
        codeBlock: `from mlx_lm import load, generate

# Load 70B Q5 model (MLX-converted version from Hugging Face)
model, tokenizer = load("mlx-community/Llama-3.1-70B-Instruct-Q5")

# Streaming generation — user sees first word in 1-2 sec
from mlx_lm import stream_generate
for chunk in stream_generate(model, tokenizer, "Explain quantum computing", max_tokens=500):
    print(chunk, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: 'Additional Speed Tips',
        items: [
          'Keep model warm: set OLLAMA_KEEP_ALIVE=1h (or 24h for always-on Mac Mini) to avoid the 30–60 second reload on each request.',
          'Use streaming: user sees first token in 1–2 seconds instead of waiting 25–40 seconds for full response.',
          'Lower max_tokens: if you need 200-word answers, set max_tokens=200. At 14 tok/s: 200 tokens = 14 sec vs 36 sec for 500 tokens.',
          'Q4 vs Q5 speed tradeoff: Q4 = 15–20 tok/s (+25% faster than Q5). Quality difference is ~2–3% on most tasks. For chat use Q4, for critical reasoning use Q5.',
          'Avoid running other GPU-intensive apps during inference — Activity Monitor GPU History shows if other processes compete for Metal bandwidth.',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'M5 Ultra Preview: The Next Capability Tier (Expected Mid-2026)',
        content: [
          'Based on Apple\'s prior Ultra pattern (2× Max specs), M5 Ultra projections: 256 GB unified memory, ~1,200 GB/s bandwidth, ~80 GPU cores. Expected in Mac Studio Ultra only.',
        ],
        tableFormat: true,
        columns: ['Model', 'M5 Max 128GB', 'M5 Ultra 256GB (projected)'],
        rows: [
          { 'Model': 'Llama 3.1 70B Q5', 'M5 Max 128GB': '12–16 tok/s', 'M5 Ultra 256GB (projected)': '24–32 tok/s' },
          { 'Model': 'Llama 3.1 70B Q8', 'M5 Max 128GB': '8–12 tok/s', 'M5 Ultra 256GB (projected)': '16–24 tok/s' },
          { 'Model': 'Llama 3.1 70B FP16 (lossless)', 'M5 Max 128GB': '✗ Does not fit', 'M5 Ultra 256GB (projected)': '14–18 tok/s' },
          { 'Model': 'Qwen2.5 72B Q8', 'M5 Max 128GB': '8–12 tok/s', 'M5 Ultra 256GB (projected)': '16–24 tok/s' },
          { 'Model': 'Mixtral 8x22B Q5', 'M5 Max 128GB': '14–18 tok/s', 'M5 Ultra 256GB (projected)': '28–36 tok/s' },
          { 'Model': 'Llama 3.1 405B Q3', 'M5 Max 128GB': '✗ Does not fit', 'M5 Ultra 256GB (projected)': '4–6 tok/s' },
          { 'Model': 'Llama 3.1 405B Q4 (~200 GB)', 'M5 Max 128GB': '✗ Does not fit', 'M5 Ultra 256GB (projected)': '3–5 tok/s' },
        ],
        note: 'M5 Ultra unlocks: (1) Lossless 70B FP16 — first on consumer hardware. (2) 405B parameter models. (3) Two simultaneous 70B models. Projected price: $5,500–7,000 (Mac Studio Ultra). When to wait: if you need 405B models, 70B FP16, or already own M3/M4 Max.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is 70B Q4 good enough for most tasks?',
            a: 'Yes. Q4 is the industry standard quantization. The ~3–5% quality loss vs Q5 is unnoticeable for most chat, writing, and general-purpose tasks. Use Q5 or Q8 only when output quality is critical (legal analysis, code review, medical use).',
          },
          {
            q: 'Can I run 70B Q5 and another model simultaneously?',
            a: 'Yes, with one smaller model. 70B Q5 = 49 GB. 128 GB minus 8 GB OS overhead = 120 GB. You can load 70B Q5 (49 GB) + a 7–8B model (5 GB) = 54 GB total — well within budget. Two simultaneous 70B models require M5 Ultra 256 GB.',
          },
          {
            q: 'When should I wait for M5 Ultra instead of buying M5 Max now?',
            a: 'Wait for M5 Ultra if: (1) you need 70B FP16 (lossless quality), (2) you need 405B models, or (3) you already own M3 Max or M4 Max (skip M5 Max). Buy M5 Max now if: you need 70B capability today and your budget is under $5,000.',
          },
          {
            q: 'How much faster will 70B be on M5 Ultra vs M5 Max?',
            a: 'Approximately 2× faster, based on doubled memory bandwidth (~1,200 GB/s vs 614 GB/s). M5 Max runs 70B Q5 at 12–16 tok/s; M5 Ultra is projected at 24–32 tok/s. M5 Ultra will also run 70B FP16 (lossless quality), which M5 Max cannot fit.',
          },
          {
            q: 'Can I run two 70B models at the same time on M5 Max 128GB?',
            a: 'No, not two full 70B models. Two 70B Q4 models = 84 GB plus OS overhead = ~95 GB, which is tight on 128 GB. M5 Ultra 256 GB easily handles two simultaneous 70B models or one 70B + one 34B.',
          },
          {
            q: 'What disk space do I need for 70B models?',
            a: 'Each 70B model takes 42 GB (Q4), 49 GB (Q5), or 74 GB (Q8) on disk. If you keep 3 quantizations of one model for comparison: 165 GB. For serious 70B work with multiple models, get 1 TB or 2 TB SSD on Mac Studio.',
          },
          {
            q: 'Is 70B local actually as good as GPT-4o for my specific use case?',
            a: '70B Q5 scores 86.1 on MMLU vs GPT-4o at 88.7 — a 3% gap on benchmarks. For complex reasoning and nuanced writing, GPT-4o still leads slightly. For privacy-sensitive work, heavy usage ($50+/month), or offline use, local wins automatically. Test with your own prompts to verify for your workflow.',
          },
          {
            q: 'Will Llama 4 or newer 70B models work on M5 Max?',
            a: 'Yes. M5 Max 128 GB fits any 70B model in Q4/Q5/Q8 quantization regardless of architecture. New 70B releases (Llama 4, Qwen3, etc.) typically appear on Ollama within days of release. Run ollama pull with the new model name.',
          },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Related Articles',
        items: [
          '[Apple Silicon for Local LLMs: Complete Guide](/local-llms/apple-silicon-local-llm-guide-2026) — M1 to M5 Max comparison, unified memory explained',
          '[M5 Pro vs M5 Max LLM Benchmarks 2026](/local-llms/m5-pro-max-llm-benchmarks-2026) — detailed tok/s numbers across model sizes',
          '[How Much Unified Memory for Local LLMs?](/local-llms/how-much-unified-memory-for-local-llm) — 16GB vs 36GB vs 64GB vs 128GB guide',
          '[Best LLM Models for Apple Silicon](/local-llms/best-models-apple-silicon-2026) — model recommendations per Mac configuration',
          '[MLX vs Ollama vs llama.cpp on Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — framework speed comparison and setup guide',
          '[Apple Silicon vs NVIDIA GPU for Local LLMs](/local-llms/apple-silicon-vs-nvidia-gpu-local-llm) — cross-platform hardware comparison',
          '[LLM Quantization Explained](/local-llms/llm-quantization-explained) — Q4/Q5/Q8/FP16 deep dive',
          '[Mac Mini M5 as Local AI Server](/local-llms/mac-mini-m5-local-ai-server) — always-on inference server setup',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    title: '70B+-Modelle auf Apple Silicon 2026: M5 Max Kompletleitfaden',
    seoTitle: '70B-Modelle auf Apple Silicon M5 Max 128 GB: Einrichtung, Quantisierung, Qualität vs GPT-4o',
    intro: '70B und größere LLMs lokal auf dem Apple Silicon M5 Max (128 GB) ausführen. Vollständiger Einrichtungsleitfaden mit Ollama und MLX, Quantisierungsvergleich (Q4/Q5/Q8), 8B-vs-70B-Qualitätsbenchmarks, reale tok/s-Werte, 70B-vs-Cloud-API-Kostenanalyse, alternative 70B+-Modelle, Geschwindigkeitsoptimierung und M5-Ultra-Prognosen für 2026.',
    metaDescription: '70B LLMs auf M5 Max 128 GB: Schritt-für-Schritt-Einrichtung, Q4/Q5/Q8-Quantisierungsleitfaden, Benchmarks, Qualität vs GPT-4o und M5-Ultra-Vorschau. Vollständiger Leitfaden 2026.',
    twitterDescription: '70B LLMs auf M5 Max 128 GB: 12–20 tok/s, Q4–Q8, entspricht Cloud-Qualität innerhalb 3 %, 0 €/Monat. Vollständiger Einrichtungs- und Benchmark-Leitfaden.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Llama 3.1 70B', 'Qwen2.5 72B', 'DeepSeek 67B', 'Mixtral 8x22B', 'Llama 3.1 8B'],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'M5-Max-Besitzer und potenzielle Käufer, die maximale lokale LLM-Qualität ohne Cloud-APIs anstreben.',
    readTime: '16 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: '70B-Modelle Apple Silicon',
    targetKeywords: ['70B-Modell Mac', 'M5 Max 128 GB LLM', '70B lokal ausführen', 'Llama 70B Apple Silicon', 'großes Modell lokale Inferenz'],
    ctaText: 'Llama 3.1 70B lokal auf dem M5 Max ausführen? Vergleichen Sie Ihre lokalen Antworten mit GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro und 22 weiteren Cloud-Modellen mit PromptQuorum – validieren Sie, ob Ihre 4.000-€-Hardware-Investition für Ihre Reasoning-, Coding- und Writing-Aufgaben Cloud-Qualität erreicht. Alles in einem Dispatch.',
    leadAnswerBlock: '**M5 Max 128 GB führt Llama 3.1 70B mit 15–20 tok/s (Q4_K_M) oder 12–16 tok/s (Q5_K_M) aus. 70B Q5 erreicht 86,1 auf MMLU – innerhalb von 3 % von GPT-4o (88,7) – und läuft lokal für 0 €/Monat. Es ist die einzige Consumer-Hardware, die 70B ohne komplexe Multi-GPU-Konfigurationen unterstützt. Die Einrichtung dauert unter 10 Minuten mit Ollama.**',
    quickAnswerTop: {
      en: {
        question: 'Can I run 70B models on M5 Max 128GB?',
        answer: 'Yes. Llama 3.1 70B Q5_K_M runs at 12–16 tok/s. Q4_K_M at 15–20 tok/s. Q8_0 at 8–12 tok/s (lossless quality). All fit in 128GB unified memory. Setup is 10 minutes with Ollama. 70B Q5 matches GPT-4o quality within 3% on standard benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, good quality',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, very good (recommended)',
          '70B Q8_0: 74 GB, 8–12 tok/s, lossless quality',
          'Only consumer option without multi-GPU complexity',
          'MMLU: 70B Q5 = 86.1 vs GPT-4o = 88.7 (3% gap)',
          'Setup: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-05-15',
      },
      de: {
        question: 'Kann ich 70B-Modelle auf dem M5 Max 128 GB ausführen?',
        answer: 'Ja. Llama 3.1 70B Q5_K_M läuft mit 12–16 tok/s. Q4_K_M mit 15–20 tok/s. Q8_0 mit 8–12 tok/s (verlustfreie Qualität). Alle passen in den 128-GB-Unified-Memory. Die Einrichtung dauert 10 Minuten mit Ollama. 70B Q5 erreicht innerhalb von 3 % die GPT-4o-Qualität bei Standard-Benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, gute Qualität',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, sehr gut (empfohlen)',
          '70B Q8_0: 74 GB, 8–12 tok/s, verlustfreie Qualität',
          'Einzige Consumer-Option ohne komplexe Multi-GPU-Konfiguration',
          'MMLU: 70B Q5 = 86,1 vs GPT-4o = 88,7 (3 % Unterschied)',
          'Einrichtung: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-05-15',
      },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Warum 70B wichtig ist', anchor: '#why' },
      { label: 'Hardware-Anforderungen', anchor: '#hardware' },
      { label: 'Schritt-für-Schritt-Einrichtung', anchor: '#setup' },
      { label: 'Qualität: 8B vs 70B vs GPT-4o', anchor: '#quality' },
      { label: 'Quantisierung im Detail', anchor: '#quantization' },
      { label: 'Alternative 70B+-Modelle', anchor: '#alternatives' },
      { label: '70B Lokal vs Cloud-APIs', anchor: '#vs-cloud' },
      { label: 'Praxisanwendungen', anchor: '#use-cases' },
      { label: 'Geschwindigkeitsoptimierung', anchor: '#speed-opts' },
      { label: 'M5-Ultra-Vorschau', anchor: '#m5ultra' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Verwandte Artikel', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Warum 70B wichtig ist: Der Qualitätssprung gegenüber 8B',
        content: ['Der Sprung von 8B auf 70B Parameter ist der bedeutendste Qualitätsschwellenwert bei lokaler KI. Branchen-Benchmark-Werte:'],
        tableFormat: true,
        columns: ['Benchmark', 'Llama 3.1 8B', 'Llama 3.1 70B Q5', 'GPT-4o'],
        rows: [
          { 'Benchmark': 'MMLU (Allgemeinwissen)', 'Llama 3.1 8B': '73,0', 'Llama 3.1 70B Q5': '86,1', 'GPT-4o': '88,7' },
          { 'Benchmark': 'HumanEval (Code)', 'Llama 3.1 8B': '72,6', 'Llama 3.1 70B Q5': '80,5', 'GPT-4o': '90,2' },
          { 'Benchmark': 'GSM8K (Mathematik)', 'Llama 3.1 8B': '84,5', 'Llama 3.1 70B Q5': '95,1', 'GPT-4o': '95,8' },
          { 'Benchmark': 'BBH (Schlussfolgern)', 'Llama 3.1 8B': '71,0', 'Llama 3.1 70B Q5': '85,3', 'GPT-4o': '88,9' },
          { 'Benchmark': 'Durchschnitt', 'Llama 3.1 8B': '75,3', 'Llama 3.1 70B Q5': '86,8', 'GPT-4o': '90,9' },
        ],
        note: '70B Q5 schließt 75 % der Qualitätslücke zwischen 8B und GPT-4o – und läuft lokal für 0 €/Monat.',
      },
      hardware: {
        id: 'hardware',
        title: 'Welche Hardware 70B-Modelle ausführt',
        tableFormat: true,
        columns: ['Hardware', 'Quantisierung', 'Modellgröße', 'tok/s', 'Qualität', 'Passt?'],
        rows: [
          { 'Hardware': 'M3 Max 96 GB', 'Quantisierung': 'Q4_K_M', 'Modellgröße': '42 GB', 'tok/s': '9–13', 'Qualität': 'Gut', 'Passt?': '✓ Ja' },
          { 'Hardware': 'M3 Max 128 GB', 'Quantisierung': 'Q5_K_M', 'Modellgröße': '49 GB', 'tok/s': '8–12', 'Qualität': 'Sehr gut', 'Passt?': '✓ Ja' },
          { 'Hardware': 'M4 Max 128 GB', 'Quantisierung': 'Q5_K_M', 'Modellgröße': '49 GB', 'tok/s': '10–14', 'Qualität': 'Sehr gut', 'Passt?': '✓ Ja' },
          { 'Hardware': 'M5 Max 128 GB', 'Quantisierung': 'Q4_K_M', 'Modellgröße': '42 GB', 'tok/s': '15–20', 'Qualität': 'Gut', 'Passt?': '✓ Ja' },
          { 'Hardware': 'M5 Max 128 GB', 'Quantisierung': 'Q5_K_M', 'Modellgröße': '49 GB', 'tok/s': '12–16', 'Qualität': 'Sehr gut', 'Passt?': '✓ Ja' },
          { 'Hardware': 'M5 Max 128 GB', 'Quantisierung': 'Q8_0', 'Modellgröße': '74 GB', 'tok/s': '8–12', 'Qualität': 'Verlustfrei', 'Passt?': '✓ Ja' },
          { 'Hardware': 'M5 Ultra 256 GB (Prognose)', 'Quantisierung': 'FP16', 'Modellgröße': '140 GB', 'tok/s': '14–18', 'Qualität': 'Perfekt', 'Passt?': '✓ Ja' },
          { 'Hardware': 'RTX 4090 24 GB', 'Quantisierung': 'Any', 'Modellgröße': '42 GB+', 'tok/s': '—', 'Qualität': '—', 'Passt?': '✗ OOM' },
          { 'Hardware': 'Dual RTX 3090 48 GB', 'Quantisierung': 'Q4_K_M', 'Modellgröße': '42 GB', 'tok/s': '12–15', 'Qualität': 'Gut', 'Passt?': '✓ Ja (komplex)' },
          { 'Hardware': 'Dual RTX 4090 48 GB', 'Quantisierung': 'Q5_K_M', 'Modellgröße': '49 GB', 'tok/s': '18–25', 'Qualität': 'Sehr gut', 'Passt?': '✓ Ja (5.000 €+)' },
          { 'Hardware': '4× RTX 3090 96 GB', 'Quantisierung': 'Q8_0', 'Modellgröße': '74 GB', 'tok/s': '12–16', 'Qualität': 'Verlustfrei', 'Passt?': '✓ Ja (teuer)' },
        ],
        note: 'M5 Max 128 GB ist die einzige Consumer-Hardware, die 70B-Modelle ohne komplexe Multi-GPU-Konfigurationen ausführt. Die Mac-Studio-Konfiguration für ca. 4.000 € ersetzt NVIDIA-Multi-GPU-Setups für 5.000–8.000 €.',
      },
      setupInstall: {
        id: 'setup',
        title: 'Schritt für Schritt: 70B auf M5 Max 128 GB ausführen',
        content: ['Schritt 1: Hardware prüfen. Schritt 2: Ollama installieren und konfigurieren.'],
        codeBlock: `# Schritt 1: Unified Memory prüfen (muss 128 GB anzeigen)
system_profiler SPHardwareDataType | grep Memory
# → Memory: 128 GB

# Schritt 2: Ollama installieren
brew install ollama
brew services start ollama

# Schritt 3: Für 70B konfigurieren (Modell geladen halten, 60-Sek.-Warmup vermeiden)
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
echo 'export OLLAMA_NUM_PARALLEL=1' >> ~/.zshrc
source ~/.zshrc
brew services restart ollama`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: 'Schritt 3: Das 70B-Modell herunterladen',
        content: ['Download-Zeit bei 100 Mbit/s: 45–90 Minuten. Bei 1 Gbit/s: 5–10 Minuten.'],
        codeBlock: `# Empfohlen: Q5_K_M — bestes Qualitäts-/Geschwindigkeitsverhältnis (49 GB Download)
ollama pull llama3.1:70b-instruct-q5_K_M

# Alternative: Q4 — maximale Geschwindigkeit, 42 GB Download
ollama pull llama3.1:70b-instruct-q4_K_M

# Alternative: Q8 — verlustfreie Qualität, 74 GB Download
ollama pull llama3.1:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: 'Schritte 4–6: Erster Start, Metal prüfen, Arbeitsspeicher kontrollieren',
        content: ['Die erste Anfrage dauert 30–60 Sekunden zum Laden von 49 GB in den Unified Memory. Nachfolgende Anfragen sind sofort.'],
        codeBlock: `# Schritt 4: Erster Start (30-60 Sek. auf Modell-Ladevorgang warten)
ollama run llama3.1:70b-instruct-q5_K_M "Schreibe einen 200-Wort-Aufsatz über lokale KI"

# Schritt 5: Metal-GPU-Beschleunigung prüfen
ollama run llama3.1:70b-instruct-q5_K_M --verbose
# Erwartet: ggml_metal_init: found device: Apple M5 Max

# Schritt 6: API-Zugriff für eigene Anwendungen
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.1:70b-instruct-q5_K_M",
  "messages": [{"role": "user", "content": "Erkläre Quantencomputing"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: 'Qualitätsvergleich: 8B vs 70B vs GPT-4o',
        content: [
          'Prompt: „Erkläre, warum ein Stack-Overflow bei rekursiven Funktionen auftritt, und schreibe eine Python-Funktion, die unendliche Rekursion erkennt, bevor sie abstürzt."',
          'Llama 3.1 8B Q4 Antwort (läuft auf jedem Mac mit 16 GB+):',
        ],
        blockquote: 'Ein Stack-Overflow tritt auf, wenn zu viele Funktionsaufrufe den Speicher überschreiten.',
        codeBlock: `def detect_recursion(func):
    count = 0
    try:
        func()
    except RecursionError:
        count += 1
    return count > 0`,
        codeLanguage: 'python',
        note: 'Fehlt wesentliche Einsicht: sys.setrecursionlimit nicht verwendet, eigentliche Erkennungslogik fehlerhaft.',
      },
      quality70B: {
        id: 'quality-70b',
        title: 'Llama 3.1 70B Q5 Antwort (M5 Max 128 GB)',
        blockquote: 'Stack-Overflow bei Rekursion tritt auf, wenn der Aufrufstapel das vom Betriebssystem festgelegte Limit überschreitet (typischerweise 1 MB–8 MB). Jeder rekursive Aufruf fügt einen Stack-Frame mit lokalen Variablen und der Rücksprungadresse hinzu. Pythons Standardlimit beträgt 1.000 Aufrufe.',
        codeBlock: `import sys
import functools

def detect_recursion(threshold=900):
    def decorator(func):
        depth = 0
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            nonlocal depth
            depth += 1
            try:
                if depth > threshold:
                    raise RecursionError(
                        f"Detected potential infinite recursion at depth {depth}"
                    )
                return func(*args, **kwargs)
            finally:
                depth -= 1
        return wrapper
    return decorator`,
        codeLanguage: 'python',
        note: 'Korrekt: Decorator-Muster, Tiefenverfolgung, proaktive Erkennung vor Absturz, konfigurierbarer Schwellenwert. GPT-4o bietet etwas elegantereres Error-Handling – ein praktischer Qualitätsunterschied von 3 %.',
      },
      quantization: {
        id: 'quantization',
        title: 'Quantisierung im Detail für 70B-Modelle',
        items: [
          'Der Qualitätsunterschied zwischen Q4 und Q5 ist bei 70B GRÖSSER als bei 8B. Q4: ~3–5 % Qualitätsverlust. Q5: ~0,5–1 % Verlust vs FP16.',
          'Bei 8B-Modellen ist Q4 vs Q8 kaum wahrnehmbar. Bei 70B ist Q4 vs Q8 bei komplexem Schlussfolgern und Code erheblich.',
          'Empfehlung: Q5_K_M ist die beste Balance. Bei kritischer Geschwindigkeit (Chat, Autovervollständigung) Q4 verwenden. Bei kritischer Ausgabequalität (Recht, Code-Review) Q8 verwenden.',
          'Speicher: Q4 = 42 GB, Q5 = 49 GB, Q8 = 74 GB. Alle passen in M5 Max 128 GB. Puffer für OS (~8 GB) und Apps einplanen.',
          'Praktische tok/s: Q4 = 15–20, Q5 = 12–16, Q8 = 8–12. Bei 12 tok/s dauert eine 500-Wort-Antwort ca. 40 Sekunden.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternative 70B+-Modelle für Apple Silicon',
        tableFormat: true,
        columns: ['Modell', 'Größe (Q5)', 'Ideal für', 'tok/s auf M5 Max'],
        rows: [
          { 'Modell': 'Llama 3.1 70B Instruct', 'Größe (Q5)': '49 GB', 'Ideal für': 'Allgemein, Schlussfolgern', 'tok/s auf M5 Max': '12–16' },
          { 'Modell': 'Qwen2.5 72B Instruct', 'Größe (Q5)': '51 GB', 'Ideal für': 'Mehrsprachig, Mathematik, Code', 'tok/s auf M5 Max': '11–15' },
          { 'Modell': 'DeepSeek 67B', 'Größe (Q5)': '47 GB', 'Ideal für': 'Coding-Exzellenz', 'tok/s auf M5 Max': '12–16' },
          { 'Modell': 'Llama 3.1 70B Coder', 'Größe (Q5)': '49 GB', 'Ideal für': 'Reine Coding-Aufgaben', 'tok/s auf M5 Max': '13–17' },
          { 'Modell': 'Mixtral 8x22B (MoE)', 'Größe (Q4)': '88 GB', 'Ideal für': 'Hochwertiges Schlussfolgern', 'tok/s auf M5 Max': '18–22' },
          { 'Modell': 'Cohere Command R+ 104B', 'Größe (Q4)': '73 GB', 'Ideal für': 'RAG, 128K Kontext', 'tok/s auf M5 Max': '8–12' },
        ],
        note: 'Empfehlungen nach Anwendungsfall: Allgemeines Schlussfolgern → Llama 3.1 70B Q5. Code → DeepSeek 67B. Nicht-Englisch → Qwen2.5 72B. Dokument-Q&A → Command R+. Maximale Geschwindigkeit → Mixtral 8x22B (MoE verwendet weniger aktive Parameter).',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: 'Alternative Modelle herunterladen',
        codeBlock: `ollama pull qwen2.5:72b-instruct-q5_K_M
ollama pull deepseek-coder:67b-q5_K_M
ollama pull mixtral:8x22b`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '70B Lokal vs Cloud-APIs — Ausführlicher Vergleich',
        tableFormat: true,
        columns: ['Kennzahl', '70B Q5 Lokal (M5 Max)', 'GPT-4o API', 'Claude Sonnet 3.5', 'Gemini 1.5 Pro'],
        rows: [
          { 'Kennzahl': 'Qualität (MMLU)', '70B Q5 Lokal (M5 Max)': '86,1', 'GPT-4o API': '88,7', 'Claude Sonnet 3.5': '88,7', 'Gemini 1.5 Pro': '85,9' },
          { 'Kennzahl': 'Geschwindigkeit (tok/s)', '70B Q5 Lokal (M5 Max)': '12–16', 'GPT-4o API': '50–80', 'Claude Sonnet 3.5': '50–80', 'Gemini 1.5 Pro': '60–100' },
          { 'Kennzahl': 'Erstes Token (Latenz)', '70B Q5 Lokal (M5 Max)': '1–2 Sek.', 'GPT-4o API': '0,3–0,8 Sek.', 'Claude Sonnet 3.5': '0,4–0,9 Sek.', 'Gemini 1.5 Pro': '0,5–1 Sek.' },
          { 'Kennzahl': 'Kosten pro 1M Token', '70B Q5 Lokal (M5 Max)': '0 €', 'GPT-4o API': '2,50 $/10,00 $', 'Claude Sonnet 3.5': '3,00 $/15,00 $', 'Gemini 1.5 Pro': '1,25 $/5,00 $' },
          { 'Kennzahl': 'Kosten/Monat (5M Token)', '70B Q5 Lokal (M5 Max)': '0 €', 'GPT-4o API': '50–150 $', 'Claude Sonnet 3.5': '75–200 $', 'Gemini 1.5 Pro': '30–80 $' },
          { 'Kennzahl': 'Datenschutz', '70B Q5 Lokal (M5 Max)': '100 % lokal', 'GPT-4o API': 'Gesendet an OpenAI', 'Claude Sonnet 3.5': 'Gesendet an Anthropic', 'Gemini 1.5 Pro': 'Gesendet an Google' },
          { 'Kennzahl': 'Internet erforderlich', '70B Q5 Lokal (M5 Max)': 'Nein', 'GPT-4o API': 'Ja', 'Claude Sonnet 3.5': 'Ja', 'Gemini 1.5 Pro': 'Ja' },
          { 'Kennzahl': 'Ratenlimits', '70B Q5 Lokal (M5 Max)': 'Keine', 'GPT-4o API': 'Stufenbasiert', 'Claude Sonnet 3.5': 'Stufenbasiert', 'Gemini 1.5 Pro': 'Stufenbasiert' },
          { 'Kennzahl': 'Anpassbarkeit', '70B Q5 Lokal (M5 Max)': 'Vollständig (lokal fine-tunen)', 'GPT-4o API': 'Begrenzt', 'Claude Sonnet 3.5': 'Begrenzt', 'Gemini 1.5 Pro': 'Begrenzt' },
        ],
        note: '70B Q5 lokal erreicht innerhalb von 3 % die Cloud-Qualität auf MMLU. Bei Hardware-Kosten von ca. 4.000 € und 50–150 $ monatlichen Ersparnissen beträgt die Amortisationszeit 27–80 Monate. Datenschutzsensible Arbeiten (Medizin, Recht, Finanzen) haben keine Cloud-Alternative.',
      },
      useCases: {
        id: 'use-cases',
        title: 'Praxisanwendungen für lokale 70B-Inferenz',
        numberedItems: [
          { title: 'Analyse vertraulicher Dokumente', whyItMatters: 'Rechtsverträge, medizinische Unterlagen, Finanzberichte, M&A Due Diligence. Cloud-APIs sind unter DSGVO, HIPAA oder NDA nicht akzeptabel. 70B Q5 auf M5 Max liefert Cloud-Qualitätsanalyse bei null Datenabfluss.' },
          { title: 'Hochvolumige Coding-Unterstützung', whyItMatters: 'Einzelentwickler mit Copilot 8h/Tag: ~10 €/Monat. Team von 10 Personen mit lokalem 70B Coder: 0 €/Monat. Code verlässt nie das Firmennetzwerk. M5 Max als geteilter Inferenzserver amortisiert sich für ein 10-köpfiges Team in 3 Monaten.' },
          { title: 'Erstellung langer Inhalte', whyItMatters: '5.000-Wort-Blogbeiträge, technische Dokumentation. 70B produziert deutlich bessere Langtexte als 8B. Lokal: keine Token-Limits, keine Ratenlimits. 50.000 Wörter/Tag für 0 € statt 50–100 $ API-Kosten.' },
          { title: 'Forschung und wissenschaftlicher Einsatz', whyItMatters: 'Tausende Facharbeiten für Literaturrecherche verarbeiten, Hypothesen in vielen Bereichen generieren. 70B-Reasoning-Qualität ist erforderlich. Cloud-Kosten übersteigen Studenten- und Postdoc-Budgets.' },
          { title: 'Datenschutzorientierter persönlicher KI-Assistent', whyItMatters: 'Analyse persönlicher Tagebücher, Finanzplanung für die Familie, gesundheitliche Reflexion mit privaten Daten. Ersetzt ChatGPT Plus für einen ganzen Haushalt. Keine Daten an Dritte übermittelt.' },
          { title: 'Offline-kritische Arbeitsabläufe', whyItMatters: 'Journalisten in restriktiven Regionen, Mediziner in abgelegenen Gebieten, Reisen ohne zuverlässiges Internet, abgesicherte Einrichtungen ohne externen Netzzugang.' },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: 'Geschwindigkeitsoptimierung: MLX vs Ollama',
        content: ['MLX ist Apples natives ML-Framework und läuft auf demselben Modell 15–25 % schneller als Ollama. M5 Max mit 70B Q5: Ollama = 12–16 tok/s, MLX = 18–22 tok/s.'],
        codeBlock: `from mlx_lm import load, generate

# 70B Q5 Modell laden (MLX-konvertierte Version von Hugging Face)
model, tokenizer = load("mlx-community/Llama-3.1-70B-Instruct-Q5")

# Streaming-Generierung — Nutzer sieht erstes Wort in 1-2 Sek.
from mlx_lm import stream_generate
for chunk in stream_generate(model, tokenizer, "Erkläre Quantencomputing", max_tokens=500):
    print(chunk, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: 'Weitere Tipps zur Geschwindigkeitsoptimierung',
        items: [
          'Modell warm halten: OLLAMA_KEEP_ALIVE=1h setzen (oder 24h für dauerhaft aktiven Mac Mini), um den 30–60-Sekunden-Neustart bei jeder Anfrage zu vermeiden.',
          'Streaming verwenden: Nutzer sehen das erste Token in 1–2 Sekunden statt 25–40 Sekunden auf die vollständige Antwort zu warten.',
          'max_tokens reduzieren: Bei Bedarf von 200-Wort-Antworten max_tokens=200 setzen. Bei 14 tok/s: 200 Token = 14 Sek. vs 36 Sek. für 500 Token.',
          'Q4-vs-Q5-Geschwindigkeitskompromiss: Q4 = 15–20 tok/s (+25 % schneller als Q5). Qualitätsunterschied ~2–3 % bei den meisten Aufgaben. Für Chat Q4 verwenden, für kritisches Schlussfolgern Q5.',
          'Andere GPU-intensive Apps während der Inferenz vermeiden – der GPU-Verlauf in Activity Monitor zeigt, ob andere Prozesse um Metal-Bandbreite konkurrieren.',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'M5-Ultra-Vorschau: Die nächste Leistungsstufe (erwartet Mitte 2026)',
        content: ['Basierend auf Apples bisherigem Ultra-Muster (2× Max-Spezifikationen), M5-Ultra-Prognosen: 256 GB Unified Memory, ~1.200 GB/s Bandbreite, ~80 GPU-Kerne. Erwartet exklusiv im Mac Studio Ultra.'],
        tableFormat: true,
        columns: ['Modell', 'M5 Max 128 GB', 'M5 Ultra 256 GB (Prognose)'],
        rows: [
          { 'Modell': 'Llama 3.1 70B Q5', 'M5 Max 128 GB': '12–16 tok/s', 'M5 Ultra 256 GB (Prognose)': '24–32 tok/s' },
          { 'Modell': 'Llama 3.1 70B Q8', 'M5 Max 128 GB': '8–12 tok/s', 'M5 Ultra 256 GB (Prognose)': '16–24 tok/s' },
          { 'Modell': 'Llama 3.1 70B FP16 (verlustfrei)', 'M5 Max 128 GB': '✗ Passt nicht', 'M5 Ultra 256 GB (Prognose)': '14–18 tok/s' },
          { 'Modell': 'Qwen2.5 72B Q8', 'M5 Max 128 GB': '8–12 tok/s', 'M5 Ultra 256 GB (Prognose)': '16–24 tok/s' },
          { 'Modell': 'Mixtral 8x22B Q5', 'M5 Max 128 GB': '14–18 tok/s', 'M5 Ultra 256 GB (Prognose)': '28–36 tok/s' },
          { 'Modell': 'Llama 3.1 405B Q3', 'M5 Max 128 GB': '✗ Passt nicht', 'M5 Ultra 256 GB (Prognose)': '4–6 tok/s' },
          { 'Modell': 'Llama 3.1 405B Q4 (~200 GB)', 'M5 Max 128 GB': '✗ Passt nicht', 'M5 Ultra 256 GB (Prognose)': '3–5 tok/s' },
        ],
        note: 'M5 Ultra ermöglicht: (1) Verlustfreies 70B FP16 – erstmals auf Consumer-Hardware. (2) 405B-Parameter-Modelle. (3) Zwei simultane 70B-Modelle. Geschätzter Preis: 5.500–7.000 € (Mac Studio Ultra). Wann warten: bei Bedarf von 405B-Modellen, 70B FP16 oder wenn bereits M3/M4 Max vorhanden.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Ist 70B Q4 für die meisten Aufgaben gut genug?', a: 'Ja. Q4 ist die branchenübliche Quantisierung. Der ~3–5 % Qualitätsverlust gegenüber Q5 ist bei den meisten Chat-, Schreib- und Allzweck-Aufgaben nicht wahrnehmbar. Q5 oder Q8 nur verwenden, wenn die Ausgabequalität kritisch ist (Rechtsanalyse, Code-Review, medizinische Nutzung).' },
          { q: 'Kann ich 70B Q5 und ein anderes Modell gleichzeitig ausführen?', a: 'Ja, mit einem kleineren Modell. 70B Q5 = 49 GB. 128 GB minus 8 GB OS-Overhead = 120 GB. 70B Q5 (49 GB) + ein 7–8B-Modell (5 GB) = 54 GB – gut innerhalb des Budgets. Zwei simultane 70B-Modelle erfordern M5 Ultra 256 GB.' },
          { q: 'Wann sollte ich auf M5 Ultra warten statt jetzt M5 Max zu kaufen?', a: 'Auf M5 Ultra warten, wenn: (1) 70B FP16 (verlustfreie Qualität) benötigt wird, (2) 405B-Modelle erforderlich sind, oder (3) bereits M3 Max oder M4 Max vorhanden ist (M5 Max überspringen). M5 Max jetzt kaufen, wenn: 70B-Fähigkeit heute benötigt wird und das Budget unter 5.000 € liegt.' },
          { q: 'Wie viel schneller wird 70B auf M5 Ultra gegenüber M5 Max sein?', a: 'Etwa doppelt so schnell, basierend auf der verdoppelten Speicherbandbreite (~1.200 GB/s vs 614 GB/s). M5 Max führt 70B Q5 mit 12–16 tok/s aus; M5 Ultra ist auf 24–32 tok/s projiziert. M5 Ultra wird zudem 70B FP16 ausführen können, das auf M5 Max nicht passt.' },
          { q: 'Kann ich zwei 70B-Modelle gleichzeitig auf M5 Max 128 GB ausführen?', a: 'Nein, nicht zwei vollständige 70B-Modelle. Zwei 70B Q4 = 84 GB plus OS-Overhead = ~95 GB, was auf 128 GB knapp ist. M5 Ultra 256 GB verarbeitet problemlos zwei simultane 70B-Modelle oder ein 70B + ein 34B.' },
          { q: 'Wie viel Festplattenspeicher brauche ich für 70B-Modelle?', a: 'Jedes 70B-Modell benötigt 42 GB (Q4), 49 GB (Q5) oder 74 GB (Q8) auf der Festplatte. Für drei Quantisierungen eines Modells: 165 GB. Für professionelle 70B-Arbeit mit mehreren Modellen empfiehlt sich 1 TB oder 2 TB SSD im Mac Studio.' },
          { q: 'Ist lokal laufendes 70B wirklich so gut wie GPT-4o für meinen Anwendungsfall?', a: '70B Q5 erreicht 86,1 auf MMLU vs GPT-4o mit 88,7 – ein 3 % Unterschied bei Benchmarks. Für datenschutzsensible Aufgaben, intensivere Nutzung (50 €+/Monat) oder Offline-Einsatz gewinnt lokal automatisch. Eigene Prompts testen, um den Einsatz für den jeweiligen Workflow zu validieren.' },
          { q: 'Funktionieren Llama 4 oder neuere 70B-Modelle auf M5 Max?', a: 'Ja. M5 Max 128 GB passt jedes 70B-Modell in Q4/Q5/Q8-Quantisierung, unabhängig von der Architektur. Neue 70B-Versionen erscheinen typischerweise innerhalb von Tagen auf Ollama. Den neuen Modellnamen mit ollama pull abrufen.' },
          { q: 'Verarbeitet M5 Max lokale 70B-Modelle DSGVO-konform?', a: 'Ja. Da alle Daten lokal auf dem Gerät verarbeitet werden und keine Übertragung an externe Server stattfindet, fallen keine personenbezogenen Daten unter Art. 28 DSGVO (Auftragsverarbeitung). Für den Unternehmenseinsatz: BSI-Grundschutz empfiehlt lokale Verarbeitung für besonders sensible Daten ausdrücklich.' },
          { q: 'Lohnt sich ein M5 Max für KMU in Deutschland?', a: 'Ja, insbesondere wenn ein Team von 5–15 Personen täglich mit sensiblen Dokumenten arbeitet. Ein M5 Max Mac Studio für ca. 4.000 € amortisiert sich gegenüber GPT-4o-API-Kosten (50–200 €/Monat/Nutzer) innerhalb von 3–12 Monaten, während das gesamte Datenmaterial im Unternehmen bleibt.' },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Verwandte Artikel',
        items: [
          '[Apple Silicon für lokale LLMs: Vollständiger Leitfaden](/local-llms/apple-silicon-local-llm-guide-2026?lang=de) — Vergleich M1 bis M5 Max, Unified Memory erklärt',
          '[M5 Pro vs M5 Max LLM-Benchmarks 2026](/local-llms/m5-pro-max-llm-benchmarks-2026?lang=de) — detaillierte tok/s-Werte über Modellgrößen',
          '[Wie viel Unified Memory für lokale LLMs?](/local-llms/how-much-unified-memory-for-local-llm?lang=de) — Leitfaden 16 GB vs 36 GB vs 64 GB vs 128 GB',
          '[Beste LLM-Modelle für Apple Silicon](/local-llms/best-models-apple-silicon-2026?lang=de) — Modellempfehlungen je Mac-Konfiguration',
          '[MLX vs Ollama vs llama.cpp auf Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac?lang=de) — Framework-Geschwindigkeitsvergleich und Einrichtungsleitfaden',
          '[Apple Silicon vs NVIDIA GPU für lokale LLMs](/local-llms/apple-silicon-vs-nvidia-gpu-local-llm?lang=de) — plattformübergreifender Hardware-Vergleich',
          '[LLM-Quantisierung erklärt](/local-llms/llm-quantization-explained?lang=de) — Q4/Q5/Q8/FP16 im Detail',
          '[Mac Mini M5 als lokaler KI-Server](/local-llms/mac-mini-m5-local-ai-server?lang=de) — Einrichtung eines Inferenzservers für Dauerbetrieb',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    title: 'Modèles 70B+ sur Apple Silicon 2026 : Guide complet M5 Max',
    seoTitle: 'Modèles 70B sur Apple Silicon M5 Max 128 Go : Configuration, quantification, qualité vs GPT-4o',
    intro: 'Exécutez des LLM de 70B et plus en local sur l\'Apple Silicon M5 Max (128 Go). Guide de configuration complet avec Ollama et MLX, comparaison de quantification (Q4/Q5/Q8), benchmarks de qualité 8B vs 70B, chiffres tok/s réels, analyse coûts 70B vs API cloud, modèles 70B+ alternatifs, optimisation de la vitesse et projections M5 Ultra pour 2026.',
    metaDescription: 'LLM 70B sur M5 Max 128 Go : configuration étape par étape, guide quantification Q4/Q5/Q8, benchmarks vitesse, qualité vs GPT-4o, aperçu M5 Ultra. Guide complet 2026.',
    twitterDescription: 'LLM 70B sur M5 Max 128 Go : 12–20 tok/s, Q4–Q8, qualité cloud à 3 % près, 0 €/mois. Guide complet configuration + benchmarks.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Llama 3.1 70B', 'Qwen2.5 72B', 'DeepSeek 67B', 'Mixtral 8x22B', 'Llama 3.1 8B'],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'Propriétaires de M5 Max et acheteurs potentiels recherchant la qualité LLM locale maximale sans API cloud.',
    readTime: '16 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'modèles 70B Apple Silicon',
    targetKeywords: ['modèle 70B Mac', 'M5 Max 128 Go LLM', 'exécuter 70B en local', 'Llama 70B Apple Silicon', 'inférence locale grand modèle'],
    ctaText: 'Vous exécutez Llama 3.1 70B en local sur M5 Max ? Comparez vos réponses locales avec GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro et 22 autres modèles cloud avec PromptQuorum — validez que votre investissement matériel de 4 500 € correspond à la qualité cloud pour vos tâches de raisonnement, de codage et de rédaction. Le tout en un seul dispatch.',
    leadAnswerBlock: '**Le M5 Max 128 Go exécute Llama 3.1 70B à 15–20 tok/s (Q4_K_M) ou 12–16 tok/s (Q5_K_M). Le 70B Q5 obtient 86,1 sur MMLU — à 3 % de GPT-4o (88,7) — tout en fonctionnant en local pour 0 €/mois. C\'est le seul matériel grand public qui fait tenir le 70B sans configurations multi-GPU complexes. La configuration prend moins de 10 minutes avec Ollama.**',
    quickAnswerTop: {
      en: {
        question: 'Can I run 70B models on M5 Max 128GB?',
        answer: 'Yes. Llama 3.1 70B Q5_K_M runs at 12–16 tok/s. Q4_K_M at 15–20 tok/s. Q8_0 at 8–12 tok/s (lossless quality). All fit in 128GB unified memory. Setup is 10 minutes with Ollama. 70B Q5 matches GPT-4o quality within 3% on standard benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, good quality',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, very good (recommended)',
          '70B Q8_0: 74 GB, 8–12 tok/s, lossless quality',
          'Only consumer option without multi-GPU complexity',
          'MMLU: 70B Q5 = 86.1 vs GPT-4o = 88.7 (3% gap)',
          'Setup: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-05-15',
      },
      de: {
        question: 'Kann ich 70B-Modelle auf dem M5 Max 128 GB ausführen?',
        answer: 'Ja. Llama 3.1 70B Q5_K_M läuft mit 12–16 tok/s. Q4_K_M mit 15–20 tok/s. Q8_0 mit 8–12 tok/s (verlustfreie Qualität). Alle passen in den 128-GB-Unified-Memory. Die Einrichtung dauert 10 Minuten mit Ollama. 70B Q5 erreicht innerhalb von 3 % die GPT-4o-Qualität bei Standard-Benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, gute Qualität',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, sehr gut (empfohlen)',
          '70B Q8_0: 74 GB, 8–12 tok/s, verlustfreie Qualität',
          'Einzige Consumer-Option ohne komplexe Multi-GPU-Konfiguration',
          'MMLU: 70B Q5 = 86,1 vs GPT-4o = 88,7 (3 % Unterschied)',
          'Einrichtung: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-05-15',
      },
      fr: {
        question: 'Puis-je exécuter des modèles 70B sur M5 Max 128 Go ?',
        answer: 'Oui. Llama 3.1 70B Q5_K_M tourne à 12–16 tok/s. Q4_K_M à 15–20 tok/s. Q8_0 à 8–12 tok/s (qualité sans perte). Tous tiennent dans les 128 Go de mémoire unifiée. La configuration prend 10 minutes avec Ollama. Le 70B Q5 correspond à la qualité de GPT-4o à 3 % près sur les benchmarks standards.',
        bullets: [
          '70B Q4_K_M : 42 Go, 15–20 tok/s, bonne qualité',
          '70B Q5_K_M : 49 Go, 12–16 tok/s, très bonne (recommandé)',
          '70B Q8_0 : 74 Go, 8–12 tok/s, qualité sans perte',
          'Seule option grand public sans complexité multi-GPU',
          'MMLU : 70B Q5 = 86,1 vs GPT-4o = 88,7 (écart de 3 %)',
          'Configuration : brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-05-15',
      },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Pourquoi le 70B est important', anchor: '#why' },
      { label: 'Configuration matérielle requise', anchor: '#hardware' },
      { label: 'Configuration étape par étape', anchor: '#setup' },
      { label: 'Qualité : 8B vs 70B vs GPT-4o', anchor: '#quality' },
      { label: 'Quantification approfondie', anchor: '#quantization' },
      { label: 'Modèles 70B+ alternatifs', anchor: '#alternatives' },
      { label: '70B local vs API cloud', anchor: '#vs-cloud' },
      { label: "Cas d'utilisation pratiques", anchor: '#use-cases' },
      { label: 'Optimisation de la vitesse', anchor: '#speed-opts' },
      { label: 'Aperçu M5 Ultra', anchor: '#m5ultra' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Articles connexes', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Pourquoi le 70B est important : le saut qualitatif depuis le 8B',
        content: ['Le passage de 8B à 70B paramètres est le seuil de qualité le plus significatif en IA locale. Scores des benchmarks industriels :'],
        tableFormat: true,
        columns: ['Benchmark', 'Llama 3.1 8B', 'Llama 3.1 70B Q5', 'GPT-4o'],
        rows: [
          { 'Benchmark': 'MMLU (culture générale)', 'Llama 3.1 8B': '73,0', 'Llama 3.1 70B Q5': '86,1', 'GPT-4o': '88,7' },
          { 'Benchmark': 'HumanEval (code)', 'Llama 3.1 8B': '72,6', 'Llama 3.1 70B Q5': '80,5', 'GPT-4o': '90,2' },
          { 'Benchmark': 'GSM8K (mathématiques)', 'Llama 3.1 8B': '84,5', 'Llama 3.1 70B Q5': '95,1', 'GPT-4o': '95,8' },
          { 'Benchmark': 'BBH (raisonnement)', 'Llama 3.1 8B': '71,0', 'Llama 3.1 70B Q5': '85,3', 'GPT-4o': '88,9' },
          { 'Benchmark': 'Moyenne', 'Llama 3.1 8B': '75,3', 'Llama 3.1 70B Q5': '86,8', 'GPT-4o': '90,9' },
        ],
        note: "Le 70B Q5 comble 75 % de l'écart de qualité entre le 8B et GPT-4o — tout en fonctionnant en local pour 0 €/mois.",
      },
      hardware: {
        id: 'hardware',
        title: 'Quel matériel peut exécuter des modèles 70B',
        tableFormat: true,
        columns: ['Matériel', 'Quantification', 'Taille du modèle', 'tok/s', 'Qualité', 'Compatible ?'],
        rows: [
          { 'Matériel': 'M3 Max 96 Go', 'Quantification': 'Q4_K_M', 'Taille du modèle': '42 Go', 'tok/s': '9–13', 'Qualité': 'Bonne', 'Compatible ?': '✓ Oui' },
          { 'Matériel': 'M3 Max 128 Go', 'Quantification': 'Q5_K_M', 'Taille du modèle': '49 Go', 'tok/s': '8–12', 'Qualité': 'Très bonne', 'Compatible ?': '✓ Oui' },
          { 'Matériel': 'M4 Max 128 Go', 'Quantification': 'Q5_K_M', 'Taille du modèle': '49 Go', 'tok/s': '10–14', 'Qualité': 'Très bonne', 'Compatible ?': '✓ Oui' },
          { 'Matériel': 'M5 Max 128 Go', 'Quantification': 'Q4_K_M', 'Taille du modèle': '42 Go', 'tok/s': '15–20', 'Qualité': 'Bonne', 'Compatible ?': '✓ Oui' },
          { 'Matériel': 'M5 Max 128 Go', 'Quantification': 'Q5_K_M', 'Taille du modèle': '49 Go', 'tok/s': '12–16', 'Qualité': 'Très bonne', 'Compatible ?': '✓ Oui' },
          { 'Matériel': 'M5 Max 128 Go', 'Quantification': 'Q8_0', 'Taille du modèle': '74 Go', 'tok/s': '8–12', 'Qualité': 'Sans perte', 'Compatible ?': '✓ Oui' },
          { 'Matériel': 'M5 Ultra 256 Go (prévision)', 'Quantification': 'FP16', 'Taille du modèle': '140 Go', 'tok/s': '14–18', 'Qualité': 'Parfaite', 'Compatible ?': '✓ Oui' },
          { 'Matériel': 'RTX 4090 24 Go', 'Quantification': 'Any', 'Taille du modèle': '42 Go+', 'tok/s': '—', 'Qualité': '—', 'Compatible ?': '✗ OOM' },
          { 'Matériel': 'Dual RTX 3090 48 Go', 'Quantification': 'Q4_K_M', 'Taille du modèle': '42 Go', 'tok/s': '12–15', 'Qualité': 'Bonne', 'Compatible ?': '✓ Oui (complexe)' },
          { 'Matériel': 'Dual RTX 4090 48 Go', 'Quantification': 'Q5_K_M', 'Taille du modèle': '49 Go', 'tok/s': '18–25', 'Qualité': 'Très bonne', 'Compatible ?': '✓ Oui (5 000 $+)' },
          { 'Matériel': '4× RTX 3090 96 Go', 'Quantification': 'Q8_0', 'Taille du modèle': '74 Go', 'tok/s': '12–16', 'Qualité': 'Sans perte', 'Compatible ?': '✓ Oui (coûteux)' },
        ],
        note: "Le M5 Max 128 Go est le seul matériel grand public permettant d'exécuter des modèles 70B sans configurations multi-GPU complexes. La configuration Mac Studio à environ 4 500 € remplace des configurations multi-GPU NVIDIA à 5 000–8 000 €.",
      },
      setupInstall: {
        id: 'setup',
        title: 'Étape par étape : exécuter le 70B sur M5 Max 128 Go',
        content: ["Étape 1 : vérifier le matériel. Étape 2 : installer et configurer Ollama."],
        codeBlock: `# Étape 1 : vérifier la mémoire unifiée (doit afficher 128 Go)
system_profiler SPHardwareDataType | grep Memory
# → Memory: 128 GB

# Étape 2 : installer Ollama
brew install ollama
brew services start ollama

# Étape 3 : configurer pour le 70B (garder le modèle chargé)
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
echo 'export OLLAMA_NUM_PARALLEL=1' >> ~/.zshrc
source ~/.zshrc
brew services restart ollama`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: 'Étape 3 : Télécharger le modèle 70B',
        content: ['Temps de téléchargement à 100 Mbit/s : 45–90 minutes. À 1 Gbit/s : 5–10 minutes.'],
        codeBlock: `# Recommandé : Q5_K_M — meilleur équilibre qualité/vitesse (49 Go)
ollama pull llama3.1:70b-instruct-q5_K_M

# Alternative : Q4 — vitesse maximale, 42 Go
ollama pull llama3.1:70b-instruct-q4_K_M

# Alternative : Q8 — qualité sans perte, 74 Go
ollama pull llama3.1:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: 'Étapes 4–6 : Premier lancement, vérification Metal, contrôle mémoire',
        content: ['La première requête prend 30–60 secondes pour charger 49 Go en mémoire unifiée. Les requêtes suivantes sont immédiates.'],
        codeBlock: `# Étape 4 : premier lancement (attendre 30-60 sec pour le chargement)
ollama run llama3.1:70b-instruct-q5_K_M "Écris un essai de 200 mots sur l'IA locale"

# Étape 5 : vérifier l'accélération GPU Metal
ollama run llama3.1:70b-instruct-q5_K_M --verbose
# Attendu : ggml_metal_init: found device: Apple M5 Max

# Étape 6 : accès API pour vos applications
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.1:70b-instruct-q5_K_M",
  "messages": [{"role": "user", "content": "Explique l'informatique quantique"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: 'Comparaison de qualité : 8B vs 70B vs GPT-4o',
        content: [
          'Invite : « Explique pourquoi un débordement de pile survient dans les fonctions récursives, puis écris une fonction Python qui détecte la récursion infinie avant le plantage. »',
          'Réponse de Llama 3.1 8B Q4 (fonctionne sur tout Mac avec 16 Go+) :',
        ],
        blockquote: "Un débordement de pile survient lorsque trop d'appels de fonctions dépassent la capacité mémoire.",
        codeBlock: `def detect_recursion(func):
    count = 0
    try:
        func()
    except RecursionError:
        count += 1
    return count > 0`,
        codeLanguage: 'python',
        note: "Manque l'insight clé : n'utilise pas sys.setrecursionlimit, la logique de détection est incorrecte.",
      },
      quality70B: {
        id: 'quality-70b',
        title: 'Réponse Llama 3.1 70B Q5 (M5 Max 128 Go)',
        blockquote: "Le débordement de pile en récursion survient lorsque la pile d'appels dépasse la limite imposée par l'OS (généralement 1 Mo–8 Mo). Chaque appel récursif ajoute un frame de pile contenant les variables locales et l'adresse de retour. La limite par défaut de Python est de 1 000 appels.",
        codeBlock: `import sys
import functools

def detect_recursion(threshold=900):
    def decorator(func):
        depth = 0
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            nonlocal depth
            depth += 1
            try:
                if depth > threshold:
                    raise RecursionError(
                        f"Detected potential infinite recursion at depth {depth}"
                    )
                return func(*args, **kwargs)
            finally:
                depth -= 1
        return wrapper
    return decorator`,
        codeLanguage: 'python',
        note: "Correct : motif décorateur, suivi de la profondeur, détection proactive avant plantage, seuil configurable. GPT-4o ajoute une gestion d'erreurs légèrement plus élégante — un écart de qualité de 3 % en pratique.",
      },
      quantization: {
        id: 'quantization',
        title: 'Quantification approfondie pour les modèles 70B',
        items: [
          'La différence de qualité Q4 vs Q5 est PLUS GRANDE sur les 70B que sur les 8B. Q4 : ~3–5 % de perte de qualité. Q5 : ~0,5–1 % de perte vs FP16.',
          "Sur les modèles 8B, Q4 vs Q8 est à peine perceptible. Sur les 70B, Q4 vs Q8 est significatif pour le raisonnement complexe et le code.",
          "Recommandation : Q5_K_M offre le meilleur équilibre. Si la vitesse est critique (chat, autocomplétion), utiliser Q4. Si la qualité est critique (juridique, revue de code), utiliser Q8.",
          "Mémoire : Q4 = 42 Go, Q5 = 49 Go, Q8 = 74 Go. Tous tiennent dans le M5 Max 128 Go. Prévoir une marge pour l'OS (~8 Go) et les applications.",
          'tok/s pratiques : Q4 = 15–20, Q5 = 12–16, Q8 = 8–12. À 12 tok/s, une réponse de 500 mots prend environ 40 secondes.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Modèles 70B+ alternatifs pour Apple Silicon',
        tableFormat: true,
        columns: ['Modèle', 'Taille (Q5)', 'Idéal pour', 'tok/s sur M5 Max'],
        rows: [
          { 'Modèle': 'Llama 3.1 70B Instruct', 'Taille (Q5)': '49 Go', 'Idéal pour': 'Usage général, raisonnement', 'tok/s sur M5 Max': '12–16' },
          { 'Modèle': 'Qwen2.5 72B Instruct', 'Taille (Q5)': '51 Go', 'Idéal pour': 'Multilingue, maths, code', 'tok/s sur M5 Max': '11–15' },
          { 'Modèle': 'DeepSeek 67B', 'Taille (Q5)': '47 Go', 'Idéal pour': 'Excellence en coding', 'tok/s sur M5 Max': '12–16' },
          { 'Modèle': 'Llama 3.1 70B Coder', 'Taille (Q5)': '49 Go', 'Idéal pour': 'Tâches purement code', 'tok/s sur M5 Max': '13–17' },
          { 'Modèle': 'Mixtral 8x22B (MoE)', 'Taille (Q4)': '88 Go', 'Idéal pour': 'Raisonnement haute qualité', 'tok/s sur M5 Max': '18–22' },
          { 'Modèle': 'Cohere Command R+ 104B', 'Taille (Q4)': '73 Go', 'Idéal pour': 'RAG, contexte 128K', 'tok/s sur M5 Max': '8–12' },
        ],
        note: "Recommandations par cas d'usage : Raisonnement général → Llama 3.1 70B Q5. Code → DeepSeek 67B. Non-anglais → Qwen2.5 72B. Q&A documentaire → Command R+. Vitesse maximale → Mixtral 8x22B (MoE utilise moins de paramètres actifs).",
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: 'Télécharger les modèles alternatifs',
        codeBlock: `ollama pull qwen2.5:72b-instruct-q5_K_M
ollama pull deepseek-coder:67b-q5_K_M
ollama pull mixtral:8x22b`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '70B local vs API cloud — Comparaison détaillée',
        tableFormat: true,
        columns: ['Critère', '70B Q5 Local (M5 Max)', 'GPT-4o API', 'Claude Sonnet 3.5', 'Gemini 1.5 Pro'],
        rows: [
          { 'Critère': 'Qualité (MMLU)', '70B Q5 Local (M5 Max)': '86,1', 'GPT-4o API': '88,7', 'Claude Sonnet 3.5': '88,7', 'Gemini 1.5 Pro': '85,9' },
          { 'Critère': 'Vitesse (tok/s)', '70B Q5 Local (M5 Max)': '12–16', 'GPT-4o API': '50–80', 'Claude Sonnet 3.5': '50–80', 'Gemini 1.5 Pro': '60–100' },
          { 'Critère': 'Latence premier token', '70B Q5 Local (M5 Max)': '1–2 sec', 'GPT-4o API': '0,3–0,8 sec', 'Claude Sonnet 3.5': '0,4–0,9 sec', 'Gemini 1.5 Pro': '0,5–1 sec' },
          { 'Critère': 'Coût pour 1M tokens', '70B Q5 Local (M5 Max)': '0 €', 'GPT-4o API': '2,50 $/10,00 $', 'Claude Sonnet 3.5': '3,00 $/15,00 $', 'Gemini 1.5 Pro': '1,25 $/5,00 $' },
          { 'Critère': 'Coût/mois (5M tokens)', '70B Q5 Local (M5 Max)': '0 €', 'GPT-4o API': '50–150 $', 'Claude Sonnet 3.5': '75–200 $', 'Gemini 1.5 Pro': '30–80 $' },
          { 'Critère': 'Confidentialité', '70B Q5 Local (M5 Max)': '100 % local', 'GPT-4o API': 'Envoyé à OpenAI', 'Claude Sonnet 3.5': 'Envoyé à Anthropic', 'Gemini 1.5 Pro': 'Envoyé à Google' },
          { 'Critère': 'Internet requis', '70B Q5 Local (M5 Max)': 'Non', 'GPT-4o API': 'Oui', 'Claude Sonnet 3.5': 'Oui', 'Gemini 1.5 Pro': 'Oui' },
          { 'Critère': 'Limites de débit', '70B Q5 Local (M5 Max)': 'Aucune', 'GPT-4o API': 'Par palier', 'Claude Sonnet 3.5': 'Par palier', 'Gemini 1.5 Pro': 'Par palier' },
          { 'Critère': 'Personnalisation', '70B Q5 Local (M5 Max)': 'Totale (fine-tuning local)', 'GPT-4o API': 'Limitée', 'Claude Sonnet 3.5': 'Limitée', 'Gemini 1.5 Pro': 'Limitée' },
        ],
        note: "Le 70B Q5 local correspond à la qualité cloud à 3 % près sur MMLU. Avec un coût matériel d'environ 4 500 € et des économies mensuelles de 50–150 $, la période de rentabilité est de 27–80 mois. Les travaux sensibles (médical, juridique, financier) n'ont pas d'alternative cloud.",
      },
      useCases: {
        id: 'use-cases',
        title: "Cas d'utilisation pratiques pour l'inférence 70B en local",
        numberedItems: [
          { title: 'Analyse de documents confidentiels', whyItMatters: "Contrats juridiques, dossiers médicaux, états financiers, due diligence M&A. Les API cloud ne sont pas acceptables sous HIPAA, RGPD ou NDA. Le 70B Q5 sur M5 Max fournit une analyse de qualité cloud sans exfiltration de données." },
          { title: 'Assistance au code à haut volume', whyItMatters: "Développeur solo utilisant Copilot 8h/jour : ~10 €/mois. Équipe de 10 utilisant 70B Coder en local : 0 €/mois. Le code ne quitte jamais le réseau de l'entreprise. M5 Max comme serveur d'inférence partagé amorti en 3 mois pour 10 personnes." },
          { title: 'Génération de contenu long', whyItMatters: "Articles de blog de 5 000 mots, documentation technique. Le 70B produit de bien meilleurs textes longs que le 8B. En local : pas de limite de tokens, pas de limite de débit. Générer 50 000 mots/jour pour 0 € contre 50–100 $ en coûts API." },
          { title: 'Recherche et usage académique', whyItMatters: "Traiter des milliers d'articles pour une revue de littérature, générer des hypothèses dans de nombreux domaines. La qualité de raisonnement du 70B est nécessaire. Les coûts cloud sont prohibitifs pour les budgets étudiants et postdoctoraux." },
          { title: 'IA personnelle axée sur la confidentialité', whyItMatters: "Analyse de journaux personnels, planification financière familiale, réflexion sur la santé avec des données privées. Remplace ChatGPT Plus pour un foyer entier. Aucune donnée envoyée à des tiers." },
          { title: 'Flux de travail critiques hors ligne', whyItMatters: "Journalistes de terrain dans des régions restrictives, professionnels de santé en zones reculées, voyages sans accès internet fiable, installations sécurisées sans accès réseau externe." },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: 'Optimisation de la vitesse : MLX vs Ollama',
        content: ["MLX est le framework ML natif d'Apple et s'exécute 15–25 % plus vite qu'Ollama sur le même modèle. M5 Max avec 70B Q5 : Ollama = 12–16 tok/s, MLX = 18–22 tok/s."],
        codeBlock: `from mlx_lm import load, generate

# Charger le modèle 70B Q5 (version MLX de Hugging Face)
model, tokenizer = load("mlx-community/Llama-3.1-70B-Instruct-Q5")

# Génération en streaming — premier mot visible en 1-2 sec
from mlx_lm import stream_generate
for chunk in stream_generate(model, tokenizer, "Explique l'informatique quantique", max_tokens=500):
    print(chunk, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: 'Conseils supplémentaires pour optimiser la vitesse',
        items: [
          "Maintenir le modèle chaud : définir OLLAMA_KEEP_ALIVE=1h (ou 24h pour un Mac Mini toujours allumé) afin d'éviter le rechargement de 30–60 secondes à chaque requête.",
          "Utiliser le streaming : l'utilisateur voit le premier token en 1–2 secondes au lieu d'attendre 25–40 secondes pour la réponse complète.",
          "Réduire max_tokens : si des réponses de 200 mots suffisent, définir max_tokens=200. À 14 tok/s : 200 tokens = 14 sec contre 36 sec pour 500 tokens.",
          "Compromis Q4 vs Q5 en vitesse : Q4 = 15–20 tok/s (+25 % plus rapide que Q5). La différence de qualité est de ~2–3 % sur la plupart des tâches. Q4 pour le chat, Q5 pour le raisonnement critique.",
          "Éviter les applications GPU-intensives pendant l'inférence — l'historique GPU du Moniteur d'activité indique si d'autres processus concurrencent la bande passante Metal.",
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'Aperçu M5 Ultra : La prochaine génération de capacités (attendue mi-2026)',
        content: ["En se basant sur le schéma Ultra précédent d'Apple (2× les specs Max), projections M5 Ultra : 256 Go de mémoire unifiée, ~1 200 Go/s de bande passante, ~80 cœurs GPU. Attendu exclusivement dans le Mac Studio Ultra."],
        tableFormat: true,
        columns: ['Modèle', 'M5 Max 128 Go', 'M5 Ultra 256 Go (prévision)'],
        rows: [
          { 'Modèle': 'Llama 3.1 70B Q5', 'M5 Max 128 Go': '12–16 tok/s', 'M5 Ultra 256 Go (prévision)': '24–32 tok/s' },
          { 'Modèle': 'Llama 3.1 70B Q8', 'M5 Max 128 Go': '8–12 tok/s', 'M5 Ultra 256 Go (prévision)': '16–24 tok/s' },
          { 'Modèle': 'Llama 3.1 70B FP16 (sans perte)', 'M5 Max 128 Go': '✗ Ne rentre pas', 'M5 Ultra 256 Go (prévision)': '14–18 tok/s' },
          { 'Modèle': 'Qwen2.5 72B Q8', 'M5 Max 128 Go': '8–12 tok/s', 'M5 Ultra 256 Go (prévision)': '16–24 tok/s' },
          { 'Modèle': 'Mixtral 8x22B Q5', 'M5 Max 128 Go': '14–18 tok/s', 'M5 Ultra 256 Go (prévision)': '28–36 tok/s' },
          { 'Modèle': 'Llama 3.1 405B Q3', 'M5 Max 128 Go': '✗ Ne rentre pas', 'M5 Ultra 256 Go (prévision)': '4–6 tok/s' },
          { 'Modèle': 'Llama 3.1 405B Q4 (~200 Go)', 'M5 Max 128 Go': '✗ Ne rentre pas', 'M5 Ultra 256 Go (prévision)': '3–5 tok/s' },
        ],
        note: "M5 Ultra débloque : (1) 70B FP16 sans perte — première sur matériel grand public. (2) Modèles de 405B paramètres. (3) Deux modèles 70B simultanés. Prix estimé : 5 500–7 000 € (Mac Studio Ultra). Quand attendre : si vous avez besoin de modèles 405B, du 70B FP16, ou si vous possédez déjà un M3/M4 Max.",
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: "Le 70B Q4 est-il suffisamment bon pour la plupart des tâches ?", a: "Oui. Q4 est la quantification standard du secteur. La perte de qualité de ~3–5 % par rapport à Q5 est imperceptible pour la plupart des tâches de chat, de rédaction et d'usage général. Utiliser Q5 ou Q8 uniquement quand la qualité est critique (analyse juridique, revue de code, usage médical)." },
          { q: "Puis-je exécuter 70B Q5 et un autre modèle simultanément ?", a: "Oui, avec un modèle plus petit. 70B Q5 = 49 Go. 128 Go moins 8 Go d'overhead OS = 120 Go. 70B Q5 (49 Go) + un modèle 7–8B (5 Go) = 54 Go — bien dans les limites. Deux modèles 70B simultanés nécessitent le M5 Ultra 256 Go." },
          { q: "Quand attendre le M5 Ultra plutôt que d'acheter le M5 Max maintenant ?", a: "Attendre le M5 Ultra si : (1) le 70B FP16 (qualité sans perte) est nécessaire, (2) les modèles 405B sont requis, ou (3) vous possédez déjà un M3 Max ou M4 Max (passer le M5 Max). Acheter le M5 Max maintenant si : vous avez besoin des capacités 70B aujourd'hui et votre budget est inférieur à 5 000 €." },
          { q: "Le 70B sera-t-il beaucoup plus rapide sur M5 Ultra que sur M5 Max ?", a: "Environ 2× plus rapide, grâce à la bande passante mémoire doublée (~1 200 Go/s vs 614 Go/s). Le M5 Max exécute le 70B Q5 à 12–16 tok/s ; le M5 Ultra est projeté à 24–32 tok/s. Le M5 Ultra exécutera aussi le 70B FP16 (qualité sans perte), que le M5 Max ne peut pas héberger." },
          { q: "Puis-je exécuter deux modèles 70B simultanément sur M5 Max 128 Go ?", a: "Non, pas deux modèles 70B complets. Deux 70B Q4 = 84 Go plus overhead OS = ~95 Go, ce qui est serré sur 128 Go. Le M5 Ultra 256 Go gère facilement deux modèles 70B simultanés ou un 70B + un 34B." },
          { q: "Quel espace disque faut-il pour les modèles 70B ?", a: "Chaque modèle 70B occupe 42 Go (Q4), 49 Go (Q5) ou 74 Go (Q8) sur disque. Trois quantifications d'un seul modèle : 165 Go. Pour un travail sérieux avec plusieurs modèles 70B, opter pour 1 To ou 2 To de SSD sur Mac Studio." },
          { q: "Le 70B local est-il vraiment aussi bon que GPT-4o pour mon cas d'usage ?", a: "Le 70B Q5 obtient 86,1 sur MMLU vs 88,7 pour GPT-4o — un écart de 3 % sur les benchmarks. Pour les travaux sensibles, une utilisation intensive (50 €+/mois) ou hors ligne, le local gagne automatiquement. Tester avec vos propres prompts pour valider sur votre workflow." },
          { q: "Les nouvelles générations de modèles 70B fonctionneront-elles sur M5 Max ?", a: "Oui. Le M5 Max 128 Go fait tenir tout modèle 70B en quantification Q4/Q5/Q8, quelle que soit l'architecture. Les nouvelles versions 70B apparaissent généralement sur Ollama dans les jours suivant leur sortie. Utiliser ollama pull avec le nouveau nom de modèle." },
          { q: "Les modèles 70B locaux sont-ils conformes au RGPD sur M5 Max ?", a: "Oui. Toutes les données étant traitées localement sans transmission vers des serveurs externes, aucune donnée personnelle n'est soumise à l'article 28 RGPD (sous-traitance). Pour un usage en entreprise, la CNIL recommande les traitements locaux pour les données sensibles comme alternative à l'externalisation cloud." },
          { q: "Vaut-il la peine d'investir dans un M5 Max pour une PME française ?", a: "Oui, notamment si une équipe de 5 à 15 personnes travaille quotidiennement avec des documents sensibles. Un Mac Studio M5 Max à environ 4 500 € s'amortit face aux coûts de l'API GPT-4o (50–200 €/mois/utilisateur) en 3 à 12 mois, tout en maintenant les données dans l'entreprise." },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Articles connexes',
        items: [
          "[Apple Silicon pour les LLM locaux : Guide complet](/local-llms/apple-silicon-local-llm-guide-2026?lang=fr) — Comparaison M1 à M5 Max, mémoire unifiée expliquée",
          "[Benchmarks LLM M5 Pro vs M5 Max 2026](/local-llms/m5-pro-max-llm-benchmarks-2026?lang=fr) — chiffres tok/s détaillés par taille de modèle",
          "[Quelle mémoire unifiée pour les LLM locaux ?](/local-llms/how-much-unified-memory-for-local-llm?lang=fr) — guide 16 Go vs 36 Go vs 64 Go vs 128 Go",
          "[Meilleurs modèles LLM pour Apple Silicon](/local-llms/best-models-apple-silicon-2026?lang=fr) — recommandations par configuration Mac",
          "[MLX vs Ollama vs llama.cpp sur Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac?lang=fr) — comparaison de vitesse des frameworks et guide de configuration",
          "[Apple Silicon vs GPU NVIDIA pour les LLM locaux](/local-llms/apple-silicon-vs-nvidia-gpu-local-llm?lang=fr) — comparaison matérielle multi-plateforme",
          "[Quantification LLM expliquée](/local-llms/llm-quantization-explained?lang=fr) — approfondissement Q4/Q5/Q8/FP16",
          "[Mac Mini M5 comme serveur IA local](/local-llms/mac-mini-m5-local-ai-server?lang=fr) — configuration d'un serveur d'inférence permanent",
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    title: 'Apple Silicon 2026で70B以上のモデルを動かす：M5 Max完全ガイド',
    seoTitle: 'Apple Silicon M5 Max 128GBで70Bモデルを実行：セットアップ・量子化・GPT-4oとの品質比較',
    intro: 'Apple Silicon M5 Max（128GB）でローカルに70B以上のLLMを実行します。OllamaとMLXを使った完全セットアップガイド、量子化比較（Q4/Q5/Q8）、8B対70Bの品質ベンチマーク、実際のtok/s数値、70B対クラウドAPIのコスト分析、代替70B+モデル、速度最適化、2026年のM5 Ultraの予測。',
    metaDescription: 'M5 Max 128GBで70B LLMを実行：ステップバイステップセットアップ、Q4/Q5/Q8量子化ガイド、速度ベンチマーク、GPT-4oとの品質比較、M5 Ultraプレビュー。2026年完全ガイド。',
    twitterDescription: 'M5 Max 128GBで70B LLM：12〜20 tok/s、Q4〜Q8、クラウド品質との差3%以内、月額0円。完全セットアップ＋ベンチマークガイド。',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Llama 3.1 70B', 'Qwen2.5 72B', 'DeepSeek 67B', 'Mixtral 8x22B', 'Llama 3.1 8B'],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'M5 Maxの所有者および購入検討者で、クラウドAPIを使わずに最高品質のローカルLLMを求めている方',
    readTime: '16分で読める',
    educationalLevel: 'Advanced',
    primaryTerm: '70BモデルApple Silicon',
    targetKeywords: ['70BモデルMac', 'M5 Max 128GB LLM', '70Bローカル実行', 'Llama 70B Apple Silicon', '大規模モデルローカル推論'],
    ctaText: 'M5 MaxでLlama 3.1 70Bをローカル実行中ですか？PromptQuorumを使って、GPT-4o、Claude 3.5 Sonnet、Gemini 1.5 Proなど22以上のクラウドモデルと自分のローカル回答を比較しましょう。4,000ドルのハードウェア投資が、推論・コーディング・ライティングのタスクでクラウド品質に達しているか検証できます。すべて1回のディスパッチで。',
    leadAnswerBlock: '**M5 Max 128GBはLlama 3.1 70Bを15〜20 tok/s（Q4_K_M）または12〜16 tok/s（Q5_K_M）で実行します。70B Q5のMMLUスコアは86.1で、GPT-4o（88.7）との差はわずか3%。月額0円でローカル動作します。複雑なマルチGPU構成なしに70Bが動く唯一のコンシューマーハードウェアです。Ollamaを使えば10分未満でセットアップできます。**',
    quickAnswerTop: {
      en: {
        question: 'Can I run 70B models on M5 Max 128GB?',
        answer: 'Yes. Llama 3.1 70B Q5_K_M runs at 12–16 tok/s. Q4_K_M at 15–20 tok/s. Q8_0 at 8–12 tok/s (lossless quality). All fit in 128GB unified memory. Setup is 10 minutes with Ollama. 70B Q5 matches GPT-4o quality within 3% on standard benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, good quality',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, very good (recommended)',
          '70B Q8_0: 74 GB, 8–12 tok/s, lossless quality',
          'Only consumer option without multi-GPU complexity',
          'MMLU: 70B Q5 = 86.1 vs GPT-4o = 88.7 (3% gap)',
          'Setup: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-05-15',
      },
      de: {
        question: 'Kann ich 70B-Modelle auf dem M5 Max 128 GB ausführen?',
        answer: 'Ja. Llama 3.1 70B Q5_K_M läuft mit 12–16 tok/s. Q4_K_M mit 15–20 tok/s. Q8_0 mit 8–12 tok/s (verlustfreie Qualität). Alle passen in den 128-GB-Unified-Memory. Die Einrichtung dauert 10 Minuten mit Ollama. 70B Q5 erreicht innerhalb von 3 % die GPT-4o-Qualität bei Standard-Benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, gute Qualität',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, sehr gut (empfohlen)',
          '70B Q8_0: 74 GB, 8–12 tok/s, verlustfreie Qualität',
          'Einzige Consumer-Option ohne komplexe Multi-GPU-Konfiguration',
          'MMLU: 70B Q5 = 86,1 vs GPT-4o = 88,7 (3 % Unterschied)',
          'Einrichtung: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-05-15',
      },
      fr: {
        question: 'Puis-je exécuter des modèles 70B sur M5 Max 128 Go ?',
        answer: 'Oui. Llama 3.1 70B Q5_K_M tourne à 12–16 tok/s. Q4_K_M à 15–20 tok/s. Q8_0 à 8–12 tok/s (qualité sans perte). Tous tiennent dans les 128 Go de mémoire unifiée. La configuration prend 10 minutes avec Ollama. Le 70B Q5 correspond à la qualité de GPT-4o à 3 % près sur les benchmarks standards.',
        bullets: [
          '70B Q4_K_M : 42 Go, 15–20 tok/s, bonne qualité',
          '70B Q5_K_M : 49 Go, 12–16 tok/s, très bonne (recommandé)',
          '70B Q8_0 : 74 Go, 8–12 tok/s, qualité sans perte',
          'Seule option grand public sans complexité multi-GPU',
          'MMLU : 70B Q5 = 86,1 vs GPT-4o = 88,7 (écart de 3 %)',
          'Configuration : brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-05-15',
      },
      ja: {
        question: 'M5 Max 128GBで70Bモデルを実行できますか？',
        answer: 'はい。Llama 3.1 70B Q5_K_Mは12〜16 tok/sで動作します。Q4_K_Mは15〜20 tok/s、Q8_0は8〜12 tok/s（ロスレス品質）。すべて128GBのユニファイドメモリに収まります。Ollamaを使えば10分でセットアップ完了。70B Q5の品質はGPT-4oの3%以内です。',
        bullets: [
          '70B Q4_K_M：42GB、15〜20 tok/s、良好な品質',
          '70B Q5_K_M：49GB、12〜16 tok/s、非常に良い（推奨）',
          '70B Q8_0：74GB、8〜12 tok/s、ロスレス品質',
          'マルチGPU構成不要な唯一のコンシューマー選択肢',
          'MMLU：70B Q5 = 86.1 vs GPT-4o = 88.7（3%差）',
          'セットアップ：brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-05-15',
      },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: '70Bが重要な理由', anchor: '#why' },
      { label: 'ハードウェア要件', anchor: '#hardware' },
      { label: 'ステップバイステップセットアップ', anchor: '#setup' },
      { label: '品質比較：8B vs 70B vs GPT-4o', anchor: '#quality' },
      { label: '量子化の詳細', anchor: '#quantization' },
      { label: '代替70B+モデル', anchor: '#alternatives' },
      { label: '70Bローカル対クラウドAPI', anchor: '#vs-cloud' },
      { label: '実用的なユースケース', anchor: '#use-cases' },
      { label: '速度最適化', anchor: '#speed-opts' },
      { label: 'M5 Ultraプレビュー', anchor: '#m5ultra' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: '70Bが重要な理由：8Bからの品質の飛躍',
        content: ['8Bから70Bパラメータへの飛躍は、ローカルAIにおける最も重要な品質の転換点です。業界ベンチマークスコア：'],
        tableFormat: true,
        columns: ['ベンチマーク', 'Llama 3.1 8B', 'Llama 3.1 70B Q5', 'GPT-4o'],
        rows: [
          { 'ベンチマーク': 'MMLU（一般知識）', 'Llama 3.1 8B': '73.0', 'Llama 3.1 70B Q5': '86.1', 'GPT-4o': '88.7' },
          { 'ベンチマーク': 'HumanEval（コード）', 'Llama 3.1 8B': '72.6', 'Llama 3.1 70B Q5': '80.5', 'GPT-4o': '90.2' },
          { 'ベンチマーク': 'GSM8K（数学）', 'Llama 3.1 8B': '84.5', 'Llama 3.1 70B Q5': '95.1', 'GPT-4o': '95.8' },
          { 'ベンチマーク': 'BBH（推論）', 'Llama 3.1 8B': '71.0', 'Llama 3.1 70B Q5': '85.3', 'GPT-4o': '88.9' },
          { 'ベンチマーク': '平均', 'Llama 3.1 8B': '75.3', 'Llama 3.1 70B Q5': '86.8', 'GPT-4o': '90.9' },
        ],
        note: '70B Q5は、8BとGPT-4oの品質差の75%を埋めます。そして月額0円でローカル動作します。',
      },
      hardware: {
        id: 'hardware',
        title: '70Bモデルが動作するハードウェア',
        tableFormat: true,
        columns: ['ハードウェア', '量子化', 'モデルサイズ', 'tok/s', '品質', '対応？'],
        rows: [
          { 'ハードウェア': 'M3 Max 96GB', '量子化': 'Q4_K_M', 'モデルサイズ': '42 GB', 'tok/s': '9〜13', '品質': '良好', '対応？': '✓ 可' },
          { 'ハードウェア': 'M3 Max 128GB', '量子化': 'Q5_K_M', 'モデルサイズ': '49 GB', 'tok/s': '8〜12', '品質': '非常に良好', '対応？': '✓ 可' },
          { 'ハードウェア': 'M4 Max 128GB', '量子化': 'Q5_K_M', 'モデルサイズ': '49 GB', 'tok/s': '10〜14', '品質': '非常に良好', '対応？': '✓ 可' },
          { 'ハードウェア': 'M5 Max 128GB', '量子化': 'Q4_K_M', 'モデルサイズ': '42 GB', 'tok/s': '15〜20', '品質': '良好', '対応？': '✓ 可' },
          { 'ハードウェア': 'M5 Max 128GB', '量子化': 'Q5_K_M', 'モデルサイズ': '49 GB', 'tok/s': '12〜16', '品質': '非常に良好', '対応？': '✓ 可' },
          { 'ハードウェア': 'M5 Max 128GB', '量子化': 'Q8_0', 'モデルサイズ': '74 GB', 'tok/s': '8〜12', '品質': 'ロスレス', '対応？': '✓ 可' },
          { 'ハードウェア': 'M5 Ultra 256GB（予測）', '量子化': 'FP16', 'モデルサイズ': '140 GB', 'tok/s': '14〜18', '品質': '完全', '対応？': '✓ 可' },
          { 'ハードウェア': 'RTX 4090 24GB', '量子化': 'Any', 'モデルサイズ': '42 GB+', 'tok/s': '—', '品質': '—', '対応？': '✗ OOM' },
          { 'ハードウェア': 'Dual RTX 3090 48GB', '量子化': 'Q4_K_M', 'モデルサイズ': '42 GB', 'tok/s': '12〜15', '品質': '良好', '対応？': '✓ 可（複雑）' },
          { 'ハードウェア': 'Dual RTX 4090 48GB', '量子化': 'Q5_K_M', 'モデルサイズ': '49 GB', 'tok/s': '18〜25', '品質': '非常に良好', '対応？': '✓ 可（5,000ドル+）' },
          { 'ハードウェア': '4× RTX 3090 96GB', '量子化': 'Q8_0', 'モデルサイズ': '74 GB', 'tok/s': '12〜16', '品質': 'ロスレス', '対応？': '✓ 可（高コスト）' },
        ],
        note: 'M5 Max 128GBは、複雑なマルチGPU構成なしに70Bモデルを動かせる唯一のコンシューマーハードウェアです。約600,000円のMac Studio構成が、900,000〜1,200,000円相当のNVIDIAマルチGPUリグの代替となります。',
      },
      setupInstall: {
        id: 'setup',
        title: 'ステップバイステップ：M5 Max 128GBで70Bを実行する',
        content: ['ステップ1：ハードウェアを確認します。ステップ2：Ollamaをインストールして設定します。'],
        codeBlock: `# ステップ1：ユニファイドメモリを確認（128 GBと表示される必要があります）
system_profiler SPHardwareDataType | grep Memory
# → Memory: 128 GB

# ステップ2：Ollamaをインストール
brew install ollama
brew services start ollama

# ステップ3：70B用に設定（モデルを常駐させ、毎回の60秒ウォームアップを回避）
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
echo 'export OLLAMA_NUM_PARALLEL=1' >> ~/.zshrc
source ~/.zshrc
brew services restart ollama`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: 'ステップ3：70Bモデルをダウンロードする',
        content: ['100Mbpsでのダウンロード時間：45〜90分。1Gbpsでは5〜10分。'],
        codeBlock: `# 推奨：Q5_K_M — 最高の品質/速度バランス（49GBダウンロード）
ollama pull llama3.1:70b-instruct-q5_K_M

# 代替：Q4 — 最大速度、42GBダウンロード
ollama pull llama3.1:70b-instruct-q4_K_M

# 代替：Q8 — ロスレス品質、74GBダウンロード
ollama pull llama3.1:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: 'ステップ4〜6：最初の実行・Metal確認・メモリ確認',
        content: ['最初のリクエストは49GBをユニファイドメモリに読み込むため30〜60秒かかります。以降のリクエストは即座に応答します。'],
        codeBlock: `# ステップ4：最初の実行（モデル読み込みに30〜60秒待機）
ollama run llama3.1:70b-instruct-q5_K_M "ローカルAIについて200字で述べてください"

# ステップ5：Metal GPU高速化を確認
ollama run llama3.1:70b-instruct-q5_K_M --verbose
# 期待される出力：ggml_metal_init: found device: Apple M5 Max

# ステップ6：アプリケーション向けAPIアクセス
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.1:70b-instruct-q5_K_M",
  "messages": [{"role": "user", "content": "量子コンピューティングを説明してください"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: '品質比較：8B vs 70B vs GPT-4o',
        content: [
          'プロンプト：「再帰関数でスタックオーバーフローが発生する理由を説明し、クラッシュする前に無限再帰を検出するPython関数を書いてください。」',
          'Llama 3.1 8B Q4の回答（16GB以上のMacなら動作）：',
        ],
        blockquote: 'スタックオーバーフローは、関数呼び出しが多すぎてメモリを超えたときに発生します。',
        codeBlock: `def detect_recursion(func):
    count = 0
    try:
        func()
    except RecursionError:
        count += 1
    return count > 0`,
        codeLanguage: 'python',
        note: '重要な洞察が欠けています：sys.setrecursionlimitが使われておらず、実際の検出ロジックが不正確です。',
      },
      quality70B: {
        id: 'quality-70b',
        title: 'Llama 3.1 70B Q5の回答（M5 Max 128GB）',
        blockquote: '再帰でのスタックオーバーフローは、コールスタックがOS設定の上限（通常1MB〜8MB）を超えたときに発生します。再帰呼び出しごとに、ローカル変数とリターンアドレスを含むスタックフレームが追加されます。Pythonのデフォルト上限は1,000呼び出しです。',
        codeBlock: `import sys
import functools

def detect_recursion(threshold=900):
    def decorator(func):
        depth = 0
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            nonlocal depth
            depth += 1
            try:
                if depth > threshold:
                    raise RecursionError(
                        f"Detected potential infinite recursion at depth {depth}"
                    )
                return func(*args, **kwargs)
            finally:
                depth -= 1
        return wrapper
    return decorator`,
        codeLanguage: 'python',
        note: '正確：デコレーターパターン、深さの追跡、クラッシュ前のプロアクティブな検出、設定可能な閾値。GPT-4oはわずかにエレガントなエラーハンドリングを追加します。実際の品質差は3%程度です。',
      },
      quantization: {
        id: 'quantization',
        title: '70Bモデルの量子化の詳細',
        items: [
          'Q4とQ5の品質差は8Bよりも70Bで大きくなります。Q4：品質損失約3〜5%。Q5：FP16比約0.5〜1%の損失。',
          '8Bモデルではq4対Q8はほとんど気づかないレベルです。70Bでは複雑な推論やコードでQ4対Q8の差が顕著になります。',
          '推奨：Q5_K_Mが最良のバランスです。速度重視（チャット、自動補完）ならQ4。出力品質重視（法律、コードレビュー）ならQ8。',
          'メモリ：Q4 = 42 GB、Q5 = 49 GB、Q8 = 74 GB。すべてM5 Max 128GBに収まります。OS（約8 GB）とアプリのために余裕を確保してください。',
          '実際のtok/s：Q4 = 15〜20、Q5 = 12〜16、Q8 = 8〜12。12 tok/sでは500語の回答に約40秒かかります。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Apple Silicon向け代替70B+モデル',
        tableFormat: true,
        columns: ['モデル', 'サイズ（Q5）', '最適な用途', 'M5 Max上のtok/s'],
        rows: [
          { 'モデル': 'Llama 3.1 70B Instruct', 'サイズ（Q5）': '49 GB', '最適な用途': '汎用、推論', 'M5 Max上のtok/s': '12〜16' },
          { 'モデル': 'Qwen2.5 72B Instruct', 'サイズ（Q5）': '51 GB', '最適な用途': '多言語、数学、コード', 'M5 Max上のtok/s': '11〜15' },
          { 'モデル': 'DeepSeek 67B', 'サイズ（Q5）': '47 GB', '最適な用途': 'コーディング特化', 'M5 Max上のtok/s': '12〜16' },
          { 'モデル': 'Llama 3.1 70B Coder', 'サイズ（Q5）': '49 GB', '最適な用途': 'コーディング専用タスク', 'M5 Max上のtok/s': '13〜17' },
          { 'モデル': 'Mixtral 8x22B (MoE)', 'サイズ（Q4）': '88 GB', '最適な用途': '高品質な推論', 'M5 Max上のtok/s': '18〜22' },
          { 'モデル': 'Cohere Command R+ 104B', 'サイズ（Q4）': '73 GB', '最適な用途': 'RAG、128Kコンテキスト', 'M5 Max上のtok/s': '8〜12' },
        ],
        note: 'ユースケース別推奨：汎用推論 → Llama 3.1 70B Q5。コード → DeepSeek 67B。英語以外 → Qwen2.5 72B。文書Q&A → Command R+。最大速度 → Mixtral 8x22B（MoEはアクティブパラメーター数が少ない）。',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: '代替モデルのダウンロード',
        codeBlock: `ollama pull qwen2.5:72b-instruct-q5_K_M
ollama pull deepseek-coder:67b-q5_K_M
ollama pull mixtral:8x22b`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '70Bローカル対クラウドAPI — 詳細比較',
        tableFormat: true,
        columns: ['指標', '70B Q5ローカル（M5 Max）', 'GPT-4o API', 'Claude Sonnet 3.5', 'Gemini 1.5 Pro'],
        rows: [
          { '指標': '品質（MMLU）', '70B Q5ローカル（M5 Max）': '86.1', 'GPT-4o API': '88.7', 'Claude Sonnet 3.5': '88.7', 'Gemini 1.5 Pro': '85.9' },
          { '指標': '速度（tok/s）', '70B Q5ローカル（M5 Max）': '12〜16', 'GPT-4o API': '50〜80', 'Claude Sonnet 3.5': '50〜80', 'Gemini 1.5 Pro': '60〜100' },
          { '指標': '最初のトークン遅延', '70B Q5ローカル（M5 Max）': '1〜2秒', 'GPT-4o API': '0.3〜0.8秒', 'Claude Sonnet 3.5': '0.4〜0.9秒', 'Gemini 1.5 Pro': '0.5〜1秒' },
          { '指標': '1Mトークンあたりのコスト', '70B Q5ローカル（M5 Max）': '$0', 'GPT-4o API': '$2.50/$10.00', 'Claude Sonnet 3.5': '$3.00/$15.00', 'Gemini 1.5 Pro': '$1.25/$5.00' },
          { '指標': 'コスト/月（5Mトークン）', '70B Q5ローカル（M5 Max）': '$0', 'GPT-4o API': '$50〜150', 'Claude Sonnet 3.5': '$75〜200', 'Gemini 1.5 Pro': '$30〜80' },
          { '指標': 'プライバシー', '70B Q5ローカル（M5 Max）': '100%ローカル', 'GPT-4o API': 'OpenAIに送信', 'Claude Sonnet 3.5': 'Anthropicに送信', 'Gemini 1.5 Pro': 'Googleに送信' },
          { '指標': 'インターネット必須', '70B Q5ローカル（M5 Max）': 'いいえ', 'GPT-4o API': 'はい', 'Claude Sonnet 3.5': 'はい', 'Gemini 1.5 Pro': 'はい' },
          { '指標': 'レート制限', '70B Q5ローカル（M5 Max）': 'なし', 'GPT-4o API': 'ティアベース', 'Claude Sonnet 3.5': 'ティアベース', 'Gemini 1.5 Pro': 'ティアベース' },
          { '指標': 'カスタマイズ', '70B Q5ローカル（M5 Max）': '完全（ローカルファインチューニング）', 'GPT-4o API': '限定的', 'Claude Sonnet 3.5': '限定的', 'Gemini 1.5 Pro': '限定的' },
        ],
        note: '70B Q5ローカルはMMLUでクラウド品質の3%以内に匹敵します。約600,000円のハードウェアコストと月々の節約（$50〜150）で、投資回収期間は27〜80ヶ月です。プライバシーが重要な業務（医療、法律、金融）にはクラウドの代替手段がありません。',
      },
      useCases: {
        id: 'use-cases',
        title: '70Bローカル推論の実用的なユースケース',
        numberedItems: [
          { title: '機密文書分析', whyItMatters: '法的契約書、医療記録、財務諸表、M&Aデューデリジェンス。HIPAA、個人情報保護法、またはNDAの下でクラウドAPIは受け入れられません。M5 Max上の70B Q5は、データ流出なしにクラウド品質の分析を提供します。' },
          { title: '大量コーディング支援', whyItMatters: 'Copilotを1日8時間使う個人開発者：月約1,500円。ローカル70B Coderを使う10人チーム：月0円。コードは社外ネットワークに出ません。共有推論サーバーとしてのM5 Maxは10人チームで3ヶ月で元が取れます。' },
          { title: '長文コンテンツ生成', whyItMatters: '5,000字のブログ記事、技術文書。70Bは8Bよりも格段に優れた長文を生成します。ローカル：トークン制限なし、レート制限なし。API費用を$50〜100かけずに1日50,000字を生成できます。' },
          { title: '研究・学術利用', whyItMatters: '文献レビューのために数千本の論文を処理し、多くの分野にわたって仮説を生成します。70Bの推論品質が必要です。クラウドのコストは学生・ポスドクの予算では高すぎます。' },
          { title: 'プライバシー重視の個人AIアシスタント', whyItMatters: '日記の分析、家族の財務計画、プライベートデータによる健康管理。一世帯のChatGPT Plusを代替します。サードパーティへのデータ送信なし。' },
          { title: 'オフライン重要ワークフロー', whyItMatters: '規制の厳しい地域のジャーナリスト、遠隔地の医療従事者、信頼できるインターネットのない出張、外部ネットワークアクセスのないセキュアな施設。' },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: '速度最適化：MLX対Ollama',
        content: ['MLXはAppleのネイティブMLフレームワークで、同じモデルでOllamaより15〜25%速く動作します。M5 MaxでQ5の70B：Ollama = 12〜16 tok/s、MLX = 18〜22 tok/s。'],
        codeBlock: `from mlx_lm import load, generate

# 70B Q5モデルを読み込む（Hugging FaceのMLX変換版）
model, tokenizer = load("mlx-community/Llama-3.1-70B-Instruct-Q5")

# ストリーミング生成 — ユーザーは1〜2秒で最初の単語を見られる
from mlx_lm import stream_generate
for chunk in stream_generate(model, tokenizer, "量子コンピューティングを説明してください", max_tokens=500):
    print(chunk, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: '追加の速度最適化のヒント',
        items: [
          'モデルをウォーム状態に保つ：OLLAMA_KEEP_ALIVE=1hを設定（常時起動のMac Miniなら24h）して、毎リクエストの30〜60秒の再読み込みを回避します。',
          'ストリーミングを使用する：ユーザーは完全な応答を25〜40秒待つのではなく、1〜2秒で最初のトークンを見られます。',
          'max_tokensを下げる：200字の回答でよければmax_tokens=200を設定します。14 tok/sで：200トークン=14秒 vs 500トークンで36秒。',
          'Q4対Q5の速度トレードオフ：Q4 = 15〜20 tok/s（Q5より25%速い）。ほとんどのタスクで品質差は約2〜3%。チャットにはQ4、重要な推論にはQ5。',
          '推論中は他のGPU集約的アプリを避けてください。アクティビティモニターのGPU履歴で、他プロセスがMetalの帯域幅を競合していないか確認できます。',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'M5 Ultraプレビュー：次の能力の段階（2026年中頃予定）',
        content: ['AppleのこれまでのUltraパターン（Max仕様の2倍）に基づく、M5 Ultraの予測：256GBユニファイドメモリ、帯域幅約1,200 GB/s、GPUコア数約80。Mac Studio Ultraのみの予定。'],
        tableFormat: true,
        columns: ['モデル', 'M5 Max 128GB', 'M5 Ultra 256GB（予測）'],
        rows: [
          { 'モデル': 'Llama 3.1 70B Q5', 'M5 Max 128GB': '12〜16 tok/s', 'M5 Ultra 256GB（予測）': '24〜32 tok/s' },
          { 'モデル': 'Llama 3.1 70B Q8', 'M5 Max 128GB': '8〜12 tok/s', 'M5 Ultra 256GB（予測）': '16〜24 tok/s' },
          { 'モデル': 'Llama 3.1 70B FP16（ロスレス）', 'M5 Max 128GB': '✗ 収まらない', 'M5 Ultra 256GB（予測）': '14〜18 tok/s' },
          { 'モデル': 'Qwen2.5 72B Q8', 'M5 Max 128GB': '8〜12 tok/s', 'M5 Ultra 256GB（予測）': '16〜24 tok/s' },
          { 'モデル': 'Mixtral 8x22B Q5', 'M5 Max 128GB': '14〜18 tok/s', 'M5 Ultra 256GB（予測）': '28〜36 tok/s' },
          { 'モデル': 'Llama 3.1 405B Q3', 'M5 Max 128GB': '✗ 収まらない', 'M5 Ultra 256GB（予測）': '4〜6 tok/s' },
          { 'モデル': 'Llama 3.1 405B Q4（約200GB）', 'M5 Max 128GB': '✗ 収まらない', 'M5 Ultra 256GB（予測）': '3〜5 tok/s' },
        ],
        note: 'M5 Ultraが解放するもの：(1) ロスレス70B FP16 — コンシューマーハードウェアとして初。(2) 405Bパラメーターモデル。(3) 2つの同時70Bモデル。予想価格：約850,000〜1,100,000円（Mac Studio Ultra）。待つべき場合：405Bモデル、70B FP16が必要な場合、またはすでにM3/M4 Maxを所有している場合。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '70B Q4はほとんどのタスクに十分ですか？', a: 'はい。Q4は業界標準の量子化です。Q5との品質損失約3〜5%は、ほとんどのチャット、ライティング、汎用タスクでは気づかないレベルです。出力品質が重要な場合（法律分析、コードレビュー、医療用途）のみQ5またはQ8を使用してください。' },
          { q: '70B Q5と別のモデルを同時に実行できますか？', a: 'はい、小さいモデルと一緒なら。70B Q5 = 49 GB。128 GB マイナス8 GB OSオーバーヘッド = 120 GB。70B Q5（49 GB）+ 7〜8Bモデル（5 GB）= 54 GB — 余裕があります。2つの同時70BモデルはM5 Ultra 256 GBが必要です。' },
          { q: '今M5 Maxを買うべきか、M5 Ultraを待つべきか？', a: 'M5 Ultraを待つ場合：(1) 70B FP16（ロスレス品質）が必要、(2) 405Bモデルが必要、(3) すでにM3 MaxまたはM4 Maxを所有している（M5 Maxをスキップ）。今M5 Maxを買う場合：今すぐ70B能力が必要で予算が80万円未満。' },
          { q: 'M5 Ultraでの70BはM5 Maxと比べてどれだけ速くなりますか？', a: 'メモリ帯域幅が2倍（約1,200 GB/s対614 GB/s）になることから、約2倍速くなります。M5 Maxは70B Q5を12〜16 tok/sで実行。M5 Ultraは24〜32 tok/sと予測されます。M5 MaxではFP16が収まらない70B FP16もM5 Ultraなら実行可能です。' },
          { q: 'M5 Max 128GBで2つの70Bモデルを同時に実行できますか？', a: 'いいえ、2つの完全な70Bモデルは無理です。2つの70B Q4 = 84 GB プラスOSオーバーヘッド = 約95 GB、128 GBでは厳しいです。M5 Ultra 256 GBなら2つの同時70Bモデルや70B+34Bの組み合わせを余裕で処理できます。' },
          { q: '70Bモデルに必要なディスク容量はどのくらいですか？', a: '各70Bモデルはディスクに42 GB（Q4）、49 GB（Q5）、または74 GB（Q8）を必要とします。1つのモデルの3つの量子化を保持するなら165 GB。複数モデルでの本格的な70B作業にはMac Studioの1 TBまたは2 TB SSDを推奨します。' },
          { q: 'ローカルで動く70BはGPT-4oと比べて私のユースケースで実際に同等ですか？', a: '70B Q5はMMLUで86.1、GPT-4oは88.7 — ベンチマーク上の差は3%。プライバシーが重要な作業、高頻度利用（月$50以上）、またはオフライン利用ではローカルが自動的に勝ちます。自分のワークフローで検証するために自分のプロンプトでテストしてください。' },
          { q: 'Llama 4や新しい70Bモデルはまた動作しますか？', a: 'はい。M5 Max 128 GBはアーキテクチャを問わず、Q4/Q5/Q8量子化のすべての70Bモデルに対応します。新しい70Bリリース（Llama 4、Qwen3など）は通常リリースから数日以内にOllamaに登場します。新しいモデル名でollama pullを実行してください。' },
          { q: 'ローカルLLMは日本の個人情報保護法に対応していますか？', a: 'はい。すべてのデータはデバイス上でローカルに処理され、外部サーバーには送信されないため、個人情報保護法の第三者提供制限（第23条）に該当しません。医療・法務・金融分野での業務利用では、ローカル処理が最も確実なコンプライアンス対策となります。' },
          { q: 'M5 MaxはAIスタートアップや個人開発者にコスト的に見合いますか？', a: 'はい。クラウドAPIに月$50〜200以上使う場合、Mac Studio M5 Max（約600,000円）は3〜12ヶ月で元が取れます。コードと知的財産が社外に出ないこと、レート制限がないこと、ネット不要なことも加味すると、多くの日本のスタートアップにとって理にかなった選択です。' },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: '関連記事',
        items: [
          '[Apple Siliconでローカルに動かすLLM：完全ガイド](/local-llms/apple-silicon-local-llm-guide-2026?lang=ja) — M1からM5 Maxの比較、ユニファイドメモリの解説',
          '[M5 Pro対M5 Max LLMベンチマーク2026](/local-llms/m5-pro-max-llm-benchmarks-2026?lang=ja) — モデルサイズ別の詳細tok/s数値',
          '[ローカルLLMに必要なユニファイドメモリ量は？](/local-llms/how-much-unified-memory-for-local-llm?lang=ja) — 16GB対36GB対64GB対128GBガイド',
          '[Apple Silicon向け最良のLLMモデル](/local-llms/best-models-apple-silicon-2026?lang=ja) — Mac構成別のモデル推奨',
          '[Mac上のMLX対Ollama対llama.cpp](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac?lang=ja) — フレームワーク速度比較とセットアップガイド',
          '[Apple Silicon対NVIDIA GPUでローカルLLM](/local-llms/apple-silicon-vs-nvidia-gpu-local-llm?lang=ja) — クロスプラットフォームハードウェア比較',
          '[LLM量子化の解説](/local-llms/llm-quantization-explained?lang=ja) — Q4/Q5/Q8/FP16の詳細',
          '[Mac Mini M5をローカルAIサーバーとして使う](/local-llms/mac-mini-m5-local-ai-server?lang=ja) — 常時起動の推論サーバー構築',
        ],
      },
    },
  },
  zh: { theme: 'Hardware & Performance', title: '', sections: {} },
}
