// Auto-generated from src/lib/local-llms/content.ts
// Slug: local-llms-with-vscode-cursor
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'annual',
      theme: 'Tools & Interfaces',
      title: 'Local LLMs With VS Code and Cursor: Setup and Best Practices',
      seoTitle: 'Local LLMs in VS Code and Cursor: 2026 Setup Guide',
      intro: 'VS Code and Cursor (an AI-first code editor) can both use local LLMs for code completions and suggestions, via Continue.dev extension (VS Code) or direct integration (Cursor). As of April 2026, local code completions are practical for 7B-13B models and require 8-16 GB RAM. This guide covers setup, best models, and performance tuning.',
      metaDescription: 'Use Ollama with VS Code via Continue.dev for local code completions -- no API key needed. Best models, VRAM requirements, and Cursor integration for 2026.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**VS Code and Cursor (an AI-first code editor) can both use local LLMs for code completions and suggestions, via Continue.dev extension (VS Code) or direct integration (Cursor).**',
      audience: 'Developers familiar with Ollama or LM Studio optimizing local LLM workflows',
      readTime: '10 min read',
      educationalLevel: 'Intermediate',
      primaryTerm: 'local code completion',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'VS Code + Continue.dev', anchor: '#vscode-continue' },
        { label: 'Cursor Editor', anchor: '#cursor-editor' },
        { label: 'Best Models for Code', anchor: '#best-models' },
        { label: 'Performance and VRAM', anchor: '#performance' },
        { label: 'Advanced Configuration', anchor: '#advanced' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Common Questions', anchor: '#common-questions' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'VS Code uses Continue.dev extension to connect to local models (Ollama, LM Studio, vLLM).',
            'Cursor is a VS Code fork with built-in local model support. No extension needed.',
            '**Best local models for code**: Qwen3-Coder 7B, Llama Code 13B, or Mistral Small.',
            'Expect 2-5 second completion latency on consumer GPUs with 7B models.',
            'As of April 2026, local code completions are practical for personal use, not yet production-grade for teams.',
          ],
        },
        vscodeContinue: {
          title: 'How to Set Up Continue.dev in VS Code?',
          content: 'Continue.dev is a VS Code extension for local and cloud code completions.',
          codeBlock: '# 1. Install Continue from VS Code marketplace\n# Search "Continue" and click Install\n\n# 2. Make sure Ollama is running\nollama serve\n\n# 3. Open Continue settings (Ctrl+Shift+P → Continue: Open Settings)\n# config.json opens\n\n# 4. Configure for your local model:\n# Replace the default settings with:\n{\n  "models": [{\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b",\n    "apiBase": "http://localhost:11434"\n  }],\n  "tabAutocompleteModel": {\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b"\n  }\n}\n\n# 5. Start typing code and press Tab for completions\n# Or Ctrl+Shift+\\ to manually trigger completions',
          codeLanguage: 'json',
        },
        cursor: {
          title: 'How to Use Local Models in Cursor?',
          content: [
            '**Cursor is a VS Code fork optimized for AI-assisted coding.** It has built-in support for local models via Ollama.',
          ],
          codeBlock: '# 1. Download Cursor from cursor.sh\n# 2. Make sure Ollama is running\nollama serve\n\n# 3. Open Cursor Settings (Cmd/Ctrl + ,)\n# 4. Search "Model" and set:\n#    - Model Provider: "Ollama"\n#    - Model: "qwen2.5-coder:7b" (or your choice)\n#    - API Base: "http://localhost:11434"\n\n# 5. Type code and press Tab for inline completions\n# 6. Ctrl+K for multi-line completions',
          codeLanguage: 'bash',
        },
        bestModels: {
          title: 'Which Models Are Best for Code?',
          rows: [
            { 'Model': 'Qwen3-Coder 7B', 'HumanEval': '72%', 'VRAM': '4.7 GB', 'Speed': 'Fast', 'Best For': 'Best balance, fastest' },
            { 'Model': 'Llama Code 7B', 'HumanEval': '69%', 'VRAM': '4.7 GB', 'Speed': 'Fast', 'Best For': 'General coding' },
            { 'Model': 'Mistral Small', 'HumanEval': '61%', 'VRAM': '4.5 GB', 'Speed': 'Very fast', 'Best For': 'Lightweight, EU servers' },
            { 'Model': 'Llama Code 13B', 'HumanEval': '74%', 'VRAM': '8.5 GB', 'Speed': 'Medium', 'Best For': 'Better quality on 16GB machines' },
            { 'Model': 'DeepSeek-Coder 6.7B', 'HumanEval': '68%', 'VRAM': '4 GB', 'Speed': 'Fast', 'Best For': 'Lightweight alternative' },
          ],
          columns: ['Model', 'HumanEval', 'VRAM', 'Speed', 'Best For'],
        },
        performance: {
          title: 'What Latency and VRAM Should You Expect?',
          content: [
            '**Completion latency (time to first token) is critical for IDE experience.** As of April 2026, here are typical numbers:',
          ],
          rows: [
            { 'Hardware': 'RTX 4090 GPU', 'Model': 'Qwen3-Coder 7B', 'Latency': '0.3-0.5 seconds', 'Throughput': '150 tokens/sec' },
            { 'Hardware': 'RTX 4070 GPU', 'Model': 'Qwen3-Coder 7B', 'Latency': '0.8-1.5 seconds', 'Throughput': '80 tokens/sec' },
            { 'Hardware': 'M3 MacBook Pro', 'Model': 'Qwen3-Coder 7B', 'Latency': '2-3 seconds', 'Throughput': '20 tokens/sec' },
            { 'Hardware': '8-core CPU only', 'Model': 'Qwen3-Coder 7B', 'Latency': '5-10 seconds', 'Throughput': '3 tokens/sec' },
          ],
          columns: ['Hardware', 'Model', 'Latency', 'Throughput'],
        },
        advanced: {
          title: 'Advanced Configuration for Code Completions',
          content: 'Fine-tune the experience with these settings:',
          codeBlock: '# config.json advanced settings\n{\n  "tabAutocompleteModel": {\n    "contextLength": 2048,     # How much code context to send\n    "maxTokens": 50            # Max tokens per completion\n  },\n  "completionOptions": {\n    "maxContextTokens": 1024,\n    "maxSuggestionsCount": 5,\n    "debounceWaitMs": 200      # Wait before showing completions (ms)\n  },\n  # For faster inference, use smaller context:\n  "models": [{\n    "contextLength": 1024      # Smaller context = faster\n  }]\n}\n\n# For best speed on 8GB machines:\n# - Use 7B model (not 13B)\n# - Set maxTokens to 30\n# - Set debounceWaitMs to 500 (less flickering)',
          codeLanguage: 'json',
        },
        commonMistakes: {
          title: 'Common Mistakes With Local Code Completions',
          items: [
            '**Not tuning debounce latency.** If completions feel "laggy", increase debounceWaitMs (e.g., to 400 ms) to avoid showing incomplete suggestions.',
            '**Using a model too large for your VRAM.** A 13B model + editor overhead can use 12+ GB. On 8GB machines, stick with 7B models.',
            '**Expecting cloud-level code quality.** GPT-5.5 is significantly better at code than any 7B model. Local completions are 70-80% of cloud quality.',
            '**Running inference on CPU.** CPU completions are impractical (5-10 second latency). GPU is required for usable completions.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Common Questions About Local Code Completions',
          faqs: [
            {
              q: 'Is local code completion faster than cloud?',
              a: 'No. Cloud completions (GitHub Copilot) are faster due to optimized servers. Local completions have higher latency but zero cost and zero privacy risk.',
            },
            {
              q: 'Can I use local completions with other IDEs (PyCharm, Neovim)?',
              a: 'Yes, but setup varies. PyCharm has an Ollama plugin. For Neovim, use cmp-ollama (completion plugin). Always check the IDE community for integrations.',
            },
            {
              q: 'Can I use cloud models in Continue or Cursor?',
              a: 'Yes. Configure Continue to use OpenAI, Claude, or Gemini. You can also mix (local for fast, cloud for complex code).',
            },
            {
              q: 'Does local code completion work offline?',
              a: 'Yes. If you have pulled the model in Ollama, completions work entirely offline.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Best AI Coding Assistant for Local LLM](/local-llms/best-ai-coding-assistant-local-llm) -- Comprehensive comparison of Cursor, Continue.dev, Cody, Tabnine, and Windsurf with local LLM support.',
            '[Local LLM Developer Stack](/local-llms/local-llm-developer-stack) -- The complete stack including API server setup and production monitoring beyond IDE integration.',
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- Setup Ollama for code completions.',
            '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding) -- Detailed coding model benchmark.',
            '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) -- Which tool to use.',
            '[Local LLM OpenAI-Compatible API](/local-llms/local-llm-openai-compatible-api) -- Code completion APIs.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Continue.dev -- continue.dev',
            'Cursor Editor -- cursor.sh',
            'Continue GitHub -- github.com/continuedev/continue',
            'Qwen3-Coder -- github.com/QwenLM/Qwen3-Coder',
            'IDE integration is only half the problem. Writing effective prompts for code generation requires a different mindset than chatting. Learn prompt engineering for developers: [best prompt engineering IDEs](https://www.promptquorum.com/prompt-engineering/best-prompt-engineering-ides) compares tools and techniques.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Local LLMs With VS Code and Cursor: Setup and Best Practices',
        'description': 'Use Ollama with VS Code via Continue.dev for local code completions -- no API key needed. Best models, VRAM requirements, and Cursor integration for 2026.',
        'url': 'https://www.promptquorum.com/local-llms/local-llms-with-vscode-cursor',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-04',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'local code completion' },
          { '@type': 'Thing', 'name': 'Continue.dev' },
          { '@type': 'Thing', 'name': 'VS Code' },
          { '@type': 'Thing', 'name': 'Cursor editor' },
          { '@type': 'Thing', 'name': 'Ollama' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
        'educationalLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Is local code completion faster than cloud completion?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Cloud completions (GitHub Copilot) are faster due to optimized servers. Local completions have higher latency but zero cost and zero privacy risk.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can I use local completions with other IDEs like PyCharm or Neovim?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, but setup varies. PyCharm has an Ollama plugin. For Neovim, use cmp-ollama (completion plugin). Always check the IDE community for integrations.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can I use cloud models in Continue.dev or Cursor?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Configure Continue to use OpenAI, Claude, or Gemini. You can also mix (local for fast, cloud for complex code).',
            },
          },
          {
            '@type': 'Question',
            'name': 'Does local code completion work offline?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. If you have pulled the model in Ollama, completions work entirely offline.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What is the minimum VRAM for usable local code completions?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '8 GB VRAM is the minimum for usable code completions with a 7B model at Q4_K_M quantization (~4.5 GB). With only 8 GB, you have little headroom. 12 GB or more is recommended for comfortable use with Qwen3-Coder 7B or Llama Code 7B.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Which model is best for code completions with Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3-Coder 7B is the best balance of speed and quality, scoring 72% on HumanEval and requiring only 4.7 GB VRAM. For 16 GB+ VRAM, Llama Code 13B (74% HumanEval, 8.5 GB VRAM) improves quality further.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How do I set up Continue.dev in VS Code?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Install the Continue extension from the VS Code marketplace, then configure it to use Ollama: open the Continue sidebar, click the model selector, choose "Ollama" as provider, select your model (e.g., qwen2.5-coder:7b), and save. Continue will connect to Ollama at localhost:11434 automatically.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Does Cursor support local LLMs natively?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Cursor supports custom OpenAI-compatible endpoints. Set the base URL to http://localhost:11434/v1 and enter any API key (Ollama does not require authentication). Select your Ollama model from the model dropdown and Cursor will route requests to your local model.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can I use local LLMs for code review and chat in VS Code?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Continue.dev provides both tab completion and an inline chat mode. Highlight code in your editor, press Cmd/Ctrl+I, and type a question or instruction. The local model responds within the editor context. This works for code review, refactoring suggestions, and explanation requests.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What happens if Ollama is not running when I open VS Code?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Continue.dev will display a connection error and completions will not appear. Start Ollama with `ollama serve` in a terminal before opening VS Code. On macOS, you can set Ollama to start automatically at login in the Ollama menu bar settings.',
            },
          },
        ],
      },
    },
    de: {
      theme: 'Tools & Interfaces',
      title: 'Lokale LLMs mit VS Code und Cursor: Einrichtung und Best Practices',
      seoTitle: 'Lokale LLMs in VS Code & Cursor: Einrichtung 2026',
      intro: 'VS Code und Cursor (ein KI-fokussierter Code-Editor) können beide lokale LLMs für Code-Vervollständigungen und Vorschläge nutzen, über die Continue.dev-Erweiterung (VS Code) oder direkte Integration (Cursor). Stand April 2026 sind lokale Code-Vervollständigungen praktisch für 7B-13B-Modelle und erfordern 8-16 GB RAM. Dieser Leitfaden behandelt Einrichtung, beste Modelle und Performance-Tuning.',
      metaDescription: 'Lokale LLMs in VS Code mit Continue.dev und Cursor einrichten. Beste Modelle: Qwen-Coder 7B, Llama Code 13B. Performance-Optimierung, Latenz, VRAM-Leitfaden.',
      publishDate: '2026-04-04',
      readTime: '10 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'lokale Code-Vervollständigung',
      toc: [
        { label: 'VS Code + Continue.dev', anchor: '#vscode-continue' },
        { label: 'Performance und VRAM', anchor: '#performance' },
        { label: 'Erweiterte Konfiguration', anchor: '#advanced' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Häufig gestellte Fragen', anchor: '#common-questions' },
        { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'VS Code nutzt die Continue.dev-Erweiterung, um sich mit lokalen Modellen zu verbinden (Ollama, LM Studio, vLLM).',
            'Cursor ist ein VS Code-Fork mit eingebauter lokaler Modellunterstützung. Keine Erweiterung erforderlich.',
            '**Beste lokale Modelle für Code**: Qwen3-Coder 7B, Llama Code 13B oder Mistral Small.',
            'Erwarten Sie 2-5 Sekunden Vervollständigungslatenz auf Consumer-GPUs mit 7B-Modellen.',
            'Stand April 2026 sind lokale Code-Completions für Einzelnutzer praktisch, noch nicht produktionsreif für Teams.',
          ],
        },
        vscodeContinue: {
          title: 'Wie richten Sie Continue.dev in VS Code ein?',
          content: 'Continue.dev ist eine VS Code-Erweiterung für lokale und Cloud-Code-Vervollständigung.',
          codeBlock: '# 1. Installieren Sie Continue aus dem VS Code Marketplace\n# Suchen Sie nach "Continue" und klicken Sie auf "Installieren"\n\n# 2. Stellen Sie sicher, dass Ollama läuft\nollama serve\n\n# 3. Öffnen Sie Continue-Einstellungen (Strg+Umschalt+P → Continue: Einstellungen öffnen)\n# config.json wird geöffnet\n\n# 4. Konfigurieren Sie für Ihr lokales Modell:\n# Ersetzen Sie die Standard-Einstellungen durch:\n{\n  "models": [{\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b",\n    "apiBase": "http://localhost:11434"\n  }],\n  "tabAutocompleteModel": {\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b"\n  }\n}\n\n# 5. Beginnen Sie zu tippen und drücken Sie Tab für Vervollständigungen\n# Oder Strg+Umschalt+\\ zur manuellen Auslösung von Vervollständigungen',
          codeLanguage: 'json',
        },
        cursor: {
          title: 'Wie verwenden Sie lokale Modelle in Cursor?',
          content: [
            '**Cursor ist ein VS Code-Fork, optimiert für KI-gestützte Programmierung.** Es hat eingebaute Unterstützung für lokale Modelle über Ollama.',
          ],
          codeBlock: '# 1. Laden Sie Cursor von cursor.sh herunter\n# 2. Stellen Sie sicher, dass Ollama läuft\nollama serve\n\n# 3. Öffnen Sie Cursor-Einstellungen (Cmd/Strg + ,)\n# 4. Suchen Sie nach "Model" und stellen Sie ein:\n#    - Model Provider: "Ollama"\n#    - Model: "qwen2.5-coder:7b" (oder Ihre Wahl)\n#    - API Base: "http://localhost:11434"\n\n# 5. Tippen Sie Code und drücken Sie Tab für Inline-Vervollständigung\n# 6. Strg+K für mehrzeilige Vervollständigung',
          codeLanguage: 'bash',
        },
        bestModels: {
          title: 'Welche Modelle eignen sich am besten für Code?',
          content: [
            '⚠️ **VRAM-Regel**: Haben Sie immer 2-3 GB mehr freien VRAM als das Modell benötigt. Ein 7B-Modell bei Q4 (4,7 GB) benötigt insgesamt 8 GB VRAM bei Ausführung in VS Code oder Cursor.',
          ],
          rows: [
            { 'Modell': 'Qwen3-Coder 7B', 'HumanEval': '72%', 'VRAM': '4,7 GB', 'Geschwindigkeit': 'Schnell', 'Beste für': 'Beste Balance, schnellste' },
            { 'Modell': 'Llama Code 7B', 'HumanEval': '69%', 'VRAM': '4,7 GB', 'Geschwindigkeit': 'Schnell', 'Beste für': 'Allgemeine Programmierung' },
            { 'Modell': 'Mistral Small', 'HumanEval': '61%', 'VRAM': '4,5 GB', 'Geschwindigkeit': 'Sehr schnell', 'Beste für': 'Leichtgewicht, EU-Server' },
            { 'Modell': 'Llama Code 13B', 'HumanEval': '74%', 'VRAM': '8,5 GB', 'Geschwindigkeit': 'Mittel', 'Beste für': 'Bessere Qualität bei 16GB-Maschinen' },
            { 'Modell': 'DeepSeek-Coder 6,7B', 'HumanEval': '68%', 'VRAM': '4 GB', 'Geschwindigkeit': 'Schnell', 'Beste für': 'Leichtgewicht-Alternative' },
          ],
          columns: ['Modell', 'HumanEval', 'VRAM', 'Geschwindigkeit', 'Beste für'],
        },
        performance: {
          title: 'Welche Latenz und welchen VRAM sollten Sie erwarten?',
          content: [
            '**Vervollständigungslatenz (Zeit bis zum ersten Token) ist kritisch für die IDE-Erfahrung.** Stand April 2026 sind hier typische Zahlen:',
            '⚠️ **Latenz-Realitätsprüfung**: Lokale Vervollständigungen sind 2-10× langsamer als Cloud. Verwenden Sie lokal für private Arbeiten; verwenden Sie Cloud (Copilot, Claude) für zeitkritische Programmierung.',
            '💡 **Performance-Tuning**: Reduzieren Sie `contextLength` von 2048 auf 1024 Tokens, um die Latenz zu halbieren. Kompromiss: weniger Codezeilen im Kontext für Vorschläge.',
          ],
          rows: [
            { 'Hardware': 'RTX 4090 GPU', 'Modell': 'Qwen3-Coder 7B', 'Latenz': '0,3-0,5 Sekunden', 'Durchsatz': '150 Tokens/Sek' },
            { 'Hardware': 'RTX 4070 GPU', 'Modell': 'Qwen3-Coder 7B', 'Latenz': '0,8-1,5 Sekunden', 'Durchsatz': '80 Tokens/Sek' },
            { 'Hardware': 'M3 MacBook Pro', 'Modell': 'Qwen3-Coder 7B', 'Latenz': '2-3 Sekunden', 'Durchsatz': '20 Tokens/Sek' },
            { 'Hardware': '8-Kern CPU nur', 'Modell': 'Qwen3-Coder 7B', 'Latenz': '5-10 Sekunden', 'Durchsatz': '3 Tokens/Sek' },
          ],
          columns: ['Hardware', 'Modell', 'Latenz', 'Durchsatz'],
          note: '**Hinweis zu Performance-Daten**: Latenz und Durchsatz gemessen mit Qwen3-Coder 7B Q4_K_M-Format, Batch-Größe = 1, auf frischem System (keine Hintergrund-Aufgaben). Ihre tatsächliche Performance hängt ab von OS, VRAM-Verfügbarkeit, Quantisierungsformat und gleichzeitiger Last.',
        },
        advanced: {
          title: 'Wie konfigurieren Sie Code-Vervollständigungen für Performance?',
          content: [
            '**Feinabstimmung der Erfahrung mit diesen Einstellungen:**',
            '⚠️ **Warnung**: Bei 8GB-Maschinen mit 13B-Modellen können Vervollständigungen 5-10 Sekunden dauern, wodurch die IDE träge wirkt. Bleiben Sie mit 7B-Modellen für flüssige Performance.',
            '💡 **Pro-Tipp**: Erhöhen Sie `debounceWaitMs` auf 400-500 ms, um Flimmern zu reduzieren und unvollständige Vorschläge zu vermeiden.',
          ],
          codeBlock: '# config.json erweiterte Einstellungen\n{\n  "tabAutocompleteModel": {\n    "contextLength": 2048,     # Wie viel Code-Kontext senden\n    "maxTokens": 50            # Max Tokens pro Vervollständigung\n  },\n  "completionOptions": {\n    "maxContextTokens": 1024,\n    "maxSuggestionsCount": 5,\n    "debounceWaitMs": 200      # Warten vor Anzeige (ms)\n  },\n  # Für schnellere Inferenz kleineren Kontext nutzen:\n  "models": [{\n    "contextLength": 1024      # Kleinerer Kontext = schneller\n  }]\n}\n\n# Für beste Geschwindigkeit auf 8GB-Maschinen:\n# - Verwenden Sie 7B-Modell (nicht 13B)\n# - Setzen Sie maxTokens auf 30\n# - Setzen Sie debounceWaitMs auf 500 (weniger Flimmern)',
          codeLanguage: 'json',
        },
        commonMistakes: {
          title: 'Was sind häufige Fehler bei der Einrichtung lokaler Code-Vervollständigungen?',
          items: [
            '**Keine Debounce-Latenz-Optimierung**: Falls Vervollständigungen sich "langsam" anfühlen, erhöhen Sie debounceWaitMs (z.B. auf 400 ms), um unvollständige Vorschläge zu vermeiden.',
            '**Verwendung eines für Ihren VRAM zu großen Modells**: Ein 13B-Modell + Editor-Overhead kann 12+ GB verwenden. Bei 8GB-Maschinen bleiben Sie mit 7B-Modellen.',
            '**Erwartung von Cloud-Level-Code-Qualität**: GPT-5.5 ist deutlich besser bei Code als jedes 7B-Modell. Lokale Vervollständigungen sind 70-80% der Cloud-Qualität.',
            '**Ausführung von Inferenz auf CPU**: CPU-Vervollständigungen sind unpraktisch (5-10 Sekunden Latenz). GPU ist erforderlich für nutzbare Vervollständigungen.',
          ],
        },
        faqSection: {
          title: 'FAQ: Lokale Code-Vervollständigung',
          faqs: [
            {
              q: 'Ist lokale Code-Vervollständigung schneller als Cloud?',
              a: 'Nein. Cloud-Vervollständigungen (GitHub Copilot) sind schneller wegen optimierter Server. Lokale Vervollständigungen haben höhere Latenz, aber Null-Kosten und Null-Datenschutzrisiko.',
            },
            {
              q: 'Kann ich lokale Vervollständigungen mit anderen IDEs nutzen (PyCharm, Neovim)?',
              a: 'Ja, aber Setup variiert. PyCharm hat ein Ollama-Plugin. Für Neovim verwenden Sie cmp-ollama (Completion-Plugin). Prüfen Sie immer die IDE-Community auf Integrationen.',
            },
            {
              q: 'Kann ich Cloud-Modelle in Continue oder Cursor verwenden?',
              a: 'Ja. Konfigurieren Sie Continue für OpenAI, Claude oder Gemini. Sie können auch mischen (lokal für schnell, Cloud für komplexer Code).',
            },
            {
              q: 'Funktioniert lokale Code-Vervollständigung offline?',
              a: 'Ja. Falls Sie das Modell in Ollama gepullt haben, funktionieren Vervollständigungen vollständig offline.',
            },
          ],
        },
        countrySpecific: {
          id: 'country-specific-de',
          title: 'Lokale LLMs für deutsche Entwickler: DSGVO, Cursor Pro und Privacy',
          content: [
            'Für deutsche Softwareentwickler ist Cursor Pro ein zweischneidiges Schwert: Leistungsstarke KI-Features, aber Code wird an US-Server übertragen. Bei Projekten mit personenbezogenen Daten, Kundendaten oder vertraulichem Quellcode ist dies nach DSGVO Art. 28 (Auftragsverarbeitung) problematisch ohne entsprechenden DPA mit Anthropic/OpenAI.',
            'Die datenschutzkonforme Alternative: Continue.dev mit lokalem LLM (Ollama + DeepSeek Coder oder Qwen3-Coder). Kein Code verlässt das Gerät, kein DPA nötig, BSI Grundschutz-kompatibel. Abstriche bei der Modellqualität gegenüber Claude Sonnet 4.6 sind bei einigen Tasks spürbar, bei anderen nicht.',
          ],
          items: [
            '**DSGVO und Cursor Pro:** Cursor überträgt Code-Snippets zur KI-Verarbeitung. Für Open-Source-Projekte unproblematisch. Für Projekte mit Gesundheits-, Finanz- oder personenbezogenen Daten: Cursor Business mit EU Data Residency-Option prüfen oder auf lokale Alternative wechseln.',
            '**Continue.dev DE-Konfiguration:** Continue.dev lässt sich vollständig lokal betreiben. `~/.continue/config.json` mit Ollama-Backend: `"provider": "ollama"`, `"model": "qwen2.5-coder:7b"`. Deutsche VS Code Lokalisierung (de-DE) funktioniert problemlos mit Continue.',
            '**Deutsche Entwickler-Community:** query „cursor ローカルllm" zeigt JA-Signal — DE-Äquivalent: Heise Developer, Golem.de, t3n.de als primäre News-Quellen. GitHub-Stars für Continue.dev (>20k) spiegeln globale Akzeptanz wider.',
            '**Empfohlene Modelle für Code-Completion (DE-Kontext):** Qwen3-Coder-7B (beste Balance), DeepSeek Coder V2 (stärkste Reasoning-Leistung), Codestral Mamba (schnell auf CPU). Alle via Ollama verfügbar.',
            '**JetBrains-Nutzer in DE:** Continue.dev unterstützt auch JetBrains IDEs (IntelliJ, WebStorm, PyCharm) — in Deutschland oft beliebter als VS Code, besonders in Java/Kotlin-Shops.',
          ],
        },
        relatedReading: {
          title: 'Weiterführende Lektüre',
          items: [
            '[Beste KI-Coding-Assistenten für lokale LLM](/de/local-llms/best-ai-coding-assistant-local-llm) -- Umfassender Vergleich von Cursor, Continue.dev, Cody, Tabnine und Windsurf mit Unterstützung für lokale LLMs.',
            '[Lokaler LLM-Entwickler-Stack](/de/local-llms/local-llm-developer-stack) -- Vollständiger Stack mit API-Server und Produktions-Monitoring über die IDE-Integration hinaus.',
            '[Ollama installieren](/de/local-llms/how-to-install-ollama) -- Ollama für Code-Vervollständigungen einrichten.',
            '[Beste lokale LLMs für Programmierung](/de/local-llms/best-local-llms-for-coding) -- Detaillierter Programmierungs-Modell-Benchmark.',
            '[How to Install LM Studio](/de/local-llms/how-to-install-lm-studio) -- Welches Werkzeug verwenden.',
            '[Lokale LLM OpenAI-kompatible API](/de/local-llms/local-llm-openai-compatible-api) -- Code-Vervollständigungs-APIs.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            'Continue.dev Team. (2026). "Continue Documentation." https://docs.continue.dev/ -- Official setup guide, config.json reference, and local model integration instructions.',
            'Cursor. (2026). "Cursor Documentation." https://docs.cursor.com/ -- Local model configuration, Ollama integration, and inference setup guide.',
            'Alibaba Qwen Team. (2025). "Qwen3-Coder Technical Report." arXiv:2409.12186. https://arxiv.org/abs/2409.12186 -- HumanEval and code generation benchmarks for Qwen3-Coder variants.',
            'DeepSeek-AI. (2024). "DeepSeek-Coder Technical Paper." arXiv:2401.14196. https://arxiv.org/abs/2401.14196 -- Benchmark data and capability analysis for DeepSeek-Coder family.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Wie man lokale LLMs mit VS Code und Cursor 2026 nutzt',
        'description': 'Wie man lokale LLMs in VS Code und Cursor für private, schnelle Code-Unterstützung mit PromptQuorum-Integration nutzt.',
        'url': 'https://www.promptquorum.com/de/local-llms/local-llms-with-vscode-cursor',
        'step': [
          { '@type': 'HowToStep', 'name': 'Installieren Sie Continue.dev für VS Code', 'text': 'Installieren Sie die Continue-Erweiterung aus dem VS Code Marketplace und konfigurieren Sie sie, um auf Ihren lokalen Ollama-Server zu zeigen.' },
          { '@type': 'HowToStep', 'name': 'Konfigurieren Sie Cursor mit lokalem LLM', 'text': 'In Cursor-Einstellungen stellen Sie den KI-Anbieter auf Ihren lokalen Ollama-Endpunkt (http://localhost:11434).' },
          { '@type': 'HowToStep', 'name': 'Wählen Sie ein Programmierungs-Modell', 'text': 'Verwenden Sie Qwen3-Coder 7B oder DeepSeek-Coder für beste lokale Code-Vervollständigungsergebnisse.' },
          { '@type': 'HowToStep', 'name': 'Testen Sie Prompts mit PromptQuorum', 'text': 'Vergleichen Sie Programmierungs-Prompt-Antworten über mehrere lokale Modelle mit PromptQuorum, um das beste für Ihren Workflow zu finden.' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Ist lokale Code-Vervollständigung schneller als Cloud?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Cloud-Vervollständigungen (GitHub Copilot) sind schneller wegen optimierter Server. Lokale Vervollständigungen haben höhere Latenz, aber Null-Kosten und Null-Datenschutzrisiko.' } },
          { '@type': 'Question', name: 'Kann ich lokale Vervollständigungen mit anderen IDEs nutzen (PyCharm, Neovim)?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, aber Setup variiert. PyCharm hat ein Ollama-Plugin. Für Neovim verwenden Sie cmp-ollama (Completion-Plugin). Prüfen Sie immer die IDE-Community auf Integrationen.' } },
          { '@type': 'Question', name: 'Kann ich Cloud-Modelle in Continue oder Cursor verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Konfigurieren Sie Continue für OpenAI, Claude oder Gemini. Sie können auch mischen (lokal für schnell, Cloud für komplexer Code).' } },
          { '@type': 'Question', name: 'Funktioniert lokale Code-Vervollständigung offline?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Falls Sie das Modell in Ollama gepullt haben, funktionieren Vervollständigungen vollständig offline.' } },
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Lokale LLMs mit VS Code und Cursor: Einrichtung und Best Practices',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'VS Code nutzt die Continue.dev-Erweiterung, um sich mit lokalen Modellen zu verbinden (Ollama, LM Studio, vLLM).' },
          { '@type': 'ListItem', position: 2, name: 'Cursor ist ein VS Code-Fork mit eingebauter lokaler Modellunterstützung. Keine Erweiterung erforderlich.' },
          { '@type': 'ListItem', position: 3, name: '**Beste lokale Modelle für Code**: Qwen3-Coder 7B, Llama Code 13B oder Mistral Small.' },
          { '@type': 'ListItem', position: 4, name: 'Erwarten Sie 2-5 Sekunden Vervollständigungslatenz auf Consumer-GPUs mit 7B-Modellen.' },
          { '@type': 'ListItem', position: 5, name: 'Stand April 2026 sind lokale Code-Completions für Einzelnutzer praktisch, noch nicht produktionsreif für Teams.' },
        ],
      },
    },
    fr: {
      theme: 'Tools & Interfaces',
      title: 'LLM Locaux avec VS Code et Cursor : Configuration et Bonnes Pratiques',
      seoTitle: 'LLM Locaux dans VS Code & Cursor : Configuration 2026',
      intro: 'VS Code et Cursor (un éditeur de code axé sur l\'IA) peuvent tous deux utiliser des LLM locaux pour les complétions et suggestions de code, via l\'extension Continue.dev (VS Code) ou l\'intégration directe (Cursor). Depuis avril 2026, les complétions de code locales sont pratiques pour les modèles 7B-13B et nécessitent 8-16 Go de RAM. Ce guide couvre la configuration, les meilleurs modèles et l\'optimisation des performances.',
      metaDescription: 'Configurez les LLM locaux dans VS Code avec Continue.dev et Cursor. Meilleurs modèles : Qwen-Coder 7B, Llama Code 13B. Performance, latence, RAM.',
      publishDate: '2026-04-04',
      readTime: '9 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'complétions de code locales',
      toc: [
        { label: 'VS Code + Continue.dev', anchor: '#vscode-continue' },
        { label: 'Performance et RAM', anchor: '#performance' },
        { label: 'Configuration avancée', anchor: '#advanced' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Questions fréquentes', anchor: '#common-questions' },
        { label: 'Lectures connexes', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'VS Code utilise l\'extension Continue.dev pour se connecter aux modèles locaux (Ollama, LM Studio, vLLM).',
            'Cursor est un fork VS Code avec support de modèle local intégré. Aucune extension requise.',
            '**Meilleurs modèles locaux pour le code** : Qwen3-Coder 7B, Llama Code 13B ou Mistral Small.',
            'Attendez-vous à 2-5 secondes de latence de complétude sur les GPU grand public avec des modèles 7B.',
            'Depuis avril 2026, les complétions de code locales sont pratiques pour usage personnel, pas encore prêtes pour la production d\'équipe.',
          ],
        },
        vscodeContinue: {
          title: 'Comment configurer Continue.dev dans VS Code ?',
          content: 'Continue.dev est une extension VS Code pour les complétions de code locales et cloud.',
          codeBlock: '# 1. Installez Continue depuis la marketplace VS Code\n# Recherchez "Continue" et cliquez sur Installer\n\n# 2. Assurez-vous qu\'Ollama fonctionne\nollama serve\n\n# 3. Ouvrez les paramètres de Continue (Ctrl+Maj+P → Continue: Ouvrir les paramètres)\n# config.json s\'ouvre\n\n# 4. Configurez pour votre modèle local :\n# Remplacez les paramètres par défaut :\n{\n  "models": [{\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b",\n    "apiBase": "http://localhost:11434"\n  }],\n  "tabAutocompleteModel": {\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b"\n  }\n}\n\n# 5. Commencez à coder et appuyez sur Tab pour les complétions\n# Ou Ctrl+Maj+\\ pour déclencher manuellement les complétions',
          codeLanguage: 'json',
        },
        cursor: {
          title: 'Comment utiliser des modèles locaux dans Cursor ?',
          content: [
            '**Cursor est un fork VS Code optimisé pour le codage assisté par IA.** Il dispose du support intégré des modèles locaux via Ollama.',
          ],
          codeBlock: '# 1. Téléchargez Cursor depuis cursor.sh\n# 2. Assurez-vous qu\'Ollama fonctionne\nollama serve\n\n# 3. Ouvrez les paramètres de Cursor (Cmd/Ctrl + ,)\n# 4. Recherchez "Model" et définissez :\n#    - Model Provider: "Ollama"\n#    - Model: "qwen2.5-coder:7b" (ou votre choix)\n#    - API Base: "http://localhost:11434"\n\n# 5. Tapez du code et appuyez sur Tab pour les complétions inline\n# 6. Ctrl+K pour les complétions multiligne',
          codeLanguage: 'bash',
        },
        bestModels: {
          title: 'Quels modèles conviennent le mieux au code ?',
          content: [
            '⚠️ **Règle RAM** : Ayez toujours 2-3 Go de RAM libre de plus que ce que le modèle nécessite. Un modèle 7B en Q4 (4,7 Go) nécessite 8 Go de RAM totale lors de l\'exécution dans VS Code ou Cursor.',
          ],
          rows: [
            { 'Modèle': 'Qwen3-Coder 7B', 'HumanEval': '72%', 'RAM': '4,7 Go', 'Vitesse': 'Rapide', 'Meilleur pour': 'Meilleur équilibre, le plus rapide' },
            { 'Modèle': 'Llama Code 7B', 'HumanEval': '69%', 'RAM': '4,7 Go', 'Vitesse': 'Rapide', 'Meilleur pour': 'Codage général' },
            { 'Modèle': 'Mistral Small', 'HumanEval': '61%', 'RAM': '4,5 Go', 'Vitesse': 'Très rapide', 'Meilleur pour': 'Léger, serveurs UE' },
            { 'Modèle': 'Llama Code 13B', 'HumanEval': '74%', 'RAM': '8,5 Go', 'Vitesse': 'Moyen', 'Meilleur pour': 'Meilleure qualité sur 16Go' },
            { 'Modèle': 'DeepSeek-Coder 6,7B', 'HumanEval': '68%', 'RAM': '4 Go', 'Vitesse': 'Rapide', 'Meilleur pour': 'Alternative légère' },
          ],
          columns: ['Modèle', 'HumanEval', 'RAM', 'Vitesse', 'Meilleur pour'],
        },
        performance: {
          title: 'Quelle latence et quelle RAM devez-vous attendre ?',
          content: [
            '**La latence de complétude (temps jusqu\'au premier jeton) est critique pour l\'expérience de l\'IDE.** À partir d\'avril 2026, voici les chiffres typiques :',
            '⚠️ **Vérification de la réalité de la latence** : Les complétions locales sont 2-10× plus lentes que le cloud. Utilisez le local pour le travail privé ; utilisez le cloud (Copilot, Claude) pour le codage sensible au temps.',
            '💡 **Optimisation des performances** : Réduisez `contextLength` de 2048 à 1024 jetons pour réduire la latence de moitié. Compromis : moins de lignes de code dans le contexte pour les suggestions.',
          ],
          rows: [
            { 'Matériel': 'RTX 4090 GPU', 'Modèle': 'Qwen3-Coder 7B', 'Latence': '0,3-0,5 sec', 'Débit': '150 jetons/sec' },
            { 'Matériel': 'RTX 4070 GPU', 'Modèle': 'Qwen3-Coder 7B', 'Latence': '0,8-1,5 sec', 'Débit': '80 jetons/sec' },
            { 'Matériel': 'M3 MacBook Pro', 'Modèle': 'Qwen3-Coder 7B', 'Latence': '2-3 sec', 'Débit': '20 jetons/sec' },
            { 'Matériel': 'CPU 8 cœurs uniquement', 'Modèle': 'Qwen3-Coder 7B', 'Latence': '5-10 sec', 'Débit': '3 jetons/sec' },
          ],
          columns: ['Matériel', 'Modèle', 'Latence', 'Débit'],
          note: '**Remarque sur les données de performance** : Latence et débit mesurés avec format Qwen3-Coder 7B Q4_K_M, taille de lot = 1, sur système frais (pas de tâches en arrière-plan). Vos performances réelles dépendent du SE, de la disponibilité RAM, du format de quantification et de la charge simultanée.',
        },
        advanced: {
          title: 'Comment configurez-vous les complétions de code pour les performances ?',
          content: [
            '**Affinez l\'expérience avec ces paramètres :**',
            '⚠️ **Avertissement** : Sur les machines 8Go avec des modèles 13B, les complétions peuvent prendre 5-10 secondes, ce qui rend l\'IDE peu réactif. Restez avec les modèles 7B pour une performance fluide.',
            '💡 **Conseil pro** : Augmentez `debounceWaitMs` à 400-500 ms pour réduire le scintillement et éviter d\'afficher des suggestions incomplètes.',
          ],
          codeBlock: '# Paramètres avancés config.json\n{\n  "tabAutocompleteModel": {\n    "contextLength": 2048,     # Combien de contexte de code envoyer\n    "maxTokens": 50            # Jetons max par complétude\n  },\n  "completionOptions": {\n    "maxContextTokens": 1024,\n    "maxSuggestionsCount": 5,\n    "debounceWaitMs": 200      # Attendre avant d\'afficher (ms)\n  },\n  # Pour une inférence plus rapide, utilisez un contexte plus petit :\n  "models": [{\n    "contextLength": 1024      # Contexte plus petit = plus rapide\n  }]\n}\n\n# Pour la meilleure vitesse sur machines 8Go :\n# - Utilisez le modèle 7B (pas 13B)\n# - Réglez maxTokens sur 30\n# - Réglez debounceWaitMs sur 500 (moins de scintillement)',
          codeLanguage: 'json',
        },
        commonMistakes: {
          title: 'Quelles sont les erreurs courantes lors de la configuration des complétions de code local ?',
          items: [
            '**Ne pas optimiser la latence de debounce** : Si les complétions semblent « lentes », augmentez debounceWaitMs (par exemple à 400 ms) pour éviter les suggestions incomplètes.',
            '**Utiliser un modèle trop grand pour votre RAM** : Un modèle 13B + surcharge d\'éditeur peut utiliser 12+ Go. Sur les machines 8Go, restez avec les modèles 7B.',
            '**Attendre une qualité de code au niveau du cloud** : GPT-5.5 est bien meilleur pour le code que n\'importe quel modèle 7B. Les complétions locales représentent 70-80% de la qualité cloud.',
            '**Exécution de l\'inférence sur CPU** : Les complétions CPU sont impratiques (latence 5-10 secondes). GPU est requis pour les complétions utilisables.',
          ],
        },
        faqSection: {
          title: 'FAQ : Complétions de code locales',
          faqs: [
            {
              q: 'Les complétions de code locales sont-elles plus rapides que le cloud ?',
              a: 'Non. Les complétions cloud (GitHub Copilot) sont plus rapides en raison des serveurs optimisés. Les complétions locales ont une latence plus élevée mais zéro coût et zéro risque de confidentialité.',
            },
            {
              q: 'Puis-je utiliser les complétions locales avec d\'autres IDE (PyCharm, Neovim) ?',
              a: 'Oui, mais la configuration varie. PyCharm a un plugin Ollama. Pour Neovim, utilisez cmp-ollama (plugin de complétions). Vérifiez toujours auprès de la communauté IDE les intégrations.',
            },
            {
              q: 'Puis-je utiliser les modèles cloud dans Continue ou Cursor ?',
              a: 'Oui. Configurez Continue pour utiliser OpenAI, Claude ou Gemini. Vous pouvez également mélanger (local pour rapide, cloud pour code complexe).',
            },
            {
              q: 'Les complétions de code locales fonctionnent-elles hors ligne ?',
              a: 'Oui. Si vous avez tiré le modèle dans Ollama, les complétions fonctionnent entièrement hors ligne.',
            },
          ],
        },
        relatedReading: {
          title: 'Lectures connexes',
          items: [
            '[Meilleur assistant IA de code pour LLM local](/fr/local-llms/best-ai-coding-assistant-local-llm) -- Comparaison complète de Cursor, Continue.dev, Cody, Tabnine et Windsurf avec support LLM local.',
            '[Stack LLM Développeur Local](/fr/local-llms/local-llm-developer-stack) -- Stack complet avec serveur API et monitoring de production au-delà de l\'intégration IDE.',
            '[Installer Ollama](/fr/local-llms/how-to-install-ollama) -- Configurer Ollama pour les complétions de code.',
            '[Meilleurs LLM locaux pour le codage](/fr/local-llms/best-local-llms-for-coding) -- Benchmark détaillé du modèle de codage.',
            '[How to Install LM Studio](/fr/local-llms/how-to-install-lm-studio) -- Quel outil utiliser.',
            '[API compatible OpenAI LLM local](/fr/local-llms/local-llm-openai-compatible-api) -- APIs de complétions de code.',
          ],
        },
        sources: {
          title: 'Sources',
          items: [
            'Continue.dev Team. (2026). "Continue Documentation." https://docs.continue.dev/ -- Official setup guide, config.json reference, and local model integration instructions.',
            'Cursor. (2026). "Cursor Documentation." https://docs.cursor.com/ -- Local model configuration, Ollama integration, and inference setup guide.',
            'Alibaba Qwen Team. (2025). "Qwen3-Coder Technical Report." arXiv:2409.12186. https://arxiv.org/abs/2409.12186 -- HumanEval and code generation benchmarks for Qwen3-Coder variants.',
            'DeepSeek-AI. (2024). "DeepSeek-Coder Technical Paper." arXiv:2401.14196. https://arxiv.org/abs/2401.14196 -- Benchmark data and capability analysis for DeepSeek-Coder family.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Comment utiliser les LLM locaux avec VS Code et Cursor 2026',
        'description': 'Comment utiliser les LLM locaux dans VS Code et Cursor pour l\'assistance code privée et rapide avec intégration PromptQuorum.',
        'url': 'https://www.promptquorum.com/fr/local-llms/local-llms-with-vscode-cursor',
        'step': [
          { '@type': 'HowToStep', 'name': 'Installez Continue.dev pour VS Code', 'text': 'Installez l\'extension Continue depuis la marketplace VS Code et configurez-la pour pointer vers votre serveur Ollama local.' },
          { '@type': 'HowToStep', 'name': 'Configurez Cursor avec LLM local', 'text': 'Dans les paramètres de Cursor, réglez le fournisseur d\'IA sur votre point de terminaison Ollama local (http://localhost:11434).' },
          { '@type': 'HowToStep', 'name': 'Sélectionnez un modèle de codage', 'text': 'Utilisez Qwen3-Coder 7B ou DeepSeek-Coder pour les meilleurs résultats de complétude de code local.' },
          { '@type': 'HowToStep', 'name': 'Testez les prompts avec PromptQuorum', 'text': 'Comparez les réponses aux prompts de codage sur plusieurs modèles locaux à l\'aide de PromptQuorum pour trouver le meilleur pour votre flux de travail.' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Les complétions de code locales sont-elles plus rapides que le cloud ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Les complétions cloud (GitHub Copilot) sont plus rapides en raison des serveurs optimisés. Les complétions locales ont une latence plus élevée mais zéro coût et zéro risque de confidentialité.' } },
          { '@type': 'Question', name: 'Puis-je utiliser les complétions locales avec d\'autres IDE (PyCharm, Neovim) ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, mais la configuration varie. PyCharm a un plugin Ollama. Pour Neovim, utilisez cmp-ollama (plugin de complétions). Vérifiez toujours auprès de la communauté IDE les intégrations.' } },
          { '@type': 'Question', name: 'Puis-je utiliser les modèles cloud dans Continue ou Cursor ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Configurez Continue pour utiliser OpenAI, Claude ou Gemini. Vous pouvez également mélanger (local pour rapide, cloud pour code complexe).' } },
          { '@type': 'Question', name: 'Les complétions de code locales fonctionnent-elles hors ligne ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Si vous avez tiré le modèle dans Ollama, les complétions fonctionnent entièrement hors ligne.' } },
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'LLM Locaux avec VS Code et Cursor : Configuration et Bonnes Pratiques',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'VS Code utilise l\'extension Continue.dev pour se connecter aux modèles locaux (Ollama, LM Studio, vLLM).' },
          { '@type': 'ListItem', position: 2, name: 'Cursor est un fork VS Code avec support de modèle local intégré. Aucune extension requise.' },
          { '@type': 'ListItem', position: 3, name: '**Meilleurs modèles locaux pour le code** : Qwen3-Coder 7B, Llama Code 13B ou Mistral Small.' },
          { '@type': 'ListItem', position: 4, name: 'Attendez-vous à 2-5 secondes de latence de complétude sur les GPU grand public avec des modèles 7B.' },
          { '@type': 'ListItem', position: 5, name: 'Depuis avril 2026, les complétions de code locales sont pratiques pour usage personnel, pas encore prêtes pour la production d\'équipe.' },
        ],
      },
    },
    ja: {
      theme: 'Tools & Interfaces',
      title: 'VS CodeとCursorでローカルLLMを使用する：セットアップとベストプラクティス',
      seoTitle: 'VS CodeとCursorでローカルLLMコード補完ガイド：セットアップ 2026',
      intro: 'VS CodeとCursor（AI-firstコードエディタ）の両方は、Continue.dev拡張機能（VS Code）または直接統合（Cursor）を介して、ローカルLLMをコード補完と提案に使用できます。2026年4月現在、ローカルコード補完は7B〜13Bモデルに実用的で、8〜16 GBのRAMが必要です。このガイドではセットアップ、最適なモデル、パフォーマンスチューニングをカバーしています。',
      metaDescription: 'VS CodeおよびCursorエディタでローカル大言語モデルによるコード補完を実現するための完全セットアップガイド。Continue.dev設定、Cursor統合、最適なモデル選択、パフォーマンスチューニング、VRAM要件。',
      publishDate: '2026-04-04',
      readTime: '10分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'ローカルコード補完',
      toc: [
        { label: 'VS Code + Continue.dev', anchor: '#vscode-continue' },
        { label: 'パフォーマンスとVRAM', anchor: '#performance' },
        { label: '高度な設定', anchor: '#advanced' },
        { label: '一般的な間違い', anchor: '#common-mistakes' },
        { label: 'よくある質問', anchor: '#common-questions' },
        { label: '関連情報', anchor: '#related-reading' },
        { label: 'ソース', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'VS CodeはContinue.dev拡張機能を使用してローカルモデル（Ollama、LM Studio、vLLM）に接続します。',
            'Cursorはビルトインのローカルモデルサポート付きのVS Codeフォークです。拡張機能は不要です。',
            '**コードの最高のローカルモデル**：Qwen3-Coder 7B、Llama Code 13B、またはMistral Small。',
            '7Bモデルを使用したコンシューマーGPUで2〜5秒の補完レイテンシを予想してください。',
            '2026年4月現在、ローカルコード補完は個人使用に実用的ですが、チーム向けはまだ本番レベルではありません。',
          ],
        },
        vscodeContinue: {
          title: 'VS CodeでContinue.devをセットアップするにはどうすればよいですか？',
          content: 'Continue.devはローカルおよびクラウドコード補完用のVS Code拡張機能です。',
          codeBlock: '# 1. VS Code Marketplaceからcontinueをインストール\n# 「Continue」を検索してインストールをクリック\n\n# 2. Ollamaが実行されていることを確認\nollama serve\n\n# 3. Continue設定を開く（Ctrl+Shift+P → Continue：設定を開く）\n# config.jsonが開きます\n\n# 4. ローカルモデルのために設定：\n# デフォルト設定を以下で置き換え：\n{\n  "models": [{\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b",\n    "apiBase": "http://localhost:11434"\n  }],\n  "tabAutocompleteModel": {\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b"\n  }\n}\n\n# 5. コード入力を開始し、Tabキーで補完\n# または Ctrl+Shift+\\ 補完を手動トリガー',
          codeLanguage: 'json',
        },
        cursor: {
          title: 'Cursorでローカルモデルを使用するにはどうすればよいですか？',
          content: [
            '**CursorはAIアシスト型コーディング向けに最適化されたVS Codeフォークです。** Ollamaを介したローカルモデルのビルトインサポートを備えています。',
          ],
          codeBlock: '# 1. cursor.shからCursorダウンロード\n# 2. Ollamaが実行されていることを確認\nollama serve\n\n# 3. Cursor設定を開く（Cmd/Ctrl + ,）\n# 4. 「Model」を検索して設定：\n#    - Model Provider: \"Ollama\"\n#    - Model: \"qwen2.5-coder:7b\" （または選択）\n#    - API Base: \"http://localhost:11434\"\n\n# 5. コード入力し、インライン補完にTab\n# 6. 複数行補完にCtrl+K',
          codeLanguage: 'bash',
        },
        bestModels: {
          title: 'コードに最適なモデルはどれですか？',
          content: [
            '⚠️ **VRAM規則**：モデルが必要とするVRAMより2〜3 GB多い空きVRAMを常に持つ。Q4のときの7Bモデル（4.7 GB）はVS CodeまたはCursorで実行するときに合計8 GBのVRAMを必要とします。',
          ],
          rows: [
            { 'モデル': 'Qwen3-Coder 7B', 'HumanEval': '72%', 'VRAM': '4.7 GB', '速度': '速い', '最適：': '最高のバランス、最速' },
            { 'モデル': 'Llama Code 7B', 'HumanEval': '69%', 'VRAM': '4.7 GB', '速度': '速い', '最適：': '一般的なコーディング' },
            { 'モデル': 'Mistral Small', 'HumanEval': '61%', 'VRAM': '4.5 GB', '速度': '非常に速い', '最適：': '軽量、EUサーバー' },
            { 'モデル': 'Llama Code 13B', 'HumanEval': '74%', 'VRAM': '8.5 GB', '速度': '中程度', '最適：': '16GBマシンで品質向上' },
            { 'モデル': 'DeepSeek-Coder 6.7B', 'HumanEval': '68%', 'VRAM': '4 GB', '速度': '速い', '最適：': '軽量代替案' },
          ],
          columns: ['モデル', 'HumanEval', 'VRAM', '速度', '最適：'],
        },
        performance: {
          title: 'どのレイテンシとVRAMを期待すべきですか？',
          content: [
            '**補完レイテンシ（最初のトークンまでの時間）はIDE体験に不可欠です。** 2026年4月現在、ここに典型的な数値があります：',
            '⚠️ **レイテンシ現実チェック**：ローカル補完はクラウドより2〜10倍遅い。プライベート作業にはローカルを使用し、時間に敏感なコーディングにはクラウド（Copilot、Claude）を使用。',
            '💡 **パフォーマンスチューニング**：`contextLength`を2048から1024トークンに減らしてレイテンシを半分にします。トレード：提案のコンテキストコード行が少なくなる。',
          ],
          rows: [
            { 'ハードウェア': 'RTX 4090 GPU', 'モデル': 'Qwen3-Coder 7B', 'レイテンシ': '0.3-0.5秒', 'スループット': '150トークン/秒' },
            { 'ハードウェア': 'RTX 4070 GPU', 'モデル': 'Qwen3-Coder 7B', 'レイテンシ': '0.8-1.5秒', 'スループット': '80トークン/秒' },
            { 'ハードウェア': 'M3 MacBook Pro', 'モデル': 'Qwen3-Coder 7B', 'レイテンシ': '2-3秒', 'スループット': '20トークン/秒' },
            { 'ハードウェア': '8コアCPUのみ', 'モデル': 'Qwen3-Coder 7B', 'レイテンシ': '5-10秒', 'スループット': '3トークン/秒' },
          ],
          columns: ['ハードウェア', 'モデル', 'レイテンシ', 'スループット'],
          note: '**パフォーマンスデータに関する注記**：Qwen3-Coder 7B Q4_K_Mフォーマット、バッチサイズ = 1、新規システム（バックグラウンドタスクなし）で測定されたレイテンシとスループット。実際のパフォーマンスはOS、VRAM可用性、量子化形式、および同時負荷に依存します。',
        },
        advanced: {
          title: 'パフォーマンスのためにコード補完を設定するにはどうすればよいですか？',
          content: [
            'これらの設定で体験を微調整：',
            '⚠️ **警告**：8GBマシンの13Bモデルでは、補完に5〜10秒かかり、IDEが反応しなくなる可能性があります。スムーズなパフォーマンスのために7Bモデルを使用。',
            '💡 **プロのヒント**：`debounceWaitMs`を400〜500 msに増やしてちらつきを減らし、不完全な提案を避ける。',
          ],
          codeBlock: '# config.json高度な設定\n{\n  "tabAutocompleteModel": {\n    "contextLength": 2048,     # 送信するコードコンテキスト\n    "maxTokens": 50            # 補完あたりの最大トークン\n  },\n  "completionOptions": {\n    "maxContextTokens": 1024,\n    "maxSuggestionsCount": 5,\n    "debounceWaitMs": 200      # 表示前待機（ms）\n  },\n  # より高速な推論のために小さいコンテキスト：\n  "models": [{\n    "contextLength": 1024      # 小さいコンテキスト = 高速\n  }]\n}\n\n# 8GBマシンの最高速度：\n# - 7Bモデル使用（13Bでなく）\n# - maxTokensを30に設定\n# - debounceWaitMsを500に設定（ちらつき少なく）',
          codeLanguage: 'json',
        },
        commonMistakes: {
          title: 'ローカルコード補完セットアップで何が一般的な間違いですか？',
          items: [
            '**Debounceレイテンシを調整しない**：補完が「遅い」と感じたら、debounceWaitMsを増やす（例えば400 ms）して不完全な提案を表示しない。',
            '**VRAMに対して大きすぎるモデルを使用**：13Bモデル+エディタオーバーヘッドは12+ GB使用できる。8GBマシンでは7Bモデルを使用。',
            '**クラウドレベルのコード品質を期待**：GPT-5.5はどの7Bモデルよりもコードで大幅に優れている。ローカル補完はクラウド品質の70〜80%。',
            '**CPUで推論を実行**：CPU補完は非実用的（5〜10秒レイテンシ）。GPUは有用な補完に必要。',
          ],
        },
        faqSection: {
          title: 'FAQ：ローカルコード補完',
          faqs: [
            {
              q: 'ローカルコード補完はクラウドより速いですか？',
              a: 'いいえ。クラウド補完（GitHub Copilot）は最適化されたサーバーで速いです。ローカル補完はレイテンシが高いですがゼロコストとゼロプライバシーリスク。',
            },
            {
              q: '他のIDE（PyCharm、Neovim）でローカル補完を使用できますか？',
              a: 'はい、しかしセットアップは異なる。PyCharmはOllamaプラグインを持つ。Neovimの場合、cmp-ollama（補完プラグイン）を使用。常にIDE コミュニティ統合をチェック。',
            },
            {
              q: 'ContinueまたはCursorでクラウドモデルを使用できますか？',
              a: 'はい。ContinueをOpenAI、Claude、またはGeminiで使用するように設定。また混合できます（高速ローカル、複雑コード用クラウド）。',
            },
            {
              q: 'ローカルコード補完はオフラインで機能しますか？',
              a: 'はい。Ollamaでモデルを取得した場合、補完は完全にオフライン機能。',
            },
          ],
        },
        countrySpecific: {
          id: 'country-specific-ja',
          title: '日本人開発者のためのローカルLLMコード補完：Cursor vs Continue.dev',
          content: [
            'GSCデータによると「cursor ローカルllm」というクエリは8.7% CTRを記録しており、日本の開発者コミュニティがこのトピックを積極的に検索しています。ZennとQiitaには日本語の詳細セットアップ記事が多数あり、Continue.devとOllamaの組み合わせが特に人気です。',
            'VS Code自体は日本語UIに完全対応（Japanese Language Packプラグイン）。Cursor IDEも日本語UIをサポートしています。ローカルLLMとの組み合わせで、日本語コメント・日本語変数名を含むコードへの補完精度が高まります。',
          ],
          items: [
            '**Zenn/Qiitaの日本語セットアップ記事：** 「Continue.dev Ollama 設定」「Cursor ローカル LLM」などで検索すると実践的な記事が多数ヒット。Zenn（zenn.dev）は技術記事品質が高く、GitHub連携で更新管理されている点が特徴。',
            '**日本語コード用推奨モデル：** Qwen3-Coder-7B（日本語コメント・文書化に強い）、DeepSeek Coder V2（英語中心だが日本語コンテキストも理解）。日本語変数名やコメントを含むプロジェクトではQwen3-Coderが優位。',
            '**Continue.dev 日本語設定：** `~/.continue/config.json`のシステムプロンプトに「日本語でコメントを生成してください」と追加すると日本語コード補完の品質が向上。',
            '**Apple Silicon優位性（日本市場）：** 日本はMacBook M系列の普及率が高い。MLX経由でのコード補完はOllama比で1.5-2倍速い（M2 Pro基準）。ただしContinue.devとの直接MLX統合は未対応 — Ollama経由が現実的。',
            '**日本語コミュニティ・Discordサーバー：** 「AI開発者JP」「Ollama日本語ユーザー会」などのDiscordサーバーでローカルLLMセットアップの日本語サポートが得られる。',
          ],
        },
        relatedReading: {
          title: '関連情報',
          items: [
            '[ローカルLLM向け最高のAIコーディングアシスタント](/ja/local-llms/best-ai-coding-assistant-local-llm) -- Cursor、Continue.dev、Cody、Tabnine、Windsurfの包括的な比較とローカルLLMサポート。',
            '[ローカルLLM開発スタック](/ja/local-llms/local-llm-developer-stack) -- IDE統合を超えたAPIサーバーと本番モニタリングを含む完全スタック。',
            '[Ollama をインストール](/ja/local-llms/how-to-install-ollama) -- コード補完用 Ollama セットアップ。',
            '[コーディング用の最高のローカル LLM](/ja/local-llms/best-local-llms-for-coding) -- 詳細なコーディングモデルベンチマーク。',
            '[How to Install LM Studio](/ja/local-llms/how-to-install-lm-studio) -- どのツールを使用するか。',
            '[ローカル LLM OpenAI 互換 API](/ja/local-llms/local-llm-openai-compatible-api) -- コード補完 API。',
          ],
        },
        sources: {
          title: 'ソース',
          items: [
            'Continue.dev Team. (2026). "Continue Documentation." https://docs.continue.dev/ -- Official setup guide, config.json reference, and local model integration instructions.',
            'Cursor. (2026). "Cursor Documentation." https://docs.cursor.com/ -- Local model configuration, Ollama integration, and inference setup guide.',
            'Alibaba Qwen Team. (2025). "Qwen3-Coder Technical Report." arXiv:2409.12186. https://arxiv.org/abs/2409.12186 -- HumanEval and code generation benchmarks for Qwen3-Coder variants.',
            'DeepSeek-AI. (2024). "DeepSeek-Coder Technical Paper." arXiv:2401.14196. https://arxiv.org/abs/2401.14196 -- Benchmark data and capability analysis for DeepSeek-Coder family.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'VS CodeとCursorで 2026年ローカル LLM を使用する方法',
        'description': 'VS CodeとCursorでローカルLLMを使用してプライベートで高速なコードアシスタンスを得る方法(PromptQuorum統合)',
        'url': 'https://www.promptquorum.com/ja/local-llms/local-llms-with-vscode-cursor',
        'step': [
          { '@type': 'HowToStep', 'name': 'VS Code用Continue.devをインストール', 'text': 'VS Code Marketplaceからcontinue拡張をインストールし、ローカルOllamaサーバーをポイントするように設定。' },
          { '@type': 'HowToStep', 'name': 'ローカルLLMでCursorを設定', 'text': 'Cursor設定でAIプロバイダーをローカルOllamaエンドポイント（http://localhost:11434）に設定。' },
          { '@type': 'HowToStep', 'name': 'コーディングモデル選択', 'text': 'ローカルコード補完結果を最適にするには、Qwen3-Coder 7BまたはDeepSeek-Coderを使用。' },
          { '@type': 'HowToStep', 'name': 'PromptQuorumでプロンプトテスト', 'text': 'PromptQuorumを使用して複数のローカルモデル全体のコーディングプロンプト応答を比較し、ワークフローに最適なものを見つけ。' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'ローカルコード補完はクラウドより速いですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。クラウド補完（GitHub Copilot）は最適化されたサーバーで速いです。ローカル補完はレイテンシが高いですがゼロコストとゼロプライバシーリスク。' } },
          { '@type': 'Question', name: '他のIDE（PyCharm、Neovim）でローカル補完を使用できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい、しかしセットアップは異なる。PyCharmはOllamaプラグインを持つ。Neovimの場合、cmp-ollama（補完プラグイン）を使用。常にIDEコミュニティ統合をチェック。' } },
          { '@type': 'Question', name: 'ContinueまたはCursorでクラウドモデルを使用できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。ContinueをOpenAI、Claude、またはGeminiで使用するように設定。また混合できます（高速ローカル、複雑コード用クラウド）。' } },
          { '@type': 'Question', name: 'ローカルコード補完はオフラインで機能しますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。Ollamaでモデルを取得した場合、補完は完全にオフライン機能。' } },
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'VS CodeとCursorでローカルLLMを使用する：セットアップとベストプラクティス',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'VS CodeはContinue.dev拡張機能を使用してローカルモデル（Ollama、LM Studio、vLLM）に接続します。' },
          { '@type': 'ListItem', position: 2, name: 'Cursorはビルトインのローカルモデルサポート付きのVS Codeフォークです。拡張機能は不要です。' },
          { '@type': 'ListItem', position: 3, name: '**コードの最高のローカルモデル**：Qwen3-Coder 7B、Llama Code 13B、またはMistral Small。' },
          { '@type': 'ListItem', position: 4, name: '7Bモデルを使用したコンシューマーGPUで2〜5秒の補完レイテンシを予想。' },
          { '@type': 'ListItem', position: 5, name: '2026年4月現在、ローカルコード補完は個人使用に実用的ですが、チーム向けはまだ本番レベルではありません。' },
        ],
      },
    },
    zh: {
      theme: 'Tools & Interfaces',
      title: 'VS Code和Cursor中的本地LLM：设置和最佳实践',
      seoTitle: 'VS Code和Cursor中使用本地大模型实现代码补全的完整教程 2026',
      intro: 'VS Code和Cursor（AI优先的代码编辑器）都可以通过Continue.dev扩展（VS Code）或直接集成（Cursor）使用本地LLM进行代码补全和建议。截至2026年4月，本地代码补全对于7B-13B模型很实用，需要8-16 GB RAM。本指南涵盖设置、最佳模型和性能调整。',
      metaDescription: '在VS Code和Cursor代码编辑器中使用本地运行的大语言模型实现私密代码补全的完整教程与最佳实践指南。详细讲解Continue.dev扩展的安装配置、Cursor集成方法、最优编码模型推荐、性能优化技巧、显存需求分析、隐私保护措施和完整的零成本高效AI编程助手解决方案步骤。',
      publishDate: '2026-04-04',
      readTime: '阅读约10分钟',
      educationalLevel: 'Intermediate',
      primaryTerm: '本地代码补全',
      toc: [
        { label: 'VS Code + Continue.dev', anchor: '#vscode-continue' },
        { label: '性能和显存', anchor: '#performance' },
        { label: '高级配置', anchor: '#advanced' },
        { label: '常见错误', anchor: '#common-mistakes' },
        { label: '常见问题', anchor: '#common-questions' },
        { label: '相关阅读', anchor: '#related-reading' },
        { label: '源代码', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'VS Code使用Continue.dev扩展连接到本地模型（Ollama、LM Studio、vLLM）。',
            'Cursor是一个VS Code分支，具有内置的本地模型支持。无需扩展。',
            '**最佳代码本地模型**：Qwen3-Coder 7B、Llama Code 13B或Mistral Small。',
            '使用7B模型在消费者GPU上预期2-5秒补全延迟。',
            '截至2026年4月，本地代码补全对个人使用很实用，但对团队还不是生产级。',
          ],
        },
        vscodeContinue: {
          title: '如何在VS Code中设置Continue.dev？',
          content: 'Continue.dev是VS Code扩展，用于本地和云代码补全。',
          codeBlock: '# 1. 从VS Code市场安装Continue\n# 搜索"Continue"并单击安装\n\n# 2. 确保Ollama正在运行\nollama serve\n\n# 3. 打开Continue设置（Ctrl+Shift+P → Continue：打开设置）\n# config.json将打开\n\n# 4. 为您的本地模型配置：\n# 用以下内容替换默认设置：\n{\n  "models": [{\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b",\n    "apiBase": "http://localhost:11434"\n  }],\n  "tabAutocompleteModel": {\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b"\n  }\n}\n\n# 5. 开始键入代码并按Tab获得补全\n# 或Ctrl+Shift+\\ 手动触发补全',
          codeLanguage: 'json',
        },
        cursor: {
          title: '如何在Cursor中使用本地模型？',
          content: [
            '**Cursor是针对AI辅助编程优化的VS Code分支。** 它具有通过Ollama的本地模型的内置支持。',
          ],
          codeBlock: '# 1. 从cursor.sh下载Cursor\n# 2. 确保Ollama正在运行\nollama serve\n\n# 3. 打开Cursor设置（Cmd/Ctrl + ,）\n# 4. 搜索"Model"并设置：\n#    - Model Provider: "Ollama"\n#    - Model: "qwen2.5-coder:7b" （或您的选择）\n#    - API Base: "http://localhost:11434"\n\n# 5. 键入代码并按Tab进行内联补全\n# 6. Ctrl+K进行多行补全',
          codeLanguage: 'bash',
        },
        bestModels: {
          title: '哪些模型最适合代码？',
          content: [
            '⚠️ **显存规则**：始终拥有比模型需求多2-3 GB的空闲显存。Q4时的7B模型（4.7 GB）在VS Code或Cursor中运行时需要总计8 GB显存。',
          ],
          rows: [
            { '模型': 'Qwen3-Coder 7B', 'HumanEval': '72%', '显存': '4.7 GB', '速度': '快速', '最佳用途': '最佳平衡、最快' },
            { '模型': 'Llama Code 7B', 'HumanEval': '69%', '显存': '4.7 GB', '速度': '快速', '最佳用途': '通用编码' },
            { '模型': 'Mistral Small', 'HumanEval': '61%', '显存': '4.5 GB', '速度': '非常快', '最佳用途': '轻量、EU服务器' },
            { '模型': 'Llama Code 13B', 'HumanEval': '74%', '显存': '8.5 GB', '速度': '中等', '最佳用途': '16GB机器质量更好' },
            { '模型': 'DeepSeek-Coder 6.7B', 'HumanEval': '68%', '显存': '4 GB', '速度': '快速', '最佳用途': '轻量替代品' },
          ],
          columns: ['模型', 'HumanEval', '显存', '速度', '最佳用途'],
        },
        performance: {
          title: '您应该期望什么样的延迟和显存？',
          content: [
            '**补全延迟（到第一个token的时间）对IDE体验至关重要。** 截至2026年4月，以下是典型数字：',
            '⚠️ **延迟现实检查**：本地补全比云慢2-10倍。将本地用于私人工作；将云（Copilot、Claude）用于时间敏感编码。',
            '💡 **性能调优**：将`contextLength`从2048减少到1024个token以将延迟减半。权衡：建议的代码上下文行更少。',
          ],
          rows: [
            { '硬件': 'RTX 4090 GPU', '模型': 'Qwen3-Coder 7B', '延迟': '0.3-0.5秒', '吞吐量': '150个token/秒' },
            { '硬件': 'RTX 4070 GPU', '模型': 'Qwen3-Coder 7B', '延迟': '0.8-1.5秒', '吞吐量': '80个token/秒' },
            { '硬件': 'M3 MacBook Pro', '模型': 'Qwen3-Coder 7B', '延迟': '2-3秒', '吞吐量': '20个token/秒' },
            { '硬件': '8核CPU仅', '模型': 'Qwen3-Coder 7B', '延迟': '5-10秒', '吞吐量': '3个token/秒' },
          ],
          columns: ['硬件', '模型', '延迟', '吞吐量'],
          note: '**性能数据说明**：使用Qwen3-Coder 7B Q4_K_M格式、批大小 = 1、新鲜系统（无后台任务）测量的延迟和吞吐量。您的实际性能取决于OS、显存可用性、量化格式和并发负载。',
        },
        advanced: {
          title: '如何配置代码补全以获得最佳性能？',
          content: [
            '使用这些设置微调体验：',
            '⚠️ **警告**：在具有13B模型的8GB机器上，补全可能需要5-10秒，使IDE感觉无响应。对于流畅性能，使用7B模型。',
            '💡 **专业提示**：将`debounceWaitMs`增加到400-500毫秒以减少闪烁并避免显示不完整建议。',
          ],
          codeBlock: '# config.json高级设置\n{\n  "tabAutocompleteModel": {\n    "contextLength": 2048,     # 发送多少代码上下文\n    "maxTokens": 50            # 每次补全最大token\n  },\n  "completionOptions": {\n    "maxContextTokens": 1024,\n    "maxSuggestionsCount": 5,\n    "debounceWaitMs": 200      # 显示前等待（毫秒）\n  },\n  # 对于更快的推理，使用较小的上下文：\n  "models": [{\n    "contextLength": 1024      # 较小的上下文 = 更快\n  }]\n}\n\n# 8GB机器的最佳速度：\n# - 使用7B模型（不是13B）\n# - 将maxTokens设置为30\n# - 将debounceWaitMs设置为500（较少闪烁）',
          codeLanguage: 'json',
        },
        commonMistakes: {
          title: '设置本地代码补全时有哪些常见错误？',
          items: [
            '**不调整去抖延迟**：如果补全感觉"迟缓"，增加debounceWaitMs（例如400毫秒）以避免显示不完整建议。',
            '**使用对您的显存来说过大的模型**：13B模型+编辑器开销可使用12+ GB。在8GB机器上，使用7B模型。',
            '**期望云级代码质量**：GPT-5.5在代码方面比任何7B模型好得多。本地补全达到云质量的70-80%。',
            '**在CPU上运行推理**：CPU补全不实用（5-10秒延迟）。显存对有用补全是必需的。',
          ],
        },
        faqSection: {
          title: '常见问题：本地代码补全',
          faqs: [
            {
              q: '本地代码补全比云更快吗？',
              a: '不。云补全（GitHub Copilot）由于优化的服务器而更快。本地补全具有更高延迟但零成本和零隐私风险。',
            },
            {
              q: '我可以在其他IDE（PyCharm、Neovim）中使用本地补全吗？',
              a: '可以，但设置有所不同。PyCharm有Ollama插件。对于Neovim，使用cmp-ollama（补全插件）。始终检查IDE社区以了解集成。',
            },
            {
              q: '我可以在Continue或Cursor中使用云模型吗？',
              a: '可以。配置Continue以使用OpenAI、Claude或Gemini。您也可以混合（本地快速，云复杂代码）。',
            },
            {
              q: '本地代码补全在离线工作吗？',
              a: '可以。如果您已在Ollama中提取模型，补全完全离线工作。',
            },
          ],
        },
        relatedReading: {
          title: '相关阅读',
          items: [
            '[本地LLM最佳AI编码助手](/zh/local-llms/best-ai-coding-assistant-local-llm) -- Cursor、Continue.dev、Cody、Tabnine和Windsurf与本地LLM支持的全面对比。',
            '[本地LLM开发栈](/zh/local-llms/local-llm-developer-stack) -- 超越IDE集成的完整栈，包含API服务器搭建和生产监控。',
            '[安装Ollama](/zh/local-llms/how-to-install-ollama) -- 代码补全Ollama设置。',
            '[编码的最佳本地LLM](/zh/local-llms/best-local-llms-for-coding) -- 详细编码模型基准。',
            '[How to Install LM Studio](/zh/local-llms/how-to-install-lm-studio) -- 使用哪个工具。',
            '[本地LLM OpenAI兼容API](/zh/local-llms/local-llm-openai-compatible-api) -- 代码补全API。',
          ],
        },
        sources: {
          title: '源代码',
          items: [
            'Continue.dev Team. (2026). "Continue Documentation." https://docs.continue.dev/ -- Official setup guide, config.json reference, and local model integration instructions.',
            'Cursor. (2026). "Cursor Documentation." https://docs.cursor.com/ -- Local model configuration, Ollama integration, and inference setup guide.',
            'Alibaba Qwen Team. (2025). "Qwen3-Coder Technical Report." arXiv:2409.12186. https://arxiv.org/abs/2409.12186 -- HumanEval and code generation benchmarks for Qwen3-Coder variants.',
            'DeepSeek-AI. (2024). "DeepSeek-Coder Technical Paper." arXiv:2401.14196. https://arxiv.org/abs/2401.14196 -- Benchmark data and capability analysis for DeepSeek-Coder family.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '如何在VS Code和Cursor中使用本地LLM 2026',
        'description': '如何在VS Code和Cursor中使用本地LLM进行私密、快速的代码帮助（带PromptQuorum集成）。',
        'url': 'https://www.promptquorum.com/zh/local-llms/local-llms-with-vscode-cursor',
        'step': [
          { '@type': 'HowToStep', 'name': '安装VS Code的Continue.dev', 'text': '从VS Code市场安装Continue扩展并将其配置为指向您的本地Ollama服务器。' },
          { '@type': 'HowToStep', 'name': '在Cursor中配置本地LLM', 'text': '在Cursor设置中，将AI提供程序设置为您的本地Ollama端点（http://localhost:11434）。' },
          { '@type': 'HowToStep', 'name': '选择编码模型', 'text': '使用Qwen3-Coder 7B或DeepSeek-Coder获得最佳本地代码补全结果。' },
          { '@type': 'HowToStep', 'name': '使用PromptQuorum测试提示', 'text': '使用PromptQuorum比较多个本地模型的编码提示响应，以找到最适合您工作流的模型。' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: '本地代码补全比云更快吗？', acceptedAnswer: { '@type': 'Answer', text: '不。云补全（GitHub Copilot）由于优化的服务器而更快。本地补全具有更高延迟但零成本和零隐私风险。' } },
          { '@type': 'Question', name: '我可以在其他IDE（PyCharm、Neovim）中使用本地补全吗？', acceptedAnswer: { '@type': 'Answer', text: '可以，但设置有所不同。PyCharm有Ollama插件。对于Neovim，使用cmp-ollama（补全插件）。始终检查IDE社区以了解集成。' } },
          { '@type': 'Question', name: '我可以在Continue或Cursor中使用云模型吗？', acceptedAnswer: { '@type': 'Answer', text: '可以。配置Continue以使用OpenAI、Claude或Gemini。您也可以混合（本地快速，云复杂代码）。' } },
          { '@type': 'Question', name: '本地代码补全在离线工作吗？', acceptedAnswer: { '@type': 'Answer', text: '可以。如果您已在Ollama中提取模型，补全完全离线工作。' } },
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'VS Code和Cursor中的本地LLM：设置和最佳实践',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'VS Code使用Continue.dev扩展连接到本地模型（Ollama、LM Studio、vLLM）。' },
          { '@type': 'ListItem', position: 2, name: 'Cursor是一个VS Code分支，具有内置的本地模型支持。无需扩展。' },
          { '@type': 'ListItem', position: 3, name: '**最佳代码本地模型**：Qwen3-Coder 7B、Llama Code 13B或Mistral Small。' },
          { '@type': 'ListItem', position: 4, name: '在消费者GPU上使用7B模型时，预期2-5秒补全延迟。' },
          { '@type': 'ListItem', position: 5, name: '截至2026年4月，本地代码补全对个人使用很实用，但对团队还不是生产级。' },
        ],
      },
    },
    es: {
      theme: 'Tools & Interfaces',
      title: 'LLMs Locales con VS Code y Cursor: Configuración y Mejores Prácticas',
      seoTitle: 'LLMs Locales en VS Code y Cursor: Guía de Configuración 2026',
      intro: 'VS Code y Cursor (un editor de código orientado a la IA) pueden usar LLMs locales para completar y sugerir código, mediante la extensión Continue.dev (VS Code) o la integración directa (Cursor). A partir de abril de 2026, las completaciones de código locales son prácticas para modelos 7B-13B y requieren 8-16 GB de RAM. Esta guía cubre la configuración, los mejores modelos y el ajuste del rendimiento.',
      metaDescription: 'Usa Ollama en VS Code con Continue.dev para completados de código locales sin clave API. Mejores modelos, requisitos de VRAM e integración con Cursor 2026.',
      publishDate: '2026-04-04',
      readTime: '10 min de lectura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'completación de código local',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'VS Code + Continue.dev', anchor: '#vscode-continue' },
        { label: 'Editor Cursor', anchor: '#cursor-editor' },
        { label: 'Mejores modelos para código', anchor: '#best-models' },
        { label: 'Rendimiento y VRAM', anchor: '#performance' },
        { label: 'Configuración avanzada', anchor: '#advanced' },
        { label: 'Errores comunes', anchor: '#common-mistakes' },
        { label: 'Preguntas frecuentes', anchor: '#common-questions' },
        { label: 'Lecturas relacionadas', anchor: '#related-reading' },
        { label: 'Fuentes', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'VS Code usa la extensión Continue.dev para conectarse a modelos locales (Ollama, LM Studio, vLLM).',
            'Cursor es un fork de VS Code con soporte nativo para modelos locales. No necesitas ninguna extensión.',
            '**Mejores modelos locales para código**: Qwen3-Coder 7B, Llama Code 13B o Mistral Small.',
            'Espera una latencia de completación de 2-5 segundos en GPUs de consumo con modelos 7B.',
            'A partir de abril de 2026, las completaciones de código locales son prácticas para uso personal, pero aún no están listas para producción en equipos.',
          ],
        },
        vscodeContinue: {
          title: '¿Cómo configurar Continue.dev en VS Code?',
          content: 'Continue.dev es una extensión de VS Code para completaciones de código locales y en la nube.',
          codeBlock: '# 1. Install Continue from VS Code marketplace\n# Search "Continue" and click Install\n\n# 2. Make sure Ollama is running\nollama serve\n\n# 3. Open Continue settings (Ctrl+Shift+P → Continue: Open Settings)\n# config.json opens\n\n# 4. Configure for your local model:\n# Replace the default settings with:\n{\n  "models": [{\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b",\n    "apiBase": "http://localhost:11434"\n  }],\n  "tabAutocompleteModel": {\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b"\n  }\n}\n\n# 5. Start typing code and press Tab for completions\n# Or Ctrl+Shift+\\ to manually trigger completions',
          codeLanguage: 'json',
        },
        cursor: {
          title: '¿Cómo usar modelos locales en Cursor?',
          content: [
            '**Cursor es un fork de VS Code optimizado para la programación asistida por IA.** Tiene soporte integrado para modelos locales mediante Ollama.',
          ],
          codeBlock: '# 1. Download Cursor from cursor.sh\n# 2. Make sure Ollama is running\nollama serve\n\n# 3. Open Cursor Settings (Cmd/Ctrl + ,)\n# 4. Search "Model" and set:\n#    - Model Provider: "Ollama"\n#    - Model: "qwen2.5-coder:7b" (or your choice)\n#    - API Base: "http://localhost:11434"\n\n# 5. Type code and press Tab for inline completions\n# 6. Ctrl+K for multi-line completions',
          codeLanguage: 'bash',
        },
        bestModels: {
          title: '¿Qué modelos son los mejores para código?',
          content: [
            '⚠️ **Regla de VRAM**: Ten siempre 2-3 GB de VRAM libre por encima de lo que requiere el modelo. Un modelo 7B en Q4 (4,7 GB) necesita 8 GB de VRAM en total al ejecutarse en VS Code o Cursor.',
          ],
          rows: [
            { 'Modelo': 'Qwen3-Coder 7B', 'HumanEval': '72%', 'VRAM': '4,7 GB', 'Velocidad': 'Rápido', 'Ideal para': 'Mejor equilibrio, más veloz' },
            { 'Modelo': 'Llama Code 7B', 'HumanEval': '69%', 'VRAM': '4,7 GB', 'Velocidad': 'Rápido', 'Ideal para': 'Programación general' },
            { 'Modelo': 'Mistral Small', 'HumanEval': '61%', 'VRAM': '4,5 GB', 'Velocidad': 'Muy rápido', 'Ideal para': 'Ligero, servidores UE' },
            { 'Modelo': 'Llama Code 13B', 'HumanEval': '74%', 'VRAM': '8,5 GB', 'Velocidad': 'Medio', 'Ideal para': 'Mejor calidad en máquinas de 16 GB' },
            { 'Modelo': 'DeepSeek-Coder 6.7B', 'HumanEval': '68%', 'VRAM': '4 GB', 'Velocidad': 'Rápido', 'Ideal para': 'Alternativa ligera' },
          ],
          columns: ['Modelo', 'HumanEval', 'VRAM', 'Velocidad', 'Ideal para'],
        },
        performance: {
          title: '¿Qué latencia y VRAM debes esperar?',
          content: [
            '**La latencia de completación (tiempo hasta el primer token) es fundamental para la experiencia en el IDE.** A partir de abril de 2026, estos son los valores típicos:',
            '⚠️ **Verificación de realidad de la latencia**: Las completaciones locales son 2-10× más lentas que las de la nube. Usa lo local para trabajo privado; usa la nube (Copilot, Claude) para programación donde el tiempo importa.',
            '💡 **Optimización del rendimiento**: Reduce `contextLength` de 2048 a 1024 tokens para reducir la latencia a la mitad. La contrapartida: menos líneas de código de contexto para las sugerencias.',
          ],
          rows: [
            { 'Hardware': 'RTX 4090 GPU', 'Modelo': 'Qwen3-Coder 7B', 'Latencia': '0,3-0,5 seg', 'Rendimiento': '150 tokens/seg' },
            { 'Hardware': 'RTX 4070 GPU', 'Modelo': 'Qwen3-Coder 7B', 'Latencia': '0,8-1,5 seg', 'Rendimiento': '80 tokens/seg' },
            { 'Hardware': 'M3 MacBook Pro', 'Modelo': 'Qwen3-Coder 7B', 'Latencia': '2-3 seg', 'Rendimiento': '20 tokens/seg' },
            { 'Hardware': 'CPU de 8 núcleos solo', 'Modelo': 'Qwen3-Coder 7B', 'Latencia': '5-10 seg', 'Rendimiento': '3 tokens/seg' },
          ],
          columns: ['Hardware', 'Modelo', 'Latencia', 'Rendimiento'],
          note: '**Nota sobre los datos de rendimiento**: Latencia y rendimiento medidos con el formato Qwen3-Coder 7B Q4_K_M, tamaño de lote = 1, en un sistema sin carga (sin tareas en segundo plano). Tu rendimiento real depende del sistema operativo, la disponibilidad de VRAM, el formato de cuantización y la carga concurrente.',
        },
        advanced: {
          title: '¿Cómo configurar las completaciones de código para obtener el mejor rendimiento?',
          content: [
            'Ajusta la experiencia con estos parámetros:',
            '⚠️ **Advertencia**: En máquinas de 8 GB con modelos 13B, las completaciones pueden tardar 5-10 segundos, haciendo que el IDE se sienta poco responsivo. Quédate con los modelos 7B para un rendimiento fluido.',
            '💡 **Consejo profesional**: Aumenta `debounceWaitMs` a 400-500 ms para reducir el parpadeo y evitar mostrar sugerencias incompletas.',
          ],
          codeBlock: '# config.json advanced settings\n{\n  "tabAutocompleteModel": {\n    "contextLength": 2048,     # How much code context to send\n    "maxTokens": 50            # Max tokens per completion\n  },\n  "completionOptions": {\n    "maxContextTokens": 1024,\n    "maxSuggestionsCount": 5,\n    "debounceWaitMs": 200      # Wait before showing completions (ms)\n  },\n  # For faster inference, use smaller context:\n  "models": [{\n    "contextLength": 1024      # Smaller context = faster\n  }]\n}\n\n# For best speed on 8GB machines:\n# - Use 7B model (not 13B)\n# - Set maxTokens to 30\n# - Set debounceWaitMs to 500 (less flickering)',
          codeLanguage: 'json',
        },
        commonMistakes: {
          title: '¿Cuáles son los errores comunes al configurar completaciones de código locales?',
          items: [
            '**No ajustar la latencia de debounce**: Si las completaciones se sienten "lentas", aumenta debounceWaitMs (por ejemplo, a 400 ms) para evitar mostrar sugerencias incompletas.',
            '**Usar un modelo demasiado grande para tu VRAM**: Un modelo 13B más la sobrecarga del editor puede usar más de 12 GB. En máquinas de 8 GB, quédate con modelos 7B.',
            '**Esperar calidad de código al nivel de la nube**: GPT-5.5 es significativamente mejor en código que cualquier modelo 7B. Las completaciones locales representan el 70-80% de la calidad de la nube.',
            '**Ejecutar la inferencia en CPU**: Las completaciones en CPU son poco prácticas (latencia de 5-10 segundos). La GPU es necesaria para obtener completaciones utilizables.',
          ],
        },
        faqSection: {
          title: 'Preguntas frecuentes: Completaciones de código locales',
          faqs: [
            {
              q: '¿Las completaciones de código locales son más rápidas que las de la nube?',
              a: 'No. Las completaciones en la nube (GitHub Copilot) son más rápidas gracias a servidores optimizados. Las completaciones locales tienen mayor latencia, pero tienen coste cero y cero riesgo para la privacidad.',
            },
            {
              q: '¿Puedo usar completaciones locales con otros IDEs (PyCharm, Neovim)?',
              a: 'Sí, aunque la configuración varía. PyCharm tiene un plugin para Ollama. Para Neovim, usa cmp-ollama (plugin de completaciones). Consulta siempre la comunidad de tu IDE para conocer las integraciones disponibles.',
            },
            {
              q: '¿Puedo usar modelos en la nube en Continue o Cursor?',
              a: 'Sí. Configura Continue para usar OpenAI, Claude o Gemini. También puedes combinarlos (local para tareas rápidas, nube para código complejo).',
            },
            {
              q: '¿Las completaciones de código locales funcionan sin conexión?',
              a: 'Sí. Si has descargado el modelo en Ollama, las completaciones funcionan completamente sin conexión.',
            },
          ],
        },
        relatedReading: {
          title: 'Lecturas relacionadas',
          items: [
            '[Mejor asistente de código IA para LLM local](/es/local-llms/best-ai-coding-assistant-local-llm) -- Comparativa completa de Cursor, Continue.dev, Cody, Tabnine y Windsurf con soporte para LLM local.',
            '[Stack de desarrollador con LLM local](/es/local-llms/local-llm-developer-stack) -- El stack completo que incluye configuración del servidor API y monitoreo en producción más allá de la integración con el IDE.',
            '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) -- Configura Ollama para completaciones de código.',
            '[Mejores LLMs locales para programación](/es/local-llms/best-local-llms-for-coding) -- Benchmark detallado de modelos de código.',
            '[How to Install LM Studio](/es/local-llms/how-to-install-lm-studio) -- Qué herramienta usar.',
            '[API compatible con OpenAI para LLM local](/es/local-llms/local-llm-openai-compatible-api) -- APIs para completaciones de código.',
          ],
        },
        sources: {
          title: 'Fuentes',
          items: [
            'Continue.dev Team. (2026). "Continue Documentation." https://docs.continue.dev/ -- Official setup guide, config.json reference, and local model integration instructions.',
            'Cursor. (2026). "Cursor Documentation." https://docs.cursor.com/ -- Local model configuration, Ollama integration, and inference setup guide.',
            'Alibaba Qwen Team. (2025). "Qwen3-Coder Technical Report." arXiv:2409.12186. https://arxiv.org/abs/2409.12186 -- HumanEval and code generation benchmarks for Qwen3-Coder variants.',
            'DeepSeek-AI. (2024). "DeepSeek-Coder Technical Paper." arXiv:2401.14196. https://arxiv.org/abs/2401.14196 -- Benchmark data and capability analysis for DeepSeek-Coder family.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Cómo usar LLMs locales con VS Code y Cursor 2026',
        'description': 'Cómo usar LLMs locales en VS Code y Cursor para asistencia de código privada y rápida con integración de PromptQuorum.',
        'url': 'https://www.promptquorum.com/es/local-llms/local-llms-with-vscode-cursor',
        'step': [
          { '@type': 'HowToStep', 'name': 'Instala Continue.dev para VS Code', 'text': 'Instala la extensión Continue desde el marketplace de VS Code y configúrala para que apunte a tu servidor Ollama local.' },
          { '@type': 'HowToStep', 'name': 'Configura Cursor con LLM local', 'text': 'En los ajustes de Cursor, establece el proveedor de IA como tu endpoint local de Ollama (http://localhost:11434).' },
          { '@type': 'HowToStep', 'name': 'Selecciona un modelo de código', 'text': 'Usa Qwen3-Coder 7B o DeepSeek-Coder para obtener los mejores resultados de completación de código local.' },
          { '@type': 'HowToStep', 'name': 'Prueba prompts con PromptQuorum', 'text': 'Compara las respuestas a prompts de código en varios modelos locales con PromptQuorum para encontrar el que mejor se adapta a tu flujo de trabajo.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: '¿Las completaciones de código locales son más rápidas que las de la nube?', acceptedAnswer: { '@type': 'Answer', text: 'No. Las completaciones en la nube (GitHub Copilot) son más rápidas gracias a servidores optimizados. Las completaciones locales tienen mayor latencia, pero tienen coste cero y cero riesgo para la privacidad.' } },
          { '@type': 'Question', name: '¿Puedo usar completaciones locales con otros IDEs (PyCharm, Neovim)?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, aunque la configuración varía. PyCharm tiene un plugin para Ollama. Para Neovim, usa cmp-ollama (plugin de completaciones). Consulta siempre la comunidad de tu IDE para conocer las integraciones disponibles.' } },
          { '@type': 'Question', name: '¿Puedo usar modelos en la nube en Continue o Cursor?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Configura Continue para usar OpenAI, Claude o Gemini. También puedes combinarlos (local para tareas rápidas, nube para código complejo).' } },
          { '@type': 'Question', name: '¿Las completaciones de código locales funcionan sin conexión?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Si has descargado el modelo en Ollama, las completaciones funcionan completamente sin conexión.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'LLMs Locales con VS Code y Cursor: Configuración y Mejores Prácticas',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'VS Code usa la extensión Continue.dev para conectarse a modelos locales (Ollama, LM Studio, vLLM).' },
          { '@type': 'ListItem', position: 2, name: 'Cursor es un fork de VS Code con soporte nativo para modelos locales. No necesitas ninguna extensión.' },
          { '@type': 'ListItem', position: 3, name: '**Mejores modelos locales para código**: Qwen3-Coder 7B, Llama Code 13B o Mistral Small.' },
          { '@type': 'ListItem', position: 4, name: 'Espera una latencia de completación de 2-5 segundos en GPUs de consumo con modelos 7B.' },
          { '@type': 'ListItem', position: 5, name: 'A partir de abril de 2026, las completaciones de código locales son prácticas para uso personal, pero aún no están listas para producción en equipos.' },
        ],
      },
    },
    ar: {
      theme: 'Tools & Interfaces',
      title: 'نماذج LLM المحلية مع VS Code وCursor: الإعداد وأفضل الممارسات',
      seoTitle: 'LLM محلي في VS Code وCursor: إعداد Ollama 2026',
      intro: 'يستطيع VS Code وCursor (محرر شيفرة موجّه نحو الذكاء الاصطناعي) استخدام نماذج LLM المحلية لإكمال الشيفرة واقتراحها، عبر إضافة Continue.dev (VS Code) أو التكامل المباشر (Cursor). اعتبارًا من أبريل 2026، إكمالات الشيفرة المحلية عملية لنماذج 7B-13B وتتطلب 8-16 GB من RAM. يغطي هذا الدليل الإعداد وأفضل النماذج وضبط الأداء.',
      metaDescription: 'Ollama مع Continue.dev في VS Code يتيح إكمال الشيفرة محليًا بلا مفتاح API. أفضل النماذج 2026، متطلبات VRAM التفصيلية، وإعداد Cursor بخطوات واضحة.',
      publishDate: '2026-04-04',
      readTime: '10 دقائق للقراءة',
      educationalLevel: 'Intermediate',
      primaryTerm: 'إكمال الشيفرة المحلي',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'VS Code + Continue.dev', anchor: '#vscode-continue' },
        { label: 'محرر Cursor', anchor: '#cursor-editor' },
        { label: 'أفضل النماذج للشيفرة', anchor: '#best-models' },
        { label: 'الأداء وVRAM', anchor: '#performance' },
        { label: 'الإعداد المتقدم', anchor: '#advanced' },
        { label: 'أخطاء شائعة', anchor: '#common-mistakes' },
        { label: 'الأسئلة الشائعة', anchor: '#common-questions' },
        { label: 'قراءات ذات صلة', anchor: '#related-reading' },
        { label: 'المصادر', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'يستخدم VS Code إضافة Continue.dev للاتصال بالنماذج المحلية (Ollama، LM Studio، vLLM).',
            'Cursor هو نسخة معدّلة (fork) من VS Code بدعم أصلي للنماذج المحلية. لا تحتاج أي إضافة.',
            '**أفضل النماذج المحلية للشيفرة**: Qwen3-Coder 7B، Llama Code 13B أو Mistral Small.',
            'توقّع زمن استجابة إكمال 2-5 ثوانٍ على بطاقات GPU استهلاكية مع نماذج 7B.',
            'اعتبارًا من أبريل 2026، إكمالات الشيفرة المحلية عملية للاستخدام الشخصي، لكنها ليست جاهزة بعد للإنتاج في الفرق.',
          ],
        },
        vscodeContinue: {
          title: 'كيف تُعِدّ Continue.dev في VS Code؟',
          content: 'Continue.dev إضافة لـVS Code لإكمالات الشيفرة المحلية والسحابية.',
          codeBlock: '# 1. Install Continue from VS Code marketplace\n# Search "Continue" and click Install\n\n# 2. Make sure Ollama is running\nollama serve\n\n# 3. Open Continue settings (Ctrl+Shift+P → Continue: Open Settings)\n# config.json opens\n\n# 4. Configure for your local model:\n# Replace the default settings with:\n{\n  "models": [{\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b",\n    "apiBase": "http://localhost:11434"\n  }],\n  "tabAutocompleteModel": {\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b"\n  }\n}\n\n# 5. Start typing code and press Tab for completions\n# Or Ctrl+Shift+\\ to manually trigger completions',
          codeLanguage: 'json',
        },
        cursor: {
          title: 'كيف تستخدم النماذج المحلية في Cursor؟',
          content: [
            '**Cursor نسخة معدّلة من VS Code محسّنة للبرمجة المدعومة بالذكاء الاصطناعي.** لديه دعم مدمج للنماذج المحلية عبر Ollama.',
          ],
          codeBlock: '# 1. Download Cursor from cursor.sh\n# 2. Make sure Ollama is running\nollama serve\n\n# 3. Open Cursor Settings (Cmd/Ctrl + ,)\n# 4. Search "Model" and set:\n#    - Model Provider: "Ollama"\n#    - Model: "qwen2.5-coder:7b" (or your choice)\n#    - API Base: "http://localhost:11434"\n\n# 5. Type code and press Tab for inline completions\n# 6. Ctrl+K for multi-line completions',
          codeLanguage: 'bash',
        },
        bestModels: {
          title: 'أي النماذج الأفضل للشيفرة؟',
          content: [
            '⚠️ **قاعدة VRAM**: احتفظ دائمًا بـ2-3 GB من VRAM متاحة فوق ما يتطلبه النموذج. نموذج 7B في Q4 (4.7 GB) يحتاج 8 GB من VRAM إجمالًا عند التشغيل في VS Code أو Cursor.',
          ],
          rows: [
            { 'Modelo': 'Qwen3-Coder 7B', 'HumanEval': '72%', 'VRAM': '4.7 GB', 'Velocidad': 'سريع', 'Ideal para': 'أفضل توازن، الأسرع' },
            { 'Modelo': 'Llama Code 7B', 'HumanEval': '69%', 'VRAM': '4.7 GB', 'Velocidad': 'سريع', 'Ideal para': 'برمجة عامة' },
            { 'Modelo': 'Mistral Small', 'HumanEval': '61%', 'VRAM': '4.5 GB', 'Velocidad': 'سريع جدًا', 'Ideal para': 'خفيف، خوادم الاتحاد الأوروبي' },
            { 'Modelo': 'Llama Code 13B', 'HumanEval': '74%', 'VRAM': '8.5 GB', 'Velocidad': 'متوسط', 'Ideal para': 'أفضل جودة على أجهزة 16 GB' },
            { 'Modelo': 'DeepSeek-Coder 6.7B', 'HumanEval': '68%', 'VRAM': '4 GB', 'Velocidad': 'سريع', 'Ideal para': 'بديل خفيف' },
          ],
          columns: ['Modelo', 'HumanEval', 'VRAM', 'Velocidad', 'Ideal para'],
        },
        performance: {
          title: 'ما زمن الاستجابة وVRAM الذي يجب توقّعه؟',
          content: [
            '**زمن استجابة الإكمال (الوقت حتى الرمز الأول) أساسي لتجربة الـIDE.** اعتبارًا من أبريل 2026، هذه هي القيم النموذجية:',
            '⚠️ **التحقق الواقعي من زمن الاستجابة**: الإكمالات المحلية أبطأ بـ2-10 مرات من السحابية. استخدم المحلي للعمل الخاص؛ استخدم السحابة (Copilot، Claude) للبرمجة حيث يهمّ الوقت.',
            '💡 **تحسين الأداء**: قلّل `contextLength` من 2048 إلى 1024 رمزًا لتقليل زمن الاستجابة إلى النصف. المقايضة: عدد أقل من أسطر شيفرة السياق للاقتراحات.',
          ],
          rows: [
            { 'Hardware': 'RTX 4090 GPU', 'Modelo': 'Qwen3-Coder 7B', 'Latencia': '0.3-0.5 ثانية', 'Rendimiento': '150 رمز/ث' },
            { 'Hardware': 'RTX 4070 GPU', 'Modelo': 'Qwen3-Coder 7B', 'Latencia': '0.8-1.5 ثانية', 'Rendimiento': '80 رمز/ث' },
            { 'Hardware': 'M3 MacBook Pro', 'Modelo': 'Qwen3-Coder 7B', 'Latencia': '2-3 ثوانٍ', 'Rendimiento': '20 رمز/ث' },
            { 'Hardware': 'CPU بـ8 أنوية فقط', 'Modelo': 'Qwen3-Coder 7B', 'Latencia': '5-10 ثوانٍ', 'Rendimiento': '3 رموز/ث' },
          ],
          columns: ['Hardware', 'Modelo', 'Latencia', 'Rendimiento'],
          note: '**ملاحظة حول بيانات الأداء**: زمن الاستجابة والإنتاجية مقيسان بصيغة Qwen3-Coder 7B Q4_K_M، حجم الدفعة = 1، على نظام دون حمل (بلا مهام في الخلفية). يعتمد أداؤك الفعلي على نظام التشغيل وتوافر VRAM وصيغة التكميم والحمل المتزامن.',
        },
        advanced: {
          title: 'كيف تُعِدّ إكمالات الشيفرة للحصول على أفضل أداء؟',
          content: [
            'اضبط التجربة بهذه المعاملات:',
            '⚠️ **تحذير**: على أجهزة 8 GB مع نماذج 13B، قد تستغرق الإكمالات 5-10 ثوانٍ، مما يجعل الـIDE يبدو غير مستجيب. التزم بنماذج 7B لأداء سلس.',
            '💡 **نصيحة احترافية**: زِد `debounceWaitMs` إلى 400-500 مللي ثانية لتقليل الوميض وتجنّب عرض اقتراحات غير مكتملة.',
          ],
          codeBlock: '# config.json advanced settings\n{\n  "tabAutocompleteModel": {\n    "contextLength": 2048,     # How much code context to send\n    "maxTokens": 50            # Max tokens per completion\n  },\n  "completionOptions": {\n    "maxContextTokens": 1024,\n    "maxSuggestionsCount": 5,\n    "debounceWaitMs": 200      # Wait before showing completions (ms)\n  },\n  # For faster inference, use smaller context:\n  "models": [{\n    "contextLength": 1024      # Smaller context = faster\n  }]\n}\n\n# For best speed on 8GB machines:\n# - Use 7B model (not 13B)\n# - Set maxTokens to 30\n# - Set debounceWaitMs to 500 (less flickering)',
          codeLanguage: 'json',
        },
        commonMistakes: {
          title: 'ما الأخطاء الشائعة عند إعداد إكمالات الشيفرة المحلية؟',
          items: [
            '**عدم ضبط زمن استجابة debounce**: إذا بدت الإكمالات "بطيئة"، زِد debounceWaitMs (مثلًا إلى 400 مللي ثانية) لتجنّب عرض اقتراحات غير مكتملة.',
            '**استخدام نموذج كبير جدًا على VRAM الخاص بك**: نموذج 13B زائد عبء المحرر قد يستخدم أكثر من 12 GB. على أجهزة 8 GB، التزم بنماذج 7B.',
            '**توقّع جودة شيفرة بمستوى السحابة**: GPT-5.5 أفضل بشكل كبير في الشيفرة من أي نموذج 7B. تمثّل الإكمالات المحلية 70-80% من جودة السحابة.',
            '**تشغيل الاستدلال على CPU**: الإكمالات على CPU غير عملية (زمن استجابة 5-10 ثوانٍ). GPU ضرورية للحصول على إكمالات قابلة للاستخدام.',
          ],
        },
        faqSection: {
          title: 'الأسئلة الشائعة: إكمالات الشيفرة المحلية',
          faqs: [
            {
              q: 'هل إكمالات الشيفرة المحلية أسرع من السحابية؟',
              a: 'لا. الإكمالات السحابية (GitHub Copilot) أسرع بفضل الخوادم المحسّنة. الإكمالات المحلية ذات زمن استجابة أعلى، لكنها بتكلفة صفرية وصفر خطر على الخصوصية.',
            },
            {
              q: 'هل يمكنني استخدام الإكمالات المحلية مع بيئات IDE أخرى (PyCharm، Neovim)؟',
              a: 'نعم، رغم أن الإعداد يتفاوت. لدى PyCharm إضافة لـOllama. لـNeovim، استخدم cmp-ollama (إضافة إكمالات). راجع دائمًا مجتمع الـIDE الخاص بك لمعرفة التكاملات المتاحة.',
            },
            {
              q: 'هل يمكنني استخدام النماذج السحابية في Continue أو Cursor؟',
              a: 'نعم. اضبط Continue لاستخدام OpenAI أو Claude أو Gemini. يمكنك أيضًا الجمع بينها (المحلي للمهام السريعة، السحابة للشيفرة المعقّدة).',
            },
            {
              q: 'هل تعمل إكمالات الشيفرة المحلية دون اتصال؟',
              a: 'نعم. إذا نزّلت النموذج في Ollama، تعمل الإكمالات دون اتصال بالكامل.',
            },
          ],
        },
        relatedReading: {
          title: 'قراءات ذات صلة',
          items: [
            '[أفضل مساعد شيفرة بالذكاء الاصطناعي لـLLM محلي](/ar/local-llms/best-ai-coding-assistant-local-llm) -- مقارنة كاملة لـCursor وContinue.dev وCody وTabnine وWindsurf بدعم LLM محلي.',
            '[مكدّس المطوّر بـLLM محلي](/ar/local-llms/local-llm-developer-stack) -- المكدّس الكامل الذي يشمل إعداد خادم API والمراقبة في الإنتاج بما يتجاوز التكامل مع الـIDE.',
            '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) -- أعِدّ Ollama لإكمالات الشيفرة.',
            '[أفضل نماذج LLM المحلية للبرمجة](/ar/local-llms/best-local-llms-for-coding) -- معيار مفصّل لنماذج الشيفرة.',
            '[كيفية تثبيت LM Studio](/ar/local-llms/how-to-install-lm-studio) -- أي أداة تستخدم.',
            '[واجهة API متوافقة مع OpenAI لـLLM محلي](/ar/local-llms/local-llm-openai-compatible-api) -- واجهات API لإكمالات الشيفرة.',
          ],
        },
        sources: {
          title: 'المصادر',
          items: [
            'Continue.dev Team. (2026). "Continue Documentation." https://docs.continue.dev/ -- Official setup guide, config.json reference, and local model integration instructions.',
            'Cursor. (2026). "Cursor Documentation." https://docs.cursor.com/ -- Local model configuration, Ollama integration, and inference setup guide.',
            'Alibaba Qwen Team. (2025). "Qwen3-Coder Technical Report." arXiv:2409.12186. https://arxiv.org/abs/2409.12186 -- HumanEval and code generation benchmarks for Qwen3-Coder variants.',
            'DeepSeek-AI. (2024). "DeepSeek-Coder Technical Paper." arXiv:2401.14196. https://arxiv.org/abs/2401.14196 -- Benchmark data and capability analysis for DeepSeek-Coder family.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'كيف تستخدم نماذج LLM المحلية مع VS Code وCursor 2026',
        'description': 'كيف تستخدم نماذج LLM المحلية في VS Code وCursor للحصول على مساعدة شيفرة خاصة وسريعة مع تكامل PromptQuorum.',
        'url': 'https://www.promptquorum.com/ar/local-llms/local-llms-with-vscode-cursor',
        'step': [
          { '@type': 'HowToStep', 'name': 'ثبّت Continue.dev لـVS Code', 'text': 'ثبّت إضافة Continue من متجر VS Code واضبطها لتوجّه إلى خادم Ollama المحلي.' },
          { '@type': 'HowToStep', 'name': 'اضبط Cursor مع LLM محلي', 'text': 'في إعدادات Cursor، اضبط مزوّد الذكاء الاصطناعي على نقطة نهاية Ollama المحلية (http://localhost:11434).' },
          { '@type': 'HowToStep', 'name': 'اختر نموذج شيفرة', 'text': 'استخدم Qwen3-Coder 7B أو DeepSeek-Coder للحصول على أفضل نتائج إكمال الشيفرة المحلية.' },
          { '@type': 'HowToStep', 'name': 'اختبر المطالبات بـPromptQuorum', 'text': 'قارن استجابات مطالبات الشيفرة عبر عدة نماذج محلية بـPromptQuorum لإيجاد الأنسب لسير عملك.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'هل إكمالات الشيفرة المحلية أسرع من السحابية؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. الإكمالات السحابية (GitHub Copilot) أسرع بفضل الخوادم المحسّنة. الإكمالات المحلية ذات زمن استجابة أعلى، لكنها بتكلفة صفرية وصفر خطر على الخصوصية.' } },
          { '@type': 'Question', name: 'هل يمكنني استخدام الإكمالات المحلية مع بيئات IDE أخرى (PyCharm، Neovim)؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم، رغم أن الإعداد يتفاوت. لدى PyCharm إضافة لـOllama. لـNeovim، استخدم cmp-ollama (إضافة إكمالات). راجع دائمًا مجتمع الـIDE الخاص بك لمعرفة التكاملات المتاحة.' } },
          { '@type': 'Question', name: 'هل يمكنني استخدام النماذج السحابية في Continue أو Cursor؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. اضبط Continue لاستخدام OpenAI أو Claude أو Gemini. يمكنك أيضًا الجمع بينها (المحلي للمهام السريعة، السحابة للشيفرة المعقّدة).' } },
          { '@type': 'Question', name: 'هل تعمل إكمالات الشيفرة المحلية دون اتصال؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. إذا نزّلت النموذج في Ollama، تعمل الإكمالات دون اتصال بالكامل.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'نماذج LLM المحلية مع VS Code وCursor: الإعداد وأفضل الممارسات',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'يستخدم VS Code إضافة Continue.dev للاتصال بالنماذج المحلية (Ollama، LM Studio، vLLM).' },
          { '@type': 'ListItem', position: 2, name: 'Cursor نسخة معدّلة من VS Code بدعم أصلي للنماذج المحلية. لا تحتاج أي إضافة.' },
          { '@type': 'ListItem', position: 3, name: '**أفضل النماذج المحلية للشيفرة**: Qwen3-Coder 7B، Llama Code 13B أو Mistral Small.' },
          { '@type': 'ListItem', position: 4, name: 'توقّع زمن استجابة إكمال 2-5 ثوانٍ على بطاقات GPU استهلاكية مع نماذج 7B.' },
          { '@type': 'ListItem', position: 5, name: 'اعتبارًا من أبريل 2026، إكمالات الشيفرة المحلية عملية للاستخدام الشخصي، لكنها ليست جاهزة بعد للإنتاج في الفرق.' },
        ],
      },
    },
    pt: {
      theme: 'Tools & Interfaces',
      title: 'LLMs Locais com VS Code e Cursor: Configuração e Boas Práticas',
      seoTitle: 'LLMs Locais no VS Code e Cursor: Guia de Configuração 2026',
      intro: 'O VS Code e o Cursor (um editor de código voltado para IA) podem usar LLMs locais para completar e sugerir código, via extensão Continue.dev (VS Code) ou integração direta (Cursor). A partir de abril de 2026, os completamentos de código locais são práticos para modelos 7B-13B e exigem 8-16 GB de RAM. Este guia cobre a configuração, os melhores modelos e o ajuste de desempenho.',
      metaDescription: 'Use o Ollama no VS Code com o Continue.dev para completamentos de código locais sem chave de API. Melhores modelos, requisitos de VRAM e integração com o Cursor 2026.',
      publishDate: '2026-04-04',
      readTime: '10 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'completamento de código local',
      toc: [
        { label: 'Pontos principais', anchor: '#key-takeaways' },
        { label: 'VS Code + Continue.dev', anchor: '#vscode-continue' },
        { label: 'Editor Cursor', anchor: '#cursor-editor' },
        { label: 'Melhores modelos para código', anchor: '#best-models' },
        { label: 'Desempenho e VRAM', anchor: '#performance' },
        { label: 'Configuração avançada', anchor: '#advanced' },
        { label: 'Erros comuns', anchor: '#common-mistakes' },
        { label: 'Perguntas frequentes', anchor: '#common-questions' },
        { label: 'Leituras relacionadas', anchor: '#related-reading' },
        { label: 'Fontes', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'O VS Code usa a extensão Continue.dev para se conectar a modelos locais (Ollama, LM Studio, vLLM).',
            'O Cursor é um fork do VS Code com suporte nativo a modelos locais. Você não precisa de nenhuma extensão.',
            '**Melhores modelos locais para código**: Qwen3-Coder 7B, Llama Code 13B ou Mistral Small.',
            'Espere uma latência de completamento de 2-5 segundos em GPUs de consumo com modelos 7B.',
            'A partir de abril de 2026, os completamentos de código locais são práticos para uso pessoal, mas ainda não estão prontos para produção em equipes.',
          ],
        },
        vscodeContinue: {
          title: 'Como configurar o Continue.dev no VS Code?',
          content: 'O Continue.dev é uma extensão do VS Code para completamentos de código locais e em nuvem.',
          codeBlock: '# 1. Install Continue from VS Code marketplace\n# Search "Continue" and click Install\n\n# 2. Make sure Ollama is running\nollama serve\n\n# 3. Open Continue settings (Ctrl+Shift+P → Continue: Open Settings)\n# config.json opens\n\n# 4. Configure for your local model:\n# Replace the default settings with:\n{\n  "models": [{\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b",\n    "apiBase": "http://localhost:11434"\n  }],\n  "tabAutocompleteModel": {\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b"\n  }\n}\n\n# 5. Start typing code and press Tab for completions\n# Or Ctrl+Shift+\\ to manually trigger completions',
          codeLanguage: 'json',
        },
        cursor: {
          title: 'Como usar modelos locais no Cursor?',
          content: [
            '**O Cursor é um fork do VS Code otimizado para a programação assistida por IA.** Ele tem suporte integrado a modelos locais via Ollama.',
          ],
          codeBlock: '# 1. Download Cursor from cursor.sh\n# 2. Make sure Ollama is running\nollama serve\n\n# 3. Open Cursor Settings (Cmd/Ctrl + ,)\n# 4. Search "Model" and set:\n#    - Model Provider: "Ollama"\n#    - Model: "qwen2.5-coder:7b" (or your choice)\n#    - API Base: "http://localhost:11434"\n\n# 5. Type code and press Tab for inline completions\n# 6. Ctrl+K for multi-line completions',
          codeLanguage: 'bash',
        },
        bestModels: {
          title: 'Quais modelos são os melhores para código?',
          content: [
            '⚠️ **Regra de VRAM**: Tenha sempre 2-3 GB de VRAM livre acima do que o modelo exige. Um modelo 7B em Q4 (4,7 GB) precisa de 8 GB de VRAM no total ao rodar no VS Code ou no Cursor.',
          ],
          rows: [
            { 'Modelo': 'Qwen3-Coder 7B', 'HumanEval': '72%', 'VRAM': '4,7 GB', 'Velocidade': 'Rápido', 'Ideal para': 'Melhor equilíbrio, mais veloz' },
            { 'Modelo': 'Llama Code 7B', 'HumanEval': '69%', 'VRAM': '4,7 GB', 'Velocidade': 'Rápido', 'Ideal para': 'Programação geral' },
            { 'Modelo': 'Mistral Small', 'HumanEval': '61%', 'VRAM': '4,5 GB', 'Velocidade': 'Muito rápido', 'Ideal para': 'Leve, servidores UE' },
            { 'Modelo': 'Llama Code 13B', 'HumanEval': '74%', 'VRAM': '8,5 GB', 'Velocidade': 'Médio', 'Ideal para': 'Melhor qualidade em máquinas de 16 GB' },
            { 'Modelo': 'DeepSeek-Coder 6.7B', 'HumanEval': '68%', 'VRAM': '4 GB', 'Velocidade': 'Rápido', 'Ideal para': 'Alternativa leve' },
          ],
          columns: ['Modelo', 'HumanEval', 'VRAM', 'Velocidade', 'Ideal para'],
        },
        performance: {
          title: 'Que latência e VRAM você deve esperar?',
          content: [
            '**A latência de completamento (tempo até o primeiro token) é fundamental para a experiência no IDE.** A partir de abril de 2026, estes são os valores típicos:',
            '⚠️ **Verificação de realidade da latência**: Os completamentos locais são 2-10× mais lentos que os da nuvem. Use o local para trabalho privado; use a nuvem (Copilot, Claude) para programação em que o tempo importa.',
            '💡 **Otimização do desempenho**: Reduza o `contextLength` de 2048 para 1024 tokens para reduzir a latência pela metade. O contraponto: menos linhas de código de contexto para as sugestões.',
          ],
          rows: [
            { 'Hardware': 'RTX 4090 GPU', 'Modelo': 'Qwen3-Coder 7B', 'Latência': '0,3-0,5 seg', 'Vazão': '150 tokens/seg' },
            { 'Hardware': 'RTX 4070 GPU', 'Modelo': 'Qwen3-Coder 7B', 'Latência': '0,8-1,5 seg', 'Vazão': '80 tokens/seg' },
            { 'Hardware': 'M3 MacBook Pro', 'Modelo': 'Qwen3-Coder 7B', 'Latência': '2-3 seg', 'Vazão': '20 tokens/seg' },
            { 'Hardware': 'CPU de 8 núcleos apenas', 'Modelo': 'Qwen3-Coder 7B', 'Latência': '5-10 seg', 'Vazão': '3 tokens/seg' },
          ],
          columns: ['Hardware', 'Modelo', 'Latência', 'Vazão'],
          note: '**Nota sobre os dados de desempenho**: Latência e vazão medidas com o formato Qwen3-Coder 7B Q4_K_M, batch size = 1, em um sistema sem carga (sem tarefas em segundo plano). Sua vazão real depende do sistema operacional, da disponibilidade de VRAM, do formato de quantização e da carga concorrente.',
        },
        advanced: {
          title: 'Como configurar os completamentos de código para o melhor desempenho?',
          content: [
            'Ajuste a experiência com estes parâmetros:',
            '⚠️ **Aviso**: Em máquinas de 8 GB com modelos 13B, os completamentos podem levar 5-10 segundos, deixando o IDE pouco responsivo. Fique com os modelos 7B para um desempenho fluido.',
            '💡 **Dica profissional**: Aumente o `debounceWaitMs` para 400-500 ms para reduzir o flicker e evitar mostrar sugestões incompletas.',
          ],
          codeBlock: '# config.json advanced settings\n{\n  "tabAutocompleteModel": {\n    "contextLength": 2048,     # How much code context to send\n    "maxTokens": 50            # Max tokens per completion\n  },\n  "completionOptions": {\n    "maxContextTokens": 1024,\n    "maxSuggestionsCount": 5,\n    "debounceWaitMs": 200      # Wait before showing completions (ms)\n  },\n  # For faster inference, use smaller context:\n  "models": [{\n    "contextLength": 1024      # Smaller context = faster\n  }]\n}\n\n# For best speed on 8GB machines:\n# - Use 7B model (not 13B)\n# - Set maxTokens to 30\n# - Set debounceWaitMs to 500 (less flickering)',
          codeLanguage: 'json',
        },
        commonMistakes: {
          title: 'Quais são os erros comuns ao configurar completamentos de código locais?',
          items: [
            '**Não ajustar a latência de debounce**: Se os completamentos parecerem "lentos", aumente o debounceWaitMs (por exemplo, para 400 ms) para evitar mostrar sugestões incompletas.',
            '**Usar um modelo grande demais para a sua VRAM**: Um modelo 13B mais o overhead do editor pode usar mais de 12 GB. Em máquinas de 8 GB, fique com modelos 7B.',
            '**Esperar qualidade de código no nível da nuvem**: O GPT-5.5 é significativamente melhor em código que qualquer modelo 7B. Os completamentos locais representam 70-80% da qualidade da nuvem.',
            '**Rodar a inferência na CPU**: Os completamentos na CPU são pouco práticos (latência de 5-10 segundos). A GPU é necessária para completamentos utilizáveis.',
          ],
        },
        faqSection: {
          title: 'Perguntas frequentes: Completamentos de código locais',
          faqs: [
            {
              q: 'Os completamentos de código locais são mais rápidos que os da nuvem?',
              a: 'Não. Os completamentos na nuvem (GitHub Copilot) são mais rápidos graças a servidores otimizados. Os completamentos locais têm maior latência, mas têm custo zero e risco zero para a privacidade.',
            },
            {
              q: 'Posso usar completamentos locais com outros IDEs (PyCharm, Neovim)?',
              a: 'Sim, embora a configuração varie. O PyCharm tem um plugin para o Ollama. Para o Neovim, use o cmp-ollama (plugin de completamentos). Consulte sempre a comunidade do seu IDE para conhecer as integrações disponíveis.',
            },
            {
              q: 'Posso usar modelos em nuvem no Continue ou no Cursor?',
              a: 'Sim. Configure o Continue para usar OpenAI, Claude ou Gemini. Você também pode combiná-los (local para tarefas rápidas, nuvem para código complexo).',
            },
            {
              q: 'Os completamentos de código locais funcionam offline?',
              a: 'Sim. Se você baixou o modelo no Ollama, os completamentos funcionam totalmente offline.',
            },
          ],
        },
        relatedReading: {
          title: 'Leituras relacionadas',
          items: [
            '[Melhor assistente de código com IA para LLM local](/pt/local-llms/best-ai-coding-assistant-local-llm) -- Comparativo completo de Cursor, Continue.dev, Cody, Tabnine e Windsurf com suporte a LLM local.',
            '[Stack de desenvolvedor com LLM local](/pt/local-llms/local-llm-developer-stack) -- O stack completo que inclui configuração do servidor de API e monitoramento em produção, além da integração com o IDE.',
            '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) -- Configure o Ollama para completamentos de código.',
            '[Melhores LLMs locais para programação](/pt/local-llms/best-local-llms-for-coding) -- Benchmark detalhado de modelos de código.',
            '[Como instalar o LM Studio](/pt/local-llms/how-to-install-lm-studio) -- Qual ferramenta usar.',
            '[API compatível com OpenAI para LLM local](/pt/local-llms/local-llm-openai-compatible-api) -- APIs para completamentos de código.',
          ],
        },
        sources: {
          title: 'Fontes',
          items: [
            'Continue.dev Team. (2026). "Continue Documentation." https://docs.continue.dev/ -- Official setup guide, config.json reference, and local model integration instructions.',
            'Cursor. (2026). "Cursor Documentation." https://docs.cursor.com/ -- Local model configuration, Ollama integration, and inference setup guide.',
            'Alibaba Qwen Team. (2025). "Qwen3-Coder Technical Report." arXiv:2409.12186. https://arxiv.org/abs/2409.12186 -- HumanEval and code generation benchmarks for Qwen3-Coder variants.',
            'DeepSeek-AI. (2024). "DeepSeek-Coder Technical Paper." arXiv:2401.14196. https://arxiv.org/abs/2401.14196 -- Benchmark data and capability analysis for DeepSeek-Coder family.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Como usar LLMs locais com VS Code e Cursor 2026',
        'description': 'Como usar LLMs locais no VS Code e no Cursor para assistência de código privada e rápida com integração do PromptQuorum.',
        'url': 'https://www.promptquorum.com/pt/pt/local-llms/local-llms-with-vscode-cursor',
        'step': [
          { '@type': 'HowToStep', 'name': 'Instale o Continue.dev para o VS Code', 'text': 'Instale a extensão Continue pelo marketplace do VS Code e configure-a para apontar para o seu servidor Ollama local.' },
          { '@type': 'HowToStep', 'name': 'Configure o Cursor com LLM local', 'text': 'Nas configurações do Cursor, defina o provedor de IA como o seu endpoint local do Ollama (http://localhost:11434).' },
          { '@type': 'HowToStep', 'name': 'Selecione um modelo de código', 'text': 'Use Qwen3-Coder 7B ou DeepSeek-Coder para obter os melhores resultados de completamento de código local.' },
          { '@type': 'HowToStep', 'name': 'Teste prompts com o PromptQuorum', 'text': 'Compare as respostas a prompts de código em vários modelos locais com o PromptQuorum para encontrar o que melhor se adapta ao seu fluxo de trabalho.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Os completamentos de código locais são mais rápidos que os da nuvem?', acceptedAnswer: { '@type': 'Answer', text: 'Não. Os completamentos na nuvem (GitHub Copilot) são mais rápidos graças a servidores otimizados. Os completamentos locais têm maior latência, mas têm custo zero e risco zero para a privacidade.' } },
          { '@type': 'Question', name: 'Posso usar completamentos locais com outros IDEs (PyCharm, Neovim)?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, embora a configuração varie. O PyCharm tem um plugin para o Ollama. Para o Neovim, use o cmp-ollama (plugin de completamentos). Consulte sempre a comunidade do seu IDE para conhecer as integrações disponíveis.' } },
          { '@type': 'Question', name: 'Posso usar modelos em nuvem no Continue ou no Cursor?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Configure o Continue para usar OpenAI, Claude ou Gemini. Você também pode combiná-los (local para tarefas rápidas, nuvem para código complexo).' } },
          { '@type': 'Question', name: 'Os completamentos de código locais funcionam offline?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Se você baixou o modelo no Ollama, os completamentos funcionam totalmente offline.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'LLMs Locais com VS Code e Cursor: Configuração e Boas Práticas',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'O VS Code usa a extensão Continue.dev para se conectar a modelos locais (Ollama, LM Studio, vLLM).' },
          { '@type': 'ListItem', position: 2, name: 'O Cursor é um fork do VS Code com suporte nativo a modelos locais. Você não precisa de nenhuma extensão.' },
          { '@type': 'ListItem', position: 3, name: '**Melhores modelos locais para código**: Qwen3-Coder 7B, Llama Code 13B ou Mistral Small.' },
          { '@type': 'ListItem', position: 4, name: 'Espere uma latência de completamento de 2-5 segundos em GPUs de consumo com modelos 7B.' },
          { '@type': 'ListItem', position: 5, name: 'A partir de abril de 2026, os completamentos de código locais são práticos para uso pessoal, mas ainda não estão prontos para produção em equipes.' },
        ],
      },
    },
  ko: {
      freshness_tier: 'annual',
      theme: 'Tools & Interfaces',
      title: 'VS Code와 Cursor에서 로컬 LLM 사용하기: 설정 및 모범 사례',
      seoTitle: 'VS Code와 Cursor에서 로컬 LLM 사용하기: 2026 설정 가이드',
      intro: 'VS Code와 Cursor(AI 중심 코드 편집기)는 모두 Continue.dev 확장(VS Code) 또는 직접 통합(Cursor)을 통해 로컬 LLM을 코드 자동 완성 및 제안에 활용할 수 있습니다. 2026년 4월 기준, 7B~13B 모델에서 로컬 코드 자동 완성이 실용적이며 8~16GB RAM이 필요합니다. 이 가이드는 설정 방법, 최적 모델, 성능 튜닝을 다룹니다.',
      metaDescription: 'Continue.dev를 통해 Ollama를 VS Code에 연결하여 로컬 코드 자동 완성을 사용하십시오 — API 키 불필요. 2026년 최적 모델, VRAM 요구 사항, Cursor 통합 안내.',
      publishDate: '2026-04-04',
      leadAnswerBlock: 'VS Code와 Cursor(AI 중심 코드 편집기)는 모두 Continue.dev 확장(VS Code) 또는 직접 통합(Cursor)을 통해 로컬 LLM을 코드 자동 완성 및 제안에 활용할 수 있습니다.',
      audience: 'Ollama 또는 LM Studio에 익숙하며 로컬 LLM 워크플로를 최적화하려는 개발자',
      readTime: '10분 분량',
      educationalLevel: 'Intermediate',
      primaryTerm: '로컬 코드 자동 완성',
      toc: [
        { label: '핵심 요점', anchor: '#key-takeaways' },
        { label: 'VS Code + Continue.dev', anchor: '#vscode-continue' },
        { label: 'Cursor 편집기', anchor: '#cursor-editor' },
        { label: '코드용 최적 모델', anchor: '#best-models' },
        { label: '성능 및 VRAM', anchor: '#performance' },
        { label: '고급 설정', anchor: '#advanced' },
        { label: '자주 발생하는 실수', anchor: '#common-mistakes' },
        { label: '자주 묻는 질문', anchor: '#common-questions' },
        { label: '관련 자료', anchor: '#related-reading' },
        { label: '출처', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'VS Code는 Continue.dev 확장을 사용하여 로컬 모델(Ollama, LM Studio, vLLM)에 연결합니다.',
            'Cursor는 VS Code 포크로 로컬 모델 지원이 내장되어 있습니다. 별도 확장이 필요하지 않습니다.',
            '**코드용 최적 로컬 모델**: Qwen3-Coder 7B, Llama Code 13B 또는 Mistral Small.',
            '7B 모델 기준 소비자 GPU에서 2~5초의 자동 완성 지연을 예상하십시오.',
            '2026년 4월 기준, 로컬 코드 자동 완성은 개인 사용에는 실용적이나 팀 프로덕션 환경에는 아직 적합하지 않습니다.',
          ],
        },
        vscodeContinue: {
          title: 'VS Code에서 Continue.dev를 설정하는 방법은 무엇입니까?',
          content: 'Continue.dev는 로컬 및 클라우드 코드 자동 완성을 위한 VS Code 확장입니다.',
          codeBlock: '# 1. Install Continue from VS Code marketplace\n# Search "Continue" and click Install\n\n# 2. Make sure Ollama is running\nollama serve\n\n# 3. Open Continue settings (Ctrl+Shift+P → Continue: Open Settings)\n# config.json opens\n\n# 4. Configure for your local model:\n# Replace the default settings with:\n{\n  "models": [{\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b",\n    "apiBase": "http://localhost:11434"\n  }],\n  "tabAutocompleteModel": {\n    "title": "Ollama",\n    "provider": "ollama",\n    "model": "qwen2.5-coder:7b"\n  }\n}\n\n# 5. Start typing code and press Tab for completions\n# Or Ctrl+Shift+\\ to manually trigger completions',
          codeLanguage: 'json',
        },
        cursor: {
          title: 'Cursor에서 로컬 모델을 사용하는 방법은 무엇입니까?',
          content: [
            '**Cursor는 AI 지원 코딩에 최적화된 VS Code 포크입니다.** Ollama를 통한 로컬 모델 지원이 내장되어 있습니다.',
          ],
          codeBlock: '# 1. Download Cursor from cursor.sh\n# 2. Make sure Ollama is running\nollama serve\n\n# 3. Open Cursor Settings (Cmd/Ctrl + ,)\n# 4. Search "Model" and set:\n#    - Model Provider: "Ollama"\n#    - Model: "qwen2.5-coder:7b" (or your choice)\n#    - API Base: "http://localhost:11434"\n\n# 5. Type code and press Tab for inline completions\n# 6. Ctrl+K for multi-line completions',
          codeLanguage: 'bash',
        },
        bestModels: {
          title: '코드용으로 가장 적합한 모델은 무엇입니까?',
          rows: [
            { 'Model': 'Qwen3-Coder 7B', 'HumanEval': '72%', 'VRAM': '4.7 GB', 'Speed': '빠름', 'Best For': '최상의 균형, 가장 빠름' },
            { 'Model': 'Llama Code 7B', 'HumanEval': '69%', 'VRAM': '4.7 GB', 'Speed': '빠름', 'Best For': '일반 코딩' },
            { 'Model': 'Mistral Small', 'HumanEval': '61%', 'VRAM': '4.5 GB', 'Speed': '매우 빠름', 'Best For': '경량, EU 서버' },
            { 'Model': 'Llama Code 13B', 'HumanEval': '74%', 'VRAM': '8.5 GB', 'Speed': '보통', 'Best For': '16GB 머신에서 더 높은 품질' },
            { 'Model': 'DeepSeek-Coder 6.7B', 'HumanEval': '68%', 'VRAM': '4 GB', 'Speed': '빠름', 'Best For': '경량 대안' },
          ],
          columns: ['Model', 'HumanEval', 'VRAM', 'Speed', 'Best For'],
        },
        performance: {
          title: '예상 지연 시간과 VRAM은 얼마입니까?',
          content: [
            '**자동 완성 지연 시간(첫 번째 토큰까지의 시간)은 IDE 경험에 매우 중요합니다.** 2026년 4월 기준 대표적인 수치는 다음과 같습니다:',
          ],
          rows: [
            { 'Hardware': 'RTX 4090 GPU', 'Model': 'Qwen3-Coder 7B', 'Latency': '0.3~0.5초', 'Throughput': '150 토큰/초' },
            { 'Hardware': 'RTX 4070 GPU', 'Model': 'Qwen3-Coder 7B', 'Latency': '0.8~1.5초', 'Throughput': '80 토큰/초' },
            { 'Hardware': 'M3 MacBook Pro', 'Model': 'Qwen3-Coder 7B', 'Latency': '2~3초', 'Throughput': '20 토큰/초' },
            { 'Hardware': '8코어 CPU만 사용', 'Model': 'Qwen3-Coder 7B', 'Latency': '5~10초', 'Throughput': '3 토큰/초' },
          ],
          columns: ['Hardware', 'Model', 'Latency', 'Throughput'],
        },
        advanced: {
          title: '코드 자동 완성을 위한 고급 설정',
          content: '다음 설정으로 경험을 세밀하게 조정하십시오:',
          codeBlock: '# config.json advanced settings\n{\n  "tabAutocompleteModel": {\n    "contextLength": 2048,     # How much code context to send\n    "maxTokens": 50            # Max tokens per completion\n  },\n  "completionOptions": {\n    "maxContextTokens": 1024,\n    "maxSuggestionsCount": 5,\n    "debounceWaitMs": 200      # Wait before showing completions (ms)\n  },\n  # For faster inference, use smaller context:\n  "models": [{\n    "contextLength": 1024      # Smaller context = faster\n  }]\n}\n\n# For best speed on 8GB machines:\n# - Use 7B model (not 13B)\n# - Set maxTokens to 30\n# - Set debounceWaitMs to 500 (less flickering)',
          codeLanguage: 'json',
        },
        commonMistakes: {
          title: '로컬 코드 자동 완성의 자주 발생하는 실수',
          items: [
            '**디바운스 지연 시간 미조정.** 자동 완성이 "느리게" 느껴진다면 debounceWaitMs를 늘리십시오(예: 400ms). 불완전한 제안이 나타나는 것을 방지할 수 있습니다.',
            '**VRAM에 비해 너무 큰 모델 사용.** 13B 모델과 편집기 오버헤드를 합치면 12GB 이상이 필요할 수 있습니다. 8GB 머신에서는 7B 모델을 사용하십시오.',
            '**클라우드 수준의 코드 품질 기대.** GPT-5.5는 7B 모델보다 코드 품질이 현저히 높습니다. 로컬 자동 완성은 클라우드 품질의 70~80% 수준입니다.',
            '**CPU에서 추론 실행.** CPU 자동 완성은 비실용적입니다(5~10초 지연). 실용적인 자동 완성을 위해서는 GPU가 필요합니다.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '로컬 코드 자동 완성에 관한 자주 묻는 질문',
          faqs: [
            {
              q: '로컬 코드 자동 완성이 클라우드보다 빠릅니까?',
              a: '그렇지 않습니다. 클라우드 자동 완성(GitHub Copilot)은 최적화된 서버 덕분에 더 빠릅니다. 로컬 자동 완성은 지연 시간이 더 길지만 비용이 없고 개인 정보 보호 위험도 없습니다.',
            },
            {
              q: '다른 IDE(PyCharm, Neovim)에서도 로컬 자동 완성을 사용할 수 있습니까?',
              a: '가능합니다. 단, 설정 방법이 다릅니다. PyCharm에는 Ollama 플러그인이 있습니다. Neovim의 경우 cmp-ollama(자동 완성 플러그인)를 사용하십시오. 각 IDE 커뮤니티에서 통합 방법을 확인하십시오.',
            },
            {
              q: 'Continue나 Cursor에서 클라우드 모델을 사용할 수 있습니까?',
              a: '가능합니다. Continue를 OpenAI, Claude 또는 Gemini와 함께 사용하도록 설정할 수 있습니다. 빠른 작업에는 로컬, 복잡한 코드에는 클라우드를 혼합하여 사용할 수도 있습니다.',
            },
            {
              q: '로컬 코드 자동 완성은 오프라인에서 작동합니까?',
              a: '예. Ollama에서 모델을 이미 pull한 경우 자동 완성은 완전히 오프라인으로 동작합니다.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 자료',
          items: [
            '[로컬 LLM용 최고의 AI 코딩 어시스턴트](/local-llms/best-ai-coding-assistant-local-llm) -- 로컬 LLM을 지원하는 Cursor, Continue.dev, Cody, Tabnine, Windsurf의 종합 비교.',
            '[로컬 LLM 개발자 스택](/local-llms/local-llm-developer-stack) -- IDE 통합을 넘어 API 서버 설정 및 프로덕션 모니터링을 포함한 완전한 스택.',
            '[Ollama 설치 방법](/local-llms/how-to-install-ollama) -- 코드 자동 완성을 위한 Ollama 설정.',
            '[코딩용 최고의 로컬 LLM](/local-llms/best-local-llms-for-coding) -- 상세한 코딩 모델 벤치마크.',
            '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) -- 어떤 도구를 사용해야 하는지.',
            '[로컬 LLM OpenAI 호환 API](/local-llms/local-llm-openai-compatible-api) -- 코드 자동 완성 API.',
          ],
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            'Continue.dev -- continue.dev',
            'Cursor Editor -- cursor.sh',
            'Continue GitHub -- github.com/continuedev/continue',
            'Qwen3-Coder -- github.com/QwenLM/Qwen3-Coder',
            'IDE 통합은 절반에 불과합니다. 코드 생성을 위한 효과적인 프롬프트 작성은 일반 대화와 다른 마인드셋이 필요합니다. 개발자를 위한 프롬프트 엔지니어링을 알아보십시오: [best prompt engineering IDEs](https://www.promptquorum.com/prompt-engineering/best-prompt-engineering-ides)에서 도구와 기법을 비교합니다.',
          ],
        },
      },
    },
  };
