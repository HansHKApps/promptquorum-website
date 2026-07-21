import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: 'Best IDE Plugins for Local LLMs in 2026 (VS Code & JetBrains)',
    seoTitle: 'Best Local LLM IDE Plugins 2026 (VS Code & JetBrains)',
    metaDescription: 'Cline, Continue, Aider, Cursor — ranked for local model support in 2026, plus LM Studio\'s own plugins. Which connects to Ollama or llama.cpp best?',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-en.png',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Cline (VS Code + JetBrains) is the best free IDE plugin for local LLMs in mid-2026: it connects natively to Ollama and any OpenAI-compatible API, supports agentic file editing + terminal commands + MCP tools, and runs entirely on your hardware. Note: Continue.dev (previously ranked #1) was acquired by Cursor in June 2026 — v2.0.0 is its final release.**',
    quickAnswerTop: {
      question: 'What is the best IDE plugin for running local AI models while coding?',
      answer: 'Cline (free, open-source BYOK) is now the best IDE plugin for Ollama and local LLMs — after Continue.dev was acquired by Cursor in June 2026 and its repo frozen at v2.0.0. Cline works in VS Code and JetBrains, supports agentic file editing and MCP tools. For autocomplete-only, Tabby is the lightest option. Aider works best in the terminal.',
      bullets: [
        'Cline: best overall, actively maintained — reads/writes files, runs terminal commands, uses MCP tools, VS Code + JetBrains (incl. PyCharm, PhpStorm, Rider), free BYOK or $9.99/mo ClinePass',
        'Bodega One Code: free, local-first full IDE (not a plugin) — built-in coding agent, bring-your-own-LLM, complete offline/air-gap support, no subscription',
        'Continue: still functional but unmaintained (acquired by Cursor June 2026, v2.0.0 final) — runs with Ollama, no further development',
        'Tabby: best self-hosted autocomplete — runs its own inference server, 1–3B models',
        'Aider: best terminal-native — git-aware, multi-file edits, excellent with 14B+ models',
        'Cursor: best commercial option — local model support added but cloud-first by design',
      ],
      updatedDate: '2026-07-21',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev acquired by Cursor (June 2026) — v2.0.0 is the final release, repo read-only; still runs with Ollama but no longer maintained',
          'Cline is now the best maintained free BYOK alternative: VS Code + JetBrains, agentic file editing, MCP tools, 5M+ installs',
          'Bodega One Code is a free, local-first IDE with a built-in coding agent and bring-your-own-LLM (BYOL) support — full offline/air-gap operation, no subscription required',
          'Tabby runs its own inference server (1–3B models) — lowest latency autocomplete for teams',
          'Aider is the terminal-first option — git-commit-aware, multi-file rewrites, 44K GitHub stars',
          'Cursor ($20/month Pro, credit-based) acquired both Supermaven and Continue.dev; SpaceX agreed to acquire Cursor for $60B in June 2026',
          'All tools work with Ollama; only Tabby requires its own backend server',
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
            content: 'Cline (formerly Claude Dev) is the best-maintained agentic coding plugin for local LLMs in 2026 — it took the top spot after Continue was acquired by Cursor in June 2026. It reads and writes files, runs terminal commands, browses the web (via browser tool), and uses MCP servers. With Ollama + Qwen3-Coder 32B, Cline can implement entire features from a prompt. Limitations: 32B models are required for reliable multi-step agentic tasks; 14B models work for simple tasks. Pricing: free (BYOK — bring your own API key from Anthropic, OpenAI, or 30+ providers); ClinePass at $9.99/month for managed routing with no API key needed; Teams at $20/user/month (first 10 seats free). VS Code and JetBrains (IntelliJ, PyCharm, PhpStorm, WebStorm, GoLand, Rider, and more). Compatible backends: Ollama, LM Studio, LiteLLM proxy, and 30+ cloud providers. 8M+ developers.',
            affiliateLinks: [
              { label: 'Cline on VS Code Marketplace (free)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — Best Free Local-First IDE With a Built-In Coding Agent',
            content: 'Bodega One Code is a free, local-first AI IDE built around a coding agent from the ground up, rather than an assistant bolted onto an existing editor. It supports bring-your-own-LLM (BYOL): point it at any local model backend and it runs the agent loop — planning, editing, and executing — entirely against that model, with no lock-in to a single provider. The entire application runs on your machine, including full offline and air-gap support, so it works in network-isolated environments where cloud-connected tools like Cursor or GitHub Copilot cannot run at all. There is no subscription: Bodega One Code is free to use, and because it has no cloud component, there is no usage metering or credit system to manage. This makes it a strong fit for regulated industries, government and defense contractors, and any team whose security policy prohibits sending code to a third-party server — the same audience that reaches for local inference in the first place. Compared to Cline, which is a plugin layered onto VS Code, Bodega One Code is a standalone IDE designed around the agent from the start; teams already committed to VS Code will find Cline the easier drop-in, while teams starting fresh or needing guaranteed offline operation get a purpose-built environment with Bodega One Code.',
            affiliateLinks: [
              { label: 'Bodega One Code (free, official site)', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — Still Functional, No Longer Maintained [Acquired by Cursor, June 2026 — Final v2.0.0]',
            content: 'Continue was the leading open-source AI coding assistant for local LLMs before its June 2026 acquisition by Cursor. It connects to Ollama, LM Studio, llama.cpp, and any OpenAI-compatible API. Features: inline chat (Cmd+L), autocomplete (Tab), model context protocol (MCP) tools, codebase indexing, and custom slash commands. VS Code extension has 2M+ installs. JetBrains plugin works in IntelliJ, PyCharm, GoLand, WebStorm, and Rider. Best local models: Qwen3-Coder 14B (coding), Llama 3.3 8B (chat). Setup: install extension, set provider to Ollama, choose model — done in 2 minutes. Note (June 2026): Continue was acquired by Cursor. Version 2.0.0 is the final release; the GitHub repo is now read-only. The extension still installs and runs fully with Ollama and BYO-LLM — but no further development from the original team. Community forks are active.',
            affiliateLinks: [
              { label: 'Continue on VS Code Marketplace (free)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — Best Self-Hosted Autocomplete Server',
            content: 'Tabby is a self-hosted coding assistant that runs its own inference server (separate from Ollama). It uses small, specialized code completion models (1–3B parameters) trained specifically for fill-in-the-middle (FIM) autocomplete — significantly faster than using a general 7B model. Tabby IDE extensions exist for VS Code, JetBrains, Vim/Neovim, and Emacs. Best for: teams that want fast (<200ms) autocomplete without cloud. Requires a dedicated server or powerful desktop machine.',
            affiliateLinks: [
              { label: 'Tabby on GitHub (open-source, self-hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — Best Terminal-Native AI Coding',
            content: 'Aider is a terminal-based AI pair programmer that integrates with git. It understands your full repository structure, makes multi-file edits, and commits changes automatically. Works with Ollama (via --model ollama/qwen2.5-coder:14b), LM Studio, or any OpenAI-compatible API. Best local models: Qwen3-Coder 32B (architect mode) + Qwen3-Coder 7B (editor mode). Aider uses a two-model approach: a large model plans changes, a small model implements them. Cost: free and open-source.',
            affiliateLinks: [
              { label: 'Aider on GitHub (open-source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — Best Commercial Option with Local Model Support',
            content: 'Cursor is a VS Code fork with AI features built in. As of July 2026, Cursor supports local models via Ollama and LM Studio in its "Custom API" setting. However, Cursor\'s most powerful features (Agent mode with web search, full codebase awareness) require cloud models. The local model integration is functional for chat and simple completions but falls behind Cline for privacy-focused workflows. Pricing: Hobby (free); Pro at $20/month (includes $20/month in AI credits for frontier models; Auto mode is unlimited at no credit cost); Pro+ at $60/month; Ultra at $200/month. Local model use is available on the free Hobby tier. Note: Cursor acquired Supermaven (2024) and Continue.dev (June 2026), and SpaceX agreed to acquire Cursor itself for $60 billion in June 2026 (deal expected to close Q3 2026). This consolidation makes Cursor the dominant force in AI coding tools — but raises long-term questions about open-source alternatives.',
            affiliateLinks: [
              { label: 'Cursor Pro subscription', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-en.png',
        imageCaption: 'Best IDE Plugins for Local LLMs, Ranked -- 2026 rankings',
      },
      setupGuide: {
        title: 'Quick Setup: Cline + Ollama in VS Code',
        content: 'The fastest way to start local LLM coding with the current #1 pick:',
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
        content: 'For terminal-native, git-aware AI coding — Aider official docs: aider.chat/docs/llms/ollama.html',
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
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-en.png',
        imageCaption: 'Best Local Models by IDE Plugin -- Coding model and minimum VRAM',
      },
      lmStudioPlugins: {
        title: 'Best LM Studio Plugins (Not the Same as IDE Plugins)',
        content: 'This is a different question from "which IDE extension connects to LM Studio" (covered above). LM Studio has had its own plugin system since late 2024: plugins run inside LM Studio itself — as TypeScript or Python code in a sandboxed worker — and can intercept inference requests, add prompt processors, attach tool-calling backends, or add new UI panels. Install them from the curated marketplace at lmstudio.ai/plugins; each plugin declares required permissions (network access, file-system read) up front, and you can revoke them later from Settings without uninstalling. Common categories as of 2026: web search plugins, RAG/document-retrieval preprocessors, OCR preprocessors, agentic toolset plugins, shell/file-access tools, and memory plugins.',
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
            a: 'As of June 2026, Continue has been acquired by Cursor and v2.0.0 is the final release (repo is read-only). The extension still runs with Ollama and BYO-LLM, but receives no further development from the original team. For a maintained open-source alternative, Cline is the recommended replacement — it offers the same BYOK model, works in VS Code and JetBrains, and adds agentic file editing. GitHub Copilot Pro costs $10/month with $15/month in AI credits; Cline is free with your own API key.',
          },
          {
            q: 'Which plugin works best for multi-file refactoring?',
            a: 'Cline or Aider. Both can read multiple files, understand dependencies, and make coordinated edits across a codebase. Cline works inside VS Code (better for visual feedback); Aider works in the terminal (better for CI/CD integration and git-aware commits). For 30B+ models with 24 GB VRAM, Cline with Qwen3-Coder 32B handles complex refactoring reliably.',
          },
          {
            q: 'Does Tabby work without a GPU?',
            a: 'Yes — Tabby can run on CPU with small models (1–3B). However, autocomplete latency on CPU is 500ms–2s, which feels sluggish compared to the <200ms target for smooth coding. For CPU-only machines, Cline + Ollama with a fast 1B or 3B model gives better latency control.',
          },
          {
            q: 'Can I use these plugins with LM Studio instead of Ollama?',
            a: 'Yes. LM Studio exposes an OpenAI-compatible API on port 1234 by default. Set your plugin provider to "openai" with base URL `http://localhost:1234/v1` and use any model name from your LM Studio library. Cline, Continue, and Aider all support this configuration. Note this is different from LM Studio\'s own plugin system (see the LM Studio Plugins section above) — that\'s for extending LM Studio itself, not connecting an external IDE to it.',
          },
          {
            q: 'Which JetBrains IDEs support local LLM plugins?',
            a: 'Cline and Continue both ship JetBrains plugins that work across the whole JetBrains family: IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand, and Rider. Install from the JetBrains Marketplace (not the VS Code Marketplace) and configure the same Ollama/LM Studio provider settings as the VS Code version. Tabby also has JetBrains support for autocomplete-only use.',
          },
          {
            q: 'What is Bodega One Code, and how is it different from Cline?',
            a: 'Bodega One Code is a free, standalone local-first AI IDE with a built-in coding agent — unlike Cline, which is a plugin added to VS Code or JetBrains, Bodega One Code is a full IDE built around the agent from the start. It supports bring-your-own-LLM (BYOL), meaning you connect it to any local model backend, and it runs entirely offline with air-gap support and no subscription. It is a good fit for regulated or network-isolated environments where a cloud-connected editor cannot be used at all.',
          },
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
            text: 'As of June 2026, Continue was acquired by Cursor and v2.0.0 is its final release. The extension still runs with Ollama, but Cline is now the recommended maintained open-source alternative — free with BYOK, works in VS Code and JetBrains, and adds agentic file editing.',
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
          name: 'Which JetBrains IDEs support local LLM plugins?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cline and Continue both ship JetBrains plugins covering IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand, and Rider. Install from the JetBrains Marketplace and use the same Ollama/LM Studio provider settings as the VS Code version.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Bodega One Code, and how is it different from Cline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bodega One Code is a free, standalone local-first AI IDE with a built-in coding agent, bring-your-own-LLM (BYOL) support, and full offline/air-gap operation with no subscription. Unlike Cline, which is a plugin added to VS Code or JetBrains, Bodega One Code is a complete IDE built around the agent from the start.',
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
        { '@type': 'ListItem', position: 1, name: 'Cline', description: 'Best overall — actively maintained, agentic, VS Code + JetBrains, free BYOK' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: 'Best free local-first IDE with a built-in coding agent — BYOL, full offline/air-gap support, no subscription' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: 'Still functional but unmaintained since Cursor acquisition, June 2026' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: 'Best self-hosted autocomplete — 1–3B FIM models, all editors' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: 'Best terminal-native — git-aware, multi-file edits, open-source' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: 'Best commercial — local model support, $20/month Pro' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Best IDE Plugins for Local LLMs in 2026 (VS Code & JetBrains)',
      description: 'Ranked comparison of Cline, Continue, Tabby, Aider, and Cursor for local LLM use in VS Code and JetBrains, plus LM Studio\'s own plugin ecosystem. Includes setup guides, model recommendations, and performance comparison.',
      datePublished: '2026-05-26',
      dateModified: '2026-07-21',
      url: 'https://www.promptquorum.com/power-local-llm/best-local-llm-ide-plugins-2026',
      inLanguage: 'en',
      'proficiencyLevel': 'Intermediate',
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: 'Beste IDE-Plugins für lokale LLMs 2026 (VS Code & JetBrains)',
    seoTitle: 'Beste lokale LLM IDE-Plugins 2026 (VS Code & JetBrains)',
    metaDescription: 'Continue, Cline, Aider, Tabby — nach lokalem Modell-Support bewertet 2026. Welches IDE-Plugin verbindet sich am besten mit Ollama oder LM Studio?',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-de.png',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Cline (VS Code + JetBrains) ist Mitte 2026 das beste kostenlose IDE-Plugin für lokale LLMs: native Verbindung zu Ollama und beliebigen OpenAI-kompatiblen APIs, agentische Datei-Bearbeitung, Terminal-Befehle und MCP-Tools, vollständig auf eigener Hardware. Hinweis: Continue.dev (zuvor Platz 1) wurde im Juni 2026 von Cursor übernommen — Version 2.0.0 ist die letzte Veröffentlichung.**',
    quickAnswerTop: {
      question: 'Welches IDE-Plugin ist am besten für lokale KI-Modelle beim Coden?',
      answer: 'Cline (kostenlos, Open-Source, BYOK) ist jetzt das beste IDE-Plugin für Ollama und lokale LLMs — nachdem Continue.dev im Juni 2026 von Cursor übernommen und das Repository bei Version 2.0.0 eingefroren wurde. Cline funktioniert in VS Code und JetBrains und unterstützt agentische Datei-Bearbeitung sowie MCP-Tools. Für reines Autocomplete ist Tabby die leichteste Option. Aider funktioniert am besten im Terminal.',
      bullets: [
        'Cline: bestes Gesamtpaket, aktiv gepflegt — liest/schreibt Dateien, führt Terminal-Befehle aus, nutzt MCP-Tools, VS Code + JetBrains (inkl. PyCharm, PhpStorm, Rider), kostenlos (BYOK) oder 9,99 $/Monat ClinePass',
        'Bodega One Code: kostenlose, lokal-first eigenständige IDE (kein Plugin) — integrierter Coding-Agent, Bring-your-own-LLM, vollständige Offline-/Air-Gap-Unterstützung, kein Abonnement',
        'Continue: noch funktionsfähig, aber nicht mehr gepflegt (im Juni 2026 von Cursor übernommen, v2.0.0 final) — läuft weiterhin mit Ollama, keine weitere Entwicklung',
        'Tabby: bestes Self-Hosted-Autocomplete — eigener Inferenz-Server, 1–3B-Modelle',
        'Aider: bestes Terminal-Tool — git-bewusst, Multi-Datei-Bearbeitung, ideal mit 14B+-Modellen',
        'Cursor: beste kommerzielle Option — lokaler Modell-Support vorhanden, Cloud-first-Design',
      ],
      updatedDate: '2026-07-21',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev wurde von Cursor übernommen (Juni 2026) — v2.0.0 ist die letzte Veröffentlichung, das Repository ist schreibgeschützt; läuft weiterhin mit Ollama, wird aber nicht mehr gepflegt',
          'Cline ist jetzt die am besten gepflegte kostenlose BYOK-Alternative: VS Code + JetBrains, agentische Datei-Bearbeitung, MCP-Tools, 5M+ Installs',
          'Bodega One Code ist eine kostenlose, lokal-first IDE mit integriertem Coding-Agenten und Bring-your-own-LLM (BYOL) — vollständiger Offline-/Air-Gap-Betrieb, kein Abonnement erforderlich',
          'Tabby läuft mit eigenem Inferenz-Server (1–3B-Modelle) — niedrigste Autocomplete-Latenz für Teams',
          'Aider ist die Terminal-Option — git-commit-bewusst, Multi-Datei-Umschreibungen, 44K GitHub-Sterne',
          'Cursor (20 $/Monat Pro, guthabenbasiert) übernahm sowohl Supermaven als auch Continue.dev; SpaceX einigte sich im Juni 2026 auf eine Übernahme von Cursor für 60 Mrd. USD',
          'Alle Tools funktionieren mit Ollama; nur Tabby benötigt einen eigenen Backend-Server',
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
            content: 'Cline (früher Claude Dev) ist 2026 das am besten gepflegte agentische Coding-Plugin für lokale LLMs — es übernahm die Spitzenposition, nachdem Continue im Juni 2026 von Cursor übernommen wurde. Es liest und schreibt Dateien, führt Terminal-Befehle aus, durchsucht das Web (über ein Browser-Tool) und nutzt MCP-Server. Mit Ollama + Qwen3-Coder 32B kann Cline komplette Features aus einem Prompt implementieren. Einschränkungen: 32B-Modelle sind für zuverlässige Multi-Schritt-Agenten nötig; 14B-Modelle reichen für einfache Aufgaben. Preise: kostenlos (BYOK — eigener API-Schlüssel von Anthropic, OpenAI oder 30+ Anbietern); ClinePass für 9,99 $/Monat für verwaltetes Routing ohne eigenen API-Schlüssel; Teams für 20 $/Nutzer/Monat (erste 10 Plätze kostenlos). VS Code und JetBrains (IntelliJ, PyCharm, PhpStorm, WebStorm, GoLand, Rider und mehr). Kompatible Backends: Ollama, LM Studio, LiteLLM-Proxy und 30+ Cloud-Anbieter. 8M+ Entwickler.',
            affiliateLinks: [
              { label: 'Cline im VS Code Marketplace (kostenlos)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — Bestes kostenloses lokal-first IDE mit integriertem Coding-Agenten',
            content: 'Bodega One Code ist eine kostenlose, lokal-first KI-IDE, die von Grund auf um einen Coding-Agenten herum aufgebaut ist — nicht als nachträglich in einen bestehenden Editor eingebauter Assistent. Sie unterstützt Bring-your-own-LLM (BYOL): Nutzer verbinden ein beliebiges lokales Modell-Backend, und der Agent führt Planung, Bearbeitung und Ausführung vollständig gegen dieses Modell aus, ohne Bindung an einen einzelnen Anbieter. Die gesamte Anwendung läuft auf dem eigenen Rechner, inklusive vollständiger Offline- und Air-Gap-Unterstützung — sie funktioniert damit auch in netzwerkisolierten Umgebungen, in denen cloudgebundene Tools wie Cursor oder GitHub Copilot gar nicht einsetzbar sind. Es gibt kein Abonnement: Bodega One Code ist kostenlos nutzbar, und da keine Cloud-Komponente existiert, entfällt auch jede Nutzungsmessung oder Guthabenverwaltung. Das macht es zu einer guten Wahl für regulierte Branchen, Behörden- und Verteidigungsauftragnehmer sowie Teams, deren Sicherheitsrichtlinien das Senden von Code an Server Dritter untersagen — genau die Zielgruppe, die überhaupt lokale Inferenz sucht. Im Vergleich zu Cline, einem Plugin für VS Code, ist Bodega One Code eine eigenständige IDE, die von Anfang an um den Agenten herum entworfen wurde; Teams, die bereits auf VS Code setzen, finden in Cline die einfachere Ergänzung, während Teams, die neu starten oder garantierten Offline-Betrieb benötigen, mit Bodega One Code eine dafür gebaute Umgebung erhalten.',
            affiliateLinks: [
              { label: 'Bodega One Code (kostenlos, offizielle Website)', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — Noch funktionsfähig, aber nicht mehr gepflegt [Von Cursor übernommen, Juni 2026 — Finale Version v2.0.0]',
            content: 'Continue war der führende Open-Source-KI-Coding-Assistent für lokale LLMs vor seiner Übernahme durch Cursor im Juni 2026. Er verbindet sich mit Ollama, LM Studio, llama.cpp und jeder OpenAI-kompatiblen API. Features: Inline-Chat (Cmd+L), Autocomplete (Tab), Model-Context-Protocol(MCP)-Tools, Codebase-Indexierung und benutzerdefinierte Slash-Befehle. VS-Code-Extension hat 2M+ Installs. JetBrains-Plugin läuft in IntelliJ, PyCharm, GoLand, WebStorm und Rider. Beste lokale Modelle: Qwen3-Coder 14B (Coding), Llama 3.3 8B (Chat). Setup: Extension installieren, Provider auf Ollama setzen, Modell wählen — in 2 Minuten erledigt. Hinweis (Juni 2026): Continue wurde von Cursor übernommen. Version 2.0.0 ist die letzte Veröffentlichung; das GitHub-Repository ist nun schreibgeschützt. Die Extension läuft weiterhin vollständig mit Ollama und BYO-LLM — jedoch ohne weitere Entwicklung durch das ursprüngliche Team. Community-Forks sind aktiv.',
            affiliateLinks: [
              { label: 'Continue im VS Code Marketplace (kostenlos)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — Bestes Self-Hosted-Autocomplete',
            content: 'Tabby ist ein Self-Hosted-Coding-Assistent mit eigenem Inferenz-Server. Er nutzt kleine, spezialisierte Code-Completion-Modelle (1–3B Parameter) für Fill-in-the-Middle (FIM) Autocomplete — deutlich schneller als ein allgemeines 7B-Modell. IDE-Erweiterungen für VS Code, JetBrains, Vim/Neovim und Emacs verfügbar.',
            affiliateLinks: [
              { label: 'Tabby auf GitHub (Open-Source, Self-Hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — Bestes Terminal-Tool für KI-Coding',
            content: 'Aider ist ein terminal-basierter KI-Pair-Programmer mit Git-Integration. Er versteht die Struktur des gesamten Repositories, macht Multi-Datei-Änderungen und committed automatisch. Funktioniert mit Ollama (--model ollama/qwen2.5-coder:14b), LM Studio oder jeder OpenAI-kompatiblen API. Kostenlos und Open-Source.',
            affiliateLinks: [
              { label: 'Aider auf GitHub (Open-Source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — Beste kommerzielle Option mit lokalem Modell-Support',
            content: 'Cursor ist ein VS-Code-Fork mit integrierten KI-Funktionen. Cursor unterstützt lokale Modelle über Ollama und LM Studio in der "Custom API"-Einstellung. Die mächtigsten Cursor-Features (Agent-Modus mit Websuche) erfordern aber Cloud-Modelle. Preise: Hobby (kostenlos); Pro 20 €/Monat (beinhaltet 20 € KI-Guthaben für Frontier-Modelle; Auto-Modus unbegrenzt kostenlos); Pro+ 60 €/Monat; Ultra 200 €/Monat. Lokale Modell-Nutzung: Hobby-Tier. Hinweis: Cursor übernahm Supermaven (2024) und Continue.dev (Juni 2026); SpaceX einigten sich im Juni 2026 auf eine Übernahme von Cursor für 60 Mrd. USD (Abschluss erwartet Q3 2026).',
            affiliateLinks: [
              { label: 'Cursor Pro Abonnement', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-de.png',
        imageCaption: 'Beste IDE-Plugins für Lokale LLMs, Rangliste -- Rangliste 2026',
      },
      setupGuide: {
        title: 'Schnellanleitung: Cline + Ollama in VS Code',
        content: 'Der schnellste Weg, um mit dem aktuellen Spitzenreiter lokal zu coden:',
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
        content: 'Für terminal-natives, git-bewusstes KI-Coding — offizielle Aider-Dokumentation: aider.chat/docs/llms/ollama.html',
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
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-de.png',
        imageCaption: 'Beste Lokale Modelle nach IDE-Plugin -- Coding-Modell und Mindest-VRAM',
      },
      lmStudioPlugins: {
        title: 'Beste LM-Studio-Plugins (nicht dasselbe wie IDE-Plugins)',
        content: 'Das ist eine andere Frage als "welche IDE-Erweiterung verbindet sich mit LM Studio" (oben behandelt). LM Studio hat seit Ende 2024 ein eigenes Plugin-System: Plugins laufen innerhalb von LM Studio selbst — als TypeScript- oder Python-Code in einem sandboxed Worker — und können Inferenz-Anfragen abfangen, Prompt-Prozessoren hinzufügen, Tool-Calling-Backends anbinden oder neue UI-Panels ergänzen. Installiert werden sie über den kuratierten Marktplatz unter lmstudio.ai/plugins; jedes Plugin gibt vorab die benötigten Berechtigungen an (Netzwerkzugriff, Dateisystem-Lesezugriff), die später jederzeit in den Einstellungen widerrufen werden können, ohne das Plugin zu deinstallieren. Häufige Kategorien im Jahr 2026: Websuche-Plugins, RAG-/Dokumenten-Retrieval-Präprozessoren, OCR-Präprozessoren, agentische Toolset-Plugins, Shell-/Dateizugriffs-Tools und Memory-Plugins.',
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
            q: 'Welche JetBrains-IDEs unterstützen lokale LLM-Plugins?',
            a: 'Cline und Continue bieten beide JetBrains-Plugins, die die gesamte JetBrains-Familie abdecken: IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand und Rider. Installation über den JetBrains Marketplace (nicht den VS Code Marketplace), mit denselben Ollama-/LM-Studio-Provider-Einstellungen wie bei der VS-Code-Version.',
          },
          {
            q: 'Was ist Bodega One Code, und wie unterscheidet es sich von Cline?',
            a: 'Bodega One Code ist eine kostenlose, eigenständige lokal-first KI-IDE mit integriertem Coding-Agenten — im Gegensatz zu Cline, das als Plugin zu VS Code oder JetBrains hinzugefügt wird, ist Bodega One Code eine vollständige IDE, die von Anfang an um den Agenten herum aufgebaut ist. Sie unterstützt Bring-your-own-LLM (BYOL), lässt sich also mit einem beliebigen lokalen Modell-Backend verbinden, läuft vollständig offline mit Air-Gap-Unterstützung und erfordert kein Abonnement. Sie eignet sich gut für regulierte oder netzwerkisolierte Umgebungen, in denen ein cloudgebundener Editor gar nicht genutzt werden kann.',
          },
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
          name: 'Welche JetBrains-IDEs unterstützen lokale LLM-Plugins?',
          acceptedAnswer: { '@type': 'Answer', text: 'Cline und Continue bieten beide JetBrains-Plugins für IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand und Rider. Installation über den JetBrains Marketplace mit denselben Ollama-/LM-Studio-Provider-Einstellungen wie bei der VS-Code-Version.' },
        },
        {
          '@type': 'Question',
          name: 'Was ist Bodega One Code, und wie unterscheidet es sich von Cline?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bodega One Code ist eine kostenlose, eigenständige lokal-first KI-IDE mit integriertem Coding-Agenten, Bring-your-own-LLM (BYOL) und vollständigem Offline-/Air-Gap-Betrieb ohne Abonnement. Im Gegensatz zu Cline, einem Plugin für VS Code oder JetBrains, ist Bodega One Code eine vollständige IDE, die von Anfang an um den Agenten herum aufgebaut ist.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Beste IDE-Plugins für lokale LLMs 2026',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: 'Bestes Gesamtpaket, aktiv gepflegt — agentisch, VS Code + JetBrains, kostenlos (BYOK)' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: 'Bestes kostenloses lokal-first IDE mit integriertem Coding-Agenten — BYOL, vollständige Offline-/Air-Gap-Unterstützung, kein Abonnement' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: 'Noch funktionsfähig, aber seit der Cursor-Übernahme (Juni 2026) nicht mehr gepflegt' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: 'Bestes Self-Hosted-Autocomplete — 1–3B FIM-Modelle, alle Editoren' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: 'Bestes Terminal-Tool — git-bewusst, Multi-Datei, Open-Source' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: 'Beste kommerzielle Option — lokaler Modell-Support, 20 $/Monat Pro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Beste IDE-Plugins für lokale LLMs 2026 (VS Code & JetBrains)', datePublished: '2026-05-26', dateModified: '2026-07-21', url: 'https://www.promptquorum.com/de/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'de' },
  },

  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: 'Meilleurs plugins IDE pour LLMs locaux 2026 (VS Code & JetBrains)',
    seoTitle: 'Meilleurs plugins IDE LLM local 2026 (VS Code & JetBrains)',
    metaDescription: 'Continue, Cline, Aider, Tabby — classés pour le support de modèles locaux en 2026. Quel plugin IDE se connecte le mieux à Ollama ou LM Studio ?',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-fr.png',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Cline (VS Code + JetBrains) est le meilleur plugin IDE gratuit pour les LLMs locaux mi-2026 : connexion native à Ollama et toute API OpenAI-compatible, édition de fichiers agentique + commandes terminal + outils MCP, entièrement sur votre matériel. À noter : Continue.dev (précédemment classé n°1) a été racheté par Cursor en juin 2026 — la version 2.0.0 en est la dernière publication.**',
    quickAnswerTop: {
      question: 'Quel est le meilleur plugin IDE pour les modèles IA locaux lors du codage ?',
      answer: 'Cline (gratuit, open-source, BYOK) est désormais le meilleur plugin IDE pour Ollama et les LLMs locaux — depuis le rachat de Continue.dev par Cursor en juin 2026 et le gel de son dépôt à la version 2.0.0. Cline fonctionne dans VS Code et JetBrains, avec édition de fichiers agentique et outils MCP. Pour l\'autocomplétion seule, Tabby est l\'option la plus légère. Aider fonctionne le mieux dans le terminal.',
      bullets: [
        'Cline : meilleur global, activement maintenu — lit/écrit des fichiers, exécute des commandes terminal, utilise des outils MCP, VS Code + JetBrains (dont PyCharm, PhpStorm, Rider), gratuit (BYOK) ou ClinePass à 9,99 $/mois',
        'Bodega One Code : IDE autonome local-first gratuit (pas un plugin) — agent de codage intégré, bring-your-own-LLM, prise en charge complète hors ligne/air-gap, aucun abonnement',
        'Continue : toujours fonctionnel mais plus maintenu (racheté par Cursor en juin 2026, v2.0.0 finale) — fonctionne encore avec Ollama, mais sans développement ultérieur',
        'Tabby : meilleure autocomplétion self-hosted — serveur d\'inférence propre, modèles 1–3B',
        'Aider : meilleur outil terminal — git-aware, éditions multi-fichiers, excellent avec 14B+',
        'Cursor : meilleure option commerciale — support modèles locaux, cloud-first',
      ],
      updatedDate: '2026-07-21',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev a été racheté par Cursor (juin 2026) — v2.0.0 est la dernière publication, le dépôt est désormais en lecture seule ; fonctionne toujours avec Ollama mais n\'est plus maintenu',
          'Cline est désormais la meilleure alternative gratuite (BYOK) activement maintenue : VS Code + JetBrains, édition de fichiers agentique, outils MCP, 5M+ installations',
          'Bodega One Code est un IDE local-first gratuit avec agent de codage intégré et bring-your-own-LLM (BYOL) — fonctionnement hors ligne/air-gap complet, aucun abonnement requis',
          'Tabby tourne avec son propre serveur d\'inférence (modèles 1–3B) — latence d\'autocomplétion la plus faible pour les équipes',
          'Aider est l\'option terminal-first — conscient des commits git, réécriture multi-fichiers, 44K étoiles GitHub',
          'Cursor (20 $/mois Pro, basé sur des crédits) a racheté Supermaven et Continue.dev ; SpaceX a accepté de racheter Cursor pour 60 milliards de dollars en juin 2026',
          'Tous les outils fonctionnent avec Ollama ; seul Tabby nécessite son propre serveur backend',
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
            content: 'Cline (anciennement Claude Dev) est en 2026 le plugin de codage agentique le mieux maintenu pour les LLMs locaux — il a pris la première place après le rachat de Continue par Cursor en juin 2026. Il lit et écrit des fichiers, exécute des commandes terminal, navigue sur le web (via un outil navigateur) et utilise des serveurs MCP. Avec Ollama + Qwen3-Coder 32B, Cline peut implémenter des fonctionnalités complètes à partir d\'une invite. Limites : les modèles 32B sont requis pour des tâches agentiques multi-étapes fiables ; les modèles 14B suffisent pour des tâches simples. Tarifs : gratuit (BYOK — apportez votre propre clé API d\'Anthropic, OpenAI ou 30+ fournisseurs) ; ClinePass à 9,99 $/mois pour un routage géré sans clé API requise ; Teams à 20 $/utilisateur/mois (10 premiers sièges gratuits). VS Code et JetBrains (IntelliJ, PyCharm, PhpStorm, WebStorm, GoLand, Rider, et plus). Backends compatibles : Ollama, LM Studio, proxy LiteLLM et 30+ fournisseurs cloud. 8M+ développeurs.',
            affiliateLinks: [
              { label: 'Cline sur VS Code Marketplace (gratuit)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — Meilleur IDE local-first gratuit avec agent de codage intégré',
            content: 'Bodega One Code est un IDE IA gratuit et local-first, conçu dès le départ autour d\'un agent de codage plutôt qu\'ajouté à un éditeur existant. Il prend en charge le bring-your-own-LLM (BYOL) : vous le connectez à n\'importe quel backend de modèle local, et l\'agent exécute intégralement la planification, l\'édition et l\'exécution face à ce modèle, sans dépendance à un fournisseur unique. L\'application entière tourne sur votre machine, avec une prise en charge complète du mode hors ligne et air-gap — elle fonctionne donc dans des environnements isolés du réseau où des outils connectés au cloud comme Cursor ou GitHub Copilot ne peuvent pas s\'exécuter du tout. Aucun abonnement n\'est requis : Bodega One Code est gratuit, et en l\'absence de composant cloud, il n\'y a ni comptage d\'usage ni système de crédits à gérer. Cela en fait un bon choix pour les secteurs réglementés, les prestataires gouvernementaux et de défense, et toute équipe dont la politique de sécurité interdit l\'envoi de code vers un serveur tiers — le public même qui recherche l\'inférence locale. Par rapport à Cline, qui est un plugin ajouté à VS Code, Bodega One Code est un IDE autonome conçu autour de l\'agent dès le départ ; les équipes déjà engagées sur VS Code trouveront en Cline l\'ajout le plus simple, tandis que celles qui démarrent de zéro ou ont besoin d\'un fonctionnement hors ligne garanti disposent avec Bodega One Code d\'un environnement conçu à cet effet.',
            affiliateLinks: [
              { label: 'Bodega One Code (gratuit, site officiel)', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — Toujours fonctionnel, plus maintenu [Racheté par Cursor, juin 2026 — Version finale v2.0.0]',
            content: 'Continue était le principal assistant de codage IA open-source pour les LLMs locaux avant son rachat par Cursor en juin 2026. Il se connecte à Ollama, LM Studio, llama.cpp et toute API OpenAI-compatible. Fonctionnalités : chat inline (Cmd+L), autocomplétion (Tab), outils du protocole de contexte de modèle (MCP), indexation de codebase et commandes slash personnalisées. L\'extension VS Code compte 2M+ installations. Le plugin JetBrains fonctionne dans IntelliJ, PyCharm, GoLand, WebStorm et Rider. Meilleurs modèles locaux : Qwen3-Coder 14B (codage), Llama 3.3 8B (chat). Installation : installer l\'extension, définir le provider sur Ollama, choisir un modèle — terminé en 2 minutes. Note (juin 2026) : Continue a été racheté par Cursor. La version 2.0.0 est la dernière publication ; le dépôt GitHub est désormais en lecture seule. L\'extension continue de s\'installer et de fonctionner pleinement avec Ollama et le BYO-LLM — mais sans développement ultérieur de la part de l\'équipe d\'origine. Des forks communautaires restent actifs.',
            affiliateLinks: [
              { label: 'Continue sur VS Code Marketplace (gratuit)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — Meilleure autocomplétion self-hosted',
            content: 'Tabby est un assistant de codage self-hosted qui tourne son propre serveur d\'inférence. Il utilise des petits modèles spécialisés (1–3B paramètres) entraînés pour le fill-in-the-middle (FIM) — nettement plus rapide qu\'un modèle 7B généraliste. Extensions IDE pour VS Code, JetBrains, Vim/Neovim et Emacs.',
            affiliateLinks: [
              { label: 'Tabby sur GitHub (open-source, self-hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — Meilleur outil terminal pour le codage IA',
            content: 'Aider est un pair-programmeur IA en terminal qui s\'intègre avec git. Il comprend la structure complète du dépôt, fait des modifications multi-fichiers et commit automatiquement. Fonctionne avec Ollama, LM Studio ou toute API OpenAI-compatible. Gratuit et open-source.',
            affiliateLinks: [
              { label: 'Aider sur GitHub (open-source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — Meilleure option commerciale avec support modèles locaux',
            content: 'Cursor est un fork VS Code avec des fonctionnalités IA intégrées. Cursor supporte les modèles locaux via Ollama et LM Studio dans son paramètre "Custom API". Les fonctionnalités les plus puissantes (mode Agent avec recherche web) nécessitent des modèles cloud. Tarifs : Hobby (gratuit) ; Pro à 20 €/mois (inclut 20 € de crédits IA pour modèles frontière ; mode Auto illimité sans coût) ; Pro+ à 60 €/mois ; Ultra à 200 €/mois. Modèles locaux : tier Hobby. Note : Cursor a acquis Supermaven (2024) et Continue.dev (juin 2026) ; SpaceX a annoncé l\'acquisition de Cursor pour 60 milliards de dollars en juin 2026 (clôture prévue T3 2026).',
            affiliateLinks: [
              { label: 'Abonnement Cursor Pro', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-fr.png',
        imageCaption: 'Meilleurs Plugins IDE pour LLM Locaux, Classés -- Classement 2026',
      },
      setupGuide: {
        title: 'Configuration rapide : Cline + Ollama dans VS Code',
        content: 'Le moyen le plus rapide de démarrer le codage local avec le pick n°1 actuel :',
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
        content: 'Pour un codage IA terminal-natif et conscient de git — documentation officielle d\'Aider : aider.chat/docs/llms/ollama.html',
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
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-fr.png',
        imageCaption: 'Meilleurs Modèles Locaux par Plugin IDE -- Modèle de codage et VRAM minimum',
      },
      lmStudioPlugins: {
        title: 'Meilleurs plugins LM Studio (ce n\'est pas la même chose que les plugins IDE)',
        content: 'C\'est une question différente de « quelle extension IDE se connecte à LM Studio » (traitée ci-dessus). LM Studio dispose de son propre système de plugins depuis fin 2024 : les plugins s\'exécutent à l\'intérieur de LM Studio lui-même — sous forme de code TypeScript ou Python dans un worker sandboxé — et peuvent intercepter les requêtes d\'inférence, ajouter des processeurs de prompts, brancher des backends d\'appel d\'outils, ou ajouter de nouveaux panneaux d\'interface. Installez-les depuis la marketplace organisée sur lmstudio.ai/plugins ; chaque plugin déclare au préalable les permissions requises (accès réseau, lecture du système de fichiers), que vous pouvez révoquer ultérieurement depuis les Paramètres sans désinstaller le plugin. Catégories courantes en 2026 : plugins de recherche web, préprocesseurs RAG/récupération de documents, préprocesseurs OCR, plugins de boîte à outils agentique, outils shell/accès fichiers, et plugins de mémoire.',
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
            a: 'Cline et Continue proposent tous deux des plugins JetBrains couvrant l\'ensemble de la famille JetBrains : IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand et Rider. Installez-les depuis le JetBrains Marketplace (et non le VS Code Marketplace) et configurez les mêmes paramètres de fournisseur Ollama/LM Studio que la version VS Code.',
          },
          {
            q: 'Qu\'est-ce que Bodega One Code, et en quoi diffère-t-il de Cline ?',
            a: 'Bodega One Code est un IDE IA autonome, gratuit et local-first, avec un agent de codage intégré — contrairement à Cline, qui est un plugin ajouté à VS Code ou JetBrains, Bodega One Code est un IDE complet conçu autour de l\'agent dès le départ. Il prend en charge le bring-your-own-LLM (BYOL), ce qui signifie que vous le connectez à n\'importe quel backend de modèle local ; il fonctionne entièrement hors ligne avec prise en charge air-gap, et ne nécessite aucun abonnement. Il convient bien aux environnements réglementés ou isolés du réseau où un éditeur connecté au cloud ne peut tout simplement pas être utilisé.',
          },
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
          name: 'Quels IDE JetBrains supportent les plugins LLM locaux ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Cline et Continue proposent tous deux des plugins JetBrains couvrant IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand et Rider. Installez-les depuis le JetBrains Marketplace et utilisez les mêmes paramètres de fournisseur Ollama/LM Studio que la version VS Code.' },
        },
        {
          '@type': 'Question',
          name: 'Qu\'est-ce que Bodega One Code, et en quoi diffère-t-il de Cline ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bodega One Code est un IDE IA autonome, gratuit et local-first, avec agent de codage intégré, bring-your-own-LLM (BYOL) et fonctionnement complet hors ligne/air-gap sans abonnement. Contrairement à Cline, qui est un plugin ajouté à VS Code ou JetBrains, Bodega One Code est un IDE complet conçu autour de l\'agent dès le départ.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Meilleurs plugins IDE pour LLMs locaux 2026',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: 'Meilleur global, activement maintenu — agentique, VS Code + JetBrains, gratuit (BYOK)' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: 'Meilleur IDE local-first gratuit avec agent de codage intégré — BYOL, hors ligne/air-gap complet, aucun abonnement' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: 'Toujours fonctionnel mais plus maintenu depuis le rachat par Cursor (juin 2026)' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: 'Meilleure autocomplétion self-hosted — modèles FIM 1–3B, tous éditeurs' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: 'Meilleur outil terminal — git-aware, multi-fichiers, open-source' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: 'Meilleure option commerciale — modèles locaux, 20 $/mois Pro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Meilleurs plugins IDE pour LLMs locaux 2026 (VS Code & JetBrains)', datePublished: '2026-05-26', dateModified: '2026-07-21', url: 'https://www.promptquorum.com/fr/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'fr' },
  },

  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: 'ローカルLLM向けIDEプラグインおすすめ2026年版（VS Code・JetBrains）',
    seoTitle: 'ローカルLLM IDE プラグインおすすめ2026（VS Code・JetBrains）',
    metaDescription: 'Continue・Cline・Aider・Tabby——2026年のローカルモデルサポートで比較評価。どのIDEプラグインがOllamaやLM Studioに最適かを解説。',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-ja.png',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Cline（VS Code + JetBrains）は2026年半ば時点でローカルLLM向け最良の無料IDEプラグインです：Ollamaとすべての OpenAI互換APIにネイティブ接続、エージェント的ファイル編集+ターミナルコマンド+MCPツールに対応し、完全に自分のハードウェアで動作。注記：Continue.dev（従来の1位）は2026年6月にCursorに買収されました——v2.0.0が最終リリースです。**',
    quickAnswerTop: {
      question: 'コーディング中にローカルAIモデルを使うのに最良のIDEプラグインは何ですか？',
      answer: 'Cline（無料・オープンソース・BYOK）が現在OllamaとローカルLLM向け最良のIDEプラグインです——Continue.devが2026年6月にCursorに買収され、リポジトリがv2.0.0で凍結されたためです。ClineはVS CodeとJetBrainsで動作し、エージェント的ファイル編集とMCPツールに対応します。オートコンプリートのみならTabbyが最も軽量。Aiderはターミナルで最も力を発揮します。',
      bullets: [
        'Cline：総合最良、活発にメンテナンス中 — ファイル読み書き、ターミナルコマンド実行、MCPツール使用、VS Code + JetBrains（PyCharm、PhpStorm、Rider含む）、無料BYOKまたはClinePass月額$9.99',
        'Bodega One Code：無料のローカルファースト・スタンドアロンIDE（プラグインではない）——コーディングエージェント内蔵、BYOL対応、完全なオフライン・エアギャップ対応、サブスクリプション不要',
        'Continue：まだ動作するがメンテナンス終了（2026年6月にCursorが買収、v2.0.0が最終版）——Ollamaとの連携は引き続き機能するが今後の開発はない',
        'Tabby：自己ホスト型オートコンプリート最良 — 独自推論サーバー、1〜3Bモデル',
        'Aider：ターミナルネイティブ最良 — git対応、マルチファイル編集、14B以上で優秀',
        'Cursor：最良商用オプション — ローカルモデルサポート追加済み、クラウドファースト設計',
      ],
      updatedDate: '2026-07-21',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.devが2026年6月にCursorに買収 — v2.0.0が最終リリースでリポジトリは読み取り専用に。Ollamaとの連携は引き続き機能するがメンテナンスは終了',
          'Clineが現在最もメンテナンスの行き届いた無料BYOKの選択肢：VS Code + JetBrains、エージェント的ファイル編集、MCPツール、500万インストール以上',
          'Bodega One Codeは無料のローカルファーストIDEで、コーディングエージェントを内蔵しBYOL（bring-your-own-LLM）に対応——完全なオフライン・エアギャップ動作、サブスクリプション不要',
          'Tabbyは独自推論サーバー（1〜3Bモデル）で動作——チーム向けに最低レイテンシのオートコンプリート',
          'Aiderはターミナルファーストオプション——git commit対応、マルチファイル書き換え、GitHubスター4.4万',
          'Cursor（月額$20 Pro、クレジット制）はSupermavenとContinue.devの両方を買収；SpaceXは2026年6月にCursorを600億ドルで買収することに合意',
          'すべてのツールがOllamaで動作。独自バックエンドサーバーが必要なのはTabbyのみ',
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
            content: 'Cline（旧Claude Dev）は2026年のローカルLLM向け最もメンテナンスの行き届いたエージェント的コーディングプラグインです——2026年6月にContinueがCursorに買収された後、首位の座を獲得しました。ファイルの読み書き、ターミナルコマンド実行、Webブラウジング（ブラウザツール経由）、MCPサーバーの利用が可能。Ollama + Qwen3-Coder 32Bとの組み合わせで、プロンプトから完全な機能実装が可能。制限：信頼性の高いマルチステップエージェントタスクには32Bモデルが必要（14Bモデルは単純なタスクに対応）。料金：無料（BYOK — Anthropic、OpenAI、または30以上のプロバイダーから自分のAPIキーを持ち込む）；ClinePassが月額$9.99でAPIキー不要のマネージドルーティング；Teamsが月額$20/ユーザー（最初の10シートは無料）。VS CodeとJetBrains（IntelliJ、PyCharm、PhpStorm、WebStorm、GoLand、Riderなど）。対応バックエンド：Ollama、LM Studio、LiteLLMプロキシ、30以上のクラウドプロバイダー。開発者800万人以上。',
            affiliateLinks: [
              { label: 'Cline をVS Code Marketplaceでダウンロード（無料）', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — 無料のローカルファーストIDE、コーディングエージェント内蔵',
            content: 'Bodega One Codeは、既存のエディタに後付けされたアシスタントではなく、コーディングエージェントを中心に一から設計された無料のローカルファーストAI IDEです。BYOL（bring-your-own-LLM）に対応しており、任意のローカルモデルバックエンドを接続すると、エージェントはその計画・編集・実行のループをすべてそのモデルに対して実行します——特定のプロバイダーへのロックインはありません。アプリケーション全体が自分のマシン上で動作し、完全なオフライン・エアギャップ対応を備えているため、CursorやGitHub Copilotのようなクラウド接続ツールがまったく使えないネットワーク隔離環境でも動作します。サブスクリプションは不要——Bodega One Codeは無料で利用でき、クラウドコンポーネントがないため、使用量計測やクレジット管理の必要もありません。これにより、規制産業、政府・防衛関連の請負業者、そしてコードを第三者のサーバーへ送信することをセキュリティポリシーで禁じているチーム——そもそもローカル推論を求める層——に適しています。VS Codeに追加するプラグインであるClineと比較すると、Bodega One Codeはエージェントを中心に最初から設計されたスタンドアロンIDEです。すでにVS Codeを使っているチームにはClineの方が導入しやすく、ゼロから始めるチームや確実なオフライン動作が必要なチームには、Bodega One Codeがその目的に沿って作られた環境を提供します。',
            affiliateLinks: [
              { label: 'Bodega One Code（無料・公式サイト）', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — まだ動作するがメンテナンス終了[2026年6月にCursorが買収 — 最終バージョンv2.0.0]',
            content: '2026年6月にCursorに買収される前、ContinueはローカルLLM向けの主要オープンソースAIコーディングアシスタントでした。Ollama、LM Studio、llama.cpp、すべてのOpenAI互換APIに接続。機能：インラインチャット（Cmd+L）、オートコンプリート（Tab）、MCPツール、コードベースインデックス化、カスタムスラッシュコマンド。VS Code拡張は200万以上のインストール実績。JetBrainsプラグインはIntelliJ、PyCharm、GoLand、WebStorm、Riderで動作。推奨ローカルモデル：Qwen3-Coder 14B（コーディング）、Llama 3.3 8B（チャット）。セットアップ：拡張機能をインストールし、プロバイダーをOllamaに設定、モデルを選択——2分で完了。注記（2026年6月）：ContinueはCursorに買収されました。v2.0.0が最終リリースで、GitHubリポジトリは読み取り専用。Ollama・BYO-LLMとの連携は引き続き完全に機能しますが、オリジナルチームによる開発は終了しています。コミュニティフォークは活発です。',
            affiliateLinks: [
              { label: 'Continue をVS Code Marketplaceでダウンロード（無料）', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — 自己ホスト型オートコンプリート最良',
            content: 'Tabbyは独自推論サーバーを動かす自己ホスト型コーディングアシスタントです。fill-in-the-middle（FIM）オートコンプリート専用の小型モデル（1〜3Bパラメータ）を使用——汎用7Bモデルより大幅に高速。VS Code、JetBrains、Vim/Neovim、EmacsのIDE拡張機能が利用可能。',
            affiliateLinks: [
              { label: 'Tabby をGitHubで確認（オープンソース）', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — ターミナルネイティブAIコーディング最良',
            content: 'Aiderはgit統合のターミナルベースAIペアプログラマーです。リポジトリ全体の構造を理解し、マルチファイル編集を行い、変更を自動コミット。Ollama（--model ollama/qwen2.5-coder:14b）、LM Studio、すべてのOpenAI互換APIで動作。無料・オープンソース。',
            affiliateLinks: [
              { label: 'Aider をGitHubで確認（オープンソース）', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — ローカルモデルサポート付き最良商用オプション',
            content: 'CursorはAI機能内蔵のVS Codeフォークです。2026年7月時点で、Cursorは「Custom API」設定でOllamaとLM Studio経由のローカルモデルをサポート。ただしCursorの最も強力な機能（Webサーチ付きエージェントモード、フルコードベース認識）はクラウドモデルが必要。ローカルモデル連携はチャットと単純な補完には機能しますが、プライバシー重視のワークフローではClineに劣ります。料金：Hobby（無料）；Pro月額$20（フロンティアモデル用$20のAIクレジット含む；Autoモードはクレジット消費なし無制限）；Pro+月額$60；Ultra月額$200。ローカルモデル利用は無料のHobbyティアで可能。注記：CursorはSupermaven（2024年）とContinue.dev（2026年6月）を買収。SpaceXが2026年6月にCursor自体を600億ドルで買収することに合意（完了は2026年第3四半期予定）。この統合により、CursorはAIコーディングツール市場で支配的な地位を占めていますが、オープンソースの代替手段の長期的な行方には疑問も残ります。',
            affiliateLinks: [
              { label: 'Cursor Proサブスクリプション', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-ja.png',
        imageCaption: 'ローカルLLM向けベストIDEプラグイン ランキング -- 2026年ランキング',
      },
      setupGuide: {
        title: 'クイックセットアップ：VS CodeでCline + Ollama',
        content: '現在の1位プラグインでローカルLLMコーディングを始める最速の方法：',
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
        content: 'ターミナルネイティブでgit対応のAIコーディング向け——Aider公式ドキュメント：aider.chat/docs/llms/ollama.html',
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
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-ja.png',
        imageCaption: 'IDEプラグイン別ベストローカルモデル -- コーディングモデルと最小VRAM',
      },
      lmStudioPlugins: {
        title: '最良のLM Studioプラグイン（IDEプラグインとは別物）',
        content: 'これは「どのIDE拡張機能がLM Studioに接続するか」（上記で解説）とは別の問いです。LM Studioは2024年後半から独自のプラグインシステムを持っています：プラグインはLM Studio自体の内部で——サンドボックス化されたワーカー内のTypeScriptまたはPythonコードとして——動作し、推論リクエストをインターセプトしたり、プロンプトプロセッサーを追加したり、ツール呼び出しバックエンドを接続したり、新しいUIパネルを追加したりできます。lmstudio.ai/pluginsの厳選されたマーケットプレイスからインストールでき、各プラグインは必要な権限（ネットワークアクセス、ファイルシステム読み取り）を事前に宣言します。これらの権限はアンインストールせずに後から設定で取り消すことも可能です。2026年時点での主なカテゴリ：Web検索プラグイン、RAG/文書検索プリプロセッサ、OCRプリプロセッサ、エージェント的ツールセットプラグイン、シェル/ファイルアクセスツール、メモリプラグイン。',
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
            q: 'どのJetBrains IDEがローカルLLMプラグインをサポートしていますか？',
            a: 'ClineとContinueはどちらもJetBrainsファミリー全体をカバーするプラグインを提供しています：IntelliJ IDEA、PyCharm、PhpStorm、WebStorm、GoLand、Rider。JetBrains Marketplace（VS Code Marketplaceではない）からインストールし、VS Code版と同じOllama/LM Studioプロバイダー設定を使用します。Tabbyもオートコンプリート専用でJetBrainsをサポートしています。',
          },
          {
            q: 'Bodega One Codeとは何ですか？Clineとの違いは？',
            a: 'Bodega One Codeは、コーディングエージェントを内蔵した無料のスタンドアロン・ローカルファーストAI IDEです——VS CodeやJetBrainsに追加するプラグインであるClineとは異なり、Bodega One Codeは最初からエージェントを中心に設計されたフルIDEです。BYOL（bring-your-own-LLM）に対応しており、任意のローカルモデルバックエンドに接続でき、エアギャップ対応の完全オフラインで動作し、サブスクリプションも不要です。クラウド接続エディタがまったく使用できない規制環境やネットワーク隔離環境に適しています。',
          },
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
          name: 'どのJetBrains IDEがローカルLLMプラグインをサポートしていますか？',
          acceptedAnswer: { '@type': 'Answer', text: 'ClineとContinueはどちらもIntelliJ IDEA、PyCharm、PhpStorm、WebStorm、GoLand、Riderをカバーするプラグインを提供しています。JetBrains Marketplaceからインストールし、VS Code版と同じOllama/LM Studioプロバイダー設定を使用します。' },
        },
        {
          '@type': 'Question',
          name: 'Bodega One Codeとは何ですか？Clineとの違いは？',
          acceptedAnswer: { '@type': 'Answer', text: 'Bodega One Codeは、コーディングエージェント内蔵、BYOL（bring-your-own-LLM）対応、完全なオフライン・エアギャップ動作、サブスクリプション不要の無料スタンドアロン・ローカルファーストAI IDEです。VS CodeやJetBrainsに追加するプラグインであるClineとは異なり、最初からエージェントを中心に設計された完全なIDEです。' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'ローカルLLM向けIDEプラグインおすすめ2026年版',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: '総合最良 — 活発にメンテナンス、エージェント的、VS Code + JetBrains、無料BYOK' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: '無料のローカルファーストIDE最良 — コーディングエージェント内蔵、BYOL、完全オフライン・エアギャップ対応、サブスクリプション不要' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: 'まだ動作するが2026年6月のCursor買収以降メンテナンス終了' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: '自己ホスト型オートコンプリート最良 — 1〜3B FIMモデル、全エディター対応' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: 'ターミナル最良 — git対応、マルチファイル、オープンソース' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: '商用最良 — ローカルモデルサポート、月額20ドルPro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'ローカルLLM向けIDEプラグインおすすめ2026年版（VS Code・JetBrains）', datePublished: '2026-05-26', dateModified: '2026-07-21', url: 'https://www.promptquorum.com/ja/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'ja' },
  },

  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: '2026年本地LLM最佳IDE插件推荐（VS Code & JetBrains）',
    seoTitle: '2026年本地LLM IDE插件推荐（VS Code & JetBrains）',
    metaDescription: 'Cline、Continue、Aider、Cursor——2026年本地LLM支持最佳IDE插件横向评测，附LM Studio自有插件生态。哪款与Ollama或llama.cpp连接最流畅？',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-zh.png',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Cline（VS Code + JetBrains）是2026年年中本地LLM最佳免费IDE插件：原生连接Ollama和所有OpenAI兼容API，支持智能体文件编辑+终端命令+MCP工具，完全在本地硬件上运行。注意：此前排名第1的Continue.dev已于2026年6月被Cursor收购——v2.0.0是其最终版本。**',
    quickAnswerTop: {
      question: '编程时使用本地AI模型最好的IDE插件是什么？',
      answer: 'Cline（免费开源，BYOK）目前是Ollama和本地LLM的最佳IDE插件——继Continue.dev于2026年6月被Cursor收购、仓库定格在v2.0.0之后。Cline支持VS Code和JetBrains，具备智能体文件编辑和MCP工具能力。仅需代码补全的话，Tabby是最轻量选择。Aider在终端环境中表现最佳。',
      bullets: [
        'Cline：综合最佳，持续维护中 — 读写文件、执行终端命令、使用MCP工具，VS Code + JetBrains（含PyCharm、PhpStorm、Rider），免费BYOK或ClinePass $9.99/月',
        'Bodega One Code：免费的本地优先独立IDE(非插件)——内置编程智能体、支持BYOL、完整离线/物理隔离支持、无需订阅',
        'Continue：仍可使用但已停止维护（2026年6月被Cursor收购，v2.0.0为最终版本）——可与Ollama继续配合运行，但不再有后续开发',
        'Tabby：最佳自托管代码补全 — 自有推理服务器，1–3B模型',
        'Aider：最佳终端工具 — git感知，多文件编辑，14B以上模型表现优秀',
        'Cursor：最佳商业选择 — 已支持本地模型，云优先设计',
      ],
      updatedDate: '2026-07-21',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev于2026年6月被Cursor收购——v2.0.0为最终版本，仓库现为只读状态；仍可与Ollama配合运行，但已不再维护',
          'Cline目前是维护最完善的免费BYOK替代方案：VS Code + JetBrains，智能体文件编辑，MCP工具，安装量超500万',
          'Bodega One Code是一款免费的本地优先IDE，内置编程智能体并支持BYOL（自带LLM）——完整离线/物理隔离运行，无需订阅',
          'Tabby运行自有推理服务器（1–3B模型）——为团队提供延迟最低的代码补全',
          'Aider是终端优先选项——git提交感知，多文件重写，GitHub星标4.4万',
          'Cursor（Pro版$20/月，积分制）已收购Supermaven和Continue.dev；SpaceX于2026年6月同意以600亿美元收购Cursor',
          '所有工具均可与Ollama配合使用；仅Tabby需要自有后端服务器',
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
            content: 'Cline（原名Claude Dev）是2026年本地LLM中维护最完善的智能体编程插件——在2026年6月Continue被Cursor收购后登顶第一。它可以读写文件、运行终端命令、浏览网页（通过浏览器工具）、使用MCP服务器。配合Ollama + Qwen3-Coder 32B，Cline能从一个提示词实现完整功能。限制：可靠的多步骤智能体任务需要32B模型（14B模型可处理简单任务）。定价：免费（BYOK——自带来自Anthropic、OpenAI或30多家提供商的API密钥）；ClinePass每月$9.99，提供无需API密钥的托管路由；Teams每用户每月$20（前10个席位免费）。支持VS Code和JetBrains（IntelliJ、PyCharm、PhpStorm、WebStorm、GoLand、Rider等）。兼容后端：Ollama、LM Studio、LiteLLM代理及30多家云服务商。开发者超800万人。',
            affiliateLinks: [
              { label: '在VS Code Marketplace下载Cline（免费）', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — 最佳免费本地优先IDE，内置编程智能体',
            content: 'Bodega One Code是一款免费的本地优先AI IDE，从一开始就围绕编程智能体构建，而不是后期加装到现有编辑器上的助手。它支持BYOL（自带LLM）：连接任意本地模型后端后，智能体的规划、编辑和执行整个流程都针对该模型运行，不绑定单一供应商。整个应用在本机运行，具备完整的离线和物理隔离（air-gap）支持——因此可在Cursor、GitHub Copilot等云端连接工具完全无法使用的网络隔离环境中运行。无需订阅：Bodega One Code免费使用，且由于没有云端组件，也就没有用量计量或积分管理。这使它非常适合受监管行业、政府与国防承包商，以及安全策略禁止将代码发送到第三方服务器的团队——而这正是本地推理的目标用户群体。与作为VS Code插件的Cline相比，Bodega One Code是一款从一开始就围绕智能体设计的独立IDE；已经在使用VS Code的团队会觉得Cline更易于加装，而从零开始或需要保证离线运行的团队，则可以从Bodega One Code获得专为此目的打造的环境。',
            affiliateLinks: [
              { label: '前往Bodega One Code（免费，官方网站）', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — 仍可使用但已停止维护 [已于2026年6月被Cursor收购 — 最终版本v2.0.0]',
            content: '在2026年6月被Cursor收购之前，Continue是本地LLM领先的开源AI编程助手。连接Ollama、LM Studio、llama.cpp和所有OpenAI兼容API。功能：内联对话（Cmd+L）、代码补全（Tab）、MCP工具、代码库索引、自定义斜杠命令。VS Code扩展已有200万以上安装量。JetBrains插件支持IntelliJ、PyCharm、GoLand、WebStorm和Rider。推荐本地模型：Qwen3-Coder 14B（编程）、Llama 3.3 8B（对话）。设置：安装扩展，将提供商设为Ollama，选择模型——2分钟内完成。注意（2026年6月）：Continue已被Cursor收购。v2.0.0为最终版本，GitHub仓库现为只读状态。插件仍可与Ollama及自带模型完全正常运行，但原团队已停止开发。社区分支仍然活跃。',
            affiliateLinks: [
              { label: '在VS Code Marketplace下载Continue（免费）', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — 最佳自托管代码补全服务器',
            content: 'Tabby是运行自有推理服务器（独立于Ollama）的自托管编程助手。使用专门为填充中间（FIM）代码补全训练的小型模型（1–3B参数）——比通用7B模型快得多。支持VS Code、JetBrains、Vim/Neovim和Emacs的IDE扩展。适合对象：希望在不依赖云端的情况下获得快速（<200ms）代码补全的团队。需要专用服务器或高性能桌面机器。',
            affiliateLinks: [
              { label: 'Tabby在GitHub上查看（开源自托管）', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — 最佳终端原生AI编程工具',
            content: 'Aider是集成git的终端AI配对程序员。理解整个代码库结构，进行多文件编辑，自动提交更改。支持Ollama（--model ollama/qwen2.5-coder:14b）、LM Studio或任何OpenAI兼容API。推荐本地模型：Qwen3-Coder 32B（架构模式）+ Qwen3-Coder 7B（编辑模式）。Aider采用双模型方案：大模型负责规划变更，小模型负责实现。费用：免费开源。',
            affiliateLinks: [
              { label: 'Aider在GitHub上查看（开源）', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — 支持本地模型的最佳商业选择',
            content: 'Cursor是内置AI功能的VS Code分支。截至2026年7月，Cursor在"Custom API"设置中通过Ollama和LM Studio支持本地模型。但Cursor最强大的功能（带网络搜索的Agent模式、完整代码库感知）仍需要云端模型。本地模型集成对聊天和简单补全可用，但在注重隐私的工作流中不如Cline。定价：Hobby（免费）；Pro $20/月（含$20/月AI积分用于前沿模型；Auto模式不消耗积分，无限制）；Pro+ $60/月；Ultra $200/月。本地模型使用在免费Hobby层即可获得。注：Cursor收购了Supermaven（2024年）和Continue.dev（2026年6月）；SpaceX于2026年6月同意以600亿美元收购Cursor本身（预计2026年第三季度完成）。这一整合让Cursor成为AI编程工具领域的主导力量——但也让开源替代方案的长期走向存在疑问。',
            affiliateLinks: [
              { label: 'Cursor Pro订阅', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-zh.png',
        imageCaption: '本地LLM最佳IDE插件排行榜 -- 2026年排名',
      },
      setupGuide: {
        title: '快速设置：在VS Code中使用Cline + Ollama',
        content: '用当前排名第1的插件开始本地LLM编程的最快方式：',
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
        content: '适合终端原生、git感知的AI编程——Aider官方文档：aider.chat/docs/llms/ollama.html',
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
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-zh.png',
        imageCaption: '各IDE插件的最佳本地模型 -- 编程模型与最低显存要求',
      },
      lmStudioPlugins: {
        title: '最佳LM Studio插件（与IDE插件不是同一回事）',
        content: '这与"哪款IDE扩展能连接LM Studio"（上文已介绍）是不同的问题。LM Studio自2024年底起就拥有自己的插件系统：插件在LM Studio内部运行——以沙盒化worker中的TypeScript或Python代码形式——可以拦截推理请求、添加提示处理器、接入工具调用后端，或增加新的UI面板。可从lmstudio.ai/plugins的精选市场安装；每个插件都会预先声明所需权限（网络访问、文件系统读取），你也可以之后在设置中撤销权限而无需卸载插件。截至2026年常见类别包括：网页搜索插件、RAG/文档检索预处理器、OCR预处理器、智能体工具集插件、Shell/文件访问工具，以及记忆插件。',
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
            a: 'Cline和Continue都提供覆盖整个JetBrains系列的插件：IntelliJ IDEA、PyCharm、PhpStorm、WebStorm、GoLand和Rider。从JetBrains Marketplace（而非VS Code Marketplace）安装，并使用与VS Code版本相同的Ollama/LM Studio提供商设置。Tabby也支持JetBrains，但仅限代码补全功能。',
          },
          {
            q: 'Bodega One Code是什么？它与Cline有何不同？',
            a: 'Bodega One Code是一款免费的独立本地优先AI IDE，内置编程智能体——与作为VS Code或JetBrains插件的Cline不同，Bodega One Code是一款从一开始就围绕智能体设计的完整IDE。它支持BYOL（自带LLM），可连接任意本地模型后端，完全离线运行并支持物理隔离（air-gap），且无需订阅。它非常适合云端连接编辑器完全无法使用的受监管或网络隔离环境。',
          },
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
          name: '哪些JetBrains IDE支持本地LLM插件？',
          acceptedAnswer: { '@type': 'Answer', text: 'Cline和Continue都提供覆盖IntelliJ IDEA、PyCharm、PhpStorm、WebStorm、GoLand和Rider的插件。从JetBrains Marketplace安装，并使用与VS Code版本相同的Ollama/LM Studio提供商设置。' },
        },
        {
          '@type': 'Question',
          name: 'Bodega One Code是什么？它与Cline有何不同？',
          acceptedAnswer: { '@type': 'Answer', text: 'Bodega One Code是一款免费的独立本地优先AI IDE，内置编程智能体，支持BYOL（自带LLM），完全离线/物理隔离运行且无需订阅。与作为VS Code或JetBrains插件的Cline不同，Bodega One Code是一款从一开始就围绕智能体设计的完整IDE。' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '2026年本地LLM最佳IDE插件排名',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: '综合最佳 — 持续维护，智能体能力，VS Code + JetBrains，免费BYOK' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: '最佳免费本地优先IDE — 内置编程智能体，支持BYOL，完整离线/物理隔离支持，无需订阅' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: '仍可使用但自2026年6月被Cursor收购后已停止维护' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: '最佳自托管补全 — FIM模型1–3B，全编辑器支持' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: '终端最佳 — git感知，多文件，开源' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: '商业最佳 — 本地模型支持，20美元/月Pro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: '2026年本地LLM最佳IDE插件推荐（VS Code & JetBrains）', datePublished: '2026-05-26', dateModified: '2026-07-21', url: 'https://www.promptquorum.com/zh/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'zh' },
  },

  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: 'Mejores plugins IDE para LLMs locales en 2026 (VS Code y JetBrains)',
    seoTitle: 'Mejores plugins IDE para LLM local 2026: VS Code y JetBrains',
    metaDescription: 'Continue, Cline, Aider, Tabby — clasificados por soporte de modelos locales en 2026. ¿Qué plugin IDE se conecta mejor a Ollama o LM Studio?',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-es.png',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Cline (VS Code + JetBrains) es el mejor plugin IDE gratuito para LLMs locales a mediados de 2026: conexión nativa a Ollama y cualquier API compatible con OpenAI, edición agéntica de archivos + comandos de terminal + herramientas MCP, ejecutándose completamente en tu hardware. Nota: Continue.dev (antes clasificado en el puesto #1) fue adquirido por Cursor en junio de 2026 — la versión 2.0.0 es su última publicación.**',
    quickAnswerTop: {
      question: '¿Cuál es el mejor plugin IDE para ejecutar modelos de IA locales mientras programas?',
      answer: 'Cline (gratuito, open-source con BYOK) es ahora el mejor plugin IDE para Ollama y LLMs locales — desde que Continue.dev fue adquirido por Cursor en junio de 2026 y su repositorio quedó congelado en la versión 2.0.0. Cline funciona en VS Code y JetBrains, y soporta edición agéntica de archivos y herramientas MCP. Para autocompletado únicamente, Tabby es la opción más ligera. Aider funciona mejor en la terminal.',
      bullets: [
        'Cline: el mejor en general, con mantenimiento activo — lee y escribe archivos, ejecuta comandos de terminal, usa herramientas MCP, VS Code + JetBrains (incl. PyCharm, PhpStorm, Rider), gratuito BYOK o ClinePass a $9,99/mes',
        'Bodega One Code: IDE independiente local-first gratuito (no un plugin) — agente de codificación integrado, bring-your-own-LLM, soporte completo offline/air-gap, sin suscripción',
        'Continue: todavía funcional pero sin mantenimiento (adquirido por Cursor en junio de 2026, v2.0.0 versión final) — sigue funcionando con Ollama, sin más desarrollo',
        'Tabby: el mejor autocompletado self-hosted — servidor de inferencia propio, modelos de 1–3B',
        'Aider: el mejor nativo de terminal — consciente de git, ediciones multi-archivo, excelente con modelos 14B+',
        'Cursor: la mejor opción comercial — soporte de modelos locales añadido, diseño cloud-first',
      ],
      updatedDate: '2026-07-21',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev fue adquirido por Cursor (junio de 2026) — v2.0.0 es la última versión, el repositorio ahora es de solo lectura; sigue funcionando con Ollama pero ya no tiene mantenimiento',
          'Cline es ahora la mejor alternativa gratuita BYOK con mantenimiento activo: VS Code + JetBrains, edición agéntica de archivos, herramientas MCP, más de 5M de instalaciones',
          'Bodega One Code es un IDE local-first gratuito con agente de codificación integrado y soporte para bring-your-own-LLM (BYOL) — operación completa offline/air-gap, sin necesidad de suscripción',
          'Tabby ejecuta su propio servidor de inferencia (modelos 1–3B) — la menor latencia de autocompletado para equipos',
          'Aider es la opción terminal-first — consciente de commits git, reescrituras multi-archivo, más de 44K estrellas en GitHub',
          'Cursor ($20/mes Pro, basado en créditos) adquirió tanto Supermaven como Continue.dev; SpaceX acordó adquirir Cursor por $60.000 millones en junio de 2026',
          'Todas las herramientas funcionan con Ollama; solo Tabby requiere su propio servidor backend',
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
            content: 'Cline (anteriormente Claude Dev) es el plugin de codificación agéntica con mejor mantenimiento para LLMs locales en 2026 — tomó el primer puesto después de que Continue fuera adquirido por Cursor en junio de 2026. Lee y escribe archivos, ejecuta comandos de terminal, navega la web (mediante herramienta de navegador) y usa servidores MCP. Con Ollama + Qwen3-Coder 32B, Cline puede implementar funcionalidades completas a partir de un prompt. Limitaciones: se requieren modelos de 32B para tareas agénticas de múltiples pasos fiables; los modelos de 14B funcionan para tareas simples. Precio: gratuito (BYOK — trae tu propia clave API de Anthropic, OpenAI, o más de 30 proveedores); ClinePass a $9,99/mes para enrutamiento gestionado sin necesidad de clave API; Teams a $20/usuario/mes (primeros 10 puestos gratuitos). Disponible en VS Code y JetBrains (IntelliJ, PyCharm, PhpStorm, WebStorm, GoLand, Rider y más). Backends compatibles: Ollama, LM Studio, proxy LiteLLM y más de 30 proveedores cloud. Más de 8M de desarrolladores.',
            affiliateLinks: [
              { label: 'Cline en VS Code Marketplace (gratuito)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 2,
            title: 'Bodega One Code — El mejor IDE local-first gratuito con agente de codificación integrado',
            content: 'Bodega One Code es un IDE de IA gratuito y local-first, diseñado desde cero alrededor de un agente de codificación, en lugar de ser un asistente añadido a un editor existente. Soporta bring-your-own-LLM (BYOL): lo conectas a cualquier backend de modelo local, y el agente ejecuta la planificación, edición y ejecución completamente contra ese modelo, sin atarte a un único proveedor. Toda la aplicación se ejecuta en tu máquina, con soporte completo para modo offline y air-gap — por lo que funciona en entornos aislados de la red donde herramientas conectadas a la nube como Cursor o GitHub Copilot no pueden usarse en absoluto. No requiere suscripción: Bodega One Code es gratuito, y al no tener ningún componente en la nube, tampoco hay medición de uso ni sistema de créditos que gestionar. Esto lo convierte en una buena opción para industrias reguladas, contratistas gubernamentales y de defensa, y cualquier equipo cuya política de seguridad prohíba enviar código a un servidor de terceros — el mismo público que busca inferencia local en primer lugar. Comparado con Cline, que es un plugin añadido a VS Code, Bodega One Code es un IDE independiente diseñado alrededor del agente desde el principio; los equipos que ya usan VS Code encontrarán en Cline la incorporación más sencilla, mientras que los equipos que empiezan de cero o necesitan garantizar operación offline obtienen con Bodega One Code un entorno construido específicamente para eso.',
            affiliateLinks: [
              { label: 'Bodega One Code (gratis, sitio oficial)', url: 'https://bodegaone.ai' },
            ],
          },
          {
            rank: 3,
            title: 'Continue — Todavía funcional, sin mantenimiento [Adquirido por Cursor, junio de 2026 — versión final v2.0.0]',
            content: 'Continue fue el asistente de codificación de IA open-source líder para LLMs locales antes de su adquisición por Cursor en junio de 2026. Se conecta a Ollama, LM Studio, llama.cpp y cualquier API compatible con OpenAI. Funciones: chat en línea (Cmd+L), autocompletado (Tab), herramientas del protocolo de contexto de modelo (MCP), indexación de codebase y comandos slash personalizados. La extensión de VS Code tiene más de 2M de instalaciones. El plugin de JetBrains funciona en IntelliJ, PyCharm, GoLand, WebStorm y Rider. Mejores modelos locales: Qwen3-Coder 14B (codificación), Llama 3.3 8B (chat). Configuración: instala la extensión, define el proveedor como Ollama, elige el modelo — listo en 2 minutos. Nota (junio de 2026): Continue fue adquirido por Cursor. La versión 2.0.0 es la última publicación; el repositorio de GitHub ahora es de solo lectura. La extensión sigue instalándose y funcionando completamente con Ollama y BYO-LLM — pero sin más desarrollo por parte del equipo original. Hay forks de la comunidad activos.',
            affiliateLinks: [
              { label: 'Continue en VS Code Marketplace (gratuito)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 4,
            title: 'Tabby — El mejor servidor de autocompletado self-hosted',
            content: 'Tabby es un asistente de codificación self-hosted que ejecuta su propio servidor de inferencia (separado de Ollama). Usa modelos pequeños y especializados de completado de código (1–3B parámetros) entrenados específicamente para autocompletado fill-in-the-middle (FIM) — significativamente más rápido que usar un modelo 7B de propósito general. Las extensiones IDE de Tabby existen para VS Code, JetBrains, Vim/Neovim y Emacs. Ideal para: equipos que quieren autocompletado rápido (<200ms) sin la nube. Requiere un servidor dedicado o una máquina de escritorio potente.',
            affiliateLinks: [
              { label: 'Tabby en GitHub (open-source, self-hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 5,
            title: 'Aider — La mejor codificación de IA nativa de terminal',
            content: 'Aider es un programador en par de IA basado en terminal que se integra con git. Entiende la estructura completa de tu repositorio, realiza ediciones multi-archivo y hace commits de los cambios automáticamente. Funciona con Ollama (via --model ollama/qwen2.5-coder:14b), LM Studio o cualquier API compatible con OpenAI. Mejores modelos locales: Qwen3-Coder 32B (modo arquitecto) + Qwen3-Coder 7B (modo editor). Aider usa un enfoque de dos modelos: un modelo grande planifica los cambios, uno pequeño los implementa. Gratuito y open-source.',
            affiliateLinks: [
              { label: 'Aider en GitHub (open-source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 6,
            title: 'Cursor — La mejor opción comercial con soporte de modelos locales',
            content: 'Cursor es un fork de VS Code con funciones de IA integradas. Cursor soporta modelos locales a través de Ollama y LM Studio en su configuración "Custom API". Sin embargo, las funciones más potentes (modo Agent con búsqueda web, conciencia completa del codebase) requieren modelos en la nube. Precios: Hobby (gratuito); Pro a $20/mes (incluye $20 en créditos de IA para modelos fronteras; modo Auto ilimitado sin coste); Pro+ a $60/mes; Ultra a $200/mes. Uso de modelos locales: nivel Hobby. Nota: Cursor adquirió Supermaven (2024) y Continue.dev (junio 2026); SpaceX acordó adquirir Cursor por $60.000 millones en junio de 2026 (cierre previsto en T3 2026).',
            affiliateLinks: [
              { label: 'Suscripción Cursor Pro', url: 'https://cursor.com' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-es.png',
        imageCaption: 'Mejores Plugins de IDE para LLMs Locales, Clasificados -- Clasificación 2026',
      },
      setupGuide: {
        title: 'Configuración rápida: Cline + Ollama en VS Code',
        content: 'La forma más rápida de empezar a programar con LLM local con la actual elección #1:',
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
        content: 'Para codificación de IA nativa de terminal y consciente de git — documentación oficial de Aider: aider.chat/docs/llms/ollama.html',
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
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-es.png',
        imageCaption: 'Mejores Modelos Locales por Plugin de IDE -- Modelo de código y VRAM mínima',
      },
      lmStudioPlugins: {
        title: 'Mejores plugins de LM Studio (no es lo mismo que los plugins IDE)',
        content: 'Esta es una pregunta distinta de "qué extensión IDE se conecta a LM Studio" (cubierto arriba). LM Studio tiene su propio sistema de plugins desde finales de 2024: los plugins se ejecutan dentro de LM Studio mismo — como código TypeScript o Python en un worker en sandbox — y pueden interceptar solicitudes de inferencia, añadir procesadores de prompts, conectar backends de llamada a herramientas, o añadir nuevos paneles de interfaz. Se instalan desde el marketplace curado en lmstudio.ai/plugins; cada plugin declara los permisos requeridos (acceso a red, lectura del sistema de archivos) de antemano, y puedes revocarlos después desde Ajustes sin desinstalar. Categorías comunes en 2026: plugins de búsqueda web, preprocesadores RAG/recuperación de documentos, preprocesadores OCR, plugins de conjunto de herramientas agénticas, herramientas de acceso a shell/archivos, y plugins de memoria.',
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
            a: 'Cline y Continue ofrecen plugins de JetBrains que funcionan en toda la familia JetBrains: IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand y Rider. Instálalos desde el JetBrains Marketplace (no el VS Code Marketplace) y configura los mismos ajustes de proveedor Ollama/LM Studio que en la versión de VS Code. Tabby también tiene soporte para JetBrains solo para autocompletado.',
          },
          {
            q: '¿Qué es Bodega One Code, y en qué se diferencia de Cline?',
            a: 'Bodega One Code es un IDE de IA independiente, gratuito y local-first, con un agente de codificación integrado — a diferencia de Cline, que es un plugin añadido a VS Code o JetBrains, Bodega One Code es un IDE completo construido alrededor del agente desde el principio. Soporta bring-your-own-LLM (BYOL), lo que significa que lo conectas a cualquier backend de modelo local, funciona completamente offline con soporte air-gap, y no requiere suscripción. Es una buena opción para entornos regulados o aislados de la red donde un editor conectado a la nube simplemente no puede usarse.',
          },
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
          name: '¿Qué IDEs de JetBrains soportan plugins de LLM local?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cline y Continue ofrecen plugins de JetBrains que cubren IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand y Rider. Instálalos desde el JetBrains Marketplace y usa los mismos ajustes de proveedor Ollama/LM Studio que en la versión de VS Code.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué es Bodega One Code, y en qué se diferencia de Cline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bodega One Code es un IDE de IA independiente, gratuito y local-first, con agente de codificación integrado, bring-your-own-LLM (BYOL) y operación completa offline/air-gap sin suscripción. A diferencia de Cline, que es un plugin añadido a VS Code o JetBrains, Bodega One Code es un IDE completo construido alrededor del agente desde el principio.',
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
        { '@type': 'ListItem', position: 1, name: 'Cline', description: 'El mejor en general — mantenimiento activo, agéntico, VS Code + JetBrains, gratuito BYOK' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: 'El mejor IDE local-first gratuito con agente de codificación integrado — BYOL, soporte completo offline/air-gap, sin suscripción' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: 'Todavía funcional pero sin mantenimiento desde la adquisición por Cursor, junio de 2026' },
        { '@type': 'ListItem', position: 4, name: 'Tabby', description: 'El mejor autocompletado self-hosted — modelos FIM 1–3B, todos los editores' },
        { '@type': 'ListItem', position: 5, name: 'Aider', description: 'El mejor nativo de terminal — consciente de git, ediciones multi-archivo, open-source' },
        { '@type': 'ListItem', position: 6, name: 'Cursor', description: 'La mejor opción comercial — soporte de modelos locales, $20/mes Pro' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Mejores plugins IDE para LLMs locales en 2026 (VS Code y JetBrains)',
      description: 'Comparativa clasificada de Continue, Cline, Tabby, Aider y Cursor para uso de LLM local en VS Code y JetBrains. Incluye guía de configuración, recomendaciones de modelos y comparación de rendimiento.',
      datePublished: '2026-05-26',
      dateModified: '2026-07-21',
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
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: '2026년 최고의 로컬 LLM IDE 플러그인 5선',
    seoTitle: '2026년 최고의 로컬 LLM IDE 플러그인 5선',
    metaDescription: '2026년 로컬 LLM 코딩 어시스턴트: Continue, Cline, Aider, Cursor(오프라인 모드), GitHub Copilot 대안을 Ollama와 함께 직접 비교합니다.',
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-ko.png',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Cline(VS Code + JetBrains)은 2026년 중반 기준 로컬 LLM을 위한 최고의 무료 IDE 플러그인입니다. Ollama 및 모든 OpenAI 호환 API에 네이티브로 연동되며, 에이전트 기반 파일 편집, 터미널 명령 실행, MCP 도구를 지원하고 완전히 사용자 하드웨어에서 실행됩니다. 참고: 기존 1위였던 Continue.dev는 2026년 6월 Cursor에 인수되었으며 v2.0.0이 마지막 릴리스입니다.**',
    quickAnswerTop: {
      question: '2026년 로컬 LLM에 가장 좋은 IDE 플러그인은 무엇입니까?',
      answer: 'Cline(BYOK 무료, VS Code + JetBrains)이 2026년 중반 기준 최적입니다. Continue.dev는 2026년 6월 Cursor에 인수되어 v2.0.0이 최종 버전입니다. 에이전트 작업에는 Cline, 터미널 기반 편집에는 Aider, 팀 코드베이스 인식에는 Cody를 선택하십시오.',
      bullets: [
        'Continue — 인수됨(Cursor, 2026년 6월): v2.0.0 최종, 계속 실행되지만 유지 관리 없음',
        'Cline — 최고의 에이전트 플러그인: VS Code + JetBrains, BYOK 무료, ClinePass $9.99/월',
        'Bodega One Code — 최고의 무료 로컬 우선 독립형 IDE: 코딩 에이전트 내장, BYOL, 완전한 오프라인/에어갭 지원, 구독 불필요',
        'Aider — 최고의 터미널 기반 AI 코딩 도구',
        'Cody — 최고의 대형 코드베이스 인식 어시스턴트',
        'Tabby — 최고의 셀프호스팅 코드 자동완성 서버',
      ],
      updatedDate: '2026-07',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue는 2026년 6월 Cursor에 인수되어 v2.0.0이 최종 버전입니다. 저장소는 읽기 전용이지만 Ollama와 함께 계속 실행됩니다.',
          'Cline이 현재 최고의 유지 관리 무료 대안입니다: VS Code + JetBrains, BYOK, 에이전트 파일 편집, MCP 도구.',
          'Bodega One Code는 코딩 에이전트를 내장한 무료 로컬 우선 IDE로 BYOL(bring-your-own-LLM)을 지원합니다 — 완전한 오프라인/에어갭 작동, 구독 불필요.',
          'Aider는 터미널에서 실행되는 로컬 모델 기반 AI 코딩 도구입니다.',
          'Cody(Sourcegraph)는 대형 코드베이스 인식에 탁월하며 로컬 Ollama 백엔드를 지원합니다.',
          'Tabby는 팀 단위로 셀프호스팅할 수 있는 코드 자동완성 서버입니다.',
        ],
      },
      rankedList: {
        heading: '2026년 최고의 로컬 LLM IDE 플러그인 상세 리뷰',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026년 로컬 LLM 코딩 어시스턴트 중 Cline이 VS Code/JetBrains 통합, 에이전트 기반 파일 편집, 오프라인 완전 작동으로 가장 뛰어납니다. 이전 1위였던 Continue는 2026년 6월 Cursor에 인수되어 v2.0.0이 최종 버전입니다.',
          },
          {
            type: 'plain-terms',
            text: '로컬 LLM IDE 플러그인은 GitHub Copilot 같은 클라우드 서비스 없이도 코드 자동완성·채팅·리팩토링을 제공합니다. Ollama로 로컬에서 실행 중인 모델을 IDE에 직접 연결합니다.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'Cline',
            tagline: '최고의 종합 픽 (무료, 오픈소스, 활발히 유지보수)',
            verdict: '파일 시스템 접근, 터미널 명령 실행, 브라우저 자동화를 지원합니다. Ollama 로컬 모델과 연동되며 대규모 리팩토링에 적합합니다. 무료(BYOK) 또는 ClinePass $9.99/월; Teams $20/사용자/월(첫 10석 무료).',
            pros: ['파일·터미널 에이전트 기능', '로컬 모델 전체 지원', 'VS Code 및 JetBrains 지원', 'MCP 마켓플레이스'],
            cons: ['복잡한 에이전트 작업에는 32B 모델 필요'],
            affiliateLinks: [
              { productName: 'Cline', url: 'https://github.com/cline/cline', productCategory: 'software' },
            ],
          },
          {
            rank: 2,
            name: 'Bodega One Code',
            tagline: '최고의 무료 로컬 우선 IDE, 코딩 에이전트 내장',
            verdict: '기존 편집기에 추가된 어시스턴트가 아니라 처음부터 코딩 에이전트를 중심으로 설계된 무료 로컬 우선 AI IDE입니다. BYOL(bring-your-own-LLM)을 지원하여 원하는 로컬 모델 백엔드에 연결하면 에이전트가 계획, 편집, 실행을 모두 해당 모델을 기준으로 수행합니다. 애플리케이션 전체가 사용자의 기기에서 실행되며 완전한 오프라인 및 에어갭(air-gap) 환경을 지원하므로, Cursor나 GitHub Copilot처럼 클라우드 연결이 필요한 도구가 전혀 작동할 수 없는 네트워크 격리 환경에서도 사용할 수 있습니다. 구독이 필요 없습니다 — 클라우드 구성 요소가 없으므로 사용량 측정이나 크레딧 관리도 없습니다. 규제 산업, 정부·국방 관련 조직, 코드를 제3자 서버로 전송하는 것을 금지하는 보안 정책을 가진 팀에 적합합니다. VS Code용 플러그인인 Cline과 달리, Bodega One Code는 처음부터 에이전트를 중심으로 설계된 독립형 IDE입니다.',
            pros: ['완전 무료, 구독 없음', '완전한 오프라인/에어갭 지원', 'BYOL — 원하는 로컬 모델 자유롭게 연결', '에이전트 중심으로 처음부터 설계된 독립형 IDE'],
            cons: ['VS Code/JetBrains 플러그인이 아닌 별도 IDE — 기존 에디터 워크플로에는 추가 전환 필요'],
            affiliateLinks: [
              { productName: 'Bodega One Code', url: 'https://bodegaone.ai', productCategory: 'software' },
            ],
          },
          {
            rank: 3,
            name: 'Continue',
            tagline: '여전히 작동하지만 더 이상 유지보수되지 않음 [2026년 6월 Cursor에 인수됨 — 최종 버전 v2.0.0]',
            verdict: 'VS Code와 JetBrains 모두 지원하며 Ollama·LM Studio와 완벽하게 통합됩니다. 자동완성, 채팅, 인라인 편집을 무료로 제공합니다. 주의: 2026년 6월 Cursor에 인수되어 v2.0.0이 최종 버전입니다(저장소 읽기 전용). 기능은 계속 작동하지만 업데이트는 없습니다.',
            pros: ['VS Code와 JetBrains 완전 지원', 'Ollama·LM Studio 완벽 통합', '자동완성·채팅·인라인 편집 무료 제공', '완전 오프라인 작동', 'Apache 2.0 라이선스로 포크 가능'],
            cons: ['2026년 6월 이후 공식 유지 관리 없음', '고급 에이전트 기능은 Cline보다 제한적'],
            affiliateLinks: [
              { productName: 'Continue', url: 'https://continue.dev', productCategory: 'software' },
            ],
          },
          {
            rank: 4,
            name: 'Aider',
            tagline: '최고의 터미널 기반 AI 코딩 도구',
            verdict: '터미널에서 실행되며 Ollama를 통해 로컬 모델과 연동됩니다. 멀티 파일 편집과 Git 통합을 지원합니다.',
            pros: ['터미널에서 직접 실행', 'Ollama 완전 지원', 'Git 통합 내장'],
            cons: ['GUI 없음 — 터미널 친숙도 필요'],
            affiliateLinks: [
              { productName: 'Aider', url: 'https://aider.chat', productCategory: 'software' },
            ],
          },
          {
            rank: 5,
            name: 'Cody',
            tagline: '최고의 대형 코드베이스 인식 어시스턴트',
            verdict: 'Sourcegraph의 코드 검색 엔진을 활용하여 대규모 코드베이스에서도 정확한 컨텍스트를 제공합니다. Ollama 백엔드를 지원합니다.',
            pros: ['대형 코드베이스 인식에 탁월', 'Ollama 로컬 백엔드 지원', 'VS Code·JetBrains 지원'],
            cons: ['전체 기능 활용에는 Sourcegraph 계정 필요'],
            affiliateLinks: [
              { productName: 'Cody', url: 'https://sourcegraph.com/cody', productCategory: 'software' },
            ],
          },
          {
            rank: 6,
            name: 'Tabby',
            tagline: '최고의 셀프호스팅 코드 자동완성 서버',
            verdict: 'Docker로 배포 가능한 자체 코드 자동완성 서버입니다. 팀 전체가 하나의 인스턴스를 공유하며 완전한 데이터 프라이버시를 보장합니다.',
            pros: ['팀 단위 셀프호스팅 가능', '완전한 데이터 프라이버시', '다양한 IDE 플러그인 지원'],
            cons: ['서버 설정 및 유지관리 필요'],
            affiliateLinks: [
              { productName: 'Tabby', url: 'https://tabby.tabbyml.com', productCategory: 'software' },
            ],
          },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-ko.png',
        imageCaption: '로컬 LLM을 위한 최고의 IDE 플러그인 순위 -- 2026년 순위',
      },
      setupGuide: {
        heading: '빠른 설정: VS Code에서 Cline + Ollama',
        content: '현재 1위 픽으로 로컬 LLM 코딩을 가장 빠르게 시작하는 방법입니다:',
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
        heading: '빠른 설정: Aider + Ollama (터미널)',
        content: '터미널 기반의 git 인식 AI 코딩을 위한 설정입니다 — Aider 공식 문서: aider.chat/docs/llms/ollama.html',
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
        heading: '로컬 코딩 어시스턴트를 위한 최적 모델',
        columns: ['모델', '크기', '자동완성', '채팅', '최소 VRAM'],
        rows: [
          { '모델': 'Qwen2.5-Coder 14B', '크기': '14B', '자동완성': '우수', '채팅': '우수', '최소 VRAM': '12 GB' },
          { '모델': 'Qwen2.5-Coder 7B', '크기': '7B', '자동완성': '양호', '채팅': '양호', '최소 VRAM': '8 GB' },
          { '모델': 'DeepSeek Coder V2 Lite', '크기': '16B', '자동완성': '우수', '채팅': '우수', '최소 VRAM': '12 GB' },
          { '모델': 'Llama 3.3 8B', '크기': '8B', '자동완성': '양호', '채팅': '우수', '최소 VRAM': '8 GB' },
          { '모델': 'Phi-4', '크기': '14B', '자동완성': '보통', '채팅': '우수', '최소 VRAM': '10 GB' },
        ],
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-ko.png',
        imageCaption: 'IDE 플러그인별 최고의 로컬 모델 -- 코딩 모델과 최소 VRAM',
      },
      lmStudioPlugins: {
        heading: 'LM Studio 플러그인 (IDE 플러그인과는 다릅니다)',
        content: '이는 앞서 다룬 "어떤 IDE 확장이 LM Studio와 연동되는가"와는 다른 질문입니다. LM Studio는 2024년 말부터 자체 플러그인 시스템을 갖추고 있습니다: 플러그인은 LM Studio 내부에서 — 샌드박스 처리된 워커에서 TypeScript 또는 Python 코드로 — 실행되며, 추론 요청을 가로채거나 프롬프트 프로세서를 추가하거나 도구 호출 백엔드를 연결하거나 새 UI 패널을 추가할 수 있습니다. lmstudio.ai/plugins의 큐레이션된 마켓플레이스에서 설치할 수 있으며, 각 플러그인은 필요한 권한(네트워크 접근, 파일 시스템 읽기)을 사전에 명시하고, 이후 설정에서 제거 없이 권한을 취소할 수 있습니다. 2026년 기준 주요 카테고리: 웹 검색 플러그인, RAG/문서 검색 전처리기, OCR 전처리기, 에이전트 도구 세트 플러그인, 셸/파일 접근 도구, 메모리 플러그인입니다.',
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
            q: 'Continue와 Copilot의 차이점은 무엇입니까?',
            a: 'Continue는 Ollama를 통해 로컬 모델을 사용하므로 코드가 서버로 전송되지 않습니다. GitHub Copilot은 월 구독료가 필요하며 Microsoft 서버로 코드를 전송합니다. Continue는 완전 무료로 오프라인에서 작동합니다.',
          },
          {
            q: '로컬 LLM 코딩 어시스턴트에 가장 좋은 모델은 무엇입니까?',
            a: '코딩 특화 모델인 Qwen2.5-Coder 14B가 2026년 기준 최고의 로컬 코딩 모델입니다. 8 GB VRAM 제약이 있다면 Qwen2.5-Coder 7B를 선택하십시오.',
          },
          {
            q: 'Aider를 Ollama와 함께 사용할 수 있습니까?',
            a: '네. `aider --model ollama/qwen2.5-coder:14b` 명령으로 Ollama 모델을 직접 사용할 수 있습니다. Ollama가 로컬에서 실행 중이어야 합니다.',
          },
          {
            q: 'Tabby를 Docker로 셀프호스팅하는 방법은 무엇입니까?',
            a: '`docker run -it --gpus all -p 8080:8080 tabbyml/tabby serve --model TabbyML/StarCoder-1B` 명령으로 시작할 수 있습니다. 팀 전체가 하나의 인스턴스를 공유하며 사용할 수 있습니다.',
          },
          {
            q: '어떤 JetBrains IDE가 로컬 LLM 플러그인을 지원합니까?',
            a: 'Cline과 Continue 모두 IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand, Rider를 포함한 JetBrains 제품군 전체에서 작동하는 JetBrains 플러그인을 제공합니다. JetBrains 마켓플레이스에서 설치하며, VS Code 버전과 동일한 Ollama/LM Studio 제공자 설정을 사용합니다.',
          },
          {
            q: 'Bodega One Code란 무엇이며 Cline과 어떻게 다릅니까?',
            a: 'Bodega One Code는 코딩 에이전트를 내장한 무료 독립형 로컬 우선 AI IDE입니다 — VS Code나 JetBrains에 추가하는 플러그인인 Cline과 달리, Bodega One Code는 처음부터 에이전트를 중심으로 설계된 완전한 IDE입니다. BYOL(bring-your-own-LLM)을 지원하여 원하는 로컬 모델 백엔드에 연결할 수 있으며, 에어갭 지원과 함께 완전히 오프라인으로 작동하고 구독이 필요 없습니다. 클라우드 연결 편집기를 전혀 사용할 수 없는 규제 환경이나 네트워크 격리 환경에 적합합니다.',
          },
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
          name: 'Continue와 Copilot의 차이점은 무엇입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Continue는 Ollama를 통해 로컬 모델을 사용하므로 코드가 서버로 전송되지 않습니다. GitHub Copilot은 월 구독료가 필요하며 Microsoft 서버로 코드를 전송합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '로컬 LLM 코딩 어시스턴트에 가장 좋은 모델은 무엇입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Qwen2.5-Coder 14B가 2026년 기준 최고의 로컬 코딩 모델입니다. 8 GB VRAM 제약이 있다면 Qwen2.5-Coder 7B를 선택하십시오.',
          },
        },
        {
          '@type': 'Question',
          name: 'Aider를 Ollama와 함께 사용할 수 있습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '네. `aider --model ollama/qwen2.5-coder:14b` 명령으로 Ollama 모델을 직접 사용할 수 있습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '어떤 JetBrains IDE가 로컬 LLM 플러그인을 지원합니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cline과 Continue 모두 IntelliJ IDEA, PyCharm, PhpStorm, WebStorm, GoLand, Rider를 포함한 JetBrains 제품군에서 작동하는 플러그인을 제공합니다. JetBrains 마켓플레이스에서 설치하며 VS Code 버전과 동일한 Ollama/LM Studio 제공자 설정을 사용합니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'Bodega One Code란 무엇이며 Cline과 어떻게 다릅니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bodega One Code는 코딩 에이전트 내장, BYOL(bring-your-own-LLM) 지원, 완전한 오프라인/에어갭 작동, 구독 불필요의 무료 독립형 로컬 우선 AI IDE입니다. VS Code나 JetBrains에 추가하는 플러그인인 Cline과 달리, 처음부터 에이전트를 중심으로 설계된 완전한 IDE입니다.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      inLanguage: 'ko',
      name: '2026년 최고의 로컬 LLM IDE 플러그인 5선',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: '최고의 종합 픽 — 무료, 오픈소스, 활발히 유지보수' },
        { '@type': 'ListItem', position: 2, name: 'Bodega One Code', description: '최고의 무료 로컬 우선 IDE — 코딩 에이전트 내장, BYOL, 완전한 오프라인/에어갭 지원, 구독 불필요' },
        { '@type': 'ListItem', position: 3, name: 'Continue', description: '여전히 작동하지만 2026년 6월 Cursor 인수 이후 유지보수 종료' },
        { '@type': 'ListItem', position: 4, name: 'Aider', description: '최고의 터미널 기반 AI 코딩 도구' },
        { '@type': 'ListItem', position: 5, name: 'Cody', description: '최고의 대형 코드베이스 인식 어시스턴트' },
        { '@type': 'ListItem', position: 6, name: 'Tabby', description: '최고의 셀프호스팅 코드 자동완성 서버' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: '2026년 최고의 로컬 LLM IDE 플러그인 5선',
      description: 'Continue, Cline, Aider, Cody, Tabby를 로컬 Ollama 모델과 함께 직접 비교합니다.',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      datePublished: '2026-05-26',
      dateModified: '2026-07-21',
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
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-pt.png',
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
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-pt.png',
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
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-pt.png',
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
    heroImage: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-ar.png',
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
        image: '/images/best-local-llm-ide-plugins-2026-plugin-ranking-hero-ar.png',
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
        image: '/images/best-local-llm-ide-plugins-2026-model-recommendations-hero-ar.png',
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
