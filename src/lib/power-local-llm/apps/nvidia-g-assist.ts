// Local AI App Directory — NVIDIA Project G-Assist (layer: assistant)
// Added from apps-to-add.md Section B (Hans sign-off 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// Source doc's concern was "no confirmed update date within 6 months" — resolved:
// confirmed active August 2026 update (new laptop commands, driver 580.97+ requirement
// as of 2026-08-18). Closed-source NVIDIA software — no public star count.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'nvidia-g-assist',
  name: 'NVIDIA Project G-Assist',
  categories: ['personal-assistants'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['win'],
  worksWith: null,
  engine: 'builtin',
  license: 'Proprietary',
  price: 'free',
  hardware: null, // TODO: requires an RTX GPU with 6GB+ VRAM per NVIDIA's stated minimum — needs manual research to convert to ToolRecordHardware
  stars: null, // closed source, no public repo
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['chat', 'agent'],
  url: 'nvidia.com/en-us/software/nvidia-app/g-assist',
  tagline: {
    en: 'On-device AI assistant for GeForce RTX PCs, running a local small language model to tune games and system settings',
    de: 'On-Device-KI-Assistent für GeForce-RTX-PCs, der ein lokales kleines Sprachmodell nutzt, um Spiele- und Systemeinstellungen anzupassen',
    fr: 'Assistant IA sur l\'appareil pour PC GeForce RTX, exécutant un petit modèle de langage local pour ajuster les jeux et les paramètres système',
    ja: 'GeForce RTX PC向けのオンデバイスAIアシスタント。ローカルの小型言語モデルでゲームやシステム設定を調整',
    zh: '面向GeForce RTX电脑的设备端AI助手，运行本地小型语言模型以调整游戏和系统设置',
    es: 'Asistente de IA en el dispositivo para PCs GeForce RTX, que ejecuta un modelo de lenguaje pequeño local para ajustar juegos y configuraciones del sistema',
    pt: 'Assistente de IA no dispositivo para PCs GeForce RTX, executando um pequeno modelo de linguagem local para ajustar jogos e configurações do sistema',
    ar: 'مساعد ذكاء اصطناعي على الجهاز لأجهزة GeForce RTX، يشغّل نموذج لغة صغيراً محلياً لضبط الألعاب وإعدادات النظام',
    ko: 'GeForce RTX PC용 온디바이스 AI 어시스턴트, 로컬 소형 언어 모델을 실행해 게임 및 시스템 설정을 조정',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
