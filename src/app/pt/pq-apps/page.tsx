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
    description: 'Veja como funciona o app da PromptQuorum: escreva prompts com frameworks integrados, envie para mais de 25 modelos de IA e compare resultados com a análise Quorum.',
    alternates: generateAlternates('/pq-apps', 'pt', true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: 'PQ Apps — PromptQuorum',
      description: 'Veja como funciona o app da PromptQuorum: escreva prompts com frameworks integrados, envie para mais de 25 modelos de IA e compare resultados com a análise Quorum.',
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PQ Apps — PromptQuorum',
      description: 'Veja como funciona o app da PromptQuorum: escreva prompts com frameworks integrados, envie para mais de 25 modelos de IA e compare resultados com a análise Quorum.',
    },
  }
}

export default function PtPQAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'url': 'https://www.promptquorum.com/pt/pq-apps',
              'name': 'PQ Apps — PromptQuorum',
              'description': 'Veja como funciona o app da PromptQuorum: escreva prompts com frameworks integrados, envie para mais de 25 modelos de IA e compare resultados com a análise Quorum.',
              'inLanguage': 'pt-BR',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': 'https://www.promptquorum.com/pt' },
                { '@type': 'ListItem', 'position': 2, 'name': 'PQ Apps', 'item': 'https://www.promptquorum.com/pt/pq-apps' },
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
              PromptQuorum, onde quer que você trabalhe
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Um único prompt, enviado simultaneamente para mais de 25 modelos de IA — com suporte a LLMs locais e análise de consenso multimodelo, tudo direto do seu navegador.
            </p>
            <Link
              href="/pt/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Testar a Beta
            </Link>
          </div>

          {/* How It Works */}
          <section id="how-it-works" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Como funciona</h2>
            <p className="text-text-secondary mb-3">Um fluxo de trabalho de 4 etapas: escreva um prompt estruturado usando um dos 9 frameworks, otimize-o com o seu próprio LLM, despache simultaneamente para mais de 25 serviços de IA e analise todas as respostas usando 13 tipos de análise de consenso.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              Roda inteiramente no seu navegador — nenhum servidor do PromptQuorum vê seus prompts ou chaves de API
            </div>

            <div className="space-y-8 mb-16">
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Escrever</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Estruture seu prompt</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Prompts estruturados com frameworks produzem resultados de maior qualidade. O PromptQuorum inclui 9 frameworks integrados (Single Prompt Line, CRAFT, CO-STAR, RISEN, TRACE, APE, SPECS, Google Prompt, RTF) mais 2 slots de framework totalmente personalizáveis.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Single Prompt Line — estrutura mínima para tarefas rápidas</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CRAFT — Context, Role, Action, Format, Target (escrita criativa)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CO-STAR — Context, Objective, Style, Tone, Audience, Response (marketing, negócios)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>RISEN — Role, Instructions, Steps, End Goal, Narrowing (tarefas empresariais sequenciais)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>TRACE — Task, Request, Action, Context, Example (aprendizado few-shot)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>APE, SPECS, Google Prompt, RTF — otimizados para tipos de tarefa específicos</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Um Assistente de Frameworks recomenda o melhor framework conforme o tipo de tarefa.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Otimizar</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Refine com o seu próprio LLM</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">A qualidade do prompt melhora de forma mensurável com a otimização — prompts estruturados pontuam de 25 a 45% mais alto em avaliações de LLM. O PromptQuorum aplica 8 tipos de refinamento (Tornar Conciso, Expandir Detalhe, Dividir em Etapas, Aumentar Especificidade, Simplificar, Adicionar Controles de Qualidade, Consulta Multi-Especialista, Comprimir à Essência) mais detecção inteligente de temperatura.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Avaliação de qualidade — pontuação de 0-100% em clareza, especificidade, estrutura e restrições</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Temperatura inteligente — recomenda o nível ideal de criatividade (0.0-1.0) conforme o tipo de tarefa</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Histórico de versões — cada refinamento salvo; ramifique e compare caminhos de refinamento</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Modo ensino — explica por que cada alteração melhora a qualidade e a clareza</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>8 refinamentos com um clique — aplique transformações estruturadas instantaneamente</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Instrução personalizada — refinamento em texto livre usando o seu próprio LLM</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Seu LLM. Sua chave de API. Nada passa pelos servidores do PromptQuorum.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Despachar</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Envie para mais de 25 serviços de IA</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Enviar o mesmo prompt para vários modelos de IA revela qual deles funciona melhor para a sua tarefa. O PromptQuorum abre abas do navegador em paralelo para mais de 25 destinos sem precisar copiar e colar.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Despacho automático (17 serviços): OpenAI ChatGPT, Google Gemini, Anthropic Claude, Perplexity, xAI Grok, DeepSeek, Mistral, Cohere, Azure, Together, Groq e mais</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Copiar e colar (8 serviços): Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All e outros</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>O Perplexity envia automaticamente — prompt enviado imediatamente ao carregar</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>2 slots de URL personalizada — configure qualquer serviço de IA fora da lista padrão</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Refinamento opcional antes do despacho — aprimoramento final do LLM antes de enviar</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Execução em paralelo — todas as abas abrem simultaneamente; colete as respostas em menos de 1 minuto</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Todas as abas do navegador abrem em paralelo. Sem copiar e colar entre as abas.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Quorum</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Encontre consenso entre todos os modelos</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Quando mais de 5 modelos independentes concordam com uma resposta, a confiança é maior do que com um único modelo. Cole todas as respostas de volta no PromptQuorum e aplique 13 tipos de análise de consenso.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Resumo de consenso — identifica temas compartilhados e concordâncias unânimes</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Detecção de contradições — sinaliza onde os modelos divergem; identifica opiniões minoritárias</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Detecção de alucinação — identifica afirmações que aparecem em poucos modelos; possíveis dados falsos</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Pontuação de confiança — nível de certeza por modelo e por afirmação</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Seleção da melhor resposta — seleciona a resposta individual de maior qualidade</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Mesclagem ponderada — sintetiza uma resposta híbrida usando os melhores elementos de todos os modelos</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Quando mais de 5 modelos independentes convergem para a mesma resposta, o risco de alucinação é menor do que com um único modelo.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">9 Frameworks de Prompt Integrados</h3>
              <p className="text-text-secondary mb-6">Prompts estruturados com frameworks produzem resultados mensuravelmente melhores do que solicitações não estruturadas. Cada framework organiza a entrada de forma diferente para tipos de tarefa específicos. Um Assistente de Frameworks recomenda o mais adequado, ou crie 2 frameworks personalizados.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary">Framework</th>
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">Estrutura</th>
                      <th className="text-left py-2 sm:py-3 font-semibold text-text-primary">Ideal para</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Single Prompt Line</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">—</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Consultas rápidas e ad hoc sem estrutura</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">APE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Action · Purpose · Expectation</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Estrutura mínima de 3 campos; tarefas simples</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CRAFT</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Role · Action · Format · Target</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Escrita criativa; tarefas de uso geral</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CO-STAR</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Objective · Style · Tone · Audience · Response</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Textos de marketing; comunicação empresarial</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">SPECS</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Situation · Purpose · Expected Output · Context · Style</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Análise; pesquisa; redação técnica</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RISEN</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Instructions · Steps · End Goal · Narrowing</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Fluxos de trabalho empresariais de múltiplas etapas</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">TRACE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Request · Action · Context · Example</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Aprendizado few-shot; tarefas baseadas em exemplos</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Google Prompt</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Context · Persona</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Tarefas profissionais; prompts baseados em papéis</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RTF</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Task · Format</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Estrutura mínima; apenas 3 campos essenciais</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">13 Tipos de Análise Quorum</h3>
              <p className="text-text-secondary mb-6">Aplique 2 ou todas as 13 análises às respostas de vários modelos. Cada análise é executada pelo seu LLM conectado, não pelos servidores do PromptQuorum. Identifique consenso, contradições, alucinações e níveis de confiança em todos os resultados.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Síntese (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Resumo de consenso — temas compartilhados entre todos os modelos
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Mesclagem ponderada — resposta híbrida combinando o melhor de cada modelo
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Extração de fatos atômicos — desmembra afirmações em fatos discretos; conta a concordância entre modelos
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Comparação (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Mapeamento de sobreposição — identifica quais modelos produziram resultados idênticos
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Detecção de contradições — sinaliza afirmações onde os modelos divergem
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Pontuação de confiança — mede o nível de certeza por modelo e por afirmação
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Qualidade (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Verificação de completude — verifica se todas as informações necessárias estão presentes
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Detecção de alucinação — identifica afirmações em poucos modelos; possíveis dados falsos
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Eliminação de redundância — remove afirmações duplicadas ou quase duplicadas
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Seleção (4)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Seleção da melhor resposta — escolhe a resposta individual de maior qualidade
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Conjunto multi-modelo — combina resultados usando ponderação de confiabilidade por modelo
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Sinalizador de controvérsia — destaca afirmações onde a concordância entre modelos é fraca
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Análise personalizada — modelo de análise definido pelo usuário
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-secondary/30 border border-primary/20 rounded-xl p-6">
                <div className="text-sm font-semibold text-text-primary mb-2">Exporte resultados em 6 formatos</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.txt</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.md</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.json</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.csv</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.html</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.pdf</span>
                </div>
                <p className="text-xs text-text-muted mt-2">Múltiplos formatos → baixados como arquivo .zip. File System Access API para seleção de pasta (Chrome/Edge/Safari 16+).</p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-6">Conceitos-Chave</h3>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Despacho Multi-Modelo</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Enviar um prompt simultaneamente para mais de 25 modelos de IA com um único clique. O PromptQuorum pré-carrega seu prompt em cada destino via URL — sem copiar e colar, todas as abas abrem em paralelo.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Análise Quorum</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Comparação estruturada de respostas de vários modelos de IA para identificar consenso, contradições e níveis de confiança. O PromptQuorum oferece 13 tipos de análise, incluindo Detecção de Alucinação e Seleção da Melhor Resposta.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Pontuação de Consenso</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Uma classificação de confiança derivada do grau de concordância entre várias respostas de modelos. Maior consenso = maior confiabilidade. Menor consenso sinaliza áreas de incerteza ou possível alucinação.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Detecção de Alucinação</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Identificar afirmações factuais que aparecem em apenas um ou em uma minoria de modelos, indicando possível fabricação da IA. Cruzar mais de 5 modelos independentes reduz drasticamente a taxa de alucinações não detectadas.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">BYOM — Traga seu Próprio Modelo</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Conectar suas próprias chaves de API diretamente aos provedores de IA. As chaves são armazenadas apenas no localStorage do seu navegador e se conectam diretamente aos provedores — nenhum servidor do PromptQuorum recebe ou transmite suas credenciais.</dd>
                </div>
              </dl>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">Traga seu próprio modelo (BYOM) — Sem infraestrutura do PromptQuorum</h3>
              <p className="text-text-secondary mb-6">O PromptQuorum não hospeda nem executa nenhum modelo LLM. Cada chamada de API vai diretamente do seu navegador para o provedor escolhido. Suas chaves de API permanecem no localStorage do navegador e nunca são transmitidas aos servidores do PromptQuorum.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">APIs na nuvem (traga sua própria chave de API)</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      OpenAI (GPT-4, GPT-4o)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Anthropic (Claude 3.5)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Google Gemini 1.5
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Grok (xAI)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      DeepSeek
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Mistral
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Cohere
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Together AI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Groq
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      OpenRouter (free tier)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Modelos locais (sem chave de API; roda na sua máquina)</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Ollama (localhost:11434)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      LM Studio (localhost:1234)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Jan AI (localhost:1337)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      GPT4All (localhost:4891)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Open WebUI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      KoboldCpp
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      vLLM
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      oobabooga
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Any OpenAI-compatible endpoint
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-16">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Sem telemetria</h3>
                  <p className="text-text-secondary text-sm">Sem análise, sem rastreamento, sem registro, sem coleta de dados. Nem mesmo estatísticas de uso anônimas ou tempo de sessão.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Sem cadastro</h3>
                  <p className="text-text-secondary text-sm">Nenhum cadastro necessário. Sem e-mail, sem conta, sem login. Abra o app e comece imediatamente.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Funciona offline</h3>
                  <p className="text-text-secondary text-sm">O app de desktop (Electron) e o app móvel (Capacitor) suportam operação totalmente offline com modelos locais via Ollama, LM Studio, Jan AI ou endpoints compatíveis.</p>
                </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-3">Como testamos</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">Os dados de desempenho citados nos artigos do PromptQuorum são baseados em sessões de despacho controladas com o PromptQuorum. Quando um artigo cita números específicos (pontuações de qualidade de prompt, comparações de temperatura, valores de benchmark), estes refletem testes editoriais ou dados de benchmark públicos — não medições proprietárias do PromptQuorum, salvo indicação explícita.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Despacho de prompts: enviados simultaneamente aos modelos indicados via despacho com um clique do PromptQuorum
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Tamanho da amostra: testes editoriais usam no mínimo 30 prompts por condição, salvo indicação contrária
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Avaliação: as respostas são pontuadas por pelo menos 2 avaliadores independentes em revisão cega
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Benchmarks de terceiros (HumanEval, SWE-bench, MBPP): extraídos de publicações oficiais dos modelos ou leaderboards da comunidade; data de avaliação citada em cada artigo
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Testes de modelos locais: executados em hardware de consumidor no nível de quantização indicado no artigo
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Divulgação: onde testes internos do PromptQuorum são citados, eles são identificados com a etiqueta "Tested in PromptQuorum" no corpo do artigo
                </li>
              </ul>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Recursos</h2>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">Principais recursos em resumo</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">9 frameworks de prompt engineering (CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google, RTF)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Envio para 25+ modelos na nuvem simultaneamente (GPT-4o, Claude, Gemini, DeepSeek e mais)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">13 tipos de análise de consenso Quorum em 4 categorias (síntese, comparação, qualidade, seleção)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">A detecção de alucinação sinaliza afirmações que aparecem em apenas um modelo ou que contradizem o consenso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Suporte a LLM local: Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM e qualquer endpoint compatível com OpenAI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Privacidade em primeiro lugar: execução totalmente offline, sem necessidade de cadastro, nada sai do seu dispositivo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Comparação instantânea de respostas lado a lado de todos os modelos em tempo real</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Otimização automática de prompts com 8 técnicas de refinamento para melhores resultados de IA</span>
              </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Otimização de prompts</h3>
                <p className="text-text-secondary">Refine e otimize seus prompts automaticamente com 8 técnicas de refinamento comprovadas para melhores resultados de IA.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Envio multimodelo</h3>
                <p className="text-text-secondary">Execute prompts no ChatGPT, Claude, Gemini e mais 25+ modelos simultaneamente em paralelo.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Pontuação Quorum</h3>
                <p className="text-text-secondary">Encontre respostas de consenso entre modelos com pontuação de confiança. A detecção de alucinação sinaliza afirmações que aparecem em apenas um modelo.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Comparação instantânea</h3>
                <p className="text-text-secondary">Obtenha respostas em paralelo com um clique — sem copiar e colar manualmente entre abas do navegador.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Privacidade em primeiro lugar</h3>
                <p className="text-text-secondary">Opção de execução local. Sem necessidade de cadastro. Controle total sobre seus prompts.</p>
              </div>
            </div>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-8">
              <PromptOptimizerShowcase lang="pt" />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">Como você revisa os resultados da otimização?</h3>
              <p className="text-text-secondary mb-6">Revise avaliações de qualidade, histórico de versões e sugestões de melhoria para seus prompts otimizados.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <OptimizationShowcase lang="pt" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Controle de versões</h4>
                  <p className="text-text-secondary text-sm">Acompanhe todas as iterações do seu prompt. Reverta para versões anteriores a qualquer momento ou crie ramificações para explorar diferentes caminhos de otimização.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Insights de qualidade</h4>
                  <p className="text-text-secondary text-sm">Entenda exatamente por que seu prompt foi aprimorado. Receba feedback detalhado sobre pontos fortes e áreas a refinar.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Refinamentos inteligentes</h4>
                  <p className="text-text-secondary text-sm">Aplique refinamentos com um clique para tornar seu prompt mais conciso, claro, profissional ou detalhado, conforme necessário.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">O que é o Quorum — Consenso multimodelo?</h3>
              <p className="text-text-secondary mb-6">Colete respostas de 25+ modelos de IA, analise padrões de consenso e sintetize percepções de diferentes perspectivas.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <QuorumShowcase lang="pt" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Coletar respostas</h4>
                  <p className="text-text-secondary text-sm">Execute seu prompt no ChatGPT, Claude, Gemini e mais de 25 outros modelos. Obtenha perspectivas e respostas diversas instantaneamente.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Analisar padrões</h4>
                  <p className="text-text-secondary text-sm">Identifique em que todos os modelos concordam (consenso), onde divergem e quais respostas têm a maior qualidade para seu caso de uso.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Sintetizar insights</h4>
                  <p className="text-text-secondary text-sm">Combine os pontos fortes de vários modelos em respostas melhores. Exporte os resultados em vários formatos para uso posterior.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Compare Tools */}
          <section id="compare-tools" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Comparar ferramentas</h2>
            <p className="text-text-secondary mb-4">Veja como a PromptQuorum se compara a outras ferramentas de prompt de IA.</p>
            <Link href="/pt/compare" className="text-primary hover:text-primary/80 font-medium">
              Ver comparação completa →
            </Link>
          </section>

          {/* Repeat CTA */}
          <div className="text-center py-12 border-t border-primary/20">
            <Link
              href="/pt/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Testar a Beta
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
