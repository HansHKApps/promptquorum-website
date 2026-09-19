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
            {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is PromptQuorum free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis."}}, {"@type": "Question", "name": "How does privacy work?", "acceptedAnswer": {"@type": "Answer", "text": "You decide where your data goes. Keep everything local with LM Studio or Ollama, or use your own API keys. PromptQuorum is as private as you set it up. Zero telemetry, zero tracking, no data collection — not even anonymous usage stats."}}, {"@type": "Question", "name": "Which AI providers are supported?", "acceptedAnswer": {"@type": "Answer", "text": "Over 25 AI providers are included: OpenAI (GPT-4, GPT-4o), Anthropic (Claude), Google Gemini, Grok, DeepSeek, Mistral, Cohere, Together AI, Groq, OpenRouter, plus all local providers (Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, KoboldCpp, vLLM, oobabooga, and any OpenAI-compatible endpoint)."}}, {"@type": "Question", "name": "What platforms does PromptQuorum run on?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum is available for macOS, Windows, and Linux (desktop via Electron). A web application is in development, followed by mobile (iOS and Android via Capacitor). It works fully offline with a local LLM."}}, {"@type": "Question", "name": "What makes PromptQuorum different?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum covers the full prompt lifecycle in a single browser-based tool: structured writing with 9 frameworks, AI-powered iterative optimization with 8 refinement types, one-click dispatch to 25+ AI services, and 13 Quorum analysis types for consensus scoring — all without any data leaving your device."}}, {"@type": "Question", "name": "Are there any limits?", "acceptedAnswer": {"@type": "Answer", "text": "No limits from PromptQuorum. Your usage is only limited by your API keys or local LLM resources."}}, {"@type": "Question", "name": "What is prompt engineering and why does it matter?", "acceptedAnswer": {"@type": "Answer", "text": "Prompt engineering is the practice of designing inputs to AI models so they return more accurate, useful, and reliable outputs. In testing, structured prompts with framework fields produce 25–45% higher LLM evaluation scores compared to unstructured inputs. PromptQuorum automates this with 9 built-in frameworks — no expertise required."}}, {"@type": "Question", "name": "How does PromptQuorum optimize my prompts?", "acceptedAnswer": {"@type": "Answer", "text": "Your connected LLM transforms raw framework fields into a precision prompt. You then refine iteratively with 8 one-click refinements: Make Concise, Expand Detail, Break Into Steps, Simplify, Increase Specificity, Multi-Expert Consultation, Add Quality Controls, and Custom Instruction. Every step is saved in version history so you can revert anytime."}}, {"@type": "Question", "name": "What prompt frameworks are built into PromptQuorum?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum includes 9 frameworks: Single Prompt Line (quick), APE (3-field), CRAFT (creative writing), CO-STAR (won the Singapore GPT-4 competition), SPECS (analysis), RISEN (enterprise sequential tasks), TRACE (few-shot examples), Google Prompt (business tasks), and RTF (minimal 3-field). You can also build 2 fully custom frameworks."}}, {"@type": "Question", "name": "What is the CO-STAR framework?", "acceptedAnswer": {"@type": "Answer", "text": "CO-STAR stands for Context, Objective, Style, Tone, Audience, and Response. It won the Singapore GPT-4 prompt engineering competition and is ideal for business communication, marketing copy, and content creation. PromptQuorum guides you through each field and assembles the final prompt automatically."}}, {"@type": "Question", "name": "What is multi-model consensus and why is it valuable?", "acceptedAnswer": {"@type": "Answer", "text": "Multi-model consensus means sending the same prompt to multiple AI models and finding where they agree. When 5 independent models give the same answer, confidence is far higher than when 1 model answers alone. It also surfaces contradictions and potential hallucinations automatically."}}, {"@type": "Question", "name": "How does PromptQuorum detect AI hallucinations?", "acceptedAnswer": {"@type": "Answer", "text": "After collecting responses from multiple models in the Quorum step, your LLM runs Hallucination Detection analysis — flagging claims that appear in only one model's response but not others, or that contradict factual consensus. You choose which analysis types to run and combine them freely."}}, {"@type": "Question", "name": "Can I use PromptQuorum with local AI models like Ollama or LM Studio?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. PromptQuorum natively connects to Ollama (localhost:11434), LM Studio (localhost:1234), Jan AI (localhost:1337), GPT4All (localhost:4891), Open WebUI, KoboldCpp, vLLM, oobabooga, and any OpenAI-compatible endpoint. No API key needed for local models — everything runs on your machine."}}, {"@type": "Question", "name": "Can I use PromptQuorum completely offline?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. If you run a local model like Ollama or LM Studio, PromptQuorum works fully offline. No internet connection is required. Your prompts, API keys, and results never leave your device."}}, {"@type": "Question", "name": "What is BYOM (Bring Your Own Model)?", "acceptedAnswer": {"@type": "Answer", "text": "BYOM means PromptQuorum never calls any LLM using its own API keys. Every call goes directly from your browser to your chosen provider — cloud or local. Your API keys are stored only in your browser's localStorage and are never transmitted to any PromptQuorum server."}}, {"@type": "Question", "name": "How does the Dispatch feature work?", "acceptedAnswer": {"@type": "Answer", "text": "Dispatch sends your optimized prompt to multiple AI services in one click. For auto-dispatch services (ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral, and more), PromptQuorum pre-loads your prompt into the URL so it's ready instantly. Perplexity even auto-submits on arrival. All tabs open in parallel — collect all responses in under a minute."}}, {"@type": "Question", "name": "What is the Quorum analysis and what types are available?", "acceptedAnswer": {"@type": "Answer", "text": "Quorum analysis processes all collected AI responses through your LLM. There are 13 analysis types across 4 categories: Synthesis (Consensus Summary, Weighted Merge, Atomic Facts Extraction), Comparison (Overlap Mapping, Contradiction Detection, Confidence Scoring), Quality (Completeness Check, Hallucination Detection, Redundancy Elimination), and Recommendations (Best Answer Selection, Multi-Model Ensemble, Controversy Flag)."}}, {"@type": "Question", "name": "Can I export my results?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Quorum results export in 6 formats: .txt, .md, .json, .csv, .html, and .pdf. Select multiple formats and they're bundled into a .zip archive. On Chrome, Edge, and Safari 16+, you can choose your save folder using the File System Access API."}}, {"@type": "Question", "name": "How does the Framework Wizard work?", "acceptedAnswer": {"@type": "Answer", "text": "The Framework Wizard asks you a few questions about your task — what you're trying to achieve, the type of output you need, and your audience. Based on your answers it recommends the most suitable framework from the 9 built-in options, and shows a side-by-side comparison of what each would produce for your prompt."}}, {"@type": "Question", "name": "What is Smart Temperature Adjustment?", "acceptedAnswer": {"@type": "Answer", "text": "Before each optimization, PromptQuorum analyzes your prompt text and suggests the ideal LLM temperature: ~0.2 for factual tasks, ~0.7 for balanced, ~0.85 for creative. It shows a confidence score and only prompts you when confidence is above 60%. After 3 consistent choices for the same intent type, it auto-applies your preference."}}, {"@type": "Question", "name": "Does PromptQuorum work with ChatGPT, Claude, and Gemini?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can use ChatGPT (GPT-4, GPT-4o), Anthropic Claude (3, 3.5), and Google Gemini (1.5 Pro, Flash) as your optimization LLM by adding your API key in Settings. You also dispatch prompts to all three simultaneously via the Dispatch page, without needing API keys for dispatch."}}, {"@type": "Question", "name": "Is there a version history for my prompts?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Every optimization step and refinement is saved automatically in version history with a human-readable label (e.g. \"v2 — Make More Concise 12:36\"). You can select any version to restore it and branch new refinements from there. Nothing is lost."}}, {"@type": "Question", "name": "What output formats and languages does PromptQuorum support?", "acceptedAnswer": {"@type": "Answer", "text": "The LLM output language is configurable per-session: English, German, French, Spanish, Italian, Portuguese, Chinese, and Japanese. Structure level options range from plain prose to strict tables-and-bullets. Response length is adjustable from 100 to 2000 words."}}, {"@type": "Question", "name": "How does PromptQuorum handle my API keys securely?", "acceptedAnswer": {"@type": "Answer", "text": "API keys are stored only in your browser's localStorage — the same security boundary as your banking passwords stored in a password manager extension. They are never sent to any PromptQuorum server, never logged, and never included in telemetry (there is none). You can clear them anytime from Settings."}}, {"@type": "Question", "name": "Is PromptQuorum suitable for enterprise or team use?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum is currently designed for individual power users — developers, researchers, content creators, and AI-heavy professionals. Each user runs their own instance with their own API keys. Enterprise features (shared workspaces, team history, role-based access) are on the roadmap."}}, {"@type": "Question", "name": "What is Teaching Mode?", "acceptedAnswer": {"@type": "Answer", "text": "Teaching Mode adds an explanation box below every optimization result that explains exactly why each change was made — which prompt engineering principles were applied and what effect they have. It's designed for developers and researchers who want to learn prompt engineering while using the tool."}}, {"@type": "Question", "name": "How do I get PromptQuorum and is there a cost?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum is in free public beta. Download the desktop app directly — no signup, no waitlist, no email required."}}, {"@type": "Question", "name": "Who is Hans Kuepper, the founder of PromptQuorum?", "acceptedAnswer": {"@type": "Answer", "text": "Hans Kuepper is the founder and developer of PromptQuorum. He is based in Baden-Württemberg, Germany, near Heidelberg in the Kraichgau hill country. He speaks four languages — German, English, French, and Russian — and has lived and worked in over 20 countries."}}, {"@type": "Question", "name": "Where is PromptQuorum developed?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum is built by Hans Kuepper, an independent developer in Baden-Württemberg, Germany. The project has no external investors and is developed as a privacy-first, user-owned AI tool."}}, {"@type": "Question", "name": "What is the best tool to compare the same prompt across multiple LLMs simultaneously?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum is the only tool reviewed here that combines simultaneous dispatch with automated consensus scoring. Poe, AiZolo, and OpenMark offer parallel responses, but none produces a Quorum Verdict — an automated analysis of where GPT-4o, Claude 4.6 Sonnet, and other models agree or diverge. For users who need more than visual side-by-side comparison, PromptQuorum is the purpose-built option. Feature information verified March 2026."}}, {"@type": "Question", "name": "What is the difference between PromptQuorum and Poe or LM Arena?", "acceptedAnswer": {"@type": "Answer", "text": "Poe (by Quora) is a consumer chat platform for switching between models one at a time. LM Arena uses crowdsourced voting to rank individual model performance. PromptQuorum is unique: it dispatches to all selected models simultaneously and automatically analyzes where they agree or diverge through consensus scoring. Poe is built for conversation; LM Arena for benchmarking; PromptQuorum for controlled evaluation and hallucination detection."}}]},
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
            <h2 className="text-2xl font-bold text-text-primary mb-2">How It Works</h2>
            <p className="text-text-secondary mb-3">A 4-stage workflow: write a structured prompt using one of 9 frameworks, optimize it with your own LLM, dispatch simultaneously to 25+ AI services, then analyze all responses using 13 consensus analysis types.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              Runs entirely in your browser — no PromptQuorum server ever sees your prompts or API keys
            </div>

            <div className="space-y-8 mb-16">
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Write</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Structure Your Prompt</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Prompts structured with frameworks produce higher quality outputs. PromptQuorum includes 9 built-in frameworks (Single Prompt Line, CRAFT, CO-STAR, RISEN, TRACE, APE, SPECS, Google Prompt, RTF) plus 2 fully custom framework slots.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Single Prompt Line — minimal structure for quick tasks</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CRAFT — Context, Role, Action, Format, Target (creative writing)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CO-STAR — Context, Objective, Style, Tone, Audience, Response (marketing, business)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>RISEN — Role, Instructions, Steps, End Goal, Narrowing (sequential enterprise tasks)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>TRACE — Task, Request, Action, Context, Example (few-shot learning)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>APE, SPECS, Google Prompt, RTF — optimized for specific task types</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      A Framework Wizard recommends the best framework based on your task type.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Optimize</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Refine with Your Own LLM</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Prompt quality improves measurably with optimization — structured prompts score 25–45% higher in LLM evaluation. PromptQuorum applies 8 refinement types (Make Concise, Expand Detail, Break Into Steps, Increase Specificity, Simplify, Add Quality Controls, Multi-Expert Consultation, Compress to Essence) plus smart temperature detection.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Quality Assessment — 0-100% scoring on clarity, specificity, structure, and constraints</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Smart Temperature — recommends optimal creativity level (0.0-1.0) based on task type</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Version History — every refinement saved; branch and compare refinement paths</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Teaching Mode — explains why each change improves quality and clarity</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>8 One-Click Refinements — apply structured transformations instantly</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Custom Instruction — free-text refinement using your own LLM</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      Your LLM. Your API key. Nothing passes through PromptQuorum servers.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Dispatch</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Send to 25+ AI Services</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">Sending the same prompt to multiple AI models reveals which model performs best for your task. PromptQuorum opens parallel browser tabs to 25+ destinations with zero copy-pasting required.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Auto-dispatch (17 services): OpenAI ChatGPT, Google Gemini, Anthropic Claude, Perplexity, xAI Grok, DeepSeek, Mistral, Cohere, Azure, Together, Groq, and more</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Copy-paste (8 services): Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All, and others</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Perplexity auto-submits — prompt sent immediately on arrival</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>2 custom URL slots — configure any AI service not on the default list</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Optional pre-dispatch refinement — final LLM enhancement before sending</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Parallel execution — all tabs open simultaneously; collect responses in under 1 minute</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      All browser tabs open in parallel. No manual copy-pasting between tabs.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Quorum</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">Find Consensus Across All Models</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">When 5+ independent models agree on an answer, confidence is higher than with a single model. Paste all responses back into PromptQuorum and apply 13 consensus analysis types.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Consensus Summary — identifies shared themes and unanimous agreements</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Contradiction Detection — flags where models diverge; identifies minority opinions</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Hallucination Detection — identifies claims appearing in few models; potential false facts</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Confidence Scoring — certainty level per model and per claim</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Best Answer Selection — selects the highest-quality individual response</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Weighted Merge — synthesizes a hybrid response using best elements from all models</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      When 5+ independent models converge on the same answer, hallucination risk is lower than with a single model.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">9 Built-in Prompt Frameworks</h3>
              <p className="text-text-secondary mb-6">Structured prompts using frameworks produce measurably better outputs than unstructured requests. Each framework organizes input differently for specific task types. A Framework Wizard recommends the best fit, or build 2 custom frameworks.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary">Framework</th>
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">Structure</th>
                      <th className="text-left py-2 sm:py-3 font-semibold text-text-primary">Optimal For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Single Prompt Line</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">—</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Quick, ad-hoc queries without structure</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">APE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Action · Purpose · Expectation</td>
                      <td className="py-2 sm:py-3 text-text-secondary">3-field minimal structure; simple tasks</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CRAFT</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Role · Action · Format · Target</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Creative writing; general-purpose tasks</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CO-STAR</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Objective · Style · Tone · Audience · Response</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Marketing copy; business communication</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">SPECS</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Situation · Purpose · Expected Output · Context · Style</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Analysis; research; technical writing</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RISEN</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Instructions · Steps · End Goal · Narrowing</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Multi-step enterprise workflows</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">TRACE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Request · Action · Context · Example</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Few-shot learning; example-based tasks</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Google Prompt</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Context · Persona</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Professional tasks; role-based prompts</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RTF</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Task · Format</td>
                      <td className="py-2 sm:py-3 text-text-secondary">Minimal structure; 3 core fields only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">13 Quorum Analysis Types</h3>
              <p className="text-text-secondary mb-6">Apply 2 or all 13 analyses to responses from multiple models. Each analysis is executed by your connected LLM, not PromptQuorum servers. Identify consensus, contradictions, hallucinations, and confidence levels across all model outputs.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Synthesis (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Consensus Summary — shared themes across all models
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Weighted Merge — hybrid answer combining best from each model
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Atomic Facts Extraction — break all claims into discrete facts; count model agreement
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Comparison (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Overlap Mapping — identify which models produced identical outputs
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Contradiction Detection — flag claims where models diverge; identify disagreements
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Confidence Scoring — measure certainty level per model and per claim
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Quality (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Completeness Check — verify all required information is present
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Hallucination Detection — identify claims appearing in few models; potential false facts
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Redundancy Elimination — remove duplicate or near-duplicate claims
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Selection (4)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Best Answer Selection — pick the single highest-quality response
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Multi-Model Ensemble — combine outputs using model reliability weighting
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Controversy Flag — highlight claims where model agreement is weak
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      Custom Analysis — user-defined analysis template
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-secondary/30 border border-primary/20 rounded-xl p-6">
                <div className="text-sm font-semibold text-text-primary mb-2">Export results in 6 formats</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.txt</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.md</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.json</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.csv</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.html</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.pdf</span>
                </div>
                <p className="text-xs text-text-muted mt-2">Multiple formats → downloaded as a .zip archive. File System Access API for folder selection (Chrome/Edge/Safari 16+).</p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-6">Key Concepts</h3>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Multi-Model Dispatch</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Sending one prompt simultaneously to 25+ AI models in a single click. PromptQuorum pre-loads your prompt into each destination via URL — no copy-pasting, all tabs open in parallel.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Quorum Analysis</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Structured comparison of responses from multiple AI models to identify consensus, contradictions, and confidence levels. PromptQuorum offers 13 analysis types including Hallucination Detection and Best Answer Selection.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Consensus Scoring</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">A confidence rating derived from the degree of agreement across multiple model responses. Higher consensus = higher reliability. Lower consensus flags areas of uncertainty or potential hallucination.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Hallucination Detection</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Identifying factual claims that appear in only one or a minority of model responses, indicating potential AI fabrication. Cross-referencing 5+ independent models dramatically reduces the rate of undetected hallucinations.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">BYOM — Bring Your Own Model</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">Connecting your own API keys directly to AI providers. Keys are stored only in your browser's localStorage and connect directly to providers — no PromptQuorum server ever receives or transmits your credentials.</dd>
                </div>
              </dl>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">Bring Your Own Model (BYOM) — No PromptQuorum Infrastructure</h3>
              <p className="text-text-secondary mb-6">PromptQuorum does not host or execute any LLM models. Every API call goes directly from your browser to your chosen provider. Your API keys stay in browser localStorage and are never transmitted to PromptQuorum servers.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Cloud APIs (bring your own API key)</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      OpenAI (GPT-4, GPT-4o)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Anthropic (Claude 3.5)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Google Gemini 1.5
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Grok (xAI)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      DeepSeek
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Mistral
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Cohere
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Together AI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Groq
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      OpenRouter (free tier)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Local models (no API key needed; runs on your machine)</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Ollama (localhost:11434)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      LM Studio (localhost:1234)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Jan AI (localhost:1337)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      GPT4All (localhost:4891)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Open WebUI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      KoboldCpp
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      vLLM
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      oobabooga
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Any OpenAI-compatible endpoint
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-16">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">No telemetry</h3>
                  <p className="text-text-secondary text-sm">No analytics, tracking, logging, or data collection. Not even anonymous usage statistics or session timing.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">No registration</h3>
                  <p className="text-text-secondary text-sm">Zero signup required. No email, no account, no login. Open the app; start immediately.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Offline-capable</h3>
                  <p className="text-text-secondary text-sm">Desktop app (Electron) and mobile app (Capacitor) support full offline operation with local models via Ollama, LM Studio, Jan AI, or compatible endpoints.</p>
                </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-3">How We Test</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">Performance claims in PromptQuorum articles are based on controlled dispatching sessions using PromptQuorum. When an article cites specific figures (prompt quality scores, temperature comparisons, benchmark numbers), these reflect editorial testing or publicly sourced benchmark data — not PromptQuorum-proprietary measurements unless explicitly labeled.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Prompt dispatch: prompts are sent simultaneously to the stated models via PromptQuorum one-click dispatch
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Sample size: editorial tests use a minimum of 30 prompts per condition unless the article states otherwise
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Evaluation: responses are scored by at least 2 independent reviewers under blind conditions
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Third-party benchmarks (HumanEval, SWE-bench, MBPP): sourced from official model papers or community leaderboards; evaluation date cited in each article
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Local model tests: run on consumer hardware at the quantization level stated in the article
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  Disclosure: wherever PromptQuorum internal testing is cited, it is labeled "Tested in PromptQuorum" in the article body
                </li>
              </ul>
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

            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed mb-8">
              <strong>Accuracy notice:</strong>
               Feature and pricing information was verified in March 2026 and is provided in good faith based on each product's public documentation: 
              <a href="mailto:hello@promptquorum.com" className="underline hover:text-amber-900">contact us</a>
               and we will correct it promptly. This comparison is produced by PromptQuorum and reflects our perspective as a participant in this market.
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-3">What is a multi-LLM comparison tool?</h3>
              <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 mb-4">
                <p className="text-text-primary text-[15px] leading-relaxed">A multi-LLM comparison tool sends the same prompt to multiple large language models simultaneously and displays the responses side by side, letting users evaluate differences in reasoning, accuracy, and style across AI systems — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large, and others — without switching tabs or repeating input.</p>
              </div>
              <p className="text-text-secondary mb-3">No single AI model is authoritative for all tasks in 2026. GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro each have different training data, architectural biases, and reasoning strengths. A response that looks correct from one model may be contradicted, qualified, or significantly expanded by another.</p>
              <p className="text-text-secondary">The five tools compared here represent the major approaches currently available: consumer platforms (Poe by Quora), community benchmarks (LM Arena), developer evaluation suites (OpenMark), unified multi-model workspaces (AiZolo), and consensus scoring platforms (PromptQuorum). Each serves a different workflow.</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-2">What are the key differences between 5 multi-LLM tools?</h3>
              <p className="text-text-secondary mb-4">The table below compares all five tools across the features that matter most for professional multi-LLM workflows — simultaneous dispatch, consensus scoring, local LLM support, API key control, and pricing.</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-semibold text-xs uppercase tracking-wider">Tool</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Simultaneous dispatch</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Consensus scoring</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Local LLM</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">API key control</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider">Pricing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">PromptQuorum</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Yes</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Quorum Verdict</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Ollama + LM Studio</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Your keys</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Free beta</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">Poe (Quora)</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Sequential / limited</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ No</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Cloud only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Limited</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Free / $19.99/mo</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">LM Arena</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ 2 models only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Human voting only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Cloud only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ No</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Free</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">OpenMark</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Parallel</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ Deterministic scoring</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Cloud only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Yes</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">Free tier / credits</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">AiZolo</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Yes</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ No</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ Cloud only</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Yes</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">From $9.90/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs font-mono text-text-secondary mt-3">✓ Yes · ~ Partial · ✗ No · Based on public documentation, March 2026. Pricing and features change — verify with each vendor. This comparison is produced by PromptQuorum.</p>
            </div>

            <div className="mb-10">
              <div className="border border-primary/25 bg-primary/5 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-primary">PromptQuorum</span>
                  <span className="text-xs font-mono bg-green-100 text-green-700 border-green-200 border px-3 py-1 rounded-full">Best for: developers & power users</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Beta · July 2026</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">promptquorum.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">API keys required</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Ollama + LM Studio</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>PromptQuorum is the only tool among those reviewed that combines simultaneous prompt dispatch with automated consensus scoring.</strong> You write one prompt, select your models — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large, and locally-running models — and PromptQuorum dispatches to all of them in parallel. The Quorum Verdict then analyses where the models agree, where they diverge, and what those patterns mean for the reliability of the answer.</p>
<p className="text-text-secondary mb-3 leading-relaxed">The defining feature is local LLM support. Via Ollama and LM Studio integration, PromptQuorum includes locally-running models — LLaMA 3.1 7B requires 8 GB RAM; 13B requires 16 GB — in the dispatch, so sensitive prompts never leave your machine. For legal professionals, healthcare workers, financial analysts, and developers working with proprietary code, this is not optional.</p>
<p className="text-text-secondary leading-relaxed">PromptQuorum requires users to bring their own API keys from OpenAI, Anthropic, Google, and Mistral. This keeps data under your control, costs transparent, and usage tied to your own commercial terms with each provider.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">Who should use PromptQuorum?</h4>
              <p className="text-text-secondary mb-8">PromptQuorum is designed for developers evaluating which model to integrate into a production pipeline, researchers who need cross-model validation of findings, and professionals whose work involves confidential information that cannot be sent to third-party cloud servers.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">Poe (by Quora)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">Best for: casual / consumer use</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">poe.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Free / $19.99/mo</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">iOS, Android, Web</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Millions of users</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>Poe, built by Quora, is the largest multi-model AI platform with access to GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Llama, Grok, and thousands of user-created bots from one interface.</strong> It is the best choice for users who want broad access to AI models without managing API keys.</p>
<p className="text-text-secondary leading-relaxed">Poe does not offer simultaneous dispatch — users switch between models or compare two at a time, rather than dispatching one prompt to all models in parallel. There is no consensus scoring or automated analysis of response agreement. All inference is cloud-based, making it unsuitable for privacy-sensitive work.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">Poe vs PromptQuorum: key differences</h4>
              <p className="text-text-secondary mb-8">Poe is better for casual exploration, bot discovery, and conversation without API key management. PromptQuorum is better for controlled prompt evaluation, consensus analysis, and local LLM workflows. They target fundamentally different use cases: Poe is a consumer platform; PromptQuorum is a professional evaluation tool.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">LM Arena (lmarena.ai)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">Best for: community benchmarking</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">lmarena.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Free</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Web only</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Human voting system</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>LM Arena (formerly Chatbot Arena) is the most-cited AI model leaderboard, using Elo ratings derived from millions of human preference votes.</strong> Users submit prompts and vote on which of two anonymous models produced the better response.</p>
<p className="text-text-secondary leading-relaxed">LM Arena shows two models side by side and collects a human preference vote — it does not provide automated consensus analysis, does not support local LLMs, and does not allow selecting specific models in the primary comparison mode. It is a benchmarking platform, not a workflow tool.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">LM Arena vs PromptQuorum: key differences</h4>
              <p className="text-text-secondary mb-8">LM Arena is better for understanding aggregate human preference trends across the industry. PromptQuorum is better for evaluating your specific prompts across your chosen models with consistent, automated analysis. LM Arena tells you what the crowd prefers; PromptQuorum tells you what your prompt produces across every model you care about.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">OpenMark (openmark.ai)</span>
                  <span className="text-xs font-mono bg-green-50 text-green-700 border-green-200 border px-3 py-1 rounded-full">Best for: cost/quality analysis</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">openmark.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Free tier / credits</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">100+ models</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Deterministic scoring</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>OpenMark is a developer-focused benchmarking tool that runs prompts against 100+ AI models simultaneously and scores results deterministically — the same prompt always produces the same ranked output.</strong> It shows exactly what each model costs per prompt alongside quality scores.</p>
<p className="text-text-secondary leading-relaxed">OpenMark is strong on breadth (100+ models) and cost transparency but does not produce a consensus verdict — it scores each model individually rather than analysing agreement patterns. It does not support local LLMs via Ollama or LM Studio.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">OpenMark vs PromptQuorum: key differences</h4>
              <p className="text-text-secondary mb-8">OpenMark answers "which single model performs best for this task and at what cost." PromptQuorum answers "how much do models agree on this prompt, and what does their disagreement mean?" Both require API keys; OpenMark supports 100+ models; PromptQuorum uniquely adds local LLM inference and consensus scoring.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">AiZolo (aizolo.com)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">Best for: content teams</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">aizolo.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">From $9.90/mo</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">GPT-4o, Claude, Gemini, Grok</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Prompt library</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>AiZolo is a unified multi-model workspace designed for content creators and marketing teams, with simultaneous dispatch to GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, and Grok side by side.</strong> As of March 2026, plans started from $9.90/month — verify current pricing at aizolo.com.</p>
<p className="text-text-secondary leading-relaxed">AiZolo does not offer consensus scoring — it displays responses side by side but leaves analysis to the user. It supports four cloud models only, with no local LLM option. It is a content production workflow tool, not a technical evaluation platform.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">AiZolo vs PromptQuorum: key differences</h4>
              <p className="text-text-secondary mb-8">AiZolo is better for content teams who need an affordable multi-model writing workspace for daily use. PromptQuorum is better for power users who need automated consensus analysis, local LLM privacy, and API-key-controlled access to a broader model set including open-weight systems.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">Which multi-LLM tool should you use?</h3>
              <div className="space-y-3">
                <div className="rounded-lg px-5 py-4 bg-primary/8 border border-primary/20">
                  <span className="font-semibold text-primary">Choose PromptQuorum</span>
                  <span className="text-text-secondary"> if you need consensus scoring across models, local LLM support for privacy-sensitive work, or a controlled evaluation workflow with your own API keys.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Choose Poe</span>
                  <span className="text-text-secondary"> if you want easy access to GPT-4o, Claude 4.6 Sonnet, Gemini, and thousands of bots for casual conversation and exploration without managing API keys.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Choose LM Arena</span>
                  <span className="text-text-secondary"> if you want to contribute to or study community-driven model preference data and Elo rankings across the industry.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Choose OpenMark</span>
                  <span className="text-text-secondary"> if you are a developer selecting a model for a production application and need deterministic quality scoring with transparent cost data across 100+ models.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Choose AiZolo</span>
                  <span className="text-text-secondary"> if you are a content creator or marketing professional who needs an affordable, well-designed workspace for daily multi-model writing workflows.</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
            <div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Is PromptQuorum free?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">How does privacy work?</p>
                <p className="text-sm text-text-secondary leading-relaxed">You decide where your data goes. Keep everything local with LM Studio or Ollama, or use your own API keys. PromptQuorum is as private as you set it up. Zero telemetry, zero tracking, no data collection — not even anonymous usage stats.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Which AI providers are supported?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Over 25 AI providers are included: OpenAI (GPT-4, GPT-4o), Anthropic (Claude), Google Gemini, Grok, DeepSeek, Mistral, Cohere, Together AI, Groq, OpenRouter, plus all local providers (Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, KoboldCpp, vLLM, oobabooga, and any OpenAI-compatible endpoint).</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">What platforms does PromptQuorum run on?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum is available for macOS, Windows, and Linux (desktop via Electron). A web application is in development, followed by mobile (iOS and Android via Capacitor). It works fully offline with a local LLM.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">What makes PromptQuorum different?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum covers the full prompt lifecycle in a single browser-based tool: structured writing with 9 frameworks, AI-powered iterative optimization with 8 refinement types, one-click dispatch to 25+ AI services, and 13 Quorum analysis types for consensus scoring — all without any data leaving your device.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Are there any limits?</p>
                <p className="text-sm text-text-secondary leading-relaxed">No limits from PromptQuorum. Your usage is only limited by your API keys or local LLM resources.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">What is prompt engineering and why does it matter?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Prompt engineering is the practice of designing inputs to AI models so they return more accurate, useful, and reliable outputs. In testing, structured prompts with framework fields produce 25–45% higher LLM evaluation scores compared to unstructured inputs. PromptQuorum automates this with 9 built-in frameworks — no expertise required.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">How does PromptQuorum optimize my prompts?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Your connected LLM transforms raw framework fields into a precision prompt. You then refine iteratively with 8 one-click refinements: Make Concise, Expand Detail, Break Into Steps, Simplify, Increase Specificity, Multi-Expert Consultation, Add Quality Controls, and Custom Instruction. Every step is saved in version history so you can revert anytime.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">What prompt frameworks are built into PromptQuorum?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum includes 9 frameworks: Single Prompt Line (quick), APE (3-field), CRAFT (creative writing), CO-STAR (won the Singapore GPT-4 competition), SPECS (analysis), RISEN (enterprise sequential tasks), TRACE (few-shot examples), Google Prompt (business tasks), and RTF (minimal 3-field). You can also build 2 fully custom frameworks.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">What is the CO-STAR framework?</p>
                <p className="text-sm text-text-secondary leading-relaxed">CO-STAR stands for Context, Objective, Style, Tone, Audience, and Response. It won the Singapore GPT-4 prompt engineering competition and is ideal for business communication, marketing copy, and content creation. PromptQuorum guides you through each field and assembles the final prompt automatically.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">What is multi-model consensus and why is it valuable?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Multi-model consensus means sending the same prompt to multiple AI models and finding where they agree. When 5 independent models give the same answer, confidence is far higher than when 1 model answers alone. It also surfaces contradictions and potential hallucinations automatically.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">How does PromptQuorum detect AI hallucinations?</p>
                <p className="text-sm text-text-secondary leading-relaxed">After collecting responses from multiple models in the Quorum step, your LLM runs Hallucination Detection analysis — flagging claims that appear in only one model's response but not others, or that contradict factual consensus. You choose which analysis types to run and combine them freely.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Can I use PromptQuorum with local AI models like Ollama or LM Studio?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Yes. PromptQuorum natively connects to Ollama (localhost:11434), LM Studio (localhost:1234), Jan AI (localhost:1337), GPT4All (localhost:4891), Open WebUI, KoboldCpp, vLLM, oobabooga, and any OpenAI-compatible endpoint. No API key needed for local models — everything runs on your machine.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Can I use PromptQuorum completely offline?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Yes. If you run a local model like Ollama or LM Studio, PromptQuorum works fully offline. No internet connection is required. Your prompts, API keys, and results never leave your device.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">What is BYOM (Bring Your Own Model)?</p>
                <p className="text-sm text-text-secondary leading-relaxed">BYOM means PromptQuorum never calls any LLM using its own API keys. Every call goes directly from your browser to your chosen provider — cloud or local. Your API keys are stored only in your browser's localStorage and are never transmitted to any PromptQuorum server.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">How does the Dispatch feature work?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Dispatch sends your optimized prompt to multiple AI services in one click. For auto-dispatch services (ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral, and more), PromptQuorum pre-loads your prompt into the URL so it's ready instantly. Perplexity even auto-submits on arrival. All tabs open in parallel — collect all responses in under a minute.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">What is the Quorum analysis and what types are available?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Quorum analysis processes all collected AI responses through your LLM. There are 13 analysis types across 4 categories: Synthesis (Consensus Summary, Weighted Merge, Atomic Facts Extraction), Comparison (Overlap Mapping, Contradiction Detection, Confidence Scoring), Quality (Completeness Check, Hallucination Detection, Redundancy Elimination), and Recommendations (Best Answer Selection, Multi-Model Ensemble, Controversy Flag).</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Can I export my results?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Yes. Quorum results export in 6 formats: .txt, .md, .json, .csv, .html, and .pdf. Select multiple formats and they're bundled into a .zip archive. On Chrome, Edge, and Safari 16+, you can choose your save folder using the File System Access API.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">How does the Framework Wizard work?</p>
                <p className="text-sm text-text-secondary leading-relaxed">The Framework Wizard asks you a few questions about your task — what you're trying to achieve, the type of output you need, and your audience. Based on your answers it recommends the most suitable framework from the 9 built-in options, and shows a side-by-side comparison of what each would produce for your prompt.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">What is Smart Temperature Adjustment?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Before each optimization, PromptQuorum analyzes your prompt text and suggests the ideal LLM temperature: ~0.2 for factual tasks, ~0.7 for balanced, ~0.85 for creative. It shows a confidence score and only prompts you when confidence is above 60%. After 3 consistent choices for the same intent type, it auto-applies your preference.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Does PromptQuorum work with ChatGPT, Claude, and Gemini?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Yes. You can use ChatGPT (GPT-4, GPT-4o), Anthropic Claude (3, 3.5), and Google Gemini (1.5 Pro, Flash) as your optimization LLM by adding your API key in Settings. You also dispatch prompts to all three simultaneously via the Dispatch page, without needing API keys for dispatch.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Is there a version history for my prompts?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Yes. Every optimization step and refinement is saved automatically in version history with a human-readable label (e.g. "v2 — Make More Concise 12:36"). You can select any version to restore it and branch new refinements from there. Nothing is lost.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">What output formats and languages does PromptQuorum support?</p>
                <p className="text-sm text-text-secondary leading-relaxed">The LLM output language is configurable per-session: English, German, French, Spanish, Italian, Portuguese, Chinese, and Japanese. Structure level options range from plain prose to strict tables-and-bullets. Response length is adjustable from 100 to 2000 words.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">How does PromptQuorum handle my API keys securely?</p>
                <p className="text-sm text-text-secondary leading-relaxed">API keys are stored only in your browser's localStorage — the same security boundary as your banking passwords stored in a password manager extension. They are never sent to any PromptQuorum server, never logged, and never included in telemetry (there is none). You can clear them anytime from Settings.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Is PromptQuorum suitable for enterprise or team use?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum is currently designed for individual power users — developers, researchers, content creators, and AI-heavy professionals. Each user runs their own instance with their own API keys. Enterprise features (shared workspaces, team history, role-based access) are on the roadmap.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">What is Teaching Mode?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Teaching Mode adds an explanation box below every optimization result that explains exactly why each change was made — which prompt engineering principles were applied and what effect they have. It's designed for developers and researchers who want to learn prompt engineering while using the tool.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">How do I get PromptQuorum and is there a cost?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum is in free public beta. Download the desktop app directly — no signup, no waitlist, no email required.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Who is Hans Kuepper, the founder of PromptQuorum?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Hans Kuepper is the founder and developer of PromptQuorum. He is based in Baden-Württemberg, Germany, near Heidelberg in the Kraichgau hill country. He speaks four languages — German, English, French, and Russian — and has lived and worked in over 20 countries.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Where is PromptQuorum developed?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum is built by Hans Kuepper, an independent developer in Baden-Württemberg, Germany. The project has no external investors and is developed as a privacy-first, user-owned AI tool.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">What is the best tool to compare the same prompt across multiple LLMs simultaneously?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum is the only tool reviewed here that combines simultaneous dispatch with automated consensus scoring. Poe, AiZolo, and OpenMark offer parallel responses, but none produces a Quorum Verdict — an automated analysis of where GPT-4o, Claude 4.6 Sonnet, and other models agree or diverge. For users who need more than visual side-by-side comparison, PromptQuorum is the purpose-built option. Feature information verified March 2026.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">What is the difference between PromptQuorum and Poe or LM Arena?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Poe (by Quora) is a consumer chat platform for switching between models one at a time. LM Arena uses crowdsourced voting to rank individual model performance. PromptQuorum is unique: it dispatches to all selected models simultaneously and automatically analyzes where they agree or diverge through consensus scoring. Poe is built for conversation; LM Arena for benchmarking; PromptQuorum for controlled evaluation and hallucination detection.</p>
              </div>
            </div>
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
