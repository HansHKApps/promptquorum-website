import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'
import { Sparkles, Layers, Brain, Zap, Shield } from 'lucide-react'
import { PromptOptimizerShowcase } from '@/components/PromptOptimizerShowcase'
import { OptimizationShowcase } from '@/components/OptimizationShowcase'
import { QuorumShowcase } from '@/components/QuorumShowcase'

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PQ Apps — PromptQuorum',
    description: 'See how the PromptQuorum app works: write prompts with built-in frameworks, dispatch to 25+ AI models, and compare results with Quorum analysis.',
    alternates: generateAlternates('/pq-apps', 'en', true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: 'PQ Apps — PromptQuorum',
      description: 'See how the PromptQuorum app works: write prompts with built-in frameworks, dispatch to 25+ AI models, and compare results with Quorum analysis.',
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PQ Apps — PromptQuorum',
      description: 'See how the PromptQuorum app works: write prompts with built-in frameworks, dispatch to 25+ AI models, and compare results with Quorum analysis.',
    },
  }
}

export default function PQAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'url': 'https://www.promptquorum.com/pq-apps',
              'name': 'PQ Apps — PromptQuorum',
              'description': 'See how the PromptQuorum app works: write prompts with built-in frameworks, dispatch to 25+ AI models, and compare results with Quorum analysis.',
              'inLanguage': 'en',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com' },
                { '@type': 'ListItem', 'position': 2, 'name': 'PQ Apps', 'item': 'https://www.promptquorum.com/pq-apps' },
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
              PromptQuorum, wherever you work
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              One prompt, dispatched to 25+ AI models at once — with local LLM support and multi-model consensus analysis, all from your browser.
            </p>
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Try Beta
            </Link>
          </div>

          {/* How It Works */}
          <section id="how-it-works" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">How It Works</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">1</div>
                <div className="text-text-primary font-semibold mb-1">Write Your Structured Prompt</div>
                <div className="text-sm text-text-secondary">Start with one of 9 built-in frameworks — CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google Prompt, RTF, or Single Prompt Line.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2</div>
                <div className="text-text-primary font-semibold mb-1">Optimize With Your Own LLM</div>
                <div className="text-sm text-text-secondary">Optionally refine your prompt's structure and wording by sending it to your connected LLM before dispatch.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">3</div>
                <div className="text-text-primary font-semibold mb-1">Dispatch to 25+ AI Models</div>
                <div className="text-sm text-text-secondary">One click opens every destination in parallel — GPT-4o, Claude, Gemini, Grok, DeepSeek, Mistral, and more, plus local models via Ollama.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">4</div>
                <div className="text-text-primary font-semibold mb-1">Run Quorum Analysis</div>
                <div className="text-sm text-text-secondary">Compare responses with 13 analysis types — Hallucination Detection, Contradiction Detection, Consensus Summary, and more.</div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Features</h2>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">Key Features at a Glance</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">9 prompt engineering frameworks (CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google, RTF)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Dispatch to 25+ cloud models simultaneously (GPT-4o, Claude, Gemini, DeepSeek, and more)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">13 Quorum consensus analysis types across 4 categories (synthesis, comparison, quality, selection)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Hallucination detection flags claims that appear in only one model or contradict consensus</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Local LLM support: Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM, and any OpenAI-compatible endpoint</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Privacy-first: full offline execution, zero registration required, nothing leaves your device</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Instant side-by-side response comparison across all dispatched models in real-time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">Automatic prompt optimization with 8 refinement techniques for better AI output</span>
              </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Prompt Optimization</h3>
                <p className="text-text-secondary">Automatically refine and optimize your prompts with 8 proven refinement techniques for better AI output.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Multi-Model Dispatch</h3>
                <p className="text-text-secondary">Run prompts across ChatGPT, Claude, Gemini, and 25+ other AI models simultaneously in parallel.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Quorum Scoring</h3>
                <p className="text-text-secondary">Find consensus answers across models with confidence scoring. Hallucination Detection flags claims that appear in only one model response.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Instant Comparison</h3>
                <p className="text-text-secondary">Get parallel responses in one click — no manual copy-pasting between browser tabs.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Privacy-First</h3>
                <p className="text-text-secondary">Local execution option. Zero registration required. Complete control over your prompts.</p>
              </div>
            </div>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-8">
              <PromptOptimizerShowcase lang="en" />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">How Do You Review Optimization Results?</h3>
              <p className="text-text-secondary mb-6">Review quality assessments, version history, and improvement suggestions for your optimized prompts.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <OptimizationShowcase lang="en" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Version Control</h4>
                  <p className="text-text-secondary text-sm">Track all iterations of your prompt. Revert to previous versions anytime or branch off to explore different optimization paths.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Quality Insights</h4>
                  <p className="text-text-secondary text-sm">Understand exactly why your prompt was improved. Get detailed feedback on strengths and areas to refine.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Smart Refinements</h4>
                  <p className="text-text-secondary text-sm">Apply one-click refinements to make your prompt concise, clear, professional, or more detailed as needed.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">What Is Quorum — Multi-Model Consensus?</h3>
              <p className="text-text-secondary mb-6">Collect responses from 25+ AI models, analyze consensus patterns, and synthesize insights across different perspectives.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <QuorumShowcase lang="en" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Collect Responses</h4>
                  <p className="text-text-secondary text-sm">Run your prompt across ChatGPT, Claude, Gemini, and 25+ other models. Get diverse perspectives and responses instantly.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Analyze Patterns</h4>
                  <p className="text-text-secondary text-sm">Identify what all models agree on (consensus), where they differ, and which responses are highest quality for your use case.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">Synthesize Insights</h4>
                  <p className="text-text-secondary text-sm">Combine the strengths of multiple models into better answers. Export results in multiple formats for further use.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Compare Tools */}
          <section id="compare-tools" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Compare Tools</h2>
            <p className="text-text-secondary mb-4">See how PromptQuorum compares to other AI prompt tools.</p>
            <Link href="/compare" className="text-primary hover:text-primary/80 font-medium">
              View full comparison →
            </Link>
          </section>

          {/* Repeat CTA */}
          <div className="text-center py-12 border-t border-primary/20">
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Try Beta
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
