// Local AI App Directory — Surf (layer: knowledge-retrieval — personal AI notebook)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: "surf" is an extremely generic name — this is
// github.com/deta/surf, the Deta-team "Personal AI Notebook" app (organizes
// files/webpages and generates notes, explicit local-model support), NOT
// steel-dev/surf.new (an OpenAI-Operator-style browser-automation demo, no
// local-model angle) or any of the unrelated single-purpose "surf" browser-
// control CLIs found in the same search — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'surf',
  name: 'Surf',
  categories: ['document-pdf-chat', 'notes-integrations'],
  interfaces: ['desktop'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'OpenAI API'],
  engine: 'both',
  license: 'Apache-2.0', // Apache 2.0 with per-file/patch exceptions noted in the repo, verified 2026-09-18
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // desktop app that supports cloud models, user API keys, and local models interchangeably — hardware floor depends entirely on which local model the user picks, verified 2026-09-18
  stars: 3500, // reported as ~3.5k by third-party GitHub listings (GitHub API returned 403 for direct verification), verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['docs', 'chat'],
  url: 'github.com/deta/surf',
  tagline: {
    en: 'Desktop AI notebook that organizes your files and webpages and writes notes from them, with local, open, or cloud model choice',
    de: 'Desktop-KI-Notizbuch, das Dateien und Webseiten organisiert und daraus Notizen erstellt — mit freier Wahl zwischen lokalen, offenen oder Cloud-Modellen',
    fr: 'Bloc-notes IA de bureau qui organise vos fichiers et pages web et en tire des notes, avec choix libre de modèles locaux, ouverts ou cloud',
    ja: 'ファイルやウェブページを整理してノートを生成するデスクトップ型AIノートアプリ。ローカル・オープン・クラウドのモデルを自由に選択可能',
    zh: '桌面AI笔记应用，整理你的文件和网页并生成笔记，可自由选择本地、开源或云端模型',
    es: 'Cuaderno de IA de escritorio que organiza tus archivos y páginas web y genera notas a partir de ellos, con elección libre de modelos locales, abiertos o en la nube',
    pt: 'Caderno de IA para desktop que organiza seus arquivos e páginas da web e gera notas a partir deles, com escolha livre entre modelos locais, abertos ou em nuvem',
    ar: 'دفتر ملاحظات مكتبي مدعوم بالذكاء الاصطناعي ينظم ملفاتك وصفحات الويب وينشئ ملاحظات منها، مع حرية اختيار نماذج محلية أو مفتوحة أو سحابية',
    ko: '파일과 웹페이지를 정리해 노트를 생성해주는 데스크톱 AI 노트 앱으로, 로컬·오픈·클라우드 모델을 자유롭게 선택할 수 있다',
  },
  reviewSlug: 'surf-review', // dedicated PromptQuorum review — added 2026-09-19
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { localLlm: true, citations: true, desktopApp: true, noteApp: 'Surf' },
  lastVerifiedDate: '2026-09-18',
}
