// Local AI App Directory — Tina (layer: mobile / iOS)
// Added 2026-10-04 from the app queue. Facts verified against the App Store listing (id6751924571)
// on 2026-10-04. No public repository or product site was found (the developer's GitHub profile has
// no Tina repo; only a privacy-policy page is linked), so licence is recorded as closed source.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'tina',
  name: 'Tina',
  categories: ['general-chat-clients'],
  interfaces: ['desktop', 'mobile'],
  locality: 'local',
  platforms: ['ios', 'mac'], // listing requires iOS 26.0+, macOS 26.0+ (Apple silicon M1 or later) and visionOS 26.0+; visionOS has no OSKey so it is not set
  worksWith: ['Ollama', 'llama.cpp', 'ComfyUI'],
  engine: 'both', // chats with on-device models AND with models served from your own Ollama / llama.cpp server or homelab
  license: 'Closed source',
  price: 'freemium', // free download; listing shows Tina Pro $1.99 and a $12.99 yearly in-app purchase — verified 2026-10-04
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // requirement depends on whether you use on-device models or a remote server; the listing publishes no RAM figure
  stars: null,
  addedDate: '2026-10-04',
  status: 'listed',
  uses: ['phone', 'chat', 'image'],
  url: 'apps.apple.com/us/app/tina-private-local-ai/id6751924571',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/tina-private-local-ai/id6751924571',
  },
  tagline: {
    en: 'iPhone/Mac client for your own Ollama, llama.cpp and ComfyUI servers, plus on-device models',
    de: 'iPhone/Mac-Client für eigene Ollama-, llama.cpp- und ComfyUI-Server, plus Modelle auf dem Gerät',
    fr: 'Client iPhone/Mac pour vos serveurs Ollama, llama.cpp et ComfyUI, avec modèles sur l’appareil',
    ja: '自前のOllama・llama.cpp・ComfyUIサーバーに接続できるiPhone/Mac向けクライアント。オンデバイスモデルにも対応',
    zh: '可连接自建Ollama、llama.cpp和ComfyUI服务器的iPhone/Mac客户端，也支持设备端模型',
    es: 'Cliente iPhone/Mac para tus servidores Ollama, llama.cpp y ComfyUI, con modelos en el dispositivo',
    pt: 'Cliente iPhone/Mac para seus servidores Ollama, llama.cpp e ComfyUI, com modelos no dispositivo',
    ar: 'عميل iPhone/Mac لخوادم Ollama وllama.cpp وComfyUI الخاصة بك، مع نماذج على الجهاز',
    ko: '내 Ollama·llama.cpp·ComfyUI 서버에 연결하는 iPhone/Mac 클라이언트, 온디바이스 모델도 지원',
  },
  reviewSlug: 'tina-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: {
    date: '2026-10-04', // 1.3.8 = version shown on the App Store listing on that date
    version: '1.3.8',
    versionSourceUrl: 'https://apps.apple.com/us/app/tina-private-local-ai/id6751924571',
  },
  // Comparison attributes: each value taken from the App Store listing on 2026-10-04; a missing key = not stated there, never false.
  compare: { builtInEngine: true, ollama: true, voice: true },
  lastVerifiedDate: '2026-10-04',
}
