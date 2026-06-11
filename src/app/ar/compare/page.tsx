import type { Metadata } from 'next'
import { translations } from '@/translations'
import { ComparePageClient } from '@/components/ComparePageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ar'
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

export default async function ArComparePage() {
  return (
    <>
      <ComparePageClient initialLang="ar" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.promptquorum.com/ar/compare',
                'url': 'https://www.promptquorum.com/ar/compare',
                'name': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo — Ferramentas multi-LLM comparadas (2026)',
                'description': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo: compare envio simultâneo, pontuação de consenso, suporte a LLM local e controle de chave de API em 2026.',
                'inLanguage': 'ar',
                'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  { '@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': 'https://www.promptquorum.com/ar' },
                  { '@type': 'ListItem', 'position': 2, 'name': 'Comparar', 'item': 'https://www.promptquorum.com/ar/compare' },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': 'Qual é a melhor ferramenta para comparar o mesmo prompt em múltiplos LLMs simultaneamente?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'O PromptQuorum é a única ferramenta que combina envio simultâneo de prompts com análise automática de consenso — você obtém não apenas as respostas lado a lado, mas também um veredicto sobre onde os modelos concordam e onde divergem. Poe e AiZolo oferecem acesso multi-modelo, mas não geram pontuação de consenso. O LM Arena usa votação humana em vez de análise automatizada. O OpenMark avalia prompts individuais, mas não gera um veredicto de consenso entre modelos. As informações de funcionalidades são baseadas em documentação pública de março de 2026.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Qual ferramenta multi-LLM suporta LLMs locais como Ollama e LM Studio?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'O PromptQuorum é a única ferramenta nesta página que suporta inferência local de LLM via Ollama e LM Studio, o que significa que seus prompts sensíveis nunca saem da sua máquina. Poe, LM Arena, OpenMark e AiZolo operam como serviços exclusivamente na nuvem conforme documentação pública de março de 2026. Verifique as capacidades atuais de cada ferramenta diretamente com o fornecedor antes de tomar uma decisão.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'O que é a pontuação de consenso em uma ferramenta multi-LLM?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'A pontuação de consenso é uma análise automatizada de quanto múltiplos modelos de IA concordam em um determinado prompt. O Quorum Verdict do PromptQuorum avalia a concordância entre todos os modelos implantados, identifica onde divergem e explica o que essa divergência provavelmente significa. Uma pontuação de consenso alta indica que a resposta é confiável entre arquiteturas de modelos. Uma pontuação de consenso baixa sinaliza incerteza e justifica investigação adicional.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Em que o PromptQuorum difere do Poe?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'O Poe, de propriedade da Quora, é uma plataforma de chat multi-modelo focada em acesso e conversação. O PromptQuorum é uma ferramenta de envio e análise multi-LLM focada em avaliação de prompts e pontuação de consenso. O Poe permite alternar entre modelos ou comparar dois de cada vez. O PromptQuorum envia para todos os modelos selecionados simultaneamente e analisa automaticamente onde concordam — um fluxo de trabalho fundamentalmente diferente, projetado para usuários avançados e desenvolvedores em vez de chat casual.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Preciso das minhas próprias chaves de API para usar o PromptQuorum?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Sim. O PromptQuorum é projetado para usuários que fornecem suas próprias chaves de API da OpenAI, Anthropic, Google, Mistral e outros provedores. Isso mantém seus dados sob seu controle, seu uso sob seus termos comerciais e seus custos transparentes. Também habilita suporte a LLMs locais via Ollama e LM Studio para usuários que preferem inferência completamente privada.',
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
