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
            <h2 className="text-2xl font-bold text-text-primary mb-6">Comment ça marche</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">1</div>
                <div className="text-text-primary font-semibold mb-1">Rédigez votre prompt structuré</div>
                <div className="text-sm text-text-secondary">Commencez avec l'un des 9 frameworks intégrés — CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google Prompt, RTF ou Single Prompt Line.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2</div>
                <div className="text-text-primary font-semibold mb-1">Optimisez avec votre propre LLM</div>
                <div className="text-sm text-text-secondary">Vous pouvez éventuellement affiner la structure et la formulation de votre prompt via votre LLM connecté avant l'envoi.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">3</div>
                <div className="text-text-primary font-semibold mb-1">Envoyez à plus de 25 modèles d'IA</div>
                <div className="text-sm text-text-secondary">Un seul clic ouvre toutes les destinations en parallèle — GPT-4o, Claude, Gemini, Grok, DeepSeek, Mistral et plus, ainsi que des modèles locaux via Ollama.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">4</div>
                <div className="text-text-primary font-semibold mb-1">Lancez l'analyse Quorum</div>
                <div className="text-sm text-text-secondary">Comparez les réponses avec 13 types d'analyse — détection d'hallucinations, détection de contradictions, résumé de consensus et plus.</div>
              </div>
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
