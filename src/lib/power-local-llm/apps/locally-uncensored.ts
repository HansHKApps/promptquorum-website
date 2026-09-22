// Local AI App Directory — Locally Uncensored (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'locally-uncensored',
  name: 'Locally Uncensored',
  categories: ['general-chat-clients', 'image-generation', 'video-generation', 'fine-tuning-lora', 'agent-frameworks'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['win', 'linux'], // corrected 2026-09-22 per maker (David, LU Labs): .exe, .deb, .rpm, .AppImage — directory previously listed Windows only
  worksWith: ['Ollama'],
  engine: 'builtin',
  license: 'AGPL 3.0',
  price: 'freemium', // local desktop app is free/AGPL; only the optional LU Labs Cloud add-on is paid — see locally-uncensored-review.ts pricing section and NOTE ON PRICING comment below
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // per PromptQuorum's own locally-uncensored-review.ts research (against github.com/PurpleDoubleD/locally-uncensored and locallyuncensored.com): "This app has no fixed hardware minimum of its own beyond running a supported OS" — it is a front end over Ollama/llama.cpp/KoboldCpp/LocalAI or its own LU Engine, so RAM/VRAM/CPU-only depend entirely on the backend and model chosen, verified 2026-09-13
  stars: 1750, // per maker (David, LU Labs), 2026-09-22: "about 1,750 stars today"
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat', 'code', 'agent', 'image'],
  url: 'locallyuncensored.com',
  tagline: {
    en: 'Chat / code / images / video / LoRA, one installer',
    de: 'Chat / Code / Bilder / Video / LoRA, ein Installer',
    fr: 'Chat / code / images / vidéo / LoRA, un seul installeur',
    ja: 'チャット / コード / 画像 / 動画 / LoRA、インストーラー1つで完結',
    zh: '聊天 / 代码 / 图像 / 视频 / LoRA，单一安装包',
    es: 'Chat / Código / Imágenes / Video / LoRA, un solo instalador',
    pt: 'Chat / Código / Imagens / Vídeo / LoRA, um único instalador',
    ar: 'دردشة / كود / صور / فيديو / LoRA، مُثبِّت واحد',
    ko: '채팅 / 코드 / 이미지 / 비디오 / LoRA, 설치 파일 하나로',
  },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  // videoGeneration/nodeWorkflow added 2026-09-22 per maker (David, LU Labs): runs Wan 2.2/LTX-2/HunyuanVideo/FramePack
  // through the same one-click ComfyUI setup as images, with no node graph exposed to the user.
  // loraQlora/webUi added 2026-09-22 per maker: built-in image LoRA trainer with a GUI tab (Models > LoRAs,
  // added in v3.0.1). multiGpu/lowVram/exportGguf left unset — not stated by the maker, and exportGguf in
  // particular is an LLM-fine-tuning concept (GGUF/Ollama) that doesn't apply to this image LoRA trainer.
  compare: { localLlm: true, ollama: true, mcp: true, fileChat: true, memory: true, videoGeneration: true, nodeWorkflow: false, loraQlora: true, webUi: true },
  lastVerifiedDate: '2026-09-22', // per maker (David, LU Labs) technical corrections email
  reviewSlug: 'locally-uncensored-review', // dedicated PromptQuorum review
  pqReview: {
    date: '2026-09-22',
    version: '3.0.2',
    versionSourceUrl: 'https://github.com/PurpleDoubleD/locally-uncensored/releases',
  },
  founderReviewedDate: '2026-09-22',
  founder: {
    who: {
      en: 'David, developer, LU Labs',
      de: 'David, Entwickler, LU Labs',
      fr: 'David, développeur, LU Labs',
      ja: 'David氏、開発者、LU Labs',
      zh: 'David,开发者,LU Labs',
      es: 'David, desarrollador, LU Labs',
      pt: 'David, desenvolvedor, LU Labs',
      ar: 'David، مطور، LU Labs',
      ko: 'David, 개발자, LU Labs',
    },
    why: 'My own local AI setup was a terminal running Ollama and a row of ComfyUI tabs, and every task meant switching between them. I wanted one installer that puts chat, a coding agent, image, video, and LoRA training on one screen, on my own PC, with nothing leaving it.',
    best: 'The local app is free and AGPL — you download it, it finds the backend you already have or installs its own, and you pick the model. The app adds no filter of its own on top of whatever open-weight model you load.',
    limits: 'No macOS build yet, and the phone-pairing experience today runs in the browser rather than as a dedicated mobile app.',
    providedDate: '2026-09-22',
    // Verbatim, same text as the "From the Maker" section in the dedicated
    // review article (src/lib/power-local-llm/articles/locally-uncensored-review.ts).
    fullQuote: [
      'I built Locally Uncensored because my own local AI setup was a terminal running Ollama and a row of ComfyUI tabs, and every task meant switching between them. I wanted one installer that puts chat, a coding agent, image, video and LoRA training on one screen, on my own PC, with nothing leaving it.',
      'The local app is free and AGPL, and that is the part I care about most. You download it, it finds the backend you already have or installs its own, and you pick the model. The name is about the model choice: the app adds no filter of its own, so an open-weight model behaves the way its publisher shipped it.',
      'There is a cloud side for people whose hardware cannot carry the big image and video models. The models there are uncensored too, same idea as local, just on rented GPUs. It is optional, it runs on credits that do not expire, and every run shows its price before you start it. The local app never depends on it.',
      'Where it is going: a Mac build, a mobile app for the phone pairing that today runs in the browser, and more of the video work, camera control in particular. I ship often and most of what goes in comes from GitHub issues and Reddit threads. If something in the app annoys you, the fastest way to change it is to tell me.',
    ],
  },
}
