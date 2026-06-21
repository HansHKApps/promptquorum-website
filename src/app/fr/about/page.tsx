import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'fr'
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

export default function FrAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              'url': 'https://www.promptquorum.com/fr/about',
              'name': 'À propos de PromptQuorum',
              'description': 'PromptQuorum est un outil de distribution et de consensus IA multi-modèles axé sur la confidentialité, développé par Hans Kuepper.',
              'inLanguage': 'fr',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://www.promptquorum.com/fr/about#founder',
              'name': 'Hans Kuepper',
              'url': 'https://www.promptquorum.com/fr/about',
              'jobTitle': 'Fondateur et développeur',
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
                { '@type': 'ListItem', 'position': 1, 'name': 'Accueil', 'item': 'https://www.promptquorum.com/fr' },
                { '@type': 'ListItem', 'position': 2, 'name': 'À propos', 'item': 'https://www.promptquorum.com/fr/about' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">À propos</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Conçu pour les personnes qui doivent pouvoir faire confiance à leurs réponses IA.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              PromptQuorum est un outil de distribution et de consensus IA multi-modèles. Un prompt pour chaque modèle.
              Un verdict auquel vous pouvez réellement faire confiance.
            </p>
          </div>

          {/* Founder */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Le développeur</h2>
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">HK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">Hans Kuepper</h3>
                  <p className="text-sm text-primary font-medium mb-4">Fondateur &amp; développeur, PromptQuorum</p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">Parcours</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Hans est basé en Bade-Wurtemberg, en Allemagne, près de Heidelberg dans le Kraichgau.
                    Il est un développeur indépendant multilingue qui parle couramment l&apos;allemand, l&apos;anglais, le français et le russe.
                    Au cours des deux dernières décennies, il a vécu et travaillé dans plus de 20 pays à travers l&apos;Europe, l&apos;Asie et au-delà,
                    collaborant avec des équipes distribuées et créant des outils pour des publics mondiaux.
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">Pourquoi PromptQuorum</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    PromptQuorum est né d&apos;une frustration simple : quand vous avez besoin d&apos;une réponse fiable,
                    interroger un seul modèle IA ne suffit pas. Les différents modèles hallucinent différemment, commettent des erreurs
                    différentes et réussissent sur différents types de raisonnement. La vérité se trouve dans le chevauchement —
                    là où cinq modèles indépendants s&apos;accordent sur une réponse, la confiance est considérablement plus élevée
                    que quand un seul modèle répond seul.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Avant de construire PromptQuorum, Hans a passé des années à travailler avec des flux de travail IA en entreprise
                    et a vu le même problème se répéter : des équipes et des organisations faisant confiance aux résultats d&apos;un seul
                    modèle pour des décisions à enjeux élevés — décisions d&apos;embauche, résumés de recherches médicales, analyses juridiques,
                    évaluations des risques — sans couche de vérification ni mécanisme de consensus. Les décisions à enjeux élevés méritent
                    mieux. PromptQuorum est l&apos;outil qu&apos;il voulait voir exister.
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">Philosophie</h4>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Hans croit que la confidentialité et l&apos;autonomie des utilisateurs doivent être non négociables dans les outils IA.
                    PromptQuorum est construit sur un principe simple : vos prompts, vos clés API et vos réponses vous appartiennent.
                    L&apos;outil facilite le consensus et la comparaison entre les modèles IA, mais rien ne transite par les serveurs de PromptQuorum.
                    Vous êtes en contrôle.
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
            <h2 className="text-2xl font-bold text-text-primary mb-6">Pourquoi PromptQuorum existe</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Tous les grands modèles IA hallucinent. GPT-4o, Claude, Gemini — ils fabriquent tous des faits,
                ratent du contexte et produisent des réponses fausses qui sonnent confiantes. La différence, c&apos;est <em>quels</em> faits
                chacun invente et <em>quand</em>.
              </p>
              <p>
                Quand cinq modèles indépendants s&apos;accordent sur une réponse, la probabilité que les cinq aient inventé
                le même détail spécifique est considérablement plus faible que quand un seul modèle répond seul.
                Le consensus est un signal de fiabilité. PromptQuorum facilite la collecte de ce signal.
              </p>
              <p>
                Le deuxième problème est la confidentialité. La plupart des outils IA acheminent vos prompts via leurs propres serveurs.
                PromptQuorum ne le fait pas. Vos clés API se connectent directement depuis votre navigateur vers vos fournisseurs choisis.
                Rien ne transite par l&apos;infrastructure PromptQuorum — ni vos prompts,
                ni vos clés API, ni vos réponses.
              </p>
            </div>
          </section>

          {/* Product facts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Le produit</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Lancement', value: 'Bêta — juillet 2026' },
                { label: 'Tarification', value: 'Gratuit. Apportez votre propre clé API.' },
                { label: 'Modèle de confidentialité', value: 'BYOM — zéro transmission serveur' },
                { label: 'Modèles IA pris en charge', value: '25+ cloud + illimité en local via Ollama' },
                { label: 'Frameworks de prompts', value: '9 intégrés + 2 emplacements personnalisés' },
                { label: "Types d'analyse Quorum", value: "13, dont la détection d'hallucinations" },
                { label: 'Support hors ligne', value: 'Complet — via Ollama, LM Studio, Jan AI' },
                { label: 'Inscription requise', value: "Aucune. Ouvrez l'application et commencez." },
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
            <h2 className="text-2xl font-bold text-text-primary mb-4">Contact</h2>
            <p className="text-text-secondary mb-4">
              Pour les demandes de presse, les propositions de partenariat ou les commentaires :
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
            <Link href="/fr" className="text-primary hover:text-primary/80 font-medium text-sm">← Accueil</Link>
            <Link href="/fr/how-it-works" className="text-primary hover:text-primary/80 font-medium text-sm">Comment ça marche</Link>
            <Link href="/fr/compare" className="text-primary hover:text-primary/80 font-medium text-sm">Comparer les outils</Link>
            <Link href="/fr/blog" className="text-primary hover:text-primary/80 font-medium text-sm">Blog</Link>
          </div>

        </div>
      </div>
    </>
  )
}
