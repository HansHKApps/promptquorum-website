import type { Metadata } from 'next'
import { HowItWorksPageClient } from '@/components/HowItWorksPageClient'
import { generateAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'How Multi-Model AI Dispatch & Consensus Works | PromptQuorum',
  description: 'How PromptQuorum works: write structured prompts with 9 frameworks, optimize with your own LLM, dispatch simultaneously to 25+ AI services, then run 13 types of consensus analysis — Hallucination Detection, Contradiction Detection, Best Answer Selection, and more.',
  alternates: generateAlternates('/how-it-works'),
  openGraph: {
    type: 'website',
    url: 'https://www.promptquorum.com/how-it-works',
    siteName: 'PromptQuorum',
    title: 'How Multi-Model AI Dispatch & Consensus Works | PromptQuorum',
    description: 'Write one prompt, dispatch to 25+ AI models simultaneously, then run Quorum analysis — Hallucination Detection, Contradiction Detection, Best Answer Selection, and 10 more analysis types.',
    images: [{ url: 'https://www.promptquorum.com/og-image.png', width: 1200, height: 630, alt: 'PromptQuorum — One Prompt. Every Model. One Verdict.' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@promptquorum',
    title: 'How Multi-Model AI Dispatch & Consensus Works | PromptQuorum',
    description: 'Write one prompt, dispatch to 25+ AI models simultaneously, then run Quorum analysis — Hallucination Detection, Contradiction Detection, Best Answer Selection, and more.',
    images: ['https://www.promptquorum.com/og-image.png'],
  },
}

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksPageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'How PromptQuorum Works — Write, Optimize, Dispatch, Quorum',
              'url': 'https://www.promptquorum.com/how-it-works',
              'description': 'A complete guide to the PromptQuorum 4-stage workflow: structured prompt writing with 9 frameworks, LLM-powered optimization, one-click dispatch to 25+ AI services, and multi-model Quorum analysis.',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com' },
                { '@type': 'ListItem', 'position': 2, 'name': 'How It Works', 'item': 'https://www.promptquorum.com/how-it-works' },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              'name': 'How to Use PromptQuorum: 4-Stage Workflow',
              'description': 'A complete guide to the PromptQuorum 4-stage workflow for multi-model AI dispatch and consensus analysis.',
              'image': 'https://www.promptquorum.com/og-image.png',
              'step': [
                {
                  '@type': 'HowToStep',
                  'position': 1,
                  'name': 'Write Your Structured Prompt',
                  'text': 'Start with a structured prompt using one of PromptQuorum\'s 9 built-in frameworks (CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google Prompt, RTF, or Single Prompt Line). Include role, objective, context, constraints, and output format.',
                  'image': 'https://www.promptquorum.com/og-image.png',
                },
                {
                  '@type': 'HowToStep',
                  'position': 2,
                  'name': 'Optimize With Your Own LLM',
                  'text': 'Optionally improve your prompt by sending it to your connected LLM for optimization. PromptQuorum can refine the prompt structure, wording, and constraints before dispatch.',
                  'image': 'https://www.promptquorum.com/og-image.png',
                },
                {
                  '@type': 'HowToStep',
                  'position': 3,
                  'name': 'Dispatch to 25+ AI Models',
                  'text': 'Send your prompt simultaneously to 25+ AI models including OpenAI GPT-4o, Anthropic Claude, Google Gemini, xAI Grok, DeepSeek, Mistral, Cohere, and more. PromptQuorum opens all destinations in parallel browser tabs in a single click.',
                  'image': 'https://www.promptquorum.com/og-image.png',
                },
                {
                  '@type': 'HowToStep',
                  'position': 4,
                  'name': 'Run Quorum Analysis on Results',
                  'text': 'Use PromptQuorum\'s 13 analysis types to compare and synthesize results: Hallucination Detection, Contradiction Detection, Best Answer Selection, Consensus Summary, Weighted Merge, Cost Analysis, Speed Analysis, Quality Score, Confidence Level, Minority Report, Model Reliability, Semantic Similarity, and Custom Analysis.',
                  'image': 'https://www.promptquorum.com/og-image.png',
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': 'What is multi-model AI dispatch?',
                  'acceptedAnswer': { '@type': 'Answer', 'text': 'Multi-model dispatch means sending one prompt simultaneously to 25+ AI models — such as GPT-4o, Claude, and Gemini — in a single click. PromptQuorum pre-loads your prompt into each destination via URL, opening all browser tabs in parallel so you can collect responses in under a minute.' },
                },
                {
                  '@type': 'Question',
                  'name': 'What is Quorum analysis?',
                  'acceptedAnswer': { '@type': 'Answer', 'text': 'Quorum analysis is the structured comparison of responses from multiple AI models to identify consensus, contradictions, and confidence levels. PromptQuorum offers 13 analysis types including Hallucination Detection, Contradiction Detection, Best Answer Selection, Consensus Summary, and Weighted Merge.' },
                },
                {
                  '@type': 'Question',
                  'name': 'How many AI models does PromptQuorum support?',
                  'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum supports 25+ cloud AI services including OpenAI (GPT-4o, o1), Anthropic Claude, Google Gemini, xAI Grok, DeepSeek, Mistral, Cohere, and more via OpenRouter. It also supports local LLMs via Ollama, LM Studio, Jan AI, and any OpenAI-compatible endpoint — with full offline capability.' },
                },
                {
                  '@type': 'Question',
                  'name': 'Is PromptQuorum free to use?',
                  'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. PromptQuorum is free. You bring your own API keys (BYOM) — your keys connect directly from your browser to your chosen AI providers. No account is required, no subscription needed, and no PromptQuorum server ever handles your API keys or prompts.' },
                },
                {
                  '@type': 'Question',
                  'name': 'What prompt engineering frameworks does PromptQuorum include?',
                  'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum includes 9 built-in frameworks: CO-STAR (winner of the Singapore GPT-4 competition), CRAFT, RISEN, TRACE, APE, SPECS, Google Prompt, RTF, and Single Prompt Line — plus 2 fully custom framework slots. A Framework Wizard helps you choose the right one for your task.' },
                },
                {
                  '@type': 'Question',
                  'name': 'How does hallucination detection work in PromptQuorum?',
                  'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum\'s Hallucination Detection analysis sends all collected model responses to your connected LLM, which identifies factual claims that appear in only one or a minority of responses. When 5+ independent models disagree on a specific claim, it is flagged as a potential hallucination for your review.' },
                },
              ],
            },
          ]),
        }}
      />
    </>
  )
}
