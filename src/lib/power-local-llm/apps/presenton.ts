// Local AI App Directory — Presenton: open-source AI presentation generator (layer: slide/deck generator, document-driven)
// Added 2026-10-24. Facts verified 2026-10-24 against presenton.ai (home, /download, /pricing, /privacy-policy "Presenton Cloud Privacy
// Policy", last updated 2026-04-17), the GitHub repo presenton/presenton (README, Apache-2.0 LICENSE, GitHub API: default-branch
// commits, Releases) and download.presenton.ai.
// Latest desktop release electron-v0.9.11-beta published 2026-09-21 (assets: .dmg, .AppImage, .deb; no .exe). Newest .exe on GitHub
// Releases and download.presenton.ai is 0.8.7-beta (2026-06-08), although the README still advertises a Windows .exe.
// Newest default-branch commit 2026-10-22 ("Simplify presentation deletion dialogs with neutral styling").
// Docker: `docker run -it --name presenton -p 5001:80 -v "./app_data:/app_data" ghcr.io/presenton/presenton:latest`, UI at localhost:5001.
// Cloud plan prices are rendered by a billing service and were not readable from the page source; no price is stated for them.
// Category: the directory has no presentation category yet; filed under document-pdf-chat (documents/prompts in, decks out). Flagged for the owner.
// No `compare` block: document-pdf-chat comparison attributes do not describe slide generation. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'presenton',
  name: 'Presenton',
  categories: ['document-pdf-chat'],
  interfaces: ['desktop', 'web'],
  locality: 'hybrid', // README: text, image and search providers are user-chosen; Ollama/LM Studio keep generation local, cloud providers and the managed Presenton Cloud send content out; community gallery on by default
  platforms: ['mac', 'win', 'linux', 'web'], // Docker/browser UI on any OS; desktop .dmg/.AppImage/.deb in 0.9.x, Windows .exe only up to 0.8.7-beta
  worksWith: ['Ollama', 'LM Studio', 'OpenAI', 'Google Gemini', 'Anthropic Claude', 'ComfyUI', 'PowerPoint', 'Docker'],
  engine: 'external', // brings its own model providers (Ollama, LM Studio, OpenAI-compatible, cloud APIs); no bundled model per README
  license: 'Apache 2.0',
  price: 'freemium', // self-hosted and desktop free; managed Presenton Cloud sells monthly slide-credit plans (prices not read)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // depends on the chosen model provider
  stars: 11303, // GitHub API read 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['docs', 'build'],
  url: 'presenton.ai',
  storeLinks: {
    github: 'https://github.com/presenton/presenton',
    web: 'https://presenton.ai',
  },
  installEffort: 'installer',
  installOn: ['mac', 'linux'],
  installEvidence: 'GitHub Releases electron-v0.9.11-beta (2026-09-21) checked 2026-10-24: Presenton-0.9.11-beta.dmg, .AppImage, .deb; no .exe in 0.9.x (newest Windows installer Presenton-0.8.7-beta.exe, 2026-06-08); Windows users can use the one-line Docker command from the README; project labels all releases beta',
  tagline: {
    en: 'Open-source (Apache 2.0) AI presentation generator that turns a prompt or document into an editable PPTX or PDF deck, using Ollama, LM Studio or a cloud model you choose',
    de: 'Quelloffener (Apache 2.0) KI-Präsentationsgenerator, der aus einem Prompt oder Dokument ein bearbeitbares PPTX- oder PDF-Deck erstellt, mit Ollama, LM Studio oder einem Cloud-Modell Ihrer Wahl',
    fr: 'Générateur de présentations IA open source (Apache 2.0) qui transforme un prompt ou un document en diaporama PPTX ou PDF modifiable, avec Ollama, LM Studio ou un modèle cloud de votre choix',
    ja: 'プロンプトや文書から編集可能なPPTX・PDFのスライドを作るオープンソース（Apache 2.0）のAIプレゼン生成ツール。Ollama、LM Studio、または任意のクラウドモデルを使えます',
    zh: '开源（Apache 2.0）AI 演示文稿生成器，可将提示词或文档变成可编辑的 PPTX 或 PDF 幻灯片，可选用 Ollama、LM Studio 或自选云端模型',
    es: 'Generador de presentaciones con IA de código abierto (Apache 2.0) que convierte un prompt o un documento en una presentación PPTX o PDF editable, con Ollama, LM Studio o el modelo en la nube que elijas',
    pt: 'Gerador de apresentações com IA de código aberto (Apache 2.0) que transforma um prompt ou documento em uma apresentação PPTX ou PDF editável, com Ollama, LM Studio ou o modelo em nuvem que você escolher',
    ar: 'مولّد عروض تقديمية بالذكاء الاصطناعي مفتوح المصدر (Apache 2.0) يحوّل موجّهًا أو مستندًا إلى عرض PPTX أو PDF قابل للتعديل، باستخدام Ollama أو LM Studio أو نموذج سحابي من اختيارك',
    ko: '프롬프트나 문서를 편집 가능한 PPTX·PDF 슬라이드로 만들어 주는 오픈소스(Apache 2.0) AI 프레젠테이션 생성기로, Ollama, LM Studio 또는 원하는 클라우드 모델을 쓸 수 있습니다',
  },
  reviewSlug: 'presenton-review',
  pqReview: {
    date: '2026-10-24',
    version: '0.9.11-beta',
    versionSourceUrl: 'https://github.com/presenton/presenton/releases',
  },
  verdict: 'Best for people who want an open-source, self-hostable alternative to cloud slide generators and are comfortable choosing and configuring their own model provider; limited by its beta label, a Windows installer missing from the 0.9.x releases, privacy that depends on the provider you pick, and output quality and speed PromptQuorum could not check.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-22', // newest default-branch commit (GitHub API, read 2026-10-24); latest desktop release electron-v0.9.11-beta published 2026-09-21
  lastUpstreamUpdateSource: 'https://github.com/presenton/presenton/commits/main',
}
