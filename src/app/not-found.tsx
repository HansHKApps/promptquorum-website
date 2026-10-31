import type { Metadata } from 'next'
import { AppLink as Link } from '@/components/AppLink'
import { NotFoundPath } from '@/components/NotFoundPath'

export const metadata: Metadata = {
  title: 'Page Not Found — PromptQuorum',
  description: 'The page you were looking for could not be found.',
  robots: { index: false, follow: false },
}

// PromptQuorum sends one prompt to several models and compares the answers.
// The 404 plays on that: three voters check the URL and reach consensus.
const VOTERS = [
  { name: 'Voter 1', answer: 'Checked the sitemap: no such page.' },
  { name: 'Voter 2', answer: 'Checked the hubs: nothing under that path.' },
  { name: 'Voter 3', answer: 'Checked the archive: it never existed.' },
]

const HUBS = [
  { href: '/local-llms', label: 'Local LLMs', desc: 'Run language models on your own hardware' },
  { href: '/power-local-llm', label: 'Power Local LLM', desc: 'App reviews, comparisons and hardware guides' },
  { href: '/directory', label: 'Directory', desc: 'Browse local AI apps and tools' },
  { href: '/prompt-engineering', label: 'Prompt Engineering', desc: 'Guides, frameworks and techniques' },
  { href: '/prompt-bites', label: 'Prompt Bites', desc: 'Short, practical prompt recipes' },
  { href: '/smart-home', label: 'Smart Home', desc: 'Local-first smart home and Home Assistant' },
  { href: '/balcony-solar', label: 'Balcony Solar', desc: 'Plug-in solar rules, kits and setup' },
  { href: '/blog', label: 'Blog', desc: 'News and notes from PromptQuorum' },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="relative py-14 border-b border-primary/20 mb-14 overflow-hidden">
          <div
            className="pointer-events-none absolute -top-10 -right-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Error 404</p>
          <div className="text-8xl sm:text-9xl font-bold leading-none text-primary/15 mb-3 select-none" aria-hidden="true">
            404
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-5">
            The quorum couldn&apos;t find this page.
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            We asked three voters. All three agree: nothing lives at this address. The link may be
            mistyped, or the page may have moved.
          </p>
          <NotFoundPath />
        </div>

        {/* Consensus panel */}
        <section className="mb-14" aria-labelledby="nf-consensus">
          <h2 id="nf-consensus" className="sr-only">How the voters answered</h2>
          <div className="bg-card border border-primary/20 rounded-2xl p-5 sm:p-6">
            <ul className="space-y-3">
              {VOTERS.map(({ name, answer }) => (
                <li key={name} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary"
                    aria-hidden="true"
                  >
                    ✕
                  </span>
                  <p className="text-sm sm:text-base text-text-secondary">
                    <span className="font-semibold text-text-primary">{name}:</span> {answer}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-primary/15 pt-4">
              <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Consensus 3 / 3
              </span>
              <span className="text-sm font-semibold text-text-primary">Verdict: page not found.</span>
            </div>
          </div>
        </section>

        {/* Where to go */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Try one of these instead</h2>
          <p className="text-text-secondary mb-6">
            Most guides, reviews and comparisons sit under one of these hubs.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {HUBS.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="bg-card border border-primary/20 rounded-xl p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
              >
                <div className="text-sm font-bold text-primary mb-1 group-hover:text-primary/80">{label} →</div>
                <div className="text-sm text-text-secondary">{desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-14">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Want a quorum of your own?
            </h2>
            <p className="text-text-secondary mb-6">
              PromptQuorum sends one prompt to several AI models and compares the answers side by
              side. It is in free public beta — no signup required.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/download"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Download the Beta
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors"
              >
                Back to the homepage
              </Link>
            </div>
          </div>
        </section>

        {/* Nav footer */}
        <div className="flex flex-wrap gap-4 pt-8 border-t border-primary/20">
          <Link href="/" className="text-primary hover:text-primary/80 font-medium text-sm">← Home</Link>
          <Link href="/about" className="text-primary hover:text-primary/80 font-medium text-sm">About</Link>
          <a href="mailto:hello@promptquorum.com" className="text-primary hover:text-primary/80 font-medium text-sm">
            Found a broken link? Tell us
          </a>
        </div>

      </div>
    </div>
  )
}
