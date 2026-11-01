// Local AI App Directory — LLM Vision: Home Assistant integration that sends camera images, video and Frigate events to a multimodal LLM
// (layer: smart-home camera analysis; runs inside Home Assistant). Added 2026-11-01 on request (link came from localhosted.com).
// Facts verified 2026-11-01 against: llmvision.org (home, /glimpse), github.com/valentinfrlch/ha-llmvision (GitHub API: Apache-2.0, not archived,
// latest release v1.7.2 published 2026-09-03, last push 2026-09-17 "Publish v1.8.0 beta blueprint", repo created 2024-05-14; hacs.json has no
// minimum Home Assistant version; custom_components/llmvision/manifest.json says version 1.7.1 and iot_class "cloud_polling"; the website still
// quotes "v1.7.0"), PRIVACY.md (effective 2026-02-15: no telemetry in the integration, Google Analytics on the website only) and the
// README install steps (HACS -> restart -> Devices & services -> media folder -> add a provider entry).
// LOCALITY = hybrid: the integration runs inside the user's own Home Assistant, but it does no inference itself — every image goes to the AI provider
// the user configures: Ollama, Open WebUI or LocalAI on their own hardware (fully local), or OpenAI, Anthropic, Google, OpenRouter, AWS, Groq, Azure (cloud).
// The maker's own open-weight "Glimpse-v1" (4B vision-language model, Beta, Hugging Face + Ollama Library) is the local option the site promotes; its
// licence is not named on the site. Not tested hands-on. Install effort left unset: HACS install happens in the Home Assistant UI (no terminal), but a
// working Home Assistant, HACS and a separate AI provider are prerequisites, which fits none of the four tiers cleanly.
// Maker: Valentin Fröhlich (site copyright line; GitHub user valentinfrlch; manifest codeowners also list @TheRealFalseReality). Maker not contacted.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llm-vision',
  name: 'LLM Vision',
  categories: ['smart-home-ai', 'security-cameras-nvr'],
  interfaces: ['plugin'],
  locality: 'hybrid', // runs inside Home Assistant; analysis happens in the provider you configure: Ollama / Open WebUI / LocalAI on your hardware, or cloud APIs (OpenAI, Anthropic, Google, ...)
  platforms: ['selfhosted'], // an integration for a self-hosted Home Assistant installed through HACS; no standalone app, no OS builds
  worksWith: ['Home Assistant', 'Frigate', 'Ollama', 'Open WebUI', 'LocalAI', 'OpenAI', 'Anthropic', 'Google Gemini', 'OpenRouter', 'AWS Bedrock', 'Groq', 'Azure AI', 'HACS'],
  engine: 'external', // no inference engine of its own; sends frames to the configured provider
  license: 'Apache-2.0', // GitHub API licence key apache-2.0; README "Apache-2.0 license" (the website links the LICENSE file without naming it)
  price: 'free', // the integration is free; cloud providers bill per query, donations via Buy Me a Coffee are optional (llmvision.org)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // depends entirely on the chosen provider and model; the site names no requirement
  stars: 1520, // github.com/valentinfrlch/ha-llmvision, GitHub API 2026-11-01
  addedDate: '2026-11-01',
  status: 'listed',
  uses: ['agent'],
  url: 'llmvision.org',
  storeLinks: {
    github: 'https://github.com/valentinfrlch/ha-llmvision',
    web: 'https://llmvision.org',
  },
  tagline: {
    en: 'Home Assistant integration that analyzes camera images, video and Frigate events with a vision LLM: local through Ollama, Open WebUI or LocalAI, or cloud providers',
    de: 'Home-Assistant-Integration, die Kamerabilder, Videos und Frigate-Ereignisse mit einem Vision-LLM auswertet: lokal über Ollama, Open WebUI oder LocalAI oder über Cloud-Anbieter',
    fr: 'Intégration Home Assistant qui analyse images de caméra, vidéos et événements Frigate avec un LLM de vision : en local via Ollama, Open WebUI ou LocalAI, ou via des fournisseurs cloud',
    ja: 'カメラ画像・動画・Frigateイベントをビジョン対応LLMで解析するHome Assistant連携。Ollama、Open WebUI、LocalAIでローカル実行も、クラウドプロバイダーの利用も可能',
    zh: '用视觉 LLM 分析摄像头图像、视频和 Frigate 事件的 Home Assistant 集成：可通过 Ollama、Open WebUI 或 LocalAI 本地运行，也可使用云端服务商',
    es: 'Integración de Home Assistant que analiza imágenes de cámara, vídeo y eventos de Frigate con un LLM de visión: en local con Ollama, Open WebUI o LocalAI, o con proveedores en la nube',
    pt: 'Integração do Home Assistant que analisa imagens de câmera, vídeo e eventos do Frigate com um LLM de visão: local via Ollama, Open WebUI ou LocalAI, ou com provedores na nuvem',
    ar: 'تكامل لـ Home Assistant يحلل صور الكاميرات والفيديو وأحداث Frigate بنموذج لغوي بصري: محليًا عبر Ollama أو Open WebUI أو LocalAI، أو عبر مزودي السحابة',
    ko: '카메라 이미지, 영상, Frigate 이벤트를 비전 LLM으로 분석하는 Home Assistant 통합: Ollama, Open WebUI, LocalAI로 로컬 실행하거나 클라우드 제공업체 사용 가능',
  },
  reviewSlug: 'llm-vision-review',
  pqReview: {
    date: '2026-11-01',
    version: '1.7.2',
    versionSourceUrl: 'https://github.com/valentinfrlch/ha-llmvision/releases/tag/v1.7.2',
  },
  verdict: 'Best for Home Assistant users who want camera events described and queryable by a vision model and can run Ollama, Open WebUI or LocalAI themselves; limited by the need for a separate AI provider (cloud providers receive your frames), no stated minimum Home Assistant version and speed and accuracy PromptQuorum could not test.',
  lastVerifiedDate: '2026-11-01',
  lastUpstreamUpdate: '2026-09-17', // GitHub API: repo pushed_at 2026-09-17 ("Publish v1.8.0 beta blueprint"); latest release v1.7.2 on 2026-09-03; read 2026-11-01 (45 days, no stale warning)
  lastUpstreamUpdateSource: 'https://github.com/valentinfrlch/ha-llmvision',
}
