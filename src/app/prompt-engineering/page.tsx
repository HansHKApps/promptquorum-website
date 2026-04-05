import type { Metadata } from 'next'
import { translations } from '@/translations'
import { PromptEngineeringHub } from '@/components/PromptEngineeringHub'
import { generateAlternates } from '@/lib/hreflang'

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: t.promptEngineeringHubTitle,
    description: t.promptEngineeringHubDescription,
    alternates: generateAlternates('/prompt-engineering'),
    openGraph: {
      title: t.promptEngineeringHubTitle,
      description: t.promptEngineeringHubDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.promptEngineeringHubTitle,
      description: t.promptEngineeringHubDescription,
    },
  }
}

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function PromptEngineeringPage({ searchParams }: PageProps) {
  // Extract language from searchParams
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

  const jsonLdSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Prompt Engineering Guide',
      'url': 'https://www.promptquorum.com/prompt-engineering',
      'description': 'Complete prompt engineering resource covering fundamentals, frameworks, techniques, and domain-specific guides.',
      'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Prompt Engineering', 'item': 'https://www.promptquorum.com/prompt-engineering' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is prompt engineering?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Prompt engineering is the practice of structuring requests to AI models to get better, more consistent outputs. It involves using frameworks, formatting, examples, and constraints to guide model behavior.' }
        },
        {
          '@type': 'Question',
          'name': 'What are prompt frameworks?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Prompt frameworks (like CRAFT, CO-STAR, APE) are structured templates that guide you through building better prompts. They break down requests into specific components—context, role, examples—to improve consistency and quality.' }
        },
        {
          '@type': 'Question',
          'name': 'How does temperature affect AI output?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Temperature controls randomness in AI responses. Lower values (0.0–0.5) produce deterministic, factual outputs. Higher values (0.7–1.0) produce creative, varied responses. Use lower temperatures for structured tasks, higher for creative tasks.' }
        },
        {
          '@type': 'Question',
          'name': 'What is chain-of-thought prompting?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Chain-of-thought prompting asks AI models to explain their reasoning step-by-step before answering. This technique significantly improves accuracy on complex, multi-step problems like math and logic puzzles.' }
        },
        {
          '@type': 'Question',
          'name': 'How do I choose between zero-shot and few-shot prompting?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Zero-shot works for general tasks without examples. Few-shot (providing 2–5 examples) works better for specific formats, domains, or specialized tasks. Test both to see which gives better results for your use case.' }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Optimize Your Prompts for Better AI Results',
      'step': [
        { '@type': 'HowToStep', 'name': 'Define your task clearly', 'text': 'Write a specific, unambiguous description of what you want the AI to do.' },
        { '@type': 'HowToStep', 'name': 'Choose a framework', 'text': 'Select a prompt framework (CRAFT for creative, CO-STAR for complex, SPECS for structured) based on your output needs.' },
        { '@type': 'HowToStep', 'name': 'Add context and examples', 'text': 'Provide background information and 2–5 examples of desired input-output pairs.' },
        { '@type': 'HowToStep', 'name': 'Set constraints', 'text': 'Specify format, length, tone, and other rules to guide the model.' },
        { '@type': 'HowToStep', 'name': 'Test across models', 'text': 'Run your prompt on GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro to compare quality and speed.' },
        { '@type': 'HowToStep', 'name': 'Refine and iterate', 'text': 'Review outputs, adjust the prompt based on results, and test again until satisfied.' }
      ]
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdSchemas),
        }}
      />
      <PromptEngineeringHub initialLang={selectedLang as any} />
    </>
  )
}
