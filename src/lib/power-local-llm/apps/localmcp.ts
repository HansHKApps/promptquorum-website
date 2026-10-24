// Local AI App Directory — LocalMCP (layer: agent / personal assistant — local MCP server for Mac data)
// Added 2026-10-24 on the owner's request (siliconshelf.app/apps/localmcp as the pointer). Facts read from primary sources on 2026-10-24,
// not from SiliconShelf: the Mac App Store listing id6811374818 (iTunes lookup: v1.5.1, current version released 2026-10-22, first release
// 2026-10-18, macOS 15.0+, 3.95 MB, EN/DE, Productivity, age 4+, App Privacy label "Data Not Collected", $3.99 US / 4,99 € DE/AT/ES/FR /
// ¥600 JP / ₩6,600 KR / R$ 24,90 BR / ¥28.00 CN), the developer page www.mobilebox-consulting.de/weitere-anwendungen/localmcp/ ("Einmaliger Kauf")
// and the developer's company-wide privacy policy. The website the store listing names (godmodeai2025.github.io/AppleMCP) returned 404 on
// 2026-10-24 and github.com/godmodeai2025/AppleMCP does not exist, so no source repository is known — closed source. No hands-on testing.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'localmcp',
  name: 'LocalMCP',
  categories: ['personal-assistants', 'local-search'],
  interfaces: ['desktop'],
  locality: 'local', // runs a local MCP server on the Mac; the listing says it sends no content to a developer backend, but passes content to the MCP client the user connects, which may be cloud-based — read 2026-10-24
  platforms: ['mac'], // Mac App Store, macOS 15.0 or later; no iPhone/iPad/Windows build listed
  worksWith: ['MCP', 'Claude Code', 'Apple Intelligence', 'Apple Mail', 'Apple Notes', 'Apple Shortcuts'], // developer page names MCP-capable apps "such as Claude Code" and local clients with local LLMs
  engine: 'external', // text tools use Apple's on-device language model on macOS 26+ with Apple Intelligence; the AI client is the user's own
  license: 'Proprietary', // closed source, no repository found 2026-10-24
  price: 'paid', // one-time purchase per the developer page; $3.99 on the US storefront
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // only macOS 15+ is stated; Apple's local model needs macOS 26+, supported hardware and Apple Intelligence — read 2026-10-24
  stars: null,
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['agent'],
  url: 'www.mobilebox-consulting.de/weitere-anwendungen/localmcp', // developer's own product page (the listing's github.io site is a 404)
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/localmcp/id6811374818?mt=12',
  },
  installEffort: 'installer',
  installEvidence: 'Mac App Store listing id6811374818 ($3.99 US, macOS 15.0+, 3.95 MB, v1.5.1) and the developer page "LocalMCP ist aktuell im Mac App Store erhältlich"; checked 2026-10-24',
  tagline: {
    en: 'Mac App Store app that runs a local MCP server so your AI client can search Mail, Calendar, Contacts, Reminders and Notes, only for the sources you approve',
    de: 'Mac-App-Store-App mit lokalem MCP-Server, über den Ihr KI-Client Mail, Kalender, Kontakte, Erinnerungen und Notizen durchsuchen kann, nur für freigegebene Quellen',
    fr: 'App du Mac App Store qui exécute un serveur MCP local pour que votre client IA recherche Mail, Calendrier, Contacts, Rappels et Notes, uniquement dans les sources autorisées',
    ja: 'ローカルMCPサーバーを動かすMac App Storeアプリ。許可したソース（メール・カレンダー・連絡先・リマインダー・メモ）だけをAIクライアントから検索できます',
    zh: '运行本地 MCP 服务器的 Mac App Store 应用，让你的 AI 客户端只在你授权的来源中搜索邮件、日历、通讯录、提醒事项和备忘录',
    es: 'App de la Mac App Store que ejecuta un servidor MCP local para que tu cliente de IA busque en Mail, Calendario, Contactos, Recordatorios y Notas, solo en las fuentes que autorices',
    pt: 'App da Mac App Store que executa um servidor MCP local para o seu cliente de IA pesquisar Mail, Calendário, Contatos, Lembretes e Notas, apenas nas fontes que você autorizar',
    ar: 'تطبيق من Mac App Store يشغّل خادم MCP محليًا ليبحث عميل الذكاء الاصطناعي لديك في Mail والتقويم وجهات الاتصال والتذكيرات والملاحظات، في المصادر التي تسمح بها فقط',
    ko: '로컬 MCP 서버를 실행하는 Mac App Store 앱으로, 허용한 소스(메일·캘린더·연락처·미리 알림·메모)에 대해서만 AI 클라이언트가 검색할 수 있습니다',
  },
  mcpSupport: true, // the app is an MCP server — App Store description, read 2026-10-24
  reviewSlug: 'localmcp-review',
  // Comparison attributes: none set (personal-assistants segment); the sources state no offline mode for the connected AI client, so nothing is claimed.
  compare: {},
  pqReview: {
    date: '2026-10-24',
    version: '1.5.1',
    versionSourceUrl: 'https://apps.apple.com/us/app/localmcp/id6811374818?mt=12',
  },
  verdict: 'Best for Mac users who already run an MCP client and want it to search their own Mail, Calendar, Notes and Reminders with per-source approval; a connector rather than an assistant, closed source and brand new, so judge it on the listing alone.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-22', // Mac App Store: current version 1.5.1 released 2026-10-22T04:47:54Z (iTunes lookup), read 2026-10-24
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/localmcp/id6811374818?mt=12',
}
