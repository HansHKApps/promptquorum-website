import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PQ Apps — PromptQuorum',
    description: 'So funktioniert die PromptQuorum-App: Prompts mit integrierten Frameworks schreiben, an 25+ KI-Modelle senden und Ergebnisse mit Quorum-Analyse vergleichen.',
    alternates: generateAlternates('/pq-apps', 'de', true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: 'PQ Apps — PromptQuorum',
      description: 'So funktioniert die PromptQuorum-App: Prompts mit integrierten Frameworks schreiben, an 25+ KI-Modelle senden und Ergebnisse mit Quorum-Analyse vergleichen.',
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PQ Apps — PromptQuorum',
      description: 'So funktioniert die PromptQuorum-App: Prompts mit integrierten Frameworks schreiben, an 25+ KI-Modelle senden und Ergebnisse mit Quorum-Analyse vergleichen.',
    },
  }
}

export default function DePQAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'url': 'https://www.promptquorum.com/de/pq-apps',
              'name': 'PQ Apps — PromptQuorum',
              'description': 'So funktioniert die PromptQuorum-App: Prompts mit integrierten Frameworks schreiben, an 25+ KI-Modelle senden und Ergebnisse mit Quorum-Analyse vergleichen.',
              'inLanguage': 'de',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Startseite', 'item': 'https://www.promptquorum.com/de' },
                { '@type': 'ListItem', 'position': 2, 'name': 'PQ Apps', 'item': 'https://www.promptquorum.com/de/pq-apps' },
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
              PromptQuorum, wo immer du arbeitest
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Ein Prompt, gleichzeitig an 25+ KI-Modelle gesendet — mit Unterstützung für lokale LLMs und Multi-Modell-Konsensanalyse, alles direkt aus deinem Browser.
            </p>
            <Link
              href="/de/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Beta testen
            </Link>
          </div>

          {/* How It Works */}
          <section id="how-it-works" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">So funktioniert es</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">1</div>
                <div className="text-text-primary font-semibold mb-1">Strukturierten Prompt schreiben</div>
                <div className="text-sm text-text-secondary">Starte mit einem von 9 integrierten Frameworks — CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google Prompt, RTF oder Single Prompt Line.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2</div>
                <div className="text-text-primary font-semibold mb-1">Mit deinem eigenen LLM optimieren</div>
                <div className="text-sm text-text-secondary">Optional kannst du Struktur und Formulierung deines Prompts vor dem Versand über dein verbundenes LLM verfeinern lassen.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">3</div>
                <div className="text-text-primary font-semibold mb-1">An 25+ KI-Modelle senden</div>
                <div className="text-sm text-text-secondary">Ein Klick öffnet alle Ziele parallel — GPT-4o, Claude, Gemini, Grok, DeepSeek, Mistral und mehr, plus lokale Modelle über Ollama.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">4</div>
                <div className="text-text-primary font-semibold mb-1">Quorum-Analyse durchführen</div>
                <div className="text-sm text-text-secondary">Vergleiche Antworten mit 13 Analysetypen — Halluzinationserkennung, Widerspruchserkennung, Konsens-Zusammenfassung und mehr.</div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Funktionen</h2>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Preise</div>
                  <div className="text-text-primary font-medium">Kostenlos. Bring deinen eigenen API-Schlüssel mit.</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Datenschutzmodell</div>
                  <div className="text-text-primary font-medium">BYOM — keine Serverübertragung</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Unterstützte KI-Modelle</div>
                  <div className="text-text-primary font-medium">25+ Cloud + unbegrenzt lokal über Ollama</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Prompt-Frameworks</div>
                  <div className="text-text-primary font-medium">9 integrierte + 2 eigene Slots</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Quorum-Analysetypen</div>
                  <div className="text-text-primary font-medium">13, einschließlich Halluzinationserkennung</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Offline-Unterstützung</div>
                  <div className="text-text-primary font-medium">Vollständig — über Ollama, LM Studio, Jan AI</div>
                </div>
            </div>
          </section>

          {/* Compare Tools */}
          <section id="compare-tools" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Tools vergleichen</h2>
            <p className="text-text-secondary mb-4">Sieh dir an, wie PromptQuorum im Vergleich zu anderen KI-Prompt-Tools abschneidet.</p>
            <Link href="/de/compare" className="text-primary hover:text-primary/80 font-medium">
              Vollständigen Vergleich ansehen →
            </Link>
          </section>

          {/* Repeat CTA */}
          <div className="text-center py-12 border-t border-primary/20">
            <Link
              href="/de/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Beta testen
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
