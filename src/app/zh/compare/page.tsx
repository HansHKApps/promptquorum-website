import type { Metadata } from 'next'
import { translations } from '@/translations'
import { ComparePageClient } from '@/components/ComparePageClient'
import { generateAlternates } from '@/lib/hreflang'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'zh'
  const t = translations[lang]

  return {
    title: t.compareMetaTitle,
    description: t.compareMetaDescription,
    alternates: generateAlternates('/compare', lang, true, undefined, ['zh']),
    openGraph: {
      title: t.compareMetaTitle,
      description: t.compareMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.compareMetaTitle,
      description: t.compareMetaDescription,
    },
  }
}

export default async function ZhComparePage() {
  return (
    <>
      <ComparePageClient initialLang="zh" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.promptquorum.com/zh/compare',
                'url': 'https://www.promptquorum.com/zh/compare',
                'name': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo — Multi-LLM Tools Compared (2026)',
                'description': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo: compare simultaneous dispatch, consensus scoring, local LLM support, and API key control in 2026.',
                'inLanguage': 'zh',
                'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  { '@type': 'ListItem', 'position': 1, 'name': '主页', 'item': 'https://www.promptquorum.com/zh' },
                  { '@type': 'ListItem', 'position': 2, 'name': '比较', 'item': 'https://www.promptquorum.com/zh/compare' },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': '同时将相同的提示词发送给多个 LLM 进行比较的最佳工具是什么？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'PromptQuorum 是唯一将同时提示词分发与自动共识评分相结合的工具 — 您不仅可以并排查看响应，还可以获得一个关于模型在何处达成一致以及在何处产生分歧的评估。Poe 和 AiZolo 提供多模型访问，但不进行共识评分。LM Arena 使用人工投票而不是自动分析。OpenMark 对单个提示词进行评分，但不会针对多个模型生成共识评测。功能信息基于 2026 年 3 月的公开文档。',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': '哪个多 LLM 工具支持 Ollama 和 LM Studio 等本地 LLM？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'PromptQuorum 是本页面介绍的工具中唯一支持通过 Ollama 和 LM Studio 进行本地 LLM 推理的工具，这意味着您的敏感提示词永远不会离开您的计算机。根据其 2026 年 3 月的公开文档，Poe、LM Arena、OpenMark 和 AiZolo 都是仅限云的服务。在做出决定前，请直接向供应商确认每个工具的当前功能。',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': '多 LLM 工具中的共识评分是什么？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': '共识评分是对多个 AI 模型在给定提示词上的一致程度的自动分析。PromptQuorum 的 Quorum Verdict 评分了所有已分发模型的一致程度，找出其中的分歧，并解释这种分歧可能意味着什么。高共识评分表示答案在模型架构中是可靠的。低共识评分标志着不确定性，值得进一步调查。',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'PromptQuorum 与 Poe 有何不同？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': '由 Quora 所有的 Poe 是一个专注于访问和对话的多模型聊天平台。PromptQuorum 是专注于提示词评估和共识评分的多 LLM 分发和分析工具。Poe 允许您在模型之间切换或一次比较两个。PromptQuorum 同时向所有选定的模型分发，并自动分析它们在何处达成一致 — 这是一个根本上不同的工作流程，专为高级用户和开发人员而非临时聊天用户设计。',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': '使用 PromptQuorum 需要我自己的 API 密钥吗？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': '是的。PromptQuorum 专为那些从 OpenAI、Anthropic、Google、Mistral 和其他提供商那里带来自己的 API 密钥的用户而设计。这样可以让您的数据保持在自己的控制之下，您的使用遵循您的商业条款，您的成本保持透明。它还通过 Ollama 和 LM Studio 启用了本地 LLM 支持，供那些更喜欢完全私有推理的用户使用。',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
