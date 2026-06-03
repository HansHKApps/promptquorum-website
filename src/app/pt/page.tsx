import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { LandingPageServer } from '@/components/LandingPageServer'
import { ConfirmedToast } from '@/components/ConfirmedToast'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'pt'
  const t = translations[lang as keyof typeof translations]

  return {
    title: t.homeMetaTitle,
    description: t.homeMetaDescription,
    alternates: generateAlternates('/', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.homeMetaTitle,
      description: t.homeMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.homeMetaTitle,
      description: t.homeMetaDescription,
    },
  }
}

export default async function PtHome() {
  return (
    <>
      <ConfirmedToast />
      <LandingPageServer initialLang="pt" />

      {/* FAQPage Schema — 8 perguntas principais para rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'inLanguage': 'pt-BR',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'O que é o PromptQuorum?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'O PromptQuorum é uma ferramenta de envio multi-IA e pontuação de consenso. Você escreve um prompt estruturado usando qualquer um dos 9 frameworks de prompt engineering e o envia simultaneamente para GPT-4o, Claude, Gemini, Mistral, Llama, DeepSeek e mais de 25 modelos de IA. O PromptQuorum coleta todas as respostas em paralelo e executa uma análise de consenso — assim você obtém um veredicto único e verificado em vez de confiar cegamente em um único modelo.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Como o PromptQuorum funciona?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'O PromptQuorum funciona em quatro etapas: (1) Escrever — escolha um framework de prompt (CO-STAR, CRAFT, RISEN, APE e mais) e preencha os campos estruturados; (2) Otimizar — seu LLM conectado transforma os campos em um prompt de precisão que você refina com 8 refinamentos com um clique; (3) Enviar — envie o prompt otimizado para mais de 25 serviços de IA simultaneamente com um clique; (4) Quorum — cole todas as respostas na aba de análise e escolha entre 13 tipos de análise, incluindo Resumo de Consenso, Detecção de Alucinações, Detecção de Contradições e Seleção da Melhor Resposta.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Quais modelos de IA o PromptQuorum suporta?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'O PromptQuorum suporta mais de 25 modelos de IA na nuvem, incluindo OpenAI GPT-4o e o1, Anthropic Claude 3.5 Sonnet e Claude 4, Google Gemini 2.0 Flash e 1.5 Pro, xAI Grok, DeepSeek, Mistral Large, Cohere Command R+, Meta Llama via Together AI e Groq, e Perplexity. Também suporta todos os principais ambientes de LLM local: Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM, KoboldCpp e qualquer endpoint compatível com OpenAI.'
                }
              },
              {
                '@type': 'Question',
                'name': 'O que é a pontuação de consenso e por que ela importa?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'A pontuação de consenso mede o quanto os modelos de IA independentes concordam em uma resposta. Quando 5 ou mais modelos dão a mesma resposta a uma pergunta, a confiança nessa resposta é muito maior do que quando um único modelo responde sozinho. A análise Quorum do PromptQuorum extrai os pontos de concordância (consenso), marca as contradições entre modelos e pontua o nível de confiança geral. Este é o método mais confiável disponível atualmente para detectar alucinações de IA — uma afirmação feita por apenas um modelo, enquanto quatro a omitem, é um sinal claro de alucinação.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Quanto custa o PromptQuorum?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'O PromptQuorum é gratuito. Traga sua própria chave de API (BYOM) de qualquer provedor de IA na nuvem — OpenAI, Anthropic, Google e outros — e o PromptQuorum nunca cobra pelo uso dos modelos. Você também pode usar um LLM local gratuito como Ollama ou LM Studio sem precisar de chave de API. Não há assinatura, não é necessária conta e o PromptQuorum não impõe limites de uso.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Posso usar o PromptQuorum com LLMs locais como Ollama ou LM Studio?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Sim. O PromptQuorum se conecta nativamente ao Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, KoboldCpp, vLLM, oobabooga e qualquer endpoint local compatível com OpenAI. Com um modelo local, o PromptQuorum funciona completamente offline — não é necessária conexão com a internet nem chave de API. Seus prompts, respostas e resultados nunca saem do seu dispositivo.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Como o PromptQuorum protege meus dados e privacidade?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'O PromptQuorum não coleta telemetria e não realiza nenhum tipo de rastreamento. As chaves de API são armazenadas apenas no localStorage do seu navegador e nunca são transmitidas para nenhum servidor do PromptQuorum — cada chamada ao modelo vai diretamente do seu navegador para o provedor escolhido. O PromptQuorum nunca vê seus prompts, respostas ou chaves de API. Para máxima privacidade, use um LLM local (Ollama ou LM Studio): nesse modo, nenhum dado sai do seu dispositivo. O PromptQuorum é compatível com os requisitos da LGPD para organizações brasileiras.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Como obtenho acesso beta ao PromptQuorum?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Insira seu e-mail no formulário de lista de espera da página inicial do PromptQuorum. O beta é lançado em julho de 2026. Os membros de acesso antecipado recebem recursos premium vitalícios, suporte prioritário e influência direta no roadmap do produto. O aplicativo desktop (macOS e Windows) e a versão web estarão disponíveis simultaneamente no lançamento.'
                }
              }
            ]
          }),
        }}
      />

      {/* HowTo Schema — fluxo de trabalho de 4 etapas do PromptQuorum */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            'inLanguage': 'pt-BR',
            'name': 'Como otimizar prompts e comparar modelos de IA com o PromptQuorum',
            'description': 'Quatro etapas para transformar qualquer ideia em um prompt de precisão e comparar respostas em mais de 25 modelos de IA.',
            'totalTime': 'PT5M',
            'step': [
              {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'Escreva um prompt estruturado',
                'text': 'Escolha um dos 9 frameworks de prompt engineering (CO-STAR, CRAFT, RISEN, APE, SPECS, TRACE, RTF, Google Prompt, Single Prompt Line) e preencha os campos estruturados. O Assistente de Frameworks recomenda a melhor opção para a sua tarefa.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Otimize com seu LLM',
                'text': 'Seu LLM conectado (ChatGPT, Claude, Gemini ou um modelo local como Ollama) transforma os campos do framework em um prompt de precisão. Refine iterativamente com 8 refinamentos com um clique. Cada versão é salva no histórico.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Envie para múltiplos modelos de IA',
                'text': 'Envie o prompt otimizado para mais de 25 serviços de IA simultaneamente com um clique. As respostas chegam em paralelo — sem esperar que um modelo termine antes de iniciar o próximo.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'Analise o consenso entre modelos',
                'text': 'Cole todas as respostas na aba de análise e escolha entre 13 tipos de análise: Resumo de Consenso, Detecção de Alucinações, Detecção de Contradições, Seleção da Melhor Resposta e mais. Obtenha um veredicto verificado em vez de confiar em um único modelo.',
                'image': 'https://www.promptquorum.com/og-image.png',
              }
            ]
          }),
        }}
      />
    </>
  )
}
