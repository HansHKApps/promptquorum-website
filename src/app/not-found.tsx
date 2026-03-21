import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found — PromptQuorum',
  description: 'The page you were looking for could not be found.',
  robots: { index: false, follow: false },
}

const HELPFUL_LINKS = [
  { href: '/', label: 'Home', desc: 'Back to the start' },
  { href: '/features', label: 'Features', desc: 'What PromptQuorum does' },
  { href: '/how-it-works', label: 'How It Works', desc: 'Step-by-step overview' },
  { href: '/compare', label: 'Compare Tools', desc: 'How we compare to alternatives' },
  { href: '/faq', label: 'FAQ', desc: 'Common questions answered' },
  { href: '/blog', label: 'Blog', desc: 'Latest writing and updates' },
  { href: '/prompt-engineering', label: 'Prompt Engineering', desc: 'Guides, frameworks and techniques' },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="py-16 border-b border-primary/20 mb-16">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">404</p>
          <div className="text-8xl sm:text-9xl font-bold text-primary/10 mb-2 select-none" aria-hidden="true">
            404
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            This page doesn&apos;t exist.
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            The URL might be mistyped, the page may have moved, or it never existed.
            Either way — you&apos;re not missing much here.
          </p>
        </div>

        {/* Helpful links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Here&apos;s where you probably wanted to go</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {HELPFUL_LINKS.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="bg-card border border-primary/20 rounded-xl p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
              >
                <div className="text-sm font-bold text-primary mb-1 group-hover:text-primary/80">{label}</div>
                <div className="text-sm text-text-secondary">{desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Waiting for PromptQuorum?
            </h2>
            <p className="text-text-secondary mb-6">
              Beta launches April 2026. Join the waitlist and be the first to know.
            </p>
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
        </section>

        {/* Nav footer */}
        <div className="flex flex-wrap gap-4 pt-8 border-t border-primary/20">
          <Link href="/" className="text-primary hover:text-primary/80 font-medium text-sm">← Home</Link>
          <Link href="/about" className="text-primary hover:text-primary/80 font-medium text-sm">About</Link>
          <Link href="/blog" className="text-primary hover:text-primary/80 font-medium text-sm">Blog</Link>
          <a href="mailto:promptquorum@gmail.com" className="text-primary hover:text-primary/80 font-medium text-sm">Contact</a>
        </div>

      </div>
    </div>
  )
}
