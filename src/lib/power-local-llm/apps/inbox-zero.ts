// Local AI App Directory — Inbox Zero by Inbox Zero Inc. (layer: AI email assistant + email client for Gmail and Outlook)
// Added 2026-11-18 from the research package (localhosted rank 23; not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-18: maker website and pricing page, privacy policy (last updated May 4, 2026) and terms, GitHub repository, README and LICENSE,
// self-hosting docs (quick-start, llm-setup), GitHub Releases (latest desktop-v0.1.28), App Store listing (iTunes lookup) and the /app, /ios, /android redirects.
// Notes:
// - License: LICENSE is GNU AGPL v3.0 plus "Additional Terms for Inbox Zero" (commercial monetization restriction; organizations with 5+ business users need an
//   enterprise license from Inbox Zero Inc.; personal, educational, research and <5-user use exempt). GitHub API reports NOASSERTION. The localhosted row says MIT, which is not used.
// - Stars: GitHub API 13061 on 2026-11-18 (the package carried 13034).
// - engine = 'external': the app calls LLM providers chosen by the operator (hosted service: maker-chosen; self-hosted: provider env vars incl. Ollama per docs/hosting/llm-setup).
// - hardware: no local inference hardware is required by the app itself; null/null/null with variesByModel (self-hosted Ollama is the operator's choice).
// - HQ country US: the privacy policy (last updated May 4, 2026) gives "Inbox Zero Inc., 131 Continental Dr, Suite 305, Newark, Delaware, 19713, United States";
//   the terms name New York governing law. The App Store seller is Inbox Zero Inc. The founder's GitHub profile says Tel Aviv, Israel, but that is a person, not the company address.
// - Version: pqReview.version is the release GitHub marks as latest (Inbox Zero Desktop 0.1.28, 2026-11-17). The web assistant itself has no user-facing version;
//   the newest formal Docker tag is v2.30.0 (2026-05-18). The iPhone app is 2.0.7 on the App Store (updated 2026-11-16).
// - Compare (personal assistants segment): localLlm true (Ollama listed as a provider in the self-hosting docs); toolUse true (README: rules that label, archive, draft and unsubscribe).
//   voice and memory not stated: left unset.
// Last upstream update: 2026-11-18 (GitHub pushed_at; latest release 2026-11-17) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'inbox-zero',
  name: 'Inbox Zero',
  categories: ['writing-email', 'personal-assistants'],
  interfaces: ['web', 'desktop', 'mobile'],
  locality: 'hybrid', // hosted service (cloud) or self-hosted on your own server; email text goes to the configured AI provider either way unless you point it at Ollama (docs)
  platforms: ['web', 'mac', 'win', 'ios', 'android', 'selfhosted'],
  worksWith: ['Gmail', 'Outlook', 'Slack', 'Telegram', 'Ollama'],
  engine: 'external', // LLM provider is configured per deployment (OpenAI, Anthropic, Google, Ollama and others per the self-hosting docs)
  license: 'AGPL-3.0 (with additional terms)', // LICENSE: AGPL v3 plus Inbox Zero additional terms; not plain OSI open source
  price: 'freemium', // 7-day free trial on every plan (card required per the maker's support FAQ); Starter $20/user/month billed annually; self-hosting free within the license terms
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // hosted service needs no local hardware; self-hosting needs Docker + Node.js 24+
  stars: 13061,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['agent', 'docs'],
  url: 'getinboxzero.com',
  storeLinks: {
    github: 'https://github.com/elie222/inbox-zero',
    web: 'https://www.getinboxzero.com',
    appStore: 'https://apps.apple.com/app/inbox-zero-ai-email/id6759736561',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.getinboxzero.app',
  },
  installEffort: 'hosted',
  installEvidence: 'On 2026-11-18 the maker site offered sign-in with Google or Microsoft and nothing to install for the AI assistant. Optional installers: GitHub Releases desktop-v0.1.28 ships Inbox-Zero-0.1.28-mac-arm64.dmg, mac-x64.dmg and win-x64/win-arm64 .exe files for the email client; the iPhone app is on the App Store (free); an Android app is on Google Play. Self-hosting needs Docker and Node.js 24+ (npx @inbox-zero/cli setup).',
  tagline: {
    en: 'AI email assistant for Gmail and Outlook that sorts your inbox and pre-drafts replies in your tone; hosted, with an optional email app and a self-hostable codebase under an AGPL-based license.',
    de: 'KI-E-Mail-Assistent für Gmail und Outlook, der Ihren Posteingang sortiert und Antworten in Ihrem Ton vorformuliert; gehostet, mit optionaler E-Mail-App und selbst hostbarer Codebasis unter einer AGPL-basierten Lizenz.',
    fr: "Assistant e-mail IA pour Gmail et Outlook qui trie votre boîte de réception et prérédige des réponses dans votre style ; hébergé, avec une application de messagerie facultative et un code source auto-hébergeable.",
    ja: 'GmailとOutlook向けのAIメールアシスタント。受信トレイを仕分けし、あなたの文体で返信の下書きを作成します。ホスト型で、任意のメールアプリと、セルフホスト可能なソースコードも提供されます。',
    zh: '适用于 Gmail 和 Outlook 的 AI 邮件助手，可整理收件箱并按您的语气预先起草回复；提供托管服务、可选的邮件应用，以及可自行托管、采用基于 AGPL 许可证的代码。',
    es: 'Asistente de correo con IA para Gmail y Outlook que ordena tu bandeja de entrada y redacta borradores de respuesta con tu tono; alojado, con una app de correo opcional y un código que puedes autoalojar.',
    pt: 'Assistente de e-mail com IA para Gmail e Outlook que organiza sua caixa de entrada e pré-redige respostas no seu tom; hospedado, com um app de e-mail opcional e um código-fonte que você pode hospedar por conta própria.',
    ar: 'مساعد بريد إلكتروني بالذكاء الاصطناعي لـ Gmail وOutlook يرتّب صندوق الوارد ويجهّز مسودات الردود بنبرتك؛ خدمة مستضافة مع تطبيق بريد اختياري وشيفرة يمكن استضافتها ذاتيًا.',
    ko: 'Gmail과 Outlook용 AI 이메일 어시스턴트로, 받은편지함을 분류하고 사용자의 말투로 답장 초안을 미리 작성합니다. 호스팅 서비스이며 선택형 이메일 앱과 직접 호스팅할 수 있는 소스 코드를 제공합니다.',
  },
  compare: { localLlm: true, toolUse: true }, // verified against the README and docs/hosting/llm-setup on 2026-11-18; missing key = not stated, never false
  reviewSlug: 'inbox-zero-review',
  pqReview: {
    date: '2026-11-18',
    version: '0.1.28',
    versionSourceUrl: 'https://github.com/elie222/inbox-zero/releases/tag/desktop-v0.1.28',
  },
  hqCountry: 'US',
  hqCountrySource: 'https://www.getinboxzero.com/privacy',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-18', // GitHub pushed_at 2026-11-18T11:06Z (API, 2026-11-18); latest release desktop-v0.1.28 published 2026-11-17
  lastUpstreamUpdateSource: 'https://github.com/elie222/inbox-zero (last push 2026-11-18; latest release 2026-11-17)',
}
