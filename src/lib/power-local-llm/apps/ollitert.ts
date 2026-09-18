// Local AI App Directory — OlliteRT (layer: on-device inference server, Android)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: "OlliteRT" sounds Ollama- or LiteRT-adjacent by name only —
// it is neither an Ollama fork nor a Google project. Confirmed as
// github.com/NightMean/OlliteRT: an independent, Ollama-inspired ("Ollama for
// Android") OpenAI-compatible LLM server app that runs entirely on-device on
// Android using Google's LiteRT-LM runtime underneath. Verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ollitert',
  name: 'OlliteRT',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['android'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache-2.0', // verified 2026-09-18
  price: 'free',
  hardware: { ramGb: 6, vramGb: null, cpuOnly: true }, // README: minimum 6 GB RAM (8 GB+ recommended, especially for multimodal models); no discrete GPU required — runs on the phone's own CPU/NPU via LiteRT-LM, verified 2026-09-18
  stars: 351, // github.com/NightMean/OlliteRT, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['chat', 'serve', 'phone'],
  url: 'github.com/NightMean/OlliteRT',
  tagline: {
    en: "Turns an Android phone into a fully local, OpenAI-compatible LLM inference server using Google's LiteRT-LM runtime.",
    de: 'Verwandelt ein Android-Smartphone mithilfe von Googles LiteRT-LM-Runtime in einen vollständig lokalen, OpenAI-kompatiblen LLM-Inferenz-Server.',
    fr: "Transforme un téléphone Android en serveur d'inférence LLM entièrement local et compatible OpenAI grâce au runtime LiteRT-LM de Google.",
    ja: 'GoogleのLiteRT-LMランタイムを使い、Androidスマートフォンを完全ローカルでOpenAI互換のLLM推論サーバーに変える。',
    zh: '利用谷歌LiteRT-LM运行时，将Android手机变成完全本地、兼容OpenAI的大模型推理服务器。',
    es: 'Convierte un teléfono Android en un servidor de inferencia LLM totalmente local y compatible con OpenAI usando el runtime LiteRT-LM de Google.',
    pt: 'Transforma um smartphone Android em um servidor de inferência de LLM totalmente local e compatível com OpenAI usando o runtime LiteRT-LM do Google.',
    ar: 'يحوّل هاتف أندرويد إلى خادم استدلال محلي بالكامل ومتوافق مع OpenAI لنماذج اللغة باستخدام بيئة تشغيل LiteRT-LM من جوجل.',
    ko: '구글의 LiteRT-LM 런타임을 사용해 안드로이드 폰을 완전 로컬, OpenAI 호환 LLM 추론 서버로 바꿔주는 앱.',
  },
  reviewSlug: 'ollitert-review', // dedicated PromptQuorum review — added 2026-09-19
  lastVerifiedDate: '2026-09-18',
}
