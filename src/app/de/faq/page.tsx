import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FAQPageClient } from '@/components/FAQPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'de'
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

export default async function DeFAQPage() {
  return (
    <>
      <FAQPageClient initialLang="de" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: 'de',
            mainEntity: [
              { '@type': 'Question', name: 'Ist PromptQuorum kostenlos?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. PromptQuorum ist kostenlos nutzbar. Sie können Ihren eigenen API-Schlüssel mitbringen, ein lokales LLM verwenden oder unseren kostenlosen Test-Backend-Dienst zur Prompt-Optimierung ausprobieren.' } },
              { '@type': 'Question', name: 'Wie funktioniert der Datenschutz?', acceptedAnswer: { '@type': 'Answer', text: 'Sie entscheiden, wohin Ihre Daten gehen. Alles lokal halten mit LM Studio oder Ollama, oder Ihre eigenen API-Schlüssel verwenden. Keine Telemetrie, kein Tracking, keine Datenerfassung — nicht einmal anonyme Nutzungsstatistiken.' } },
              { '@type': 'Question', name: 'Welche KI-Anbieter werden unterstützt?', acceptedAnswer: { '@type': 'Answer', text: 'Über 25 KI-Anbieter sind enthalten: OpenAI (GPT-4, GPT-4o), Anthropic (Claude), Google Gemini, Grok, DeepSeek, Mistral, Cohere, Together AI, Groq, OpenRouter sowie alle lokalen Anbieter (Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, KoboldCpp, vLLM, oobabooga und jeder OpenAI-kompatible Endpunkt).' } },
              { '@type': 'Question', name: 'Auf welchen Plattformen läuft PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum beginnt mit Desktop-Apps (Mac, Windows via Electron), gefolgt von einer Webanwendung und schließlich mobilen Lösungen (iOS und Android via Capacitor). Vollständig offline mit lokalem LLM nutzbar.' } },
              { '@type': 'Question', name: 'Was macht PromptQuorum besonders?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum ist das einzige Tool, das den gesamten Prompt-Lebenszyklus abdeckt: strukturiertes Schreiben mit 9 Frameworks, KI-gestützte iterative Optimierung, Ein-Klick-Dispatch an 25+ KI-Dienste und Multi-Modell-Konsensanalyse — alles ohne dass Daten Ihr Gerät verlassen.' } },
              { '@type': 'Question', name: 'Gibt es Nutzungslimits?', acceptedAnswer: { '@type': 'Answer', text: 'Keine Limits von PromptQuorum. Ihre Nutzung ist nur durch Ihre API-Schlüssel oder lokale LLM-Ressourcen begrenzt.' } },
              { '@type': 'Question', name: 'Was ist Prompt Engineering und warum ist es wichtig?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt Engineering ist die Kunst, KI-Eingaben so zu gestalten, dass sie genauere und nützlichere Ergebnisse liefern. Ein gut strukturierter Prompt kann die KI-Ausgabequalität um 25–45% verbessern. PromptQuorum automatisiert dies mit 9 integrierten Frameworks — kein Fachwissen erforderlich.' } },
              { '@type': 'Question', name: 'Wie optimiert PromptQuorum meine Prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Ihr verbundenes LLM wandelt rohe Framework-Felder in einen präzisen Prompt um. Anschließend verfeinern Sie iterativ mit 8 Ein-Klick-Verfeinerungen: Kürzen, Detail erweitern, In Schritte aufteilen, Vereinfachen, Spezifizität erhöhen, Multi-Experten-Konsultation, Qualitätskontrollen hinzufügen und Benutzerdefinierte Anweisung. Jeder Schritt wird im Versionsverlauf gespeichert.' } },
              { '@type': 'Question', name: 'Welche Prompt-Frameworks sind in PromptQuorum integriert?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum umfasst 9 Frameworks: Single Prompt Line, APE, CRAFT, CO-STAR (Gewinner des Singapore GPT-4-Wettbewerbs), SPECS, RISEN, TRACE, Google Prompt und RTF. Außerdem können Sie 2 vollständig benutzerdefinierte Frameworks erstellen.' } },
              { '@type': 'Question', name: 'Was ist das CO-STAR-Framework?', acceptedAnswer: { '@type': 'Answer', text: 'CO-STAR steht für Context, Objective, Style, Tone, Audience und Response. Es gewann den Singapore GPT-4 Prompt Engineering Wettbewerb und ist ideal für Geschäftskommunikation und Marketing. PromptQuorum führt Sie durch jedes Feld und assembliert den finalen Prompt automatisch.' } },
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              inLanguage: 'de',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://www.promptquorum.com/de' },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.promptquorum.com/de/faq' },
              ],
            },
          }),
        }}
      />
    </>
  )
}
