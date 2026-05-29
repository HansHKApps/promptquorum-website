import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { LandingPageServer } from '@/components/LandingPageServer'
import { ConfirmedToast } from '@/components/ConfirmedToast'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'es'
  const t = translations[lang as keyof typeof translations]

  return {
    title: t.homeMetaTitle,
    description: t.homeMetaDescription,
    alternates: generateAlternates('/', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.homeMetaTitle,
      description: t.homeMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.homeMetaTitle,
      description: t.homeMetaDescription,
    },
  }
}

export default async function EsHome() {
  return (
    <>
      <ConfirmedToast />
      <LandingPageServer initialLang="es" />

      {/* FAQPage Schema — 8 preguntas principales para fragmentos enriquecidos */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'inLanguage': 'es',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': '¿Qué es PromptQuorum?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum es una herramienta de envío multi-IA y puntuación de consenso. Escribes un prompt estructurado usando cualquiera de los 9 frameworks de prompt engineering y lo envías simultáneamente a GPT-4o, Claude, Gemini, Mistral, Llama, DeepSeek y 25+ modelos de IA más. PromptQuorum recopila todas las respuestas en paralelo y ejecuta un análisis de consenso — así obtienes un veredicto único y verificado en lugar de confiar ciegamente en un solo modelo.'
                }
              },
              {
                '@type': 'Question',
                'name': '¿Cómo funciona PromptQuorum?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum funciona en cuatro etapas: (1) Escribir — elige un framework de prompt (CO-STAR, CRAFT, RISEN, APE y más) y rellena los campos estructurados; (2) Optimizar — tu LLM conectado transforma los campos en un prompt de precisión que refinas con 8 refinamientos con un clic; (3) Enviar — envía el prompt optimizado a 25+ servicios de IA simultáneamente con un clic; (4) Quorum — pega todas las respuestas en la pestaña de análisis y elige entre 13 tipos de análisis incluyendo Resumen de Consenso, Detección de Alucinaciones, Detección de Contradicciones y Selección de la Mejor Respuesta.'
                }
              },
              {
                '@type': 'Question',
                'name': '¿Qué modelos de IA admite PromptQuorum?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum admite 25+ modelos de IA en la nube incluyendo OpenAI GPT-4o y o1, Anthropic Claude 3.5 Sonnet y Claude 4, Google Gemini 2.0 Flash y 1.5 Pro, xAI Grok, DeepSeek, Mistral Large, Cohere Command R+, Meta Llama a través de Together AI y Groq, y Perplexity. También admite todos los principales entornos de LLM local: Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM, KoboldCpp y cualquier endpoint compatible con OpenAI.'
                }
              },
              {
                '@type': 'Question',
                'name': '¿Qué es la puntuación de consenso y por qué importa?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'La puntuación de consenso mide cuánto coinciden los modelos de IA independientes en una respuesta. Cuando 5 o más modelos dan la misma respuesta a una pregunta, la confianza en esa respuesta es mucho mayor que cuando un solo modelo responde por sí solo. El análisis Quorum de PromptQuorum extrae los puntos de acuerdo (consenso), marca las contradicciones entre modelos y puntúa el nivel de confianza general. Este es el método más fiable disponible actualmente para detectar alucinaciones de IA — una afirmación que solo hace un modelo, mientras que cuatro la omiten, es una señal de alucinación muy clara.'
                }
              },
              {
                '@type': 'Question',
                'name': '¿Cuánto cuesta PromptQuorum?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum es gratuito. Trae tu propia clave de API (BYOM) de cualquier proveedor de IA en la nube — OpenAI, Anthropic, Google y otros — y PromptQuorum nunca te cobra por el uso de los modelos. También puedes usar un LLM local gratuito como Ollama o LM Studio sin necesidad de clave de API. No hay suscripción, no se requiere cuenta y PromptQuorum no impone límites de uso.'
                }
              },
              {
                '@type': 'Question',
                'name': '¿Puedo usar PromptQuorum con LLMs locales como Ollama o LM Studio?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Sí. PromptQuorum se conecta nativamente a Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, KoboldCpp, vLLM, oobabooga y cualquier endpoint local compatible con OpenAI. Con un modelo local, PromptQuorum funciona completamente sin conexión — no se requiere internet, no se necesita clave de API. Tus prompts, respuestas y resultados nunca salen de tu dispositivo.'
                }
              },
              {
                '@type': 'Question',
                'name': '¿Cómo protege PromptQuorum mis datos y privacidad?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum no recopila telemetría y no realiza ningún tipo de rastreo. Las claves de API se almacenan solo en el localStorage de tu navegador y nunca se transmiten a ningún servidor de PromptQuorum — cada llamada al modelo va directamente desde tu navegador a tu proveedor elegido. PromptQuorum nunca ve tus prompts, respuestas ni claves de API. Para máxima privacidad, usa un LLM local (Ollama o LM Studio): en ese modo, ningún dato sale de tu dispositivo.'
                }
              },
              {
                '@type': 'Question',
                'name': '¿Cómo obtengo acceso beta a PromptQuorum?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Introduce tu correo electrónico en el formulario de lista de espera de la página de inicio de PromptQuorum. La beta se lanza en julio de 2026. Los miembros de acceso anticipado reciben funciones premium de por vida, soporte prioritario e influencia directa en la hoja de ruta del producto. La aplicación de escritorio (macOS y Windows) y la versión web estarán disponibles simultáneamente en el lanzamiento.'
                }
              }
            ]
          }),
        }}
      />

      {/* HowTo Schema — flujo de trabajo de 4 etapas de PromptQuorum */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            'inLanguage': 'es',
            'name': 'Cómo optimizar prompts y comparar modelos de IA con PromptQuorum',
            'description': 'Cuatro etapas para convertir cualquier idea en un prompt de precisión y comparar respuestas en 25+ modelos de IA.',
            'totalTime': 'PT5M',
            'step': [
              {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'Escribe un prompt estructurado',
                'text': 'Elige uno de los 9 frameworks de prompt engineering (CO-STAR, CRAFT, RISEN, APE, SPECS, TRACE, RTF, Google Prompt, Single Prompt Line) y rellena los campos estructurados. El Asistente de Frameworks recomienda la mejor opción para tu tarea.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Optimiza con tu LLM',
                'text': 'Tu LLM conectado (ChatGPT, Claude, Gemini o un modelo local como Ollama) transforma los campos del framework en un prompt de precisión. Refina de forma iterativa con 8 refinamientos con un clic. Cada versión se guarda en el historial.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Envía a múltiples modelos de IA',
                'text': 'Envía el prompt optimizado a 25+ servicios de IA simultáneamente con un clic. Las respuestas llegan en paralelo — sin esperar a que un modelo termine antes de empezar con el siguiente.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'Analiza el consenso entre modelos',
                'text': 'Pega todas las respuestas en la pestaña de análisis y elige entre 13 tipos de análisis: Resumen de Consenso, Detección de Alucinaciones, Detección de Contradicciones, Selección de la Mejor Respuesta y más. Obtén un veredicto verificado en lugar de confiar en un solo modelo.',
                'image': 'https://www.promptquorum.com/og-image.png',
              }
            ]
          }),
        }}
      />
    </>
  )
}
