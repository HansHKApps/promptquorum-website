import type { Metadata } from 'next'
import { translations } from '@/translations'
import { ComparePageClient } from '@/components/ComparePageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'de'
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

export default async function DeComparePage() {
  return (
    <>
      <ComparePageClient initialLang="de" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.promptquorum.com/de/compare',
                'url': 'https://www.promptquorum.com/de/compare',
                'name': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo — Multi-LLM Tools Compared (2026)',
                'description': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo: compare simultaneous dispatch, consensus scoring, local LLM support, and API key control in 2026.',
                'inLanguage': 'de',
                'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  { '@type': 'ListItem', 'position': 1, 'name': 'Startseite', 'item': 'https://www.promptquorum.com/de' },
                  { '@type': 'ListItem', 'position': 2, 'name': 'Vergleich', 'item': 'https://www.promptquorum.com/de/compare' },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': 'Welches Werkzeug ist am besten zum gleichzeitigen Vergleich des gleichen Prompts über mehrere LLMs geeignet?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'PromptQuorum ist das einzige Werkzeug, das gleichzeitigen Prompt-Versand mit automatisierter Konsensanalyse kombiniert — Sie erhalten nicht nur die Antworten nebeneinander, sondern auch ein Urteil darüber, wo sich die Modelle einig sind und wo sie abweichen. Poe und AiZolo ermöglichen Mehrmodell-Zugriff, bewerten aber keinen Konsens. LM Arena nutzt menschliche Bewertungen statt automatisierter Analyse. OpenMark bewertet einzelne Prompts, erstellt aber keine Konsensaussage über Modelle hinweg. Funktionsinformationen basieren auf öffentlicher Dokumentation von März 2026.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Welches Multi-LLM-Werkzeug unterstützt lokale LLMs wie Ollama und LM Studio?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'PromptQuorum ist das einzige Werkzeug auf dieser Seite, das lokale LLM-Inferenz über Ollama und LM Studio unterstützt — Ihre sensiblen Prompts verlassen nie Ihren Computer. Poe, LM Arena, OpenMark und AiZolo sind Cloud-only-Dienste basierend auf ihrer öffentlichen Dokumentation von März 2026. Überprüfen Sie die aktuellen Fähigkeiten jedes Werkzeugs direkt beim Anbieter, bevor Sie eine Entscheidung treffen.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Was ist Konsensanalyse in einem Multi-LLM-Werkzeug?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Konsensanalyse ist eine automatisierte Auswertung, wie sehr sich mehrere KI-Modelle bei einem bestimmten Prompt einig sind. PromptQuerorums Quorum Verdict bewertet die Übereinstimmung über alle eingesetzten Modelle hinweg, identifiziert Abweichungen und erklärt deren wahrscheinliche Bedeutung. Ein hoher Konsens-Score deutet darauf hin, dass die Antwort über Modellarchitekturen hinweg zuverlässig ist. Ein niedriger Konsens-Score kennzeichnet Unsicherheit und rechtfertigt weitere Untersuchungen.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Wie unterscheidet sich PromptQuorum von Poe?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Poe, im Besitz von Quora, ist eine Multi-Modell-Chat-Plattform mit Fokus auf Zugang und Konversation. PromptQuorum ist ein Multi-LLM-Versand- und Analyse-Werkzeug mit Fokus auf Prompt-Evaluierung und Konsensanalyse. Poe ermöglicht das Wechseln zwischen Modellen oder gleichzeitigen Vergleich von zwei. PromptQuorum versendet an alle ausgewählten Modelle gleichzeitig und analysiert automatisch, wo sie sich einig sind — ein grundlegend anderer Workflow für Poweruser und Entwickler statt gelegentlichen Chat.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Benötige ich eigene API-Schlüssel zur Nutzung von PromptQuorum?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Ja. PromptQuorum ist für Nutzer konzipiert, die ihre eigenen API-Schlüssel von OpenAI, Anthropic, Google, Mistral und anderen Anbietern mitbringen. Das hält Ihre Daten unter Ihrer Kontrolle, Ihre Nutzung unter Ihren kommerziellen Bedingungen und Ihre Kosten transparent. Es ermöglicht auch lokale LLM-Unterstützung via Ollama und LM Studio für Nutzer, die vollständig private Inferenz bevorzugen.',
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
