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
}
