// Local AI App Directory — Memex (layer: AI journal / personal knowledge capture; iOS + Android)
// Added 2026-11-18 at the owner's request. Facts verified 2026-11-18 against memexlab.ai (home page: open-source
// AI journal, multi-agent system organizes text/photo/voice captures into timeline cards and insight charts;
// store links: App Store id6760325170 global + id6761462644 China, Google Play com.memexlab.memex, GitHub +
// early-access APK, Discord), memexlab.ai/privacy-policy ("Last updated: April 29, 2026" — no company name,
// address, country, governing law or regulator named; data kept on-device as Markdown files + a local SQLite
// database; optional backup/sync to iCloud Drive or a custom folder; no Memex account required for the core
// product; prompts to an LLM provider go directly from the device to that provider; site uses Google Analytics),
// and memexlab.ai/about (product initiated by Haibo Wu, "a small team and open-source contributors"; no company
// name or HQ location given — https://wujia.me/ is the initiator's personal site, not a company page).
// GitHub API (github.com/memex-lab/memex) 2026-11-18: description "Open-source, local-first AI journal app for
// iOS and Android... Your data stays on your device. Bring your own LLM (OpenAI, Claude, Gemini, Ollama, and
// more)"; license GPL-3.0; 843 stars; repo created 2026-03-11; pushed_at 2026-11-17T19:18:18Z (1 day before this
// check, so the 3-month stale warning is OFF); latest tag v1.0.37; Releases tab currently holds only dated,
// prerelease-labelled Android early-access builds (e.g. android-early-20261111-5ecbe4c, 2026-11-10, with
// app-cnearly-release.apk and app-globalearly-release.apk) — the officially supported install path for most
// users is the App Store / Google Play listing, not those prerelease APKs.
// LOCALITY = hybrid: journal data (Markdown + SQLite) always stays on-device per the privacy policy; AI calls
// are fully local only when the user configures Ollama as the provider, otherwise prompts go to whichever
// cloud LLM provider the user's own API key points at (bring-your-own-key — Memex itself runs no inference).
// No pricing page found anywhere on the site; the core app requires no account and no payment. HQ/company:
// not stated on any page checked (privacy policy, about, impressum-equivalent none found) — hqCountry left
// unset per the owner rule, no flag shown. Not tested hands-on by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'memex',
  name: 'Memex',
  categories: ['notes-integrations', 'agent-memory'],
  interfaces: ['mobile'],
  locality: 'hybrid', // Markdown/SQLite journal data always on-device; LLM calls are local only with Ollama, otherwise go to the user's own cloud provider key
  platforms: ['ios', 'android'], // App Store (global + China) and Google Play; no desktop/web app found
  worksWith: ['OpenAI', 'Anthropic', 'Google Gemini', 'Ollama'], // memexlab.ai lists "10+"/"12+" providers in different places; these four are explicitly named, Ollama is the one that keeps inference fully offline
  engine: 'external', // bring-your-own-key: Memex orchestrates capture/organization but runs no model itself; Ollama is the only option that keeps inference on-device
  license: 'GPL-3.0',
  price: 'free', // no pricing page found; core app needs no account; LLM provider usage costs are the user's own (their API key)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // depends entirely on which LLM provider the user configures; no bundled model
  stars: 843, // GitHub API, github.com/memex-lab/memex, read 2026-11-18
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['docs', 'audio'],
  url: 'memexlab.ai',
  storeLinks: {
    appStore: 'https://apps.apple.com/app/memexai/id6760325170',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.memexlab.memex',
    web: 'https://memexlab.ai',
    github: 'https://github.com/memex-lab/memex',
  },
  installEffort: 'installer',
  installOn: ['ios', 'android'],
  installEvidence: 'App Store listing id6760325170 (global) and id6761462644 (China App Store), and Google Play com.memexlab.memex, all checked 2026-11-18 — plain store install, no terminal step. GitHub Releases also ships dated, prerelease-labelled Android early-access APKs (e.g. android-early-20261111-5ecbe4c, 2026-11-10) as a secondary, non-store channel.',
  tagline: {
    en: 'Open-source AI journal for iPhone and Android that organizes text, photo, and voice captures into timeline cards on your own device, with your own OpenAI, Claude, Gemini, or Ollama key',
    de: 'Quelloffenes KI-Journal für iPhone und Android, das Text-, Foto- und Sprachnotizen auf dem eigenen Gerät zu Timeline-Karten organisiert — mit eigenem OpenAI-, Claude-, Gemini- oder Ollama-Schlüssel',
    fr: 'Journal IA open source pour iPhone et Android qui organise textes, photos et notes vocales en cartes chronologiques sur votre propre appareil, avec votre propre clé OpenAI, Claude, Gemini ou Ollama',
    ja: 'テキスト・写真・音声の記録を自分のデバイス上でタイムラインカードに整理する、iPhoneとAndroid向けのオープンソースAIジャーナル。自分のOpenAI・Claude・Gemini・OllamaのAPIキーで利用',
    zh: '面向 iPhone 和 Android 的开源 AI 日记应用，在你自己的设备上将文字、照片和语音记录整理成时间线卡片，使用你自己的 OpenAI、Claude、Gemini 或 Ollama 密钥',
    es: 'Diario de IA de código abierto para iPhone y Android que organiza capturas de texto, foto y voz en tarjetas de línea de tiempo en tu propio dispositivo, con tu propia clave de OpenAI, Claude, Gemini u Ollama',
    pt: 'Diário de IA de código aberto para iPhone e Android que organiza capturas de texto, foto e voz em cartões de linha do tempo no seu próprio aparelho, com sua própria chave da OpenAI, Claude, Gemini ou Ollama',
    ar: 'مذكرات ذكاء اصطناعي مفتوحة المصدر لأجهزة iPhone وAndroid تنظّم تسجيلات النص والصور والصوت في بطاقات زمنية على جهازك الخاص، باستخدام مفتاحك الخاص من OpenAI أو Claude أو Gemini أو Ollama',
    ko: '텍스트, 사진, 음성 기록을 내 기기에서 타임라인 카드로 정리해 주는 iPhone·Android용 오픈소스 AI 저널 앱으로, 자신의 OpenAI, Claude, Gemini, Ollama 키를 사용합니다',
  },
  // Comparison attributes (notes segment), read from memexlab.ai and github.com/memex-lab/memex on 2026-11-18: localLlm (Ollama keeps
  // inference offline) and chatNotes (multi-agent system reads/organizes entries into cards and summaries) are stated; semanticSearch
  // is not explicitly claimed — unset, never false.
  compare: { noteApp: 'Memex', localLlm: true, chatNotes: true },
  reviewSlug: 'memex-review',
  pqReview: {
    date: '2026-11-18',
    version: '1.0.37',
    versionSourceUrl: 'https://github.com/memex-lab/memex/tags',
  },
  verdict: 'Best for people who want a free, GPL-3.0, local-first AI journal on iPhone or Android that keeps every entry as Markdown and SQLite on-device and are willing to bring their own OpenAI, Claude, Gemini, or Ollama key; limited by no stated company or HQ, no pricing page to double-check, and no hands-on testing by PromptQuorum.',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-17', // GitHub API: repo pushed_at 2026-11-17T19:18:18Z (latest tag v1.0.37); read 2026-11-18
  lastUpstreamUpdateSource: 'https://github.com/memex-lab/memex',
}
