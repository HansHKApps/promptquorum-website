// Slug: qwen-coder-vs-deepseek-mistral-local-2026

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Best Models',
    title: 'Qwen3.6 vs DeepSeek vs Devstral: Local Coding Model Comparison 2026',
    seoTitle: 'Qwen3.6 vs DeepSeek vs Devstral: Coding Models 2026',
    intro: 'Qwen3.6 27B reports 77.2% on SWE-bench Verified and runs locally through Ollama from an 18–19 GB download. DeepSeek V4 Flash reports 78.6% in High mode and is a cloud API from $0.15 per 1M input tokens. Devstral Small 2 reports 65.8% in a 15 GB local model. This comparison covers SWE-bench figures, context, licenses, per-token cost math, hardware needs and a multi-model dispatch strategy. All figures come from vendor pages and use different test setups, so they are not directly comparable.',
    metaDescription: 'Qwen3.6 27B (77.2% SWE-bench Verified, local), DeepSeek V4 Flash (API from $0.15/1M) and Devstral Small 2 compared: cost, context, hardware, licenses.',
    heroImage: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-en.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-10-17',
    last_full_refresh: '2026-10-17',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-27',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Software developers choosing a local coding LLM for daily development workflows',
    primaryTerm: 'local coding LLM benchmark 2026',
    leadAnswerBlock: '**Qwen3.6 27B is the strongest local option in this comparison: 77.2% on SWE-bench Verified (Qwen-reported), 256K context, Apache 2.0, and an 18–19 GB download that needs a 24 GB GPU or equivalent unified memory. DeepSeek V4 Flash reports 78.6% in High mode as a cloud API from $0.15 per 1M input tokens, but its 284B-parameter weights are server-class. Devstral Small 2 (65.8%, 15 GB) is the lighter local option. Because the figures come from different vendor test setups, treat the ranking as indicative. A cloud API sends your code to a third party, so keep sensitive code on local models.**',
    quickAnswerTop: {
      en: {
        question: 'Which local coding LLM is best in 2026: Qwen3.6, DeepSeek or Devstral?',
        answer: 'Qwen3.6 27B reports 77.2% on SWE-bench Verified and runs locally from an 18–19 GB download, so plan for a 24 GB GPU. DeepSeek V4 Flash reports 78.6% (High mode) as a cloud API at $0.15 per 1M input tokens (off-peak, cache miss). Devstral Small 2 reports 65.8% in a 15 GB local model. The scores come from different vendor setups, so they are indicative, not a controlled test. For sensitive code, local Qwen3.6 keeps it on your hardware; for non-sensitive volume work, a DeepSeek API is the cheapest option.',
        bullets: [
          'Qwen3.6 27B: 77.2% SWE-bench Verified, 256K context, 18–19 GB download, Apache 2.0',
          'DeepSeek V4 Flash: 78.6% (High mode), cloud API from $0.15/1M input tokens',
          'Devstral Small 2: 65.8% SWE-bench Verified, 15 GB, 384K context, Apache 2.0',
          'Local models keep code on your hardware; a cloud API sends it to the provider',
          'Dispatch strategy: local Qwen for private code, DeepSeek API for bulk non-sensitive tasks',
        ],
        updatedDate: '2026-10-17',
      },
      de: {
        question: 'Welches lokale Coding-LLM ist 2026 am besten: Qwen3.6, DeepSeek oder Devstral?',
        answer: 'Qwen3.6 27B erreicht laut Qwen 77,2 % auf SWE-bench Verified und läuft lokal mit einem Download von 18–19 GB; planen Sie eine 24-GB-GPU ein. DeepSeek V4 Flash gibt 78,6 % (High-Modus) an und kostet als Cloud-API 0,15 $ pro 1 Mio. Input-Token (außerhalb der Spitzenzeiten, ohne Cache-Treffer). Devstral Small 2 gibt 65,8 % bei 15 GB an. Die Werte stammen aus unterschiedlichen Herstellertests und sind Richtwerte, kein kontrollierter Vergleich. Für sensiblen Code hält lokales Qwen3.6 die Daten auf Ihrer Hardware; für nicht sensible Massenarbeit ist eine DeepSeek-API am günstigsten.',
        bullets: [
          'Qwen3.6 27B: 77,2 % SWE-bench Verified, 256K Kontext, 18–19 GB Download, Apache 2.0',
          'DeepSeek V4 Flash: 78,6 % (High-Modus), Cloud-API ab 0,15 $/1 Mio. Input-Token',
          'Devstral Small 2: 65,8 % SWE-bench Verified, 15 GB, 384K Kontext, Apache 2.0',
          'Lokale Modelle halten Code auf Ihrer Hardware; eine Cloud-API sendet ihn an den Anbieter',
          'Dispatch-Strategie: lokales Qwen für privaten Code, DeepSeek-API für nicht sensible Massenaufgaben',
        ],
        updatedDate: '2026-10-17',
      },
      fr: {
        question: 'Quel LLM de code local est le meilleur en 2026 : Qwen3.6, DeepSeek ou Devstral ?',
        answer: 'Qwen3.6 27B annonce 77,2 % sur SWE-bench Verified et tourne en local avec un téléchargement de 18–19 Go : prévoyez un GPU de 24 Go. DeepSeek V4 Flash annonce 78,6 % (mode High) en API cloud à 0,15 $ par million de tokens d\'entrée (hors heures de pointe, sans cache). Devstral Small 2 annonce 65,8 % dans un modèle local de 15 Go. Les scores viennent de protocoles d\'éditeurs différents : ils sont indicatifs, pas un test contrôlé. Pour du code sensible, Qwen3.6 local le garde sur votre matériel ; pour du volume non sensible, une API DeepSeek est l\'option la moins chère.',
        bullets: [
          'Qwen3.6 27B : 77,2 % SWE-bench Verified, contexte 256K, téléchargement 18–19 Go, Apache 2.0',
          'DeepSeek V4 Flash : 78,6 % (mode High), API cloud dès 0,15 $/1M tokens d\'entrée',
          'Devstral Small 2 : 65,8 % SWE-bench Verified, 15 Go, contexte 384K, Apache 2.0',
          'Les modèles locaux gardent le code sur votre matériel ; une API cloud l\'envoie au fournisseur',
          'Stratégie de dispatch : Qwen local pour le code privé, API DeepSeek pour les tâches de volume non sensibles',
        ],
        updatedDate: '2026-10-17',
      },
      ja: {
        question: '2026年、最高のローカルコーディングLLMは？Qwen3.6、DeepSeek、Devstralの比較',
        answer: 'Qwen3.6 27BはSWE-bench Verifiedで77.2%と公表され、18～19 GBのダウンロードでローカル実行できるため、24 GBのGPUを想定してください。DeepSeek V4 Flashは78.6%（Highモード）と公表され、クラウドAPIで入力100万トークンあたり$0.15です（オフピーク、キャッシュなしの場合）。Devstral Small 2は15 GBのローカルモデルで65.8%です。スコアはベンダーごとに異なる環境のもので、統制されたテストではなく参考値です。機密性の高いコードはローカルのQwen3.6が自分のハードウェア内に留め、機密でない大量処理にはDeepSeek APIが最も安価です。',
        bullets: [
          'Qwen3.6 27B：SWE-bench Verified 77.2%、256Kコンテキスト、18～19 GB、Apache 2.0',
          'DeepSeek V4 Flash：78.6%（Highモード）、入力100万トークンあたり$0.15からのクラウドAPI',
          'Devstral Small 2：SWE-bench Verified 65.8%、15 GB、384Kコンテキスト、Apache 2.0',
          'ローカルモデルはコードを手元のハードウェアに留め、クラウドAPIは提供元に送信します',
          'ディスパッチ戦略：非公開コードはローカルQwen、機密でない大量処理はDeepSeek API',
        ],
        updatedDate: '2026-10-17',
      },
      zh: {
        question: '2026年最佳本地编程LLM：Qwen3.6、DeepSeek还是Devstral？',
        answer: 'Qwen3.6 27B 公布的 SWE-bench Verified 得分为 77.2%，以 18–19 GB 的下载量在本地运行，请按 24 GB 显卡规划。DeepSeek V4 Flash 公布 78.6%（High 模式），云 API 每百万输入令牌 $0.15（非高峰时段、缓存未命中）。Devstral Small 2 在 15 GB 的本地模型中公布 65.8%。分数来自各厂商不同的测试环境，只是参考，不是受控测试。敏感代码由本地 Qwen3.6 保留在你的硬件上；非敏感的大批量任务用 DeepSeek API 最便宜。',
        bullets: [
          'Qwen3.6 27B：SWE-bench Verified 77.2%，256K 上下文，18–19 GB 下载，Apache 2.0',
          'DeepSeek V4 Flash：78.6%（High 模式），云 API 每百万输入令牌 $0.15 起',
          'Devstral Small 2：SWE-bench Verified 65.8%，15 GB，384K 上下文，Apache 2.0',
          '本地模型把代码留在你的硬件上；云 API 会把代码发送给提供商',
          '调度策略：私有代码用本地 Qwen，非敏感批量任务用 DeepSeek API',
        ],
        updatedDate: '2026-10-17',
      },
      es: {
        question: '¿Cuál es el mejor LLM local de código en 2026: Qwen3.6, DeepSeek o Devstral?',
        answer: 'Qwen3.6 27B informa un 77,2 % en SWE-bench Verified y se ejecuta en local desde una descarga de 18–19 GB, así que prevé una GPU de 24 GB. DeepSeek V4 Flash informa un 78,6 % (modo High) como API cloud a 0,15 $ por millón de tokens de entrada (fuera de horas punta, sin caché). Devstral Small 2 informa un 65,8 % en un modelo local de 15 GB. Las puntuaciones proceden de configuraciones de fabricantes distintas: son orientativas, no una prueba controlada. Para código sensible, Qwen3.6 local lo mantiene en tu hardware; para volumen no sensible, una API de DeepSeek es la opción más barata.',
        bullets: [
          'Qwen3.6 27B: 77,2 % SWE-bench Verified, contexto de 256K, descarga de 18–19 GB, Apache 2.0',
          'DeepSeek V4 Flash: 78,6 % (modo High), API cloud desde 0,15 $/1M tokens de entrada',
          'Devstral Small 2: 65,8 % SWE-bench Verified, 15 GB, contexto de 384K, Apache 2.0',
          'Los modelos locales mantienen el código en tu hardware; una API cloud lo envía al proveedor',
          'Estrategia de despacho: Qwen local para código privado, API de DeepSeek para tareas masivas no sensibles',
        ],
        updatedDate: '2026-10-17',
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
      columns: ['Model', 'SWE-bench Verified', 'Deployment', 'Context', 'Input Cost ($/1M)', 'Download (local)'],
      rows: [
        { Model: 'Qwen3.6 27B', 'SWE-bench Verified': '77.2% (Qwen)', Deployment: 'Local (Ollama)', Context: '256K', 'Input Cost ($/1M)': '$0 after hardware', 'Download (local)': '18–19 GB' },
        { Model: 'DeepSeek V4 Flash', 'SWE-bench Verified': '78.6% (High mode)', Deployment: 'Cloud API', Context: '1M', 'Input Cost ($/1M)': '$0.15–0.30', 'Download (local)': 'N/A (284B MoE)' },
        { Model: 'Devstral Small 2 24B', 'SWE-bench Verified': '65.8%', Deployment: 'Local (Ollama)', Context: '384K', 'Input Cost ($/1M)': '$0 after hardware', 'Download (local)': '15 GB' },
        { Model: 'Codestral 22B', 'SWE-bench Verified': 'Not published', Deployment: 'Local (Ollama)', Context: '32K', 'Input Cost ($/1M)': '$0 after hardware', 'Download (local)': '13 GB' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen3.6 27B is the strongest local option**: 77.2% on SWE-bench Verified (Qwen-reported), 18–19 GB download, 256K context, Apache 2.0.',
          '**DeepSeek V4 Flash is the cloud cost option**: 78.6% in High mode (DeepSeek-reported) at $0.15 per 1M input tokens off-peak; its 284B weights are server-class.',
          '**Devstral Small 2 is the lighter agentic option**: 65.8% on SWE-bench Verified in a 15 GB download with 384K context.',
          '**All figures are vendor-reported**: test setups differ, so scores are indicative rather than a controlled head-to-head.',
          '**Dispatch strategy**: route sensitive code to local Qwen3.6, high-volume non-sensitive tasks to a DeepSeek API, and interactive or agentic work to local Devstral Small 2.',
        ],
      },
      localCaughtUp: {
        id: 'local-caught-up',
        title: 'Why Local Coding Models Caught Up',
        content: [
          'For the first years of the LLM era, cloud models were clearly ahead of local models on coding tasks. That gap narrowed in 2025–2026 as open-weight models reached the 24–30B range with coding-focused training.',
          'Qwen3.6 27B, released in April 2026, reports 77.2 on SWE-bench Verified, a benchmark of real GitHub issues in open-source Python projects. In the same table on its model card, Qwen lists 75.0 for Qwen3.5-27B and 80.9 for Claude 4.5 Opus, so the open model sits close to a leading cloud model on this vendor-reported test. These are Qwen\'s own results from an internal agent scaffold, not an independent verification.',
          'Commonly cited reasons for the convergence are (1) coding-focused training data at scale, (2) post-training on real software-engineering tasks rather than generic instruction following, and (3) better GGUF quantization that preserves coding ability at Q4 precision.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.6 27B reports 77.2% on SWE-bench Verified and runs locally from an 18–19 GB download.' },
          { type: 'plain-terms', text: 'SWE-bench Verified tests whether an AI can resolve real GitHub issues in open-source projects such as Django, Flask and scikit-learn. A score of 77.2% means the model resolved about 77 of every 100 test issues, measured with the vendor\'s own agent setup.' },
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Benchmark Table',
        image: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-en.webp',
        imageCaption: 'SWE-bench Verified as reported by each vendor: Qwen3.6 27B 77.2%, DeepSeek V4 Flash 78.6% (High mode), Devstral Small 2 65.8%.',
        content: 'All figures are vendor-reported from model cards and Ollama listings. Test setups differ between vendors, so treat SWE-bench numbers as indicative, not as a controlled head-to-head. PromptQuorum has not re-run these benchmarks.',
        rows: [
          { Benchmark: 'SWE-bench Verified (vendor-reported)', 'Qwen3.6 27B': '77.2%', 'DeepSeek V4 Flash': '78.6% (High) / 79.0% (Max)', 'Devstral Small 2': '65.8%', 'Codestral 22B': 'Not published' },
          { Benchmark: 'Parameters (total / active)', 'Qwen3.6 27B': '27B dense', 'DeepSeek V4 Flash': '284B / 13B active', 'Devstral Small 2': '24B dense', 'Codestral 22B': '22B dense' },
          { Benchmark: 'Context window', 'Qwen3.6 27B': '256K', 'DeepSeek V4 Flash': '1M', 'Devstral Small 2': '384K', 'Codestral 22B': '32K' },
        ],
        columns: ['Benchmark', 'Qwen3.6 27B', 'DeepSeek V4 Flash', 'Devstral Small 2', 'Codestral 22B'],
        tableFormat: true,
        callouts: [
          { type: 'note', text: 'Qwen\'s 77.2 uses Qwen\'s internal agent scaffold. DeepSeek reports 73.7 (non-thinking), 78.6 (High) and 79.0 (Max) modes. Devstral Small 2\'s 65.8 comes from its Ollama listing. Different scaffolds mean the numbers are not directly comparable.' },
          { type: 'tip', text: 'DeepSeek\'s API model names change. Check api-docs.deepseek.com/quick_start/pricing before deployment (current names: deepseek-flash and deepseek-v4-pro).' },
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'Per-Token Cost Math',
        content: [
          'The economics of coding LLMs depend on usage volume, task sensitivity and hardware. The projection below is for one developer and rests on the stated assumptions; it is arithmetic, not a measurement. Electricity is priced at €0.35/kWh, a typical German rate; check your own tariff.',
          'At 5M tokens per day (a heavy session of autocomplete, test generation and code review) with a 1:2 input-to-output split, the DeepSeek API (deepseek-flash, $0.15 input and $0.60 output per 1M tokens off-peak) costs about $2.25 per day, or roughly $560 over 250 working days. At peak-hour rates ($0.30 input, $1.20 output) the same usage costs about $4.50 per day, or roughly $1,125 per year.',
          'A local setup trades that for hardware and power. An RTX 4090 at an assumed $2,300, drawing 350 W for 8 hours on 250 days, uses 700 kWh, about €245 a year. Ignoring exchange rates, the hardware pays back against off-peak API rates in roughly 7 years and against peak rates in roughly 2.6 years. For sensitive code the comparison is not only about cost: a cloud API sends your code to a third party.',
        ],
        codeBlock: `# Cost calculator: per-token math for coding LLMs (every input is an assumption)
# DeepSeek API, deepseek-flash, off-peak rates in USD per 1M tokens (api-docs.deepseek.com)
input_rate, output_rate = 0.15, 0.60
daily_tokens = 5_000_000              # per developer
blended = (input_rate * 1 + output_rate * 2) / 3   # 1:2 input:output split = $0.45/1M
daily_cost = daily_tokens / 1_000_000 * blended     # $2.25/day
annual_api = daily_cost * 250                       # ~$562/year (peak rates: ~$1,125/year)

# Local Qwen3.6 27B on an RTX 4090 (price is an assumption)
hardware_cost = 2300                  # USD
power_kwh     = 0.350 * 8 * 250       # 350 W, 8 h/day, 250 days = 700 kWh
annual_power  = power_kwh * 0.35      # EUR 0.35/kWh = ~245 per year
# Break-even vs off-peak API: hardware_cost / (annual_api - annual_power) = ~7.3 years
# Break-even vs peak API:     hardware_cost / (1125 - annual_power)       = ~2.6 years`,
        codeLanguage: 'python',
      },
      latency: {
        id: 'latency',
        title: 'Latency Reality',
        content: 'Latency matters for interactive coding: autocomplete feels broken above 500 ms, code review is acceptable up to 3 s, batch jobs are latency-insensitive. PromptQuorum has not measured these models. The table shows one third-party Ollama test on an RTX 4090 (24 GB, Ollama 0.34.4, September 2026), the only published run we found for these models; your speeds will differ with quantization, context length and drivers.',
        rows: [
          { Setup: 'Qwen3.6 27B, RTX 4090 (draft decoding on)', 'Sustained (tok/sec)': '115.4', Notes: 'Mean of five prompts, 256-token output' },
          { Setup: 'Qwen3.6 27B, RTX 4090 (draft decoding off)', 'Sustained (tok/sec)': '48.9', Notes: 'Single-prompt rerun, same setup' },
          { Setup: 'Qwen3-Coder 30B, RTX 4090', 'Sustained (tok/sec)': '224.7', Notes: 'MoE with 3.3B active parameters' },
          { Setup: 'Devstral Small 2', 'Sustained (tok/sec)': 'Not benchmarked', Notes: 'No published run found' },
          { Setup: 'DeepSeek API (deepseek-flash)', 'Sustained (tok/sec)': 'Not benchmarked', Notes: 'Depends on network and peak hours' },
        ],
        columns: ['Setup', 'Sustained (tok/sec)', 'Notes'],
        tableFormat: true,
        note: 'Source: [Ollama Models Cheat Sheet](https://computingforgeeks.com/ollama-models-cheat-sheet/) (third-party test, not by PromptQuorum). According to the article, speculative (draft-token) decoding made Qwen3.6 27B about 2.4× faster in that test without changing output quality. Apple does not publish token speeds for local LLMs. Run ollama run --verbose on your own hardware for a definitive number. For autocomplete, local inference avoids the network round trip.',
        callouts: [
          { type: 'warning', text: 'Ollama\'s default context window (scaled to available VRAM) raises apparent throughput because fewer tokens are processed, but it truncates context. Set num_ctx 32768 for meaningful coding latency measurements.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Requirements',
        items: [
          '**Qwen3.6 27B Q4_K_M** (Ollama `qwen3.6:27b`, 18–19 GB download): a 24 GB GPU (RTX 3090, RTX 4090) or Apple Silicon with 36–48 GB or more of unified memory. A 16 GB card cannot hold the weights.',
          '**Devstral Small 2 24B** (Ollama `devstral-small-2`, 15 GB download): RTX 4070 Ti Super (16 GB, tight once context is added), RTX 3090 or RTX 4090 (24 GB), or Apple Silicon with 24 GB or more of unified memory.',
          '**Codestral 22B Q4_K_M** (13 GB download): RTX 4070 Ti (12 GB marginal, 16 GB recommended).',
          '**Running two models at once**: Qwen3.6 27B (18–19 GB) plus Devstral Small 2 (15 GB) is about 34 GB before context, so it needs two 24 GB GPUs or Apple Silicon with 64 GB or more of unified memory, for example a Mac Studio with M5 Max (up to 128 GB).',
          '**Apple Silicon**: Apple refreshed the Mac mini and Mac Studio lineup on August 25, 2026 (available from September 22, 2026), replacing the M4 Pro/M4 Max configurations. Per Apple, the Mac mini with M5 Pro starts at $1,699 (up to 64 GB unified memory, 307 GB/s), the Mac Studio with M5 Max at $2,499 (up to 128 GB) and the Mac Studio with M5 Ultra at $5,499 (up to 512 GB; the 512 GB configuration ships in late October). A 36–48 GB configuration holds Qwen3.6 27B; 64 GB or more holds Qwen3.6 27B and Devstral Small 2 together. Apple publishes no tokens-per-second figures for local LLMs and PromptQuorum has not benchmarked these chips, so measure with ollama run --verbose. Prices are US dollars; local prices may differ.',
          '**Budget Apple Silicon option**: the entry-level Mac mini with M6 starts at $899 (up to 32 GB unified memory, up to 170 GB/s per Apple) and fits Devstral Small 2 (15 GB) and Codestral 22B (13 GB) comfortably. Qwen3.6 27B (18–19 GB) fits only in the 32 GB configuration, with little room for context. Its memory bandwidth is lower than the M5 Pro\'s (170 versus 307 GB/s), which means slower generation; PromptQuorum has not benchmarked the M6.',
        ],
        codeBlock: `# Ollama config for Qwen3.6 27B with num_ctx and GPU layers
cat > Modelfile-qwen36 <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen36-local -f Modelfile-qwen36
ollama run qwen36-local`,
        codeLanguage: 'bash',
      },
      dispatchStrategy: {
        id: 'dispatch-strategy',
        title: 'Multi-Model Dispatch Strategy',
        image: '/images/qwen-coder-deepseek-mistral-dispatch-hero-en.webp',
        imageCaption: 'Coding task dispatch decision tree: sensitive code routes to local Qwen3.6 27B, interactive autocomplete to local Devstral Small 2, non-sensitive batch tasks to the DeepSeek API ($0.15/1M input tokens off-peak).',
        content: [
          'No single coding model wins every task. Qwen3.6 27B has the strongest local SWE-bench figure here. Devstral Small 2 is a lighter agentic model. A DeepSeek API is the cheapest per token at scale for non-sensitive code. A dispatch layer that routes tasks by type captures the benefits of all three.',
          'A suggested dispatch matrix for a development team:',
        ],
        rows: [
          { 'Task Type': 'Private code (client data)', 'Recommended Model': 'Qwen3.6 27B (local)', Why: 'Code stays on your hardware' },
          { 'Task Type': 'Autocomplete (interactive)', 'Recommended Model': 'Devstral Small 2 (local)', Why: 'Lighter model, no network round trip' },
          { 'Task Type': 'Code review (non-sensitive)', 'Recommended Model': 'DeepSeek API', Why: '$0.15/1M input off-peak, high throughput' },
          { 'Task Type': 'Complex refactoring (multi-file)', 'Recommended Model': 'Qwen3.6 27B (local) + PromptQuorum consensus', Why: 'Strongest local SWE-bench figure, code stays local' },
          { 'Task Type': 'Batch test generation', 'Recommended Model': 'DeepSeek API', Why: 'Cost-optimised for non-sensitive volume' },
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
LOCAL_CODING_MODEL=qwen36-local   # Qwen3.6 27B with num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral-small-2     # Devstral Small 2 24B

# Cloud fallback
DEEPSEEK_API_KEY=your_key_here
DEEPSEEK_MODEL=deepseek-flash

# Routing rules (PromptQuorum dispatch)
# route: task_contains("private") OR task_contains("customer") → qwen36-local (local)
# route: task_type == "autocomplete" → devstral-small-2 (local)
# route: token_count > 50000 → deepseek-flash (cloud, non-sensitive only)
# default → qwen36-local (local)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'PromptQuorum routes coding tasks to local Qwen3.6 for sensitive code and to a DeepSeek API for non-sensitive bulk generation.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2 — Full 2026 Comparison](/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[How to Run Qwen 3 Locally — Ollama + LM Studio Guide](/local-llms/run-qwen-locally-guide-2026)',
          '[Compare Models on PromptQuorum](/compare)',
          '[Best Local LLMs for Coding 2026](/local-llms/best-local-llms-for-coding)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is Qwen3.6 27B better than DeepSeek for local coding?', a: 'Qwen3.6 27B reports 77.2% on SWE-bench Verified and runs fully on your own hardware from an 18–19 GB download, so plan for a 24 GB GPU. DeepSeek V4 Flash reports 78.6% (High mode) but is a 284B-parameter model, so most people use it through the cloud API at $0.15 per 1M input tokens off-peak. The better choice depends on data sensitivity and budget, not on a single winner. Both scores are vendor-reported with different test setups.' },
          { q: 'What is Devstral Small 2 and why is it mentioned here?', a: 'Devstral Small 2 is a 24B model from Mistral AI. The Devstral line targets agentic software-engineering work such as multi-file edits and tool use. Its Ollama listing shows a 15 GB download, a 384K context window, Apache 2.0 licensing and 65.8% on SWE-bench Verified. It is the lighter local option here; Qwen3.6 27B reports the higher SWE-bench figure.' },
          { q: 'Can I run Qwen3.6 27B and Devstral Small 2 at the same time?', a: 'Not on a single 24 GB GPU. Qwen3.6 27B downloads at 18–19 GB and Devstral Small 2 at 15 GB, about 34 GB combined before context. You would need two 24 GB GPUs or Apple Silicon with 64 GB or more of unified memory. On one GPU, run one model at a time and switch with Ollama.' },
          { q: 'Is a DeepSeek API safe for EU company code?', a: 'The DeepSeek API processes data on servers operated by DeepSeek, a company incorporated in China, and the EU Commission has not issued an adequacy decision for China. Sending EU personal data, or source code containing personal information, to it requires a legal assessment under GDPR Chapter V (Articles 44 ff.). For proprietary code without personal data, consult your legal team. Running a local model such as Qwen3.6 27B keeps code on your own hardware, which avoids a third-party transfer; it does not by itself make a project GDPR-compliant. This is general information, not legal advice.' },
          { q: 'What is SWE-bench Verified and why focus on it?', a: 'SWE-bench Verified tests whether a model can resolve real GitHub issues in open-source Python projects such as Django, Flask and scikit-learn, using a human-validated subset of tasks. It measures practical software engineering more than isolated function-level tests such as HumanEval. Scores depend heavily on the agent scaffold, so compare vendor numbers with care.' },
        ],
      },
    },
  },
  de: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2027-04-17',
      theme: 'Best Models',
      title: 'Qwen3.6 vs. DeepSeek vs. Devstral: Vergleich lokaler Coding-Modelle 2026',
      seoTitle: 'Qwen3.6 vs. DeepSeek vs. Devstral: Coding-Modelle 2026',
      intro: 'Qwen3.6 27B erreicht laut Hersteller 77,2 % auf SWE-bench Verified und läuft lokal über Ollama mit einem Download von 18–19 GB. DeepSeek V4 Flash (78,6 % im High-Modus) ist eine Cloud-API ab 0,15 $ pro 1 Mio. Input-Token. Devstral Small 2 (65,8 %) ist ein lokales Modell mit 15 GB. Die Zahlen stammen aus unterschiedlichen Testaufbauten und sind nicht direkt vergleichbar.',
      metaDescription: 'Qwen3.6 27B (77,2 % SWE-bench Verified, lokal), DeepSeek V4 Flash (API ab 0,15 $/1 Mio.) und Devstral Small 2: Kosten, Kontext, Hardware, Lizenzen.',
      heroImage: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-de.webp',
      publishDate: '2026-05-16',
      dateModified: '2026-10-17',
      readTime: '9 min Lesezeit',
      educationalLevel: 'Intermediate',
      audience: 'Softwareentwickler, die ein lokales Coding-LLM für ihren täglichen Entwicklungsworkflow auswählen',
      primaryTerm: 'local coding LLM comparison 2026',
      leadAnswerBlock: '**Qwen3.6 27B ist die stärkste lokale Option in diesem Vergleich: 77,2 % auf SWE-bench Verified (laut Qwen), 256K Kontext, Apache 2.0 und ein Download von 18–19 GB, der eine 24-GB-GPU oder gleichwertigen Unified Memory braucht. DeepSeek V4 Flash gibt 78,6 % im High-Modus an und ist als Cloud-API ab 0,15 $ pro 1 Mio. Input-Token nutzbar, doch seine 284B-Parameter-Gewichte sind Server-Klasse. Devstral Small 2 (65,8 %, 15 GB) ist die leichtere lokale Option. Da die Zahlen aus unterschiedlichen Herstellertests stammen, ist das Ranking nur ein Richtwert. Eine Cloud-API sendet Ihren Code an Dritte; halten Sie sensiblen Code daher auf lokalen Modellen.**',
      toc: [
        { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Warum lokale Coding-Modelle aufgeholt haben', anchor: '#local-caught-up' },
        { label: 'Benchmark-Tabelle', anchor: '#benchmark-table' },
        { label: 'Kosten pro Token', anchor: '#cost-math' },
        { label: 'Latenz in der Praxis', anchor: '#latency' },
        { label: 'Hardware-Anforderungen', anchor: '#hardware' },
        { label: 'Multi-Modell-Dispatch-Strategie', anchor: '#dispatch-strategy' },
        { label: 'PromptQuorum-Integration', anchor: '#promptquorum' },
        { label: 'Weiterführende Artikel', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      comparisonTable: {
        columns: ['Modell', 'SWE-bench Verified', 'Betrieb', 'Kontext', 'Input-Kosten ($/1M)', 'Download (lokal)'],
        rows: [
          { Modell: 'Qwen3.6 27B', 'SWE-bench Verified': '77,2 % (Qwen)', Betrieb: 'Lokal (Ollama)', Kontext: '256K', 'Input-Kosten ($/1M)': '0 $ nach Hardware', 'Download (lokal)': '18–19 GB' },
          { Modell: 'DeepSeek V4 Flash', 'SWE-bench Verified': '78,6 % (High-Modus)', Betrieb: 'Cloud-API', Kontext: '1M', 'Input-Kosten ($/1M)': '0,15–0,30 $', 'Download (lokal)': 'k. A. (MoE 284B)' },
          { Modell: 'Devstral Small 2 24B', 'SWE-bench Verified': '65,8 %', Betrieb: 'Lokal (Ollama)', Kontext: '384K', 'Input-Kosten ($/1M)': '0 $ nach Hardware', 'Download (lokal)': '15 GB' },
          { Modell: 'Codestral 22B', 'SWE-bench Verified': 'Nicht veröffentlicht', Betrieb: 'Lokal (Ollama)', Kontext: '32K', 'Input-Kosten ($/1M)': '0 $ nach Hardware', 'Download (lokal)': '13 GB' },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Qwen3.6 27B ist die stärkste lokale Option**: 77,2 % auf SWE-bench Verified (laut Qwen), 18–19 GB Download, 256K Kontext, Apache 2.0.',
            '**DeepSeek V4 Flash ist die günstige Cloud-Option**: 78,6 % im High-Modus (laut DeepSeek) bei 0,15 $ pro 1 Mio. Input-Token außerhalb der Spitzenzeiten; die 284B-Gewichte sind Server-Klasse.',
            '**Devstral Small 2 ist die leichtere Agenten-Option**: 65,8 % auf SWE-bench Verified bei 15 GB Download und 384K Kontext.',
            '**Alle Zahlen sind Herstellerangaben**: Die Testaufbauten unterscheiden sich, die Werte sind daher Richtwerte und kein kontrollierter Direktvergleich.',
            '**Dispatch-Strategie**: sensiblen Code an lokales Qwen3.6, nicht sensible Massenaufgaben an eine DeepSeek-API, interaktive oder agentische Arbeit an lokales Devstral Small 2.',
          ],
        },
        localCaughtUp: {
          id: 'local-caught-up',
          title: 'Warum lokale Coding-Modelle aufgeholt haben',
          content: [
            'In den ersten Jahren der LLM-Ära lagen Cloud-Modelle beim Coding klar vor lokalen Modellen. Diese Lücke ist 2025–2026 kleiner geworden, als Open-Weight-Modelle im Bereich 24–30B Parameter mit auf Code ausgerichtetem Training erschienen.',
            'Qwen3.6 27B, veröffentlicht im April 2026, gibt 77,2 auf SWE-bench Verified an, einem Benchmark mit echten GitHub-Issues aus Open-Source-Python-Projekten. In derselben Tabelle auf der Model Card nennt Qwen 75,0 für Qwen3.5-27B und 80,9 für Claude 4.5 Opus; das offene Modell liegt in diesem vom Hersteller veröffentlichten Test also nahe an einem führenden Cloud-Modell. Das sind Qwens eigene Ergebnisse mit einem internen Agenten-Aufbau, keine unabhängige Überprüfung.',
            'Häufig genannte Gründe für die Annäherung sind (1) Trainingsdaten mit Fokus auf Code in großem Umfang, (2) Nachtraining auf echten Software-Engineering-Aufgaben statt allgemeinem Befolgen von Anweisungen und (3) bessere GGUF-Quantisierung, die die Coding-Fähigkeit bei Q4-Präzision erhält.',
          ],
          snippetBlocks: [
            { type: 'one-sentence', text: 'Qwen3.6 27B gibt 77,2 % auf SWE-bench Verified an und läuft lokal mit einem Download von 18–19 GB.' },
            { type: 'plain-terms', text: 'SWE-bench Verified prüft, ob eine KI echte GitHub-Issues in Open-Source-Projekten wie Django, Flask und scikit-learn lösen kann. 77,2 % bedeutet: Das Modell löste etwa 77 von 100 Testaufgaben, gemessen mit dem eigenen Agenten-Aufbau des Herstellers.' },
          ],
        },
        benchmarkTable: {
          id: 'benchmark-table',
          title: 'Benchmark-Tabelle',
          image: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-de.webp',
          imageCaption: 'SWE-bench Verified laut Herstellern: Qwen3.6 27B 77,2 %, DeepSeek V4 Flash 78,6 % (High-Modus), Devstral Small 2 65,8 %.',
          content: 'Alle Zahlen sind Herstellerangaben aus Model Cards und Ollama-Einträgen. Die Testaufbauten unterscheiden sich zwischen den Herstellern, daher sind SWE-bench-Werte Richtwerte und kein kontrollierter Direktvergleich. PromptQuorum hat diese Benchmarks nicht erneut ausgeführt.',
          rows: [
            { Benchmark: 'SWE-bench Verified (Herstellerangabe)', 'Qwen3.6 27B': '77,2 %', 'DeepSeek V4 Flash': '78,6 % (High) / 79,0 % (Max)', 'Devstral Small 2': '65,8 %', 'Codestral 22B': 'Nicht veröffentlicht' },
            { Benchmark: 'Parameter (gesamt / aktiv)', 'Qwen3.6 27B': '27B dicht', 'DeepSeek V4 Flash': '284B / 13B aktiv', 'Devstral Small 2': '24B dicht', 'Codestral 22B': '22B dicht' },
            { Benchmark: 'Kontextfenster', 'Qwen3.6 27B': '256K', 'DeepSeek V4 Flash': '1M', 'Devstral Small 2': '384K', 'Codestral 22B': '32K' },
          ],
          columns: ['Benchmark', 'Qwen3.6 27B', 'DeepSeek V4 Flash', 'Devstral Small 2', 'Codestral 22B'],
          tableFormat: true,
          callouts: [
            { type: 'note', text: 'Qwens 77,2 stammt aus Qwens internem Agenten-Aufbau. DeepSeek gibt 73,7 (ohne Denkmodus), 78,6 (High) und 79,0 (Max) an. Die 65,8 von Devstral Small 2 stammen aus dem Ollama-Eintrag. Die Aufbauten unterscheiden sich, die Zahlen sind daher nicht direkt vergleichbar.' },
            { type: 'tip', text: 'Die Modellnamen der DeepSeek-API ändern sich. Prüfen Sie vor dem Einsatz api-docs.deepseek.com/quick_start/pricing (aktuelle Namen: deepseek-flash und deepseek-v4-pro).' },
          ],
        },
        costMath: {
          id: 'cost-math',
          title: 'Kosten pro Token',
          content: [
            'Die Wirtschaftlichkeit von Coding-LLMs hängt von Nutzungsvolumen, Aufgabensensibilität und Hardware ab. Die Rechnung unten gilt für einen Entwickler und beruht auf den genannten Annahmen; sie ist Arithmetik, keine Messung. Strom ist mit 0,35 €/kWh angesetzt, einem typischen deutschen Preis; prüfen Sie Ihren eigenen Tarif.',
            'Bei 5 Mio. Token pro Tag (intensive Sitzung mit Autovervollständigung, Testgenerierung und Code-Review) und einem Input-zu-Output-Verhältnis von 1:2 kostet die DeepSeek-API (deepseek-flash, außerhalb der Spitzenzeiten 0,15 $ Input und 0,60 $ Output pro 1 Mio. Token) etwa 2,25 $ pro Tag, also rund 560 $ über 250 Arbeitstage. Zu Spitzenzeittarifen (0,30 $ Input, 1,20 $ Output) kostet dieselbe Nutzung etwa 4,50 $ pro Tag, rund 1.125 $ pro Jahr.',
            'Ein lokales Setup tauscht das gegen Hardware und Strom. Eine RTX 4090 zu angenommenen 2.300 $, die an 250 Tagen je 8 Stunden 350 W zieht, verbraucht 700 kWh, etwa 245 € pro Jahr. Ohne Wechselkurse amortisiert sich die Hardware gegenüber den API-Tarifen außerhalb der Spitzenzeiten in etwa 7 Jahren und gegenüber den Spitzenzeittarifen in etwa 2,6 Jahren. Bei sensiblem Code geht es nicht nur um Kosten: Eine Cloud-API sendet Ihren Code an Dritte.',
          ],
          codeBlock: `# Cost calculator: per-token math for coding LLMs (every input is an assumption)
# DeepSeek API, deepseek-flash, off-peak rates in USD per 1M tokens (api-docs.deepseek.com)
input_rate, output_rate = 0.15, 0.60
daily_tokens = 5_000_000              # per developer
blended = (input_rate * 1 + output_rate * 2) / 3   # 1:2 input:output split = $0.45/1M
daily_cost = daily_tokens / 1_000_000 * blended     # $2.25/day
annual_api = daily_cost * 250                       # ~$562/year (peak rates: ~$1,125/year)

# Local Qwen3.6 27B on an RTX 4090 (price is an assumption)
hardware_cost = 2300                  # USD
power_kwh     = 0.350 * 8 * 250       # 350 W, 8 h/day, 250 days = 700 kWh
annual_power  = power_kwh * 0.35      # EUR 0.35/kWh = ~245 per year
# Break-even vs off-peak API: hardware_cost / (annual_api - annual_power) = ~7.3 years
# Break-even vs peak API:     hardware_cost / (1125 - annual_power)       = ~2.6 years`,
          codeLanguage: 'python',
        },
        latency: {
          id: 'latency',
          title: 'Latenz in der Praxis',
          content: 'Latenz ist beim interaktiven Coding entscheidend: Autovervollständigung wirkt ab etwa 500 ms kaputt, Code-Review ist bis 3 s akzeptabel, Batch-Jobs sind latenzunempfindlich. PromptQuorum hat diese Modelle nicht gemessen. Die Tabelle zeigt einen Drittanbieter-Test mit Ollama auf einer RTX 4090 (24 GB, Ollama 0.34.4, September 2026), den einzigen veröffentlichten Lauf, den wir für diese Modelle gefunden haben; Ihre Werte weichen je nach Quantisierung, Kontextlänge und Treibern ab.',
          rows: [
            { Setup: 'Qwen3.6 27B, RTX 4090 (Draft-Decoding an)', 'Dauerhaft (Tok/s)': '115,4', Hinweis: 'Mittel aus fünf Prompts, 256 Token Ausgabe' },
            { Setup: 'Qwen3.6 27B, RTX 4090 (Draft-Decoding aus)', 'Dauerhaft (Tok/s)': '48,9', Hinweis: 'Einzelner Prompt, gleicher Aufbau' },
            { Setup: 'Qwen3-Coder 30B, RTX 4090', 'Dauerhaft (Tok/s)': '224,7', Hinweis: 'MoE mit 3,3B aktiven Parametern' },
            { Setup: 'Devstral Small 2', 'Dauerhaft (Tok/s)': 'Nicht gemessen', Hinweis: 'Kein veröffentlichter Lauf gefunden' },
            { Setup: 'DeepSeek-API (deepseek-flash)', 'Dauerhaft (Tok/s)': 'Nicht gemessen', Hinweis: 'Abhängig von Netzwerk und Spitzenzeiten' },
          ],
          columns: ['Setup', 'Dauerhaft (Tok/s)', 'Hinweis'],
          tableFormat: true,
          note: 'Quelle: [Ollama Models Cheat Sheet](https://computingforgeeks.com/ollama-models-cheat-sheet/) (Test eines Drittanbieters, nicht von PromptQuorum). Laut dem Artikel machte spekulatives Decoding (Draft-Token) Qwen3.6 27B in diesem Test etwa 2,4-mal schneller, ohne die Ausgabequalität zu ändern. Apple veröffentlicht keine Token-Geschwindigkeiten für lokale LLMs. Messen Sie mit ollama run --verbose auf Ihrer eigenen Hardware. Bei Autovervollständigung entfällt lokal der Netzwerk-Roundtrip.',
          callouts: [
            { type: 'warning', text: 'Das Standard-Kontextfenster von Ollama (abhängig vom verfügbaren VRAM) erhöht den scheinbaren Durchsatz, weil weniger Token verarbeitet werden, kürzt aber den Kontext. Setzen Sie num_ctx 32768 für aussagekräftige Latenzmessungen beim Coding.' },
          ],
        },
        hardware: {
          id: 'hardware',
          title: 'Hardware-Anforderungen',
          items: [
            '**Qwen3.6 27B Q4_K_M** (Ollama `qwen3.6:27b`, Download 18–19 GB): eine 24-GB-GPU (RTX 3090, RTX 4090) oder Apple Silicon mit 36–48 GB oder mehr Unified Memory. Eine 16-GB-Karte fasst die Gewichte nicht.',
            '**Devstral Small 2 24B** (Ollama `devstral-small-2`, Download 15 GB): RTX 4070 Ti Super (16 GB, mit Kontext knapp), RTX 3090 oder RTX 4090 (24 GB) oder Apple Silicon mit 24 GB oder mehr Unified Memory.',
            '**Codestral 22B Q4_K_M** (Download 13 GB): RTX 4070 Ti (12 GB grenzwertig, 16 GB empfohlen).',
            '**Zwei Modelle gleichzeitig**: Qwen3.6 27B (18–19 GB) plus Devstral Small 2 (15 GB) sind vor dem Kontext etwa 34 GB; nötig sind zwei 24-GB-GPUs oder Apple Silicon mit 64 GB oder mehr Unified Memory, etwa ein Mac Studio mit M5 Max (bis 128 GB).',
            '**Apple Silicon**: Apple hat die Mac-mini- und Mac-Studio-Reihe am 25. August 2026 erneuert (verfügbar ab 22. September 2026) und ersetzt damit die M4-Pro-/M4-Max-Konfigurationen. Laut Apple startet der Mac mini mit M5 Pro bei 1.699 $ (bis 64 GB Unified Memory, 307 GB/s), das Mac Studio mit M5 Max bei 2.499 $ (bis 128 GB) und das Mac Studio mit M5 Ultra bei 5.499 $ (bis 512 GB; die 512-GB-Konfiguration folgt Ende Oktober). Eine Konfiguration mit 36–48 GB nimmt Qwen3.6 27B auf; ab 64 GB passen Qwen3.6 27B und Devstral Small 2 zusammen. Apple veröffentlicht keine Token-pro-Sekunde-Werte für lokale LLMs, und PromptQuorum hat diese Chips nicht gemessen; messen Sie mit ollama run --verbose. Preise in US-Dollar, lokale Preise können abweichen.',
            '**Günstige Apple-Silicon-Option**: Der Einstiegs-Mac-mini mit M6 startet bei 899 $ (bis 32 GB Unified Memory, laut Apple bis 170 GB/s) und fasst Devstral Small 2 (15 GB) und Codestral 22B (13 GB) bequem. Qwen3.6 27B (18–19 GB) passt nur in die 32-GB-Konfiguration und lässt wenig Platz für Kontext. Die Speicherbandbreite liegt unter der des M5 Pro (170 gegenüber 307 GB/s), die Generierung ist also langsamer; PromptQuorum hat den M6 nicht gemessen.',
          ],
          codeBlock: `# Ollama config for Qwen3.6 27B with num_ctx and GPU layers
cat > Modelfile-qwen36 <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen36-local -f Modelfile-qwen36
ollama run qwen36-local`,
          codeLanguage: 'bash',
        },
        dispatchStrategy: {
          id: 'dispatch-strategy',
          title: 'Multi-Modell-Dispatch-Strategie',
          image: '/images/qwen-coder-deepseek-mistral-dispatch-hero-de.webp',
          imageCaption: 'Entscheidungsbaum für das Dispatching von Coding-Aufgaben: sensibler Code an lokales Qwen3.6 27B, interaktive Autovervollständigung an lokales Devstral Small 2, nicht sensible Batch-Aufgaben an die DeepSeek-API (0,15 $/1M Input-Token außerhalb der Spitzenzeiten).',
          content: [
            'Kein Coding-Modell gewinnt jede Aufgabe. Qwen3.6 27B hat hier den stärksten lokalen SWE-bench-Wert. Devstral Small 2 ist ein leichteres Agenten-Modell. Eine DeepSeek-API ist bei nicht sensiblem Code im großen Maßstab pro Token am günstigsten. Eine Dispatch-Schicht, die Aufgaben nach Typ verteilt, nutzt die Vorteile aller drei.',
            'Eine empfohlene Dispatch-Matrix für ein Entwicklungsteam:',
          ],
          rows: [
            { Aufgabentyp: 'Privater Code (Kundendaten)', 'Empfohlenes Modell': 'Qwen3.6 27B (lokal)', Warum: 'Der Code bleibt auf Ihrer Hardware' },
            { Aufgabentyp: 'Autovervollständigung (interaktiv)', 'Empfohlenes Modell': 'Devstral Small 2 (lokal)', Warum: 'Leichteres Modell, kein Netzwerk-Roundtrip' },
            { Aufgabentyp: 'Code-Review (nicht sensibel)', 'Empfohlenes Modell': 'DeepSeek-API', Warum: '0,15 $/1M Input außerhalb der Spitzenzeiten, hoher Durchsatz' },
            { Aufgabentyp: 'Komplexes Refactoring (mehrere Dateien)', 'Empfohlenes Modell': 'Qwen3.6 27B (lokal) + PromptQuorum-Konsens', Warum: 'Stärkster lokaler SWE-bench-Wert, Code bleibt lokal' },
            { Aufgabentyp: 'Batch-Testgenerierung', 'Empfohlenes Modell': 'DeepSeek-API', Warum: 'Kostenoptimiert für nicht sensibles Volumen' },
          ],
          columns: ['Aufgabentyp', 'Empfohlenes Modell', 'Warum'],
          tableFormat: true,
        },
        promptquorum: {
          id: 'promptquorum',
          title: 'PromptQuorum-Integration',
          content: 'PromptQuorum verteilt Coding-Aufgaben anhand von Ihnen definierter Klassifizierungsregeln auf lokales Qwen, lokales Devstral und Cloud-APIs. Das ersetzt manuelles Modellwechseln und setzt die Dispatch-Matrix oben automatisch um.',
          codeBlock: `# PromptQuorum routing config for coding workloads
# Set in your PromptQuorum settings or .env file

# Local models (via Ollama)
LOCAL_OLLAMA_URL=http://localhost:11434/v1
LOCAL_CODING_MODEL=qwen36-local   # Qwen3.6 27B with num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral-small-2     # Devstral Small 2 24B

# Cloud fallback
DEEPSEEK_API_KEY=your_key_here
DEEPSEEK_MODEL=deepseek-flash

# Routing rules (PromptQuorum dispatch)
# route: task_contains("private") OR task_contains("customer") → qwen36-local (local)
# route: task_type == "autocomplete" → devstral-small-2 (local)
# route: token_count > 50000 → deepseek-flash (cloud, non-sensitive only)
# default → qwen36-local (local)`,
          codeLanguage: 'bash',
          snippetBlocks: [
            { type: 'one-sentence', text: 'PromptQuorum leitet Coding-Aufgaben für sensiblen Code an lokales Qwen3.6 und für nicht sensible Massengenerierung an eine DeepSeek-API.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Artikel',
          items: [
            '[Qwen 3 vs. Claude Sonnet 5 vs. DeepSeek R2 — Vollständiger Vergleich 2026](/de/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
            '[Qwen 3 lokal ausführen — Ollama- und LM-Studio-Anleitung](/de/local-llms/run-qwen-locally-guide-2026)',
            '[Modelle auf PromptQuorum vergleichen](/de/compare)',
            '[Beste lokale LLMs fürs Coding 2026](/de/local-llms/best-local-llms-for-coding)',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Ist Qwen3.6 27B besser als DeepSeek für lokales Coding?', a: 'Qwen3.6 27B gibt 77,2 % auf SWE-bench Verified an und läuft vollständig auf Ihrer eigenen Hardware mit 18–19 GB Download; planen Sie eine 24-GB-GPU ein. DeepSeek V4 Flash gibt 78,6 % (High-Modus) an, ist aber ein Modell mit 284B Parametern und wird meist über die Cloud-API für 0,15 $ pro 1 Mio. Input-Token (außerhalb der Spitzenzeiten) genutzt. Die bessere Wahl hängt von Datensensibilität und Budget ab, nicht von einem einzelnen Gewinner. Beide Werte sind Herstellerangaben mit unterschiedlichen Testaufbauten.' },
            { q: 'Was ist Devstral Small 2 und warum wird es hier erwähnt?', a: 'Devstral Small 2 ist ein 24B-Modell von Mistral AI. Die Devstral-Reihe zielt auf agentische Softwareentwicklung wie Multi-Datei-Änderungen und Tool-Einsatz. Der Ollama-Eintrag zeigt 15 GB Download, 384K Kontextfenster, Apache-2.0-Lizenz und 65,8 % auf SWE-bench Verified. Es ist hier die leichtere lokale Option; Qwen3.6 27B gibt den höheren SWE-bench-Wert an.' },
            { q: 'Kann ich Qwen3.6 27B und Devstral Small 2 gleichzeitig ausführen?', a: 'Nicht auf einer einzelnen 24-GB-GPU. Qwen3.6 27B hat 18–19 GB Download, Devstral Small 2 15 GB, zusammen etwa 34 GB vor dem Kontext. Nötig wären zwei 24-GB-GPUs oder Apple Silicon mit 64 GB oder mehr Unified Memory. Auf einer GPU führen Sie jeweils ein Modell aus und wechseln über Ollama.' },
            { q: 'Ist eine DeepSeek-API sicher für EU-Unternehmenscode?', a: 'Die DeepSeek-API verarbeitet Daten auf Servern von DeepSeek, einem in China eingetragenen Unternehmen, und die EU-Kommission hat für China keinen Angemessenheitsbeschluss erlassen. Werden personenbezogene EU-Daten oder Quellcode mit personenbezogenen Informationen dorthin gesendet, ist eine rechtliche Prüfung nach DSGVO Kapitel V (Art. 44 ff.) nötig. Für proprietären Code ohne personenbezogene Daten konsultieren Sie Ihr Rechtsteam. Ein lokales Modell wie Qwen3.6 27B hält den Code auf Ihrer eigenen Hardware und vermeidet so eine Übermittlung an Dritte; es macht ein Projekt aber nicht automatisch DSGVO-konform. Dies ist eine allgemeine Information, keine Rechtsberatung.' },
            { q: 'Was ist SWE-bench Verified und warum liegt der Fokus darauf?', a: 'SWE-bench Verified testet anhand einer von Menschen geprüften Aufgabenauswahl, ob ein Modell echte GitHub-Issues in Open-Source-Python-Projekten wie Django, Flask und scikit-learn lösen kann. Es misst praktische Softwareentwicklung stärker als isolierte Funktionstests wie HumanEval. Die Werte hängen stark vom Agenten-Aufbau ab; vergleichen Sie Herstellerzahlen daher mit Vorsicht.' },
          ],
        },
      },
    },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Best Models',
    title: 'Qwen3.6 vs DeepSeek vs Devstral : comparatif des modèles de code locaux 2026',
    seoTitle: 'Qwen3.6 vs DeepSeek vs Devstral : modèles de code 2026',
    intro: 'Qwen3.6 27B annonce 77,2 % sur SWE-bench Verified et tourne en local via Ollama avec un téléchargement de 18–19 Go. DeepSeek V4 Flash annonce 78,6 % en mode High et s\'utilise comme API cloud à partir de 0,15 $ par million de tokens d\'entrée. Devstral Small 2 annonce 65,8 % dans un modèle local de 15 Go. Ce comparatif couvre les chiffres SWE-bench, le contexte, les licences, le coût par token, la configuration matérielle et une stratégie de dispatch multi-modèles. Tous les chiffres viennent des pages des éditeurs et reposent sur des protocoles de test différents : ils ne sont pas directement comparables.',
    metaDescription: 'Qwen3.6 27B (77,2 % SWE-bench Verified, local), DeepSeek V4 Flash (API dès 0,15 $/1M) et Devstral Small 2 comparés : coût, contexte, matériel, licences.',
    heroImage: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-fr.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-10-17',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Développeurs logiciel choisissant un LLM de code local pour leurs workflows de développement quotidien',
    primaryTerm: 'local coding LLM benchmark 2026',
    leadAnswerBlock: '**Qwen3.6 27B est la meilleure option locale de ce comparatif : 77,2 % sur SWE-bench Verified (chiffre Qwen), contexte de 256K, Apache 2.0, et un téléchargement de 18–19 Go qui demande un GPU de 24 Go ou une mémoire unifiée équivalente. DeepSeek V4 Flash annonce 78,6 % en mode High comme API cloud à partir de 0,15 $ par million de tokens d\'entrée, mais ses poids de 284 milliards de paramètres sont de classe serveur. Devstral Small 2 (65,8 %, 15 Go) est l\'option locale plus légère. Comme les chiffres viennent de protocoles différents, considérez le classement comme indicatif. Une API cloud envoie votre code à un tiers : gardez le code sensible sur des modèles locaux.**',
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
      columns: ['Modèle', 'SWE-bench Verified', 'Déploiement', 'Contexte', 'Coût entrée ($/1M)', 'Téléchargement (local)'],
      rows: [
        { 'Modèle': 'Qwen3.6 27B', 'SWE-bench Verified': '77,2 % (Qwen)', 'Déploiement': 'Local (Ollama)', Contexte: '256K', 'Coût entrée ($/1M)': '0 $ après achat', 'Téléchargement (local)': '18–19 Go' },
        { 'Modèle': 'DeepSeek V4 Flash', 'SWE-bench Verified': '78,6 % (mode High)', 'Déploiement': 'API cloud', Contexte: '1M', 'Coût entrée ($/1M)': '0,15–0,30 $', 'Téléchargement (local)': 'N/A (MoE 284B)' },
        { 'Modèle': 'Devstral Small 2 24B', 'SWE-bench Verified': '65,8 %', 'Déploiement': 'Local (Ollama)', Contexte: '384K', 'Coût entrée ($/1M)': '0 $ après achat', 'Téléchargement (local)': '15 Go' },
        { 'Modèle': 'Codestral 22B', 'SWE-bench Verified': 'Non publié', 'Déploiement': 'Local (Ollama)', Contexte: '32K', 'Coût entrée ($/1M)': '0 $ après achat', 'Téléchargement (local)': '13 Go' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen3.6 27B est la meilleure option locale** : 77,2 % sur SWE-bench Verified (chiffre Qwen), téléchargement de 18–19 Go, contexte 256K, Apache 2.0.',
          '**DeepSeek V4 Flash est l\'option cloud économique** : 78,6 % en mode High (chiffre DeepSeek) à 0,15 $ par million de tokens d\'entrée hors pointe ; ses poids de 284B sont de classe serveur.',
          '**Devstral Small 2 est l\'option agentique plus légère** : 65,8 % sur SWE-bench Verified pour 15 Go de téléchargement et 384K de contexte.',
          '**Tous les chiffres sont ceux des éditeurs** : les protocoles diffèrent, les scores sont donc indicatifs et non un duel contrôlé.',
          '**Stratégie de dispatch** : code sensible vers Qwen3.6 local, tâches non sensibles à volume vers une API DeepSeek, travail interactif ou agentique vers Devstral Small 2 local.',
        ],
      },
      localCaughtUp: {
        id: 'local-caught-up',
        title: 'Pourquoi les modèles de code locaux ont rattrapé leur retard',
        content: [
          'Pendant les premières années de l\'ère LLM, les modèles cloud devançaient nettement les modèles locaux en programmation. Cet écart s\'est réduit en 2025–2026 lorsque des modèles open-weight de 24–30 milliards de paramètres ont reçu un entraînement centré sur le code.',
          'Qwen3.6 27B, publié en avril 2026, annonce 77,2 sur SWE-bench Verified, un benchmark de vraies issues GitHub de projets Python open source. Dans le même tableau de sa model card, Qwen indique 75,0 pour Qwen3.5-27B et 80,9 pour Claude 4.5 Opus : le modèle ouvert se situe donc près d\'un modèle cloud de pointe sur ce test publié par l\'éditeur. Ce sont les résultats propres de Qwen, obtenus avec un dispositif d\'agent interne, pas une vérification indépendante.',
          'Les raisons le plus souvent citées de cette convergence sont (1) des données d\'entraînement centrées sur le code à grande échelle, (2) un post-entraînement sur de vraies tâches d\'ingénierie logicielle plutôt que sur du suivi d\'instructions générique, et (3) une meilleure quantisation GGUF qui préserve la capacité de codage en précision Q4.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.6 27B annonce 77,2 % sur SWE-bench Verified et tourne en local avec un téléchargement de 18–19 Go.' },
          { type: 'plain-terms', text: 'SWE-bench Verified teste si une IA peut résoudre de vraies issues GitHub de projets open source comme Django, Flask et scikit-learn. Un score de 77,2 % signifie que le modèle a résolu environ 77 tâches de test sur 100, mesuré avec le dispositif d\'agent de l\'éditeur.' },
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Tableau de benchmarks',
        image: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-fr.webp',
        imageCaption: 'SWE-bench Verified selon chaque éditeur : Qwen3.6 27B 77,2 %, DeepSeek V4 Flash 78,6 % (mode High), Devstral Small 2 65,8 %.',
        content: 'Tous les chiffres sont ceux des éditeurs, tirés des model cards et des fiches Ollama. Les protocoles de test diffèrent d\'un éditeur à l\'autre : considérez les scores SWE-bench comme indicatifs, pas comme un duel contrôlé. PromptQuorum n\'a pas relancé ces benchmarks.',
        rows: [
          { Benchmark: 'SWE-bench Verified (chiffre éditeur)', 'Qwen3.6 27B': '77,2 %', 'DeepSeek V4 Flash': '78,6 % (High) / 79,0 % (Max)', 'Devstral Small 2': '65,8 %', 'Codestral 22B': 'Non publié' },
          { Benchmark: 'Paramètres (total / actifs)', 'Qwen3.6 27B': '27B dense', 'DeepSeek V4 Flash': '284B / 13B actifs', 'Devstral Small 2': '24B dense', 'Codestral 22B': '22B dense' },
          { Benchmark: 'Fenêtre de contexte', 'Qwen3.6 27B': '256K', 'DeepSeek V4 Flash': '1M', 'Devstral Small 2': '384K', 'Codestral 22B': '32K' },
        ],
        columns: ['Benchmark', 'Qwen3.6 27B', 'DeepSeek V4 Flash', 'Devstral Small 2', 'Codestral 22B'],
        tableFormat: true,
        callouts: [
          { type: 'note', text: 'Le 77,2 de Qwen vient du dispositif d\'agent interne de Qwen. DeepSeek annonce 73,7 (sans réflexion), 78,6 (High) et 79,0 (Max). Le 65,8 de Devstral Small 2 vient de sa fiche Ollama. Les dispositifs diffèrent : les chiffres ne sont pas directement comparables.' },
          { type: 'tip', text: 'Les noms de modèles de l\'API DeepSeek changent. Vérifiez api-docs.deepseek.com/quick_start/pricing avant le déploiement (noms actuels : deepseek-flash et deepseek-v4-pro).' },
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'Coût par token',
        content: [
          'L\'économie des LLM de code dépend du volume d\'utilisation, de la sensibilité des tâches et du matériel. La projection ci-dessous concerne un développeur et repose sur les hypothèses indiquées : c\'est de l\'arithmétique, pas une mesure. L\'électricité est comptée à 0,35 €/kWh, un tarif allemand typique ; vérifiez votre propre tarif.',
          'À 5 millions de tokens par jour (session intensive d\'autocomplétion, de génération de tests et de revue de code) avec un ratio entrée/sortie de 1:2, l\'API DeepSeek (deepseek-flash, 0,15 $ en entrée et 0,60 $ en sortie par million de tokens hors pointe) coûte environ 2,25 $ par jour, soit environ 560 $ sur 250 jours ouvrés. Aux tarifs de pointe (0,30 $ en entrée, 1,20 $ en sortie), le même usage coûte environ 4,50 $ par jour, soit environ 1 125 $ par an.',
          'Une configuration locale échange cela contre du matériel et de l\'électricité. Une RTX 4090 à 2 300 $ (hypothèse), consommant 350 W pendant 8 heures sur 250 jours, utilise 700 kWh, soit environ 245 € par an. Sans tenir compte des taux de change, le matériel est amorti en environ 7 ans face aux tarifs hors pointe de l\'API et en environ 2,6 ans face aux tarifs de pointe. Pour du code sensible, la comparaison ne porte pas que sur le coût : une API cloud envoie votre code à un tiers.',
        ],
        codeBlock: `# Cost calculator: per-token math for coding LLMs (every input is an assumption)
# DeepSeek API, deepseek-flash, off-peak rates in USD per 1M tokens (api-docs.deepseek.com)
input_rate, output_rate = 0.15, 0.60
daily_tokens = 5_000_000              # per developer
blended = (input_rate * 1 + output_rate * 2) / 3   # 1:2 input:output split = $0.45/1M
daily_cost = daily_tokens / 1_000_000 * blended     # $2.25/day
annual_api = daily_cost * 250                       # ~$562/year (peak rates: ~$1,125/year)

# Local Qwen3.6 27B on an RTX 4090 (price is an assumption)
hardware_cost = 2300                  # USD
power_kwh     = 0.350 * 8 * 250       # 350 W, 8 h/day, 250 days = 700 kWh
annual_power  = power_kwh * 0.35      # EUR 0.35/kWh = ~245 per year
# Break-even vs off-peak API: hardware_cost / (annual_api - annual_power) = ~7.3 years
# Break-even vs peak API:     hardware_cost / (1125 - annual_power)       = ~2.6 years`,
        codeLanguage: 'python',
      },
      latency: {
        id: 'latency',
        title: 'Réalité de la latence',
        content: 'La latence compte pour le codage interactif : l\'autocomplétion devient inutilisable au-delà de 500 ms, la revue de code est acceptable jusqu\'à 3 s, les traitements par lots sont insensibles à la latence. PromptQuorum n\'a pas mesuré ces modèles. Le tableau montre un test tiers sous Ollama sur une RTX 4090 (24 Go, Ollama 0.34.4, septembre 2026), la seule mesure publiée que nous ayons trouvée pour ces modèles ; vos vitesses varieront selon la quantisation, la longueur de contexte et les pilotes.',
        rows: [
          { Configuration: 'Qwen3.6 27B, RTX 4090 (draft decoding activé)', 'Soutenu (tok/s)': '115,4', Remarques: 'Moyenne de cinq prompts, 256 tokens en sortie' },
          { Configuration: 'Qwen3.6 27B, RTX 4090 (draft decoding désactivé)', 'Soutenu (tok/s)': '48,9', Remarques: 'Un seul prompt, même configuration' },
          { Configuration: 'Qwen3-Coder 30B, RTX 4090', 'Soutenu (tok/s)': '224,7', Remarques: 'MoE avec 3,3B de paramètres actifs' },
          { Configuration: 'Devstral Small 2', 'Soutenu (tok/s)': 'Non mesuré', Remarques: 'Aucune mesure publiée trouvée' },
          { Configuration: 'API DeepSeek (deepseek-flash)', 'Soutenu (tok/s)': 'Non mesuré', Remarques: 'Dépend du réseau et des heures de pointe' },
        ],
        columns: ['Configuration', 'Soutenu (tok/s)', 'Remarques'],
        tableFormat: true,
        note: 'Source : [Ollama Models Cheat Sheet](https://computingforgeeks.com/ollama-models-cheat-sheet/) (test tiers, pas de PromptQuorum). Selon l\'article, le décodage spéculatif (draft tokens) a rendu Qwen3.6 27B environ 2,4 fois plus rapide dans ce test sans changer la qualité de sortie. Apple ne publie pas de vitesses en tokens pour les LLM locaux. Lancez ollama run --verbose sur votre propre matériel pour un chiffre fiable. Pour l\'autocomplétion, l\'inférence locale évite l\'aller-retour réseau.',
        callouts: [
          { type: 'warning', text: 'La fenêtre de contexte par défaut d\'Ollama (ajustée à la VRAM disponible) augmente le débit apparent car moins de tokens sont traités, mais tronque le contexte. Définissez num_ctx 32768 pour des mesures de latence de codage pertinentes.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Configuration matérielle requise',
        items: [
          '**Qwen3.6 27B Q4_K_M** (Ollama `qwen3.6:27b`, téléchargement de 18–19 Go) : un GPU de 24 Go (RTX 3090, RTX 4090) ou un Apple Silicon avec 36–48 Go ou plus de mémoire unifiée. Une carte de 16 Go ne peut pas contenir les poids.',
          '**Devstral Small 2 24B** (Ollama `devstral-small-2`, téléchargement de 15 Go) : RTX 4070 Ti Super (16 Go, juste une fois le contexte ajouté), RTX 3090 ou RTX 4090 (24 Go), ou Apple Silicon avec 24 Go ou plus de mémoire unifiée.',
          '**Codestral 22B Q4_K_M** (téléchargement de 13 Go) : RTX 4070 Ti (12 Go en limite, 16 Go recommandé).',
          '**Faire tourner deux modèles en même temps** : Qwen3.6 27B (18–19 Go) plus Devstral Small 2 (15 Go) représentent environ 34 Go avant le contexte : il faut deux GPU de 24 Go ou un Apple Silicon avec 64 Go ou plus de mémoire unifiée, par exemple un Mac Studio M5 Max (jusqu\'à 128 Go).',
          '**Apple Silicon** : Apple a renouvelé la gamme Mac mini et Mac Studio le 25 août 2026 (disponible à partir du 22 septembre 2026), remplaçant les configurations M4 Pro/M4 Max. Selon Apple, le Mac mini M5 Pro démarre à 1 699 $ (jusqu\'à 64 Go de mémoire unifiée, 307 Go/s), le Mac Studio M5 Max à 2 499 $ (jusqu\'à 128 Go) et le Mac Studio M5 Ultra à 5 499 $ (jusqu\'à 512 Go ; la configuration 512 Go est livrée fin octobre). Une configuration de 36–48 Go accueille Qwen3.6 27B ; à partir de 64 Go, Qwen3.6 27B et Devstral Small 2 tiennent ensemble. Apple ne publie aucune vitesse en tokens par seconde pour les LLM locaux et PromptQuorum n\'a pas testé ces puces : mesurez avec ollama run --verbose. Prix en dollars US ; les tarifs locaux peuvent différer.',
          '**Option Apple Silicon économique** : le Mac mini M6 d\'entrée de gamme démarre à 899 $ (jusqu\'à 32 Go de mémoire unifiée, jusqu\'à 170 Go/s selon Apple) et accueille confortablement Devstral Small 2 (15 Go) et Codestral 22B (13 Go). Qwen3.6 27B (18–19 Go) ne tient que dans la configuration de 32 Go, avec peu de marge pour le contexte. Sa bande passante mémoire est inférieure à celle du M5 Pro (170 contre 307 Go/s), donc la génération est plus lente ; PromptQuorum n\'a pas testé le M6.',
        ],
        codeBlock: `# Ollama config for Qwen3.6 27B with num_ctx and GPU layers
cat > Modelfile-qwen36 <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen36-local -f Modelfile-qwen36
ollama run qwen36-local`,
        codeLanguage: 'bash',
      },
      dispatchStrategy: {
        id: 'dispatch-strategy',
        title: 'Stratégie de dispatch multi-modèles',
        image: '/images/qwen-coder-deepseek-mistral-dispatch-hero-fr.webp',
        imageCaption: 'Arbre de décision pour le dispatch des tâches de code : le code sensible va vers Qwen3.6 27B local, l\'autocomplétion interactive vers Devstral Small 2 local, les tâches par lots non sensibles vers l\'API DeepSeek (0,15 $/1M tokens d\'entrée hors pointe).',
        content: [
          'Aucun modèle de code ne remporte toutes les tâches. Qwen3.6 27B affiche le meilleur chiffre SWE-bench local ici. Devstral Small 2 est un modèle agentique plus léger. Une API DeepSeek est la moins chère par token à grande échelle pour le code non sensible. Une couche de dispatch qui route les tâches par type capte les avantages des trois.',
          'Matrice de dispatch suggérée pour une équipe de développement :',
        ],
        rows: [
          { 'Type de tâche': 'Code privé (données clients)', 'Modèle recommandé': 'Qwen3.6 27B (local)', Raison: 'Le code reste sur votre matériel' },
          { 'Type de tâche': 'Autocomplétion (interactive)', 'Modèle recommandé': 'Devstral Small 2 (local)', Raison: 'Modèle plus léger, pas d\'aller-retour réseau' },
          { 'Type de tâche': 'Revue de code (non sensible)', 'Modèle recommandé': 'API DeepSeek', Raison: '0,15 $/1M en entrée hors pointe, haut débit' },
          { 'Type de tâche': 'Refactoring complexe (multi-fichiers)', 'Modèle recommandé': 'Qwen3.6 27B (local) + consensus PromptQuorum', Raison: 'Meilleur chiffre SWE-bench local, code local' },
          { 'Type de tâche': 'Génération de tests par lots', 'Modèle recommandé': 'API DeepSeek', Raison: 'Optimisé en coût pour le volume non sensible' },
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
LOCAL_CODING_MODEL=qwen36-local   # Qwen3.6 27B with num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral-small-2     # Devstral Small 2 24B

# Cloud fallback
DEEPSEEK_API_KEY=your_key_here
DEEPSEEK_MODEL=deepseek-flash

# Routing rules (PromptQuorum dispatch)
# route: task_contains("private") OR task_contains("customer") → qwen36-local (local)
# route: task_type == "autocomplete" → devstral-small-2 (local)
# route: token_count > 50000 → deepseek-flash (cloud, non-sensitive only)
# default → qwen36-local (local)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'PromptQuorum route les tâches de code vers Qwen3.6 local pour le code sensible et vers une API DeepSeek pour la génération en volume non sensible.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2 — Comparaison complète 2026](/fr/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[Comment faire tourner Qwen 3 en local — Guide Ollama + LM Studio](/fr/local-llms/run-qwen-locally-guide-2026)',
          '[Comparer les modèles sur PromptQuorum](/fr/compare)',
          '[Meilleurs LLM locaux pour le code en 2026](/fr/local-llms/best-local-llms-for-coding)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Qwen3.6 27B est-il meilleur que DeepSeek pour le code local ?', a: 'Qwen3.6 27B annonce 77,2 % sur SWE-bench Verified et tourne entièrement sur votre matériel avec un téléchargement de 18–19 Go : prévoyez un GPU de 24 Go. DeepSeek V4 Flash annonce 78,6 % (mode High) mais compte 284 milliards de paramètres ; on l\'utilise donc surtout via l\'API cloud à 0,15 $ par million de tokens d\'entrée hors pointe. Le bon choix dépend de la sensibilité de vos données et de votre budget, pas d\'un gagnant unique. Les deux scores sont ceux des éditeurs, avec des protocoles différents.' },
          { q: 'Qu\'est-ce que Devstral Small 2 et pourquoi est-il mentionné ici ?', a: 'Devstral Small 2 est un modèle de 24B de Mistral AI. La gamme Devstral vise l\'ingénierie logicielle agentique, comme les modifications multi-fichiers et l\'utilisation d\'outils. Sa fiche Ollama indique 15 Go de téléchargement, 384K de contexte, la licence Apache 2.0 et 65,8 % sur SWE-bench Verified. C\'est l\'option locale plus légère ici ; Qwen3.6 27B annonce le meilleur chiffre SWE-bench.' },
          { q: 'Peut-on faire tourner Qwen3.6 27B et Devstral Small 2 simultanément ?', a: 'Pas sur un seul GPU de 24 Go. Qwen3.6 27B pèse 18–19 Go et Devstral Small 2 15 Go, soit environ 34 Go avant le contexte. Il faudrait deux GPU de 24 Go ou un Apple Silicon avec 64 Go ou plus de mémoire unifiée. Sur un seul GPU, utilisez un modèle à la fois et basculez via Ollama.' },
          { q: 'Une API DeepSeek est-elle sûre pour le code d\'une entreprise européenne ?', a: 'L\'API DeepSeek traite les données sur des serveurs exploités par DeepSeek, société immatriculée en Chine, et la Commission européenne n\'a pas émis de décision d\'adéquation pour la Chine. Lui envoyer des données personnelles européennes, ou du code source contenant des informations personnelles, exige une analyse juridique au titre du chapitre V du RGPD (articles 44 et suivants). Pour du code propriétaire sans données personnelles, consultez votre service juridique. Un modèle local comme Qwen3.6 27B garde le code sur votre propre matériel et évite un transfert à un tiers ; cela ne rend pas à lui seul un projet conforme au RGPD. Ces informations sont générales et ne constituent pas un conseil juridique.' },
          { q: 'Qu\'est-ce que SWE-bench Verified et pourquoi s\'y concentrer ?', a: 'SWE-bench Verified teste, sur une sélection de tâches validées par des humains, si un modèle peut résoudre de vraies issues GitHub de projets Python open source comme Django, Flask et scikit-learn. Il mesure l\'ingénierie logicielle pratique mieux que des tests isolés au niveau de la fonction comme HumanEval. Les scores dépendent fortement du dispositif d\'agent : comparez les chiffres des éditeurs avec prudence.' },
        ],
      },
    },
  },
  ja: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2027-04-17',
      theme: 'Best Models',
      title: 'Qwen3.6 vs DeepSeek vs Devstral：ローカルコーディングモデル比較 2026',
      seoTitle: 'Qwen3.6 vs DeepSeek vs Devstral：コーディングモデル 2026',
      intro: 'Qwen3.6 27BはSWE-bench Verifiedで77.2%と公表され、18～19 GBのダウンロードでOllama上でローカル実行できます。DeepSeek V4 FlashはHighモードで78.6%と公表され、入力100万トークンあたり$0.15からのクラウドAPIです。Devstral Small 2は15 GBのローカルモデルで65.8%と公表されています。数値は各ベンダーの異なるテスト環境によるもので、直接比較はできません。',
      metaDescription: 'Qwen3.6 27B（SWE-bench Verified 77.2%）、DeepSeek V4 Flash（API $0.15/1M〜）、Devstral Small 2を比較：コスト、コンテキスト、ライセンス。',
      heroImage: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-ja.webp',
      publishDate: '2026-05-16',
      dateModified: '2026-10-17',
      readTime: '9分で読めます',
      educationalLevel: 'Intermediate',
      audience: '日常の開発ワークフロー向けにローカルのコーディングLLMを選ぶソフトウェア開発者',
      primaryTerm: 'local coding LLM comparison 2026',
      leadAnswerBlock: '**Qwen3.6 27Bはこの比較で最も強力なローカル選択肢です。SWE-bench Verified 77.2%（Qwen公表）、256Kコンテキスト、Apache 2.0で、18～19 GBのダウンロードには24 GBのGPUまたは同等のユニファイドメモリが必要です。DeepSeek V4 FlashはHighモードで78.6%と公表され、入力100万トークンあたり$0.15からのクラウドAPIですが、284Bパラメータの重みはサーバー級です。Devstral Small 2（65.8%、15 GB）はより軽量なローカル選択肢です。数値は各ベンダーの異なるテスト環境によるものなので、順位は参考として扱ってください。クラウドAPIはコードを第三者に送信するため、機密コードはローカルモデルに留めてください。**',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: 'ローカルのコーディングモデルが追いついた理由', anchor: '#local-caught-up' },
        { label: 'ベンチマーク表', anchor: '#benchmark-table' },
        { label: 'トークン単価の計算', anchor: '#cost-math' },
        { label: 'レイテンシの実際', anchor: '#latency' },
        { label: 'ハードウェア要件', anchor: '#hardware' },
        { label: 'マルチモデル ディスパッチ戦略', anchor: '#dispatch-strategy' },
        { label: 'PromptQuorum連携', anchor: '#promptquorum' },
        { label: '関連記事', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      comparisonTable: {
        columns: ['モデル', 'SWE-bench Verified', '提供形態', 'コンテキスト', '入力コスト ($/1M)', 'ダウンロード（ローカル）'],
        rows: [
          { 'モデル': 'Qwen3.6 27B', 'SWE-bench Verified': '77.2%（Qwen）', '提供形態': 'ローカル（Ollama）', 'コンテキスト': '256K', '入力コスト ($/1M)': 'ハードウェア後 $0', 'ダウンロード（ローカル）': '18～19 GB' },
          { 'モデル': 'DeepSeek V4 Flash', 'SWE-bench Verified': '78.6%（Highモード）', '提供形態': 'クラウドAPI', 'コンテキスト': '1M', '入力コスト ($/1M)': '$0.15～0.30', 'ダウンロード（ローカル）': '該当なし（MoE 284B）' },
          { 'モデル': 'Devstral Small 2 24B', 'SWE-bench Verified': '65.8%', '提供形態': 'ローカル（Ollama）', 'コンテキスト': '384K', '入力コスト ($/1M)': 'ハードウェア後 $0', 'ダウンロード（ローカル）': '15 GB' },
          { 'モデル': 'Codestral 22B', 'SWE-bench Verified': '未公開', '提供形態': 'ローカル（Ollama）', 'コンテキスト': '32K', '入力コスト ($/1M)': 'ハードウェア後 $0', 'ダウンロード（ローカル）': '13 GB' },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Qwen3.6 27Bが最も強力なローカル選択肢：SWE-bench Verified 77.2%（Qwen公表）、18～19 GBのダウンロード、256Kコンテキスト、Apache 2.0。',
            'DeepSeek V4 Flashはクラウドの低コスト選択肢：Highモード78.6%（DeepSeek公表）、オフピーク時は入力100万トークンあたり$0.15。284Bの重みはサーバー級。',
            'Devstral Small 2はより軽量なエージェント型の選択肢：15 GBのダウンロードと384KコンテキストでSWE-bench Verified 65.8%。',
            'すべての数値はベンダー公表値：テスト環境が異なるため、統制された直接比較ではなく参考値です。',
            'ディスパッチ戦略：機密コード → ローカルQwen3.6、機密でない大量処理 → DeepSeek API、対話型・エージェント型作業 → ローカルDevstral Small 2。',
          ],
        },
        localCaughtUp: {
          id: 'local-caught-up',
          title: 'ローカルのコーディングモデルが追いついた理由',
          content: [
            'LLM時代の初期の数年間、コーディングではクラウドモデルがローカルモデルを明確に上回っていました。その差は、コード重視の学習を受けた24～30B規模のオープンウェイトモデルが登場した2025～2026年に縮まりました。',
            '2026年4月に公開されたQwen3.6 27Bは、オープンソースPythonプロジェクトの実際のGitHub issueで構成されるベンチマークSWE-bench Verifiedで77.2を公表しています。同じモデルカードの表でQwenはQwen3.5-27Bを75.0、Claude 4.5 Opusを80.9としているため、このベンダー公表のテストでは、オープンモデルが先頭のクラウドモデルに近い位置にあります。これはQwen自身が内部のエージェント環境で得た結果であり、第三者による検証ではありません。',
            'この収束の理由として、よく挙げられるのは（1）大規模なコード重視の学習データ、（2）一般的な指示追従ではなく実際のソフトウェアエンジニアリング課題での追加学習、（3）Q4精度でもコーディング能力を保つ改良されたGGUF量子化です。',
          ],
          snippetBlocks: [
            { type: 'one-sentence', text: 'Qwen3.6 27BはSWE-bench Verifiedで77.2%と公表され、18～19 GBのダウンロードでローカル実行できます。' },
            { type: 'plain-terms', text: 'SWE-bench Verifiedは、AIがDjango、Flask、scikit-learnなど実在のオープンソースプロジェクトのGitHub issueを解決できるかを測ります。77.2%は、ベンダー独自のエージェント環境で測定した場合、テスト課題100件のうち約77件を解決したという意味です。' },
          ],
        },
        benchmarkTable: {
          id: 'benchmark-table',
          title: 'ベンチマーク表',
          image: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-ja.webp',
          imageCaption: '各ベンダー公表のSWE-bench Verified：Qwen3.6 27B 77.2%、DeepSeek V4 Flash 78.6%（Highモード）、Devstral Small 2 65.8%。',
          content: 'すべての数値は、モデルカードとOllamaのページに基づくベンダー公表値です。テスト環境はベンダーごとに異なるため、SWE-benchの数値は統制された直接比較ではなく参考値として扱ってください。PromptQuorumはこれらのベンチマークを再実行していません。',
          rows: [
            { 'ベンチマーク': 'SWE-bench Verified（ベンダー公表）', 'Qwen3.6 27B': '77.2%', 'DeepSeek V4 Flash': '78.6%（High）/ 79.0%（Max）', 'Devstral Small 2': '65.8%', 'Codestral 22B': '未公開' },
            { 'ベンチマーク': 'パラメータ（総数 / アクティブ）', 'Qwen3.6 27B': '27B Dense', 'DeepSeek V4 Flash': '284B / アクティブ13B', 'Devstral Small 2': '24B Dense', 'Codestral 22B': '22B Dense' },
            { 'ベンチマーク': 'コンテキストウィンドウ', 'Qwen3.6 27B': '256K', 'DeepSeek V4 Flash': '1M', 'Devstral Small 2': '384K', 'Codestral 22B': '32K' },
          ],
          columns: ['ベンチマーク', 'Qwen3.6 27B', 'DeepSeek V4 Flash', 'Devstral Small 2', 'Codestral 22B'],
          tableFormat: true,
          callouts: [
            { type: 'note', text: 'Qwenの77.2はQwen内部のエージェント環境によるものです。DeepSeekは73.7（非思考）、78.6（High）、79.0（Max）を公表しています。Devstral Small 2の65.8はOllamaのページからのものです。環境が異なるため、数値は直接比較できません。' },
            { type: 'tip', text: 'DeepSeek APIのモデル名は変わります。デプロイ前にapi-docs.deepseek.com/quick_start/pricingを確認してください（現在の名称：deepseek-flash、deepseek-v4-pro）。' },
          ],
        },
        costMath: {
          id: 'cost-math',
          title: 'トークン単価の計算',
          content: [
            'コーディングLLMの経済性は、利用量、タスクの機密性、ハードウェアによって決まります。以下の試算は開発者1人分で、明記した前提に基づく計算であり、測定値ではありません。電気料金は、ドイツの一般的な水準である€0.35/kWhで計算しています。ご自身の料金プランを確認してください。',
            '1日500万トークン（自動補完、テスト生成、コードレビューを多用するセッション）、入力:出力が1:2の場合、DeepSeek API（deepseek-flash、オフピークで100万トークンあたり入力$0.15、出力$0.60）は1日約$2.25、250営業日で約$560です。ピーク時料金（入力$0.30、出力$1.20）では同じ使用量で1日約$4.50、年間約$1,125になります。',
            'ローカル構成は、これをハードウェアと電力に置き換えます。想定価格$2,300のRTX 4090が、250日間、1日8時間350 Wを消費すると700 kWh、年間約€245です。為替を無視すると、ハードウェアはAPIのオフピーク料金に対して約7年、ピーク料金に対して約2.6年で元が取れます。機密性の高いコードでは、比較はコストだけではありません。クラウドAPIはコードを第三者に送信します。',
          ],
          codeBlock: `# Cost calculator: per-token math for coding LLMs (every input is an assumption)
# DeepSeek API, deepseek-flash, off-peak rates in USD per 1M tokens (api-docs.deepseek.com)
input_rate, output_rate = 0.15, 0.60
daily_tokens = 5_000_000              # per developer
blended = (input_rate * 1 + output_rate * 2) / 3   # 1:2 input:output split = $0.45/1M
daily_cost = daily_tokens / 1_000_000 * blended     # $2.25/day
annual_api = daily_cost * 250                       # ~$562/year (peak rates: ~$1,125/year)

# Local Qwen3.6 27B on an RTX 4090 (price is an assumption)
hardware_cost = 2300                  # USD
power_kwh     = 0.350 * 8 * 250       # 350 W, 8 h/day, 250 days = 700 kWh
annual_power  = power_kwh * 0.35      # EUR 0.35/kWh = ~245 per year
# Break-even vs off-peak API: hardware_cost / (annual_api - annual_power) = ~7.3 years
# Break-even vs peak API:     hardware_cost / (1125 - annual_power)       = ~2.6 years`,
          codeLanguage: 'python',
        },
        latency: {
          id: 'latency',
          title: 'レイテンシの実際',
          content: '対話型コーディングではレイテンシが重要です。自動補完は500 msを超えると使いにくく、コードレビューは3秒まで許容でき、バッチ処理はレイテンシの影響を受けません。PromptQuorumはこれらのモデルを測定していません。表はRTX 4090（24 GB、Ollama 0.34.4、2026年9月）でのOllamaによるサードパーティのテスト1件で、これらのモデルについて見つけられた唯一の公開結果です。実際の速度は量子化、コンテキスト長、ドライバーによって異なります。',
          rows: [
            { '構成': 'Qwen3.6 27B、RTX 4090（ドラフトデコード有効）', '持続速度（トークン/秒）': '115.4', '備考': '5つのプロンプトの平均、出力256トークン' },
            { '構成': 'Qwen3.6 27B、RTX 4090（ドラフトデコード無効）', '持続速度（トークン/秒）': '48.9', '備考': '1プロンプトでの再実行、同一構成' },
            { '構成': 'Qwen3-Coder 30B、RTX 4090', '持続速度（トークン/秒）': '224.7', '備考': 'アクティブパラメータ3.3BのMoE' },
            { '構成': 'Devstral Small 2', '持続速度（トークン/秒）': '未測定', '備考': '公開された測定結果なし' },
            { '構成': 'DeepSeek API（deepseek-flash）', '持続速度（トークン/秒）': '未測定', '備考': 'ネットワークとピーク時間帯に依存' },
          ],
          columns: ['構成', '持続速度（トークン/秒）', '備考'],
          tableFormat: true,
          note: '出典：[Ollama Models Cheat Sheet](https://computingforgeeks.com/ollama-models-cheat-sheet/)（サードパーティのテストであり、PromptQuorumによるものではありません）。記事によると、投機的デコード（ドラフトトークン）は出力品質を変えずに、このテストでQwen3.6 27Bを約2.4倍高速化しました。Appleはローカル LLMのトークン速度を公開していません。確実な数値は、お使いのハードウェアでollama run --verboseを実行して測定してください。自動補完では、ローカル推論はネットワークの往復を避けられます。',
          callouts: [
            { type: 'warning', text: 'Ollamaのデフォルトのコンテキストウィンドウ（利用可能なVRAMに応じて調整）は、処理するトークンが減るため見かけのスループットを高めますが、コンテキストを切り詰めます。意味のあるコーディング用レイテンシ測定には、num_ctx 32768を設定してください。' },
          ],
        },
        hardware: {
          id: 'hardware',
          title: 'ハードウェア要件',
          items: [
            '**Qwen3.6 27B Q4_K_M**（Ollama `qwen3.6:27b`、18～19 GBのダウンロード）：24 GBのGPU（RTX 3090、RTX 4090）、またはユニファイドメモリ36～48 GB以上のApple Silicon。16 GBのカードでは重みを保持できません。',
            '**Devstral Small 2 24B**（Ollama `devstral-small-2`、15 GBのダウンロード）：RTX 4070 Ti Super（16 GB、コンテキストを加えると厳しい）、RTX 3090またはRTX 4090（24 GB）、またはユニファイドメモリ24 GB以上のApple Silicon。',
            '**Codestral 22B Q4_K_M**（13 GBのダウンロード）：RTX 4070 Ti（12 GBは限界、16 GB推奨）。',
            '**2つのモデルを同時に実行**：Qwen3.6 27B（18～19 GB）とDevstral Small 2（15 GB）は、コンテキストを除いて合計約34 GBです。24 GBのGPU 2枚、または64 GB以上のユニファイドメモリを搭載したApple Silicon（例：M5 Max搭載Mac Studio、最大128 GB）が必要です。',
            '**Apple Silicon**：Appleは2026年8月25日にMac miniとMac Studioのラインアップを刷新し（2026年9月22日から販売）、M4 Pro/M4 Max構成を置き換えました。Appleによると、M5 Pro搭載Mac miniは$1,699から（ユニファイドメモリ最大64 GB、307 GB/s）、M5 Max搭載Mac Studioは$2,499から（最大128 GB）、M5 Ultra搭載Mac Studioは$5,499から（最大512 GB。512 GB構成は10月下旬に出荷）です。36～48 GB構成ならQwen3.6 27Bを収容でき、64 GB以上ならQwen3.6 27BとDevstral Small 2を同時に収容できます。Appleはローカル LLMの秒あたりトークン数を公開しておらず、PromptQuorumもこれらのチップを測定していないため、ollama run --verboseで測定してください。価格は米ドルで、現地価格は異なる場合があります。',
            '**低予算のApple Siliconオプション**：エントリーモデルのM6搭載Mac miniは$899から（ユニファイドメモリ最大32 GB、Apple公表で最大170 GB/s）で、Devstral Small 2（15 GB）とCodestral 22B（13 GB）を余裕を持って収容できます。Qwen3.6 27B（18～19 GB）は32 GB構成にしか収まらず、コンテキストの余裕は小さくなります。メモリ帯域がM5 Proより低く（170 GB/s対307 GB/s）、生成は遅くなります。PromptQuorumはM6を測定していません。',
          ],
          codeBlock: `# Ollama config for Qwen3.6 27B with num_ctx and GPU layers
cat > Modelfile-qwen36 <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen36-local -f Modelfile-qwen36
ollama run qwen36-local`,
          codeLanguage: 'bash',
        },
        dispatchStrategy: {
          id: 'dispatch-strategy',
          title: 'マルチモデル ディスパッチ戦略',
          image: '/images/qwen-coder-deepseek-mistral-dispatch-hero-ja.webp',
          imageCaption: 'コーディングタスクのディスパッチ判断ツリー：機密コードはローカルのQwen3.6 27B、対話型の自動補完はローカルのDevstral Small 2、機密でないバッチ処理はDeepSeek API（オフピーク入力100万トークンあたり$0.15）へ。',
          content: [
            'すべてのタスクで勝つコーディングモデルはありません。Qwen3.6 27Bはここで最も強力なローカルのSWE-bench値を持ちます。Devstral Small 2はより軽量なエージェント型モデルです。DeepSeek APIは、機密でないコードを大規模に処理する場合にトークンあたり最も安価です。タスクの種類ごとにルーティングするディスパッチ層を置くと、3つの利点をすべて活かせます。',
            '開発チーム向けのディスパッチ・マトリクスの例：',
          ],
          rows: [
            { 'タスクの種類': '非公開コード（顧客データ）', '推奨モデル': 'Qwen3.6 27B（ローカル）', '理由': 'コードが手元のハードウェアに留まる' },
            { 'タスクの種類': '自動補完（対話型）', '推奨モデル': 'Devstral Small 2（ローカル）', '理由': 'より軽量で、ネットワークの往復なし' },
            { 'タスクの種類': 'コードレビュー（機密でない）', '推奨モデル': 'DeepSeek API', '理由': 'オフピーク入力$0.15/1M、高スループット' },
            { 'タスクの種類': '複雑なリファクタリング（複数ファイル）', '推奨モデル': 'Qwen3.6 27B（ローカル）＋PromptQuorumコンセンサス', '理由': 'ローカル最強のSWE-bench値、コードはローカルのまま' },
            { 'タスクの種類': 'バッチのテスト生成', '推奨モデル': 'DeepSeek API', '理由': '機密でない大量処理向けにコスト最適化' },
          ],
          columns: ['タスクの種類', '推奨モデル', '理由'],
          tableFormat: true,
        },
        promptquorum: {
          id: 'promptquorum',
          title: 'PromptQuorum連携',
          content: 'PromptQuorumは、定義した分類ルールに基づいて、コーディングタスクをローカルのQwen、ローカルのDevstral、クラウドAPIに振り分けます。手動のモデル切り替えが不要になり、上記のディスパッチ・マトリクスが自動的に実装されます。',
          codeBlock: `# PromptQuorum routing config for coding workloads
# Set in your PromptQuorum settings or .env file

# Local models (via Ollama)
LOCAL_OLLAMA_URL=http://localhost:11434/v1
LOCAL_CODING_MODEL=qwen36-local   # Qwen3.6 27B with num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral-small-2     # Devstral Small 2 24B

# Cloud fallback
DEEPSEEK_API_KEY=your_key_here
DEEPSEEK_MODEL=deepseek-flash

# Routing rules (PromptQuorum dispatch)
# route: task_contains("private") OR task_contains("customer") → qwen36-local (local)
# route: task_type == "autocomplete" → devstral-small-2 (local)
# route: token_count > 50000 → deepseek-flash (cloud, non-sensitive only)
# default → qwen36-local (local)`,
          codeLanguage: 'bash',
          snippetBlocks: [
            { type: 'one-sentence', text: 'PromptQuorumは、コーディングタスクのうち機密コードはローカルのQwen3.6へ、機密でない大量生成はDeepSeek APIへ振り分けます。' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連記事',
          items: [
            '[Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2 — 2026年完全比較](/ja/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
            '[Qwen 3をローカルで動かす — OllamaとLM Studioのガイド](/ja/local-llms/run-qwen-locally-guide-2026)',
            '[PromptQuorumでモデルを比較](/ja/compare)',
            '[2026年のコーディング向けローカルLLMおすすめ](/ja/local-llms/best-local-llms-for-coding)',
          ],
        },
        faq: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            { q: 'ローカルコーディングにはQwen3.6 27BのほうがDeepSeekより優れていますか？', a: 'Qwen3.6 27BはSWE-bench Verifiedで77.2%と公表され、18～19 GBのダウンロードで自分のハードウェア上だけで動作するため、24 GBのGPUを想定してください。DeepSeek V4 Flashは78.6%（Highモード）と公表されていますが284Bパラメータのモデルなので、多くの人はオフピークで入力100万トークンあたり$0.15のクラウドAPIとして使います。どちらが良いかは単一の勝者ではなく、データの機密性と予算で決まります。両スコアとも、異なるテスト環境によるベンダー公表値です。' },
            { q: 'Devstral Small 2とは何ですか、なぜここで取り上げられていますか？', a: 'Devstral Small 2はMistral AIの24Bモデルです。Devstralシリーズは、複数ファイルの編集やツール利用といったエージェント型のソフトウェアエンジニアリングを対象としています。Ollamaのページには、15 GBのダウンロード、384Kのコンテキストウィンドウ、Apache 2.0ライセンス、SWE-bench Verified 65.8%と表示されています。ここではより軽量なローカル選択肢で、より高いSWE-bench値を公表しているのはQwen3.6 27Bです。' },
            { q: 'Qwen3.6 27BとDevstral Small 2を同時に実行できますか？', a: '24 GBのGPU1枚では不可能です。Qwen3.6 27Bは18～19 GB、Devstral Small 2は15 GBのダウンロードで、コンテキストを除いて合計約34 GBです。24 GBのGPU 2枚、または64 GB以上のユニファイドメモリを搭載したApple Siliconが必要です。GPU1枚では、一度に1つのモデルを実行し、Ollamaで切り替えてください。' },
            { q: 'EU企業のコードにDeepSeek APIを使用しても安全ですか？', a: 'DeepSeek APIは、中国で法人登記されているDeepSeekが運営するサーバーでデータを処理します。EU委員会は中国に対する十分性認定を出していません。EUの個人データや個人情報を含むソースコードを送信するには、GDPR第5章（第44条以下）に基づく法的評価が必要です。個人データを含まない専有コードについては法務チームに相談してください。Qwen3.6 27Bのようなローカルモデルはコードを自分のハードウェアに留め、第三者への送信を避けられますが、それだけでプロジェクトがGDPRに準拠することにはなりません。これは一般的な情報であり、法的助言ではありません。' },
            { q: 'SWE-bench Verifiedとは何であり、なぜ重視されるのですか？', a: 'SWE-bench Verifiedは、人間が検証した課題セットを使い、モデルがDjango、Flask、scikit-learnなどのオープンソースPythonプロジェクトの実際のGitHub issueを解決できるかをテストします。HumanEvalのような孤立した関数レベルのテストよりも、実践的なソフトウェアエンジニアリングを測定します。スコアはエージェント環境に大きく左右されるため、ベンダーの数値は慎重に比較してください。' },
          ],
        },
      },
    },
  zh: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2027-04-17',
      theme: 'Best Models',
      title: 'Qwen3.6 vs DeepSeek vs Devstral：本地编程模型对比 2026',
      seoTitle: 'Qwen3.6 vs DeepSeek vs Devstral：编程模型 2026',
      intro: 'Qwen3.6 27B 公布的 SWE-bench Verified 得分为 77.2%，可通过 Ollama 以 18–19 GB 的下载量在本地运行。DeepSeek V4 Flash 在 High 模式下公布 78.6%，是每百万输入令牌 $0.15 起的云 API。Devstral Small 2 在 15 GB 的本地模型中公布 65.8%。这些数字来自各厂商不同的测试环境，不能直接比较。',
      metaDescription: '对比 Qwen3.6 27B（SWE-bench Verified 77.2%）、DeepSeek V4 Flash（API $0.15/百万起）与 Devstral Small 2：成本、上下文、许可证。',
      heroImage: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-zh.webp',
      publishDate: '2026-05-16',
      dateModified: '2026-10-17',
      readTime: '9分钟阅读',
      educationalLevel: 'Intermediate',
      audience: '为日常开发工作流选择本地编程 LLM 的软件开发者',
      primaryTerm: 'local coding LLM comparison 2026',
      leadAnswerBlock: '**Qwen3.6 27B 是本对比中最强的本地选择：SWE-bench Verified 77.2%（Qwen 公布）、256K 上下文、Apache 2.0，18–19 GB 的下载需要 24 GB 显卡或同等统一内存。DeepSeek V4 Flash 在 High 模式下公布 78.6%，云 API 每百万输入令牌 $0.15 起，但其 284B 参数的权重属于服务器级。Devstral Small 2（65.8%，15 GB）是更轻量的本地选择。由于数字来自各厂商不同的测试环境，排名仅供参考。云 API 会把您的代码发送给第三方，因此请将敏感代码保留在本地模型上。**',
      toc: [
        { label: '要点', anchor: '#key-takeaways' },
        { label: '本地编程模型为何追了上来', anchor: '#local-caught-up' },
        { label: '基准测试表', anchor: '#benchmark-table' },
        { label: '每令牌成本计算', anchor: '#cost-math' },
        { label: '延迟实况', anchor: '#latency' },
        { label: '硬件要求', anchor: '#hardware' },
        { label: '多模型调度策略', anchor: '#dispatch-strategy' },
        { label: 'PromptQuorum 集成', anchor: '#promptquorum' },
        { label: '相关阅读', anchor: '#related-reading' },
        { label: '常见问题', anchor: '#faq' },
      ],
      comparisonTable: {
        columns: ['模型', 'SWE-bench Verified', '部署方式', '上下文', '输入成本 ($/1M)', '下载（本地）'],
        rows: [
          { '模型': 'Qwen3.6 27B', 'SWE-bench Verified': '77.2%（Qwen）', '部署方式': '本地（Ollama）', '上下文': '256K', '输入成本 ($/1M)': '购买硬件后 $0', '下载（本地）': '18–19 GB' },
          { '模型': 'DeepSeek V4 Flash', 'SWE-bench Verified': '78.6%（High 模式）', '部署方式': '云 API', '上下文': '1M', '输入成本 ($/1M)': '$0.15–0.30', '下载（本地）': '不适用（MoE 284B）' },
          { '模型': 'Devstral Small 2 24B', 'SWE-bench Verified': '65.8%', '部署方式': '本地（Ollama）', '上下文': '384K', '输入成本 ($/1M)': '购买硬件后 $0', '下载（本地）': '15 GB' },
          { '模型': 'Codestral 22B', 'SWE-bench Verified': '未公布', '部署方式': '本地（Ollama）', '上下文': '32K', '输入成本 ($/1M)': '购买硬件后 $0', '下载（本地）': '13 GB' },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Qwen3.6 27B 是最强的本地选择：SWE-bench Verified 77.2%（Qwen 公布），18–19 GB 下载，256K 上下文，Apache 2.0。',
            'DeepSeek V4 Flash 是云端低成本选择：High 模式 78.6%（DeepSeek 公布），非高峰时段每百万输入令牌 $0.15；其 284B 权重属于服务器级。',
            'Devstral Small 2 是更轻量的智能体选择：15 GB 下载、384K 上下文，SWE-bench Verified 65.8%。',
            '所有数字均为厂商公布值：测试环境不同，因此分数只是参考，而非受控的直接对比。',
            '调度策略：敏感代码 → 本地 Qwen3.6，非敏感批量任务 → DeepSeek API，交互式或智能体任务 → 本地 Devstral Small 2。',
          ],
        },
        localCaughtUp: {
          id: 'local-caught-up',
          title: '本地编程模型为何追了上来',
          content: [
            '在 LLM 时代的最初几年，云端模型在编程任务上明显领先本地模型。这一差距在 2025–2026 年缩小，因为 24–30B 规模、经过侧重代码训练的开放权重模型出现了。',
            'Qwen3.6 27B 于 2026 年 4 月发布，公布其在 SWE-bench Verified 上得分为 77.2，该基准由开源 Python 项目中的真实 GitHub issue 构成。在其模型卡的同一张表中，Qwen 列出 Qwen3.5-27B 为 75.0，Claude 4.5 Opus 为 80.9，因此在这项厂商公布的测试中，开放模型接近领先的云端模型。这是 Qwen 自己用内部智能体环境得出的结果，并非独立验证。',
            '人们常提到的趋同原因有：（1）大规模的、侧重代码的训练数据；（2）基于真实软件工程任务而非通用指令跟随的后训练；（3）能在 Q4 精度下保留编程能力的更好的 GGUF 量化。',
          ],
          snippetBlocks: [
            { type: 'one-sentence', text: 'Qwen3.6 27B 公布的 SWE-bench Verified 得分为 77.2%，以 18–19 GB 的下载量在本地运行。' },
            { type: 'plain-terms', text: 'SWE-bench Verified 测试 AI 能否解决 Django、Flask、scikit-learn 等真实开源项目中的 GitHub issue。77.2% 表示在厂商自己的智能体环境下，模型解决了约 77% 的测试任务。' },
          ],
        },
        benchmarkTable: {
          id: 'benchmark-table',
          title: '基准测试表',
          image: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-zh.webp',
          imageCaption: '各厂商公布的 SWE-bench Verified：Qwen3.6 27B 77.2%，DeepSeek V4 Flash 78.6%（High 模式），Devstral Small 2 65.8%。',
          content: '所有数字均为厂商公布值，来自模型卡和 Ollama 页面。各厂商的测试环境不同，因此请将 SWE-bench 数字视为参考，而非受控的直接对比。PromptQuorum 没有重新运行这些基准测试。',
          rows: [
            { '基准': 'SWE-bench Verified（厂商公布）', 'Qwen3.6 27B': '77.2%', 'DeepSeek V4 Flash': '78.6%（High）/ 79.0%（Max）', 'Devstral Small 2': '65.8%', 'Codestral 22B': '未公布' },
            { '基准': '参数（总量 / 激活）', 'Qwen3.6 27B': '27B 稠密', 'DeepSeek V4 Flash': '284B / 激活 13B', 'Devstral Small 2': '24B 稠密', 'Codestral 22B': '22B 稠密' },
            { '基准': '上下文窗口', 'Qwen3.6 27B': '256K', 'DeepSeek V4 Flash': '1M', 'Devstral Small 2': '384K', 'Codestral 22B': '32K' },
          ],
          columns: ['基准', 'Qwen3.6 27B', 'DeepSeek V4 Flash', 'Devstral Small 2', 'Codestral 22B'],
          tableFormat: true,
          callouts: [
            { type: 'note', text: 'Qwen 的 77.2 使用的是 Qwen 内部的智能体环境。DeepSeek 公布 73.7（非思考）、78.6（High）和 79.0（Max）。Devstral Small 2 的 65.8 来自其 Ollama 页面。环境不同，因此数字不能直接比较。' },
            { type: 'tip', text: 'DeepSeek API 的模型名称会变化。部署前请查看 api-docs.deepseek.com/quick_start/pricing（当前名称：deepseek-flash 和 deepseek-v4-pro）。' },
          ],
        },
        costMath: {
          id: 'cost-math',
          title: '每令牌成本计算',
          content: [
            '编程 LLM 的经济性取决于使用量、任务敏感度和硬件。下面的估算针对一名开发者，基于所述假设：它是算术，不是测量。电价按 0.35 欧元/千瓦时计算，这是德国的典型水平；请核对您自己的电价。',
            '按每天 500 万令牌（密集使用自动补全、测试生成和代码审查）、输入与输出 1:2 计算，DeepSeek API（deepseek-flash，非高峰时段每百万令牌输入 $0.15、输出 $0.60）每天约 $2.25，250 个工作日约 $560。按高峰时段价格（输入 $0.30、输出 $1.20），同样用量每天约 $4.50，每年约 $1,125。',
            '本地方案则把这笔费用换成硬件和电力。一张假定 $2,300 的 RTX 4090，250 天每天 8 小时按 350 W 计算，用电 700 千瓦时，约每年 245 欧元。忽略汇率，硬件相对 API 非高峰价格约 7 年回本，相对高峰价格约 2.6 年回本。对于敏感代码，比较不只是成本：云 API 会把您的代码发送给第三方。',
          ],
          codeBlock: `# Cost calculator: per-token math for coding LLMs (every input is an assumption)
# DeepSeek API, deepseek-flash, off-peak rates in USD per 1M tokens (api-docs.deepseek.com)
input_rate, output_rate = 0.15, 0.60
daily_tokens = 5_000_000              # per developer
blended = (input_rate * 1 + output_rate * 2) / 3   # 1:2 input:output split = $0.45/1M
daily_cost = daily_tokens / 1_000_000 * blended     # $2.25/day
annual_api = daily_cost * 250                       # ~$562/year (peak rates: ~$1,125/year)

# Local Qwen3.6 27B on an RTX 4090 (price is an assumption)
hardware_cost = 2300                  # USD
power_kwh     = 0.350 * 8 * 250       # 350 W, 8 h/day, 250 days = 700 kWh
annual_power  = power_kwh * 0.35      # EUR 0.35/kWh = ~245 per year
# Break-even vs off-peak API: hardware_cost / (annual_api - annual_power) = ~7.3 years
# Break-even vs peak API:     hardware_cost / (1125 - annual_power)       = ~2.6 years`,
          codeLanguage: 'python',
        },
        latency: {
          id: 'latency',
          title: '延迟实况',
          content: '延迟对交互式编程很重要：自动补全超过 500 ms 就难以使用，代码审查可接受到 3 s，批处理任务对延迟不敏感。PromptQuorum 没有测量过这些模型。下表展示的是 RTX 4090（24 GB，Ollama 0.34.4，2026 年 9 月）上使用 Ollama 的一项第三方测试，这是我们为这些模型找到的唯一公开结果；实际速度会因量化、上下文长度和驱动而不同。',
          rows: [
            { '配置': 'Qwen3.6 27B，RTX 4090（开启草稿解码）', '持续速度（令牌/秒）': '115.4', '备注': '五个提示词的平均值，输出 256 个令牌' },
            { '配置': 'Qwen3.6 27B，RTX 4090（关闭草稿解码）', '持续速度（令牌/秒）': '48.9', '备注': '单个提示词重测，配置相同' },
            { '配置': 'Qwen3-Coder 30B，RTX 4090', '持续速度（令牌/秒）': '224.7', '备注': '激活参数 3.3B 的 MoE' },
            { '配置': 'Devstral Small 2', '持续速度（令牌/秒）': '未测试', '备注': '未找到公开测试结果' },
            { '配置': 'DeepSeek API（deepseek-flash）', '持续速度（令牌/秒）': '未测试', '备注': '取决于网络和高峰时段' },
          ],
          columns: ['配置', '持续速度（令牌/秒）', '备注'],
          tableFormat: true,
          note: '来源：[Ollama Models Cheat Sheet](https://computingforgeeks.com/ollama-models-cheat-sheet/)（第三方测试，并非 PromptQuorum 所测）。据该文章称，推测解码（草稿令牌）在不改变输出质量的情况下，使 Qwen3.6 27B 在该测试中快了约 2.4 倍。Apple 不公布本地 LLM 的令牌速度。请在自己的硬件上运行 ollama run --verbose 获取可靠数字。对于自动补全，本地推理省去了网络往返。',
          callouts: [
            { type: 'warning', text: 'Ollama 默认的上下文窗口（按可用显存调整）会因处理的令牌更少而提高表观吞吐量，但会截断上下文。为获得有意义的编程延迟测量，请设置 num_ctx 32768。' },
          ],
        },
        hardware: {
          id: 'hardware',
          title: '硬件要求',
          items: [
            '**Qwen3.6 27B Q4_K_M**（Ollama `qwen3.6:27b`，下载 18–19 GB）：24 GB 显卡（RTX 3090、RTX 4090），或统一内存 36–48 GB 及以上的 Apple Silicon。16 GB 显卡装不下权重。',
            '**Devstral Small 2 24B**（Ollama `devstral-small-2`，下载 15 GB）：RTX 4070 Ti Super（16 GB，加上上下文后偏紧）、RTX 3090 或 RTX 4090（24 GB），或统一内存 24 GB 及以上的 Apple Silicon。',
            '**Codestral 22B Q4_K_M**（下载 13 GB）：RTX 4070 Ti（12 GB 勉强，推荐 16 GB）。',
            '**同时运行两个模型**：Qwen3.6 27B（18–19 GB）加 Devstral Small 2（15 GB）在不含上下文时约 34 GB，需要两张 24 GB 显卡，或配备 64 GB 以上统一内存的 Apple Silicon，例如配备 M5 Max 的 Mac Studio（最高 128 GB）。',
            '**Apple Silicon**：Apple 于 2026 年 8 月 25 日更新了 Mac mini 和 Mac Studio 产品线（2026 年 9 月 22 日起发售），取代了 M4 Pro/M4 Max 配置。据 Apple 介绍，配备 M5 Pro 的 Mac mini 起价 $1,699（统一内存最高 64 GB，307 GB/s），配备 M5 Max 的 Mac Studio 起价 $2,499（最高 128 GB），配备 M5 Ultra 的 Mac Studio 起价 $5,499（最高 512 GB；512 GB 配置于 10 月下旬发货）。36–48 GB 配置可容纳 Qwen3.6 27B；64 GB 及以上可同时容纳 Qwen3.6 27B 和 Devstral Small 2。Apple 不公布本地 LLM 的每秒令牌数，PromptQuorum 也未测试这些芯片，请用 ollama run --verbose 自行测量。价格为美元，当地价格可能不同。',
            '**入门级 Apple Silicon 选择**：入门款配备 M6 的 Mac mini 起价 $899（统一内存最高 32 GB，据 Apple 最高 170 GB/s），可轻松容纳 Devstral Small 2（15 GB）和 Codestral 22B（13 GB）。Qwen3.6 27B（18–19 GB）只能放进 32 GB 配置，留给上下文的余量很小。其内存带宽低于 M5 Pro（170 对 307 GB/s），生成速度会更慢；PromptQuorum 未测试 M6。',
          ],
          codeBlock: `# Ollama config for Qwen3.6 27B with num_ctx and GPU layers
cat > Modelfile-qwen36 <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen36-local -f Modelfile-qwen36
ollama run qwen36-local`,
          codeLanguage: 'bash',
        },
        dispatchStrategy: {
          id: 'dispatch-strategy',
          title: '多模型调度策略',
          image: '/images/qwen-coder-deepseek-mistral-dispatch-hero-zh.webp',
          imageCaption: '编程任务调度决策树：敏感代码交给本地 Qwen3.6 27B，交互式自动补全交给本地 Devstral Small 2，非敏感批量任务交给 DeepSeek API（非高峰输入每百万令牌 $0.15）。',
          content: [
            '没有哪个编程模型能赢下所有任务。Qwen3.6 27B 拥有这里最强的本地 SWE-bench 数字。Devstral Small 2 是更轻量的智能体模型。对于非敏感代码，DeepSeek API 在大规模使用时每令牌最便宜。按任务类型路由的调度层可以兼得三者的优势。',
            '面向开发团队的调度矩阵建议：',
          ],
          rows: [
            { '任务类型': '私有代码（客户数据）', '推荐模型': 'Qwen3.6 27B（本地）', '原因': '代码留在您的硬件上' },
            { '任务类型': '自动补全（交互式）', '推荐模型': 'Devstral Small 2（本地）', '原因': '更轻量，没有网络往返' },
            { '任务类型': '代码审查（非敏感）', '推荐模型': 'DeepSeek API', '原因': '非高峰输入 $0.15/1M，吞吐量高' },
            { '任务类型': '复杂重构（多文件）', '推荐模型': 'Qwen3.6 27B（本地）+ PromptQuorum 共识', '原因': '本地最强的 SWE-bench 数字，代码留在本地' },
            { '任务类型': '批量测试生成', '推荐模型': 'DeepSeek API', '原因': '针对非敏感大批量任务优化成本' },
          ],
          columns: ['任务类型', '推荐模型', '原因'],
          tableFormat: true,
        },
        promptquorum: {
          id: 'promptquorum',
          title: 'PromptQuorum 集成',
          content: 'PromptQuorum 根据您定义的分类规则，把编程任务路由到本地 Qwen、本地 Devstral 和云 API。这省去了手动切换模型，并自动实现上面的调度矩阵。',
          codeBlock: `# PromptQuorum routing config for coding workloads
# Set in your PromptQuorum settings or .env file

# Local models (via Ollama)
LOCAL_OLLAMA_URL=http://localhost:11434/v1
LOCAL_CODING_MODEL=qwen36-local   # Qwen3.6 27B with num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral-small-2     # Devstral Small 2 24B

# Cloud fallback
DEEPSEEK_API_KEY=your_key_here
DEEPSEEK_MODEL=deepseek-flash

# Routing rules (PromptQuorum dispatch)
# route: task_contains("private") OR task_contains("customer") → qwen36-local (local)
# route: task_type == "autocomplete" → devstral-small-2 (local)
# route: token_count > 50000 → deepseek-flash (cloud, non-sensitive only)
# default → qwen36-local (local)`,
          codeLanguage: 'bash',
          snippetBlocks: [
            { type: 'one-sentence', text: 'PromptQuorum 把编程任务中的敏感代码路由到本地 Qwen3.6，把非敏感的大批量生成路由到 DeepSeek API。' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2 — 2026 年完整对比](/zh/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
            '[如何在本地运行 Qwen 3 — Ollama 与 LM Studio 指南](/zh/local-llms/run-qwen-locally-guide-2026)',
            '[在 PromptQuorum 上对比模型](/zh/compare)',
            '[2026 年最佳本地编程 LLM](/zh/local-llms/best-local-llms-for-coding)',
          ],
        },
        faq: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            { q: '在本地编程方面，Qwen3.6 27B比DeepSeek更好吗？', a: 'Qwen3.6 27B 公布的 SWE-bench Verified 得分为 77.2%，以 18–19 GB 的下载量完全在你自己的硬件上运行，请按 24 GB 显卡规划。DeepSeek V4 Flash 公布 78.6%（High 模式），但它是 284B 参数的模型，因此多数人通过云 API 使用，非高峰时段每百万输入令牌 $0.15。更好的选择取决于数据敏感度和预算，而不是唯一的赢家。两个分数都是不同测试环境下的厂商公布值。' },
            { q: 'Devstral Small 2是什么，为什么在这里提及？', a: 'Devstral Small 2 是 Mistral AI 的 24B 模型。Devstral 系列面向智能体式软件工程，例如多文件修改和工具使用。其 Ollama 页面显示 15 GB 下载、384K 上下文窗口、Apache 2.0 许可证以及 SWE-bench Verified 65.8%。它是这里更轻量的本地选择；公布更高 SWE-bench 数值的是 Qwen3.6 27B。' },
            { q: '我可以同时运行Qwen3.6 27B和Devstral Small 2吗？', a: '在单张 24 GB 显卡上不行。Qwen3.6 27B 下载 18–19 GB，Devstral Small 2 下载 15 GB，不含上下文合计约 34 GB。您需要两张 24 GB 显卡，或配备 64 GB 以上统一内存的 Apple Silicon。使用单张显卡时，一次运行一个模型并通过 Ollama 切换。' },
            { q: 'DeepSeek API用于欧盟企业代码是否安全？', a: 'DeepSeek API 在由 DeepSeek（一家在中国注册成立的公司）运营的服务器上处理数据，欧盟委员会尚未就中国发布充分性认定决定。向其发送欧盟个人数据或包含个人信息的源代码，需要依据 GDPR 第五章（第 44 条及以下）进行法律评估。对于不含个人数据的专有代码，请咨询您的法务团队。像 Qwen3.6 27B 这样的本地模型把代码留在您自己的硬件上，避免向第三方传输；但这本身并不使项目符合 GDPR。以上为一般性信息，不构成法律意见。' },
            { q: '什么是SWE-bench Verified，为什么要关注它？', a: 'SWE-bench Verified 使用由人工验证的任务集，测试模型能否解决 Django、Flask、scikit-learn 等开源 Python 项目中的真实 GitHub issue。相比 HumanEval 这类孤立的函数级测试，它更能衡量实际的软件工程能力。分数在很大程度上取决于智能体环境，因此请谨慎比较各厂商的数字。' },
          ],
        },
      },
    },
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Best Models',
    title: 'Qwen3.6 vs DeepSeek vs Devstral: comparativa de modelos de código locales 2026',
    seoTitle: 'Qwen3.6 vs DeepSeek vs Devstral: modelos de código 2026',
    intro: 'Qwen3.6 27B informa un 77,2 % en SWE-bench Verified y se ejecuta en local con Ollama desde una descarga de 18–19 GB. DeepSeek V4 Flash informa un 78,6 % en modo High y es una API cloud desde 0,15 $ por millón de tokens de entrada. Devstral Small 2 informa un 65,8 % en un modelo local de 15 GB. Esta comparativa cubre cifras de SWE-bench, contexto, licencias, coste por token, requisitos de hardware y una estrategia de despacho multi-modelo. Todas las cifras proceden de páginas de los fabricantes y usan configuraciones de prueba distintas, por lo que no son directamente comparables.',
    metaDescription: 'Qwen3.6 27B (77,2 % SWE-bench Verified, local), DeepSeek V4 Flash (API desde 0,15 $/1M) y Devstral Small 2: coste, contexto, hardware, licencias.',
    heroImage: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-es.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-10-17',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores de software eligiendo un LLM local de código para sus flujos de trabajo diarios',
    primaryTerm: 'benchmark LLM local de código 2026',
    leadAnswerBlock: '**Qwen3.6 27B es la mejor opción local de esta comparativa: 77,2 % en SWE-bench Verified (cifra de Qwen), contexto de 256K, Apache 2.0 y una descarga de 18–19 GB que requiere una GPU de 24 GB o memoria unificada equivalente. DeepSeek V4 Flash informa un 78,6 % en modo High como API cloud desde 0,15 $ por millón de tokens de entrada, pero sus pesos de 284.000 millones de parámetros son de clase servidor. Devstral Small 2 (65,8 %, 15 GB) es la opción local más ligera. Como las cifras proceden de configuraciones de prueba distintas, trata la clasificación como orientativa. Una API cloud envía tu código a un tercero: mantén el código sensible en modelos locales.**',
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
      columns: ['Modelo', 'SWE-bench Verified', 'Despliegue', 'Contexto', 'Coste entrada ($/1M)', 'Descarga (local)'],
      rows: [
        { Modelo: 'Qwen3.6 27B', 'SWE-bench Verified': '77,2 % (Qwen)', Despliegue: 'Local (Ollama)', Contexto: '256K', 'Coste entrada ($/1M)': '0 $ tras hardware', 'Descarga (local)': '18–19 GB' },
        { Modelo: 'DeepSeek V4 Flash', 'SWE-bench Verified': '78,6 % (modo High)', Despliegue: 'API cloud', Contexto: '1M', 'Coste entrada ($/1M)': '0,15–0,30 $', 'Descarga (local)': 'N/A (MoE 284B)' },
        { Modelo: 'Devstral Small 2 24B', 'SWE-bench Verified': '65,8 %', Despliegue: 'Local (Ollama)', Contexto: '384K', 'Coste entrada ($/1M)': '0 $ tras hardware', 'Descarga (local)': '15 GB' },
        { Modelo: 'Codestral 22B', 'SWE-bench Verified': 'No publicado', Despliegue: 'Local (Ollama)', Contexto: '32K', 'Coste entrada ($/1M)': '0 $ tras hardware', 'Descarga (local)': '13 GB' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen3.6 27B es la mejor opción local**: 77,2 % en SWE-bench Verified (cifra de Qwen), descarga de 18–19 GB, contexto de 256K, Apache 2.0.',
          '**DeepSeek V4 Flash es la opción cloud económica**: 78,6 % en modo High (cifra de DeepSeek) a 0,15 $ por millón de tokens de entrada fuera de horas punta; sus pesos de 284B son de clase servidor.',
          '**Devstral Small 2 es la opción agéntica más ligera**: 65,8 % en SWE-bench Verified con una descarga de 15 GB y contexto de 384K.',
          '**Todas las cifras son de los fabricantes**: las configuraciones de prueba difieren, así que las puntuaciones son orientativas y no un enfrentamiento controlado.',
          '**Estrategia de despacho**: código sensible a Qwen3.6 local, tareas masivas no sensibles a una API de DeepSeek y trabajo interactivo o agéntico a Devstral Small 2 local.',
        ],
      },
      localCaughtUp: {
        id: 'local-caught-up',
        title: 'Por qué los modelos locales de código han alcanzado a los cloud',
        content: [
          'Durante los primeros años de la era LLM, los modelos cloud iban claramente por delante de los locales en programación. Esa brecha se redujo en 2025–2026 cuando modelos open-weight de 24–30B parámetros recibieron entrenamiento centrado en código.',
          'Qwen3.6 27B, lanzado en abril de 2026, informa 77,2 en SWE-bench Verified, un benchmark de issues reales de GitHub en proyectos Python de código abierto. En la misma tabla de su model card, Qwen indica 75,0 para Qwen3.5-27B y 80,9 para Claude 4.5 Opus, de modo que el modelo abierto queda cerca de un modelo cloud puntero en esta prueba publicada por el fabricante. Son resultados propios de Qwen con un andamiaje de agente interno, no una verificación independiente.',
          'Las razones más citadas de esta convergencia son (1) datos de entrenamiento centrados en código a gran escala, (2) post-entrenamiento con tareas reales de ingeniería de software en lugar de seguimiento genérico de instrucciones y (3) una mejor cuantización GGUF que conserva la capacidad de programar en precisión Q4.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.6 27B informa un 77,2 % en SWE-bench Verified y se ejecuta en local desde una descarga de 18–19 GB.' },
          { type: 'plain-terms', text: 'SWE-bench Verified prueba si una IA puede resolver issues reales de GitHub en proyectos de código abierto como Django, Flask y scikit-learn. Una puntuación del 77,2 % significa que el modelo resolvió unas 77 de cada 100 tareas de prueba, medido con el andamiaje de agente del propio fabricante.' },
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Tabla de benchmarks',
        image: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-es.webp',
        imageCaption: 'SWE-bench Verified según cada fabricante: Qwen3.6 27B 77,2 %, DeepSeek V4 Flash 78,6 % (modo High), Devstral Small 2 65,8 %.',
        content: 'Todas las cifras son de los fabricantes, tomadas de model cards y fichas de Ollama. Las configuraciones de prueba difieren entre fabricantes, así que trata las cifras de SWE-bench como orientativas, no como un enfrentamiento controlado. PromptQuorum no ha vuelto a ejecutar estos benchmarks.',
        rows: [
          { Benchmark: 'SWE-bench Verified (cifra del fabricante)', 'Qwen3.6 27B': '77,2 %', 'DeepSeek V4 Flash': '78,6 % (High) / 79,0 % (Max)', 'Devstral Small 2': '65,8 %', 'Codestral 22B': 'No publicado' },
          { Benchmark: 'Parámetros (total / activos)', 'Qwen3.6 27B': '27B denso', 'DeepSeek V4 Flash': '284B / 13B activos', 'Devstral Small 2': '24B denso', 'Codestral 22B': '22B denso' },
          { Benchmark: 'Ventana de contexto', 'Qwen3.6 27B': '256K', 'DeepSeek V4 Flash': '1M', 'Devstral Small 2': '384K', 'Codestral 22B': '32K' },
        ],
        columns: ['Benchmark', 'Qwen3.6 27B', 'DeepSeek V4 Flash', 'Devstral Small 2', 'Codestral 22B'],
        tableFormat: true,
        callouts: [
          { type: 'note', text: 'El 77,2 de Qwen usa el andamiaje de agente interno de Qwen. DeepSeek informa 73,7 (sin razonamiento), 78,6 (High) y 79,0 (Max). El 65,8 de Devstral Small 2 procede de su ficha de Ollama. Los andamiajes difieren, por lo que las cifras no son directamente comparables.' },
          { type: 'tip', text: 'Los nombres de modelo de la API de DeepSeek cambian. Consulta api-docs.deepseek.com/quick_start/pricing antes del despliegue (nombres actuales: deepseek-flash y deepseek-v4-pro).' },
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'Matemáticas de coste por token',
        content: [
          'La economía de los LLM de código depende del volumen de uso, la sensibilidad de las tareas y el hardware. La proyección siguiente es para un desarrollador y se basa en los supuestos indicados: es aritmética, no una medición. La electricidad se calcula a 0,35 €/kWh, una tarifa alemana típica; consulta tu propia tarifa.',
          'Con 5 millones de tokens al día (una sesión intensa de autocompletado, generación de tests y revisión de código) y una proporción entrada/salida de 1:2, la API de DeepSeek (deepseek-flash, 0,15 $ de entrada y 0,60 $ de salida por millón de tokens fuera de horas punta) cuesta unos 2,25 $ al día, es decir, unos 560 $ en 250 días laborables. A tarifas de horas punta (0,30 $ de entrada, 1,20 $ de salida), el mismo uso cuesta unos 4,50 $ al día, unos 1.125 $ al año.',
          'Una configuración local cambia eso por hardware y electricidad. Una RTX 4090 a 2.300 $ (supuesto), con 350 W durante 8 horas en 250 días, consume 700 kWh, unos 245 € al año. Sin tener en cuenta los tipos de cambio, el hardware se amortiza en unos 7 años frente a las tarifas valle de la API y en unos 2,6 años frente a las tarifas de horas punta. Con código sensible, la comparación no es solo de coste: una API cloud envía tu código a un tercero.',
        ],
        codeBlock: `# Cost calculator: per-token math for coding LLMs (every input is an assumption)
# DeepSeek API, deepseek-flash, off-peak rates in USD per 1M tokens (api-docs.deepseek.com)
input_rate, output_rate = 0.15, 0.60
daily_tokens = 5_000_000              # per developer
blended = (input_rate * 1 + output_rate * 2) / 3   # 1:2 input:output split = $0.45/1M
daily_cost = daily_tokens / 1_000_000 * blended     # $2.25/day
annual_api = daily_cost * 250                       # ~$562/year (peak rates: ~$1,125/year)

# Local Qwen3.6 27B on an RTX 4090 (price is an assumption)
hardware_cost = 2300                  # USD
power_kwh     = 0.350 * 8 * 250       # 350 W, 8 h/day, 250 days = 700 kWh
annual_power  = power_kwh * 0.35      # EUR 0.35/kWh = ~245 per year
# Break-even vs off-peak API: hardware_cost / (annual_api - annual_power) = ~7.3 years
# Break-even vs peak API:     hardware_cost / (1125 - annual_power)       = ~2.6 years`,
        codeLanguage: 'python',
      },
      latency: {
        id: 'latency',
        title: 'Realidad de la latencia',
        content: 'La latencia importa para la programación interactiva: el autocompletado resulta inutilizable por encima de 500 ms, la revisión de código es aceptable hasta 3 s y los trabajos por lotes son insensibles a la latencia. PromptQuorum no ha medido estos modelos. La tabla muestra una prueba de terceros con Ollama en una RTX 4090 (24 GB, Ollama 0.34.4, septiembre de 2026), la única medición publicada que hemos encontrado para estos modelos; tus velocidades variarán según la cuantización, la longitud de contexto y los controladores.',
        rows: [
          { 'Configuración': 'Qwen3.6 27B, RTX 4090 (draft decoding activado)', 'Sostenido (tok/s)': '115,4', Notas: 'Media de cinco prompts, 256 tokens de salida' },
          { 'Configuración': 'Qwen3.6 27B, RTX 4090 (draft decoding desactivado)', 'Sostenido (tok/s)': '48,9', Notas: 'Un solo prompt, misma configuración' },
          { 'Configuración': 'Qwen3-Coder 30B, RTX 4090', 'Sostenido (tok/s)': '224,7', Notas: 'MoE con 3,3B de parámetros activos' },
          { 'Configuración': 'Devstral Small 2', 'Sostenido (tok/s)': 'No medido', Notas: 'No se encontró ninguna medición publicada' },
          { 'Configuración': 'API de DeepSeek (deepseek-flash)', 'Sostenido (tok/s)': 'No medido', Notas: 'Depende de la red y de las horas punta' },
        ],
        columns: ['Configuración', 'Sostenido (tok/s)', 'Notas'],
        tableFormat: true,
        note: 'Fuente: [Ollama Models Cheat Sheet](https://computingforgeeks.com/ollama-models-cheat-sheet/) (prueba de terceros, no de PromptQuorum). Según el artículo, la decodificación especulativa (draft tokens) hizo que Qwen3.6 27B fuese unas 2,4 veces más rápido en esa prueba sin cambiar la calidad de la salida. Apple no publica velocidades en tokens para LLM locales. Ejecuta ollama run --verbose en tu propio hardware para una cifra fiable. En el autocompletado, la inferencia local evita el viaje de ida y vuelta por la red.',
        callouts: [
          { type: 'warning', text: 'La ventana de contexto predeterminada de Ollama (ajustada a la VRAM disponible) aumenta el rendimiento aparente porque se procesan menos tokens, pero trunca el contexto. Establece num_ctx 32768 para obtener mediciones de latencia de programación significativas.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware',
        items: [
          '**Qwen3.6 27B Q4_K_M** (Ollama `qwen3.6:27b`, descarga de 18–19 GB): una GPU de 24 GB (RTX 3090, RTX 4090) o Apple Silicon con 36–48 GB o más de memoria unificada. Una tarjeta de 16 GB no puede alojar los pesos.',
          '**Devstral Small 2 24B** (Ollama `devstral-small-2`, descarga de 15 GB): RTX 4070 Ti Super (16 GB, justa al añadir contexto), RTX 3090 o RTX 4090 (24 GB), o Apple Silicon con 24 GB o más de memoria unificada.',
          '**Codestral 22B Q4_K_M** (descarga de 13 GB): RTX 4070 Ti (12 GB marginal, 16 GB recomendado).',
          '**Ejecutar dos modelos a la vez**: Qwen3.6 27B (18–19 GB) más Devstral Small 2 (15 GB) suman unos 34 GB antes del contexto, así que hacen falta dos GPU de 24 GB o Apple Silicon con 64 GB o más de memoria unificada, por ejemplo un Mac Studio con M5 Max (hasta 128 GB).',
          '**Apple Silicon**: Apple renovó la gama Mac mini y Mac Studio el 25 de agosto de 2026 (disponible desde el 22 de septiembre de 2026), sustituyendo las configuraciones M4 Pro/M4 Max. Según Apple, el Mac mini con M5 Pro parte de 1.699 $ (hasta 64 GB de memoria unificada, 307 GB/s), el Mac Studio con M5 Max de 2.499 $ (hasta 128 GB) y el Mac Studio con M5 Ultra de 5.499 $ (hasta 512 GB; la configuración de 512 GB llega a finales de octubre). Una configuración de 36–48 GB aloja Qwen3.6 27B; con 64 GB o más caben juntos Qwen3.6 27B y Devstral Small 2. Apple no publica cifras de tokens por segundo para LLM locales y PromptQuorum no ha evaluado estos chips: mide con ollama run --verbose. Precios en dólares estadounidenses; los precios locales pueden variar.',
          '**Opción económica de Apple Silicon**: el Mac mini con M6 de entrada parte de 899 $ (hasta 32 GB de memoria unificada, hasta 170 GB/s según Apple) y aloja con holgura Devstral Small 2 (15 GB) y Codestral 22B (13 GB). Qwen3.6 27B (18–19 GB) solo cabe en la configuración de 32 GB, con poco margen para el contexto. Su ancho de banda de memoria es menor que el del M5 Pro (170 frente a 307 GB/s), lo que implica una generación más lenta; PromptQuorum no ha evaluado el M6.',
        ],
        codeBlock: `# Configuración de Ollama para Qwen3.6 27B con num_ctx y capas GPU
cat > Modelfile-qwen36 <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen36-local -f Modelfile-qwen36
ollama run qwen36-local`,
        codeLanguage: 'bash',
      },
      dispatchStrategy: {
        id: 'dispatch-strategy',
        title: 'Estrategia de despacho multi-modelo',
        image: '/images/qwen-coder-deepseek-mistral-dispatch-hero-es.webp',
        imageCaption: 'Árbol de decisión para el despacho de tareas de código: el código sensible va a Qwen3.6 27B local, el autocompletado interactivo a Devstral Small 2 local y las tareas por lotes no sensibles a la API de DeepSeek (0,15 $/1M tokens de entrada fuera de horas punta).',
        content: [
          'Ningún modelo de código gana en todas las tareas. Qwen3.6 27B tiene la mejor cifra local de SWE-bench aquí. Devstral Small 2 es un modelo agéntico más ligero. Una API de DeepSeek es la más barata por token a escala para código no sensible. Una capa de despacho que enruta las tareas por tipo aprovecha las ventajas de los tres.',
          'Una matriz de despacho sugerida para un equipo de desarrollo:',
        ],
        rows: [
          { 'Tipo de tarea': 'Código privado (datos de clientes)', 'Modelo recomendado': 'Qwen3.6 27B (local)', 'Por qué': 'El código permanece en tu hardware' },
          { 'Tipo de tarea': 'Autocompletado (interactivo)', 'Modelo recomendado': 'Devstral Small 2 (local)', 'Por qué': 'Modelo más ligero, sin viaje por la red' },
          { 'Tipo de tarea': 'Revisión de código (no sensible)', 'Modelo recomendado': 'API de DeepSeek', 'Por qué': '0,15 $/1M de entrada fuera de horas punta, alto rendimiento' },
          { 'Tipo de tarea': 'Refactorización compleja (multi-archivo)', 'Modelo recomendado': 'Qwen3.6 27B (local) + consenso PromptQuorum', 'Por qué': 'Mejor cifra local de SWE-bench, código local' },
          { 'Tipo de tarea': 'Generación de tests por lotes', 'Modelo recomendado': 'API de DeepSeek', 'Por qué': 'Optimizado en coste para volumen no sensible' },
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
LOCAL_CODING_MODEL=qwen36-local   # Qwen3.6 27B con num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral-small-2     # Devstral Small 2 24B

# Fallback cloud
DEEPSEEK_API_KEY=tu_clave_aqui
DEEPSEEK_MODEL=deepseek-flash

# Reglas de enrutamiento (despacho PromptQuorum)
# route: task_contains("private") OR task_contains("customer") → qwen36-local (local)
# route: task_type == "autocomplete" → devstral-small-2 (local)
# route: token_count > 50000 → deepseek-flash (cloud, solo no sensible)
# default → qwen36-local (local)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'PromptQuorum enruta las tareas de código a Qwen3.6 local para código sensible y a una API de DeepSeek para generación masiva no sensible.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2 — Comparación completa 2026](/es/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[Cómo ejecutar Qwen 3 localmente — Guía Ollama + LM Studio](/es/local-llms/run-qwen-locally-guide-2026)',
          '[Comparar modelos en PromptQuorum](/es/compare)',
          '[Los mejores LLMs locales para código en 2026](/es/local-llms/best-local-llms-for-coding)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Es Qwen3.6 27B mejor que DeepSeek para programar en local?', a: 'Qwen3.6 27B informa un 77,2 % en SWE-bench Verified y se ejecuta por completo en tu hardware desde una descarga de 18–19 GB, así que prevé una GPU de 24 GB. DeepSeek V4 Flash informa un 78,6 % (modo High) pero es un modelo de 284B parámetros, por lo que la mayoría lo usa mediante la API cloud a 0,15 $ por millón de tokens de entrada fuera de horas punta. La mejor opción depende de la sensibilidad de tus datos y del presupuesto, no de un único ganador. Ambas cifras son de los fabricantes y usan configuraciones de prueba distintas.' },
          { q: '¿Qué es Devstral Small 2 y por qué se menciona aquí?', a: 'Devstral Small 2 es un modelo de 24B de Mistral AI. La línea Devstral apunta a la ingeniería de software agéntica, como ediciones multi-archivo y uso de herramientas. Su ficha de Ollama muestra una descarga de 15 GB, una ventana de contexto de 384K, licencia Apache 2.0 y un 65,8 % en SWE-bench Verified. Es la opción local más ligera aquí; Qwen3.6 27B informa la cifra de SWE-bench más alta.' },
          { q: '¿Puedo ejecutar Qwen3.6 27B y Devstral Small 2 a la vez?', a: 'No en una sola GPU de 24 GB. Qwen3.6 27B se descarga con 18–19 GB y Devstral Small 2 con 15 GB, unos 34 GB en conjunto antes del contexto. Necesitarías dos GPU de 24 GB o Apple Silicon con 64 GB o más de memoria unificada. Con una GPU, ejecuta un modelo cada vez y cambia con Ollama.' },
          { q: '¿Es seguro usar una API de DeepSeek con código de una empresa de la UE?', a: 'La API de DeepSeek procesa los datos en servidores operados por DeepSeek, una empresa constituida en China, y la Comisión Europea no ha emitido una decisión de adecuación para China. Enviarle datos personales de la UE, o código fuente con información personal, requiere una evaluación jurídica conforme al capítulo V del RGPD (artículos 44 y siguientes). Para código propietario sin datos personales, consulta a tu equipo legal. Un modelo local como Qwen3.6 27B mantiene el código en tu propio hardware y evita una transferencia a un tercero; no hace por sí solo que un proyecto cumpla el RGPD. Esta es información general, no asesoramiento jurídico.' },
          { q: '¿Qué es SWE-bench Verified y por qué centrarse en él?', a: 'SWE-bench Verified prueba, con una selección de tareas validadas por personas, si un modelo puede resolver issues reales de GitHub en proyectos Python de código abierto como Django, Flask y scikit-learn. Mide la ingeniería de software práctica mejor que pruebas aisladas a nivel de función como HumanEval. Las puntuaciones dependen mucho del andamiaje del agente, así que compara las cifras de los fabricantes con cautela.' },
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Best Models',
    title: 'Qwen3.6 مقابل DeepSeek مقابل Devstral: مقارنة نماذج البرمجة المحلية 2026',
    seoTitle: 'Qwen3.6 مقابل DeepSeek مقابل Devstral: نماذج البرمجة 2026',
    intro: 'يُعلن Qwen3.6 27B عن 77.2% في SWE-bench Verified ويعمل محليًا عبر Ollama من تنزيل بحجم 18–19 GB. ويُعلن DeepSeek V4 Flash عن 78.6% في وضع High وهو واجهة API سحابية تبدأ من 0.15 دولار لكل مليون رمز إدخال. ويُعلن Devstral Small 2 عن 65.8% في نموذج محلي بحجم 15 GB. تغطي هذه المقارنة أرقام SWE-bench والسياق والتراخيص وحساب التكلفة لكل رمز ومتطلبات العتاد واستراتيجية توزيع متعدد النماذج. جميع الأرقام من صفحات الجهات المطوّرة وبإعدادات اختبار مختلفة، لذا لا يمكن مقارنتها مباشرة.',
    metaDescription: 'مقارنة Qwen3.6 27B (77.2% في SWE-bench Verified، محلي) وDeepSeek V4 Flash (API من 0.15 دولار/مليون) وDevstral Small 2: التكلفة والسياق والعتاد والتراخيص.',
    heroImage: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-ar.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-10-17',
    readTime: '9 دقائق قراءة',
    educationalLevel: 'Intermediate',
    audience: 'مطورو البرمجيات الذين يختارون نموذج LLM محلي للكود لسير عملهم اليومي',
    primaryTerm: 'معيار نموذج LLM المحلي للكود 2026',
    leadAnswerBlock: '**يُعد Qwen3.6 27B أقوى خيار محلي في هذه المقارنة: 77.2% في SWE-bench Verified (رقم أعلنته Qwen)، وسياق 256K، وترخيص Apache 2.0، وتنزيل بحجم 18–19 GB يتطلب بطاقة 24 GB أو ذاكرة موحدة مكافئة. ويُعلن DeepSeek V4 Flash عن 78.6% في وضع High كواجهة API سحابية تبدأ من 0.15 دولار لكل مليون رمز إدخال، لكن أوزانه البالغة 284 مليار معامل بحجم الخوادم. أما Devstral Small 2 (65.8%، 15 GB) فهو الخيار المحلي الأخف. ولأن الأرقام من إعدادات اختبار مختلفة، فاعتبر الترتيب استرشاديًا. وواجهة API السحابية ترسل شيفرتك إلى طرف ثالث، لذا أبقِ الشيفرة الحساسة على نماذج محلية.**',
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
      columns: ['النموذج', 'SWE-bench Verified', 'النشر', 'السياق', 'تكلفة الإدخال ($/1M)', 'التنزيل (محلي)'],
      rows: [
        { 'النموذج': 'Qwen3.6 27B', 'SWE-bench Verified': '77.2% (Qwen)', 'النشر': 'محلي (Ollama)', 'السياق': '256K', 'تكلفة الإدخال ($/1M)': '0 دولار بعد العتاد', 'التنزيل (محلي)': '18–19 GB' },
        { 'النموذج': 'DeepSeek V4 Flash', 'SWE-bench Verified': '78.6% (وضع High)', 'النشر': 'API سحابية', 'السياق': '1M', 'تكلفة الإدخال ($/1M)': '0.15–0.30 دولار', 'التنزيل (محلي)': 'غير متاح (MoE ‏284B)' },
        { 'النموذج': 'Devstral Small 2 24B', 'SWE-bench Verified': '65.8%', 'النشر': 'محلي (Ollama)', 'السياق': '384K', 'تكلفة الإدخال ($/1M)': '0 دولار بعد العتاد', 'التنزيل (محلي)': '15 GB' },
        { 'النموذج': 'Codestral 22B', 'SWE-bench Verified': 'غير منشور', 'النشر': 'محلي (Ollama)', 'السياق': '32K', 'تكلفة الإدخال ($/1M)': '0 دولار بعد العتاد', 'التنزيل (محلي)': '13 GB' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen3.6 27B أقوى خيار محلي**: ‏77.2% في SWE-bench Verified (رقم Qwen)، تنزيل 18–19 GB، سياق 256K، Apache 2.0.',
          '**DeepSeek V4 Flash هو الخيار السحابي الاقتصادي**: ‏78.6% في وضع High (رقم DeepSeek) بسعر 0.15 دولار لكل مليون رمز إدخال خارج الذروة؛ وأوزانه البالغة 284B بحجم الخوادم.',
          '**Devstral Small 2 هو الخيار الوكيلي الأخف**: ‏65.8% في SWE-bench Verified بتنزيل 15 GB وسياق 384K.',
          '**جميع الأرقام صادرة عن الجهات المطوّرة**: إعدادات الاختبار مختلفة، لذا الدرجات استرشادية وليست مواجهة محكومة.',
          '**استراتيجية التوزيع**: الشيفرة الحساسة إلى Qwen3.6 المحلي، والمهام الضخمة غير الحساسة إلى DeepSeek API، والعمل التفاعلي أو الوكيلي إلى Devstral Small 2 المحلي.',
        ],
      },
      localCaughtUp: {
        id: 'local-caught-up',
        title: 'لماذا لحقت نماذج الكود المحلية بالنماذج السحابية',
        content: [
          'في السنوات الأولى من عصر النماذج اللغوية، كانت النماذج السحابية متقدمة بوضوح على المحلية في البرمجة. ضاقت هذه الفجوة في 2025–2026 مع وصول النماذج مفتوحة الأوزان إلى نطاق 24–30B معامل بتدريب يركز على الشيفرة.',
          'يُعلن Qwen3.6 27B، الذي صدر في أبريل 2026، عن 77.2 في SWE-bench Verified، وهو معيار لمشكلات GitHub حقيقية في مشاريع بايثون مفتوحة المصدر. وفي الجدول نفسه على بطاقة النموذج تذكر Qwen الرقم 75.0 لـ Qwen3.5-27B و80.9 لـ Claude 4.5 Opus، فيقع النموذج المفتوح قريبًا من نموذج سحابي رائد في هذا الاختبار الذي نشرته الجهة المطوّرة. هذه نتائج Qwen نفسها بإطار وكيل داخلي، وليست تحققًا مستقلًا.',
          'الأسباب الأكثر ذكرًا لهذا التقارب هي (1) بيانات تدريب تركز على الشيفرة بحجم كبير، (2) تدريب لاحق على مهام هندسة برمجيات حقيقية بدل اتباع التعليمات العامة، و(3) تكميم GGUF أفضل يحافظ على القدرة البرمجية عند دقة Q4.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يُعلن Qwen3.6 27B عن 77.2% في SWE-bench Verified ويعمل محليًا من تنزيل بحجم 18–19 GB.' },
          { type: 'plain-terms', text: 'يختبر SWE-bench Verified ما إذا كان الذكاء الاصطناعي قادرًا على حل مشكلات GitHub حقيقية في مشاريع مفتوحة المصدر مثل Django وFlask وscikit-learn. تعني درجة 77.2% أن النموذج حلّ نحو 77 من كل 100 مهمة اختبار، مقيسة بإطار الوكيل الخاص بالجهة المطوّرة.' },
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'جدول المعايير',
        image: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-ar.webp',
        imageCaption: 'SWE-bench Verified كما أعلنته كل جهة: ‏Qwen3.6 27B ‏77.2%، وDeepSeek V4 Flash ‏78.6% (وضع High)، وDevstral Small 2 ‏65.8%.',
        content: 'جميع الأرقام صادرة عن الجهات المطوّرة ومأخوذة من بطاقات النماذج وصفحات Ollama. تختلف إعدادات الاختبار بين الجهات، فاعتبر أرقام SWE-bench استرشادية لا مواجهة محكومة. لم تُعد PromptQuorum تشغيل هذه المعايير.',
        rows: [
          { 'المعيار': 'SWE-bench Verified (رقم الجهة المطوّرة)', 'Qwen3.6 27B': '77.2%', 'DeepSeek V4 Flash': '78.6% (High) / 79.0% (Max)', 'Devstral Small 2': '65.8%', 'Codestral 22B': 'غير منشور' },
          { 'المعيار': 'المعاملات (الإجمالي / النشط)', 'Qwen3.6 27B': '27B كثيف', 'DeepSeek V4 Flash': '284B / 13B نشط', 'Devstral Small 2': '24B كثيف', 'Codestral 22B': '22B كثيف' },
          { 'المعيار': 'نافذة السياق', 'Qwen3.6 27B': '256K', 'DeepSeek V4 Flash': '1M', 'Devstral Small 2': '384K', 'Codestral 22B': '32K' },
        ],
        columns: ['المعيار', 'Qwen3.6 27B', 'DeepSeek V4 Flash', 'Devstral Small 2', 'Codestral 22B'],
        tableFormat: true,
        callouts: [
          { type: 'note', text: 'رقم Qwen البالغ 77.2 يستخدم إطار الوكيل الداخلي لدى Qwen. وتُعلن DeepSeek عن 73.7 (دون تفكير) و78.6 (High) و79.0 (Max). ورقم Devstral Small 2 البالغ 65.8 مأخوذ من صفحته على Ollama. تختلف الأطر، فلا يمكن مقارنة الأرقام مباشرة.' },
          { type: 'tip', text: 'تتغير أسماء نماذج DeepSeek API. راجع api-docs.deepseek.com/quick_start/pricing قبل النشر (الأسماء الحالية: deepseek-flash وdeepseek-v4-pro).' },
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'حسابات تكلفة الـ token',
        content: [
          'تعتمد اقتصاديات نماذج البرمجة على حجم الاستخدام وحساسية المهام والعتاد. التقدير أدناه لمطوّر واحد ويستند إلى الافتراضات المذكورة؛ هو حساب حسابي وليس قياسًا. سعر الكهرباء 0.35 يورو/كيلوواط ساعة، وهو معدل ألماني نموذجي؛ راجع تعرفتك.',
          'عند 5 ملايين رمز يوميًا (جلسة مكثفة من الإكمال التلقائي وتوليد الاختبارات ومراجعة الشيفرة) وبنسبة إدخال إلى إخراج 1:2، تكلف DeepSeek API (‏deepseek-flash، بواقع 0.15 دولار إدخالًا و0.60 دولار إخراجًا لكل مليون رمز خارج الذروة) نحو 2.25 دولار يوميًا، أي نحو 560 دولارًا على 250 يوم عمل. وبأسعار الذروة (0.30 دولار إدخالًا، 1.20 دولار إخراجًا) يكلف الاستخدام نفسه نحو 4.50 دولار يوميًا، أي نحو 1,125 دولارًا سنويًا.',
          'الإعداد المحلي يستبدل ذلك بالعتاد والطاقة. بطاقة RTX 4090 بسعر مفترض 2,300 دولار، تسحب 350 واط لمدة 8 ساعات على مدى 250 يومًا، تستهلك 700 كيلوواط ساعة، أي نحو 245 يورو سنويًا. وبتجاهل أسعار الصرف يسترد العتاد تكلفته خلال نحو 7 سنوات مقابل أسعار API خارج الذروة، وخلال نحو 2.6 سنة مقابل أسعار الذروة. وفي الشيفرة الحساسة لا تقتصر المقارنة على التكلفة: فواجهة API السحابية ترسل شيفرتك إلى طرف ثالث.',
        ],
        codeBlock: `# Cost calculator: per-token math for coding LLMs (every input is an assumption)
# DeepSeek API, deepseek-flash, off-peak rates in USD per 1M tokens (api-docs.deepseek.com)
input_rate, output_rate = 0.15, 0.60
daily_tokens = 5_000_000              # per developer
blended = (input_rate * 1 + output_rate * 2) / 3   # 1:2 input:output split = $0.45/1M
daily_cost = daily_tokens / 1_000_000 * blended     # $2.25/day
annual_api = daily_cost * 250                       # ~$562/year (peak rates: ~$1,125/year)

# Local Qwen3.6 27B on an RTX 4090 (price is an assumption)
hardware_cost = 2300                  # USD
power_kwh     = 0.350 * 8 * 250       # 350 W, 8 h/day, 250 days = 700 kWh
annual_power  = power_kwh * 0.35      # EUR 0.35/kWh = ~245 per year
# Break-even vs off-peak API: hardware_cost / (annual_api - annual_power) = ~7.3 years
# Break-even vs peak API:     hardware_cost / (1125 - annual_power)       = ~2.6 years`,
        codeLanguage: 'python',
      },
      latency: {
        id: 'latency',
        title: 'واقع الكمون',
        content: 'يهم زمن الاستجابة في البرمجة التفاعلية: يصبح الإكمال التلقائي غير صالح فوق 500 ملّي ثانية، ومراجعة الشيفرة مقبولة حتى 3 ثوانٍ، والمهام الدُفعية لا تتأثر بزمن الاستجابة. لم تقس PromptQuorum هذه النماذج. يعرض الجدول اختبارًا لطرف ثالث باستخدام Ollama على RTX 4090 (‏24 GB، ‏Ollama 0.34.4، سبتمبر 2026)، وهو التشغيل المنشور الوحيد الذي وجدناه لهذه النماذج؛ وستختلف سرعاتك بحسب التكميم وطول السياق وبرامج التشغيل.',
        rows: [
          { 'الإعداد': 'Qwen3.6 27B على RTX 4090 (فك الترميز التخميني مفعّل)', 'السرعة المستمرة (رمز/ثانية)': '115.4', 'ملاحظات': 'متوسط خمس مطالبات، مخرجات 256 رمزًا' },
          { 'الإعداد': 'Qwen3.6 27B على RTX 4090 (فك الترميز التخميني معطّل)', 'السرعة المستمرة (رمز/ثانية)': '48.9', 'ملاحظات': 'إعادة بمطالبة واحدة وبالإعداد نفسه' },
          { 'الإعداد': 'Qwen3-Coder 30B على RTX 4090', 'السرعة المستمرة (رمز/ثانية)': '224.7', 'ملاحظات': 'MoE بمعاملات نشطة 3.3B' },
          { 'الإعداد': 'Devstral Small 2', 'السرعة المستمرة (رمز/ثانية)': 'لم يُقَس', 'ملاحظات': 'لم نجد تشغيلًا منشورًا' },
          { 'الإعداد': 'DeepSeek API (deepseek-flash)', 'السرعة المستمرة (رمز/ثانية)': 'لم يُقَس', 'ملاحظات': 'يعتمد على الشبكة وساعات الذروة' },
        ],
        columns: ['الإعداد', 'السرعة المستمرة (رمز/ثانية)', 'ملاحظات'],
        tableFormat: true,
        note: 'المصدر: [Ollama Models Cheat Sheet](https://computingforgeeks.com/ollama-models-cheat-sheet/) (اختبار لطرف ثالث، وليس من PromptQuorum). بحسب المقال، جعل فك الترميز التخميني (رموز المسودة) نموذج Qwen3.6 27B أسرع بنحو 2.4 مرة في ذلك الاختبار دون تغيير جودة المخرجات. لا تنشر Apple سرعات الرموز للنماذج المحلية. شغّل ollama run --verbose على عتادك للحصول على رقم موثوق. وفي الإكمال التلقائي يتجنب الاستدلال المحلي الذهاب والإياب عبر الشبكة.',
        callouts: [
          { type: 'warning', text: 'نافذة السياق الافتراضية في Ollama (المضبوطة بحسب VRAM المتاحة) ترفع الإنتاجية الظاهرية لأن عدد الرموز المعالجة أقل، لكنها تقتطع السياق. اضبط num_ctx 32768 للحصول على قياسات زمن استجابة ذات معنى في البرمجة.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'متطلبات الأجهزة',
        items: [
          '**Qwen3.6 27B Q4_K_M** (‏Ollama `qwen3.6:27b`، تنزيل 18–19 GB): بطاقة 24 GB (RTX 3090 أو RTX 4090) أو Apple Silicon بذاكرة موحدة 36–48 GB أو أكثر. لا تتسع بطاقة 16 GB للأوزان.',
          '**Devstral Small 2 24B** (‏Ollama `devstral-small-2`، تنزيل 15 GB): ‏RTX 4070 Ti Super (‏16 GB، ضيقة عند إضافة السياق) أو RTX 3090 أو RTX 4090 (‏24 GB) أو Apple Silicon بذاكرة موحدة 24 GB أو أكثر.',
          '**Codestral 22B Q4_K_M** (تنزيل 13 GB): ‏RTX 4070 Ti (‏12 GB بالحد الأدنى، و16 GB موصى بها).',
          '**تشغيل نموذجين معًا**: يبلغ Qwen3.6 27B (‏18–19 GB) مع Devstral Small 2 (‏15 GB) نحو 34 GB قبل السياق، فيلزم بطاقتا 24 GB أو Apple Silicon بذاكرة موحدة 64 GB أو أكثر، مثل Mac Studio بشريحة M5 Max (حتى 128 GB).',
          '**Apple Silicon**: جدّدت Apple تشكيلة Mac mini وMac Studio في 25 أغسطس 2026 (متاحة من 22 سبتمبر 2026) لتحل محل إعدادات M4 Pro/M4 Max. بحسب Apple يبدأ Mac mini بشريحة M5 Pro من 1,699 دولار (حتى 64 GB ذاكرة موحدة، 307 GB/s)، ويبدأ Mac Studio بشريحة M5 Max من 2,499 دولار (حتى 128 GB)، وMac Studio بشريحة M5 Ultra من 5,499 دولار (حتى 512 GB؛ ويصل إعداد 512 GB في أواخر أكتوبر). يستوعب إعداد 36–48 GB النموذج Qwen3.6 27B؛ ومع 64 GB أو أكثر يتسع Qwen3.6 27B وDevstral Small 2 معًا. لا تنشر Apple أرقام رموز في الثانية للنماذج المحلية ولم تختبر PromptQuorum هذه الشرائح، فقِس باستخدام ollama run --verbose. الأسعار بالدولار الأمريكي وقد تختلف الأسعار المحلية.',
          '**خيار Apple Silicon اقتصادي**: يبدأ Mac mini الأساسي بشريحة M6 من 899 دولارًا (حتى 32 GB ذاكرة موحدة، وحتى 170 GB/s بحسب Apple) ويستوعب Devstral Small 2 (‏15 GB) وCodestral 22B (‏13 GB) بارتياح. أما Qwen3.6 27B (‏18–19 GB) فيتسع فقط في إعداد 32 GB مع هامش ضيق للسياق. عرض نطاق ذاكرته أقل من M5 Pro (170 مقابل 307 GB/s)، مما يعني توليدًا أبطأ؛ ولم تختبر PromptQuorum شريحة M6.',
        ],
        codeBlock: `# Configuración de Ollama para Qwen3.6 27B con num_ctx y capas GPU
cat > Modelfile-qwen36 <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen36-local -f Modelfile-qwen36
ollama run qwen36-local`,
        codeLanguage: 'bash',
      },
      dispatchStrategy: {
        id: 'dispatch-strategy',
        title: 'استراتيجية التوزيع متعدد النماذج',
        image: '/images/qwen-coder-deepseek-mistral-dispatch-hero-ar.webp',
        imageCaption: 'شجرة قرار لتوزيع مهام البرمجة: الشيفرة الحساسة إلى Qwen3.6 27B المحلي، والإكمال التلقائي التفاعلي إلى Devstral Small 2 المحلي، والمهام الدُفعية غير الحساسة إلى DeepSeek API (‏0.15 دولار/مليون رمز إدخال خارج الذروة).',
        content: [
          'لا يتفوق نموذج برمجة واحد في كل المهام. يملك Qwen3.6 27B أقوى رقم SWE-bench محلي هنا. وDevstral Small 2 نموذج وكيلي أخف. وDeepSeek API هي الأرخص لكل رمز على نطاق واسع للشيفرة غير الحساسة. وطبقة توزيع تُوجّه المهام بحسب نوعها تجمع مزايا الثلاثة.',
          'مصفوفة توزيع مقترحة لفريق تطوير:',
        ],
        rows: [
          { 'نوع المهمة': 'شيفرة خاصة (بيانات العملاء)', 'النموذج الموصى به': 'Qwen3.6 27B (محلي)', 'السبب': 'تبقى الشيفرة على عتادك' },
          { 'نوع المهمة': 'إكمال تلقائي (تفاعلي)', 'النموذج الموصى به': 'Devstral Small 2 (محلي)', 'السبب': 'نموذج أخف ودون ذهاب وإياب عبر الشبكة' },
          { 'نوع المهمة': 'مراجعة شيفرة (غير حساسة)', 'النموذج الموصى به': 'DeepSeek API', 'السبب': '0.15 دولار/مليون إدخال خارج الذروة، إنتاجية عالية' },
          { 'نوع المهمة': 'إعادة هيكلة معقدة (عدة ملفات)', 'النموذج الموصى به': 'Qwen3.6 27B (محلي) + إجماع PromptQuorum', 'السبب': 'أقوى رقم SWE-bench محلي، والشيفرة تبقى محلية' },
          { 'نوع المهمة': 'توليد اختبارات دُفعي', 'النموذج الموصى به': 'DeepSeek API', 'السبب': 'محسّن التكلفة للحجم غير الحساس' },
        ],
        columns: ['نوع المهمة', 'النموذج الموصى به', 'السبب'],
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
LOCAL_CODING_MODEL=qwen36-local   # Qwen3.6 27B con num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral-small-2     # Devstral Small 2 24B

# Fallback cloud
DEEPSEEK_API_KEY=tu_clave_aqui
DEEPSEEK_MODEL=deepseek-flash

# Reglas de enrutamiento (despacho PromptQuorum)
# route: task_contains("private") OR task_contains("customer") → qwen36-local (local)
# route: task_type == "autocomplete" → devstral-small-2 (local)
# route: token_count > 50000 → deepseek-flash (cloud, solo no sensible)
# default → qwen36-local (local)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'توجّه PromptQuorum مهام البرمجة إلى Qwen3.6 المحلي للشيفرة الحساسة وإلى DeepSeek API للتوليد الضخم غير الحساس.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Qwen 3 مقابل Claude Sonnet 5 مقابل DeepSeek R2 — مقارنة كاملة 2026](/ar/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[كيفية تشغيل Qwen 3 محليًا — دليل Ollama + LM Studio](/ar/local-llms/run-qwen-locally-guide-2026)',
          '[قارن النماذج في PromptQuorum](/ar/compare)',
          '[أفضل نماذج LLM المحلية للكود في 2026](/ar/local-llms/best-local-llms-for-coding)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل Qwen3.6 27B أفضل من DeepSeek للبرمجة المحلية؟', a: 'يُعلن Qwen3.6 27B عن 77.2% في SWE-bench Verified ويعمل بالكامل على عتادك من تنزيل بحجم 18–19 GB، لذا خطّط لبطاقة 24 GB. ويُعلن DeepSeek V4 Flash عن 78.6% (وضع High) لكنه نموذج بـ 284B معامل، ولهذا يستخدمه معظم الناس عبر واجهة API السحابية بسعر 0.15 دولار لكل مليون رمز إدخال خارج الذروة. يعتمد الخيار الأفضل على حساسية البيانات والميزانية، لا على فائز وحيد. والرقمان صادران عن الجهتين المطوّرتين بإعدادات اختبار مختلفة.' },
          { q: 'ما Devstral Small 2 ولماذا يُذكر هنا؟', a: 'Devstral Small 2 نموذج بحجم 24B من Mistral AI. تستهدف سلسلة Devstral هندسة البرمجيات الوكيلية مثل التعديلات متعددة الملفات واستخدام الأدوات. وتعرض صفحته على Ollama تنزيلًا بحجم 15 GB ونافذة سياق 384K وترخيص Apache 2.0 ودرجة 65.8% في SWE-bench Verified. هو الخيار المحلي الأخف هنا؛ بينما يُعلن Qwen3.6 27B عن رقم SWE-bench أعلى.' },
          { q: 'هل يمكنني تشغيل Qwen3.6 27B وDevstral Small 2 في آن واحد؟', a: 'ليس على بطاقة 24 GB واحدة. حجم تنزيل Qwen3.6 27B هو 18–19 GB وDevstral Small 2 هو 15 GB، أي نحو 34 GB معًا قبل السياق. ستحتاج إلى بطاقتين بسعة 24 GB أو Apple Silicon بذاكرة موحدة 64 GB أو أكثر. وعلى بطاقة واحدة شغّل نموذجًا واحدًا في كل مرة وبدّل بينهما عبر Ollama.' },
          { q: 'هل DeepSeek API آمنة لشيفرة شركات الاتحاد الأوروبي؟', a: 'تعالج DeepSeek API البيانات على خوادم تشغّلها DeepSeek، وهي شركة مسجلة في الصين، ولم تُصدر المفوضية الأوروبية قرار كفاية بشأن الصين. وإرسال بيانات شخصية أوروبية، أو شيفرة مصدرية تحتوي معلومات شخصية، إليها يستلزم تقييمًا قانونيًا وفق الفصل الخامس من GDPR (المواد 44 وما بعدها). وللشيفرة المملوكة التي لا تتضمن بيانات شخصية استشر فريقك القانوني. أما النموذج المحلي مثل Qwen3.6 27B فيُبقي الشيفرة على عتادك ويتجنب النقل إلى طرف ثالث؛ لكنه لا يجعل المشروع وحده متوافقًا مع GDPR. هذه معلومات عامة وليست استشارة قانونية.' },
          { q: 'ما SWE-bench Verified ولماذا نركز عليه؟', a: 'يختبر SWE-bench Verified، عبر مجموعة مهام راجعها بشر، ما إذا كان النموذج قادرًا على حل مشكلات GitHub حقيقية في مشاريع بايثون مفتوحة المصدر مثل Django وFlask وscikit-learn. وهو يقيس هندسة البرمجيات العملية أكثر من اختبارات الدوال المعزولة مثل HumanEval. تعتمد الدرجات كثيرًا على إطار الوكيل، لذا قارن أرقام الجهات المطوّرة بحذر.' },
        ],
      },
    },
  },
  // VERIFY: seção "Matemática de custo por token" é um modelo financeiro ancorado em USD (API do DeepSeek cobrada em dólar) com eletricidade a € 0,35/kWh como premissa explícita. Os valores de varejo brasileiro (RTX 4090 em R$, eletricidade em R$/kWh) que a versão anterior citava foram removidos por não terem fonte verificável (consulta em out/2026: a ANEEL é citada pela imprensa com R$ 851/MWh e R$ 998/MWh sem tributos, e comparadores listam a RTX 4090 entre cerca de R$ 14 mil e R$ 23 mil); a prosa orienta o leitor a usar a própria tarifa e o preço local. Reinserir números só com fonte primária datada.
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Best Models',
    title: 'Qwen3.6 vs DeepSeek vs Devstral: comparação de modelos de código locais 2026',
    seoTitle: 'Qwen3.6 vs DeepSeek vs Devstral: modelos de código 2026',
    intro: 'O Qwen3.6 27B informa 77,2% no SWE-bench Verified e roda localmente com o Ollama a partir de um download de 18–19 GB. O DeepSeek V4 Flash informa 78,6% no modo High e é uma API na nuvem a partir de US$ 0,15 por milhão de tokens de entrada. O Devstral Small 2 informa 65,8% em um modelo local de 15 GB. Esta comparação cobre números do SWE-bench, contexto, licenças, custo por token, requisitos de hardware e uma estratégia de despacho multimodelo. Todos os números vêm de páginas dos fabricantes e usam configurações de teste diferentes, portanto não são diretamente comparáveis.',
    metaDescription: 'Qwen3.6 27B (77,2% SWE-bench Verified, local), DeepSeek V4 Flash (API desde US$ 0,15/1M) e Devstral Small 2: custo, contexto, hardware, licenças.',
    heroImage: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-pt.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-10-17',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores de software que escolhem um LLM local de código para seus fluxos de trabalho diários',
    primaryTerm: 'benchmark LLM local de código 2026',
    leadAnswerBlock: '**O Qwen3.6 27B é a melhor opção local desta comparação: 77,2% no SWE-bench Verified (número da Qwen), contexto de 256K, Apache 2.0 e um download de 18–19 GB que exige uma GPU de 24 GB ou memória unificada equivalente. O DeepSeek V4 Flash informa 78,6% no modo High como API na nuvem a partir de US$ 0,15 por milhão de tokens de entrada, mas seus pesos de 284 bilhões de parâmetros são de classe servidor. O Devstral Small 2 (65,8%, 15 GB) é a opção local mais leve. Como os números vêm de configurações de teste diferentes, trate o ranking como indicativo. Uma API na nuvem envia seu código a terceiros: mantenha o código sensível em modelos locais.**',
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor LLM de código local em 2026: Qwen3.6, DeepSeek ou Devstral?',
        answer: 'O Qwen3.6 27B informa 77,2% no SWE-bench Verified e roda localmente a partir de um download de 18–19 GB, então planeje uma GPU de 24 GB. O DeepSeek V4 Flash informa 78,6% (modo High) como API na nuvem a US$ 0,15 por milhão de tokens de entrada (fora do horário de pico, sem cache). O Devstral Small 2 informa 65,8% em um modelo local de 15 GB. As pontuações vêm de configurações de fabricantes diferentes: são indicativas, não um teste controlado. Para código sensível, o Qwen3.6 local o mantém no seu hardware; para volume não sensível, uma API do DeepSeek é a opção mais barata.',
        bullets: [
          'Qwen3.6 27B: 77,2% SWE-bench Verified, contexto de 256K, download de 18–19 GB, Apache 2.0',
          'DeepSeek V4 Flash: 78,6% (modo High), API na nuvem a partir de US$ 0,15/1M tokens de entrada',
          'Devstral Small 2: 65,8% SWE-bench Verified, 15 GB, contexto de 384K, Apache 2.0',
          'Modelos locais mantêm o código no seu hardware; uma API na nuvem o envia ao provedor',
          'Estratégia de despacho: Qwen local para código privado, API do DeepSeek para tarefas em massa não sensíveis',
        ],
        updatedDate: '2026-10-17',
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
      columns: ['Modelo', 'SWE-bench Verified', 'Implantação', 'Contexto', 'Custo de entrada ($/1M)', 'Download (local)'],
      rows: [
        { Modelo: 'Qwen3.6 27B', 'SWE-bench Verified': '77,2% (Qwen)', 'Implantação': 'Local (Ollama)', Contexto: '256K', 'Custo de entrada ($/1M)': 'US$ 0 após hardware', 'Download (local)': '18–19 GB' },
        { Modelo: 'DeepSeek V4 Flash', 'SWE-bench Verified': '78,6% (modo High)', 'Implantação': 'API na nuvem', Contexto: '1M', 'Custo de entrada ($/1M)': 'US$ 0,15–0,30', 'Download (local)': 'N/A (MoE 284B)' },
        { Modelo: 'Devstral Small 2 24B', 'SWE-bench Verified': '65,8%', 'Implantação': 'Local (Ollama)', Contexto: '384K', 'Custo de entrada ($/1M)': 'US$ 0 após hardware', 'Download (local)': '15 GB' },
        { Modelo: 'Codestral 22B', 'SWE-bench Verified': 'Não publicado', 'Implantação': 'Local (Ollama)', Contexto: '32K', 'Custo de entrada ($/1M)': 'US$ 0 após hardware', 'Download (local)': '13 GB' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**O Qwen3.6 27B é a melhor opção local**: 77,2% no SWE-bench Verified (número da Qwen), download de 18–19 GB, contexto de 256K, Apache 2.0.',
          '**O DeepSeek V4 Flash é a opção econômica na nuvem**: 78,6% no modo High (número da DeepSeek) a US$ 0,15 por milhão de tokens de entrada fora do pico; seus pesos de 284B são de classe servidor.',
          '**O Devstral Small 2 é a opção agêntica mais leve**: 65,8% no SWE-bench Verified com download de 15 GB e contexto de 384K.',
          '**Todos os números são dos fabricantes**: as configurações de teste diferem, então as pontuações são indicativas e não um confronto controlado.',
          '**Estratégia de despacho**: código sensível para o Qwen3.6 local, tarefas em massa não sensíveis para uma API do DeepSeek e trabalho interativo ou agêntico para o Devstral Small 2 local.',
        ],
      },
      localCaughtUp: {
        id: 'local-caught-up',
        title: 'Por que os modelos locais de código alcançaram os da nuvem',
        content: [
          'Nos primeiros anos da era dos LLMs, os modelos na nuvem estavam claramente à frente dos locais em programação. Essa diferença diminuiu em 2025–2026, quando modelos open-weight de 24–30 bilhões de parâmetros receberam treinamento focado em código.',
          'O Qwen3.6 27B, lançado em abril de 2026, informa 77,2 no SWE-bench Verified, um benchmark de issues reais do GitHub em projetos Python de código aberto. Na mesma tabela do seu model card, a Qwen lista 75,0 para o Qwen3.5-27B e 80,9 para o Claude 4.5 Opus, de modo que o modelo aberto fica perto de um modelo de nuvem de ponta neste teste divulgado pelo fabricante. São resultados da própria Qwen com um arcabouço de agente interno, não uma verificação independente.',
          'As razões mais citadas para a convergência são (1) dados de treinamento focados em código em grande escala, (2) pós-treinamento em tarefas reais de engenharia de software em vez de seguir instruções genéricas e (3) melhor quantização GGUF, que preserva a capacidade de programar em precisão Q4.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Qwen3.6 27B informa 77,2% no SWE-bench Verified e roda localmente a partir de um download de 18–19 GB.' },
          { type: 'plain-terms', text: 'O SWE-bench Verified testa se uma IA consegue resolver issues reais do GitHub em projetos de código aberto como Django, Flask e scikit-learn. Uma pontuação de 77,2% significa que o modelo resolveu cerca de 77 de cada 100 tarefas de teste, medido com o arcabouço de agente do próprio fabricante.' },
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Tabela de benchmarks',
        image: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-pt.webp',
        imageCaption: 'SWE-bench Verified conforme cada fabricante: Qwen3.6 27B 77,2%, DeepSeek V4 Flash 78,6% (modo High), Devstral Small 2 65,8%.',
        content: 'Todos os números são dos fabricantes, extraídos de model cards e páginas do Ollama. As configurações de teste diferem entre fabricantes, então trate os números do SWE-bench como indicativos, não como um confronto controlado. A PromptQuorum não executou esses benchmarks novamente.',
        rows: [
          { Benchmark: 'SWE-bench Verified (número do fabricante)', 'Qwen3.6 27B': '77,2%', 'DeepSeek V4 Flash': '78,6% (High) / 79,0% (Max)', 'Devstral Small 2': '65,8%', 'Codestral 22B': 'Não publicado' },
          { Benchmark: 'Parâmetros (total / ativos)', 'Qwen3.6 27B': '27B denso', 'DeepSeek V4 Flash': '284B / 13B ativos', 'Devstral Small 2': '24B denso', 'Codestral 22B': '22B denso' },
          { Benchmark: 'Janela de contexto', 'Qwen3.6 27B': '256K', 'DeepSeek V4 Flash': '1M', 'Devstral Small 2': '384K', 'Codestral 22B': '32K' },
        ],
        columns: ['Benchmark', 'Qwen3.6 27B', 'DeepSeek V4 Flash', 'Devstral Small 2', 'Codestral 22B'],
        tableFormat: true,
        callouts: [
          { type: 'note', text: 'O 77,2 da Qwen usa o arcabouço de agente interno da Qwen. A DeepSeek informa 73,7 (sem raciocínio), 78,6 (High) e 79,0 (Max). O 65,8 do Devstral Small 2 vem da sua página no Ollama. Os arcabouços diferem, então os números não são diretamente comparáveis.' },
          { type: 'tip', text: 'Os nomes de modelo da API do DeepSeek mudam. Confira api-docs.deepseek.com/quick_start/pricing antes da implantação (nomes atuais: deepseek-flash e deepseek-v4-pro).' },
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'Matemática de custo por token',
        content: [
          'A economia dos LLMs de código depende do volume de uso, da sensibilidade das tarefas e do hardware. A projeção abaixo é para um desenvolvedor e se baseia nas premissas indicadas: é aritmética, não uma medição. A eletricidade é calculada a € 0,35/kWh, uma tarifa alemã típica; verifique a sua própria tarifa.',
          'Com 5 milhões de tokens por dia (uma sessão intensa de autocompletar, geração de testes e revisão de código) e proporção de entrada para saída de 1:2, a API do DeepSeek (deepseek-flash, US$ 0,15 de entrada e US$ 0,60 de saída por milhão de tokens fora do pico) custa cerca de US$ 2,25 por dia, ou aproximadamente US$ 560 em 250 dias úteis. Nas tarifas de pico (US$ 0,30 de entrada, US$ 1,20 de saída), o mesmo uso custa cerca de US$ 4,50 por dia, ou aproximadamente US$ 1.125 por ano.',
          'Uma configuração local troca isso por hardware e energia. Uma RTX 4090 a US$ 2.300 (premissa), consumindo 350 W por 8 horas em 250 dias, usa 700 kWh, cerca de € 245 por ano. Ignorando taxas de câmbio, o hardware se paga em cerca de 7 anos contra as tarifas fora do pico da API e em cerca de 2,6 anos contra as tarifas de pico. Para código sensível, a comparação não é só de custo: uma API na nuvem envia seu código a terceiros. Para o Brasil, substitua o preço da GPU e a tarifa pelos valores que você realmente paga em reais (R$/kWh com impostos, conforme a sua fatura); os valores em dólar e em euro acima são apenas premissas explícitas.',
        ],
        codeBlock: `# Cost calculator: per-token math for coding LLMs (every input is an assumption)
# DeepSeek API, deepseek-flash, off-peak rates in USD per 1M tokens (api-docs.deepseek.com)
input_rate, output_rate = 0.15, 0.60
daily_tokens = 5_000_000              # per developer
blended = (input_rate * 1 + output_rate * 2) / 3   # 1:2 input:output split = $0.45/1M
daily_cost = daily_tokens / 1_000_000 * blended     # $2.25/day
annual_api = daily_cost * 250                       # ~$562/year (peak rates: ~$1,125/year)

# Local Qwen3.6 27B on an RTX 4090 (price is an assumption)
hardware_cost = 2300                  # USD
power_kwh     = 0.350 * 8 * 250       # 350 W, 8 h/day, 250 days = 700 kWh
annual_power  = power_kwh * 0.35      # EUR 0.35/kWh = ~245 per year
# Break-even vs off-peak API: hardware_cost / (annual_api - annual_power) = ~7.3 years
# Break-even vs peak API:     hardware_cost / (1125 - annual_power)       = ~2.6 years`,
        codeLanguage: 'python',
      },
      latency: {
        id: 'latency',
        title: 'A realidade da latência',
        content: 'A latência importa na programação interativa: o autocompletar fica inutilizável acima de 500 ms, a revisão de código é aceitável até 3 s e tarefas em lote são insensíveis à latência. A PromptQuorum não mediu esses modelos. A tabela mostra um teste de terceiros com o Ollama em uma RTX 4090 (24 GB, Ollama 0.34.4, setembro de 2026), a única medição publicada que encontramos para esses modelos; suas velocidades vão variar conforme a quantização, o tamanho do contexto e os drivers.',
        rows: [
          { 'Configuração': 'Qwen3.6 27B, RTX 4090 (draft decoding ligado)', 'Sustentado (tok/s)': '115,4', 'Observações': 'Média de cinco prompts, 256 tokens de saída' },
          { 'Configuração': 'Qwen3.6 27B, RTX 4090 (draft decoding desligado)', 'Sustentado (tok/s)': '48,9', 'Observações': 'Um único prompt, mesma configuração' },
          { 'Configuração': 'Qwen3-Coder 30B, RTX 4090', 'Sustentado (tok/s)': '224,7', 'Observações': 'MoE com 3,3B de parâmetros ativos' },
          { 'Configuração': 'Devstral Small 2', 'Sustentado (tok/s)': 'Não medido', 'Observações': 'Nenhuma medição publicada encontrada' },
          { 'Configuração': 'API do DeepSeek (deepseek-flash)', 'Sustentado (tok/s)': 'Não medido', 'Observações': 'Depende da rede e dos horários de pico' },
        ],
        columns: ['Configuração', 'Sustentado (tok/s)', 'Observações'],
        tableFormat: true,
        note: 'Fonte: [Ollama Models Cheat Sheet](https://computingforgeeks.com/ollama-models-cheat-sheet/) (teste de terceiros, não da PromptQuorum). Segundo o artigo, a decodificação especulativa (draft tokens) deixou o Qwen3.6 27B cerca de 2,4 vezes mais rápido nesse teste sem alterar a qualidade da saída. A Apple não publica velocidades em tokens para LLMs locais. Execute ollama run --verbose no seu próprio hardware para um número confiável. No autocompletar, a inferência local evita a ida e volta pela rede.',
        callouts: [
          { type: 'warning', text: 'A janela de contexto padrão do Ollama (ajustada à VRAM disponível) aumenta a vazão aparente porque menos tokens são processados, mas trunca o contexto. Defina num_ctx 32768 para medições de latência de programação relevantes.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware',
        items: [
          '**Qwen3.6 27B Q4_K_M** (Ollama `qwen3.6:27b`, download de 18–19 GB): uma GPU de 24 GB (RTX 3090, RTX 4090) ou Apple Silicon com 36–48 GB ou mais de memória unificada. Uma placa de 16 GB não comporta os pesos.',
          '**Devstral Small 2 24B** (Ollama `devstral-small-2`, download de 15 GB): RTX 4070 Ti Super (16 GB, apertada ao adicionar contexto), RTX 3090 ou RTX 4090 (24 GB), ou Apple Silicon com 24 GB ou mais de memória unificada.',
          '**Codestral 22B Q4_K_M** (download de 13 GB): RTX 4070 Ti (12 GB no limite, 16 GB recomendado).',
          '**Rodar dois modelos ao mesmo tempo**: Qwen3.6 27B (18–19 GB) mais Devstral Small 2 (15 GB) somam cerca de 34 GB antes do contexto, então são necessárias duas GPUs de 24 GB ou Apple Silicon com 64 GB ou mais de memória unificada, por exemplo um Mac Studio com M5 Max (até 128 GB).',
          '**Apple Silicon**: a Apple renovou a linha Mac mini e Mac Studio em 25 de agosto de 2026 (disponível a partir de 22 de setembro de 2026), substituindo as configurações M4 Pro/M4 Max. Segundo a Apple, o Mac mini com M5 Pro começa em US$ 1.699 (até 64 GB de memória unificada, 307 GB/s), o Mac Studio com M5 Max em US$ 2.499 (até 128 GB) e o Mac Studio com M5 Ultra em US$ 5.499 (até 512 GB; a configuração de 512 GB chega no fim de outubro). Uma configuração de 36–48 GB comporta o Qwen3.6 27B; com 64 GB ou mais cabem juntos o Qwen3.6 27B e o Devstral Small 2. A Apple não publica números de tokens por segundo para LLMs locais e a PromptQuorum não avaliou esses chips: meça com ollama run --verbose. Preços em dólares americanos; os preços locais podem variar.',
          '**Opção econômica de Apple Silicon**: o Mac mini de entrada com M6 começa em US$ 899 (até 32 GB de memória unificada, até 170 GB/s segundo a Apple) e comporta com folga o Devstral Small 2 (15 GB) e o Codestral 22B (13 GB). O Qwen3.6 27B (18–19 GB) só cabe na configuração de 32 GB, com pouca margem para o contexto. A largura de banda de memória é menor que a do M5 Pro (170 contra 307 GB/s), o que significa geração mais lenta; a PromptQuorum não avaliou o M6.',
        ],
        codeBlock: `# Configuração do Ollama para Qwen3.6 27B com num_ctx e camadas de GPU
cat > Modelfile-qwen36 <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen36-local -f Modelfile-qwen36
ollama run qwen36-local`,
        codeLanguage: 'bash',
      },
      dispatchStrategy: {
        id: 'dispatch-strategy',
        title: 'Estratégia de despacho multimodelo',
        image: '/images/qwen-coder-deepseek-mistral-dispatch-hero-pt.webp',
        imageCaption: 'Árvore de decisão para o despacho de tarefas de código: código sensível vai para o Qwen3.6 27B local, autocompletar interativo para o Devstral Small 2 local e tarefas em lote não sensíveis para a API do DeepSeek (US$ 0,15/1M tokens de entrada fora do pico).',
        content: [
          'Nenhum modelo de código vence em todas as tarefas. O Qwen3.6 27B tem o melhor número local de SWE-bench aqui. O Devstral Small 2 é um modelo agêntico mais leve. Uma API do DeepSeek é a mais barata por token em escala para código não sensível. Uma camada de despacho que roteia as tarefas por tipo aproveita as vantagens dos três.',
          'Uma matriz de despacho sugerida para uma equipe de desenvolvimento:',
        ],
        rows: [
          { 'Tipo de tarefa': 'Código privado (dados de clientes)', 'Modelo recomendado': 'Qwen3.6 27B (local)', 'Por quê': 'O código permanece no seu hardware' },
          { 'Tipo de tarefa': 'Autocompletar (interativo)', 'Modelo recomendado': 'Devstral Small 2 (local)', 'Por quê': 'Modelo mais leve, sem ida e volta pela rede' },
          { 'Tipo de tarefa': 'Revisão de código (não sensível)', 'Modelo recomendado': 'API do DeepSeek', 'Por quê': 'US$ 0,15/1M de entrada fora do pico, alto desempenho' },
          { 'Tipo de tarefa': 'Refatoração complexa (vários arquivos)', 'Modelo recomendado': 'Qwen3.6 27B (local) + consenso PromptQuorum', 'Por quê': 'Melhor número local de SWE-bench, código local' },
          { 'Tipo de tarefa': 'Geração de testes em lote', 'Modelo recomendado': 'API do DeepSeek', 'Por quê': 'Otimizado em custo para volume não sensível' },
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
LOCAL_CODING_MODEL=qwen36-local   # Qwen3.6 27B com num_ctx 32768
LOCAL_AUTOCOMPLETE_MODEL=devstral-small-2     # Devstral Small 2 24B

# Fallback em nuvem
DEEPSEEK_API_KEY=sua_chave_aqui
DEEPSEEK_MODEL=deepseek-flash

# Regras de roteamento (despacho PromptQuorum)
# route: task_contains("private") OR task_contains("customer") -> qwen36-local (local)
# route: task_type == "autocomplete" -> devstral (local)
# route: token_count > 50000 -> deepseek-chat (nuvem, apenas nao sensivel)
# default -> qwen36-local (local)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'A PromptQuorum roteia tarefas de código para o Qwen3.6 local em código sensível e para uma API do DeepSeek na geração em massa não sensível.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2 — Comparação completa 2026](/pt/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[Como executar o Qwen 3 localmente — Guia Ollama + LM Studio](/pt/local-llms/run-qwen-locally-guide-2026)',
          '[Comparar modelos no PromptQuorum](/pt/compare)',
          '[Os melhores LLMs locais para código em 2026](/pt/local-llms/best-local-llms-for-coding)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'O Qwen3.6 27B é melhor que o DeepSeek para programar localmente?', a: 'O Qwen3.6 27B informa 77,2% no SWE-bench Verified e roda totalmente no seu hardware a partir de um download de 18–19 GB, então planeje uma GPU de 24 GB. O DeepSeek V4 Flash informa 78,6% (modo High), mas é um modelo de 284B parâmetros, por isso a maioria o usa pela API na nuvem a US$ 0,15 por milhão de tokens de entrada fora do pico. A melhor escolha depende da sensibilidade dos dados e do orçamento, não de um único vencedor. Os dois números são dos fabricantes e usam configurações de teste diferentes.' },
          { q: 'O que é o Devstral Small 2 e por que ele é citado aqui?', a: 'O Devstral Small 2 é um modelo de 24B da Mistral AI. A linha Devstral mira engenharia de software agêntica, como edições em vários arquivos e uso de ferramentas. A página dele no Ollama mostra download de 15 GB, janela de contexto de 384K, licença Apache 2.0 e 65,8% no SWE-bench Verified. É a opção local mais leve aqui; o Qwen3.6 27B informa o número de SWE-bench mais alto.' },
          { q: 'Posso rodar o Qwen3.6 27B e o Devstral Small 2 ao mesmo tempo?', a: 'Não em uma única GPU de 24 GB. O Qwen3.6 27B tem download de 18–19 GB e o Devstral Small 2 de 15 GB, cerca de 34 GB juntos antes do contexto. Você precisaria de duas GPUs de 24 GB ou Apple Silicon com 64 GB ou mais de memória unificada. Com uma GPU, rode um modelo por vez e alterne pelo Ollama.' },
          { q: 'Uma API do DeepSeek é segura para código de empresas da UE?', a: 'A API do DeepSeek processa dados em servidores operados pela DeepSeek, empresa constituída na China, e a Comissão Europeia não emitiu decisão de adequação para a China. Enviar a ela dados pessoais da UE, ou código-fonte com informações pessoais, exige avaliação jurídica conforme o Capítulo V do GDPR (artigos 44 e seguintes). Para código proprietário sem dados pessoais, consulte seu time jurídico. Um modelo local como o Qwen3.6 27B mantém o código no seu próprio hardware e evita a transferência a terceiros; isso não torna, por si só, um projeto conforme à legislação. Esta é uma informação geral, não aconselhamento jurídico.' },
          { q: 'O que é o SWE-bench Verified e por que focar nele?', a: 'O SWE-bench Verified testa, com uma seleção de tarefas validadas por pessoas, se um modelo consegue resolver issues reais do GitHub em projetos Python de código aberto como Django, Flask e scikit-learn. Ele mede engenharia de software prática melhor do que testes isolados em nível de função, como o HumanEval. As pontuações dependem muito do arcabouço do agente, então compare os números dos fabricantes com cuidado.' },
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Best Models',
    title: 'Qwen3.6 vs DeepSeek vs Devstral: 로컬 코딩 모델 비교 2026',
    seoTitle: 'Qwen3.6 vs DeepSeek vs Devstral: 코딩 모델 2026',
    intro: 'Qwen3.6 27B는 SWE-bench Verified 77.2%를 보고했으며 18–19 GB 다운로드로 Ollama에서 로컬 실행됩니다. DeepSeek V4 Flash는 High 모드 78.6%를 보고했으며 입력 100만 토큰당 $0.15부터 쓰는 클라우드 API입니다. Devstral Small 2는 15 GB 로컬 모델에서 65.8%를 보고했습니다. 이 비교는 SWE-bench 수치, 컨텍스트, 라이선스, 토큰당 비용 계산, 하드웨어 요구 사항, 멀티 모델 디스패치 전략을 다룹니다. 모든 수치는 벤더 페이지에서 가져왔고 테스트 환경이 서로 달라 직접 비교할 수 없습니다.',
    metaDescription: 'Qwen3.6 27B(SWE-bench Verified 77.2%), DeepSeek V4 Flash(API $0.15/1M~), Devstral Small 2 비교: 비용, 컨텍스트, 라이선스.',
    heroImage: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-ko.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-10-17',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    audience: '일상적인 개발 워크플로우에서 사용할 로컬 코딩 LLM을 선택하는 소프트웨어 개발자',
    primaryTerm: '로컬 코딩 LLM 벤치마크 2026',
    leadAnswerBlock: '**Qwen3.6 27B는 이 비교에서 가장 강력한 로컬 옵션입니다. SWE-bench Verified 77.2%(Qwen 발표), 256K 컨텍스트, Apache 2.0, 24 GB GPU 또는 동급 통합 메모리가 필요한 18–19 GB 다운로드입니다. DeepSeek V4 Flash는 High 모드 78.6%를 보고했고 입력 100만 토큰당 $0.15부터 쓰는 클라우드 API이지만, 2,840억 파라미터 가중치는 서버급입니다. Devstral Small 2(65.8%, 15 GB)는 더 가벼운 로컬 옵션입니다. 수치가 서로 다른 벤더 테스트 환경에서 나왔으므로 순위는 참고용으로만 보십시오. 클라우드 API는 코드를 제3자에게 보내므로 민감한 코드는 로컬 모델에 두십시오.**',
    quickAnswerTop: {
      ko: {
        question: '2026년 최고의 로컬 코딩 LLM은? Qwen3.6, DeepSeek, Devstral 비교',
        answer: 'Qwen3.6 27B는 SWE-bench Verified 77.2%를 보고했고 18–19 GB 다운로드로 로컬 실행되므로 24 GB GPU를 계획하십시오. DeepSeek V4 Flash는 High 모드 78.6%를 보고했으며 클라우드 API로 입력 100만 토큰당 $0.15입니다(비피크 시간, 캐시 미적중 기준). Devstral Small 2는 15 GB 로컬 모델에서 65.8%를 보고했습니다. 점수는 벤더마다 다른 환경에서 나온 것이어서 통제된 테스트가 아니라 참고용입니다. 민감한 코드는 로컬 Qwen3.6이 내 하드웨어에 남기고, 민감하지 않은 대량 작업에는 DeepSeek API가 가장 저렴합니다.',
        bullets: [
          'Qwen3.6 27B: SWE-bench Verified 77.2%, 256K 컨텍스트, 18–19 GB 다운로드, Apache 2.0',
          'DeepSeek V4 Flash: 78.6%(High 모드), 입력 100만 토큰당 $0.15부터 클라우드 API',
          'Devstral Small 2: SWE-bench Verified 65.8%, 15 GB, 384K 컨텍스트, Apache 2.0',
          '로컬 모델은 코드를 내 하드웨어에 두고, 클라우드 API는 제공업체로 보냅니다',
          '디스패치 전략: 비공개 코드는 로컬 Qwen, 민감하지 않은 대량 작업은 DeepSeek API',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: '핵심 요점', anchor: '#key-takeaways' },
      { label: '로컬 코딩 모델이 따라잡은 이유', anchor: '#local-caught-up' },
      { label: '벤치마크 표', anchor: '#benchmark-table' },
      { label: '토큰당 비용 계산', anchor: '#cost-math' },
      { label: '실제 지연 시간', anchor: '#latency' },
      { label: '하드웨어 요구 사항', anchor: '#hardware' },
      { label: '멀티 모델 디스패치 전략', anchor: '#dispatch-strategy' },
      { label: 'PromptQuorum 연동', anchor: '#promptquorum' },
      { label: '관련 자료', anchor: '#related-reading' },
      { label: '자주 묻는 질문', anchor: '#faq' },
    ],
    comparisonTable: {
      columns: ['모델', 'SWE-bench Verified', '배포 방식', '컨텍스트', '입력 비용 ($/1M)', '다운로드 (로컬)'],
      rows: [
        { '모델': 'Qwen3.6 27B', 'SWE-bench Verified': '77.2% (Qwen)', '배포 방식': '로컬 (Ollama)', '컨텍스트': '256K', '입력 비용 ($/1M)': '하드웨어 후 $0', '다운로드 (로컬)': '18–19 GB' },
        { '모델': 'DeepSeek V4 Flash', 'SWE-bench Verified': '78.6% (High 모드)', '배포 방식': '클라우드 API', '컨텍스트': '1M', '입력 비용 ($/1M)': '$0.15–0.30', '다운로드 (로컬)': '해당 없음 (MoE 284B)' },
        { '모델': 'Devstral Small 2 24B', 'SWE-bench Verified': '65.8%', '배포 방식': '로컬 (Ollama)', '컨텍스트': '384K', '입력 비용 ($/1M)': '하드웨어 후 $0', '다운로드 (로컬)': '15 GB' },
        { '모델': 'Codestral 22B', 'SWE-bench Verified': '미공개', '배포 방식': '로컬 (Ollama)', '컨텍스트': '32K', '입력 비용 ($/1M)': '하드웨어 후 $0', '다운로드 (로컬)': '13 GB' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen3.6 27B가 가장 강력한 로컬 옵션**: SWE-bench Verified 77.2%(Qwen 발표), 18–19 GB 다운로드, 256K 컨텍스트, Apache 2.0.',
          '**DeepSeek V4 Flash는 저렴한 클라우드 옵션**: High 모드 78.6%(DeepSeek 발표), 비피크 시간 입력 100만 토큰당 $0.15; 284B 가중치는 서버급.',
          '**Devstral Small 2는 더 가벼운 에이전트형 옵션**: 15 GB 다운로드와 384K 컨텍스트에서 SWE-bench Verified 65.8%.',
          '**모든 수치는 벤더 발표값**: 테스트 환경이 달라 점수는 통제된 직접 비교가 아니라 참고용입니다.',
          '**디스패치 전략**: 민감한 코드는 로컬 Qwen3.6, 민감하지 않은 대량 작업은 DeepSeek API, 대화형 또는 에이전트형 작업은 로컬 Devstral Small 2로 보냅니다.',
        ],
      },
      localCaughtUp: {
        id: 'local-caught-up',
        title: '로컬 코딩 모델이 따라잡은 이유',
        content: [
          'LLM 시대 초기 몇 년 동안 클라우드 모델은 코딩 작업에서 로컬 모델을 분명히 앞섰습니다. 그 격차는 2025–2026년에 코딩 중심 학습을 받은 24–30B급 오픈 웨이트 모델이 등장하면서 줄었습니다.',
          '2026년 4월에 공개된 Qwen3.6 27B는 오픈소스 Python 프로젝트의 실제 GitHub 이슈로 구성된 벤치마크인 SWE-bench Verified에서 77.2를 보고했습니다. 같은 모델 카드 표에서 Qwen은 Qwen3.5-27B 75.0, Claude 4.5 Opus 80.9를 제시하므로, 이 벤더 발표 테스트에서 오픈 모델은 선두 클라우드 모델에 가깝습니다. 이는 Qwen이 자체 에이전트 환경으로 낸 결과이며 독립 검증이 아닙니다.',
          '이러한 수렴의 이유로 흔히 꼽히는 것은 (1) 대규모 코딩 중심 학습 데이터, (2) 일반적인 지시 따르기가 아니라 실제 소프트웨어 엔지니어링 작업에 대한 후속 학습, (3) Q4 정밀도에서도 코딩 능력을 보존하는 더 나은 GGUF 양자화입니다.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.6 27B는 SWE-bench Verified 77.2%를 보고했으며 18–19 GB 다운로드로 로컬 실행됩니다.' },
          { type: 'plain-terms', text: 'SWE-bench Verified는 AI가 Django, Flask, scikit-learn 같은 오픈소스 프로젝트의 실제 GitHub 이슈를 해결할 수 있는지 시험합니다. 77.2%는 벤더 자체 에이전트 환경으로 측정했을 때 테스트 과제 100개 중 약 77개를 해결했다는 뜻입니다.' },
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: '벤치마크 표',
        image: '/images/qwen-coder-deepseek-mistral-swe-bench-hero-ko.webp',
        imageCaption: '벤더별 SWE-bench Verified: Qwen3.6 27B 77.2%, DeepSeek V4 Flash 78.6%(High 모드), Devstral Small 2 65.8%.',
        content: '모든 수치는 모델 카드와 Ollama 페이지에서 가져온 벤더 발표값입니다. 벤더마다 테스트 환경이 다르므로 SWE-bench 수치는 통제된 직접 비교가 아니라 참고용으로 보십시오. PromptQuorum은 이 벤치마크를 다시 실행하지 않았습니다.',
        rows: [
          { '벤치마크': 'SWE-bench Verified (벤더 발표)', 'Qwen3.6 27B': '77.2%', 'DeepSeek V4 Flash': '78.6% (High) / 79.0% (Max)', 'Devstral Small 2': '65.8%', 'Codestral 22B': '미공개' },
          { '벤치마크': '파라미터 (전체 / 활성)', 'Qwen3.6 27B': '27B 덴스', 'DeepSeek V4 Flash': '284B / 활성 13B', 'Devstral Small 2': '24B 덴스', 'Codestral 22B': '22B 덴스' },
          { '벤치마크': '컨텍스트 윈도우', 'Qwen3.6 27B': '256K', 'DeepSeek V4 Flash': '1M', 'Devstral Small 2': '384K', 'Codestral 22B': '32K' },
        ],
        columns: ['벤치마크', 'Qwen3.6 27B', 'DeepSeek V4 Flash', 'Devstral Small 2', 'Codestral 22B'],
        tableFormat: true,
        callouts: [
          { type: 'note', text: 'Qwen의 77.2는 Qwen 내부 에이전트 환경을 사용한 값입니다. DeepSeek은 73.7(비사고), 78.6(High), 79.0(Max)을 보고합니다. Devstral Small 2의 65.8은 Ollama 페이지에서 가져왔습니다. 환경이 달라 수치를 직접 비교할 수 없습니다.' },
          { type: 'tip', text: 'DeepSeek API 모델 이름은 바뀝니다. 배포 전에 api-docs.deepseek.com/quick_start/pricing을 확인하십시오(현재 이름: deepseek-flash, deepseek-v4-pro).' },
        ],
      },
      costMath: {
        id: 'cost-math',
        title: '토큰당 비용 계산',
        content: [
          '코딩 LLM의 경제성은 사용량, 작업 민감도, 하드웨어에 따라 달라집니다. 아래 추정은 개발자 한 명 기준이며 명시한 가정에 근거한 산술이지 측정값이 아닙니다. 전기 요금은 독일의 일반적인 요율인 €0.35/kWh로 계산했으니 본인의 요금제를 확인하십시오.',
          '하루 500만 토큰(자동 완성, 테스트 생성, 코드 리뷰를 많이 하는 세션)과 입력:출력 1:2 비율에서 DeepSeek API(deepseek-flash, 비피크 기준 100만 토큰당 입력 $0.15, 출력 $0.60)는 하루 약 $2.25, 250 근무일 기준 약 $560입니다. 피크 요금(입력 $0.30, 출력 $1.20)에서는 같은 사용량이 하루 약 $4.50, 연 약 $1,125입니다.',
          '로컬 구성은 이것을 하드웨어와 전력으로 바꿉니다. 가정한 $2,300짜리 RTX 4090이 250일 동안 하루 8시간 350 W를 쓰면 700 kWh, 연 약 €245입니다. 환율을 무시하면 하드웨어는 API 비피크 요금 대비 약 7년, 피크 요금 대비 약 2.6년에 회수됩니다. 민감한 코드라면 비교가 비용만의 문제가 아닙니다. 클라우드 API는 코드를 제3자에게 보냅니다.',
        ],
        codeBlock: `# Cost calculator: per-token math for coding LLMs (every input is an assumption)
# DeepSeek API, deepseek-flash, off-peak rates in USD per 1M tokens (api-docs.deepseek.com)
input_rate, output_rate = 0.15, 0.60
daily_tokens = 5_000_000              # per developer
blended = (input_rate * 1 + output_rate * 2) / 3   # 1:2 input:output split = $0.45/1M
daily_cost = daily_tokens / 1_000_000 * blended     # $2.25/day
annual_api = daily_cost * 250                       # ~$562/year (peak rates: ~$1,125/year)

# Local Qwen3.6 27B on an RTX 4090 (price is an assumption)
hardware_cost = 2300                  # USD
power_kwh     = 0.350 * 8 * 250       # 350 W, 8 h/day, 250 days = 700 kWh
annual_power  = power_kwh * 0.35      # EUR 0.35/kWh = ~245 per year
# Break-even vs off-peak API: hardware_cost / (annual_api - annual_power) = ~7.3 years
# Break-even vs peak API:     hardware_cost / (1125 - annual_power)       = ~2.6 years`,
        codeLanguage: 'python',
      },
      latency: {
        id: 'latency',
        title: '실제 지연 시간',
        content: '대화형 코딩에서는 지연 시간이 중요합니다. 자동 완성은 500 ms를 넘으면 쓸 수 없고, 코드 리뷰는 3초까지 허용되며, 배치 작업은 지연 시간에 둔감합니다. PromptQuorum은 이 모델들을 측정하지 않았습니다. 표는 RTX 4090(24 GB, Ollama 0.34.4, 2026년 9월)에서 Ollama로 진행된 제3자 테스트 하나를 보여 주며, 이는 이 모델들에 대해 찾은 유일한 공개 측정입니다. 실제 속도는 양자화, 컨텍스트 길이, 드라이버에 따라 달라집니다.',
        rows: [
          { '구성': 'Qwen3.6 27B, RTX 4090 (드래프트 디코딩 켬)', '지속 속도 (토큰/초)': '115.4', '비고': '프롬프트 5개 평균, 출력 256토큰' },
          { '구성': 'Qwen3.6 27B, RTX 4090 (드래프트 디코딩 끔)', '지속 속도 (토큰/초)': '48.9', '비고': '프롬프트 1개 재실행, 같은 구성' },
          { '구성': 'Qwen3-Coder 30B, RTX 4090', '지속 속도 (토큰/초)': '224.7', '비고': '활성 파라미터 3.3B의 MoE' },
          { '구성': 'Devstral Small 2', '지속 속도 (토큰/초)': '측정 안 됨', '비고': '공개된 측정 없음' },
          { '구성': 'DeepSeek API (deepseek-flash)', '지속 속도 (토큰/초)': '측정 안 됨', '비고': '네트워크와 피크 시간대에 따라 다름' },
        ],
        columns: ['구성', '지속 속도 (토큰/초)', '비고'],
        tableFormat: true,
        note: '출처: [Ollama Models Cheat Sheet](https://computingforgeeks.com/ollama-models-cheat-sheet/)(제3자 테스트이며 PromptQuorum의 측정이 아님). 해당 글에 따르면 추측 디코딩(드래프트 토큰)은 출력 품질을 바꾸지 않고 이 테스트에서 Qwen3.6 27B를 약 2.4배 빠르게 했습니다. Apple은 로컬 LLM의 토큰 속도를 공개하지 않습니다. 정확한 수치는 직접 하드웨어에서 ollama run --verbose로 측정하십시오. 자동 완성에서는 로컬 추론이 네트워크 왕복을 피합니다.',
        callouts: [
          { type: 'warning', text: 'Ollama의 기본 컨텍스트 윈도우(사용 가능한 VRAM에 맞춰 조정됨)는 처리하는 토큰이 적어 겉보기 처리량을 높이지만 컨텍스트를 잘라 냅니다. 의미 있는 코딩 지연 시간 측정을 위해 num_ctx 32768로 설정하십시오.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: '하드웨어 요구 사항',
        items: [
          '**Qwen3.6 27B Q4_K_M** (Ollama `qwen3.6:27b`, 18–19 GB 다운로드): 24 GB GPU(RTX 3090, RTX 4090) 또는 통합 메모리 36–48 GB 이상의 Apple Silicon. 16 GB 카드는 가중치를 담지 못합니다.',
          '**Devstral Small 2 24B** (Ollama `devstral-small-2`, 15 GB 다운로드): RTX 4070 Ti Super(16 GB, 컨텍스트를 더하면 빠듯함), RTX 3090 또는 RTX 4090(24 GB), 또는 통합 메모리 24 GB 이상의 Apple Silicon.',
          '**Codestral 22B Q4_K_M** (13 GB 다운로드): RTX 4070 Ti(12 GB는 한계, 16 GB 권장).',
          '**두 모델 동시 실행**: Qwen3.6 27B(18–19 GB)와 Devstral Small 2(15 GB)는 컨텍스트 전에 합쳐 약 34 GB이므로 24 GB GPU 두 장 또는 통합 메모리 64 GB 이상의 Apple Silicon(예: M5 Max Mac Studio, 최대 128 GB)이 필요합니다.',
          '**Apple Silicon**: Apple은 2026년 8월 25일 Mac mini와 Mac Studio 라인업을 새로 발표했고(2026년 9월 22일부터 판매) M4 Pro/M4 Max 구성을 대체했습니다. Apple에 따르면 M5 Pro Mac mini는 $1,699부터(통합 메모리 최대 64 GB, 307 GB/s), M5 Max Mac Studio는 $2,499부터(최대 128 GB), M5 Ultra Mac Studio는 $5,499부터(최대 512 GB, 512 GB 구성은 10월 말 출시)입니다. 36–48 GB 구성이면 Qwen3.6 27B를 담을 수 있고, 64 GB 이상이면 Qwen3.6 27B와 Devstral Small 2를 함께 담습니다. Apple은 로컬 LLM의 초당 토큰 수치를 공개하지 않으며 PromptQuorum도 이 칩을 측정하지 않았으니 ollama run --verbose로 직접 측정하십시오. 가격은 미국 달러 기준이며 현지 가격은 다를 수 있습니다.',
          '**저예산 Apple Silicon 옵션**: 입문용 M6 Mac mini는 $899부터(통합 메모리 최대 32 GB, Apple 기준 최대 170 GB/s)이며 Devstral Small 2(15 GB)와 Codestral 22B(13 GB)를 여유 있게 담습니다. Qwen3.6 27B(18–19 GB)는 32 GB 구성에서만 들어가고 컨텍스트 여유가 적습니다. 메모리 대역폭이 M5 Pro보다 낮아(170 대 307 GB/s) 생성이 더 느리며, PromptQuorum은 M6를 측정하지 않았습니다.',
        ],
        codeBlock: `# num_ctx 및 GPU 레이어를 설정한 Qwen3.6 27B Ollama 구성
cat > Modelfile-qwen36 <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER num_gpu 1
PARAMETER num_thread 8
PARAMETER temperature 0.2
SYSTEM "You are an expert software engineer. Respond with clean, well-structured code."
EOF

ollama create qwen36-local -f Modelfile-qwen36
ollama run qwen36-local`,
        codeLanguage: 'bash',
      },
      dispatchStrategy: {
        id: 'dispatch-strategy',
        title: '멀티 모델 디스패치 전략',
        image: '/images/qwen-coder-deepseek-mistral-dispatch-hero-ko.webp',
        imageCaption: '코딩 작업 디스패치 결정 트리: 민감한 코드는 로컬 Qwen3.6 27B로, 대화형 자동 완성은 로컬 Devstral Small 2로, 민감하지 않은 배치 작업은 DeepSeek API(비피크 입력 100만 토큰당 $0.15)로 보냅니다.',
        content: [
          '모든 작업에서 이기는 코딩 모델은 없습니다. Qwen3.6 27B는 여기서 가장 강력한 로컬 SWE-bench 수치를 가집니다. Devstral Small 2는 더 가벼운 에이전트형 모델입니다. DeepSeek API는 민감하지 않은 코드를 대규모로 처리할 때 토큰당 가장 저렴합니다. 작업 유형별로 라우팅하는 디스패치 계층은 세 가지의 장점을 모두 활용합니다.',
          '개발 팀을 위한 디스패치 매트릭스 예시:',
        ],
        rows: [
          { '작업 유형': '비공개 코드 (고객 데이터)', '추천 모델': 'Qwen3.6 27B (로컬)', '이유': '코드가 내 하드웨어에 남음' },
          { '작업 유형': '자동 완성 (대화형)', '추천 모델': 'Devstral Small 2 (로컬)', '이유': '더 가벼운 모델, 네트워크 왕복 없음' },
          { '작업 유형': '코드 리뷰 (민감하지 않음)', '추천 모델': 'DeepSeek API', '이유': '비피크 입력 $0.15/1M, 높은 처리량' },
          { '작업 유형': '복잡한 리팩터링 (여러 파일)', '추천 모델': 'Qwen3.6 27B (로컬) + PromptQuorum 합의', '이유': '가장 강력한 로컬 SWE-bench 수치, 코드는 로컬' },
          { '작업 유형': '배치 테스트 생성', '추천 모델': 'DeepSeek API', '이유': '민감하지 않은 대량 작업에 비용 최적화' },
        ],
        columns: ['작업 유형', '추천 모델', '이유'],
        tableFormat: true,
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum 연동',
        content: 'PromptQuorum은 사용자가 정의한 작업 분류 규칙에 따라 로컬 Qwen, 로컬 Devstral, 클라우드 API로 코드 작업을 라우팅합니다. 이를 통해 수동 모델 전환이 불필요해지며 위의 디스패치 매트릭스가 자동으로 구현됩니다.',
        codeBlock: `# 코딩 워크로드를 위한 PromptQuorum 라우팅 설정
# PromptQuorum 설정 또는 .env 파일에 지정하십시오

# 로컬 모델 (Ollama를 통해)
LOCAL_OLLAMA_URL=http://localhost:11434/v1
LOCAL_CODING_MODEL=qwen36-local   # Qwen3.6 27B (num_ctx 32768)
LOCAL_AUTOCOMPLETE_MODEL=devstral-small-2     # Devstral Small 2 24B

# 클라우드 폴백
DEEPSEEK_API_KEY=your_key_here
DEEPSEEK_MODEL=deepseek-flash

# 라우팅 규칙 (PromptQuorum 디스패치)
# route: task_contains("private") OR task_contains("customer") → qwen36-local (로컬)
# route: task_type == "autocomplete" → devstral (로컬)
# route: token_count > 50000 → deepseek-chat (클라우드, 비민감 전용)
# default → qwen36-local (로컬)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'PromptQuorum은 코딩 작업을 민감한 코드는 로컬 Qwen3.6으로, 민감하지 않은 대량 생성은 DeepSeek API로 라우팅합니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Qwen 3 vs Claude Sonnet 5 vs DeepSeek R2 — 2026년 전체 비교](/ko/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[Qwen 3 로컬 실행 방법 — Ollama + LM Studio 가이드](/ko/local-llms/run-qwen-locally-guide-2026)',
          '[PromptQuorum에서 모델 비교하기](/compare)',
          '[2026년 코딩을 위한 최고의 로컬 LLM](/ko/local-llms/best-local-llms-for-coding)',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '로컬 코딩에서 Qwen3.6 27B가 DeepSeek보다 낫습니까?', a: 'Qwen3.6 27B는 SWE-bench Verified 77.2%를 보고했고 18–19 GB 다운로드로 전적으로 내 하드웨어에서 실행되므로 24 GB GPU를 계획하십시오. DeepSeek V4 Flash는 High 모드 78.6%를 보고했지만 284B 파라미터 모델이어서 대부분 비피크 입력 100만 토큰당 $0.15의 클라우드 API로 사용합니다. 더 나은 선택은 단일 승자가 아니라 데이터 민감도와 예산에 달려 있습니다. 두 점수 모두 서로 다른 테스트 환경의 벤더 발표값입니다.' },
          { q: 'Devstral Small 2는 무엇이며 왜 여기서 다룹니까?', a: 'Devstral Small 2는 Mistral AI의 24B 모델입니다. Devstral 계열은 여러 파일 수정과 도구 사용 같은 에이전트형 소프트웨어 엔지니어링을 겨냥합니다. Ollama 페이지에는 15 GB 다운로드, 384K 컨텍스트 윈도우, Apache 2.0 라이선스, SWE-bench Verified 65.8%가 표시됩니다. 여기서는 더 가벼운 로컬 옵션이며, Qwen3.6 27B가 더 높은 SWE-bench 수치를 보고했습니다.' },
          { q: 'Qwen3.6 27B와 Devstral Small 2를 동시에 실행할 수 있습니까?', a: '24 GB GPU 한 장에서는 안 됩니다. Qwen3.6 27B는 18–19 GB, Devstral Small 2는 15 GB를 내려받으므로 컨텍스트 전에 합쳐 약 34 GB입니다. 24 GB GPU 두 장 또는 통합 메모리 64 GB 이상의 Apple Silicon이 필요합니다. GPU 한 장에서는 한 번에 한 모델만 실행하고 Ollama로 전환하십시오.' },
          { q: 'EU 기업의 코드에 DeepSeek API를 써도 안전합니까?', a: 'DeepSeek API는 중국에 설립된 기업 DeepSeek이 운영하는 서버에서 데이터를 처리하며, EU 집행위원회는 중국에 대한 적정성 결정을 내리지 않았습니다. EU 개인 데이터나 개인 정보가 포함된 소스 코드를 보내려면 GDPR 제5장(제44조 이하)에 따른 법적 검토가 필요합니다. 개인 데이터가 없는 독점 코드는 법무팀과 상의하십시오. Qwen3.6 27B 같은 로컬 모델은 코드를 내 하드웨어에 두어 제3자 전송을 피하지만, 그것만으로 프로젝트가 GDPR을 준수하게 되는 것은 아닙니다. 이는 일반 정보이며 법률 자문이 아닙니다.' },
          { q: 'SWE-bench Verified란 무엇이며 왜 중시합니까?', a: 'SWE-bench Verified는 사람이 검증한 과제 집합으로, 모델이 Django, Flask, scikit-learn 같은 오픈소스 Python 프로젝트의 실제 GitHub 이슈를 해결할 수 있는지 시험합니다. HumanEval 같은 고립된 함수 수준 테스트보다 실무 소프트웨어 엔지니어링을 더 잘 측정합니다. 점수는 에이전트 환경에 크게 좌우되므로 벤더 수치는 신중하게 비교하십시오.' },
        ],
      },
    },
  },
};
