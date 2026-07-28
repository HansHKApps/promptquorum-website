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
      heroImage: '/images/run-first-local-llm-overview-hero-en.png',
      dateModified: '2026-06-20',
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
          image: '/images/run-first-local-llm-setup-flow-en.svg',
          imageCaption: 'Install to first response in 4 steps: install Ollama (~2 min), pull llama3.2:3b (~2 GB, 2-5 min), run and chat, then a first response after 5-30 seconds of model load -- under 10 minutes total, fully offline after download.',
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
            { 'Your RAM': '8-16 GB', 'Recommended Model': 'Llama 3.3 8B', 'Download Size': '~4.7 GB', 'Why': 'Strong general-purpose model' },
            { 'Your RAM': '16+ GB', 'Recommended Model': 'mistral:7b or qwen2.5:7b', 'Download Size': '~4-5 GB', 'Why': 'Competitive quality, fast inference' },
          ],
          columns: ['Your RAM', 'Recommended Model', 'Download Size', 'Why'],
          image: '/images/run-first-local-llm-ram-model-picker-en.svg',
          imageCaption: 'First model picker by RAM: 4 GB fits llama3.2:1b (1.3 GB), 8 GB fits Llama 3.2 3B (2 GB, recommended start), 8-16 GB fits Llama 3.3 8B (4.7 GB), 16+ GB fits mistral:7b or qwen2.5:7b (4-5 GB).',
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
            '**Quality** from `llama3.2:3b` is noticeably lower than GPT-5.5 or Claude Opus 4.8 on complex tasks. For summarization, simple Q&A, and code explanation, the output is useful. For multi-step reasoning or long-form writing, upgrade to an 8B or 13B model.',
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
            '**Japan (METI)**: METI AI Governance Guidelines require documenting where AI inference occurs. Your first Ollama setup creates a complete and auditable local environment: model files stored at ~/.ollama/models with version-specific filenames, no external API dependencies, and inference verifiable via `ollama ps`. Japanese professionals running Llama or Qwen3 locally can document the exact model version and hardware for METI compliance purposes.',
            '**China**: For Chinese-language workflows, replace llama3.2:3b with qwen2.5:3b as your first model: `ollama pull qwen2.5:3b`. Qwen3 processes Chinese text 30-40% more token-efficiently than Llama, producing better results at the same hardware tier. The ollama pull and run commands are identical.',
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
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
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
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Install Ollama', 'text': 'Download and install Ollama from ollama.ai. Verify installation with `ollama --version`.' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Choose Your First Model', 'text': 'Select a beginner model based on your hardware: Llama 3.2 3B (4GB RAM), Phi 2.5 (8GB), or Mistral Small (16GB).' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Pull the Model', 'text': 'Run `ollama pull llama3.2:3b` to download the model. Wait for completion.' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Run and Chat', 'text': 'Execute `ollama run llama3.2:3b` to start the model and begin chatting in your terminal.' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Test with Your First Prompt', 'text': 'Type your first prompt (e.g., "Hello, what is an LLM?") and press Enter. Observe the response time and quality.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
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
        'name': 'Best First Local LLM Models by RAM',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'llama3.2:1b', 'description': '4 GB RAM. 1.3 GB download. Smallest usable Llama model.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.2 3B', 'description': '8 GB RAM. 2 GB download. Best quality-to-size for beginners.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Llama 3.3 8B', 'description': '8-16 GB RAM. 4.7 GB download. Strong general-purpose.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'mistral:7b or qwen2.5:7b', 'description': '16+ GB RAM. 4-5 GB download. Competitive quality.' },
        ]
      },
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'Ejecuta tu primer LLM local en 10 minutos: De la instalación a la primera respuesta',
      heroImage: '/images/run-first-local-llm-overview-hero-es.png',
      seoTitle: 'Ejecuta tu primer LLM local en 10 minutos (paso a paso)',
      intro: 'Ejecutar tu primer LLM local con Ollama tarda menos de 10 minutos. Instala Ollama, ejecuta un comando para descargar un modelo y empieza a chatear en tu terminal — sin API key, sin cuenta y sin conexión a internet después de la descarga inicial. A partir de abril de 2026, el modelo más rápido para principiantes es Llama 3.2 3B con 25-45 tokens/seg en una CPU moderna de laptop.',
      metaDescription: 'Ejecuta tu primer LLM local en 10 minutos con Ollama: instala, descarga un modelo 3B y obtén respuesta. Sin API key ni internet tras la descarga.',
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
          image: '/images/run-first-local-llm-setup-flow-en.svg',
          imageCaption: 'De la instalación a la primera respuesta en 4 pasos: instala Ollama (~2 min), descarga llama3.2:3b (~2 GB, 2-5 min), ejecuta y chatea, y recibe la primera respuesta tras 5-30 segundos de carga -- menos de 10 minutos en total, sin conexión tras la descarga.',
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
            { 'Tu RAM': '8-16 GB', 'Modelo recomendado': 'Llama 3.3 8B', 'Tamaño de descarga': '~4,7 GB', 'Por qué': 'Modelo de propósito general de alto rendimiento' },
            { 'Tu RAM': '16+ GB', 'Modelo recomendado': 'mistral:7b o qwen2.5:7b', 'Tamaño de descarga': '~4-5 GB', 'Por qué': 'Calidad competitiva, inferencia rápida' },
          ],
          columns: ['Tu RAM', 'Modelo recomendado', 'Tamaño de descarga', 'Por qué'],
          image: '/images/run-first-local-llm-ram-model-picker-en.svg',
          imageCaption: 'Selector del primer modelo por RAM: 4 GB para llama3.2:1b (1,3 GB), 8 GB para Llama 3.2 3B (2 GB, inicio recomendado), 8-16 GB para Llama 3.3 8B (4,7 GB), 16+ GB para mistral:7b o qwen2.5:7b (4-5 GB).',
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
            '**Calidad** de `llama3.2:3b` notablemente inferior a GPT-5.5 o Claude Opus 4.8 en tareas complejas. Para resúmenes, preguntas y respuestas simples y explicación de código, el resultado es útil. Para razonamiento en múltiples pasos o escritura de formato largo, actualiza a un modelo 8B o 13B.',
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
            '**Japón (METI)**: las directrices de gobernanza de IA del METI exigen documentar dónde se produce la inferencia de IA. Tu primera configuración de Ollama crea un entorno local completo y auditable: archivos de modelo almacenados en ~/.ollama/models con nombres de archivo específicos de versión, sin dependencias de API externas, e inferencia verificable vía `ollama ps`. Los profesionales japoneses que ejecuten Llama o Qwen3 localmente pueden documentar la versión exacta del modelo y el hardware para los fines de cumplimiento del METI.',
            '**China**: para flujos de trabajo en chino, reemplaza llama3.2:3b por qwen2.5:3b como primer modelo: `ollama pull qwen2.5:3b`. Qwen3 procesa texto en chino un 30-40% más eficientemente en tokens que Llama, produciendo mejores resultados en el mismo nivel de hardware. Los comandos ollama pull y run son idénticos.',
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
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
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
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Instalar Ollama', 'text': 'Descarga e instala Ollama desde ollama.ai. Verifica la instalación con `ollama --version`.' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Elegir tu primer modelo', 'text': 'Selecciona un modelo para principiantes según tu hardware: Llama 3.2 3B (4 GB de RAM), Phi 2.5 (8 GB) o Mistral Small (16 GB).' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Descargar el modelo', 'text': 'Ejecuta `ollama pull llama3.2:3b` para descargar el modelo. Espera a que se complete.' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Ejecutar y chatear', 'text': 'Ejecuta `ollama run llama3.2:3b` para iniciar el modelo y empezar a chatear en tu terminal.' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Probar con tu primer prompt', 'text': 'Escribe tu primer prompt (p. ej., "Hola, ¿qué es un LLM?") y presiona Enter. Observa el tiempo de respuesta y la calidad.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
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
        'name': 'Mejores primeros modelos LLM local por RAM',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'llama3.2:1b', 'description': '4 GB de RAM. Descarga de 1,3 GB. El modelo Llama más pequeño que resulta útil.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.2 3B', 'description': '8 GB de RAM. Descarga de 2 GB. Mejor relación calidad-tamaño para principiantes.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Llama 3.3 8B', 'description': '8-16 GB de RAM. Descarga de 4,7 GB. Alto rendimiento de propósito general.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'mistral:7b o qwen2.5:7b', 'description': '16+ GB de RAM. Descarga de 4-5 GB. Calidad competitiva.' },
        ]
      },
    },
    ar: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'شغّل أول نموذج ⁨LLM⁩ محلي في ⁨10⁩ دقائق: من التثبيت إلى أول استجابة',
      heroImage: '/images/run-first-local-llm-overview-hero-ar.png',
      seoTitle: 'تشغيل أول ⁨LLM⁩ محلي مع ⁨Ollama⁩ في ⁨10⁩ دقائق خطوة بخطوة',
      intro: 'تشغيل أول نموذج LLM محلي مع Ollama يستغرق أقل من 10 دقائق. ثبّت Ollama، ونفّذ أمرًا لتنزيل نموذج، وابدأ الدردشة في طرفيتك — بلا مفتاح API، وبلا حساب، وبلا اتصال بالإنترنت بعد التنزيل الأولي. اعتبارًا من أبريل 2026، أسرع نموذج للمبتدئين هو Llama 3.2 3B بـ 25-45 token/ثانية على CPU حديث لحاسوب محمول.',
      metaDescription: '⁨Llama 3.2 3B⁩ ينتج ⁨25⁩–⁨45 token⁩/ثانية على ⁨CPU⁩ بدون ⁨GPU⁩. ثبّت ⁨Ollama⁩، حمّل النموذج بأمر واحد، وابدأ الدردشة دون مفتاح ⁨API⁩ أو اتصال إنترنت دائم.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**تشغيل أول نموذج LLM محلي يستغرق أقل من 10 دقائق مع Ollama. ثبّت Ollama، ونفّذ أمرًا لتنزيل نموذج، وابدأ الدردشة في طرفيتك — بلا مفتاح API، وبلا حساب، وبلا اتصال بالإنترنت بعد التنزيل الأولي.**',
      audience: 'المبتدئون الذين يشغّلون أول نموذج LLM محلي على أجهزة استهلاكية',
      readTime: '7 دقائق قراءة',
      heroComponent: 'LLMImageSelector',
      educationalLevel: 'Beginner',
      primaryTerm: 'LLM محلي',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'الخطوة 1: تثبيت Ollama', anchor: '#step-1-install-ollama' },
        { label: 'الخطوة 2: اختيار أول نموذج', anchor: '#step-2-choose-your-first-model' },
        { label: 'الخطوة 3: تنزيل النموذج', anchor: '#step-3-pull-the-model' },
        { label: 'الخطوة 4: التشغيل والدردشة', anchor: '#step-4-run-and-chat' },
        { label: 'ماذا تتوقع: السرعة والجودة', anchor: '#what-to-expect' },
        { label: 'ما بعد الطرفية', anchor: '#beyond-the-terminal' },
        { label: 'السياق الإقليمي', anchor: '#regional-context' },
        { label: 'الأسئلة الشائعة', anchor: '#faq' },
        { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
        { label: 'قراءات ذات صلة', anchor: '#related-reading' },
        { label: 'المصادر', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'أسرع مسار: ثبّت Ollama ← نفّذ `ollama run llama3.2` ← دردش في طرفيتك. الوقت الإجمالي: أقل من 5 دقائق باتصال سريع.',
            'للأجهزة بسعة 8 GB من RAM: ابدأ بـ `llama3.2:3b` (تنزيل 2 GB) أو `phi4-mini` (2.3 GB). كلاهما يعمل على أي حاسوب محمول حديث.',
            'توقّع 15-40 token/ثانية على CPU و60-120 token/ثانية على بطاقة رسوم متوسطة المواصفات أو Apple Silicon.',
            'قد تبدو الاستجابات الأولى أبطأ من واجهات API السحابية — تبادل النماذج المحلية السرعة مقابل الخصوصية والتكلفة الصفرية.',
            'بعد التنزيل الأولي للنموذج، يعمل كل شيء دون اتصال. لا حاجة للإنترنت للجلسات اللاحقة.',
          ],
        },
        step1: {
          title: 'الخطوة 1: تثبيت Ollama',
          content: 'Ollama هو أسرع طريقة لتشغيل نموذج LLM محلي. ثبّته بأمر واحد أو تنزيل من دقيقتين:',
          codeBlock: '# macOS (Homebrew)\nbrew install ollama\n\n# Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Windows: download installer from ollama.com/download',
          codeLanguage: 'bash',
          image: '/images/run-first-local-llm-setup-flow-en.svg',
          imageCaption: 'من التثبيت إلى أول استجابة في 4 خطوات: ثبّت Ollama (نحو 2 دقيقة)، نزّل llama3.2:3b (نحو 2 GB، 2-5 دقائق)، شغّل ودردش، ثم استجابة أولى بعد 5-30 ثانية من تحميل النموذج -- أقل من 10 دقائق إجمالًا، ويعمل دون إنترنت بعد التنزيل.',
        },
        step1Detail: {
          title: 'تحقق من أن Ollama قيد التشغيل',
          content: 'بعد التثبيت، تأكد من أن Ollama نشط:',
          codeBlock: 'curl http://localhost:11434\n# Expected output: Ollama is running',
          codeLanguage: 'bash',
        },
        step2: {
          title: 'الخطوة 2: اختيار أول نموذج',
          content: 'اختر نموذجًا حسب RAM المتاح. إذا كنت في شك، ابدأ بـ `llama3.2:3b` — يعمل على أي جهاز بسعة 4 GB من RAM وينتج نتائج مفيدة:',
          rows: [
            { 'Tu RAM': '4 GB', 'Modelo recomendado': 'llama3.2:1b', 'Tamaño de descarga': '~1.3 GB', 'Por qué': 'أصغر نموذج Llama مفيد' },
            { 'Tu RAM': '8 GB', 'Modelo recomendado': 'Llama 3.2 3B', 'Tamaño de descarga': '~2 GB', 'Por qué': 'أفضل نسبة جودة/حجم للمبتدئين' },
            { 'Tu RAM': '8-16 GB', 'Modelo recomendado': 'Llama 3.3 8B', 'Tamaño de descarga': '~4.7 GB', 'Por qué': 'نموذج عام عالي الأداء' },
            { 'Tu RAM': '16+ GB', 'Modelo recomendado': 'mistral:7b أو qwen2.5:7b', 'Tamaño de descarga': '~4-5 GB', 'Por qué': 'جودة تنافسية، استدلال سريع' },
          ],
          columns: ['Tu RAM', 'Modelo recomendado', 'Tamaño de descarga', 'Por qué'],
          image: '/images/run-first-local-llm-ram-model-picker-en.svg',
          imageCaption: 'اختيار أول نموذج حسب RAM: 4 GB لـ llama3.2:1b (1.3 GB)، 8 GB لـ Llama 3.2 3B (2 GB، البداية الموصى بها)، 8-16 GB لـ Llama 3.3 8B (4.7 GB)، 16+ GB لـ mistral:7b أو qwen2.5:7b (4-5 GB).',
        },
        step3: {
          title: 'الخطوة 3: تنزيل النموذج',
          content: 'نزّل النموذج بـ `ollama pull`. يُحفظ النموذج في `~/.ollama/models` ويحتاج إلى التنزيل مرة واحدة فقط:',
          codeBlock: 'ollama pull llama3.2\n\n# Or pull a specific size variant\nollama pull llama3.2:3b\nollama pull llama3.1:8b',
          codeLanguage: 'bash',
        },
        step3Progress: {
          title: 'كيف يبدو التنزيل؟',
          content: 'يعرض Ollama تقدّم التنزيل في الطرفية. يستغرق نموذج `llama3.2:3b` 2-5 دقائق على اتصال نطاق عريض نموذجي. يُخزَّن النموذج مضغوطًا — الـ 2 GB المُنزَّلة تتوسّع إلى نحو 2.3 GB على القرص.',
          codeBlock: 'pulling manifest\npulling 966de95ca8dc... 100% ▕████████████████▏ 1.9 GB\npulling 9f436a92eb8b... 100% ▕████████████████▏   42 B\nverifying sha256 digest\nwriting manifest\nsuccess',
          codeLanguage: 'text',
        },
        step4: {
          id: 'step-4-run-and-chat',
          title: 'الخطوة 4: تشغيل النموذج وإرسال أول أمر',
          content: 'ابدأ جلسة دردشة تفاعلية:',
          codeBlock: 'ollama run llama3.2\n\n# Ollama loads the model and shows a prompt:\n>>> Send a message (/? for help)',
          codeLanguage: 'bash',
        },
        step4Chat: {
          title: 'محادثتك الأولى',
          content: 'اكتب رسالة واضغط Enter. يبثّ النموذج استجابته token بـ token:',
          codeBlock: '>>> What are local LLMs?\n\nLocal LLMs (large language models) are AI models that run entirely\non your own hardware -- your laptop, desktop, or server. Unlike cloud\nservices such as ChatGPT or Claude, local LLMs process everything\nlocally with no data sent to external servers...',
          codeLanguage: 'text',
        },
        whatToExpect: {
          id: 'what-to-expect',
          title: 'ماذا تتوقع: السرعة والجودة والقيود',
          content: [
            '**السرعة** تتفاوت حسب الأجهزة. على حاسوب محمول من 2023 (بلا بطاقة رسوم): توقّع 15-25 token/ثانية لنموذج 3B و8-15 token/ثانية لنموذج 8B. على Apple M3 Pro: 50-80 token/ثانية لنموذج 8B. على NVIDIA RTX 4070 Ti: 90-130 token/ثانية لنموذج 8B.',
            '**جودة** `llama3.2:3b` أدنى بشكل ملحوظ من GPT-5.5 أو Claude Opus 4.8 في المهام المعقدة. للتلخيص والأسئلة والأجوبة البسيطة وشرح الكود، النتيجة مفيدة. للاستدلال متعدد الخطوات أو الكتابة الطويلة، رقِّ إلى نموذج 8B أو 13B.',
            '**نافذة السياق**: يدعم `llama3.2:3b` 128K token افتراضيًا في Ollama. عمليًا، تتدهور الجودة بعد ~16K token في محادثة واحدة.',
            '**تأخير الاستجابة الأولى**: تتضمن الاستجابة الأولى بعد `ollama run` وقت تحميل النموذج (5-30 ثانية). الاستجابات اللاحقة في الجلسة نفسها أسرع.',
          ],
        },
        beyondTerminal: {
          id: 'beyond-the-terminal',
          title: 'كيف تستخدم نموذج LLM المحلي خارج الطرفية؟',
          content: 'الدردشة في طرفية Ollama مفيدة للاختبار، لكن معظم حالات الاستخدام الفعلية تحتاج إلى واجهة أفضل:',
          items: [
            '**Open WebUI**: واجهة ويب كاملة لـ Ollama. شغّلها بـ Docker: `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`. ادخل عبر http://localhost:3000.',
            '**LM Studio**: إذا كنت تفضّل واجهة سطح مكتب، يغطي [كيفية تثبيت LM Studio](/ar/local-llms/how-to-install-lm-studio) الإعداد الكامل. الدردشة المدمجة في LM Studio مصقولة وتدعم سجل المحادثات.',
            '**تكامل API**: واجهة API الخاصة بـ Ollama على `localhost:11434` متوافقة مع SDK الخاص بـ OpenAI. أي تطبيق يقبل عنوان URL أساسيًا لـ OpenAI يمكنه الاتصال بنموذجك المحلي.',
            '**VS Code / Cursor**: تتصل إضافات مثل Continue.dev بـ Ollama وتوفّر مساعدة برمجية بذكاء اصطناعي محلي مباشرة في محررك.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'تشغيل أول نموذج LLM محلي: السياق الإقليمي',
          content: [
            '**الاتحاد الأوروبي / GDPR**: تشغيل نموذج LLM محلي مع Ollama يعني أن أي بيانات أمر أو سياق أو مخرجات لا تغادر جهازك — لا تنطبق آليات النقل بموجب المادة 46 من GDPR. للمهنيين في الاتحاد الأوروبي الذين يتعاملون مع بيانات شخصية، هذا هو البديل الحافظ للخصوصية مقابل واجهات API للذكاء الاصطناعي السحابي. أول نموذج محلي لديك (llama3.2:3b) يستخدم 2 GB من القرص، ويولّد صفر استدعاءات API خارجية، ويمتثل بالتصميم لإرشادات تقليل البيانات.',
            '**الخليج (PDPL السعودي)**: تتطلب أطر حوكمة البيانات في الخليج توثيق مكان حدوث استدلال الذكاء الاصطناعي. ينشئ أول إعداد لـ Ollama بيئة محلية كاملة وقابلة للتدقيق: ملفات نموذج مخزّنة في ~/.ollama/models بأسماء ملفات خاصة بالإصدار، دون اعتماد على API خارجي، واستدلال يمكن التحقق منه عبر `ollama ps`. يمكن للمهنيين في الخليج الذين يشغّلون Llama أو Qwen3 محليًا توثيق إصدار النموذج الدقيق والأجهزة لأغراض الامتثال. كما تتوفر بدائل عربية سيادية مثل Jais وALLaM للمؤسسات التي تفضّل نماذج عربية المنشأ.',
            '**الصين**: لسير العمل بالصينية، استبدل llama3.2:3b بـ qwen2.5:3b كأول نموذج: `ollama pull qwen2.5:3b`. يعالج Qwen3 النص الصيني بكفاءة أعلى بـ 30-40% في الـ tokens من Llama، فينتج نتائج أفضل على مستوى الأجهزة نفسه. أمرا ollama pull وrun متطابقان.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'الأسئلة الشائعة عند تشغيل أول نموذج LLM محلي',
          faqs: [
            {
              q: 'استجابة النموذج بطيئة جدًا — هل هذا طبيعي؟',
              a: 'على أجهزة CPU فقط، 8-20 token/ثانية أمر طبيعي لنموذج 7B. كل token يعادل نحو 0.75 كلمة. بـ 10 token/ثانية، تستغرق استجابة من 100 كلمة نحو 13 ثانية. لتسريع الاستدلال، استخدم نموذجًا أصغر (3B بدلًا من 8B)، أو فعّل التفريغ إلى بطاقة الرسوم إن كان لديك متوافقة، أو استخدم مستوى تكميم Q4_K_M وهو الإعداد الأسرع المعتاد.',
            },
            {
              q: 'هل يمكنني تشغيل نموذجين في آن واحد؟',
              a: 'يمكن لـ Ollama إبقاء عدة نماذج محمّلة في آن واحد إذا كان لديك RAM كافٍ. افتراضيًا، يفرّغ Ollama نموذجًا بعد 5 دقائق من الخمول. يمكنك تغيير ذلك بمتغير البيئة OLLAMA_KEEP_ALIVE. تشغيل نموذجي 7B في آن واحد يتطلب ~16 GB من RAM.',
            },
            {
              q: 'كيف أوقف Ollama عن العمل في الخلفية؟',
              a: 'على macOS: انقر على أيقونة اللاما في شريط القوائم واختر إنهاء. على Linux: نفّذ `systemctl stop ollama`. على Windows: انقر بزر الفأرة الأيمن على أيقونة شريط النظام واختر إنهاء. لمنع Ollama من البدء عند تسجيل الدخول، أزله من عناصر بدء التشغيل لديك.',
            },
            {
              q: 'ما أسهل طريقة لتشغيل نموذج LLM محلي لأول مرة؟',
              a: 'ثبّت Ollama (ollama.com)، ونفّذ `ollama pull llama3.2:3b` ثم `ollama run llama3.2:3b`. هذا كل شيء. ثلاثة أوامر، 2-5 دقائق، ولديك نموذج ذكاء اصطناعي يعمل على جهازك دون حاجة إلى الإنترنت بعد التنزيل الأولي.',
            },
            {
              q: 'كيف أعرف أن نموذج LLM المحلي يعمل بشكل صحيح؟',
              a: 'نفّذ `ollama ps` في الطرفية. إذا كان النموذج قيد التشغيل، سيظهر في القائمة باسمه وحجمه واستخدام ذاكرته. أرسل له أمرًا بسيطًا مثل "كم يساوي 2+2؟" — إذا أجاب "4"، فالنموذج يعمل بشكل صحيح.',
            },
            {
              q: 'هل يحتاج حاسوبي إلى بطاقة رسوم لتشغيل نموذج LLM محلي؟',
              a: 'لا. تعمل نماذج LLM المحلية على CPU. بطاقة الرسوم تجعل الاستدلال أسرع بـ 5-10 مرات، لكن CPU وحده مناسب للتعلّم ولكثير من حالات الاستخدام الفعلية. يمكن للحواسيب المحمولة الحديثة بـ Apple M1/M2 أو AMD Ryzen أو Intel من الجيل الثاني عشر تشغيل نماذج 3B-7B بسرعات معقولة (10-30 token/ثانية).',
            },
            {
              q: 'كم مساحة قرص يشغل نموذج LLM محلي؟',
              a: '`llama3.2:1b` يشغل 1.3 GB، و`llama3.2:3b` يشغل 2 GB، و`llama3.1:8b` يشغل 4.7 GB. هذه الأحجام المضغوطة كما يخزّنها Ollama. بعد تحميلها في RAM للاستدلال، تختلف الأحجام (راجع [كم من VRAM لنموذج LLM محلي](/ar/local-llms/how-much-vram-local-llm) للمزيد من التفاصيل).',
            },
            {
              q: 'هل يمكنني استخدام نموذج LLM المحلي دون اتصال بالإنترنت؟',
              a: 'نعم، بالكامل. نزّل النموذج مرة واحدة بـ Ollama (يتطلب إنترنت) ثم شغّله محليًا للأبد دون إنترنت. مثالي للشبكات الخاصة أو الطائرات أو البيئات المعزولة تمامًا.',
            },
            {
              q: 'بماذا يختلف نموذج LLM المحلي عن ChatGPT؟',
              a: 'يعمل ChatGPT على خوادم Anthropic. وتعمل نماذج LLM المحلية على جهازك. محلي = صفر بيانات تغادر جهازك، خصوصية كاملة، بلا تكاليف API. ChatGPT = جودة أفضل في المهام المعقدة، يتطلب إنترنت واشتراكًا مدفوعًا. لكليهما مزايا وعيوب.',
            },
            {
              q: 'ما أفضل نموذج أول لتجربته مع Ollama؟',
              a: '`ollama pull llama3.2:3b` — يزن 2 GB، يعمل على أي حاسوب محمول حديث، ينتج استجابات كفؤة، وهو نقطة البداية الموصى بها من Ollama. بعد تجربته، راجع [أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models) للبدائل حسب أجهزتك.',
            },
          ],
        },
        nextSteps: {
          title: 'الخطوات التالية بعد أول تشغيل',
          content: 'الآن وقد صار لديك نموذج LLM محلي يعمل، استكشف ما يمكنه فعله. لفهم أي النماذج تؤدي أفضل مع أجهزتك، راجع [أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models). لنصائح أداء خاصة بالحواسيب المحمولة، راجع [كيفية تشغيل نماذج LLM المحلية على حاسوب محمول](/ar/local-llms/local-llm-on-laptop). لأفضل ممارسات الخصوصية والأمان، راجع [قائمة التحقق لأمان وخصوصية نموذج LLM المحلي](/ar/local-llms/local-llm-security-privacy-checklist).',
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            '[**مكتبة نماذج Ollama**](https://ollama.com/library) -- القائمة الرسمية للنماذج القابلة للتنزيل ومواصفاتها',
            '[**مستودع Ollama على GitHub**](https://github.com/ollama/ollama) -- الكود مفتوح المصدر والتوثيق وتتبّع المشكلات',
            '[**بطاقة نموذج Meta Llama 3.2**](https://llama.meta.com/) -- المواصفات الرسمية وبيانات التدريب ومعايير الأداء',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'الأخطاء الشائعة بعد أول تشغيل',
          items: [
            'الخلط بين عدد الـ tokens والسرعة — نموذج 7B يولّد 100 token بـ 20 token/ثانية يستغرق 5 ثوانٍ، وليس فوريًا.',
            'تشغيل الاستدلال بينما النظام مشغول بمهام أخرى، مما يقلّل tokens/ثانية الفعلية بشكل كبير.',
            'عدم التحقق من حدود نافذة السياق — تدعم معظم نماذج المبتدئين 2K-8K token، لا 100K+ كنماذج الطليعة.',
            'توقّع استجابات فورية في أول تشغيل — تتضمن الاستجابة الأولى وقت تحميل النموذج (5-30 ثانية). الاستجابات اللاحقة في الجلسة نفسها أسرع بـ 2-5 مرات.',
            'استخدام وسم النموذج الخاطئ — `llama3.1:8b-text` هو وضع إكمال النص الأساسي وسينتج حلقات/تكرارًا لا نهائيًا. استخدم وسوم `-instruct` مثل `llama3.1:8b-instruct` للدردشة.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) -- التثبيت والإعداد',
            '[كيفية تثبيت LM Studio](/ar/local-llms/how-to-install-lm-studio) -- بديل بواجهة رسومية',
            '[أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models) -- توصيات النماذج حسب أجهزتك',
            '[ما هي نماذج LLM المحلية؟](/ar/local-llms/what-are-local-llms) -- المفاهيم الأساسية وكيف تعمل',
            '[حل مشكلات إعداد نموذج LLM المحلي](/ar/local-llms/troubleshooting-local-llm-setup) -- حل الاستدلال البطيء وعدم اكتشاف بطاقة الرسوم والأخطاء الشائعة',
            '[واجهة API متوافقة مع OpenAI لنموذج LLM المحلي](/ar/local-llms/local-llm-openai-compatible-api) -- اربط Ollama قيد التشغيل بـ Python وتطبيقات أخرى',
            'أول نموذج LLM محلي لديك قيد التشغيل. تعلّم الآن صياغة الأوامر بفاعلية: [ما هي هندسة الأوامر](https://www.promptquorum.com/ar/prompt-engineering/what-is-prompt-engineering) تعلّم الأساسيات.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'شغّل أول نموذج LLM محلي في 10 دقائق (خطوة بخطوة)',
        'description': 'شغّل أول نموذج LLM محلي في أقل من 10 دقائق مع Ollama: ثبّت، ونزّل نموذج 3B، واحصل على استجابة — بلا مفتاح API ولا حساب بعد التنزيل.',
        'url': 'https://www.promptquorum.com/ar/local-llms/run-first-local-llm',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Beginner',
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'Llama 3.2' },
          { '@type': 'Thing', 'name': 'LLM محلي' },
          { '@type': 'Thing', 'name': 'إعداد نماذج الذكاء الاصطناعي' },
          { '@type': 'Thing', 'name': 'أوامر الطرفية' }
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways']
        }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'كيفية تشغيل أول نموذج LLM محلي في 10 دقائق',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'تثبيت Ollama', 'text': 'نزّل وثبّت Ollama من ollama.ai. تحقق من التثبيت بـ `ollama --version`.' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'اختيار أول نموذج', 'text': 'اختر نموذجًا للمبتدئين حسب أجهزتك: Llama 3.2 3B (4 GB من RAM)، Phi 2.5 (8 GB)، أو Mistral Small (16 GB).' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'تنزيل النموذج', 'text': 'نفّذ `ollama pull llama3.2:3b` لتنزيل النموذج. انتظر حتى يكتمل.' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'التشغيل والدردشة', 'text': 'نفّذ `ollama run llama3.2:3b` لبدء النموذج والبدء بالدردشة في طرفيتك.' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'اختبر بأول أمر', 'text': 'اكتب أول أمر لديك (مثلًا "مرحبًا، ما هو نموذج LLM؟") واضغط Enter. لاحظ زمن الاستجابة والجودة.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'استجابة النموذج بطيئة جدًا — هل هذا طبيعي؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'على أجهزة CPU فقط، 8-20 token/ثانية أمر طبيعي لنموذج 7B. كل token يعادل نحو 0.75 كلمة. بـ 10 token/ثانية، تستغرق استجابة من 100 كلمة نحو 13 ثانية. لتسريع الاستدلال، استخدم نموذجًا أصغر (3B بدلًا من 8B)، أو فعّل التفريغ إلى بطاقة الرسوم إن كان لديك متوافقة، أو استخدم مستوى تكميم Q4_K_M وهو الإعداد الأسرع المعتاد.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني تشغيل نموذجين في آن واحد؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يمكن لـ Ollama إبقاء عدة نماذج محمّلة في آن واحد إذا كان لديك RAM كافٍ. افتراضيًا، يفرّغ Ollama نموذجًا بعد 5 دقائق من الخمول. يمكنك تغيير ذلك بمتغير البيئة OLLAMA_KEEP_ALIVE. تشغيل نموذجي 7B في آن واحد يتطلب ~16 GB من RAM.'
            }
          },
          {
            '@type': 'Question',
            'name': 'كيف أوقف Ollama عن العمل في الخلفية؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'على macOS: انقر على أيقونة اللاما في شريط القوائم واختر إنهاء. على Linux: نفّذ `systemctl stop ollama`. على Windows: انقر بزر الفأرة الأيمن على أيقونة شريط النظام واختر إنهاء. لمنع Ollama من البدء عند تسجيل الدخول، أزله من عناصر بدء التشغيل لديك.'
            }
          },
          {
            '@type': 'Question',
            'name': 'ما أسهل طريقة لتشغيل نموذج LLM محلي لأول مرة؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ثبّت Ollama (ollama.com)، ونفّذ `ollama pull llama3.2:3b` ثم `ollama run llama3.2:3b`. هذا كل شيء. ثلاثة أوامر، 2-5 دقائق، ولديك نموذج ذكاء اصطناعي يعمل على جهازك دون حاجة إلى الإنترنت بعد التنزيل الأولي.'
            }
          },
          {
            '@type': 'Question',
            'name': 'كيف أعرف أن نموذج LLM المحلي يعمل بشكل صحيح؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نفّذ `ollama ps` في الطرفية. إذا كان النموذج قيد التشغيل، سيظهر في القائمة باسمه وحجمه واستخدام ذاكرته. أرسل له أمرًا بسيطًا مثل "كم يساوي 2+2؟" — إذا أجاب "4"، فالنموذج يعمل بشكل صحيح.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يحتاج حاسوبي إلى بطاقة رسوم لتشغيل نموذج LLM محلي؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'لا. تعمل نماذج LLM المحلية على CPU. بطاقة الرسوم تجعل الاستدلال أسرع بـ 5-10 مرات، لكن CPU وحده مناسب للتعلّم ولكثير من حالات الاستخدام الفعلية. يمكن للحواسيب المحمولة الحديثة بـ Apple M1/M2 أو AMD Ryzen أو Intel من الجيل الثاني عشر تشغيل نماذج 3B-7B بسرعات معقولة (10-30 token/ثانية).'
            }
          },
          {
            '@type': 'Question',
            'name': 'كم مساحة قرص يشغل نموذج LLM محلي؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`llama3.2:1b` يشغل 1.3 GB، و`llama3.2:3b` يشغل 2 GB، و`llama3.1:8b` يشغل 4.7 GB. هذه الأحجام المضغوطة كما يخزّنها Ollama. بعد تحميلها في RAM للاستدلال، تختلف الأحجام.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني استخدام نموذج LLM المحلي دون اتصال بالإنترنت؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم، بالكامل. نزّل النموذج مرة واحدة بـ Ollama (يتطلب إنترنت) ثم شغّله محليًا للأبد دون إنترنت. مثالي للشبكات الخاصة أو الطائرات أو البيئات المعزولة تمامًا.'
            }
          },
          {
            '@type': 'Question',
            'name': 'بماذا يختلف نموذج LLM المحلي عن ChatGPT؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يعمل ChatGPT على خوادم Anthropic. وتعمل نماذج LLM المحلية على جهازك. محلي = صفر بيانات تغادر جهازك، خصوصية كاملة، بلا تكاليف API. ChatGPT = جودة أفضل في المهام المعقدة، يتطلب إنترنت واشتراكًا مدفوعًا. لكليهما مزايا وعيوب.'
            }
          },
          {
            '@type': 'Question',
            'name': 'ما أفضل نموذج أول لتجربته مع Ollama؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`ollama pull llama3.2:3b` — يزن 2 GB، يعمل على أي حاسوب محمول حديث، ينتج استجابات كفؤة، وهو نقطة البداية الموصى بها من Ollama. بعد تجربته، راجع أفضل نماذج LLM المحلية للمبتدئين للبدائل حسب أجهزتك.'
            }
          },
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'أفضل نماذج LLM المحلية الأولى حسب RAM',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'llama3.2:1b', 'description': '4 GB من RAM. تنزيل 1.3 GB. أصغر نموذج Llama مفيد.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.2 3B', 'description': '8 GB من RAM. تنزيل 2 GB. أفضل نسبة جودة-حجم للمبتدئين.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Llama 3.3 8B', 'description': '8-16 GB من RAM. تنزيل 4.7 GB. أداء عام عالٍ.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'mistral:7b أو qwen2.5:7b', 'description': '16+ GB من RAM. تنزيل 4-5 GB. جودة تنافسية.' },
        ]
      },
    },
    de: {
      theme: 'Erste Schritte',
      title: 'Führe dein erstes lokales LLM aus: Von Installation bis erste Antwort in 10 Minuten',
      heroImage: '/images/run-first-local-llm-overview-hero-de.png',
      seoTitle: 'Erstes lokales LLM ausführen 2026: Ollama für Einsteiger',
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
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'So führen Sie Ihr erstes lokales LLM in 10 Minuten aus',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Ollama installieren', 'text': 'Laden Sie Ollama von ollama.ai herunter und installieren Sie es. Überprüfen Sie die Installation mit `ollama --version`.' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Erstes Modell auswählen', 'text': 'Wählen Sie ein Einsteigermodell passend zu Ihrer Hardware: Llama 3.2 3B (4 GB RAM), Phi 2.5 (8 GB) oder Mistral Small (16 GB).' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Modell herunterladen', 'text': 'Führen Sie `ollama pull llama3.2:3b` aus, um das Modell herunterzuladen. Warten Sie, bis der Download abgeschlossen ist.' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Ausführen und chatten', 'text': 'Führen Sie `ollama run llama3.2:3b` aus, um das Modell zu starten und im Terminal zu chatten.' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Mit dem ersten Prompt testen', 'text': 'Geben Sie Ihren ersten Prompt ein (z. B. „Hallo, was ist ein LLM?") und drücken Sie Enter. Beobachten Sie Antwortzeit und Qualität.' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Beste erste lokale LLM-Modelle nach RAM',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'llama3.2:1b', 'description': '4 GB RAM. 1,3 GB Download. Kleinstes brauchbares Llama-Modell.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.2 3B', 'description': '8 GB RAM. 2 GB Download. Bestes Verhältnis von Qualität zu Größe für Einsteiger.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Llama 3.3 8B', 'description': '8-16 GB RAM. 4,7 GB Download. Starkes Allzweckmodell.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'mistral:7b oder qwen2.5:7b', 'description': '16+ GB RAM. 4-5 GB Download. Wettbewerbsfähige Qualität.' },
        ]
      },
      sections: {
        tldr: { id: 'key-takeaways',
 isTldr: true, items: ['**Bestes Reasoning im kleinen Format**: Phi-4 Mini 3.8B -- 68% MMLU, 70% HumanEval, läuft auf 4 GB RAM.', '**Schnellste auf CPU**: Gemma 2 2B -- 40-60 tok/sek auf jedem modernen Laptop, 1,7 GB RAM.', '**Bestes kleines Codierungsmodell**: Qwen3 3B -- 65% HumanEval bei ~2 GB RAM.', '**Beste Universal-3B**: Llama 3.2 3B -- beste Community-Unterstützung, 128K Kontext, 2,5 GB RAM.', 'Seit April 2026 produziert kein Sub-2B-Modell Ausgabequalität, die für professionelle Aufgaben geeignet ist. Verwenden Sie 3B+ für echte Arbeit.'] },
        whatIsSmall: { title: 'Was ist ein „kleines" lokales LLM und wann sollten Sie eines verwenden?', content: ['Ein kleines lokales LLM ist typischerweise definiert als ein Modell mit weniger als 4 Milliarden Parametern. Bei Q4_K_M-Quantisierung benötigen diese Modelle 1,5-3 GB RAM -- gut innerhalb der Einschränkungen von Einstiegs-Laptops mit 4-8 GB Gesamtspeicher.', 'Seit April 2026 sind kleine Modelle geeignet für: schnelle Zusammenfassung, einfache F&A, Erklärung von Code-Snippets, Übersetzung kurzer Texte und Klassifizierungsaufgaben. Sie sind nicht geeignet für mehrstufiges Reasoning, komplexe Code-Generierung oder das Verfassen langer kohärenter Dokumente.', 'Die Qualitätslücke zwischen einem 3B- und 7B-Modell ist erheblich -- ungefähr der Lücke zwischen GPT-4o mini und GPT-5.5 entsprechend. Für Benutzer mit 8 GB RAM ist ein 7B-Modell bei Q4_K_M fast immer die bessere Wahl. Siehe [Beste Anfänger-Lokale-LLM-Modelle](/local-llms/best-beginner-local-llm-models) für 7B-Empfehlungen.'] },
        phi4mini: { title: 'Phi-4 Mini 3.8B -- Beste Reasoning-Leistung in der Sub-4B-Klasse', content: ['Microsoft Phi-4 Mini erreicht 68% bei MMLU und 70% bei HumanEval -- Werte, die viele vor 2025 veröffentlichte 7B-Modelle übertreffen. Dies ist möglich, weil Phi-4 Mini auf einem kuratierten synthetischen Datensatz trainiert wurde, der auf Reasoning und Problemlösung fokussiert ist.', 'Seit April 2026 ist Phi-4 Mini die empfohlene Wahl für Benutzer, die hauptsächlich Reasoning oder Code-Unterstützung auf Hardware mit 4-6 GB RAM benötigen.'], rows: [{ 'Spec': 'MMLU', 'Value': '68%' }, { 'Spec': 'HumanEval', 'Value': '70%' }, { 'Spec': 'RAM (Q4_K_M)', 'Value': '~2,5 GB' }, { 'Spec': 'Kontext', 'Value': '128K Token' }, { 'Spec': 'CPU-Geschwindigkeit', 'Value': '30-50 tok/sek' }, { 'Spec': 'Ollama-Befehl', 'Value': 'ollama run phi4-mini' }], columns: ['Spec', 'Value'] },
        gemma2: { title: 'Gemma 2 2B -- Schnellstes kleines lokales LLM auf CPU', content: ['Google Gemma 2 2B generiert 40-60 Token/Sek auf einer modernen Laptop-CPU -- das schnellste Modell in dieser Qualitätsklasse. Sein 1,7-GB-RAM-Footprint lässt viel Speicher für Betriebssystem und andere Anwendungen auf einer 4-GB-Maschine.', 'Die Qualität ist niedriger als Phi-4 Mini bei Reasoning. Das 8K-Kontextfenster ist eine praktische Einschränkung für längere Dokumente. Gemma 2 2B ist die richtige Wahl, wenn Antwortgeschwindigkeit wichtiger ist als Ausgabetiefe.'], rows: [{ 'Spec': 'MMLU', 'Value': '52%' }, { 'Spec': 'RAM (Q4_K_M)', 'Value': '~1,7 GB' }, { 'Spec': 'Kontext', 'Value': '8K Token' }, { 'Spec': 'CPU-Geschwindigkeit', 'Value': '40-60 tok/sek' }, { 'Spec': 'Ollama-Befehl', 'Value': 'ollama run gemma2:2b' }], columns: ['Spec', 'Value'] },
        qwen25_3b: { title: 'Qwen3 3B -- Bestes kleines Modell für Codierungsaufgaben', content: ['Qwen3 3B erreicht 65% bei HumanEval -- 5 Prozentpunkte über Llama 3.2 3B -- und ist beste Wahl für Codierungsaufgaben im 3B-Format. Es umfasst JSON-Modus und Funktionsaufruf-Unterstützung und verarbeitet nativ 29 Sprachen.', 'Für nicht-Codierungs-Aufgaben im Englischen erzeugen Llama 3.2 3B und Phi-4 Mini natürlichere Prosa. Wählen Sie Qwen3 3B speziell für Codierung oder mehrsprachige Aufgaben.'], rows: [{ 'Spec': 'MMLU', 'Value': '62%' }, { 'Spec': 'HumanEval', 'Value': '65%' }, { 'Spec': 'RAM (Q4_K_M)', 'Value': '~2 GB' }, { 'Spec': 'Kontext', 'Value': '128K Token' }, { 'Spec': 'CPU-Geschwindigkeit', 'Value': '25-40 tok/sek' }, { 'Spec': 'Ollama-Befehl', 'Value': 'ollama run qwen2.5:3b' }], columns: ['Spec', 'Value'] },
        llama32_3b: { title: 'Llama 3.2 3B -- Bestes Universal-Kleinmodell', content: ['Meta Llama 3.2 3B ist das am weitesten dokumentierte und von der Community unterstützte 3B-Modell. Es erreicht 58% bei MMLU und 60% bei HumanEval, aber hat breiteste Werkzeugunterstützung, die meisten Fine-Tunes und größte Sammlung von Community-Guides.', 'Das 128K-Kontextfenster eignet sich für Zusammenfassung von Dokumenten mittlerer Länge. Für ein erstes kleines Modell bleibt Llama 3.2 3B die sicherste Wahl aufgrund vorhersehbaren Verhaltens und umfangreicher Dokumentation.'], rows: [{ 'Spec': 'MMLU', 'Value': '58%' }, { 'Spec': 'RAM (Q4_K_M)', 'Value': '~2,5 GB' }, { 'Spec': 'Kontext', 'Value': '128K Token' }, { 'Spec': 'CPU-Geschwindigkeit', 'Value': '25-45 tok/sek' }, { 'Spec': 'Ollama-Befehl', 'Value': 'ollama run llama3.2:3b' }], columns: ['Spec', 'Value'] },
        llama32_1b: { title: 'Llama 3.2 1B -- Absolute Mindestanforderung für nützliche Ausgabe', content: 'Llama 3.2 1B benötigt nur 1,3 GB RAM und generiert 60-90 tok/sek auf CPU. Die Ausgabequalität ist marginal: es bewältigt sehr einfache Klassifizierung, kämpft aber mit kohärenten mehrsätzigen Antworten. Seit April 2026 verwenden Sie Llama 3.2 1B nur, wenn RAM die bindende Einschränkung ist oder zum Testen von Tool-Integrationen.' },
        comparisonTable: { title: 'Vollständiger Vergleich: Beste kleine lokale LLMs unter 4B Parametern', rows: [{ 'Modell': 'Phi-4 Mini 3.8B', 'MMLU': '68%', 'HumanEval': '70%', 'RAM': '2,5 GB', 'Kontext': '128K', 'Beste für': 'Reasoning, Codierung' }, { 'Modell': 'Qwen3 3B', 'MMLU': '62%', 'HumanEval': '65%', 'RAM': '2 GB', 'Kontext': '128K', 'Beste für': 'Codierung, mehrsprachig' }, { 'Modell': 'Llama 3.2 3B', 'MMLU': '58%', 'HumanEval': '60%', 'RAM': '2,5 GB', 'Kontext': '128K', 'Beste für': 'Allgemein, erstes Modell' }, { 'Modell': 'Gemma 2 2B', 'MMLU': '52%', 'HumanEval': '38%', 'RAM': '1,7 GB', 'Kontext': '8K', 'Beste für': 'Geschwindigkeit, niedriges RAM' }, { 'Modell': 'Llama 3.2 1B', 'MMLU': '32%', 'HumanEval': '28%', 'RAM': '1,3 GB', 'Kontext': '128K', 'Beste für': 'Minimales RAM' }], columns: ['Modell', 'MMLU', 'HumanEval', 'RAM', 'Kontext', 'Beste für'] },
        regionalContext: { title: 'Kleine lokale LLMs nach Region', content: ['**EU / DSGVO:** Für EU-Profis auf begrenzter Hardware -- Feldarbeit, air-gapped Umgebungen, ältere Enterprise-Laptops -- bieten kleine lokale Modelle DSGVO-konforme Inferenz ohne Datengress. Ein Phi-4 Mini 3.8B auf Standard-Corporate-Laptop (8 GB RAM) behält alle Texte auf Gerät unter DSGVO-Artikel 5. Für BSI-Compliance: Phi-4 Mini (Microsoft, MIT-Lizenz) und Llama 3.2 3B (Meta, Llama Community-Lizenz) bieten versionierte Modell-Identifikatoren via Ollama-Tags. Mistral bietet derzeit kein Sub-4B-Modell. Für EU-Organisationen mit EU-Präferenz sind Optionen begrenzt, bis Mistral Sub-4B freigibt.', '**Japan (METI):** Für japanischsprachige Aufgaben ist Qwen3 3B das einzige Modell mit nativer japanischer Tokenisierung. Llama 3.2 3B verarbeitet Japanisch mit niedrigerer Token-Effizienz. Für japanische Zusammenfassung oder Übersetzung: `ollama run qwen2.5:3b`. Der Geschwindigkeitsvorteil ist relevant für japanischen Enterprise-Einsatz: 25-40 tok/sek auf CPU bietet angemessene Echtzeit-Antwort auf Standard-Office-Hardware.', '**China:** Qwen3 3B (Alibaba, Apache 2.0) ist natürliche Wahl für chinesischsprachige Bereitstellung. Native chinesische Tokenisierung verarbeitet Mandarin-Text 30-40% effizienter als Llama. Für IoT und Edge unter Chinas Datensicherheitsgesetz: `ollama run qwen2.5:3b` läuft auf jedem Linux-Gerät mit 4 GB RAM ohne externe API-Aufrufe.'] },
        commonMistakes: { title: 'Häufige Fehler beim Ausführen kleiner lokaler LLMs', items: ['**Verwendung von Q8_0 statt Q4_K_M:** Q8_0 benötigt fast doppelt so viel RAM mit minimaler Qualitätsverbesserung. Ein Llama 3.2 3B mit Q8_0 benötigt ~3,8 GB RAM vs ~2,5 GB für Q4_K_M. Auf 4 GB Maschinen kann Q8_0 Swap-Nutzung und 3-5× langsamere Inferenz auslösen. Verwenden Sie immer Q4_K_M für Sub-4B-Modelle.', '**Ausführung eines Basis-Modells statt Instruct-Variante:** Basis-Modelle (z. B. `llama3.2:3b-text`) folgen keine Anweisungen. Wenn Sie ein Basis-Modell „Was ist 2+2?" fragen, kann es den Satz als Quiz vervollständigen statt „4" zu antworten. Verwenden Sie immer: `llama3.2:3b` (Ollama greift standardmäßig zu Instruct).', '**Erwartung von 7B-Qualität aus 3B-Modell:** Ein 3B-Modell mit 68% MMLU (Phi-4 Mini) funktioniert ähnlich wie GPT-4o mini aus 2023. Komplexe Reasoning, lange Texte und differenzierter Code haben niedrigere Qualität. Für bessere Qualität: aktualisieren Sie auf 7B (RAM-Unterschied: ~2 GB mehr).'] },
        relatedReading: { title: 'Weiterführende Lektüre', items: ['[Beste Anfänger-Lokale-LLM-Modelle](/local-llms/best-beginner-local-llm-models) -- 7B-Empfehlungen wenn 8 GB RAM verfügbar', '[Ihr erstes lokales LLM ausführen](/local-llms/run-first-local-llm) -- Schritt-für-Schritt-Anleitung mit Ollama unter 10 Minuten', '[Lokales LLM auf Laptop](/local-llms/local-llm-on-laptop) -- Wärmeverwaltung und Batterielebensdauer auf begrenzter Hardware', '[LLM-Quantisierung erklärt](/local-llms/llm-quantization-explained) -- warum Q4_K_M Standard ist und Q3_K_M für extreme RAM-Einschränkungen', '[Beste lokale LLMs zum Codieren](/local-llms/best-local-llms-for-coding) -- Codierungs-Modelle bei 7B+ wenn Qwen3 3B nicht ausreicht', '[Lokales LLM-Setup beheben](/local-llms/troubleshooting-local-llm-setup) -- OOM-Fehler, langsame Inferenz und Ladefehler auf RAM-armen Maschinen'] },
        faqSection: { title: 'Häufig gestellte Fragen', faqs: [{ q: 'Was ist das kleinste lokale LLM mit nützlicher Ausgabe?', a: 'Seit April 2026 ist 3B bei Q4_K_M praktisches Minimum. Modelle unter 2B (Llama 3.2 1B, Gemma 2 2B) erzeugen kohärente einzelne Sätze, kämpfen aber mit mehrstufigen Anweisungen und Reasoning. Für Zusammenfassung und F&A ist Gemma 2 2B brauchbar. Für komplexere Aufgaben: beginnen Sie mit 3B.' }, { q: 'Kann ein 3B-Modell auf einem Telefon laufen?', a: 'Ja -- Llama 3.2 1B und 3B sind für mobile Bereitstellung konzipiert. Meta bietet optimierte Builds für iOS und Android. Inferenz auf modernem Telefon erzeugt 15-30 tok/sek für 1B. LM Studio und Ollama laufen nicht auf iOS/Android -- mobil erfordert separate Frameworks.' }, { q: 'Sind kleine Modelle für Zusammenfassung geeignet?', a: 'Ja -- Zusammenfassung ist stärkster Anwendungsfall für kleine Modelle. Gemma 2 2B und Llama 3.2 3B produzieren zuverlässig genaue Zusammenfassungen von Texten bis zu ~4.000 Wörtern. Für längere Dokumente verwenden Sie Modell mit großem Kontext wie Phi-4 Mini oder Llama 3.2 3B (beide 128K).' }, { q: 'Wie viel schneller ist 2B als 7B auf gleicher Hardware?', a: 'Ungefähr 2-3× schneller auf CPU. Gemma 2 2B generiert 40-60 tok/sek vs 10-20 tok/sek für Mistral Small. Auf GPU verengt sich Vorteil, da GPU-Durchsatz weniger durch Modellgröße begrenzt ist. Unterschied ist auf reinen CPU-Maschinen deutlichst.' }, { q: 'Unterstützen kleine Modelle Funktionsaufrufe?', a: 'Einige tun dies. Qwen3 3B unterstützt Funktionsaufrufe und JSON. Llama 3.2 3B hat grundlegende Werkzeugunterstützung. Gemma 2 2B unterstützt keine Funktionsaufrufe. Überprüfen Sie Modelldokumentation vor Pipeline-Aufbau.' }, { q: 'Welches kleine Modell ist beste für nicht-englische Sprachen?', a: 'Qwen3 3B unterstützt nativ 29 Sprachen (Chinesisch, Japanisch, Koreanisch, Arabisch). Gemma 2 2B und Phi-4 Mini sind hauptsächlich auf Englisch optimiert. Für nicht-englische Aufgaben bei kleinen Modellen ist Qwen3 3B klare Wahl.' }, { q: 'Unterschied zwischen Phi-4 Mini und Llama 3.2 3B?', a: 'Phi-4 Mini übertrifft bei Reasoning, Mathematik, Codierung (68% vs 58% MMLU, 70% vs 60% HumanEval) bei fast identischem RAM (2,5 GB). Für Alltags-Aufgaben ist Lücke spürbar aber nicht dramatisch. Llama 3.2 3B hat breitere Support. Wählen Sie Phi-4 Mini für Reasoning; Llama für Chat.' }, { q: 'Kann ich zwei kleine Modelle gleichzeitig laufen lassen?', a: 'Ja, wenn RAM zulässt. Zwei 3B-Modelle bei Q4_K_M verwenden ~5 GB kombiniert -- auf 8 GB Maschine mit schlankem OS möglich. Ollama lädt standardmäßig ein Modell pro Prozess. Laufen Sie zwei Ollama-Instanzen auf verschiedenen Ports (OLLAMA_HOST=:11434 und :11435) parallel.' }, { q: 'Funktionieren kleine Modelle für RAG?', a: 'Ja für einfaches RAG. Llama 3.2 3B und Phi-4 Mini beantworten Fragen über abgerufene Dokumentchunks zuverlässig. Für RAG über große Wissensdatenbanken mit Multi-Hop-Reasoning sind 7B+-Modelle konsistenter. GPT4All LocalDocs nutzt 3B für Dokument-Q&A.' }, { q: 'Ist Phi-4 Mini besser als Llama 3.2 3B für Codierung?', a: 'Ja. Phi-4 Mini erreicht 70% auf HumanEval vs 60% für Llama 3.2 3B -- aussagekräftige 10-Punkte-Lücke. Für Code-Hilfe auf 4-6 GB RAM ist Phi-4 Mini empfohlen. Für mehrsprachige Codierung (nicht-Python) ist Qwen3 3B mit 65% HumanEval wettbewerbsfähig und unterstützt Funktionsaufrufe.' }] },
        sources: { title: 'Quellen', items: ['Hugging Face Open LLM Leaderboard -- open-llm-leaderboard.hf.space (MMLU und HumanEval Werte)', 'Microsoft Phi-4 Technical Report -- microsoft.com/en-us/research/publication/phi-4-technical-report/', 'Meta Llama 3.2 Model Card -- huggingface.co/meta-llama/Llama-3.2-3B-Instruct', 'Google Gemma 2 Technical Report -- storage.googleapis.com/deepmind-media/gemma/gemma-2-report.pdf'] },
      },
    },
    fr: {
      theme: 'Premiers pas',
      title: 'Exécutez votre premier LLM local: de l\'installation à la première réponse en 10 minutes',
      heroImage: '/images/run-first-local-llm-overview-hero-fr.png',
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
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Comment exécuter votre premier LLM local en 10 minutes',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Installer Ollama', 'text': 'Téléchargez et installez Ollama depuis ollama.ai. Vérifiez l\'installation avec `ollama --version`.' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Choisir votre premier modèle', 'text': 'Sélectionnez un modèle débutant selon votre matériel : Llama 3.2 3B (4 Go de RAM), Phi 2.5 (8 Go) ou Mistral Small (16 Go).' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Télécharger le modèle', 'text': 'Exécutez `ollama pull llama3.2:3b` pour télécharger le modèle. Attendez la fin du téléchargement.' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Exécuter et discuter', 'text': 'Exécutez `ollama run llama3.2:3b` pour démarrer le modèle et commencer à discuter dans votre terminal.' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Tester avec votre premier prompt', 'text': 'Tapez votre premier prompt (par ex. « Bonjour, qu\'est-ce qu\'un LLM ? ») et appuyez sur Entrée. Observez le temps de réponse et la qualité.' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Meilleurs premiers modèles de LLM local par RAM',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'llama3.2:1b', 'description': '4 Go de RAM. Téléchargement de 1,3 Go. Plus petit modèle Llama utilisable.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.2 3B', 'description': '8 Go de RAM. Téléchargement de 2 Go. Meilleur rapport qualité/taille pour débutants.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Llama 3.3 8B', 'description': '8-16 Go de RAM. Téléchargement de 4,7 Go. Modèle polyvalent performant.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'mistral:7b ou qwen2.5:7b', 'description': '16+ Go de RAM. Téléchargement de 4-5 Go. Qualité compétitive.' },
        ]
      },
      sections: {
        tldr: { id: 'key-takeaways', isTldr: true, items: ['Le chemin le plus rapide : installez Ollama → exécutez `ollama run llama3.2` → discutez dans votre terminal. Durée totale : moins de 5 minutes avec une connexion rapide.', 'Pour les machines avec 8 Go de RAM : commencez avec `llama3.2:3b` (2 Go de téléchargement) ou `phi4-mini` (2,3 Go). Les deux fonctionnent sur n\'importe quel laptop moderne.', 'Attendez 15-40 tokens/sec sur CPU, 60-120 tokens/sec sur un GPU milieu de gamme ou Apple Silicon.', 'Les premières réponses peuvent sembler plus lentes que les APIs cloud -- les modèles locaux échangent vitesse contre confidentialité et coût zéro.', 'Après le téléchargement initial du modèle, tout fonctionne hors ligne. Aucune connexion Internet requise pour les sessions suivantes.'] },
        step1: { title: 'Étape 1 : Installer Ollama', content: 'Ollama est le moyen le plus rapide d\'exécuter un LLM local. Installez-le avec une commande ou un téléchargement de 2 minutes :', codeBlock: '# macOS (Homebrew)\nbrew install ollama\n\n# Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Windows: download installer from ollama.com/download', codeLanguage: 'bash' },
        step1Detail: { title: 'Vérifier qu\'Ollama fonctionne', content: 'Après l\'installation, confirmez qu\'Ollama est actif :', codeBlock: 'curl http://localhost:11434\n# Expected output: Ollama is running', codeLanguage: 'bash' },
        step2: { title: 'Étape 2 : Choisir votre premier modèle', content: 'Choisissez un modèle en fonction de votre RAM disponible. En cas de doute, commencez avec `llama3.2:3b` -- il fonctionne sur toute machine avec 4 Go de RAM et produit des résultats utiles :', rows: [{ 'Votre RAM': '4 Go', 'Modèle recommandé': 'llama3.2:1b', 'Taille du téléchargement': '~1,3 Go', 'Pourquoi': 'Plus petit modèle Llama utilisable' }, { 'Votre RAM': '8 Go', 'Modèle recommandé': 'Llama 3.2 3B', 'Taille du téléchargement': '~2 Go', 'Pourquoi': 'Meilleur rapport qualité/taille pour débutants' }, { 'Votre RAM': '8-16 Go', 'Modèle recommandé': 'Llama 3.3 8B', 'Taille du téléchargement': '~4,7 Go', 'Pourquoi': 'Modèle polyvalent performant' }, { 'Votre RAM': '16+ Go', 'Modèle recommandé': 'mistral:7b ou qwen2.5:7b', 'Taille du téléchargement': '~4-5 Go', 'Pourquoi': 'Qualité compétitive, inférence rapide' }], columns: ['Votre RAM', 'Modèle recommandé', 'Taille du téléchargement', 'Pourquoi'] },
        step3: { title: 'Étape 3 : Télécharger le modèle', content: 'Téléchargez le modèle avec `ollama pull`. Le modèle est enregistré dans `~/.ollama/models` et ne doit être téléchargé qu\'une seule fois :', codeBlock: 'ollama pull llama3.2\n\n# Or pull a specific size variant\nollama pull llama3.2:3b\nollama pull llama3.1:8b', codeLanguage: 'bash' },
        step3Progress: { title: 'À quoi ressemble le téléchargement ?', content: 'Ollama affiche la progression du téléchargement dans le terminal. Un modèle `llama3.2:3b` prend 2-5 minutes sur une connexion haut débit classique. Le modèle est stocké compressé -- les 2 Go téléchargés s\'expandent à environ 2,3 Go sur disque.', codeBlock: 'pulling manifest\npulling 966de95ca8dc... 100% ▕████████████████▏ 1.9 GB\npulling 9f436a92eb8b... 100% ▕████████████████▏   42 B\nverifying sha256 digest\nwriting manifest\nsuccess', codeLanguage: 'text' },
        step4: { id: 'step-4-run-and-chat', title: 'Étape 4 : Lancer le modèle et envoyer votre premier prompt', content: 'Démarrez une session de chat interactive :', codeBlock: 'ollama run llama3.2\n\n# Ollama loads the model and shows a prompt:\n>>> Send a message (/? for help)', codeLanguage: 'bash' },
        step4Chat: { title: 'Votre première conversation', content: 'Tapez un message et appuyez sur Entrée. Le modèle diffuse sa réponse token par token :', codeBlock: '>>> What are local LLMs?\n\nLocal LLMs (large language models) are AI models that run entirely\non your own hardware -- your laptop, desktop, or server. Unlike cloud\nservices such as ChatGPT or Claude, local LLMs process everything\nlocally with no data sent to external servers...', codeLanguage: 'text' },
        whatToExpect: { id: 'what-to-expect', title: 'À quoi s\'attendre : vitesse, qualité et limitations', content: ['**Vitesse** variable selon le matériel. Sur un laptop 2023 sans GPU : attendez 15-25 tokens/sec pour un modèle 3B et 8-15 tokens/sec pour un 8B. Sur Apple M3 Pro : 50-80 tokens/sec pour 8B. Sur NVIDIA RTX 4070 Ti : 90-130 tokens/sec pour 8B.', '**Qualité** de `llama3.2:3b` nettement inférieure à GPT-5.5 ou Claude Opus 4.8 sur des tâches complexes. Pour la synthèse, les Q&A simples et l\'explication de code, la sortie est utile. Pour le raisonnement multi-étapes ou la rédaction longue, passez à un modèle 8B ou 13B.', '**Fenêtre de contexte** : `llama3.2:3b` supporte 128K tokens par défaut dans Ollama. En pratique, la qualité se dégrade après ~16K tokens dans une seule conversation.', '**Délai de première réponse** : la première réponse après `ollama run` inclut le temps de chargement du modèle (5-30 secondes). Les réponses suivantes dans la même session sont plus rapides.'] },
        beyondTerminal: { id: 'beyond-the-terminal', title: 'Comment utiliser votre LLM local au-delà du terminal ?', content: 'Le chat terminal Ollama est utile pour les tests, mais la plupart des cas d\'usage réels nécessitent une meilleure interface :', items: ['**Open WebUI** : une interface web complète pour Ollama. Lancez-la avec Docker : `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`. Accès sur http://localhost:3000.', '**LM Studio** : si vous préférez une interface desktop, [Comment installer LM Studio](/fr/local-llms/how-to-install-lm-studio) couvre la configuration complète.', '**Intégration API** : l\'API Ollama sur `localhost:11434` est compatible avec le SDK OpenAI. Toute application acceptant une URL de base OpenAI peut se connecter à votre modèle local.', '**VS Code / Cursor** : des extensions comme Continue.dev se connectent à Ollama et fournissent une assistance de codage IA locale directement dans votre éditeur.'] },
        regionalContext: { id: 'regional-context', title: 'Lancer votre premier LLM local : contexte régional', content: ['**UE / RGPD** : exécuter un LLM local avec Ollama signifie qu\'aucune donnée de prompt, contexte ou sortie ne quitte votre machine -- les mécanismes de transfert RGPD Article 46 ne s\'appliquent pas. Pour les professionnels européens traitant des données personnelles, c\'est l\'alternative préservant la confidentialité aux APIs cloud. Votre premier modèle local (llama3.2:3b) utilise 2 Go de disque, génère zéro appel API externe, et satisfait les directives de minimisation des données BSI allemandes par conception.', '**Japon (METI)** : les directives de gouvernance IA METI exigent de documenter où s\'effectue l\'inférence IA. Votre première configuration Ollama crée un environnement local complet et auditable.', '**Chine** : pour les flux de travail en chinois, remplacez llama3.2:3b par qwen2.5:3b comme premier modèle : `ollama pull qwen2.5:3b`. Qwen3 traite le texte chinois 30-40% plus efficacement en tokens que Llama.'] },
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
      heroImage: '/images/run-first-local-llm-overview-hero-ja.png',
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
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '初めてのローカルLLMを10分で実行する方法',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Ollamaをインストール', 'text': 'ollama.aiからOllamaをダウンロードしてインストールします。`ollama --version`でインストールを確認します。' },
          { '@type': 'HowToStep', 'position': 2, 'name': '最初のモデルを選択', 'text': 'ハードウェアに応じて初心者向けモデルを選択します：Llama 3.2 3B（4 GB RAM）、Phi 2.5（8 GB）、またはMistral Small（16 GB）。' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'モデルをダウンロード', 'text': '`ollama pull llama3.2:3b`を実行してモデルをダウンロードします。完了するまで待ちます。' },
          { '@type': 'HowToStep', 'position': 4, 'name': '実行してチャット', 'text': '`ollama run llama3.2:3b`を実行してモデルを起動し、ターミナルでチャットを開始します。' },
          { '@type': 'HowToStep', 'position': 5, 'name': '最初のプロンプトでテスト', 'text': '最初のプロンプト（例：「こんにちは、LLMとは何ですか？」）を入力してEnterキーを押します。応答時間と品質を確認します。' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'RAM別のおすすめ最初のローカルLLMモデル',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'llama3.2:1b', 'description': '4 GB RAM。1.3 GBダウンロード。使用可能な最小のLlamaモデル。' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.2 3B', 'description': '8 GB RAM。2 GBダウンロード。初心者に最適な品質とサイズのバランス。' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Llama 3.3 8B', 'description': '8-16 GB RAM。4.7 GBダウンロード。強力な汎用モデル。' },
          { '@type': 'ListItem', 'position': 4, 'name': 'mistral:7b または qwen2.5:7b', 'description': '16 GB以上のRAM。4-5 GBダウンロード。競争力のある品質。' },
        ]
      },
      sections: {
        tldr: { id: 'key-takeaways', isTldr: true, items: ['最速の手順：Ollamaをインストール → `ollama run llama3.2`を実行 → ターミナルでチャット。高速接続なら合計5分以内。', '8 GBのRAMマシン：`llama3.2:3b`（2 GBのダウンロード）または`phi4-mini`（2.3 GB）から始めてください。どちらも最新のノートパソコンで動作します。', 'CPUで15-40トークン/秒、ミッドレンジGPUまたはApple Siliconで60-120トークン/秒が期待できます。', '最初のレスポンスはクラウドAPIより遅く感じる場合があります。ローカルモデルは速度をプライバシーとゼロコストと交換します。', '初期モデルのダウンロード後は、すべてオフラインで動作します。次回以降のセッションにインターネット接続は不要です。'] },
        step1: { title: 'ステップ1：Ollamaをインストール', content: 'Ollamaはローカルで動作するLLMを実行する最速の方法です。1つのコマンドまたは2分のダウンロードでインストールできます：', codeBlock: '# macOS (Homebrew)\nbrew install ollama\n\n# Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Windows: download installer from ollama.com/download', codeLanguage: 'bash', image: '/images/run-first-local-llm-setup-flow-en.svg', imageCaption: 'インストールから最初の応答まで4ステップ：Ollamaをインストール（約2分）、llama3.2:3bをダウンロード（約2 GB、2〜5分）、実行してチャット、モデル読み込み5〜30秒後に最初の応答。合計10分未満、ダウンロード後は完全オフラインで動作。' },
        step1Detail: { title: 'Ollamaが動作していることを確認', content: 'インストール後、Ollamaがアクティブであることを確認します：', codeBlock: 'curl http://localhost:11434\n# Expected output: Ollama is running', codeLanguage: 'bash' },
        step2: { title: 'ステップ2：最初のモデルを選択', content: '利用可能なRAMに基づいてモデルを選択します。迷った場合は`llama3.2:3b`から始めてください。4 GBのRAMを搭載したあらゆるマシンで動作し、有用な出力を生成します：', rows: [{ 'お使いのRAM': '4 GB', '推奨モデル': 'llama3.2:1b', 'ダウンロードサイズ': '約1.3 GB', '理由': '最小限の使えるLlamaモデル' }, { 'お使いのRAM': '8 GB', '推奨モデル': 'Llama 3.2 3B', 'ダウンロードサイズ': '約2 GB', '理由': '初心者向けの最高の品質/サイズ比' }, { 'お使いのRAM': '8-16 GB', '推奨モデル': 'Llama 3.3 8B', 'ダウンロードサイズ': '約4.7 GB', '理由': '強力な汎用モデル' }, { 'お使いのRAM': '16 GB以上', '推奨モデル': 'mistral:7b または qwen2.5:7b', 'ダウンロードサイズ': '約4-5 GB', '理由': '競争力のある品質、高速な推論' }], columns: ['お使いのRAM', '推奨モデル', 'ダウンロードサイズ', '理由'], image: '/images/run-first-local-llm-ram-model-picker-en.svg', imageCaption: 'RAM別の最初のモデル選び：4 GBはllama3.2:1b（1.3 GB）、8 GBはLlama 3.2 3B（2 GB、推奨の出発点）、8-16 GBはLlama 3.3 8B（4.7 GB）、16 GB以上はmistral:7bまたはqwen2.5:7b（4-5 GB）。' },
        step3: { title: 'ステップ3：モデルをダウンロード', content: '`ollama pull`でモデルをダウンロードします。モデルは`~/.ollama/models`に保存され、一度だけダウンロードすれば使えます：', codeBlock: 'ollama pull llama3.2\n\n# Or pull a specific size variant\nollama pull llama3.2:3b\nollama pull llama3.1:8b', codeLanguage: 'bash' },
        step3Progress: { title: 'ダウンロードの様子', content: 'Ollamaはターミナルにダウンロードの進行状況を表示します。`llama3.2:3b`モデルは一般的なブロードバンド接続で2-5分かかります。モデルは圧縮状態で保存されます。2 GBのダウンロードがディスク上で約2.3 GBに展開されます。', codeBlock: 'pulling manifest\npulling 966de95ca8dc... 100% ▕████████████████▏ 1.9 GB\npulling 9f436a92eb8b... 100% ▕████████████████▏   42 B\nverifying sha256 digest\nwriting manifest\nsuccess', codeLanguage: 'text' },
        step4: { id: 'step-4-run-and-chat', title: 'ステップ4：モデルを起動して最初のプロンプトを送信', content: 'インタラクティブなチャットセッションを開始します：', codeBlock: 'ollama run llama3.2\n\n# Ollama loads the model and shows a prompt:\n>>> Send a message (/? for help)', codeLanguage: 'bash' },
        step4Chat: { title: '最初の会話', content: 'メッセージを入力してEnterキーを押します。モデルはトークンごとにレスポンスをストリーミングします：', codeBlock: '>>> What are local LLMs?\n\nLocal LLMs (large language models) are AI models that run entirely\non your own hardware -- your laptop, desktop, or server. Unlike cloud\nservices such as ChatGPT or Claude, local LLMs process everything\nlocally with no data sent to external servers...', codeLanguage: 'text' },
        whatToExpect: { id: 'what-to-expect', title: '期待できること：速度、品質、制限', content: ['**速度**はハードウェアによって異なります。2023年のラップトップ（GPUなし）：3Bモデルで15-25トークン/秒、8Bモデルで8-15トークン/秒が期待できます。Apple M3 Pro：8Bで50-80トークン/秒。NVIDIA RTX 4070 Ti：8Bで90-130トークン/秒。', '**品質**は`llama3.2:3b`では複雑なタスクにおいてGPT-5.5やClaude Opus 4.8よりも明らかに低くなります。要約、シンプルな質疑応答、コードの説明には有用です。多段階の推論や長文執筆には8Bまたは13Bモデルへのアップグレードを検討してください。', '**コンテキストウィンドウ**：`llama3.2:3b`はOllamaでデフォルトで128Kトークンをサポートします。実際には、1回の会話で約16Kトークン後に品質が低下します。', '**最初のレスポンス遅延**：`ollama run`後の最初のレスポンスにはモデルのロード時間（5-30秒）が含まれます。同じセッション内の後続のレスポンスは高速になります。'] },
        beyondTerminal: { id: 'beyond-the-terminal', title: 'ターミナル以外でローカルLLMを使う方法', content: 'Ollamaのターミナルチャットはテスト目的に有用ですが、実際のユースケースではより良いインターフェースが必要です：', items: ['**Open WebUI**：Ollama用の高機能Webインターフェース。Dockerで起動：`docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`。http://localhost:3000でアクセス。', '**LM Studio**：デスクトップGUIを好む方は、[LM Studioのインストール方法](/ja/local-llms/how-to-install-lm-studio)で完全なセットアップを確認できます。', '**API連携**：`localhost:11434`のOllama APIはOpenAI SDKと互換性があります。OpenAIのベースURLを受け入れるアプリケーションはすべてローカルモデルに接続できます。', '**VS Code / Cursor**：Continue.devなどの拡張機能がOllamaに接続し、エディタ内でローカルAIコーディング支援を提供します。'] },
        regionalContext: { id: 'regional-context', title: '初めてのローカルLLM：地域別コンテキスト', content: ['**EU / GDPR**：OllamaでローカルLLMを実行すると、プロンプトデータ、コンテキスト、出力のいずれもマシンから外に出ません。個人データを扱うEUの専門家にとって、クラウドAI APIのプライバシー保護代替手段となります。', '**日本（METI）**：METI AIガバナンスガイドラインでは、AI推論が行われる場所を文書化することが求められています。最初のOllamaセットアップは完全で監査可能なローカル環境を作成します。モデルファイルは`~/.ollama/models`にバージョン固有のファイル名で保存され、`ollama ps`で推論を検証できます。METIコンプライアンス目的で正確なモデルバージョンとハードウェアを文書化できます。', '**中国**：中国語のワークフローには、最初のモデルとしてqwen2.5:3bをllama3.2:3bの代わりに使用してください：`ollama pull qwen2.5:3b`。Qwen3はLlamaと同じハードウェア階層でより良い結果を生成します。'] },
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
      heroImage: '/images/run-first-local-llm-overview-hero-zh.png',
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
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '如何在10分钟内运行您的第一个本地LLM',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': '安装Ollama', 'text': '从ollama.ai下载并安装Ollama。使用`ollama --version`验证安装。' },
          { '@type': 'HowToStep', 'position': 2, 'name': '选择您的第一个模型', 'text': '根据您的硬件选择初学者模型：Llama 3.2 3B（4 GB RAM）、Phi 2.5（8 GB）或Mistral Small（16 GB）。' },
          { '@type': 'HowToStep', 'position': 3, 'name': '下载模型', 'text': '运行`ollama pull llama3.2:3b`下载模型。等待下载完成。' },
          { '@type': 'HowToStep', 'position': 4, 'name': '运行并聊天', 'text': '运行`ollama run llama3.2:3b`启动模型，在终端中开始聊天。' },
          { '@type': 'HowToStep', 'position': 5, 'name': '用第一个提示词测试', 'text': '输入您的第一个提示词（例如"你好，什么是LLM？"）并按Enter键。观察响应时间和质量。' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': '按RAM划分的最佳首选本地LLM模型',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'llama3.2:1b', 'description': '4 GB RAM。1.3 GB下载。最小的可用Llama模型。' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.2 3B', 'description': '8 GB RAM。2 GB下载。初学者最佳质量与体积比。' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Llama 3.3 8B', 'description': '8-16 GB RAM。4.7 GB下载。强大的通用模型。' },
          { '@type': 'ListItem', 'position': 4, 'name': 'mistral:7b 或 qwen2.5:7b', 'description': '16+ GB RAM。4-5 GB下载。有竞争力的质量。' },
        ]
      },
      sections: {
        tldr: { id: 'key-takeaways', isTldr: true, items: ['最快路径：安装Ollama → 运行`ollama run llama3.2` → 在终端开始聊天。网速较快时全程不超过5分钟。', '8 GB RAM机器：从`llama3.2:3b`（2 GB下载）或`phi4-mini`（2.3 GB）开始。两者均可在任何现代笔记本电脑上运行。', 'CPU上预计15-40个令牌/秒，中端GPU或Apple Silicon上预计60-120个令牌/秒。', '首次响应可能比云API慢——本地模型以速度换取隐私和零成本。', '初始模型下载后，一切都在离线状态运行。后续会话无需互联网连接。'] },
        step1: { title: '第一步：安装Ollama', content: 'Ollama是运行本地LLM的最快方式。用一条命令或2分钟下载完成安装：', codeBlock: '# macOS (Homebrew)\nbrew install ollama\n\n# Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Windows: download installer from ollama.com/download', codeLanguage: 'bash', image: '/images/run-first-local-llm-setup-flow-en.svg', imageCaption: '从安装到首个响应共4步：安装Ollama（约2分钟）、下载llama3.2:3b（约2 GB，2-5分钟）、运行并聊天，模型加载5-30秒后获得首个响应——总计不到10分钟，下载完成后完全离线运行。' },
        step1Detail: { title: '验证Ollama正在运行', content: '安装后，确认Ollama处于活动状态：', codeBlock: 'curl http://localhost:11434\n# Expected output: Ollama is running', codeLanguage: 'bash' },
        step2: { title: '第二步：选择您的第一个模型', content: '根据可用RAM选择模型。拿不准时，从`llama3.2:3b`开始——它可在4 GB RAM的任何机器上运行并产生有用输出：', rows: [{ '您的RAM': '4 GB', '推荐模型': 'llama3.2:1b', '下载大小': '约1.3 GB', '原因': '最小可用的Llama模型' }, { '您的RAM': '8 GB', '推荐模型': 'Llama 3.2 3B', '下载大小': '约2 GB', '原因': '初学者最佳质量/大小比' }, { '您的RAM': '8-16 GB', '推荐模型': 'Llama 3.3 8B', '下载大小': '约4.7 GB', '原因': '强大的通用模型' }, { '您的RAM': '16 GB以上', '推荐模型': 'mistral:7b 或 qwen2.5:7b', '下载大小': '约4-5 GB', '原因': '有竞争力的质量，推理速度快' }], columns: ['您的RAM', '推荐模型', '下载大小', '原因'], image: '/images/run-first-local-llm-ram-model-picker-en.svg', imageCaption: '按RAM选择首个模型：4 GB选llama3.2:1b（1.3 GB）、8 GB选Llama 3.2 3B（2 GB，推荐起点）、8-16 GB选Llama 3.3 8B（4.7 GB）、16 GB以上选mistral:7b或qwen2.5:7b（4-5 GB）。' },
        step3: { title: '第三步：下载模型', content: '使用`ollama pull`下载模型。模型保存到`~/.ollama/models`，只需下载一次：', codeBlock: 'ollama pull llama3.2\n\n# Or pull a specific size variant\nollama pull llama3.2:3b\nollama pull llama3.1:8b', codeLanguage: 'bash' },
        step3Progress: { title: '下载过程展示', content: 'Ollama在终端显示下载进度。`llama3.2:3b`模型在典型宽带连接上需要2-5分钟。模型以压缩形式存储——2 GB的下载在磁盘上展开为约2.3 GB。', codeBlock: 'pulling manifest\npulling 966de95ca8dc... 100% ▕████████████████▏ 1.9 GB\npulling 9f436a92eb8b... 100% ▕████████████████▏   42 B\nverifying sha256 digest\nwriting manifest\nsuccess', codeLanguage: 'text' },
        step4: { id: 'step-4-run-and-chat', title: '第四步：运行模型并发送第一个提示词', content: '启动交互式聊天会话：', codeBlock: 'ollama run llama3.2\n\n# Ollama loads the model and shows a prompt:\n>>> Send a message (/? for help)', codeLanguage: 'bash' },
        step4Chat: { title: '您的第一次对话', content: '输入消息并按Enter键。模型逐个令牌流式输出响应：', codeBlock: '>>> What are local LLMs?\n\nLocal LLMs (large language models) are AI models that run entirely\non your own hardware -- your laptop, desktop, or server. Unlike cloud\nservices such as ChatGPT or Claude, local LLMs process everything\nlocally with no data sent to external servers...', codeLanguage: 'text' },
        whatToExpect: { id: 'what-to-expect', title: '预期效果：速度、质量与限制', content: ['**速度**因硬件而异。2023款笔记本电脑（无GPU）：3B模型预计15-25个令牌/秒，8B模型预计8-15个令牌/秒。Apple M3 Pro：8B模型50-80个令牌/秒。NVIDIA RTX 4070 Ti：8B模型90-130个令牌/秒。', '**质量**：`llama3.2:3b`在复杂任务上明显低于GPT-5.5或Claude Opus 4.8。对于摘要、简单问答和代码解释，输出有实用价值。对于多步推理或长篇写作，升级到8B或13B模型。', '**上下文窗口**：`llama3.2:3b`在Ollama中默认支持128K令牌。实际上，单次对话超过约16K令牌后质量会下降。', '**首次响应延迟**：`ollama run`后的首次响应包含模型加载时间（5-30秒）。同一会话中的后续响应更快。'] },
        beyondTerminal: { id: 'beyond-the-terminal', title: '如何在终端之外使用本地LLM？', content: 'Ollama终端聊天适合测试，但大多数实际用例需要更好的界面：', items: ['**Open WebUI**：Ollama的全功能Web界面。用Docker运行：`docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`。访问http://localhost:3000。', '**LM Studio**：如果您更喜欢桌面GUI，[如何安装LM Studio](/zh/local-llms/how-to-install-lm-studio)涵盖完整设置。', '**API集成**：`localhost:11434`的Ollama API与OpenAI SDK兼容。任何接受OpenAI基础URL的应用程序都可以连接到本地模型。', '**VS Code / Cursor**：Continue.dev等扩展连接到Ollama，直接在编辑器中提供本地AI编码辅助。'] },
        regionalContext: { id: 'regional-context', title: '运行第一个本地LLM：地区背景', content: ['**EU / GDPR**：使用Ollama运行本地LLM意味着无提示数据、上下文或输出离开您的机器——GDPR第46条转移机制不适用。', '**日本（METI）**：METI AI治理指南要求记录AI推理发生的位置。您的第一个Ollama设置创建了完整且可审计的本地环境。', '**中国**：对于中文工作流，将llama3.2:3b替换为qwen2.5:3b作为第一个模型：`ollama pull qwen2.5:3b`。Qwen3处理中文文本的令牌效率比Llama高30-40%，在相同硬件层级上产生更好的结果。'] },
        faqSection: { id: 'faq', title: '运行第一个本地LLM的常见问题', faqs: [{ q: '模型响应非常慢——这正常吗？', a: '在纯CPU硬件上，7B模型8-20个令牌/秒是正常的。每个令牌约0.75个词。10个令牌/秒时，100个词的响应大约需要13秒。要加速推理，使用较小模型（3B而不是8B），如有兼容GPU则启用GPU卸载，或使用Q4_K_M量化级别（最快的常用设置）。' }, { q: '我可以同时运行两个模型吗？', a: '如果有足够的RAM，Ollama可以同时保持多个模型加载。默认情况下，Ollama在5分钟不活动后卸载模型。可通过OLLAMA_KEEP_ALIVE环境变量更改。同时运行两个7B模型需要约16 GB RAM。' }, { q: '如何停止Ollama在后台运行？', a: 'macOS：点击菜单栏中的llama图标并选择退出。Linux：运行`systemctl stop ollama`。Windows：右键单击系统托盘图标并选择退出。' }, { q: '首次运行本地LLM最简单的方法是什么？', a: '安装Ollama（ollama.com），运行`ollama pull llama3.2:3b`，然后运行`ollama run llama3.2:3b`。就这样。三条命令，2-5分钟，您就在机器上拥有了一个可用的AI模型，初始下载后无需互联网。' }, { q: '如何知道本地LLM是否正常工作？', a: '在终端运行`ollama ps`。如果模型在运行，它会在列表中显示其名称、大小和内存使用情况。发送一个简单提示词如"2+2等于几？"——如果回答"4"，模型工作正常。' }, { q: '运行本地LLM需要GPU吗？', a: '不需要。本地LLM在CPU上运行。GPU使推理速度快5-10倍，但对于学习和许多实际用例，纯CPU也完全可以。搭载Apple M1/M2、AMD Ryzen或英特尔第12代CPU的现代笔记本电脑可以以合理速度（10-30个令牌/秒）运行3B-7B模型。' }, { q: '本地LLM占用多少磁盘空间？', a: '`llama3.2:1b`为1.3 GB，`llama3.2:3b`为2 GB，`llama3.1:8b`为4.7 GB。这些是Ollama存储的压缩大小。' }, { q: '没有互联网连接可以使用本地LLM吗？', a: '可以，完全可以。用Ollama下载一次模型（需要互联网），然后永久在本地运行，完全不需要互联网。适合私人网络、飞机上或完全离线环境。' }, { q: '本地LLM与ChatGPT有何不同？', a: 'ChatGPT在Anthropic的服务器上运行。本地LLM在您的机器上运行。本地 = 零数据离开设备，完全隐私，无API费用。ChatGPT = 复杂任务质量更高，需要互联网和付费订阅。' }, { q: 'Ollama中最值得尝试的第一个模型是什么？', a: '`ollama pull llama3.2:3b`——2 GB，在任何现代笔记本电脑上运行，产生有竞争力的答案，是Ollama推荐的起点。' }] },
        nextSteps: { title: '第一次运行后的下一步', content: '现在您有了一个可用的本地LLM，探索它能做什么。要了解哪些模型最适合您的硬件，请参阅[初学者最佳本地LLM模型](/zh/local-llms/best-beginner-local-llm-models)。有关笔记本电脑专用性能技巧，请参阅[如何在笔记本电脑上运行本地LLM](/zh/local-llms/local-llm-on-laptop)。' },
        sources: { id: 'sources', title: '参考资料', items: ['[**Ollama模型库**](https://ollama.com/library) -- 可下载模型及其规格的官方列表', '[**Ollama GitHub仓库**](https://github.com/ollama/ollama) -- 开源代码、文档和问题跟踪', '[**Meta Llama 3.2模型卡**](https://llama.meta.com/) -- 官方规格、训练数据和性能基准'] },
        commonMistakes: { id: 'common-mistakes', title: '第一次运行后的常见错误', items: ['混淆令牌数和速度——7B模型以20个令牌/秒生成100个令牌需要5秒，不是即时的。', '在系统忙于其他任务时运行推理，显著降低有效令牌/秒。', '不检查上下文窗口限制——大多数初学者模型支持2K-8K令牌，而不是前沿模型的100K+。', '期望首次运行即时响应——首次响应包含模型加载时间（5-30秒）。同一会话中的后续响应快2-5倍。', '使用错误的模型标签——`llama3.1:8b-text`是基础文本补全模式，会无限循环/重复。聊天请使用`-instruct`标签如`llama3.1:8b-instruct`。'] },
        relatedReading: { id: 'related-reading', title: '相关阅读', items: ['[如何安装Ollama](/zh/local-llms/how-to-install-ollama) -- 安装和设置', '[如何安装LM Studio](/zh/local-llms/how-to-install-lm-studio) -- GUI替代方案', '[初学者最佳本地LLM模型](/zh/local-llms/best-beginner-local-llm-models) -- 基于硬件的模型推荐', '[什么是本地LLM？](/zh/local-llms/what-are-local-llms) -- 核心概念', '[本地LLM设置故障排除](/zh/local-llms/troubleshooting-local-llm-setup) -- 修复慢推理和常见错误', '[本地LLM OpenAI兼容API](/zh/local-llms/local-llm-openai-compatible-api) -- 将Ollama连接到Python和其他应用程序', '您的第一个本地LLM正在运行。现在学习如何有效地提示它：[什么是提示工程](https://www.promptquorum.com/zh/prompt-engineering/what-is-prompt-engineering)教授基础知识。'] },
      },
    },
    pt: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'Rode seu primeiro LLM local em 10 minutos: da instalação à primeira resposta',
      heroImage: '/images/run-first-local-llm-overview-hero-pt.png',
      seoTitle: 'Rode seu primeiro LLM local em 10 minutos (passo a passo)',
      intro: 'Rodar seu primeiro LLM local com o Ollama leva menos de 10 minutos. Instale o Ollama, execute um comando para baixar um modelo e comece a conversar no seu terminal — sem chave de API, sem conta e sem conexão à internet após o download inicial. A partir de abril de 2026, o modelo mais rápido para iniciantes é o Llama 3.2 3B, com 25-45 tokens/seg em uma CPU moderna de notebook.',
      metaDescription: 'Rode seu primeiro LLM local em 10 minutos com o Ollama: instale, baixe um modelo 3B e obtenha a resposta. Sem chave de API nem internet após o download.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Rodar seu primeiro LLM local leva menos de 10 minutos com o Ollama. Instale o Ollama, execute um comando para baixar um modelo e comece a conversar no seu terminal — sem chave de API, sem conta e sem conexão à internet após o download inicial.**',
      audience: 'Iniciantes rodando seu primeiro LLM local em hardware de consumo',
      readTime: '7 min de leitura',
      heroComponent: 'LLMImageSelector',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM',
      toc: [
        { label: 'Pontos principais', anchor: '#key-takeaways' },
        { label: 'Passo 1: Instalar o Ollama', anchor: '#step-1-install-ollama' },
        { label: 'Passo 2: Escolher seu primeiro modelo', anchor: '#step-2-choose-your-first-model' },
        { label: 'Passo 3: Baixar o modelo', anchor: '#step-3-pull-the-model' },
        { label: 'Passo 4: Rodar e conversar', anchor: '#step-4-run-and-chat' },
        { label: 'O que esperar: velocidade e qualidade', anchor: '#what-to-expect' },
        { label: 'Além do terminal', anchor: '#beyond-the-terminal' },
        { label: 'Contexto regional', anchor: '#regional-context' },
        { label: 'Perguntas frequentes', anchor: '#faq' },
        { label: 'Erros comuns', anchor: '#common-mistakes' },
        { label: 'Leituras relacionadas', anchor: '#related-reading' },
        { label: 'Fontes', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'O caminho mais rápido: instale o Ollama → execute `ollama run llama3.2` → converse no seu terminal. Tempo total: menos de 5 minutos com uma conexão rápida.',
            'Para máquinas com 8 GB de RAM: comece com `llama3.2:3b` (download de 2 GB) ou `phi4-mini` (2,3 GB). Ambos funcionam em qualquer notebook moderno.',
            'Espere 15-40 tokens/seg na CPU e 60-120 tokens/seg em uma GPU intermediária ou Apple Silicon.',
            'As primeiras respostas podem parecer mais lentas que as APIs em nuvem — os modelos locais trocam velocidade por privacidade e custo zero.',
            'Após o download inicial do modelo, tudo funciona offline. Não é preciso internet para as sessões seguintes.',
          ],
        },
        step1: {
          title: 'Passo 1: Instalar o Ollama',
          content: 'O Ollama é a forma mais rápida de rodar um LLM local. Instale-o com um comando ou um download de 2 minutos:',
          codeBlock: '# macOS (Homebrew)\nbrew install ollama\n\n# Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Windows: download installer from ollama.com/download',
          codeLanguage: 'bash',
          image: '/images/run-first-local-llm-setup-flow-en.svg',
          imageCaption: 'Da instalação à primeira resposta em 4 passos: instale o Ollama (~2 min), baixe o llama3.2:3b (~2 GB, 2-5 min), execute e converse, e receba a primeira resposta após 5-30 segundos de carregamento -- menos de 10 minutos no total, funciona offline após o download.',
        },
        step1Detail: {
          title: 'Verificar se o Ollama está em execução',
          content: 'Após a instalação, confirme que o Ollama está ativo:',
          codeBlock: 'curl http://localhost:11434\n# Expected output: Ollama is running',
          codeLanguage: 'bash',
        },
        step2: {
          title: 'Passo 2: Escolher seu primeiro modelo',
          content: 'Escolha um modelo conforme a RAM disponível. Na dúvida, comece com `llama3.2:3b` — funciona em qualquer máquina com 4 GB de RAM e produz resultados úteis:',
          rows: [
            { 'Sua RAM': '4 GB', 'Modelo recomendado': 'llama3.2:1b', 'Tamanho do download': '~1,3 GB', 'Por quê': 'O menor modelo Llama que ainda é útil' },
            { 'Sua RAM': '8 GB', 'Modelo recomendado': 'Llama 3.2 3B', 'Tamanho do download': '~2 GB', 'Por quê': 'Melhor relação qualidade/tamanho para iniciantes' },
            { 'Sua RAM': '8-16 GB', 'Modelo recomendado': 'Llama 3.3 8B', 'Tamanho do download': '~4,7 GB', 'Por quê': 'Modelo de propósito geral de alto desempenho' },
            { 'Sua RAM': '16+ GB', 'Modelo recomendado': 'mistral:7b ou qwen2.5:7b', 'Tamanho do download': '~4-5 GB', 'Por quê': 'Qualidade competitiva, inferência rápida' },
          ],
          columns: ['Sua RAM', 'Modelo recomendado', 'Tamanho do download', 'Por quê'],
          image: '/images/run-first-local-llm-ram-model-picker-en.svg',
          imageCaption: 'Escolha do primeiro modelo por RAM: 4 GB para llama3.2:1b (1,3 GB), 8 GB para Llama 3.2 3B (2 GB, ponto de partida recomendado), 8-16 GB para Llama 3.3 8B (4,7 GB), 16+ GB para mistral:7b ou qwen2.5:7b (4-5 GB).',
        },
        step3: {
          title: 'Passo 3: Baixar o modelo',
          content: 'Baixe o modelo com `ollama pull`. O modelo é salvo em `~/.ollama/models` e só precisa ser baixado uma vez:',
          codeBlock: 'ollama pull llama3.2\n\n# Or pull a specific size variant\nollama pull llama3.2:3b\nollama pull llama3.1:8b',
          codeLanguage: 'bash',
        },
        step3Progress: {
          title: 'Como é o download?',
          content: 'O Ollama mostra o progresso do download no terminal. Um modelo `llama3.2:3b` leva 2-5 minutos em uma conexão de banda larga típica. O modelo é armazenado comprimido — os 2 GB baixados se expandem para cerca de 2,3 GB em disco.',
          codeBlock: 'pulling manifest\npulling 966de95ca8dc... 100% ▕████████████████▏ 1.9 GB\npulling 9f436a92eb8b... 100% ▕████████████████▏   42 B\nverifying sha256 digest\nwriting manifest\nsuccess',
          codeLanguage: 'text',
        },
        step4: {
          id: 'step-4-run-and-chat',
          title: 'Passo 4: Rodar o modelo e enviar seu primeiro prompt',
          content: 'Inicie uma sessão de chat interativa:',
          codeBlock: 'ollama run llama3.2\n\n# Ollama loads the model and shows a prompt:\n>>> Send a message (/? for help)',
          codeLanguage: 'bash',
        },
        step4Chat: {
          title: 'Sua primeira conversa',
          content: 'Digite uma mensagem e pressione Enter. O modelo transmite a resposta token por token:',
          codeBlock: '>>> What are local LLMs?\n\nLocal LLMs (large language models) are AI models that run entirely\non your own hardware -- your laptop, desktop, or server. Unlike cloud\nservices such as ChatGPT or Claude, local LLMs process everything\nlocally with no data sent to external servers...',
          codeLanguage: 'text',
        },
        whatToExpect: {
          id: 'what-to-expect',
          title: 'O que esperar: velocidade, qualidade e limitações',
          content: [
            '**Velocidade** varia conforme o hardware. Em um notebook de 2023 (sem GPU): espere 15-25 tokens/seg para um modelo 3B e 8-15 tokens/seg para um 8B. No Apple M3 Pro: 50-80 tokens/seg para 8B. Em uma NVIDIA RTX 4070 Ti: 90-130 tokens/seg para 8B.',
            '**Qualidade** do `llama3.2:3b` é nitidamente inferior ao GPT-5.5 ou ao Claude Opus 4.8 em tarefas complexas. Para resumos, perguntas e respostas simples e explicação de código, o resultado é útil. Para raciocínio em várias etapas ou escrita longa, faça upgrade para um modelo 8B ou 13B.',
            '**Janela de contexto**: o `llama3.2:3b` suporta 128K tokens por padrão no Ollama. Na prática, a qualidade se degrada após ~16K tokens em uma única conversa.',
            '**Atraso na primeira resposta**: a primeira resposta após `ollama run` inclui o tempo de carregamento do modelo (5-30 segundos). As respostas seguintes na mesma sessão são mais rápidas.',
          ],
        },
        beyondTerminal: {
          id: 'beyond-the-terminal',
          title: 'Como usar seu LLM local além do terminal?',
          content: 'O chat no terminal do Ollama é útil para testes, mas a maioria dos casos de uso reais precisa de uma interface melhor:',
          items: [
            '**Open WebUI**: uma interface web completa para o Ollama. Rode com Docker: `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`. Acesse em http://localhost:3000.',
            '**LM Studio**: se você prefere uma GUI de desktop, [Como instalar o LM Studio](/pt/local-llms/how-to-install-lm-studio) cobre a configuração completa. O chat integrado do LM Studio é polido e suporta histórico de conversas.',
            '**Integração via API**: a API do Ollama em `localhost:11434` é compatível com o SDK da OpenAI. Qualquer aplicação que aceite uma URL base da OpenAI pode se conectar ao seu modelo local.',
            '**VS Code / Cursor**: extensões como o Continue.dev se conectam ao Ollama e fornecem assistência de codificação com IA local diretamente no seu editor.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Rodar seu primeiro LLM local: contexto regional',
          content: [
            '**UE / GDPR e Brasil / LGPD**: rodar um LLM local com o Ollama significa que nenhum dado de prompt, contexto ou saída sai da sua máquina — os mecanismos de transferência do Artigo 46 do GDPR não se aplicam, e a LGPD brasileira (Lei nº 13.709/2018) é atendida pelo mesmo princípio de não transferência. Para profissionais que lidam com dados pessoais, esta é a alternativa que preserva a privacidade frente às APIs de IA em nuvem. Seu primeiro modelo local (llama3.2:3b) usa 2 GB de disco, gera zero chamadas de API externas e cumpre por design as diretrizes de minimização de dados.',
            '**Japão (METI)**: as diretrizes de governança de IA do METI exigem documentar onde a inferência de IA ocorre. Sua primeira configuração do Ollama cria um ambiente local completo e auditável: arquivos de modelo armazenados em ~/.ollama/models com nomes de arquivo específicos de versão, sem dependências de API externas, e inferência verificável via `ollama ps`. Profissionais japoneses que rodam Llama ou Qwen3 localmente podem documentar a versão exata do modelo e o hardware para os fins de conformidade do METI.',
            '**China**: para fluxos de trabalho em chinês, substitua o llama3.2:3b por qwen2.5:3b como primeiro modelo: `ollama pull qwen2.5:3b`. O Qwen3 processa texto em chinês 30-40% mais eficientemente em tokens que o Llama, produzindo melhores resultados no mesmo nível de hardware. Os comandos ollama pull e run são idênticos.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes ao rodar seu primeiro LLM local',
          faqs: [
            {
              q: 'A resposta do modelo está muito lenta — isso é normal?',
              a: 'Em hardware apenas com CPU, 8-20 tokens/seg é normal para um modelo 7B. Cada token equivale a cerca de 0,75 palavra. A 10 tokens/seg, uma resposta de 100 palavras leva uns 13 segundos. Para acelerar a inferência, use um modelo menor (3B em vez de 8B), ative o offload para GPU se tiver uma compatível, ou use o nível de quantização Q4_K_M, que é a configuração mais rápida habitual.',
            },
            {
              q: 'Posso rodar dois modelos ao mesmo tempo?',
              a: 'O Ollama pode manter vários modelos carregados simultaneamente se você tiver RAM suficiente. Por padrão, o Ollama descarrega um modelo após 5 minutos de inatividade. Você pode mudar isso com a variável de ambiente OLLAMA_KEEP_ALIVE. Rodar dois modelos 7B ao mesmo tempo exige ~16 GB de RAM.',
            },
            {
              q: 'Como paro o Ollama para que ele não rode em segundo plano?',
              a: 'No macOS: clique no ícone da lhama na barra de menus e selecione Sair. No Linux: execute `systemctl stop ollama`. No Windows: clique com o botão direito no ícone da bandeja do sistema e selecione Sair. Para evitar que o Ollama inicie no login, remova-o dos seus itens de inicialização.',
            },
            {
              q: 'Qual é a forma mais fácil de rodar um LLM local pela primeira vez?',
              a: 'Instale o Ollama (ollama.com), execute `ollama pull llama3.2:3b` e depois `ollama run llama3.2:3b`. É isso. Três comandos, 2-5 minutos e você tem um modelo de IA funcionando na sua máquina sem precisar de internet após o download inicial.',
            },
            {
              q: 'Como sei se meu LLM local está funcionando corretamente?',
              a: 'Execute `ollama ps` no terminal. Se o modelo estiver em execução, ele aparecerá na lista com nome, tamanho e uso de memória. Envie um prompt simples como "Quanto é 2+2?" — se responder "4", o modelo está funcionando corretamente.',
            },
            {
              q: 'Meu computador precisa de uma GPU para rodar um LLM local?',
              a: 'Não. Os LLMs locais rodam na CPU. Uma GPU torna a inferência 5-10 vezes mais rápida, mas apenas com CPU já dá conta para aprender e para muitos casos de uso reais. Notebooks modernos com Apple M1/M2, AMD Ryzen ou Intel de 12ª geração conseguem rodar modelos 3B-7B em velocidades razoáveis (10-30 tokens/seg).',
            },
            {
              q: 'Quanto espaço em disco um LLM local ocupa?',
              a: 'O `llama3.2:1b` ocupa 1,3 GB, o `llama3.2:3b` ocupa 2 GB, o `llama3.1:8b` ocupa 4,7 GB. Esses são os tamanhos comprimidos como o Ollama os armazena. Após carregá-los na RAM para a inferência, os tamanhos diferem (consulte [Quanta VRAM para LLM local](/pt/local-llms/how-much-vram-local-llm) para mais detalhes).',
            },
            {
              q: 'Posso usar meu LLM local sem conexão à internet?',
              a: 'Sim, totalmente. Baixe o modelo uma vez com o Ollama (exige internet) e depois rode-o localmente para sempre sem internet. Perfeito para redes privadas, aviões ou ambientes totalmente offline.',
            },
            {
              q: 'Qual é a diferença entre um LLM local e o ChatGPT?',
              a: 'O ChatGPT roda nos servidores da OpenAI. Os LLMs locais rodam na sua máquina. Local = nenhum dado sai do seu dispositivo, privacidade total, sem custos de API. ChatGPT = melhor qualidade em tarefas complexas, exige internet e uma assinatura paga. Ambos têm vantagens e desvantagens.',
            },
            {
              q: 'Qual é o melhor primeiro modelo para testar com o Ollama?',
              a: '`ollama pull llama3.2:3b` — pesa 2 GB, funciona em qualquer notebook moderno, produz respostas competentes e é o ponto de partida recomendado pelo Ollama. Depois de testá-lo, consulte [Melhores modelos LLM locais para iniciantes](/pt/local-llms/best-beginner-local-llm-models) para alternativas conforme seu hardware.',
            },
          ],
        },
        nextSteps: {
          title: 'Próximos passos após sua primeira execução',
          content: 'Agora que você tem um LLM local funcionando, explore o que ele consegue fazer. Para entender quais modelos rendem melhor com seu hardware, consulte [Melhores modelos LLM locais para iniciantes](/pt/local-llms/best-beginner-local-llm-models). Para dicas de desempenho específicas para notebooks, consulte [Como rodar LLMs locais em um notebook](/pt/local-llms/local-llm-on-laptop). Para boas práticas de privacidade e segurança, consulte a [Lista de verificação de segurança e privacidade de LLM local](/pt/local-llms/local-llm-security-privacy-checklist).',
        },
        sources: {
          id: 'sources',
          title: 'Fontes',
          items: [
            '[**Biblioteca de modelos do Ollama**](https://ollama.com/library) -- Lista oficial de modelos disponíveis para download e suas especificações',
            '[**Repositório do Ollama no GitHub**](https://github.com/ollama/ollama) -- Código-fonte aberto, documentação e rastreamento de problemas',
            '[**Ficha do modelo Meta Llama 3.2**](https://llama.meta.com/) -- Especificações oficiais, dados de treinamento e benchmarks de desempenho',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Erros comuns após sua primeira execução',
          items: [
            'Confundir a contagem de tokens com a velocidade — um modelo 7B que gera 100 tokens a 20 tokens/seg leva 5 segundos, não é instantâneo.',
            'Rodar a inferência enquanto o sistema está ocupado com outras tarefas, reduzindo significativamente os tokens/seg efetivos.',
            'Não verificar os limites da janela de contexto — a maioria dos modelos para iniciantes suporta 2K-8K tokens, não os 100K+ dos modelos de fronteira.',
            'Esperar respostas instantâneas na primeira execução — a primeira resposta inclui o tempo de carregamento do modelo (5-30 segundos). As respostas seguintes na mesma sessão são 2-5 vezes mais rápidas.',
            'Usar a tag de modelo errada — `llama3.1:8b-text` é o modo de completação de texto base e produzirá loops/repetições infinitos. Use tags `-instruct` como `llama3.1:8b-instruct` para chat.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) -- Instalação e configuração',
            '[Como instalar o LM Studio](/pt/local-llms/how-to-install-lm-studio) -- Alternativa com GUI',
            '[Melhores modelos LLM locais para iniciantes](/pt/local-llms/best-beginner-local-llm-models) -- Recomendações de modelos conforme seu hardware',
            '[O que são LLMs locais?](/pt/local-llms/what-are-local-llms) -- Conceitos básicos e como funcionam',
            '[Solução de problemas de configuração de LLM local](/pt/local-llms/troubleshooting-local-llm-setup) -- Resolva inferência lenta, GPU não detectada e erros comuns',
            '[API compatível com OpenAI para LLM local](/pt/local-llms/local-llm-openai-compatible-api) -- Conecte o Ollama em execução ao Python e a outras aplicações',
            'Seu primeiro LLM local está em execução. Agora aprenda a escrever prompts de forma eficaz: [o que é engenharia de prompts](https://www.promptquorum.com/pt/prompt-engineering/what-is-prompt-engineering) ensina os fundamentos.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Rode seu primeiro LLM local em 10 minutos (passo a passo)',
        'description': 'Rode seu primeiro LLM local em menos de 10 minutos com o Ollama: instale, baixe um modelo 3B e obtenha uma resposta — sem chave de API nem conta após o download.',
        'url': 'https://www.promptquorum.com/pt/local-llms/run-first-local-llm',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Beginner',
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'Llama 3.2' },
          { '@type': 'Thing', 'name': 'Local LLM' },
          { '@type': 'Thing', 'name': 'Configuração de modelos de IA' },
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
        'name': 'Como rodar seu primeiro LLM local em 10 minutos',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Instalar o Ollama', 'text': 'Baixe e instale o Ollama em ollama.ai. Verifique a instalação com `ollama --version`.' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Escolher seu primeiro modelo', 'text': 'Selecione um modelo para iniciantes conforme seu hardware: Llama 3.2 3B (4 GB de RAM), Phi 2.5 (8 GB) ou Mistral Small (16 GB).' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Baixar o modelo', 'text': 'Execute `ollama pull llama3.2:3b` para baixar o modelo. Aguarde a conclusão.' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Rodar e conversar', 'text': 'Execute `ollama run llama3.2:3b` para iniciar o modelo e começar a conversar no seu terminal.' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Testar com seu primeiro prompt', 'text': 'Digite seu primeiro prompt (p. ex., "Olá, o que é um LLM?") e pressione Enter. Observe o tempo de resposta e a qualidade.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'A resposta do modelo está muito lenta — isso é normal?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Em hardware apenas com CPU, 8-20 tokens/seg é normal para um modelo 7B. Cada token equivale a cerca de 0,75 palavra. A 10 tokens/seg, uma resposta de 100 palavras leva uns 13 segundos. Para acelerar a inferência, use um modelo menor (3B em vez de 8B), ative o offload para GPU se tiver uma compatível, ou use o nível de quantização Q4_K_M, que é a configuração mais rápida habitual.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Posso rodar dois modelos ao mesmo tempo?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'O Ollama pode manter vários modelos carregados simultaneamente se você tiver RAM suficiente. Por padrão, o Ollama descarrega um modelo após 5 minutos de inatividade. Você pode mudar isso com a variável de ambiente OLLAMA_KEEP_ALIVE. Rodar dois modelos 7B ao mesmo tempo exige ~16 GB de RAM.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Como paro o Ollama para que ele não rode em segundo plano?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No macOS: clique no ícone da lhama na barra de menus e selecione Sair. No Linux: execute `systemctl stop ollama`. No Windows: clique com o botão direito no ícone da bandeja do sistema e selecione Sair. Para evitar que o Ollama inicie no login, remova-o dos seus itens de inicialização.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Qual é a forma mais fácil de rodar um LLM local pela primeira vez?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Instale o Ollama (ollama.com), execute `ollama pull llama3.2:3b` e depois `ollama run llama3.2:3b`. É isso. Três comandos, 2-5 minutos e você tem um modelo de IA funcionando na sua máquina sem precisar de internet após o download inicial.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Como sei se meu LLM local está funcionando corretamente?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Execute `ollama ps` no terminal. Se o modelo estiver em execução, ele aparecerá na lista com nome, tamanho e uso de memória. Envie um prompt simples como "Quanto é 2+2?" — se responder "4", o modelo está funcionando corretamente.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Meu computador precisa de uma GPU para rodar um LLM local?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Não. Os LLMs locais rodam na CPU. Uma GPU torna a inferência 5-10 vezes mais rápida, mas apenas com CPU já dá conta para aprender e para muitos casos de uso reais. Notebooks modernos com Apple M1/M2, AMD Ryzen ou Intel de 12ª geração conseguem rodar modelos 3B-7B em velocidades razoáveis (10-30 tokens/seg).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Quanto espaço em disco um LLM local ocupa?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'O `llama3.2:1b` ocupa 1,3 GB, o `llama3.2:3b` ocupa 2 GB, o `llama3.1:8b` ocupa 4,7 GB. Esses são os tamanhos comprimidos como o Ollama os armazena. Após carregá-los na RAM para a inferência, os tamanhos diferem.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Posso usar meu LLM local sem conexão à internet?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim, totalmente. Baixe o modelo uma vez com o Ollama (exige internet) e depois rode-o localmente para sempre sem internet. Perfeito para redes privadas, aviões ou ambientes totalmente offline.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Qual é a diferença entre um LLM local e o ChatGPT?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'O ChatGPT roda nos servidores da OpenAI. Os LLMs locais rodam na sua máquina. Local = nenhum dado sai do seu dispositivo, privacidade total, sem custos de API. ChatGPT = melhor qualidade em tarefas complexas, exige internet e uma assinatura paga. Ambos têm vantagens e desvantagens.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Qual é o melhor primeiro modelo para testar com o Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`ollama pull llama3.2:3b` — pesa 2 GB, funciona em qualquer notebook moderno, produz respostas competentes e é o ponto de partida recomendado pelo Ollama. Depois de testá-lo, consulte os melhores modelos LLM locais para iniciantes para alternativas conforme seu hardware.'
            }
          },
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Melhores primeiros modelos de LLM local por RAM',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'llama3.2:1b', 'description': '4 GB de RAM. Download de 1,3 GB. O menor modelo Llama que ainda é útil.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.2 3B', 'description': '8 GB de RAM. Download de 2 GB. Melhor relação qualidade-tamanho para iniciantes.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Llama 3.3 8B', 'description': '8-16 GB de RAM. Download de 4,7 GB. Alto desempenho de propósito geral.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'mistral:7b ou qwen2.5:7b', 'description': '16+ GB de RAM. Download de 4-5 GB. Qualidade competitiva.' },
        ]
      },
    },
  ko: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: '로컬 LLM 처음 실행하기: 설치부터 첫 응답까지 10분 완성',
    heroImage: '/images/run-first-local-llm-overview-hero-ko.png',
      seoTitle: '로컬 LLM 처음 실행하기 10분 완성 (단계별 안내)',
      intro: 'Ollama를 사용하면 로컬 LLM을 10분 이내에 실행할 수 있습니다. Ollama를 설치하고 명령어 하나로 모델을 다운로드한 후, 터미널에서 바로 대화를 시작하십시오. API 키, 계정, 최초 다운로드 이후의 인터넷 연결이 전혀 필요하지 않습니다. 2026년 4월 기준, 초보자에게 가장 빠른 모델은 최신 노트북 CPU에서 초당 25~45 토큰을 처리하는 Llama 3.2 3B입니다.',
      metaDescription: 'Ollama로 로컬 LLM을 10분 이내에 실행하십시오: 설치, 3B 모델 다운로드, 첫 응답 확인까지 — 다운로드 후에는 API 키나 인터넷이 필요 없습니다.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Ollama를 사용하면 로컬 LLM을 10분 이내에 실행할 수 있습니다. Ollama를 설치하고 명령어 하나로 모델을 다운로드한 후, 터미널에서 바로 대화를 시작하십시오. API 키, 계정, 최초 다운로드 이후의 인터넷 연결이 전혀 필요하지 않습니다.**',
      audience: '일반 하드웨어에서 처음으로 로컬 LLM을 실행하는 초보자',
      readTime: '7분 읽기',
      heroComponent: 'LLMImageSelector',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM',
      toc: [
        { label: '핵심 요약', anchor: '#key-takeaways' },
        { label: '1단계: Ollama 설치', anchor: '#step-1-install-ollama' },
        { label: '2단계: 첫 모델 선택', anchor: '#step-2-choose-your-first-model' },
        { label: '3단계: 모델 다운로드', anchor: '#step-3-pull-the-model' },
        { label: '4단계: 실행 및 대화', anchor: '#step-4-run-and-chat' },
        { label: '속도 및 품질 기대치', anchor: '#what-to-expect' },
        { label: '터미널 이후 활용', anchor: '#beyond-the-terminal' },
        { label: '지역별 참고사항', anchor: '#regional-context' },
        { label: '자주 묻는 질문', anchor: '#faq' },
        { label: '자주 하는 실수', anchor: '#common-mistakes' },
        { label: '관련 읽기', anchor: '#related-reading' },
        { label: '출처', anchor: '#sources' },
      ],
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '10분 만에 첫 로컬 LLM 실행하는 방법',
        'totalTime': 'PT10M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Ollama 설치', 'text': 'ollama.ai에서 Ollama를 다운로드하여 설치하십시오. `ollama --version`으로 설치를 확인하십시오.' },
          { '@type': 'HowToStep', 'position': 2, 'name': '첫 모델 선택', 'text': '하드웨어에 맞는 입문 모델을 선택하십시오: Llama 3.2 3B(RAM 4GB), Phi 2.5(8GB), 또는 Mistral Small(16GB).' },
          { '@type': 'HowToStep', 'position': 3, 'name': '모델 다운로드', 'text': '`ollama pull llama3.2:3b`를 실행하여 모델을 다운로드하십시오. 완료될 때까지 기다리십시오.' },
          { '@type': 'HowToStep', 'position': 4, 'name': '실행 및 대화', 'text': '`ollama run llama3.2:3b`를 실행하여 모델을 시작하고 터미널에서 대화를 시작하십시오.' },
          { '@type': 'HowToStep', 'position': 5, 'name': '첫 프롬프트로 테스트', 'text': '첫 프롬프트(예: "안녕하세요, LLM이란 무엇인가요?")를 입력하고 Enter 키를 누르십시오. 응답 시간과 품질을 확인하십시오.' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'RAM별 최적의 첫 로컬 LLM 모델',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'llama3.2:1b', 'description': 'RAM 4GB. 다운로드 1.3GB. 사용 가능한 가장 작은 Llama 모델.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.2 3B', 'description': 'RAM 8GB. 다운로드 2GB. 초보자를 위한 최적의 품질 대비 크기 비율.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Llama 3.3 8B', 'description': 'RAM 8~16GB. 다운로드 4.7GB. 강력한 범용 모델.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'mistral:7b 또는 qwen2.5:7b', 'description': 'RAM 16GB 이상. 다운로드 4~5GB. 경쟁력 있는 품질.' },
        ]
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '가장 빠른 방법: Ollama 설치 → `ollama run llama3.2` 실행 → 터미널에서 대화 시작. 빠른 인터넷 환경에서 총 소요 시간은 5분 이내입니다.',
            'RAM 8 GB 기기: `llama3.2:3b` (다운로드 2 GB) 또는 `phi4-mini` (2.3 GB)로 시작하십시오. 두 모델 모두 최신 노트북에서 실행됩니다.',
            'CPU에서 초당 15~40 토큰, 중급 GPU 또는 Apple Silicon에서 초당 60~120 토큰을 기대하십시오.',
            '첫 응답은 클라우드 API보다 느릴 수 있습니다. 로컬 모델은 속도 대신 프라이버시와 무료 이용을 제공합니다.',
            '최초 모델 다운로드 이후에는 모든 처리가 오프라인으로 이루어집니다. 이후 세션에서는 인터넷 연결이 필요 없습니다.',
          ],
        },
        step1: {
          title: '1단계: Ollama 설치',
          content: 'Ollama는 로컬 LLM을 가장 빠르게 실행할 수 있는 도구입니다. 명령어 하나 또는 2분 이내의 다운로드로 설치할 수 있습니다:',
          codeBlock: '# macOS (Homebrew)\nbrew install ollama\n\n# Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Windows: ollama.com/download에서 설치 파일을 다운로드하십시오',
          codeLanguage: 'bash',
          image: '/images/run-first-local-llm-setup-flow-en.svg',
          imageCaption: '설치부터 첫 응답까지 4단계: Ollama 설치(약 2분), llama3.2:3b 다운로드(약 2GB, 2~5분), 실행 및 대화, 모델 로딩 5~30초 후 첫 응답. 총 10분 이내이며 다운로드 후에는 완전히 오프라인으로 동작합니다.',
        },
        step1Detail: {
          title: 'Ollama 실행 확인',
          content: '설치 후 Ollama가 정상적으로 실행 중인지 확인하십시오:',
          codeBlock: 'curl http://localhost:11434\n# 예상 출력: Ollama is running',
          codeLanguage: 'bash',
        },
        step2: {
          title: '2단계: 첫 모델 선택',
          content: '사용 가능한 RAM에 따라 모델을 선택하십시오. 어떤 모델을 선택해야 할지 모르겠다면 `llama3.2:3b`로 시작하십시오. RAM 4 GB 이상의 모든 기기에서 실행되며 유용한 결과를 제공합니다:',
          rows: [
            { '보유 RAM': '4 GB', '권장 모델': 'llama3.2:1b', '다운로드 크기': '약 1.3 GB', '이유': '가장 작은 사용 가능한 Llama 모델' },
            { '보유 RAM': '8 GB', '권장 모델': 'Llama 3.2 3B', '다운로드 크기': '약 2 GB', '이유': '초보자를 위한 최적의 품질/크기 비율' },
            { '보유 RAM': '8~16 GB', '권장 모델': 'Llama 3.3 8B', '다운로드 크기': '약 4.7 GB', '이유': '강력한 범용 모델' },
            { '보유 RAM': '16 GB 이상', '권장 모델': 'mistral:7b 또는 qwen2.5:7b', '다운로드 크기': '약 4~5 GB', '이유': '우수한 품질, 빠른 추론 속도' },
          ],
          columns: ['보유 RAM', '권장 모델', '다운로드 크기', '이유'],
          image: '/images/run-first-local-llm-ram-model-picker-en.svg',
          imageCaption: 'RAM별 첫 모델 선택: 4GB는 llama3.2:1b(1.3GB), 8GB는 Llama 3.2 3B(2GB, 추천 시작점), 8~16GB는 Llama 3.3 8B(4.7GB), 16GB 이상은 mistral:7b 또는 qwen2.5:7b(4~5GB).',
        },
        step3: {
          title: '3단계: 모델 다운로드',
          content: '`ollama pull` 명령어로 모델을 다운로드하십시오. 모델은 `~/.ollama/models`에 저장되며 한 번만 다운로드하면 됩니다:',
          codeBlock: 'ollama pull llama3.2\n\n# 또는 특정 크기 변형을 다운로드\nollama pull llama3.2:3b\nollama pull llama3.1:8b',
          codeLanguage: 'bash',
        },
        step3Progress: {
          title: '다운로드 진행 화면',
          content: 'Ollama는 터미널에서 다운로드 진행 상황을 표시합니다. `llama3.2:3b` 모델은 일반적인 광대역 인터넷 환경에서 2~5분이 소요됩니다. 모델은 압축된 형태로 저장되므로 2 GB 다운로드가 디스크에서 약 2.3 GB로 늘어납니다.',
          codeBlock: 'pulling manifest\npulling 966de95ca8dc... 100% ▕████████████████▏ 1.9 GB\npulling 9f436a92eb8b... 100% ▕████████████████▏   42 B\nverifying sha256 digest\nwriting manifest\nsuccess',
          codeLanguage: 'text',
        },
        step4: {
          id: 'step-4-run-and-chat',
          title: '4단계: 모델 실행 및 첫 프롬프트 전송',
          content: '대화형 채팅 세션을 시작하십시오:',
          codeBlock: 'ollama run llama3.2\n\n# Ollama가 모델을 로드하고 프롬프트를 표시합니다:\n>>> Send a message (/? for help)',
          codeLanguage: 'bash',
        },
        step4Chat: {
          title: '첫 번째 대화',
          content: '메시지를 입력하고 Enter 키를 누르십시오. 모델이 토큰 단위로 응답을 스트리밍합니다:',
          codeBlock: '>>> What are local LLMs?\n\nLocal LLMs (large language models) are AI models that run entirely\non your own hardware -- your laptop, desktop, or server. Unlike cloud\nservices such as ChatGPT or Claude, local LLMs process everything\nlocally with no data sent to external servers...',
          codeLanguage: 'text',
        },
        whatToExpect: {
          id: 'what-to-expect',
          title: '속도, 품질 및 한계 기대치',
          content: [
            '**속도**는 하드웨어에 따라 다릅니다. 2023년형 노트북(GPU 없음): 3B 모델에서 초당 15~25 토큰, 8B 모델에서 초당 8~15 토큰을 기대하십시오. Apple M3 Pro: 8B 모델에서 초당 50~80 토큰. NVIDIA RTX 4070 Ti: 8B 모델에서 초당 90~130 토큰.',
            '`llama3.2:3b`의 **품질**은 복잡한 작업에서 GPT-5.5나 Claude Opus 4.8보다 눈에 띄게 낮습니다. 요약, 간단한 Q&A, 코드 설명에서는 충분히 유용한 결과를 제공합니다. 다단계 추론이나 장문 작성에는 8B 또는 13B 모델로 업그레이드하십시오.',
            '**컨텍스트 윈도우**: `llama3.2:3b`는 Ollama에서 기본적으로 128K 토큰을 지원합니다. 실제로는 단일 대화에서 약 16K 토큰을 넘어서면 품질이 저하됩니다.',
            '**첫 응답 지연**: `ollama run` 이후 첫 번째 응답에는 모델 로딩 시간(5~30초)이 포함됩니다. 같은 세션 내 이후 응답은 더 빠릅니다.',
          ],
        },
        beyondTerminal: {
          id: 'beyond-the-terminal',
          title: '터미널 이후 로컬 LLM 활용 방법',
          content: 'Ollama 터미널 채팅은 테스트에 유용하지만, 실제 활용 사례 대부분에는 더 나은 인터페이스가 필요합니다:',
          items: [
            '**Open WebUI**: Ollama를 위한 완전한 기능의 웹 UI입니다. Docker로 실행하십시오: `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`. http://localhost:3000에서 접속할 수 있습니다.',
            '**LM Studio**: 데스크탑 GUI를 선호하신다면 [LM Studio 설치 방법](/local-llms/how-to-install-lm-studio)에서 전체 설정 과정을 확인하십시오. LM Studio의 내장 채팅 인터페이스는 세련되고 대화 기록을 지원합니다.',
            '**API 연동**: `localhost:11434`의 Ollama API는 OpenAI SDK와 호환됩니다. OpenAI base URL을 수용하는 모든 애플리케이션을 로컬 모델에 연결할 수 있습니다.',
            '**VS Code / Cursor**: Continue.dev 같은 확장 프로그램이 Ollama에 연결되어 편집기 내에서 직접 로컬 AI 코딩 지원을 제공합니다.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: '로컬 LLM 첫 실행: 지역별 참고사항',
          content: [
            '**EU / GDPR**: Ollama로 로컬 LLM을 실행하면 프롬프트 데이터, 컨텍스트, 출력이 기기 밖으로 나가지 않습니다. GDPR 제46조의 이전 메커니즘이 적용되지 않습니다. 개인 데이터를 다루는 EU 전문가에게 이는 클라우드 AI API의 프라이버시 보호 대안입니다. 첫 번째 로컬 모델(llama3.2:3b)은 디스크 2 GB를 사용하고 외부 API 호출을 전혀 생성하지 않으며, 독일 BSI의 데이터 최소화 지침을 설계 단계에서부터 충족합니다.',
            '**일본(METI)**: METI AI 거버넌스 가이드라인은 AI 추론이 어디에서 발생하는지 문서화하도록 요구합니다. Ollama 설정은 완전하고 감사 가능한 로컬 환경을 제공합니다. 모델 파일은 버전별 파일명으로 ~/.ollama/models에 저장되고, 외부 API 의존성이 없으며, `ollama ps`로 추론을 검증할 수 있습니다. Llama 또는 Qwen3를 로컬에서 실행하는 일본 전문가는 METI 컴플라이언스 목적으로 정확한 모델 버전과 하드웨어를 문서화할 수 있습니다.',
            '**한국**: 한국어 워크플로우에서는 첫 번째 모델로 llama3.2:3b 대신 qwen2.5:3b를 선택하십시오: `ollama pull qwen2.5:3b`. Qwen3는 동일한 하드웨어 환경에서 Llama보다 한국어 텍스트를 30~40% 더 효율적으로 처리하여 더 나은 결과를 제공합니다. ollama pull 및 run 명령어는 동일합니다.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '로컬 LLM 처음 실행 시 자주 묻는 질문',
          faqs: [
            {
              q: '모델 응답이 매우 느립니다. 정상인가요?',
              a: 'CPU 전용 하드웨어에서 7B 모델의 경우 초당 8~20 토큰은 정상입니다. 각 토큰은 약 0.75개의 단어에 해당합니다. 초당 10 토큰이라면 100단어 응답에 약 13초가 걸립니다. 추론 속도를 높이려면 더 작은 모델(8B 대신 3B)을 사용하거나, 호환 GPU가 있다면 GPU 오프로딩을 활성화하거나, 가장 빠른 일반 설정인 Q4_K_M 양자화 수준을 사용하십시오.',
            },
            {
              q: '두 모델을 동시에 실행할 수 있나요?',
              a: 'RAM이 충분하다면 Ollama는 여러 모델을 동시에 로드된 상태로 유지할 수 있습니다. 기본적으로 Ollama는 5분 비활성 후 모델을 언로드합니다. OLLAMA_KEEP_ALIVE 환경 변수로 이를 변경할 수 있습니다. 두 개의 7B 모델을 동시에 실행하려면 약 16 GB의 RAM이 필요합니다.',
            },
            {
              q: 'Ollama가 백그라운드에서 실행되는 것을 중지하려면 어떻게 하나요?',
              a: 'macOS: 메뉴 바의 llama 아이콘을 클릭하고 Quit을 선택하십시오. Linux: `systemctl stop ollama`를 실행하십시오. Windows: 시스템 트레이 아이콘을 오른쪽 클릭하고 Quit을 선택하십시오. 로그인 시 Ollama가 시작되지 않도록 하려면 시작 항목에서 제거하십시오.',
            },
            {
              q: '로컬 LLM을 처음 실행하는 가장 쉬운 방법은 무엇인가요?',
              a: 'Ollama(ollama.com)를 설치하고, `ollama pull llama3.2:3b`를 실행한 다음, `ollama run llama3.2:3b`를 실행하십시오. 이것이 전부입니다. 세 개의 명령어, 2~5분이면 인터넷 연결 없이도 기기에서 작동하는 AI 모델을 갖게 됩니다.',
            },
            {
              q: '로컬 LLM이 정상적으로 작동하는지 어떻게 알 수 있나요?',
              a: '터미널에서 `ollama ps`를 실행하십시오. 모델이 실행 중이라면 이름, 크기, 메모리 사용량과 함께 목록에 표시됩니다. "2+2는 얼마인가요?"와 같은 간단한 프롬프트를 보내십시오. "4"라고 응답하면 모델이 정상적으로 작동하는 것입니다.',
            },
            {
              q: '로컬 LLM을 실행하려면 GPU가 필요한가요?',
              a: '아닙니다. 로컬 LLM은 CPU에서도 실행됩니다. GPU를 사용하면 추론 속도가 5~10배 빨라지지만, CPU 전용으로도 학습 및 많은 실제 사용 사례에 충분합니다. Apple M1/M2, AMD Ryzen, 또는 Intel 12세대 CPU가 탑재된 최신 노트북은 3B~7B 모델을 합리적인 속도(초당 10~30 토큰)로 실행할 수 있습니다.',
            },
            {
              q: '로컬 LLM은 디스크 공간을 얼마나 차지하나요?',
              a: '`llama3.2:1b`는 1.3 GB, `llama3.2:3b`는 2 GB, `llama3.1:8b`는 4.7 GB입니다. 이는 Ollama가 저장하는 압축 크기입니다. 추론을 위해 RAM에 로드될 때 크기가 달라집니다(자세한 내용은 [로컬 LLM에 필요한 VRAM](/local-llms/how-much-vram-local-llm) 참조).',
            },
            {
              q: '인터넷 연결 없이 로컬 LLM을 사용할 수 있나요?',
              a: '네, 완전히 가능합니다. Ollama로 모델을 한 번 다운로드(인터넷 필요)하면 이후에는 인터넷 없이 영구적으로 로컬에서 실행할 수 있습니다. 사설 네트워크, 비행기, 또는 완전한 오프라인 환경에 적합합니다.',
            },
            {
              q: '로컬 LLM은 ChatGPT와 어떻게 다른가요?',
              a: 'ChatGPT는 Anthropic의 서버에서 실행됩니다. 로컬 LLM은 사용자의 기기에서 실행됩니다. 로컬 = 데이터가 기기 밖으로 나가지 않음, 완전한 프라이버시, 지속적인 API 비용 없음. ChatGPT = 복잡한 작업에서 더 높은 품질, 인터넷 및 유료 구독 필요. 두 방식 모두 장단점이 있습니다.',
            },
            {
              q: 'Ollama로 처음 시도해볼 최적의 모델은 무엇인가요?',
              a: '`ollama pull llama3.2:3b` — 용량이 2 GB이고 최신 노트북에서 실행되며 적절한 답변을 제공합니다. Ollama가 권장하는 시작점입니다. 사용해본 후 하드웨어에 맞는 대안을 확인하려면 [초보자를 위한 최적 로컬 LLM 모델](/local-llms/best-beginner-local-llm-models)을 참조하십시오.',
            },
          ],
        },
        nextSteps: {
          title: '첫 실행 이후 다음 단계',
          content: '로컬 LLM이 정상적으로 작동하고 있다면 이제 다양한 활용 가능성을 탐색해 보십시오. 하드웨어에 가장 적합한 모델을 파악하려면 [초보자를 위한 최적 로컬 LLM 모델](/local-llms/best-beginner-local-llm-models)을 참조하십시오. 노트북 특화 성능 팁은 [노트북에서 로컬 LLM 실행하기](/local-llms/local-llm-on-laptop)를 확인하십시오. 프라이버시 및 보안 모범 사례는 [로컬 LLM 보안 및 프라이버시 체크리스트](/local-llms/local-llm-security-privacy-checklist)를 참조하십시오.',
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            '[**Ollama 모델 라이브러리**](https://ollama.com/library) — 다운로드 가능한 모델 및 사양 공식 목록',
            '[**Ollama GitHub 저장소**](https://github.com/ollama/ollama) — 오픈소스 코드, 문서, 이슈 추적',
            '[**Meta Llama 3.2 모델 카드**](https://llama.meta.com/) — 공식 사양, 훈련 데이터, 성능 벤치마크',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '첫 실행 후 자주 하는 실수',
          items: [
            '토큰 수와 속도를 혼동하는 것 — 초당 20 토큰으로 100 토큰을 생성하는 7B 모델은 5초가 걸리며 즉각적이지 않습니다.',
            '다른 작업으로 시스템이 바쁜 상태에서 추론을 실행하면 실제 토큰/초가 크게 감소합니다.',
            '컨텍스트 윈도우 한계를 확인하지 않는 것 — 대부분의 입문 모델은 2K~8K 토큰을 지원하며 프론티어 모델의 100K+와는 다릅니다.',
            '첫 실행 시 즉각적인 응답을 기대하는 것 — 첫 번째 응답에는 모델 로딩 시간(5~30초)이 포함됩니다. 같은 세션 내 이후 응답은 2~5배 빠릅니다.',
            '잘못된 모델 태그 사용 — `llama3.1:8b-text`는 기본 텍스트 완성 모드로 무한 반복됩니다. 채팅에는 `llama3.1:8b-instruct`와 같은 `-instruct` 태그를 사용하십시오.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 읽기',
          items: [
            '[Ollama 설치 방법](/local-llms/how-to-install-ollama) — 설치 및 설정',
            '[LM Studio 설치 방법](/local-llms/how-to-install-lm-studio) — GUI 대안',
            '[초보자를 위한 최적 로컬 LLM 모델](/local-llms/best-beginner-local-llm-models) — 하드웨어별 모델 추천',
            '[로컬 LLM이란 무엇인가?](/local-llms/what-are-local-llms) — 핵심 개념 및 작동 원리',
            '[로컬 LLM 설정 문제 해결](/local-llms/troubleshooting-local-llm-setup) — 느린 추론, GPU 미감지, 일반적인 오류 수정',
            '[로컬 LLM OpenAI 호환 API](/local-llms/local-llm-openai-compatible-api) — 실행 중인 Ollama를 Python 및 다른 애플리케이션에 연결',
            '첫 번째 로컬 LLM이 실행되고 있습니다. 이제 효과적으로 프롬프트하는 방법을 배워보십시오: [프롬프트 엔지니어링이란](https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering)에서 기초를 학습할 수 있습니다.',
          ],
        },
      },
    },
  };
