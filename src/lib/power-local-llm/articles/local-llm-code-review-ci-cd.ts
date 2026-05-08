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
    seoTitle: 'Local LLM Code Review in CI/CD: Self-Hosted Setup 2026',
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
        title: 'FAQ',
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
    seoTitle: 'Lokale LLM Code Review in CI/CD: Selbstgehosteter Setup 2026',
    intro:
      'Selbstgehostete lokale LLM Code Review setzt ein Qwen3-Coder Modell hinter Ihre CI/CD Pipeline, sodass jede Pull Request überprüft wird, ohne dass die Codebasis Ihr Netzwerk verlässt. Die Architektur ist unkompliziert — ein dedizierter GPU Server mit Ollama, eine benutzerdefinierte GitHub Action, die die HTTP API aufruft, und ein Review Prompt mit angepasster False-Positive Rate — und die Wirtschaftlichkeit kippen zugunsten von Self-Hosting irgendwo zwischen 15 und 25 bezahlten GitHub Seats. Dieser Leitfaden führt durch die Architektur, einen funktionierenden GitHub Actions Workflow, Hardware Dimensionierung nach Teamgröße, das Sicherheitsmodell und die operativen Fallstricke, die Teams im zweiten Monat treffen.',
    metaDescription:
      'Selbstgehostete lokale LLM Code Review in GitHub Actions: Architektur, funktionierende Workflow YAML, Hardware Dimensionierung nach Teamgröße, Sicherheitsmodell und wirtschaftliche Kostenparität mit GitHub Advanced Security.',
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
          'Für Repositories über ~50K Zeilen geänderter Code pro PR truncate oder chunk die Diff vorher. Der 256K Kontext auf Qwen3-Coder 30B ist großzügig, aber praktischer Arbeits Kontext ist näher an 64K–128K (siehe [Best Local Coding Models in 2026](/power-local-llm/best-local-coding-models-2026?lang=de)).',
          'Für Prompt-Design Tiefe — System vs User Prompts, Beispiele, strukturierte Outputs — siehe [System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=de).',
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
          'Für den vollständigen Leitfaden zum Strukturierten Output Enforcement über Modelle, siehe [structured output and JSON mode](/prompt-engineering/structured-output-and-json-mode?lang=de).',
          '**Severity Thresholds gehören zum Prompt, nicht zur Action.** Erzählen Sie dem Modell, was als `kritisch`, `hoch`, `mittel`, `niedrig` zählt; erzählen Sie ihm, Befunde mit niedriger Severity zu filtern, es sei denn, es wird ausdrücklich gefragt. Dies ist viel zuverlässiger als Post-Hoc Filterung auf einem Freiform Severity Feld.',
          '**Veranker den Prompt mit Beispielen.** Ein 1–2-Shot Prompt mit einer echten Diff und einem echten Ideal-Review JSON übertrifft Zero-Shot massiv für das gleiche Modell und die gleiche Diff Größe.',
          '**Unterscheide "überprüfe" von "Kommentar" Absicht.** Ein Reviewer Kommentar ("erwägen Sie, dies zu einem Helper zu extrahieren") und ein Blocker ("dies führt eine SQL Injection ein") benötigen unterschiedliche Aktionen in CI. Taggen Sie sie im strukturierten Output und lassen Sie die Action nur auf Blocker blockieren.',
          '**Pro-Sprache Prompt Varianten helfen ab einer gewissen Größe.** Ein Polyglot Codebase profitiert von einem Prompt, der relevante Sprach Idiome referenziert (Pythonic vs Idiomatisch Rust). Dies ist optional unter ~25 Entwickler; wertvoll darüber.',
          'Für tiefere Prompt-Engineering Fundament — System vs User Prompts, Strukturierte Outputs, Few-Shot Prompting — siehe [System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=de).',
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
        title: 'FAQ',
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
          '[Replace GitHub Copilot With a Local LLM](/power-local-llm/replace-github-copilot-with-local-llm?lang=de) — breiterer Kosten Ersatzkontext für Teams, die Self-Hosted AI Tooling erwägen.',
          '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local?lang=de) — was läuft in Pipelines vs interaktive Editor Arbeit; die Harness Schicht unter dem Modell.',
          '[Best Local Coding Models in 2026](/power-local-llm/best-local-coding-models-2026?lang=de) — Modell Seite der Gleichung: Qwen3-Coder, DeepSeek, Codestral und die Lizenzierungs Landschaft.',
          '[System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=de) — Prompt-Design Fundament für den Review System Prompt.',
          '[llama.cpp vs Ollama vs vLLM](/local-llms/llamacpp-vs-ollama-vs-vllm?lang=de) — Inference Engine Vergleich; vLLM ist der Upgrade Path jenseits von Ollama für High-Concurrency Teams.',
          '[Power Local LLM Hub](/power-local-llm?lang=de) — vollständige Leitfaden Bibliothek.',
        ],
      },
    },
  },
}
