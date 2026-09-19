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

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">Wichtigste Funktionen auf einen Blick</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">9 Prompt-Engineering-Frameworks (CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google, RTF)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Versand an 25+ Cloud-Modelle gleichzeitig (GPT-4o, Claude, Gemini, DeepSeek und mehr)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">13 Quorum-Konsenstypen in 4 Kategorien (Synthese, Vergleich, Qualität, Auswahl)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Halluzinationserkennung markiert Aussagen, die nur in einem Modell oder nicht im Konsens vorkommen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Local LLM-Unterstützung: Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM und mehr</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Datenschutz zuerst: Vollständige Offline-Ausführung, keine Registrierung, nichts verlässt Ihr Gerät</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Sofortvergleich von Antworten über alle Modelle hinweg in Echtzeit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Automatische Prompt-Optimierung mit 8 Verfeinerungstechniken für bessere KI-Ausgaben</span>
              </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Prompt-Optimierung</h3>
                <p className="text-text-secondary">Verfeinern und optimieren Sie Ihre Prompts automatisch mit 8 bewährten Verfeinerungstechniken.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Multi-Modell-Dispatch</h3>
                <p className="text-text-secondary">Führen Sie Prompts gleichzeitig über ChatGPT, Claude, Gemini und 25+ weitere Modelle aus.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Quorum-Bewertung</h3>
                <p className="text-text-secondary">Finden Sie Konsensantworten über Modelle hinweg mit Konfidenz-Scoring. Halluzinationen sofort erkennen.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Sofortvergleich</h3>
                <p className="text-text-secondary">Sehen Sie nebeneinander liegende Antworten in Sekunden. Kein manuelles Testen in Browser-Tabs.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Datenschutz zuerst</h3>
                <p className="text-text-secondary">Lokale Ausführungsoption. Keine Registrierung erforderlich. Vollständige Kontrolle über Ihre Prompts.</p>
              </div>
            </div>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-8">
              <PromptOptimizerShowcase lang="de" />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">Wie überprüfen Sie Optimierungsergebnisse?</h3>
              <p className="text-text-secondary mb-6">Überprüfen Sie Qualitätsbewertungen, Versionsverlauf und Verbesserungsvorschläge für Ihre optimierten Prompts.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <OptimizationShowcase lang="de" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Versionskontrolle</h4>
                  <p className="text-text-secondary text-sm">Verfolge alle Iterationen deines Prompts. Kehre jederzeit zu früheren Versionen zurück oder verzweige, um verschiedene Optimierungspfade zu erkunden.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Qualitätseinblicke</h4>
                  <p className="text-text-secondary text-sm">Verstehe genau, warum dein Prompt verbessert wurde. Erhalte detailliertes Feedback zu Stärken und Verbesserungsbereichen.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Intelligente Verfeinerungen</h4>
                  <p className="text-text-secondary text-sm">Wende Verfeinerungen mit einem Klick an, um deinen Prompt prägnanter, klarer, professioneller oder detaillierter zu machen.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Was ist Quorum — Multi-Modell-Konsens?</h3>
              <p className="text-text-secondary mb-6">Sammeln Sie Antworten von 25+ KI-Modellen, analysieren Sie Konsensmuster und synthetisieren Sie Erkenntnisse aus verschiedenen Perspektiven.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <QuorumShowcase lang="de" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Antworten sammeln</h4>
                  <p className="text-text-secondary text-sm">Führe deinen Prompt über ChatGPT, Claude, Gemini und 25+ weitere Modelle aus. Erhalte sofort unterschiedliche Perspektiven und Antworten.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Muster analysieren</h4>
                  <p className="text-text-secondary text-sm">Erkenne, worauf sich alle Modelle einigen (Konsens), wo sie sich unterscheiden und welche Antworten für deinen Anwendungsfall am hochwertigsten sind.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Erkenntnisse synthetisieren</h4>
                  <p className="text-text-secondary text-sm">Kombiniere die Stärken mehrerer Modelle zu besseren Antworten. Exportiere Ergebnisse in mehreren Formaten zur Weiterverwendung.</p>
                </div>
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
