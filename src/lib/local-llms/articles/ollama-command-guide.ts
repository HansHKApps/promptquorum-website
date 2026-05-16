// Auto-generated from src/lib/local-llms/content.ts
// Slug: ollama-command-guide
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Tools & Interfaces',
      title: 'Ollama Command Guide: Every Command Explained (2026)',
      seoTitle: 'Ollama Command Reference 2026: pull, run, serve',
      intro: 'Ollama is a command-line tool, and understanding its commands makes it much more powerful. This guide covers the essential commands: `ollama pull`, `ollama run`, `ollama list`, `ollama rm`, `ollama serve`, and advanced options like model quantization and custom Modelfiles. As of April 2026, these commands cover 95% of real-world use cases.',
      metaDescription: 'Ollama commands explained 2026: pull, run, list, rm, serve, create, with examples. Complete CLI reference covers 95% of use cases.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**Ollama is a command-line tool, and understanding its commands makes it much more powerful. This guide covers the essential commands: `ollama pull`, `ollama run`, `ollama list`, `ollama rm`, `ollama serve`, and advanced options like model quantization and custom Modelfiles.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '11 min read',
      educationalLevel: 'Beginner to Advanced',
      primaryTerm: 'Ollama commands',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Essential Commands', anchor: '#essential-commands' },
        { label: 'Managing Models', anchor: '#managing-models' },
        { label: 'Running and Serving', anchor: '#running-serving' },
        { label: 'Advanced: Custom Modelfiles', anchor: '#custom-modelfiles' },
        { label: 'Advanced: Quantization', anchor: '#quantization' },
        { label: 'Advanced: Embedding Models', anchor: '#embedding-models' },
        { label: 'Environment Variables', anchor: '#env-variables' },
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
            '`ollama pull <model>` -- Download a model (e.g., `ollama pull llama3.2:3b`).',
            '`ollama run <model>` -- Start a chat with a model.',
            '`ollama list` -- Show all downloaded models and their sizes.',
            '`ollama rm <model>` -- Delete a downloaded model.',
            '`ollama serve` -- Start the Ollama API server (runs automatically on Mac/Windows).',
            '`ollama create <name> -f <modelfile>` -- Build a custom model from a Modelfile.',
            'As of April 2026, these commands are stable and cover all common use cases.',
          ],
        },
        essentialCommands: {
          id: 'essential-commands',
          title: 'What Are the Essential Ollama Commands?',
          items: [
            '**`ollama list`** -- Show downloaded models, disk usage, and modification date.',
            '**`ollama pull <model>`** -- Download a model by name (e.g., `ollama pull mistral`).',
            '**`ollama run <model>`** -- Start a chat session with a model.',
            '**`ollama rm <model>`** -- Delete a model and free up disk space.',
            '**`ollama serve`** -- Start the REST API server (typically runs automatically).',
            '**`ollama help`** -- Show all available commands.',
          ],
        },
        managingModels: {
          id: 'managing-models',
          title: 'How Do You Manage Models in Ollama?',
          content: 'Model management in Ollama is entirely command-based:',
          codeBlock: '# List all downloaded models\nollama list\n\n# Download a model from the Ollama library\nollama pull llama3.2:3b       # 7-bit version (~2.5 GB)\nollama pull llama3.2:3b-fp16  # Full precision (~6.5 GB)\n\n# Download specific quantization\nollama pull qwen2.5:7b-q4   # 4-bit quantization\nollama pull qwen2.5:7b-q8   # 8-bit quantization\n\n# See disk usage\ndu -sh ~/.ollama/models\n\n# Delete a model\nollama rm llama3.2:3b\n\n# Pull from custom registry (advanced)\nollama pull localhost:5000/custom-model',
          codeLanguage: 'bash',
        },
        runningServing: {
          id: 'running-serving',
          title: 'How Do You Run and Serve Models?',
          content: 'There are two ways to use Ollama:',
          codeBlock: '# 1. Interactive chat (CLI)\nollama run llama3.2:3b\n# Now type your prompts and press Enter\n\n# 2. Start the API server (runs in background)\nollama serve\n# API listens at http://localhost:11434/v1\n\n# 3. Use the model via API from another terminal\ncurl http://localhost:11434/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "llama3.2:3b",\n    "messages": [{"role": "user", "content": "Hello"}]\n  }\'',
          codeLanguage: 'bash',
        },
        modelfiles: {
          id: 'custom-modelfiles',
          title: 'How Do You Create Custom Models With Modelfiles?',
          content: [
            '**A Modelfile is a configuration file (like a Dockerfile) that defines a custom model by starting from a base model and adding system prompts, parameters, and weights.**',
          ],
          codeBlock: '# Create a file named Modelfile\nFROM llama3.2:3b\n\n# Add a system prompt\nSYSTEM """\nYou are a helpful expert in machine learning.\nAlways explain complex concepts in simple terms.\n"""\n\n# Adjust parameters\nPARAMETER temperature 0.7\nPARAMETER top_p 0.9\n\n# Build the custom model\nollama create ml-expert -f Modelfile\n\n# Use it\nollama run ml-expert',
          codeLanguage: 'bash',
        },
        quantization: {
          id: 'quantization',
          title: 'What Quantization Options Does Ollama Support?',
          content: [
            '**Quantization reduces model size and VRAM by using lower-precision numbers.** Ollama supports GGUF format with multiple quantizations:',
          ],
          rows: [
            { 'Quantization': 'FP16 (full precision)', 'Size (7B)': '14 GB', 'VRAM': '16 GB', 'Quality': 'Best', 'Speed': 'Slowest' },
            { 'Quantization': 'Q8_0 (8-bit)', 'Size (7B)': '7 GB', 'VRAM': '8 GB', 'Quality': 'Excellent', 'Speed': 'Fast' },
            { 'Quantization': 'Q6_K (6-bit)', 'Size (7B)': '5.5 GB', 'VRAM': '6 GB', 'Quality': 'Very good', 'Speed': 'Fast' },
            { 'Quantization': 'Q5_K_M (5-bit)', 'Size (7B)': '5 GB', 'VRAM': '5.5 GB', 'Quality': 'Good', 'Speed': 'Very fast' },
            { 'Quantization': 'Q4_K_M (4-bit)', 'Size (7B)': '4.7 GB', 'VRAM': '5 GB', 'Quality': 'Good', 'Speed': 'Very fast' },
            { 'Quantization': 'Q3_K_M (3-bit)', 'Size (7B)': '3.3 GB', 'VRAM': '4 GB', 'Quality': 'Fair', 'Speed': 'Fastest' },
          ],
          columns: ['Quantization', 'Size (7B)', 'VRAM', 'Quality', 'Speed'],
        },
        embeddings: {
          id: 'embedding-models',
          title: 'How Do You Generate Embeddings With Ollama?',
          content: [
            '**Embeddings are numerical representations of text, useful for RAG (Retrieval-Augmented Generation) and semantic search.**',
          ],
          codeBlock: '# Pull an embedding model\nollama pull nomic-embed-text  # Best for English, 137M params\n\n# Generate embeddings\ncurl http://localhost:11434/v1/embeddings \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "nomic-embed-text",\n    "input": "The quick brown fox jumps"\n  }\'\n\n# Response includes embeddings as a vector of 768 dimensions',
          codeLanguage: 'bash',
        },
        envVariables: {
          id: 'env-variables',
          title: 'What Environment Variables Control Ollama?',
          content: 'Key environment variables:',
          items: [
            '`OLLAMA_HOST` -- Listen address (default: 127.0.0.1:11434). Set to `0.0.0.0:11434` for network access.',
            '`OLLAMA_MODELS` -- Where to store models (default: `~/.ollama/models`).',
            '`OLLAMA_DEBUG` -- Set to `1` for detailed logs.',
            '`OLLAMA_GPU` -- GPU to use (default: auto-detect). Set to `cuda` or `rocm`.',
            '`OLLAMA_KEEP_ALIVE` -- How long to keep model in memory (default: 5 minutes).',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Common Mistakes With Ollama Commands',
          items: [
            '**Forgetting model tags.** `ollama pull llama3.2` pulls the largest version; `ollama pull llama3.2:3b` pulls the 3B version.',
            '**Not realizing `ollama serve` runs automatically.** On Mac and Windows, Ollama starts the API automatically when you launch the app. On Linux, you may need to start it manually.',
            '**Pulling the wrong quantization.** Always specify the exact model tag (e.g., `qwen2.5:7b-q4`) to control VRAM usage.',
            '**Expecting Ollama to work offline after pulling.** Ollama itself works offline, but models must be pulled while connected to the internet.',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'Common Questions About Ollama Commands',
          faqs: [
            {
              q: 'Where are Ollama models stored?',
              a: 'Default: `~/.ollama/models` on macOS/Linux or `%USERPROFILE%\\.ollama\\models` on Windows. Set `OLLAMA_MODELS` to change the location.',
            },
            {
              q: 'Can I move models between computers?',
              a: 'Yes. Copy the model files from `~/.ollama/models` to another computer\'s `~/.ollama/models`, then `ollama list` will recognize them.',
            },
            {
              q: 'How do I see active model memory usage?',
              a: 'Use `ollama ps` to list currently-loaded models. Models are unloaded after 5 minutes of inactivity by default.',
            },
            {
              q: 'Can I run multiple models simultaneously?',
              a: 'Yes, but they share VRAM. Running two 8B models requires 16 GB VRAM. Each additional model increases memory usage.',
            },
            {
              q: 'What is the difference between GGUF and other model formats?',
              a: 'GGUF is quantized, efficient, and runs on CPU/GPU. It is the standard for local LLMs. Other formats (safetensors, PyTorch .bin) require more VRAM and are not optimized for local inference.',
            },
            {
              q: 'How do I use Ollama models with my own application?',
              a: '`ollama serve` starts an OpenAI-compatible API on `localhost:11434`. Use any OpenAI SDK (Python, Node.js, etc.) pointing to that URL to send requests and receive responses.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- Installation guide.',
            '[Local LLM OpenAI-Compatible API](/local-llms/local-llm-openai-compatible-api) -- Use Ollama API from code.',
            '[Best Local LLM Frontends](/local-llms/best-local-llm-frontends) -- Chat UIs for Ollama.',
            '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) -- Comparison with LM Studio.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Ollama GitHub -- github.com/ollama/ollama',
            'Ollama Documentation -- github.com/ollama/ollama/blob/main/docs',
            'Ollama Model Library -- ollama.ai/library',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Ollama Command Guide: Every Command Explained (2026)',
        'description': 'Ollama commands explained 2026: pull, run, list, rm, serve, create, with examples. Complete CLI reference covers 95% of use cases.',
        'url': 'https://www.promptquorum.com/local-llms/ollama-command-guide',
        'inLanguage': 'en',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'Ollama commands' },
          { '@type': 'Thing', 'name': 'GGUF format' },
          { '@type': 'Thing', 'name': 'model quantization' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Beginner to Advanced',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'en',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Where are Ollama models stored?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Default: `~/.ollama/models` on macOS/Linux or `%USERPROFILE%\\.ollama\\models` on Windows. Set `OLLAMA_MODELS` to change the location.' }
          },
          {
            '@type': 'Question',
            'name': 'Can I move models between computers?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Copy the model files from `~/.ollama/models` to another computer\'s `~/.ollama/models`, then `ollama list` will recognize them.' }
          },
          {
            '@type': 'Question',
            'name': 'How do I see active model memory usage?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Use `ollama ps` to list currently-loaded models. Models are unloaded after 5 minutes of inactivity by default.' }
          },
          {
            '@type': 'Question',
            'name': 'Can I run multiple models simultaneously?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, but they share VRAM. Running two 8B models requires 16 GB VRAM. Each additional model increases memory usage.' }
          },
          {
            '@type': 'Question',
            'name': 'What is the difference between GGUF and other model formats?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'GGUF is quantized, efficient, and runs on CPU/GPU. It is the standard for local LLMs. Other formats (safetensors, PyTorch .bin) require more VRAM and are not optimized for local inference.' }
          },
          {
            '@type': 'Question',
            'name': 'How do I use Ollama models with my own application?',
            'acceptedAnswer': { '@type': 'Answer', 'text': '`ollama serve` starts an OpenAI-compatible API on `localhost:11434`. Use any OpenAI SDK (Python, Node.js, etc.) pointing to that URL to send requests and receive responses.' }
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Ollama Command Guide: Every Command Explained (2026)',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: '`ollama pull <model>` -- Download a model (e.g., `ollama pull llama3.2:3b`).' },
          { '@type': 'ListItem', position: 2, name: '`ollama run <model>` -- Start a chat with a model.' },
          { '@type': 'ListItem', position: 3, name: '`ollama list` -- Show all downloaded models and their sizes.' },
          { '@type': 'ListItem', position: 4, name: '`ollama rm <model>` -- Delete a downloaded model.' },
          { '@type': 'ListItem', position: 5, name: '`ollama serve` -- Start the Ollama API server (runs automatically on Mac/Windows).' },
          { '@type': 'ListItem', position: 6, name: '`ollama create <name> -f <modelfile>` -- Build a custom model from a Modelfile.' },
          { '@type': 'ListItem', position: 7, name: 'As of April 2026, these commands are stable and cover all common use cases.' },
        ],
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      theme: 'Tools & Interfaces',
      title: 'Ollama Befehls-Anleitung: Alle Befehle erklärt (2026)',
      seoTitle: 'Ollama Befehls-Referenz 2026: pull, run, serve',
      intro: 'Ollama ist ein Kommandozeilen-Werkzeug, und das Verständnis seiner Befehle macht es viel leistungsfähiger. Diese Anleitung behandelt die wesentlichen Befehle: `ollama pull`, `ollama run`, `ollama list`, `ollama rm`, `ollama serve` und erweiterte Optionen wie Modellquantisierung und benutzerdefinierte Modelfiles. Ab April 2026 decken diese Befehle 95% der realen Anwendungsfälle ab.',
      metaDescription: 'Ollama-Befehle erklärt 2026: pull, run, list, rm, serve, create mit Beispielen. Vollständige CLI-Referenz deckt 95% der Anwendungsfälle ab.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**Ollama ist ein Kommandozeilen-Werkzeug, und das Verständnis seiner Befehle macht es viel leistungsfähiger. Diese Anleitung behandelt die wesentlichen Befehle: `ollama pull`, `ollama run`, `ollama list`, `ollama rm`, `ollama serve` und erweiterte Optionen wie Modellquantisierung und benutzerdefinierte Modelfiles.**',
      audience: 'Anfänger, die ihre erste lokale LLM auf Standard-Hardware ausführen',
      readTime: '13 Min. Lesezeit',
      educationalLevel: 'Beginner to Advanced',
      primaryTerm: 'Ollama Befehle',
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Wesentliche Befehle', anchor: '#essential-commands' },
        { label: 'Modellverwaltung', anchor: '#managing-models' },
        { label: 'Ausführung und Serving', anchor: '#running-serving' },
        { label: 'Erweitert: Benutzerdefinierte Modelfiles', anchor: '#custom-modelfiles' },
        { label: 'Erweitert: Quantisierung', anchor: '#quantization' },
        { label: 'Erweitert: Einbettungsmodelle', anchor: '#embedding-models' },
        { label: 'Umgebungsvariablen', anchor: '#env-variables' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Häufige Fragen', anchor: '#common-questions' },
        { label: 'Weiterführende Ressourcen', anchor: '#related-reading' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '`ollama pull <model>` -- Modell herunterladen (z. B. `ollama pull llama3.2:3b`).',
            '`ollama run <model>` -- Chat-Sitzung mit einem Modell starten.',
            '`ollama list` -- Alle heruntergeladenen Modelle und ihre Größen anzeigen.',
            '`ollama rm <model>` -- Ein heruntergeladenes Modell löschen.',
            '`ollama serve` -- Ollama API-Server starten (läuft automatisch auf Mac/Windows).',
            '`ollama create <name> -f <modelfile>` -- Benutzerdefiniertes Modell aus Modelfile erstellen.',
            'Ab April 2026 sind diese Befehle stabil und decken alle häufigen Anwendungsfälle ab.',
          ],
        },
        essentialCommands: {
          id: 'essential-commands',
          title: 'Welche sind die wesentlichen Ollama-Befehle?',
          items: [
            '**`ollama list`** -- Heruntergeladene Modelle, Speicherplatznutzung und Änderungsdatum anzeigen.',
            '**`ollama pull <model>`** -- Modell nach Name herunterladen (z. B. `ollama pull mistral`).',
            '**`ollama run <model>`** -- Chat-Sitzung mit einem Modell starten.',
            '**`ollama rm <model>`** -- Modell löschen und Speicherplatz freigeben.',
            '**`ollama serve`** -- REST API-Server starten (läuft normalerweise automatisch).',
            '**`ollama help`** -- Alle verfügbaren Befehle anzeigen.',
          ],
        },
        managingModels: {
          id: 'managing-models',
          title: 'Wie verwalten Sie Modelle in Ollama?',
          content: 'Die Modellverwaltung in Ollama erfolgt vollständig über Befehle:',
          codeBlock: '# Alle heruntergeladenen Modelle auflisten\nollama list\n\n# Modell aus der Ollama-Bibliothek herunterladen\nollama pull llama3.2:3b       # 7-Bit-Version (~2,5 GB)\nollama pull llama3.2:3b-fp16  # Vollständige Präzision (~6,5 GB)\n\n# Spezifische Quantisierung herunterladen\nollama pull qwen2.5:7b-q4   # 4-Bit-Quantisierung\nollama pull qwen2.5:7b-q8   # 8-Bit-Quantisierung\n\n# Speicherplatznutzung anzeigen\ndu -sh ~/.ollama/models\n\n# Modell löschen\nollama rm llama3.2:3b\n\n# Aus benutzerdefinierter Registry ziehen (erweitert)\nollama pull localhost:5000/custom-model',
          codeLanguage: 'bash',
        },
        runningServing: {
          id: 'running-serving',
          title: 'Wie führen Sie Modelle aus und servieren sie?',
          content: 'Es gibt zwei Möglichkeiten, Ollama zu verwenden:',
          codeBlock: '# 1. Interaktiver Chat (CLI)\nollama run llama3.2:3b\n# Geben Sie jetzt Ihre Anfragen ein und drücken Sie die Eingabetaste\n\n# 2. API-Server starten (läuft im Hintergrund)\nollama serve\n# API lauscht auf http://localhost:11434/v1\n\n# 3. Modell über API von einem anderen Terminal aus verwenden\ncurl http://localhost:11434/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "llama3.2:3b",\n    "messages": [{"role": "user", "content": "Hallo"}]\n  }\'',
          codeLanguage: 'bash',
        },
        modelfiles: {
          id: 'custom-modelfiles',
          title: 'Wie erstellen Sie benutzerdefinierte Modelle mit Modelfiles?',
          content: [
            '**Ein Modelfile ist eine Konfigurationsdatei (wie ein Dockerfile), die ein benutzerdefiniertes Modell definiert, indem sie von einem Basis-Modell ausgeht und System-Prompts, Parameter und Gewichte hinzufügt.**',
          ],
          codeBlock: '# Erstellen Sie eine Datei mit dem Namen Modelfile\nFROM llama3.2:3b\n\n# Fügen Sie einen System-Prompt hinzu\nSYSTEM """\nSie sind ein hilfreicher Experte im Bereich maschinelles Lernen.\nErklären Sie komplexe Konzepte immer in einfachen Worten.\n"""\n\n# Parameter anpassen\nPARAMETER temperature 0.7\nPARAMETER top_p 0.9\n\n# Benutzerdefiniertes Modell erstellen\nollama create ml-expert -f Modelfile\n\n# Verwenden Sie es\nollama run ml-expert',
          codeLanguage: 'bash',
        },
        quantization: {
          id: 'quantization',
          title: 'Welche Quantisierungsoptionen unterstützt Ollama?',
          content: [
            '**Quantisierung reduziert Modellgröße und VRAM durch Verwendung von Zahlen mit niedrigerer Präzision.** Ollama unterstützt GGUF-Format mit mehreren Quantisierungen:',
          ],
          columns: ['Quantisierung', 'Größe (7B)', 'VRAM', 'Qualität', 'Geschwindigkeit'],
          rows: [
            { 'Quantisierung': 'FP16 (vollständige Präzision)', 'Größe (7B)': '14 GB', 'VRAM': '16 GB', 'Qualität': 'Beste', 'Geschwindigkeit': 'Langsamste' },
            { 'Quantisierung': 'Q8_0 (8-Bit)', 'Größe (7B)': '7 GB', 'VRAM': '8 GB', 'Qualität': 'Ausgezeichnet', 'Geschwindigkeit': 'Schnell' },
            { 'Quantisierung': 'Q6_K (6-Bit)', 'Größe (7B)': '5,5 GB', 'VRAM': '6 GB', 'Qualität': 'Sehr gut', 'Geschwindigkeit': 'Schnell' },
            { 'Quantisierung': 'Q5_K_M (5-Bit)', 'Größe (7B)': '5 GB', 'VRAM': '5,5 GB', 'Qualität': 'Gut', 'Geschwindigkeit': 'Sehr schnell' },
            { 'Quantisierung': 'Q4_K_M (4-Bit)', 'Größe (7B)': '4,7 GB', 'VRAM': '5 GB', 'Qualität': 'Gut', 'Geschwindigkeit': 'Sehr schnell' },
            { 'Quantisierung': 'Q3_K_M (3-Bit)', 'Größe (7B)': '3,3 GB', 'VRAM': '4 GB', 'Qualität': 'Annehmbar', 'Geschwindigkeit': 'Schnellste' },
          ],
        },
        embeddingModels: {
          id: 'embedding-models',
          title: 'Welche Embedding-Modelle sind mit Ollama verfügbar?',
          content: [
            '**Embedding-Modelle konvertieren Text in numerische Vektoren für Semantic Search, RAG und andere Anwendungen.** Ollama unterstützt mehrere Embedding-Modelle:',
          ],
          items: [
            '**`nomic-embed-text`** -- Kleines, schnelles Embedding-Modell (~260 MB). Gut für RAG und lokale Suche.',
            '**`mxbai-embed-large`** -- Größeres Modell mit besserer Qualität (~335 MB). Bessere Semantik-Erkennung.',
            '**Verwendung:** `ollama pull nomic-embed-text` und dann API-Anfrage mit `"model": "nomic-embed-text"`.',
          ],
        },
        envVariables: {
          id: 'env-variables',
          title: 'Welche Umgebungsvariablen können Sie setzen?',
          content: [
            '**Umgebungsvariablen steuern Ollama-Verhalten ohne Neukompilierung:**',
          ],
          items: [
            '**`OLLAMA_HOST`** -- Legen Sie die API-Adresse fest (Standard: `127.0.0.1:11434`).',
            '**`OLLAMA_MODELS`** -- Geben Sie das Modellverzeichnis an (Standard: `~/.ollama/models`).',
            '**`OLLAMA_NUM_PARALLEL`** -- Anzahl paralleler Anfragen (Standard: 1).',
            '**`OLLAMA_KEEP_ALIVE`** -- Wie lange ein Modell im Speicher bleibt (Standard: 5 Minuten).',
            '**`OLLAMA_NOPRUNE`** -- Verhindert automatisches Löschen ungenutzter Modelle.',
            '**Beispiel:** `export OLLAMA_HOST=0.0.0.0:8000 && ollama serve`',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Welche häufigen Fehler sollten Sie vermeiden?',
          items: [
            '**Falscher Modellname.** `ollama pull llama` funktioniert nicht; verwenden Sie `ollama pull llama3.2:3b` oder `ollama pull llama2:7b`.',
            '**Zu viel VRAM erforderlich.** Wählen Sie kleinere Modelle oder stärkere Quantisierung. Q4_K_M ist oft der beste Kompromiss.',
            '**Modelle nicht mit `serve` aktualisiert.** Wenn Sie ein Modell mit `ollama pull` ändern, müssen Sie `ollama serve` neustarten.',
            '**Vergessen, `ollama serve` zu starten.** Die API läuft nicht, wenn Sie es nicht explizit starten (auf Mac/Windows automatisch, auf Linux nicht).',
            '**Modelfile-Syntax-Fehler.** Überprüfen Sie die Großschreibung: `FROM`, `SYSTEM`, `PARAMETER` müssen Großbuchstaben sein.',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'Häufige Fragen zu Ollama-Befehlen',
          faqs: [
            {
              q: 'Wie aktualisiere ich ein heruntergeladenes Modell?',
              a: 'Führen Sie `ollama pull <model>` erneut aus. Ollama aktualisiert das Modell, wenn eine neue Version verfügbar ist. Sie müssen das alte nicht manuell löschen.',
            },
            {
              q: 'Wie ändere ich den Standard-Chat-Prompt?',
              a: 'Verwenden Sie ein Modelfile mit SYSTEM-Befehl. Erstellen Sie ein Modelfile mit Ihrem benutzerdefinierten Prompt, dann `ollama create <name> -f Modelfile`.',
            },
            {
              q: 'Kann ich Ollama-Modelle teilen?',
              a: 'Ja, Sie können benutzerdefinierte Modelle in ein Registry pushen: `ollama push <registry>/<model>`. Andere können es mit `ollama pull` abrufen.',
            },
            {
              q: 'Welches Modell sollte ich für Anfänger wählen?',
              a: '`ollama pull llama3.2:3b` ist eine gute Wahl: klein (~2 GB), schnell und vernünftig intelligent. Für bessere Qualität versuchen Sie `mistral:7b` (~4,5 GB).',
            },
            {
              q: 'Wie reduziere ich die Speicherplatznutzung?',
              a: 'Nutzen Sie Quantisierung: `ollama pull llama3.2:3b-q4` statt FP16. Q4_K_M oder Q5_K_M bieten beste Balance.',
            },
            {
              q: 'Kann ich mehrere Modelle gleichzeitig laufen lassen?',
              a: 'Nur wenn Sie mehrere Instanzen mit verschiedenen Ports starten. Standard-Setup lädt ein Modell im Speicher. Verwenden Sie `OLLAMA_NUM_PARALLEL` für Anfrage-Pipelining.',
            },
            {
              q: 'Muss ich bei der Verwendung von Ollama die DSGVO beachten?',
              a: 'Ja—Ollama speichert lokal, also müssen Sie sicherstellen, dass personenbezogene Daten gemäß DSGVO Artikel 28 verarbeitet werden. Local Inference erfüllt Datenschutz-Anforderungen, aber Sie benötigen immer noch Zugriffskontrolle und Logging.',
            },
            {
              q: 'Ist Ollama für deutschen Mittelstand geeignet?',
              a: 'Ja—Mittelständler können Ollama mit `ollama create` für branchenspezifische Modelle verwenden. Kombinieren Sie mit BSI-C5-Standards für regulatorische Compliance. Lokale Modelle reduzieren die Abhängigkeit von Cloud-Anbietern und Compliance-Kosten.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Ressourcen',
          items: [
            '[Ollama installieren: Schritt-für-Schritt-Anleitung](/local-llms/how-to-install-ollama?lang=de) -- Erste Schritte.',
            '[Ollama vs. LM Studio vs. Jan: Vergleich](/local-llms/ollama-vs-lm-studio?lang=de) -- Wählen Sie das richtige Werkzeug.',
            '[Local LLM finetunen mit Ollama](/local-llms/fine-tune-local-llm-ollama?lang=de) -- Anpassung für Ihren Anwendungsfall.',
            '[Ollama API-Referenz](/local-llms/ollama-api-reference?lang=de) -- Programmgesteuerte Verwendung.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            'Offizielle Ollama-Dokumentation -- ollama.com',
            'Ollama GitHub Repository -- github.com/ollama/ollama',
            'GGUF Modellformat -- github.com/ggerganov/ggml',
            'Ollama Modelfile-Spezifikation -- ollama.com/docs/modelfile',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Ollama Befehls-Anleitung: Alle Befehle erklärt (2026)',
        'description': 'Ollama-Befehle erklärt 2026: pull, run, list, rm, serve, create mit Beispielen. Vollständige CLI-Referenz deckt 95% der Anwendungsfälle ab.',
        'url': 'https://www.promptquorum.com/local-llms/ollama-command-guide?lang=de',
        'inLanguage': 'de',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/about' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Beginner to Advanced',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'de',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Wie aktualisiere ich ein heruntergeladenes Modell?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Führen Sie `ollama pull <model>` erneut aus. Ollama aktualisiert das Modell, wenn eine neue Version verfügbar ist. Sie müssen das alte nicht manuell löschen.' } },
          { '@type': 'Question', 'name': 'Wie ändere ich den Standard-Chat-Prompt?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Verwenden Sie ein Modelfile mit SYSTEM-Befehl. Erstellen Sie ein Modelfile mit Ihrem benutzerdefinierten Prompt, dann `ollama create <name> -f Modelfile`.' } },
          { '@type': 'Question', 'name': 'Kann ich Ollama-Modelle teilen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, Sie können benutzerdefinierte Modelle in ein Registry pushen: `ollama push <registry>/<model>`. Andere können es mit `ollama pull` abrufen.' } },
          { '@type': 'Question', 'name': 'Welches Modell sollte ich für Anfänger wählen?', 'acceptedAnswer': { '@type': 'Answer', 'text': '`ollama pull llama3.2:3b` ist eine gute Wahl: klein (~2 GB), schnell und vernünftig intelligent. Für bessere Qualität versuchen Sie `mistral:7b` (~4,5 GB).' } },
          { '@type': 'Question', 'name': 'Wie reduziere ich die Speicherplatznutzung?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Nutzen Sie Quantisierung: `ollama pull llama3.2:3b-q4` statt FP16. Q4_K_M oder Q5_K_M bieten beste Balance.' } },
          { '@type': 'Question', 'name': 'Kann ich mehrere Modelle gleichzeitig laufen lassen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Nur wenn Sie mehrere Instanzen mit verschiedenen Ports starten. Standard-Setup lädt ein Modell im Speicher. Verwenden Sie `OLLAMA_NUM_PARALLEL` für Anfrage-Pipelining.' } },
          { '@type': 'Question', 'name': 'Muss ich bei der Verwendung von Ollama die DSGVO beachten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja—Ollama speichert lokal, also müssen Sie sicherstellen, dass personenbezogene Daten gemäß DSGVO Artikel 28 verarbeitet werden. Local Inference erfüllt Datenschutz-Anforderungen, aber Sie benötigen immer noch Zugriffskontrolle und Logging.' } },
          { '@type': 'Question', 'name': 'Ist Ollama für deutschen Mittelstand geeignet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja—Mittelständler können Ollama mit `ollama create` für branchenspezifische Modelle verwenden. Kombinieren Sie mit BSI-C5-Standards für regulatorische Compliance. Lokale Modelle reduzieren die Abhängigkeit von Cloud-Anbietern und Compliance-Kosten.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Ollama Befehle',
        'inLanguage': 'de',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': '`ollama pull <model>` -- Modell herunterladen (z. B. `ollama pull llama3.2:3b`).' },
          { '@type': 'ListItem', 'position': 2, 'name': '`ollama run <model>` -- Chat-Sitzung mit einem Modell starten.' },
          { '@type': 'ListItem', 'position': 3, 'name': '`ollama list` -- Alle heruntergeladenen Modelle und ihre Größen anzeigen.' },
          { '@type': 'ListItem', 'position': 4, 'name': '`ollama rm <model>` -- Ein heruntergeladenes Modell löschen.' },
          { '@type': 'ListItem', 'position': 5, 'name': '`ollama serve` -- Ollama API-Server starten (läuft automatisch auf Mac/Windows).' },
          { '@type': 'ListItem', 'position': 6, 'name': '`ollama create <name> -f <modelfile>` -- Benutzerdefiniertes Modell aus Modelfile erstellen.' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Ab April 2026 sind diese Befehle stabil und decken alle häufigen Anwendungsfälle ab.' },
        ],
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Tools & Interfaces',
      title: 'Guide des commandes Ollama: Toutes les commandes expliquées (2026)',
      seoTitle: 'Référence des commandes Ollama 2026: pull, run, serve',
      intro: 'Ollama est un outil en ligne de commande, et comprendre ses commandes le rend beaucoup plus puissant. Ce guide couvre les commandes essentielles: `ollama pull`, `ollama run`, `ollama list`, `ollama rm`, `ollama serve` et options avancées comme la quantification de modèle et les Modelfiles personnalisés. À partir d\'avril 2026, ces commandes couvrent 95% des cas d\'usage réels.',
      metaDescription: 'Commandes Ollama expliquées 2026: pull, run, list, rm, serve, create avec exemples. Référence CLI complète couvre 95% des cas d\'usage.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**Ollama est un outil en ligne de commande, et comprendre ses commandes le rend beaucoup plus puissant. Ce guide couvre les commandes essentielles: `ollama pull`, `ollama run`, `ollama list`, `ollama rm`, `ollama serve` et options avancées comme la quantification de modèle et les Modelfiles personnalisés.**',
      audience: 'Débutants exécutant leur première LLM locale sur du matériel grand public',
      readTime: '11 min de lecture',
      educationalLevel: 'Beginner to Advanced',
      primaryTerm: 'Commandes Ollama',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Commandes essentielles', anchor: '#essential-commands' },
        { label: 'Gestion des modèles', anchor: '#managing-models' },
        { label: 'Exécution et serveur', anchor: '#running-serving' },
        { label: 'Avancé: Modelfiles personnalisés', anchor: '#custom-modelfiles' },
        { label: 'Avancé: Quantification', anchor: '#quantization' },
        { label: 'Avancé: Modèles d\'embedding', anchor: '#embedding-models' },
        { label: 'Variables d\'environnement', anchor: '#env-variables' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Questions courantes', anchor: '#common-questions' },
        { label: 'Lectures connexes', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '`ollama pull <model>` -- Télécharger un modèle (p. ex. `ollama pull llama3.2:3b`).',
            '`ollama run <model>` -- Démarrer une conversation avec un modèle.',
            '`ollama list` -- Afficher tous les modèles téléchargés et leurs tailles.',
            '`ollama rm <model>` -- Supprimer un modèle téléchargé.',
            '`ollama serve` -- Démarrer le serveur API Ollama (s\'exécute automatiquement sur Mac/Windows).',
            '`ollama create <name> -f <modelfile>` -- Créer un modèle personnalisé à partir d\'un Modelfile.',
            'À partir d\'avril 2026, ces commandes sont stables et couvrent tous les cas d\'usage courants.',
          ],
        },
        essentialCommands: {
          id: 'essential-commands',
          title: 'Quelles sont les commandes Ollama essentielles?',
          items: [
            '**`ollama list`** -- Afficher les modèles téléchargés, l\'utilisation du disque et la date de modification.',
            '**`ollama pull <model>`** -- Télécharger un modèle par nom (p. ex. `ollama pull mistral`).',
            '**`ollama run <model>`** -- Démarrer une session de conversation avec un modèle.',
            '**`ollama rm <model>`** -- Supprimer un modèle et libérer l\'espace disque.',
            '**`ollama serve`** -- Démarrer le serveur API REST (s\'exécute généralement automatiquement).',
            '**`ollama help`** -- Afficher toutes les commandes disponibles.',
          ],
        },
        managingModels: {
          id: 'managing-models',
          title: 'Comment gérez-vous les modèles dans Ollama?',
          content: 'La gestion des modèles dans Ollama est entièrement basée sur les commandes:',
          codeBlock: '# Lister tous les modèles téléchargés\nollama list\n\n# Télécharger un modèle depuis la bibliothèque Ollama\nollama pull llama3.2:3b       # Version 7 bits (~2.5 GB)\nollama pull llama3.2:3b-fp16  # Précision complète (~6.5 GB)\n\n# Télécharger une quantification spécifique\nollama pull qwen2.5:7b-q4   # Quantification 4 bits\nollama pull qwen2.5:7b-q8   # Quantification 8 bits\n\n# Voir l\'utilisation du disque\ndu -sh ~/.ollama/models\n\n# Supprimer un modèle\nollama rm llama3.2:3b\n\n# Tirer depuis un registre personnalisé (avancé)\nollama pull localhost:5000/custom-model',
          codeLanguage: 'bash',
        },
        runningServing: {
          id: 'running-serving',
          title: 'Comment exécutez-vous et servez-vous des modèles?',
          content: 'Il existe deux façons d\'utiliser Ollama:',
          codeBlock: '# 1. Chat interactif (CLI)\nollama run llama3.2:3b\n# Entrez maintenant vos invites et appuyez sur Entrée\n\n# 2. Démarrer le serveur API (s\'exécute en arrière-plan)\nollama serve\n# L\'API écoute sur http://localhost:11434/v1\n\n# 3. Utiliser le modèle via l\'API à partir d\'un autre terminal\ncurl http://localhost:11434/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "llama3.2:3b",\n    "messages": [{"role": "user", "content": "Bonjour"}]\n  }\'',
          codeLanguage: 'bash',
        },
        modelfiles: {
          id: 'custom-modelfiles',
          title: 'Comment créez-vous des modèles personnalisés avec les Modelfiles?',
          content: [
            '**Un Modelfile est un fichier de configuration (comme un Dockerfile) qui définit un modèle personnalisé en partant d\'un modèle de base et en ajoutant des invites système, des paramètres et des poids.**',
          ],
          codeBlock: '# Créer un fichier nommé Modelfile\nFROM llama3.2:3b\n\n# Ajouter une invite système\nSYSTEM """\nVous êtes un expert utile en apprentissage automatique.\nExpliquez toujours les concepts complexes en termes simples.\n"""\n\n# Ajuster les paramètres\nPARAMETER temperature 0.7\nPARAMETER top_p 0.9\n\n# Construire le modèle personnalisé\nollama create ml-expert -f Modelfile\n\n# L\'utiliser\nollama run ml-expert',
          codeLanguage: 'bash',
        },
        quantization: {
          id: 'quantization',
          title: 'Quelles options de quantification Ollama supporte-t-il?',
          content: [
            '**La quantification réduit la taille du modèle et la VRAM en utilisant des nombres de précision inférieure.** Ollama supporte le format GGUF avec plusieurs quantifications:',
          ],
          columns: ['Quantification', 'Taille (7B)', 'VRAM', 'Qualité', 'Vitesse'],
          rows: [
            { 'Quantification': 'FP16 (précision complète)', 'Taille (7B)': '14 GB', 'VRAM': '16 GB', 'Qualité': 'Meilleure', 'Vitesse': 'Plus lente' },
            { 'Quantification': 'Q8_0 (8 bits)', 'Taille (7B)': '7 GB', 'VRAM': '8 GB', 'Qualité': 'Excellente', 'Vitesse': 'Rapide' },
            { 'Quantification': 'Q6_K (6 bits)', 'Taille (7B)': '5.5 GB', 'VRAM': '6 GB', 'Qualité': 'Très bonne', 'Vitesse': 'Rapide' },
            { 'Quantification': 'Q5_K_M (5 bits)', 'Taille (7B)': '5 GB', 'VRAM': '5.5 GB', 'Qualité': 'Bonne', 'Vitesse': 'Très rapide' },
            { 'Quantification': 'Q4_K_M (4 bits)', 'Taille (7B)': '4.7 GB', 'VRAM': '5 GB', 'Qualité': 'Bonne', 'Vitesse': 'Très rapide' },
            { 'Quantification': 'Q3_K_M (3 bits)', 'Taille (7B)': '3.3 GB', 'VRAM': '4 GB', 'Qualité': 'Acceptable', 'Vitesse': 'Plus rapide' },
          ],
        },
        embeddingModels: {
          id: 'embedding-models',
          title: 'Quels modèles d\'embedding sont disponibles avec Ollama?',
          content: [
            '**Les modèles d\'embedding convertissent le texte en vecteurs numériques pour la recherche sémantique, RAG et autres applications.** Ollama supporte plusieurs modèles d\'embedding:',
          ],
          items: [
            '**`nomic-embed-text`** -- Petit modèle d\'embedding rapide (~260 MB). Bon pour RAG et recherche locale.',
            '**`mxbai-embed-large`** -- Modèle plus large avec meilleure qualité (~335 MB). Meilleure détection sémantique.',
            '**Utilisation:** `ollama pull nomic-embed-text` puis demande API avec `"model": "nomic-embed-text"`.',
          ],
        },
        envVariables: {
          id: 'env-variables',
          title: 'Quelles variables d\'environnement pouvez-vous définir?',
          content: [
            '**Les variables d\'environnement contrôlent le comportement d\'Ollama sans recompilation:**',
          ],
          items: [
            '**`OLLAMA_HOST`** -- Définissez l\'adresse API (par défaut: `127.0.0.1:11434`).',
            '**`OLLAMA_MODELS`** -- Spécifiez le répertoire des modèles (par défaut: `~/.ollama/models`).',
            '**`OLLAMA_NUM_PARALLEL`** -- Nombre de requêtes parallèles (par défaut: 1).',
            '**`OLLAMA_KEEP_ALIVE`** -- Durée pendant laquelle un modèle reste en mémoire (par défaut: 5 minutes).',
            '**`OLLAMA_NOPRUNE`** -- Empêche la suppression automatique des modèles inutilisés.',
            '**Exemple:** `export OLLAMA_HOST=0.0.0.0:8000 && ollama serve`',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Quelles erreurs courantes devez-vous éviter?',
          items: [
            '**Mauvais nom de modèle.** `ollama pull llama` ne fonctionne pas; utilisez `ollama pull llama3.2:3b` ou `ollama pull llama2:7b`.',
            '**Trop de VRAM requis.** Choisissez des modèles plus petits ou une quantification plus forte. Q4_K_M est souvent le meilleur compromis.',
            '**Les modèles ne sont pas mis à jour avec `serve`.** Si vous modifiez un modèle avec `ollama pull`, vous devez redémarrer `ollama serve`.',
            '**Oublier de démarrer `ollama serve`.** L\'API ne s\'exécute pas si vous ne la démarrez pas explicitement (automatique sur Mac/Windows, pas sur Linux).',
            '**Erreurs de syntaxe dans le Modelfile.** Vérifiez la casse: `FROM`, `SYSTEM`, `PARAMETER` doivent être en majuscules.',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'Questions courantes sur les commandes Ollama',
          faqs: [
            {
              q: 'Comment mettre à jour un modèle téléchargé?',
              a: 'Exécutez `ollama pull <model>` à nouveau. Ollama met à jour le modèle s\'il existe une nouvelle version. Vous n\'avez pas besoin de supprimer l\'ancien manuellement.',
            },
            {
              q: 'Comment modifier l\'invocation par défaut du chat?',
              a: 'Utilisez un Modelfile avec la commande SYSTEM. Créez un Modelfile avec votre invocation personnalisée, puis `ollama create <name> -f Modelfile`.',
            },
            {
              q: 'Puis-je partager des modèles Ollama?',
              a: 'Oui, vous pouvez envoyer des modèles personnalisés vers un registre: `ollama push <registry>/<model>`. D\'autres peuvent les récupérer avec `ollama pull`.',
            },
            {
              q: 'Quel modèle devrais-je choisir pour débuter?',
              a: '`ollama pull llama3.2:3b` est un bon choix: petit (~2 GB), rapide et raisonnablement intelligent. Pour une meilleure qualité, essayez `mistral:7b` (~4.5 GB).',
            },
            {
              q: 'Comment réduire l\'utilisation de l\'espace disque?',
              a: 'Utilisez la quantification: `ollama pull llama3.2:3b-q4` au lieu de FP16. Q4_K_M ou Q5_K_M offrent le meilleur équilibre.',
            },
            {
              q: 'Puis-je exécuter plusieurs modèles simultanément?',
              a: 'Seulement si vous démarrez plusieurs instances avec différents ports. La configuration standard charge un modèle en mémoire. Utilisez `OLLAMA_NUM_PARALLEL` pour le pipeline de requêtes.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures connexes',
          items: [
            '[Guide d\'installation Ollama: Étape par étape](/local-llms/how-to-install-ollama?lang=fr) -- Premiers pas.',
            '[Ollama vs LM Studio vs Jan: Comparaison](/local-llms/ollama-vs-lm-studio?lang=fr) -- Choisissez le bon outil.',
            '[Fine-tuner une LLM locale avec Ollama](/local-llms/fine-tune-local-llm-ollama?lang=fr) -- Adaptez à votre cas d\'usage.',
            '[Référence API Ollama](/local-llms/ollama-api-reference?lang=fr) -- Utilisation programmatique.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Documentation officielle d\'Ollama -- ollama.com',
            'Dépôt GitHub Ollama -- github.com/ollama/ollama',
            'Format de modèle GGUF -- github.com/ggerganov/ggml',
            'Spécification Modelfile d\'Ollama -- ollama.com/docs/modelfile',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Guide des commandes Ollama: Toutes les commandes expliquées (2026)',
        'description': 'Commandes Ollama expliquées 2026: pull, run, list, rm, serve, create avec exemples. Référence CLI complète couvre 95% des cas d\'usage.',
        'url': 'https://www.promptquorum.com/local-llms/ollama-command-guide?lang=fr',
        'inLanguage': 'fr',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/about' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Beginner to Advanced',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'fr',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Comment mettre à jour un modèle téléchargé?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Exécutez `ollama pull <model>` à nouveau. Ollama met à jour le modèle s\'il existe une nouvelle version. Vous n\'avez pas besoin de supprimer l\'ancien manuellement.' } },
          { '@type': 'Question', 'name': 'Comment modifier l\'invocation par défaut du chat?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Utilisez un Modelfile avec la commande SYSTEM. Créez un Modelfile avec votre invocation personnalisée, puis `ollama create <name> -f Modelfile`.' } },
          { '@type': 'Question', 'name': 'Puis-je partager des modèles Ollama?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, vous pouvez envoyer des modèles personnalisés vers un registre: `ollama push <registry>/<model>`. D\'autres peuvent les récupérer avec `ollama pull`.' } },
          { '@type': 'Question', 'name': 'Quel modèle devrais-je choisir pour débuter?', 'acceptedAnswer': { '@type': 'Answer', 'text': '`ollama pull llama3.2:3b` est un bon choix: petit (~2 GB), rapide et raisonnablement intelligent. Pour une meilleure qualité, essayez `mistral:7b` (~4.5 GB).' } },
          { '@type': 'Question', 'name': 'Comment réduire l\'utilisation de l\'espace disque?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Utilisez la quantification: `ollama pull llama3.2:3b-q4` au lieu de FP16. Q4_K_M ou Q5_K_M offrent le meilleur équilibre.' } },
          { '@type': 'Question', 'name': 'Puis-je exécuter plusieurs modèles simultanément?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Seulement si vous démarrez plusieurs instances avec différents ports. La configuration standard charge un modèle en mémoire. Utilisez `OLLAMA_NUM_PARALLEL` pour le pipeline de requêtes.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Commandes Ollama',
        'inLanguage': 'fr',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': '`ollama pull <model>` -- Télécharger un modèle (p. ex. `ollama pull llama3.2:3b`).' },
          { '@type': 'ListItem', 'position': 2, 'name': '`ollama run <model>` -- Démarrer une conversation avec un modèle.' },
          { '@type': 'ListItem', 'position': 3, 'name': '`ollama list` -- Afficher tous les modèles téléchargés et leurs tailles.' },
          { '@type': 'ListItem', 'position': 4, 'name': '`ollama rm <model>` -- Supprimer un modèle téléchargé.' },
          { '@type': 'ListItem', 'position': 5, 'name': '`ollama serve` -- Démarrer le serveur API Ollama (s\'exécute automatiquement sur Mac/Windows).' },
          { '@type': 'ListItem', 'position': 6, 'name': '`ollama create <name> -f <modelfile>` -- Créer un modèle personnalisé à partir d\'un Modelfile.' },
          { '@type': 'ListItem', 'position': 7, 'name': 'À partir d\'avril 2026, ces commandes sont stables et couvrent tous les cas d\'usage courants.' },
        ],
      },
    },
  };
