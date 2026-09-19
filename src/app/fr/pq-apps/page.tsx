import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

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
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Tarification</div>
                  <div className="text-text-primary font-medium">Gratuit. Apportez votre propre clé API.</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Modèle de confidentialité</div>
                  <div className="text-text-primary font-medium">BYOM — zéro transmission serveur</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Modèles IA pris en charge</div>
                  <div className="text-text-primary font-medium">25+ cloud + illimité en local via Ollama</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Frameworks de prompts</div>
                  <div className="text-text-primary font-medium">9 intégrés + 2 emplacements personnalisés</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Types d'analyse Quorum</div>
                  <div className="text-text-primary font-medium">13, dont la détection d'hallucinations</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Support hors ligne</div>
                  <div className="text-text-primary font-medium">Complet — via Ollama, LM Studio, Jan AI</div>
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
