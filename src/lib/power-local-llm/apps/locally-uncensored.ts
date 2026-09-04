// Local AI App Directory — Locally Uncensored (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'locally-uncensored',
  name: 'Locally Uncensored',
  layer: 'desktop',
  locality: 'local',
  platforms: ['win'],
  worksWith: null,
  engine: 'builtin',
  license: 'AGPL-3.0',
  price: 'paid',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 1400,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['chat', 'code', 'image'],
  url: 'locallyuncensored.com',
  tagline: {
    en: 'Chat / code / images / video / LoRA, one installer',
    de: 'Chat / Code / Bilder / Video / LoRA, ein Installer',
    fr: 'Studio de bureau tout-en-un : chat non censuré, agent de code, génération d\'images et de vidéo (FLUX, Wan, HunyuanVideo), et entraînement de LoRA de personnages — un seul installeur, sans Docker ni cloud. Fonctionne comme couche par-dessus Ollama et ComfyUI, avec accès distant depuis un téléphone via QR code. Créé par un développeur indépendant qui se présente sous le nom de David (pseudo GitHub [PurpleDoubleD](https://github.com/PurpleDoubleD)), et qui a lancé le projet après s\'être lassé de jongler entre un terminal Ollama et une douzaine d\'onglets ComfyUI ouverts en parallèle pour chaque tâche — sa description du problème sur [dev.to](https://dev.to/purpledoubled/i-built-an-all-in-one-local-ai-app-chat-image-gen-and-video-gen-in-one-ui-2dda) est devenue le point de départ documenté du projet. Publié sous licence AGPL-3.0 sur [GitHub](https://github.com/PurpleDoubleD/locally-uncensored) (environ 1,4k étoiles), avec des versions quasi hebdomadaires en 2026 (v2.6.7 fin août) et dix-sept cycles de tests manuels par des utilisateurs bêta avant chaque sortie stable, selon les notes de version. Alternative directe à Jan, GPT4All et Open WebUI pour le chat, à ComfyUI pour l\'image/vidéo, et à Backyard AI ou SillyTavern pour le jeu de rôle — la différence est de réunir les quatre dans une seule interface.',
    ja: 'チャット / コード / 画像 / 動画 / LoRA、インストーラー1つで完結',
    zh: '聊天 / 代码 / 图像 / 视频 / LoRA，单一安装包',
    es: 'Chat / Código / Imágenes / Video / LoRA, un solo instalador',
    pt: 'Chat / Código / Imagens / Vídeo / LoRA, um único instalador',
    ar: 'دردشة / كود / صور / فيديو / LoRA، مُثبِّت واحد',
    ko: '채팅 / 코드 / 이미지 / 비디오 / LoRA, 설치 파일 하나로',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
