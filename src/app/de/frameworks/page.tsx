import type { Metadata } from 'next'
import Link from 'next/link'
import { translations } from '@/translations'
import { FRAMEWORKS } from '@/lib/frameworksData'
import { generateAlternates } from '@/lib/hreflang'

const COMPLEXITY_COLOR: Record<string, string> = {
  Low: 'text-green-400 bg-green-400/10 border-green-400/30',
  Medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  High: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
}

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'de'
  const t = translations[lang]

  return {
    title: t.frameworksMetaTitle,
    description: t.frameworksMetaDescription,
    alternates: generateAlternates('/frameworks', lang, true, undefined, ['ja', 'zh', 'de', 'fr']),
    openGraph: {
      title: t.frameworksMetaTitle,
      description: t.frameworksMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.frameworksMetaTitle,
      description: t.frameworksMetaDescription,
    },
  }
}

export default async function DeFrameworksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Prompt Engineering Frameworks',
            'description': 'Complete guides to 9 prompt engineering frameworks: CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, RTF, Google Prompt, and Single Prompt Line.',
            'url': 'https://www.promptquorum.com/de/frameworks',
            'hasPart': FRAMEWORKS.map(fw => ({
              '@type': 'Article',
              'name': `${fw.name} Prompt Framework`,
              'url': `https://www.promptquorum.com/de/frameworks/${fw.slug}`,
              'description': fw.tagline,
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 text-center border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Prompt Engineering</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              9 Prompt Frameworks, Explained
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Every framework, with its fields, a real example, and guidance on when to use it — and when not to.
            </p>
          </div>

          {/* Quick reference table */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Quick Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-3 pr-6 font-semibold text-text-primary">Framework</th>
                    <th className="text-left py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">Fields</th>
                    <th className="text-left py-3 pr-6 font-semibold text-text-primary">Best For</th>
                    <th className="text-left py-3 font-semibold text-text-primary">Level</th>
                  </tr>
                </thead>
                <tbody>
                  {FRAMEWORKS.map(fw => (
                    <tr key={fw.slug} className="border-b border-primary/10 hover:bg-card transition-colors">
                      <td className="py-3 pr-6">
                        <Link href={`/ja/frameworks/${fw.slug}`} className="font-bold text-primary hover:underline">
                          {fw.name}
                        </Link>
                        {fw.badge && (
                          <div className="text-xs text-text-muted mt-0.5">{fw.badge}</div>
                        )}
                      </td>
                      <td className="py-3 pr-6 text-text-muted font-mono text-xs hidden md:table-cell">{fw.expansion}</td>
                      <td className="py-3 pr-6 text-text-secondary">{fw.bestFor[0]}</td>
                      <td className="py-3">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${COMPLEXITY_COLOR[fw.complexity]}`}>
                          {fw.complexity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Framework cards */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8">All Frameworks</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {FRAMEWORKS.map(fw => (
                <Link
                  key={fw.slug}
                  href={`/ja/frameworks/${fw.slug}`}
                  className="bg-card border border-primary/20 rounded-2xl p-6 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary group-hover:text-primary/80">{fw.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${COMPLEXITY_COLOR[fw.complexity]}`}>
                      {fw.complexity}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted font-mono mb-3">{fw.expansion}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{fw.tagline}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
