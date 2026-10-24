// Local AI App Directory — Linkwarden (layer: self-hosted bookmark manager, Notes & knowledge)
// Added 2026-10-24. Facts verified 2026-10-24 against linkwarden.app (home, pricing), docs.linkwarden.app (setup, AI tagging,
// environment variables, lighter setup, preservation), the GitHub repo linkwarden/linkwarden (README, docker-compose.yml, releases API),
// the App Store lookup API (id6752550960: v1.4.4, currentVersionReleaseDate 2026-10-12, free, iOS 15.1+, seller Linkwarden Inc.)
// and the Google Play listing (app.linkwarden: updated 2026-10-12, 10K+ downloads, in-app purchases).
// Latest GitHub release v2.16.3 (2026-09-09); the dev branch received commits on 2026-10-24 (GitHub API), which is the date used below.
// Cloud price: linkwarden.app/pricing shows "Yearly $3 /mo per user", USD only, 14-day free trial; no monthly price is printed in the page text.
// AI tagging: docs.linkwarden.app/self-hosting/ai-worker documents Ollama and OpenAI-compatible providers; the environment-variables page
// adds Azure OpenAI, Anthropic, OpenRouter and Perplexity and says that if several are configured they are tried in that order
// (OpenAI-compatible, Azure, Anthropic, Ollama, OpenRouter, Perplexity). The cloud edition lists "Optional AI tagging" without naming a provider.
// Privacy policy: linkwarden.app/privacy-policy, "Last updated: July 31, 2023"; it covers the cloud service and the website, not self-hosted instances.
// No `compare` block: attribute keys for this sub-category were not re-derived in this run.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'linkwarden',
  name: 'Linkwarden',
  categories: ['notes-integrations'],
  interfaces: ['web', 'mobile', 'plugin'], // web app, iOS/Android apps, browser extension (linkwarden/browser-extension), per README and linkwarden.app
  locality: 'hybrid', // bookmarks and preserved pages live on your own server when self-hosted; optional AI tagging runs on a local Ollama model or sends page content to a cloud provider you configure; the hosted Cloud edition is run by the maker
  platforms: ['web', 'ios', 'android'], // self-hosted/cloud web app plus the iOS and Android apps; the server itself runs in Docker (x86-64 and ARM64 images)
  worksWith: ['Ollama', 'OpenAI API', 'Meilisearch', 'PostgreSQL'],
  engine: 'external', // no model is bundled; tagging uses a provider you configure
  license: 'AGPL-3.0',
  price: 'freemium', // self-hosting is free; Linkwarden Cloud is a paid subscription (yearly $3 per user per month on linkwarden.app/pricing, 14-day trial)
  hardware: { ramGb: 4, vramGb: null, cpuOnly: true }, // docs: 4 GB memory "comfortable starting point", any 2-core CPU; no GPU needed unless you run Ollama yourself
  stars: 20199, // github.com/linkwarden/linkwarden, GitHub API 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['docs'],
  url: 'linkwarden.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/app/linkwarden/id6752550960',
    googlePlay: 'https://play.google.com/store/apps/details?id=app.linkwarden',
    github: 'https://github.com/linkwarden/linkwarden',
    web: 'https://linkwarden.app',
  },
  installEffort: 'hosted',
  installEvidence: 'linkwarden.app: sign up for Linkwarden Cloud (14-day free trial, then a paid subscription) and use the web app or the iOS/Android apps; self-hosting is the separate multi-step path (download docker-compose.yml and .env.sample, set NEXTAUTH_SECRET, POSTGRES_PASSWORD and MEILI_MASTER_KEY, run docker compose up; three containers: Linkwarden, PostgreSQL, Meilisearch) per docs.linkwarden.app/self-hosting/setup, checked 2026-10-24; GitHub Releases v2.16.3 has no binary assets',
  tagline: {
    en: 'Self-hostable bookmark manager that saves a copy of every page you bookmark, with optional AI tagging via a local Ollama model or a cloud provider',
    de: 'Selbst hostbarer Lesezeichen-Manager, der von jeder gespeicherten Seite eine Kopie sichert, mit optionaler KI-Verschlagwortung über ein lokales Ollama-Modell oder einen Cloud-Anbieter',
    fr: "Gestionnaire de signets auto-hébergeable qui conserve une copie de chaque page enregistrée, avec étiquetage IA facultatif via un modèle Ollama local ou un fournisseur cloud",
    ja: 'ブックマークしたページのコピーを保存する、セルフホスト可能なブックマーク管理ツール。ローカルのOllamaモデルまたはクラウドプロバイダーによるAIタグ付けは任意',
    zh: '可自托管的书签管理器，会为每个收藏的网页保存副本，并可选用本地 Ollama 模型或云端服务商进行 AI 自动打标签',
    es: 'Gestor de marcadores autoalojable que guarda una copia de cada página marcada, con etiquetado por IA opcional mediante un modelo local de Ollama o un proveedor en la nube',
    pt: 'Gerenciador de favoritos auto-hospedável que guarda uma cópia de cada página salva, com marcação por IA opcional via modelo local do Ollama ou provedor na nuvem',
    ar: 'مدير إشارات مرجعية قابل للاستضافة الذاتية يحفظ نسخة من كل صفحة تضيفها، مع وسم اختياري بالذكاء الاصطناعي عبر نموذج Ollama محلي أو مزوّد سحابي',
    ko: '북마크한 모든 페이지의 사본을 저장하는 셀프호스팅 가능한 북마크 관리자로, 로컬 Ollama 모델 또는 클라우드 제공업체를 통한 AI 태그 지정을 선택적으로 사용할 수 있습니다',
  },
  reviewSlug: 'linkwarden-review',
  pqReview: {
    date: '2026-10-24',
    version: '2.16.3',
    versionSourceUrl: 'https://github.com/linkwarden/linkwarden/releases/tag/v2.16.3',
  },
  verdict: 'Best for self-hosters who want a bookmark manager that archives pages and can tag them with a local Ollama model; limited by a three-container Docker setup, tagging quality PromptQuorum did not test, a cloud-first AI wording on the maker site, and a paid Cloud edition for anyone who does not want to host it.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-24', // GitHub API: latest commit on the dev branch 2026-10-24T02:59:53Z; latest release v2.16.3 on 2026-09-09; iOS app 1.4.4 on 2026-10-12
  lastUpstreamUpdateSource: 'https://github.com/linkwarden/linkwarden',
}
