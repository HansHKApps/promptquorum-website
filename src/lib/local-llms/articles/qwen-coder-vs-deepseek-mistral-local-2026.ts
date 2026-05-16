// Slug: qwen-coder-vs-deepseek-mistral-local-2026

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Best Models',
    title: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral: Local Coding Benchmark 2026',
    seoTitle: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral: 2026 Benchmark',
    intro: 'Qwen 3.6 27B scores 77.2% SWE-bench locally on 16 GB VRAM, matching DeepSeek Coder (91.6% HumanEval, ~75% SWE-bench) and outperforming Mistral Devstral Small 24B (90.1% HumanEval, ~73% SWE-bench) on agentic coding. All three run locally on consumer hardware. This benchmark covers HumanEval, SWE-bench, MBPP, per-token cost math, latency at different quantizations, hardware profiles, and multi-model dispatch strategy for coding workloads.',
    metaDescription: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral: HumanEval 92.1% vs 91.6% vs 90.1%, SWE-bench, MBPP, cost, and hardware. Local coding LLM benchmark 2026.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Software developers choosing a local coding LLM for daily development workflows',
    primaryTerm: 'local coding LLM benchmark 2026',
    leadAnswerBlock: '**Qwen 3.6 27B leads local coding benchmarks in May 2026: 92.1% HumanEval, 77.2% SWE-bench, 84.3% MBPP. DeepSeek Coder is 0.5 pp behind on HumanEval but 21× cheaper as a cloud API. Mistral Devstral excels at agentic multi-step tasks. For EU GDPR compliance, only local Qwen keeps code off cloud servers. For cost-optimised coding at scale, dispatch local Qwen for private code and DeepSeek Coder for public/non-sensitive tasks.**',
    quickAnswerTop: {
      en: {
        question: 'Which local coding LLM is best in 2026 — Qwen 3.6, DeepSeek Coder, or Mistral Devstral?',
        answer: 'May 2026: Qwen 3.6 27B scores 77.2% SWE-bench locally on 16 GB VRAM locally on 16 GB VRAM. DeepSeek Coder scores 91.6% HumanEval as a cloud API at $0.14/1M tokens. Mistral Devstral Small 24B scores 90.1% HumanEval and leads on agentic multi-file tasks. For GDPR-compliant EU development, local Qwen 3.6 27B is the clear winner. For cost-optimised non-private coding, DeepSeek Coder API is the cheapest option.',
        bullets: [
          'Qwen 3.6 27B — 92.1% HumanEval, 77.2% SWE-bench, 84.3% MBPP, 16 GB VRAM local',
          'DeepSeek Coder — 91.6% HumanEval, ~75% SWE-bench, $0.14/1M tokens cloud API',
          'Mistral Devstral Small 24B — 90.1% HumanEval, best for agentic multi-step tasks, 14 GB VRAM',
          'GDPR: only local Qwen 3.6 keeps code on EU hardware by design',
          'Dispatch strategy: local Qwen for private/GDPR tasks, DeepSeek for bulk public code',
        ],
        updatedDate: '2026-05-16',
      },
      de: {
        question: 'Welches lokale Coding-LLM ist 2026 am besten — Qwen 3.6, DeepSeek Coder oder Mistral Devstral?',
        answer: 'Mai 2026: Qwen 3.6 27B erreicht 92,1% HumanEval und 77,2% SWE-bench lokal auf 16 GB VRAM. DeepSeek Coder erreicht 91,6% HumanEval als Cloud-API fuer 0,14 $/1M Token. Mistral Devstral Small 24B erreicht 90,1% HumanEval und ist fuehren bei agentischen Multi-Datei-Aufgaben. Fuer DSGVO-konforme EU-Entwicklung ist lokales Qwen 3.6 27B die klare Wahl.',
        bullets: [
          'Qwen 3.6 27B — 92,1% HumanEval, 77,2% SWE-bench, 84,3% MBPP, 16 GB VRAM lokal',
          'DeepSeek Coder — 91,6% HumanEval, ~75% SWE-bench, 0,14 $/1M Token Cloud-API',
          'Mistral Devstral Small 24B — 90,1% HumanEval, bestes agentisches Verhalten, 14 GB VRAM',
          'DSGVO: Nur lokales Qwen 3.6 haelt Code per Design auf EU-Hardware',
        ],
        updatedDate: '2026-05-16',
      },
      fr: {
        question: 'Quel LLM de code local est le meilleur en 2026 — Qwen 3.6, DeepSeek Coder ou Mistral Devstral ?',
        answer: 'Mai 2026 : Qwen 3.6 27B obtient 92,1% HumanEval et 77,2% SWE-bench en local sur 16 Go VRAM. DeepSeek Coder obtient 91,6% HumanEval en API cloud à 0,14 $/1M tokens. Mistral Devstral Small 24B obtient 90,1% HumanEval et excelle sur les tâches agentiques multi-fichiers. Pour le développement EU conforme RGPD, Qwen 3.6 27B local est le choix évident.',
        bullets: [
          'Qwen 3.6 27B — 92,1% HumanEval, 77,2% SWE-bench, 84,3% MBPP, 16 Go VRAM local',
          'DeepSeek Coder — 91,6% HumanEval, ~75% SWE-bench, 0,14 $/1M tokens API cloud',
          'Mistral Devstral Small 24B — 90,1% HumanEval, meilleur pour les tâches agentiques, 14 Go VRAM',
          'RGPD : seul Qwen 3.6 local conserve le code sur matériel UE par conception',
        ],
        updatedDate: '2026-05-16',
      },
      ja: {
        question: '2026年、最高のローカルコーディングLLMは？Qwen 3.6、DeepSeek Coder、Mistral Devstralの比較',
        answer: '2026年5月：Qwen 3.6 27Bは16 GB VRAMでローカル実行して92.1% HumanEvalと77.2% SWE-benchを達成。DeepSeek Coderは$0.14/1MトークンのクラウドAPIで91.6% HumanEval。Mistral Devstral Small 24Bは90.1% HumanEvalで、エージェント型マルチステップタスクに最適。GDPR準拠のEU開発には、ローカルQwen 3.6 27Bが明確な勝者。',
        bullets: [
          'Qwen 3.6 27B — 92.1% HumanEval、77.2% SWE-bench、84.3% MBPP、16 GB VRAMローカル',
          'DeepSeek Coder — 91.6% HumanEval、~75% SWE-bench、$0.14/1Mトークン クラウドAPI',
          'Mistral Devstral Small 24B — 90.1% HumanEval、エージェント型マルチファイルタスクに最適、14 GB VRAM',
          'GDPR：ローカルQwen 3.6のみが設計によりコードをEUハードウェアに保持',
        ],
        updatedDate: '2026-05-16',
      },
      zh: {
        question: '2026年最佳本地编程LLM：Qwen 3.6、DeepSeek Coder还是Mistral Devstral？',
        answer: '2026年5月：Qwen 3.6 27B在16 GB显存下本地运行达到92.1% HumanEval和77.2% SWE-bench。DeepSeek Coder作为云API以$0.14/1M令牌达到91.6% HumanEval。Mistral Devstral Small 24B达到90.1% HumanEval，在智能体多步骤任务上领先。对于GDPR合规的欧盟开发，本地Qwen 3.6 27B是明确的赢家。',
        bullets: [
          'Qwen 3.6 27B — 92.1% HumanEval，77.2% SWE-bench，84.3% MBPP，16 GB显存本地',
          'DeepSeek Coder — 91.6% HumanEval，~75% SWE-bench，$0.14/1M令牌云API',
          'Mistral Devstral Small 24B — 90.1% HumanEval，智能体多文件任务最佳，14 GB显存',
          'GDPR：只有本地Qwen 3.6从设计上将代码保存在欧盟硬件上',
        ],
        updatedDate: '2026-05-16',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Why Local Coding Models Caught Up', anchor: '#local-caught-up' },
      { label: 'Benchmark Table', anchor: '#benchmark-table' },
      { label: 'Per-Token Cost Math', anchor: '#cost-math' },
      { label: 'Latency Reality', anchor: '#latency' },
      { label: 'Hardware Requirements', anchor: '#hardware' },
      { label: 'Multi-Model Dispatch Strategy', anchor: '#dispatch-strategy' },
      { label: 'PromptQuorum Integration', anchor: '#promptquorum' },
      { label: 'Related Reading', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    comparisonTable: {
      columns: ['Model', 'HumanEval', 'SWE-bench', 'MBPP', 'Deployment', 'Input Cost ($/1M)', 'VRAM (local)'],
      rows: [
        { Model: 'Qwen 3.6 27B', HumanEval: '92.1%', 'SWE-bench': '77.2%', MBPP: '84.3%', Deployment: 'Local (Ollama)', 'Input Cost ($/1M)': '$0 after hardware', 'VRAM (local)': '16 GB' },
        { Model: 'DeepSeek Coder', HumanEval: '91.6%', 'SWE-bench': '~75%', MBPP: '82.7%', Deployment: 'Cloud API', 'Input Cost ($/1M)': '$0.14', 'VRAM (local)': 'N/A (cloud)' },
        { Model: 'Mistral Devstral Small 24B', HumanEval: '90.1%', 'SWE-bench': '~73%', MBPP: '81.4%', Deployment: 'Local (Ollama)', 'Input Cost ($/1M)': '$0 after hardware', 'VRAM (local)': '14 GB' },
        { Model: 'Codestral 22B', HumanEval: '88.9%', 'SWE-bench': 'N/A', MBPP: '79.2%', Deployment: 'Local or API', 'Input Cost ($/1M)': '$0.20 (API)', 'VRAM (local)': '13 GB' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B leads**: 92.1% HumanEval, 77.2% SWE-bench, 84.3% MBPP — highest across all three benchmarks locally.',
          '**DeepSeek Coder is the cloud cost winner**: $0.14/1M input tokens, 0.5 pp below Qwen on HumanEval. Use it for non-sensitive public code at scale.',
          '**Mistral Devstral excels at agentic tasks**: better at multi-step tool use and multi-file refactoring than pure benchmark scores suggest.',
          '**Latency**: Qwen 3.6 27B at Q4_K_M runs at 35 tokens/sec on RTX 4090. Devstral at 14 GB runs at 40 tokens/sec. DeepSeek Coder API latency is network-dependent (~50–200ms first token).',
          '**Dispatch strategy**: route sensitive/GDPR code tasks to local Qwen 3.6, high-volume non-sensitive tasks to DeepSeek Coder API, agentic refactoring to local Devstral.',
        ],
      },
      localCaughtUp: {
        id: 'local-caught-up',
        title: 'Why Local Coding Models Caught Up',
        content: [
          'For the first three years of the LLM era, cloud models led local models on every coding benchmark by 10–20 percentage points. That gap closed in 2025–2026 as open-weight models scaled into the 27–72B parameter range with coding-specific training on large code corpora.',
          'Qwen 3.6 27B, released April 2026, achieved 77.2% SWE-bench — a benchmark that tests whether models can resolve real GitHub issues in open-source codebases. This score compares directly to Claude Sonnet 4.6 (~72%) and GPT-4o (~73%), both significantly larger and cloud-only. The architectural insight is that focused coding pre-training on filtered code data (Alibaba published 3T code tokens for Qwen 3) compensates for the parameter size gap.',
          'Three factors drove the convergence: (1) high-quality code training data at scale, (2) RLHF tuned on real software engineering tasks rather than generic instruction following, and (3) improved GGUF quantization that preserves coding ability at Q4 precision better than earlier quantization methods.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 3.6 27B scores 77.2% SWE-bench locally — matching or beating Claude Sonnet 4.6 and GPT-4o on real-world GitHub issue resolution.' },
          { type: 'plain-terms', text: 'SWE-bench tests whether an AI can actually fix bugs in real open-source codebases like Django, Flask, and NumPy. A score of 77.2% means the model resolved 77 out of 100 real GitHub issues without human help.' },
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Benchmark Table',
        content: 'All scores are published May 2026 figures from official model pages or open leaderboards. HumanEval uses pass@1 metric. SWE-bench uses verified test pass rate. MBPP uses pass@1 on the full MBPP test set.',
        rows: [
          { Benchmark: 'HumanEval (Python, pass@1)', 'Qwen 3.6 27B': '92.1%', 'DeepSeek Coder': '91.6%', 'Mistral Devstral 24B': '90.1%', 'Codestral 22B': '88.9%' },
          { Benchmark: 'SWE-bench (GitHub issues)', 'Qwen 3.6 27B': '77.2%', 'DeepSeek Coder': '~75%', 'Mistral Devstral 24B': '~73%', 'Codestral 22B': 'N/A' },
          { Benchmark: 'MBPP (Python problems)', 'Qwen 3.6 27B': '84.3%', 'DeepSeek Coder': '82.7%', 'Mistral Devstral 24B': '81.4%', 'Codestral 22B': '79.2%' },
          { Benchmark: 'Multi-lang (Java, Go, Rust)', 'Qwen 3.6 27B': '88.4%', 'DeepSeek Coder': '87.1%', 'Mistral Devstral 24B': '84.6%', 'Codestral 22B': '83.1%' },
        ],
        columns: ['Benchmark', 'Qwen 3.6 27B', 'DeepSeek Coder', 'Mistral Devstral 24B', 'Codestral 22B'],
        tableFormat: true,
        callouts: [
          { type: 'note', text: 'SWE-bench scores for DeepSeek Coder and Mistral Devstral are estimated from available leaderboard data. Qwen 3.6 27B and Codestral SWE-bench scores are from official publications.' },
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'Per-Token Cost Math',
        content: [
          'The economics of coding LLMs depend on usage volume, task sensitivity, and infrastructure overhead. Below are cost projections at different daily token volumes for a single developer.',
          'At 5M tokens/day (heavy coding session: autocomplete, test generation, code review), DeepSeek Coder API costs $0.70/day. Over a working year (250 days), that is $175/year per developer for non-sensitive tasks. An RTX 4090 ($1,500–2,000) running local Qwen 3.6 27B pays off in 8–11 years at this rate — but the break-even shifts dramatically for teams and GDPR-sensitive code.',
          'For a team of 10 generating 50M tokens/day: DeepSeek Coder costs $7/day ($1,750/year). An RTX 4090 system per 2 developers ($3,000 total for the team) breaks even in under 2 years, with full GDPR compliance and zero per-token cost thereafter.',
        ],
        codeBlock: `# Cost calculator: per-token math for coding LLMs
# Assumptions: input + output ratio 1:2, so effective blended rate

# DeepSeek Coder (cloud)
input_rate  = 0.14  # $/1M tokens
output_rate = 0.55  # $/1M tokens
blended     = (input_rate + 2 * output_rate) / 3  # ~$0.41/1M blended

daily_tokens = 5_000_000  # 5M tokens/day per developer
daily_cost   = (daily_tokens / 1_000_000) * blended  # $2.05/day
annual_cost  = daily_cost * 250  # $512/year per developer

# Qwen 3.6 27B local (RTX 4090)
hardware_cost = 1800  # USD (RTX 4090 GPU)
power_cost    = 0.35 * 24 * 365 * 0.12  # 350W, 12¢/kWh = $367/year
annual_local  = power_cost  # $367/year after hardware
# Break-even vs DeepSeek at 5M tokens/day: hardware_cost / (annual_cost - annual_local) ≈ 2.5 years`,
        codeLanguage: 'python',
      },
      latency: {
        id: 'latency',
        title: 'Latency Reality',
        content: 'Latency matters for interactive coding: autocomplete feels broken above 500ms, code review is acceptable up to 3s, batch jobs are latency-insensitive.',
        rows: [
          { Model: 'Qwen 3.6 27B Q4_K_M (RTX 4090)', 'First Token (ms)': '80–120', 'Sustained (tok/sec)': '35', 'Interactive Coding?': '✅ Yes' },
          { Model: 'Qwen 3.6 27B Q4_K_M (Apple M4 Max 48 GB)', 'First Token (ms)': '50–80', 'Sustained (tok/sec)': '42', 'Interactive Coding?': '✅ Yes' },
          { Model: 'Mistral Devstral 24B Q4_K_M (RTX 4090)', 'First Token (ms)': '60–100', 'Sustained (tok/sec)': '40', 'Interactive Coding?': '✅ Yes' },
          { Model: 'DeepSeek Coder (API, EU latency)', 'First Token (ms)': '150–400', 'Sustained (tok/sec)': '80–120', 'Interactive Coding?': '⚠️ Marginal' },
          { Model: 'Qwen 3.6 27B Q8_0 (dual RTX 3090)', 'First Token (ms)': '100–150', 'Sustained (tok/sec)': '25', 'Interactive Coding?': '✅ Yes (quality tradeoff)' },
        ],
        columns: ['Model', 'First Token (ms)', 'Sustained (tok/sec)', 'Interactive Coding?'],
        tableFormat: true,
        note: 'DeepSeek API latency from EU (Frankfurt) to DeepSeek servers varies by load. 400ms first-token is common during peak hours. For autocomplete workflows, local inference is reliably faster.',
        callouts: [
          { type: 'warning', text: 'Ollama default num_ctx 2048 increases apparent throughput (fewer tokens to process) but truncates context. Set num_ctx 32768 for accurate coding latency measurements.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Requirements',
        items: [
          '**Qwen 3.6 27B Q4_K_M**: 16 GB VRAM — RTX 4080 (16 GB), RTX 3090 (24 GB), RTX 4090 (24 GB), Apple M3/M4 Max 48 GB',
          '**Mistral Devstral Small 24B Q4_K_M**: 14 GB VRAM — RTX 4070 Ti Super (16 GB), RTX 3090 (24 GB), Apple M3 Pro 36 GB',
          '**Codestral 22B Q4_K_M**: 13 GB VRAM — RTX 4070 Ti (12 GB marginal, 16 GB recommended)',
          '**Running two models simultaneously**: RTX 4090 24 GB can hold Qwen 3.6 27B Q4_K_M + Devstral 24B Q4_K_M in a 48 GB dual-GPU setup',
          '**Apple Silicon recommendation**: M4 Pro with 48 GB unified memory runs Qwen 3.6 27B at 42 tokens/sec via MLX — the quietest and most power-efficient option',
        ],
        codeBlock: `# Ollama config for Qwen 3.6 27B with num_ctx and GPU layers
cat > Modelfile-qwen3-coder <<'EOF'
FROM qwen3
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen3-coder -f Modelfile-qwen3-coder
ollama run qwen3-coder`,
        codeLanguage: 'bash',
      },
      dispatchStrategy: {
        id: 'dispatch-strategy',
        title: 'Multi-Model Dispatch Strategy',
        content: [
          'No single coding model wins every task. Qwen 3.6 27B leads on benchmark accuracy. Devstral leads on agentic multi-file tasks. DeepSeek Coder is the cheapest at scale for non-sensitive code. A dispatch layer that routes tasks by type captures the benefits of all three.',
          'The optimal dispatch matrix for a development team:',
        ],
        rows: [
          { 'Task Type': 'Private/GDPR code (client data)', 'Recommended Model': 'Qwen 3.6 27B (local)', 'Why': 'GDPR compliance by design' },
          { 'Task Type': 'Autocomplete (interactive)', 'Recommended Model': 'Devstral 24B (local)', 'Why': 'Fastest sustained output, 40 tok/sec' },
          { 'Task Type': 'Code review (non-sensitive)', 'Recommended Model': 'DeepSeek Coder (API)', 'Why': '$0.14/1M, good quality, high throughput' },
          { 'Task Type': 'Complex refactoring (multi-file)', 'Recommended Model': 'Qwen 3.6 27B (local) + PromptQuorum consensus', 'Why': 'Best SWE-bench, GDPR-safe' },
          { 'Task Type': 'Batch test generation', 'Recommended Model': 'DeepSeek Coder (API)', 'Why': 'Cost-optimised for non-sensitive volume' },
        ],
        columns: ['Task Type', 'Recommended Model', 'Why'],
        tableFormat: true,
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum Integration',
        content: 'PromptQuorum routes code tasks across local Qwen, local Devstral, and cloud APIs based on task classification rules you define. This eliminates manual model switching and implements the dispatch matrix above automatically.',
        codeBlock: `# PromptQuorum routing config for coding workloads
# Set in your PromptQuorum settings or .env file

# Local models (via Ollama)
LOCAL_OLLAMA_URL=http://localhost:11434/v1
LOCAL_CODING_MODEL=qwen3-coder        # Qwen 3.6 27B with num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral     # Mistral Devstral 24B

# Cloud fallback
DEEPSEEK_API_KEY=your_key_here
DEEPSEEK_MODEL=deepseek-coder-v3

# Routing rules (PromptQuorum dispatch)
# route: task_contains("private") OR task_contains("customer") → qwen3-coder (local)
# route: task_type == "autocomplete" → devstral (local)
# route: token_count > 50000 → deepseek-coder-v3 (cloud, non-sensitive only)
# default → qwen3-coder (local)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'PromptQuorum routes coding tasks to local Qwen 3.6 for GDPR-sensitive code and DeepSeek Coder for non-sensitive bulk generation.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Qwen 3 vs Claude Sonnet 4.6 vs DeepSeek R2 — Full 2026 Comparison](/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[How to Run Qwen 3 Locally — Ollama + LM Studio Guide](/local-llms/run-qwen-locally-guide-2026)',
          '[Compare Models on PromptQuorum](/compare)',
          '[Best Local LLMs for Coding 2026](/local-llms/best-local-llms-for-coding)',
          '[Join the PromptQuorum Waitlist](/waitlist)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Is Qwen 3.6 27B better than DeepSeek Coder for local coding?', a: 'Yes on benchmarks: Qwen 3.6 27B scores 92.1% HumanEval vs DeepSeek Coder\'s 91.6% HumanEval, and 77.2% SWE-bench vs ~75%. Qwen also runs fully locally on 16 GB VRAM, making it GDPR-compliant for EU teams. DeepSeek Coder is a cloud API and costs $0.14/1M input tokens — the better choice for non-sensitive high-volume code generation where local hardware is not available.' },
          { q: 'What is Mistral Devstral and why is it mentioned here?', a: 'Mistral Devstral Small 24B is a coding-focused model from Mistral AI, released May 2026, designed specifically for agentic coding tasks — multi-file refactoring, tool use, and iterative code generation. It scores 90.1% HumanEval and runs on 14 GB VRAM. It is particularly strong at tasks that require multiple sequential code operations, where its agentic training gives it an edge over Qwen 3.6 27B\'s pure benchmark scores.' },
          { q: 'Can I run Qwen 3.6 27B and Devstral 24B simultaneously?', a: 'On a single RTX 4090 (24 GB VRAM), no — Qwen 3.6 27B Q4_K_M uses ~15.8 GB and Devstral 24B Q4_K_M uses ~14.2 GB, totalling ~30 GB. You would need a dual-GPU setup (two RTX 3090s or two RTX 4090s) or Apple Silicon with 96+ GB unified memory. The practical solution is to use one model at a time and switch via Ollama, which takes ~5 seconds to swap models on an RTX 4090.' },
          { q: 'Is DeepSeek Coder safe to use for EU company code?', a: 'DeepSeek Coder processes data on DeepSeek\'s servers, which are operated by DeepSeek AI, a company incorporated in China. The EU Commission has not issued an adequacy decision for China. Using DeepSeek Coder with EU personal data or proprietary source code containing personal information requires legal analysis of GDPR Article 44 compliance. For proprietary code without personal data, consult your legal team. For personal data processing, local Qwen 3.6 27B is the compliant alternative.' },
          { q: 'What is MBPP and how does it differ from HumanEval?', a: 'MBPP (Mostly Basic Python Problems) tests code generation on ~500 beginner-to-intermediate Python problems. HumanEval (GitHub Copilot benchmark) tests 164 hand-authored Python functions. SWE-bench tests real-world GitHub issue resolution. MBPP rewards broad Python coverage; HumanEval rewards function-level correctness; SWE-bench rewards real engineering judgment. For production use, SWE-bench is the most predictive of real-world performance.' },
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Best Models',
    title: 'Qwen 3.6 Coder vs. DeepSeek Coder vs. Mistral Devstral: Lokaler Coding-Benchmark 2026',
    seoTitle: 'Qwen 3.6 Coder vs. DeepSeek Coder vs. Mistral Devstral: Benchmark 2026',
    intro: 'Qwen 3.6 27B erreicht 92,1% HumanEval und 77,2% SWE-bench lokal auf 16 GB VRAM. DeepSeek Coder erreicht 91,6% HumanEval als Cloud-API. Mistral Devstral Small 24B erreicht 90,1% HumanEval und fuehrt bei agentischen Multi-Datei-Aufgaben.',
    metaDescription: 'Qwen 3.6 Coder vs. DeepSeek Coder vs. Mistral Devstral: HumanEval, SWE-bench, MBPP, Kosten und Hardware im Vergleich. Lokaler Coding-LLM-Benchmark 2026.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '9 min Lesezeit',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 3.6 27B fuehrt: 92,1% HumanEval, 77,2% SWE-bench, 84,3% MBPP — hoechste Werte in allen drei Benchmarks lokal.',
          'DeepSeek Coder ist der Cloud-Kostensieger: 0,14 $/1M Token, 0,5 Prozentpunkte hinter Qwen bei HumanEval.',
          'Mistral Devstral glaenzt bei agentischen Aufgaben: besser bei mehrstufigem Tool-Einsatz und Multi-Datei-Refactoring.',
          'Dispatch-Strategie: private/DSGVO-Coding-Aufgaben → lokales Qwen 3.6, nicht-sensitive Massenverarbeitung → DeepSeek Coder API.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Best Models',
    title: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral : Benchmark Code Local 2026',
    seoTitle: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral : Benchmark 2026',
    intro: 'Qwen 3.6 27B obtient 92,1% HumanEval et 77,2% SWE-bench en local sur 16 Go VRAM. DeepSeek Coder obtient 91,6% HumanEval en API cloud. Mistral Devstral Small 24B obtient 90,1% HumanEval et excelle sur les tâches agentiques multi-fichiers.',
    metaDescription: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral : HumanEval, SWE-bench, MBPP, coûts et matériel comparés. Benchmark LLM de code local 2026.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '9 min de lecture',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 3.6 27B en tête : 92,1% HumanEval, 77,2% SWE-bench, 84,3% MBPP — meilleurs scores sur les trois benchmarks en local.',
          'DeepSeek Coder est le champion du coût cloud : 0,14 $/1M tokens, 0,5 pp derrière Qwen sur HumanEval.',
          'Mistral Devstral excelle sur les tâches agentiques : meilleur sur les outils multi-étapes et le refactoring multi-fichiers.',
          'Stratégie de dispatch : code privé/RGPD → Qwen 3.6 local, génération en volume non-sensible → API DeepSeek Coder.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Best Models',
    title: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral：ローカルコーディングベンチマーク 2026',
    seoTitle: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral：2026ベンチマーク',
    intro: 'Qwen 3.6 27Bは16 GB VRAMでローカル実行して92.1% HumanEvalと77.2% SWE-benchを達成。DeepSeek CoderはクラウドAPIで91.6% HumanEval。Mistral Devstral Small 24Bは90.1% HumanEvalで、エージェント型マルチファイルタスクに最適。',
    metaDescription: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral：HumanEval、SWE-bench、MBPP、コスト、ハードウェアを比較。ローカルコーディングLLMベンチマーク2026。',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '9分で読めます',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 3.6 27Bがリード：92.1% HumanEval、77.2% SWE-bench、84.3% MBPP — 3つのベンチマーク全てでローカル最高スコア。',
          'DeepSeek Coderがクラウドコスト最安：$0.14/1Mトークン、HumanEvalでQwenに0.5ポイント差。',
          'Mistral Devstralはエージェント型タスクで優秀：マルチステップツール使用とマルチファイルリファクタリングで優位。',
          'ディスパッチ戦略：プライベート/GDPR対象のコーディングタスク → ローカルQwen 3.6、非機密の大量生成 → DeepSeek Coder API。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Best Models',
    title: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral：本地编程基准测试 2026',
    seoTitle: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral：2026基准测试',
    intro: 'Qwen 3.6 27B在16 GB显存下本地运行达到92.1% HumanEval和77.2% SWE-bench。DeepSeek Coder作为云API达到91.6% HumanEval。Mistral Devstral Small 24B达到90.1% HumanEval，在智能体多文件任务上领先。',
    metaDescription: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral：HumanEval、SWE-bench、MBPP、成本和硬件比较。本地编程LLM基准测试2026。',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '9分钟阅读',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 3.6 27B领先：92.1% HumanEval，77.2% SWE-bench，84.3% MBPP — 三项基准测试本地最高分。',
          'DeepSeek Coder是云端成本冠军：$0.14/1M令牌，HumanEval比Qwen低0.5个百分点。',
          'Mistral Devstral擅长智能体任务：在多步骤工具使用和多文件重构上表现更好。',
          '调度策略：私有/GDPR相关代码任务 → 本地Qwen 3.6，非敏感批量生成 → DeepSeek Coder API。',
        ],
      },
    },
  },
};
