import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'
import { Sparkles, Layers, Brain, Zap, Shield } from 'lucide-react'
import { PromptOptimizerShowcase } from '@/components/PromptOptimizerShowcase'
import { OptimizationShowcase } from '@/components/OptimizationShowcase'
import { QuorumShowcase } from '@/components/QuorumShowcase'

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PQ Apps — PromptQuorum',
    description: 'Descubre cómo funciona la app de PromptQuorum: escribe prompts con frameworks integrados, envíalos a más de 25 modelos de IA y compara resultados con el análisis Quorum.',
    alternates: generateAlternates('/pq-apps', 'es', true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: 'PQ Apps — PromptQuorum',
      description: 'Descubre cómo funciona la app de PromptQuorum: escribe prompts con frameworks integrados, envíalos a más de 25 modelos de IA y compara resultados con el análisis Quorum.',
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PQ Apps — PromptQuorum',
      description: 'Descubre cómo funciona la app de PromptQuorum: escribe prompts con frameworks integrados, envíalos a más de 25 modelos de IA y compara resultados con el análisis Quorum.',
    },
  }
}

export default function EsPQAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'url': 'https://www.promptquorum.com/es/pq-apps',
              'name': 'PQ Apps — PromptQuorum',
              'description': 'Descubre cómo funciona la app de PromptQuorum: escribe prompts con frameworks integrados, envíalos a más de 25 modelos de IA y compara resultados con el análisis Quorum.',
              'inLanguage': 'es',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.promptquorum.com/es' },
                { '@type': 'ListItem', 'position': 2, 'name': 'PQ Apps', 'item': 'https://www.promptquorum.com/es/pq-apps' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16 text-center">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">PQ Apps</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              PromptQuorum, donde sea que trabajes
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Un solo prompt, enviado simultáneamente a más de 25 modelos de IA, con soporte para LLMs locales y análisis de consenso multi-modelo, todo desde tu navegador.
            </p>
            <Link
              href="/es/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Probar la beta
            </Link>
          </div>

          {/* How It Works */}
          <section id="how-it-works" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Cómo funciona</h2>
            <p className="text-text-secondary mb-3">Un flujo de trabajo de 4 etapas: escribe un prompt estructurado usando uno de 9 frameworks, optimízalo con tu propio LLM, envíalo simultáneamente a 25+ servicios de IA y analiza todas las respuestas usando 13 tipos de análisis de consenso.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              Funciona completamente en tu navegador — ningún servidor de PromptQuorum ve tus prompts ni claves de API
            </div>

            <div className="space-y-8 mb-16">
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Escribir</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Estructura tu prompt</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Los prompts estructurados con frameworks producen resultados de mayor calidad. PromptQuorum incluye 9 frameworks integrados (Single Prompt Line, CRAFT, CO-STAR, RISEN, TRACE, APE, SPECS, Google Prompt, RTF) más 2 ranuras de frameworks totalmente personalizables.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Single Prompt Line — estructura mínima para tareas rápidas</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CRAFT — Context, Role, Action, Format, Target (escritura creativa)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CO-STAR — Context, Objective, Style, Tone, Audience, Response (marketing, negocios)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>RISEN — Role, Instructions, Steps, End Goal, Narrowing (tareas empresariales secuenciales)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>TRACE — Task, Request, Action, Context, Example (aprendizaje few-shot)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>APE, SPECS, Google Prompt, RTF — optimizados para tipos de tareas específicas</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Un Asistente de Frameworks recomienda el mejor framework según el tipo de tarea.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Optimizar</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Refina con tu propio LLM</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">La calidad del prompt mejora de forma medible con la optimización — los prompts estructurados puntúan un 25–45% más alto en evaluaciones de LLM. PromptQuorum aplica 8 tipos de refinamiento (Hacer Conciso, Expandir Detalle, Dividir en Pasos, Aumentar Especificidad, Simplificar, Añadir Controles de Calidad, Consulta Multi-Experto, Comprimir a Esencia) más detección inteligente de temperatura.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Evaluación de calidad — puntuación de 0-100% en claridad, especificidad, estructura y restricciones</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Temperatura inteligente — recomienda el nivel óptimo de creatividad (0,0–1,0) según el tipo de tarea</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Historial de versiones — cada refinamiento guardado; ramifica y compara rutas de refinamiento</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Modo enseñanza — explica por qué cada cambio mejora la calidad y la claridad</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>8 refinamientos con un clic — aplica transformaciones estructuradas al instante</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Instrucción personalizada — refinamiento en texto libre usando tu propio LLM</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Tu LLM. Tu clave de API. Nada pasa por los servidores de PromptQuorum.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Enviar</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Envía a 25+ servicios de IA</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Enviar el mismo prompt a múltiples modelos de IA revela cuál funciona mejor para tu tarea. PromptQuorum abre pestañas de navegador en paralelo hacia 25+ destinos sin copiar y pegar.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Envío automático (17 servicios): OpenAI ChatGPT, Google Gemini, Anthropic Claude, Perplexity, xAI Grok, DeepSeek, Mistral, Cohere, Azure, Together, Groq y más</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Copiar-pegar (8 servicios): Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All y otros</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Perplexity se envía automáticamente — prompt enviado de inmediato al cargarse</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>2 ranuras de URL personalizadas — configura cualquier servicio de IA fuera de la lista predeterminada</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Refinamiento previo al envío opcional — mejora final de LLM antes de enviar</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Ejecución en paralelo — todas las pestañas se abren simultáneamente; recoge respuestas en menos de 1 minuto</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Todas las pestañas del navegador se abren en paralelo. Sin copiar y pegar entre pestañas.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Quorum</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Encuentra consenso entre todos los modelos</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Cuando 5+ modelos independientes coinciden en una respuesta, la confianza es mayor que con un solo modelo. Pega todas las respuestas de nuevo en PromptQuorum y aplica 13 tipos de análisis de consenso.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Resumen de consenso — identifica temas compartidos y acuerdos unánimes</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Detección de contradicciones — marca dónde los modelos divergen; identifica opiniones minoritarias</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Detección de alucinaciones — identifica afirmaciones que aparecen en pocos modelos; posibles datos falsos</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Puntuación de confianza — nivel de certeza por modelo y por afirmación</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Selección de la mejor respuesta — selecciona la respuesta individual de mayor calidad</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Fusión ponderada — sintetiza una respuesta híbrida usando los mejores elementos de todos los modelos</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Cuando 5+ modelos independientes convergen en la misma respuesta, el riesgo de alucinación es menor que con un solo modelo.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">9 Frameworks de Prompt Integrados</h3>
              <p className="text-text-secondary mb-6">Los prompts estructurados con frameworks producen resultados mediblemente mejores que las solicitudes no estructuradas. Cada framework organiza la entrada de manera diferente para tipos de tareas específicas. Un Asistente de Frameworks recomienda el más adecuado, o crea 2 frameworks personalizados.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary">Framework</th>
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">Estructura</th>
                      <th className="text-left py-2 sm:py-3 font-semibold text-text-primary">Óptimo para</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Single Prompt Line</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">—</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Consultas rápidas y ad hoc sin estructura</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">APE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Action · Purpose · Expectation</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Estructura mínima de 3 campos; tareas simples</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CRAFT</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Role · Action · Format · Target</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Escritura creativa; tareas de uso general</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CO-STAR</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Objective · Style · Tone · Audience · Response</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Textos de marketing; comunicación empresarial</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">SPECS</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Situation · Purpose · Expected Output · Context · Style</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Análisis; investigación; redacción técnica</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RISEN</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Instructions · Steps · End Goal · Narrowing</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Flujos de trabajo empresariales de múltiples pasos</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">TRACE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Request · Action · Context · Example</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Aprendizaje few-shot; tareas basadas en ejemplos</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Google Prompt</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Context · Persona</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Tareas profesionales; prompts basados en roles</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RTF</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Task · Format</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Estructura mínima; solo 3 campos esenciales</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">13 Tipos de Análisis Quorum</h3>
              <p className="text-text-secondary mb-6">Aplica 2 o los 13 análisis a respuestas de múltiples modelos. Cada análisis es ejecutado por tu LLM conectado, no por los servidores de PromptQuorum. Identifica consenso, contradicciones, alucinaciones y niveles de confianza en todos los resultados.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Síntesis (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Resumen de consenso — temas compartidos entre todos los modelos
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Fusión ponderada — respuesta híbrida combinando lo mejor de cada modelo
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Extracción de hechos atómicos — desglosa afirmaciones en hechos discretos; cuenta el acuerdo entre modelos
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Comparación (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Mapeo de superposición — identifica qué modelos produjeron resultados idénticos
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Detección de contradicciones — marca afirmaciones donde los modelos divergen
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Puntuación de confianza — mide el nivel de certeza por modelo y por afirmación
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Calidad (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Verificación de completitud — verifica que toda la información requerida esté presente
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Detección de alucinaciones — identifica afirmaciones en pocos modelos; posibles datos falsos
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Eliminación de redundancias — elimina afirmaciones duplicadas o casi duplicadas
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Selección (4)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Selección de la mejor respuesta — elige la respuesta individual de mayor calidad
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Conjunto multi-modelo — combina resultados usando ponderación de confiabilidad por modelo
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Bandera de controversia — destaca afirmaciones donde el acuerdo entre modelos es débil
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Análisis personalizado — plantilla de análisis definida por el usuario
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-secondary/30 border border-primary/20 rounded-xl p-6">
                <div className="text-sm font-semibold text-text-primary mb-2">Exporta resultados en 6 formatos</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.txt</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.md</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.json</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.csv</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.html</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.pdf</span>
                </div>
                <p className="text-xs text-text-muted mt-2">Múltiples formatos → descargados como archivo .zip. File System Access API para selección de carpeta (Chrome/Edge/Safari 16+).</p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-6">Conceptos Clave</h3>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Envío Multi-Modelo</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Enviar un prompt simultáneamente a 25+ modelos de IA con un solo clic. PromptQuorum precarga tu prompt en cada destino a través de URL — sin copiar y pegar, todas las pestañas se abren en paralelo.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Análisis Quorum</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Comparación estructurada de respuestas de múltiples modelos de IA para identificar consenso, contradicciones y niveles de confianza. PromptQuorum ofrece 13 tipos de análisis, incluyendo Detección de Alucinaciones y Selección de la Mejor Respuesta.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Puntuación de Consenso</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Una calificación de confianza derivada del grado de acuerdo entre múltiples respuestas de modelos. Mayor consenso = mayor fiabilidad. Menor consenso señala áreas de incertidumbre o posible alucinación.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Detección de Alucinaciones</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Identificar afirmaciones fácticas que aparecen en solo uno o una minoría de modelos, indicando posible fabricación de la IA. Contrastar 5+ modelos independientes reduce drásticamente la tasa de alucinaciones no detectadas.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">BYOM — Trae tu Propio Modelo</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Conectar tus propias claves de API directamente a los proveedores de IA. Las claves se almacenan solo en el localStorage de tu navegador y se conectan directamente a los proveedores — ningún servidor de PromptQuorum recibe ni transmite tus credenciales.</dd>
                </div>
              </dl>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">Trae tu propio modelo (BYOM) — Sin infraestructura de PromptQuorum</h3>
              <p className="text-text-secondary mb-6">PromptQuorum no aloja ni ejecuta ningún modelo LLM. Cada llamada de API va directamente desde tu navegador a tu proveedor elegido. Tus claves de API permanecen en el localStorage del navegador y nunca se transmiten a los servidores de PromptQuorum.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">APIs en la nube (trae tu propia clave de API)</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      OpenAI (GPT-4, GPT-4o)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Anthropic (Claude 3.5)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Google Gemini 1.5
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Grok (xAI)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      DeepSeek
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Mistral
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Cohere
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Together AI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Groq
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      OpenRouter (free tier)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Modelos locales (sin clave de API; ejecuta en tu máquina)</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Ollama (localhost:11434)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      LM Studio (localhost:1234)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Jan AI (localhost:1337)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      GPT4All (localhost:4891)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Open WebUI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      KoboldCpp
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      vLLM
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      oobabooga
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Any OpenAI-compatible endpoint
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-16">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Sin telemetría</h3>
                  <p className="text-text-secondary text-sm">Sin análisis, sin rastreo, sin registro, sin recopilación de datos. Ni siquiera estadísticas de uso anónimas.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Sin registro</h3>
                  <p className="text-text-secondary text-sm">Cero registro requerido. Sin correo, sin cuenta, sin inicio de sesión. Abre la app y empieza inmediatamente.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Funciona sin conexión</h3>
                  <p className="text-text-secondary text-sm">La app de escritorio (Electron) y la app móvil (Capacitor) admiten operación completamente sin conexión con modelos locales a través de Ollama, LM Studio, Jan AI o endpoints compatibles.</p>
                </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-3">Cómo realizamos las pruebas</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">Los datos de rendimiento citados en los artículos de PromptQuorum se basan en sesiones de dispatch controladas con PromptQuorum. Cuando un artículo cita cifras concretas (puntuaciones de calidad de prompts, comparaciones de temperatura, benchmarks), estos reflejan pruebas editoriales o datos de benchmark públicos — no mediciones propias de PromptQuorum salvo indicación explícita.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Dispatch de prompts: envío simultáneo a los modelos indicados mediante el dispatch con un clic de PromptQuorum
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Tamaño muestral: las pruebas editoriales usan un mínimo de 30 prompts por condición salvo indicación contraria
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Evaluación: las respuestas son puntuadas por al menos 2 revisores independientes en revisión ciega
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Benchmarks de terceros (HumanEval, SWE-bench, MBPP): extraídos de publicaciones oficiales de modelos o leaderboards comunitarios; fecha de evaluación citada en cada artículo
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Pruebas de modelos locales: ejecutadas en hardware de consumo al nivel de cuantización indicado en el artículo
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Divulgación: cuando se citan pruebas internas de PromptQuorum, se identifican con la etiqueta "Tested in PromptQuorum" en el cuerpo del artículo
                </li>
              </ul>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Características</h2>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">Características principales de un vistazo</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">9 frameworks de prompt engineering (CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google, RTF)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Envío a 25+ modelos en la nube simultáneamente (GPT-4o, Claude, Gemini, DeepSeek y más)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">13 tipos de análisis de consenso Quorum en 4 categorías (síntesis, comparación, calidad, selección)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">La detección de alucinaciones marca afirmaciones que aparecen en un solo modelo o contradicen el consenso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Soporte de LLM local: Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM y cualquier endpoint compatible con OpenAI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Privacidad ante todo: ejecución completamente sin conexión, sin registro requerido, nada sale de tu dispositivo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Comparación instantánea de respuestas en paralelo de todos los modelos en tiempo real</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Optimización automática de prompts con 8 técnicas de refinamiento para mejores resultados de IA</span>
              </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Optimización de prompts</h3>
                <p className="text-text-secondary">Refina y optimiza tus prompts automáticamente con 8 técnicas de refinamiento probadas para mejores resultados de IA.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Envío multi-modelo</h3>
                <p className="text-text-secondary">Ejecuta prompts en ChatGPT, Claude, Gemini y 25+ modelos más simultáneamente en paralelo.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Puntuación Quorum</h3>
                <p className="text-text-secondary">Encuentra respuestas de consenso entre modelos con puntuación de confianza. La detección de alucinaciones marca afirmaciones que aparecen en un solo modelo.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Comparación instantánea</h3>
                <p className="text-text-secondary">Obtén respuestas en paralelo con un clic — sin copiar y pegar manualmente entre pestañas del navegador.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Privacidad ante todo</h3>
                <p className="text-text-secondary">Opción de ejecución local. Sin registro requerido. Control total sobre tus prompts.</p>
              </div>
            </div>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-8">
              <PromptOptimizerShowcase lang="es" />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">¿Cómo revisas los resultados de optimización?</h3>
              <p className="text-text-secondary mb-6">Revisa evaluaciones de calidad, historial de versiones y sugerencias de mejora para tus prompts optimizados.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <OptimizationShowcase lang="es" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Control de versiones</h4>
                  <p className="text-text-secondary text-sm">Sigue todas las iteraciones de tu prompt. Vuelve a versiones anteriores en cualquier momento o ramifica para explorar distintas rutas de optimización.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Información de calidad</h4>
                  <p className="text-text-secondary text-sm">Comprende exactamente por qué se mejoró tu prompt. Obtén información detallada sobre fortalezas y áreas a refinar.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Refinamientos inteligentes</h4>
                  <p className="text-text-secondary text-sm">Aplica refinamientos con un clic para que tu prompt sea más conciso, claro, profesional o detallado según necesites.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">¿Qué es Quorum — Consenso multi-modelo?</h3>
              <p className="text-text-secondary mb-6">Recopila respuestas de 25+ modelos de IA, analiza patrones de consenso y sintetiza perspectivas de diferentes fuentes.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <QuorumShowcase lang="es" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Recopilar respuestas</h4>
                  <p className="text-text-secondary text-sm">Ejecuta tu prompt en ChatGPT, Claude, Gemini y más de 25 modelos. Obtén perspectivas y respuestas diversas al instante.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Analizar patrones</h4>
                  <p className="text-text-secondary text-sm">Identifica en qué coinciden todos los modelos (consenso), en qué difieren y qué respuestas son de mayor calidad para tu caso de uso.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Sintetizar información</h4>
                  <p className="text-text-secondary text-sm">Combina las fortalezas de varios modelos para obtener mejores respuestas. Exporta los resultados en varios formatos para su uso posterior.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Compare Tools */}
          <section id="compare-tools" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Comparar herramientas</h2>
            <p className="text-text-secondary mb-4">Descubre cómo se compara PromptQuorum con otras herramientas de prompts de IA.</p>
            <Link href="/es/compare" className="text-primary hover:text-primary/80 font-medium">
              Ver comparativa completa →
            </Link>
          </section>

          {/* Repeat CTA */}
          <div className="text-center py-12 border-t border-primary/20">
            <Link
              href="/es/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Probar la beta
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
