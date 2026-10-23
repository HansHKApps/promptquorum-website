import type { Language } from '@/lib/blog/blogContent'
import { translations } from '@/translations'
import { toOutputLocale, type Lang } from '@/lib/i18n/constants'
import { HUB_FAQS, HUB_FAQS_BOTTOM } from './hub-content'
import { HUB_TEMPLATE_COPY } from './hub-template-copy'

// FAQPage JSON-LD is built from the same two visible lists the hub renders (HUB_FAQS, then HUB_FAQS_BOTTOM,
// de-duplicated by question), so the schema can never list a question the page does not show.
function visibleFaqs(lang: Language): { q: string; a: string }[] {
  const seen = new Set<string>()
  return [...(HUB_FAQS[lang] ?? HUB_FAQS.en), ...(HUB_FAQS_BOTTOM[lang] ?? HUB_FAQS_BOTTOM.en)].filter((faq) =>
    seen.has(faq.q) ? false : (seen.add(faq.q), true),
  )
}

// Full hub schema (nav, item list, how-to) is hand-written for EN and ES only; every other language gets the
// lean set from leanHubJsonLd(), built from strings that already exist in the hub (meta, template copy, FAQs).
type FullSchemaLang = 'en' | 'es'

const NAV_LABELS: Record<FullSchemaLang, Record<string, string>> = {
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
}

const SCHEMA_DESCRIPTIONS: Record<FullSchemaLang, {
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
    collectionPageName: 'Best Local LLMs 2026: Ollama, LM Studio, Hardware & VRAM Guide',
    collectionPageDescription: 'Best local LLMs 2026 – latest Ollama models (Qwen3.8-27B, gpt-oss, Gemma 4), LM Studio vs Jan.ai comparison, VRAM/GPU requirements for RTX 3060 & more. Pull commands, beginner guides & hardware recommendations.',
    webPageDescription: 'Guides on local LLMs covering Ollama, LM Studio, hardware requirements, model benchmarks, fine-tuning, local RAG, and enterprise deployment.',
    navigationName: 'Local LLMs Hub Navigation',
    itemListName: 'Best Local LLM Models',
    howToName: 'How to Install and Run a Local LLM',
    breadcrumbHome: 'Home',
    breadcrumbHub: 'Local LLMs',
  },
  es: {
    collectionPageName: 'Mejores LLMs Locales 2026: Ollama, LM Studio, Hardware y Guía de VRAM',
    collectionPageDescription: 'Mejores LLMs locales 2026 — modelos Ollama recientes (Qwen3.8-27B, gpt-oss, Gemma 4), comparativa LM Studio vs Jan.ai, requisitos VRAM/GPU (RTX 3060 incluida), comandos pull y recomendaciones de hardware para principiantes.',
    webPageDescription: 'Guías sobre LLMs locales cubriendo Ollama, LM Studio, requisitos de hardware, benchmarks de modelos, fine-tuning, RAG local y despliegue empresarial.',
    navigationName: 'Navegación del Hub de LLMs Locales',
    itemListName: 'Mejores Modelos LLM Locales',
    howToName: 'Cómo instalar y ejecutar un LLM local',
    breadcrumbHome: 'Inicio',
    breadcrumbHub: 'LLMs locales',
  }
}

const HUB_PUBLISHED = '2026-04-01'
const HUB_MODIFIED = '2026-10-23'

/** JSON-LD for every language except EN and ES: all strings come from data the hub already renders. */
function leanHubJsonLd(lang: Language, canonicalUrl: string) {
  const t = translations[lang as keyof typeof translations]
  const copy = HUB_TEMPLATE_COPY[lang as Lang]
  const inLanguage = toOutputLocale(lang)
  const publisher = { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' }
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: t.localLlmsHubTitle,
      description: t.localLlmsHubDescription,
      url: canonicalUrl,
      inLanguage,
      publisher,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: t.localLlmsHubTitle,
      url: canonicalUrl,
      inLanguage,
      datePublished: HUB_PUBLISHED,
      dateModified: HUB_MODIFIED,
      description: t.localLlmsHubDescription,
      isPartOf: { '@type': 'WebSite', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.key-takeaways', '.article-intro'] },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      inLanguage,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: copy?.home ?? 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: copy?.pill ?? 'Local LLMs', item: canonicalUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage,
      mainEntity: visibleFaqs(lang).map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ]
}

export function generateLocalLlmsJsonLd(lang: Language, canonicalUrl: string, langPrefix: string) {
  if (lang !== 'en' && lang !== 'es') return leanHubJsonLd(lang, canonicalUrl)
  const descriptions = SCHEMA_DESCRIPTIONS[lang]
  const faqs = visibleFaqs(lang)
  const navLabels = NAV_LABELS[lang]

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
        { '@type': 'WebPage', name: lang === 'es' ? 'Guía de hardware para LLM local 2026' : 'Local LLM Hardware Guide 2026', url: `https://www.promptquorum.com${langPrefix}/local-llms/local-llm-hardware-guide` },
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
      datePublished: HUB_PUBLISHED,
      dateModified: HUB_MODIFIED,
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
        url: `https://www.promptquorum.com${langPrefix}/local-llms#${key}`
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'inLanguage': lang,
      name: descriptions.itemListName,
      numberOfItems: 7,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Qwen3.8-27B', description: lang === 'es' ? 'Alibaba. Mejor opción global en hardware de consumidor. Cabe en 24 GB en Q4.' : 'Alibaba. Best overall on consumer hardware. Fits 24 GB at Q4.' },
        { '@type': 'ListItem', position: 2, name: 'Qwen3 8B', description: lang === 'es' ? 'Alibaba. Top en codificación y multilingüe. ollama pull qwen3:8b. 5 GB VRAM.' : 'Alibaba. Top coding and multilingual. ollama pull qwen3:8b. 5 GB VRAM.' },
        { '@type': 'ListItem', position: 3, name: 'gpt-oss:20b', description: lang === 'es' ? 'OpenAI. Mejor modelo pequeño, se ejecuta en 16 GB. MoE 21B total / 3,6B activos. Razonamiento ajustable. ollama pull gpt-oss:20b.' : 'OpenAI. Best small model, runs in 16 GB. 21B total / 3.6B active MoE. Adjustable reasoning. ollama pull gpt-oss:20b.' },
        { '@type': 'ListItem', position: 4, name: 'DeepSeek-R1', description: lang === 'es' ? 'DeepSeek. Mejor para matemáticas y lógica. Licencia MIT.' : 'DeepSeek. Best for math and logic. MIT licence.' },
        { '@type': 'ListItem', position: 5, name: 'qwen3-coder:30b', description: lang === 'es' ? 'Alibaba. Mejor para finalización de código y revisión. ollama pull qwen3-coder:30b.' : 'Alibaba. Best for code completion and review. ollama pull qwen3-coder:30b.' },
        { '@type': 'ListItem', position: 6, name: 'Gemma 4 12B', description: lang === 'es' ? 'Google. Visión y uso de herramientas, contexto de 256K. ~8 GB de descarga. ollama pull gemma4:12b.' : 'Google. Vision and tool calling, 256K context. ~8 GB download. ollama pull gemma4:12b.' },
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
        { '@type': 'HowToStep', name: lang === 'es' ? 'Elegir y descargar un modelo' : 'Choose and download a model', text: lang === 'es' ? 'Selecciona Qwen3.8-27B, Qwen3 o DeepSeek según tu tarea y tu VRAM. Ollama: ollama pull qwen3:8b. LM Studio: usa el navegador de modelos.' : 'Select Qwen3.8-27B, Qwen3, or DeepSeek based on your task and VRAM. Ollama: ollama pull qwen3:8b. LM Studio: use the model browser.' },
        { '@type': 'HowToStep', name: lang === 'es' ? 'Ejecutar el modelo localmente' : 'Run the model locally', text: lang === 'es' ? 'Ollama: ollama run qwen3:8b. LM Studio: lanza el modelo en la GUI y conéctate vía API (http://localhost:11434).' : 'Ollama: ollama run qwen3:8b. LM Studio: launch the model in the GUI and connect via API (http://localhost:11434).' },
        { '@type': 'HowToStep', name: lang === 'es' ? 'Integrar en tu aplicación' : 'Integrate into your app', text: lang === 'es' ? 'Usa endpoints de API compatibles con OpenAI para integrar modelos locales en aplicaciones sin cambios de código.' : 'Use OpenAI-compatible API endpoints to integrate local models into applications without code changes.' }
      ]
    }
  ]
}
