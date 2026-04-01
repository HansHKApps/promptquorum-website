import type { Metadata } from 'next'
import { ComparePageClient } from '@/components/ComparePageClient'
import { generateAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo — Multi-LLM Tools Compared (2026)',
  description: 'Compare the best multi-LLM tools in 2026: PromptQuorum, Poe, LM Arena, OpenMark, and AiZolo. See which tools offer simultaneous dispatch, consensus scoring, local LLM support, and API key control.',
  alternates: generateAlternates('/compare'),
  openGraph: {
    title: 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo — Multi-LLM Tools Compared',
    description: 'The definitive 2026 comparison of multi-LLM tools. Simultaneous dispatch, consensus scoring, local LLM support, and pricing — all in one table.',
    url: 'https://www.promptquorum.com/compare',
    type: 'article',
  },
}

export default function ComparePage() {
  return (
    <>
      <ComparePageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com' },
                  { '@type': 'ListItem', 'position': 2, 'name': 'Compare', 'item': 'https://www.promptquorum.com/compare' },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': 'What is the best tool to compare the same prompt across multiple LLMs simultaneously?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Among the tools reviewed here, PromptQuorum is the only one that combines simultaneous prompt dispatch with automated consensus scoring — giving you not just the responses side by side, but a verdict on where the models agree and diverge. Poe and AiZolo offer multi-model access but do not score consensus. LM Arena uses human voting rather than automated analysis. OpenMark scores individual prompts but does not produce a consensus verdict across models. Feature information based on public documentation, March 2026.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Which multi-LLM tool supports local LLMs like Ollama and LM Studio?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Among the tools reviewed on this page, PromptQuorum is the only one that supports local LLM inference via Ollama and LM Studio, meaning sensitive prompts never leave your machine. Poe, LM Arena, OpenMark, and AiZolo operate as cloud-only services based on their public documentation as of March 2026. Verify each tool\'s current capabilities directly with the vendor before making a decision.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'What is consensus scoring in a multi-LLM tool?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': "Consensus scoring is an automated analysis of how much multiple AI models agree on a given prompt. PromptQuorum's Quorum Verdict scores agreement across all dispatched models, identifies where they diverge, and explains what that divergence likely means. A high consensus score indicates the answer is reliable across model architectures. A low consensus score flags uncertainty and warrants further investigation.",
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'How is PromptQuorum different from Poe?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Poe, owned by Quora, is a multi-model chat platform focused on access and conversation. PromptQuorum is a multi-LLM dispatch and analysis tool focused on prompt evaluation and consensus scoring. Poe lets you switch between models or compare two at a time. PromptQuorum dispatches to all selected models simultaneously and automatically analyses where they agree — a fundamentally different workflow designed for power users and developers rather than casual chat.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Do I need my own API keys to use PromptQuorum?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Yes. PromptQuorum is designed for users who bring their own API keys from OpenAI, Anthropic, Google, Mistral, and other providers. This keeps your data under your control, your usage under your commercial terms, and your costs transparent. It also enables local LLM support via Ollama and LM Studio for users who prefer fully private inference.',
                    },
                  },
                ],
              },
              {
                '@type': 'SoftwareApplication',
                'name': 'PromptQuorum',
                'url': 'https://www.promptquorum.com',
                'applicationCategory': 'AIApplication',
                'description': 'Multi-AI dispatch and consensus analysis tool. Send one prompt to GPT, Claude, Gemini, Mistral, Llama, and more simultaneously. Compare responses and get a consensus verdict.',
                'operatingSystem': 'Web, macOS, Windows',
                'offers': {
                  '@type': 'Offer',
                  'price': '0',
                  'priceCurrency': 'USD',
                  'description': 'Beta — free early access',
                },
                'featureList': [
                  'Simultaneous multi-model dispatch',
                  'Consensus scoring — Quorum Verdict',
                  'Local LLM support via Ollama and LM Studio',
                  'API key control — bring your own keys',
                  'Side-by-side response comparison',
                  'Hallucination detection',
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
