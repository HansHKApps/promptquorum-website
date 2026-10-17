// Local AI App Directory — Local AI Chat - pocket (layer: mobile / iOS)
// Added 2026-10-06 from the app queue. Facts verified against the App Store listing and iTunes lookup record
// (id6476791661), the product site oneai.framer.website and its privacy policy on 2026-10-06. No public source
// repository was found, so licence is recorded as closed source. Other apps with similar names exist (for
// example "Private AI Chat: Pocket LLM" by a different developer) — this tile is only the Rica Harz app.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'local-ai-chat-pocket',
  name: 'Local AI Chat - pocket',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios'], // iPhone/iPad iOS 18.6+; the listing also shows visionOS 2.6+
  worksWith: null,
  engine: 'builtin', // runs downloadable on-device models (Llama, Gemma, Qwen, Mistral, Phi); the runtime is not named in any public source
  license: 'Closed source',
  price: 'freemium', // free download; in-app purchases listed at $6.99 weekly, $14.99 monthly, $99.99 yearly — verified 2026-10-06
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // the listing publishes no RAM figure; depends on the model chosen
  stars: null,
  addedDate: '2026-10-06',
  status: 'listed',
  uses: ['phone', 'chat', 'image'],
  url: 'oneai.framer.website',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661',
  },
  tagline: {
    en: 'Offline iPhone and iPad chat with downloadable on-device models, image generation and Shortcuts support',
    de: 'Offline-Chat für iPhone und iPad mit herunterladbaren On-Device-Modellen, Bildgenerierung und Kurzbefehle-Unterstützung',
    fr: 'Chat hors ligne pour iPhone et iPad avec modèles téléchargeables sur l’appareil, génération d’images et Raccourcis',
    ja: 'iPhone・iPad向けのオフラインチャット。ダウンロード式オンデバイスモデル、画像生成、ショートカットに対応',
    zh: 'iPhone/iPad离线聊天应用，支持可下载的设备端模型、图像生成和快捷指令',
    es: 'Chat sin conexión para iPhone y iPad con modelos descargables en el dispositivo, generación de imágenes y Atajos',
    pt: 'Chat offline para iPhone e iPad com modelos baixáveis no dispositivo, geração de imagens e Atalhos',
    ar: 'دردشة دون إنترنت لـ iPhone وiPad مع نماذج قابلة للتنزيل على الجهاز وتوليد صور ودعم الاختصارات',
    ko: 'iPhone·iPad용 오프라인 채팅 앱, 다운로드형 온디바이스 모델·이미지 생성·단축어 지원',
  },
  reviewSlug: 'local-ai-chat-pocket-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: {
    date: '2026-10-06', // 0.5.6 = version shown on the App Store listing on that date (released 2026-05-27)
    version: '0.5.6',
    versionSourceUrl: 'https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661',
  },
  // Comparison attributes: each value taken from the App Store listing / product site on 2026-10-06; a missing key = not stated there, never false.
  compare: { offline: true },
  lastVerifiedDate: '2026-10-06',
}
