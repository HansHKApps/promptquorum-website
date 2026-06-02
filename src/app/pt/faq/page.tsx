import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FAQPageClient } from '@/components/FAQPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'pt'
  const t = translations[lang]

  return {
    title: t.faqMetaTitle,
    description: t.faqMetaDescription,
    alternates: generateAlternates('/faq', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.faqMetaTitle,
      description: t.faqMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.faqMetaTitle,
      description: t.faqMetaDescription,
    },
  }
}

export default async function EsFAQPage() {
  return (
    <>
      <FAQPageClient initialLang="pt" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: 'pt',
          mainEntity: [
              { '@type': 'Question', name: '¿Es gratuito PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. PromptQuorum es gratuito. Puedes traer tu propia clave de API, usar un LLM local o probar nuestro servicio backend gratuito limitado para la optimización de prompts.' } },
              { '@type': 'Question', name: '¿Cómo funciona la privacidad?', acceptedAnswer: { '@type': 'Answer', text: 'Cero telemetría, cero rastreo, sin recopilación de datos. Las claves de API se almacenan solo en el localStorage de tu navegador y nunca se transmiten a ningún servidor de PromptQuorum.' } },
              { '@type': 'Question', name: '¿Qué proveedores de IA son compatibles?', acceptedAnswer: { '@type': 'Answer', text: 'Más de 25 proveedores de IA incluyendo OpenAI, Anthropic Claude, Google Gemini, Grok, DeepSeek, Mistral, Cohere, Together AI, Groq, OpenRouter, más todos los proveedores locales como Ollama, LM Studio, Jan AI, GPT4All y cualquier endpoint compatible con OpenAI.' } },
              { '@type': 'Question', name: '¿En qué plataformas funciona PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: 'Aplicaciones de escritorio (Mac, Windows via Electron), aplicación web y finalmente móvil (iOS y Android via Capacitor). Funciona completamente sin conexión con un LLM local.' } },
              { '@type': 'Question', name: '¿Qué hace diferente a PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum cubre el ciclo completo del prompt en una sola herramienta basada en el navegador: escritura estructurada con 9 frameworks, optimización iterativa impulsada por IA con 8 tipos de refinamiento, envío con un clic a 25+ servicios de IA y 13 tipos de análisis Quorum para la puntuación de consenso — todo sin que ningún dato salga de tu dispositivo.' } },
              { '@type': 'Question', name: '¿Hay algún límite?', acceptedAnswer: { '@type': 'Answer', text: 'Ningún límite por parte de PromptQuorum. Tu uso solo está limitado por tus claves de API o recursos de LLM local.' } },
              { '@type': 'Question', name: '¿Qué es el prompt engineering y por qué importa?', acceptedAnswer: { '@type': 'Answer', text: 'El prompt engineering es la práctica de diseñar entradas para modelos de IA de modo que devuelvan resultados más precisos, útiles y fiables. En pruebas, los prompts estructurados con campos de framework producen puntuaciones de evaluación de LLM un 25–45% más altas en comparación con entradas no estructuradas. PromptQuorum automatiza esto con 9 frameworks integrados.' } },
              { '@type': 'Question', name: '¿Cómo optimiza PromptQuorum mis prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Tu LLM conectado transforma los campos sin procesar del framework en un prompt de precisión. Luego refinas de forma iterativa con 8 refinamientos con un clic. Cada paso se guarda en el historial de versiones para que puedas revertir en cualquier momento.' } },
              { '@type': 'Question', name: '¿Qué frameworks de prompt están integrados en PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: '9 frameworks: Single Prompt Line, APE, CRAFT, CO-STAR (ganó la competición Singapore GPT-4), SPECS, RISEN, TRACE, Google Prompt y RTF. También puedes construir 2 frameworks completamente personalizados.' } },
              { '@type': 'Question', name: '¿Qué es el framework CO-STAR?', acceptedAnswer: { '@type': 'Answer', text: 'CO-STAR son las siglas de Context (Contexto), Objective (Objetivo), Style (Estilo), Tone (Tono), Audience (Audiencia) y Response (Respuesta). Ganó la competición de prompt engineering Singapore GPT-4 y es ideal para comunicación empresarial y marketing.' } },
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              inLanguage: 'pt',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.promptquorum.com/es' },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.promptquorum.com/pt/faq' },
              ],
            },
          }),
        }}
      />
    </>
  )
}
