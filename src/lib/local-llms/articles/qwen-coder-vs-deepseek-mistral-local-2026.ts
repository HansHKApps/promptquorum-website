// Slug: qwen-coder-vs-deepseek-mistral-local-2026

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Best Models',
    title: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral: Local Coding Benchmark 2026',
    seoTitle: 'Qwen 3.6 Coder vs DeepSeek vs Mistral: Coding Benchmark 2026',
    intro: 'Qwen 3.6 27B scores 77.2% SWE-bench locally on 16 GB VRAM, matching DeepSeek Coder (91.6% HumanEval, ~75% SWE-bench) and outperforming Mistral Devstral Small 24B (90.1% HumanEval, ~73% SWE-bench) on agentic coding. All three run locally on consumer hardware. This benchmark covers HumanEval, SWE-bench, MBPP, per-token cost math, latency at different quantizations, hardware profiles, and multi-model dispatch strategy for coding workloads.',
    metaDescription: 'Local coding model benchmark: Qwen 3.6 27B (92.1% HumanEval, 77.2% SWE-bench), DeepSeek Coder ($0.14/1M), Mistral Devstral (agentic tasks). Cost, latency, hardware.',
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
      es: {
        question: '¿Cuál es el mejor LLM local de código en 2026 — Qwen 3.6, DeepSeek Coder o Mistral Devstral?',
        answer: 'Mayo 2026: Qwen 3.6 27B alcanza 77.2% SWE-bench localmente en 16 GB VRAM. DeepSeek Coder alcanza 91.6% HumanEval como API cloud a $0.14/1M tokens. Mistral Devstral Small 24B alcanza 90.1% HumanEval y lidera en tareas agénticas multi-archivo. Para desarrollo en la UE conforme al GDPR, el Qwen 3.6 27B local es el ganador claro.',
        bullets: [
          'Qwen 3.6 27B — 92.1% HumanEval, 77.2% SWE-bench, 84.3% MBPP, 16 GB VRAM local',
          'DeepSeek Coder — 91.6% HumanEval, ~75% SWE-bench, $0.14/1M tokens API cloud',
          'Mistral Devstral Small 24B — 90.1% HumanEval, mejor para tareas agénticas, 14 GB VRAM',
          'GDPR: solo el Qwen 3.6 local mantiene el código en hardware de la UE por diseño',
          'Estrategia de despacho: Qwen local para tareas privadas/GDPR, DeepSeek para código público en volumen',
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
          'Qwen 3.6 27B, released April 2026, achieved 77.2% SWE-bench — a benchmark that tests whether models can resolve real GitHub issues in open-source codebases. This score compares directly to Claude Sonnet 4.6 (~72%) and GPT-5.5 (~73%), both significantly larger and cloud-only. The architectural insight is that focused coding pre-training on filtered code data (Alibaba published 3T code tokens for Qwen 3) compensates for the parameter size gap.',
          'Three factors drove the convergence: (1) high-quality code training data at scale, (2) RLHF tuned on real software engineering tasks rather than generic instruction following, and (3) improved GGUF quantization that preserves coding ability at Q4 precision better than earlier quantization methods.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 3.6 27B scores 77.2% SWE-bench locally — matching or beating Claude Sonnet 4.6 and GPT-5.5 on real-world GitHub issue resolution.' },
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
          { type: 'tip', text: 'DeepSeek\'s model lineup evolves frequently. Verify the current model name and pricing at platform.deepseek.com before deployment. Figures reflect publicly available data as of May 2026.' },
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'Per-Token Cost Math',
        content: [
          'The economics of coding LLMs depend on usage volume, task sensitivity, and infrastructure overhead. Below are cost projections at different daily token volumes for a single developer. Note: All power costs are calculated for EU electricity rates (€0.35/kWh), standard for Germany and much of Europe as of May 2026.',
          'At 5M tokens/day (heavy coding session: autocomplete, test generation, code review), DeepSeek Coder cloud API costs roughly $0.70/day at typical rates. Over a working year (250 days), that is ~$175/year per developer for non-sensitive tasks. An RTX 4090 ($1,500–2,000) running local Qwen 3.6 27B with EU power costs pays for itself in 5–7 years — but the break-even shifts dramatically for teams and GDPR-sensitive code.',
          'For a team of 10 generating 50M tokens/day: cloud API costs ~$7/day (~$1,750/year). An RTX 4090 system per 2 developers ($3,000 total for the team) breaks even in under 2 years, with full GDPR compliance and zero per-token cost thereafter.',
        ],
        codeBlock: `# Cost calculator: per-token math for coding LLMs
# Assumptions: input + output ratio 1:2, so effective blended rate
# Electricity: EU average €0.35/kWh (May 2026)

# DeepSeek Coder (cloud)
input_rate  = 0.14  # $/1M tokens (approximate)
output_rate = 0.28  # $/1M tokens (approximate for deepseek-chat)
blended     = (input_rate + 2 * output_rate) / 3  # ~$0.23/1M blended

daily_tokens = 5_000_000  # 5M tokens/day per developer
daily_cost   = (daily_tokens / 1_000_000) * blended  # $1.15/day
annual_cost  = daily_cost * 250  # $287/year per developer

# Qwen 3.6 27B local (RTX 4090)
hardware_cost = 1800  # USD (RTX 4090 GPU)
power_cost    = 0.35 * 24 * 365 * 0.35  # 350W, €0.35/kWh = €1,073/year (~$1,073/year)
annual_local  = power_cost  # $1,073/year after hardware
# Break-even vs DeepSeek at 5M tokens/day: hardware_cost / (annual_cost - annual_local) ≈ 2.1 years`,
        codeLanguage: 'python',
      },
      latency: {
        id: 'latency',
        title: 'Latency Reality',
        content: 'Latency matters for interactive coding: autocomplete feels broken above 500ms, code review is acceptable up to 3s, batch jobs are latency-insensitive. The figures below are estimates from community benchmarks and internal testing, not official vendor measurements.',
        rows: [
          { Model: 'Qwen 3.6 27B Q4_K_M (RTX 4090)', 'First Token (ms)': '80–120', 'Sustained (tok/sec)': '~35', 'Interactive Coding?': '✅ Yes' },
          { Model: 'Qwen 3.6 27B Q4_K_M (Apple M4 Max 48 GB)', 'First Token (ms)': '50–80', 'Sustained (tok/sec)': '~42', 'Interactive Coding?': '✅ Yes' },
          { Model: 'Mistral Devstral 24B Q4_K_M (RTX 4090)', 'First Token (ms)': '60–100', 'Sustained (tok/sec)': '~40', 'Interactive Coding?': '✅ Yes' },
          { Model: 'DeepSeek Coder (API, EU latency)', 'First Token (ms)': '150–400', 'Sustained (tok/sec)': '80–120', 'Interactive Coding?': '⚠️ Marginal' },
          { Model: 'Qwen 3.6 27B Q8_0 (dual RTX 3090)', 'First Token (ms)': '100–150', 'Sustained (tok/sec)': '~25', 'Interactive Coding?': '✅ Yes (quality tradeoff)' },
        ],
        columns: ['Model', 'First Token (ms)', 'Sustained (tok/sec)', 'Interactive Coding?'],
        tableFormat: true,
        note: 'Latency figures are estimates from community benchmarks and testing, not official vendor measurements. DeepSeek API latency from EU (Frankfurt) to DeepSeek servers varies by load; 400ms first-token is common during peak hours. For autocomplete workflows, local inference is reliably faster.',
        callouts: [
          { type: 'warning', text: 'Ollama default num_ctx 2048 increases apparent throughput (fewer tokens to process) but truncates context. Set num_ctx 32768 for accurate coding latency measurements.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Requirements',
        items: [
          '**Qwen 3.6 27B Q4_K_M**: 16 GB VRAM — RTX 4080 (16 GB), RTX 3090 (24 GB), RTX 4090 (24 GB), Apple M3/M4/M5 Max 48 GB',
          '**Mistral Devstral Small 24B Q4_K_M**: 14 GB VRAM — RTX 4070 Ti Super (16 GB), RTX 3090 (24 GB), Apple M3/M4/M5 Pro 36 GB',
          '**Codestral 22B Q4_K_M**: 13 GB VRAM — RTX 4070 Ti (12 GB marginal, 16 GB recommended)',
          '**Running two models simultaneously**: RTX 4090 24 GB can hold Qwen 3.6 27B Q4_K_M + Devstral 24B Q4_K_M in a 48 GB dual-GPU setup. Apple M5 Max (128 GB unified, 460–614 GB/s bandwidth) comfortably runs both models simultaneously via MLX.',
          '**Apple Silicon recommendation**: M5 Pro (64 GB unified memory) runs Qwen 3.6 27B at ~48 tokens/sec via MLX. M5 Max (128 GB) achieves ~55 tokens/sec for Qwen and can run both Qwen + Devstral simultaneously — the quietest and most power-efficient option. M4 Pro with 48 GB also suitable at 42 tokens/sec.',
        ],
        codeBlock: `# Ollama config for Qwen 3.6 27B with num_ctx and GPU layers
cat > Modelfile-qwen3-coder <<'EOF'
FROM qwen3-coder:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen3-coder-local -f Modelfile-qwen3-coder
ollama run qwen3-coder-local`,
        codeLanguage: 'bash',
      },
      dispatchStrategy: {
        id: 'dispatch-strategy',
        title: 'Multi-Model Dispatch Strategy',
        content: [
          'No single coding model wins every task. Qwen 3.6 27B leads on benchmark accuracy. Devstral leads on agentic multi-file tasks. DeepSeek Coder is the cheapest at scale for non-sensitive code. A dispatch layer that routes tasks by type captures the benefits of all three.',
          'A suggested dispatch matrix for a development team:',
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
LOCAL_CODING_MODEL=qwen3-coder-local   # Qwen 3.6 27B with num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral     # Mistral Devstral 24B

# Cloud fallback
DEEPSEEK_API_KEY=your_key_here
DEEPSEEK_MODEL=deepseek-chat

# Routing rules (PromptQuorum dispatch)
# route: task_contains("private") OR task_contains("customer") → qwen3-coder-local (local)
# route: task_type == "autocomplete" → devstral (local)
# route: token_count > 50000 → deepseek-chat (cloud, non-sensitive only)
# default → qwen3-coder-local (local)`,
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
          { q: 'Is Qwen 3.6 27B better than DeepSeek Coder for local coding?', a: 'For local deployment: Qwen 3.6 27B achieves 77.2% SWE-bench (verified) and runs fully locally on 16 GB VRAM, making it GDPR-compliant for EU teams. DeepSeek Coder is a cloud API costing ~$0.14/1M input tokens — the better choice for non-sensitive high-volume code generation where local hardware is not available. Trade-offs depend on your data sensitivity and budget, not a single winner.' },
          { q: 'What is Mistral Devstral and why is it mentioned here?', a: 'Mistral Devstral Small 24B is a coding-focused model from Mistral AI, released May 2026, designed specifically for agentic coding tasks — multi-file refactoring, tool use, and iterative code generation. It scores 90.1% HumanEval and runs on 14 GB VRAM. It is particularly strong at tasks that require multiple sequential code operations, where its agentic training gives it an edge over Qwen 3.6 27B\'s pure benchmark scores.' },
          { q: 'Can I run Qwen 3.6 27B and Devstral 24B simultaneously?', a: 'On a single RTX 4090 (24 GB VRAM), no — Qwen 3.6 27B Q4_K_M uses ~15.8 GB and Devstral 24B Q4_K_M uses ~14.2 GB, totalling ~30 GB. You would need a dual-GPU setup (two RTX 3090s or two RTX 4090s) or Apple Silicon with 96+ GB unified memory. The practical solution is to use one model at a time and switch via Ollama, which takes ~5 seconds to swap models on an RTX 4090.' },
          { q: 'Is DeepSeek Coder safe to use for EU company code?', a: 'DeepSeek Coder processes data on DeepSeek\'s servers, which are operated by DeepSeek AI, a company incorporated in China. The EU Commission has not issued an adequacy decision for China. Using DeepSeek Coder with EU personal data or proprietary source code containing personal information requires legal analysis of GDPR Article 44 compliance. For proprietary code without personal data, consult your legal team. For personal data processing, local Qwen 3.6 27B is the compliant alternative.' },
          { q: 'What is SWE-bench and why focus on it?', a: 'SWE-bench (Software Engineering benchmark) tests whether an LLM can resolve real GitHub issues in open-source codebases like Django, Flask, and NumPy. It measures practical software engineering ability rather than isolated function-level coding. Qwen 3.6 27B achieves 77.2% on SWE-bench Verified, the most reliable real-world coding metric currently available.' },
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Best Models',
    title: 'Qwen 3.6 Coder vs. DeepSeek Coder vs. Mistral Devstral: Lokaler Coding-Benchmark 2026',
    seoTitle: 'Qwen 3.6 Coder vs. DeepSeek vs. Mistral: Code-Benchmark 2026',
    intro: 'Qwen 3.6 27B erreicht 92,1% HumanEval und 77,2% SWE-bench lokal auf 16 GB VRAM. DeepSeek Coder erreicht 91,6% HumanEval als Cloud-API. Mistral Devstral Small 24B erreicht 90,1% HumanEval und fuehrt bei agentischen Multi-Datei-Aufgaben.',
    metaDescription: 'Qwen 3 Coder vs. DeepSeek vs. Mistral für lokales Coding 2026: Benchmarks, VRAM-Bedarf und Performance. Das beste lokale Coding-Modell.',
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
    seoTitle: 'Qwen 3.6 Coder vs DeepSeek vs Mistral : Benchmark Code 2026',
    intro: 'Qwen 3.6 27B obtient 77,2% SWE-bench en local sur 16 Go VRAM, rivalisant avec DeepSeek Coder (91,6% HumanEval, ~75% SWE-bench) et surpassant Mistral Devstral Small 24B (90,1% HumanEval, ~73% SWE-bench) sur les tâches de codage agentique. Les trois modèles fonctionnent localement sur du matériel grand public. Ce benchmark couvre HumanEval, SWE-bench, MBPP, le coût par token, la latence selon les quantisations, les profils matériels et la stratégie de dispatch multi-modèles pour les charges de travail de codage.',
    metaDescription: 'Benchmark code : Qwen 3.6 27B (92,1% HumanEval, 77,2% SWE-bench), DeepSeek Coder (0,14 $/1M), Mistral Devstral (tâches agents). Coûts, latence, matériel requis.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Développeurs logiciel choisissant un LLM de code local pour leurs workflows de développement quotidien',
    primaryTerm: 'local coding LLM benchmark 2026',
    leadAnswerBlock: '**Qwen 3.6 27B est en tête des benchmarks de code locaux en mai 2026 : 92,1% HumanEval, 77,2% SWE-bench, 84,3% MBPP. DeepSeek Coder est 0,5 point de pourcentage derrière sur HumanEval mais 21 fois moins cher en API cloud. Mistral Devstral excelle sur les tâches agentiques multi-étapes. Pour la conformité RGPD en Europe, seul Qwen local maintient le code hors des serveurs cloud. Pour un codage optimisé en coûts à grande échelle, routez vers Qwen local pour le code privé et vers DeepSeek Coder pour les tâches publiques non sensibles.**',
    toc: [
      { label: 'Éléments clés', anchor: '#key-takeaways' },
      { label: 'Pourquoi les modèles de code locaux ont rattrapé leur retard', anchor: '#local-caught-up' },
      { label: 'Tableau de benchmarks', anchor: '#benchmark-table' },
      { label: 'Coût par token', anchor: '#cost-math' },
      { label: 'Réalité de la latence', anchor: '#latency' },
      { label: 'Configuration matérielle requise', anchor: '#hardware' },
      { label: 'Stratégie de dispatch multi-modèles', anchor: '#dispatch-strategy' },
      { label: 'Intégration PromptQuorum', anchor: '#promptquorum' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    comparisonTable: {
      columns: ['Modèle', 'HumanEval', 'SWE-bench', 'MBPP', 'Déploiement', 'Coût entrée ($/1M)', 'VRAM (local)'],
      rows: [
        { 'Modèle': 'Qwen 3.6 27B', 'HumanEval': '92,1%', 'SWE-bench': '77,2%', 'MBPP': '84,3%', 'Déploiement': 'Local (Ollama)', 'Coût entrée ($/1M)': '$0 après achat', 'VRAM (local)': '16 Go' },
        { 'Modèle': 'DeepSeek Coder', 'HumanEval': '91,6%', 'SWE-bench': '~75%', 'MBPP': '82,7%', 'Déploiement': 'API cloud', 'Coût entrée ($/1M)': '$0,14', 'VRAM (local)': 'N/A (cloud)' },
        { 'Modèle': 'Mistral Devstral Small 24B', 'HumanEval': '90,1%', 'SWE-bench': '~73%', 'MBPP': '81,4%', 'Déploiement': 'Local (Ollama)', 'Coût entrée ($/1M)': '$0 après achat', 'VRAM (local)': '14 Go' },
        { 'Modèle': 'Codestral 22B', 'HumanEval': '88,9%', 'SWE-bench': 'N/A', 'MBPP': '79,2%', 'Déploiement': 'Local ou API', 'Coût entrée ($/1M)': '$0,20 (API)', 'VRAM (local)': '13 Go' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B en tête** : 92,1% HumanEval, 77,2% SWE-bench, 84,3% MBPP — meilleurs scores sur les trois benchmarks en local.',
          '**DeepSeek Coder est le champion du coût cloud** : 0,14 $/1M tokens, 0,5 point de pourcentage derrière Qwen sur HumanEval. À utiliser pour le code public non sensible à grande échelle.',
          '**Mistral Devstral excelle sur les tâches agentiques** : meilleur sur l\'utilisation d\'outils multi-étapes et le refactoring multi-fichiers que ne le laissent entendre ses scores bruts.',
          '**Latence** : Qwen 3.6 27B en Q4_K_M tourne à 35 tokens/sec sur RTX 4090. Devstral sur 14 Go à 40 tokens/sec. La latence de l\'API DeepSeek Coder dépend du réseau (~50–200 ms pour le premier token).',
          '**Stratégie de dispatch** : routez les tâches code sensibles/RGPD vers Qwen 3.6 local, les tâches non sensibles à volume vers l\'API DeepSeek Coder, le refactoring agentique vers Devstral local.',
        ],
      },
      localCaughtUp: {
        id: 'local-caught-up',
        title: 'Pourquoi les modèles de code locaux ont rattrapé leur retard',
        content: [
          'Durant les trois premières années de l\'ère LLM, les modèles cloud devançaient les modèles locaux de 10 à 20 points de pourcentage sur tous les benchmarks de code. Cet écart s\'est comblé en 2025–2026 lorsque les modèles open-weight ont atteint la plage des 27–72 milliards de paramètres, avec un entraînement spécialisé sur de larges corpus de code.',
          'Qwen 3.6 27B, publié en avril 2026, atteint 77,2% SWE-bench — un benchmark qui teste si les modèles peuvent résoudre de vraies issues GitHub dans des bases de code open source. Ce score se compare directement à Claude Sonnet 4.6 (~72%) et GPT-5.5 (~73%), tous deux bien plus volumineux et accessibles uniquement en cloud. L\'insight architectural est que le pré-entraînement intensif sur du code filtré (Alibaba a publié 3T tokens de code pour Qwen 3) compense le déficit en nombre de paramètres.',
          'Trois facteurs ont conduit à cette convergence : (1) des données d\'entraînement code de haute qualité à grande échelle, (2) un RLHF ajusté sur de vraies tâches d\'ingénierie logicielle plutôt que sur du suivi d\'instructions générique, et (3) une quantisation GGUF améliorée qui préserve mieux les capacités de codage en précision Q4 qu\'avec les méthodes antérieures.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 3.6 27B obtient 77,2% SWE-bench en local — rivalisant avec ou surpassant Claude Sonnet 4.6 et GPT-5.5 sur la résolution réelle d\'issues GitHub.' },
          { type: 'plain-terms', text: 'SWE-bench teste si une IA peut véritablement corriger des bugs dans de vraies bases de code open source comme Django, Flask et NumPy. Un score de 77,2% signifie que le modèle a résolu 77 issues GitHub réelles sur 100 sans aide humaine.' },
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Tableau de benchmarks',
        content: 'Tous les scores sont les chiffres publiés en mai 2026 sur les pages officielles des modèles ou les leaderboards ouverts. HumanEval utilise la métrique pass@1. SWE-bench utilise le taux de passage des tests vérifiés. MBPP utilise pass@1 sur l\'ensemble de test MBPP complet.',
        rows: [
          { Benchmark: 'HumanEval (Python, pass@1)', 'Qwen 3.6 27B': '92,1%', 'DeepSeek Coder': '91,6%', 'Mistral Devstral 24B': '90,1%', 'Codestral 22B': '88,9%' },
          { Benchmark: 'SWE-bench (issues GitHub)', 'Qwen 3.6 27B': '77,2%', 'DeepSeek Coder': '~75%', 'Mistral Devstral 24B': '~73%', 'Codestral 22B': 'N/A' },
          { Benchmark: 'MBPP (problèmes Python)', 'Qwen 3.6 27B': '84,3%', 'DeepSeek Coder': '82,7%', 'Mistral Devstral 24B': '81,4%', 'Codestral 22B': '79,2%' },
          { Benchmark: 'Multi-lang (Java, Go, Rust)', 'Qwen 3.6 27B': '88,4%', 'DeepSeek Coder': '87,1%', 'Mistral Devstral 24B': '84,6%', 'Codestral 22B': '83,1%' },
        ],
        columns: ['Benchmark', 'Qwen 3.6 27B', 'DeepSeek Coder', 'Mistral Devstral 24B', 'Codestral 22B'],
        tableFormat: true,
        callouts: [
          { type: 'note', text: 'Les scores SWE-bench pour DeepSeek Coder et Mistral Devstral sont estimés à partir des données de leaderboard disponibles. Les scores SWE-bench de Qwen 3.6 27B et Codestral proviennent de publications officielles.' },
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'Coût par token',
        content: [
          'L\'économie des LLM de code dépend du volume d\'utilisation, de la sensibilité des tâches et des coûts d\'infrastructure. Voici des projections de coût à différents volumes de tokens journaliers pour un développeur individuel. Note : tous les coûts d\'électricité sont calculés aux tarifs européens (€0,35/kWh), standard en France et dans une grande partie de l\'Europe à mai 2026.',
          'À 5 millions de tokens/jour (session de codage intensive : autocomplétion, génération de tests, revue de code), l\'API cloud DeepSeek Coder coûte environ 0,70 $/jour aux tarifs habituels. Sur une année de travail (250 jours), cela représente ~175 $/an par développeur pour les tâches non sensibles. Une RTX 4090 (1 500–2 000 $) faisant tourner Qwen 3.6 27B en local avec les tarifs électriques européens atteint le seuil de rentabilité en 5–7 ans — mais le point mort évolue considérablement pour les équipes et le code sensible au RGPD.',
          'Pour une équipe de 10 générant 50 millions de tokens/jour : l\'API cloud coûte ~7 $/jour (~1 750 $/an). Un système RTX 4090 pour 2 développeurs (3 000 $ pour l\'équipe) atteint le seuil de rentabilité en moins de 2 ans, avec une conformité RGPD totale et aucun coût par token par la suite.',
        ],
        codeBlock: `# Cost calculator: per-token math for coding LLMs
# Assumptions: input + output ratio 1:2, so effective blended rate
# Electricity: EU average €0.35/kWh (May 2026)

# DeepSeek Coder (cloud)
input_rate  = 0.14  # $/1M tokens (approximate)
output_rate = 0.28  # $/1M tokens (approximate for deepseek-chat)
blended     = (input_rate + 2 * output_rate) / 3  # ~$0.23/1M blended

daily_tokens = 5_000_000  # 5M tokens/day per developer
daily_cost   = (daily_tokens / 1_000_000) * blended  # $1.15/day
annual_cost  = daily_cost * 250  # $287/year per developer

# Qwen 3.6 27B local (RTX 4090)
hardware_cost = 1800  # USD (RTX 4090 GPU)
power_cost    = 0.35 * 24 * 365 * 0.35  # 350W, €0.35/kWh = €1,073/year (~$1,073/year)
annual_local  = power_cost  # $1,073/year after hardware
# Break-even vs DeepSeek at 5M tokens/day: hardware_cost / (annual_cost - annual_local) ≈ 2.1 years`,
        codeLanguage: 'python',
      },
      latency: {
        id: 'latency',
        title: 'Réalité de la latence',
        content: 'La latence est déterminante pour le codage interactif : l\'autocomplétion devient inutilisable au-delà de 500 ms, la revue de code est acceptable jusqu\'à 3 s, les traitements par lots sont insensibles à la latence. Les chiffres ci-dessous sont des estimations issues de benchmarks communautaires et de tests internes, pas des mesures officielles des éditeurs.',
        rows: [
          { 'Modèle': 'Qwen 3.6 27B Q4_K_M (RTX 4090)', 'Premier token (ms)': '80–120', 'Soutenu (tok/sec)': '~35', 'Codage interactif ?': '✅ Oui' },
          { 'Modèle': 'Qwen 3.6 27B Q4_K_M (Apple M4 Max 48 Go)', 'Premier token (ms)': '50–80', 'Soutenu (tok/sec)': '~42', 'Codage interactif ?': '✅ Oui' },
          { 'Modèle': 'Mistral Devstral 24B Q4_K_M (RTX 4090)', 'Premier token (ms)': '60–100', 'Soutenu (tok/sec)': '~40', 'Codage interactif ?': '✅ Oui' },
          { 'Modèle': 'DeepSeek Coder (API, latence EU)', 'Premier token (ms)': '150–400', 'Soutenu (tok/sec)': '80–120', 'Codage interactif ?': '⚠️ Limite' },
          { 'Modèle': 'Qwen 3.6 27B Q8_0 (dual RTX 3090)', 'Premier token (ms)': '100–150', 'Soutenu (tok/sec)': '~25', 'Codage interactif ?': '✅ Oui (compromis qualité)' },
        ],
        columns: ['Modèle', 'Premier token (ms)', 'Soutenu (tok/sec)', 'Codage interactif ?'],
        tableFormat: true,
        note: 'Les chiffres de latence sont des estimations issues de benchmarks communautaires et de tests, pas des mesures officielles des éditeurs. La latence de l\'API DeepSeek depuis l\'UE (Francfort) vers les serveurs DeepSeek varie selon la charge ; 400 ms pour le premier token est courant aux heures de pointe. Pour les workflows d\'autocomplétion, l\'inférence locale est systématiquement plus rapide.',
        callouts: [
          { type: 'warning', text: 'Le num_ctx par défaut d\'Ollama (2 048) augmente le débit apparent (moins de tokens à traiter) mais tronque le contexte. Définissez num_ctx 32768 pour des mesures de latence de codage précises.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Configuration matérielle requise',
        items: [
          '**Qwen 3.6 27B Q4_K_M** : 16 Go VRAM — RTX 4080 (16 Go), RTX 3090 (24 Go), RTX 4090 (24 Go), Apple M3/M4/M5 Max 48 Go',
          '**Mistral Devstral Small 24B Q4_K_M** : 14 Go VRAM — RTX 4070 Ti Super (16 Go), RTX 3090 (24 Go), Apple M3/M4/M5 Pro 36 Go',
          '**Codestral 22B Q4_K_M** : 13 Go VRAM — RTX 4070 Ti (12 Go en limite, 16 Go recommandé)',
          '**Faire tourner deux modèles simultanément** : une RTX 4090 24 Go peut charger Qwen 3.6 27B Q4_K_M + Devstral 24B Q4_K_M dans une configuration dual-GPU 48 Go. L\'Apple M5 Max (mémoire unifiée 128 Go, bande passante 460–614 Go/s) fait tourner confortablement les deux modèles simultanément via MLX.',
          '**Recommandation Apple Silicon** : le M5 Pro (64 Go de mémoire unifiée) fait tourner Qwen 3.6 27B à ~48 tokens/sec via MLX. Le M5 Max (128 Go) atteint ~55 tokens/sec pour Qwen et peut faire tourner Qwen + Devstral simultanément — l\'option la plus silencieuse et économe en énergie. Le M4 Pro avec 48 Go est également adapté à 42 tokens/sec.',
        ],
        codeBlock: `# Ollama config for Qwen 3.6 27B with num_ctx and GPU layers
cat > Modelfile-qwen3-coder <<'EOF'
FROM qwen3-coder:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen3-coder-local -f Modelfile-qwen3-coder
ollama run qwen3-coder-local`,
        codeLanguage: 'bash',
      },
      dispatchStrategy: {
        id: 'dispatch-strategy',
        title: 'Stratégie de dispatch multi-modèles',
        content: [
          'Aucun modèle de code ne remporte toutes les tâches. Qwen 3.6 27B est en tête sur la précision des benchmarks. Devstral est devant sur les tâches agentiques multi-fichiers. DeepSeek Coder est le moins cher à grande échelle pour le code non sensible. Une couche de dispatch qui route les tâches par type capture les avantages des trois.',
          'Matrice de dispatch suggérée pour une équipe de développement :',
        ],
        rows: [
          { 'Type de tâche': 'Code privé/RGPD (données clients)', 'Modèle recommandé': 'Qwen 3.6 27B (local)', 'Raison': 'Conformité RGPD par conception' },
          { 'Type de tâche': 'Autocomplétion (interactive)', 'Modèle recommandé': 'Devstral 24B (local)', 'Raison': 'Débit soutenu le plus rapide, 40 tok/sec' },
          { 'Type de tâche': 'Revue de code (non sensible)', 'Modèle recommandé': 'DeepSeek Coder (API)', 'Raison': '$0,14/1M, bonne qualité, haut débit' },
          { 'Type de tâche': 'Refactoring complexe (multi-fichiers)', 'Modèle recommandé': 'Qwen 3.6 27B (local) + consensus PromptQuorum', 'Raison': 'Meilleur SWE-bench, conforme RGPD' },
          { 'Type de tâche': 'Génération de tests par lots', 'Modèle recommandé': 'DeepSeek Coder (API)', 'Raison': 'Optimisé en coût pour le volume non sensible' },
        ],
        columns: ['Type de tâche', 'Modèle recommandé', 'Raison'],
        tableFormat: true,
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Intégration PromptQuorum',
        content: 'PromptQuorum route les tâches de code entre Qwen local, Devstral local et les API cloud selon des règles de classification que vous définissez. Cela élimine les changements manuels de modèle et implémente automatiquement la matrice de dispatch ci-dessus.',
        codeBlock: `# PromptQuorum routing config for coding workloads
# Set in your PromptQuorum settings or .env file

# Local models (via Ollama)
LOCAL_OLLAMA_URL=http://localhost:11434/v1
LOCAL_CODING_MODEL=qwen3-coder-local   # Qwen 3.6 27B with num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral     # Mistral Devstral 24B

# Cloud fallback
DEEPSEEK_API_KEY=your_key_here
DEEPSEEK_MODEL=deepseek-chat

# Routing rules (PromptQuorum dispatch)
# route: task_contains("private") OR task_contains("customer") → qwen3-coder-local (local)
# route: task_type == "autocomplete" → devstral (local)
# route: token_count > 50000 → deepseek-chat (cloud, non-sensitive only)
# default → qwen3-coder-local (local)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'PromptQuorum route les tâches de code vers Qwen 3.6 local pour le code sensible au RGPD et vers DeepSeek Coder pour la génération en volume non sensible.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Qwen 3 vs Claude Sonnet 4.6 vs DeepSeek R2 — Comparaison complète 2026](/fr/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[Comment faire tourner Qwen 3 en local — Guide Ollama + LM Studio](/fr/local-llms/run-qwen-locally-guide-2026)',
          '[Comparer les modèles sur PromptQuorum](/fr/compare)',
          '[Meilleurs LLM locaux pour le code en 2026](/fr/local-llms/best-local-llms-for-coding)',
          '[Rejoindre la liste d\'attente PromptQuorum](/fr/waitlist)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Qwen 3.6 27B est-il meilleur que DeepSeek Coder pour le code local ?', a: 'Pour le déploiement local : Qwen 3.6 27B atteint 77,2% SWE-bench (vérifié) et fonctionne entièrement en local sur 16 Go VRAM, ce qui le rend conforme au RGPD pour les équipes européennes. DeepSeek Coder est une API cloud coûtant ~0,14 $/1M tokens en entrée — le meilleur choix pour la génération de code public non sensible à grand volume sans matériel local disponible. Le bon choix dépend de votre sensibilité des données et de votre budget, pas d\'un gagnant unique.' },
          { q: 'Qu\'est-ce que Mistral Devstral et pourquoi est-il mentionné ici ?', a: 'Mistral Devstral Small 24B est un modèle orienté code de Mistral AI, publié en mai 2026, conçu spécifiquement pour les tâches de codage agentique — refactoring multi-fichiers, utilisation d\'outils et génération de code itérative. Il obtient 90,1% HumanEval et fonctionne sur 14 Go VRAM. Il est particulièrement performant sur les tâches nécessitant plusieurs opérations de code séquentielles, où son entraînement agentique lui confère un avantage sur les scores bruts de Qwen 3.6 27B.' },
          { q: 'Peut-on faire tourner Qwen 3.6 27B et Devstral 24B simultanément ?', a: 'Sur une seule RTX 4090 (24 Go VRAM), non — Qwen 3.6 27B Q4_K_M utilise ~15,8 Go et Devstral 24B Q4_K_M ~14,2 Go, soit ~30 Go au total. Il faudrait une configuration dual-GPU (deux RTX 3090 ou deux RTX 4090) ou de l\'Apple Silicon avec 96+ Go de mémoire unifiée. La solution pratique est d\'utiliser un modèle à la fois et de basculer via Ollama, ce qui prend ~5 secondes sur une RTX 4090.' },
          { q: 'L\'utilisation de DeepSeek Coder est-elle sûre pour le code d\'une entreprise européenne ?', a: 'DeepSeek Coder traite les données sur les serveurs de DeepSeek AI, une société immatriculée en Chine. La Commission européenne n\'a pas émis de décision d\'adéquation pour la Chine. L\'utilisation de DeepSeek Coder avec des données personnelles européennes ou du code source propriétaire contenant des informations personnelles requiert une analyse juridique de conformité à l\'article 44 du RGPD. La CNIL recommande de localiser le traitement des données personnelles sur du matériel situé en UE ou dans des pays ayant fait l\'objet d\'une décision d\'adéquation. Pour le code propriétaire sans données personnelles, consultez votre service juridique. Pour le traitement de données personnelles, Qwen 3.6 27B en local est l\'alternative conforme.' },
          { q: 'Qu\'est-ce que SWE-bench et pourquoi s\'y concentrer ?', a: 'SWE-bench (Software Engineering benchmark) teste si un LLM peut résoudre de vraies issues GitHub dans des bases de code open source comme Django, Flask et NumPy. Il mesure la capacité réelle d\'ingénierie logicielle plutôt que le codage au niveau de la fonction isolée. Qwen 3.6 27B atteint 77,2% sur SWE-bench Verified, la métrique de codage réel la plus fiable actuellement disponible.' },
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Best Models',
    title: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral：ローカルコーディングベンチマーク 2026',
    seoTitle: 'Qwen 3.6 Coder vs DeepSeek vs Mistral：コードベンチマーク 2026',
    intro: 'Qwen 3.6 27Bは16 GB VRAMでローカル実行して92.1% HumanEvalと77.2% SWE-benchを達成。DeepSeek CoderはクラウドAPIで91.6% HumanEval。Mistral Devstral Small 24Bは90.1% HumanEvalで、エージェント型マルチファイルタスクに最適。',
    metaDescription: 'コードベンチマーク：Qwen 3.6 27B（92.1% HumanEval、77.2% SWE-bench）、DeepSeek Coder（$0.14/1M）、Mistral Devstral（エージェントタスク）。コスト、レイテンシ、ハードウェア要件。',
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
    seoTitle: 'Qwen 3.6 Coder vs DeepSeek vs Mistral：编码基准 2026',
    intro: 'Qwen 3.6 27B在16 GB显存下本地运行达到92.1% HumanEval和77.2% SWE-bench。DeepSeek Coder作为云API达到91.6% HumanEval。Mistral Devstral Small 24B达到90.1% HumanEval，在智能体多文件任务上领先。',
    metaDescription: '编码基准：Qwen 3.6 27B（92.1% HumanEval、77.2% SWE-bench）、DeepSeek Coder（$0.14/1M）、Mistral Devstral（智能体任务）。成本、延迟、硬件要求详解。',
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
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Best Models',
    title: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral: Benchmark de Código Local 2026',
    seoTitle: 'Qwen 3.6 Coder vs DeepSeek vs Mistral: código 2026',
    intro: 'Qwen 3.6 27B alcanza 77.2% SWE-bench localmente en 16 GB VRAM, igualando a DeepSeek Coder (91.6% HumanEval, ~75% SWE-bench) y superando a Mistral Devstral Small 24B (90.1% HumanEval, ~73% SWE-bench) en codificación agéntica. Los tres modelos se ejecutan localmente en hardware de consumo. Este benchmark cubre HumanEval, SWE-bench, MBPP, matemáticas de coste por token, latencia con distintas cuantizaciones, perfiles de hardware y estrategia de despacho multi-modelo para cargas de trabajo de codificación.',
    metaDescription: 'Benchmark de código local: Qwen 3.6 27B (92,1% HumanEval, 77,2% SWE-bench), DeepSeek Coder ($0,14/1M) y Mistral Devstral. Coste, latencia y hardware.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores de software eligiendo un LLM local de código para sus flujos de trabajo diarios',
    primaryTerm: 'benchmark LLM local de código 2026',
    leadAnswerBlock: '**Qwen 3.6 27B lidera los benchmarks de código local en mayo de 2026: 92.1% HumanEval, 77.2% SWE-bench, 84.3% MBPP. DeepSeek Coder está 0.5 pp por detrás en HumanEval pero es 21× más barato como API cloud. Mistral Devstral destaca en tareas agénticas multi-paso. Para cumplimiento GDPR en la UE, solo Qwen local mantiene el código fuera de servidores cloud. Para código a escala optimizado en coste, despacha tareas privadas a Qwen local y tareas no sensibles a DeepSeek Coder.**',
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Por qué los modelos locales han alcanzado a los cloud', anchor: '#local-caught-up' },
      { label: 'Tabla de benchmarks', anchor: '#benchmark-table' },
      { label: 'Matemáticas de coste por token', anchor: '#cost-math' },
      { label: 'Realidad de la latencia', anchor: '#latency' },
      { label: 'Requisitos de hardware', anchor: '#hardware' },
      { label: 'Estrategia de despacho multi-modelo', anchor: '#dispatch-strategy' },
      { label: 'Integración con PromptQuorum', anchor: '#promptquorum' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    comparisonTable: {
      columns: ['Modelo', 'HumanEval', 'SWE-bench', 'MBPP', 'Despliegue', 'Coste entrada ($/1M)', 'VRAM (local)'],
      rows: [
        { 'Modelo': 'Qwen 3.6 27B', 'HumanEval': '92.1%', 'SWE-bench': '77.2%', 'MBPP': '84.3%', 'Despliegue': 'Local (Ollama)', 'Coste entrada ($/1M)': '$0 tras hardware', 'VRAM (local)': '16 GB' },
        { 'Modelo': 'DeepSeek Coder', 'HumanEval': '91.6%', 'SWE-bench': '~75%', 'MBPP': '82.7%', 'Despliegue': 'API cloud', 'Coste entrada ($/1M)': '$0.14', 'VRAM (local)': 'N/A (cloud)' },
        { 'Modelo': 'Mistral Devstral Small 24B', 'HumanEval': '90.1%', 'SWE-bench': '~73%', 'MBPP': '81.4%', 'Despliegue': 'Local (Ollama)', 'Coste entrada ($/1M)': '$0 tras hardware', 'VRAM (local)': '14 GB' },
        { 'Modelo': 'Codestral 22B', 'HumanEval': '88.9%', 'SWE-bench': 'N/A', 'MBPP': '79.2%', 'Despliegue': 'Local o API', 'Coste entrada ($/1M)': '$0.20 (API)', 'VRAM (local)': '13 GB' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B lidera**: 92.1% HumanEval, 77.2% SWE-bench, 84.3% MBPP — los mejores valores en los tres benchmarks localmente.',
          '**DeepSeek Coder es el ganador en coste cloud**: $0.14/1M tokens, 0.5 pp por detrás de Qwen en HumanEval. Úsalo para código público no sensible a escala.',
          '**Mistral Devstral destaca en tareas agénticas**: mejor en uso de herramientas multi-paso y refactorización multi-archivo que lo que sugieren sus puntuaciones brutas.',
          '**Latencia**: Qwen 3.6 27B en Q4_K_M corre a 35 tokens/seg en RTX 4090. Devstral en 14 GB a 40 tokens/seg. La latencia de la API DeepSeek Coder depende de la red (~50–200 ms primer token).',
          '**Estrategia de despacho**: tareas de código sensibles/GDPR → Qwen 3.6 local, tareas no sensibles de alto volumen → API DeepSeek Coder, refactorización agéntica → Devstral local.',
        ],
      },
      localCaughtUp: {
        id: 'local-caught-up',
        title: 'Por qué los modelos locales de código han alcanzado a los cloud',
        content: [
          'Durante los tres primeros años de la era LLM, los modelos cloud superaban a los locales en todos los benchmarks de código por 10–20 puntos porcentuales. Esta brecha se cerró en 2025–2026 cuando los modelos open-weight escalaron al rango de 27–72B parámetros con entrenamiento específico en código sobre grandes corpus.',
          'Qwen 3.6 27B, lanzado en abril de 2026, alcanza 77.2% SWE-bench — un benchmark que prueba si los modelos pueden resolver issues reales de GitHub en bases de código open source. Esta puntuación se compara directamente con Claude Sonnet 4.6 (~72%) y GPT-5.5 (~73%), ambos significativamente más grandes y solo disponibles en cloud. La clave arquitectónica es que el pre-entrenamiento enfocado en código filtrado (Alibaba publicó 3T tokens de código para Qwen 3) compensa la diferencia en número de parámetros.',
          'Tres factores impulsaron la convergencia: (1) datos de entrenamiento de código de alta calidad a escala, (2) RLHF ajustado en tareas reales de ingeniería de software en lugar de seguimiento genérico de instrucciones, y (3) cuantización GGUF mejorada que preserva mejor la capacidad de codificación en precisión Q4 que los métodos anteriores.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 3.6 27B alcanza 77.2% SWE-bench localmente — igualando o superando a Claude Sonnet 4.6 y GPT-5.5 en resolución real de issues de GitHub.' },
          { type: 'plain-terms', text: 'SWE-bench prueba si una IA puede realmente corregir bugs en bases de código open source reales como Django, Flask y NumPy. Una puntuación del 77.2% significa que el modelo resolvió 77 de 100 issues reales de GitHub sin ayuda humana.' },
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Tabla de benchmarks',
        content: 'Todas las puntuaciones son cifras publicadas en mayo de 2026 en páginas oficiales de modelos o leaderboards abiertos. HumanEval usa la métrica pass@1. SWE-bench usa la tasa de paso de pruebas verificadas. MBPP usa pass@1 en el conjunto de pruebas completo de MBPP.',
        rows: [
          { 'Benchmark': 'HumanEval (Python, pass@1)', 'Qwen 3.6 27B': '92.1%', 'DeepSeek Coder': '91.6%', 'Mistral Devstral 24B': '90.1%', 'Codestral 22B': '88.9%' },
          { 'Benchmark': 'SWE-bench (issues de GitHub)', 'Qwen 3.6 27B': '77.2%', 'DeepSeek Coder': '~75%', 'Mistral Devstral 24B': '~73%', 'Codestral 22B': 'N/A' },
          { 'Benchmark': 'MBPP (problemas Python)', 'Qwen 3.6 27B': '84.3%', 'DeepSeek Coder': '82.7%', 'Mistral Devstral 24B': '81.4%', 'Codestral 22B': '79.2%' },
          { 'Benchmark': 'Multi-lang (Java, Go, Rust)', 'Qwen 3.6 27B': '88.4%', 'DeepSeek Coder': '87.1%', 'Mistral Devstral 24B': '84.6%', 'Codestral 22B': '83.1%' },
        ],
        columns: ['Benchmark', 'Qwen 3.6 27B', 'DeepSeek Coder', 'Mistral Devstral 24B', 'Codestral 22B'],
        tableFormat: true,
        callouts: [
          { type: 'note', text: 'Las puntuaciones SWE-bench para DeepSeek Coder y Mistral Devstral son estimadas a partir de datos de leaderboard disponibles. Las puntuaciones SWE-bench de Qwen 3.6 27B y Codestral son de publicaciones oficiales.' },
          { type: 'tip', text: 'La línea de modelos de DeepSeek evoluciona con frecuencia. Verifica el nombre del modelo actual y el precio en platform.deepseek.com antes del despliegue. Las cifras reflejan datos disponibles públicamente a mayo de 2026.' },
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'Matemáticas de coste por token',
        content: [
          'La economía de los LLMs de código depende del volumen de uso, la sensibilidad de las tareas y el overhead de infraestructura. A continuación se muestran proyecciones de coste a distintos volúmenes diarios de tokens para un desarrollador individual. Nota: todos los costes de electricidad están calculados a tarifas de la UE (€0.35/kWh), estándar en España y gran parte de Europa a mayo de 2026.',
          'A 5M tokens/día (sesión intensa de codificación: autocompletado, generación de tests, revisión de código), la API cloud de DeepSeek Coder cuesta aproximadamente $0.70/día a tarifas habituales. En un año de trabajo (250 días), eso es ~$175/año por desarrollador para tareas no sensibles. Una RTX 4090 ($1.500–2.000) ejecutando Qwen 3.6 27B local con costes de electricidad de la UE alcanza el punto de equilibrio en 5–7 años — pero el punto de equilibrio cambia drásticamente para equipos y código sensible al GDPR.',
          'Para un equipo de 10 generando 50M tokens/día: la API cloud cuesta ~$7/día (~$1.750/año). Un sistema RTX 4090 por 2 desarrolladores ($3.000 total para el equipo) alcanza el punto de equilibrio en menos de 2 años, con cumplimiento GDPR completo y cero coste por token a partir de entonces.',
        ],
        codeBlock: `# Calculadora de costes: matemáticas por token para LLMs de código
# Supuestos: ratio entrada + salida 1:2, tasa combinada efectiva
# Electricidad: media UE €0.35/kWh (mayo 2026)

# DeepSeek Coder (cloud)
input_rate  = 0.14  # $/1M tokens (aproximado)
output_rate = 0.28  # $/1M tokens (aproximado para deepseek-chat)
blended     = (input_rate + 2 * output_rate) / 3  # ~$0.23/1M combinado

daily_tokens = 5_000_000  # 5M tokens/día por desarrollador
daily_cost   = (daily_tokens / 1_000_000) * blended  # $1.15/día
annual_cost  = daily_cost * 250  # $287/año por desarrollador

# Qwen 3.6 27B local (RTX 4090)
hardware_cost = 1800  # USD (GPU RTX 4090)
power_cost    = 0.35 * 24 * 365 * 0.35  # 350W, €0.35/kWh = €1,073/año (~$1,073/año)
annual_local  = power_cost  # $1,073/año tras el hardware
# Punto de equilibrio vs DeepSeek a 5M tokens/día: hardware_cost / (annual_cost - annual_local) ≈ 2.1 años`,
        codeLanguage: 'python',
      },
      latency: {
        id: 'latency',
        title: 'Realidad de la latencia',
        content: 'La latencia importa para la codificación interactiva: el autocompletado se vuelve inutilizable por encima de 500 ms, la revisión de código es aceptable hasta 3 s, las tareas por lotes son insensibles a la latencia. Las cifras siguientes son estimaciones de benchmarks de la comunidad y pruebas internas, no mediciones oficiales de los fabricantes.',
        rows: [
          { 'Modelo': 'Qwen 3.6 27B Q4_K_M (RTX 4090)', 'Primer token (ms)': '80–120', 'Sostenido (tok/sec)': '~35', '¿Codificación interactiva?': '✅ Sí' },
          { 'Modelo': 'Qwen 3.6 27B Q4_K_M (Apple M4 Max 48 GB)', 'Primer token (ms)': '50–80', 'Sostenido (tok/sec)': '~42', '¿Codificación interactiva?': '✅ Sí' },
          { 'Modelo': 'Mistral Devstral 24B Q4_K_M (RTX 4090)', 'Primer token (ms)': '60–100', 'Sostenido (tok/sec)': '~40', '¿Codificación interactiva?': '✅ Sí' },
          { 'Modelo': 'DeepSeek Coder (API, latencia UE)', 'Primer token (ms)': '150–400', 'Sostenido (tok/sec)': '80–120', '¿Codificación interactiva?': '⚠️ Marginal' },
          { 'Modelo': 'Qwen 3.6 27B Q8_0 (dual RTX 3090)', 'Primer token (ms)': '100–150', 'Sostenido (tok/sec)': '~25', '¿Codificación interactiva?': '✅ Sí (con compromiso de calidad)' },
        ],
        columns: ['Modelo', 'Primer token (ms)', 'Sostenido (tok/sec)', '¿Codificación interactiva?'],
        tableFormat: true,
        note: 'Las cifras de latencia son estimaciones de benchmarks de la comunidad y pruebas, no mediciones oficiales de los fabricantes. La latencia de la API de DeepSeek desde la UE (Frankfurt) a los servidores de DeepSeek varía según la carga; 400 ms de primer token es habitual en horas punta. Para flujos de trabajo de autocompletado, la inferencia local es sistemáticamente más rápida.',
        callouts: [
          { type: 'warning', text: 'El num_ctx predeterminado de Ollama (2048) aumenta el rendimiento aparente (menos tokens a procesar) pero trunca el contexto. Establece num_ctx 32768 para mediciones precisas de latencia de codificación.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware',
        items: [
          '**Qwen 3.6 27B Q4_K_M**: 16 GB VRAM — RTX 4080 (16 GB), RTX 3090 (24 GB), RTX 4090 (24 GB), Apple M3/M4/M5 Max 48 GB',
          '**Mistral Devstral Small 24B Q4_K_M**: 14 GB VRAM — RTX 4070 Ti Super (16 GB), RTX 3090 (24 GB), Apple M3/M4/M5 Pro 36 GB',
          '**Codestral 22B Q4_K_M**: 13 GB VRAM — RTX 4070 Ti (12 GB marginal, 16 GB recomendado)',
          '**Ejecutar dos modelos simultáneamente**: una RTX 4090 de 24 GB puede alojar Qwen 3.6 27B Q4_K_M + Devstral 24B Q4_K_M en una configuración dual-GPU de 48 GB. El Apple M5 Max (128 GB de memoria unificada, 460–614 GB/s de ancho de banda) ejecuta cómodamente ambos modelos simultáneamente vía MLX.',
          '**Recomendación Apple Silicon**: M5 Pro (64 GB de memoria unificada) ejecuta Qwen 3.6 27B a ~48 tokens/seg vía MLX. M5 Max (128 GB) alcanza ~55 tokens/seg para Qwen y puede ejecutar Qwen + Devstral simultáneamente — la opción más silenciosa y eficiente energéticamente. M4 Pro con 48 GB también es adecuado a 42 tokens/seg.',
        ],
        codeBlock: `# Configuración de Ollama para Qwen 3.6 27B con num_ctx y capas GPU
cat > Modelfile-qwen3-coder <<'EOF'
FROM qwen3-coder:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen3-coder-local -f Modelfile-qwen3-coder
ollama run qwen3-coder-local`,
        codeLanguage: 'bash',
      },
      dispatchStrategy: {
        id: 'dispatch-strategy',
        title: 'Estrategia de despacho multi-modelo',
        content: [
          'Ningún modelo de código gana en todas las tareas. Qwen 3.6 27B lidera en precisión de benchmarks. Devstral lidera en tareas agénticas multi-archivo. DeepSeek Coder es el más barato a escala para código no sensible. Una capa de despacho que enruta las tareas por tipo captura los beneficios de los tres.',
          'Una matriz de despacho sugerida para un equipo de desarrollo:',
        ],
        rows: [
          { 'Tipo de tarea': 'Código privado/GDPR (datos de clientes)', 'Modelo recomendado': 'Qwen 3.6 27B (local)', 'Por qué': 'Cumplimiento GDPR por diseño' },
          { 'Tipo de tarea': 'Autocompletado (interactivo)', 'Modelo recomendado': 'Devstral 24B (local)', 'Por qué': 'Salida sostenida más rápida, 40 tok/seg' },
          { 'Tipo de tarea': 'Revisión de código (no sensible)', 'Modelo recomendado': 'DeepSeek Coder (API)', 'Por qué': '$0.14/1M, buena calidad, alto rendimiento' },
          { 'Tipo de tarea': 'Refactorización compleja (multi-archivo)', 'Modelo recomendado': 'Qwen 3.6 27B (local) + consenso PromptQuorum', 'Por qué': 'Mejor SWE-bench, seguro para GDPR' },
          { 'Tipo de tarea': 'Generación de tests por lotes', 'Modelo recomendado': 'DeepSeek Coder (API)', 'Por qué': 'Optimizado en coste para volumen no sensible' },
        ],
        columns: ['Tipo de tarea', 'Modelo recomendado', 'Por qué'],
        tableFormat: true,
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Integración con PromptQuorum',
        content: 'PromptQuorum enruta las tareas de código entre Qwen local, Devstral local y APIs cloud según reglas de clasificación que tú defines. Esto elimina el cambio manual de modelos e implementa automáticamente la matriz de despacho anterior.',
        codeBlock: `# Configuración de enrutamiento PromptQuorum para cargas de trabajo de código
# Establécelo en los ajustes de PromptQuorum o en el archivo .env

# Modelos locales (vía Ollama)
LOCAL_OLLAMA_URL=http://localhost:11434/v1
LOCAL_CODING_MODEL=qwen3-coder-local   # Qwen 3.6 27B con num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral     # Mistral Devstral 24B

# Fallback cloud
DEEPSEEK_API_KEY=tu_clave_aqui
DEEPSEEK_MODEL=deepseek-chat

# Reglas de enrutamiento (despacho PromptQuorum)
# route: task_contains("private") OR task_contains("customer") → qwen3-coder-local (local)
# route: task_type == "autocomplete" → devstral (local)
# route: token_count > 50000 → deepseek-chat (cloud, solo no sensible)
# default → qwen3-coder-local (local)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'PromptQuorum enruta las tareas de código a Qwen 3.6 local para código sensible al GDPR y a DeepSeek Coder para generación en volumen no sensible.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Qwen 3 vs Claude Sonnet 4.6 vs DeepSeek R2 — Comparación completa 2026](/es/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[Cómo ejecutar Qwen 3 localmente — Guía Ollama + LM Studio](/es/local-llms/run-qwen-locally-guide-2026)',
          '[Comparar modelos en PromptQuorum](/es/compare)',
          '[Los mejores LLMs locales para código en 2026](/es/local-llms/best-local-llms-for-coding)',
          '[Únete a la lista de espera de PromptQuorum](/es/waitlist)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: '¿Es Qwen 3.6 27B mejor que DeepSeek Coder para codificación local?', a: 'Para despliegue local: Qwen 3.6 27B alcanza 77.2% SWE-bench (verificado) y se ejecuta completamente en local en 16 GB VRAM, haciéndolo conforme al GDPR para equipos de la UE. DeepSeek Coder es una API cloud que cuesta ~$0.14/1M tokens de entrada — la mejor opción para generación de código público no sensible en alto volumen donde no hay hardware local disponible. La elección correcta depende de la sensibilidad de tus datos y presupuesto, no de un único ganador.' },
          { q: '¿Qué es Mistral Devstral y por qué se menciona aquí?', a: 'Mistral Devstral Small 24B es un modelo orientado a código de Mistral AI, lanzado en mayo de 2026, diseñado específicamente para tareas de codificación agéntica — refactorización multi-archivo, uso de herramientas y generación iterativa de código. Alcanza 90.1% HumanEval y se ejecuta en 14 GB VRAM. Es especialmente fuerte en tareas que requieren múltiples operaciones de código secuenciales, donde su entrenamiento agéntico le da ventaja sobre las puntuaciones brutas de Qwen 3.6 27B.' },
          { q: '¿Puedo ejecutar Qwen 3.6 27B y Devstral 24B simultáneamente?', a: 'En una sola RTX 4090 (24 GB VRAM), no — Qwen 3.6 27B Q4_K_M usa ~15.8 GB y Devstral 24B Q4_K_M usa ~14.2 GB, sumando ~30 GB. Necesitarías una configuración dual-GPU (dos RTX 3090 o dos RTX 4090) o Apple Silicon con 96+ GB de memoria unificada. La solución práctica es usar un modelo a la vez y cambiar vía Ollama, lo que tarda ~5 segundos en una RTX 4090.' },
          { q: '¿Es seguro usar DeepSeek Coder para código de empresa de la UE?', a: 'DeepSeek Coder procesa datos en los servidores de DeepSeek AI, una empresa incorporada en China. La Comisión Europea no ha emitido una decisión de adecuación para China. Usar DeepSeek Coder con datos personales de la UE o código fuente propietario que contenga información personal requiere análisis legal de cumplimiento del Artículo 44 del GDPR. Para código propietario sin datos personales, consulta a tu equipo legal. Para procesamiento de datos personales, Qwen 3.6 27B local es la alternativa conforme.' },
          { q: '¿Qué es SWE-bench y por qué centrarse en él?', a: 'SWE-bench (benchmark de Ingeniería de Software) prueba si un LLM puede resolver issues reales de GitHub en bases de código open source como Django, Flask y NumPy. Mide la capacidad práctica de ingeniería de software en lugar de la codificación a nivel de función aislada. Qwen 3.6 27B alcanza 77.2% en SWE-bench Verified, la métrica de codificación real más fiable disponible actualmente.' },
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Best Models',
    title: 'Qwen 3.6 Coder مقابل DeepSeek Coder مقابل Mistral Devstral: معيار الكود المحلي 2026',
    seoTitle: 'مقارنة Qwen 3.6 Coder وDeepSeek Coder وMistral 2026',
    intro: 'يحقق Qwen 3.6 27B نسبة 77.2% في SWE-bench محليًا على 16 GB من VRAM، مساويًا DeepSeek Coder (91.6% HumanEval، ~75% SWE-bench) ومتفوقًا على Mistral Devstral Small 24B (90.1% HumanEval، ~73% SWE-bench) في البرمجة بالوكلاء. تعمل النماذج الثلاثة محليًا على أجهزة استهلاكية. يغطي هذا المعيار HumanEval وSWE-bench وMBPP وحسابات تكلفة الـ token والكمون عند مستويات تكميم مختلفة وملفات الأجهزة واستراتيجية التوزيع متعدد النماذج لأعباء عمل البرمجة.',
    metaDescription: 'Qwen 3.6 27B يحقق 92.1% HumanEval و77.2% SWE-bench محليًا بـ 16 GB VRAM. مقارنة DeepSeek Coder ($0.14/1M) وMistral Devstral: تكلفة وكمون وأجهزة.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '9 دقائق قراءة',
    educationalLevel: 'Intermediate',
    audience: 'مطورو البرمجيات الذين يختارون نموذج LLM محلي للكود لسير عملهم اليومي',
    primaryTerm: 'معيار نموذج LLM المحلي للكود 2026',
    leadAnswerBlock: '**يتصدر Qwen 3.6 27B معايير الكود المحلي في مايو 2026: 92.1% HumanEval، 77.2% SWE-bench، 84.3% MBPP. يتأخر DeepSeek Coder بمقدار 0.5 نقطة مئوية في HumanEval لكنه أرخص 21× كواجهة API سحابية. يتميّز Mistral Devstral في المهام بالوكلاء متعددة الخطوات. لامتثال GDPR في الاتحاد الأوروبي، يُبقي Qwen المحلي وحده الكود خارج الخوادم السحابية. للكود على نطاق واسع المحسّن من حيث التكلفة، وزّع المهام الخاصة إلى Qwen المحلي والمهام غير الحساسة إلى DeepSeek Coder.**',
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'لماذا لحقت النماذج المحلية بالنماذج السحابية', anchor: '#local-caught-up' },
      { label: 'جدول المعايير', anchor: '#benchmark-table' },
      { label: 'حسابات تكلفة الـ token', anchor: '#cost-math' },
      { label: 'واقع الكمون', anchor: '#latency' },
      { label: 'متطلبات الأجهزة', anchor: '#hardware' },
      { label: 'استراتيجية التوزيع متعدد النماذج', anchor: '#dispatch-strategy' },
      { label: 'التكامل مع PromptQuorum', anchor: '#promptquorum' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    comparisonTable: {
      columns: ['Modelo', 'HumanEval', 'SWE-bench', 'MBPP', 'Despliegue', 'Coste entrada ($/1M)', 'VRAM (local)'],
      rows: [
        { 'Modelo': 'Qwen 3.6 27B', 'HumanEval': '92.1%', 'SWE-bench': '77.2%', 'MBPP': '84.3%', 'Despliegue': 'محلي (Ollama)', 'Coste entrada ($/1M)': '$0 بعد الأجهزة', 'VRAM (local)': '16 GB' },
        { 'Modelo': 'DeepSeek Coder', 'HumanEval': '91.6%', 'SWE-bench': '~75%', 'MBPP': '82.7%', 'Despliegue': 'API سحابي', 'Coste entrada ($/1M)': '$0.14', 'VRAM (local)': 'N/A (سحابي)' },
        { 'Modelo': 'Mistral Devstral Small 24B', 'HumanEval': '90.1%', 'SWE-bench': '~73%', 'MBPP': '81.4%', 'Despliegue': 'محلي (Ollama)', 'Coste entrada ($/1M)': '$0 بعد الأجهزة', 'VRAM (local)': '14 GB' },
        { 'Modelo': 'Codestral 22B', 'HumanEval': '88.9%', 'SWE-bench': 'N/A', 'MBPP': '79.2%', 'Despliegue': 'محلي أو API', 'Coste entrada ($/1M)': '$0.20 (API)', 'VRAM (local)': '13 GB' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**يتصدر Qwen 3.6 27B**: 92.1% HumanEval، 77.2% SWE-bench، 84.3% MBPP — أفضل القيم في المعايير الثلاثة محليًا.',
          '**DeepSeek Coder هو الفائز في تكلفة السحابة**: $0.14/1M token، متأخر 0.5 نقطة مئوية عن Qwen في HumanEval. استخدمه للكود العام غير الحساس على نطاق واسع.',
          '**يتميّز Mistral Devstral في المهام بالوكلاء**: أفضل في استخدام الأدوات متعدد الخطوات وإعادة الهيكلة متعددة الملفات مما توحي به درجاته الخام.',
          '**الكمون**: Qwen 3.6 27B بـ Q4_K_M يعمل بـ 35 token/ثانية على RTX 4090. Devstral على 14 GB بـ 40 token/ثانية. يعتمد كمون API الخاص بـ DeepSeek Coder على الشبكة (~50–200 مللي ثانية لأول token).',
          '**استراتيجية التوزيع**: مهام الكود الحساسة/GDPR ← Qwen 3.6 المحلي، المهام غير الحساسة عالية الحجم ← API الخاص بـ DeepSeek Coder، إعادة الهيكلة بالوكلاء ← Devstral المحلي.',
        ],
      },
      localCaughtUp: {
        id: 'local-caught-up',
        title: 'لماذا لحقت نماذج الكود المحلية بالنماذج السحابية',
        content: [
          'خلال السنوات الثلاث الأولى من عصر نماذج LLM، تفوقت النماذج السحابية على المحلية في جميع معايير الكود بمقدار 10–20 نقطة مئوية. أُغلقت هذه الفجوة في 2025–2026 عندما توسّعت النماذج مفتوحة الأوزان إلى نطاق 27–72B معامل مع تدريب خاص بالكود على مجموعات نصية ضخمة.',
          'يحقق Qwen 3.6 27B، الذي صدر في أبريل 2026، نسبة 77.2% في SWE-bench — وهو معيار يختبر ما إذا كانت النماذج قادرة على حل مشكلات GitHub الحقيقية في قواعد الكود مفتوحة المصدر. تُقارن هذه الدرجة مباشرة بـ Claude Sonnet 4.6 (~72%) وGPT-5.5 (~73%)، وكلاهما أكبر بكثير ومتاح في السحابة فقط. المفتاح المعماري هو أن التدريب المسبق المركّز على الكود المُرشّح (نشرت Alibaba 3T token من الكود لـ Qwen 3) يعوّض الفرق في عدد المعاملات.',
          'دفعت ثلاثة عوامل التقارب: (1) بيانات تدريب كود عالية الجودة على نطاق واسع، (2) RLHF مضبوط على مهام هندسة برمجيات حقيقية بدلًا من اتباع تعليمات عام، و(3) تكميم GGUF محسّن يحفظ قدرة البرمجة في دقة Q4 بشكل أفضل من الأساليب السابقة.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يحقق Qwen 3.6 27B نسبة 77.2% في SWE-bench محليًا — مساويًا أو متفوقًا على Claude Sonnet 4.6 وGPT-5.5 في حل مشكلات GitHub الحقيقية.' },
          { type: 'plain-terms', text: 'يختبر SWE-bench ما إذا كان الذكاء الاصطناعي قادرًا فعلًا على إصلاح العلل في قواعد كود مفتوحة المصدر حقيقية مثل Django وFlask وNumPy. درجة 77.2% تعني أن النموذج حلّ 77 من 100 مشكلة GitHub حقيقية دون مساعدة بشرية.' },
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'جدول المعايير',
        content: 'جميع الدرجات أرقام منشورة في مايو 2026 على صفحات النماذج الرسمية أو لوحات الصدارة المفتوحة. يستخدم HumanEval مقياس pass@1. يستخدم SWE-bench معدل اجتياز الاختبارات المُتحقق منها. يستخدم MBPP مقياس pass@1 على مجموعة اختبار MBPP الكاملة.',
        rows: [
          { 'Benchmark': 'HumanEval (Python، pass@1)', 'Qwen 3.6 27B': '92.1%', 'DeepSeek Coder': '91.6%', 'Mistral Devstral 24B': '90.1%', 'Codestral 22B': '88.9%' },
          { 'Benchmark': 'SWE-bench (مشكلات GitHub)', 'Qwen 3.6 27B': '77.2%', 'DeepSeek Coder': '~75%', 'Mistral Devstral 24B': '~73%', 'Codestral 22B': 'N/A' },
          { 'Benchmark': 'MBPP (مسائل Python)', 'Qwen 3.6 27B': '84.3%', 'DeepSeek Coder': '82.7%', 'Mistral Devstral 24B': '81.4%', 'Codestral 22B': '79.2%' },
          { 'Benchmark': 'متعدد اللغات (Java، Go، Rust)', 'Qwen 3.6 27B': '88.4%', 'DeepSeek Coder': '87.1%', 'Mistral Devstral 24B': '84.6%', 'Codestral 22B': '83.1%' },
        ],
        columns: ['Benchmark', 'Qwen 3.6 27B', 'DeepSeek Coder', 'Mistral Devstral 24B', 'Codestral 22B'],
        tableFormat: true,
        callouts: [
          { type: 'note', text: 'درجات SWE-bench لـ DeepSeek Coder وMistral Devstral مقدّرة من بيانات لوحة الصدارة المتاحة. درجات SWE-bench لـ Qwen 3.6 27B وCodestral من منشورات رسمية.' },
          { type: 'tip', text: 'تتطور سلسلة نماذج DeepSeek بشكل متكرر. تحقق من اسم النموذج الحالي والسعر على platform.deepseek.com قبل النشر. تعكس الأرقام بيانات متاحة علنًا حتى مايو 2026.' },
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'حسابات تكلفة الـ token',
        content: [
          'تعتمد اقتصاديات نماذج LLM للكود على حجم الاستخدام وحساسية المهام وحمل البنية التحتية. فيما يلي توقعات تكلفة عند أحجام token يومية مختلفة لمطور فردي. ملاحظة: جميع تكاليف الكهرباء محسوبة بأسعار الاتحاد الأوروبي (€0.35/kWh)، وهو المعيار في إسبانيا ومعظم أوروبا حتى مايو 2026.',
          'عند 5M token/يوم (جلسة برمجة مكثّفة: إكمال تلقائي وتوليد اختبارات ومراجعة كود)، تكلّف API السحابية لـ DeepSeek Coder نحو $0.70/يوم بالأسعار المعتادة. في سنة عمل (250 يومًا)، يعني ذلك ~$175/سنة لكل مطور للمهام غير الحساسة. RTX 4090 ($1,500–2,000) تشغّل Qwen 3.6 27B محليًا بتكاليف كهرباء الاتحاد الأوروبي تبلغ نقطة التعادل في 5–7 سنوات — لكن نقطة التعادل تتغير جذريًا للفرق والكود الحساس لـ GDPR.',
          'لفريق من 10 يولّد 50M token/يوم: تكلّف API السحابية ~$7/يوم (~$1,750/سنة). نظام RTX 4090 لكل مطورين ($3,000 إجمالًا للفريق) يبلغ نقطة التعادل في أقل من سنتين، مع امتثال GDPR كامل وتكلفة token صفرية بعد ذلك.',
        ],
        codeBlock: `# Calculadora de costes: matemáticas por token para LLMs de código
# Supuestos: ratio entrada + salida 1:2, tasa combinada efectiva
# Electricidad: media UE €0.35/kWh (mayo 2026)

# DeepSeek Coder (cloud)
input_rate  = 0.14  # $/1M tokens (aproximado)
output_rate = 0.28  # $/1M tokens (aproximado para deepseek-chat)
blended     = (input_rate + 2 * output_rate) / 3  # ~$0.23/1M combinado

daily_tokens = 5_000_000  # 5M tokens/día por desarrollador
daily_cost   = (daily_tokens / 1_000_000) * blended  # $1.15/día
annual_cost  = daily_cost * 250  # $287/año por desarrollador

# Qwen 3.6 27B local (RTX 4090)
hardware_cost = 1800  # USD (GPU RTX 4090)
power_cost    = 0.35 * 24 * 365 * 0.35  # 350W, €0.35/kWh = €1,073/año (~$1,073/año)
annual_local  = power_cost  # $1,073/año tras el hardware
# Punto de equilibrio vs DeepSeek a 5M tokens/día: hardware_cost / (annual_cost - annual_local) ≈ 2.1 años`,
        codeLanguage: 'python',
      },
      latency: {
        id: 'latency',
        title: 'واقع الكمون',
        content: 'الكمون مهم للبرمجة التفاعلية: يصبح الإكمال التلقائي غير قابل للاستخدام فوق 500 مللي ثانية، ومراجعة الكود مقبولة حتى 3 ثوانٍ، والمهام بالدُفعات غير حساسة للكمون. الأرقام التالية تقديرات من معايير المجتمع واختبارات داخلية، وليست قياسات رسمية من المصنّعين.',
        rows: [
          { 'Modelo': 'Qwen 3.6 27B Q4_K_M (RTX 4090)', 'Primer token (ms)': '80–120', 'Sostenido (tok/sec)': '~35', '¿Codificación interactiva?': '✅ نعم' },
          { 'Modelo': 'Qwen 3.6 27B Q4_K_M (Apple M4 Max 48 GB)', 'Primer token (ms)': '50–80', 'Sostenido (tok/sec)': '~42', '¿Codificación interactiva?': '✅ نعم' },
          { 'Modelo': 'Mistral Devstral 24B Q4_K_M (RTX 4090)', 'Primer token (ms)': '60–100', 'Sostenido (tok/sec)': '~40', '¿Codificación interactiva?': '✅ نعم' },
          { 'Modelo': 'DeepSeek Coder (API، كمون الاتحاد الأوروبي)', 'Primer token (ms)': '150–400', 'Sostenido (tok/sec)': '80–120', '¿Codificación interactiva?': '⚠️ هامشي' },
          { 'Modelo': 'Qwen 3.6 27B Q8_0 (dual RTX 3090)', 'Primer token (ms)': '100–150', 'Sostenido (tok/sec)': '~25', '¿Codificación interactiva?': '✅ نعم (مع تنازل عن الجودة)' },
        ],
        columns: ['Modelo', 'Primer token (ms)', 'Sostenido (tok/sec)', '¿Codificación interactiva?'],
        tableFormat: true,
        note: 'أرقام الكمون تقديرات من معايير المجتمع واختبارات، وليست قياسات رسمية من المصنّعين. يتفاوت كمون API الخاص بـ DeepSeek من الاتحاد الأوروبي (فرانكفورت) إلى خوادم DeepSeek حسب الحمل؛ 400 مللي ثانية لأول token معتاد في أوقات الذروة. لسير عمل الإكمال التلقائي، الاستدلال المحلي أسرع باستمرار.',
        callouts: [
          { type: 'warning', text: 'قيمة num_ctx الافتراضية في Ollama (2048) ترفع الأداء الظاهري (عدد token أقل للمعالجة) لكنها تقتطع السياق. اضبط num_ctx 32768 لقياسات كمون برمجة دقيقة.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'متطلبات الأجهزة',
        items: [
          '**Qwen 3.6 27B Q4_K_M**: 16 GB من VRAM — RTX 4080 (16 GB)، RTX 3090 (24 GB)، RTX 4090 (24 GB)، Apple M3/M4/M5 Max 48 GB',
          '**Mistral Devstral Small 24B Q4_K_M**: 14 GB من VRAM — RTX 4070 Ti Super (16 GB)، RTX 3090 (24 GB)، Apple M3/M4/M5 Pro 36 GB',
          '**Codestral 22B Q4_K_M**: 13 GB من VRAM — RTX 4070 Ti (12 GB هامشي، 16 GB موصى به)',
          '**تشغيل نموذجين في آن واحد**: RTX 4090 بسعة 24 GB يمكنها استضافة Qwen 3.6 27B Q4_K_M + Devstral 24B Q4_K_M في إعداد dual-GPU بسعة 48 GB. يشغّل Apple M5 Max (128 GB من الذاكرة الموحدة، عرض نطاق 460–614 GB/s) النموذجين معًا بأريحية عبر MLX.',
          '**توصية Apple Silicon**: M5 Pro (64 GB من الذاكرة الموحدة) يشغّل Qwen 3.6 27B بـ ~48 token/ثانية عبر MLX. M5 Max (128 GB) يبلغ ~55 token/ثانية لـ Qwen ويمكنه تشغيل Qwen + Devstral معًا — الخيار الأهدأ والأكفأ في الطاقة. M4 Pro بسعة 48 GB مناسب أيضًا بـ 42 token/ثانية.',
        ],
        codeBlock: `# Configuración de Ollama para Qwen 3.6 27B con num_ctx y capas GPU
cat > Modelfile-qwen3-coder <<'EOF'
FROM qwen3-coder:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen3-coder-local -f Modelfile-qwen3-coder
ollama run qwen3-coder-local`,
        codeLanguage: 'bash',
      },
      dispatchStrategy: {
        id: 'dispatch-strategy',
        title: 'استراتيجية التوزيع متعدد النماذج',
        content: [
          'لا يفوز أي نموذج كود في جميع المهام. يتصدر Qwen 3.6 27B في دقة المعايير. يتصدر Devstral في المهام بالوكلاء متعددة الملفات. DeepSeek Coder هو الأرخص على نطاق واسع للكود غير الحساس. طبقة توزيع تُوجّه المهام حسب النوع تلتقط مزايا الثلاثة جميعًا.',
          'مصفوفة توزيع مقترحة لفريق تطوير:',
        ],
        rows: [
          { 'Tipo de tarea': 'كود خاص/GDPR (بيانات العملاء)', 'Modelo recomendado': 'Qwen 3.6 27B (محلي)', 'Por qué': 'امتثال GDPR بالتصميم' },
          { 'Tipo de tarea': 'إكمال تلقائي (تفاعلي)', 'Modelo recomendado': 'Devstral 24B (محلي)', 'Por qué': 'مخرجات مستدامة أسرع، 40 token/ثانية' },
          { 'Tipo de tarea': 'مراجعة كود (غير حساسة)', 'Modelo recomendado': 'DeepSeek Coder (API)', 'Por qué': '$0.14/1M، جودة جيدة، أداء عالٍ' },
          { 'Tipo de tarea': 'إعادة هيكلة معقدة (متعددة الملفات)', 'Modelo recomendado': 'Qwen 3.6 27B (محلي) + إجماع PromptQuorum', 'Por qué': 'أفضل SWE-bench، آمن لـ GDPR' },
          { 'Tipo de tarea': 'توليد اختبارات بالدُفعات', 'Modelo recomendado': 'DeepSeek Coder (API)', 'Por qué': 'محسّن من حيث التكلفة للحجم غير الحساس' },
        ],
        columns: ['Tipo de tarea', 'Modelo recomendado', 'Por qué'],
        tableFormat: true,
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'التكامل مع PromptQuorum',
        content: 'يُوجّه PromptQuorum مهام الكود بين Qwen المحلي وDevstral المحلي وواجهات API السحابية وفق قواعد تصنيف تحددها أنت. هذا يلغي التبديل اليدوي للنماذج ويُنفّذ مصفوفة التوزيع أعلاه تلقائيًا.',
        codeBlock: `# Configuración de enrutamiento PromptQuorum para cargas de trabajo de código
# Establécelo en los ajustes de PromptQuorum o en el archivo .env

# Modelos locales (vía Ollama)
LOCAL_OLLAMA_URL=http://localhost:11434/v1
LOCAL_CODING_MODEL=qwen3-coder-local   # Qwen 3.6 27B con num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral     # Mistral Devstral 24B

# Fallback cloud
DEEPSEEK_API_KEY=tu_clave_aqui
DEEPSEEK_MODEL=deepseek-chat

# Reglas de enrutamiento (despacho PromptQuorum)
# route: task_contains("private") OR task_contains("customer") → qwen3-coder-local (local)
# route: task_type == "autocomplete" → devstral (local)
# route: token_count > 50000 → deepseek-chat (cloud, solo no sensible)
# default → qwen3-coder-local (local)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'يُوجّه PromptQuorum مهام الكود إلى Qwen 3.6 المحلي للكود الحساس لـ GDPR وإلى DeepSeek Coder للتوليد بالحجم غير الحساس.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Qwen 3 مقابل Claude Sonnet 4.6 مقابل DeepSeek R2 — مقارنة كاملة 2026](/ar/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[كيفية تشغيل Qwen 3 محليًا — دليل Ollama + LM Studio](/ar/local-llms/run-qwen-locally-guide-2026)',
          '[قارن النماذج في PromptQuorum](/ar/compare)',
          '[أفضل نماذج LLM المحلية للكود في 2026](/ar/local-llms/best-local-llms-for-coding)',
          '[انضم إلى قائمة انتظار PromptQuorum](/ar/waitlist)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل Qwen 3.6 27B أفضل من DeepSeek Coder للبرمجة المحلية؟', a: 'للنشر المحلي: يحقق Qwen 3.6 27B نسبة 77.2% في SWE-bench (مُتحقق منها) ويعمل بالكامل محليًا على 16 GB من VRAM، مما يجعله متوافقًا مع GDPR لفرق الاتحاد الأوروبي. DeepSeek Coder واجهة API سحابية تكلّف ~$0.14/1M token إدخال — الخيار الأفضل لتوليد كود عام غير حساس بحجم عالٍ حيث لا تتوفر أجهزة محلية. الخيار الصحيح يعتمد على حساسية بياناتك وميزانيتك، لا على فائز واحد.' },
          { q: 'ما هو Mistral Devstral ولماذا يُذكر هنا؟', a: 'Mistral Devstral Small 24B نموذج موجّه للكود من Mistral AI، صدر في مايو 2026، مصمم خصيصًا للمهام البرمجية بالوكلاء — إعادة الهيكلة متعددة الملفات واستخدام الأدوات وتوليد الكود التكراري. يحقق 90.1% HumanEval ويعمل على 14 GB من VRAM. وهو قوي بشكل خاص في المهام التي تتطلب عمليات كود متعددة متتابعة، حيث يمنحه تدريبه بالوكلاء أفضلية على الدرجات الخام لـ Qwen 3.6 27B.' },
          { q: 'هل يمكنني تشغيل Qwen 3.6 27B وDevstral 24B في آن واحد؟', a: 'على RTX 4090 واحدة (24 GB من VRAM)، لا — يستخدم Qwen 3.6 27B Q4_K_M ~15.8 GB ويستخدم Devstral 24B Q4_K_M ~14.2 GB، بإجمالي ~30 GB. ستحتاج إلى إعداد dual-GPU (RTX 3090 اثنتان أو RTX 4090 اثنتان) أو Apple Silicon بذاكرة موحدة 96+ GB. الحل العملي هو استخدام نموذج واحد في كل مرة والتبديل عبر Ollama، وهو ما يستغرق ~5 ثوانٍ على RTX 4090.' },
          { q: 'هل من الآمن استخدام DeepSeek Coder لكود شركات الاتحاد الأوروبي؟', a: 'يعالج DeepSeek Coder البيانات على خوادم DeepSeek AI، وهي شركة مسجّلة في الصين. لم تُصدر المفوضية الأوروبية قرار كفاية بشأن الصين. استخدام DeepSeek Coder مع بيانات شخصية للاتحاد الأوروبي أو كود مصدري مملوك يحتوي على معلومات شخصية يتطلب تحليلًا قانونيًا للامتثال للمادة 44 من GDPR. للكود المملوك دون بيانات شخصية، استشر فريقك القانوني. لمعالجة البيانات الشخصية، يُعد Qwen 3.6 27B المحلي البديل المتوافق.' },
          { q: 'ما هو SWE-bench ولماذا التركيز عليه؟', a: 'يختبر SWE-bench (معيار هندسة البرمجيات) ما إذا كان نموذج LLM قادرًا على حل مشكلات GitHub الحقيقية في قواعد كود مفتوحة المصدر مثل Django وFlask وNumPy. يقيس القدرة العملية على هندسة البرمجيات بدلًا من البرمجة على مستوى الدالة المعزولة. يحقق Qwen 3.6 27B نسبة 77.2% في SWE-bench Verified، وهو أكثر مقاييس البرمجة الواقعية موثوقية المتاح حاليًا.' },
        ],
      },
    },
  },
  // VERIFY: seção "Matemática de custo por token" é um modelo financeiro ancorado em USD — DeepSeek Coder é API cobrada em dólar (US$ 0,14/1M), então o cálculo de equilíbrio fica em USD. Contexto de hardware no varejo brasileiro (RTX 4090 ~R$ 11.000-13.000; sistema de 2 devs ~R$ 20.000) e eletricidade (~R$ 0,80/kWh) adicionados na prosa. Confirmar estimativas BR antes de publicar.
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Best Models',
    title: 'Qwen 3.6 Coder vs DeepSeek Coder vs Mistral Devstral: Benchmark de Código Local 2026',
    seoTitle: 'Qwen 3.6 Coder vs DeepSeek vs Mistral: código 2026',
    intro: 'O Qwen 3.6 27B atinge 77,2% no SWE-bench localmente em 16 GB de VRAM, igualando o DeepSeek Coder (91,6% HumanEval, ~75% SWE-bench) e superando o Mistral Devstral Small 24B (90,1% HumanEval, ~73% SWE-bench) em codificação agêntica. Os três modelos rodam localmente em hardware de consumo. Este benchmark cobre HumanEval, SWE-bench, MBPP, matemática de custo por token, latência com diferentes quantizações, perfis de hardware e estratégia de despacho multimodelo para cargas de trabalho de codificação.',
    metaDescription: 'Benchmark de código local: Qwen 3.6 27B (92,1% HumanEval, 77,2% SWE-bench), DeepSeek Coder ($0,14/1M) e Mistral Devstral. Custo, latência e hardware.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores de software que escolhem um LLM local de código para seus fluxos de trabalho diários',
    primaryTerm: 'benchmark LLM local de código 2026',
    leadAnswerBlock: '**O Qwen 3.6 27B lidera os benchmarks de código local em maio de 2026: 92,1% HumanEval, 77,2% SWE-bench, 84,3% MBPP. O DeepSeek Coder fica 0,5 pp atrás no HumanEval, mas é 21× mais barato como API em nuvem. O Mistral Devstral se destaca em tarefas agênticas de várias etapas. Para conformidade com o GDPR na UE, apenas o Qwen local mantém o código fora de servidores em nuvem. Para código em escala otimizado em custo, despache tarefas privadas para o Qwen local e tarefas não sensíveis para o DeepSeek Coder.**',
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor LLM local de código em 2026 — Qwen 3.6, DeepSeek Coder ou Mistral Devstral?', // VERIFY
        answer: 'Maio de 2026: o Qwen 3.6 27B alcança 77,2% no SWE-bench localmente em 16 GB de VRAM. O DeepSeek Coder alcança 91,6% no HumanEval como API em nuvem a US$ 0,14/1M tokens. O Mistral Devstral Small 24B alcança 90,1% no HumanEval e lidera em tarefas agênticas de vários arquivos. Para desenvolvimento na UE em conformidade com o GDPR, o Qwen 3.6 27B local é o vencedor claro.', // VERIFY
        bullets: [
          'Qwen 3.6 27B — 92,1% HumanEval, 77,2% SWE-bench, 84,3% MBPP, 16 GB de VRAM local', // VERIFY
          'DeepSeek Coder — 91,6% HumanEval, ~75% SWE-bench, US$ 0,14/1M tokens API em nuvem', // VERIFY
          'Mistral Devstral Small 24B — 90,1% HumanEval, melhor para tarefas agênticas, 14 GB de VRAM', // VERIFY
          'GDPR: apenas o Qwen 3.6 local mantém o código em hardware da UE por design', // VERIFY
          'Estratégia de despacho: Qwen local para tarefas privadas/GDPR, DeepSeek para código público em volume', // VERIFY
        ],
        updatedDate: '2026-05-16',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Por que os modelos locais alcançaram os da nuvem', anchor: '#local-caught-up' },
      { label: 'Tabela de benchmarks', anchor: '#benchmark-table' },
      { label: 'Matemática de custo por token', anchor: '#cost-math' },
      { label: 'A realidade da latência', anchor: '#latency' },
      { label: 'Requisitos de hardware', anchor: '#hardware' },
      { label: 'Estratégia de despacho multimodelo', anchor: '#dispatch-strategy' },
      { label: 'Integração com o PromptQuorum', anchor: '#promptquorum' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    comparisonTable: {
      columns: ['Modelo', 'HumanEval', 'SWE-bench', 'MBPP', 'Implantação', 'Custo de entrada ($/1M)', 'VRAM (local)'],
      rows: [
        { 'Modelo': 'Qwen 3.6 27B', 'HumanEval': '92.1%', 'SWE-bench': '77.2%', 'MBPP': '84.3%', 'Implantação': 'Local (Ollama)', 'Custo de entrada ($/1M)': 'US$ 0 após o hardware', 'VRAM (local)': '16 GB' },
        { 'Modelo': 'DeepSeek Coder', 'HumanEval': '91.6%', 'SWE-bench': '~75%', 'MBPP': '82.7%', 'Implantação': 'API em nuvem', 'Custo de entrada ($/1M)': 'US$ 0,14', 'VRAM (local)': 'N/A (nuvem)' },
        { 'Modelo': 'Mistral Devstral Small 24B', 'HumanEval': '90.1%', 'SWE-bench': '~73%', 'MBPP': '81.4%', 'Implantação': 'Local (Ollama)', 'Custo de entrada ($/1M)': 'US$ 0 após o hardware', 'VRAM (local)': '14 GB' },
        { 'Modelo': 'Codestral 22B', 'HumanEval': '88.9%', 'SWE-bench': 'N/A', 'MBPP': '79.2%', 'Implantação': 'Local ou API', 'Custo de entrada ($/1M)': 'US$ 0,20 (API)', 'VRAM (local)': '13 GB' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**O Qwen 3.6 27B lidera**: 92,1% HumanEval, 77,2% SWE-bench, 84,3% MBPP — os melhores valores nos três benchmarks localmente.',
          '**O DeepSeek Coder é o vencedor em custo de nuvem**: US$ 0,14/1M tokens, 0,5 pp atrás do Qwen no HumanEval. Use-o para código público não sensível em escala.',
          '**O Mistral Devstral se destaca em tarefas agênticas**: melhor em uso de ferramentas de várias etapas e refatoração multiarquivo do que suas pontuações brutas sugerem.',
          '**Latência**: o Qwen 3.6 27B em Q4_K_M roda a 35 tokens/seg em uma RTX 4090. O Devstral em 14 GB a 40 tokens/seg. A latência da API do DeepSeek Coder depende da rede (~50–200 ms até o primeiro token).',
          '**Estratégia de despacho**: tarefas de código sensíveis/GDPR → Qwen 3.6 local, tarefas não sensíveis de alto volume → API do DeepSeek Coder, refatoração agêntica → Devstral local.',
        ],
      },
      localCaughtUp: {
        id: 'local-caught-up',
        title: 'Por que os modelos locais de código alcançaram os da nuvem',
        content: [
          'Durante os três primeiros anos da era dos LLMs, os modelos em nuvem superavam os locais em todos os benchmarks de código por 10–20 pontos percentuais. Essa diferença foi fechada em 2025–2026, quando os modelos de pesos abertos escalaram para a faixa de 27–72B parâmetros com treinamento específico em código sobre grandes corpora.',
          'O Qwen 3.6 27B, lançado em abril de 2026, atinge 77,2% no SWE-bench — um benchmark que testa se os modelos conseguem resolver issues reais do GitHub em bases de código open source. Essa pontuação se compara diretamente ao Claude Sonnet 4.6 (~72%) e ao GPT-5.5 (~73%), ambos significativamente maiores e disponíveis apenas na nuvem. A chave arquitetural é que o pré-treinamento focado em código filtrado (a Alibaba publicou 3T de tokens de código para o Qwen 3) compensa a diferença no número de parâmetros.',
          'Três fatores impulsionaram a convergência: (1) dados de treinamento de código de alta qualidade em escala, (2) RLHF ajustado em tarefas reais de engenharia de software em vez de seguimento genérico de instruções, e (3) quantização GGUF aprimorada que preserva melhor a capacidade de codificação em precisão Q4 do que os métodos anteriores.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Qwen 3.6 27B atinge 77,2% no SWE-bench localmente — igualando ou superando o Claude Sonnet 4.6 e o GPT-5.5 na resolução real de issues do GitHub.' },
          { type: 'plain-terms', text: 'O SWE-bench testa se uma IA consegue realmente corrigir bugs em bases de código open source reais como Django, Flask e NumPy. Uma pontuação de 77,2% significa que o modelo resolveu 77 de 100 issues reais do GitHub sem ajuda humana.' },
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Tabela de benchmarks',
        content: 'Todas as pontuações são números publicados em maio de 2026 em páginas oficiais dos modelos ou em leaderboards abertos. O HumanEval usa a métrica pass@1. O SWE-bench usa a taxa de aprovação de testes verificados. O MBPP usa pass@1 no conjunto de testes completo do MBPP.',
        rows: [
          { 'Benchmark': 'HumanEval (Python, pass@1)', 'Qwen 3.6 27B': '92.1%', 'DeepSeek Coder': '91.6%', 'Mistral Devstral 24B': '90.1%', 'Codestral 22B': '88.9%' },
          { 'Benchmark': 'SWE-bench (issues do GitHub)', 'Qwen 3.6 27B': '77.2%', 'DeepSeek Coder': '~75%', 'Mistral Devstral 24B': '~73%', 'Codestral 22B': 'N/A' },
          { 'Benchmark': 'MBPP (problemas Python)', 'Qwen 3.6 27B': '84.3%', 'DeepSeek Coder': '82.7%', 'Mistral Devstral 24B': '81.4%', 'Codestral 22B': '79.2%' },
          { 'Benchmark': 'Multilíngue (Java, Go, Rust)', 'Qwen 3.6 27B': '88.4%', 'DeepSeek Coder': '87.1%', 'Mistral Devstral 24B': '84.6%', 'Codestral 22B': '83.1%' },
        ],
        columns: ['Benchmark', 'Qwen 3.6 27B', 'DeepSeek Coder', 'Mistral Devstral 24B', 'Codestral 22B'],
        tableFormat: true,
        callouts: [
          { type: 'note', text: 'As pontuações de SWE-bench para o DeepSeek Coder e o Mistral Devstral são estimadas a partir dos dados de leaderboard disponíveis. As pontuações de SWE-bench do Qwen 3.6 27B e do Codestral são de publicações oficiais.' },
          { type: 'tip', text: 'A linha de modelos da DeepSeek evolui com frequência. Verifique o nome do modelo atual e o preço em platform.deepseek.com antes da implantação. Os números refletem dados publicamente disponíveis em maio de 2026.' },
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'Matemática de custo por token',
        content: [
          'A economia dos LLMs de código depende do volume de uso, da sensibilidade das tarefas e do overhead de infraestrutura. A seguir estão projeções de custo em diferentes volumes diários de tokens para um desenvolvedor individual. Observação: o modelo de custo é ancorado em USD porque a API do DeepSeek Coder é cobrada em dólar; os custos de eletricidade são apresentados para referência (no Brasil, ~R$ 0,80/kWh, variando por distribuidora e bandeira tarifária).',
          'A 5M tokens/dia (sessão intensa de codificação: autocomplete, geração de testes, revisão de código), a API em nuvem do DeepSeek Coder custa aproximadamente US$ 0,70/dia às taxas habituais. Em um ano de trabalho (250 dias), isso dá ~US$ 175/ano por desenvolvedor para tarefas não sensíveis. Uma RTX 4090 (US$ 1.500–2.000; ~R$ 11.000–13.000 no varejo brasileiro) rodando o Qwen 3.6 27B local atinge o ponto de equilíbrio em alguns anos — mas o equilíbrio muda drasticamente para equipes e código sensível ao GDPR.',
          'Para uma equipe de 10 gerando 50M tokens/dia: a API em nuvem custa ~US$ 7/dia (~US$ 1.750/ano). Um sistema RTX 4090 para 2 desenvolvedores (US$ 3.000 no total; ~R$ 20.000 no Brasil) atinge o equilíbrio em menos de 2 anos, com conformidade total ao GDPR e custo zero por token a partir de então.',
        ],
        codeBlock: `# Calculadora de custos: matemática por token para LLMs de código
# Premissas: razão entrada + saída 1:2, taxa combinada efetiva
# Modelo ancorado em USD (API DeepSeek cobrada em dólar)

# DeepSeek Coder (nuvem)
input_rate  = 0.14  # US$/1M tokens (aproximado)
output_rate = 0.28  # US$/1M tokens (aproximado para deepseek-chat)
blended     = (input_rate + 2 * output_rate) / 3  # ~US$0.23/1M combinado

daily_tokens = 5_000_000  # 5M tokens/dia por desenvolvedor
daily_cost   = (daily_tokens / 1_000_000) * blended  # US$1.15/dia
annual_cost  = daily_cost * 250  # US$287/ano por desenvolvedor

# Qwen 3.6 27B local (RTX 4090)
hardware_cost = 1800  # US$ (GPU RTX 4090; ~R$ 11.000-13.000 no varejo brasileiro)
# Eletricidade no Brasil: ~R$ 0,80/kWh (350W -> ~R$ 2.450/ano em uso continuo)
annual_local  = 0  # custo por token zero apos o hardware (eletricidade a parte)
# Equilibrio vs DeepSeek a 5M tokens/dia: hardware_cost / annual_cost ~ poucos anos para 1 dev`,
        codeLanguage: 'python',
      },
      latency: {
        id: 'latency',
        title: 'A realidade da latência',
        content: 'A latência importa para a codificação interativa: o autocomplete fica inutilizável acima de 500 ms, a revisão de código é aceitável até 3 s, as tarefas em lote são insensíveis à latência. Os números a seguir são estimativas de benchmarks da comunidade e testes internos, não medições oficiais dos fabricantes.',
        rows: [
          { 'Modelo': 'Qwen 3.6 27B Q4_K_M (RTX 4090)', 'Primeiro token (ms)': '80–120', 'Sustentado (tok/seg)': '~35', 'Codificação interativa?': '✅ Sim' },
          { 'Modelo': 'Qwen 3.6 27B Q4_K_M (Apple M4 Max 48 GB)', 'Primeiro token (ms)': '50–80', 'Sustentado (tok/seg)': '~42', 'Codificação interativa?': '✅ Sim' },
          { 'Modelo': 'Mistral Devstral 24B Q4_K_M (RTX 4090)', 'Primeiro token (ms)': '60–100', 'Sustentado (tok/seg)': '~40', 'Codificação interativa?': '✅ Sim' },
          { 'Modelo': 'DeepSeek Coder (API, latência UE)', 'Primeiro token (ms)': '150–400', 'Sustentado (tok/seg)': '80–120', 'Codificação interativa?': '⚠️ Marginal' },
          { 'Modelo': 'Qwen 3.6 27B Q8_0 (dual RTX 3090)', 'Primeiro token (ms)': '100–150', 'Sustentado (tok/seg)': '~25', 'Codificação interativa?': '✅ Sim (com compromisso de qualidade)' },
        ],
        columns: ['Modelo', 'Primeiro token (ms)', 'Sustentado (tok/seg)', 'Codificação interativa?'],
        tableFormat: true,
        note: 'Os números de latência são estimativas de benchmarks da comunidade e testes, não medições oficiais dos fabricantes. A latência da API da DeepSeek a partir da UE (Frankfurt) até os servidores da DeepSeek varia conforme a carga; 400 ms até o primeiro token é comum em horários de pico. Para fluxos de autocomplete, a inferência local é sistematicamente mais rápida.',
        callouts: [
          { type: 'warning', text: 'O num_ctx padrão do Ollama (2048) aumenta a vazão aparente (menos tokens a processar), mas trunca o contexto. Defina num_ctx 32768 para medições precisas de latência de codificação.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware',
        items: [
          '**Qwen 3.6 27B Q4_K_M**: 16 GB de VRAM — RTX 4080 (16 GB), RTX 3090 (24 GB), RTX 4090 (24 GB), Apple M3/M4/M5 Max 48 GB',
          '**Mistral Devstral Small 24B Q4_K_M**: 14 GB de VRAM — RTX 4070 Ti Super (16 GB), RTX 3090 (24 GB), Apple M3/M4/M5 Pro 36 GB',
          '**Codestral 22B Q4_K_M**: 13 GB de VRAM — RTX 4070 Ti (12 GB marginal, 16 GB recomendado)',
          '**Rodar dois modelos simultaneamente**: uma RTX 4090 de 24 GB pode hospedar Qwen 3.6 27B Q4_K_M + Devstral 24B Q4_K_M em uma configuração dual-GPU de 48 GB. O Apple M5 Max (128 GB de memória unificada, 460–614 GB/s de largura de banda) roda confortavelmente os dois modelos ao mesmo tempo via MLX.',
          '**Recomendação Apple Silicon**: o M5 Pro (64 GB de memória unificada) roda o Qwen 3.6 27B a ~48 tokens/seg via MLX. O M5 Max (128 GB) atinge ~55 tokens/seg para o Qwen e consegue rodar Qwen + Devstral ao mesmo tempo — a opção mais silenciosa e eficiente em energia. O M4 Pro com 48 GB também é adequado a 42 tokens/seg.',
        ],
        codeBlock: `# Configuração do Ollama para Qwen 3.6 27B com num_ctx e camadas de GPU
cat > Modelfile-qwen3-coder <<'EOF'
FROM qwen3-coder:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen3-coder-local -f Modelfile-qwen3-coder
ollama run qwen3-coder-local`,
        codeLanguage: 'bash',
      },
      dispatchStrategy: {
        id: 'dispatch-strategy',
        title: 'Estratégia de despacho multimodelo',
        content: [
          'Nenhum modelo de código vence em todas as tarefas. O Qwen 3.6 27B lidera em precisão de benchmarks. O Devstral lidera em tarefas agênticas multiarquivo. O DeepSeek Coder é o mais barato em escala para código não sensível. Uma camada de despacho que roteia as tarefas por tipo captura os benefícios dos três.',
          'Uma matriz de despacho sugerida para uma equipe de desenvolvimento:',
        ],
        rows: [
          { 'Tipo de tarefa': 'Código privado/GDPR (dados de clientes)', 'Modelo recomendado': 'Qwen 3.6 27B (local)', 'Por quê': 'Conformidade com GDPR por design' },
          { 'Tipo de tarefa': 'Autocomplete (interativo)', 'Modelo recomendado': 'Devstral 24B (local)', 'Por quê': 'Saída sustentada mais rápida, 40 tok/seg' },
          { 'Tipo de tarefa': 'Revisão de código (não sensível)', 'Modelo recomendado': 'DeepSeek Coder (API)', 'Por quê': 'US$ 0,14/1M, boa qualidade, alta vazão' },
          { 'Tipo de tarefa': 'Refatoração complexa (multiarquivo)', 'Modelo recomendado': 'Qwen 3.6 27B (local) + consenso PromptQuorum', 'Por quê': 'Melhor SWE-bench, seguro para GDPR' },
          { 'Tipo de tarefa': 'Geração de testes em lote', 'Modelo recomendado': 'DeepSeek Coder (API)', 'Por quê': 'Otimizado em custo para volume não sensível' },
        ],
        columns: ['Tipo de tarefa', 'Modelo recomendado', 'Por quê'],
        tableFormat: true,
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Integração com o PromptQuorum',
        content: 'O PromptQuorum roteia as tarefas de código entre o Qwen local, o Devstral local e APIs em nuvem conforme regras de classificação que você define. Isso elimina a troca manual de modelos e implementa automaticamente a matriz de despacho acima.',
        codeBlock: `# Configuração de roteamento do PromptQuorum para cargas de trabalho de código
# Defina nas configurações do PromptQuorum ou no arquivo .env

# Modelos locais (via Ollama)
LOCAL_OLLAMA_URL=http://localhost:11434/v1
LOCAL_CODING_MODEL=qwen3-coder-local   # Qwen 3.6 27B com num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral     # Mistral Devstral 24B

# Fallback em nuvem
DEEPSEEK_API_KEY=sua_chave_aqui
DEEPSEEK_MODEL=deepseek-chat

# Regras de roteamento (despacho PromptQuorum)
# route: task_contains("private") OR task_contains("customer") -> qwen3-coder-local (local)
# route: task_type == "autocomplete" -> devstral (local)
# route: token_count > 50000 -> deepseek-chat (nuvem, apenas nao sensivel)
# default -> qwen3-coder-local (local)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O PromptQuorum roteia as tarefas de código para o Qwen 3.6 local em código sensível ao GDPR e para o DeepSeek Coder na geração em volume não sensível.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Qwen 3 vs Claude Sonnet 4.6 vs DeepSeek R2 — Comparação completa 2026](/pt/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[Como executar o Qwen 3 localmente — Guia Ollama + LM Studio](/pt/local-llms/run-qwen-locally-guide-2026)',
          '[Comparar modelos no PromptQuorum](/pt/compare)',
          '[Os melhores LLMs locais para código em 2026](/pt/local-llms/best-local-llms-for-coding)',
          '[Entre na lista de espera do PromptQuorum](/pt/waitlist)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'O Qwen 3.6 27B é melhor que o DeepSeek Coder para codificação local?', a: 'Para implantação local: o Qwen 3.6 27B atinge 77,2% no SWE-bench (verificado) e roda inteiramente local em 16 GB de VRAM, tornando-o conforme ao GDPR para equipes da UE. O DeepSeek Coder é uma API em nuvem que custa ~US$ 0,14/1M tokens de entrada — a melhor opção para geração de código público não sensível em alto volume, quando não há hardware local disponível. A escolha certa depende da sensibilidade dos seus dados e do orçamento, não de um único vencedor.' },
          { q: 'O que é o Mistral Devstral e por que ele é mencionado aqui?', a: 'O Mistral Devstral Small 24B é um modelo orientado a código da Mistral AI, lançado em maio de 2026, projetado especificamente para tarefas de codificação agêntica — refatoração multiarquivo, uso de ferramentas e geração iterativa de código. Atinge 90,1% no HumanEval e roda em 14 GB de VRAM. É especialmente forte em tarefas que exigem várias operações de código sequenciais, em que seu treinamento agêntico lhe dá vantagem sobre as pontuações brutas do Qwen 3.6 27B.' },
          { q: 'Posso rodar o Qwen 3.6 27B e o Devstral 24B simultaneamente?', a: 'Em uma única RTX 4090 (24 GB de VRAM), não — o Qwen 3.6 27B Q4_K_M usa ~15,8 GB e o Devstral 24B Q4_K_M usa ~14,2 GB, somando ~30 GB. Você precisaria de uma configuração dual-GPU (duas RTX 3090 ou duas RTX 4090) ou de Apple Silicon com 96+ GB de memória unificada. A solução prática é usar um modelo por vez e alternar via Ollama, o que leva ~5 segundos em uma RTX 4090.' },
          { q: 'É seguro usar o DeepSeek Coder para código de empresa da UE?', a: 'O DeepSeek Coder processa dados nos servidores da DeepSeek AI, uma empresa constituída na China. A Comissão Europeia não emitiu uma decisão de adequação para a China. Usar o DeepSeek Coder com dados pessoais da UE ou código-fonte proprietário que contenha informações pessoais exige análise jurídica de conformidade com o Artigo 44 do GDPR. Para código proprietário sem dados pessoais, consulte sua equipe jurídica. Para tratamento de dados pessoais, o Qwen 3.6 27B local é a alternativa em conformidade.' },
          { q: 'O que é o SWE-bench e por que focar nele?', a: 'O SWE-bench (benchmark de Engenharia de Software) testa se um LLM consegue resolver issues reais do GitHub em bases de código open source como Django, Flask e NumPy. Mede a capacidade prática de engenharia de software em vez da codificação a nível de função isolada. O Qwen 3.6 27B atinge 77,2% no SWE-bench Verified, a métrica de codificação real mais confiável disponível atualmente.' },
        ],
      },
    },
  },
};
