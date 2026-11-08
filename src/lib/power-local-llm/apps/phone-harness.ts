// Local AI App Directory — Phone Harness (categories: computer-browser-agents, autonomous-agents; layer: phone-control harness for coding agents)
// Added 2026-11-08 on the owner's request. No maker outreach — independent PromptQuorum entry, no hands-on testing.
// Verified on 2026-11-08 against: the official site phone-harness.com (maker Phone Harness Inc., "Backed by Y Combinator" per its own
// homepage), its docs (phone-harness.com/docs), privacy policy (phone-harness.com/privacy, last updated 2026-11-03), the GitHub repository
// github.com/phone-harness/phone-harness (moved from ShawnPana/phone-harness; MIT, created 2026-08-07, last push 2026-11-03), its README and
// install.md, and PyPI (phone-harness 0.3.3 uploaded 2026-11-02). GitHub Releases carry no binary assets; PyPI and the README install path
// is one `uv tool install` command. iPhone control needs macOS 15+ with iPhone Mirroring; Android works over adb on macOS, Linux and Windows.
// Cloud prices read from phone-harness.com on 2026-11-08 (USD only): Basic $0/mo + 5 cents per phone-minute, Plus $20/mo with 1,000 minutes,
// Cloud iPhone $80/mo ($64/mo billed annually). Stars read via the GitHub API on 2026-11-08.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'phone-harness',
  name: 'Phone Harness',
  categories: ['computer-browser-agents', 'autonomous-agents'],
  interfaces: ['cli'],
  locality: 'hybrid', // the harness runs on your own machine against your own phone; hosted cloud phones (and a hosted MCP endpoint) are optional
  platforms: ['mac', 'win', 'linux'], // CLI; iPhone control needs macOS 15+, Android over adb works on all three
  worksWith: ['Claude Code', 'Codex', 'MCP', 'Hermes Agent', 'OpenClaw'], // README: setup prompt for Claude Code/Codex, MCP endpoint, Hermes and OpenClaw plugins
  engine: 'external', // no model of its own; the agent you connect supplies it (screen reading uses Apple Vision OCR or the Android accessibility tree)
  license: 'MIT',
  price: 'freemium', // MIT CLI is free; Phone Harness Cloud is paid per minute or by subscription
  hardware: { ramGb: null, vramGb: null, cpuOnly: null },
  stars: 4670, // github.com/phone-harness/phone-harness, verified via GitHub API 2026-11-08
  addedDate: '2026-11-08',
  status: 'listed',
  uses: ['agent', 'phone'],
  url: 'phone-harness.com',
  storeLinks: {
    web: 'https://phone-harness.com',
    github: 'https://github.com/phone-harness/phone-harness',
  },
  installEffort: 'one-command',
  installEvidence:
    'install.md and README checked 2026-11-08: `uv tool install --python 3.12 --upgrade --force phone-harness` (needs uv and Python 3.12; PyPI 0.3.3, wheel plus sdist). GitHub Releases list tags 0.3.3 and earlier with no downloadable assets and the site offers no installer; iPhone control also needs macOS 15+ with iPhone Mirroring paired to an iOS 18+ phone, Android needs adb with USB debugging.',
  tagline: {
    en: 'Open-source CLI that lets a coding agent tap, type and scroll an iPhone or Android phone, with optional hosted cloud phones',
    de: 'Open-Source-CLI, mit der ein Coding-Agent ein iPhone oder Android-Telefon antippen, bedienen und scrollen kann, optional mit gehosteten Cloud-Telefonen',
    fr: "CLI open source qui permet à un agent de code de toucher, saisir et faire défiler l'écran d'un iPhone ou d'un téléphone Android, avec des téléphones cloud hébergés en option",
    ja: 'コーディングエージェントがiPhoneやAndroidをタップ・入力・スクロールできるオープンソースのCLI。ホスト型クラウドフォンも選択可能',
    zh: '开源命令行工具，让编程智能体点击、输入并滚动 iPhone 或 Android 手机，另可选用托管云手机',
    es: 'CLI de código abierto que permite a un agente de programación tocar, escribir y desplazarse en un iPhone o un teléfono Android, con teléfonos en la nube opcionales',
    pt: 'CLI de código aberto que permite a um agente de programação tocar, digitar e rolar a tela de um iPhone ou de um celular Android, com celulares na nuvem opcionais',
    ar: 'أداة سطر أوامر مفتوحة المصدر تتيح لوكيل برمجة النقر والكتابة والتمرير على iPhone أو هاتف Android، مع هواتف سحابية مستضافة اختيارية',
    ko: '코딩 에이전트가 iPhone이나 Android 휴대폰을 탭하고 입력하고 스크롤할 수 있게 하는 오픈소스 CLI. 호스팅형 클라우드 폰도 선택 가능',
  },
  // Comparison attributes: each value taken from the project's own README/site on 2026-11-08; a missing key = not stated there, never false.
  // localLlm and ollama stay unset: the README names Claude Code, Codex and other coding agents and never states local-model or Ollama support.
  // webBrowsing stays unset (it drives phone apps, not a browser); memory and sandbox are not stated.
  compare: {},
  reviewSlug: 'phone-harness-review',
  mcpSupport: true, // README: hosted MCP endpoint https://mcp.phone-harness.com/mcp (cloud Android and iPhone only for now)
  pqReview: {
    date: '2026-11-08',
    version: '0.3.3',
    versionSourceUrl: 'https://pypi.org/project/phone-harness/',
  },
  verdict:
    'Best for developers who already use a coding agent such as Claude Code or Codex and want it to operate a real iPhone or Android phone without jailbreaking it or installing anything on the phone; limited by OCR that reads text but not unlabeled icons, no multi-touch or Face ID flows, iPhone control that needs a Mac, a very young project (first commit August 2026, version 0.3.x) and cloud-phone logging that its own privacy policy describes.',
  lastVerifiedDate: '2026-11-08',
  lastUpstreamUpdate: '2026-11-03', // GitHub API: last push 2026-11-03 (newer than release 0.3.3 on 2026-11-02), read 2026-11-08
  lastUpstreamUpdateSource: 'https://github.com/phone-harness/phone-harness',
}
