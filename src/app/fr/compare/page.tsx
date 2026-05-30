import type { Metadata } from 'next'
import { translations } from '@/translations'
import { ComparePageClient } from '@/components/ComparePageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'fr'
  const t = translations[lang]

  return {
    title: t.compareMetaTitle,
    description: t.compareMetaDescription,
    alternates: generateAlternates('/compare', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.compareMetaTitle,
      description: t.compareMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.compareMetaTitle,
      description: t.compareMetaDescription,
    },
  }
}

export default async function FrComparePage() {
  return (
    <>
      <ComparePageClient initialLang="fr" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.promptquorum.com/fr/compare',
                'url': 'https://www.promptquorum.com/fr/compare',
                'name': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo — Multi-LLM Tools Compared (2026)',
                'description': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo: compare simultaneous dispatch, consensus scoring, local LLM support, and API key control in 2026.',
                'inLanguage': 'fr',
                'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  { '@type': 'ListItem', 'position': 1, 'name': 'Accueil', 'item': 'https://www.promptquorum.com/fr' },
                  { '@type': 'ListItem', 'position': 2, 'name': 'Comparer', 'item': 'https://www.promptquorum.com/fr/compare' },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': 'Quel est le meilleur outil pour comparer les mêmes prompts sur plusieurs LLMs simultanément?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'PromptQuorum est le seul outil qui combine l\'envoi simultané de prompts avec l\'analyse automatisée du consensus — vous obtenez non seulement les réponses côte à côte, mais aussi un verdict sur où les modèles s\'accordent et où ils divergent. Poe et AiZolo offrent un accès multi-modèles mais ne mesurent pas le consensus. LM Arena utilise le vote humain plutôt que l\'analyse automatisée. OpenMark note les prompts individuels mais ne produit pas de verdict de consensus entre les modèles. Les informations de fonctionnalités sont basées sur la documentation publique de mars 2026.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Quel outil multi-LLM supporte les LLMs locaux comme Ollama et LM Studio?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'PromptQuorum est le seul outil sur cette page qui supporte l\'inférence LLM locale via Ollama et LM Studio, ce qui signifie que vos prompts sensibles ne quittent jamais votre machine. Poe, LM Arena, OpenMark et AiZolo sont des services cloud uniquement selon leur documentation publique de mars 2026. Vérifiez les capacités actuelles de chaque outil directement auprès du fournisseur avant de prendre une décision.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Qu\'est-ce que le scoring de consensus dans un outil multi-LLM?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Le scoring de consensus est une analyse automatisée du degré d\'accord entre plusieurs modèles d\'IA sur un prompt donné. Le Quorum Verdict de PromptQuorum note l\'accord sur tous les modèles déployés, identifie les divergences et explique ce qu\'elles signifient probablement. Un score de consensus élevé indique que la réponse est fiable sur les architectures de modèles. Un score de consensus faible signale l\'incertitude et justifie une enquête approfondie.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'En quoi PromptQuorum diffère-t-il de Poe?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Poe, propriété de Quora, est une plateforme de chat multi-modèles axée sur l\'accès et la conversation. PromptQuorum est un outil d\'envoi et d\'analyse multi-LLM axé sur l\'évaluation des prompts et le scoring de consensus. Poe vous permet de basculer entre les modèles ou de comparer deux à la fois. PromptQuorum envoie à tous les modèles sélectionnés simultanément et analyse automatiquement où ils s\'accordent — un flux de travail fondamentalement différent conçu pour les power users et les développeurs plutôt que pour le chat occasionnel.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Ai-je besoin de mes propres clés API pour utiliser PromptQuorum?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Oui. PromptQuorum est conçu pour les utilisateurs qui apportent leurs propres clés API d\'OpenAI, Anthropic, Google, Mistral et autres fournisseurs. Cela garde vos données sous votre contrôle, votre utilisation sous vos conditions commerciales et vos coûts transparents. Cela permet également le support des LLMs locaux via Ollama et LM Studio pour les utilisateurs qui préfèrent une inférence entièrement privée.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
