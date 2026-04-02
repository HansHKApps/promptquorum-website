export interface PESubSection {
  title: string
  articleKeys: string[]
}

export interface PETheme {
  id: string
  title: string
  description: string
  articleKeys?: string[]
  subSections?: PESubSection[]
}

export const themes: PETheme[] = [
  {
    id: 'fundamentals',
    title: 'Fundamentals',
    description: 'Core concepts every prompt engineer needs to understand — how LLMs work, what tokens are, and why prompt structure determines output quality.',
    articleKeys: [
      'what-is-prompt-engineering',
      'fundamentals-of-prompt-optimization',
      'how-prompt-engineering-evolved',
      '5-building-blocks-every-prompt-needs',
      'ai-hallucinations-why-ai-makes-things-up',
      'faster-ai-answers-how-to-prompt-for-speed',
      'temperature-and-top-p-control-ai-creativity',
      'context-windows-explained-why-ai-forgets',
      'beyond-text-how-to-prompt-with-images',
      'tokens-costs-limits-economics-of-ai-prompting',
      'system-prompt-vs-user-prompt-whats-the-difference',
      'gpt-claude-or-gemini-how-to-pick-the-right-model',
      'how-llms-actually-work',
      'ai-limitations-what-llms-cant-do',
      'open-source-vs-proprietary-llms',
      'prompt-engineering-glossary',
    ],
  },
  {
    id: 'prompt-optimization',
    title: 'Fundamentals of Prompt Optimization',
    description: '',
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    description: 'Structured templates for building reliable, repeatable prompts across different tasks — marketing, coding, research, and more.',
    articleKeys: [
      'which-prompt-framework-should-you-use',
      'the-single-step-prompt-method',
      'ape-framework',
      'craft-framework',
      'co-star-framework',
      'specs-framework',
      'risen-framework',
      'trace-framework',
      'googles-prompting-guide',
      'rtf-framework',
      'build-your-own-prompt-framework',
    ],
  },
  {
    id: 'techniques',
    title: 'Techniques',
    description: 'Proven prompting techniques that improve accuracy, reduce errors, and produce more useful AI outputs for any task.',
    articleKeys: [
      'prompt-injection-and-security',
      'zero-shot-vs-few-shot',
      'constrained-prompting',
      'chain-of-thought-prompting',
      'persona-prompting',
      'prompt-chaining',
      'negative-prompting',
      'self-consistency-prompting',
      'tree-of-thought-and-react',
      'rag-explained',
      'structured-output-and-json-mode',
    ],
  },
  {
    id: 'use-topics',
    title: 'Use Topics',
    description: 'Practical prompt engineering guides for specific domains and output types.',
    subSections: [
      {
        title: 'Use Cases by Vertical',
        articleKeys: [
          'write-better-code-with-ai',
          'ai-powered-research',
          'seo-meets-ai',
          'teaching-with-ai',
          'extract-and-summarise',
          'ai-code-review',
          'prompting-across-languages',
        ],
      },
      {
        title: 'Output Engineering',
        articleKeys: [
          'control-the-output',
          'build-quality-checks',
          'your-brand-voice-ai',
          'build-a-prompt-library',
        ],
      },
    ],
  },
  {
    id: 'policy',
    title: 'Policy & Compliance',
    description: 'How AI regulation, data residency law, and geopolitical competition affect organizations deploying AI.',
    articleKeys: [
      'geopolitics-and-ai',
    ],
  },
]
