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
            <h2 className="text-2xl font-bold text-text-primary mb-6">Cómo funciona</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">1</div>
                <div className="text-text-primary font-semibold mb-1">Escribe tu prompt estructurado</div>
                <div className="text-sm text-text-secondary">Empieza con uno de los 9 frameworks integrados: CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google Prompt, RTF o Single Prompt Line.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2</div>
                <div className="text-text-primary font-semibold mb-1">Optimiza con tu propio LLM</div>
                <div className="text-sm text-text-secondary">Opcionalmente, puedes refinar la estructura y redacción de tu prompt mediante tu LLM conectado antes de enviarlo.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">3</div>
                <div className="text-text-primary font-semibold mb-1">Envía a más de 25 modelos de IA</div>
                <div className="text-sm text-text-secondary">Un clic abre todos los destinos en paralelo: GPT-4o, Claude, Gemini, Grok, DeepSeek, Mistral y más, además de modelos locales vía Ollama.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">4</div>
                <div className="text-text-primary font-semibold mb-1">Ejecuta el análisis Quorum</div>
                <div className="text-sm text-text-secondary">Compara las respuestas con 13 tipos de análisis: detección de alucinaciones, detección de contradicciones, resumen de consenso y más.</div>
              </div>
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
