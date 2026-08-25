import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-25',
    last_full_refresh: '2026-08-25',
    theme: 'Coding Assistants',
    title: 'Best IDE Plugins for Local LLMs in 2026 (VS Code, JetBrains & LM Studio)',
    seoTitle: 'Best IDE for Local LLMs 2026 (Ollama, LM Studio & JetBrains)',
    metaDescription: 'Cline is the best IDE for local LLMs in 2026: free, works with Ollama and LM Studio in VS Code and every JetBrains IDE (PyCharm, Rider, CLion, GoLand).',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-en.webp',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    leadAnswerBlock: '**Cline (VS Code + JetBrains) is the best free IDE for local LLMs in 2026: it connects natively to Ollama and LM Studio (plus any OpenAI-compatible API), supports agentic file editing, terminal commands, and MCP tools, and runs entirely on your own hardware. Note: Continue.dev (previously ranked #1) was acquired by Cursor in June 2026 — v2.0.0-vscode is its final release and the repo is now read-only.**',
    quickAnswerTop: {
      question: 'What is the best IDE plugin for running local AI models while coding?',
      answer: 'Cline (free, open-source, BYOK) is the best IDE plugin for Ollama, LM Studio, and local LLMs in 2026 — after Continue.dev was acquired by Cursor in June 2026 and its repo frozen at v2.0.0-vscode. Cline works in VS Code and across the whole JetBrains family (PyCharm, Rider, CLion, GoLand, WebStorm, RustRover), and supports agentic file editing and MCP tools. For fully offline/compliance use, Bodega One Code is the strongest option. For autocomplete-only, Tabby is the lightest. Aider works best in the terminal.',
      bullets: [
        'Cline: best overall, actively maintained — reads/writes files, runs terminal commands, uses MCP tools, VS Code + full JetBrains family (PyCharm, Rider, CLion, GoLand, WebStorm, RustRover), free BYOK or $9.99+/mo ClinePass',
        'Bodega One Code: free-for-personal-use, local-first standalone IDE (not a plugin) — built-in coding agent, bring-your-own-LLM, complete offline/air-gap support, one-time $39 for the commercial tier (not yet available for purchase)',
        'Continue: still installs and runs but unmaintained (acquired by Cursor June 2026, v2.0.0-vscode final, cloud data deleted after July 15, 2026) — works with Ollama, no further development',
        'Tabby: best self-hosted autocomplete — runs its own inference server, 1–3B models, ~33K GitHub stars',
        'Aider: best terminal-native — git-aware, multi-file edits, 44K+ GitHub stars',
        'Cursor: best commercial option — free Hobby tier, Pro $20/mo, Pro+ $60/mo, Ultra $200/mo, local models via Ollama/LM Studio Custom API',
      ],
      updatedDate: '2026-08-25',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev acquired by Cursor (June 2026) — v2.0.0-vscode is the final release, repo read-only, cloud data deleted after July 15, 2026; still runs locally with Ollama but no longer maintained',
          'Cline is now the best maintained free BYOK alternative: VS Code + the full JetBrains family (PyCharm, Rider, CLion, GoLand, WebStorm, RustRover), agentic file editing, MCP tools, 5M+ installs',
          'Bodega One Code is a free-for-personal-use, local-first standalone IDE with a built-in coding agent and bring-your-own-LLM (BYOL) support — full offline/air-gap operation with no forced subscription',
          'Tabby runs its own inference server (1–3B models) — lowest latency autocomplete for teams, self-hosted under Apache 2.0',
          'Aider is the terminal-first option — git-commit-aware, multi-file rewrites, 44K+ GitHub stars',
          'Cursor (free Hobby / $20 Pro / $60 Pro+ / $200 Ultra per month) acquired both Supermaven and Continue.dev; SpaceX completed its $60B acquisition of Cursor in August 2026',
          'All tools work fully offline against a local backend (Ollama, LM Studio, or a self-hosted server); only Cursor requires a cloud-connected app even when using local models for inference',
        ],
      },
      buyingTable: {
        title: 'Compare All Six at a Glance',
        content: 'Every plugin here connects to a local model — the differences are what kind of coding you do and how much of a commercial ecosystem you want around it.',
        columns: ['Plugin', 'Best for', 'Local backend', 'Price', 'Get it'],
        rows: [
          { 'Plugin': 'Cline', 'Best for': 'Most users / agentic tasks', 'Local backend': 'Ollama, LM Studio, 30+ APIs', 'Price': 'Free (BYOK) / $9.99+/mo', 'Get it': '[Install free →](https://github.com/cline/cline)' },
          { 'Plugin': 'Bodega One Code', 'Best for': 'Offline / air-gapped / compliance', 'Local backend': 'Ollama, LM Studio, llama.cpp, 10+', 'Price': 'Free (personal) / $39 one-time', 'Get it': '[Try free →](https://bodegaone.ai)' },
          { 'Plugin': 'Continue (legacy)', 'Best for': 'Existing Continue users only', 'Local backend': 'Ollama, LM Studio, llama.cpp', 'Price': 'Free (unmaintained)', 'Get it': '[Continue.dev →](https://continue.dev)' },
          { 'Plugin': 'Tabby', 'Best for': 'Fastest self-hosted autocomplete', 'Local backend': 'Own inference server (1–3B)', 'Price': 'Free, open-source', 'Get it': '[Self-host free →](https://tabby.tabbyml.com)' },
          { 'Plugin': 'Aider', 'Best for': 'Terminal + git workflow', 'Local backend': 'Ollama, LM Studio, OpenAI-compat', 'Price': 'Free, open-source', 'Get it': '[Install free →](https://aider.chat)' },
          { 'Plugin': 'Cursor', 'Best for': 'Polished IDE, cloud + local mix', 'Local backend': 'Ollama, LM Studio (Custom API)', 'Price': 'Free Hobby / $20–$200/mo', 'Get it': '[Start free →](https://cursor.com)' },
        ],
        note: 'Skip all six if you have no local model running yet — pick hardware and a backend (Ollama or LM Studio) first, then come back to this table. Every link above is a plain product link with no current affiliate relationship — see the disclosure note at the top of this page.',
      },
      clineCta: {
        title: 'Start With Cline: Install It in the Next 2 Minutes',
        content: 'Cline is the default recommendation on this page. Here is why, and how to get it installed right now.',
        items: [
          '**Free and open-source** — bring your own key or point it at a local endpoint, no forced subscription (ClinePass at $9.99+/mo is optional, for managed routing without your own API key).',
          '**Works in VS Code and the full JetBrains family** — IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine, and DataGrip.',
          '**Connects natively to Ollama and LM Studio** — plus 30+ other OpenAI-compatible providers, with no cloud dependency required.',
          '**Actually agentic** — reads/writes files, runs terminal commands, and uses MCP tools, not just inline autocomplete.',
          '**Limitation**: reliable multi-step agentic tasks need a 32B-class local model (24 GB+ VRAM); 14B models handle simpler edits but struggle with complex multi-file refactors.',
        ],
        affiliateLinks: [
          { label: 'Install Cline for VS Code (free)', url: 'https://github.com/cline/cline', productName: 'Cline for VS Code', productCategory: 'dev-tool' },
          { label: 'Install Cline for JetBrains (free)', url: 'https://cline.bot/jetbrains', productName: 'Cline for JetBrains', productCategory: 'dev-tool' },
        ],
      },
      decisionGuide: {
        title: 'Which One Should You Use?',
        content: 'Match your priority to a plugin — all six are covered in full detail further down this page.',
        items: [
          '**Easiest overall, want it working today** → [Cline](https://github.com/cline/cline) — free, agentic, VS Code + JetBrains.',
          '**Fully offline, air-gapped, or under a compliance mandate** → [Bodega One Code](https://bodegaone.ai) — standalone IDE with no cloud component at all.',
          '**Fastest autocomplete for a team, self-hosted** → [Tabby](https://tabby.tabbyml.com) — its own inference server, sub-200ms completions.',
          '**Terminal-first, git-aware workflow** → [Aider](https://aider.chat) — multi-file edits, auto-commits.',
          '**Want a polished commercial IDE with an occasional local option** → [Cursor](https://cursor.com) — cloud-first by design, local models via Ollama/LM Studio in its Custom API setting.',
          '**Already using Continue** → it still installs and runs (Ollama, BYO-LLM), but the project has been unmaintained since the June 2026 Cursor acquisition — plan a move to Cline when convenient, not urgently.',
        ],
      },
      rankedList: {
        title: 'Best IDE Plugins for Local LLMs — Ranked',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline is the best IDE plugin for local LLMs in 2026 because it supports Ollama natively, works in both VS Code and JetBrains, and adds agentic file editing and MCP tools without any cloud dependency — Continue, the former #1 pick, was acquired by Cursor in June 2026 and is no longer actively developed.',
          },
          {
            type: 'plain-terms',
            text: 'An IDE plugin for local LLMs connects your code editor (VS Code, IntelliJ) to a model running on your own machine (via Ollama, LM Studio, or llama.cpp). The model sees your code and responds — no code leaves your computer, no API fees, no usage limits.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Cline — Best Overall (Free, Open-Source, Actively Maintained)',
            content: 'Cline (formerly Claude Dev) is the best-maintained agentic coding plugin for local LLMs in 2026 — it took the top spot after Continue was acquired by Cursor in June 2026. It reads and writes files, runs terminal commands, browses the web (via browser tool), and uses MCP servers. With Ollama + Qwen3-Coder 32B, Cline can implement entire features from a prompt. Limitations: 32B models are required for reliable multi-step agentic tasks; 14B models work for simple tasks. Pricing: free (BYOK — bring your own API key from Anthropic, OpenAI, or 30+ providers); ClinePass at $9.99/month (intro $4.99 first month) for managed routing with no API key needed; Teams at $20/user/month (first 10 seats free). VS Code and the full JetBrains family: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine, and DataGrip. Compatible backends: Ollama, LM Studio, LiteLLM proxy, and 30+ cloud providers. 5M+ installs across VS Code, JetBrains, and other editors.',
            affiliateLinks: [
              { label: 'Cline on VS Code Marketplace (free)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — Best Free Local-First IDE With a Built-In Coding Agent',
            content: 'Bodega One Code is a local-first AI IDE built around a coding agent from the ground up, rather than an assistant bolted onto an existing editor. It supports bring-your-own-LLM (BYOL) across 10+ backends, including Ollama, LM Studio, llama.cpp, LocalAI, KoboldCpp, GPT4All, and MLX for local models, plus direct cloud providers if you want them: point it at any backend and it runs the agent loop — planning, editing, and executing — entirely against that model, with no lock-in to a single provider. The entire application runs on your machine, including a full offline and air-gap mode that blocks outbound network connections so no telemetry or model calls leave the machine, so it works in network-isolated environments where cloud-connected tools like Cursor or GitHub Copilot cannot run at all. Pricing: free for personal use during the current open beta, including commercial-use rights for now; a paid one-time Pro tier (price still to be announced) is planned for full release, adding commercial-use rights, unlimited workspaces, and a second machine, but is not yet available for purchase. There is no subscription and no usage metering for local-model use. This makes it a strong fit for regulated industries, government and defense contractors, and any team whose security policy prohibits sending code to a third-party server — the same audience that reaches for local inference in the first place. Compared to Cline, which is a plugin layered onto VS Code, Bodega One Code is a standalone IDE designed around the agent from the start; teams already committed to VS Code will find Cline the easier drop-in, while teams starting fresh or needing guaranteed offline operation get a purpose-built environment with Bodega One Code.',
            affiliateLinks: [
              { label: 'Bodega One Code (free, official site)', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — Still Functional, No Longer Maintained [Acquired by Cursor, June 2026 — Final v2.0.0-vscode]',
            content: 'Continue was the leading open-source AI coding assistant for local LLMs before its June 2026 acquisition by Cursor. It connects to Ollama, LM Studio, llama.cpp, and any OpenAI-compatible API. Features: inline chat (Cmd+L), autocomplete (Tab), model context protocol (MCP) tools, codebase indexing, and custom slash commands. VS Code extension has 2M+ installs. JetBrains plugin works in IntelliJ IDEA, PyCharm, GoLand, WebStorm, and Rider — it does not cover CLion or RustRover. Best local models: Qwen3-Coder 14B (coding), Llama 3.3 8B (chat). Setup: install extension, set provider to Ollama, choose model — done in 2 minutes. Note (June 2026): Continue was acquired by Cursor. Version 2.0.0-vscode, released June 19, 2026, is the final release; the GitHub repo is now read-only, and Continue-hosted cloud data was deleted after July 15, 2026. The extension still installs and runs fully offline with Ollama and BYO-LLM — but no further development from the original team. Community forks are active.',
            affiliateLinks: [
              { label: 'Continue on VS Code Marketplace (free)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — Best Self-Hosted Autocomplete Server',
            content: 'Tabby is a self-hosted coding assistant, built in Rust under Apache 2.0, that runs its own inference server (separate from Ollama). It uses small, specialized code completion models (1–3B parameters) trained specifically for fill-in-the-middle (FIM) autocomplete — significantly faster than using a general 7B model. Current stable release is v0.32.0, with roughly 33K GitHub stars. Tabby IDE extensions exist for VS Code, JetBrains, Vim/Neovim, and Emacs. Best for: teams of 5–50 developers, especially regulated or IP-sensitive teams that want fast (<200ms) autocomplete without sending code to the cloud. Requires a dedicated server or powerful desktop machine — free to self-host with unlimited users, no per-seat fee.',
            affiliateLinks: [
              { label: 'Tabby on GitHub (open-source, self-hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — Best Terminal-Native AI Coding',
            content: 'Aider is a terminal-based AI pair programmer that integrates with git. It understands your full repository structure, makes multi-file edits, and commits changes automatically. Works with Ollama (via --model ollama/qwen2.5-coder:14b), LM Studio, or any OpenAI-compatible API. Best local models: Qwen3-Coder 32B (architect mode) + Qwen3-Coder 7B (editor mode). Aider uses a two-model approach: a large model plans changes, a small model implements them. 44K+ GitHub stars. Cost: free and open-source. Note: Aider is still in 0.x versioning as of 2026, so CLI flags and the .aider.conf.yml format occasionally change between minor releases — check the changelog after upgrading.',
            affiliateLinks: [
              { label: 'Aider on GitHub (open-source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — Best Commercial Option with Local Model Support',
            content: 'Cursor is a VS Code fork with AI features built in. Cursor supports local models via Ollama and LM Studio in its "Custom API" setting. However, Cursor\'s most powerful features (Agent mode with web search, full codebase awareness) require cloud models. The local model integration is functional for chat and simple completions but falls behind Cline for privacy-focused workflows, since Cursor itself remains a cloud-connected application even when inference runs locally. Pricing: Hobby (free, local model use included); Pro at $20/month ($16/month billed annually, includes a $20/month AI credit pool for frontier models; Auto mode is unlimited at no credit cost); Pro+ at $60/month (3x the usage credits); Ultra at $200/month (20x usage); Teams at $40/user/month with centralized billing and SSO. Note: Cursor acquired Supermaven (2024) and Continue.dev (June 2026). SpaceX completed its $60 billion acquisition of Cursor in August 2026, days after SpaceX\'s own IPO — Cursor\'s annualized revenue reportedly grew from around $100 million in early 2025 to more than $4 billion by June 2026. This consolidation makes Cursor the dominant commercial force in AI coding tools — but raises long-term questions about open-source alternatives.',
            pros: [
              'Polished, familiar VS Code fork — near-zero learning curve for existing VS Code users',
              'Local models via Ollama or LM Studio through the Custom API setting',
              'Free Hobby tier includes local model use, not just a trial',
            ],
            cons: [
              'The strongest features (Agent mode, full codebase awareness) require cloud/frontier models, not local ones',
              'Now owned by SpaceX/xAI — a materially different vendor profile than an independent open-source tool',
            ],
            affiliateLinks: [
              { label: 'Start free with Cursor Hobby', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-en.webp',
        imageCaption: 'Best IDE Plugins for Local LLMs, Ranked -- 2026 rankings',
      },
      setupGuide: {
        title: 'Quick Setup: Cline + Ollama in VS Code',
        content: 'Ready to install Cline? → [Install Cline free](https://github.com/cline/cline). Follow these steps to connect it to Ollama — the fastest way to start local LLM coding with the current #1 pick:',
        numberedItems: [
          'Install Ollama: `curl -fsSL https://ollama.com/install.sh | sh`',
          'Pull a coding model: `ollama pull qwen2.5-coder:14b` (or `qwen3-coder:32b` for agentic tasks)',
          'In VS Code, install Cline from the Extensions marketplace',
          'Open the Cline sidebar and click the settings gear icon',
          'Set API Provider to "Ollama", Base URL to `http://localhost:11434`, and Model ID to your pulled model',
          'Restart VS Code — the Cline icon appears in the sidebar',
          'Type a task in the Cline chat panel — it can read/write files and run terminal commands directly',
        ],
      },
      aiderSetupGuide: {
        title: 'Quick Setup: Aider + Ollama (Terminal)',
        content: 'Ready to install Aider? → [Install Aider free](https://aider.chat). For terminal-native, git-aware AI coding — Aider official docs: aider.chat/docs/llms/ollama.html',
        numberedItems: [
          'Install Ollama and pull a model: `ollama pull qwen2.5-coder:32b`',
          'Install Aider: `python -m pip install aider-install && aider-install`',
          'Set the Ollama API base: `export OLLAMA_API_BASE=http://127.0.0.1:11434`',
          'Run Aider pointed at your local model: `aider --model ollama/qwen2.5-coder:32b`',
          'For the two-model architect/editor setup, add `--architect-model ollama/qwen2.5-coder:32b --editor-model ollama/qwen2.5-coder:7b`',
          'Aider auto-commits each change to git — review with `git log` or `git diff HEAD~1`',
        ],
      },
      modelRecommendations: {
        title: 'Best Local Models by Plugin and Task',
        columns: ['Plugin', 'Best Coding Model (Local)', 'Best Chat Model (Local)', 'Min VRAM'],
        rows: [
          { 'Plugin': 'Cline', 'Best Coding Model (Local)': 'Qwen3-Coder 32B Q4', 'Best Chat Model (Local)': 'Qwen3 32B Q4', 'Min VRAM': '24 GB' },
          { 'Plugin': 'Bodega One Code', 'Best Coding Model (Local)': 'Any local model (BYOL)', 'Best Chat Model (Local)': 'Any local model (BYOL)', 'Min VRAM': 'Depends on chosen model' },
          { 'Plugin': 'Continue (legacy)', 'Best Coding Model (Local)': 'Qwen3-Coder 14B Q8', 'Best Chat Model (Local)': 'Llama 3.3 8B Q4', 'Min VRAM': '16 GB' },
          { 'Plugin': 'Tabby', 'Best Coding Model (Local)': 'StarCoder2-7B (built-in)', 'Best Chat Model (Local)': 'N/A (code only)', 'Min VRAM': '8 GB' },
          { 'Plugin': 'Aider', 'Best Coding Model (Local)': 'Qwen3-Coder 14B (editor)', 'Best Chat Model (Local)': 'Qwen3-Coder 32B (architect)', 'Min VRAM': '16–24 GB' },
          { 'Plugin': 'Cursor', 'Best Coding Model (Local)': 'DeepSeek-Coder-V2 (via Ollama)', 'Best Chat Model (Local)': 'Qwen3 14B', 'Min VRAM': '16 GB' },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-en.webp',
        imageCaption: 'Best Local Models by IDE Plugin -- Coding model and minimum VRAM',
        note: 'Need hardware for these models? 8 GB VRAM covers Tabby\'s small completion models; 16 GB handles most 14B coding models (Continue, Aider editor mode, Cursor\'s local option); 24 GB+ is the realistic minimum for reliable 32B agentic work with Cline or Aider\'s architect mode. See [Best GPUs for Local LLMs](/local-llms/best-gpus-for-local-llms) for the full picks, or [Best Budget GPUs for Local LLMs](/local-llms/best-budget-gpus-local-llm) if you\'re starting under 16 GB.',
      },
      lmStudioPlugins: {
        title: 'Best LM Studio Plugins (Not the Same as IDE Plugins)',
        content: 'This is a different question from "which IDE extension connects to LM Studio" (covered above) — and one worth answering directly, since LM Studio is one of the two backends every plugin in this guide connects to. LM Studio has had its own plugin system since late 2024: plugins run inside LM Studio itself — currently as TypeScript/JavaScript code on Node.js in a sandboxed worker, with Python support still in development — and can intercept inference requests, add prompt processors, attach tool-calling backends, or add new UI panels. Install them from the curated marketplace at lmstudio.ai/plugins; each plugin declares required permissions (network access, file-system read) up front, and you can revoke them later from Settings without uninstalling. Common categories as of 2026: web search plugins, RAG/document-retrieval preprocessors, OCR preprocessors, agentic toolset plugins, shell/file-access tools, and memory plugins.',
        items: [
          '**Web search plugins**: let a local model in LM Studio pull live web results into its context — useful since local models have no built-in internet access.',
          '**RAG / document plugins**: index a local folder of PDFs or text files and retrieve relevant chunks automatically per query.',
          '**Agentic toolset plugins**: give the model shell access, file read/write, or multi-step task execution directly inside LM Studio\'s chat UI — the same category of capability Cline provides for VS Code, but running inside LM Studio instead of an editor.',
          '**Memory plugins**: persist context across chat sessions instead of starting fresh each time.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Can Continue replace GitHub Copilot entirely for local use?',
            a: 'As of June 2026, Continue has been acquired by Cursor and v2.0.0-vscode (released June 19, 2026) is the final release; the repo is read-only and Continue-hosted cloud data was deleted after July 15, 2026. The extension still installs and runs offline with Ollama and BYO-LLM, but receives no further development from the original team. For a maintained open-source alternative, Cline is the recommended replacement — it offers the same BYOK model, works in VS Code and the full JetBrains family, and adds agentic file editing. GitHub Copilot Pro costs $10/month with $15/month in AI credits; Cline is free with your own API key.',
          },
          {
            q: 'Which plugin works best for multi-file refactoring?',
            a: 'Cline or Aider. Both can read multiple files, understand dependencies, and make coordinated edits across a codebase. Cline works inside VS Code or JetBrains (better for visual feedback); Aider works in the terminal (better for CI/CD integration and git-aware commits). For 30B+ models with 24 GB VRAM, Cline with Qwen3-Coder 32B handles complex refactoring reliably.',
          },
          {
            q: 'Does Tabby work without a GPU?',
            a: 'Yes — Tabby can run on CPU with small models (1–3B). However, autocomplete latency on CPU is 500ms–2s, which feels sluggish compared to the <200ms target for smooth coding. For CPU-only machines, Cline + Ollama with a fast 1B or 3B model gives better latency control.',
          },
          {
            q: 'Can I use these plugins with LM Studio instead of Ollama?',
            a: 'Yes. LM Studio exposes an OpenAI-compatible API on port 1234 by default. Set your plugin provider to "openai" with base URL `http://localhost:1234/v1` and use any model name from your LM Studio library. Cline, Continue, Aider, and Bodega One Code all support this configuration. Note this is different from LM Studio\'s own plugin system (see the LM Studio Plugins section above) — that\'s for extending LM Studio itself, not connecting an external IDE to it.',
          },
          {
            q: 'Does Cline work in PyCharm, Rider, GoLand, WebStorm, CLion, and RustRover?',
            a: 'Yes — Cline\'s JetBrains plugin, installed from the JetBrains Marketplace, supports the full JetBrains family: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine, and DataGrip. Configure the same Ollama or LM Studio provider settings as the VS Code version. Continue\'s JetBrains plugin (unmaintained since the June 2026 Cursor acquisition) covers a narrower set — IntelliJ IDEA, PyCharm, GoLand, WebStorm, and Rider — but not CLion or RustRover.',
          },
          {
            q: 'Which JetBrains IDEs support local LLM plugins?',
            a: 'Cline and Continue both ship JetBrains plugins. Cline covers the whole family: IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand, Rider, CLion, RustRover, RubyMine, and DataGrip. Continue covers IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand, and Rider only. Install from the JetBrains Marketplace (not the VS Code Marketplace) and configure the same Ollama/LM Studio provider settings as the VS Code version. Tabby also has JetBrains support for autocomplete-only use.',
          },
          {
            q: 'Which of these tools work fully offline for GDPR, HIPAA, or air-gapped environments?',
            a: 'Bodega One Code is built for this specifically: full offline operation with local models, plus an air-gap mode that blocks all outbound network connections so no telemetry or model calls leave the machine. Cline, Continue, Tabby, and Aider all work fully offline too, as long as you point them at a local backend (Ollama, LM Studio, or a self-hosted Tabby server) instead of a cloud API — none of them phone home when configured this way. Cursor\'s local model support (via its Custom API setting) still runs inside a cloud-connected application, so it is not a fit for network-isolated environments.',
          },
          {
            q: 'What is Bodega One Code, and how is it different from Cline?',
            a: 'Bodega One Code is a standalone local-first AI IDE with a built-in coding agent, free for personal use during its current open beta — unlike Cline, which is a plugin added to VS Code or JetBrains, Bodega One Code is a full IDE built around the agent from the start. It supports bring-your-own-LLM (BYOL) across 10+ backends, and it runs entirely offline with air-gap support. A paid one-time Pro tier for commercial use is planned but not yet available for purchase. It is a good fit for regulated or network-isolated environments where a cloud-connected editor cannot be used at all.',
          },
        ],
      },
      finalRecommendations: {
        title: 'My 2026 Recommendations',
        content: 'Six tools, one page — here is the short version if you just want the answer:',
        items: [
          '**Best overall** → [Cline](https://github.com/cline/cline) — free, agentic, VS Code + the full JetBrains family. Install it first.',
          '**Best fully offline / compliance** → [Bodega One Code](https://bodegaone.ai) — standalone IDE, no cloud component.',
          '**Best autocomplete** → [Tabby](https://tabby.tabbyml.com) — self-hosted, sub-200ms.',
          '**Best terminal workflow** → [Aider](https://aider.chat) — git-aware, multi-file.',
          '**Best commercial IDE** → [Cursor](https://cursor.com) — start free on the Hobby tier, add local models via Ollama/LM Studio.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[DeepSeek vs Qwen for Local Coding 2026: Which Wins?](/power-local-llm/deepseek-vs-qwen-coding-local-2026) -- DeepSeek vs Qwen coding comparison — choose the model before setting up the IDE plugin',
          '[Replace GitHub Copilot With a Local LLM](/power-local-llm/replace-github-copilot-with-local-llm) -- full walkthrough for switching from Copilot to a self-hosted model',
          '[Best Local Coding Models 2026](/power-local-llm/best-local-coding-models-2026) -- which models work best inside VS Code and JetBrains',
          '[Continue.dev vs Cline vs Aider: Local LLM Coding Tools 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local) -- compare IDE tools that work with local LLM backends',
          '[Best RAG Tools for Business Documents 2026](/power-local-llm/best-rag-tools-for-business-documents-2026) -- extend local coding AI with document retrieval',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can Continue replace GitHub Copilot entirely for local use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'As of June 2026, Continue was acquired by Cursor and v2.0.0-vscode is its final release (repo read-only, cloud data deleted after July 15, 2026). The extension still runs offline with Ollama, but Cline is now the recommended maintained open-source alternative — free with BYOK, works in VS Code and the full JetBrains family, and adds agentic file editing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which plugin works best for multi-file refactoring?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cline (VS Code + JetBrains) or Aider (terminal). Both read multiple files and make coordinated edits. Cline is better for visual feedback; Aider for git-aware commits. Use 32B models for reliable complex refactoring.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Cline work in PyCharm, Rider, GoLand, WebStorm, CLion, and RustRover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Cline\'s JetBrains plugin supports the full JetBrains family: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine, and DataGrip. Continue\'s JetBrains plugin covers a narrower set — IntelliJ IDEA, PyCharm, GoLand, WebStorm, and Rider — and no longer receives updates.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which of these tools work fully offline for GDPR, HIPAA, or air-gapped environments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bodega One Code is built for this specifically, with a dedicated air-gap mode. Cline, Continue, Tabby, and Aider also work fully offline when pointed at a local backend (Ollama, LM Studio, or a self-hosted server). Cursor remains a cloud-connected application even when using local models, so it is not a fit for network-isolated environments.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Bodega One Code, and how is it different from Cline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bodega One Code is a standalone local-first AI IDE with a built-in coding agent, free for personal use during its current open beta, bring-your-own-LLM (BYOL) support across 10+ backends, and full offline/air-gap operation. Unlike Cline, which is a plugin added to VS Code or JetBrains, Bodega One Code is a complete IDE built around the agent from the start.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Best IDE Plugins for Local LLMs 2026',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: 'Best overall — actively maintained, agentic, VS Code + full JetBrains family, free BYOK' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: 'Best free-for-personal-use local-first IDE with a built-in coding agent — BYOL, full offline/air-gap support' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: 'Still functional but unmaintained since Cursor acquisition, June 2026' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: 'Best self-hosted autocomplete — 1–3B FIM models, all editors' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: 'Best terminal-native — git-aware, multi-file edits, open-source' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: 'Best commercial — free Hobby tier + local model support, $20/month Pro' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Best IDE Plugins for Local LLMs in 2026 (VS Code, JetBrains & LM Studio)',
      description: 'Ranked comparison of Cline, Bodega One Code, Continue, Tabby, Aider, and Cursor for local LLM use in VS Code, the full JetBrains family, and LM Studio. Includes a buying table, setup guides, model recommendations, and hardware guidance.',
      datePublished: '2026-05-26',
      dateModified: '2026-08-25',
      url: 'https://www.promptquorum.com/power-local-llm/best-local-llm-ide-plugins-2026',
      inLanguage: 'en',
      'proficiencyLevel': 'Intermediate',
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-25',
    last_full_refresh: '2026-08-25',
    theme: 'Coding Assistants',
    title: 'Beste IDE-Plugins für lokale LLMs 2026 (VS Code, JetBrains & LM Studio)',
    seoTitle: 'Beste IDE für lokale LLMs 2026 (Ollama, LM Studio & JetBrains)',
    metaDescription: 'Cline ist 2026 die beste IDE für lokale LLMs: kostenlos, funktioniert mit Ollama und LM Studio in VS Code und jeder JetBrains-IDE (PyCharm, Rider, CLion, GoLand).',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-de.webp',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    leadAnswerBlock: '**Cline (VS Code + JetBrains) ist 2026 die beste kostenlose IDE für lokale LLMs: native Verbindung zu Ollama und LM Studio (plus jede OpenAI-kompatible API), agentische Datei-Bearbeitung, Terminal-Befehle und MCP-Tools, vollständig auf eigener Hardware. Hinweis: Continue.dev (zuvor Platz 1) wurde im Juni 2026 von Cursor übernommen — v2.0.0-vscode ist die letzte Veröffentlichung, das Repository ist schreibgeschützt.**',
    quickAnswerTop: {
      question: 'Welches IDE-Plugin ist am besten für lokale KI-Modelle beim Coden?',
      answer: 'Cline (kostenlos, Open-Source, BYOK) ist das beste IDE-Plugin für Ollama, LM Studio und lokale LLMs 2026 — nachdem Continue.dev im Juni 2026 von Cursor übernommen und das Repository bei v2.0.0-vscode eingefroren wurde. Cline funktioniert in VS Code und der gesamten JetBrains-Familie (PyCharm, Rider, CLion, GoLand, WebStorm, RustRover) und unterstützt agentische Datei-Bearbeitung sowie MCP-Tools. Für vollständig offline oder unter Compliance-Vorgaben ist Bodega One Code die stärkste Option. Für reines Autocomplete ist Tabby am leichtesten. Aider funktioniert am besten im Terminal.',
      bullets: [
        'Cline: bestes Gesamtpaket, aktiv gepflegt — liest/schreibt Dateien, führt Terminal-Befehle aus, nutzt MCP-Tools, VS Code + gesamte JetBrains-Familie (PyCharm, Rider, CLion, GoLand, WebStorm, RustRover), kostenlos (BYOK) oder ab 9,99 $/Monat ClinePass',
        'Bodega One Code: kostenlos für die private Nutzung, lokal-first eigenständige IDE (kein Plugin) — integrierter Coding-Agent, Bring-your-own-LLM, vollständige Offline-/Air-Gap-Unterstützung, einmalig 39 $ für die kommerzielle Stufe (noch nicht käuflich)',
        'Continue: läuft noch, aber unmaintained (im Juni 2026 von Cursor übernommen, v2.0.0-vscode final, Cloud-Daten nach dem 15. Juli 2026 gelöscht) — funktioniert weiterhin mit Ollama, keine weitere Entwicklung',
        'Tabby: bestes Self-Hosted-Autocomplete — eigener Inferenz-Server, 1–3B-Modelle, ~33K GitHub-Sterne',
        'Aider: bestes Terminal-Tool — git-bewusst, Multi-Datei-Bearbeitung, 44K+ GitHub-Sterne',
        'Cursor: beste kommerzielle Option — kostenlose Hobby-Stufe, Pro 20 $/Monat, Pro+ 60 $/Monat, Ultra 200 $/Monat, lokale Modelle via Ollama/LM Studio Custom API',
      ],
      updatedDate: '2026-08-25',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev wurde von Cursor übernommen (Juni 2026) — v2.0.0-vscode ist die letzte Veröffentlichung, das Repository ist schreibgeschützt, Cloud-Daten wurden nach dem 15. Juli 2026 gelöscht; läuft weiterhin lokal mit Ollama, wird aber nicht mehr gepflegt',
          'Cline ist jetzt die am besten gepflegte kostenlose BYOK-Alternative: VS Code + gesamte JetBrains-Familie (PyCharm, Rider, CLion, GoLand, WebStorm, RustRover), agentische Datei-Bearbeitung, MCP-Tools, 5M+ Installs',
          'Bodega One Code ist eine für die private Nutzung kostenlose, lokal-first eigenständige IDE mit integriertem Coding-Agenten und Bring-your-own-LLM (BYOL) — vollständiger Offline-/Air-Gap-Betrieb ohne Zwangs-Abo',
          'Tabby läuft mit eigenem Inferenz-Server (1–3B-Modelle) — niedrigste Autocomplete-Latenz für Teams, self-hosted unter Apache 2.0',
          'Aider ist die Terminal-First-Option — git-commit-bewusst, Multi-Datei-Umschreibungen, 44K+ GitHub-Sterne',
          'Cursor (kostenlos Hobby / 20 $ Pro / 60 $ Pro+ / 200 $ Ultra pro Monat) übernahm sowohl Supermaven als auch Continue.dev; SpaceX schloss die 60-Mrd.-USD-Übernahme von Cursor im August 2026 ab',
          'Alle Tools funktionieren vollständig offline gegen ein lokales Backend (Ollama, LM Studio oder ein selbst gehosteter Server); nur Cursor benötigt eine cloudgebundene App, selbst bei lokaler Inferenz',
        ],
      },
      buyingTable: {
        title: 'Alle sechs auf einen Blick vergleichen',
        content: 'Jedes Plugin hier verbindet sich mit einem lokalen Modell — der Unterschied liegt darin, welche Art von Coding du machst und wie viel kommerzielles Ökosystem du drumherum willst.',
        columns: ['Plugin', 'Am besten für', 'Lokales Backend', 'Preis', 'Installieren'],
        rows: [
          { 'Plugin': 'Cline', 'Am besten für': 'Die meisten / agentische Aufgaben', 'Lokales Backend': 'Ollama, LM Studio, 30+ APIs', 'Preis': 'Kostenlos (BYOK) / ab 9,99 $/Mo.', 'Installieren': '[Kostenlos installieren →](https://github.com/cline/cline)' },
          { 'Plugin': 'Bodega One Code', 'Am besten für': 'Offline / Air-Gap / Compliance', 'Lokales Backend': 'Ollama, LM Studio, llama.cpp, 10+', 'Preis': 'Kostenlos (privat) / 39 $ einmalig', 'Installieren': '[Kostenlos testen →](https://bodegaone.ai)' },
          { 'Plugin': 'Continue (Legacy)', 'Am besten für': 'Nur bestehende Continue-Nutzer', 'Lokales Backend': 'Ollama, LM Studio, llama.cpp', 'Preis': 'Kostenlos (unmaintained)', 'Installieren': '[Continue.dev →](https://continue.dev)' },
          { 'Plugin': 'Tabby', 'Am besten für': 'Schnellstes Self-Hosted-Autocomplete', 'Lokales Backend': 'Eigener Inferenz-Server (1–3B)', 'Preis': 'Kostenlos, Open-Source', 'Installieren': '[Self-hosten →](https://tabby.tabbyml.com)' },
          { 'Plugin': 'Aider', 'Am besten für': 'Terminal + Git-Workflow', 'Lokales Backend': 'Ollama, LM Studio, OpenAI-kompatibel', 'Preis': 'Kostenlos, Open-Source', 'Installieren': '[Kostenlos installieren →](https://aider.chat)' },
          { 'Plugin': 'Cursor', 'Am besten für': 'Polierte IDE, Cloud + lokal', 'Lokales Backend': 'Ollama, LM Studio (Custom API)', 'Preis': 'Kostenlos Hobby / 20–200 $/Mo.', 'Installieren': '[Kostenlos starten →](https://cursor.com)' },
        ],
        note: 'Überspringe alle sechs, wenn noch kein lokales Modell läuft — wähle zuerst Hardware und ein Backend (Ollama oder LM Studio), dann zurück zu dieser Tabelle. Jeder Link oben ist ein reiner Produktlink ohne aktuelle Affiliate-Beziehung — siehe den Disclosure-Hinweis oben auf dieser Seite.',
      },
      clineCta: {
        title: 'Starte mit Cline: In den nächsten 2 Minuten installiert',
        content: 'Cline ist die Standardempfehlung auf dieser Seite. Hier ist warum — und wie du es jetzt sofort installierst.',
        items: [
          '**Kostenlos und Open-Source** — eigenen API-Schlüssel mitbringen oder auf einen lokalen Endpunkt zeigen, kein Zwangs-Abo (ClinePass ab 9,99 $/Monat ist optional, für verwaltetes Routing ohne eigenen API-Schlüssel).',
          '**Funktioniert in VS Code und der gesamten JetBrains-Familie** — IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine und DataGrip.',
          '**Verbindet sich nativ mit Ollama und LM Studio** — plus 30+ weiteren OpenAI-kompatiblen Anbietern, ohne Cloud-Abhängigkeit.',
          '**Wirklich agentisch** — liest/schreibt Dateien, führt Terminal-Befehle aus und nutzt MCP-Tools, nicht nur Inline-Autocomplete.',
          '**Einschränkung**: Zuverlässige Multi-Schritt-Agentenaufgaben brauchen ein 32B-Modell (24 GB+ VRAM); 14B-Modelle schaffen einfache Änderungen, scheitern aber bei komplexen Multi-Datei-Refactorings.',
        ],
        affiliateLinks: [
          { label: 'Cline für VS Code installieren (kostenlos)', url: 'https://github.com/cline/cline', productName: 'Cline for VS Code', productCategory: 'dev-tool' },
          { label: 'Cline für JetBrains installieren (kostenlos)', url: 'https://cline.bot/jetbrains', productName: 'Cline for JetBrains', productCategory: 'dev-tool' },
        ],
      },
      decisionGuide: {
        title: 'Welches solltest du verwenden?',
        content: 'Ordne deine Priorität einem Plugin zu — alle sechs werden weiter unten auf dieser Seite ausführlich behandelt.',
        items: [
          '**Am einfachsten, soll heute schon laufen** → [Cline](https://github.com/cline/cline) — kostenlos, agentisch, VS Code + JetBrains.',
          '**Vollständig offline, air-gapped oder unter Compliance-Vorgabe** → [Bodega One Code](https://bodegaone.ai) — eigenständige IDE ganz ohne Cloud-Komponente.',
          '**Schnellstes Autocomplete für ein Team, self-hosted** → [Tabby](https://tabby.tabbyml.com) — eigener Inferenz-Server, Completions unter 200 ms.',
          '**Terminal-first, git-bewusster Workflow** → [Aider](https://aider.chat) — Multi-Datei-Änderungen, Auto-Commits.',
          '**Polierte kommerzielle IDE mit gelegentlicher lokaler Option** → [Cursor](https://cursor.com) — cloud-first per Design, lokale Modelle via Ollama/LM Studio in der Custom-API-Einstellung.',
          '**Nutzt bereits Continue** → läuft noch (Ollama, BYO-LLM), aber das Projekt ist seit der Cursor-Übernahme im Juni 2026 unmaintained — plane einen Wechsel zu Cline, wenn es passt, nicht dringend.',
        ],
      },
      rankedList: {
        title: 'Beste IDE-Plugins für lokale LLMs — Ranking',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline ist 2026 das beste IDE-Plugin für lokale LLMs, da es Ollama nativ unterstützt, in VS Code und JetBrains funktioniert und agentische Datei-Bearbeitung sowie MCP-Tools ohne Cloud-Abhängigkeit bietet — Continue, der frühere Spitzenreiter, wurde im Juni 2026 von Cursor übernommen und wird nicht mehr aktiv weiterentwickelt.',
          },
          {
            type: 'plain-terms',
            text: 'Ein IDE-Plugin für lokale LLMs verbindet deinen Code-Editor (VS Code, IntelliJ) mit einem Modell auf deinem eigenen Rechner (über Ollama oder LM Studio). Das Modell sieht deinen Code und antwortet — kein Code verlässt deinen Computer, keine API-Gebühren.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Cline — Bestes Gesamtpaket (kostenlos, Open-Source, aktiv gepflegt)',
            content: 'Cline (früher Claude Dev) ist 2026 das am besten gepflegte agentische Coding-Plugin für lokale LLMs — es übernahm die Spitzenposition, nachdem Continue im Juni 2026 von Cursor übernommen wurde. Es liest und schreibt Dateien, führt Terminal-Befehle aus, durchsucht das Web (über ein Browser-Tool) und nutzt MCP-Server. Mit Ollama + Qwen3-Coder 32B kann Cline komplette Features aus einem Prompt implementieren. Einschränkungen: 32B-Modelle sind für zuverlässige Multi-Schritt-Agenten nötig; 14B-Modelle reichen für einfache Aufgaben. Preise: kostenlos (BYOK — eigener API-Schlüssel von Anthropic, OpenAI oder 30+ Anbietern); ClinePass für 9,99 $/Monat (Einstieg 4,99 $ im ersten Monat) für verwaltetes Routing ohne eigenen API-Schlüssel; Teams für 20 $/Nutzer/Monat (erste 10 Plätze kostenlos). VS Code und die gesamte JetBrains-Familie: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine und DataGrip. Kompatible Backends: Ollama, LM Studio, LiteLLM-Proxy und 30+ Cloud-Anbieter. 5M+ Installs über VS Code, JetBrains und weitere Editoren.',
            affiliateLinks: [
              { label: 'Cline im VS Code Marketplace (kostenlos)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — Bestes kostenloses lokal-first IDE mit integriertem Coding-Agenten',
            content: 'Bodega One Code ist eine lokal-first KI-IDE, die von Grund auf um einen Coding-Agenten herum aufgebaut ist — nicht als nachträglich in einen bestehenden Editor eingebauter Assistent. Sie unterstützt Bring-your-own-LLM (BYOL) über 10+ Backends, darunter Ollama, LM Studio, llama.cpp, LocalAI, KoboldCpp, GPT4All und MLX für lokale Modelle, plus direkte Cloud-Anbieter bei Bedarf: Backend auswählen, und der Agent führt Planung, Bearbeitung und Ausführung vollständig gegen dieses Modell aus, ohne Bindung an einen einzelnen Anbieter. Die gesamte Anwendung läuft auf dem eigenen Rechner, inklusive eines vollständigen Offline- und Air-Gap-Modus, der ausgehende Netzwerkverbindungen blockiert, sodass keine Telemetrie und keine Modellaufrufe den Rechner verlassen — sie funktioniert damit auch in netzwerkisolierten Umgebungen, in denen cloudgebundene Tools wie Cursor oder GitHub Copilot gar nicht einsetzbar sind. Preise: kostenlos für die private Nutzung während der laufenden Open Beta, inklusive Nutzungsrechten für kommerzielle Zwecke vorerst; eine kostenpflichtige, einmalige Pro-Stufe (Preis noch nicht bekannt) ist für den vollständigen Release geplant und bringt dauerhafte kommerzielle Nutzungsrechte, unbegrenzte Workspaces und einen zweiten Rechner — ist aber noch nicht käuflich. Es gibt kein Abonnement und keine Nutzungsmessung für lokale Modelle. Das macht es zu einer guten Wahl für regulierte Branchen, Behörden- und Verteidigungsauftragnehmer sowie Teams, deren Sicherheitsrichtlinien das Senden von Code an Server Dritter untersagen — genau die Zielgruppe, die überhaupt lokale Inferenz sucht. Im Vergleich zu Cline, einem Plugin für VS Code, ist Bodega One Code eine eigenständige IDE, die von Anfang an um den Agenten herum entworfen wurde; Teams, die bereits auf VS Code setzen, finden in Cline die einfachere Ergänzung, während Teams, die neu starten oder garantierten Offline-Betrieb benötigen, mit Bodega One Code eine dafür gebaute Umgebung erhalten.',
            affiliateLinks: [
              { label: 'Bodega One Code (kostenlos, offizielle Website)', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — Noch funktionsfähig, aber nicht mehr gepflegt [Von Cursor übernommen, Juni 2026 — Finale Version v2.0.0-vscode]',
            content: 'Continue war der führende Open-Source-KI-Coding-Assistent für lokale LLMs vor seiner Übernahme durch Cursor im Juni 2026. Er verbindet sich mit Ollama, LM Studio, llama.cpp und jeder OpenAI-kompatiblen API. Features: Inline-Chat (Cmd+L), Autocomplete (Tab), Model-Context-Protocol(MCP)-Tools, Codebase-Indexierung und benutzerdefinierte Slash-Befehle. VS-Code-Extension hat 2M+ Installs. JetBrains-Plugin läuft in IntelliJ IDEA, PyCharm, GoLand, WebStorm und Rider — CLion und RustRover werden nicht abgedeckt. Beste lokale Modelle: Qwen3-Coder 14B (Coding), Llama 3.3 8B (Chat). Setup: Extension installieren, Provider auf Ollama setzen, Modell wählen — in 2 Minuten erledigt. Hinweis (Juni 2026): Continue wurde von Cursor übernommen. Version 2.0.0-vscode, veröffentlicht am 19. Juni 2026, ist die letzte Version; das GitHub-Repository ist nun schreibgeschützt, und die von Continue gehosteten Cloud-Daten wurden nach dem 15. Juli 2026 gelöscht. Die Extension läuft weiterhin vollständig offline mit Ollama und BYO-LLM — jedoch ohne weitere Entwicklung durch das ursprüngliche Team. Community-Forks sind aktiv.',
            affiliateLinks: [
              { label: 'Continue im VS Code Marketplace (kostenlos)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — Bestes Self-Hosted-Autocomplete',
            content: 'Tabby ist ein Self-Hosted-Coding-Assistent, in Rust unter Apache 2.0 gebaut, mit eigenem Inferenz-Server (getrennt von Ollama). Er nutzt kleine, spezialisierte Code-Completion-Modelle (1–3B Parameter), trainiert speziell für Fill-in-the-Middle (FIM) Autocomplete — deutlich schneller als ein allgemeines 7B-Modell. Aktuelle stabile Version ist v0.32.0, mit rund 33K GitHub-Sternen. IDE-Erweiterungen für VS Code, JetBrains, Vim/Neovim und Emacs verfügbar. Am besten für: Teams mit 5–50 Entwicklern, besonders regulierte oder IP-sensible Teams, die schnelles (<200 ms) Autocomplete ohne Cloud-Versand wollen. Benötigt einen dedizierten Server oder eine leistungsfähige Desktop-Maschine — kostenlos self-hostbar mit unbegrenzten Nutzern, keine Pro-Kopf-Gebühr.',
            affiliateLinks: [
              { label: 'Tabby auf GitHub (Open-Source, Self-Hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — Bestes Terminal-Tool für KI-Coding',
            content: 'Aider ist ein terminal-basierter KI-Pair-Programmer mit Git-Integration. Er versteht die Struktur des gesamten Repositories, macht Multi-Datei-Änderungen und committed automatisch. Funktioniert mit Ollama (--model ollama/qwen2.5-coder:14b), LM Studio oder jeder OpenAI-kompatiblen API. Beste lokale Modelle: Qwen3-Coder 32B (Architekt-Modus) + Qwen3-Coder 7B (Editor-Modus). Aider nutzt einen Zwei-Modell-Ansatz: ein großes Modell plant Änderungen, ein kleines setzt sie um. 44K+ GitHub-Sterne. Kosten: kostenlos und Open-Source. Hinweis: Aider ist 2026 weiterhin bei 0.x-Versionierung, CLI-Flags und das .aider.conf.yml-Format ändern sich gelegentlich zwischen Minor-Releases — nach einem Update das Changelog prüfen.',
            affiliateLinks: [
              { label: 'Aider auf GitHub (Open-Source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — Beste kommerzielle Option mit lokalem Modell-Support',
            content: 'Cursor ist ein VS-Code-Fork mit integrierten KI-Funktionen. Cursor unterstützt lokale Modelle über Ollama und LM Studio in der "Custom API"-Einstellung. Die mächtigsten Cursor-Features (Agent-Modus mit Websuche, volles Codebase-Bewusstsein) erfordern aber Cloud-Modelle. Die lokale Modell-Integration funktioniert für Chat und einfache Completions, fällt aber hinter Cline bei privacy-fokussierten Workflows zurück, da Cursor selbst auch bei lokaler Inferenz eine cloudgebundene Anwendung bleibt. Preise: Hobby (kostenlos, lokale Modell-Nutzung inklusive); Pro für 20 $/Monat (16 $/Monat bei jährlicher Abrechnung, inklusive 20-$-KI-Guthaben-Pool für Frontier-Modelle; Auto-Modus unbegrenzt ohne Guthabenkosten); Pro+ für 60 $/Monat (3-fache Nutzungsguthaben); Ultra für 200 $/Monat (20-fache Nutzung); Teams für 40 $/Nutzer/Monat mit zentraler Abrechnung und SSO. Hinweis: Cursor übernahm Supermaven (2024) und Continue.dev (Juni 2026). SpaceX schloss die 60-Milliarden-Dollar-Übernahme von Cursor im August 2026 ab, wenige Tage nach dem eigenen Börsengang von SpaceX — Cursors annualisierter Umsatz wuchs Berichten zufolge von rund 100 Millionen Dollar Anfang 2025 auf über 4 Milliarden Dollar bis Juni 2026. Diese Konsolidierung macht Cursor zur dominanten kommerziellen Kraft bei KI-Coding-Tools — wirft aber langfristige Fragen zu Open-Source-Alternativen auf.',
            pros: [
              'Polierter, vertrauter VS-Code-Fork — nahezu keine Einarbeitungszeit für bestehende VS-Code-Nutzer',
              'Lokale Modelle über Ollama oder LM Studio via Custom-API-Einstellung',
              'Kostenlose Hobby-Stufe enthält lokale Modell-Nutzung, nicht nur eine Testphase',
            ],
            cons: [
              'Die stärksten Features (Agent-Modus, volles Codebase-Bewusstsein) erfordern Cloud-/Frontier-Modelle, keine lokalen',
              'Jetzt im Besitz von SpaceX/xAI — ein deutlich anderes Anbieterprofil als ein unabhängiges Open-Source-Tool',
            ],
            affiliateLinks: [
              { label: 'Kostenlos starten mit Cursor Hobby', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-de.webp',
        imageCaption: 'Beste IDE-Plugins für Lokale LLMs, Rangliste -- Rangliste 2026',
      },
      setupGuide: {
        title: 'Schnellanleitung: Cline + Ollama in VS Code',
        content: 'Bereit, Cline zu installieren? → [Cline kostenlos installieren](https://github.com/cline/cline). Folge diesen Schritten, um es mit Ollama zu verbinden — der schnellste Weg, um mit dem aktuellen Spitzenreiter lokal zu coden:',
        numberedItems: [
          'Ollama installieren: `curl -fsSL https://ollama.com/install.sh | sh`',
          'Ein Coding-Modell laden: `ollama pull qwen2.5-coder:14b` (oder `qwen3-coder:32b` für agentische Aufgaben)',
          'In VS Code Cline aus dem Extensions-Marketplace installieren',
          'Die Cline-Seitenleiste öffnen und auf das Zahnrad-Symbol klicken',
          'API-Provider auf "Ollama" setzen, Basis-URL auf `http://localhost:11434` und Modell-ID auf das geladene Modell',
          'VS Code neu starten — das Cline-Symbol erscheint in der Seitenleiste',
          'Eine Aufgabe im Cline-Chat-Panel eingeben — es kann direkt Dateien lesen/schreiben und Terminal-Befehle ausführen',
        ],
      },
      aiderSetupGuide: {
        title: 'Schnellanleitung: Aider + Ollama (Terminal)',
        content: 'Bereit, Aider zu installieren? → [Aider kostenlos installieren](https://aider.chat). Für terminal-natives, git-bewusstes KI-Coding — offizielle Aider-Dokumentation: aider.chat/docs/llms/ollama.html',
        numberedItems: [
          'Ollama installieren und ein Modell laden: `ollama pull qwen2.5-coder:32b`',
          'Aider installieren: `python -m pip install aider-install && aider-install`',
          'Die Ollama-API-Basis setzen: `export OLLAMA_API_BASE=http://127.0.0.1:11434`',
          'Aider mit dem lokalen Modell starten: `aider --model ollama/qwen2.5-coder:32b`',
          'Für das Zwei-Modell-Setup (Architekt/Editor) hinzufügen: `--architect-model ollama/qwen2.5-coder:32b --editor-model ollama/qwen2.5-coder:7b`',
          'Aider committed jede Änderung automatisch zu git — mit `git log` oder `git diff HEAD~1` überprüfen',
        ],
      },
      modelRecommendations: {
        title: 'Beste lokale Modelle nach Plugin und Aufgabe',
        columns: ['Plugin', 'Bestes Coding-Modell (lokal)', 'Bestes Chat-Modell (lokal)', 'Min. VRAM'],
        rows: [
          { 'Plugin': 'Cline', 'Bestes Coding-Modell (lokal)': 'Qwen3-Coder 32B Q4', 'Bestes Chat-Modell (lokal)': 'Qwen3 32B Q4', 'Min. VRAM': '24 GB' },
          { 'Plugin': 'Bodega One Code', 'Bestes Coding-Modell (lokal)': 'Beliebiges lokales Modell (BYOL)', 'Bestes Chat-Modell (lokal)': 'Beliebiges lokales Modell (BYOL)', 'Min. VRAM': 'Abhängig vom gewählten Modell' },
          { 'Plugin': 'Continue (Legacy)', 'Bestes Coding-Modell (lokal)': 'Qwen3-Coder 14B Q8', 'Bestes Chat-Modell (lokal)': 'Llama 3.3 8B Q4', 'Min. VRAM': '16 GB' },
          { 'Plugin': 'Tabby', 'Bestes Coding-Modell (lokal)': 'StarCoder2-7B (integriert)', 'Bestes Chat-Modell (lokal)': 'N/A (nur Code)', 'Min. VRAM': '8 GB' },
          { 'Plugin': 'Aider', 'Bestes Coding-Modell (lokal)': 'Qwen3-Coder 14B (Editor)', 'Bestes Chat-Modell (lokal)': 'Qwen3-Coder 32B (Architekt)', 'Min. VRAM': '16–24 GB' },
          { 'Plugin': 'Cursor', 'Bestes Coding-Modell (lokal)': 'DeepSeek-Coder-V2 (via Ollama)', 'Bestes Chat-Modell (lokal)': 'Qwen3 14B', 'Min. VRAM': '16 GB' },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-de.webp',
        imageCaption: 'Beste Lokale Modelle nach IDE-Plugin -- Coding-Modell und Mindest-VRAM',
        note: 'Hardware für diese Modelle gesucht? 8 GB VRAM deckt Tabbys kleine Completion-Modelle ab; 16 GB reichen für die meisten 14B-Coding-Modelle (Continue, Aiders Editor-Modus, Cursors lokale Option); 24 GB+ sind das realistische Minimum für zuverlässige 32B-Agentenaufgaben mit Cline oder Aiders Architekt-Modus. Siehe [Beste GPUs für lokale LLMs](/de/local-llms/best-gpus-for-local-llms) für die vollständige Auswahl, oder [Beste günstige GPUs für lokale LLMs](/de/local-llms/best-budget-gpus-local-llm), wenn du unter 16 GB startest.',
      },
      lmStudioPlugins: {
        title: 'Beste LM-Studio-Plugins (nicht dasselbe wie IDE-Plugins)',
        content: 'Das ist eine andere Frage als "welche IDE-Erweiterung verbindet sich mit LM Studio" (oben behandelt) — und eine, die eine direkte Antwort verdient, denn LM Studio ist eines der beiden Backends, mit denen sich jedes Plugin in diesem Guide verbindet. LM Studio hat seit Ende 2024 ein eigenes Plugin-System: Plugins laufen innerhalb von LM Studio selbst — aktuell als TypeScript-/JavaScript-Code auf Node.js in einem sandboxed Worker, Python-Support befindet sich noch in Entwicklung — und können Inferenz-Anfragen abfangen, Prompt-Prozessoren hinzufügen, Tool-Calling-Backends anbinden oder neue UI-Panels ergänzen. Installiert werden sie über den kuratierten Marktplatz unter lmstudio.ai/plugins; jedes Plugin gibt vorab die benötigten Berechtigungen an (Netzwerkzugriff, Dateisystem-Lesezugriff), die später jederzeit in den Einstellungen widerrufen werden können, ohne das Plugin zu deinstallieren. Häufige Kategorien im Jahr 2026: Websuche-Plugins, RAG-/Dokumenten-Retrieval-Präprozessoren, OCR-Präprozessoren, agentische Toolset-Plugins, Shell-/Dateizugriffs-Tools und Memory-Plugins.',
        items: [
          '**Websuche-Plugins**: lassen ein lokales Modell in LM Studio aktuelle Web-Ergebnisse in seinen Kontext einbeziehen — nützlich, da lokale Modelle keinen eingebauten Internetzugang haben.',
          '**RAG-/Dokumenten-Plugins**: indexieren einen lokalen Ordner mit PDFs oder Textdateien und rufen relevante Abschnitte automatisch pro Anfrage ab.',
          '**Agentische Toolset-Plugins**: geben dem Modell Shell-Zugriff, Datei-Lese-/Schreibrechte oder Multi-Schritt-Aufgabenausführung direkt in der Chat-Oberfläche von LM Studio — dieselbe Fähigkeitskategorie, die Cline für VS Code bietet, aber innerhalb von LM Studio statt eines Editors.',
          '**Memory-Plugins**: speichern den Kontext über Chat-Sitzungen hinweg, statt jedes Mal neu zu beginnen.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Kann Continue GitHub Copilot vollständig für lokale Nutzung ersetzen?',
            a: 'Seit Juni 2026 wurde Continue von Cursor übernommen; Version 2.0.0 ist die letzte Veröffentlichung (das Repository ist schreibgeschützt). Die Extension läuft weiterhin mit Ollama und BYO-LLM, erhält aber keine weitere Entwicklung durch das ursprüngliche Team. Als gepflegte Open-Source-Alternative wird Cline empfohlen — es bietet dasselbe BYOK-Modell, funktioniert in VS Code und JetBrains und ergänzt agentische Datei-Bearbeitung. GitHub Copilot Pro kostet 10 $/Monat mit 15 $/Monat an KI-Guthaben; Cline ist mit eigenem API-Schlüssel kostenlos.',
          },
          {
            q: 'Welches Plugin funktioniert am besten für Multi-Datei-Refactoring?',
            a: 'Cline oder Aider. Beide lesen mehrere Dateien, verstehen Abhängigkeiten und machen koordinierte Änderungen. Cline ist besser für visuelle Rückmeldung; Aider besser für Git-bewusstes Committen. Für komplexes Refactoring mit lokalen Modellen werden 30B+ (24 GB VRAM) empfohlen.',
          },
          {
            q: 'Kann ich diese Plugins mit LM Studio statt Ollama nutzen?',
            a: 'Ja. LM Studio stellt standardmäßig eine OpenAI-kompatible API auf Port 1234 bereit. Setze den Plugin-Provider auf "openai" mit Basis-URL `http://localhost:1234/v1` und verwende beliebige Modellnamen aus deiner LM-Studio-Bibliothek. Cline, Continue und Aider unterstützen diese Konfiguration alle. Hinweis: Das unterscheidet sich vom eigenen Plugin-System von LM Studio (siehe Abschnitt "Beste LM-Studio-Plugins" oben) — jenes dient der Erweiterung von LM Studio selbst, nicht der Anbindung einer externen IDE.',
          },
          {
            q: 'Funktioniert Tabby ohne GPU?',
            a: 'Ja — Tabby kann auf der CPU mit kleinen Modellen (1–3B) laufen. Die Autocomplete-Latenz auf der CPU liegt jedoch bei 500 ms–2 s, was im Vergleich zum <200-ms-Ziel für flüssiges Coden träge wirkt. Für reine CPU-Maschinen bietet Cline + Ollama mit einem schnellen 1B- oder 3B-Modell eine bessere Latenzkontrolle.',
          },
          {
            q: 'Funktioniert Cline in PyCharm, Rider, GoLand, WebStorm, CLion und RustRover?',
            a: 'Ja — Clines JetBrains-Plugin, installiert über den JetBrains Marketplace, unterstützt die gesamte JetBrains-Familie: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine und DataGrip. Konfiguriere dieselben Ollama- oder LM-Studio-Provider-Einstellungen wie bei der VS-Code-Version. Continues JetBrains-Plugin (unmaintained seit der Cursor-Übernahme im Juni 2026) deckt einen schmaleren Bereich ab — IntelliJ IDEA, PyCharm, GoLand, WebStorm und Rider — aber nicht CLion oder RustRover.',
          },
          {
            q: 'Welche JetBrains-IDEs unterstützen lokale LLM-Plugins?',
            a: 'Cline und Continue bieten beide JetBrains-Plugins. Cline deckt die gesamte Familie ab: IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand, Rider, CLion, RustRover, RubyMine und DataGrip. Continue deckt nur IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand und Rider ab. Installation über den JetBrains Marketplace (nicht den VS Code Marketplace), mit denselben Ollama-/LM-Studio-Provider-Einstellungen wie bei der VS-Code-Version. Auch Tabby bietet JetBrains-Support für reines Autocomplete.',
          },
          {
            q: 'Welche dieser Tools funktionieren vollständig offline für DSGVO, HIPAA oder Air-Gap-Umgebungen?',
            a: 'Bodega One Code ist genau dafür gebaut: vollständiger Offline-Betrieb mit lokalen Modellen, plus ein Air-Gap-Modus, der alle ausgehenden Netzwerkverbindungen blockiert, sodass keine Telemetrie und keine Modellaufrufe den Rechner verlassen. Cline, Continue, Tabby und Aider funktionieren ebenfalls vollständig offline, sobald sie auf ein lokales Backend zeigen (Ollama, LM Studio oder ein selbst gehosteter Tabby-Server) statt auf eine Cloud-API — keines davon telefoniert bei dieser Konfiguration nach Hause. Cursors lokaler Modell-Support (über die Custom-API-Einstellung) läuft weiterhin innerhalb einer cloudgebundenen Anwendung und passt daher nicht zu netzwerkisolierten Umgebungen.',
          },
          {
            q: 'Was ist Bodega One Code, und wie unterscheidet es sich von Cline?',
            a: 'Bodega One Code ist eine eigenständige lokal-first KI-IDE mit integriertem Coding-Agenten, kostenlos für die private Nutzung während der laufenden Open Beta — im Gegensatz zu Cline, das als Plugin zu VS Code oder JetBrains hinzugefügt wird, ist Bodega One Code eine vollständige IDE, die von Anfang an um den Agenten herum aufgebaut ist. Sie unterstützt Bring-your-own-LLM (BYOL) über 10+ Backends und läuft vollständig offline mit Air-Gap-Unterstützung. Eine kostenpflichtige, einmalige Pro-Stufe für kommerzielle Nutzung ist geplant, aber noch nicht käuflich. Sie eignet sich gut für regulierte oder netzwerkisolierte Umgebungen, in denen ein cloudgebundener Editor gar nicht genutzt werden kann.',
          },
        ],
      },
      finalRecommendations: {
        title: 'Meine Empfehlungen für 2026',
        content: 'Sechs Tools, eine Seite — hier die Kurzfassung, wenn du nur die Antwort willst:',
        items: [
          '**Bestes Gesamtpaket** → [Cline](https://github.com/cline/cline) — kostenlos, agentisch, VS Code + gesamte JetBrains-Familie. Installiere es zuerst.',
          '**Beste vollständige Offline-/Compliance-Lösung** → [Bodega One Code](https://bodegaone.ai) — eigenständige IDE, keine Cloud-Komponente.',
          '**Bestes Autocomplete** → [Tabby](https://tabby.tabbyml.com) — self-hosted, unter 200 ms.',
          '**Bester Terminal-Workflow** → [Aider](https://aider.chat) — git-bewusst, Multi-Datei.',
          '**Beste kommerzielle IDE** → [Cursor](https://cursor.com) — kostenlos mit der Hobby-Stufe starten, lokale Modelle via Ollama/LM Studio ergänzen.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[DeepSeek vs. Qwen für lokales Coding 2026: Wer gewinnt?](/de/power-local-llm/deepseek-vs-qwen-coding-local-2026) -- DeepSeek vs. Qwen Coding-Vergleich — Modell vor dem IDE-Plugin-Setup wählen',
          '[GitHub Copilot durch ein lokales LLM ersetzen](/de/power-local-llm/replace-github-copilot-with-local-llm) -- vollständige Anleitung zum Wechsel von Copilot zu einem selbst gehosteten Modell',
          '[Beste lokale Coding-Modelle 2026](/de/power-local-llm/best-local-coding-models-2026) -- welche Modelle in VS Code und JetBrains am besten funktionieren',
          '[Continue.dev vs. Cline vs. Aider: Lokale LLM-Coding-Tools 2026](/de/power-local-llm/continue-dev-vs-cline-vs-aider-local) -- IDE-Tools mit lokalen LLM-Backends im Vergleich',
          '[Beste RAG-Tools für Geschäftsdokumente 2026](/de/power-local-llm/best-rag-tools-for-business-documents-2026) -- lokale Coding-KI mit Dokumenten-Retrieval erweitern',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kann Continue GitHub Copilot vollständig für lokale Nutzung ersetzen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Seit Juni 2026 wurde Continue von Cursor übernommen, Version 2.0.0 ist die letzte Veröffentlichung. Die Extension läuft weiterhin mit Ollama, aber Cline ist jetzt die empfohlene, gepflegte Open-Source-Alternative — kostenlos mit BYOK, funktioniert in VS Code und JetBrains und ergänzt agentische Datei-Bearbeitung.' },
        },
        {
          '@type': 'Question',
          name: 'Funktioniert Cline in PyCharm, Rider, GoLand, WebStorm, CLion und RustRover?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ja. Clines JetBrains-Plugin unterstützt die gesamte JetBrains-Familie: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine und DataGrip. Continues JetBrains-Plugin deckt einen schmaleren Bereich ab — IntelliJ IDEA, PyCharm, GoLand, WebStorm und Rider — und erhält keine Updates mehr.' },
        },
        {
          '@type': 'Question',
          name: 'Welche dieser Tools funktionieren vollständig offline für DSGVO, HIPAA oder Air-Gap-Umgebungen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bodega One Code ist genau dafür gebaut, mit einem dedizierten Air-Gap-Modus. Cline, Continue, Tabby und Aider funktionieren ebenfalls vollständig offline, wenn sie auf ein lokales Backend zeigen (Ollama, LM Studio oder ein selbst gehosteter Server). Cursor bleibt auch bei lokalen Modellen eine cloudgebundene Anwendung und passt daher nicht zu netzwerkisolierten Umgebungen.' },
        },
        {
          '@type': 'Question',
          name: 'Was ist Bodega One Code, und wie unterscheidet es sich von Cline?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bodega One Code ist eine eigenständige lokal-first KI-IDE mit integriertem Coding-Agenten, kostenlos für die private Nutzung während der laufenden Open Beta, Bring-your-own-LLM (BYOL)-Support über 10+ Backends und vollständigem Offline-/Air-Gap-Betrieb. Im Gegensatz zu Cline, einem Plugin für VS Code oder JetBrains, ist Bodega One Code eine vollständige IDE, die von Anfang an um den Agenten herum aufgebaut ist.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Beste IDE-Plugins für lokale LLMs 2026',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: 'Bestes Gesamtpaket — aktiv gepflegt, agentisch, VS Code + gesamte JetBrains-Familie, kostenlos (BYOK)' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: 'Beste für die private Nutzung kostenlose lokal-first IDE mit integriertem Coding-Agenten — BYOL, vollständige Offline-/Air-Gap-Unterstützung' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: 'Noch funktionsfähig, aber seit der Cursor-Übernahme (Juni 2026) unmaintained' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: 'Bestes Self-Hosted-Autocomplete — 1–3B FIM-Modelle, alle Editoren' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: 'Bestes Terminal-Tool — git-bewusst, Multi-Datei-Bearbeitung, Open-Source' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: 'Beste kommerzielle Option — kostenlose Hobby-Stufe + lokaler Modell-Support, 20 $/Monat Pro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Beste IDE-Plugins für lokale LLMs 2026 (VS Code, JetBrains & LM Studio)', description: 'Rangliste von Cline, Bodega One Code, Continue, Tabby, Aider und Cursor für lokale LLM-Nutzung in VS Code, der gesamten JetBrains-Familie und LM Studio. Mit Vergleichstabelle, Setup-Anleitungen, Modellempfehlungen und Hardware-Hinweisen.', datePublished: '2026-05-26', dateModified: '2026-08-25', url: 'https://www.promptquorum.com/de/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'de' },
  },

  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-25',
    last_full_refresh: '2026-08-25',
    theme: 'Coding Assistants',
    title: 'Meilleurs plugins IDE pour LLMs locaux 2026 (VS Code, JetBrains & LM Studio)',
    seoTitle: 'Meilleure IDE pour LLMs locaux 2026 (Ollama, LM Studio & JetBrains)',
    metaDescription: 'Cline est la meilleure IDE pour LLMs locaux en 2026 : gratuit, fonctionne avec Ollama et LM Studio dans VS Code et toutes les IDE JetBrains (PyCharm, Rider, CLion, GoLand).',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-fr.webp',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    leadAnswerBlock: '**Cline (VS Code + JetBrains) est la meilleure IDE gratuite pour les LLMs locaux en 2026 : connexion native à Ollama et LM Studio (plus toute API OpenAI-compatible), édition de fichiers agentique, commandes terminal et outils MCP, entièrement sur votre matériel. À noter : Continue.dev (précédemment classé n°1) a été racheté par Cursor en juin 2026 — v2.0.0-vscode en est la dernière publication, le dépôt est désormais en lecture seule.**',
    quickAnswerTop: {
      question: 'Quel est le meilleur plugin IDE pour les modèles IA locaux lors du codage ?',
      answer: 'Cline (gratuit, open-source, BYOK) est le meilleur plugin IDE pour Ollama, LM Studio et les LLMs locaux en 2026 — depuis le rachat de Continue.dev par Cursor en juin 2026 et le gel de son dépôt à v2.0.0-vscode. Cline fonctionne dans VS Code et dans toute la famille JetBrains (PyCharm, Rider, CLion, GoLand, WebStorm, RustRover), avec édition de fichiers agentique et outils MCP. Pour un usage entièrement hors ligne ou sous mandat de conformité, Bodega One Code est l\'option la plus solide. Pour l\'autocomplétion seule, Tabby est l\'option la plus légère. Aider fonctionne le mieux dans le terminal.',
      bullets: [
        'Cline : meilleur global, activement maintenu — lit/écrit des fichiers, exécute des commandes terminal, utilise des outils MCP, VS Code + toute la famille JetBrains (PyCharm, Rider, CLion, GoLand, WebStorm, RustRover), gratuit (BYOK) ou ClinePass à partir de 9,99 $/mois',
        'Bodega One Code : gratuit pour un usage personnel, IDE autonome local-first (pas un plugin) — agent de codage intégré, bring-your-own-LLM, prise en charge complète hors ligne/air-gap, 39 $ à vie pour le palier commercial (pas encore disponible à l\'achat)',
        'Continue : s\'installe et fonctionne encore mais plus maintenu (racheté par Cursor en juin 2026, v2.0.0-vscode finale, données cloud supprimées après le 15 juillet 2026) — fonctionne encore avec Ollama, aucun développement ultérieur',
        'Tabby : meilleure autocomplétion self-hosted — serveur d\'inférence propre, modèles 1–3B, ~33K étoiles GitHub',
        'Aider : meilleur outil terminal-natif — git-aware, éditions multi-fichiers, 44K+ étoiles GitHub',
        'Cursor : meilleure option commerciale — palier Hobby gratuit, Pro 20 $/mois, Pro+ 60 $/mois, Ultra 200 $/mois, modèles locaux via Ollama/LM Studio Custom API',
      ],
      updatedDate: '2026-08-25',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev a été racheté par Cursor (juin 2026) — v2.0.0-vscode est la dernière publication, le dépôt est désormais en lecture seule, les données cloud ont été supprimées après le 15 juillet 2026 ; fonctionne toujours en local avec Ollama mais n\'est plus maintenu',
          'Cline est désormais la meilleure alternative gratuite (BYOK) activement maintenue : VS Code + toute la famille JetBrains (PyCharm, Rider, CLion, GoLand, WebStorm, RustRover), édition de fichiers agentique, outils MCP, 5M+ installations',
          'Bodega One Code est une IDE autonome local-first, gratuite pour un usage personnel, avec agent de codage intégré et bring-your-own-LLM (BYOL) — fonctionnement hors ligne/air-gap complet, sans abonnement forcé',
          'Tabby tourne avec son propre serveur d\'inférence (modèles 1–3B) — latence d\'autocomplétion la plus faible pour les équipes, self-hosted sous Apache 2.0',
          'Aider est l\'option terminal-first — conscient des commits git, réécriture multi-fichiers, 44K+ étoiles GitHub',
          'Cursor (Hobby gratuit / 20 $ Pro / 60 $ Pro+ / 200 $ Ultra par mois) a racheté Supermaven et Continue.dev ; SpaceX a finalisé le rachat de Cursor pour 60 milliards de dollars en août 2026',
          'Tous les outils fonctionnent entièrement hors ligne face à un backend local (Ollama, LM Studio, ou un serveur auto-hébergé) ; seul Cursor nécessite une application connectée au cloud même avec des modèles locaux',
        ],
      },
      buyingTable: {
        title: 'Comparer les six en un coup d\'œil',
        content: 'Chaque plugin ici se connecte à un modèle local — la différence tient au type de codage que vous faites et à l\'écosystème commercial que vous voulez autour.',
        columns: ['Plugin', 'Idéal pour', 'Backend local', 'Prix', 'Installer'],
        rows: [
          { 'Plugin': 'Cline', 'Idéal pour': 'La plupart / tâches agentiques', 'Backend local': 'Ollama, LM Studio, 30+ API', 'Prix': 'Gratuit (BYOK) / dès 9,99 $/mois', 'Installer': '[Installer gratuitement →](https://github.com/cline/cline)' },
          { 'Plugin': 'Bodega One Code', 'Idéal pour': 'Hors ligne / air-gap / conformité', 'Backend local': 'Ollama, LM Studio, llama.cpp, 10+', 'Prix': 'Gratuit (perso) / 39 $ à vie', 'Installer': '[Essayer gratuitement →](https://bodegaone.ai)' },
          { 'Plugin': 'Continue (legacy)', 'Idéal pour': 'Utilisateurs Continue existants', 'Backend local': 'Ollama, LM Studio, llama.cpp', 'Prix': 'Gratuit (non maintenu)', 'Installer': '[Continue.dev →](https://continue.dev)' },
          { 'Plugin': 'Tabby', 'Idéal pour': 'Autocomplétion self-hosted la + rapide', 'Backend local': 'Serveur d\'inférence propre (1–3B)', 'Prix': 'Gratuit, open-source', 'Installer': '[Self-hoster gratuitement →](https://tabby.tabbyml.com)' },
          { 'Plugin': 'Aider', 'Idéal pour': 'Terminal + workflow git', 'Backend local': 'Ollama, LM Studio, OpenAI-compat.', 'Prix': 'Gratuit, open-source', 'Installer': '[Installer gratuitement →](https://aider.chat)' },
          { 'Plugin': 'Cursor', 'Idéal pour': 'IDE soignée, mix cloud + local', 'Backend local': 'Ollama, LM Studio (Custom API)', 'Prix': 'Hobby gratuit / 20–200 $/mois', 'Installer': '[Démarrer gratuitement →](https://cursor.com)' },
        ],
        note: 'Ignorez les six si aucun modèle local ne tourne encore chez vous — choisissez d\'abord matériel et backend (Ollama ou LM Studio), puis revenez à ce tableau. Chaque lien ci-dessus est un lien produit simple, sans relation d\'affiliation actuelle — voir la note de divulgation en haut de cette page.',
      },
      clineCta: {
        title: 'Commencez avec Cline : installé dans les 2 prochaines minutes',
        content: 'Cline est la recommandation par défaut de cette page. Voici pourquoi, et comment l\'installer dès maintenant.',
        items: [
          '**Gratuit et open-source** — apportez votre propre clé ou pointez vers un endpoint local, aucun abonnement forcé (ClinePass à partir de 9,99 $/mois est optionnel, pour un routage géré sans clé API).',
          '**Fonctionne dans VS Code et toute la famille JetBrains** — IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine et DataGrip.',
          '**Se connecte nativement à Ollama et LM Studio** — plus 30+ autres fournisseurs OpenAI-compatibles, sans dépendance cloud requise.',
          '**Vraiment agentique** — lit/écrit des fichiers, exécute des commandes terminal et utilise des outils MCP, pas seulement de l\'autocomplétion inline.',
          '**Limite** : des tâches agentiques multi-étapes fiables nécessitent un modèle local de classe 32B (24 Go+ VRAM) ; les modèles 14B gèrent des modifications simples mais peinent sur les refactorings multi-fichiers complexes.',
        ],
        affiliateLinks: [
          { label: 'Installer Cline pour VS Code (gratuit)', url: 'https://github.com/cline/cline', productName: 'Cline for VS Code', productCategory: 'dev-tool' },
          { label: 'Installer Cline pour JetBrains (gratuit)', url: 'https://cline.bot/jetbrains', productName: 'Cline for JetBrains', productCategory: 'dev-tool' },
        ],
      },
      decisionGuide: {
        title: 'Lequel utiliser ?',
        content: 'Associez votre priorité à un plugin — les six sont détaillés plus bas sur cette page.',
        items: [
          '**Le plus simple, opérationnel dès aujourd\'hui** → [Cline](https://github.com/cline/cline) — gratuit, agentique, VS Code + JetBrains.',
          '**Entièrement hors ligne, air-gapped, ou sous mandat de conformité** → [Bodega One Code](https://bodegaone.ai) — IDE autonome sans aucune composante cloud.',
          '**Autocomplétion la plus rapide pour une équipe, self-hosted** → [Tabby](https://tabby.tabbyml.com) — serveur d\'inférence propre, complétions sous 200 ms.',
          '**Workflow terminal-first, git-aware** → [Aider](https://aider.chat) — modifications multi-fichiers, auto-commits.',
          '**IDE commerciale soignée avec option locale occasionnelle** → [Cursor](https://cursor.com) — cloud-first par conception, modèles locaux via Ollama/LM Studio dans son réglage Custom API.',
          '**Vous utilisez déjà Continue** → s\'installe et fonctionne encore (Ollama, BYO-LLM), mais le projet n\'est plus maintenu depuis le rachat par Cursor en juin 2026 — prévoyez de passer à Cline dès que possible, sans urgence.',
        ],
      },
      rankedList: {
        title: 'Meilleurs plugins IDE pour LLMs locaux — Classement',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline est le meilleur plugin IDE pour les LLMs locaux en 2026 car il supporte Ollama nativement, fonctionne dans VS Code et JetBrains, et ajoute l\'édition de fichiers agentique et les outils MCP sans dépendance cloud — Continue, l\'ancien n°1, a été racheté par Cursor en juin 2026 et n\'est plus développé activement.',
          },
          {
            type: 'plain-terms',
            text: 'Un plugin IDE pour LLMs locaux connecte votre éditeur de code (VS Code, IntelliJ) à un modèle tournant sur votre propre machine (via Ollama, LM Studio ou llama.cpp). Le modèle voit votre code et répond — aucun code ne quitte votre ordinateur, pas de frais d\'API, pas de limites d\'utilisation.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Cline — Meilleur choix global (gratuit, open-source, activement maintenu)',
            content: 'Cline (anciennement Claude Dev) est en 2026 le plugin de codage agentique le mieux maintenu pour les LLMs locaux — il a pris la première place après le rachat de Continue par Cursor en juin 2026. Il lit et écrit des fichiers, exécute des commandes terminal, navigue sur le web (via un outil navigateur) et utilise des serveurs MCP. Avec Ollama + Qwen3-Coder 32B, Cline peut implémenter des fonctionnalités complètes à partir d\'une invite. Limites : les modèles 32B sont requis pour des tâches agentiques multi-étapes fiables ; les modèles 14B suffisent pour des tâches simples. Tarifs : gratuit (BYOK — apportez votre propre clé API d\'Anthropic, OpenAI ou 30+ fournisseurs) ; ClinePass à 9,99 $/mois (essai à 4,99 $ le premier mois) pour un routage géré sans clé API requise ; Teams à 20 $/utilisateur/mois (10 premiers sièges gratuits). VS Code et toute la famille JetBrains : IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine et DataGrip. Backends compatibles : Ollama, LM Studio, proxy LiteLLM et 30+ fournisseurs cloud. 5M+ installations sur VS Code, JetBrains et d\'autres éditeurs.',
            affiliateLinks: [
              { label: 'Cline sur VS Code Marketplace (gratuit)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — Meilleur IDE local-first gratuit avec agent de codage intégré',
            content: 'Bodega One Code est une IDE IA local-first, conçue dès le départ autour d\'un agent de codage plutôt qu\'ajoutée à un éditeur existant. Elle prend en charge le bring-your-own-LLM (BYOL) sur 10+ backends, dont Ollama, LM Studio, llama.cpp, LocalAI, KoboldCpp, GPT4All et MLX pour les modèles locaux, plus des fournisseurs cloud directs si vous le souhaitez : pointez-la vers n\'importe quel backend et l\'agent exécute intégralement la planification, l\'édition et l\'exécution face à ce modèle, sans dépendance à un fournisseur unique. L\'application entière tourne sur votre machine, avec un mode hors ligne et air-gap complet qui bloque les connexions réseau sortantes, si bien qu\'aucune télémétrie ni appel de modèle ne quitte la machine — elle fonctionne donc dans des environnements isolés du réseau où des outils connectés au cloud comme Cursor ou GitHub Copilot ne peuvent pas s\'exécuter du tout. Tarifs : gratuit pour un usage personnel pendant la bêta ouverte actuelle, droits d\'usage commercial inclus pour l\'instant ; un palier Pro payant, à vie (prix pas encore annoncé), est prévu pour la sortie complète et ajoutera des droits d\'usage commercial permanents, des espaces de travail illimités et une deuxième machine — mais n\'est pas encore disponible à l\'achat. Aucun abonnement, aucun comptage d\'usage pour les modèles locaux. Cela en fait un bon choix pour les secteurs réglementés, les prestataires gouvernementaux et de défense, et toute équipe dont la politique de sécurité interdit l\'envoi de code vers un serveur tiers — le public même qui recherche l\'inférence locale. Par rapport à Cline, qui est un plugin ajouté à VS Code, Bodega One Code est un IDE autonome conçu autour de l\'agent dès le départ ; les équipes déjà engagées sur VS Code trouveront en Cline l\'ajout le plus simple, tandis que celles qui démarrent de zéro ou ont besoin d\'un fonctionnement hors ligne garanti disposent avec Bodega One Code d\'un environnement conçu à cet effet.',
            affiliateLinks: [
              { label: 'Bodega One Code (gratuit, site officiel)', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — Toujours fonctionnel, plus maintenu [Racheté par Cursor, juin 2026 — Version finale v2.0.0-vscode]',
            content: 'Continue était le principal assistant de codage IA open-source pour les LLMs locaux avant son rachat par Cursor en juin 2026. Il se connecte à Ollama, LM Studio, llama.cpp et toute API OpenAI-compatible. Fonctionnalités : chat inline (Cmd+L), autocomplétion (Tab), outils du protocole de contexte de modèle (MCP), indexation de codebase et commandes slash personnalisées. L\'extension VS Code compte 2M+ installations. Le plugin JetBrains fonctionne dans IntelliJ IDEA, PyCharm, GoLand, WebStorm et Rider — il ne couvre pas CLion ni RustRover. Meilleurs modèles locaux : Qwen3-Coder 14B (codage), Llama 3.3 8B (chat). Installation : installer l\'extension, définir le provider sur Ollama, choisir un modèle — terminé en 2 minutes. Note (juin 2026) : Continue a été racheté par Cursor. La version 2.0.0-vscode, sortie le 19 juin 2026, est la dernière ; le dépôt GitHub est désormais en lecture seule, et les données cloud hébergées par Continue ont été supprimées après le 15 juillet 2026. L\'extension continue de s\'installer et de fonctionner pleinement hors ligne avec Ollama et le BYO-LLM — mais sans développement ultérieur de la part de l\'équipe d\'origine. Des forks communautaires restent actifs.',
            affiliateLinks: [
              { label: 'Continue sur VS Code Marketplace (gratuit)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — Meilleure autocomplétion self-hosted',
            content: 'Tabby est un assistant de codage self-hosted, écrit en Rust sous licence Apache 2.0, qui tourne son propre serveur d\'inférence (distinct d\'Ollama). Il utilise des petits modèles spécialisés (1–3B paramètres) entraînés spécifiquement pour le fill-in-the-middle (FIM) — nettement plus rapide qu\'un modèle 7B généraliste. La version stable actuelle est v0.32.0, avec environ 33K étoiles GitHub. Extensions IDE pour VS Code, JetBrains, Vim/Neovim et Emacs. Idéal pour : équipes de 5 à 50 développeurs, en particulier les équipes réglementées ou sensibles à la PI qui veulent une autocomplétion rapide (<200 ms) sans envoyer de code dans le cloud. Nécessite un serveur dédié ou une machine de bureau puissante — self-hosting gratuit avec utilisateurs illimités, aucun coût par siège.',
            affiliateLinks: [
              { label: 'Tabby sur GitHub (open-source, self-hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — Meilleur outil terminal pour le codage IA',
            content: 'Aider est un pair-programmeur IA en terminal qui s\'intègre avec git. Il comprend la structure complète du dépôt, fait des modifications multi-fichiers et commit automatiquement. Fonctionne avec Ollama (--model ollama/qwen2.5-coder:14b), LM Studio ou toute API OpenAI-compatible. Meilleurs modèles locaux : Qwen3-Coder 32B (mode architecte) + Qwen3-Coder 7B (mode éditeur). Aider utilise une approche à deux modèles : un grand modèle planifie les changements, un petit les implémente. 44K+ étoiles GitHub. Coût : gratuit et open-source. Note : Aider reste en versionnage 0.x en 2026, les flags CLI et le format .aider.conf.yml changent parfois entre versions mineures — vérifiez le changelog après une mise à jour.',
            affiliateLinks: [
              { label: 'Aider sur GitHub (open-source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — Meilleure option commerciale avec support modèles locaux',
            content: 'Cursor est un fork VS Code avec des fonctionnalités IA intégrées. Cursor supporte les modèles locaux via Ollama et LM Studio dans son paramètre "Custom API". Cependant, les fonctionnalités les plus puissantes de Cursor (mode Agent avec recherche web, conscience complète de la codebase) nécessitent des modèles cloud. L\'intégration de modèles locaux fonctionne pour le chat et les complétions simples, mais reste en retrait sur Cline pour les workflows axés confidentialité, car Cursor demeure une application connectée au cloud même quand l\'inférence tourne localement. Tarifs : Hobby (gratuit, usage de modèles locaux inclus) ; Pro à 20 $/mois (16 $/mois en facturation annuelle, inclut un pool de crédits IA de 20 $/mois pour les modèles frontière ; le mode Auto est illimité sans coût en crédits) ; Pro+ à 60 $/mois (3x les crédits d\'usage) ; Ultra à 200 $/mois (20x l\'usage) ; Teams à 40 $/utilisateur/mois avec facturation centralisée et SSO. Note : Cursor a acquis Supermaven (2024) et Continue.dev (juin 2026). SpaceX a finalisé le rachat de Cursor pour 60 milliards de dollars en août 2026, quelques jours après sa propre entrée en bourse — le chiffre d\'affaires annualisé de Cursor aurait bondi d\'environ 100 millions de dollars début 2025 à plus de 4 milliards de dollars d\'ici juin 2026. Cette consolidation fait de Cursor la force commerciale dominante des outils de codage IA — mais soulève des questions à long terme sur les alternatives open-source.',
            pros: [
              'Fork VS Code soigné et familier — courbe d\'apprentissage quasi nulle pour les utilisateurs VS Code existants',
              'Modèles locaux via Ollama ou LM Studio dans le réglage Custom API',
              'Le palier Hobby gratuit inclut l\'usage de modèles locaux, pas seulement un essai',
            ],
            cons: [
              'Les fonctionnalités les plus puissantes (mode Agent, conscience complète de la codebase) nécessitent des modèles cloud/frontière, pas locaux',
              'Désormais propriété de SpaceX/xAI — un profil de fournisseur très différent d\'un outil open-source indépendant',
            ],
            affiliateLinks: [
              { label: 'Démarrer gratuitement avec Cursor Hobby', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-fr.webp',
        imageCaption: 'Meilleurs Plugins IDE pour LLM Locaux, Classés -- Classement 2026',
      },
      setupGuide: {
        title: 'Configuration rapide : Cline + Ollama dans VS Code',
        content: 'Prêt à installer Cline ? → [Installer Cline gratuitement](https://github.com/cline/cline). Suivez ces étapes pour le connecter à Ollama — le moyen le plus rapide de démarrer le codage local avec le pick n°1 actuel :',
        numberedItems: [
          'Installer Ollama : `curl -fsSL https://ollama.com/install.sh | sh`',
          'Télécharger un modèle de codage : `ollama pull qwen2.5-coder:14b` (ou `qwen3-coder:32b` pour les tâches agentiques)',
          'Dans VS Code, installer Cline depuis le marketplace des extensions',
          'Ouvrir la barre latérale Cline et cliquer sur l\'icône des paramètres (engrenage)',
          'Définir le fournisseur API sur "Ollama", l\'URL de base sur `http://localhost:11434`, et l\'ID du modèle sur celui téléchargé',
          'Redémarrer VS Code — l\'icône Cline apparaît dans la barre latérale',
          'Saisir une tâche dans le panneau de chat Cline — il peut lire/écrire des fichiers et exécuter des commandes terminal directement',
        ],
      },
      aiderSetupGuide: {
        title: 'Configuration rapide : Aider + Ollama (Terminal)',
        content: 'Prêt à installer Aider ? → [Installer Aider gratuitement](https://aider.chat). Pour un codage IA terminal-natif et conscient de git — documentation officielle d\'Aider : aider.chat/docs/llms/ollama.html',
        numberedItems: [
          'Installer Ollama et télécharger un modèle : `ollama pull qwen2.5-coder:32b`',
          'Installer Aider : `python -m pip install aider-install && aider-install`',
          'Définir la base de l\'API Ollama : `export OLLAMA_API_BASE=http://127.0.0.1:11434`',
          'Lancer Aider avec le modèle local : `aider --model ollama/qwen2.5-coder:32b`',
          'Pour la configuration à deux modèles (architecte/éditeur), ajouter `--architect-model ollama/qwen2.5-coder:32b --editor-model ollama/qwen2.5-coder:7b`',
          'Aider commit automatiquement chaque changement dans git — vérifiez avec `git log` ou `git diff HEAD~1`',
        ],
      },
      modelRecommendations: {
        title: 'Meilleurs modèles locaux par plugin et tâche',
        columns: ['Plugin', 'Meilleur modèle de codage (local)', 'Meilleur modèle de chat (local)', 'VRAM min.'],
        rows: [
          { 'Plugin': 'Cline', 'Meilleur modèle de codage (local)': 'Qwen3-Coder 32B Q4', 'Meilleur modèle de chat (local)': 'Qwen3 32B Q4', 'VRAM min.': '24 Go' },
          { 'Plugin': 'Bodega One Code', 'Meilleur modèle de codage (local)': 'Tout modèle local (BYOL)', 'Meilleur modèle de chat (local)': 'Tout modèle local (BYOL)', 'VRAM min.': 'Selon le modèle choisi' },
          { 'Plugin': 'Continue (héritage)', 'Meilleur modèle de codage (local)': 'Qwen3-Coder 14B Q8', 'Meilleur modèle de chat (local)': 'Llama 3.3 8B Q4', 'VRAM min.': '16 Go' },
          { 'Plugin': 'Tabby', 'Meilleur modèle de codage (local)': 'StarCoder2-7B (intégré)', 'Meilleur modèle de chat (local)': 'N/A (code uniquement)', 'VRAM min.': '8 Go' },
          { 'Plugin': 'Aider', 'Meilleur modèle de codage (local)': 'Qwen3-Coder 14B (éditeur)', 'Meilleur modèle de chat (local)': 'Qwen3-Coder 32B (architecte)', 'VRAM min.': '16–24 Go' },
          { 'Plugin': 'Cursor', 'Meilleur modèle de codage (local)': 'DeepSeek-Coder-V2 (via Ollama)', 'Meilleur modèle de chat (local)': 'Qwen3 14B', 'VRAM min.': '16 Go' },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-fr.webp',
        imageCaption: 'Meilleurs Modèles Locaux par Plugin IDE -- Modèle de codage et VRAM minimum',
        note: 'Besoin de matériel pour ces modèles ? 8 Go de VRAM couvrent les petits modèles de complétion de Tabby ; 16 Go gèrent la plupart des modèles de codage 14B (Continue, mode éditeur d\'Aider, option locale de Cursor) ; 24 Go+ est le minimum réaliste pour un travail agentique 32B fiable avec Cline ou le mode architecte d\'Aider. Voir [Meilleurs GPU pour LLMs locaux](/fr/local-llms/best-gpus-for-local-llms) pour la sélection complète, ou [Meilleurs GPU économiques pour LLMs locaux](/fr/local-llms/best-budget-gpus-local-llm) si vous démarrez sous 16 Go.',
      },
      lmStudioPlugins: {
        title: 'Meilleurs plugins LM Studio (ce n\'est pas la même chose que les plugins IDE)',
        content: 'C\'est une question différente de « quelle extension IDE se connecte à LM Studio » (traitée ci-dessus) — et qui mérite une réponse directe, car LM Studio est l\'un des deux backends auxquels se connecte chaque plugin de ce guide. LM Studio dispose de son propre système de plugins depuis fin 2024 : les plugins s\'exécutent à l\'intérieur de LM Studio lui-même — actuellement sous forme de code TypeScript/JavaScript sur Node.js dans un worker sandboxé, le support Python étant encore en développement — et peuvent intercepter les requêtes d\'inférence, ajouter des processeurs de prompts, brancher des backends d\'appel d\'outils, ou ajouter de nouveaux panneaux d\'interface. Installez-les depuis la marketplace organisée sur lmstudio.ai/plugins ; chaque plugin déclare au préalable les permissions requises (accès réseau, lecture du système de fichiers), que vous pouvez révoquer ultérieurement depuis les Paramètres sans désinstaller le plugin. Catégories courantes en 2026 : plugins de recherche web, préprocesseurs RAG/récupération de documents, préprocesseurs OCR, plugins de boîte à outils agentique, outils shell/accès fichiers, et plugins de mémoire.',
        items: [
          '**Plugins de recherche web** : permettent à un modèle local dans LM Studio d\'intégrer des résultats web en direct à son contexte — utile car les modèles locaux n\'ont pas d\'accès internet intégré.',
          '**Plugins RAG / documents** : indexent un dossier local de PDF ou de fichiers texte et récupèrent automatiquement les extraits pertinents à chaque requête.',
          '**Plugins de boîte à outils agentique** : donnent au modèle un accès shell, la lecture/écriture de fichiers, ou l\'exécution de tâches multi-étapes directement dans l\'interface de chat de LM Studio — la même catégorie de capacité que Cline apporte à VS Code, mais s\'exécutant dans LM Studio plutôt qu\'un éditeur.',
          '**Plugins de mémoire** : conservent le contexte entre les sessions de chat au lieu de repartir de zéro à chaque fois.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Continue peut-il remplacer entièrement GitHub Copilot pour un usage local ?',
            a: 'Depuis juin 2026, Continue a été racheté par Cursor et la version 2.0.0 en est la dernière publication (le dépôt est en lecture seule). L\'extension continue de fonctionner avec Ollama et le BYO-LLM, mais ne reçoit plus de développement de l\'équipe d\'origine. Comme alternative open-source maintenue, Cline est le remplacement recommandé — il offre le même modèle BYOK, fonctionne dans VS Code et JetBrains, et ajoute l\'édition de fichiers agentique. GitHub Copilot Pro coûte 10 $/mois avec 15 $/mois de crédits IA ; Cline est gratuit avec votre propre clé API.',
          },
          {
            q: 'Quel plugin est le meilleur pour le refactoring multi-fichiers ?',
            a: 'Cline ou Aider. Les deux lisent plusieurs fichiers, comprennent les dépendances et font des modifications coordonnées. Cline fonctionne dans VS Code (meilleur retour visuel) ; Aider fonctionne dans le terminal (meilleur pour l\'intégration CI/CD et les commits git-aware). Pour des modèles 30B+ avec 24 Go de VRAM, Cline avec Qwen3-Coder 32B gère le refactoring complexe de manière fiable.',
          },
          {
            q: 'Tabby fonctionne-t-il sans GPU ?',
            a: 'Oui — Tabby peut tourner sur CPU avec de petits modèles (1–3B). Toutefois, la latence d\'autocomplétion sur CPU est de 500 ms à 2 s, ce qui semble lent par rapport à l\'objectif de <200 ms pour un codage fluide. Sur des machines sans GPU, Cline + Ollama avec un modèle rapide de 1B ou 3B offre un meilleur contrôle de la latence.',
          },
          {
            q: 'Puis-je utiliser ces plugins avec LM Studio plutôt qu\'Ollama ?',
            a: 'Oui. LM Studio expose une API OpenAI-compatible sur le port 1234 par défaut. Définissez le provider du plugin sur "openai" avec l\'URL de base `http://localhost:1234/v1` et utilisez n\'importe quel nom de modèle de votre bibliothèque LM Studio. Cline, Continue et Aider supportent tous cette configuration. Notez que ceci est différent du système de plugins propre à LM Studio (voir la section Plugins LM Studio ci-dessus) — celui-ci sert à étendre LM Studio lui-même, pas à connecter un IDE externe.',
          },
          {
            q: 'Quels IDE JetBrains supportent les plugins LLM locaux ?',
            a: 'Cline et Continue proposent tous deux des plugins JetBrains. Cline couvre toute la famille : IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand, Rider, CLion, RustRover, RubyMine et DataGrip. Continue couvre uniquement IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand et Rider. Installez-les depuis le JetBrains Marketplace (et non le VS Code Marketplace) et configurez les mêmes paramètres de fournisseur Ollama/LM Studio que la version VS Code. Tabby dispose aussi d\'un support JetBrains pour l\'autocomplétion seule.',
          },
          {
            q: 'Cline fonctionne-t-il dans PyCharm, Rider, GoLand, WebStorm, CLion et RustRover ?',
            a: 'Oui — le plugin JetBrains de Cline, installé depuis le JetBrains Marketplace, supporte toute la famille JetBrains : IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine et DataGrip. Configurez les mêmes paramètres de fournisseur Ollama ou LM Studio que la version VS Code. Le plugin JetBrains de Continue (non maintenu depuis le rachat par Cursor en juin 2026) couvre un ensemble plus restreint — IntelliJ IDEA, PyCharm, GoLand, WebStorm et Rider — mais pas CLion ni RustRover.',
          },
          {
            q: 'Lesquels de ces outils fonctionnent entièrement hors ligne pour le RGPD, HIPAA, ou les environnements air-gapped ?',
            a: 'Bodega One Code est conçu spécifiquement pour cela : fonctionnement hors ligne complet avec modèles locaux, plus un mode air-gap qui bloque toutes les connexions réseau sortantes, si bien qu\'aucune télémétrie ni appel de modèle ne quitte la machine. Cline, Continue, Tabby et Aider fonctionnent aussi entièrement hors ligne, à condition de les pointer vers un backend local (Ollama, LM Studio, ou un serveur Tabby auto-hébergé) plutôt qu\'une API cloud — aucun d\'eux ne « téléphone à la maison » dans cette configuration. Le support de modèles locaux de Cursor (via son réglage Custom API) tourne toujours dans une application connectée au cloud, ce qui ne convient donc pas aux environnements isolés du réseau.',
          },
          {
            q: 'Qu\'est-ce que Bodega One Code, et en quoi diffère-t-il de Cline ?',
            a: 'Bodega One Code est une IDE IA autonome et local-first avec un agent de codage intégré, gratuite pour un usage personnel pendant sa bêta ouverte actuelle — contrairement à Cline, qui est un plugin ajouté à VS Code ou JetBrains, Bodega One Code est une IDE complète conçue autour de l\'agent dès le départ. Elle prend en charge le bring-your-own-LLM (BYOL) sur 10+ backends, et fonctionne entièrement hors ligne avec prise en charge air-gap. Un palier Pro payant à vie pour usage commercial est prévu mais pas encore disponible à l\'achat. Elle convient bien aux environnements réglementés ou isolés du réseau où un éditeur connecté au cloud ne peut tout simplement pas être utilisé.',
          },
        ],
      },
      finalRecommendations: {
        title: 'Mes recommandations pour 2026',
        content: 'Six outils, une page — voici la version courte si vous voulez juste la réponse :',
        items: [
          '**Meilleur global** → [Cline](https://github.com/cline/cline) — gratuit, agentique, VS Code + toute la famille JetBrains. Installez-le en premier.',
          '**Meilleur pour le hors ligne complet / la conformité** → [Bodega One Code](https://bodegaone.ai) — IDE autonome, sans composante cloud.',
          '**Meilleure autocomplétion** → [Tabby](https://tabby.tabbyml.com) — self-hosted, sous 200 ms.',
          '**Meilleur workflow terminal** → [Aider](https://aider.chat) — git-aware, multi-fichiers.',
          '**Meilleure IDE commerciale** → [Cursor](https://cursor.com) — démarrez gratuitement avec le palier Hobby, ajoutez des modèles locaux via Ollama/LM Studio.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[DeepSeek vs Qwen pour le Coding Local 2026 : Qui gagne ?](/fr/power-local-llm/deepseek-vs-qwen-coding-local-2026) -- comparaison DeepSeek vs Qwen pour le coding — choisir le modèle avant de configurer le plugin IDE',
          '[Remplacer GitHub Copilot par un LLM local](/fr/power-local-llm/replace-github-copilot-with-local-llm) -- guide complet pour passer de Copilot à un modèle auto-hébergé',
          '[Meilleurs modèles de coding local 2026](/fr/power-local-llm/best-local-coding-models-2026) -- quels modèles fonctionnent le mieux dans VS Code et JetBrains',
          '[Continue.dev vs Cline vs Aider : Outils de coding LLM locaux 2026](/fr/power-local-llm/continue-dev-vs-cline-vs-aider-local) -- comparer les outils IDE compatibles avec des backends LLM locaux',
          '[Meilleurs outils RAG pour documents professionnels 2026](/fr/power-local-llm/best-rag-tools-for-business-documents-2026) -- étendre l\'IA de coding local avec la récupération de documents',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Continue peut-il remplacer entièrement GitHub Copilot pour un usage local ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Depuis juin 2026, Continue a été racheté par Cursor et la version 2.0.0 en est la dernière publication. L\'extension continue de fonctionner avec Ollama, mais Cline est désormais l\'alternative open-source maintenue recommandée — gratuite avec BYOK, fonctionne dans VS Code et JetBrains, et ajoute l\'édition de fichiers agentique.' },
        },
        {
          '@type': 'Question',
          name: 'Cline fonctionne-t-il dans PyCharm, Rider, GoLand, WebStorm, CLion et RustRover ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Oui. Le plugin JetBrains de Cline supporte toute la famille JetBrains : IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine et DataGrip. Le plugin JetBrains de Continue couvre un ensemble plus restreint — IntelliJ IDEA, PyCharm, GoLand, WebStorm et Rider — et ne reçoit plus de mises à jour.' },
        },
        {
          '@type': 'Question',
          name: 'Lesquels de ces outils fonctionnent entièrement hors ligne pour le RGPD, HIPAA, ou les environnements air-gapped ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bodega One Code est conçu spécifiquement pour cela, avec un mode air-gap dédié. Cline, Continue, Tabby et Aider fonctionnent aussi entièrement hors ligne quand ils pointent vers un backend local (Ollama, LM Studio, ou un serveur auto-hébergé). Cursor reste une application connectée au cloud même avec des modèles locaux, ce qui ne convient donc pas aux environnements isolés du réseau.' },
        },
        {
          '@type': 'Question',
          name: 'Qu\'est-ce que Bodega One Code, et en quoi diffère-t-il de Cline ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bodega One Code est une IDE IA autonome et local-first avec un agent de codage intégré, gratuite pour un usage personnel pendant sa bêta ouverte actuelle, avec support bring-your-own-LLM (BYOL) sur 10+ backends et fonctionnement complet hors ligne/air-gap. Contrairement à Cline, qui est un plugin ajouté à VS Code ou JetBrains, Bodega One Code est une IDE complète conçue autour de l\'agent dès le départ.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Meilleurs plugins IDE pour LLMs locaux 2026',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: 'Meilleur global — activement maintenu, agentique, VS Code + toute la famille JetBrains, gratuit (BYOK)' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: 'Meilleure IDE local-first gratuite pour usage personnel avec agent de codage intégré — BYOL, hors ligne/air-gap complet' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: 'Toujours fonctionnel mais non maintenu depuis le rachat par Cursor (juin 2026)' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: 'Meilleure autocomplétion self-hosted — modèles FIM 1–3B, tous éditeurs' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: 'Meilleur outil terminal-natif — git-aware, multi-fichiers, open-source' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: 'Meilleure option commerciale — palier Hobby gratuit + support de modèles locaux, 20 $/mois Pro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Meilleurs plugins IDE pour LLMs locaux 2026 (VS Code, JetBrains & LM Studio)', description: 'Comparatif classé de Cline, Bodega One Code, Continue, Tabby, Aider et Cursor pour l\'usage de LLMs locaux dans VS Code, toute la famille JetBrains et LM Studio. Avec tableau comparatif, guides d\'installation, recommandations de modèles et conseils matériel.', datePublished: '2026-05-26', dateModified: '2026-08-25', url: 'https://www.promptquorum.com/fr/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'fr' },
  },

  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-25',
    last_full_refresh: '2026-08-25',
    theme: 'Coding Assistants',
    title: 'ローカルLLM向けIDEプラグインおすすめ2026年版（VS Code・JetBrains・LM Studio）',
    seoTitle: 'ローカルLLM向けIDEおすすめ2026（Ollama・LM Studio・JetBrains）',
    metaDescription: 'Clineは2026年ローカルLLM向け最良のIDEです：無料、VS Codeと全JetBrains IDE（PyCharm、Rider、CLion、GoLand）でOllama・LM Studioに対応。',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-ja.webp',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    leadAnswerBlock: '**Cline（VS Code + JetBrains）は2026年時点でローカルLLM向け最良の無料IDEです：Ollama・LM Studio（プラス任意のOpenAI互換API）にネイティブ接続、エージェント的ファイル編集・ターミナルコマンド・MCPツールに対応し、完全に自分のハードウェアで動作。注記：Continue.dev（従来の1位）は2026年6月にCursorに買収されました——v2.0.0-vscodeが最終リリースで、リポジトリは読み取り専用です。**',
    quickAnswerTop: {
      question: 'コーディング中にローカルAIモデルを使うのに最良のIDEプラグインは何ですか？',
      answer: 'Cline（無料・オープンソース・BYOK）は2026年のOllama・LM Studio・ローカルLLM向け最良のIDEプラグインです——Continue.devが2026年6月にCursorに買収され、リポジトリがv2.0.0-vscodeで凍結されたためです。ClineはVS CodeとJetBrainsファミリー全体（PyCharm、Rider、CLion、GoLand、WebStorm、RustRover）で動作し、エージェント的ファイル編集とMCPツールに対応します。完全オフラインやコンプライアンス用途にはBodega One Codeが最有力。オートコンプリートのみならTabbyが最も軽量。Aiderはターミナルで最も力を発揮します。',
      bullets: [
        'Cline：総合最良、活発にメンテナンス中 — ファイル読み書き、ターミナルコマンド実行、MCPツール使用、VS Code + JetBrainsファミリー全体（PyCharm、Rider、CLion、GoLand、WebStorm、RustRover）、無料BYOKまたはClinePass月額$9.99から',
        'Bodega One Code：個人利用は無料のローカルファースト・スタンドアロンIDE（プラグインではない）——コーディングエージェント内蔵、BYOL対応、完全なオフライン・エアギャップ対応、商用ティアは一括$39（まだ購入不可）',
        'Continue：まだ動作するがメンテナンス終了（2026年6月にCursorが買収、v2.0.0-vscodeが最終版、クラウドデータは2026年7月15日以降削除）——Ollamaとの連携は引き続き機能するが今後の開発はない',
        'Tabby：自己ホスト型オートコンプリート最良 — 独自推論サーバー、1〜3Bモデル、GitHubスター約3.3万',
        'Aider：ターミナルネイティブ最良 — git対応、マルチファイル編集、GitHubスター4.4万以上',
        'Cursor：最良商用オプション — 無料Hobbyティア、Pro月額$20、Pro+月額$60、Ultra月額$200、Ollama/LM Studio Custom API経由のローカルモデル',
      ],
      updatedDate: '2026-08-25',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.devが2026年6月にCursorに買収 — v2.0.0-vscodeが最終リリースでリポジトリは読み取り専用、クラウドデータは2026年7月15日以降削除。Ollamaとの連携は引き続きローカルで機能するがメンテナンスは終了',
          'Clineが現在最もメンテナンスの行き届いた無料BYOKの選択肢：VS Code + JetBrainsファミリー全体（PyCharm、Rider、CLion、GoLand、WebStorm、RustRover）、エージェント的ファイル編集、MCPツール、500万インストール以上',
          'Bodega One Codeは個人利用は無料のローカルファースト・スタンドアロンIDEで、コーディングエージェントを内蔵しBYOL（bring-your-own-LLM）に対応——完全なオフライン・エアギャップ動作、強制サブスクリプションなし',
          'Tabbyは独自推論サーバー（1〜3Bモデル）で動作——チーム向けに最低レイテンシのオートコンプリート、Apache 2.0でセルフホスト',
          'Aiderはターミナルファーストオプション——git commit対応、マルチファイル書き換え、GitHubスター4.4万以上',
          'Cursor（無料Hobby / 月額$20 Pro / $60 Pro+ / $200 Ultra）はSupermavenとContinue.devの両方を買収；SpaceXは2026年8月にCursorの600億ドル買収を完了',
          'すべてのツールがローカルバックエンド（Ollama、LM Studio、セルフホストサーバー）に対して完全にオフラインで動作。Cursorのみ、ローカルモデル使用時でもクラウド接続アプリが必要',
        ],
      },
      buyingTable: {
        title: '6製品を一覧で比較',
        content: 'ここに挙げたプラグインはすべてローカルモデルに接続します——違いはどんなコーディングをするか、どれだけの商用エコシステムを求めるかです。',
        columns: ['プラグイン', '最適な用途', 'ローカルバックエンド', '料金', '入手方法'],
        rows: [
          { 'プラグイン': 'Cline', '最適な用途': '大半のユーザー/エージェントタスク', 'ローカルバックエンド': 'Ollama、LM Studio、30以上のAPI', '料金': '無料（BYOK）/月額$9.99から', '入手方法': '[無料インストール →](https://github.com/cline/cline)' },
          { 'プラグイン': 'Bodega One Code', '最適な用途': 'オフライン/エアギャップ/コンプライアンス', 'ローカルバックエンド': 'Ollama、LM Studio、llama.cpp等10+', '料金': '無料（個人）/一括$39', '入手方法': '[無料で試す →](https://bodegaone.ai)' },
          { 'プラグイン': 'Continue（レガシー）', '最適な用途': '既存Continueユーザーのみ', 'ローカルバックエンド': 'Ollama、LM Studio、llama.cpp', '料金': '無料（メンテナンス終了）', '入手方法': '[Continue.dev →](https://continue.dev)' },
          { 'プラグイン': 'Tabby', '最適な用途': '最速のセルフホスト型補完', 'ローカルバックエンド': '独自推論サーバー（1〜3B）', '料金': '無料・オープンソース', '入手方法': '[無料でセルフホスト →](https://tabby.tabbyml.com)' },
          { 'プラグイン': 'Aider', '最適な用途': 'ターミナル+gitワークフロー', 'ローカルバックエンド': 'Ollama、LM Studio、OpenAI互換', '料金': '無料・オープンソース', '入手方法': '[無料インストール →](https://aider.chat)' },
          { 'プラグイン': 'Cursor', '最適な用途': '洗練されたIDE、クラウド+ローカル併用', 'ローカルバックエンド': 'Ollama、LM Studio（Custom API）', '料金': '無料Hobby/$20〜$200/月', '入手方法': '[無料で開始 →](https://cursor.com)' },
        ],
        note: 'まだローカルモデルが動いていないなら6製品すべてスキップ——先にハードウェアとバックエンド（OllamaまたはLM Studio）を選んでからこの表に戻ってきてください。上記の各リンクは現時点でアフィリエイト関係のない単なる製品リンクです——このページ上部の開示事項を参照。',
      },
      clineCta: {
        title: 'Clineから始める：次の2分でインストール完了',
        content: 'Clineはこのページのデフォルトの推奨プラグインです。理由と、今すぐインストールする方法を紹介します。',
        items: [
          '**無料・オープンソース** — 自分のキーを持ち込むかローカルエンドポイントを指定、強制サブスクリプションなし（月額$9.99からのClinePassはオプションで、APIキー不要のマネージドルーティング用）。',
          '**VS CodeとJetBrainsファミリー全体で動作** — IntelliJ IDEA、PyCharm、WebStorm、PhpStorm、GoLand、Rider、CLion、RustRover、RubyMine、DataGrip。',
          '**Ollama・LM Studioにネイティブ接続** — 加えて30以上のOpenAI互換プロバイダーに対応、クラウド依存不要。',
          '**本当にエージェント的** — ファイルの読み書き、ターミナルコマンド実行、MCPツール利用が可能、単なるインラインオートコンプリートではない。',
          '**制限**：信頼性の高いマルチステップエージェントタスクには32Bクラスのローカルモデル（24 GB以上のVRAM）が必要。14Bモデルは単純な編集はこなせるが、複雑なマルチファイルリファクタリングには苦戦する。',
        ],
        affiliateLinks: [
          { label: 'Cline for VS Codeをインストール（無料）', url: 'https://github.com/cline/cline', productName: 'Cline for VS Code', productCategory: 'dev-tool' },
          { label: 'Cline for JetBrainsをインストール（無料）', url: 'https://cline.bot/jetbrains', productName: 'Cline for JetBrains', productCategory: 'dev-tool' },
        ],
      },
      decisionGuide: {
        title: 'どれを使うべきか？',
        content: '優先事項をプラグインに当てはめてください——6製品すべてこのページのさらに下で詳しく解説しています。',
        items: [
          '**とにかく簡単に今日から使いたい** → [Cline](https://github.com/cline/cline) — 無料、エージェント的、VS Code + JetBrains。',
          '**完全オフライン、エアギャップ、またはコンプライアンス要件下** → [Bodega One Code](https://bodegaone.ai) — クラウド要素が一切ないスタンドアロンIDE。',
          '**チーム向け最速オートコンプリート、セルフホスト** → [Tabby](https://tabby.tabbyml.com) — 独自推論サーバー、200ms未満の補完。',
          '**ターミナルファースト、git対応ワークフロー** → [Aider](https://aider.chat) — マルチファイル編集、自動コミット。',
          '**時々ローカルも使える洗練された商用IDE** → [Cursor](https://cursor.com) — 設計上クラウドファースト、Custom API設定でOllama/LM Studio経由のローカルモデル。',
          '**すでにContinueを使用中** → まだインストール・動作は可能（Ollama、BYO-LLM）だが、2026年6月のCursor買収以降メンテナンス終了——急ぐ必要はないが、都合の良いタイミングでClineへの移行を検討。',
        ],
      },
      rankedList: {
        title: 'ローカルLLM向けIDEプラグインランキング',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Clineは2026年のローカルLLM向け最良のIDEプラグインです。Ollamaをネイティブサポートし、VS CodeとJetBrainsの両方で動作し、クラウド依存なしでエージェント的ファイル編集とMCPツールを提供します——従来の1位だったContinueは2026年6月にCursorに買収され、現在は積極的な開発が行われていません。',
          },
          {
            type: 'plain-terms',
            text: 'ローカルLLM用IDEプラグインはコードエディタ（VS Code、IntelliJ）を自分のマシンで動くモデル（Ollama、LM Studio、llama.cpp経由）に接続します。モデルはコードを見て応答——コードは一切コンピュータ外に出ない、API料金なし、使用制限なし。',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Cline — 総合ベスト（無料・オープンソース・活発にメンテナンス）',
            content: 'Cline（旧Claude Dev）は2026年のローカルLLM向け最もメンテナンスの行き届いたエージェント的コーディングプラグインです——2026年6月にContinueがCursorに買収された後、首位の座を獲得しました。ファイルの読み書き、ターミナルコマンド実行、Webブラウジング（ブラウザツール経由）、MCPサーバーの利用が可能。Ollama + Qwen3-Coder 32Bとの組み合わせで、プロンプトから完全な機能実装が可能。制限：信頼性の高いマルチステップエージェントタスクには32Bモデルが必要（14Bモデルは単純なタスクに対応）。料金：無料（BYOK — Anthropic、OpenAI、または30以上のプロバイダーから自分のAPIキーを持ち込む）；ClinePassが月額$9.99（初月は$4.99）でAPIキー不要のマネージドルーティング；Teamsが月額$20/ユーザー（最初の10シートは無料）。VS CodeとJetBrainsファミリー全体：IntelliJ IDEA、PyCharm、WebStorm、PhpStorm、GoLand、Rider、CLion、RustRover、RubyMine、DataGrip。対応バックエンド：Ollama、LM Studio、LiteLLMプロキシ、30以上のクラウドプロバイダー。VS Code・JetBrains等を合わせて500万インストール以上。',
            affiliateLinks: [
              { label: 'Cline をVS Code Marketplaceでダウンロード（無料）', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — 無料のローカルファーストIDE、コーディングエージェント内蔵',
            content: 'Bodega One Codeは、既存のエディタに後付けされたアシスタントではなく、コーディングエージェントを中心に一から設計されたローカルファーストAI IDEです。Ollama、LM Studio、llama.cpp、LocalAI、KoboldCpp、GPT4All、MLXなどローカルモデル向けの10以上のバックエンドでBYOL（bring-your-own-LLM）に対応しており、希望すればクラウドプロバイダーへ直接接続することも可能です：バックエンドを指定すると、エージェントはその計画・編集・実行のループをすべてそのモデルに対して実行します——特定のプロバイダーへのロックインはありません。アプリケーション全体が自分のマシン上で動作し、送信ネットワーク接続をブロックする完全なオフライン・エアギャップモードを備えているため、テレメトリやモデル呼び出しがマシンの外に出ることはなく、CursorやGitHub Copilotのようなクラウド接続ツールがまったく使えないネットワーク隔離環境でも動作します。料金：現在のオープンベータ期間中は個人利用が無料で、当面は商用利用権も含まれます。有料の買い切りProティア（価格は未発表）は正式リリース時に予定されており、恒久的な商用利用権、無制限のワークスペース、2台目のマシンが加わりますが、まだ購入はできません。サブスクリプションはなく、ローカルモデル利用に使用量計測もありません。これにより、規制産業、政府・防衛関連の請負業者、そしてコードを第三者のサーバーへ送信することをセキュリティポリシーで禁じているチーム——そもそもローカル推論を求める層——に適しています。VS Codeに追加するプラグインであるClineと比較すると、Bodega One Codeはエージェントを中心に最初から設計されたスタンドアロンIDEです。すでにVS Codeを使っているチームにはClineの方が導入しやすく、ゼロから始めるチームや確実なオフライン動作が必要なチームには、Bodega One Codeがその目的に沿って作られた環境を提供します。',
            affiliateLinks: [
              { label: 'Bodega One Code（無料・公式サイト）', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — まだ動作するがメンテナンス終了[2026年6月にCursorが買収 — 最終バージョンv2.0.0-vscode]',
            content: '2026年6月にCursorに買収される前、ContinueはローカルLLM向けの主要オープンソースAIコーディングアシスタントでした。Ollama、LM Studio、llama.cpp、すべてのOpenAI互換APIに接続。機能：インラインチャット（Cmd+L）、オートコンプリート（Tab）、MCPツール、コードベースインデックス化、カスタムスラッシュコマンド。VS Code拡張は200万以上のインストール実績。JetBrainsプラグインはIntelliJ IDEA、PyCharm、GoLand、WebStorm、Riderで動作——CLionとRustRoverは非対応。推奨ローカルモデル：Qwen3-Coder 14B（コーディング）、Llama 3.3 8B（チャット）。セットアップ：拡張機能をインストールし、プロバイダーをOllamaに設定、モデルを選択——2分で完了。注記（2026年6月）：ContinueはCursorに買収されました。2026年6月19日リリースのv2.0.0-vscodeが最終版で、GitHubリポジトリは読み取り専用、Continueがホストしていたクラウドデータは2026年7月15日以降削除されました。Ollama・BYO-LLMとの連携は引き続き完全にオフラインで機能しますが、オリジナルチームによる開発は終了しています。コミュニティフォークは活発です。',
            affiliateLinks: [
              { label: 'Continue をVS Code Marketplaceでダウンロード（無料）', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — 自己ホスト型オートコンプリート最良',
            content: 'Tabbyは、Rustで書かれApache 2.0で公開されている自己ホスト型コーディングアシスタントで、独自推論サーバー（Ollamaとは別）を動かします。fill-in-the-middle（FIM）オートコンプリート専用に訓練された小型モデル（1〜3Bパラメータ）を使用——汎用7Bモデルより大幅に高速。現行の安定版はv0.32.0、GitHubスターは約3.3万。VS Code、JetBrains、Vim/Neovim、EmacsのIDE拡張機能が利用可能。最適な用途：5〜50人規模の開発チーム、特にコードをクラウドに送らず高速（200ms未満）な補完を求める規制業界やIP機微なチーム。専用サーバーまたは高性能デスクトップが必要——無制限ユーザーで無料セルフホスト、シート課金なし。',
            affiliateLinks: [
              { label: 'Tabby をGitHubで確認（オープンソース）', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — ターミナルネイティブAIコーディング最良',
            content: 'Aiderはgit統合のターミナルベースAIペアプログラマーです。リポジトリ全体の構造を理解し、マルチファイル編集を行い、変更を自動コミット。Ollama（--model ollama/qwen2.5-coder:14b）、LM Studio、すべてのOpenAI互換APIで動作。推奨ローカルモデル：Qwen3-Coder 32B（アーキテクトモード）+ Qwen3-Coder 7B（エディターモード）。Aiderは2モデル方式を採用——大型モデルが変更を計画し、小型モデルが実装します。GitHubスター4.4万以上。コスト：無料・オープンソース。注記：Aiderは2026年時点でも0.xバージョニングのままで、CLIフラグや.aider.conf.yml形式がマイナーリリース間で変わることがあります——アップグレード後はチェンジログを確認してください。',
            affiliateLinks: [
              { label: 'Aider をGitHubで確認（オープンソース）', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — ローカルモデルサポート付き最良商用オプション',
            content: 'CursorはAI機能内蔵のVS Codeフォークです。Cursorは「Custom API」設定でOllamaとLM Studio経由のローカルモデルをサポートします。ただしCursorの最も強力な機能（Webサーチ付きエージェントモード、フルコードベース認識）はクラウドモデルが必要です。ローカルモデル連携はチャットと単純な補完には機能しますが、Cursor自体はローカル推論時でもクラウド接続アプリのままであるため、プライバシー重視のワークフローではClineに劣ります。料金：Hobby（無料、ローカルモデル利用込み）；Pro月額$20（年払いなら月額$16、フロンティアモデル用$20分のAIクレジットプール込み；Autoモードはクレジット消費なしで無制限）；Pro+月額$60（利用クレジット3倍）；Ultra月額$200（利用20倍）；Teams月額$40/ユーザー（一元請求・SSO対応）。注記：CursorはSupermaven（2024年）とContinue.dev（2026年6月）を買収。SpaceXは自社のIPO直後の2026年8月にCursorの600億ドル買収を完了しました——Cursorの年換算収益は、報道によれば2025年初頭の約1億ドルから2026年6月までに40億ドル超に急増したとされています。この統合により、CursorはAIコーディングツール市場で支配的な商用勢力となっていますが、オープンソースの代替手段の長期的な行方には疑問も残ります。',
            pros: [
              '洗練された馴染みのあるVS Codeフォーク——既存のVS Codeユーザーにとって学習コストがほぼゼロ',
              'Custom API設定でOllamaまたはLM Studio経由のローカルモデルが使える',
              '無料のHobbyティアには単なる試用ではなくローカルモデル利用が含まれる',
            ],
            cons: [
              '最も強力な機能（エージェントモード、フルコードベース認識）はローカルではなくクラウド・フロンティアモデルが必要',
              '現在はSpaceX/xAI傘下——独立系オープンソースツールとは大きく異なるベンダープロファイル',
            ],
            affiliateLinks: [
              { label: 'Cursor Hobbyで無料スタート', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-ja.webp',
        imageCaption: 'ローカルLLM向けベストIDEプラグイン ランキング -- 2026年ランキング',
      },
      setupGuide: {
        title: 'クイックセットアップ：VS CodeでCline + Ollama',
        content: 'Clineをインストールする準備はできましたか？ → [Clineを無料でインストール](https://github.com/cline/cline)。以下の手順でOllamaに接続します——現在の1位プラグインでローカルLLMコーディングを始める最速の方法：',
        numberedItems: [
          'Ollamaをインストール：`curl -fsSL https://ollama.com/install.sh | sh`',
          'コーディングモデルをプル：`ollama pull qwen2.5-coder:14b`（エージェント的タスクには`qwen3-coder:32b`）',
          'VS Codeの拡張機能マーケットプレイスからClineをインストール',
          'Clineサイドバーを開き、設定の歯車アイコンをクリック',
          'APIプロバイダーを「Ollama」に設定、ベースURLを`http://localhost:11434`に、モデルIDをプルしたモデルに設定',
          'VS Codeを再起動——サイドバーにClineアイコンが表示される',
          'Clineチャットパネルにタスクを入力——ファイルの読み書きとターミナルコマンドの実行を直接行える',
        ],
      },
      aiderSetupGuide: {
        title: 'クイックセットアップ：Aider + Ollama（ターミナル）',
        content: 'Aiderをインストールする準備はできましたか？ → [Aiderを無料でインストール](https://aider.chat)。ターミナルネイティブでgit対応のAIコーディング向け——Aider公式ドキュメント：aider.chat/docs/llms/ollama.html',
        numberedItems: [
          'Ollamaをインストールし、モデルをプル：`ollama pull qwen2.5-coder:32b`',
          'Aiderをインストール：`python -m pip install aider-install && aider-install`',
          'Ollama APIベースを設定：`export OLLAMA_API_BASE=http://127.0.0.1:11434`',
          'ローカルモデルを指定してAiderを実行：`aider --model ollama/qwen2.5-coder:32b`',
          '2モデル構成（architect/editor）にする場合は`--architect-model ollama/qwen2.5-coder:32b --editor-model ollama/qwen2.5-coder:7b`を追加',
          'Aiderは各変更を自動的にgitへコミット——`git log`または`git diff HEAD~1`で確認可能',
        ],
      },
      modelRecommendations: {
        title: 'プラグインとタスク別の最良ローカルモデル',
        columns: ['プラグイン', '最良コーディングモデル（ローカル）', '最良チャットモデル（ローカル）', '最小VRAM'],
        rows: [
          { 'プラグイン': 'Cline', '最良コーディングモデル（ローカル）': 'Qwen3-Coder 32B Q4', '最良チャットモデル（ローカル）': 'Qwen3 32B Q4', '最小VRAM': '24 GB' },
          { 'プラグイン': 'Bodega One Code', '最良コーディングモデル（ローカル）': '任意のローカルモデル（BYOL）', '最良チャットモデル（ローカル）': '任意のローカルモデル（BYOL）', '最小VRAM': '選択したモデルに依存' },
          { 'プラグイン': 'Continue（レガシー）', '最良コーディングモデル（ローカル）': 'Qwen3-Coder 14B Q8', '最良チャットモデル（ローカル）': 'Llama 3.3 8B Q4', '最小VRAM': '16 GB' },
          { 'プラグイン': 'Tabby', '最良コーディングモデル（ローカル）': 'StarCoder2-7B（内蔵）', '最良チャットモデル（ローカル）': 'N/A（コードのみ）', '最小VRAM': '8 GB' },
          { 'プラグイン': 'Aider', '最良コーディングモデル（ローカル）': 'Qwen3-Coder 14B（エディター）', '最良チャットモデル（ローカル）': 'Qwen3-Coder 32B（アーキテクト）', '最小VRAM': '16–24 GB' },
          { 'プラグイン': 'Cursor', '最良コーディングモデル（ローカル）': 'DeepSeek-Coder-V2（Ollama経由）', '最良チャットモデル（ローカル）': 'Qwen3 14B', '最小VRAM': '16 GB' },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-ja.webp',
        imageCaption: 'IDEプラグイン別ベストローカルモデル -- コーディングモデルと最小VRAM',
        note: 'これらのモデル向けのハードウェアをお探しですか？8 GBのVRAMでTabbyの小型補完モデルをカバーできます。16 GBあれば大半の14Bコーディングモデル（Continue、Aiderのエディターモード、Cursorのローカルオプション）が動きます。24 GB以上は、Cline やAiderのアーキテクトモードで信頼性の高い32Bエージェントタスクを行うための現実的な最低ラインです。詳しい選定は[ローカルLLM向けベストGPU](/ja/local-llms/best-gpus-for-local-llms)、16 GB未満から始める場合は[ローカルLLM向け予算重視GPU](/ja/local-llms/best-budget-gpus-local-llm)を参照してください。',
      },
      lmStudioPlugins: {
        title: '最良のLM Studioプラグイン（IDEプラグインとは別物）',
        content: 'これは「どのIDE拡張機能がLM Studioに接続するか」（上記で解説）とは別の問いです——そして直接答える価値があります。なぜならLM Studioは、この記事で紹介したすべてのプラグインが接続する2つのバックエンドのうちの1つだからです。LM Studioは2024年後半から独自のプラグインシステムを持っています：プラグインはLM Studio自体の内部で——現在はサンドボックス化されたワーカー内のNode.js上のTypeScript/JavaScriptコードとして動作し、Pythonサポートは開発中です——推論リクエストをインターセプトしたり、プロンプトプロセッサーを追加したり、ツール呼び出しバックエンドを接続したり、新しいUIパネルを追加したりできます。lmstudio.ai/pluginsの厳選されたマーケットプレイスからインストールでき、各プラグインは必要な権限（ネットワークアクセス、ファイルシステム読み取り）を事前に宣言します。これらの権限はアンインストールせずに後から設定で取り消すことも可能です。2026年時点での主なカテゴリ：Web検索プラグイン、RAG/文書検索プリプロセッサ、OCRプリプロセッサ、エージェント的ツールセットプラグイン、シェル/ファイルアクセスツール、メモリプラグイン。',
        items: [
          '**Web検索プラグイン**：LM Studio内のローカルモデルが最新のWeb検索結果をコンテキストに取り込めるようにする——ローカルモデルには組み込みのインターネットアクセスがないため有用。',
          '**RAG/文書プラグイン**：PDFやテキストファイルのローカルフォルダをインデックス化し、クエリごとに関連する箇所を自動的に取得する。',
          '**エージェント的ツールセットプラグイン**：LM Studio自体のチャットUI内で、モデルにシェルアクセス、ファイルの読み書き、マルチステップタスクの実行を直接与える——ClineがVS Code向けに提供するのと同じカテゴリの機能だが、エディターではなくLM Studio内で動作する点が異なる。',
          '**メモリプラグイン**：毎回新規に開始するのではなく、チャットセッションをまたいでコンテキストを保持する。',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'ContinueはローカルでGitHub Copilotの完全な代替になれますか？',
            a: '2026年6月時点でContinueはCursorに買収され、v2.0.0が最終リリースです（リポジトリは読み取り専用）。拡張機能はOllamaやBYO-LLMと引き続き動作しますが、オリジナルチームによる開発はありません。メンテナンスされているオープンソースの代替として推奨されるのはClineです——同じBYOKモデルを提供し、VS CodeとJetBrainsで動作し、エージェント的ファイル編集が加わっています。GitHub Copilot Proは月額$10（月額$15分のAIクレジット付き）、Clineは自分のAPIキーがあれば無料です。',
          },
          {
            q: 'マルチファイルリファクタリングに最適なプラグインはどれですか？',
            a: 'ClineまたはAiderです。両方とも複数ファイルを読み込み、依存関係を理解し、コードベース全体で協調した変更を行えます。Clineはビジュアルフィードバックに優れ（VS Code内）、Aiderはgit対応コミットに優れています（ターミナル、CI/CD連携）。30B以上（24GB VRAM）のモデルなら、Cline + Qwen3-Coder 32Bが複雑なリファクタリングを確実に処理できます。',
          },
          {
            q: 'OllamaではなくLM Studioでこれらのプラグインを使えますか？',
            a: 'はい。LM StudioはデフォルトでポートNo 1234にOpenAI互換APIを公開します。プラグインのプロバイダーを「openai」に設定し、ベースURLを`http://localhost:1234/v1`にしてください。Cline、Continue、Aiderはすべてこの設定をサポートしています。これは上記の「最良のLM Studioプラグイン」セクションで説明したLM Studio自体のプラグインシステムとは別物である点に注意してください——あちらは外部IDEをLM Studioに接続するものではなく、LM Studio自体を拡張するためのものです。',
          },
          {
            q: 'ClineはPyCharm、Rider、GoLand、WebStorm、CLion、RustRoverで動作しますか？',
            a: 'はい——JetBrains MarketplaceからインストールできるClineのJetBrainsプラグインは、JetBrainsファミリー全体をサポートします：IntelliJ IDEA、PyCharm、WebStorm、PhpStorm、GoLand、Rider、CLion、RustRover、RubyMine、DataGrip。VS Code版と同じOllamaまたはLM Studioのプロバイダー設定を行ってください。Continueのプラグイン（2026年6月のCursor買収以降メンテナンス終了）はより狭い範囲——IntelliJ IDEA、PyCharm、GoLand、WebStorm、Rider——のみをカバーし、CLionやRustRoverには対応していません。',
          },
          {
            q: 'どのJetBrains IDEがローカルLLMプラグインをサポートしていますか？',
            a: 'ClineとContinueはどちらもJetBrainsプラグインを提供しています。Clineはファミリー全体をカバー：IntelliJ IDEA、PyCharm、PhpStorm、WebStorm、GoLand、Rider、CLion、RustRover、RubyMine、DataGrip。ContinueはIntelliJ IDEA、PyCharm、PhpStorm、WebStorm、GoLand、Riderのみをカバーします。JetBrains Marketplace（VS Code Marketplaceではない）からインストールし、VS Code版と同じOllama/LM Studioプロバイダー設定を使用します。Tabbyもオートコンプリート専用でJetBrainsをサポートしています。',
          },
          {
            q: 'これらのツールのうち、GDPR・HIPAA・エアギャップ環境で完全にオフライン動作するものはどれですか？',
            a: 'Bodega One Codeはまさにこのために作られています：ローカルモデルによる完全オフライン動作に加え、送信ネットワーク接続をすべてブロックしテレメトリやモデル呼び出しがマシンの外に出ないエアギャップモードを備えます。Cline、Continue、Tabby、Aiderもクラウド API ではなくローカルバックエンド（Ollama、LM Studio、セルフホストのTabbyサーバー）を指定すれば完全にオフラインで動作し、その設定では一切「電話をかけて」きません。Cursorのローカルモデルサポート（Custom API設定経由）は依然としてクラウド接続アプリの内部で動作するため、ネットワーク隔離環境には適しません。',
          },
          {
            q: 'Bodega One Codeとは何ですか？Clineとの違いは？',
            a: 'Bodega One Codeは、コーディングエージェントを内蔵したスタンドアロン・ローカルファーストAI IDEで、現在のオープンベータ期間中は個人利用が無料です——VS CodeやJetBrainsに追加するプラグインであるClineとは異なり、Bodega One Codeは最初からエージェントを中心に設計されたフルIDEです。10以上のバックエンドでBYOL（bring-your-own-LLM）に対応しており、エアギャップ対応の完全オフラインで動作します。商用利用向けの有料買い切りProティアは予定されていますが、まだ購入はできません。クラウド接続エディタがまったく使用できない規制環境やネットワーク隔離環境に適しています。',
          },
        ],
      },
      finalRecommendations: {
        title: '2026年のおすすめまとめ',
        content: '6製品を1ページで——答えだけ知りたい方向けの短縮版です。',
        items: [
          '**総合最良** → [Cline](https://github.com/cline/cline) — 無料、エージェント的、VS Code + JetBrainsファミリー全体。まずこれをインストール。',
          '**完全オフライン/コンプライアンス向け最良** → [Bodega One Code](https://bodegaone.ai) — スタンドアロンIDE、クラウド要素なし。',
          '**オートコンプリート最良** → [Tabby](https://tabby.tabbyml.com) — セルフホスト、200ms未満。',
          '**ターミナルワークフロー最良** → [Aider](https://aider.chat) — git対応、マルチファイル。',
          '**商用IDE最良** → [Cursor](https://cursor.com) — 無料のHobbyティアから始めて、Ollama/LM Studio経由でローカルモデルを追加。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルコーディングAI DeepSeek vs Qwen 2026：勝者は？](/ja/power-local-llm/deepseek-vs-qwen-coding-local-2026) -- DeepSeek vs Qwenコーディング比較 — IDEプラグイン設定前にモデルを選ぶ',
          '[GitHub CopilotをローカルLLMに置き換える](/ja/power-local-llm/replace-github-copilot-with-local-llm) -- CopilotからセルフホストモデルへのフルWalkthrough',
          '[最高のローカルコーディングモデル2026](/ja/power-local-llm/best-local-coding-models-2026) -- VS CodeとJetBrainsで最も機能するモデルの解説',
          '[Continue.dev vs Cline vs Aider：ローカルLLMコーディングツール2026](/ja/power-local-llm/continue-dev-vs-cline-vs-aider-local) -- ローカルLLMバックエンドで動作するIDEツールの比較',
          '[ビジネス文書向けRAGツール比較 2026年版](/ja/power-local-llm/best-rag-tools-for-business-documents-2026) -- ドキュメント検索でローカルコーディングAIを拡張',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'ContinueはローカルでGitHub Copilotの完全な代替になれますか？',
          acceptedAnswer: { '@type': 'Answer', text: '2026年6月時点でContinueはCursorに買収され、v2.0.0が最終リリースです。拡張機能はOllamaと引き続き動作しますが、Clineが現在推奨されるメンテナンス済みのオープンソース代替です——BYOKで無料、VS CodeとJetBrainsで動作し、エージェント的ファイル編集が加わっています。' },
        },
        {
          '@type': 'Question',
          name: 'ClineはPyCharm、Rider、GoLand、WebStorm、CLion、RustRoverで動作しますか？',
          acceptedAnswer: { '@type': 'Answer', text: 'はい。ClineのJetBrainsプラグインはJetBrainsファミリー全体をサポートします：IntelliJ IDEA、PyCharm、WebStorm、PhpStorm、GoLand、Rider、CLion、RustRover、RubyMine、DataGrip。ContinueのJetBrainsプラグインはより狭い範囲——IntelliJ IDEA、PyCharm、GoLand、WebStorm、Rider——のみをカバーし、もう更新されません。' },
        },
        {
          '@type': 'Question',
          name: 'これらのツールのうち、GDPR・HIPAA・エアギャップ環境で完全にオフライン動作するものはどれですか？',
          acceptedAnswer: { '@type': 'Answer', text: 'Bodega One Codeは専用のエアギャップモードを備え、まさにこのために作られています。Cline、Continue、Tabby、Aiderもローカルバックエンド（Ollama、LM Studio、セルフホストサーバー）を指定すれば完全にオフラインで動作します。Cursorはローカルモデル使用時でもクラウド接続アプリのままであるため、ネットワーク隔離環境には適しません。' },
        },
        {
          '@type': 'Question',
          name: 'Bodega One Codeとは何ですか？Clineとの違いは？',
          acceptedAnswer: { '@type': 'Answer', text: 'Bodega One Codeは、コーディングエージェント内蔵、10以上のバックエンドでのBYOL（bring-your-own-LLM）対応、完全なオフライン・エアギャップ動作を備えたスタンドアロン・ローカルファーストAI IDEで、現在のオープンベータ期間中は個人利用が無料です。VS CodeやJetBrainsに追加するプラグインであるClineとは異なり、最初からエージェントを中心に設計された完全なIDEです。' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'ローカルLLM向けIDEプラグインおすすめ2026年版',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: '総合最良 — 活発にメンテナンス、エージェント的、VS Code + JetBrainsファミリー全体、無料BYOK' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: '個人利用は無料のローカルファーストIDE最良 — コーディングエージェント内蔵、BYOL、完全オフライン・エアギャップ対応' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: 'まだ動作するが2026年6月のCursor買収以降メンテナンス終了' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: '自己ホスト型オートコンプリート最良 — 1〜3B FIMモデル、全エディター対応' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: 'ターミナルネイティブ最良 — git対応、マルチファイル、オープンソース' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: '商用最良 — 無料Hobbyティア+ローカルモデルサポート、月額20ドルPro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'ローカルLLM向けIDEプラグインおすすめ2026年版（VS Code・JetBrains・LM Studio）', description: 'VS Code、JetBrainsファミリー全体、LM StudioでのローカルLLM利用を対象に、Cline、Bodega One Code、Continue、Tabby、Aider、Cursorをランキング形式で比較。比較表、セットアップガイド、モデル推奨、ハードウェア指南付き。', datePublished: '2026-05-26', dateModified: '2026-08-25', url: 'https://www.promptquorum.com/ja/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'ja' },
  },

  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-25',
    last_full_refresh: '2026-08-25',
    theme: 'Coding Assistants',
    title: '2026年本地LLM最佳IDE插件推荐（VS Code、JetBrains与LM Studio）',
    seoTitle: '2026年本地LLM最佳IDE（Ollama、LM Studio与JetBrains）',
    metaDescription: 'Cline是2026年本地LLM最佳IDE：免费，可在VS Code和每一款JetBrains IDE（PyCharm、Rider、CLion、GoLand）中配合Ollama和LM Studio使用。',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-zh.webp',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    leadAnswerBlock: '**Cline（VS Code + JetBrains）是2026年本地LLM最佳免费IDE：原生连接Ollama和LM Studio（以及任何OpenAI兼容API），支持智能体文件编辑、终端命令和MCP工具，完全在本地硬件上运行。注意：此前排名第1的Continue.dev已于2026年6月被Cursor收购——v2.0.0-vscode是其最终版本，仓库现为只读状态。**',
    quickAnswerTop: {
      question: '编程时使用本地AI模型最好的IDE插件是什么？',
      answer: 'Cline（免费开源，BYOK）是2026年Ollama、LM Studio及本地LLM的最佳IDE插件——继Continue.dev于2026年6月被Cursor收购、仓库定格在v2.0.0-vscode之后。Cline支持VS Code和整个JetBrains系列（PyCharm、Rider、CLion、GoLand、WebStorm、RustRover），具备智能体文件编辑和MCP工具能力。若需完全离线或满足合规要求，Bodega One Code是最强选择。仅需代码补全的话，Tabby是最轻量选择。Aider在终端环境中表现最佳。',
      bullets: [
        'Cline：综合最佳，持续维护中 — 读写文件、执行终端命令、使用MCP工具，VS Code + 整个JetBrains系列（PyCharm、Rider、CLion、GoLand、WebStorm、RustRover），免费BYOK或ClinePass起价$9.99/月',
        'Bodega One Code：个人使用免费的本地优先独立IDE（非插件）——内置编程智能体、支持BYOL、完整离线/物理隔离支持，商业版一次性$39（尚未开放购买）',
        'Continue：仍可安装运行但已停止维护（2026年6月被Cursor收购，v2.0.0-vscode为最终版本，云端数据已于2026年7月15日后删除）——可与Ollama继续配合运行，但不再有后续开发',
        'Tabby：最佳自托管代码补全 — 自有推理服务器，1–3B模型，GitHub星标约3.3万',
        'Aider：最佳终端原生工具 — git感知，多文件编辑，GitHub星标4.4万以上',
        'Cursor：最佳商业选择 — 免费Hobby层，Pro $20/月，Pro+ $60/月，Ultra $200/月，通过Ollama/LM Studio Custom API使用本地模型',
      ],
      updatedDate: '2026-08-25',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev于2026年6月被Cursor收购——v2.0.0-vscode为最终版本，仓库现为只读状态，云端数据已于2026年7月15日后删除；仍可在本地与Ollama配合运行，但已不再维护',
          'Cline目前是维护最完善的免费BYOK替代方案：VS Code + 整个JetBrains系列（PyCharm、Rider、CLion、GoLand、WebStorm、RustRover），智能体文件编辑，MCP工具，安装量超500万',
          'Bodega One Code是一款个人使用免费的本地优先独立IDE，内置编程智能体并支持BYOL（自带LLM）——完整离线/物理隔离运行，无强制订阅',
          'Tabby运行自有推理服务器（1–3B模型）——为团队提供延迟最低的代码补全，基于Apache 2.0自托管',
          'Aider是终端优先选项——git提交感知，多文件重写，GitHub星标4.4万以上',
          'Cursor（免费Hobby / Pro $20 / Pro+ $60 / Ultra $200每月）已收购Supermaven和Continue.dev；SpaceX已于2026年8月完成以600亿美元收购Cursor',
          '所有工具均可针对本地后端（Ollama、LM Studio或自托管服务器）完全离线运行；只有Cursor即便使用本地模型也需要连接云端的应用程序',
        ],
      },
      buyingTable: {
        title: '六款插件一览对比',
        content: '这里的每款插件都能连接本地模型——区别在于你做的是哪类编程工作，以及你希望围绕它拥有多大的商业生态。',
        columns: ['插件', '最适合', '本地后端', '价格', '获取方式'],
        rows: [
          { '插件': 'Cline', '最适合': '大多数用户/智能体任务', '本地后端': 'Ollama、LM Studio、30+ API', '价格': '免费（BYOK）/起价$9.99/月', '获取方式': '[免费安装 →](https://github.com/cline/cline)' },
          { '插件': 'Bodega One Code', '最适合': '离线/物理隔离/合规', '本地后端': 'Ollama、LM Studio、llama.cpp等10+', '价格': '免费（个人）/一次性$39', '获取方式': '[免费试用 →](https://bodegaone.ai)' },
          { '插件': 'Continue（旧版）', '最适合': '仅限现有Continue用户', '本地后端': 'Ollama、LM Studio、llama.cpp', '价格': '免费（已停止维护）', '获取方式': '[Continue.dev →](https://continue.dev)' },
          { '插件': 'Tabby', '最适合': '最快的自托管代码补全', '本地后端': '自有推理服务器（1–3B）', '价格': '免费、开源', '获取方式': '[免费自托管 →](https://tabby.tabbyml.com)' },
          { '插件': 'Aider', '最适合': '终端+git工作流', '本地后端': 'Ollama、LM Studio、OpenAI兼容', '价格': '免费、开源', '获取方式': '[免费安装 →](https://aider.chat)' },
          { '插件': 'Cursor', '最适合': '精致IDE，云端+本地混合', '本地后端': 'Ollama、LM Studio（Custom API）', '价格': '免费Hobby/$20–$200/月', '获取方式': '[免费开始 →](https://cursor.com)' },
        ],
        note: '如果你还没有运行任何本地模型，可以先跳过这六款——先选定硬件和后端（Ollama或LM Studio），再回到这张表。上面每个链接都是普通产品链接，目前没有联盟合作关系——详见本页顶部的披露说明。',
      },
      clineCta: {
        title: '从Cline开始：接下来2分钟内完成安装',
        content: 'Cline是本页的默认推荐。以下是原因，以及现在就安装它的方法。',
        items: [
          '**免费开源** — 自带密钥或指向本地端点，无强制订阅（起价$9.99/月的ClinePass是可选项，用于无需自有API密钥的托管路由）。',
          '**支持VS Code和整个JetBrains系列** — IntelliJ IDEA、PyCharm、WebStorm、PhpStorm、GoLand、Rider、CLion、RustRover、RubyMine和DataGrip。',
          '**原生连接Ollama和LM Studio** — 另支持30多家OpenAI兼容提供商，无需依赖云端。',
          '**真正的智能体能力** — 读写文件、执行终端命令、使用MCP工具，而不仅仅是内联代码补全。',
          '**限制**：可靠的多步骤智能体任务需要32B级本地模型（24 GB以上显存）；14B模型能处理简单编辑，但在复杂的多文件重构上表现吃力。',
        ],
        affiliateLinks: [
          { label: '安装适用于VS Code的Cline（免费）', url: 'https://github.com/cline/cline', productName: 'Cline for VS Code', productCategory: 'dev-tool' },
          { label: '安装适用于JetBrains的Cline（免费）', url: 'https://cline.bot/jetbrains', productName: 'Cline for JetBrains', productCategory: 'dev-tool' },
        ],
      },
      decisionGuide: {
        title: '应该选择哪一款？',
        content: '把你的优先需求对应到某款插件——这六款插件的详细内容都在本页更下方。',
        items: [
          '**最简单，今天就要用起来** → [Cline](https://github.com/cline/cline) — 免费、智能体能力、VS Code + JetBrains。',
          '**完全离线、物理隔离或有合规要求** → [Bodega One Code](https://bodegaone.ai) — 完全没有云端组件的独立IDE。',
          '**团队最快的自托管代码补全** → [Tabby](https://tabby.tabbyml.com) — 自有推理服务器，200毫秒以内的补全。',
          '**终端优先、git感知的工作流** → [Aider](https://aider.chat) — 多文件编辑，自动提交。',
          '**想要精致的商业IDE，偶尔使用本地选项** → [Cursor](https://cursor.com) — 设计上以云端为先，在其Custom API设置中可通过Ollama/LM Studio使用本地模型。',
          '**已经在使用Continue** → 仍可安装运行（Ollama、自带LLM），但自2026年6月被Cursor收购后已停止维护——不必着急，方便时再规划迁移到Cline。',
        ],
      },
      rankedList: {
        title: '本地LLM IDE插件排名',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline是2026年本地LLM最佳IDE插件，因为它原生支持Ollama，在VS Code和JetBrains中都能运行，并在无需云依赖的情况下提供智能体文件编辑和MCP工具——此前排名第1的Continue已于2026年6月被Cursor收购，不再积极开发。',
          },
          {
            type: 'plain-terms',
            text: '本地LLM的IDE插件将你的代码编辑器（VS Code、IntelliJ）连接到在本机运行的模型（通过Ollama、LM Studio或llama.cpp）。模型看到你的代码并响应——代码不离开你的电脑，无API费用，无使用限制。',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Cline — 综合最佳（免费、开源、持续维护）',
            content: 'Cline（原名Claude Dev）是2026年本地LLM中维护最完善的智能体编程插件——在2026年6月Continue被Cursor收购后登顶第一。它可以读写文件、运行终端命令、浏览网页（通过浏览器工具）、使用MCP服务器。配合Ollama + Qwen3-Coder 32B，Cline能从一个提示词实现完整功能。限制：可靠的多步骤智能体任务需要32B模型（14B模型可处理简单任务）。定价：免费（BYOK——自带来自Anthropic、OpenAI或30多家提供商的API密钥）；ClinePass每月$9.99（首月优惠价$4.99），提供无需API密钥的托管路由；Teams每用户每月$20（前10个席位免费）。支持VS Code和整个JetBrains系列：IntelliJ IDEA、PyCharm、WebStorm、PhpStorm、GoLand、Rider、CLion、RustRover、RubyMine和DataGrip。兼容后端：Ollama、LM Studio、LiteLLM代理及30多家云服务商。在VS Code、JetBrains及其他编辑器上安装量合计超500万。',
            affiliateLinks: [
              { label: '在VS Code Marketplace下载Cline（免费）', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — 最佳免费本地优先IDE，内置编程智能体',
            content: 'Bodega One Code是一款本地优先AI IDE，从一开始就围绕编程智能体构建，而不是后期加装到现有编辑器上的助手。它在10多种后端上支持BYOL（自带LLM），包括面向本地模型的Ollama、LM Studio、llama.cpp、LocalAI、KoboldCpp、GPT4All和MLX，如需要也可直接连接云服务商：指向任意后端后，智能体的规划、编辑和执行整个流程都针对该模型运行，不绑定单一供应商。整个应用在本机运行，具备完整的离线和物理隔离（air-gap）模式，会阻止一切对外网络连接，因此没有遥测数据或模型调用会离开这台机器——所以可在Cursor、GitHub Copilot等云端连接工具完全无法使用的网络隔离环境中运行。定价：当前开放测试期间个人使用免费，暂时包含商业使用权；正式发布时计划推出一次性付费的Pro层级（价格尚未公布），届时将提供永久商业使用权、无限工作区和第二台设备授权，但目前尚未开放购买。没有订阅，本地模型使用也没有用量计量。这使它非常适合受监管行业、政府与国防承包商，以及安全策略禁止将代码发送到第三方服务器的团队——而这正是本地推理的目标用户群体。与作为VS Code插件的Cline相比，Bodega One Code是一款从一开始就围绕智能体设计的独立IDE；已经在使用VS Code的团队会觉得Cline更易于加装，而从零开始或需要保证离线运行的团队，则可以从Bodega One Code获得专为此目的打造的环境。',
            affiliateLinks: [
              { label: '前往Bodega One Code（免费，官方网站）', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — 仍可使用但已停止维护 [已于2026年6月被Cursor收购 — 最终版本v2.0.0-vscode]',
            content: '在2026年6月被Cursor收购之前，Continue是本地LLM领先的开源AI编程助手。连接Ollama、LM Studio、llama.cpp和所有OpenAI兼容API。功能：内联对话（Cmd+L）、代码补全（Tab）、MCP工具、代码库索引、自定义斜杠命令。VS Code扩展已有200万以上安装量。JetBrains插件支持IntelliJ IDEA、PyCharm、GoLand、WebStorm和Rider——不包括CLion和RustRover。推荐本地模型：Qwen3-Coder 14B（编程）、Llama 3.3 8B（对话）。设置：安装扩展，将提供商设为Ollama，选择模型——2分钟内完成。注意（2026年6月）：Continue已被Cursor收购。2026年6月19日发布的v2.0.0-vscode为最终版本，GitHub仓库现为只读状态，Continue托管的云端数据已于2026年7月15日后删除。插件仍可与Ollama及自带模型完全离线正常运行，但原团队已停止开发。社区分支仍然活跃。',
            affiliateLinks: [
              { label: '在VS Code Marketplace下载Continue（免费）', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — 最佳自托管代码补全服务器',
            content: 'Tabby是用Rust编写、基于Apache 2.0协议的自托管编程助手，运行自有推理服务器（独立于Ollama）。使用专门为填充中间（FIM）代码补全训练的小型模型（1–3B参数）——比通用7B模型快得多。当前稳定版本为v0.32.0，GitHub星标约3.3万。支持VS Code、JetBrains、Vim/Neovim和Emacs的IDE扩展。适合对象：5–50名开发者的团队，尤其是希望在不将代码发往云端的情况下获得快速（<200ms）代码补全的受监管或知识产权敏感团队。需要专用服务器或高性能桌面机器——可免费自托管、用户数不限，无按席位收费。',
            affiliateLinks: [
              { label: 'Tabby在GitHub上查看（开源自托管）', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — 最佳终端原生AI编程工具',
            content: 'Aider是集成git的终端AI配对程序员。理解整个代码库结构，进行多文件编辑，自动提交更改。支持Ollama（--model ollama/qwen2.5-coder:14b）、LM Studio或任何OpenAI兼容API。推荐本地模型：Qwen3-Coder 32B（架构模式）+ Qwen3-Coder 7B（编辑模式）。Aider采用双模型方案：大模型负责规划变更，小模型负责实现。GitHub星标4.4万以上。费用：免费开源。注意：截至2026年，Aider仍处于0.x版本阶段，CLI参数和.aider.conf.yml格式在次要版本之间偶有变动——升级后请查看更新日志。',
            affiliateLinks: [
              { label: 'Aider在GitHub上查看（开源）', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — 支持本地模型的最佳商业选择',
            content: 'Cursor是内置AI功能的VS Code分支。Cursor在"Custom API"设置中通过Ollama和LM Studio支持本地模型。但Cursor最强大的功能（带网络搜索的Agent模式、完整代码库感知）仍需要云端模型。本地模型集成对聊天和简单补全可用，但在注重隐私的工作流中不如Cline，因为即便推理在本地运行，Cursor本身仍是一款连接云端的应用。定价：Hobby（免费，包含本地模型使用）；Pro $20/月（按年付费为$16/月，含每月$20的前沿模型AI积分池；Auto模式不消耗积分，无限制）；Pro+ $60/月（3倍使用积分）；Ultra $200/月（20倍用量）；Teams每用户$40/月，支持集中计费和SSO。注：Cursor收购了Supermaven（2024年）和Continue.dev（2026年6月）。SpaceX在自身IPO几天后，于2026年8月完成了对Cursor的600亿美元收购——据报道，Cursor的年化收入从2025年初的约1亿美元增长到2026年6月时的超过40亿美元。这一整合让Cursor成为AI编程工具领域的主导商业力量——但也让开源替代方案的长期走向存在疑问。',
            pros: [
              '精致、熟悉的VS Code分支——对现有VS Code用户几乎零学习成本',
              '可通过Custom API设置使用Ollama或LM Studio的本地模型',
              '免费Hobby层包含本地模型使用，而不仅仅是试用',
            ],
            cons: [
              '最强大的功能（Agent模式、完整代码库感知）需要云端/前沿模型，而非本地模型',
              '现归SpaceX/xAI所有——供应商属性与独立开源工具有本质区别',
            ],
            affiliateLinks: [
              { label: '从Cursor Hobby免费开始', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-zh.webp',
        imageCaption: '本地LLM最佳IDE插件排行榜 -- 2026年排名',
      },
      setupGuide: {
        title: '快速设置：在VS Code中使用Cline + Ollama',
        content: '准备好安装Cline了吗？ → [免费安装Cline](https://github.com/cline/cline)。按以下步骤将其连接到Ollama——用当前排名第1的插件开始本地LLM编程的最快方式：',
        numberedItems: [
          '安装Ollama：`curl -fsSL https://ollama.com/install.sh | sh`',
          '拉取一个编程模型：`ollama pull qwen2.5-coder:14b`（智能体任务推荐`qwen3-coder:32b`）',
          '在VS Code的扩展市场中安装Cline',
          '打开Cline侧边栏，点击设置齿轮图标',
          '将API提供商设为"Ollama"，基础URL设为`http://localhost:11434`，模型ID设为已拉取的模型',
          '重启VS Code——Cline图标会出现在侧边栏',
          '在Cline聊天面板中输入任务——它可以直接读写文件并运行终端命令',
        ],
      },
      aiderSetupGuide: {
        title: '快速设置：Aider + Ollama（终端）',
        content: '准备好安装Aider了吗？ → [免费安装Aider](https://aider.chat)。适合终端原生、git感知的AI编程——Aider官方文档：aider.chat/docs/llms/ollama.html',
        numberedItems: [
          '安装Ollama并拉取模型：`ollama pull qwen2.5-coder:32b`',
          '安装Aider：`python -m pip install aider-install && aider-install`',
          '设置Ollama API基础地址：`export OLLAMA_API_BASE=http://127.0.0.1:11434`',
          '运行Aider并指向本地模型：`aider --model ollama/qwen2.5-coder:32b`',
          '若需双模型架构（architect/editor）设置，添加`--architect-model ollama/qwen2.5-coder:32b --editor-model ollama/qwen2.5-coder:7b`',
          'Aider会自动将每次变更提交到git——用`git log`或`git diff HEAD~1`查看',
        ],
      },
      modelRecommendations: {
        title: '按插件与任务划分的最佳本地模型',
        columns: ['插件', '最佳编程模型（本地）', '最佳对话模型（本地）', '最低显存'],
        rows: [
          { '插件': 'Cline', '最佳编程模型（本地）': 'Qwen3-Coder 32B Q4', '最佳对话模型（本地）': 'Qwen3 32B Q4', '最低显存': '24 GB' },
          { '插件': 'Bodega One Code', '最佳编程模型（本地）': '任意本地模型（BYOL）', '最佳对话模型（本地）': '任意本地模型（BYOL）', '最低显存': '取决于所选模型' },
          { '插件': 'Continue（旧版）', '最佳编程模型（本地）': 'Qwen3-Coder 14B Q8', '最佳对话模型（本地）': 'Llama 3.3 8B Q4', '最低显存': '16 GB' },
          { '插件': 'Tabby', '最佳编程模型（本地）': 'StarCoder2-7B（内置）', '最佳对话模型（本地）': 'N/A（仅代码）', '最低显存': '8 GB' },
          { '插件': 'Aider', '最佳编程模型（本地）': 'Qwen3-Coder 14B（编辑模式）', '最佳对话模型（本地）': 'Qwen3-Coder 32B（架构模式）', '最低显存': '16–24 GB' },
          { '插件': 'Cursor', '最佳编程模型（本地）': 'DeepSeek-Coder-V2（通过Ollama）', '最佳对话模型（本地）': 'Qwen3 14B', '最低显存': '16 GB' },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-zh.webp',
        imageCaption: '各IDE插件的最佳本地模型 -- 编程模型与最低显存要求',
        note: '需要为这些模型准备硬件吗？8 GB显存足以支撑Tabby的小型补全模型；16 GB可运行大多数14B编程模型（Continue、Aider编辑模式、Cursor的本地选项）；24 GB以上是配合Cline或Aider架构模式可靠完成32B智能体任务的现实最低门槛。完整推荐请见[本地LLM最佳GPU](/zh/local-llms/best-gpus-for-local-llms)，若预算低于16 GB显存则参考[本地LLM高性价比GPU推荐](/zh/local-llms/best-budget-gpus-local-llm)。',
      },
      lmStudioPlugins: {
        title: '最佳LM Studio插件（与IDE插件不是同一回事）',
        content: '这与"哪款IDE扩展能连接LM Studio"（上文已介绍）是不同的问题——而且值得直接解答，因为LM Studio正是本指南中每款插件所连接的两大后端之一。LM Studio自2024年底起就拥有自己的插件系统：插件在LM Studio内部运行——目前以沙盒化worker中运行在Node.js上的TypeScript/JavaScript代码形式，Python支持仍在开发中——可以拦截推理请求、添加提示处理器、接入工具调用后端，或增加新的UI面板。可从lmstudio.ai/plugins的精选市场安装；每个插件都会预先声明所需权限（网络访问、文件系统读取），你也可以之后在设置中撤销权限而无需卸载插件。截至2026年常见类别包括：网页搜索插件、RAG/文档检索预处理器、OCR预处理器、智能体工具集插件、Shell/文件访问工具，以及记忆插件。',
        items: [
          '**网页搜索插件**：让LM Studio中的本地模型将实时网页搜索结果拉入上下文——由于本地模型没有内置的互联网访问能力，这很有用。',
          '**RAG/文档插件**：为本地文件夹中的PDF或文本文件建立索引，并按查询自动检索相关片段。',
          '**智能体工具集插件**：直接在LM Studio自己的聊天界面中赋予模型Shell访问权限、文件读写能力或多步骤任务执行能力——与Cline为VS Code提供的能力属于同一类别，区别在于运行环境是LM Studio而非代码编辑器。',
          '**记忆插件**：让上下文在多次聊天会话间保留，而不是每次都从零开始。',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Continue能完全替代GitHub Copilot用于本地使用吗？',
            a: '截至2026年6月，Continue已被Cursor收购，v2.0.0为最终版本（仓库现为只读状态）。扩展仍可与Ollama和自带模型正常运行，但不再获得原团队的后续开发。推荐的维护中开源替代方案是Cline——提供同样的BYOK模式，支持VS Code和JetBrains，并新增了智能体文件编辑能力。GitHub Copilot Pro每月$10（含每月$15的AI积分）；Cline在使用自己的API密钥时免费。',
          },
          {
            q: '哪个插件最适合多文件重构？',
            a: 'Cline或Aider。两者都能读取多个文件、理解依赖关系并在代码库间进行协调更改。Cline在VS Code内提供更好的可视化反馈；Aider在终端中运行，更适合CI/CD集成和git感知提交。配合30B以上模型（24GB显存），Cline + Qwen3-Coder 32B可以可靠地处理复杂重构。',
          },
          {
            q: 'Tabby在没有GPU的情况下能运行吗？',
            a: '可以——Tabby可以在CPU上运行小型模型（1–3B）。但CPU上的补全延迟为500ms–2秒，相比流畅编程所需的<200ms目标会感觉明显迟滞。对于纯CPU机器，使用Cline + Ollama配合快速的1B或3B模型能获得更好的延迟控制。',
          },
          {
            q: '能否用LM Studio代替Ollama使用这些插件？',
            a: '可以。LM Studio默认在1234端口暴露OpenAI兼容API。将插件提供商设为"openai"，基础URL设为`http://localhost:1234/v1`，使用LM Studio库中的任意模型名称。Cline、Continue和Aider都支持这种配置。请注意，这与上文"最佳LM Studio插件"一节所述的LM Studio自有插件系统不同——那部分内容是关于扩展LM Studio本身，而不是让外部IDE连接到它。',
          },
          {
            q: '哪些JetBrains IDE支持本地LLM插件？',
            a: 'Cline和Continue都提供JetBrains插件。Cline覆盖整个系列：IntelliJ IDEA、PyCharm、PhpStorm、WebStorm、GoLand、Rider、CLion、RustRover、RubyMine和DataGrip。Continue仅覆盖IntelliJ IDEA、PyCharm、PhpStorm、WebStorm、GoLand和Rider。从JetBrains Marketplace（而非VS Code Marketplace）安装，并使用与VS Code版本相同的Ollama/LM Studio提供商设置。Tabby也支持JetBrains，但仅限代码补全功能。',
          },
          {
            q: 'Cline能在PyCharm、Rider、GoLand、WebStorm、CLion和RustRover中使用吗？',
            a: '可以——通过JetBrains Marketplace安装的Cline JetBrains插件支持整个JetBrains系列：IntelliJ IDEA、PyCharm、WebStorm、PhpStorm、GoLand、Rider、CLion、RustRover、RubyMine和DataGrip。配置与VS Code版本相同的Ollama或LM Studio提供商设置即可。Continue的JetBrains插件（自2026年6月被Cursor收购后已停止维护）覆盖范围更窄——仅限IntelliJ IDEA、PyCharm、GoLand、WebStorm和Rider——不包括CLion或RustRover。',
          },
          {
            q: '这些工具中哪些能在GDPR、HIPAA或物理隔离环境中完全离线运行？',
            a: 'Bodega One Code正是为此而设计：使用本地模型完全离线运行，还配备会阻止一切对外网络连接的物理隔离模式，确保没有遥测数据或模型调用离开这台机器。Cline、Continue、Tabby和Aider只要指向本地后端（Ollama、LM Studio或自托管的Tabby服务器）而非云端API，同样能完全离线运行——在此配置下它们都不会"回传"数据。Cursor的本地模型支持（通过其Custom API设置）仍在一款连接云端的应用程序内运行，因此不适合网络隔离环境。',
          },
          {
            q: 'Bodega One Code是什么？它与Cline有何不同？',
            a: 'Bodega One Code是一款独立的本地优先AI IDE，内置编程智能体，在当前开放测试期间个人使用免费——与作为VS Code或JetBrains插件的Cline不同，Bodega One Code是一款从一开始就围绕智能体设计的完整IDE。它在10多种后端上支持BYOL（自带LLM），完全离线运行并支持物理隔离（air-gap）。面向商业用途的一次性付费Pro层级已在计划中，但尚未开放购买。它非常适合云端连接编辑器完全无法使用的受监管或网络隔离环境。',
          },
        ],
      },
      finalRecommendations: {
        title: '2026年推荐总结',
        content: '六款工具，一页看完——如果你只想要答案，这是精简版：',
        items: [
          '**综合最佳** → [Cline](https://github.com/cline/cline) — 免费、智能体能力、VS Code + 整个JetBrains系列。优先安装它。',
          '**完全离线/合规最佳** → [Bodega One Code](https://bodegaone.ai) — 独立IDE，无云端组件。',
          '**代码补全最佳** → [Tabby](https://tabby.tabbyml.com) — 自托管，200毫秒以内。',
          '**终端工作流最佳** → [Aider](https://aider.chat) — git感知，多文件。',
          '**商业IDE最佳** → [Cursor](https://cursor.com) — 从免费Hobby层开始，再通过Ollama/LM Studio添加本地模型。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地编程AI DeepSeek vs Qwen 2026：谁更胜一筹？](/zh/power-local-llm/deepseek-vs-qwen-coding-local-2026) -- DeepSeek与Qwen编程对比 — 配置IDE插件前先选好模型',
          '[用本地LLM替换GitHub Copilot](/zh/power-local-llm/replace-github-copilot-with-local-llm) -- 从Copilot切换到自托管模型的完整教程',
          '[2026年最佳本地编程模型](/zh/power-local-llm/best-local-coding-models-2026) -- VS Code和JetBrains中表现最佳的模型推荐',
          '[Continue.dev vs Cline vs Aider：本地LLM编程工具2026](/zh/power-local-llm/continue-dev-vs-cline-vs-aider-local) -- 支持本地LLM后端的IDE工具横向对比',
          '[2026年商业文档最佳RAG工具对比](/zh/power-local-llm/best-rag-tools-for-business-documents-2026) -- 用文档检索扩展本地编程AI能力',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Continue能完全替代GitHub Copilot用于本地使用吗？',
          acceptedAnswer: { '@type': 'Answer', text: '截至2026年6月，Continue已被Cursor收购，v2.0.0为最终版本。扩展仍可与Ollama正常运行，但Cline目前是推荐的维护中开源替代方案——BYOK免费使用，支持VS Code和JetBrains，并新增了智能体文件编辑能力。' },
        },
        {
          '@type': 'Question',
          name: '哪个插件最适合多文件重构？',
          acceptedAnswer: { '@type': 'Answer', text: 'Cline（VS Code + JetBrains）或Aider（终端）。两者均可读取多文件并协调更改。Cline更适合可视化反馈，Aider更适合git感知提交。建议配合30B以上模型使用，以实现可靠的复杂重构。' },
        },
        {
          '@type': 'Question',
          name: 'Cline能在PyCharm、Rider、GoLand、WebStorm、CLion和RustRover中使用吗？',
          acceptedAnswer: { '@type': 'Answer', text: '可以。Cline的JetBrains插件支持整个JetBrains系列：IntelliJ IDEA、PyCharm、WebStorm、PhpStorm、GoLand、Rider、CLion、RustRover、RubyMine和DataGrip。Continue的JetBrains插件覆盖范围更窄——仅限IntelliJ IDEA、PyCharm、GoLand、WebStorm和Rider——且不再获得更新。' },
        },
        {
          '@type': 'Question',
          name: '这些工具中哪些能在GDPR、HIPAA或物理隔离环境中完全离线运行？',
          acceptedAnswer: { '@type': 'Answer', text: 'Bodega One Code配备专用的物理隔离模式，正是为此而设计。Cline、Continue、Tabby和Aider在指向本地后端（Ollama、LM Studio或自托管服务器）时同样能完全离线运行。即便使用本地模型，Cursor仍是一款连接云端的应用程序，因此不适合网络隔离环境。' },
        },
        {
          '@type': 'Question',
          name: 'Bodega One Code是什么？它与Cline有何不同？',
          acceptedAnswer: { '@type': 'Answer', text: 'Bodega One Code是一款独立的本地优先AI IDE，内置编程智能体，在当前开放测试期间个人使用免费，在10多种后端上支持BYOL（自带LLM），并完全支持离线/物理隔离运行。与作为VS Code或JetBrains插件的Cline不同，Bodega One Code是一款从一开始就围绕智能体设计的完整IDE。' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '2026年本地LLM最佳IDE插件排名',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: '综合最佳 — 持续维护，智能体能力，VS Code + 整个JetBrains系列，免费BYOK' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: '个人使用免费的最佳本地优先IDE — 内置编程智能体，支持BYOL，完整离线/物理隔离支持' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: '仍可使用但自2026年6月被Cursor收购后已停止维护' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: '最佳自托管补全 — FIM模型1–3B，全编辑器支持' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: '终端原生最佳 — git感知，多文件，开源' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: '商业最佳 — 免费Hobby层+本地模型支持，20美元/月Pro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: '2026年本地LLM最佳IDE插件推荐（VS Code、JetBrains与LM Studio）', description: '针对VS Code、整个JetBrains系列与LM Studio中的本地LLM使用场景，对Cline、Bodega One Code、Continue、Tabby、Aider和Cursor进行排名对比，包含比较表、安装指南、模型推荐与硬件建议。', datePublished: '2026-05-26', dateModified: '2026-08-25', url: 'https://www.promptquorum.com/zh/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'zh' },
  },

  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-25',
    last_full_refresh: '2026-08-25',
    theme: 'Coding Assistants',
    title: 'Mejores plugins IDE para LLMs locales en 2026 (VS Code, JetBrains y LM Studio)',
    seoTitle: 'Mejor IDE para LLMs locales 2026 (Ollama, LM Studio y JetBrains)',
    metaDescription: 'Cline es el mejor IDE para LLMs locales en 2026: gratuito, funciona con Ollama y LM Studio en VS Code y en cada IDE de JetBrains (PyCharm, Rider, CLion, GoLand).',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-es.webp',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    leadAnswerBlock: '**Cline (VS Code + JetBrains) es el mejor IDE gratuito para LLMs locales en 2026: conexión nativa a Ollama y LM Studio (además de cualquier API compatible con OpenAI), edición agéntica de archivos, comandos de terminal y herramientas MCP, ejecutándose completamente en tu hardware. Nota: Continue.dev (antes clasificado en el puesto #1) fue adquirido por Cursor en junio de 2026 — v2.0.0-vscode es su última publicación y el repositorio ahora es de solo lectura.**',
    quickAnswerTop: {
      question: '¿Cuál es el mejor plugin IDE para ejecutar modelos de IA locales mientras programas?',
      answer: 'Cline (gratuito, open-source con BYOK) es el mejor plugin IDE para Ollama, LM Studio y LLMs locales en 2026 — desde que Continue.dev fue adquirido por Cursor en junio de 2026 y su repositorio quedó congelado en v2.0.0-vscode. Cline funciona en VS Code y en toda la familia JetBrains (PyCharm, Rider, CLion, GoLand, WebStorm, RustRover), y soporta edición agéntica de archivos y herramientas MCP. Para uso totalmente offline o bajo mandato de cumplimiento normativo, Bodega One Code es la opción más sólida. Para autocompletado únicamente, Tabby es la opción más ligera. Aider funciona mejor en la terminal.',
      bullets: [
        'Cline: el mejor en general, con mantenimiento activo — lee y escribe archivos, ejecuta comandos de terminal, usa herramientas MCP, VS Code + toda la familia JetBrains (PyCharm, Rider, CLion, GoLand, WebStorm, RustRover), gratuito BYOK o ClinePass desde $9,99/mes',
        'Bodega One Code: IDE independiente local-first gratuito para uso personal (no un plugin) — agente de codificación integrado, bring-your-own-LLM, soporte completo offline/air-gap, $39 de pago único para el nivel comercial (aún no disponible para comprar)',
        'Continue: todavía se instala y funciona pero sin mantenimiento (adquirido por Cursor en junio de 2026, v2.0.0-vscode versión final, datos en la nube eliminados después del 15 de julio de 2026) — sigue funcionando con Ollama, sin más desarrollo',
        'Tabby: el mejor autocompletado self-hosted — servidor de inferencia propio, modelos de 1–3B, ~33K estrellas en GitHub',
        'Aider: el mejor nativo de terminal — consciente de git, ediciones multi-archivo, más de 44K estrellas en GitHub',
        'Cursor: la mejor opción comercial — nivel Hobby gratuito, Pro $20/mes, Pro+ $60/mes, Ultra $200/mes, modelos locales vía Ollama/LM Studio Custom API',
      ],
      updatedDate: '2026-08-25',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev fue adquirido por Cursor (junio de 2026) — v2.0.0-vscode es la última versión, el repositorio ahora es de solo lectura, los datos en la nube se eliminaron después del 15 de julio de 2026; sigue funcionando localmente con Ollama pero ya no tiene mantenimiento',
          'Cline es ahora la mejor alternativa gratuita BYOK con mantenimiento activo: VS Code + toda la familia JetBrains (PyCharm, Rider, CLion, GoLand, WebStorm, RustRover), edición agéntica de archivos, herramientas MCP, más de 5M de instalaciones',
          'Bodega One Code es un IDE independiente local-first gratuito para uso personal, con agente de codificación integrado y soporte para bring-your-own-LLM (BYOL) — operación completa offline/air-gap, sin suscripción forzada',
          'Tabby ejecuta su propio servidor de inferencia (modelos 1–3B) — la menor latencia de autocompletado para equipos, self-hosted bajo Apache 2.0',
          'Aider es la opción terminal-first — consciente de commits git, reescrituras multi-archivo, más de 44K estrellas en GitHub',
          'Cursor (Hobby gratuito / $20 Pro / $60 Pro+ / $200 Ultra al mes) adquirió tanto Supermaven como Continue.dev; SpaceX completó la adquisición de Cursor por $60.000 millones en agosto de 2026',
          'Todas las herramientas funcionan completamente offline contra un backend local (Ollama, LM Studio o un servidor autoalojado); solo Cursor requiere una app conectada a la nube incluso al usar modelos locales',
        ],
      },
      buyingTable: {
        title: 'Compara los seis de un vistazo',
        content: 'Cada plugin aquí se conecta a un modelo local — la diferencia está en qué tipo de programación haces y cuánto ecosistema comercial quieres alrededor.',
        columns: ['Plugin', 'Mejor para', 'Backend local', 'Precio', 'Consíguelo'],
        rows: [
          { 'Plugin': 'Cline', 'Mejor para': 'La mayoría / tareas agénticas', 'Backend local': 'Ollama, LM Studio, 30+ APIs', 'Precio': 'Gratis (BYOK) / desde $9,99/mes', 'Consíguelo': '[Instalar gratis →](https://github.com/cline/cline)' },
          { 'Plugin': 'Bodega One Code', 'Mejor para': 'Offline / air-gap / cumplimiento', 'Backend local': 'Ollama, LM Studio, llama.cpp, 10+', 'Precio': 'Gratis (personal) / $39 único', 'Consíguelo': '[Probar gratis →](https://bodegaone.ai)' },
          { 'Plugin': 'Continue (legado)', 'Mejor para': 'Solo usuarios actuales de Continue', 'Backend local': 'Ollama, LM Studio, llama.cpp', 'Precio': 'Gratis (sin mantenimiento)', 'Consíguelo': '[Continue.dev →](https://continue.dev)' },
          { 'Plugin': 'Tabby', 'Mejor para': 'Autocompletado self-hosted más rápido', 'Backend local': 'Servidor de inferencia propio (1–3B)', 'Precio': 'Gratis, open-source', 'Consíguelo': '[Self-hostear gratis →](https://tabby.tabbyml.com)' },
          { 'Plugin': 'Aider', 'Mejor para': 'Terminal + flujo de trabajo git', 'Backend local': 'Ollama, LM Studio, compat. OpenAI', 'Precio': 'Gratis, open-source', 'Consíguelo': '[Instalar gratis →](https://aider.chat)' },
          { 'Plugin': 'Cursor', 'Mejor para': 'IDE pulido, mezcla nube + local', 'Backend local': 'Ollama, LM Studio (Custom API)', 'Precio': 'Hobby gratis / $20–$200/mes', 'Consíguelo': '[Empezar gratis →](https://cursor.com)' },
        ],
        note: 'Sáltate los seis si aún no tienes un modelo local en marcha — elige primero hardware y un backend (Ollama o LM Studio), y luego vuelve a esta tabla. Cada enlace de arriba es un enlace de producto simple, sin relación de afiliación actual — ver la nota de divulgación en la parte superior de esta página.',
      },
      clineCta: {
        title: 'Empieza con Cline: instalado en los próximos 2 minutos',
        content: 'Cline es la recomendación por defecto de esta página. Aquí está el porqué, y cómo instalarlo ahora mismo.',
        items: [
          '**Gratuito y open-source** — trae tu propia clave o apunta a un endpoint local, sin suscripción forzada (ClinePass desde $9,99/mes es opcional, para enrutamiento gestionado sin tu propia clave API).',
          '**Funciona en VS Code y en toda la familia JetBrains** — IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine y DataGrip.',
          '**Se conecta de forma nativa a Ollama y LM Studio** — además de 30+ proveedores compatibles con OpenAI, sin necesidad de dependencia de la nube.',
          '**Realmente agéntico** — lee/escribe archivos, ejecuta comandos de terminal y usa herramientas MCP, no solo autocompletado en línea.',
          '**Limitación**: las tareas agénticas de múltiples pasos fiables necesitan un modelo local de clase 32B (24 GB+ de VRAM); los modelos 14B manejan ediciones simples pero les cuesta con refactorizaciones multi-archivo complejas.',
        ],
        affiliateLinks: [
          { label: 'Instalar Cline para VS Code (gratis)', url: 'https://github.com/cline/cline', productName: 'Cline for VS Code', productCategory: 'dev-tool' },
          { label: 'Instalar Cline para JetBrains (gratis)', url: 'https://cline.bot/jetbrains', productName: 'Cline for JetBrains', productCategory: 'dev-tool' },
        ],
      },
      decisionGuide: {
        title: '¿Cuál deberías usar?',
        content: 'Asocia tu prioridad a un plugin — los seis están cubiertos en detalle más abajo en esta página.',
        items: [
          '**Lo más fácil, quieres que funcione hoy** → [Cline](https://github.com/cline/cline) — gratis, agéntico, VS Code + JetBrains.',
          '**Totalmente offline, air-gapped, o bajo un mandato de cumplimiento** → [Bodega One Code](https://bodegaone.ai) — IDE independiente sin ningún componente en la nube.',
          '**Autocompletado más rápido para un equipo, self-hosted** → [Tabby](https://tabby.tabbyml.com) — servidor de inferencia propio, completados por debajo de 200 ms.',
          '**Flujo de trabajo terminal-first, consciente de git** → [Aider](https://aider.chat) — ediciones multi-archivo, auto-commits.',
          '**Quieres un IDE comercial pulido con opción local ocasional** → [Cursor](https://cursor.com) — cloud-first por diseño, modelos locales vía Ollama/LM Studio en su ajuste Custom API.',
          '**Ya usas Continue** → todavía se instala y funciona (Ollama, BYO-LLM), pero el proyecto no tiene mantenimiento desde la adquisición de Cursor en junio de 2026 — planea migrar a Cline cuando te resulte conveniente, sin urgencia.',
        ],
      },
      rankedList: {
        title: 'Mejores plugins IDE para LLMs locales — Clasificación',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline es el mejor plugin IDE para LLMs locales en 2026 porque soporta Ollama de forma nativa, funciona tanto en VS Code como en JetBrains, y añade edición agéntica de archivos y herramientas MCP sin ninguna dependencia de la nube — Continue, la anterior opción #1, fue adquirido por Cursor en junio de 2026 y ya no tiene desarrollo activo.',
          },
          {
            type: 'plain-terms',
            text: 'Un plugin IDE para LLMs locales conecta tu editor de código (VS Code, IntelliJ) a un modelo que se ejecuta en tu propia máquina (a través de Ollama, LM Studio o llama.cpp). El modelo ve tu código y responde — ningún código sale de tu computadora, sin tarifas de API, sin límites de uso.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Cline — Mejor opción global (gratuito, código abierto, mantenimiento activo)',
            content: 'Cline (anteriormente Claude Dev) es el plugin de codificación agéntica con mejor mantenimiento para LLMs locales en 2026 — tomó el primer puesto después de que Continue fuera adquirido por Cursor en junio de 2026. Lee y escribe archivos, ejecuta comandos de terminal, navega la web (mediante herramienta de navegador) y usa servidores MCP. Con Ollama + Qwen3-Coder 32B, Cline puede implementar funcionalidades completas a partir de un prompt. Limitaciones: se requieren modelos de 32B para tareas agénticas de múltiples pasos fiables; los modelos de 14B funcionan para tareas simples. Precio: gratuito (BYOK — trae tu propia clave API de Anthropic, OpenAI, o más de 30 proveedores); ClinePass a $9,99/mes (introductorio a $4,99 el primer mes) para enrutamiento gestionado sin necesidad de clave API; Teams a $20/usuario/mes (primeros 10 puestos gratuitos). Disponible en VS Code y en toda la familia JetBrains: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine y DataGrip. Backends compatibles: Ollama, LM Studio, proxy LiteLLM y más de 30 proveedores cloud. Más de 5M de instalaciones entre VS Code, JetBrains y otros editores.',
            affiliateLinks: [
              { label: 'Cline en VS Code Marketplace (gratuito)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — El mejor IDE local-first gratuito con agente de codificación integrado',
            content: 'Bodega One Code es un IDE de IA local-first, diseñado desde cero alrededor de un agente de codificación, en lugar de ser un asistente añadido a un editor existente. Soporta bring-your-own-LLM (BYOL) en más de 10 backends, incluyendo Ollama, LM Studio, llama.cpp, LocalAI, KoboldCpp, GPT4All y MLX para modelos locales, además de proveedores en la nube directos si los quieres: apúntalo a cualquier backend y el agente ejecuta la planificación, edición y ejecución completamente contra ese modelo, sin atarte a un único proveedor. Toda la aplicación se ejecuta en tu máquina, incluyendo un modo offline y air-gap completo que bloquea las conexiones de red salientes para que ninguna telemetría ni llamada al modelo salga de la máquina, por lo que funciona en entornos aislados de la red donde herramientas conectadas a la nube como Cursor o GitHub Copilot no pueden usarse en absoluto. Precio: gratuito para uso personal durante la beta abierta actual, incluyendo derechos de uso comercial por ahora; un nivel Pro de pago único (precio aún por anunciar) está planeado para el lanzamiento completo, añadiendo derechos de uso comercial permanentes, espacios de trabajo ilimitados y una segunda máquina, pero todavía no está disponible para comprar. No hay suscripción ni medición de uso para el uso de modelos locales. Esto lo convierte en una buena opción para industrias reguladas, contratistas gubernamentales y de defensa, y cualquier equipo cuya política de seguridad prohíba enviar código a un servidor de terceros — el mismo público que busca inferencia local en primer lugar. Comparado con Cline, que es un plugin añadido a VS Code, Bodega One Code es un IDE independiente diseñado alrededor del agente desde el principio; los equipos que ya usan VS Code encontrarán en Cline la incorporación más sencilla, mientras que los equipos que empiezan de cero o necesitan garantizar operación offline obtienen con Bodega One Code un entorno construido específicamente para eso.',
            affiliateLinks: [
              { label: 'Bodega One Code (gratis, sitio oficial)', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — Todavía funcional, sin mantenimiento [Adquirido por Cursor, junio de 2026 — versión final v2.0.0-vscode]',
            content: 'Continue fue el asistente de codificación de IA open-source líder para LLMs locales antes de su adquisición por Cursor en junio de 2026. Se conecta a Ollama, LM Studio, llama.cpp y cualquier API compatible con OpenAI. Funciones: chat en línea (Cmd+L), autocompletado (Tab), herramientas del protocolo de contexto de modelo (MCP), indexación de codebase y comandos slash personalizados. La extensión de VS Code tiene más de 2M de instalaciones. El plugin de JetBrains funciona en IntelliJ IDEA, PyCharm, GoLand, WebStorm y Rider — no cubre CLion ni RustRover. Mejores modelos locales: Qwen3-Coder 14B (codificación), Llama 3.3 8B (chat). Configuración: instala la extensión, define el proveedor como Ollama, elige el modelo — listo en 2 minutos. Nota (junio de 2026): Continue fue adquirido por Cursor. La versión 2.0.0-vscode, publicada el 19 de junio de 2026, es la última; el repositorio de GitHub ahora es de solo lectura, y los datos en la nube alojados por Continue se eliminaron después del 15 de julio de 2026. La extensión sigue instalándose y funcionando completamente offline con Ollama y BYO-LLM — pero sin más desarrollo por parte del equipo original. Hay forks de la comunidad activos.',
            affiliateLinks: [
              { label: 'Continue en VS Code Marketplace (gratuito)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — El mejor servidor de autocompletado self-hosted',
            content: 'Tabby es un asistente de codificación self-hosted, construido en Rust bajo Apache 2.0, que ejecuta su propio servidor de inferencia (separado de Ollama). Usa modelos pequeños y especializados de completado de código (1–3B parámetros) entrenados específicamente para autocompletado fill-in-the-middle (FIM) — significativamente más rápido que usar un modelo 7B de propósito general. La versión estable actual es v0.32.0, con aproximadamente 33K estrellas en GitHub. Las extensiones IDE de Tabby existen para VS Code, JetBrains, Vim/Neovim y Emacs. Ideal para: equipos de 5 a 50 desarrolladores, especialmente equipos regulados o sensibles a la propiedad intelectual que quieren autocompletado rápido (<200ms) sin enviar código a la nube. Requiere un servidor dedicado o una máquina de escritorio potente — gratis para self-hostear con usuarios ilimitados, sin tarifa por puesto.',
            affiliateLinks: [
              { label: 'Tabby en GitHub (open-source, self-hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — La mejor codificación de IA nativa de terminal',
            content: 'Aider es un programador en par de IA basado en terminal que se integra con git. Entiende la estructura completa de tu repositorio, realiza ediciones multi-archivo y hace commits de los cambios automáticamente. Funciona con Ollama (via --model ollama/qwen2.5-coder:14b), LM Studio o cualquier API compatible con OpenAI. Mejores modelos locales: Qwen3-Coder 32B (modo arquitecto) + Qwen3-Coder 7B (modo editor). Aider usa un enfoque de dos modelos: un modelo grande planifica los cambios, uno pequeño los implementa. Más de 44K estrellas en GitHub. Coste: gratuito y open-source. Nota: Aider sigue en versionado 0.x en 2026, así que las flags de la CLI y el formato .aider.conf.yml cambian ocasionalmente entre versiones menores — revisa el changelog tras actualizar.',
            affiliateLinks: [
              { label: 'Aider en GitHub (open-source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — La mejor opción comercial con soporte de modelos locales',
            content: 'Cursor es un fork de VS Code con funciones de IA integradas. Cursor soporta modelos locales a través de Ollama y LM Studio en su configuración "Custom API". Sin embargo, las funciones más potentes de Cursor (modo Agent con búsqueda web, conciencia completa del codebase) requieren modelos en la nube. La integración de modelos locales funciona para chat y completados simples, pero se queda por detrás de Cline en flujos de trabajo centrados en privacidad, ya que Cursor sigue siendo una aplicación conectada a la nube incluso cuando la inferencia se ejecuta localmente. Precios: Hobby (gratuito, incluye uso de modelos locales); Pro a $20/mes ($16/mes con facturación anual, incluye un pool de $20/mes en créditos de IA para modelos frontera; el modo Auto es ilimitado sin coste de créditos); Pro+ a $60/mes (3x los créditos de uso); Ultra a $200/mes (20x el uso); Teams a $40/usuario/mes con facturación centralizada y SSO. Nota: Cursor adquirió Supermaven (2024) y Continue.dev (junio 2026). SpaceX completó su adquisición de Cursor por $60.000 millones en agosto de 2026, días después de la propia salida a bolsa de SpaceX — los ingresos anualizados de Cursor supuestamente crecieron de unos $100 millones a principios de 2025 a más de $4.000 millones hacia junio de 2026. Esta consolidación convierte a Cursor en la fuerza comercial dominante en herramientas de codificación con IA — pero plantea dudas a largo plazo sobre las alternativas open-source.',
            pros: [
              'Fork de VS Code pulido y familiar — curva de aprendizaje casi nula para usuarios existentes de VS Code',
              'Modelos locales vía Ollama o LM Studio a través del ajuste Custom API',
              'El nivel Hobby gratuito incluye uso de modelos locales, no solo una prueba',
            ],
            cons: [
              'Las funciones más potentes (modo Agent, conciencia completa del codebase) requieren modelos en la nube/frontera, no locales',
              'Ahora propiedad de SpaceX/xAI — un perfil de proveedor muy distinto al de una herramienta open-source independiente',
            ],
            affiliateLinks: [
              { label: 'Empieza gratis con Cursor Hobby', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-es.webp',
        imageCaption: 'Mejores Plugins de IDE para LLMs Locales, Clasificados -- Clasificación 2026',
      },
      setupGuide: {
        title: 'Configuración rápida: Cline + Ollama en VS Code',
        content: '¿Listo para instalar Cline? → [Instalar Cline gratis](https://github.com/cline/cline). Sigue estos pasos para conectarlo a Ollama — la forma más rápida de empezar a programar con LLM local con la actual elección #1:',
        numberedItems: [
          'Instala Ollama: `curl -fsSL https://ollama.com/install.sh | sh`',
          'Descarga un modelo de codificación: `ollama pull qwen2.5-coder:14b` (o `qwen3-coder:32b` para tareas agénticas)',
          'En VS Code, instala Cline desde el marketplace de extensiones',
          'Abre la barra lateral de Cline y haz clic en el icono de configuración (engranaje)',
          'Define el proveedor API como "Ollama", la URL base como `http://localhost:11434`, y el ID del modelo como el modelo que descargaste',
          'Reinicia VS Code — el icono de Cline aparece en la barra lateral',
          'Escribe una tarea en el panel de chat de Cline — puede leer/escribir archivos y ejecutar comandos de terminal directamente',
        ],
      },
      aiderSetupGuide: {
        title: 'Configuración rápida: Aider + Ollama (terminal)',
        content: '¿Listo para instalar Aider? → [Instalar Aider gratis](https://aider.chat). Para codificación de IA nativa de terminal y consciente de git — documentación oficial de Aider: aider.chat/docs/llms/ollama.html',
        numberedItems: [
          'Instala Ollama y descarga un modelo: `ollama pull qwen2.5-coder:32b`',
          'Instala Aider: `python -m pip install aider-install && aider-install`',
          'Define la URL base de la API de Ollama: `export OLLAMA_API_BASE=http://127.0.0.1:11434`',
          'Ejecuta Aider apuntando a tu modelo local: `aider --model ollama/qwen2.5-coder:32b`',
          'Para la configuración de dos modelos arquitecto/editor, añade `--architect-model ollama/qwen2.5-coder:32b --editor-model ollama/qwen2.5-coder:7b`',
          'Aider hace commit automáticamente de cada cambio en git — revísalos con `git log` o `git diff HEAD~1`',
        ],
      },
      modelRecommendations: {
        title: 'Mejores modelos locales por plugin y tarea',
        columns: ['Plugin', 'Mejor modelo de codificación (local)', 'Mejor modelo de chat (local)', 'VRAM mínima'],
        rows: [
          { 'Plugin': 'Cline', 'Mejor modelo de codificación (local)': 'Qwen3-Coder 32B Q4', 'Mejor modelo de chat (local)': 'Qwen3 32B Q4', 'VRAM mínima': '24 GB' },
          { 'Plugin': 'Bodega One Code', 'Mejor modelo de codificación (local)': 'Cualquier modelo local (BYOL)', 'Mejor modelo de chat (local)': 'Cualquier modelo local (BYOL)', 'VRAM mínima': 'Depende del modelo elegido' },
          { 'Plugin': 'Continue (heredado)', 'Mejor modelo de codificación (local)': 'Qwen3-Coder 14B Q8', 'Mejor modelo de chat (local)': 'Llama 3.3 8B Q4', 'VRAM mínima': '16 GB' },
          { 'Plugin': 'Tabby', 'Mejor modelo de codificación (local)': 'StarCoder2-7B (integrado)', 'Mejor modelo de chat (local)': 'N/A (solo código)', 'VRAM mínima': '8 GB' },
          { 'Plugin': 'Aider', 'Mejor modelo de codificación (local)': 'Qwen3-Coder 14B (editor)', 'Mejor modelo de chat (local)': 'Qwen3-Coder 32B (arquitecto)', 'VRAM mínima': '16–24 GB' },
          { 'Plugin': 'Cursor', 'Mejor modelo de codificación (local)': 'DeepSeek-Coder-V2 (via Ollama)', 'Mejor modelo de chat (local)': 'Qwen3 14B', 'VRAM mínima': '16 GB' },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-es.webp',
        imageCaption: 'Mejores Modelos Locales por Plugin de IDE -- Modelo de código y VRAM mínima',
        note: '¿Necesitas hardware para estos modelos? 8 GB de VRAM cubren los modelos pequeños de completado de Tabby; 16 GB manejan la mayoría de los modelos de codificación de 14B (Continue, el modo editor de Aider, la opción local de Cursor); 24 GB+ es el mínimo realista para trabajo agéntico de 32B fiable con Cline o el modo arquitecto de Aider. Consulta [Mejores GPUs para LLMs locales](/es/local-llms/best-gpus-for-local-llms) para la selección completa, o [Mejores GPUs económicas para LLMs locales](/es/local-llms/best-budget-gpus-local-llm) si empiezas con menos de 16 GB.',
      },
      lmStudioPlugins: {
        title: 'Mejores plugins de LM Studio (no es lo mismo que los plugins IDE)',
        content: 'Esta es una pregunta distinta de "qué extensión IDE se conecta a LM Studio" (cubierto arriba) — y vale la pena responderla directamente, ya que LM Studio es uno de los dos backends a los que se conecta cada plugin de esta guía. LM Studio tiene su propio sistema de plugins desde finales de 2024: los plugins se ejecutan dentro de LM Studio mismo — actualmente como código TypeScript/JavaScript sobre Node.js en un worker en sandbox, con soporte de Python aún en desarrollo — y pueden interceptar solicitudes de inferencia, añadir procesadores de prompts, conectar backends de llamada a herramientas, o añadir nuevos paneles de interfaz. Se instalan desde el marketplace curado en lmstudio.ai/plugins; cada plugin declara los permisos requeridos (acceso a red, lectura del sistema de archivos) de antemano, y puedes revocarlos después desde Ajustes sin desinstalar. Categorías comunes en 2026: plugins de búsqueda web, preprocesadores RAG/recuperación de documentos, preprocesadores OCR, plugins de conjunto de herramientas agénticas, herramientas de acceso a shell/archivos, y plugins de memoria.',
        items: [
          '**Plugins de búsqueda web**: permiten que un modelo local en LM Studio incorpore resultados web en vivo a su contexto — útil ya que los modelos locales no tienen acceso integrado a internet.',
          '**Plugins RAG / de documentos**: indexan una carpeta local de PDFs o archivos de texto y recuperan fragmentos relevantes automáticamente por consulta.',
          '**Plugins de conjunto de herramientas agénticas**: dan al modelo acceso a shell, lectura/escritura de archivos, o ejecución de tareas de múltiples pasos directamente dentro de la interfaz de chat de LM Studio — la misma categoría de capacidad que Cline ofrece para VS Code, pero ejecutándose dentro de LM Studio en lugar de un editor.',
          '**Plugins de memoria**: mantienen el contexto entre sesiones de chat en lugar de empezar de cero cada vez.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '¿Puede Continue reemplazar completamente a GitHub Copilot para uso local?',
            a: 'Desde junio de 2026, Continue fue adquirido por Cursor y la versión 2.0.0 es su última publicación (el repositorio es de solo lectura). La extensión sigue funcionando con Ollama y BYO-LLM, pero no recibe más desarrollo del equipo original. Como alternativa open-source con mantenimiento activo, Cline es el reemplazo recomendado — ofrece el mismo modelo BYOK, funciona en VS Code y JetBrains, y añade edición agéntica de archivos. GitHub Copilot Pro cuesta $10/mes con $15/mes en créditos de IA; Cline es gratuito con tu propia clave API.',
          },
          {
            q: '¿Qué plugin funciona mejor para refactorización multi-archivo?',
            a: 'Cline o Aider. Ambos pueden leer múltiples archivos, entender dependencias y realizar ediciones coordinadas en un codebase. Cline funciona dentro de VS Code (mejor para retroalimentación visual); Aider funciona en la terminal (mejor para integración CI/CD y commits conscientes de git). Para modelos de 30B+ con 24 GB de VRAM, Cline con Qwen3-Coder 32B maneja refactorizaciones complejas de forma fiable.',
          },
          {
            q: '¿Tabby funciona sin GPU?',
            a: 'Sí — Tabby puede ejecutarse en CPU con modelos pequeños (1–3B). Sin embargo, la latencia de autocompletado en CPU es de 500ms–2s, lo que se siente lento comparado con el objetivo de <200ms para una codificación fluida. Para máquinas solo con CPU, Cline + Ollama con un modelo rápido de 1B o 3B ofrece mejor control de latencia.',
          },
          {
            q: '¿Puedo usar estos plugins con LM Studio en lugar de Ollama?',
            a: 'Sí. LM Studio expone una API compatible con OpenAI en el puerto 1234 por defecto. Define el proveedor de tu plugin como "openai" con la URL base `http://localhost:1234/v1` y usa cualquier nombre de modelo de tu biblioteca de LM Studio. Cline, Continue y Aider soportan todos esta configuración. Ten en cuenta que esto es distinto del propio sistema de plugins de LM Studio (ver la sección de Plugins de LM Studio arriba) — ese sistema sirve para extender LM Studio mismo, no para conectar un IDE externo a él.',
          },
          {
            q: '¿Qué IDEs de JetBrains soportan plugins de LLM local?',
            a: 'Cline y Continue ofrecen ambos plugins de JetBrains. Cline cubre toda la familia: IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand, Rider, CLion, RustRover, RubyMine y DataGrip. Continue solo cubre IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand y Rider. Instálalos desde el JetBrains Marketplace (no el VS Code Marketplace) y configura los mismos ajustes de proveedor Ollama/LM Studio que en la versión de VS Code. Tabby también tiene soporte para JetBrains solo para autocompletado.',
          },
          {
            q: '¿Funciona Cline en PyCharm, Rider, GoLand, WebStorm, CLion y RustRover?',
            a: 'Sí — el plugin de JetBrains de Cline, instalado desde el JetBrains Marketplace, soporta toda la familia JetBrains: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine y DataGrip. Configura los mismos ajustes de proveedor Ollama o LM Studio que en la versión de VS Code. El plugin de JetBrains de Continue (sin mantenimiento desde la adquisición por Cursor en junio de 2026) cubre un conjunto más reducido — IntelliJ IDEA, PyCharm, GoLand, WebStorm y Rider — pero no CLion ni RustRover.',
          },
          {
            q: '¿Cuáles de estas herramientas funcionan completamente offline para GDPR, HIPAA, o entornos air-gapped?',
            a: 'Bodega One Code está construido específicamente para esto: operación offline completa con modelos locales, además de un modo air-gap que bloquea todas las conexiones de red salientes para que ninguna telemetría ni llamada al modelo salga de la máquina. Cline, Continue, Tabby y Aider también funcionan completamente offline, siempre que los apuntes a un backend local (Ollama, LM Studio, o un servidor Tabby autoalojado) en lugar de una API en la nube — ninguno de ellos llama a casa en esta configuración. El soporte de modelos locales de Cursor (a través de su ajuste Custom API) sigue ejecutándose dentro de una aplicación conectada a la nube, por lo que no encaja en entornos aislados de la red.',
          },
          {
            q: '¿Qué es Bodega One Code, y en qué se diferencia de Cline?',
            a: 'Bodega One Code es un IDE de IA local-first independiente con un agente de codificación integrado, gratuito para uso personal durante su beta abierta actual — a diferencia de Cline, que es un plugin añadido a VS Code o JetBrains, Bodega One Code es un IDE completo construido alrededor del agente desde el principio. Soporta bring-your-own-LLM (BYOL) en más de 10 backends, y funciona completamente offline con soporte air-gap. Un nivel Pro de pago único para uso comercial está planeado pero aún no disponible para comprar. Es una buena opción para entornos regulados o aislados de la red donde un editor conectado a la nube simplemente no puede usarse.',
          },
        ],
      },
      finalRecommendations: {
        title: 'Mis recomendaciones para 2026',
        content: 'Seis herramientas, una página — aquí está la versión corta si solo quieres la respuesta:',
        items: [
          '**Mejor en general** → [Cline](https://github.com/cline/cline) — gratis, agéntico, VS Code + toda la familia JetBrains. Instálalo primero.',
          '**Mejor totalmente offline / cumplimiento** → [Bodega One Code](https://bodegaone.ai) — IDE independiente, sin componente en la nube.',
          '**Mejor autocompletado** → [Tabby](https://tabby.tabbyml.com) — self-hosted, por debajo de 200 ms.',
          '**Mejor flujo de trabajo en terminal** → [Aider](https://aider.chat) — consciente de git, multi-archivo.',
          '**Mejor IDE comercial** → [Cursor](https://cursor.com) — empieza gratis en el nivel Hobby, añade modelos locales vía Ollama/LM Studio.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[DeepSeek vs Qwen para Coding Local 2026: ¿Cuál Gana?](/es/power-local-llm/deepseek-vs-qwen-coding-local-2026) -- comparación DeepSeek vs Qwen para coding — elige el modelo antes de configurar el plugin IDE',
          '[Reemplazar GitHub Copilot con un LLM local](/es/power-local-llm/replace-github-copilot-with-local-llm) -- guía completa para pasar de Copilot a un modelo autoalojado',
          '[Mejores modelos de coding local 2026](/es/power-local-llm/best-local-coding-models-2026) -- qué modelos funcionan mejor dentro de VS Code y JetBrains',
          '[Continue.dev vs Cline vs Aider: Herramientas de coding LLM local 2026](/es/power-local-llm/continue-dev-vs-cline-vs-aider-local) -- compara herramientas IDE que funcionan con backends LLM locales',
          '[Mejores herramientas RAG para documentos de empresa 2026](/es/power-local-llm/best-rag-tools-for-business-documents-2026) -- amplía la IA de coding local con recuperación de documentos',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Puede Continue reemplazar completamente a GitHub Copilot para uso local?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Desde junio de 2026, Continue fue adquirido por Cursor y v2.0.0 es su última publicación. La extensión sigue funcionando con Ollama, pero Cline es ahora la alternativa open-source recomendada con mantenimiento activo — gratuita con BYOK, funciona en VS Code y JetBrains, y añade edición agéntica de archivos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué plugin funciona mejor para refactorización multi-archivo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cline (VS Code) o Aider (terminal). Ambos leen múltiples archivos y realizan ediciones coordinadas. Cline es mejor para retroalimentación visual; Aider para commits conscientes de git. Usa modelos de 32B para refactorizaciones complejas fiables.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Funciona Cline en PyCharm, Rider, GoLand, WebStorm, CLion y RustRover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. El plugin de JetBrains de Cline soporta toda la familia JetBrains: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine y DataGrip. El plugin de JetBrains de Continue cubre un conjunto más reducido — IntelliJ IDEA, PyCharm, GoLand, WebStorm y Rider — y ya no recibe actualizaciones.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuáles de estas herramientas funcionan completamente offline para GDPR, HIPAA, o entornos air-gapped?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bodega One Code está construido específicamente para esto, con un modo air-gap dedicado. Cline, Continue, Tabby y Aider también funcionan completamente offline cuando se apuntan a un backend local (Ollama, LM Studio, o un servidor autoalojado). Cursor sigue siendo una aplicación conectada a la nube incluso con modelos locales, por lo que no encaja en entornos aislados de la red.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué es Bodega One Code, y en qué se diferencia de Cline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bodega One Code es un IDE de IA local-first independiente con agente de codificación integrado, gratuito para uso personal durante su beta abierta actual, soporte bring-your-own-LLM (BYOL) en más de 10 backends, y operación completa offline/air-gap. A diferencia de Cline, que es un plugin añadido a VS Code o JetBrains, Bodega One Code es un IDE completo construido alrededor del agente desde el principio.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Mejores plugins IDE para LLMs locales 2026',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: 'El mejor en general — mantenimiento activo, agéntico, VS Code + toda la familia JetBrains, gratuito BYOK' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: 'El mejor IDE local-first gratuito para uso personal con agente de codificación integrado — BYOL, soporte completo offline/air-gap' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: 'Todavía funcional pero sin mantenimiento desde la adquisición por Cursor, junio de 2026' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: 'El mejor autocompletado self-hosted — modelos FIM 1–3B, todos los editores' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: 'El mejor nativo de terminal — consciente de git, ediciones multi-archivo, open-source' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: 'La mejor opción comercial — nivel Hobby gratuito + soporte de modelos locales, $20/mes Pro' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Mejores plugins IDE para LLMs locales en 2026 (VS Code, JetBrains y LM Studio)',
      description: 'Comparativa clasificada de Cline, Bodega One Code, Continue, Tabby, Aider y Cursor para uso de LLM local en VS Code, toda la familia JetBrains y LM Studio. Incluye tabla comparativa, guías de configuración, recomendaciones de modelos y orientación de hardware.',
      datePublished: '2026-05-26',
      dateModified: '2026-08-25',
      url: 'https://www.promptquorum.com/es/power-local-llm/best-local-llm-ide-plugins-2026',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-25',
    last_full_refresh: '2026-08-25',
    theme: 'Coding Assistants',
    title: '2026년 최고의 로컬 LLM IDE 플러그인 (VS Code, JetBrains & LM Studio)',
    seoTitle: '2026년 최고의 로컬 LLM IDE (Ollama, LM Studio & JetBrains)',
    metaDescription: 'Cline은 2026년 최고의 로컬 LLM IDE입니다: 무료이며 VS Code와 모든 JetBrains IDE(PyCharm, Rider, CLion, GoLand)에서 Ollama·LM Studio와 함께 작동합니다.',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-ko.webp',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    leadAnswerBlock: '**Cline(VS Code + JetBrains)은 2026년 기준 로컬 LLM을 위한 최고의 무료 IDE입니다. Ollama와 LM Studio(그리고 모든 OpenAI 호환 API)에 네이티브로 연동되며, 에이전트 기반 파일 편집, 터미널 명령 실행, MCP 도구를 지원하고 완전히 사용자 하드웨어에서 실행됩니다. 참고: 기존 1위였던 Continue.dev는 2026년 6월 Cursor에 인수되었으며 v2.0.0-vscode가 마지막 릴리스로, 저장소는 읽기 전용 상태입니다.**',
    quickAnswerTop: {
      question: '2026년 로컬 LLM에 가장 좋은 IDE 플러그인은 무엇입니까?',
      answer: 'Cline(무료, 오픈소스, BYOK)은 Continue.dev가 2026년 6월 Cursor에 인수되어 저장소가 v2.0.0-vscode에서 멈춘 이후, 2026년 Ollama·LM Studio·로컬 LLM을 위한 최고의 IDE 플러그인입니다. Cline은 VS Code와 JetBrains 전체 제품군(PyCharm, Rider, CLion, GoLand, WebStorm, RustRover)에서 작동하며 에이전트 기반 파일 편집과 MCP 도구를 지원합니다. 완전한 오프라인 사용이나 컴플라이언스 요건에는 Bodega One Code가 가장 강력한 선택지입니다. 자동완성만 필요하다면 Tabby가 가장 가볍습니다. Aider는 터미널에서 가장 뛰어납니다.',
      bullets: [
        'Cline: 종합 최고, 활발히 유지보수 — 파일 읽기/쓰기, 터미널 명령 실행, MCP 도구 사용, VS Code + JetBrains 전체 제품군(PyCharm, Rider, CLion, GoLand, WebStorm, RustRover), 무료 BYOK 또는 ClinePass 월 $9.99부터',
        'Bodega One Code: 개인용은 무료인 로컬 우선 독립형 IDE(플러그인 아님) — 코딩 에이전트 내장, BYOL, 완전한 오프라인/에어갭 지원, 커머셜 등급은 일회성 $39(아직 구매 불가)',
        'Continue: 여전히 설치·실행되지만 유지보수 종료(2026년 6월 Cursor 인수, v2.0.0-vscode 최종, 클라우드 데이터는 2026년 7월 15일 이후 삭제) — Ollama와 계속 작동하지만 추가 개발 없음',
        'Tabby: 최고의 셀프호스팅 자동완성 — 자체 추론 서버, 1–3B 모델, GitHub 스타 약 3.3만 개',
        'Aider: 최고의 터미널 네이티브 도구 — git 인식, 멀티 파일 편집, GitHub 스타 4.4만 개 이상',
        'Cursor: 최고의 상업용 옵션 — 무료 Hobby 등급, Pro 월 $20, Pro+ 월 $60, Ultra 월 $200, Ollama/LM Studio Custom API로 로컬 모델 사용',
      ],
      updatedDate: '2026-08-25',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev는 2026년 6월 Cursor에 인수되었습니다 — v2.0.0-vscode가 최종 릴리스이며 저장소는 읽기 전용이고, 클라우드 데이터는 2026년 7월 15일 이후 삭제되었습니다. Ollama와 함께 로컬에서 계속 작동하지만 더 이상 유지보수되지 않습니다.',
          'Cline이 현재 가장 잘 유지보수되는 무료 BYOK 대안입니다: VS Code + JetBrains 전체 제품군(PyCharm, Rider, CLion, GoLand, WebStorm, RustRover), 에이전트 기반 파일 편집, MCP 도구, 500만 건 이상 설치.',
          'Bodega One Code는 개인용은 무료인 로컬 우선 독립형 IDE로, 코딩 에이전트를 내장하고 BYOL(bring-your-own-LLM)을 지원합니다 — 완전한 오프라인/에어갭 작동, 강제 구독 없음.',
          'Tabby는 자체 추론 서버(1–3B 모델)로 작동합니다 — 팀을 위한 최저 지연 자동완성, Apache 2.0으로 셀프호스팅.',
          'Aider는 터미널 우선 옵션입니다 — git 커밋 인식, 멀티 파일 재작성, GitHub 스타 4.4만 개 이상.',
          'Cursor(무료 Hobby / Pro 월 $20 / Pro+ 월 $60 / Ultra 월 $200)는 Supermaven과 Continue.dev를 모두 인수했습니다. SpaceX는 2026년 8월 Cursor를 600억 달러에 인수 완료했습니다.',
          '모든 도구는 로컬 백엔드(Ollama, LM Studio, 또는 셀프호스팅 서버)에 대해 완전히 오프라인으로 작동합니다. Cursor만 로컬 모델 사용 시에도 클라우드 연결 앱이 필요합니다.',
        ],
      },
      buyingTable: {
        title: '6가지 도구 한눈에 비교',
        content: '여기 소개된 각 플러그인은 모두 로컬 모델에 연결됩니다 — 차이는 어떤 종류의 코딩 작업을 하는지, 그리고 그 주위에 얼마나 많은 상업적 생태계를 원하는지에 있습니다.',
        columns: ['플러그인', '최적 용도', '로컬 백엔드', '가격', '받기'],
        rows: [
          { '플러그인': 'Cline', '최적 용도': '대부분 사용자/에이전트 작업', '로컬 백엔드': 'Ollama, LM Studio, 30개+ API', '가격': '무료(BYOK) / 월 $9.99부터', '받기': '[무료 설치 →](https://github.com/cline/cline)' },
          { '플러그인': 'Bodega One Code', '최적 용도': '오프라인/에어갭/컴플라이언스', '로컬 백엔드': 'Ollama, LM Studio, llama.cpp 등 10개+', '가격': '무료(개인) / 일회성 $39', '받기': '[무료로 사용해보기 →](https://bodegaone.ai)' },
          { '플러그인': 'Continue(레거시)', '최적 용도': '기존 Continue 사용자 전용', '로컬 백엔드': 'Ollama, LM Studio, llama.cpp', '가격': '무료(유지보수 종료)', '받기': '[Continue.dev →](https://continue.dev)' },
          { '플러그인': 'Tabby', '최적 용도': '가장 빠른 셀프호스팅 자동완성', '로컬 백엔드': '자체 추론 서버(1–3B)', '가격': '무료, 오픈소스', '받기': '[무료로 셀프호스팅 →](https://tabby.tabbyml.com)' },
          { '플러그인': 'Aider', '최적 용도': '터미널 + git 워크플로', '로컬 백엔드': 'Ollama, LM Studio, OpenAI 호환', '가격': '무료, 오픈소스', '받기': '[무료 설치 →](https://aider.chat)' },
          { '플러그인': 'Cursor', '최적 용도': '완성도 높은 IDE, 클라우드+로컬 혼합', '로컬 백엔드': 'Ollama, LM Studio(Custom API)', '가격': '무료 Hobby / 월 $20–$200', '받기': '[무료로 시작 →](https://cursor.com)' },
        ],
        note: '아직 로컬 모델을 실행하고 있지 않다면 이 6가지 모두 건너뛰어도 됩니다 — 먼저 하드웨어와 백엔드(Ollama 또는 LM Studio)를 고른 뒤 이 표로 돌아오세요. 위의 모든 링크는 현재 제휴 관계가 없는 일반 제품 링크입니다 — 이 페이지 상단의 공개 안내를 참고하세요.',
      },
      clineCta: {
        title: 'Cline으로 시작하기: 다음 2분 안에 설치 완료',
        content: 'Cline은 이 페이지의 기본 추천 도구입니다. 그 이유와 지금 바로 설치하는 방법을 안내합니다.',
        items: [
          '**무료이며 오픈소스** — 자신의 API 키를 사용하거나 로컬 엔드포인트를 지정할 수 있으며 강제 구독이 없습니다(월 $9.99부터인 ClinePass는 선택 사항으로, 자체 API 키 없이 관리형 라우팅을 원할 때 사용).',
          '**VS Code와 JetBrains 전체 제품군에서 작동** — IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine, DataGrip.',
          '**Ollama와 LM Studio에 네이티브로 연동** — 그 외 30개 이상의 OpenAI 호환 제공업체도 지원하며 클라우드 의존이 필요 없습니다.',
          '**진정한 에이전트 기능** — 단순 인라인 자동완성이 아니라 파일을 읽고 쓰며, 터미널 명령을 실행하고, MCP 도구를 사용합니다.',
          '**제한 사항**: 신뢰할 수 있는 다단계 에이전트 작업에는 32B급 로컬 모델(24 GB 이상 VRAM)이 필요합니다. 14B 모델은 단순 편집은 처리하지만 복잡한 멀티 파일 리팩터링에는 어려움을 겪습니다.',
        ],
        affiliateLinks: [
          { label: 'VS Code용 Cline 설치(무료)', url: 'https://github.com/cline/cline', productName: 'Cline for VS Code', productCategory: 'dev-tool' },
          { label: 'JetBrains용 Cline 설치(무료)', url: 'https://cline.bot/jetbrains', productName: 'Cline for JetBrains', productCategory: 'dev-tool' },
        ],
      },
      decisionGuide: {
        title: '어떤 것을 사용해야 할까요?',
        content: '자신의 우선순위에 맞는 플러그인을 골라보세요 — 6가지 모두 이 페이지 아래쪽에서 자세히 다룹니다.',
        items: [
          '**가장 쉽고 오늘 바로 쓰고 싶다면** → [Cline](https://github.com/cline/cline) — 무료, 에이전트 기능, VS Code + JetBrains.',
          '**완전 오프라인, 에어갭, 또는 컴플라이언스 요건이 있다면** → [Bodega One Code](https://bodegaone.ai) — 클라우드 요소가 전혀 없는 독립형 IDE.',
          '**팀을 위한 셀프호스팅 최고속 자동완성** → [Tabby](https://tabby.tabbyml.com) — 자체 추론 서버, 200ms 미만 완성.',
          '**터미널 우선, git 인식 워크플로** → [Aider](https://aider.chat) — 멀티 파일 편집, 자동 커밋.',
          '**완성도 높은 상업용 IDE에 가끔 로컬 옵션도 원한다면** → [Cursor](https://cursor.com) — 설계상 클라우드 우선이며, Custom API 설정에서 Ollama/LM Studio로 로컬 모델 사용 가능.',
          '**이미 Continue를 사용 중이라면** → 여전히 설치·실행됩니다(Ollama, BYO-LLM)만, 2026년 6월 Cursor 인수 이후 유지보수가 종료되었습니다 — 급하게 서두를 필요는 없지만 편할 때 Cline으로 이전을 계획하세요.',
        ],
      },
      rankedList: {
        title: '2026년 최고의 로컬 LLM IDE 플러그인 순위',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline은 Ollama를 네이티브로 지원하고 VS Code와 JetBrains 양쪽에서 작동하며 클라우드 의존 없이 에이전트 기반 파일 편집과 MCP 도구를 추가한다는 점에서 2026년 로컬 LLM을 위한 최고의 IDE 플러그인입니다 — 이전 1위였던 Continue는 2026년 6월 Cursor에 인수되어 더 이상 활발히 개발되지 않습니다.',
          },
          {
            type: 'plain-terms',
            text: '로컬 LLM용 IDE 플러그인은 코드 편집기(VS Code, IntelliJ)를 자신의 기기에서 실행 중인 모델(Ollama, LM Studio, llama.cpp 경유)에 연결합니다. 모델이 코드를 보고 응답합니다 — 코드가 컴퓨터 밖으로 나가지 않고, API 비용도 없으며, 사용 제한도 없습니다.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Cline — 종합 최고(무료, 오픈소스, 활발히 유지보수)',
            content: 'Cline(이전 이름 Claude Dev)은 2026년 로컬 LLM을 위해 가장 잘 유지보수되는 에이전트 기반 코딩 플러그인입니다 — 2026년 6월 Continue가 Cursor에 인수된 이후 1위 자리를 차지했습니다. 파일을 읽고 쓰며, 터미널 명령을 실행하고, (브라우저 도구를 통해) 웹을 탐색하며, MCP 서버를 사용할 수 있습니다. Ollama + Qwen3-Coder 32B와 함께 사용하면 Cline은 프롬프트 하나로 전체 기능을 구현할 수 있습니다. 제한 사항: 신뢰할 수 있는 다단계 에이전트 작업에는 32B 모델이 필요합니다(14B 모델은 단순 작업에 적합). 가격: 무료(BYOK — Anthropic, OpenAI, 또는 30개 이상 제공업체의 API 키 사용); API 키 없이 관리형 라우팅을 원한다면 ClinePass 월 $9.99(첫 달 할인가 $4.99); Teams는 사용자당 월 $20(첫 10석 무료). VS Code와 JetBrains 전체 제품군: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine, DataGrip. 호환 백엔드: Ollama, LM Studio, LiteLLM 프록시, 그리고 30개 이상의 클라우드 제공업체. VS Code, JetBrains 및 기타 에디터를 합쳐 500만 건 이상 설치되었습니다.',
            affiliateLinks: [
              { label: 'VS Code Marketplace에서 Cline 받기(무료)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — 코딩 에이전트를 내장한 최고의 무료 로컬 우선 IDE',
            content: 'Bodega One Code는 기존 편집기에 추가된 어시스턴트가 아니라 처음부터 코딩 에이전트를 중심으로 설계된 로컬 우선 AI IDE입니다. Ollama, LM Studio, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX를 비롯한 10개 이상의 백엔드에서 BYOL(bring-your-own-LLM)을 지원하며, 원한다면 클라우드 제공업체에 직접 연결할 수도 있습니다. 어떤 백엔드를 지정하든 에이전트는 계획, 편집, 실행을 모두 해당 모델을 기준으로 수행하며 특정 제공업체에 종속되지 않습니다. 애플리케이션 전체가 사용자의 기기에서 실행되며, 아웃바운드 네트워크 연결을 차단하는 완전한 오프라인·에어갭 모드를 갖추고 있어 텔레메트리나 모델 호출이 기기 밖으로 전혀 나가지 않으므로, Cursor나 GitHub Copilot처럼 클라우드 연결이 필요한 도구가 전혀 작동할 수 없는 네트워크 격리 환경에서도 사용할 수 있습니다. 가격: 현재 진행 중인 오픈 베타 기간에는 개인 사용이 무료이며 당분간 상업적 사용 권한도 포함됩니다. 정식 출시 시 일회성 유료 Pro 등급(가격 미정)이 예정되어 있으며 영구 상업적 사용 권한, 무제한 워크스페이스, 두 번째 기기 사용 권한이 추가되지만 아직 구매할 수 없습니다. 구독이 없고 로컬 모델 사용에 대한 사용량 측정도 없습니다. 규제 산업, 정부·국방 관련 계약업체, 코드를 제3자 서버로 전송하는 것을 보안 정책으로 금지하는 팀 — 애초에 로컬 추론을 찾는 바로 그 대상 — 에 적합합니다. VS Code에 추가하는 플러그인인 Cline과 비교하면, Bodega One Code는 처음부터 에이전트를 중심으로 설계된 독립형 IDE입니다. 이미 VS Code를 사용 중인 팀에는 Cline이 더 쉽게 도입할 수 있는 선택지이며, 처음부터 시작하거나 확실한 오프라인 운영이 필요한 팀에는 Bodega One Code가 그 목적에 맞게 만들어진 환경을 제공합니다.',
            affiliateLinks: [
              { label: 'Bodega One Code(무료, 공식 사이트)', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — 여전히 작동하지만 더 이상 유지보수되지 않음 [2026년 6월 Cursor에 인수됨 — 최종 버전 v2.0.0-vscode]',
            content: '2026년 6월 Cursor에 인수되기 전까지 Continue는 로컬 LLM을 위한 대표적인 오픈소스 AI 코딩 어시스턴트였습니다. Ollama, LM Studio, llama.cpp, 그리고 모든 OpenAI 호환 API에 연결됩니다. 기능: 인라인 채팅(Cmd+L), 자동완성(Tab), MCP(모델 컨텍스트 프로토콜) 도구, 코드베이스 인덱싱, 사용자 지정 슬래시 명령. VS Code 확장은 200만 건 이상 설치되었습니다. JetBrains 플러그인은 IntelliJ IDEA, PyCharm, GoLand, WebStorm, Rider에서 작동합니다 — CLion과 RustRover는 지원하지 않습니다. 추천 로컬 모델: Qwen3-Coder 14B(코딩), Llama 3.3 8B(채팅). 설정: 확장 설치, 제공업체를 Ollama로 설정, 모델 선택 — 2분이면 끝납니다. 참고(2026년 6월): Continue는 Cursor에 인수되었습니다. 2026년 6월 19일 출시된 v2.0.0-vscode가 최종 버전이며, GitHub 저장소는 이제 읽기 전용이고, Continue가 호스팅하던 클라우드 데이터는 2026년 7월 15일 이후 삭제되었습니다. 확장은 여전히 Ollama와 BYO-LLM으로 완전히 오프라인 작동하지만 원래 팀의 추가 개발은 없습니다. 커뮤니티 포크는 활발히 활동 중입니다.',
            affiliateLinks: [
              { label: 'VS Code Marketplace에서 Continue 받기(무료)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — 최고의 셀프호스팅 자동완성 서버',
            content: 'Tabby는 Rust로 작성되어 Apache 2.0으로 공개된 셀프호스팅 코딩 어시스턴트로, (Ollama와는 별도의) 자체 추론 서버를 운영합니다. FIM(fill-in-the-middle) 자동완성 전용으로 학습된 소형 특화 모델(1–3B 파라미터)을 사용해 일반적인 7B 모델보다 훨씬 빠릅니다. 현재 안정 버전은 v0.32.0이며 GitHub 스타는 약 3.3만 개입니다. VS Code, JetBrains, Vim/Neovim, Emacs용 Tabby IDE 확장이 있습니다. 적합한 대상: 5–50명 규모 개발팀, 특히 코드를 클라우드로 보내지 않고 빠른(<200ms) 자동완성을 원하는 규제 산업이나 지식재산에 민감한 팀. 전용 서버나 고성능 데스크톱이 필요합니다 — 무제한 사용자로 무료 셀프호스팅 가능하며 좌석당 요금이 없습니다.',
            affiliateLinks: [
              { label: 'GitHub에서 Tabby 확인(오픈소스, 셀프호스팅)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — 최고의 터미널 네이티브 AI 코딩',
            content: 'Aider는 git과 통합된 터미널 기반 AI 페어 프로그래머입니다. 저장소 전체 구조를 이해하고, 멀티 파일 편집을 수행하며, 변경 사항을 자동으로 커밋합니다. Ollama(--model ollama/qwen2.5-coder:14b), LM Studio, 또는 모든 OpenAI 호환 API와 함께 작동합니다. 추천 로컬 모델: Qwen3-Coder 32B(아키텍트 모드) + Qwen3-Coder 7B(에디터 모드). Aider는 대형 모델이 변경을 계획하고 소형 모델이 이를 구현하는 두 모델 방식을 사용합니다. GitHub 스타 4.4만 개 이상. 비용: 무료, 오픈소스. 참고: Aider는 2026년 기준 여전히 0.x 버전 체계이므로 CLI 플래그와 .aider.conf.yml 형식이 마이너 릴리스 사이에 간혹 변경됩니다 — 업그레이드 후에는 변경 이력을 확인하세요.',
            affiliateLinks: [
              { label: 'GitHub에서 Aider 확인(오픈소스)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — 로컬 모델을 지원하는 최고의 상업용 옵션',
            content: 'Cursor는 AI 기능이 내장된 VS Code 포크입니다. Cursor는 "Custom API" 설정에서 Ollama와 LM Studio를 통해 로컬 모델을 지원합니다. 다만 Cursor의 가장 강력한 기능(웹 검색을 포함한 Agent 모드, 전체 코드베이스 인식)은 클라우드 모델이 필요합니다. 로컬 모델 연동은 채팅과 단순 완성에는 작동하지만, 로컬에서 추론이 실행되더라도 Cursor 자체는 여전히 클라우드에 연결된 애플리케이션이므로 프라이버시 중심 워크플로에서는 Cline보다 뒤처집니다. 가격: Hobby(무료, 로컬 모델 사용 포함); Pro는 월 $20(연간 결제 시 월 $16, 프런티어 모델용 월 $20 AI 크레딧 풀 포함, Auto 모드는 크레딧 소모 없이 무제한); Pro+는 월 $60(3배 사용 크레딧); Ultra는 월 $200(20배 사용량); Teams는 사용자당 월 $40으로 중앙 결제와 SSO 지원. 참고: Cursor는 Supermaven(2024년)과 Continue.dev(2026년 6월)를 인수했습니다. SpaceX는 자사 IPO 며칠 뒤인 2026년 8월 Cursor를 600억 달러에 인수 완료했습니다 — 보도에 따르면 Cursor의 연환산 매출은 2025년 초 약 1억 달러에서 2026년 6월까지 40억 달러 이상으로 성장했습니다. 이러한 통합으로 Cursor는 AI 코딩 도구 시장에서 지배적인 상업적 세력이 되었지만, 오픈소스 대안의 장기적 향방에 대한 의문도 남깁니다.',
            pros: [
              '완성도 높고 익숙한 VS Code 포크 — 기존 VS Code 사용자에게는 학습 곡선이 거의 없음',
              'Custom API 설정을 통해 Ollama 또는 LM Studio로 로컬 모델 사용 가능',
              '무료 Hobby 등급에 단순 체험판이 아닌 로컬 모델 사용이 포함됨',
            ],
            cons: [
              '가장 강력한 기능(Agent 모드, 전체 코드베이스 인식)은 로컬이 아닌 클라우드/프런티어 모델이 필요함',
              '현재 SpaceX/xAI 소유 — 독립 오픈소스 도구와는 근본적으로 다른 공급업체 성격',
            ],
            affiliateLinks: [
              { label: 'Cursor Hobby로 무료 시작', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-ko.webp',
        imageCaption: '로컬 LLM을 위한 최고의 IDE 플러그인 순위 -- 2026년 순위',
      },
      setupGuide: {
        title: '빠른 설정: VS Code에서 Cline + Ollama',
        content: 'Cline을 설치할 준비가 되셨나요? → [Cline 무료 설치](https://github.com/cline/cline). 다음 단계에 따라 Ollama에 연결하세요 — 현재 1위 픽으로 로컬 LLM 코딩을 가장 빠르게 시작하는 방법입니다:',
        numberedItems: [
          'ollama.com에서 Ollama를 설치합니다.',
          '코딩 모델을 다운로드합니다: `ollama pull qwen2.5-coder:14b`',
          'VS Code 마켓플레이스에서 Cline 확장을 설치합니다.',
          'Cline 사이드바를 열고 설정(톱니바퀴) 아이콘을 클릭합니다.',
          'API 제공자를 "Ollama"로 설정하고, 기본 URL을 `http://localhost:11434`로, 모델 ID를 다운로드한 모델로 설정합니다.',
          'VS Code를 재시작합니다 — 사이드바에 Cline 아이콘이 나타납니다.',
          'Cline 채팅 패널에서 작업을 입력합니다 — 파일을 직접 읽고 쓰며 터미널 명령을 실행할 수 있습니다.',
        ],
      },
      aiderSetupGuide: {
        title: '빠른 설정: Aider + Ollama (터미널)',
        content: 'Aider를 설치할 준비가 되셨나요? → [Aider 무료 설치](https://aider.chat). 터미널 기반의 git 인식 AI 코딩을 위한 설정입니다 — Aider 공식 문서: aider.chat/docs/llms/ollama.html',
        numberedItems: [
          'Ollama를 설치하고 모델을 다운로드합니다: `ollama pull qwen2.5-coder:32b`',
          'Aider를 설치합니다: `python -m pip install aider-install && aider-install`',
          'Ollama API 기본 주소를 설정합니다: `export OLLAMA_API_BASE=http://127.0.0.1:11434`',
          '로컬 모델을 지정해 Aider를 실행합니다: `aider --model ollama/qwen2.5-coder:32b`',
          '아키텍트/편집기 2모델 구성을 사용하려면 다음을 추가합니다: `--architect-model ollama/qwen2.5-coder:32b --editor-model ollama/qwen2.5-coder:7b`',
          'Aider는 각 변경 사항을 git에 자동으로 커밋합니다 — `git log` 또는 `git diff HEAD~1`로 검토하십시오.',
        ],
      },
      modelRecommendations: {
        title: '플러그인과 작업별 최적 로컬 모델',
        columns: ['플러그인', '최고의 코딩 모델 (로컬)', '최고의 채팅 모델 (로컬)', '최소 VRAM'],
        rows: [
          { '플러그인': 'Cline', '최고의 코딩 모델 (로컬)': 'Qwen3-Coder 32B Q4', '최고의 채팅 모델 (로컬)': 'Qwen3 32B Q4', '최소 VRAM': '24 GB' },
          { '플러그인': 'Bodega One Code', '최고의 코딩 모델 (로컬)': '임의의 로컬 모델 (BYOL)', '최고의 채팅 모델 (로컬)': '임의의 로컬 모델 (BYOL)', '최소 VRAM': '선택한 모델에 따라 다름' },
          { '플러그인': 'Continue (레거시)', '최고의 코딩 모델 (로컬)': 'Qwen3-Coder 14B Q8', '최고의 채팅 모델 (로컬)': 'Llama 3.3 8B Q4', '최소 VRAM': '16 GB' },
          { '플러그인': 'Tabby', '최고의 코딩 모델 (로컬)': 'StarCoder2-7B (내장)', '최고의 채팅 모델 (로컬)': 'N/A (코드 전용)', '최소 VRAM': '8 GB' },
          { '플러그인': 'Aider', '최고의 코딩 모델 (로컬)': 'Qwen3-Coder 14B (에디터)', '최고의 채팅 모델 (로컬)': 'Qwen3-Coder 32B (아키텍트)', '최소 VRAM': '16–24 GB' },
          { '플러그인': 'Cursor', '최고의 코딩 모델 (로컬)': 'DeepSeek-Coder-V2 (Ollama 경유)', '최고의 채팅 모델 (로컬)': 'Qwen3 14B', '최소 VRAM': '16 GB' },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-ko.webp',
        imageCaption: 'IDE 플러그인별 최고의 로컬 모델 -- 코딩 모델과 최소 VRAM',
        note: '이 모델들을 위한 하드웨어가 필요하신가요? 8 GB VRAM이면 Tabby의 소형 완성 모델을 감당할 수 있습니다. 16 GB면 대부분의 14B 코딩 모델(Continue, Aider 에디터 모드, Cursor의 로컬 옵션)을 처리할 수 있습니다. 24 GB 이상은 Cline이나 Aider 아키텍트 모드로 신뢰할 수 있는 32B 에이전트 작업을 하기 위한 현실적인 최소 사양입니다. 전체 추천 사양은 [로컬 LLM을 위한 최고의 GPU](/ko/local-llms/best-gpus-for-local-llms)를, 16 GB 미만으로 시작한다면 [로컬 LLM을 위한 최고의 저예산 GPU](/ko/local-llms/best-budget-gpus-local-llm)를 참고하세요.',
      },
      lmStudioPlugins: {
        title: '최고의 LM Studio 플러그인(IDE 플러그인과는 다릅니다)',
        content: '이는 앞서 다룬 "어떤 IDE 확장이 LM Studio와 연동되는가"와는 다른 질문입니다 — 그리고 직접 답할 가치가 있습니다. LM Studio는 이 가이드의 모든 플러그인이 연결하는 두 백엔드 중 하나이기 때문입니다. LM Studio는 2024년 말부터 자체 플러그인 시스템을 갖추고 있습니다: 플러그인은 LM Studio 내부에서 — 현재는 샌드박스 처리된 워커에서 Node.js 위의 TypeScript/JavaScript 코드로 실행되며 Python 지원은 아직 개발 중입니다 — 추론 요청을 가로채거나 프롬프트 프로세서를 추가하거나 도구 호출 백엔드를 연결하거나 새 UI 패널을 추가할 수 있습니다. lmstudio.ai/plugins의 큐레이션된 마켓플레이스에서 설치할 수 있으며, 각 플러그인은 필요한 권한(네트워크 접근, 파일 시스템 읽기)을 사전에 명시하고, 이후 설정에서 제거 없이 권한을 취소할 수 있습니다. 2026년 기준 주요 카테고리: 웹 검색 플러그인, RAG/문서 검색 전처리기, OCR 전처리기, 에이전트 도구 세트 플러그인, 셸/파일 접근 도구, 메모리 플러그인입니다.',
        items: [
          '**웹 검색 플러그인**: LM Studio의 로컬 모델이 실시간 웹 검색 결과를 컨텍스트에 가져올 수 있게 합니다 — 로컬 모델은 기본적으로 인터넷에 접근할 수 없으므로 유용합니다.',
          '**RAG/문서 플러그인**: 로컬 폴더의 PDF나 텍스트 파일을 인덱싱하고 질의마다 관련 청크를 자동으로 검색합니다.',
          '**에이전트 도구 세트 플러그인**: LM Studio의 자체 채팅 UI 안에서 모델에게 셸 접근, 파일 읽기/쓰기, 다단계 작업 실행 권한을 부여합니다 — Cline이 VS Code에 제공하는 것과 같은 종류의 기능이지만 편집기가 아닌 LM Studio 내부에서 동작합니다.',
          '**메모리 플러그인**: 매번 새로 시작하는 대신 채팅 세션 간에 컨텍스트를 유지합니다.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Continue가 로컬 사용에서 GitHub Copilot을 완전히 대체할 수 있습니까?',
            a: '2026년 6월 기준 Continue는 Cursor에 인수되었으며 v2.0.0-vscode(2026년 6월 19일 출시)가 최종 릴리스입니다. 저장소는 읽기 전용이며 Continue가 호스팅하던 클라우드 데이터는 2026년 7월 15일 이후 삭제되었습니다. 확장은 여전히 Ollama와 BYO-LLM으로 오프라인 설치·실행이 가능하지만 원래 팀의 추가 개발은 없습니다. 유지보수되는 오픈소스 대안으로는 Cline이 권장되는 대체재입니다 — 동일한 BYOK 모델을 제공하고, VS Code와 JetBrains 전체 제품군에서 작동하며, 에이전트 기반 파일 편집을 추가로 제공합니다. GitHub Copilot Pro는 월 $10에 월 $15 상당의 AI 크레딧을 제공하며, Cline은 자신의 API 키만 있으면 무료입니다.',
          },
          {
            q: '멀티 파일 리팩터링에 가장 적합한 플러그인은 무엇입니까?',
            a: 'Cline 또는 Aider입니다. 둘 다 여러 파일을 읽고, 의존 관계를 파악하며, 코드베이스 전반에 걸쳐 조율된 편집을 수행할 수 있습니다. Cline은 VS Code나 JetBrains 안에서 작동해 시각적 피드백이 유리하고, Aider는 터미널에서 작동해 CI/CD 연동과 git 인식 커밋에 유리합니다. 24 GB VRAM으로 30B급 이상 모델을 사용한다면 Cline과 Qwen3-Coder 32B 조합이 복잡한 리팩터링도 안정적으로 처리합니다.',
          },
          {
            q: 'Tabby는 GPU 없이도 작동합니까?',
            a: '네 — Tabby는 소형 모델(1–3B)로 CPU에서도 실행할 수 있습니다. 다만 CPU에서의 자동완성 지연은 500ms–2초로, 원활한 코딩을 위한 목표치인 200ms 미만보다 느리게 느껴집니다. CPU 전용 기기라면 빠른 1B 또는 3B 모델을 쓰는 Cline + Ollama 조합이 더 나은 지연 제어를 제공합니다.',
          },
          {
            q: '이 플러그인들을 Ollama 대신 LM Studio와 함께 사용할 수 있습니까?',
            a: '네. LM Studio는 기본적으로 1234번 포트에서 OpenAI 호환 API를 제공합니다. 플러그인 제공업체를 "openai"로 설정하고 기본 URL을 `http://localhost:1234/v1`로 지정한 뒤 LM Studio 라이브러리의 모델 이름을 사용하면 됩니다. Cline, Continue, Aider, Bodega One Code 모두 이 설정을 지원합니다. 이는 위의 LM Studio 플러그인 섹션에서 다룬 LM Studio 자체 플러그인 시스템과는 다른 것에 유의하세요 — 그것은 LM Studio 자체를 확장하기 위한 것이지, 외부 IDE를 여기에 연결하기 위한 것이 아닙니다.',
          },
          {
            q: 'Cline은 PyCharm, Rider, GoLand, WebStorm, CLion, RustRover에서 작동합니까?',
            a: '네 — JetBrains Marketplace에서 설치하는 Cline의 JetBrains 플러그인은 JetBrains 전체 제품군을 지원합니다: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine, DataGrip. VS Code 버전과 동일한 Ollama 또는 LM Studio 제공업체 설정을 구성하면 됩니다. Continue의 JetBrains 플러그인(2026년 6월 Cursor 인수 이후 유지보수 종료)은 IntelliJ IDEA, PyCharm, GoLand, WebStorm, Rider로 더 좁은 범위를 지원하며 CLion과 RustRover는 지원하지 않습니다.',
          },
          {
            q: '어떤 JetBrains IDE가 로컬 LLM 플러그인을 지원합니까?',
            a: 'Cline과 Continue 모두 JetBrains 플러그인을 제공합니다. Cline은 전체 제품군을 지원합니다: IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand, Rider, CLion, RustRover, RubyMine, DataGrip. Continue는 IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand, Rider만 지원합니다. JetBrains 마켓플레이스(VS Code 마켓플레이스 아님)에서 설치하며, VS Code 버전과 동일한 Ollama/LM Studio 제공자 설정을 사용합니다. Tabby도 자동완성 전용으로 JetBrains를 지원합니다.',
          },
          {
            q: 'GDPR, HIPAA, 에어갭 환경에서 완전히 오프라인으로 작동하는 도구는 어느 것입니까?',
            a: 'Bodega One Code는 바로 이를 위해 만들어졌습니다: 로컬 모델을 사용한 완전한 오프라인 작동에 더해, 모든 아웃바운드 네트워크 연결을 차단해 텔레메트리나 모델 호출이 기기 밖으로 전혀 나가지 않는 에어갭 모드를 갖추고 있습니다. Cline, Continue, Tabby, Aider도 클라우드 API 대신 로컬 백엔드(Ollama, LM Studio, 또는 셀프호스팅 Tabby 서버)를 가리키기만 하면 모두 완전히 오프라인으로 작동합니다 — 이 설정에서는 어느 것도 외부로 통신하지 않습니다. Cursor의 로컬 모델 지원(Custom API 설정을 통한)은 여전히 클라우드에 연결된 애플리케이션 내부에서 실행되므로 네트워크 격리 환경에는 적합하지 않습니다.',
          },
          {
            q: 'Bodega One Code란 무엇이며 Cline과 어떻게 다릅니까?',
            a: 'Bodega One Code는 코딩 에이전트를 내장한 독립형 로컬 우선 AI IDE로, 현재 진행 중인 오픈 베타 기간에는 개인 사용이 무료입니다 — VS Code나 JetBrains에 추가하는 플러그인인 Cline과 달리, Bodega One Code는 처음부터 에이전트를 중심으로 설계된 완전한 IDE입니다. 10개 이상의 백엔드에서 BYOL(bring-your-own-LLM)을 지원하며, 에어갭 지원과 함께 완전히 오프라인으로 작동합니다. 상업적 사용을 위한 유료 일회성 Pro 등급이 계획되어 있지만 아직 구매할 수 없습니다. 클라우드 연결 편집기를 전혀 사용할 수 없는 규제 환경이나 네트워크 격리 환경에 적합합니다.',
          },
        ],
      },
      finalRecommendations: {
        title: '2026년 추천 요약',
        content: '6가지 도구를 한 페이지로 — 결론만 원하신다면 요약입니다:',
        items: [
          '**종합 최고** → [Cline](https://github.com/cline/cline) — 무료, 에이전트 기능, VS Code + JetBrains 전체 제품군. 가장 먼저 설치하세요.',
          '**완전 오프라인/컴플라이언스에 최고** → [Bodega One Code](https://bodegaone.ai) — 독립형 IDE, 클라우드 요소 없음.',
          '**자동완성 최고** → [Tabby](https://tabby.tabbyml.com) — 셀프호스팅, 200ms 미만.',
          '**터미널 워크플로 최고** → [Aider](https://aider.chat) — git 인식, 멀티 파일.',
          '**상업용 IDE 최고** → [Cursor](https://cursor.com) — 무료 Hobby 등급으로 시작하고 Ollama/LM Studio로 로컬 모델을 추가하세요.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 코딩 AI DeepSeek vs Qwen 2026: 승자는?](/ko/power-local-llm/deepseek-vs-qwen-coding-local-2026) -- DeepSeek vs Qwen 코딩 비교 — IDE 플러그인 설정 전에 모델을 먼저 선택',
          '[GitHub Copilot을 로컬 LLM으로 대체하기](/ko/power-local-llm/replace-github-copilot-with-local-llm) -- Copilot에서 셀프호스팅 모델로 전환하는 전체 가이드',
          '[2026년 최고의 로컬 코딩 모델](/ko/power-local-llm/best-local-coding-models-2026) -- VS Code와 JetBrains에서 가장 잘 작동하는 모델 소개',
          '[Continue.dev vs Cline vs Aider: 로컬 LLM 코딩 도구 2026](/ko/power-local-llm/continue-dev-vs-cline-vs-aider-local) -- 로컬 LLM 백엔드와 함께 작동하는 IDE 도구 비교',
          '[2026년 기업 문서용 최고의 RAG 도구](/ko/power-local-llm/best-rag-tools-for-business-documents-2026) -- 문서 검색으로 로컬 코딩 AI 확장',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Continue가 로컬 사용에서 GitHub Copilot을 완전히 대체할 수 있습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '2026년 6월 기준 Continue는 Cursor에 인수되었으며 v2.0.0-vscode가 최종 버전입니다(저장소 읽기 전용, 클라우드 데이터는 2026년 7월 15일 이후 삭제). 확장은 여전히 Ollama로 오프라인 작동하지만, 이제 Cline이 권장되는 유지보수 중인 오픈소스 대안입니다 — BYOK로 무료이며 VS Code와 JetBrains 전체 제품군에서 작동하고 에이전트 기반 파일 편집을 추가로 제공합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '멀티 파일 리팩터링에 가장 적합한 플러그인은 무엇입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cline(VS Code + JetBrains) 또는 Aider(터미널)입니다. 둘 다 여러 파일을 읽고 조율된 편집을 수행할 수 있습니다. Cline은 시각적 피드백에, Aider는 git 인식 커밋에 유리합니다. 복잡한 리팩터링에는 32B 모델을 사용하세요.',
          },
        },
        {
          '@type': 'Question',
          name: 'Cline은 PyCharm, Rider, GoLand, WebStorm, CLion, RustRover에서 작동합니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '네. Cline의 JetBrains 플러그인은 JetBrains 전체 제품군을 지원합니다: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Rider, CLion, RustRover, RubyMine, DataGrip. Continue의 JetBrains 플러그인은 IntelliJ IDEA, PyCharm, GoLand, WebStorm, Rider로 더 좁은 범위를 지원하며 더 이상 업데이트되지 않습니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'GDPR, HIPAA, 에어갭 환경에서 완전히 오프라인으로 작동하는 도구는 어느 것입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bodega One Code는 전용 에어갭 모드와 함께 바로 이를 위해 만들어졌습니다. Cline, Continue, Tabby, Aider도 로컬 백엔드(Ollama, LM Studio, 또는 셀프호스팅 서버)를 가리키면 완전히 오프라인으로 작동합니다. Cursor는 로컬 모델을 사용해도 여전히 클라우드에 연결된 애플리케이션이므로 네트워크 격리 환경에는 적합하지 않습니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'Bodega One Code란 무엇이며 Cline과 어떻게 다릅니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bodega One Code는 코딩 에이전트를 내장한 독립형 로컬 우선 AI IDE로, 현재 오픈 베타 기간에는 개인 사용이 무료이며 10개 이상의 백엔드에서 BYOL(bring-your-own-LLM)을 지원하고 완전한 오프라인/에어갭 작동을 제공합니다. VS Code나 JetBrains에 추가하는 플러그인인 Cline과 달리, 처음부터 에이전트를 중심으로 설계된 완전한 IDE입니다.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      inLanguage: 'ko',
      name: '2026년 최고의 로컬 LLM IDE 플러그인',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: '종합 최고 — 활발히 유지보수, 에이전트 기능, VS Code + JetBrains 전체 제품군, 무료 BYOK' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: '개인 사용은 무료인 최고의 로컬 우선 IDE — 코딩 에이전트 내장, BYOL, 완전한 오프라인/에어갭 지원' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: '여전히 작동하지만 2026년 6월 Cursor 인수 이후 유지보수 종료' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: '최고의 셀프호스팅 자동완성 — 1–3B FIM 모델, 모든 에디터 지원' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: '최고의 터미널 네이티브 도구 — git 인식, 멀티 파일, 오픈소스' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: '최고의 상업용 — 무료 Hobby 등급 + 로컬 모델 지원, Pro 월 $20' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: '2026년 최고의 로컬 LLM IDE 플러그인 (VS Code, JetBrains & LM Studio)',
      description: 'VS Code, JetBrains 전체 제품군, LM Studio에서 로컬 LLM을 사용하기 위한 Cline, Bodega One Code, Continue, Tabby, Aider, Cursor 순위 비교. 비교표, 설정 가이드, 모델 추천, 하드웨어 안내를 포함합니다.',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      datePublished: '2026-05-26',
      dateModified: '2026-08-25',
      url: 'https://www.promptquorum.com/ko/power-local-llm/best-local-llm-ide-plugins-2026',
      inLanguage: 'ko',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: 'Melhores plugins de IDE para LLMs locais em 2026 (VS Code e JetBrains)',
    seoTitle: 'Melhores plugins de IDE para LLM local 2026 (VS Code e JetBrains)',
    metaDescription: 'Cline, Continue, Aider, Cursor — classificados por suporte a modelos locais em 2026, além dos plugins próprios do LM Studio. O que se conecta melhor ao Ollama ou llama.cpp?',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-pt.webp',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Cline (VS Code + JetBrains) é o melhor plugin de IDE gratuito para LLMs locais em meados de 2026: conecta-se nativamente ao Ollama e a qualquer API compatível com OpenAI, oferece edição agêntica de arquivos + comandos de terminal + ferramentas MCP, e roda inteiramente no seu hardware. Nota: o Continue.dev (anteriormente classificado em #1) foi adquirido pela Cursor em junho de 2026 — a v2.0.0 é sua versão final.**',
    quickAnswerTop: {
      question: 'Qual é o melhor plugin de IDE para executar modelos de IA locais enquanto você programa?',
      answer: 'Cline (gratuito, open-source, BYOK) é agora o melhor plugin de IDE para Ollama e LLMs locais — depois que o Continue.dev foi adquirido pela Cursor em junho de 2026 e seu repositório congelado na v2.0.0. O Cline funciona no VS Code e em IDEs JetBrains, com edição agêntica de arquivos e ferramentas MCP. Para apenas autocompletar, Tabby é a opção mais leve. Aider funciona melhor no terminal.',
      bullets: [
        'Cline: melhor no geral, mantido ativamente — lê/escreve arquivos, executa comandos de terminal, usa ferramentas MCP, VS Code + JetBrains (incl. PyCharm, PhpStorm, Rider), gratuito (BYOK) ou ClinePass a $9,99/mês',
        'Bodega One Code: IDE independente local-first gratuita (não é um plugin) — agente de codificação integrado, bring-your-own-LLM, suporte completo offline/air-gap, sem assinatura',
        'Continue: ainda funcional, mas sem manutenção (adquirido pela Cursor em junho de 2026, v2.0.0 final) — roda com Ollama, sem novos desenvolvimentos',
        'Tabby: melhor autocompletar self-hosted — roda seu próprio servidor de inferência, modelos de 1–3B',
        'Aider: melhor nativo de terminal — com reconhecimento de git, edições multiarquivo, excelente com modelos 14B+',
        'Cursor: melhor opção comercial — suporte a modelos locais adicionado, mas projetado com foco na nuvem',
      ],
      updatedDate: '2026-07-21',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev foi adquirido pela Cursor (junho de 2026) — a v2.0.0 é a versão final, repositório somente leitura; ainda roda com Ollama, mas sem manutenção',
          'Cline é agora a melhor alternativa gratuita (BYOK) mantida ativamente: VS Code + JetBrains, edição agêntica de arquivos, ferramentas MCP, mais de 5M de instalações',
          'O Bodega One Code é uma IDE local-first gratuita com agente de codificação integrado e suporte a bring-your-own-LLM (BYOL) — operação completa offline/air-gap, sem necessidade de assinatura',
          'Tabby roda seu próprio servidor de inferência (modelos de 1–3B) — menor latência de autocompletar para times',
          'Aider é a opção terminal-first — com reconhecimento de commits git, reescritas multiarquivo, mais de 44 mil estrelas no GitHub',
          'Cursor ($20/mês Pro, baseado em créditos) adquiriu tanto o Supermaven quanto o Continue.dev; a SpaceX concordou em adquirir a Cursor por $60 bilhões em junho de 2026',
          'Todas as ferramentas funcionam com Ollama; apenas o Tabby exige seu próprio servidor backend',
        ],
      },
      rankedList: {
        title: 'Melhores plugins de IDE para LLMs locais — Classificação',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline é o melhor plugin de IDE para LLMs locais em 2026 porque suporta o Ollama nativamente, funciona tanto no VS Code quanto no JetBrains e adiciona edição agêntica de arquivos e ferramentas MCP sem nenhuma dependência da nuvem — o Continue, antigo #1, foi adquirido pela Cursor em junho de 2026 e não recebe mais desenvolvimento ativo.',
          },
          {
            type: 'plain-terms',
            text: 'Um plugin de IDE para LLMs locais conecta seu editor de código (VS Code, IntelliJ) a um modelo executando na sua própria máquina (via Ollama, LM Studio ou llama.cpp). O modelo vê seu código e responde — nenhum código sai do seu computador, sem taxas de API, sem limites de uso.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Cline — Melhor opção geral (gratuito, código aberto, mantido ativamente)',
            content: 'Cline (anteriormente Claude Dev) é o plugin de codificação agêntica mais bem mantido para LLMs locais em 2026 — assumiu o primeiro lugar depois que o Continue foi adquirido pela Cursor em junho de 2026. Ele lê e escreve arquivos, executa comandos de terminal, navega na web (via ferramenta de navegador) e usa servidores MCP. Com Ollama + Qwen3-Coder 32B, o Cline consegue implementar funcionalidades inteiras a partir de um prompt. Limitações: modelos de 32B são necessários para tarefas agênticas confiáveis de múltiplos passos; modelos de 14B funcionam para tarefas simples. Preços: gratuito (BYOK — traga sua própria chave de API da Anthropic, OpenAI ou mais de 30 provedores); ClinePass a $9,99/mês para roteamento gerenciado sem necessidade de chave de API; Teams a $20/usuário/mês (primeiras 10 vagas gratuitas). VS Code e JetBrains (IntelliJ, PyCharm, PhpStorm, WebStorm, GoLand, Rider e mais). Backends compatíveis: Ollama, LM Studio, proxy LiteLLM e mais de 30 provedores em nuvem. Mais de 8M de desenvolvedores.',
            affiliateLinks: [
              { label: 'Cline no VS Code Marketplace (gratuito)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — Melhor IDE local-first gratuita com agente de codificação integrado',
            content: 'O Bodega One Code é uma IDE de IA gratuita e local-first, construída desde o início ao redor de um agente de codificação, em vez de ser um assistente adicionado a um editor já existente. Ele oferece suporte a bring-your-own-LLM (BYOL): você conecta qualquer backend de modelo local, e o agente executa o planejamento, a edição e a execução inteiramente com base nesse modelo, sem prender você a um único provedor. O aplicativo inteiro roda no seu computador, com suporte completo a modo offline e air-gap — por isso funciona em ambientes isolados de rede onde ferramentas conectadas à nuvem, como Cursor ou GitHub Copilot, simplesmente não podem ser usadas. Não exige assinatura: o Bodega One Code é gratuito, e como não tem nenhum componente em nuvem, também não há medição de uso nem sistema de créditos para gerenciar. Isso o torna uma boa opção para setores regulados, contratantes governamentais e de defesa, e qualquer equipe cuja política de segurança proíba enviar código para um servidor de terceiros — exatamente o público que busca inferência local em primeiro lugar. Comparado ao Cline, que é um plugin adicionado ao VS Code, o Bodega One Code é uma IDE independente projetada em torno do agente desde o início; equipes que já usam VS Code vão achar o Cline a adição mais simples, enquanto equipes começando do zero ou que precisam garantir operação offline têm no Bodega One Code um ambiente construído especificamente para isso.',
            affiliateLinks: [
              { label: 'Bodega One Code (gratuito, site oficial)', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — Ainda funcional, sem manutenção [Adquirido pela Cursor em junho de 2026 — versão final v2.0.0]',
            content: 'O Continue era o principal assistente de codificação de IA open-source para LLMs locais antes de sua aquisição pela Cursor em junho de 2026. Conecta-se ao Ollama, LM Studio, llama.cpp e a qualquer API compatível com OpenAI. Recursos: chat inline (Cmd+L), autocompletar (Tab), ferramentas de protocolo de contexto de modelo (MCP), indexação de codebase e comandos slash personalizados. A extensão do VS Code tem mais de 2M de instalações. O plugin do JetBrains funciona no IntelliJ, PyCharm, GoLand, WebStorm e Rider. Melhores modelos locais: Qwen3-Coder 14B (codificação), Llama 3.3 8B (chat). Configuração: instale a extensão, defina o provedor como Ollama, escolha o modelo — pronto em 2 minutos. Nota (junho de 2026): o Continue foi adquirido pela Cursor. A versão 2.0.0 é a última publicação; o repositório do GitHub agora é somente leitura. A extensão continua instalando e funcionando plenamente com Ollama e BYO-LLM — mas sem mais desenvolvimento da equipe original. Forks da comunidade estão ativos.',
            affiliateLinks: [
              { label: 'Continue no VS Code Marketplace (gratuito)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — Melhor servidor de autocompletar self-hosted',
            content: 'Tabby é um assistente de codificação self-hosted que roda seu próprio servidor de inferência (separado do Ollama). Ele usa modelos pequenos e especializados de completar código (1–3B parâmetros) treinados especificamente para autocompletar fill-in-the-middle (FIM) — significativamente mais rápido do que usar um modelo 7B de uso geral. Existem extensões de IDE do Tabby para VS Code, JetBrains, Vim/Neovim e Emacs. Ideal para: times que querem autocompletar rápido (<200ms) sem a nuvem. Requer um servidor dedicado ou uma máquina desktop potente.',
            affiliateLinks: [
              { label: 'Tabby no GitHub (open-source, self-hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — Melhor codificação de IA nativa de terminal',
            content: 'Aider é um par de programação de IA baseado em terminal que se integra ao git. Ele entende a estrutura completa do seu repositório, faz edições multiarquivo e faz commit das mudanças automaticamente. Funciona com Ollama (via --model ollama/qwen2.5-coder:14b), LM Studio ou qualquer API compatível com OpenAI. Melhores modelos locais: Qwen3-Coder 32B (modo arquiteto) + Qwen3-Coder 7B (modo editor). O Aider usa uma abordagem de dois modelos: um modelo grande planeja as mudanças, um modelo pequeno as implementa. Custo: gratuito e open-source.',
            affiliateLinks: [
              { label: 'Aider no GitHub (open-source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — Melhor opção comercial com suporte a modelos locais',
            content: 'Cursor é um fork do VS Code com recursos de IA integrados. O Cursor suporta modelos locais via Ollama e LM Studio em sua configuração "Custom API". No entanto, os recursos mais poderosos (modo Agent com busca na web, reconhecimento completo do codebase) exigem modelos na nuvem. Preços: Hobby (gratuito); Pro a $20/mês (inclui $20 em créditos de IA para modelos fronteira; modo Auto ilimitado sem custo); Pro+ a $60/mês; Ultra a $200/mês. Uso de modelos locais: nível Hobby. Nota: Cursor adquiriu o Supermaven (2024) e o Continue.dev (junho de 2026); a SpaceX concordou em adquirir o Cursor por $60 bilhões em junho de 2026 (fechamento previsto para o T3 de 2026).',
            affiliateLinks: [
              { label: 'Assinatura Cursor Pro', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-pt.webp',
        imageCaption: 'Melhores Plugins de IDE para LLMs Locais, Classificados -- Classificação de 2026',
      },
      setupGuide: {
        title: 'Configuração rápida: Cline + Ollama no VS Code',
        content: 'A forma mais rápida de começar a programar com LLM local usando a atual escolha #1:',
        numberedItems: [
          'Instale o Ollama: `curl -fsSL https://ollama.com/install.sh | sh`',
          'Baixe um modelo de codificação: `ollama pull qwen2.5-coder:14b` (ou `qwen3-coder:32b` para tarefas agênticas)',
          'No VS Code, instale o Cline pelo marketplace de extensões',
          'Abra a barra lateral do Cline e clique no ícone de engrenagem de configurações',
          'Defina o provedor de API como "Ollama", a URL base como `http://localhost:11434` e o Model ID como o modelo baixado',
          'Reinicie o VS Code — o ícone do Cline aparece na barra lateral',
          'Digite uma tarefa no painel de chat do Cline — ele consegue ler/escrever arquivos e executar comandos de terminal diretamente',
        ],
      },
      aiderSetupGuide: {
        title: 'Configuração rápida: Aider + Ollama (terminal)',
        content: 'Para codificação de IA nativa de terminal, com reconhecimento de git — documentação oficial do Aider: aider.chat/docs/llms/ollama.html',
        numberedItems: [
          'Instale o Ollama e baixe um modelo: `ollama pull qwen2.5-coder:32b`',
          'Instale o Aider: `python -m pip install aider-install && aider-install`',
          'Defina a base da API do Ollama: `export OLLAMA_API_BASE=http://127.0.0.1:11434`',
          'Execute o Aider apontando para seu modelo local: `aider --model ollama/qwen2.5-coder:32b`',
          'Para a configuração de dois modelos (arquiteto/editor), adicione `--architect-model ollama/qwen2.5-coder:32b --editor-model ollama/qwen2.5-coder:7b`',
          'O Aider faz commit automático de cada mudança no git — revise com `git log` ou `git diff HEAD~1`',
        ],
      },
      modelRecommendations: {
        title: 'Melhores modelos locais por plugin e tarefa',
        columns: ['Plugin', 'Melhor modelo de codificação (local)', 'Melhor modelo de chat (local)', 'VRAM mínima'],
        rows: [
          { 'Plugin': 'Cline', 'Melhor modelo de codificação (local)': 'Qwen3-Coder 32B Q4', 'Melhor modelo de chat (local)': 'Qwen3 32B Q4', 'VRAM mínima': '24 GB' },
          { 'Plugin': 'Bodega One Code', 'Melhor modelo de codificação (local)': 'Qualquer modelo local (BYOL)', 'Melhor modelo de chat (local)': 'Qualquer modelo local (BYOL)', 'VRAM mínima': 'Depende do modelo escolhido' },
          { 'Plugin': 'Continue (legado)', 'Melhor modelo de codificação (local)': 'Qwen3-Coder 14B Q8', 'Melhor modelo de chat (local)': 'Llama 3.3 8B Q4', 'VRAM mínima': '16 GB' },
          { 'Plugin': 'Tabby', 'Melhor modelo de codificação (local)': 'StarCoder2-7B (integrado)', 'Melhor modelo de chat (local)': 'N/A (apenas código)', 'VRAM mínima': '8 GB' },
          { 'Plugin': 'Aider', 'Melhor modelo de codificação (local)': 'Qwen3-Coder 14B (editor)', 'Melhor modelo de chat (local)': 'Qwen3-Coder 32B (arquiteto)', 'VRAM mínima': '16–24 GB' },
          { 'Plugin': 'Cursor', 'Melhor modelo de codificação (local)': 'DeepSeek-Coder-V2 (via Ollama)', 'Melhor modelo de chat (local)': 'Qwen3 14B', 'VRAM mínima': '16 GB' },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-pt.webp',
        imageCaption: 'Melhores Modelos Locais por Plugin de IDE -- Modelo de código e VRAM mínima',
      },
      lmStudioPlugins: {
        title: 'Melhores plugins do LM Studio (não é o mesmo que plugins de IDE)',
        content: 'Esta é uma pergunta diferente de "qual extensão de IDE se conecta ao LM Studio" (abordada acima). O LM Studio tem seu próprio sistema de plugins desde o fim de 2024: os plugins rodam dentro do próprio LM Studio — como código TypeScript ou Python em um worker isolado (sandbox) — e podem interceptar requisições de inferência, adicionar processadores de prompt, conectar backends de chamada de ferramentas ou adicionar novos painéis de interface. Instale-os no marketplace curado em lmstudio.ai/plugins; cada plugin declara previamente as permissões necessárias (acesso à rede, leitura do sistema de arquivos), e você pode revogá-las depois em Configurações sem desinstalar. Categorias comuns em 2026: plugins de busca na web, pré-processadores de RAG/recuperação de documentos, pré-processadores de OCR, plugins de conjunto de ferramentas agênticas, ferramentas de acesso a shell/arquivos e plugins de memória.',
        items: [
          '**Plugins de busca na web**: permitem que um modelo local no LM Studio traga resultados da web ao vivo para o contexto — útil já que modelos locais não têm acesso nativo à internet.',
          '**Plugins de RAG / documentos**: indexam uma pasta local de PDFs ou arquivos de texto e recuperam trechos relevantes automaticamente a cada consulta.',
          '**Plugins de conjunto de ferramentas agênticas**: dão ao modelo acesso a shell, leitura/escrita de arquivos ou execução de tarefas multi-etapas diretamente na interface de chat do próprio LM Studio — a mesma categoria de capacidade que o Cline oferece para o VS Code, mas rodando dentro do LM Studio em vez de um editor.',
          '**Plugins de memória**: mantêm o contexto entre sessões de chat em vez de começar do zero a cada vez.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'O Continue pode substituir completamente o GitHub Copilot para uso local?',
            a: 'A partir de junho de 2026, o Continue foi adquirido pela Cursor e a v2.0.0 é a versão final (o repositório é somente leitura). A extensão continua funcionando com Ollama e BYO-LLM, mas não recebe mais desenvolvimento da equipe original. Para uma alternativa open-source mantida ativamente, o Cline é a substituição recomendada — oferece o mesmo modelo BYOK, funciona no VS Code e no JetBrains e adiciona edição agêntica de arquivos. O GitHub Copilot Pro custa $10/mês com $15/mês em créditos de IA; o Cline é gratuito com sua própria chave de API.',
          },
          {
            q: 'Qual plugin funciona melhor para refatoração multiarquivo?',
            a: 'Cline ou Aider. Ambos conseguem ler vários arquivos, entender dependências e fazer edições coordenadas em um codebase. O Cline funciona dentro do VS Code (melhor para feedback visual); o Aider funciona no terminal (melhor para integração CI/CD e commits com reconhecimento de git). Para modelos de 30B+ com 24 GB de VRAM, o Cline com Qwen3-Coder 32B lida com refatorações complexas de forma confiável.',
          },
          {
            q: 'O Tabby funciona sem GPU?',
            a: 'Sim — o Tabby pode rodar em CPU com modelos pequenos (1–3B). No entanto, a latência de autocompletar em CPU é de 500ms–2s, o que parece lento comparado ao objetivo de <200ms para uma codificação fluida. Para máquinas apenas com CPU, Cline + Ollama com um modelo rápido de 1B ou 3B oferece melhor controle de latência.',
          },
          {
            q: 'Posso usar esses plugins com o LM Studio em vez do Ollama?',
            a: 'Sim. O LM Studio expõe uma API compatível com OpenAI na porta 1234 por padrão. Defina o provedor do seu plugin como "openai" com a URL base `http://localhost:1234/v1` e use qualquer nome de modelo da sua biblioteca do LM Studio. Cline, Continue e Aider suportam essa configuração. Note que isso é diferente do sistema de plugins próprio do LM Studio (veja a seção Melhores plugins do LM Studio acima) — aquele serve para estender o próprio LM Studio, não para conectar uma IDE externa a ele.',
          },
          {
            q: 'Quais IDEs JetBrains suportam plugins de LLM local?',
            a: 'Cline e Continue oferecem plugins JetBrains que cobrem toda a família JetBrains: IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand e Rider. Instale pelo JetBrains Marketplace (não pelo VS Code Marketplace) e configure as mesmas definições de provedor Ollama/LM Studio da versão para VS Code. O Tabby também tem suporte JetBrains apenas para autocompletar.',
          },
          {
            q: 'O que é o Bodega One Code, e como ele difere do Cline?',
            a: 'O Bodega One Code é uma IDE de IA independente, gratuita e local-first, com um agente de codificação integrado — diferente do Cline, que é um plugin adicionado ao VS Code ou JetBrains, o Bodega One Code é uma IDE completa construída ao redor do agente desde o início. Ele oferece suporte a bring-your-own-LLM (BYOL), ou seja, você o conecta a qualquer backend de modelo local; ele roda inteiramente offline com suporte a air-gap e não exige assinatura. É uma boa opção para ambientes regulados ou isolados de rede onde um editor conectado à nuvem simplesmente não pode ser usado.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[DeepSeek vs Qwen para Coding Local 2026: Qual Vence?](/pt/power-local-llm/deepseek-vs-qwen-coding-local-2026) -- comparação DeepSeek vs Qwen para coding — escolha o modelo antes de configurar o plugin IDE',
          '[Substituir o GitHub Copilot por um LLM local](/pt/power-local-llm/replace-github-copilot-with-local-llm) -- guia completo para migrar do Copilot para um modelo auto-hospedado',
          '[Melhores modelos de coding local 2026](/pt/power-local-llm/best-local-coding-models-2026) -- quais modelos funcionam melhor no VS Code e JetBrains',
          '[Continue.dev vs Cline vs Aider: Ferramentas de coding LLM local 2026](/pt/power-local-llm/continue-dev-vs-cline-vs-aider-local) -- compare ferramentas IDE que funcionam com backends LLM locais',
          '[Melhores ferramentas RAG para documentos corporativos 2026](/pt/power-local-llm/best-rag-tools-for-business-documents-2026) -- expanda a IA de coding local com recuperação de documentos',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O Continue pode substituir completamente o GitHub Copilot para uso local?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A partir de junho de 2026, o Continue foi adquirido pela Cursor e a v2.0.0 é sua versão final. A extensão continua funcionando com Ollama, mas o Cline é agora a alternativa open-source mantida recomendada — gratuito com BYOK, funciona no VS Code e no JetBrains e adiciona edição agêntica de arquivos.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual plugin funciona melhor para refatoração multiarquivo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cline (VS Code + JetBrains) ou Aider (terminal). Ambos leem vários arquivos e fazem edições coordenadas. O Cline é melhor para feedback visual; o Aider para commits com reconhecimento de git. Use modelos de 32B para refatorações complexas confiáveis.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais IDEs JetBrains suportam plugins de LLM local?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cline e Continue oferecem plugins JetBrains cobrindo IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand e Rider. Instale pelo JetBrains Marketplace e use as mesmas configurações de provedor Ollama/LM Studio da versão para VS Code.',
          },
        },
        {
          '@type': 'Question',
          name: 'O que é o Bodega One Code, e como ele difere do Cline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O Bodega One Code é uma IDE de IA independente, gratuita e local-first, com agente de codificação integrado, bring-your-own-LLM (BYOL) e operação completa offline/air-gap sem assinatura. Diferente do Cline, que é um plugin adicionado ao VS Code ou JetBrains, o Bodega One Code é uma IDE completa construída ao redor do agente desde o início.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Melhores plugins de IDE para LLMs locais 2026',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: 'Melhor no geral — mantido ativamente, agêntico, VS Code + JetBrains, gratuito (BYOK)' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: 'Melhor IDE local-first gratuita com agente de codificação integrado — BYOL, suporte completo offline/air-gap, sem assinatura' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: 'Ainda funcional, mas sem manutenção desde a aquisição pela Cursor em junho de 2026' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: 'Melhor autocompletar self-hosted — modelos FIM 1–3B, todos os editores' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: 'Melhor nativo de terminal — com reconhecimento de git, edições multiarquivo, open-source' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: 'Melhor comercial — suporte a modelos locais, $20/mês Pro' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Melhores plugins de IDE para LLMs locais em 2026 (VS Code e JetBrains)',
      description: 'Comparação classificada de Cline, Continue, Tabby, Aider e Cursor para uso de LLM local no VS Code e JetBrains, além do ecossistema próprio de plugins do LM Studio. Inclui guias de configuração, recomendações de modelos e comparação de desempenho.',
      datePublished: '2026-05-26',
      dateModified: '2026-07-21',
      url: 'https://www.promptquorum.com/pt/power-local-llm/best-local-llm-ide-plugins-2026',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: 'أفضل إضافات ⁨IDE⁩ لنماذج ⁨LLM⁩ المحلية في ⁨2026⁩ (⁨VS Code⁩ و⁨JetBrains⁩)',
    seoTitle: 'إضافات ⁨IDE⁩ لـ⁨LLM⁩ المحلي ⁨2026⁩: ⁨Continue⁩ و⁨Cline⁩ و⁨Aider⁩',
    metaDescription: '⁨Continue⁩ أفضل إضافة ⁨IDE⁩ مجانية لـ⁨LLMs⁩ المحلية ⁨2026⁩ مع دعم ⁨Ollama⁩ و⁨LM Studio. Cline⁩ و⁨Aider⁩ و⁨Cursor⁩ مقارَنة حسب الإكمال التلقائي ونافذة السياق.',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-ar.webp',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**تُعد Cline (لبيئتي VS Code وJetBrains) أفضل إضافة IDE مجانية لنماذج LLM المحلية في منتصف 2026: تتصل بشكل أصلي بـOllama وأي واجهة برمجة تطبيقات متوافقة مع OpenAI، وتدعم تحرير الملفات الوكيلي وأوامر الطرفية وأدوات MCP، وتعمل بالكامل على جهازك. ملاحظة: استحوذت Cursor على Continue.dev (التي كانت مصنّفة سابقاً في المرتبة الأولى) في يونيو 2026 — الإصدار v2.0.0 هو إصدارها الأخير.**',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل إضافة IDE لتشغيل نماذج الذكاء الاصطناعي المحلية أثناء البرمجة؟',
        answer: 'تُعد Cline (مجانية، مفتوحة المصدر، BYOK) الآن أفضل إضافة IDE لـOllama ونماذج LLM المحلية — بعد استحواذ Cursor على Continue.dev في يونيو 2026 وتجميد مستودعه عند الإصدار v2.0.0. تعمل Cline في VS Code وJetBrains، وتدعم تحرير الملفات الوكيلي وأدوات MCP. للإكمال التلقائي فقط، تُعد Tabby الخيار الأخف. يعمل Aider بشكل أفضل في الطرفية.',
        bullets: [
          'Cline: الأفضل عموماً، ويتم صيانتها بفعالية — تقرأ/تكتب الملفات، تنفذ أوامر الطرفية، تستخدم أدوات MCP، VS Code + JetBrains (بما في ذلك PyCharm وPhpStorm وRider)، مجانية (BYOK) أو ClinePass بـ9.99$/شهر',
          'Bodega One Code: IDE مستقل محلي أولاً مجاني (وليس إضافة) — وكيل برمجة مدمج، bring-your-own-LLM، دعم كامل بلا اتصال/معزول تماماً، دون اشتراك',
          'Continue: لا تزال تعمل لكن لم يعد يتم صيانتها (استحوذت عليها Cursor في يونيو 2026، v2.0.0 هو الإصدار النهائي) — تعمل مع Ollama، دون أي تطوير إضافي',
          'Tabby: أفضل إكمال تلقائي self-hosted — يشغّل خادم استدلال خاص به، نماذج 1–3B',
          'Aider: الأفضل للطرفية — يدرك git، تعديلات متعددة الملفات، ممتاز مع نماذج 14B+',
          'Cursor: أفضل خيار تجاري — دعم النماذج المحلية مُضاف لكنه مصمم أساساً للسحابة',
        ],
        updatedDate: '2026-07-21',
      },
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'استحوذت Cursor على Continue.dev (يونيو 2026) — v2.0.0 هو الإصدار النهائي، والمستودع للقراءة فقط؛ لا يزال يعمل مع Ollama لكن دون صيانة',
          'أصبحت Cline الآن أفضل بديل مجاني (BYOK) يتم صيانته بفعالية: VS Code + JetBrains، تحرير ملفات وكيلي، أدوات MCP، أكثر من 5 ملايين تثبيت',
          'Bodega One Code هو IDE مجاني محلي أولاً بوكيل برمجة مدمج ودعم bring-your-own-LLM (BYOL) — عمل كامل بلا اتصال/معزول تماماً (air-gap)، دون الحاجة لاشتراك',
          'تشغّل Tabby خادم استدلالها الخاص (نماذج 1–3B) — أقل زمن استجابة للإكمال التلقائي للفرق',
          'Aider هو الخيار الموجّه للطرفية — يدرك كومات git، إعادة كتابة متعددة الملفات، أكثر من 44 ألف نجمة على GitHub',
          'استحوذت Cursor ($20/شهر Pro، بنظام أرصدة) على كل من Supermaven وContinue.dev؛ ووافقت SpaceX على الاستحواذ على Cursor بـ60 مليار دولار في يونيو 2026',
          'الأدوات الأربع كلها تعمل مع Ollama؛ Tabby فقط يتطلب خادم خلفية خاصاً به',
        ],
      },
      rankedList: {
        title: 'أفضل إضافات IDE لنماذج LLM المحلية — مُصنَّفة',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'تُعد Cline أفضل إضافة IDE لنماذج LLM المحلية في 2026 لأنها تدعم Ollama بشكل أصلي، وتعمل في VS Code وJetBrains على حدٍّ سواء، وتضيف تحرير ملفات وكيلياً وأدوات MCP دون أي اعتماد على السحابة — بينما استحوذت Cursor على Continue، الفائز السابق بالمرتبة الأولى، في يونيو 2026 ولم تعد تطويرها نشطاً.',
          },
          {
            type: 'plain-terms',
            text: 'تقوم إضافة IDE لنماذج LLM المحلية بتوصيل محرر الكود (VS Code أو IntelliJ) بنموذج يعمل على جهازك الخاص (عبر Ollama أو LM Studio أو llama.cpp). يرى النموذج كودك ويستجيب — لا يخرج أي كود من جهازك، ولا رسوم API، ولا حدود للاستخدام.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Cline — الأفضل عموماً (مجانية، مفتوحة المصدر، تتم صيانتها بفعالية)',
            content: 'تُعد Cline (المعروفة سابقاً بـClaude Dev) إضافة البرمجة الوكيلية الأفضل صيانةً لنماذج LLM المحلية في 2026 — تصدّرت الترتيب بعد استحواذ Cursor على Continue في يونيو 2026. تقرأ وتكتب الملفات، وتنفذ أوامر الطرفية، وتتصفح الويب (عبر أداة المتصفح)، وتستخدم خوادم MCP. مع Ollama + Qwen3-Coder 32B، يمكن لـCline تنفيذ ميزات كاملة من موجّه واحد. القيود: النماذج بحجم 32B ضرورية للمهام الوكيلية الموثوقة متعددة الخطوات؛ نماذج 14B تعمل للمهام البسيطة. الأسعار: مجانية (BYOK — أحضر مفتاح API الخاص بك من Anthropic أو OpenAI أو أكثر من 30 مزوداً)؛ ClinePass بـ9.99$/شهر لتوجيه مُدار دون الحاجة لمفتاح API؛ Teams بـ20$/مستخدم/شهر (أول 10 مقاعد مجانية). VS Code وJetBrains (IntelliJ وPyCharm وPhpStorm وWebStorm وGoLand وRider والمزيد). الخلفيات المتوافقة: Ollama وLM Studio وLiteLLM proxy وأكثر من 30 مزود سحابي. أكثر من 8 ملايين مطوّر.',
            affiliateLinks: [
              { label: 'Cline في VS Code Marketplace (مجاني)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — أفضل IDE مجاني محلي أولاً بوكيل برمجة مدمج',
            content: 'يُعد Bodega One Code بيئة تطوير (IDE) مجانية تعتمد مبدأ "محلي أولاً"، مصمَّمة من الأساس حول وكيل برمجة بدلاً من كونها مساعداً أُضيف لاحقاً إلى محرر موجود. يدعم مبدأ bring-your-own-LLM (BYOL): تتصل به بأي خلفية نموذج محلي، ويقوم الوكيل بتنفيذ التخطيط والتحرير والتنفيذ بالكامل مقابل ذلك النموذج، دون ارتباط بمزوّد واحد. يعمل التطبيق بأكمله على جهازك، مع دعم كامل للعمل بلا اتصال (offline) وفي بيئات معزولة تماماً (air-gap) — لذا يعمل في بيئات معزولة عن الشبكة لا يمكن لأدوات متصلة بالسحابة مثل Cursor أو GitHub Copilot العمل فيها إطلاقاً. لا يتطلب اشتراكاً: Bodega One Code مجاني الاستخدام، ولأنه لا يحتوي على أي مكوّن سحابي، فلا يوجد قياس استخدام أو نظام أرصدة لإدارته. هذا يجعله خياراً جيداً للقطاعات الخاضعة للرقابة، والمقاولين الحكوميين والدفاعيين، وأي فريق تمنع سياسته الأمنية إرسال الكود إلى خادم طرف ثالث — وهو نفس الجمهور الذي يبحث أصلاً عن الاستدلال المحلي. مقارنةً بـCline، وهو إضافة تُضاف إلى VS Code، فإن Bodega One Code بيئة تطوير مستقلة صُمِّمت حول الوكيل منذ البداية؛ الفرق التي تستخدم VS Code بالفعل ستجد في Cline الإضافة الأسهل، بينما الفرق التي تبدأ من الصفر أو تحتاج إلى ضمان العمل دون اتصال بالإنترنت تحصل مع Bodega One Code على بيئة مبنية خصيصاً لهذا الغرض.',
            affiliateLinks: [
              { label: 'Bodega One Code (مجاني، الموقع الرسمي)', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — لا تزال تعمل لكن لم يعد يتم صيانتها [استحوذت عليها Cursor في يونيو 2026 — الإصدار النهائي v2.0.0]',
            content: 'كانت Continue المساعد البرمجي الرائد مفتوح المصدر لنماذج LLM المحلية قبل استحواذ Cursor عليها في يونيو 2026. تتصل بـOllama وLM Studio وllama.cpp وأي API متوافقة مع OpenAI. الميزات: دردشة داخل المحرر (Cmd+L)، إكمال تلقائي (Tab)، أدوات بروتوكول سياق النموذج (MCP)، فهرسة قاعدة الكود وأوامر slash مخصصة. تجاوزت تثبيتات إضافة VS Code 2 مليون. إضافة JetBrains تعمل في IntelliJ وPyCharm وGoLand وWebStorm وRider. أفضل النماذج المحلية: Qwen3-Coder 14B (للبرمجة)، Llama 3.3 8B (للدردشة). الإعداد: ثبّت الإضافة، عيّن المزوّد على Ollama، اختر النموذج — ينتهي الأمر خلال دقيقتين. ملاحظة (يونيو 2026): استحوذت Cursor على Continue. الإصدار 2.0.0 هو الإصدار النهائي؛ مستودع GitHub أصبح للقراءة فقط. لا تزال الإضافة تُثبَّت وتعمل بالكامل مع Ollama وBYO-LLM — لكن دون أي تطوير إضافي من الفريق الأصلي. تظل النسخ المتفرعة (forks) من المجتمع نشطة.',
            affiliateLinks: [
              { label: 'Continue في VS Code Marketplace (مجاني)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — أفضل خادم إكمال تلقائي self-hosted',
            content: 'Tabby هو مساعد برمجة self-hosted يشغّل خادم استدلاله الخاص (منفصل عن Ollama). يستخدم نماذج صغيرة متخصصة لإكمال الكود (1–3B معامل) مُدرَّبة خصيصاً للإكمال التلقائي fill-in-the-middle (FIM) — أسرع بشكل ملحوظ من استخدام نموذج 7B للأغراض العامة. توجد إضافات IDE لـTabby في VS Code وJetBrains وVim/Neovim وEmacs. مثالي للفرق التي تريد إكمالاً تلقائياً سريعاً (<200ms) دون السحابة. يتطلب خادماً مخصصاً أو جهاز سطح مكتب قوي.',
            affiliateLinks: [
              { label: 'Tabby على GitHub (مفتوح المصدر، self-hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — أفضل برمجة ذكاء اصطناعي أصيلة للطرفية',
            content: 'Aider هو مبرمج زوجي مبني على الطرفية يتكامل مع git. يفهم هيكل مستودعك بالكامل، ويجري تعديلات متعددة الملفات، ويُعمل commit للتغييرات تلقائياً. يعمل مع Ollama (عبر --model ollama/qwen2.5-coder:14b) وLM Studio وأي API متوافقة مع OpenAI. أفضل النماذج المحلية: Qwen3-Coder 32B (وضع المهندس المعماري) + Qwen3-Coder 7B (وضع المحرر). يستخدم Aider نهج النموذجَين: نموذج كبير يخطط للتغييرات، ونموذج صغير ينفذها. مجاني ومفتوح المصدر.',
            affiliateLinks: [
              { label: 'Aider على GitHub (مفتوح المصدر)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — أفضل خيار تجاري مع دعم النماذج المحلية',
            content: 'Cursor هو fork من VS Code مع ميزات ذكاء اصطناعي مدمجة. يدعم Cursor النماذج المحلية عبر Ollama وLM Studio في إعداد "Custom API". إلا أن أقوى ميزات Cursor (وضع Agent مع بحث الويب، والوعي الكامل بقاعدة الكود) تتطلب نماذج سحابية. الأسعار: Hobby (مجاني)؛ Pro بـ20$/شهر (يتضمن 20$ من أرصدة الذكاء الاصطناعي للنماذج الحدية؛ وضع Auto غير محدود بدون تكلفة)؛ Pro+ بـ60$/شهر؛ Ultra بـ200$/شهر. استخدام النماذج المحلية: مستوى Hobby. ملاحظة: استحوذ Cursor على Supermaven (2024) وContinue.dev (يونيو 2026)؛ وافقت SpaceX على الاستحواذ على Cursor بـ60 مليار دولار في يونيو 2026 (إتمام المعاملة متوقع في الربع الثالث 2026).',
            affiliateLinks: [
              { label: 'اشتراك Cursor Pro', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-ar.webp',
        imageCaption: 'أفضل إضافات IDE للنماذج المحلية، مرتبة -- تصنيف 2026',
      },
      setupGuide: {
        title: 'الإعداد السريع: Cline + Ollama في VS Code',
        content: 'أسرع طريقة لبدء البرمجة بنموذج LLM محلي باستخدام الخيار الأول الحالي:',
        numberedItems: [
          'ثبّت Ollama: `curl -fsSL https://ollama.com/install.sh | sh`',
          'حمّل نموذج برمجة: `ollama pull qwen2.5-coder:14b` (أو `qwen3-coder:32b` للمهام الوكيلية)',
          'في VS Code، ثبّت Cline من سوق الإضافات',
          'افتح الشريط الجانبي لـCline وانقر على أيقونة الإعدادات (الترس)',
          'عيّن API Provider على "Ollama"، وBase URL على `http://localhost:11434`، وModel ID على النموذج الذي حمّلته',
          'أعد تشغيل VS Code — تظهر أيقونة Cline في الشريط الجانبي',
          'اكتب مهمة في لوحة دردشة Cline — يمكنها قراءة/كتابة الملفات وتنفيذ أوامر الطرفية مباشرةً',
        ],
      },
      aiderSetupGuide: {
        title: 'الإعداد السريع: Aider + Ollama (الطرفية)',
        content: 'للبرمجة الذكية الأصيلة في الطرفية والمدركة لـgit — التوثيق الرسمي لـAider: aider.chat/docs/llms/ollama.html',
        numberedItems: [
          'ثبّت Ollama وحمّل نموذجاً: `ollama pull qwen2.5-coder:32b`',
          'ثبّت Aider: `python -m pip install aider-install && aider-install`',
          'عيّن قاعدة API الخاصة بـOllama: `export OLLAMA_API_BASE=http://127.0.0.1:11434`',
          'شغّل Aider موجَّهاً إلى نموذجك المحلي: `aider --model ollama/qwen2.5-coder:32b`',
          'لإعداد النموذجَين (مهندس معماري/محرر)، أضف `--architect-model ollama/qwen2.5-coder:32b --editor-model ollama/qwen2.5-coder:7b`',
          'يقوم Aider تلقائياً بعمل commit لكل تغيير في git — راجع باستخدام `git log` أو `git diff HEAD~1`',
        ],
      },
      modelRecommendations: {
        title: 'أفضل النماذج المحلية حسب الإضافة والمهمة',
        columns: ['الإضافة', 'أفضل نموذج برمجة (محلي)', 'أفضل نموذج دردشة (محلي)', 'الحد الأدنى من VRAM'],
        rows: [
          { 'الإضافة': 'Cline', 'أفضل نموذج برمجة (محلي)': 'Qwen3-Coder 32B Q4', 'أفضل نموذج دردشة (محلي)': 'Qwen3 32B Q4', 'الحد الأدنى من VRAM': '24 GB' },
          { 'الإضافة': 'Bodega One Code', 'أفضل نموذج برمجة (محلي)': 'أي نموذج محلي (BYOL)', 'أفضل نموذج دردشة (محلي)': 'أي نموذج محلي (BYOL)', 'الحد الأدنى من VRAM': 'يعتمد على النموذج المختار' },
          { 'الإضافة': 'Continue (قديم)', 'أفضل نموذج برمجة (محلي)': 'Qwen3-Coder 14B Q8', 'أفضل نموذج دردشة (محلي)': 'Llama 3.3 8B Q4', 'الحد الأدنى من VRAM': '16 GB' },
          { 'الإضافة': 'Tabby', 'أفضل نموذج برمجة (محلي)': 'StarCoder2-7B (مدمج)', 'أفضل نموذج دردشة (محلي)': 'غير متاح (الكود فقط)', 'الحد الأدنى من VRAM': '8 GB' },
          { 'الإضافة': 'Aider', 'أفضل نموذج برمجة (محلي)': 'Qwen3-Coder 14B (محرر)', 'أفضل نموذج دردشة (محلي)': 'Qwen3-Coder 32B (مهندس معماري)', 'الحد الأدنى من VRAM': '16–24 GB' },
          { 'الإضافة': 'Cursor', 'أفضل نموذج برمجة (محلي)': 'DeepSeek-Coder-V2 (عبر Ollama)', 'أفضل نموذج دردشة (محلي)': 'Qwen3 14B', 'الحد الأدنى من VRAM': '16 GB' },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-ar.webp',
        imageCaption: 'أفضل النماذج المحلية حسب إضافة IDE -- نموذج البرمجة والحد الأدنى للذاكرة',
      },
      lmStudioPlugins: {
        title: 'أفضل إضافات LM Studio (ليست نفسها إضافات IDE)',
        content: 'هذا سؤال مختلف عن "أي إضافة IDE تتصل بـLM Studio" (تم تناوله أعلاه). يمتلك LM Studio نظام إضافات خاصاً به منذ أواخر 2024: تعمل الإضافات داخل LM Studio نفسه — ككود TypeScript أو Python في عامل معزول (sandbox) — ويمكنها اعتراض طلبات الاستدلال، وإضافة معالجات موجهات (prompt processors)، وربط خلفيات استدعاء الأدوات، أو إضافة لوحات واجهة مستخدم جديدة. ثبّتها من السوق المنسّق على lmstudio.ai/plugins؛ تعلن كل إضافة عن الأذونات المطلوبة مسبقاً (الوصول للشبكة، قراءة نظام الملفات)، ويمكنك إلغاءها لاحقاً من الإعدادات دون إلغاء التثبيت. الفئات الشائعة اعتباراً من 2026: إضافات البحث على الويب، معالجات RAG/استرداد المستندات المسبقة، معالجات OCR المسبقة، إضافات مجموعات الأدوات الوكيلية، أدوات الوصول للصدفة/الملفات، وإضافات الذاكرة.',
        items: [
          '**إضافات البحث على الويب**: تتيح لنموذج محلي في LM Studio جلب نتائج ويب حية إلى سياقه — مفيدة لأن النماذج المحلية لا تملك وصولاً مدمجاً إلى الإنترنت.',
          '**إضافات RAG / المستندات**: تُفهرس مجلداً محلياً من ملفات PDF أو النصوص وتسترجع المقاطع ذات الصلة تلقائياً لكل استعلام.',
          '**إضافات مجموعات الأدوات الوكيلية**: تمنح النموذج وصولاً للصدفة، وقراءة/كتابة الملفات، أو تنفيذ مهام متعددة الخطوات مباشرةً داخل واجهة دردشة LM Studio نفسها — نفس فئة القدرات التي توفرها Cline لـVS Code، لكنها تعمل داخل LM Studio بدلاً من محرر.',
          '**إضافات الذاكرة**: تحافظ على السياق عبر جلسات الدردشة بدلاً من البدء من جديد في كل مرة.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'هل يمكن لـContinue أن يحل محل GitHub Copilot بالكامل للاستخدام المحلي؟',
            a: 'اعتباراً من يونيو 2026، استحوذت Cursor على Continue، والإصدار v2.0.0 هو الإصدار النهائي (المستودع للقراءة فقط). لا تزال الإضافة تعمل مع Ollama وBYO-LLM، لكنها لا تتلقى أي تطوير إضافي من الفريق الأصلي. كبديل مفتوح المصدر يتم صيانته بفعالية، تُعد Cline البديل الموصى به — فهي تقدّم نفس نموذج BYOK، وتعمل في VS Code وJetBrains، وتضيف تحرير ملفات وكيلياً. يكلف GitHub Copilot Pro 10$/شهر مع 15$/شهر من أرصدة الذكاء الاصطناعي؛ Cline مجانية بمفتاح API الخاص بك.',
          },
          {
            q: 'أي إضافة تعمل بشكل أفضل لإعادة الهيكلة متعددة الملفات؟',
            a: 'Cline أو Aider. كلاهما يمكنه قراءة ملفات متعددة وفهم التبعيات وإجراء تعديلات منسقة في قاعدة الكود. يعمل Cline داخل VS Code (أفضل للتغذية الراجعة المرئية)؛ يعمل Aider في الطرفية (أفضل لتكامل CI/CD وcommits المدركة لـgit). للنماذج بحجم 30B+ مع 24 GB من VRAM، يتعامل Cline مع Qwen3-Coder 32B مع إعادة الهيكلة المعقدة بشكل موثوق.',
          },
          {
            q: 'هل يعمل Tabby بدون GPU؟',
            a: 'نعم — يمكن لـTabby العمل على CPU مع نماذج صغيرة (1–3B). إلا أن زمن استجابة الإكمال التلقائي على CPU يتراوح بين 500ms و2s، وهو بطيء مقارنةً بهدف <200ms للبرمجة السلسة. للأجهزة التي تعمل بـCPU فقط، يوفر Cline + Ollama مع نموذج سريع بحجم 1B أو 3B تحكماً أفضل في زمن الاستجابة.',
          },
          {
            q: 'هل يمكنني استخدام هذه الإضافات مع LM Studio بدلاً من Ollama؟',
            a: 'نعم. يعرض LM Studio API متوافقة مع OpenAI على المنفذ 1234 افتراضياً. عيّن موفر الإضافة على "openai" مع عنوان URL الأساسي `http://localhost:1234/v1` واستخدم أي اسم نموذج من مكتبة LM Studio. تدعم Cline وContinue وAider جميعها هذا الإعداد. لاحظ أن هذا يختلف عن نظام إضافات LM Studio الخاص به (انظر قسم "أفضل إضافات LM Studio" أعلاه) — فذلك مخصص لتوسيع LM Studio نفسه، وليس لتوصيل IDE خارجي به.',
          },
          {
            q: 'ما بيئات JetBrains التي تدعم إضافات LLM المحلية؟',
            a: 'توفر كل من Cline وContinue إضافات JetBrains تغطي عائلة JetBrains بأكملها: IntelliJ IDEA وPyCharm وPhpStorm وWebStorm وGoLand وRider. ثبّتها من JetBrains Marketplace (وليس VS Code Marketplace) واضبط نفس إعدادات موفر Ollama/LM Studio كما في نسخة VS Code. تدعم Tabby أيضاً JetBrains للإكمال التلقائي فقط.',
          },
          {
            q: 'ما هو Bodega One Code، وكيف يختلف عن Cline؟',
            a: 'Bodega One Code هو بيئة تطوير (IDE) مستقلة ومجانية تعتمد مبدأ "محلي أولاً"، بوكيل برمجة مدمج — على عكس Cline، وهو إضافة تُضاف إلى VS Code أو JetBrains، فإن Bodega One Code بيئة تطوير كاملة صُمِّمت حول الوكيل منذ البداية. يدعم bring-your-own-LLM (BYOL)، أي أنك تتصل به بأي خلفية نموذج محلي، ويعمل بالكامل دون اتصال بالإنترنت مع دعم العزل التام (air-gap)، ولا يتطلب اشتراكاً. إنه خيار جيد للبيئات الخاضعة للرقابة أو المعزولة عن الشبكة حيث لا يمكن ببساطة استخدام محرر متصل بالسحابة.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'مقالات ذات صلة',
        items: [
          '[DeepSeek مقابل Qwen للبرمجة المحلية 2026: من يفوز؟](/ar/power-local-llm/deepseek-vs-qwen-coding-local-2026) -- مقارنة DeepSeek مقابل Qwen للبرمجة — اختر النموذج قبل إعداد إضافة IDE',
          '[استبدال GitHub Copilot بنموذج LLM محلي](/ar/power-local-llm/replace-github-copilot-with-local-llm) -- دليل كامل للتحول من Copilot إلى نموذج مستضاف ذاتياً',
          '[أفضل نماذج البرمجة المحلية 2026](/ar/power-local-llm/best-local-coding-models-2026) -- أفضل النماذج أداءً داخل VS Code وJetBrains',
          '[Continue.dev مقابل Cline مقابل Aider: أدوات البرمجة المحلية LLM 2026](/ar/power-local-llm/continue-dev-vs-cline-vs-aider-local) -- مقارنة أدوات IDE المتوافقة مع خلفيات LLM المحلية',
          '[أفضل أدوات RAG لوثائق الشركات 2026](/ar/power-local-llm/best-rag-tools-for-business-documents-2026) -- توسيع ذكاء البرمجة المحلي باسترداد الوثائق',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'هل يمكن لـContinue أن يحل محل GitHub Copilot بالكامل للاستخدام المحلي؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'اعتباراً من يونيو 2026، استحوذت Cursor على Continue والإصدار v2.0.0 هو إصدارها النهائي. لا تزال الإضافة تعمل مع Ollama، لكن Cline أصبحت الآن البديل المفتوح المصدر الموصى به الذي يتم صيانته بفعالية — مجانية بنظام BYOK، تعمل في VS Code وJetBrains، وتضيف تحرير ملفات وكيلياً.',
          },
        },
        {
          '@type': 'Question',
          name: 'أي إضافة تعمل بشكل أفضل لإعادة الهيكلة متعددة الملفات؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cline (VS Code + JetBrains) أو Aider (الطرفية). كلاهما يقرآن ملفات متعددة ويجريان تعديلات منسقة. Cline أفضل للتغذية الراجعة المرئية؛ Aider أفضل لـcommits المدركة لـgit. استخدم نماذج 32B لإعادة هيكلة معقدة موثوقة.',
          },
        },
        {
          '@type': 'Question',
          name: 'ما بيئات JetBrains التي تدعم إضافات LLM المحلية؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'توفر كل من Cline وContinue إضافات JetBrains تغطي IntelliJ IDEA وPyCharm وPhpStorm وWebStorm وGoLand وRider. ثبّتها من JetBrains Marketplace واستخدم نفس إعدادات موفر Ollama/LM Studio كما في نسخة VS Code.',
          },
        },
        {
          '@type': 'Question',
          name: 'ما هو Bodega One Code، وكيف يختلف عن Cline؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bodega One Code هو بيئة تطوير مستقلة ومجانية تعتمد مبدأ "محلي أولاً"، بوكيل برمجة مدمج، ودعم bring-your-own-LLM (BYOL)، وعمل كامل دون اتصال بالإنترنت مع دعم العزل التام (air-gap) دون اشتراك. على عكس Cline، وهو إضافة تُضاف إلى VS Code أو JetBrains، فإن Bodega One Code بيئة تطوير كاملة صُمِّمت حول الوكيل منذ البداية.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'أفضل إضافات IDE لنماذج LLM المحلية 2026',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: 'الأفضل عموماً — يتم صيانتها بفعالية، وكيلية، VS Code + JetBrains، مجانية (BYOK)' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: 'أفضل IDE مجاني محلي أولاً بوكيل برمجة مدمج — BYOL، دعم كامل بلا اتصال/معزول تماماً، دون اشتراك' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: 'لا تزال تعمل لكن دون صيانة منذ استحواذ Cursor في يونيو 2026' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: 'أفضل إكمال تلقائي self-hosted — نماذج FIM 1–3B، جميع المحررات' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: 'الأفضل أصيلاً للطرفية — يدرك git، تعديلات متعددة الملفات، مفتوح المصدر' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: 'الأفضل تجارياً — دعم النماذج المحلية، 20$/شهر Pro' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'أفضل إضافات IDE لنماذج LLM المحلية في 2026 (VS Code وJetBrains)',
      description: 'مقارنة مُصنَّفة لـCline وContinue وTabby وAider وCursor لاستخدام LLM محلي في VS Code وJetBrains، إضافة إلى نظام الإضافات الخاص بـLM Studio. يتضمن دليل الإعداد وتوصيات النماذج ومقارنة الأداء.',
      datePublished: '2026-05-26',
      dateModified: '2026-07-21',
      url: 'https://www.promptquorum.com/ar/power-local-llm/best-local-llm-ide-plugins-2026',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
  },
}
