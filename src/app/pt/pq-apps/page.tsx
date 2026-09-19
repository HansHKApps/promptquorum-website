import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

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
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Preços</div>
                  <div className="text-text-primary font-medium">Grátis. Traga sua própria chave de API.</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Modelo de privacidade</div>
                  <div className="text-text-primary font-medium">BYOM — zero transmissão ao servidor</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Modelos de IA compatíveis</div>
                  <div className="text-text-primary font-medium">25+ na nuvem + ilimitados localmente via Ollama</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Frameworks de prompt</div>
                  <div className="text-text-primary font-medium">9 integrados + 2 slots personalizados</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Tipos de análise Quorum</div>
                  <div className="text-text-primary font-medium">13, incluindo detecção de alucinações</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Suporte offline</div>
                  <div className="text-text-primary font-medium">Total — via Ollama, LM Studio, Jan AI</div>
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
