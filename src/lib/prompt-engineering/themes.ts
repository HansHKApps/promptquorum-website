export interface PETheme {
  id: string
  title: string
  description: string
  articleKeys: string[]
}

export const themes: PETheme[] = [
  {
    id: 'fundamentals',
    title: 'Fundamentals',
    description: 'Core concepts every prompt engineer needs to understand — how LLMs work, what tokens are, and why prompt structure determines output quality.',
    articleKeys: [
      'prompt-engineering-history',
      'prompt-building-blocks',
      'ai-hallucinations-how-to-stop',
      'prompt-for-speed',
      'temperature-and-top-p',
      'context-windows-explained',
      'prompt-with-images',
      'tokens-costs-limits',
      'system-prompt-vs-user-prompt',
      'gpt-claude-gemini-which-model',
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    description: 'Structured templates for building reliable, repeatable prompts across different tasks — marketing, coding, research, and more.',
    articleKeys: [
      'which-framework-to-use',
      'single-prompt-method',
      'ape-framework',
      'craft-framework',
      'co-star-framework',
      'specs-framework',
      'risen-framework',
      'trace-framework',
      'google-prompting-guide',
      'rtf-framework',
      'build-your-own-framework',
    ],
  },
  {
    id: 'techniques',
    title: 'Techniques',
    description: 'Proven prompting techniques that improve accuracy, reduce errors, and produce more useful AI outputs for any task.',
    articleKeys: [
      'zero-shot-vs-few-shot',
      'constrained-prompting',
      'chain-of-thought-prompting',
      'persona-prompting',
      'prompt-chaining',
      'negative-prompting',
      'self-consistency-prompting',
      'tree-of-thought-react',
      'rag-explained',
      'structured-output-json-mode',
    ],
  },
  {
    id: 'use-topics',
    title: 'Use Topics',
    description: 'Practical prompt engineering guides for specific domains — writing, coding, research, data analysis, customer support, and more.',
    articleKeys: [
      'prompts-for-writing',
      'prompts-for-coding',
      'prompts-for-research',
      'prompts-for-data-analysis',
      'prompts-for-customer-support',
      'prompts-for-marketing',
      'prompts-for-education',
      'prompts-for-legal',
      'prompts-for-finance',
      'prompts-for-healthcare',
    ],
  },
]
