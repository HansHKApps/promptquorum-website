import type { Metadata } from 'next'
import Link from 'next/link'

interface AuthorPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return [
    { slug: 'hans-kuepper' },
  ]
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params

  if (slug !== 'hans-kuepper') {
    return {
      title: 'Author Not Found',
    }
  }

  return {
    title: 'Hans Kuepper — Founder of PromptQuorum',
    description: 'Hans Kuepper is the founder and developer of PromptQuorum. Learn about his background, philosophy, and approach to building privacy-first AI tools.',
    alternates: {
      canonical: 'https://www.promptquorum.com/author/hans-kuepper',
    },
    openGraph: {
      type: 'profile',
      url: 'https://www.promptquorum.com/author/hans-kuepper',
      siteName: 'PromptQuorum',
      title: 'Hans Kuepper — Founder of PromptQuorum',
      description: 'Hans Kuepper is the founder and developer of PromptQuorum, a privacy-first, multi-model AI dispatch and consensus tool.',
      images: [{ url: 'https://www.promptquorum.com/og-image.png', width: 1200, height: 630, alt: 'PromptQuorum — One Prompt. Every Model. One Verdict.' }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: 'Hans Kuepper — Founder of PromptQuorum',
      description: 'Hans Kuepper is the founder and developer of PromptQuorum, a privacy-first, multi-model AI dispatch and consensus tool.',
      images: ['https://www.promptquorum.com/og-image.png'],
    },
  }
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params

  if (slug !== 'hans-kuepper') {
    return (
      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Author Not Found</h1>
          <p className="text-text-secondary mb-8">We could not find the author you are looking for.</p>
          <Link href="/about" className="text-primary hover:text-primary/80 font-medium">← Back to About</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://www.promptquorum.com/author/hans-kuepper',
              'name': 'Hans Kuepper',
              'url': 'https://www.promptquorum.com/author/hans-kuepper',
              'jobTitle': 'Founder & Developer',
              'description': 'Independent developer building privacy-first tools for the AI era. Founder of PromptQuorum.',
              'worksFor': {
                '@type': 'Organization',
                'name': 'PromptQuorum',
                'url': 'https://www.promptquorum.com',
              },
              'sameAs': [
                'https://www.linkedin.com/in/hanskuepper/',
                'https://x.com/HansKuepperAPPs',
                'https://github.com/HansHKApps',
                'https://substack.com/@promptquorum',
              ],
              'image': 'https://www.promptquorum.com/og-image.png',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Author', 'item': 'https://www.promptquorum.com/author/hans-kuepper' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Author</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Hans Kuepper
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Founder &amp; Developer, PromptQuorum. Building privacy-first tools for the AI era.
            </p>
          </div>

          {/* Profile */}
          <section className="mb-16">
            <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">HK</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-2">Hans Kuepper</h2>
                  <p className="text-lg text-primary font-medium mb-4">Founder &amp; Developer, PromptQuorum</p>
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

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Hans Kuepper is an independent developer focused on building privacy-first tools for the AI era.
                He is the creator and maintainer of PromptQuorum, a multi-model AI dispatch and consensus platform.
              </p>

              <p>
                PromptQuorum emerged from a specific frustration: when you need a reliable answer from AI,
                querying one model is not enough. Every AI model hallucinates differently. The truth is in the overlap.
              </p>

              <p>
                Before building PromptQuorum, Hans spent years working with enterprise AI workflows and observed the same pattern repeatedly:
                teams trusting single-model outputs for high-stakes decisions without any verification layer.
                PromptQuorum is the tool he wanted to exist.
              </p>

              <p>
                His approach to product development is characterized by three principles:
              </p>

              <ul className="space-y-3 my-4 pl-6">
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong>Privacy First:</strong> Your data never touches PromptQuorum servers. API keys connect directly from your browser to your chosen providers.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong>Transparency:</strong> PromptQuorum is free, open, and requires no registration. You own the experience.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong>Multi-Model Focus:</strong> No vendor lock-in. Dispatch to 25+ models, compare results, find the best for your task.</span>
                </li>
              </ul>

              <p>
                Hans writes frequently about prompt engineering, AI evaluation, multi-model strategies, and product design for AI tools.
                Follow his work on Substack, Twitter, or GitHub.
              </p>
            </div>
          </section>

          {/* Recent Articles */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Articles by Hans Kuepper</h2>
            <p className="text-text-secondary mb-8">
              Hans contributes regularly to the PromptQuorum blog, covering prompt engineering techniques,
              AI model comparison, and strategies for building reliable AI workflows.
            </p>
            <div className="flex gap-4">
              <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 transition-colors">
                View All Articles
              </Link>
              <a href="https://substack.com/@promptquorum" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors">
                Subscribe to Substack
              </a>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-16 bg-card border border-primary/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Get in Touch</h2>
            <p className="text-text-secondary mb-6">
              Have a question about PromptQuorum, want to discuss prompt engineering, or have feedback?
              Hans is available to chat at:
            </p>
            <div className="space-y-2">
              <p className="text-text-primary">
                Email: <a href="mailto:promptquorum@gmail.com" className="text-primary hover:text-primary/80 font-medium">promptquorum@gmail.com</a>
              </p>
              <p className="text-text-primary">
                Twitter: <a href="https://x.com/HansKuepperAPPs" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium">@HansKuepperAPPs</a>
              </p>
              <p className="text-text-primary">
                LinkedIn: <a href="https://www.linkedin.com/in/hanskuepper/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium">Hans Kuepper</a>
              </p>
            </div>
          </section>

          {/* Nav */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-primary/20">
            <Link href="/about" className="text-primary hover:text-primary/80 font-medium text-sm">← About PromptQuorum</Link>
            <Link href="/blog" className="text-primary hover:text-primary/80 font-medium text-sm">Blog</Link>
            <Link href="/" className="text-primary hover:text-primary/80 font-medium text-sm">Home</Link>
          </div>

        </div>
      </div>
    </>
  )
}
