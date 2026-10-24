// Local AI App Directory — Frankly AI: Direct AI Chat (layer: mobile / iOS)
// Added 2026-10-24 on request (the owner sent the developer's product page, cong-le.com/apps/frankly-ai/). Verified on 2026-10-24 against:
// the App Store listing and iTunes lookup record (id6766366146: seller Pocket Grove Ltd, bundle com.congle.TEAMCONG.FranklyAI, v1.10 released
// 2026-10-19, first release 2026-05-06, iOS/iPadOS 18.0+, free with in-app purchases, listing page shows Age Rating 18+, privacy label
// "Data Not Collected"), the storefront pages US/DE/FR/ES/JP/BR/KR (in-app purchase prices), the developer's product page and the
// developer's general privacy policy (last updated 2026-09-08). The listing's sellerUrl is exactly the product page, which ties the
// App Store app to cong-le.com.
// The product page still shows the banner "This app is not currently available on the App Store" although the listing is live (checked
// 2026-10-24); the page also markets the app as "unfiltered" while the App Store text does not. Both are stated in the review as found.
// No public source repository (the developer's GitHub account has none for this app), so the licence is recorded as closed source.
// No maker comment has been received, so there is no `founder` block and no founderReviewedDate.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'frankly-ai',
  name: 'Frankly AI',
  categories: ['general-chat-clients', 'roleplay-companions'],
  interfaces: ['mobile'],
  locality: 'local', // listing: "Download a local AI model, then chat on your iPhone without an account. Chats and local model processing stay on your device"; model downloads need the internet (developer statement, not verified hands-on)
  platforms: ['ios'], // iPhone and iPad per the listing, iOS/iPadOS 18.0+; the product page says iPhone only; no Android or desktop build mentioned
  worksWith: ['Hugging Face'], // Pro imports GGUF models from Hugging Face (product page + listing)
  engine: 'builtin', // self-contained app; neither source names the inference engine
  license: 'Closed source',
  price: 'freemium', // free download; free tier 10 messages/day; Pro $1.99/month, $7.99/year, $12.99 lifetime (US store, 2026-10-24)
  hardware: null,
  stars: null,
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'cong-le.com/apps/frankly-ai',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/frankly-ai-direct-ai-chat/id6766366146',
  },
  installEffort: 'installer',
  installOn: ['ios'],
  installEvidence: 'App Store listing id6766366146 (free, iOS/iPadOS 18.0+, about 23 MB plus in-app model downloads), read 2026-10-24',
  tagline: {
    en: 'iPhone AI chat with downloadable on-device models, task personas and no account; free daily limit, Pro unlocks the rest',
    de: 'KI-Chat für das iPhone mit ladbaren On-Device-Modellen, Aufgaben-Personas und ohne Konto; kostenlos mit Tageslimit, Pro schaltet den Rest frei',
    fr: 'Chat IA pour iPhone avec modèles locaux à télécharger, personas par tâche et sans compte ; gratuit avec limite quotidienne, Pro débloque le reste',
    ja: 'iPhone向けAIチャット。ダウンロードするオンデバイスモデル、用途別ペルソナに対応し、アカウント不要。無料は1日の上限あり、Proで解除',
    zh: 'iPhone AI聊天应用，可下载设备端模型，提供按任务设定的角色，无需账号；免费版每日有上限，Pro版解锁其余功能',
    es: 'Chat de IA para iPhone con modelos locales descargables, personas por tarea y sin cuenta; gratis con límite diario, Pro desbloquea el resto',
    pt: 'Chat de IA para iPhone com modelos locais baixáveis, personas por tarefa e sem conta; grátis com limite diário, o Pro libera o resto',
    ar: 'دردشة ذكاء اصطناعي لـ iPhone مع نماذج محلية قابلة للتنزيل وشخصيات حسب المهمة وبلا حساب؛ مجانية بحد يومي وPro يفتح الباقي',
    ko: 'iPhone용 AI 채팅 앱. 내려받는 온디바이스 모델과 작업별 페르소나를 제공하며 계정이 필요 없음. 무료는 일일 한도 있음, Pro로 해제',
  },
  // Comparison attributes (mobile chat segment), each read from the App Store description and the product page on 2026-10-24;
  // a missing key = not stated, never false. offline = the developer says it runs fully offline after setup; importModels = GGUF import
  // from Hugging Face (Pro); voice = speech-to-text plus optional voice replies (Pro, English only). Image input is not stated.
  compare: { offline: true, importModels: true, modelDownloads: true, voice: true },
  reviewSlug: 'frankly-ai-review',
  pqReview: {
    date: '2026-10-24', // 1.10 = version on the App Store listing that day (released 2026-10-19)
    version: '1.10',
    versionSourceUrl: 'https://apps.apple.com/us/app/frankly-ai-direct-ai-chat/id6766366146',
  },
  verdict:
    'Best for: iPhone users who want a no-account chat app that downloads its model to the phone and offers task personas. Limits: closed source, five months old, the best features sit behind Pro, and the privacy statements come from the developer.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-19', // iTunes lookup currentVersionReleaseDate 2026-10-19T21:56:31Z (1.10), read 2026-10-24
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/frankly-ai-direct-ai-chat/id6766366146',
}
