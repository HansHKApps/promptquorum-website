// Auto-generated from src/lib/local-llms/content.ts
// Slug: what-are-local-llms
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'What Are Local LLMs? How Running AI Models on Your Own Hardware Works',
      seoTitle: 'What Are Local LLMs? How AI Models Run on Your Hardware',
      intro: 'A local LLM is an AI language model that runs entirely on your own hardware -- no internet connection, no API calls, no data leaving your machine. You download the model weights as a file, run an inference engine like Ollama or LM Studio, and the model responds from your CPU or GPU alone. As of April 2026, the most practical models for beginners are Llama 3.2 3B and Phi-3 Mini.',
      metaDescription: 'Local LLMs run AI models on your own hardware -- no internet required. Learn what they are, how they work, and when to use them. Guide for 2026.',
      leadAnswerBlock: '**Local LLMs run all inference on your own hardware at zero token cost with full data privacy.** Cloud APIs (GPT-4o, Claude Opus 4.8, Gemini 3.1 Pro) deliver higher quality with minimal setup.',
      dateModified: '2026-04-15',
      publishDate: '2026-04-04',
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '7 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Is a Local LLM?', anchor: '#what-is-a-local-llm' },
        { label: 'How Does a Local LLM Work?', anchor: '#how-does-a-local-llm-work' },
        { label: 'What Hardware Do You Need?', anchor: '#what-hardware-do-you-need' },
        { label: 'Local LLM vs Cloud API: What Is the Difference?', anchor: '#local-llm-vs-cloud-api' },
        { label: 'Which Model Formats Are Used?', anchor: '#which-model-formats-are-used' },
        { label: 'When Should You Use a Local LLM?', anchor: '#when-should-you-use-a-local-llm' },
        { label: 'Common Questions', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'A local LLM runs on your own CPU or GPU -- no internet, no API costs, no data sent to third-party servers.',
            'Three components are required: the model file (GGUF or safetensors format), an inference engine (Ollama, LM Studio, or llama.cpp), and optionally a chat interface.',
            'Minimum hardware: 8 GB RAM for a 7B-parameter model at 4-bit quantization. 16 GB RAM handles most everyday models comfortably.',
            'Local models are slower than cloud APIs on consumer hardware -- a 7B model on a modern laptop produces 15-40 tokens/sec vs. ~100 tokens/sec from GPT-4o Mini via API.',
            'Best use cases: private data processing, offline work, zero recurring cost, and learning how LLMs work.',
          ],
        },
        whatIsLocalLlm: {
          title: 'What Is a Local LLM?',
          content: [
            '**A local LLM (large language model) is an AI model that runs on hardware you control -- your laptop, desktop, or on-premise server.** The model weights are stored as a file on your disk, and all processing happens on your own CPU or GPU. No prompt text or response data is transmitted to any external server.',
            'The term "local" distinguishes these models from cloud-hosted services like OpenAI GPT-4o, Anthropic Claude 4.6, or Google Gemini 3.1 Pro, which process your prompts on remote servers and return results over the internet.',
            'Local LLMs range from small 1B-parameter models that run on a phone to 70B-parameter models that require a workstation with 48 GB of VRAM. The most commonly used beginner models -- Meta Llama 3.2 3B, Microsoft Phi-3 Mini, and Google Gemma 2 2B -- run on any laptop with 8 GB of RAM.',
          ],
        },
        howItWorks: {
          title: 'How Does a Local LLM Work?',
          content: [
            '**Running a local LLM involves three layers working together: the model file, the inference engine, and the interface.**',
            '**The model file** contains the neural network weights -- the learned numerical values that define how the model processes and generates text. For local use, these weights are almost always stored in GGUF format (a compressed format developed by the llama.cpp project) or safetensors format. A 7B-parameter model quantized to 4-bit precision is approximately 4.5 GB on disk.',
            '**The inference engine** reads the model file and performs the matrix calculations needed to generate tokens. The most popular engines are [Ollama](/local-llms/how-to-install-ollama) (runs as a background service with an OpenAI-compatible API), [LM Studio](/local-llms/how-to-install-lm-studio) (a desktop app with a built-in chat UI), and llama.cpp (the underlying C++ library that most other tools build on).',
            '**The interface** is where you interact with the model -- a terminal, a web UI, or an API endpoint. Many tools like Ollama expose a REST API at `http://localhost:11434` so you can connect any OpenAI-compatible application to your local model.',
          ],
          youtubeUrl: 'https://www.youtube.com/watch?v=2p2xMKpz7wM',
        },
        hardware: {
          id: 'what-hardware-do-you-need',
          title: 'What Hardware Do You Need to Run a Local LLM?',
          content: 'The hardware requirement depends entirely on which model you want to run and how fast you need responses.',
          rows: [
            { 'Model Size': '1B-3B parameters', 'RAM Required': '4-6 GB', 'Speed (CPU)': '20-60 tok/sec', 'Example Models': 'Llama 3.2 1B, Phi-3 Mini 3.8B' },
            { 'Model Size': '7B-8B parameters', 'RAM Required': '6-8 GB', 'Speed (CPU)': '10-30 tok/sec', 'Example Models': 'Llama 3.1 8B, Mistral 7B' },
            { 'Model Size': '13B-14B parameters', 'RAM Required': '10-12 GB', 'Speed (CPU)': '5-15 tok/sec', 'Example Models': 'Llama 3.2 13B, Qwen2.5 14B' },
            { 'Model Size': '32B-34B parameters', 'RAM Required': '20-24 GB', 'Speed (CPU)': '2-6 tok/sec', 'Example Models': 'Qwen2.5 32B, DeepSeek-R1 32B' },
            { 'Model Size': '70B+ parameters', 'RAM Required': '40-48 GB', 'Speed (CPU)': '1-3 tok/sec', 'Example Models': 'Llama 3.3 70B, Qwen2.5 72B' },
          ],
          columns: ['Model Size', 'RAM Required', 'Speed (CPU)', 'Example Models'],
        },
        hardwareGpu: {
          title: 'Does a GPU Make a Local LLM Faster?',
          content: 'GPU acceleration dramatically improves speed. An NVIDIA RTX 4070 Ti (12 GB VRAM) runs a 7B model at 80-120 tokens/sec -- 4-8× faster than CPU-only mode. Apple Silicon Macs (M1, M2, M3, M4) use unified memory and achieve 40-80 tokens/sec on 7B models without a discrete GPU. For laptop users, see [How to Run Local LLMs on a Laptop](/local-llms/local-llm-on-laptop) for hardware-specific tips.',
        },
        vsCloud: {
          id: 'local-llm-vs-cloud-api',
          title: 'Local LLM vs Cloud API: What Is the Difference?',
          content: 'The core tradeoff is privacy and cost vs. capability and speed. See the full comparison in [Local LLMs vs Cloud APIs](/local-llms/local-llms-vs-cloud-apis).',
          rows: [
            { 'Factor': 'Privacy', 'Local LLM': 'Complete -- data never leaves your machine', 'Cloud API': 'Data processed on provider servers' },
            { 'Factor': 'Cost', 'Local LLM': '$0 per token after hardware cost', 'Cloud API': '$0.15-$15 per 1M tokens depending on model' },
            { 'Factor': 'Speed', 'Local LLM': '10-120 tok/sec on consumer hardware', 'Cloud API': '50-200 tok/sec, varies by load' },
            { 'Factor': 'Model quality', 'Local LLM': 'Good -- competitive at 70B scale', 'Cloud API': 'Best available (GPT-4o, Claude 4.6 Sonnet)' },
            { 'Factor': 'Setup time', 'Local LLM': '5-15 minutes with Ollama or LM Studio', 'Cloud API': '2-5 minutes to get an API key' },
            { 'Factor': 'Offline use', 'Local LLM': 'Yes -- works without internet', 'Cloud API': 'No -- requires active connection' },
          ],
          columns: ['Factor', 'Local LLM', 'Cloud API'],
        },
        modelFormats: {
          id: 'which-model-formats-are-used',
          title: 'Which Model Formats Are Used for Local LLMs?',
          content: [
            '**GGUF** (GPT-Generated Unified Format) is the dominant format for local inference. Developed by the llama.cpp project, GGUF files embed all model metadata and support multiple quantization levels in a single file. When you run `ollama pull llama3.2`, Ollama downloads a GGUF file internally.',
            '**Safetensors** is a format from Hugging Face used primarily with PyTorch-based inference tools like transformers and vLLM. It is more common in research and server deployments.',
            '**Quantization** reduces model precision to lower memory requirements. A 7B model in full FP16 precision requires ~14 GB of RAM. At Q4_K_M quantization (4-bit), the same model requires ~4.5 GB with minimal quality loss. Most beginner guides use Q4_K_M or Q5_K_M.',
          ],
        },
        whenToUse: {
          id: 'when-should-you-use-a-local-llm',
          title: 'When Should You Use a Local LLM Instead of a Cloud API?',
          items: [
            '**Processing sensitive data** -- medical records, legal documents, financial data, or any personally identifiable information (PII) that cannot leave your infrastructure.',
            '**Eliminating API costs** -- high-volume batch processing where per-token cloud costs accumulate quickly. A 7B model running locally costs $0 per query after hardware.',
            '**Offline or air-gapped environments** -- field work, secure facilities, or applications that must function without internet connectivity.',
            '**Learning and experimentation** -- understanding how LLMs work internally, testing prompts without cost concerns, or building local AI-powered tools.',
            '**Low-latency applications** -- when network round-trip time is unacceptable and a smaller local model is fast enough for the task.',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'Common Questions About Local LLMs',
          faqs: [
            {
              q: 'Can a local LLM match GPT-4o quality?',
              a: 'No -- not on current consumer hardware. GPT-4o and Claude 4.6 Sonnet outperform any locally-runnable model on complex reasoning, code generation, and instruction-following benchmarks. However, for summarization, translation, and everyday writing tasks, a well-quantized 13B-34B model produces results that are difficult to distinguish from frontier models.',
            },
            {
              q: 'Do I need a GPU to run a local LLM?',
              a: 'No. All major inference engines (Ollama, LM Studio, llama.cpp) run on CPU only. A GPU significantly speeds things up -- an NVIDIA RTX 4060 (8 GB VRAM) runs a 7B model at 60-90 tokens/sec vs. 10-20 tokens/sec on CPU. Apple Silicon Macs use GPU-accelerated unified memory by default and are well-suited for local LLMs without a discrete GPU.',
            },
            {
              q: 'Where do I download local LLM models?',
              a: 'The three main sources are: Ollama\'s model library (ollama.com/library) for easy one-command downloads; Hugging Face (huggingface.co) for the full range of GGUF and safetensors models; and LM Studio\'s built-in model browser which searches Hugging Face directly. See [How to Install Ollama](/local-llms/how-to-install-ollama) and [How to Install LM Studio](/local-llms/how-to-install-lm-studio) for setup guides.',
            },
            {
              q: 'Is running a local LLM private?',
              a: 'Yes -- with caveats. The model inference itself is fully local. However, some applications built on top of local LLMs may send data to external servers. Always check whether the interface or plugin layer you use has telemetry or cloud sync enabled. See the [Local LLM Security & Privacy Checklist](/local-llms/local-llm-security-privacy-checklist) for a full audit guide.',
            },
          ],
        },
        nextSteps: {
          title: 'How Do You Get Started with Local LLMs?',
          content: 'The fastest path to running your first local LLM is [How to Install Ollama](/local-llms/how-to-install-ollama) -- a single command installs the engine and pulls a model in under 5 minutes on macOS, Windows, or Linux. If you prefer a graphical interface, [How to Install LM Studio](/local-llms/how-to-install-lm-studio) walks through the desktop app setup. To choose which model to start with, see [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models).',
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '**llama.cpp -- GitHub** -- The foundational C++ library for running quantized models locally',
            '**Hugging Face -- Model Hub** -- Repository of 100,000+ GGUF, safetensors, and other model formats',
            '**Ollama Model Library** -- Curated list of pre-quantized models available via one-click download',
          ],
        },
        commonMistakes: {
          title: 'Common Mistakes When Getting Started',
          items: [
            'Assuming all local models are equally private -- some interfaces or quantizations may still log data.',
            'Running models that are too large for available RAM, causing severe slowdown from disk swapping.',
            'Not understanding that model quality varies dramatically -- not all local models match GPT-4o on complex tasks.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- Step-by-step setup and first model walkthrough',
            '[How to Install LM Studio](/local-llms/how-to-install-lm-studio) -- Desktop app alternative with graphical interface',
            '[Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models) -- RAM-matched model recommendations',
            '[Local LLMs vs Cloud APIs](/local-llms/local-llms-vs-cloud-apis) -- Full comparison of trade-offs',
            'Understanding what local LLMs are is the first step. Understanding how to use them effectively is the second: [prompt engineering guide](https://www.promptquorum.com/prompt-engineering) covers 80 techniques.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'What Are Local LLMs? How AI Models Run on Your Hardware',
        'description': 'Local LLMs run AI models on your own hardware -- no internet required. Learn what they are, how they work, and when to use them. Guide for 2026.',
        'url': 'https://www.promptquorum.com/local-llms/what-are-local-llms',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'local LLM' },
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'GGUF format' },
          { '@type': 'Thing', 'name': 'llama.cpp' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is the difference between a local LLM and a cloud AI API?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'A local LLM runs on your own hardware -- your CPU or GPU. A cloud AI API (OpenAI, Anthropic, Google) processes your prompts on remote servers. Local LLMs are private and free after setup; cloud APIs charge per token and send your data to external servers.' }
          },
          {
            '@type': 'Question',
            'name': 'Can I run a local LLM without a GPU?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. CPU inference works with 8GB+ RAM. A 7B model at Q4 quantization runs at 5-15 tokens/sec on a modern laptop CPU. GPU acceleration (NVIDIA CUDA, AMD ROCm, Apple Metal) boosts this to 30-100 tokens/sec.' }
          },
          {
            '@type': 'Question',
            'name': 'Where do I download local LLM models?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Three main sources: Ollama library (ollama.com/library) for one-command downloads, Hugging Face (huggingface.co) for the full range of GGUF models, and LM Studio\'s built-in model browser which searches Hugging Face directly.' }
          },
          {
            '@type': 'Question',
            'name': 'Is running a local LLM private?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes -- inference is fully local. However, some apps built on local LLMs may send data externally. Always check whether the interface or plugin layer has telemetry or cloud sync enabled.' }
          },
          {
            '@type': 'Question',
            'name': 'What hardware do I need for a local LLM?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Minimum: 8GB RAM for a 7B model at Q4 quantization. Recommended: 16GB RAM and a GPU with 8GB+ VRAM for comfortable inference. Apple Silicon Macs (M1/M2/M3) run local LLMs efficiently using unified memory.' }
          },
          {
            '@type': 'Question',
            'name': 'What is GGUF format?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'GGUF (GPT-Generated Unified Format) is the standard file format for quantized local LLMs. Developed by the llama.cpp project, it stores model weights in a compact format that supports multiple quantization levels (Q4_K_M, Q5_K_M, Q8_0).' }
          },
          {
            '@type': 'Question',
            'name': 'What is quantization in local LLMs?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Quantization reduces the numerical precision of model weights from 16-bit to 4-bit or 8-bit, shrinking file size and VRAM requirements by 50-75%. Q4_K_M is the standard: a 7B model shrinks from ~14GB (FP16) to ~4.5GB, with about 1% quality loss.' }
          },
          {
            '@type': 'Question',
            'name': 'What is llama.cpp?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'llama.cpp is an open-source C++ inference library that runs quantized LLMs on CPU and GPU. It is the engine used by Ollama, LM Studio, GPT4All, and most other local LLM tools. It supports GGUF format, NVIDIA CUDA, AMD ROCm, and Apple Metal.' }
          },
          {
            '@type': 'Question',
            'name': 'Can local LLMs match GPT-4 quality?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Not yet for the most demanding tasks. As of April 2026, the best consumer-grade local model (Llama 3.3 70B at Q4) approaches GPT-4 Turbo on benchmarks but requires a workstation GPU with 48GB+ VRAM. 7B models run on laptops but are significantly weaker than GPT-4o.' }
          },
          {
            '@type': 'Question',
            'name': 'What is the difference between a local LLM and a fine-tuned model?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'A local LLM is any model run on your own hardware. A fine-tuned model is a base model retrained on specific data to change its behavior. Fine-tuned models can also run locally via Ollama or llama.cpp using LoRA adapters or merged GGUF files.' }
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Local LLM Essentials',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'What Is a Local LLM?', 'description': 'An AI model that runs on your own hardware without internet or API calls, with full data privacy and zero token costs.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'How It Works', 'description': 'Three components work together: the model file (GGUF format), an inference engine (Ollama, LM Studio, llama.cpp), and an interface.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Hardware Requirements', 'description': 'Minimum 8GB RAM for a 7B model at Q4 quantization; 16GB RAM is comfortable for most everyday use cases.' },
        ]
      },
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: '¿Qué son los LLM locales? Cómo ejecutar modelos de IA en tu propio hardware',
      seoTitle: '¿Qué son los LLM locales? IA que corre en tu hardware',
      intro: 'Un LLM local es un modelo de lenguaje de IA que se ejecuta completamente en tu propio hardware: sin conexión a internet, sin llamadas a API, sin datos que abandonen tu máquina. Descarga los pesos del modelo como un archivo, ejecuta un motor de inferencia como Ollama o LM Studio, y el modelo responde desde tu CPU o GPU. A partir de abril de 2026, los modelos más prácticos para principiantes son Llama 3.2 3B y Phi-3 Mini.',
      metaDescription: 'Los LLM locales ejecutan modelos de IA en tu propio hardware, sin necesidad de internet. Aprende qué son, cómo funcionan y cuándo usarlos. Guía para 2026.',
      leadAnswerBlock: '**Los LLM locales ejecutan toda la inferencia en tu propio hardware con coste cero por token y privacidad total.** Las API en la nube (GPT-4o, Claude Opus 4.8, Gemini 3.1 Pro) ofrecen mayor calidad con una configuración mínima.',
      dateModified: '2026-04-15',
      publishDate: '2026-04-04',
      audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
      readTime: '7 min de lectura',
      educationalLevel: 'Beginner',
      primaryTerm: 'LLM local',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: '¿Qué es un LLM local?', anchor: '#what-is-a-local-llm' },
        { label: '¿Cómo funciona un LLM local?', anchor: '#how-does-a-local-llm-work' },
        { label: '¿Qué hardware necesitas?', anchor: '#what-hardware-do-you-need' },
        { label: 'LLM local vs API en la nube: ¿cuál es la diferencia?', anchor: '#local-llm-vs-cloud-api' },
        { label: '¿Qué formatos de modelo se usan?', anchor: '#which-model-formats-are-used' },
        { label: '¿Cuándo debes usar un LLM local?', anchor: '#when-should-you-use-a-local-llm' },
        { label: 'Preguntas frecuentes', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Un LLM local se ejecuta en tu propia CPU o GPU: sin internet, sin costes de API, sin datos enviados a servidores de terceros.',
            'Se necesitan tres componentes: el archivo del modelo (formato GGUF o safetensors), un motor de inferencia (Ollama, LM Studio o llama.cpp) y, opcionalmente, una interfaz de chat.',
            'Hardware mínimo: 8 GB de RAM para un modelo de 7B parámetros con cuantización de 4 bits. Con 16 GB de RAM se manejan con comodidad la mayoría de los modelos cotidianos.',
            'Los modelos locales son más lentos que las API en la nube en hardware de consumo: un modelo de 7B en un portátil moderno produce 15-40 tokens/seg frente a ~100 tokens/seg de GPT-4o Mini por API.',
            'Mejores casos de uso: procesamiento de datos privados, trabajo sin conexión, coste recurrente cero y aprender cómo funcionan los LLM.',
          ],
        },
        whatIsLocalLlm: {
          title: '¿Qué es un LLM local?',
          content: [
            '**Un LLM local (modelo de lenguaje grande) es un modelo de IA que se ejecuta en hardware bajo tu control: tu portátil, ordenador de escritorio o servidor local.** Los pesos del modelo se almacenan como un archivo en tu disco, y todo el procesamiento ocurre en tu propia CPU o GPU. Ningún texto de los prompts ni datos de respuesta se transmite a ningún servidor externo.',
            'El término "local" distingue estos modelos de los servicios alojados en la nube, como OpenAI GPT-4o, Anthropic Claude 4.6 o Google Gemini 3.1 Pro, que procesan tus prompts en servidores remotos y devuelven los resultados por internet.',
            'Los LLM locales van desde pequeños modelos de 1B parámetros que funcionan en un teléfono hasta modelos de 70B parámetros que requieren una estación de trabajo con 48 GB de VRAM. Los modelos para principiantes más utilizados -- Meta Llama 3.2 3B, Microsoft Phi-3 Mini y Google Gemma 2 2B -- funcionan en cualquier portátil con 8 GB de RAM.',
          ],
        },
        howItWorks: {
          title: '¿Cómo funciona un LLM local?',
          content: [
            '**Ejecutar un LLM local implica tres capas que trabajan juntas: el archivo del modelo, el motor de inferencia y la interfaz.**',
            '**El archivo del modelo** contiene los pesos de la red neuronal: los valores numéricos aprendidos que definen cómo el modelo procesa y genera texto. Para uso local, estos pesos se almacenan casi siempre en formato GGUF (un formato comprimido desarrollado por el proyecto llama.cpp) o en formato safetensors. Un modelo de 7B parámetros cuantizado a 4 bits de precisión ocupa aproximadamente 4,5 GB en disco.',
            '**El motor de inferencia** lee el archivo del modelo y realiza los cálculos matriciales necesarios para generar tokens. Los motores más populares son [Ollama](/es/local-llms/how-to-install-ollama) (se ejecuta como servicio en segundo plano con una API compatible con OpenAI), [LM Studio](/es/local-llms/how-to-install-lm-studio) (una aplicación de escritorio con interfaz de chat integrada) y llama.cpp (la biblioteca C++ subyacente sobre la que se construyen la mayoría de las herramientas).',
            '**La interfaz** es donde interactúas con el modelo: un terminal, una interfaz web o un endpoint de API. Muchas herramientas como Ollama exponen una API REST en `http://localhost:11434` para que puedas conectar cualquier aplicación compatible con OpenAI a tu modelo local.',
          ],
          youtubeUrl: 'https://www.youtube.com/watch?v=2p2xMKpz7wM',
        },
        hardware: {
          id: 'what-hardware-do-you-need',
          title: '¿Qué hardware necesitas para ejecutar un LLM local?',
          content: 'El requisito de hardware depende completamente del modelo que quieras ejecutar y de la velocidad de respuesta que necesites.',
          rows: [
            { 'Tamaño del modelo': '1B-3B parámetros', 'RAM necesaria': '4-6 GB', 'Velocidad (CPU)': '20-60 tok/seg', 'Modelos de ejemplo': 'Llama 3.2 1B, Phi-3 Mini 3.8B' },
            { 'Tamaño del modelo': '7B-8B parámetros', 'RAM necesaria': '6-8 GB', 'Velocidad (CPU)': '10-30 tok/seg', 'Modelos de ejemplo': 'Llama 3.1 8B, Mistral 7B' },
            { 'Tamaño del modelo': '13B-14B parámetros', 'RAM necesaria': '10-12 GB', 'Velocidad (CPU)': '5-15 tok/seg', 'Modelos de ejemplo': 'Llama 3.2 13B, Qwen2.5 14B' },
            { 'Tamaño del modelo': '32B-34B parámetros', 'RAM necesaria': '20-24 GB', 'Velocidad (CPU)': '2-6 tok/seg', 'Modelos de ejemplo': 'Qwen2.5 32B, DeepSeek-R1 32B' },
            { 'Tamaño del modelo': '70B+ parámetros', 'RAM necesaria': '40-48 GB', 'Velocidad (CPU)': '1-3 tok/seg', 'Modelos de ejemplo': 'Llama 3.3 70B, Qwen2.5 72B' },
          ],
          columns: ['Tamaño del modelo', 'RAM necesaria', 'Velocidad (CPU)', 'Modelos de ejemplo'],
        },
        hardwareGpu: {
          title: '¿Una GPU hace más rápido un LLM local?',
          content: 'La aceleración por GPU mejora la velocidad de forma drástica. Una NVIDIA RTX 4070 Ti (12 GB de VRAM) ejecuta un modelo de 7B a 80-120 tokens/seg: entre 4 y 8 veces más rápido que en modo solo CPU. Los Mac con Apple Silicon (M1, M2, M3, M4) usan memoria unificada y alcanzan 40-80 tokens/seg en modelos de 7B sin una GPU dedicada. Para usuarios de portátiles, consulta [Cómo ejecutar LLM locales en un portátil](/es/local-llms/local-llm-on-laptop) para consejos específicos de hardware.',
        },
        vsCloud: {
          id: 'local-llm-vs-cloud-api',
          title: 'LLM local vs API en la nube: ¿cuál es la diferencia?',
          content: 'La compensación principal es privacidad y coste frente a capacidad y velocidad. Consulta la comparación completa en [LLM locales vs API en la nube](/es/local-llms/local-llms-vs-cloud-apis).',
          rows: [
            { 'Factor': 'Privacidad', 'LLM local': 'Total: los datos nunca salen de tu máquina', 'API en la nube': 'Datos procesados en servidores del proveedor' },
            { 'Factor': 'Coste', 'LLM local': '$0 por token tras el coste del hardware', 'API en la nube': '$0,15-$15 por 1M de tokens según el modelo' },
            { 'Factor': 'Velocidad', 'LLM local': '10-120 tok/seg en hardware de consumo', 'API en la nube': '50-200 tok/seg, varía según la carga' },
            { 'Factor': 'Calidad del modelo', 'LLM local': 'Buena: competitiva a escala 70B', 'API en la nube': 'La mejor disponible (GPT-4o, Claude 4.6 Sonnet)' },
            { 'Factor': 'Tiempo de configuración', 'LLM local': '5-15 minutos con Ollama o LM Studio', 'API en la nube': '2-5 minutos para obtener una API key' },
            { 'Factor': 'Uso sin conexión', 'LLM local': 'Sí: funciona sin internet', 'API en la nube': 'No: requiere conexión activa' },
          ],
          columns: ['Factor', 'LLM local', 'API en la nube'],
        },
        modelFormats: {
          id: 'which-model-formats-are-used',
          title: '¿Qué formatos de modelo se usan para los LLM locales?',
          content: [
            '**GGUF** (GPT-Generated Unified Format) es el formato dominante para la inferencia local. Desarrollado por el proyecto llama.cpp, los archivos GGUF integran todos los metadatos del modelo y soportan múltiples niveles de cuantización en un único archivo. Cuando ejecutas `ollama pull llama3.2`, Ollama descarga internamente un archivo GGUF.',
            '**Safetensors** es un formato de Hugging Face utilizado principalmente con herramientas de inferencia basadas en PyTorch, como transformers y vLLM. Es más habitual en investigación y despliegues en servidores.',
            '**La cuantización** reduce la precisión del modelo para bajar los requisitos de memoria. Un modelo de 7B en precisión FP16 completa requiere ~14 GB de RAM. Con cuantización Q4_K_M (4 bits), el mismo modelo necesita ~4,5 GB con una pérdida de calidad mínima. La mayoría de las guías para principiantes usan Q4_K_M o Q5_K_M.',
          ],
        },
        whenToUse: {
          id: 'when-should-you-use-a-local-llm',
          title: '¿Cuándo debes usar un LLM local en lugar de una API en la nube?',
          items: [
            '**Procesamiento de datos sensibles** -- historiales médicos, documentos legales, datos financieros o cualquier información de identificación personal (PII) que no puede salir de tu infraestructura.',
            '**Eliminar costes de API** -- procesamiento por lotes de alto volumen donde los costes por token en la nube se acumulan rápidamente. Un modelo de 7B ejecutado localmente cuesta $0 por consulta una vez amortizado el hardware.',
            '**Entornos sin conexión o aislados** -- trabajo de campo, instalaciones seguras o aplicaciones que deben funcionar sin conectividad a internet.',
            '**Aprendizaje y experimentación** -- entender cómo funcionan los LLM internamente, probar prompts sin preocupaciones de coste o construir herramientas locales potenciadas por IA.',
            '**Aplicaciones de baja latencia** -- cuando el tiempo de ida y vuelta por red es inaceptable y un modelo local más pequeño es suficientemente rápido para la tarea.',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'Preguntas frecuentes sobre los LLM locales',
          faqs: [
            {
              q: '¿Puede un LLM local igualar la calidad de GPT-4o?',
              a: 'No, no en el hardware de consumo actual. GPT-4o y Claude 4.6 Sonnet superan a cualquier modelo ejecutable localmente en razonamiento complejo, generación de código y benchmarks de seguimiento de instrucciones. Sin embargo, para tareas de resumen, traducción y escritura cotidiana, un modelo de 13B-34B bien cuantizado produce resultados difíciles de distinguir de los modelos frontier.',
            },
            {
              q: '¿Necesito una GPU para ejecutar un LLM local?',
              a: 'No. Todos los motores de inferencia principales (Ollama, LM Studio, llama.cpp) funcionan solo con CPU. Una GPU acelera considerablemente el rendimiento: una NVIDIA RTX 4060 (8 GB de VRAM) ejecuta un modelo de 7B a 60-90 tokens/seg frente a 10-20 tokens/seg solo en CPU. Los Mac con Apple Silicon utilizan memoria unificada acelerada por GPU de forma predeterminada y son ideales para LLM locales sin una GPU dedicada.',
            },
            {
              q: '¿Dónde descargo los modelos de LLM locales?',
              a: 'Las tres fuentes principales son: la biblioteca de modelos de Ollama (ollama.com/library) para descargas con un solo comando; Hugging Face (huggingface.co) para la gama completa de modelos GGUF y safetensors; y el navegador de modelos integrado de LM Studio, que busca directamente en Hugging Face. Consulta [Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) y [Cómo instalar LM Studio](/es/local-llms/how-to-install-lm-studio) para guías de configuración.',
            },
            {
              q: '¿Es privado ejecutar un LLM local?',
              a: 'Sí, con matices. La inferencia del modelo en sí es completamente local. Sin embargo, algunas aplicaciones construidas sobre LLM locales pueden enviar datos a servidores externos. Comprueba siempre si la interfaz o la capa de plugins que utilizas tiene habilitada la telemetría o la sincronización en la nube. Consulta la [Lista de verificación de seguridad y privacidad para LLM locales](/es/local-llms/local-llm-security-privacy-checklist) para una guía de auditoría completa.',
            },
          ],
        },
        nextSteps: {
          title: '¿Cómo empezar con los LLM locales?',
          content: 'La forma más rápida de ejecutar tu primer LLM local es [Cómo instalar Ollama](/es/local-llms/how-to-install-ollama): un único comando instala el motor y descarga un modelo en menos de 5 minutos en macOS, Windows o Linux. Si prefieres una interfaz gráfica, [Cómo instalar LM Studio](/es/local-llms/how-to-install-lm-studio) guía paso a paso por la configuración de la aplicación de escritorio. Para elegir con qué modelo empezar, consulta [Mejores modelos LLM locales para principiantes](/es/local-llms/best-beginner-local-llm-models).',
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '**llama.cpp -- GitHub** -- La biblioteca C++ fundamental para ejecutar modelos cuantizados localmente',
            '**Hugging Face -- Model Hub** -- Repositorio de más de 100.000 modelos en formato GGUF, safetensors y otros',
            '**Ollama Model Library** -- Lista curada de modelos precuantizados disponibles para descargar con un clic',
          ],
        },
        commonMistakes: {
          title: 'Errores comunes al empezar',
          items: [
            'Asumir que todos los modelos locales son igualmente privados: algunas interfaces o cuantizaciones pueden seguir registrando datos.',
            'Ejecutar modelos demasiado grandes para la RAM disponible, lo que provoca una ralentización severa por intercambio de disco.',
            'No entender que la calidad de los modelos varía drásticamente: no todos los modelos locales igualan a GPT-4o en tareas complejas.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) -- Configuración paso a paso y primer modelo',
            '[Cómo instalar LM Studio](/es/local-llms/how-to-install-lm-studio) -- Alternativa de aplicación de escritorio con interfaz gráfica',
            '[Mejores modelos LLM locales para principiantes](/es/local-llms/best-beginner-local-llm-models) -- Recomendaciones de modelos según la RAM disponible',
            '[LLM locales vs API en la nube](/es/local-llms/local-llms-vs-cloud-apis) -- Comparación completa de las compensaciones',
            'Entender qué son los LLM locales es el primer paso. Aprender a usarlos eficazmente es el segundo: la [guía de prompt engineering](https://www.promptquorum.com/es/prompt-engineering) cubre 80 técnicas.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '¿Qué son los LLM locales? Cómo los modelos de IA se ejecutan en tu hardware',
        'description': 'Los LLM locales ejecutan modelos de IA en tu propio hardware, sin necesidad de internet. Aprende qué son, cómo funcionan y cuándo usarlos. Guía para 2026.',
        'url': 'https://www.promptquorum.com/es/local-llms/what-are-local-llms?lang=es',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'LLM local' },
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'formato GGUF' },
          { '@type': 'Thing', 'name': 'llama.cpp' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Cuál es la diferencia entre un LLM local y una API de IA en la nube?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Un LLM local se ejecuta en tu propio hardware: tu CPU o GPU. Una API de IA en la nube (OpenAI, Anthropic, Google) procesa tus prompts en servidores remotos. Los LLM locales son privados y gratuitos después de la configuración; las API en la nube cobran por token y envían tus datos a servidores externos.' }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo ejecutar un LLM local sin GPU?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. La inferencia con CPU funciona con 8 GB de RAM o más. Un modelo de 7B con cuantización Q4 se ejecuta a 5-15 tokens/seg en una CPU de portátil moderna. La aceleración por GPU (NVIDIA CUDA, AMD ROCm, Apple Metal) lo eleva a 30-100 tokens/seg.' }
          },
          {
            '@type': 'Question',
            'name': '¿Dónde descargo los modelos de LLM locales?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Tres fuentes principales: la biblioteca de Ollama (ollama.com/library) para descargas con un solo comando, Hugging Face (huggingface.co) para la gama completa de modelos GGUF, y el navegador de modelos integrado de LM Studio, que busca directamente en Hugging Face.' }
          },
          {
            '@type': 'Question',
            'name': '¿Es privado ejecutar un LLM local?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí: la inferencia es completamente local. Sin embargo, algunas aplicaciones construidas sobre LLM locales pueden enviar datos al exterior. Comprueba siempre si la interfaz o la capa de plugins tiene habilitada la telemetría o la sincronización en la nube.' }
          },
          {
            '@type': 'Question',
            'name': '¿Qué hardware necesito para un LLM local?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Mínimo: 8 GB de RAM para un modelo de 7B con cuantización Q4. Recomendado: 16 GB de RAM y una GPU con 8 GB+ de VRAM para una inferencia cómoda. Los Mac con Apple Silicon (M1/M2/M3) ejecutan LLM locales de forma eficiente utilizando memoria unificada.' }
          },
          {
            '@type': 'Question',
            'name': '¿Qué es el formato GGUF?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'GGUF (GPT-Generated Unified Format) es el formato de archivo estándar para LLM locales cuantizados. Desarrollado por el proyecto llama.cpp, almacena los pesos del modelo en un formato compacto que soporta múltiples niveles de cuantización (Q4_K_M, Q5_K_M, Q8_0).' }
          },
          {
            '@type': 'Question',
            'name': '¿Qué es la cuantización en los LLM locales?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'La cuantización reduce la precisión numérica de los pesos del modelo de 16 bits a 4 u 8 bits, reduciendo el tamaño del archivo y los requisitos de VRAM en un 50-75%. Q4_K_M es el estándar: un modelo de 7B pasa de ~14 GB (FP16) a ~4,5 GB, con una pérdida de calidad de aproximadamente un 1%.' }
          },
          {
            '@type': 'Question',
            'name': '¿Qué es llama.cpp?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'llama.cpp es una biblioteca de inferencia C++ de código abierto que ejecuta LLM cuantizados en CPU y GPU. Es el motor utilizado por Ollama, LM Studio, GPT4All y la mayoría de las demás herramientas de LLM local. Soporta el formato GGUF, NVIDIA CUDA, AMD ROCm y Apple Metal.' }
          },
          {
            '@type': 'Question',
            'name': '¿Pueden los LLM locales igualar la calidad de GPT-4?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Todavía no para las tareas más exigentes. A partir de abril de 2026, el mejor modelo local para consumidores (Llama 3.3 70B en Q4) se acerca a GPT-4 Turbo en benchmarks, pero requiere una GPU de estación de trabajo con 48 GB+ de VRAM. Los modelos de 7B funcionan en portátiles, pero son significativamente más débiles que GPT-4o.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la diferencia entre un LLM local y un modelo ajustado (fine-tuned)?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Un LLM local es cualquier modelo que se ejecuta en tu propio hardware. Un modelo ajustado es un modelo base reentrenado con datos específicos para cambiar su comportamiento. Los modelos ajustados también pueden ejecutarse localmente a través de Ollama o llama.cpp usando adaptadores LoRA o archivos GGUF combinados.' }
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Fundamentos de los LLM locales',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': '¿Qué es un LLM local?', 'description': 'Un modelo de IA que se ejecuta en tu propio hardware sin internet ni llamadas a API, con total privacidad de los datos y coste cero por token.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Cómo funciona', 'description': 'Tres componentes trabajan juntos: el archivo del modelo (formato GGUF), un motor de inferencia (Ollama, LM Studio, llama.cpp) y una interfaz.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Requisitos de hardware', 'description': 'Mínimo 8 GB de RAM para un modelo de 7B con cuantización Q4; con 16 GB de RAM se trabaja cómodamente en la mayoría de los casos de uso cotidianos.' },
        ]
      },
    },
    fr: {
      theme: 'Premiers pas',
      title: 'Qu\'est-ce que les LLMs locaux ? Comment exécuter des modèles IA sur votre propre matériel',
      seoTitle: 'LLMs locaux 2026 : avantages, risques et guide de démarrage',
      intro: 'Un LLM local est un modèle de langage IA exécuté entièrement sur votre propre matériel -- sans connexion internet, sans appels API, sans données quittant votre machine. Téléchargez les poids du modèle, lancez un moteur d\'inférence comme Ollama ou LM Studio, et obtenez des réponses depuis votre CPU ou GPU. En avril 2026, les modèles les plus pratiques pour débuter sont Llama 3.2 3B et Phi-3 Mini.',
      metaDescription: 'LLMs locaux : confidentialité totale, coût zéro, utilisation hors ligne. Comparez les avantages et inconvénients, commencez avec Ollama et LM Studio.',
      publishDate: '2026-04-04',
      readTime: '7 min',
      educationalLevel: 'Beginner',
      primaryTerm: 'LLM local',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Qu\'est-ce qu\'un LLM local ?', anchor: '#what-is-a-local-llm' },
        { label: 'Comment fonctionne un LLM local ?', anchor: '#how-does-a-local-llm-work' },
        { label: 'Quel matériel faut-il ?', anchor: '#what-hardware-do-you-need' },
        { label: 'LLM local vs API cloud : différences', anchor: '#local-llm-vs-cloud-api' },
        { label: 'Quels formats de modèles sont utilisés ?', anchor: '#which-model-formats-are-used' },
        { label: 'Quand utiliser un LLM local ?', anchor: '#when-should-you-use-a-local-llm' },
        { label: 'Questions fréquentes', anchor: '#common-questions' },
      ],

      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Déboguer les erreurs de configuration LLM local',
        'step': [
          { '@type': 'HowToStep', 'name': 'Corriger les erreurs de mémoire insuffisante', 'text': 'Passer à une quantification plus petite (Q4_K_M) ou un modèle plus petit. Vérifier la RAM avec free -h.' },
          { '@type': 'HowToStep', 'name': 'Activer la détection du GPU', 'text': 'Mettre à jour les pilotes (NVIDIA 525+), définir OLLAMA_GPU_LAYERS=999, vérifier avec nvidia-smi.' },
          { '@type': 'HowToStep', 'name': "Accélérer l'inférence lente", 'text': "Confirmer l'activité du GPU avec ollama ps, réduire la taille du modèle ou utiliser Q4_K_M." },
          { '@type': 'HowToStep', 'name': 'Corriger la connexion refusée', 'text': 'Démarrer Ollama avec ollama serve ou redémarrer le service systemd. Vérifier avec curl localhost:11434.' },
          { '@type': 'HowToStep', 'name': 'Résoudre le modèle non trouvé', 'text': 'Lister les modèles avec ollama list, extraire les modèles manquants avec ollama pull, vérifier les noms/tags exacts.' },
        ]
      },
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'LLM local = exécution sur votre CPU/GPU, zéro coût API, zéro partage de données.',
            'Trois composants : le fichier modèle (GGUF ou safetensors), un moteur d\'inférence (Ollama, LM Studio, llama.cpp), optionnellement une interface.',
            'Minimum : 8 GB RAM pour un modèle 7B en quantification 4-bit. 16 GB pour les usages courants.',
            'Plus lent que le cloud sur consumer : 15-40 tokens/sec local vs ~100 tokens/sec avec GPT-4o Mini.',
            'Cas idéaux : données sensibles, travail hors ligne, zéro coût récurrent, compréhension des LLMs.',
          ],
        },
        whatIsLocalLlm: {
          title: 'Qu\'est-ce qu\'un LLM local ?',
          content: [
            '**Un LLM local est un modèle IA fonctionnant sur votre propre matériel -- laptop, desktop, serveur local.** Les poids sont stockés comme fichier, tous les calculs se font sur votre CPU ou GPU. Aucune donnée ne quitte votre machine.',
            'Ce terme les distingue des services cloud comme GPT-4o, Claude 4.6 ou Gemini 3.1 Pro, qui traitent vos prompts sur des serveurs distants.',
            'Les LLMs locaux vont de modèles 1B sur téléphone à 70B nécessitant 48 GB VRAM. Les plus accessibles : Llama 3.2 3B, Phi-3 Mini, Gemma 2 2B (tous sur un laptop 8 GB).',
          ],
        },
        howItWorks: {
          title: 'Comment fonctionne un LLM local ?',
          content: [
            '**Trois couches : fichier modèle, moteur d\'inférence, interface.**',
            '**Fichier modèle** : contient les poids du réseau neuronal. Stockés en GGUF (format du projet llama.cpp, compressé) ou safetensors. Un modèle 7B quantifié 4-bit ≈ 4.5 GB.',
            '**Moteur d\'inférence** : lit le fichier et effectue calculs matriciels. Principaux : [Ollama](/fr/local-llms/how-to-install-ollama) (service API compatible OpenAI), [LM Studio](/fr/local-llms/how-to-install-lm-studio) (interface desktop), llama.cpp (librairie C++ sous-jacente).',
            '**Interface** : terminal, web UI, ou API. Ollama expose une API REST sur `http://localhost:11434` compatible OpenAI.',
          ],
        },
        hardware: {
          title: 'Quel matériel pour un LLM local ?',
          content: 'Les besoins dépendent du modèle et de la rapidité désirée.',
          rows: [
            { 'Taille modèle': '1B-3B param.', 'RAM': '4-6 GB', 'Vitesse (CPU)': '20-60 tok/sec', 'Exemples': 'Llama 3.2 1B, Phi-3 Mini' },
            { 'Taille modèle': '7B-8B param.', 'RAM': '6-8 GB', 'Vitesse (CPU)': '10-30 tok/sec', 'Exemples': 'Llama 3.1 8B, Mistral 7B' },
            { 'Taille modèle': '13B-14B param.', 'RAM': '10-12 GB', 'Vitesse (CPU)': '5-15 tok/sec', 'Exemples': 'Llama 3.2 13B, Qwen2.5 14B' },
            { 'Taille modèle': '32B-34B param.', 'RAM': '20-24 GB', 'Vitesse (CPU)': '2-6 tok/sec', 'Exemples': 'Qwen2.5 32B, DeepSeek-R1 32B' },
            { 'Taille modèle': '70B+ param.', 'RAM': '40-48 GB', 'Vitesse (CPU)': '1-3 tok/sec', 'Exemples': 'Llama 3.3 70B, Qwen2.5 72B' },
          ],
          columns: ['Taille modèle', 'RAM', 'Vitesse (CPU)', 'Exemples'],
        },
        hardwareGpu: {
          title: 'Une GPU accélère-t-elle un LLM local ?',
          content: 'Oui, énormément. NVIDIA RTX 4070 Ti (12 GB VRAM) : 80-120 tokens/sec (4-8× plus rapide). Apple Silicon Macs (M1-M5) : 40-80 tokens/sec sans GPU discret grâce à la mémoire unifiée. Voir [LLMs locaux sur laptop](/fr/local-llms/local-llm-on-laptop) pour tips matériel spécifiques.',
        },
        vsCloud: {
          title: 'Différence : LLM local vs API cloud ?',
          content: 'Compromis : confidentialité + coût vs puissance + vitesse. Voir la [comparaison complète](/fr/local-llms/local-llms-vs-cloud-apis).',
          rows: [
            { 'Aspect': 'Confidentialité', 'LLM local': 'Totale -- données ne quittent jamais', 'API cloud': 'Traitement serveur' },
            { 'Aspect': 'Coût', 'LLM local': '0€/token (après matériel)', 'API cloud': '0.15-15€/1M tokens' },
            { 'Aspect': 'Vitesse', 'LLM local': '10-120 tok/sec', 'API cloud': '50-200 tok/sec' },
            { 'Aspect': 'Qualité', 'LLM local': 'Bonne à 70B', 'API cloud': 'Meilleure (GPT-4o, Claude)' },
            { 'Aspect': 'Installation', 'LLM local': '5-15 min', 'API cloud': '2-5 min clé API' },
            { 'Aspect': 'Hors ligne', 'LLM local': 'Oui', 'API cloud': 'Non' },
          ],
          columns: ['Aspect', 'LLM local', 'API cloud'],
        },
        modelFormats: {
          title: 'Formats de modèles pour LLMs locaux ?',
          content: [
            '**GGUF** : format dominant. Développé par llama.cpp, supporte quantifications multiples en un fichier. `ollama pull llama3.2` télécharge GGUF en interne.',
            '**Safetensors** : format Hugging Face, utilisé avec PyTorch (transformers, vLLM). Plus courant en recherche.',
            '**Quantification** : réduit précision pour moins de RAM. 7B FP16 = ~14 GB; 7B Q4_K_M = ~4.5 GB (minimal qualité perte). Débutants : Q4_K_M ou Q5_K_M.',
          ],
        },
        whenToUse: {
          title: 'Quand utiliser un LLM local ?',
          items: [
            '**Données sensibles** : dossiers médicaux, légaux, financiers, donnees personnelles (RGPD).',
            '**Éliminer coûts API** : traitement batch haute-volume où coûts cloud s\'accumulent.',
            '**Hors ligne ou sécurisé** : terrain, installations sécurisées, zéro connexion internet.',
            '**Apprentissage** : comprendre LLMs, tester prompts sans frais, outils IA locaux.',
            '**Faible latence** : quand round-trip réseau inacceptable et modèle 7B suffisant.',
          ],
        },
        faqSection: {
          title: 'Questions fréquentes',
          faqs: [
            {
              q: 'Un LLM local peut-il égaler GPT-4o ?',
              a: 'Non, sur hardware consumer. GPT-4o et Claude 4.6 gagnent sur raisonnement complexe, génération code, benchmarks. Mais 13B-34B bien quantifiés font très bien summarization, traduction, écriture courante -- résultats quasi-indistinguibles.',
            },
            {
              q: 'Besoin d\'une GPU ?',
              a: 'Non. Ollama, LM Studio, llama.cpp tournent sur CPU. GPU accélère beaucoup : RTX 4060 = 60-90 tok/sec vs 10-20 sur CPU. Apple Silicon Macs (M1-M5) excellent sans GPU discret grâce mémoire unifiée.',
            },
            {
              q: 'Où télécharger modèles ?',
              a: 'Trois sources : Ollama (ollama.com/library, easy downloads), Hugging Face (huggingface.co, GGUF + safetensors), LM Studio (browser intégré). Voir [Installer Ollama](/fr/local-llms/how-to-install-ollama) et [Installer LM Studio](/fr/local-llms/how-to-install-lm-studio).',
            },
            {
              q: 'LLM local = privé ?',
              a: 'Oui, avec réserves. Inférence locale = privée. Mais applications peut-être envoient données ailleurs. Vérifier télémétrie/sync cloud. Voir [Checklist Sécurité LLM local](/fr/local-llms/local-llm-security-privacy-checklist).',
            },
          ],
        },
        nextSteps: {
          title: 'Comment démarrer ?',
          content: 'Chemin rapide : [Installer Ollama](/fr/local-llms/how-to-install-ollama) -- une commande, 5 min sur macOS/Windows/Linux. GUI préféré : [Installer LM Studio](/fr/local-llms/how-to-install-lm-studio). Modèle ? [Meilleurs LLMs débutants](/fr/local-llms/best-beginner-local-llm-models).',
        },
        sources: {
          title: 'Sources',
          items: [
            '**llama.cpp -- GitHub** : librairie C++ pour modèles quantifiés locaux',
            '**Hugging Face -- Hub** : 100k+ GGUF, safetensors, formats',
            '**Ollama Model Library** : modèles pré-quantifiés, téléchargement un-clic',
          ],
        },
        commonMistakes: {
          title: 'Erreurs courantes',
          items: [
            'Supposer tout LLM local equally privé -- interfaces peuvent logger données.',
            'Lancer modèles trop gros → RAM insuffisante → disk swap → très lent.',
            'Ignorer variation qualité modèles -- tous ne rivalisent pas GPT-4o complexe.',
          ],
        },
        relatedReading: {
          title: 'Lectures connexes',
          items: [
            '[Installer Ollama](/fr/local-llms/how-to-install-ollama) : setup + premier modèle',
            '[Installer LM Studio](/fr/local-llms/how-to-install-lm-studio) : GUI alternative',
            '[Meilleurs LLMs débutants](/fr/local-llms/best-beginner-local-llm-models) : recommandations RAM',
            '[LLMs locaux vs Cloud APIs](/fr/local-llms/local-llms-vs-cloud-apis) : comparaison complète',
          ],
        },
      },
    },
    ja: {
      theme: 'はじめに',
      title: 'ローカルLLMとは？自分のハードウェアでAIモデルを実行する方法',
      seoTitle: 'ローカルLLM 2026：メリット・デメリット・入門ガイド',
      intro: 'ローカルLLM（大規模言語モデル）とは、あなたのハードウェア上で完全に実行されるAIモデルです。インターネット接続不要、API呼び出しなし、データは一切外に出ません。モデルの重みをダウンロードしてOllamaやLM Studioなどの推論エンジンを実行すれば、あなたのCPUまたはGPUから直接応答が得られます。2026年4月現在、初心者向けの実用的なモデルはLlama 3.2 3BおよびPhi-3 Miniです。',
      metaDescription: 'ローカルLLM：完全なプライバシー、コストゼロ、オフライン利用。メリット・デメリットを比較、OllamaとLM Studioで今すぐ始める。',
      publishDate: '2026-04-04',
      readTime: '8分読了',
      educationalLevel: 'Beginner',
      primaryTerm: 'ローカルLLM',
      toc: [
        { label: '主要ポイント', anchor: '#key-takeaways' },
        { label: 'ローカルLLMとは？', anchor: '#what-is-a-local-llm' },
        { label: 'ローカルLLMはどう動く？', anchor: '#how-does-a-local-llm-work' },
        { label: '必要なハードウェアは？', anchor: '#what-hardware-do-you-need' },
        { label: 'ローカルLLM vs クラウドAPI：違いは？', anchor: '#local-llm-vs-cloud-api' },
        { label: 'モデル形式は？', anchor: '#which-model-formats-are-used' },
        { label: 'いつローカルLLMを使うべき？', anchor: '#when-should-you-use-a-local-llm' },
        { label: 'よくある質問', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'ローカルLLM＝自分のCPU/GPUで実行、API費用ゼロ、データ外部送信なし。',
            '3つの要素：モデルファイル（GGUFまたはsafetensors形式）、推論エンジン（Ollama、LM Studio、llama.cpp）、オプションでチャットUI。',
            '最小要件：7Bパラメータモデルで4ビット量子化時8GB RAM。通常は16GB あれば十分。',
            'コンシューマー機では遅い：ローカル7B＝15～40トークン/秒 vs GPT-4o Mini API＝約100トークン/秒。',
            'ベストユースケース：機密データ処理、オフライン作業、継続費用ゼロ、LLM理解。',
          ],
        },
        whatIsLocalLlm: {
          title: 'ローカルLLMとは何か',
          content: [
            '**ローカルLLM（大規模言語モデル）は、あなたが制御するハードウェア上で実行されるAIモデルです。** ノートパソコン、デスクトップ、またはオンプレミスサーバーでも構いません。モデルの重みはファイルとしてディスク上に保存され、すべての処理はあなた自身のCPUまたはGPU上で行われます。プロンプトテキストもレスポンスデータも外部サーバーに送信されません。',
            'こうしたモデルを「ローカル」と呼ぶのは、GPT-4o、Claude 4.6、Gemini 3.1 Proなどのクラウドサービスとの違いを強調するためです。これらクラウドサービスはプロンプトをリモートサーバーで処理してインターネット経由で結果を返します。',
            'ローカルLLMは多様です。電話で動作する1Bパラメータモデルから、48GB VRAM を要する70Bパラメータモデルまで。初心者向けの一般的なモデル--Meta Llama 3.2 3B、Microsoft Phi-3 Mini、Google Gemma 2 2B--はいずれも8GB RAMのノートパソコンで動作します。',
          ],
        },
        howItWorks: {
          title: 'ローカルLLMはどう動くか',
          content: [
            '**ローカルLLM実行には3層が協働します：モデルファイル、推論エンジン、インターフェース。**',
            '**モデルファイル**：ニューラルネットワークの重み（学習された数値）を含みます。ローカル用途ではほぼ常にGGUF形式（llama.cpp プロジェクト開発、圧縮）またはsafetensors形式で保存されます。4ビット精度に量子化した7Bパラメータモデルはディスク上でおよそ4.5GB。',
            '**推論エンジン**：モデルファイルを読み込み、トークン生成に必要な行列計算を実行します。最も人気のあるエンジン：[Ollama](/ja/local-llms/how-to-install-ollama)（バックグラウンドサービス、OpenAI互換API）、[LM Studio](/ja/local-llms/how-to-install-lm-studio)（デスクトップアプリ、統合チャットUI）、llama.cpp（多くのツールの基礎となるC++ライブラリ）。',
            '**インターフェース**：モデルとやり取りする場所です。ターミナル、ウェブUI、APIエンドポイント。Ollama などは `http://localhost:11434` に REST API を公開するため、OpenAI互換のアプリケーションをローカルモデルに接続できます。',
          ],
        },
        hardware: {
          title: 'ローカルLLM実行に必要なハードウェア',
          content: '必要なハードウェアは、どのモデルを実行したいか、どのくらいの速度が必要かで決まります。',
          rows: [
            { 'モデルサイズ': '1B～3B パラメータ', 'RAM': '4～6GB', '速度 (CPU)': '20～60 tok/sec', '例': 'Llama 3.2 1B, Phi-3 Mini' },
            { 'モデルサイズ': '7B～8B パラメータ', 'RAM': '6～8GB', '速度 (CPU)': '10～30 tok/sec', '例': 'Llama 3.1 8B, Mistral 7B' },
            { 'モデルサイズ': '13B～14B パラメータ', 'RAM': '10～12GB', '速度 (CPU)': '5～15 tok/sec', '例': 'Llama 3.2 13B, Qwen2.5 14B' },
            { 'モデルサイズ': '32B～34B パラメータ', 'RAM': '20～24GB', '速度 (CPU)': '2～6 tok/sec', '例': 'Qwen2.5 32B, DeepSeek-R1' },
            { 'モデルサイズ': '70B以上', 'RAM': '40～48GB', '速度 (CPU)': '1～3 tok/sec', '例': 'Llama 3.3 70B, Qwen2.5 72B' },
          ],
          columns: ['モデルサイズ', 'RAM', '速度 (CPU)', '例'],
        },
        hardwareGpu: {
          title: 'GPUはローカルLLMを高速化する？',
          content: 'はい、劇的に改善します。NVIDIA RTX 4070 Ti（12GB VRAM）は7Bモデルを80～120トークン/秒で実行（CPU のみの4～8倍高速）。Apple Silicon Mac（M1、M2、M3、M4、M5）は統合メモリを使用し、専用GPUなしで7Bモデルで40～80トークン/秒を達成します。ラップトップユーザー向けに、[ラップトップでローカルLLMを実行](/ja/local-llms/local-llm-on-laptop)でハードウェア固有のアドバイスをご覧ください。',
        },
        vsCloud: {
          title: 'ローカルLLMとクラウドAPI：何が違うか',
          content: 'トレードオフの関係：プライバシー＋コスト vs 機能＋速度。詳しくは[ローカルLLM vs クラウドAPI](/ja/local-llms/local-llms-vs-cloud-apis)をご覧ください。',
          rows: [
            { '項目': 'プライバシー', 'ローカルLLM': '完全--データは絶対に外に出ない', 'クラウドAPI': 'プロバイダーのサーバーで処理' },
            { '項目': 'コスト', 'ローカルLLM': 'ハードウェア代後は$0/トークン', 'クラウドAPI': '$0.15～15/100万トークン' },
            { '項目': '速度', 'ローカルLLM': 'コンシューマー機で10～120 tok/sec', 'クラウドAPI': '50～200 tok/sec（負荷による）' },
            { '項目': 'モデル品質', 'ローカルLLM': '良好--70Bスケールで競争力あり', 'クラウドAPI': '最良（GPT-4o、Claude 4.6 Sonnet）' },
            { '項目': 'セットアップ', 'ローカルLLM': 'OllamaやLM Studioで5～15分', 'クラウドAPI': 'APIキー取得で2～5分' },
            { '項目': 'オフライン', 'ローカルLLM': 'はい--インターネット不要', 'クラウドAPI': 'いいえ--接続が必須' },
          ],
          columns: ['項目', 'ローカルLLM', 'クラウドAPI'],
        },
        modelFormats: {
          title: 'ローカルLLMのモデル形式は？',
          content: [
            '**GGUF**（GPT-Generated Unified Format）：ローカル推論の標準形式。llama.cpp プロジェクトが開発し、1つのファイルで複数の量子化レベルをサポート。`ollama pull llama3.2`を実行すると、Ollamaは内部でGGUF ファイルをダウンロードします。',
            '**Safetensors**：Hugging Face の形式、PyTorchベースの推論ツール（transformers、vLLM）で主に使用。研究やサーバーデプロイで一般的。',
            '**量子化**：モデルの精度を低下させてRAM要件を削減。7B FP16フル精度＝～14GB RAM。7B Q4_K_M量子化（4ビット）＝～4.5GB、品質低下は最小限。初心者ガイドはQ4_K_MまたはQ5_K_M使用。',
          ],
        },
        whenToUse: {
          title: 'いつローカルLLMを使う？',
          items: [
            '**機密データ処理**--医療記録、法的書類、財務データ、個人識別情報（PII）が外部に流出してはならない場合。',
            '**API費用削減**--高ボリュームバッチ処理でクラウドコストが蓄積する場合。ローカル7Bはハードウェア代後$0/クエリ。',
            '**オフラインまたは隔離環境**--現場作業、セキュアな施設、インターネット接続不可の運用。',
            '**学習と実験**--LLM内部動作の理解、コスト懸念なしのプロンプトテスト、ローカルAIツール構築。',
            '**低遅延アプリケーション**--ネットワーク往復時間が受け入れられず、小規模なローカルモデルで十分な場合。',
          ],
        },
        faqSection: {
          title: 'よくある質問',
          faqs: [
            {
              q: 'ローカルLLMはGPT-4o の品質に達するか？',
              a: '現在のコンシューマー機ではいいえ。GPT-4oとClaude 4.6 Sonnetは複雑な推論、コード生成、命令遵守ベンチマークで勝ります。しかし要約、翻訳、日常的な文章作成では、量子化された13B～34Bモデルは最先端モデルと区別が難しい結果を出します。',
            },
            {
              q: 'ローカルLLM実行にGPUは必須？',
              a: 'いいえ。Ollama、LM Studio、llama.cpp はCPU のみで動作します。GPUは大幅な高速化：NVIDIA RTX 4060（8GB VRAM）＝60～90 tok/sec vs 10～20 tok/sec CPU のみ。Apple Silicon Mac（M1～M5）は統合メモリの GPU加速がデフォルトで、専用GPU なしでも最適です。',
            },
            {
              q: 'ローカルLLMモデルはどこからダウンロード？',
              a: '3つの主要ソース：1. Ollama（ollama.com/library、ワンコマンドダウンロード）、2. Hugging Face（huggingface.co、GGUF＋safetensors）、3. LM Studio内蔵ブラウザ（Hugging Face検索）。[Ollama インストール](/ja/local-llms/how-to-install-ollama)と[LM Studio インストール](/ja/local-llms/how-to-install-lm-studio)をご覧ください。',
            },
            {
              q: 'ローカルLLM実行は プライベート？',
              a: '基本的にははい。モデル推論自体は完全ローカル。ただしローカルLLM上に構築されたアプリケーションがデータを外部に送信する可能性。インターフェースやプラグインレイヤーがテレメトリやクラウド同期を有効にしていないか確認を。[ローカルLLM セキュリティ・プライバシーチェックリスト](/ja/local-llms/local-llm-security-privacy-checklist)をご覧ください。',
            },
          ],
        },
        nextSteps: {
          title: '最初のローカルLLM実行の道筋',
          content: '最速路：[Ollama をインストール](/ja/local-llms/how-to-install-ollama)--1コマンド、macOS/Windows/Linux で5分以内。GUIを好む場合：[LM Studio をインストール](/ja/local-llms/how-to-install-lm-studio)がデスクトップアプリセットアップをガイド。モデル選択は[初心者向けベストローカルLLMモデル](/ja/local-llms/best-beginner-local-llm-models)をご覧ください。',
        },
        sources: {
          title: 'ソース',
          items: [
            '**llama.cpp -- GitHub** : ローカル量子化モデル実行の基礎 C++ ライブラリ',
            '**Hugging Face -- モデルハブ** : 100,000 以上の GGUF、safetensors その他形式リポジトリ',
            '**Ollama モデルライブラリ** : ワンクリックダウンロード可能な事前量子化モデル一覧',
          ],
        },
        commonMistakes: {
          title: '初心者の一般的な誤り',
          items: [
            'すべてのローカルLLMが等しくプライベートだと想定--インターフェースや量子化によってはデータをログ記録する可能性。',
            'RAM容量を超えるモデル実行→ディスク スワップ→著しい遅延。',
            'モデル品質の差異を理解していない--すべてのローカルモデルが複雑タスクでGPT-4oに対抗できるわけではありません。',
          ],
        },
        relatedReading: {
          title: '関連読み物',
          items: [
            '[Ollama をインストール](/ja/local-llms/how-to-install-ollama) : セットアップと最初のモデル',
            '[LM Studio をインストール](/ja/local-llms/how-to-install-lm-studio) : GUIアプリの代替',
            '[初心者向けベストローカルLLM](/ja/local-llms/best-beginner-local-llm-models) : RAM 対応モデル推奨',
            '[ローカルLLM vs クラウドAPI](/ja/local-llms/local-llms-vs-cloud-apis) : 完全比較',
          ],
        },
      },
    },
    zh: {
      theme: '入门',
      title: '什么是本地LLM？在自己的硬件上运行AI模型的方法',
      seoTitle: '本地LLM 2026：优势、风险和入门指南',
      intro: '本地LLM（大型语言模型）是在您自己的硬件上完全运行的AI模型。无需互联网连接，无需API调用，数据永远不会离开您的机器。下载模型权重，运行推理引擎如Ollama或LM Studio，从您的CPU或GPU获取直接响应。2026年4月，初学者最实用的模型是Llama 3.2 3B和Phi-3 Mini。',
      metaDescription: '本地LLM：完全隐私、零成本、离线使用。比较优劣，用Ollama和LM Studio立即开始。',
      publishDate: '2026-04-04',
      readTime: '7分钟',
      educationalLevel: 'Beginner',
      primaryTerm: '本地LLM',
      toc: [
        { label: '要点摘要', anchor: '#key-takeaways' },
        { label: '什么是本地LLM？', anchor: '#what-is-a-local-llm' },
        { label: '本地LLM怎样工作？', anchor: '#how-does-a-local-llm-work' },
        { label: '需要什么硬件？', anchor: '#what-hardware-do-you-need' },
        { label: '本地LLM与云API：有何不同？', anchor: '#local-llm-vs-cloud-api' },
        { label: '使用什么模型格式？', anchor: '#which-model-formats-are-used' },
        { label: '何时使用本地LLM？', anchor: '#when-should-you-use-a-local-llm' },
        { label: '常见问题', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '1. 本地LLM = 在您的CPU/GPU上运行，无API成本，无数据分享。',
            '2. 三个要素：模型文件（GGUF或safetensors格式）、推理引擎（Ollama、LM Studio、llama.cpp）、可选聊天界面。',
            '3. 最低要求：7B参数模型4位量化时8GB RAM。16GB可应对大多数日常模型。',
            '4. 消费者硬件上较慢：本地7B=15-40tokens/秒 vs GPT-4o Mini API=约100tokens/秒。',
            '5. 最佳用途：敏感数据处理、离线工作、零持续成本、理解LLM。',
          ],
        },
        whatIsLocalLlm: {
          title: '什么是本地LLM',
          content: [
            '**本地LLM（大型语言模型）是在您控制的硬件上运行的AI模型。** 可以是笔记本、台式机或本地服务器。模型权重存储为磁盘文件，所有处理在您自己的CPU或GPU上进行。无数据发送到外部服务器。',
            '"本地"一词区分这些模型与OpenAI GPT-4o、Anthropic Claude 4.6、Google Gemini 3.1 Pro等云服务，云服务在远程服务器处理您的提示并通过互联网返回结果。',
            '本地LLM种类丰富：从运行在手机上的1B参数模型到需要48GB VRAM的70B参数模型。初学者常用：Meta Llama 3.2 3B、Microsoft Phi-3 Mini、Google Gemma 2 2B（全部可在8GB RAM笔记本上运行）。',
          ],
        },
        howItWorks: {
          title: '本地LLM如何工作',
          content: [
            '三层协作：模型文件、推理引擎、界面。',
            '**模型文件**：包含神经网络权重（学习的数值）。本地使用几乎总是采用GGUF格式（llama.cpp项目开发、压缩）或safetensors格式。4位精度的7B参数模型约4.5GB磁盘空间。',
            '**推理引擎**：读取模型文件、执行token生成所需的矩阵计算。最受欢迎的引擎：[Ollama](/zh/local-llms/how-to-install-ollama)（后台服务、OpenAI兼容API）、[LM Studio](/zh/local-llms/how-to-install-lm-studio)（桌面应用、内置聊天UI）、llama.cpp（大多数工具的基础C++库）。',
            '**界面**：与模型交互的地方。终端、网页UI或API端点。Ollama在`http://localhost:11434`公开REST API，连接任何OpenAI兼容应用到本地模型。',
          ],
        },
        hardware: {
          title: '运行本地LLM需要什么硬件',
          content: '硬件要求取决于您要运行哪个模型以及需要的速度。',
          rows: [
            { '模型大小': '1B-3B参数', 'RAM需求': '4-6 GB', '速度(CPU)': '20-60 tokens/秒', '示例模型': 'Llama 3.2 1B, Phi-3 Mini' },
            { '模型大小': '7B-8B参数', 'RAM需求': '6-8 GB', '速度(CPU)': '10-30 tokens/秒', '示例模型': 'Llama 3.1 8B, Mistral 7B' },
            { '模型大小': '13B-14B参数', 'RAM需求': '10-12 GB', '速度(CPU)': '5-15 tokens/秒', '示例模型': 'Llama 3.2 13B, Qwen2.5 14B' },
            { '模型大小': '32B-34B参数', 'RAM需求': '20-24 GB', '速度(CPU)': '2-6 tokens/秒', '示例模型': 'Qwen2.5 32B, DeepSeek-R1 32B' },
            { '模型大小': '70B+参数', 'RAM需求': '40-48 GB', '速度(CPU)': '1-3 tokens/秒', '示例模型': 'Llama 3.3 70B, Qwen2.5 72B' },
          ],
          columns: ['模型大小', 'RAM需求', '速度(CPU)', '示例模型'],
        },
        hardwareGpu: {
          title: 'GPU是否加快本地LLM',
          content: '是的，大幅加快。NVIDIA RTX 4070 Ti（12GB VRAM）运行7B模型80-120 tokens/秒（仅CPU的4-8倍）。Apple Silicon Mac（M1、M2、M3、M4、M5）使用统一内存达到7B模型40-80 tokens/秒，无独立GPU。笔记本用户见[在笔记本上运行本地LLM](/zh/local-llms/local-llm-on-laptop)获取硬件特定建议。',
        },
        vsCloud: {
          title: '本地LLM与云API的区别',
          content: '核心权衡：隐私+成本 vs 能力+速度。完整比较见[本地LLM vs 云API](/zh/local-llms/local-llms-vs-cloud-apis)。',
          rows: [
            { '因素': '隐私', '本地LLM': '完全--数据永不离开您的机器', '云API': '在提供商服务器上处理' },
            { '因素': '成本', '本地LLM': '硬件后$0/token', '云API': '按token计费（$0.15-15/100万tokens）' },
            { '因素': '速度', '本地LLM': '消费者硬件10-120 tokens/秒', '云API': '50-200 tokens/秒（负载变化）' },
            { '因素': '模型质量', '本地LLM': '好--70B规模有竞争力', '云API': '最好（GPT-4o、Claude 4.6 Sonnet）' },
            { '因素': '设置时间', '本地LLM': 'Ollama或LM Studio 5-15分钟', '云API': '获取API密钥2-5分钟' },
            { '因素': '离线使用', '本地LLM': '是--无需互联网', '云API': '否--需要活跃连接' },
          ],
          columns: ['因素', '本地LLM', '云API'],
        },
        modelFormats: {
          title: '本地LLM使用什么模型格式',
          content: [
            '**GGUF**（GPT-Generated Unified Format）：本地推理的标准格式。由llama.cpp项目开发，一个文件中支持多个量化级别。`ollama pull llama3.2`内部下载GGUF文件。',
            '**Safetensors**：Hugging Face格式，主要用于PyTorch推理工具（transformers、vLLM）。在研究和服务器部署中更常见。',
            '**量子化**：降低模型精度以减少RAM需求。7B FP16全精度约14GB RAM。7B Q4_K_M量子化（4位）约4.5GB，品质损失最小。初学者指南使用Q4_K_M或Q5_K_M。',
          ],
        },
        whenToUse: {
          title: '何时使用本地LLM',
          items: [
            '1. **处理敏感数据**--医疗记录、法律文件、财务数据、个人身份信息（PII）不能离开基础设施。',
            '2. **消除API成本**--高容量批处理，云成本累积。本地7B硬件后成本为零。',
            '3. **离线或隔离环境**--现场工作、安全设施或必须无互联网运行的应用。',
            '4. **学习和实验**--理解LLM内部运作、无成本顾虑的提示测试、本地AI工具开发。',
            '5. **低延迟应用**--网络往返时间不可接受且较小本地模型足够的任务。',
          ],
        },
        faqSection: {
          title: '常见问题',
          faqs: [
            {
              q: '本地LLM能达到GPT-4o的质量吗？',
              a: '消费者硬件上不能。GPT-4o和Claude 4.6 Sonnet在复杂推理、代码生成、指令遵循基准上更优。但13B-34B良好量化的模型在摘要、翻译和日常写作中表现与前沿模型难以区分。',
            },
            {
              q: '运行本地LLM需要GPU吗？',
              a: '不需要。Ollama、LM Studio、llama.cpp全在CPU上运行。GPU大幅加快：NVIDIA RTX 4060（8GB VRAM）60-90 tokens/秒 vs CPU 10-20 tokens/秒。Apple Silicon Mac（M1-M5）默认GPU加速统一内存，无独立GPU也最优。',
            },
            {
              q: '本地LLM模型从何处下载？',
              a: '三个主要来源：1. Ollama（ollama.com/library，单命令下载）2. Hugging Face（huggingface.co，GGUF+safetensors）3. LM Studio内置浏览器（直接搜索Hugging Face）。见[安装Ollama](/zh/local-llms/how-to-install-ollama)和[安装LM Studio](/zh/local-llms/how-to-install-lm-studio)。',
            },
            {
              q: '运行本地LLM隐私吗？',
              a: '基本是。模型推理本身完全本地。但基于本地LLM的应用可能向外部发送数据。检查使用的界面或插件层是否启用了遥测或云同步。见[本地LLM安全隐私检查清单](/zh/local-llms/local-llm-security-privacy-checklist)完整审核指南。',
            },
          ],
        },
        nextSteps: {
          title: '开始使用本地LLM',
          content: '最快途径：[安装Ollama](/zh/local-llms/how-to-install-ollama)--单条命令，macOS/Windows/Linux 5分钟内。偏好GUI：[安装LM Studio](/zh/local-llms/how-to-install-lm-studio)带您完成桌面应用设置。选择模型：见[初学者最佳本地LLM模型](/zh/local-llms/best-beginner-local-llm-models)。',
        },
        sources: {
          title: '资源',
          items: [
            '1. **llama.cpp -- GitHub** : 本地运行量化模型的基础C++库',
            '2. **Hugging Face -- Model Hub** : 100,000+个GGUF、safetensors等格式库',
            '3. **Ollama Model Library** : 预量化模型，单击下载',
          ],
        },
        commonMistakes: {
          title: '入门常见错误',
          items: [
            '1. 假设所有本地LLM隐私级别相等--某些界面或量化可能仍记录数据。',
            '2. 运行过大模型--RAM不足→磁盘交换→严重变慢。',
            '3. 不理解模型质量差异--并非所有本地模型在复杂任务上与GPT-4o匹敌。',
          ],
        },
        relatedReading: {
          title: '相关阅读',
          items: [
            '[安装Ollama](/zh/local-llms/how-to-install-ollama) : 设置和第一个模型',
            '[安装LM Studio](/zh/local-llms/how-to-install-lm-studio) : GUI替代方案',
            '[初学者最佳本地LLM](/zh/local-llms/best-beginner-local-llm-models) : RAM匹配推荐',
            '[本地LLM vs 云API](/zh/local-llms/local-llms-vs-cloud-apis) : 完整比较',
          ],
        },
      },
    },
    de: {
      theme: 'Erste Schritte',
      title: 'Was sind lokale LLMs? Wie die Ausführung von KI-Modellen auf Ihrer eigenen Hardware funktioniert',
      seoTitle: 'Was sind lokale LLMs? Vorteile, Risiken & Einstieg 2026',
      intro: 'Ein lokales LLM ist ein KI-Sprachmodell, das vollständig auf Ihrer eigenen Hardware ausgeführt wird -- keine Internetverbindung, keine API-Aufrufe, keine Daten, die Ihren Computer verlassen. Sie laden die Modellgewichte als Datei herunter, führen eine Inferenz-Engine wie Ollama oder LM Studio aus, und das Modell antwortet ausschließlich von Ihrer CPU oder GPU. Ab April 2026 sind die praktischsten Modelle für Anfänger Llama 3.2 3B und Phi-3 Mini.',
      metaDescription: 'Was sind lokale LLMs? KI-Modelle, die offline auf Ihrer Hardware laufen. Vorteile, Funktionsweise und Einstieg in lokale Sprachmodelle ohne Cloud.',
      publishDate: '2026-04-04',
      readTime: '8 Min. Lesezeit',
      educationalLevel: 'Beginner',
      primaryTerm: 'lokales LLM',
      toc: [
        { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Was ist ein lokales LLM?', anchor: '#what-is-a-local-llm' },
        { label: 'Wie funktioniert ein lokales LLM?', anchor: '#how-does-a-local-llm-work' },
        { label: 'Welche Hardware benötigen Sie?', anchor: '#what-hardware-do-you-need' },
        { label: 'Lokales LLM vs Cloud-API: Wo ist der Unterschied?', anchor: '#local-llm-vs-cloud-api' },
        { label: 'Welche Modellformate werden verwendet?', anchor: '#which-model-formats-are-used' },
        { label: 'Wann sollten Sie ein lokales LLM verwenden?', anchor: '#when-should-you-use-a-local-llm' },
        { label: 'Häufig gestellte Fragen', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'Ein lokales LLM wird auf Ihrer eigenen CPU oder GPU ausgeführt -- keine Internetverbindung, keine API-Kosten, keine Daten an Dritte.',
            'Drei Komponenten sind erforderlich: die Modelldatei (GGUF- oder safetensors-Format), eine Inferenz-Engine (Ollama, LM Studio oder llama.cpp) und optional eine Chat-Schnittstelle.',
            'Minimale Hardware: 8 GB RAM für ein 7B-Parametern-Modell mit 4-Bit-Quantisierung. 16 GB RAM eignet sich gut für die meisten alltäglichen Modelle.',
            'Lokale Modelle sind auf Consumer-Hardware langsamer als Cloud-APIs -- ein 7B-Modell auf einem modernen Laptop erzeugt 15-40 Tokens/Sek., vs. ~100 Tokens/Sek. von GPT-4o Mini über API.',
            'Best-Practice-Anwendungsfälle: Verarbeitung sensibler Daten, Offline-Arbeit, null wiederkehrende Kosten und Verständnis der LLM-Funktionsweise.',
          ],
        },
        whatIsLocalLlm: {
          title: 'Was ist ein lokales LLM?',
          content: [
            '**Ein lokales LLM (großes Sprachmodell) ist ein KI-Modell, das auf Hardware unter Ihrer Kontrolle ausgeführt wird -- Ihrem Laptop, Desktop oder lokalen Server.** Die Modellgewichte werden als Datei auf Ihrem Datenträger gespeichert, und alle Verarbeitungsvorgänge erfolgen auf Ihrer eigenen CPU oder GPU. Keine Prompt-Texte oder Antwortdaten werden an externe Server übertragen.',
            'Der Begriff \"lokal\" unterscheidet diese Modelle von Cloud-Diensten wie OpenAI GPT-4o, Anthropic Claude 4.6 oder Google Gemini 3.1 Pro, die Ihre Prompts auf entfernten Servern verarbeiten und Ergebnisse über das Internet zurückgeben.',
            'Lokale LLMs reichen von kleinen 1B-Parametern-Modellen, die auf einem Telefon laufen, bis zu 70B-Parametern-Modellen, die eine Workstation mit 48 GB VRAM benötigen. Die am häufigsten verwendeten Anfänger-Modelle -- Meta Llama 3.2 3B, Microsoft Phi-3 Mini und Google Gemma 2 2B -- laufen auf jedem Laptop mit 8 GB RAM.',
          ],
        },
        howItWorks: {
          title: 'Wie funktioniert ein lokales LLM?',
          content: [
            '**Das Ausführen eines lokalen LLM umfasst drei zusammenwirkende Schichten: die Modelldatei, die Inferenz-Engine und die Schnittstelle.**',
            '**Die Modelldatei** enthält die Gewichte des neuronalen Netzes -- die gelernten numerischen Werte, die definieren, wie das Modell Text verarbeitet und generiert. Für die lokale Verwendung werden diese Gewichte fast immer im GGUF-Format (ein vom llama.cpp-Projekt entwickeltes komprimiertes Format) oder im safetensors-Format gespeichert. Ein auf 4-Bit-Präzision quantisiertes 7B-Parametern-Modell ist auf der Festplatte etwa 4,5 GB groß.',
            '**Die Inferenz-Engine** liest die Modelldatei und führt die erforderlichen Matrixberechnungen durch, um Tokens zu generieren. Die beliebtesten Engines sind [Ollama](/de/local-llms/how-to-install-ollama) (wird als Hintergrunddienst mit OpenAI-kompatibler API ausgeführt), [LM Studio](/de/local-llms/how-to-install-lm-studio) (eine Desktop-Anwendung mit integrierter Chat-UI) und llama.cpp (die zugrunde liegende C++-Bibliothek, auf der die meisten anderen Tools aufgebaut sind).',
            '**Die Schnittstelle** ist der Ort, an dem Sie mit dem Modell interagieren -- ein Terminal, eine Web-UI oder ein API-Endpunkt. Viele Tools wie Ollama stellen eine REST-API auf `http://localhost:11434` bereit, damit Sie jede OpenAI-kompatible Anwendung mit Ihrem lokalen Modell verbinden können.',
          ],
        },
        hardware: {
          title: 'Welche Hardware benötigen Sie zum Ausführen eines lokalen LLM?',
          content: 'Die Hardware-Anforderungen hängen vollständig davon ab, welches Modell Sie ausführen möchten und wie schnell Sie Antworten benötigen.',
          rows: [
            { 'Modellgröße': '1B-3B Parameter', 'RAM erforderlich': '4-6 GB', 'Geschwindigkeit (CPU)': '20-60 Tokens/Sek.', 'Beispielmodelle': 'Llama 3.2 1B, Phi-3 Mini 3.8B' },
            { 'Modellgröße': '7B-8B Parameter', 'RAM erforderlich': '6-8 GB', 'Geschwindigkeit (CPU)': '10-30 Tokens/Sek.', 'Beispielmodelle': 'Llama 3.1 8B, Mistral 7B' },
            { 'Modellgröße': '13B-14B Parameter', 'RAM erforderlich': '10-12 GB', 'Geschwindigkeit (CPU)': '5-15 Tokens/Sek.', 'Beispielmodelle': 'Llama 3.2 13B, Qwen2.5 14B' },
            { 'Modellgröße': '32B-34B Parameter', 'RAM erforderlich': '20-24 GB', 'Geschwindigkeit (CPU)': '2-6 Tokens/Sek.', 'Beispielmodelle': 'Qwen2.5 32B, DeepSeek-R1 32B' },
            { 'Modellgröße': '70B+ Parameter', 'RAM erforderlich': '40-48 GB', 'Geschwindigkeit (CPU)': '1-3 Tokens/Sek.', 'Beispielmodelle': 'Llama 3.3 70B, Qwen2.5 72B' },
          ],
          columns: ['Modellgröße', 'RAM erforderlich', 'Geschwindigkeit (CPU)', 'Beispielmodelle'],
        },
        hardwareGpu: {
          title: 'Macht eine GPU ein lokales LLM schneller?',
          content: 'GPU-Beschleunigung verbessert die Geschwindigkeit dramatisch. Eine NVIDIA RTX 4070 Ti (12 GB VRAM) führt ein 7B-Modell mit 80-120 Tokens/Sek. aus -- 4-8× schneller als nur CPU-Modus. Apple Silicon Macs (M1, M2, M3, M4, M5) verwenden einheitlichen Speicher und erreichen auf 7B-Modellen 40-80 Tokens/Sek. ohne diskrete GPU. Für Laptop-Benutzer siehe [Wie man lokale LLMs auf einem Laptop ausführt](/de/local-llms/local-llm-on-laptop) für Hardware-spezifische Tipps.',
        },
        vsCloud: {
          title: 'Worin besteht der Unterschied zwischen lokalen LLMs und Cloud-APIs?',
          content: 'Der Kern-Kompromiss ist Datenschutz und Kosten vs. Fähigkeit und Geschwindigkeit. Siehe den vollständigen Vergleich unter [Lokale LLMs vs. Cloud-APIs](/de/local-llms/local-llms-vs-cloud-apis).',
          rows: [
            { 'Faktor': 'Datenschutz', 'Lokales LLM': 'Vollständig -- Daten verlassen nie Ihren Computer', 'Cloud-API': 'Daten werden auf Anbieter-Servern verarbeitet' },
            { 'Faktor': 'Kosten', 'Lokales LLM': '0 € pro Token nach Hardware-Kosten', 'Cloud-API': '0,15 €-15 € pro 1 Mio. Tokens je nach Modell' },
            { 'Faktor': 'Geschwindigkeit', 'Lokales LLM': '10-120 Tokens/Sek. auf Consumer-Hardware', 'Cloud-API': '50-200 Tokens/Sek., variiert je nach Last' },
            { 'Faktor': 'Modellqualität', 'Lokales LLM': 'Gut -- wettbewerbsfähig bei 70B-Skalierung', 'Cloud-API': 'Das beste verfügbare (GPT-4o, Claude 4.6 Sonnet)' },
            { 'Faktor': 'Einrichtungszeit', 'Lokales LLM': '5-15 Minuten mit Ollama oder LM Studio', 'Cloud-API': '2-5 Minuten für einen API-Schlüssel' },
            { 'Faktor': 'Offline-Nutzung', 'Lokales LLM': 'Ja -- funktioniert ohne Internet', 'Cloud-API': 'Nein -- erfordert aktive Verbindung' },
          ],
          columns: ['Faktor', 'Lokales LLM', 'Cloud-API'],
        },
        modelFormats: {
          title: 'Welche Modellformate werden für lokale LLMs verwendet?',
          content: [
            '**GGUF** (GPT-Generated Unified Format) ist das dominante Format für lokale Inferenz. Entwickelt vom llama.cpp-Projekt, GGUF-Dateien enthalten alle Modell-Metadaten und unterstützen mehrere Quantisierungsstufen in einer einzelnen Datei. Wenn Sie `ollama pull llama3.2` ausführen, lädt Ollama intern eine GGUF-Datei herunter.',
            '**Safetensors** ist ein Format von Hugging Face, das hauptsächlich mit PyTorch-basierten Inferenz-Tools wie Transformers und vLLM verwendet wird. Es ist häufiger in Forschung und Server-Deployments.',
            '**Quantisierung** reduziert die Modellgenauigkeit, um RAM-Anforderungen zu senken. Ein 7B-Modell mit vollständiger FP16-Präzision benötigt ~14 GB RAM. Bei Q4_K_M-Quantisierung (4-Bit) benötigt das gleiche Modell ~4,5 GB mit minimalem Qualitätsverlust. Die meisten Anfänger-Leitfäden verwenden Q4_K_M oder Q5_K_M.',
          ],
        },
        whenToUse: {
          title: 'Wann sollten Sie ein lokales LLM statt einer Cloud-API verwenden?',
          items: [
            '**Verarbeitung sensibler Daten** -- medizinische Unterlagen, Rechtsdokumente, Finanzdaten oder jegliche personenbezogene Daten (PII), die Ihre Infrastruktur nicht verlassen dürfen.',
            '**Beseitigung von API-Kosten** -- hochvolumige Batch-Verarbeitung, bei der sich pro-Token Cloud-Kosten schnell summieren. Ein lokal laufendes 7B-Modell kostet nach der Hardware-Anschaffung 0 € pro Abfrage.',
            '**Offline- oder abgekoppelte Umgebungen** -- Feldarbeit, sichere Einrichtungen oder Anwendungen, die ohne Internetverbindung funktionieren müssen.',
            '**Lernen und Experimentieren** -- Verständnis der LLM-Funktionsweise, Testen von Prompts ohne Kostenbedenken oder Erstellung lokaler KI-gestützter Tools.',
            '**Anwendungen mit niedriger Latenz** -- wenn die Netzwerk-Roundtrip-Zeit inakzeptabel ist und ein kleineres lokales Modell schnell genug für die Aufgabe ist.',
          ],
        },
        faqSection: {
          title: 'Häufig gestellte Fragen zu lokalen LLMs',
          faqs: [
            {
              q: 'Kann ein lokales LLM die Qualität von GPT-4o erreichen?',
              a: 'Nein -- nicht auf aktueller Consumer-Hardware. GPT-4o und Claude 4.6 Sonnet übertreffen jedes lokal ausführbare Modell bei komplexer Argumentation, Code-Generierung und Befolgung von Anweisungen-Benchmarks. Für Zusammenfassungen, Übersetzungen und alltägliche Schreibaufgaben produziert jedoch ein gut quantisiertes 13B-34B-Modell Ergebnisse, die schwer von Top-Modellen zu unterscheiden sind.',
            },
            {
              q: 'Brauche ich eine GPU, um ein lokales LLM auszuführen?',
              a: 'Nein. Alle großen Inferenz-Engines (Ollama, LM Studio, llama.cpp) laufen nur auf CPU. Eine GPU beschleunigt die Ausführung erheblich -- eine NVIDIA RTX 4060 (8 GB VRAM) führt ein 7B-Modell mit 60-90 Tokens/Sek. aus vs. 10-20 Tokens/Sek. auf CPU. Apple Silicon Macs nutzen standardmäßig GPU-beschleunigte einheitliche Speicherung und eignen sich gut für lokale LLMs ohne diskrete GPU.',
            },
            {
              q: 'Wo lade ich lokale LLM-Modelle herunter?',
              a: 'Die drei Hauptquellen sind: Ollamas Modellbibliothek (ollama.com/library) für einfache Ein-Befehl-Downloads, Hugging Face (huggingface.co) für die volle Palette von GGUF- und safetensors-Modellen, und LM Studios integrierter Modellbrowser, der direkt Hugging Face durchsucht. Siehe [Ollama installieren](/de/local-llms/how-to-install-ollama) und [LM Studio installieren](/de/local-llms/how-to-install-lm-studio) für Setup-Leitfäden.',
            },
            {
              q: 'Ist die Ausführung eines lokalen LLM privat?',
              a: 'Ja -- mit Vorbehalten. Die Modell-Inferenz selbst ist vollständig lokal. Jedoch können einige auf lokalen LLMs basierende Anwendungen Daten an externe Server senden. Überprüfen Sie immer, ob die Schnittstelle oder Plugin-Schicht, die Sie verwenden, Telemetrie oder Cloud-Synchronisierung aktiviert hat. Siehe die [Sicherheits- und Datenschutz-Checkliste für lokale LLMs](/de/local-llms/local-llm-security-privacy-checklist) für einen vollständigen Audit-Leitfaden.',
            },
          ],
        },
        nextSteps: {
          title: 'Wie starten Sie mit lokalen LLMs?',
          content: 'Der schnellste Weg zum Ausführen Ihres ersten lokalen LLM ist [Ollama installieren](/de/local-llms/how-to-install-ollama) -- ein einzelner Befehl installiert die Engine und lädt ein Modell in unter 5 Minuten auf macOS, Windows oder Linux. Wenn Sie eine grafische Schnittstelle bevorzugen, führt Sie [LM Studio installieren](/de/local-llms/how-to-install-lm-studio) durch das Desktop-App-Setup. Um auszuwählen, mit welchem ​​Modell Sie beginnen, siehe [Best Beginner Local LLM Models](/de/local-llms/best-beginner-local-llm-models).',
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '**llama.cpp -- GitHub** -- Die grundlegende C++-Bibliothek zum Ausführen quantisierter Modelle lokal',
            '**Hugging Face -- Model Hub** -- Repository mit 100.000+ GGUF-, safetensors- und anderen Modellformaten',
            '**Ollama Model Library** -- Kurierte Liste von vorquantisierten Modellen, die per One-Click-Download verfügbar sind',
          ],
        },
        commonMistakes: {
          title: 'Häufige Fehler beim Einstieg',
          items: [
            'Die Annahme, dass alle lokalen Modelle gleich privat sind -- einige Schnittstellen oder Quantisierungen können noch immer Daten protokollieren.',
            'Das Ausführen von Modellen, die für verfügbaren RAM zu groß sind, was zu schwerem Slowdown durch Festplattenspeicher führt.',
            'Nicht verstehen, dass die Modellqualität drastisch variiert -- nicht alle lokalen Modelle erreichen GPT-4o auf komplexen Aufgaben.',
          ],
        },
        relatedReading: {
          title: 'Weiterführende Literatur',
          items: [
            '[Ollama installieren](/de/local-llms/how-to-install-ollama) -- Schritt-für-Schritt-Setup und erster Modell-Durchlauf',
            '[LM Studio installieren](/de/local-llms/how-to-install-lm-studio) -- Desktop-App-Alternative mit grafischer Schnittstelle',
            '[Best Beginner Local LLM Models](/de/local-llms/best-beginner-local-llm-models) -- RAM-gekoppelte Modellempfehlungen',
            '[Lokale LLMs vs. Cloud-APIs](/de/local-llms/local-llms-vs-cloud-apis) -- Vollständiger Vergleich von Kompromissen',
          ],
        },
      },
    },
  };
