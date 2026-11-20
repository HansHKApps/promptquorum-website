// Local AI App Directory — Modly by Lightning Pixel (layer: 3D generation, desktop)
// Added 2026-11-20 from the owner's list (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-20: official website (homepage, docs/faq, docs/workflow, docs/models, extensions catalog, roadmap), GitHub repository, README, LICENSE,
// GitHub API (repo, releases, commits), release v0.5.0, official extension repos (hunyuan3d-mini, trellis2-gguf).
// Notes:
// - License: LICENSE file is MIT plus a credit clause for forks ("Based on Modly ... by Lightning Pixel"); GitHub API reports NOASSERTION because of that addendum.
// - Model licences: the official extension repos carry no LICENSE file and the Modly docs state none for Hunyuan3D 2, TripoSG or Trellis.2; the review says so and does not claim any.
// - Hardware: website structured data lists "NVIDIA GPU (6 GB VRAM minimum)", docs/faq says "An NVIDIA GPU. VRAM needs depend on the model — quantized GGUF variants run on more modest hardware".
//   The README additionally describes AMD ROCm support (Linux and Windows) and Apple Silicon macOS builds, so the maker's pages are not fully consistent; the review states this.
// - Platforms: homepage hero says "Windows & Linux" and the docs install page text says Windows or Linux, but the download section and GitHub release v0.5.0 ship a macOS arm64 .dmg; README says Apple Silicon only for macOS.
// - Install: GitHub release v0.5.0 (2026-11-18) ships Modly-Setup-0.5.0.exe, Modly-0.5.0-arm64.dmg, Modly-0.5.0.AppImage; homepage download section lists .exe, AppImage/.deb and .dmg.
// - HQ country: the site has no privacy policy, imprint, terms, about or contact page (all return 404); the repo LICENSE names only "Lightning Pixel" (GitHub user). No country named => no flag.
// - Version: v0.5.0 is the latest stable release (2026-11-18); not a pre-release.
// Last upstream update: 2026-11-19 (GitHub API pushed_at; latest release v0.5.0 2026-11-18, last commit on main 2026-11-18) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'modly',
  name: 'Modly',
  categories: ['3d-generation'],
  interfaces: ['desktop'],
  locality: 'local', // maker states inference runs on your GPU and works offline once an extension and its weights are downloaded (docs/faq)
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Hunyuan3D 2', 'TripoSG', 'Trellis.2', 'Blender', 'Unity', 'Unreal Engine'],
  engine: 'builtin', // Python backend bundled with the app; models are added as extensions (GitHub repositories)
  license: 'MIT', // LICENSE: MIT plus a credit requirement for forks
  price: 'free', // "100% free and open source (MIT). No credits, no subscriptions" (docs/faq); GitHub Sponsors is optional
  hardware: { ramGb: null, vramGb: 6, cpuOnly: false, variesByModel: true }, // site structured data: "NVIDIA GPU (6 GB VRAM minimum)"; docs/faq: VRAM depends on the model, GGUF variants need less; read 2026-11-20
  stars: 8725,
  addedDate: '2026-11-20',
  status: 'listed',
  uses: ['image'],
  url: 'modly3d.app',
  storeLinks: {
    github: 'https://github.com/lightningpixel/modly',
    web: 'https://modly3d.app',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-20 GitHub release v0.5.0 (2026-11-18) listed the assets Modly-Setup-0.5.0.exe, Modly-0.5.0-arm64.dmg and Modly-0.5.0.AppImage, and the modly3d.app download section offered a Windows .exe installer, Linux AppImage/.deb and a macOS .dmg installer. A 3D model extension is then installed from inside the app by pasting a GitHub URL, and its weights are downloaded separately.',
  tagline: {
    en: 'Desktop app that generates 3D meshes from an image or a text prompt with open-source AI models running on your own GPU; exports GLB, OBJ, STL and PLY.',
    de: 'Desktop-App, die aus einem Bild oder einem Text-Prompt 3D-Meshes erzeugt, mit Open-Source-KI-Modellen auf Ihrer eigenen GPU; Export als GLB, OBJ, STL und PLY.',
    fr: 'Application de bureau qui génère des maillages 3D à partir d\'une image ou d\'un prompt texte avec des modèles IA open source exécutés sur votre propre GPU ; export en GLB, OBJ, STL et PLY.',
    ja: '画像またはテキストプロンプトから、ご自身のGPU上で動くオープンソースAIモデルを使って3Dメッシュを生成するデスクトップアプリ。GLB、OBJ、STL、PLYで書き出せます。',
    zh: '桌面应用，使用在您自己 GPU 上运行的开源 AI 模型，根据图片或文本提示词生成 3D 网格，可导出 GLB、OBJ、STL 和 PLY。',
    es: 'App de escritorio que genera mallas 3D a partir de una imagen o un prompt de texto con modelos de IA de código abierto que se ejecutan en tu propia GPU; exporta GLB, OBJ, STL y PLY.',
    pt: 'App de desktop que gera malhas 3D a partir de uma imagem ou de um prompt de texto com modelos de IA de código aberto rodando na sua própria GPU; exporta GLB, OBJ, STL e PLY.',
    ar: 'تطبيق سطح مكتب يولّد مجسمات ثلاثية الأبعاد (Mesh) من صورة أو من وصف نصي بنماذج ذكاء اصطناعي مفتوحة المصدر تعمل على بطاقتك الرسومية، ويصدّر بصيغ GLB وOBJ وSTL وPLY.',
    ko: '이미지나 텍스트 프롬프트에서 내 GPU에서 실행되는 오픈소스 AI 모델로 3D 메시를 생성하는 데스크톱 앱으로, GLB, OBJ, STL, PLY로 내보낼 수 있습니다.',
  },
  reviewSlug: 'modly-review',
  pqReview: {
    date: '2026-11-20',
    version: '0.5.0',
    versionSourceUrl: 'https://github.com/lightningpixel/modly/releases/tag/v0.5.0',
  },
  lastVerifiedDate: '2026-11-20',
  lastUpstreamUpdate: '2026-11-19', // GitHub API pushed_at 2026-11-19T21:35Z (read 2026-11-20); latest stable release v0.5.0 published 2026-11-18; last commit on main 2026-11-18
  lastUpstreamUpdateSource: 'https://github.com/lightningpixel/modly (last push 2026-11-19; latest release v0.5.0 on 2026-11-18)',
}
