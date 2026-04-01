import type { Metadata } from 'next'
import { FAQPageClient } from '@/components/FAQPageClient'
import { generateAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'FAQ — Multi-Model AI Dispatch, Consensus Scoring & Prompt Frameworks | PromptQuorum',
  description: '26 answers about PromptQuorum: how multi-model dispatch works, consensus scoring, hallucination detection, 9 prompt frameworks (CO-STAR, CRAFT, RISEN), local LLM support, BYOM privacy model, and getting started.',
  alternates: generateAlternates('/faq'),
  openGraph: {
    title: 'FAQ | PromptQuorum',
    description: 'Everything you need to know about PromptQuorum — prompt engineering, privacy, AI providers, and getting started.',
  },
}

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function FAQPage({ searchParams }: PageProps) {
  // Extract language from searchParams
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

  return (
    <>
      <FAQPageClient initialLang={selectedLang as any} />

      {/* FAQ Schema for Google Rich Snippets — all 26 EN questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Is PromptQuorum free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis.' } },
              { '@type': 'Question', name: 'How does privacy work?', acceptedAnswer: { '@type': 'Answer', text: 'Zero telemetry, zero tracking, no data collection. API keys are stored only in your browser localStorage and never transmitted to any PromptQuorum server.' } },
              { '@type': 'Question', name: 'Which AI providers are supported?', acceptedAnswer: { '@type': 'Answer', text: 'Over 25 AI providers including OpenAI, Anthropic Claude, Google Gemini, Grok, DeepSeek, Mistral, Cohere, Together AI, Groq, OpenRouter, plus all local providers like Ollama, LM Studio, Jan AI, GPT4All, and any OpenAI-compatible endpoint.' } },
              { '@type': 'Question', name: 'What platforms does PromptQuorum run on?', acceptedAnswer: { '@type': 'Answer', text: 'Desktop apps (Mac, Windows via Electron), web application, and eventually mobile (iOS and Android via Capacitor). Works fully offline with a local LLM.' } },
              { '@type': 'Question', name: 'What makes PromptQuorum different?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum is the only tool covering the full prompt lifecycle: structured writing with 9 frameworks, AI-powered iterative optimization, one-click dispatch to 25+ AI services, and multi-model consensus analysis — all without any data leaving your device.' } },
              { '@type': 'Question', name: 'Are there any limits?', acceptedAnswer: { '@type': 'Answer', text: 'No limits from PromptQuorum. Your usage is only limited by your API keys or local LLM resources.' } },
              { '@type': 'Question', name: 'What is prompt engineering and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt engineering is the practice of designing inputs to AI models so they return more accurate, useful, and reliable outputs. A well-structured prompt can improve AI output quality by 25–45%. PromptQuorum automates this with 9 built-in frameworks.' } },
              { '@type': 'Question', name: 'How does PromptQuorum optimize my prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Your connected LLM transforms raw framework fields into a precision prompt. You then refine iteratively with 8 one-click refinements. Every step is saved in version history so you can revert anytime.' } },
              { '@type': 'Question', name: 'What prompt frameworks are built into PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: '9 frameworks: Single Prompt Line, APE, CRAFT, CO-STAR (won the Singapore GPT-4 competition), SPECS, RISEN, TRACE, Google Prompt, and RTF. You can also build 2 fully custom frameworks.' } },
              { '@type': 'Question', name: 'What is the CO-STAR framework?', acceptedAnswer: { '@type': 'Answer', text: 'CO-STAR stands for Context, Objective, Style, Tone, Audience, and Response. It won the Singapore GPT-4 prompt engineering competition and is ideal for business communication and marketing.' } },
              { '@type': 'Question', name: 'What is multi-model consensus and why is it valuable?', acceptedAnswer: { '@type': 'Answer', text: 'Multi-model consensus means sending the same prompt to multiple AI models and finding where they agree. When 5 independent models give the same answer, confidence is far higher than when 1 model answers alone.' } },
              { '@type': 'Question', name: 'How does PromptQuorum detect AI hallucinations?', acceptedAnswer: { '@type': 'Answer', text: 'After collecting responses from multiple models in the Quorum step, your LLM runs Hallucination Detection analysis — flagging claims that appear in only one model\'s response or that contradict factual consensus.' } },
              { '@type': 'Question', name: 'Can I use PromptQuorum with local AI models like Ollama or LM Studio?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PromptQuorum natively connects to Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, KoboldCpp, vLLM, oobabooga, and any OpenAI-compatible endpoint. No API key needed for local models.' } },
              { '@type': 'Question', name: 'Can I use PromptQuorum completely offline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. With a local model like Ollama or LM Studio, PromptQuorum works fully offline. No internet connection required. Your prompts, API keys, and results never leave your device.' } },
              { '@type': 'Question', name: 'What is BYOM (Bring Your Own Model)?', acceptedAnswer: { '@type': 'Answer', text: 'BYOM means PromptQuorum never calls any LLM using its own API keys. Every call goes directly from your browser to your chosen provider. API keys are stored only in your browser\'s localStorage.' } },
              { '@type': 'Question', name: 'How does the Dispatch feature work?', acceptedAnswer: { '@type': 'Answer', text: 'Dispatch sends your optimized prompt to multiple AI services in one click. For auto-dispatch services, PromptQuorum pre-loads your prompt into the URL. All tabs open in parallel — collect all responses in under a minute.' } },
              { '@type': 'Question', name: 'What is the Quorum analysis and what types are available?', acceptedAnswer: { '@type': 'Answer', text: '13 analysis types: Consensus Summary, Weighted Merge, Atomic Facts, Overlap Mapping, Contradiction Detection, Confidence Scoring, Completeness Check, Hallucination Detection, Redundancy Elimination, Best Answer Selection, Multi-Model Ensemble, Controversy Flag, Response Ranking.' } },
              { '@type': 'Question', name: 'Can I export my results?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Quorum results export in 6 formats: .txt, .md, .json, .csv, .html, and .pdf. Multiple formats are bundled into a .zip archive.' } },
              { '@type': 'Question', name: 'How does the Framework Wizard work?', acceptedAnswer: { '@type': 'Answer', text: 'The Framework Wizard asks you questions about your task and recommends the most suitable framework from the 9 built-in options, with a side-by-side comparison of what each would produce.' } },
              { '@type': 'Question', name: 'What is Smart Temperature Adjustment?', acceptedAnswer: { '@type': 'Answer', text: 'Before each optimization, PromptQuorum suggests the ideal LLM temperature: ~0.2 for factual tasks, ~0.7 for balanced, ~0.85 for creative. After 3 consistent choices for the same intent type, it auto-applies your preference.' } },
              { '@type': 'Question', name: 'Does PromptQuorum work with ChatGPT, Claude, and Gemini?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can use ChatGPT (GPT-4, GPT-4o), Anthropic Claude (3, 3.5), and Google Gemini (1.5 Pro, Flash) as your optimization LLM by adding your API key in Settings.' } },
              { '@type': 'Question', name: 'Is there a version history for my prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every optimization step and refinement is saved automatically in version history with a human-readable label. You can select any version to restore it and branch new refinements from there.' } },
              { '@type': 'Question', name: 'What output formats and languages does PromptQuorum support?', acceptedAnswer: { '@type': 'Answer', text: 'LLM output language is configurable: English, German, French, Spanish, Italian, Portuguese, Chinese, and Japanese. Response length is adjustable from 100 to 2000 words.' } },
              { '@type': 'Question', name: 'How does PromptQuorum handle my API keys securely?', acceptedAnswer: { '@type': 'Answer', text: 'API keys are stored only in your browser\'s localStorage. They are never sent to any PromptQuorum server, never logged, and never included in telemetry (there is none).' } },
              { '@type': 'Question', name: 'What is Teaching Mode?', acceptedAnswer: { '@type': 'Answer', text: 'Teaching Mode adds an explanation box below every optimization result that explains exactly why each change was made — which prompt engineering principles were applied and what effect they have.' } },
              { '@type': 'Question', name: 'How do I join the waitlist and what do early users get?', acceptedAnswer: { '@type': 'Answer', text: 'Enter your email in the waitlist form on the homepage. Early access users get priority onboarding, direct access to the developer, and a free power tool!' } },
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.promptquorum.com/faq' },
              ],
            },
          }),
        }}
      />
    </>
  )
}
