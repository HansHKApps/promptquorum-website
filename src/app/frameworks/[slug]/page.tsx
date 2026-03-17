import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FRAMEWORKS, FRAMEWORK_SLUGS, getFramework } from '@/lib/frameworksData'

export function generateStaticParams() {
  return FRAMEWORK_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const fw = getFramework(slug)
  if (!fw) return {}
  return {
    title: `${fw.name} Prompt Framework — Fields, Examples & When To Use It | PromptQuorum`,
    description: `${fw.expansion}. ${fw.tagline} See all fields, a real example, and when to use ${fw.name} vs other prompt frameworks.`,
    alternates: {
      canonical: `https://www.promptquorum.com/frameworks/${fw.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `https://www.promptquorum.com/frameworks/${fw.slug}`,
      siteName: 'PromptQuorum',
      title: `${fw.name} Prompt Framework — Complete Guide`,
      description: `${fw.tagline}`,
      images: [{ url: 'https://www.promptquorum.com/og-image.png', width: 1200, height: 630, alt: `${fw.name} Prompt Framework` }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: `${fw.name} Prompt Framework — Complete Guide`,
      description: fw.tagline,
      images: ['https://www.promptquorum.com/og-image.png'],
    },
  }
}

const COMPLEXITY_COLOR: Record<string, string> = {
  Low: 'text-green-400 bg-green-400/10 border-green-400/30',
  Medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  High: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
}

export default async function FrameworkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fw = getFramework(slug)
  if (!fw) notFound()

  const related = FRAMEWORKS.filter(f => fw.related.includes(f.slug))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              'headline': `${fw.name} Prompt Framework — Fields, Examples & When To Use It`,
              'description': fw.tagline,
              'url': `https://www.promptquorum.com/frameworks/${fw.slug}`,
              'author': {
                '@type': 'Person',
                'name': 'Hans Kuepper',
                'url': 'https://www.promptquorum.com/about',
              },
              'publisher': {
                '@type': 'Organization',
                'name': 'PromptQuorum',
                'url': 'https://www.promptquorum.com',
              },
              'datePublished': '2026-03-16',
              'dateModified': '2026-03-16',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': fw.faq.map(({ q, a }) => ({
                '@type': 'Question',
                'name': q,
                'acceptedAnswer': { '@type': 'Answer', 'text': a },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              'name': `How to use the ${fw.name} prompt framework`,
              'description': `A step-by-step guide to using the ${fw.name} framework for AI prompt engineering.`,
              'step': fw.fields.map((field, i) => ({
                '@type': 'HowToStep',
                'position': i + 1,
                'name': `Fill in ${field.name}`,
                'text': field.description,
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Frameworks', 'item': 'https://www.promptquorum.com/frameworks' },
                { '@type': 'ListItem', 'position': 3, 'name': fw.name, 'item': `https://www.promptquorum.com/frameworks/${fw.slug}` },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-text-muted mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/frameworks" className="hover:text-primary transition-colors">Frameworks</Link>
            <span>/</span>
            <span className="text-text-primary">{fw.name}</span>
          </nav>

          {/* Hero */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${COMPLEXITY_COLOR[fw.complexity]}`}>
                {fw.complexity} complexity
              </span>
              {fw.badge && (
                <span className="text-xs font-bold px-3 py-1 rounded-full border text-primary bg-primary/10 border-primary/30">
                  {fw.badge}
                </span>
              )}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              {fw.name} Framework
            </h1>
            <p className="text-lg text-primary font-mono mb-4">{fw.expansion}</p>
            <p className="text-xl text-text-secondary leading-relaxed">{fw.tagline}</p>
          </div>

          {/* Definition block — GEO anchor */}
          <section className="mb-12">
            <div className="bg-card border border-primary/20 rounded-xl p-6">
              <dl>
                <dt className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Definition</dt>
                <dd className="text-text-secondary leading-relaxed">
                  The <strong className="text-text-primary">{fw.name} framework</strong> ({fw.expansion}) is a prompt engineering structure
                  that breaks your AI request into {fw.fields.length} discrete fields.
                  It is best suited for {fw.bestFor[0].toLowerCase()}.
                </dd>
              </dl>
            </div>
          </section>

          {/* Fields */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6">The {fw.fields.length} Fields</h2>
            <div className="space-y-4">
              {fw.fields.map((field, i) => (
                <div key={field.name} className="flex gap-4 bg-card border border-primary/20 rounded-xl p-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">{field.name}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{field.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Example */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Real Example</h2>
            <p className="text-text-muted text-sm mb-6">Scenario: {fw.example.scenario}</p>
            <div className="bg-card border border-primary/30 rounded-xl p-6">
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{fw.name} Prompt</div>
              <p className="text-text-secondary leading-relaxed font-mono text-sm whitespace-pre-wrap">{fw.example.prompt}</p>
            </div>
          </section>

          {/* Best for / Not for */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6">When to Use {fw.name}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card border border-primary/20 rounded-xl p-6">
                <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-4">Best for</div>
                <ul className="space-y-2">
                  {fw.bestFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-6">
                <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-4">Not ideal for</div>
                <ul className="space-y-2">
                  {fw.notFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-orange-400 mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {fw.faq.map(({ q, a }) => (
                <div key={q} className="bg-card border border-primary/20 rounded-xl p-6">
                  <h3 className="font-semibold text-text-primary mb-2">{q}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related frameworks */}
          {related.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Related Frameworks</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map(r => (
                  <Link
                    key={r.slug}
                    href={`/frameworks/${r.slug}`}
                    className="bg-card border border-primary/20 rounded-xl p-4 hover:border-primary/50 transition-colors"
                  >
                    <div className="font-bold text-primary mb-1">{r.name}</div>
                    <div className="text-xs text-text-muted">{r.expansion}</div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mb-10">
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Use {fw.name} inside PromptQuorum
            </h2>
            <p className="text-text-secondary text-sm mb-6">
              All 9 frameworks are built in. Write, optimize with your own LLM, dispatch to 25+ AI models, and run consensus analysis — free, no account required.
            </p>
            <Link
              href="/#waitlist"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-primary/20">
            <Link href="/frameworks" className="text-primary hover:text-primary/80 font-medium text-sm">← All Frameworks</Link>
            <Link href="/blog/prompt-frameworks" className="text-primary hover:text-primary/80 font-medium text-sm">Framework Comparison Guide</Link>
            <Link href="/how-it-works" className="text-primary hover:text-primary/80 font-medium text-sm">How PromptQuorum Works</Link>
          </div>

        </div>
      </div>
    </>
  )
}
