import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FRAMEWORKS, FRAMEWORK_SLUGS, getFrameworkLocalized } from '@/lib/frameworksData'
import { getFrameworkUiLabels } from '@/lib/frameworksUiLabels'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

const LANG = 'ko' as const

const COMPLEXITY_COLOR: Record<string, string> = {
  Low: 'text-green-400 bg-green-400/10 border-green-400/30',
  Medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  High: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
}

export function generateStaticParams() {
  return FRAMEWORK_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const fw = getFrameworkLocalized(slug, LANG)
  if (!fw) return {}

  const fwTitle = fw.seoTitle ?? `${fw.name} Prompt Framework — Fields, Examples & When To Use It | PromptQuorum`
  const fwDesc = fw.metaDescription ?? `${fw.expansion}. ${fw.tagline} See all fields, a real example, and when to use ${fw.name} vs other prompt frameworks.`
  const ogImageUrl = `https://www.promptquorum.com/api/og/${fw.slug}?lang=${LANG}`
  return {
    title: fwTitle,
    description: fwDesc,
    alternates: generateAlternates(`/frameworks/${fw.slug}`, LANG, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      type: 'article',
      url: `https://www.promptquorum.com/ko/frameworks/${fw.slug}`,
      siteName: 'PromptQuorum',
      title: fwTitle,
      description: fw.tagline,
      images: [{ url: ogImageUrl, width: 1200, height: 675, alt: `${fw.name} Prompt Framework` }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: fwTitle,
      description: fw.tagline,
      images: [ogImageUrl],
    },
  }
}

export default async function KoFrameworkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fw = getFrameworkLocalized(slug, LANG)
  if (!fw) notFound()

  const labels = getFrameworkUiLabels(LANG)
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
              'headline': fw.seoTitle ?? `${fw.name} Prompt Framework — Fields, Examples & When To Use It`,
              'description': fw.tagline,
              'url': `https://www.promptquorum.com/ko/frameworks/${fw.slug}`,
              'inLanguage': LANG,
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
              'datePublished': fw.publishDate ?? '2026-03-16',
              'dateModified': fw.dateModified ?? '2026-03-16',
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
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': labels.home, 'item': 'https://www.promptquorum.com/ko' },
                { '@type': 'ListItem', 'position': 2, 'name': labels.frameworks, 'item': 'https://www.promptquorum.com/ko/frameworks' },
                { '@type': 'ListItem', 'position': 3, 'name': fw.name, 'item': `https://www.promptquorum.com/ko/frameworks/${fw.slug}` },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-text-muted mb-8">
            <Link href="/ko" className="hover:text-primary transition-colors">{labels.home}</Link>
            <span>/</span>
            <Link href="/ko/frameworks" className="hover:text-primary transition-colors">{labels.frameworks}</Link>
            <span>/</span>
            <span className="text-text-primary">{fw.name}</span>
          </nav>

          {/* Hero */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${COMPLEXITY_COLOR[fw.complexity]}`}>
                {labels.complexity[fw.complexity]} {labels.complexitySuffix}
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

          {/* Definition block */}
          <section className="mb-12">
            <div className="bg-card border border-primary/20 rounded-xl p-6">
              <dl>
                <dt className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{labels.definition}</dt>
                <dd className="text-text-secondary leading-relaxed">
                  {labels.definitionBody(fw.name, fw.expansion, fw.fields.length, fw.bestFor[0].toLowerCase())}
                </dd>
              </dl>
            </div>
          </section>

          {/* Fields */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6">{labels.fieldsHeading(fw.fields.length)}</h2>
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
            <h2 className="text-2xl font-bold text-text-primary mb-2">{labels.realExample}</h2>
            <p className="text-text-muted text-sm mb-6">{labels.scenario} {fw.example.scenario}</p>
            <div className="bg-card border border-primary/30 rounded-xl p-6">
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{labels.promptLabel(fw.name)}</div>
              <p className="text-text-secondary leading-relaxed font-mono text-sm whitespace-pre-wrap">{fw.example.prompt}</p>
            </div>
          </section>

          {/* Best for / Not for */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6">{labels.whenToUse(fw.name)}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card border border-primary/20 rounded-xl p-6">
                <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-4">{labels.bestFor}</div>
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
                <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-4">{labels.notIdealFor}</div>
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
            <h2 className="text-2xl font-bold text-text-primary mb-6">{labels.faqHeading}</h2>
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
              <h2 className="text-2xl font-bold text-text-primary mb-6">{labels.relatedHeading}</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map(r => (
                  <Link
                    key={r.slug}
                    href={`/ko/frameworks/${r.slug}`}
                    className="bg-card border border-primary/20 rounded-xl p-4 hover:border-primary/50 transition-colors"
                  >
                    <div className="font-bold text-primary mb-1">{r.name}</div>
                    <div className="text-xs text-text-muted">{r.expansion}</div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Nav */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-primary/20">
            <Link href="/ko" className="text-primary hover:text-primary/80 font-medium text-sm">← {labels.home}</Link>
            <Link href="/ko/frameworks" className="text-primary hover:text-primary/80 font-medium text-sm">{labels.allFrameworks}</Link>
          </div>

        </div>
      </div>
    </>
  )
}
