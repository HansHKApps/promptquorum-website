import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    theme: 'Hardware & Performance',
    title: 'Running 70B+ Models on Apple Silicon 2026: M5 Max Complete Guide',
    seoTitle: '70B Models on M5 Max 128GB: 12–20 tok/s, Matches GPT-5.6 Quality',
    intro: 'Run 70B and larger LLMs locally on Apple Silicon M5 Max (128GB). Complete setup guide with Ollama and MLX, quantization comparison (Q4/Q5/Q8), 8B vs 70B quality benchmarks, real tok/s numbers, 70B vs cloud API cost analysis, alternative 70B+ models, speed optimization, and M5 Ultra projections for 2026.',
    metaDescription: 'M5 Max 128GB runs 70B models at 12–20 tok/s. Q5 quality matches GPT-5.6 within 3%. Complete setup with Ollama/MLX, quantization guide, benchmarks.',
    twitterDescription: '70B LLMs on M5 Max 128GB: 12–20 tok/s, Q4–Q8 options, matches cloud quality within 3%, $0/month. Full setup + benchmark guide.',
    publishDate: '2026-05-15',
    dateModified: '2026-07-13',
    current_models_mentioned: ['Llama 3.3 70B', 'DeepSeek-R1-Distill-Llama-70B', 'Qwen3 72B', 'DeepSeek 67B', 'Mixtral 8x22B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'M5 Max owners and prospective buyers wanting maximum local LLM quality without cloud APIs.',
    readTime: '16 min read',
    educationalLevel: 'Advanced',
    primaryTerm: '70B models Apple Silicon',
    targetKeywords: ['70B model Mac', 'M5 Max 128GB LLM', 'run 70B locally', 'Llama 70B Apple Silicon', 'large model local inference'],
    ctaText: 'Running Llama 3.3 70B locally on M5 Max? Compare your local responses against GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro, and 22 other cloud models with PromptQuorum — validate that your $4,000 hardware investment matches cloud quality for your specific reasoning, coding, and writing tasks. All in one dispatch.',
    leadAnswerBlock: '**M5 Max 128GB runs Llama 3.3 70B at 15–20 tok/s (Q4_K_M) or 12–16 tok/s (Q5_K_M). 70B Q5 scores 86.1 on MMLU — within 3% of GPT-5.6 (88.7) — while running locally for $0/month. It is the only consumer hardware that fits 70B without complex multi-GPU setups. Setup takes under 10 minutes with Ollama.**',
    quickAnswerTop: {
      en: {
        question: 'Can I run 70B models on M5 Max 128GB?',
        answer: 'Yes — the Apple M5 Max (64 GB) runs 70B models locally via Ollama in Q4 quantization. **DeepSeek-R1-Distill-Llama-70B** and **Llama 3.3 70B** are the best choices for this hardware, running at approximately 20–30+ tokens/second.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, good quality',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, very good (recommended)',
          '70B Q8_0: 74 GB, 8–12 tok/s, lossless quality',
          'Only consumer option without multi-GPU complexity',
          'MMLU: 70B Q5 = 86.1 vs GPT-5.6 = 88.7 (3% gap)',
          'Setup: brew install ollama && ollama pull llama3.3:70b',
        ],
        updatedDate: '2026-06-19',
      },
      de: {
        question: 'Kann ich 70B-Modelle auf M5 Max 128GB ausführen?',
        answer: 'Ja. Llama 3.3 70B Q5_K_M läuft mit 12–16 tok/s. Q4_K_M mit 15–20 tok/s. Q8_0 mit 8–12 tok/s (verlustfrei). Alle passen in 128GB einheitlichem Speicher. Setup dauert 10 Minuten mit Ollama. 70B Q5 entspricht GPT-5.6-Qualität innerhalb von 3% bei Standardbenchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, gute Qualität',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, sehr gut (empfohlen)',
          '70B Q8_0: 74 GB, 8–12 tok/s, verlustfrei',
          'Einzige Consumer-Option ohne Multi-GPU-Komplexität',
          'MMLU: 70B Q5 = 86,1 vs GPT-5.6 = 88,7 (3% Lücke)',
          'Setup: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      fr: {
        question: 'Puis-je exécuter des modèles 70B sur M5 Max 128GB ?',
        answer: 'Oui. Llama 3.3 70B Q5_K_M s\'exécute à 12–16 tok/s. Q4_K_M à 15–20 tok/s. Q8_0 à 8–12 tok/s (sans perte). Tous s\'adaptent dans 128GB de mémoire unifiée. La configuration prend 10 minutes avec Ollama. 70B Q5 correspond à la qualité GPT-5.6 à 3% près selon les benchmarks standard.',
        bullets: [
          '70B Q4_K_M : 42 GB, 15–20 tok/s, bonne qualité',
          '70B Q5_K_M : 49 GB, 12–16 tok/s, très bonne (recommandé)',
          '70B Q8_0 : 74 GB, 8–12 tok/s, sans perte',
          'Seule option grand public sans complexité multi-GPU',
          'MMLU : 70B Q5 = 86,1 vs GPT-5.6 = 88,7 (écart 3%)',
          'Configuration : brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      ja: {
        question: 'M5 Max 128GBで70Bモデルを実行できますか？',
        answer: 'はい。Llama 3.3 70B Q5_K_Mは12–16 tok/sで動作します。Q4_K_Mで15–20 tok/s。Q8_0で8–12 tok/s（ロスレス）。すべて128GBの統一メモリに適合します。Ollamaでのセットアップは10分で完了。70B Q5は標準ベンチマークでGPT-5.6の3%以内の品質です。',
        bullets: [
          '70B Q4_K_M: 42 GB、15–20 tok/s、良質',
          '70B Q5_K_M: 49 GB、12–16 tok/s、非常に良い（推奨）',
          '70B Q8_0: 74 GB、8–12 tok/s、ロスレス',
          'マルチGPU複雑性のない唯一のコンシューマーオプション',
          'MMLU: 70B Q5 = 86.1 vs GPT-5.6 = 88.7（3%ギャップ）',
          'セットアップ: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      zh: {
        question: '我可以在M5 Max 128GB上运行70B模型吗？',
        answer: '可以。Llama 3.3 70B Q5_K_M以12–16 tok/s运行。Q4_K_M以15–20 tok/s运行。Q8_0以8–12 tok/s运行（无损）。所有这些都适合128GB统一内存。使用Ollama的设置耗时10分钟。70B Q5在标准基准上的质量在GPT-5.6的3%范围内。',
        bullets: [
          '70B Q4_K_M：42 GB、15–20 tok/s、质量良好',
          '70B Q5_K_M：49 GB、12–16 tok/s、非常好（推荐）',
          '70B Q8_0：74 GB、8–12 tok/s、无损',
          '唯一无需复杂多GPU的消费级选项',
          'MMLU：70B Q5 = 86.1 vs GPT-5.6 = 88.7（3%差距）',
          '设置：brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
    },
    toc: [
      { label: 'Why 70B Matters', anchor: '#why' },
      { label: 'Hardware Requirements', anchor: '#hardware' },
      { label: 'Step-by-Step Setup', anchor: '#setup' },
      { label: 'Quality: 8B vs 70B vs GPT-5.6', anchor: '#quality' },
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
        columns: ['Benchmark', 'Llama 3.3 8B', 'Llama 3.3 70B Q5', 'GPT-5.6'],
        rows: [
          { 'Benchmark': 'MMLU (general knowledge)', 'Llama 3.3 8B': '73.0', 'Llama 3.3 70B Q5': '86.1', 'GPT-5.6': '88.7' },
          { 'Benchmark': 'HumanEval (code)', 'Llama 3.3 8B': '72.6', 'Llama 3.3 70B Q5': '80.5', 'GPT-5.6': '90.2' },
          { 'Benchmark': 'GSM8K (math)', 'Llama 3.3 8B': '84.5', 'Llama 3.3 70B Q5': '95.1', 'GPT-5.6': '95.8' },
          { 'Benchmark': 'BBH (reasoning)', 'Llama 3.3 8B': '71.0', 'Llama 3.3 70B Q5': '85.3', 'GPT-5.6': '88.9' },
          { 'Benchmark': 'Average', 'Llama 3.3 8B': '75.3', 'Llama 3.3 70B Q5': '86.8', 'GPT-5.6': '90.9' },
        ],
        note: '70B Q5 closes 75% of the quality gap between 8B and GPT-5.6 — while running locally for $0/month.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'The Apple M5 Max (64 GB) runs 70B models locally via Ollama — DeepSeek-R1-Distill-Llama-70B and Llama 3.3 70B both fit comfortably with ~40 GB Q4 requirement.' },
          { type: 'plain-terms', text: '64 GB M5 Max = comfortable 70B inference. The model needs ~40 GB in Q4 quantization; that leaves headroom for the OS and Ollama overhead.' },
        ],
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
        note: 'M5 Max 128GB is the only consumer hardware that runs 70B models without complex multi-GPU setups. The Mac Studio config at $4,000 replaces $5,000–8,000 NVIDIA multi-GPU rigs. M5 Max specs: 14-core CPU, up to 128 GB unified memory, 460–614 GB/s memory bandwidth. The M5 Max with 64 GB memory runs 70B models in Q4_K_M quantization — fitting comfortably within the memory budget (~40 GB needed). Inference speed is approximately 20–30+ tokens/second depending on quantization level.',
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
        title: 'Quality Comparison: 8B vs 70B vs GPT-5.6',
        content: [
          'Prompt: "Explain why a stack overflow happens in recursive functions, then write a Python function that detects infinite recursion before it crashes."',
          'Llama 3.3 8B Q4 response (runs on any 16GB+ Mac):',
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
        title: 'Llama 3.3 70B Q5 Response (M5 Max 128GB)',
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
        note: 'Correct: decorator pattern, depth tracking, proactive detection before crash, configurable threshold. GPT-5.6 adds slightly more elegant error handling — a 3% quality gap in practice.',
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
          { 'Model': 'Llama 3.3 70B Instruct', 'Size (Q5)': '49 GB', 'Best For': 'General use, reasoning', 'tok/s on M5 Max': '12–16' },
          { 'Model': 'DeepSeek-R1-Distill-Llama-70B', 'Size (Q5)': '49 GB', 'Best For': 'Reasoning, chain-of-thought', 'tok/s on M5 Max': '12–16' },
          { 'Model': 'Qwen3 72B Instruct', 'Size (Q5)': '51 GB', 'Best For': 'Multilingual, math, code', 'tok/s on M5 Max': '11–15' },
          { 'Model': 'DeepSeek 67B', 'Size (Q5)': '47 GB', 'Best For': 'Coding excellence', 'tok/s on M5 Max': '12–16' },
          { 'Model': 'Llama 3.3 70B Coder', 'Size (Q5)': '49 GB', 'Best For': 'Pure coding tasks', 'tok/s on M5 Max': '13–17' },
          { 'Model': 'Mixtral 8x22B (MoE)', 'Size (Q4)': '88 GB', 'Best For': 'High-quality reasoning', 'tok/s on M5 Max': '18–22' },
          { 'Model': 'Cohere Command A+ 104B', 'Size (Q4)': '73 GB', 'Best For': 'RAG, 128K context', 'tok/s on M5 Max': '8–12' },
        ],
        note: 'Recommendations by use case: General reasoning → Llama 3.3 70B Q5. Chain-of-thought reasoning → DeepSeek-R1-Distill-Llama-70B (Llama 3-based distill of DeepSeek-R1; the full R1 at 671B does not fit). Code → DeepSeek 67B. Non-English → Qwen3 72B. Document Q&A → Command A+. Maximum speed → Mixtral 8x22B (MoE uses fewer active params). The M5 Max with 64 GB memory runs all Q4_K_M 70B models comfortably — ~40 GB needed, leaving headroom for OS and Ollama overhead.',
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
        columns: ['Metric', '70B Q5 Local (M5 Max)', 'GPT-5.6 API', 'Claude Sonnet 5', 'Gemini 3.5 Pro'],
        rows: [
          { 'Metric': 'Quality (MMLU)', '70B Q5 Local (M5 Max)': '86.1', 'GPT-5.6 API': '88.7', 'Claude Sonnet 5': '88.7', 'Gemini 3.5 Pro': '85.9' },
          { 'Metric': 'Speed (tok/s)', '70B Q5 Local (M5 Max)': '12–16', 'GPT-5.6 API': '50–80', 'Claude Sonnet 5': '50–80', 'Gemini 3.5 Pro': '60–100' },
          { 'Metric': 'First token latency', '70B Q5 Local (M5 Max)': '1–2 sec', 'GPT-5.6 API': '0.3–0.8 sec', 'Claude Sonnet 5': '0.4–0.9 sec', 'Gemini 3.5 Pro': '0.5–1 sec' },
          { 'Metric': 'Cost per 1M tokens', '70B Q5 Local (M5 Max)': '$0', 'GPT-5.6 API': '$2.50/$10.00', 'Claude Sonnet 5': '$3.00/$15.00', 'Gemini 3.5 Pro': '$1.25/$5.00' },
          { 'Metric': 'Cost/month (5M tokens)', '70B Q5 Local (M5 Max)': '$0', 'GPT-5.6 API': '$50–150', 'Claude Sonnet 5': '$75–200', 'Gemini 3.5 Pro': '$30–80' },
          { 'Metric': 'Privacy', '70B Q5 Local (M5 Max)': '100% local', 'GPT-5.6 API': 'Sent to OpenAI', 'Claude Sonnet 5': 'Sent to Anthropic', 'Gemini 3.5 Pro': 'Sent to Google' },
          { 'Metric': 'Internet required', '70B Q5 Local (M5 Max)': 'No', 'GPT-5.6 API': 'Yes', 'Claude Sonnet 5': 'Yes', 'Gemini 3.5 Pro': 'Yes' },
          { 'Metric': 'Rate limits', '70B Q5 Local (M5 Max)': 'None', 'GPT-5.6 API': 'Tier-based', 'Claude Sonnet 5': 'Tier-based', 'Gemini 3.5 Pro': 'Tier-based' },
          { 'Metric': 'Customization', '70B Q5 Local (M5 Max)': 'Full (fine-tune locally)', 'GPT-5.6 API': 'Limited', 'Claude Sonnet 5': 'Limited', 'Gemini 3.5 Pro': 'Limited' },
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
          { 'Model': 'Llama 3.3 70B Q5', 'M5 Max 128GB': '12–16 tok/s', 'M5 Ultra 256GB (projected)': '24–32 tok/s' },
          { 'Model': 'Llama 3.3 70B Q8', 'M5 Max 128GB': '8–12 tok/s', 'M5 Ultra 256GB (projected)': '16–24 tok/s' },
          { 'Model': 'Llama 3.3 70B FP16 (lossless)', 'M5 Max 128GB': '✗ Does not fit', 'M5 Ultra 256GB (projected)': '14–18 tok/s' },
          { 'Model': 'Qwen3 72B Q8', 'M5 Max 128GB': '8–12 tok/s', 'M5 Ultra 256GB (projected)': '16–24 tok/s' },
          { 'Model': 'Mixtral 8x22B Q5', 'M5 Max 128GB': '14–18 tok/s', 'M5 Ultra 256GB (projected)': '28–36 tok/s' },
          { 'Model': 'Llama 3.3 405B Q3', 'M5 Max 128GB': '✗ Does not fit', 'M5 Ultra 256GB (projected)': '4–6 tok/s' },
          { 'Model': 'Llama 3.3 405B Q4 (~200 GB)', 'M5 Max 128GB': '✗ Does not fit', 'M5 Ultra 256GB (projected)': '3–5 tok/s' },
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
            q: 'Is 70B local actually as good as GPT-5.6 for my specific use case?',
            a: '70B Q5 scores 86.1 on MMLU vs GPT-5.6 at 88.7 — a 3% gap on benchmarks. For complex reasoning and nuanced writing, GPT-5.6 still leads slightly. For privacy-sensitive work, heavy usage ($50+/month), or offline use, local wins automatically. Test with your own prompts to verify for your workflow.',
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
          'Running DeepSeek-R1 Locally — DeepSeek-R1-Distill-Llama-70B feasibility details, full R1 671B vs distill comparison',
          '[M5 Pro vs M5 Max LLM Benchmarks 2026](/local-llms/m5-pro-max-llm-benchmarks-2026) — detailed tok/s numbers across model sizes',
          '[How Much Unified Memory for Local LLMs?](/local-llms/how-much-unified-memory-for-local-llm) — 16GB vs 36GB vs 64GB vs 128GB guide',
          '[Best LLM Models for Apple Silicon](/local-llms/best-models-apple-silicon-2026) — model recommendations per Mac configuration',
          '[MLX vs Ollama vs llama.cpp on Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — framework speed comparison and setup guide',
          '[Apple Silicon vs NVIDIA GPU for Local LLMs](/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — cross-platform hardware comparison',
          '[LLM Quantization Explained](/local-llms/llm-quantization-explained) — Q4/Q5/Q8/FP16 deep dive',
          '[Mac Mini M5 as Local AI Server](/local-llms/mac-mini-m5-local-ai-server) — always-on inference server setup',
          '[Best Local Reasoning Model 2026: DeepSeek-R1 Distills Ranked](/local-llms/best-local-reasoning-model-deepseek-r1-2026) — 70B reasoning distill for this hardware: benchmarks, Ollama setup, and performance on M5 Max.',
          '[DeepSeek-R1 Distill VRAM Cheatsheet](/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — Exact VRAM per distill size (Q4_K_M): 70B → 42 GB — confirm your M5 Max fits before pulling.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    theme: 'Hardware & Performance',
    title: 'Ejecutar modelos 70B+ en Apple Silicon 2026: Guía completa M5 Max',
    seoTitle: 'Modelos 70B en M5 Max 128GB: 12–20 tok/s, calidad GPT-5.6',
    intro: 'Ejecuta LLMs de 70B y más en local sobre Apple Silicon M5 Max (128GB). Guía completa con Ollama y MLX, comparativa de cuantización (Q4/Q5/Q8), benchmarks de calidad 8B vs 70B, cifras reales de tok/s, análisis de costos 70B vs APIs cloud, modelos alternativos 70B+, optimización de velocidad y proyecciones M5 Ultra para 2026.',
    metaDescription: 'M5 Max 128GB ejecuta modelos 70B a 12–20 tok/s. Calidad Q5 iguala a GPT-5.6 en un 3%. Configuración completa con Ollama/MLX, guía de cuantización y benchmarks.',
    twitterDescription: 'LLMs 70B en M5 Max 128GB: 12–20 tok/s, opciones Q4–Q8, calidad cloud con 3% de diferencia, $0/mes. Guía completa de configuración + benchmarks.',
    publishDate: '2026-05-15',
    dateModified: '2026-07-13',
    current_models_mentioned: ['Llama 3.3 70B', 'Qwen3 72B', 'DeepSeek 67B', 'Mixtral 8x22B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'Propietarios de M5 Max y potenciales compradores que buscan la máxima calidad en LLMs locales sin APIs cloud.',
    readTime: '16 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'modelos 70B Apple Silicon',
    targetKeywords: ['modelo 70B Mac', 'M5 Max 128GB LLM', 'ejecutar 70B localmente', 'Llama 70B Apple Silicon', 'inferencia local modelo grande'],
    ctaText: '¿Ejecutas Llama 3.3 70B en local en tu M5 Max? Compara tus respuestas locales con GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro y otros 22 modelos cloud con PromptQuorum — verifica que tu inversión de $4,000 en hardware alcanza calidad cloud para tus tareas de razonamiento, programación y escritura. Todo en un solo envío.',
    leadAnswerBlock: '**M5 Max 128GB ejecuta Llama 3.3 70B a 15–20 tok/s (Q4_K_M) o 12–16 tok/s (Q5_K_M). 70B Q5 obtiene 86.1 en MMLU — a solo un 3% de GPT-5.6 (88.7) — mientras corre en local a $0/mes. Es el único hardware de consumo que carga modelos 70B sin configuraciones multi-GPU complejas. La configuración toma menos de 10 minutos con Ollama.**',
    quickAnswerTop: {
      en: {
        question: 'Can I run 70B models on M5 Max 128GB?',
        answer: 'Yes. Llama 3.3 70B Q5_K_M runs at 12–16 tok/s. Q4_K_M at 15–20 tok/s. Q8_0 at 8–12 tok/s (lossless quality). All fit in 128GB unified memory. Setup is 10 minutes with Ollama. 70B Q5 matches GPT-5.6 quality within 3% on standard benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, good quality',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, very good (recommended)',
          '70B Q8_0: 74 GB, 8–12 tok/s, lossless quality',
          'Only consumer option without multi-GPU complexity',
          'MMLU: 70B Q5 = 86.1 vs GPT-5.6 = 88.7 (3% gap)',
          'Setup: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      de: {
        question: 'Kann ich 70B-Modelle auf M5 Max 128GB ausführen?',
        answer: 'Ja. Llama 3.3 70B Q5_K_M läuft mit 12–16 tok/s. Q4_K_M mit 15–20 tok/s. Q8_0 mit 8–12 tok/s (verlustfrei). Alle passen in 128GB einheitlichem Speicher. Setup dauert 10 Minuten mit Ollama. 70B Q5 entspricht GPT-5.6-Qualität innerhalb von 3% bei Standardbenchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, gute Qualität',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, sehr gut (empfohlen)',
          '70B Q8_0: 74 GB, 8–12 tok/s, verlustfrei',
          'Einzige Consumer-Option ohne Multi-GPU-Komplexität',
          'MMLU: 70B Q5 = 86,1 vs GPT-5.6 = 88,7 (3% Lücke)',
          'Setup: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-06-19' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-06-19' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-06-19' },
    },
    toc: [
      { label: 'Por qué importa el 70B', anchor: '#why' },
      { label: 'Requisitos de hardware', anchor: '#hardware' },
      { label: 'Configuración paso a paso', anchor: '#setup' },
      { label: 'Calidad: 8B vs 70B vs GPT-5.6', anchor: '#quality' },
      { label: 'Cuantización en profundidad', anchor: '#quantization' },
      { label: 'Modelos alternativos 70B+', anchor: '#alternatives' },
      { label: '70B local vs APIs cloud', anchor: '#vs-cloud' },
      { label: 'Casos de uso prácticos', anchor: '#use-cases' },
      { label: 'Optimización de velocidad', anchor: '#speed-opts' },
      { label: 'Vista previa M5 Ultra', anchor: '#m5ultra' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Artículos relacionados', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Por qué importa el 70B: El salto de calidad desde 8B',
        content: [
          'El salto de 8B a 70B parámetros es el umbral de calidad más significativo en IA local. Puntuaciones de benchmarks del sector:',
        ],
        tableFormat: true,
        columns: ['Benchmark', 'Llama 3.3 8B', 'Llama 3.3 70B Q5', 'GPT-5.6'],
        rows: [
          { 'Benchmark': 'MMLU (conocimiento general)', 'Llama 3.3 8B': '73.0', 'Llama 3.3 70B Q5': '86.1', 'GPT-5.6': '88.7' },
          { 'Benchmark': 'HumanEval (código)', 'Llama 3.3 8B': '72.6', 'Llama 3.3 70B Q5': '80.5', 'GPT-5.6': '90.2' },
          { 'Benchmark': 'GSM8K (matemáticas)', 'Llama 3.3 8B': '84.5', 'Llama 3.3 70B Q5': '95.1', 'GPT-5.6': '95.8' },
          { 'Benchmark': 'BBH (razonamiento)', 'Llama 3.3 8B': '71.0', 'Llama 3.3 70B Q5': '85.3', 'GPT-5.6': '88.9' },
          { 'Benchmark': 'Promedio', 'Llama 3.3 8B': '75.3', 'Llama 3.3 70B Q5': '86.8', 'GPT-5.6': '90.9' },
        ],
        note: '70B Q5 cierra el 75% de la brecha de calidad entre 8B y GPT-5.6 — mientras corre en local a $0/mes.',
      },
      hardware: {
        id: 'hardware',
        title: 'Qué hardware ejecuta modelos 70B',
        tableFormat: true,
        columns: ['Hardware', 'Cuantización', 'Tamaño del modelo', 'tok/s', 'Calidad', '¿Cabe?'],
        rows: [
          { 'Hardware': 'M3 Max 96GB', 'Cuantización': 'Q4_K_M', 'Tamaño del modelo': '42 GB', 'tok/s': '9–13', 'Calidad': 'Buena', '¿Cabe?': '✓ Sí' },
          { 'Hardware': 'M3 Max 128GB', 'Cuantización': 'Q5_K_M', 'Tamaño del modelo': '49 GB', 'tok/s': '8–12', 'Calidad': 'Muy buena', '¿Cabe?': '✓ Sí' },
          { 'Hardware': 'M4 Max 128GB', 'Cuantización': 'Q5_K_M', 'Tamaño del modelo': '49 GB', 'tok/s': '10–14', 'Calidad': 'Muy buena', '¿Cabe?': '✓ Sí' },
          { 'Hardware': 'M5 Max 128GB', 'Cuantización': 'Q4_K_M', 'Tamaño del modelo': '42 GB', 'tok/s': '15–20', 'Calidad': 'Buena', '¿Cabe?': '✓ Sí' },
          { 'Hardware': 'M5 Max 128GB', 'Cuantización': 'Q5_K_M', 'Tamaño del modelo': '49 GB', 'tok/s': '12–16', 'Calidad': 'Muy buena', '¿Cabe?': '✓ Sí' },
          { 'Hardware': 'M5 Max 128GB', 'Cuantización': 'Q8_0', 'Tamaño del modelo': '74 GB', 'tok/s': '8–12', 'Calidad': 'Sin pérdida', '¿Cabe?': '✓ Sí' },
          { 'Hardware': 'M5 Ultra 256GB (proyectado)', 'Cuantización': 'FP16', 'Tamaño del modelo': '140 GB', 'tok/s': '14–18', 'Calidad': 'Perfecto', '¿Cabe?': '✓ Sí' },
          { 'Hardware': 'RTX 4090 24GB', 'Cuantización': 'Any', 'Tamaño del modelo': '42 GB+', 'tok/s': '—', 'Calidad': '—', '¿Cabe?': '✗ OOM' },
          { 'Hardware': 'Dual RTX 3090 48GB', 'Cuantización': 'Q4_K_M', 'Tamaño del modelo': '42 GB', 'tok/s': '12–15', 'Calidad': 'Buena', '¿Cabe?': '✓ Sí (complejo)' },
          { 'Hardware': 'Dual RTX 4090 48GB', 'Cuantización': 'Q5_K_M', 'Tamaño del modelo': '49 GB', 'tok/s': '18–25', 'Calidad': 'Muy buena', '¿Cabe?': '✓ Sí ($5,000+)' },
          { 'Hardware': '4× RTX 3090 96GB', 'Cuantización': 'Q8_0', 'Tamaño del modelo': '74 GB', 'tok/s': '12–16', 'Calidad': 'Sin pérdida', '¿Cabe?': '✓ Sí (caro)' },
        ],
        note: 'M5 Max 128GB es el único hardware de consumo que ejecuta modelos 70B sin configuraciones multi-GPU complejas. La configuración Mac Studio de $4,000 reemplaza rigs multi-GPU NVIDIA de $5,000–8,000.',
      },
      setupInstall: {
        id: 'setup',
        title: 'Paso a paso: Ejecutar 70B en M5 Max 128GB',
        content: [
          'Paso 1: Verifica tu hardware. Paso 2: Instala y configura Ollama.',
        ],
        codeBlock: `# Paso 1: Verifica la memoria unificada (debe mostrar 128 GB)
system_profiler SPHardwareDataType | grep Memory
# → Memory: 128 GB

# Paso 2: Instala Ollama
brew install ollama
brew services start ollama

# Paso 3: Configura para 70B (mantén el modelo cargado, evita el calentamiento de 60 seg)
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
echo 'export OLLAMA_NUM_PARALLEL=1' >> ~/.zshrc
source ~/.zshrc
brew services restart ollama`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: 'Paso 3: Descargar el modelo 70B',
        content: [
          'Tiempo de descarga a 100 Mbps: 45–90 minutos. A 1 Gbps: 5–10 minutos.',
        ],
        codeBlock: `# Recomendado: Q5_K_M — mejor equilibrio calidad/velocidad (49 GB de descarga)
ollama pull llama3.1:70b-instruct-q5_K_M

# Alternativa: Q4 — máxima velocidad, 42 GB de descarga
ollama pull llama3.1:70b-instruct-q4_K_M

# Alternativa: Q8 — calidad sin pérdida, 74 GB de descarga
ollama pull llama3.1:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: 'Pasos 4–6: Primera ejecución, verificar Metal, comprobar memoria',
        content: [
          'La primera solicitud tarda 30–60 segundos en cargar 49 GB en la memoria unificada. Las solicitudes posteriores son inmediatas.',
        ],
        codeBlock: `# Paso 4: Primera ejecución (espera 30-60 seg para la carga del modelo)
ollama run llama3.1:70b-instruct-q5_K_M "Escribe un ensayo de 200 palabras sobre la IA local"

# Paso 5: Verifica que la aceleración Metal GPU está activa
ollama run llama3.1:70b-instruct-q5_K_M --verbose
# Esperado: ggml_metal_init: found device: Apple M5 Max

# Paso 6: Acceso por API para tus aplicaciones
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.1:70b-instruct-q5_K_M",
  "messages": [{"role": "user", "content": "Explica la computación cuántica"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: 'Comparativa de calidad: 8B vs 70B vs GPT-5.6',
        content: [
          'Prompt: "Explica por qué ocurre un desbordamiento de pila en funciones recursivas, luego escribe una función Python que detecte la recursión infinita antes de que el programa falle."',
          'Respuesta de Llama 3.3 8B Q4 (funciona en cualquier Mac con 16GB+):',
        ],
        blockquote: 'Un desbordamiento de pila ocurre cuando demasiadas llamadas a funciones superan la memoria.',
        codeBlock: `def detect_recursion(func):
    count = 0
    try:
        func()
    except RecursionError:
        count += 1
    return count > 0`,
        codeLanguage: 'python',
        note: 'Carece del punto clave: no usa sys.setrecursionlimit, la lógica de detección no es correcta.',
      },
      quality70B: {
        id: 'quality-70b',
        title: 'Respuesta de Llama 3.3 70B Q5 (M5 Max 128GB)',
        blockquote: 'El desbordamiento de pila en la recursión ocurre cuando la pila de llamadas supera el límite impuesto por el SO (típicamente 1MB–8MB). Cada llamada recursiva añade un frame de pila con variables locales y dirección de retorno. El límite predeterminado de Python es 1000 llamadas.',
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
        note: 'Correcto: patrón decorador, seguimiento de profundidad, detección proactiva antes del fallo, umbral configurable. GPT-5.6 añade un manejo de errores ligeramente más elegante — una diferencia de calidad del 3% en la práctica.',
      },
      quantization: {
        id: 'quantization',
        title: 'Cuantización en profundidad para modelos 70B',
        items: [
          'La diferencia de calidad entre Q4 y Q5 es MAYOR en 70B que en 8B. Q4: pérdida de calidad ~3–5%. Q5: pérdida ~0.5–1% vs FP16.',
          'En modelos 8B, Q4 vs Q8 apenas se nota. En 70B, Q4 vs Q8 es significativo para razonamiento complejo y código.',
          'Recomendación: Q5_K_M ofrece el mejor equilibrio. Si la velocidad es crítica (chat, autocompletado), usa Q4. Si la calidad de salida es crítica (derecho, revisión de código), usa Q8.',
          'Memoria: Q4 = 42 GB, Q5 = 49 GB, Q8 = 74 GB. Todas caben en M5 Max 128GB. Deja margen para el SO (~8 GB) y las apps.',
          'tok/s prácticos: Q4 = 15–20, Q5 = 12–16, Q8 = 8–12. A 12 tok/s, una respuesta de 500 palabras tarda ~40 segundos.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Modelos alternativos 70B+ para Apple Silicon',
        tableFormat: true,
        columns: ['Modelo', 'Tamaño (Q5)', 'Ideal para', 'tok/s en M5 Max'],
        rows: [
          { 'Modelo': 'Llama 3.3 70B Instruct', 'Tamaño (Q5)': '49 GB', 'Ideal para': 'Uso general, razonamiento', 'tok/s en M5 Max': '12–16' },
          { 'Modelo': 'Qwen3 72B Instruct', 'Tamaño (Q5)': '51 GB', 'Ideal para': 'Multilingüe, matemáticas, código', 'tok/s en M5 Max': '11–15' },
          { 'Modelo': 'DeepSeek 67B', 'Tamaño (Q5)': '47 GB', 'Ideal para': 'Excelencia en programación', 'tok/s en M5 Max': '12–16' },
          { 'Modelo': 'Llama 3.3 70B Coder', 'Tamaño (Q5)': '49 GB', 'Ideal para': 'Tareas de código puro', 'tok/s en M5 Max': '13–17' },
          { 'Modelo': 'Mixtral 8x22B (MoE)', 'Tamaño (Q4)': '88 GB', 'Ideal para': 'Razonamiento de alta calidad', 'tok/s en M5 Max': '18–22' },
          { 'Modelo': 'Cohere Command A+ 104B', 'Tamaño (Q4)': '73 GB', 'Ideal para': 'RAG, contexto 128K', 'tok/s en M5 Max': '8–12' },
        ],
        note: 'Recomendaciones por caso de uso: Razonamiento general → Llama 3.3 70B Q5. Código → DeepSeek 67B. No inglés → Qwen3 72B. Preguntas sobre documentos → Command A+. Máxima velocidad → Mixtral 8x22B (MoE usa menos parámetros activos).',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: 'Descargar modelos alternativos',
        codeBlock: `ollama pull qwen2.5:72b-instruct-q5_K_M
ollama pull deepseek-coder:67b-q5_K_M
ollama pull mixtral:8x22b`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '70B local vs APIs cloud — Comparativa detallada',
        tableFormat: true,
        columns: ['Métrica', '70B Q5 local (M5 Max)', 'GPT-5.6 API', 'Claude Sonnet 5', 'Gemini 3.5 Pro'],
        rows: [
          { 'Métrica': 'Calidad (MMLU)', '70B Q5 local (M5 Max)': '86.1', 'GPT-5.6 API': '88.7', 'Claude Sonnet 5': '88.7', 'Gemini 3.5 Pro': '85.9' },
          { 'Métrica': 'Velocidad (tok/s)', '70B Q5 local (M5 Max)': '12–16', 'GPT-5.6 API': '50–80', 'Claude Sonnet 5': '50–80', 'Gemini 3.5 Pro': '60–100' },
          { 'Métrica': 'Latencia primer token', '70B Q5 local (M5 Max)': '1–2 seg', 'GPT-5.6 API': '0.3–0.8 seg', 'Claude Sonnet 5': '0.4–0.9 seg', 'Gemini 3.5 Pro': '0.5–1 seg' },
          { 'Métrica': 'Costo por 1M tokens', '70B Q5 local (M5 Max)': '$0', 'GPT-5.6 API': '$2.50/$10.00', 'Claude Sonnet 5': '$3.00/$15.00', 'Gemini 3.5 Pro': '$1.25/$5.00' },
          { 'Métrica': 'Costo/mes (5M tokens)', '70B Q5 local (M5 Max)': '$0', 'GPT-5.6 API': '$50–150', 'Claude Sonnet 5': '$75–200', 'Gemini 3.5 Pro': '$30–80' },
          { 'Métrica': 'Privacidad', '70B Q5 local (M5 Max)': '100% local', 'GPT-5.6 API': 'Enviado a OpenAI', 'Claude Sonnet 5': 'Enviado a Anthropic', 'Gemini 3.5 Pro': 'Enviado a Google' },
          { 'Métrica': 'Requiere internet', '70B Q5 local (M5 Max)': 'No', 'GPT-5.6 API': 'Sí', 'Claude Sonnet 5': 'Sí', 'Gemini 3.5 Pro': 'Sí' },
          { 'Métrica': 'Límites de uso', '70B Q5 local (M5 Max)': 'Ninguno', 'GPT-5.6 API': 'Por nivel', 'Claude Sonnet 5': 'Por nivel', 'Gemini 3.5 Pro': 'Por nivel' },
          { 'Métrica': 'Personalización', '70B Q5 local (M5 Max)': 'Total (fine-tuning local)', 'GPT-5.6 API': 'Limitada', 'Claude Sonnet 5': 'Limitada', 'Gemini 3.5 Pro': 'Limitada' },
        ],
        note: '70B Q5 local iguala la calidad cloud con un 3% de diferencia en MMLU. Con un costo de hardware de $4,000 y un ahorro mensual de $50–150 en cloud, el período de recuperación es de 27–80 meses según el uso. El trabajo sensible a la privacidad (médico, legal, financiero) no tiene alternativa cloud.',
      },
      useCases: {
        id: 'use-cases',
        title: 'Casos de uso prácticos para inferencia 70B local',
        numberedItems: [
          { title: 'Análisis de documentos confidenciales', whyItMatters: 'Contratos legales, historias clínicas, estados financieros, due diligence M&A. Las APIs cloud no son aceptables bajo HIPAA, GDPR o NDA. 70B Q5 en M5 Max ofrece análisis de calidad cloud con cero exfiltración de datos.' },
          { title: 'Asistencia de programación en alto volumen', whyItMatters: 'Desarrollador independiente usando Copilot 8h/día: ~$10/mes. Equipo de 10 personas usando 70B Coder local: $0/mes. El código nunca sale de la red de la empresa. M5 Max como servidor de inferencia compartido se amortiza en 3 meses para un equipo de 10 personas.' },
          { title: 'Generación de contenido extenso', whyItMatters: 'Posts de blog de 5,000 palabras, documentación técnica. 70B produce textos largos notablemente mejores que 8B. En local: sin límites de tokens, sin límites de uso. Genera 50,000 palabras/día a $0 vs $50–100 en costos de API.' },
          { title: 'Uso académico e investigación', whyItMatters: 'Procesa miles de artículos para revisión bibliográfica, genera hipótesis en múltiples dominios. Se requiere la calidad de razonamiento del 70B. Los costos cloud son prohibitivos para presupuestos de estudiantes y postdoctorados.' },
          { title: 'IA personal enfocada en privacidad', whyItMatters: 'Análisis de diarios personales, planificación financiera familiar, reflexión sobre salud con datos privados. Reemplaza ChatGPT Plus para todo un hogar. Cero datos enviados a terceros.' },
          { title: 'Flujos de trabajo críticos offline', whyItMatters: 'Periodistas en regiones restrictivas, profesionales médicos en zonas remotas, viajes sin internet confiable, instalaciones seguras sin acceso a red externa.' },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: 'Optimización de velocidad: MLX vs Ollama',
        content: [
          'MLX es el framework ML nativo de Apple y corre un 15–25% más rápido que Ollama con el mismo modelo. M5 Max con 70B Q5: Ollama = 12–16 tok/s, MLX = 18–22 tok/s.',
        ],
        codeBlock: `from mlx_lm import load, generate

# Cargar modelo 70B Q5 (versión convertida a MLX desde Hugging Face)
model, tokenizer = load("mlx-community/Llama-3.1-70B-Instruct-Q5")

# Generación en streaming — el usuario ve la primera palabra en 1-2 seg
from mlx_lm import stream_generate
for chunk in stream_generate(model, tokenizer, "Explica la computación cuántica", max_tokens=500):
    print(chunk, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: 'Consejos adicionales de optimización de velocidad',
        items: [
          'Mantén el modelo caliente: establece OLLAMA_KEEP_ALIVE=1h (o 24h para Mac Mini siempre encendido) para evitar la recarga de 30–60 segundos en cada solicitud.',
          'Usa streaming: el usuario ve el primer token en 1–2 segundos en lugar de esperar 25–40 segundos por la respuesta completa.',
          'Reduce max_tokens: si necesitas respuestas de 200 palabras, establece max_tokens=200. A 14 tok/s: 200 tokens = 14 seg vs 36 seg para 500 tokens.',
          'Compensación de velocidad Q4 vs Q5: Q4 = 15–20 tok/s (25% más rápido que Q5). La diferencia de calidad es ~2–3% en la mayoría de tareas. Para chat usa Q4, para razonamiento crítico usa Q5.',
          'Evita ejecutar otras apps intensivas en GPU durante la inferencia — el Historial de GPU del Monitor de Actividad muestra si otros procesos compiten por el ancho de banda Metal.',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'Vista previa M5 Ultra: El siguiente nivel de capacidad (esperado a mediados de 2026)',
        content: [
          'Basado en el patrón Ultra previo de Apple (2× especificaciones Max), proyecciones del M5 Ultra: 256 GB de memoria unificada, ~1,200 GB/s de ancho de banda, ~80 núcleos GPU. Esperado solo en Mac Studio Ultra.',
        ],
        tableFormat: true,
        columns: ['Modelo', 'M5 Max 128GB', 'M5 Ultra 256GB (proyectado)'],
        rows: [
          { 'Modelo': 'Llama 3.3 70B Q5', 'M5 Max 128GB': '12–16 tok/s', 'M5 Ultra 256GB (proyectado)': '24–32 tok/s' },
          { 'Modelo': 'Llama 3.3 70B Q8', 'M5 Max 128GB': '8–12 tok/s', 'M5 Ultra 256GB (proyectado)': '16–24 tok/s' },
          { 'Modelo': 'Llama 3.3 70B FP16 (sin pérdida)', 'M5 Max 128GB': '✗ No cabe', 'M5 Ultra 256GB (proyectado)': '14–18 tok/s' },
          { 'Modelo': 'Qwen3 72B Q8', 'M5 Max 128GB': '8–12 tok/s', 'M5 Ultra 256GB (proyectado)': '16–24 tok/s' },
          { 'Modelo': 'Mixtral 8x22B Q5', 'M5 Max 128GB': '14–18 tok/s', 'M5 Ultra 256GB (proyectado)': '28–36 tok/s' },
          { 'Modelo': 'Llama 3.3 405B Q3', 'M5 Max 128GB': '✗ No cabe', 'M5 Ultra 256GB (proyectado)': '4–6 tok/s' },
          { 'Modelo': 'Llama 3.3 405B Q4 (~200 GB)', 'M5 Max 128GB': '✗ No cabe', 'M5 Ultra 256GB (proyectado)': '3–5 tok/s' },
        ],
        note: 'M5 Ultra desbloquea: (1) 70B FP16 sin pérdida — primero en hardware de consumo. (2) Modelos de 405B parámetros. (3) Dos modelos 70B simultáneos. Precio proyectado: $5,500–7,000 (Mac Studio Ultra). Cuándo esperar: si necesitas modelos 405B, 70B FP16, o ya tienes M3/M4 Max.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es 70B Q4 suficientemente bueno para la mayoría de tareas?',
            a: 'Sí. Q4 es la cuantización estándar del sector. La pérdida de calidad de ~3–5% vs Q5 es imperceptible para la mayoría de tareas de chat, escritura y uso general. Usa Q5 o Q8 solo cuando la calidad de salida sea crítica (análisis legal, revisión de código, uso médico).',
          },
          {
            q: '¿Puedo ejecutar 70B Q5 y otro modelo simultáneamente?',
            a: 'Sí, con un modelo más pequeño. 70B Q5 = 49 GB. 128 GB menos 8 GB de overhead del SO = 120 GB. Puedes cargar 70B Q5 (49 GB) + un modelo 7–8B (5 GB) = 54 GB en total — bien dentro del presupuesto. Dos modelos 70B simultáneos requieren M5 Ultra 256 GB.',
          },
          {
            q: '¿Cuándo debería esperar el M5 Ultra en lugar de comprar el M5 Max ahora?',
            a: 'Espera el M5 Ultra si: (1) necesitas 70B FP16 (calidad sin pérdida), (2) necesitas modelos 405B, o (3) ya tienes M3 Max o M4 Max (salta el M5 Max). Compra el M5 Max ahora si: necesitas capacidad 70B hoy y tu presupuesto es inferior a $5,000.',
          },
          {
            q: '¿Cuánto más rápido será 70B en M5 Ultra vs M5 Max?',
            a: 'Aproximadamente el doble de rápido, basado en el doble de ancho de banda de memoria (~1,200 GB/s vs 614 GB/s). M5 Max ejecuta 70B Q5 a 12–16 tok/s; M5 Ultra se proyecta en 24–32 tok/s. M5 Ultra también podrá ejecutar 70B FP16 (calidad sin pérdida), que M5 Max no puede cargar.',
          },
          {
            q: '¿Puedo ejecutar dos modelos 70B al mismo tiempo en M5 Max 128GB?',
            a: 'No, no dos modelos 70B completos. Dos 70B Q4 = 84 GB más overhead del SO = ~95 GB, lo que es ajustado en 128 GB. M5 Ultra 256 GB maneja fácilmente dos modelos 70B simultáneos o uno 70B + uno 34B.',
          },
          {
            q: '¿Cuánto espacio en disco necesito para modelos 70B?',
            a: 'Cada modelo 70B ocupa 42 GB (Q4), 49 GB (Q5) o 74 GB (Q8) en disco. Si guardas 3 cuantizaciones de un modelo para comparar: 165 GB. Para trabajo serio con 70B y múltiples modelos, opta por 1 TB o 2 TB SSD en Mac Studio.',
          },
          {
            q: '¿El 70B local es realmente tan bueno como GPT-5.6 para mi caso de uso específico?',
            a: '70B Q5 obtiene 86.1 en MMLU vs GPT-5.6 en 88.7 — una brecha del 3% en benchmarks. Para razonamiento complejo y escritura matizada, GPT-5.6 todavía lidera ligeramente. Para trabajo sensible a la privacidad, uso intensivo ($50+/mes) o uso offline, el local gana automáticamente. Prueba con tus propios prompts para verificar en tu flujo de trabajo.',
          },
          {
            q: '¿Funcionarán Llama 4 u otros nuevos modelos 70B en M5 Max?',
            a: 'Sí. M5 Max 128 GB carga cualquier modelo 70B en cuantización Q4/Q5/Q8 independientemente de la arquitectura. Los nuevos lanzamientos 70B (Llama 4, Qwen3, etc.) suelen aparecer en Ollama en días tras su lanzamiento. Ejecuta ollama pull con el nuevo nombre de modelo.',
          },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Artículos relacionados',
        items: [
          '[Apple Silicon para LLMs locales: Guía completa](/es/local-llms/apple-silicon-local-llm-guide-2026) — Comparativa M1 a M5 Max, memoria unificada explicada',
          '[Benchmarks LLM M5 Pro vs M5 Max 2026](/es/local-llms/m5-pro-max-llm-benchmarks-2026) — Cifras detalladas de tok/s por tamaño de modelo',
          '[¿Cuánta memoria unificada para LLMs locales?](/es/local-llms/how-much-unified-memory-for-local-llm) — Guía 16GB vs 36GB vs 64GB vs 128GB',
          '[Mejores modelos LLM para Apple Silicon](/es/local-llms/best-models-apple-silicon-2026) — Recomendaciones de modelos por configuración Mac',
          '[MLX vs Ollama vs llama.cpp en Mac](/es/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — Comparativa de velocidad de frameworks y guía de configuración',
          '[Apple Silicon vs GPU NVIDIA para LLMs locales](/es/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Comparativa de hardware multiplataforma',
          '[Cuantización de LLMs explicada](/es/local-llms/llm-quantization-explained) — Análisis profundo Q4/Q5/Q8/FP16',
          '[Mac Mini M5 como servidor de IA local](/es/local-llms/mac-mini-m5-local-ai-server) — Configuración de servidor de inferencia siempre activo',
          '[Mejor modelo de razonamiento local 2026: DeepSeek-R1 Distills clasificados](/es/local-llms/best-local-reasoning-model-deepseek-r1-2026) — Distill de razonamiento 70B para este hardware: benchmarks, configuración Ollama y rendimiento en M5 Max.',
          '[Chuleta de VRAM para DeepSeek-R1 Distill](/es/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — VRAM exacta por tamaño de distill (Q4_K_M): 70B → 42 GB — confirma que tu M5 Max es compatible.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ejecutar modelos 70B en Apple Silicon 2026: Guía M5 Max',
      description: 'M5 Max 128 GB ejecuta modelos 70B a 12–20 tok/s. Calidad comparable a GPT-5.6 en local.',
      url: 'https://www.promptquorum.com/es/local-llms/running-70b-models-apple-silicon-m5-max',
      inLanguage: 'es',
      datePublished: '2026-05-15',
      dateModified: '2026-07-13',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    theme: 'Hardware & Performance',
    title: 'تشغيل نماذج ⁨70B⁩+ على ⁨Apple Silicon 2026⁩: دليل ⁨M5 Max⁩ الكامل',
    seoTitle: 'نماذج ⁨70B⁩ على ⁨M5 Max 128GB⁩: ⁨12⁩–⁨20 tok⁩/ث، جودة ⁨GPT⁩',
    intro: 'شغّل نماذج LLM بحجم 70B وأكثر محليًا على Apple Silicon M5 Max (128GB). دليل كامل مع Ollama وMLX، ومقارنة التكميم (Q4/Q5/Q8)، ومعايير جودة 8B مقابل 70B، وأرقام token/ث الفعلية، وتحليل تكلفة 70B مقابل واجهات API السحابية، ونماذج 70B+ بديلة، وتحسين السرعة، وتوقعات M5 Ultra لعام 2026.',
    metaDescription: 'يشغّل ⁨M5 Max 128GB⁩ نماذج ⁨70B⁩ بـ ⁨12⁩–⁨20 token⁩/ث. جودة ⁨Q5⁩ تساوي ⁨GPT-5.6⁩ ضمن ⁨3%⁩. إعداد كامل مع ⁨Ollama/MLX⁩، ودليل تكميم، ومعايير.',
    twitterDescription: 'نماذج ⁨LLM 70B⁩ على ⁨M5 Max 128GB⁩: ⁨12⁩–⁨20 token⁩/ث، خيارات ⁨Q4⁩–⁨Q8⁩، جودة سحابية بفارق ⁨3%⁩، $⁨0⁩/شهر. دليل إعداد كامل + معايير.',
    publishDate: '2026-05-15',
    dateModified: '2026-07-13',
    current_models_mentioned: ['Llama 3.3 70B', 'Qwen3 72B', 'DeepSeek 67B', 'Mixtral 8x22B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'مالكو M5 Max والمشترون المحتملون الباحثون عن أقصى جودة في نماذج LLM المحلية دون واجهات API سحابية.',
    readTime: '16 دقيقة قراءة',
    educationalLevel: 'Advanced',
    primaryTerm: 'نماذج 70B على Apple Silicon',
    targetKeywords: ['نموذج 70B على Mac', 'M5 Max 128GB LLM', 'تشغيل 70B محليًا', 'Llama 70B على Apple Silicon', 'استدلال محلي لنموذج كبير'],
    ctaText: 'هل تشغّل Llama 3.3 70B محليًا على M5 Max لديك؟ قارن استجاباتك المحلية بـ GPT-5.6 وClaude Sonnet 5 وGemini 3.5 Pro و22 نموذجًا سحابيًا آخر مع PromptQuorum — تحقق من أن استثمارك في الأجهزة البالغ $4,000 يبلغ جودة سحابية لمهامك في الاستدلال والبرمجة والكتابة. كل ذلك في إرسال واحد.',
    leadAnswerBlock: '**يشغّل M5 Max 128GB نموذج Llama 3.3 70B بـ 15–20 token/ث (Q4_K_M) أو 12–16 token/ث (Q5_K_M). يحصل 70B Q5 على 86.1 في MMLU — بفارق 3% فقط عن GPT-5.6 (88.7) — بينما يعمل محليًا بـ $0/شهر. وهو الجهاز الاستهلاكي الوحيد الذي يحمّل نماذج 70B دون إعدادات متعددة بطاقات الرسوم المعقدة. يستغرق الإعداد أقل من 10 دقائق مع Ollama.**',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكنني تشغيل نماذج 70B على M5 Max 128GB؟',
        answer: 'نعم. يعمل Llama 3.3 70B Q5_K_M بـ 12–16 token/ث. وQ4_K_M بـ 15–20 token/ث. وQ8_0 بـ 8–12 token/ث (جودة بلا فقدان). تتسع جميعها في 128GB من الذاكرة الموحدة. الإعداد 10 دقائق مع Ollama. يساوي 70B Q5 جودة GPT-5.6 ضمن 3% في المعايير القياسية.',
        bullets: [
          '70B Q4_K_M: 42 GB، 15–20 token/ث، جودة جيدة',
          '70B Q5_K_M: 49 GB، 12–16 token/ث، جيد جدًا (موصى به)',
          '70B Q8_0: 74 GB، 8–12 token/ث، جودة بلا فقدان',
          'الخيار الاستهلاكي الوحيد دون تعقيد بطاقات الرسوم المتعددة',
          'MMLU: 70B Q5 = 86.1 مقابل GPT-5.6 = 88.7 (فجوة 3%)',
          'الإعداد: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
    },
    toc: [
      { label: 'لماذا يهم 70B', anchor: '#why' },
      { label: 'متطلبات الأجهزة', anchor: '#hardware' },
      { label: 'الإعداد خطوة بخطوة', anchor: '#setup' },
      { label: 'الجودة: 8B مقابل 70B مقابل GPT-5.6', anchor: '#quality' },
      { label: 'التكميم بعمق', anchor: '#quantization' },
      { label: 'نماذج 70B+ بديلة', anchor: '#alternatives' },
      { label: '70B محلي مقابل واجهات API السحابية', anchor: '#vs-cloud' },
      { label: 'حالات استخدام عملية', anchor: '#use-cases' },
      { label: 'تحسين السرعة', anchor: '#speed-opts' },
      { label: 'معاينة M5 Ultra', anchor: '#m5ultra' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'مقالات ذات صلة', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'لماذا يهم 70B: القفزة النوعية من 8B',
        content: [
          'القفزة من 8B إلى 70B معامل هي عتبة الجودة الأكثر أهمية في الذكاء الاصطناعي المحلي. درجات معايير القطاع:',
        ],
        tableFormat: true,
        columns: ['Benchmark', 'Llama 3.3 8B', 'Llama 3.3 70B Q5', 'GPT-5.6'],
        rows: [
          { 'Benchmark': 'MMLU (معرفة عامة)', 'Llama 3.3 8B': '73.0', 'Llama 3.3 70B Q5': '86.1', 'GPT-5.6': '88.7' },
          { 'Benchmark': 'HumanEval (كود)', 'Llama 3.3 8B': '72.6', 'Llama 3.3 70B Q5': '80.5', 'GPT-5.6': '90.2' },
          { 'Benchmark': 'GSM8K (رياضيات)', 'Llama 3.3 8B': '84.5', 'Llama 3.3 70B Q5': '95.1', 'GPT-5.6': '95.8' },
          { 'Benchmark': 'BBH (استدلال)', 'Llama 3.3 8B': '71.0', 'Llama 3.3 70B Q5': '85.3', 'GPT-5.6': '88.9' },
          { 'Benchmark': 'المتوسط', 'Llama 3.3 8B': '75.3', 'Llama 3.3 70B Q5': '86.8', 'GPT-5.6': '90.9' },
        ],
        note: 'يغلق 70B Q5 نسبة 75% من فجوة الجودة بين 8B وGPT-5.6 — بينما يعمل محليًا بـ $0/شهر.',
      },
      hardware: {
        id: 'hardware',
        title: 'ما الأجهزة التي تشغّل نماذج 70B',
        tableFormat: true,
        columns: ['Hardware', 'Cuantización', 'Tamaño del modelo', 'tok/s', 'Calidad', '¿Cabe?'],
        rows: [
          { 'Hardware': 'M3 Max 96GB', 'Cuantización': 'Q4_K_M', 'Tamaño del modelo': '42 GB', 'tok/s': '9–13', 'Calidad': 'جيدة', '¿Cabe?': '✓ نعم' },
          { 'Hardware': 'M3 Max 128GB', 'Cuantización': 'Q5_K_M', 'Tamaño del modelo': '49 GB', 'tok/s': '8–12', 'Calidad': 'جيدة جدًا', '¿Cabe?': '✓ نعم' },
          { 'Hardware': 'M4 Max 128GB', 'Cuantización': 'Q5_K_M', 'Tamaño del modelo': '49 GB', 'tok/s': '10–14', 'Calidad': 'جيدة جدًا', '¿Cabe?': '✓ نعم' },
          { 'Hardware': 'M5 Max 128GB', 'Cuantización': 'Q4_K_M', 'Tamaño del modelo': '42 GB', 'tok/s': '15–20', 'Calidad': 'جيدة', '¿Cabe?': '✓ نعم' },
          { 'Hardware': 'M5 Max 128GB', 'Cuantización': 'Q5_K_M', 'Tamaño del modelo': '49 GB', 'tok/s': '12–16', 'Calidad': 'جيدة جدًا', '¿Cabe?': '✓ نعم' },
          { 'Hardware': 'M5 Max 128GB', 'Cuantización': 'Q8_0', 'Tamaño del modelo': '74 GB', 'tok/s': '8–12', 'Calidad': 'بلا فقدان', '¿Cabe?': '✓ نعم' },
          { 'Hardware': 'M5 Ultra 256GB (متوقع)', 'Cuantización': 'FP16', 'Tamaño del modelo': '140 GB', 'tok/s': '14–18', 'Calidad': 'مثالي', '¿Cabe?': '✓ نعم' },
          { 'Hardware': 'RTX 4090 24GB', 'Cuantización': 'Any', 'Tamaño del modelo': '42 GB+', 'tok/s': '—', 'Calidad': '—', '¿Cabe?': '✗ نفاد ذاكرة' },
          { 'Hardware': 'Dual RTX 3090 48GB', 'Cuantización': 'Q4_K_M', 'Tamaño del modelo': '42 GB', 'tok/s': '12–15', 'Calidad': 'جيدة', '¿Cabe?': '✓ نعم (معقّد)' },
          { 'Hardware': 'Dual RTX 4090 48GB', 'Cuantización': 'Q5_K_M', 'Tamaño del modelo': '49 GB', 'tok/s': '18–25', 'Calidad': 'جيدة جدًا', '¿Cabe?': '✓ نعم ($5,000+)' },
          { 'Hardware': '4× RTX 3090 96GB', 'Cuantización': 'Q8_0', 'Tamaño del modelo': '74 GB', 'tok/s': '12–16', 'Calidad': 'بلا فقدان', '¿Cabe?': '✓ نعم (مكلف)' },
        ],
        note: 'M5 Max 128GB هو الجهاز الاستهلاكي الوحيد الذي يشغّل نماذج 70B دون إعدادات متعددة بطاقات الرسوم المعقدة. إعداد Mac Studio بـ $4,000 يحل محل منصات NVIDIA متعددة بطاقات الرسوم بقيمة $5,000–8,000.',
      },
      setupInstall: {
        id: 'setup',
        title: 'خطوة بخطوة: تشغيل 70B على M5 Max 128GB',
        content: [
          'الخطوة 1: تحقق من أجهزتك. الخطوة 2: ثبّت وأعدّ Ollama.',
        ],
        codeBlock: `# Paso 1: Verifica la memoria unificada (debe mostrar 128 GB)
system_profiler SPHardwareDataType | grep Memory
# → Memory: 128 GB

# Paso 2: Instala Ollama
brew install ollama
brew services start ollama

# Paso 3: Configura para 70B (mantén el modelo cargado, evita el calentamiento de 60 seg)
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
echo 'export OLLAMA_NUM_PARALLEL=1' >> ~/.zshrc
source ~/.zshrc
brew services restart ollama`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: 'الخطوة 3: تنزيل نموذج 70B',
        content: [
          'وقت التنزيل بـ 100 Mbps: 45–90 دقيقة. بـ 1 Gbps: 5–10 دقائق.',
        ],
        codeBlock: `# Recomendado: Q5_K_M — mejor equilibrio calidad/velocidad (49 GB de descarga)
ollama pull llama3.1:70b-instruct-q5_K_M

# Alternativa: Q4 — máxima velocidad, 42 GB de descarga
ollama pull llama3.1:70b-instruct-q4_K_M

# Alternativa: Q8 — calidad sin pérdida, 74 GB de descarga
ollama pull llama3.1:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: 'الخطوات 4–6: أول تشغيل، التحقق من Metal، فحص الذاكرة',
        content: [
          'يستغرق أول طلب 30–60 ثانية لتحميل 49 GB في الذاكرة الموحدة. الطلبات اللاحقة فورية.',
        ],
        codeBlock: `# Paso 4: Primera ejecución (espera 30-60 seg para la carga del modelo)
ollama run llama3.1:70b-instruct-q5_K_M "Escribe un ensayo de 200 palabras sobre la IA local"

# Paso 5: Verifica que la aceleración Metal GPU está activa
ollama run llama3.1:70b-instruct-q5_K_M --verbose
# Esperado: ggml_metal_init: found device: Apple M5 Max

# Paso 6: Acceso por API para tus aplicaciones
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.1:70b-instruct-q5_K_M",
  "messages": [{"role": "user", "content": "Explica la computación cuántica"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: 'مقارنة الجودة: 8B مقابل 70B مقابل GPT-5.6',
        content: [
          'الأمر: "اشرح لماذا يحدث تجاوز المكدّس (stack overflow) في الدوال التكرارية، ثم اكتب دالة Python تكتشف التكرار اللانهائي قبل أن يتعطل البرنامج."',
          'استجابة Llama 3.3 8B Q4 (تعمل على أي Mac بسعة 16GB+):',
        ],
        blockquote: 'يحدث تجاوز المكدّس عندما تتجاوز استدعاءات الدوال الكثيرة الذاكرة.',
        codeBlock: `def detect_recursion(func):
    count = 0
    try:
        func()
    except RecursionError:
        count += 1
    return count > 0`,
        codeLanguage: 'python',
        note: 'تفتقر إلى النقطة الجوهرية: لا تستخدم sys.setrecursionlimit، ومنطق الاكتشاف غير صحيح.',
      },
      quality70B: {
        id: 'quality-70b',
        title: 'استجابة Llama 3.3 70B Q5 (M5 Max 128GB)',
        blockquote: 'يحدث تجاوز المكدّس في التكرار عندما تتجاوز مكدّس الاستدعاءات الحد الذي يفرضه نظام التشغيل (عادةً 1MB–8MB). كل استدعاء تكراري يضيف إطار مكدّس بمتغيرات محلية وعنوان عودة. الحد الافتراضي في Python هو 1000 استدعاء.',
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
        note: 'صحيح: نمط المُزخرِف، تتبّع العمق، اكتشاف استباقي قبل التعطّل، عتبة قابلة للضبط. يضيف GPT-5.6 معالجة أخطاء أكثر أناقة قليلًا — فرق جودة 3% عمليًا.',
      },
      quantization: {
        id: 'quantization',
        title: 'التكميم بعمق لنماذج 70B',
        items: [
          'فرق الجودة بين Q4 وQ5 أكبر في 70B منه في 8B. Q4: فقدان جودة ~3–5%. Q5: فقدان ~0.5–1% مقابل FP16.',
          'في نماذج 8B، يكاد لا يُلاحظ Q4 مقابل Q8. في 70B، Q4 مقابل Q8 مهم للاستدلال المعقد والكود.',
          'التوصية: يقدّم Q5_K_M أفضل توازن. إذا كانت السرعة حرجة (دردشة، إكمال تلقائي)، استخدم Q4. إذا كانت جودة المخرجات حرجة (قانون، مراجعة كود)، استخدم Q8.',
          'الذاكرة: Q4 = 42 GB، Q5 = 49 GB، Q8 = 74 GB. تتسع جميعها في M5 Max 128GB. اترك هامشًا لنظام التشغيل (~8 GB) والتطبيقات.',
          'token/ث عمليًا: Q4 = 15–20، Q5 = 12–16، Q8 = 8–12. بـ 12 token/ث، تستغرق استجابة من 500 كلمة ~40 ثانية.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'نماذج 70B+ بديلة لـ Apple Silicon',
        tableFormat: true,
        columns: ['Modelo', 'Tamaño (Q5)', 'Ideal para', 'tok/s en M5 Max'],
        rows: [
          { 'Modelo': 'Llama 3.3 70B Instruct', 'Tamaño (Q5)': '49 GB', 'Ideal para': 'استخدام عام، استدلال', 'tok/s en M5 Max': '12–16' },
          { 'Modelo': 'Qwen3 72B Instruct', 'Tamaño (Q5)': '51 GB', 'Ideal para': 'متعدد اللغات، رياضيات، كود', 'tok/s en M5 Max': '11–15' },
          { 'Modelo': 'DeepSeek 67B', 'Tamaño (Q5)': '47 GB', 'Ideal para': 'تميّز في البرمجة', 'tok/s en M5 Max': '12–16' },
          { 'Modelo': 'Llama 3.3 70B Coder', 'Tamaño (Q5)': '49 GB', 'Ideal para': 'مهام كود خالصة', 'tok/s en M5 Max': '13–17' },
          { 'Modelo': 'Mixtral 8x22B (MoE)', 'Tamaño (Q4)': '88 GB', 'Ideal para': 'استدلال عالي الجودة', 'tok/s en M5 Max': '18–22' },
          { 'Modelo': 'Cohere Command A+ 104B', 'Tamaño (Q4)': '73 GB', 'Ideal para': 'RAG، سياق 128K', 'tok/s en M5 Max': '8–12' },
        ],
        note: 'توصيات حسب حالة الاستخدام: استدلال عام ← Llama 3.3 70B Q5. كود ← DeepSeek 67B. غير الإنجليزية ← Qwen3 72B. أسئلة عن المستندات ← Command A+. أقصى سرعة ← Mixtral 8x22B (يستخدم MoE معاملات نشطة أقل).',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: 'تنزيل النماذج البديلة',
        codeBlock: `ollama pull qwen2.5:72b-instruct-q5_K_M
ollama pull deepseek-coder:67b-q5_K_M
ollama pull mixtral:8x22b`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '70B محلي مقابل واجهات API السحابية — مقارنة مفصّلة',
        tableFormat: true,
        columns: ['Métrica', '70B Q5 local (M5 Max)', 'GPT-5.6 API', 'Claude Sonnet 5', 'Gemini 3.5 Pro'],
        rows: [
          { 'Métrica': 'الجودة (MMLU)', '70B Q5 local (M5 Max)': '86.1', 'GPT-5.6 API': '88.7', 'Claude Sonnet 5': '88.7', 'Gemini 3.5 Pro': '85.9' },
          { 'Métrica': 'السرعة (token/ث)', '70B Q5 local (M5 Max)': '12–16', 'GPT-5.6 API': '50–80', 'Claude Sonnet 5': '50–80', 'Gemini 3.5 Pro': '60–100' },
          { 'Métrica': 'كمون أول token', '70B Q5 local (M5 Max)': '1–2 ثانية', 'GPT-5.6 API': '0.3–0.8 ثانية', 'Claude Sonnet 5': '0.4–0.9 ثانية', 'Gemini 3.5 Pro': '0.5–1 ثانية' },
          { 'Métrica': 'التكلفة لكل 1M token', '70B Q5 local (M5 Max)': '$0', 'GPT-5.6 API': '$2.50/$10.00', 'Claude Sonnet 5': '$3.00/$15.00', 'Gemini 3.5 Pro': '$1.25/$5.00' },
          { 'Métrica': 'التكلفة/شهر (5M token)', '70B Q5 local (M5 Max)': '$0', 'GPT-5.6 API': '$50–150', 'Claude Sonnet 5': '$75–200', 'Gemini 3.5 Pro': '$30–80' },
          { 'Métrica': 'الخصوصية', '70B Q5 local (M5 Max)': '100% محلي', 'GPT-5.6 API': 'يُرسَل إلى OpenAI', 'Claude Sonnet 5': 'يُرسَل إلى Anthropic', 'Gemini 3.5 Pro': 'يُرسَل إلى Google' },
          { 'Métrica': 'يتطلب إنترنت', '70B Q5 local (M5 Max)': 'لا', 'GPT-5.6 API': 'نعم', 'Claude Sonnet 5': 'نعم', 'Gemini 3.5 Pro': 'نعم' },
          { 'Métrica': 'حدود الاستخدام', '70B Q5 local (M5 Max)': 'لا شيء', 'GPT-5.6 API': 'حسب المستوى', 'Claude Sonnet 5': 'حسب المستوى', 'Gemini 3.5 Pro': 'حسب المستوى' },
          { 'Métrica': 'التخصيص', '70B Q5 local (M5 Max)': 'كامل (fine-tuning محلي)', 'GPT-5.6 API': 'محدود', 'Claude Sonnet 5': 'محدود', 'Gemini 3.5 Pro': 'محدود' },
        ],
        note: 'يساوي 70B Q5 المحلي الجودة السحابية بفارق 3% في MMLU. بتكلفة أجهزة $4,000 وتوفير شهري $50–150 على السحابة، تكون فترة الاسترداد 27–80 شهرًا حسب الاستخدام. العمل الحساس للخصوصية (طبي، قانوني، مالي) لا بديل سحابي له.',
      },
      useCases: {
        id: 'use-cases',
        title: 'حالات استخدام عملية لاستدلال 70B المحلي',
        numberedItems: [
          { title: 'تحليل المستندات السرية', whyItMatters: 'العقود القانونية والسجلات الطبية والبيانات المالية والعناية الواجبة في عمليات الدمج والاستحواذ. واجهات API السحابية غير مقبولة بموجب HIPAA أو GDPR أو اتفاقيات عدم الإفصاح. يقدّم 70B Q5 على M5 Max تحليلًا بجودة سحابية دون أي تسريب للبيانات.' },
          { title: 'مساعدة برمجية عالية الحجم', whyItMatters: 'مطور مستقل يستخدم Copilot 8 ساعات/يوم: ~$10/شهر. فريق من 10 أشخاص يستخدم 70B Coder محليًا: $0/شهر. لا يغادر الكود شبكة الشركة أبدًا. M5 Max كخادم استدلال مشترك يطفئ تكلفته في 3 أشهر لفريق من 10 أشخاص.' },
          { title: 'توليد محتوى مطوّل', whyItMatters: 'منشورات مدونة من 5,000 كلمة، توثيق تقني. ينتج 70B نصوصًا طويلة أفضل بشكل ملحوظ من 8B. محليًا: بلا حدود tokens، بلا حدود استخدام. يولّد 50,000 كلمة/يوم بـ $0 مقابل $50–100 في تكاليف API.' },
          { title: 'الاستخدام الأكاديمي والبحثي', whyItMatters: 'معالجة آلاف المقالات لمراجعة بيبليوغرافية، توليد فرضيات عبر مجالات متعددة. تُطلب جودة استدلال 70B. تكاليف السحابة باهظة لميزانيات الطلاب والباحثين بعد الدكتوراه.' },
          { title: 'ذكاء اصطناعي شخصي مركّز على الخصوصية', whyItMatters: 'تحليل المذكرات الشخصية، والتخطيط المالي العائلي، والتأمل الصحي ببيانات خاصة. يحل محل ChatGPT Plus لأسرة كاملة. صفر بيانات تُرسَل إلى أطراف ثالثة.' },
          { title: 'سير عمل حرج دون اتصال', whyItMatters: 'الصحفيون في المناطق التقييدية، والمهنيون الطبيون في المناطق النائية، والسفر دون إنترنت موثوق، والمنشآت الآمنة بلا وصول إلى شبكة خارجية.' },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: 'تحسين السرعة: MLX مقابل Ollama',
        content: [
          'MLX هو إطار تعلّم الآلة الأصلي من Apple ويعمل أسرع بـ 15–25% من Ollama بالنموذج نفسه. M5 Max مع 70B Q5: Ollama = 12–16 token/ث، MLX = 18–22 token/ث.',
        ],
        codeBlock: `from mlx_lm import load, generate

# Cargar modelo 70B Q5 (versión convertida a MLX desde Hugging Face)
model, tokenizer = load("mlx-community/Llama-3.1-70B-Instruct-Q5")

# Generación en streaming — el usuario ve la primera palabra en 1-2 seg
from mlx_lm import stream_generate
for chunk in stream_generate(model, tokenizer, "Explica la computación cuántica", max_tokens=500):
    print(chunk, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: 'نصائح إضافية لتحسين السرعة',
        items: [
          'أبقِ النموذج ساخنًا: اضبط OLLAMA_KEEP_ALIVE=1h (أو 24h لـ Mac Mini الدائم التشغيل) لتجنّب إعادة التحميل البالغة 30–60 ثانية في كل طلب.',
          'استخدم البث: يرى المستخدم أول token خلال 1–2 ثانية بدلًا من انتظار 25–40 ثانية للاستجابة الكاملة.',
          'قلّل max_tokens: إذا كنت تحتاج إلى استجابات من 200 كلمة، اضبط max_tokens=200. بـ 14 token/ث: 200 token = 14 ثانية مقابل 36 ثانية لـ 500 token.',
          'مفاضلة سرعة Q4 مقابل Q5: Q4 = 15–20 token/ث (أسرع بـ 25% من Q5). فرق الجودة ~2–3% في معظم المهام. للدردشة استخدم Q4، وللاستدلال الحرج استخدم Q5.',
          'تجنّب تشغيل تطبيقات أخرى كثيفة على بطاقة الرسوم أثناء الاستدلال — يُظهر سجل بطاقة الرسوم في مراقب النشاط ما إذا كانت عمليات أخرى تتنافس على عرض نطاق Metal.',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'معاينة M5 Ultra: المستوى التالي من القدرة (متوقع منتصف 2026)',
        content: [
          'استنادًا إلى نمط Apple السابق لـ Ultra (ضعف مواصفات Max)، توقعات M5 Ultra: 256 GB من الذاكرة الموحدة، ~1,200 GB/s عرض نطاق، ~80 نواة بطاقة رسوم. متوقع في Mac Studio Ultra فقط.',
        ],
        tableFormat: true,
        columns: ['Modelo', 'M5 Max 128GB', 'M5 Ultra 256GB (proyectado)'],
        rows: [
          { 'Modelo': 'Llama 3.3 70B Q5', 'M5 Max 128GB': '12–16 token/ث', 'M5 Ultra 256GB (proyectado)': '24–32 token/ث' },
          { 'Modelo': 'Llama 3.3 70B Q8', 'M5 Max 128GB': '8–12 token/ث', 'M5 Ultra 256GB (proyectado)': '16–24 token/ث' },
          { 'Modelo': 'Llama 3.3 70B FP16 (بلا فقدان)', 'M5 Max 128GB': '✗ لا يتسع', 'M5 Ultra 256GB (proyectado)': '14–18 token/ث' },
          { 'Modelo': 'Qwen3 72B Q8', 'M5 Max 128GB': '8–12 token/ث', 'M5 Ultra 256GB (proyectado)': '16–24 token/ث' },
          { 'Modelo': 'Mixtral 8x22B Q5', 'M5 Max 128GB': '14–18 token/ث', 'M5 Ultra 256GB (proyectado)': '28–36 token/ث' },
          { 'Modelo': 'Llama 3.3 405B Q3', 'M5 Max 128GB': '✗ لا يتسع', 'M5 Ultra 256GB (proyectado)': '4–6 token/ث' },
          { 'Modelo': 'Llama 3.3 405B Q4 (~200 GB)', 'M5 Max 128GB': '✗ لا يتسع', 'M5 Ultra 256GB (proyectado)': '3–5 token/ث' },
        ],
        note: 'يفتح M5 Ultra: (1) 70B FP16 بلا فقدان — الأول في الأجهزة الاستهلاكية. (2) نماذج بـ 405B معامل. (3) نموذجا 70B في آن واحد. السعر المتوقع: $5,500–7,000 (Mac Studio Ultra). متى تنتظر: إذا كنت تحتاج إلى نماذج 405B أو 70B FP16، أو تملك بالفعل M3/M4 Max.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل 70B Q4 جيد بما يكفي لمعظم المهام؟',
            a: 'نعم. Q4 هو التكميم القياسي في القطاع. فقدان الجودة بنسبة ~3–5% مقابل Q5 غير محسوس لمعظم مهام الدردشة والكتابة والاستخدام العام. استخدم Q5 أو Q8 فقط عندما تكون جودة المخرجات حرجة (تحليل قانوني، مراجعة كود، استخدام طبي).',
          },
          {
            q: 'هل يمكنني تشغيل 70B Q5 ونموذج آخر في آن واحد؟',
            a: 'نعم، مع نموذج أصغر. 70B Q5 = 49 GB. 128 GB ناقص 8 GB حمل نظام التشغيل = 120 GB. يمكنك تحميل 70B Q5 (49 GB) + نموذج 7–8B (5 GB) = 54 GB إجمالًا — ضمن الميزانية بأريحية. نموذجا 70B في آن واحد يتطلبان M5 Ultra 256 GB.',
          },
          {
            q: 'متى ينبغي أن أنتظر M5 Ultra بدلًا من شراء M5 Max الآن؟',
            a: 'انتظر M5 Ultra إذا: (1) كنت تحتاج إلى 70B FP16 (جودة بلا فقدان)، (2) أو كنت تحتاج إلى نماذج 405B، (3) أو تملك بالفعل M3 Max أو M4 Max (تخطَّ M5 Max). اشترِ M5 Max الآن إذا: كنت تحتاج إلى قدرة 70B اليوم وميزانيتك أقل من $5,000.',
          },
          {
            q: 'كم سيكون 70B أسرع على M5 Ultra مقابل M5 Max؟',
            a: 'أسرع بنحو الضعف، استنادًا إلى ضعف عرض نطاق الذاكرة (~1,200 GB/s مقابل 614 GB/s). يشغّل M5 Max نموذج 70B Q5 بـ 12–16 token/ث؛ ويُتوقع M5 Ultra بـ 24–32 token/ث. كما سيتمكّن M5 Ultra من تشغيل 70B FP16 (جودة بلا فقدان)، الذي لا يستطيع M5 Max تحميله.',
          },
          {
            q: 'هل يمكنني تشغيل نموذجي 70B في آن واحد على M5 Max 128GB؟',
            a: 'لا، ليس نموذجي 70B كاملين. اثنان من 70B Q4 = 84 GB زائدًا حمل نظام التشغيل = ~95 GB، وهو ضيق في 128 GB. يتعامل M5 Ultra 256 GB بسهولة مع نموذجي 70B في آن واحد أو نموذج 70B + نموذج 34B.',
          },
          {
            q: 'كم مساحة قرص أحتاج لنماذج 70B؟',
            a: 'كل نموذج 70B يشغل 42 GB (Q4) أو 49 GB (Q5) أو 74 GB (Q8) على القرص. إذا احتفظت بـ 3 تكميمات لنموذج للمقارنة: 165 GB. للعمل الجاد مع 70B ونماذج متعددة، اختر SSD بسعة 1 TB أو 2 TB في Mac Studio.',
          },
          {
            q: 'هل 70B المحلي جيد فعلًا مثل GPT-5.6 لحالة استخدامي المحددة؟',
            a: 'يحصل 70B Q5 على 86.1 في MMLU مقابل GPT-5.6 بـ 88.7 — فجوة 3% في المعايير. للاستدلال المعقد والكتابة الدقيقة، لا يزال GPT-5.6 يتصدر قليلًا. للعمل الحساس للخصوصية أو الاستخدام المكثف ($50+/شهر) أو الاستخدام دون اتصال، يفوز المحلي تلقائيًا. اختبر بأوامرك الخاصة للتحقق في سير عملك.',
          },
          {
            q: 'هل ستعمل Llama 4 أو نماذج 70B جديدة أخرى على M5 Max؟',
            a: 'نعم. يحمّل M5 Max 128 GB أي نموذج 70B بتكميم Q4/Q5/Q8 بصرف النظر عن البنية. تظهر إصدارات 70B الجديدة (Llama 4، Qwen3، إلخ) عادةً في Ollama خلال أيام من إطلاقها. نفّذ ollama pull باسم النموذج الجديد.',
          },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'مقالات ذات صلة',
        items: [
          '[Apple Silicon لنماذج LLM المحلية: دليل كامل](/ar/local-llms/apple-silicon-local-llm-guide-2026) — مقارنة M1 إلى M5 Max، الذاكرة الموحدة موضّحة',
          '[معايير LLM لـ M5 Pro مقابل M5 Max 2026](/ar/local-llms/m5-pro-max-llm-benchmarks-2026) — أرقام token/ث مفصّلة حسب حجم النموذج',
          '[كم من الذاكرة الموحدة لنماذج LLM المحلية؟](/ar/local-llms/how-much-unified-memory-for-local-llm) — دليل 16GB مقابل 36GB مقابل 64GB مقابل 128GB',
          '[أفضل نماذج LLM لـ Apple Silicon](/ar/local-llms/best-models-apple-silicon-2026) — توصيات النماذج حسب إعداد Mac',
          '[MLX مقابل Ollama مقابل llama.cpp على Mac](/ar/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — مقارنة سرعة الأطر ودليل الإعداد',
          '[Apple Silicon مقابل بطاقات رسوم NVIDIA لنماذج LLM المحلية](/ar/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — مقارنة أجهزة متعددة المنصات',
          '[تكميم نماذج LLM موضّحًا](/ar/local-llms/llm-quantization-explained) — تحليل عميق Q4/Q5/Q8/FP16',
          '[Mac Mini M5 كخادم ذكاء اصطناعي محلي](/ar/local-llms/mac-mini-m5-local-ai-server) — إعداد خادم استدلال دائم التشغيل',
          '[أفضل نموذج استدلال محلي 2026: ترتيب DeepSeek-R1 Distills](/ar/local-llms/best-local-reasoning-model-deepseek-r1-2026) — distill استدلال 70B لهذه الأجهزة: بيانات المعيار وإعداد Ollama والأداء على M5 Max.',
          '[جدول مرجعي لـ VRAM لـ DeepSeek-R1 Distill](/ar/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — متطلبات VRAM الدقيقة لكل حجم distill (Q4_K_M): 70B → 42 GB — تأكد من توافق M5 Max.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'تشغيل نماذج 70B على Apple Silicon 2026: دليل M5 Max',
      description: 'يشغّل M5 Max 128 GB نماذج 70B بـ 12–20 token/ث. جودة مماثلة لـ GPT-5.6 محليًا.',
      url: 'https://www.promptquorum.com/ar/local-llms/running-70b-models-apple-silicon-m5-max',
      inLanguage: 'ar',
      datePublished: '2026-05-15',
      dateModified: '2026-07-13',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    theme: 'Hardware & Performance',
    title: 'Executar modelos 70B+ no Apple Silicon 2026: Guia completo M5 Max',
    seoTitle: 'Modelos 70B no M5 Max 128GB: 12–20 tok/s, qualidade GPT-5.6',
    intro: 'Execute LLMs de 70B e maiores localmente no Apple Silicon M5 Max (128GB). Guia completo com Ollama e MLX, comparação de quantização (Q4/Q5/Q8), benchmarks de qualidade 8B vs 70B, números reais de tok/s, análise de custos 70B vs APIs na nuvem, modelos alternativos 70B+, otimização de velocidade e projeções do M5 Ultra para 2026.',
    metaDescription: 'M5 Max 128GB executa modelos 70B a 12–20 tok/s. Qualidade Q5 iguala o GPT-5.6 em 3%. Configuração completa com Ollama/MLX, guia de quantização e benchmarks.',
    publishDate: '2026-05-15',
    audience: 'Proprietários de M5 Max e potenciais compradores que buscam máxima qualidade em LLMs locais sem APIs na nuvem.',
    readTime: '16 min de leitura',
    educationalLevel: 'Advanced',
    primaryTerm: 'modelos 70B Apple Silicon',
    ctaText: 'Você executa o Llama 3.3 70B localmente no seu M5 Max? Compare suas respostas locais com GPT-5.6, Claude Sonnet 5 e outros modelos na nuvem com o PromptQuorum.',
    leadAnswerBlock: '**O M5 Max 128GB executa o Llama 3.3 70B a 15–20 tok/s (Q4_K_M) ou 12–16 tok/s (Q5_K_M). O 70B Q5 obtém 86,1 no MMLU — apenas 3% abaixo do GPT-5.6 (88,7) — enquanto roda localmente a $0/mês. É o único hardware de consumo que carrega modelos 70B sem configurações multi-GPU complexas. A configuração leva menos de 10 minutos com o Ollama.**',
    quickAnswerTop: {
      pt: {
        question: 'Posso executar modelos 70B no M5 Max 128GB?', // VERIFY
        answer: 'Sim. O Llama 3.3 70B Q5_K_M roda a 12–16 tok/s. Q4_K_M a 15–20 tok/s. Q8_0 a 8–12 tok/s (qualidade sem perdas). Todos cabem em 128GB de memória unificada. A configuração leva 10 minutos com o Ollama. O 70B Q5 iguala a qualidade do GPT-5.6 em 3% nos benchmarks padrão.', // VERIFY
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, boa qualidade', // VERIFY
          '70B Q5_K_M: 49 GB, 12–16 tok/s, muito boa (recomendado)', // VERIFY
          '70B Q8_0: 74 GB, 8–12 tok/s, qualidade sem perdas', // VERIFY
          'Única opção de consumo sem complexidade multi-GPU', // VERIFY
          'MMLU: 70B Q5 = 86,1 vs GPT-5.6 = 88,7 (lacuna de 3%)', // VERIFY
          'Configuração: brew install ollama && ollama pull llama3.1:70b', // VERIFY
        ],
        updatedDate: '2026-06-19',
      },
    },
    toc: [
      { label: 'Principais conclusões', anchor: '#key-takeaways' },
      { label: 'Por que o M5 Max para modelos 70B', anchor: '#why-m5-max' },
      { label: 'Quantização: Q4 vs Q5 vs Q8', anchor: '#quantization' },
      { label: 'Benchmarks de qualidade', anchor: '#quality-benchmarks' },
      { label: 'Configuração com Ollama', anchor: '#ollama-setup' },
      { label: 'Configuração com MLX', anchor: '#mlx-setup' },
      { label: 'Análise de custos vs APIs na nuvem', anchor: '#cost-analysis' },
      { label: 'Modelos alternativos 70B+', anchor: '#alternatives' },
      { label: 'Otimização de velocidade', anchor: '#speed-optimization' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**M5 Max 128GB executa Llama 3.3 70B a 15–20 tok/s (Q4_K_M)** ou 12–16 tok/s (Q5_K_M) — velocidade de chat em tempo real.',
          '**Qualidade Q5 ≈ GPT-5.6**: 86,1 MMLU vs 88,7 GPT-5.6 — diferença de apenas 3%.',
          '**Único hardware de consumo para 70B sem multi-GPU**: 128 GB de memória unificada = sem configuração complexa.',
          '**Custo**: ~R$ 22.000 único vs $0/mês em tokens. Ponto de equilíbrio em ~18 meses vs Claude Sonnet 5.',
          '**Configuração em 10 minutos** com Ollama: `brew install ollama && ollama pull llama3.3:70b`.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O M5 Max 128GB é o único hardware de consumo capaz de executar modelos 70B a velocidade de chat em tempo real (15–20 tok/s) sem configurações multi-GPU complexas.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Posso executar modelos 70B no M5 Max 128GB?', a: 'Sim. O Llama 3.3 70B Q5_K_M executa a 12–16 tok/s. Q4_K_M a 15–20 tok/s. Q8_0 a 8–12 tok/s (qualidade sem perdas). Todos cabem em 128 GB de memória unificada. Configuração em 10 minutos com Ollama.' },
          { q: 'Qual quantização devo usar para modelos 70B no M5 Max?', a: 'Q5_K_M é o ponto ideal: 49 GB, 12–16 tok/s, muito boa qualidade. Q4_K_M se você quer velocidade máxima (15–20 tok/s, boa qualidade). Q8_0 se você quer qualidade sem perdas e a velocidade de 8–12 tok/s é aceitável.' },
          { q: 'Quanto custa o M5 Max comparado ao Claude Sonnet 5?', a: 'Com 10M tokens/dia (equipe típica de 5 desenvolvedores), o Claude Sonnet 5 custa ~$900/mês. Um Mac Studio M5 Max (~R$ 22.000) se paga em menos de 2 anos nesse volume de uso.' },
          { q: 'Como configuro o Ollama para modelos 70B no Mac?', a: '`brew install ollama`, depois `ollama pull llama3.3:70b` para Q4_K_M. Para Q5: baixe o GGUF Q5_K_M do Hugging Face e use `ollama create` com um Modelfile. Defina `num_ctx 32768` no Modelfile para contexto adequado.' },
          { q: 'O M5 Max é melhor que uma RTX 4090 para modelos 70B?', a: 'Para 70B, sim — a RTX 4090 tem apenas 24 GB de VRAM, insuficiente para 70B sem offloading severo. O M5 Max 128GB é a única opção de hardware de consumo que executa 70B a velocidade de chat sem multi-GPU.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Benchmarks LLM M5 Pro vs M5 Max 2026](/pt/local-llms/m5-pro-max-llm-benchmarks-2026) — Números detalhados de tok/s por tamanho de modelo',
          '[Quanta memória unificada para LLMs locais?](/pt/local-llms/how-much-unified-memory-for-local-llm) — Guia 16GB vs 36GB vs 64GB vs 128GB',
          '[Melhores modelos LLM para Apple Silicon](/pt/local-llms/best-models-apple-silicon-2026) — Recomendações de modelos por configuração Mac',
          '[MLX vs Ollama vs llama.cpp no Mac](/pt/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — Comparação de velocidade de frameworks',
          '[Quantização de LLMs explicada](/pt/local-llms/llm-quantization-explained) — Análise profunda Q4/Q5/Q8/FP16',
          '[Melhor modelo de raciocínio local 2026: DeepSeek-R1 Distills classificados](/pt/local-llms/best-local-reasoning-model-deepseek-r1-2026) — Distill de raciocínio 70B para este hardware: benchmarks, configuração do Ollama e desempenho no M5 Max.',
          '[Guia de VRAM para DeepSeek-R1 Distill](/pt/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — VRAM exata por tamanho de distill (Q4_K_M): 70B → 42 GB — confirme que seu M5 Max é compatível.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Executar modelos 70B no Apple Silicon 2026: Guia M5 Max',
      description: 'M5 Max 128 GB executa modelos 70B a 12–20 tok/s. Qualidade comparável ao GPT-5.6 localmente.',
      url: 'https://www.promptquorum.com/pt/local-llms/running-70b-models-apple-silicon-m5-max',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-15',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    theme: 'Hardware & Performance',
    title: '70B+-Modelle auf Apple Silicon 2026: M5 Max Kompletleitfaden',
    seoTitle: '70B-Modelle auf M5 Max 128GB: 12–20 tok/s, GPT-5.6-Qualität',
    intro: '70B und größere LLMs lokal auf dem Apple Silicon M5 Max (128 GB) ausführen. Vollständiger Einrichtungsleitfaden mit Ollama und MLX, Quantisierungsvergleich (Q4/Q5/Q8), 8B-vs-70B-Qualitätsbenchmarks, reale tok/s-Werte, 70B-vs-Cloud-API-Kostenanalyse, alternative 70B+-Modelle, Geschwindigkeitsoptimierung und M5-Ultra-Prognosen für 2026.',
    metaDescription: '70B-Modelle auf Apple Silicon M5 Max ausführen 2026: Unified Memory, Tokens/Sek. und Quantisierung. Performance und Setup für große LLMs am Mac.',
    twitterDescription: '70B LLMs auf M5 Max 128 GB: 12–20 tok/s, Q4–Q8, entspricht Cloud-Qualität innerhalb 3 %, 0 €/Monat. Vollständiger Einrichtungs- und Benchmark-Leitfaden.',
    publishDate: '2026-05-15',
    dateModified: '2026-07-13',
    current_models_mentioned: ['Llama 3.3 70B', 'Qwen3 72B', 'DeepSeek 67B', 'Mixtral 8x22B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'M5-Max-Besitzer und potenzielle Käufer, die maximale lokale LLM-Qualität ohne Cloud-APIs anstreben.',
    readTime: '16 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: '70B-Modelle Apple Silicon',
    targetKeywords: ['70B-Modell Mac', 'M5 Max 128 GB LLM', '70B lokal ausführen', 'Llama 70B Apple Silicon', 'großes Modell lokale Inferenz'],
    ctaText: 'Llama 3.3 70B lokal auf dem M5 Max ausführen? Vergleichen Sie Ihre lokalen Antworten mit GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro und 22 weiteren Cloud-Modellen mit PromptQuorum – validieren Sie, ob Ihre 4.000-€-Hardware-Investition für Ihre Reasoning-, Coding- und Writing-Aufgaben Cloud-Qualität erreicht. Alles in einem Dispatch.',
    leadAnswerBlock: '**M5 Max 128 GB führt Llama 3.3 70B mit 15–20 tok/s (Q4_K_M) oder 12–16 tok/s (Q5_K_M) aus. 70B Q5 erreicht 86,1 auf MMLU – innerhalb von 3 % von GPT-5.6 (88,7) – und läuft lokal für 0 €/Monat. Es ist die einzige Consumer-Hardware, die 70B ohne komplexe Multi-GPU-Konfigurationen unterstützt. Die Einrichtung dauert unter 10 Minuten mit Ollama.**',
    quickAnswerTop: {
      en: {
        question: 'Can I run 70B models on M5 Max 128GB?',
        answer: 'Yes. Llama 3.3 70B Q5_K_M runs at 12–16 tok/s. Q4_K_M at 15–20 tok/s. Q8_0 at 8–12 tok/s (lossless quality). All fit in 128GB unified memory. Setup is 10 minutes with Ollama. 70B Q5 matches GPT-5.6 quality within 3% on standard benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, good quality',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, very good (recommended)',
          '70B Q8_0: 74 GB, 8–12 tok/s, lossless quality',
          'Only consumer option without multi-GPU complexity',
          'MMLU: 70B Q5 = 86.1 vs GPT-5.6 = 88.7 (3% gap)',
          'Setup: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      de: {
        question: 'Kann ich 70B-Modelle auf dem M5 Max 128 GB ausführen?',
        answer: 'Ja. Llama 3.3 70B Q5_K_M läuft mit 12–16 tok/s. Q4_K_M mit 15–20 tok/s. Q8_0 mit 8–12 tok/s (verlustfreie Qualität). Alle passen in den 128-GB-Unified-Memory. Die Einrichtung dauert 10 Minuten mit Ollama. 70B Q5 erreicht innerhalb von 3 % die GPT-5.6-Qualität bei Standard-Benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, gute Qualität',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, sehr gut (empfohlen)',
          '70B Q8_0: 74 GB, 8–12 tok/s, verlustfreie Qualität',
          'Einzige Consumer-Option ohne komplexe Multi-GPU-Konfiguration',
          'MMLU: 70B Q5 = 86,1 vs GPT-5.6 = 88,7 (3 % Unterschied)',
          'Einrichtung: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-06-19' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-06-19' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-06-19' },
    },
    toc: [
      { label: 'Warum 70B wichtig ist', anchor: '#why' },
      { label: 'Hardware-Anforderungen', anchor: '#hardware' },
      { label: 'Schritt-für-Schritt-Einrichtung', anchor: '#setup' },
      { label: 'Qualität: 8B vs 70B vs GPT-5.6', anchor: '#quality' },
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
        columns: ['Benchmark', 'Llama 3.3 8B', 'Llama 3.3 70B Q5', 'GPT-5.6'],
        rows: [
          { 'Benchmark': 'MMLU (Allgemeinwissen)', 'Llama 3.3 8B': '73,0', 'Llama 3.3 70B Q5': '86,1', 'GPT-5.6': '88,7' },
          { 'Benchmark': 'HumanEval (Code)', 'Llama 3.3 8B': '72,6', 'Llama 3.3 70B Q5': '80,5', 'GPT-5.6': '90,2' },
          { 'Benchmark': 'GSM8K (Mathematik)', 'Llama 3.3 8B': '84,5', 'Llama 3.3 70B Q5': '95,1', 'GPT-5.6': '95,8' },
          { 'Benchmark': 'BBH (Schlussfolgern)', 'Llama 3.3 8B': '71,0', 'Llama 3.3 70B Q5': '85,3', 'GPT-5.6': '88,9' },
          { 'Benchmark': 'Durchschnitt', 'Llama 3.3 8B': '75,3', 'Llama 3.3 70B Q5': '86,8', 'GPT-5.6': '90,9' },
        ],
        note: '70B Q5 schließt 75 % der Qualitätslücke zwischen 8B und GPT-5.6 – und läuft lokal für 0 €/Monat.',
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
        title: 'Qualitätsvergleich: 8B vs 70B vs GPT-5.6',
        content: [
          'Prompt: „Erkläre, warum ein Stack-Overflow bei rekursiven Funktionen auftritt, und schreibe eine Python-Funktion, die unendliche Rekursion erkennt, bevor sie abstürzt."',
          'Llama 3.3 8B Q4 Antwort (läuft auf jedem Mac mit 16 GB+):',
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
        title: 'Llama 3.3 70B Q5 Antwort (M5 Max 128 GB)',
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
        note: 'Korrekt: Decorator-Muster, Tiefenverfolgung, proaktive Erkennung vor Absturz, konfigurierbarer Schwellenwert. GPT-5.6 bietet etwas elegantereres Error-Handling – ein praktischer Qualitätsunterschied von 3 %.',
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
          { 'Modell': 'Llama 3.3 70B Instruct', 'Größe (Q5)': '49 GB', 'Ideal für': 'Allgemein, Schlussfolgern', 'tok/s auf M5 Max': '12–16' },
          { 'Modell': 'Qwen3 72B Instruct', 'Größe (Q5)': '51 GB', 'Ideal für': 'Mehrsprachig, Mathematik, Code', 'tok/s auf M5 Max': '11–15' },
          { 'Modell': 'DeepSeek 67B', 'Größe (Q5)': '47 GB', 'Ideal für': 'Coding-Exzellenz', 'tok/s auf M5 Max': '12–16' },
          { 'Modell': 'Llama 3.3 70B Coder', 'Größe (Q5)': '49 GB', 'Ideal für': 'Reine Coding-Aufgaben', 'tok/s auf M5 Max': '13–17' },
          { 'Modell': 'Mixtral 8x22B (MoE)', 'Größe (Q4)': '88 GB', 'Ideal für': 'Hochwertiges Schlussfolgern', 'tok/s auf M5 Max': '18–22' },
          { 'Modell': 'Cohere Command A+ 104B', 'Größe (Q4)': '73 GB', 'Ideal für': 'RAG, 128K Kontext', 'tok/s auf M5 Max': '8–12' },
        ],
        note: 'Empfehlungen nach Anwendungsfall: Allgemeines Schlussfolgern → Llama 3.3 70B Q5. Code → DeepSeek 67B. Nicht-Englisch → Qwen3 72B. Dokument-Q&A → Command A+. Maximale Geschwindigkeit → Mixtral 8x22B (MoE verwendet weniger aktive Parameter).',
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
        columns: ['Kennzahl', '70B Q5 Lokal (M5 Max)', 'GPT-5.6 API', 'Claude Sonnet 5', 'Gemini 3.5 Pro'],
        rows: [
          { 'Kennzahl': 'Qualität (MMLU)', '70B Q5 Lokal (M5 Max)': '86,1', 'GPT-5.6 API': '88,7', 'Claude Sonnet 5': '88,7', 'Gemini 3.5 Pro': '85,9' },
          { 'Kennzahl': 'Geschwindigkeit (tok/s)', '70B Q5 Lokal (M5 Max)': '12–16', 'GPT-5.6 API': '50–80', 'Claude Sonnet 5': '50–80', 'Gemini 3.5 Pro': '60–100' },
          { 'Kennzahl': 'Erstes Token (Latenz)', '70B Q5 Lokal (M5 Max)': '1–2 Sek.', 'GPT-5.6 API': '0,3–0,8 Sek.', 'Claude Sonnet 5': '0,4–0,9 Sek.', 'Gemini 3.5 Pro': '0,5–1 Sek.' },
          { 'Kennzahl': 'Kosten pro 1M Token', '70B Q5 Lokal (M5 Max)': '0 €', 'GPT-5.6 API': '2,50 $/10,00 $', 'Claude Sonnet 5': '3,00 $/15,00 $', 'Gemini 3.5 Pro': '1,25 $/5,00 $' },
          { 'Kennzahl': 'Kosten/Monat (5M Token)', '70B Q5 Lokal (M5 Max)': '0 €', 'GPT-5.6 API': '50–150 $', 'Claude Sonnet 5': '75–200 $', 'Gemini 3.5 Pro': '30–80 $' },
          { 'Kennzahl': 'Datenschutz', '70B Q5 Lokal (M5 Max)': '100 % lokal', 'GPT-5.6 API': 'Gesendet an OpenAI', 'Claude Sonnet 5': 'Gesendet an Anthropic', 'Gemini 3.5 Pro': 'Gesendet an Google' },
          { 'Kennzahl': 'Internet erforderlich', '70B Q5 Lokal (M5 Max)': 'Nein', 'GPT-5.6 API': 'Ja', 'Claude Sonnet 5': 'Ja', 'Gemini 3.5 Pro': 'Ja' },
          { 'Kennzahl': 'Ratenlimits', '70B Q5 Lokal (M5 Max)': 'Keine', 'GPT-5.6 API': 'Stufenbasiert', 'Claude Sonnet 5': 'Stufenbasiert', 'Gemini 3.5 Pro': 'Stufenbasiert' },
          { 'Kennzahl': 'Anpassbarkeit', '70B Q5 Lokal (M5 Max)': 'Vollständig (lokal fine-tunen)', 'GPT-5.6 API': 'Begrenzt', 'Claude Sonnet 5': 'Begrenzt', 'Gemini 3.5 Pro': 'Begrenzt' },
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
          { 'Modell': 'Llama 3.3 70B Q5', 'M5 Max 128 GB': '12–16 tok/s', 'M5 Ultra 256 GB (Prognose)': '24–32 tok/s' },
          { 'Modell': 'Llama 3.3 70B Q8', 'M5 Max 128 GB': '8–12 tok/s', 'M5 Ultra 256 GB (Prognose)': '16–24 tok/s' },
          { 'Modell': 'Llama 3.3 70B FP16 (verlustfrei)', 'M5 Max 128 GB': '✗ Passt nicht', 'M5 Ultra 256 GB (Prognose)': '14–18 tok/s' },
          { 'Modell': 'Qwen3 72B Q8', 'M5 Max 128 GB': '8–12 tok/s', 'M5 Ultra 256 GB (Prognose)': '16–24 tok/s' },
          { 'Modell': 'Mixtral 8x22B Q5', 'M5 Max 128 GB': '14–18 tok/s', 'M5 Ultra 256 GB (Prognose)': '28–36 tok/s' },
          { 'Modell': 'Llama 3.3 405B Q3', 'M5 Max 128 GB': '✗ Passt nicht', 'M5 Ultra 256 GB (Prognose)': '4–6 tok/s' },
          { 'Modell': 'Llama 3.3 405B Q4 (~200 GB)', 'M5 Max 128 GB': '✗ Passt nicht', 'M5 Ultra 256 GB (Prognose)': '3–5 tok/s' },
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
          { q: 'Ist lokal laufendes 70B wirklich so gut wie GPT-5.6 für meinen Anwendungsfall?', a: '70B Q5 erreicht 86,1 auf MMLU vs GPT-5.6 mit 88,7 – ein 3 % Unterschied bei Benchmarks. Für datenschutzsensible Aufgaben, intensivere Nutzung (50 €+/Monat) oder Offline-Einsatz gewinnt lokal automatisch. Eigene Prompts testen, um den Einsatz für den jeweiligen Workflow zu validieren.' },
          { q: 'Funktionieren Llama 4 oder neuere 70B-Modelle auf M5 Max?', a: 'Ja. M5 Max 128 GB passt jedes 70B-Modell in Q4/Q5/Q8-Quantisierung, unabhängig von der Architektur. Neue 70B-Versionen erscheinen typischerweise innerhalb von Tagen auf Ollama. Den neuen Modellnamen mit ollama pull abrufen.' },
          { q: 'Verarbeitet M5 Max lokale 70B-Modelle DSGVO-konform?', a: 'Ja. Da alle Daten lokal auf dem Gerät verarbeitet werden und keine Übertragung an externe Server stattfindet, fallen keine personenbezogenen Daten unter Art. 28 DSGVO (Auftragsverarbeitung). Für den Unternehmenseinsatz: BSI-Grundschutz empfiehlt lokale Verarbeitung für besonders sensible Daten ausdrücklich.' },
          { q: 'Lohnt sich ein M5 Max für KMU in Deutschland?', a: 'Ja, insbesondere wenn ein Team von 5–15 Personen täglich mit sensiblen Dokumenten arbeitet. Ein M5 Max Mac Studio für ca. 4.000 € amortisiert sich gegenüber GPT-5.6-API-Kosten (50–200 €/Monat/Nutzer) innerhalb von 3–12 Monaten, während das gesamte Datenmaterial im Unternehmen bleibt.' },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Verwandte Artikel',
        items: [
          '[Apple Silicon für lokale LLMs: Vollständiger Leitfaden](/de/local-llms/apple-silicon-local-llm-guide-2026) — Vergleich M1 bis M5 Max, Unified Memory erklärt',
          '[M5 Pro vs M5 Max LLM-Benchmarks 2026](/de/local-llms/m5-pro-max-llm-benchmarks-2026) — detaillierte tok/s-Werte über Modellgrößen',
          '[Wie viel Unified Memory für lokale LLMs?](/de/local-llms/how-much-unified-memory-for-local-llm) — Leitfaden 16 GB vs 36 GB vs 64 GB vs 128 GB',
          '[Beste LLM-Modelle für Apple Silicon](/de/local-llms/best-models-apple-silicon-2026) — Modellempfehlungen je Mac-Konfiguration',
          '[MLX vs Ollama vs llama.cpp auf Mac](/de/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — Framework-Geschwindigkeitsvergleich und Einrichtungsleitfaden',
          '[Apple Silicon vs NVIDIA GPU für lokale LLMs](/de/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — plattformübergreifender Hardware-Vergleich',
          '[LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained) — Q4/Q5/Q8/FP16 im Detail',
          '[Mac Mini M5 als lokaler KI-Server](/de/local-llms/mac-mini-m5-local-ai-server) — Einrichtung eines Inferenzservers für Dauerbetrieb',
          '[Bestes lokales Reasoning-Modell 2026: DeepSeek-R1 Distills im Ranking](/de/local-llms/best-local-reasoning-model-deepseek-r1-2026) — 70B Reasoning-Distill für diese Hardware: Benchmarks, Ollama-Einrichtung und Leistung auf M5 Max.',
          '[DeepSeek-R1 Distill VRAM-Spickzettel](/de/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — Exakter VRAM pro Distill-Größe (Q4_K_M): 70B → 42 GB — bestätigen Sie, dass Ihr M5 Max passt.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    theme: 'Hardware & Performance',
    title: 'Exécuter des modèles 70B+ sur Apple Silicon M5 Max 128GB : Guide complet 2026',
    seoTitle: 'Modèles 70B sur M5 Max 128GB : 12–20 tok/s, Qualité GPT-5.6',
    intro: 'Exécutez des LLMs 70B et plus grandes sur Apple Silicon M5 Max (128GB) localement. Guide complet avec Ollama et MLX, comparaison de quantification (Q4/Q5/Q8), benchmarks de qualité 8B vs 70B, chiffres réels tok/s, analyse des coûts 70B vs API cloud, modèles alternatifs 70B+, optimisation de vitesse et projections M5 Ultra pour 2026.',
    metaDescription: 'M5 Max 128GB exécute modèles 70B à 12–20 tok/s. Qualité Q5 égale GPT-5.6 à 3% près. Configuration complète Ollama/MLX, guide quantification, benchmarks.',
    twitterDescription: 'LLMs 70B sur M5 Max 128GB : 12–20 tok/s, options Q4–Q8, correspond à la qualité cloud à 3% près, 0€/mois. Guide configuration + benchmark complet.',
    publishDate: '2026-05-15',
    dateModified: '2026-07-13',
    current_models_mentioned: ['Llama 3.3 70B', 'Qwen3 72B', 'DeepSeek 67B', 'Mixtral 8x22B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'Propriétaires M5 Max et acheteurs potentiels désirant la qualité maximale des LLM locaux sans APIs cloud.',
    readTime: '16 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'Modèles 70B Apple Silicon',
    targetKeywords: ['Modèle 70B Mac', 'M5 Max 128GB LLM', 'exécuter 70B localement', 'Llama 70B Apple Silicon', 'inférence grand modèle local'],
    ctaText: 'Exécutez Llama 3.3 70B localement sur M5 Max ? Comparez vos réponses locales avec GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro et 22 autres modèles cloud avec PromptQuorum — validez que votre investissement en matériel de 3 299 € atteint la qualité cloud pour vos tâches spécifiques de raisonnement, codage et écriture. Tout en une seule requête.',
    leadAnswerBlock: '**M5 Max 128GB exécute Llama 3.3 70B à 15–20 tok/s (Q4_K_M) ou 12–16 tok/s (Q5_K_M). 70B Q5 marque 86,1 sur MMLU — à 3% de GPT-5.6 (88,7) — tout en s\'exécutant localement pour 0€/mois. C\'est le seul matériel grand public qui adapte 70B sans configurations multi-GPU complexes. La configuration prend moins de 10 minutes avec Ollama.**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-06-19' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-06-19' },
      fr: {
        question: 'Puis-je exécuter des modèles 70B sur M5 Max 128GB ?',
        answer: 'Oui. Llama 3.3 70B Q5_K_M s\'exécute à 12–16 tok/s. Q4_K_M à 15–20 tok/s. Q8_0 à 8–12 tok/s (sans perte). Tous s\'adaptent dans 128GB de mémoire unifiée. La configuration prend 10 minutes avec Ollama. 70B Q5 correspond à la qualité GPT-5.6 à 3% près selon les benchmarks standard.',
        bullets: [
          '70B Q4_K_M : 42 GB, 15–20 tok/s, bonne qualité',
          '70B Q5_K_M : 49 GB, 12–16 tok/s, très bonne (recommandé)',
          '70B Q8_0 : 74 GB, 8–12 tok/s, sans perte',
          'Seule option grand public sans complexité multi-GPU',
          'MMLU : 70B Q5 = 86,1 vs GPT-5.6 = 88,7 (écart 3%)',
          'Configuration : brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-06-19' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-06-19' },
    },
    toc: [
      { label: 'Pourquoi 70B est important', anchor: '#why' },
      { label: 'Matériel requis', anchor: '#hardware' },
      { label: 'Configuration étape par étape', anchor: '#setup' },
      { label: 'Qualité : 8B vs 70B vs GPT-5.6', anchor: '#quality' },
      { label: 'Quantification en détail', anchor: '#quantization' },
      { label: 'Modèles alternatifs 70B+', anchor: '#alternatives' },
      { label: '70B local vs APIs cloud', anchor: '#vs-cloud' },
      { label: 'Cas d\'usage pratiques', anchor: '#use-cases' },
      { label: 'Optimisation de vitesse', anchor: '#speed-opts' },
      { label: 'Aperçu M5 Ultra', anchor: '#m5ultra' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Articles associés', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: 'Pourquoi 70B est important : Le saut de qualité de 8B',
        content: ['Le passage de 8B à 70B paramètres est le seuil de qualité le plus significatif en IA locale. Scores de benchmark industriels :'],
        tableFormat: true,
        columns: ['Benchmark', 'Llama 3.3 8B', 'Llama 3.3 70B Q5', 'GPT-5.6'],
        rows: [
          { 'Benchmark': 'MMLU (connaissances générales)', 'Llama 3.3 8B': '73,0', 'Llama 3.3 70B Q5': '86,1', 'GPT-5.6': '88,7' },
          { 'Benchmark': 'HumanEval (code)', 'Llama 3.3 8B': '72,6', 'Llama 3.3 70B Q5': '80,5', 'GPT-5.6': '90,2' },
          { 'Benchmark': 'GSM8K (mathématiques)', 'Llama 3.3 8B': '84,5', 'Llama 3.3 70B Q5': '95,1', 'GPT-5.6': '95,8' },
          { 'Benchmark': 'BBH (raisonnement)', 'Llama 3.3 8B': '71,0', 'Llama 3.3 70B Q5': '85,3', 'GPT-5.6': '88,9' },
          { 'Benchmark': 'Moyenne', 'Llama 3.3 8B': '75,3', 'Llama 3.3 70B Q5': '86,8', 'GPT-5.6': '90,9' },
        ],
        note: '70B Q5 comble 75% de l\'écart de qualité entre 8B et GPT-5.6 — tout en s\'exécutant localement pour 0€/mois.',
      },
      hardware: {
        id: 'hardware',
        title: 'Quel matériel exécute les modèles 70B',
        tableFormat: true,
        columns: ['Matériel', 'Quantification', 'Taille modèle', 'tok/s', 'Qualité', 'Adapté ?'],
        rows: [
          { 'Matériel': 'M3 Max 96GB', 'Quantification': 'Q4_K_M', 'Taille modèle': '42 GB', 'tok/s': '9–13', 'Qualité': 'Bonne', 'Adapté ?': '✓ Oui' },
          { 'Matériel': 'M3 Max 128GB', 'Quantification': 'Q5_K_M', 'Taille modèle': '49 GB', 'tok/s': '8–12', 'Qualité': 'Très bonne', 'Adapté ?': '✓ Oui' },
          { 'Matériel': 'M4 Max 128GB', 'Quantification': 'Q5_K_M', 'Taille modèle': '49 GB', 'tok/s': '10–14', 'Qualité': 'Très bonne', 'Adapté ?': '✓ Oui' },
          { 'Matériel': 'M5 Max 128GB', 'Quantification': 'Q4_K_M', 'Taille modèle': '42 GB', 'tok/s': '15–20', 'Qualité': 'Bonne', 'Adapté ?': '✓ Oui' },
          { 'Matériel': 'M5 Max 128GB', 'Quantification': 'Q5_K_M', 'Taille modèle': '49 GB', 'tok/s': '12–16', 'Qualité': 'Très bonne', 'Adapté ?': '✓ Oui' },
          { 'Matériel': 'M5 Max 128GB', 'Quantification': 'Q8_0', 'Taille modèle': '74 GB', 'tok/s': '8–12', 'Qualité': 'Sans perte', 'Adapté ?': '✓ Oui' },
          { 'Matériel': 'M5 Ultra 256GB (projeté)', 'Quantification': 'FP16', 'Taille modèle': '140 GB', 'tok/s': '14–18', 'Qualité': 'Parfait', 'Adapté ?': '✓ Oui' },
          { 'Matériel': 'RTX 4090 24GB', 'Quantification': 'Tous', 'Taille modèle': '42 GB+', 'tok/s': '—', 'Qualité': '—', 'Adapté ?': '✗ OOM' },
          { 'Matériel': 'Dual RTX 3090 48GB', 'Quantification': 'Q4_K_M', 'Taille modèle': '42 GB', 'tok/s': '12–15', 'Qualité': 'Bonne', 'Adapté ?': '✓ Oui (complexe)' },
          { 'Matériel': 'Dual RTX 4090 48GB', 'Quantification': 'Q5_K_M', 'Taille modèle': '49 GB', 'tok/s': '18–25', 'Qualité': 'Très bonne', 'Adapté ?': '✓ Oui (3 400€+)' },
          { 'Matériel': '4× RTX 3090 96GB', 'Quantification': 'Q8_0', 'Taille modèle': '74 GB', 'tok/s': '12–16', 'Qualité': 'Sans perte', 'Adapté ?': '✓ Oui (cher)' },
        ],
        note: 'M5 Max 128GB est le seul matériel grand public qui exécute les modèles 70B sans configurations multi-GPU complexes. La configuration Mac Studio à 3 299 € remplace les rigs multi-GPU NVIDIA à 5 000–8 000 €.',
      },
      setupInstall: {
        id: 'setup',
        title: 'Configuration étape par étape : Exécuter 70B sur M5 Max 128GB',
        content: ['Étape 1 : Vérifiez votre matériel. Étape 2 : Installez et configurez Ollama. Étape 3 : Téléchargez le modèle 70B. Étape 4 : Chattez localement ou utilisez l\'API.'],
        numberedItems: [
          { title: 'Installer Ollama', whyItMatters: 'brew install ollama' },
          { title: 'Démarrer le service Ollama', whyItMatters: 'brew services start ollama' },
          { title: 'Télécharger le modèle 70B', whyItMatters: 'ollama pull llama3.1:70b-q5 (environ 30 minutes la première fois)' },
          { title: 'Démarrer le chat', whyItMatters: 'ollama run llama3.1:70b-q5' },
          { title: 'Utiliser l\'API REST (optionnel)', whyItMatters: 'curl http://localhost:11434/api/chat' },
        ],
      },
      quality: {
        id: 'quality',
        title: 'Qualité : 8B vs 70B vs GPT-5.6',
        content: ['70B est un saut de qualité. Génération de code, mathématiques, raisonnement — 70B surpasse 8B régulièrement de 10–25 points selon les benchmarks standard.'],
        items: [
          'Génération de code : 70B est 15–20% meilleur que 8B. GPT-5.6 est toujours 10% meilleur, mais l\'écart se ferme pour les tâches simples à intermédiaires.',
          'Mathématiques/GSM8K : 70B Q5 = 95,1. GPT-5.6 = 95,8. La différence est statistiquement insignifiante.',
          'Raisonnement/BBH : 70B Q5 = 85,3. 8B = 71,0. Énorme différence pour les étapes logiques et la résolution de problèmes.',
          'Contexte long : 70B comprend et mémorise beaucoup mieux les longs contextes. 8B perd le fil à 5000+ tokens.',
        ],
      },
      quantization: {
        id: 'quantization',
        title: 'Quantification en détail',
        content: ['La quantification réduit la taille du modèle et accélère l\'inférence, avec des pertes de qualité minimales.'],
        items: [
          'Q4_K_M (4-bit) : 42 GB, 15–20 tok/s, perte de qualité 3–5% vs Q8. Excellent pour le chat.',
          'Q5_K_M (5-bit) : 49 GB, 12–16 tok/s, perte de qualité 1–2%. Recommandé pour la qualité sans sacrifier la vitesse.',
          'Q8_0 (8-bit) : 74 GB, 8–12 tok/s, pratiquement sans perte. Utilisez uniquement si la qualité est critique.',
          'FP16 (16-bit) : 140 GB, 6–10 tok/s, précision complète. Seulement possible sur M5 Ultra 256GB.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Modèles alternatifs 70B+',
        items: [
          'Llama 3.3 70B : Le modèle standard. Meilleure performance globale. Recommandé.',
          'Qwen3 72B : Légèrement plus rapide que Llama 70B, meilleur pour le code. Recommandé pour les programmeurs.',
          'DeepSeek 67B : Bonne alternative, compétitif avec Llama. Recommandé si vous utilisez l\'API DeepSeek.',
          'Mixtral 8x22B : Architecture MoE (Mixture of Experts). Plus rapide, mais plus grand (ca. 50 GB Q5). Utilisez si vous voulez parler plus vite.',
          'Llama 3.3 405B (Q3) : Modèles massifs. Seulement possible sur M5 Ultra 256GB. Attendez M5 Ultra si vous en avez besoin.',
        ],
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '70B local vs APIs cloud',
        tableFormat: true,
        columns: ['Critère', '70B local (M5 Max)', 'GPT-5.6 (OpenAI)'],
        rows: [
          { 'Critère': 'Coûts initiaux', '70B local (M5 Max)': '3 299 €', 'GPT-5.6 (OpenAI)': '0 € (paliers gratuits)' },
          { 'Critère': 'Coûts mensuels', '70B local (M5 Max)': '0 € (seulement électricité ~5€)', 'GPT-5.6 (OpenAI)': '80–400 € (selon utilisation)' },
          { 'Critère': 'Retour sur investissement (mois)', '70B local (M5 Max)': '8–36 mois (utilisation intense)', 'GPT-5.6 (OpenAI)': 'N/A' },
          { 'Critère': 'Protection des données', '70B local (M5 Max)': 'Complètement local, 0 transfert', 'GPT-5.6 (OpenAI)': 'Transféré à OpenAI' },
          { 'Critère': 'Fonctionnement hors ligne', '70B local (M5 Max)': '✓ Oui', 'GPT-5.6 (OpenAI)': '✗ Non' },
          { 'Critère': 'Vitesse (TTFT)', '70B local (M5 Max)': '<2 secondes localement', 'GPT-5.6 (OpenAI)': '1–5 secondes API' },
        ],
        note: '70B local est plus économique après 8+ mois d\'utilisation régulière (50+ requêtes/jour). Pour la confidentialité/conformité CNIL, c\'est le meilleur choix.',
      },
      useCases: {
        id: 'use-cases',
        title: 'Cas d\'usage pratiques pour 70B local',
        numberedItems: [
          { title: 'Analyse documentaire entreprise', whyItMatters: 'Rapports financiers, contrats, dossiers médicaux — les données sensibles restent sur le Mac. Satisfait les exigences CNIL.' },
          { title: 'Révisions de code pour développeurs', whyItMatters: 'Llama 70B n\'est que 10% inférieur à GPT-5.6 pour le code. Analysez la base de code localement, sans envoyer le code source à OpenAI.' },
          { title: 'Recherche scientifique', whyItMatters: 'Analysez les articles, testez les hypothèses, sans accumuler les coûts API. Idéal pour la recherche itérative.' },
          { title: 'Assistant IA axé sur la confidentialité', whyItMatters: 'Analysez les journaux personnels, la planification financière, la santé — entièrement local, pas d\'accès tiers.' },
          { title: 'Workflows hors ligne', whyItMatters: 'Journalistes en régions restrictives, médecins en zones rurales sans Internet fiable, installations sécurisées sans réseau.' },
        ],
      },
      speedOpts: {
        id: 'speed-opts',
        title: 'Optimisation de vitesse : MLX vs Ollama',
        content: ['MLX est le framework ML natif d\'Apple et est 15–25% plus rapide qu\'Ollama sur le même matériel. M5 Max avec 70B Q5 : Ollama = 12–16 tok/s, MLX = 18–22 tok/s.'],
        items: [
          'Garder le modèle chaud : Définissez OLLAMA_KEEP_ALIVE=1h (24h pour Mac mini toujours allumé) — évitez 30–60 secondes de surcharge de rechargement par requête.',
          'Utiliser le streaming : Les utilisateurs voient le premier token en 1–2 secondes au lieu d\'attendre 25–40 secondes la réponse complète.',
          'Réduire max_tokens : Si 200 mots suffisent, définissez max_tokens=200. À 14 tok/s : 200 tokens = 14 secondes, 500 tokens = 36 secondes.',
          'Compromis vitesse Q4 vs Q5 : Q4 = 15–20 tok/s (25% plus rapide que Q5). La plupart des tâches ont 2–3% de différence de qualité. Q4 pour le chat, Q5 pour le raisonnement.',
          'Éviter les applications gourmandes en GPU pendant l\'inférence — Activity Monitor montre si d\'autres processus rivalisent pour la bande passante Metal.',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'Aperçu M5 Ultra : Niveau de performance suivant (attendu mi-2026)',
        content: ['Basé sur le modèle Ultra historique d\'Apple (2× spécifications Max), M5 Ultra devrait avoir : 256GB de mémoire unifiée, ca. 1 200 GB/s de bande passante, ca. 80 cœurs GPU. Disponible uniquement dans Mac Studio Ultra.'],
        tableFormat: true,
        columns: ['Modèle', 'M5 Max 128GB', 'M5 Ultra 256GB (projeté)'],
        rows: [
          { 'Modèle': 'Llama 3.3 70B Q5', 'M5 Max 128GB': '12–16 tok/s', 'M5 Ultra 256GB (projeté)': '24–32 tok/s' },
          { 'Modèle': 'Llama 3.3 70B Q8', 'M5 Max 128GB': '8–12 tok/s', 'M5 Ultra 256GB (projeté)': '16–24 tok/s' },
          { 'Modèle': 'Llama 3.3 70B FP16 (sans perte)', 'M5 Max 128GB': '✗ N\'adapte pas', 'M5 Ultra 256GB (projeté)': '14–18 tok/s' },
          { 'Modèle': 'Qwen3 72B Q8', 'M5 Max 128GB': '8–12 tok/s', 'M5 Ultra 256GB (projeté)': '16–24 tok/s' },
          { 'Modèle': 'Mixtral 8x22B Q5', 'M5 Max 128GB': '14–18 tok/s', 'M5 Ultra 256GB (projeté)': '28–36 tok/s' },
          { 'Modèle': 'Llama 3.3 405B Q3', 'M5 Max 128GB': '✗ N\'adapte pas', 'M5 Ultra 256GB (projeté)': '4–6 tok/s' },
          { 'Modèle': 'Llama 3.3 405B Q4 (ca. 200GB)', 'M5 Max 128GB': '✗ N\'adapte pas', 'M5 Ultra 256GB (projeté)': '3–5 tok/s' },
        ],
        note: 'M5 Ultra déverrouille : (1) 70B FP16 sans perte — première matériel grand public. (2) Modèles 405B paramètres. (3) Deux modèles 70B en parallèle. Prix estimé : 3 999–4 999 € (Mac Studio Ultra). Attendre si : Besoin de modèles 405B, 70B FP16 souhaité, ou propriétaire M3/M4 Max.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '70B Q4 est-il assez bon pour la plupart des tâches ?', a: 'Oui. Q4 est la quantification standard industrielle. Par rapport à Q5 environ 3–5% de différence de qualité, imperceptible pour la plupart des chats, écriture et tâches générales. Utilisez Q5 ou Q8 uniquement pour la qualité critique (analyse juridique, révision de code, usage médical).' },
          { q: 'Puis-je exécuter deux modèles 70B simultanément sur M5 Max 128GB ?', a: 'Oui, mais combiné avec un modèle plus petit. 70B Q5 = 49 GB. 128 GB moins 8 GB système = 120 GB disponibles. 70B Q5 (49 GB) + modèle 7–8B (5 GB) = 54 GB, entièrement dans le budget. Deux modèles 70B parallèles nécessitent M5 Ultra 256 GB.' },
          { q: 'Devrais-je acheter M5 Max maintenant ou attendre M5 Ultra ?', a: 'Attendre M5 Ultra si : (1) Vous avez besoin de 70B FP16 (qualité sans perte), (2) Vous avez besoin de modèles 405B, ou (3) Vous possédez déjà M3 Max ou M4 Max (sauter M5 Max). Acheter M5 Max maintenant si : Vous avez besoin de 70B aujourd\'hui et le budget est sous 3 500 €.' },
          { q: 'Combien plus rapide 70B sur M5 Ultra vs M5 Max ?', a: 'Environ 2× plus rapide, basé sur bande passante mémoire doublée (ca. 1 200 GB/s vs 614 GB/s). M5 Max : 70B Q5 = 12–16 tok/s ; M5 Ultra attendu : 24–32 tok/s. M5 Ultra peut aussi exécuter 70B FP16 (sans perte), ce que M5 Max ne peut pas adapter.' },
          { q: 'Puis-je avoir deux modèles 70B simultanément sur M5 Max 128GB ?', a: 'Non, deux modèles 70B complets ne sont pas possibles. Deux 70B Q4 = 84 GB plus système = ca. 95 GB, serré sur 128 GB. M5 Ultra 256 GB peut exécuter deux 70B simultanément ou un 70B + un 34B.' },
          { q: 'Combien d\'espace disque nécessitent les modèles 70B ?', a: 'Chaque modèle 70B nécessite 42 GB (Q4), 49 GB (Q5) ou 74 GB (Q8) sur disque. Stocker les trois quantifications d\'un modèle : 165 GB. Pour le travail professionnel avec plusieurs modèles 70B, Mac Studio avec 1 TB ou 2 TB SSD est recommandé.' },
          { q: '70B local exécuté est-il vraiment aussi bon que GPT-5.6 pour mon cas d\'usage spécifique ?', a: '70B Q5 = 86,1 sur MMLU, GPT-5.6 = 88,7 — écart de benchmark 3%. Pour le travail axé sur la confidentialité, utilisation haute fréquence (50€+/mois) ou hors ligne, local gagne automatiquement. Testez avec vos propres invites et vérifiez que ça correspond à votre flux de travail.' },
          { q: 'Les nouveaux modèles 70B (Llama 4, etc.) fonctionneront-ils sur M5 Max ?', a: 'Oui. M5 Max 128 GB peut exécuter des modèles 70B de n\'importe quelle architecture en quantification Q4/Q5/Q8. Les nouvelles versions 70B (Llama 4, Qwen3, etc.) apparaissent normalement quelques jours après la sortie sur Ollama. Utilisez simplement ollama pull avec le nouveau nom de modèle.' },
          { q: 'Dois-je respecter la CNIL en utilisant 70B local sur M5 Max ?', a: 'Oui et non. L\'inférence locale satisfait les exigences de résidence des données et de traitement des données (CNIL/RGPD). Le modèle lui-même doit être sous licence open-source (Llama est MIT, Qwen est Apache 2.0 — tous deux conformes). L\'avantage principal : toutes les données sensibles restent sur l\'appareil, la conformité est garantie automatiquement.' },
          { q: 'Quel est le coût comparé aux APIs GPT-5.6 mensuelles pour une équipe de 5–15 personnes ?', a: 'Très économique. Investissement initial : 3 299 € pour Mac Studio M5 Max. Coûts API mensuels pour 10 personnes avec utilisation intense : ca. 1 000–4 000 €/mois. Retour sur investissement en 1–3 mois avec 50+ requêtes/personne/jour. Après le retour : 0 € coûts supplémentaires (seulement électricité ~5€/mois), tandis que la protection des données (CNIL conforme) est garantie.' },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: 'Articles associés',
        items: [
          '[Apple Silicon pour LLMs locaux : Guide complet](/fr/local-llms/apple-silicon-local-llm-guide-2026) — Comparaison M1 à M5 Max, explication mémoire unifiée',
          '[Benchmarks LLM M5 Pro vs M5 Max 2026](/fr/local-llms/m5-pro-max-llm-benchmarks-2026) — Données tok/s détaillées pour toutes les tailles de modèle',
          '[Combien de mémoire unifiée pour LLMs locaux ?](/fr/local-llms/how-much-unified-memory-for-local-llm) — Guide 16GB vs 36GB vs 64GB vs 128GB',
          '[Meilleurs modèles LLM pour Apple Silicon](/fr/local-llms/best-models-apple-silicon-2026) — Recommandations de modèles par configuration Mac',
          '[MLX vs Ollama vs llama.cpp sur Mac](/fr/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — Comparaison vitesse framework et configuration',
          '[Apple Silicon vs GPU NVIDIA pour LLMs locaux](/fr/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Comparaison matériel cross-platform',
          '[Quantification LLM expliquée](/fr/local-llms/llm-quantization-explained) — Approfondissement Q4/Q5/Q8/FP16',
          '[Mac Mini M5 comme serveur IA local](/fr/local-llms/mac-mini-m5-local-ai-server) — Configuration serveur inférence always-on',
          '[Meilleur modèle de raisonnement local 2026 : DeepSeek-R1 classé](/fr/local-llms/best-local-reasoning-model-deepseek-r1-2026) — Distill de raisonnement 70B pour ce matériel : benchmarks, configuration Ollama et performances sur M5 Max.',
          '[Antisèche VRAM pour DeepSeek-R1 Distill](/fr/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — VRAM exact par taille de distill (Q4_K_M) : 70B → 42 Go — confirmez que votre M5 Max est compatible.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    theme: 'Hardware & Performance',
    title: 'Apple Silicon 2026で70B以上のモデルを動かす：M5 Max完全ガイド',
    seoTitle: 'M5 Max 128GBで70Bモデル実行：12～20 tok/s、GPT-5.6品質',
    intro: 'Apple Silicon M5 Max（128GB）でローカルに70B以上のLLMを実行します。OllamaとMLXを使った完全セットアップガイド、量子化比較（Q4/Q5/Q8）、8B対70Bの品質ベンチマーク、実際のtok/s数値、70B対クラウドAPIのコスト分析、代替70B+モデル、速度最適化、2026年のM5 Ultraの予測。',
    metaDescription: 'M5 Max 128GBで70Bモデルを12～20 tok/sで実行。Q5品質はGPT-5.6と3%以内。完全セットアップ、Ollama/MLX、量子化ガイド、ベンチマーク。',
    twitterDescription: 'M5 Max 128GBで70B LLM：12〜20 tok/s、Q4〜Q8、クラウド品質との差3%以内、月額0円。完全セットアップ＋ベンチマークガイド。',
    publishDate: '2026-05-15',
    dateModified: '2026-07-13',
    current_models_mentioned: ['Llama 3.3 70B', 'Qwen3 72B', 'DeepSeek 67B', 'Mixtral 8x22B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'M5 Maxの所有者および購入検討者で、クラウドAPIを使わずに最高品質のローカルLLMを求めている方',
    readTime: '16分で読める',
    educationalLevel: 'Advanced',
    primaryTerm: '70BモデルApple Silicon',
    targetKeywords: ['70BモデルMac', 'M5 Max 128GB LLM', '70Bローカル実行', 'Llama 70B Apple Silicon', '大規模モデルローカル推論'],
    ctaText: 'M5 MaxでLlama 3.3 70Bをローカル実行中ですか？PromptQuorumを使って、GPT-5.6、Claude Sonnet 5、Gemini 3.5 Proなど22以上のクラウドモデルと自分のローカル回答を比較しましょう。4,000ドルのハードウェア投資が、推論・コーディング・ライティングのタスクでクラウド品質に達しているか検証できます。すべて1回のディスパッチで。',
    leadAnswerBlock: '**M5 Max 128GBはLlama 3.3 70Bを15〜20 tok/s（Q4_K_M）または12〜16 tok/s（Q5_K_M）で実行します。70B Q5のMMLUスコアは86.1で、GPT-5.6（88.7）との差はわずか3%。月額0円でローカル動作します。複雑なマルチGPU構成なしに70Bが動く唯一のコンシューマーハードウェアです。Ollamaを使えば10分未満でセットアップできます。**',
    quickAnswerTop: {
      en: {
        question: 'Can I run 70B models on M5 Max 128GB?',
        answer: 'Yes. Llama 3.3 70B Q5_K_M runs at 12–16 tok/s. Q4_K_M at 15–20 tok/s. Q8_0 at 8–12 tok/s (lossless quality). All fit in 128GB unified memory. Setup is 10 minutes with Ollama. 70B Q5 matches GPT-5.6 quality within 3% on standard benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, good quality',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, very good (recommended)',
          '70B Q8_0: 74 GB, 8–12 tok/s, lossless quality',
          'Only consumer option without multi-GPU complexity',
          'MMLU: 70B Q5 = 86.1 vs GPT-5.6 = 88.7 (3% gap)',
          'Setup: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      de: {
        question: 'Kann ich 70B-Modelle auf dem M5 Max 128 GB ausführen?',
        answer: 'Ja. Llama 3.3 70B Q5_K_M läuft mit 12–16 tok/s. Q4_K_M mit 15–20 tok/s. Q8_0 mit 8–12 tok/s (verlustfreie Qualität). Alle passen in den 128-GB-Unified-Memory. Die Einrichtung dauert 10 Minuten mit Ollama. 70B Q5 erreicht innerhalb von 3 % die GPT-5.6-Qualität bei Standard-Benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, gute Qualität',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, sehr gut (empfohlen)',
          '70B Q8_0: 74 GB, 8–12 tok/s, verlustfreie Qualität',
          'Einzige Consumer-Option ohne komplexe Multi-GPU-Konfiguration',
          'MMLU: 70B Q5 = 86,1 vs GPT-5.6 = 88,7 (3 % Unterschied)',
          'Einrichtung: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      fr: {
        question: 'Puis-je exécuter des modèles 70B sur M5 Max 128 Go ?',
        answer: 'Oui. Llama 3.3 70B Q5_K_M tourne à 12–16 tok/s. Q4_K_M à 15–20 tok/s. Q8_0 à 8–12 tok/s (qualité sans perte). Tous tiennent dans les 128 Go de mémoire unifiée. La configuration prend 10 minutes avec Ollama. Le 70B Q5 correspond à la qualité de GPT-5.6 à 3 % près sur les benchmarks standards.',
        bullets: [
          '70B Q4_K_M : 42 Go, 15–20 tok/s, bonne qualité',
          '70B Q5_K_M : 49 Go, 12–16 tok/s, très bonne (recommandé)',
          '70B Q8_0 : 74 Go, 8–12 tok/s, qualité sans perte',
          'Seule option grand public sans complexité multi-GPU',
          'MMLU : 70B Q5 = 86,1 vs GPT-5.6 = 88,7 (écart de 3 %)',
          'Configuration : brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      ja: {
        question: 'M5 Max 128GBで70Bモデルを実行できますか？',
        answer: 'はい。Llama 3.3 70B Q5_K_Mは12〜16 tok/sで動作します。Q4_K_Mは15〜20 tok/s、Q8_0は8〜12 tok/s（ロスレス品質）。すべて128GBのユニファイドメモリに収まります。Ollamaを使えば10分でセットアップ完了。70B Q5の品質はGPT-5.6の3%以内です。',
        bullets: [
          '70B Q4_K_M：42GB、15〜20 tok/s、良好な品質',
          '70B Q5_K_M：49GB、12〜16 tok/s、非常に良い（推奨）',
          '70B Q8_0：74GB、8〜12 tok/s、ロスレス品質',
          'マルチGPU構成不要な唯一のコンシューマー選択肢',
          'MMLU：70B Q5 = 86.1 vs GPT-5.6 = 88.7（3%差）',
          'セットアップ：brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-06-19' },
    },
    toc: [
      { label: '70Bが重要な理由', anchor: '#why' },
      { label: 'ハードウェア要件', anchor: '#hardware' },
      { label: 'ステップバイステップセットアップ', anchor: '#setup' },
      { label: '品質比較：8B vs 70B vs GPT-5.6', anchor: '#quality' },
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
        columns: ['ベンチマーク', 'Llama 3.3 8B', 'Llama 3.3 70B Q5', 'GPT-5.6'],
        rows: [
          { 'ベンチマーク': 'MMLU（一般知識）', 'Llama 3.3 8B': '73.0', 'Llama 3.3 70B Q5': '86.1', 'GPT-5.6': '88.7' },
          { 'ベンチマーク': 'HumanEval（コード）', 'Llama 3.3 8B': '72.6', 'Llama 3.3 70B Q5': '80.5', 'GPT-5.6': '90.2' },
          { 'ベンチマーク': 'GSM8K（数学）', 'Llama 3.3 8B': '84.5', 'Llama 3.3 70B Q5': '95.1', 'GPT-5.6': '95.8' },
          { 'ベンチマーク': 'BBH（推論）', 'Llama 3.3 8B': '71.0', 'Llama 3.3 70B Q5': '85.3', 'GPT-5.6': '88.9' },
          { 'ベンチマーク': '平均', 'Llama 3.3 8B': '75.3', 'Llama 3.3 70B Q5': '86.8', 'GPT-5.6': '90.9' },
        ],
        note: '70B Q5は、8BとGPT-5.6の品質差の75%を埋めます。そして月額0円でローカル動作します。',
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
        title: '品質比較：8B vs 70B vs GPT-5.6',
        content: [
          'プロンプト：「再帰関数でスタックオーバーフローが発生する理由を説明し、クラッシュする前に無限再帰を検出するPython関数を書いてください。」',
          'Llama 3.3 8B Q4の回答（16GB以上のMacなら動作）：',
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
        title: 'Llama 3.3 70B Q5の回答（M5 Max 128GB）',
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
        note: '正確：デコレーターパターン、深さの追跡、クラッシュ前のプロアクティブな検出、設定可能な閾値。GPT-5.6はわずかにエレガントなエラーハンドリングを追加します。実際の品質差は3%程度です。',
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
          { 'モデル': 'Llama 3.3 70B Instruct', 'サイズ（Q5）': '49 GB', '最適な用途': '汎用、推論', 'M5 Max上のtok/s': '12〜16' },
          { 'モデル': 'Qwen3 72B Instruct', 'サイズ（Q5）': '51 GB', '最適な用途': '多言語、数学、コード', 'M5 Max上のtok/s': '11〜15' },
          { 'モデル': 'DeepSeek 67B', 'サイズ（Q5）': '47 GB', '最適な用途': 'コーディング特化', 'M5 Max上のtok/s': '12〜16' },
          { 'モデル': 'Llama 3.3 70B Coder', 'サイズ（Q5）': '49 GB', '最適な用途': 'コーディング専用タスク', 'M5 Max上のtok/s': '13〜17' },
          { 'モデル': 'Mixtral 8x22B (MoE)', 'サイズ（Q4）': '88 GB', '最適な用途': '高品質な推論', 'M5 Max上のtok/s': '18〜22' },
          { 'モデル': 'Cohere Command A+ 104B', 'サイズ（Q4）': '73 GB', '最適な用途': 'RAG、128Kコンテキスト', 'M5 Max上のtok/s': '8〜12' },
        ],
        note: 'ユースケース別推奨：汎用推論 → Llama 3.3 70B Q5。コード → DeepSeek 67B。英語以外 → Qwen3 72B。文書Q&A → Command A+。最大速度 → Mixtral 8x22B（MoEはアクティブパラメーター数が少ない）。',
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
        columns: ['指標', '70B Q5ローカル（M5 Max）', 'GPT-5.6 API', 'Claude Sonnet 5', 'Gemini 3.5 Pro'],
        rows: [
          { '指標': '品質（MMLU）', '70B Q5ローカル（M5 Max）': '86.1', 'GPT-5.6 API': '88.7', 'Claude Sonnet 5': '88.7', 'Gemini 3.5 Pro': '85.9' },
          { '指標': '速度（tok/s）', '70B Q5ローカル（M5 Max）': '12〜16', 'GPT-5.6 API': '50〜80', 'Claude Sonnet 5': '50〜80', 'Gemini 3.5 Pro': '60〜100' },
          { '指標': '最初のトークン遅延', '70B Q5ローカル（M5 Max）': '1〜2秒', 'GPT-5.6 API': '0.3〜0.8秒', 'Claude Sonnet 5': '0.4〜0.9秒', 'Gemini 3.5 Pro': '0.5〜1秒' },
          { '指標': '1Mトークンあたりのコスト', '70B Q5ローカル（M5 Max）': '$0', 'GPT-5.6 API': '$2.50/$10.00', 'Claude Sonnet 5': '$3.00/$15.00', 'Gemini 3.5 Pro': '$1.25/$5.00' },
          { '指標': 'コスト/月（5Mトークン）', '70B Q5ローカル（M5 Max）': '$0', 'GPT-5.6 API': '$50〜150', 'Claude Sonnet 5': '$75〜200', 'Gemini 3.5 Pro': '$30〜80' },
          { '指標': 'プライバシー', '70B Q5ローカル（M5 Max）': '100%ローカル', 'GPT-5.6 API': 'OpenAIに送信', 'Claude Sonnet 5': 'Anthropicに送信', 'Gemini 3.5 Pro': 'Googleに送信' },
          { '指標': 'インターネット必須', '70B Q5ローカル（M5 Max）': 'いいえ', 'GPT-5.6 API': 'はい', 'Claude Sonnet 5': 'はい', 'Gemini 3.5 Pro': 'はい' },
          { '指標': 'レート制限', '70B Q5ローカル（M5 Max）': 'なし', 'GPT-5.6 API': 'ティアベース', 'Claude Sonnet 5': 'ティアベース', 'Gemini 3.5 Pro': 'ティアベース' },
          { '指標': 'カスタマイズ', '70B Q5ローカル（M5 Max）': '完全（ローカルファインチューニング）', 'GPT-5.6 API': '限定的', 'Claude Sonnet 5': '限定的', 'Gemini 3.5 Pro': '限定的' },
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
          { 'モデル': 'Llama 3.3 70B Q5', 'M5 Max 128GB': '12〜16 tok/s', 'M5 Ultra 256GB（予測）': '24〜32 tok/s' },
          { 'モデル': 'Llama 3.3 70B Q8', 'M5 Max 128GB': '8〜12 tok/s', 'M5 Ultra 256GB（予測）': '16〜24 tok/s' },
          { 'モデル': 'Llama 3.3 70B FP16（ロスレス）', 'M5 Max 128GB': '✗ 収まらない', 'M5 Ultra 256GB（予測）': '14〜18 tok/s' },
          { 'モデル': 'Qwen3 72B Q8', 'M5 Max 128GB': '8〜12 tok/s', 'M5 Ultra 256GB（予測）': '16〜24 tok/s' },
          { 'モデル': 'Mixtral 8x22B Q5', 'M5 Max 128GB': '14〜18 tok/s', 'M5 Ultra 256GB（予測）': '28〜36 tok/s' },
          { 'モデル': 'Llama 3.3 405B Q3', 'M5 Max 128GB': '✗ 収まらない', 'M5 Ultra 256GB（予測）': '4〜6 tok/s' },
          { 'モデル': 'Llama 3.3 405B Q4（約200GB）', 'M5 Max 128GB': '✗ 収まらない', 'M5 Ultra 256GB（予測）': '3〜5 tok/s' },
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
          { q: 'ローカルで動く70BはGPT-5.6と比べて私のユースケースで実際に同等ですか？', a: '70B Q5はMMLUで86.1、GPT-5.6は88.7 — ベンチマーク上の差は3%。プライバシーが重要な作業、高頻度利用（月$50以上）、またはオフライン利用ではローカルが自動的に勝ちます。自分のワークフローで検証するために自分のプロンプトでテストしてください。' },
          { q: 'Llama 4や新しい70Bモデルはまた動作しますか？', a: 'はい。M5 Max 128 GBはアーキテクチャを問わず、Q4/Q5/Q8量子化のすべての70Bモデルに対応します。新しい70Bリリース（Llama 4、Qwen3など）は通常リリースから数日以内にOllamaに登場します。新しいモデル名でollama pullを実行してください。' },
          { q: 'ローカルLLMは日本の個人情報保護法に対応していますか？', a: 'はい。すべてのデータはデバイス上でローカルに処理され、外部サーバーには送信されないため、個人情報保護法の第三者提供制限（第23条）に該当しません。医療・法務・金融分野での業務利用では、ローカル処理が最も確実なコンプライアンス対策となります。' },
          { q: 'M5 MaxはAIスタートアップや個人開発者にコスト的に見合いますか？', a: 'はい。クラウドAPIに月$50〜200以上使う場合、Mac Studio M5 Max（約600,000円）は3〜12ヶ月で元が取れます。コードと知的財産が社外に出ないこと、レート制限がないこと、ネット不要なことも加味すると、多くの日本のスタートアップにとって理にかなった選択です。' },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: '関連記事',
        items: [
          '[Apple Siliconでローカルに動かすLLM：完全ガイド](/ja/local-llms/apple-silicon-local-llm-guide-2026) — M1からM5 Maxの比較、ユニファイドメモリの解説',
          '[M5 Pro対M5 Max LLMベンチマーク2026](/ja/local-llms/m5-pro-max-llm-benchmarks-2026) — モデルサイズ別の詳細tok/s数値',
          '[ローカルLLMに必要なユニファイドメモリ量は？](/ja/local-llms/how-much-unified-memory-for-local-llm) — 16GB対36GB対64GB対128GBガイド',
          '[Apple Silicon向け最良のLLMモデル](/ja/local-llms/best-models-apple-silicon-2026) — Mac構成別のモデル推奨',
          '[Mac上のMLX対Ollama対llama.cpp](/ja/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — フレームワーク速度比較とセットアップガイド',
          '[Apple Silicon対NVIDIA GPUでローカルLLM](/ja/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — クロスプラットフォームハードウェア比較',
          '[LLM量子化の解説](/ja/local-llms/llm-quantization-explained) — Q4/Q5/Q8/FP16の詳細',
          '[Mac Mini M5をローカルAIサーバーとして使う](/ja/local-llms/mac-mini-m5-local-ai-server) — 常時起動の推論サーバー構築',
          '[2026年最高のローカル推論モデル：DeepSeek-R1 Distillランキング](/ja/local-llms/best-local-reasoning-model-deepseek-r1-2026) — このハードウェアの70B推論Distill：M5 MaxでのベンチマークとOllamaセットアップ。',
          '[DeepSeek-R1 Distill VRAMチートシート](/ja/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — Distillサイズ別VRAM目安（Q4_K_M）：70B → 42 GB — M5 Maxに収まるか確認。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    theme: 'Hardware & Performance',
    title: '在Apple Silicon上运行70B+模型2026：M5 Max完整指南',
    seoTitle: 'M5 Max 128GB运行70B模型：12～20 tok/s，GPT-5.6级质量',
    intro: '在Apple Silicon M5 Max（128GB）上本地运行70B及更大的LLM。包含Ollama和MLX的完整配置指南、量化对比（Q4/Q5/Q8）、8B对70B质量基准测试、实际tok/s数据、70B对云端API成本分析、替代70B+模型、速度优化和2026年M5 Ultra预测。',
    metaDescription: 'M5 Max 128GB运行70B模型12～20 tok/s。Q5质量与GPT-5.6相当（3%误差内）。完整配置、Ollama/MLX、量化指南、性能基准。',
    twitterDescription: 'M5 Max 128GB运行70B LLM：12–20 tok/s，Q4–Q8，云端质量差距3%以内，每月0元。完整配置+基准测试指南。',
    publishDate: '2026-05-15',
    dateModified: '2026-07-13',
    current_models_mentioned: ['Llama 3.3 70B', 'Qwen3 72B', 'DeepSeek 67B', 'Mixtral 8x22B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: 'M5 Max用户和潜在购买者，希望不依赖云端API实现最高质量本地LLM推理',
    readTime: '16分钟阅读',
    educationalLevel: 'Advanced',
    primaryTerm: '70B模型Apple Silicon',
    targetKeywords: ['70B模型Mac', 'M5 Max 128GB LLM', '本地运行70B', 'Llama 70B Apple Silicon', '大模型本地推理'],
    ctaText: '正在M5 Max上本地运行Llama 3.3 70B？使用PromptQuorum将您的本地回答与GPT-5.6、Claude Sonnet 5、Gemini 3.5 Pro等22个以上云端模型对比——验证您的硬件投资是否在推理、编程和写作任务上达到云端质量。一次分发，全部搞定。',
    leadAnswerBlock: '**M5 Max 128GB运行Llama 3.3 70B的速度为15–20 tok/s（Q4_K_M）或12–16 tok/s（Q5_K_M）。70B Q5在MMLU上得分86.1，与GPT-5.6（88.7）的差距仅3%，每月运行成本为0元。这是唯一无需复杂多GPU配置即可运行70B的消费级硬件。使用Ollama，10分钟内即可完成配置。**',
    quickAnswerTop: {
      en: {
        question: 'Can I run 70B models on M5 Max 128GB?',
        answer: 'Yes. Llama 3.3 70B Q5_K_M runs at 12–16 tok/s. Q4_K_M at 15–20 tok/s. Q8_0 at 8–12 tok/s (lossless quality). All fit in 128GB unified memory. Setup is 10 minutes with Ollama. 70B Q5 matches GPT-5.6 quality within 3% on standard benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, good quality',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, very good (recommended)',
          '70B Q8_0: 74 GB, 8–12 tok/s, lossless quality',
          'Only consumer option without multi-GPU complexity',
          'MMLU: 70B Q5 = 86.1 vs GPT-5.6 = 88.7 (3% gap)',
          'Setup: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      de: {
        question: 'Kann ich 70B-Modelle auf dem M5 Max 128 GB ausführen?',
        answer: 'Ja. Llama 3.3 70B Q5_K_M läuft mit 12–16 tok/s. Q4_K_M mit 15–20 tok/s. Q8_0 mit 8–12 tok/s (verlustfreie Qualität). Alle passen in den 128-GB-Unified-Memory. Die Einrichtung dauert 10 Minuten mit Ollama. 70B Q5 erreicht innerhalb von 3 % die GPT-5.6-Qualität bei Standard-Benchmarks.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, gute Qualität',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, sehr gut (empfohlen)',
          '70B Q8_0: 74 GB, 8–12 tok/s, verlustfreie Qualität',
          'Einzige Consumer-Option ohne komplexe Multi-GPU-Konfiguration',
          'MMLU: 70B Q5 = 86,1 vs GPT-5.6 = 88,7 (3 % Unterschied)',
          'Einrichtung: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      fr: {
        question: 'Puis-je exécuter des modèles 70B sur M5 Max 128 Go ?',
        answer: 'Oui. Llama 3.3 70B Q5_K_M tourne à 12–16 tok/s. Q4_K_M à 15–20 tok/s. Q8_0 à 8–12 tok/s (qualité sans perte). Tous tiennent dans les 128 Go de mémoire unifiée. La configuration prend 10 minutes avec Ollama. Le 70B Q5 correspond à la qualité de GPT-5.6 à 3 % près sur les benchmarks standards.',
        bullets: [
          '70B Q4_K_M : 42 Go, 15–20 tok/s, bonne qualité',
          '70B Q5_K_M : 49 Go, 12–16 tok/s, très bonne (recommandé)',
          '70B Q8_0 : 74 Go, 8–12 tok/s, qualité sans perte',
          'Seule option grand public sans complexité multi-GPU',
          'MMLU : 70B Q5 = 86,1 vs GPT-5.6 = 88,7 (écart de 3 %)',
          'Configuration : brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      ja: {
        question: 'M5 Max 128GBで70Bモデルを実行できますか？',
        answer: 'はい。Llama 3.3 70B Q5_K_Mは12〜16 tok/sで動作します。Q4_K_Mは15〜20 tok/s、Q8_0は8〜12 tok/s（ロスレス品質）。すべて128GBのユニファイドメモリに収まります。Ollamaを使えば10分でセットアップ完了。70B Q5の品質はGPT-5.6の3%以内です。',
        bullets: [
          '70B Q4_K_M：42GB、15〜20 tok/s、良好な品質',
          '70B Q5_K_M：49GB、12〜16 tok/s、非常に良い（推奨）',
          '70B Q8_0：74GB、8〜12 tok/s、ロスレス品質',
          'マルチGPU構成不要な唯一のコンシューマー選択肢',
          'MMLU：70B Q5 = 86.1 vs GPT-5.6 = 88.7（3%差）',
          'セットアップ：brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
      zh: {
        question: '我可以在M5 Max 128GB上运行70B模型吗？',
        answer: '可以。Llama 3.3 70B Q5_K_M运行速度为12–16 tok/s。Q4_K_M为15–20 tok/s。Q8_0为8–12 tok/s（无损质量）。所有版本都能装入128GB统一内存。使用Ollama配置仅需10分钟。70B Q5质量与GPT-5.6相差3%以内。',
        bullets: [
          '70B Q4_K_M：42 GB，15–20 tok/s，质量良好',
          '70B Q5_K_M：49 GB，12–16 tok/s，非常好（推荐）',
          '70B Q8_0：74 GB，8–12 tok/s，无损质量',
          '无需多GPU复杂配置的唯一消费级选择',
          'MMLU：70B Q5 = 86.1，GPT-5.6 = 88.7（差距3%）',
          '配置命令：brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
    },
    toc: [
      { label: '70B为何重要', anchor: '#why' },
      { label: '硬件需求', anchor: '#hardware' },
      { label: '分步配置教程', anchor: '#setup' },
      { label: '质量对比：8B vs 70B vs GPT-5.6', anchor: '#quality' },
      { label: '量化深度解析', anchor: '#quantization' },
      { label: '替代70B+模型', anchor: '#alternatives' },
      { label: '70B本地 vs 云端API', anchor: '#vs-cloud' },
      { label: '实用场景', anchor: '#use-cases' },
      { label: '速度优化', anchor: '#speed-opts' },
      { label: 'M5 Ultra预览', anchor: '#m5ultra' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关文章', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: '70B为何重要：相比8B的质量飞跃',
        content: ['从8B到70B参数的跨越是本地AI中最重要的质量分水岭。行业基准测试分数：'],
        tableFormat: true,
        columns: ['基准测试', 'Llama 3.3 8B', 'Llama 3.3 70B Q5', 'GPT-5.6'],
        rows: [
          { '基准测试': 'MMLU（通用知识）', 'Llama 3.3 8B': '73.0', 'Llama 3.3 70B Q5': '86.1', 'GPT-5.6': '88.7' },
          { '基准测试': 'HumanEval（代码）', 'Llama 3.3 8B': '72.6', 'Llama 3.3 70B Q5': '80.5', 'GPT-5.6': '90.2' },
          { '基准测试': 'GSM8K（数学）', 'Llama 3.3 8B': '84.5', 'Llama 3.3 70B Q5': '95.1', 'GPT-5.6': '95.8' },
          { '基准测试': 'BBH（推理）', 'Llama 3.3 8B': '71.0', 'Llama 3.3 70B Q5': '85.3', 'GPT-5.6': '88.9' },
          { '基准测试': '平均分', 'Llama 3.3 8B': '75.3', 'Llama 3.3 70B Q5': '86.8', 'GPT-5.6': '90.9' },
        ],
        note: '70B Q5弥合了8B与GPT-5.6之间75%的质量差距——同时以每月0元的成本在本地运行。',
      },
      hardware: {
        id: 'hardware',
        title: '哪些硬件可以运行70B模型',
        tableFormat: true,
        columns: ['硬件', '量化方式', '模型大小', 'tok/s', '质量', '是否兼容？'],
        rows: [
          { '硬件': 'M3 Max 96GB', '量化方式': 'Q4_K_M', '模型大小': '42 GB', 'tok/s': '9–13', '质量': '良好', '是否兼容？': '✓ 是' },
          { '硬件': 'M3 Max 128GB', '量化方式': 'Q5_K_M', '模型大小': '49 GB', 'tok/s': '8–12', '质量': '非常好', '是否兼容？': '✓ 是' },
          { '硬件': 'M4 Max 128GB', '量化方式': 'Q5_K_M', '模型大小': '49 GB', 'tok/s': '10–14', '质量': '非常好', '是否兼容？': '✓ 是' },
          { '硬件': 'M5 Max 128GB', '量化方式': 'Q4_K_M', '模型大小': '42 GB', 'tok/s': '15–20', '质量': '良好', '是否兼容？': '✓ 是' },
          { '硬件': 'M5 Max 128GB', '量化方式': 'Q5_K_M', '模型大小': '49 GB', 'tok/s': '12–16', '质量': '非常好', '是否兼容？': '✓ 是' },
          { '硬件': 'M5 Max 128GB', '量化方式': 'Q8_0', '模型大小': '74 GB', 'tok/s': '8–12', '质量': '无损', '是否兼容？': '✓ 是' },
          { '硬件': 'M5 Ultra 256GB（预测）', '量化方式': 'FP16', '模型大小': '140 GB', 'tok/s': '14–18', '质量': '完美', '是否兼容？': '✓ 是' },
          { '硬件': 'RTX 4090 24GB', '量化方式': 'Any', '模型大小': '42 GB+', 'tok/s': '—', '质量': '—', '是否兼容？': '✗ 内存溢出' },
          { '硬件': '双路 RTX 3090 48GB', '量化方式': 'Q4_K_M', '模型大小': '42 GB', 'tok/s': '12–15', '质量': '良好', '是否兼容？': '✓ 是（复杂）' },
          { '硬件': '双路 RTX 4090 48GB', '量化方式': 'Q5_K_M', '模型大小': '49 GB', 'tok/s': '18–25', '质量': '非常好', '是否兼容？': '✓ 是（5000美元+）' },
          { '硬件': '4× RTX 3090 96GB', '量化方式': 'Q8_0', '模型大小': '74 GB', 'tok/s': '12–16', '质量': '无损', '是否兼容？': '✓ 是（昂贵）' },
        ],
        note: 'M5 Max 128GB是唯一无需复杂多GPU配置即可运行70B模型的消费级硬件。约27,000元的Mac Studio配置可替代需要35,000–55,000元的英伟达多GPU方案。',
      },
      setupInstall: {
        id: 'setup',
        title: '分步教程：在M5 Max 128GB上运行70B',
        content: ['第1步：确认硬件。第2步：安装并配置Ollama。'],
        codeBlock: `# 第1步：验证统一内存（必须显示128 GB）
system_profiler SPHardwareDataType | grep Memory
# → Memory: 128 GB

# 第2步：安装Ollama
brew install ollama
brew services start ollama

# 第3步：针对70B进行配置（保持模型加载，避免每次60秒预热）
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
echo 'export OLLAMA_NUM_PARALLEL=1' >> ~/.zshrc
source ~/.zshrc
brew services restart ollama`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: '第3步：下载70B模型',
        content: ['100 Mbps下的下载时间：45–90分钟。1 Gbps时：5–10分钟。'],
        codeBlock: `# 推荐：Q5_K_M — 最佳质量/速度平衡（49 GB下载）
ollama pull llama3.1:70b-instruct-q5_K_M

# 备选：Q4 — 最快速度，42 GB下载
ollama pull llama3.1:70b-instruct-q4_K_M

# 备选：Q8 — 无损质量，74 GB下载
ollama pull llama3.1:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: '第4–6步：首次运行、验证Metal、检查内存',
        content: ['首次请求需要30–60秒将49 GB加载到统一内存中。后续请求即时响应。'],
        codeBlock: `# 第4步：首次运行（等待30-60秒模型加载）
ollama run llama3.1:70b-instruct-q5_K_M "写一篇200字的本地AI短文"

# 第5步：验证Metal GPU加速已启用
ollama run llama3.1:70b-instruct-q5_K_M --verbose
# 预期输出：ggml_metal_init: found device: Apple M5 Max

# 第6步：为应用程序提供API访问
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.1:70b-instruct-q5_K_M",
  "messages": [{"role": "user", "content": "解释量子计算"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: '质量对比：8B vs 70B vs GPT-5.6',
        content: [
          '提示词："解释为什么递归函数中会发生堆栈溢出，然后编写一个Python函数，在崩溃之前检测无限递归。"',
          'Llama 3.3 8B Q4的回答（任何16GB以上的Mac都能运行）：',
        ],
        blockquote: '当过多函数调用超出内存时，就会发生堆栈溢出。',
        codeBlock: `def detect_recursion(func):
    count = 0
    try:
        func()
    except RecursionError:
        count += 1
    return count > 0`,
        codeLanguage: 'python',
        note: '缺少关键洞察：未使用sys.setrecursionlimit，实际检测逻辑不正确。',
      },
      quality70B: {
        id: 'quality-70b',
        title: 'Llama 3.3 70B Q5的回答（M5 Max 128GB）',
        blockquote: '递归中的堆栈溢出发生在调用栈超过操作系统设定的限制（通常为1MB–8MB）时。每次递归调用都会添加一个包含局部变量和返回地址的栈帧。Python的默认限制为1000次调用。',
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
        note: '正确：装饰器模式、深度追踪、崩溃前主动检测、可配置阈值。GPT-5.6的错误处理稍微更优雅——实际质量差距约3%。',
      },
      quantization: {
        id: 'quantization',
        title: '70B模型量化深度解析',
        items: [
          'Q4与Q5的质量差异在70B上比在8B上更大。Q4：质量损失约3–5%。Q5：相比FP16损失约0.5–1%。',
          '在8B模型上，Q4与Q8几乎没有区别。在70B上，Q4与Q8在复杂推理和代码任务中差异显著。',
          '推荐：Q5_K_M是最佳平衡点。如果速度至关重要（聊天、自动补全），使用Q4。如果输出质量至关重要（法律、代码审查），使用Q8。',
          '内存：Q4 = 42 GB，Q5 = 49 GB，Q8 = 74 GB。全部可装入M5 Max 128GB。为操作系统（约8 GB）和应用程序预留空间。',
          '实际tok/s：Q4 = 15–20，Q5 = 12–16，Q8 = 8–12。以12 tok/s的速度，500字回答大约需要40秒。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Apple Silicon的替代70B+模型',
        tableFormat: true,
        columns: ['模型', '大小（Q5）', '最适合', 'M5 Max上的tok/s'],
        rows: [
          { '模型': 'Llama 3.3 70B Instruct', '大小（Q5）': '49 GB', '最适合': '通用、推理', 'M5 Max上的tok/s': '12–16' },
          { '模型': 'Qwen3 72B Instruct', '大小（Q5）': '51 GB', '最适合': '多语言、数学、代码', 'M5 Max上的tok/s': '11–15' },
          { '模型': 'DeepSeek 67B', '大小（Q5）': '47 GB', '最适合': '代码能力出色', 'M5 Max上的tok/s': '12–16' },
          { '模型': 'Llama 3.3 70B Coder', '大小（Q5）': '49 GB', '最适合': '纯代码任务', 'M5 Max上的tok/s': '13–17' },
          { '模型': 'Mixtral 8x22B (MoE)', '大小（Q4）': '88 GB', '最适合': '高质量推理', 'M5 Max上的tok/s': '18–22' },
          { '模型': 'Cohere Command A+ 104B', '大小（Q4）': '73 GB', '最适合': 'RAG、128K上下文', 'M5 Max上的tok/s': '8–12' },
        ],
        note: '按用例推荐：通用推理 → Llama 3.3 70B Q5。代码 → DeepSeek 67B。非英语（含中文）→ Qwen3 72B。文档问答 → Command A+。最高速度 → Mixtral 8x22B（MoE使用的活跃参数更少）。',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: '下载替代模型',
        codeBlock: `ollama pull qwen2.5:72b-instruct-q5_K_M
ollama pull deepseek-coder:67b-q5_K_M
ollama pull mixtral:8x22b`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '70B本地 vs 云端API——详细对比',
        tableFormat: true,
        columns: ['指标', '70B Q5本地（M5 Max）', 'GPT-5.6 API', 'Claude Sonnet 5', 'Gemini 3.5 Pro'],
        rows: [
          { '指标': '质量（MMLU）', '70B Q5本地（M5 Max）': '86.1', 'GPT-5.6 API': '88.7', 'Claude Sonnet 5': '88.7', 'Gemini 3.5 Pro': '85.9' },
          { '指标': '速度（tok/s）', '70B Q5本地（M5 Max）': '12–16', 'GPT-5.6 API': '50–80', 'Claude Sonnet 5': '50–80', 'Gemini 3.5 Pro': '60–100' },
          { '指标': '首个token延迟', '70B Q5本地（M5 Max）': '1–2秒', 'GPT-5.6 API': '0.3–0.8秒', 'Claude Sonnet 5': '0.4–0.9秒', 'Gemini 3.5 Pro': '0.5–1秒' },
          { '指标': '每百万token费用', '70B Q5本地（M5 Max）': '$0', 'GPT-5.6 API': '$2.50/$10.00', 'Claude Sonnet 5': '$3.00/$15.00', 'Gemini 3.5 Pro': '$1.25/$5.00' },
          { '指标': '月费（500万token）', '70B Q5本地（M5 Max）': '$0', 'GPT-5.6 API': '$50–150', 'Claude Sonnet 5': '$75–200', 'Gemini 3.5 Pro': '$30–80' },
          { '指标': '隐私保护', '70B Q5本地（M5 Max）': '100%本地', 'GPT-5.6 API': '发送至OpenAI', 'Claude Sonnet 5': '发送至Anthropic', 'Gemini 3.5 Pro': '发送至Google' },
          { '指标': '需要互联网', '70B Q5本地（M5 Max）': '否', 'GPT-5.6 API': '是', 'Claude Sonnet 5': '是', 'Gemini 3.5 Pro': '是' },
          { '指标': '速率限制', '70B Q5本地（M5 Max）': '无', 'GPT-5.6 API': '分级限制', 'Claude Sonnet 5': '分级限制', 'Gemini 3.5 Pro': '分级限制' },
          { '指标': '可定制性', '70B Q5本地（M5 Max）': '完全（本地微调）', 'GPT-5.6 API': '有限', 'Claude Sonnet 5': '有限', 'Gemini 3.5 Pro': '有限' },
        ],
        note: '70B Q5本地在MMLU上与云端质量相差3%以内。硬件成本约27,000元，加上每月$50–150的云端节省，投资回收期为27–80个月。涉及隐私的工作（医疗、法律、金融）没有云端替代方案，数据安全法下本地处理更合规。',
      },
      useCases: {
        id: 'use-cases',
        title: '70B本地推理的实用场景',
        numberedItems: [
          { title: '机密文档分析', whyItMatters: '法律合同、医疗记录、财务报表、并购尽职调查。在《个人信息保护法》、HIPAA或保密协议约束下，云端API不可接受。M5 Max上的70B Q5可提供零数据泄露的云端质量分析。' },
          { title: '高频代码辅助', whyItMatters: '独立开发者每天使用Copilot 8小时：约每月70元。10人团队使用本地70B Coder：每月0元。代码永远不会离开公司网络。作为共享推论服务器的M5 Max，10人团队3个月即可收回成本。' },
          { title: '长篇内容生成', whyItMatters: '5,000字博客文章、技术文档。70B生成的长篇内容明显优于8B。本地运行：无token限制，无速率限制。每天生成50,000字，费用为0元，而API费用为$50–100。' },
          { title: '研究与学术用途', whyItMatters: '处理数千篇论文进行文献综述，跨多个领域生成假设。需要70B推理质量。对于学生和博士后而言，云端费用过高。' },
          { title: '注重隐私的个人AI助手', whyItMatters: '个人日记分析、家庭财务规划、使用私人数据进行健康反思。替代整个家庭使用ChatGPT Plus。不向第三方发送任何数据。' },
          { title: '离线关键工作流程', whyItMatters: '在限制性地区工作的记者、偏远地区的医疗专业人员、没有可靠网络的出行、没有外部网络访问的安全设施。' },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: '速度优化：MLX vs Ollama',
        content: ['MLX是Apple的原生ML框架，在相同模型上比Ollama快15–25%。M5 Max运行70B Q5：Ollama = 12–16 tok/s，MLX = 18–22 tok/s。'],
        codeBlock: `from mlx_lm import load, generate

# 加载70B Q5模型（来自Hugging Face的MLX转换版本）
model, tokenizer = load("mlx-community/Llama-3.1-70B-Instruct-Q5")

# 流式生成 — 用户在1-2秒内看到第一个词
from mlx_lm import stream_generate
for chunk in stream_generate(model, tokenizer, "解释量子计算", max_tokens=500):
    print(chunk, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: '更多速度优化技巧',
        items: [
          '保持模型热启动：设置OLLAMA_KEEP_ALIVE=1h（常开Mac Mini可设24h），避免每次请求30–60秒的重新加载。',
          '使用流式传输：用户在1–2秒内看到第一个token，而不是等待25–40秒获取完整回答。',
          '降低max_tokens：如果200字的回答已足够，设置max_tokens=200。以14 tok/s计算：200 token = 14秒，500 token = 36秒。',
          'Q4与Q5的速度权衡：Q4 = 15–20 tok/s（比Q5快25%）。大多数任务的质量差异约为2–3%。聊天用Q4，关键推理用Q5。',
          '推理过程中避免运行其他GPU密集型应用——活动监视器的GPU历史记录显示其他进程是否在争用Metal带宽。',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'M5 Ultra预览：下一个能力层级（预计2026年中）',
        content: ['基于Apple以往的Ultra模式（2倍Max规格），M5 Ultra预测：256GB统一内存、约1,200 GB/s带宽、约80个GPU核心。预计仅在Mac Studio Ultra中提供。'],
        tableFormat: true,
        columns: ['模型', 'M5 Max 128GB', 'M5 Ultra 256GB（预测）'],
        rows: [
          { '模型': 'Llama 3.3 70B Q5', 'M5 Max 128GB': '12–16 tok/s', 'M5 Ultra 256GB（预测）': '24–32 tok/s' },
          { '模型': 'Llama 3.3 70B Q8', 'M5 Max 128GB': '8–12 tok/s', 'M5 Ultra 256GB（预测）': '16–24 tok/s' },
          { '模型': 'Llama 3.3 70B FP16（无损）', 'M5 Max 128GB': '✗ 装不下', 'M5 Ultra 256GB（预测）': '14–18 tok/s' },
          { '模型': 'Qwen3 72B Q8', 'M5 Max 128GB': '8–12 tok/s', 'M5 Ultra 256GB（预测）': '16–24 tok/s' },
          { '模型': 'Mixtral 8x22B Q5', 'M5 Max 128GB': '14–18 tok/s', 'M5 Ultra 256GB（预测）': '28–36 tok/s' },
          { '模型': 'Llama 3.3 405B Q3', 'M5 Max 128GB': '✗ 装不下', 'M5 Ultra 256GB（预测）': '4–6 tok/s' },
          { '模型': 'Llama 3.3 405B Q4（约200GB）', 'M5 Max 128GB': '✗ 装不下', 'M5 Ultra 256GB（预测）': '3–5 tok/s' },
        ],
        note: 'M5 Ultra解锁：(1) 无损70B FP16——消费级硬件首次实现。(2) 405B参数模型。(3) 两个同时运行的70B模型。预计售价：40,000–50,000元（Mac Studio Ultra）。值得等待的情况：需要405B模型、70B FP16，或已拥有M3/M4 Max。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '70B Q4对大多数任务来说足够好吗？', a: '是的。Q4是行业标准量化。相比Q5约3–5%的质量损失，对大多数聊天、写作和通用任务来说察觉不到。只有在输出质量至关重要时（法律分析、代码审查、医疗用途）才使用Q5或Q8。' },
          { q: '我可以同时运行70B Q5和另一个模型吗？', a: '是的，可以配合一个较小的模型。70B Q5 = 49 GB。128 GB减去8 GB系统开销 = 120 GB。70B Q5（49 GB）+ 7–8B模型（5 GB）= 54 GB，完全在预算内。同时运行两个70B模型需要M5 Ultra 256 GB。' },
          { q: '我应该现在买M5 Max还是等待M5 Ultra？', a: '等待M5 Ultra的情况：(1) 需要70B FP16（无损质量），(2) 需要405B模型，或(3) 已经拥有M3 Max或M4 Max（跳过M5 Max）。现在购买M5 Max的情况：今天就需要70B能力，且预算在35,000元以内。' },
          { q: 'M5 Ultra上的70B比M5 Max快多少？', a: '约快2倍，基于内存带宽翻倍（约1,200 GB/s对614 GB/s）。M5 Max运行70B Q5为12–16 tok/s；M5 Ultra预计为24–32 tok/s。M5 Ultra还将能运行70B FP16（无损质量），而M5 Max无法装下。' },
          { q: '我可以在M5 Max 128GB上同时运行两个70B模型吗？', a: '不行，无法运行两个完整的70B模型。两个70B Q4 = 84 GB加上系统开销 = 约95 GB，在128 GB上比较勉强。M5 Ultra 256 GB可以轻松处理两个同时运行的70B模型或一个70B加一个34B。' },
          { q: '70B模型需要多少磁盘空间？', a: '每个70B模型占用42 GB（Q4）、49 GB（Q5）或74 GB（Q8）磁盘空间。保存一个模型的三种量化版本：165 GB。对于需要多个70B模型的专业工作，建议Mac Studio配置1 TB或2 TB SSD。' },
          { q: '本地运行的70B真的和GPT-5.6在我的特定用例中一样好吗？', a: '70B Q5在MMLU上得86.1，GPT-5.6得88.7——基准测试差距3%。对于涉及隐私的工作、高频使用（每月50美元以上）或离线使用，本地运行自动获胜。用您自己的提示词测试，验证是否适合您的工作流程。' },
          { q: 'Llama 4或更新的70B模型会在M5 Max上运行吗？', a: '是的。M5 Max 128 GB可以装下任何架构的70B模型Q4/Q5/Q8量化版本。新的70B版本（Llama 4、Qwen3等）通常在发布后数天内出现在Ollama上。使用新模型名称运行ollama pull即可。' },
          { q: 'M5 Max上的本地LLM符合中国数据安全法规吗？', a: '是的。所有数据在设备本地处理，不传输至境外服务器，满足《数据安全法》和《个人信息保护法》关于数据不出境的要求。对于处理敏感数据的企业，本地推理是最合规的AI部署方案。' },
          { q: 'M5 Max对中国企业来说性价比如何？', a: '对于日常处理敏感文档的5–15人团队来说非常划算。一台约27,000元的M5 Max Mac Studio，相比GPT-5.6 API费用（每用户每月350–1,400元），3–12个月即可回本，同时所有数据留在企业内部，完全符合数据合规要求。' },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: '相关文章',
        items: [
          '[Apple Silicon本地LLM完整指南](/zh/local-llms/apple-silicon-local-llm-guide-2026) — M1到M5 Max对比，统一内存详解',
          '[M5 Pro与M5 Max LLM基准测试2026](/zh/local-llms/m5-pro-max-llm-benchmarks-2026) — 各模型尺寸的详细tok/s数据',
          '[本地LLM需要多少统一内存？](/zh/local-llms/how-much-unified-memory-for-local-llm) — 16GB对36GB对64GB对128GB指南',
          '[Apple Silicon最佳LLM模型](/zh/local-llms/best-models-apple-silicon-2026) — 按Mac配置的模型推荐',
          '[Mac上MLX对Ollama对llama.cpp](/zh/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — 框架速度对比与配置指南',
          '[Apple Silicon对英伟达GPU本地LLM](/zh/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — 跨平台硬件对比',
          '[LLM量化详解](/zh/local-llms/llm-quantization-explained) — Q4/Q5/Q8/FP16深度解析',
          '[Mac Mini M5作为本地AI服务器](/zh/local-llms/mac-mini-m5-local-ai-server) — 常驻推论服务器配置',
          '[2026年最佳本地推理模型：DeepSeek-R1 Distill排名](/zh/local-llms/best-local-reasoning-model-deepseek-r1-2026) — 此硬件的70B推理Distill：M5 Max上的基准数据与Ollama部署指南。',
          '[DeepSeek-R1 Distill 显存速查表](/zh/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — Q4_K_M格式各规格所需显存：70B → 42 GB — 确认M5 Max显存是否满足。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    theme: 'Hardware & Performance',
    title: 'Apple Silicon M5 Max에서 70B+ 모델 실행하기 2026: 완전 가이드',
    seoTitle: 'M5 Max 128GB에서 70B 모델: 12–20 tok/s, GPT-5.6 수준의 품질',
    intro: 'Apple Silicon M5 Max(128GB)에서 70B 이상의 LLM을 로컬로 실행하십시오. Ollama와 MLX를 사용한 완전한 설정 가이드, 양자화 비교(Q4/Q5/Q8), 8B 대 70B 품질 벤치마크, 실제 tok/s 수치, 70B 대 클라우드 API 비용 분석, 대안 70B+ 모델, 속도 최적화, 그리고 2026년 M5 Ultra 전망을 포함합니다.',
    metaDescription: 'M5 Max 128GB는 70B 모델을 12–20 tok/s로 실행합니다. Q5 품질은 GPT-5.6와 3% 이내의 차이입니다. Ollama/MLX 완전 설정 가이드, 양자화 가이드, 벤치마크 포함.',
    twitterDescription: 'M5 Max 128GB에서 70B LLM: 12–20 tok/s, Q4–Q8 옵션, 클라우드 품질의 3% 이내, 월 $0. 완전 설정 + 벤치마크 가이드.',
    publishDate: '2026-05-15',
    dateModified: '2026-07-13',
    current_models_mentioned: ['Llama 3.3 70B', 'Qwen3 72B', 'DeepSeek 67B', 'Mixtral 8x22B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['M5 Max', 'M5 Ultra', 'M4 Max', 'M3 Max', 'RTX 4090'],
    audience: '클라우드 API 없이 최고의 로컬 LLM 품질을 원하는 M5 Max 소유자 및 구매 예정자.',
    readTime: '16분 읽기',
    educationalLevel: 'Advanced',
    primaryTerm: '70B 모델 Apple Silicon',
    targetKeywords: ['70B 모델 Mac', 'M5 Max 128GB LLM', '70B 로컬 실행', 'Llama 70B Apple Silicon', '대형 모델 로컬 추론'],
    ctaText: 'M5 Max에서 Llama 3.3 70B를 로컬로 실행하고 계십니까? PromptQuorum을 통해 로컬 응답을 GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro 및 22개의 다른 클라우드 모델과 비교하십시오. $4,000 하드웨어 투자가 특정 추론, 코딩, 글쓰기 작업에서 클라우드 품질과 일치하는지 검증하십시오. 모두 하나의 디스패치에서.',
    leadAnswerBlock: 'M5 Max 128GB는 Llama 3.3 70B를 15–20 tok/s(Q4_K_M) 또는 12–16 tok/s(Q5_K_M)로 실행합니다. 70B Q5는 MMLU에서 86.1점을 기록하여 GPT-5.6(88.7)와 3% 이내의 차이를 보이며, 월 $0으로 로컬에서 실행됩니다. 복잡한 멀티 GPU 설정 없이 70B를 수용할 수 있는 유일한 소비자용 하드웨어입니다. Ollama로 설정하는 데 10분도 걸리지 않습니다.',
    quickAnswerTop: {
      ko: {
        question: 'M5 Max 128GB에서 70B 모델을 실행할 수 있습니까?',
        answer: '네. Llama 3.3 70B Q5_K_M은 12–16 tok/s로 실행됩니다. Q4_K_M은 15–20 tok/s, Q8_0은 8–12 tok/s(무손실 품질)입니다. 모두 128GB 통합 메모리에 맞습니다. Ollama로 설정하는 데 10분이면 충분합니다. 70B Q5는 표준 벤치마크에서 GPT-5.6 품질의 3% 이내입니다.',
        bullets: [
          '70B Q4_K_M: 42 GB, 15–20 tok/s, 양호한 품질',
          '70B Q5_K_M: 49 GB, 12–16 tok/s, 매우 좋음(권장)',
          '70B Q8_0: 74 GB, 8–12 tok/s, 무손실 품질',
          '멀티 GPU 복잡성 없이 사용 가능한 유일한 소비자용 옵션',
          'MMLU: 70B Q5 = 86.1 vs GPT-5.6 = 88.7 (3% 차이)',
          '설정: brew install ollama && ollama pull llama3.1:70b',
        ],
        updatedDate: '2026-06-19',
      },
    },
    toc: [
      { label: '70B가 중요한 이유', anchor: '#why' },
      { label: '하드웨어 요구사항', anchor: '#hardware' },
      { label: '단계별 설정', anchor: '#setup' },
      { label: '품질: 8B vs 70B vs GPT-5.6', anchor: '#quality' },
      { label: '양자화 심층 분석', anchor: '#quantization' },
      { label: '대안 70B+ 모델', anchor: '#alternatives' },
      { label: '70B 로컬 vs 클라우드 API', anchor: '#vs-cloud' },
      { label: '실제 활용 사례', anchor: '#use-cases' },
      { label: '속도 최적화', anchor: '#speed-opts' },
      { label: 'M5 Ultra 미리보기', anchor: '#m5ultra' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 문서', anchor: '#related-articles' },
    ],
    sections: {
      why: {
        id: 'why',
        title: '70B가 중요한 이유: 8B에서의 품질 도약',
        content: [
          '8B에서 70B 파라미터로의 도약은 로컬 AI에서 가장 중요한 품질 임계점입니다. 산업 벤치마크 점수:',
        ],
        tableFormat: true,
        columns: ['벤치마크', 'Llama 3.3 8B', 'Llama 3.3 70B Q5', 'GPT-5.6'],
        rows: [
          { '벤치마크': 'MMLU (일반 지식)', 'Llama 3.3 8B': '73.0', 'Llama 3.3 70B Q5': '86.1', 'GPT-5.6': '88.7' },
          { '벤치마크': 'HumanEval (코드)', 'Llama 3.3 8B': '72.6', 'Llama 3.3 70B Q5': '80.5', 'GPT-5.6': '90.2' },
          { '벤치마크': 'GSM8K (수학)', 'Llama 3.3 8B': '84.5', 'Llama 3.3 70B Q5': '95.1', 'GPT-5.6': '95.8' },
          { '벤치마크': 'BBH (추론)', 'Llama 3.3 8B': '71.0', 'Llama 3.3 70B Q5': '85.3', 'GPT-5.6': '88.9' },
          { '벤치마크': '평균', 'Llama 3.3 8B': '75.3', 'Llama 3.3 70B Q5': '86.8', 'GPT-5.6': '90.9' },
        ],
        note: '70B Q5는 8B와 GPT-5.6 사이의 품질 격차를 75% 좁힙니다 — 월 $0으로 로컬에서 실행하면서.',
      },
      hardware: {
        id: 'hardware',
        title: '70B 모델을 실행할 수 있는 하드웨어',
        tableFormat: true,
        columns: ['하드웨어', '양자화', '모델 크기', 'tok/s', '품질', '적합 여부'],
        rows: [
          { '하드웨어': 'M3 Max 96GB', '양자화': 'Q4_K_M', '모델 크기': '42 GB', 'tok/s': '9–13', '품질': '양호', '적합 여부': '✓ 가능' },
          { '하드웨어': 'M3 Max 128GB', '양자화': 'Q5_K_M', '모델 크기': '49 GB', 'tok/s': '8–12', '품질': '매우 양호', '적합 여부': '✓ 가능' },
          { '하드웨어': 'M4 Max 128GB', '양자화': 'Q5_K_M', '모델 크기': '49 GB', 'tok/s': '10–14', '품질': '매우 양호', '적합 여부': '✓ 가능' },
          { '하드웨어': 'M5 Max 128GB', '양자화': 'Q4_K_M', '모델 크기': '42 GB', 'tok/s': '15–20', '품질': '양호', '적합 여부': '✓ 가능' },
          { '하드웨어': 'M5 Max 128GB', '양자화': 'Q5_K_M', '모델 크기': '49 GB', 'tok/s': '12–16', '품질': '매우 양호', '적합 여부': '✓ 가능' },
          { '하드웨어': 'M5 Max 128GB', '양자화': 'Q8_0', '모델 크기': '74 GB', 'tok/s': '8–12', '품질': '무손실', '적합 여부': '✓ 가능' },
          { '하드웨어': 'M5 Ultra 256GB (예상)', '양자화': 'FP16', '모델 크기': '140 GB', 'tok/s': '14–18', '품질': '완벽', '적합 여부': '✓ 가능' },
          { '하드웨어': 'RTX 4090 24GB', '양자화': '모두', '모델 크기': '42 GB+', 'tok/s': '—', '품질': '—', '적합 여부': '✗ OOM' },
          { '하드웨어': 'Dual RTX 3090 48GB', '양자화': 'Q4_K_M', '모델 크기': '42 GB', 'tok/s': '12–15', '품질': '양호', '적합 여부': '✓ 가능(복잡)' },
          { '하드웨어': 'Dual RTX 4090 48GB', '양자화': 'Q5_K_M', '모델 크기': '49 GB', 'tok/s': '18–25', '품질': '매우 양호', '적합 여부': '✓ 가능($5,000+)' },
          { '하드웨어': '4× RTX 3090 96GB', '양자화': 'Q8_0', '모델 크기': '74 GB', 'tok/s': '12–16', '품질': '무손실', '적합 여부': '✓ 가능(고비용)' },
        ],
        note: 'M5 Max 128GB는 복잡한 멀티 GPU 설정 없이 70B 모델을 실행할 수 있는 유일한 소비자용 하드웨어입니다. $4,000짜리 Mac Studio 구성은 $5,000–8,000짜리 NVIDIA 멀티 GPU 장비를 대체합니다.',
      },
      setupInstall: {
        id: 'setup',
        title: '단계별 가이드: M5 Max 128GB에서 70B 실행하기',
        content: [
          '1단계: 하드웨어를 확인하십시오. 2단계: Ollama를 설치하고 구성하십시오.',
        ],
        codeBlock: `# 1단계: 통합 메모리 확인 (128 GB로 표시되어야 함)
system_profiler SPHardwareDataType | grep Memory
# → Memory: 128 GB

# 2단계: Ollama 설치
brew install ollama
brew services start ollama

# 3단계: 70B용 구성 (모델을 메모리에 유지하여 각 요청 시 60초 워밍업 방지)
echo 'export OLLAMA_KEEP_ALIVE=1h' >> ~/.zshrc
echo 'export OLLAMA_NUM_PARALLEL=1' >> ~/.zshrc
source ~/.zshrc
brew services restart ollama`,
        codeLanguage: 'bash',
      },
      setupPull: {
        id: 'setup-pull',
        title: '3단계: 70B 모델 다운로드',
        content: [
          '100 Mbps 연결에서 다운로드 시간: 45–90분. 1 Gbps에서: 5–10분.',
        ],
        codeBlock: `# 권장: Q5_K_M — 최고의 품질/속도 균형 (49 GB 다운로드)
ollama pull llama3.1:70b-instruct-q5_K_M

# 대안: Q4 — 최대 속도, 42 GB 다운로드
ollama pull llama3.1:70b-instruct-q4_K_M

# 대안: Q8 — 무손실 품질, 74 GB 다운로드
ollama pull llama3.1:70b-instruct-q8_0`,
        codeLanguage: 'bash',
      },
      setupRun: {
        id: 'setup-run',
        title: '4–6단계: 첫 실행, Metal 확인, 메모리 체크',
        content: [
          '첫 번째 요청은 49 GB를 통합 메모리에 로드하는 데 30–60초가 걸립니다. 이후 요청은 즉시 처리됩니다.',
        ],
        codeBlock: `# 4단계: 첫 실행 (모델 로드에 30-60초 대기)
ollama run llama3.1:70b-instruct-q5_K_M "Write a 200-word essay on local AI"

# 5단계: Metal GPU 가속이 활성화되어 있는지 확인
ollama run llama3.1:70b-instruct-q5_K_M --verbose
# 예상 출력: ggml_metal_init: found device: Apple M5 Max

# 6단계: 애플리케이션을 위한 API 접근
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.1:70b-instruct-q5_K_M",
  "messages": [{"role": "user", "content": "Explain quantum computing"}]
}'`,
        codeLanguage: 'bash',
      },
      quality8B: {
        id: 'quality',
        title: '품질 비교: 8B vs 70B vs GPT-5.6',
        content: [
          '프롬프트: "재귀 함수에서 스택 오버플로우가 발생하는 이유를 설명하고, 충돌 전에 무한 재귀를 감지하는 Python 함수를 작성하십시오."',
          'Llama 3.3 8B Q4 응답 (16GB+ Mac에서 실행 가능):',
        ],
        blockquote: '스택 오버플로우는 너무 많은 함수 호출이 메모리를 초과할 때 발생합니다.',
        codeBlock: `def detect_recursion(func):
    count = 0
    try:
        func()
    except RecursionError:
        count += 1
    return count > 0`,
        codeLanguage: 'python',
        note: '핵심 통찰 누락: sys.setrecursionlimit이 필요하며, 실제 감지 로직이 올바르지 않습니다.',
      },
      quality70B: {
        id: 'quality-70b',
        title: 'Llama 3.3 70B Q5 응답 (M5 Max 128GB)',
        blockquote: '재귀에서의 스택 오버플로우는 호출 스택이 OS가 부과한 제한(일반적으로 1MB–8MB)을 초과할 때 발생합니다. 각 재귀 호출은 지역 변수와 반환 주소를 포함하는 스택 프레임을 추가합니다. Python의 기본 제한은 1000번의 호출입니다.',
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
        note: '정확함: 데코레이터 패턴, 깊이 추적, 충돌 전 사전 감지, 구성 가능한 임계값. GPT-5.6는 약간 더 우아한 오류 처리를 추가합니다 — 실제로는 3% 품질 차이입니다.',
      },
      quantization: {
        id: 'quantization',
        title: '70B 모델의 양자화 심층 분석',
        items: [
          'Q4 vs Q5 품질 차이는 8B보다 70B에서 더 큽니다. Q4: 약 3–5% 품질 손실. Q5: FP16 대비 약 0.5–1% 손실.',
          '8B 모델에서는 Q4 vs Q8의 차이가 거의 느껴지지 않습니다. 70B에서는 복잡한 추론과 코드에서 Q4 vs Q8의 차이가 상당합니다.',
          '권장사항: Q5_K_M이 최선의 균형점입니다. 속도가 중요한 경우(채팅, 자동완성)에는 Q4를, 출력 품질이 중요한 경우(법률, 코드 리뷰)에는 Q8을 사용하십시오.',
          '메모리: Q4 = 42 GB, Q5 = 49 GB, Q8 = 74 GB. 모두 M5 Max 128GB에 맞습니다. OS(약 8 GB) 및 앱을 위한 여유 공간을 남겨 두십시오.',
          '실제 tok/s: Q4 = 15–20, Q5 = 12–16, Q8 = 8–12. 12 tok/s에서 500단어 응답은 약 40초가 걸립니다.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Apple Silicon을 위한 대안 70B+ 모델',
        tableFormat: true,
        columns: ['모델', '크기 (Q5)', '최적 용도', 'M5 Max tok/s'],
        rows: [
          { '모델': 'Llama 3.3 70B Instruct', '크기 (Q5)': '49 GB', '최적 용도': '범용, 추론', 'M5 Max tok/s': '12–16' },
          { '모델': 'Qwen3 72B Instruct', '크기 (Q5)': '51 GB', '최적 용도': '다국어, 수학, 코드', 'M5 Max tok/s': '11–15' },
          { '모델': 'DeepSeek 67B', '크기 (Q5)': '47 GB', '최적 용도': '코딩 우수성', 'M5 Max tok/s': '12–16' },
          { '모델': 'Llama 3.3 70B Coder', '크기 (Q5)': '49 GB', '최적 용도': '순수 코딩 작업', 'M5 Max tok/s': '13–17' },
          { '모델': 'Mixtral 8x22B (MoE)', '크기 (Q4)': '88 GB', '최적 용도': '고품질 추론', 'M5 Max tok/s': '18–22' },
          { '모델': 'Cohere Command A+ 104B', '크기 (Q4)': '73 GB', '최적 용도': 'RAG, 128K 컨텍스트', 'M5 Max tok/s': '8–12' },
        ],
        note: '용도별 권장사항: 범용 추론 → Llama 3.3 70B Q5. 코드 → DeepSeek 67B. 비영어권 → Qwen3 72B. 문서 Q&A → Command A+. 최대 속도 → Mixtral 8x22B (MoE는 더 적은 활성 파라미터를 사용).',
      },
      alternativesPull: {
        id: 'alternatives-pull',
        title: '대안 모델 다운로드',
        codeBlock: `ollama pull qwen2.5:72b-instruct-q5_K_M
ollama pull deepseek-coder:67b-q5_K_M
ollama pull mixtral:8x22b`,
        codeLanguage: 'bash',
      },
      vsCloud: {
        id: 'vs-cloud',
        title: '70B 로컬 vs 클라우드 API — 상세 비교',
        tableFormat: true,
        columns: ['지표', '70B Q5 로컬 (M5 Max)', 'GPT-5.6 API', 'Claude Sonnet 5', 'Gemini 3.5 Pro'],
        rows: [
          { '지표': '품질 (MMLU)', '70B Q5 로컬 (M5 Max)': '86.1', 'GPT-5.6 API': '88.7', 'Claude Sonnet 5': '88.7', 'Gemini 3.5 Pro': '85.9' },
          { '지표': '속도 (tok/s)', '70B Q5 로컬 (M5 Max)': '12–16', 'GPT-5.6 API': '50–80', 'Claude Sonnet 5': '50–80', 'Gemini 3.5 Pro': '60–100' },
          { '지표': '첫 토큰 지연', '70B Q5 로컬 (M5 Max)': '1–2초', 'GPT-5.6 API': '0.3–0.8초', 'Claude Sonnet 5': '0.4–0.9초', 'Gemini 3.5 Pro': '0.5–1초' },
          { '지표': '1M 토큰당 비용', '70B Q5 로컬 (M5 Max)': '$0', 'GPT-5.6 API': '$2.50/$10.00', 'Claude Sonnet 5': '$3.00/$15.00', 'Gemini 3.5 Pro': '$1.25/$5.00' },
          { '지표': '월 비용 (5M 토큰)', '70B Q5 로컬 (M5 Max)': '$0', 'GPT-5.6 API': '$50–150', 'Claude Sonnet 5': '$75–200', 'Gemini 3.5 Pro': '$30–80' },
          { '지표': '개인정보 보호', '70B Q5 로컬 (M5 Max)': '100% 로컬', 'GPT-5.6 API': 'OpenAI로 전송', 'Claude Sonnet 5': 'Anthropic으로 전송', 'Gemini 3.5 Pro': 'Google로 전송' },
          { '지표': '인터넷 필요', '70B Q5 로컬 (M5 Max)': '아니오', 'GPT-5.6 API': '예', 'Claude Sonnet 5': '예', 'Gemini 3.5 Pro': '예' },
          { '지표': '속도 제한', '70B Q5 로컬 (M5 Max)': '없음', 'GPT-5.6 API': '티어 기반', 'Claude Sonnet 5': '티어 기반', 'Gemini 3.5 Pro': '티어 기반' },
          { '지표': '커스터마이제이션', '70B Q5 로컬 (M5 Max)': '완전 지원 (로컬 파인튜닝)', 'GPT-5.6 API': '제한됨', 'Claude Sonnet 5': '제한됨', 'Gemini 3.5 Pro': '제한됨' },
        ],
        note: '70B Q5 로컬은 MMLU에서 클라우드 품질의 3% 이내입니다. $4,000 하드웨어 비용과 월 $50–150 클라우드 절감을 고려하면, 사용량에 따라 투자 회수 기간은 27–80개월입니다. 의료, 법률, 금융 등 개인정보 보호가 필요한 작업에서는 클라우드 대안이 없습니다.',
      },
      useCases: {
        id: 'use-cases',
        title: '70B 로컬 추론의 실제 활용 사례',
        numberedItems: [
          { title: '기밀 문서 분석', whyItMatters: '법적 계약서, 의료 기록, 재무제표, M&A 실사. HIPAA, GDPR 또는 NDA 하에서 클라우드 API는 허용되지 않습니다. M5 Max에서의 70B Q5는 데이터 유출 없이 클라우드 수준의 분석을 제공합니다.' },
          { title: '대용량 코딩 지원', whyItMatters: 'Copilot을 하루 8시간 사용하는 개인 개발자: 월 약 $10. 10명 팀이 70B Coder를 로컬로 사용: 월 $0. 코드는 회사 네트워크를 벗어나지 않습니다. 공유 추론 서버로서의 M5 Max는 10인 팀에서 3개월 안에 비용을 회수합니다.' },
          { title: '장문 콘텐츠 생성', whyItMatters: '5,000단어 블로그 포스트, 기술 문서. 70B는 8B보다 훨씬 우수한 장문 콘텐츠를 생성합니다. 로컬: 토큰 제한 없음, 속도 제한 없음. API 비용 $50–100 대비 $0으로 하루 50,000단어를 생성할 수 있습니다.' },
          { title: '연구 및 학술 용도', whyItMatters: '문헌 검토를 위한 수천 편의 논문 처리, 다양한 분야에 걸친 가설 생성. 70B 추론 품질이 필요합니다. 학생 및 박사후 연구원의 예산에는 클라우드 비용이 부담스럽습니다.' },
          { title: '개인정보 보호 우선 개인 AI', whyItMatters: '개인 일기 분석, 가족 재정 계획, 개인 데이터를 활용한 건강 성찰. 전 가족을 위해 ChatGPT Plus를 대체합니다. 제3자에게 데이터가 전송되지 않습니다.' },
          { title: '오프라인 중요 워크플로우', whyItMatters: '제한적인 지역의 현장 언론인, 오지의 의료 전문가, 안정적인 인터넷 없는 여행, 외부 네트워크 접근이 없는 보안 시설.' },
        ],
      },
      speedMlx: {
        id: 'speed-opts',
        title: '속도 최적화: MLX vs Ollama',
        content: [
          'MLX는 Apple의 네이티브 ML 프레임워크로, 동일한 모델에서 Ollama보다 15–25% 빠릅니다. M5 Max에서 70B Q5: Ollama = 12–16 tok/s, MLX = 18–22 tok/s.',
        ],
        codeBlock: `from mlx_lm import load, generate

# 70B Q5 모델 로드 (Hugging Face의 MLX 변환 버전)
model, tokenizer = load("mlx-community/Llama-3.1-70B-Instruct-Q5")

# 스트리밍 생성 — 사용자가 1-2초 안에 첫 단어를 볼 수 있음
from mlx_lm import stream_generate
for chunk in stream_generate(model, tokenizer, "Explain quantum computing", max_tokens=500):
    print(chunk, end="", flush=True)`,
        codeLanguage: 'python',
      },
      speedTips: {
        id: 'speed-tips',
        title: '추가 속도 팁',
        items: [
          '모델 웜 유지: OLLAMA_KEEP_ALIVE=1h(또는 항상 켜져 있는 Mac Mini의 경우 24h)를 설정하여 각 요청 시 30–60초의 재로드를 방지하십시오.',
          '스트리밍 사용: 전체 응답을 위해 25–40초를 기다리는 대신 1–2초 안에 첫 토큰을 볼 수 있습니다.',
          'max_tokens 낮추기: 200단어 답변이 필요한 경우 max_tokens=200으로 설정하십시오. 14 tok/s에서: 200토큰 = 14초 vs 500토큰 = 36초.',
          'Q4 vs Q5 속도 트레이드오프: Q4 = 15–20 tok/s (Q5보다 25% 빠름). 대부분의 작업에서 품질 차이는 약 2–3%입니다. 채팅에는 Q4를, 중요한 추론에는 Q5를 사용하십시오.',
          '추론 중에는 다른 GPU 집중 앱 실행을 피하십시오 — Activity Monitor GPU History에서 다른 프로세스가 Metal 대역폭을 경쟁하는지 확인할 수 있습니다.',
        ],
      },
      m5ultra: {
        id: 'm5ultra',
        title: 'M5 Ultra 미리보기: 다음 성능 단계 (2026년 중반 예상)',
        content: [
          'Apple의 이전 Ultra 패턴(2× Max 사양)을 기반으로 한 M5 Ultra 예상 사양: 256 GB 통합 메모리, 약 1,200 GB/s 대역폭, 약 80개 GPU 코어. Mac Studio Ultra 전용으로 예상됩니다.',
        ],
        tableFormat: true,
        columns: ['모델', 'M5 Max 128GB', 'M5 Ultra 256GB (예상)'],
        rows: [
          { '모델': 'Llama 3.3 70B Q5', 'M5 Max 128GB': '12–16 tok/s', 'M5 Ultra 256GB (예상)': '24–32 tok/s' },
          { '모델': 'Llama 3.3 70B Q8', 'M5 Max 128GB': '8–12 tok/s', 'M5 Ultra 256GB (예상)': '16–24 tok/s' },
          { '모델': 'Llama 3.3 70B FP16 (무손실)', 'M5 Max 128GB': '✗ 용량 부족', 'M5 Ultra 256GB (예상)': '14–18 tok/s' },
          { '모델': 'Qwen3 72B Q8', 'M5 Max 128GB': '8–12 tok/s', 'M5 Ultra 256GB (예상)': '16–24 tok/s' },
          { '모델': 'Mixtral 8x22B Q5', 'M5 Max 128GB': '14–18 tok/s', 'M5 Ultra 256GB (예상)': '28–36 tok/s' },
          { '모델': 'Llama 3.3 405B Q3', 'M5 Max 128GB': '✗ 용량 부족', 'M5 Ultra 256GB (예상)': '4–6 tok/s' },
          { '모델': 'Llama 3.3 405B Q4 (~200 GB)', 'M5 Max 128GB': '✗ 용량 부족', 'M5 Ultra 256GB (예상)': '3–5 tok/s' },
        ],
        note: 'M5 Ultra의 혜택: (1) 소비자 하드웨어 최초의 무손실 70B FP16. (2) 405B 파라미터 모델. (3) 두 개의 동시 70B 모델. 예상 가격: $5,500–7,000 (Mac Studio Ultra). 대기해야 할 때: 405B 모델, 70B FP16이 필요하거나 이미 M3/M4 Max를 보유하고 있는 경우.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '70B Q4는 대부분의 작업에 충분합니까?',
            a: '네. Q4는 업계 표준 양자화입니다. Q5 대비 약 3–5%의 품질 손실은 대부분의 채팅, 글쓰기, 범용 작업에서 거의 느껴지지 않습니다. Q5 또는 Q8은 출력 품질이 중요한 경우(법률 분석, 코드 리뷰, 의료 용도)에만 사용하십시오.',
          },
          {
            q: '70B Q5와 다른 모델을 동시에 실행할 수 있습니까?',
            a: '네, 더 작은 모델 하나와 함께 가능합니다. 70B Q5 = 49 GB. 128 GB에서 OS 오버헤드 8 GB를 뺀 120 GB. 70B Q5(49 GB) + 7–8B 모델(5 GB) = 총 54 GB — 여유롭게 가능합니다. 두 개의 동시 70B 모델은 M5 Ultra 256 GB가 필요합니다.',
          },
          {
            q: '지금 M5 Max를 사는 것이 나을까요, M5 Ultra를 기다려야 할까요?',
            a: 'M5 Ultra를 기다려야 하는 경우: (1) 70B FP16(무손실 품질)이 필요한 경우, (2) 405B 모델이 필요한 경우, (3) 이미 M3 Max 또는 M4 Max를 보유하고 있는 경우(M5 Max는 건너뛰십시오). 지금 M5 Max를 구매해야 하는 경우: 오늘 당장 70B 기능이 필요하고 예산이 $5,000 미만인 경우.',
          },
          {
            q: 'M5 Ultra에서 70B가 M5 Max보다 얼마나 더 빠릅니까?',
            a: '메모리 대역폭이 두 배(약 1,200 GB/s vs 614 GB/s)로 향상되어 약 2배 빠릅니다. M5 Max는 70B Q5를 12–16 tok/s로 실행하며, M5 Ultra는 24–32 tok/s로 예상됩니다. M5 Ultra는 또한 M5 Max에서 용량이 부족한 70B FP16(무손실 품질)도 실행할 수 있습니다.',
          },
          {
            q: 'M5 Max 128GB에서 두 개의 70B 모델을 동시에 실행할 수 있습니까?',
            a: '아니요, 두 개의 전체 70B 모델은 불가능합니다. 두 개의 70B Q4 모델 = 84 GB에 OS 오버헤드를 더하면 약 95 GB로, 128 GB에서 빠듯합니다. M5 Ultra 256 GB는 두 개의 동시 70B 모델이나 70B 하나와 34B 하나를 쉽게 처리할 수 있습니다.',
          },
          {
            q: '70B 모델에 필요한 디스크 공간은 얼마입니까?',
            a: '각 70B 모델은 디스크에서 42 GB(Q4), 49 GB(Q5), 또는 74 GB(Q8)를 차지합니다. 비교를 위해 한 모델의 3가지 양자화를 유지한다면: 165 GB. 여러 모델로 진지하게 70B 작업을 하려면 Mac Studio에서 1 TB 또는 2 TB SSD를 사용하십시오.',
          },
          {
            q: '70B 로컬이 제 특정 사용 사례에서 GPT-5.6만큼 좋습니까?',
            a: '70B Q5는 MMLU에서 86.1점을 기록하여 GPT-5.6의 88.7점과 3% 차이입니다. 복잡한 추론과 섬세한 글쓰기에서는 GPT-5.6가 여전히 약간 앞섭니다. 개인정보 보호가 필요한 작업, 대용량 사용($50+/월), 또는 오프라인 사용의 경우 로컬이 자동으로 유리합니다. 본인의 워크플로우에서 직접 프롬프트를 테스트하여 확인하십시오.',
          },
          {
            q: 'Llama 4 또는 최신 70B 모델이 M5 Max에서 작동합니까?',
            a: '네. M5 Max 128 GB는 아키텍처에 관계없이 Q4/Q5/Q8 양자화의 모든 70B 모델에 맞습니다. 새로운 70B 릴리스(Llama 4, Qwen3 등)는 일반적으로 출시 후 며칠 안에 Ollama에 등장합니다. 새 모델 이름으로 ollama pull을 실행하십시오.',
          },
        ],
      },
      relatedArticles: {
        id: 'related-articles',
        title: '관련 문서',
        items: [
          '[Apple Silicon 로컬 LLM 완전 가이드](/local-llms/apple-silicon-local-llm-guide-2026) — M1에서 M5 Max 비교, 통합 메모리 설명',
          '[M5 Pro vs M5 Max LLM 벤치마크 2026](/local-llms/m5-pro-max-llm-benchmarks-2026) — 모델 크기별 상세 tok/s 수치',
          '[로컬 LLM에 필요한 통합 메모리 용량?](/local-llms/how-much-unified-memory-for-local-llm) — 16GB vs 36GB vs 64GB vs 128GB 가이드',
          '[Apple Silicon을 위한 최고의 LLM 모델](/local-llms/best-models-apple-silicon-2026) — Mac 구성별 모델 권장사항',
          '[Mac에서 MLX vs Ollama vs llama.cpp](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — 프레임워크 속도 비교 및 설정 가이드',
          '[Apple Silicon vs NVIDIA GPU 로컬 LLM](/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — 크로스 플랫폼 하드웨어 비교',
          '[LLM 양자화 설명](/local-llms/llm-quantization-explained) — Q4/Q5/Q8/FP16 심층 분석',
          '[Mac Mini M5 로컬 AI 서버로 사용하기](/local-llms/mac-mini-m5-local-ai-server) — 항상 켜져 있는 추론 서버 설정',
          '[2026년 최고의 로컬 추론 모델: DeepSeek-R1 Distill 순위](/ko/local-llms/best-local-reasoning-model-deepseek-r1-2026) — 이 하드웨어의 70B 추론 Distill: M5 Max에서의 벤치마크 및 Ollama 설정.',
          '[DeepSeek-R1 Distill VRAM 치트시트](/ko/prompt-bites/deepseek-r1-distill-vram-cheatsheet) — 각 Distill 크기별 필요 VRAM (Q4_K_M): 70B → 42 GB — M5 Max 적합 여부 확인.',
        ],
      },
    },
  },
}
