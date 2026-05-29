import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FAQPageClient } from '@/components/FAQPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'zh'
  const t = translations[lang]

  return {
    title: t.faqMetaTitle,
    description: t.faqMetaDescription,
    alternates: generateAlternates('/faq', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.faqMetaTitle,
      description: t.faqMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.faqMetaTitle,
      description: t.faqMetaDescription,
    },
  }
}

export default async function ZhFAQPage() {
  return (
    <>
      <FAQPageClient initialLang="zh" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: 'zh',
            mainEntity: [
              { '@type': 'Question', name: 'PromptQuorum 是免费的吗？', acceptedAnswer: { '@type': 'Answer', text: '是的，PromptQuorum 免费使用。您可以自带 API 密钥、使用本地 LLM，或试用我们有限的免费后端服务进行提示词优化测试。' } },
              { '@type': 'Question', name: '隐私如何保障？', acceptedAnswer: { '@type': 'Answer', text: '您决定数据的去向。通过 LM Studio 或 Ollama 将所有内容保存在本地，或使用您自己的 API 密钥。零遥测、零追踪、无数据收集——甚至没有匿名使用统计。' } },
              { '@type': 'Question', name: '支持哪些 AI 提供商？', acceptedAnswer: { '@type': 'Answer', text: '已包含 25+ 个 AI 提供商：OpenAI（GPT-4、GPT-4o）、Anthropic（Claude）、Google Gemini、Grok、DeepSeek、Mistral、Cohere、Together AI、Groq、OpenRouter，以及所有本地提供商（Ollama、LM Studio、Jan AI、GPT4All、Open WebUI、KoboldCpp、vLLM、oobabooga 和任何 OpenAI 兼容端点）。' } },
              { '@type': 'Question', name: 'PromptQuorum 支持哪些平台？', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum 从桌面应用（Mac、Windows via Electron）开始，随后推出网页应用，最终推出移动端（iOS 和 Android via Capacitor）。使用本地 LLM 可完全离线运行。' } },
              { '@type': 'Question', name: 'PromptQuorum 有何独特之处？', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum 是唯一覆盖提示词完整生命周期的工具：使用 9 个框架进行结构化编写、AI 驱动的迭代优化、一键分发到 25+ 个 AI 服务、多模型共识分析——所有这些都无需数据离开您的设备。' } },
              { '@type': 'Question', name: '有使用限制吗？', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum 本身没有任何限制。您的使用量仅受 API 密钥或本地 LLM 资源限制。' } },
              { '@type': 'Question', name: '什么是提示词工程，为什么重要？', acceptedAnswer: { '@type': 'Answer', text: '提示词工程是设计 AI 输入以获得更准确、更有用输出的实践。一个结构良好的提示词可以将 AI 输出质量提高 25-45%。PromptQuorum 通过 9 个内置框架自动化这一过程——无需专业知识。' } },
              { '@type': 'Question', name: 'PromptQuorum 如何优化我的提示词？', acceptedAnswer: { '@type': 'Answer', text: '您连接的 LLM 将框架的原始字段转化为精准的提示词。然后通过 8 个一键优化功能迭代改进：使其简洁、扩展细节、分解步骤、简化、提高具体性、多专家咨询、添加质量控制和自定义指令。每个步骤都自动保存在版本历史中。' } },
              { '@type': 'Question', name: 'PromptQuorum 内置了哪些提示词框架？', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum 包含 9 个框架：Single Prompt Line、APE、CRAFT、CO-STAR（新加坡 GPT-4 竞赛冠军）、SPECS、RISEN、TRACE、Google Prompt 和 RTF。您还可以创建 2 个完全自定义的框架。' } },
              { '@type': 'Question', name: '什么是 CO-STAR 框架？', acceptedAnswer: { '@type': 'Answer', text: 'CO-STAR 代表 Context（情境）、Objective（目标）、Style（风格）、Tone（语气）、Audience（受众）和 Response（回答格式）。它赢得了新加坡 GPT-4 提示词工程竞赛，非常适合商务沟通和营销内容。PromptQuorum 会引导您填写每个字段并自动组装最终提示词。' } },
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: '主页', item: 'https://www.promptquorum.com/zh' },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.promptquorum.com/zh/faq' },
              ],
            },
          }),
        }}
      />
    </>
  )
}
