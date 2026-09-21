// Local AI App Directory — TranslateBooksWithLLMs (layer: code-development — translation tool)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: this is github.com/hydropix/TranslateBooksWithLLMs — several
// forks with the same name/description exist (e.g. Paracehll); those are
// plain forks, not distinct projects — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'translate-books-with-llms',
  name: 'TranslateBooksWithLLMs',
  categories: ['sdks-libraries'],
  interfaces: ['desktop', 'cli', 'web'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'OpenAI API', 'Gemini', 'Mistral', 'DeepSeek', 'OpenRouter'],
  engine: 'external',
  license: 'AGPL-3.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // a translation pipeline app with a local web UI (localhost:5000) that calls out to Ollama or a cloud provider for the actual translation — no in-process inference, hardware floor depends on the connected model, verified 2026-09-18
  stars: 2421, // verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['docs', 'build'],
  url: 'github.com/hydropix/TranslateBooksWithLLMs',
  reviewSlug: 'translate-books-with-llms-review', // dedicated PromptQuorum review — added 2026-09-19
  tagline: {
    en: 'Translates full-length books and documents (EPUB, TXT, SRT) with a local Ollama model or cloud LLMs, preserving formatting and resuming where it left off',
    de: 'Übersetzt vollständige Bücher und Dokumente (EPUB, TXT, SRT) mit einem lokalen Ollama-Modell oder Cloud-LLMs, erhält dabei die Formatierung und setzt Übersetzungen fort, wo sie abgebrochen wurden',
    fr: 'Traduit des livres et documents complets (EPUB, TXT, SRT) avec un modèle Ollama local ou des LLM cloud, en préservant la mise en forme et en reprenant là où elle s’était arrêtée',
    ja: 'ローカルのOllamaモデルまたはクラウドLLMを使い、書式を保持しながら中断箇所から再開して書籍やドキュメント全体（EPUB、TXT、SRT）を翻訳する',
    zh: '使用本地Ollama模型或云端LLM翻译整本书籍和文档（EPUB、TXT、SRT），保留原始格式并支持断点续译',
    es: 'Traduce libros y documentos completos (EPUB, TXT, SRT) con un modelo local de Ollama o LLMs en la nube, preservando el formato y retomando donde se quedó',
    pt: 'Traduz livros e documentos completos (EPUB, TXT, SRT) com um modelo Ollama local ou LLMs em nuvem, preservando a formatação e retomando de onde parou',
    ar: 'يترجم الكتب والمستندات الكاملة (EPUB وTXT وSRT) باستخدام نموذج Ollama محلي أو نماذج سحابية، مع الحفاظ على التنسيق واستئناف الترجمة من حيث توقفت',
    ko: '로컬 Ollama 모델이나 클라우드 LLM으로 전체 책과 문서(EPUB, TXT, SRT)를 번역하며, 서식을 유지하고 중단된 지점부터 이어서 번역한다',
  },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { localLlm: true, ollama: true },
  lastVerifiedDate: '2026-09-18',
}
