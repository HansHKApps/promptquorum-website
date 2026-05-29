import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FAQPageClient } from '@/components/FAQPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'fr'
  const t = translations[lang]

  return {
    title: t.faqMetaTitle,
    description: t.faqMetaDescription,
    alternates: generateAlternates('/faq', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.faqMetaTitle,
      description: t.faqMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.faqMetaTitle,
      description: t.faqMetaDescription,
    },
  }
}

export default async function FrFAQPage() {
  return (
    <>
      <FAQPageClient initialLang="fr" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: 'fr',
            mainEntity: [
              { '@type': 'Question', name: 'PromptQuorum est-il gratuit ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. PromptQuorum est gratuit. Vous pouvez apporter votre propre clé API, utiliser un LLM local ou essayer notre service backend gratuit limité pour l\'optimisation de prompts.' } },
              { '@type': 'Question', name: 'Comment fonctionne la confidentialité ?', acceptedAnswer: { '@type': 'Answer', text: 'Vous décidez où vont vos données. Gardez tout local avec LM Studio ou Ollama, ou utilisez vos propres clés API. Zéro télémétrie, zéro tracking, aucune collecte de données — pas même de statistiques d\'utilisation anonymes.' } },
              { '@type': 'Question', name: 'Quels fournisseurs IA sont supportés ?', acceptedAnswer: { '@type': 'Answer', text: 'Plus de 25 fournisseurs IA sont inclus : OpenAI (GPT-4, GPT-4o), Anthropic (Claude), Google Gemini, Grok, DeepSeek, Mistral, Cohere, Together AI, Groq, OpenRouter, ainsi que tous les fournisseurs locaux (Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, KoboldCpp, vLLM, oobabooga et tout endpoint compatible OpenAI).' } },
              { '@type': 'Question', name: 'Sur quelles plateformes fonctionne PromptQuorum ?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum commence par des applications desktop (Mac, Windows via Electron), suivies d\'une application web, puis mobile (iOS et Android via Capacitor). Fonctionne entièrement hors ligne avec un LLM local.' } },
              { '@type': 'Question', name: 'Qu\'est-ce qui différencie PromptQuorum ?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum est le seul outil couvrant l\'intégralité du cycle de vie d\'un prompt : rédaction structurée avec 9 frameworks, optimisation itérative par IA, dispatch en un clic vers 25+ services IA, et analyse de consensus multi-modèles — sans qu\'aucune donnée ne quitte votre appareil.' } },
              { '@type': 'Question', name: 'Y a-t-il des limites d\'utilisation ?', acceptedAnswer: { '@type': 'Answer', text: 'Aucune limite de la part de PromptQuorum. Votre utilisation est uniquement limitée par vos clés API ou les ressources de votre LLM local.' } },
              { '@type': 'Question', name: 'Qu\'est-ce que le prompt engineering et pourquoi est-ce important ?', acceptedAnswer: { '@type': 'Answer', text: 'Le prompt engineering consiste à concevoir des entrées pour les modèles IA afin d\'obtenir des résultats plus précis et utiles. Un prompt bien structuré peut améliorer la qualité de sortie IA de 25 à 45 %. PromptQuorum automatise cela avec 9 frameworks intégrés — aucune expertise requise.' } },
              { '@type': 'Question', name: 'Comment PromptQuorum optimise-t-il mes prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'Votre LLM connecté transforme les champs bruts du framework en un prompt de précision. Vous affinez ensuite avec 8 raffinements en un clic : Rendre concis, Développer les détails, Décomposer en étapes, Simplifier, Augmenter la spécificité, Consultation multi-experts, Ajouter des contrôles qualité et Instruction personnalisée. Chaque étape est sauvegardée dans l\'historique.' } },
              { '@type': 'Question', name: 'Quels frameworks de prompts sont intégrés dans PromptQuorum ?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum inclut 9 frameworks : Single Prompt Line, APE, CRAFT, CO-STAR (vainqueur du concours Singapore GPT-4), SPECS, RISEN, TRACE, Google Prompt et RTF. Vous pouvez aussi créer 2 frameworks entièrement personnalisés.' } },
              { '@type': 'Question', name: 'Qu\'est-ce que le framework CO-STAR ?', acceptedAnswer: { '@type': 'Answer', text: 'CO-STAR signifie Context, Objective, Style, Tone, Audience et Response. Il a remporté le concours de prompt engineering Singapore GPT-4 et est idéal pour la communication professionnelle et le marketing. PromptQuorum vous guide à travers chaque champ et assemble le prompt final automatiquement.' } },
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.promptquorum.com/fr' },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.promptquorum.com/fr/faq' },
              ],
            },
          }),
        }}
      />
    </>
  )
}
