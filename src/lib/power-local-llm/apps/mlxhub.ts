// Local AI App Directory — MLXHub (layer: mobile / iOS)
// Added 2026-10-05 from the app queue. Facts verified against the App Store listing (id6766485144) and the
// official site mlxhub.app on 2026-10-05. No public source repository was found, so licence is recorded as
// closed source. NOT the same product as mlxhub.ai (a separate macOS app by a different developer).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'mlxhub',
  name: 'MLXHub',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios'], // iOS/iPadOS 26+; the listing also shows macOS 26 (Apple M1+) and visionOS 26 availability for the same app, no native desktop build is described
  worksWith: ['Hugging Face'],
  engine: 'builtin', // on-device inference on mlx-swift (Apple MLX)
  license: 'Closed source',
  price: 'freemium', // free download; MLXHub Plus $6.99/month, $44.99/year, lifetime $229.99 — verified 2026-10-05
  hardware: { ramGb: 6, vramGb: null, cpuOnly: null, variesByModel: true }, // official site: Apple silicon iPhone/iPad, 6 GB RAM or more; larger models need more
  stars: null,
  addedDate: '2026-10-05',
  status: 'listed',
  uses: ['phone', 'chat', 'serve'],
  url: 'mlxhub.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144',
  },
  tagline: {
    en: 'On-device MLX chat for iPhone and iPad, with a LAN server and multi-device model splitting',
    de: 'On-Device-MLX-Chat für iPhone und iPad, mit LAN-Server und Modellaufteilung über mehrere Geräte',
    fr: 'Chat MLX sur l’appareil pour iPhone et iPad, avec serveur LAN et répartition du modèle entre appareils',
    ja: 'iPhone・iPad向けのオンデバイスMLXチャット。LANサーバーと複数デバイスでのモデル分割に対応',
    zh: 'iPhone/iPad设备端MLX聊天应用，带局域网服务器和多设备模型拆分',
    es: 'Chat MLX en el dispositivo para iPhone y iPad, con servidor LAN y reparto del modelo entre dispositivos',
    pt: 'Chat MLX no dispositivo para iPhone e iPad, com servidor LAN e divisão do modelo entre dispositivos',
    ar: 'دردشة MLX على الجهاز لـ iPhone وiPad مع خادم شبكة محلية وتقسيم النموذج بين عدة أجهزة',
    ko: 'iPhone·iPad용 온디바이스 MLX 채팅 앱, LAN 서버와 다중 기기 모델 분할 지원',
  },
  reviewSlug: 'mlxhub-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: {
    date: '2026-10-05', // 2.2.0 = version shown on the App Store listing on that date
    version: '2.2.0',
    versionSourceUrl: 'https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144',
  },
  // Comparison attributes: each value taken from the App Store listing / official site on 2026-10-05; a missing key = not stated there, never false.
  compare: { offline: true, modelDownloads: true, visionInput: true },
  lastVerifiedDate: '2026-10-05',
}
