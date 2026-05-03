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
  };
