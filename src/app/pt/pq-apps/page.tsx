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
            <h2 className="text-2xl font-bold text-text-primary mb-6">Como funciona</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">1</div>
                <div className="text-text-primary font-semibold mb-1">Escreva seu prompt estruturado</div>
                <div className="text-sm text-text-secondary">Comece com um dos 9 frameworks integrados — CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google Prompt, RTF ou Single Prompt Line.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2</div>
                <div className="text-text-primary font-semibold mb-1">Otimize com seu próprio LLM</div>
                <div className="text-sm text-text-secondary">Opcionalmente, refine a estrutura e a redação do seu prompt usando o LLM conectado antes do envio.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">3</div>
                <div className="text-text-primary font-semibold mb-1">Envie para mais de 25 modelos de IA</div>
                <div className="text-sm text-text-secondary">Um clique abre todos os destinos em paralelo — GPT-4o, Claude, Gemini, Grok, DeepSeek, Mistral e outros, além de modelos locais via Ollama.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">4</div>
                <div className="text-text-primary font-semibold mb-1">Execute a análise Quorum</div>
                <div className="text-sm text-text-secondary">Compare as respostas com 13 tipos de análise — detecção de alucinações, detecção de contradições, resumo de consenso e mais.</div>
              </div>
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
