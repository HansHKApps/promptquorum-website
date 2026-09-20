// Local AI App Directory — SwiftLM (layer: inference/serving engine)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: "SwiftLM" could be confused with generic Swift-language LLM
// client libraries (e.g. tattn/LocalLLMClient, getgrinta/swift-llm). This
// entry is github.com/SharpAI/SwiftLM specifically — a native Swift MLX
// inference *server* (OpenAI-compatible API, SSD MoE streaming, TurboQuant KV
// cache compression), not a client SDK. Verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'swiftlm',
  name: 'SwiftLM',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli', 'mobile'], // macOS server run from the command line; iOS via the bundled SwiftBuddy companion app, verified 2026-09-18
  locality: 'local',
  platforms: ['mac', 'ios'], // README: macOS 14.0+ server, plus an iOS/iPadOS SwiftBuddy app, verified 2026-09-18
  worksWith: ['OpenAI API'],
  engine: 'builtin',
  license: 'MIT', // verified 2026-09-18
  price: 'free',
  hardware: { ramGb: 6, vramGb: null, cpuOnly: false, variesByModel: true }, // README's smallest tested config is an iPhone 13 Pro with 6 GB RAM running SwiftBuddy; server-side MoE models scale far higher (20-55 GB+ unified memory), verified 2026-09-18
  stars: 768, // github.com/SharpAI/SwiftLM, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['chat', 'serve'],
  url: 'github.com/SharpAI/SwiftLM',
  tagline: {
    en: 'Native Swift inference server for Apple Silicon that serves MLX models through a strict OpenAI-compatible API, with no Python required.',
    de: 'Nativer Swift-Inferenz-Server für Apple Silicon, der MLX-Modelle über eine strikt OpenAI-kompatible API bereitstellt – ganz ohne Python.',
    fr: "Serveur d'inférence Swift natif pour Apple Silicon qui sert des modèles MLX via une API strictement compatible OpenAI, sans Python.",
    ja: 'PythonなしでMLXモデルを厳格なOpenAI互換APIで提供する、Apple Silicon向けネイティブSwift推論サーバー。',
    zh: '面向Apple芯片的原生Swift推理服务器，通过严格兼容OpenAI的API提供MLX模型服务，无需Python。',
    es: 'Servidor de inferencia nativo en Swift para Apple Silicon que sirve modelos MLX mediante una API estrictamente compatible con OpenAI, sin necesidad de Python.',
    pt: 'Servidor de inferência nativo em Swift para Apple Silicon que serve modelos MLX por meio de uma API estritamente compatível com OpenAI, sem necessidade de Python.',
    ar: 'خادم استدلال أصلي بلغة Swift لشرائح Apple يقدم نماذج MLX عبر واجهة برمجية متوافقة تمامًا مع OpenAI، دون الحاجة إلى Python.',
    ko: 'Python 없이 MLX 모델을 엄격한 OpenAI 호환 API로 제공하는 Apple 실리콘용 네이티브 Swift 추론 서버.',
  },
  reviewSlug: 'swiftlm-review', // dedicated PromptQuorum review — added 2026-09-19
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { openaiApi: true, appleSilicon: true },
  lastVerifiedDate: '2026-09-18',
}
