// Local AI App Directory — LocalAI: Offline AI Chat LLM, by ApexCreator (layer: mobile)
// Not to be confused with the `localai` entry (mudler/LocalAI, the
// OpenAI-compatible local inference server) — unrelated project, same name.
// Sourced from a Google Play Store listing search, not direct developer
// correspondence — treat every claim below as "per the Play Store listing,"
// not independently verified beyond what the listing itself states.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'localai-apexcreator',
  name: 'LocalAI: Offline AI Chat LLM',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['android'],
  worksWith: null,
  engine: 'builtin',
  license: 'Closed source',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded — needs manual research
  stars: null,
  addedDate: '2026-09-12',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: null,
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.ApexCreator.localaiapp',
  },
  tagline: {
    en: 'Free Android app for offline LLM chat via llama.cpp, with an optional premium tier',
    de: 'Kostenlose Android-App für Offline-LLM-Chat über llama.cpp, mit optionaler Premium-Stufe',
    fr: "Application Android gratuite pour le chat LLM hors ligne via llama.cpp, avec un palier premium optionnel",
    ja: 'llama.cppによるオフラインLLMチャット向けの無料Androidアプリ(有料プランはオプション)',
    zh: '通过llama.cpp实现离线LLM聊天的免费Android应用,可选高级版',
    es: 'App Android gratuita para chat con LLM sin conexión mediante llama.cpp, con un nivel premium opcional',
    pt: 'App Android gratuito para chat com LLM offline via llama.cpp, com um nível premium opcional',
    ar: 'تطبيق أندرويد مجاني للدردشة مع نماذج لغوية دون اتصال عبر llama.cpp، مع مستوى مدفوع اختياري',
    ko: 'llama.cpp 기반 오프라인 LLM 채팅을 위한 무료 안드로이드 앱, 선택적 프리미엄 등급 제공',
  },
  lastVerifiedDate: null,
}
