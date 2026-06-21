import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'es'
  const t = translations[lang]

  return {
    title: t.aboutMetaTitle,
    description: t.aboutMetaDescription,
    alternates: generateAlternates('/about', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
    },
  }
}

export default function EsAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              'url': 'https://www.promptquorum.com/es/about',
              'name': 'Acerca de PromptQuorum',
              'description': 'PromptQuorum es una herramienta de distribución y consenso de IA multi-modelo centrada en la privacidad, desarrollada por Hans Kuepper.',
              'inLanguage': 'es',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://www.promptquorum.com/es/about#founder',
              'name': 'Hans Kuepper',
              'url': 'https://www.promptquorum.com/es/about',
              'jobTitle': 'Fundador y desarrollador',
              'worksFor': {
                '@type': 'Organization',
                'name': 'PromptQuorum',
                'url': 'https://www.promptquorum.com',
              },
              'sameAs': [
                'https://www.linkedin.com/in/hanskuepper/',
                'https://x.com/HansKuepperAPPs',
                'https://github.com/HansHKApps',
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.promptquorum.com/es' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Acerca de', 'item': 'https://www.promptquorum.com/es/about' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Acerca de</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Construido para personas que necesitan confiar en sus respuestas de IA.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              PromptQuorum es una herramienta de distribución y consenso de IA multi-modelo. Un prompt para cada modelo.
              Un veredicto en el que realmente puedes confiar.
            </p>
          </div>

          {/* Founder */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">El desarrollador</h2>
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">HK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">Hans Kuepper</h3>
                  <p className="text-sm text-primary font-medium mb-4">Fundador &amp; desarrollador, PromptQuorum</p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">Trayectoria</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Hans vive en Baden-Württemberg, Alemania, cerca de Heidelberg en el Kraichgau.
                    Es un desarrollador independiente multilingüe que habla alemán, inglés, francés y ruso con fluidez.
                    Durante las últimas dos décadas ha vivido y trabajado en más de 20 países de Europa, Asia y más allá,
                    colaborando con equipos distribuidos y desarrollando herramientas para audiencias globales.
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">Por qué PromptQuorum</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    PromptQuorum nació de una frustración simple: cuando necesitas una respuesta fiable,
                    consultar un solo modelo de IA no es suficiente. Los diferentes modelos alucinan de manera diferente,
                    cometen errores distintos y tienen éxito en diferentes tipos de razonamiento. La verdad está en la superposición —
                    cuando cinco modelos independientes coinciden en una respuesta, la confianza es considerablemente mayor
                    que cuando un solo modelo responde solo.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Antes de construir PromptQuorum, Hans pasó años trabajando con flujos de trabajo de IA empresarial
                    y vio repetidamente el mismo problema: equipos y organizaciones que confiaban en los resultados de un solo modelo
                    para decisiones de alto riesgo — decisiones de contratación, resúmenes de investigación médica, análisis legales,
                    evaluaciones de riesgo — sin ninguna capa de verificación ni mecanismo de consenso. Las decisiones de alto riesgo
                    merecen algo mejor. PromptQuorum es la herramienta que quería que existiera.
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">Filosofía</h4>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Hans cree que la privacidad y la autonomía del usuario deben ser innegociables en las herramientas de IA.
                    PromptQuorum se basa en un principio simple: tus prompts, tus claves API y tus respuestas te pertenecen.
                    La herramienta facilita el consenso y la comparación entre modelos de IA, pero nada pasa por los servidores de PromptQuorum.
                    Tú tienes el control.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.linkedin.com/in/hanskuepper/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://x.com/HansKuepperAPPs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      X / Twitter
                    </a>
                    <a
                      href="https://github.com/HansHKApps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://substack.com/@promptquorum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      Substack
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Por qué existe PromptQuorum</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Todos los grandes modelos de IA alucinan. GPT-4o, Claude, Gemini — todos fabrican hechos,
                pierden contexto y producen respuestas incorrectas que suenan convincentes. La diferencia es <em>qué</em> hechos
                inventa cada uno y <em>cuándo</em>.
              </p>
              <p>
                Cuando cinco modelos independientes coinciden en una respuesta, la probabilidad de que los cinco hayan fabricado
                el mismo detalle específico es considerablemente menor que cuando un solo modelo responde solo.
                El consenso es una señal de fiabilidad. PromptQuorum facilita la recopilación de esa señal.
              </p>
              <p>
                El segundo problema es la privacidad. La mayoría de las herramientas de IA enrutan tus prompts a través de sus propios servidores.
                PromptQuorum no lo hace. Tus claves API se conectan directamente desde tu navegador a tus proveedores elegidos.
                Nada pasa por la infraestructura de PromptQuorum — ni tus prompts,
                ni tus claves API, ni tus respuestas.
              </p>
            </div>
          </section>

          {/* Product facts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">El producto</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Lanzamiento', value: 'Beta — julio 2026' },
                { label: 'Precio', value: 'Gratis. Trae tu propia clave API.' },
                { label: 'Modelo de privacidad', value: 'BYOM — cero transmisión por servidor' },
                { label: 'Modelos de IA compatibles', value: '25+ en la nube + ilimitados en local vía Ollama' },
                { label: 'Frameworks de prompts', value: '9 integrados + 2 espacios personalizados' },
                { label: 'Tipos de análisis Quorum', value: '13, incluida la detección de alucinaciones' },
                { label: 'Soporte sin conexión', value: 'Completo — vía Ollama, LM Studio, Jan AI' },
                { label: 'Registro requerido', value: 'Ninguno. Abre la app y empieza.' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{label}</div>
                  <div className="text-text-primary font-medium">{value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Contacto</h2>
            <p className="text-text-secondary mb-4">
              Para consultas de prensa, propuestas de asociación o comentarios:
            </p>
            <a
              href="mailto:hello@promptquorum.com"
              className="text-primary hover:text-primary/80 font-medium"
            >
              hello@promptquorum.com
            </a>
          </section>

          {/* Nav */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-primary/20">
            <Link href="/es" className="text-primary hover:text-primary/80 font-medium text-sm">← Inicio</Link>
            <Link href="/es/how-it-works" className="text-primary hover:text-primary/80 font-medium text-sm">Cómo funciona</Link>
            <Link href="/es/compare" className="text-primary hover:text-primary/80 font-medium text-sm">Comparar herramientas</Link>
            <Link href="/es/blog" className="text-primary hover:text-primary/80 font-medium text-sm">Blog</Link>
          </div>

        </div>
      </div>
    </>
  )
}
