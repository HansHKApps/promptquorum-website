import { LandingPageServer } from '@/components/LandingPageServer'

export default function Home() {
  return (
    <>
      <LandingPageServer />

      {/* HowTo Schema — 4-stage PromptQuorum workflow */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            'name': 'How to Optimize Prompts and Compare AI Models with PromptQuorum',
            'description': 'Four stages to turn any idea into a precision prompt and compare responses across 25+ AI models.',
            'totalTime': 'PT5M',
            'step': [
              {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'Write a Structured Prompt',
                'text': 'Choose one of 9 prompt engineering frameworks (CO-STAR, CRAFT, RISEN, APE, SPECS, TRACE, RTF, Google Prompt, Single Prompt Line) and fill in the structured fields. The Framework Wizard recommends the best option for your task.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Optimize with Your LLM',
                'text': 'Your connected LLM (ChatGPT, Claude, Gemini, or a local model like Ollama) transforms the framework fields into a precision prompt. Refine iteratively with 8 one-click refinements. Every version is saved in history.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Dispatch to 25+ AI Services',
                'text': 'Send your optimized prompt to ChatGPT, Claude, Gemini, Grok, Mistral, Llama and 25+ other providers in one click. Tabs open in parallel — collect all responses in under a minute.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'Quorum Analysis',
                'text': 'Paste all AI responses into the Quorum tab. Choose from 13 analysis types: Consensus Summary, Hallucination Detection, Contradiction Detection, Best Answer Selection, and more. Export results in TXT, MD, JSON, CSV, HTML, or PDF.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
            ],
          }),
        }}
      />
    </>
  )
}
