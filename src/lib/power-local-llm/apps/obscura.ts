// Local AI App Directory — Obscura: open-source headless browser engine (Rust + V8, Chrome DevTools Protocol) for AI agents and web scraping (layer: web scraping for AI)
// Added 2026-11-14 at the owner's request. Facts verified 2026-11-14 against obscura.sh (homepage), github.com/h4ckf0r0day/obscura (README, Releases v0.2.7, commits, GitHub API)
// and the docs wiki. Apache-2.0 (API spdx Apache-2.0). Latest release v0.2.7 (not a pre-release) published 2026-11-13T22:01:14Z; newest push to main 2026-11-13T22:01:14Z,
// so the 3-month stale warning is OFF. GitHub owner h4ckf0r0day; no company name on the site ("© 2026 Obscura", contact hello@obscura.sh); the homepage names the Vercel OSS Program.
// Contains NO language model and no LLM integration (no Ollama/LM Studio/llama.cpp mention anywhere): AI agents drive it from outside via CDP, Playwright/Puppeteer or its MCP server,
// so it is listed like SearXNG: an agent tool that runs on your own machine, not a model runner. Runs fully locally (binary or Docker); the only outbound AI-adjacent call per the
// v0.2.7 notes is the opt-in MCP web_search (OBSCURA_WEB_SEARCH=keenable), which sends queries to Keenable. A hosted "Obscura Cloud" is announced (waitlist), not available; no pricing page.
// Stealth variants (`-stealth` builds) block analytics/fingerprinting scripts and evade bot detection — a scraping-ethics/ToS caveat for any review. Privacy-policy page linked in the
// footer returned 404 when checked. Not checked: performance claims, anti-bot effectiveness, security, how well it works as a Puppeteer/Playwright drop-in. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'obscura',
  name: 'Obscura',
  categories: ['web-scraping-for-ai', 'sdks-libraries'],
  interfaces: ['cli', 'library'], // CLI binary that serves a CDP endpoint; Puppeteer/Playwright clients and an MCP server connect to it
  locality: 'local', // runs as a local binary or Docker container; opt-in MCP web search is the only listed outbound call to a third party (Keenable)
  platforms: ['linux', 'mac', 'win'], // release archives for Linux (x86_64, aarch64), macOS (aarch64, x86_64) and Windows (x86_64); Docker image
  worksWith: ['MCP', 'Puppeteer', 'Playwright', 'Docker'], // README + homepage; no LLM runtime is named anywhere
  engine: 'external', // contains no language model; whichever agent/LLM front end calls it supplies the model
  license: 'Apache-2.0',
  price: 'free', // engine is free and Apache-2.0 ("No feature gating, ever" per README); hosted Obscura Cloud is only announced
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // browser engine, no model inference
  stars: 35152, // GitHub API read 2026-11-14
  addedDate: '2026-11-14',
  status: 'listed',
  uses: ['agent', 'build'],
  url: 'obscura.sh',
  storeLinks: {
    github: 'https://github.com/h4ckf0r0day/obscura',
    web: 'https://obscura.sh',
  },
  installEffort: 'one-command',
  installEvidence: 'GitHub Releases v0.2.7 (2026-11-13) checked 2026-11-14: tar.gz/zip archives for Linux, macOS and Windows (e.g. obscura-x86_64-linux.tar.gz, obscura-x86_64-windows.zip); README: curl + tar, `docker run -d --name obscura -p 127.0.0.1:9222:9222 h4ckf0r0day/obscura`, Scoop, nixpkgs, or cargo build; no installer GUI',
  tagline: {
    en: 'Open-source headless browser engine written in Rust that gives AI agents and scrapers a Chrome DevTools Protocol endpoint, usable as a Puppeteer and Playwright drop-in',
    de: 'Open-Source-Headless-Browser-Engine in Rust, die KI-Agenten und Scrapern einen Chrome-DevTools-Protocol-Endpunkt bietet und als Ersatz für Puppeteer und Playwright dient',
    fr: 'Moteur de navigateur headless open source écrit en Rust qui offre aux agents IA et aux scrapers un point d’accès Chrome DevTools Protocol, utilisable à la place de Puppeteer et Playwright',
    ja: 'Rust製のオープンソースのヘッドレスブラウザエンジン。AIエージェントやスクレイパーにChrome DevTools Protocolのエンドポイントを提供し、PuppeteerやPlaywrightの代替として使えます',
    zh: '用 Rust 编写的开源无头浏览器引擎，为 AI 智能体和爬虫提供 Chrome DevTools Protocol 端点，可直接替代 Puppeteer 和 Playwright',
    es: 'Motor de navegador headless de código abierto escrito en Rust que ofrece a agentes de IA y scrapers un punto de acceso Chrome DevTools Protocol, utilizable como sustituto de Puppeteer y Playwright',
    pt: 'Motor de navegador headless de código aberto escrito em Rust que oferece a agentes de IA e scrapers um endpoint Chrome DevTools Protocol, utilizável como substituto do Puppeteer e do Playwright',
    ar: 'محرك متصفح بلا واجهة مفتوح المصدر مكتوب بلغة Rust يمنح وكلاء الذكاء الاصطناعي وأدوات الاستخراج نقطة وصول عبر Chrome DevTools Protocol، ويمكن استخدامه بديلًا لـ Puppeteer وPlaywright',
    ko: 'Rust로 작성된 오픈소스 헤드리스 브라우저 엔진으로, AI 에이전트와 스크레이퍼에 Chrome DevTools Protocol 엔드포인트를 제공하며 Puppeteer와 Playwright의 대체로 쓸 수 있습니다',
  },
  verdict: 'Best for developers who want a lightweight, self-run headless browser to give their own AI agents web access; it has no language model, no pricing or privacy-policy page was found, and PromptQuorum did not test performance, stealth or security claims.',
  lastVerifiedDate: '2026-11-14',
  lastUpstreamUpdate: '2026-11-13', // GitHub: release v0.2.7 (2026-11-13T22:01:14Z) and last push to main (2026-11-13T22:01:14Z); read 2026-11-14
  lastUpstreamUpdateSource: 'https://github.com/h4ckf0r0day/obscura',
}
