// Local AI App Directory — Open Science Desktop (formerly "Open Science") by the ai4s-research organisation, sponsored and primarily maintained by APEVON TECHNOLOGIES PTE. LTD.
// (layer: desktop AI research workbench with a bundled OpenCode agent runtime; bring-your-own model provider)
// Added 2026-11-17 from PromptQuorum's own research (not hands-on tested). No maker outreach: independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-17: official website (openedscience.com home, /download/, /docs/, /ai4s-research/, /open-science-desktop-vs-openscience/), GitHub repository
// ai4s-research/open-science (API metadata, README on the default branch "master", LICENSE head, Releases API incl. v0.7.3 asset list and release notes, commits).
// Notes:
// - No existing tile under another name: searched src/lib/power-local-llm and docs for "open science", "openedscience", "ai4s", "openscience" (nothing).
// - NAME COLLISION: "OpenScience" by Synthetic Sciences is a different, independent Apache-2.0 project (npm/npx CLI that opens a browser workspace), per the maker's own comparison page. Not this app.
// - Stars: GitHub API 2104 on 2026-11-17. Repo created 2026-07-03.
// - License: LICENSE file on master is MIT ("Copyright (c) 2026 AI4S Workbench contributors"); GitHub's licence detector reports "Other/NOASSERTION", so the licence is taken from the file text.
//   Bundled third-party skills and connectors keep their own licences (README).
// - Version: latest GitHub release v0.7.3, published 2026-11-16. The website's download page still says v0.7.2 (2026-11-07) and its docs describe an xattr workaround
//   and unsigned installers, while the README/release notes say the macOS builds are Developer ID signed and notarized. GitHub is the primary source used here.
// - engine = 'external': the app bundles an OpenCode sidecar runtime; the model comes from the user's own provider key (OpenCode provider catalog, OpenAI-compatible endpoints, ACP agents).
//   PromptQuorum did NOT run a local model through it, so no built-in local engine is claimed.
// - Hardware: no RAM/GPU requirement stated in README/site (only OS: macOS 13+, Windows 10/11 x64, Linux deb/rpm). Left null.
// - HQ country SG: openedscience.com/ai4s-research/ says "sponsored and primarily maintained by APEVON TECHNOLOGIES PTE. LTD. (Singapore)"; footer of every page names the same company.
//   No privacy policy, terms or imprint page exists on the site (/privacy, /privacy-policy, /terms, /about, /imprint, /impressum all returned 404 on 2026-11-17); the sponsor page names a contact email for privacy.
// - Price: free app (MIT); the user supplies their own model provider key and "provider usage may incur charges" (download page).
// - Last upstream update: 2026-11-17 (last commit, GitHub pushed_at 2026-11-17T10:22Z; latest release v0.7.3 on 2026-11-16) => NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'open-science-desktop',
  name: 'Open Science Desktop',
  categories: ['search-deep-research', 'general-chat-clients', 'writing-email'],
  interfaces: ['desktop', 'cli'],
  locality: 'hybrid', // workspace files, history and provenance stay in local folders by default; prompts go to the model provider the user selects (cloud unless a local endpoint is connected, untested by PromptQuorum)
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['OpenCode', 'Claude Code', 'Codex', 'Gemini CLI'],
  engine: 'external', // bundled OpenCode agent runtime; the model is the user's own provider or endpoint
  license: 'MIT',
  price: 'free', // app is free; model-provider usage is billed by the provider the user connects
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no requirement stated; depends on the model/provider connected
  stars: 2104,
  addedDate: '2026-11-17',
  status: 'listed',
  uses: ['chat', 'agent', 'docs'],
  url: 'openedscience.com',
  storeLinks: {
    github: 'https://github.com/ai4s-research/open-science',
    web: 'https://openedscience.com',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-17 the GitHub release v0.7.3 listed Open.Science_0.7.3_aarch64.dmg and _x64.dmg (macOS), Open.Science_0.7.3_x64-setup.exe and _x64_en-US.msi (Windows), and .deb/.rpm packages for x86_64 and ARM64 (Linux). The website download page links the same installers. A terminal-only osd CLI archive and a no-root install script also exist.',
  mcpSupport: true,
  tagline: {
    en: 'Free desktop AI research workbench with agent chat, notebooks, figures and reports, local project folders and your own model provider.',
    de: 'Kostenlose Desktop-Arbeitsumgebung für KI-gestützte Forschung mit Agenten-Chat, Notebooks, Abbildungen und Berichten, lokalen Projektordnern und Ihrem eigenen Modellanbieter.',
    fr: 'Poste de travail de recherche IA gratuit pour ordinateur, avec chat d\'agent, notebooks, figures et rapports, dossiers de projet locaux et votre propre fournisseur de modèles.',
    ja: 'エージェントチャット、ノートブック、図表、レポート、ローカルのプロジェクトフォルダー、ご自身のモデルプロバイダーを備えた、無料のデスクトップ向けAI研究ワークベンチ。',
    zh: '免费的桌面 AI 研究工作台，提供智能体对话、笔记本、图表和报告，项目文件保存在本地文件夹，并使用您自己的模型提供商。',
    es: 'Banco de trabajo de investigación con IA para escritorio, gratuito, con chat de agentes, cuadernos, figuras e informes, carpetas de proyecto locales y tu propio proveedor de modelos.',
    pt: 'Bancada de pesquisa com IA para desktop, gratuita, com chat de agentes, notebooks, figuras e relatórios, pastas de projeto locais e o seu próprio provedor de modelos.',
    ar: 'منصة عمل بحثية مجانية بالذكاء الاصطناعي لسطح المكتب، تضم محادثة الوكلاء والدفاتر والرسوم والتقارير ومجلدات مشاريع محلية، مع مزوّد النماذج الذي تختاره أنت.',
    ko: '에이전트 채팅, 노트북, 그림, 보고서, 로컬 프로젝트 폴더와 사용자가 고른 모델 제공업체를 갖춘 무료 데스크톱 AI 연구 워크벤치입니다.',
  },
  reviewSlug: 'open-science-desktop-review',
  pqReview: {
    date: '2026-11-17',
    version: '0.7.3',
    versionSourceUrl: 'https://github.com/ai4s-research/open-science/releases/tag/v0.7.3',
  },
  hqCountry: 'SG',
  hqCountrySource: 'https://openedscience.com/ai4s-research/',
  lastVerifiedDate: '2026-11-17',
  lastUpstreamUpdate: '2026-11-17', // GitHub pushed_at 2026-11-17T10:22Z (API, 2026-11-17); latest release v0.7.3 published 2026-11-16
  lastUpstreamUpdateSource: 'https://github.com/ai4s-research/open-science (last commit 2026-11-17; latest release v0.7.3 on 2026-11-16)',
}
