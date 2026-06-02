import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Coding Assistants',
    title: 'Best IDE Plugins for Local LLMs in 2026 (VS Code & JetBrains)',
    seoTitle: 'Best Local LLM IDE Plugins 2026 (VS Code & JetBrains)',
    metaDescription: 'Continue, Cline, Aider, Cursor — ranked for local model support in 2026. Which IDE plugin connects to Ollama, LM Studio, or llama.cpp best?',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Continue (VS Code + JetBrains) is the best free IDE plugin for local LLMs in 2026: it connects natively to Ollama and any OpenAI-compatible API, supports chat + autocomplete + context-aware code editing, and runs entirely on your hardware with zero data leaving your machine.**',
    quickAnswerTop: {
      question: 'What is the best IDE plugin for running local AI models while coding?',
      answer: 'Continue (free, open-source) is the best IDE plugin for Ollama and local LLMs in VS Code and JetBrains IDEs. For autocomplete-only, Tabby is the lightest option. For agentic coding (file edits, shell commands), Cline is the most capable. Aider works best in the terminal.',
      bullets: [
        'Continue: best overall — Ollama + OpenAI API, chat + autocomplete, VS Code + JetBrains',
        'Cline: best agentic IDE plugin — reads/writes files, runs terminal commands, uses MCP tools',
        'Tabby: best self-hosted autocomplete — runs its own inference server, 1–3B models',
        'Aider: best terminal-native — git-aware, multi-file edits, excellent with 14B+ models',
        'Cursor: best commercial option — local model support added but cloud-first by design',
      ],
      updatedDate: '2026-05-26',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue (open-source) is the default choice: native Ollama support, VS Code + JetBrains',
          'Cline agents read/write files and run shell commands — most powerful for agentic tasks',
          'Tabby runs its own inference server (1–3B models) — lowest latency autocomplete',
          'Aider is the terminal-first option — git-commit-aware, multi-file rewrites',
          'Cursor supports local models (Ollama/LM Studio) but its best features require cloud',
          'All four work with Ollama; only Tabby requires its own backend server',
        ],
      },
      rankedList: {
        title: 'Best IDE Plugins for Local LLMs — Ranked',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Continue is the best IDE plugin for local LLMs in 2026 because it supports Ollama natively, works in both VS Code and JetBrains, and provides chat, autocomplete, and code editing without any cloud dependency.',
          },
          {
            type: 'plain-terms',
            text: 'An IDE plugin for local LLMs connects your code editor (VS Code, IntelliJ) to a model running on your own machine (via Ollama, LM Studio, or llama.cpp). The model sees your code and responds — no code leaves your computer, no API fees, no usage limits.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Continue — Best Overall (Free, Open-Source)',
            content: 'Continue is the leading open-source AI coding assistant for local LLMs. It connects to Ollama, LM Studio, llama.cpp, and any OpenAI-compatible API. Features: inline chat (Cmd+L), autocomplete (Tab), model context protocol (MCP) tools, codebase indexing, and custom slash commands. VS Code extension has 2M+ installs. JetBrains plugin works in IntelliJ, PyCharm, GoLand, WebStorm, and Rider. Best local models: Qwen3-Coder 14B (coding), Llama 3.3 8B (chat). Setup: install extension, set provider to Ollama, choose model — done in 2 minutes.',
            affiliateLinks: [
              { label: 'Continue on VS Code Marketplace (free)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 2,
            title: 'Cline — Best for Agentic Coding Tasks',
            content: 'Cline (formerly Claude Dev) is the most powerful agentic coding plugin for local LLMs. It reads and writes files, runs terminal commands, browses the web (via browser tool), and uses MCP servers. With Ollama + Qwen3-Coder 32B, Cline can implement entire features from a prompt. Limitations: 32B models are required for reliable multi-step agentic tasks; 14B models work for simple tasks. Estimated price: free for local model use. VS Code only (no JetBrains). Compatible backends: Ollama, LM Studio, LiteLLM proxy.',
            affiliateLinks: [
              { label: 'Cline on VS Code Marketplace (free)', url: 'https://github.com/cline/cline' },
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
            content: 'Cursor is a VS Code fork with AI features built in. As of 2026, Cursor supports local models via Ollama and LM Studio in its "Custom API" setting. However, Cursor\'s most powerful features (Agent mode with web search, full codebase awareness) require cloud models (Claude, GPT-5.5). The local model integration is functional for chat and simple completions but falls behind Continue and Cline for privacy-focused workflows. Price: $20/month for Pro (includes cloud credits). Local model use: free tier.',
            affiliateLinks: [
              { label: 'Cursor Pro subscription', url: 'https://cursor.com' },
            ],
          },
        ],
      },
      setupGuide: {
        title: 'Quick Setup: Continue + Ollama in VS Code',
        content: 'The fastest way to start local LLM coding:',
        numberedItems: [
          'Install Ollama: `curl -fsSL https://ollama.com/install.sh | sh`',
          'Pull a coding model: `ollama pull qwen2.5-coder:14b`',
          'In VS Code, install Continue from the Extensions marketplace',
          'Open Continue settings (Cmd+Shift+P → "Continue: Open Config")',
          'Add Ollama provider: set `provider: "ollama"`, `model: "qwen2.5-coder:14b"`',
          'Restart VS Code — Continue tab appears in sidebar',
          'Press Cmd+L to open chat, or start typing and press Tab for autocomplete',
        ],
      },
      modelRecommendations: {
        title: 'Best Local Models by Plugin and Task',
        tableData: {
          headers: ['Plugin', 'Best Coding Model (Local)', 'Best Chat Model (Local)', 'Min VRAM'],
          rows: [
            ['Continue', 'Qwen3-Coder 14B Q8', 'Llama 3.3 8B Q4', '16 GB'],
            ['Cline', 'Qwen3-Coder 32B Q4', 'Qwen3 32B Q4', '24 GB'],
            ['Tabby', 'StarCoder2-7B (built-in)', 'N/A (code only)', '8 GB'],
            ['Aider', 'Qwen3-Coder 14B (editor)', 'Qwen3-Coder 32B (architect)', '16–24 GB'],
            ['Cursor', 'DeepSeek-Coder-V2 (via Ollama)', 'Qwen3 14B', '16 GB'],
          ],
        },
      },
      faq: {
        faqs: [
          {
            q: 'Can Continue replace GitHub Copilot entirely for local use?',
            a: 'For most use cases, yes. Continue with Qwen3-Coder 14B Q8 provides comparable autocomplete quality to GitHub Copilot for Python, TypeScript, and Go. Copilot still has an edge in very new APIs and obscure library usage where its training data advantage shows. For privacy-critical codebases, Continue + local Ollama is the better choice.',
          },
          {
            q: 'Which plugin works best for multi-file refactoring?',
            a: 'Cline or Aider. Both can read multiple files, understand dependencies, and make coordinated edits across a codebase. Cline works inside VS Code (better for visual feedback); Aider works in the terminal (better for CI/CD integration and git-aware commits). For 30B+ models with 24 GB VRAM, Cline with Qwen3-Coder 32B handles complex refactoring reliably.',
          },
          {
            q: 'Does Tabby work without a GPU?',
            a: 'Yes — Tabby can run on CPU with small models (1–3B). However, autocomplete latency on CPU is 500ms–2s, which feels sluggish compared to the <200ms target for smooth coding. For CPU-only machines, Continue + Ollama with a fast 1B or 3B model gives better latency control.',
          },
          {
            q: 'Can I use these plugins with LM Studio instead of Ollama?',
            a: 'Yes. LM Studio exposes an OpenAI-compatible API on port 1234 by default. Set your plugin provider to "openai" with base URL `http://localhost:1234/v1` and use any model name from your LM Studio library. Continue, Cline, and Aider all support this configuration.',
          },
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
            text: 'For most use cases, yes. Continue with Qwen3-Coder 14B Q8 provides comparable autocomplete quality for Python, TypeScript, and Go. For privacy-critical codebases, Continue + local Ollama is the better choice.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which plugin works best for multi-file refactoring?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cline (VS Code) or Aider (terminal). Both read multiple files and make coordinated edits. Cline is better for visual feedback; Aider for git-aware commits. Use 32B models for reliable complex refactoring.',
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
        { '@type': 'ListItem', position: 1, name: 'Continue', description: 'Best overall — Ollama native, VS Code + JetBrains, free' },
        { '@type': 'ListItem', position: 2, name: 'Cline', description: 'Best agentic — reads/writes files, runs commands, VS Code' },
        { '@type': 'ListItem', position: 3, name: 'Tabby', description: 'Best self-hosted autocomplete — 1–3B FIM models, all editors' },
        { '@type': 'ListItem', position: 4, name: 'Aider', description: 'Best terminal-native — git-aware, multi-file edits, open-source' },
        { '@type': 'ListItem', position: 5, name: 'Cursor', description: 'Best commercial — local model support, $20/month Pro' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Best IDE Plugins for Local LLMs in 2026 (VS Code & JetBrains)',
      description: 'Ranked comparison of Continue, Cline, Tabby, Aider, and Cursor for local LLM use in VS Code and JetBrains. Includes setup guide, model recommendations, and performance comparison.',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      url: 'https://www.promptquorum.com/power-local-llm/best-local-llm-ide-plugins-2026?lang=en',
      inLanguage: 'en',
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
    leadAnswerBlock: '**Continue (VS Code + JetBrains) ist 2026 das beste kostenlose IDE-Plugin für lokale LLMs: native Verbindung zu Ollama und OpenAI-kompatiblen APIs, Chat + Autocomplete + Code-Bearbeitung, vollständig auf eigener Hardware.**',
    quickAnswerTop: {
      question: 'Welches IDE-Plugin ist am besten für lokale KI-Modelle beim Coden?',
      answer: 'Continue (kostenlos, Open-Source) ist das beste IDE-Plugin für Ollama und lokale LLMs in VS Code und JetBrains. Für Autocomplete-only ist Tabby die leichteste Option. Für agentisches Coding (Datei-Bearbeitungen, Shell-Befehle) ist Cline am leistungsfähigsten.',
      bullets: [
        'Continue: bestes Gesamtpaket — Ollama + OpenAI API, Chat + Autocomplete, VS Code + JetBrains',
        'Cline: bestes agentisches IDE-Plugin — liest/schreibt Dateien, führt Terminal-Befehle aus',
        'Tabby: bestes Self-Hosted-Autocomplete — eigener Inferenz-Server, 1–3B-Modelle',
        'Aider: bestes Terminal-Tool — git-bewusst, Multi-Datei-Bearbeitung, ideal mit 14B+-Modellen',
        'Cursor: beste kommerzielle Option — lokaler Modell-Support vorhanden, Cloud-first-Design',
      ],
      updatedDate: '2026-05-26',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue (Open-Source) ist die Standardwahl: nativer Ollama-Support, VS Code + JetBrains',
          'Cline-Agenten lesen/schreiben Dateien und führen Shell-Befehle aus — mächtigste für agentische Aufgaben',
          'Tabby läuft mit eigenem Inferenz-Server (1–3B-Modelle) — niedrigste Autocomplete-Latenz',
          'Aider ist die Terminal-Option — git-commit-bewusst, Multi-Datei-Umschreibungen',
          'Cursor unterstützt lokale Modelle, beste Features erfordern aber Cloud',
        ],
      },
      rankedList: {
        title: 'Beste IDE-Plugins für lokale LLMs — Ranking',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Continue ist 2026 das beste IDE-Plugin für lokale LLMs, da es Ollama nativ unterstützt, in VS Code und JetBrains funktioniert und Chat, Autocomplete sowie Code-Bearbeitung ohne Cloud-Abhängigkeit bietet.',
          },
          {
            type: 'plain-terms',
            text: 'Ein IDE-Plugin für lokale LLMs verbindet deinen Code-Editor (VS Code, IntelliJ) mit einem Modell auf deinem eigenen Rechner (über Ollama oder LM Studio). Das Modell sieht deinen Code und antwortet — kein Code verlässt deinen Computer, keine API-Gebühren.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Continue — Bestes Gesamtpaket (kostenlos, Open-Source)',
            content: 'Continue ist der führende Open-Source-KI-Coding-Assistent für lokale LLMs. Er verbindet sich mit Ollama, LM Studio, llama.cpp und jeder OpenAI-kompatiblen API. Features: Inline-Chat (Cmd+L), Autocomplete (Tab), MCP-Tools, Codebase-Indexierung. VS-Code-Extension hat 2M+ Installs. JetBrains-Plugin läuft in IntelliJ, PyCharm, GoLand, WebStorm und Rider. Empfohlene lokale Modelle: Qwen3-Coder 14B (Coding), Llama 3.3 8B (Chat).',
            affiliateLinks: [
              { label: 'Continue im VS Code Marketplace (kostenlos)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 2,
            title: 'Cline — Bestes agentisches IDE-Plugin',
            content: 'Cline ist das leistungsfähigste agentische Coding-Plugin für lokale LLMs. Es liest und schreibt Dateien, führt Terminal-Befehle aus, und nutzt MCP-Server. Mit Ollama + Qwen3-Coder 32B kann Cline komplette Features aus einem Prompt implementieren. Einschränkungen: 32B-Modelle für zuverlässige Multi-Schritt-Agenten nötig; nur VS Code (kein JetBrains).',
            affiliateLinks: [
              { label: 'Cline im VS Code Marketplace (kostenlos)', url: 'https://github.com/cline/cline' },
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
            content: 'Cursor ist ein VS-Code-Fork mit integrierten KI-Funktionen. Ab 2026 unterstützt Cursor lokale Modelle über Ollama und LM Studio in der "Custom API"-Einstellung. Die mächtigsten Cursor-Features (Agent-Modus mit Websuche) erfordern aber Cloud-Modelle. Preis: 20 $/Monat für Pro. Lokale Modell-Nutzung: Free-Tier.',
            affiliateLinks: [
              { label: 'Cursor Pro Abonnement', url: 'https://cursor.com' },
            ],
          },
        ],
      },
      faq: {
        faqs: [
          {
            q: 'Kann Continue GitHub Copilot vollständig für lokale Nutzung ersetzen?',
            a: 'Für die meisten Anwendungsfälle ja. Continue mit Qwen3-Coder 14B Q8 bietet vergleichbare Autocomplete-Qualität zu GitHub Copilot für Python, TypeScript und Go. Copilot hat noch einen Vorteil bei sehr neuen APIs. Für datenschutzkritische Codebases ist Continue + lokales Ollama die bessere Wahl.',
          },
          {
            q: 'Welches Plugin funktioniert am besten für Multi-Datei-Refactoring?',
            a: 'Cline oder Aider. Beide lesen mehrere Dateien, verstehen Abhängigkeiten und machen koordinierte Änderungen. Cline ist besser für visuelle Rückmeldung; Aider besser für Git-bewusstes Committen. Für komplexes Refactoring mit lokalen Modellen werden 30B+ (24 GB VRAM) empfohlen.',
          },
          {
            q: 'Kann ich diese Plugins mit LM Studio statt Ollama nutzen?',
            a: 'Ja. LM Studio stellt standardmäßig eine OpenAI-kompatible API auf Port 1234 bereit. Setze den Plugin-Provider auf "openai" mit Basis-URL `http://localhost:1234/v1` und verwende beliebige Modellnamen aus deiner LM-Studio-Bibliothek.',
          },
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
          acceptedAnswer: { '@type': 'Answer', text: 'Für die meisten Anwendungsfälle ja. Continue + Qwen3-Coder 14B Q8 bietet vergleichbare Qualität zu Copilot. Für datenschutzkritische Codebases ist Continue + lokales Ollama die bessere Wahl.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Beste IDE-Plugins für lokale LLMs 2026',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Continue', description: 'Bestes Gesamtpaket — Ollama nativ, VS Code + JetBrains, kostenlos' },
        { '@type': 'ListItem', position: 2, name: 'Cline', description: 'Bestes agentisches Plugin — liest/schreibt Dateien, VS Code' },
        { '@type': 'ListItem', position: 3, name: 'Tabby', description: 'Bestes Self-Hosted-Autocomplete — 1–3B FIM-Modelle, alle Editoren' },
        { '@type': 'ListItem', position: 4, name: 'Aider', description: 'Bestes Terminal-Tool — git-bewusst, Multi-Datei, Open-Source' },
        { '@type': 'ListItem', position: 5, name: 'Cursor', description: 'Beste kommerzielle Option — lokaler Modell-Support, 20 $/Monat Pro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Beste IDE-Plugins für lokale LLMs 2026 (VS Code & JetBrains)', datePublished: '2026-05-26', dateModified: '2026-05-26', url: 'https://www.promptquorum.com/de/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'de' },
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
    leadAnswerBlock: '**Continue (VS Code + JetBrains) est le meilleur plugin IDE gratuit pour les LLMs locaux en 2026 : connexion native à Ollama et toute API OpenAI-compatible, chat + autocomplétion + édition de code contextuelle, entièrement sur votre matériel.**',
    quickAnswerTop: {
      question: 'Quel est le meilleur plugin IDE pour les modèles IA locaux lors du codage ?',
      answer: 'Continue (gratuit, open-source) est le meilleur plugin IDE pour Ollama et les LLMs locaux dans VS Code et JetBrains. Pour l\'autocomplétion seule, Tabby est l\'option la plus légère. Pour le codage agentique (éditions de fichiers, commandes shell), Cline est le plus puissant.',
      bullets: [
        'Continue : meilleur global — Ollama + API OpenAI, chat + autocomplétion, VS Code + JetBrains',
        'Cline : meilleur plugin agentique — lit/écrit des fichiers, exécute des commandes terminal',
        'Tabby : meilleure autocomplétion self-hosted — serveur d\'inférence propre, modèles 1–3B',
        'Aider : meilleur outil terminal — git-aware, éditions multi-fichiers, excellent avec 14B+',
        'Cursor : meilleure option commerciale — support modèles locaux, cloud-first',
      ],
      updatedDate: '2026-05-26',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Continue (open-source) est le choix par défaut : support Ollama natif, VS Code + JetBrains',
          'Les agents Cline lisent/écrivent des fichiers et exécutent des commandes shell — plus puissant pour les tâches agentiques',
          'Tabby tourne avec son propre serveur d\'inférence (modèles 1–3B) — latence d\'autocomplétion la plus faible',
          'Aider est l\'option terminal-first — conscient des commits git, réécriture multi-fichiers',
          'Cursor supporte les modèles locaux, mais ses meilleures fonctionnalités nécessitent le cloud',
        ],
      },
      rankedList: {
        title: 'Meilleurs plugins IDE pour LLMs locaux — Classement',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Continue est le meilleur plugin IDE pour les LLMs locaux en 2026 car il supporte Ollama nativement, fonctionne dans VS Code et JetBrains, et fournit chat, autocomplétion et édition de code sans dépendance cloud.',
          },
          {
            type: 'plain-terms',
            text: 'Un plugin IDE pour LLMs locaux connecte votre éditeur de code (VS Code, IntelliJ) à un modèle tournant sur votre propre machine (via Ollama ou LM Studio). Le modèle voit votre code et répond — aucun code ne quitte votre ordinateur, pas de frais d\'API, pas de limites d\'utilisation.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Continue — Meilleur global (gratuit, open-source)',
            content: 'Continue est le principal assistant de codage IA open-source pour les LLMs locaux. Il se connecte à Ollama, LM Studio, llama.cpp et toute API OpenAI-compatible. Fonctionnalités : chat inline (Cmd+L), autocomplétion (Tab), outils MCP, indexation de codebase. L\'extension VS Code a 2M+ installations. Le plugin JetBrains fonctionne dans IntelliJ, PyCharm, GoLand, WebStorm et Rider. Meilleurs modèles locaux : Qwen3-Coder 14B (codage), Llama 3.3 8B (chat).',
            affiliateLinks: [
              { label: 'Continue sur VS Code Marketplace (gratuit)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 2,
            title: 'Cline — Meilleur pour le codage agentique',
            content: 'Cline est le plugin de codage agentique le plus puissant pour les LLMs locaux. Il lit et écrit des fichiers, exécute des commandes terminal et utilise des serveurs MCP. Avec Ollama + Qwen3-Coder 32B, Cline peut implémenter des fonctionnalités complètes à partir d\'une invite. Limites : modèles 32B requis pour les tâches agentiques multi-étapes fiables. VS Code uniquement.',
            affiliateLinks: [
              { label: 'Cline sur VS Code Marketplace (gratuit)', url: 'https://github.com/cline/cline' },
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
            content: 'Cursor est un fork VS Code avec des fonctionnalités IA intégrées. En 2026, Cursor supporte les modèles locaux via Ollama et LM Studio dans son paramètre "Custom API". Les fonctionnalités les plus puissantes (mode Agent avec recherche web) nécessitent des modèles cloud. Prix : 20 $/mois pour Pro.',
            affiliateLinks: [
              { label: 'Abonnement Cursor Pro', url: 'https://cursor.com' },
            ],
          },
        ],
      },
      faq: {
        faqs: [
          {
            q: 'Continue peut-il remplacer entièrement GitHub Copilot pour un usage local ?',
            a: 'Pour la plupart des cas d\'usage, oui. Continue avec Qwen3-Coder 14B Q8 offre une qualité d\'autocomplétion comparable à GitHub Copilot pour Python, TypeScript et Go. Pour les codebases où la confidentialité est critique, Continue + Ollama local est le meilleur choix.',
          },
          {
            q: 'Quel plugin est le meilleur pour le refactoring multi-fichiers ?',
            a: 'Cline (VS Code) ou Aider (terminal). Les deux lisent plusieurs fichiers et font des modifications coordonnées. Cline est mieux pour le retour visuel ; Aider pour les commits git-aware. Utilisez des modèles 30B+ (24 Go VRAM) pour un refactoring complexe fiable.',
          },
          {
            q: 'Puis-je utiliser ces plugins avec LM Studio plutôt qu\'Ollama ?',
            a: 'Oui. LM Studio expose une API OpenAI-compatible sur le port 1234 par défaut. Définissez le provider du plugin sur "openai" avec l\'URL de base `http://localhost:1234/v1`. Continue, Cline et Aider supportent tous cette configuration.',
          },
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
          acceptedAnswer: { '@type': 'Answer', text: 'Pour la plupart des cas, oui. Continue + Qwen3-Coder 14B Q8 est comparable à Copilot. Pour les codebases confidentielles, Continue + Ollama local est le meilleur choix.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Meilleurs plugins IDE pour LLMs locaux 2026',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Continue', description: 'Meilleur global — Ollama natif, VS Code + JetBrains, gratuit' },
        { '@type': 'ListItem', position: 2, name: 'Cline', description: 'Meilleur agentique — lit/écrit fichiers, VS Code' },
        { '@type': 'ListItem', position: 3, name: 'Tabby', description: 'Meilleure autocomplétion self-hosted — modèles FIM 1–3B' },
        { '@type': 'ListItem', position: 4, name: 'Aider', description: 'Meilleur outil terminal — git-aware, multi-fichiers, open-source' },
        { '@type': 'ListItem', position: 5, name: 'Cursor', description: 'Meilleure option commerciale — modèles locaux, 20 $/mois Pro' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Meilleurs plugins IDE pour LLMs locaux 2026 (VS Code & JetBrains)', datePublished: '2026-05-26', dateModified: '2026-05-26', url: 'https://www.promptquorum.com/fr/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'fr' },
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
      updatedDate: '2026-05-26',
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
            content: 'ContinueはローカルLLM向けの主要オープンソースAIコーディングアシスタントです。Ollama、LM Studio、llama.cpp、すべてのOpenAI互換APIに接続。機能：インラインチャット（Cmd+L）、オートコンプリート（Tab）、MCPツール、コードベースインデックス化。VS Code拡張は200万以上のインストール実績。JetBrainsプラグインはIntelliJ、PyCharm、GoLand、WebStorm、Riderで動作。推奨ローカルモデル：Qwen3-Coder 14B（コーディング）、Llama 3.3 8B（チャット）。',
            affiliateLinks: [
              { label: 'Continue をVS Code Marketplaceでダウンロード（無料）', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 2,
            title: 'Cline — エージェント的コーディングに最良',
            content: 'ClineはローカルLLM向け最高機能のエージェント的コーディングプラグインです。ファイルの読み書き、ターミナルコマンド実行、MCPサーバー使用が可能。Ollama + Qwen3-Coder 32Bとの組み合わせで、プロンプトから完全な機能実装が可能。制限：信頼性の高いマルチステップエージェントタスクには32Bモデルが必要。VS Codeのみ（JetBrainsなし）。',
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
            content: 'CursorはAI機能内蔵のVS Codeフォークです。2026年時点でCursorは「Custom API」設定でOllamaとLM Studio経由のローカルモデルをサポート。ただし最高機能（Webサーチ付きエージェントモード）はクラウドモデルが必要。価格：Proが月額20ドル。ローカルモデル利用：無料ティア。',
            affiliateLinks: [
              { label: 'Cursor Proサブスクリプション', url: 'https://cursor.com' },
            ],
          },
        ],
      },
      faq: {
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
    schema: { '@type': 'TechArticle', headline: 'ローカルLLM向けIDEプラグインおすすめ2026年版（VS Code・JetBrains）', datePublished: '2026-05-26', dateModified: '2026-05-26', url: 'https://www.promptquorum.com/ja/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'ja' },
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
      updatedDate: '2026-05-26',
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
            content: 'Continue是本地LLM领先的开源AI编程助手。连接Ollama、LM Studio、llama.cpp和所有OpenAI兼容API。功能：内联对话（Cmd+L）、代码补全（Tab）、MCP工具、代码库索引、自定义斜杠命令。VS Code扩展已有200万以上安装量。JetBrains插件支持IntelliJ、PyCharm、GoLand、WebStorm和Rider。推荐本地模型：Qwen3-Coder 14B（编程）、Llama 3.3 8B（对话）。安装→设置Ollama提供商→选择模型，2分钟完成。',
            affiliateLinks: [
              { label: '在VS Code Marketplace下载Continue（免费）', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 2,
            title: 'Cline — 智能体编程任务最佳',
            content: 'Cline是本地LLM中功能最强的智能体编程插件。可以读写文件、运行终端命令、使用MCP服务器。配合Ollama + Qwen3-Coder 32B，Cline能从一个提示词实现完整功能。限制：可靠的多步骤智能体任务需要32B模型；仅支持VS Code（不支持JetBrains）。',
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
            content: 'Cursor是内置AI功能的VS Code分支。2026年起，Cursor在"Custom API"设置中通过Ollama和LM Studio支持本地模型。但最强大的功能（带网络搜索的Agent模式）仍需要云端模型。价格：Pro版每月20美元。本地模型使用：免费层。',
            affiliateLinks: [
              { label: 'Cursor Pro订阅', url: 'https://cursor.com' },
            ],
          },
        ],
      },
      faq: {
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
    schema: { '@type': 'TechArticle', headline: '2026年本地LLM最佳IDE插件推荐（VS Code & JetBrains）', datePublished: '2026-05-26', dateModified: '2026-05-26', url: 'https://www.promptquorum.com/zh/power-local-llm/best-local-llm-ide-plugins-2026', inLanguage: 'zh' },
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
      updatedDate: '2026-05-26',
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
            content: 'Continue es el asistente de codificación de IA open-source líder para LLMs locales. Se conecta a Ollama, LM Studio, llama.cpp y cualquier API compatible con OpenAI. Funciones: chat en línea (Cmd+L), autocompletado (Tab), herramientas MCP (model context protocol), indexación de codebase y comandos slash personalizados. La extensión de VS Code tiene más de 2M de instalaciones. El plugin de JetBrains funciona en IntelliJ, PyCharm, GoLand, WebStorm y Rider. Mejores modelos locales: Qwen3-Coder 14B (codificación), Llama 3.3 8B (chat). Configuración: instala la extensión, define el proveedor como Ollama, elige el modelo — listo en 2 minutos.',
            affiliateLinks: [
              { label: 'Continue en VS Code Marketplace (gratuito)', url: 'https://continue.dev' },
            ],
          },
          {
            rank: 2,
            title: 'Cline — El mejor para tareas de codificación agéntica',
            content: 'Cline (anteriormente Claude Dev) es el plugin de codificación agéntica más potente para LLMs locales. Lee y escribe archivos, ejecuta comandos de terminal, navega la web (mediante herramienta de navegador) y usa servidores MCP. Con Ollama + Qwen3-Coder 32B, Cline puede implementar funcionalidades completas a partir de un prompt. Limitaciones: se requieren modelos de 32B para tareas agénticas de múltiples pasos fiables; los modelos de 14B funcionan para tareas simples. Solo para VS Code (sin JetBrains). Backends compatibles: Ollama, LM Studio, proxy LiteLLM.',
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
            content: 'Cursor es un fork de VS Code con funciones de IA integradas. A partir de 2026, Cursor soporta modelos locales a través de Ollama y LM Studio en su configuración "Custom API". Sin embargo, las funciones más potentes de Cursor (modo Agent con búsqueda web, conciencia completa del codebase) requieren modelos en la nube (Claude, GPT-5.5). La integración de modelos locales es funcional para chat y completados simples, pero queda por detrás de Continue y Cline para flujos de trabajo enfocados en privacidad. Precio: $20/mes para Pro (incluye créditos cloud). Uso de modelos locales: nivel gratuito.',
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
        tableData: {
          headers: ['Plugin', 'Mejor modelo de codificación (local)', 'Mejor modelo de chat (local)', 'VRAM mínima'],
          rows: [
            ['Continue', 'Qwen3-Coder 14B Q8', 'Llama 3.3 8B Q4', '16 GB'],
            ['Cline', 'Qwen3-Coder 32B Q4', 'Qwen3 32B Q4', '24 GB'],
            ['Tabby', 'StarCoder2-7B (integrado)', 'N/A (solo código)', '8 GB'],
            ['Aider', 'Qwen3-Coder 14B (editor)', 'Qwen3-Coder 32B (arquitecto)', '16–24 GB'],
            ['Cursor', 'DeepSeek-Coder-V2 (via Ollama)', 'Qwen3 14B', '16 GB'],
          ],
        },
      },
      faq: {
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
      dateModified: '2026-05-26',
      url: 'https://www.promptquorum.com/es/power-local-llm/best-local-llm-ide-plugins-2026?lang=es',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
  },
}
