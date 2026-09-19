import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

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
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Precios</div>
                  <div className="text-text-primary font-medium">Gratis. Usa tu propia clave API.</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Modelo de privacidad</div>
                  <div className="text-text-primary font-medium">BYOM — cero transmisión al servidor</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Modelos de IA compatibles</div>
                  <div className="text-text-primary font-medium">25+ en la nube + ilimitados en local vía Ollama</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Frameworks de prompts</div>
                  <div className="text-text-primary font-medium">9 integrados + 2 espacios personalizados</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Tipos de análisis Quorum</div>
                  <div className="text-text-primary font-medium">13, incluida la detección de alucinaciones</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Soporte sin conexión</div>
                  <div className="text-text-primary font-medium">Completo — vía Ollama, LM Studio, Jan AI</div>
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
