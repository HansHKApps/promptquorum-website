// Local AI App Directory — Facet: self-hosted photo scoring, culling and gallery with local face recognition and semantic search
// (layer: photo library / culling tool served from your own machine, Images & Video / Vision & OCR + Local search)
// Added 2026-10-28 at the operator's request (link from localhosted.com). No maker outreach — independent PromptQuorum entry; no founder-review badge; not hands-on tested.
// Facts verified 2026-10-28 against: ncoevoet.github.io/facet (home), the GitHub repo and API (ncoevoet/facet: default branch master, created 2026-02-16,
// pushed_at 2026-10-28T08:44Z, latest commit 2026-10-28T08:43Z, API license NOASSERTION because the LICENSE file is a custom-headed MIT text, ~322 stars),
// Releases API (v1.25.0 published 2026-10-27T12:20Z, v1.24.0 2026-10-26, v1.23.1 2026-10-24; no release assets, so no installer binary), README.md,
// docs/INSTALLATION.md (profiles, first-run download sizes, feature requirements, commercial install), docs/THIRD_PARTY_MODELS.md (per-model licences),
// docs/CONFIGURATION.md (vlm_backend, updates), docs/AGENTS.md (MCP endpoint on by default), docs/DEPLOYMENT.md and viewer.py (binds 0.0.0.0, viewer.password
// empty by default), and client source (map tiles from tile.openstreetmap.org, Photon geocoder in the GPS edit dialog, update check to api.github.com).
// Last upstream update: 2026-11-05 (latest release v1.28.0 and last push, both 2026-11-05; re-verified 2026-11-06) -> NOT stale (3-month rule).
// 2026-11-02 refresh: v1.27.0 docs add a per-user Windows MSI that NO release ships (build with installer\build-msi.ps1 or take the facet-msi CI artifact); 24gb first-run download 19.3 GB; stars 332.
// Facet is NOT an LLM chat app: its AI is image-quality scoring (TOPIQ/LIQE via pyiqa on GPU/legacy profiles), CLIP or SigLIP 2 embeddings for semantic search,
// InsightFace faces, MediaPipe blendshapes and BiRefNet saliency. An optional VLM (tags, captions, critique) runs in-process on the 12gb/16gb/24gb GPU profiles or
// on a remote Ollama/OpenAI-compatible server via `vlm_backend` (then that feature leaves the machine). Offline use after the first-run model download is NOT verified.
// Licence caveat stated in the review: the code is MIT, but pyiqa (TOPIQ, LIQE) and the InsightFace weights are non-commercial; `licensing.mode: commercial` swaps in permissive models.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'facet',
  name: 'Facet',
  categories: ['photo-libraries', 'vision-ocr', 'local-search'],
  interfaces: ['web', 'cli'], // web gallery (Angular + FastAPI viewer, installable PWA) on port 5000, scanned and driven by facet.py command-line tools
  locality: 'local', // README: "Everything runs on your machine; no cloud, accounts, or API keys"; optional outbound: update check (GitHub), OSM map tiles, Photon geocoder, model downloads, and a remote Ollama/OpenAI-compatible VLM if you configure vlm_backend
  platforms: ['linux', 'mac', 'win', 'web'], // README badge: Windows | macOS | Linux | Docker; INSTALLATION.md (2026-11-02) offers Docker (WSL2 for NVIDIA) or a self-built per-user MSI on Windows; the gallery is a browser UI
  worksWith: ['Docker', 'Ollama', 'OpenAI-compatible servers', 'Lightroom', 'darktable', 'digiKam', 'Immich', 'Model Context Protocol (MCP)'], // README + docs INTEROP/IMMICH/AGENTS
  engine: 'builtin', // scoring, face and embedding models are downloaded and run in-process (Hugging Face, PyIQA, InsightFace); optional remote VLM is a configuration choice
  license: 'MIT', // LICENSE file (GitHub API says NOASSERTION); some default model weights (pyiqa TOPIQ/LIQE, InsightFace) are NOT licensed for commercial use, see THIRD_PARTY_MODELS.md
  price: 'free', // README: "Free, local"; no paid tier found. [Edition] in the docs is an access level (edition password), not a paid edition
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // docs publish no RAM minimum; legacy profile runs everything on CPU (slower); 8gb/12gb/16gb/24gb are NVIDIA VRAM profiles; first-run model download 4.7 GB (legacy) to 19.3 GB (24gb)
  stars: 358, // GitHub API stargazers_count, read 2026-11-06
  addedDate: '2026-10-28',
  status: 'listed',
  uses: ['image', 'serve'],
  url: 'ncoevoet.github.io/facet',
  storeLinks: {
    github: 'https://github.com/ncoevoet/facet',
    web: 'https://ncoevoet.github.io/facet/',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'README Quick Start and docs/INSTALLATION.md checked 2026-10-28: Docker = git clone, copy .env.example to .env and set PHOTOS_DIR, docker compose up -d (GPU profiles use extra compose files); without Docker = git clone, bash install.sh, then python facet.py and python viewer.py; Releases v1.28.0 (2026-11-05) has no binary assets; docs/INSTALLATION.md (re-read 2026-11-02) describes a Windows MSI but says no release ships one (build from a clone or take a CI artifact); no .dmg/.exe/store app; first scan downloads models (4.7 GB legacy to 19.3 GB 24gb per the docs)',
  tagline: {
    en: 'Self-hosted photo scoring, culling and gallery that finds your best shots, bursts and duplicates and groups faces on your own machine, installed with Docker or a script',
    de: 'Selbst gehostete Foto-Bewertung, Aussortierung und Galerie, die beste Aufnahmen, Serienbilder und Duplikate findet und Gesichter auf dem eigenen Rechner gruppiert, Installation per Docker oder Skript',
    fr: 'Notation, tri et galerie de photos auto-hébergés qui repèrent vos meilleures prises, rafales et doublons et regroupent les visages sur votre propre machine, installés avec Docker ou un script',
    ja: '自分のマシンでベストショット・連写・重複写真を見つけ、顔をグループ化する、セルフホスト型の写真スコアリング・選別・ギャラリー。Dockerまたはスクリプトでインストールします',
    zh: '自托管的照片评分、筛选与图库工具，在自己的机器上找出最佳照片、连拍和重复项并对人脸分组，通过 Docker 或脚本安装',
    es: 'Puntuación, selección y galería de fotos autoalojadas que encuentran tus mejores tomas, ráfagas y duplicados y agrupan caras en tu propia máquina; se instala con Docker o un script',
    pt: 'Pontuação, seleção e galeria de fotos auto-hospedadas que encontram suas melhores fotos, rajadas e duplicatas e agrupam rostos na sua própria máquina, instaladas com Docker ou um script',
    ar: 'تقييم وفرز ومعرض صور مستضاف ذاتيًا يعثر على أفضل لقطاتك والصور المتتابعة والمكررة ويجمّع الوجوه على جهازك الخاص، ويُثبَّت عبر Docker أو برنامج نصي',
    ko: '내 컴퓨터에서 최고의 사진, 연사, 중복 사진을 찾고 얼굴을 묶어 주는 셀프 호스팅 사진 점수화·선별·갤러리로, Docker 또는 스크립트로 설치합니다',
  },
  reviewSlug: 'facet-review',
  pqReview: {
    date: '2026-11-06',
    version: 'v1.28.0',
    versionSourceUrl: 'https://github.com/ncoevoet/facet/releases',
  },
  verdict: 'Best for photographers and self-hosters comfortable with Docker or a Python setup who want a free, MIT-licensed tool that scores, culls and browses a large local photo library with face grouping and plain-language search; limited by a developer-style install, a viewer that is open to anyone on the network until you set a password, default model weights that are not licensed for commercial use, an optional remote VLM that leaves the machine, and no hands-on testing by PromptQuorum.',
  lastVerifiedDate: '2026-11-06',
  lastUpstreamUpdate: '2026-11-05', // GitHub API pushed_at 2026-11-05T23:00Z; latest release v1.28.0 published 2026-11-05T23:00Z
  lastUpstreamUpdateSource: 'https://github.com/ncoevoet/facet',
}
