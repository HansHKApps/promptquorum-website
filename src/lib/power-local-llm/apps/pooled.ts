// Local AI App Directory — Pooled (layer: peer-to-peer, browser-based LLM inference pooling multiple devices' GPU memory)
// Added 2026-11-18 at the owner's request. No maker outreach — independent PromptQuorum entry; no founder-review
// badge. NOT hands-on tested. "Pooled" is a generic word, so this entry was verified extra carefully against the
// actual product at pooled.run, not unrelated search results for "GPU pooling."
// Sources read 2026-11-18:
// - pooled.run (homepage: "Peer-to-peer LLM inference in the browser." One device starts a room and gets a code;
//   other devices join with that code, a link, or a QR code. The model's layers are split across the joined
//   devices by each device's available memory, so the group can run a model none of them could run alone. Each
//   device downloads and caches only its own layers. Modes: Chat, and Code (an agent writes, serves, and fixes a
//   small app in a sandboxed local preview, e.g. on port 5173). No pricing page exists (pooled.run/pricing returns
//   HTTP 404, checked 2026-11-18); the nav's "Pricing" link and the product itself are free, no account needed);
// - pooled.run/docs and pooled.run/docs/privacy (browser-based, nothing to install: open pooled.run/room, start or
//   join a room with a code/link/QR, pick a model, press "Start the model." Each device runs its share of the
//   model in a browser tab via WebGPU and exchanges data with other devices over WebRTC. Privacy page: the room
//   host sees every question and answer; other participants do too unless the host restricts visibility in Room
//   settings; devices running model layers handle a "hidden form" of each message that the page says is not plain
//   text but is also not private against a determined peer; the signaling server learns only that devices want to
//   connect and their network addresses, never message content; pooled.run itself receives nothing, since the site
//   is static files. Cached model weights and conversation checkpoints stay on each device and can be cleared/
//   disabled in Room settings. No company name, HQ, or mailing address is stated anywhere on pooled.run or in its
//   privacy page — only the product itself is described — so hqCountry/hqCountrySource are left unset);
// - github.com/Nehanth/pooled (About/README: same product, "nothing to install and no account, and no server does
//   any of the thinking"; MIT license, confirmed via the repo's license field; 658 stars, 98 forks, 681 commits on
//   main, checked 2026-11-18. Run-the-site-locally path: `git clone` + `npx -y serve -l 8080 .`, open
//   http://localhost:8080/room — this is only for running your own copy of the static site, not required to use
//   the hosted pooled.run. CLI: Node.js 22+, no GPU needed — `npx @pooled/cli join <ROOM CODE>` lends a device's
//   GPU to a room; `npx @pooled/cli serve "<invite link or code>"` starts a local OpenAI-/Anthropic-compatible API
//   bridge on 127.0.0.1:8080, optionally gated by a `POOLED_TOKEN` API key. SECURITY.md is linked for the full
//   threat model);
// - api.github.com/repos/Nehanth/pooled (created_at 2026-09-01; pushed_at 2026-11-03; releases: v2.0.0 (2026-10-16),
//   v1.0.0 (2026-09-28), v0.2.0 (2026-09-07), checked 2026-11-18).
// Notes:
// - License: MIT, confirmed via the GitHub repository's license field.
// - locality 'local': model inference runs on the joined devices' own GPUs via WebGPU; pooled.run itself is a
//   static site that receives no room content (per pooled.run/docs/privacy). Marked 'local' rather than 'hybrid'
//   because there is no first-party hosted compute tier at all — every token is computed on a user's own device,
//   even though a signaling/relay server (no message content) is needed to connect devices.
// - engine 'builtin': Pooled ships its own browser-based inference engine (WebGPU, layer-splitting across devices)
//   rather than driving an external one.
// - price 'free': no pricing page exists (pooled.run/pricing is a 404, checked 2026-11-18); the product and its
//   CLI are free with no account required.
// - interfaces 'web' (the hosted room at pooled.run/room is the primary and only required way to use it) and 'cli'
//   (the optional `@pooled/cli` lets a headless device lend its GPU or exposes a local OpenAI-/Anthropic-compatible
//   API bridge, per the GitHub README).
// - installEffort 'hosted': the primary, officially supported way to use Pooled is opening pooled.run/room in a
//   browser — "nothing to install and no account," per the README and the docs page, checked 2026-11-18. The
//   optional `@pooled/cli` (one `npx @pooled/cli join <code>` command) is a one-command-tier alternative for a
//   headless device, not the easiest path a newcomer is pointed to, so the tile tier stays 'hosted' per the
//   feature-app-post skill's "easiest officially supported path" rule.
// - worksWith: null — Pooled is not documented as integrating with a specific named third-party AI client/agent;
//   its CLI exposes an OpenAI-/Anthropic-compatible local API that other tools could in principle call, but no
//   specific product name is stated, so this is left unresearched rather than guessed.
// - hardware: variesByModel — the requirement is combined device memory across the room sufficient to fit whichever
//   model is chosen, not a fixed per-device floor; WebGPU is required in the browser, but no fixed RAM/VRAM number
//   applies project-wide, per pooled.run/docs.
// Last upstream update: 2026-11-03 (GitHub API `pushed_at`, newer than the v2.0.0 release tagged 2026-10-16) →
// NOT stale (3-month rule: 15 days before this 2026-11-18 check).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'pooled',
  name: 'Pooled',
  categories: ['distributed-inference', 'in-browser-webgpu'],
  interfaces: ['web', 'cli'],
  exposesApi: true, // optional @pooled/cli serve exposes an OpenAI-/Anthropic-compatible local API bridge, per github.com/Nehanth/pooled README
  locality: 'local', // all inference runs on joined devices' own GPUs via WebGPU; pooled.run is static files that receive no room content
  platforms: ['web'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT', // github.com/Nehanth/pooled license field, checked 2026-11-18
  price: 'free', // pooled.run/pricing returns HTTP 404 (checked 2026-11-18); no account or payment required anywhere on the site
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // WebGPU required; combined room memory must fit the chosen model, no fixed per-device minimum, per pooled.run/docs
  stars: 658, // github.com/Nehanth/pooled, checked 2026-11-18
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['chat', 'code', 'serve'],
  url: 'pooled.run',
  storeLinks: {
    web: 'https://pooled.run',
    github: 'https://github.com/Nehanth/pooled',
  },
  installEffort: 'hosted',
  installEvidence: 'pooled.run and pooled.run/docs, checked 2026-11-18: "Nothing to install and no account" — open pooled.run/room, start or join a room with a code/link/QR, pick a model, press "Start the model." The GitHub README restates "There is nothing to install and no account, and no server does any of the thinking." The optional `npx @pooled/cli join <ROOM CODE>` / `npx @pooled/cli serve "<invite link or code>"` commands (Node.js 22+) are a one-command-tier alternative for a headless device or an API bridge, not the primary path.',
  tagline: {
    en: 'Free, open-source (MIT) peer-to-peer LLM inference in the browser — pool several devices\' GPU memory in a room to run large open models with no install and no account',
    de: 'Kostenlose, quelloffene (MIT) Peer-to-Peer-LLM-Inferenz im Browser — bündeln Sie den GPU-Speicher mehrerer Geräte in einem Raum, um große offene Modelle ohne Installation und ohne Konto auszuführen',
    fr: 'Inférence LLM pair à pair gratuite et open source (MIT) dans le navigateur — regroupez la mémoire GPU de plusieurs appareils dans une salle pour exécuter de grands modèles ouverts sans installation ni compte',
    ja: '無料・オープンソース（MIT）のブラウザ内ピアツーピアLLM推論 — 複数デバイスのGPUメモリをルームでプールし、インストールもアカウントも不要で大規模オープンモデルを実行',
    zh: '免费开源（MIT）的浏览器内对等（P2P）LLM 推理 —— 在一个房间里汇集多台设备的 GPU 显存，无需安装、无需账号即可运行大型开源模型',
    es: 'Inferencia LLM entre pares gratuita y de código abierto (MIT) en el navegador: agrupa la memoria GPU de varios dispositivos en una sala para ejecutar grandes modelos abiertos sin instalación ni cuenta',
    pt: 'Inferência LLM ponto a ponto gratuita e de código aberto (MIT) no navegador — agrupe a memória de GPU de vários dispositivos em uma sala para executar grandes modelos abertos sem instalação e sem conta',
    ar: 'استدلال نماذج لغوية كبيرة من نظير إلى نظير، مجاني ومفتوح المصدر (MIT)، يعمل في المتصفح — يجمع ذاكرة GPU لعدة أجهزة داخل غرفة واحدة لتشغيل نماذج مفتوحة كبيرة دون تثبيت أو حساب',
    ko: '무료 오픈소스(MIT) 브라우저 기반 P2P LLM 추론 — 여러 기기의 GPU 메모리를 방에 모아 설치나 계정 없이 대형 오픈 모델을 실행',
  },
  reviewSlug: 'pooled-review',
  // Comparison attributes: verified against pooled.run, pooled.run/docs, and github.com/Nehanth/pooled on 2026-11-18;
  // a missing key means not stated there, never false.
  compare: { openaiApi: true, cpuInference: false, distributed: true },
  pqReview: {
    date: '2026-11-18',
    version: '2.0.0',
    versionSourceUrl: 'https://github.com/Nehanth/pooled/releases',
  },
  verdict: 'Best for anyone who wants to try running a large open model across several of their own devices for free, with nothing to install and no account — weaker fit for anyone needing guaranteed prompt privacy (room participants and layer-holding devices can see or partially reconstruct conversation content) or a single-device, offline-only setup.',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-03', // github.com/Nehanth/pooled API: pushed_at 2026-11-03, newer than the v2.0.0 release tagged 2026-10-16; checked 2026-11-18
  lastUpstreamUpdateSource: 'https://github.com/Nehanth/pooled',
}
