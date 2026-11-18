// Local AI App Directory — Minutes (layer: free, open-source (MIT) conversation memory app: records and transcribes meetings, voice memos and dictation on the user's computer and keeps them as Markdown files that Claude, Codex or any MCP client can search)
// Added 2026-11-18 at the owner's request (ranked list). No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18: useminutes.app (home page, /privacy dated 23 March 2026, /security, /for-agents, /compare, /llms.txt; /terms, /about, /imprint and /contact return 404),
// GitHub repository silverstein/minutes (API metadata, README, docs/install.md, docs/features.md, release v0.34.0 with asset list and notes, release list, commits, owner profile).
// Notes:
// - Stars: GitHub API 1607 on 2026-11-18 (owner's list said 1,605). Repo created 2026-03-18, MIT per GitHub API and README.
// - Version: v0.34.0, published 2026-11-17 (v0.33.2 on 2026-11-12, v0.33.1 on 2026-11-11, v0.33.0 on 2026-11-09). Last commit on main 2026-11-17.
// - Install: release v0.34.0 ships Minutes_0.34.0_aarch64.dmg (macOS, Apple Silicon), minutes-desktop-windows-x64-setup.exe plus a portable .exe and .zip (Windows), minutes-linux-x64 (CLI only),
//   minutes.mcpb (Claude Desktop extension) and SHA256SUMS.txt. README: brew install --cask silverstein/tap/minutes (desktop), brew install silverstein/tap/minutes (CLI), cargo install minutes-cli,
//   npx -y minutes-mcp (MCP server, Node.js 22 recommended). docs/install.md: the notarized Homebrew cask and update feed track the Apple Silicon desktop build; Intel Macs on macOS 15+ build from source;
//   the prebuilt Linux CLI needs glibc 2.39 or newer (Ubuntu 24.04 validated). There is no Linux desktop app among the release assets. Windows desktop installer exists, so installOn = mac + win.
// - engine = 'both': ships its own local transcription (whisper.cpp; Parakeet v3 through a bundled plugin on Apple Silicon) and speaker labels (pyannote ONNX), while summaries and agent answers come
//   from an external assistant the user chooses (Claude on an existing subscription, other MCP clients, or a local model through Ollama). PromptQuorum did NOT run any of it.
// - locality 'hybrid': maker states capture, transcription, diarization and storage run on the user's computer; connected cloud assistants and summarizers receive the context the user authorizes
//   (README, /security). Setup and updates download models and software (/security).
// - Privacy claims (maker, unverified): /privacy (dated 23 March 2026) says no analytics, no telemetry, no crash reports, no account and "no network requests to our servers"; /security adds that setup and updates
//   can download models and software and that the website counts visits with Cloudflare Web Analytics. PromptQuorum did not inspect network traffic.
// - Price: free (README: "no paid tier for anything in this repo"); cloud AI assistants the user connects are billed by their providers.
// - HQ country: NOT SET (owner decision 2026-11-18: no flag when unclear). /privacy, /security and the README name no company address, governing law or country; /terms, /about, /imprint, /contact return 404.
//   The GitHub profile of the maker lists "United States" and X1 Wealth as company, which is not a company-HQ statement for this project.
// - Categories: agent-memory first, then dictation, meeting-notes and mcp-servers-skills (owner's list: agent memory, dictation, MCP, meeting notes).
// - Compare (speech-to-text segment): realtime = true (docs/features.md: `minutes live` starts real-time transcription), speakerLabels = true (README/site/install docs: on-device speaker diarization;
//   the install guide notes a known Windows build issue with diarization when building from source). languages, cpuUsable and apiServer are not documented in the sources read, so they stay unset.
// Last upstream update: 2026-11-17 (last commit on main 2026-11-17T16:16Z via GitHub API; latest release v0.34.0 published 2026-11-17) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'minutes',
  name: 'Minutes',
  categories: ['agent-memory', 'dictation', 'meeting-notes', 'mcp-servers-skills'],
  interfaces: ['desktop', 'cli'],
  locality: 'hybrid', // capture, transcription and storage on the user's computer (maker); cloud assistants receive only the context the user authorizes
  platforms: ['mac', 'win', 'linux'], // desktop app: macOS (Apple Silicon) and Windows; Linux is the prebuilt CLI only
  worksWith: ['Claude Code', 'Codex', 'Cursor', 'Gemini CLI', 'OpenCode', 'Claude Desktop', 'Obsidian', 'Logseq', 'Ollama', 'Whisper', 'Parakeet'], // README "Works with", dictation and install docs
  engine: 'both', // own local transcription and speaker labels; summaries and answers come from the assistant the user connects
  license: 'MIT', // GitHub API and README
  price: 'free', // README: free, MIT, no paid tier for anything in the repo; cloud assistants billed by their providers
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no memory or GPU minimum found in README or install guide; speech model choice changes the load
  stars: 1607,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['audio', 'agent', 'docs'],
  url: 'useminutes.app',
  storeLinks: {
    github: 'https://github.com/silverstein/minutes',
    web: 'https://useminutes.app',
  },
  installEffort: 'installer',
  installOn: ['mac', 'win'],
  installEvidence: 'On 2026-11-18 the GitHub release v0.34.0 listed Minutes_0.34.0_aarch64.dmg (macOS, Apple Silicon) and minutes-desktop-windows-x64-setup.exe (Windows) as desktop installers, plus a Linux CLI binary (minutes-linux-x64), a Claude Desktop extension (minutes.mcpb) and SHA256SUMS.txt. The README also documents brew install --cask silverstein/tap/minutes and cargo install minutes-cli. The install guide says the Homebrew cask and update feed track the Apple Silicon build and that Intel Macs build from source. Linux has no desktop installer.',
  tagline: {
    en: 'Free MIT-licensed app (per the maker, no paid tier; cloud assistants you connect are billed separately) that records and transcribes meetings, voice memos and dictation, saves them as Markdown files and lets Claude, Codex or any MCP client search them',
    de: 'Kostenlose MIT-lizenzierte App (laut Hersteller ohne Bezahlstufe; angebundene Cloud-Assistenten werden separat abgerechnet), die Meetings, Sprachmemos und Diktate aufnimmt und transkribiert, als Markdown-Dateien speichert und für Claude, Codex oder jeden MCP-Client durchsuchbar macht',
    fr: 'Application gratuite sous licence MIT (selon le fabricant, sans offre payante ; les assistants cloud connectés sont facturés à part) qui enregistre et transcrit réunions, mémos vocaux et dictées, les sauvegarde en fichiers Markdown et les rend consultables par Claude, Codex ou tout client MCP',
    ja: '会議、ボイスメモ、音声入力を録音・文字起こしし、Markdownファイルとして保存して、Claude、Codex、任意のMCPクライアントから検索できる、MITライセンスの無料アプリ（メーカーによると有料プランなし。接続するクラウドアシスタントは別途課金）',
    zh: '免费的 MIT 许可应用（据厂商称无付费层级；接入的云端助手另行计费），录制并转写会议、语音备忘录和听写内容，保存为 Markdown 文件，供 Claude、Codex 或任何 MCP 客户端检索',
    es: 'Aplicación gratuita con licencia MIT (según el fabricante, sin nivel de pago; los asistentes en la nube que conectes se facturan aparte) que graba y transcribe reuniones, notas de voz y dictados, los guarda como archivos Markdown y permite que Claude, Codex o cualquier cliente MCP los busquen',
    pt: 'Aplicativo gratuito com licença MIT (segundo o fabricante, sem plano pago; assistentes em nuvem conectados são cobrados à parte) que grava e transcreve reuniões, memos de voz e ditados, salva tudo como arquivos Markdown e permite que Claude, Codex ou qualquer cliente MCP pesquisem',
    ar: 'تطبيق مجاني بترخيص MIT (بحسب الشركة المصنِّعة دون فئة مدفوعة، وتُحاسَب المساعدات السحابية المرتبطة به بشكل منفصل) يسجّل الاجتماعات والمذكرات الصوتية والإملاء وينسخها نصيًا، ويحفظها كملفات Markdown يمكن لـ Claude وCodex وأي عميل MCP البحث فيها',
    ko: '회의, 음성 메모, 받아쓰기를 녹음하고 전사해 Markdown 파일로 저장하며, Claude, Codex 또는 모든 MCP 클라이언트가 검색할 수 있는 무료 MIT 라이선스 앱(제조사에 따르면 유료 등급 없음, 연결하는 클라우드 어시스턴트는 별도 과금)',
  },
  mcpSupport: true, // README and /for-agents: MCP server (npx minutes-mcp) with tools for searching meetings, memos and dictation
  compare: { realtime: true, speakerLabels: true },
  reviewSlug: 'minutes-review',
  pqReview: {
    date: '2026-11-18',
    version: '0.34.0',
    versionSourceUrl: 'https://github.com/silverstein/minutes/releases/tag/v0.34.0',
  },
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-17', // last commit on main 2026-11-17T16:16Z (GitHub API 2026-11-18); latest release v0.34.0 published 2026-11-17
  lastUpstreamUpdateSource: 'https://github.com/silverstein/minutes (last commit 2026-11-17; latest release v0.34.0, 2026-11-17)',
}
