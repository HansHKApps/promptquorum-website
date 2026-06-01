import type { Language } from '@/lib/blog/blogContent'

const FAQ_DATA: Record<Language, { q: string; a: string }[]> = {
  en: [
    { q: 'What is a local LLM?', a: 'A large language model (e.g., Llama 4, Qwen3.5, DeepSeek) that runs on your own hardware instead of a cloud API. You get full privacy, offline capability, no usage limits, and zero API costs after hardware purchase.' },
    { q: 'How much VRAM do I need for a local LLM?', a: '8 GB VRAM runs 7B models at Q4 quantization. 16 GB handles 13B models comfortably. 40 GB+ (e.g., dual RTX 4090s or A100) is required for 70B models. Apple Silicon unified memory counts as VRAM.' },
    { q: 'What is the difference between Ollama and LM Studio?', a: 'Ollama is a CLI tool that runs models via simple terminal commands and exposes an OpenAI-compatible API at `localhost:11434`. LM Studio provides a desktop GUI, model browser, and built-in chat interface. Both support the same models.' },
    { q: 'Can local LLMs match cloud models like GPT-4o?', a: 'On coding and reasoning tasks, Llama 4 Scout, DeepSeek V3, and Qwen3 score within 5–10% of GPT-4o mini on standard benchmarks (MMLU, HumanEval). Claude Opus 4.8 and GPT-4o maintain an edge on complex multi-step tasks.' },
    { q: 'How do I fine-tune a local model?', a: 'Fine-tuning requires 500+ labeled training examples, the QLoRA framework (reduces VRAM requirement via 4-bit quantization), 24 GB+ VRAM (or a cloud GPU rental), and 1–4 hours of training time for a 7B model.' },
    { q: 'What is the minimum hardware to run a local LLM in 2026?', a: 'Minimum: 8 GB RAM and any modern CPU (runs 3B–7B models at 2–5 tokens/sec). Recommended: a GPU with 8 GB+ VRAM (RTX 3060 or newer) for 20–40 tokens/sec on 7B models.' },
    { q: 'Are local LLMs free to use?', a: 'Yes. Ollama and LM Studio are free and open-source. The models themselves (Llama, Mistral, Qwen, DeepSeek) are available under open-source licenses at no cost. The only cost is your hardware.' },
    { q: 'What is the best local LLM for coding in 2026?', a: 'Qwen2.5-Coder 7B is the top performer for code completion and review on consumer hardware (8 GB VRAM). DeepSeek-Coder V2 Lite is the strongest alternative. For CPU-only setups, Phi-3.5 Mini offers the best coding quality under 4 GB RAM.' },
    { q: 'Can I run a local LLM without a GPU?', a: 'Yes. Any modern CPU can run 3B–7B models at Q4 quantization using Ollama (CPU mode) or LM Studio. Typical CPU inference speed: 2–8 tokens/sec on a modern laptop CPU, compared to 20–50 tokens/sec on an RTX 4060. 7B Q4 requires ~5 GB RAM (not VRAM). For CPU-only setups, Phi-3.5 Mini (3.8B) and Llama 3.2 3B offer the best quality-to-speed ratio.' },
    { q: 'How do I update local LLM models when new versions are released?', a: 'Ollama: run `ollama pull <model-name>` again — it downloads only changed layers. LM Studio: open the model browser, find the updated version, and download it. Old GGUF files are not automatically removed — delete them manually from ~/.ollama/models (Ollama) or ~/Library/Application Support/LM Studio/models (macOS) to free disk space. Model updates from Meta, Alibaba, and Mistral typically arrive within 24–48 hours of official release.' },
    { q: 'Is a local LLM better than ChatGPT?', a: 'For privacy and cost, yes. For raw output quality, no. As of 2026, frontier cloud models (GPT-4o, Claude 4.6 Sonnet) outperform all locally-runnable models on complex reasoning. However, local 70B models (Llama 3.3 70B, Qwen2.5 72B) match or exceed GPT-4o Mini on most everyday tasks — at zero per-query cost.' },
    { q: 'How much RAM do I need to run a local LLM?', a: 'Minimum: 8 GB RAM to run a 7B model at Q4 quantization. Recommended: 16 GB for 13B models, 40+ GB for 70B models. Apple Silicon unified memory counts fully toward this — an M3 Mac with 18 GB can run a 13B model well.' },
    { q: 'How do I run a local LLM?', a: 'Install Ollama (ollama.com), then run: ollama run llama3.1:8b. The model downloads automatically. No API key, no account, no internet after the initial download.' },
    { q: 'What is the best free local LLM in 2026?', a: 'Meta Llama 3.1 8B for general use (Apache-compatible, 5.5 GB RAM). Qwen2.5-Coder 32B for coding (92.7% HumanEval, 20 GB RAM). DeepSeek-R1 7B for reasoning (MIT licence, 5 GB RAM).' },
    { q: 'Are local LLMs private?', a: 'Yes. When running with Ollama or LM Studio, prompts and responses never leave your machine. No data is transmitted. Recommended for GDPR-regulated workflows, legal and medical document processing, and any task involving confidential information.' },
    { q: 'What is the best local LLM for coding in 2026?', a: 'Qwen2.5-Coder 32B scores 92.7% on HumanEval and is the top choice for coding on hardware with 20 GB RAM. For 8 GB VRAM, Qwen2.5-Coder 7B is the best option. DeepSeek-Coder V2 Lite is a strong alternative.' },
    { q: 'What are the best Ollama models in April 2026?', a: 'Top Ollama models April 2026: Llama 4 Scout 17B (best overall quality on 12 GB VRAM, ollama pull llama4:scout), Qwen3 8B (top coding, 5 GB VRAM), Gemma 3 12B (strong reasoning on RTX 3060, 8 GB VRAM), DeepSeek-R2 8B (best math/logic, 5 GB VRAM).' },
    { q: 'What is the best local LLM for RTX 3060 12 GB VRAM?', a: 'RTX 3060 12 GB VRAM is an excellent GPU for local LLMs. Best choices: Llama 4 Scout 17B at Q4 (~10 GB VRAM), Gemma 3 12B (~8 GB VRAM), Qwen3 14B (~9 GB VRAM). All run at 20–40 tokens/sec on an RTX 3060.' },
    { q: 'Ollama vs LM Studio vs Jan.ai: which should I use?', a: 'Use Ollama if you need a CLI and OpenAI-compatible API at localhost:11434 for scripting or dev work. Use LM Studio if you want a desktop GUI and model browser. Use Jan.ai for privacy-first chat with a GUI. Setup time: Ollama 2 min, LM Studio 5 min, Jan.ai 5 min.' },
    { q: 'What are the best budget GPUs for local LLMs in 2026?', a: 'Best budget GPUs for local LLMs: RTX 3060 12 GB (~$200 used) runs 13B models at 20–30 tok/s. RTX 4060 8 GB (~$280 new) runs 7B at 35–45 tok/s. RTX 2070 8 GB (~$120 used) runs 7B at 15–20 tok/s. AMD RX 6700 XT 12 GB (~$180) matches RTX 3060 under ROCm/Linux. Minimum recommended: 8 GB VRAM.' },
  ],
  es: [
    { q: '¿Qué es un LLM local?', a: 'Un modelo de lenguaje grande (por ejemplo, Llama 4, Qwen3.5, DeepSeek) que se ejecuta en tu propio hardware en lugar de una API en la nube. Obtienes privacidad total, capacidad sin conexión, sin límites de uso y costes de API cero después de comprar el hardware.' },
    { q: '¿Cuánta VRAM necesito para un LLM local?', a: '8 GB VRAM ejecuta modelos 7B en cuantización Q4. 16 GB maneja cómodamente modelos 13B. Se requieren 40 GB+ (por ejemplo, dos RTX 4090 o A100) para modelos 70B. La memoria unificada de Apple Silicon cuenta como VRAM.' },
    { q: '¿Cuál es la diferencia entre Ollama y LM Studio?', a: 'Ollama es una herramienta CLI que ejecuta modelos mediante comandos de terminal simples y expone una API compatible con OpenAI en `localhost:11434`. LM Studio proporciona interfaz gráfica de escritorio, navegador de modelos e interfaz de chat integrada. Ambas soportan los mismos modelos.' },
    { q: '¿Pueden los LLMs locales competir con modelos en la nube como GPT-4o?', a: 'En tareas de codificación y razonamiento, Llama 4 Scout, DeepSeek V3 y Qwen3 puntúan entre el 5–10% de GPT-4o mini en benchmarks estándar (MMLU, HumanEval). Claude Opus 4.8 y GPT-4o mantienen ventaja en tareas complejas de múltiples pasos.' },
    { q: '¿Cómo ajusto un modelo local?', a: 'El fine-tuning requiere 500+ ejemplos de entrenamiento etiquetados, el framework QLoRA (reduce requisitos de VRAM mediante cuantización de 4 bits), 24 GB+ VRAM (o alquiler de GPU en la nube) y 1–4 horas de tiempo de entrenamiento para un modelo 7B.' },
    { q: '¿Cuál es el hardware mínimo para ejecutar un LLM local en 2026?', a: 'Mínimo: 8 GB RAM y cualquier CPU moderna (ejecuta modelos 3B–7B a 2–5 tokens/seg). Recomendado: una GPU con 8 GB+ VRAM (RTX 3060 o más nueva) para 20–40 tokens/seg en modelos 7B.' },
    { q: '¿Son los LLMs locales gratuitos?', a: 'Sí. Ollama y LM Studio son gratuitos y de código abierto. Los modelos (Llama, Mistral, Qwen, DeepSeek) están disponibles bajo licencias de código abierto sin coste. El único gasto es tu hardware.' },
    { q: '¿Cuál es el mejor LLM local para codificación en 2026?', a: 'Qwen2.5-Coder 7B es el mejor para finalización de código y revisión en hardware de consumidor (8 GB VRAM). DeepSeek-Coder V2 Lite es la mejor alternativa. Para configuraciones solo CPU, Phi-3.5 Mini ofrece la mejor calidad de codificación por debajo de 4 GB RAM.' },
    { q: '¿Puedo ejecutar un LLM local sin GPU?', a: 'Sí. Cualquier CPU moderna puede ejecutar modelos 3B–7B en cuantización Q4 usando Ollama (modo CPU) o LM Studio. Velocidad típica de inferencia CPU: 2–8 tokens/seg en CPU de portátil moderno, comparado con 20–50 tokens/seg en RTX 4060. 7B Q4 requiere ~5 GB RAM (no VRAM). Para configuraciones solo CPU, Phi-3.5 Mini (3.8B) y Llama 3.2 3B ofrecen la mejor relación calidad-velocidad.' },
    { q: '¿Cómo actualizo modelos LLM locales cuando se lanzan nuevas versiones?', a: 'Ollama: ejecuta `ollama pull <nombre-modelo>` nuevamente — descarga solo capas cambiadas. LM Studio: abre el navegador de modelos, encuentra la versión actualizada y descárgala. Los archivos GGUF antiguos no se eliminan automáticamente — elimínalos manualmente de ~/.ollama/models (Ollama) o ~/Library/Application Support/LM Studio/models (macOS) para liberar espacio. Las actualizaciones de Meta, Alibaba y Mistral típicamente llegan dentro de 24–48 horas del lanzamiento oficial.' },
    { q: '¿Es un LLM local mejor que ChatGPT?', a: 'Para privacidad y coste, sí. Para calidad de salida pura, no. A partir de 2026, los modelos en la nube fronteriza (GPT-4o, Claude 4.6 Sonnet) superan todos los modelos ejecutables localmente en razonamiento complejo. Sin embargo, modelos locales 70B (Llama 3.3 70B, Qwen2.5 72B) igualan o superan GPT-4o Mini en la mayoría de tareas cotidianas — a coste cero por consulta.' },
    { q: '¿Cuánta RAM necesito para ejecutar un LLM local?', a: 'Mínimo: 8 GB RAM para ejecutar un modelo 7B en cuantización Q4. Recomendado: 16 GB para modelos 13B, 40+ GB para modelos 70B. La memoria unificada de Apple Silicon cuenta completamente — una Mac M3 con 18 GB puede ejecutar bien un modelo 13B.' },
    { q: '¿Cómo ejecuto un LLM local?', a: 'Instala Ollama (ollama.com) y ejecuta: ollama run llama3.1:8b. El modelo se descarga automáticamente. Sin clave API, sin cuenta, sin internet después de la descarga inicial.' },
    { q: '¿Cuál es el mejor LLM local gratuito en 2026?', a: 'Meta Llama 3.1 8B para uso general (compatible con Apache, 5.5 GB RAM). Qwen2.5-Coder 32B para codificación (92.7% HumanEval, 20 GB RAM). DeepSeek-R1 7B para razonamiento (licencia MIT, 5 GB RAM).' },
    { q: '¿Son privados los LLMs locales?', a: 'Sí. Al ejecutar con Ollama o LM Studio, los prompts y respuestas nunca salen de tu máquina. No se transmiten datos. Recomendado para flujos de trabajo regulados por GDPR, procesamiento de documentos legales y médicos, y cualquier tarea que implique información confidencial.' },
    { q: '¿Cuál es el mejor LLM local para codificación en 2026?', a: 'Qwen2.5-Coder 32B puntúa 92.7% en HumanEval y es la mejor opción para codificación en hardware con 20 GB RAM. Para 8 GB VRAM, Qwen2.5-Coder 7B es la mejor opción. DeepSeek-Coder V2 Lite es una fuerte alternativa.' },
    { q: '¿Cuáles son los mejores modelos Ollama en abril de 2026?', a: 'Mejores modelos Ollama abril 2026: Llama 4 Scout 17B (mejor calidad global en 12 GB VRAM, ollama pull llama4:scout), Qwen3 8B (mejor codificación, 5 GB VRAM), Gemma 3 12B (razonamiento fuerte en RTX 3060, 8 GB VRAM), DeepSeek-R2 8B (mejor matemáticas/lógica, 5 GB VRAM).' },
    { q: '¿Cuál es el mejor LLM local para RTX 3060 con 12 GB VRAM?', a: 'RTX 3060 con 12 GB VRAM es una excelente GPU para LLMs locales. Mejores opciones: Llama 4 Scout 17B en Q4 (~10 GB VRAM), Gemma 3 12B (~8 GB VRAM), Qwen3 14B (~9 GB VRAM). Todos se ejecutan a 20–40 tokens/seg en una RTX 3060.' },
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
    collectionPageName: 'Best Local LLMs May 2026: Ollama, LM Studio, Hardware & VRAM Guide',
    collectionPageDescription: 'Best local LLMs May 2026 – latest Ollama models (Llama 4 Scout, Qwen3, Gemma 3), LM Studio vs Jan.ai comparison, VRAM/GPU requirements for RTX 3060 & more. Pull commands, beginner guides & hardware recommendations.',
    webPageDescription: 'As of May 2026: 88 guides on local LLMs covering Ollama, LM Studio, hardware requirements, model benchmarks, fine-tuning, local RAG, and enterprise deployment.',
    navigationName: 'Local LLMs Hub Navigation',
    itemListName: 'Best Local LLM Models May 2026',
    howToName: 'How to Install and Run a Local LLM',
    breadcrumbHome: 'Home',
    breadcrumbHub: 'Local LLMs',
  },
  es: {
    collectionPageName: 'Mejores LLMs Locales Mayo 2026: Ollama, LM Studio, Hardware y Guía de VRAM',
    collectionPageDescription: 'Mejores LLMs locales mayo 2026 — modelos Ollama recientes (Llama 4 Scout, Qwen3, Gemma 3), comparativa LM Studio vs Jan.ai, requisitos VRAM/GPU (RTX 3060 incluida), comandos pull y recomendaciones de hardware para principiantes.',
    webPageDescription: 'A mayo de 2026: 88 guías sobre LLMs locales cubriendo Ollama, LM Studio, requisitos de hardware, benchmarks de modelos, fine-tuning, RAG local y despliegue empresarial.',
    navigationName: 'Navegación del Hub de LLMs Locales',
    itemListName: 'Mejores Modelos LLM Locales Mayo 2026',
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

export function generateLocalLlmsJsonLd(lang: Language, canonicalUrl: string, langSuffix: string) {
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
        { '@type': 'WebPage', name: lang === 'es' ? 'Cómo instalar Ollama' : 'How to Install Ollama', url: `https://www.promptquorum.com${langSuffix}/local-llms/how-to-install-ollama` },
        { '@type': 'WebPage', name: lang === 'es' ? 'Mejores LLMs locales 2026' : 'Best Local LLMs 2026', url: `https://www.promptquorum.com${langSuffix}/local-llms/best-local-llms-2026` },
        { '@type': 'WebPage', name: lang === 'es' ? 'Guía de hardware para LLM local 2026' : 'Local LLM Hardware Guide 2026', url: `https://www.promptquorum.com${langSuffix}/local-llms/local-llm-hardware-guide-2026` },
        { '@type': 'WebPage', name: lang === 'es' ? 'Cuantización LLM explicada' : 'LLM Quantization Explained', url: `https://www.promptquorum.com${langSuffix}/local-llms/llm-quantization-explained` },
        { '@type': 'WebPage', name: lang === 'es' ? 'Ollama vs LM Studio' : 'Ollama vs LM Studio', url: `https://www.promptquorum.com${langSuffix}/local-llms/ollama-vs-lm-studio` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: descriptions.collectionPageName,
      url: canonicalUrl,
      'inLanguage': lang,
      datePublished: '2026-04-01',
      dateModified: '2026-05-17',
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
        url: `https://www.promptquorum.com/local-llms${langSuffix}#${key}`
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'inLanguage': lang,
      name: descriptions.itemListName,
      numberOfItems: 7,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Llama 4 Scout 17B', description: lang === 'es' ? 'Meta. Mejor calidad global con 12 GB VRAM. ollama pull llama4:scout. ~10 GB VRAM en Q4. Arquitectura MoE.' : 'Meta. Best overall quality on 12 GB VRAM. ollama pull llama4:scout. ~10 GB VRAM at Q4. MoE architecture.' },
        { '@type': 'ListItem', position: 2, name: 'Qwen3 8B', description: lang === 'es' ? 'Alibaba. Top en codificación y multilingüe. ollama pull qwen3:8b. 5 GB VRAM.' : 'Alibaba. Top coding and multilingual. ollama pull qwen3:8b. 5 GB VRAM.' },
        { '@type': 'ListItem', position: 3, name: 'Gemma 3 12B', description: lang === 'es' ? 'Google. Razonamiento potente en RTX 3060. ollama pull gemma3:12b. 8 GB VRAM.' : 'Google. Strong reasoning on RTX 3060. ollama pull gemma3:12b. 8 GB VRAM.' },
        { '@type': 'ListItem', position: 4, name: 'DeepSeek-R2 8B', description: lang === 'es' ? 'DeepSeek. Mejor para matemáticas y lógica. ollama pull deepseek-r2:8b. 5 GB VRAM.' : 'DeepSeek. Best for math and logic. ollama pull deepseek-r2:8b. 5 GB VRAM.' },
        { '@type': 'ListItem', position: 5, name: 'Qwen3-Coder 7B', description: lang === 'es' ? 'Alibaba. Mejor para finalización de código y revisión. 7B se ejecuta en GPU 8 GB. Supera GPT-4o mini en HumanEval.' : 'Alibaba. Best for code completion and review. 7B runs on 8 GB GPU. Outperforms GPT-4o mini on HumanEval.' },
        { '@type': 'ListItem', position: 6, name: 'Mistral 7B', description: lang === 'es' ? 'Mistral AI. El más rápido en hardware de consumidor. 4 GB VRAM en Q4. Mejor para tareas sensibles al rendimiento.' : 'Mistral AI. Fastest on consumer hardware. 4 GB VRAM at Q4. Best for throughput-sensitive tasks.' },
        { '@type': 'ListItem', position: 7, name: 'Llama 4 Scout', description: lang === 'es' ? 'Meta. Mejor calidad global. Variantes 8B y 70B. Se ejecuta en RTX 4060 Ti (8B Q4) o dual RTX 4090 (70B Q4).' : 'Meta. Best overall quality. 8B and 70B variants. Runs on RTX 4060 Ti (8B Q4) or dual RTX 4090 (70B Q4).' }
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
        { '@type': 'HowToStep', name: lang === 'es' ? 'Elegir y descargar un modelo' : 'Choose and download a model', text: lang === 'es' ? 'Selecciona Llama 4 Scout, Qwen3 o DeepSeek según tu tarea. Ollama: ollama pull llama4:scout. LM Studio: usa el navegador de modelos.' : 'Select Llama 4 Scout, Qwen3, or DeepSeek based on your task. Ollama: ollama pull llama4:scout. LM Studio: use the model browser.' },
        { '@type': 'HowToStep', name: lang === 'es' ? 'Ejecutar el modelo localmente' : 'Run the model locally', text: lang === 'es' ? 'Ollama: ollama run llama4:scout. LM Studio: lanza el modelo en la GUI y conéctate vía API (http://localhost:11434).' : 'Ollama: ollama run llama4:scout. LM Studio: launch the model in the GUI and connect via API (http://localhost:11434).' },
        { '@type': 'HowToStep', name: lang === 'es' ? 'Integrar en tu aplicación' : 'Integrate into your app', text: lang === 'es' ? 'Usa endpoints de API compatibles con OpenAI para integrar modelos locales en aplicaciones sin cambios de código.' : 'Use OpenAI-compatible API endpoints to integrate local models into applications without code changes.' }
      ]
    }
  ]
}
