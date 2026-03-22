import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

const BASE = 'https://www.promptquorum.com'

const POSTS = [
  {
    slug: 'prompt-frameworks',
    title: '8 Prompt Engineering Frameworks Explained: CRAFT vs CO-STAR vs APE (2026 Guide)',
    description: 'When to use each of the 9 built-in frameworks; strengths, ideal use cases, and effectiveness data for CO-STAR, CRAFT, RISEN, APE, SPECS, TRACE, RTF, Google Prompt, and Single Prompt Line.',
    pubDate: 'Sat, 14 Mar 2026 00:00:00 GMT',
  },
  {
    slug: 'local-ai-vs-cloud',
    title: 'Local AI vs Cloud: Privacy-First Prompt Optimization',
    description: 'When to choose local LLMs over cloud providers; privacy implications, latency tradeoffs, and setup guides for Ollama and LM Studio.',
    pubDate: 'Sat, 14 Mar 2026 00:00:00 GMT',
  },
  {
    slug: 'ai-model-comparison',
    title: 'ChatGPT vs Claude vs Gemini: Side-by-Side Model Comparison',
    description: 'Capabilities, strengths, weaknesses, and best use cases for the major cloud AI models; why sending one prompt to all three reveals more than querying any single model.',
    pubDate: 'Sat, 14 Mar 2026 00:00:00 GMT',
  },
  {
    slug: 'quorum',
    title: 'What Is Quorum? Multi-Model Consensus Analysis Explained',
    description: 'How consensus scoring works across parallel model responses; the 13 Quorum analysis types and how they detect hallucinations, contradictions, and low-confidence claims.',
    pubDate: 'Sat, 14 Mar 2026 00:00:00 GMT',
  },
  {
    slug: 'prompt-optimization',
    title: 'How Automatic Prompt Optimization Works',
    description: 'The mechanics of AI-powered iterative refinement; how PromptQuorum\'s 8 one-click refinements improve precision, tone, specificity, and output format.',
    pubDate: 'Sat, 14 Mar 2026 00:00:00 GMT',
  },
  {
    slug: 'enterprise-data-privacy',
    title: 'Enterprise Data Privacy with Local LLMs',
    description: 'How enterprises use local LLMs for zero-transmission inference; compliance considerations and offline deployment patterns.',
    pubDate: 'Sun, 15 Mar 2026 00:00:00 GMT',
  },
  {
    slug: 'research-prompt-optimization-impact',
    title: 'Research: Impact of Prompt Engineering on AI Output Quality (2024–2026)',
    description: 'Structured analysis of how prompt engineering affects AI output quality; effectiveness data across frameworks, refinement techniques, and model families.',
    pubDate: 'Sun, 15 Mar 2026 00:00:00 GMT',
  },
  {
    slug: 'ai-consensus-scoring',
    title: 'AI Consensus Scoring: How to Detect Hallucinations Across Multiple Models',
    description: 'How consensus scoring works when multiple AI models answer the same question; a practical guide to detecting hallucinations, contradictions, and low-confidence claims by comparing parallel model responses.',
    pubDate: 'Mon, 16 Mar 2026 00:00:00 GMT',
  },
  {
    slug: 'promptquorum-vs-askquorum',
    title: 'PromptQuorum vs AskQuorum AI — What\'s the Difference?',
    description: 'Two tools, similar names, very different products. A factual breakdown of origins, target users, local LLM support, GDPR compliance, pricing, and BYOK approach.',
    pubDate: 'Mon, 17 Mar 2026 00:00:00 GMT',
  },
  {
    slug: 'what-is-ai-consensus-scoring',
    title: 'What Is AI Consensus Scoring? How PromptQuorum Detects Agreement Across Models',
    description: 'Consensus scoring analyses responses from multiple AI models and measures where they agree, where they diverge, and what that pattern tells you about the reliability of an answer.',
    pubDate: 'Mon, 17 Mar 2026 00:00:00 GMT',
  },
  {
    slug: 'ai-hallucinations-why-ai-makes-things-up',
    title: 'AI Hallucinations: Why AI Makes Things Up',
    description: 'Large language models confidently produce false information. Understanding why hallucinations happen and how to detect and reduce them is essential for anyone using LLMs in real work.',
    pubDate: 'Mon, 22 Mar 2026 00:00:00 GMT',
  },
]

export function GET() {
  const items = POSTS.map(({ slug, title, description, pubDate }) => `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${BASE}/blog/${slug}</link>
      <guid isPermaLink="true">${BASE}/blog/${slug}</guid>
      <description><![CDATA[${description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>promptquorum@gmail.com (Hans Kuepper)</author>
    </item>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>PromptQuorum Blog</title>
    <link>${BASE}/blog</link>
    <description>Practical guides on prompt engineering, multi-model AI comparison, consensus scoring, and privacy-first AI workflows.</description>
    <language>en</language>
    <managingEditor>promptquorum@gmail.com (Hans Kuepper)</managingEditor>
    <webMaster>promptquorum@gmail.com (Hans Kuepper)</webMaster>
    <lastBuildDate>Mon, 17 Mar 2026 00:00:00 GMT</lastBuildDate>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE}/og-image.png</url>
      <title>PromptQuorum Blog</title>
      <link>${BASE}/blog</link>
    </image>
    ${items}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
