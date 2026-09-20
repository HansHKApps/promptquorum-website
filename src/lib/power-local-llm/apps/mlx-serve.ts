// Local AI App Directory — mlx-serve (layer: inference/serving engine)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: "mlx-serve" has many identically-described forked repos
// under different usernames (perretv, yermakoffivan, justinluque, Sinojen,
// nikolai-vysotskyi, t2tx, qpzmV — all forks). This entry is the original,
// github.com/ddalcu/mlx-serve (1,373 stars, not a fork). A separate, unrelated
// raspoli/mlx-serve project (Python-based, only 19 stars, different README)
// also exists under the same name but is NOT this entry — not included here.
// NOT the same underlying project as this batch's vllm-mlx or mlxcel (three
// distinct Apple Silicon inference servers by different authors, in different
// languages — Python, Rust, and Zig respectively). Verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'mlx-serve',
  name: 'mlx-serve',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli', 'desktop'], // server run from the CLI; ships a bundled macOS menu-bar app (MLX Core), verified 2026-09-18
  locality: 'local',
  platforms: ['mac'], // README: "macOS 26.2+ on Apple Silicon", no Windows or Linux support, verified 2026-09-18
  worksWith: ['Claude Code', 'Continue', 'Cursor', 'Open WebUI'], // README lists these as compatible OpenAI/Anthropic-API clients, verified 2026-09-18
  engine: 'builtin',
  license: 'MIT', // verified 2026-09-18 (MIT with some bundled Apache-2.0-licensed third-party components)
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // README: image generation 8-16 GB, video 24-69 GB, music 8-20 GB, voice cloning 8 GB, 3D 16 GB — varies by media type and model, verified 2026-09-18
  stars: 1373, // github.com/ddalcu/mlx-serve via GitHub API, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['chat', 'serve', 'image', 'audio'],
  url: 'github.com/ddalcu/mlx-serve',
  tagline: {
    en: 'Native Zig inference server for Apple Silicon serving MLX and GGUF models through OpenAI- and Anthropic-compatible APIs, with a bundled macOS menu-bar app.',
    de: 'Nativer Zig-Inferenz-Server für Apple Silicon, der MLX- und GGUF-Modelle über OpenAI- und Anthropic-kompatible APIs bereitstellt, inklusive macOS-Menüleisten-App.',
    fr: "Serveur d'inférence Zig natif pour Apple Silicon servant des modèles MLX et GGUF via des API compatibles OpenAI et Anthropic, avec une application de barre de menu macOS intégrée.",
    ja: 'OpenAIおよびAnthropic互換APIでMLXとGGUFモデルを提供する、Apple Silicon向けネイティブZig推論サーバー。macOSメニューバーアプリ同梱。',
    zh: '面向Apple芯片的原生Zig推理服务器，通过OpenAI和Anthropic兼容API提供MLX与GGUF模型服务，并附带macOS菜单栏应用。',
    es: 'Servidor de inferencia nativo en Zig para Apple Silicon que sirve modelos MLX y GGUF a través de API compatibles con OpenAI y Anthropic, con una app de barra de menú de macOS incluida.',
    pt: 'Servidor de inferência nativo em Zig para Apple Silicon que serve modelos MLX e GGUF por meio de APIs compatíveis com OpenAI e Anthropic, com um app de barra de menu do macOS incluído.',
    ar: 'خادم استدلال أصلي بلغة Zig لشرائح Apple يقدم نماذج MLX وGGUF عبر واجهات برمجية متوافقة مع OpenAI وAnthropic، مع تطبيق مرفق لشريط قوائم macOS.',
    ko: 'OpenAI 및 Anthropic 호환 API로 MLX와 GGUF 모델을 제공하는 Apple 실리콘용 네이티브 Zig 추론 서버로, macOS 메뉴바 앱이 함께 제공됨.',
  },
  mcpSupport: true, // README: bundled macOS app includes "agent mode, and tool calling" with MCP tool integration, verified 2026-09-18
  reviewSlug: 'mlx-serve-review', // dedicated PromptQuorum review — added 2026-09-19
  pqReview: { date: '2026-09-20', version: 'v26.9.4', versionSourceUrl: 'https://github.com/ddalcu/mlx-serve/releases/tag/v26.9.4' },
  lastVerifiedDate: '2026-09-18',
}
