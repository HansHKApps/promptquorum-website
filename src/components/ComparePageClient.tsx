'use client'

import { useLang } from '@/hooks/useLang'
import Link from 'next/link'

function CompareContent({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  // Language used for future translation expansion; content currently EN-only
  // as competitor-specific copy requires professional translation
  useLang(initialLang)

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">

      {/* Hero */}
      <header className="border-b border-gray-100 pb-12 mb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-mono text-text-secondary mb-5">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Compare</span>
          </p>
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 text-xs font-mono text-text-secondary mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Updated March 2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight tracking-tight mb-4">
            PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo —{' '}
            <span className="text-primary">Multi-LLM Comparison Tools</span> Compared
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            The best multi-LLM tool for your workflow depends on whether you need simultaneous dispatch, consensus scoring, local LLM privacy, or simple side-by-side comparison. This page breaks down every major option in 2026 so you can choose with confidence.
          </p>
          {/* Disclaimer */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed">
            <strong>Accuracy notice:</strong> Feature and pricing information was verified in March 2026 and is provided in good faith based on each product&apos;s public documentation at that time. Products change frequently — verify current capabilities directly with each vendor before making a decision. If you believe any information on this page is inaccurate or outdated, please{' '}
            <a href="mailto:hello@promptquorum.com" className="underline hover:text-amber-900">contact us</a> and we will correct it promptly. This comparison is produced by PromptQuorum and reflects our perspective as a participant in this market.
          </div>
          {/* Jump links */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              ['#comparison-table', 'Comparison table'],
              ['#promptquorum', 'PromptQuorum'],
              ['#poe', 'Poe'],
              ['#lmarena', 'LM Arena'],
              ['#openmark', 'OpenMark'],
              ['#aizolo', 'AiZolo'],
              ['#faq', 'FAQ'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-xs font-mono text-primary bg-primary/8 border border-primary/20 px-3 py-1.5 rounded-md hover:bg-primary/12 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* What is a multi-LLM tool */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="intro">
          <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">What is a multi-LLM comparison tool?</h2>
          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 mb-6">
            <p className="text-text-primary text-[15px] leading-relaxed">
              A multi-LLM comparison tool sends the same prompt to multiple large language models simultaneously and displays the responses side by side, enabling users to evaluate differences in reasoning, accuracy, and style across AI systems without switching tabs or repeating input.
            </p>
          </div>
          <p className="text-text-secondary mb-4">
            In 2026, no single AI model is authoritative for all tasks. GPT-4o, Claude, Gemini, Mistral, and Llama each have different training data, architectural biases, and reasoning strengths. A response that looks correct from one model may be contradicted, qualified, or significantly expanded by another.
          </p>
          <p className="text-text-secondary">
            Multi-LLM tools exist to solve this problem — but they differ significantly in how they work, what they prioritise, and who they are designed for. The five tools compared on this page represent the major approaches currently available:{' '}
            <strong className="text-text-primary">consumer platforms</strong> (Poe),{' '}
            <strong className="text-text-primary">community benchmarks</strong> (LM Arena),{' '}
            <strong className="text-text-primary">developer evaluation suites</strong> (OpenMark),{' '}
            <strong className="text-text-primary">unified multi-model workspaces</strong> (AiZolo), and{' '}
            <strong className="text-text-primary">consensus scoring platforms</strong> (PromptQuorum).
          </p>
        </section>

        {/* Comparison table */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="comparison-table">
          <h2 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">Full feature comparison — 2026</h2>
          <p className="text-text-secondary mb-6">The table below compares all five tools across the features that matter most for professional multi-LLM workflows.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-text-primary font-semibold text-xs uppercase tracking-wider">Tool</th>
                  <th className="text-left py-3 px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Simultaneous dispatch</th>
                  <th className="text-left py-3 px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Consensus scoring</th>
                  <th className="text-left py-3 px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Local LLM</th>
                  <th className="text-left py-3 px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">API key control</th>
                  <th className="text-left py-3 px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider">Pricing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-primary/5 border-b border-primary/10">
                  <td className="py-3 px-4 text-primary font-semibold">PromptQuorum</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">✓ Yes</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">✓ Quorum Verdict</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">✓ Ollama + LM Studio</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">✓ Your keys</td>
                  <td className="py-3 px-4 text-text-secondary">Free beta</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-text-primary font-medium">Poe (Quora)</td>
                  <td className="py-3 px-4 text-amber-500">~ Sequential / limited</td>
                  <td className="py-3 px-4 text-red-400">✗ No</td>
                  <td className="py-3 px-4 text-red-400">✗ Cloud only</td>
                  <td className="py-3 px-4 text-amber-500">~ Limited</td>
                  <td className="py-3 px-4 text-text-secondary">Free / $19.99/mo</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-text-primary font-medium">LM Arena</td>
                  <td className="py-3 px-4 text-amber-500">~ 2 models only</td>
                  <td className="py-3 px-4 text-amber-500">~ Human voting only</td>
                  <td className="py-3 px-4 text-red-400">✗ Cloud only</td>
                  <td className="py-3 px-4 text-red-400">✗ No</td>
                  <td className="py-3 px-4 text-text-secondary">Free</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-text-primary font-medium">OpenMark</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">✓ Parallel</td>
                  <td className="py-3 px-4 text-amber-500">~ Deterministic scoring</td>
                  <td className="py-3 px-4 text-red-400">✗ Cloud only</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">✓ Yes</td>
                  <td className="py-3 px-4 text-text-secondary">Free tier / credits</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-text-primary font-medium">AiZolo</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">✓ Yes</td>
                  <td className="py-3 px-4 text-red-400">✗ No</td>
                  <td className="py-3 px-4 text-red-400">✗ Cloud only</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">✓ Yes</td>
                  <td className="py-3 px-4 text-text-secondary">From $9.90/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs font-mono text-text-secondary mt-3">✓ Yes · ~ Partial · ✗ No · Based on public documentation, March 2026. Pricing and features change — verify with each vendor. This comparison is produced by PromptQuorum.</p>
        </section>

        {/* PromptQuorum */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="promptquorum">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">PromptQuorum — best for consensus scoring and local LLM privacy</h2>
          <div className="border border-primary/25 bg-primary/5 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <span className="text-lg font-bold text-primary">PromptQuorum</span>
              <span className="text-xs font-mono bg-green-100 text-green-700 border border-green-200 px-3 py-1 rounded-full">Best for: developers &amp; power users</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Beta · April 2026', 'promptquorum.com', 'API keys required', 'Ollama + LM Studio'].map(s => (
                <span key={s} className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">{s}</span>
              ))}
            </div>
            <p className="text-text-secondary mb-3">
              PromptQuorum is, to our knowledge, the only tool among those reviewed here that combines simultaneous prompt dispatch with automated consensus scoring. You write one prompt, select your models, and PromptQuorum dispatches to all of them in parallel. The Quorum Verdict then analyses where the models agree, where they diverge, and what those patterns mean for the reliability of the answer.
            </p>
            <p className="text-text-secondary mb-3">
              The defining feature is <strong className="text-text-primary">local LLM support</strong>. Via Ollama and LM Studio integration, PromptQuorum can include locally-running models in the dispatch — meaning sensitive prompts never leave your machine. For legal professionals, healthcare workers, financial analysts, and developers working with proprietary code, this is not optional.
            </p>
            <p className="text-text-secondary">
              PromptQuorum requires users to bring their own API keys. This keeps your data under your control, costs transparent, and usage tied to your own commercial terms with each provider.
            </p>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">Who should use PromptQuorum?</h3>
          <p className="text-text-secondary">
            PromptQuorum is designed for technically capable users who treat AI as a professional tool rather than a consumer service: developers evaluating which model to integrate into a production pipeline, researchers who need cross-model validation of findings, and professionals whose work involves confidential information that cannot be transmitted to third-party servers.
          </p>
        </section>

        {/* Poe */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="poe">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">Poe — best for casual multi-model access and exploration</h2>
          <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <span className="text-lg font-bold text-text-primary">Poe (by Quora)</span>
              <span className="text-xs font-mono bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">Best for: casual / consumer use</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {['poe.com', 'Free / $19.99/mo', 'iOS, Android, Web', 'Millions of users'].map(s => (
                <span key={s} className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">{s}</span>
              ))}
            </div>
            <p className="text-text-secondary mb-3">
              Poe is the largest and most established multi-model AI platform, giving users access to GPT, Claude, Gemini, Llama, Grok, and thousands of user-created bots from a single interface. It is the go-to choice for users who want easy access to multiple AI systems without managing API keys.
            </p>
            <p className="text-text-secondary">
              Poe does not offer simultaneous dispatch in the true sense — users switch between models or compare two at a time, rather than dispatching one prompt to all models in parallel. There is no consensus scoring or automated analysis of response agreement. All inference is cloud-based, making it unsuitable for privacy-sensitive professional use cases.
            </p>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">Poe vs PromptQuorum</h3>
          <p className="text-text-secondary">
            Poe is better than PromptQuorum for casual exploration, bot discovery, and conversation. PromptQuorum is better than Poe for controlled prompt evaluation, consensus analysis, and local LLM workflows. They target fundamentally different use cases: Poe is a consumer product; PromptQuorum is a professional evaluation tool.
          </p>
        </section>

        {/* LM Arena */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="lmarena">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">LM Arena — best for community-driven model benchmarking</h2>
          <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <span className="text-lg font-bold text-text-primary">LM Arena (lmarena.ai)</span>
              <span className="text-xs font-mono bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">Best for: community benchmarking</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {['lmarena.ai', 'Free', 'Web only', 'Human voting system'].map(s => (
                <span key={s} className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">{s}</span>
              ))}
            </div>
            <p className="text-text-secondary mb-3">
              LM Arena (formerly Chatbot Arena) is a community benchmark platform where users submit prompts and vote on which of two anonymous models produced the better response. It has become one of the most-cited AI leaderboards in the industry, with Elo ratings derived from millions of human preference votes.
            </p>
            <p className="text-text-secondary">
              LM Arena shows two models side by side and asks for a human preference vote — it does not provide automated consensus analysis, does not support local LLMs, and does not allow users to select specific models in the primary comparison mode. It is a benchmarking platform, not a workflow tool.
            </p>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">LM Arena vs PromptQuorum</h3>
          <p className="text-text-secondary">
            LM Arena is better for understanding aggregate human preference across the industry. PromptQuorum is better for evaluating your specific prompts across specific models with consistent, automated analysis. LM Arena tells you what the crowd prefers; PromptQuorum tells you what your prompt produces across every model you care about.
          </p>
        </section>

        {/* OpenMark */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="openmark">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">OpenMark — best for deterministic cost and quality benchmarking</h2>
          <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <span className="text-lg font-bold text-text-primary">OpenMark (openmark.ai)</span>
              <span className="text-xs font-mono bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">Best for: cost/quality analysis</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {['openmark.ai', 'Free tier / credits', '100+ models', 'Deterministic scoring'].map(s => (
                <span key={s} className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">{s}</span>
              ))}
            </div>
            <p className="text-text-secondary mb-3">
              OpenMark is a developer-focused benchmarking tool that runs prompts against 100+ AI models simultaneously and scores results deterministically — meaning the same prompt produces the same ranked output every time. It emphasises cost transparency, showing exactly what each model costs per prompt alongside quality scores.
            </p>
            <p className="text-text-secondary">
              OpenMark is strong on breadth (100+ models) and cost analysis but does not produce a consensus verdict — it scores each model individually rather than analysing agreement patterns across models. It also does not support local LLMs.
            </p>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">OpenMark vs PromptQuorum</h3>
          <p className="text-text-secondary">
            OpenMark is better when your primary question is "which single model performs best for this task at what cost." PromptQuorum is better when your question is "how much do models agree on this prompt, and what does their disagreement tell me?" Both require API keys; OpenMark supports more models; PromptQuorum uniquely supports local inference.
          </p>
        </section>

        {/* AiZolo */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="aizolo">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">AiZolo — best for multi-model workspace and content creation</h2>
          <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <span className="text-lg font-bold text-text-primary">AiZolo (aizolo.com)</span>
              <span className="text-xs font-mono bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">Best for: content teams</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {['aizolo.com', 'From $9.90/mo', 'GPT, Claude, Gemini, Grok', 'Prompt library'].map(s => (
                <span key={s} className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">{s}</span>
              ))}
            </div>
            <p className="text-text-secondary mb-3">
              AiZolo is a unified multi-model workspace designed for content creators and marketing teams. It offers simultaneous dispatch to GPT, Claude, Gemini, and Grok with a side-by-side comparison layout, prompt library, and project organisation features. As of March 2026, plans started from $9.90/month, making it one of the more affordable paid options in the category — verify current pricing at aizolo.com.
            </p>
            <p className="text-text-secondary">
              AiZolo does not offer consensus scoring — it displays responses side by side but leaves the analysis entirely to the user. It supports only four cloud models (GPT, Claude, Gemini, Grok) with no local LLM option. It is a workflow tool for content production rather than a technical evaluation platform.
            </p>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">AiZolo vs PromptQuorum</h3>
          <p className="text-text-secondary">
            AiZolo is better for content teams who need a polished, affordable workspace for daily multi-model writing workflows. PromptQuorum is better for power users who need automated consensus analysis, local LLM privacy, and API-key-controlled access to a broader range of models including open-weight systems.
          </p>
        </section>

        {/* How to choose */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="how-to-choose">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">How to choose the right multi-LLM tool</h2>
          <div className="space-y-3">
            {[
              { label: 'Choose PromptQuorum', desc: 'if you need consensus scoring across models, local LLM support for privacy-sensitive work, or a controlled evaluation workflow with your own API keys.', highlight: true },
              { label: 'Choose Poe', desc: 'if you want the easiest possible access to multiple AI models for casual conversation and exploration without managing API keys.' },
              { label: 'Choose LM Arena', desc: 'if you want to contribute to or study community-driven model preference data and Elo rankings across the industry.' },
              { label: 'Choose OpenMark', desc: 'if you are a developer selecting a model for a production application and need deterministic quality scoring with transparent cost data across 100+ models.' },
              { label: 'Choose AiZolo', desc: 'if you are a content creator or marketing professional who needs a low-cost, well-designed workspace for daily multi-model writing workflows.' },
            ].map(({ label, desc, highlight }) => (
              <div key={label} className={`rounded-lg px-5 py-4 ${highlight ? 'bg-primary/8 border border-primary/20' : 'bg-gray-50 border border-gray-100'}`}>
                <span className={`font-semibold ${highlight ? 'text-primary' : 'text-text-primary'}`}>{label}</span>
                <span className="text-text-secondary"> {desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="faq">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">Frequently asked questions</h2>
          <div className="divide-y divide-gray-100">
            {[
              {
                q: 'What is the best tool to compare the same prompt across multiple LLMs simultaneously?',
                a: 'Among the tools reviewed on this page, PromptQuorum is the only one that combines simultaneous dispatch with automated consensus scoring. While Poe, AiZolo, and OpenMark offer parallel responses, none produces a Quorum Verdict — an automated analysis of where models agree and diverge. For users who need more than visual comparison, PromptQuorum is the purpose-built option. Feature information verified March 2026.',
              },
              {
                q: 'Which multi-LLM tool supports local LLMs like Ollama and LM Studio?',
                a: 'Among the tools reviewed on this page, PromptQuorum is the only one that supports local LLM inference via Ollama and LM Studio, keeping sensitive prompts entirely on your own machine. The other tools reviewed — Poe, LM Arena, OpenMark, and AiZolo — operate as cloud-only services based on their public documentation as of March 2026. For users with strict data confidentiality requirements, verify each tool\'s current capabilities directly with the vendor.',
              },
              {
                q: 'What is consensus scoring in the context of multi-LLM tools?',
                a: "Consensus scoring is an automated analysis of how much independent AI models agree on a given prompt. PromptQuorum's Quorum Verdict scores agreement across all dispatched models, identifies specific points of divergence, and interprets what those divergences indicate about answer reliability. High consensus across multiple independent models is a meaningful signal that an answer is likely correct. Low consensus flags uncertainty that warrants further investigation.",
              },
              {
                q: 'How is PromptQuorum different from Poe?',
                a: 'Poe is a consumer multi-model chat platform built for easy access and exploration. PromptQuorum is a professional evaluation tool built for controlled prompt testing, consensus analysis, and local LLM workflows. Poe is optimised for conversation; PromptQuorum is optimised for evaluation. They serve different workflows and different user types — Poe for casual users, PromptQuorum for developers, researchers, and professionals.',
              },
              {
                q: 'Do I need my own API keys to use PromptQuorum?',
                a: 'Yes. PromptQuorum is designed for users who bring their own API keys from OpenAI, Anthropic, Google, Mistral, and other providers. This design choice keeps your data under your control, your costs transparent, and your usage bound by your own commercial agreements with each provider. It also enables the local LLM support that cloud-dependent tools cannot offer.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="py-5">
                <p className="font-semibold text-text-primary mb-2 leading-snug">{q}</p>
                <p className="text-[14.5px] text-text-secondary leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-14 bg-gradient-to-br from-primary to-primary/70 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Join the PromptQuorum waitlist</h2>
          <p className="text-white/75 mb-6">Beta launching April 2026. Early access users get priority onboarding, direct access to the developer, and a free power tool!</p>
          <Link
            href="/#waitlist"
            className="inline-block bg-white text-primary font-bold text-sm px-7 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Join the waitlist →
          </Link>
        </div>

      </div>
    </div>
  )
}

export function ComparePageClient({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  return <CompareContent initialLang={initialLang} />
}
