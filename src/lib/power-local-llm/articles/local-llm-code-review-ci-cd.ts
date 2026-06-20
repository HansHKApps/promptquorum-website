// Power Local LLM — Local LLM in Your CI/CD: Automated Code Review Without Cloud
// Slug: local-llm-code-review-ci-cd
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
    title: 'Local LLM in Your CI/CD: Automated Code Review Without Cloud',
    seoTitle: 'Local LLM Code Review in CI/CD 2026: Automate PR Reviews',
    intro:
      'Self-hosted local-LLM code review puts a Qwen3-Coder model behind your CI/CD pipeline so every pull request gets a review pass without the codebase leaving your network. The architecture is straightforward — a dedicated GPU server running Ollama, a custom GitHub Action calling its HTTP API, and a review prompt tuned for false-positive rate — and the economics flip in favour of self-hosting somewhere between 15 and 25 paid GitHub seats. This guide walks through the architecture, a working GitHub Actions workflow, hardware sizing by team size, the security model, and the operational pitfalls that bite teams in month two.',
    metaDescription:
      'Self-hosted local-LLM code review in GitHub Actions: architecture, working workflow YAML, hardware sizing by team size, security model, and the economic tipping point against GitHub Advanced Security.',
    twitterDescription:
      'Self-hosted code review on a GPU server in your network. GitHub Actions calls Ollama, Qwen3-Coder reviews PRs, no codebase leaves your perimeter. Setup, sizing, and the cost crossover inside.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'NVIDIA L40S 48 GB',
      'NVIDIA A6000 Ada 48 GB',
      'NVIDIA H100 80 GB',
    ],
    audience:
      'Engineering team leads, platform engineers, and DevOps practitioners who run GitHub Actions or GitLab CI and want to add LLM-driven code review without sending source code to a third-party API. Assumes familiarity with Docker, Linux, and self-hosted runners.',
    readTime: '15 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'local LLM code review CI/CD',
    targetKeywords: [
      'local llm code review',
      'self-hosted code review llm',
      'github actions local llm',
      'ollama github actions',
      'private code review ai',
      'code review without openai',
    ],
    leadAnswerBlock:
      '**Self-hosted local-LLM code review uses three pieces: a dedicated GPU server running Ollama (or vLLM), a custom GitHub Action that POSTs the diff to the server\'s HTTP endpoint, and a review prompt that returns a structured verdict (approve / comment / block). One RTX 4090 (24 GB) running Qwen3-Coder 30B comfortably serves a 15–25-developer team; a 48 GB card (L40S or A6000 Ada) extends to roughly 50 developers; H100-class hardware is needed past 100. Economics flip in favour of self-hosting somewhere between 15 and 25 paid GitHub Advanced Security seats at $19/dev/month — exact crossover depends on hardware purchase vs. existing capacity. The security advantage is real: source code never leaves your network, the audit surface is one process and one log file, and you can prove zero-egress with a packet capture.**',
    quickAnswerTop: {
      en: {
        question: 'How do I run a local LLM as a code reviewer in CI/CD?',
        answer:
          'Stand up a GPU server running Ollama (or vLLM, llama.cpp) with a coding-tuned model — Qwen3-Coder 30B is the May 2026 default. Add a self-hosted GitHub Actions runner on the same network, or expose the server\'s HTTP endpoint to your existing runners over a private network. Write a small custom action that fetches the PR diff, POSTs it with a review prompt to the LLM endpoint, parses a structured response (approve / comment / block), and posts inline comments back to the PR. The model never leaves your perimeter; the action behaves like any other check. Hardware-wise, one RTX 4090 with Qwen3-Coder 30B handles 15–25 developers; a 48 GB card extends to 50; past 100 you need H100-class hardware or multiple GPUs.',
        bullets: [
          'Architecture: GPU server running Ollama → self-hosted runner (or HTTP from cloud runners) → custom GitHub Action → PR comments.',
          'Default stack: Ollama + Qwen3-Coder 30B (Apache 2.0) + custom JavaScript or composite action.',
          'Hardware: 1× RTX 4090 (24 GB) for 15–25 devs; 1× L40S/A6000 Ada (48 GB) for ~50; 1× H100 or multi-GPU for 100+.',
          'Economics: crossover vs GitHub Advanced Security at $19/dev/month is roughly 15–25 paid seats, depending on hardware cost.',
          'Security: source code never leaves your network; egress can be proven with a packet capture; audit surface is one process and one log.',
          'GitLab CI works the same way — runner instead of action, but the LLM call is identical.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Architecture Comparison', anchor: '#architecture-comparison' },
      { label: 'The Recommended Stack', anchor: '#recommended-stack' },
      { label: 'GitHub Actions Workflow', anchor: '#workflow' },
      { label: 'Hardware Sizing by Team Size', anchor: '#hardware-sizing' },
      { label: 'GPU Sharing Across Builds', anchor: '#gpu-sharing' },
      { label: 'Cost Comparison vs GitHub Advanced Security', anchor: '#cost-comparison' },
      { label: 'Security Model and Audit Posture', anchor: '#security-model' },
      { label: 'Prompt Design for Code Review', anchor: '#prompt-design' },
      { label: 'Handling False Positives', anchor: '#false-positives' },
      { label: 'Operational Pitfalls in Month Two', anchor: '#operational-pitfalls' },
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
          '**Architecture is three pieces:** GPU server running Ollama (or vLLM) → CI runner that can reach it over the network → custom action that POSTs the PR diff and parses a structured verdict. Same shape on GitHub Actions, GitLab CI, Buildkite, and Jenkins.',
          '**Default stack in May 2026:** Ollama + Qwen3-Coder 30B (Apache 2.0) + a thin custom GitHub Action. Total infrastructure: one GPU box, one runner.',
          '**Hardware sizing:** RTX 4090 (24 GB, ~$2,000) handles 15–25 developers; L40S or A6000 Ada (48 GB, ~$7–8,000) extends to 50; H100 (80 GB, $25,000+) or multi-GPU for 100+.',
          '**Economics tip into self-host territory** at roughly 15–25 paid GitHub Advanced Security seats ($19/dev/month) — an RTX 4090 build pays back in 5–10 months at that team size.',
          '**Security advantage is real, not just marketing.** Source never leaves your network; outbound egress can be proven zero with `tcpdump`; the entire audit surface is one Ollama process and one log file.',
          '**False positives are the operational tax.** Plan for a tuning loop in the first month: prompt iteration, severity thresholds, and a reviewer-feedback ingestion path so the prompt improves over time.',
          '**Latency is acceptable.** A 24 GB GPU running Qwen3-Coder 30B reviews a typical 200-line PR diff in under 30 seconds. PR-author wait time is dominated by other CI jobs, not the review.',
          '**Don\'t replace human review entirely.** The local LLM is a first-pass triage gate — it catches obvious issues, flags risky changes, and frees humans for the judgement calls that LLMs still get wrong.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Recommended model:** Qwen3-Coder 30B at Q4_K_M (~17 GB VRAM, Apache 2.0).',
          '**Recommended runtime:** Ollama for setup simplicity; vLLM if you need higher concurrency on the same GPU.',
          '**Minimum GPU for serious teams:** RTX 4090 (24 GB). Smaller cards force the 7B model and noticeably worse review quality.',
          '**Concurrency on a single 24 GB GPU:** comfortably 1–3 simultaneous reviews on Qwen3-Coder 30B; queue beyond that.',
          '**Latency target:** under 30 seconds for a 200-line diff. Past that, PR-author behaviour shifts and reviews get bypassed.',
          '**Audit posture:** zero outbound egress on the GPU server is provable; entire surface is `ollama serve` + a single log file.',
          '**Crossover vs GitHub Advanced Security ($19/dev/mo):** 15–25 paid seats covers an RTX 4090 build in 5–10 months.',
          '**GitLab CI parity:** identical architecture, replace the GitHub Action with a CI job calling the same HTTP endpoint.',
        ],
      },
      architectureComparison: {
        id: 'architecture-comparison',
        title: 'Architecture Comparison: Three Real Options for Code Review in CI',
        content:
          '**Three architectures cover effectively all PR-review setups in May 2026.** Self-hosted local LLM is one of them — the right choice when source code can\'t leave your network or when seat-count economics favour fixed infrastructure.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Self-hosted local-LLM code review pays back faster than GitHub Advanced Security at 15–25 paid seats and keeps source code inside your network — the right architecture for teams with privacy or seat-count pressure.',
          },
          {
            type: 'plain-terms',
            text: 'Three options exist for AI code review in CI. GitHub Advanced Security is the easiest to turn on and the most expensive at scale. A cloud LLM API (OpenAI, Anthropic) is cheap to start and sends every diff to a third party. Self-hosted local LLM is the highest setup cost and the only option that keeps your codebase inside your perimeter — and at roughly 15–25 paid seats it becomes the cheapest of the three over a year.',
          },
        ],
        columns: ['Architecture', 'Setup complexity', 'Cost (10 devs)', 'Cost (50 devs)', 'PR latency', 'Best for'],
        rows: [
          {
            'Architecture': 'GitHub Advanced Security',
            'Setup complexity': 'Low (one toggle)',
            'Cost (10 devs)': '$190/mo',
            'Cost (50 devs)': '$950/mo',
            'PR latency': 'Sub-minute (managed)',
            'Best for': 'Teams under ~15 paid seats with no privacy constraint',
          },
          {
            'Architecture': 'Cloud LLM API (OpenAI / Anthropic)',
            'Setup complexity': 'Low–medium (API key + action)',
            'Cost (10 devs)': '~$50–200/mo (usage)',
            'Cost (50 devs)': '~$300–1,200/mo (usage)',
            'PR latency': 'Seconds',
            'Best for': 'Teams comfortable sending source to a third-party API',
          },
          {
            'Architecture': 'Local LLM on dedicated GPU',
            'Setup complexity': 'Medium–high (GPU server + runner + action)',
            'Cost (10 devs)': '~$2,000 hardware (one-time)',
            'Cost (50 devs)': '~$7,000+ hardware (one-time)',
            'PR latency': '10–30 seconds (single-GPU)',
            'Best for': 'Privacy-sensitive teams, 15+ paid seats, EU compliance contexts',
          },
          {
            'Architecture': 'Local LLM on shared infra (existing GPU)',
            'Setup complexity': 'Medium (just the runner + action)',
            'Cost (10 devs)': '$0 marginal (existing capacity)',
            'Cost (50 devs)': '$0 marginal (existing capacity)',
            'PR latency': 'Variable (depends on contention)',
            'Best for': 'Teams already running GPU infra for ML or analytics',
          },
        ],
      },
      recommendedStack: {
        id: 'recommended-stack',
        title: 'The Recommended Stack: Ollama + Qwen3-Coder + a Thin GitHub Action',
        content:
          '**The simplest production-grade stack is three components.** Each is open source, free, and well documented; the integration surface between them is HTTP.',
        items: [
          '**GPU server** running **Ollama** (or vLLM for higher concurrency). Ollama exposes an OpenAI-compatible HTTP API on `localhost:11434` by default; bind it to a private interface or a reverse proxy with auth before exposing to runners.',
          '**Coding-tuned model:** **Qwen3-Coder 30B** at Q4_K_M is the May 2026 default — strongest open-weight coding direction, 256K context, Apache 2.0 licence, fits on a 24 GB GPU. For 8–16 GB GPUs, use Qwen3-Coder 7B with the understanding that review quality drops noticeably.',
          '**CI integration:** a self-hosted GitHub Actions runner on the same network as the GPU server, or your existing GitHub-hosted runners reaching the GPU server over a private network (Tailscale, WireGuard, or a VPC peering).',
          '**Custom GitHub Action** (JavaScript or composite) that fetches the PR diff via the GitHub API, POSTs it to the Ollama endpoint with a review prompt, parses the structured response, and posts inline comments back to the PR.',
          '**Optional:** a small Redis or SQLite cache keyed on file hash + diff hash to avoid re-reviewing unchanged files in subsequent CI runs.',
          '**GitLab parity:** the same architecture, with a GitLab CI job replacing the GitHub Action. The LLM call is identical.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Bind `ollama serve` to a private network interface (or `127.0.0.1` if the runner is on the same host) and put auth in front of it before any cross-host exposure. The default `OLLAMA_HOST=0.0.0.0:11434` with no auth is fine for a single-machine experiment but a security failure in any other context.',
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: 'A Working GitHub Actions Workflow',
        content:
          '**The minimum viable workflow is about 50 lines of YAML.** This template runs on PR open and synchronize, fetches the diff, calls Ollama, and posts a comment back. Production deployments add caching, severity thresholds, and the option to block the PR on a "block" verdict.',
        codeLanguage: 'yaml',
        codeBlock: `# .github/workflows/local-llm-review.yml
name: Local LLM Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: self-hosted   # or any runner that can reach OLLAMA_HOST
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Generate diff
        id: diff
        run: |
          git diff origin/\${{ github.base_ref }}...HEAD > /tmp/pr.diff
          echo "size=$(wc -c < /tmp/pr.diff)" >> "$GITHUB_OUTPUT"

      - name: Call local LLM for review
        id: review
        env:
          OLLAMA_HOST: \${{ secrets.OLLAMA_HOST }}   # e.g. http://gpu-server.internal:11434
        run: |
          DIFF=$(jq -Rs . < /tmp/pr.diff)
          curl -sS "$OLLAMA_HOST/api/chat" \\
            -H 'Content-Type: application/json' \\
            -d "{
              \\"model\\": \\"qwen3-coder:30b\\",
              \\"stream\\": false,
              \\"format\\": \\"json\\",
              \\"messages\\": [
                {\\"role\\": \\"system\\", \\"content\\": \\"You are a senior code reviewer. Return JSON: {verdict: 'approve'|'comment'|'block', summary: string, comments: [{path, line, severity, message}]}\\"},
                {\\"role\\": \\"user\\", \\"content\\": $DIFF}
              ]
            }" > /tmp/review.json
          echo "verdict=$(jq -r '.message.content | fromjson | .verdict' < /tmp/review.json)" >> "$GITHUB_OUTPUT"

      - name: Post review comment
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const review = JSON.parse(JSON.parse(fs.readFileSync('/tmp/review.json')).message.content);
            const body = \`### Local LLM Review: \\\`\${review.verdict}\\\`\\n\\n\${review.summary}\`;
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body
            });

      - name: Block on critical verdict
        if: steps.review.outputs.verdict == 'block'
        run: exit 1
`,
        items: [
          'The runner must be able to reach `OLLAMA_HOST` over the network — self-hosted on the same VPC, or via Tailscale / WireGuard if the GPU server lives elsewhere.',
          'The system prompt enforces a structured JSON response so the action can branch on verdict cleanly. Without `format: "json"` and a strict schema in the prompt, you will spend operational time parsing free-form output.',
          'The `fetch-depth: 0` checkout is necessary to compute a real diff against the base branch — shallow checkouts produce malformed diffs.',
          'For repositories above ~50K lines of changed code per PR, truncate or chunk the diff before sending. The 256K context on Qwen3-Coder 30B is generous, but practical working context is closer to 64K–128K (see [Best Local Coding Models in 2026](/power-local-llm/best-local-coding-models-2026)).',
          'For prompt-design depth — system vs user prompts, examples, structured outputs — see [System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This workflow is intentionally minimal. Production deployments add: a cache keyed on file+diff hash to skip re-reviews of unchanged files, severity thresholds (only block on `severity >= "high"`), inline comment posting (instead of a single summary comment), per-language prompt variants, and reviewer-feedback ingestion to improve the prompt over time.',
          },
        ],
      },
      hardwareSizing: {
        id: 'hardware-sizing',
        title: 'Hardware Sizing by Team Size',
        content:
          '**One RTX 4090 (24 GB) handles a 15–25-developer team comfortably.** The bottleneck on a single GPU is not throughput per review — it is concurrency at PR-flush moments (Monday morning, end of sprint). Sizing rules below assume Qwen3-Coder 30B at Q4_K_M and a typical 50–500-line PR diff.',
        columns: ['Team size', 'GPU', 'VRAM', 'Concurrent reviews', 'Approx. price (May 2026)'],
        rows: [
          { 'Team size': '~5 developers', 'GPU': 'RTX 4070 / 4070 Ti', 'VRAM': '12–16 GB', 'Concurrent reviews': '1 (Qwen3-Coder 7B only)', 'Approx. price (May 2026)': '$600–900' },
          { 'Team size': '15–25 developers', 'GPU': 'RTX 4090 / 5090', 'VRAM': '24–32 GB', 'Concurrent reviews': '1–3 (Qwen3-Coder 30B)', 'Approx. price (May 2026)': '$2,000–2,500' },
          { 'Team size': '25–50 developers', 'GPU': 'L40S / A6000 Ada', 'VRAM': '48 GB', 'Concurrent reviews': '3–6', 'Approx. price (May 2026)': '$7,000–8,500' },
          { 'Team size': '50–100 developers', 'GPU': '2× RTX 4090 or 1× H100', 'VRAM': '48 GB / 80 GB', 'Concurrent reviews': '6–10', 'Approx. price (May 2026)': '$5,000 (2× 4090) or $25,000+ (H100)' },
          { 'Team size': '100+ developers', 'GPU': 'Multi-GPU H100 or H200', 'VRAM': '160 GB+', 'Concurrent reviews': '10+ with vLLM', 'Approx. price (May 2026)': '$50,000+' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For teams crossing the 50-developer threshold, switch from Ollama to vLLM. Ollama prioritises ease of use; vLLM prioritises throughput on shared GPUs. The same Qwen3-Coder 30B model runs on both — only the inference server changes.',
          },
        ],
      },
      gpuSharing: {
        id: 'gpu-sharing',
        title: 'GPU Sharing Across Builds and Other Workloads',
        content:
          '**A dedicated GPU for code review is the simplest architecture but not the only one.** Teams already running GPU infrastructure for ML inference or training can share — with the trade-off that contention causes review latency to spike.',
        items: [
          '**Dedicated GPU for review only:** simplest model. Latency is predictable; capacity planning is straightforward; failure modes are isolated. The recommendation for any team that does not already operate GPU infrastructure.',
          '**Shared GPU with ML inference:** workable if the inference workload has a steady envelope (e.g. a small embedding service that fits in 4–6 GB). The review model occupies the rest of VRAM. Scheduling collisions are rare on this pattern.',
          '**Shared GPU with ML training:** strongly discouraged. Training jobs spike VRAM usage to the limit and starve the review model, causing 30–120-second review latencies that erode developer trust in the system.',
          '**vLLM with paged attention:** purpose-built for high-concurrency LLM serving. The same RTX 4090 that handles 1–3 concurrent reviews under Ollama can handle 4–8 under vLLM, at the cost of a more complex setup. Worth it past 25 developers.',
          '**Multi-tenant on H100:** at the 100+ developer scale, partition an H100 into MIG slices or run vLLM with per-tenant quotas. This is platform-engineering territory; do not improvise it.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Cost Comparison vs GitHub Advanced Security',
        content:
          '**The economics flip in favour of self-hosting at roughly 15–25 paid seats.** This is a one-year-payback comparison; longer horizons make self-hosting more favourable.',
        items: [
          '**GitHub Advanced Security (Code Security):** $19/developer/month at list price (verify on the GitHub pricing page; volume discounts available for enterprise customers).',
          '**Cloud LLM API (e.g. OpenAI, Anthropic):** roughly $50–200/month per active developer at typical PR volume; varies wildly by codebase size and review prompt design.',
          '**Self-hosted local LLM, RTX 4090 build:** roughly $2,500 one-time hardware (GPU + a basic server chassis). Power: ~50W idle, ~350W under load — call it $20–30/month in electricity at typical usage. No per-seat fees.',
          '**Crossover at 10 devs:** GHAS $190/month vs self-hosted $25/month operating + $2,500 capex. Capex pays back in ~14 months.',
          '**Crossover at 25 devs:** GHAS $475/month vs self-hosted $25/month operating + $2,500 capex. Capex pays back in ~5–6 months.',
          '**Crossover at 50 devs:** GHAS $950/month vs self-hosted $40/month operating + $7,500 capex (48 GB GPU). Capex pays back in ~8 months.',
          '**The capex number is what dominates the math.** If you are buying a GPU specifically for this, the payback is real. If you have existing GPU capacity, the marginal cost is closer to zero and self-hosting wins immediately.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These numbers are list-price comparisons. Negotiated GHAS pricing for large enterprises shifts the crossover; existing GPU capacity collapses it. Re-do the math with your actual costs before committing to a hardware purchase.',
          },
        ],
      },
      securityModel: {
        id: 'security-model',
        title: 'Security Model and Audit Posture',
        content:
          '**The headline security claim — "source code never leaves your network" — is true, provable, and the strongest argument for this architecture.** The audit surface is small enough to defend in a procurement review.',
        items: [
          '**The model only sees the diff your action sends it.** No telemetry, no hidden network calls. Confirmable with `tcpdump` or `nft monitor` on the GPU server\'s outbound interface — under steady-state operation, you should see zero outbound packets to non-internal hosts.',
          '**The full audit surface is one process and one log file.** `ollama serve` is the entire LLM stack. Its logs (request bodies, latency, model loading events) are the audit record. No SaaS dashboard to query, no third-party retention policy to read.',
          '**Network isolation is straightforward.** Bind `ollama serve` to a private interface; put a reverse proxy with mTLS or shared-secret auth in front; deny outbound on the GPU server\'s network namespace except to your CI runner subnet. Standard zero-trust pattern, no LLM-specific magic.',
          '**The model weights are static, signed-by-vendor artefacts.** Pull them once via Ollama, pin the digest, and the model cannot change without an operator action. This is a stronger supply-chain story than a SaaS API where the upstream model can be silently swapped.',
          '**Compliance posture:** zero data egress is straightforward to document for SOC 2, ISO 27001, GDPR, and the EU AI Act limited-risk classification. The hardest part of self-hosting compliance is usually documenting the inference server itself; Ollama and vLLM are both well documented.',
          '**The model still sees your code.** Self-hosted does not mean private from the model — it means private from third parties. Insider-threat scenarios (engineer with GPU server access reads logs containing past PR diffs) are still in scope; rotate logs and limit access accordingly.',
        ],
      },
      promptDesign: {
        id: 'prompt-design',
        title: 'Prompt Design for Code Review',
        content:
          '**The single biggest determinant of false-positive rate is the system prompt.** A vague "review this code" prompt produces vague review comments; a specific prompt with severity thresholds and structured output produces actionable feedback.',
        items: [
          '**Structured output is non-negotiable.** Force JSON with a strict schema (`verdict`, `summary`, `comments[]`). Without it, the action spends 30% of its code parsing free-form output and the failure modes are subtle.',
          'For the full guide on structured output enforcement across models, see [structured output and JSON mode](/prompt-engineering/structured-output-and-json-mode).',
          '**Severity thresholds belong in the prompt, not the action.** Tell the model what counts as `critical`, `high`, `medium`, `low`; tell it to filter low-severity findings unless explicitly asked. This is far more reliable than post-hoc filtering on a free-form severity field.',
          '**Anchor the prompt with examples.** A 1–2-shot prompt with a real diff and a real ideal-review JSON dramatically outperforms zero-shot for the same model and the same diff size.',
          '**Distinguish "review" from "comment" intent.** A reviewer comment ("consider extracting this to a helper") and a blocker ("this introduces a SQL injection") need different actions in CI. Tag them in the structured output and have the action block only on blockers.',
          '**Per-language prompt variants help past a certain size.** A polyglot codebase benefits from a prompt that references the relevant language idioms (Pythonic vs idiomatic Rust). This is optional below ~25 developers; valuable above.',
          'For deeper prompt-engineering grounding — system vs user prompts, structured outputs, few-shot prompting — see [System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference).',
        ],
      },
      falsePositives: {
        id: 'false-positives',
        title: 'Handling False Positives Without Eroding Developer Trust',
        content:
          '**False positives are the operational tax on LLM code review.** A 5% rate is fine; 20% is intolerable; the difference is mostly prompt iteration and a feedback loop, not the model.',
        items: [
          '**Set a "block" threshold high.** A `block` verdict that fires on every minor lint issue trains developers to bypass the check. Reserve `block` for security issues, broken tests, and clear correctness failures.',
          '**Make non-blocking comments feel cheap.** Inline comments that the model is uncertain about should be tagged ("tentative" / "consider") so authors can dismiss them quickly without ceremony.',
          '**Build a feedback loop in month one.** Add a reaction (👍 / 👎) to each review comment. Periodically (weekly works) review the 👎s and update the system prompt with explicit "do not flag X" instructions for the most common false-positive categories.',
          '**Rate-limit comment volume per PR.** A single PR should not receive more than 5–10 comments from the LLM; past that, signal-to-noise collapses. Cap the action at the prompt level ("return at most N comments").',
          '**Track the verdict-to-merge correlation weekly.** If 80% of `block` verdicts merge anyway, your threshold is too aggressive. If 0% of `comment` verdicts get any human action, your prompt is producing noise.',
        ],
      },
      operationalPitfalls: {
        id: 'operational-pitfalls',
        title: 'Operational Pitfalls That Bite in Month Two',
        content:
          '**Setup gets attention; operations get ignored.** The failures below are the ones that cause teams to abandon the project after the initial honeymoon.',
        items: [
          '**Model updates break prompts.** A new Qwen3-Coder release changes output formatting subtly; structured-JSON parsing fails in CI; reviews stop posting. Pin the model digest with `ollama show <model> --modelfile`; upgrade in a staging branch before promoting.',
          '**GPU memory fragmentation under long uptime.** A GPU server running 24/7 can fragment VRAM and refuse new allocations after weeks of operation. Restart `ollama serve` weekly via a cron job; this is cheap and avoids the failure mode entirely.',
          '**CI runner contention.** A self-hosted runner that hosts both the LLM server and other CI jobs will see review latency spike under build load. Separate the runner and the GPU server when team size crosses ~25 developers.',
          '**Diff size growth.** PR sizes drift upward; eventually a PR exceeds the model\'s practical working context and reviews silently degrade. Add a guard in the action that splits or truncates diffs above ~30K tokens and warns the author.',
          '**Power and cooling.** A continuously loaded RTX 4090 draws ~350W under inference and produces a meaningful amount of heat. A closet-sized server room without active cooling will throttle the GPU; throttling costs latency and developers notice.',
          '**Forgotten log rotation.** Ollama logs every request body by default. After three months of PR reviews, the log file is large and contains historical PR diffs in plain text. Rotate logs weekly; archive or purge per your data-retention policy.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes Setting Up Local-LLM Code Review',
        items: [
          '**Mistake 1: starting with a 7B model on a 16 GB GPU.** Qwen3-Coder 7B reviews are noticeably worse than 30B reviews; developers lose trust quickly and the project gets shelved. If you cannot fit the 30B, either upgrade the GPU or use a cloud API for the first six months while you secure budget.',
          '**Mistake 2: blocking PRs on `block` verdicts from day one.** The first month is calibration; treat all output as advisory until you have measured the false-positive rate. Promote to blocking only after the rate is below ~5%.',
          '**Mistake 3: exposing `ollama serve` on `0.0.0.0:11434` with no auth.** This is the LLM-era equivalent of leaving Redis bound to a public interface. Bind to a private interface and put auth in front before any cross-host exposure.',
          '**Mistake 4: skipping the cache.** Re-reviewing unchanged files on every CI run wastes ~80% of the inference budget on a typical PR. A small file-hash + diff-hash cache (Redis or SQLite) cuts review latency and GPU load dramatically.',
          '**Mistake 5: running training jobs on the same GPU.** Training spikes VRAM to the limit and starves the review model. Use separate GPUs or, if you must share, run training on a strict schedule that does not overlap with peak PR hours.',
          '**Mistake 6: building the GitHub Action without a feedback loop.** A review system without 👍/👎 reactions cannot improve. Build the loop in week one; collect data; iterate on the prompt monthly.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Ollama Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) — Official HTTP API reference for `/api/chat`, `/api/generate`, structured output, and model management.',
          '[vLLM Documentation](https://docs.vllm.ai/) — High-throughput inference server documentation; the upgrade path past Ollama for high-concurrency teams.',
          '[GitHub Actions Documentation](https://docs.github.com/en/actions) — Official reference for self-hosted runners, secrets, and the Actions JavaScript SDK used in the workflow above.',
          '[GitHub Advanced Security Pricing](https://github.com/pricing) — List-price reference for the cost comparison; verify against your actual negotiated terms.',
          '[Qwen3-Coder Model Card](https://huggingface.co/Qwen/Qwen3-Coder-30B) — Architecture, context window, and licence terms for the recommended review model.',
          '[GitLab CI/CD Reference](https://docs.gitlab.com/ee/ci/) — Equivalent reference for GitLab teams; the LLM-call portion of the workflow is identical.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can a single GPU server handle CI for 50 developers?',
            a: 'A single 24 GB GPU (RTX 4090) handles 15–25 developers comfortably; 50 developers needs a 48 GB card (L40S, A6000 Ada) or a switch from Ollama to vLLM on the same hardware. The bottleneck is concurrency at PR-flush moments — Monday mornings, end of sprint — not steady-state throughput. For 100+ developers, plan for multi-GPU or H100-class hardware.',
          },
          {
            q: 'Does local code review affect PR latency?',
            a: 'Typically no — review latency is 10–30 seconds on a single 24 GB GPU for a typical 200-line diff, and PR-author wait time is dominated by other CI jobs (build, test, lint) that take much longer. The exception is very large PRs (above ~30K tokens of diff) where review can take 60–90 seconds; truncate or split those at the action level.',
          },
          {
            q: 'How do I audit what the model sees?',
            a: 'Ollama logs every request body by default to its log file (location varies by OS; check `journalctl -u ollama` on systemd or the Ollama log directory). Every PR diff that goes into a review is in that log. Combine with `tcpdump` on the GPU server\'s outbound interface to prove zero data egress. The full audit surface is one process and one log file — far simpler than auditing a SaaS code-review API.',
          },
          {
            q: 'Can I block PRs based on local model output?',
            a: 'Yes. The action returns a `verdict` field; if the verdict is `block`, the GitHub Action exits non-zero, which fails the check, which blocks merge if the branch protection rule requires the check to pass. The recommendation is to start with `block` disabled (advisory only) for the first month, measure the false-positive rate, and promote to blocking once the rate is below ~5%.',
          },
          {
            q: 'Does this work with GitLab CI?',
            a: 'Yes — identical architecture. Replace the GitHub Action with a GitLab CI job that runs the same `curl` to the Ollama endpoint and posts the response back to the merge request via the GitLab API. The model, the prompt, the cache, the security model, and the hardware sizing are all the same. Bitbucket Pipelines, Jenkins, and Buildkite work the same way.',
          },
          {
            q: 'How do I keep the model updated without breaking pipelines?',
            a: 'Pin the model digest with `ollama show <model> --modelfile` so production CI uses an exact version. When a new model release lands, pull it on a staging server, run a small fixture set of representative PR diffs, compare the structured output against the production version, and promote only after the regression suite passes. Treat model updates the same as any other dependency upgrade.',
          },
          {
            q: 'Can I use this for code generation in addition to review?',
            a: 'Yes, but the workloads compete for the same GPU and have different latency characteristics. Code review is asynchronous and tolerates 30-second responses; interactive code generation in an editor needs sub-2-second latency. Recommended pattern: use a smaller model (Qwen3-Coder 7B) for editor autocomplete on developer machines, and reserve the dedicated GPU server for review-class workloads in CI.',
          },
          {
            q: 'What\'s the security model for the GPU server?',
            a: 'Treat it like any internal service: bind the inference server to a private interface, put authentication in front (mTLS, shared-secret tokens, or VPN-only access), restrict outbound network with default-deny, and rotate credentials. The LLM-specific addition is auditing model weight provenance — pin the digest, document the source, and confirm zero outbound data egress with periodic packet captures.',
          },
          {
            q: 'Can multiple repos share one GPU server?',
            a: 'Yes — the GPU server is just an HTTP endpoint. Any number of repos can call it as long as the server has capacity. For organisations with 10+ active repos, add per-repo rate limits in the reverse proxy in front of Ollama to prevent one noisy repo (large monorepo, frequent forced pushes) from starving others.',
          },
          {
            q: 'How do I handle false positives in CI?',
            a: 'Three layers. First, prompt design — set high severity thresholds, force structured output, and tag tentative findings. Second, action-level filtering — only `block` on `severity >= "high"`; show medium/low as comments. Third, a feedback loop — let developers react 👍/👎 on each comment, then weekly review the 👎s and update the system prompt to suppress the most common false-positive categories. Expect a 5–10% rate after one month of tuning; below 5% is achievable with sustained iteration.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Replace GitHub Copilot With a Local LLM](/power-local-llm/replace-github-copilot-with-local-llm) — broader cost-replacement context for teams considering self-hosted AI tooling.',
          '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local) — what runs in pipelines vs interactive editor work; the harness layer beneath the model.',
          '[Best Local Coding Models in 2026](/power-local-llm/best-local-coding-models-2026) — model side of the equation: Qwen3-Coder, DeepSeek, Codestral, and the licensing landscape.',
          '[System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — prompt-design grounding for the review system prompt.',
          '[llama.cpp vs Ollama vs vLLM](/local-llms/llamacpp-vs-ollama-vs-vllm) — inference engine comparison; vLLM is the upgrade path past Ollama for high-concurrency teams.',
          '[Power Local LLM Hub](/power-local-llm) — full guide library.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'Lokale LLM im CI/CD: Automatisierte Code Review ohne Cloud',
    seoTitle: 'Lokale LLM-Code-Reviews in CI/CD 2026 automatisieren',
    intro:
      'Selbstgehostete lokale LLM Code Review setzt ein Qwen3-Coder Modell hinter Ihre CI/CD Pipeline, sodass jede Pull Request überprüft wird, ohne dass die Codebasis Ihr Netzwerk verlässt. Die Architektur ist unkompliziert — ein dedizierter GPU Server mit Ollama, eine benutzerdefinierte GitHub Action, die die HTTP API aufruft, und ein Review Prompt mit angepasster False-Positive Rate — und die Wirtschaftlichkeit kippen zugunsten von Self-Hosting irgendwo zwischen 15 und 25 bezahlten GitHub Seats. Dieser Leitfaden führt durch die Architektur, einen funktionierenden GitHub Actions Workflow, Hardware Dimensionierung nach Teamgröße, das Sicherheitsmodell und die operativen Fallstricke, die Teams im zweiten Monat treffen.',
    metaDescription:
      'Selbstgehostete LLM-Code-Review in GitHub Actions: Architektur, funktionierende Workflow-YAML, Hardware-Dimensionierung nach Teamgröße und Sicherheitsmodell.',
    twitterDescription:
      'Selbstgehostete Code Review auf einem GPU Server in Ihrem Netzwerk. GitHub Actions ruft Ollama auf, Qwen3-Coder überprüft PRs, keine Codebasis verlässt Ihren Perimeter. Setup, Dimensionierung und Kostenparität im Inneren.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'NVIDIA L40S 48 GB',
      'NVIDIA A6000 Ada 48 GB',
      'NVIDIA H100 80 GB',
    ],
    audience:
      'Engineering Team Leads, Platform Engineers und DevOps Praktiker, die GitHub Actions oder GitLab CI betreiben und LLM-gesteuerte Code Review hinzufügen möchten, ohne Quellcode an Drittanbieter APIs zu senden. Setzt Vertrautheit mit Docker, Linux und Self-Hosted Runnern voraus.',
    readTime: '15 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'lokale LLM Code Review CI/CD',
    targetKeywords: [
      'lokale llm code review',
      'selbstgehostete code review llm',
      'github actions lokale llm',
      'ollama github actions',
      'private code review ai',
      'code review ohne openai',
    ],
    leadAnswerBlock:
      '**Selbstgehostete lokale LLM Code Review verwendet drei Komponenten: einen dedizierten GPU Server mit Ollama (oder vLLM), eine benutzerdefinierte GitHub Action, die die Diff zur HTTP API des Servers sendet, und einen Review Prompt, der eine strukturierte Entscheidung (genehmigen / Kommentar / blockieren) zurückgibt. Eine RTX 4090 (24 GB) mit Qwen3-Coder 30B bedient komfortabel ein 15–25-Entwickler Team; eine 48 GB Karte (L40S oder A6000 Ada) erweitert auf etwa 50 Entwickler; H100-Klasse Hardware ist ab 100 nötig. Wirtschaftlichkeit kippen zugunsten von Self-Hosting irgendwo zwischen 15 und 25 bezahlten GitHub Advanced Security Seats bei $19/dev/Monat — exakte Kostenparität hängt ab von Hardware Kaufpreis vs. bestehende Kapazität. Der Sicherheitsvorteil ist real: Quellcode verlässt niemals Ihr Netzwerk, die Audit Oberfläche ist ein Prozess und eine Log Datei, und Sie können null Egress mit einer Paket Erfassung beweisen.**',
    quickAnswerTop: {
      de: {
        question: 'Wie betreibe ich ein lokales LLM als Code Reviewer im CI/CD?',
        answer:
          'Richten Sie einen GPU Server mit Ollama (oder vLLM, llama.cpp) und einem Coding-optimierten Modell ein — Qwen3-Coder 30B ist der Mai 2026 Standard. Fügen Sie einen Self-Hosted GitHub Actions Runner im selben Netzwerk hinzu oder exponieren Sie die HTTP API des Servers über ein privates Netzwerk zu bestehenden Runnern. Schreiben Sie eine kleine benutzerdefinierte Action, die die PR Diff abruft, sie mit einem Review Prompt zur LLM Endpoint sendet, eine strukturierte Antwort (genehmigen / Kommentar / blockieren) parst und Inline Kommentare zurück zur PR sendet. Das Modell verlässt niemals Ihren Perimeter; die Action verhält sich wie jede andere Prüfung. Hardware-weise bedient eine RTX 4090 mit Qwen3-Coder 30B 15–25 Entwickler; eine 48 GB Karte erweitert auf 50; ab 100 benötigen Sie H100-Klasse Hardware oder mehrere GPUs.',
        bullets: [
          'Architektur: GPU Server mit Ollama → Self-Hosted Runner (oder HTTP von Cloud Runnern) → benutzerdefinierte GitHub Action → PR Kommentare.',
          'Standard Stack: Ollama + Qwen3-Coder 30B (Apache 2.0) + benutzerdefinierte JavaScript oder Composite Action.',
          'Hardware: 1× RTX 4090 (24 GB) für 15–25 Entwickler; 1× L40S/A6000 Ada (48 GB) für ~50; 1× H100 oder Multi-GPU für 100+.',
          'Wirtschaftlichkeit: Kostenparität vs GitHub Advanced Security bei $19/dev/Monat liegt bei ungefähr 15–25 bezahlten Seats, abhängig von Hardware Kosten.',
          'Sicherheit: Quellcode verlässt niemals Ihr Netzwerk; Egress kann mit einer Paket Erfassung bewiesen werden; Audit Oberfläche ist ein Prozess und eine Log.',
          'GitLab CI funktioniert auf die gleiche Weise — Runner statt Action, aber der LLM Aufruf ist identisch.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Schlüsselergebnisse', anchor: '#key-takeaways' },
      { label: 'Schnellübersicht', anchor: '#quick-facts' },
      { label: 'Architekturvergleich', anchor: '#architecture-comparison' },
      { label: 'Der empfohlene Stack', anchor: '#recommended-stack' },
      { label: 'GitHub Actions Workflow', anchor: '#workflow' },
      { label: 'Hardware Dimensionierung nach Teamgröße', anchor: '#hardware-sizing' },
      { label: 'GPU Sharing über Builds hinweg', anchor: '#gpu-sharing' },
      { label: 'Kostenvergleich vs GitHub Advanced Security', anchor: '#cost-comparison' },
      { label: 'Sicherheitsmodell und Audit Posture', anchor: '#security-model' },
      { label: 'Prompt Design für Code Review', anchor: '#prompt-design' },
      { label: 'Umgang mit falsch positiven Ergebnissen', anchor: '#false-positives' },
      { label: 'Operational Pitfalls im zweiten Monat', anchor: '#operational-pitfalls' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Ressourcen', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Architektur besteht aus drei Teilen:** GPU Server mit Ollama (oder vLLM) → CI Runner, der es über das Netzwerk erreichen kann → benutzerdefinierte Action, die die PR Diff sendet und eine strukturierte Entscheidung parst. Die gleiche Form auf GitHub Actions, GitLab CI, Buildkite und Jenkins.',
          '**Standard Stack im Mai 2026:** Ollama + Qwen3-Coder 30B (Apache 2.0) + eine dünne benutzerdefinierte GitHub Action. Gesamt Infrastruktur: eine GPU Box, ein Runner.',
          '**Hardware Dimensionierung:** RTX 4090 (24 GB, ca. 2.299 €) bedient 15–25 Entwickler; L40S oder A6000 Ada (48 GB, ca. 8.999–9.999 €) erweitert auf 50; H100 (80 GB, ca. 27.000+ €) oder Multi-GPU für 100+.',
          '**Wirtschaftlichkeit kippen zugunsten von Self-Host** bei ungefähr 15–25 bezahlten GitHub Advanced Security Seats ($19/dev/Monat) — ein RTX 4090 Build wird in 5–10 Monaten bei dieser Teamgröße rentabel.',
          '**Sicherheitsvorteil ist real, nicht nur Marketing.** Quellcode verlässt niemals Ihr Netzwerk; ausgehender Egress kann mit `tcpdump` null bewiesen werden; die gesamte Audit Oberfläche ist ein Ollama Prozess und eine Log Datei.',
          '**Falsch positive Ergebnisse sind die operative Steuer.** Planen Sie eine Tuning Schleife im ersten Monat: Prompt Iteration, Severity Thresholds und einen Reviewer Feedback Ingestion Path, damit sich der Prompt im Laufe der Zeit verbessert.',
          '**Latenz ist akzeptabel.** Eine 24 GB GPU mit Qwen3-Coder 30B überprüft eine typische 200-zeilige PR Diff in unter 30 Sekunden. PR-Author Wartezeit wird von anderen CI Jobs dominiert, nicht vom Review.',
          '**Ersetzen Sie nicht ganz menschliche Review.** Das lokale LLM ist ein First-Pass Triage Gate — es erfasst offensichtliche Probleme, kennzeichnet riskante Änderungen und befreit Menschen von Entscheidungs Calls, bei denen LLMs immer noch falsch liegen.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnellübersicht',
        items: [
          '**Empfohlenes Modell:** Qwen3-Coder 30B bei Q4_K_M (~17 GB VRAM, Apache 2.0).',
          '**Empfohlene Laufzeit:** Ollama für Setup Vereinfachung; vLLM wenn Sie höhere Concurrency auf derselben GPU benötigen.',
          '**Minimale GPU für ernst zu nehmende Teams:** RTX 4090 (24 GB). Kleinere Karten erzwingen das 7B Modell und merklich schlechtere Review Qualität.',
          '**Concurrency auf einer einzelnen 24 GB GPU:** komfortabel 1–3 gleichzeitige Reviews auf Qwen3-Coder 30B; Queue darüber hinaus.',
          '**Latenz Ziel:** unter 30 Sekunden für eine 200-zeilige Diff. Danach ändert sich PR-Author Verhalten und Reviews werden umgangen.',
          '**Audit Posture:** Null ausgehender Egress auf dem GPU Server ist beweisbar; gesamte Oberfläche ist `ollama serve` + eine einzelne Log Datei.',
          '**Kostenparität vs GitHub Advanced Security ($19/dev/Monat):** 15–25 bezahlte Seats decken einen RTX 4090 Build in 5–10 Monaten ab.',
          '**GitLab CI Parität:** identische Architektur, ersetzen Sie die GitHub Action mit einem CI Job, der die gleiche HTTP Endpoint aufruft.',
        ],
      },
      architectureComparison: {
        id: 'architecture-comparison',
        title: 'Architekturvergleich: Drei echte Optionen für Code Review in CI',
        content:
          '**Drei Architekturen decken effektiv alle PR Review Setups im Mai 2026 ab.** Self-Hosted Local LLM ist einer davon — die richtige Wahl, wenn Quellcode Ihr Netzwerk nicht verlassen kann oder wenn Seat Count Wirtschaftlichkeit feste Infrastruktur begünstigt.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Selbstgehostete lokale LLM Code Review wird schneller rentabel als GitHub Advanced Security bei 15–25 bezahlten Seats und hält Quellcode innerhalb Ihres Netzwerks — die richtige Architektur für Teams mit Datenschutz oder Seat Count Druck.',
          },
          {
            type: 'plain-terms',
            text: 'Drei Optionen existieren für AI Code Review in CI. GitHub Advanced Security ist am einfachsten zu aktivieren und am teuersten im Maßstab. Eine Cloud LLM API (OpenAI, Anthropic) ist billig zum Starten und sendet jede Diff an Dritte. Self-Hosted Local LLM hat die höchsten Setup Kosten und ist die einzige Option, die Ihre Codebasis innerhalb Ihres Perimeter hält — und bei ungefähr 15–25 bezahlten Seats wird es das billigste der drei über ein Jahr.',
          },
        ],
        columns: ['Architektur', 'Setup Komplexität', 'Kosten (10 Entwickler)', 'Kosten (50 Entwickler)', 'PR Latenz', 'Beste für'],
        rows: [
          {
            'Architektur': 'GitHub Advanced Security',
            'Setup Komplexität': 'Niedrig (ein Toggle)',
            'Kosten (10 Entwickler)': '$190/Mo',
            'Kosten (50 Entwickler)': '$950/Mo',
            'PR Latenz': 'Sub-Minute (verwaltet)',
            'Beste für': 'Teams unter ~15 bezahlten Seats ohne Datenschutz Einschränkung',
          },
          {
            'Architektur': 'Cloud LLM API (OpenAI / Anthropic)',
            'Setup Komplexität': 'Niedrig–Mittel (API Key + Action)',
            'Kosten (10 Entwickler)': '~$50–200/Mo (Nutzung)',
            'Kosten (50 Entwickler)': '~$300–1.200/Mo (Nutzung)',
            'PR Latenz': 'Sekunden',
            'Beste für': 'Teams, die sich wohlfühlen, Quellcode an Drittanbieter API zu senden',
          },
          {
            'Architektur': 'Lokale LLM auf dedizierter GPU',
            'Setup Komplexität': 'Mittel–Hoch (GPU Server + Runner + Action)',
            'Kosten (10 Entwickler)': 'ca. 2.299 € Hardware (einmalig)',
            'Kosten (50 Entwickler)': 'ca. 8.999+ € Hardware (einmalig)',
            'PR Latenz': '10–30 Sekunden (Single-GPU)',
            'Beste für': 'Datenschutz sensitive Teams, 15+ bezahlte Seats, EU Compliance Kontexte',
          },
          {
            'Architektur': 'Lokale LLM auf gemeinsamer Infra (bestehende GPU)',
            'Setup Komplexität': 'Mittel (nur Runner + Action)',
            'Kosten (10 Entwickler)': '€0 marginal (bestehende Kapazität)',
            'Kosten (50 Entwickler)': '€0 marginal (bestehende Kapazität)',
            'PR Latenz': 'Variabel (hängt von Contention ab)',
            'Beste für': 'Teams, die bereits GPU Infra für ML oder Analytics betreiben',
          },
        ],
      },
      recommendedStack: {
        id: 'recommended-stack',
        title: 'Der empfohlene Stack: Ollama + Qwen3-Coder + eine dünne GitHub Action',
        content:
          '**Der einfachste Production-Grade Stack besteht aus drei Komponenten.** Jede ist Open Source, kostenlos und gut dokumentiert; die Integrations Oberfläche zwischen ihnen ist HTTP.',
        items: [
          '**GPU Server** mit **Ollama** (oder vLLM für höhere Concurrency). Ollama exponiert eine OpenAI-kompatible HTTP API auf `localhost:11434` standardmäßig; binden Sie sie an eine private Schnittstelle oder einen Reverse Proxy mit Auth, bevor Sie zu Runnern exponieren.',
          '**Coding-optimiertes Modell:** **Qwen3-Coder 30B** bei Q4_K_M ist der Mai 2026 Standard — stärkste Open-Weight Coding Richtung, 256K Kontext, Apache 2.0 Lizenz, passt auf eine 24 GB GPU. Für 8–16 GB GPUs verwenden Sie Qwen3-Coder 7B mit dem Verständnis, dass Review Qualität merklich sinkt.',
          '**CI Integration:** ein Self-Hosted GitHub Actions Runner im selben Netzwerk wie der GPU Server, oder Ihre bestehenden GitHub-gehosteten Runner, die den GPU Server über ein privates Netzwerk erreichen (Tailscale, WireGuard oder VPC Peering).',
          '**Benutzerdefinierte GitHub Action** (JavaScript oder Composite), die die PR Diff über die GitHub API abruft, sie mit einem Review Prompt zur Ollama Endpoint sendet, die strukturierte Antwort parst und Inline Kommentare zurück zur PR sendet.',
          '**Optional:** ein kleiner Redis oder SQLite Cache, der nach Datei Hash + Diff Hash schlüsselt, um Re-Reviews von unveränderten Dateien in nachfolgenden CI Läufen zu vermeiden.',
          '**GitLab Parität:** die gleiche Architektur, mit einem GitLab CI Job, der die GitHub Action ersetzt. Der LLM Aufruf ist identisch.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Binden Sie `ollama serve` an eine private Netzwerk Schnittstelle (oder `127.0.0.1` wenn der Runner auf dem gleichen Host ist) und legen Sie Auth davor, bevor Sie Cross-Host exponieren. Der Standard `OLLAMA_HOST=0.0.0.0:11434` ohne Auth ist in Ordnung für ein Single-Machine Experiment, aber ein Sicherheits Fehler in jedem anderen Kontext.',
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: 'Ein funktionierender GitHub Actions Workflow',
        content:
          '**Der minimale brauchbare Workflow besteht aus etwa 50 Zeilen YAML.** Diese Vorlage läuft bei PR Open und Synchronize, ruft die Diff ab, ruft Ollama auf und sendet einen Kommentar zurück. Production Deployments fügen Caching, Severity Thresholds und die Möglichkeit hinzu, die PR bei einem "block" Verdikt zu blockieren.',
        codeLanguage: 'yaml',
        codeBlock: `# .github/workflows/local-llm-review.yml
name: Local LLM Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: self-hosted   # oder jeder Runner, der OLLAMA_HOST erreichen kann
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Generate diff
        id: diff
        run: |
          git diff origin/\${{ github.base_ref }}...HEAD > /tmp/pr.diff
          echo "size=$(wc -c < /tmp/pr.diff)" >> "$GITHUB_OUTPUT"

      - name: Call local LLM for review
        id: review
        env:
          OLLAMA_HOST: \${{ secrets.OLLAMA_HOST }}   # z.B. http://gpu-server.internal:11434
        run: |
          DIFF=$(jq -Rs . < /tmp/pr.diff)
          curl -sS "$OLLAMA_HOST/api/chat" \\
            -H 'Content-Type: application/json' \\
            -d "{
              \\"model\\": \\"qwen3-coder:30b\\",
              \\"stream\\": false,
              \\"format\\": \\"json\\",
              \\"messages\\": [
                {\\"role\\": \\"system\\", \\"content\\": \\"You are a senior code reviewer. Return JSON: {verdict: 'approve'|'comment'|'block', summary: string, comments: [{path, line, severity, message}]}\\"},
                {\\"role\\": \\"user\\", \\"content\\": $DIFF}
              ]
            }" > /tmp/review.json
          echo "verdict=$(jq -r '.message.content | fromjson | .verdict' < /tmp/review.json)" >> "$GITHUB_OUTPUT"

      - name: Post review comment
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const review = JSON.parse(JSON.parse(fs.readFileSync('/tmp/review.json')).message.content);
            const body = \`### Local LLM Review: \\\`\${review.verdict}\\\`\\n\\n\${review.summary}\`;
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body
            });

      - name: Block on critical verdict
        if: steps.review.outputs.verdict == 'block'
        run: exit 1
`,
        items: [
          'Der Runner muss `OLLAMA_HOST` über das Netzwerk erreichen können — Self-Hosted im gleichen VPC, oder über Tailscale / WireGuard, wenn der GPU Server woanders lebt.',
          'Der System Prompt erzwingt eine strukturierte JSON Antwort, damit die Action sauber auf Verdikt verzweigen kann. Ohne `format: "json"` und ein striktes Schema im Prompt werden Sie operative Zeit bei Freiform Output Parsing verbringen.',
          'Der `fetch-depth: 0` Checkout ist notwendig, um eine echte Diff gegen den Base Branch zu berechnen — flache Checkouts produzieren malformed Diffs.',
          'Für Repositories über ~50K Zeilen geänderter Code pro PR truncate oder chunk die Diff vorher. Der 256K Kontext auf Qwen3-Coder 30B ist großzügig, aber praktischer Arbeits Kontext ist näher an 64K–128K (siehe [Best Local Coding Models in 2026](/de/power-local-llm/best-local-coding-models-2026)).',
          'Für Prompt-Design Tiefe — System vs User Prompts, Beispiele, strukturierte Outputs — siehe [System Prompt vs User Prompt: What\'s the Difference](/de/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Workflow ist absichtlich minimal. Production Deployments fügen hinzu: einen Cache, der nach Datei + Diff Hash schlüsselt, um Re-Reviews von unveränderten Dateien zu überspringen, Severity Thresholds (nur blockieren bei `severity >= "high"`), Inline Comment Posting (statt einem einzelnen Summary Comment), Pro-Sprache Prompt Varianten und Reviewer Feedback Ingestion, um den Prompt im Laufe der Zeit zu verbessern.',
          },
        ],
      },
      hardwareSizing: {
        id: 'hardware-sizing',
        title: 'Hardware Dimensionierung nach Teamgröße',
        content:
          '**Eine RTX 4090 (24 GB) bedient ein 15–25-Entwickler Team komfortabel.** Der Bottleneck auf einer einzelnen GPU ist nicht Durchsatz pro Review — es ist Concurrency bei PR-Flush Momenten (Montagmorgen, End of Sprint). Sizing Regeln unten gehen von Qwen3-Coder 30B bei Q4_K_M und einer typischen 50–500-zeiligen PR Diff aus.',
        columns: ['Teamgröße', 'GPU', 'VRAM', 'Gleichzeitige Reviews', 'Ungefährer Preis (Mai 2026)'],
        rows: [
          { 'Teamgröße': '~5 Entwickler', 'GPU': 'RTX 4070 / 4070 Ti', 'VRAM': '12–16 GB', 'Gleichzeitige Reviews': '1 (nur Qwen3-Coder 7B)', 'Ungefährer Preis (Mai 2026)': 'ca. 799–1.099 €' },
          { 'Teamgröße': '15–25 Entwickler', 'GPU': 'RTX 4090 / 5090', 'VRAM': '24–32 GB', 'Gleichzeitige Reviews': '1–3 (Qwen3-Coder 30B)', 'Ungefährer Preis (Mai 2026)': 'ca. 2.299–2.799 €' },
          { 'Teamgröße': '25–50 Entwickler', 'GPU': 'L40S / A6000 Ada', 'VRAM': '48 GB', 'Gleichzeitige Reviews': '3–6', 'Ungefährer Preis (Mai 2026)': 'ca. 8.999–9.999 €' },
          { 'Teamgröße': '50–100 Entwickler', 'GPU': '2× RTX 4090 oder 1× H100', 'VRAM': '48 GB / 80 GB', 'Gleichzeitige Reviews': '6–10', 'Ungefährer Preis (Mai 2026)': 'ca. 5.000 € (2× 4090) oder 27.000+ € (H100)' },
          { 'Teamgröße': '100+ Entwickler', 'GPU': 'Multi-GPU H100 oder H200', 'VRAM': '160 GB+', 'Gleichzeitige Reviews': '10+ mit vLLM', 'Ungefährer Preis (Mai 2026)': 'ca. 50.000+ €' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für Teams, die die 50-Entwickler Schwelle überschreiten, wechseln Sie von Ollama zu vLLM. Ollama priorisiert Benutzerfreundlichkeit; vLLM priorisiert Durchsatz auf gemeinsamen GPUs. Das gleiche Qwen3-Coder 30B Modell läuft auf beiden — nur der Inference Server ändert sich.',
          },
        ],
      },
      gpuSharing: {
        id: 'gpu-sharing',
        title: 'GPU Sharing über Builds und anderen Workloads hinweg',
        content:
          '**Eine dedizierte GPU für Code Review ist die einfachste Architektur, aber nicht die einzige.** Teams, die bereits GPU Infrastruktur für ML Inference oder Training betreiben, können Shares nutzen — mit dem Kompromiss, dass Contention Review Latenz spitz macht.',
        items: [
          '**Dedizierte GPU nur für Review:** einfachstes Modell. Latenz ist vorhersehbar; Kapazitäts Planung ist unkompliziert; Fehlermodi sind isoliert. Die Empfehlung für jedes Team, das nicht bereits GPU Infrastruktur betreibt.',
          '**Gemeinsame GPU mit ML Inference:** funktioniert, wenn der Inference Workload eine stabile Hülle hat (z.B. ein kleiner Embedding Service, der in 4–6 GB passt). Das Review Modell besetzt den Rest von VRAM. Scheduling Kollisionen sind auf diesem Muster selten.',
          '**Gemeinsame GPU mit ML Training:** stark abgeraten. Training Jobs sprengen VRAM Nutzung zum Limit und verhungern das Review Modell, was 30–120-sekündige Review Latenzen verursacht, die Entwicklervertrauen erode.',
          '**vLLM mit Paged Attention:** Purpose-Built für High-Concurrency LLM Serving. Die gleiche RTX 4090, die unter Ollama 1–3 gleichzeitige Reviews bedient, kann unter vLLM 4–8 bedienen, zum Preis eines komplexeren Setups. Wert es ab 25 Entwickler.',
          '**Multi-Tenant auf H100:** bei der 100+ Entwickler Skala, partitionieren Sie einen H100 in MIG Slices oder betreiben Sie vLLM mit Per-Tenant Quoten. Dies ist Platform Engineering Territorium; improvisieren Sie es nicht.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Kostenvergleich vs GitHub Advanced Security',
        content:
          '**Die Wirtschaftlichkeit kippen zugunsten von Self-Host bei ungefähr 15–25 bezahlten Seats.** Dies ist ein Vergleich mit Ein-Jahr Payback; längere Zeithorizonte machen Self-Hosting günstiger.',
        items: [
          '**GitHub Advanced Security (Code Security):** $19/Entwickler/Monat bei Listenpreis (verifizieren Sie auf der GitHub Pricing-Seite; Volumen Rabatte verfügbar für Enterprise Kunden).',
          '**Cloud LLM API (z.B. OpenAI, Anthropic):** grob $50–200/Monat pro aktiver Entwickler bei typischem PR Volumen; variiert wild nach Codebase Größe und Review Prompt Design.',
          '**Self-Hosted Lokale LLM, RTX 4090 Build:** grob ca. 2.300 € einmalige Hardware (GPU + ein einfaches Server Gehäuse). Stromverbrauch: ~50W untätig, ~350W unter Last — nennen wir es ca. 18–28€/Monat in Elektrizität bei typischer Nutzung. Keine Pro-Seat Gebühren.',
          '**Kostenparität bei 10 Entwickler:** GHAS $190/Monat vs Self-Hosted ca. 25€/Monat betrieben + ca. 2.300 € Capex. Capex wird in ~14 Monaten rentabel.',
          '**Kostenparität bei 25 Entwickler:** GHAS $475/Monat vs Self-Hosted ca. 25€/Monat betrieben + ca. 2.300 € Capex. Capex wird in ~5–6 Monaten rentabel.',
          '**Kostenparität bei 50 Entwickler:** GHAS $950/Monat vs Self-Hosted ca. 40€/Monat betrieben + ca. 7.500 € Capex (48 GB GPU). Capex wird in ~8 Monaten rentabel.',
          '**Die Capex Zahl ist das, was die Mathematik dominiert.** Wenn Sie eine GPU speziell dafür kaufen, ist die Payback real. Wenn Sie bestehende GPU Kapazität haben, sind die Marginalkosten näher an null und Self-Hosting gewinnt sofort.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Zahlen sind Listenpreis Vergleiche. Verhandelte GHAS Preise für große Enterprises verschieben die Kostenparität; bestehende GPU Kapazität bricht sie zusammen. Machen Sie die Mathematik mit Ihren echten Kosten erneut, bevor Sie sich auf einen Hardware Kauf festlegen.',
          },
        ],
      },
      securityModel: {
        id: 'security-model',
        title: 'Sicherheitsmodell und Audit Posture',
        content:
          '**Die Schlagzeilen Sicherheits Behauptung — "Quellcode verlässt niemals Ihr Netzwerk" — ist wahr, nachweisbar und das stärkste Argument für diese Architektur.** Die Audit Oberfläche ist klein genug, um in einer Procurement Review zu verteidigen.',
        items: [
          '**Das Modell sieht nur die Diff, die Ihre Action sendet.** Keine Telemetrie, keine versteckten Netzwerk Aufrufe. Bestätigbar mit `tcpdump` oder `nft monitor` auf der GPU Server Ausgangs Schnittstelle — unter Steady-State Operation sollten Sie null ausgehende Pakete zu Nicht-Internen Hosts sehen.',
          '**Die vollständige Audit Oberfläche ist ein Prozess und eine Log Datei.** `ollama serve` ist der gesamte LLM Stack. Seine Logs (Request Bodies, Latenz, Model Loading Events) sind der Audit Record. Kein SaaS Dashboard zum Abfragen, keine Drittanbieter Aufbewahrungs Richtlinie zum Lesen.',
          '**Netzwerk Isolierung ist unkompliziert.** Binden Sie `ollama serve` an eine private Schnittstelle; legen Sie einen Reverse Proxy mit mTLS oder Shared-Secret Auth davor; lehnen Sie ausgehende auf dem GPU Server Netzwerk Namespace ab, außer zu Ihrem CI Runner Subnet. Standard Zero-Trust Muster, keine LLM-spezifisch Magie.',
          '**Die Modell Gewichte sind statische, von Vendor signierte Artefakte.** Ziehen Sie sie einmal über Ollama, pinnen Sie den Digest und das Modell kann nicht ohne Operator Action ändern. Dies ist eine stärkere Supply-Chain Story als eine SaaS API, wo das Upstream Modell stillschweigend getauscht werden kann.',
          '**Compliance Postur:** Null Daten Egress ist einfach zu dokumentieren für SOC 2, ISO 27001, GDPR und die EU AI Act Limited-Risk Klassifizierung. Der schwierigste Teil von Self-Hosting Compliance ist gewöhnlich die Dokumentation des Inference Server selbst; Ollama und vLLM sind beide gut dokumentiert.',
          '**Das Modell sieht immer noch Ihren Code.** Self-Hosted bedeutet nicht privat vor dem Modell — es bedeutet privat vor Dritten. Insider-Threat Szenarien (Engineer mit GPU Server Zugang liest Logs, die vergangene PR Diffs enthalten) sind immer noch im Scope; rotieren Sie Logs und limitieren Sie Zugang entsprechend.',
        ],
      },
      promptDesign: {
        id: 'prompt-design',
        title: 'Prompt Design für Code Review',
        content:
          '**Die einzige größte Determinante der Falsch-Positiv Rate ist der System Prompt.** Ein vager "überprüfe diesen Code" Prompt produziert vage Review Kommentare; ein spezifischer Prompt mit Severity Thresholds und strukturiertem Output produziert actionable Feedback.',
        items: [
          '**Strukturierter Output ist nicht verhandelbar.** Erzwingen Sie JSON mit einem strikten Schema (`verdict`, `summary`, `comments[]`). Ohne es werden 30% des Action Code mit Freiform Output Parsing verbracht und die Fehlermodi sind subtil.',
          'Für den vollständigen Leitfaden zum Strukturierten Output Enforcement über Modelle, siehe [structured output and JSON mode](/de/prompt-engineering/structured-output-and-json-mode).',
          '**Severity Thresholds gehören zum Prompt, nicht zur Action.** Erzählen Sie dem Modell, was als `kritisch`, `hoch`, `mittel`, `niedrig` zählt; erzählen Sie ihm, Befunde mit niedriger Severity zu filtern, es sei denn, es wird ausdrücklich gefragt. Dies ist viel zuverlässiger als Post-Hoc Filterung auf einem Freiform Severity Feld.',
          '**Veranker den Prompt mit Beispielen.** Ein 1–2-Shot Prompt mit einer echten Diff und einem echten Ideal-Review JSON übertrifft Zero-Shot massiv für das gleiche Modell und die gleiche Diff Größe.',
          '**Unterscheide "überprüfe" von "Kommentar" Absicht.** Ein Reviewer Kommentar ("erwägen Sie, dies zu einem Helper zu extrahieren") und ein Blocker ("dies führt eine SQL Injection ein") benötigen unterschiedliche Aktionen in CI. Taggen Sie sie im strukturierten Output und lassen Sie die Action nur auf Blocker blockieren.',
          '**Pro-Sprache Prompt Varianten helfen ab einer gewissen Größe.** Ein Polyglot Codebase profitiert von einem Prompt, der relevante Sprach Idiome referenziert (Pythonic vs Idiomatisch Rust). Dies ist optional unter ~25 Entwickler; wertvoll darüber.',
          'Für tiefere Prompt-Engineering Fundament — System vs User Prompts, Strukturierte Outputs, Few-Shot Prompting — siehe [System Prompt vs User Prompt: What\'s the Difference](/de/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference).',
        ],
      },
      falsePositives: {
        id: 'false-positives',
        title: 'Umgang mit falsch positiven Ergebnissen ohne Entwicklervertrauen zu zerode',
        content:
          '**Falsch positive Ergebnisse sind die operative Steuer auf LLM Code Review.** Eine 5% Rate ist in Ordnung; 20% ist unerträglich; der Unterschied ist meist Prompt Iteration und eine Feedback Schleife, nicht das Modell.',
        items: [
          '**Setzen Sie einen "block" Threshold hoch.** Ein `block` Verdikt, das bei jedem kleineren Lint Problem feuert, trainiert Entwickler, die Prüfung zu umgehen. Reservieren Sie `block` für Sicherheits Probleme, fehlgeschlagene Tests und klare Correctness Fehler.',
          '**Lassen Sie Nicht-Blocking Kommentare billig fühlen.** Inline Kommentare, bei denen das Modell unsicher ist, sollten getaggt werden ("tentativ" / "erwägen"), damit Autoren sie schnell ohne Zeremonien verwerfen können.',
          '**Baue eine Feedback Schleife im ersten Monat auf.** Füge eine Reaktion (👍 / 👎) zu jedem Review Kommentar hinzu. Gelegentlich (wöchentlich funktioniert) überprüfe die 👎s und aktualisiere den System Prompt mit expliziten "markiere X nicht" Anweisungen für die häufigsten Falsch-Positiv Kategorien.',
          '**Ratenlimit Comment Volumen pro PR.** Eine einzelne PR sollte nicht mehr als 5–10 Kommentare vom LLM erhalten; danach bricht Signal-Noise zusammen. Begrenze die Action auf Prompt Level ("geben zurück höchstens N Kommentare").',
          '**Verfolge die Verdikt-zu-Merge Korrelation wöchentlich.** Wenn 80% der `block` Verdikt trotzdem Merge, Ihr Threshold ist zu aggressiv. Wenn 0% der `comment` Verdikt irgendeine Human Action bekommen, produziert Ihr Prompt Rauschen.',
        ],
      },
      operationalPitfalls: {
        id: 'operational-pitfalls',
        title: 'Operational Pitfalls im zweiten Monat',
        content:
          '**Setup bekommt Aufmerksamkeit; Operationen werden ignoriert.** Die Fehler unten sind diejenigen, die Teams das Projekt nach der Honeymoon Periode aufgeben lassen.',
        items: [
          '**Modell Updates brechen Prompts.** Ein neues Qwen3-Coder Release ändert Output Formatierung subtil; strukturiertes JSON Parsing fällt in CI; Reviews geben auf zu posten. Pinne den Model Digest mit `ollama show <model> --modelfile`; upgrade in einem Staging Branch bevor Sie promoten.',
          '**GPU Memory Fragmentierung unter langer Uptime.** Ein GPU Server, der 24/7 läuft, kann VRAM fragmentieren und sich weigern, neue Zuweisungen nach Wochen der Operation zu machen. Starten Sie `ollama serve` wöchentlich über einen Cron Job erneut; dies ist billig und vermeidet die Fehlermodus ganz.',
          '**CI Runner Contention.** Ein Self-Hosted Runner, der sowohl den LLM Server als auch andere CI Jobs hostet, wird Review Latenz unter Build Load sprengen. Trennen Sie den Runner und den GPU Server, wenn die Teamgröße ~25 Entwickler überschreitet.',
          '**Diff Größen Wachstum.** PR Größen driften nach oben; schließlich überschreitet eine PR den praktischen Arbeits Kontext des Modells und Reviews degrade stillschweigend. Füge einen Guard in der Action hinzu, der Diffs über ~30K Tokens splittet oder truncated und dem Autor warnt.',
          '**Strom und Kühlung.** Ein kontinuierlich geladener RTX 4090 zieht ~350W unter Inference und produziert eine bedeutsame Menge Hitze. Ein Closet-großer Server Room ohne aktive Kühlung wird die GPU drosseln; Drosseln kostet Latenz und Entwickler bemerken.',
          '**Vergessene Log Rotation.** Ollama loggt jeden Request Body standardmäßig. Nach drei Monaten PR Reviews ist die Log Datei groß und enthält historische PR Diffs in Klartexte. Rotate Logs wöchentlich; archivieren oder löschen pro Ihrer Daten Aufbewahrung Richtlinie.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler beim Setup von lokaler LLM Code Review',
        items: [
          '**Fehler 1: Start mit einem 7B Modell auf einer 16 GB GPU.** Qwen3-Coder 7B Reviews sind merklich schlechter als 30B Reviews; Entwickler verlieren schnell Vertrauen und das Projekt wird abgestellt. Wenn Sie das 30B nicht passen können, upgraden Sie entweder die GPU oder verwenden Sie eine Cloud API für die ersten sechs Monate während Sie Budget sichern.',
          '**Fehler 2: Blockieren PRs auf `block` Verdikt von Tag Eins.** Der erste Monat ist Kalibrierung; behandeln Sie alle Outputs als beratend, bis Sie die Falsch-Positiv Rate gemessen haben. Promoten Sie zu blockieren, nur nachdem die Rate unter ~5% liegt.',
          '**Fehler 3: Exponieren Sie `ollama serve` auf `0.0.0.0:11434` ohne Auth.** Dies ist das LLM-Ära Äquivalent zum Verlassen von Redis auf einer öffentlichen Schnittstelle gebunden. Binden Sie an eine private Schnittstelle und legen Sie Auth davor, bevor Sie Cross-Host exponieren.',
          '**Fehler 4: Cache überspringen.** Re-Reviewing unveränderte Dateien bei jedem CI Run verschwendet ~80% des Inference Budget auf einem typischen PR. Ein kleiner Datei-Hash + Diff-Hash Cache (Redis oder SQLite) reduziert Review Latenz und GPU Load dramatisch.',
          '**Fehler 5: Laufen Training Jobs auf der gleichen GPU.** Training sprengt VRAM Nutzung zum Limit und verhungert das Review Modell. Verwenden Sie separate GPUs oder, wenn Sie müssen Share, führen Sie Training auf einem strikten Schedule durch, das nicht mit Peak PR Hours überlappt.',
          '**Fehler 6: Bau die GitHub Action ohne Feedback Schleife.** Ein Review System ohne 👍/👎 Reaktionen kann nicht verbessert. Baue die Schleife in Woche Eins; sammele Daten; iteriere auf dem Prompt monatlich.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Ollama Dokumentation](https://github.com/ollama/ollama/blob/main/docs/api.md) — Offizielle HTTP API Referenz für `/api/chat`, `/api/generate`, strukturiertem Output und Modell Management.',
          '[vLLM Dokumentation](https://docs.vllm.ai/) — High-Throughput Inference Server Dokumentation; der Upgrade Path jenseits von Ollama für High-Concurrency Teams.',
          '[GitHub Actions Dokumentation](https://docs.github.com/en/actions) — Offizielle Referenz für Self-Hosted Runner, Secrets und die Actions JavaScript SDK, die im oben Workflow verwendet wird.',
          '[GitHub Advanced Security Preise](https://github.com/pricing) — Listenpreis Referenz für den Kostenvergleich; überprüfen Sie gegen Ihre echten verhandelten Bedingungen.',
          '[Qwen3-Coder Model Card](https://huggingface.co/Qwen/Qwen3-Coder-30B) — Architektur, Kontext Fenster und Lizenz Bedingungen für das empfohlene Review Modell.',
          '[GitLab CI/CD Referenz](https://docs.gitlab.com/ee/ci/) — Äquivalente Referenz für GitLab Teams; die LLM-Call Portion des Workflow ist identisch.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ein einzelner GPU Server CI für 50 Entwickler bedienen?',
            a: 'Eine einzelne 24 GB GPU (RTX 4090) bedient 15–25 Entwickler komfortabel; 50 Entwickler braucht eine 48 GB Karte (L40S, A6000 Ada) oder ein Wechsel von Ollama zu vLLM auf der gleichen Hardware. Der Bottleneck ist Concurrency bei PR-Flush Momenten — Montagmorgen, End of Sprint — nicht Steady-State Durchsatz. Für 100+ Entwickler, planen Sie für Multi-GPU oder H100-Klasse Hardware.',
          },
          {
            q: 'Beeinflusst lokale Code Review die PR Latenz?',
            a: 'Typisch nein — Review Latenz ist 10–30 Sekunden auf einer einzelnen 24 GB GPU für eine typische 200-zeilige Diff, und PR-Author Wartezeit wird von anderen CI Jobs dominiert (build, test, lint), die viel länger dauern. Die Ausnahme ist sehr große PRs (über ~30K Tokens Diff) wo Review 60–90 Sekunden dauern kann; truncate oder splitte diese auf Action Level.',
          },
          {
            q: 'Wie audite ich, was das Modell sieht?',
            a: 'Ollama loggt jeden Request Body standardmäßig in seine Log Datei (Location variiert nach OS; prüfen Sie `journalctl -u ollama` auf Systemd oder das Ollama Log Directory). Jede PR Diff, die in einem Review geht, ist in diesem Log. Kombiniert mit `tcpdump` auf der GPU Server Ausgangs Schnittstelle, um null Daten Egress zu beweisen. Die vollständige Audit Oberfläche ist ein Prozess und eine Log Datei — viel einfacher als ein SaaS Code-Review API zu auditen.',
          },
          {
            q: 'Kann ich PRs basierend auf lokale Modell Output blockieren?',
            a: 'Ja. Die Action gibt ein `verdict` Feld zurück; wenn das Verdikt `block` ist, gibts die GitHub Action Non-Zero aus, welcher die Prüfung fehlgeschlagen macht, welcher mergen blockiert wenn die Branch Protection Rule die Prüfung zu Pass erfordert. Die Empfehlung ist, mit `block` deaktiviert zu starten (beratend nur) für den ersten Monat, die Falsch-Positiv Rate zu messen und zu blockieren zu promoten, einmal die Rate unter ~5% ist.',
          },
          {
            q: 'Funktioniert das mit GitLab CI?',
            a: 'Ja — identische Architektur. Ersetzen Sie die GitHub Action mit einem GitLab CI Job, der die gleiche `curl` zur Ollama Endpoint läuft und die Antwort zurück zum Merge Request via GitLab API sendet. Das Modell, der Prompt, der Cache, das Sicherheitsmodell und die Hardware Dimensionierung sind alle gleich. Bitbucket Pipelines, Jenkins und Buildkite funktionieren auf die gleiche Weise.',
          },
          {
            q: 'Wie halte ich das Modell aktualisiert ohne Pipelines zu brechen?',
            a: 'Pinne den Modell Digest mit `ollama show <model> --modelfile`, damit Production CI eine exakte Version verwendet. Wenn ein neues Modell Release landet, ziehen Sie es auf einem Staging Server, führen Sie eine kleine Fixture Menge repräsentativer PR Diffs durch, vergleichen Sie die strukturierte Ausgabe gegen die Production Version und promoten Sie nur, nachdem die Regression Suite passed. Behandeln Sie Modell Updates wie jede andere Abhängigkeit Upgrade.',
          },
          {
            q: 'Kann ich das zusätzlich zur Review für Code Generierung verwenden?',
            a: 'Ja, aber die Workloads konkurrieren um die gleiche GPU und haben unterschiedliche Latenz Charakteristiken. Code Review ist asynchron und toleriert 30-sekündige Antworten; interaktive Code Generierung in einem Editor braucht Sub-2-sekündige Latenz. Empfohlenes Muster: verwenden Sie ein kleineres Modell (Qwen3-Coder 7B) für Editor Autocomplete auf Developer Maschinen und reservieren Sie den dedizierten GPU Server für Review-Klasse Workloads in CI.',
          },
          {
            q: 'Was ist das Sicherheitsmodell für den GPU Server?',
            a: 'Behandeln Sie ihn wie jeden internen Service: binden Sie den Inference Server an eine private Schnittstelle, legen Sie Auth davor (mTLS, Shared-Secret Token oder VPN-Only Zugang), beschränken Sie ausgehend mit Default-Deny und rotieren Sie Credentials. Die LLM-spezifisch Hinzufügung ist Modell Weight Provenance Auditing — pinnen Sie den Digest, dokumentieren Sie die Quelle und bestätigen Sie null ausgehend Daten Egress mit periodischen Paket Captures.',
          },
          {
            q: 'Können mehrere Repos einen GPU Server teilen?',
            a: 'Ja — der GPU Server ist gerade eine HTTP Endpoint. Eine beliebige Anzahl Repos kann ihn aufrufen, solange der Server Kapazität hat. Für Organisationen mit 10+ aktive Repos, füge Pro-Repo Rate Limits im Reverse Proxy vor Ollama hinzu, um zu verhindern, dass ein lautes Repo (großes Monorepo, häufige Forced Pushes) andere verhungert.',
          },
          {
            q: 'Wie handle ich falsch positive Ergebnisse in CI?',
            a: 'Drei Schichten. Erstens, Prompt Design — setzen Sie hohe Severity Thresholds, erzwingen Sie strukturiertem Output und taggen Sie tentative Befunde. Zweitens, Action-Level Filterung — blockieren Sie nur bei `severity >= "high"`; zeige Medium/Low als Kommentare. Drittens, eine Feedback Schleife — lassen Sie Entwickler 👍/👎 auf jeden Kommentar reagieren, dann wöchentlich überprüfen Sie die 👎s und aktualisieren Sie den System Prompt, um die häufigsten Falsch-Positiv Kategorien zu unterdrücken. Erwarte eine 5–10% Rate nach einem Monat Tuning; unter 5% ist mit fortgesetzter Iteration erreichbar.',
          },
          {
            q: 'Muss ich bei der Verwendung von lokalen LLM-Code-Reviews die DSGVO beachten?',
            a: 'Ja, DSGVO Artikel 28 und die BSI-Grundschutz-Kataloge sind relevant. Bei lokalen LLM Code Reviews auf Ihrem eigenen Server, handhabt Ihr Unternehmen die Verarbeitung als Verantwortlicher, nicht als Auftragsverarbeiter. Stellen Sie sicher, dass: (1) der GPU Server mit Standard IT-Sicherheit-Maßnahmen und dem BSI-Grundschutz ausgelegt ist, (2) Log-Rotation implementiert ist, um historische Code-Diffs nicht zu speichern, (3) nur autorisierte Mitarbeiter Zugang zum Server haben und (4) Ihre Datenschutz-Dokumentation die Verwendung dokumentiert. Dies macht Self-Hosted tatsächlich DSGVO-konformer als Cloud APIs, da Sie die Kontrolle über die Daten und deren Verarbeitung haben.',
          },
          {
            q: 'Ist die lokale LLM-Code-Review für den deutschen Mittelstand geeignet?',
            a: 'Absolut — und besonders für Mittelstandsunternehmen. Die Architektur spricht speziell KMU-Anforderungen an: (1) Keine laufenden Abonnement-Gebühren pro Entwickler, nur einmalige Hardware-Kosten, was die Budgetierbarkeit für kleinere Teams verbessert, (2) vollständige Datenkontrolle und Zero-Egress erfüllen die IT-Sicherheitsstandards, die größere Kunden und öffentliche Aufträge erfordern, (3) keine Abhängigkeit von US-basierten APIs, was für DSGVO-Compliance und Regierungsverträge wichtig ist. Für ein Mittelstandsunternehmen mit 20–50 Entwicklern fällt sich ein RTX 4090 Setup innerhalb weniger Monate für itself bei typischen GitHub Advanced Security Kosten aus, während Sie auch Compliance-Anforderungen erfüllen.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Ressourcen',
        items: [
          '[Replace GitHub Copilot With a Local LLM](/de/power-local-llm/replace-github-copilot-with-local-llm) — breiterer Kosten Ersatzkontext für Teams, die Self-Hosted AI Tooling erwägen.',
          '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/de/power-local-llm/continue-dev-vs-cline-vs-aider-local) — was läuft in Pipelines vs interaktive Editor Arbeit; die Harness Schicht unter dem Modell.',
          '[Best Local Coding Models in 2026](/de/power-local-llm/best-local-coding-models-2026) — Modell Seite der Gleichung: Qwen3-Coder, DeepSeek, Codestral und die Lizenzierungs Landschaft.',
          '[System Prompt vs User Prompt: What\'s the Difference](/de/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — Prompt-Design Fundament für den Review System Prompt.',
          '[llama.cpp vs Ollama vs vLLM](/de/local-llms/llamacpp-vs-ollama-vs-vllm) — Inference Engine Vergleich; vLLM ist der Upgrade Path jenseits von Ollama für High-Concurrency Teams.',
          '[Power Local LLM Hub](/de/power-local-llm) — vollständige Leitfaden Bibliothek.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'LLM Local en CI/CD : Révision de Code Automatisée Sans Cloud',
    seoTitle: 'Revue de code LLM dans CI/CD 2026 : automatiser les PR',
    intro: 'La révision de code LLM local auto-hébergée place un modèle Qwen3-Coder derrière votre pipeline CI/CD pour que chaque demande de tirage soit examinée sans que la base de code ne quitte votre réseau. L\'architecture est simple — un serveur GPU dédié exécutant Ollama, une action GitHub personnalisée appelant son API HTTP, et un prompt de révision ajusté sur le taux de faux positifs — et l\'économie bascule en faveur de l\'auto-hébergement quelque part entre 15 et 25 sièges GitHub payants. Ce guide couvre l\'architecture, un flux de travail GitHub Actions fonctionnant, le dimensionnement du matériel par taille d\'équipe, le modèle de sécurité et les pièges opérationnels qui frappent les équipes au deuxième mois.',
    metaDescription: 'Révision de code LLM local auto-hébergée en GitHub Actions : architecture, YAML de flux de travail fonctionnant, dimensionnement du matériel par taille d\'équipe, modèle de sécurité et parité des coûts par rapport à GitHub Advanced Security.',
    twitterDescription: 'Révision de code auto-hébergée sur un serveur GPU dans votre réseau. GitHub Actions appelle Ollama, Qwen3-Coder examine les RP, aucune base de code ne quitte votre périmètre. Configuration, dimensionnement et parité des coûts à l\'intérieur.',
    current_models_mentioned: ['Qwen3-Coder 30B', 'Qwen3-Coder 7B', 'DeepSeek Coder V3'],
    current_hardware_mentioned: ['NVIDIA RTX 4090 24 GB', 'NVIDIA RTX 5090 32 GB', 'NVIDIA L40S 48 GB', 'NVIDIA A6000 Ada 48 GB', 'NVIDIA H100 80 GB'],
    audience: 'Responsables d\'équipes d\'ingénierie, ingénieurs plateforme et praticiens DevOps qui exécutent GitHub Actions ou GitLab CI et souhaitent ajouter une révision de code pilotée par LLM sans envoyer le code source à une API tierce. Suppose une familiarité avec Docker, Linux et les exécuteurs auto-hébergés.',
    readTime: '15 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'révision de code llm local ci/cd',
    targetKeywords: ['révision de code llm local', 'révision de code llm auto-hébergée', 'github actions llm local', 'ollama github actions', 'révision de code ia privée', 'révision de code sans openai'],
    leadAnswerBlock: '**La révision de code LLM local auto-hébergée utilise trois composants : un serveur GPU dédié exécutant Ollama (ou vLLM), une action GitHub personnalisée qui POSTE la différence au point de terminaison HTTP du serveur, et un prompt de révision qui renvoie un verdict structuré (approuver / commenter / bloquer). Une RTX 4090 (24 GB) exécutant Qwen3-Coder 30B dessert confortablement une équipe de 15–25 développeurs ; une carte 48 GB (L40S ou A6000 Ada) s\'étend à environ 50 développeurs ; le matériel de classe H100 est nécessaire au-delà de 100. L\'économie bascule en faveur de l\'auto-hébergement quelque part entre 15 et 25 sièges GitHub Advanced Security payants à 19 $/dev/mois — la parité exacte dépend du coût d\'achat du matériel par rapport à la capacité existante. L\'avantage de sécurité est réel : le code source ne quitte jamais votre réseau, la surface d\'audit est un processus et un fichier journal, et vous pouvez prouver zéro sortie avec une capture de paquets.**',
    quickAnswerTop: { fr: { question: 'Comment puis-je exécuter un LLM local en tant que critique de code en CI/CD ?', answer: 'Configurez un serveur GPU exécutant Ollama (ou vLLM, llama.cpp) avec un modèle optimisé pour le codage — Qwen3-Coder 30B est la norme de mai 2026. Ajoutez un exécuteur GitHub Actions auto-hébergé sur le même réseau, ou exposez le point de terminaison HTTP du serveur à vos exécuteurs existants via un réseau privé. Écrivez une petite action personnalisée qui récupère la différence de RP, la POSTE avec un prompt de révision au point de terminaison LLM, analyse la réponse structurée (approuver / commenter / bloquer) et poste les commentaires en ligne de la RP. Le modèle ne quitte jamais votre périmètre ; l\'action se comporte comme n\'importe quelle autre vérification. En termes de matériel, une RTX 4090 avec Qwen3-Coder 30B gère 15–25 développeurs ; une carte 48 GB s\'étend à 50 ; au-delà de 100, vous avez besoin du matériel de classe H100 ou de plusieurs GPU.', bullets: ['Architecture : serveur GPU exécutant Ollama → exécuteur auto-hébergé (ou HTTP depuis les exécuteurs cloud) → action GitHub personnalisée → commentaires RP.', 'Stack par défaut : Ollama + Qwen3-Coder 30B (Apache 2.0) + action JavaScript ou composite personnalisée.', 'Matériel : 1× RTX 4090 (24 GB) pour 15–25 développeurs ; 1× L40S/A6000 Ada (48 GB) pour ~50 ; 1× H100 ou multi-GPU pour 100+.', 'Économie : parité par rapport à GitHub Advanced Security à 19 $/dev/mois est à peu près 15–25 sièges payants, selon le coût du matériel.', 'Sécurité : le code source ne quitte jamais votre réseau ; la sortie peut être prouvée avec une capture de paquets ; la surface d\'audit est un processus et un journal.', 'GitLab CI fonctionne de la même manière — exécuteur au lieu d\'action, mais l\'appel LLM est identique.'], updatedDate: '2026-05-07' } },
    toc: [
      { label: 'Points Clés', anchor: '#key-takeaways' },
      { label: 'Faits Rapides', anchor: '#quick-facts' },
      { label: 'Comparaison d\'Architecture', anchor: '#architecture-comparison' },
      { label: 'La Stack Recommandée', anchor: '#recommended-stack' },
      { label: 'Flux de Travail GitHub Actions', anchor: '#workflow' },
      { label: 'Dimensionnement du Matériel par Taille d\'Équipe', anchor: '#hardware-sizing' },
      { label: 'Partage GPU Across Builds', anchor: '#gpu-sharing' },
      { label: 'Comparaison des Coûts avec GitHub Advanced Security', anchor: '#cost-comparison' },
      { label: 'Modèle de Sécurité et Posture d\'Audit', anchor: '#security-model' },
      { label: 'Conception de Prompt pour la Révision de Code', anchor: '#prompt-design' },
      { label: 'Gestion des Faux Positifs', anchor: '#false-positives' },
      { label: 'Pièges Opérationnels au Deuxième Mois', anchor: '#operational-pitfalls' },
      { label: 'Erreurs Courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures Associées', anchor: '#related-reading' },
    ],
    sections: {
      tldr: { id: 'key-takeaways', isTldr: true, items: ['**L\'architecture se compose de trois éléments:** serveur GPU exécutant Ollama (ou vLLM) → exécuteur CI pouvant l\'atteindre via le réseau → action personnalisée qui POSTE la différence RP et analyse un verdict structuré. Même forme sur GitHub Actions, GitLab CI, Buildkite et Jenkins.', '**Stack par défaut en mai 2026:** Ollama + Qwen3-Coder 30B (Apache 2.0) + une action GitHub personnalisée légère. Infrastructure totale : une boîte GPU, un exécuteur.', '**Dimensionnement du matériel :** RTX 4090 (24 GB, env. 2 299 €) gère 15–25 développeurs ; L40S ou A6000 Ada (48 GB, env. 8 999–9 999 €) s\'étend à 50 ; H100 (80 GB, env. 27 000+ €) ou multi-GPU pour 100+.', '**L\'économie bascule en faveur du self-host** à environ 15–25 sièges GitHub Advanced Security payants (19 $/dev/mois) — une génération RTX 4090 paie pour elle-même en 5–10 mois à cette taille d\'équipe.', '**L\'avantage de sécurité est réel, pas seulement du marketing.** Le code source ne quitte jamais votre réseau ; la sortie sortante peut être prouvée nulle avec `tcpdump` ; la surface d\'audit entière est un processus Ollama et un fichier journal.', '**Les faux positifs sont la taxe opérationnelle.** Planifiez une boucle de réglage le premier mois : itération de prompt, seuils de sévérité et un chemin d\'ingestion de rétroaction du critique afin que le prompt s\'améliore au fil du temps.', '**La latence est acceptable.** Un GPU 24 GB exécutant Qwen3-Coder 30B examine une différence RP typique de 200 lignes en moins de 30 secondes. Le temps d\'attente de l\'auteur RP est dominé par d\'autres travaux CI, pas par l\'examen.', '**Ne remplacez pas complètement la révision humaine.** Le LLM local est une porte de triage — il détecte les problèmes évidents, signale les changements risqués et libère les humains des appels de jugement que les LLM se trompent encore.'] },
      quickFacts: { id: 'quick-facts', title: 'Faits Rapides', items: ['**Modèle recommandé:** Qwen3-Coder 30B à Q4_K_M (~17 GB VRAM, Apache 2.0).', '**Exécution recommandée:** Ollama pour la simplicité de configuration ; vLLM si vous avez besoin d\'une concurrence plus élevée sur le même GPU.', '**GPU minimum pour les équipes sérieuses:** RTX 4090 (24 GB). Les cartes plus petites forcent le modèle 7B et une qualité de révision notablement pire.', '**Concurrence sur un seul GPU 24 GB:** confortablement 1–3 révisions simultanées sur Qwen3-Coder 30B ; queue au-delà.', '**Cible de latence:** moins de 30 secondes pour une différence de 200 lignes. Au-delà, le comportement de l\'auteur RP change et les révisions sont contournées.', '**Posture d\'audit:** zéro sortie sortante sur le serveur GPU est prouvable ; la surface entière est `ollama serve` + un seul fichier journal.', '**Parité avec GitHub Advanced Security (19 $/dev/mois):** 15–25 sièges payants couvrent une génération RTX 4090 en 5–10 mois.', '**Parité GitLab CI:** architecture identique, remplacez l\'action GitHub par un travail CI appelant le même point de terminaison HTTP.'] },
      architectureComparison: { id: 'architecture-comparison', title: 'Comparaison d\'Architecture : Trois Véritables Options pour la Révision de Code en CI', content: '**Trois architectures couvrent effectivement tous les configurations de révision RP en mai 2026.** Self-Hosted Local LLM en est une — le bon choix quand le code source ne peut pas quitter votre réseau ou quand l\'économie des sièges favorise l\'infrastructure fixe.', snippetBlocks: [{ type: 'one-sentence', text: 'La révision de code LLM local auto-hébergée se rentabilise plus rapidement que GitHub Advanced Security à 15–25 sièges payants et garde le code source à l\'intérieur de votre réseau — la bonne architecture pour les équipes avec contrainte de confidentialité ou de nombre de sièges.' }, { type: 'plain-terms', text: 'Trois options existent pour la révision de code IA en CI. GitHub Advanced Security est la plus facile à activer et la plus chère à l\'échelle. Une API LLM cloud (OpenAI, Anthropic) est bon marché pour commencer et envoie chaque diff à un tiers. Self-Hosted Local LLM a le coût de configuration le plus élevé et est la seule option qui garde votre base de code à l\'intérieur de votre périmètre — et à environ 15–25 sièges payants, elle devient la moins chère des trois sur un an.' }], columns: ['Architecture', 'Complexité de Configuration', 'Coût (10 Développeurs)', 'Coût (50 Développeurs)', 'Latence RP', 'Meilleur pour'], rows: [{ 'Architecture': 'GitHub Advanced Security', 'Complexité de Configuration': 'Bas (une bascule)', 'Coût (10 Développeurs)': '$190/Mo', 'Coût (50 Développeurs)': '$950/Mo', 'Latence RP': 'Sub-minute (géré)', 'Meilleur pour': 'Teams <15 sièges payants sans contrainte de confidentialité' }, { 'Architecture': 'API LLM Cloud (OpenAI / Anthropic)', 'Complexité de Configuration': 'Bas–Moyen (clé API + action)', 'Coût (10 Développeurs)': '~$50–200/Mo (utilisation)', 'Coût (50 Développeurs)': '~$300–1 200/Mo (utilisation)', 'Latence RP': 'Secondes', 'Meilleur pour': 'Équipes à l\'aise d\'envoyer le code source à une API tierce' }, { 'Architecture': 'LLM Local sur GPU dédié', 'Complexité de Configuration': 'Moyen–Élevé (serveur GPU + exécuteur + action)', 'Coût (10 Développeurs)': 'env. 2 299 € matériel (une seule fois)', 'Coût (50 Développeurs)': 'env. 8 999+ € matériel (une seule fois)', 'Latence RP': '10–30 secondes (GPU unique)', 'Meilleur pour': 'Équipes sensibles à la confidentialité, 15+ sièges payants, contextes de conformité EU' }, { 'Architecture': 'LLM Local sur infra partagée (GPU existante)', 'Complexité de Configuration': 'Moyen (juste exécuteur + action)', 'Coût (10 Développeurs)': '€0 marginal (capacité existante)', 'Coût (50 Développeurs)': '€0 marginal (capacité existante)', 'Latence RP': 'Variable (dépend de la contention)', 'Meilleur pour': 'Équipes exécutant déjà une infra GPU pour ML ou analytics' }] },
      recommendedStack: { id: 'recommended-stack', title: 'La Stack Recommandée : Ollama + Qwen3-Coder + une Action GitHub Légère', content: '**La stack production la plus simple se compose de trois composants.** Chacun est open source, gratuit et bien documenté ; la surface d\'intégration entre eux est HTTP.', items: ['**Serveur GPU** exécutant **Ollama** (ou vLLM pour une concurrence plus élevée). Ollama expose une API HTTP compatible OpenAI sur `localhost:11434` par défaut ; liez-la à une interface réseau privée ou à un proxy inverse avec auth avant d\'exposer aux exécuteurs.', '**Modèle optimisé pour le codage:** **Qwen3-Coder 30B** à Q4_K_M est la norme de mai 2026 — plus forte direction open-weight coding, contexte 256K, licence Apache 2.0, s\'adapte à une GPU 24 GB. Pour les GPU 8–16 GB, utilisez Qwen3-Coder 7B en comprenant que la qualité de révision baisse notablement.', '**Intégration CI:** un exécuteur GitHub Actions auto-hébergé sur le même réseau que le serveur GPU, ou vos exécuteurs GitHub-hébergés existants atteignant le serveur GPU via un réseau privé (Tailscale, WireGuard ou appairage VPC).', '**Action GitHub personnalisée** (JavaScript ou composite) qui récupère la différence RP via l\'API GitHub, la POSTE au point de terminaison Ollama avec un prompt de révision, analyse la réponse structurée et poste les commentaires en ligne de la RP.', '**Optionnel:** un petit cache Redis ou SQLite codé par hash fichier + hash diff pour éviter les re-révisions de fichiers inchangés dans les exécutions CI suivantes.', '**Parité GitLab:** la même architecture, avec un travail GitLab CI remplaçant l\'action GitHub. L\'appel LLM est identique.'], callouts: [{ type: 'tip', text: 'Liez `ollama serve` à une interface réseau privée (ou `127.0.0.1` si l\'exécuteur est sur le même hôte) et mettez auth devant avant toute exposition cross-host. Le `OLLAMA_HOST=0.0.0.0:11434` par défaut sans auth est acceptable pour une expérience single-machine, mais une défaillance de sécurité dans tout autre contexte.' }] },
      workflow: { id: 'workflow', title: 'Un Flux de Travail GitHub Actions Fonctionnant', content: '**Le flux de travail minimum viable est d\'environ 50 lignes YAML.** Ce modèle s\'exécute sur l\'ouverture et la synchronisation RP, récupère la différence, appelle Ollama et poste un commentaire en arrière. Les déploiements production ajoutent la mise en cache, les seuils de sévérité et l\'option de bloquer la RP sur un verdict "block".', codeLanguage: 'yaml', codeBlock: `# .github/workflows/local-llm-review.yml
name: Local LLM Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: self-hosted   # ou n'importe quel exécuteur pouvant atteindre OLLAMA_HOST
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Generate diff
        id: diff
        run: |
          git diff origin/\${{ github.base_ref }}...HEAD > /tmp/pr.diff
          echo "size=$(wc -c < /tmp/pr.diff)" >> "$GITHUB_OUTPUT"

      - name: Call local LLM for review
        id: review
        env:
          OLLAMA_HOST: \${{ secrets.OLLAMA_HOST }}   # ex. http://gpu-server.internal:11434
        run: |
          DIFF=$(jq -Rs . < /tmp/pr.diff)
          curl -sS "$OLLAMA_HOST/api/chat" \\
            -H 'Content-Type: application/json' \\
            -d "{
              \\"model\\": \\"qwen3-coder:30b\\",
              \\"stream\\": false,
              \\"format\\": \\"json\\",
              \\"messages\\": [
                {\\"role\\": \\"system\\", \\"content\\": \\"You are a senior code reviewer. Return JSON: {verdict: 'approve'|'comment'|'block', summary: string, comments: [{path, line, severity, message}]}\\"},
                {\\"role\\": \\"user\\", \\"content\\": $DIFF}
              ]
            }" > /tmp/review.json
          echo "verdict=$(jq -r '.message.content | fromjson | .verdict' < /tmp/review.json)" >> "$GITHUB_OUTPUT"

      - name: Post review comment
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const review = JSON.parse(JSON.parse(fs.readFileSync('/tmp/review.json')).message.content);
            const body = \`### Local LLM Review: \\\`\${review.verdict}\\\`\\n\\n\${review.summary}\`;
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body
            });

      - name: Block on critical verdict
        if: steps.review.outputs.verdict == 'block'
        run: exit 1
`, items: ['L\'exécuteur doit pouvoir atteindre `OLLAMA_HOST` via le réseau — auto-hébergé sur le même VPC, ou via Tailscale / WireGuard si le serveur GPU est ailleurs.', 'Le prompt système impose une réponse JSON structurée pour que l\'action puisse se brancher sur le verdict proprement. Sans `format: "json"` et un schéma strict dans le prompt, vous passerez du temps opérationnel à analyser la sortie free-form.', 'Le checkout `fetch-depth: 0` est nécessaire pour calculer une vraie diff contre la branche de base — les checkouts superficiels produisent des diffs malformées.', 'Pour les dépôts au-dessus d\'environ 50K lignes de code modifié par RP, tronquez ou fragmentez la diff avant d\'envoyer. Le contexte 256K sur Qwen3-Coder 30B est généreux, mais le contexte de travail pratique est plus proche de 64K–128K (voir [Best Local Coding Models in 2026](/fr/power-local-llm/best-local-coding-models-2026)).', 'Pour la profondeur du design de prompt — prompts système vs utilisateur, exemples, résultats structurés — voir [System Prompt vs User Prompt: What\'s the Difference](/fr/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference).'], callouts: [{ type: 'note', text: 'Ce flux de travail est intentionnellement minimal. Les déploiements production ajoutent : un cache codé par hash fichier + diff pour sauter les re-révisions de fichiers inchangés, les seuils de sévérité (bloc seulement sur `severity >= "high"`), la publication de commentaires en ligne (au lieu d\'un seul commentaire de synthèse), les variantes de prompt par langue et l\'ingestion de rétroaction du critique pour améliorer le prompt au fil du temps.' }] },
      hardwareSizing: { id: 'hardware-sizing', title: 'Dimensionnement du Matériel par Taille d\'Équipe', content: '**Une RTX 4090 (24 GB) gère confortablement une équipe de 15–25 développeurs.** Le goulot d\'étranglement sur une seule GPU n\'est pas le débit par révision — c\'est la concurrence aux moments de chasse aux RP (lundi matin, fin de sprint). Les règles de dimensionnement ci-dessous supposent Qwen3-Coder 30B à Q4_K_M et une différence RP typique de 50–500 lignes.', columns: ['Taille d\'Équipe', 'GPU', 'VRAM', 'Révisions Simultanées', 'Prix Approximatif (Mai 2026)'], rows: [{ 'Taille d\'Équipe': '~5 Développeurs', 'GPU': 'RTX 4070 / 4070 Ti', 'VRAM': '12–16 GB', 'Révisions Simultanées': '1 (seulement Qwen3-Coder 7B)', 'Prix Approximatif (Mai 2026)': 'env. 899–1 099 €' }, { 'Taille d\'Équipe': '15–25 Développeurs', 'GPU': 'RTX 4090 / 5090', 'VRAM': '24–32 GB', 'Révisions Simultanées': '1–3 (Qwen3-Coder 30B)', 'Prix Approximatif (Mai 2026)': 'env. 2 299–2 799 €' }, { 'Taille d\'Équipe': '25–50 Développeurs', 'GPU': 'L40S / A6000 Ada', 'VRAM': '48 GB', 'Révisions Simultanées': '3–6', 'Prix Approximatif (Mai 2026)': 'env. 8 999–9 999 €' }, { 'Taille d\'Équipe': '50–100 Développeurs', 'GPU': '2× RTX 4090 ou 1× H100', 'VRAM': '48 GB / 80 GB', 'Révisions Simultanées': '6–10', 'Prix Approximatif (Mai 2026)': 'env. 5 000 € (2× 4090) ou 27 000+ € (H100)' }, { 'Taille d\'Équipe': '100+ Développeurs', 'GPU': 'Multi-GPU H100 ou H200', 'VRAM': '160 GB+', 'Révisions Simultanées': '10+ avec vLLM', 'Prix Approximatif (Mai 2026)': 'env. 50 000+ €' }], callouts: [{ type: 'tip', text: 'Pour les équipes franchissant le seuil de 50 développeurs, passez de Ollama à vLLM. Ollama privilégie la facilité d\'utilisation ; vLLM privilégie le débit sur les GPU partagées. Le même modèle Qwen3-Coder 30B s\'exécute sur les deux — seul le serveur d\'inférence change.' }] },
      gpuSharing: { id: 'gpu-sharing', title: 'Partage GPU Across Builds et Autres Charges', content: '**Une GPU dédiée pour la révision de code est l\'architecture la plus simple mais pas la seule.** Les équipes exécutant déjà une infra GPU pour l\'inférence ML ou l\'entraînement peuvent partager — avec le compromis que la contention fait monter en flèche la latence de révision.', items: ['**GPU dédiée pour la révision seulement:** modèle le plus simple. La latence est prévisible ; la planification de capacité est simple ; les modes de défaillance sont isolés. La recommandation pour toute équipe n\'exécutant pas déjà une infra GPU.', '**GPU partagée avec inférence ML:** faisable si la charge inférence a une enveloppe stable (par ex., un petit service d\'intégration s\'adaptant à 4–6 GB). Le modèle de révision occupe le reste du VRAM. Les collisions de planification sont rares sur ce motif.', '**GPU partagée avec entraînement ML:** fortement déconseillé. Les travaux d\'entraînement font sauter l\'utilisation du VRAM au limite et affament le modèle de révision, causant des latences de révision de 30–120 secondes qui érodent la confiance des développeurs dans le système.', '**vLLM avec attention paginée:** purpose-built pour le service LLM haute-concurrence. La même RTX 4090 qui gère 1–3 révisions simultanées sous Ollama peut gérer 4–8 sous vLLM, au prix d\'une configuration plus complexe. Ça vaut le coup au-delà de 25 développeurs.', '**Multi-tenant sur H100:** à l\'échelle 100+ développeurs, partitionnez un H100 en tranches MIG ou exécutez vLLM avec des quotas par tenant. C\'est du territoire plateforme-engineering ; n\'improvisez pas.'] },
      costComparison: { id: 'cost-comparison', title: 'Comparaison des Coûts avec GitHub Advanced Security', content: '**L\'économie bascule en faveur du self-host à environ 15–25 sièges payants.** C\'est une comparaison à payback d\'un an ; les horizons plus longs rendent l\'auto-hébergement plus favorable.', items: ['**GitHub Advanced Security (Code Security):** 19 $/développeur/mois au prix catalogue (vérifiez sur la page de tarification GitHub ; les remises de volume sont disponibles pour les clients enterprise).', '**API LLM Cloud (ex. OpenAI, Anthropic):** environ 50–200 $/mois par développeur actif au volume RP typique ; varie énormément selon la taille de la base de code et la conception du prompt de révision.', '**Self-Hosted Local LLM, build RTX 4090:** environ 2 299 € de matériel une seule fois (GPU + un boîtier serveur de base). Consommation électrique : ~50W au repos, ~350W sous charge — disons env. 18–28€/mois en électricité à l\'utilisation typique. Pas de frais par siège.', '**Parité à 10 développeurs:** GHAS 190 $/mois vs self-hosted env. 25€/mois exploité + env. 2 299 € capex. Capex se rentabilise en ~14 mois.', '**Parité à 25 développeurs:** GHAS 475 $/mois vs self-hosted env. 25€/mois exploité + env. 2 299 € capex. Capex se rentabilise en ~5–6 mois.', '**Parité à 50 développeurs:** GHAS 950 $/mois vs self-hosted env. 40€/mois exploité + env. 7 500 € capex (GPU 48 GB). Capex se rentabilise en ~8 mois.', '**Le chiffre capex domine les mathématiques.** Si vous achetez une GPU spécifiquement pour cela, la rentabilité est réelle. Si vous avez une capacité GPU existante, le coût marginal est plus proche de zéro et l\'auto-hébergement gagne immédiatement.'], callouts: [{ type: 'note', text: 'Ces chiffres sont des comparaisons de prix catalogue. Les tarifs GHAS négociés pour les grandes entreprises décalent la parité ; la capacité GPU existante l\'effondre. Refaites les mathématiques avec vos coûts réels avant de vous engager sur un achat de matériel.' }] },
      securityModel: { id: 'security-model', title: 'Modèle de Sécurité et Posture d\'Audit', content: '**L\'affirmation de sécurité titre — "le code source ne quitte jamais votre réseau" — est vraie, prouvable, et le plus fort argument pour cette architecture.** La surface d\'audit est assez petite pour être défendue dans un examen de procurement.', items: ['**Le modèle ne voit que la diff que votre action envoie.** Pas de télémétrie, pas d\'appels réseau cachés. Confirmable avec `tcpdump` ou `nft monitor` sur l\'interface sortante du serveur GPU — sous opération état-stable, vous devriez voir zéro paquets sortants vers les hôtes non-internes.', '**La surface d\'audit complète est un processus et un fichier journal.** `ollama serve` est l\'intégralité de la pile LLM. Ses logs (corps de requête, latence, événements de chargement de modèle) sont l\'enregistrement d\'audit. Pas de tableau de bord SaaS à interroger, pas de politique de conservation tiers à lire.', '**L\'isolement du réseau est simple.** Liez `ollama serve` à une interface privée ; mettez un proxy inverse avec auth mTLS ou shared-secret devant ; refusez sortant sur le namespace réseau du serveur GPU sauf vers votre sous-réseau exécuteur CI. Motif zero-trust standard, pas de magie LLM-spécifique.', '**Les poids du modèle sont des artefacts statiques signés par le vendeur.** Tirez-les une seule fois via Ollama, épinglez le digest et le modèle ne peut pas changer sans action opérateur. C\'est une histoire de chaîne d\'approvisionnement plus forte qu\'une API SaaS où le modèle amont peut être silencieusement échangé.', '**Posture de conformité:** zéro sortie de données est simple à documenter pour SOC 2, ISO 27001, GDPR et la classification EU AI Act limited-risk. La partie la plus difficile de la conformité auto-hébergée est généralement de documenter le serveur d\'inférence lui-même ; Ollama et vLLM sont tous deux bien documentés.', '**Le modèle voit toujours votre code.** L\'auto-hébergé ne signifie pas privé du modèle — cela signifie privé des tiers. Les scénarios d\'insider-threat (ingénieur avec accès serveur GPU lit les logs contenant les diffs RP passées) sont toujours dans le scope ; rotez les logs et limitez l\'accès en conséquence.'] },
      promptDesign: { id: 'prompt-design', title: 'Conception de Prompt pour la Révision de Code', content: '**Le déterminant unique le plus grand du taux de faux positifs est le prompt système.** Un prompt vague "examinez ce code" produit des commentaires de révision vagues ; un prompt spécifique avec seuils de sévérité et résultats structurés produit des retours actionnables.', items: ['**La sortie structurée est non-négociable.** Imposez JSON avec un schéma strict (`verdict`, `summary`, `comments[]`). Sans cela, l\'action passe 30% de son code à analyser la sortie free-form et les modes de défaillance sont subtils.', 'Pour le guide complet sur l\'application de la sortie structurée sur les modèles, voir [structured output and JSON mode](/fr/prompt-engineering/structured-output-and-json-mode).', '**Les seuils de sévérité appartiennent au prompt, pas à l\'action.** Dites au modèle ce qui compte comme `critique`, `haut`, `moyen`, `bas` ; dites-lui de filtrer les résultats bas-sévérité sauf explicitement demandés. C\'est beaucoup plus fiable que le filtrage post-hoc sur un champ sévérité free-form.', '**Ancrez le prompt avec des exemples.** Un prompt 1–2-shot avec une diff réelle et une JSON de révision idéale surpasse massif zero-shot pour le même modèle et la même taille de diff.', '**Distinguez l\'intention "révision" de "commentaire".** Un commentaire critique ("envisagez d\'extraire ceci vers un helper") et un blocker ("ceci introduit une injection SQL") ont besoin d\'actions différentes en CI. Tagguez-les dans la sortie structurée et faites bloquer l\'action seulement sur les bloqueurs.', '**Les variantes de prompt par langue aident au-delà d\'une certaine taille.** Une base de code polyglotte bénéficie d\'un prompt qui référence les idiomes de langue pertinents (Pythonic vs Rust idiomatique). C\'est optionnel au-dessous d\'environ 25 développeurs ; précieux au-dessus.', 'Pour l\'ancrage de l\'ingénierie de prompt plus profond — prompts système vs utilisateur, résultats structurés, few-shot prompting — voir [System Prompt vs User Prompt: What\'s the Difference](/fr/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference).'] },
      falsePositives: { id: 'false-positives', title: 'Gestion des Faux Positifs Sans Éroder la Confiance des Développeurs', content: '**Les faux positifs sont la taxe opérationnelle sur la révision de code LLM.** Un taux de 5% est acceptable ; 20% est intolérable ; la différence est principalement itération de prompt et une boucle de rétroaction, pas le modèle.', items: ['**Fixez un seuil "block" haut.** Un verdict `block` qui s\'active sur chaque problème lint mineur entraîne les développeurs à contourner la vérification. Réservez `block` aux problèmes de sécurité, aux tests cassés et aux défaillances de correctness clairs.', '**Rendez les commentaires non-bloquants bon marché.** Les commentaires en ligne où le modèle est incertain devraient être tagués ("tentative" / "envisager") pour que les auteurs puissent les rejeter rapidement sans cérémonie.', '**Construisez une boucle de rétroaction au mois un.** Ajoutez une réaction (👍 / 👎) à chaque commentaire de révision. Périodiquement (hebdomadairement fonctionne) examinez les 👎s et mettez à jour le prompt système avec des instructions explicites "ne pas signaler X" pour les catégories les plus courantes de faux positifs.', '**Taux-limites le volume de commentaires par RP.** Une seule RP ne devrait pas recevoir plus de 5–10 commentaires du LLM ; au-delà, le rapport signal-bruit s\'effondre. Limitez l\'action au niveau du prompt ("retour au maximum N commentaires").', '**Suivez la corrélation verdict-to-merge hebdomadairement.** Si 80% des verdicts `block` fusionnent de toute façon, votre seuil est trop agressif. Si 0% des verdicts `comment` obtiennent toute action humaine, votre prompt produit du bruit.'] },
      operationalPitfalls: { id: 'operational-pitfalls', title: 'Pièges Opérationnels au Deuxième Mois', content: '**Le setup obtient l\'attention ; les opérations sont ignorées.** Les défaillances ci-dessous sont celles qui font que les équipes abandonnent le projet après la période lune de miel.', items: ['**Les mises à jour de modèle cassent les prompts.** Une nouvelle version Qwen3-Coder change subtilement le formatage de sortie ; l\'analyse JSON structurée échoue en CI ; les révisions cessent de poster. Épinglez le digest du modèle avec `ollama show <model> --modelfile` ; mettez à niveau dans une branche staging avant de promouvoir.', '**Fragmentation mémoire GPU sous longue uptime.** Un serveur GPU exécutant 24/7 peut fragmenter le VRAM et refuser les allocations nouvelles après des semaines d\'opération. Redémarrez `ollama serve` hebdomadairement via un travail cron ; c\'est bon marché et évite complètement le mode de défaillance.', '**Contention exécuteur CI.** Un exécuteur auto-hébergé hébergeant à la fois le serveur LLM et d\'autres travaux CI verra la latence de révision monter en flèche sous charge de build. Séparez l\'exécuteur et le serveur GPU quand la taille d\'équipe dépasse ~25 développeurs.', '**Croissance taille diff.** Les tailles RP dérivent vers le haut ; finalement une RP dépasse le contexte de travail pratique du modèle et les révisions dégradent silencieusement. Ajoutez un garde dans l\'action qui divise ou tronque les diffs au-dessus d\'env. 30K tokens et avertit l\'auteur.', '**Puissance et refroidissement.** Une RTX 4090 continuellement chargée tire env. 350W sous inférence et produit une quantité signifiante de chaleur. Une salle serveur de taille placard sans refroidissement actif affamera la GPU ; l\'affamement coûte la latence et les développeurs remarquent.', '**Rotation de log oubliée.** Ollama enregistre chaque corps de requête par défaut. Après trois mois de révisions RP, le fichier journal est grand et contient les diffs RP historiques en texte clair. Rotez les logs hebdomadairement ; archivez ou purgez par votre politique de conservation de données.'] },
      commonMistakes: { id: 'common-mistakes', title: 'Erreurs Courantes lors de la Configuration de la Révision de Code LLM Local', items: ['**Erreur 1 : commencer avec un modèle 7B sur une GPU 16 GB.** Les révisions Qwen3-Coder 7B sont notablement pires que les révisions 30B ; les développeurs perdent rapidement confiance et le projet est étagéré. Si vous ne pouvez pas adapter le 30B, mettez à niveau la GPU ou utilisez une API cloud pour les six premiers mois pendant que vous sécurisez le budget.', '**Erreur 2 : bloquer les RP sur les verdicts `block` dès le jour un.** Le premier mois est calibrage ; traitez toute sortie comme conseiller jusqu\'à ce que vous ayez mesuré le taux de faux positifs. Promouvez le blocage seulement après que le taux soit au-dessous d\'env. 5%.', '**Erreur 3 : exposez `ollama serve` sur `0.0.0.0:11434` sans auth.** C\'est l\'équivalent ère-LLM de laisser Redis liée à une interface publique. Liez-la à une interface privée et mettez auth devant avant toute exposition cross-host.', '**Erreur 4 : ignorez le cache.** Re-révisez les fichiers inchangés à chaque exécution CI gaspille env. 80% du budget d\'inférence sur une RP typique. Un petit cache hash fichier + hash diff (Redis ou SQLite) réduit la latence de révision et la charge GPU dramatiquement.', '**Erreur 5 : exécutez les travaux entraînement sur la même GPU.** L\'entraînement fait monter en flèche l\'utilisation du VRAM à la limite et affame le modèle de révision. Utilisez des GPU séparées ou, si vous devez partager, exécutez l\'entraînement sur un planning strict qui ne chevauche pas les heures RP de pointe.', '**Erreur 6 : construisez l\'action GitHub sans boucle de rétroaction.** Un système de révision sans réactions 👍/👎 ne peut pas s\'améliorer. Construisez la boucle la semaine un ; collectez des données ; itérez sur le prompt mensuellement.'] },
      sources: { id: 'sources', title: 'Sources', items: ['[Documentation Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — Référence officielle API HTTP pour `/api/chat`, `/api/generate`, sortie structurée et gestion des modèles.', '[Documentation vLLM](https://docs.vllm.ai/) — Documentation serveur inférence haute-débit ; le chemin de mise à niveau au-delà d\'Ollama pour les équipes haute-concurrence.', '[Documentation GitHub Actions](https://docs.github.com/en/actions) — Référence officielle pour les exécuteurs auto-hébergés, les secrets et le SDK JavaScript Actions utilisé dans le flux de travail ci-dessus.', '[Tarification GitHub Advanced Security](https://github.com/pricing) — Référence prix catalogue pour la comparaison des coûts ; vérifiez par rapport à vos termes réellement négociés.', '[Fiche Technique Qwen3-Coder](https://huggingface.co/Qwen/Qwen3-Coder-30B) — Architecture, fenêtre de contexte et conditions de licence pour le modèle de révision recommandé.', '[Référence GitLab CI/CD](https://docs.gitlab.com/ee/ci/) — Référence équivalente pour les équipes GitLab ; la portion LLM-call du flux de travail est identique.'] },
      faq: { id: 'faq', title: 'Questions fréquemment posées', faqs: [{ q: 'Un serveur GPU unique peut-il gérer CI pour 50 développeurs ?', a: 'Une GPU unique 24 GB (RTX 4090) gère confortablement 15–25 développeurs ; 50 développeurs ont besoin d\'une carte 48 GB (L40S, A6000 Ada) ou un changement de Ollama à vLLM sur le même matériel. Le goulot d\'étranglement est la concurrence aux moments chasse-RP — lundi matin, fin de sprint — pas le débit état-stable. Pour 100+ développeurs, planifiez pour multi-GPU ou du matériel classe H100.' }, { q: 'La révision de code local affecte-t-elle la latence RP ?', a: 'Typiquement non — la latence de révision est 10–30 secondes sur une GPU unique 24 GB pour une diff typique de 200 lignes, et le temps d\'attente auteur RP est dominé par d\'autres travaux CI (build, test, lint) qui prennent bien plus longtemps. L\'exception est les très grandes RP (au-dessus d\'env. 30K tokens diff) où la révision peut prendre 60–90 secondes ; tronquez ou divisez celles-ci au niveau action.' }, { q: 'Comment puis-je auditer ce que le modèle voit ?', a: 'Ollama enregistre chaque corps de requête par défaut dans son fichier journal (l\'emplacement varie par OS ; vérifiez `journalctl -u ollama` sur systemd ou le répertoire log Ollama). Chaque diff RP qui va en révision est dans ce journal. Combiné avec `tcpdump` sur l\'interface sortante du serveur GPU pour prouver zéro sortie de données. La surface d\'audit complète est un processus et un fichier journal — bien plus simple à auditer qu\'une API révision code SaaS.' }, { q: 'Puis-je bloquer les RP basées sur la sortie du modèle local ?', a: 'Oui. L\'action retourne un champ `verdict` ; si le verdict est `block`, l\'action GitHub sort non-zéro, ce qui fait échouer la vérification, ce qui bloque fusion si la règle branch protection nécessite le passage de la vérification. La recommandation est de commencer avec `block` désactivé (beratend seulement) le premier mois, mesurer le taux de faux positifs, et promouvoir le blocage une fois le taux au-dessous d\'env. 5%.' }, { q: 'Cela fonctionne-t-il avec GitLab CI ?', a: 'Oui — architecture identique. Remplacez l\'action GitHub par un travail GitLab CI qui exécute le même `curl` au point de terminaison Ollama et poste la réponse en arrière à la demande fusion via l\'API GitLab. Le modèle, le prompt, le cache, le modèle de sécurité et le dimensionnement du matériel sont tous identiques. Bitbucket Pipelines, Jenkins et Buildkite fonctionnent de la même manière.' }, { q: 'Comment je garde le modèle à jour sans casser les pipelines ?', a: 'Épinglez le digest du modèle avec `ollama show <model> --modelfile` pour que CI production utilise une version exacte. Quand une nouvelle version modèle arrive, tirez-la sur un serveur staging, exécutez une petite suite fixture de diffs RP représentatives, comparez la sortie structurée à la version production, et promouvez seulement après que la suite de régression passe. Traitez les mises à jour modèle comme n\'importe quelle autre mise à niveau de dépendance.' }, { q: 'Puis-je utiliser ceci pour la génération de code en plus de la révision ?', a: 'Oui, mais les charges concourent pour la même GPU et ont des caractéristiques de latence différentes. La révision de code est asynchrone et tolère les réponses 30-secondes ; la génération de code interactif dans un éditeur a besoin de latence sub-2-secondes. Pattern recommandé : utilisez un modèle plus petit (Qwen3-Coder 7B) pour l\'autocomplete d\'éditeur sur les machines développeur et réservez le serveur GPU dédié aux charges de classe révision en CI.' }, { q: 'Quel est le modèle de sécurité pour le serveur GPU ?', a: 'Traitez-le comme n\'importe quel service interne : liez le serveur d\'inférence à une interface privée, mettez l\'authentification devant (auth mTLS, jetons shared-secret, ou accès VPN-seulement), restreignez sortant avec default-deny, et rotez les identifiants. L\'ajout LLM-spécifique est l\'audit de provenance poids du modèle — épinglez le digest, documentez la source, et confirmez sortie de données zéro avec captures paquets périodiques.' }, { q: 'Plusieurs repos peuvent-ils partager un serveur GPU ?', a: 'Oui — le serveur GPU est juste un point de terminaison HTTP. N\'importe quel nombre de repos peut l\'appeler tant que le serveur a de la capacité. Pour les organisations avec 10+ repos actifs, ajoutez des limites taux par-repo au proxy inverse devant Ollama pour éviter qu\'un repo bruyant (grand monorepo, pushes forcés fréquents) ne famine les autres.' }, { q: 'Comment je gère les faux positifs en CI ?', a: 'Trois couches. Premièrement, design de prompt — fixez des seuils de sévérité hauts, imposez la sortie structurée, et tagguez les résultats tentatives. Deuxièmement, filtrage niveau action — bloquez seulement sur `severity >= "high"` ; montrez moyen/bas comme commentaires. Troisièmement, une boucle de rétroaction — laissez les développeurs réagir 👍/👎 sur chaque commentaire, puis examinez hebdomadairement les 👎s et mettez à jour le prompt système pour supprimer les catégories les plus courantes de faux positifs. Attendez un taux 5–10% après un mois de réglage ; au-dessous de 5% est réalisable avec itération soutenue.' }] },
      relatedReading: { id: 'related-reading', title: 'Lectures Associées', items: ['[Replace GitHub Copilot With a Local LLM](/fr/power-local-llm/replace-github-copilot-with-local-llm) — contexte plus large de remplacement des coûts pour les équipes envisageant les outils IA auto-hébergés.', '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/fr/power-local-llm/continue-dev-vs-cline-vs-aider-local) — ce qui exécute en pipelines vs travail éditeur interactif ; la couche harness sous le modèle.', '[Best Local Coding Models in 2026](/fr/power-local-llm/best-local-coding-models-2026) — côté modèle de l\'équation : Qwen3-Coder, DeepSeek, Codestral et le paysage de licence.', '[System Prompt vs User Prompt: What\'s the Difference](/fr/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — ancrage d\'ingénierie de prompt pour le prompt système révision.', '[llama.cpp vs Ollama vs vLLM](/fr/local-llms/llamacpp-vs-ollama-vs-vllm) — comparaison moteur inférence ; vLLM est le chemin mise à niveau au-delà d\'Ollama pour les équipes haute-concurrence.', '[Power Local LLM Hub](/fr/power-local-llm) — bibliothèque guides complète.'] },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'ローカルLLMでCI/CDコードレビュー：セルフホスト型セットアップ2026',
    seoTitle: 'CI/CDのローカルLLMコードレビュー：セルフホスト型セットアップ2026',
    intro:
      'セルフホスト型のローカルLLMコードレビューは、Qwen3-CoderモデルをあなたのCI/CDパイプラインの背後に配置して、プルリクエストがあるたびにコードベースがネットワークから出ることなくレビュー審査が実行されます。アーキテクチャは単純です——Ollama を実行する専用GPU サーバー、HTTP APIを呼び出すカスタムGitHub Action、そして偽陽性率のために調整されたレビュープロンプト——経済学は15人から25人の有料GitHubシート付近でセルフホスティングの方向にひっくり返ります。このガイドでは、アーキテクチャ、実装されたGitHub Actions ワークフロー、チームサイズ別のハードウェアサイジング、セキュリティモデル、そして2 か月目のチームを困らせる運用上の落とし穴について説明します。',
    metaDescription:
      '2026年版CI/CDでのローカルLLMコードレビュー：クラウド不要でPRレビューを自動化。GitHub Actions、GitLab CIとの統合、プライバシー保護、コスト削減を解説。',
    twitterDescription:
      'ネットワーク内のGPUサーバーでセルフホスト型コードレビュー。GitHub ActionsはOllamaを呼び出し、Qwen3-CoderがPRをレビューします。コードベースはあなたの境界内に留まります。セットアップ、サイジング、コスト分析はこちら。',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'NVIDIA L40S 48 GB',
      'NVIDIA A6000 Ada 48 GB',
      'NVIDIA H100 80 GB',
    ],
    audience:
      'GitHub ActionsやGitLab CIを実行し、ソースコードをサードパーティAPIに送信することなくLLM駆動のコードレビューを追加したいエンジニアリングチームリード、プラットフォームエンジニア、DevOps実務者。Docker、Linux、セルフホスト型ランナーに精通していることが前提です。',
    readTime: '15分で読める',
    educationalLevel: 'Advanced',
    primaryTerm: 'ローカルLLMコードレビュー CI/CD',
    targetKeywords: [
      'ローカルLLMコードレビュー',
      'セルフホスト型コードレビューLLM',
      'GitHub ActionsローカルLLM',
      'Ollama GitHub Actions',
      'プライベートコードレビューAI',
      'OpenAIなしのコードレビュー',
    ],
    leadAnswerBlock:
      '**セルフホスト型ローカルLLMコードレビューは3つの部分を使用します：Ollama（またはvLLM）を実行する専用GPUサーバー、サーバーのHTTPエンドポイントにdiffをPOSTするカスタムGitHub Action、構造化された判定（承認/コメント/ブロック）を返すレビュープロンプト。1つのRTX 4090（24 GB）でQwen3-Coder 30Bを実行すると、15～25開発者のチームに対応できます。48 GBカード（L40SまたはA6000 Ada）は約50開発者まで対応できます。H100クラスのハードウェアは100を超える場合に必要です。経済的には、GitHub Advanced Security（$19/開発者/月）の15～25有料シート付近でセルフホスティングの方向に転換します——正確な転換点はハードウェア購入対既存容量に依存します。セキュリティ上の利点は実質的です：ソースコードはネットワークから出ません。監査サーフェスはただ1つのプロセスとただ1つのログファイルです。パケットキャプチャでゼロエグレスを証明できます。**',
    quickAnswerTop: {
      ja: {
        question: 'CI/CDでローカルLLMをコードレビュアーとして実行するにはどうすればよいですか？',
        answer:
          'Ollama（またはvLLM、llama.cpp）を実行しているGPUサーバーを構築します。コーディング調整モデル——Qwen3-Coder 30Bは2026年5月のデフォルト——を使用します。セルフホスト型GitHub Actionsランナーを同じネットワーク上に追加するか、プライベートネットワーク経由で既存のランナーにサーバーのHTTPエンドポイントを公開します。PRdiffをフェッチし、レビュープロンプト付きでLLMエンドポイントにPOSTし、構造化された応答（承認/コメント/ブロック）を解析し、PRにインラインコメントを戻すカスタムアクションを記述します。モデルはあなたの境界内に留まります。アクションは他のチェックのように動作します。ハードウェアの観点から、1つのRTX 4090でQwen3-Coder 30Bは15～25開発者を処理します。48 GBカードは約50開発者に拡張します。100を超える場合はH100クラスまたはマルチGPUが必要です。',
        bullets: [
          'アーキテクチャ：Ollama を実行するGPUサーバー→セルフホスト型ランナー（またはクラウドランナーからのHTTP）→カスタムGitHub Action→PRコメント。',
          'デフォルトスタック：Ollama + Qwen3-Coder 30B（Apache 2.0）+ カスタムJavaScriptまたはコンポジットアクション。',
          'ハードウェア：1×RTX 4090（24 GB）は15～25開発者向け。1×L40S/A6000 Ada（48 GB）は約50開発者向け。1×H100またはマルチGPUは100以上向け。',
          '経済学：$19/開発者/月のGitHub Advanced Securityに対する転換点はおおよそ15～25の有料シート。ハードウェアコストに依存します。',
          'セキュリティ：ソースコードはネットワークから出ません。パケットキャプチャでエグレスはゼロと証明できます。監査サーフェスは1つのプロセスと1つのログです。',
          'GitLab CIも同じ方法で動作します——アクションの代わりにランナーですが、LLM呼び出しは同一です。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '重要なポイント', anchor: '#key-takeaways' },
      { label: '重要な事実', anchor: '#quick-facts' },
      { label: 'アーキテクチャ比較', anchor: '#architecture-comparison' },
      { label: '推奨スタック', anchor: '#recommended-stack' },
      { label: 'GitHub Actionsワークフロー', anchor: '#workflow' },
      { label: 'チームサイズ別ハードウェアサイジング', anchor: '#hardware-sizing' },
      { label: 'ビルド全体でのGPU共有', anchor: '#gpu-sharing' },
      { label: 'GitHub Advanced Securityとのコスト比較', anchor: '#cost-comparison' },
      { label: 'セキュリティモデルと監査体制', anchor: '#security-model' },
      { label: 'コードレビュー用プロンプト設計', anchor: '#prompt-design' },
      { label: '偽陽性への対応', anchor: '#false-positives' },
      { label: '2か月目の運用上の落とし穴', anchor: '#operational-pitfalls' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: 'ソース', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連資料', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**アーキテクチャは3つの部分です：** Ollama（またはvLLM）を実行するGPUサーバー→ネットワーク経由で到達可能なCIランナー→PRdiffをPOSTし構造化判定を解析するカスタムアクション。GitHub Actions、GitLab CI、Buildkite、Jenkinsで同じ形です。',
          '**2026年5月のデフォルトスタック：** Ollama + Qwen3-Coder 30B（Apache 2.0）+ シンカスタムGitHub Action。総インフラ：1つのGPUボックス、1つのランナー。',
          '**ハードウェアサイジング：** RTX 4090（24 GB、¥320,000～¥360,000）は15～25開発者を処理します。L40SまたはA6000 Ada（48 GB、¥1,120,000～¥1,280,000）は50人に拡張します。H100（80 GB、¥4,000,000以上）またはマルチGPUは100以上向けです。',
          '**経済学はおおよそ15～25の有料GitHub Advanced Securityシート($19/開発者/月)でセルフホスト領域に転換します——RTX 4090ビルドは5～10ヶ月でペイバックします。',
          '**セキュリティ上の利点は実質的で、単なるマーケティングではありません。** コードはネットワークから出ません。`tcpdump`でゼロエグレスを証明できます。監査サーフェス全体は1つのOllamaプロセスと1つのログファイルです。',
          '**偽陽性は運用上の税金です。** 最初の月の調整ループを計画します：プロンプト反復、重大度しきい値、レビュー担当者のフィードバック取得パスによってプロンプトは時間とともに改善します。',
          '**遅延は許容できます。** 24 GB GPUでQwen3-Coder 30Bを実行すると、典型的な200行のPRdiffを30秒以内でレビューします。PR著者の待機時間は他のCIジョブが支配し、レビューではありません。',
          '**人間のレビューを完全に置き換えないでください。** ローカルLLMは最初のパストリアージゲートです——明らかな問題を捕捉し、リスクのある変更にフラグを立て、LLMがまだ間違う判断呼び出しについて人間を解放します。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '重要な事実',
        items: [
          '**GPU メモリ要件：** Qwen3-Coder 30Bはq4_K_M量子化で最大22GB VRAMを必要とします。24GB（RTX 4090）はスリムですが機能します。余裕が欲しい場合は最小32GB（RTX 5090）を使用します。',
          '**推論遅延：** 典型的なPRdiff（50～500行）は24 GBカードで10～30秒。H100クラスのカードは5～10秒でこれを削減します。レビュー時間をCIジョブの他の部分と比較してください——テストスイートとビルドが通常支配します。',
          '**同時実行：** 1つのRTX 4090はGPUスケジューリング（タイムシェアリング）でおおよそ1～3同時レビューを処理できます。複数の同時PRレビューは待機時間を増加させ、最初の月は偽陽性も増加させます。',
          '**ネットワークアーキテクチャ：** ランナーはプライベートVPC内でOllamaサーバーに到達するか、Tailscale / WireGuardなどのプライベートトンネルを経由する必要があります。インターネット公開のまま放置しないでください。',
          '**モデル選択：** Qwen3-Coder 30Bはコード生成中間の5月2026年デフォルトです。DeepSeek Coder V3と同等です。7Bはより速いですが、レビュー品質が低下し、開発者はシステムを信じるのにやめます。',
          '**ストレージ：** Ollama はモデルウェイトを `~/.ollama/models` に格納します。Qwen3-Coder 30B @ q4_K_Mは約14GBです。複数のモデルの場合は追加ストレージを計画します。',
          '**キャッシング重要性：** ファイルハッシュ + diffハッシュベースのキャッシュなしでは、再び変わらないファイルを再レビューして、推論予算の約80%を浪費します。小さなキャッシュレイヤー（Redis、SQLite、またはメモリ内）は推論負荷を劇的に削減します。',
          '**監査可能性：** Ollamaはリクエストボディをログに記録します。このログはPRdiffを含むため、ログローテーション（週単位）と暗号化を適用します。監査可能性はセキュリティ値提案の大きな部分です。',
        ],
      },
      architectureComparison: {
        id: 'architecture-comparison',
        title: 'アーキテクチャ比較',
        content:
          '**3つのアーキテクチャパターンがあります：セルフホスト型（Ollama/vLLM）、API経由クラウド（OpenAI/Anthropic）、あるいはハイブリッドです。各パターンにはトレードオフがあります。**',
        columns: [
          'アーキテクチャ',
          'セットアップ複雑度',
          'コストスケーリング',
          'データプライバシー',
          'カスタマイズ',
          '推奨用途',
        ],
        rows: [
          {
            'アーキテクチャ': 'セルフホスト型（Ollama）',
            'セットアップ複雑度': '中',
            'コストスケーリング': '15～25開発者でゼロになります',
            'データプライバシー': 'ネットワーク内のコード',
            'カスタマイズ': '完全な制御',
            '推奨用途': '大チーム、機密コード、金融/医療',
          },
          {
            'アーキテクチャ': 'API経由クラウド（OpenAI）',
            'セットアップ複雑度': '低',
            'コストスケーリング': '開発者数に対して線形',
            'データプライバシー': 'サードパーティシステムにレプリケート',
            'カスタマイズ': 'プロンプトのみ',
            '推奨用途': '5人未満のチーム、公開プロジェクト、実験',
          },
          {
            'アーキテクチャ': 'ハイブリッド',
            'セットアップ複雑度': '高',
            'コストスケーリング': 'セルフホスト対APIに基づく',
            'データプライバシー': 'ポリシー選択可能',
            'カスタマイズ': '高い',
            '推奨用途': '大チーム、段階的なロールアウト',
          },
        ],
        items: [
          '**セルフホスト型（推奨）：** 初期セットアップ（GPU購入、システム管理、セキュリティ設定）は中程度の複雑度です。ただしコストは固定で、15～25開発者以上で支配的になります。コードはネットワークから出ません。プロンプトフル制御、モデル選択、および監査。大チーム（25+）の標準。',
          '**クラウドAPI：** OpenAI、Anthropic、またはその他のAPIサービス経由で。セットアップは単純です——APIキーとカスタム GitHubアクション。コストはリクエスト単位（トークン/ドル）スケーリングします。5人未満のチームで安価。大チームでは $2,000/月+から非常に高速でスケーリングします。コードはサードパーティシステムに見えます。',
          '**ハイブリッド：** 小さなチーム（<25人）ではクラウドAPIで始め、大きくなるにつれてセルフホストに切り替えます。ただしアーキテクチャ反復の複雑性を支払います——プロンプトをバージョン化し、モデル品質の違いを管理し、フェイルオーバーを計画します。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'この記事はセルフホスト型（Ollama + ローカルモデル）に焦点を当てています。クラウドAPIsはより良い選択肢です——セットアップと費用の観点から——チームの場合、5未満で、コード機密性が低い場合。',
          },
        ],
      },
      recommendedStack: {
        id: 'recommended-stack',
        title: '推奨スタック',
        content:
          '**2026年5月の本番環境推奨セットアップはOllama + Qwen3-Coder 30Bです。** これは柔軟性、オープンソース許可、推論速度、そしてチームサイズ別の経済学のバランスが最も良いです。',
        items: [
          '**Ollama：** サーバー推論フレームワーク。モデルローディング、量子化、バッチ処理を管理します。セットアップが簡単で、ドキュメント化が良く、GPUメモリ効率が適切です。https://github.com/ollama/ollama',
          '**Qwen3-Coder 30B：** Alibaba Qwen チームのコーディング専門モデル。Apache 2.0（許可付き）。文脈長256K。一般的なコード品質、エラー検出、およびセキュリティについては、DeepSeek Coder V3に比べて比肩します。HuggingFaceで入手可能。',
          '**カスタムGitHub Action（JavaScript）：** PR diffをフェッチし、Ollama HTTPエンドポイントにPOST、JSON応答を解析し、インラインコメントをポストします。100～200行。ユーザーとの依存関係なし。',
          '**セルフホスト型GitHub ActionsランナーまたはプライベートCI実行者：** ランナーまたはOllamaサーバーへの到達可能性（同じVPC、Tailscale、またはproxy）が必要です。クラウドランナーは機能しません。',
          '**セキュリティ層（オプション）：** プロキシリバース（nginx、Envoy）前のOllamaで、mTLS認証、または共有シークレット。デフォルトではOllamaはlocalhostにバインドされます。',
          '**ログ管理：** Ollamaはリクエストボディ（PR diffを含む）をログに記録します。syslog、ファイルローテーション、またはシステムd journalctl ポリシーによってログを回転させます。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'セットアップ後、最初の月にPromt Designセクション（以下参照）に時間を費やしてください。モデルの品質は固定されています。偽陽性率はプロンプトで決まります。',
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: 'GitHub Actionsワークフロー',
        content:
          '**以下は本番環境で使用可能なワークフローです。** ファイルを`.github/workflows/local-llm-review.yml`に置き、OLLAMA_HOST秘密キーを設定し、セルフホスト型ランナーまたはVPC内のランナーで実行することを確認してください。',
        codeBlock: `name: Local LLM Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: [self-hosted, linux]
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Get PR diff
        id: diff
        run: |
          git diff origin/\${{ github.base_ref }}...HEAD > /tmp/pr.diff
          wc -l /tmp/pr.diff

      - name: Call local LLM review
        id: review
        env:
          OLLAMA_HOST: \${{ secrets.OLLAMA_HOST }}   # ex. http://gpu-server.internal:11434
        run: |
          DIFF=$(jq -Rs . < /tmp/pr.diff)
          curl -sS "$OLLAMA_HOST/api/chat" \\
            -H 'Content-Type: application/json' \\
            -d "{
              \\"model\\": \\"qwen3-coder:30b\\",
              \\"stream\\": false,
              \\"format\\": \\"json\\",
              \\"messages\\": [
                {\\"role\\": \\"system\\", \\"content\\": \\"You are a senior code reviewer. Return JSON: {verdict: 'approve'|'comment'|'block', summary: string, comments: [{path, line, severity, message}]}\\"},
                {\\"role\\": \\"user\\", \\"content\\": $DIFF}
              ]
            }" > /tmp/review.json
          echo "verdict=$(jq -r '.message.content | fromjson | .verdict' < /tmp/review.json)" >> "$GITHUB_OUTPUT"

      - name: Post review comment
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const review = JSON.parse(JSON.parse(fs.readFileSync('/tmp/review.json')).message.content);
            const body = \`### Local LLM Review: \\\`\${review.verdict}\\\`\\n\\n\${review.summary}\`;
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body
            });

      - name: Block on critical verdict
        if: steps.review.outputs.verdict == 'block'
        run: exit 1
`,
        codeLanguage: 'yaml',
        items: [
          'ランナーはOLLAMA_HOST へのネットワークアクセスが必要です——セルフホスト型は同じVPC内、またはTailscale / WireGuardを経由する必要があります。',
          'プロンプトシステムは構造化JSON応答を強制します。`format: "json"`と厳密なスキーマなしでは、操作上は自由形式出力を解析するのに時間を費やすことになります。',
          '`fetch-depth: 0`はベースブランチに対する真のdiffを計算するために必要です——浅いチェックアウトはmalformed diffを生成します。',
          'リポジトリが約50Kを超える行のコード変更の場合、diff前に送信するdiffを切り詰めるか断片化します。256K文脈はQwen3-Coder 30Bで寛容ですが、実用的な作業文脈はより64K～128K付近です（[2026年のベストローカルコーディングモデル](/ja/power-local-llm/best-local-coding-models-2026)を参照）。',
          'プロンプト深度設計——システムプロンプト対ユーザープロンプト、例、構造化結果——については、[System Prompt vs User Prompt: What\'s the Difference](/ja/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)を参照。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このワークフローは意図的に最小限です。本番環境は以下を追加します：ファイルハッシュ + diffハッシュベースのキャッシュで変更されていないファイルの再レビューをスキップ、重大度のしきい値（`severity >= "high"`でのみブロック）、インラインコメント投稿（単一の概要コメントの代わり）、言語別のプロンプト変数、レビュー担当者のフィードバック取得でプロンプトを時間とともに改善します。',
          },
        ],
      },
      hardwareSizing: {
        id: 'hardware-sizing',
        title: 'チームサイズ別ハードウェアサイジング',
        content:
          '**1つのRTX 4090（24 GB）は15～25開発者を快適に処理します。** 単一GPUのボトルネックはレビューあたりのスループットではなく、PR追跡の競争です（月曜朝、スプリント終了）。以下のサイジング規則はq4_K_M量子化のQwen3-Coder 30Bと典型的な50～500行のPRdiffを前提としています。',
        columns: [
          'チームサイズ',
          'GPU',
          'VRAM',
          '同時レビュー',
          'おおよその価格（2026年5月）',
        ],
        rows: [
          {
            'チームサイズ': '～5人の開発者',
            'GPU': 'RTX 4070 / 4070 Ti',
            'VRAM': '12～16 GB',
            '同時レビュー': '1（Qwen3-Coder 7Bのみ）',
            'おおよその価格（2026年5月）': '¥96,000～¥128,000',
          },
          {
            'チームサイズ': '15～25人の開発者',
            'GPU': 'RTX 4090 / 5090',
            'VRAM': '24～32 GB',
            '同時レビュー': '1～3（Qwen3-Coder 30B）',
            'おおよその価格（2026年5月）': '¥320,000～¥450,000',
          },
          {
            'チームサイズ': '25～50人の開発者',
            'GPU': 'L40S / A6000 Ada',
            'VRAM': '48 GB',
            '同時レビュー': '3～6',
            'おおよその価格（2026年5月）': '¥1,120,000～¥1,280,000',
          },
          {
            'チームサイズ': '50～100人の開発者',
            'GPU': '2×RTX 4090 または 1×H100',
            'VRAM': '48 GB / 80 GB',
            '同時レビュー': '6～10',
            'おおよその価格（2026年5月）': '¥640,000（2×4090） または ¥4,000,000+（H100）',
          },
          {
            'チームサイズ': '100人以上の開発者',
            'GPU': 'マルチGPU H100 または H200',
            'VRAM': '160 GB以上',
            '同時レビュー': 'vLLMで10+',
            'おおよその価格（2026年5月）': '¥8,000,000+',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '50開発者のしきい値を超える場合、OllamaからvLLMに切り替えてください。Ollamaは使いやすさを優先します。vLLMは共有GPU上のスループットを優先します。同じQwen3-Coder 30Bモデルは両方で実行されます——推論サーバーのみが変わります。',
          },
        ],
      },
      gpuSharing: {
        id: 'gpu-sharing',
        title: 'ビルド全体でのGPU共有およびその他の負荷',
        content:
          '**コードレビュー用の専用GPUがシンプルなアーキテクチャですが唯一ではありません。** ML推論またはトレーニング用にGPUインフラを既に実行しているチームは共有できます——レビュー遅延が大幅に増加する代わり。',
        items: [
          '**コードレビューのみの専用GPU：** シンプルなモデル。遅延は予測可能です。容量計画は簡単です。障害モードは分離されます。GPUインフラをまだ実行していないチームの推奨事項。',
          '**ML推論との共有GPU：** 推論負荷が安定した包含を持つ場合（例、小さな統合サービスが4～6GBに適応）実行可能です。レビューモデルが残りのVRAMを占有します。計画競争はこのパターンで稀です。',
          '**ML トレーニングとの共有GPU：** 強く非推奨です。トレーニングジョブはVRAM使用量を制限にスパイクさせ、レビューモデルを飢餓させ、30～120秒のレビュー遅延を引き起こし、開発者のシステムへの信頼を蝕みます。',
          '**ページングされた注意によるvLLM：** 高並行LLMサービス用に構築されました。同じRTX 4090は、Ollamaの下で1～3同時レビューを処理でき、vLLMの下で4～8を処理でき、より複雑な設定の代わり。25人の開発者以上で価値があります。',
          '**H100上のマルチテナント：** 100人以上の開発者でスケーリングしているとき、H100をMIGスライスに分割するか、テナント割り当てでvLLMを実行します。これはプラットフォームエンジニアリング領域です。即興しないでください。',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'GitHub Advanced Securityとのコスト比較',
        content:
          '**経済学はおおよそ15～25の有料シート付近でセルフホストに転換します。** これは1年のペイバック比較です。より長い地平線でセルフホストをより有利にしています。',
        items: [
          '**GitHub Advanced Security（Code Security）：** $19/開発者/月のカタログ価格（GitHubの価格ページで確認；エンタープライズ顧客はボリュームディスカウント利用可能）。',
          '**クラウドLLM API（例OpenAI、Anthropic）：** 一般的な PR ボリュームでは約 $50～200 / 月あたり / 開発者でアクティブ。基本コード サイズとレビュー プロンプト設計に非常に大きく異なります。',
          '**セルフホスト型ローカルLLM、RTX 4090ビルド：** ¥320,000～¥360,000のハードウェア（GPU +基本サーバーボックス）1度のみ。電力使用量：~50W休止中、~350W負荷中——約¥2,500～¥3,500/月の操作電力消費。シートごとの費用はありません。',
          '**10人の開発者でのパリティ：** GHAS $190/月対セルフホスト約¥2,500～¥3,500/月操作 +¥320,000～¥360,000 capex。Capexは約14ヶ月で支払います。',
          '**25人の開発者でのパリティ：** GHAS $475/月対セルフホスト約¥2,500～¥3,500/月操作 +¥320,000～¥360,000 capex。Capexは約5～6か月で支払います。',
          '**50人の開発者でのパリティ：** GHAS $950/月対セルフホスト約¥3,500～¥4,500/月操作 +¥1,120,000～¥1,280,000 capex（48 GB GPU）。Capexは約8ヶ月で支払います。',
          '**Capex数字が数学を支配します。** GPUを具体的にこれのために購入する場合、払い戻しは実質的です。既存のGPU容量がある場合、限界コストはゼロに近く、セルフホストは即座に勝ちます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらの数字はカタログ価格比較です。大規模企業向けの交渉されたGHAS料金はパリティを変えます。既存のGPU容量はそれを崩壊させます。材料購入にコミットする前に実際のコストで数学をやり直してください。',
          },
        ],
      },
      securityModel: {
        id: 'security-model',
        title: 'セキュリティモデルと監査体制',
        content:
          '**セキュリティ公約のタイトル——「ソースコードはネットワークから決してでない」——は真実であり、証明可能であり、このアーキテクチャで最も強い引数です。** 監査サーフェスは調達検査で防御可能なほど小さいです。',
        items: [
          '**モデルはあなたのアクションが送信するdiffのみを見ます。** テレメトリなし、隠されたネットワーク呼び出しなし。確認可能な`tcpdump`またはGPUサーバーのインターフェース発信上の`nft monitor`——安定操作状態での実行中、内部ホスト以外に向かって発信パケットゼロが見えるはずです。',
          '**完全な監査サーフェスは1つのプロセスと1つのログファイルです。** `ollama serve`はLLMスタック全体です。そのログ（リクエストボディ、遅延、モデルロードイベント）は監査記録です。SaaS ダッシュボード がない、シード保持ポリシー読む必要があります。',
          '**ネットワーク分離はシンプルです。** `ollama serve`をプライベートインターフェースにバインドします。mTLSまたは共有シークレット認証を使用してリバースプロキシを前に置きます。GPUサーバーの名前空間からの発信を拒否し、CI実行ネットワークサブネット以外へ向かいます。標準ゼロトラスト パターン、LLM固有の魔法なし。',
          '**モデルウェイトはベンダーが署名した静的成果物です。** Ollama経由で1度プルします、ダイジェストをピン、モデルは操作者アクションなしで変更できません。これはサイレント上流モデルスワップできるSaaS APIより強いサプライチェーン物語です。',
          '**コンプライアンス体制：** ゼロデータエグレスはSOC 2、ISO 27001、GDPR、およびEU AI法限定リスク分類簡単に文書化です。セルフホスト型コンプライアンス最も困難な部分は一般的に推論サーバー自身を文書化しています。OllamaとvLLMはよく文書化です。',
          '**METI機関と日本のAI設置ガイドラインとの関連性：** 日本の経済産業省（METI）がAI採用に対するガイドラインを発行しました。セルフホストAIは要件にはプッシュしてMETI準拠コンプライアンス——AIモデルに情報主権、テクノロジー監視力、異なる機関のモデルによるセキュリティ検証。Ollamaを実行してQwen3-Coder 30Bはこれらのすべての要件を満たします。',
          '**モデルはあなたのコードを見えます。** セルフホスト型はモデルから秘密を意味しません——それは第三者からプライベートを意味します。内部脅威シナリオ（サーバーアクセス権のあるエンジニアがPR diffを含むログ履歴を読む）は依然スコープ内です。ログを回転させ相応にアクセスを制限します。',
        ],
      },
      promptDesign: {
        id: 'prompt-design',
        title: 'コードレビュー用プロンプト設計',
        content:
          '**偽陽性率の最大単一決定要因はシステムプロンプトです。** あいまいなプロンプト「このコードを検査」は漠然としたレビューコメントを生成します。特定のしきい値と構造化結果を持つプロンプト実行可能なレビューフィードバックを生成します。',
        items: [
          '**構造化出力は交渉不可です。** 厳密なスキーマ（`verdict`、`summary`、`comments[]`）を持つJSONを強制します。これなしでアクションはコード30%の自由形式出力を解析し、障害モードはサブトルです。',
          'Structured outputと JSON modelの応用の完全な信仰については[Structured output and JSON mode](/ja/prompt-engineering/structured-output-and-json-mode)を参照。',
          '**重大度しきい値はプロンプトに属し、アクション内ではありません。** モデルに`critical`、`high`、`medium`、`low`を定義し、明確に求められない限り低重大度結果をフィルタリングするよう告げます。自由形式の重大度フィールドの事後フィルタリングより大幅に信頼できます。',
          '**例でプロンプトをアンカーします。** 実のdiffと理想レビュー JSONを持つ1～2-shotプロンプト同じモデル大きなdiffのゼロショット同じサイズを上回ります。',
          '**「レビュー」意図と「コメント」を区別します。** 批評コメント（「これはヘルパーへの抽出を検討」）とブロッカー（「これはSQL インジェクション導入」）には異なるCI アクションが必要です。これらを構造化出力でタグ付けし、ブロッカーのみでアクションブロックにします。',
          '**言語別プロンプト変動体は一定以上のサイズで役立ちます。** ポリグロット コードベースは関連言語イディオムを参照するプロンプトから恩恵を受けます（Pythonic対Rust idiomatic）。これはおおよそ25開発者以下のオプション；上で価値がある。',
          'より深いプロンプトエンジニアリングアンカー——システムプロンプト対ユーザープロンプト、構造化結果、few-shot promptingについては[System Prompt vs User Prompt: What\'s the Difference](/ja/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)を参照。',
        ],
      },
      falsePositives: {
        id: 'false-positives',
        title: '偽陽性への対応開発者信頼を傷つけることなく',
        content:
          '**偽陽性はLLM コードレビューの運用税です。** 5%のレートは受け入れられます。20%は耐え難いです。差のほとんどは主にプロンプト反復と反フィードバック ループでなく、モデルです。',
        items: [
          '**「block」しきい値を高く設定します。** すべての小さなlintの問題の`block`判決を引き起こすことは開発者をチェックを迂回するように訓練します。`block`をセキュリティの問題、壊れたテスト、明確な正確性障害のために予約します。',
          '**コメント非ブロッキングは安価にします。** モデルが不確実なインラインコメントを「tentative」/「consider」とタグ付けして、著者が迅速に儀式なしで却下できるようにします。',
          '**1か月目に反フィードバック ループを構築します。** 各レビュー コメントに反応（👍 / 👎）を追加します。定期的に（週単位で機能）👎s を検査し、システムプロンプトを明示的な「X のレポートなし」の指示で更新してフォーム偽陽性のカテゴリーで最もコモン。',
          '**PR あたりのコメント ボリュームをレート制限します。** 1 つの PR は LLM から 5～10 以上のコメントを受け取ってはいけません。超えるとシグナル対ノイズ比が崩壊します。プロンプト レベルでアクション機能（「最大Nコメント戻す」）。',
          '**判決対マージ相関を週単位で追跡します。** 80%の`block`判決とにかくマージの場合、しきい値は非常に攻撃的です。0%の`comment`判決が人間アクション取得場合、プロンプトはノイズを生成します。',
        ],
      },
      operationalPitfalls: {
        id: 'operational-pitfalls',
        title: '2か月目の運用上の落とし穴',
        content:
          '**セットアップは注意を取得します。操作は無視されます。** 以下の障害のいくつかはチーム蜜月期後プロジェクトを放棄するようにします。',
        items: [
          '**モデル更新はプロンプトを破ります。** 新しいQwen3-Coder バージョン構造化出力フォーマットをわずかに変更；JSON解析はCI で破ります。レビューはポストを停止します。`ollama show <model> --modelfile`でモデル ダイジェスト ピンします。新しいバージョンを段階的にプロモートする前にステージング環境にアップグレードします。',
          '**長期稼働下の GPU メモリ断片化。** GPU サーバー 24/7 実行はVRAM を断片化でき、数週後の新しい割り当てを拒否します。`ollama serve`週単位 cron ジョブで再開。安く、この障害モード完全に避けます。',
          '**CI ランナー競争。** セルフホスト型ランナーは LLM サーバーと他の CI ジョブ両方をホストすれば、ビルド負荷下でレビュー遅延はスパイクします。チームサイズが~25人超える時、ランナーと GPU サーバーを分離します。',
          '**Diff サイズ漂流。** PR サイズ漂流上向き；最終的に PR 実用的なモデル コンテキスト超えで漂流で黙に低下します。大動作¥30K トークン上のdiffを分割または切り詰めるガード追加アクション；著者に警告します。',
          '**力と冷却。** 継続的に負荷されたRTX 4090 は推論の下で約350W を取得し、かなり熱を生成します。インフラ アクティブなクーリングなくクローゼット サーバー ルーム GPU をスターベさせ；飢えコスト遅延と開発者は注意します。',
          '**ログローテーション忘れ。** Ollama デフォルト ログ各リクエスト本体。3 ヶ月後の PR レビュー ファイル ログ古い履歴diffs明確テキストで含みます。週単位ログを回転; 保持ポリシーごとのアーカイブまたはパージ。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'ローカルLLM コードレビュー設定時の一般的な間違い',
        items: [
          '**間違い 1：16 GB GPU上で7Bモデルで開始。** Qwen3-Coder 7BレビューはQwen3-Coder 30B より非常に悪い。開発者は迅速に信頼失い、プロジェクトはシェルフ。30Bに適応できない場合、ガイド 6 ヶ月間 GPU を確保しながらクラウド API を使用。',
          '**間違い 2：初日から`block`判決の PR をブロック。** 最初の月は調整です。操作者はアドバイザーとしてすべての出力を扱います昇格のみ`block`率がおおよそ 5% 未満になったら。',
          '**間違い 3：auth なしで 0.0.0.0:11434 で公開 `ollama serve`。** これは LLM era equivalent leave Redis 公開インターフェースバインド。プライベート インターフェースにバインド; before any cross-host。',
          '**間違い 4：cache を無視します。** 回し無変更ファイル再レビュー PR あたりおおよそ 80%の推論予算を無駄にします。小さなファイル hash + diff hash キャッシュ（Redis または SQLite）レビュー遅延を劇的に削減し、GPU 負荷します。',
          '**間違い 5：同じ GPU に訓練ジョブを実行。** トレーニング はVRAM 使用量を制限にスパイク; レビュー モデルで餓死；30～120 秒レビュー遅延を引き起こし、開発者システム信頼を蝕みます。GPU を分離するか訓練を計画制御に実行 PR ピーク時の重複ありません。',
          '**間違い 6：フィードバック ループなしで構築 GitHub アクション。** フィードバック ロック反応 👍/👎 なしレビュー システムあれば改善できません。ロック週 1 を構築します。データを収集; 毎月プロンプトを反復します。',
        ],
      },
      sources: {
        id: 'sources',
        title: 'ソース',
        items: [
          '[Ollama Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) — Official API HTTP reference for `/api/chat`, `/api/generate`, structured output, and model management.',
          '[vLLM Documentation](https://docs.vllm.ai/) — High-throughput inference server documentation; the upgrade path beyond Ollama for high-concurrency teams.',
          '[GitHub Actions Documentation](https://docs.github.com/en/actions) — Official reference for self-hosted runners, secrets, and GitHub Actions JavaScript SDK used in the workflow above.',
          '[GitHub Advanced Security Pricing](https://github.com/pricing) — Catalog pricing reference for cost comparison; verify against your actual negotiated terms.',
          '[Qwen3-Coder Model Card](https://huggingface.co/Qwen/Qwen3-Coder-30B) — Architecture, context window, and license terms for the recommended review model.',
          '[GitLab CI/CD Reference](https://docs.gitlab.com/ee/ci/) — Equivalent reference for GitLab teams; the LLM-call portion of the workflow is identical.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '単一GPU サーバーは 50 開発者の CI を処理できますか？',
            a: '1 つの 24 GB GPU（RTX 4090）は 15～25 開発者を快適に処理します。50 開発者は 48 GB カード（L40S、A6000 Ada）または Ollama から vLLM への変更が同じハードウェアに必要です。ボトルネック PR 追跡の競争の瞬間（月曜朝、スプリント終了）であり、状態の合計スループット ではありません。100 人以上の開発者の場合、マルチ GPU またはクラス H100 ハードウェアを計画します。',
          },
          {
            q: 'ローカル コード レビューは PR 遅延を影響しますか？',
            a: '一般的にはいいえ——レビュー遅延は単一 24 GB GPU で典型的 200 行 diff で 10～30 秒、テスト スイートとビルド単位以上 OK、長く PR（約 30K トークン diff 以上で）超える。一般的に 60～90 秒を取得。これら数はアクション レベルでトランケート または断片化できます。',
          },
          {
            q: 'モデルの詳細は何ですか？',
            a: 'Ollama はデフォルト各リクエスト本体のログまたはシステム ジャーナル（systemd ベース OS で journalctl -u ollama）にあり。ログ ファイル。GPU サーバーのインターフェース 発信で tcpdump でゼロ外部をするに結合。完全な監査表面は 1 つのプロセスと 1 つのログ ファイルです——SaaS API レビュー コードより監査するために大幅にシンプル。',
          },
          {
            q: 'I can block PRs based on local model output？',
            a: 'はい。アクションは`verdict`フィールドを返します。判決は`block`の場合、アクションは非ゼロで終了し、ブランチ保護ルールが要件を通過できるまで失敗; PR 統合はブロック。推奨は最初の月`block`を無効にしておく（相談のみ）、偽陽性率を測定、約 5% のレート昇格のみそれが ブロック。',
          },
          {
            q: 'これはGitLab CI で機能しますか？',
            a: 'はい——アーキテクチャは同一です。GitHub アクション置き換え GitLab CI ジョブで Ollama エンドポイントへの同じ`curl`の実行、マージ リクエスト API 経由の響答バック。モデル、プロンプト、キャッシュ、セキュリティ モデル、ハードウェア サイジングはすべて同一です。Bitbucket Pipelines、Jenkins、Buildkite は同じ方法で機能。',
          },
          {
            q: 'パイプラインを破すことなしモデルを新しく保つ方法は？',
            a: '`ollama show <model> --modelfile`でモデル ダイジェストをピンして CI 本番使用正確バージョン。モデルの新しいバージョン到着時、ステージング サーバープル、小さなテストdiff RP 表現スイート実行し、本番バージョンへの構造化出力を比較、リグレッション スイートのみパス後昇格。回帰テストの他の依存のようなモデル アップグレード扱います。',
          },
          {
            q: 'レビューに加えてコード生成のためにこれを使用できますか？',
            a: 'はい、しかし負荷が同じ GPU について競争し、異なる遅延特性があります。コードレビューは非同期で 30 秒応答を許容します。エディター相互作用のコード生成は 2 秒以下遅延が必要です。推奨パターン：エディター自動完成大きなモデル（Qwen3-Coder 7B）と小開発者の機械に予約し、セルフホスト GPU サーバーのクラス。',
          },
          {
            q: 'GPU サーバーのセキュリティ モデルは何ですか？',
            a: '他内部サービスのように扱う：サーバーをプライベート インターフェースにバインド、前の認証（mTLS、shared-secret、またはVPN-のみアクセス）、既定の拒否されます、発信キー を制限して回転させます。LLM 固有の追加はモデル ウェイト提供チェーン監査——ダイジェスト ピン、ソース文書、周期的なパケット キャプチャでゼロ出力を確認。',
          },
          {
            q: '複数のリポはGPU サーバーを共有できますか？',
            a: 'はい——GPU サーバーはただ HTTP エンドポイント。任意の番号のリポは本社にコールできます。10+ リポの大きい組織を含む場合、リモート発信のプロキシの前に速度制限/リポを追加して回避大型リポ（大型モノレポ、無効な pushes）の独りよがりが他をスターベ。',
          },
          {
            q: 'I handle false positives in CI？',
            a: '3 層。最初に、プロンプト設計——高しきい値重大度、構造化出力に強制、残った結果タグ。第 2 にアクション レベルのフィルタ——ブロック`severity >= "high"`のみ; コメント表示として中/低。第 3 に反フィードバック ロック——開発者は各コメントで反応（👍/👎）許可し、週単位では👎s を確認し、システム プロンプトを一般的なフォーム偽陽性のカテゴリーを抑制更新します。1 か月調整後 5-10% レート想定；5% 以下は継続的な反復で実現可能。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[Replace GitHub Copilot With a Local LLM](/ja/power-local-llm/replace-github-copilot-with-local-llm) — セルフホスト型 AI ツール検討チームのコスト置き換えの広い文脈。',
          '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/ja/power-local-llm/continue-dev-vs-cline-vs-aider-local) — パイプライン実行は相互エディター。ハーネス層モデルの下。',
          '[Best Local Coding Models in 2026](/ja/power-local-llm/best-local-coding-models-2026) — 等式のモデル側：Qwen3-Coder、DeepSeek、Codestral とライセンス風景。',
          '[System Prompt vs User Prompt: What\'s the Difference](/ja/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — レビュー プロンプト システムのプロンプト エンジニアリング アンカー。',
          '[llama.cpp vs Ollama vs vLLM](/ja/local-llms/llamacpp-vs-ollama-vs-vllm) — 推論エンジン比較；vLLM は高並行チームのための Ollama をアップグレード経路。',
          '[Power Local LLM Hub](/ja/power-local-llm) — ガイド完全ライブラリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: '本地LLM在CI/CD中的代码审查：自托管设置2026',
    seoTitle: 'CI/CD中本地LLM代码审查：自托管设置2026',
    intro:
      '自托管本地LLM代码审查将Qwen3-Coder模型放在CI/CD管道后面，每次拉取请求都会获得审查，而代码库永不离开您的网络。架构简洁——运行Ollama的专用GPU服务器、调用其HTTP API的自定义GitHub Action，以及针对假阳性率调整的审查提示——经济学在15到25个付费GitHub座位附近转向自托管。本指南涵盖架构、可用的GitHub Actions工作流、按团队规模的硬件规划、安全模型，以及在第二个月困扰团队的运营陷阱。',
    metaDescription:
      'GitHub Actions中的自托管本地LLM代码审查：架构、可用的工作流YAML、按团队规模的硬件规划、安全模型，以及与GitHub Advanced Security的经济转折点。',
    twitterDescription:
      '网络内GPU服务器上的自托管代码审查。GitHub Actions调用Ollama，Qwen3-Coder审查PR，代码永不离开您的边界。设置、规划和成本分析。',
    current_models_mentioned: ['Qwen3-Coder 30B', 'Qwen3-Coder 7B', 'DeepSeek Coder V3'],
    current_hardware_mentioned: ['NVIDIA RTX 4090 24 GB', 'NVIDIA RTX 5090 32 GB', 'NVIDIA L40S 48 GB', 'NVIDIA A6000 Ada 48 GB', 'NVIDIA H100 80 GB'],
    audience: '运行GitHub Actions或GitLab CI，希望添加LLM驱动的代码审查而无需将源代码发送到第三方API的工程团队负责人、平台工程师和DevOps从业者。假设熟悉Docker、Linux和自托管运行器。',
    readTime: '阅读约15分钟',
    educationalLevel: 'Advanced',
    primaryTerm: '本地LLM代码审查 CI/CD',
    targetKeywords: ['本地LLM代码审查', '自托管代码审查LLM', 'GitHub Actions本地LLM', 'Ollama GitHub Actions', '私人代码审查AI', '无OpenAI的代码审查'],
    leadAnswerBlock: '**自托管本地LLM代码审查使用三部分：运行Ollama（或vLLM）的专用GPU服务器、将diff发送到服务器HTTP端点的自定义GitHub Action、返回结构化判决（批准/评论/阻止）的审查提示。单个RTX 4090（24 GB）运行Qwen3-Coder 30B舒适地为15-25开发者团队服务；48 GB卡（L40S或A6000 Ada）扩展到约50个开发者；超过100个需要H100级硬件。经济学在15-25个付费GitHub Advanced Security座位（$19/开发者/月）附近转向自托管——确切的转折点取决于硬件购买与现有容量。安全优势是实际的：源代码永不离开您的网络。审计表面是一个进程和一个日志文件。可以用数据包捕获证明零外泄。**',
    quickAnswerTop: { zh: { question: '如何在CI/CD中将本地LLM作为代码审查工具运行？', answer: '建立运行Ollama（或vLLM、llama.cpp）的GPU服务器，使用编码调优模型——Qwen3-Coder 30B是2026年5月的默认选择。在同一网络上添加自托管GitHub Actions运行器，或通过私有网络向现有运行器公开服务器的HTTP端点。编写小的自定义action来获取PR diff，用审查提示POST到LLM端点，解析结构化响应（批准/评论/阻止），并将内联评论发回PR。模型永远不会离开您的边界。action的行为类似于任何其他检查。就硬件而言，单个RTX 4090和Qwen3-Coder 30B处理15-25个开发者；48 GB卡扩展到约50个；超过100个需要H100级或多GPU。', bullets: ['架构：运行Ollama的GPU服务器→可通过网络到达的自托管运行器（或来自云运行器的HTTP）→自定义GitHub Action→PR评论。', '默认堆栈：Ollama + Qwen3-Coder 30B（Apache 2.0）+ 自定义JavaScript或复合action。', '硬件：1×RTX 4090（24 GB）用于15-25开发者；1×L40S/A6000 Ada（48 GB）用于约50个；1×H100或多GPU用于100以上。', '经济学：相比$19/开发者/月的GitHub Advanced Security，转折点约为15-25个付费座位，取决于硬件成本。', '安全性：源代码永不离开网络。可以用数据包捕获证明零外泄。审计表面是1个进程和1个日志。', 'GitLab CI工作方式相同——用运行器代替action，但LLM调用相同。'], updatedDate: '2026-05-07' } },
    toc: [{ label: '关键要点', anchor: '#key-takeaways' }, { label: '重要事实', anchor: '#quick-facts' }, { label: '架构比较', anchor: '#architecture-comparison' }, { label: '推荐堆栈', anchor: '#recommended-stack' }, { label: 'GitHub Actions工作流', anchor: '#workflow' }, { label: '按团队规模的硬件规划', anchor: '#hardware-sizing' }, { label: '构建间的GPU共享', anchor: '#gpu-sharing' }, { label: '与GitHub Advanced Security的成本比较', anchor: '#cost-comparison' }, { label: '安全模型和审计态势', anchor: '#security-model' }, { label: '代码审查提示设计', anchor: '#prompt-design' }, { label: '处理假阳性', anchor: '#false-positives' }, { label: '第二个月的运营陷阱', anchor: '#operational-pitfalls' }, { label: '常见错误', anchor: '#common-mistakes' }, { label: '资源', anchor: '#sources' }, { label: '常见问题', anchor: '#faq' }, { label: '相关阅读', anchor: '#related-reading' }],
    sections: {
      tldr: { id: 'key-takeaways', isTldr: true, items: ['**架构有三个部分：** 运行Ollama（或vLLM）的GPU服务器→网络可达的CI运行器→POST PR diff并解析结构化判决的自定义action。在GitHub Actions、GitLab CI、Buildkite和Jenkins上形状相同。', '**2026年5月默认堆栈：** Ollama + Qwen3-Coder 30B（Apache 2.0）+ 轻量级自定义GitHub Action。总基础设施：1个GPU盒子，1个运行器。', '**硬件规划：** RTX 4090（24 GB，约$2,000）处理15-25开发者；L40S或A6000 Ada（48 GB，约$7,000-8,000）扩展到50个；H100（80 GB，$25,000+）或多GPU用于100+。', '**经济学在约15-25个付费GitHub Advanced Security座位($19/开发者/月)处转向自托管——RTX 4090构建在该团队规模下5-10个月内收回。', '**安全优势是实际的，不仅仅是营销。** 代码永不离开网络。可用tcpdump证明零外泄。整个审计表面是一个Ollama进程和一个日志文件。', '**假阳性是运营税。** 计划第一个月的调整循环：提示迭代、严重程度阈值，以及审查人反馈获取路径使提示随时间改进。', '**延迟是可接受的。** 24 GB GPU运行Qwen3-Coder 30B在30秒内审查典型的200行PR diff。PR作者等待时间由其他CI工作支配，而非审查。', '**不要完全替换人类审查。** 本地LLM是首轮分流门——它捕捉明显问题、标记风险变更，并解放人类做LLM仍然做错的判断性调用。'] },
      quickFacts: { id: 'quick-facts', title: '重要事实', items: ['**GPU内存需求：** Qwen3-Coder 30B在q4_K_M量子化下最多需要22GB VRAM。24GB（RTX 4090）很紧但可行。如果想要余量，至少使用32GB（RTX 5090）。', '**推论延迟：** 典型PR diff（50-500行）在24 GB卡上为10-30秒。H100级卡将其减少到5-10秒。将审查时间与CI工作的其他部分比较——测试套件和构建通常占主导。', '**并发性：** 单个RTX 4090可通过GPU调度（时间共享）处理约1-3个并发审查。多个并发PR审查增加等待时间，第一个月也增加假阳性。', '**网络架构：** 运行器必须通过专用VPC到达Ollama服务器，或通过Tailscale / WireGuard等私有隧道。不要暴露在互联网上。', '**模型选择：** Qwen3-Coder 30B是2026年5月的代码生成默认值。与DeepSeek Coder V3相当。7B更快但审查质量降低，开发者很快失去信心。', '**存储：** Ollama将模型权重存储在`~/.ollama/models`中。Qwen3-Coder 30B @ q4_K_M约14GB。对于多个模型，计划额外存储。', '**缓存重要性：** 没有基于文件hash + diff hash的缓存，重新审查未更改的文件浪费约80%的推论预算。小缓存层（Redis、SQLite或内存中）大幅减少推论负载。', '**可审计性：** Ollama记录请求体到日志。此日志包含PR diff，所以应用日志轮转（周为单位）和加密。可审计性是安全价值主张的大部分。'] },
      architectureComparison: { id: 'architecture-comparison', title: '架构比较', content: '**有三种架构模式：自托管（Ollama/vLLM）、云API（OpenAI/Anthropic）或混合。每种都有权衡。**', columns: ['架构', '设置复杂度', '成本扩展', '数据隐私', '定制', '推荐用途'], rows: [{ '架构': '自托管（Ollama）', '设置复杂度': '中等', '成本扩展': '15-25开发者时为零', '数据隐私': '网络内代码', '定制': '完全控制', '推荐用途': '大团队，敏感代码，金融/医疗' }, { '架构': '云API（OpenAI）', '设置复杂度': '低', '成本扩展': '与开发者数量线性', '数据隐私': '复制到第三方系统', '定制': '仅提示', '推荐用途': '少于5人团队，公开项目，实验' }, { '架构': '混合', '设置复杂度': '高', '成本扩展': '基于自托管vs API', '数据隐私': '政策可选', '定制': '高', '推荐用途': '大团队，分阶段推出' }], items: ['**自托管（推荐）：** 初始设置（GPU购买、系统管理、安全设置）为中等复杂度。但成本固定，在15-25+开发者时变为主导。代码永不离开网络。完整的提示控制、模型选择和审计。大型团队（25+）的标准。', '**云API：** 通过OpenAI、Anthropic或其他API服务。设置简单——API密钥和自定义GitHub Action。成本按请求单位（令牌/美元）扩展。5人以下团队便宜。大型团队从$2,000/月+开始扩展非常快。代码对第三方系统可见。', '**混合：** 小团队（<25人）从云API开始，随着增长切换到自托管。但支付架构迭代复杂性——版本化提示、管理模型质量差异、计划故障转移。'], callouts: [{ type: 'note', text: '本文关注自托管（Ollama +本地模型）。云API是更好的选择——从设置和成本角度——对于少于5人的团队且代码敏感性低的情况。' }] },
      recommendedStack: { id: 'recommended-stack', title: '推荐堆栈', content: '**2026年5月生产推荐设置是Ollama + Qwen3-Coder 30B。** 它在灵活性、开源许可、推论速度和按团队规模的经济学上取得最好平衡。', items: ['**Ollama：** 服务器推论框架。管理模型加载、量子化、批处理。设置简单、文档好、GPU内存效率好。https://github.com/ollama/ollama', '**Qwen3-Coder 30B：** Alibaba Qwen团队的编码专用模型。Apache 2.0（许可）。256K上下文长度。在一般代码质量、错误检测和安全性上与DeepSeek Coder V3相当。在HuggingFace上可得。', '**自定义GitHub Action（JavaScript）：** 获取PR diff，POST到Ollama HTTP端点，解析JSON响应，发布内联评论。100-200行。无用户依赖。', '**自托管GitHub Actions运行器或私有CI执行器：** 需要运行器或Ollama服务器可达性（同VPC、Tailscale或代理）。云运行器不起作用。', '**安全层（可选）：** Ollama前的反向代理（nginx、Envoy），具有mTLS认证或共享密钥。默认Ollama绑定到localhost。', '**日志管理：** Ollama记录请求体（包含PR diff）。应用syslog、文件轮转或systemd journalctl策略来轮转日志。'], callouts: [{ type: 'tip', text: '设置后，第一个月花时间在提示设计部分（见下文）。模型质量是固定的。假阳性率由提示决定。' }] },
      workflow: { id: 'workflow', title: 'GitHub Actions工作流', content: '**下面是生产可用的工作流。** 将文件放在`.github/workflows/local-llm-review.yml`，设置OLLAMA_HOST秘密，确保在自托管或VPC内的运行器上运行。', codeBlock: `name: Local LLM Code Review\n\non:\n  pull_request:\n    types: [opened, synchronize]\n\njobs:\n  review:\n    runs-on: [self-hosted, linux]\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n\n      - name: Get PR diff\n        id: diff\n        run: |\n          git diff origin/\${{ github.base_ref }}...HEAD > /tmp/pr.diff\n          wc -l /tmp/pr.diff\n\n      - name: Call local LLM review\n        id: review\n        env:\n          OLLAMA_HOST: \${{ secrets.OLLAMA_HOST }}   # ex. http://gpu-server.internal:11434\n        run: |\n          DIFF=$(jq -Rs . < /tmp/pr.diff)\n          curl -sS "$OLLAMA_HOST/api/chat" \\\\\n            -H 'Content-Type: application/json' \\\\\n            -d "{\n              \\"model\\": \\"qwen3-coder:30b\\",\n              \\"stream\\": false,\n              \\"format\\": \\"json\\",\n              \\"messages\\": [\n                {\\"role\\": \\"system\\", \\"content\\": \\"You are a senior code reviewer. Return JSON: {verdict: 'approve'|'comment'|'block', summary: string, comments: [{path, line, severity, message}]}\\"},\n                {\\"role\\": \\"user\\", \\"content\\": $DIFF}\n              ]\n            }" > /tmp/review.json\n          echo "verdict=$(jq -r '.message.content | fromjson | .verdict' < /tmp/review.json)" >> "$GITHUB_OUTPUT"\n\n      - name: Post review comment\n        uses: actions/github-script@v7\n        with:\n          script: |\n            const fs = require('fs');\n            const review = JSON.parse(JSON.parse(fs.readFileSync('/tmp/review.json')).message.content);\n            const body = \\\`### Local LLM Review: \\\\\`\${review.verdict}\\\\\`\\n\\n\${review.summary}\\\`;\n            await github.rest.issues.createComment({\n              owner: context.repo.owner,\n              repo: context.repo.repo,\n              issue_number: context.issue.number,\n              body\n            });\n\n      - name: Block on critical verdict\n        if: steps.review.outputs.verdict == 'block'\n        run: exit 1\n`, codeLanguage: 'yaml', items: ['运行器需要网络访问OLLAMA_HOST——自托管必须在同VPC内或通过Tailscale / WireGuard。', '系统提示强制结构化JSON响应。没有`format: "json"`和严格的schema，action花费30%的代码解析自由形式输出。', '`fetch-depth: 0`对于计算相对于基础分支的真实diff是必需的——浅检查生成畸形diff。', '对于超过约50K行代码更改的repo，在发送前截断或分割diff。256K上下文对Qwen3-Coder 30B很宽松，但实际工作上下文更接近64K-128K（见[2026年最佳本地编码模型](/zh/power-local-llm/best-local-coding-models-2026)）。', '对于提示深度工程——系统vs用户提示、示例、结构化结果——见[系统提示vs用户提示：有什么区别](/zh/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)。'], callouts: [{ type: 'note', text: '这个工作流故意最小。生产部署添加：基于文件hash + diff hash的缓存以跳过未更改文件的重新审查、严重程度阈值（仅在`severity >= "high"`时阻止）、内联评论发布（而非单个摘要评论）、按语言的提示变体、审查人反馈获取以随时间改进提示。' }] },
      hardwareSizing: { id: 'hardware-sizing', title: '按团队规模的硬件规划', content: '**单个RTX 4090（24 GB）舒适处理15-25开发者。** 单GPU的瓶颈不是每次审查的吞吐量，而是PR追踪时段的竞争（周一早上、冲刺结束）。下面的规划规则假设Qwen3-Coder 30B使用q4_K_M量子化和典型的50-500行PR diff。', columns: ['团队规模', 'GPU', 'VRAM', '并发审查', '约略价格（2026年5月）'], rows: [{ '团队规模': '~5开发者', 'GPU': 'RTX 4070 / 4070 Ti', 'VRAM': '12-16 GB', '并发审查': '1（仅Qwen3-Coder 7B）', '约略价格（2026年5月）': '约$600-800' }, { '团队规模': '15-25开发者', 'GPU': 'RTX 4090 / 5090', 'VRAM': '24-32 GB', '并发审查': '1-3（Qwen3-Coder 30B）', '约略价格（2026年5月）': '约$2,000-2,500' }, { '团队规模': '25-50开发者', 'GPU': 'L40S / A6000 Ada', 'VRAM': '48 GB', '并发审查': '3-6', '约略价格（2026年5月）': '约$7,000-8,000' }, { '团队规模': '50-100开发者', 'GPU': '2×RTX 4090或1×H100', 'VRAM': '48 GB / 80 GB', '并发审查': '6-10', '约略价格（2026年5月）': '约$5,000（2×4090）或$25,000+（H100）' }, { '团队规模': '100+开发者', 'GPU': '多GPU H100或H200', 'VRAM': '160 GB+', '并发审查': 'vLLM为10+', '约略价格（2026年5月）': '约$50,000+' }], callouts: [{ type: 'tip', text: '跨越50开发者阈值时，从Ollama切换到vLLM。Ollama优先易用性；vLLM优先共享GPU的吞吐量。相同的Qwen3-Coder 30B在两者上运行——仅推论服务器改变。' }] },
      gpuSharing: { id: 'gpu-sharing', title: '构建间的GPU共享及其他负载', content: '**代码审查专用GPU是最简单的架构但不是唯一的。** 已为ML推论或训练运行GPU基础设施的团队可以共享——代价是审查延迟大幅增加。', items: ['**仅代码审查专用GPU：** 最简单的模型。延迟可预测。容量计划简单。故障模式隔离。对未运行GPU基础设施团队的推荐。', '**与ML推论共享GPU：** 可行如果推论负载有稳定的封装（例如，小集成服务适应4-6GB）。审查模型占用剩余VRAM。此模式下计划竞争少见。', '**与ML训练共享GPU：** 强烈不推荐。训练作业将VRAM使用激增到限制，使审查模型饥饿，导致30-120秒审查延迟侵蚀开发者对系统的信心。', '**vLLM与分页注意力：** 为高并发LLM服务而生。同个RTX 4090在Ollama下处理1-3并发审查，在vLLM下处理4-8个，代价是更复杂的配置。25+开发者时值得。', '**H100上多租户：** 在100+开发者规模，将H100分割为MIG片或使用租户配额运行vLLM。这是平台工程领地；不要即兴。'] },
      costComparison: { id: 'cost-comparison', title: '与GitHub Advanced Security的成本比较', content: '**经济学在约15-25个付费座位处转向自托管。** 这是一年的回收比较；更长的视角使自托管更有利。', items: ['**GitHub Advanced Security（代码安全）：** 价目表价格$19/开发者/月（检查GitHub定价页面；企业客户可得体积折扣）。', '**云LLM API（例OpenAI、Anthropic）：** 典型PR体积下约$50-200/月/活跃开发者。极大地因代码库大小和审查提示设计而异。', '**自托管本地LLM、RTX 4090构建：** 约$2,000硬件一次（GPU +基础服务器盒）。电力消耗：~50W空闲、~350W负载——在典型使用中约$25-35/月操作功耗。无按座位成本。', '**10开发者处平价：** GHAS $190/月 vs 自托管约$25-35/月操作+约$2,000 capex。Capex在约14个月内回收。', '**25开发者处平价：** GHAS $475/月 vs 自托管约$25-35/月操作+约$2,000 capex。Capex在约5-6个月内回收。', '**50开发者处平价：** GHAS $950/月 vs 自托管约$35-45/月操作+约$7,500 capex（48 GB GPU）。Capex在约8个月内回收。', '**Capex数字主导数学。** 如果具体为此购买GPU，回收是真实的。如果有现有GPU容量，边际成本接近零，自托管立即获胜。'], callouts: [{ type: 'note', text: '这些数字是价目表价格比较。大企业谈判的GHAS费率改变平价；现有GPU容量摧毁它。在提交硬件购买前用你的实际成本重做数学。' }] },
      securityModel: { id: 'security-model', title: '安全模型和审计态势', content: '**安全声称标题——"源代码永不离开你的网络"——是真实的、可证明的，也是这个架构最强的论点。** 审计表面小到可在采购审查中防守。', items: ['**模型仅看到你的action发送的diff。** 无遥测、无隐藏网络调用。可用`tcpdump`或GPU服务器发送接口上的`nft monitor`验证——在稳定操作中，你应该看到零个向非内部主机的发送数据包。', '**完整审计表面是一个进程和一个日志文件。** `ollama serve`就是整个LLM栈。它的日志（请求体、延迟、模型加载事件）是审计记录。无SaaS仪表板要查询、无第三方保留政策要读。', '**网络隔离简单。** 将`ollama serve`绑定到私有接口。把认证反向代理（mTLS或shared-secret）放在它前面。拒绝GPU服务器namespace的发送，除了你的CI运行网络子网。标准零信任模式，无LLM特定魔法。', '**模型权重是供应商签署的静态工件。** 通过Ollama拉一次、pin digest、模型不能在无操作者行动下改变。这是比可静默交换上游模型的SaaS API更强的供应链故事。', '**合规态势：** 零数据外泄对SOC 2、ISO 27001、GDPR和EU AI法限制风险分类简单可记录。自托管合规最困难的部分通常是记录推论服务器本身。Ollama和vLLM都有好文档。', '**信息安全和全球数据主权：** 对于在全球运营但在亚太地区存储数据的组织，自托管本地LLM满足区域数据驻留要求。代码评审从不离开你的服务器，符合许多亚太地区的监管框架。', '**模型看到你的代码。** 自托管不意味着对模型私密——意味着对第三方私密。内部威胁情景（有服务器访问权的工程师读含有历史PR diff的日志）仍在范围内。轮转日志并相应限制访问。'] },
      promptDesign: { id: 'prompt-design', title: '代码审查提示设计', content: '**假阳性率的单一最大决定因素是系统提示。** 含糊的提示"检查这段代码"生成含糊的审查评论；带有特定阈值和结构化结果的提示生成可行的审查反馈。', items: ['**结构化输出不可商议。** 用严格schema（`verdict`、`summary`、`comments[]`）强制JSON。没有这个，action花费30%的代码解析自由形式输出，故障模式是微妙的。', '对于结构化输出和JSON模式应用的完整信息，见[结构化输出和JSON模式](/zh/prompt-engineering/structured-output-and-json-mode)。', '**严重程度阈值属于提示，不属于action。** 告诉模型什么是`critical`、`high`、`medium`、`low`；告诉它过滤低严重程度结果除非明确要求。这比自由形式严重程度字段的事后过滤更可靠得多。', '**用示例anchor提示。** 带有真实diff和理想审查JSON的1-2shot提示超过同样模型和diff大小的零shot。', '**区分"审查"意图和"评论"。** 批评评论（"考虑提取到helper"）和blocker（"这引入SQL注入"）需要不同的CI行动。在结构化输出中标记它们，仅在blocker处块action。', '**按语言的提示变体在某个规模以上很有用。** 多语言代码库从引用相关语言习语的提示受益（Pythonic vs Rust习语）。这在约25开发者以下是可选的；以上是有价值的。', '对于更深的提示工程anchor——系统vs用户提示、结构化结果、few-shot prompting——见[系统提示vs用户提示：有什么区别](/zh/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)。'] },
      falsePositives: { id: 'false-positives', title: '处理假阳性而不侵蚀开发者信心', content: '**假阳性是LLM代码审查的运营税。** 5%的比率可接受；20%无法忍受；差异主要来自提示迭代和反馈循环，不来自模型。', items: ['**设置高"block"阈值。** 每个小lint问题都触发`block`判决会训练开发者绕过检查。为安全问题、破损测试和明确的正确性失败预留`block`。', '**使非阻止评论便宜。** 模型不确定的内联评论标记为"tentative"/"consider"，以便作者可以快速无仪式地驳回。', '**第一个月建立反馈循环。** 向每条审查评论添加反应（👍 / 👎）。定期（周基础工作）检查👎s，用明确的"不报告X"指令更新系统提示以处理最常见的假阳性类别。', '**按PR的评论体积速率限制。** 单个PR不应从LLM收到超过5-10条评论；超过此信号对噪声比崩溃。在提示级实现action功能（"最多返回N条评论"）。', '**周追踪判决对合并相关性。** 如果80%的`block`判决无论如何都合并，你的阈值太激进。如果0%的`comment`判决获得任何人类行动，你的提示生成噪声。'] },
      operationalPitfalls: { id: 'operational-pitfalls', title: '第二个月的运营陷阱', content: '**设置获得关注；操作被忽视。** 下面的故障是那些让团队在蜜月后放弃项目的。', items: ['**模型更新破坏提示。** 新Qwen3-Coder版本略微改变结构化输出格式；JSON解析在CI中破坏；评论停止发布。用`ollama show <model> --modelfile`pin模型digest。在升级到生产前在staging上升级新版本。', '**长期运行下的GPU内存碎片化。** GPU服务器运行24/7可碎片化VRAM，在数周后拒绝新分配。每周用cron作业重启`ollama serve`。便宜且完全避免此故障模式。', '**CI运行器竞争。** 自托管运行器同时承载LLM服务器和其他CI作业在构建负荷下会看到审查延迟尖峰。当团队规模超过~25开发者时分离运行器和GPU服务器。', '**Diff大小漂移。** PR大小向上漂移；最终PR超过模型的实际上下文并无声地降级。添加guard来分割或截断超过约30K令牌的diff并警告作者。', '**电力和冷却。** 持续加载的RTX 4090在推论下抽取约350W并产生大量热。没有主动冷却的小壁橱服务器房间会饥饿GPU；饥饿导致延迟而开发者注意。', '**遗忘日志轮转。** Ollama默认记录每个请求体。三个月后PR审查的日志文件含有纯文本的历史PR diff。按周轮转日志；按你的数据保留政策存档或清除。'] },
      commonMistakes: { id: 'common-mistakes', title: '设置本地LLM代码审查时的常见错误', items: ['**错误1：在16 GB GPU上从7B模型开始。** Qwen3-Coder 7B审查显著比7B差。开发者快速失去信心，项目被搁置。如果不能容纳30B，在6个月内使用云API同时保障GPU预算。', '**错误2：第一天从`block`判决阻止PR。** 第一个月是校准；将所有输出视为建议直到假阳性率低于约5%时升级阻止。', '**错误3：在没有认证的0.0.0.0:11434上公开暴露`ollama serve`。** 这是LLM时代相当于将Redis绑定到公共接口。绑定到私有接口；在任何跨主机暴露前放置认证。', '**错误4：忽视缓存。** 在每次CI运行重新审查未改变的文件浪费约80%的推论预算在典型PR上。小文件hash + diff hash缓存（Redis或SQLite）大幅减少审查延迟和GPU负荷。', '**错误5：在同个GPU上运行训练作业。** 训练将VRAM使用激增到限制；使审查模型饥饿；导致30-120秒审查延迟侵蚀开发者系统信心。使用分离GPU或计划训练在不与PR峰值时段重叠的严格日程上。', '**错误6：没有反馈循环构建GitHub Action。** 没有👍/👎反应的审查系统无法改进。第一周构建循环。收集数据；每月迭代提示。'] },
      sources: { id: 'sources', title: '资源', items: ['[Ollama Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) — `/api/chat`、`/api/generate`、结构化输出和模型管理的官方API HTTP参考。', '[vLLM Documentation](https://docs.vllm.ai/) — 高吞吐量推论服务器文档；对高并发团队的超越Ollama升级路径。', '[GitHub Actions Documentation](https://docs.github.com/en/actions) — 自托管运行器、秘密和上述工作流中使用的GitHub Actions JavaScript SDK的官方参考。', '[GitHub Advanced Security定价](https://github.com/pricing) — 成本比较的价目表价格参考；验证你实际谈判的条款。', '[Qwen3-Coder模型卡](https://huggingface.co/Qwen/Qwen3-Coder-30B) — 推荐审查模型的架构、上下文窗口和许可条款。', '[GitLab CI/CD参考](https://docs.gitlab.com/ee/ci/) — GitLab团队的等效参考；工作流的LLM调用部分相同。'] },
      faq: { id: 'faq', title: '常见问题', faqs: [{ q: '单个GPU服务器能处理50开发者的CI吗？', a: '单个24 GB GPU（RTX 4090）舒适处理15-25开发者；50开发者需要48 GB卡（L40S、A6000 Ada）或从Ollama到vLLM的转换。瓶颈是PR追踪时段的竞争——周一早上、冲刺结束——不是稳态吞吐量。对于100+开发者，计划多GPU或H100级硬件。' }, { q: '本地代码审查影响PR延迟吗？', a: '通常不会——审查延迟在单个24 GB GPU上典型200行diff为10-30秒，PR作者等待时间由其他CI（构建、测试、lint）支配运行远长。例外是非常大的PR（超过约30K令牌diff）可能取60-90秒；在action级截断或分割这些。' }, { q: '模型看到了什么？', a: 'Ollama默认将每个请求体记录到日志或系统日志（systemd基础OS为`journalctl -u ollama`）。每个去审查的PR diff在该日志中。与GPU服务器发送接口上的`tcpdump`结合以证明零外部数据。完整审计表面是一个进程和一个日志文件——与SaaS API代码审查相比审计简单得多。' }, { q: '我能基于本地模型输出阻止PR吗？', a: '是的。Action返回`verdict`字段；如果verdict为`block`，action以非零退出，如果分支保护规则需要传递检查则阻止合并。推荐是第一个月保持`block`禁用（仅建议），测量假阳性率，仅在率低于约5%时升级阻止。' }, { q: '这在GitLab CI中工作吗？', a: '是的——架构相同。将GitHub Action替换为GitLab CI作业，对Ollama端点执行相同的`curl`，通过GitLab API将响应发回合并请求。模型、提示、缓存、安全模型、硬件规划全部相同。Bitbucket Pipelines、Jenkins、Buildkite工作方式相同。' }, { q: '如何在不破坏管道的情况下保持模型最新？', a: '用`ollama show <model> --modelfile`pin模型digest，使生产CI使用精确版本。模型新版本到达时，在staging拉取，运行小的代表性PR diff测试套件，比较结构化输出到生产版本，仅在回归套件通过后升级。像处理其他依赖升级一样处理模型升级。' }, { q: '我能用这个进行代码生成加审查吗？', a: '是的，但负载为同个GPU竞争并有不同的延迟特性。代码审查是异步的容许30秒响应；编辑器中的交互代码生成需要<2秒延迟。推荐模式：对开发者机器上的编辑器自动完成使用较小模型（Qwen3-Coder 7B）并为审查级CI负载预留自托管GPU服务器。' }, { q: 'GPU服务器的安全模型是什么？', a: '像任何内部服务对待：将服务器绑定到私有接口，在前面放认证（mTLS、shared-secret或仅VPN访问），用默认拒绝限制发送，轮转证书。LLM特定的添加是模型权重供应链审计——pin digest、记录源、定期数据包捕获验证零外泄。' }, { q: '多个repo能共享GPU服务器吗？', a: '是的——GPU服务器就是HTTP端点。任何数量的repo可以调用它只要服务器有容量。对于有10+活跃repos的组织，在Ollama前面的反向代理添加按repo速率限制来防止嘈杂repo（大monorepo、频繁强制push）饥饿他人。' }, { q: '我如何在CI中处理假阳性？', a: '三层。首先，提示设计——设置高严重程度阈值、强制结构化输出、标记tentative结果。其次，action级过滤——仅在`severity >= "high"`时块；显示中/低为评论。第三，反馈循环——允许开发者对每条评论反应（👍/👎），周检查👎s，用明确"不报告X"指令更新系统提示以处理最常见的假阳性类别。第一个月调整后预期5-10%比率；低于5%通过持续迭代可实现。' }] },
      relatedReading: { id: 'related-reading', title: '相关阅读', items: ['[用本地LLM替换GitHub Copilot](/zh/power-local-llm/replace-github-copilot-with-local-llm) — 考虑自托管AI工具团队成本替换的更广泛背景。', '[Continue.dev vs Cline vs Aider：2026年最佳本地编码代理](/zh/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 在管道中运行什么vs交互编辑器工作；模型下的harness层。', '[2026年最佳本地编码模型](/zh/power-local-llm/best-local-coding-models-2026) — 等式的模型端：Qwen3-Coder、DeepSeek、Codestral和许可景。', '[系统提示vs用户提示：有什么区别](/zh/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — 审查提示系统的提示工程anchor。', '[llama.cpp vs Ollama vs vLLM](/zh/local-llms/llamacpp-vs-ollama-vs-vllm) — 推论引擎比较；对高并发团队的vLLM超越Ollama升级路径。', '[Power Local LLM Hub](/zh/power-local-llm) — 完整指南库。'] }
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'LLM Local en CI/CD: Revisión de Código Automatizada Sin Cloud',
    seoTitle: 'Revisión de código con LLM local en CI/CD: automatiza tus PR',
    intro:
      'La revisión de código con LLM local autoalojado coloca un modelo Qwen3-Coder detrás de tu pipeline CI/CD para que cada pull request reciba una revisión sin que la base de código salga de tu red. La arquitectura es directa — un servidor GPU dedicado con Ollama, una GitHub Action personalizada que llama a su API HTTP, y un prompt de revisión ajustado para la tasa de falsos positivos — y la economía se inclina a favor del autoalojamiento en algún punto entre 15 y 25 asientos pagados de GitHub. Esta guía recorre la arquitectura, un flujo de trabajo de GitHub Actions funcional, el dimensionamiento de hardware por tamaño de equipo, el modelo de seguridad y las trampas operativas que afectan a los equipos en el segundo mes.',
    metaDescription:
      'Revisión de código con LLM local autoalojado en GitHub Actions: arquitectura, YAML funcional, dimensionamiento de hardware por equipo y modelo de seguridad.',
    twitterDescription:
      'Revisión de código autoalojada en un servidor GPU dentro de tu red. GitHub Actions llama a Ollama, Qwen3-Coder revisa las PR, ningún código sale de tu perímetro. Configuración, dimensionamiento y cruce de costos incluidos.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'NVIDIA L40S 48 GB',
      'NVIDIA A6000 Ada 48 GB',
      'NVIDIA H100 80 GB',
    ],
    audience:
      'Líderes de equipo de ingeniería, ingenieros de plataforma y profesionales de DevOps que ejecutan GitHub Actions o GitLab CI y quieren agregar revisión de código impulsada por LLM sin enviar el código fuente a una API de terceros. Se asume familiaridad con Docker, Linux y runners autoalojados.',
    readTime: '15 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'revisión de código LLM local CI/CD',
    targetKeywords: [
      'revisión de código llm local',
      'revisión de código llm autoalojado',
      'github actions llm local',
      'ollama github actions',
      'revisión de código ia privada',
      'revisión de código sin openai',
    ],
    leadAnswerBlock:
      '**La revisión de código con LLM local autoalojado usa tres piezas: un servidor GPU dedicado con Ollama (o vLLM), una GitHub Action personalizada que envía el diff al endpoint HTTP del servidor, y un prompt de revisión que devuelve un veredicto estructurado (aprobar / comentar / bloquear). Una RTX 4090 (24 GB) con Qwen3-Coder 30B atiende cómodamente a un equipo de 15–25 desarrolladores; una tarjeta de 48 GB (L40S o A6000 Ada) escala a alrededor de 50 desarrolladores; se necesita hardware de clase H100 para más de 100. La economía se inclina a favor del autoalojamiento en algún punto entre 15 y 25 asientos pagados de GitHub Advanced Security a $19/dev/mes — el cruce exacto depende del costo de compra del hardware frente a la capacidad existente. La ventaja de seguridad es real: el código fuente nunca sale de tu red, la superficie de auditoría es un proceso y un archivo de log, y puedes demostrar cero egreso con una captura de paquetes.**',
    quickAnswerTop: {
      es: {
        question: '¿Cómo ejecuto un LLM local como revisor de código en CI/CD?',
        answer:
          'Levanta un servidor GPU con Ollama (o vLLM, llama.cpp) con un modelo ajustado para codificación — Qwen3-Coder 30B es el estándar de mayo de 2026. Agrega un runner de GitHub Actions autoalojado en la misma red, o expone el endpoint HTTP del servidor a tus runners existentes a través de una red privada. Escribe una pequeña action personalizada que obtiene el diff de la PR, lo envía con un prompt de revisión al endpoint del LLM, analiza la respuesta estructurada (aprobar / comentar / bloquear) y publica comentarios en línea de vuelta en la PR. El modelo nunca sale de tu perímetro; la action se comporta como cualquier otra verificación. En cuanto al hardware, una RTX 4090 con Qwen3-Coder 30B maneja 15–25 desarrolladores; una tarjeta de 48 GB escala a 50; más de 100 necesitas hardware de clase H100 o múltiples GPUs.',
        bullets: [
          'Arquitectura: servidor GPU con Ollama → runner autoalojado (o HTTP desde runners en la nube) → GitHub Action personalizada → comentarios en la PR.',
          'Stack por defecto: Ollama + Qwen3-Coder 30B (Apache 2.0) + action personalizada en JavaScript o composite.',
          'Hardware: 1× RTX 4090 (24 GB) para 15–25 desarrolladores; 1× L40S/A6000 Ada (48 GB) para ~50; 1× H100 o multi-GPU para 100+.',
          'Economía: el cruce frente a GitHub Advanced Security a $19/dev/mes está en aproximadamente 15–25 asientos pagados, dependiendo del costo del hardware.',
          'Seguridad: el código fuente nunca sale de tu red; el egreso puede probarse con una captura de paquetes; la superficie de auditoría es un proceso y un log.',
          'GitLab CI funciona igual — runner en lugar de action, pero la llamada al LLM es idéntica.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Comparación de arquitecturas', anchor: '#architecture-comparison' },
      { label: 'El stack recomendado', anchor: '#recommended-stack' },
      { label: 'Flujo de trabajo de GitHub Actions', anchor: '#workflow' },
      { label: 'Dimensionamiento de hardware por tamaño de equipo', anchor: '#hardware-sizing' },
      { label: 'Compartir GPU entre builds', anchor: '#gpu-sharing' },
      { label: 'Comparación de costos frente a GitHub Advanced Security', anchor: '#cost-comparison' },
      { label: 'Modelo de seguridad y postura de auditoría', anchor: '#security-model' },
      { label: 'Diseño de prompt para revisión de código', anchor: '#prompt-design' },
      { label: 'Gestión de falsos positivos', anchor: '#false-positives' },
      { label: 'Trampas operativas en el segundo mes', anchor: '#operational-pitfalls' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**La arquitectura son tres piezas:** servidor GPU con Ollama (o vLLM) → runner de CI que puede alcanzarlo por red → action personalizada que envía el diff de la PR y analiza un veredicto estructurado. Misma forma en GitHub Actions, GitLab CI, Buildkite y Jenkins.',
          '**Stack por defecto en mayo de 2026:** Ollama + Qwen3-Coder 30B (Apache 2.0) + una GitHub Action personalizada liviana. Infraestructura total: una caja GPU, un runner.',
          '**Dimensionamiento de hardware:** RTX 4090 (24 GB, ~$2.000) maneja 15–25 desarrolladores; L40S o A6000 Ada (48 GB, ~$7.000–8.000) escala a 50; H100 (80 GB, $25.000+) o multi-GPU para 100+.',
          '**La economía se inclina a favor del autoalojamiento** en aproximadamente 15–25 asientos pagados de GitHub Advanced Security ($19/dev/mes) — una build con RTX 4090 se amortiza en 5–10 meses con ese tamaño de equipo.',
          '**La ventaja de seguridad es real, no solo marketing.** El código fuente nunca sale de tu red; el egreso saliente puede demostrarse cero con `tcpdump`; toda la superficie de auditoría es un proceso de Ollama y un archivo de log.',
          '**Los falsos positivos son el impuesto operativo.** Planifica un ciclo de ajuste en el primer mes: iteración del prompt, umbrales de severidad y un flujo de ingesta de retroalimentación de revisores para que el prompt mejore con el tiempo.',
          '**La latencia es aceptable.** Una GPU de 24 GB con Qwen3-Coder 30B revisa un diff típico de 200 líneas en menos de 30 segundos. El tiempo de espera del autor de la PR está dominado por otros trabajos de CI, no por la revisión.',
          '**No reemplaces completamente la revisión humana.** El LLM local es una puerta de triaje inicial — detecta problemas obvios, señala cambios riesgosos y libera a los humanos para los juicios que los LLM todavía cometen errores.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Modelo recomendado:** Qwen3-Coder 30B en Q4_K_M (~17 GB VRAM, Apache 2.0).',
          '**Runtime recomendado:** Ollama por simplicidad de configuración; vLLM si necesitas mayor concurrencia en la misma GPU.',
          '**GPU mínima para equipos serios:** RTX 4090 (24 GB). Las tarjetas más pequeñas obligan a usar el modelo 7B con una calidad de revisión notablemente peor.',
          '**Concurrencia en una sola GPU de 24 GB:** cómodamente 1–3 revisiones simultáneas en Qwen3-Coder 30B; cola de espera a partir de ahí.',
          '**Objetivo de latencia:** menos de 30 segundos para un diff de 200 líneas. Pasado ese punto, el comportamiento del autor de la PR cambia y las revisiones se omiten.',
          '**Postura de auditoría:** el cero egreso saliente en el servidor GPU es demostrable; toda la superficie es `ollama serve` + un único archivo de log.',
          '**Cruce frente a GitHub Advanced Security ($19/dev/mes):** 15–25 asientos pagados cubren una build con RTX 4090 en 5–10 meses.',
          '**Paridad con GitLab CI:** arquitectura idéntica, reemplaza la GitHub Action con un job de CI que llama al mismo endpoint HTTP.',
        ],
      },
      architectureComparison: {
        id: 'architecture-comparison',
        title: 'Comparación de Arquitecturas: Tres Opciones Reales para Revisión de Código en CI',
        content:
          '**Tres arquitecturas cubren efectivamente todas las configuraciones de revisión de PR en mayo de 2026.** El LLM local autoalojado es una de ellas — la elección correcta cuando el código fuente no puede salir de tu red o cuando la economía de asientos favorece la infraestructura fija.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La revisión de código con LLM local autoalojado se amortiza más rápido que GitHub Advanced Security con 15–25 asientos pagados y mantiene el código fuente dentro de tu red — la arquitectura correcta para equipos con presión de privacidad o número de asientos.',
          },
          {
            type: 'plain-terms',
            text: 'Existen tres opciones para la revisión de código con IA en CI. GitHub Advanced Security es la más fácil de activar y la más cara a escala. Una API de LLM en la nube (OpenAI, Anthropic) es barata para empezar y envía cada diff a un tercero. El LLM local autoalojado tiene el mayor costo de configuración y es la única opción que mantiene tu base de código dentro de tu perímetro — y en aproximadamente 15–25 asientos pagados se convierte en la más económica de las tres durante un año.',
          },
        ],
        columns: ['Arquitectura', 'Complejidad de configuración', 'Costo (10 devs)', 'Costo (50 devs)', 'Latencia de PR', 'Ideal para'],
        rows: [
          {
            'Arquitectura': 'GitHub Advanced Security',
            'Complejidad de configuración': 'Baja (un toggle)',
            'Costo (10 devs)': '$190/mes',
            'Costo (50 devs)': '$950/mes',
            'Latencia de PR': 'Sub-minuto (gestionado)',
            'Ideal para': 'Equipos con menos de ~15 asientos pagados sin restricción de privacidad',
          },
          {
            'Arquitectura': 'API de LLM en la nube (OpenAI / Anthropic)',
            'Complejidad de configuración': 'Baja–Media (clave API + action)',
            'Costo (10 devs)': '~$50–200/mes (uso)',
            'Costo (50 devs)': '~$300–1.200/mes (uso)',
            'Latencia de PR': 'Segundos',
            'Ideal para': 'Equipos cómodos con enviar código fuente a una API de terceros',
          },
          {
            'Arquitectura': 'LLM local en GPU dedicada',
            'Complejidad de configuración': 'Media–Alta (servidor GPU + runner + action)',
            'Costo (10 devs)': '~$2.000 hardware (único)',
            'Costo (50 devs)': '~$7.000+ hardware (único)',
            'Latencia de PR': '10–30 segundos (GPU única)',
            'Ideal para': 'Equipos con requisitos de privacidad, 15+ asientos pagados, contextos de cumplimiento en la UE',
          },
          {
            'Arquitectura': 'LLM local en infraestructura compartida (GPU existente)',
            'Complejidad de configuración': 'Media (solo runner + action)',
            'Costo (10 devs)': '$0 marginal (capacidad existente)',
            'Costo (50 devs)': '$0 marginal (capacidad existente)',
            'Latencia de PR': 'Variable (depende de la contención)',
            'Ideal para': 'Equipos que ya operan infraestructura GPU para ML o análisis',
          },
        ],
      },
      recommendedStack: {
        id: 'recommended-stack',
        title: 'El Stack Recomendado: Ollama + Qwen3-Coder + una GitHub Action Liviana',
        content:
          '**El stack de nivel productivo más simple son tres componentes.** Cada uno es open source, gratuito y bien documentado; la superficie de integración entre ellos es HTTP.',
        items: [
          '**Servidor GPU** con **Ollama** (o vLLM para mayor concurrencia). Ollama expone una API HTTP compatible con OpenAI en `localhost:11434` por defecto; vincúlala a una interfaz privada o un proxy inverso con autenticación antes de exponerla a los runners.',
          '**Modelo ajustado para codificación:** **Qwen3-Coder 30B** en Q4_K_M es el estándar de mayo de 2026 — la dirección open-weight más potente para codificación, contexto de 256K, licencia Apache 2.0, cabe en una GPU de 24 GB. Para GPUs de 8–16 GB, usa Qwen3-Coder 7B teniendo en cuenta que la calidad de revisión cae notablemente.',
          '**Integración CI:** un runner de GitHub Actions autoalojado en la misma red que el servidor GPU, o tus runners hospedados por GitHub existentes alcanzando el servidor GPU por una red privada (Tailscale, WireGuard o peering de VPC).',
          '**GitHub Action personalizada** (JavaScript o composite) que obtiene el diff de la PR por la API de GitHub, lo envía al endpoint de Ollama con un prompt de revisión, analiza la respuesta estructurada y publica comentarios en línea de vuelta en la PR.',
          '**Opcional:** un pequeño caché de Redis o SQLite con clave en hash de archivo + hash de diff para evitar re-revisiones de archivos sin cambios en ejecuciones de CI posteriores.',
          '**Paridad con GitLab:** la misma arquitectura, con un job de GitLab CI que reemplaza la GitHub Action. La llamada al LLM es idéntica.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Vincula `ollama serve` a una interfaz de red privada (o `127.0.0.1` si el runner está en el mismo host) y coloca autenticación delante antes de cualquier exposición entre hosts. El `OLLAMA_HOST=0.0.0.0:11434` por defecto sin autenticación está bien para un experimento en una sola máquina pero es un fallo de seguridad en cualquier otro contexto.',
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: 'Un Flujo de Trabajo de GitHub Actions Funcional',
        content:
          '**El flujo de trabajo mínimo viable tiene unas 50 líneas de YAML.** Esta plantilla se ejecuta al abrir y sincronizar una PR, obtiene el diff, llama a Ollama y publica un comentario de vuelta. Los despliegues en producción agregan caché, umbrales de severidad y la opción de bloquear la PR ante un veredicto de "bloquear".',
        codeLanguage: 'yaml',
        codeBlock: `# .github/workflows/local-llm-review.yml
name: Local LLM Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: self-hosted   # o cualquier runner que pueda alcanzar OLLAMA_HOST
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Generate diff
        id: diff
        run: |
          git diff origin/\${{ github.base_ref }}...HEAD > /tmp/pr.diff
          echo "size=$(wc -c < /tmp/pr.diff)" >> "$GITHUB_OUTPUT"

      - name: Call local LLM for review
        id: review
        env:
          OLLAMA_HOST: \${{ secrets.OLLAMA_HOST }}   # ej. http://gpu-server.internal:11434
        run: |
          DIFF=$(jq -Rs . < /tmp/pr.diff)
          curl -sS "$OLLAMA_HOST/api/chat" \\
            -H 'Content-Type: application/json' \\
            -d "{
              \\"model\\": \\"qwen3-coder:30b\\",
              \\"stream\\": false,
              \\"format\\": \\"json\\",
              \\"messages\\": [
                {\\"role\\": \\"system\\", \\"content\\": \\"You are a senior code reviewer. Return JSON: {verdict: 'approve'|'comment'|'block', summary: string, comments: [{path, line, severity, message}]}\\"},
                {\\"role\\": \\"user\\", \\"content\\": $DIFF}
              ]
            }" > /tmp/review.json
          echo "verdict=$(jq -r '.message.content | fromjson | .verdict' < /tmp/review.json)" >> "$GITHUB_OUTPUT"

      - name: Post review comment
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const review = JSON.parse(JSON.parse(fs.readFileSync('/tmp/review.json')).message.content);
            const body = \`### Local LLM Review: \\\`\${review.verdict}\\\`\\n\\n\${review.summary}\`;
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body
            });

      - name: Block on critical verdict
        if: steps.review.outputs.verdict == 'block'
        run: exit 1
`,
        items: [
          'El runner debe poder alcanzar `OLLAMA_HOST` por red — autoalojado en el mismo VPC, o vía Tailscale / WireGuard si el servidor GPU está en otro lugar.',
          'El prompt de sistema impone una respuesta JSON estructurada para que la action pueda ramificar limpiamente según el veredicto. Sin `format: "json"` y un esquema estricto en el prompt, gastarás tiempo operativo analizando salida de formato libre.',
          'El checkout con `fetch-depth: 0` es necesario para calcular un diff real contra la rama base — los checkouts superficiales producen diffs malformados.',
          'Para repositorios con más de ~50K líneas de código modificado por PR, trunca o divide el diff antes de enviarlo. El contexto de 256K en Qwen3-Coder 30B es generoso, pero el contexto de trabajo práctico es más cercano a 64K–128K (ver [Mejores modelos de codificación locales en 2026](/es/power-local-llm/best-local-coding-models-2026)).',
          'Para profundidad en diseño de prompt — prompts de sistema vs usuario, ejemplos, salidas estructuradas — ver [Prompt de Sistema vs Prompt de Usuario: ¿Cuál es la Diferencia?](/es/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este flujo de trabajo es intencionalmente mínimo. Los despliegues en producción agregan: un caché con clave en hash de archivo + diff para omitir re-revisiones de archivos sin cambios, umbrales de severidad (bloquear solo en `severity >= "high"`), publicación de comentarios en línea (en lugar de un único comentario de resumen), variantes de prompt por lenguaje e ingesta de retroalimentación de revisores para mejorar el prompt con el tiempo.',
          },
        ],
      },
      hardwareSizing: {
        id: 'hardware-sizing',
        title: 'Dimensionamiento de Hardware por Tamaño de Equipo',
        content:
          '**Una RTX 4090 (24 GB) maneja cómodamente un equipo de 15–25 desarrolladores.** El cuello de botella en una sola GPU no es el rendimiento por revisión — es la concurrencia en momentos de descarga de PR (lunes por la mañana, fin de sprint). Las reglas de dimensionamiento siguientes asumen Qwen3-Coder 30B en Q4_K_M y un diff de PR típico de 50–500 líneas.',
        columns: ['Tamaño del equipo', 'GPU', 'VRAM', 'Revisiones simultáneas', 'Precio aproximado (mayo 2026)'],
        rows: [
          { 'Tamaño del equipo': '~5 desarrolladores', 'GPU': 'RTX 4070 / 4070 Ti', 'VRAM': '12–16 GB', 'Revisiones simultáneas': '1 (solo Qwen3-Coder 7B)', 'Precio aproximado (mayo 2026)': '$600–900' },
          { 'Tamaño del equipo': '15–25 desarrolladores', 'GPU': 'RTX 4090 / 5090', 'VRAM': '24–32 GB', 'Revisiones simultáneas': '1–3 (Qwen3-Coder 30B)', 'Precio aproximado (mayo 2026)': '$2.000–2.500' },
          { 'Tamaño del equipo': '25–50 desarrolladores', 'GPU': 'L40S / A6000 Ada', 'VRAM': '48 GB', 'Revisiones simultáneas': '3–6', 'Precio aproximado (mayo 2026)': '$7.000–8.500' },
          { 'Tamaño del equipo': '50–100 desarrolladores', 'GPU': '2× RTX 4090 o 1× H100', 'VRAM': '48 GB / 80 GB', 'Revisiones simultáneas': '6–10', 'Precio aproximado (mayo 2026)': '$5.000 (2× 4090) o $25.000+ (H100)' },
          { 'Tamaño del equipo': '100+ desarrolladores', 'GPU': 'Multi-GPU H100 o H200', 'VRAM': '160 GB+', 'Revisiones simultáneas': '10+ con vLLM', 'Precio aproximado (mayo 2026)': '$50.000+' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para equipos que superan el umbral de 50 desarrolladores, cambia de Ollama a vLLM. Ollama prioriza la facilidad de uso; vLLM prioriza el rendimiento en GPUs compartidas. El mismo modelo Qwen3-Coder 30B funciona en ambos — solo cambia el servidor de inferencia.',
          },
        ],
      },
      gpuSharing: {
        id: 'gpu-sharing',
        title: 'Compartir GPU entre Builds y Otras Cargas de Trabajo',
        content:
          '**Una GPU dedicada para revisión de código es la arquitectura más simple pero no la única.** Los equipos que ya operan infraestructura GPU para inferencia ML o entrenamiento pueden compartir — con la compensación de que la contención provoca picos en la latencia de revisión.',
        items: [
          '**GPU dedicada solo para revisión:** el modelo más simple. La latencia es predecible; la planificación de capacidad es directa; los modos de fallo están aislados. La recomendación para cualquier equipo que no opera ya infraestructura GPU.',
          '**GPU compartida con inferencia ML:** viable si la carga de trabajo de inferencia tiene una envolvente estable (por ejemplo, un pequeño servicio de embeddings que cabe en 4–6 GB). El modelo de revisión ocupa el resto del VRAM. Las colisiones de programación son raras con este patrón.',
          '**GPU compartida con entrenamiento ML:** fuertemente desaconsejado. Los jobs de entrenamiento disparan el uso de VRAM al límite y privan al modelo de revisión, causando latencias de revisión de 30–120 segundos que erosionan la confianza de los desarrolladores en el sistema.',
          '**vLLM con atención paginada:** diseñado específicamente para servir LLM con alta concurrencia. La misma RTX 4090 que maneja 1–3 revisiones simultáneas bajo Ollama puede manejar 4–8 bajo vLLM, a costa de una configuración más compleja. Vale la pena a partir de 25 desarrolladores.',
          '**Multi-tenant en H100:** a escala de 100+ desarrolladores, particiona un H100 en rebanadas MIG o ejecuta vLLM con cuotas por tenant. Esto es territorio de ingeniería de plataforma; no lo improvises.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Comparación de Costos frente a GitHub Advanced Security',
        content:
          '**La economía se inclina a favor del autoalojamiento en aproximadamente 15–25 asientos pagados.** Esta es una comparación de amortización de un año; horizontes más largos hacen el autoalojamiento más favorable.',
        items: [
          '**GitHub Advanced Security (Code Security):** $19/desarrollador/mes al precio de lista (verifica en la página de precios de GitHub; hay descuentos por volumen disponibles para clientes enterprise).',
          '**API de LLM en la nube (ej. OpenAI, Anthropic):** aproximadamente $50–200/mes por desarrollador activo con el volumen típico de PR; varía enormemente según el tamaño de la base de código y el diseño del prompt de revisión.',
          '**LLM local autoalojado, build con RTX 4090:** aproximadamente $2.500 en hardware único (GPU + un chasis de servidor básico). Energía: ~50W en reposo, ~350W bajo carga — calcula unos $20–30/mes en electricidad con uso típico. Sin tarifas por asiento.',
          '**Cruce con 10 devs:** GHAS $190/mes vs autoalojado $25/mes de operación + $2.500 capex. El capex se amortiza en ~14 meses.',
          '**Cruce con 25 devs:** GHAS $475/mes vs autoalojado $25/mes de operación + $2.500 capex. El capex se amortiza en ~5–6 meses.',
          '**Cruce con 50 devs:** GHAS $950/mes vs autoalojado $40/mes de operación + $7.500 capex (GPU de 48 GB). El capex se amortiza en ~8 meses.',
          '**El número de capex es lo que domina el cálculo.** Si compras una GPU específicamente para esto, la amortización es real. Si tienes capacidad GPU existente, el costo marginal está más cerca de cero y el autoalojamiento gana de inmediato.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estos números son comparaciones de precios de lista. Los precios negociados de GHAS para grandes empresas desplazan el cruce; la capacidad GPU existente lo elimina. Rehaz el cálculo con tus costos reales antes de comprometerte con una compra de hardware.',
          },
        ],
      },
      securityModel: {
        id: 'security-model',
        title: 'Modelo de Seguridad y Postura de Auditoría',
        content:
          '**La afirmación de seguridad principal — "el código fuente nunca sale de tu red" — es verdadera, demostrable y el argumento más sólido para esta arquitectura.** La superficie de auditoría es lo suficientemente pequeña como para defenderla en una revisión de adquisición.',
        items: [
          '**El modelo solo ve el diff que tu action le envía.** Sin telemetría, sin llamadas de red ocultas. Confirmable con `tcpdump` o `nft monitor` en la interfaz saliente del servidor GPU — bajo operación en estado estable, deberías ver cero paquetes salientes hacia hosts no internos.',
          '**La superficie de auditoría completa es un proceso y un archivo de log.** `ollama serve` es todo el stack del LLM. Sus logs (cuerpos de solicitudes, latencia, eventos de carga del modelo) son el registro de auditoría. Sin panel de SaaS que consultar, sin política de retención de terceros que leer.',
          '**El aislamiento de red es directo.** Vincula `ollama serve` a una interfaz privada; coloca un proxy inverso con mTLS o autenticación de secreto compartido delante; niega el tráfico saliente en el namespace de red del servidor GPU excepto hacia la subred de tu runner de CI. Patrón estándar de zero-trust, sin magia específica de LLM.',
          '**Los pesos del modelo son artefactos estáticos firmados por el proveedor.** Descárgalos una vez con Ollama, fija el digest y el modelo no puede cambiar sin una acción del operador. Esto es una historia de cadena de suministro más sólida que una API de SaaS donde el modelo upstream puede intercambiarse silenciosamente.',
          '**Postura de cumplimiento:** el cero egreso de datos es sencillo de documentar para SOC 2, ISO 27001, GDPR y la clasificación de riesgo limitado del EU AI Act. La parte más difícil del cumplimiento del autoalojamiento es generalmente documentar el propio servidor de inferencia; Ollama y vLLM están ambos bien documentados.',
          '**El modelo sigue viendo tu código.** Autoalojado no significa privado del modelo — significa privado de terceros. Los escenarios de amenaza interna (un ingeniero con acceso al servidor GPU lee logs que contienen diffs de PR anteriores) siguen en alcance; rota los logs y limita el acceso en consecuencia.',
        ],
      },
      promptDesign: {
        id: 'prompt-design',
        title: 'Diseño de Prompt para Revisión de Código',
        content:
          '**El único determinante más importante de la tasa de falsos positivos es el prompt de sistema.** Un prompt vago "revisa este código" produce comentarios de revisión vagos; un prompt específico con umbrales de severidad y salida estructurada produce retroalimentación accionable.',
        items: [
          '**La salida estructurada no es negociable.** Fuerza JSON con un esquema estricto (`verdict`, `summary`, `comments[]`). Sin él, la action gasta el 30% de su código analizando salida de formato libre y los modos de fallo son sutiles.',
          'Para la guía completa sobre el cumplimiento de salida estructurada en modelos, ver [salida estructurada y modo JSON](/es/prompt-engineering/structured-output-and-json-mode).',
          '**Los umbrales de severidad pertenecen al prompt, no a la action.** Dile al modelo qué cuenta como `crítico`, `alto`, `medio`, `bajo`; dile que filtre los hallazgos de baja severidad salvo que se pidan explícitamente. Esto es mucho más confiable que el filtrado post-hoc en un campo de severidad de formato libre.',
          '**Ancla el prompt con ejemplos.** Un prompt de 1–2 disparos con un diff real y un JSON de revisión ideal supera masivamente al zero-shot para el mismo modelo y el mismo tamaño de diff.',
          '**Distingue la intención de "revisar" de "comentar".** Un comentario de revisor ("considera extraer esto a un helper") y un bloqueador ("esto introduce una inyección SQL") necesitan acciones diferentes en CI. Etiquétalos en la salida estructurada y haz que la action solo bloquee en los bloqueadores.',
          '**Las variantes de prompt por lenguaje ayudan a partir de cierto tamaño.** Una base de código polígota se beneficia de un prompt que referencia los modismos del lenguaje relevante (Pythonic vs Rust idiomático). Esto es opcional por debajo de ~25 desarrolladores; valioso por encima.',
          'Para fundamentos más profundos de ingeniería de prompt — prompts de sistema vs usuario, salidas estructuradas, few-shot prompting — ver [Prompt de Sistema vs Prompt de Usuario: ¿Cuál es la Diferencia?](/es/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference).',
        ],
      },
      falsePositives: {
        id: 'false-positives',
        title: 'Gestión de Falsos Positivos sin Erosionar la Confianza de los Desarrolladores',
        content:
          '**Los falsos positivos son el impuesto operativo de la revisión de código con LLM.** Una tasa del 5% es aceptable; el 20% es intolerable; la diferencia es principalmente iteración del prompt y un ciclo de retroalimentación, no el modelo.',
        items: [
          '**Establece un umbral de "bloqueo" alto.** Un veredicto de `bloquear` que se dispara ante cualquier problema menor de lint entrena a los desarrolladores a saltarse la verificación. Reserva `bloquear` para problemas de seguridad, pruebas fallidas y fallos de corrección evidentes.',
          '**Haz que los comentarios no bloqueantes sean baratos.** Los comentarios en línea sobre los que el modelo no está seguro deben etiquetarse ("tentativo" / "considera") para que los autores puedan descartarlos rápidamente sin ceremonia.',
          '**Construye un ciclo de retroalimentación en el primer mes.** Agrega una reacción (👍 / 👎) a cada comentario de revisión. Periódicamente (semanalmente funciona) revisa los 👎 y actualiza el prompt de sistema con instrucciones explícitas de "no marcar X" para las categorías de falsos positivos más comunes.',
          '**Limita el volumen de comentarios por PR.** Una sola PR no debería recibir más de 5–10 comentarios del LLM; pasado eso, la relación señal-ruido colapsa. Limita la action a nivel del prompt ("devuelve como máximo N comentarios").',
          '**Rastrea la correlación veredicto-a-merge semanalmente.** Si el 80% de los veredictos de `bloquear` se fusionan de todas formas, tu umbral es demasiado agresivo. Si el 0% de los veredictos de `comentar` reciben alguna acción humana, tu prompt está generando ruido.',
        ],
      },
      operationalPitfalls: {
        id: 'operational-pitfalls',
        title: 'Trampas Operativas que Aparecen en el Segundo Mes',
        content:
          '**La configuración recibe atención; las operaciones se ignoran.** Los fallos siguientes son los que llevan a los equipos a abandonar el proyecto tras la luna de miel inicial.',
        items: [
          '**Las actualizaciones del modelo rompen los prompts.** Una nueva versión de Qwen3-Coder cambia sutilmente el formato de salida; el análisis de JSON estructurado falla en CI; las revisiones dejan de publicarse. Fija el digest del modelo con `ollama show <model> --modelfile`; actualiza en una rama de staging antes de promocionar.',
          '**Fragmentación de memoria de GPU bajo tiempo de actividad prolongado.** Un servidor GPU que corre 24/7 puede fragmentar el VRAM y rechazar nuevas asignaciones tras semanas de operación. Reinicia `ollama serve` semanalmente mediante un cron job; es barato y evita completamente este modo de fallo.',
          '**Contención del runner de CI.** Un runner autoalojado que aloja tanto el servidor LLM como otros jobs de CI verá dispararse la latencia de revisión bajo carga de build. Separa el runner y el servidor GPU cuando el tamaño del equipo supere ~25 desarrolladores.',
          '**Crecimiento del tamaño del diff.** Los tamaños de PR van creciendo; eventualmente una PR supera el contexto de trabajo práctico del modelo y las revisiones se degradan silenciosamente. Agrega una guarda en la action que divide o trunca los diffs por encima de ~30K tokens y advierte al autor.',
          '**Energía y refrigeración.** Una RTX 4090 con carga continua consume ~350W bajo inferencia y genera una cantidad significativa de calor. Una sala de servidores del tamaño de un armario sin refrigeración activa limitará la GPU; la limitación cuesta latencia y los desarrolladores lo notan.',
          '**Rotación de logs olvidada.** Ollama registra cada cuerpo de solicitud por defecto. Después de tres meses de revisiones de PR, el archivo de log es grande y contiene diffs de PR históricas en texto plano. Rota los logs semanalmente; archiva o elimina según tu política de retención de datos.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores Comunes al Configurar la Revisión de Código con LLM Local',
        items: [
          '**Error 1: empezar con un modelo 7B en una GPU de 16 GB.** Las revisiones con Qwen3-Coder 7B son notablemente peores que con el 30B; los desarrolladores pierden confianza rápidamente y el proyecto se abandona. Si no puedes alojar el 30B, mejora la GPU o usa una API en la nube los primeros seis meses mientras aseguras presupuesto.',
          '**Error 2: bloquear PRs por veredictos de `bloquear` desde el primer día.** El primer mes es calibración; trata toda la salida como consultiva hasta que hayas medido la tasa de falsos positivos. Promueve a bloqueante solo cuando la tasa esté por debajo del ~5%.',
          '**Error 3: exponer `ollama serve` en `0.0.0.0:11434` sin autenticación.** Esto es el equivalente en la era de los LLM a dejar Redis vinculado a una interfaz pública. Vincula a una interfaz privada y coloca autenticación delante antes de cualquier exposición entre hosts.',
          '**Error 4: omitir el caché.** Revisar de nuevo archivos sin cambios en cada ejecución de CI desperdicia ~80% del presupuesto de inferencia en una PR típica. Un pequeño caché de hash de archivo + hash de diff (Redis o SQLite) reduce drásticamente la latencia de revisión y la carga en la GPU.',
          '**Error 5: ejecutar jobs de entrenamiento en la misma GPU.** El entrenamiento dispara el uso de VRAM al límite y priva al modelo de revisión de recursos. Usa GPUs separadas o, si debes compartir, ejecuta el entrenamiento en un horario estricto que no se superponga con las horas pico de PR.',
          '**Error 6: construir la GitHub Action sin un ciclo de retroalimentación.** Un sistema de revisión sin reacciones 👍/👎 no puede mejorar. Construye el ciclo en la primera semana; recopila datos; itera el prompt mensualmente.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Documentación de Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — Referencia oficial de la API HTTP para `/api/chat`, `/api/generate`, salida estructurada y gestión de modelos.',
          '[Documentación de vLLM](https://docs.vllm.ai/) — Documentación del servidor de inferencia de alto rendimiento; la ruta de actualización más allá de Ollama para equipos con alta concurrencia.',
          '[Documentación de GitHub Actions](https://docs.github.com/en/actions) — Referencia oficial para runners autoalojados, secretos y el SDK de JavaScript de Actions usado en el flujo de trabajo anterior.',
          '[Precios de GitHub Advanced Security](https://github.com/pricing) — Referencia de precios de lista para la comparación de costos; verifica frente a tus términos negociados reales.',
          '[Ficha del modelo Qwen3-Coder](https://huggingface.co/Qwen/Qwen3-Coder-30B) — Arquitectura, ventana de contexto y términos de licencia para el modelo de revisión recomendado.',
          '[Referencia de GitLab CI/CD](https://docs.gitlab.com/ee/ci/) — Referencia equivalente para equipos de GitLab; la porción de llamada al LLM del flujo de trabajo es idéntica.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puede un servidor GPU único manejar CI para 50 desarrolladores?',
            a: 'Una sola GPU de 24 GB (RTX 4090) maneja cómodamente 15–25 desarrolladores; 50 desarrolladores necesitan una tarjeta de 48 GB (L40S, A6000 Ada) o cambiar de Ollama a vLLM en el mismo hardware. El cuello de botella es la concurrencia en momentos de descarga de PR — lunes por la mañana, fin de sprint — no el rendimiento en estado estable. Para 100+ desarrolladores, planifica multi-GPU o hardware de clase H100.',
          },
          {
            q: '¿La revisión de código local afecta la latencia de la PR?',
            a: 'Típicamente no — la latencia de revisión es de 10–30 segundos en una sola GPU de 24 GB para un diff típico de 200 líneas, y el tiempo de espera del autor de la PR está dominado por otros jobs de CI (build, test, lint) que tardan mucho más. La excepción son las PR muy grandes (por encima de ~30K tokens de diff) donde la revisión puede tardar 60–90 segundos; trunca o divide esas en el nivel de la action.',
          },
          {
            q: '¿Cómo audito lo que ve el modelo?',
            a: 'Ollama registra cada cuerpo de solicitud por defecto en su archivo de log (la ubicación varía según el OS; verifica `journalctl -u ollama` en systemd o el directorio de logs de Ollama). Cada diff de PR que va a revisión está en ese log. Combinado con `tcpdump` en la interfaz saliente del servidor GPU para demostrar cero egreso de datos. La superficie de auditoría completa es un proceso y un archivo de log — mucho más simple de auditar que una API de revisión de código de SaaS.',
          },
          {
            q: '¿Puedo bloquear PRs basándome en la salida del modelo local?',
            a: 'Sí. La action devuelve un campo `verdict`; si el veredicto es `bloquear`, la GitHub Action sale con código no-cero, lo que hace fallar la verificación, lo que bloquea el merge si la regla de protección de rama requiere que la verificación pase. La recomendación es comenzar con `bloquear` desactivado (solo consultivo) durante el primer mes, medir la tasa de falsos positivos y promover a bloqueante cuando la tasa esté por debajo del ~5%.',
          },
          {
            q: '¿Funciona con GitLab CI?',
            a: 'Sí — arquitectura idéntica. Reemplaza la GitHub Action con un job de GitLab CI que ejecuta el mismo `curl` al endpoint de Ollama y publica la respuesta de vuelta en la merge request vía la API de GitLab. El modelo, el prompt, el caché, el modelo de seguridad y el dimensionamiento de hardware son todos iguales. Bitbucket Pipelines, Jenkins y Buildkite funcionan igual.',
          },
          {
            q: '¿Cómo mantengo el modelo actualizado sin romper los pipelines?',
            a: 'Fija el digest del modelo con `ollama show <model> --modelfile` para que el CI de producción use una versión exacta. Cuando llegue una nueva versión del modelo, descárgala en un servidor de staging, ejecuta un pequeño conjunto de diffs de PR representativas, compara la salida estructurada con la versión de producción y promueve solo después de que el conjunto de pruebas de regresión pase. Trata las actualizaciones del modelo como cualquier otra actualización de dependencia.',
          },
          {
            q: '¿Puedo usar esto para generación de código además de revisión?',
            a: 'Sí, pero las cargas de trabajo compiten por la misma GPU y tienen características de latencia diferentes. La revisión de código es asíncrona y tolera respuestas de 30 segundos; la generación interactiva de código en un editor necesita latencia de menos de 2 segundos. Patrón recomendado: usa un modelo más pequeño (Qwen3-Coder 7B) para autocompletado en el editor en las máquinas de los desarrolladores, y reserva el servidor GPU dedicado para cargas de trabajo de clase revisión en CI.',
          },
          {
            q: '¿Cuál es el modelo de seguridad para el servidor GPU?',
            a: 'Trátalo como cualquier servicio interno: vincula el servidor de inferencia a una interfaz privada, coloca autenticación delante (mTLS, tokens de secreto compartido o acceso solo por VPN), restringe el tráfico saliente con denegación por defecto y rota las credenciales. La adición específica de LLM es auditar la procedencia de los pesos del modelo — fija el digest, documenta la fuente y confirma el cero egreso de datos con capturas de paquetes periódicas.',
          },
          {
            q: '¿Pueden múltiples repos compartir un servidor GPU?',
            a: 'Sí — el servidor GPU es solo un endpoint HTTP. Cualquier número de repos puede llamarlo mientras el servidor tenga capacidad. Para organizaciones con 10+ repos activos, agrega límites de tasa por repo en el proxy inverso delante de Ollama para evitar que un repo ruidoso (monorepo grande, pushes forzados frecuentes) prive a otros.',
          },
          {
            q: '¿Cómo gestiono los falsos positivos en CI?',
            a: 'Tres capas. Primero, diseño del prompt — establece umbrales de severidad altos, fuerza salida estructurada y etiqueta los hallazgos tentativos. Segundo, filtrado a nivel de action — solo `bloquear` en `severity >= "high"`; muestra medio/bajo como comentarios. Tercero, un ciclo de retroalimentación — deja que los desarrolladores reaccionen 👍/👎 a cada comentario, luego revisa semanalmente los 👎 y actualiza el prompt de sistema para suprimir las categorías de falsos positivos más comunes. Espera una tasa del 5–10% tras un mes de ajuste; por debajo del 5% es alcanzable con iteración sostenida.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas Relacionadas',
        items: [
          '[Reemplazar GitHub Copilot con un LLM Local](/es/power-local-llm/replace-github-copilot-with-local-llm) — contexto más amplio de reemplazo de costos para equipos que consideran herramientas de IA autoalojadas.',
          '[Continue.dev vs Cline vs Aider: Mejor Agente de Codificación Local en 2026](/es/power-local-llm/continue-dev-vs-cline-vs-aider-local) — qué funciona en pipelines vs trabajo interactivo en el editor; la capa de harness bajo el modelo.',
          '[Mejores Modelos de Codificación Local en 2026](/es/power-local-llm/best-local-coding-models-2026) — el lado del modelo en la ecuación: Qwen3-Coder, DeepSeek, Codestral y el panorama de licencias.',
          '[Prompt de Sistema vs Prompt de Usuario: ¿Cuál es la Diferencia?](/es/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — fundamentos de ingeniería de prompt para el prompt de sistema de revisión.',
          '[llama.cpp vs Ollama vs vLLM](/es/local-llms/llamacpp-vs-ollama-vs-vllm) — comparación de motores de inferencia; vLLM es la ruta de actualización más allá de Ollama para equipos con alta concurrencia.',
          '[Power Local LLM Hub](/es/power-local-llm) — biblioteca completa de guías.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM Local en CI/CD: Revisión de Código Automatizada Sin Cloud',
      description: 'Revisión de código con LLM local autoalojado en GitHub Actions: arquitectura, YAML de flujo de trabajo funcional, dimensionamiento de hardware por tamaño de equipo, modelo de seguridad y punto de equilibrio económico frente a GitHub Advanced Security.',
      url: 'https://www.promptquorum.com/es/power-local-llm/local-llm-code-review-ci-cd',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
},

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'LLM Local no seu CI/CD: Revisão de Código Automatizada Sem Cloud',
    seoTitle: 'Revisão de código com LLM local em CI/CD 2026: automatize PRs',
    intro:
      'A revisão de código com LLM local autohospedado coloca um modelo Qwen3-Coder atrás do seu pipeline de CI/CD para que cada pull request receba uma passagem de revisão sem que a base de código saia da sua rede. A arquitetura é direta — um servidor GPU dedicado rodando o Ollama, uma GitHub Action personalizada chamando sua API HTTP e um prompt de revisão ajustado para a taxa de falsos positivos — e a economia se inclina a favor da autohospedagem em algum ponto entre 15 e 25 assentos pagos do GitHub. Este guia percorre a arquitetura, um fluxo de trabalho funcional do GitHub Actions, o dimensionamento de hardware por tamanho de equipe, o modelo de segurança e as armadilhas operacionais que pegam as equipes no segundo mês.',
    metaDescription:
      'Revisão de código com LLM local autohospedado no GitHub Actions: arquitetura, YAML de fluxo de trabalho funcional, dimensionamento de hardware por tamanho de equipe, modelo de segurança e o ponto de virada econômico frente ao GitHub Advanced Security.',
    twitterDescription:
      'Revisão de código autohospedada em um servidor GPU na sua rede. O GitHub Actions chama o Ollama, o Qwen3-Coder revisa as PRs, nenhuma base de código sai do seu perímetro. Configuração, dimensionamento e o cruzamento de custos por dentro.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'NVIDIA L40S 48 GB',
      'NVIDIA A6000 Ada 48 GB',
      'NVIDIA H100 80 GB',
    ],
    audience:
      'Líderes de equipe de engenharia, engenheiros de plataforma e profissionais de DevOps que rodam GitHub Actions ou GitLab CI e querem adicionar revisão de código baseada em LLM sem enviar o código-fonte para uma API de terceiros. Pressupõe familiaridade com Docker, Linux e runners autohospedados.',
    readTime: '15 min de leitura',
    educationalLevel: 'Advanced',
    primaryTerm: 'revisão de código LLM local CI/CD',
    targetKeywords: [
      'revisão de código llm local',
      'revisão de código llm autohospedado',
      'github actions llm local',
      'ollama github actions',
      'revisão de código ia privada',
      'revisão de código sem openai',
    ],
    leadAnswerBlock:
      '**A revisão de código com LLM local autohospedado usa três peças: um servidor GPU dedicado rodando o Ollama (ou vLLM), uma GitHub Action personalizada que envia o diff via POST para o endpoint HTTP do servidor e um prompt de revisão que retorna um veredito estruturado (aprovar / comentar / bloquear). Uma RTX 4090 (24 GB) rodando o Qwen3-Coder 30B atende confortavelmente uma equipe de 15–25 desenvolvedores; uma placa de 48 GB (L40S ou A6000 Ada) estende para cerca de 50 desenvolvedores; hardware de classe H100 é necessário acima de 100. A economia se inclina a favor da autohospedagem em algum ponto entre 15 e 25 assentos pagos do GitHub Advanced Security a $19/dev/mês — o cruzamento exato depende da compra de hardware frente à capacidade existente. A vantagem de segurança é real: o código-fonte nunca sai da sua rede, a superfície de auditoria é um processo e um arquivo de log, e você pode provar zero egresso com uma captura de pacotes.**',
    quickAnswerTop: {
      pt: {
        question: 'Como executo um LLM local como revisor de código no CI/CD?',
        answer:
          'Levante um servidor GPU rodando o Ollama (ou vLLM, llama.cpp) com um modelo ajustado para codificação — o Qwen3-Coder 30B é o padrão de maio de 2026. Adicione um runner do GitHub Actions autohospedado na mesma rede, ou exponha o endpoint HTTP do servidor aos seus runners existentes por uma rede privada. Escreva uma pequena action personalizada que obtém o diff da PR, envia-o via POST com um prompt de revisão ao endpoint do LLM, analisa a resposta estruturada (aprovar / comentar / bloquear) e publica comentários em linha de volta na PR. O modelo nunca sai do seu perímetro; a action se comporta como qualquer outra verificação. Em termos de hardware, uma RTX 4090 com o Qwen3-Coder 30B lida com 15–25 desenvolvedores; uma placa de 48 GB estende para 50; acima de 100 você precisa de hardware de classe H100 ou de várias GPUs.',
        bullets: [
          'Arquitetura: servidor GPU rodando o Ollama → runner autohospedado (ou HTTP a partir de runners na nuvem) → GitHub Action personalizada → comentários na PR.',
          'Stack padrão: Ollama + Qwen3-Coder 30B (Apache 2.0) + action personalizada em JavaScript ou composite.',
          'Hardware: 1× RTX 4090 (24 GB) para 15–25 devs; 1× L40S/A6000 Ada (48 GB) para ~50; 1× H100 ou multi-GPU para 100+.',
          'Economia: o cruzamento frente ao GitHub Advanced Security a $19/dev/mês fica em cerca de 15–25 assentos pagos, dependendo do custo do hardware.',
          'Segurança: o código-fonte nunca sai da sua rede; o egresso pode ser provado com uma captura de pacotes; a superfície de auditoria é um processo e um log.',
          'O GitLab CI funciona da mesma forma — runner em vez de action, mas a chamada ao LLM é idêntica.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Pontos-chave', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Comparação de arquiteturas', anchor: '#architecture-comparison' },
      { label: 'O stack recomendado', anchor: '#recommended-stack' },
      { label: 'Fluxo de trabalho do GitHub Actions', anchor: '#workflow' },
      { label: 'Dimensionamento de hardware por tamanho de equipe', anchor: '#hardware-sizing' },
      { label: 'Compartilhamento de GPU entre builds', anchor: '#gpu-sharing' },
      { label: 'Comparação de custos frente ao GitHub Advanced Security', anchor: '#cost-comparison' },
      { label: 'Modelo de segurança e postura de auditoria', anchor: '#security-model' },
      { label: 'Design de prompt para revisão de código', anchor: '#prompt-design' },
      { label: 'Gestão de falsos positivos', anchor: '#false-positives' },
      { label: 'Armadilhas operacionais no segundo mês', anchor: '#operational-pitfalls' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**A arquitetura são três peças:** servidor GPU rodando o Ollama (ou vLLM) → runner de CI que consegue alcançá-lo pela rede → action personalizada que envia o diff da PR via POST e analisa um veredito estruturado. Mesma forma no GitHub Actions, GitLab CI, Buildkite e Jenkins.',
          '**Stack padrão em maio de 2026:** Ollama + Qwen3-Coder 30B (Apache 2.0) + uma GitHub Action personalizada enxuta. Infraestrutura total: uma caixa GPU, um runner.',
          '**Dimensionamento de hardware:** RTX 4090 (24 GB, ~$2,000) lida com 15–25 desenvolvedores; L40S ou A6000 Ada (48 GB, ~$7–8,000) estende para 50; H100 (80 GB, $25,000+) ou multi-GPU para 100+.',
          '**A economia pende para o território da autohospedagem** em cerca de 15–25 assentos pagos do GitHub Advanced Security ($19/dev/mês) — um build com RTX 4090 se paga em 5–10 meses com esse tamanho de equipe.',
          '**A vantagem de segurança é real, não apenas marketing.** O código-fonte nunca sai da sua rede; o egresso de saída pode ser provado como zero com `tcpdump`; toda a superfície de auditoria é um processo do Ollama e um arquivo de log.',
          '**Os falsos positivos são o imposto operacional.** Planeje um ciclo de ajuste no primeiro mês: iteração do prompt, limiares de severidade e um caminho de ingestão de feedback de revisores para que o prompt melhore com o tempo.',
          '**A latência é aceitável.** Uma GPU de 24 GB rodando o Qwen3-Coder 30B revisa um diff típico de 200 linhas em menos de 30 segundos. O tempo de espera do autor da PR é dominado por outros trabalhos de CI, não pela revisão.',
          '**Não substitua completamente a revisão humana.** O LLM local é um portão de triagem de primeira passagem — ele detecta problemas óbvios, sinaliza mudanças arriscadas e libera os humanos para os julgamentos que os LLMs ainda erram.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Modelo recomendado:** Qwen3-Coder 30B em Q4_K_M (~17 GB VRAM, Apache 2.0).',
          '**Runtime recomendado:** Ollama pela simplicidade de configuração; vLLM se você precisar de maior concorrência na mesma GPU.',
          '**GPU mínima para equipes sérias:** RTX 4090 (24 GB). Placas menores forçam o modelo 7B e uma qualidade de revisão notavelmente pior.',
          '**Concorrência em uma única GPU de 24 GB:** confortavelmente 1–3 revisões simultâneas no Qwen3-Coder 30B; fila de espera a partir daí.',
          '**Meta de latência:** menos de 30 segundos para um diff de 200 linhas. Passado esse ponto, o comportamento do autor da PR muda e as revisões são ignoradas.',
          '**Postura de auditoria:** o zero egresso de saída no servidor GPU é demonstrável; toda a superfície é `ollama serve` + um único arquivo de log.',
          '**Cruzamento frente ao GitHub Advanced Security ($19/dev/mês):** 15–25 assentos pagos cobrem um build com RTX 4090 em 5–10 meses.',
          '**Paridade com GitLab CI:** arquitetura idêntica, substitua a GitHub Action por um job de CI chamando o mesmo endpoint HTTP.',
        ],
      },
      architectureComparison: {
        id: 'architecture-comparison',
        title: 'Comparação de Arquiteturas: Três Opções Reais para Revisão de Código no CI',
        content:
          '**Três arquiteturas cobrem efetivamente todas as configurações de revisão de PR em maio de 2026.** O LLM local autohospedado é uma delas — a escolha certa quando o código-fonte não pode sair da sua rede ou quando a economia de assentos favorece a infraestrutura fixa.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A revisão de código com LLM local autohospedado se paga mais rápido que o GitHub Advanced Security com 15–25 assentos pagos e mantém o código-fonte dentro da sua rede — a arquitetura certa para equipes com pressão de privacidade ou número de assentos.',
          },
          {
            type: 'plain-terms',
            text: 'Existem três opções para a revisão de código com IA no CI. O GitHub Advanced Security é o mais fácil de ativar e o mais caro em escala. Uma API de LLM na nuvem (OpenAI, Anthropic) é barata para começar e envia cada diff para um terceiro. O LLM local autohospedado tem o maior custo de configuração e é a única opção que mantém sua base de código dentro do seu perímetro — e em cerca de 15–25 assentos pagos se torna o mais econômico dos três ao longo de um ano.',
          },
        ],
        columns: ['Arquitetura', 'Complexidade de configuração', 'Custo (10 devs)', 'Custo (50 devs)', 'Latência de PR', 'Ideal para'],
        rows: [
          {
            'Arquitetura': 'GitHub Advanced Security',
            'Complexidade de configuração': 'Baixa (um toggle)',
            'Custo (10 devs)': '$190/mês',
            'Custo (50 devs)': '$950/mês',
            'Latência de PR': 'Sub-minuto (gerenciado)',
            'Ideal para': 'Equipes com menos de ~15 assentos pagos sem restrição de privacidade',
          },
          {
            'Arquitetura': 'API de LLM na nuvem (OpenAI / Anthropic)',
            'Complexidade de configuração': 'Baixa–Média (chave de API + action)',
            'Custo (10 devs)': '~$50–200/mês (uso)',
            'Custo (50 devs)': '~$300–1.200/mês (uso)',
            'Latência de PR': 'Segundos',
            'Ideal para': 'Equipes confortáveis em enviar código-fonte para uma API de terceiros',
          },
          {
            'Arquitetura': 'LLM local em GPU dedicada',
            'Complexidade de configuração': 'Média–Alta (servidor GPU + runner + action)',
            'Custo (10 devs)': '~$2.000 de hardware (único)',
            'Custo (50 devs)': '~$7.000+ de hardware (único)',
            'Latência de PR': '10–30 segundos (GPU única)',
            'Ideal para': 'Equipes com requisitos de privacidade, 15+ assentos pagos, contextos de conformidade na UE',
          },
          {
            'Arquitetura': 'LLM local em infraestrutura compartilhada (GPU existente)',
            'Complexidade de configuração': 'Média (apenas runner + action)',
            'Custo (10 devs)': '$0 marginal (capacidade existente)',
            'Custo (50 devs)': '$0 marginal (capacidade existente)',
            'Latência de PR': 'Variável (depende da contenção)',
            'Ideal para': 'Equipes que já operam infraestrutura GPU para ML ou análise',
          },
        ],
      },
      recommendedStack: {
        id: 'recommended-stack',
        title: 'O Stack Recomendado: Ollama + Qwen3-Coder + uma GitHub Action Enxuta',
        content:
          '**O stack de nível produtivo mais simples são três componentes.** Cada um é de código aberto, gratuito e bem documentado; a superfície de integração entre eles é HTTP.',
        items: [
          '**Servidor GPU** com **Ollama** (ou vLLM para maior concorrência). O Ollama expõe uma API HTTP compatível com OpenAI em `localhost:11434` por padrão; vincule-a a uma interface privada ou a um proxy reverso com autenticação antes de expô-la aos runners.',
          '**Modelo ajustado para codificação:** **Qwen3-Coder 30B** em Q4_K_M é o padrão de maio de 2026 — a direção open-weight mais potente para codificação, contexto de 256K, licença Apache 2.0, cabe em uma GPU de 24 GB. Para GPUs de 8–16 GB, use o Qwen3-Coder 7B tendo em conta que a qualidade de revisão cai notavelmente.',
          '**Integração de CI:** um runner do GitHub Actions autohospedado na mesma rede que o servidor GPU, ou seus runners hospedados pelo GitHub existentes alcançando o servidor GPU por uma rede privada (Tailscale, WireGuard ou peering de VPC).',
          '**GitHub Action personalizada** (JavaScript ou composite) que obtém o diff da PR pela API do GitHub, envia-o ao endpoint do Ollama com um prompt de revisão, analisa a resposta estruturada e publica comentários em linha de volta na PR.',
          '**Opcional:** um pequeno cache de Redis ou SQLite com chave em hash de arquivo + hash de diff para evitar revisar novamente arquivos sem alterações em execuções de CI subsequentes.',
          '**Paridade com GitLab:** a mesma arquitetura, com um job do GitLab CI substituindo a GitHub Action. A chamada ao LLM é idêntica.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Vincule o `ollama serve` a uma interface de rede privada (ou `127.0.0.1` se o runner estiver no mesmo host) e coloque autenticação na frente antes de qualquer exposição entre hosts. O `OLLAMA_HOST=0.0.0.0:11434` padrão sem autenticação é aceitável para um experimento em uma única máquina, mas é uma falha de segurança em qualquer outro contexto.',
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: 'Um Fluxo de Trabalho Funcional do GitHub Actions',
        content:
          '**O fluxo de trabalho mínimo viável tem cerca de 50 linhas de YAML.** Este modelo é executado ao abrir e sincronizar uma PR, obtém o diff, chama o Ollama e publica um comentário de volta. As implantações em produção adicionam cache, limiares de severidade e a opção de bloquear a PR diante de um veredito de "bloquear".',
        codeLanguage: 'yaml',
        codeBlock: `# .github/workflows/local-llm-review.yml
name: Local LLM Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: self-hosted   # or any runner that can reach OLLAMA_HOST
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Generate diff
        id: diff
        run: |
          git diff origin/\${{ github.base_ref }}...HEAD > /tmp/pr.diff
          echo "size=$(wc -c < /tmp/pr.diff)" >> "$GITHUB_OUTPUT"

      - name: Call local LLM for review
        id: review
        env:
          OLLAMA_HOST: \${{ secrets.OLLAMA_HOST }}   # e.g. http://gpu-server.internal:11434
        run: |
          DIFF=$(jq -Rs . < /tmp/pr.diff)
          curl -sS "$OLLAMA_HOST/api/chat" \\
            -H 'Content-Type: application/json' \\
            -d "{
              \\"model\\": \\"qwen3-coder:30b\\",
              \\"stream\\": false,
              \\"format\\": \\"json\\",
              \\"messages\\": [
                {\\"role\\": \\"system\\", \\"content\\": \\"You are a senior code reviewer. Return JSON: {verdict: 'approve'|'comment'|'block', summary: string, comments: [{path, line, severity, message}]}\\"},
                {\\"role\\": \\"user\\", \\"content\\": $DIFF}
              ]
            }" > /tmp/review.json
          echo "verdict=$(jq -r '.message.content | fromjson | .verdict' < /tmp/review.json)" >> "$GITHUB_OUTPUT"

      - name: Post review comment
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const review = JSON.parse(JSON.parse(fs.readFileSync('/tmp/review.json')).message.content);
            const body = \`### Local LLM Review: \\\`\${review.verdict}\\\`\\n\\n\${review.summary}\`;
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body
            });

      - name: Block on critical verdict
        if: steps.review.outputs.verdict == 'block'
        run: exit 1
`,
        items: [
          'O runner precisa conseguir alcançar o `OLLAMA_HOST` pela rede — autohospedado no mesmo VPC, ou via Tailscale / WireGuard se o servidor GPU estiver em outro lugar.',
          'O prompt de sistema impõe uma resposta JSON estruturada para que a action possa ramificar de forma limpa conforme o veredito. Sem `format: "json"` e um esquema estrito no prompt, você gastará tempo operacional analisando saída de formato livre.',
          'O checkout com `fetch-depth: 0` é necessário para calcular um diff real contra a branch base — checkouts rasos produzem diffs malformados.',
          'Para repositórios com mais de ~50K linhas de código alterado por PR, trunque ou divida o diff antes de enviá-lo. O contexto de 256K no Qwen3-Coder 30B é generoso, mas o contexto de trabalho prático fica mais próximo de 64K–128K (ver [Melhores modelos de codificação locais em 2026](/pt/power-local-llm/best-local-coding-models-2026)).',
          'Para profundidade em design de prompt — prompts de sistema vs usuário, exemplos, saídas estruturadas — ver [Prompt de Sistema vs Prompt de Usuário: Qual é a Diferença?](/pt/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este fluxo de trabalho é intencionalmente mínimo. As implantações em produção adicionam: um cache com chave em hash de arquivo + diff para pular revisões repetidas de arquivos sem alterações, limiares de severidade (bloquear apenas em `severity >= "high"`), publicação de comentários em linha (em vez de um único comentário de resumo), variantes de prompt por linguagem e ingestão de feedback de revisores para melhorar o prompt com o tempo.',
          },
        ],
      },
      hardwareSizing: {
        id: 'hardware-sizing',
        title: 'Dimensionamento de Hardware por Tamanho de Equipe',
        content:
          '**Uma RTX 4090 (24 GB) lida confortavelmente com uma equipe de 15–25 desenvolvedores.** O gargalo em uma única GPU não é o throughput por revisão — é a concorrência em momentos de descarga de PR (segunda de manhã, fim de sprint). As regras de dimensionamento a seguir pressupõem o Qwen3-Coder 30B em Q4_K_M e um diff de PR típico de 50–500 linhas.',
        columns: ['Tamanho da equipe', 'GPU', 'VRAM', 'Revisões simultâneas', 'Preço aproximado (maio 2026)'],
        rows: [
          { 'Tamanho da equipe': '~5 desenvolvedores', 'GPU': 'RTX 4070 / 4070 Ti', 'VRAM': '12–16 GB', 'Revisões simultâneas': '1 (apenas Qwen3-Coder 7B)', 'Preço aproximado (maio 2026)': '$600–900' },
          { 'Tamanho da equipe': '15–25 desenvolvedores', 'GPU': 'RTX 4090 / 5090', 'VRAM': '24–32 GB', 'Revisões simultâneas': '1–3 (Qwen3-Coder 30B)', 'Preço aproximado (maio 2026)': '$2.000–2.500' },
          { 'Tamanho da equipe': '25–50 desenvolvedores', 'GPU': 'L40S / A6000 Ada', 'VRAM': '48 GB', 'Revisões simultâneas': '3–6', 'Preço aproximado (maio 2026)': '$7.000–8.500' },
          { 'Tamanho da equipe': '50–100 desenvolvedores', 'GPU': '2× RTX 4090 ou 1× H100', 'VRAM': '48 GB / 80 GB', 'Revisões simultâneas': '6–10', 'Preço aproximado (maio 2026)': '$5.000 (2× 4090) ou $25.000+ (H100)' },
          { 'Tamanho da equipe': '100+ desenvolvedores', 'GPU': 'Multi-GPU H100 ou H200', 'VRAM': '160 GB+', 'Revisões simultâneas': '10+ com vLLM', 'Preço aproximado (maio 2026)': '$50.000+' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para equipes que ultrapassam o limiar de 50 desenvolvedores, mude do Ollama para o vLLM. O Ollama prioriza a facilidade de uso; o vLLM prioriza o throughput em GPUs compartilhadas. O mesmo modelo Qwen3-Coder 30B funciona em ambos — apenas o servidor de inferência muda.',
          },
        ],
      },
      gpuSharing: {
        id: 'gpu-sharing',
        title: 'Compartilhar GPU entre Builds e Outras Cargas de Trabalho',
        content:
          '**Uma GPU dedicada para revisão de código é a arquitetura mais simples, mas não a única.** As equipes que já operam infraestrutura GPU para inferência de ML ou treinamento podem compartilhar — com o compromisso de que a contenção provoca picos na latência de revisão.',
        items: [
          '**GPU dedicada apenas para revisão:** o modelo mais simples. A latência é previsível; o planejamento de capacidade é direto; os modos de falha ficam isolados. A recomendação para qualquer equipe que ainda não opere infraestrutura GPU.',
          '**GPU compartilhada com inferência de ML:** viável se a carga de trabalho de inferência tiver um envelope estável (por exemplo, um pequeno serviço de embeddings que cabe em 4–6 GB). O modelo de revisão ocupa o restante da VRAM. As colisões de agendamento são raras com esse padrão.',
          '**GPU compartilhada com treinamento de ML:** fortemente desaconselhado. Os jobs de treinamento disparam o uso de VRAM ao limite e privam o modelo de revisão, causando latências de revisão de 30–120 segundos que corroem a confiança dos desenvolvedores no sistema.',
          '**vLLM com atenção paginada:** projetado especificamente para servir LLM com alta concorrência. A mesma RTX 4090 que lida com 1–3 revisões simultâneas sob o Ollama pode lidar com 4–8 sob o vLLM, ao custo de uma configuração mais complexa. Vale a pena a partir de 25 desenvolvedores.',
          '**Multi-tenant em H100:** na escala de 100+ desenvolvedores, particione um H100 em fatias MIG ou execute o vLLM com cotas por tenant. Isso é território de engenharia de plataforma; não improvise.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Comparação de Custos frente ao GitHub Advanced Security',
        content:
          '**A economia se inclina a favor da autohospedagem em cerca de 15–25 assentos pagos.** Esta é uma comparação de payback de um ano; horizontes mais longos tornam a autohospedagem mais favorável.',
        items: [
          '**GitHub Advanced Security (Code Security):** $19/desenvolvedor/mês ao preço de tabela (verifique na página de preços do GitHub; há descontos por volume disponíveis para clientes enterprise).',
          '**API de LLM na nuvem (ex. OpenAI, Anthropic):** cerca de $50–200/mês por desenvolvedor ativo com o volume típico de PR; varia enormemente conforme o tamanho da base de código e o design do prompt de revisão.',
          '**LLM local autohospedado, build com RTX 4090:** cerca de $2.500 em hardware único (GPU + um chassi de servidor básico). Energia: ~50W em repouso, ~350W sob carga — calcule cerca de $20–30/mês em eletricidade com uso típico. Sem tarifas por assento.',
          '**Cruzamento com 10 devs:** GHAS $190/mês vs autohospedado $25/mês de operação + $2.500 capex. O capex se paga em ~14 meses.',
          '**Cruzamento com 25 devs:** GHAS $475/mês vs autohospedado $25/mês de operação + $2.500 capex. O capex se paga em ~5–6 meses.',
          '**Cruzamento com 50 devs:** GHAS $950/mês vs autohospedado $40/mês de operação + $7.500 capex (GPU de 48 GB). O capex se paga em ~8 meses.',
          '**O número do capex é o que domina o cálculo.** Se você compra uma GPU especificamente para isso, o payback é real. Se você tem capacidade GPU existente, o custo marginal está mais perto de zero e a autohospedagem vence de imediato.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esses números são comparações de preços de tabela. Os preços negociados de GHAS para grandes empresas deslocam o cruzamento; a capacidade GPU existente o elimina. Refaça o cálculo com seus custos reais antes de se comprometer com uma compra de hardware.',
          },
        ],
      },
      securityModel: {
        id: 'security-model',
        title: 'Modelo de Segurança e Postura de Auditoria',
        content:
          '**A afirmação de segurança principal — "o código-fonte nunca sai da sua rede" — é verdadeira, demonstrável e o argumento mais sólido para esta arquitetura.** A superfície de auditoria é pequena o suficiente para ser defendida em uma revisão de aquisição.',
        items: [
          '**O modelo só vê o diff que sua action envia.** Sem telemetria, sem chamadas de rede ocultas. Confirmável com `tcpdump` ou `nft monitor` na interface de saída do servidor GPU — sob operação em estado estável, você deveria ver zero pacotes de saída para hosts não internos.',
          '**A superfície de auditoria completa é um processo e um arquivo de log.** O `ollama serve` é todo o stack do LLM. Seus logs (corpos de requisições, latência, eventos de carregamento do modelo) são o registro de auditoria. Sem painel de SaaS para consultar, sem política de retenção de terceiros para ler.',
          '**O isolamento de rede é direto.** Vincule o `ollama serve` a uma interface privada; coloque um proxy reverso com mTLS ou autenticação de segredo compartilhado na frente; negue o tráfego de saída no namespace de rede do servidor GPU exceto para a sub-rede do seu runner de CI. Padrão zero-trust convencional, sem mágica específica de LLM.',
          '**Os pesos do modelo são artefatos estáticos assinados pelo fornecedor.** Baixe-os uma vez com o Ollama, fixe o digest e o modelo não pode mudar sem uma ação do operador. Isso é uma história de cadeia de suprimentos mais sólida que uma API de SaaS onde o modelo upstream pode ser trocado silenciosamente.',
          '**Postura de conformidade:** o zero egresso de dados é simples de documentar para SOC 2, ISO 27001, GDPR e a classificação de risco limitado do EU AI Act. A parte mais difícil da conformidade da autohospedagem é geralmente documentar o próprio servidor de inferência; o Ollama e o vLLM estão ambos bem documentados.',
          '**O modelo continua vendo seu código.** Autohospedado não significa privado do modelo — significa privado de terceiros. Os cenários de ameaça interna (um engenheiro com acesso ao servidor GPU lê logs que contêm diffs de PR anteriores) continuam no escopo; rotacione os logs e limite o acesso conforme necessário.',
        ],
      },
      promptDesign: {
        id: 'prompt-design',
        title: 'Design de Prompt para Revisão de Código',
        content:
          '**O único determinante mais importante da taxa de falsos positivos é o prompt de sistema.** Um prompt vago "revise este código" produz comentários de revisão vagos; um prompt específico com limiares de severidade e saída estruturada produz feedback acionável.',
        items: [
          '**A saída estruturada não é negociável.** Force JSON com um esquema estrito (`verdict`, `summary`, `comments[]`). Sem ele, a action gasta 30% do seu código analisando saída de formato livre e os modos de falha são sutis.',
          'Para o guia completo sobre a imposição de saída estruturada nos modelos, ver [saída estruturada e modo JSON](/pt/prompt-engineering/structured-output-and-json-mode).',
          '**Os limiares de severidade pertencem ao prompt, não à action.** Diga ao modelo o que conta como `crítico`, `alto`, `médio`, `baixo`; diga-lhe para filtrar os achados de baixa severidade a menos que sejam pedidos explicitamente. Isso é muito mais confiável que a filtragem post-hoc em um campo de severidade de formato livre.',
          '**Ancore o prompt com exemplos.** Um prompt de 1–2 disparos com um diff real e um JSON de revisão ideal supera massivamente o zero-shot para o mesmo modelo e o mesmo tamanho de diff.',
          '**Distinga a intenção de "revisar" da de "comentar".** Um comentário de revisor ("considere extrair isto para um helper") e um bloqueador ("isto introduz uma injeção SQL") precisam de ações diferentes no CI. Marque-os na saída estruturada e faça a action bloquear apenas nos bloqueadores.',
          '**As variantes de prompt por linguagem ajudam a partir de certo tamanho.** Uma base de código poliglota se beneficia de um prompt que referencia os idiomatismos da linguagem relevante (Pythonic vs Rust idiomático). Isso é opcional abaixo de ~25 desenvolvedores; valioso acima.',
          'Para fundamentos mais profundos de engenharia de prompt — prompts de sistema vs usuário, saídas estruturadas, few-shot prompting — ver [Prompt de Sistema vs Prompt de Usuário: Qual é a Diferença?](/pt/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference).',
        ],
      },
      falsePositives: {
        id: 'false-positives',
        title: 'Gestão de Falsos Positivos sem Corroer a Confiança dos Desenvolvedores',
        content:
          '**Os falsos positivos são o imposto operacional da revisão de código com LLM.** Uma taxa de 5% é aceitável; 20% é intolerável; a diferença é principalmente iteração do prompt e um ciclo de feedback, não o modelo.',
        items: [
          '**Estabeleça um limiar de "bloqueio" alto.** Um veredito de `bloquear` que dispara diante de qualquer problema menor de lint treina os desenvolvedores a pular a verificação. Reserve `bloquear` para problemas de segurança, testes falhos e falhas de correção evidentes.',
          '**Faça com que os comentários não bloqueantes sejam baratos.** Os comentários em linha sobre os quais o modelo não está seguro devem ser marcados ("tentativo" / "considere") para que os autores possam descartá-los rapidamente sem cerimônia.',
          '**Construa um ciclo de feedback no primeiro mês.** Adicione uma reação (👍 / 👎) a cada comentário de revisão. Periodicamente (semanalmente funciona) revise os 👎 e atualize o prompt de sistema com instruções explícitas de "não sinalizar X" para as categorias de falsos positivos mais comuns.',
          '**Limite o volume de comentários por PR.** Uma única PR não deveria receber mais de 5–10 comentários do LLM; passado isso, a relação sinal-ruído entra em colapso. Limite a action no nível do prompt ("retorne no máximo N comentários").',
          '**Acompanhe a correlação veredito-para-merge semanalmente.** Se 80% dos veredictos de `bloquear` forem mesclados de qualquer forma, seu limiar está agressivo demais. Se 0% dos veredictos de `comentar` receberem alguma ação humana, seu prompt está gerando ruído.',
        ],
      },
      operationalPitfalls: {
        id: 'operational-pitfalls',
        title: 'Armadilhas Operacionais que Aparecem no Segundo Mês',
        content:
          '**A configuração recebe atenção; as operações são ignoradas.** As falhas a seguir são as que levam as equipes a abandonar o projeto após a lua de mel inicial.',
        items: [
          '**As atualizações do modelo quebram os prompts.** Uma nova versão do Qwen3-Coder muda sutilmente o formato de saída; a análise de JSON estruturado falha no CI; as revisões param de ser publicadas. Fixe o digest do modelo com `ollama show <model> --modelfile`; atualize em uma branch de staging antes de promover.',
          '**Fragmentação de memória da GPU sob tempo de atividade prolongado.** Um servidor GPU rodando 24/7 pode fragmentar a VRAM e recusar novas alocações após semanas de operação. Reinicie o `ollama serve` semanalmente por meio de um cron job; é barato e evita completamente esse modo de falha.',
          '**Contenção do runner de CI.** Um runner autohospedado que hospeda tanto o servidor LLM quanto outros jobs de CI verá a latência de revisão disparar sob carga de build. Separe o runner e o servidor GPU quando o tamanho da equipe ultrapassar ~25 desenvolvedores.',
          '**Crescimento do tamanho do diff.** Os tamanhos de PR vão crescendo; eventualmente uma PR ultrapassa o contexto de trabalho prático do modelo e as revisões se degradam silenciosamente. Adicione uma guarda na action que divide ou trunca os diffs acima de ~30K tokens e avisa o autor.',
          '**Energia e refrigeração.** Uma RTX 4090 com carga contínua consome ~350W sob inferência e gera uma quantidade significativa de calor. Uma sala de servidores do tamanho de um armário sem refrigeração ativa vai limitar a GPU; a limitação custa latência e os desenvolvedores notam.',
          '**Rotação de logs esquecida.** O Ollama registra cada corpo de requisição por padrão. Após três meses de revisões de PR, o arquivo de log é grande e contém diffs de PRs históricas em texto puro. Rotacione os logs semanalmente; arquive ou apague conforme sua política de retenção de dados.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros Comuns ao Configurar a Revisão de Código com LLM Local',
        items: [
          '**Erro 1: começar com um modelo 7B em uma GPU de 16 GB.** As revisões com o Qwen3-Coder 7B são notavelmente piores que com o 30B; os desenvolvedores perdem a confiança rapidamente e o projeto é abandonado. Se você não consegue alojar o 30B, melhore a GPU ou use uma API na nuvem nos primeiros seis meses enquanto garante orçamento.',
          '**Erro 2: bloquear PRs por veredictos de `bloquear` desde o primeiro dia.** O primeiro mês é calibração; trate toda a saída como consultiva até ter medido a taxa de falsos positivos. Promova para bloqueante apenas quando a taxa estiver abaixo de ~5%.',
          '**Erro 3: expor o `ollama serve` em `0.0.0.0:11434` sem autenticação.** Isso é o equivalente na era dos LLMs a deixar o Redis vinculado a uma interface pública. Vincule a uma interface privada e coloque autenticação na frente antes de qualquer exposição entre hosts.',
          '**Erro 4: pular o cache.** Revisar novamente arquivos sem alterações a cada execução de CI desperdiça ~80% do orçamento de inferência em uma PR típica. Um pequeno cache de hash de arquivo + hash de diff (Redis ou SQLite) reduz drasticamente a latência de revisão e a carga na GPU.',
          '**Erro 5: executar jobs de treinamento na mesma GPU.** O treinamento dispara o uso de VRAM ao limite e priva o modelo de revisão de recursos. Use GPUs separadas ou, se precisar compartilhar, execute o treinamento em um horário estrito que não se sobreponha às horas de pico de PR.',
          '**Erro 6: construir a GitHub Action sem um ciclo de feedback.** Um sistema de revisão sem reações 👍/👎 não pode melhorar. Construa o ciclo na primeira semana; colete dados; itere o prompt mensalmente.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Documentação do Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — Referência oficial da API HTTP para `/api/chat`, `/api/generate`, saída estruturada e gestão de modelos.',
          '[Documentação do vLLM](https://docs.vllm.ai/) — Documentação do servidor de inferência de alto throughput; o caminho de atualização além do Ollama para equipes com alta concorrência.',
          '[Documentação do GitHub Actions](https://docs.github.com/en/actions) — Referência oficial para runners autohospedados, segredos e o SDK JavaScript do Actions usado no fluxo de trabalho acima.',
          '[Preços do GitHub Advanced Security](https://github.com/pricing) — Referência de preços de tabela para a comparação de custos; verifique frente aos seus termos negociados reais.',
          '[Ficha do modelo Qwen3-Coder](https://huggingface.co/Qwen/Qwen3-Coder-30B) — Arquitetura, janela de contexto e termos de licença para o modelo de revisão recomendado.',
          '[Referência do GitLab CI/CD](https://docs.gitlab.com/ee/ci/) — Referência equivalente para equipes do GitLab; a porção de chamada ao LLM do fluxo de trabalho é idêntica.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Um único servidor GPU consegue lidar com o CI de 50 desenvolvedores?',
            a: 'Uma única GPU de 24 GB (RTX 4090) lida confortavelmente com 15–25 desenvolvedores; 50 desenvolvedores precisam de uma placa de 48 GB (L40S, A6000 Ada) ou mudar do Ollama para o vLLM no mesmo hardware. O gargalo é a concorrência em momentos de descarga de PR — segunda de manhã, fim de sprint — não o throughput em estado estável. Para 100+ desenvolvedores, planeje multi-GPU ou hardware de classe H100.',
          },
          {
            q: 'A revisão de código local afeta a latência da PR?',
            a: 'Tipicamente não — a latência de revisão é de 10–30 segundos em uma única GPU de 24 GB para um diff típico de 200 linhas, e o tempo de espera do autor da PR é dominado por outros jobs de CI (build, test, lint) que demoram muito mais. A exceção são as PRs muito grandes (acima de ~30K tokens de diff) onde a revisão pode levar 60–90 segundos; trunque ou divida essas no nível da action.',
          },
          {
            q: 'Como audito o que o modelo vê?',
            a: 'O Ollama registra cada corpo de requisição por padrão em seu arquivo de log (a localização varia conforme o OS; verifique `journalctl -u ollama` no systemd ou o diretório de logs do Ollama). Cada diff de PR que vai para revisão está nesse log. Combinado com `tcpdump` na interface de saída do servidor GPU para demonstrar zero egresso de dados. A superfície de auditoria completa é um processo e um arquivo de log — muito mais simples de auditar que uma API de revisão de código de SaaS.',
          },
          {
            q: 'Posso bloquear PRs com base na saída do modelo local?',
            a: 'Sim. A action retorna um campo `verdict`; se o veredito for `bloquear`, a GitHub Action sai com código não-zero, o que faz a verificação falhar, o que bloqueia o merge se a regra de proteção de branch exigir que a verificação passe. A recomendação é começar com `bloquear` desativado (apenas consultivo) durante o primeiro mês, medir a taxa de falsos positivos e promover para bloqueante quando a taxa estiver abaixo de ~5%.',
          },
          {
            q: 'Funciona com o GitLab CI?',
            a: 'Sim — arquitetura idêntica. Substitua a GitHub Action por um job do GitLab CI que executa o mesmo `curl` ao endpoint do Ollama e publica a resposta de volta na merge request via a API do GitLab. O modelo, o prompt, o cache, o modelo de segurança e o dimensionamento de hardware são todos iguais. O Bitbucket Pipelines, o Jenkins e o Buildkite funcionam da mesma forma.',
          },
          {
            q: 'Como mantenho o modelo atualizado sem quebrar os pipelines?',
            a: 'Fixe o digest do modelo com `ollama show <model> --modelfile` para que o CI de produção use uma versão exata. Quando chegar uma nova versão do modelo, baixe-a em um servidor de staging, execute um pequeno conjunto de diffs de PR representativas, compare a saída estruturada com a versão de produção e promova apenas depois que o conjunto de testes de regressão passar. Trate as atualizações do modelo como qualquer outra atualização de dependência.',
          },
          {
            q: 'Posso usar isto para geração de código além da revisão?',
            a: 'Sim, mas as cargas de trabalho competem pela mesma GPU e têm características de latência diferentes. A revisão de código é assíncrona e tolera respostas de 30 segundos; a geração interativa de código em um editor precisa de latência abaixo de 2 segundos. Padrão recomendado: use um modelo menor (Qwen3-Coder 7B) para autocompletar no editor nas máquinas dos desenvolvedores e reserve o servidor GPU dedicado para cargas de trabalho de classe revisão no CI.',
          },
          {
            q: 'Qual é o modelo de segurança para o servidor GPU?',
            a: 'Trate-o como qualquer serviço interno: vincule o servidor de inferência a uma interface privada, coloque autenticação na frente (mTLS, tokens de segredo compartilhado ou acesso apenas por VPN), restrinja o tráfego de saída com negação por padrão e rotacione as credenciais. O acréscimo específico de LLM é auditar a procedência dos pesos do modelo — fixe o digest, documente a fonte e confirme o zero egresso de dados com capturas de pacotes periódicas.',
          },
          {
            q: 'Vários repositórios podem compartilhar um servidor GPU?',
            a: 'Sim — o servidor GPU é apenas um endpoint HTTP. Qualquer número de repositórios pode chamá-lo enquanto o servidor tiver capacidade. Para organizações com 10+ repositórios ativos, adicione limites de taxa por repositório no proxy reverso na frente do Ollama para evitar que um repositório barulhento (monorepo grande, pushes forçados frequentes) prive os outros.',
          },
          {
            q: 'Como gerencio os falsos positivos no CI?',
            a: 'Três camadas. Primeiro, design do prompt — estabeleça limiares de severidade altos, force saída estruturada e marque os achados tentativos. Segundo, filtragem no nível da action — `bloquear` apenas em `severity >= "high"`; mostre médio/baixo como comentários. Terceiro, um ciclo de feedback — deixe os desenvolvedores reagirem 👍/👎 a cada comentário, depois revise semanalmente os 👎 e atualize o prompt de sistema para suprimir as categorias de falsos positivos mais comuns. Espere uma taxa de 5–10% após um mês de ajuste; abaixo de 5% é alcançável com iteração sustentada.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras Relacionadas',
        items: [
          '[Substituir o GitHub Copilot por um LLM Local](/pt/power-local-llm/replace-github-copilot-with-local-llm) — contexto mais amplo de substituição de custos para equipes que consideram ferramentas de IA autohospedadas.',
          '[Continue.dev vs Cline vs Aider: Melhor Agente de Codificação Local em 2026](/pt/power-local-llm/continue-dev-vs-cline-vs-aider-local) — o que funciona em pipelines vs trabalho interativo no editor; a camada de harness sob o modelo.',
          '[Melhores Modelos de Codificação Locais em 2026](/pt/power-local-llm/best-local-coding-models-2026) — o lado do modelo na equação: Qwen3-Coder, DeepSeek, Codestral e o panorama de licenças.',
          '[Prompt de Sistema vs Prompt de Usuário: Qual é a Diferença?](/pt/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — fundamentos de engenharia de prompt para o prompt de sistema de revisão.',
          '[llama.cpp vs Ollama vs vLLM](/pt/local-llms/llamacpp-vs-ollama-vs-vllm) — comparação de motores de inferência; o vLLM é o caminho de atualização além do Ollama para equipes com alta concorrência.',
          '[Power Local LLM Hub](/pt/power-local-llm) — biblioteca completa de guias.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM Local no seu CI/CD: Revisão de Código Automatizada Sem Cloud',
      description: 'Revisão de código com LLM local autohospedado no GitHub Actions: arquitetura, YAML de fluxo de trabalho funcional, dimensionamento de hardware por tamanho de equipe, modelo de segurança e ponto de equilíbrio econômico frente ao GitHub Advanced Security.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/local-llm-code-review-ci-cd',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
},
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'نموذج لغوي محلي في ⁨CI/CD⁩: مراجعة الكود المؤتمتة بدون سحابة',
    seoTitle: 'مراجعة ⁨PR⁩ بـ ⁨LLM⁩ محلي في ⁨CI/CD 2026⁩: ⁨GitHub Actions⁩',
    intro:
      'تضع مراجعة الكود بنموذج LLM محلي مستضاف ذاتياً نموذج Qwen3-Coder خلف خط أنابيب CI/CD الخاص بك، بحيث تحصل كل طلب سحب على جولة مراجعة دون أن تغادر قاعدة الكود شبكتك. البنية مباشرة — خادم GPU مخصص يُشغّل Ollama، وإجراء GitHub Action مخصص يستدعي واجهة HTTP API الخاصة به، وموجّه مراجعة مضبوط لمعدل الإيجابيات الكاذبة — والاقتصاديات تميل نحو الاستضافة الذاتية في مكانٍ ما بين 15 و25 مقعداً مدفوع على GitHub. يستعرض هذا الدليل البنية، وسير عمل GitHub Actions الفعّال، وتحجيم الأجهزة حسب حجم الفريق، ونموذج الأمان، والمزالق التشغيلية التي تعترض الفرق في الشهر الثاني.',
    metaDescription:
      'خادم GPU مع Ollama يُراجع طلبات PR في GitHub Actions. البنية وملف YAML وتحجيم الأجهزة لـ15–50 مطوراً ونقطة التعادل مقابل Advanced Security.',
    twitterDescription:
      'مراجعة كود مستضافة ذاتياً على خادم GPU داخل شبكتك. يستدعي GitHub Actions نظام Ollama، ويراجع Qwen3-Coder طلبات PR، ولا تغادر قاعدة الكود محيطك. الإعداد والتحجيم ونقطة تقاطع التكاليف بالتفصيل.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'NVIDIA L40S 48 GB',
      'NVIDIA A6000 Ada 48 GB',
      'NVIDIA H100 80 GB',
    ],
    audience:
      'قادة فرق هندسية ومهندسو منصات وممارسو DevOps الذين يُشغّلون GitHub Actions أو GitLab CI ويريدون إضافة مراجعة كود مدفوعة بنماذج LLM دون إرسال الكود المصدري إلى واجهة API خارجية. يُفترض الإلمام بـ Docker وLinux والعدّائين المستضافين ذاتياً.',
    readTime: '15 دقيقة قراءة',
    educationalLevel: 'Advanced',
    primaryTerm: 'مراجعة الكود بنموذج LLM محلي في CI/CD',
    targetKeywords: [
      'مراجعة الكود بنموذج LLM محلي',
      'مراجعة كود LLM مستضاف ذاتياً',
      'GitHub Actions نموذج LLM محلي',
      'Ollama GitHub Actions',
      'مراجعة كود ذكاء اصطناعي خاصة',
      'مراجعة كود بدون OpenAI',
    ],
    leadAnswerBlock:
      '**تستخدم مراجعة الكود بنموذج LLM محلي مستضاف ذاتياً ثلاثة مكونات: خادم GPU مخصص يُشغّل Ollama (أو vLLM)، وإجراء GitHub Action مخصص يُرسل الفرق إلى نقطة نهاية HTTP للخادم، وموجّه مراجعة يعيد حكماً منظماً (موافقة / تعليق / حظر). تُخدّم بطاقة RTX 4090 (24 جيجابايت) مع Qwen3-Coder 30B فريقاً من 15 إلى 25 مطوراً بارتياح؛ وتمتد بطاقة 48 جيجابايت (L40S أو A6000 Ada) لتشمل نحو 50 مطوراً؛ وتستلزم أكثر من 100 مطور أجهزة من فئة H100. تنقلب الاقتصاديات لصالح الاستضافة الذاتية بين 15 و25 مقعداً مدفوعاً من GitHub Advanced Security بسعر 19 دولاراً للمطور شهرياً — ويعتمد التقاطع الدقيق على تكلفة شراء الأجهزة مقابل الطاقة الاستيعابية القائمة. الميزة الأمنية حقيقية: لا يغادر الكود المصدري شبكتك أبداً، ومساحة التدقيق هي عملية واحدة وملف سجل واحد، ويمكنك إثبات عدم وجود حركة بيانات صادرة بتسجيل الحزم.**',
    quickAnswerTop: {
      ar: {
        question: 'كيف أُشغّل نموذج LLM محلياً بوصفه مراجعاً للكود في CI/CD؟',
        answer:
          'أنشئ خادم GPU يُشغّل Ollama (أو vLLM أو llama.cpp) مع نموذج مُضبَّط على البرمجة — Qwen3-Coder 30B هو الخيار الافتراضي في مايو 2026. أضف عدّاءً مستضافاً ذاتياً على GitHub Actions في الشبكة ذاتها، أو اكشف نقطة نهاية HTTP للخادم لعدّائيك الحاليين عبر شبكة خاصة. اكتب إجراءً مخصصاً صغيراً يجلب فرق PR ويُرسله مع موجّه مراجعة إلى نقطة نهاية LLM، ويُحلّل الاستجابة المنظمة (موافقة / تعليق / حظر) وينشر تعليقات مضمّنة على PR. لا يغادر النموذج محيطك أبداً؛ ويتصرف الإجراء كأي فحص آخر. على صعيد الأجهزة، تُعالج بطاقة RTX 4090 واحدة مع Qwen3-Coder 30B ما بين 15 و25 مطوراً؛ وتمتد بطاقة 48 جيجابايت لتشمل 50؛ وفوق 100 تحتاج إلى أجهزة من فئة H100 أو عدة بطاقات GPU.',
        bullets: [
          'البنية: خادم GPU يُشغّل Ollama ← عدّاء مستضاف ذاتياً (أو HTTP من عدّائي السحابة) ← إجراء GitHub Action مخصص ← تعليقات على PR.',
          'المكدّس الافتراضي: Ollama + Qwen3-Coder 30B (Apache 2.0) + إجراء JavaScript أو composite مخصص.',
          'الأجهزة: 1× RTX 4090 (24 جيجابايت) لـ 15–25 مطوراً؛ 1× L40S/A6000 Ada (48 جيجابايت) لـ ~50؛ 1× H100 أو multi-GPU لـ 100+.',
          'الاقتصاديات: يقع التقاطع مقابل GitHub Advanced Security بسعر 19 دولاراً للمطور شهرياً عند نحو 15–25 مقعداً مدفوعاً، حسب تكلفة الأجهزة.',
          'الأمان: لا يغادر الكود المصدري شبكتك؛ يمكن إثبات عدم وجود حركة بيانات صادرة بتسجيل الحزم؛ مساحة التدقيق هي عملية واحدة وسجل واحد.',
          'يعمل GitLab CI بالطريقة ذاتها — عدّاء بدلاً من إجراء، لكن استدعاء LLM متطابق.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'مقارنة البنى', anchor: '#architecture-comparison' },
      { label: 'المكدّس الموصى به', anchor: '#recommended-stack' },
      { label: 'سير عمل GitHub Actions', anchor: '#workflow' },
      { label: 'تحجيم الأجهزة حسب حجم الفريق', anchor: '#hardware-sizing' },
      { label: 'مشاركة GPU بين عمليات البناء', anchor: '#gpu-sharing' },
      { label: 'مقارنة التكاليف مقابل GitHub Advanced Security', anchor: '#cost-comparison' },
      { label: 'نموذج الأمان وموقف التدقيق', anchor: '#security-model' },
      { label: 'تصميم الموجّه لمراجعة الكود', anchor: '#prompt-design' },
      { label: 'التعامل مع الإيجابيات الكاذبة', anchor: '#false-positives' },
      { label: 'المزالق التشغيلية في الشهر الثاني', anchor: '#operational-pitfalls' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**البنية ثلاثة مكونات:** خادم GPU يُشغّل Ollama (أو vLLM) ← عدّاء CI يمكنه الوصول إليه عبر الشبكة ← إجراء مخصص يُرسل فرق PR ويُحلّل حكماً منظماً. الشكل ذاته في GitHub Actions وGitLab CI وBuildkite وJenkins.',
          '**المكدّس الافتراضي في مايو 2026:** Ollama + Qwen3-Coder 30B (Apache 2.0) + إجراء GitHub Action مخصص خفيف. إجمالي البنية التحتية: جهاز GPU واحد، وعدّاء واحد.',
          '**تحجيم الأجهزة:** RTX 4090 (24 جيجابايت، ~2000 دولار) يُعالج 15–25 مطوراً؛ L40S أو A6000 Ada (48 جيجابايت، ~7000–8000 دولار) تمتد لـ 50؛ H100 (80 جيجابايت، أكثر من 25000 دولار) أو multi-GPU لـ 100+.',
          '**تنقلب الاقتصاديات لصالح الاستضافة الذاتية** عند نحو 15–25 مقعداً مدفوعاً من GitHub Advanced Security (19 دولاراً للمطور شهرياً) — تُسدَّد تكلفة بناء RTX 4090 في 5–10 أشهر بهذا الحجم من الفريق.',
          '**الميزة الأمنية حقيقية، وليست تسويقاً فحسب.** لا يغادر الكود المصدري شبكتك؛ يمكن إثبات الحركة الصادرة بصفر باستخدام tcpdump؛ ومساحة التدقيق بأكملها هي عملية Ollama واحدة وملف سجل واحد.',
          '**الإيجابيات الكاذبة هي الضريبة التشغيلية.** خطّط لحلقة ضبط في الشهر الأول: تكرار الموجّه، وعتبات الخطورة، ومسار استيعاب ملاحظات المراجعين لتحسين الموجّه بمرور الوقت.',
          '**زمن الاستجابة مقبول.** تُراجع بطاقة GPU بسعة 24 جيجابايت مع Qwen3-Coder 30B فرق PR نموذجياً من 200 سطر في أقل من 30 ثانية. ووقت انتظار مؤلف PR يهيمن عليه مهام CI أخرى لا المراجعة.',
          '**لا تستبدل المراجعة البشرية كلياً.** نموذج LLM المحلي هو بوابة فرز أولية — يكتشف المشكلات الواضحة ويُعلّم على التغييرات الخطيرة ويُحرّر البشر للأحكام التي لا تزال نماذج LLM تُخطئ فيها.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**النموذج الموصى به:** Qwen3-Coder 30B بتكميم Q4_K_M (~17 جيجابايت VRAM، ترخيص Apache 2.0).',
          '**وقت التشغيل الموصى به:** Ollama لبساطة الإعداد؛ vLLM إذا احتجت تزامناً أعلى على البطاقة ذاتها.',
          '**الحد الأدنى من بطاقة GPU للفرق الجادة:** RTX 4090 (24 جيجابايت). البطاقات الأصغر تُجبر على استخدام نموذج 7B بجودة مراجعة أدنى بشكل ملحوظ.',
          '**التزامن على بطاقة GPU واحدة 24 جيجابايت:** 1–3 مراجعات متزامنة بارتياح مع Qwen3-Coder 30B؛ قائمة انتظار بعد ذلك.',
          '**هدف زمن الاستجابة:** أقل من 30 ثانية لفرق من 200 سطر. بعد هذه النقطة يتغير سلوك مؤلف PR وتُتخطى المراجعات.',
          '**موقف التدقيق:** إثبات الصفر صادراً على خادم GPU أمر ممكن؛ المساحة الكاملة هي ollama serve + ملف سجل واحد.',
          '**التقاطع مقابل GitHub Advanced Security (19 دولاراً للمطور شهرياً):** تغطي 15–25 مقعداً مدفوعاً بناءً بـ RTX 4090 في 5–10 أشهر.',
          '**التكافؤ مع GitLab CI:** بنية متطابقة، استبدل GitHub Action بمهمة CI تستدعي نقطة نهاية HTTP ذاتها.',
        ],
      },
      architectureComparison: {
        id: 'architecture-comparison',
        title: 'مقارنة البنى: ثلاثة خيارات حقيقية لمراجعة الكود في CI',
        content:
          '**تُغطي ثلاث بنى عملياً جميع إعدادات مراجعة PR في مايو 2026.** نموذج LLM المحلي المستضاف ذاتياً هو أحدها — الخيار الصحيح حين لا يمكن للكود المصدري مغادرة شبكتك أو حين تُفضّل اقتصاديات المقاعد البنية التحتية الثابتة.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'تُسدَّد تكلفة مراجعة الكود بنموذج LLM محلي مستضاف ذاتياً أسرع من GitHub Advanced Security عند 15–25 مقعداً مدفوعاً، وتُبقي الكود المصدري داخل شبكتك — البنية الصحيحة للفرق ذات الضغوط الأمنية أو عدد المقاعد.',
          },
          {
            type: 'plain-terms',
            text: 'هناك ثلاثة خيارات لمراجعة الكود بالذكاء الاصطناعي في CI. GitHub Advanced Security هو الأسهل تفعيلاً والأغلى على نطاق واسع. واجهة API لنموذج LLM سحابي (OpenAI وAnthropic) رخيصة في البداية وترسل كل فرق إلى طرف ثالث. ونموذج LLM المحلي المستضاف ذاتياً له أعلى تكلفة إعداد وهو الخيار الوحيد الذي يُبقي قاعدة الكود داخل محيطك — وعند نحو 15–25 مقعداً مدفوعاً يصبح الأقل تكلفة من الثلاثة على مدار عام.',
          },
        ],
        columns: ['البنية', 'تعقيد الإعداد', 'التكلفة (10 مطورين)', 'التكلفة (50 مطوراً)', 'زمن استجابة PR', 'مثالي لـ'],
        rows: [
          {
            'البنية': 'GitHub Advanced Security',
            'تعقيد الإعداد': 'منخفض (تبديل واحد)',
            'التكلفة (10 مطورين)': '190 دولاراً/شهر',
            'التكلفة (50 مطوراً)': '950 دولاراً/شهر',
            'زمن استجابة PR': 'أقل من دقيقة (مُدار)',
            'مثالي لـ': 'فرق بأقل من ~15 مقعداً مدفوعاً بدون قيود أمنية',
          },
          {
            'البنية': 'واجهة API لنموذج LLM سحابي (OpenAI / Anthropic)',
            'تعقيد الإعداد': 'منخفض–متوسط (مفتاح API + إجراء)',
            'التكلفة (10 مطورين)': '~50–200 دولار/شهر (استخدام)',
            'التكلفة (50 مطوراً)': '~300–1200 دولار/شهر (استخدام)',
            'زمن استجابة PR': 'ثوانٍ',
            'مثالي لـ': 'فرق مرتاحة لإرسال الكود المصدري إلى واجهة API خارجية',
          },
          {
            'البنية': 'نموذج LLM محلي على GPU مخصص',
            'تعقيد الإعداد': 'متوسط–مرتفع (خادم GPU + عدّاء + إجراء)',
            'التكلفة (10 مطورين)': '~2000 دولار أجهزة (مرة واحدة)',
            'التكلفة (50 مطوراً)': '~7000+ دولار أجهزة (مرة واحدة)',
            'زمن استجابة PR': '10–30 ثانية (GPU واحد)',
            'مثالي لـ': 'فرق ذات متطلبات أمنية، أكثر من 15 مقعداً مدفوعاً، سياقات الامتثال في الاتحاد الأوروبي',
          },
          {
            'البنية': 'نموذج LLM محلي على بنية تحتية مشتركة (GPU موجود)',
            'تعقيد الإعداد': 'متوسط (عدّاء + إجراء فقط)',
            'التكلفة (10 مطورين)': '0 دولار هامشي (طاقة قائمة)',
            'التكلفة (50 مطوراً)': '0 دولار هامشي (طاقة قائمة)',
            'زمن استجابة PR': 'متغير (يعتمد على التزاحم)',
            'مثالي لـ': 'فرق تُشغّل بالفعل بنية تحتية GPU للتعلم الآلي أو التحليلات',
          },
        ],
      },
      recommendedStack: {
        id: 'recommended-stack',
        title: 'المكدّس الموصى به: Ollama + Qwen3-Coder + إجراء GitHub Action خفيف',
        content:
          '**أبسط مكدّس بمستوى الإنتاج هو ثلاثة مكونات.** كل منها مفتوح المصدر ومجاني وموثّق جيداً؛ وسطح التكامل بينها هو HTTP.',
        items: [
          '**خادم GPU** مع **Ollama** (أو vLLM لتزامن أعلى). يكشف Ollama واجهة API HTTP متوافقة مع OpenAI على `localhost:11434` افتراضياً؛ اربطها بواجهة خاصة أو وكيل عكسي مع مصادقة قبل كشفها للعدّائين.',
          '**نموذج مُضبَّط على البرمجة:** **Qwen3-Coder 30B** بتكميم Q4_K_M هو المعيار لمايو 2026 — أقوى نموذج مفتوح الأوزان للبرمجة، سياق 256K، ترخيص Apache 2.0، يناسب بطاقة GPU بسعة 24 جيجابايت. للبطاقات بسعة 8–16 جيجابايت، استخدم Qwen3-Coder 7B مع الأخذ بعين الاعتبار أن جودة المراجعة تنخفض بشكل ملحوظ.',
          '**تكامل CI:** عدّاء GitHub Actions مستضاف ذاتياً في الشبكة ذاتها مع خادم GPU، أو عدّائوك الحاليون المستضافون على GitHub وصولاً إلى خادم GPU عبر شبكة خاصة (Tailscale أو WireGuard أو VPC peering).',
          '**إجراء GitHub Action مخصص** (JavaScript أو composite) يجلب فرق PR عبر واجهة GitHub API، ويُرسله إلى نقطة نهاية Ollama مع موجّه مراجعة، ويُحلّل الاستجابة المنظمة وينشر تعليقات مضمّنة على PR.',
          '**اختياري:** ذاكرة تخزين مؤقت صغيرة Redis أو SQLite بمفتاح هاش الملف + هاش الفرق لتجنب إعادة مراجعة الملفات غير المتغيرة في تشغيلات CI اللاحقة.',
          '**التكافؤ مع GitLab:** البنية ذاتها مع مهمة GitLab CI تستبدل إجراء GitHub Action. استدعاء LLM متطابق.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'اربط `ollama serve` بواجهة شبكة خاصة (أو `127.0.0.1` إذا كان العدّاء على المضيف ذاته) وضع المصادقة أمامه قبل أي كشف بين المضيفين. الإعداد الافتراضي `OLLAMA_HOST=0.0.0.0:11434` بدون مصادقة مقبول لتجربة على جهاز واحد لكنه ثغرة أمنية في أي سياق آخر.',
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: 'سير عمل GitHub Actions قابل للتشغيل',
        content:
          '**سير العمل الأدنى القابل للتطبيق يضم نحو 50 سطراً من YAML.** يعمل هذا القالب عند فتح PR ومزامنتها، ويجلب الفرق ويستدعي Ollama وينشر تعليقاً. تُضيف عمليات النشر الإنتاجية ذاكرة تخزين مؤقت وعتبات خطورة وخيار حظر PR عند حكم "حظر".',
        codeLanguage: 'yaml',
        codeBlock: `# .github/workflows/local-llm-review.yml
name: Local LLM Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: self-hosted   # or any runner that can reach OLLAMA_HOST
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Generate diff
        id: diff
        run: |
          git diff origin/\${{ github.base_ref }}...HEAD > /tmp/pr.diff
          echo "size=$(wc -c < /tmp/pr.diff)" >> "$GITHUB_OUTPUT"

      - name: Call local LLM for review
        id: review
        env:
          OLLAMA_HOST: \${{ secrets.OLLAMA_HOST }}   # e.g. http://gpu-server.internal:11434
        run: |
          DIFF=$(jq -Rs . < /tmp/pr.diff)
          curl -sS "$OLLAMA_HOST/api/chat" \\
            -H 'Content-Type: application/json' \\
            -d "{
              \\"model\\": \\"qwen3-coder:30b\\",
              \\"stream\\": false,
              \\"format\\": \\"json\\",
              \\"messages\\": [
                {\\"role\\": \\"system\\", \\"content\\": \\"You are a senior code reviewer. Return JSON: {verdict: 'approve'|'comment'|'block', summary: string, comments: [{path, line, severity, message}]}\\"},
                {\\"role\\": \\"user\\", \\"content\\": $DIFF}
              ]
            }" > /tmp/review.json
          echo "verdict=$(jq -r '.message.content | fromjson | .verdict' < /tmp/review.json)" >> "$GITHUB_OUTPUT"

      - name: Post review comment
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const review = JSON.parse(JSON.parse(fs.readFileSync('/tmp/review.json')).message.content);
            const body = \`### Local LLM Review: \\\`\${review.verdict}\\\`\\n\\n\${review.summary}\`;
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body
            });

      - name: Block on critical verdict
        if: steps.review.outputs.verdict == 'block'
        run: exit 1
`,
        items: [
          'يحتاج العدّاء إلى الوصول إلى `OLLAMA_HOST` عبر الشبكة — مستضاف ذاتياً في VPC ذاتها، أو عبر Tailscale / WireGuard إذا كان خادم GPU في مكان آخر.',
          'يفرض موجّه النظام استجابة JSON منظمة لتتفرع الإجراء بوضوح حسب الحكم. بدون `format: "json"` ومخطط صارم في الموجّه ستُنفق وقتاً تشغيلياً في تحليل مخرجات نص حر.',
          'الفحص مع `fetch-depth: 0` ضروري لحساب فرق حقيقي مقابل الفرع الأساسي — تشكّل الفحوصات الضحلة فروقاً مشوّهة.',
          'للمستودعات التي تتجاوز ~50 ألف سطر كود مُعدَّل لكل PR، اقطع الفرق أو قسّمه قبل إرساله. سياق 256K في Qwen3-Coder 30B سخيّ لكن السياق العملي أقرب إلى 64K–128K (انظر [أفضل نماذج البرمجة المحلية 2026](/ar/power-local-llm/best-local-coding-models-2026)).',
          'لعمق تصميم الموجّه — موجّهات النظام مقابل المستخدم والأمثلة والمخرجات المنظمة — انظر [موجّه النظام مقابل موجّه المستخدم: ما الفرق؟](/ar/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'سير العمل هذا مقصود في حده الأدنى. تُضيف عمليات النشر الإنتاجية: ذاكرة تخزين مؤقت بمفتاح هاش الملف + الفرق لتخطي إعادة مراجعة الملفات غير المتغيرة، وعتبات خطورة (الحظر فقط عند `severity >= "high"`)، ونشر تعليقات مضمّنة، وتنويعات موجّه حسب اللغة البرمجية، واستيعاب ملاحظات المراجعين لتحسين الموجّه بمرور الوقت.',
          },
        ],
      },
      hardwareSizing: {
        id: 'hardware-sizing',
        title: 'تحجيم الأجهزة حسب حجم الفريق',
        content:
          '**تُعالج بطاقة RTX 4090 (24 جيجابايت) فريقاً من 15 إلى 25 مطوراً بارتياح.** عنق الزجاجة في بطاقة GPU واحدة ليس الأداء لكل مراجعة — بل التزامن في أوقات ذروة PR (صباح الاثنين ونهاية السباقات). تفترض قواعد التحجيم التالية Qwen3-Coder 30B بتكميم Q4_K_M وفرق PR نموذجي من 50 إلى 500 سطر.',
        columns: ['حجم الفريق', 'بطاقة GPU', 'VRAM', 'المراجعات المتزامنة', 'السعر التقريبي (مايو 2026)'],
        rows: [
          { 'حجم الفريق': '~5 مطورين', 'بطاقة GPU': 'RTX 4070 / 4070 Ti', 'VRAM': '12–16 جيجابايت', 'المراجعات المتزامنة': '1 (Qwen3-Coder 7B فقط)', 'السعر التقريبي (مايو 2026)': '600–900 دولار' },
          { 'حجم الفريق': '15–25 مطوراً', 'بطاقة GPU': 'RTX 4090 / 5090', 'VRAM': '24–32 جيجابايت', 'المراجعات المتزامنة': '1–3 (Qwen3-Coder 30B)', 'السعر التقريبي (مايو 2026)': '2000–2500 دولار' },
          { 'حجم الفريق': '25–50 مطوراً', 'بطاقة GPU': 'L40S / A6000 Ada', 'VRAM': '48 جيجابايت', 'المراجعات المتزامنة': '3–6', 'السعر التقريبي (مايو 2026)': '7000–8500 دولار' },
          { 'حجم الفريق': '50–100 مطور', 'بطاقة GPU': '2× RTX 4090 أو H100 واحد', 'VRAM': '48 جيجابايت / 80 جيجابايت', 'المراجعات المتزامنة': '6–10', 'السعر التقريبي (مايو 2026)': '5000 دولار (2× 4090) أو أكثر من 25000 دولار (H100)' },
          { 'حجم الفريق': 'أكثر من 100 مطور', 'بطاقة GPU': 'Multi-GPU H100 أو H200', 'VRAM': '160+ جيجابايت', 'المراجعات المتزامنة': '10+ مع vLLM', 'السعر التقريبي (مايو 2026)': 'أكثر من 50000 دولار' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للفرق التي تتجاوز عتبة 50 مطوراً، انتقل من Ollama إلى vLLM. يُولي Ollama الأولوية لسهولة الاستخدام؛ ويُولي vLLM الأولوية للأداء على بطاقات GPU المشتركة. النموذج ذاته Qwen3-Coder 30B يعمل على الاثنين — خادم الاستنتاج فقط هو ما يتغير.',
          },
        ],
      },
      gpuSharing: {
        id: 'gpu-sharing',
        title: 'مشاركة GPU بين عمليات البناء والأعمال الأخرى',
        content:
          '**بطاقة GPU مخصصة لمراجعة الكود هي البنية الأبسط لكنها ليست الوحيدة.** الفرق التي تُشغّل بالفعل بنية تحتية GPU لاستنتاج التعلم الآلي أو التدريب يمكنها المشاركة — مع قبول أن التزاحم يسبب ارتفاعاً في زمن استجابة المراجعة.',
        items: [
          '**GPU مخصصة للمراجعة فقط:** النموذج الأبسط. زمن الاستجابة قابل للتنبؤ؛ وتخطيط الطاقة مباشر؛ وأوضاع الفشل معزولة. الموصى به لأي فريق لا يُشغّل بنية تحتية GPU بعد.',
          '**GPU مشتركة مع استنتاج التعلم الآلي:** قابل للتطبيق إذا كانت عبء استنتاج التعلم الآلي ذات غلاف مستقر (مثل خدمة embeddings صغيرة تناسب 4–6 جيجابايت). يشغل نموذج المراجعة بقية VRAM. تصادمات الجدولة نادرة مع هذا النمط.',
          '**GPU مشتركة مع تدريب التعلم الآلي:** غير موصى به بشدة. تُشبع مهام التدريب استخدام VRAM وتحرم نموذج المراجعة من الموارد، مما يسبب فترات استجابة مراجعة تتراوح بين 30 و120 ثانية تُضعف ثقة المطورين في النظام.',
          '**vLLM مع الانتباه المُقسَّم:** مُصمَّم خصيصاً لتخديم LLM بتزامن عالٍ. بطاقة RTX 4090 ذاتها التي تُعالج 1–3 مراجعات متزامنة تحت Ollama يمكنها معالجة 4–8 تحت vLLM، على حساب إعداد أكثر تعقيداً. يستحق الأمر ابتداءً من 25 مطوراً.',
          '**تعدد المستأجرين على H100:** على نطاق أكثر من 100 مطور، قسّم H100 إلى شرائح MIG أو شغّل vLLM مع حصص لكل مستأجر. هذا مجال هندسة المنصات؛ لا تُبادر به.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'مقارنة التكاليف مقابل GitHub Advanced Security',
        content:
          '**تنقلب الاقتصاديات لصالح الاستضافة الذاتية عند نحو 15–25 مقعداً مدفوعاً.** هذه مقارنة استرداد لمدة عام؛ الآفاق الزمنية الأطول تجعل الاستضافة الذاتية أكثر ملاءمة.',
        items: [
          '**GitHub Advanced Security (Code Security):** 19 دولاراً/مطور/شهر بسعر القائمة (تحقق من صفحة أسعار GitHub؛ تتوفر خصومات الحجم لعملاء المؤسسات).',
          '**واجهة API لنموذج LLM سحابي (مثل OpenAI وAnthropic):** نحو 50–200 دولار/شهر لكل مطور نشط بحجم PR النموذجي؛ يتفاوت بشكل كبير حسب حجم قاعدة الكود وتصميم موجّه المراجعة.',
          '**نموذج LLM محلي مستضاف ذاتياً، بناء RTX 4090:** نحو 2500 دولار في أجهزة مرة واحدة (GPU + هيكل خادم أساسي). الطاقة: ~50 واط في الخمول، ~350 واط تحت الحمل — احسب نحو 20–30 دولار/شهر في الكهرباء مع الاستخدام النموذجي. بدون رسوم مقاعد.',
          '**التقاطع عند 10 مطورين:** GHAS 190 دولار/شهر مقابل 25 دولار/شهر تشغيلياً + 2500 دولار رأسمالي. يُستهلَك الرأسمالي في ~14 شهراً.',
          '**التقاطع عند 25 مطوراً:** GHAS 475 دولار/شهر مقابل 25 دولار/شهر تشغيلياً + 2500 دولار رأسمالي. يُستهلَك في ~5–6 أشهر.',
          '**التقاطع عند 50 مطوراً:** GHAS 950 دولار/شهر مقابل 40 دولار/شهر تشغيلياً + 7500 دولار رأسمالي (GPU بسعة 48 جيجابايت). يُستهلَك في ~8 أشهر.',
          '**الرقم الرأسمالي هو ما يهيمن على الحساب.** إذا اشتريت GPU خصيصاً لهذا الغرض فالاسترداد حقيقي. إذا كانت لديك طاقة GPU قائمة، فالتكلفة الهامشية أقرب إلى الصفر وتفوز الاستضافة الذاتية فوراً.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه الأرقام مقارنات بسعر القائمة. الأسعار التفاوضية لـ GHAS في المؤسسات الكبيرة تُزحزح التقاطع؛ والطاقة GPU القائمة تُلغيه. أعد الحساب بتكاليفك الفعلية قبل الالتزام بشراء الأجهزة.',
          },
        ],
      },
      securityModel: {
        id: 'security-model',
        title: 'نموذج الأمان وموقف التدقيق',
        content:
          '**الادعاء الأمني الرئيسي — "الكود المصدري لا يغادر شبكتك أبداً" — صحيح وقابل للإثبات وأقوى حجة لهذه البنية.** مساحة التدقيق صغيرة بما يكفي للدفاع عنها في أي مراجعة استحواذ.',
        items: [
          '**النموذج يرى فقط الفرق الذي يُرسله إجراؤك.** لا قياسات عن بُعد، ولا استدعاءات شبكة خفية. قابل للتأكيد بـ `tcpdump` أو `nft monitor` على واجهة الإخراج لخادم GPU — تحت التشغيل المستقر، يجب أن ترى صفر حزمة صادرة نحو مضيفين غير داخليين.',
          '**مساحة التدقيق الكاملة هي عملية واحدة وملف سجل واحد.** `ollama serve` هو مكدّس LLM بأكمله. سجلاته (أجسام الطلبات وزمن الاستجابة وأحداث تحميل النموذج) هي سجل التدقيق. لا لوحة SaaS للاستعلام، ولا سياسة احتفاظ خارجية للقراءة.',
          '**العزل الشبكي مباشر.** اربط `ollama serve` بواجهة خاصة؛ ضع وكيلاً عكسياً مع mTLS أو مصادقة الرمز المشترك أمامه؛ أنكر حركة البيانات الصادرة في فضاء أسماء شبكة خادم GPU باستثناء شبكة الفرع الفرعية لعدّاء CI. نمط zero-trust قياسي، بدون سحر خاص بـ LLM.',
          '**أوزان النموذج عبارة عن مصنوعات ثابتة موقَّعة من المورّد.** نزّلها مرة واحدة مع Ollama، وثبّت الملخص ولن يتغير النموذج دون تدخل المشغّل. هذه قصة سلسلة توريد أكثر صلابة من واجهة API لـ SaaS حيث يمكن استبدال النموذج الأصلي بصمت.',
          '**موقف الامتثال:** عدم تدفق البيانات صادراً سهل التوثيق لـ SOC 2 وISO 27001 وGDPR وتصنيف المخاطر المحدودة لقانون الذكاء الاصطناعي الأوروبي. الجزء الأصعب في امتثال الاستضافة الذاتية عادةً هو توثيق خادم الاستنتاج نفسه؛ كل من Ollama وvLLM موثّق جيداً.',
          '**النموذج لا يزال يرى كودك.** الاستضافة الذاتية لا تعني خصوصية من النموذج — بل تعني خصوصية من الأطراف الثالثة. سيناريوهات التهديد الداخلي (مهندس لديه وصول لخادم GPU يقرأ سجلات تحتوي على فروق PR تاريخية) لا تزال في النطاق؛ دوّر السجلات وقيّد الوصول وفقاً لذلك.',
        ],
      },
      promptDesign: {
        id: 'prompt-design',
        title: 'تصميم الموجّه لمراجعة الكود',
        content:
          '**المحدد الأهم لمعدل الإيجابيات الكاذبة هو موجّه النظام.** موجّه مبهم "راجع هذا الكود" ينتج تعليقات مراجعة مبهمة؛ موجّه محدد مع عتبات خطورة ومخرجات منظمة ينتج ملاحظات قابلة للتنفيذ.',
        items: [
          '**المخرجات المنظمة غير قابلة للتفاوض.** أجبر JSON بمخطط صارم (`verdict` و`summary` و`comments[]`). بدونه تُنفق الإجراء 30% من كودها في تحليل مخرجات نص حر وأوضاع الفشل دقيقة.',
          'للدليل الكامل حول فرض المخرجات المنظمة في النماذج، انظر [المخرجات المنظمة ووضع JSON](/ar/prompt-engineering/structured-output-and-json-mode).',
          '**عتبات الخطورة تنتمي إلى الموجّه لا إلى الإجراء.** أخبر النموذج بما يُعدّ `حرجاً` و`مرتفعاً` و`متوسطاً` و`منخفضاً`؛ اطلب منه تصفية النتائج ذات الخطورة المنخفضة إلا إذا طُلبت صراحةً. هذا أكثر موثوقية بكثير من التصفية اللاحقة على حقل خطورة بنص حر.',
          '**أرسِ الموجّه بأمثلة.** موجّه بطلقة واحدة أو اثنتين مع فرق حقيقي وJSON مراجعة مثالي يتفوق بفارق كبير على zero-shot للنموذج ذاته وحجم الفرق ذاته.',
          '**ميّز بين نية "المراجعة" و"التعليق".** تعليق المراجع ("فكّر في استخراج هذا لـ helper") وعنصر الحظر ("هذا يُدخل حقن SQL") يحتاجان إجراءات مختلفة في CI. ضعهما في المخرجات المنظمة واجعل الإجراء يحظر فقط عند عناصر الحظر.',
          '**تنويعات الموجّه حسب اللغة البرمجية تُساعد ابتداءً من حجم معين.** قاعدة كود متعددة اللغات تستفيد من موجّه يستشهد باصطلاحات اللغة ذات الصلة (Python الاصطلاحي مقابل Rust الاصطلاحي). اختياري دون ~25 مطوراً؛ ذو قيمة فوقه.',
          'لأساسيات أعمق لهندسة الموجّهات — موجّهات النظام مقابل المستخدم والمخرجات المنظمة وfew-shot prompting — انظر [موجّه النظام مقابل موجّه المستخدم: ما الفرق؟](/ar/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference).',
        ],
      },
      falsePositives: {
        id: 'false-positives',
        title: 'إدارة الإيجابيات الكاذبة دون تآكل ثقة المطورين',
        content:
          '**الإيجابيات الكاذبة هي الضريبة التشغيلية لمراجعة الكود بنماذج LLM.** معدل 5% مقبول؛ و20% لا يُطاق؛ والفارق في معظمه هو تكرار الموجّه وحلقة ملاحظات، لا النموذج.',
        items: [
          '**ضع عتبة "حظر" مرتفعة.** حكم `حظر` يُطلَق على أي مشكلة lint بسيطة يُدرّب المطورين على تخطي الفحص. احتفظ بـ `حظر` لمشاكل الأمان والاختبارات الفاشلة وأخطاء الصحة الواضحة.',
          '**اجعل التعليقات غير الحاجبة رخيصة.** التعليقات المضمّنة التي النموذج غير متأكد منها يجب أن تُوسَم ("مبدئي" / "فكّر في") حتى يتمكن المؤلفون من رفضها بسرعة دون تكاليف.',
          '**ابنِ حلقة ملاحظات في الشهر الأول.** أضف تفاعلاً (👍 / 👎) لكل تعليق مراجعة. دورياً (أسبوعياً يعمل بشكل جيد) راجع 👎 وحدّث موجّه النظام بتعليمات صريحة "لا تُعلّم على X" لأكثر فئات الإيجابيات الكاذبة شيوعاً.',
          '**قيّد حجم التعليقات لكل PR.** PR واحدة يجب ألا تتلقى أكثر من 5–10 تعليقات من نموذج LLM؛ بعدها تنهار نسبة الإشارة إلى الضوضاء. قيّد الإجراء على مستوى الموجّه ("أعد ما يصل إلى N من التعليقات").',
          '**تتبع ارتباط الحكم بالدمج أسبوعياً.** إذا دُمج 80% من أحكام `حظر` على أي حال، فعتبتك عدوانية. إذا لم تحظَ 0% من أحكام `تعليق` بأي تفاعل بشري، فموجّهك يُولّد ضوضاء.',
        ],
      },
      operationalPitfalls: {
        id: 'operational-pitfalls',
        title: 'المزالق التشغيلية التي تظهر في الشهر الثاني',
        content:
          '**الإعداد يحظى بالاهتمام؛ العمليات تُهمَل.** الأعطال التالية هي التي تدفع الفرق إلى التخلي عن المشروع بعد شهر العسل الأول.',
        items: [
          '**تحديثات النموذج تكسر الموجّهات.** إصدار جديد من Qwen3-Coder يُغيّر تنسيق المخرجات بدقة؛ يفشل تحليل JSON المنظم في CI؛ تتوقف المراجعات عن النشر. ثبّت ملخص النموذج مع `ollama show <model> --modelfile`؛ حدّثه في فرع staging قبل الترقية.',
          '**تجزئة ذاكرة GPU في وقت تشغيل ممتد.** خادم GPU يعمل على مدار الساعة قد يُجزّئ VRAM ويرفض التخصيصات الجديدة بعد أسابيع من التشغيل. أعد تشغيل `ollama serve` أسبوعياً عبر cron job؛ هذا رخيص ويتجنب وضع الفشل هذا كلياً.',
          '**تزاحم عدّاء CI.** عدّاء مستضاف ذاتياً يستضيف خادم LLM ومهام CI أخرى سيرى ارتفاعاً في زمن استجابة المراجعة تحت حمل البناء. افصل العدّاء وخادم GPU عندما يتجاوز حجم الفريق ~25 مطوراً.',
          '**نمو حجم الفرق.** أحجام PR تتزايد تدريجياً؛ في النهاية تتجاوز PR الحد العملي لسياق النموذج وتتدهور المراجعات بصمت. أضف حارساً في الإجراء يقطع أو يقسّم الفروق التي تتجاوز ~30 ألف رمز وينبّه المؤلف.',
          '**الطاقة والتبريد.** بطاقة RTX 4090 تحت حمل مستمر تستهلك ~350 واط في الاستنتاج وتُولّد حرارة كبيرة. غرفة خوادم بحجم خزانة بدون تبريد نشط ستحدّ من البطاقة؛ والتحديد يُكلّف زمن استجابة والمطورون يلاحظون ذلك.',
          '**تدوير السجلات المنسي.** Ollama يُسجّل كل جسم طلب افتراضياً. بعد ثلاثة أشهر من مراجعات PR، ملف السجل كبير ويحتوي على فروق PR تاريخية بنص عادي. دوّر السجلات أسبوعياً؛ أرشف أو احذف وفق سياسة الاحتفاظ بالبيانات.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة في إعداد مراجعة الكود بنموذج LLM المحلي',
        items: [
          '**الخطأ 1: البدء بنموذج 7B على بطاقة GPU بسعة 16 جيجابايت.** مراجعات Qwen3-Coder 7B أدنى بشكل ملحوظ من نموذج 30B؛ يفقد المطورون الثقة بسرعة ويُهجر المشروع. إذا لم تتمكن من استضافة 30B فحسّن البطاقة أو استخدم واجهة API سحابية في الأشهر الستة الأولى بينما تضمن الميزانية.',
          '**الخطأ 2: حظر PR بأحكام `حظر` من اليوم الأول.** الشهر الأول معايرة؛ عامل كل المخرجات باعتبارها استشارية حتى تقيس معدل الإيجابيات الكاذبة. رقّها إلى حاجب فقط حين ينخفض المعدل دون ~5%.',
          '**الخطأ 3: كشف `ollama serve` على `0.0.0.0:11434` بدون مصادقة.** هذا مكافئ حقبة LLM لترك Redis مرتبطاً بواجهة عامة. اربط بواجهة خاصة وضع المصادقة أمامه قبل أي كشف بين المضيفين.',
          '**الخطأ 4: إغفال ذاكرة التخزين المؤقت.** إعادة مراجعة الملفات غير المتغيرة في كل تشغيل CI يُهدر ~80% من ميزانية الاستنتاج في PR نموذجية. ذاكرة تخزين مؤقت صغيرة بهاش الملف + هاش الفرق (Redis أو SQLite) تُقلّص زمن استجابة المراجعة وحمل GPU بشكل كبير.',
          '**الخطأ 5: تشغيل مهام التدريب على البطاقة ذاتها.** التدريب يُشبع استخدام VRAM ويحرم نموذج المراجعة من الموارد. استخدم بطاقات منفصلة أو، إذا اضطررت للمشاركة، شغّل التدريب وفق جدول زمني صارم لا يتداخل مع ساعات ذروة PR.',
          '**الخطأ 6: بناء إجراء GitHub Action بدون حلقة ملاحظات.** نظام مراجعة بدون تفاعلات 👍/👎 لا يمكنه التحسين. ابنِ الحلقة في الأسبوع الأول؛ اجمع البيانات؛ كرّر الموجّه شهرياً.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[توثيق Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — المرجع الرسمي لـ HTTP API لـ `/api/chat` و`/api/generate` والمخرجات المنظمة وإدارة النماذج.',
          '[توثيق vLLM](https://docs.vllm.ai/) — توثيق خادم الاستنتاج عالي الأداء؛ مسار الترقية بعد Ollama للفرق ذات التزامن العالي.',
          '[توثيق GitHub Actions](https://docs.github.com/en/actions) — المرجع الرسمي للعدّائين المستضافين ذاتياً والأسرار وسكريبت JavaScript لـ Actions المستخدم في سير العمل أعلاه.',
          '[أسعار GitHub Advanced Security](https://github.com/pricing) — مرجع أسعار القائمة لمقارنة التكاليف؛ تحقق من شروطك التفاوضية الفعلية.',
          '[بطاقة نموذج Qwen3-Coder](https://huggingface.co/Qwen/Qwen3-Coder-30B) — البنية ونافذة السياق وشروط الترخيص لنموذج المراجعة الموصى به.',
          '[مرجع GitLab CI/CD](https://docs.gitlab.com/ee/ci/) — المرجع المكافئ لفرق GitLab؛ جزء استدعاء LLM من سير العمل متطابق.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكن لخادم GPU واحد التعامل مع CI لـ 50 مطوراً؟',
            a: 'بطاقة GPU واحدة بسعة 24 جيجابايت (RTX 4090) تُعالج 15–25 مطوراً بارتياح؛ و50 مطوراً يحتاجون بطاقة بسعة 48 جيجابايت (L40S أو A6000 Ada) أو الانتقال من Ollama إلى vLLM على الأجهزة ذاتها. عنق الزجاجة هو التزامن في أوقات ذروة PR — صباح الاثنين ونهاية السباقات — لا الأداء في الحالة المستقرة. لأكثر من 100 مطور، خطّط لـ multi-GPU أو أجهزة من فئة H100.',
          },
          {
            q: 'هل تؤثر مراجعة الكود المحلية على زمن استجابة PR؟',
            a: 'في العادة لا — زمن استجابة المراجعة 10–30 ثانية على بطاقة GPU واحدة بسعة 24 جيجابايت لفرق نموذجي من 200 سطر، ووقت انتظار مؤلف PR يهيمن عليه مهام CI أخرى (البناء والاختبار والـ lint) التي تستغرق وقتاً أطول بكثير. الاستثناء هو PR الكبيرة جداً (فوق ~30K رمز من الفرق) حيث قد تستغرق المراجعة 60–90 ثانية؛ اقطع أو قسّم هذه على مستوى الإجراء.',
          },
          {
            q: 'كيف أُدقّق في ما يراه النموذج؟',
            a: 'Ollama يُسجّل كل جسم طلب افتراضياً في ملف السجل الخاص به (الموقع يتفاوت حسب نظام التشغيل؛ تحقق من `journalctl -u ollama` في systemd أو دليل سجلات Ollama). كل فرق PR يذهب للمراجعة موجود في ذلك السجل. إلى جانب `tcpdump` على واجهة الإخراج لخادم GPU لإثبات عدم تدفق البيانات. مساحة التدقيق الكاملة هي عملية واحدة وملف سجل واحد — أبسط بكثير من تدقيق واجهة API لمراجعة كود SaaS.',
          },
          {
            q: 'هل يمكنني حظر PR بناءً على مخرجات النموذج المحلي؟',
            a: 'نعم. يعيد الإجراء حقل `verdict`؛ إذا كان الحكم `حظر`، يخرج إجراء GitHub Action برمز غير صفري مما يُفشل الفحص مما يحظر الدمج إذا كانت قاعدة حماية الفرع تتطلب نجاح الفحص. التوصية هي البدء مع تعطيل `حظر` (استشاري فقط) خلال الشهر الأول وقياس معدل الإيجابيات الكاذبة والترقية إلى حاجب حين ينخفض المعدل دون ~5%.',
          },
          {
            q: 'هل يعمل مع GitLab CI؟',
            a: 'نعم — بنية متطابقة. استبدل إجراء GitHub Action بمهمة GitLab CI تنفّذ `curl` ذاتها إلى نقطة نهاية Ollama وتنشر الاستجابة على طلب الدمج عبر GitLab API. النموذج والموجّه وذاكرة التخزين المؤقت ونموذج الأمان وتحجيم الأجهزة كلها متطابقة. يعمل Bitbucket Pipelines وJenkins وBuildkite بالطريقة ذاتها.',
          },
          {
            q: 'كيف أُبقي النموذج محدَّثاً دون كسر خطوط الأنابيب؟',
            a: 'ثبّت ملخص النموذج مع `ollama show <model> --modelfile` لكي يستخدم CI الإنتاجي إصداراً دقيقاً. حين يصل إصدار جديد من النموذج، نزّله على خادم staging وشغّل مجموعة صغيرة من فروق PR التمثيلية وقارن المخرجات المنظمة مع إصدار الإنتاج وارقّه فقط بعد اجتياز مجموعة اختبار الانحدار. عامل تحديثات النماذج مثل أي تحديث تبعيات آخر.',
          },
          {
            q: 'هل يمكنني استخدام هذا لتوليد الكود إضافةً للمراجعة؟',
            a: 'نعم لكن عبء العمل يتنافس على البطاقة ذاتها ولها خصائص زمن استجابة مختلفة. مراجعة الكود غير متزامنة وتتحمل استجابات بـ 30 ثانية؛ توليد الكود التفاعلي في محرر يحتاج زمن استجابة أقل من ثانيتين. النمط الموصى به: استخدم نموذجاً أصغر (Qwen3-Coder 7B) للإكمال التلقائي في المحرر على أجهزة المطورين، واحتفظ بخادم GPU المخصص لأعمال فئة المراجعة في CI.',
          },
          {
            q: 'ما نموذج الأمان لخادم GPU؟',
            a: 'عامله كأي خدمة داخلية: اربط خادم الاستنتاج بواجهة خاصة وضع المصادقة أمامه (mTLS أو رموز أسرار مشتركة أو وصول VPN فقط) وقيّد حركة البيانات الصادرة مع الإنكار الافتراضي ودوّر بيانات الاعتماد. الإضافة الخاصة بـ LLM هي تدقيق مصدر أوزان النموذج — ثبّت الملخص ووثّق المصدر وأكّد عدم تدفق البيانات بالتقاطات دورية للحزم.',
          },
          {
            q: 'هل يمكن لمستودعات متعددة مشاركة خادم GPU واحد؟',
            a: 'نعم — خادم GPU هو مجرد نقطة نهاية HTTP. أي عدد من المستودعات يمكنه استدعاؤه طالما الخادم لديه طاقة. للمؤسسات التي لديها أكثر من 10 مستودعات نشطة، أضف حدود معدل لكل مستودع في الوكيل العكسي أمام Ollama لمنع مستودع صاخب (monorepo كبير وdiffs متكررة) من حرمان الآخرين.',
          },
          {
            q: 'كيف أُدير الإيجابيات الكاذبة في CI؟',
            a: 'ثلاث طبقات. أولاً تصميم الموجّه — ضع عتبات خطورة مرتفعة وأجبر المخرجات المنظمة وعلّم النتائج المبدئية. ثانياً التصفية على مستوى الإجراء — `حظر` فقط عند `severity >= "high"`؛ اعرض المتوسط/المنخفض كتعليقات. ثالثاً حلقة ملاحظات — دع المطورين يتفاعلون 👍/👎 مع كل تعليق، ثم راجع 👎 أسبوعياً وحدّث موجّه النظام لإسكات أكثر فئات الإيجابيات الكاذبة شيوعاً. توقع معدل 5–10% بعد شهر من الضبط؛ أقل من 5% قابل للتحقيق مع تكرار مستمر.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[استبدال GitHub Copilot بنموذج LLM محلي](/ar/power-local-llm/replace-github-copilot-with-local-llm) — سياق استبدال أوسع للتكاليف للفرق التي تدرس أدوات AI مستضافة ذاتياً.',
          '[Continue.dev مقابل Cline مقابل Aider: أفضل وكيل برمجة محلي 2026](/ar/power-local-llm/continue-dev-vs-cline-vs-aider-local) — ما يعمل في خطوط الأنابيب مقابل العمل التفاعلي في المحرر؛ طبقة harness تحت النموذج.',
          '[أفضل نماذج البرمجة المحلية 2026](/ar/power-local-llm/best-local-coding-models-2026) — جانب النموذج في المعادلة: Qwen3-Coder وDeepSeek وCodestral ومشهد التراخيص.',
          '[موجّه النظام مقابل موجّه المستخدم: ما الفرق؟](/ar/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — أساسيات هندسة الموجّهات لموجّه نظام المراجعة.',
          '[llama.cpp مقابل Ollama مقابل vLLM](/ar/local-llms/llamacpp-vs-ollama-vs-vllm) — مقارنة محركات الاستنتاج؛ vLLM هو مسار الترقية بعد Ollama للفرق ذات التزامن العالي.',
          '[مركز Power Local LLM](/ar/power-local-llm) — مكتبة الأدلة الكاملة.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'نموذج LLM محلي في CI/CD: مراجعة الكود المؤتمتة بدون سحابة',
      description: 'مراجعة الكود بنموذج LLM محلي مستضاف ذاتياً في GitHub Actions: البنية، وملف YAML لسير العمل الفعّال، وتحجيم الأجهزة حسب حجم الفريق، ونموذج الأمان، ونقطة التعادل الاقتصادي مقابل GitHub Advanced Security.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/local-llm-code-review-ci-cd',
      inLanguage: 'ar',
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'CI/CD에서 로컬 LLM 활용: 클라우드 없는 자동 코드 리뷰',
    seoTitle: '로컬 LLM으로 CI/CD 코드 리뷰 자동화 2026: PR을 자동으로 리뷰하십시오',
    intro:
      '자체 호스팅 로컬 LLM을 활용한 코드 리뷰는 Qwen3-Coder 모델을 CI/CD 파이프라인 뒤에 배치하여, 코드베이스가 네트워크 밖으로 나가지 않으면서도 모든 pull request가 리뷰 패스를 받을 수 있도록 합니다. 아키텍처는 단순합니다 — Ollama를 실행하는 전용 GPU 서버, 해당 서버의 HTTP API를 호출하는 맞춤형 GitHub Action, 그리고 오탐률에 맞춰 조정된 리뷰 프롬프트 — 그리고 경제성은 GitHub 유료 좌석 15~25개 사이의 어느 시점에서 자체 호스팅 쪽으로 기울어집니다. 이 가이드는 아키텍처, 실제로 동작하는 GitHub Actions 워크플로, 팀 규모별 하드웨어 사이징, 보안 모델, 그리고 팀이 두 번째 달에 맞닥뜨리는 운영상의 함정들을 살펴봅니다.',
    metaDescription:
      '자체 호스팅 로컬 LLM을 활용한 GitHub Actions 코드 리뷰: 아키텍처, 실제 동작하는 YAML, 팀 규모별 하드웨어 사이징, 보안 모델, GitHub Advanced Security 대비 손익분기점.',
    twitterDescription:
      '네트워크 내 GPU 서버에서 자체 호스팅 코드 리뷰. GitHub Actions가 Ollama를 호출하고, Qwen3-Coder가 PR을 리뷰하며, 코드베이스는 절대 외부로 나가지 않습니다. 설정, 사이징, 비용 교차점 상세 안내.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'NVIDIA L40S 48 GB',
      'NVIDIA A6000 Ada 48 GB',
      'NVIDIA H100 80 GB',
    ],
    audience:
      '엔지니어링 팀 리더, 플랫폼 엔지니어, GitHub Actions 또는 GitLab CI를 운영하며 소스 코드를 서드파티 API에 전송하지 않고 LLM 기반 코드 리뷰를 추가하고자 하는 DevOps 전문가. Docker, Linux, 자체 호스팅 러너에 대한 친숙함을 전제로 합니다.',
    readTime: '15분 분량',
    educationalLevel: 'Advanced',
    primaryTerm: '로컬 LLM CI/CD 코드 리뷰',
    targetKeywords: [
      '로컬 llm 코드 리뷰',
      '자체 호스팅 llm 코드 리뷰',
      'github actions 로컬 llm',
      'ollama github actions',
      '프라이빗 ai 코드 리뷰',
      'openai 없는 코드 리뷰',
    ],
    leadAnswerBlock:
      '**자체 호스팅 로컬 LLM 코드 리뷰는 세 가지 구성 요소를 사용합니다: Ollama(또는 vLLM)를 실행하는 전용 GPU 서버, 서버의 HTTP 엔드포인트에 diff를 POST하는 맞춤형 GitHub Action, 그리고 구조화된 판정(승인 / 댓글 / 차단)을 반환하는 리뷰 프롬프트. Qwen3-Coder 30B를 실행하는 RTX 4090(24 GB)은 15~25명의 개발자 팀을 편안하게 지원합니다; 48 GB 카드(L40S 또는 A6000 Ada)는 약 50명까지 확장됩니다; 100명 이상에는 H100급 하드웨어가 필요합니다. 경제성은 GitHub Advanced Security의 유료 좌석 15~25개 사이($19/개발자/월)에서 자체 호스팅 쪽으로 기울어집니다 — 정확한 교차점은 기존 용량 대비 하드웨어 구매 비용에 따라 달라집니다. 보안 이점은 실제입니다: 소스 코드는 절대 네트워크 밖으로 나가지 않으며, 감사 표면은 프로세스 하나와 로그 파일 하나이고, 패킷 캡처로 제로 이그레스를 증명할 수 있습니다.**',
    quickAnswerTop: {
      ko: {
        question: 'CI/CD에서 로컬 LLM을 코드 리뷰어로 어떻게 실행합니까?',
        answer:
          '코딩에 맞춰진 모델을 탑재한 Ollama(또는 vLLM, llama.cpp)가 실행되는 GPU 서버를 준비하십시오 — 2026년 5월 기준 Qwen3-Coder 30B가 표준입니다. 동일한 네트워크에 자체 호스팅 GitHub Actions 러너를 추가하거나, 사설 네트워크(Tailscale, WireGuard 또는 VPC 피어링)를 통해 기존 러너에서 GPU 서버의 HTTP 엔드포인트에 접근할 수 있도록 설정하십시오. PR의 diff를 가져와 리뷰 프롬프트와 함께 LLM 엔드포인트에 전송하고, 구조화된 응답(승인 / 댓글 / 차단)을 파싱하여 PR에 인라인 댓글을 다시 게시하는 작은 맞춤형 action을 작성하십시오. 모델은 절대 외부로 나가지 않으며, action은 다른 검사와 동일하게 동작합니다. 하드웨어 측면에서, Qwen3-Coder 30B를 탑재한 RTX 4090은 15~25명의 개발자를 처리하고, 48 GB 카드는 50명까지 확장되며, 100명 이상에는 H100급 하드웨어 또는 멀티 GPU가 필요합니다.',
        bullets: [
          '아키텍처: Ollama를 실행하는 GPU 서버 → 자체 호스팅 러너(또는 클라우드 러너에서 HTTP) → 맞춤형 GitHub Action → PR 댓글.',
          '기본 스택: Ollama + Qwen3-Coder 30B (Apache 2.0) + JavaScript 또는 composite 맞춤형 action.',
          '하드웨어: 1× RTX 4090 (24 GB) - 15~25명 개발자용; 1× L40S/A6000 Ada (48 GB) - 약 50명용; 1× H100 또는 멀티 GPU - 100명 이상용.',
          '경제성: GitHub Advanced Security($19/개발자/월) 대비 교차점은 약 15~25개 유료 좌석이며, 하드웨어 비용에 따라 다릅니다.',
          '보안: 소스 코드는 절대 네트워크 밖으로 나가지 않으며, 이그레스는 패킷 캡처로 증명 가능하고, 감사 표면은 프로세스 하나와 로그 하나입니다.',
          'GitLab CI도 동일하게 작동합니다 — action 대신 러너를 사용하지만 LLM 호출은 동일합니다.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '핵심 요점', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '아키텍처 비교', anchor: '#architecture-comparison' },
      { label: '권장 스택', anchor: '#recommended-stack' },
      { label: 'GitHub Actions 워크플로', anchor: '#workflow' },
      { label: '팀 규모별 하드웨어 사이징', anchor: '#hardware-sizing' },
      { label: '빌드 간 GPU 공유', anchor: '#gpu-sharing' },
      { label: 'GitHub Advanced Security 대비 비용 비교', anchor: '#cost-comparison' },
      { label: '보안 모델 및 감사 태세', anchor: '#security-model' },
      { label: '코드 리뷰를 위한 프롬프트 설계', anchor: '#prompt-design' },
      { label: '오탐 관리', anchor: '#false-positives' },
      { label: '두 번째 달에 나타나는 운영상 함정', anchor: '#operational-pitfalls' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**아키텍처는 세 가지 구성 요소입니다:** Ollama(또는 vLLM)를 실행하는 GPU 서버 → 네트워크를 통해 서버에 접근 가능한 CI 러너 → PR diff를 POST하고 구조화된 판정을 파싱하는 맞춤형 action. GitHub Actions, GitLab CI, Buildkite, Jenkins에서 동일한 형태로 작동합니다.',
          '**2026년 5월 기본 스택:** Ollama + Qwen3-Coder 30B (Apache 2.0) + 경량 맞춤형 GitHub Action. 총 인프라: GPU 서버 한 대, 러너 한 개.',
          '**하드웨어 사이징:** RTX 4090 (24 GB, ~$2,000) - 15~25명 개발자 처리; L40S 또는 A6000 Ada (48 GB, ~$7,000~8,000) - 50명까지; H100 (80 GB, $25,000+) 또는 멀티 GPU - 100명 이상.',
          '**경제성은 자체 호스팅 영역으로 기웁니다** — GitHub Advanced Security 유료 좌석 약 15~25개($19/개발자/월) 시점에서. RTX 4090 빌드는 해당 팀 규모에서 5~10개월 내 회수됩니다.',
          '**보안 이점은 실제이며 마케팅 용어가 아닙니다.** 소스 코드는 절대 네트워크 밖으로 나가지 않으며, 아웃바운드 이그레스는 `tcpdump`로 제로임을 증명할 수 있고, 감사 표면 전체는 Ollama 프로세스 하나와 로그 파일 하나입니다.',
          '**오탐은 운영 비용입니다.** 첫 달에 조정 사이클을 계획하십시오: 프롬프트 반복, 심각도 임계값, 그리고 시간이 지남에 따라 프롬프트가 개선될 수 있도록 리뷰어 피드백 수집 경로.',
          '**지연 시간은 허용 범위 내입니다.** 24 GB GPU에서 Qwen3-Coder 30B는 200줄 diff를 30초 이내에 리뷰합니다. PR 작성자의 대기 시간은 리뷰가 아닌 다른 CI 작업이 지배합니다.',
          '**인간 리뷰를 완전히 대체하지 마십시오.** 로컬 LLM은 초기 분류 게이트입니다 — 명백한 문제를 감지하고, 위험한 변경 사항을 표시하며, LLM이 아직 실수하는 판단을 위해 인간을 해방시킵니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**권장 모델:** Q4_K_M의 Qwen3-Coder 30B (~17 GB VRAM, Apache 2.0).',
          '**권장 런타임:** 설정 단순성을 위한 Ollama; 동일 GPU에서 더 높은 동시성이 필요한 경우 vLLM.',
          '**진지한 팀을 위한 최소 GPU:** RTX 4090 (24 GB). 더 작은 카드는 7B 모델을 사용하게 되며 리뷰 품질이 현저히 낮아집니다.',
          '**24 GB 단일 GPU의 동시성:** Qwen3-Coder 30B에서 편안하게 1~3개의 동시 리뷰; 그 이후부터는 대기열.',
          '**지연 시간 목표:** 200줄 diff에 30초 미만. 그 이상이 되면 PR 작성자 행동이 변화하고 리뷰가 무시됩니다.',
          '**감사 태세:** GPU 서버의 아웃바운드 제로 이그레스는 증명 가능하며, 표면 전체는 `ollama serve` + 단일 로그 파일입니다.',
          '**GitHub Advanced Security ($19/개발자/월) 대비 교차점:** 유료 좌석 15~25개가 5~10개월 내 RTX 4090 빌드를 커버합니다.',
          '**GitLab CI와 동등성:** 아키텍처 동일, 동일한 HTTP 엔드포인트를 호출하는 CI 작업으로 GitHub Action만 교체.',
        ],
      },
      architectureComparison: {
        id: 'architecture-comparison',
        title: 'CI 코드 리뷰를 위한 세 가지 실제 옵션: 아키텍처 비교',
        content:
          '**2026년 5월 기준으로 실질적으로 모든 PR 리뷰 설정을 다루는 세 가지 아키텍처가 있습니다.** 자체 호스팅 로컬 LLM은 그 중 하나입니다 — 소스 코드가 네트워크 밖으로 나갈 수 없거나 좌석 경제성이 고정 인프라를 선호할 때의 올바른 선택.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '자체 호스팅 로컬 LLM 코드 리뷰는 유료 좌석 15~25개에서 GitHub Advanced Security보다 빠르게 회수되며 소스 코드를 네트워크 내에 유지합니다 — 프라이버시 압박이나 좌석 수 제약이 있는 팀을 위한 올바른 아키텍처입니다.',
          },
          {
            type: 'plain-terms',
            text: 'CI에서 AI 코드 리뷰를 위한 세 가지 옵션이 있습니다. GitHub Advanced Security는 가장 활성화하기 쉽고 규모에서는 가장 비쌉니다. 클라우드 LLM API(OpenAI, Anthropic)는 시작하기에 저렴하고 각 diff를 서드파티에 전송합니다. 자체 호스팅 로컬 LLM은 설정 비용이 가장 높으며 코드베이스를 외부 경계 내에 유지하는 유일한 옵션입니다 — 그리고 유료 좌석 약 15~25개에서 1년 동안 세 가지 중 가장 경제적이 됩니다.',
          },
        ],
        columns: ['아키텍처', '설정 복잡성', '비용 (개발자 10명)', '비용 (개발자 50명)', 'PR 지연 시간', '적합한 경우'],
        rows: [
          {
            '아키텍처': 'GitHub Advanced Security',
            '설정 복잡성': '낮음 (토글 하나)',
            '비용 (개발자 10명)': '$190/월',
            '비용 (개발자 50명)': '$950/월',
            'PR 지연 시간': '1분 미만 (관리형)',
            '적합한 경우': '프라이버시 제약 없이 유료 좌석 ~15개 미만인 팀',
          },
          {
            '아키텍처': '클라우드 LLM API (OpenAI / Anthropic)',
            '설정 복잡성': '낮음~중간 (API 키 + action)',
            '비용 (개발자 10명)': '~$50~200/월 (사용량)',
            '비용 (개발자 50명)': '~$300~1,200/월 (사용량)',
            'PR 지연 시간': '수초',
            '적합한 경우': '소스 코드를 서드파티 API에 전송하는 것이 괜찮은 팀',
          },
          {
            '아키텍처': '전용 GPU의 로컬 LLM',
            '설정 복잡성': '중간~높음 (GPU 서버 + 러너 + action)',
            '비용 (개발자 10명)': '~$2,000 하드웨어 (일회성)',
            '비용 (개발자 50명)': '~$7,000+ 하드웨어 (일회성)',
            'PR 지연 시간': '10~30초 (단일 GPU)',
            '적합한 경우': '프라이버시 요건, 유료 좌석 15개 이상, EU 컴플라이언스 환경의 팀',
          },
          {
            '아키텍처': '공유 인프라의 로컬 LLM (기존 GPU)',
            '설정 복잡성': '중간 (러너 + action만)',
            '비용 (개발자 10명)': '$0 한계 비용 (기존 용량)',
            '비용 (개발자 50명)': '$0 한계 비용 (기존 용량)',
            'PR 지연 시간': '가변 (경합에 따라)',
            '적합한 경우': 'ML 또는 분석용 GPU 인프라를 이미 운영하는 팀',
          },
        ],
      },
      recommendedStack: {
        id: 'recommended-stack',
        title: '권장 스택: Ollama + Qwen3-Coder + 경량 GitHub Action',
        content:
          '**가장 단순한 프로덕션급 스택은 세 가지 구성 요소로 이루어져 있습니다.** 각각은 오픈 소스이고 무료이며 잘 문서화되어 있습니다; 이들 간의 통합 표면은 HTTP입니다.',
        items: [
          '**GPU 서버**에 **Ollama**(또는 높은 동시성을 위한 vLLM) 탑재. Ollama는 기본적으로 `localhost:11434`에 OpenAI 호환 HTTP API를 노출합니다; 러너에 노출하기 전에 사설 인터페이스 또는 인증이 있는 리버스 프록시에 바인딩하십시오.',
          '**코딩 조정 모델:** Q4_K_M의 **Qwen3-Coder 30B**는 2026년 5월 기준 표준입니다 — 코딩을 위한 가장 강력한 오픈 웨이트 방향, 256K 컨텍스트, Apache 2.0 라이선스, 24 GB GPU에 적합합니다. 8~16 GB GPU의 경우 Qwen3-Coder 7B를 사용하되 리뷰 품질이 현저히 낮아짐을 인식하십시오.',
          '**CI 통합:** GPU 서버와 동일한 네트워크의 자체 호스팅 GitHub Actions 러너, 또는 사설 네트워크(Tailscale, WireGuard 또는 VPC 피어링)를 통해 GPU 서버에 접근하는 기존 GitHub 호스팅 러너.',
          '**맞춤형 GitHub Action** (JavaScript 또는 composite) — GitHub API로 PR diff를 가져와 리뷰 프롬프트와 함께 Ollama 엔드포인트에 전송하고, 구조화된 응답을 파싱하여 PR에 인라인 댓글을 다시 게시합니다.',
          '**선택 사항:** 파일 해시 + diff 해시를 키로 하는 소규모 Redis 또는 SQLite 캐시 — 이후 CI 실행에서 변경되지 않은 파일의 재리뷰를 방지합니다.',
          '**GitLab과 동등성:** 동일한 아키텍처, GitHub Action을 대체하는 GitLab CI 작업. LLM 호출은 동일합니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '`ollama serve`를 사설 네트워크 인터페이스에 바인딩하십시오(또는 러너가 동일한 호스트에 있는 경우 `127.0.0.1`). 호스트 간 노출 전에 인증을 앞에 배치하십시오. 인증 없는 기본 `OLLAMA_HOST=0.0.0.0:11434`는 단일 머신 실험에는 괜찮지만 다른 모든 맥락에서는 보안 실패입니다.',
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: '실제로 동작하는 GitHub Actions 워크플로',
        content:
          '**최소 실행 가능 워크플로는 약 50줄의 YAML입니다.** 이 템플릿은 PR이 열리거나 동기화될 때 실행되어 diff를 가져오고, Ollama를 호출하며, 다시 댓글을 게시합니다. 프로덕션 배포에서는 캐싱, 심각도 임계값, 그리고 "차단" 판정 시 PR을 막는 옵션이 추가됩니다.',
        codeLanguage: 'yaml',
        codeBlock: `# .github/workflows/local-llm-review.yml
name: Local LLM Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: self-hosted   # OLLAMA_HOST에 접근 가능한 모든 러너
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Generate diff
        id: diff
        run: |
          git diff origin/\${{ github.base_ref }}...HEAD > /tmp/pr.diff
          echo "size=$(wc -c < /tmp/pr.diff)" >> "$GITHUB_OUTPUT"

      - name: Call local LLM for review
        id: review
        env:
          OLLAMA_HOST: \${{ secrets.OLLAMA_HOST }}   # 예: http://gpu-server.internal:11434
        run: |
          DIFF=$(jq -Rs . < /tmp/pr.diff)
          curl -sS "$OLLAMA_HOST/api/chat" \
            -H 'Content-Type: application/json' \
            -d "{
              \"model\": \"qwen3-coder:30b\",
              \"stream\": false,
              \"format\": \"json\",
              \"messages\": [
                {\"role\": \"system\", \"content\": \"You are a senior code reviewer. Return JSON: {verdict: 'approve'|'comment'|'block', summary: string, comments: [{path, line, severity, message}]}\"},
                {\"role\": \"user\", \"content\": $DIFF}
              ]
            }" > /tmp/review.json
          echo "verdict=$(jq -r '.message.content | fromjson | .verdict' < /tmp/review.json)" >> "$GITHUB_OUTPUT"

      - name: Post review comment
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const review = JSON.parse(JSON.parse(fs.readFileSync('/tmp/review.json')).message.content);
            const body = \`### Local LLM Review: \\\`\${review.verdict}\\\`\n\n\${review.summary}\`;
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body
            });

      - name: Block on critical verdict
        if: steps.review.outputs.verdict == 'block'
        run: exit 1
`,
        items: [
          '러너는 네트워크를 통해 `OLLAMA_HOST`에 접근할 수 있어야 합니다 — 동일한 VPC의 자체 호스팅이거나, GPU 서버가 다른 곳에 있는 경우 Tailscale / WireGuard를 통해.',
          '시스템 프롬프트는 action이 판정에 따라 깔끔하게 분기할 수 있도록 구조화된 JSON 응답을 강제합니다. `format: "json"`과 프롬프트의 엄격한 스키마 없이는 자유 형식 출력 파싱에 운영 시간의 30%를 소비하게 되고 오류 모드가 미묘해집니다.',
          '`fetch-depth: 0`으로 체크아웃하는 것은 베이스 브랜치 대비 실제 diff를 계산하는 데 필요합니다 — 얕은 체크아웃은 잘못된 diff를 생성합니다.',
          'PR당 수정된 코드 줄이 ~50K 이상인 저장소의 경우 전송 전에 diff를 잘라내거나 분할하십시오. Qwen3-Coder 30B의 256K 컨텍스트는 너그럽지만, 실제 작업 컨텍스트는 64K~128K에 더 가깝습니다 ([2026년 최고의 로컬 코딩 모델](/ko/power-local-llm/best-local-coding-models-2026) 참조).',
          '프롬프트 설계의 심층 내용 — 시스템 프롬프트 대 사용자 프롬프트, 예시, 구조화된 출력 — 은 [시스템 프롬프트 대 사용자 프롬프트: 차이점은 무엇입니까?](/ko/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)를 참조하십시오.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 워크플로는 의도적으로 최소한입니다. 프로덕션 배포에는 다음이 추가됩니다: 변경되지 않은 파일의 재리뷰를 건너뛰기 위한 파일 해시 + diff 해시 캐시, 심각도 임계값(오직 `severity >= "high"`에서만 차단), 단일 요약 댓글 대신 인라인 댓글 게시, 언어별 프롬프트 변형, 그리고 시간이 지남에 따라 프롬프트를 개선하기 위한 리뷰어 피드백 수집.',
          },
        ],
      },
      hardwareSizing: {
        id: 'hardware-sizing',
        title: '팀 규모별 하드웨어 사이징',
        content:
          '**RTX 4090 (24 GB)은 개발자 15~25명의 팀을 편안하게 처리합니다.** 단일 GPU의 병목은 리뷰당 처리량이 아니라 PR 집중 시간(월요일 아침, 스프린트 종료)의 동시성입니다. 다음 사이징 규칙은 Q4_K_M의 Qwen3-Coder 30B와 50~500줄의 일반적인 PR diff를 가정합니다.',
        columns: ['팀 규모', 'GPU', 'VRAM', '동시 리뷰', '예상 가격 (2026년 5월)'],
        rows: [
          { '팀 규모': '개발자 ~5명', 'GPU': 'RTX 4070 / 4070 Ti', 'VRAM': '12~16 GB', '동시 리뷰': '1개 (Qwen3-Coder 7B만 가능)', '예상 가격 (2026년 5월)': '$600~900' },
          { '팀 규모': '개발자 15~25명', 'GPU': 'RTX 4090 / 5090', 'VRAM': '24~32 GB', '동시 리뷰': '1~3개 (Qwen3-Coder 30B)', '예상 가격 (2026년 5월)': '$2,000~2,500' },
          { '팀 규모': '개발자 25~50명', 'GPU': 'L40S / A6000 Ada', 'VRAM': '48 GB', '동시 리뷰': '3~6개', '예상 가격 (2026년 5월)': '$7,000~8,500' },
          { '팀 규모': '개발자 50~100명', 'GPU': '2× RTX 4090 또는 1× H100', 'VRAM': '48 GB / 80 GB', '동시 리뷰': '6~10개', '예상 가격 (2026년 5월)': '$5,000 (2× 4090) 또는 $25,000+ (H100)' },
          { '팀 규모': '개발자 100명 이상', 'GPU': '멀티 GPU H100 또는 H200', 'VRAM': '160 GB 이상', '동시 리뷰': 'vLLM으로 10개 이상', '예상 가격 (2026년 5월)': '$50,000 이상' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '개발자 50명 임계값을 초과하는 팀은 Ollama에서 vLLM으로 전환하십시오. Ollama는 사용 편의성을 우선시하고, vLLM은 공유 GPU에서의 처리량을 우선시합니다. 동일한 Qwen3-Coder 30B 모델이 양쪽 모두에서 작동합니다 — 추론 서버만 변경됩니다.',
          },
        ],
      },
      gpuSharing: {
        id: 'gpu-sharing',
        title: '빌드 및 다른 워크로드 간 GPU 공유',
        content:
          '**코드 리뷰 전용 GPU가 가장 단순한 아키텍처이지만 유일한 방법은 아닙니다.** ML 추론이나 학습을 위한 GPU 인프라를 이미 운영하는 팀은 공유할 수 있지만, 경합으로 인해 리뷰 지연 시간이 급증하는 트레이드오프가 있습니다.',
        items: [
          '**리뷰 전용 전용 GPU:** 가장 단순한 모델. 지연 시간이 예측 가능하고, 용량 계획이 직관적이며, 오류 모드가 격리됩니다. GPU 인프라를 아직 운영하지 않는 팀에 대한 권장 사항.',
          '**ML 추론과 공유하는 GPU:** 추론 워크로드가 안정적인 엔벨로프를 가진 경우(예: 4~6 GB에 맞는 소규모 임베딩 서비스) 실현 가능합니다. 리뷰 모델이 나머지 VRAM을 차지합니다. 이 패턴에서 스케줄링 충돌은 드뭅니다.',
          '**ML 학습과 공유하는 GPU:** 강력하게 권장하지 않습니다. 학습 작업은 VRAM을 한계까지 밀어붙여 리뷰 모델을 굶기고, 개발자의 시스템 신뢰를 침식하는 30~120초의 리뷰 지연 시간을 초래합니다.',
          '**페이지드 어텐션을 갖춘 vLLM:** 높은 동시성으로 LLM을 서빙하기 위해 특별히 설계되었습니다. Ollama 하에서 1~3개의 동시 리뷰를 처리하는 동일한 RTX 4090이 vLLM 하에서 4~8개를 처리할 수 있으며, 더 복잡한 설정이 트레이드오프입니다. 개발자 25명 이상부터 가치가 있습니다.',
          '**H100의 멀티 테넌트:** 개발자 100명 이상 규모에서는 H100을 MIG 슬라이스로 파티셔닝하거나 테넌트별 할당량으로 vLLM을 실행하십시오. 이는 플랫폼 엔지니어링 영역입니다; 즉흥적으로 구성하지 마십시오.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'GitHub Advanced Security 대비 비용 비교',
        content:
          '**경제성은 유료 좌석 약 15~25개에서 자체 호스팅 쪽으로 기울어집니다.** 이것은 1년 상각 비교입니다; 기간이 길수록 자체 호스팅이 더 유리해집니다.',
        items: [
          '**GitHub Advanced Security (Code Security):** 정가 $19/개발자/월 (GitHub 가격 페이지에서 확인; 엔터프라이즈 고객에게는 볼륨 할인이 제공됩니다).',
          '**클라우드 LLM API (예: OpenAI, Anthropic):** 일반적인 PR 볼륨에서 활성 개발자당 대략 $50~200/월; 코드베이스 크기와 리뷰 프롬프트 설계에 따라 크게 달라집니다.',
          '**자체 호스팅 로컬 LLM, RTX 4090 빌드:** 하드웨어 일회성 약 $2,500 (GPU + 기본 서버 섀시). 전력: 유휴 시 ~50W, 부하 시 ~350W — 일반적인 사용으로 전기요금 월 약 $20~30. 좌석 수수료 없음.',
          '**개발자 10명 교차점:** GHAS $190/월 대 자체 호스팅 운영비 $25/월 + $2,500 자본 지출. 자본 지출은 약 14개월에 상각됩니다.',
          '**개발자 25명 교차점:** GHAS $475/월 대 자체 호스팅 운영비 $25/월 + $2,500 자본 지출. 자본 지출은 약 5~6개월에 상각됩니다.',
          '**개발자 50명 교차점:** GHAS $950/월 대 자체 호스팅 운영비 $40/월 + $7,500 자본 지출 (48 GB GPU). 자본 지출은 약 8개월에 상각됩니다.',
          '**자본 지출 수치가 계산을 지배합니다.** 이것을 위해 특별히 GPU를 구매한다면 상각이 실제로 일어납니다. 기존 GPU 용량이 있다면 한계 비용은 0에 더 가깝고 자체 호스팅이 즉시 이깁니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 수치들은 정가 비교입니다. 대기업을 위한 협상된 GHAS 가격은 교차점을 이동시키고, 기존 GPU 용량은 그것을 제거합니다. 하드웨어 구매에 헌신하기 전에 실제 비용으로 계산을 다시 하십시오.',
          },
        ],
      },
      securityModel: {
        id: 'security-model',
        title: '보안 모델 및 감사 태세',
        content:
          '**주요 보안 주장 — "소스 코드는 절대 네트워크 밖으로 나가지 않는다" — 는 사실이고, 증명 가능하며, 이 아키텍처의 가장 강력한 논거입니다.** 감사 표면은 조달 검토에서 방어할 수 있을 만큼 충분히 작습니다.',
        items: [
          '**모델은 action이 전송하는 diff만 봅니다.** 텔레메트리 없음, 숨겨진 네트워크 호출 없음. GPU 서버의 아웃바운드 인터페이스에서 `tcpdump` 또는 `nft monitor`로 확인 가능 — 정상 운영 상태에서는 내부가 아닌 호스트로 향하는 아웃바운드 패킷이 제로여야 합니다.',
          '**전체 감사 표면은 프로세스 하나와 로그 파일 하나입니다.** `ollama serve`가 전체 LLM 스택입니다. 그것의 로그(요청 본문, 지연 시간, 모델 로드 이벤트)가 감사 기록입니다. 쿼리할 SaaS 대시보드 없음, 읽을 서드파티 보존 정책 없음.',
          '**네트워크 격리는 직관적입니다.** `ollama serve`를 사설 인터페이스에 바인딩하고, mTLS 또는 공유 시크릿 인증이 있는 리버스 프록시를 앞에 배치하며, GPU 서버의 네트워크 네임스페이스에서 CI 러너 서브넷 외의 아웃바운드 트래픽을 거부하십시오. LLM별 마법 없는 표준 제로 트러스트 패턴.',
          '**모델 가중치는 제공자가 서명한 정적 아티팩트입니다.** Ollama로 한 번 다운로드하고, 다이제스트를 고정하면 모델은 운영자 조치 없이 변경될 수 없습니다. 이것은 업스트림 모델이 자동으로 교체될 수 있는 SaaS API보다 더 강력한 공급망 스토리입니다.',
          '**컴플라이언스 태세:** 데이터 제로 이그레스는 SOC 2, ISO 27001, GDPR, EU AI Act 제한적 위험 분류에 대해 문서화하기 쉽습니다. 자체 호스팅 컴플라이언스의 가장 어려운 부분은 일반적으로 추론 서버 자체를 문서화하는 것이며, Ollama와 vLLM 모두 잘 문서화되어 있습니다.',
          '**모델은 여전히 코드를 봅니다.** 자체 호스팅은 서드파티로부터 프라이빗하다는 의미이지, 모델로부터 프라이빗하다는 의미가 아닙니다. 내부자 위협 시나리오(GPU 서버 접근 권한이 있는 엔지니어가 이전 PR diff가 포함된 로그를 읽는 것)는 여전히 범위 내에 있습니다; 로그를 순환하고 그에 따라 접근을 제한하십시오.',
        ],
      },
      promptDesign: {
        id: 'prompt-design',
        title: '코드 리뷰를 위한 프롬프트 설계',
        content:
          '**오탐률의 가장 중요한 단일 결정 요인은 시스템 프롬프트입니다.** 막연한 "이 코드를 리뷰하라" 프롬프트는 막연한 리뷰 댓글을 생성하고, 심각도 임계값과 구조화된 출력이 있는 구체적인 프롬프트는 실행 가능한 피드백을 생성합니다.',
        items: [
          '**구조화된 출력은 협상 불가능합니다.** 엄격한 스키마(`verdict`, `summary`, `comments[]`)로 JSON을 강제하십시오. 없이는 action이 자유 형식 출력 파싱에 코드의 30%를 소비하고 오류 모드가 미묘해집니다.',
          '모델의 구조화된 출력 컴플라이언스에 대한 전체 가이드는 [구조화된 출력 및 JSON 모드](/ko/prompt-engineering/structured-output-and-json-mode)를 참조하십시오.',
          '**심각도 임계값은 action이 아닌 프롬프트에 있어야 합니다.** 모델에게 `critical`, `high`, `medium`, `low`가 무엇을 의미하는지 알려주고, 명시적으로 요청받지 않는 한 낮은 심각도 결과를 필터링하도록 하십시오. 이것은 자유 형식 심각도 필드에 대한 사후 필터링보다 훨씬 더 신뢰할 수 있습니다.',
          '**프롬프트를 예시로 고정하십시오.** 실제 diff와 이상적인 리뷰 JSON이 있는 1~2샷 프롬프트는 동일한 모델과 동일한 diff 크기에 대해 제로샷을 대폭 능가합니다.',
          '**"리뷰"와 "댓글" 의도를 구분하십시오.** 리뷰어 댓글("이것을 헬퍼로 추출하는 것을 고려하십시오")과 차단자("이것은 SQL 인젝션을 도입합니다")는 CI에서 다른 조치가 필요합니다. 구조화된 출력에 레이블을 붙이고 action이 차단자에서만 차단하도록 하십시오.',
          '**언어별 프롬프트 변형은 일정 규모부터 도움이 됩니다.** 다국어 코드베이스는 관련 언어 관용구(파이써닉 대 관용적 Rust)를 참조하는 프롬프트에서 이익을 얻습니다. 개발자 ~25명 미만에서는 선택 사항이며, 그 이상에서는 가치가 있습니다.',
          '프롬프트 엔지니어링 기초 심층 내용 — 시스템 대 사용자 프롬프트, 구조화된 출력, 퓨샷 프롬프팅 — 은 [시스템 프롬프트 대 사용자 프롬프트: 차이점은 무엇입니까?](/ko/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)를 참조하십시오.',
        ],
      },
      falsePositives: {
        id: 'false-positives',
        title: '개발자 신뢰를 침식하지 않으면서 오탐 관리하기',
        content:
          '**오탐은 LLM 코드 리뷰의 운영 비용입니다.** 5% 비율은 허용 가능하고, 20%는 허용할 수 없으며, 차이는 주로 프롬프트 반복과 피드백 루프에 있지 모델에 있지 않습니다.',
        items: [
          '**"차단" 임계값을 높게 설정하십시오.** 사소한 린트 문제에서 `차단` 판정이 발동되면 개발자들이 검사를 무시하도록 훈련됩니다. `차단`은 보안 문제, 실패한 테스트, 명백한 정확성 오류에만 예약하십시오.',
          '**비차단 댓글을 비용이 낮게 만드십시오.** 모델이 확신하지 못하는 인라인 댓글은 ("잠정적" / "고려하십시오")로 레이블되어야 하므로 작성자가 의식 없이 빠르게 무시할 수 있습니다.',
          '**첫 달에 피드백 루프를 구축하십시오.** 각 리뷰 댓글에 반응(👍 / 👎)을 추가하십시오. 주기적으로(주 1회가 효과적) 👎를 검토하고 가장 흔한 오탐 카테고리에 대한 명시적인 "X를 플래그하지 마십시오" 지시로 시스템 프롬프트를 업데이트하십시오.',
          '**PR당 댓글 볼륨을 제한하십시오.** 단일 PR은 LLM으로부터 5~10개 이상의 댓글을 받아서는 안 됩니다; 그 이상이 되면 신호 대 잡음비가 무너집니다. 프롬프트 수준에서 action을 제한하십시오("최대 N개의 댓글을 반환하십시오").',
          '**주간 판정-대-병합 상관관계를 추적하십시오.** `차단` 판정의 80%가 어쨌든 병합된다면 임계값이 너무 공격적입니다. `댓글` 판정의 0%가 인간 조치를 받는다면 프롬프트가 노이즈를 생성하고 있습니다.',
        ],
      },
      operationalPitfalls: {
        id: 'operational-pitfalls',
        title: '두 번째 달에 나타나는 운영상 함정',
        content:
          '**설정은 주목을 받고, 운영은 무시됩니다.** 다음 실패들은 초기 허니문 이후 팀이 프로젝트를 포기하게 만드는 것들입니다.',
        items: [
          '**모델 업데이트가 프롬프트를 깨뜨립니다.** Qwen3-Coder의 새 버전이 미묘하게 출력 형식을 바꾸고, CI에서 구조화된 JSON 파싱이 실패하고, 리뷰가 게시를 중단합니다. `ollama show <model> --modelfile`로 모델 다이제스트를 고정하고, 프로모션 전에 스테이징 브랜치에서 업데이트하십시오.',
          '**장기간 가동 시 GPU 메모리 단편화.** 24/7 가동하는 GPU 서버는 몇 주간 운영 후 VRAM을 단편화하여 새 할당을 거부할 수 있습니다. cron 작업으로 주 1회 `ollama serve`를 재시작하십시오; 저렴하고 이 오류 모드를 완전히 방지합니다.',
          '**CI 러너 경합.** LLM 서버와 다른 CI 작업을 모두 호스팅하는 자체 호스팅 러너는 빌드 부하 시 리뷰 지연 시간이 급증하는 것을 볼 수 있습니다. 팀 규모가 개발자 ~25명을 초과하면 러너와 GPU 서버를 분리하십시오.',
          '**Diff 크기 증가.** PR 크기가 점점 커지고; 결국 PR이 모델의 실제 작업 컨텍스트를 초과하여 리뷰가 자동으로 저하됩니다. ~30K 토큰 이상의 diff를 분할하거나 잘라내고 작성자에게 경고하는 action의 가드를 추가하십시오.',
          '**전력 및 냉각.** 지속적인 부하의 RTX 4090은 추론 시 ~350W를 소비하고 상당한 열을 발생시킵니다. 능동적인 냉각이 없는 캐비닛 크기의 서버실은 GPU를 스로틀링하고, 스로틀링은 지연 시간 비용이 들며, 개발자들이 알아챕니다.',
          '**잊혀진 로그 순환.** Ollama는 기본적으로 각 요청 본문을 로깅합니다. 3개월의 PR 리뷰 후 로그 파일은 크고 과거 PR diff를 일반 텍스트로 포함합니다. 주 1회 로그를 순환하십시오; 데이터 보존 정책에 따라 아카이브하거나 삭제하십시오.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '로컬 LLM 코드 리뷰 설정 시 흔한 실수',
        items: [
          '**실수 1: 16 GB GPU에서 7B 모델로 시작하기.** Qwen3-Coder 7B 리뷰는 30B보다 현저히 나쁩니다; 개발자들은 빠르게 신뢰를 잃고 프로젝트가 포기됩니다. 30B를 호스팅할 수 없다면, 예산을 확보하는 동안 처음 6개월간 GPU를 업그레이드하거나 클라우드 API를 사용하십시오.',
          '**실수 2: 첫날부터 `차단` 판정으로 PR 차단하기.** 첫 달은 보정 기간입니다; 오탐률을 측정할 때까지 모든 출력을 자문으로 취급하십시오. ~5% 미만으로 비율이 낮아진 후에만 차단으로 프로모션하십시오.',
          '**실수 3: 인증 없이 `ollama serve`를 `0.0.0.0:11434`에 노출하기.** 이것은 Redis를 공용 인터페이스에 바인딩하는 것에 해당하는 LLM 시대의 등가물입니다. 사설 인터페이스에 바인딩하고 호스트 간 노출 전에 인증을 앞에 배치하십시오.',
          '**실수 4: 캐시 생략하기.** 각 CI 실행에서 변경되지 않은 파일을 다시 리뷰하면 일반적인 PR에서 추론 예산의 ~80%를 낭비합니다. 소규모 파일 해시 + diff 해시 캐시(Redis 또는 SQLite)는 리뷰 지연 시간과 GPU 부하를 급격히 줄입니다.',
          '**실수 5: 동일한 GPU에서 학습 작업 실행하기.** 학습은 VRAM을 한계까지 밀어붙여 리뷰 모델을 굶깁니다. 별도의 GPU를 사용하거나, 꼭 공유해야 한다면 PR 피크 시간과 겹치지 않는 엄격한 일정으로 학습을 실행하십시오.',
          '**실수 6: 피드백 루프 없이 GitHub Action 구축하기.** 👍/👎 반응이 없는 리뷰 시스템은 개선될 수 없습니다. 첫 주에 루프를 구축하고, 데이터를 수집하며, 월별로 프롬프트를 반복하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Ollama 문서](https://github.com/ollama/ollama/blob/main/docs/api.md) — `/api/chat`, `/api/generate`, 구조화된 출력, 모델 관리에 대한 공식 HTTP API 참조.',
          '[vLLM 문서](https://docs.vllm.ai/) — 고성능 추론 서버 문서; 높은 동시성을 가진 팀을 위한 Ollama 이후 업그레이드 경로.',
          '[GitHub Actions 문서](https://docs.github.com/en/actions) — 자체 호스팅 러너, 시크릿, 위 워크플로에서 사용된 Actions JavaScript SDK에 대한 공식 참조.',
          '[GitHub Advanced Security 가격](https://github.com/pricing) — 비용 비교를 위한 정가 참조; 실제 협상된 조건과 대조하여 확인하십시오.',
          '[Qwen3-Coder 모델 카드](https://huggingface.co/Qwen/Qwen3-Coder-30B) — 권장 리뷰 모델의 아키텍처, 컨텍스트 창, 라이선스 조건.',
          '[GitLab CI/CD 참조](https://docs.gitlab.com/ee/ci/) — GitLab 팀을 위한 동등한 참조; 워크플로의 LLM 호출 부분은 동일합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '단일 GPU 서버가 개발자 50명의 CI를 처리할 수 있습니까?',
            a: '단일 24 GB GPU(RTX 4090)는 개발자 15~25명을 편안하게 처리합니다; 개발자 50명에는 48 GB 카드(L40S, A6000 Ada)가 필요하거나 동일 하드웨어에서 Ollama에서 vLLM으로 전환해야 합니다. 병목은 PR 집중 시간(월요일 아침, 스프린트 종료)의 동시성이며, 정상 상태 처리량이 아닙니다. 개발자 100명 이상에는 멀티 GPU 또는 H100급 하드웨어를 계획하십시오.',
          },
          {
            q: '로컬 코드 리뷰가 PR 지연 시간에 영향을 줍니까?',
            a: '일반적으로 그렇지 않습니다 — 단일 24 GB GPU에서 일반적인 200줄 diff의 리뷰 지연 시간은 10~30초이며, PR 작성자의 대기 시간은 훨씬 오래 걸리는 다른 CI 작업(빌드, 테스트, 린트)이 지배합니다. 예외는 매우 큰 PR(diff 토큰 ~30K 이상)이며, 리뷰가 60~90초 걸릴 수 있습니다; action 수준에서 그것들을 잘라내거나 분할하십시오.',
          },
          {
            q: '모델이 보는 것을 어떻게 감사합니까?',
            a: 'Ollama는 기본적으로 로그 파일에 각 요청 본문을 기록합니다(위치는 OS에 따라 다릅니다; systemd에서 `journalctl -u ollama` 또는 Ollama 로그 디렉토리를 확인). 리뷰에 가는 각 PR diff가 그 로그에 있습니다. GPU 서버의 아웃바운드 인터페이스에서 `tcpdump`와 결합하여 제로 데이터 이그레스를 증명합니다. 전체 감사 표면은 프로세스 하나와 로그 파일 하나입니다 — SaaS 코드 리뷰 API보다 감사하기 훨씬 단순합니다.',
          },
          {
            q: '로컬 모델 출력을 기반으로 PR을 차단할 수 있습니까?',
            a: '예. action은 `verdict` 필드를 반환합니다; 판정이 `차단`이면 GitHub Action이 0이 아닌 코드로 종료하고, 이로 인해 검사가 실패하며, 브랜치 보호 규칙이 검사 통과를 요구하면 병합이 차단됩니다. 권장 사항은 첫 달 동안 `차단`을 비활성화된 채로 시작하고(자문 전용), 오탐률을 측정하며, ~5% 미만으로 낮아진 후 차단으로 프로모션하는 것입니다.',
          },
          {
            q: 'GitLab CI와 함께 작동합니까?',
            a: '예 — 아키텍처가 동일합니다. GitHub Action을 Ollama 엔드포인트에 동일한 `curl`을 실행하고 GitLab API를 통해 병합 요청에 응답을 다시 게시하는 GitLab CI 작업으로 교체하십시오. 모델, 프롬프트, 캐시, 보안 모델, 하드웨어 사이징이 모두 동일합니다. Bitbucket Pipelines, Jenkins, Buildkite도 동일하게 작동합니다.',
          },
          {
            q: '파이프라인을 깨뜨리지 않고 모델을 어떻게 업데이트합니까?',
            a: '프로덕션 CI가 정확한 버전을 사용하도록 `ollama show <model> --modelfile`로 모델 다이제스트를 고정하십시오. 새 모델 버전이 도착하면 스테이징 서버에 다운로드하고, 대표적인 소규모 PR diff 세트를 실행하며, 구조화된 출력을 프로덕션 버전과 비교하고, 회귀 테스트 세트가 통과한 후에만 프로모션하십시오. 모델 업데이트를 다른 의존성 업데이트와 동일하게 취급하십시오.',
          },
          {
            q: '리뷰 외에 코드 생성에도 사용할 수 있습니까?',
            a: '예, 하지만 워크로드가 동일한 GPU를 경쟁하며 지연 시간 특성이 다릅니다. 코드 리뷰는 비동기적이고 30초 응답을 허용합니다; 에디터에서의 대화형 코드 생성은 2초 미만의 지연 시간이 필요합니다. 권장 패턴: 개발자 머신의 에디터 자동 완성에는 더 작은 모델(Qwen3-Coder 7B)을 사용하고, CI에서 리뷰급 워크로드를 위해 전용 GPU 서버를 예약하십시오.',
          },
          {
            q: 'GPU 서버의 보안 모델은 무엇입니까?',
            a: '다른 내부 서비스처럼 취급하십시오: 추론 서버를 사설 인터페이스에 바인딩하고, 앞에 인증(mTLS, 공유 시크릿 토큰 또는 VPN 전용 접근)을 배치하며, 기본 거부로 아웃바운드 트래픽을 제한하고, 자격 증명을 순환하십시오. LLM별 추가 사항은 모델 가중치의 출처를 감사하는 것입니다 — 다이제스트를 고정하고, 소스를 문서화하며, 주기적인 패킷 캡처로 제로 데이터 이그레스를 확인하십시오.',
          },
          {
            q: '여러 저장소가 GPU 서버를 공유할 수 있습니까?',
            a: '예 — GPU 서버는 단지 HTTP 엔드포인트일 뿐입니다. 서버에 용량이 있는 한 임의의 수의 저장소가 호출할 수 있습니다. 활성 저장소가 10개 이상인 조직의 경우, 하나의 시끄러운 저장소(대형 모노레포, 빈번한 강제 푸시)가 다른 저장소를 굶기지 않도록 Ollama 앞의 리버스 프록시에 저장소별 속도 제한을 추가하십시오.',
          },
          {
            q: 'CI에서 오탐을 어떻게 관리합니까?',
            a: '세 가지 레이어. 첫째, 프롬프트 설계 — 높은 심각도 임계값을 설정하고, 구조화된 출력을 강제하며, 잠정적 결과에 레이블을 붙이십시오. 둘째, action 수준 필터링 — `severity >= "high"`에서만 `차단`; 중간/낮음은 댓글로 표시하십시오. 셋째, 피드백 루프 — 개발자가 각 댓글에 👍/👎로 반응하게 하고, 주 1회 👎를 검토하여 가장 흔한 오탐 카테고리를 억제하도록 시스템 프롬프트를 업데이트하십시오. 한 달의 조정 후 5~10% 비율을 예상하십시오; 지속적인 반복으로 5% 미만이 달성 가능합니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 LLM으로 GitHub Copilot 대체하기](/ko/power-local-llm/replace-github-copilot-with-local-llm) — 자체 호스팅 AI 도구를 고려하는 팀을 위한 더 넓은 비용 대체 맥락.',
          '[Continue.dev vs Cline vs Aider: 2026년 최고의 로컬 코딩 에이전트](/ko/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 파이프라인 대 에디터 대화형 작업에서 무엇이 작동하는지; 모델 아래의 하네스 레이어.',
          '[2026년 최고의 로컬 코딩 모델](/ko/power-local-llm/best-local-coding-models-2026) — 방정식의 모델 측면: Qwen3-Coder, DeepSeek, Codestral, 라이선스 환경.',
          '[시스템 프롬프트 대 사용자 프롬프트: 차이점은 무엇입니까?](/ko/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — 리뷰 시스템 프롬프트를 위한 프롬프트 엔지니어링 기초.',
          '[llama.cpp vs Ollama vs vLLM](/ko/local-llms/llamacpp-vs-ollama-vs-vllm) — 추론 엔진 비교; vLLM은 높은 동시성을 가진 팀을 위한 Ollama 이후 업그레이드 경로.',
          '[Power Local LLM 허브](/ko/power-local-llm) — 전체 가이드 라이브러리.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'CI/CD에서 로컬 LLM 활용: 클라우드 없는 자동 코드 리뷰',
      description: '자체 호스팅 로컬 LLM을 활용한 GitHub Actions 코드 리뷰: 아키텍처, 실제 동작하는 워크플로 YAML, 팀 규모별 하드웨어 사이징, 보안 모델, GitHub Advanced Security 대비 경제적 손익분기점.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-llm-code-review-ci-cd',
      inLanguage: 'ko',
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com/ko' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'CI/CD에서 로컬 LLM 활용: 클라우드 없는 자동 코드 리뷰', item: 'https://www.promptquorum.com/ko/power-local-llm/local-llm-code-review-ci-cd' },
      ],
    },
  },
}
