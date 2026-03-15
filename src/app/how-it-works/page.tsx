import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How PromptQuorum Works | Write, Optimize, Dispatch, Quorum',
  description: 'PromptQuorum is a prompt engineering assistant and multi-model consensus tool. Write prompts with 9 frameworks, optimize with your own LLM, dispatch to 25+ AI services, and analyze consensus across all responses.',
  alternates: {
    canonical: 'https://www.promptquorum.com/how-it-works',
  },
}

const steps = [
  {
    number: '1',
    name: 'Write',
    route: '/prompt',
    color: 'bg-secondary text-primary',
    title: 'Structure Your Prompt',
    description: 'Choose from 9 built-in prompt engineering frameworks — or build your own. Each framework guides you through the right fields for your task.',
    details: [
      'Single Prompt Line — quick, unstructured prompts',
      'CRAFT — Context, Role, Action, Format, Target',
      'CO-STAR — won the Singapore GPT-4 competition',
      'RISEN — enterprise tasks with sequential steps',
      'TRACE — when you need few-shot examples',
      'APE, SPECS, Google Prompt, RTF + 2 custom slots',
    ],
    callout: 'A Framework Wizard helps you choose the right one by asking what you\'re trying to do.',
  },
  {
    number: '2',
    name: 'Optimize',
    route: '/optimize',
    color: 'bg-secondary text-primary',
    title: 'Refine with Your Own LLM',
    description: 'Your connected LLM transforms the raw framework fields into a precision prompt. You then refine iteratively with 8 one-click refinements — no prompt engineering expertise needed.',
    details: [
      'Smart Temperature — auto-detects factual, balanced, or creative intent',
      'Version History — every refinement saved, revert anytime',
      'Quality Assessment — 1–5 star scoring with specific improvement suggestions',
      'Teaching Mode — explains exactly why each change was made',
      'Make Concise, Expand Detail, Break Into Steps, Simplify, Add Quality Controls…',
      'Custom Instruction — free-text refinement in plain language',
    ],
    callout: 'Your LLM. Your API key. Nothing passes through PromptQuorum servers.',
  },
  {
    number: '3',
    name: 'Dispatch',
    route: '/dispatch',
    color: 'bg-secondary text-primary',
    title: 'Send to Every AI at Once',
    description: 'Send the optimized prompt to multiple AI services in one click. PromptQuorum pre-loads your prompt into each destination via URL — no copy-pasting.',
    details: [
      'Auto-dispatch: ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral…',
      'Copy-paste: Grok, Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All…',
      'Perplexity runs immediately — prompt auto-submitted on arrival',
      '2 custom URL slots for any AI service not on the list',
      'Optional final enhancement pass through your LLM before dispatching',
      '25+ destinations total',
    ],
    callout: 'All browser tabs open in parallel. Collect all responses in under a minute.',
  },
  {
    number: '4',
    name: 'Quorum',
    route: '/quorum',
    color: 'bg-secondary text-primary',
    title: 'Find What Every AI Agrees On',
    description: 'Paste the responses back into PromptQuorum. Choose your analysis types. Your LLM reads all responses and synthesizes what matters.',
    details: [
      'Consensus Summary — shared themes and agreements across all models',
      'Contradiction Detection — where models disagreed, flagged explicitly',
      'Hallucination Detection — flags potentially false claims',
      'Confidence Scoring — certainty level per model',
      'Best Answer Selection — picks the strongest single response',
      'Weighted Merge — synthesizes a best-of-all hybrid response',
    ],
    callout: 'When 5 models agree on an answer, confidence is much higher than when 1 model answers alone.',
  },
]

const analysisTypes = [
  { category: 'Synthesis', items: ['Consensus Summary', 'Weighted Merge', 'Atomic Facts Extraction'] },
  { category: 'Comparison', items: ['Overlap Mapping', 'Contradiction Detection', 'Confidence Scoring'] },
  { category: 'Quality', items: ['Completeness Check', 'Hallucination Detection', 'Redundancy Elimination'] },
  { category: 'Recommendations', items: ['Best Answer Selection', 'Multi-Model Ensemble', 'Controversy Flag'] },
]

const frameworks = [
  { name: 'Single Prompt Line', best: 'Quick, unstructured prompts' },
  { name: 'APE', fields: 'Action · Purpose · Expectation', best: 'Simple 3-field bridge' },
  { name: 'CRAFT', fields: 'Context · Role · Action · Format · Target', best: 'Creative writing, general use' },
  { name: 'CO-STAR', fields: 'Context · Objective · Style · Tone · Audience · Response', best: 'Business communication, marketing' },
  { name: 'SPECS', fields: 'Situation · Purpose · Expected Output · Context · Style', best: 'Analysis and research' },
  { name: 'RISEN', fields: 'Role · Instructions · Steps · End Goal · Narrowing', best: 'Enterprise sequential tasks' },
  { name: 'TRACE', fields: 'Task · Request · Action · Context · Example', best: 'When examples are needed' },
  { name: 'Google Prompt', fields: 'Task · Context · Persona', best: 'Business and professional tasks' },
  { name: 'RTF', fields: 'Role · Task · Format', best: 'Minimal — the 3 most impactful fields' },
]

const providers = {
  cloud: ['OpenAI (GPT-4, GPT-4o)', 'Anthropic (Claude 3.5)', 'Google Gemini 1.5', 'Grok (xAI)', 'DeepSeek', 'Mistral', 'Cohere', 'Together AI', 'Groq', 'OpenRouter (free tier)'],
  local: ['Ollama (localhost:11434)', 'LM Studio (localhost:1234)', 'Jan AI (localhost:1337)', 'GPT4All (localhost:4891)', 'Open WebUI', 'KoboldCpp', 'vLLM', 'oobabooga', 'Any OpenAI-compatible endpoint'],
}

export default function HowItWorksPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface" />}>
      <div className="min-h-screen bg-surface pt-24 pb-20">

        {/* Hero */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            How PromptQuorum Works
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A 4-stage workflow: write a structured prompt, optimize it with your own LLM, dispatch to 25+ AI services, then analyze every response for consensus.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Runs entirely in your browser — no PromptQuorum server ever sees your prompts or API keys
          </div>
        </div>

        {/* 4-Step Workflow */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 mb-24">
          {steps.map((step, i) => (
            <div key={i} className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
              <div className="flex items-start gap-6 p-8">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{step.name}</span>
                    <code className="text-xs text-text-muted bg-muted px-2 py-0.5 rounded">{step.route}</code>
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3">{step.title}</h2>
                  <p className="text-text-secondary mb-5 text-lg leading-relaxed">{step.description}</p>
                  <ul className="space-y-2 mb-5">
                    {step.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                    {step.callout}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frameworks */}
        <div className="bg-card border-y border-primary/20 py-20 mb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-3">9 Built-in Prompt Frameworks</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">Each framework structures your input differently. A Framework Wizard helps you choose — or you can build two fully custom frameworks of your own.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-3 pr-6 font-semibold text-text-primary">Framework</th>
                    <th className="text-left py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">Fields</th>
                    <th className="text-left py-3 font-semibold text-text-primary">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {frameworks.map((f, i) => (
                    <tr key={i} className="border-b border-primary/10 hover:bg-surface transition-colors">
                      <td className="py-3 pr-6 font-semibold text-primary whitespace-nowrap">{f.name}</td>
                      <td className="py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">{f.fields || '—'}</td>
                      <td className="py-3 text-text-secondary">{f.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quorum Analysis Types */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-3">13 Quorum Analysis Types</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Mix and match. Run 2 or all 13 at once. Each analysis is powered by your connected LLM, not a PromptQuorum server.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {analysisTypes.map((group, i) => (
              <div key={i} className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{group.category}</div>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-secondary/30 border border-primary/20 rounded-xl p-6">
            <div className="text-sm font-semibold text-text-primary mb-2">Export results in 6 formats</div>
            <div className="flex flex-wrap gap-2">
              {['.txt', '.md', '.json', '.csv', '.html', '.pdf'].map(f => (
                <span key={f} className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">{f}</span>
              ))}
            </div>
            <p className="text-xs text-text-muted mt-2">Multiple formats → downloaded as a .zip archive. File System Access API for folder selection (Chrome/Edge/Safari 16+).</p>
          </div>
        </div>

        {/* LLM Providers / BYOM */}
        <div className="bg-card border-y border-primary/20 py-20 mb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-3">Bring Your Own Model (BYOM)</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">PromptQuorum never calls any LLM with its own keys. Every call goes directly from your browser to your chosen provider. Your API keys stay in your browser's localStorage — never transmitted to any PromptQuorum server.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Cloud APIs (bring your key)</div>
                <ul className="space-y-2">
                  {providers.cloud.map((p, i) => (
                    <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Local (no API key needed)</div>
                <ul className="space-y-2">
                  {providers.local.map((p, i) => (
                    <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Zero telemetry', desc: 'No analytics, no tracking, no data collection. Not even anonymous usage stats.' },
              { title: 'Zero registration', desc: 'No account required. No email. No sign-in. Open the app and start working.' },
              { title: 'Runs locally', desc: 'Desktop app via Electron, mobile via Capacitor. Works fully offline with a local LLM.' },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-primary/20 rounded-xl p-6">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                  <span className="text-primary text-lg">✓</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-text-primary mb-3">Ready to try it?</h2>
            <p className="text-text-secondary mb-6">Join the waitlist for early access. First users get lifetime premium features.</p>
            <Link href="/#waitlist" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Join the Waitlist
            </Link>
          </div>
          <p className="mt-8"><Link href="/" className="text-primary hover:text-primary/80 font-medium">← Back to Home</Link></p>
        </div>

      </div>
    </Suspense>
  )
}
