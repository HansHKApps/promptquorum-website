// Local AI App Directory — openai-edge-tts (layer: TTS API server)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: github.com/travisvn/openai-edge-tts is the well-known
// original (2.1k stars per GitHub's own rounded display; forks exist under
// other orgs such as a2s-ai/A2S_openai-edge-tts and danielaskdd/openai-edge-tts
// with negligible stars). Locality note: the server itself is self-hosted, but
// the actual speech synthesis is proxied to Microsoft Edge's free online TTS
// voices over the network rather than running a local model — marked 'hybrid'
// accordingly, not 'local'. Verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openai-edge-tts',
  name: 'openai-edge-tts',
  categories: ['text-to-speech', 'api-servers'],
  interfaces: ['cli'],
  locality: 'hybrid', // self-hosted API server, but synthesis calls out to Microsoft Edge's free online TTS voices, verified 2026-09-18
  platforms: ['mac', 'win', 'linux'], // Docker image + native Python install documented for all three, verified 2026-09-18
  worksWith: ['OpenAI API'],
  engine: 'external', // wraps Microsoft Edge's cloud TTS voices rather than running a local speech model, verified 2026-09-18
  license: 'GPL-3.0', // verified 2026-09-18
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // no local model inference — just proxies text to Edge's cloud voices, verified 2026-09-18
  stars: 2100, // github.com/travisvn/openai-edge-tts — GitHub's UI shows only the rounded "2.1k" badge (>1,000 stars), exact integer not available without authenticated API access, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['audio', 'serve'],
  url: 'github.com/travisvn/openai-edge-tts',
  tagline: {
    en: "Self-hosted, OpenAI-compatible text-to-speech API server built on Microsoft Edge's free online voices.",
    de: 'Selbst gehosteter, OpenAI-kompatibler Text-zu-Sprache-API-Server auf Basis der kostenlosen Online-Stimmen von Microsoft Edge.',
    fr: 'Serveur API de synthèse vocale auto-hébergé et compatible OpenAI, basé sur les voix en ligne gratuites de Microsoft Edge.',
    ja: 'Microsoft Edgeの無料オンライン音声を基盤とした、セルフホスト型のOpenAI互換テキスト読み上げAPIサーバー。',
    zh: '基于Microsoft Edge免费在线语音构建的自托管、OpenAI兼容文字转语音API服务器。',
    es: 'Servidor API de texto a voz autoalojado y compatible con OpenAI, construido sobre las voces en línea gratuitas de Microsoft Edge.',
    pt: 'Servidor de API de texto para voz auto-hospedado e compatível com OpenAI, construído sobre as vozes on-line gratuitas do Microsoft Edge.',
    ar: 'خادم API مستضاف ذاتيًا ومتوافق مع OpenAI لتحويل النص إلى كلام، مبني على الأصوات المجانية عبر الإنترنت من Microsoft Edge.',
    ko: 'Microsoft Edge의 무료 온라인 음성을 기반으로 한 셀프호스팅 OpenAI 호환 텍스트 음성 변환 API 서버.',
  },
  reviewSlug: 'openai-edge-tts-review', // dedicated PromptQuorum review — added 2026-09-19
  lastVerifiedDate: '2026-09-18',
}
