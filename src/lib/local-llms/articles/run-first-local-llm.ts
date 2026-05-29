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
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'Ejecuta tu primer LLM local en 10 minutos: De la instalación a la primera respuesta',
      seoTitle: 'Ejecuta tu primer LLM local en 10 minutos (paso a paso)',
      intro: 'Ejecutar tu primer LLM local con Ollama tarda menos de 10 minutos. Instala Ollama, ejecuta un comando para descargar un modelo y empieza a chatear en tu terminal — sin API key, sin cuenta y sin conexión a internet después de la descarga inicial. A partir de abril de 2026, el modelo más rápido para principiantes es Llama 3.2 3B con 25-45 tokens/seg en una CPU moderna de laptop.',
      metaDescription: 'Ejecuta tu primer LLM local en menos de 10 minutos con Ollama: instala, descarga un modelo 3B y obtén una respuesta — sin API key ni internet después de la descarga.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Ejecutar tu primer LLM local tarda menos de 10 minutos con Ollama. Instala Ollama, ejecuta un comando para descargar un modelo y empieza a chatear en tu terminal — sin API key, sin cuenta y sin conexión a internet después de la descarga inicial.**',
      audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
      readTime: '7 min de lectura',
      heroComponent: 'LLMImageSelector',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'Paso 1: Instalar Ollama', anchor: '#step-1-install-ollama' },
        { label: 'Paso 2: Elegir tu primer modelo', anchor: '#step-2-choose-your-first-model' },
        { label: 'Paso 3: Descargar el modelo', anchor: '#step-3-pull-the-model' },
        { label: 'Paso 4: Ejecutar y chatear', anchor: '#step-4-run-and-chat' },
        { label: 'Qué esperar: velocidad y calidad', anchor: '#what-to-expect' },
        { label: 'Más allá del terminal', anchor: '#beyond-the-terminal' },
        { label: 'Contexto regional', anchor: '#regional-context' },
        { label: 'Preguntas frecuentes', anchor: '#faq' },
        { label: 'Errores comunes', anchor: '#common-mistakes' },
        { label: 'Lecturas relacionadas', anchor: '#related-reading' },
        { label: 'Fuentes', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'El camino más rápido: instala Ollama → ejecuta `ollama run llama3.2` → chatea en tu terminal. Tiempo total: menos de 5 minutos con una conexión rápida.',
            'Para máquinas con 8 GB de RAM: empieza con `llama3.2:3b` (descarga de 2 GB) o `phi4-mini` (2,3 GB). Ambos funcionan en cualquier laptop moderno.',
            'Espera 15-40 tokens/seg en CPU y 60-120 tokens/seg en una GPU de gama media o Apple Silicon.',
            'Las primeras respuestas pueden sentirse más lentas que las APIs en la nube — los modelos locales cambian velocidad por privacidad y costo cero.',
            'Después de la descarga inicial del modelo, todo funciona sin conexión. No se necesita internet para sesiones posteriores.',
          ],
        },
        step1: {
          title: 'Paso 1: Instalar Ollama',
          content: 'Ollama es la forma más rápida de ejecutar un LLM local. Instálalo con un comando o una descarga de 2 minutos:',
          codeBlock: '# macOS (Homebrew)\nbrew install ollama\n\n# Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Windows: download installer from ollama.com/download',
          codeLanguage: 'bash',
        },
        step1Detail: {
          title: 'Verificar que Ollama está en ejecución',
          content: 'Después de la instalación, confirma que Ollama está activo:',
          codeBlock: 'curl http://localhost:11434\n# Expected output: Ollama is running',
          codeLanguage: 'bash',
        },
        step2: {
          title: 'Paso 2: Elegir tu primer modelo',
          content: 'Elige un modelo según la RAM disponible. Si tienes dudas, empieza con `llama3.2:3b` — funciona en cualquier máquina con 4 GB de RAM y produce resultados útiles:',
          rows: [
            { 'Tu RAM': '4 GB', 'Modelo recomendado': 'llama3.2:1b', 'Tamaño de descarga': '~1,3 GB', 'Por qué': 'El modelo Llama más pequeño que resulta útil' },
            { 'Tu RAM': '8 GB', 'Modelo recomendado': 'Llama 3.2 3B', 'Tamaño de descarga': '~2 GB', 'Por qué': 'Mejor relación calidad/tamaño para principiantes' },
            { 'Tu RAM': '8-16 GB', 'Modelo recomendado': 'Llama 3.1 8B', 'Tamaño de descarga': '~4,7 GB', 'Por qué': 'Modelo de propósito general de alto rendimiento' },
            { 'Tu RAM': '16+ GB', 'Modelo recomendado': 'mistral:7b o qwen2.5:7b', 'Tamaño de descarga': '~4-5 GB', 'Por qué': 'Calidad competitiva, inferencia rápida' },
          ],
          columns: ['Tu RAM', 'Modelo recomendado', 'Tamaño de descarga', 'Por qué'],
        },
        step3: {
          title: 'Paso 3: Descargar el modelo',
          content: 'Descarga el modelo con `ollama pull`. El modelo se guarda en `~/.ollama/models` y solo necesita descargarse una vez:',
          codeBlock: 'ollama pull llama3.2\n\n# Or pull a specific size variant\nollama pull llama3.2:3b\nollama pull llama3.1:8b',
          codeLanguage: 'bash',
        },
        step3Progress: {
          title: '¿Cómo se ve la descarga?',
          content: 'Ollama muestra el progreso de la descarga en el terminal. Un modelo `llama3.2:3b` tarda 2-5 minutos en una conexión de banda ancha típica. El modelo se almacena comprimido — los 2 GB descargados se expanden a aproximadamente 2,3 GB en disco.',
          codeBlock: 'pulling manifest\npulling 966de95ca8dc... 100% ▕████████████████▏ 1.9 GB\npulling 9f436a92eb8b... 100% ▕████████████████▏   42 B\nverifying sha256 digest\nwriting manifest\nsuccess',
          codeLanguage: 'text',
        },
        step4: {
          id: 'step-4-run-and-chat',
          title: 'Paso 4: Ejecutar el modelo y enviar tu primer prompt',
          content: 'Inicia una sesión de chat interactiva:',
          codeBlock: 'ollama run llama3.2\n\n# Ollama loads the model and shows a prompt:\n>>> Send a message (/? for help)',
          codeLanguage: 'bash',
        },
        step4Chat: {
          title: 'Tu primera conversación',
          content: 'Escribe un mensaje y presiona Enter. El modelo transmite su respuesta token por token:',
          codeBlock: '>>> What are local LLMs?\n\nLocal LLMs (large language models) are AI models that run entirely\non your own hardware -- your laptop, desktop, or server. Unlike cloud\nservices such as ChatGPT or Claude, local LLMs process everything\nlocally with no data sent to external servers...',
          codeLanguage: 'text',
        },
        whatToExpect: {
          id: 'what-to-expect',
          title: 'Qué esperar: velocidad, calidad y limitaciones',
          content: [
            '**Velocidad** variable según el hardware. En un laptop de 2023 (sin GPU): espera 15-25 tokens/seg para un modelo 3B y 8-15 tokens/seg para un 8B. En Apple M3 Pro: 50-80 tokens/seg para 8B. En NVIDIA RTX 4070 Ti: 90-130 tokens/seg para 8B.',
            '**Calidad** de `llama3.2:3b` notablemente inferior a GPT-4o o Claude Opus 4.7 en tareas complejas. Para resúmenes, preguntas y respuestas simples y explicación de código, el resultado es útil. Para razonamiento en múltiples pasos o escritura de formato largo, actualiza a un modelo 8B o 13B.',
            '**Ventana de contexto**: `llama3.2:3b` soporta 128K tokens por defecto en Ollama. En la práctica, la calidad se degrada después de ~16K tokens en una sola conversación.',
            '**Demora en la primera respuesta**: la primera respuesta después de `ollama run` incluye el tiempo de carga del modelo (5-30 segundos). Las respuestas posteriores en la misma sesión son más rápidas.',
          ],
        },
        beyondTerminal: {
          id: 'beyond-the-terminal',
          title: '¿Cómo usar tu LLM local más allá del terminal?',
          content: 'El chat en terminal de Ollama es útil para pruebas, pero la mayoría de los casos de uso reales necesitan una interfaz mejor:',
          items: [
            '**Open WebUI**: una interfaz web completa para Ollama. Ejecútala con Docker: `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`. Accede en http://localhost:3000.',
            '**LM Studio**: si prefieres una GUI de escritorio, [Cómo instalar LM Studio](/es/local-llms/how-to-install-lm-studio) cubre la configuración completa. El chat integrado de LM Studio es pulido y soporta historial de conversaciones.',
            '**Integración API**: la API de Ollama en `localhost:11434` es compatible con el SDK de OpenAI. Cualquier aplicación que acepte una URL base de OpenAI puede conectarse a tu modelo local.',
            '**VS Code / Cursor**: extensiones como Continue.dev se conectan a Ollama y proporcionan asistencia de codificación con IA local directamente en tu editor.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Ejecutar tu primer LLM local: contexto regional',
          content: [
            '**UE / RGPD**: ejecutar un LLM local con Ollama significa que ningún dato de prompt, contexto ni salida sale de tu máquina — los mecanismos de transferencia del Artículo 46 del RGPD no se aplican. Para profesionales de la UE que manejan datos personales, esta es la alternativa que preserva la privacidad frente a las APIs de IA en la nube. Tu primer modelo local (llama3.2:3b) usa 2 GB de disco, genera cero llamadas API externas y cumple por diseño las directrices de minimización de datos del BSI alemán.',
            '**Japón (METI)**: las directrices de gobernanza de IA del METI exigen documentar dónde se produce la inferencia de IA. Tu primera configuración de Ollama crea un entorno local completo y auditable: archivos de modelo almacenados en ~/.ollama/models con nombres de archivo específicos de versión, sin dependencias de API externas, e inferencia verificable vía `ollama ps`. Los profesionales japoneses que ejecuten Llama o Qwen2.5 localmente pueden documentar la versión exacta del modelo y el hardware para los fines de cumplimiento del METI.',
            '**China**: para flujos de trabajo en chino, reemplaza llama3.2:3b por qwen2.5:3b como primer modelo: `ollama pull qwen2.5:3b`. Qwen2.5 procesa texto en chino un 30-40% más eficientemente en tokens que Llama, produciendo mejores resultados en el mismo nivel de hardware. Los comandos ollama pull y run son idénticos.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Preguntas frecuentes al ejecutar tu primer LLM local',
          faqs: [
            {
              q: 'La respuesta del modelo es muy lenta — ¿es esto normal?',
              a: 'En hardware solo con CPU, 8-20 tokens/seg es normal para un modelo 7B. Cada token equivale aproximadamente a 0,75 palabras. A 10 tokens/seg, una respuesta de 100 palabras tarda unos 13 segundos. Para acelerar la inferencia, usa un modelo más pequeño (3B en lugar de 8B), activa la descarga a GPU si tienes una compatible, o usa el nivel de cuantización Q4_K_M que es la configuración más rápida habitual.',
            },
            {
              q: '¿Puedo ejecutar dos modelos al mismo tiempo?',
              a: 'Ollama puede mantener varios modelos cargados simultáneamente si tienes suficiente RAM. Por defecto, Ollama descarga un modelo después de 5 minutos de inactividad. Puedes cambiar esto con la variable de entorno OLLAMA_KEEP_ALIVE. Ejecutar dos modelos 7B simultáneamente requiere ~16 GB de RAM.',
            },
            {
              q: '¿Cómo detengo Ollama para que no se ejecute en segundo plano?',
              a: 'En macOS: haz clic en el ícono de llama en la barra de menú y selecciona Salir. En Linux: ejecuta `systemctl stop ollama`. En Windows: haz clic derecho en el ícono de la bandeja del sistema y selecciona Salir. Para evitar que Ollama arranque al iniciar sesión, elimínalo de tus elementos de inicio.',
            },
            {
              q: '¿Cuál es la forma más fácil de ejecutar un LLM local por primera vez?',
              a: 'Instala Ollama (ollama.com), ejecuta `ollama pull llama3.2:3b` y luego `ollama run llama3.2:3b`. Eso es todo. Tres comandos, 2-5 minutos y tienes un modelo de IA funcionando en tu máquina sin necesidad de internet después de la descarga inicial.',
            },
            {
              q: '¿Cómo sé si mi LLM local está funcionando correctamente?',
              a: 'Ejecuta `ollama ps` en el terminal. Si el modelo está en ejecución, aparecerá en la lista con su nombre, tamaño y uso de memoria. Envíale un prompt simple como "¿Cuánto es 2+2?" — si responde "4", el modelo está funcionando correctamente.',
            },
            {
              q: '¿Mi computadora necesita una GPU para ejecutar un LLM local?',
              a: 'No. Los LLM locales se ejecutan en CPU. Una GPU hace la inferencia 5-10 veces más rápida, pero solo con CPU está bien para aprender y para muchos casos de uso reales. Los laptops modernos con Apple M1/M2, AMD Ryzen o Intel de 12.ª generación pueden ejecutar modelos 3B-7B a velocidades razonables (10-30 tokens/seg).',
            },
            {
              q: '¿Cuánto espacio en disco ocupa un LLM local?',
              a: '`llama3.2:1b` ocupa 1,3 GB, `llama3.2:3b` ocupa 2 GB, `llama3.1:8b` ocupa 4,7 GB. Estos son los tamaños comprimidos tal como los almacena Ollama. Después de cargarlos en RAM para la inferencia, los tamaños difieren (consulta [Cuánta VRAM para LLM local](/es/local-llms/how-much-vram-local-llm) para más detalles).',
            },
            {
              q: '¿Puedo usar mi LLM local sin conexión a internet?',
              a: 'Sí, completamente. Descarga el modelo una vez con Ollama (requiere internet) y luego ejecútalo localmente para siempre sin internet. Perfecto para redes privadas, aviones o entornos completamente sin conexión.',
            },
            {
              q: '¿En qué se diferencia un LLM local de ChatGPT?',
              a: 'ChatGPT se ejecuta en los servidores de Anthropic. Los LLM locales se ejecutan en tu máquina. Local = cero datos salen de tu dispositivo, privacidad total, sin costos de API. ChatGPT = mejor calidad en tareas complejas, requiere internet y una suscripción de pago. Ambos tienen ventajas y desventajas.',
            },
            {
              q: '¿Cuál es el mejor primer modelo para probar con Ollama?',
              a: '`ollama pull llama3.2:3b` — pesa 2 GB, funciona en cualquier laptop moderno, produce respuestas competentes y es el punto de partida recomendado por Ollama. Después de probarlo, consulta [Mejores modelos LLM locales para principiantes](/es/local-llms/best-beginner-local-llm-models) para alternativas según tu hardware.',
            },
          ],
        },
        nextSteps: {
          title: 'Próximos pasos después de tu primera ejecución',
          content: 'Ahora que tienes un LLM local funcionando, explora lo que puede hacer. Para entender qué modelos rinden mejor con tu hardware, consulta [Mejores modelos LLM locales para principiantes](/es/local-llms/best-beginner-local-llm-models). Para consejos de rendimiento específicos para laptops, consulta [Cómo ejecutar LLM locales en un laptop](/es/local-llms/local-llm-on-laptop). Para mejores prácticas de privacidad y seguridad, consulta la [Lista de verificación de seguridad y privacidad de LLM local](/es/local-llms/local-llm-security-privacy-checklist).',
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '[**Biblioteca de modelos de Ollama**](https://ollama.com/library) -- Lista oficial de modelos descargables y sus especificaciones',
            '[**Repositorio de Ollama en GitHub**](https://github.com/ollama/ollama) -- Código fuente abierto, documentación y seguimiento de problemas',
            '[**Ficha del modelo Meta Llama 3.2**](https://llama.meta.com/) -- Especificaciones oficiales, datos de entrenamiento y benchmarks de rendimiento',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Errores comunes después de tu primera ejecución',
          items: [
            'Confundir el conteo de tokens con la velocidad — un modelo 7B que genera 100 tokens a 20 tokens/seg tarda 5 segundos, no es instantáneo.',
            'Ejecutar la inferencia mientras el sistema está ocupado con otras tareas, reduciendo significativamente los tokens/seg efectivos.',
            'No verificar los límites de la ventana de contexto — la mayoría de los modelos para principiantes soportan 2K-8K tokens, no los 100K+ de los modelos de frontera.',
            'Esperar respuestas instantáneas en la primera ejecución — la primera respuesta incluye el tiempo de carga del modelo (5-30 segundos). Las respuestas posteriores en la misma sesión son 2-5 veces más rápidas.',
            'Usar la etiqueta de modelo incorrecta — `llama3.1:8b-text` es el modo de completado de texto base y producirá bucles/repeticiones sin fin. Usa etiquetas `-instruct` como `llama3.1:8b-instruct` para chat.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) -- Instalación y configuración',
            '[Cómo instalar LM Studio](/es/local-llms/how-to-install-lm-studio) -- Alternativa con GUI',
            '[Mejores modelos LLM locales para principiantes](/es/local-llms/best-beginner-local-llm-models) -- Recomendaciones de modelos según tu hardware',
            '[¿Qué son los LLM locales?](/es/local-llms/what-are-local-llms) -- Conceptos básicos y cómo funcionan',
            '[Solución de problemas de configuración de LLM local](/es/local-llms/troubleshooting-local-llm-setup) -- Soluciona inferencia lenta, GPU no detectada y errores comunes',
            '[API compatible con OpenAI para LLM local](/es/local-llms/local-llm-openai-compatible-api) -- Conecta Ollama en ejecución a Python y otras aplicaciones',
            'Tu primer LLM local está en ejecución. Ahora aprende a generar prompts de forma efectiva: [qué es la ingeniería de prompts](https://www.promptquorum.com/es/prompt-engineering/what-is-prompt-engineering) enseña los fundamentos.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Ejecuta tu primer LLM local en 10 minutos (paso a paso)',
        'description': 'Ejecuta tu primer LLM local en menos de 10 minutos con Ollama: instala, descarga un modelo 3B y obtén una respuesta — sin API key ni cuenta después de la descarga.',
        'url': 'https://www.promptquorum.com/es/local-llms/run-first-local-llm',
        'inLanguage': 'es',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Beginner',
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'Llama 3.2' },
          { '@type': 'Thing', 'name': 'Local LLM' },
          { '@type': 'Thing', 'name': 'Configuración de modelos de IA' },
          { '@type': 'Thing', 'name': 'Comandos de terminal' }
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways']
        }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Cómo ejecutar tu primer LLM local en 10 minutos',
        'inLanguage': 'es',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Instalar Ollama', 'text': 'Descarga e instala Ollama desde ollama.ai. Verifica la instalación con `ollama --version`.' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Elegir tu primer modelo', 'text': 'Selecciona un modelo para principiantes según tu hardware: Llama 3.2 3B (4 GB de RAM), Phi 2.5 (8 GB) o Mistral 7B (16 GB).' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Descargar el modelo', 'text': 'Ejecuta `ollama pull llama3.2:3b` para descargar el modelo. Espera a que se complete.' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Ejecutar y chatear', 'text': 'Ejecuta `ollama run llama3.2:3b` para iniciar el modelo y empezar a chatear en tu terminal.' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Probar con tu primer prompt', 'text': 'Escribe tu primer prompt (p. ej., "Hola, ¿qué es un LLM?") y presiona Enter. Observa el tiempo de respuesta y la calidad.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'es',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'La respuesta del modelo es muy lenta — ¿es esto normal?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'En hardware solo con CPU, 8-20 tokens/seg es normal para un modelo 7B. Cada token equivale aproximadamente a 0,75 palabras. A 10 tokens/seg, una respuesta de 100 palabras tarda unos 13 segundos. Para acelerar la inferencia, usa un modelo más pequeño (3B en lugar de 8B), activa la descarga a GPU si tienes una compatible, o usa el nivel de cuantización Q4_K_M que es la configuración más rápida habitual.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo ejecutar dos modelos al mismo tiempo?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ollama puede mantener varios modelos cargados simultáneamente si tienes suficiente RAM. Por defecto, Ollama descarga un modelo después de 5 minutos de inactividad. Puedes cambiar esto con la variable de entorno OLLAMA_KEEP_ALIVE. Ejecutar dos modelos 7B simultáneamente requiere ~16 GB de RAM.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo detengo Ollama para que no se ejecute en segundo plano?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'En macOS: haz clic en el ícono de llama en la barra de menú y selecciona Salir. En Linux: ejecuta `systemctl stop ollama`. En Windows: haz clic derecho en el ícono de la bandeja del sistema y selecciona Salir. Para evitar que Ollama arranque al iniciar sesión, elimínalo de tus elementos de inicio.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la forma más fácil de ejecutar un LLM local por primera vez?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Instala Ollama (ollama.com), ejecuta `ollama pull llama3.2:3b` y luego `ollama run llama3.2:3b`. Eso es todo. Tres comandos, 2-5 minutos y tienes un modelo de IA funcionando en tu máquina sin necesidad de internet después de la descarga inicial.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo sé si mi LLM local está funcionando correctamente?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ejecuta `ollama ps` en el terminal. Si el modelo está en ejecución, aparecerá en la lista con su nombre, tamaño y uso de memoria. Envíale un prompt simple como "¿Cuánto es 2+2?" — si responde "4", el modelo está funcionando correctamente.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Mi computadora necesita una GPU para ejecutar un LLM local?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Los LLM locales se ejecutan en CPU. Una GPU hace la inferencia 5-10 veces más rápida, pero solo con CPU está bien para aprender y para muchos casos de uso reales. Los laptops modernos con Apple M1/M2, AMD Ryzen o Intel de 12.ª generación pueden ejecutar modelos 3B-7B a velocidades razonables (10-30 tokens/seg).'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuánto espacio en disco ocupa un LLM local?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`llama3.2:1b` ocupa 1,3 GB, `llama3.2:3b` ocupa 2 GB, `llama3.1:8b` ocupa 4,7 GB. Estos son los tamaños comprimidos tal como los almacena Ollama. Después de cargarlos en RAM para la inferencia, los tamaños difieren.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo usar mi LLM local sin conexión a internet?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, completamente. Descarga el modelo una vez con Ollama (requiere internet) y luego ejecútalo localmente para siempre sin internet. Perfecto para redes privadas, aviones o entornos completamente sin conexión.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿En qué se diferencia un LLM local de ChatGPT?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ChatGPT se ejecuta en los servidores de Anthropic. Los LLM locales se ejecutan en tu máquina. Local = cero datos salen de tu dispositivo, privacidad total, sin costos de API. ChatGPT = mejor calidad en tareas complejas, requiere internet y una suscripción de pago. Ambos tienen ventajas y desventajas.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es el mejor primer modelo para probar con Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`ollama pull llama3.2:3b` — pesa 2 GB, funciona en cualquier laptop moderno, produce respuestas competentes y es el punto de partida recomendado por Ollama. Después de probarlo, consulta los mejores modelos LLM locales para principiantes para alternativas según tu hardware.'
            }
          },
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'inLanguage': 'es',
        'name': 'Mejores primeros modelos LLM local por RAM',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'llama3.2:1b', 'description': '4 GB de RAM. Descarga de 1,3 GB. El modelo Llama más pequeño que resulta útil.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.2 3B', 'description': '8 GB de RAM. Descarga de 2 GB. Mejor relación calidad-tamaño para principiantes.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Llama 3.1 8B', 'description': '8-16 GB de RAM. Descarga de 4,7 GB. Alto rendimiento de propósito general.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'mistral:7b o qwen2.5:7b', 'description': '16+ GB de RAM. Descarga de 4-5 GB. Calidad competitiva.' },
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
        'url': 'https://www.promptquorum.com/de/local-llms/run-first-local-llm',
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
        'url': 'https://www.promptquorum.com/fr/local-llms/run-first-local-llm',
        'inLanguage': 'fr',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' }
      },
      sections: {
        tldr: { id: 'key-takeaways', isTldr: true, items: ['Le chemin le plus rapide : installez Ollama → exécutez `ollama run llama3.2` → discutez dans votre terminal. Durée totale : moins de 5 minutes avec une connexion rapide.', 'Pour les machines avec 8 Go de RAM : commencez avec `llama3.2:3b` (2 Go de téléchargement) ou `phi4-mini` (2,3 Go). Les deux fonctionnent sur n\'importe quel laptop moderne.', 'Attendez 15-40 tokens/sec sur CPU, 60-120 tokens/sec sur un GPU milieu de gamme ou Apple Silicon.', 'Les premières réponses peuvent sembler plus lentes que les APIs cloud -- les modèles locaux échangent vitesse contre confidentialité et coût zéro.', 'Après le téléchargement initial du modèle, tout fonctionne hors ligne. Aucune connexion Internet requise pour les sessions suivantes.'] },
        step1: { title: 'Étape 1 : Installer Ollama', content: 'Ollama est le moyen le plus rapide d\'exécuter un LLM local. Installez-le avec une commande ou un téléchargement de 2 minutes :', codeBlock: '# macOS (Homebrew)\nbrew install ollama\n\n# Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Windows: download installer from ollama.com/download', codeLanguage: 'bash' },
        step1Detail: { title: 'Vérifier qu\'Ollama fonctionne', content: 'Après l\'installation, confirmez qu\'Ollama est actif :', codeBlock: 'curl http://localhost:11434\n# Expected output: Ollama is running', codeLanguage: 'bash' },
        step2: { title: 'Étape 2 : Choisir votre premier modèle', content: 'Choisissez un modèle en fonction de votre RAM disponible. En cas de doute, commencez avec `llama3.2:3b` -- il fonctionne sur toute machine avec 4 Go de RAM et produit des résultats utiles :', rows: [{ 'Votre RAM': '4 Go', 'Modèle recommandé': 'llama3.2:1b', 'Taille du téléchargement': '~1,3 Go', 'Pourquoi': 'Plus petit modèle Llama utilisable' }, { 'Votre RAM': '8 Go', 'Modèle recommandé': 'Llama 3.2 3B', 'Taille du téléchargement': '~2 Go', 'Pourquoi': 'Meilleur rapport qualité/taille pour débutants' }, { 'Votre RAM': '8-16 Go', 'Modèle recommandé': 'Llama 3.1 8B', 'Taille du téléchargement': '~4,7 Go', 'Pourquoi': 'Modèle polyvalent performant' }, { 'Votre RAM': '16+ Go', 'Modèle recommandé': 'mistral:7b ou qwen2.5:7b', 'Taille du téléchargement': '~4-5 Go', 'Pourquoi': 'Qualité compétitive, inférence rapide' }], columns: ['Votre RAM', 'Modèle recommandé', 'Taille du téléchargement', 'Pourquoi'] },
        step3: { title: 'Étape 3 : Télécharger le modèle', content: 'Téléchargez le modèle avec `ollama pull`. Le modèle est enregistré dans `~/.ollama/models` et ne doit être téléchargé qu\'une seule fois :', codeBlock: 'ollama pull llama3.2\n\n# Or pull a specific size variant\nollama pull llama3.2:3b\nollama pull llama3.1:8b', codeLanguage: 'bash' },
        step3Progress: { title: 'À quoi ressemble le téléchargement ?', content: 'Ollama affiche la progression du téléchargement dans le terminal. Un modèle `llama3.2:3b` prend 2-5 minutes sur une connexion haut débit classique. Le modèle est stocké compressé -- les 2 Go téléchargés s\'expandent à environ 2,3 Go sur disque.', codeBlock: 'pulling manifest\npulling 966de95ca8dc... 100% ▕████████████████▏ 1.9 GB\npulling 9f436a92eb8b... 100% ▕████████████████▏   42 B\nverifying sha256 digest\nwriting manifest\nsuccess', codeLanguage: 'text' },
        step4: { id: 'step-4-run-and-chat', title: 'Étape 4 : Lancer le modèle et envoyer votre premier prompt', content: 'Démarrez une session de chat interactive :', codeBlock: 'ollama run llama3.2\n\n# Ollama loads the model and shows a prompt:\n>>> Send a message (/? for help)', codeLanguage: 'bash' },
        step4Chat: { title: 'Votre première conversation', content: 'Tapez un message et appuyez sur Entrée. Le modèle diffuse sa réponse token par token :', codeBlock: '>>> What are local LLMs?\n\nLocal LLMs (large language models) are AI models that run entirely\non your own hardware -- your laptop, desktop, or server. Unlike cloud\nservices such as ChatGPT or Claude, local LLMs process everything\nlocally with no data sent to external servers...', codeLanguage: 'text' },
        whatToExpect: { id: 'what-to-expect', title: 'À quoi s\'attendre : vitesse, qualité et limitations', content: ['**Vitesse** variable selon le matériel. Sur un laptop 2023 sans GPU : attendez 15-25 tokens/sec pour un modèle 3B et 8-15 tokens/sec pour un 8B. Sur Apple M3 Pro : 50-80 tokens/sec pour 8B. Sur NVIDIA RTX 4070 Ti : 90-130 tokens/sec pour 8B.', '**Qualité** de `llama3.2:3b` nettement inférieure à GPT-4o ou Claude Opus 4.7 sur des tâches complexes. Pour la synthèse, les Q&A simples et l\'explication de code, la sortie est utile. Pour le raisonnement multi-étapes ou la rédaction longue, passez à un modèle 8B ou 13B.', '**Fenêtre de contexte** : `llama3.2:3b` supporte 128K tokens par défaut dans Ollama. En pratique, la qualité se dégrade après ~16K tokens dans une seule conversation.', '**Délai de première réponse** : la première réponse après `ollama run` inclut le temps de chargement du modèle (5-30 secondes). Les réponses suivantes dans la même session sont plus rapides.'] },
        beyondTerminal: { id: 'beyond-the-terminal', title: 'Comment utiliser votre LLM local au-delà du terminal ?', content: 'Le chat terminal Ollama est utile pour les tests, mais la plupart des cas d\'usage réels nécessitent une meilleure interface :', items: ['**Open WebUI** : une interface web complète pour Ollama. Lancez-la avec Docker : `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`. Accès sur http://localhost:3000.', '**LM Studio** : si vous préférez une interface desktop, [Comment installer LM Studio](/fr/local-llms/how-to-install-lm-studio) couvre la configuration complète.', '**Intégration API** : l\'API Ollama sur `localhost:11434` est compatible avec le SDK OpenAI. Toute application acceptant une URL de base OpenAI peut se connecter à votre modèle local.', '**VS Code / Cursor** : des extensions comme Continue.dev se connectent à Ollama et fournissent une assistance de codage IA locale directement dans votre éditeur.'] },
        regionalContext: { id: 'regional-context', title: 'Lancer votre premier LLM local : contexte régional', content: ['**UE / RGPD** : exécuter un LLM local avec Ollama signifie qu\'aucune donnée de prompt, contexte ou sortie ne quitte votre machine -- les mécanismes de transfert RGPD Article 46 ne s\'appliquent pas. Pour les professionnels européens traitant des données personnelles, c\'est l\'alternative préservant la confidentialité aux APIs cloud. Votre premier modèle local (llama3.2:3b) utilise 2 Go de disque, génère zéro appel API externe, et satisfait les directives de minimisation des données BSI allemandes par conception.', '**Japon (METI)** : les directives de gouvernance IA METI exigent de documenter où s\'effectue l\'inférence IA. Votre première configuration Ollama crée un environnement local complet et auditable.', '**Chine** : pour les flux de travail en chinois, remplacez llama3.2:3b par qwen2.5:3b comme premier modèle : `ollama pull qwen2.5:3b`. Qwen2.5 traite le texte chinois 30-40% plus efficacement en tokens que Llama.'] },
        faqSection: { id: 'faq', title: 'Questions fréquentes sur votre premier LLM local', faqs: [{ q: 'La réponse du modèle est très lente -- est-ce normal ?', a: 'Sur un matériel CPU uniquement, 8-20 tokens/sec est normal pour un modèle 7B. Chaque token représente environ 0,75 mot. À 10 tokens/sec, une réponse de 100 mots prend environ 13 secondes. Pour accélérer l\'inférence, utilisez un modèle plus petit (3B au lieu de 8B), activez le déchargement GPU si disponible, ou utilisez le niveau de quantification Q4_K_M qui est le paramètre commun le plus rapide.' }, { q: 'Puis-je exécuter deux modèles en même temps ?', a: 'Ollama peut garder plusieurs modèles chargés simultanément si vous avez assez de RAM. Par défaut, Ollama décharge un modèle après 5 minutes d\'inactivité. Vous pouvez changer cela avec la variable d\'environnement OLLAMA_KEEP_ALIVE. L\'exécution de deux modèles 7B simultanément nécessite ~16 Go de RAM.' }, { q: 'Comment arrêter Ollama en arrière-plan ?', a: 'Sur macOS : cliquez sur l\'icône llama dans la barre de menu et sélectionnez Quitter. Sur Linux : exécutez `systemctl stop ollama`. Sur Windows : clic droit sur l\'icône dans la barre système et sélectionnez Quitter.' }, { q: 'Quelle est la façon la plus simple d\'exécuter un LLM local pour la première fois ?', a: 'Installez Ollama (ollama.com), exécutez `ollama pull llama3.2:3b`, puis `ollama run llama3.2:3b`. C\'est tout. Trois commandes, 2-5 minutes, et vous avez un modèle IA fonctionnel sur votre machine.' }, { q: 'Comment savoir si mon LLM local fonctionne correctement ?', a: 'Exécutez `ollama ps` dans le terminal. Si le modèle fonctionne, il apparaîtra dans la liste avec son nom, sa taille et son utilisation mémoire. Envoyez un prompt simple comme "Combien font 2+2 ?" -- si la réponse est "4", le modèle fonctionne correctement.' }, { q: 'Mon ordinateur a-t-il besoin d\'un GPU pour exécuter un LLM local ?', a: 'Non. Les LLMs locaux s\'exécutent sur CPU. Un GPU rend l\'inférence 5-10× plus rapide, mais CPU seul convient pour l\'apprentissage et beaucoup de cas d\'usage réels. Les laptops modernes avec Apple M1/M2, AMD Ryzen ou Intel 12e génération peuvent exécuter des modèles 3B-7B à des vitesses raisonnables (10-30 tokens/sec).' }, { q: 'Combien d\'espace disque occupe un LLM local ?', a: '`llama3.2:1b` fait 1,3 Go, `llama3.2:3b` fait 2 Go, `llama3.1:8b` fait 4,7 Go. Ce sont les tailles compressées telles que stockées par Ollama.' }, { q: 'Puis-je utiliser mon LLM local sans connexion Internet ?', a: 'Oui, complètement. Téléchargez le modèle une fois avec Ollama (nécessite Internet), puis exécutez en local pour toujours sans Internet. Parfait pour les réseaux privés, les avions ou les environnements totalement hors ligne.' }, { q: 'En quoi un LLM local diffère-t-il de ChatGPT ?', a: 'ChatGPT fonctionne sur les serveurs d\'Anthropic. Les LLMs locaux fonctionnent sur votre machine. Local = zéro donnée quitte votre appareil, pleine confidentialité, aucun coût API. ChatGPT = meilleure qualité sur les tâches complexes, nécessite Internet et un abonnement payant.' }, { q: 'Quel est le meilleur premier modèle à essayer avec Ollama ?', a: '`ollama pull llama3.2:3b` -- il fait 2 Go, fonctionne sur n\'importe quel laptop moderne, produit des réponses compétentes, et est le point de départ recommandé par Ollama.' }] },
        nextSteps: { title: 'Prochaines étapes après votre premier essai', content: 'Maintenant que vous avez un LLM local fonctionnel, explorez ce qu\'il peut faire. Pour comprendre quels modèles fonctionnent le mieux pour votre matériel, consultez [Meilleurs modèles LLM locaux pour débutants](/fr/local-llms/best-beginner-local-llm-models). Pour les conseils de performance spécifiques aux laptops, voir [Comment exécuter des LLMs locaux sur un laptop](/fr/local-llms/local-llm-on-laptop).' },
        sources: { id: 'sources', title: 'Sources', items: ['[**Bibliothèque de modèles Ollama**](https://ollama.com/library) -- Liste officielle des modèles téléchargeables et leurs spécifications', '[**Dépôt GitHub Ollama**](https://github.com/ollama/ollama) -- Code source ouvert, documentation et suivi des problèmes', '[**Fiche modèle Meta Llama 3.2**](https://llama.meta.com/) -- Spécifications officielles, données d\'entraînement et benchmarks de performance'] },
        commonMistakes: { id: 'common-mistakes', title: 'Erreurs courantes après votre premier essai', items: ['Confondre nombre de tokens et vitesse -- un modèle 7B générant 100 tokens à 20 tokens/sec prend 5 secondes, pas instantané.', 'Exécuter l\'inférence pendant que le système est occupé par d\'autres tâches, réduisant significativement les tokens/sec effectifs.', 'Ne pas vérifier les limites de fenêtre de contexte -- la plupart des modèles débutants supportent 2K-8K tokens, pas les 100K+ des modèles frontier.', 'Attendre des réponses instantanées au premier lancement -- la première réponse inclut le temps de chargement du modèle (5-30 secondes). Les réponses suivantes sont 2-5× plus rapides.', 'Utiliser le mauvais tag de modèle -- `llama3.1:8b-text` est le mode completion texte de base et bouclera/répétera indéfiniment. Utilisez les tags `-instruct` comme `llama3.1:8b-instruct` pour le chat.'] },
        relatedReading: { id: 'related-reading', title: 'Lectures complémentaires', items: ['[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) -- Installation et configuration', '[Comment installer LM Studio](/fr/local-llms/how-to-install-lm-studio) -- Alternative GUI', '[Meilleurs modèles LLM locaux pour débutants](/fr/local-llms/best-beginner-local-llm-models) -- Recommandations de modèles selon votre matériel', '[Que sont les LLMs locaux ?](/fr/local-llms/what-are-local-llms) -- Concepts de base', '[Dépannage de l\'installation LLM local](/fr/local-llms/troubleshooting-local-llm-setup) -- Corriger l\'inférence lente et les erreurs courantes', '[API compatible OpenAI pour LLM local](/fr/local-llms/local-llm-openai-compatible-api) -- Connecter Ollama à Python et d\'autres applications', 'Votre premier LLM local fonctionne. Apprenez maintenant à le prompter efficacement : [qu\'est-ce que le prompt engineering](https://www.promptquorum.com/fr/prompt-engineering/what-is-prompt-engineering) enseigne les bases.'] },
      },
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
        'url': 'https://www.promptquorum.com/ja/local-llms/run-first-local-llm',
        'inLanguage': 'ja',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' }
      },
      sections: {
        tldr: { id: 'key-takeaways', isTldr: true, items: ['最速の手順：Ollamaをインストール → `ollama run llama3.2`を実行 → ターミナルでチャット。高速接続なら合計5分以内。', '8 GBのRAMマシン：`llama3.2:3b`（2 GBのダウンロード）または`phi4-mini`（2.3 GB）から始めてください。どちらも最新のノートパソコンで動作します。', 'CPUで15-40トークン/秒、ミッドレンジGPUまたはApple Siliconで60-120トークン/秒が期待できます。', '最初のレスポンスはクラウドAPIより遅く感じる場合があります。ローカルモデルは速度をプライバシーとゼロコストと交換します。', '初期モデルのダウンロード後は、すべてオフラインで動作します。次回以降のセッションにインターネット接続は不要です。'] },
        step1: { title: 'ステップ1：Ollamaをインストール', content: 'Ollamaはローカルで動作するLLMを実行する最速の方法です。1つのコマンドまたは2分のダウンロードでインストールできます：', codeBlock: '# macOS (Homebrew)\nbrew install ollama\n\n# Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Windows: download installer from ollama.com/download', codeLanguage: 'bash' },
        step1Detail: { title: 'Ollamaが動作していることを確認', content: 'インストール後、Ollamaがアクティブであることを確認します：', codeBlock: 'curl http://localhost:11434\n# Expected output: Ollama is running', codeLanguage: 'bash' },
        step2: { title: 'ステップ2：最初のモデルを選択', content: '利用可能なRAMに基づいてモデルを選択します。迷った場合は`llama3.2:3b`から始めてください。4 GBのRAMを搭載したあらゆるマシンで動作し、有用な出力を生成します：', rows: [{ 'お使いのRAM': '4 GB', '推奨モデル': 'llama3.2:1b', 'ダウンロードサイズ': '約1.3 GB', '理由': '最小限の使えるLlamaモデル' }, { 'お使いのRAM': '8 GB', '推奨モデル': 'Llama 3.2 3B', 'ダウンロードサイズ': '約2 GB', '理由': '初心者向けの最高の品質/サイズ比' }, { 'お使いのRAM': '8-16 GB', '推奨モデル': 'Llama 3.1 8B', 'ダウンロードサイズ': '約4.7 GB', '理由': '強力な汎用モデル' }, { 'お使いのRAM': '16 GB以上', '推奨モデル': 'mistral:7b または qwen2.5:7b', 'ダウンロードサイズ': '約4-5 GB', '理由': '競争力のある品質、高速な推論' }], columns: ['お使いのRAM', '推奨モデル', 'ダウンロードサイズ', '理由'] },
        step3: { title: 'ステップ3：モデルをダウンロード', content: '`ollama pull`でモデルをダウンロードします。モデルは`~/.ollama/models`に保存され、一度だけダウンロードすれば使えます：', codeBlock: 'ollama pull llama3.2\n\n# Or pull a specific size variant\nollama pull llama3.2:3b\nollama pull llama3.1:8b', codeLanguage: 'bash' },
        step3Progress: { title: 'ダウンロードの様子', content: 'Ollamaはターミナルにダウンロードの進行状況を表示します。`llama3.2:3b`モデルは一般的なブロードバンド接続で2-5分かかります。モデルは圧縮状態で保存されます。2 GBのダウンロードがディスク上で約2.3 GBに展開されます。', codeBlock: 'pulling manifest\npulling 966de95ca8dc... 100% ▕████████████████▏ 1.9 GB\npulling 9f436a92eb8b... 100% ▕████████████████▏   42 B\nverifying sha256 digest\nwriting manifest\nsuccess', codeLanguage: 'text' },
        step4: { id: 'step-4-run-and-chat', title: 'ステップ4：モデルを起動して最初のプロンプトを送信', content: 'インタラクティブなチャットセッションを開始します：', codeBlock: 'ollama run llama3.2\n\n# Ollama loads the model and shows a prompt:\n>>> Send a message (/? for help)', codeLanguage: 'bash' },
        step4Chat: { title: '最初の会話', content: 'メッセージを入力してEnterキーを押します。モデルはトークンごとにレスポンスをストリーミングします：', codeBlock: '>>> What are local LLMs?\n\nLocal LLMs (large language models) are AI models that run entirely\non your own hardware -- your laptop, desktop, or server. Unlike cloud\nservices such as ChatGPT or Claude, local LLMs process everything\nlocally with no data sent to external servers...', codeLanguage: 'text' },
        whatToExpect: { id: 'what-to-expect', title: '期待できること：速度、品質、制限', content: ['**速度**はハードウェアによって異なります。2023年のラップトップ（GPUなし）：3Bモデルで15-25トークン/秒、8Bモデルで8-15トークン/秒が期待できます。Apple M3 Pro：8Bで50-80トークン/秒。NVIDIA RTX 4070 Ti：8Bで90-130トークン/秒。', '**品質**は`llama3.2:3b`では複雑なタスクにおいてGPT-4oやClaude Opus 4.7よりも明らかに低くなります。要約、シンプルな質疑応答、コードの説明には有用です。多段階の推論や長文執筆には8Bまたは13Bモデルへのアップグレードを検討してください。', '**コンテキストウィンドウ**：`llama3.2:3b`はOllamaでデフォルトで128Kトークンをサポートします。実際には、1回の会話で約16Kトークン後に品質が低下します。', '**最初のレスポンス遅延**：`ollama run`後の最初のレスポンスにはモデルのロード時間（5-30秒）が含まれます。同じセッション内の後続のレスポンスは高速になります。'] },
        beyondTerminal: { id: 'beyond-the-terminal', title: 'ターミナル以外でローカルLLMを使う方法', content: 'Ollamaのターミナルチャットはテスト目的に有用ですが、実際のユースケースではより良いインターフェースが必要です：', items: ['**Open WebUI**：Ollama用の高機能Webインターフェース。Dockerで起動：`docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`。http://localhost:3000でアクセス。', '**LM Studio**：デスクトップGUIを好む方は、[LM Studioのインストール方法](/ja/local-llms/how-to-install-lm-studio)で完全なセットアップを確認できます。', '**API連携**：`localhost:11434`のOllama APIはOpenAI SDKと互換性があります。OpenAIのベースURLを受け入れるアプリケーションはすべてローカルモデルに接続できます。', '**VS Code / Cursor**：Continue.devなどの拡張機能がOllamaに接続し、エディタ内でローカルAIコーディング支援を提供します。'] },
        regionalContext: { id: 'regional-context', title: '初めてのローカルLLM：地域別コンテキスト', content: ['**EU / GDPR**：OllamaでローカルLLMを実行すると、プロンプトデータ、コンテキスト、出力のいずれもマシンから外に出ません。個人データを扱うEUの専門家にとって、クラウドAI APIのプライバシー保護代替手段となります。', '**日本（METI）**：METI AIガバナンスガイドラインでは、AI推論が行われる場所を文書化することが求められています。最初のOllamaセットアップは完全で監査可能なローカル環境を作成します。モデルファイルは`~/.ollama/models`にバージョン固有のファイル名で保存され、`ollama ps`で推論を検証できます。METIコンプライアンス目的で正確なモデルバージョンとハードウェアを文書化できます。', '**中国**：中国語のワークフローには、最初のモデルとしてqwen2.5:3bをllama3.2:3bの代わりに使用してください：`ollama pull qwen2.5:3b`。Qwen2.5はLlamaと同じハードウェア階層でより良い結果を生成します。'] },
        faqSection: { id: 'faq', title: 'ローカルLLM初回起動時のよくある質問', faqs: [{ q: 'モデルのレスポンスが非常に遅い -- これは正常ですか？', a: 'CPU専用ハードウェアでは、7Bモデルの場合8-20トークン/秒は正常です。各トークンは約0.75単語に相当します。10トークン/秒で100単語のレスポンスには約13秒かかります。推論を高速化するには、より小さいモデル（8Bの代わりに3B）を使用するか、対応GPUがある場合はGPUオフロードを有効にするか、最も一般的で最速の設定であるQ4_K_M量子化レベルを使用してください。' }, { q: '2つのモデルを同時に実行できますか？', a: '十分なRAMがあれば、Ollamaは複数のモデルを同時にロードした状態に保てます。デフォルトでは、Ollamaは5分間の非活性後にモデルをアンロードします。OLLAMA_KEEP_ALIVE環境変数でこれを変更できます。2つの7Bモデルを同時に実行するには約16 GBのRAMが必要です。' }, { q: 'Ollamaをバックグラウンドで動作しないようにするには？', a: 'macOS：メニューバーのllamaアイコンをクリックして「終了」を選択。Linux：`systemctl stop ollama`を実行。Windows：システムトレイのアイコンを右クリックして「終了」を選択。' }, { q: '初めてローカルLLMを実行する最も簡単な方法は？', a: 'Ollamaをインストールし（ollama.com）、`ollama pull llama3.2:3b`を実行し、次に`ollama run llama3.2:3b`を実行します。それだけです。3つのコマンド、2-5分で、インターネット不要のAIモデルがマシン上で動作します。' }, { q: 'ローカルLLMが正常に動作しているか確認するには？', a: 'ターミナルで`ollama ps`を実行します。モデルが実行中であれば、名前、サイズ、メモリ使用量とともにリストに表示されます。「2+2は？」のような簡単なプロンプトを送って、「4」と返ってくれば正常に動作しています。' }, { q: 'ローカルLLMを実行するのにGPUは必要ですか？', a: 'いいえ。ローカルLLMはCPUで動作します。GPUは推論を5-10倍速くしますが、学習や多くの実際のユースケースにはCPU専用でも問題ありません。Apple M1/M2、AMD Ryzen、またはIntel第12世代CPUを搭載した最新のノートパソコンは3B-7Bモデルを合理的な速度（10-30トークン/秒）で実行できます。' }, { q: 'ローカルLLMはどれくらいのディスクスペースを使いますか？', a: '`llama3.2:1b`は1.3 GB、`llama3.2:3b`は2 GB、`llama3.1:8b`は4.7 GBです。これらはOllamaが保存する圧縮サイズです。' }, { q: 'インターネット接続なしでローカルLLMを使用できますか？', a: 'はい、完全に。Ollamaでモデルを一度ダウンロードし（インターネット必要）、その後は永遠にインターネットなしでローカルで実行できます。プライベートネットワーク、飛行機内、または完全なオフライン環境に最適です。' }, { q: 'ローカルLLMとChatGPTの違いは？', a: 'ChatGPTはAnthropicのサーバーで動作します。ローカルLLMはあなたのマシンで動作します。ローカル = デバイスからデータが一切出ない、完全なプライバシー、APIコストなし。ChatGPT = 複雑なタスクでより高い品質、インターネットと有料サブスクリプションが必要。' }, { q: 'Ollamaで試すべき最初のモデルは？', a: '`ollama pull llama3.2:3b` -- 2 GBで、あらゆる最新ノートパソコンで動作し、有能な回答を生成し、Ollamaが推奨するスタート地点です。' }] },
        nextSteps: { title: '最初の実行後の次のステップ', content: '動作するローカルLLMができたので、何ができるか探索しましょう。ハードウェアに最適なモデルを理解するには、[初心者向けベストローカルLLMモデル](/ja/local-llms/best-beginner-local-llm-models)をご覧ください。ノートパソコン固有のパフォーマンスについては[ノートパソコンでローカルLLMを実行する方法](/ja/local-llms/local-llm-on-laptop)をご覧ください。' },
        sources: { id: 'sources', title: '参考資料', items: ['[**Ollamaモデルライブラリ**](https://ollama.com/library) -- ダウンロード可能なモデルとその仕様の公式リスト', '[**Ollama GitHubリポジトリ**](https://github.com/ollama/ollama) -- オープンソースコード、ドキュメント、イシュートラッキング', '[**Meta Llama 3.2 モデルカード**](https://llama.meta.com/) -- 公式仕様、トレーニングデータ、パフォーマンスベンチマーク'] },
        commonMistakes: { id: 'common-mistakes', title: '最初の実行後のよくある間違い', items: ['トークン数と速度を混同する -- 20トークン/秒で100トークンを生成する7Bモデルは5秒かかります。瞬時ではありません。', '他のタスクでシステムが忙しい中で推論を実行すると、実効的なトークン/秒が大幅に低下します。', 'コンテキストウィンドウの制限を確認しない -- ほとんどの初心者向けモデルは2K-8Kトークンをサポートしており、フロンティアモデルの100K+ではありません。', '最初の実行で即時レスポンスを期待する -- 最初のレスポンスにはモデルのロード時間（5-30秒）が含まれます。同じセッション内の後続のレスポンスは2-5倍速くなります。', '間違ったモデルタグを使用する -- `llama3.1:8b-text`はベーステキスト補完モードで、無限ループ/繰り返しが発生します。チャットには`llama3.1:8b-instruct`のような`-instruct`タグを使用してください。'] },
        relatedReading: { id: 'related-reading', title: '関連資料', items: ['[Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama) -- インストールとセットアップ', '[LM Studioのインストール方法](/ja/local-llms/how-to-install-lm-studio) -- GUIの代替', '[初心者向けベストローカルLLMモデル](/ja/local-llms/best-beginner-local-llm-models) -- ハードウェアに基づくモデル推奨', '[ローカルLLMとは？](/ja/local-llms/what-are-local-llms) -- 基本概念', '[ローカルLLMセットアップのトラブルシューティング](/ja/local-llms/troubleshooting-local-llm-setup) -- 遅い推論やGPU未検出の修正', '[ローカルLLM OpenAI互換API](/ja/local-llms/local-llm-openai-compatible-api) -- OllamaをPythonやその他のアプリに接続', 'ローカルLLMが動作しました。次は効果的なプロンプトを学びましょう：[プロンプトエンジニアリングとは](https://www.promptquorum.com/ja/prompt-engineering/what-is-prompt-engineering)で基礎を学べます。'] },
      },
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
        'url': 'https://www.promptquorum.com/zh/local-llms/run-first-local-llm',
        'inLanguage': 'zh',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' }
      },
      sections: {
        tldr: { id: 'key-takeaways', isTldr: true, items: ['最快路径：安装Ollama → 运行`ollama run llama3.2` → 在终端开始聊天。网速较快时全程不超过5分钟。', '8 GB RAM机器：从`llama3.2:3b`（2 GB下载）或`phi4-mini`（2.3 GB）开始。两者均可在任何现代笔记本电脑上运行。', 'CPU上预计15-40个令牌/秒，中端GPU或Apple Silicon上预计60-120个令牌/秒。', '首次响应可能比云API慢——本地模型以速度换取隐私和零成本。', '初始模型下载后，一切都在离线状态运行。后续会话无需互联网连接。'] },
        step1: { title: '第一步：安装Ollama', content: 'Ollama是运行本地LLM的最快方式。用一条命令或2分钟下载完成安装：', codeBlock: '# macOS (Homebrew)\nbrew install ollama\n\n# Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Windows: download installer from ollama.com/download', codeLanguage: 'bash' },
        step1Detail: { title: '验证Ollama正在运行', content: '安装后，确认Ollama处于活动状态：', codeBlock: 'curl http://localhost:11434\n# Expected output: Ollama is running', codeLanguage: 'bash' },
        step2: { title: '第二步：选择您的第一个模型', content: '根据可用RAM选择模型。拿不准时，从`llama3.2:3b`开始——它可在4 GB RAM的任何机器上运行并产生有用输出：', rows: [{ '您的RAM': '4 GB', '推荐模型': 'llama3.2:1b', '下载大小': '约1.3 GB', '原因': '最小可用的Llama模型' }, { '您的RAM': '8 GB', '推荐模型': 'Llama 3.2 3B', '下载大小': '约2 GB', '原因': '初学者最佳质量/大小比' }, { '您的RAM': '8-16 GB', '推荐模型': 'Llama 3.1 8B', '下载大小': '约4.7 GB', '原因': '强大的通用模型' }, { '您的RAM': '16 GB以上', '推荐模型': 'mistral:7b 或 qwen2.5:7b', '下载大小': '约4-5 GB', '原因': '有竞争力的质量，推理速度快' }], columns: ['您的RAM', '推荐模型', '下载大小', '原因'] },
        step3: { title: '第三步：下载模型', content: '使用`ollama pull`下载模型。模型保存到`~/.ollama/models`，只需下载一次：', codeBlock: 'ollama pull llama3.2\n\n# Or pull a specific size variant\nollama pull llama3.2:3b\nollama pull llama3.1:8b', codeLanguage: 'bash' },
        step3Progress: { title: '下载过程展示', content: 'Ollama在终端显示下载进度。`llama3.2:3b`模型在典型宽带连接上需要2-5分钟。模型以压缩形式存储——2 GB的下载在磁盘上展开为约2.3 GB。', codeBlock: 'pulling manifest\npulling 966de95ca8dc... 100% ▕████████████████▏ 1.9 GB\npulling 9f436a92eb8b... 100% ▕████████████████▏   42 B\nverifying sha256 digest\nwriting manifest\nsuccess', codeLanguage: 'text' },
        step4: { id: 'step-4-run-and-chat', title: '第四步：运行模型并发送第一个提示词', content: '启动交互式聊天会话：', codeBlock: 'ollama run llama3.2\n\n# Ollama loads the model and shows a prompt:\n>>> Send a message (/? for help)', codeLanguage: 'bash' },
        step4Chat: { title: '您的第一次对话', content: '输入消息并按Enter键。模型逐个令牌流式输出响应：', codeBlock: '>>> What are local LLMs?\n\nLocal LLMs (large language models) are AI models that run entirely\non your own hardware -- your laptop, desktop, or server. Unlike cloud\nservices such as ChatGPT or Claude, local LLMs process everything\nlocally with no data sent to external servers...', codeLanguage: 'text' },
        whatToExpect: { id: 'what-to-expect', title: '预期效果：速度、质量与限制', content: ['**速度**因硬件而异。2023款笔记本电脑（无GPU）：3B模型预计15-25个令牌/秒，8B模型预计8-15个令牌/秒。Apple M3 Pro：8B模型50-80个令牌/秒。NVIDIA RTX 4070 Ti：8B模型90-130个令牌/秒。', '**质量**：`llama3.2:3b`在复杂任务上明显低于GPT-4o或Claude Opus 4.7。对于摘要、简单问答和代码解释，输出有实用价值。对于多步推理或长篇写作，升级到8B或13B模型。', '**上下文窗口**：`llama3.2:3b`在Ollama中默认支持128K令牌。实际上，单次对话超过约16K令牌后质量会下降。', '**首次响应延迟**：`ollama run`后的首次响应包含模型加载时间（5-30秒）。同一会话中的后续响应更快。'] },
        beyondTerminal: { id: 'beyond-the-terminal', title: '如何在终端之外使用本地LLM？', content: 'Ollama终端聊天适合测试，但大多数实际用例需要更好的界面：', items: ['**Open WebUI**：Ollama的全功能Web界面。用Docker运行：`docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`。访问http://localhost:3000。', '**LM Studio**：如果您更喜欢桌面GUI，[如何安装LM Studio](/zh/local-llms/how-to-install-lm-studio)涵盖完整设置。', '**API集成**：`localhost:11434`的Ollama API与OpenAI SDK兼容。任何接受OpenAI基础URL的应用程序都可以连接到本地模型。', '**VS Code / Cursor**：Continue.dev等扩展连接到Ollama，直接在编辑器中提供本地AI编码辅助。'] },
        regionalContext: { id: 'regional-context', title: '运行第一个本地LLM：地区背景', content: ['**EU / GDPR**：使用Ollama运行本地LLM意味着无提示数据、上下文或输出离开您的机器——GDPR第46条转移机制不适用。', '**日本（METI）**：METI AI治理指南要求记录AI推理发生的位置。您的第一个Ollama设置创建了完整且可审计的本地环境。', '**中国**：对于中文工作流，将llama3.2:3b替换为qwen2.5:3b作为第一个模型：`ollama pull qwen2.5:3b`。Qwen2.5处理中文文本的令牌效率比Llama高30-40%，在相同硬件层级上产生更好的结果。'] },
        faqSection: { id: 'faq', title: '运行第一个本地LLM的常见问题', faqs: [{ q: '模型响应非常慢——这正常吗？', a: '在纯CPU硬件上，7B模型8-20个令牌/秒是正常的。每个令牌约0.75个词。10个令牌/秒时，100个词的响应大约需要13秒。要加速推理，使用较小模型（3B而不是8B），如有兼容GPU则启用GPU卸载，或使用Q4_K_M量化级别（最快的常用设置）。' }, { q: '我可以同时运行两个模型吗？', a: '如果有足够的RAM，Ollama可以同时保持多个模型加载。默认情况下，Ollama在5分钟不活动后卸载模型。可通过OLLAMA_KEEP_ALIVE环境变量更改。同时运行两个7B模型需要约16 GB RAM。' }, { q: '如何停止Ollama在后台运行？', a: 'macOS：点击菜单栏中的llama图标并选择退出。Linux：运行`systemctl stop ollama`。Windows：右键单击系统托盘图标并选择退出。' }, { q: '首次运行本地LLM最简单的方法是什么？', a: '安装Ollama（ollama.com），运行`ollama pull llama3.2:3b`，然后运行`ollama run llama3.2:3b`。就这样。三条命令，2-5分钟，您就在机器上拥有了一个可用的AI模型，初始下载后无需互联网。' }, { q: '如何知道本地LLM是否正常工作？', a: '在终端运行`ollama ps`。如果模型在运行，它会在列表中显示其名称、大小和内存使用情况。发送一个简单提示词如"2+2等于几？"——如果回答"4"，模型工作正常。' }, { q: '运行本地LLM需要GPU吗？', a: '不需要。本地LLM在CPU上运行。GPU使推理速度快5-10倍，但对于学习和许多实际用例，纯CPU也完全可以。搭载Apple M1/M2、AMD Ryzen或英特尔第12代CPU的现代笔记本电脑可以以合理速度（10-30个令牌/秒）运行3B-7B模型。' }, { q: '本地LLM占用多少磁盘空间？', a: '`llama3.2:1b`为1.3 GB，`llama3.2:3b`为2 GB，`llama3.1:8b`为4.7 GB。这些是Ollama存储的压缩大小。' }, { q: '没有互联网连接可以使用本地LLM吗？', a: '可以，完全可以。用Ollama下载一次模型（需要互联网），然后永久在本地运行，完全不需要互联网。适合私人网络、飞机上或完全离线环境。' }, { q: '本地LLM与ChatGPT有何不同？', a: 'ChatGPT在Anthropic的服务器上运行。本地LLM在您的机器上运行。本地 = 零数据离开设备，完全隐私，无API费用。ChatGPT = 复杂任务质量更高，需要互联网和付费订阅。' }, { q: 'Ollama中最值得尝试的第一个模型是什么？', a: '`ollama pull llama3.2:3b`——2 GB，在任何现代笔记本电脑上运行，产生有竞争力的答案，是Ollama推荐的起点。' }] },
        nextSteps: { title: '第一次运行后的下一步', content: '现在您有了一个可用的本地LLM，探索它能做什么。要了解哪些模型最适合您的硬件，请参阅[初学者最佳本地LLM模型](/zh/local-llms/best-beginner-local-llm-models)。有关笔记本电脑专用性能技巧，请参阅[如何在笔记本电脑上运行本地LLM](/zh/local-llms/local-llm-on-laptop)。' },
        sources: { id: 'sources', title: '参考资料', items: ['[**Ollama模型库**](https://ollama.com/library) -- 可下载模型及其规格的官方列表', '[**Ollama GitHub仓库**](https://github.com/ollama/ollama) -- 开源代码、文档和问题跟踪', '[**Meta Llama 3.2模型卡**](https://llama.meta.com/) -- 官方规格、训练数据和性能基准'] },
        commonMistakes: { id: 'common-mistakes', title: '第一次运行后的常见错误', items: ['混淆令牌数和速度——7B模型以20个令牌/秒生成100个令牌需要5秒，不是即时的。', '在系统忙于其他任务时运行推理，显著降低有效令牌/秒。', '不检查上下文窗口限制——大多数初学者模型支持2K-8K令牌，而不是前沿模型的100K+。', '期望首次运行即时响应——首次响应包含模型加载时间（5-30秒）。同一会话中的后续响应快2-5倍。', '使用错误的模型标签——`llama3.1:8b-text`是基础文本补全模式，会无限循环/重复。聊天请使用`-instruct`标签如`llama3.1:8b-instruct`。'] },
        relatedReading: { id: 'related-reading', title: '相关阅读', items: ['[如何安装Ollama](/zh/local-llms/how-to-install-ollama) -- 安装和设置', '[如何安装LM Studio](/zh/local-llms/how-to-install-lm-studio) -- GUI替代方案', '[初学者最佳本地LLM模型](/zh/local-llms/best-beginner-local-llm-models) -- 基于硬件的模型推荐', '[什么是本地LLM？](/zh/local-llms/what-are-local-llms) -- 核心概念', '[本地LLM设置故障排除](/zh/local-llms/troubleshooting-local-llm-setup) -- 修复慢推理和常见错误', '[本地LLM OpenAI兼容API](/zh/local-llms/local-llm-openai-compatible-api) -- 将Ollama连接到Python和其他应用程序', '您的第一个本地LLM正在运行。现在学习如何有效地提示它：[什么是提示工程](https://www.promptquorum.com/zh/prompt-engineering/what-is-prompt-engineering)教授基础知识。'] },
      },
    },
  };
