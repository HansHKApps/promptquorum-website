import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Image Usage Rights — PromptQuorum',
  description:
    'Licensing terms for PromptQuorum diagrams, comparison charts, and infographics. Created by Hans Kuepper. Editorial use with attribution permitted.',
  openGraph: {
    title: 'Image Usage Rights — PromptQuorum',
    description:
      'Licensing terms for PromptQuorum diagrams, comparison charts, and infographics.',
    type: 'website',
    siteName: 'PromptQuorum',
  },
  robots: { index: true, follow: true },
}

export default function ImageLicensePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'url': 'https://www.promptquorum.com/image-license',
              'name': 'Image Usage Rights — PromptQuorum',
              'description':
                'Licensing terms for PromptQuorum diagrams, comparison charts, and infographics.',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              'author': {
                '@type': 'Person',
                'name': 'Hans Kuepper',
                'url': 'https://www.promptquorum.com/about',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://www.promptquorum.com',
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Image Usage Rights',
                  'item': 'https://www.promptquorum.com/image-license',
                },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Image Usage Rights
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              All diagrams, comparison charts, and infographics on PromptQuorum are original works
              created by Hans Kuepper and are copyright PromptQuorum. This page defines the terms
              under which these images may be used.
            </p>
          </div>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-text-primary mb-4">What This Covers</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              The following image types published at promptquorum.com are covered by this license page:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">—</span><span>SVG diagrams embedded in local LLM and prompt engineering articles</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">—</span><span>Hardware comparison charts and quantization reference tables</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">—</span><span>AI regulation timelines and framework infographics</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">—</span><span>Model performance radar charts and decision-tree graphics</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">—</span><span>All other original visualizations published across the site (600+ images in 5 languages)</span></li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              All images carry embedded Dublin Core metadata (creator, rights, source URL) and a visible
              attribution mark in the bottom-right corner.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Usage Terms</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  type: 'Editorial / Educational',
                  status: 'Permitted with attribution',
                  detail:
                    'You may reproduce PromptQuorum images in articles, research, or educational materials provided you include "© PromptQuorum" and a link to the source article URL.',
                  color: 'text-green-600',
                },
                {
                  type: 'Social sharing',
                  status: 'Permitted',
                  detail:
                    'Sharing images on social platforms with the original context intact is permitted. Do not crop out the promptquorum.com attribution mark.',
                  color: 'text-green-600',
                },
                {
                  type: 'AI training data',
                  status: 'Attribution required',
                  detail:
                    'Use in AI training datasets requires retention of embedded metadata and visible attribution. Commercial AI training use requires prior written permission.',
                  color: 'text-yellow-600',
                },
                {
                  type: 'Commercial / Product',
                  status: 'Contact required',
                  detail:
                    'Use in commercial products, paid publications, SaaS products, or any context that does not include attribution requires written permission.',
                  color: 'text-red-500',
                },
              ].map(({ type, status, detail, color }) => (
                <div key={type} className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{type}</div>
                  <div className={`font-semibold mb-2 ${color}`}>{status}</div>
                  <p className="text-sm text-text-secondary leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Attribution Format</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              When attribution is required, use one of the following formats:
            </p>
            <div className="bg-card border border-primary/20 rounded-xl p-6 space-y-4">
              <div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Minimum</div>
                <code className="text-sm text-text-primary">© PromptQuorum — promptquorum.com</code>
              </div>
              <div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">With source link</div>
                <code className="text-sm text-text-primary">© PromptQuorum — [source article URL]</code>
              </div>
              <div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Full</div>
                <code className="text-sm text-text-primary">
                  © Hans Kuepper / PromptQuorum (https://www.promptquorum.com). Original article: [URL].
                </code>
              </div>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Copyright Holder</h2>
            <div className="bg-card border border-primary/20 rounded-xl p-6">
              <dl className="space-y-3 text-sm">
                <div className="flex gap-4">
                  <dt className="font-semibold text-text-primary w-32 flex-shrink-0">Creator</dt>
                  <dd className="text-text-secondary">Hans Kuepper</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-semibold text-text-primary w-32 flex-shrink-0">Organization</dt>
                  <dd className="text-text-secondary">PromptQuorum</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-semibold text-text-primary w-32 flex-shrink-0">Website</dt>
                  <dd className="text-text-secondary">https://www.promptquorum.com</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-semibold text-text-primary w-32 flex-shrink-0">Image count</dt>
                  <dd className="text-text-secondary">600+ original SVGs across 5 languages (EN, DE, FR, JA, ZH)</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-semibold text-text-primary w-32 flex-shrink-0">Metadata</dt>
                  <dd className="text-text-secondary">Dublin Core embedded in all SVG files (dc:creator, dc:rights, dc:source)</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-semibold text-text-primary w-32 flex-shrink-0">Contact</dt>
                  <dd className="text-text-secondary">
                    <a href="mailto:hello@promptquorum.com" className="text-primary hover:text-primary/80">
                      hello@promptquorum.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          <div className="flex flex-wrap gap-4 pt-8 border-t border-primary/20">
            <Link href="/" className="text-primary hover:text-primary/80 font-medium text-sm">← Home</Link>
            <Link href="/about" className="text-primary hover:text-primary/80 font-medium text-sm">About</Link>
            <Link href="/privacy" className="text-primary hover:text-primary/80 font-medium text-sm">Privacy Policy</Link>
          </div>

        </div>
      </div>
    </>
  )
}
