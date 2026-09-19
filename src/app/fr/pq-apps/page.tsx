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
            <p className="text-text-secondary mb-4">Découvrez comment PromptQuorum se compare à d'autres outils de prompt IA.</p>
            <Link href="/fr/compare" className="text-primary hover:text-primary/80 font-medium">
              Voir la comparaison complète →
            </Link>
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
