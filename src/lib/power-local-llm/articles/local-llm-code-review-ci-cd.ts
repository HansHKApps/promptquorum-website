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
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'LLM Local en CI/CD : Révision de Code Automatisée Sans Cloud',
    seoTitle: 'Révision de Code avec LLM Local en CI/CD : Configuration Auto-Hébergée 2026',
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
`, items: ['L\'exécuteur doit pouvoir atteindre `OLLAMA_HOST` via le réseau — auto-hébergé sur le même VPC, ou via Tailscale / WireGuard si le serveur GPU est ailleurs.', 'Le prompt système impose une réponse JSON structurée pour que l\'action puisse se brancher sur le verdict proprement. Sans `format: "json"` et un schéma strict dans le prompt, vous passerez du temps opérationnel à analyser la sortie free-form.', 'Le checkout `fetch-depth: 0` est nécessaire pour calculer une vraie diff contre la branche de base — les checkouts superficiels produisent des diffs malformées.', 'Pour les dépôts au-dessus d\'environ 50K lignes de code modifié par RP, tronquez ou fragmentez la diff avant d\'envoyer. Le contexte 256K sur Qwen3-Coder 30B est généreux, mais le contexte de travail pratique est plus proche de 64K–128K (voir [Best Local Coding Models in 2026](/power-local-llm/best-local-coding-models-2026?lang=fr)).', 'Pour la profondeur du design de prompt — prompts système vs utilisateur, exemples, résultats structurés — voir [System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=fr).'], callouts: [{ type: 'note', text: 'Ce flux de travail est intentionnellement minimal. Les déploiements production ajoutent : un cache codé par hash fichier + diff pour sauter les re-révisions de fichiers inchangés, les seuils de sévérité (bloc seulement sur `severity >= "high"`), la publication de commentaires en ligne (au lieu d\'un seul commentaire de synthèse), les variantes de prompt par langue et l\'ingestion de rétroaction du critique pour améliorer le prompt au fil du temps.' }] },
      hardwareSizing: { id: 'hardware-sizing', title: 'Dimensionnement du Matériel par Taille d\'Équipe', content: '**Une RTX 4090 (24 GB) gère confortablement une équipe de 15–25 développeurs.** Le goulot d\'étranglement sur une seule GPU n\'est pas le débit par révision — c\'est la concurrence aux moments de chasse aux RP (lundi matin, fin de sprint). Les règles de dimensionnement ci-dessous supposent Qwen3-Coder 30B à Q4_K_M et une différence RP typique de 50–500 lignes.', columns: ['Taille d\'Équipe', 'GPU', 'VRAM', 'Révisions Simultanées', 'Prix Approximatif (Mai 2026)'], rows: [{ 'Taille d\'Équipe': '~5 Développeurs', 'GPU': 'RTX 4070 / 4070 Ti', 'VRAM': '12–16 GB', 'Révisions Simultanées': '1 (seulement Qwen3-Coder 7B)', 'Prix Approximatif (Mai 2026)': 'env. 899–1 099 €' }, { 'Taille d\'Équipe': '15–25 Développeurs', 'GPU': 'RTX 4090 / 5090', 'VRAM': '24–32 GB', 'Révisions Simultanées': '1–3 (Qwen3-Coder 30B)', 'Prix Approximatif (Mai 2026)': 'env. 2 299–2 799 €' }, { 'Taille d\'Équipe': '25–50 Développeurs', 'GPU': 'L40S / A6000 Ada', 'VRAM': '48 GB', 'Révisions Simultanées': '3–6', 'Prix Approximatif (Mai 2026)': 'env. 8 999–9 999 €' }, { 'Taille d\'Équipe': '50–100 Développeurs', 'GPU': '2× RTX 4090 ou 1× H100', 'VRAM': '48 GB / 80 GB', 'Révisions Simultanées': '6–10', 'Prix Approximatif (Mai 2026)': 'env. 5 000 € (2× 4090) ou 27 000+ € (H100)' }, { 'Taille d\'Équipe': '100+ Développeurs', 'GPU': 'Multi-GPU H100 ou H200', 'VRAM': '160 GB+', 'Révisions Simultanées': '10+ avec vLLM', 'Prix Approximatif (Mai 2026)': 'env. 50 000+ €' }], callouts: [{ type: 'tip', text: 'Pour les équipes franchissant le seuil de 50 développeurs, passez de Ollama à vLLM. Ollama privilégie la facilité d\'utilisation ; vLLM privilégie le débit sur les GPU partagées. Le même modèle Qwen3-Coder 30B s\'exécute sur les deux — seul le serveur d\'inférence change.' }] },
      gpuSharing: { id: 'gpu-sharing', title: 'Partage GPU Across Builds et Autres Charges', content: '**Une GPU dédiée pour la révision de code est l\'architecture la plus simple mais pas la seule.** Les équipes exécutant déjà une infra GPU pour l\'inférence ML ou l\'entraînement peuvent partager — avec le compromis que la contention fait monter en flèche la latence de révision.', items: ['**GPU dédiée pour la révision seulement:** modèle le plus simple. La latence est prévisible ; la planification de capacité est simple ; les modes de défaillance sont isolés. La recommandation pour toute équipe n\'exécutant pas déjà une infra GPU.', '**GPU partagée avec inférence ML:** faisable si la charge inférence a une enveloppe stable (par ex., un petit service d\'intégration s\'adaptant à 4–6 GB). Le modèle de révision occupe le reste du VRAM. Les collisions de planification sont rares sur ce motif.', '**GPU partagée avec entraînement ML:** fortement déconseillé. Les travaux d\'entraînement font sauter l\'utilisation du VRAM au limite et affament le modèle de révision, causant des latences de révision de 30–120 secondes qui érodent la confiance des développeurs dans le système.', '**vLLM avec attention paginée:** purpose-built pour le service LLM haute-concurrence. La même RTX 4090 qui gère 1–3 révisions simultanées sous Ollama peut gérer 4–8 sous vLLM, au prix d\'une configuration plus complexe. Ça vaut le coup au-delà de 25 développeurs.', '**Multi-tenant sur H100:** à l\'échelle 100+ développeurs, partitionnez un H100 en tranches MIG ou exécutez vLLM avec des quotas par tenant. C\'est du territoire plateforme-engineering ; n\'improvisez pas.'] },
      costComparison: { id: 'cost-comparison', title: 'Comparaison des Coûts avec GitHub Advanced Security', content: '**L\'économie bascule en faveur du self-host à environ 15–25 sièges payants.** C\'est une comparaison à payback d\'un an ; les horizons plus longs rendent l\'auto-hébergement plus favorable.', items: ['**GitHub Advanced Security (Code Security):** 19 $/développeur/mois au prix catalogue (vérifiez sur la page de tarification GitHub ; les remises de volume sont disponibles pour les clients enterprise).', '**API LLM Cloud (ex. OpenAI, Anthropic):** environ 50–200 $/mois par développeur actif au volume RP typique ; varie énormément selon la taille de la base de code et la conception du prompt de révision.', '**Self-Hosted Local LLM, build RTX 4090:** environ 2 299 € de matériel une seule fois (GPU + un boîtier serveur de base). Consommation électrique : ~50W au repos, ~350W sous charge — disons env. 18–28€/mois en électricité à l\'utilisation typique. Pas de frais par siège.', '**Parité à 10 développeurs:** GHAS 190 $/mois vs self-hosted env. 25€/mois exploité + env. 2 299 € capex. Capex se rentabilise en ~14 mois.', '**Parité à 25 développeurs:** GHAS 475 $/mois vs self-hosted env. 25€/mois exploité + env. 2 299 € capex. Capex se rentabilise en ~5–6 mois.', '**Parité à 50 développeurs:** GHAS 950 $/mois vs self-hosted env. 40€/mois exploité + env. 7 500 € capex (GPU 48 GB). Capex se rentabilise en ~8 mois.', '**Le chiffre capex domine les mathématiques.** Si vous achetez une GPU spécifiquement pour cela, la rentabilité est réelle. Si vous avez une capacité GPU existante, le coût marginal est plus proche de zéro et l\'auto-hébergement gagne immédiatement.'], callouts: [{ type: 'note', text: 'Ces chiffres sont des comparaisons de prix catalogue. Les tarifs GHAS négociés pour les grandes entreprises décalent la parité ; la capacité GPU existante l\'effondre. Refaites les mathématiques avec vos coûts réels avant de vous engager sur un achat de matériel.' }] },
      securityModel: { id: 'security-model', title: 'Modèle de Sécurité et Posture d\'Audit', content: '**L\'affirmation de sécurité titre — "le code source ne quitte jamais votre réseau" — est vraie, prouvable, et le plus fort argument pour cette architecture.** La surface d\'audit est assez petite pour être défendue dans un examen de procurement.', items: ['**Le modèle ne voit que la diff que votre action envoie.** Pas de télémétrie, pas d\'appels réseau cachés. Confirmable avec `tcpdump` ou `nft monitor` sur l\'interface sortante du serveur GPU — sous opération état-stable, vous devriez voir zéro paquets sortants vers les hôtes non-internes.', '**La surface d\'audit complète est un processus et un fichier journal.** `ollama serve` est l\'intégralité de la pile LLM. Ses logs (corps de requête, latence, événements de chargement de modèle) sont l\'enregistrement d\'audit. Pas de tableau de bord SaaS à interroger, pas de politique de conservation tiers à lire.', '**L\'isolement du réseau est simple.** Liez `ollama serve` à une interface privée ; mettez un proxy inverse avec auth mTLS ou shared-secret devant ; refusez sortant sur le namespace réseau du serveur GPU sauf vers votre sous-réseau exécuteur CI. Motif zero-trust standard, pas de magie LLM-spécifique.', '**Les poids du modèle sont des artefacts statiques signés par le vendeur.** Tirez-les une seule fois via Ollama, épinglez le digest et le modèle ne peut pas changer sans action opérateur. C\'est une histoire de chaîne d\'approvisionnement plus forte qu\'une API SaaS où le modèle amont peut être silencieusement échangé.', '**Posture de conformité:** zéro sortie de données est simple à documenter pour SOC 2, ISO 27001, GDPR et la classification EU AI Act limited-risk. La partie la plus difficile de la conformité auto-hébergée est généralement de documenter le serveur d\'inférence lui-même ; Ollama et vLLM sont tous deux bien documentés.', '**Le modèle voit toujours votre code.** L\'auto-hébergé ne signifie pas privé du modèle — cela signifie privé des tiers. Les scénarios d\'insider-threat (ingénieur avec accès serveur GPU lit les logs contenant les diffs RP passées) sont toujours dans le scope ; rotez les logs et limitez l\'accès en conséquence.'] },
      promptDesign: { id: 'prompt-design', title: 'Conception de Prompt pour la Révision de Code', content: '**Le déterminant unique le plus grand du taux de faux positifs est le prompt système.** Un prompt vague "examinez ce code" produit des commentaires de révision vagues ; un prompt spécifique avec seuils de sévérité et résultats structurés produit des retours actionnables.', items: ['**La sortie structurée est non-négociable.** Imposez JSON avec un schéma strict (`verdict`, `summary`, `comments[]`). Sans cela, l\'action passe 30% de son code à analyser la sortie free-form et les modes de défaillance sont subtils.', 'Pour le guide complet sur l\'application de la sortie structurée sur les modèles, voir [structured output and JSON mode](/prompt-engineering/structured-output-and-json-mode?lang=fr).', '**Les seuils de sévérité appartiennent au prompt, pas à l\'action.** Dites au modèle ce qui compte comme `critique`, `haut`, `moyen`, `bas` ; dites-lui de filtrer les résultats bas-sévérité sauf explicitement demandés. C\'est beaucoup plus fiable que le filtrage post-hoc sur un champ sévérité free-form.', '**Ancrez le prompt avec des exemples.** Un prompt 1–2-shot avec une diff réelle et une JSON de révision idéale surpasse massif zero-shot pour le même modèle et la même taille de diff.', '**Distinguez l\'intention "révision" de "commentaire".** Un commentaire critique ("envisagez d\'extraire ceci vers un helper") et un blocker ("ceci introduit une injection SQL") ont besoin d\'actions différentes en CI. Tagguez-les dans la sortie structurée et faites bloquer l\'action seulement sur les bloqueurs.', '**Les variantes de prompt par langue aident au-delà d\'une certaine taille.** Une base de code polyglotte bénéficie d\'un prompt qui référence les idiomes de langue pertinents (Pythonic vs Rust idiomatique). C\'est optionnel au-dessous d\'environ 25 développeurs ; précieux au-dessus.', 'Pour l\'ancrage de l\'ingénierie de prompt plus profond — prompts système vs utilisateur, résultats structurés, few-shot prompting — voir [System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=fr).'] },
      falsePositives: { id: 'false-positives', title: 'Gestion des Faux Positifs Sans Éroder la Confiance des Développeurs', content: '**Les faux positifs sont la taxe opérationnelle sur la révision de code LLM.** Un taux de 5% est acceptable ; 20% est intolérable ; la différence est principalement itération de prompt et une boucle de rétroaction, pas le modèle.', items: ['**Fixez un seuil "block" haut.** Un verdict `block` qui s\'active sur chaque problème lint mineur entraîne les développeurs à contourner la vérification. Réservez `block` aux problèmes de sécurité, aux tests cassés et aux défaillances de correctness clairs.', '**Rendez les commentaires non-bloquants bon marché.** Les commentaires en ligne où le modèle est incertain devraient être tagués ("tentative" / "envisager") pour que les auteurs puissent les rejeter rapidement sans cérémonie.', '**Construisez une boucle de rétroaction au mois un.** Ajoutez une réaction (👍 / 👎) à chaque commentaire de révision. Périodiquement (hebdomadairement fonctionne) examinez les 👎s et mettez à jour le prompt système avec des instructions explicites "ne pas signaler X" pour les catégories les plus courantes de faux positifs.', '**Taux-limites le volume de commentaires par RP.** Une seule RP ne devrait pas recevoir plus de 5–10 commentaires du LLM ; au-delà, le rapport signal-bruit s\'effondre. Limitez l\'action au niveau du prompt ("retour au maximum N commentaires").', '**Suivez la corrélation verdict-to-merge hebdomadairement.** Si 80% des verdicts `block` fusionnent de toute façon, votre seuil est trop agressif. Si 0% des verdicts `comment` obtiennent toute action humaine, votre prompt produit du bruit.'] },
      operationalPitfalls: { id: 'operational-pitfalls', title: 'Pièges Opérationnels au Deuxième Mois', content: '**Le setup obtient l\'attention ; les opérations sont ignorées.** Les défaillances ci-dessous sont celles qui font que les équipes abandonnent le projet après la période lune de miel.', items: ['**Les mises à jour de modèle cassent les prompts.** Une nouvelle version Qwen3-Coder change subtilement le formatage de sortie ; l\'analyse JSON structurée échoue en CI ; les révisions cessent de poster. Épinglez le digest du modèle avec `ollama show <model> --modelfile` ; mettez à niveau dans une branche staging avant de promouvoir.', '**Fragmentation mémoire GPU sous longue uptime.** Un serveur GPU exécutant 24/7 peut fragmenter le VRAM et refuser les allocations nouvelles après des semaines d\'opération. Redémarrez `ollama serve` hebdomadairement via un travail cron ; c\'est bon marché et évite complètement le mode de défaillance.', '**Contention exécuteur CI.** Un exécuteur auto-hébergé hébergeant à la fois le serveur LLM et d\'autres travaux CI verra la latence de révision monter en flèche sous charge de build. Séparez l\'exécuteur et le serveur GPU quand la taille d\'équipe dépasse ~25 développeurs.', '**Croissance taille diff.** Les tailles RP dérivent vers le haut ; finalement une RP dépasse le contexte de travail pratique du modèle et les révisions dégradent silencieusement. Ajoutez un garde dans l\'action qui divise ou tronque les diffs au-dessus d\'env. 30K tokens et avertit l\'auteur.', '**Puissance et refroidissement.** Une RTX 4090 continuellement chargée tire env. 350W sous inférence et produit une quantité signifiante de chaleur. Une salle serveur de taille placard sans refroidissement actif affamera la GPU ; l\'affamement coûte la latence et les développeurs remarquent.', '**Rotation de log oubliée.** Ollama enregistre chaque corps de requête par défaut. Après trois mois de révisions RP, le fichier journal est grand et contient les diffs RP historiques en texte clair. Rotez les logs hebdomadairement ; archivez ou purgez par votre politique de conservation de données.'] },
      commonMistakes: { id: 'common-mistakes', title: 'Erreurs Courantes lors de la Configuration de la Révision de Code LLM Local', items: ['**Erreur 1 : commencer avec un modèle 7B sur une GPU 16 GB.** Les révisions Qwen3-Coder 7B sont notablement pires que les révisions 30B ; les développeurs perdent rapidement confiance et le projet est étagéré. Si vous ne pouvez pas adapter le 30B, mettez à niveau la GPU ou utilisez une API cloud pour les six premiers mois pendant que vous sécurisez le budget.', '**Erreur 2 : bloquer les RP sur les verdicts `block` dès le jour un.** Le premier mois est calibrage ; traitez toute sortie comme conseiller jusqu\'à ce que vous ayez mesuré le taux de faux positifs. Promouvez le blocage seulement après que le taux soit au-dessous d\'env. 5%.', '**Erreur 3 : exposez `ollama serve` sur `0.0.0.0:11434` sans auth.** C\'est l\'équivalent ère-LLM de laisser Redis liée à une interface publique. Liez-la à une interface privée et mettez auth devant avant toute exposition cross-host.', '**Erreur 4 : ignorez le cache.** Re-révisez les fichiers inchangés à chaque exécution CI gaspille env. 80% du budget d\'inférence sur une RP typique. Un petit cache hash fichier + hash diff (Redis ou SQLite) réduit la latence de révision et la charge GPU dramatiquement.', '**Erreur 5 : exécutez les travaux entraînement sur la même GPU.** L\'entraînement fait monter en flèche l\'utilisation du VRAM à la limite et affame le modèle de révision. Utilisez des GPU séparées ou, si vous devez partager, exécutez l\'entraînement sur un planning strict qui ne chevauche pas les heures RP de pointe.', '**Erreur 6 : construisez l\'action GitHub sans boucle de rétroaction.** Un système de révision sans réactions 👍/👎 ne peut pas s\'améliorer. Construisez la boucle la semaine un ; collectez des données ; itérez sur le prompt mensuellement.'] },
      sources: { id: 'sources', title: 'Sources', items: ['[Documentation Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — Référence officielle API HTTP pour `/api/chat`, `/api/generate`, sortie structurée et gestion des modèles.', '[Documentation vLLM](https://docs.vllm.ai/) — Documentation serveur inférence haute-débit ; le chemin de mise à niveau au-delà d\'Ollama pour les équipes haute-concurrence.', '[Documentation GitHub Actions](https://docs.github.com/en/actions) — Référence officielle pour les exécuteurs auto-hébergés, les secrets et le SDK JavaScript Actions utilisé dans le flux de travail ci-dessus.', '[Tarification GitHub Advanced Security](https://github.com/pricing) — Référence prix catalogue pour la comparaison des coûts ; vérifiez par rapport à vos termes réellement négociés.', '[Fiche Technique Qwen3-Coder](https://huggingface.co/Qwen/Qwen3-Coder-30B) — Architecture, fenêtre de contexte et conditions de licence pour le modèle de révision recommandé.', '[Référence GitLab CI/CD](https://docs.gitlab.com/ee/ci/) — Référence équivalente pour les équipes GitLab ; la portion LLM-call du flux de travail est identique.'] },
      faq: { id: 'faq', title: 'FAQ', faqs: [{ q: 'Un serveur GPU unique peut-il gérer CI pour 50 développeurs ?', a: 'Une GPU unique 24 GB (RTX 4090) gère confortablement 15–25 développeurs ; 50 développeurs ont besoin d\'une carte 48 GB (L40S, A6000 Ada) ou un changement de Ollama à vLLM sur le même matériel. Le goulot d\'étranglement est la concurrence aux moments chasse-RP — lundi matin, fin de sprint — pas le débit état-stable. Pour 100+ développeurs, planifiez pour multi-GPU ou du matériel classe H100.' }, { q: 'La révision de code local affecte-t-elle la latence RP ?', a: 'Typiquement non — la latence de révision est 10–30 secondes sur une GPU unique 24 GB pour une diff typique de 200 lignes, et le temps d\'attente auteur RP est dominé par d\'autres travaux CI (build, test, lint) qui prennent bien plus longtemps. L\'exception est les très grandes RP (au-dessus d\'env. 30K tokens diff) où la révision peut prendre 60–90 secondes ; tronquez ou divisez celles-ci au niveau action.' }, { q: 'Comment puis-je auditer ce que le modèle voit ?', a: 'Ollama enregistre chaque corps de requête par défaut dans son fichier journal (l\'emplacement varie par OS ; vérifiez `journalctl -u ollama` sur systemd ou le répertoire log Ollama). Chaque diff RP qui va en révision est dans ce journal. Combiné avec `tcpdump` sur l\'interface sortante du serveur GPU pour prouver zéro sortie de données. La surface d\'audit complète est un processus et un fichier journal — bien plus simple à auditer qu\'une API révision code SaaS.' }, { q: 'Puis-je bloquer les RP basées sur la sortie du modèle local ?', a: 'Oui. L\'action retourne un champ `verdict` ; si le verdict est `block`, l\'action GitHub sort non-zéro, ce qui fait échouer la vérification, ce qui bloque fusion si la règle branch protection nécessite le passage de la vérification. La recommandation est de commencer avec `block` désactivé (beratend seulement) le premier mois, mesurer le taux de faux positifs, et promouvoir le blocage une fois le taux au-dessous d\'env. 5%.' }, { q: 'Cela fonctionne-t-il avec GitLab CI ?', a: 'Oui — architecture identique. Remplacez l\'action GitHub par un travail GitLab CI qui exécute le même `curl` au point de terminaison Ollama et poste la réponse en arrière à la demande fusion via l\'API GitLab. Le modèle, le prompt, le cache, le modèle de sécurité et le dimensionnement du matériel sont tous identiques. Bitbucket Pipelines, Jenkins et Buildkite fonctionnent de la même manière.' }, { q: 'Comment je garde le modèle à jour sans casser les pipelines ?', a: 'Épinglez le digest du modèle avec `ollama show <model> --modelfile` pour que CI production utilise une version exacte. Quand une nouvelle version modèle arrive, tirez-la sur un serveur staging, exécutez une petite suite fixture de diffs RP représentatives, comparez la sortie structurée à la version production, et promouvez seulement après que la suite de régression passe. Traitez les mises à jour modèle comme n\'importe quelle autre mise à niveau de dépendance.' }, { q: 'Puis-je utiliser ceci pour la génération de code en plus de la révision ?', a: 'Oui, mais les charges concourent pour la même GPU et ont des caractéristiques de latence différentes. La révision de code est asynchrone et tolère les réponses 30-secondes ; la génération de code interactif dans un éditeur a besoin de latence sub-2-secondes. Pattern recommandé : utilisez un modèle plus petit (Qwen3-Coder 7B) pour l\'autocomplete d\'éditeur sur les machines développeur et réservez le serveur GPU dédié aux charges de classe révision en CI.' }, { q: 'Quel est le modèle de sécurité pour le serveur GPU ?', a: 'Traitez-le comme n\'importe quel service interne : liez le serveur d\'inférence à une interface privée, mettez l\'authentification devant (auth mTLS, jetons shared-secret, ou accès VPN-seulement), restreignez sortant avec default-deny, et rotez les identifiants. L\'ajout LLM-spécifique est l\'audit de provenance poids du modèle — épinglez le digest, documentez la source, et confirmez sortie de données zéro avec captures paquets périodiques.' }, { q: 'Plusieurs repos peuvent-ils partager un serveur GPU ?', a: 'Oui — le serveur GPU est juste un point de terminaison HTTP. N\'importe quel nombre de repos peut l\'appeler tant que le serveur a de la capacité. Pour les organisations avec 10+ repos actifs, ajoutez des limites taux par-repo au proxy inverse devant Ollama pour éviter qu\'un repo bruyant (grand monorepo, pushes forcés fréquents) ne famine les autres.' }, { q: 'Comment je gère les faux positifs en CI ?', a: 'Trois couches. Premièrement, design de prompt — fixez des seuils de sévérité hauts, imposez la sortie structurée, et tagguez les résultats tentatives. Deuxièmement, filtrage niveau action — bloquez seulement sur `severity >= "high"` ; montrez moyen/bas comme commentaires. Troisièmement, une boucle de rétroaction — laissez les développeurs réagir 👍/👎 sur chaque commentaire, puis examinez hebdomadairement les 👎s et mettez à jour le prompt système pour supprimer les catégories les plus courantes de faux positifs. Attendez un taux 5–10% après un mois de réglage ; au-dessous de 5% est réalisable avec itération soutenue.' }] },
      relatedReading: { id: 'related-reading', title: 'Lectures Associées', items: ['[Replace GitHub Copilot With a Local LLM](/power-local-llm/replace-github-copilot-with-local-llm?lang=fr) — contexte plus large de remplacement des coûts pour les équipes envisageant les outils IA auto-hébergés.', '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local?lang=fr) — ce qui exécute en pipelines vs travail éditeur interactif ; la couche harness sous le modèle.', '[Best Local Coding Models in 2026](/power-local-llm/best-local-coding-models-2026?lang=fr) — côté modèle de l\'équation : Qwen3-Coder, DeepSeek, Codestral et le paysage de licence.', '[System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=fr) — ancrage d\'ingénierie de prompt pour le prompt système révision.', '[llama.cpp vs Ollama vs vLLM](/local-llms/llamacpp-vs-ollama-vs-vllm?lang=fr) — comparaison moteur inférence ; vLLM est le chemin mise à niveau au-delà d\'Ollama pour les équipes haute-concurrence.', '[Power Local LLM Hub](/power-local-llm?lang=fr) — bibliothèque guides complète.'] },
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
      'GitHub Actionsのセルフホスト型ローカルLLMコードレビュー：アーキテクチャ、実装されたワークフローYAML、チームサイズ別ハードウェアサイジング、セキュリティモデル、そしてGitHub Advanced Securityに対する経済的転換点。',
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
        items: [
          '**トリガー：** `pull_request`イベント。すべてのPRが自動的にレビューされます。レビューは非ブロッキング（デフォルト）から開始し、偽陽性率が5%未満になったら`comment`から`block`に昇格させます。',
          '**アクション1：** `git diff`をコンピュートします。チェックアウトは`fetch-depth: 0`である必要があります。浅いチェックアウトはmalformed diffを生成します。',
          '**アクション2：** Ollama HTTPエンドポイントにdiffをPOST。モデル、温度、JSON強制形式、システムプロンプト（以下Prompt Design）を指定します。',
          '**アクション3：** JSON応答を解析します。`verdict`（approve / comment / block）と`comments[]`（path、line、severity、message）を抽出します。',
          '**アクション4：** PRにコメントをポスト。`verdict == "block"`の場合、アクションは非ゼロで終了し、ブランチ保護ルールが失敗をトリガーします。',
        ],
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
          'リポジトリが約50Kを超える行のコード変更の場合、diff前に送信するdiffを切り詰めるか断片化します。256K文脈はQwen3-Coder 30Bで寛容ですが、実用的な作業文脈はより64K～128K付近です（[2026年のベストローカルコーディングモデル](/power-local-llm/best-local-coding-models-2026?lang=ja)を参照）。',
          'プロンプト深度設計——システムプロンプト対ユーザープロンプト、例、構造化結果——については、[System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=ja)を参照。',
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
        regionalContext:
          'データ機密性高いを日本で処理する企業の場合、METI ガイドラインは詳しくセルフホスト推論が推奨されています：機密財務レコード、個人医療データ、法的ドキュメント扱う場合、ローカル推論QwenコーダーはMETIセキュリティ要件、データ主権、および会社境界内の監査サーフェス完全管理を満たします。',
      },
      promptDesign: {
        id: 'prompt-design',
        title: 'コードレビュー用プロンプト設計',
        content:
          '**偽陽性率の最大単一決定要因はシステムプロンプトです。** あいまいなプロンプト「このコードを検査」は漠然としたレビューコメントを生成します。特定のしきい値と構造化結果を持つプロンプト実行可能なレビューフィードバックを生成します。',
        items: [
          '**構造化出力は交渉不可です。** 厳密なスキーマ（`verdict`、`summary`、`comments[]`）を持つJSONを強制します。これなしでアクションはコード30%の自由形式出力を解析し、障害モードはサブトルです。',
          'Structured outputと JSON modelの応用の完全な信仰については[Structured output and JSON mode](/prompt-engineering/structured-output-and-json-mode?lang=ja)を参照。',
          '**重大度しきい値はプロンプトに属し、アクション内ではありません。** モデルに`critical`、`high`、`medium`、`low`を定義し、明確に求められない限り低重大度結果をフィルタリングするよう告げます。自由形式の重大度フィールドの事後フィルタリングより大幅に信頼できます。',
          '**例でプロンプトをアンカーします。** 実のdiffと理想レビュー JSONを持つ1～2-shotプロンプト同じモデル大きなdiffのゼロショット同じサイズを上回ります。',
          '**「レビュー」意図と「コメント」を区別します。** 批評コメント（「これはヘルパーへの抽出を検討」）とブロッカー（「これはSQL インジェクション導入」）には異なるCI アクションが必要です。これらを構造化出力でタグ付けし、ブロッカーのみでアクションブロックにします。',
          '**言語別プロンプト変動体は一定以上のサイズで役立ちます。** ポリグロット コードベースは関連言語イディオムを参照するプロンプトから恩恵を受けます（Pythonic対Rust idiomatic）。これはおおよそ25開発者以下のオプション；上で価値がある。',
          'より深いプロンプトエンジニアリングアンカー——システムプロンプト対ユーザープロンプト、構造化結果、few-shot promptingについては[System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=ja)を参照。',
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
        title: 'FAQ',
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
          '[Replace GitHub Copilot With a Local LLM](/power-local-llm/replace-github-copilot-with-local-llm?lang=ja) — セルフホスト型 AI ツール検討チームのコスト置き換えの広い文脈。',
          '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local?lang=ja) — パイプライン実行は相互エディター。ハーネス層モデルの下。',
          '[Best Local Coding Models in 2026](/power-local-llm/best-local-coding-models-2026?lang=ja) — 等式のモデル側：Qwen3-Coder、DeepSeek、Codestral とライセンス風景。',
          '[System Prompt vs User Prompt: What\'s the Difference](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=ja) — レビュー プロンプト システムのプロンプト エンジニアリング アンカー。',
          '[llama.cpp vs Ollama vs vLLM](/local-llms/llamacpp-vs-ollama-vs-vllm?lang=ja) — 推論エンジン比較；vLLM は高並行チームのための Ollama をアップグレード経路。',
          '[Power Local LLM Hub](/power-local-llm?lang=ja) — ガイド完全ライブラリ。',
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
      workflow: { id: 'workflow', title: 'GitHub Actions工作流', content: '**下面是生产可用的工作流。** 将文件放在`.github/workflows/local-llm-review.yml`，设置OLLAMA_HOST秘密，确保在自托管或VPC内的运行器上运行。', items: ['**触发器：** `pull_request`事件。所有PR自动审查。审查从非阻止（默认）开始，当假阳性率低于5%时升级到`block`。', '**步骤1：** 计算`git diff`。检查必须是`fetch-depth: 0`。浅检查生成畸形diff。', '**步骤2：** POST diff到Ollama HTTP端点。指定模型、温度、JSON强制格式、系统提示（见下面提示设计）。', '**步骤3：** 解析JSON响应。提取`verdict`（批准/评论/阻止）和`comments[]`（路径、行、严重程度、消息）。', '**步骤4：** POST评论到PR。如果`verdict == "block"`，action以非零退出，分支保护规则触发失败。'], codeBlock: `name: Local LLM Code Review\n\non:\n  pull_request:\n    types: [opened, synchronize]\n\njobs:\n  review:\n    runs-on: [self-hosted, linux]\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n\n      - name: Get PR diff\n        id: diff\n        run: |\n          git diff origin/${{ github.base_ref }}...HEAD > /tmp/pr.diff\n          wc -l /tmp/pr.diff\n\n      - name: Call local LLM review\n        id: review\n        env:\n          OLLAMA_HOST: \${{ secrets.OLLAMA_HOST }}   # ex. http://gpu-server.internal:11434\n        run: |\n          DIFF=$(jq -Rs . < /tmp/pr.diff)\n          curl -sS "$OLLAMA_HOST/api/chat" \\\\\n            -H 'Content-Type: application/json' \\\\\n            -d "{\n              \\"model\\": \\"qwen3-coder:30b\\",\n              \\"stream\\": false,\n              \\"format\\": \\"json\\",\n              \\"messages\\": [\n                {\\"role\\": \\"system\\", \\"content\\": \\"You are a senior code reviewer. Return JSON: {verdict: 'approve'|'comment'|'block', summary: string, comments: [{path, line, severity, message}]}\\"},\n                {\\"role\\": \\"user\\", \\"content\\": $DIFF}\n              ]\n            }" > /tmp/review.json\n          echo "verdict=$(jq -r '.message.content | fromjson | .verdict' < /tmp/review.json)" >> "$GITHUB_OUTPUT"\n\n      - name: Post review comment\n        uses: actions/github-script@v7\n        with:\n          script: |\n            const fs = require('fs');\n            const review = JSON.parse(JSON.parse(fs.readFileSync('/tmp/review.json')).message.content);\n            const body = \\\`### Local LLM Review: \\\\\`\${review.verdict}\\\\\`\\n\\n\${review.summary}\\\`;\n            await github.rest.issues.createComment({\n              owner: context.repo.owner,\n              repo: context.repo.repo,\n              issue_number: context.issue.number,\n              body\n            });\n\n      - name: Block on critical verdict\n        if: steps.review.outputs.verdict == 'block'\n        run: exit 1\n`, codeLanguage: 'yaml', items: ['运行器需要网络访问OLLAMA_HOST——自托管必须在同VPC内或通过Tailscale / WireGuard。', '系统提示强制结构化JSON响应。没有`format: "json"`和严格的schema，action花费30%的代码解析自由形式输出。', '`fetch-depth: 0`对于计算相对于基础分支的真实diff是必需的——浅检查生成畸形diff。', '对于超过约50K行代码更改的repo，在发送前截断或分割diff。256K上下文对Qwen3-Coder 30B很宽松，但实际工作上下文更接近64K-128K（见[2026年最佳本地编码模型](/power-local-llm/best-local-coding-models-2026?lang=zh)）。', '对于提示深度工程——系统vs用户提示、示例、结构化结果——见[系统提示vs用户提示：有什么区别](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=zh)。'], callouts: [{ type: 'note', text: '这个工作流故意最小。生产部署添加：基于文件hash + diff hash的缓存以跳过未更改文件的重新审查、严重程度阈值（仅在`severity >= "high"`时阻止）、内联评论发布（而非单个摘要评论）、按语言的提示变体、审查人反馈获取以随时间改进提示。' }] },
      hardwareSizing: { id: 'hardware-sizing', title: '按团队规模的硬件规划', content: '**单个RTX 4090（24 GB）舒适处理15-25开发者。** 单GPU的瓶颈不是每次审查的吞吐量，而是PR追踪时段的竞争（周一早上、冲刺结束）。下面的规划规则假设Qwen3-Coder 30B使用q4_K_M量子化和典型的50-500行PR diff。', columns: ['团队规模', 'GPU', 'VRAM', '并发审查', '约略价格（2026年5月）'], rows: [{ '团队规模': '~5开发者', 'GPU': 'RTX 4070 / 4070 Ti', 'VRAM': '12-16 GB', '并发审查': '1（仅Qwen3-Coder 7B）', '约略价格（2026年5月）': '约$600-800' }, { '团队规模': '15-25开发者', 'GPU': 'RTX 4090 / 5090', 'VRAM': '24-32 GB', '并发审查': '1-3（Qwen3-Coder 30B）', '约略价格（2026年5月）': '约$2,000-2,500' }, { '团队规模': '25-50开发者', 'GPU': 'L40S / A6000 Ada', 'VRAM': '48 GB', '并发审查': '3-6', '约略价格（2026年5月）': '约$7,000-8,000' }, { '团队规模': '50-100开发者', 'GPU': '2×RTX 4090或1×H100', 'VRAM': '48 GB / 80 GB', '并发审查': '6-10', '约略价格（2026年5月）': '约$5,000（2×4090）或$25,000+（H100）' }, { '团队规模': '100+开发者', 'GPU': '多GPU H100或H200', 'VRAM': '160 GB+', '并发审查': 'vLLM为10+', '约略价格（2026年5月）': '约$50,000+' }], callouts: [{ type: 'tip', text: '跨越50开发者阈值时，从Ollama切换到vLLM。Ollama优先易用性；vLLM优先共享GPU的吞吐量。相同的Qwen3-Coder 30B在两者上运行——仅推论服务器改变。' }] },
      gpuSharing: { id: 'gpu-sharing', title: '构建间的GPU共享及其他负载', content: '**代码审查专用GPU是最简单的架构但不是唯一的。** 已为ML推论或训练运行GPU基础设施的团队可以共享——代价是审查延迟大幅增加。', items: ['**仅代码审查专用GPU：** 最简单的模型。延迟可预测。容量计划简单。故障模式隔离。对未运行GPU基础设施团队的推荐。', '**与ML推论共享GPU：** 可行如果推论负载有稳定的封装（例如，小集成服务适应4-6GB）。审查模型占用剩余VRAM。此模式下计划竞争少见。', '**与ML训练共享GPU：** 强烈不推荐。训练作业将VRAM使用激增到限制，使审查模型饥饿，导致30-120秒审查延迟侵蚀开发者对系统的信心。', '**vLLM与分页注意力：** 为高并发LLM服务而生。同个RTX 4090在Ollama下处理1-3并发审查，在vLLM下处理4-8个，代价是更复杂的配置。25+开发者时值得。', '**H100上多租户：** 在100+开发者规模，将H100分割为MIG片或使用租户配额运行vLLM。这是平台工程领地；不要即兴。'] },
      costComparison: { id: 'cost-comparison', title: '与GitHub Advanced Security的成本比较', content: '**经济学在约15-25个付费座位处转向自托管。** 这是一年的回收比较；更长的视角使自托管更有利。', items: ['**GitHub Advanced Security（代码安全）：** 价目表价格$19/开发者/月（检查GitHub定价页面；企业客户可得体积折扣）。', '**云LLM API（例OpenAI、Anthropic）：** 典型PR体积下约$50-200/月/活跃开发者。极大地因代码库大小和审查提示设计而异。', '**自托管本地LLM、RTX 4090构建：** 约$2,000硬件一次（GPU +基础服务器盒）。电力消耗：~50W空闲、~350W负载——在典型使用中约$25-35/月操作功耗。无按座位成本。', '**10开发者处平价：** GHAS $190/月 vs 自托管约$25-35/月操作+约$2,000 capex。Capex在约14个月内回收。', '**25开发者处平价：** GHAS $475/月 vs 自托管约$25-35/月操作+约$2,000 capex。Capex在约5-6个月内回收。', '**50开发者处平价：** GHAS $950/月 vs 自托管约$35-45/月操作+约$7,500 capex（48 GB GPU）。Capex在约8个月内回收。', '**Capex数字主导数学。** 如果具体为此购买GPU，回收是真实的。如果有现有GPU容量，边际成本接近零，自托管立即获胜。'], callouts: [{ type: 'note', text: '这些数字是价目表价格比较。大企业谈判的GHAS费率改变平价；现有GPU容量摧毁它。在提交硬件购买前用你的实际成本重做数学。' }] },
      securityModel: { id: 'security-model', title: '安全模型和审计态势', content: '**安全声称标题——"源代码永不离开你的网络"——是真实的、可证明的，也是这个架构最强的论点。** 审计表面小到可在采购审查中防守。', items: ['**模型仅看到你的action发送的diff。** 无遥测、无隐藏网络调用。可用`tcpdump`或GPU服务器发送接口上的`nft monitor`验证——在稳定操作中，你应该看到零个向非内部主机的发送数据包。', '**完整审计表面是一个进程和一个日志文件。** `ollama serve`就是整个LLM栈。它的日志（请求体、延迟、模型加载事件）是审计记录。无SaaS仪表板要查询、无第三方保留政策要读。', '**网络隔离简单。** 将`ollama serve`绑定到私有接口。把认证反向代理（mTLS或shared-secret）放在它前面。拒绝GPU服务器namespace的发送，除了你的CI运行网络子网。标准零信任模式，无LLM特定魔法。', '**模型权重是供应商签署的静态工件。** 通过Ollama拉一次、pin digest、模型不能在无操作者行动下改变。这是比可静默交换上游模型的SaaS API更强的供应链故事。', '**合规态势：** 零数据外泄对SOC 2、ISO 27001、GDPR和EU AI法限制风险分类简单可记录。自托管合规最困难的部分通常是记录推论服务器本身。Ollama和vLLM都有好文档。', '**信息安全和全球数据主权：** 对于在全球运营但在亚太地区存储数据的组织，自托管本地LLM满足区域数据驻留要求。代码评审从不离开你的服务器，符合许多亚太地区的监管框架。', '**模型看到你的代码。** 自托管不意味着对模型私密——意味着对第三方私密。内部威胁情景（有服务器访问权的工程师读含有历史PR diff的日志）仍在范围内。轮转日志并相应限制访问。'], regionalContext: '对于在亚太地区处理敏感数据的企业，包括日本、新加坡和澳大利亚，本地LLM推论满足区域数据驻留和信息安全要求。财务记录、医疗数据或法律文件的情况下，运行本地Qwen3-Coder满足所有区域数据保护要求，并提供完整的审计审计和零外部数据流。' },
      promptDesign: { id: 'prompt-design', title: '代码审查提示设计', content: '**假阳性率的单一最大决定因素是系统提示。** 含糊的提示"检查这段代码"生成含糊的审查评论；带有特定阈值和结构化结果的提示生成可行的审查反馈。', items: ['**结构化输出不可商议。** 用严格schema（`verdict`、`summary`、`comments[]`）强制JSON。没有这个，action花费30%的代码解析自由形式输出，故障模式是微妙的。', '对于结构化输出和JSON模式应用的完整信息，见[结构化输出和JSON模式](/prompt-engineering/structured-output-and-json-mode?lang=zh)。', '**严重程度阈值属于提示，不属于action。** 告诉模型什么是`critical`、`high`、`medium`、`low`；告诉它过滤低严重程度结果除非明确要求。这比自由形式严重程度字段的事后过滤更可靠得多。', '**用示例anchor提示。** 带有真实diff和理想审查JSON的1-2shot提示超过同样模型和diff大小的零shot。', '**区分"审查"意图和"评论"。** 批评评论（"考虑提取到helper"）和blocker（"这引入SQL注入"）需要不同的CI行动。在结构化输出中标记它们，仅在blocker处块action。', '**按语言的提示变体在某个规模以上很有用。** 多语言代码库从引用相关语言习语的提示受益（Pythonic vs Rust习语）。这在约25开发者以下是可选的；以上是有价值的。', '对于更深的提示工程anchor——系统vs用户提示、结构化结果、few-shot prompting——见[系统提示vs用户提示：有什么区别](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=zh)。'] },
      falsePositives: { id: 'false-positives', title: '处理假阳性而不侵蚀开发者信心', content: '**假阳性是LLM代码审查的运营税。** 5%的比率可接受；20%无法忍受；差异主要来自提示迭代和反馈循环，不来自模型。', items: ['**设置高"block"阈值。** 每个小lint问题都触发`block`判决会训练开发者绕过检查。为安全问题、破损测试和明确的正确性失败预留`block`。', '**使非阻止评论便宜。** 模型不确定的内联评论标记为"tentative"/"consider"，以便作者可以快速无仪式地驳回。', '**第一个月建立反馈循环。** 向每条审查评论添加反应（👍 / 👎）。定期（周基础工作）检查👎s，用明确的"不报告X"指令更新系统提示以处理最常见的假阳性类别。', '**按PR的评论体积速率限制。** 单个PR不应从LLM收到超过5-10条评论；超过此信号对噪声比崩溃。在提示级实现action功能（"最多返回N条评论"）。', '**周追踪判决对合并相关性。** 如果80%的`block`判决无论如何都合并，你的阈值太激进。如果0%的`comment`判决获得任何人类行动，你的提示生成噪声。'] },
      operationalPitfalls: { id: 'operational-pitfalls', title: '第二个月的运营陷阱', content: '**设置获得关注；操作被忽视。** 下面的故障是那些让团队在蜜月后放弃项目的。', items: ['**模型更新破坏提示。** 新Qwen3-Coder版本略微改变结构化输出格式；JSON解析在CI中破坏；评论停止发布。用`ollama show <model> --modelfile`pin模型digest。在升级到生产前在staging上升级新版本。', '**长期运行下的GPU内存碎片化。** GPU服务器运行24/7可碎片化VRAM，在数周后拒绝新分配。每周用cron作业重启`ollama serve`。便宜且完全避免此故障模式。', '**CI运行器竞争。** 自托管运行器同时承载LLM服务器和其他CI作业在构建负荷下会看到审查延迟尖峰。当团队规模超过~25开发者时分离运行器和GPU服务器。', '**Diff大小漂移。** PR大小向上漂移；最终PR超过模型的实际上下文并无声地降级。添加guard来分割或截断超过约30K令牌的diff并警告作者。', '**电力和冷却。** 持续加载的RTX 4090在推论下抽取约350W并产生大量热。没有主动冷却的小壁橱服务器房间会饥饿GPU；饥饿导致延迟而开发者注意。', '**遗忘日志轮转。** Ollama默认记录每个请求体。三个月后PR审查的日志文件含有纯文本的历史PR diff。按周轮转日志；按你的数据保留政策存档或清除。'] },
      commonMistakes: { id: 'common-mistakes', title: '设置本地LLM代码审查时的常见错误', items: ['**错误1：在16 GB GPU上从7B模型开始。** Qwen3-Coder 7B审查显著比7B差。开发者快速失去信心，项目被搁置。如果不能容纳30B，在6个月内使用云API同时保障GPU预算。', '**错误2：第一天从`block`判决阻止PR。** 第一个月是校准；将所有输出视为建议直到假阳性率低于约5%时升级阻止。', '**错误3：在没有认证的0.0.0.0:11434上公开暴露`ollama serve`。** 这是LLM时代相当于将Redis绑定到公共接口。绑定到私有接口；在任何跨主机暴露前放置认证。', '**错误4：忽视缓存。** 在每次CI运行重新审查未改变的文件浪费约80%的推论预算在典型PR上。小文件hash + diff hash缓存（Redis或SQLite）大幅减少审查延迟和GPU负荷。', '**错误5：在同个GPU上运行训练作业。** 训练将VRAM使用激增到限制；使审查模型饥饿；导致30-120秒审查延迟侵蚀开发者系统信心。使用分离GPU或计划训练在不与PR峰值时段重叠的严格日程上。', '**错误6：没有反馈循环构建GitHub Action。** 没有👍/👎反应的审查系统无法改进。第一周构建循环。收集数据；每月迭代提示。'] },
      sources: { id: 'sources', title: '资源', items: ['[Ollama Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) — `/api/chat`、`/api/generate`、结构化输出和模型管理的官方API HTTP参考。', '[vLLM Documentation](https://docs.vllm.ai/) — 高吞吐量推论服务器文档；对高并发团队的超越Ollama升级路径。', '[GitHub Actions Documentation](https://docs.github.com/en/actions) — 自托管运行器、秘密和上述工作流中使用的GitHub Actions JavaScript SDK的官方参考。', '[GitHub Advanced Security定价](https://github.com/pricing) — 成本比较的价目表价格参考；验证你实际谈判的条款。', '[Qwen3-Coder模型卡](https://huggingface.co/Qwen/Qwen3-Coder-30B) — 推荐审查模型的架构、上下文窗口和许可条款。', '[GitLab CI/CD参考](https://docs.gitlab.com/ee/ci/) — GitLab团队的等效参考；工作流的LLM调用部分相同。'] },
      faq: { id: 'faq', title: '常见问题', faqs: [{ q: '单个GPU服务器能处理50开发者的CI吗？', a: '单个24 GB GPU（RTX 4090）舒适处理15-25开发者；50开发者需要48 GB卡（L40S、A6000 Ada）或从Ollama到vLLM的转换。瓶颈是PR追踪时段的竞争——周一早上、冲刺结束——不是稳态吞吐量。对于100+开发者，计划多GPU或H100级硬件。' }, { q: '本地代码审查影响PR延迟吗？', a: '通常不会——审查延迟在单个24 GB GPU上典型200行diff为10-30秒，PR作者等待时间由其他CI（构建、测试、lint）支配运行远长。例外是非常大的PR（超过约30K令牌diff）可能取60-90秒；在action级截断或分割这些。' }, { q: '模型看到了什么？', a: 'Ollama默认将每个请求体记录到日志或系统日志（systemd基础OS为`journalctl -u ollama`）。每个去审查的PR diff在该日志中。与GPU服务器发送接口上的`tcpdump`结合以证明零外部数据。完整审计表面是一个进程和一个日志文件——与SaaS API代码审查相比审计简单得多。' }, { q: '我能基于本地模型输出阻止PR吗？', a: '是的。Action返回`verdict`字段；如果verdict为`block`，action以非零退出，如果分支保护规则需要传递检查则阻止合并。推荐是第一个月保持`block`禁用（仅建议），测量假阳性率，仅在率低于约5%时升级阻止。' }, { q: '这在GitLab CI中工作吗？', a: '是的——架构相同。将GitHub Action替换为GitLab CI作业，对Ollama端点执行相同的`curl`，通过GitLab API将响应发回合并请求。模型、提示、缓存、安全模型、硬件规划全部相同。Bitbucket Pipelines、Jenkins、Buildkite工作方式相同。' }, { q: '如何在不破坏管道的情况下保持模型最新？', a: '用`ollama show <model> --modelfile`pin模型digest，使生产CI使用精确版本。模型新版本到达时，在staging拉取，运行小的代表性PR diff测试套件，比较结构化输出到生产版本，仅在回归套件通过后升级。像处理其他依赖升级一样处理模型升级。' }, { q: '我能用这个进行代码生成加审查吗？', a: '是的，但负载为同个GPU竞争并有不同的延迟特性。代码审查是异步的容许30秒响应；编辑器中的交互代码生成需要<2秒延迟。推荐模式：对开发者机器上的编辑器自动完成使用较小模型（Qwen3-Coder 7B）并为审查级CI负载预留自托管GPU服务器。' }, { q: 'GPU服务器的安全模型是什么？', a: '像任何内部服务对待：将服务器绑定到私有接口，在前面放认证（mTLS、shared-secret或仅VPN访问），用默认拒绝限制发送，轮转证书。LLM特定的添加是模型权重供应链审计——pin digest、记录源、定期数据包捕获验证零外泄。' }, { q: '多个repo能共享GPU服务器吗？', a: '是的——GPU服务器就是HTTP端点。任何数量的repo可以调用它只要服务器有容量。对于有10+活跃repos的组织，在Ollama前面的反向代理添加按repo速率限制来防止嘈杂repo（大monorepo、频繁强制push）饥饿他人。' }, { q: '我如何在CI中处理假阳性？', a: '三层。首先，提示设计——设置高严重程度阈值、强制结构化输出、标记tentative结果。其次，action级过滤——仅在`severity >= "high"`时块；显示中/低为评论。第三，反馈循环——允许开发者对每条评论反应（👍/👎），周检查👎s，用明确"不报告X"指令更新系统提示以处理最常见的假阳性类别。第一个月调整后预期5-10%比率；低于5%通过持续迭代可实现。' }] },
      relatedReading: { id: 'related-reading', title: '相关阅读', items: ['[用本地LLM替换GitHub Copilot](/power-local-llm/replace-github-copilot-with-local-llm?lang=zh) — 考虑自托管AI工具团队成本替换的更广泛背景。', '[Continue.dev vs Cline vs Aider：2026年最佳本地编码代理](/power-local-llm/continue-dev-vs-cline-vs-aider-local?lang=zh) — 在管道中运行什么vs交互编辑器工作；模型下的harness层。', '[2026年最佳本地编码模型](/power-local-llm/best-local-coding-models-2026?lang=zh) — 等式的模型端：Qwen3-Coder、DeepSeek、Codestral和许可景。', '[系统提示vs用户提示：有什么区别](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=zh) — 审查提示系统的提示工程anchor。', '[llama.cpp vs Ollama vs vLLM](/local-llms/llamacpp-vs-ollama-vs-vllm?lang=zh) — 推论引擎比较；对高并发团队的vLLM超越Ollama升级路径。', '[Power Local LLM Hub](/power-local-llm?lang=zh) — 完整指南库。'] }
    },
  },
}
