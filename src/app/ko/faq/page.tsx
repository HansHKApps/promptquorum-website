import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FAQPageClient } from '@/components/FAQPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'en'
  const t = translations['en' as keyof typeof translations]

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

export default async function KoFAQPage() {
  return (
    <>
      <FAQPageClient initialLang="en" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: 'ko',
            mainEntity: [
              { '@type': 'Question', name: 'O PromptQuorum é gratuito?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O PromptQuorum é gratuito. Você pode trazer sua própria chave de API, usar um LLM local ou experimentar nosso serviço de backend gratuito limitado para otimização de prompts.' } },
              { '@type': 'Question', name: 'Como funciona a privacidade?', acceptedAnswer: { '@type': 'Answer', text: 'Zero telemetria, zero rastreamento, sem coleta de dados. As chaves de API são armazenadas apenas no localStorage do seu navegador e nunca são transmitidas para nenhum servidor do PromptQuorum.' } },
              { '@type': 'Question', name: 'Quais provedores de IA são compatíveis?', acceptedAnswer: { '@type': 'Answer', text: 'Mais de 25 provedores de IA, incluindo OpenAI, Anthropic Claude, Google Gemini, Grok, DeepSeek, Mistral, Cohere, Together AI, Groq, OpenRouter, além de todos os provedores locais como Ollama, LM Studio, Jan AI, GPT4All e qualquer endpoint compatível com OpenAI.' } },
              { '@type': 'Question', name: 'Em quais plataformas o PromptQuorum funciona?', acceptedAnswer: { '@type': 'Answer', text: 'Aplicativos desktop (Mac, Windows via Electron), aplicativo web e futuramente mobile (iOS e Android via Capacitor). Funciona completamente offline com um LLM local.' } },
              { '@type': 'Question', name: 'O que torna o PromptQuorum diferente?', acceptedAnswer: { '@type': 'Answer', text: 'O PromptQuorum cobre o ciclo completo do prompt em uma única ferramenta baseada no navegador: escrita estruturada com 9 frameworks, otimização iterativa impulsionada por IA com 8 tipos de refinamento, envio com um clique para 25+ serviços de IA e 13 tipos de análise Quorum para pontuação de consenso — tudo sem que nenhum dado saia do seu dispositivo.' } },
              { '@type': 'Question', name: 'Há algum limite?', acceptedAnswer: { '@type': 'Answer', text: 'Nenhum limite por parte do PromptQuorum. Seu uso é limitado apenas pelas suas chaves de API ou recursos de LLM local.' } },
              { '@type': 'Question', name: 'O que é prompt engineering e por que importa?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt engineering é a prática de projetar entradas para modelos de IA de modo que retornem resultados mais precisos, úteis e confiáveis. Em testes, prompts estruturados com campos de framework produzem pontuações de avaliação de LLM 25–45% mais altas em comparação com entradas não estruturadas. O PromptQuorum automatiza isso com 9 frameworks integrados.' } },
              { '@type': 'Question', name: 'Como o PromptQuorum otimiza meus prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Seu LLM conectado transforma os campos brutos do framework em um prompt de precisão. Depois você refina iterativamente com 8 refinamentos com um clique. Cada etapa é salva no histórico de versões para que você possa reverter a qualquer momento.' } },
              { '@type': 'Question', name: 'Quais frameworks de prompt estão integrados no PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: '9 frameworks: Single Prompt Line, APE, CRAFT, CO-STAR (vencedor da competição Singapore GPT-4), SPECS, RISEN, TRACE, Google Prompt e RTF. Você também pode construir 2 frameworks completamente personalizados.' } },
              { '@type': 'Question', name: 'O que é o framework CO-STAR?', acceptedAnswer: { '@type': 'Answer', text: 'CO-STAR é a sigla para Context (Contexto), Objective (Objetivo), Style (Estilo), Tone (Tom), Audience (Público) e Response (Resposta). Venceu a competição de prompt engineering Singapore GPT-4 e é ideal para comunicação empresarial e marketing.' } },
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              inLanguage: 'ko',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.promptquorum.com/ar' },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.promptquorum.com/ar/faq' },
              ],
            },
          }),
        }}
      />
    </>
  )
}
