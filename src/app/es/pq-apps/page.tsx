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

            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed mb-8">
              <strong>Nota de precisión:</strong>
               La información de características y precios fue verificada en marzo de 2026 y se proporciona de buena fe basándose en la documentación pública de cada producto. Los productos cambian con frecuencia — verifica las características actuales directamente con cada proveedor. Si crees que alguna información de esta página es inexacta u obsoleta, 
              <a href="mailto:hello@promptquorum.com" className="underline hover:text-amber-900">contáctanos</a>
               y lo corregiremos de inmediato. Esta comparación es producida por PromptQuorum y refleja nuestra perspectiva como participante en este mercado.
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-3">¿Qué es una herramienta de comparación multi-LLM?</h3>
              <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 mb-4">
                <p className="text-text-primary text-[15px] leading-relaxed">Una herramienta de comparación multi-LLM envía el mismo prompt a múltiples modelos de lenguaje grande de forma simultánea y muestra las respuestas en paralelo, permitiendo a los usuarios evaluar las diferencias en razonamiento, precisión y estilo entre sistemas de IA — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large y otros — sin cambiar pestañas ni repetir la entrada.</p>
              </div>
              <p className="text-text-secondary mb-3">Ningún modelo de IA individual es autoritativo para todas las tareas en 2026. GPT-4o, Claude 4.6 Sonnet y Gemini 2.5 Pro tienen datos de entrenamiento, sesgos arquitectónicos y fortalezas de razonamiento diferentes. Una respuesta que parece correcta de un modelo puede ser contradicha, matizada o significativamente ampliada por otro.</p>
              <p className="text-text-secondary">Las cinco herramientas comparadas aquí representan los principales enfoques disponibles actualmente: plataformas de consumo (Poe by Quora), benchmarks comunitarios (LM Arena), suites de evaluación para desarrolladores (OpenMark), espacios de trabajo multi-modelo unificados (AiZolo) y plataformas de puntuación de consenso (PromptQuorum). Cada una sirve a un flujo de trabajo diferente.</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-2">¿Cuáles son las diferencias clave entre 5 herramientas multi-LLM?</h3>
              <p className="text-text-secondary mb-4">La siguiente tabla compara las cinco herramientas en las características más importantes para flujos de trabajo multi-LLM profesionales — envío simultáneo, puntuación de consenso, soporte de LLM local, control de clave de API y precios.</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-semibold text-xs uppercase tracking-wider">Herramienta</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Envío simultáneo</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Puntuación de consenso</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">LLM local</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Control de clave API</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider">Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">PromptQuorum</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Sí</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Quorum Verdict</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Ollama + LM Studio</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Tus claves</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Beta gratuita</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">Poe (Quora)</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Secuencial / limitado</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ No</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Solo nube</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Limitado</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Gratis / $19,99/mes</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">LM Arena</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Solo 2 modelos</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Solo votación humana</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Solo nube</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ No</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Gratis</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">OpenMark</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Paralelo</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Puntuación determinista</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Solo nube</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Sí</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Nivel gratuito / créditos</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">AiZolo</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Sí</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ No</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Solo nube</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Sí</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Desde $9,90/mes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs font-mono text-text-secondary mt-3">✓ Sí · ~ Parcial · ✗ No · Basado en documentación pública, marzo 2026. Los precios y características cambian — verifica con cada proveedor. Esta comparación es producida por PromptQuorum.</p>
            </div>

            <div className="mb-10">
              <div className="border border-primary/25 bg-primary/5 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-primary">PromptQuorum</span>
                  <span className="text-xs font-mono bg-green-100 text-green-700 border-green-200 border px-3 py-1 rounded-full">Ideal para: desarrolladores y usuarios avanzados</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Beta · Julio 2026</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">promptquorum.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Claves API requeridas</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Ollama + LM Studio</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>PromptQuorum es la única herramienta entre las revisadas que combina el envío simultáneo de prompts con la puntuación de consenso automatizada.</strong> Escribes un prompt, seleccionas tus modelos — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large y modelos que se ejecutan localmente — y PromptQuorum los envía a todos en paralelo. El Quorum Verdict analiza entonces dónde los modelos coinciden, dónde divergen y qué significan esos patrones para la fiabilidad de la respuesta.</p>
<p className="text-text-secondary mb-3 leading-relaxed">La característica definitoria es el soporte de LLM local. A través de la integración con Ollama y LM Studio, PromptQuorum incluye modelos que se ejecutan localmente — LLaMA 3.1 7B requiere 8 GB de RAM; 13B requiere 16 GB — en el envío, por lo que los prompts sensibles nunca salen de tu máquina. Para profesionales del derecho, trabajadores sanitarios, analistas financieros y desarrolladores que trabajan con código propietario, esto no es opcional.</p>
<p className="text-text-secondary leading-relaxed">PromptQuorum requiere que los usuarios traigan sus propias claves de API de OpenAI, Anthropic, Google y Mistral. Esto mantiene los datos bajo tu control, los costes transparentes y el uso vinculado a tus propios términos comerciales con cada proveedor.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">¿Quién debería usar PromptQuorum?</h4>
              <p className="text-text-secondary mb-8">PromptQuorum está diseñado para desarrolladores que evalúan qué modelo integrar en un pipeline de producción, investigadores que necesitan validación cruzada de hallazgos entre modelos y profesionales cuyo trabajo involucra información confidencial que no puede enviarse a servidores en la nube de terceros.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">Poe (by Quora)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">Ideal para: uso casual / consumidor</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">poe.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Gratis / $19,99/mes</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">iOS, Android, Web</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Millones de usuarios</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>Poe, creado por Quora, es la plataforma multi-modelo de IA más grande con acceso a GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Llama, Grok y miles de bots creados por usuarios desde una sola interfaz.</strong> Es la mejor opción para usuarios que quieren acceso amplio a modelos de IA sin gestionar claves de API.</p>
<p className="text-text-secondary leading-relaxed">Poe no ofrece envío simultáneo — los usuarios cambian entre modelos o comparan dos a la vez, en lugar de enviar un prompt a todos los modelos en paralelo. No hay puntuación de consenso ni análisis automatizado de concordancia de respuestas. Todo el procesamiento es en la nube, lo que lo hace inadecuado para trabajo con información sensible.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">Poe vs PromptQuorum: diferencias clave</h4>
              <p className="text-text-secondary mb-8">Poe es mejor para la exploración casual, el descubrimiento de bots y la conversación sin gestión de claves de API. PromptQuorum es mejor para la evaluación controlada de prompts, el análisis de consenso y los flujos de trabajo con LLM local. Abordan casos de uso fundamentalmente diferentes: Poe es una plataforma de consumo; PromptQuorum es una herramienta de evaluación profesional.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">LM Arena (lmarena.ai)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">Ideal para: benchmarking comunitario</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">lmarena.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Gratis</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Solo web</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Sistema de votación humana</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>LM Arena (antes Chatbot Arena) es el leaderboard de modelos de IA más citado, utilizando ratings Elo derivados de millones de votos de preferencia humana.</strong> Los usuarios envían prompts y votan cuál de dos modelos anónimos produjo la mejor respuesta.</p>
<p className="text-text-secondary leading-relaxed">LM Arena muestra dos modelos en paralelo y recoge un voto de preferencia humana — no proporciona análisis de consenso automatizado, no admite LLMs locales y no permite seleccionar modelos específicos en el modo de comparación principal. Es una plataforma de benchmarking, no una herramienta de flujo de trabajo.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">LM Arena vs PromptQuorum: diferencias clave</h4>
              <p className="text-text-secondary mb-8">LM Arena es mejor para entender las tendencias agregadas de preferencia humana en la industria. PromptQuorum es mejor para evaluar tus prompts específicos en tus modelos elegidos con un análisis consistente y automatizado. LM Arena te dice qué prefiere la multitud; PromptQuorum te dice qué produce tu prompt en cada modelo que te importa.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">OpenMark (openmark.ai)</span>
                  <span className="text-xs font-mono bg-green-50 text-green-700 border-green-200 border px-3 py-1 rounded-full">Ideal para: análisis de coste/calidad</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">openmark.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Nivel gratuito / créditos</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Más de 100 modelos</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Puntuación determinista</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>OpenMark es una herramienta de benchmarking orientada a desarrolladores que ejecuta prompts contra más de 100 modelos de IA simultáneamente y puntúa los resultados de manera determinista — el mismo prompt siempre produce el mismo resultado clasificado.</strong> Muestra exactamente cuánto cuesta cada modelo por prompt junto con las puntuaciones de calidad.</p>
<p className="text-text-secondary leading-relaxed">OpenMark es sólido en amplitud (100+ modelos) y transparencia de costes, pero no produce un veredicto de consenso — puntúa cada modelo individualmente en lugar de analizar patrones de acuerdo. No admite LLMs locales a través de Ollama o LM Studio.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">OpenMark vs PromptQuorum: diferencias clave</h4>
              <p className="text-text-secondary mb-8">OpenMark responde "qué modelo individual funciona mejor para esta tarea y a qué coste". PromptQuorum responde "¿cuánto coinciden los modelos en este prompt y qué significa su desacuerdo?". Ambos requieren claves de API; OpenMark admite 100+ modelos; PromptQuorum añade de forma única inferencia de LLM local y puntuación de consenso.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">AiZolo (aizolo.com)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">Ideal para: equipos de contenido</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">aizolo.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Desde $9,90/mes</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">GPT-4o, Claude, Gemini, Grok</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Biblioteca de prompts</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>AiZolo es un espacio de trabajo multi-modelo unificado diseñado para creadores de contenido y equipos de marketing, con envío simultáneo a GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro y Grok en paralelo.</strong> A partir de marzo de 2026, los planes comenzaban desde $9,90/mes — verifica el precio actual en aizolo.com.</p>
<p className="text-text-secondary leading-relaxed">AiZolo no ofrece puntuación de consenso — muestra las respuestas en paralelo pero deja el análisis al usuario. Admite solo cuatro modelos en la nube, sin opción de LLM local. Es una herramienta de flujo de trabajo de producción de contenido, no una plataforma de evaluación técnica.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">AiZolo vs PromptQuorum: diferencias clave</h4>
              <p className="text-text-secondary mb-8">AiZolo es mejor para equipos de contenido que necesitan un espacio de trabajo de escritura multi-modelo asequible para uso diario. PromptQuorum es mejor para usuarios avanzados que necesitan análisis de consenso automatizado, privacidad con LLM local y acceso controlado por clave de API a un conjunto más amplio de modelos, incluidos sistemas de código abierto.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">¿Qué herramienta multi-LLM deberías usar?</h3>
              <div className="space-y-3">
                <div className="rounded-lg px-5 py-4 bg-primary/8 border border-primary/20">
                  <span className="font-semibold text-primary">Elige PromptQuorum</span>
                  <span className="text-text-secondary"> si necesitas puntuación de consenso entre modelos, soporte de LLM local para trabajo con información sensible o un flujo de evaluación controlado con tus propias claves de API.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Elige Poe</span>
                  <span className="text-text-secondary"> si quieres acceso fácil a GPT-4o, Claude 4.6 Sonnet, Gemini y miles de bots para conversación casual y exploración sin gestionar claves de API.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Elige LM Arena</span>
                  <span className="text-text-secondary"> si quieres contribuir o estudiar los datos de preferencia de modelos impulsados por la comunidad y los rankings Elo de la industria.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Elige OpenMark</span>
                  <span className="text-text-secondary"> si eres un desarrollador que selecciona un modelo para una aplicación de producción y necesitas puntuación de calidad determinista con datos de coste transparentes en más de 100 modelos.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Elige AiZolo</span>
                  <span className="text-text-secondary"> si eres un creador de contenido o profesional de marketing que necesita un espacio de trabajo multi-modelo asequible y bien diseñado para flujos de trabajo de escritura diarios.</span>
                </div>
              </div>
            </div>
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
