// Local AI App Directory — Oriveo (layer: multi-provider BYOK chat client, mobile + web)
// Added 2026-11-18 at the owner's request. No maker outreach — independent PromptQuorum entry; no founder-review
// badge. NOT hands-on tested. Verified extra carefully: Oriveo ships three tiers that share one codebase —
// the free-forever "Oriveo Free" allowance, the paid "Oriveo AI" managed models, and a separate AGPL-3.0-or-later
// "Community Edition" (the full iPhone/Android/web client minus the account layer, cloud sync, Usage Insights and
// any model Oriveo itself pays for). This tile and its review describe the Community Edition precisely — see the
// "What Oriveo Is Not" / License & Editions sections of the review for the exact boundary.
// Sources read 2026-11-18:
// - oriveoai.com (homepage: "use many AI models from one interface with API keys you already have" — add keys
//   from 15 official providers plus any OpenAI-/Anthropic-/Gemini-compatible endpoint via "Relay," including local
//   servers such as Ollama, LM Studio, llama.cpp, and vLLM; 700+ models in one picker; keys stored locally on-device/
//   in-browser by default, not saved as account records; chats stay on-device unless cloud sync is turned on; guest
//   mode needs no account; memory is a plain-text list the user can read/edit/disable; the company states it is
//   independent and not affiliated with OpenAI, Anthropic, Google, or other providers);
// - oriveoai.com/open-source (Community Edition comparison table — included: BYOK chat, Relay and local model
//   servers, notes/folders/Skills/attachments, on-device spend tracking. Excluded: an Oriveo account, cross-device
//   cloud sync, Usage Insights/budget alerts, models Oriveo pays for [Oriveo AI/Oriveo Free], analytics/crash
//   reporting. Architecture: iOS = SwiftUI/UIKit/GRDB; Android = Jetpack Compose/Room/Koin/Ktor/OkHttp; web =
//   Next.js/React/Zustand, the only client with a server component, which the page says stores neither keys nor
//   messages; macOS is "in development," not yet in the repository; a shared/ directory holds provider-call
//   behavior as data [capability recipes, model contracts, test fixtures, OriveoProviderKit] all three clients test
//   against);
// - oriveoai.com/pricing (Free plan: $0 forever, includes BYOK/Relay/Oriveo Free/Oriveo AI access, 2 custom
//   assistants/folders/pinned chats, no cloud sync or Usage Insights. Pro Monthly $9.99, Pro Yearly $59.99, Lifetime
//   $149.99 one-time — Pro/Lifetime add 20GB cloud sync, 50MB attachments, unlimited assistants/folders/pinned
//   chats, Usage Insights/budget alerts, a larger Library allowance; none of the three include AI usage or AI
//   balance. Oriveo Free = no-signin daily allowance routed to free OpenRouter models. Oriveo AI = separate paid
//   managed service, sign-in required, 3 free requests/week, then prepaid AI Balance at list price with 0% markup;
//   BYOK = bring-your-own-key across the 15 providers or any OpenAI-compatible Relay endpoint, 0% markup, available
//   on every plan including Free);
// - oriveoai.com/privacy (no company HQ, incorporation country, or registered address stated; Section 2 only says
//   "contact [email] for the applicable operating entity and mailing information" and names the data controller
//   generically as "the Oriveo team" — hqCountry/hqCountrySource left unset);
// - oriveoai.com/faq (confirms: the three clients share one codebase; the Community Edition has no account, no
//   paid cloud sync, no Oriveo-hosted models, and no analytics, while the official app is the same client code
//   plus those commercial features; Oriveo does not run models on the phone itself — it connects over the local
//   network via mDNS to llama.cpp/Ollama/LM Studio/vLLM/Open WebUI already running on the user's own computer, and
//   those local calls carry no credentials);
// - github.com/oriveo/oriveo (About: "Open-source, bring-your-own-key (BYOK) multi-model AI chat client for iOS,
//   Android and the web... Local-first, self-hostable, no account." License: AGPL-3.0-or-later. 566 stars, 18
//   forks, 824 commits on main, checked 2026-11-18. No prebuilt binaries ship — self-hosting is build-from-source:
//   web = `npm install` + `npm run dev:app` [Node 22.22.2–22.x, serves on localhost:3001]; iOS = Xcode 26/iOS 18+;
//   Android = JDK 21 + Android SDK + `./gradlew :app:assembleDebug`. No Docker path documented);
// - github.com/oriveo/oriveo/commits/main (most recent commit 2026-11-12, "fix(android-mcp): keep the sign-in
//   waiting after the app resumes" — newer than the GitHub Releases tab's latest tagged release, v1.1.0, published
//   2026-09-23);
// - oriveoai.com/changelog (the official app's own version history runs well ahead of the GitHub release tags:
//   1.5.0 on 2026-11-10 [Images section, redesigned Skills, 4 more languages], 1.4.1 on 2026-10-30 [realtime voice
//   via OpenAI Realtime/Gemini Live, web search with any model], 1.4.0 on 2026-10-22 [Read Aloud, dictation, voice
//   conversations], 1.3.0 on 2026-10-14 [rebuilt custom LLM support, remote MCP server connections, Microsoft
//   sign-in], 1.2.10 on 2026-09-28. This is the app-wide version number shown to users, distinct from the
//   repository's own release tags, which lag it — see the review's License & Editions section for why).
// Notes:
// - License: AGPL-3.0-or-later for the Community Edition source, confirmed via the GitHub repository's LICENSE
//   field and About text, checked 2026-11-18. The official (Oriveo Free / Oriveo AI / Pro / Lifetime) apps are the
//   same client code plus proprietary account/cloud/billing features layered on top — not independently licensed.
// - locality 'hybrid': BYOK calls go to cloud providers by default (OpenAI, Anthropic, Google, etc.), but Relay and
//   the Community Edition's local-model-server support let every call instead reach a model on the user's own
//   network (Ollama, LM Studio, llama.cpp, vLLM, Open WebUI via mDNS discovery) — neither purely local nor purely
//   cloud is the only path, per oriveoai.com and oriveoai.com/faq.
// - engine 'external': Oriveo runs no inference of its own; it is a client that calls whichever provider API or
//   local server endpoint the user configures.
// - price 'freemium': Free plan ($0 forever) plus paid Pro Monthly/Yearly and Lifetime tiers for cloud sync/Usage
//   Insights/unlimited organization limits — AI usage itself is billed separately (BYOK = provider's own price,
//   Oriveo AI = prepaid balance at list price), per oriveoai.com/pricing, checked 2026-11-18.
// - worksWith: local inference servers Oriveo's Relay/Community Edition documents connecting to by name, per
//   oriveoai.com/open-source and oriveoai.com/faq, checked 2026-11-18.
// - hardware: null — Oriveo is a client, not a local-inference engine; it has no RAM/VRAM floor of its own (any
//   compute happens on the cloud provider or on a separately-run local server the user points it at).
// - interfaces/platforms: mobile (iPhone, Android) and web (app.oriveoai.com); a macOS app is stated as "in
//   development" on oriveoai.com/download and not yet in the repository, checked 2026-11-18, so 'mac' is left off
//   platforms until it ships.
// - installEffort 'hosted': oriveoai.com's own primary nav places "Open the app" (https://app.oriveoai.com) beside
//   "Download" — the web client needs no install, no account, and works on any device's browser, per the
//   homepage, checked 2026-11-18. The iPhone (App Store) and Android (Google Play) apps are an `installer`-tier
//   alternative for the native experience; the Community Edition itself is `terminal-setup` (build from source,
//   per the GitHub README) and is not the path most readers want. Tile tier reflects the single easiest path a
//   newcomer is pointed to.
// Last upstream update: 2026-11-12 (GitHub `main` branch commit, newer than the GitHub Releases tab's v1.1.0 tag
// from 2026-09-23 AND newer than the app's own changelog entry 1.5.0 from 2026-11-10) → NOT stale (6 days before
// this 2026-11-18 check).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'oriveo',
  name: 'Oriveo',
  categories: ['general-chat-clients'],
  interfaces: ['mobile', 'web'],
  locality: 'hybrid', // BYOK/Oriveo AI reach cloud providers by default; Relay and local-server support (Ollama, LM Studio, llama.cpp, vLLM) let the same client reach a model on the user's own network instead, per oriveoai.com/open-source and oriveoai.com/faq, checked 2026-11-18
  platforms: ['ios', 'android', 'web'],
  worksWith: ['Ollama', 'LM Studio', 'llama.cpp', 'vLLM', 'Open WebUI'],
  engine: 'external',
  license: 'AGPL-3.0-or-later (Community Edition)', // github.com/oriveo/oriveo LICENSE field, checked 2026-11-18; the official app layers proprietary account/cloud/billing features on the same client code
  price: 'freemium',
  hardware: null, // client app with no local-inference engine of its own; any compute happens on the cloud provider or a separately run local server
  stars: 566, // github.com/oriveo/oriveo, checked 2026-11-18
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['chat'],
  url: 'oriveoai.com',
  storeLinks: {
    appStore: 'https://apps.apple.com/app/oriveo/id6775370458',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.kenny.oriveo',
    github: 'https://github.com/oriveo/oriveo',
  },
  installEffort: 'hosted',
  installEvidence: 'oriveoai.com (checked 2026-11-18): the primary nav\'s "Open the app" link goes straight to https://app.oriveoai.com, with no install and no account required to start chatting in guest mode. "Download" (App Store / Google Play) is offered as an installer-tier alternative for the native mobile experience. The AGPL-3.0-or-later Community Edition at github.com/oriveo/oriveo ships no prebuilt binaries and is terminal-setup (build from source: `npm install` + `npm run dev:app` for web, Xcode 26 for iOS, JDK 21 + Android SDK for Android) — not the path most readers want.',
  tagline: {
    en: 'Open-source (AGPL-3.0), bring-your-own-key multi-model AI chat client for iPhone, Android, and the web — 700+ models from 15 providers or your own local servers, with no account needed in the free Community Edition',
    de: 'Quelloffener (AGPL-3.0), Bring-Your-Own-Key-Multi-Modell-KI-Chat-Client für iPhone, Android und das Web — 700+ Modelle von 15 Anbietern oder eigenen lokalen Servern, ohne Konto in der kostenlosen Community Edition',
    fr: 'Client de chat IA multimodèle open source (AGPL-3.0) avec vos propres clés API pour iPhone, Android et le web — plus de 700 modèles de 15 fournisseurs ou vos propres serveurs locaux, sans compte dans la Community Edition gratuite',
    ja: 'オープンソース（AGPL-3.0）のBYOK（自分のAPIキー使用）型マルチモデルAIチャットクライアント。iPhone、Android、Web対応 — 15のプロバイダーまたは自分のローカルサーバーから700以上のモデルを利用可能、無料のCommunity Editionはアカウント不要',
    zh: '开源（AGPL-3.0）、自带密钥（BYOK）的多模型AI聊天客户端，支持iPhone、Android和网页 —— 可使用15家提供商或自有本地服务器的700多个模型，免费的社区版无需账号',
    es: 'Cliente de chat de IA multimodelo de código abierto (AGPL-3.0) con tus propias claves API para iPhone, Android y la web — más de 700 modelos de 15 proveedores o tus propios servidores locales, sin cuenta en la Community Edition gratuita',
    pt: 'Cliente de chat de IA multimodelo de código aberto (AGPL-3.0) com suas próprias chaves de API para iPhone, Android e web — mais de 700 modelos de 15 provedores ou seus próprios servidores locais, sem conta na Community Edition gratuita',
    ar: 'عميل محادثة ذكاء اصطناعي متعدد النماذج مفتوح المصدر (AGPL-3.0) بمفاتيح API خاصة بك لأجهزة iPhone وAndroid والويب — أكثر من 700 نموذج من 15 مزودًا أو من خوادمك المحلية الخاصة، دون حساب في النسخة المجتمعية المجانية',
    ko: '오픈소스(AGPL-3.0) BYOK(자체 API 키 사용) 방식의 멀티모델 AI 채팅 클라이언트 — 아이폰, 안드로이드, 웹 지원. 15개 공급업체 또는 자체 로컬 서버의 700개 이상 모델을 사용할 수 있으며, 무료 커뮤니티 에디션은 계정이 필요 없음',
  },
  reviewSlug: 'oriveo-review',
  // Comparison attributes: verified against oriveoai.com, oriveoai.com/open-source, oriveoai.com/faq, and
  // github.com/oriveo/oriveo on 2026-11-18; a missing key means not stated there, never false.
  compare: { offline: false, importModels: false, modelDownloads: false, visionInput: true, voice: true, ollama: true, customEndpoint: true, fileChat: true, mcp: true },
  pqReview: {
    date: '2026-11-18',
    version: '1.5.0',
    versionSourceUrl: 'https://oriveoai.com/changelog',
  },
  verdict: 'Best for anyone who already pays for several AI providers and wants one BYOK client across phone, Android, and web with no markup — weaker fit for anyone who needs fully offline, on-device inference, since Oriveo itself runs no model and the free Community Edition excludes cloud sync and account features entirely.',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-12', // github.com/oriveo/oriveo main branch, most recent commit, checked 2026-11-18 — newer than both the GitHub Releases tag (v1.1.0, 2026-09-23) and the app's own changelog (1.5.0, 2026-11-10)
  lastUpstreamUpdateSource: 'https://github.com/oriveo/oriveo/commits/main',
}
