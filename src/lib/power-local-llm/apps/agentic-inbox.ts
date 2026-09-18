// Local AI App Directory — Agentic Inbox (layer: agent / email)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: this is github.com/cloudflare/agentic-inbox (the original,
// highest-star repo of this name, confirmed non-fork) — not one of several
// smaller same-named clones/forks by other accounts — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'agentic-inbox',
  name: 'Agentic Inbox',
  categories: ['personal-assistants', 'autonomous-agents'],
  interfaces: ['web'],
  locality: 'hybrid', // self-hosted on the user's own Cloudflare account (Workers/Durable Objects/R2), not a fixed third-party server — verified 2026-09-18
  platforms: ['web'],
  worksWith: ['Cloudflare Workers AI', 'MCP'],
  engine: 'external',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // runs entirely on Cloudflare Workers/Durable Objects, no local inference hardware involved, verified 2026-09-18
  stars: 7787, // github.com/cloudflare/agentic-inbox, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['agent'],
  url: 'github.com/cloudflare/agentic-inbox',
  tagline: {
    en: 'Self-hosted email client that runs entirely on your own Cloudflare account with an AI agent that reads, searches, and drafts replies',
    de: 'Selbst gehosteter E-Mail-Client, der vollständig im eigenen Cloudflare-Konto läuft, mit einem KI-Agenten, der liest, sucht und Antworten entwirft',
    fr: "Client de messagerie auto-hébergé fonctionnant entièrement sur votre propre compte Cloudflare, avec un agent IA qui lit, recherche et rédige des réponses",
    ja: '自分のCloudflareアカウント上で完結するセルフホスト型メールクライアント。AIエージェントがメールを読み、検索し、返信案を作成',
    zh: '完全运行在你自己Cloudflare账户上的自托管邮件客户端，AI智能体可阅读、搜索并起草回复',
    es: 'Cliente de correo autoalojado que se ejecuta enteramente en tu propia cuenta de Cloudflare, con un agente de IA que lee, busca y redacta respuestas',
    pt: 'Cliente de e-mail auto-hospedado que roda inteiramente na sua própria conta Cloudflare, com um agente de IA que lê, pesquisa e redige respostas',
    ar: 'عميل بريد إلكتروني مستضاف ذاتيًا يعمل بالكامل على حسابك الخاص في Cloudflare، مع وكيل ذكاء اصطناعي يقرأ الرسائل ويبحث فيها ويصيغ الردود',
    ko: '자신의 Cloudflare 계정에서 전적으로 실행되는 셀프호스팅 이메일 클라이언트로, AI 에이전트가 메일을 읽고 검색하며 답장 초안을 작성',
  },
  mcpSupport: true, // README documents an MCP server at /mcp for external AI tools to operate on a mailbox — verified 2026-09-18
  lastVerifiedDate: '2026-09-18',
}
