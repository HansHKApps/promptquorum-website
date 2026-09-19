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
    description: "Découvrez comment fonctionne l'application PromptQuorum : rédigez des prompts avec des frameworks intégrés, envoyez-les à plus de 25 modèles d'IA et comparez les résultats avec l'analyse Quorum.",
    alternates: generateAlternates('/pq-apps', 'fr', true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: 'PQ Apps — PromptQuorum',
      description: "Découvrez comment fonctionne l'application PromptQuorum : rédigez des prompts avec des frameworks intégrés, envoyez-les à plus de 25 modèles d'IA et comparez les résultats avec l'analyse Quorum.",
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PQ Apps — PromptQuorum',
      description: "Découvrez comment fonctionne l'application PromptQuorum : rédigez des prompts avec des frameworks intégrés, envoyez-les à plus de 25 modèles d'IA et comparez les résultats avec l'analyse Quorum.",
    },
  }
}

export default function FrPQAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'url': 'https://www.promptquorum.com/fr/pq-apps',
              'name': 'PQ Apps — PromptQuorum',
              'description': "Découvrez comment fonctionne l'application PromptQuorum : rédigez des prompts avec des frameworks intégrés, envoyez-les à plus de 25 modèles d'IA et comparez les résultats avec l'analyse Quorum.",
              'inLanguage': 'fr',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Accueil', 'item': 'https://www.promptquorum.com/fr' },
                { '@type': 'ListItem', 'position': 2, 'name': 'PQ Apps', 'item': 'https://www.promptquorum.com/fr/pq-apps' },
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
              PromptQuorum, où que vous travailliez
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Un seul prompt, envoyé simultanément à plus de 25 modèles d'IA — avec prise en charge des LLMs locaux et analyse de consensus multi-modèles, le tout depuis votre navigateur.
            </p>
            <Link
              href="/fr/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Essayer la bêta
            </Link>
          </div>

          {/* How It Works */}
          <section id="how-it-works" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Comment ça marche</h2>
            <p className="text-text-secondary mb-3">Un workflow en 4 étapes : écrire un prompt structuré, l'optimiser avec votre propre LLM, l'envoyer à 25+ services IA, puis analyser chaque réponse pour trouver le consensus.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              Fonctionne entièrement dans votre navigateur — aucun serveur PromptQuorum ne voit jamais vos prompts ou clés API
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
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Écrire</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Structurer votre prompt</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Choisissez parmi 9 frameworks de prompt engineering intégrés — ou créez le vôtre. Chaque framework vous guide à travers les bons champs pour votre tâche.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Single Prompt Line — prompts rapides et non structurés</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CRAFT — Context, Role, Action, Format, Target</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CO-STAR — vainqueur du concours Singapore GPT-4</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>RISEN — tâches entreprise avec étapes séquentielles</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>TRACE — quand vous avez besoin d'exemples few-shot</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>APE, SPECS, Google Prompt, RTF + 2 slots personnalisés</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Un assistant de framework vous aide à choisir le bon en vous demandant ce que vous essayez de faire.
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
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Optimiser</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Affiner avec votre propre LLM</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Votre LLM connecté transforme les champs bruts du framework en un prompt de précision. Vous affinez ensuite itérativement avec 8 raffinements en un clic — aucune expertise en prompt engineering requise.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Smart Temperature — détecte automatiquement l'intention factuelle, équilibrée ou créative</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Historique des versions — chaque raffinement sauvegardé, revertible à tout moment</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Évaluation de qualité — notation 1–5 étoiles avec suggestions d'amélioration spécifiques</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Mode enseignement — explique exactement pourquoi chaque changement a été effectué</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Rendre concis, Développer les détails, Décomposer en étapes, Simplifier, Ajouter des contrôles qualité…</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Instruction personnalisée — raffinement en texte libre en langage naturel</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Votre LLM. Votre clé API. Rien ne passe par les serveurs PromptQuorum.
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
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Envoyer</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Envoyer à toutes les IA en même temps</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Envoyez le prompt optimisé à plusieurs services IA en un clic. PromptQuorum pré-charge votre prompt dans chaque destination via URL — sans copier-coller.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Auto-dispatch : ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral…</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Copier-coller : Grok, Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All…</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Perplexity s'exécute immédiatement — prompt auto-soumis à l'arrivée</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>2 slots URL personnalisés pour tout service IA absent de la liste</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Passe d'amélioration finale optionnelle via votre LLM avant envoi</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>25+ destinations au total</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Tous les onglets du navigateur s'ouvrent en parallèle. Collectez toutes les réponses en moins d'une minute.
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
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Trouver ce sur quoi toutes les IA s'accordent</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Collez les réponses dans PromptQuorum. Choisissez vos types d'analyse. Votre LLM lit toutes les réponses et synthétise ce qui importe.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Résumé consensuel — thèmes et accords partagés entre tous les modèles</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Détection des contradictions — où les modèles ont divergé, signalé explicitement</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Détection des hallucinations — signale les affirmations potentiellement fausses</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Score de confiance — niveau de certitude par modèle</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Sélection de la meilleure réponse — choisit la réponse individuelle la plus solide</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Fusion pondérée — synthétise une réponse hybride tirant le meilleur de tous</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Quand 5 modèles s'accordent sur une réponse, la confiance est bien plus élevée que quand 1 seul modèle répond.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">9 frameworks de prompt intégrés</h3>
              <p className="text-text-secondary mb-6">Chaque framework structure votre saisie différemment. Un assistant de framework vous aide à choisir — ou vous pouvez créer deux frameworks entièrement personnalisés.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary">Framework</th>
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">Champs</th>
                      <th className="text-left py-2 sm:py-3 font-semibold text-text-primary">Idéal pour</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Single Prompt Line</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">—</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Prompts rapides et non structurés</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">APE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Action · Purpose · Expectation</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Pont simple à 3 champs</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CRAFT</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Role · Action · Format · Target</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Écriture créative, usage général</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CO-STAR</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Objective · Style · Tone · Audience · Response</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Communication professionnelle, marketing</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">SPECS</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Situation · Purpose · Expected Output · Context · Style</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Analyse et recherche</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RISEN</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Instructions · Steps · End Goal · Narrowing</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Tâches entreprise séquentielles</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">TRACE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Request · Action · Context · Example</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Quand des exemples sont nécessaires</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Google Prompt</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Context · Persona</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Tâches professionnelles</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RTF</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Task · Format</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Minimal — les 3 champs les plus impactants</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">13 types d'analyse Quorum</h3>
              <p className="text-text-secondary mb-6">Combinez librement. Lancez 2 ou les 13 en même temps. Chaque analyse est propulsée par votre LLM connecté, pas par un serveur PromptQuorum.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Synthèse</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Résumé consensuel
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Fusion pondérée
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Extraction de faits atomiques
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Comparaison</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Cartographie des chevauchements
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Détection des contradictions
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Score de confiance
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Qualité</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Vérification de complétude
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Détection des hallucinations
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Élimination des redondances
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Recommandations</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Sélection de la meilleure réponse
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Ensemble multi-modèles
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Signalement de controverse
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-secondary/30 border border-primary/20 rounded-xl p-6">
                <div className="text-sm font-semibold text-text-primary mb-2">Exporter les résultats en 6 formats</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.txt</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.md</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.json</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.csv</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.html</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.pdf</span>
                </div>
                <p className="text-xs text-text-muted mt-2">Plusieurs formats → téléchargés en archive .zip. API File System Access pour la sélection de dossier (Chrome/Edge/Safari 16+).</p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-6">Concepts Clés</h3>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Envoi Multi-Modèle</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Envoyer un prompt simultanément à 25+ modèles d'IA en un seul clic. PromptQuorum pré-charge votre prompt dans chaque destination via URL — sans copier-coller, tous les onglets s'ouvrent en parallèle.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Analyse Quorum</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Comparaison structurée des réponses de plusieurs modèles d'IA pour identifier consensus, contradictions et niveaux de confiance. PromptQuorum propose 13 types d'analyse dont la Détection des Hallucinations et la Sélection de la Meilleure Réponse.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Score de Consensus</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Une évaluation de confiance dérivée du degré d'accord entre plusieurs réponses de modèles. Consensus élevé = fiabilité élevée. Consensus faible signale des zones d'incertitude ou d'hallucination potentielle.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Détection des Hallucinations</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Identifier les affirmations factuelles apparaissant dans un seul ou une minorité de modèles, indiquant une possible fabrication par l'IA. Le recoupement avec 5+ modèles indépendants réduit drastiquement le taux d'hallucinations non détectées.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">BYOM — Apportez votre propre modèle</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Connectez vos propres clés API directement aux fournisseurs d'IA. Les clés sont stockées uniquement dans le localStorage de votre navigateur et se connectent directement aux fournisseurs — aucun serveur PromptQuorum ne reçoit ni ne transmet jamais vos identifiants.</dd>
                </div>
              </dl>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">Apportez votre propre modèle (BYOM)</h3>
              <p className="text-text-secondary mb-6">PromptQuorum n'appelle jamais aucun LLM avec ses propres clés. Chaque appel va directement de votre navigateur à votre fournisseur choisi. Vos clés API restent dans le localStorage de votre navigateur — jamais transmises à un serveur PromptQuorum.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">APIs Cloud (apportez votre clé)</div>
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
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Local (aucune clé API requise)</div>
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
                  <h3 className="font-semibold text-text-primary mb-2">Zéro télémétrie</h3>
                  <p className="text-text-secondary text-sm">Pas d'analyse, pas de tracking, pas de collecte de données. Pas même de stats d'usage anonymes.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Zéro inscription</h3>
                  <p className="text-text-secondary text-sm">Aucun compte requis. Pas d'email. Pas de connexion. Ouvrez l'app et commencez.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Fonctionne localement</h3>
                  <p className="text-text-secondary text-sm">App desktop via Electron, mobile via Capacitor. Fonctionne entièrement hors ligne avec un LLM local.</p>
                </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-3">Notre méthodologie de test</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">Les données de performance citées dans les articles PromptQuorum proviennent de sessions de dispatch contrôlées avec PromptQuorum. Lorsqu'un article cite des chiffres précis (scores de qualité, comparaisons de température, benchmarks), ceux-ci reflètent des tests éditoriaux ou des données de benchmark publiques — et non des mesures propriétaires PromptQuorum, sauf mention explicite.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Dispatch des prompts : envoi simultané aux modèles indiqués via le dispatch en un clic de PromptQuorum
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Taille d'échantillon : les tests éditoriaux utilisent au minimum 30 prompts par condition, sauf indication contraire
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Évaluation : les réponses sont notées par au moins 2 évaluateurs indépendants en double aveugle
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Benchmarks tiers (HumanEval, SWE-bench, MBPP) : issus des publications officielles des modèles ou de leaderboards communautaires ; date d'évaluation citée dans chaque article
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Tests de modèles locaux : exécutés sur du matériel grand public au niveau de quantification indiqué dans l'article
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Transparence : lorsque des tests internes PromptQuorum sont cités, ils sont identifiés par la mention « Tested in PromptQuorum » dans le corps de l'article
                </li>
              </ul>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Fonctionnalités</h2>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">Fonctionnalités clés en un coup d'œil</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">9 frameworks de prompt engineering (CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google, RTF)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Envoyez à 25+ modèles cloud simultanément (GPT-4o, Claude, Gemini, DeepSeek, et plus)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">13 types d'analyse de consensus Quorum dans 4 catégories (synthèse, comparaison, qualité, sélection)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Détection des hallucinations signale les affirmations qui n'apparaissent que dans un modèle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Support des LLM locaux : Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM, et compatibles OpenAI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Confidentialité d'abord : exécution entièrement hors ligne, aucune inscription requise, rien ne quitte votre appareil</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Comparaison instantanée des réponses côte à côte en temps réel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Optimisation automatique des prompts avec 8 techniques de raffinement pour une meilleure sortie IA</span>
              </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Optimisation des prompts</h3>
                <p className="text-text-secondary">Affinez et optimisez automatiquement vos prompts avec 8 techniques de raffinement éprouvées.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Dispatch multi-modèles</h3>
                <p className="text-text-secondary">Exécutez des prompts sur ChatGPT, Claude, Gemini et 25+ autres modèles simultanément en parallèle.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Score Quorum</h3>
                <p className="text-text-secondary">Trouvez des réponses consensuelles avec un score de confiance. Détectez les hallucinations instantanément.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Comparaison instantanée</h3>
                <p className="text-text-secondary">Voyez les réponses côte à côte en secondes. Fini les tests manuels entre onglets.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Confidentialité d'abord</h3>
                <p className="text-text-secondary">Option d'exécution locale. Aucune inscription requise. Contrôle total sur vos prompts.</p>
              </div>
            </div>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-8">
              <PromptOptimizerShowcase lang="fr" />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">Comment consultez-vous les résultats d'optimisation?</h3>
              <p className="text-text-secondary mb-6">Consultez les évaluations de qualité, l'historique des versions et les suggestions d'amélioration pour vos prompts optimisés.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <OptimizationShowcase lang="fr" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Contrôle de version</h4>
                  <p className="text-text-secondary text-sm">Suivez toutes les itérations de votre prompt. Revenez à des versions précédentes à tout moment ou créez une branche pour explorer différentes pistes d’optimisation.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Analyse de la qualité</h4>
                  <p className="text-text-secondary text-sm">Comprenez exactement pourquoi votre prompt a été amélioré. Obtenez un retour détaillé sur les points forts et les axes à affiner.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Raffinements intelligents</h4>
                  <p className="text-text-secondary text-sm">Appliquez des raffinements en un clic pour rendre votre prompt plus concis, clair, professionnel ou détaillé selon vos besoins.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Qu'est-ce que Quorum — Consensus multi-modèles?</h3>
              <p className="text-text-secondary mb-6">Collectez des réponses de 25+ modèles IA, analysez les patterns de consensus et synthétisez les insights selon différentes perspectives.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <QuorumShowcase lang="fr" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Collecter les réponses</h4>
                  <p className="text-text-secondary text-sm">Exécutez votre prompt sur ChatGPT, Claude, Gemini et plus de 25 autres modèles. Obtenez instantanément des perspectives et réponses variées.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Analyser les tendances</h4>
                  <p className="text-text-secondary text-sm">Identifiez ce sur quoi tous les modèles s'accordent (consensus), où ils divergent, et quelles réponses sont les plus pertinentes pour votre cas d'usage.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Synthétiser les enseignements</h4>
                  <p className="text-text-secondary text-sm">Combinez les points forts de plusieurs modèles pour obtenir de meilleures réponses. Exportez les résultats dans plusieurs formats pour une utilisation ultérieure.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Compare Tools */}
          <section id="compare-tools" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Comparer les outils</h2>

            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed mb-8">
              <strong>Note de précision :</strong>
               Les informations sur les fonctionnalités et les tarifs ont été vérifiées en mars 2026 et sont fournies de bonne foi sur la base de la documentation publique de chaque produit à cette date. Les produits évoluent fréquemment — vérifiez les capacités actuelles directement auprès de chaque fournisseur avant de prendre une décision. Si vous pensez que des informations sur cette page sont inexactes ou périmées, 
              <a href="mailto:hello@promptquorum.com" className="underline hover:text-amber-900">contactez-nous</a>
               et nous les corrigerons rapidement. Cette comparaison est produite par PromptQuorum et reflète notre perspective en tant que participant à ce marché.
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-3">Qu'est-ce qu'un outil de comparaison multi-LLM ?</h3>
              <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 mb-4">
                <p className="text-text-primary text-[15px] leading-relaxed">Un outil de comparaison multi-LLM envoie le même prompt à plusieurs grands modèles de langage simultanément et affiche les réponses côte à côte — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large et autres — permettant aux utilisateurs d'évaluer les différences de raisonnement, de précision et de style entre les systèmes d'IA sans changer d'onglet ni répéter la saisie.</p>
              </div>
              <p className="text-text-secondary mb-3">En 2026, aucun modèle d'IA n'est autoritaire pour toutes les tâches. GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro ont chacun des données d'entraînement, des biais architecturaux et des forces de raisonnement différents. Une réponse qui semble correcte d'un modèle peut être contredite, nuancée ou considérablement enrichie par un autre.</p>
              <p className="text-text-secondary">Les cinq outils comparés ici représentent les principales approches disponibles : plateformes grand public (Poe de Quora), benchmarks communautaires (LM Arena), suites d'évaluation développeurs (OpenMark), espaces de travail multi-modèles unifiés (AiZolo) et plateformes de scoring de consensus (PromptQuorum). Chacun sert un flux de travail différent.</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-2">Quelles sont les principales différences entre 5 outils multi-LLM ?</h3>
              <p className="text-text-secondary mb-4">Le tableau ci-dessous compare les cinq outils sur les fonctionnalités les plus importantes pour les flux de travail multi-LLM professionnels — dispatch simultané, scoring de consensus, support LLM local, contrôle des clés API et tarification.</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-semibold text-xs uppercase tracking-wider">Outil</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Dispatch simultané</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Scoring de consensus</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">LLM local</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Contrôle clés API</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider">Tarification</th>
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
              <p className="text-xs font-mono text-text-secondary mt-3">✓ Oui · ~ Partiel · ✗ Non · Basé sur la documentation publique, mars 2026. Les tarifs et fonctionnalités changent — vérifiez auprès de chaque fournisseur. Cette comparaison est produite par PromptQuorum.</p>
            </div>

            <div className="mb-10">
              <div className="border border-primary/25 bg-primary/5 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-primary">PromptQuorum</span>
                  <span className="text-xs font-mono bg-green-100 text-green-700 border-green-200 border px-3 py-1 rounded-full">Idéal pour : développeurs et power users</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Bêta · avril 2026</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">promptquorum.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Clés API requises</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Ollama + LM Studio</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>PromptQuorum est le seul outil parmi ceux examinés qui combine le dispatch simultané de prompts avec le scoring de consensus automatisé.</strong> Vous rédigez un prompt, sélectionnez vos modèles — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large et des modèles locaux — et PromptQuorum dispatche vers tous en parallèle. Le Quorum Verdict analyse ensuite où les modèles s'accordent, où ils divergent et ce que ces schémas signifient pour la fiabilité de la réponse.</p>
<p className="text-text-secondary mb-3 leading-relaxed">La fonctionnalité distinctive est le support LLM local. Via l'intégration Ollama et LM Studio, PromptQuorum intègre des modèles fonctionnant localement — LLaMA 3.1 7B nécessite 8 Go de RAM, 13B nécessite 16 Go — de sorte que les prompts sensibles ne quittent jamais votre machine. Pour les professionnels juridiques, les soignants, les analystes financiers et les développeurs travaillant avec du code propriétaire, c'est indispensable.</p>
<p className="text-text-secondary leading-relaxed">PromptQuorum exige que les utilisateurs apportent leurs propres clés API d'OpenAI, Anthropic, Google et Mistral. Cela maintient vos données sous votre contrôle, les coûts transparents et l'utilisation liée à vos propres conditions commerciales avec chaque fournisseur.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">Qui devrait utiliser PromptQuorum ?</h4>
              <p className="text-text-secondary mb-8">PromptQuorum est conçu pour les développeurs évaluant quel modèle intégrer dans un pipeline de production, les chercheurs qui ont besoin d'une validation croisée de leurs résultats et les professionnels dont le travail implique des informations confidentielles qui ne peuvent pas être envoyées à des serveurs tiers.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">Poe (by Quora)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">Idéal pour : utilisation décontractée / grand public</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">poe.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Gratuit / 19,99 $/mois</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">iOS, Android, Web</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Millions d'utilisateurs</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>Poe, développé par Quora, est la plus grande plateforme d'IA multi-modèles avec accès à GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Llama, Grok et des milliers de bots créés par les utilisateurs depuis une interface unique.</strong> C'est le meilleur choix pour les utilisateurs qui souhaitent un accès facile à plusieurs modèles d'IA sans gérer des clés API.</p>
<p className="text-text-secondary leading-relaxed">Poe ne propose pas de dispatch simultané au sens strict — les utilisateurs changent de modèle ou comparent deux à la fois, plutôt que de dispatcher un prompt vers tous en parallèle. Il n'y a pas de scoring de consensus ni d'analyse automatisée des accords de réponse. Toute l'inférence est basée sur le cloud, ce qui la rend inadaptée aux cas d'usage professionnels sensibles à la confidentialité.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">Poe vs PromptQuorum : différences clés</h4>
              <p className="text-text-secondary mb-8">Poe est meilleur pour l'exploration décontractée, la découverte de bots et la conversation sans gestion de clés API. PromptQuorum est meilleur pour l'évaluation contrôlée des prompts, l'analyse de consensus et les flux LLM locaux. Ils ciblent des cas d'utilisation fondamentalement différents : Poe est une plateforme grand public ; PromptQuorum est un outil d'évaluation professionnel.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">LM Arena (lmarena.ai)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">Idéal pour : benchmarking communautaire</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">lmarena.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Gratuit</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Web uniquement</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Système de vote humain</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>LM Arena (anciennement Chatbot Arena) est le classement de modèles d'IA le plus cité, avec des notes Elo dérivées de millions de votes de préférence humaine.</strong> Les utilisateurs soumettent des prompts et votent pour quel des deux modèles anonymes a produit la meilleure réponse.</p>
<p className="text-text-secondary leading-relaxed">LM Arena affiche deux modèles côte à côte et recueille un vote de préférence humain — il ne fournit pas d'analyse de consensus automatisée, ne prend pas en charge les LLM locaux et ne permet pas de sélectionner des modèles spécifiques dans le mode de comparaison principal. C'est une plateforme de benchmarking, pas un outil de flux de travail.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">LM Arena vs PromptQuorum : différences clés</h4>
              <p className="text-text-secondary mb-8">LM Arena est meilleur pour comprendre les tendances agrégées des préférences humaines dans l'industrie. PromptQuorum est meilleur pour évaluer vos prompts spécifiques sur vos modèles choisis avec une analyse cohérente et automatisée. LM Arena vous dit ce que la communauté préfère ; PromptQuorum vous dit ce que votre prompt produit sur chaque modèle qui vous intéresse.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">OpenMark (openmark.ai)</span>
                  <span className="text-xs font-mono bg-green-50 text-green-700 border-green-200 border px-3 py-1 rounded-full">Idéal pour : analyse coût/qualité</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">openmark.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Niveau gratuit / crédits</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">100+ modèles</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Scoring déterministe</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>OpenMark est un outil de benchmarking orienté développeurs qui exécute des prompts sur 100+ modèles d'IA simultanément et évalue les résultats de manière déterministe — le même prompt produit toujours le même classement.</strong> Il affiche exactement ce que chaque modèle coûte par prompt avec des scores de qualité.</p>
<p className="text-text-secondary leading-relaxed">OpenMark est fort en termes de largeur (100+ modèles) et de transparence des coûts, mais ne produit pas de verdict de consensus — il évalue chaque modèle individuellement plutôt que d'analyser les schémas d'accord. Il ne prend pas en charge les LLM locaux via Ollama ou LM Studio.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">OpenMark vs PromptQuorum : différences clés</h4>
              <p className="text-text-secondary mb-8">OpenMark répond à la question "Quel modèle unique est le plus performant pour cette tâche et à quel coût ?" PromptQuorum répond à "Dans quelle mesure les modèles s'accordent-ils sur ce prompt, et que signifie leur désaccord ?" Les deux nécessitent des clés API ; OpenMark prend en charge 100+ modèles ; PromptQuorum ajoute de manière unique l'inférence LLM locale et le scoring de consensus.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">AiZolo (aizolo.com)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">Idéal pour : équipes de contenu</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">aizolo.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">À partir de 9,90 $/mois</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">GPT-4o, Claude, Gemini, Grok</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Bibliothèque de prompts</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>AiZolo est un espace de travail multi-modèles unifié conçu pour les créateurs de contenu et les équipes marketing, avec dispatch simultané vers GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro et Grok côte à côte.</strong> En mars 2026, les plans démarraient à partir de 9,90 $/mois — vérifiez les tarifs actuels sur aizolo.com.</p>
<p className="text-text-secondary leading-relaxed">AiZolo ne propose pas de scoring de consensus — il affiche les réponses côte à côte mais laisse l'analyse à l'utilisateur. Il prend en charge uniquement quatre modèles cloud, sans option LLM locale. C'est un outil de flux de travail de production de contenu, pas une plateforme d'évaluation technique.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">AiZolo vs PromptQuorum : différences clés</h4>
              <p className="text-text-secondary mb-8">AiZolo est meilleur pour les équipes de contenu qui ont besoin d'un espace de travail multi-modèles abordable pour un usage quotidien. PromptQuorum est meilleur pour les power users qui ont besoin d'analyse de consensus automatisée, de confidentialité LLM locale et d'un accès contrôlé par clé API à un ensemble de modèles plus large incluant des systèmes open-weight.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">Quel outil multi-LLM devriez-vous utiliser ?</h3>
              <div className="space-y-3">
                <div className="rounded-lg px-5 py-4 bg-primary/8 border border-primary/20">
                  <span className="font-semibold text-primary">Choisissez PromptQuorum</span>
                  <span className="text-text-secondary"> si vous avez besoin de scoring de consensus entre modèles, de support LLM local pour les travaux sensibles à la confidentialité, ou d'un flux d'évaluation contrôlé avec vos propres clés API.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Choisissez Poe</span>
                  <span className="text-text-secondary"> si vous souhaitez un accès facile à GPT-4o, Claude 4.6 Sonnet, Gemini et des milliers de bots pour une conversation et une exploration décontractées sans gérer des clés API.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Choisissez LM Arena</span>
                  <span className="text-text-secondary"> si vous souhaitez contribuer à ou étudier les données de préférence de modèles pilotées par la communauté et les classements Elo dans l'industrie.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Choisissez OpenMark</span>
                  <span className="text-text-secondary"> si vous êtes un développeur sélectionnant un modèle pour une application de production et avez besoin d'un scoring de qualité déterministe avec des données de coût transparentes sur 100+ modèles.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Choisissez AiZolo</span>
                  <span className="text-text-secondary"> si vous êtes un créateur de contenu ou un professionnel du marketing qui a besoin d'un espace de travail abordable et bien conçu pour les flux de travail d'écriture multi-modèles quotidiens.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Repeat CTA */}
          <div className="text-center py-12 border-t border-primary/20">
            <Link
              href="/fr/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Essayer la bêta
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
