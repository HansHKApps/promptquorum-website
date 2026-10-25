// Local AI App Directory — Open-LLM-VTuber: self-hosted voice chat companion with a Live2D avatar (layer: backend server + web/Electron client, roleplay & companions)
// Added 2026-10-24. Facts verified 2026-10-24 against open-llm-vtuber.github.io (home, /en/docs/quick-start), the GitHub repo
// Open-LLM-VTuber/Open-LLM-VTuber (README, MIT LICENSE with a separate Live2D sample-model notice, GitHub API: Releases, commits, stars) and the
// Open-LLM-VTuber-Web releases (Electron desktop client).
// Latest backend release v1.2.1 published 2025-08-26 (assets: open-llm-vtuber-1.2.1-setup.exe + .dmg = desktop client, Open-LLM-VTuber-v1.2.1-en/zh.zip = backend).
// Commits on main: 2026-05-15 "docs(readme): Fix Trendshift badge link" (docs only); 2026-02-11 "feat: docker #334" + two docker CI fixes (newest functional change);
// 2026-01-25 "feat: add FireredASR support". lastUpstreamUpdate = 2026-02-11 (last functional change) -> older than 180 days = "dead" tier. If the owner counts the
// README-only 2026-05-15 commit instead, the tile would be "quiet" (162 days).
// README: "v2.0 ... a complete rewrite of the codebase" in early planning; no feature requests for v1. No privacy policy found on website or repo.
// Quick-start default stack = Ollama + sherpa-onnx (SenseVoiceSmall) + Edge TTS (needs internet). README says long-term memory is "temporarily removed"; website docs say Letta-based memory.
// The Electron client is unsigned per the docs. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'open-llm-vtuber',
  name: 'Open-LLM-VTuber',
  categories: ['roleplay-companions'],
  interfaces: ['web', 'desktop'],
  locality: 'hybrid', // per the project every component can be local (fully offline), but each of ASR, LLM and TTS can also be a cloud API; the quick-start example uses Edge TTS online
  platforms: ['win', 'mac', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'vLLM', 'sherpa-onnx', 'Faster-Whisper', 'Live2D', 'MCP'],
  engine: 'external', // connects to Ollama, OpenAI-compatible APIs, GGUF, etc.
  license: 'MIT', // code; the bundled Live2D sample models are under a separate Live2D license (README notice)
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no minimum stated; all heavy parts can use APIs (even a Raspberry Pi per the quick-start), local use recommended on Apple silicon, Nvidia or recent AMD GPU
  stars: 14352, // GitHub API read 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat', 'audio'],
  url: 'open-llm-vtuber.github.io',
  storeLinks: {
    github: 'https://github.com/Open-LLM-VTuber/Open-LLM-VTuber',
    web: 'https://open-llm-vtuber.github.io',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'Quick-start (checked 2026-10-24): Git, FFmpeg and uv required, Python 3.10-3.12, git clone --recursive or the Open-LLM-VTuber-v1.2.1-en.zip release asset, uv sync, uv run run_server.py; the optional Electron desktop client (open-llm-vtuber-1.2.1-setup.exe / .dmg on the Open-LLM-VTuber-Web releases, unsigned per the docs) only works while the backend runs',
  tagline: {
    en: 'Free, MIT-licensed voice chat companion with a Live2D avatar that you host yourself, with local or cloud speech and language components',
    de: 'Kostenloser Sprach-Chat-Begleiter unter MIT-Lizenz mit Live2D-Avatar zum Selbsthosten, mit lokalen oder Cloud-Komponenten für Sprache und Sprachmodell',
    fr: 'Compagnon de chat vocal gratuit sous licence MIT avec avatar Live2D à héberger soi-même, avec des composants de voix et de langage locaux ou cloud',
    ja: 'Live2Dアバター付きの無料のMITライセンス音声チャットコンパニオン。自前でホストし、音声と言語の部品はローカルでもクラウドでも選べます',
    zh: '采用 MIT 许可证的免费语音聊天伴侣，带 Live2D 虚拟形象，可自行托管，语音与语言组件可选本地或云端',
    es: 'Compañero de chat de voz gratuito con licencia MIT y avatar Live2D para autoalojar, con componentes de voz y lenguaje locales o en la nube',
    pt: 'Companheiro de chat de voz gratuito com licença MIT e avatar Live2D para auto-hospedar, com componentes de voz e linguagem locais ou na nuvem',
    ar: 'رفيق محادثة صوتية مجاني بترخيص MIT مع شخصية Live2D تستضيفه بنفسك، بمكوّنات صوت ولغة محلية أو سحابية',
    ko: 'Live2D 아바타가 있는 MIT 라이선스 무료 음성 채팅 동반자로, 직접 호스팅하며 음성·언어 구성 요소를 로컬이나 클라우드로 고를 수 있습니다',
  },
  reviewSlug: 'open-llm-vtuber-review',
  pqReview: {
    date: '2026-10-24',
    version: '1.2.1',
    versionSourceUrl: 'https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases',
  },
  verdict: 'Best for tinkerers who can use a terminal and want a self-hosted, voice-driven Live2D companion with swappable local or cloud parts; limited by a developer-style setup, no functional repository change since 2026-02-11 (the maintainers are planning a v2.0 rewrite), no published privacy policy and quality claims PromptQuorum could not check.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-02-11', // last functional commit on main (GitHub API, read 2026-10-24); latest release v1.2.1 is 2025-08-26; a 2026-05-15 commit only changed the README
  lastUpstreamUpdateSource: 'https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/commits/main',
}
