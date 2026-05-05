// Auto-generated from src/lib/local-llms/content.ts
// Slug: run-first-local-llm
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'Run Your First Local LLM in 10 Minutes: Install to First Response',
      seoTitle: 'Run Your First Local LLM in 10 Minutes (Step-by-Step)',
      intro: 'Running your first local LLM takes under 10 minutes with Ollama. Install Ollama, run one command to pull a model, and start chatting in your terminal -- no API key, no account, and no internet connection after the initial download. As of April 2026, the fastest beginner model is Llama 3.2 3B at 25-45 tokens/sec on a modern laptop CPU.',
      metaDescription: 'Run your first local LLM in under 10 minutes with Ollama: install, pull a 3B model, and get a response -- no API key or internet needed after download.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Running your first local LLM takes under 10 minutes with Ollama. Install Ollama, run one command to pull a model, and start chatting in your terminal -- no API key, no account, and no internet connection after the initial download.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '7 min read',
      heroComponent: 'LLMImageSelector',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Step 1: Install Ollama', anchor: '#step-1-install-ollama' },
        { label: 'Step 2: Choose Your First Model', anchor: '#step-2-choose-your-first-model' },
        { label: 'Step 3: Pull the Model', anchor: '#step-3-pull-the-model' },
        { label: 'Step 4: Run and Chat', anchor: '#step-4-run-and-chat' },
        { label: 'What to Expect: Speed and Quality', anchor: '#what-to-expect' },
        { label: 'Beyond the Terminal', anchor: '#beyond-the-terminal' },
        { label: 'Regional Context', anchor: '#regional-context' },
        { label: 'Common Questions', anchor: '#faq' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'The fastest path: install Ollama → run `ollama run llama3.2` → chat in your terminal. Total time: under 5 minutes on a fast connection.',
            'For 8 GB RAM machines: start with `llama3.2:3b` (2 GB download) or `phi4-mini` (2.3 GB). Both run on any modern laptop.',
            'Expect 15-40 tokens/sec on CPU, 60-120 tokens/sec on a mid-range GPU or Apple Silicon.',
            'First responses may feel slower than cloud APIs -- local models trade speed for privacy and zero cost.',
            'After the initial model download, everything runs offline. No internet needed for subsequent sessions.',
          ],
        },
        step1: {
          title: 'Step 1: Install Ollama',
          content: 'Ollama is the fastest way to run a local LLM. Install it with one command or a 2-minute download:',
          codeBlock: '# macOS (Homebrew)\nbrew install ollama\n\n# Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Windows: download installer from ollama.com/download',
          codeLanguage: 'bash',
        },
        step1Detail: {
          title: 'Verify Ollama Is Running',
          content: 'After installation, confirm Ollama is active:',
          codeBlock: 'curl http://localhost:11434\n# Expected output: Ollama is running',
          codeLanguage: 'bash',
        },
        step2: {
          title: 'Step 2: Choose Your First Model',
          content: 'Pick a model based on your available RAM. When in doubt, start with `llama3.2:3b` -- it runs on any machine with 4 GB of RAM and produces useful output:',
          rows: [
            { 'Your RAM': '4 GB', 'Recommended Model': 'llama3.2:1b', 'Download Size': '~1.3 GB', 'Why': 'Smallest usable Llama model' },
            { 'Your RAM': '8 GB', 'Recommended Model': 'Llama 3.2 3B', 'Download Size': '~2 GB', 'Why': 'Best quality/size ratio for beginners' },
            { 'Your RAM': '8-16 GB', 'Recommended Model': 'Llama 3.1 8B', 'Download Size': '~4.7 GB', 'Why': 'Strong general-purpose model' },
            { 'Your RAM': '16+ GB', 'Recommended Model': 'mistral:7b or qwen2.5:7b', 'Download Size': '~4-5 GB', 'Why': 'Competitive quality, fast inference' },
          ],
          columns: ['Your RAM', 'Recommended Model', 'Download Size', 'Why'],
        },
        step3: {
          title: 'Step 3: Pull the Model',
          content: 'Download the model with `ollama pull`. The model is saved to `~/.ollama/models` and only needs to be downloaded once:',
          codeBlock: 'ollama pull llama3.2\n\n# Or pull a specific size variant\nollama pull llama3.2:3b\nollama pull llama3.1:8b',
          codeLanguage: 'bash',
        },
        step3Progress: {
          title: 'What the Download Looks Like?',
          content: 'Ollama shows download progress in the terminal. A `llama3.2:3b` model takes 2-5 minutes on a typical broadband connection. The model is stored compressed -- the 2 GB download expands to approximately 2.3 GB on disk.',
          codeBlock: 'pulling manifest\npulling 966de95ca8dc... 100% ▕████████████████▏ 1.9 GB\npulling 9f436a92eb8b... 100% ▕████████████████▏   42 B\nverifying sha256 digest\nwriting manifest\nsuccess',
          codeLanguage: 'text',
        },
        step4: {
          id: 'step-4-run-and-chat',
          title: 'Step 4: Run the Model and Send Your First Prompt',
          content: 'Start an interactive chat session:',
          codeBlock: 'ollama run llama3.2\n\n# Ollama loads the model and shows a prompt:\n>>> Send a message (/? for help)',
          codeLanguage: 'bash',
        },
        step4Chat: {
          title: 'Your First Conversation',
          content: 'Type a message and press Enter. The model streams its response token by token:',
          codeBlock: '>>> What are local LLMs?\n\nLocal LLMs (large language models) are AI models that run entirely\non your own hardware -- your laptop, desktop, or server. Unlike cloud\nservices such as ChatGPT or Claude, local LLMs process everything\nlocally with no data sent to external servers...',
          codeLanguage: 'text',
        },
        whatToExpect: {
          id: 'what-to-expect',
          title: 'What to Expect: Speed, Quality, and Limitations',
          content: [
            '**Speed** varies by hardware. On a 2023 laptop (no GPU): expect 15-25 tokens/sec for a 3B model and 8-15 tokens/sec for an 8B model. On Apple M3 Pro: 50-80 tokens/sec for 8B. On NVIDIA RTX 4070 Ti: 90-130 tokens/sec for 8B.',
            '**Quality** from `llama3.2:3b` is noticeably lower than GPT-4o or Claude Opus 4.7 on complex tasks. For summarization, simple Q&A, and code explanation, the output is useful. For multi-step reasoning or long-form writing, upgrade to an 8B or 13B model.',
            '**Context window**: `llama3.2:3b` supports 128K tokens by default in Ollama. In practice, quality degrades after ~16K tokens in a single conversation.',
            '**First response delay**: the first response after `ollama run` includes model loading time (5-30 seconds). Subsequent responses in the same session are faster.',
          ],
        },
        beyondTerminal: {
          id: 'beyond-the-terminal',
          title: 'How Do You Use Your Local LLM Beyond the Terminal?',
          content: 'The Ollama terminal chat is useful for testing, but most real use cases need a better interface:',
          items: [
            '**Open WebUI**: a full-featured web UI for Ollama. Run it with Docker: `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`. Access at http://localhost:3000.',
            '**LM Studio**: if you prefer a desktop GUI, [How to Install LM Studio](/local-llms/how-to-install-lm-studio) covers the full setup. LM Studio\'s built-in chat is polished and supports conversation history.',
            '**API integration**: Ollama\'s API at `localhost:11434` is compatible with the OpenAI SDK. Any application that accepts an OpenAI base URL can connect to your local model.',
            '**VS Code / Cursor**: extensions like Continue.dev connect to Ollama and provide local AI coding assistance directly in your editor.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Running Your First Local LLM: Regional Context',
          content: [
            '**EU / GDPR**: Running a local LLM with Ollama means no prompt data, context, or output leaves your machine -- GDPR Article 46 transfer mechanisms do not apply. For EU professionals handling personal data, this is the privacy-preserving alternative to cloud AI APIs. Your first local model (llama3.2:3b) uses 2 GB of disk, generates zero external API calls, and satisfies German BSI data minimization guidelines by design.',
            '**Japan (METI)**: METI AI Governance Guidelines require documenting where AI inference occurs. Your first Ollama setup creates a complete and auditable local environment: model files stored at ~/.ollama/models with version-specific filenames, no external API dependencies, and inference verifiable via `ollama ps`. Japanese professionals running Llama or Qwen2.5 locally can document the exact model version and hardware for METI compliance purposes.',
            '**China**: For Chinese-language workflows, replace llama3.2:3b with qwen2.5:3b as your first model: `ollama pull qwen2.5:3b`. Qwen2.5 processes Chinese text 30-40% more token-efficiently than Llama, producing better results at the same hardware tier. The ollama pull and run commands are identical.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Common Questions When Running Your First Local LLM',
          faqs: [
            {
              q: 'The model response is very slow -- is this normal?',
              a: 'On CPU-only hardware, 8-20 tokens/sec is normal for a 7B model. Each token is roughly 0.75 words. At 10 tokens/sec, a 100-word response takes about 13 seconds. To speed up inference, use a smaller model (3B instead of 8B), enable GPU offloading if you have a compatible GPU, or use quantization level Q4_K_M which is the fastest common setting.',
            },
            {
              q: 'Can I run two models at the same time?',
              a: 'Ollama can keep multiple models loaded simultaneously if you have enough RAM. By default, Ollama unloads a model after 5 minutes of inactivity. You can change this with the OLLAMA_KEEP_ALIVE environment variable. Running two 7B models simultaneously requires ~16 GB of RAM.',
            },
            {
              q: 'How do I stop Ollama from running in the background?',
              a: 'On macOS: click the llama icon in the menu bar and select Quit. On Linux: run `systemctl stop ollama`. On Windows: right-click the system tray icon and select Quit. To prevent Ollama from starting on login, remove it from your startup items.',
            },
            {
              q: 'What is the easiest way to run a local LLM for the first time?',
              a: 'Install Ollama (ollama.com), run `ollama pull llama3.2:3b`, then run `ollama run llama3.2:3b`. That is all. Three commands, 2-5 minutes, and you have a working AI model on your machine with no internet needed after the initial download.',
            },
            {
              q: 'How do I know if my local LLM is working correctly?',
              a: 'Run `ollama ps` in the terminal. If the model is running, it will show in the list with its name, size, and memory usage. Send it a simple prompt like "What is 2+2?" -- if it responds with "4", the model is working correctly.',
            },
            {
              q: 'Does my computer need a GPU to run a local LLM?',
              a: 'No. Local LLMs run on CPU. A GPU makes inference 5-10× faster, but CPU-only is fine for learning and for many real use cases. Modern laptops with Apple M1/M2, AMD Ryzen, or Intel 12th gen CPUs can run 3B-7B models at reasonable speeds (10-30 tokens/sec).',
            },
            {
              q: 'How much disk space does a local LLM take?',
              a: '`llama3.2:1b` is 1.3 GB, `llama3.2:3b` is 2 GB, `llama3.1:8b` is 4.7 GB. These are the compressed sizes as stored by Ollama. After loading into RAM for inference, the sizes differ (see [How Much VRAM for Local LLM](/local-llms/how-much-vram-local-llm) for details).',
            },
            {
              q: 'Can I use my local LLM without an internet connection?',
              a: 'Yes, completely. Download the model once with Ollama (requires internet), then run locally forever with zero internet. Perfect for private networks, airplanes, or completely offline environments.',
            },
            {
              q: 'How is a local LLM different from ChatGPT?',
              a: 'ChatGPT runs on Anthropic\'s servers. Local LLMs run on your machine. Local = zero data leave your device, full privacy, no ongoing API costs. ChatGPT = better quality on complex tasks, requires internet and a paid subscription. Both have trade-offs.',
            },
            {
              q: 'What is the best first model to try with Ollama?',
              a: '`ollama pull llama3.2:3b` -- it is 2 GB, runs on any modern laptop, produces competent answers, and is the starting point recommended by Ollama. After trying it, see [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models) for alternatives based on your hardware.',
            },
          ],
        },
        nextSteps: {
          title: 'Next Steps After Your First Run',
          content: 'Now that you have a working local LLM, explore what it can do. To understand which models perform best for your hardware, see [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models). For laptop-specific performance tips, see [How to Run Local LLMs on a Laptop](/local-llms/local-llm-on-laptop). For privacy and security best practices, see the [Local LLM Security & Privacy Checklist](/local-llms/local-llm-security-privacy-checklist).',
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[**Ollama Model Library**](https://ollama.com/library) -- Official list of downloadable models and their specifications',
            '[**Ollama GitHub Repository**](https://github.com/ollama/ollama) -- Open-source code, documentation, and issue tracking',
            '[**Meta Llama 3.2 Model Card**](https://llama.meta.com/) -- Official specifications, training data, and performance benchmarks',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Common Mistakes After Your First Run',
          items: [
            'Confusing token count with speed -- a 7B model generating 100 tokens at 20 tokens/sec takes 5 seconds, not instant.',
            'Running inference while the system is busy with other tasks, reducing effective tokens/sec significantly.',
            'Not checking context window limits -- most beginner models support 2K-8K tokens, not the 100K+ of frontier models.',
            'Expecting instant responses on first run -- the first response includes model loading time (5-30 seconds). Subsequent responses in the same session are 2-5× faster.',
            'Using the wrong model tag -- `llama3.1:8b-text` is base text-completion mode and will loop/repeat endlessly. Use `-instruct` tags like `llama3.1:8b-instruct` for chat.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- Installation and setup',
            '[How to Install LM Studio](/local-llms/how-to-install-lm-studio) -- GUI alternative',
            '[Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models) -- Model recommendations for your hardware',
            '[What Are Local LLMs?](/local-llms/what-are-local-llms) -- Core concepts and how they work',
            '[Troubleshooting Local LLM Setup](/local-llms/troubleshooting-local-llm-setup) -- Fix slow inference, GPU not detected, and common errors',
            '[Local LLM OpenAI-Compatible API](/local-llms/local-llm-openai-compatible-api) -- Connect running Ollama to Python and other applications',
            'Your first local LLM is running. Now learn how to prompt it effectively: [what is prompt engineering](https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering) teaches the basics.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Run Your First Local LLM in 10 Minutes (Step-by-Step)',
        'description': 'Run your first local LLM in 10 minutes with Ollama: install, pull a 3B model, and get a response -- no API key, no account needed after download.',
        'url': 'https://www.promptquorum.com/local-llms/run-first-local-llm',
        'inLanguage': 'en',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/author/hans-kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Beginner',
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'Llama 3.2' },
          { '@type': 'Thing', 'name': 'Local LLM' },
          { '@type': 'Thing', 'name': 'AI Model Setup' },
          { '@type': 'Thing', 'name': 'Terminal Commands' }
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', '#faq']
        }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Run Your First Local LLM in 10 Minutes',
        'inLanguage': 'en',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Install Ollama', 'text': 'Download and install Ollama from ollama.ai. Verify installation with `ollama --version`.' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Choose Your First Model', 'text': 'Select a beginner model based on your hardware: Llama 3.2 3B (4GB RAM), Phi 2.5 (8GB), or Mistral 7B (16GB).' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Pull the Model', 'text': 'Run `ollama pull llama3.2:3b` to download the model. Wait for completion.' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Run and Chat', 'text': 'Execute `ollama run llama3.2:3b` to start the model and begin chatting in your terminal.' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Test with Your First Prompt', 'text': 'Type your first prompt (e.g., "Hello, what is an LLM?") and press Enter. Observe the response time and quality.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'en',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'The model response is very slow -- is this normal?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'On CPU-only hardware, 8-20 tokens/sec is normal for a 7B model. Each token is roughly 0.75 words. At 10 tokens/sec, a 100-word response takes about 13 seconds. To speed up inference, use a smaller model (3B instead of 8B), enable GPU offloading if you have a compatible GPU, or use quantization level Q4_K_M which is the fastest common setting.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I run two models at the same time?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ollama can keep multiple models loaded simultaneously if you have enough RAM. By default, Ollama unloads a model after 5 minutes of inactivity. You can change this with the OLLAMA_KEEP_ALIVE environment variable. Running two 7B models simultaneously requires ~16 GB of RAM.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I stop Ollama from running in the background?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'On macOS: click the llama icon in the menu bar and select Quit. On Linux: run `systemctl stop ollama`. On Windows: right-click the system tray icon and select Quit. To prevent Ollama from starting on login, remove it from your startup items.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the easiest way to run a local LLM for the first time?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Install Ollama (ollama.com), run `ollama pull llama3.2:3b`, then run `ollama run llama3.2:3b`. That is all. Three commands, 2-5 minutes, and you have a working AI model on your machine with no internet needed after the initial download.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I know if my local LLM is working correctly?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Run `ollama ps` in the terminal. If the model is running, it will show in the list with its name, size, and memory usage. Send it a simple prompt like "What is 2+2?" -- if it responds with "4", the model is working correctly.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Does my computer need a GPU to run a local LLM?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Local LLMs run on CPU. A GPU makes inference 5-10× faster, but CPU-only is fine for learning and for many real use cases. Modern laptops with Apple M1/M2, AMD Ryzen, or Intel 12th gen CPUs can run 3B-7B models at reasonable speeds (10-30 tokens/sec).'
            }
          },
          {
            '@type': 'Question',
            'name': 'How much disk space does a local LLM take?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`llama3.2:1b` is 1.3 GB, `llama3.2:3b` is 2 GB, `llama3.1:8b` is 4.7 GB. These are the compressed sizes as stored by Ollama. After loading into RAM for inference, the sizes differ (see [How Much VRAM for Local LLM](/local-llms/how-much-vram-local-llm) for details).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I use my local LLM without an internet connection?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, completely. Download the model once with Ollama (requires internet), then run locally forever with zero internet. Perfect for private networks, airplanes, or completely offline environments.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How is a local LLM different from ChatGPT?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ChatGPT runs on Anthropic\'s servers. Local LLMs run on your machine. Local = zero data leave your device, full privacy, no ongoing API costs. ChatGPT = better quality on complex tasks, requires internet and a paid subscription. Both have trade-offs.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the best first model to try with Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`ollama pull llama3.2:3b` -- it is 2 GB, runs on any modern laptop, produces competent answers, and is the starting point recommended by Ollama. After trying it, see [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models) for alternatives based on your hardware.'
            }
          },
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'inLanguage': 'en',
        'name': 'Best First Local LLM Models by RAM',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'llama3.2:1b', 'description': '4 GB RAM. 1.3 GB download. Smallest usable Llama model.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.2 3B', 'description': '8 GB RAM. 2 GB download. Best quality-to-size for beginners.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Llama 3.1 8B', 'description': '8-16 GB RAM. 4.7 GB download. Strong general-purpose.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'mistral:7b or qwen2.5:7b', 'description': '16+ GB RAM. 4-5 GB download. Competitive quality.' },
        ]
      },
    },
    de: {
      theme: 'Erste Schritte',
      title: 'Führe dein erstes lokales LLM aus: Von Installation bis erste Antwort in 10 Minuten',
      seoTitle: 'Lokales LLM in 10 Minuten starten: Ollama Schritt-für-Schritt',
      intro: 'Dein erstes lokales LLM mit Ollama auszuführen dauert weniger als 10 Minuten. Installiere Ollama, führe einen Befehl aus, um ein Modell zu laden, und beginne, in deinem Terminal zu chatten -- kein API-Schlüssel, kein Konto und keine Internetverbindung nach dem initialen Download erforderlich. Ab April 2026 ist das schnellste Anfängermodell Llama 3.2 3B mit 25-45 Tokens/Sekunde auf einer modernen Laptop-CPU.',
      metaDescription: 'Erstes lokales LLM mit Ollama in 10 Minuten: Installation, Modell laden, erste Abfrage. Funktioniert auf Mac, Windows und Linux ohne Cloud.',
      publishDate: '2026-04-04',
      readTime: '7 min read',
      heroComponent: 'LLMImageSelector',
      educationalLevel: 'Beginner',
      primaryTerm: 'lokales LLM',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Lokales LLM in 10 Minuten starten: Ollama Schritt-für-Schritt',
        'description': 'Erstes lokales LLM mit Ollama in 10 Minuten: Installation, Modell laden, erste Abfrage. Funktioniert auf Mac, Windows und Linux ohne Cloud.',
        'url': 'https://www.promptquorum.com/local-llms/run-first-local-llm?lang=de',
        'inLanguage': 'de',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' }
      },
      sections: {
        tldr: { id: 'key-takeaways',
 isTldr: true, items: ['**Bestes Reasoning im kleinen Format**: Phi-4 Mini 3.8B -- 68% MMLU, 70% HumanEval, läuft auf 4 GB RAM.', '**Schnellste auf CPU**: Gemma 2 2B -- 40-60 tok/sek auf jedem modernen Laptop, 1,7 GB RAM.', '**Bestes kleines Codierungsmodell**: Qwen2.5 3B -- 65% HumanEval bei ~2 GB RAM.', '**Beste Universal-3B**: Llama 3.2 3B -- beste Community-Unterstützung, 128K Kontext, 2,5 GB RAM.', 'Seit April 2026 produziert kein Sub-2B-Modell Ausgabequalität, die für professionelle Aufgaben geeignet ist. Verwenden Sie 3B+ für echte Arbeit.'] },
        whatIsSmall: { title: 'Was ist ein „kleines" lokales LLM und wann sollten Sie eines verwenden?', content: ['Ein kleines lokales LLM ist typischerweise definiert als ein Modell mit weniger als 4 Milliarden Parametern. Bei Q4_K_M-Quantisierung benötigen diese Modelle 1,5-3 GB RAM -- gut innerhalb der Einschränkungen von Einstiegs-Laptops mit 4-8 GB Gesamtspeicher.', 'Seit April 2026 sind kleine Modelle geeignet für: schnelle Zusammenfassung, einfache F&A, Erklärung von Code-Snippets, Übersetzung kurzer Texte und Klassifizierungsaufgaben. Sie sind nicht geeignet für mehrstufiges Reasoning, komplexe Code-Generierung oder das Verfassen langer kohärenter Dokumente.', 'Die Qualitätslücke zwischen einem 3B- und 7B-Modell ist erheblich -- ungefähr der Lücke zwischen GPT-3.5 Mini und GPT-3.5 Turbo entsprechend. Für Benutzer mit 8 GB RAM ist ein 7B-Modell bei Q4_K_M fast immer die bessere Wahl. Siehe [Beste Anfänger-Lokale-LLM-Modelle](/local-llms/best-beginner-local-llm-models) für 7B-Empfehlungen.'] },
        phi4mini: { title: 'Phi-4 Mini 3.8B -- Beste Reasoning-Leistung in der Sub-4B-Klasse', content: ['Microsoft Phi-4 Mini erreicht 68% bei MMLU und 70% bei HumanEval -- Werte, die viele vor 2025 veröffentlichte 7B-Modelle übertreffen. Dies ist möglich, weil Phi-4 Mini auf einem kuratierten synthetischen Datensatz trainiert wurde, der auf Reasoning und Problemlösung fokussiert ist.', 'Seit April 2026 ist Phi-4 Mini die empfohlene Wahl für Benutzer, die hauptsächlich Reasoning oder Code-Unterstützung auf Hardware mit 4-6 GB RAM benötigen.'], rows: [{ 'Spec': 'MMLU', 'Value': '68%' }, { 'Spec': 'HumanEval', 'Value': '70%' }, { 'Spec': 'RAM (Q4_K_M)', 'Value': '~2,5 GB' }, { 'Spec': 'Kontext', 'Value': '128K Token' }, { 'Spec': 'CPU-Geschwindigkeit', 'Value': '30-50 tok/sek' }, { 'Spec': 'Ollama-Befehl', 'Value': 'ollama run phi4-mini' }], columns: ['Spec', 'Value'] },
        gemma2: { title: 'Gemma 2 2B -- Schnellstes kleines lokales LLM auf CPU', content: ['Google Gemma 2 2B generiert 40-60 Token/Sek auf einer modernen Laptop-CPU -- das schnellste Modell in dieser Qualitätsklasse. Sein 1,7-GB-RAM-Footprint lässt viel Speicher für Betriebssystem und andere Anwendungen auf einer 4-GB-Maschine.', 'Die Qualität ist niedriger als Phi-4 Mini bei Reasoning. Das 8K-Kontextfenster ist eine praktische Einschränkung für längere Dokumente. Gemma 2 2B ist die richtige Wahl, wenn Antwortgeschwindigkeit wichtiger ist als Ausgabetiefe.'], rows: [{ 'Spec': 'MMLU', 'Value': '52%' }, { 'Spec': 'RAM (Q4_K_M)', 'Value': '~1,7 GB' }, { 'Spec': 'Kontext', 'Value': '8K Token' }, { 'Spec': 'CPU-Geschwindigkeit', 'Value': '40-60 tok/sek' }, { 'Spec': 'Ollama-Befehl', 'Value': 'ollama run gemma2:2b' }], columns: ['Spec', 'Value'] },
        qwen25_3b: { title: 'Qwen2.5 3B -- Bestes kleines Modell für Codierungsaufgaben', content: ['Qwen2.5 3B erreicht 65% bei HumanEval -- 5 Prozentpunkte über Llama 3.2 3B -- und ist beste Wahl für Codierungsaufgaben im 3B-Format. Es umfasst JSON-Modus und Funktionsaufruf-Unterstützung und verarbeitet nativ 29 Sprachen.', 'Für nicht-Codierungs-Aufgaben im Englischen erzeugen Llama 3.2 3B und Phi-4 Mini natürlichere Prosa. Wählen Sie Qwen2.5 3B speziell für Codierung oder mehrsprachige Aufgaben.'], rows: [{ 'Spec': 'MMLU', 'Value': '62%' }, { 'Spec': 'HumanEval', 'Value': '65%' }, { 'Spec': 'RAM (Q4_K_M)', 'Value': '~2 GB' }, { 'Spec': 'Kontext', 'Value': '128K Token' }, { 'Spec': 'CPU-Geschwindigkeit', 'Value': '25-40 tok/sek' }, { 'Spec': 'Ollama-Befehl', 'Value': 'ollama run qwen2.5:3b' }], columns: ['Spec', 'Value'] },
        llama32_3b: { title: 'Llama 3.2 3B -- Bestes Universal-Kleinmodell', content: ['Meta Llama 3.2 3B ist das am weitesten dokumentierte und von der Community unterstützte 3B-Modell. Es erreicht 58% bei MMLU und 60% bei HumanEval, aber hat breiteste Werkzeugunterstützung, die meisten Fine-Tunes und größte Sammlung von Community-Guides.', 'Das 128K-Kontextfenster eignet sich für Zusammenfassung von Dokumenten mittlerer Länge. Für ein erstes kleines Modell bleibt Llama 3.2 3B die sicherste Wahl aufgrund vorhersehbaren Verhaltens und umfangreicher Dokumentation.'], rows: [{ 'Spec': 'MMLU', 'Value': '58%' }, { 'Spec': 'RAM (Q4_K_M)', 'Value': '~2,5 GB' }, { 'Spec': 'Kontext', 'Value': '128K Token' }, { 'Spec': 'CPU-Geschwindigkeit', 'Value': '25-45 tok/sek' }, { 'Spec': 'Ollama-Befehl', 'Value': 'ollama run llama3.2:3b' }], columns: ['Spec', 'Value'] },
        llama32_1b: { title: 'Llama 3.2 1B -- Absolute Mindestanforderung für nützliche Ausgabe', content: 'Llama 3.2 1B benötigt nur 1,3 GB RAM und generiert 60-90 tok/sek auf CPU. Die Ausgabequalität ist marginal: es bewältigt sehr einfache Klassifizierung, kämpft aber mit kohärenten mehrsätzigen Antworten. Seit April 2026 verwenden Sie Llama 3.2 1B nur, wenn RAM die bindende Einschränkung ist oder zum Testen von Tool-Integrationen.' },
        comparisonTable: { title: 'Vollständiger Vergleich: Beste kleine lokale LLMs unter 4B Parametern', rows: [{ 'Modell': 'Phi-4 Mini 3.8B', 'MMLU': '68%', 'HumanEval': '70%', 'RAM': '2,5 GB', 'Kontext': '128K', 'Beste für': 'Reasoning, Codierung' }, { 'Modell': 'Qwen2.5 3B', 'MMLU': '62%', 'HumanEval': '65%', 'RAM': '2 GB', 'Kontext': '128K', 'Beste für': 'Codierung, mehrsprachig' }, { 'Modell': 'Llama 3.2 3B', 'MMLU': '58%', 'HumanEval': '60%', 'RAM': '2,5 GB', 'Kontext': '128K', 'Beste für': 'Allgemein, erstes Modell' }, { 'Modell': 'Gemma 2 2B', 'MMLU': '52%', 'HumanEval': '38%', 'RAM': '1,7 GB', 'Kontext': '8K', 'Beste für': 'Geschwindigkeit, niedriges RAM' }, { 'Modell': 'Llama 3.2 1B', 'MMLU': '32%', 'HumanEval': '28%', 'RAM': '1,3 GB', 'Kontext': '128K', 'Beste für': 'Minimales RAM' }], columns: ['Modell', 'MMLU', 'HumanEval', 'RAM', 'Kontext', 'Beste für'] },
        regionalContext: { title: 'Kleine lokale LLMs nach Region', content: ['**EU / DSGVO:** Für EU-Profis auf begrenzter Hardware -- Feldarbeit, air-gapped Umgebungen, ältere Enterprise-Laptops -- bieten kleine lokale Modelle DSGVO-konforme Inferenz ohne Datengress. Ein Phi-4 Mini 3.8B auf Standard-Corporate-Laptop (8 GB RAM) behält alle Texte auf Gerät unter DSGVO-Artikel 5. Für BSI-Compliance: Phi-4 Mini (Microsoft, MIT-Lizenz) und Llama 3.2 3B (Meta, Llama Community-Lizenz) bieten versionierte Modell-Identifikatoren via Ollama-Tags. Mistral bietet derzeit kein Sub-4B-Modell. Für EU-Organisationen mit EU-Präferenz sind Optionen begrenzt, bis Mistral Sub-4B freigibt.', '**Japan (METI):** Für japanischsprachige Aufgaben ist Qwen2.5 3B das einzige Modell mit nativer japanischer Tokenisierung. Llama 3.2 3B verarbeitet Japanisch mit niedrigerer Token-Effizienz. Für japanische Zusammenfassung oder Übersetzung: `ollama run qwen2.5:3b`. Der Geschwindigkeitsvorteil ist relevant für japanischen Enterprise-Einsatz: 25-40 tok/sek auf CPU bietet angemessene Echtzeit-Antwort auf Standard-Office-Hardware.', '**China:** Qwen2.5 3B (Alibaba, Apache 2.0) ist natürliche Wahl für chinesischsprachige Bereitstellung. Native chinesische Tokenisierung verarbeitet Mandarin-Text 30-40% effizienter als Llama. Für IoT und Edge unter Chinas Datensicherheitsgesetz: `ollama run qwen2.5:3b` läuft auf jedem Linux-Gerät mit 4 GB RAM ohne externe API-Aufrufe.'] },
        commonMistakes: { title: 'Häufige Fehler beim Ausführen kleiner lokaler LLMs', items: ['**Verwendung von Q8_0 statt Q4_K_M:** Q8_0 benötigt fast doppelt so viel RAM mit minimaler Qualitätsverbesserung. Ein Llama 3.2 3B mit Q8_0 benötigt ~3,8 GB RAM vs ~2,5 GB für Q4_K_M. Auf 4 GB Maschinen kann Q8_0 Swap-Nutzung und 3-5× langsamere Inferenz auslösen. Verwenden Sie immer Q4_K_M für Sub-4B-Modelle.', '**Ausführung eines Basis-Modells statt Instruct-Variante:** Basis-Modelle (z. B. `llama3.2:3b-text`) folgen keine Anweisungen. Wenn Sie ein Basis-Modell „Was ist 2+2?" fragen, kann es den Satz als Quiz vervollständigen statt „4" zu antworten. Verwenden Sie immer: `llama3.2:3b` (Ollama greift standardmäßig zu Instruct).', '**Erwartung von 7B-Qualität aus 3B-Modell:** Ein 3B-Modell mit 68% MMLU (Phi-4 Mini) funktioniert ähnlich wie GPT-3.5 Mini aus 2023. Komplexe Reasoning, lange Texte und differenzierter Code haben niedrigere Qualität. Für bessere Qualität: aktualisieren Sie auf 7B (RAM-Unterschied: ~2 GB mehr).'] },
        relatedReading: { title: 'Weiterführende Lektüre', items: ['[Beste Anfänger-Lokale-LLM-Modelle](/local-llms/best-beginner-local-llm-models) -- 7B-Empfehlungen wenn 8 GB RAM verfügbar', '[Ihr erstes lokales LLM ausführen](/local-llms/run-first-local-llm) -- Schritt-für-Schritt-Anleitung mit Ollama unter 10 Minuten', '[Lokales LLM auf Laptop](/local-llms/local-llm-on-laptop) -- Wärmeverwaltung und Batterielebensdauer auf begrenzter Hardware', '[LLM-Quantisierung erklärt](/local-llms/llm-quantization-explained) -- warum Q4_K_M Standard ist und Q3_K_M für extreme RAM-Einschränkungen', '[Beste lokale LLMs zum Codieren](/local-llms/best-local-llms-for-coding) -- Codierungs-Modelle bei 7B+ wenn Qwen2.5 3B nicht ausreicht', '[Lokales LLM-Setup beheben](/local-llms/troubleshooting-local-llm-setup) -- OOM-Fehler, langsame Inferenz und Ladefehler auf RAM-armen Maschinen'] },
        faqSection: { title: 'Häufig gestellte Fragen', faqs: [{ q: 'Was ist das kleinste lokale LLM mit nützlicher Ausgabe?', a: 'Seit April 2026 ist 3B bei Q4_K_M praktisches Minimum. Modelle unter 2B (Llama 3.2 1B, Gemma 2 2B) erzeugen kohärente einzelne Sätze, kämpfen aber mit mehrstufigen Anweisungen und Reasoning. Für Zusammenfassung und F&A ist Gemma 2 2B brauchbar. Für komplexere Aufgaben: beginnen Sie mit 3B.' }, { q: 'Kann ein 3B-Modell auf einem Telefon laufen?', a: 'Ja -- Llama 3.2 1B und 3B sind für mobile Bereitstellung konzipiert. Meta bietet optimierte Builds für iOS und Android. Inferenz auf modernem Telefon erzeugt 15-30 tok/sek für 1B. LM Studio und Ollama laufen nicht auf iOS/Android -- mobil erfordert separate Frameworks.' }, { q: 'Sind kleine Modelle für Zusammenfassung geeignet?', a: 'Ja -- Zusammenfassung ist stärkster Anwendungsfall für kleine Modelle. Gemma 2 2B und Llama 3.2 3B produzieren zuverlässig genaue Zusammenfassungen von Texten bis zu ~4.000 Wörtern. Für längere Dokumente verwenden Sie Modell mit großem Kontext wie Phi-4 Mini oder Llama 3.2 3B (beide 128K).' }, { q: 'Wie viel schneller ist 2B als 7B auf gleicher Hardware?', a: 'Ungefähr 2-3× schneller auf CPU. Gemma 2 2B generiert 40-60 tok/sek vs 10-20 tok/sek für Mistral 7B. Auf GPU verengt sich Vorteil, da GPU-Durchsatz weniger durch Modellgröße begrenzt ist. Unterschied ist auf reinen CPU-Maschinen deutlichst.' }, { q: 'Unterstützen kleine Modelle Funktionsaufrufe?', a: 'Einige tun dies. Qwen2.5 3B unterstützt Funktionsaufrufe und JSON. Llama 3.2 3B hat grundlegende Werkzeugunterstützung. Gemma 2 2B unterstützt keine Funktionsaufrufe. Überprüfen Sie Modelldokumentation vor Pipeline-Aufbau.' }, { q: 'Welches kleine Modell ist beste für nicht-englische Sprachen?', a: 'Qwen2.5 3B unterstützt nativ 29 Sprachen (Chinesisch, Japanisch, Koreanisch, Arabisch). Gemma 2 2B und Phi-4 Mini sind hauptsächlich auf Englisch optimiert. Für nicht-englische Aufgaben bei kleinen Modellen ist Qwen2.5 3B klare Wahl.' }, { q: 'Unterschied zwischen Phi-4 Mini und Llama 3.2 3B?', a: 'Phi-4 Mini übertrifft bei Reasoning, Mathematik, Codierung (68% vs 58% MMLU, 70% vs 60% HumanEval) bei fast identischem RAM (2,5 GB). Für Alltags-Aufgaben ist Lücke spürbar aber nicht dramatisch. Llama 3.2 3B hat breitere Support. Wählen Sie Phi-4 Mini für Reasoning; Llama für Chat.' }, { q: 'Kann ich zwei kleine Modelle gleichzeitig laufen lassen?', a: 'Ja, wenn RAM zulässt. Zwei 3B-Modelle bei Q4_K_M verwenden ~5 GB kombiniert -- auf 8 GB Maschine mit schlankem OS möglich. Ollama lädt standardmäßig ein Modell pro Prozess. Laufen Sie zwei Ollama-Instanzen auf verschiedenen Ports (OLLAMA_HOST=:11434 und :11435) parallel.' }, { q: 'Funktionieren kleine Modelle für RAG?', a: 'Ja für einfaches RAG. Llama 3.2 3B und Phi-4 Mini beantworten Fragen über abgerufene Dokumentchunks zuverlässig. Für RAG über große Wissensdatenbanken mit Multi-Hop-Reasoning sind 7B+-Modelle konsistenter. GPT4All LocalDocs nutzt 3B für Dokument-Q&A.' }, { q: 'Ist Phi-4 Mini besser als Llama 3.2 3B für Codierung?', a: 'Ja. Phi-4 Mini erreicht 70% auf HumanEval vs 60% für Llama 3.2 3B -- aussagekräftige 10-Punkte-Lücke. Für Code-Hilfe auf 4-6 GB RAM ist Phi-4 Mini empfohlen. Für mehrsprachige Codierung (nicht-Python) ist Qwen2.5 3B mit 65% HumanEval wettbewerbsfähig und unterstützt Funktionsaufrufe.' }] },
        sources: { title: 'Quellen', items: ['Hugging Face Open LLM Leaderboard -- open-llm-leaderboard.hf.space (MMLU und HumanEval Werte)', 'Microsoft Phi-4 Technical Report -- microsoft.com/en-us/research/publication/phi-4-technical-report/', 'Meta Llama 3.2 Model Card -- huggingface.co/meta-llama/Llama-3.2-3B-Instruct', 'Google Gemma 2 Technical Report -- storage.googleapis.com/deepmind-media/gemma/gemma-2-report.pdf'] },
      },
    },
    fr: {
      theme: 'Premiers pas',
      title: 'Exécutez votre premier LLM local: de l\'installation à la première réponse en 10 minutes',
      seoTitle: 'Lancer votre premier LLM local en 10 minutes avec Ollama',
      intro: 'Exécuter votre premier LLM local avec Ollama prend moins de 10 minutes. Installez Ollama, exécutez une commande pour charger un modèle, et commencez à discuter dans votre terminal -- pas de clé API, pas de compte, et pas de connexion Internet après le téléchargement initial. En avril 2026, le modèle débutant le plus rapide est Llama 3.2 3B à 25-45 tokens/sec sur une CPU portable moderne.',
      metaDescription: 'Premier LLM local avec Ollama en 10 minutes : installation, téléchargement du modèle, première requête. Fonctionne sur Mac, Windows et Linux.',
      publishDate: '2026-04-04',
      readTime: '7 min read',
      heroComponent: 'LLMImageSelector',
      educationalLevel: 'Beginner',
      primaryTerm: 'LLM local',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Lancer votre premier LLM local en 10 minutes avec Ollama',
        'description': 'Premier LLM local avec Ollama en 10 minutes : installation, téléchargement du modèle, première requête. Fonctionne sur Mac, Windows et Linux.',
        'url': 'https://www.promptquorum.com/local-llms/run-first-local-llm?lang=fr',
        'inLanguage': 'fr',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' }
      },
      sections: {},
    },
    ja: {
      theme: '入門',
      title: '初めてのローカルLLM：インストールから最初の回答まで10分',
      seoTitle: 'Ollamaで初めてのローカルLLMを10分で起動するステップバイステップガイド2026',
      intro: 'Ollamaを使用して初めてのローカルLLMを実行するには10分以下かかります。Ollamaをインストールし、1つのコマンドを実行してモデルをロードし、ターミナルでチャットを開始します。APIキー、アカウント、初期ダウンロード後のインターネット接続は不要です。2026年4月時点で、最速の初心者向けモデルはLlama 3.2 3Bで、モダンノートパソコンのCPUで25～45トークン/秒です。',
      metaDescription: 'Ollamaを使って初めてのローカルLLMを10分以内で実行。インストール、モデルダウンロード、初回プロンプト実行まで完全解説。Mac・Windows・Linux対応、クラウド不要。',
      publishDate: '2026-04-04',
      readTime: '7 min read',
      heroComponent: 'LLMImageSelector',
      educationalLevel: 'Beginner',
      primaryTerm: 'ローカルLLM',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Ollamaで初めてのローカルLLMを10分で起動するステップバイステップガイド2026',
        'description': 'Ollamaを使って初めてのローカルLLMを10分以内で実行。インストール、モデルダウンロード、初回プロンプト実行まで完全解説。Mac・Windows・Linux対応、クラウド不要。',
        'url': 'https://www.promptquorum.com/local-llms/run-first-local-llm?lang=ja',
        'inLanguage': 'ja',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' }
      },
      sections: {},
    },
    zh: {
      theme: '入门',
      title: '运行您的第一个本地LLM：从安装到首个响应仅需10分钟',
      seoTitle: '10分钟内用Ollama运行第一个本地LLM：分步安装指南2026',
      intro: '使用Ollama运行您的第一个本地LLM只需不到10分钟。安装Ollama，运行一个命令加载模型，然后在您的终端中开始聊天----无需API密钥、账户，初始下载后也无需互联网连接。截至2026年4月，最快的初学者模型是Llama 3.2 3B，在现代笔记本电脑CPU上可达25-45个令牌/秒。',
      metaDescription: '用Ollama在10分钟内运行第一个本地LLM：安装、模型下载、首次推理完整指南。支持Mac、Windows、Linux，无需云端或GPU。',
      publishDate: '2026-04-04',
      readTime: '7 min read',
      heroComponent: 'LLMImageSelector',
      educationalLevel: 'Beginner',
      primaryTerm: '本地LLM',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '10分钟内用Ollama运行第一个本地LLM：分步安装指南2026',
        'description': '用Ollama在10分钟内运行第一个本地LLM：安装、模型下载、首次推理完整指南。支持Mac、Windows、Linux，无需云端或GPU。',
        'url': 'https://www.promptquorum.com/local-llms/run-first-local-llm?lang=zh',
        'inLanguage': 'zh',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' }
      },
      sections: {},
    },
  };
