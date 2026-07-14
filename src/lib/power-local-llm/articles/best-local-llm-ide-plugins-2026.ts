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
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Cline (VS Code + JetBrains) is the best free IDE plugin for local LLMs in mid-2026: it connects natively to Ollama and any OpenAI-compatible API, supports agentic file editing + terminal commands + MCP tools, and runs entirely on your hardware. Note: Continue.dev (previously ranked #1) was acquired by Cursor in June 2026 — v2.0.0 is its final release.**',
    quickAnswerTop: {
      question: 'What is the best IDE plugin for running local AI models while coding?',
      answer: 'Cline (free, open-source BYOK) is now the best IDE plugin for Ollama and local LLMs — after Continue.dev was acquired by Cursor in June 2026 and its repo frozen at v2.0.0. Cline works in VS Code and JetBrains, supports agentic file editing and MCP tools. For autocomplete-only, Tabby is the lightest option. Aider works best in the terminal.',
      bullets: [
        'Cline: best overall, actively maintained — reads/writes files, runs terminal commands, uses MCP tools, VS Code + JetBrains (incl. PyCharm, PhpStorm, Rider), free BYOK or $9.99/mo ClinePass',
        'Continue: still functional but unmaintained (acquired by Cursor June 2026, v2.0.0 final) — runs with Ollama, no further development',
        'Tabby: best self-hosted autocomplete — runs its own inference server, 1–3B models',
        'Aider: best terminal-native — git-aware, multi-file edits, excellent with 14B+ models',
        'Cursor: best commercial option — local model support added but cloud-first by design',
      ],
      updatedDate: '2026-07-14',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev acquired by Cursor (June 2026) — v2.0.0 is the final release, repo read-only; still runs with Ollama but no longer maintained',
          'Cline is now the best maintained free BYOK alternative: VS Code + JetBrains, agentic file editing, MCP tools, 5M+ installs',
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
            title: 'Continue — Still Functional, No Longer Maintained [Acquired by Cursor, June 2026 — Final v2.0.0]',
            content: 'Continue was the leading open-source AI coding assistant for local LLMs before its June 2026 acquisition by Cursor. It connects to Ollama, LM Studio, llama.cpp, and any OpenAI-compatible API. Features: inline chat (Cmd+L), autocomplete (Tab), model context protocol (MCP) tools, codebase indexing, and custom slash commands. VS Code extension has 2M+ installs. JetBrains plugin works in IntelliJ, PyCharm, GoLand, WebStorm, and Rider. Best local models: Qwen3-Coder 14B (coding), Llama 3.3 8B (chat). Setup: install extension, set provider to Ollama, choose model — done in 2 minutes. Note (June 2026): Continue was acquired by Cursor. Version 2.0.0 is the final release; the GitHub repo is now read-only. The extension still installs and runs fully with Ollama and BYO-LLM — but no further development from the original team. Community forks are active.',
            affiliateLinks: [
              { label: 'Continue on VS Code Marketplace (free)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 3,
            title: 'Tabby — Best Self-Hosted Autocomplete Server',
            content: 'Tabby is a self-hosted coding assistant that runs its own inference server (separate from Ollama). It uses small, specialized code completion models (1–3B parameters) trained specifically for fill-in-the-middle (FIM) autocomplete — significantly faster than using a general 7B model. Tabby IDE extensions exist for VS Code, JetBrains, Vim/Neovim, and Emacs. Best for: teams that want fast (<200ms) autocomplete without cloud. Requires a dedicated server or powerful desktop machine.',
            affiliateLinks: [
              { label: 'Tabby on GitHub (open-source, self-hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 4,
            title: 'Aider — Best Terminal-Native AI Coding',
            content: 'Aider is a terminal-based AI pair programmer that integrates with git. It understands your full repository structure, makes multi-file edits, and commits changes automatically. Works with Ollama (via --model ollama/qwen2.5-coder:14b), LM Studio, or any OpenAI-compatible API. Best local models: Qwen3-Coder 32B (architect mode) + Qwen3-Coder 7B (editor mode). Aider uses a two-model approach: a large model plans changes, a small model implements them. Cost: free and open-source.',
            affiliateLinks: [
              { label: 'Aider on GitHub (open-source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 5,
            title: 'Cursor — Best Commercial Option with Local Model Support',
            content: 'Cursor is a VS Code fork with AI features built in. As of July 2026, Cursor supports local models via Ollama and LM Studio in its "Custom API" setting. However, Cursor\'s most powerful features (Agent mode with web search, full codebase awareness) require cloud models. The local model integration is functional for chat and simple completions but falls behind Cline for privacy-focused workflows. Pricing: Hobby (free); Pro at $20/month (includes $20/month in AI credits for frontier models; Auto mode is unlimited at no credit cost); Pro+ at $60/month; Ultra at $200/month. Local model use is available on the free Hobby tier. Note: Cursor acquired Supermaven (2024) and Continue.dev (June 2026), and SpaceX agreed to acquire Cursor itself for $60 billion in June 2026 (deal expected to close Q3 2026). This consolidation makes Cursor the dominant force in AI coding tools — but raises long-term questions about open-source alternatives.',
            affiliateLinks: [
              { label: 'Cursor Pro subscription', url: 'https://cursor.com' },
            ],
          },
        ],
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
          { 'Plugin': 'Continue (legacy)', 'Best Coding Model (Local)': 'Qwen3-Coder 14B Q8', 'Best Chat Model (Local)': 'Llama 3.3 8B Q4', 'Min VRAM': '16 GB' },
          { 'Plugin': 'Tabby', 'Best Coding Model (Local)': 'StarCoder2-7B (built-in)', 'Best Chat Model (Local)': 'N/A (code only)', 'Min VRAM': '8 GB' },
          { 'Plugin': 'Aider', 'Best Coding Model (Local)': 'Qwen3-Coder 14B (editor)', 'Best Chat Model (Local)': 'Qwen3-Coder 32B (architect)', 'Min VRAM': '16–24 GB' },
          { 'Plugin': 'Cursor', 'Best Coding Model (Local)': 'DeepSeek-Coder-V2 (via Ollama)', 'Best Chat Model (Local)': 'Qwen3 14B', 'Min VRAM': '16 GB' },
        ],
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
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Best IDE Plugins for Local LLMs 2026',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: 'Best overall — actively maintained, agentic, VS Code + JetBrains, free BYOK' },
        { '@type': 'ListItem', position: 2, name: 'Continue', description: 'Still functional but unmaintained since Cursor acquisition, June 2026' },
        { '@type': 'ListItem', position: 3, name: 'Tabby', description: 'Best self-hosted autocomplete — 1–3B FIM models, all editors' },
        { '@type': 'ListItem', position: 4, name: 'Aider', description: 'Best terminal-native — git-aware, multi-file edits, open-source' },
        { '@type': 'ListItem', position: 5, name: 'Cursor', description: 'Best commercial — local model support, $20/month Pro' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Best IDE Plugins for Local LLMs in 2026 (VS Code & JetBrains)',
      description: 'Ranked comparison of Cline, Continue, Tabby, Aider, and Cursor for local LLM use in VS Code and JetBrains, plus LM Studio\'s own plugin ecosystem. Includes setup guides, model recommendations, and performance comparison.',
      datePublished: '2026-05-26',
      dateModified: '2026-07-14',
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
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Cline (VS Code + JetBrains) ist Mitte 2026 das beste kostenlose IDE-Plugin für lokale LLMs: native Verbindung zu Ollama und beliebigen OpenAI-kompatiblen APIs, agentische Datei-Bearbeitung, Terminal-Befehle und MCP-Tools, vollständig auf eigener Hardware. Hinweis: Continue.dev (zuvor Platz 1) wurde im Juni 2026 von Cursor übernommen — Version 2.0.0 ist die letzte Veröffentlichung.**',
    quickAnswerTop: {
      question: 'Welches IDE-Plugin ist am besten für lokale KI-Modelle beim Coden?',
      answer: 'Cline (kostenlos, Open-Source, BYOK) ist jetzt das beste IDE-Plugin für Ollama und lokale LLMs — nachdem Continue.dev im Juni 2026 von Cursor übernommen und das Repository bei Version 2.0.0 eingefroren wurde. Cline funktioniert in VS Code und JetBrains und unterstützt agentische Datei-Bearbeitung sowie MCP-Tools. Für reines Autocomplete ist Tabby die leichteste Option. Aider funktioniert am besten im Terminal.',
      bullets: [
        'Cline: bestes Gesamtpaket, aktiv gepflegt — liest/schreibt Dateien, führt Terminal-Befehle aus, nutzt MCP-Tools, VS Code + JetBrains (inkl. PyCharm, PhpStorm, Rider), kostenlos (BYOK) oder 9,99 $/Monat ClinePass',
        'Continue: noch funktionsfähig, aber nicht mehr gepflegt (im Juni 2026 von Cursor übernommen, v2.0.0 final) — läuft weiterhin mit Ollama, keine weitere Entwicklung',
        'Tabby: bestes Self-Hosted-Autocomplete — eigener Inferenz-Server, 1–3B-Modelle',
        'Aider: bestes Terminal-Tool — git-bewusst, Multi-Datei-Bearbeitung, ideal mit 14B+-Modellen',
        'Cursor: beste kommerzielle Option — lokaler Modell-Support vorhanden, Cloud-first-Design',
      ],
      updatedDate: '2026-07-14',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev wurde von Cursor übernommen (Juni 2026) — v2.0.0 ist die letzte Veröffentlichung, das Repository ist schreibgeschützt; läuft weiterhin mit Ollama, wird aber nicht mehr gepflegt',
          'Cline ist jetzt die am besten gepflegte kostenlose BYOK-Alternative: VS Code + JetBrains, agentische Datei-Bearbeitung, MCP-Tools, 5M+ Installs',
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
            title: 'Continue — Noch funktionsfähig, aber nicht mehr gepflegt [Von Cursor übernommen, Juni 2026 — Finale Version v2.0.0]',
            content: 'Continue war der führende Open-Source-KI-Coding-Assistent für lokale LLMs vor seiner Übernahme durch Cursor im Juni 2026. Er verbindet sich mit Ollama, LM Studio, llama.cpp und jeder OpenAI-kompatiblen API. Features: Inline-Chat (Cmd+L), Autocomplete (Tab), Model-Context-Protocol(MCP)-Tools, Codebase-Indexierung und benutzerdefinierte Slash-Befehle. VS-Code-Extension hat 2M+ Installs. JetBrains-Plugin läuft in IntelliJ, PyCharm, GoLand, WebStorm und Rider. Beste lokale Modelle: Qwen3-Coder 14B (Coding), Llama 3.3 8B (Chat). Setup: Extension installieren, Provider auf Ollama setzen, Modell wählen — in 2 Minuten erledigt. Hinweis (Juni 2026): Continue wurde von Cursor übernommen. Version 2.0.0 ist die letzte Veröffentlichung; das GitHub-Repository ist nun schreibgeschützt. Die Extension läuft weiterhin vollständig mit Ollama und BYO-LLM — jedoch ohne weitere Entwicklung durch das ursprüngliche Team. Community-Forks sind aktiv.',
            affiliateLinks: [
              { label: 'Continue im VS Code Marketplace (kostenlos)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 3,
            title: 'Tabby — Bestes Self-Hosted-Autocomplete',
            content: 'Tabby ist ein Self-Hosted-Coding-Assistent mit eigenem Inferenz-Server. Er nutzt kleine, spezialisierte Code-Completion-Modelle (1–3B Parameter) für Fill-in-the-Middle (FIM) Autocomplete — deutlich schneller als ein allgemeines 7B-Modell. IDE-Erweiterungen für VS Code, JetBrains, Vim/Neovim und Emacs verfügbar.',
            affiliateLinks: [
              { label: 'Tabby auf GitHub (Open-Source, Self-Hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 4,
            title: 'Aider — Bestes Terminal-Tool für KI-Coding',
            content: 'Aider ist ein terminal-basierter KI-Pair-Programmer mit Git-Integration. Er versteht die Struktur des gesamten Repositories, macht Multi-Datei-Änderungen und committed automatisch. Funktioniert mit Ollama (--model ollama/qwen2.5-coder:14b), LM Studio oder jeder OpenAI-kompatiblen API. Kostenlos und Open-Source.',
            affiliateLinks: [
              { label: 'Aider auf GitHub (Open-Source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 5,
            title: 'Cursor — Beste kommerzielle Option mit lokalem Modell-Support',
            content: 'Cursor ist ein VS-Code-Fork mit integrierten KI-Funktionen. Cursor unterstützt lokale Modelle über Ollama und LM Studio in der "Custom API"-Einstellung. Die mächtigsten Cursor-Features (Agent-Modus mit Websuche) erfordern aber Cloud-Modelle. Preise: Hobby (kostenlos); Pro 20 €/Monat (beinhaltet 20 € KI-Guthaben für Frontier-Modelle; Auto-Modus unbegrenzt kostenlos); Pro+ 60 €/Monat; Ultra 200 €/Monat. Lokale Modell-Nutzung: Hobby-Tier. Hinweis: Cursor übernahm Supermaven (2024) und Continue.dev (Juni 2026); SpaceX einigten sich im Juni 2026 auf eine Übernahme von Cursor für 60 Mrd. USD (Abschluss erwartet Q3 2026).',
            affiliateLinks: [
              { label: 'Cursor Pro Abonnement', url: 'https://cursor.com' },
            ],
          },
        ],
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
          { 'Plugin': 'Continue (Legacy)', 'Bestes Coding-Modell (lokal)': 'Qwen3-Coder 14B Q8', 'Bestes Chat-Modell (lokal)': 'Llama 3.3 8B Q4', 'Min. VRAM': '16 GB' },
          { 'Plugin': 'Tabby', 'Bestes Coding-Modell (lokal)': 'StarCoder2-7B (integriert)', 'Bestes Chat-Modell (lokal)': 'N/A (nur Code)', 'Min. VRAM': '8 GB' },
          { 'Plugin': 'Aider', 'Bestes Coding-Modell (lokal)': 'Qwen3-Coder 14B (Editor)', 'Bestes Chat-Modell (lokal)': 'Qwen3-Coder 32B (Architekt)', 'Min. VRAM': '16–24 GB' },
          { 'Plugin': 'Cursor', 'Bestes Coding-Modell (lokal)': 'DeepSeek-Coder-V2 (via Ollama)', 'Bestes Chat-Modell (lokal)': 'Qwen3 14B', 'Min. VRAM': '16 GB' },
        ],
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
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Beste IDE-Plugins für lokale LLMs 2026',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: 'Bestes Gesamtpaket, aktiv gepflegt — agentisch, VS Code + JetBrains, kostenlos (BYOK)' },
        { '@type': 'ListItem', position: 2, name: 'Continue', description: 'Noch funktionsfähig, aber seit der Cursor-Übernahme (Juni 2026) nicht mehr gepflegt' },
        { '@type': 'ListItem', position: 3, name: 'Tabby', description: 'Bestes Self-Hosted-Autocomplete — 1–3B FIM-Modelle, alle Editoren' },
        { '@type': 'ListItem', position: 4, name: 'Aider', description: 'Bestes Terminal-Tool — git-bewusst, Multi-Datei, Open-Source' },
        { '@type': 'ListItem', position: 5, name: 'Cursor', description: 'Beste kommerzielle Option — lokaler Modell-Support, 20 $/Monat Pro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Beste IDE-Plugins für lokale LLMs 2026 (VS Code & JetBrains)', datePublished: '2026-05-26', dateModified: '2026-07-14', url: 'https://www.promptquorum.com/de/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'de' },
  },

  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: 'Meilleurs plugins IDE pour LLMs locaux 2026 (VS Code & JetBrains)',
    seoTitle: 'Meilleurs plugins IDE LLM local 2026 (VS Code & JetBrains)',
    metaDescription: 'Continue, Cline, Aider, Tabby — classés pour le support de modèles locaux en 2026. Quel plugin IDE se connecte le mieux à Ollama ou LM Studio ?',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Cline (VS Code + JetBrains) est le meilleur plugin IDE gratuit pour les LLMs locaux mi-2026 : connexion native à Ollama et toute API OpenAI-compatible, édition de fichiers agentique + commandes terminal + outils MCP, entièrement sur votre matériel. À noter : Continue.dev (précédemment classé n°1) a été racheté par Cursor en juin 2026 — la version 2.0.0 en est la dernière publication.**',
    quickAnswerTop: {
      question: 'Quel est le meilleur plugin IDE pour les modèles IA locaux lors du codage ?',
      answer: 'Cline (gratuit, open-source, BYOK) est désormais le meilleur plugin IDE pour Ollama et les LLMs locaux — depuis le rachat de Continue.dev par Cursor en juin 2026 et le gel de son dépôt à la version 2.0.0. Cline fonctionne dans VS Code et JetBrains, avec édition de fichiers agentique et outils MCP. Pour l\'autocomplétion seule, Tabby est l\'option la plus légère. Aider fonctionne le mieux dans le terminal.',
      bullets: [
        'Cline : meilleur global, activement maintenu — lit/écrit des fichiers, exécute des commandes terminal, utilise des outils MCP, VS Code + JetBrains (dont PyCharm, PhpStorm, Rider), gratuit (BYOK) ou ClinePass à 9,99 $/mois',
        'Continue : toujours fonctionnel mais plus maintenu (racheté par Cursor en juin 2026, v2.0.0 finale) — fonctionne encore avec Ollama, mais sans développement ultérieur',
        'Tabby : meilleure autocomplétion self-hosted — serveur d\'inférence propre, modèles 1–3B',
        'Aider : meilleur outil terminal — git-aware, éditions multi-fichiers, excellent avec 14B+',
        'Cursor : meilleure option commerciale — support modèles locaux, cloud-first',
      ],
      updatedDate: '2026-07-14',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue.dev a été racheté par Cursor (juin 2026) — v2.0.0 est la dernière publication, le dépôt est désormais en lecture seule ; fonctionne toujours avec Ollama mais n\'est plus maintenu',
          'Cline est désormais la meilleure alternative gratuite (BYOK) activement maintenue : VS Code + JetBrains, édition de fichiers agentique, outils MCP, 5M+ installations',
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
            title: 'Continue — Toujours fonctionnel, plus maintenu [Racheté par Cursor, juin 2026 — Version finale v2.0.0]',
            content: 'Continue était le principal assistant de codage IA open-source pour les LLMs locaux avant son rachat par Cursor en juin 2026. Il se connecte à Ollama, LM Studio, llama.cpp et toute API OpenAI-compatible. Fonctionnalités : chat inline (Cmd+L), autocomplétion (Tab), outils du protocole de contexte de modèle (MCP), indexation de codebase et commandes slash personnalisées. L\'extension VS Code compte 2M+ installations. Le plugin JetBrains fonctionne dans IntelliJ, PyCharm, GoLand, WebStorm et Rider. Meilleurs modèles locaux : Qwen3-Coder 14B (codage), Llama 3.3 8B (chat). Installation : installer l\'extension, définir le provider sur Ollama, choisir un modèle — terminé en 2 minutes. Note (juin 2026) : Continue a été racheté par Cursor. La version 2.0.0 est la dernière publication ; le dépôt GitHub est désormais en lecture seule. L\'extension continue de s\'installer et de fonctionner pleinement avec Ollama et le BYO-LLM — mais sans développement ultérieur de la part de l\'équipe d\'origine. Des forks communautaires restent actifs.',
            affiliateLinks: [
              { label: 'Continue sur VS Code Marketplace (gratuit)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 3,
            title: 'Tabby — Meilleure autocomplétion self-hosted',
            content: 'Tabby est un assistant de codage self-hosted qui tourne son propre serveur d\'inférence. Il utilise des petits modèles spécialisés (1–3B paramètres) entraînés pour le fill-in-the-middle (FIM) — nettement plus rapide qu\'un modèle 7B généraliste. Extensions IDE pour VS Code, JetBrains, Vim/Neovim et Emacs.',
            affiliateLinks: [
              { label: 'Tabby sur GitHub (open-source, self-hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 4,
            title: 'Aider — Meilleur outil terminal pour le codage IA',
            content: 'Aider est un pair-programmeur IA en terminal qui s\'intègre avec git. Il comprend la structure complète du dépôt, fait des modifications multi-fichiers et commit automatiquement. Fonctionne avec Ollama, LM Studio ou toute API OpenAI-compatible. Gratuit et open-source.',
            affiliateLinks: [
              { label: 'Aider sur GitHub (open-source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 5,
            title: 'Cursor — Meilleure option commerciale avec support modèles locaux',
            content: 'Cursor est un fork VS Code avec des fonctionnalités IA intégrées. Cursor supporte les modèles locaux via Ollama et LM Studio dans son paramètre "Custom API". Les fonctionnalités les plus puissantes (mode Agent avec recherche web) nécessitent des modèles cloud. Tarifs : Hobby (gratuit) ; Pro à 20 €/mois (inclut 20 € de crédits IA pour modèles frontière ; mode Auto illimité sans coût) ; Pro+ à 60 €/mois ; Ultra à 200 €/mois. Modèles locaux : tier Hobby. Note : Cursor a acquis Supermaven (2024) et Continue.dev (juin 2026) ; SpaceX a annoncé l\'acquisition de Cursor pour 60 milliards de dollars en juin 2026 (clôture prévue T3 2026).',
            affiliateLinks: [
              { label: 'Abonnement Cursor Pro', url: 'https://cursor.com' },
            ],
          },
        ],
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
          { 'Plugin': 'Continue (héritage)', 'Meilleur modèle de codage (local)': 'Qwen3-Coder 14B Q8', 'Meilleur modèle de chat (local)': 'Llama 3.3 8B Q4', 'VRAM min.': '16 Go' },
          { 'Plugin': 'Tabby', 'Meilleur modèle de codage (local)': 'StarCoder2-7B (intégré)', 'Meilleur modèle de chat (local)': 'N/A (code uniquement)', 'VRAM min.': '8 Go' },
          { 'Plugin': 'Aider', 'Meilleur modèle de codage (local)': 'Qwen3-Coder 14B (éditeur)', 'Meilleur modèle de chat (local)': 'Qwen3-Coder 32B (architecte)', 'VRAM min.': '16–24 Go' },
          { 'Plugin': 'Cursor', 'Meilleur modèle de codage (local)': 'DeepSeek-Coder-V2 (via Ollama)', 'Meilleur modèle de chat (local)': 'Qwen3 14B', 'VRAM min.': '16 Go' },
        ],
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
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Meilleurs plugins IDE pour LLMs locaux 2026',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cline', description: 'Meilleur global, activement maintenu — agentique, VS Code + JetBrains, gratuit (BYOK)' },
        { '@type': 'ListItem', position: 2, name: 'Continue', description: 'Toujours fonctionnel mais plus maintenu depuis le rachat par Cursor (juin 2026)' },
        { '@type': 'ListItem', position: 3, name: 'Tabby', description: 'Meilleure autocomplétion self-hosted — modèles FIM 1–3B, tous éditeurs' },
        { '@type': 'ListItem', position: 4, name: 'Aider', description: 'Meilleur outil terminal — git-aware, multi-fichiers, open-source' },
        { '@type': 'ListItem', position: 5, name: 'Cursor', description: 'Meilleure option commerciale — modèles locaux, 20 $/mois Pro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Meilleurs plugins IDE pour LLMs locaux 2026 (VS Code & JetBrains)', datePublished: '2026-05-26', dateModified: '2026-07-14', url: 'https://www.promptquorum.com/fr/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'fr' },
  },

  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: 'ローカルLLM向けIDEプラグインおすすめ2026年版（VS Code・JetBrains）',
    seoTitle: 'ローカルLLM IDE プラグインおすすめ2026（VS Code・JetBrains）',
    metaDescription: 'Continue・Cline・Aider・Tabby——2026年のローカルモデルサポートで比較評価。どのIDEプラグインがOllamaやLM Studioに最適かを解説。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Continue（VS Code + JetBrains）は2026年のローカルLLM向け最良の無料IDEプラグインです：Ollamaとすべての OpenAI互換APIにネイティブ接続、チャット+オートコンプリート+コンテキスト対応コード編集、完全に自分のハードウェアで動作。**',
    quickAnswerTop: {
      question: 'コーディング中にローカルAIモデルを使うのに最良のIDEプラグインは何ですか？',
      answer: 'Continue（無料・オープンソース）がVS CodeとJetBrainsのOllama・ローカルLLM向け最良IDEプラグインです。オートコンプリートのみならTabbyが最も軽量。エージェント的コーディング（ファイル編集、シェルコマンド）ならClineが最高機能。',
      bullets: [
        'Continue：総合最良 — Ollama + OpenAI API、チャット+オートコンプリート、VS Code + JetBrains',
        'Cline：エージェント的IDE最良 — ファイル読み書き、ターミナルコマンド実行、MCPツール使用',
        'Tabby：自己ホスト型オートコンプリート最良 — 独自推論サーバー、1〜3Bモデル',
        'Aider：ターミナルネイティブ最良 — git対応、マルチファイル編集、14B以上で優秀',
        'Cursor：最良商用オプション — ローカルモデルサポート追加済み、クラウドファースト設計',
      ],
      updatedDate: '2026-07',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue（オープンソース）がデフォルト選択：Ollamaネイティブサポート、VS Code + JetBrains',
          'Clineエージェントはファイル読み書きとシェルコマンド実行——エージェント的タスクに最高機能',
          'Tabbyは独自推論サーバー（1〜3Bモデル）で動作——最低レイテンシのオートコンプリート',
          'Aiderはターミナルファーストオプション——git対応、マルチファイル書き換え',
          'Cursorはローカルモデルをサポートするが最良機能はクラウドが必要',
        ],
      },
      rankedList: {
        title: 'ローカルLLM向けIDEプラグインランキング',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ContinueはOllamaをネイティブサポートし、VS CodeとJetBrainsの両方で動作し、クラウド依存なしでチャット・オートコンプリート・コード編集を提供する2026年最良のIDEプラグインです。',
          },
          {
            type: 'plain-terms',
            text: 'ローカルLLM用IDEプラグインはコードエディタ（VS Code、IntelliJ）を自分のマシンで動くモデル（Ollama、LM Studio経由）に接続します。モデルはコードを見て応答——コードは一切コンピュータ外に出ない、API料金なし、使用制限なし。',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Continue — 総合最良（無料・オープンソース）',
            content: 'ContinueはローカルLLM向けの主要オープンソースAIコーディングアシスタントです。Ollama、LM Studio、llama.cpp、すべてのOpenAI互換APIに接続。機能：インラインチャット（Cmd+L）、オートコンプリート（Tab）、MCPツール、コードベースインデックス化。VS Code拡張は200万以上のインストール実績。JetBrainsプラグインはIntelliJ、PyCharm、GoLand、WebStorm、Riderで動作。推奨ローカルモデル：Qwen3-Coder 14B（コーディング）、Llama 3.3 8B（チャット）。注記（2026年6月）：ContinueはCursorに買収されました。v2.0.0が最終リリースで、GitHubリポジトリは読み取り専用。Ollamaとの連携は引き続き機能しますが、オリジナルチームによる開発は終了しています。',
            affiliateLinks: [
              { label: 'Continue をVS Code Marketplaceでダウンロード（無料）', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 2,
            title: 'Cline — エージェント的コーディングに最良',
            content: 'ClineはローカルLLM向け最高機能のエージェント的コーディングプラグインです。ファイルの読み書き、ターミナルコマンド実行、MCPサーバー使用が可能。Ollama + Qwen3-Coder 32Bとの組み合わせで、プロンプトから完全な機能実装が可能。制限：信頼性の高いマルチステップエージェントタスクには32Bモデルが必要。VS CodeとJetBrains（IntelliJ、PyCharm、WebStorm）の両方で利用可能。料金：無料（BYOK）またはClinePassが月額$9.99；Teamsが月額$20/ユーザー（最初の10シートは無料）。VS Codeインストール数500万以上。',
            affiliateLinks: [
              { label: 'Cline をVS Code Marketplaceでダウンロード（無料）', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 3,
            title: 'Tabby — 自己ホスト型オートコンプリート最良',
            content: 'Tabbyは独自推論サーバーを動かす自己ホスト型コーディングアシスタントです。fill-in-the-middle（FIM）オートコンプリート専用の小型モデル（1〜3Bパラメータ）を使用——汎用7Bモデルより大幅に高速。VS Code、JetBrains、Vim/Neovim、EmacsのIDE拡張機能が利用可能。',
            affiliateLinks: [
              { label: 'Tabby をGitHubで確認（オープンソース）', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 4,
            title: 'Aider — ターミナルネイティブAIコーディング最良',
            content: 'Aiderはgit統合のターミナルベースAIペアプログラマーです。リポジトリ全体の構造を理解し、マルチファイル編集を行い、変更を自動コミット。Ollama（--model ollama/qwen2.5-coder:14b）、LM Studio、すべてのOpenAI互換APIで動作。無料・オープンソース。',
            affiliateLinks: [
              { label: 'Aider をGitHubで確認（オープンソース）', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 5,
            title: 'Cursor — ローカルモデルサポート付き最良商用オプション',
            content: 'CursorはAI機能内蔵のVS Codeフォークです。Cursorは「Custom API」設定でOllamaとLM Studio経由のローカルモデルをサポート。ただし最高機能（Webサーチ付きエージェントモード）はクラウドモデルが必要。料金：Hobby（無料）；Pro月額$20（フロンティアモデル用$20のAIクレジット含む；Autoモードはクレジット消費なし無制限）；Pro+月額$60；Ultra月額$200。ローカルモデル利用：Hobbyティア。注記：CursorはSupermaven（2024年）とContinue.dev（2026年6月）を買収。SpaceXが2026年6月にCursorを600億ドルで買収合意（2026年Q3完了予定）。',
            affiliateLinks: [
              { label: 'Cursor Proサブスクリプション', url: 'https://cursor.com' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'ContinueはローカルでGitHub Copilotの完全な代替になれますか？',
            a: 'ほとんどのユースケースでは、はい。Qwen3-Coder 14B Q8を使用したContinueは、Python、TypeScript、GoでGitHub Copilotに匹敵するオートコンプリート品質を提供します。プライバシーが重要なコードベースでは、Continue + ローカルOllamaがより良い選択です。',
          },
          {
            q: 'マルチファイルリファクタリングに最適なプラグインはどれですか？',
            a: 'ClineまたはAiderです。両方とも複数ファイルを読み込み、依存関係を理解し、コードベース全体で協調した変更を行えます。Clineはビジュアルフィードバックに優れ、Aiderはgit対応コミットに優れています。複雑なリファクタリングには30B以上（24GB VRAM）のモデルが推奨されます。',
          },
          {
            q: 'OllamaではなくLM Studioでこれらのプラグインを使えますか？',
            a: 'はい。LM StudioはデフォルトでポートNo 1234にOpenAI互換APIを公開します。プラグインのプロバイダーを「openai」に設定し、ベースURLを`http://localhost:1234/v1`にしてください。Continue、Cline、Aiderはすべてこの設定をサポートしています。',
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
          acceptedAnswer: { '@type': 'Answer', text: 'ほとんどのユースケースでは、はい。Continue + Qwen3-Coder 14B Q8はCopilotと同等の品質を提供。プライバシー重視のコードベースでは、Continue + ローカルOllamaがより良い選択です。' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'ローカルLLM向けIDEプラグインおすすめ2026年版',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Continue', description: '総合最良 — Ollamaネイティブ、VS Code + JetBrains、無料' },
        { '@type': 'ListItem', position: 2, name: 'Cline', description: 'エージェント最良 — ファイル読み書き、VS Code' },
        { '@type': 'ListItem', position: 3, name: 'Tabby', description: '自己ホスト型オートコンプリート最良 — 1〜3B FIMモデル' },
        { '@type': 'ListItem', position: 4, name: 'Aider', description: 'ターミナル最良 — git対応、マルチファイル、オープンソース' },
        { '@type': 'ListItem', position: 5, name: 'Cursor', description: '商用最良 — ローカルモデルサポート、月額20ドルPro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'ローカルLLM向けIDEプラグインおすすめ2026年版（VS Code・JetBrains）', datePublished: '2026-05-26', dateModified: '2026-07-02', url: 'https://www.promptquorum.com/ja/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'ja' },
  },

  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: '2026年本地LLM最佳IDE插件推荐（VS Code & JetBrains）',
    seoTitle: '2026年本地LLM IDE插件推荐（VS Code & JetBrains）',
    metaDescription: 'Continue、Cline、Aider、Tabby——2026年本地LLM支持最佳IDE插件横向评测。哪款与Ollama或LM Studio连接最流畅？代码补全延迟、上下文窗口与离线可用性全面对比，支持VS Code和JetBrains全系IDE。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Continue（VS Code + JetBrains）是2026年本地LLM最佳免费IDE插件：原生连接Ollama和所有OpenAI兼容API，支持对话+代码补全+上下文感知代码编辑，完全在本地硬件上运行。**',
    quickAnswerTop: {
      question: '编程时使用本地AI模型最好的IDE插件是什么？',
      answer: 'Continue（免费开源）是VS Code和JetBrains中Ollama和本地LLM的最佳IDE插件。仅需代码补全的话，Tabby是最轻量选择。智能体代码生成（文件编辑、Shell命令）Cline功能最强。',
      bullets: [
        'Continue：综合最佳 — Ollama + OpenAI API，对话+补全，VS Code + JetBrains',
        'Cline：最佳智能体IDE插件 — 读写文件、执行终端命令、使用MCP工具',
        'Tabby：最佳自托管代码补全 — 自有推理服务器，1–3B模型',
        'Aider：最佳终端工具 — git感知，多文件编辑，14B以上模型表现优秀',
        'Cursor：最佳商业选择 — 已支持本地模型，云优先设计',
      ],
      updatedDate: '2026-07',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue（开源）是默认选择：原生Ollama支持，VS Code + JetBrains',
          'Cline智能体可读写文件并运行Shell命令——智能体任务功能最强',
          'Tabby运行自有推理服务器（1–3B模型）——代码补全延迟最低',
          'Aider是终端优先选项——git提交感知，多文件重写',
          'Cursor支持本地模型，但最佳功能需要云端',
        ],
      },
      rankedList: {
        title: '本地LLM IDE插件排名',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Continue是2026年本地LLM最佳IDE插件，因为它原生支持Ollama，在VS Code和JetBrains中都能运行，无需云依赖即可提供对话、代码补全和代码编辑功能。',
          },
          {
            type: 'plain-terms',
            text: '本地LLM的IDE插件将你的代码编辑器（VS Code、IntelliJ）连接到在本机运行的模型（通过Ollama或LM Studio）。模型看到你的代码并响应——代码不离开你的电脑，无API费用，无使用限制。',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Continue — 综合最佳（免费开源）',
            content: 'Continue是本地LLM领先的开源AI编程助手。连接Ollama、LM Studio、llama.cpp和所有OpenAI兼容API。功能：内联对话（Cmd+L）、代码补全（Tab）、MCP工具、代码库索引、自定义斜杠命令。VS Code扩展已有200万以上安装量。JetBrains插件支持IntelliJ、PyCharm、GoLand、WebStorm和Rider。推荐本地模型：Qwen3-Coder 14B（编程）、Llama 3.3 8B（对话）。注意（2026年6月）：Continue已被Cursor收购，v2.0.0为最终版本，GitHub仓库现为只读状态。插件仍可与Ollama正常运行，但原团队已停止开发。',
            affiliateLinks: [
              { label: '在VS Code Marketplace下载Continue（免费）', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 2,
            title: 'Cline — 智能体编程任务最佳',
            content: 'Cline是本地LLM中功能最强的智能体编程插件。可以读写文件、运行终端命令、使用MCP服务器。配合Ollama + Qwen3-Coder 32B，Cline能从一个提示词实现完整功能。限制：可靠的多步骤智能体任务需要32B模型。支持VS Code和JetBrains（IntelliJ、PyCharm、WebStorm）。定价：免费（BYOK）或ClinePass $9.99/月；Teams $20/用户/月（前10个席位免费）。VS Code安装量超500万，开发者超800万。',
            affiliateLinks: [
              { label: '在VS Code Marketplace下载Cline（免费）', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 3,
            title: 'Tabby — 最佳自托管代码补全服务器',
            content: 'Tabby是运行自有推理服务器的自托管编程助手。使用专门为填充中间（FIM）代码补全训练的小型模型（1–3B参数）——比通用7B模型快得多。支持VS Code、JetBrains、Vim/Neovim和Emacs的IDE扩展。',
            affiliateLinks: [
              { label: 'Tabby在GitHub上查看（开源自托管）', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 4,
            title: 'Aider — 最佳终端原生AI编程工具',
            content: 'Aider是集成git的终端AI配对程序员。理解整个代码库结构，进行多文件编辑，自动提交更改。支持Ollama（--model ollama/qwen2.5-coder:14b）、LM Studio或任何OpenAI兼容API。免费开源。',
            affiliateLinks: [
              { label: 'Aider在GitHub上查看（开源）', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 5,
            title: 'Cursor — 支持本地模型的最佳商业选择',
            content: 'Cursor是内置AI功能的VS Code分支。Cursor在"Custom API"设置中通过Ollama和LM Studio支持本地模型。但最强大的功能（带网络搜索的Agent模式）仍需要云端模型。定价：Hobby（免费）；Pro $20/月（含$20 AI积分用于前沿模型；Auto模式无限制免费）；Pro+ $60/月；Ultra $200/月。本地模型使用：Hobby层。注：Cursor收购了Supermaven（2024年）和Continue.dev（2026年6月）；SpaceX于2026年6月达成以600亿美元收购Cursor的协议（预计2026年Q3完成）。',
            affiliateLinks: [
              { label: 'Cursor Pro订阅', url: 'https://cursor.com' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Continue能完全替代GitHub Copilot用于本地使用吗？',
            a: '大多数场景下，可以。使用Qwen3-Coder 14B Q8的Continue在Python、TypeScript和Go方面提供与GitHub Copilot相当的代码补全质量。对于注重隐私的代码库，Continue + 本地Ollama是更好的选择。',
          },
          {
            q: '哪个插件最适合多文件重构？',
            a: 'Cline（VS Code）或Aider（终端）。两者都能读取多个文件、理解依赖关系并在代码库间进行协调更改。Cline更适合可视化反馈，Aider更适合git感知提交。复杂重构建议使用30B以上模型（24GB显存）。',
          },
          {
            q: '能否用LM Studio代替Ollama使用这些插件？',
            a: '可以。LM Studio默认在1234端口暴露OpenAI兼容API。将插件提供商设为"openai"，基础URL设为`http://localhost:1234/v1`，使用LM Studio库中的任意模型名称。Continue、Cline和Aider都支持这种配置。',
          },
          {
            q: 'Tabby和Continue在代码补全上有什么区别？',
            a: 'Tabby使用专门为代码补全训练的小型FIM模型（StarCoder2等），延迟约100–200ms，体验更流畅。Continue使用你选择的Ollama模型（如Qwen3-Coder 7B），灵活性更高但延迟稍大（300–800ms）。如果补全速度是首要考虑，选Tabby；如果需要聊天+补全的综合体验，选Continue。',
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
          acceptedAnswer: { '@type': 'Answer', text: '大多数场景下可以。Continue + Qwen3-Coder 14B Q8的代码补全质量与Copilot相当。对于注重隐私的代码库，Continue + 本地Ollama是更好的选择。' },
        },
        {
          '@type': 'Question',
          name: '哪个插件最适合多文件重构？',
          acceptedAnswer: { '@type': 'Answer', text: 'Cline（VS Code）或Aider（终端）。两者均可读取多文件并协调更改。建议配合30B以上模型使用，以实现可靠的复杂重构。' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '2026年本地LLM最佳IDE插件排名',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Continue', description: '综合最佳 — Ollama原生，VS Code + JetBrains，免费' },
        { '@type': 'ListItem', position: 2, name: 'Cline', description: '智能体最佳 — 读写文件，VS Code' },
        { '@type': 'ListItem', position: 3, name: 'Tabby', description: '最佳自托管补全 — FIM模型1–3B' },
        { '@type': 'ListItem', position: 4, name: 'Aider', description: '终端最佳 — git感知，多文件，开源' },
        { '@type': 'ListItem', position: 5, name: 'Cursor', description: '商业最佳 — 本地模型支持，20美元/月Pro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: '2026年本地LLM最佳IDE插件推荐（VS Code & JetBrains）', datePublished: '2026-05-26', dateModified: '2026-07-02', url: 'https://www.promptquorum.com/zh/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'zh' },
  },

  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: 'Mejores plugins IDE para LLMs locales en 2026 (VS Code y JetBrains)',
    seoTitle: 'Mejores plugins IDE para LLM local 2026: VS Code y JetBrains',
    metaDescription: 'Continue, Cline, Aider, Tabby — clasificados por soporte de modelos locales en 2026. ¿Qué plugin IDE se conecta mejor a Ollama o LM Studio?',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Continue (VS Code + JetBrains) es el mejor plugin IDE gratuito para LLMs locales en 2026: conexión nativa a Ollama y cualquier API compatible con OpenAI, chat + autocompletado + edición de código contextual, ejecutándose completamente en tu hardware sin enviar datos a la nube.**',
    quickAnswerTop: {
      question: '¿Cuál es el mejor plugin IDE para ejecutar modelos de IA locales mientras programas?',
      answer: 'Continue (gratuito, open-source) es el mejor plugin IDE para Ollama y LLMs locales en VS Code y JetBrains. Para autocompletado únicamente, Tabby es la opción más ligera. Para codificación agéntica (edición de archivos, comandos shell), Cline es el más potente. Aider funciona mejor en la terminal.',
      bullets: [
        'Continue: el mejor en general — Ollama + API OpenAI, chat + autocompletado, VS Code + JetBrains',
        'Cline: el mejor plugin agéntico — lee y escribe archivos, ejecuta comandos de terminal, usa herramientas MCP',
        'Tabby: el mejor autocompletado self-hosted — servidor de inferencia propio, modelos de 1–3B',
        'Aider: el mejor nativo de terminal — consciente de git, ediciones multi-archivo, excelente con modelos 14B+',
        'Cursor: la mejor opción comercial — soporte de modelos locales añadido, diseño cloud-first',
      ],
      updatedDate: '2026-07',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue (open-source) es la elección predeterminada: soporte nativo de Ollama, VS Code + JetBrains',
          'Los agentes de Cline leen y escriben archivos y ejecutan comandos shell — el más potente para tareas agénticas',
          'Tabby ejecuta su propio servidor de inferencia (modelos 1–3B) — la menor latencia de autocompletado',
          'Aider es la opción terminal-first — consciente de commits git, reescrituras multi-archivo',
          'Cursor soporta modelos locales, pero sus mejores funciones requieren la nube',
          'Los cuatro funcionan con Ollama; solo Tabby requiere su propio servidor backend',
        ],
      },
      rankedList: {
        title: 'Mejores plugins IDE para LLMs locales — Clasificación',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Continue es el mejor plugin IDE para LLMs locales en 2026 porque soporta Ollama de forma nativa, funciona tanto en VS Code como en JetBrains, y ofrece chat, autocompletado y edición de código sin ninguna dependencia de la nube.',
          },
          {
            type: 'plain-terms',
            text: 'Un plugin IDE para LLMs locales conecta tu editor de código (VS Code, IntelliJ) a un modelo que se ejecuta en tu propia máquina (a través de Ollama, LM Studio o llama.cpp). El modelo ve tu código y responde — ningún código sale de tu computadora, sin tarifas de API, sin límites de uso.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Continue — El mejor en general (gratuito, open-source)',
            content: 'Continue es el asistente de codificación de IA open-source líder para LLMs locales. Se conecta a Ollama, LM Studio, llama.cpp y cualquier API compatible con OpenAI. Funciones: chat en línea (Cmd+L), autocompletado (Tab), herramientas MCP, indexación de codebase y comandos slash personalizados. La extensión de VS Code tiene más de 2M de instalaciones. El plugin de JetBrains funciona en IntelliJ, PyCharm, GoLand, WebStorm y Rider. Mejores modelos locales: Qwen3-Coder 14B (codificación), Llama 3.3 8B (chat). Nota (junio 2026): Continue fue adquirido por Cursor. La versión 2.0.0 es la última publicación; el repositorio de GitHub ahora es de solo lectura. La extensión sigue funcionando con Ollama, pero el equipo original no la desarrollará más.',
            affiliateLinks: [
              { label: 'Continue en VS Code Marketplace (gratuito)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 2,
            title: 'Cline — El mejor para tareas de codificación agéntica',
            content: 'Cline (anteriormente Claude Dev) es el plugin de codificación agéntica más potente para LLMs locales. Lee y escribe archivos, ejecuta comandos de terminal, navega la web (mediante herramienta de navegador) y usa servidores MCP. Con Ollama + Qwen3-Coder 32B, Cline puede implementar funcionalidades completas a partir de un prompt. Limitaciones: se requieren modelos de 32B para tareas agénticas de múltiples pasos fiables; los modelos de 14B funcionan para tareas simples. Disponible en VS Code y JetBrains (IntelliJ, PyCharm, WebStorm). Precio: gratuito (BYOK) o ClinePass a $9,99/mes; Teams a $20/usuario/mes (primeros 10 puestos gratuitos). Backends compatibles: Ollama, LM Studio, proxy LiteLLM.',
            affiliateLinks: [
              { label: 'Cline en VS Code Marketplace (gratuito)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 3,
            title: 'Tabby — El mejor servidor de autocompletado self-hosted',
            content: 'Tabby es un asistente de codificación self-hosted que ejecuta su propio servidor de inferencia (separado de Ollama). Usa modelos pequeños y especializados de completado de código (1–3B parámetros) entrenados específicamente para autocompletado fill-in-the-middle (FIM) — significativamente más rápido que usar un modelo 7B de propósito general. Las extensiones IDE de Tabby existen para VS Code, JetBrains, Vim/Neovim y Emacs. Ideal para: equipos que quieren autocompletado rápido (<200ms) sin la nube. Requiere un servidor dedicado o una máquina de escritorio potente.',
            affiliateLinks: [
              { label: 'Tabby en GitHub (open-source, self-hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 4,
            title: 'Aider — La mejor codificación de IA nativa de terminal',
            content: 'Aider es un programador en par de IA basado en terminal que se integra con git. Entiende la estructura completa de tu repositorio, realiza ediciones multi-archivo y hace commits de los cambios automáticamente. Funciona con Ollama (via --model ollama/qwen2.5-coder:14b), LM Studio o cualquier API compatible con OpenAI. Mejores modelos locales: Qwen3-Coder 32B (modo arquitecto) + Qwen3-Coder 7B (modo editor). Aider usa un enfoque de dos modelos: un modelo grande planifica los cambios, uno pequeño los implementa. Gratuito y open-source.',
            affiliateLinks: [
              { label: 'Aider en GitHub (open-source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 5,
            title: 'Cursor — La mejor opción comercial con soporte de modelos locales',
            content: 'Cursor es un fork de VS Code con funciones de IA integradas. Cursor soporta modelos locales a través de Ollama y LM Studio en su configuración "Custom API". Sin embargo, las funciones más potentes (modo Agent con búsqueda web, conciencia completa del codebase) requieren modelos en la nube. Precios: Hobby (gratuito); Pro a $20/mes (incluye $20 en créditos de IA para modelos fronteras; modo Auto ilimitado sin coste); Pro+ a $60/mes; Ultra a $200/mes. Uso de modelos locales: nivel Hobby. Nota: Cursor adquirió Supermaven (2024) y Continue.dev (junio 2026); SpaceX acordó adquirir Cursor por $60.000 millones en junio de 2026 (cierre previsto en T3 2026).',
            affiliateLinks: [
              { label: 'Suscripción Cursor Pro', url: 'https://cursor.com' },
            ],
          },
        ],
      },
      setupGuide: {
        title: 'Configuración rápida: Continue + Ollama en VS Code',
        content: 'La forma más rápida de empezar a programar con LLM local:',
        numberedItems: [
          'Instala Ollama: `curl -fsSL https://ollama.com/install.sh | sh`',
          'Descarga un modelo de codificación: `ollama pull qwen2.5-coder:14b`',
          'En VS Code, instala Continue desde el marketplace de extensiones',
          'Abre la configuración de Continue (Cmd+Shift+P → "Continue: Open Config")',
          'Añade el proveedor Ollama: define `provider: "ollama"`, `model: "qwen2.5-coder:14b"`',
          'Reinicia VS Code — la pestaña de Continue aparece en la barra lateral',
          'Presiona Cmd+L para abrir el chat, o empieza a escribir y presiona Tab para el autocompletado',
        ],
      },
      modelRecommendations: {
        title: 'Mejores modelos locales por plugin y tarea',
        columns: ['Plugin', 'Mejor modelo de codificación (local)', 'Mejor modelo de chat (local)', 'VRAM mínima'],
        rows: [
          { 'Plugin': 'Continue', 'Mejor modelo de codificación (local)': 'Qwen3-Coder 14B Q8', 'Mejor modelo de chat (local)': 'Llama 3.3 8B Q4', 'VRAM mínima': '16 GB' },
          { 'Plugin': 'Cline', 'Mejor modelo de codificación (local)': 'Qwen3-Coder 32B Q4', 'Mejor modelo de chat (local)': 'Qwen3 32B Q4', 'VRAM mínima': '24 GB' },
          { 'Plugin': 'Tabby', 'Mejor modelo de codificación (local)': 'StarCoder2-7B (integrado)', 'Mejor modelo de chat (local)': 'N/A (solo código)', 'VRAM mínima': '8 GB' },
          { 'Plugin': 'Aider', 'Mejor modelo de codificación (local)': 'Qwen3-Coder 14B (editor)', 'Mejor modelo de chat (local)': 'Qwen3-Coder 32B (arquitecto)', 'VRAM mínima': '16–24 GB' },
          { 'Plugin': 'Cursor', 'Mejor modelo de codificación (local)': 'DeepSeek-Coder-V2 (via Ollama)', 'Mejor modelo de chat (local)': 'Qwen3 14B', 'VRAM mínima': '16 GB' },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '¿Puede Continue reemplazar completamente a GitHub Copilot para uso local?',
            a: 'Para la mayoría de los casos de uso, sí. Continue con Qwen3-Coder 14B Q8 ofrece una calidad de autocompletado comparable a GitHub Copilot para Python, TypeScript y Go. Copilot aún tiene ventaja con APIs muy nuevas y uso de librerías oscuras donde su ventaja de datos de entrenamiento se nota. Para codebases donde la privacidad es crítica, Continue + Ollama local es la mejor opción.',
          },
          {
            q: '¿Qué plugin funciona mejor para refactorización multi-archivo?',
            a: 'Cline o Aider. Ambos pueden leer múltiples archivos, entender dependencias y realizar ediciones coordinadas en un codebase. Cline funciona dentro de VS Code (mejor para retroalimentación visual); Aider funciona en la terminal (mejor para integración CI/CD y commits conscientes de git). Para modelos de 30B+ con 24 GB de VRAM, Cline con Qwen3-Coder 32B maneja refactorizaciones complejas de forma fiable.',
          },
          {
            q: '¿Tabby funciona sin GPU?',
            a: 'Sí — Tabby puede ejecutarse en CPU con modelos pequeños (1–3B). Sin embargo, la latencia de autocompletado en CPU es de 500ms–2s, lo que se siente lento comparado con el objetivo de <200ms para una codificación fluida. Para máquinas solo con CPU, Continue + Ollama con un modelo rápido de 1B o 3B ofrece mejor control de latencia.',
          },
          {
            q: '¿Puedo usar estos plugins con LM Studio en lugar de Ollama?',
            a: 'Sí. LM Studio expone una API compatible con OpenAI en el puerto 1234 por defecto. Define el proveedor de tu plugin como "openai" con la URL base `http://localhost:1234/v1` y usa cualquier nombre de modelo de tu biblioteca de LM Studio. Continue, Cline y Aider soportan todos esta configuración.',
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
            text: 'Para la mayoría de los casos de uso, sí. Continue con Qwen3-Coder 14B Q8 ofrece una calidad de autocompletado comparable para Python, TypeScript y Go. Para codebases donde la privacidad es crítica, Continue + Ollama local es la mejor opción.',
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
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Mejores plugins IDE para LLMs locales 2026',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Continue', description: 'El mejor en general — Ollama nativo, VS Code + JetBrains, gratuito' },
        { '@type': 'ListItem', position: 2, name: 'Cline', description: 'El mejor agéntico — lee y escribe archivos, ejecuta comandos, VS Code' },
        { '@type': 'ListItem', position: 3, name: 'Tabby', description: 'El mejor autocompletado self-hosted — modelos FIM 1–3B, todos los editores' },
        { '@type': 'ListItem', position: 4, name: 'Aider', description: 'El mejor nativo de terminal — consciente de git, ediciones multi-archivo, open-source' },
        { '@type': 'ListItem', position: 5, name: 'Cursor', description: 'La mejor opción comercial — soporte de modelos locales, $20/mes Pro' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Mejores plugins IDE para LLMs locales en 2026 (VS Code y JetBrains)',
      description: 'Comparativa clasificada de Continue, Cline, Tabby, Aider y Cursor para uso de LLM local en VS Code y JetBrains. Incluye guía de configuración, recomendaciones de modelos y comparación de rendimiento.',
      datePublished: '2026-05-26',
      dateModified: '2026-07-02',
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
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**2026년 대부분의 개발자에게 최적인 로컬 LLM IDE 플러그인은 Continue입니다. VS Code와 JetBrains를 모두 지원하며, Ollama를 통해 어떤 로컬 모델과도 연동되고, 자동완성·채팅·인라인 편집을 완전 오프라인으로 제공합니다.**',
    quickAnswerTop: {
      question: '2026년 로컬 LLM에 가장 좋은 IDE 플러그인은 무엇입니까?',
      answer: 'Cline(BYOK 무료, VS Code + JetBrains)이 2026년 중반 기준 최적입니다. Continue.dev는 2026년 6월 Cursor에 인수되어 v2.0.0이 최종 버전입니다. 에이전트 작업에는 Cline, 터미널 기반 편집에는 Aider, 팀 코드베이스 인식에는 Cody를 선택하십시오.',
      bullets: [
        'Continue — 인수됨(Cursor, 2026년 6월): v2.0.0 최종, 계속 실행되지만 유지 관리 없음',
        'Cline — 최고의 에이전트 플러그인: VS Code + JetBrains, BYOK 무료, ClinePass $9.99/월',
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
            text: '2026년 로컬 LLM 코딩 어시스턴트 중 Continue가 VS Code/JetBrains 통합, 무제한 Ollama 요청, 오프라인 완전 작동으로 가장 뛰어납니다.',
          },
          {
            type: 'plain-terms',
            text: '로컬 LLM IDE 플러그인은 GitHub Copilot 같은 클라우드 서비스 없이도 코드 자동완성·채팅·리팩토링을 제공합니다. Ollama로 로컬에서 실행 중인 모델을 IDE에 직접 연결합니다.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'Continue',
            tagline: '최고의 올인원 로컬 코딩 어시스턴트',
            verdict: 'VS Code와 JetBrains 모두 지원하며 Ollama·LM Studio와 완벽하게 통합됩니다. 자동완성, 채팅, 인라인 편집을 무료로 제공합니다. 주의: 2026년 6월 Cursor에 인수되어 v2.0.0이 최종 버전입니다(저장소 읽기 전용). 기능은 계속 작동하지만 업데이트는 없습니다.',
            pros: ['VS Code와 JetBrains 완전 지원', 'Ollama·LM Studio 완벽 통합', '자동완성·채팅·인라인 편집 무료 제공', '완전 오프라인 작동', 'Apache 2.0 라이선스로 포크 가능'],
            cons: ['2026년 6월 이후 공식 유지 관리 없음', '고급 에이전트 기능은 Cline보다 제한적'],
            affiliateLinks: [
              { productName: 'Continue', url: 'https://continue.dev', productCategory: 'software' },
            ],
          },
          {
            rank: 2,
            name: 'Cline',
            tagline: '최고의 에이전트 코딩 플러그인',
            verdict: '파일 시스템 접근, 터미널 명령 실행, 브라우저 자동화를 지원합니다. Ollama 로컬 모델과 연동되며 대규모 리팩토링에 적합합니다. 무료(BYOK) 또는 ClinePass $9.99/월; Teams $20/사용자/월(첫 10석 무료).',
            pros: ['파일·터미널 에이전트 기능', '로컬 모델 전체 지원', 'VS Code 및 JetBrains 지원', 'MCP 마켓플레이스'],
            cons: ['복잡한 에이전트 작업에는 32B 모델 필요'],
            affiliateLinks: [
              { productName: 'Cline', url: 'https://github.com/cline/cline', productCategory: 'software' },
            ],
          },
          {
            rank: 3,
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
            rank: 4,
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
            rank: 5,
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
      },
      setupGuide: {
        heading: '설치 가이드: Continue + Ollama 설정하기',
        numberedItems: [
          'ollama.com에서 Ollama를 설치합니다.',
          '코딩 모델을 다운로드합니다: `ollama pull qwen2.5-coder:14b`',
          'VS Code 마켓플레이스에서 Continue 확장을 설치합니다.',
          '~/.continue/config.json에서 Continue를 Ollama 엔드포인트에 연결합니다.',
          'VS Code에서 Cmd/Ctrl+L을 눌러 채팅을 시작합니다.',
          'Tab 키로 인라인 자동완성을 사용합니다.',
          '인라인 편집을 위해 Cmd/Ctrl+I를 사용합니다.',
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
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      inLanguage: 'ko',
      name: '2026년 최고의 로컬 LLM IDE 플러그인 5선',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Continue', description: '최고의 올인원 로컬 코딩 어시스턴트' },
        { '@type': 'ListItem', position: 2, name: 'Cline', description: '최고의 에이전트 코딩 플러그인' },
        { '@type': 'ListItem', position: 3, name: 'Aider', description: '최고의 터미널 기반 AI 코딩 도구' },
        { '@type': 'ListItem', position: 4, name: 'Cody', description: '최고의 대형 코드베이스 인식 어시스턴트' },
        { '@type': 'ListItem', position: 5, name: 'Tabby', description: '최고의 셀프호스팅 코드 자동완성 서버' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: '2026년 최고의 로컬 LLM IDE 플러그인 5선',
      description: 'Continue, Cline, Aider, Cody, Tabby를 로컬 Ollama 모델과 함께 직접 비교합니다.',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      datePublished: '2026-05-26',
      dateModified: '2026-07-02',
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
    metaDescription: 'Continue, Cline, Aider, Cursor — classificados por suporte a modelos locais em 2026. Qual plugin de IDE se conecta melhor ao Ollama, LM Studio ou llama.cpp?',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Continue (VS Code + JetBrains) é o melhor plugin de IDE gratuito para LLMs locais em 2026: conecta-se nativamente ao Ollama e a qualquer API compatível com OpenAI, oferece chat + autocompletar + edição de código com reconhecimento de contexto, e roda inteiramente no seu hardware sem que nenhum dado saia da sua máquina.**',
    quickAnswerTop: {
      question: 'Qual é o melhor plugin de IDE para executar modelos de IA locais enquanto você programa?',
      answer: 'Continue (gratuito, open-source) é o melhor plugin de IDE para Ollama e LLMs locais no VS Code e em IDEs JetBrains. Para apenas autocompletar, Tabby é a opção mais leve. Para codificação agêntica (edição de arquivos, comandos de shell), Cline é o mais capaz. Aider funciona melhor no terminal.',
      bullets: [
        'Continue: melhor no geral — Ollama + API OpenAI, chat + autocompletar, VS Code + JetBrains',
        'Cline: melhor plugin de IDE agêntico — lê/escreve arquivos, executa comandos de terminal, usa ferramentas MCP',
        'Tabby: melhor autocompletar self-hosted — roda seu próprio servidor de inferência, modelos de 1–3B',
        'Aider: melhor nativo de terminal — com reconhecimento de git, edições multiarquivo, excelente com modelos 14B+',
        'Cursor: melhor opção comercial — suporte a modelos locais adicionado, mas projetado com foco na nuvem',
      ],
      updatedDate: '2026-07',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue (open-source) é a escolha padrão: suporte nativo ao Ollama, VS Code + JetBrains',
          'Os agentes do Cline leem/escrevem arquivos e executam comandos de shell — o mais poderoso para tarefas agênticas',
          'Tabby roda seu próprio servidor de inferência (modelos de 1–3B) — menor latência de autocompletar',
          'Aider é a opção terminal-first — com reconhecimento de commits git, reescritas multiarquivo',
          'Cursor suporta modelos locais (Ollama/LM Studio), mas seus melhores recursos exigem a nuvem',
          'Os quatro funcionam com Ollama; apenas o Tabby exige seu próprio servidor backend',
        ],
      },
      rankedList: {
        title: 'Melhores plugins de IDE para LLMs locais — Classificação',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Continue é o melhor plugin de IDE para LLMs locais em 2026 porque suporta o Ollama nativamente, funciona tanto no VS Code quanto no JetBrains e oferece chat, autocompletar e edição de código sem nenhuma dependência da nuvem.',
          },
          {
            type: 'plain-terms',
            text: 'Um plugin de IDE para LLMs locais conecta seu editor de código (VS Code, IntelliJ) a um modelo executando na sua própria máquina (via Ollama, LM Studio ou llama.cpp). O modelo vê seu código e responde — nenhum código sai do seu computador, sem taxas de API, sem limites de uso.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Continue — Melhor no geral (gratuito, open-source)',
            content: 'Continue é o principal assistente de codificação de IA open-source para LLMs locais. Conecta-se ao Ollama, LM Studio, llama.cpp e a qualquer API compatível com OpenAI. Recursos: chat inline (Cmd+L), autocompletar (Tab), ferramentas MCP, indexação de codebase e comandos slash personalizados. A extensão do VS Code tem mais de 2M de instalações. O plugin do JetBrains funciona no IntelliJ, PyCharm, GoLand, WebStorm e Rider. Melhores modelos locais: Qwen3-Coder 14B (codificação), Llama 3.3 8B (chat). Nota (junho de 2026): o Continue foi adquirido pela Cursor. A versão 2.0.0 é a última publicação; o repositório do GitHub agora é somente leitura. A extensão continua funcionando com Ollama, mas a equipe original não irá mais desenvolvê-la.',
            affiliateLinks: [
              { label: 'Continue no VS Code Marketplace (gratuito)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 2,
            title: 'Cline — Melhor para tarefas de codificação agêntica',
            content: 'Cline (anteriormente Claude Dev) é o plugin de codificação agêntica mais poderoso para LLMs locais. Ele lê e escreve arquivos, executa comandos de terminal, navega na web (via ferramenta de navegador) e usa servidores MCP. Com Ollama + Qwen3-Coder 32B, o Cline consegue implementar funcionalidades inteiras a partir de um prompt. Limitações: modelos de 32B são necessários para tarefas agênticas confiáveis de múltiplos passos; modelos de 14B funcionam para tarefas simples. Disponível no VS Code e JetBrains (IntelliJ, PyCharm, WebStorm). Preço: gratuito (BYOK) ou ClinePass a $9,99/mês; Teams a $20/usuário/mês (primeiros 10 vagas gratuitas). Backends compatíveis: Ollama, LM Studio, proxy LiteLLM.',
            affiliateLinks: [
              { label: 'Cline no VS Code Marketplace (gratuito)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 3,
            title: 'Tabby — Melhor servidor de autocompletar self-hosted',
            content: 'Tabby é um assistente de codificação self-hosted que roda seu próprio servidor de inferência (separado do Ollama). Ele usa modelos pequenos e especializados de completar código (1–3B parâmetros) treinados especificamente para autocompletar fill-in-the-middle (FIM) — significativamente mais rápido do que usar um modelo 7B de uso geral. Existem extensões de IDE do Tabby para VS Code, JetBrains, Vim/Neovim e Emacs. Ideal para: times que querem autocompletar rápido (<200ms) sem a nuvem. Requer um servidor dedicado ou uma máquina desktop potente.',
            affiliateLinks: [
              { label: 'Tabby no GitHub (open-source, self-hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 4,
            title: 'Aider — Melhor codificação de IA nativa de terminal',
            content: 'Aider é um par de programação de IA baseado em terminal que se integra ao git. Ele entende a estrutura completa do seu repositório, faz edições multiarquivo e faz commit das mudanças automaticamente. Funciona com Ollama (via --model ollama/qwen2.5-coder:14b), LM Studio ou qualquer API compatível com OpenAI. Melhores modelos locais: Qwen3-Coder 32B (modo arquiteto) + Qwen3-Coder 7B (modo editor). O Aider usa uma abordagem de dois modelos: um modelo grande planeja as mudanças, um modelo pequeno as implementa. Custo: gratuito e open-source.',
            affiliateLinks: [
              { label: 'Aider no GitHub (open-source)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 5,
            title: 'Cursor — Melhor opção comercial com suporte a modelos locais',
            content: 'Cursor é um fork do VS Code com recursos de IA integrados. O Cursor suporta modelos locais via Ollama e LM Studio em sua configuração "Custom API". No entanto, os recursos mais poderosos (modo Agent com busca na web, reconhecimento completo do codebase) exigem modelos na nuvem. Preços: Hobby (gratuito); Pro a $20/mês (inclui $20 em créditos de IA para modelos fronteira; modo Auto ilimitado sem custo); Pro+ a $60/mês; Ultra a $200/mês. Uso de modelos locais: nível Hobby. Nota: Cursor adquiriu o Supermaven (2024) e o Continue.dev (junho de 2026); a SpaceX concordou em adquirir o Cursor por $60 bilhões em junho de 2026 (fechamento previsto para o T3 de 2026).',
            affiliateLinks: [
              { label: 'Assinatura Cursor Pro', url: 'https://cursor.com' },
            ],
          },
        ],
      },
      setupGuide: {
        title: 'Configuração rápida: Continue + Ollama no VS Code',
        content: 'A forma mais rápida de começar a programar com LLM local:',
        numberedItems: [
          'Instale o Ollama: `curl -fsSL https://ollama.com/install.sh | sh`',
          'Baixe um modelo de codificação: `ollama pull qwen2.5-coder:14b`',
          'No VS Code, instale o Continue pelo marketplace de extensões',
          'Abra as configurações do Continue (Cmd+Shift+P → "Continue: Open Config")',
          'Adicione o provedor Ollama: defina `provider: "ollama"`, `model: "qwen2.5-coder:14b"`',
          'Reinicie o VS Code — a aba do Continue aparece na barra lateral',
          'Pressione Cmd+L para abrir o chat, ou comece a digitar e pressione Tab para autocompletar',
        ],
      },
      modelRecommendations: {
        title: 'Melhores modelos locais por plugin e tarefa',
        columns: ['Plugin', 'Melhor modelo de codificação (local)', 'Melhor modelo de chat (local)', 'VRAM mínima'],
        rows: [
          { 'Plugin': 'Continue', 'Melhor modelo de codificação (local)': 'Qwen3-Coder 14B Q8', 'Melhor modelo de chat (local)': 'Llama 3.3 8B Q4', 'VRAM mínima': '16 GB' },
          { 'Plugin': 'Cline', 'Melhor modelo de codificação (local)': 'Qwen3-Coder 32B Q4', 'Melhor modelo de chat (local)': 'Qwen3 32B Q4', 'VRAM mínima': '24 GB' },
          { 'Plugin': 'Tabby', 'Melhor modelo de codificação (local)': 'StarCoder2-7B (integrado)', 'Melhor modelo de chat (local)': 'N/A (apenas código)', 'VRAM mínima': '8 GB' },
          { 'Plugin': 'Aider', 'Melhor modelo de codificação (local)': 'Qwen3-Coder 14B (editor)', 'Melhor modelo de chat (local)': 'Qwen3-Coder 32B (arquiteto)', 'VRAM mínima': '16–24 GB' },
          { 'Plugin': 'Cursor', 'Melhor modelo de codificação (local)': 'DeepSeek-Coder-V2 (via Ollama)', 'Melhor modelo de chat (local)': 'Qwen3 14B', 'VRAM mínima': '16 GB' },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'O Continue pode substituir completamente o GitHub Copilot para uso local?',
            a: 'Para a maioria dos casos de uso, sim. Continue com Qwen3-Coder 14B Q8 oferece qualidade de autocompletar comparável ao GitHub Copilot para Python, TypeScript e Go. O Copilot ainda tem vantagem em APIs muito novas e uso de bibliotecas obscuras, onde sua vantagem de dados de treinamento aparece. Para codebases críticas em privacidade, Continue + Ollama local é a melhor escolha.',
          },
          {
            q: 'Qual plugin funciona melhor para refatoração multiarquivo?',
            a: 'Cline ou Aider. Ambos conseguem ler vários arquivos, entender dependências e fazer edições coordenadas em um codebase. O Cline funciona dentro do VS Code (melhor para feedback visual); o Aider funciona no terminal (melhor para integração CI/CD e commits com reconhecimento de git). Para modelos de 30B+ com 24 GB de VRAM, o Cline com Qwen3-Coder 32B lida com refatorações complexas de forma confiável.',
          },
          {
            q: 'O Tabby funciona sem GPU?',
            a: 'Sim — o Tabby pode rodar em CPU com modelos pequenos (1–3B). No entanto, a latência de autocompletar em CPU é de 500ms–2s, o que parece lento comparado ao objetivo de <200ms para uma codificação fluida. Para máquinas apenas com CPU, Continue + Ollama com um modelo rápido de 1B ou 3B oferece melhor controle de latência.',
          },
          {
            q: 'Posso usar esses plugins com o LM Studio em vez do Ollama?',
            a: 'Sim. O LM Studio expõe uma API compatível com OpenAI na porta 1234 por padrão. Defina o provedor do seu plugin como "openai" com a URL base `http://localhost:1234/v1` e use qualquer nome de modelo da sua biblioteca do LM Studio. Continue, Cline e Aider suportam essa configuração.',
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
            text: 'Para a maioria dos casos de uso, sim. Continue com Qwen3-Coder 14B Q8 oferece qualidade de autocompletar comparável para Python, TypeScript e Go. Para codebases críticas em privacidade, Continue + Ollama local é a melhor escolha.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual plugin funciona melhor para refatoração multiarquivo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cline (VS Code) ou Aider (terminal). Ambos leem vários arquivos e fazem edições coordenadas. O Cline é melhor para feedback visual; o Aider para commits com reconhecimento de git. Use modelos de 32B para refatorações complexas confiáveis.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Melhores plugins de IDE para LLMs locais 2026',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Continue', description: 'Melhor no geral — Ollama nativo, VS Code + JetBrains, gratuito' },
        { '@type': 'ListItem', position: 2, name: 'Cline', description: 'Melhor agêntico — lê/escreve arquivos, executa comandos, VS Code' },
        { '@type': 'ListItem', position: 3, name: 'Tabby', description: 'Melhor autocompletar self-hosted — modelos FIM 1–3B, todos os editores' },
        { '@type': 'ListItem', position: 4, name: 'Aider', description: 'Melhor nativo de terminal — com reconhecimento de git, edições multiarquivo, open-source' },
        { '@type': 'ListItem', position: 5, name: 'Cursor', description: 'Melhor comercial — suporte a modelos locais, $20/mês Pro' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Melhores plugins de IDE para LLMs locais em 2026 (VS Code e JetBrains)',
      description: 'Comparação classificada de Continue, Cline, Tabby, Aider e Cursor para uso de LLM local no VS Code e JetBrains. Inclui guia de configuração, recomendações de modelos e comparação de desempenho.',
      datePublished: '2026-05-26',
      dateModified: '2026-07-02',
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
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**تُعد Continue (VS Code + JetBrains) أفضل إضافة IDE مجانية لنماذج LLM المحلية في 2026: تتصل بـOllama وأي API متوافقة مع OpenAI بشكل أصلي، وتدعم الدردشة والإكمال التلقائي وتحرير الكود بوعي بالسياق، وتعمل بالكامل على جهازك دون إرسال أي بيانات إلى الخارج.**',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل إضافة IDE لتشغيل نماذج الذكاء الاصطناعي المحلية أثناء البرمجة؟',
        answer: 'تُعد Continue (مجانية ومفتوحة المصدر) أفضل إضافة IDE لـOllama ونماذج LLM المحلية في VS Code وبيئات JetBrains. للإكمال التلقائي فقط، تُعد Tabby الخيار الأخف. للبرمجة الوكيلية (تحرير الملفات وأوامر الصدفة)، يُعد Cline الأكثر قدرةً. يعمل Aider بشكل أفضل في الطرفية.',
        bullets: [
          'Continue: الأفضل عموماً — Ollama + API OpenAI، دردشة وإكمال تلقائي، VS Code + JetBrains',
          'Cline: أفضل إضافة IDE وكيلية — يقرأ/يكتب الملفات، ينفذ أوامر الطرفية، يستخدم أدوات MCP',
          'Tabby: أفضل إكمال تلقائي self-hosted — يشغّل خادم استدلال خاص به، نماذج 1–3B',
          'Aider: الأفضل للطرفية — يدرك git، تعديلات متعددة الملفات، ممتاز مع نماذج 14B+',
          'Cursor: أفضل خيار تجاري — دعم النماذج المحلية متاح لكنه مصمم أساساً للسحابة',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'أداة Continue (مفتوحة المصدر) هي الخيار الافتراضي: دعم Ollama الأصلي، VS Code + JetBrains',
          'وكلاء Cline يقرؤون/يكتبون الملفات وينفذون أوامر الصدفة — الأقوى للمهام الوكيلية',
          'تشغّل Tabby خادم استدلالها الخاص (نماذج 1–3B) — أقل زمن استجابة للإكمال التلقائي',
          'Aider هو الخيار الموجّه للطرفية — يدرك كومات git، إعادة كتابة متعددة الملفات',
          'يدعم Cursor النماذج المحلية (Ollama/LM Studio) لكن ميزاته الأفضل تتطلب السحابة',
          'الأربعة تعمل مع Ollama؛ Tabby فقط يتطلب خادم خلفية خاصاً',
        ],
      },
      rankedList: {
        title: 'أفضل إضافات IDE لنماذج LLM المحلية — مُصنَّفة',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'تُعد Continue أفضل إضافة IDE لنماذج LLM المحلية في 2026 لأنها تدعم Ollama بشكل أصلي، وتعمل في VS Code وJetBrains على حدٍّ سواء، وتوفر الدردشة والإكمال التلقائي وتحرير الكود دون أي اعتماد على السحابة.',
          },
          {
            type: 'plain-terms',
            text: 'تقوم إضافة IDE لنماذج LLM المحلية بتوصيل محرر الكود (VS Code أو IntelliJ) بنموذج يعمل على جهازك الخاص (عبر Ollama أو LM Studio أو llama.cpp). يرى النموذج كودك ويستجيب — لا يخرج أي كود من جهازك، ولا رسوم API، ولا حدود للاستخدام.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Continue — الأفضل عموماً (مجاني، مفتوح المصدر)',
            content: 'تُعد Continue المساعد البرمجي الرائد مفتوح المصدر لنماذج LLM المحلية. يتصل بـOllama وLM Studio وllama.cpp وأي API متوافقة مع OpenAI. الميزات: دردشة داخل المحرر (Cmd+L)، إكمال تلقائي (Tab)، أدوات بروتوكول سياق النموذج (MCP)، فهرسة قاعدة الكود وأوامر slash مخصصة. تجاوزت تثبيتات إضافة VS Code 2 مليون. إضافة JetBrains تعمل في IntelliJ وPyCharm وGoLand وWebStorm وRider. أفضل النماذج المحلية: Qwen3-Coder 14B (للبرمجة)، Llama 3.3 8B (للدردشة). ملاحظة (يونيو 2026): استحوذ Cursor على Continue. الإصدار 2.0.0 هو الإصدار النهائي؛ مستودع GitHub أصبح للقراءة فقط. تعمل الإضافة مع Ollama لكن الفريق الأصلي أوقف التطوير.',
            affiliateLinks: [
              { label: 'Continue في VS Code Marketplace (مجاني)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 2,
            title: 'Cline — الأفضل للمهام البرمجية الوكيلية',
            content: 'تُعد Cline (المعروفة سابقاً بـClaude Dev) أقوى إضافة برمجة وكيلية لنماذج LLM المحلية. تقرأ وتكتب الملفات، وتنفذ أوامر الطرفية، وتتصفح الويب (عبر أداة المتصفح)، وتستخدم خوادم MCP. مع Ollama + Qwen3-Coder 32B، يمكن لـCline تنفيذ ميزات كاملة من موجّه واحد. القيود: النماذج بحجم 32B ضرورية للمهام الوكيلية الموثوقة متعددة الخطوات؛ نماذج 14B تعمل للمهام البسيطة. متاحة في VS Code وJetBrains (IntelliJ وPyCharm وWebStorm). السعر: مجاني (BYOK) أو ClinePass بـ9.99$/شهر؛ Teams بـ20$/مستخدم/شهر (أول 10 مقاعد مجانية). الخلفيات المتوافقة: Ollama وLM Studio وLiteLLM proxy. أكثر من 5 ملايين تثبيت.',
            affiliateLinks: [
              { label: 'Cline في VS Code Marketplace (مجاني)', url: 'https://github.com/cline/cline' },
            ],
          },
          {
            rank: 3,
            title: 'Tabby — أفضل خادم إكمال تلقائي self-hosted',
            content: 'Tabby هو مساعد برمجة self-hosted يشغّل خادم استدلاله الخاص (منفصل عن Ollama). يستخدم نماذج صغيرة متخصصة لإكمال الكود (1–3B معامل) مُدرَّبة خصيصاً للإكمال التلقائي fill-in-the-middle (FIM) — أسرع بشكل ملحوظ من استخدام نموذج 7B للأغراض العامة. توجد إضافات IDE لـTabby في VS Code وJetBrains وVim/Neovim وEmacs. مثالي للفرق التي تريد إكمالاً تلقائياً سريعاً (<200ms) دون السحابة. يتطلب خادماً مخصصاً أو جهاز سطح مكتب قوي.',
            affiliateLinks: [
              { label: 'Tabby على GitHub (مفتوح المصدر، self-hosted)', url: 'https://tabby.tabbyml.com' },
            ],
          },
          {
            rank: 4,
            title: 'Aider — أفضل برمجة ذكاء اصطناعي أصيلة للطرفية',
            content: 'Aider هو مبرمج زوجي مبني على الطرفية يتكامل مع git. يفهم هيكل مستودعك بالكامل، ويجري تعديلات متعددة الملفات، ويُعمل commit للتغييرات تلقائياً. يعمل مع Ollama (عبر --model ollama/qwen2.5-coder:14b) وLM Studio وأي API متوافقة مع OpenAI. أفضل النماذج المحلية: Qwen3-Coder 32B (وضع المهندس المعماري) + Qwen3-Coder 7B (وضع المحرر). يستخدم Aider نهج النموذجَين: نموذج كبير يخطط للتغييرات، ونموذج صغير ينفذها. مجاني ومفتوح المصدر.',
            affiliateLinks: [
              { label: 'Aider على GitHub (مفتوح المصدر)', url: 'https://aider.chat' },
            ],
          },
          {
            rank: 5,
            title: 'Cursor — أفضل خيار تجاري مع دعم النماذج المحلية',
            content: 'Cursor هو fork من VS Code مع ميزات ذكاء اصطناعي مدمجة. يدعم Cursor النماذج المحلية عبر Ollama وLM Studio في إعداد "Custom API". إلا أن أقوى ميزات Cursor (وضع Agent مع بحث الويب، والوعي الكامل بقاعدة الكود) تتطلب نماذج سحابية. الأسعار: Hobby (مجاني)؛ Pro بـ20$/شهر (يتضمن 20$ من أرصدة الذكاء الاصطناعي للنماذج الحدية؛ وضع Auto غير محدود بدون تكلفة)؛ Pro+ بـ60$/شهر؛ Ultra بـ200$/شهر. استخدام النماذج المحلية: مستوى Hobby. ملاحظة: استحوذ Cursor على Supermaven (2024) وContinue.dev (يونيو 2026)؛ وافقت SpaceX على الاستحواذ على Cursor بـ60 مليار دولار في يونيو 2026 (إتمام المعاملة متوقع في الربع الثالث 2026).',
            affiliateLinks: [
              { label: 'اشتراك Cursor Pro', url: 'https://cursor.com' },
            ],
          },
        ],
      },
      setupGuide: {
        title: 'الإعداد السريع: Continue + Ollama في VS Code',
        content: 'أسرع طريقة للبدء بالبرمجة مع LLM محلي:',
        numberedItems: [
          'ثبّت Ollama: `curl -fsSL https://ollama.com/install.sh | sh`',
          'حمّل نموذج برمجة: `ollama pull qwen2.5-coder:14b`',
          'في VS Code، ثبّت Continue من سوق الإضافات',
          'افتح إعدادات Continue (Cmd+Shift+P ← "Continue: Open Config")',
          'أضف موفر Ollama: عيّن `provider: "ollama"`، `model: "qwen2.5-coder:14b"`',
          'أعد تشغيل VS Code — تظهر تبويب Continue في الشريط الجانبي',
          'اضغط Cmd+L لفتح الدردشة، أو ابدأ الكتابة واضغط Tab للإكمال التلقائي',
        ],
      },
      modelRecommendations: {
        title: 'أفضل النماذج المحلية حسب الإضافة والمهمة',
        columns: ['الإضافة', 'أفضل نموذج برمجة (محلي)', 'أفضل نموذج دردشة (محلي)', 'الحد الأدنى من VRAM'],
        rows: [
          { 'الإضافة': 'Continue', 'أفضل نموذج برمجة (محلي)': 'Qwen3-Coder 14B Q8', 'أفضل نموذج دردشة (محلي)': 'Llama 3.3 8B Q4', 'الحد الأدنى من VRAM': '16 GB' },
          { 'الإضافة': 'Cline', 'أفضل نموذج برمجة (محلي)': 'Qwen3-Coder 32B Q4', 'أفضل نموذج دردشة (محلي)': 'Qwen3 32B Q4', 'الحد الأدنى من VRAM': '24 GB' },
          { 'الإضافة': 'Tabby', 'أفضل نموذج برمجة (محلي)': 'StarCoder2-7B (مدمج)', 'أفضل نموذج دردشة (محلي)': 'غير متاح (الكود فقط)', 'الحد الأدنى من VRAM': '8 GB' },
          { 'الإضافة': 'Aider', 'أفضل نموذج برمجة (محلي)': 'Qwen3-Coder 14B (محرر)', 'أفضل نموذج دردشة (محلي)': 'Qwen3-Coder 32B (مهندس معماري)', 'الحد الأدنى من VRAM': '16–24 GB' },
          { 'الإضافة': 'Cursor', 'أفضل نموذج برمجة (محلي)': 'DeepSeek-Coder-V2 (عبر Ollama)', 'أفضل نموذج دردشة (محلي)': 'Qwen3 14B', 'الحد الأدنى من VRAM': '16 GB' },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'هل يمكن لـContinue أن يحل محل GitHub Copilot بالكامل للاستخدام المحلي؟',
            a: 'في معظم حالات الاستخدام، نعم. يوفر Continue مع Qwen3-Coder 14B Q8 جودة إكمال تلقائي مماثلة لـGitHub Copilot في Python وTypeScript وGo. لا يزال Copilot يتميز في واجهات برمجة التطبيقات الجديدة جداً والمكتبات الغامضة حيث تظهر ميزة بيانات تدريبه. لقواعد الكود الحساسة من حيث الخصوصية، يُعد Continue + Ollama المحلي الخيار الأمثل.',
          },
          {
            q: 'أي إضافة تعمل بشكل أفضل لإعادة الهيكلة متعددة الملفات؟',
            a: 'Cline أو Aider. كلاهما يمكنه قراءة ملفات متعددة وفهم التبعيات وإجراء تعديلات منسقة في قاعدة الكود. يعمل Cline داخل VS Code (أفضل للتغذية الراجعة المرئية)؛ يعمل Aider في الطرفية (أفضل لتكامل CI/CD وcommits المدركة لـgit). للنماذج بحجم 30B+ مع 24 GB من VRAM، يتعامل Cline مع Qwen3-Coder 32B مع إعادة الهيكلة المعقدة بشكل موثوق.',
          },
          {
            q: 'هل يعمل Tabby بدون GPU؟',
            a: 'نعم — يمكن لـTabby العمل على CPU مع نماذج صغيرة (1–3B). إلا أن زمن استجابة الإكمال التلقائي على CPU يتراوح بين 500ms و2s، وهو بطيء مقارنةً بهدف <200ms للبرمجة السلسة. للأجهزة التي تعمل بـCPU فقط، يوفر Continue + Ollama مع نموذج سريع بحجم 1B أو 3B تحكماً أفضل في زمن الاستجابة.',
          },
          {
            q: 'هل يمكنني استخدام هذه الإضافات مع LM Studio بدلاً من Ollama؟',
            a: 'نعم. يعرض LM Studio API متوافقة مع OpenAI على المنفذ 1234 افتراضياً. عيّن موفر الإضافة على "openai" مع عنوان URL الأساسي `http://localhost:1234/v1` واستخدم أي اسم نموذج من مكتبة LM Studio. تدعم Continue وCline وAider جميعها هذا الإعداد.',
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
            text: 'في معظم حالات الاستخدام، نعم. يوفر Continue مع Qwen3-Coder 14B Q8 جودة إكمال تلقائي مماثلة في Python وTypeScript وGo. لقواعد الكود الحساسة من حيث الخصوصية، Continue + Ollama المحلي هو الخيار الأمثل.',
          },
        },
        {
          '@type': 'Question',
          name: 'أي إضافة تعمل بشكل أفضل لإعادة الهيكلة متعددة الملفات؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cline (VS Code) أو Aider (الطرفية). كلاهما يقرآن ملفات متعددة ويجريان تعديلات منسقة. Cline أفضل للتغذية الراجعة المرئية؛ Aider أفضل لـcommits المدركة لـgit. استخدم نماذج 32B لإعادة هيكلة معقدة موثوقة.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'أفضل إضافات IDE لنماذج LLM المحلية 2026',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Continue', description: 'الأفضل عموماً — Ollama أصلي، VS Code + JetBrains، مجاني' },
        { '@type': 'ListItem', position: 2, name: 'Cline', description: 'الأفضل وكيلياً — يقرأ/يكتب الملفات، ينفذ الأوامر، VS Code' },
        { '@type': 'ListItem', position: 3, name: 'Tabby', description: 'أفضل إكمال تلقائي self-hosted — نماذج FIM 1–3B، جميع المحررات' },
        { '@type': 'ListItem', position: 4, name: 'Aider', description: 'الأفضل أصيلاً للطرفية — يدرك git، تعديلات متعددة الملفات، مفتوح المصدر' },
        { '@type': 'ListItem', position: 5, name: 'Cursor', description: 'الأفضل تجارياً — دعم النماذج المحلية، 20$/شهر Pro' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'أفضل إضافات IDE لنماذج LLM المحلية في 2026 (VS Code وJetBrains)',
      description: 'مقارنة مُصنَّفة لـContinue وCline وTabby وAider وCursor لاستخدام LLM محلي في VS Code وJetBrains. يتضمن دليل الإعداد وتوصيات النماذج ومقارنة الأداء.',
      datePublished: '2026-05-26',
      dateModified: '2026-07-02',
      url: 'https://www.promptquorum.com/ar/power-local-llm/best-local-llm-ide-plugins-2026',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
  },
}
