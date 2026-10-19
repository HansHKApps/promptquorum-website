// Local AI App Directory — Caelum: Local AI Assistant (layer: mobile / Android)
// Added 2026-10-19 on request (Google Play link com.reactnativeai). Verified on 2026-10-19 against: the Google Play listing
// (developer "Nolan Picard", France; v1.3.1, first release 2025-07-10, last updated 2025-08-14, Android 7.0+, 10K+ downloads,
// 4.1 from 271 ratings, Productivity, free install button), the official site caelum-app.me and its privacy page rgpd.html
// (read from the Internet Archive capture of 2026-05-10 — the domain returns NXDOMAIN on 2026-10-19 via 8.8.8.8 and 1.1.1.1, so
// it is NOT reachable today; the Play listing and nolanpcrd.github.io/Caelum redirect to it). The developer's public GitHub
// (nolanpcrd) has no Caelum repository, so the licence is recorded as closed source. The model, its size/source and the
// inference engine are NOT stated anywhere, so `engine` is `builtin` only because the app ships its own on-device AI per the
// listing and policy; no model name is claimed. The content-rating descriptors on the Play page mention "In-App Purchases"
// although the description names none — price stays `free` (listed install price); flagged as unverified in the review.
// Last upstream update 2025-08-14 is > 180 days old, so the directory shows the grey "likely dead" state.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'caelum',
  name: 'Caelum: Local AI Assistant',
  categories: ['general-chat-clients', 'document-pdf-chat'],
  interfaces: ['mobile'],
  locality: 'local', // listing and policy: the AI runs on the phone, no internet needed for chat; optional Brave web search sends the query out
  platforms: ['android'], // Google Play only, Android 7.0+; no iOS or desktop build found
  worksWith: null,
  engine: 'builtin', // ships its own on-device AI per the listing; model and runtime are not named by the developer
  license: 'Closed source', // no public source repository found (developer's GitHub has none)
  price: 'free', // free install on Google Play; content-rating descriptors mention in-app purchases but the description names none
  hardware: null, // no RAM/storage requirement stated anywhere
  stars: null,
  addedDate: '2026-10-19',
  status: 'listed',
  uses: ['phone', 'chat', 'docs'],
  url: 'play.google.com/store/apps/details?id=com.reactnativeai', // official site caelum-app.me is NXDOMAIN on 2026-10-19; Play listing is the only working official channel
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.reactnativeai',
  },
  installEffort: 'installer',
  installEvidence: 'Google Play listing com.reactnativeai (free install, Android 7.0+, 10K+ downloads, v1.3.1 updated 2025-08-14), read 2026-10-19',
  tagline: {
    en: 'Free Android chat app that says it runs AI offline, with document questions and optional web search — no update since August 2025',
    de: 'Kostenlose Android-Chat-App, die laut Angaben KI offline ausführt, mit Dokumentenfragen und optionaler Websuche — seit August 2025 kein Update',
    fr: 'Appli de chat Android gratuite qui affirme exécuter l’IA hors ligne, avec questions sur les documents et recherche web optionnelle — aucune mise à jour depuis août 2025',
    ja: '無料のAndroidチャットアプリ。AIをオフラインで実行するとしており、文書への質問や任意のWeb検索に対応。2025年8月以降は更新なし',
    zh: '免费的 Android 聊天应用，称 AI 可离线运行，支持文档提问和可选的网页搜索——自 2025 年 8 月起无更新',
    es: 'App de chat gratuita para Android que afirma ejecutar la IA sin conexión, con preguntas sobre documentos y búsqueda web opcional — sin actualizaciones desde agosto de 2025',
    pt: 'App de chat gratuito para Android que diz executar a IA offline, com perguntas sobre documentos e busca na web opcional — sem atualização desde agosto de 2025',
    ar: 'تطبيق دردشة مجاني لنظام Android يذكر أنه يشغّل الذكاء الاصطناعي دون اتصال، مع أسئلة عن المستندات وبحث اختياري على الويب — دون تحديث منذ أغسطس 2025',
    ko: '무료 Android 채팅 앱. AI를 오프라인으로 실행한다고 밝히며 문서 질문과 선택형 웹 검색을 지원 — 2025년 8월 이후 업데이트 없음',
  },
  // Comparison attributes (mobile-chat segment), read from the Play description on 2026-10-19: only `offline` is stated
  // ("works entirely offline"). importModels / modelDownloads / visionInput / voice are not stated — left unset, never false.
  compare: { offline: true },
  reviewSlug: 'caelum-review',
  pqReview: {
    date: '2026-10-19',
    version: '1.3.1',
    versionSourceUrl: 'https://play.google.com/store/apps/details?id=com.reactnativeai',
  },
  verdict: 'Only worth a look for Android users who want a free, account-less chat and document app and accept an unmaintained, closed-source project with no named model and a website that no longer resolves.',
  lastVerifiedDate: '2026-10-19',
  lastUpstreamUpdate: '2025-08-14', // Google Play "Updated on Aug 14, 2025" (v1.3.1, the 10th official release)
  lastUpstreamUpdateSource: 'https://play.google.com/store/apps/details?id=com.reactnativeai',
}
