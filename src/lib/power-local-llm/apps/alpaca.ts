// Local AI App Directory — Alpaca (layer: desktop chat client for Ollama)
// Added 2026-11-18 at the owner's request. No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18: jeffser.com/alpaca (project page: "A private AI client" — chat with local AI
// models pulled from Ollama; analyze PDFs/plain-text documents and images with vision-capable models;
// create custom models from an instruction prompt and picture; conversations saved in local SQLite3
// files; models have no direct internet access; works offline once models are downloaded; GPL-3.0,
// source public; Flathub download badge, no terminal command shown on the page itself; no privacy
// policy or imprint linked anywhere on the page — only location reference found is the informal
// footer line "Proudly created from Costa Rica", not a legal/company statement),
// github.com/Jeffser/Alpaca (README: "an Ollama client where you can manage and chat with multiple
// models", aimed at beginners; GPL-3.0 license confirmed via GitHub API; also supports OpenAI-compatible
// cloud APIs with the user's own key, naming Gemini and ChatGPT as examples; GTK4/Libadwaita/GNOME
// topics; ~1.7k stars/151 forks at time of check; main distribution channel is Flathub, with a wiki page
// covering packaging for other methods), flathub.org/apps/com.jeffser.Alpaca (listing: "A private AI
// client", version 9.2.5, Install/Manual Install options shown, no terminal command printed on the
// page, download size 714 MiB, "Free", disclaimer "not affiliated with Ollama", aarch64+x86_64, tags
// ai/ollama/llm/linux/flatpak), and the GitHub API for github.com/Jeffser/Alpaca (license GPL-3.0;
// pushed_at 2026-10-02T22:18:33Z; latest release tag 9.2.5 published 2026-08-03T14:09:48Z — the newer
// of the two, per the owner rule, is the 2026-10-02 push; checked 2026-11-18, 47 days before today →
// well under the 90-day "quiet" threshold, so the 3-month stale warning is OFF).
// Notes:
// - License: GPL-3.0, confirmed via the GitHub API license field (also stated on jeffser.com/alpaca and
//   on the Flathub listing's source-code link).
// - Maintainer: solo developer "Jeffser" (GitHub: Jeffser; Flathub developer name: Jeffry Samuel
//   Eduarte Rojas). No company name or registered address found anywhere checked.
// - No privacy policy or imprint page exists on jeffser.com/alpaca, the GitHub repo, or the Flathub
//   listing — hqCountry and hqCountrySource left unset per the owner rule (HQ is only set from a
//   privacy policy/imprint primary source, never from an informal "created from <place>" footer line).
// - locality 'hybrid': the app itself is a GTK4 desktop client, not an inference engine — it depends on
//   a separately running Ollama (or other OpenAI-compatible) backend. A fully local setup (local Ollama
//   server, no cloud key) keeps everything on-device; the app also supports connecting a cloud API key
//   (e.g. Gemini, ChatGPT per the README), which is not local. Mirrors the 'hybrid' convention used for
//   other bring-your-own-backend clients that can point at either a local or remote model service.
// - engine 'external': Alpaca ships no inference engine of its own — it is a pure client that talks to
//   Ollama (or another configured OpenAI-compatible API) over HTTP; the hardware floor is entirely the
//   connected backend's, not Alpaca's own.
// - worksWith: ['Ollama', 'OpenAI API'] — Ollama is the primary, named backend (project description,
//   README, Flathub tags); the README also documents connecting any OpenAI-compatible cloud API with a
//   user-supplied key, naming Gemini and ChatGPT as examples, which is covered generically as 'OpenAI
//   API' per this directory's convention for a compatible-API field rather than a named integration.
// - Install: installer tier. Flathub is the documented primary distribution channel (jeffser.com/alpaca
//   "Download on Flathub" badge; github.com/Jeffser/Alpaca README "the main way to get Alpaca"); the
//   Flathub listing itself offers an in-browser "Install" button plus "Manual Install", which resolves
//   to the standard `flatpak install flathub com.jeffser.Alpaca` command — a one-click/app-store-style
//   install, not a terminal build. A wiki page (linked from the README) covers packaging for other
//   methods, but that is not the primary documented path. No Windows or macOS build was found on any
//   page checked — Alpaca is Linux-only (aarch64/x86_64 per the Flathub listing).
// Last upstream update: 2026-10-02 (GitHub API repo pushed_at, newer than the 2026-08-03 latest-release
// date for tag 9.2.5) → NOT stale (3-month rule), checked 2026-11-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'alpaca',
  name: 'Alpaca',
  categories: ['general-chat-clients'],
  interfaces: ['desktop'],
  locality: 'hybrid', // GTK4 client for a separately-run backend: fully local with a local Ollama server, or a user-supplied cloud API key (not local)
  platforms: ['linux'],
  worksWith: ['Ollama', 'OpenAI API'], // Ollama is the named primary backend; README also documents any OpenAI-compatible cloud API with a user key (examples given: Gemini, ChatGPT)
  engine: 'external', // ships no inference engine of its own — pure client over HTTP to Ollama or another configured OpenAI-compatible API
  license: 'GPL-3.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // pure client — the hardware floor is entirely the connected Ollama/backend's, not Alpaca's own
  stars: 1700, // GitHub README, github.com/Jeffser/Alpaca, read 2026-11-18 ("~1.7k stars")
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['chat', 'docs', 'image'],
  url: 'jeffser.com/alpaca',
  storeLinks: {
    web: 'https://jeffser.com/alpaca',
    github: 'https://github.com/Jeffser/Alpaca',
  },
  installEffort: 'installer',
  installOn: ['linux'],
  installEvidence: 'flathub.org/apps/com.jeffser.Alpaca, checked 2026-11-18: Flathub listing with an in-browser Install button and a Manual Install option (no terminal command printed on the page itself, but the standard equivalent is `flatpak install flathub com.jeffser.Alpaca`); jeffser.com/alpaca and github.com/Jeffser/Alpaca both name Flathub as the main distribution channel. Available for aarch64 and x86_64. No Windows or macOS build found on any page checked.',
  tagline: {
    en: 'Free, open-source (GPL-3.0) GNOME desktop chat client for Ollama, with PDF/text and image support, Linux only',
    de: 'Kostenloser, quelloffener (GPL-3.0) GNOME-Desktop-Chat-Client für Ollama, mit PDF-/Text- und Bildunterstützung, nur für Linux',
    fr: 'Client de chat de bureau GNOME gratuit et open source (GPL-3.0) pour Ollama, avec prise en charge PDF/texte et images, Linux uniquement',
    ja: 'Ollama向けの無料・オープンソース（GPL-3.0）GNOMEデスクトップチャットクライアント。PDF・テキスト・画像に対応、Linux専用',
    zh: '面向 Ollama 的免费开源（GPL-3.0）GNOME 桌面聊天客户端，支持 PDF/文本和图像，仅限 Linux',
    es: 'Cliente de chat de escritorio GNOME gratuito y de código abierto (GPL-3.0) para Ollama, con soporte de PDF/texto e imágenes, solo Linux',
    pt: 'Cliente de chat de desktop GNOME gratuito e de código aberto (GPL-3.0) para o Ollama, com suporte a PDF/texto e imagens, somente Linux',
    ar: 'عميل محادثة مكتبي مجاني ومفتوح المصدر (GPL-3.0) لبيئة GNOME يعمل مع Ollama، يدعم ملفات PDF والنصوص والصور، لنظام Linux فقط',
    ko: 'Ollama용 무료 오픈소스(GPL-3.0) GNOME 데스크톱 채팅 클라이언트로, PDF/텍스트 및 이미지를 지원하며 Linux 전용입니다',
  },
  // Comparison attributes (desktop-chat segment of chat-assistants), read from jeffser.com/alpaca and
  // github.com/Jeffser/Alpaca on 2026-11-18: builtInEngine is false (pure client, see 'engine' above)
  // rather than unset since the research was explicitly done; ollama and customEndpoint are true (both
  // are named backends); fileChat is true (PDF/plain-text document recognition); mcp and voice are left
  // unset — neither is mentioned anywhere checked.
  compare: { builtInEngine: false, ollama: true, customEndpoint: true, fileChat: true },
  reviewSlug: 'alpaca-review',
  pqReview: {
    date: '2026-11-18',
    version: '9.2.5',
    versionSourceUrl: 'https://flathub.org/apps/com.jeffser.Alpaca',
  },
  verdict: 'Best for Linux users who want a free, open-source (GPL-3.0), native GNOME chat client for a locally run Ollama server, with PDF/text and image support; limited to Linux (no Windows/macOS build), no stated company or HQ, no formal privacy policy, and no hands-on testing by PromptQuorum.',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-10-02', // GitHub API: repo pushed_at 2026-10-02T22:18:33Z, newer than latest release tag 9.2.5 (published 2026-08-03); read 2026-11-18
  lastUpstreamUpdateSource: 'https://github.com/Jeffser/Alpaca',
}
