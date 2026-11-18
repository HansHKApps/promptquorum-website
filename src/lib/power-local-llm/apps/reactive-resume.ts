// Local AI App Directory — Reactive Resume (layer: open-source resume and cover-letter builder with an optional bring-your-own-provider AI assistant)
// Added 2026-11-18 (localhosted rank 10). No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18: rxresu.me homepage, github.com/reactive-resume/reactive-resume (GitHub API: stars, license, pushed_at, latest release v6.1.1 body, README),
// docs.rxresu.me/getting-started, docs.rxresu.me/legal/privacy-policy (last updated 2026-10-17), docs.rxresu.me/legal/terms-of-service (effective 2023-01-01),
// App Store listing (apps.apple.com/us/app/reactive-resume/id6823975835, go.rx.cv/ios redirects there) and go.rx.cv/android (redirects to Play id me.rxresu;
// the Play listing text could not be read, so no Play details are claimed beyond the official link).
// Notes:
// - License: MIT (GitHub API spdx MIT; README "MIT — do whatever you want with it"). README: "no tracking, no ads, and no paid tier"; optional AI uses a provider the
//   user connects, hosting and provider usage may have their own costs → price 'free'.
// - locality 'hybrid': the hosted service at rxresu.me stores accounts and documents on the operator's servers; the same app can be self-hosted (Docker, Vercel,
//   Cloudflare Workers, Hostinger template). AI features are optional and send prompts and document content to the provider the user connects (privacy policy);
//   README lists OpenAI, Anthropic, Google Gemini, OpenRouter, Ollama and compatible endpoints; v6.1.1 notes say OpenAI-compatible providers such as LM Studio can
//   connect without an API key.
// - engine 'external': no bundled model; the assistant uses a connected provider.
// - Install: 'hosted' — open rxresu.me in a browser (account needed to build and download). Native iOS app (App Store listing: free, v1.0.1, iOS/iPadOS 17.4+) and an
//   Android app (official go.rx.cv/android link to Google Play) exist; self-hosting is a separate multi-service Docker setup (PostgreSQL, upload storage), not the easy path.
// - HQ country DE: the terms of service (docs.rxresu.me/legal/terms-of-service) state "These terms are governed by the laws of the Federal Republic of Germany" and name the
//   Berlin Commissioner for Data Protection and Freedom of Information as the data-protection contact. The privacy policy and terms give no postal address and name
//   "Service Operator: Amruth Pillai" (an individual). Governing law + named regulator = a country is mentioned, so DE is used per the intake rule.
// - Version: v6.1.1 = latest GitHub release (2026-11-13). The iOS app has its own version (1.0.1) and the release notes say native updates ship through separate store builds.
// - compare: 'documents-research' has no segment for resume/writing tools (compare-schema.ts COMPARE_SEGMENTS), so left empty rather than guessed.
// - mcpSupport true: README lists "REST API and MCP server for document management, imports, exports, checks, and application workflows".
// Last upstream update: 2026-11-16 (last commit on main 2026-11-16T17:14Z, GitHub API; latest release v6.1.1 2026-11-13) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'reactive-resume',
  name: 'Reactive Resume',
  categories: ['writing-email'],
  interfaces: ['web', 'mobile'],
  locality: 'hybrid', // hosted service stores data on the operator's servers; self-hostable; optional AI goes to the provider the user connects (privacy policy, README)
  platforms: ['web', 'selfhosted', 'ios', 'android'],
  worksWith: ['Ollama', 'OpenAI', 'Anthropic Claude', 'Google Gemini', 'OpenRouter', 'LM Studio', 'MCP', 'Docker'], // README AI provider list; LM Studio per v6.1.1 release notes
  engine: 'external', // optional assistant uses a connected provider; no bundled model
  license: 'MIT', // GitHub API spdx + README
  price: 'free', // README: no paid tier, no ads; hosting and AI provider usage may cost
  hardware: null,
  stars: 45896, // GitHub API read 2026-11-18
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['docs', 'agent'],
  url: 'rxresu.me',
  storeLinks: {
    web: 'https://rxresu.me',
    github: 'https://github.com/reactive-resume/reactive-resume',
    appStore: 'https://apps.apple.com/us/app/reactive-resume/id6823975835',
    googlePlay: 'https://play.google.com/store/apps/details?id=me.rxresu',
  },
  installEffort: 'hosted',
  installEvidence: 'On 2026-11-18 rxresu.me offered the full web app in the browser (free account needed to build and download a resume; the ATS checker works without sign-in). The same site links a free iOS app (App Store listing, v1.0.1) and an Android app (Google Play, id me.rxresu). Self-hosting (Docker, Vercel, Cloudflare Workers) is optional and needs PostgreSQL plus upload storage, so it is not the easiest path.',
  mcpSupport: true,
  tagline: {
    en: 'Free, open-source (MIT) resume and cover-letter builder with job-application tracking and an optional AI assistant that uses a provider you connect; use it online or self-host it',
    de: 'Kostenloser, quelloffener (MIT) Lebenslauf- und Anschreiben-Baukasten mit Bewerbungsverwaltung und optionalem KI-Assistenten, der einen von Ihnen verbundenen Anbieter nutzt; online nutzbar oder selbst hostbar',
    fr: 'Créateur de CV et de lettres de motivation gratuit et open source (MIT), avec suivi des candidatures et assistant IA optionnel qui utilise un fournisseur que vous connectez ; utilisable en ligne ou auto-hébergeable',
    ja: '無料・オープンソース（MIT）の履歴書・カバーレター作成ツール。応募管理と、ユーザーが接続したプロバイダーを使うオプションのAIアシスタントを備え、オンライン利用もセルフホストも可能',
    zh: '免费开源（MIT）的简历与求职信制作工具，内置求职申请跟踪，并提供可选的 AI 助手（使用您自行连接的服务商）；可在线使用或自行部署',
    es: 'Creador de currículos y cartas de presentación gratuito y de código abierto (MIT), con seguimiento de candidaturas y un asistente de IA opcional que usa un proveedor que tú conectas; úsalo en línea o autoalójalo',
    pt: 'Criador de currículos e cartas de apresentação gratuito e de código aberto (MIT), com acompanhamento de candidaturas e um assistente de IA opcional que usa um provedor que você conecta; use online ou hospede você mesmo',
    ar: 'أداة مجانية ومفتوحة المصدر (MIT) لإنشاء السير الذاتية ورسائل التقديم مع تتبّع طلبات التوظيف ومساعد ذكاء اصطناعي اختياري يستخدم مزوّدًا تربطه بنفسك؛ تُستخدم عبر الإنترنت أو تُستضاف ذاتيًا',
    ko: '무료 오픈소스(MIT) 이력서·자기소개서 작성 도구로, 지원 현황 관리와 사용자가 연결한 제공업체를 쓰는 선택형 AI 어시스턴트를 갖추고 있으며 온라인 사용 또는 직접 호스팅이 가능합니다',
  },
  reviewSlug: 'reactive-resume-review',
  pqReview: {
    date: '2026-11-18',
    version: '6.1.1',
    versionSourceUrl: 'https://github.com/reactive-resume/reactive-resume/releases/tag/v6.1.1',
  },
  verdict: 'Best for job seekers who want a free, open-source resume and cover-letter builder with PDF, Word, Markdown and JSON export that they can use online or self-host; the AI assistant is optional and sends your document to the provider you connect, an account is needed to build and download, and PromptQuorum has not tested it.',
  hqCountry: 'DE',
  hqCountrySource: 'https://docs.rxresu.me/legal/terms-of-service',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-16', // GitHub API: last commit on main 2026-11-16T17:14Z, read 2026-11-18; latest release v6.1.1 published 2026-11-13
  lastUpstreamUpdateSource: 'https://github.com/reactive-resume/reactive-resume (last commit 2026-11-16; latest release v6.1.1, 2026-11-13)',
}
