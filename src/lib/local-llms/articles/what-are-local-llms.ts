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
      leadAnswerBlock: '**Local LLMs run all inference on your own hardware at zero token cost with full data privacy.** Cloud APIs (GPT-5.6, Claude Opus 4.8, Gemini 3.1 Pro) deliver higher quality with minimal setup.',
      dateModified: '2026-07-13',
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
            'Local models are slower than cloud APIs on consumer hardware -- a 7B model on a modern laptop produces 15-40 tokens/sec vs. ~100 tokens/sec from GPT-5.6 Luna via API.',
            'Best use cases: private data processing, offline work, zero recurring cost, and learning how LLMs work.',
          ],
        },
        whatIsLocalLlm: {
          title: 'What Is a Local LLM?',
          content: [
            '**A local LLM (large language model) is an AI model that runs on hardware you control -- your laptop, desktop, or on-premise server.** The model weights are stored as a file on your disk, and all processing happens on your own CPU or GPU. No prompt text or response data is transmitted to any external server.',
            'The term "local" distinguishes these models from cloud-hosted services like OpenAI GPT-5.6, Anthropic Claude Sonnet 5, or Google Gemini 3.1 Pro, which process your prompts on remote servers and return results over the internet.',
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
            { 'Model Size': '7B-8B parameters', 'RAM Required': '6-8 GB', 'Speed (CPU)': '10-30 tok/sec', 'Example Models': 'Llama 3.3 8B, Mistral Small' },
            { 'Model Size': '13B-14B parameters', 'RAM Required': '10-12 GB', 'Speed (CPU)': '5-15 tok/sec', 'Example Models': 'Llama 3.2 13B, Qwen3 14B' },
            { 'Model Size': '32B-34B parameters', 'RAM Required': '20-24 GB', 'Speed (CPU)': '2-6 tok/sec', 'Example Models': 'Qwen3 32B, DeepSeek-R1 32B' },
            { 'Model Size': '70B+ parameters', 'RAM Required': '40-48 GB', 'Speed (CPU)': '1-3 tok/sec', 'Example Models': 'Llama 3.3 70B, Qwen3 72B' },
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
            { 'Factor': 'Model quality', 'Local LLM': 'Good -- competitive at 70B scale', 'Cloud API': 'Strongest available (GPT-5.6, Claude Sonnet 5)' },
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
              q: 'Can a local LLM match GPT-5.6 quality?',
              a: 'No -- not on current consumer hardware. GPT-5.6 and Claude Sonnet 5 outperform any locally-runnable model on complex reasoning, code generation, and instruction-following benchmarks. However, for summarization, translation, and everyday writing tasks, a well-quantized 13B-34B model produces results that are difficult to distinguish from frontier models.',
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
            'Not understanding that model quality varies dramatically -- not all local models match GPT-5.6 on complex tasks.',
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
            '[O Que São LLMs Locais (Português)](/pt/local-llms/what-are-local-llms) — versão em português deste guia',
            '[Local LLM Trends 2026–2027: 5 Key Predictions for Enterprise Adoption and On-Device AI](/local-llms/future-of-local-llms) -- the future of local LLMs',
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
        'dateModified': '2026-07-13',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
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
        'proficiencyLevel': 'Beginner',
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
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Not yet for the most demanding tasks. As of April 2026, the best consumer-grade local model (Llama 3.3 70B at Q4) approaches GPT-5.5 on benchmarks but requires a workstation GPU with 48GB+ VRAM. 7B models run on laptops but are significantly weaker than GPT-5.5.' }
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
      leadAnswerBlock: '**Los LLM locales ejecutan toda la inferencia en tu propio hardware con coste cero por token y privacidad total.** Las API en la nube (GPT-5.6, Claude Opus 4.8, Gemini 3.1 Pro) ofrecen mayor calidad con una configuración mínima.',
      dateModified: '2026-07-13',
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
            'Los modelos locales son más lentos que las API en la nube en hardware de consumo: un modelo de 7B en un portátil moderno produce 15-40 tokens/seg frente a ~100 tokens/seg de GPT-5.6 Luna por API.',
            'Mejores casos de uso: procesamiento de datos privados, trabajo sin conexión, coste recurrente cero y aprender cómo funcionan los LLM.',
          ],
        },
        whatIsLocalLlm: {
          title: '¿Qué es un LLM local?',
          content: [
            '**Un LLM local (modelo de lenguaje grande) es un modelo de IA que se ejecuta en hardware bajo tu control: tu portátil, ordenador de escritorio o servidor local.** Los pesos del modelo se almacenan como un archivo en tu disco, y todo el procesamiento ocurre en tu propia CPU o GPU. Ningún texto de los prompts ni datos de respuesta se transmite a ningún servidor externo.',
            'El término "local" distingue estos modelos de los servicios alojados en la nube, como OpenAI GPT-5.6, Anthropic Claude Sonnet 5 o Google Gemini 3.1 Pro, que procesan tus prompts en servidores remotos y devuelven los resultados por internet.',
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
            { 'Tamaño del modelo': '7B-8B parámetros', 'RAM necesaria': '6-8 GB', 'Velocidad (CPU)': '10-30 tok/seg', 'Modelos de ejemplo': 'Llama 3.3 8B, Mistral Small' },
            { 'Tamaño del modelo': '13B-14B parámetros', 'RAM necesaria': '10-12 GB', 'Velocidad (CPU)': '5-15 tok/seg', 'Modelos de ejemplo': 'Llama 3.2 13B, Qwen3 14B' },
            { 'Tamaño del modelo': '32B-34B parámetros', 'RAM necesaria': '20-24 GB', 'Velocidad (CPU)': '2-6 tok/seg', 'Modelos de ejemplo': 'Qwen3 32B, DeepSeek-R1 32B' },
            { 'Tamaño del modelo': '70B+ parámetros', 'RAM necesaria': '40-48 GB', 'Velocidad (CPU)': '1-3 tok/seg', 'Modelos de ejemplo': 'Llama 3.3 70B, Qwen3 72B' },
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
            { 'Factor': 'Calidad del modelo', 'LLM local': 'Buena: competitiva a escala 70B', 'API en la nube': 'La más potente disponible (GPT-5.6, Claude Sonnet 5)' },
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
              q: '¿Puede un LLM local igualar la calidad de GPT-5.6?',
              a: 'No, no en el hardware de consumo actual. GPT-5.6 y Claude Sonnet 5 superan a cualquier modelo ejecutable localmente en razonamiento complejo, generación de código y benchmarks de seguimiento de instrucciones. Sin embargo, para tareas de resumen, traducción y escritura cotidiana, un modelo de 13B-34B bien cuantizado produce resultados difíciles de distinguir de los modelos frontier.',
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
            'No entender que la calidad de los modelos varía drásticamente: no todos los modelos locales igualan a GPT-5.6 en tareas complejas.',
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
            '[Tendencias de LLM local 2026–2027: 5 predicciones clave para la adopción empresarial y la IA en dispositivo](/es/local-llms/future-of-local-llms) -- el futuro de los LLMs locales',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '¿Qué son los LLM locales? Cómo los modelos de IA se ejecutan en tu hardware',
        'description': 'Los LLM locales ejecutan modelos de IA en tu propio hardware, sin necesidad de internet. Aprende qué son, cómo funcionan y cuándo usarlos. Guía para 2026.',
        'url': 'https://www.promptquorum.com/es/local-llms/what-are-local-llms',
        'datePublished': '2026-04-04',
        'dateModified': '2026-07-13',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
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
        'proficiencyLevel': 'Beginner',
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
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Todavía no para las tareas más exigentes. A partir de abril de 2026, el mejor modelo local para consumidores (Llama 3.3 70B en Q4) se acerca a GPT-5.5 en benchmarks, pero requiere una GPU de estación de trabajo con 48 GB+ de VRAM. Los modelos de 7B funcionan en portátiles, pero son significativamente más débiles que GPT-5.5.' }
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
    ar: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'ما هي نماذج ⁨LLM⁩ المحلية؟ كيف تشغّل نماذج الذكاء الاصطناعي على عتادك الخاص',
      seoTitle: 'ما هي نماذج ⁨LLM⁩ المحلية؟ ذكاء اصطناعي يعمل على عتادك',
      intro: 'نموذج LLM المحلي هو نموذج لغة ذكاء اصطناعي يعمل بالكامل على عتادك الخاص: بلا اتصال بالإنترنت، وبلا استدعاءات API، وبلا بيانات تغادر جهازك. نزّل أوزان النموذج كملف، شغّل محرك استدلال مثل Ollama أو LM Studio، فيستجيب النموذج من CPU أو GPU لديك. اعتبارًا من أبريل 2026، أكثر النماذج عملية للمبتدئين هي Llama 3.2 3B وPhi-3 Mini.',
      metaDescription: 'تعمل نماذج ⁨LLM⁩ المحلية بالكامل على عتادك بلا إنترنت. نموذج ⁨7B⁩ بـ ⁨Q4⁩ يحتاج ⁨8 GB RAM⁩ فقط. دليل ⁨Ollama⁩ و⁨LM Studio⁩ وصيغة ⁨GGUF⁩ لعام ⁨2026⁩.',
      leadAnswerBlock: '**تشغّل نماذج LLM المحلية كل الاستدلال على عتادك الخاص بتكلفة صفرية لكل token وخصوصية تامة.** تقدّم واجهات API السحابية (GPT-5.6، Claude Opus 4.8، Gemini 3.1 Pro) جودة أعلى بإعداد أدنى.',
      dateModified: '2026-07-13',
      publishDate: '2026-04-04',
      audience: 'المبتدئون الذين يشغّلون أول نموذج LLM محلي على عتاد استهلاكي',
      readTime: '7 دقائق قراءة',
      educationalLevel: 'Beginner',
      primaryTerm: 'LLM محلي',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'ما هو نموذج LLM المحلي؟', anchor: '#what-is-a-local-llm' },
        { label: 'كيف يعمل نموذج LLM المحلي؟', anchor: '#how-does-a-local-llm-work' },
        { label: 'أي عتاد تحتاج؟', anchor: '#what-hardware-do-you-need' },
        { label: 'LLM محلي مقابل API سحابية: ما الفرق؟', anchor: '#local-llm-vs-cloud-api' },
        { label: 'أي صيغ نماذج تُستخدم؟', anchor: '#which-model-formats-are-used' },
        { label: 'متى يجب أن تستخدم نموذج LLM محليًا؟', anchor: '#when-should-you-use-a-local-llm' },
        { label: 'الأسئلة الشائعة', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'يعمل نموذج LLM المحلي على CPU أو GPU الخاص بك: بلا إنترنت، وبلا تكاليف API، وبلا بيانات تُرسل إلى خوادم طرف ثالث.',
            'تلزم ثلاثة مكونات: ملف النموذج (صيغة GGUF أو safetensors)، ومحرك استدلال (Ollama، أو LM Studio، أو llama.cpp)، واختياريًا واجهة دردشة.',
            'الحد الأدنى من العتاد: 8 GB من RAM لنموذج 7B معاملات بتكميم 4 بت. مع 16 GB من RAM، تُدار معظم النماذج اليومية بأريحية.',
            'النماذج المحلية أبطأ من واجهات API السحابية على العتاد الاستهلاكي: نموذج 7B على حاسوب محمول حديث ينتج 15-40 token/ثانية مقابل ~100 token/ثانية لـ GPT-5.6 Luna عبر API.',
            'أفضل حالات الاستخدام: معالجة البيانات الخاصة، والعمل دون اتصال، وتكلفة متكررة صفرية، وتعلّم كيفية عمل نماذج LLM.',
          ],
        },
        whatIsLocalLlm: {
          title: 'ما هو نموذج LLM المحلي؟',
          content: [
            '**نموذج LLM المحلي (نموذج لغة كبير) هو نموذج ذكاء اصطناعي يعمل على عتاد تحت سيطرتك: حاسوبك المحمول، أو المكتبي، أو خادم محلي.** تُخزّن أوزان النموذج كملف على قرصك، وتحدث كل المعالجة على CPU أو GPU الخاص بك. لا يُنقل أي نص من الموجّهات أو بيانات استجابة إلى أي خادم خارجي.',
            'يميّز مصطلح "محلي" هذه النماذج عن الخدمات المستضافة في السحابة، مثل OpenAI GPT-5.6، أو Anthropic Claude Sonnet 5، أو Google Gemini 3.1 Pro، التي تعالج موجّهاتك على خوادم بعيدة وتعيد النتائج عبر الإنترنت.',
            'تتراوح نماذج LLM المحلية من نماذج صغيرة 1B معاملات تعمل على هاتف إلى نماذج 70B معاملات تتطلب محطة عمل بذاكرة VRAM سعة 48 GB. أكثر النماذج استخدامًا للمبتدئين -- Meta Llama 3.2 3B، وMicrosoft Phi-3 Mini، وGoogle Gemma 2 2B -- تعمل على أي حاسوب محمول بذاكرة 8 GB من RAM.',
          ],
        },
        howItWorks: {
          title: 'كيف يعمل نموذج LLM المحلي؟',
          content: [
            '**يتضمن تشغيل نموذج LLM محلي ثلاث طبقات تعمل معًا: ملف النموذج، ومحرك الاستدلال، والواجهة.**',
            '**يحتوي ملف النموذج** على أوزان الشبكة العصبية: القيم العددية المُتعلَّمة التي تحدد كيف يعالج النموذج النص ويولّده. للاستخدام المحلي، تُخزّن هذه الأوزان غالبًا بصيغة GGUF (صيغة مضغوطة طوّرها مشروع llama.cpp) أو بصيغة safetensors. نموذج 7B معاملات مكمَّم إلى دقة 4 بت يشغل نحو 4.5 GB على القرص.',
            '**يقرأ محرك الاستدلال** ملف النموذج وينفّذ الحسابات المصفوفية اللازمة لتوليد token. أشهر المحركات هي [Ollama](/ar/local-llms/how-to-install-ollama) (يعمل كخدمة في الخلفية بواجهة API متوافقة مع OpenAI)، و[LM Studio](/ar/local-llms/how-to-install-lm-studio) (تطبيق سطح مكتب بواجهة دردشة مدمجة)، وllama.cpp (مكتبة C++ الأساسية التي تُبنى عليها معظم الأدوات).',
            '**الواجهة** هي حيث تتفاعل مع النموذج: طرفية، أو واجهة ويب، أو نقطة نهاية API. تعرض أدوات كثيرة مثل Ollama واجهة REST API على `http://localhost:11434` لتتمكن من توصيل أي تطبيق متوافق مع OpenAI بنموذجك المحلي.',
          ],
          youtubeUrl: 'https://www.youtube.com/watch?v=2p2xMKpz7wM',
        },
        hardware: {
          id: 'what-hardware-do-you-need',
          title: 'أي عتاد تحتاج لتشغيل نموذج LLM محلي؟',
          content: 'يعتمد متطلب العتاد كليًا على النموذج الذي تريد تشغيله وسرعة الاستجابة التي تحتاجها.',
          rows: [
            { 'Tamaño del modelo': '1B-3B معاملات', 'RAM necesaria': '4-6 GB', 'Velocidad (CPU)': '20-60 tok/ثانية', 'Modelos de ejemplo': 'Llama 3.2 1B، Phi-3 Mini 3.8B' },
            { 'Tamaño del modelo': '7B-8B معاملات', 'RAM necesaria': '6-8 GB', 'Velocidad (CPU)': '10-30 tok/ثانية', 'Modelos de ejemplo': 'Llama 3.3 8B، Mistral Small' },
            { 'Tamaño del modelo': '13B-14B معاملات', 'RAM necesaria': '10-12 GB', 'Velocidad (CPU)': '5-15 tok/ثانية', 'Modelos de ejemplo': 'Llama 3.2 13B، Qwen3 14B' },
            { 'Tamaño del modelo': '32B-34B معاملات', 'RAM necesaria': '20-24 GB', 'Velocidad (CPU)': '2-6 tok/ثانية', 'Modelos de ejemplo': 'Qwen3 32B، DeepSeek-R1 32B' },
            { 'Tamaño del modelo': '70B+ معاملات', 'RAM necesaria': '40-48 GB', 'Velocidad (CPU)': '1-3 tok/ثانية', 'Modelos de ejemplo': 'Llama 3.3 70B، Qwen3 72B' },
          ],
          columns: ['حجم النموذج', 'RAM المطلوبة', 'السرعة (CPU)', 'نماذج مثال'],
        },
        hardwareGpu: {
          title: 'هل تجعل وحدة GPU نموذج LLM المحلي أسرع؟',
          content: 'يحسّن التسريع بوحدة GPU السرعة بشكل كبير. تشغّل NVIDIA RTX 4070 Ti (12 GB من VRAM) نموذج 7B بـ 80-120 token/ثانية: أسرع بـ 4 إلى 8 مرات من وضع CPU فقط. تستخدم أجهزة Mac بمعالج Apple Silicon (M1، M2، M3، M4) ذاكرة موحّدة وتبلغ 40-80 token/ثانية على نماذج 7B دون GPU مخصصة. لمستخدمي الحواسيب المحمولة، راجع [كيفية تشغيل نماذج LLM المحلية على حاسوب محمول](/ar/local-llms/local-llm-on-laptop) للحصول على نصائح خاصة بالعتاد.',
        },
        vsCloud: {
          id: 'local-llm-vs-cloud-api',
          title: 'LLM محلي مقابل API سحابية: ما الفرق؟',
          content: 'المقايضة الأساسية هي الخصوصية والتكلفة مقابل القدرة والسرعة. راجع المقارنة الكاملة في [نماذج LLM المحلية مقابل واجهات API السحابية](/ar/local-llms/local-llms-vs-cloud-apis).',
          rows: [
            { 'Factor': 'الخصوصية', 'LLM local': 'تامة: لا تغادر البيانات جهازك أبدًا', 'API en la nube': 'تُعالَج البيانات على خوادم المزوّد' },
            { 'Factor': 'التكلفة', 'LLM local': '$0 لكل token بعد تكلفة العتاد', 'API en la nube': '$0.15-$15 لكل مليون token حسب النموذج' },
            { 'Factor': 'السرعة', 'LLM local': '10-120 tok/ثانية على عتاد استهلاكي', 'API en la nube': '50-200 tok/ثانية، تتفاوت حسب الحمل' },
            { 'Factor': 'جودة النموذج', 'LLM local': 'جيدة: منافِسة على نطاق 70B', 'API en la nube': 'الأقوى المتاحة (GPT-5.6، Claude Sonnet 5)' },
            { 'Factor': 'وقت الإعداد', 'LLM local': '5-15 دقيقة مع Ollama أو LM Studio', 'API en la nube': '2-5 دقائق للحصول على مفتاح API' },
            { 'Factor': 'الاستخدام دون اتصال', 'LLM local': 'نعم: يعمل بلا إنترنت', 'API en la nube': 'لا: يتطلب اتصالًا نشطًا' },
          ],
          columns: ['العامل', 'LLM محلي', 'API سحابية'],
        },
        modelFormats: {
          id: 'which-model-formats-are-used',
          title: 'أي صيغ نماذج تُستخدم لنماذج LLM المحلية؟',
          content: [
            '**GGUF** (GPT-Generated Unified Format) هي الصيغة المهيمنة للاستدلال المحلي. طوّرها مشروع llama.cpp، وتدمج ملفات GGUF كل بيانات النموذج الوصفية وتدعم مستويات تكميم متعددة في ملف واحد. عندما تشغّل `ollama pull llama3.2`، ينزّل Ollama داخليًا ملف GGUF.',
            '**Safetensors** صيغة من Hugging Face تُستخدم أساسًا مع أدوات الاستدلال القائمة على PyTorch، مثل transformers وvLLM. وهي أكثر شيوعًا في البحث وعمليات النشر على الخوادم.',
            '**يقلّل التكميم** دقة النموذج لخفض متطلبات الذاكرة. نموذج 7B بدقة FP16 كاملة يتطلب ~14 GB من RAM. بتكميم Q4_K_M (4 بت)، يحتاج النموذج نفسه ~4.5 GB بفقدان جودة ضئيل. تستخدم معظم أدلة المبتدئين Q4_K_M أو Q5_K_M.',
          ],
        },
        whenToUse: {
          id: 'when-should-you-use-a-local-llm',
          title: 'متى يجب أن تستخدم نموذج LLM محليًا بدلًا من API سحابية؟',
          items: [
            '**معالجة البيانات الحساسة** -- السجلات الطبية، والمستندات القانونية، والبيانات المالية، أو أي معلومات تعريف شخصية (PII) لا يمكن أن تغادر بنيتك التحتية.',
            '**إلغاء تكاليف API** -- المعالجة بالدُفعات عالية الحجم حيث تتراكم تكاليف token السحابية بسرعة. نموذج 7B يعمل محليًا يكلّف $0 لكل استعلام بعد استهلاك العتاد.',
            '**بيئات دون اتصال أو معزولة** -- العمل الميداني، والمنشآت الآمنة، أو التطبيقات التي يجب أن تعمل دون اتصال بالإنترنت.',
            '**التعلّم والتجريب** -- فهم كيفية عمل نماذج LLM داخليًا، وتجربة الموجّهات دون قلق بشأن التكلفة، أو بناء أدوات محلية مدعومة بالذكاء الاصطناعي.',
            '**التطبيقات منخفضة زمن الاستجابة** -- عندما يكون زمن الذهاب والإياب عبر الشبكة غير مقبول ويكون نموذج محلي أصغر سريعًا بما يكفي للمهمة.',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'أسئلة شائعة حول نماذج LLM المحلية',
          faqs: [
            {
              q: 'هل يمكن لنموذج LLM محلي مضاهاة جودة GPT-5.6؟',
              a: 'لا، ليس على العتاد الاستهلاكي الحالي. يتفوق GPT-5.6 وClaude Sonnet 5 على أي نموذج قابل للتشغيل محليًا في الاستدلال المعقد، وتوليد الشيفرة، ومعايير اتباع التعليمات. مع ذلك، لمهام التلخيص، والترجمة، والكتابة اليومية، ينتج نموذج 13B-34B مكمَّم جيدًا نتائج يصعب تمييزها عن النماذج الرائدة.',
            },
            {
              q: 'هل أحتاج إلى GPU لتشغيل نموذج LLM محلي؟',
              a: 'لا. تعمل جميع محركات الاستدلال الرئيسية (Ollama، LM Studio، llama.cpp) على CPU فقط. تسرّع GPU الأداء بشكل كبير: تشغّل NVIDIA RTX 4060 (8 GB من VRAM) نموذج 7B بـ 60-90 token/ثانية مقابل 10-20 token/ثانية على CPU فقط. تستخدم أجهزة Mac بمعالج Apple Silicon ذاكرة موحّدة مسرّعة بـ GPU افتراضيًا وهي مثالية لنماذج LLM المحلية دون GPU مخصصة.',
            },
            {
              q: 'من أين أنزّل نماذج LLM المحلية؟',
              a: 'المصادر الثلاثة الرئيسية هي: مكتبة نماذج Ollama (ollama.com/library) للتنزيلات بأمر واحد؛ وHugging Face (huggingface.co) لمجموعة كاملة من نماذج GGUF وsafetensors؛ ومتصفح النماذج المدمج في LM Studio الذي يبحث في Hugging Face مباشرة. راجع [كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) و[كيفية تثبيت LM Studio](/ar/local-llms/how-to-install-lm-studio) لأدلة الإعداد.',
            },
            {
              q: 'هل تشغيل نموذج LLM محلي خاص؟',
              a: 'نعم، مع تفاصيل دقيقة. استدلال النموذج نفسه محلي بالكامل. مع ذلك، قد ترسل بعض التطبيقات المبنية على نماذج LLM المحلية بيانات إلى خوادم خارجية. تحقق دائمًا مما إذا كانت الواجهة أو طبقة الإضافات التي تستخدمها قد فعّلت القياس عن بُعد أو المزامنة السحابية. راجع [قائمة تحقق أمان وخصوصية نماذج LLM المحلية](/ar/local-llms/local-llm-security-privacy-checklist) للحصول على دليل تدقيق كامل.',
            },
          ],
        },
        nextSteps: {
          title: 'كيف تبدأ مع نماذج LLM المحلية؟',
          content: 'أسرع طريقة لتشغيل أول نموذج LLM محلي هي [كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama): أمر واحد يثبّت المحرك وينزّل نموذجًا في أقل من 5 دقائق على macOS أو Windows أو Linux. إذا فضّلت واجهة رسومية، فإن [كيفية تثبيت LM Studio](/ar/local-llms/how-to-install-lm-studio) ترشدك خطوة بخطوة في إعداد تطبيق سطح المكتب. لاختيار نموذج للبدء، راجع [أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models).',
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            '**llama.cpp -- GitHub** -- مكتبة C++ الأساسية لتشغيل النماذج المكمَّمة محليًا',
            '**Hugging Face -- Model Hub** -- مستودع لأكثر من 100,000 نموذج بصيغة GGUF وsafetensors وغيرها',
            '**Ollama Model Library** -- قائمة منسّقة من النماذج المكمَّمة مسبقًا المتاحة للتنزيل بنقرة واحدة',
          ],
        },
        commonMistakes: {
          title: 'أخطاء شائعة عند البدء',
          items: [
            'افتراض أن جميع النماذج المحلية خاصة بالقدر نفسه: قد تظل بعض الواجهات أو التكميمات تسجّل البيانات.',
            'تشغيل نماذج أكبر من RAM المتاحة، مما يسبب تباطؤًا حادًا بسبب التبديل على القرص.',
            'عدم إدراك أن جودة النماذج تتفاوت بشكل كبير: ليست كل النماذج المحلية تضاهي GPT-5.6 في المهام المعقدة.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) -- إعداد خطوة بخطوة وأول نموذج',
            '[كيفية تثبيت LM Studio](/ar/local-llms/how-to-install-lm-studio) -- بديل تطبيق سطح مكتب بواجهة رسومية',
            '[أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models) -- توصيات نماذج حسب RAM المتاحة',
            '[نماذج LLM المحلية مقابل واجهات API السحابية](/ar/local-llms/local-llms-vs-cloud-apis) -- مقارنة كاملة للمقايضات',
            'فهم ماهية نماذج LLM المحلية هو الخطوة الأولى. تعلّم استخدامها بفعالية هو الثانية: يغطي [دليل هندسة الموجّهات](https://www.promptquorum.com/ar/prompt-engineering) 80 تقنية.',
            '[اتجاهات LLM المحلية 2026–2027: 5 تنبؤات رئيسية لتبني المؤسسات والذكاء الاصطناعي على الجهاز](/ar/local-llms/future-of-local-llms) -- مستقبل نماذج LLM المحلية',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'ما هي نماذج LLM المحلية؟ كيف تعمل نماذج الذكاء الاصطناعي على عتادك',
        'description': 'تشغّل نماذج LLM المحلية نماذج الذكاء الاصطناعي على عتادك الخاص، دون حاجة إلى إنترنت. تعرّف على ماهيتها، وكيف تعمل، ومتى تستخدمها. دليل 2026.',
        'url': 'https://www.promptquorum.com/ar/local-llms/what-are-local-llms',
        'datePublished': '2026-04-04',
        'dateModified': '2026-07-13',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'inLanguage': 'ar',
        'about': [
          { '@type': 'Thing', 'name': 'LLM محلي' },
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'صيغة GGUF' },
          { '@type': 'Thing', 'name': 'llama.cpp' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'ar',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'ما الفرق بين نموذج LLM محلي وواجهة API ذكاء اصطناعي سحابية؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'يعمل نموذج LLM المحلي على عتادك الخاص: CPU أو GPU لديك. تعالج واجهة API السحابية (OpenAI، Anthropic، Google) موجّهاتك على خوادم بعيدة. النماذج المحلية خاصة ومجانية بعد الإعداد؛ بينما تتقاضى واجهات API السحابية رسومًا لكل token وترسل بياناتك إلى خوادم خارجية.' }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني تشغيل نموذج LLM محلي دون GPU؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'نعم. يعمل الاستدلال على CPU بذاكرة 8 GB من RAM أو أكثر. نموذج 7B بتكميم Q4 يعمل بـ 5-15 token/ثانية على CPU حاسوب محمول حديث. يرفعه التسريع بـ GPU (NVIDIA CUDA، AMD ROCm، Apple Metal) إلى 30-100 token/ثانية.' }
          },
          {
            '@type': 'Question',
            'name': 'من أين أنزّل نماذج LLM المحلية؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'ثلاثة مصادر رئيسية: مكتبة Ollama (ollama.com/library) للتنزيلات بأمر واحد، وHugging Face (huggingface.co) لمجموعة كاملة من نماذج GGUF، ومتصفح النماذج المدمج في LM Studio الذي يبحث في Hugging Face مباشرة.' }
          },
          {
            '@type': 'Question',
            'name': 'هل تشغيل نموذج LLM محلي خاص؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'نعم: الاستدلال محلي بالكامل. مع ذلك، قد ترسل بعض التطبيقات المبنية على نماذج LLM المحلية بيانات إلى الخارج. تحقق دائمًا مما إذا كانت الواجهة أو طبقة الإضافات قد فعّلت القياس عن بُعد أو المزامنة السحابية.' }
          },
          {
            '@type': 'Question',
            'name': 'أي عتاد أحتاج لنموذج LLM محلي؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'الحد الأدنى: 8 GB من RAM لنموذج 7B بتكميم Q4. الموصى به: 16 GB من RAM وGPU بذاكرة VRAM سعة 8 GB+ لاستدلال مريح. تشغّل أجهزة Mac بمعالج Apple Silicon (M1/M2/M3) نماذج LLM المحلية بكفاءة باستخدام الذاكرة الموحّدة.' }
          },
          {
            '@type': 'Question',
            'name': 'ما هي صيغة GGUF؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'GGUF (GPT-Generated Unified Format) هي صيغة الملف المعيارية لنماذج LLM المحلية المكمَّمة. طوّرها مشروع llama.cpp، وتخزّن أوزان النموذج بصيغة مدمجة تدعم مستويات تكميم متعددة (Q4_K_M، Q5_K_M، Q8_0).' }
          },
          {
            '@type': 'Question',
            'name': 'ما هو التكميم في نماذج LLM المحلية؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'يقلّل التكميم الدقة العددية لأوزان النموذج من 16 بت إلى 4 أو 8 بت، مما يخفض حجم الملف ومتطلبات VRAM بنسبة 50-75%. Q4_K_M هو المعيار: ينتقل نموذج 7B من ~14 GB (FP16) إلى ~4.5 GB، بفقدان جودة نحو 1%.' }
          },
          {
            '@type': 'Question',
            'name': 'ما هو llama.cpp؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'llama.cpp مكتبة استدلال C++ مفتوحة المصدر تشغّل نماذج LLM المكمَّمة على CPU وGPU. وهي المحرك المستخدم في Ollama، وLM Studio، وGPT4All، ومعظم أدوات LLM المحلية الأخرى. تدعم صيغة GGUF، وNVIDIA CUDA، وAMD ROCm، وApple Metal.' }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكن لنماذج LLM المحلية مضاهاة جودة GPT-4؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'ليس بعد للمهام الأكثر تطلبًا. اعتبارًا من أبريل 2026، يقترب أفضل نموذج محلي للمستهلكين (Llama 3.3 70B بـ Q4) من GPT-5.5 في المعايير، لكنه يتطلب GPU محطة عمل بذاكرة VRAM سعة 48 GB+. تعمل نماذج 7B على الحواسيب المحمولة، لكنها أضعف بكثير من GPT-5.5.' }
          },
          {
            '@type': 'Question',
            'name': 'ما الفرق بين نموذج LLM محلي ونموذج مضبوط دقيقًا (fine-tuned)؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'نموذج LLM المحلي هو أي نموذج يعمل على عتادك الخاص. النموذج المضبوط دقيقًا هو نموذج أساسي أُعيد تدريبه ببيانات محددة لتغيير سلوكه. يمكن أيضًا تشغيل النماذج المضبوطة محليًا عبر Ollama أو llama.cpp باستخدام محوّلات LoRA أو ملفات GGUF مدمجة.' }
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'أساسيات نماذج LLM المحلية',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'ما هو نموذج LLM المحلي؟', 'description': 'نموذج ذكاء اصطناعي يعمل على عتادك الخاص دون إنترنت أو استدعاءات API، بخصوصية تامة للبيانات وتكلفة صفرية لكل token.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'كيف يعمل', 'description': 'ثلاثة مكونات تعمل معًا: ملف النموذج (صيغة GGUF)، ومحرك استدلال (Ollama، LM Studio، llama.cpp)، وواجهة.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'متطلبات العتاد', 'description': 'الحد الأدنى 8 GB من RAM لنموذج 7B بتكميم Q4؛ مع 16 GB من RAM، يُعمَل بأريحية في معظم حالات الاستخدام اليومية.' },
        ]
      },
    },
    pt: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'O que são LLMs locais? Como rodar modelos de IA no seu próprio hardware',
      seoTitle: 'O que são LLMs locais? IA que roda no seu hardware',
      intro: 'Um LLM local é um modelo de linguagem de IA que roda inteiramente no seu próprio hardware: sem conexão à internet, sem chamadas de API, sem dados saindo da sua máquina. Você baixa os pesos do modelo como um arquivo, roda um motor de inferência como o Ollama ou o LM Studio, e o modelo responde a partir da sua CPU ou GPU. A partir de abril de 2026, os modelos mais práticos para iniciantes são Llama 3.2 3B e Phi-3 Mini.',
      metaDescription: 'Os LLMs locais rodam modelos de IA no seu próprio hardware, sem precisar de internet. Aprenda o que são, como funcionam e quando usá-los. Guia para 2026.',
      leadAnswerBlock: '**Os LLMs locais rodam toda a inferência no seu próprio hardware com custo zero por token e privacidade total.** As APIs em nuvem (GPT-5.6, Claude Opus 4.8, Gemini 3.1 Pro) oferecem maior qualidade com uma configuração mínima.',
      dateModified: '2026-07-13',
      publishDate: '2026-04-04',
      audience: 'Iniciantes rodando seu primeiro LLM local em hardware de consumo',
      readTime: '7 min de leitura',
      educationalLevel: 'Beginner',
      primaryTerm: 'LLM local',
      toc: [
        { label: 'Pontos principais', anchor: '#key-takeaways' },
        { label: 'O que é um LLM local?', anchor: '#what-is-a-local-llm' },
        { label: 'Como funciona um LLM local?', anchor: '#how-does-a-local-llm-work' },
        { label: 'Qual hardware você precisa?', anchor: '#what-hardware-do-you-need' },
        { label: 'LLM local vs API em nuvem: qual é a diferença?', anchor: '#local-llm-vs-cloud-api' },
        { label: 'Quais formatos de modelo são usados?', anchor: '#which-model-formats-are-used' },
        { label: 'Quando você deve usar um LLM local?', anchor: '#when-should-you-use-a-local-llm' },
        { label: 'Perguntas frequentes', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Um LLM local roda na sua própria CPU ou GPU: sem internet, sem custos de API, sem dados enviados a servidores de terceiros.',
            'São necessários três componentes: o arquivo do modelo (formato GGUF ou safetensors), um motor de inferência (Ollama, LM Studio ou llama.cpp) e, opcionalmente, uma interface de chat.',
            'Hardware mínimo: 8 GB de RAM para um modelo de 7B parâmetros com quantização de 4 bits. Com 16 GB de RAM, dá conta confortavelmente da maioria dos modelos do dia a dia.',
            'Os modelos locais são mais lentos que as APIs em nuvem em hardware de consumo: um modelo de 7B em um notebook moderno produz 15-40 tokens/seg ante ~100 tokens/seg do GPT-5.6 Luna por API.',
            'Melhores casos de uso: processamento de dados privados, trabalho offline, custo recorrente zero e aprender como os LLMs funcionam.',
          ],
        },
        whatIsLocalLlm: {
          title: 'O que é um LLM local?',
          content: [
            '**Um LLM local (modelo de linguagem grande) é um modelo de IA que roda em hardware sob o seu controle: seu notebook, desktop ou servidor local.** Os pesos do modelo são armazenados como um arquivo no seu disco, e todo o processamento ocorre na sua própria CPU ou GPU. Nenhum texto dos prompts nem dados de resposta são transmitidos para qualquer servidor externo.',
            'O termo "local" distingue esses modelos dos serviços hospedados na nuvem, como OpenAI GPT-5.6, Anthropic Claude Sonnet 5 ou Google Gemini 3.1 Pro, que processam seus prompts em servidores remotos e devolvem os resultados pela internet.',
            'Os LLMs locais vão de pequenos modelos de 1B parâmetros que funcionam em um celular até modelos de 70B parâmetros que exigem uma estação de trabalho com 48 GB de VRAM. Os modelos para iniciantes mais usados -- Meta Llama 3.2 3B, Microsoft Phi-3 Mini e Google Gemma 2 2B -- funcionam em qualquer notebook com 8 GB de RAM.',
          ],
        },
        howItWorks: {
          title: 'Como funciona um LLM local?',
          content: [
            '**Rodar um LLM local envolve três camadas que trabalham juntas: o arquivo do modelo, o motor de inferência e a interface.**',
            '**O arquivo do modelo** contém os pesos da rede neural: os valores numéricos aprendidos que definem como o modelo processa e gera texto. Para uso local, esses pesos quase sempre são armazenados no formato GGUF (um formato comprimido desenvolvido pelo projeto llama.cpp) ou no formato safetensors. Um modelo de 7B parâmetros quantizado em 4 bits de precisão ocupa cerca de 4,5 GB em disco.',
            '**O motor de inferência** lê o arquivo do modelo e realiza os cálculos matriciais necessários para gerar tokens. Os motores mais populares são o [Ollama](/pt/local-llms/how-to-install-ollama) (roda como serviço em segundo plano com uma API compatível com a OpenAI), o [LM Studio](/pt/local-llms/how-to-install-lm-studio) (um aplicativo de desktop com interface de chat integrada) e o llama.cpp (a biblioteca C++ subjacente sobre a qual a maioria das ferramentas é construída).',
            '**A interface** é onde você interage com o modelo: um terminal, uma interface web ou um endpoint de API. Muitas ferramentas como o Ollama expõem uma API REST em `http://localhost:11434` para que você conecte qualquer aplicação compatível com a OpenAI ao seu modelo local.',
          ],
          youtubeUrl: 'https://www.youtube.com/watch?v=2p2xMKpz7wM',
        },
        hardware: {
          id: 'what-hardware-do-you-need',
          title: 'Qual hardware você precisa para rodar um LLM local?',
          content: 'O requisito de hardware depende inteiramente do modelo que você quer rodar e da velocidade de resposta que precisa.',
          rows: [
            { 'Tamanho do modelo': '1B-3B parâmetros', 'RAM necessária': '4-6 GB', 'Velocidade (CPU)': '20-60 tok/seg', 'Modelos de exemplo': 'Llama 3.2 1B, Phi-3 Mini 3.8B' },
            { 'Tamanho do modelo': '7B-8B parâmetros', 'RAM necessária': '6-8 GB', 'Velocidade (CPU)': '10-30 tok/seg', 'Modelos de exemplo': 'Llama 3.3 8B, Mistral Small' },
            { 'Tamanho do modelo': '13B-14B parâmetros', 'RAM necessária': '10-12 GB', 'Velocidade (CPU)': '5-15 tok/seg', 'Modelos de exemplo': 'Llama 3.2 13B, Qwen3 14B' },
            { 'Tamanho do modelo': '32B-34B parâmetros', 'RAM necessária': '20-24 GB', 'Velocidade (CPU)': '2-6 tok/seg', 'Modelos de exemplo': 'Qwen3 32B, DeepSeek-R1 32B' },
            { 'Tamanho do modelo': '70B+ parâmetros', 'RAM necessária': '40-48 GB', 'Velocidade (CPU)': '1-3 tok/seg', 'Modelos de exemplo': 'Llama 3.3 70B, Qwen3 72B' },
          ],
          columns: ['Tamanho do modelo', 'RAM necessária', 'Velocidade (CPU)', 'Modelos de exemplo'],
        },
        hardwareGpu: {
          title: 'Uma GPU deixa um LLM local mais rápido?',
          content: 'A aceleração por GPU melhora a velocidade drasticamente. Uma NVIDIA RTX 4070 Ti (12 GB de VRAM) roda um modelo de 7B a 80-120 tokens/seg: entre 4 e 8 vezes mais rápido que no modo apenas CPU. Os Macs com Apple Silicon (M1, M2, M3, M4) usam memória unificada e alcançam 40-80 tokens/seg em modelos de 7B sem uma GPU dedicada. Para usuários de notebook, consulte [Como rodar LLMs locais em um notebook](/pt/local-llms/local-llm-on-laptop) para dicas específicas de hardware.',
        },
        vsCloud: {
          id: 'local-llm-vs-cloud-api',
          title: 'LLM local vs API em nuvem: qual é a diferença?',
          content: 'O principal trade-off é privacidade e custo frente a capacidade e velocidade. Veja a comparação completa em [LLMs locais vs APIs em nuvem](/pt/local-llms/local-llms-vs-cloud-apis).',
          rows: [
            { 'Fator': 'Privacidade', 'LLM local': 'Total: os dados nunca saem da sua máquina', 'API em nuvem': 'Dados processados em servidores do provedor' },
            { 'Fator': 'Custo', 'LLM local': 'US$ 0 por token após o custo do hardware', 'API em nuvem': 'US$ 0,15-15 por 1M de tokens conforme o modelo' },
            { 'Fator': 'Velocidade', 'LLM local': '10-120 tok/seg em hardware de consumo', 'API em nuvem': '50-200 tok/seg, varia conforme a carga' },
            { 'Fator': 'Qualidade do modelo', 'LLM local': 'Boa: competitiva em escala 70B', 'API em nuvem': 'A mais potente disponível (GPT-5.6, Claude Sonnet 5)' },
            { 'Fator': 'Tempo de configuração', 'LLM local': '5-15 minutos com Ollama ou LM Studio', 'API em nuvem': '2-5 minutos para obter uma chave de API' },
            { 'Fator': 'Uso offline', 'LLM local': 'Sim: funciona sem internet', 'API em nuvem': 'Não: exige conexão ativa' },
          ],
          columns: ['Fator', 'LLM local', 'API em nuvem'],
        },
        modelFormats: {
          id: 'which-model-formats-are-used',
          title: 'Quais formatos de modelo são usados para os LLMs locais?',
          content: [
            '**GGUF** (GPT-Generated Unified Format) é o formato dominante para a inferência local. Desenvolvido pelo projeto llama.cpp, os arquivos GGUF integram todos os metadados do modelo e suportam vários níveis de quantização em um único arquivo. Quando você roda `ollama pull llama3.2`, o Ollama baixa internamente um arquivo GGUF.',
            '**Safetensors** é um formato do Hugging Face usado principalmente com ferramentas de inferência baseadas em PyTorch, como transformers e vLLM. É mais comum em pesquisa e implantações em servidores.',
            '**A quantização** reduz a precisão do modelo para baixar os requisitos de memória. Um modelo de 7B em precisão FP16 completa exige ~14 GB de RAM. Com quantização Q4_K_M (4 bits), o mesmo modelo precisa de ~4,5 GB com uma perda de qualidade mínima. A maioria dos guias para iniciantes usa Q4_K_M ou Q5_K_M.',
          ],
        },
        whenToUse: {
          id: 'when-should-you-use-a-local-llm',
          title: 'Quando você deve usar um LLM local em vez de uma API em nuvem?',
          items: [
            '**Processamento de dados sensíveis** -- prontuários médicos, documentos jurídicos, dados financeiros ou qualquer informação de identificação pessoal (PII) que não pode sair da sua infraestrutura.',
            '**Eliminar custos de API** -- processamento em lote de alto volume em que os custos por token na nuvem se acumulam rapidamente. Um modelo de 7B rodado localmente custa US$ 0 por consulta uma vez amortizado o hardware.',
            '**Ambientes offline ou isolados** -- trabalho de campo, instalações seguras ou aplicações que precisam funcionar sem conectividade à internet.',
            '**Aprendizado e experimentação** -- entender como os LLMs funcionam internamente, testar prompts sem preocupações de custo ou construir ferramentas locais potencializadas por IA.',
            '**Aplicações de baixa latência** -- quando o tempo de ida e volta pela rede é inaceitável e um modelo local menor é rápido o suficiente para a tarefa.',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'Perguntas frequentes sobre os LLMs locais',
          faqs: [
            {
              q: 'Um LLM local pode igualar a qualidade do GPT-5.6?',
              a: 'Não, não no hardware de consumo atual. O GPT-5.6 e o Claude Sonnet 5 superam qualquer modelo executável localmente em raciocínio complexo, geração de código e benchmarks de seguimento de instruções. Porém, para tarefas de resumo, tradução e escrita do dia a dia, um modelo de 13B-34B bem quantizado produz resultados difíceis de distinguir dos modelos de fronteira.',
            },
            {
              q: 'Preciso de uma GPU para rodar um LLM local?',
              a: 'Não. Todos os principais motores de inferência (Ollama, LM Studio, llama.cpp) funcionam apenas com CPU. Uma GPU acelera consideravelmente o desempenho: uma NVIDIA RTX 4060 (8 GB de VRAM) roda um modelo de 7B a 60-90 tokens/seg ante 10-20 tokens/seg apenas na CPU. Os Macs com Apple Silicon usam memória unificada acelerada por GPU por padrão e são ideais para LLMs locais sem uma GPU dedicada.',
            },
            {
              q: 'Onde baixo os modelos de LLM locais?',
              a: 'As três fontes principais são: a biblioteca de modelos do Ollama (ollama.com/library) para downloads com um único comando; o Hugging Face (huggingface.co) para a gama completa de modelos GGUF e safetensors; e o navegador de modelos integrado do LM Studio, que busca diretamente no Hugging Face. Consulte [Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) e [Como instalar o LM Studio](/pt/local-llms/how-to-install-lm-studio) para guias de configuração.',
            },
            {
              q: 'Rodar um LLM local é privado?',
              a: 'Sim, com ressalvas. A inferência do modelo em si é completamente local. Porém, algumas aplicações construídas sobre LLMs locais podem enviar dados a servidores externos. Verifique sempre se a interface ou a camada de plugins que você usa tem telemetria ou sincronização em nuvem habilitada. Consulte a [Lista de verificação de segurança e privacidade para LLMs locais](/pt/local-llms/local-llm-security-privacy-checklist) para um guia de auditoria completo.',
            },
          ],
        },
        nextSteps: {
          title: 'Como começar com os LLMs locais?',
          content: 'A forma mais rápida de rodar seu primeiro LLM local é [Como instalar o Ollama](/pt/local-llms/how-to-install-ollama): um único comando instala o motor e baixa um modelo em menos de 5 minutos no macOS, Windows ou Linux. Se você prefere uma interface gráfica, [Como instalar o LM Studio](/pt/local-llms/how-to-install-lm-studio) guia passo a passo pela configuração do aplicativo de desktop. Para escolher com qual modelo começar, consulte [Melhores modelos LLM locais para iniciantes](/pt/local-llms/best-beginner-local-llm-models).',
        },
        sources: {
          id: 'sources',
          title: 'Fontes',
          items: [
            '**llama.cpp -- GitHub** -- A biblioteca C++ fundamental para rodar modelos quantizados localmente',
            '**Hugging Face -- Model Hub** -- Repositório de mais de 100.000 modelos nos formatos GGUF, safetensors e outros',
            '**Ollama Model Library** -- Lista curada de modelos pré-quantizados disponíveis para download com um clique',
          ],
        },
        commonMistakes: {
          title: 'Erros comuns ao começar',
          items: [
            'Supor que todos os modelos locais são igualmente privados: algumas interfaces ou quantizações podem ainda registrar dados.',
            'Rodar modelos grandes demais para a RAM disponível, o que provoca uma lentidão severa por swap de disco.',
            'Não entender que a qualidade dos modelos varia drasticamente: nem todos os modelos locais igualam o GPT-5.6 em tarefas complexas.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) -- Configuração passo a passo e primeiro modelo',
            '[Como instalar o LM Studio](/pt/local-llms/how-to-install-lm-studio) -- Alternativa de aplicativo de desktop com interface gráfica',
            '[Melhores modelos LLM locais para iniciantes](/pt/local-llms/best-beginner-local-llm-models) -- Recomendações de modelos conforme a RAM disponível',
            '[LLMs locais vs APIs em nuvem](/pt/local-llms/local-llms-vs-cloud-apis) -- Comparação completa dos trade-offs',
            'Entender o que são os LLMs locais é o primeiro passo. Aprender a usá-los com eficácia é o segundo: o [guia de engenharia de prompts](https://www.promptquorum.com/pt/prompt-engineering) cobre 80 técnicas.',
            '[Tendências de LLM local 2026–2027: 5 previsões principais para adoção empresarial e IA em dispositivo](/pt/local-llms/future-of-local-llms) -- o futuro dos LLMs locais',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'O que são LLMs locais? Como os modelos de IA rodam no seu hardware',
        'description': 'Os LLMs locais rodam modelos de IA no seu próprio hardware, sem precisar de internet. Aprenda o que são, como funcionam e quando usá-los. Guia para 2026.',
        'url': 'https://www.promptquorum.com/pt/local-llms/what-are-local-llms',
        'datePublished': '2026-04-04',
        'dateModified': '2026-07-13',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
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
        'proficiencyLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Qual é a diferença entre um LLM local e uma API de IA em nuvem?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Um LLM local roda no seu próprio hardware: sua CPU ou GPU. Uma API de IA em nuvem (OpenAI, Anthropic, Google) processa seus prompts em servidores remotos. Os LLMs locais são privados e gratuitos depois da configuração; as APIs em nuvem cobram por token e enviam seus dados a servidores externos.' }
          },
          {
            '@type': 'Question',
            'name': 'Posso rodar um LLM local sem GPU?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Sim. A inferência com CPU funciona com 8 GB de RAM ou mais. Um modelo de 7B com quantização Q4 roda a 5-15 tokens/seg em uma CPU de notebook moderna. A aceleração por GPU (NVIDIA CUDA, AMD ROCm, Apple Metal) eleva isso a 30-100 tokens/seg.' }
          },
          {
            '@type': 'Question',
            'name': 'Onde baixo os modelos de LLM locais?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Três fontes principais: a biblioteca do Ollama (ollama.com/library) para downloads com um único comando, o Hugging Face (huggingface.co) para a gama completa de modelos GGUF, e o navegador de modelos integrado do LM Studio, que busca diretamente no Hugging Face.' }
          },
          {
            '@type': 'Question',
            'name': 'Rodar um LLM local é privado?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Sim: a inferência é completamente local. Porém, algumas aplicações construídas sobre LLMs locais podem enviar dados para fora. Verifique sempre se a interface ou a camada de plugins tem telemetria ou sincronização em nuvem habilitada.' }
          },
          {
            '@type': 'Question',
            'name': 'Qual hardware preciso para um LLM local?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Mínimo: 8 GB de RAM para um modelo de 7B com quantização Q4. Recomendado: 16 GB de RAM e uma GPU com 8 GB+ de VRAM para uma inferência confortável. Os Macs com Apple Silicon (M1/M2/M3) rodam LLMs locais de forma eficiente usando memória unificada.' }
          },
          {
            '@type': 'Question',
            'name': 'O que é o formato GGUF?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'GGUF (GPT-Generated Unified Format) é o formato de arquivo padrão para LLMs locais quantizados. Desenvolvido pelo projeto llama.cpp, armazena os pesos do modelo em um formato compacto que suporta vários níveis de quantização (Q4_K_M, Q5_K_M, Q8_0).' }
          },
          {
            '@type': 'Question',
            'name': 'O que é a quantização nos LLMs locais?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'A quantização reduz a precisão numérica dos pesos do modelo de 16 bits para 4 ou 8 bits, reduzindo o tamanho do arquivo e os requisitos de VRAM em 50-75%. O Q4_K_M é o padrão: um modelo de 7B passa de ~14 GB (FP16) para ~4,5 GB, com uma perda de qualidade de cerca de 1%.' }
          },
          {
            '@type': 'Question',
            'name': 'O que é o llama.cpp?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'O llama.cpp é uma biblioteca de inferência C++ de código aberto que roda LLMs quantizados em CPU e GPU. É o motor usado por Ollama, LM Studio, GPT4All e a maioria das demais ferramentas de LLM local. Suporta o formato GGUF, NVIDIA CUDA, AMD ROCm e Apple Metal.' }
          },
          {
            '@type': 'Question',
            'name': 'Os LLMs locais podem igualar a qualidade do GPT-4?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ainda não para as tarefas mais exigentes. A partir de abril de 2026, o melhor modelo local para consumidores (Llama 3.3 70B em Q4) se aproxima do GPT-5.5 em benchmarks, mas exige uma GPU de estação de trabalho com 48 GB+ de VRAM. Os modelos de 7B funcionam em notebooks, mas são significativamente mais fracos que o GPT-5.5.' }
          },
          {
            '@type': 'Question',
            'name': 'Qual é a diferença entre um LLM local e um modelo ajustado (fine-tuned)?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Um LLM local é qualquer modelo que roda no seu próprio hardware. Um modelo ajustado é um modelo base retreinado com dados específicos para mudar seu comportamento. Os modelos ajustados também podem rodar localmente via Ollama ou llama.cpp usando adaptadores LoRA ou arquivos GGUF combinados.' }
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Fundamentos dos LLMs locais',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'O que é um LLM local?', 'description': 'Um modelo de IA que roda no seu próprio hardware sem internet nem chamadas de API, com total privacidade dos dados e custo zero por token.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Como funciona', 'description': 'Três componentes trabalham juntos: o arquivo do modelo (formato GGUF), um motor de inferência (Ollama, LM Studio, llama.cpp) e uma interface.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Requisitos de hardware', 'description': 'Mínimo 8 GB de RAM para um modelo de 7B com quantização Q4; com 16 GB de RAM se trabalha confortavelmente na maioria dos casos de uso do dia a dia.' },
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
            'Plus lent que le cloud sur consumer : 15-40 tokens/sec local vs ~100 tokens/sec avec GPT-5.6 Luna.',
            'Cas idéaux : données sensibles, travail hors ligne, zéro coût récurrent, compréhension des LLMs.',
          ],
        },
        whatIsLocalLlm: {
          title: 'Qu\'est-ce qu\'un LLM local ?',
          content: [
            '**Un LLM local est un modèle IA fonctionnant sur votre propre matériel -- laptop, desktop, serveur local.** Les poids sont stockés comme fichier, tous les calculs se font sur votre CPU ou GPU. Aucune donnée ne quitte votre machine.',
            'Ce terme les distingue des services cloud comme GPT-5.6, Claude Sonnet 5 ou Gemini 3.1 Pro, qui traitent vos prompts sur des serveurs distants.',
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
            { 'Taille modèle': '7B-8B param.', 'RAM': '6-8 GB', 'Vitesse (CPU)': '10-30 tok/sec', 'Exemples': 'Llama 3.3 8B, Mistral Small' },
            { 'Taille modèle': '13B-14B param.', 'RAM': '10-12 GB', 'Vitesse (CPU)': '5-15 tok/sec', 'Exemples': 'Llama 3.2 13B, Qwen3 14B' },
            { 'Taille modèle': '32B-34B param.', 'RAM': '20-24 GB', 'Vitesse (CPU)': '2-6 tok/sec', 'Exemples': 'Qwen3 32B, DeepSeek-R1 32B' },
            { 'Taille modèle': '70B+ param.', 'RAM': '40-48 GB', 'Vitesse (CPU)': '1-3 tok/sec', 'Exemples': 'Llama 3.3 70B, Qwen3 72B' },
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
            { 'Aspect': 'Qualité', 'LLM local': 'Bonne à 70B', 'API cloud': 'Plus puissante (GPT-5.6, Claude Sonnet 5)' },
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
          id: 'faq',
          title: 'Questions fréquentes',
          faqs: [
            {
              q: 'Un LLM local peut-il égaler GPT-5.6 ?',
              a: 'Non, sur hardware consumer. GPT-5.6 et Claude Sonnet 5 gagnent sur raisonnement complexe, génération code, benchmarks. Mais 13B-34B bien quantifiés font très bien summarization, traduction, écriture courante -- résultats quasi-indistinguibles.',
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
            'Ignorer variation qualité modèles -- tous ne rivalisent pas GPT-5.6 complexe.',
          ],
        },
        relatedReading: {
          title: 'Lectures connexes',
          items: [
            '[Installer Ollama](/fr/local-llms/how-to-install-ollama) : setup + premier modèle',
            '[Installer LM Studio](/fr/local-llms/how-to-install-lm-studio) : GUI alternative',
            '[Meilleurs LLMs débutants](/fr/local-llms/best-beginner-local-llm-models) : recommandations RAM',
            '[LLMs locaux vs Cloud APIs](/fr/local-llms/local-llms-vs-cloud-apis) : comparaison complète',
            '[Tendances LLM local 2026–2027 : 5 prédictions clés pour l\'adoption entreprise et l\'IA sur appareil](/fr/local-llms/future-of-local-llms) -- l\'avenir des LLMs locaux',
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
            'コンシューマー機では遅い：ローカル7B＝15～40トークン/秒 vs GPT-5.6 Luna API＝約100トークン/秒。',
            'ベストユースケース：機密データ処理、オフライン作業、継続費用ゼロ、LLM理解。',
          ],
        },
        whatIsLocalLlm: {
          title: 'ローカルLLMとは何か',
          content: [
            '**ローカルLLM（大規模言語モデル）は、あなたが制御するハードウェア上で実行されるAIモデルです。** ノートパソコン、デスクトップ、またはオンプレミスサーバーでも構いません。モデルの重みはファイルとしてディスク上に保存され、すべての処理はあなた自身のCPUまたはGPU上で行われます。プロンプトテキストもレスポンスデータも外部サーバーに送信されません。',
            'こうしたモデルを「ローカル」と呼ぶのは、GPT-5.6、Claude Sonnet 5、Gemini 3.1 Proなどのクラウドサービスとの違いを強調するためです。これらクラウドサービスはプロンプトをリモートサーバーで処理してインターネット経由で結果を返します。',
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
            { 'モデルサイズ': '7B～8B パラメータ', 'RAM': '6～8GB', '速度 (CPU)': '10～30 tok/sec', '例': 'Llama 3.3 8B, Mistral Small' },
            { 'モデルサイズ': '13B～14B パラメータ', 'RAM': '10～12GB', '速度 (CPU)': '5～15 tok/sec', '例': 'Llama 3.2 13B, Qwen3 14B' },
            { 'モデルサイズ': '32B～34B パラメータ', 'RAM': '20～24GB', '速度 (CPU)': '2～6 tok/sec', '例': 'Qwen3 32B, DeepSeek-R1' },
            { 'モデルサイズ': '70B以上', 'RAM': '40～48GB', '速度 (CPU)': '1～3 tok/sec', '例': 'Llama 3.3 70B, Qwen3 72B' },
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
            { '項目': 'モデル品質', 'ローカルLLM': '良好--70Bスケールで競争力あり', 'クラウドAPI': '最強（GPT-5.6、Claude Sonnet 5）' },
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
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'ローカルLLMはGPT-5.6 の品質に達するか？',
              a: '現在のコンシューマー機ではいいえ。GPT-5.6とClaude Sonnet 5は複雑な推論、コード生成、命令遵守ベンチマークで勝ります。しかし要約、翻訳、日常的な文章作成では、量子化された13B～34Bモデルは最先端モデルと区別が難しい結果を出します。',
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
            'モデル品質の差異を理解していない--すべてのローカルモデルが複雑タスクでGPT-5.6に対抗できるわけではありません。',
          ],
        },
        relatedReading: {
          title: '関連読み物',
          items: [
            '[Ollama をインストール](/ja/local-llms/how-to-install-ollama) : セットアップと最初のモデル',
            '[LM Studio をインストール](/ja/local-llms/how-to-install-lm-studio) : GUIアプリの代替',
            '[初心者向けベストローカルLLM](/ja/local-llms/best-beginner-local-llm-models) : RAM 対応モデル推奨',
            '[ローカルLLM vs クラウドAPI](/ja/local-llms/local-llms-vs-cloud-apis) : 完全比較',
            '[ローカルLLMトレンド2026–2027：エンタープライズ導入と端末AI予測](/ja/local-llms/future-of-local-llms) -- ローカルLLMの未来',
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
            '4. 消费者硬件上较慢：本地7B=15-40tokens/秒 vs GPT-5.6 Luna API=约100tokens/秒。',
            '5. 最佳用途：敏感数据处理、离线工作、零持续成本、理解LLM。',
          ],
        },
        whatIsLocalLlm: {
          title: '什么是本地LLM',
          content: [
            '**本地LLM（大型语言模型）是在您控制的硬件上运行的AI模型。** 可以是笔记本、台式机或本地服务器。模型权重存储为磁盘文件，所有处理在您自己的CPU或GPU上进行。无数据发送到外部服务器。',
            '"本地"一词区分这些模型与OpenAI GPT-5.6、Anthropic Claude Sonnet 5、Google Gemini 3.1 Pro等云服务，云服务在远程服务器处理您的提示并通过互联网返回结果。',
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
            { '模型大小': '7B-8B参数', 'RAM需求': '6-8 GB', '速度(CPU)': '10-30 tokens/秒', '示例模型': 'Llama 3.3 8B, Mistral Small' },
            { '模型大小': '13B-14B参数', 'RAM需求': '10-12 GB', '速度(CPU)': '5-15 tokens/秒', '示例模型': 'Llama 3.2 13B, Qwen3 14B' },
            { '模型大小': '32B-34B参数', 'RAM需求': '20-24 GB', '速度(CPU)': '2-6 tokens/秒', '示例模型': 'Qwen3 32B, DeepSeek-R1 32B' },
            { '模型大小': '70B+参数', 'RAM需求': '40-48 GB', '速度(CPU)': '1-3 tokens/秒', '示例模型': 'Llama 3.3 70B, Qwen3 72B' },
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
            { '因素': '模型质量', '本地LLM': '好--70B规模有竞争力', '云API': '最强（GPT-5.6、Claude Sonnet 5）' },
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
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: '本地LLM能达到GPT-5.6的质量吗？',
              a: '消费者硬件上不能。GPT-5.6和Claude Sonnet 5在复杂推理、代码生成、指令遵循基准上更优。但13B-34B良好量化的模型在摘要、翻译和日常写作中表现与前沿模型难以区分。',
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
            '3. 不理解模型质量差异--并非所有本地模型在复杂任务上与GPT-5.6匹敌。',
          ],
        },
        relatedReading: {
          title: '相关阅读',
          items: [
            '[安装Ollama](/zh/local-llms/how-to-install-ollama) : 设置和第一个模型',
            '[安装LM Studio](/zh/local-llms/how-to-install-lm-studio) : GUI替代方案',
            '[初学者最佳本地LLM](/zh/local-llms/best-beginner-local-llm-models) : RAM匹配推荐',
            '[本地LLM vs 云API](/zh/local-llms/local-llms-vs-cloud-apis) : 完整比较',
            '[本地LLM趋势2026–2027：企业采用与端设备AI的5大预测](/zh/local-llms/future-of-local-llms) -- 本地LLM的未来',
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
            'Lokale Modelle sind auf Consumer-Hardware langsamer als Cloud-APIs -- ein 7B-Modell auf einem modernen Laptop erzeugt 15-40 Tokens/Sek., vs. ~100 Tokens/Sek. von GPT-5.6 Luna über API.',
            'Best-Practice-Anwendungsfälle: Verarbeitung sensibler Daten, Offline-Arbeit, null wiederkehrende Kosten und Verständnis der LLM-Funktionsweise.',
          ],
        },
        whatIsLocalLlm: {
          title: 'Was ist ein lokales LLM?',
          content: [
            '**Ein lokales LLM (großes Sprachmodell) ist ein KI-Modell, das auf Hardware unter Ihrer Kontrolle ausgeführt wird -- Ihrem Laptop, Desktop oder lokalen Server.** Die Modellgewichte werden als Datei auf Ihrem Datenträger gespeichert, und alle Verarbeitungsvorgänge erfolgen auf Ihrer eigenen CPU oder GPU. Keine Prompt-Texte oder Antwortdaten werden an externe Server übertragen.',
            'Der Begriff \"lokal\" unterscheidet diese Modelle von Cloud-Diensten wie OpenAI GPT-5.6, Anthropic Claude Sonnet 5 oder Google Gemini 3.1 Pro, die Ihre Prompts auf entfernten Servern verarbeiten und Ergebnisse über das Internet zurückgeben.',
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
            { 'Modellgröße': '7B-8B Parameter', 'RAM erforderlich': '6-8 GB', 'Geschwindigkeit (CPU)': '10-30 Tokens/Sek.', 'Beispielmodelle': 'Llama 3.3 8B, Mistral Small' },
            { 'Modellgröße': '13B-14B Parameter', 'RAM erforderlich': '10-12 GB', 'Geschwindigkeit (CPU)': '5-15 Tokens/Sek.', 'Beispielmodelle': 'Llama 3.2 13B, Qwen3 14B' },
            { 'Modellgröße': '32B-34B Parameter', 'RAM erforderlich': '20-24 GB', 'Geschwindigkeit (CPU)': '2-6 Tokens/Sek.', 'Beispielmodelle': 'Qwen3 32B, DeepSeek-R1 32B' },
            { 'Modellgröße': '70B+ Parameter', 'RAM erforderlich': '40-48 GB', 'Geschwindigkeit (CPU)': '1-3 Tokens/Sek.', 'Beispielmodelle': 'Llama 3.3 70B, Qwen3 72B' },
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
            { 'Faktor': 'Modellqualität', 'Lokales LLM': 'Gut -- wettbewerbsfähig bei 70B-Skalierung', 'Cloud-API': 'Das stärkste verfügbare (GPT-5.6, Claude Sonnet 5)' },
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
          id: 'faq',
          title: 'Häufig gestellte Fragen zu lokalen LLMs',
          faqs: [
            {
              q: 'Kann ein lokales LLM die Qualität von GPT-5.6 erreichen?',
              a: 'Nein -- nicht auf aktueller Consumer-Hardware. GPT-5.6 und Claude Sonnet 5 übertreffen jedes lokal ausführbare Modell bei komplexer Argumentation, Code-Generierung und Befolgung von Anweisungen-Benchmarks. Für Zusammenfassungen, Übersetzungen und alltägliche Schreibaufgaben produziert jedoch ein gut quantisiertes 13B-34B-Modell Ergebnisse, die schwer von Top-Modellen zu unterscheiden sind.',
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
            'Nicht verstehen, dass die Modellqualität drastisch variiert -- nicht alle lokalen Modelle erreichen GPT-5.6 auf komplexen Aufgaben.',
          ],
        },
        relatedReading: {
          title: 'Weiterführende Literatur',
          items: [
            '[Ollama installieren](/de/local-llms/how-to-install-ollama) -- Schritt-für-Schritt-Setup und erster Modell-Durchlauf',
            '[LM Studio installieren](/de/local-llms/how-to-install-lm-studio) -- Desktop-App-Alternative mit grafischer Schnittstelle',
            '[Best Beginner Local LLM Models](/de/local-llms/best-beginner-local-llm-models) -- RAM-gekoppelte Modellempfehlungen',
            '[Lokale LLMs vs. Cloud-APIs](/de/local-llms/local-llms-vs-cloud-apis) -- Vollständiger Vergleich von Kompromissen',
            '[Lokale LLM Trends 2026–2027: 5 Schlüsselvorhersagen für Enterprise-Adoption und On-Device-KI](/de/local-llms/future-of-local-llms) -- die Zukunft lokaler LLMs',
          ],
        },
      },
    },
  ko: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: '로컬 LLM이란 무엇인가요? 자체 하드웨어에서 AI 모델을 실행하는 방법',
      seoTitle: '로컬 LLM이란? 자체 하드웨어에서 AI 모델을 실행하는 방법',
      intro: '로컬 LLM은 인터넷 연결 없이, API 호출 없이, 데이터 외부 전송 없이 완전히 자체 하드웨어에서 실행되는 AI 언어 모델입니다. 모델 가중치를 파일로 다운로드하고 Ollama 또는 LM Studio와 같은 추론 엔진을 실행하면, 모델이 CPU 또는 GPU만으로 응답합니다. 2026년 4월 기준, 초보자에게 가장 실용적인 모델은 Llama 3.2 3B와 Phi-3 Mini입니다.',
      metaDescription: '로컬 LLM은 인터넷 없이 자체 하드웨어에서 AI 모델을 실행합니다. 로컬 LLM이 무엇인지, 어떻게 작동하는지, 언제 사용해야 하는지 알아보세요. 2026년 가이드.',
      leadAnswerBlock: '**로컬 LLM은 모든 추론을 자체 하드웨어에서 실행하며 토큰 비용이 없고 완전한 데이터 프라이버시를 제공합니다.** 클라우드 API(GPT-5.6, Claude Opus 4.8, Gemini 3.1 Pro)는 최소한의 설정으로 더 높은 품질을 제공합니다.',
      dateModified: '2026-07-13',
      publishDate: '2026-04-04',
      audience: '소비자용 하드웨어에서 처음으로 로컬 LLM을 실행하는 초보자',
      readTime: '7분 읽기',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM',
      toc: [
        { label: '핵심 요약', anchor: '#key-takeaways' },
        { label: '로컬 LLM이란?', anchor: '#what-is-a-local-llm' },
        { label: '로컬 LLM은 어떻게 작동하나요?', anchor: '#how-does-a-local-llm-work' },
        { label: '어떤 하드웨어가 필요한가요?', anchor: '#what-hardware-do-you-need' },
        { label: '로컬 LLM과 클라우드 API의 차이점은?', anchor: '#local-llm-vs-cloud-api' },
        { label: '어떤 모델 형식이 사용되나요?', anchor: '#which-model-formats-are-used' },
        { label: '언제 로컬 LLM을 사용해야 하나요?', anchor: '#when-should-you-use-a-local-llm' },
        { label: '자주 묻는 질문', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '로컬 LLM은 자체 CPU 또는 GPU에서 실행됩니다 — 인터넷 불필요, API 비용 없음, 제3자 서버로 데이터 전송 없음.',
            '세 가지 구성 요소가 필요합니다: 모델 파일(GGUF 또는 safetensors 형식), 추론 엔진(Ollama, LM Studio, 또는 llama.cpp), 그리고 선택적으로 채팅 인터페이스.',
            '최소 하드웨어: 4비트 양자화 7B 파라미터 모델 실행에 8 GB RAM 필요. 16 GB RAM이면 대부분의 일상적인 모델을 편안하게 실행할 수 있습니다.',
            '로컬 모델은 소비자용 하드웨어에서 클라우드 API보다 느립니다 — 최신 노트북의 7B 모델은 초당 15~40 토큰을 생성하는 반면, API를 통한 GPT-5.6 Luna는 초당 약 100 토큰입니다.',
            '최적 사용 사례: 민감한 데이터 처리, 오프라인 작업, 반복 비용 없음, LLM 작동 원리 학습.',
          ],
        },
        whatIsLocalLlm: {
          title: '로컬 LLM이란?',
          content: [
            '**로컬 LLM(대형 언어 모델)은 노트북, 데스크톱, 온프레미스 서버 등 사용자가 직접 제어하는 하드웨어에서 실행되는 AI 모델입니다.** 모델 가중치는 디스크의 파일로 저장되며, 모든 처리는 사용자의 CPU 또는 GPU에서 이루어집니다. 프롬프트 텍스트나 응답 데이터는 외부 서버로 전송되지 않습니다.',
            '"로컬"이라는 용어는 이러한 모델을 OpenAI GPT-5.6, Anthropic Claude Sonnet 5, Google Gemini 3.1 Pro와 같이 원격 서버에서 프롬프트를 처리하고 인터넷을 통해 결과를 반환하는 클라우드 호스팅 서비스와 구분합니다.',
            '로컬 LLM의 규모는 스마트폰에서 실행 가능한 1B 파라미터 소형 모델부터 48 GB VRAM을 갖춘 워크스테이션이 필요한 70B 파라미터 모델까지 다양합니다. 가장 널리 사용되는 초보자용 모델인 Meta Llama 3.2 3B, Microsoft Phi-3 Mini, Google Gemma 2 2B는 8 GB RAM을 갖춘 모든 노트북에서 실행 가능합니다.',
          ],
        },
        howItWorks: {
          title: '로컬 LLM은 어떻게 작동하나요?',
          content: [
            '**로컬 LLM 실행에는 세 가지 계층이 함께 작동합니다: 모델 파일, 추론 엔진, 인터페이스.**',
            '**모델 파일**에는 신경망 가중치가 포함되어 있습니다 — 모델이 텍스트를 처리하고 생성하는 방식을 정의하는 학습된 수치 값들입니다. 로컬 사용의 경우, 이러한 가중치는 거의 항상 GGUF 형식(llama.cpp 프로젝트에서 개발한 압축 형식) 또는 safetensors 형식으로 저장됩니다. 4비트 정밀도로 양자화된 7B 파라미터 모델은 디스크에서 약 4.5 GB입니다.',
            '**추론 엔진**은 모델 파일을 읽고 토큰 생성에 필요한 행렬 계산을 수행합니다. 가장 널리 사용되는 엔진은 [Ollama](/local-llms/how-to-install-ollama)(OpenAI 호환 API를 갖춘 백그라운드 서비스로 실행), [LM Studio](/local-llms/how-to-install-lm-studio)(내장 채팅 UI가 있는 데스크톱 앱), 그리고 llama.cpp(대부분의 다른 도구들이 기반으로 하는 기본 C++ 라이브러리)입니다.',
            '**인터페이스**는 터미널, 웹 UI, 또는 API 엔드포인트 등 모델과 상호작용하는 곳입니다. Ollama와 같은 많은 도구들은 `http://localhost:11434`에 REST API를 노출하여 OpenAI 호환 애플리케이션을 로컬 모델에 연결할 수 있습니다.',
          ],
          youtubeUrl: 'https://www.youtube.com/watch?v=2p2xMKpz7wM',
        },
        hardware: {
          id: 'what-hardware-do-you-need',
          title: '로컬 LLM 실행에 필요한 하드웨어는?',
          content: '하드웨어 요구 사항은 실행하려는 모델과 필요한 응답 속도에 따라 완전히 달라집니다.',
          rows: [
            { 'Model Size': '1B~3B 파라미터', 'RAM Required': '4~6 GB', 'Speed (CPU)': '20~60 tok/sec', 'Example Models': 'Llama 3.2 1B, Phi-3 Mini 3.8B' },
            { 'Model Size': '7B~8B 파라미터', 'RAM Required': '6~8 GB', 'Speed (CPU)': '10~30 tok/sec', 'Example Models': 'Llama 3.3 8B, Mistral Small' },
            { 'Model Size': '13B~14B 파라미터', 'RAM Required': '10~12 GB', 'Speed (CPU)': '5~15 tok/sec', 'Example Models': 'Llama 3.2 13B, Qwen3 14B' },
            { 'Model Size': '32B~34B 파라미터', 'RAM Required': '20~24 GB', 'Speed (CPU)': '2~6 tok/sec', 'Example Models': 'Qwen3 32B, DeepSeek-R1 32B' },
            { 'Model Size': '70B+ 파라미터', 'RAM Required': '40~48 GB', 'Speed (CPU)': '1~3 tok/sec', 'Example Models': 'Llama 3.3 70B, Qwen3 72B' },
          ],
          columns: ['Model Size', 'RAM Required', 'Speed (CPU)', 'Example Models'],
        },
        hardwareGpu: {
          title: 'GPU를 사용하면 로컬 LLM이 더 빨라지나요?',
          content: 'GPU 가속은 속도를 크게 향상시킵니다. NVIDIA RTX 4070 Ti(12 GB VRAM)는 7B 모델을 초당 80~120 토큰으로 실행하며, 이는 CPU 전용 모드보다 4~8배 빠릅니다. Apple Silicon Mac(M1, M2, M3, M4)은 통합 메모리를 사용하며 별도의 GPU 없이도 7B 모델에서 초당 40~80 토큰을 달성합니다. 노트북 사용자의 경우 하드웨어별 팁은 [노트북에서 로컬 LLM 실행하기](/local-llms/local-llm-on-laptop)를 참조하세요.',
        },
        vsCloud: {
          id: 'local-llm-vs-cloud-api',
          title: '로컬 LLM과 클라우드 API의 차이점은?',
          content: '핵심 트레이드오프는 프라이버시와 비용 대 성능과 속도입니다. 전체 비교는 [로컬 LLM과 클라우드 API](/local-llms/local-llms-vs-cloud-apis)에서 확인하세요.',
          rows: [
            { 'Factor': '프라이버시', 'Local LLM': '완전함 — 데이터가 기기를 벗어나지 않음', 'Cloud API': '공급자 서버에서 데이터 처리' },
            { 'Factor': '비용', 'Local LLM': '하드웨어 비용 이후 토큰당 $0', 'Cloud API': '모델에 따라 1M 토큰당 $0.15~$15' },
            { 'Factor': '속도', 'Local LLM': '소비자 하드웨어에서 10~120 tok/sec', 'Cloud API': '부하에 따라 50~200 tok/sec' },
            { 'Factor': '모델 품질', 'Local LLM': '양호 — 70B 규모에서 경쟁력 있음', 'Cloud API': '최고 수준 (GPT-5.6, Claude Sonnet 5)' },
            { 'Factor': '설정 시간', 'Local LLM': 'Ollama 또는 LM Studio로 5~15분', 'Cloud API': 'API 키 발급에 2~5분' },
            { 'Factor': '오프라인 사용', 'Local LLM': '가능 — 인터넷 없이 작동', 'Cloud API': '불가 — 활성 연결 필요' },
          ],
          columns: ['Factor', 'Local LLM', 'Cloud API'],
        },
        modelFormats: {
          id: 'which-model-formats-are-used',
          title: '로컬 LLM에 사용되는 모델 형식은?',
          content: [
            '**GGUF**(GPT-Generated Unified Format)는 로컬 추론의 지배적인 형식입니다. llama.cpp 프로젝트에서 개발된 GGUF 파일은 모든 모델 메타데이터를 포함하고 단일 파일에서 여러 양자화 수준을 지원합니다. `ollama pull llama3.2`를 실행하면 Ollama가 내부적으로 GGUF 파일을 다운로드합니다.',
            '**Safetensors**는 Hugging Face에서 만든 형식으로 주로 transformers 및 vLLM과 같은 PyTorch 기반 추론 도구와 함께 사용됩니다. 연구 및 서버 배포에서 더 일반적입니다.',
            '**양자화**는 모델 정밀도를 줄여 메모리 요구 사항을 낮춥니다. 전체 FP16 정밀도의 7B 모델은 약 14 GB의 RAM이 필요합니다. Q4_K_M 양자화(4비트)에서는 동일한 모델이 최소한의 품질 손실로 약 4.5 GB만 필요합니다. 대부분의 초보자 가이드는 Q4_K_M 또는 Q5_K_M을 사용합니다.',
          ],
        },
        whenToUse: {
          id: 'when-should-you-use-a-local-llm',
          title: '클라우드 API 대신 로컬 LLM을 사용해야 하는 경우는?',
          items: [
            '**민감한 데이터 처리** — 인프라를 벗어날 수 없는 의료 기록, 법적 문서, 재무 데이터, 또는 개인 식별 정보(PII).',
            '**API 비용 절감** — 토큰당 클라우드 비용이 빠르게 누적되는 대용량 배치 처리. 로컬에서 실행되는 7B 모델은 쿼리당 $0의 비용이 듭니다.',
            '**오프라인 또는 에어갭 환경** — 현장 작업, 보안 시설, 또는 인터넷 연결 없이 작동해야 하는 애플리케이션.',
            '**학습 및 실험** — LLM의 내부 작동 방식 이해, 비용 걱정 없는 프롬프트 테스트, 또는 로컬 AI 기반 도구 구축.',
            '**낮은 지연 시간 애플리케이션** — 네트워크 왕복 시간이 허용되지 않고 더 작은 로컬 모델이 작업에 충분히 빠른 경우.',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: '로컬 LLM에 관한 자주 묻는 질문',
          faqs: [
            {
              q: '로컬 LLM이 GPT-5.6 수준의 품질을 낼 수 있나요?',
              a: '현재 소비자용 하드웨어에서는 불가능합니다. GPT-5.6와 Claude Sonnet 5은 복잡한 추론, 코드 생성, 명령 수행 벤치마크에서 로컬로 실행 가능한 어떤 모델보다 우수합니다. 그러나 요약, 번역, 일상적인 작성 작업의 경우 잘 양자화된 13B~34B 모델은 프런티어 모델과 구별하기 어려운 결과를 생성합니다.',
            },
            {
              q: '로컬 LLM을 실행하려면 GPU가 필요한가요?',
              a: '아닙니다. 모든 주요 추론 엔진(Ollama, LM Studio, llama.cpp)은 CPU만으로 실행됩니다. GPU는 속도를 크게 향상시킵니다 — NVIDIA RTX 4060(8 GB VRAM)은 7B 모델을 CPU에서의 10~20 tok/sec 대비 60~90 tok/sec로 실행합니다. Apple Silicon Mac은 기본적으로 GPU 가속 통합 메모리를 사용하여 별도의 GPU 없이도 로컬 LLM에 적합합니다.',
            },
            {
              q: '로컬 LLM 모델은 어디서 다운로드하나요?',
              a: '세 가지 주요 소스가 있습니다: 간편한 원클릭 다운로드를 위한 Ollama 모델 라이브러리(ollama.com/library), GGUF 및 safetensors 모델의 전체 범위를 갖춘 Hugging Face(huggingface.co), 그리고 Hugging Face를 직접 검색하는 LM Studio의 내장 모델 브라우저. 설정 가이드는 [Ollama 설치 방법](/local-llms/how-to-install-ollama)과 [LM Studio 설치 방법](/local-llms/how-to-install-lm-studio)을 참조하세요.',
            },
            {
              q: '로컬 LLM 실행은 프라이버시가 보장되나요?',
              a: '네 — 단, 주의사항이 있습니다. 모델 추론 자체는 완전히 로컬입니다. 그러나 로컬 LLM 위에 구축된 일부 애플리케이션은 외부 서버로 데이터를 전송할 수 있습니다. 사용하는 인터페이스나 플러그인 계층에 텔레메트리 또는 클라우드 동기화가 활성화되어 있는지 항상 확인하세요. 전체 감사 가이드는 [로컬 LLM 보안 및 프라이버시 체크리스트](/local-llms/local-llm-security-privacy-checklist)를 참조하세요.',
            },
          ],
        },
        nextSteps: {
          title: '로컬 LLM을 시작하는 방법은?',
          content: '첫 번째 로컬 LLM을 실행하는 가장 빠른 방법은 [Ollama 설치 방법](/local-llms/how-to-install-ollama)입니다 — 단 하나의 명령으로 엔진을 설치하고 macOS, Windows, Linux에서 5분 이내에 모델을 불러올 수 있습니다. 그래픽 인터페이스를 선호하신다면 [LM Studio 설치 방법](/local-llms/how-to-install-lm-studio)이 데스크톱 앱 설정을 안내합니다. 어떤 모델로 시작할지 결정하려면 [초보자용 최고의 로컬 LLM 모델](/local-llms/best-beginner-local-llm-models)을 참조하세요.',
        },
        sources: {
          id: 'sources',
          title: '참고 자료',
          items: [
            '**llama.cpp — GitHub** — 로컬에서 양자화된 모델을 실행하기 위한 기본 C++ 라이브러리',
            '**Hugging Face — Model Hub** — 100,000개 이상의 GGUF, safetensors 및 기타 모델 형식 저장소',
            '**Ollama Model Library** — 원클릭 다운로드로 제공되는 사전 양자화된 모델 선별 목록',
          ],
        },
        commonMistakes: {
          title: '시작 시 흔히 하는 실수',
          items: [
            '모든 로컬 모델이 동등하게 프라이버시를 보장한다고 가정하는 것 — 일부 인터페이스나 양자화는 여전히 데이터를 기록할 수 있습니다.',
            '사용 가능한 RAM보다 너무 큰 모델을 실행하여 디스크 스와핑으로 심각한 속도 저하를 초래하는 것.',
            '모델 품질이 크게 다를 수 있다는 점을 이해하지 못하는 것 — 모든 로컬 모델이 복잡한 작업에서 GPT-5.6와 동등하지 않습니다.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 읽을거리',
          items: [
            '[Ollama 설치 방법](/local-llms/how-to-install-ollama) — 단계별 설정 및 첫 번째 모델 실행 안내',
            '[LM Studio 설치 방법](/local-llms/how-to-install-lm-studio) — 그래픽 인터페이스가 있는 데스크톱 앱 대안',
            '[초보자용 최고의 로컬 LLM 모델](/local-llms/best-beginner-local-llm-models) — RAM에 맞는 모델 추천',
            '[로컬 LLM과 클라우드 API](/local-llms/local-llms-vs-cloud-apis) — 트레이드오프 전체 비교',
            '로컬 LLM이 무엇인지 이해하는 것이 첫 번째 단계입니다. 효과적으로 사용하는 방법을 이해하는 것이 두 번째 단계입니다: [프롬프트 엔지니어링 가이드](https://www.promptquorum.com/prompt-engineering)는 80가지 기법을 다룹니다.',
            '[O Que São LLMs Locais (Português)](/pt/local-llms/what-are-local-llms) — versão em português deste guia',
            '[로컬 LLM 트렌드 2026–2027: 기업 도입과 온디바이스 AI를 위한 5가지 핵심 예측](/ko/local-llms/future-of-local-llms) -- 로컬 LLM의 미래',
          ],
        },
      },
    },
  };
