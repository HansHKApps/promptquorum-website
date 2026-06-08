import type { Language } from '@/lib/blog/blogContent'

const FAQ_DATA: Record<Language, { q: string; a: string }[]> = {
  en: [
    { q: 'What is a local LLM?', a: 'A large language model (e.g., Llama 4, Qwen3.5, DeepSeek) that runs on your own hardware instead of a cloud API. You get full privacy, offline capability, no usage limits, and zero API costs after hardware purchase.' },
    { q: 'How much VRAM do I need for a local LLM?', a: '8 GB VRAM runs 7B models at Q4 quantization. 16 GB handles 13B models comfortably. 40 GB+ (e.g., dual RTX 4090s or A100) is required for 70B models. Apple Silicon unified memory counts as VRAM.' },
    { q: 'What is the difference between Ollama and LM Studio?', a: 'Ollama is a CLI tool that runs models via simple terminal commands and exposes an OpenAI-compatible API at `localhost:11434`. LM Studio provides a desktop GUI, model browser, and built-in chat interface. Both support the same models.' },
    { q: 'Can local LLMs match cloud models like GPT-5.5?', a: 'On coding and reasoning tasks, Qwen 3.6 27B, DeepSeek V3, and Qwen3 score within 5–10% of frontier cloud models on standard benchmarks (MMLU, HumanEval). Claude Opus 4.8 and GPT-5.5 maintain an edge on complex multi-step tasks.' },
    { q: 'How do I fine-tune a local model?', a: 'Fine-tuning requires 500+ labeled training examples, the QLoRA framework (reduces VRAM requirement via 4-bit quantization), 24 GB+ VRAM (or a cloud GPU rental), and 1–4 hours of training time for a 7B model.' },
    { q: 'What is the minimum hardware to run a local LLM in 2026?', a: 'Minimum: 8 GB RAM and any modern CPU (runs 3B–7B models at 2–5 tokens/sec). Recommended: a GPU with 8 GB+ VRAM (RTX 3060 or newer) for 20–40 tokens/sec on 7B models.' },
    { q: 'Are local LLMs free to use?', a: 'Yes. Ollama and LM Studio are free and open-source. The models themselves (Llama, Mistral, Qwen, DeepSeek) are available under open-source licenses at no cost. The only cost is your hardware.' },
    { q: 'What is the best local LLM for coding in 2026?', a: 'Qwen2.5-Coder 7B is the top performer for code completion and review on consumer hardware (8 GB VRAM). DeepSeek-Coder V2 Lite is the strongest alternative. For CPU-only setups, Phi-3.5 Mini offers the best coding quality under 4 GB RAM.' },
    { q: 'Can I run a local LLM without a GPU?', a: 'Yes. Any modern CPU can run 3B–7B models at Q4 quantization using Ollama (CPU mode) or LM Studio. Typical CPU inference speed: 2–8 tokens/sec on a modern laptop CPU, compared to 20–50 tokens/sec on an RTX 4060. 7B Q4 requires ~5 GB RAM (not VRAM). For CPU-only setups, Phi-3.5 Mini (3.8B) and Llama 3.2 3B offer the best quality-to-speed ratio.' },
    { q: 'How do I update local LLM models when new versions are released?', a: 'Ollama: run `ollama pull <model-name>` again — it downloads only changed layers. LM Studio: open the model browser, find the updated version, and download it. Old GGUF files are not automatically removed — delete them manually from ~/.ollama/models (Ollama) or ~/Library/Application Support/LM Studio/models (macOS) to free disk space. Model updates from Meta, Alibaba, and Mistral typically arrive within 24–48 hours of official release.' },
    { q: 'Is a local LLM better than ChatGPT?', a: 'For privacy and cost, yes. For raw output quality, no. As of 2026, frontier cloud models (GPT-5.5, Claude Opus 4.8, Sonnet 4.6) outperform all locally-runnable models on complex reasoning. However, local models like Qwen 3.6 27B match or exceed older cloud models on most everyday tasks — at zero per-query cost.' },
    { q: 'How much RAM do I need to run a local LLM?', a: 'Minimum: 8 GB RAM to run a 7B model at Q4 quantization. Recommended: 16 GB for 13B models, 40+ GB for 70B models. Apple Silicon unified memory counts fully toward this — an M3 Mac with 18 GB can run a 13B model well.' },
    { q: 'How do I run a local LLM?', a: 'Install Ollama (ollama.com), then run: ollama run llama3.1:8b. The model downloads automatically. No API key, no account, no internet after the initial download.' },
    { q: 'What is the best free local LLM in 2026?', a: 'Meta Llama 3.1 8B for general use (Apache-compatible, 5.5 GB RAM). Qwen2.5-Coder 32B for coding (92.7% HumanEval, 20 GB RAM). DeepSeek-R1 7B for reasoning (MIT licence, 5 GB RAM).' },
    { q: 'Are local LLMs private?', a: 'Yes. When running with Ollama or LM Studio, prompts and responses never leave your machine. No data is transmitted. Recommended for GDPR-regulated workflows, legal and medical document processing, and any task involving confidential information.' },
    { q: 'What is the best local LLM for coding in 2026?', a: 'Qwen2.5-Coder 32B scores 92.7% on HumanEval and is the top choice for coding on hardware with 20 GB RAM. For 8 GB VRAM, Qwen2.5-Coder 7B is the best option. DeepSeek-Coder V2 Lite is a strong alternative.' },
    { q: 'What are the best Ollama models in June 2026?', a: 'Top Ollama models June 2026: Qwen 3.6 27B (best overall on consumer hardware, 24 GB at Q4), gpt-oss:20b (best small model, runs in 16 GB, ollama pull gpt-oss:20b), qwen3:30b (balanced all-round), DeepSeek-R1 (best math/logic), Gemma 4 E12B (strong multimodal reasoning). Llama 4 Scout is the long-context (10M-token) / multimodal pick but needs ~55 GB VRAM at Q4.' },
    { q: 'What is the best local LLM for RTX 3060 12 GB VRAM?', a: 'RTX 3060 12 GB VRAM is a solid GPU for local LLMs. Best choices: Qwen3 8B (~5 GB VRAM), Gemma 4 E12B (~8 GB VRAM), gpt-oss:20b (needs 16 GB, so use a larger card for it). All 7B–12B models run at 20–40 tokens/sec on an RTX 3060. Note: Llama 4 Scout does not fit a 12 GB card normally (~55 GB at Q4).' },
    { q: 'Ollama vs LM Studio vs Jan.ai: which should I use?', a: 'Use Ollama if you need a CLI and OpenAI-compatible API at localhost:11434 for scripting or dev work. Use LM Studio if you want a desktop GUI and model browser. Use Jan.ai for privacy-first chat with a GUI. Setup time: Ollama 2 min, LM Studio 5 min, Jan.ai 5 min.' },
    { q: 'What are the best budget GPUs for local LLMs in 2026?', a: 'Best budget GPUs for local LLMs: RTX 3060 12 GB (~$200 used) runs 13B models at 20–30 tok/s. RTX 4060 8 GB (~$280 new) runs 7B at 35–45 tok/s. RTX 2070 8 GB (~$120 used) runs 7B at 15–20 tok/s. AMD RX 6700 XT 12 GB (~$180) matches RTX 3060 under ROCm/Linux. Minimum recommended: 8 GB VRAM.' },
  ],
  es: [
    { q: '¿Qué es un LLM local?', a: 'Un modelo de lenguaje grande (por ejemplo, Llama 4, Qwen3.5, DeepSeek) que se ejecuta en tu propio hardware en lugar de una API en la nube. Obtienes privacidad total, capacidad sin conexión, sin límites de uso y costes de API cero después de comprar el hardware.' },
    { q: '¿Cuánta VRAM necesito para un LLM local?', a: '8 GB VRAM ejecuta modelos 7B en cuantización Q4. 16 GB maneja cómodamente modelos 13B. Se requieren 40 GB+ (por ejemplo, dos RTX 4090 o A100) para modelos 70B. La memoria unificada de Apple Silicon cuenta como VRAM.' },
    { q: '¿Cuál es la diferencia entre Ollama y LM Studio?', a: 'Ollama es una herramienta CLI que ejecuta modelos mediante comandos de terminal simples y expone una API compatible con OpenAI en `localhost:11434`. LM Studio proporciona interfaz gráfica de escritorio, navegador de modelos e interfaz de chat integrada. Ambas soportan los mismos modelos.' },
    { q: '¿Pueden los LLMs locales competir con modelos en la nube como GPT-5.5?', a: 'En tareas de codificación y razonamiento, Qwen 3.6 27B, DeepSeek V3 y Qwen3 puntúan entre el 5–10% de los modelos en la nube fronterizos en benchmarks estándar (MMLU, HumanEval). Claude Opus 4.8 y GPT-5.5 mantienen ventaja en tareas complejas de múltiples pasos.' },
    { q: '¿Cómo ajusto un modelo local?', a: 'El fine-tuning requiere 500+ ejemplos de entrenamiento etiquetados, el framework QLoRA (reduce requisitos de VRAM mediante cuantización de 4 bits), 24 GB+ VRAM (o alquiler de GPU en la nube) y 1–4 horas de tiempo de entrenamiento para un modelo 7B.' },
    { q: '¿Cuál es el hardware mínimo para ejecutar un LLM local en 2026?', a: 'Mínimo: 8 GB RAM y cualquier CPU moderna (ejecuta modelos 3B–7B a 2–5 tokens/seg). Recomendado: una GPU con 8 GB+ VRAM (RTX 3060 o más nueva) para 20–40 tokens/seg en modelos 7B.' },
    { q: '¿Son los LLMs locales gratuitos?', a: 'Sí. Ollama y LM Studio son gratuitos y de código abierto. Los modelos (Llama, Mistral, Qwen, DeepSeek) están disponibles bajo licencias de código abierto sin coste. El único gasto es tu hardware.' },
    { q: '¿Cuál es el mejor LLM local para codificación en 2026?', a: 'Qwen2.5-Coder 7B es el mejor para finalización de código y revisión en hardware de consumidor (8 GB VRAM). DeepSeek-Coder V2 Lite es la mejor alternativa. Para configuraciones solo CPU, Phi-3.5 Mini ofrece la mejor calidad de codificación por debajo de 4 GB RAM.' },
    { q: '¿Puedo ejecutar un LLM local sin GPU?', a: 'Sí. Cualquier CPU moderna puede ejecutar modelos 3B–7B en cuantización Q4 usando Ollama (modo CPU) o LM Studio. Velocidad típica de inferencia CPU: 2–8 tokens/seg en CPU de portátil moderno, comparado con 20–50 tokens/seg en RTX 4060. 7B Q4 requiere ~5 GB RAM (no VRAM). Para configuraciones solo CPU, Phi-3.5 Mini (3.8B) y Llama 3.2 3B ofrecen la mejor relación calidad-velocidad.' },
    { q: '¿Cómo actualizo modelos LLM locales cuando se lanzan nuevas versiones?', a: 'Ollama: ejecuta `ollama pull <nombre-modelo>` nuevamente — descarga solo capas cambiadas. LM Studio: abre el navegador de modelos, encuentra la versión actualizada y descárgala. Los archivos GGUF antiguos no se eliminan automáticamente — elimínalos manualmente de ~/.ollama/models (Ollama) o ~/Library/Application Support/LM Studio/models (macOS) para liberar espacio. Las actualizaciones de Meta, Alibaba y Mistral típicamente llegan dentro de 24–48 horas del lanzamiento oficial.' },
    { q: '¿Es un LLM local mejor que ChatGPT?', a: 'Para privacidad y coste, sí. Para calidad de salida pura, no. A partir de 2026, los modelos en la nube fronterizos (GPT-5.5, Claude Opus 4.8, Sonnet 4.6) superan todos los modelos ejecutables localmente en razonamiento complejo. Sin embargo, modelos locales como Qwen 3.6 27B igualan o superan a modelos en la nube más antiguos en la mayoría de tareas cotidianas — a coste cero por consulta.' },
    { q: '¿Cuánta RAM necesito para ejecutar un LLM local?', a: 'Mínimo: 8 GB RAM para ejecutar un modelo 7B en cuantización Q4. Recomendado: 16 GB para modelos 13B, 40+ GB para modelos 70B. La memoria unificada de Apple Silicon cuenta completamente — una Mac M3 con 18 GB puede ejecutar bien un modelo 13B.' },
    { q: '¿Cómo ejecuto un LLM local?', a: 'Instala Ollama (ollama.com) y ejecuta: ollama run llama3.1:8b. El modelo se descarga automáticamente. Sin clave API, sin cuenta, sin internet después de la descarga inicial.' },
    { q: '¿Cuál es el mejor LLM local gratuito en 2026?', a: 'Meta Llama 3.1 8B para uso general (compatible con Apache, 5.5 GB RAM). Qwen2.5-Coder 32B para codificación (92.7% HumanEval, 20 GB RAM). DeepSeek-R1 7B para razonamiento (licencia MIT, 5 GB RAM).' },
    { q: '¿Son privados los LLMs locales?', a: 'Sí. Al ejecutar con Ollama o LM Studio, los prompts y respuestas nunca salen de tu máquina. No se transmiten datos. Recomendado para flujos de trabajo regulados por GDPR, procesamiento de documentos legales y médicos, y cualquier tarea que implique información confidencial.' },
    { q: '¿Cuál es el mejor LLM local para codificación en 2026?', a: 'Qwen2.5-Coder 32B puntúa 92.7% en HumanEval y es la mejor opción para codificación en hardware con 20 GB RAM. Para 8 GB VRAM, Qwen2.5-Coder 7B es la mejor opción. DeepSeek-Coder V2 Lite es una fuerte alternativa.' },
    { q: '¿Cuáles son los mejores modelos Ollama en junio de 2026?', a: 'Mejores modelos Ollama junio 2026: Qwen 3.6 27B (mejor opción global en hardware de consumidor, 24 GB en Q4), gpt-oss:20b (mejor modelo pequeño, se ejecuta en 16 GB, ollama pull gpt-oss:20b), qwen3:30b (equilibrado para todo uso), DeepSeek-R1 (mejor matemáticas/lógica), Gemma 4 E12B (razonamiento multimodal fuerte). Llama 4 Scout es la opción de contexto largo (10M tokens) / multimodal, pero necesita ~55 GB VRAM en Q4.' },
    { q: '¿Cuál es el mejor LLM local para RTX 3060 con 12 GB VRAM?', a: 'RTX 3060 con 12 GB VRAM es una GPU sólida para LLMs locales. Mejores opciones: Qwen3 8B (~5 GB VRAM), Gemma 4 E12B (~8 GB VRAM), gpt-oss:20b (necesita 16 GB, así que usa una tarjeta más grande para él). Todos los modelos 7B–12B se ejecutan a 20–40 tokens/seg en una RTX 3060. Nota: Llama 4 Scout no cabe normalmente en una tarjeta de 12 GB (~55 GB en Q4).' },
    { q: 'Ollama vs LM Studio vs Jan.ai: ¿cuál debo usar?', a: 'Usa Ollama si necesitas CLI y API compatible con OpenAI en localhost:11434 para scripting o trabajo de desarrollo. Usa LM Studio si quieres GUI de escritorio y navegador de modelos. Usa Jan.ai para chat enfocado en privacidad con GUI. Tiempo de configuración: Ollama 2 min, LM Studio 5 min, Jan.ai 5 min.' },
    { q: '¿Cuáles son las mejores GPUs presupuestarias para LLMs locales en 2026?', a: 'Mejores GPUs presupuestarias para LLMs locales: RTX 3060 12 GB (~200 $ usado) ejecuta modelos 13B a 20–30 tok/s. RTX 4060 8 GB (~280 $ nuevo) ejecuta 7B a 35–45 tok/s. RTX 2070 8 GB (~120 $ usado) ejecuta 7B a 15–20 tok/s. AMD RX 6700 XT 12 GB (~180 $) iguala RTX 3060 bajo ROCm/Linux. Mínimo recomendado: 8 GB VRAM.' },
  ],
  de: [],
  fr: [],
  ja: [],
  zh: [],
  pt: [],
  ar: [],
}

const NAV_LABELS: Record<Language, Record<string, string>> = {
  en: {
    'getting-started': 'Getting Started',
    'best-models': 'Models by Use Case',
    'tools-interfaces': 'Tools & Interfaces',
    'hardware-performance': 'Hardware & Performance',
    'advanced-techniques': 'Advanced Techniques & Applications',
    'enterprise': 'Enterprise',
    'gpu-buying-guides': 'GPU Buying Guides',
    'hardware-setups': 'Hardware Setups',
    'privacy-business': 'Privacy & Business',
    'cost-comparisons': 'Cost & Comparisons',
  },
  es: {
    'getting-started': 'Primeros pasos',
    'best-models': 'Modelos por caso de uso',
    'tools-interfaces': 'Herramientas e interfaces',
    'hardware-performance': 'Hardware y rendimiento',
    'advanced-techniques': 'Técnicas avanzadas y aplicaciones',
    'enterprise': 'Empresas',
    'gpu-buying-guides': 'Guías de compra de GPU',
    'hardware-setups': 'Configuraciones de hardware',
    'privacy-business': 'Privacidad y empresa',
    'cost-comparisons': 'Costes y comparativas',
  },
  de: {},
  fr: {},
  ja: {},
  zh: {},
  pt: {},
  ar: {},
}

const SCHEMA_DESCRIPTIONS: Record<Language, {
  collectionPageName: string
  collectionPageDescription: string
  webPageDescription: string
  navigationName: string
  itemListName: string
  howToName: string
  breadcrumbHome: string
  breadcrumbHub: string
}> = {
  en: {
    collectionPageName: 'Best Local LLMs June 2026: Ollama, LM Studio, Hardware & VRAM Guide',
    collectionPageDescription: 'Best local LLMs June 2026 – latest Ollama models (Qwen 3.6 27B, gpt-oss, Gemma 4), LM Studio vs Jan.ai comparison, VRAM/GPU requirements for RTX 3060 & more. Pull commands, beginner guides & hardware recommendations.',
    webPageDescription: 'As of June 2026: 88 guides on local LLMs covering Ollama, LM Studio, hardware requirements, model benchmarks, fine-tuning, local RAG, and enterprise deployment.',
    navigationName: 'Local LLMs Hub Navigation',
    itemListName: 'Best Local LLM Models June 2026',
    howToName: 'How to Install and Run a Local LLM',
    breadcrumbHome: 'Home',
    breadcrumbHub: 'Local LLMs',
  },
  es: {
    collectionPageName: 'Mejores LLMs Locales Junio 2026: Ollama, LM Studio, Hardware y Guía de VRAM',
    collectionPageDescription: 'Mejores LLMs locales junio 2026 — modelos Ollama recientes (Qwen 3.6 27B, gpt-oss, Gemma 4), comparativa LM Studio vs Jan.ai, requisitos VRAM/GPU (RTX 3060 incluida), comandos pull y recomendaciones de hardware para principiantes.',
    webPageDescription: 'A junio de 2026: 88 guías sobre LLMs locales cubriendo Ollama, LM Studio, requisitos de hardware, benchmarks de modelos, fine-tuning, RAG local y despliegue empresarial.',
    navigationName: 'Navegación del Hub de LLMs Locales',
    itemListName: 'Mejores Modelos LLM Locales Junio 2026',
    howToName: 'Cómo instalar y ejecutar un LLM local',
    breadcrumbHome: 'Inicio',
    breadcrumbHub: 'LLMs locales',
  },
  de: {
    collectionPageName: '',
    collectionPageDescription: '',
    webPageDescription: '',
    navigationName: '',
    itemListName: '',
    howToName: '',
    breadcrumbHome: '',
    breadcrumbHub: '',
  },
  fr: {
    collectionPageName: '',
    collectionPageDescription: '',
    webPageDescription: '',
    navigationName: '',
    itemListName: '',
    howToName: '',
    breadcrumbHome: '',
    breadcrumbHub: '',
  },
  ja: {
    collectionPageName: '',
    collectionPageDescription: '',
    webPageDescription: '',
    navigationName: '',
    itemListName: '',
    howToName: '',
    breadcrumbHome: '',
    breadcrumbHub: '',
  },
  zh: {
    collectionPageName: '',
    collectionPageDescription: '',
    webPageDescription: '',
    navigationName: '',
    itemListName: '',
    howToName: '',
    breadcrumbHome: '',
    breadcrumbHub: '',
  },
  pt: {
    collectionPageName: '',
    collectionPageDescription: '',
    webPageDescription: '',
    navigationName: '',
    itemListName: '',
    howToName: '',
    breadcrumbHome: '',
    breadcrumbHub: '',
  },
  ar: {
    collectionPageName: '',
    collectionPageDescription: '',
    webPageDescription: '',
    navigationName: '',
    itemListName: '',
    howToName: '',
    breadcrumbHome: '',
    breadcrumbHub: '',
  },
}

export function generateLocalLlmsJsonLd(lang: Language, canonicalUrl: string, langPrefix: string) {
  const descriptions = SCHEMA_DESCRIPTIONS[lang] || SCHEMA_DESCRIPTIONS.en
  const faqs = FAQ_DATA[lang] || FAQ_DATA.en
  const navLabels = NAV_LABELS[lang] || NAV_LABELS.en

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: descriptions.collectionPageName,
      description: descriptions.collectionPageDescription,
      url: canonicalUrl,
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      hasPart: [
        { '@type': 'WebPage', name: lang === 'es' ? 'Cómo instalar Ollama' : 'How to Install Ollama', url: `https://www.promptquorum.com${langPrefix}/local-llms/how-to-install-ollama` },
        { '@type': 'WebPage', name: lang === 'es' ? 'Mejores LLMs locales 2026' : 'Best Local LLMs 2026', url: `https://www.promptquorum.com${langPrefix}/local-llms/best-local-llms-2026` },
        { '@type': 'WebPage', name: lang === 'es' ? 'Guía de hardware para LLM local 2026' : 'Local LLM Hardware Guide 2026', url: `https://www.promptquorum.com${langPrefix}/local-llms/local-llm-hardware-guide-2026` },
        { '@type': 'WebPage', name: lang === 'es' ? 'Cuantización LLM explicada' : 'LLM Quantization Explained', url: `https://www.promptquorum.com${langPrefix}/local-llms/llm-quantization-explained` },
        { '@type': 'WebPage', name: lang === 'es' ? 'Ollama vs LM Studio' : 'Ollama vs LM Studio', url: `https://www.promptquorum.com${langPrefix}/local-llms/ollama-vs-lm-studio` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: descriptions.collectionPageName,
      url: canonicalUrl,
      'inLanguage': lang,
      datePublished: '2026-04-01',
      dateModified: '2026-06-01',
      description: descriptions.webPageDescription,
      isPartOf: { '@type': 'WebSite', url: 'https://www.promptquorum.com' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.key-takeaways', '.article-intro']
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'inLanguage': lang,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: descriptions.breadcrumbHome, item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: descriptions.breadcrumbHub, item: canonicalUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': lang,
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      'name': descriptions.navigationName,
      'inLanguage': lang,
      'hasPart': Object.entries(navLabels).map(([key, label]) => ({
        '@type': 'SiteNavigationElement',
        name: label,
        url: `https://www.promptquorum.com/local-llms${langPrefix}#${key}`
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'inLanguage': lang,
      name: descriptions.itemListName,
      numberOfItems: 7,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Qwen 3.6 27B', description: lang === 'es' ? 'Alibaba. Mejor opción global en hardware de consumidor. Cabe en 24 GB en Q4. 77,2% SWE-bench. Apache 2.0.' : 'Alibaba. Best overall on consumer hardware. Fits 24 GB at Q4. 77.2% SWE-bench. Apache 2.0.' },
        { '@type': 'ListItem', position: 2, name: 'Qwen3 8B', description: lang === 'es' ? 'Alibaba. Top en codificación y multilingüe. ollama pull qwen3:8b. 5 GB VRAM.' : 'Alibaba. Top coding and multilingual. ollama pull qwen3:8b. 5 GB VRAM.' },
        { '@type': 'ListItem', position: 3, name: 'gpt-oss:20b', description: lang === 'es' ? 'OpenAI. Mejor modelo pequeño, se ejecuta en 16 GB. MoE 21B total / 3,6B activos. Razonamiento ajustable. ollama pull gpt-oss:20b.' : 'OpenAI. Best small model, runs in 16 GB. 21B total / 3.6B active MoE. Adjustable reasoning. ollama pull gpt-oss:20b.' },
        { '@type': 'ListItem', position: 4, name: 'DeepSeek-R1', description: lang === 'es' ? 'DeepSeek. Mejor para matemáticas y lógica. Licencia MIT.' : 'DeepSeek. Best for math and logic. MIT licence.' },
        { '@type': 'ListItem', position: 5, name: 'qwen3-coder:30b', description: lang === 'es' ? 'Alibaba. Mejor para finalización de código y revisión. ollama pull qwen3-coder:30b.' : 'Alibaba. Best for code completion and review. ollama pull qwen3-coder:30b.' },
        { '@type': 'ListItem', position: 6, name: 'Gemma 4 E12B', description: lang === 'es' ? 'Google. Fuerte multimodal y razonamiento. MoE de 26B. ~8 GB VRAM.' : 'Google. Strong multimodal and reasoning. 26B MoE. ~8 GB VRAM.' },
        { '@type': 'ListItem', position: 7, name: 'Llama 4 Scout', description: lang === 'es' ? 'Meta. Opción de contexto largo (10M tokens) y multimodal. 17B activos / 109B totales, 16 expertos. ~55 GB VRAM en Q4. ollama pull llama4:scout.' : 'Meta. Long-context (10M-token) and multimodal pick. 17B active / 109B total, 16 experts. ~55 GB VRAM at Q4. ollama pull llama4:scout.' }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'inLanguage': lang,
      'totalTime': 'PT15M',
      name: descriptions.howToName,
      step: [
        { '@type': 'HowToStep', name: lang === 'es' ? 'Verificar requisitos de hardware' : 'Check hardware requirements', text: lang === 'es' ? 'Verifica que tengas VRAM suficiente: 8GB para modelos 7B, 16GB para 13B, 48GB+ para modelos 70B.' : 'Verify you have sufficient VRAM: 8GB for 7B models, 16GB for 13B, 48GB+ for 70B models.' },
        { '@type': 'HowToStep', name: lang === 'es' ? 'Instalar Ollama o LM Studio' : 'Install Ollama or LM Studio', text: lang === 'es' ? 'Descarga Ollama de ollama.ai (CLI) o LM Studio (GUI) según tu preferencia.' : 'Download Ollama from ollama.ai (CLI) or LM Studio (GUI) depending on your preference.' },
        { '@type': 'HowToStep', name: lang === 'es' ? 'Elegir y descargar un modelo' : 'Choose and download a model', text: lang === 'es' ? 'Selecciona Qwen 3.6 27B, Qwen3 o DeepSeek según tu tarea y tu VRAM. Ollama: ollama pull qwen3:8b. LM Studio: usa el navegador de modelos.' : 'Select Qwen 3.6 27B, Qwen3, or DeepSeek based on your task and VRAM. Ollama: ollama pull qwen3:8b. LM Studio: use the model browser.' },
        { '@type': 'HowToStep', name: lang === 'es' ? 'Ejecutar el modelo localmente' : 'Run the model locally', text: lang === 'es' ? 'Ollama: ollama run qwen3:8b. LM Studio: lanza el modelo en la GUI y conéctate vía API (http://localhost:11434).' : 'Ollama: ollama run qwen3:8b. LM Studio: launch the model in the GUI and connect via API (http://localhost:11434).' },
        { '@type': 'HowToStep', name: lang === 'es' ? 'Integrar en tu aplicación' : 'Integrate into your app', text: lang === 'es' ? 'Usa endpoints de API compatibles con OpenAI para integrar modelos locales en aplicaciones sin cambios de código.' : 'Use OpenAI-compatible API endpoints to integrate local models into applications without code changes.' }
      ]
    }
  ]
}
