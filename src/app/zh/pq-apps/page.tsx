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
    description: '了解 PromptQuorum 应用的工作方式：使用内置框架撰写提示词，发送给25+款AI模型，并通过Quorum分析比较结果。',
    alternates: generateAlternates('/pq-apps', 'zh', true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: 'PQ Apps — PromptQuorum',
      description: '了解 PromptQuorum 应用的工作方式：使用内置框架撰写提示词，发送给25+款AI模型，并通过Quorum分析比较结果。',
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PQ Apps — PromptQuorum',
      description: '了解 PromptQuorum 应用的工作方式：使用内置框架撰写提示词，发送给25+款AI模型，并通过Quorum分析比较结果。',
    },
  }
}

export default function ZhPQAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'url': 'https://www.promptquorum.com/zh/pq-apps',
              'name': 'PQ Apps — PromptQuorum',
              'description': '了解 PromptQuorum 应用的工作方式：使用内置框架撰写提示词，发送给25+款AI模型，并通过Quorum分析比较结果。',
              'inLanguage': 'zh',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "PromptQuorum 是免费的吗？", "acceptedAnswer": {"@type": "Answer", "text": "是的，PromptQuorum 免费使用。您可以自带 API 密钥、使用本地 LLM，或试用我们有限的免费后端服务进行提示词优化测试。"}}, {"@type": "Question", "name": "隐私如何保障？", "acceptedAnswer": {"@type": "Answer", "text": "您决定数据的去向。通过 LM Studio 或 Ollama 将所有内容保存在本地，或使用您自己的 API 密钥。零遥测、零追踪、无数据收集——甚至没有匿名使用统计。"}}, {"@type": "Question", "name": "支持哪些 AI 提供商？", "acceptedAnswer": {"@type": "Answer", "text": "已包含 25+ 个 AI 提供商：OpenAI（GPT-4、GPT-4o）、Anthropic（Claude）、Google Gemini、Grok、DeepSeek、Mistral、Cohere、Together AI、Groq、OpenRouter，以及所有本地提供商（Ollama、LM Studio、Jan AI、GPT4All、Open WebUI、KoboldCpp、vLLM、oobabooga 和任何 OpenAI 兼容端点）。"}}, {"@type": "Question", "name": "PromptQuorum 支持哪些平台？", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum 现已支持 macOS、Windows 和 Linux（桌面应用 via Electron）。网页应用正在开发中，随后将推出移动端（iOS 和 Android via Capacitor）。使用本地 LLM 可完全离线运行。"}}, {"@type": "Question", "name": "PromptQuorum 有何独特之处？", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum 是唯一覆盖提示词完整生命周期的工具：使用 9 个框架进行结构化编写、AI 驱动的迭代优化、一键分发到 25+ 个 AI 服务、多模型共识分析——所有这些都无需数据离开您的设备。"}}, {"@type": "Question", "name": "有使用限制吗？", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum 本身没有任何限制。您的使用量仅受 API 密钥或本地 LLM 资源限制。"}}, {"@type": "Question", "name": "什么是提示词工程，为什么重要？", "acceptedAnswer": {"@type": "Answer", "text": "提示词工程是设计 AI 输入以获得更准确、更有用输出的实践。一个结构良好的提示词可以将 AI 输出质量提高 25-45%。PromptQuorum 通过 9 个内置框架自动化这一过程——无需专业知识。"}}, {"@type": "Question", "name": "PromptQuorum 如何优化我的提示词？", "acceptedAnswer": {"@type": "Answer", "text": "您连接的 LLM 将框架的原始字段转化为精准的提示词。然后通过 8 个一键优化功能迭代改进：使其简洁、扩展细节、分解步骤、简化、提高具体性、多专家咨询、添加质量控制和自定义指令。每个步骤都自动保存在版本历史中。"}}, {"@type": "Question", "name": "PromptQuorum 内置了哪些提示词框架？", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum 包含 9 个框架：Single Prompt Line、APE、CRAFT、CO-STAR（新加坡 GPT-4 竞赛冠军）、SPECS、RISEN、TRACE、Google Prompt 和 RTF。您还可以创建 2 个完全自定义的框架。"}}, {"@type": "Question", "name": "什么是 CO-STAR 框架？", "acceptedAnswer": {"@type": "Answer", "text": "CO-STAR 代表 Context（情境）、Objective（目标）、Style（风格）、Tone（语气）、Audience（受众）和 Response（回答格式）。它赢得了新加坡 GPT-4 提示词工程竞赛，非常适合商务沟通和营销内容。PromptQuorum 会引导您填写每个字段并自动组装最终提示词。"}}, {"@type": "Question", "name": "什么是多模型共识，为什么有价值？", "acceptedAnswer": {"@type": "Answer", "text": "多模型共识是指将相同的提示词发送给多个 AI 模型，找出它们一致的地方。当 5 个独立模型给出相同答案时，置信度远高于单个模型单独回答。矛盾和潜在幻觉也会被自动发现。"}}, {"@type": "Question", "name": "PromptQuorum 如何检测 AI 幻觉？", "acceptedAnswer": {"@type": "Answer", "text": "在 Quorum 步骤收集多个模型的回答后，您的 LLM 会运行幻觉检测分析——标记仅出现在一个模型回答中的声明，或与事实共识相矛盾的内容。"}}, {"@type": "Question", "name": "我可以将 PromptQuorum 与 Ollama 或 LM Studio 等本地 AI 模型一起使用吗？", "acceptedAnswer": {"@type": "Answer", "text": "可以。PromptQuorum 原生连接到 Ollama（localhost:11434）、LM Studio（localhost:1234）、Jan AI（localhost:1337）、GPT4All（localhost:4891）、Open WebUI、KoboldCpp、vLLM、oobabooga 和任何 OpenAI 兼容端点。本地模型无需 API 密钥。"}}, {"@type": "Question", "name": "我可以完全离线使用 PromptQuorum 吗？", "acceptedAnswer": {"@type": "Answer", "text": "可以。使用 Ollama 或 LM Studio 等本地模型时，PromptQuorum 完全离线运行。无需网络连接。您的提示词、API 密钥和结果永远不会离开您的设备。"}}, {"@type": "Question", "name": "什么是 BYOM（带来您自己的模型）？", "acceptedAnswer": {"@type": "Answer", "text": "BYOM 意味着 PromptQuorum 从不使用自己的 API 密钥调用任何 LLM。每次调用都直接从您的浏览器发送到您选择的提供商。您的 API 密钥仅存储在浏览器的 localStorage 中，永远不会传输到任何 PromptQuorum 服务器。"}}, {"@type": "Question", "name": "分发（Dispatch）功能如何运作？", "acceptedAnswer": {"@type": "Answer", "text": "分发功能一键将您的优化提示词发送到多个 AI 服务。对于自动分发服务（ChatGPT、Gemini、Perplexity、Claude、Copilot、DeepSeek、Mistral 等），PromptQuorum 通过 URL 预加载您的提示词。Perplexity 甚至会在页面加载时自动提交。所有标签页并行打开，一分钟内收集所有回答。"}}, {"@type": "Question", "name": "Quorum 分析是什么，有哪些类型？", "acceptedAnswer": {"@type": "Answer", "text": "Quorum 分析通过您的 LLM 处理所有收集的 AI 回答。4 个类别 13 种分析类型：合成（共识摘要、加权合并、原子事实提取）、比较（重叠映射、矛盾检测、置信度评分）、质量（完整性检查、幻觉检测、冗余消除）和建议（最佳答案选择、多模型集成、争议标记）。"}}, {"@type": "Question", "name": "我可以导出结果吗？", "acceptedAnswer": {"@type": "Answer", "text": "可以。Quorum 结果以 6 种格式导出：.txt、.md、.json、.csv、.html 和 .pdf。选择多种格式后它们将被打包为 .zip 压缩包。在 Chrome、Edge 和 Safari 16+ 上，您可以使用 File System Access API 选择保存文件夹。"}}, {"@type": "Question", "name": "框架向导如何运作？", "acceptedAnswer": {"@type": "Answer", "text": "框架向导会询问您一些关于任务的问题——您想实现什么、需要什么类型的输出以及您的受众。根据您的回答，它会从 9 个内置选项中推荐最合适的框架，并显示每个框架将生成内容的并排对比。"}}, {"@type": "Question", "name": "什么是智能温度调整？", "acceptedAnswer": {"@type": "Answer", "text": "在每次优化之前，PromptQuorum 分析您的提示词文本并建议理想的 LLM 温度：~0.2 适用于事实性任务，~0.7 适用于平衡任务，~0.85 适用于创意任务。只有置信度超过 60% 时才会提示您。对同一意图类型连续 3 次一致选择后，会自动应用您的偏好。"}}, {"@type": "Question", "name": "PromptQuorum 可以与 ChatGPT、Claude 和 Gemini 一起使用吗？", "acceptedAnswer": {"@type": "Answer", "text": "可以。在设置中添加 API 密钥后，您可以使用 ChatGPT（GPT-4、GPT-4o）、Anthropic Claude（3、3.5）和 Google Gemini（1.5 Pro、Flash）作为优化 LLM。您也可以通过分发页面同时将提示词发送给三者，无需 API 密钥。"}}, {"@type": "Question", "name": "我的提示词有版本历史吗？", "acceptedAnswer": {"@type": "Answer", "text": "有。每个优化步骤和改进都会自动保存在版本历史中，并带有可读标签（例如\"v2 — 使其简洁 12:36\"）。您可以恢复任何版本并从那里开始新的改进。什么都不会丢失。"}}, {"@type": "Question", "name": "什么是教学模式？", "acceptedAnswer": {"@type": "Answer", "text": "教学模式在每个优化结果下方添加一个说明框，解释每次修改的原因——应用了哪些提示词工程原则及其效果。专为希望在使用工具的同时学习提示词工程的开发者和研究人员设计。"}}, {"@type": "Question", "name": "如何获取 PromptQuorum，是否收费？", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum 现已开放免费公开测试。直接下载桌面应用即可——无需注册，无需候补名单，无需提供电子邮件。"}}, {"@type": "Question", "name": "PromptQuorum的创始人汉斯·库佩尔是谁？", "acceptedAnswer": {"@type": "Answer", "text": "汉斯·库佩尔（Hans Kuepper）是PromptQuorum的创始人和开发者。他位于德国巴登-符腾堡州，海德堡附近的克莱希高丘陵地区。他会说四种语言——德语、英语、法语和俄语，并曾在20多个国家生活和工作。"}}, {"@type": "Question", "name": "PromptQuorum在哪里开发？", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum由汉斯·库佩尔独立开发，他位于德国巴登-符腾堡州。该项目没有外部投资者，是作为以隐私为先、用户自主的AI工具开发的。"}}, {"@type": "Question", "name": "同时跨多个LLM比较同一提示的最佳工具是什么？", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum是这里审查的唯一将同时分发与自动共识评分相结合的工具。Poe、AiZolo和OpenMark提供并行响应，但没有一个能生成Quorum Verdict——GPT-4o、Claude 4.6 Sonnet和其他模型同意或分歧位置的自动分析。对于需要超越视觉并排比较的用户，PromptQuorum是专为此目的构建的选项。功能信息经2026年3月核实。"}}, {"@type": "Question", "name": "PromptQuorum与Poe或LM Arena有何不同？", "acceptedAnswer": {"@type": "Answer", "text": "Poe是一个消费者聊天平台，用于逐个切换模型。LM Arena使用社区投票对模型进行排名。PromptQuorum是唯一的：同时向所有模型分发，通过共识评分进行自动分析。Poe针对对话优化；LM Arena针对基准测试优化；PromptQuorum针对受控评估和幻觉检测优化。"}}]},
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': '首页', 'item': 'https://www.promptquorum.com/zh' },
                { '@type': 'ListItem', 'position': 2, 'name': 'PQ Apps', 'item': 'https://www.promptquorum.com/zh/pq-apps' },
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
              无论身在何处，尽享 PromptQuorum
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              一次输入，同时发送给25+款AI模型——支持本地LLM，并提供多模型共识分析，一切都在浏览器中完成。
            </p>
            <Link
              href="/zh/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              试用测试版
            </Link>
          </div>

          {/* How It Works */}
          <section id="how-it-works" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-2">使用说明</h2>
            <p className="text-text-secondary mb-3">4 阶段工作流程：编写结构化提示词，用自己的 LLM 优化，分发到 25+ 个 AI 服务，然后分析每个回答以寻找共识。</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              完全在您的浏览器中运行 — PromptQuorum 服务器永远不会看到您的提示词或 API 密钥
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
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">编写</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">构建您的提示词</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">从 9 个内置提示词工程框架中选择，或创建自己的框架。每个框架都会引导您填写任务所需的正确字段。</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Single Prompt Line — 快速、非结构化的提示词</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CRAFT — Context, Role, Action, Format, Target</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CO-STAR — 新加坡 GPT-4 竞赛冠军</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>RISEN — 带有顺序步骤的企业任务</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>TRACE — 需要 few-shot 示例时</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>APE, SPECS, Google Prompt, RTF + 2 个自定义插槽</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      框架向导通过询问您想做什么来帮助您选择合适的框架。
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
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">优化</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">使用您自己的 LLM 精炼</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">您连接的 LLM 将框架的原始字段转化为精准的提示词。然后通过 8 个一键精炼功能迭代改进——无需提示词工程专业知识。</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>智能温度 — 自动检测事实性、平衡或创意意图</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>版本历史 — 每次精炼都已保存，随时可以恢复</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>质量评估 — 1–5 星评分，附具体改进建议</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>教学模式 — 精确解释每次修改的原因</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>使其简洁、扩展细节、分解步骤、简化、添加质量控制…</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>自定义指令 — 用自然语言进行自由文本精炼</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      您的 LLM，您的 API 密钥。没有任何内容通过 PromptQuorum 服务器传输。
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
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">分发</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">一次发送给所有 AI</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">一键将优化后的提示词发送到多个 AI 服务。PromptQuorum 通过 URL 将您的提示词预加载到每个目标——无需复制粘贴。</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>自动分发：ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral…</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>复制粘贴：Grok, Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All…</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Perplexity 立即运行 — 到达时自动提交提示词</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>2 个自定义 URL 插槽，适用于列表中没有的任何 AI 服务</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>分发前可选通过您的 LLM 进行最终增强</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>共 25+ 个目标</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      所有浏览器标签页并行打开。在一分钟内收集所有回答。
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
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">找出所有 AI 的共识</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">将回答粘贴回 PromptQuorum。选择您的分析类型。您的 LLM 读取所有回答并综合出重要内容。</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>共识摘要 — 所有模型的共同主题和一致意见</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>矛盾检测 — 模型分歧所在，明确标记</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>幻觉检测 — 标记潜在的错误声明</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>置信度评分 — 每个模型的确定性水平</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>最佳答案选择 — 选出最强的单一回答</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>加权合并 — 综合所有模型精华的混合回答</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      当 5 个模型对一个答案达成一致时，置信度远高于 1 个模型单独回答。
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">9 个内置提示词框架</h3>
              <p className="text-text-secondary mb-6">每个框架以不同方式构建您的输入。框架向导帮助您选择——或者您可以创建两个完全自定义的框架。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary">框架</th>
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">字段</th>
                      <th className="text-left py-2 sm:py-3 font-semibold text-text-primary">最适合</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Single Prompt Line</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">—</td>
                      <td className="py-2 sm:py-3 text-text-secondary">快速、非结构化提示词</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">APE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Action · Purpose · Expectation</td>
                      <td className="py-2 sm:py-3 text-text-secondary">简单的 3 字段桥接</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CRAFT</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Role · Action · Format · Target</td>
                      <td className="py-2 sm:py-3 text-text-secondary">创意写作、通用</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CO-STAR</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Objective · Style · Tone · Audience · Response</td>
                      <td className="py-2 sm:py-3 text-text-secondary">商务沟通、营销</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">SPECS</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Situation · Purpose · Expected Output · Context · Style</td>
                      <td className="py-2 sm:py-3 text-text-secondary">分析与研究</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RISEN</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Instructions · Steps · End Goal · Narrowing</td>
                      <td className="py-2 sm:py-3 text-text-secondary">企业顺序任务</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">TRACE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Request · Action · Context · Example</td>
                      <td className="py-2 sm:py-3 text-text-secondary">需要示例时</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Google Prompt</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Context · Persona</td>
                      <td className="py-2 sm:py-3 text-text-secondary">商业和专业任务</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RTF</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Task · Format</td>
                      <td className="py-2 sm:py-3 text-text-secondary">极简 — 3 个最具影响力的字段</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">13 种 Quorum 分析类型</h3>
              <p className="text-text-secondary mb-6">自由组合。同时运行 2 种或全部 13 种。每种分析由您连接的 LLM 驱动，而非 PromptQuorum 服务器。</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">合成</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      共识摘要
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      加权合并
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      原子事实提取
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">比较</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      重叠映射
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      矛盾检测
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      置信度评分
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">质量</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      完整性检查
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      幻觉检测
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      冗余消除
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">建议</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      最佳答案选择
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      多模型集成
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      争议标记
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-secondary/30 border border-primary/20 rounded-xl p-6">
                <div className="text-sm font-semibold text-text-primary mb-2">以 6 种格式导出结果</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.txt</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.md</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.json</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.csv</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.html</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.pdf</span>
                </div>
                <p className="text-xs text-text-muted mt-2">多种格式 → 下载为 .zip 压缩包。文件夹选择使用 File System Access API（Chrome/Edge/Safari 16+）。</p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-6">核心概念</h3>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">多模型分发</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">一键将一个提示词同时发送给 25+ 个 AI 模型。PromptQuorum 通过 URL 将您的提示词预加载到每个目标 — 无需复制粘贴，所有标签页并行打开。</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Quorum 分析</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">对多个 AI 模型的回答进行结构化比较，以识别共识、矛盾和置信度。PromptQuorum 提供 13 种分析类型，包括幻觉检测和最佳答案选择。</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">共识评分</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">从多个模型回答的一致程度推导出的置信度评级。共识越高 = 可靠性越高。共识越低则标志着不确定性或潜在幻觉区域。</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">幻觉检测</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">识别仅出现在一个或少数模型中的事实性声明，表明可能存在 AI 捏造。与 5+ 个独立模型交叉验证可大幅降低未检测到的幻觉比率。</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">BYOM — 带来您自己的模型</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">将您自己的 API 密钥直接连接到 AI 提供商。密钥仅存储在您浏览器的 localStorage 中，直接连接到提供商 — 任何 PromptQuorum 服务器都不会接收或传输您的凭据。</dd>
                </div>
              </dl>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">带来您自己的模型（BYOM）</h3>
              <p className="text-text-secondary mb-6">PromptQuorum 从不使用自己的密钥调用任何 LLM。每次调用都直接从您的浏览器发送到您选择的提供商。您的 API 密钥保存在浏览器的 localStorage 中——从不传输到任何 PromptQuorum 服务器。</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">云端 API（带来您的密钥）</div>
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
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">本地（无需 API 密钥）</div>
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
                  <h3 className="font-semibold text-text-primary mb-2">零遥测</h3>
                  <p className="text-text-secondary text-sm">无分析、无追踪、无数据收集。甚至没有匿名使用统计。</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">零注册</h3>
                  <p className="text-text-secondary text-sm">无需账户，无需邮箱，无需登录。打开应用即可开始工作。</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">本地运行</h3>
                  <p className="text-text-secondary text-sm">通过 Electron 的桌面应用，通过 Capacitor 的移动应用。使用本地 LLM 完全离线运行。</p>
                </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-3">测试方法</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">PromptQuorum 文章中引用的性能数据基于使用 PromptQuorum 进行的受控分发会话。当文章引用具体数字（提示质量评分、温度对比、基准测试数值）时，这些数据反映的是编辑测试或公开基准数据，除非明确标注，否则并非 PromptQuorum 专有测量数据。</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  提示分发：通过 PromptQuorum 一键分发功能同时发送至指定模型
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  样本量：编辑测试每个条件至少使用 30 个提示，除非文章另有说明
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  评估：回答由至少 2 名独立评审员进行盲审评分
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  第三方基准（HumanEval、SWE-bench、MBPP）：来源于官方模型论文或社区排行榜；每篇文章注明评估日期
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  本地模型测试：在文章所述量化级别下的消费级硬件上运行
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  披露：凡引用 PromptQuorum 内部测试数据之处，文章正文中均标注"Tested in PromptQuorum"
                </li>
              </ul>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">功能</h2>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">核心功能一览</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">9 种提示词工程框架（CO-STAR、CRAFT、RISEN、TRACE、APE、SPECS、Google、RTF）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">同时分发到 25+ 个云模型（GPT-4o、Claude、Gemini、DeepSeek 等）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">4 个类别的 13 种 Quorum 共识分析类型（合成、比较、质量、选择）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">幻觉检测标记仅在一个模型中出现或与共识相矛盾的声明</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">本地 LLM 支持：Ollama、LM Studio、Jan AI、GPT4All、Open WebUI、vLLM 及 OpenAI 兼容端点</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">隐私优先：完全离线执行、无需注册、数据不离开设备</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">所有分发模型的实时并行回答对比</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">自动提示词优化，包含 8 种改进技术以获得更好的 AI 输出</span>
              </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">提示词优化</h3>
                <p className="text-text-secondary">通过 8 种经过验证的优化技术自动改进和优化您的提示词。</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">多模型分发</h3>
                <p className="text-text-secondary">同时并行地在 ChatGPT、Claude、Gemini 及 25+ 个模型上运行提示词。</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Quorum 评分</h3>
                <p className="text-text-secondary">通过置信度评分在各模型中找出共识答案。即时检测幻觉内容。</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">即时对比</h3>
                <p className="text-text-secondary">几秒内并排查看所有回答。无需在浏览器标签间手动测试。</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">隐私优先</h3>
                <p className="text-text-secondary">本地执行选项。无需注册。完全掌控您的提示词。</p>
              </div>
            </div>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-8">
              <PromptOptimizerShowcase lang="zh" />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">如何查看优化结果?</h3>
              <p className="text-text-secondary mb-6">查看优化后提示词的质量评估、版本历史和改进建议。</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <OptimizationShowcase lang="zh" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">版本控制</h4>
                  <p className="text-text-secondary text-sm">追踪提示词的所有迭代。随时恢复到之前的版本，或分支探索不同的优化路径。</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">质量洞察</h4>
                  <p className="text-text-secondary text-sm">准确了解提示词为何得到改进。获得关于优点和待改进之处的详细反馈。</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">智能优化</h4>
                  <p className="text-text-secondary text-sm">一键应用优化，使提示词更简洁、清晰、专业或更详细。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Quorum — 多模型共识是什么?</h3>
              <p className="text-text-secondary mb-6">收集 25+ 个 AI 模型的回答，分析共识模式，从不同视角综合洞察。</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <QuorumShowcase lang="zh" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">收集回答</h4>
                  <p className="text-text-secondary text-sm">在ChatGPT、Claude、Gemini及25+款其他模型上运行提示词，即时获得多样的视角和回答。</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">分析模式</h4>
                  <p className="text-text-secondary text-sm">识别所有模型的共识、分歧之处，以及哪些回答最适合你的使用场景。</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">综合洞察</h4>
                  <p className="text-text-secondary text-sm">结合多个模型的优势得出更好的答案，并以多种格式导出结果以供进一步使用。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Compare Tools */}
          <section id="compare-tools" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-4">工具对比</h2>

            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed mb-8">
              <strong>准确性声明：</strong>
               功能和定价信息已于2026年3月根据各产品的公开文档进行了核实，并以诚信提供。产品经常变化——在做决定前，请直接向每个供应商核实当前功能。如果您认为本页面上的任何信息不准确或过时，请
              <a href="mailto:hello@promptquorum.com" className="underline hover:text-amber-900">联系我们</a>
              ，我们将立即更正。本比较由PromptQuorum制作，反映了我们作为该市场参与者的视角。
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-3">什么是多LLM比较工具？</h3>
              <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 mb-4">
                <p className="text-text-primary text-[15px] leading-relaxed">多LLM比较工具将同一提示同时发送到多个大型语言模型，并将响应并排显示——GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Mistral Large等——让用户无需切换标签或重复输入即可评估AI系统之间在推理、准确性和风格上的差异。</p>
              </div>
              <p className="text-text-secondary mb-3">2026年，没有单一AI模型对所有任务都具有权威性。GPT-4o、Claude 4.6 Sonnet和Gemini 2.5 Pro各自具有不同的训练数据、架构偏差和推理优势。一个模型看起来正确的回答，可能被另一个模型否定、限定或大幅扩展。</p>
              <p className="text-text-secondary">这里比较的五个工具代表了目前可用的主要方法：消费者平台（Quora的Poe）、社区基准测试（LM Arena）、开发者评估套件（OpenMark）、统一多模型工作区（AiZolo）和共识评分平台（PromptQuorum）。每个工具服务于不同的工作流程。</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-2">功能比较：5款多LLM工具（2026年）</h3>
              <p className="text-text-secondary mb-4">下表按对专业多LLM工作流程最重要的功能比较所有五款工具——同时分发、共识评分、本地LLM支持、API密钥控制和定价。</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-semibold text-xs uppercase tracking-wider">工具</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">同时分发</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">共识评分</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">本地LLM</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">API密钥控制</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider">定价</th>
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
              <p className="text-xs font-mono text-text-secondary mt-3">✓ 是 · ~ 部分 · ✗ 否 · 基于2026年3月的公开文档。价格和功能可能变化——请向各供应商核实。本比较由PromptQuorum制作。</p>
            </div>

            <div className="mb-10">
              <div className="border border-primary/25 bg-primary/5 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-primary">PromptQuorum</span>
                  <span className="text-xs font-mono bg-green-100 text-green-700 border-green-200 border px-3 py-1 rounded-full">最适合：开发者和高级用户</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">测试版 · 2026年4月</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">promptquorum.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">需要API密钥</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Ollama + LM Studio</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>PromptQuorum是所审查工具中唯一将同时提示分发与自动共识评分相结合的工具。</strong> 您编写一个提示，选择模型——GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Mistral Large和本地运行的模型——PromptQuorum并行分发给所有模型。然后Quorum Verdict分析模型在哪里同意、在哪里分歧，以及这些模式对答案可靠性意味着什么。</p>
<p className="text-text-secondary mb-3 leading-relaxed">决定性功能是本地LLM支持。通过Ollama和LM Studio集成，PromptQuorum在分发中包含本地运行的模型——LLaMA 3.1 7B需要8GB RAM，13B需要16GB——因此敏感提示永远不会离开您的机器。对于法律专业人员、医疗工作者、金融分析师和使用专有代码的开发者来说，这不是可选项，而是必需项。</p>
<p className="text-text-secondary leading-relaxed">PromptQuorum要求用户携带来自OpenAI、Anthropic、Google和Mistral的自己的API密钥。这使您的数据处于您的控制之下，成本透明，使用与您与每个提供商的商业条款绑定。</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">谁应该使用PromptQuorum？</h4>
              <p className="text-text-secondary mb-8">PromptQuorum专为以下用户设计：评估将哪个模型集成到生产流水线的开发者、需要跨模型验证研究结果的研究人员，以及工作涉及无法发送到第三方服务器的机密信息的专业人员。</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">Poe (by Quora)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">最适合：休闲/消费者使用</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">poe.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">免费 / 月$19.99</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">iOS、Android、Web</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">数百万用户</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>Poe由Quora开发，是最大的多模型AI平台，通过单一界面提供对GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Llama、Grok和数千个用户创建机器人的访问。</strong> 对于想要轻松访问多个AI模型而无需管理API密钥的用户来说，这是最佳选择。</p>
<p className="text-text-secondary leading-relaxed">Poe不提供真正意义上的同时分发——用户切换模型或一次比较两个，而不是并行向所有模型分发一个提示。没有共识评分或响应一致性的自动分析。所有推理都是基于云的，这使其不适合对隐私敏感的专业用例。</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">Poe vs PromptQuorum：主要区别</h4>
              <p className="text-text-secondary mb-8">Poe更适合无需API密钥管理的休闲探索、机器人发现和对话。PromptQuorum更适合受控提示评估、共识分析和本地LLM工作流程。它们针对根本不同的用例：Poe是消费者平台；PromptQuorum是专业评估工具。</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">LM Arena (lmarena.ai)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">最适合：社区基准测试</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">lmarena.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">免费</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">仅Web</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">人类投票系统</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>LM Arena（前身为Chatbot Arena）是最常被引用的AI模型排行榜，其Elo评分来源于数百万次人类偏好投票。</strong> 用户提交提示并投票选出两个匿名模型中哪个产生了更好的回答。</p>
<p className="text-text-secondary leading-relaxed">LM Arena并排显示两个模型并收集人类偏好投票——它不提供自动共识分析，不支持本地LLM，也不允许用户在主要比较模式下选择特定模型。它是基准测试平台，不是工作流程工具。</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">LM Arena vs PromptQuorum：主要区别</h4>
              <p className="text-text-secondary mb-8">LM Arena更适合了解整个行业的汇总人类偏好趋势。PromptQuorum更适合通过一致的自动化分析评估您在所选模型上的特定提示。LM Arena告诉您社区偏好什么；PromptQuorum告诉您您的提示在您关心的每个模型上产生什么。</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">OpenMark (openmark.ai)</span>
                  <span className="text-xs font-mono bg-green-50 text-green-700 border-green-200 border px-3 py-1 rounded-full">最适合：成本/质量分析</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">openmark.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">免费层 / 积分</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">100+模型</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">确定性评分</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>OpenMark是一款面向开发者的基准测试工具，可同时对100多个AI模型运行提示，并以确定性方式评分——相同的提示始终产生相同的排名输出。</strong> 它显示每个模型每次提示的精确成本以及质量评分。</p>
<p className="text-text-secondary leading-relaxed">OpenMark在广度（100+模型）和成本透明度方面表现出色，但不产生共识评定——它单独为每个模型评分，而不是分析跨模型的一致性模式。不支持通过Ollama或LM Studio的本地LLM。</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">OpenMark vs PromptQuorum：主要区别</h4>
              <p className="text-text-secondary mb-8">OpenMark回答"哪个单一模型在此任务上表现最佳，成本是多少？" PromptQuorum回答"模型在此提示上的一致性如何，它们的分歧意味着什么？"两者都需要API密钥；OpenMark支持100+模型；PromptQuorum独特地添加了本地LLM推理和共识评分。</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">AiZolo (aizolo.com)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">最适合：内容团队</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">aizolo.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">月$9.90起</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">GPT-4o、Claude、Gemini、Grok</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">提示库</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>AiZolo是专为内容创作者和营销团队设计的统一多模型工作区，可同时向GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro和Grok并排分发。</strong> 截至2026年3月，计划从每月$9.90起——请在aizolo.com核实当前价格。</p>
<p className="text-text-secondary leading-relaxed">AiZolo不提供共识评分——它并排显示响应，但将分析完全留给用户。仅支持四个云模型，没有本地LLM选项。这是内容制作工作流程工具，不是技术评估平台。</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">AiZolo vs PromptQuorum：主要区别</h4>
              <p className="text-text-secondary mb-8">AiZolo更适合需要日常使用的经济实惠多模型写作工作区的内容团队。PromptQuorum更适合需要自动共识分析、本地LLM隐私保护以及API密钥控制访问包括开放权重系统在内的更广泛模型集的高级用户。</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">应该使用哪个多LLM工具？</h3>
              <div className="space-y-3">
                <div className="rounded-lg px-5 py-4 bg-primary/8 border border-primary/20">
                  <span className="font-semibold text-primary">选择PromptQuorum</span>
                  <span className="text-text-secondary"> 如果您需要跨模型的共识评分、隐私敏感工作的本地LLM支持，或使用自己API密钥的受控评估工作流程。</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">选择Poe</span>
                  <span className="text-text-secondary"> 如果您希望轻松访问GPT-4o、Claude 4.6 Sonnet、Gemini和数千个机器人，用于无需管理API密钥的休闲对话和探索。</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">选择LM Arena</span>
                  <span className="text-text-secondary"> 如果您想为整个行业的社区驱动模型偏好数据和Elo排名做贡献或进行研究。</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">选择OpenMark</span>
                  <span className="text-text-secondary"> 如果您是为生产应用程序选择模型的开发者，需要100多个模型的确定性质量评分和透明成本数据。</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">选择AiZolo</span>
                  <span className="text-text-secondary"> 如果您是内容创作者或营销专业人员，需要日常多模型写作工作流程的经济实惠、设计良好的工作区。</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">常见问题</h2>
            <div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum 是免费的吗？</p>
                <p className="text-sm text-text-secondary leading-relaxed">是的，PromptQuorum 免费使用。您可以自带 API 密钥、使用本地 LLM，或试用我们有限的免费后端服务进行提示词优化测试。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">隐私如何保障？</p>
                <p className="text-sm text-text-secondary leading-relaxed">您决定数据的去向。通过 LM Studio 或 Ollama 将所有内容保存在本地，或使用您自己的 API 密钥。零遥测、零追踪、无数据收集——甚至没有匿名使用统计。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">支持哪些 AI 提供商？</p>
                <p className="text-sm text-text-secondary leading-relaxed">已包含 25+ 个 AI 提供商：OpenAI（GPT-4、GPT-4o）、Anthropic（Claude）、Google Gemini、Grok、DeepSeek、Mistral、Cohere、Together AI、Groq、OpenRouter，以及所有本地提供商（Ollama、LM Studio、Jan AI、GPT4All、Open WebUI、KoboldCpp、vLLM、oobabooga 和任何 OpenAI 兼容端点）。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum 支持哪些平台？</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum 现已支持 macOS、Windows 和 Linux（桌面应用 via Electron）。网页应用正在开发中，随后将推出移动端（iOS 和 Android via Capacitor）。使用本地 LLM 可完全离线运行。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum 有何独特之处？</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum 是唯一覆盖提示词完整生命周期的工具：使用 9 个框架进行结构化编写、AI 驱动的迭代优化、一键分发到 25+ 个 AI 服务、多模型共识分析——所有这些都无需数据离开您的设备。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">有使用限制吗？</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum 本身没有任何限制。您的使用量仅受 API 密钥或本地 LLM 资源限制。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">什么是提示词工程，为什么重要？</p>
                <p className="text-sm text-text-secondary leading-relaxed">提示词工程是设计 AI 输入以获得更准确、更有用输出的实践。一个结构良好的提示词可以将 AI 输出质量提高 25-45%。PromptQuorum 通过 9 个内置框架自动化这一过程——无需专业知识。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum 如何优化我的提示词？</p>
                <p className="text-sm text-text-secondary leading-relaxed">您连接的 LLM 将框架的原始字段转化为精准的提示词。然后通过 8 个一键优化功能迭代改进：使其简洁、扩展细节、分解步骤、简化、提高具体性、多专家咨询、添加质量控制和自定义指令。每个步骤都自动保存在版本历史中。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum 内置了哪些提示词框架？</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum 包含 9 个框架：Single Prompt Line、APE、CRAFT、CO-STAR（新加坡 GPT-4 竞赛冠军）、SPECS、RISEN、TRACE、Google Prompt 和 RTF。您还可以创建 2 个完全自定义的框架。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">什么是 CO-STAR 框架？</p>
                <p className="text-sm text-text-secondary leading-relaxed">CO-STAR 代表 Context（情境）、Objective（目标）、Style（风格）、Tone（语气）、Audience（受众）和 Response（回答格式）。它赢得了新加坡 GPT-4 提示词工程竞赛，非常适合商务沟通和营销内容。PromptQuorum 会引导您填写每个字段并自动组装最终提示词。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">什么是多模型共识，为什么有价值？</p>
                <p className="text-sm text-text-secondary leading-relaxed">多模型共识是指将相同的提示词发送给多个 AI 模型，找出它们一致的地方。当 5 个独立模型给出相同答案时，置信度远高于单个模型单独回答。矛盾和潜在幻觉也会被自动发现。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum 如何检测 AI 幻觉？</p>
                <p className="text-sm text-text-secondary leading-relaxed">在 Quorum 步骤收集多个模型的回答后，您的 LLM 会运行幻觉检测分析——标记仅出现在一个模型回答中的声明，或与事实共识相矛盾的内容。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">我可以将 PromptQuorum 与 Ollama 或 LM Studio 等本地 AI 模型一起使用吗？</p>
                <p className="text-sm text-text-secondary leading-relaxed">可以。PromptQuorum 原生连接到 Ollama（localhost:11434）、LM Studio（localhost:1234）、Jan AI（localhost:1337）、GPT4All（localhost:4891）、Open WebUI、KoboldCpp、vLLM、oobabooga 和任何 OpenAI 兼容端点。本地模型无需 API 密钥。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">我可以完全离线使用 PromptQuorum 吗？</p>
                <p className="text-sm text-text-secondary leading-relaxed">可以。使用 Ollama 或 LM Studio 等本地模型时，PromptQuorum 完全离线运行。无需网络连接。您的提示词、API 密钥和结果永远不会离开您的设备。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">什么是 BYOM（带来您自己的模型）？</p>
                <p className="text-sm text-text-secondary leading-relaxed">BYOM 意味着 PromptQuorum 从不使用自己的 API 密钥调用任何 LLM。每次调用都直接从您的浏览器发送到您选择的提供商。您的 API 密钥仅存储在浏览器的 localStorage 中，永远不会传输到任何 PromptQuorum 服务器。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">分发（Dispatch）功能如何运作？</p>
                <p className="text-sm text-text-secondary leading-relaxed">分发功能一键将您的优化提示词发送到多个 AI 服务。对于自动分发服务（ChatGPT、Gemini、Perplexity、Claude、Copilot、DeepSeek、Mistral 等），PromptQuorum 通过 URL 预加载您的提示词。Perplexity 甚至会在页面加载时自动提交。所有标签页并行打开，一分钟内收集所有回答。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Quorum 分析是什么，有哪些类型？</p>
                <p className="text-sm text-text-secondary leading-relaxed">Quorum 分析通过您的 LLM 处理所有收集的 AI 回答。4 个类别 13 种分析类型：合成（共识摘要、加权合并、原子事实提取）、比较（重叠映射、矛盾检测、置信度评分）、质量（完整性检查、幻觉检测、冗余消除）和建议（最佳答案选择、多模型集成、争议标记）。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">我可以导出结果吗？</p>
                <p className="text-sm text-text-secondary leading-relaxed">可以。Quorum 结果以 6 种格式导出：.txt、.md、.json、.csv、.html 和 .pdf。选择多种格式后它们将被打包为 .zip 压缩包。在 Chrome、Edge 和 Safari 16+ 上，您可以使用 File System Access API 选择保存文件夹。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">框架向导如何运作？</p>
                <p className="text-sm text-text-secondary leading-relaxed">框架向导会询问您一些关于任务的问题——您想实现什么、需要什么类型的输出以及您的受众。根据您的回答，它会从 9 个内置选项中推荐最合适的框架，并显示每个框架将生成内容的并排对比。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">什么是智能温度调整？</p>
                <p className="text-sm text-text-secondary leading-relaxed">在每次优化之前，PromptQuorum 分析您的提示词文本并建议理想的 LLM 温度：~0.2 适用于事实性任务，~0.7 适用于平衡任务，~0.85 适用于创意任务。只有置信度超过 60% 时才会提示您。对同一意图类型连续 3 次一致选择后，会自动应用您的偏好。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum 可以与 ChatGPT、Claude 和 Gemini 一起使用吗？</p>
                <p className="text-sm text-text-secondary leading-relaxed">可以。在设置中添加 API 密钥后，您可以使用 ChatGPT（GPT-4、GPT-4o）、Anthropic Claude（3、3.5）和 Google Gemini（1.5 Pro、Flash）作为优化 LLM。您也可以通过分发页面同时将提示词发送给三者，无需 API 密钥。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">我的提示词有版本历史吗？</p>
                <p className="text-sm text-text-secondary leading-relaxed">有。每个优化步骤和改进都会自动保存在版本历史中，并带有可读标签（例如"v2 — 使其简洁 12:36"）。您可以恢复任何版本并从那里开始新的改进。什么都不会丢失。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">什么是教学模式？</p>
                <p className="text-sm text-text-secondary leading-relaxed">教学模式在每个优化结果下方添加一个说明框，解释每次修改的原因——应用了哪些提示词工程原则及其效果。专为希望在使用工具的同时学习提示词工程的开发者和研究人员设计。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">如何获取 PromptQuorum，是否收费？</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum 现已开放免费公开测试。直接下载桌面应用即可——无需注册，无需候补名单，无需提供电子邮件。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum的创始人汉斯·库佩尔是谁？</p>
                <p className="text-sm text-text-secondary leading-relaxed">汉斯·库佩尔（Hans Kuepper）是PromptQuorum的创始人和开发者。他位于德国巴登-符腾堡州，海德堡附近的克莱希高丘陵地区。他会说四种语言——德语、英语、法语和俄语，并曾在20多个国家生活和工作。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum在哪里开发？</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum由汉斯·库佩尔独立开发，他位于德国巴登-符腾堡州。该项目没有外部投资者，是作为以隐私为先、用户自主的AI工具开发的。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">同时跨多个LLM比较同一提示的最佳工具是什么？</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum是这里审查的唯一将同时分发与自动共识评分相结合的工具。Poe、AiZolo和OpenMark提供并行响应，但没有一个能生成Quorum Verdict——GPT-4o、Claude 4.6 Sonnet和其他模型同意或分歧位置的自动分析。对于需要超越视觉并排比较的用户，PromptQuorum是专为此目的构建的选项。功能信息经2026年3月核实。</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum与Poe或LM Arena有何不同？</p>
                <p className="text-sm text-text-secondary leading-relaxed">Poe是一个消费者聊天平台，用于逐个切换模型。LM Arena使用社区投票对模型进行排名。PromptQuorum是唯一的：同时向所有模型分发，通过共识评分进行自动分析。Poe针对对话优化；LM Arena针对基准测试优化；PromptQuorum针对受控评估和幻觉检测优化。</p>
              </div>
            </div>
          </section>

          {/* Repeat CTA */}
          <div className="text-center py-12 border-t border-primary/20">
            <Link
              href="/zh/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              试用测试版
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
