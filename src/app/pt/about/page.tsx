import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'pt'
  const t = translations[lang]

  return {
    title: t.aboutMetaTitle,
    description: t.aboutMetaDescription,
    alternates: generateAlternates('/about', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
    },
  }
}

export default function PtAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              'url': 'https://www.promptquorum.com/pt/about',
              'name': 'Sobre o PromptQuorum',
              'description': 'O PromptQuorum é uma ferramenta de despacho e consenso de IA multi-modelo com foco em privacidade, desenvolvida por Hans Kuepper.',
              'inLanguage': 'pt',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://www.promptquorum.com/pt/about#founder',
              'name': 'Hans Kuepper',
              'url': 'https://www.promptquorum.com/pt/about',
              'jobTitle': 'Fundador e desenvolvedor',
              'worksFor': {
                '@type': 'Organization',
                'name': 'PromptQuorum',
                'url': 'https://www.promptquorum.com',
              },
              'sameAs': [
                'https://www.linkedin.com/in/hanskuepper/',
                'https://x.com/HansKuepperAPPs',
                'https://github.com/HansHKApps',
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': 'https://www.promptquorum.com/pt' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Sobre', 'item': 'https://www.promptquorum.com/pt/about' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Sobre</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Construído para pessoas que precisam confiar nas suas respostas de IA.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              O PromptQuorum é uma ferramenta de despacho e consenso de IA multi-modelo. Um prompt para cada modelo.
              Um veredicto no qual você realmente pode confiar.
            </p>
          </div>

          {/* Founder */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">O desenvolvedor</h2>
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">HK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">Hans Kuepper</h3>
                  <p className="text-sm text-primary font-medium mb-4">Fundador &amp; desenvolvedor, PromptQuorum</p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">Experiência</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Hans mora em Baden-Württemberg, Alemanha, perto de Heidelberg no Kraichgau.
                    É um desenvolvedor independente multilíngue que fala alemão, inglês, francês e russo com fluência.
                    Nas últimas duas décadas, viveu e trabalhou em mais de 20 países pela Europa, Ásia e além,
                    colaborando com equipes distribuídas e criando ferramentas para públicos globais.
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">Por que o PromptQuorum</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    O PromptQuorum nasceu de uma frustração simples: quando você precisa de uma resposta confiável,
                    consultar um único modelo de IA não é suficiente. Modelos diferentes alucinam de formas diferentes,
                    cometem erros diferentes e têm sucesso em tipos diferentes de raciocínio. A verdade está na sobreposição —
                    quando cinco modelos independentes concordam com uma resposta, a confiança é dramaticamente maior
                    do que quando um único modelo responde sozinho.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Antes de construir o PromptQuorum, Hans passou anos trabalhando com fluxos de trabalho de IA empresarial
                    e viu repetidamente o mesmo problema: equipes e organizações confiando nas saídas de um único modelo
                    para decisões de alto risco — decisões de contratação, resumos de pesquisa médica, análises jurídicas,
                    avaliações de risco — sem nenhuma camada de verificação ou mecanismo de consenso. Decisões de alto risco
                    merecem algo melhor. O PromptQuorum é a ferramenta que ele queria que existisse.
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">Filosofia</h4>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Hans acredita que privacidade e autonomia do usuário devem ser inegociáveis em ferramentas de IA.
                    O PromptQuorum é construído sobre um princípio simples: seus prompts, suas chaves de API e suas respostas pertencem a você.
                    A ferramenta facilita o consenso e a comparação entre modelos de IA, mas nada passa pelos servidores do PromptQuorum.
                    Você está no controle.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.linkedin.com/in/hanskuepper/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://x.com/HansKuepperAPPs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      X / Twitter
                    </a>
                    <a
                      href="https://github.com/HansHKApps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://substack.com/@promptquorum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      Substack
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Por que o PromptQuorum existe</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Todo grande modelo de IA alucina. GPT-4o, Claude, Gemini — todos fabricam fatos,
                perdem contexto e produzem respostas erradas que soam confiantes. A diferença é <em>quais</em> fatos
                cada um inventa e <em>quando</em>.
              </p>
              <p>
                Quando cinco modelos independentes concordam com uma resposta, a probabilidade de que todos os cinco tenham fabricado
                o mesmo detalhe específico é dramaticamente menor do que quando um único modelo responde sozinho.
                Consenso é um sinal de confiabilidade. O PromptQuorum torna fácil coletar esse sinal.
              </p>
              <p>
                O segundo problema é a privacidade. A maioria das ferramentas de IA roteia seus prompts por seus próprios servidores.
                O PromptQuorum não faz isso. Suas chaves de API se conectam diretamente do seu navegador aos seus provedores escolhidos.
                Nada passa pela infraestrutura do PromptQuorum — nem seus prompts,
                nem suas chaves de API, nem suas respostas.
              </p>
            </div>
          </section>

          {/* Product facts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">O produto</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Lançamento', value: 'Beta — julho de 2026' },
                { label: 'Preço', value: 'Gratuito. Traga sua própria chave de API.' },
                { label: 'Modelo de privacidade', value: 'BYOM — zero transmissão por servidor' },
                { label: 'Modelos de IA suportados', value: '25+ na nuvem + ilimitados locais via Ollama' },
                { label: 'Frameworks de prompts', value: '9 integrados + 2 slots personalizados' },
                { label: 'Tipos de análise Quorum', value: '13, incluindo detecção de alucinações' },
                { label: 'Suporte offline', value: 'Completo — via Ollama, LM Studio, Jan AI' },
                { label: 'Cadastro necessário', value: 'Nenhum. Abra o app e comece.' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{label}</div>
                  <div className="text-text-primary font-medium">{value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Contato</h2>
            <p className="text-text-secondary mb-4">
              Para consultas de imprensa, propostas de parceria ou feedback:
            </p>
            <a
              href="mailto:hello@promptquorum.com"
              className="text-primary hover:text-primary/80 font-medium"
            >
              hello@promptquorum.com
            </a>
          </section>

          {/* Nav */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-primary/20">
            <Link href="/pt" className="text-primary hover:text-primary/80 font-medium text-sm">← Início</Link>
            <Link href="/pt/how-it-works" className="text-primary hover:text-primary/80 font-medium text-sm">Como funciona</Link>
            <Link href="/pt/compare" className="text-primary hover:text-primary/80 font-medium text-sm">Comparar ferramentas</Link>
            <Link href="/pt/blog" className="text-primary hover:text-primary/80 font-medium text-sm">Blog</Link>
          </div>

        </div>
      </div>
    </>
  )
}
