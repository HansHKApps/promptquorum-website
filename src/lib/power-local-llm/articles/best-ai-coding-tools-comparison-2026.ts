// Power Local LLM — Best AI Coding Tools Compared 2026
// Slug: best-ai-coding-tools-comparison-2026
// Affiliate buying guide. Outbound product links use rel="nofollow" (no affiliate
// tags joined yet) and a neutral third-party-link notice. EN block first;
// DE/FR/JA/ZH render as "Coming Soon" until translated.
//
// Prices: May 2026 snapshot. Subscription pricing for developer tools moves
// with plan changes — every price here is a May 2026 estimate, confirm on the
// vendor pricing page before subscribing. Pricing and local-LLM support reuse
// audited data from /local-llms/best-ai-coding-assistant-local-llm.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    next_refresh_due: '2026-11-22',
    theme: 'Overview & Reference',
    title: 'Best AI Coding Tools Compared 2026: Cursor vs Continue.dev',
    seoTitle: 'Best AI Coding Tools 2026: Cursor vs Continue.dev & More',
    intro:
      'Most AI-coding-tool comparisons rank on autocomplete quality and miss the question that decides the purchase for many developers: does the tool run on a local LLM, or does it send your code to a third-party server? For proprietary code, NDA-bound work, or regulated industries, that single answer reorders the whole ranking. This guide compares four tools — Cursor, Continue.dev, GitHub Copilot, and Sourcegraph Cody — on the criteria that bind a real choice: local LLM support, price, IDE coverage, and where your code goes. One caveat on price: developer-tool subscriptions change with plan revisions, so every figure here is a May 2026 snapshot — confirm the current rate on the vendor site before you subscribe.',
    metaDescription:
      'Cursor, Continue.dev, GitHub Copilot and Sourcegraph Cody compared for 2026: local LLM support, price, IDE coverage, and where your code goes.',
    twitterDescription:
      'Cursor, Continue.dev, GitHub Copilot, Sourcegraph Cody — four AI coding tools compared. The decision rule most rankings skip: does it run on a local LLM?',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Qwen2.5 Coder 14B',
      'Qwen2.5 Coder 7B',
      'DeepSeek Coder 33B',
    ],
    current_hardware_mentioned: [
      'Ollama local inference server',
      'LM Studio local inference app',
      'llama.cpp inference engine',
      'NVIDIA RTX 4090',
    ],
    audience:
      'Developers choosing an AI coding tool who want to know which ones run on a local LLM and what each costs. Assumes familiarity with VS Code or JetBrains IDEs and with Ollama, but not with specific AI-coding-tool products.',
    readTime: '13 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AI coding tools',
    targetKeywords: [
      'best ai coding tools 2026',
      'cursor vs continue.dev',
      'ai coding tool local llm support',
      'github copilot vs cursor',
      'sourcegraph cody review 2026',
    ],
    leadAnswerBlock:
      '**The best AI coding tool depends on whether you need local LLM support: Continue.dev is the free, open-source pick built around Ollama; Cursor is the most polished paid editor; GitHub Copilot is the cloud-only default for the GitHub ecosystem; and Sourcegraph Cody is the codebase-wide pick for teams.**',
    quickAnswerTop: {
      en: {
        question: 'What is the best AI coding tool in 2026?',
        answer:
          'It depends on your priority. Continue.dev is the clear pick for local-first developers — free, open source, and built with Ollama and LM Studio as primary targets. Cursor (~$20/month) is the most polished editor and supports a local LLM through a custom endpoint. GitHub Copilot (~$10/month) is cloud-only but integrates tightly with GitHub. Sourcegraph Cody gives a team codebase-wide context.',
        bullets: [
          'Best for local LLMs: Continue.dev — free, open source, native Ollama support',
          'Most polished editor: Cursor, ~$20/month, local LLM via custom endpoint',
          'GitHub ecosystem default: GitHub Copilot, ~$10/month, cloud-only',
          'Best codebase-wide context for teams: Sourcegraph Cody, ~$9/user/month standard',
          'Subscription prices change — treat every figure as a May 2026 snapshot',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Editor\'s Choice', anchor: '#editors-choice' },
      { label: 'Tool Comparison Table', anchor: '#comparison-table' },
      { label: 'Which Tool Should You Choose?', anchor: '#which-tool' },
      { label: 'Continue.dev', anchor: '#continue-dev' },
      { label: 'Cursor', anchor: '#cursor' },
      { label: 'GitHub Copilot', anchor: '#github-copilot' },
      { label: 'Sourcegraph Cody', anchor: '#sourcegraph-cody' },
      { label: 'Decision Flowchart', anchor: '#decision-flowchart' },
      { label: 'Where to Sign Up & Pricing', anchor: '#where-to-buy' },
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
          '**Local LLM support is the binding criterion for privacy work.** If your code is proprietary, NDA-bound, or regulated, the question is not autocomplete quality — it is whether the tool can run on a local LLM so the code never leaves your machine.',
          '**Best for local LLMs: Continue.dev** — free, open source (Apache 2.0), and built with Ollama, LM Studio, and llama.cpp as native targets. All features work locally with no account required.',
          '**Most polished editor: Cursor** — roughly $20/month for the Pro tier, the best autocomplete experience, and local LLM support through a custom OpenAI-compatible endpoint. Closed source.',
          '**GitHub ecosystem default: GitHub Copilot** — roughly $10/month, tight GitHub integration, but cloud-only: it has no local LLM mode, so code context is sent to the provider.',
          '**Best codebase context for teams: Sourcegraph Cody** — codebase-wide context for refactoring, plus team admin and audit logs. Local LLM support via Ollama; the standard tier runs about $9/user/month and an enterprise tier costs more.',
          '**A local LLM needs a GPU.** Local coding models want roughly 8 GB of VRAM or more — Qwen2.5 Coder 7B fits smaller systems, 14B is the mid-size default, and 33B-class models want 24 GB. With no GPU, a cloud tool is the only option.',
          '**Cloud tools still win on raw quality and setup speed.** Top cloud coding models lead local options on hard problems, and a cloud tool is productive in minutes versus the longer setup of a local LLM stack.',
          '**Prices change with plan revisions.** Treat every figure here as a May 2026 snapshot and confirm the current rate and tier on the vendor pricing page.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Best local LLM support:** Continue.dev — native Ollama, LM Studio, and llama.cpp integration; setup is roughly 5 minutes.',
          '**Best autocomplete UX:** Cursor — a VS Code fork; local LLM via a custom endpoint takes roughly 15 minutes to configure.',
          '**Only cloud-only tool here:** GitHub Copilot — no local LLM mode; code context goes to the provider.',
          '**Best for teams:** Sourcegraph Cody — codebase-wide context, admin console, and audit logs.',
          '**Local LLM hardware floor:** roughly 8 GB of VRAM; Qwen2.5 Coder 14B is the mid-size default coding model.',
          '**Open source:** only Continue.dev (Apache 2.0); Cursor, GitHub Copilot, and Cody IDE extensions are closed.',
          '**2026 pricing reality:** developer-tool subscriptions change with plan revisions — treat figures as a May 2026 snapshot.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Editor\'s Choice: Continue.dev',
        sponsoredSlot: true,
        content:
          '**For developers who want an AI coding tool that runs on a local LLM, Continue.dev is the pick — it is free, open source, and built with Ollama and LM Studio as primary targets.** It supports VS Code, JetBrains IDEs, and Vim equally, all features work fully offline with local models, and no account is required for local-only use. If you want the most polished editor experience and will pay for it, Cursor is the better choice; if your code is public and you live in the GitHub ecosystem, GitHub Copilot is the simplest path. Choose Continue.dev when keeping code on your own machine and paying nothing are both priorities.',
        callouts: [
          {
            type: 'note',
            text: 'This Editor\'s Choice reflects local-LLM capability and price only. PromptQuorum is not enrolled in any affiliate program and the links below carry no affiliate tags — they are plain reference links that earn no commission.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.continue.dev/',
            productName: 'Continue.dev',
            productCategory: 'dev-tool',
            priceRange: '0-0',
            label: 'Get Continue.dev on continue.dev',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'How the Four AI Coding Tools Compare in 2026',
        content:
          'Local LLM support, IDE coverage, and open-source status are taken from each vendor\'s published documentation. Pricing is a May 2026 snapshot of the standard individual or per-user tier — vendors revise plans, so confirm the current figure and tier on the vendor pricing page before subscribing. Local LLM support ranges from native (Continue.dev) to custom-endpoint configuration (Cursor) to Ollama configuration (Cody) to none (GitHub Copilot).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For AI coding tools, whether the tool runs on a local LLM decides if your code stays on your machine — check that first, then compare autocomplete quality and price.',
          },
          {
            type: 'plain-terms',
            text: 'Every AI coding tool needs a model to think with. Some can use a model running on your own computer, so your code never leaves the building. Others only use the vendor\'s cloud model, which means your code is uploaded. Decide which of those you need before comparing anything else.',
          },
        ],
        columns: ['Tool', 'Local LLM', 'Price (May 2026)', 'Open source', 'IDEs', 'Best for'],
        rows: [
          {
            'Tool': 'Continue.dev',
            'Local LLM': 'Native — Ollama, LM Studio, llama.cpp',
            'Price (May 2026)': 'Free',
            'Open source': 'Yes — Apache 2.0',
            'IDEs': 'VS Code, JetBrains, Vim',
            'Best for': 'Local-first developers',
          },
          {
            'Tool': 'Cursor',
            'Local LLM': 'Via custom OpenAI-compatible endpoint',
            'Price (May 2026)': '~$20/month (Pro)',
            'Open source': 'No — closed',
            'IDEs': 'Cursor (VS Code fork)',
            'Best for': 'Most polished editor experience',
          },
          {
            'Tool': 'GitHub Copilot',
            'Local LLM': 'No — cloud only',
            'Price (May 2026)': '~$10/month',
            'Open source': 'No — closed',
            'IDEs': 'VS Code, JetBrains, Vim',
            'Best for': 'GitHub ecosystem integration',
          },
          {
            'Tool': 'Sourcegraph Cody',
            'Local LLM': 'Via Ollama configuration',
            'Price (May 2026)': '~$9/user/month standard; enterprise tier costs more',
            'Open source': 'Partial — CLI open, IDE extensions closed',
            'IDEs': 'VS Code, JetBrains, Neovim',
            'Best for': 'Teams needing codebase-wide context',
          },
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'Which Tool Should You Choose?',
        content:
          '**Your privacy requirement decides whether a local LLM is mandatory; budget and team size break the remaining ties.** Find the row that matches your situation.',
        columns: ['Your situation', 'Choose this'],
        rows: [
          { 'Your situation': 'My code is proprietary and must stay on my machine', 'Choose this': 'Continue.dev + a local LLM' },
          { 'Your situation': 'I want the best free option with no account', 'Choose this': 'Continue.dev' },
          { 'Your situation': 'I want the most polished editor and will pay for it', 'Choose this': 'Cursor (~$20/month)' },
          { 'Your situation': 'My code is public and I live in the GitHub ecosystem', 'Choose this': 'GitHub Copilot (~$10/month)' },
          { 'Your situation': 'My team needs codebase-wide context for refactoring', 'Choose this': 'Sourcegraph Cody' },
          { 'Your situation': 'I have no GPU and cannot run a local LLM', 'Choose this': 'GitHub Copilot or Cursor (cloud models)' },
          { 'Your situation': 'I am unsure and want a safe, zero-cost starting point', 'Choose this': 'Continue.dev — free, then add a paid tool if you outgrow it' },
        ],
      },
      continueSection: {
        id: 'continue-dev',
        title: 'Continue.dev: The Best Local LLM Coding Tool',
        content:
          '**Continue.dev is the pick when you want an AI coding tool that runs on a local LLM, because it was built with Ollama, LM Studio, and llama.cpp as native targets rather than afterthoughts.** It is free, open source under Apache 2.0, and works in VS Code, JetBrains IDEs, and Vim — all features run fully offline with a local model.',
        items: [
          '**Local LLM support:** native integration with Ollama, LM Studio, llama.cpp, and any OpenAI-compatible endpoint — point it at your local endpoint in a config file and it works, in roughly 5 minutes.',
          '**Price:** free, with no premium tier; open source under the Apache 2.0 license.',
          '**IDEs:** VS Code, JetBrains (IntelliJ, PyCharm, GoLand, and others), and Vim are all supported equally.',
          '**Privacy:** in local-models mode there are zero network calls — suitable for air-gapped and NDA-bound work; no account is required for local-only use.',
          '**Why choose Continue.dev:** you own a GPU, value keeping code on your machine, and want to pay nothing.',
          '**Why skip Continue.dev:** if you want the most polished IDE experience or strong team-collaboration features, Cursor or Cody fit better; advanced setups require editing a JSON config.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pair Continue.dev with Qwen2.5 Coder for local coding. The 7B model fits smaller GPUs, the 14B model is the mid-size default, and a 33B-class model wants roughly 24 GB of VRAM. Match the model to your GPU first.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.continue.dev/',
            productName: 'Continue.dev',
            productCategory: 'dev-tool',
            priceRange: '0-0',
            label: 'Get Continue.dev on continue.dev',
          },
        ],
      },
      cursorSection: {
        id: 'cursor',
        title: 'Cursor: The Most Polished Editor',
        content:
          '**Cursor is the pick when you want the most polished AI coding experience and will pay roughly $20/month for it.** It is a VS Code fork with AI built in, the autocomplete quality is the strongest of the four, and it supports a local LLM through a custom OpenAI-compatible endpoint.',
        items: [
          '**Price:** a limited free tier and a Pro tier at roughly $20/month as a May 2026 snapshot.',
          '**Local LLM support:** available by configuring your local model as a custom OpenAI-compatible API endpoint — workable, but fiddlier than Continue.dev, roughly 15 minutes to set up.',
          '**Editor:** a VS Code fork, highly optimized; the autocomplete is the most polished in this comparison, and the agentic Composer mode handles multi-step edits.',
          '**Privacy caveat:** with cloud models, code context and selections are sent to Cursor\'s servers; its Privacy Mode reduces but does not eliminate data sharing, and some agentic features prefer cloud models.',
          '**Why choose Cursor:** you want the best editor experience and accept a per-person subscription.',
          '**Why skip Cursor:** if you need a fully local, zero-cost, open-source workflow, Continue.dev is the better fit; Cursor is closed source and IDE choice is limited to its own fork.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cursor supports a local LLM, but some agentic features (such as Composer) work better with cloud models and may fall back to them. For a strictly local workflow with no cloud fallback, Continue.dev is the more predictable choice.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.cursor.com/pricing',
            productName: 'Cursor Pro',
            productCategory: 'dev-tool',
            priceRange: '0-20',
            label: 'Check Cursor price on cursor.com',
          },
        ],
      },
      githubCopilotSection: {
        id: 'github-copilot',
        title: 'GitHub Copilot: The GitHub Ecosystem Default',
        content:
          '**GitHub Copilot is the pick when your code is public or already on GitHub and you want the simplest cloud option — but it is cloud-only, with no local LLM mode.** At roughly $10/month it is the lowest-priced paid tool here, and it integrates tightly with the GitHub workflow.',
        items: [
          '**Price:** roughly $10/month for the individual plan as a May 2026 snapshot — the cheapest paid tool in this comparison.',
          '**Local LLM support:** none. GitHub Copilot runs only on cloud models, so code context is sent to the provider — this is the decisive limitation for proprietary or regulated code.',
          '**IDEs:** VS Code, JetBrains, and Vim are supported, with the tightest fit inside the GitHub-centered workflow.',
          '**Privacy:** code context is sent to the provider; an enterprise tier adds compliance commitments but data still leaves your network.',
          '**Why choose GitHub Copilot:** your code is public or open source, privacy is not the constraint, and you want low-friction GitHub integration.',
          '**Why skip GitHub Copilot:** if your code must stay local, GitHub Copilot cannot do that — choose Continue.dev or Cursor with a local LLM instead.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'GitHub Copilot has no local LLM mode. If your work involves proprietary code, NDAs, or a regulated industry, GitHub Copilot is the wrong tool — its code context always leaves your machine. Use a local-capable tool for that work.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://github.com/features/copilot',
            productName: 'GitHub Copilot',
            productCategory: 'dev-tool',
            priceRange: '0-10',
            label: 'Check GitHub Copilot price on github.com',
          },
        ],
      },
      sourcegraphCodySection: {
        id: 'sourcegraph-cody',
        title: 'Sourcegraph Cody: The Codebase-Wide Pick for Teams',
        content:
          '**Sourcegraph Cody is the pick when a team needs codebase-wide context — it understands the whole project, which is what large refactorings and multi-file changes depend on.** It supports a local LLM through Ollama configuration and adds team admin controls and audit logs.',
        items: [
          '**Codebase context:** Cody reads across the entire project, making it the strongest of the four for refactoring and multi-file edits.',
          '**Price:** a standard tier at roughly $9/user/month as a May 2026 snapshot, with an enterprise tier that costs more — confirm the current tiers on the vendor pricing page.',
          '**Local LLM support:** available via Ollama configuration; chat and completions can run locally, though Cody\'s design is cloud-first and local is the secondary path.',
          '**Team features:** an admin console, audit logs, and seat management — the reason Cody fits compliance-sensitive teams.',
          '**IDEs:** VS Code, JetBrains, and Neovim; the CLI is open source while the IDE extensions are closed.',
          '**Why choose Cody:** you run a team of several developers that needs codebase-wide context, admin controls, and audit logs.',
          '**Why skip Cody:** a solo developer gets a better local-LLM experience from Continue.dev and a better editor from Cursor — Cody\'s strengths are team-scale.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Cody supports a local LLM via Ollama, but it is cloud-first by design — inline completions default to cloud and you must select the local model. For a local-first solo workflow, Continue.dev is the cleaner fit; Cody earns its place on team-scale codebase context.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://sourcegraph.com/cody',
            productName: 'Sourcegraph Cody',
            productCategory: 'dev-tool',
            priceRange: '0-59',
            label: 'Check Sourcegraph Cody price on sourcegraph.com',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Decision Flowchart: Pick Your AI Coding Tool in Four Questions',
        content:
          '**Four questions, in order, route most developers to one tool.**',
        items: [
          '**1. Must your code stay on your own machine?** Yes: you need local LLM support — continue to question 2. No: a cloud tool is fine — skip to question 3.',
          '**2. Do you have a GPU for a local LLM?** Yes: Continue.dev (free) or Cursor (paid, with a custom endpoint). No: a local LLM is not possible — a cloud tool is the only option.',
          '**3. Solo developer or a team?** Solo: Cursor for the best editor, GitHub Copilot for the cheapest GitHub-integrated option. Team: continue to question 4.',
          '**4. Does the team need codebase-wide context and audit logs?** Yes: Sourcegraph Cody. No: GitHub Copilot for ecosystem fit, or Continue.dev if local LLM support is still wanted.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Choose an AI coding tool by deciding whether code must stay local first, whether you have a GPU second, solo-versus-team third, and whether you need codebase-wide context last.',
          },
          {
            type: 'plain-terms',
            text: 'Start with the hard rule: does the code have to stay on your machine? If yes, you need a tool that runs a local model and a GPU to run it on. If no, the only questions left are how polished an editor you want and whether your team needs project-wide understanding.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Where to Sign Up & Pricing',
        content:
          '**Sign up for each tool on the vendor\'s own site, and check which tier the advertised price covers.** The links below go straight to each vendor; they carry no affiliate tags and earn no commission.',
        items: [
          '**Continue.dev:** install from continue.dev — free and open source, no account needed for local-only use.',
          '**Cursor:** subscribe at cursor.com — a limited free tier exists; the Pro tier is roughly $20/month as a May 2026 snapshot.',
          '**GitHub Copilot:** subscribe at github.com/features/copilot — roughly $10/month for the individual plan; cloud-only, with no local LLM mode.',
          '**Sourcegraph Cody:** sign up at sourcegraph.com/cody — a standard tier near $9/user/month and an enterprise tier that costs more; confirm the current tiers.',
          '**Try free first:** Continue.dev is free, and Cursor and Cody have free tiers — test against your real workflow before paying.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Developer-tool pricing changes with plan revisions. Every figure in this guide is a May 2026 snapshot — open the vendor pricing page before subscribing and confirm which tier (individual, per-user, or enterprise) the price covers.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.continue.dev/',
            productName: 'Continue.dev',
            productCategory: 'dev-tool',
            priceRange: '0-0',
            label: 'Get Continue.dev on continue.dev',
          },
          {
            url: 'https://www.cursor.com/pricing',
            productName: 'Cursor',
            productCategory: 'dev-tool',
            priceRange: '0-20',
            label: 'Check Cursor price on cursor.com',
          },
          {
            url: 'https://github.com/features/copilot',
            productName: 'GitHub Copilot',
            productCategory: 'dev-tool',
            priceRange: '0-10',
            label: 'Check GitHub Copilot price on github.com',
          },
          {
            url: 'https://sourcegraph.com/cody',
            productName: 'Sourcegraph Cody',
            productCategory: 'dev-tool',
            priceRange: '0-59',
            label: 'Check Sourcegraph Cody price on sourcegraph.com',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes When Choosing an AI Coding Tool',
        items: [
          '**Ranking on autocomplete quality before checking local LLM support.** For proprietary or regulated code, whether the tool can run locally is the decisive criterion. Confirm that first, then compare quality.',
          '**Assuming GitHub Copilot has a local mode.** It does not — GitHub Copilot is cloud-only. For code that must stay on your machine, choose Continue.dev or Cursor with a local LLM.',
          '**Buying a paid tool to run a local LLM that Continue.dev runs for free.** If a fully local, open-source workflow is the goal, Continue.dev does it at zero cost. Pay for Cursor or Cody for their editor or team features, not for local capability alone.',
          '**Trying to run a local LLM with no GPU.** Local coding models want roughly 8 GB of VRAM or more. On a machine with no dedicated GPU, a local LLM is not viable — use a cloud tool instead.',
          '**Mismatching the local model to the GPU.** Qwen2.5 Coder 7B fits smaller GPUs, 14B is the mid-size default, and a 33B-class model wants roughly 24 GB of VRAM. Pick the model your GPU can actually hold.',
          '**Anchoring on an old price or the wrong tier.** Developer-tool plans change, and a per-user price is not an individual price. Confirm the current figure and tier on the vendor pricing page.',
          '**Picking a team tool for solo work.** Sourcegraph Cody\'s strengths are codebase-wide context and audit logs — team-scale features. A solo developer is better served by Continue.dev or Cursor.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Best AI Coding Assistant for Local LLM](/local-llms/best-ai-coding-assistant-local-llm) — PromptQuorum comparison of AI coding tools by local-LLM support, with verified pricing and setup testing.',
          '[Continue.dev — Documentation](https://docs.continue.dev/) — official Continue.dev documentation, including Ollama and LM Studio configuration.',
          '[Cursor — Pricing](https://www.cursor.com/pricing) — official Cursor pricing and tier details.',
          '[GitHub Copilot — Plans](https://github.com/features/copilot/plans) — official GitHub Copilot plan and pricing details.',
          '[Sourcegraph Cody — Pricing](https://sourcegraph.com/pricing) — official Sourcegraph Cody pricing and tier details.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Which AI coding tool has the best local LLM support?',
            a: 'Continue.dev. It was built with local LLMs — Ollama, LM Studio, and llama.cpp — as primary targets, not afterthoughts. Setup takes roughly 5 minutes: point it at your local endpoint in a config file. All features work locally, it is free and open source under Apache 2.0, and no account is required for local-only use.',
          },
          {
            q: 'Can Cursor run on a local LLM?',
            a: 'Yes, by configuring your local model as a custom OpenAI-compatible API endpoint. Completions then route to your local model. This works but is fiddlier than Continue.dev — roughly 15 minutes to set up — and some agentic features such as Composer may prefer or fall back to cloud models.',
          },
          {
            q: 'Does GitHub Copilot support local LLMs?',
            a: 'No. GitHub Copilot is cloud-only and has no local LLM mode, so code context is always sent to the provider. For proprietary code, NDA-bound work, or regulated industries, that rules GitHub Copilot out — choose Continue.dev or Cursor with a local LLM instead. GitHub Copilot suits public or open-source code where privacy is not the constraint.',
          },
          {
            q: 'Is Continue.dev really free?',
            a: 'Yes. Continue.dev is genuinely free and open source under the Apache 2.0 license, with no premium tier. For a solo developer using a local LLM there is no catch — no account, no subscription. The project funds development through optional hosted services and enterprise contracts, not by charging individual local users.',
          },
          {
            q: 'What hardware do I need to run a local LLM for coding?',
            a: 'A GPU with roughly 8 GB of VRAM or more. Qwen2.5 Coder 7B fits smaller systems, the 14B model is the mid-size default, and a 33B-class model wants roughly 24 GB of VRAM. On a machine with no dedicated GPU, running a local coding LLM is not viable, and a cloud tool is the only practical option.',
          },
          {
            q: 'Which tool is best for a development team?',
            a: 'Sourcegraph Cody, when the team needs codebase-wide context. Cody reads across the whole project, which is what large refactorings depend on, and adds an admin console and audit logs for compliance-sensitive teams. Its standard tier runs about $9/user/month as a May 2026 snapshot, with an enterprise tier that costs more.',
          },
          {
            q: 'Cursor or Continue.dev — which should I pick?',
            a: 'Pick Continue.dev if a free, fully local, open-source workflow is the priority — it runs on Ollama with no cost and no account. Pick Cursor (roughly $20/month) if you want the most polished editor and the strongest autocomplete and accept a per-person subscription. Cursor can use a local LLM, but Continue.dev is the more predictable local-first choice.',
          },
          {
            q: 'When is a cloud AI coding tool the better choice?',
            a: 'When your code is public or open source so privacy is not a constraint, when you have no GPU to run a local model, or when setup speed matters more than locality — a cloud tool is productive in minutes. Top cloud coding models also lead local options on hard algorithmic problems. For that work, GitHub Copilot or Cursor with cloud models is the practical pick.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Compare AI coding assistants by local-LLM support](/local-llms/best-ai-coding-assistant-local-llm) — the deeper feature and setup comparison behind this guide.',
          '[Pick a local LLM for coding work](/local-llms/best-local-llms-for-coding) — which models, including Qwen2.5 Coder, are strongest for code generation.',
          '[Set up your first local LLM with Ollama](/local-llms/run-first-local-llm) — the step-by-step Ollama install that Continue.dev connects to.',
          '[Choose a GPU for running local coding models](/local-llms/best-gpus-for-local-llms) — VRAM requirements for the 7B, 14B, and 33B coding models referenced here.',
        ],
      },
    },
  },
}
