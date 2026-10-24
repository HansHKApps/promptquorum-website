// Local AI App Directory — Zeno by Icosa Computing (layer: macOS local AI workspace / personal assistant)
// Added 2026-10-24 at the operator's request. No maker outreach — independent PromptQuorum entry; no founder badge.
// Facts verified 2026-10-24 against: icosa.co/zeno (requirements: Apple Silicon Mac with 16GB+ RAM, 18GB download incl. model, ~45GB free
// during setup / 25GB after, 35B-parameter model "pruned and tuned by Icosa", 20-50 tok/s, "$0 per token", offline claim, manifesto),
// icosa.co/terms (effective 2026-08-18: processing on the device, internet only for update check / requested model or tool download /
// requested web fetch, no analytics in the app, AI can read/create/change/delete files and run commands when allowed; open-source notices:
// built on opencode (MIT), runs Qwen-family models (Apache 2.0)), the icosa.co home FAQ (released 2026-08-19, macOS, Apple Silicon) and
// the HTTP headers of the installer on the download server (Zeno.dmg, ~376 MB, Last-Modified 2026-10-22). localwork.ai 307-redirects to icosa.co/zeno.
// Not found: version number, macOS minimum, source repository, separate privacy-policy page (icosa.co/privacy is a 404), App Store / GitHub listing.
// Last upstream update: 2026-10-22 = installer Last-Modified on the download server (no version/changelog published) -> NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'zeno',
  name: 'Zeno',
  categories: ['personal-assistants'],
  interfaces: ['desktop'],
  locality: 'local', // maker + Terms: files and chats are processed on the Mac and by default never leave it; network only for update check (app version), requested model/tool downloads and requested web fetches
  platforms: ['mac'], // Apple Silicon only per the product page
  worksWith: null,
  engine: 'builtin', // ships its own bundled model (35B, unnamed; Terms say Qwen family) inside a workspace built on opencode
  license: 'Closed source', // no repository or software licence found beyond the Terms of Use; opencode (MIT) and Qwen (Apache 2.0) are credited in the Terms
  price: 'free', // "$0 per token, with no rate limits"; no paid plan listed
  hardware: { ramGb: 16, vramGb: null, cpuOnly: null }, // Apple Silicon Mac with 16GB+ RAM (unified memory); 18GB download, ~45GB free during setup
  stars: null, // no public repository
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['agent', 'chat', 'docs'],
  url: 'icosa.co/zeno',
  storeLinks: {
    web: 'https://icosa.co/zeno',
  },
  installEffort: 'installer',
  installEvidence: 'icosa.co/zeno "Download for Mac" serves Zeno.dmg (disk image, ~376 MB per server headers, Last-Modified 2026-10-22); page states an 18GB download including the model and ~45GB free disk during setup; no terminal step; checked 2026-10-24 (file not downloaded)',
  tagline: {
    en: 'Free macOS AI workspace that bundles a 35B model and says it reads, drafts and edits your files entirely on the Mac, offline',
    de: 'Kostenloser macOS-KI-Arbeitsplatz mit eingebautem 35B-Modell, der laut Hersteller Ihre Dateien vollständig offline auf dem Mac liest, entwirft und bearbeitet',
    fr: "Espace de travail IA gratuit pour macOS qui embarque un modèle 35B et dit lire, rédiger et modifier vos fichiers entièrement sur le Mac, hors ligne",
    ja: '35Bモデルを同梱し、ファイルの読み取り・下書き・編集をMac上だけでオフラインに行うとされる、無料のmacOS向けAIワークスペース',
    zh: '内置 35B 模型的免费 macOS AI 工作区，据称完全在 Mac 上离线读取、起草和编辑你的文件',
    es: 'Espacio de trabajo de IA gratuito para macOS que incluye un modelo 35B y dice leer, redactar y editar tus archivos por completo en el Mac, sin conexión',
    pt: 'Espaço de trabalho de IA gratuito para macOS que traz um modelo 35B e diz ler, redigir e editar seus arquivos inteiramente no Mac, offline',
    ar: 'مساحة عمل ذكاء اصطناعي مجانية لنظام macOS بنموذج 35B مدمج، تقول الشركة إنها تقرأ ملفاتك وتصوغها وتحرّرها بالكامل على جهاز Mac دون اتصال',
    ko: '35B 모델을 내장하고 파일 읽기·초안 작성·편집을 Mac 안에서 오프라인으로 처리한다는 무료 macOS AI 워크스페이스',
  },
  reviewSlug: 'zeno-review',
  // No pqReview: Icosa publishes no version number (product page, FAQ and Terms checked 2026-10-24), so there is nothing for
  // validate-app-versions to match; the review states the installer's last-modified date instead.
  // Comparison attributes from the product page + Terms on 2026-10-24; a missing key = not stated there, never false.
  // localLlm is not set: the page says "no model to pick", so "works with local LLMs" (bring your own) is not established.
  compare: { toolUse: true }, // Terms: the AI can read, create, change and delete files and run commands when allowed
  verdict: 'Best for Apple Silicon Mac owners with 16 GB or more who want to try a free private assistant that works on files and are willing to read its permission settings and keep backups; limited by a roughly 18 GB download, no published version number, no source repository and speed, quality, offline and self-learning claims PromptQuorum could not check.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-22', // Zeno.dmg Last-Modified header on the download server, read 2026-10-24 (no version or changelog is published)
  lastUpstreamUpdateSource: 'https://icosa.co/zeno',
}
