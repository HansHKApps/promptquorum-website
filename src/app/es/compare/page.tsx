import type { Metadata } from 'next'
import { translations } from '@/translations'
import { ComparePageClient } from '@/components/ComparePageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'es'
  const t = translations[lang]

  return {
    title: t.compareMetaTitle,
    description: t.compareMetaDescription,
    alternates: generateAlternates('/compare', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.compareMetaTitle,
      description: t.compareMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.compareMetaTitle,
      description: t.compareMetaDescription,
    },
  }
}

export default async function EsComparePage() {
  return (
    <>
      <ComparePageClient initialLang="es" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.promptquorum.com/es/compare',
                'url': 'https://www.promptquorum.com/es/compare',
                'name': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo — Herramientas multi-LLM comparadas (2026)',
                'description': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo: compara envío simultáneo, puntuación de consenso, soporte de LLM local y control de clave de API en 2026.',
                'inLanguage': 'es',
                'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.promptquorum.com/es' },
                  { '@type': 'ListItem', 'position': 2, 'name': 'Comparar', 'item': 'https://www.promptquorum.com/es/compare' },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': '¿Cuál es la mejor herramienta para comparar el mismo prompt en múltiples LLM simultáneamente?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'PromptQuorum es la única herramienta que combina envío simultáneo de prompts con análisis automático de consenso — obtienes no solo las respuestas lado a lado, sino también un veredicto sobre dónde están de acuerdo los modelos y dónde difieren. Poe y AiZolo ofrecen acceso multi-modelo pero no generan puntuación de consenso. LM Arena utiliza votación humana en lugar de análisis automatizado. OpenMark califica prompts individuales pero no genera un veredicto de consenso entre modelos. La información de funcionalidades se basa en documentación pública de marzo de 2026.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': '¿Qué herramienta multi-LLM soporta LLM locales como Ollama y LM Studio?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'PromptQuorum es la única herramienta en esta página que soporta inferencia local de LLM a través de Ollama y LM Studio, lo que significa que tus prompts sensibles nunca salen de tu máquina. Poe, LM Arena, OpenMark y AiZolo operan como servicios solo en la nube según su documentación pública a partir de marzo de 2026. Verifica las capacidades actuales de cada herramienta directamente con el proveedor antes de tomar una decisión.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': '¿Qué es la puntuación de consenso en una herramienta multi-LLM?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'La puntuación de consenso es un análisis automatizado de cuánto múltiples modelos de IA están de acuerdo en un prompt dado. El Quorum Verdict de PromptQuorum califica la concordancia entre todos los modelos desplegados, identifica dónde divergen y explica qué significa probablemente esa divergencia. Una puntuación de consenso alta indica que la respuesta es confiable en arquitecturas de modelos. Una puntuación de consenso baja señala incertidumbre y justifica investigación adicional.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': '¿En qué se diferencia PromptQuorum de Poe?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Poe, propiedad de Quora, es una plataforma de chat multi-modelo enfocada en acceso y conversación. PromptQuorum es una herramienta de envío y análisis multi-LLM enfocada en evaluación de prompts y puntuación de consenso. Poe te permite cambiar entre modelos o comparar dos a la vez. PromptQuorum envía a todos los modelos seleccionados simultáneamente y analiza automáticamente dónde están de acuerdo — un flujo de trabajo fundamentalmente diferente diseñado para usuarios avanzados y desarrolladores en lugar de chat ocasional.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': '¿Necesito mis propias claves API para usar PromptQuorum?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Sí. PromptQuorum está diseñado para usuarios que proporcionen sus propias claves API de OpenAI, Anthropic, Google, Mistral y otros proveedores. Esto mantiene tus datos bajo tu control, tu uso bajo tus términos comerciales y tus costos transparentes. También habilita soporte para LLM locales a través de Ollama y LM Studio para usuarios que prefieren inferencia completamente privada.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
