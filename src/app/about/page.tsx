import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import Link from 'next/link'

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: t.aboutMetaTitle,
    description: t.aboutMetaDescription,
    alternates: generateAlternates('/about'),
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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              'url': 'https://www.promptquorum.com/about',
              'name': 'About PromptQuorum',
              'description': 'PromptQuorum is a privacy-first, multi-model AI dispatch and consensus tool built by Hans Kuepper.',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://www.promptquorum.com/about#founder',
              'name': 'Hans Kuepper',
              'url': 'https://www.promptquorum.com/about',
              'jobTitle': 'Founder & Developer',
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
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com' },
                { '@type': 'ListItem', 'position': 2, 'name': 'About', 'item': 'https://www.promptquorum.com/about' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">About</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Built for people who need to trust their AI answers.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              PromptQuorum is a multi-model AI dispatch and consensus tool. One prompt to every model.
              One verdict you can actually trust.
            </p>
          </div>

          {/* Founder */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">The Developer</h2>
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">HK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">Hans Kuepper</h3>
                  <p className="text-sm text-primary font-medium mb-4">Founder &amp; Developer, PromptQuorum</p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Independent developer building privacy-first tools for the AI era.
                    PromptQuorum started from a simple frustration: when you need a reliable answer,
                    querying one AI model is not enough. Different models hallucinate differently.
                    The truth is in the overlap.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Before building PromptQuorum, I spent years working with enterprise AI workflows
                    and saw the same problem repeatedly — teams trusting single-model outputs for
                    high-stakes decisions without any verification layer. PromptQuorum is the tool
                    I wanted to exist.
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
            <h2 className="text-2xl font-bold text-text-primary mb-6">Why PromptQuorum Exists</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Every major AI model hallucinates. GPT-4o, Claude, Gemini — all of them fabricate facts,
                miss context, and produce confident-sounding wrong answers. The difference is <em>which</em> facts
                each one gets wrong, and <em>when</em>.
              </p>
              <p>
                When five independent models agree on an answer, the probability that all five fabricated
                the same specific detail is dramatically lower than when one model answers alone.
                Consensus is a reliability signal. PromptQuorum makes it easy to collect that signal.
              </p>
              <p>
                The second problem is privacy. Most AI tools route your prompts through their own servers.
                PromptQuorum does not. Your API keys connect directly from your browser to your chosen
                providers. Nothing passes through PromptQuorum infrastructure — not your prompts,
                not your API keys, not your responses.
              </p>
            </div>
          </section>

          {/* Product facts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">The Product</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Launched', value: 'Beta — April 2026' },
                { label: 'Pricing', value: 'Free. Bring your own API key.' },
                { label: 'Privacy model', value: 'BYOM — zero server transmission' },
                { label: 'AI models supported', value: '25+ cloud + unlimited local via Ollama' },
                { label: 'Prompt frameworks', value: '9 built-in + 2 custom slots' },
                { label: 'Quorum analysis types', value: '13, including hallucination detection' },
                { label: 'Offline support', value: 'Full — via Ollama, LM Studio, Jan AI' },
                { label: 'Registration required', value: 'None. Open the app and start.' },
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
            <h2 className="text-2xl font-bold text-text-primary mb-4">Contact</h2>
            <p className="text-text-secondary mb-4">
              For press enquiries, partnership proposals, or feedback:
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
            <Link href="/" className="text-primary hover:text-primary/80 font-medium text-sm">← Home</Link>
            <Link href="/how-it-works" className="text-primary hover:text-primary/80 font-medium text-sm">How It Works</Link>
            <Link href="/compare" className="text-primary hover:text-primary/80 font-medium text-sm">Compare Tools</Link>
            <Link href="/blog" className="text-primary hover:text-primary/80 font-medium text-sm">Blog</Link>
          </div>

        </div>
      </div>
    </>
  )
}
