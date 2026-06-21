import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'de'
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

export default function DeAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              'url': 'https://www.promptquorum.com/de/about',
              'name': 'Über PromptQuorum',
              'description': 'PromptQuorum ist ein datenschutzorientiertes Multi-Modell-KI-Versand- und Konsenswerkzeug, entwickelt von Hans Kuepper.',
              'inLanguage': 'de',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://www.promptquorum.com/de/about#founder',
              'name': 'Hans Kuepper',
              'url': 'https://www.promptquorum.com/de/about',
              'jobTitle': 'Gründer & Entwickler',
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
                { '@type': 'ListItem', 'position': 1, 'name': 'Startseite', 'item': 'https://www.promptquorum.com/de' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Über uns', 'item': 'https://www.promptquorum.com/de/about' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Über uns</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Für Menschen gebaut, die ihren KI-Antworten vertrauen müssen.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              PromptQuorum ist ein Multi-Modell-KI-Versand- und Konsenswerkzeug. Ein Prompt an jedes Modell.
              Ein Urteil, dem du wirklich vertrauen kannst.
            </p>
          </div>

          {/* Founder */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Der Entwickler</h2>
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">HK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">Hans Kuepper</h3>
                  <p className="text-sm text-primary font-medium mb-4">Gründer &amp; Entwickler, PromptQuorum</p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">Hintergrund</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Hans lebt in Baden-Württemberg, Deutschland, in der Nähe von Heidelberg im Kraichgau.
                    Er ist ein mehrsprachiger unabhängiger Entwickler, der Deutsch, Englisch, Französisch und Russisch fließend spricht.
                    In den vergangenen zwei Jahrzehnten hat er in mehr als 20 Ländern in Europa, Asien und darüber hinaus gelebt und gearbeitet
                    und mit verteilten Teams zusammengearbeitet sowie Werkzeuge für globale Zielgruppen entwickelt.
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">Warum PromptQuorum</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    PromptQuorum entstand aus einer einfachen Frustration: Wenn du eine zuverlässige Antwort brauchst,
                    reicht eine Anfrage an ein KI-Modell nicht aus. Verschiedene Modelle halluzinieren auf unterschiedliche Weise,
                    machen unterschiedliche Fehler und sind bei unterschiedlichen Denkaufgaben erfolgreich. Die Wahrheit liegt in der
                    Überlappung — wenn fünf unabhängige Modelle einer Antwort zustimmen, ist das Vertrauen dramatisch höher als wenn ein
                    einzelnes Modell allein antwortet.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Bevor er PromptQuorum entwickelte, arbeitete Hans jahrelang mit KI-Workflows in Unternehmen und sah immer wieder
                    dasselbe Problem: Teams und Organisationen, die Einzelmodell-Ausgaben für hochriskante Entscheidungen vertrauten —
                    Personalentscheidungen, medizinische Forschungszusammenfassungen, Rechtsanalysen, Risikobewertungen — ohne eine
                    Verifizierungsschicht oder einen Konsensmechanismus. Hochriskante Entscheidungen verdienen Besseres.
                    PromptQuorum ist das Werkzeug, das er sich gewünscht hat.
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">Philosophie</h4>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Hans ist der Überzeugung, dass Datenschutz und Nutzerhoheit in KI-Werkzeugen nicht verhandelbar sind.
                    PromptQuorum basiert auf einem einfachen Prinzip: Deine Prompts, deine API-Schlüssel und deine Antworten gehören dir.
                    Das Werkzeug erleichtert den Konsens und Vergleich zwischen KI-Modellen, aber nichts läuft über PromptQuorums Server.
                    Du hast die Kontrolle.
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
            <h2 className="text-2xl font-bold text-text-primary mb-6">Warum PromptQuorum existiert</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Jedes große KI-Modell halluziniert. GPT-4o, Claude, Gemini — sie alle erfinden Fakten,
                verpassen Kontext und liefern selbstsicher klingende falsche Antworten. Der Unterschied ist, <em>welche</em> Fakten
                jedes falsch macht und <em>wann</em>.
              </p>
              <p>
                Wenn fünf unabhängige Modelle einer Antwort zustimmen, ist die Wahrscheinlichkeit, dass alle fünf dasselbe
                spezifische Detail erfunden haben, dramatisch niedriger als wenn ein einzelnes Modell allein antwortet.
                Konsens ist ein Zuverlässigkeitssignal. PromptQuorum macht es einfach, dieses Signal zu sammeln.
              </p>
              <p>
                Das zweite Problem ist Datenschutz. Die meisten KI-Werkzeuge leiten deine Prompts durch ihre eigenen Server.
                PromptQuorum tut das nicht. Deine API-Schlüssel verbinden sich direkt von deinem Browser zu deinen gewählten
                Anbietern. Nichts läuft über PromptQuorum-Infrastruktur — nicht deine Prompts,
                nicht deine API-Schlüssel, nicht deine Antworten.
              </p>
            </div>
          </section>

          {/* Product facts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Das Produkt</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Start', value: 'Beta — Juli 2026' },
                { label: 'Preise', value: 'Kostenlos. Bring deinen eigenen API-Schlüssel mit.' },
                { label: 'Datenschutzmodell', value: 'BYOM — keine Serverübertragung' },
                { label: 'Unterstützte KI-Modelle', value: '25+ Cloud + unbegrenzt lokal über Ollama' },
                { label: 'Prompt-Frameworks', value: '9 integrierte + 2 eigene Slots' },
                { label: 'Quorum-Analysetypen', value: '13, einschließlich Halluzinationserkennung' },
                { label: 'Offline-Unterstützung', value: 'Vollständig — über Ollama, LM Studio, Jan AI' },
                { label: 'Registrierung erforderlich', value: 'Keine. App öffnen und loslegen.' },
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
            <h2 className="text-2xl font-bold text-text-primary mb-4">Kontakt</h2>
            <p className="text-text-secondary mb-4">
              Für Presseanfragen, Partnerschaftsvorschläge oder Feedback:
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
            <Link href="/de" className="text-primary hover:text-primary/80 font-medium text-sm">← Startseite</Link>
            <Link href="/de/how-it-works" className="text-primary hover:text-primary/80 font-medium text-sm">So funktioniert&apos;s</Link>
            <Link href="/de/compare" className="text-primary hover:text-primary/80 font-medium text-sm">Tools vergleichen</Link>
            <Link href="/de/blog" className="text-primary hover:text-primary/80 font-medium text-sm">Blog</Link>
          </div>

        </div>
      </div>
    </>
  )
}
