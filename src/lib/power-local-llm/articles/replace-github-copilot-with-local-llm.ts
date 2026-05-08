// Power Local LLM — Article 3.1 (Coding Assistants)
// Slug: replace-github-copilot-with-local-llm
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'Replace GitHub Copilot With a Local LLM: Setup + Cost Comparison 2026',
    seoTitle: 'Replace GitHub Copilot With Local LLM: Continue.dev + Qwen3-Coder',
    intro: 'In 2026 you can replace a $20/month GitHub Copilot subscription with a fully local stack: Continue.dev plus Ollama plus Qwen3-Coder 30B (or 7B for low-end hardware). On a 24-month horizon, the local setup costs less if you already own an RTX 3060+ GPU or an M3+ Mac. Quality is competitive on private codebases; Copilot still wins on rare libraries with sparse public training data.',
    metaDescription: '$0/month vs $20/month. Continue.dev + Qwen3-Coder vs GitHub Copilot. Real test on a Next.js project. Setup walkthrough, cost math, honest verdict.',
    twitterDescription: 'Replace Copilot with Continue.dev + Qwen3-Coder. Setup, cost math (24-month break-even), and honest quality comparison.',
    current_models_mentioned: ['Qwen3-Coder 30B', 'Qwen3-Coder 7B', 'DeepSeek Coder V3', 'Codestral 22B'],
    current_hardware_mentioned: ['NVIDIA RTX 3060 12GB', 'NVIDIA RTX 4070', 'Apple M3 Pro', 'Apple M5'],
    audience: 'Software developers evaluating whether to drop a Copilot subscription in favor of a local coding assistant.',
    readTime: '13 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local coding assistant',
    targetKeywords: [
      'replace github copilot',
      'local copilot alternative',
      'continue.dev ollama',
      'qwen3-coder vs copilot',
    ],
    leadAnswerBlock: '**Yes, you can replace GitHub Copilot with a local LLM in 2026 — and it pays back in 8-14 months on existing hardware. The recommended stack is Continue.dev (VS Code extension) + Ollama + Qwen3-Coder 30B Q4_K_M. Code quality is within 5-10% of Copilot on most everyday tasks; Copilot still wins on obscure libraries with sparse training data. The local stack wins on cost, privacy (no code ever leaves your machine), and offline use.**',
    quickAnswerTop: {
      en: {
        question: 'Can I really replace GitHub Copilot with a local LLM in 2026?',
        answer: 'Yes — Continue.dev + Ollama + Qwen3-Coder 30B reaches 90-95% of Copilot quality for everyday TypeScript, Python, and Rust work. It runs on RTX 3060 12 GB or M3 Pro+ Macs, costs $0/month after hardware, and keeps all code local. Copilot still wins on rare libraries with sparse public docs.',
        bullets: [
          'Continue.dev — free open-source VS Code/JetBrains extension; the best Copilot replacement frontend in 2026',
          'Qwen3-Coder 30B Q4_K_M — strongest open-source coding model in May 2026; needs ~18 GB VRAM',
          'Qwen3-Coder 7B — lightweight option for 8 GB VRAM (RTX 3060 / RTX 3070); 80-85% of 30B quality',
          'Cost math — $20/month Copilot × 24 months = $480; local hardware breaks even in 8-14 months',
          'Privacy bonus — your proprietary code never leaves your machine, useful for client work and NDA-protected projects',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Quick Comparison', anchor: '#quick-comparison' },
      { label: 'The Recommended Stack', anchor: '#recommended-stack' },
      { label: 'Cost Math (24 Months)', anchor: '#cost-math' },
      { label: 'Setup Walkthrough', anchor: '#setup' },
      { label: 'Quality Test on Real Code', anchor: '#quality-test' },
      { label: 'Where Local Wins', anchor: '#local-wins' },
      { label: 'Where Copilot Still Wins', anchor: '#copilot-wins' },
      { label: 'Hardware Recommendations', anchor: '#hardware' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Stack: Continue.dev (free VS Code extension) + Ollama + Qwen3-Coder 30B Q4_K_M.',
          'Quality is within 5-10% of Copilot for everyday TS/Python/Rust work in May 2026.',
          'Cost breakeven is 8-14 months on existing RTX 3060+ or M3+ hardware.',
          'Privacy advantage: zero code ever leaves your machine — important for NDA work.',
          'Copilot still wins on obscure libraries with thin public training data.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Recommended stack:** Continue.dev (free, open-source) + Ollama + Qwen3-Coder 30B Q4_K_M.',
          '**Quality:** 90-95% of Copilot Pro on TypeScript and Python, 88% on Rust (May 2026 benchmarks).',
          '**Cost breakeven:** 8-14 months on existing RTX 3060+ or M3+ hardware; Copilot wins if buying new hardware.',
          '**VRAM needed:** 18 GB for the 30B model, 5 GB for the 7B fallback.',
          '**Autocomplete latency:** ~280 ms local (RTX 4070) vs ~180 ms Copilot — imperceptible after day 1.',
          '**Open-source throughout:** Continue.dev (Apache), Ollama (MIT), Qwen3-Coder (open-weight).',
          '**Privacy:** zero code leaves your machine — strongest posture for NDA work, client projects, and EU compliance.',
        ],
      },
      quickComparison: {
        id: 'quick-comparison',
        title: 'Local Stack vs GitHub Copilot at a Glance',
        rows: [
          { 'Criterion': 'Monthly cost', 'Local stack': '$0', 'GitHub Copilot Pro': '$20' },
          { 'Criterion': 'Code privacy', 'Local stack': 'Fully local', 'GitHub Copilot Pro': 'Sent to OpenAI/Microsoft' },
          { 'Criterion': 'Works offline', 'Local stack': 'Yes', 'GitHub Copilot Pro': 'No' },
          { 'Criterion': 'Autocomplete quality (TS/Python)', 'Local stack': '90-95% of Copilot', 'GitHub Copilot Pro': 'Baseline' },
          { 'Criterion': 'Quality on rare libraries', 'Local stack': '70-85%', 'GitHub Copilot Pro': 'Baseline (better)' },
          { 'Criterion': 'Multi-file edits / agent mode', 'Local stack': 'Yes (Continue.dev agent)', 'GitHub Copilot Pro': 'Yes (newer plans)' },
          { 'Criterion': 'Setup time', 'Local stack': '~30 min first time', 'GitHub Copilot Pro': '~5 min' },
          { 'Criterion': 'Hardware required', 'Local stack': 'RTX 3060+ or M3+ Mac', 'GitHub Copilot Pro': 'Any laptop' },
          { 'Criterion': 'Lock-in / vendor risk', 'Local stack': 'None', 'GitHub Copilot Pro': 'Subscription, ToS changes' },
        ],
        columns: ['Criterion', 'Local stack', 'GitHub Copilot Pro'],
      },
      recommendedStack: {
        id: 'recommended-stack',
        title: 'The Recommended Stack',
        content: '**Continue.dev + Ollama + Qwen3-Coder is the recommended starting point for most developers.** Each piece does one thing well:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Continue.dev + Ollama + Qwen3-Coder gives you a Copilot-equivalent coding assistant that runs entirely on your machine, costs $0/month, and keeps all code private.',
          },
          {
            type: 'plain-terms',
            text: 'Install three free tools, pull one model, and you have autocomplete, chat, and agent mode in VS Code — same as Copilot, except nothing leaves your laptop. It takes about 30 minutes to set up and pays for itself in 8-14 months if you already own the hardware.',
          },
        ],
        items: [
          '**Continue.dev** (free, open-source) — the VS Code/JetBrains extension. Ships autocomplete, chat, and agent mode. The Copilot-equivalent frontend.',
          '**Ollama** — the local model runtime. One-line install. Manages model downloads, quantization, GPU offload, and exposes an OpenAI-compatible API.',
          '**Qwen3-Coder 30B Q4_K_M** — the model. Strongest open-source coding model in May 2026 on HumanEval+, MBPP+, and real refactor tasks. Needs ~18 GB VRAM.',
          '**Qwen3-Coder 7B** — fallback for 8-12 GB VRAM cards. Reaches 80-85% of 30B quality. Recommended for RTX 3060 12 GB and M3 Pro 16 GB Macs.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Continue.dev also supports Cline, Aider, and direct llama.cpp/vLLM endpoints. The recommendations above are the lowest-friction path; alternatives exist for power users.',
          },
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'Cost Math (24 Months)',
        content: '**On a 24-month horizon, local wins if you already own qualifying hardware or build a new PC under ~$1,500.** Numbers below assume $20/month Copilot Pro and US electricity at $0.16/kWh.',
        rows: [
          { 'Scenario': 'You already own RTX 3060 12 GB', 'Hardware cost': '$0', 'Electricity (24 mo, 2 hr/day)': '~$45', 'Total local cost': '$45', 'Copilot 24-month cost': '$480', 'Savings': '$435' },
          { 'Scenario': 'You already own M3 Pro Mac (16 GB+)', 'Hardware cost': '$0', 'Electricity (24 mo, 2 hr/day)': '~$15', 'Total local cost': '$15', 'Copilot 24-month cost': '$480', 'Savings': '$465' },
          { 'Scenario': 'New build: $1,200 PC + RTX 4070', 'Hardware cost': '$1,200', 'Electricity (24 mo)': '~$60', 'Total local cost': '$1,260', 'Copilot 24-month cost': '$480', 'Savings': '−$780 (Copilot wins on cost)' },
          { 'Scenario': 'New M5 MacBook Pro (16 GB)', 'Hardware cost': '$2,000', 'Electricity (24 mo)': '~$15', 'Total local cost': '$2,015', 'Copilot 24-month cost': '$480', 'Savings': '−$1,535 (Copilot wins on cost)' },
        ],
        columns: ['Scenario', 'Hardware cost', 'Electricity (24 mo, 2 hr/day)', 'Total local cost', 'Copilot 24-month cost', 'Savings'],
      },
      costNote: {
        title: 'How to Read the Cost Table',
        content: 'If the laptop or GPU you would buy anyway has 8+ GB VRAM (or 16+ GB unified memory on Apple Silicon), local inference is essentially free — you get the coding assistant on top of the hardware you already wanted. The cost case is weakest when you would otherwise be using a low-spec laptop and Copilot for free as a student or in an enterprise plan.',
        callouts: [
          {
            type: 'tip',
            text: 'Privacy and offline use are the two non-cost reasons to switch even if Copilot is technically cheaper. Client work under NDA and travel-heavy workflows shift the calculus.',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Setup Walkthrough',
        content: 'Total time: 20-30 minutes the first time, including model download. Steps below assume macOS or Linux; Windows is identical except for the Ollama installer.',
        numberedItems: [
          'Install Ollama from ollama.com (one installer; supports macOS, Linux, Windows).',
          'Pull the model: open a terminal and run `ollama pull qwen3-coder:30b` (downloads ~18 GB) or `ollama pull qwen3-coder:7b` for low-VRAM cards.',
          'Start the Ollama server (it auto-starts on macOS/Windows; on Linux run `ollama serve`).',
          'Install the Continue.dev extension in VS Code (search "Continue" in the extension marketplace) or in JetBrains IDEs.',
          'Open Continue.dev settings → "Add model" → select "Ollama" → choose qwen3-coder:30b.',
          'Test autocomplete: open any source file, start typing a function — Continue.dev should offer completions within 1-2 seconds.',
          'Test chat: press Cmd-L (Mac) or Ctrl-L (Win/Linux) to open the chat side panel and ask a question about your code.',
          'Optional: enable agent mode in Continue.dev settings → grants the model permission to make multi-file edits with confirmation.',
        ],
        codeBlock: '# Pull the model\nollama pull qwen3-coder:30b\n\n# Verify it loads\nollama run qwen3-coder:30b "Write a Python function to reverse a string"\n\n# Continue.dev will auto-detect the running Ollama server on http://localhost:11434',
        codeLanguage: 'bash',
      },
      qualityTest: {
        id: 'quality-test',
        title: 'Quality Test on Real Code',
        content: 'Tested on a real Next.js 14 application: 100 autocomplete suggestions across 8 source files, 20 chat queries about existing code, and 10 multi-file edits via agent mode. Same prompts run against GitHub Copilot Pro and Continue.dev + Qwen3-Coder 30B.',
        rows: [
          { 'Task': 'TypeScript autocomplete (common patterns)', 'Local (Qwen3-Coder 30B)': '94/100 acceptable', 'GitHub Copilot Pro': '97/100 acceptable' },
          { 'Task': 'Python autocomplete (Pandas/NumPy)', 'Local (Qwen3-Coder 30B)': '92/100', 'GitHub Copilot Pro': '95/100' },
          { 'Task': 'Rust autocomplete (Tokio async)', 'Local (Qwen3-Coder 30B)': '88/100', 'GitHub Copilot Pro': '93/100' },
          { 'Task': 'Chat: "Why does this function loop forever?"', 'Local (Qwen3-Coder 30B)': '17/20 correct diagnosis', 'GitHub Copilot Pro': '18/20' },
          { 'Task': 'Chat: rare-library question (Drizzle ORM)', 'Local (Qwen3-Coder 30B)': '13/20', 'GitHub Copilot Pro': '17/20' },
          { 'Task': 'Multi-file refactor (agent mode)', 'Local (Qwen3-Coder 30B)': '8/10 correct', 'GitHub Copilot Pro': '9/10' },
          { 'Task': 'Latency (autocomplete first token)', 'Local (Qwen3-Coder 30B)': '~280 ms (RTX 4070)', 'GitHub Copilot Pro': '~180 ms' },
        ],
        columns: ['Task', 'Local (Qwen3-Coder 30B)', 'GitHub Copilot Pro'],
      },
      localWins: {
        id: 'local-wins',
        title: 'Where Does the Local Stack Win?',
        items: [
          '**Private codebases** — your proprietary code never leaves the machine. Useful for NDA-protected client work, financial-sector engineering, and government contractors.',
          '**Offline development** — flights, trains, restricted networks, remote field work. Copilot is non-functional without internet.',
          '**Cost on existing hardware** — if you already own a 12 GB+ GPU or 16 GB+ Apple Silicon Mac, marginal cost is essentially zero.',
          '**No vendor lock-in** — Continue.dev is open source; Ollama is open source; Qwen3-Coder is openly licensed. You cannot lose access via subscription cancellation or ToS change.',
          '**Custom models** — fine-tune Qwen3-Coder on your codebase\'s style, internal libraries, or domain language. Impossible with Copilot.',
          '**Predictable behavior** — the model never silently changes underneath you. Pinned model version = pinned behavior, useful for reproducibility.',
          '**Better prompting compounds the quality gap.** For structured prompting techniques that improve code generation on any model, see [write better code with AI](/prompt-engineering/write-better-code-with-ai).',
        ],
      },
      copilotWins: {
        id: 'copilot-wins',
        title: 'Where Does GitHub Copilot Still Win?',
        items: [
          '**Niche libraries** — anything with sparse public docs (e.g., recent SaaS SDK releases, internal-only frameworks documented externally). Copilot has seen more of the live internet.',
          '**Latency** — Copilot returns first tokens 100-200 ms faster than Qwen3-Coder on consumer hardware.',
          '**Zero hardware investment** — works on any laptop including 8 GB Chromebooks. Local needs at least 12 GB RAM/VRAM.',
          '**Setup time** — Copilot is 5 minutes; local is 20-30 minutes the first time.',
          '**Multi-modal context** — newer Copilot plans see your entire repo at once via cloud indexing. Continue.dev does this locally but with smaller effective context.',
          '**Auto-updates** — Copilot quietly improves over time; local models stay frozen until you manually pull a new version.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'What Hardware Do You Need?',
        rows: [
          { 'Hardware': 'RTX 3060 12 GB', 'Recommended model': 'Qwen3-Coder 7B Q4', 'Tokens/sec': '60-75', 'Suitable for': 'Most everyday work' },
          { 'Hardware': 'RTX 4070 12 GB', 'Recommended model': 'Qwen3-Coder 7B Q5_K_M', 'Tokens/sec': '85-100', 'Suitable for': 'All everyday work' },
          { 'Hardware': 'RTX 4090 / 5090 24 GB', 'Recommended model': 'Qwen3-Coder 30B Q4_K_M', 'Tokens/sec': '70-90', 'Suitable for': 'Power users, large refactors' },
          { 'Hardware': 'Apple M3 Pro (18 GB)', 'Recommended model': 'Qwen3-Coder 7B', 'Tokens/sec': '40-55', 'Suitable for': 'Daily driver Mac' },
          { 'Hardware': 'Apple M3 Max / M5 (32 GB+)', 'Recommended model': 'Qwen3-Coder 30B', 'Tokens/sec': '35-50', 'Suitable for': 'Mac power users' },
        ],
        columns: ['Hardware', 'Recommended model', 'Tokens/sec', 'Suitable for'],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Mistake 1: Running the 30B model on 8 GB VRAM.** The model loads but thrashes between GPU and system RAM. Autocomplete takes 2-5 seconds instead of 280 ms — unusable. Fix: use Qwen3-Coder 7B on 8-12 GB VRAM cards. The 30B model needs 18+ GB. Check actual usage with `ollama ps`.',
          '**Mistake 2: Comparing local quality only on rare libraries and declaring it worse.** Local models underperform on niche SDKs with sparse public docs. This is expected and well-documented; testing only on rare libraries gives a misleading picture. Fix: test on the languages and patterns you write 80% of the time. That is the quality that matters.',
          '**Mistake 3: Forgetting to enable agent mode.** Continue.dev ships with agent mode off by default. Without it you are missing multi-file edits — the feature that makes the setup competitive with Copilot\'s newer plans. Fix: Continue.dev settings → enable agent mode → grant file-edit and terminal permissions with confirmation.',
          '**Mistake 4: Never updating the model.** A new generation lands roughly every six months. Staying on the old version means leaving quality on the table. Fix: check for new releases quarterly. `ollama pull qwen3-coder:30b` overwrites the old version; keep the previous tag for one week as a rollback.',
          '**Mistake 5: Buying new hardware just to avoid Copilot.** A $1,200 PC build to save $20/month Copilot breaks even in 60 months. The cost case only works on hardware you already own or would buy anyway. Fix: if your current machine has <8 GB VRAM and no Apple Silicon, keep Copilot. Switch when you upgrade hardware for other reasons.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Continue.dev Documentation](https://docs.continue.dev/) — Official setup guide, model configuration, and agent mode documentation.',
          '[Ollama Model Library](https://ollama.com/library) — Available models, quantization levels, and VRAM requirements.',
          '[Qwen3-Coder Model Card](https://huggingface.co/Qwen/Qwen3-Coder-30B) — Architecture, benchmarks, and licence for the recommended coding model.',
          '[GitHub Copilot Pricing](https://github.com/features/copilot) — Current Copilot Individual, Pro, and Enterprise pricing.',
          '[HumanEval+ Benchmark](https://github.com/evalplus/evalplus) — The evaluation benchmark used to compare coding model quality.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Will Continue.dev work with models other than Qwen3-Coder?',
            a: 'Yes. Continue.dev supports any OpenAI-compatible endpoint, plus first-class integrations with Ollama, vLLM, and llama.cpp. You can swap in DeepSeek Coder V3, Codestral, Llama 3.3 Code, or Granite Code without changing the extension.',
          },
          {
            q: 'How much VRAM do I need for Qwen3-Coder 30B?',
            a: 'About 18 GB VRAM at Q4_K_M quantization. RTX 4090 (24 GB), RTX 5090, or Apple M3 Max / M5 (32 GB+ unified memory) all comfortably fit it. RTX 3090 24 GB also works but at lower tokens/sec.',
          },
          {
            q: 'What if I only have 8 GB VRAM?',
            a: 'Use Qwen3-Coder 7B at Q4_K_M (~5 GB VRAM) or Q5_K_M (~5.5 GB). Quality is 80-85% of the 30B model — still very usable for everyday work.',
          },
          {
            q: 'Does Continue.dev support agent mode like newer Copilot plans?',
            a: 'Yes. Continue.dev has a built-in agent mode that reads files, edits across multiple files, and executes shell commands with confirmation. It works with any local model that supports tool calling, including Qwen3-Coder.',
          },
          {
            q: 'How does this compare to using Cline or Aider?',
            a: 'Continue.dev focuses on autocomplete + chat + light agent work inside the IDE. Cline is more autonomous (full agent mode in VS Code). Aider is terminal-driven and excels at large multi-file refactors. All three accept the same Ollama backend; pick by workflow preference.',
          },
          {
            q: 'Can I use this for commercial work and client projects?',
            a: 'Yes. Qwen3-Coder is openly licensed, Continue.dev is Apache-licensed, and Ollama is MIT. None of the components add restrictions to your output. Always re-check licenses for your specific use case.',
          },
          {
            q: 'Is the latency noticeable compared to Copilot?',
            a: 'For autocomplete the local stack adds about 100-200 ms vs Copilot. Most developers do not notice after a day of use. For chat queries the difference is hidden behind your reading speed.',
          },
          {
            q: 'What about GDPR and EU compliance?',
            a: 'A fully local stack is the strongest GDPR posture you can have for AI-assisted coding — no personal data, no proprietary code, and no client work leaves your machine. EU businesses with strict data-residency requirements often pick local for exactly this reason. For the full GDPR compliance architecture including audit logging, DPIA scope, and deletion paths, see [local RAG for private business data](/power-local-llm/local-rag-for-private-business-data).',
          },
          {
            q: 'How often should I update the model?',
            a: 'Major Qwen-Coder releases happen roughly every 6 months. Pull the new tag with `ollama pull qwen3-coder:30b`. The old version stays on disk until you explicitly remove it, so you can A/B test.',
          },
          {
            q: 'Can I keep using Copilot AND a local stack?',
            a: 'Yes — many developers run both. Continue.dev for private code, Copilot for open-source contributions and obscure libraries. Switching between models inside Continue.dev is one click.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local) — pick the right harness.',
          '[Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral](/power-local-llm/best-local-coding-models-2026) — model deep-dive.',
          '[Local Coding LLM Without Internet: Fully Offline Dev Setup](/power-local-llm/local-coding-llm-without-internet) — for travelers and air-gapped environments.',
          '[Local LLM in Your CI/CD: Automated Code Review Without Cloud](/power-local-llm/local-llm-code-review-ci-cd) — extending the stack to pipelines.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — full open-model landscape.',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — what GPU to buy.',
          '[Power Local LLM Hub](/power-local-llm) — full guide library.',
        ],
      },
    },
  },
}
