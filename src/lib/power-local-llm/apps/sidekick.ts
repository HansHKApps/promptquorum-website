// Local AI App Directory — Sidekick (layer: knowledge-retrieval — local chat over files)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: "Sidekick" is a very common project name — this is
// github.com/johnbean393/Sidekick, the native macOS app (llama.cpp-powered)
// that chats with a local LLM over your files/folders/websites, NOT the
// several other unrelated "sidekick" repos found in the same search
// (jaypetez/sidekick, eponce00/sidekick, redevops-io/sidekick,
// novoselrok/sidekick, geoffmcc/sidekick) — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'sidekick',
  name: 'Sidekick',
  categories: ['document-pdf-chat', 'general-chat-clients'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['mac'],
  worksWith: ['llama.cpp'],
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // llama.cpp-powered native macOS app — no fixed floor documented, requirement scales with the GGUF model the user loads, verified 2026-09-18
  stars: 3312, // verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['chat', 'docs'],
  url: 'github.com/johnbean393/Sidekick',
  tagline: {
    en: 'Native macOS app to chat with a fully local LLM that can read your files, folders, and websites, powered by llama.cpp',
    de: 'Native macOS-App zum Chatten mit einem vollständig lokalen LLM, das Dateien, Ordner und Webseiten lesen kann — angetrieben von llama.cpp',
    fr: 'Application macOS native pour discuter avec un LLM entièrement local capable de lire vos fichiers, dossiers et sites web, propulsée par llama.cpp',
    ja: 'ファイル・フォルダ・ウェブサイトを読み取れる完全ローカルLLMとチャットできる、llama.cpp搭載のネイティブmacOSアプリ',
    zh: '原生macOS应用，可与完全本地运行的LLM对话，该LLM能读取你的文件、文件夹和网站，由llama.cpp驱动',
    es: 'Aplicación nativa de macOS para chatear con un LLM totalmente local que puede leer tus archivos, carpetas y sitios web, impulsada por llama.cpp',
    pt: 'Aplicativo nativo para macOS para conversar com um LLM totalmente local que pode ler seus arquivos, pastas e sites, alimentado por llama.cpp',
    ar: 'تطبيق macOS أصلي للدردشة مع نموذج لغوي محلي بالكامل يمكنه قراءة ملفاتك ومجلداتك ومواقعك، مدعوم بـ llama.cpp',
    ko: 'llama.cpp 기반으로 파일, 폴더, 웹사이트를 읽을 수 있는 완전한 로컬 LLM과 대화하는 네이티브 macOS 앱',
  },
  reviewSlug: 'sidekick-review', // dedicated PromptQuorum review — added 2026-09-19
  lastVerifiedDate: '2026-09-18',
}
