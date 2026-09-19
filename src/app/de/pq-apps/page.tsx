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
            <h2 className="text-2xl font-bold text-text-primary mb-2">So funktioniert es</h2>
            <p className="text-text-secondary mb-3">Ein 4-stufiger Workflow: strukturierten Prompt schreiben, mit eigenem LLM optimieren, an 25+ KI-Dienste senden und jede Antwort auf Konsens analysieren.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              Läuft vollständig in Ihrem Browser — kein PromptQuorum-Server sieht jemals Ihre Prompts oder API-Schlüssel
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
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Schreiben</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Ihren Prompt strukturieren</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Wählen Sie aus 9 integrierten Prompt-Engineering-Frameworks — oder erstellen Sie Ihr eigenes. Jedes Framework führt Sie durch die richtigen Felder für Ihre Aufgabe.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Single Prompt Line — schnelle, unstrukturierte Prompts</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CRAFT — Context, Role, Action, Format, Target</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CO-STAR — Gewinner des Singapore GPT-4-Wettbewerbs</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>RISEN — Unternehmensaufgaben mit sequenziellen Schritten</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>TRACE — wenn Sie Few-Shot-Beispiele benötigen</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>APE, SPECS, Google Prompt, RTF + 2 benutzerdefinierte Slots</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Ein Framework-Assistent hilft Ihnen, das richtige zu wählen, indem er fragt, was Sie erreichen möchten.
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
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Optimieren</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Mit eigenem LLM verfeinern</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Ihr verbundenes LLM wandelt die rohen Framework-Felder in einen präzisen Prompt um. Anschließend verfeinern Sie iterativ mit 8 Ein-Klick-Verfeinerungen — kein Prompt-Engineering-Fachwissen erforderlich.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Smart Temperature — erkennt automatisch faktische, ausgewogene oder kreative Absicht</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Versionsverlauf — jede Verfeinerung gespeichert, jederzeit rückgängig machen</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Qualitätsbewertung — 1–5 Sterne-Bewertung mit konkreten Verbesserungsvorschlägen</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Lernmodus — erklärt genau, warum jede Änderung vorgenommen wurde</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Kürzer fassen, Detail erweitern, In Schritte aufteilen, Vereinfachen, Qualitätskontrollen hinzufügen…</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Benutzerdefinierte Anweisung — Freitext-Verfeinerung in einfacher Sprache</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Ihr LLM. Ihr API-Schlüssel. Nichts läuft über PromptQuorum-Server.
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
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Senden</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Gleichzeitig an alle KIs senden</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Senden Sie den optimierten Prompt mit einem Klick an mehrere KI-Dienste. PromptQuorum lädt Ihren Prompt per URL in jedes Ziel vor — kein Kopieren und Einfügen.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Auto-Dispatch: ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral…</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Kopieren & Einfügen: Grok, Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All…</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Perplexity startet sofort — Prompt wird beim Laden automatisch übermittelt</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>2 benutzerdefinierte URL-Slots für jeden KI-Dienst, der nicht auf der Liste steht</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Optionaler letzter Verbesserungsdurchlauf durch Ihr LLM vor dem Senden</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Insgesamt 25+ Ziele</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Alle Browser-Tabs öffnen parallel. Alle Antworten in unter einer Minute sammeln.
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
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Herausfinden, womit alle KIs übereinstimmen</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Fügen Sie die Antworten zurück in PromptQuorum ein. Wählen Sie Ihre Analysetypen. Ihr LLM liest alle Antworten und synthetisiert das Wesentliche.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Konsens-Zusammenfassung — gemeinsame Themen und Übereinstimmungen über alle Modelle</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Widerspruchserkennung — wo Modelle abwichen, explizit markiert</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Halluzinationserkennung — markiert potenziell falsche Behauptungen</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Konfidenz-Scoring — Sicherheitsniveau pro Modell</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Beste Antwort Auswahl — wählt die stärkste Einzelantwort</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Gewichtete Zusammenführung — synthetisiert eine Hybrid-Antwort aus dem Besten aller</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Wenn 5 Modelle einer Antwort zustimmen, ist die Konfidenz viel höher als wenn 1 Modell allein antwortet.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">9 integrierte Prompt-Frameworks</h3>
              <p className="text-text-secondary mb-6">Jedes Framework strukturiert Ihre Eingabe anders. Ein Framework-Assistent hilft Ihnen bei der Auswahl — oder Sie können zwei vollständig benutzerdefinierte Frameworks erstellen.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary">Framework</th>
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">Felder</th>
                      <th className="text-left py-2 sm:py-3 font-semibold text-text-primary">Am besten für</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Single Prompt Line</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">—</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Schnelle, unstrukturierte Prompts</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">APE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Action · Purpose · Expectation</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Einfache 3-Felder-Brücke</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CRAFT</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Role · Action · Format · Target</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Kreatives Schreiben, allgemeiner Einsatz</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CO-STAR</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Objective · Style · Tone · Audience · Response</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Geschäftskommunikation, Marketing</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">SPECS</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Situation · Purpose · Expected Output · Context · Style</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Analyse und Forschung</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RISEN</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Instructions · Steps · End Goal · Narrowing</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Sequenzielle Unternehmensaufgaben</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">TRACE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Request · Action · Context · Example</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Wenn Beispiele benötigt werden</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Google Prompt</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Context · Persona</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Geschäftliche und professionelle Aufgaben</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RTF</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Task · Format</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Minimal — die 3 wirkungsvollsten Felder</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">13 Quorum-Analysetypen</h3>
              <p className="text-text-secondary mb-6">Frei kombinierbar. 2 oder alle 13 gleichzeitig ausführen. Jede Analyse wird von Ihrem verbundenen LLM betrieben, nicht von einem PromptQuorum-Server.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Synthese</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Konsens-Zusammenfassung
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Gewichtete Zusammenführung
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Atomare Faktenextraktion
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Vergleich</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Überlappungs-Mapping
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Widerspruchserkennung
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Konfidenz-Scoring
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Qualität</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Vollständigkeitsprüfung
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Halluzinationserkennung
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Redundanzelimination
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Empfehlungen</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Beste Antwort Auswahl
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Multi-Modell-Ensemble
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Kontrovers-Markierung
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-secondary/30 border border-primary/20 rounded-xl p-6">
                <div className="text-sm font-semibold text-text-primary mb-2">Ergebnisse in 6 Formaten exportieren</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.txt</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.md</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.json</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.csv</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.html</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.pdf</span>
                </div>
                <p className="text-xs text-text-muted mt-2">Mehrere Formate → als .zip-Archiv heruntergeladen. File System Access API für Ordnerauswahl (Chrome/Edge/Safari 16+).</p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-6">Schlüsselbegriffe</h3>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Multi-Modell-Dispatch</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Einen Prompt gleichzeitig mit einem Klick an 25+ KI-Modelle senden. PromptQuorum lädt Ihren Prompt per URL in jedes Ziel vor — kein Kopieren und Einfügen, alle Tabs öffnen parallel.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Quorum-Analyse</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Strukturierter Vergleich von Antworten mehrerer KI-Modelle zur Identifikation von Konsens, Widersprüchen und Konfidenzgraden. PromptQuorum bietet 13 Analysetypen, einschließlich Halluzinationserkennung und Beste-Antwort-Auswahl.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Konsens-Scoring</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Eine Vertrauensbewertung, die aus dem Übereinstimmungsgrad mehrerer Modellantworten abgeleitet wird. Höherer Konsens = höhere Zuverlässigkeit. Niedrigerer Konsens markiert Unsicherheitsbereiche oder potenzielle Halluzinationen.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Halluzinationserkennung</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Identifikation von Faktenbehauptungen, die nur in einem oder einer Minderheit von Modellen erscheinen, was auf potenzielle KI-Fabrikation hinweist. Der Abgleich mit 5+ unabhängigen Modellen reduziert die Rate unerkannter Halluzinationen drastisch.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">BYOM — Eigenes Modell mitbringen</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Verbinden Sie Ihre eigenen API-Schlüssel direkt mit KI-Anbietern. Schlüssel werden nur im localStorage Ihres Browsers gespeichert und verbinden sich direkt mit Anbietern — kein PromptQuorum-Server empfängt oder überträgt jemals Ihre Zugangsdaten.</dd>
                </div>
              </dl>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">Eigenes Modell mitbringen (BYOM)</h3>
              <p className="text-text-secondary mb-6">PromptQuorum ruft kein LLM mit eigenen Schlüsseln auf. Jeder Aufruf geht direkt von Ihrem Browser zu Ihrem gewählten Anbieter. Ihre API-Schlüssel bleiben im localStorage Ihres Browsers — nie an einen PromptQuorum-Server übertragen.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Cloud-APIs (eigenen Schlüssel mitbringen)</div>
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
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Lokal (kein API-Schlüssel erforderlich)</div>
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
                  <h3 className="font-semibold text-text-primary mb-2">Keine Telemetrie</h3>
                  <p className="text-text-secondary text-sm">Keine Analysen, kein Tracking, keine Datenerfassung. Nicht einmal anonyme Nutzungsstatistiken.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Keine Registrierung</h3>
                  <p className="text-text-secondary text-sm">Kein Konto erforderlich. Keine E-Mail. Keine Anmeldung. App öffnen und loslegen.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Läuft lokal</h3>
                  <p className="text-text-secondary text-sm">Desktop-App via Electron, mobil via Capacitor. Funktioniert vollständig offline mit einem lokalen LLM.</p>
                </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-3">Unsere Testmethodik</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">Leistungsangaben in PromptQuorum-Artikeln basieren auf kontrollierten Dispatch-Sitzungen mit PromptQuorum. Werden konkrete Zahlen zitiert (Prompt-Qualitätsscores, Temperaturvergleiche, Benchmark-Werte), handelt es sich um redaktionelle Tests oder öffentlich zugängliche Benchmark-Daten — nicht um PromptQuorum-eigene Messungen, sofern nicht ausdrücklich gekennzeichnet.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Prompt-Dispatch: Prompts werden gleichzeitig an die genannten Modelle per PromptQuorum-Einzel-Klick-Dispatch gesendet
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Stichprobengröße: Redaktionelle Tests umfassen mindestens 30 Prompts pro Bedingung, sofern nicht anders angegeben
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Auswertung: Antworten werden von mindestens 2 unabhängigen Bewertern im Blind-Review bewertet
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Drittanbieter-Benchmarks (HumanEval, SWE-bench, MBPP): aus offiziellen Modellpapieren oder Community-Leaderboards; Auswertungsdatum im Artikel angegeben
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Lokale Modelltest: auf Consumer-Hardware mit dem im Artikel genannten Quantisierungsgrad durchgeführt
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Offenlegung: Wo PromptQuorum-interne Tests zitiert werden, sind diese im Artikeltext als „Tested in PromptQuorum" gekennzeichnet
                </li>
              </ul>
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

            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed mb-8">
              <strong>Hinweis zur Genauigkeit:</strong>
               Funktions- und Preisinformationen wurden im März 2026 verifiziert und basieren auf der öffentlichen Dokumentation der jeweiligen Produkte zu diesem Zeitpunkt. Produkte ändern sich häufig — überprüfe die aktuellen Funktionen direkt beim jeweiligen Anbieter. Falls du glaubst, dass Informationen auf dieser Seite ungenau oder veraltet sind, 
              <a href="mailto:hello@promptquorum.com" className="underline hover:text-amber-900">kontaktiere uns</a>
               und wir korrigieren dies umgehend. Dieser Vergleich wird von PromptQuorum erstellt und spiegelt unsere Perspektive als Marktteilnehmer wider.
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-3">Was ist ein Multi-LLM-Vergleichstool?</h3>
              <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 mb-4">
                <p className="text-text-primary text-[15px] leading-relaxed">Ein Multi-LLM-Vergleichstool sendet denselben Prompt gleichzeitig an mehrere große Sprachmodelle und zeigt die Antworten nebeneinander an — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large und andere — damit Nutzer Unterschiede in Reasoning, Genauigkeit und Stil bewerten können, ohne Tabs zu wechseln oder Eingaben zu wiederholen.</p>
              </div>
              <p className="text-text-secondary mb-3">Im Jahr 2026 ist kein einzelnes KI-Modell für alle Aufgaben maßgeblich. GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro haben jeweils unterschiedliche Trainingsdaten, architektonische Schwerpunkte und Reasoning-Stärken. Eine Antwort, die von einem Modell korrekt erscheint, kann von einem anderen widerlegt, eingeschränkt oder erheblich erweitert werden.</p>
              <p className="text-text-secondary">Die fünf hier verglichenen Tools repräsentieren die wichtigsten verfügbaren Ansätze: Consumer-Plattformen (Poe von Quora), Community-Benchmarks (LM Arena), Entwickler-Evaluierungs-Suites (OpenMark), einheitliche Multi-Modell-Arbeitsbereiche (AiZolo) und Konsens-Scoring-Plattformen (PromptQuorum). Jedes dient einem anderen Anwendungsfall.</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-2">Welche sind die wichtigsten Unterschiede zwischen 5 Multi-LLM-Tools?</h3>
              <p className="text-text-secondary mb-4">Die folgende Tabelle vergleicht alle fünf Tools über die wichtigsten Funktionen für professionelle Multi-LLM-Workflows — simultanes Dispatching, Konsens-Scoring, lokale LLM-Unterstützung, API-Key-Kontrolle und Preisgestaltung.</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-semibold text-xs uppercase tracking-wider">Tool</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Simultanes Dispatching</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Konsens-Scoring</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Lokales LLM</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">API-Key-Kontrolle</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider">Preis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">PromptQuorum</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Yes</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Quorum Verdict</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Ollama + LM Studio</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Your keys</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Free beta</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">Poe (Quora)</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Sequential / limited</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ No</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Cloud only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Limited</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Free / $19.99/mo</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">LM Arena</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ 2 models only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Human voting only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Cloud only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ No</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Free</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">OpenMark</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Parallel</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Deterministic scoring</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Cloud only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Yes</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Free tier / credits</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">AiZolo</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Yes</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ No</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Cloud only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Yes</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">From $9.90/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs font-mono text-text-secondary mt-3">✓ Ja · ~ Teilweise · ✗ Nein · Basierend auf öffentlicher Dokumentation, März 2026. Preise und Funktionen ändern sich — beim jeweiligen Anbieter verifizieren. Dieser Vergleich wird von PromptQuorum erstellt.</p>
            </div>

            <div className="mb-10">
              <div className="border border-primary/25 bg-primary/5 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-primary">PromptQuorum</span>
                  <span className="text-xs font-mono bg-green-100 text-green-700 border-green-200 border px-3 py-1 rounded-full">Beste Wahl für: Entwickler & Power-User</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Beta · July 2026</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">promptquorum.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">API-Keys erforderlich</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Ollama + LM Studio</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>PromptQuorum ist das einzige Tool unter den hier geprüften, das simultanes Prompt-Dispatching mit automatischem Konsens-Scoring kombiniert.</strong> Du schreibst einen Prompt, wählst deine Modelle — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large und lokal laufende Modelle — und PromptQuorum dispatcht an alle parallel. Das Quorum Verdict analysiert dann, wo die Modelle übereinstimmen, wo sie divergieren und was diese Muster für die Verlässlichkeit der Antwort bedeuten.</p>
<p className="text-text-secondary mb-3 leading-relaxed">Das entscheidende Feature ist die lokale LLM-Unterstützung. Über Ollama- und LM Studio-Integration bindet PromptQuorum lokal laufende Modelle ein — LLaMA 3.1 7B benötigt 8 GB RAM, 13B 16 GB — sodass sensible Prompts das Gerät nie verlassen. Für Juristen, Mediziner, Finanzanalysten und Entwickler mit proprietärem Code ist das keine Option, sondern Pflicht.</p>
<p className="text-text-secondary leading-relaxed">PromptQuorum erfordert eigene API-Keys von OpenAI, Anthropic, Google und Mistral. Das hält Daten unter deiner Kontrolle, Kosten transparent und die Nutzung an deine eigenen Vertragskonditionen mit jedem Anbieter gebunden.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">Für wen ist PromptQuorum geeignet?</h4>
              <p className="text-text-secondary mb-8">PromptQuorum richtet sich an Entwickler, die bewerten, welches Modell in eine Produktionspipeline integriert werden soll, Forscher, die eine modellübergreifende Validierung von Ergebnissen benötigen, und Fachleute, deren Arbeit vertrauliche Informationen umfasst, die nicht an Drittserver übermittelt werden dürfen.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">Poe (by Quora)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">Beste Wahl für: Gelegenheitsnutzer / Consumer</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">poe.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Kostenlos / $19,99/Monat</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">iOS, Android, Web</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Millionen Nutzer</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>Poe, entwickelt von Quora, ist die größte Multi-Modell-KI-Plattform mit Zugang zu GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Llama, Grok und Tausenden nutzergenerierten Bots über eine Oberfläche.</strong> Es ist die beste Wahl für Nutzer, die einfachen Zugang zu mehreren KI-Modellen ohne API-Key-Verwaltung suchen.</p>
<p className="text-text-secondary leading-relaxed">Poe bietet kein echtes simultanes Dispatching — Nutzer wechseln zwischen Modellen oder vergleichen zwei gleichzeitig, anstatt einen Prompt parallel an alle zu senden. Es gibt kein Konsens-Scoring oder automatische Analyse der Antwortübereinstimmung. Alle Inferenz erfolgt cloudbasiert, was es für datenschutzsensible professionelle Anwendungsfälle ungeeignet macht.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">Poe vs PromptQuorum: Hauptunterschiede</h4>
              <p className="text-text-secondary mb-8">Poe ist besser für Gelegenheitsnutzung, Bot-Entdeckung und Unterhaltung ohne API-Key-Verwaltung. PromptQuorum ist besser für kontrollierte Prompt-Evaluation, Konsensanalyse und lokale LLM-Workflows. Sie adressieren grundlegend unterschiedliche Anwendungsfälle: Poe ist eine Consumer-Plattform; PromptQuorum ist ein professionelles Evaluierungstool.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">LM Arena (lmarena.ai)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">Beste Wahl für: Community-Benchmarking</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">lmarena.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Kostenlos</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Nur Web</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Human-Voting-System</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>LM Arena (früher Chatbot Arena) ist das meistzitierte KI-Modell-Leaderboard mit Elo-Ratings aus Millionen menschlicher Präferenzabstimmungen.</strong> Nutzer reichen Prompts ein und stimmen ab, welches von zwei anonymen Modellen die bessere Antwort lieferte.</p>
<p className="text-text-secondary leading-relaxed">LM Arena zeigt zwei Modelle nebeneinander und sammelt eine menschliche Präferenzabstimmung — es bietet keine automatische Konsensanalyse, unterstützt keine lokalen LLMs und erlaubt in der primären Vergleichsansicht keine Auswahl spezifischer Modelle. Es ist eine Benchmarking-Plattform, kein Workflow-Tool.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">LM Arena vs PromptQuorum: Hauptunterschiede</h4>
              <p className="text-text-secondary mb-8">LM Arena ist besser zum Verstehen aggregierter menschlicher Präferenztrends in der Branche. PromptQuorum ist besser für die Evaluierung spezifischer Prompts über gewählte Modelle mit konsistenter, automatisierter Analyse. LM Arena zeigt dir, was die Community bevorzugt; PromptQuorum zeigt dir, was dein Prompt bei jedem relevanten Modell produziert.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">OpenMark (openmark.ai)</span>
                  <span className="text-xs font-mono bg-green-50 text-green-700 border-green-200 border px-3 py-1 rounded-full">Beste Wahl für: Kosten-/Qualitätsanalyse</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">openmark.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Kostenlose Stufe / Credits</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">100+ Modelle</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Deterministisches Scoring</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>OpenMark ist ein entwicklerorientiertes Benchmarking-Tool, das Prompts gleichzeitig gegen 100+ KI-Modelle ausführt und Ergebnisse deterministisch bewertet — derselbe Prompt erzeugt immer dieselbe Rangfolge.</strong> Es zeigt genau, was jedes Modell pro Prompt kostet, neben Qualitätsbewertungen.</p>
<p className="text-text-secondary leading-relaxed">OpenMark ist stark in Breite (100+ Modelle) und Kostentransparenz, produziert aber kein Konsensurteil — es bewertet jedes Modell einzeln statt Übereinstimmungsmuster zu analysieren. Lokale LLMs über Ollama oder LM Studio werden nicht unterstützt.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">OpenMark vs PromptQuorum: Hauptunterschiede</h4>
              <p className="text-text-secondary mb-8">OpenMark beantwortet "Welches einzelne Modell liefert die beste Leistung für diese Aufgabe und zu welchen Kosten?" PromptQuorum beantwortet "Wie stark stimmen die Modelle bei diesem Prompt überein, und was bedeutet ihre Abweichung?" Beide erfordern API-Keys; OpenMark unterstützt 100+ Modelle; PromptQuorum ergänzt einzigartig lokale LLM-Inferenz und Konsens-Scoring.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">AiZolo (aizolo.com)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">Beste Wahl für: Content-Teams</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">aizolo.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Ab $9,90/Monat</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">GPT-4o, Claude, Gemini, Grok</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Prompt-Bibliothek</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>AiZolo ist ein einheitlicher Multi-Modell-Arbeitsbereich für Content-Creator und Marketing-Teams mit simultanem Dispatching an GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro und Grok nebeneinander.</strong> Stand März 2026 starteten die Preise ab $9,90/Monat — aktuelle Preise bei aizolo.com prüfen.</p>
<p className="text-text-secondary leading-relaxed">AiZolo bietet kein Konsens-Scoring — es zeigt Antworten nebeneinander, überlässt die Analyse aber dem Nutzer. Es unterstützt nur vier Cloud-Modelle ohne lokale LLM-Option. Es ist ein Content-Produktions-Workflow-Tool, kein technisches Evaluierungstool.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">AiZolo vs PromptQuorum: Hauptunterschiede</h4>
              <p className="text-text-secondary mb-8">AiZolo ist besser für Content-Teams, die einen erschwinglichen Multi-Modell-Schreibarbeitsbereich für den täglichen Einsatz benötigen. PromptQuorum ist besser für Power-User, die automatische Konsensanalyse, lokale LLM-Privatsphäre und API-Key-kontrollierten Zugang zu einem breiteren Modell-Set einschließlich Open-Weight-Systemen benötigen.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">Welches Multi-LLM-Tool solltest du verwenden?</h3>
              <div className="space-y-3">
                <div className="rounded-lg px-5 py-4 bg-primary/8 border border-primary/20">
                  <span className="font-semibold text-primary">Wähle PromptQuorum</span>
                  <span className="text-text-secondary"> wenn du Konsens-Scoring über Modelle, lokale LLM-Unterstützung für datenschutzsensible Arbeit oder einen kontrollierten Evaluierungs-Workflow mit eigenen API-Keys benötigst.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Wähle Poe</span>
                  <span className="text-text-secondary"> wenn du einfachen Zugang zu GPT-4o, Claude 4.6 Sonnet, Gemini und Tausenden von Bots für Gelegenheitsgespräche ohne API-Key-Verwaltung möchtest.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Wähle LM Arena</span>
                  <span className="text-text-secondary"> wenn du zu Community-gesteuerten Modellpräferenz-Daten und Elo-Rankings beitragen oder diese studieren möchtest.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Wähle OpenMark</span>
                  <span className="text-text-secondary"> wenn du als Entwickler ein Modell für eine Produktionsanwendung auswählst und deterministisches Qualitäts-Scoring mit transparenten Kostendaten über 100+ Modelle benötigst.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Wähle AiZolo</span>
                  <span className="text-text-secondary"> wenn du Content-Creator oder Marketing-Profi bist und einen günstigen, gut gestalteten Arbeitsbereich für tägliche Multi-Modell-Schreib-Workflows benötigst.</span>
                </div>
              </div>
            </div>
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
