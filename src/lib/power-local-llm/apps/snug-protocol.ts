// Local AI App Directory — Snug Protocol (first tile in the "At the Edge" group)
// Added 2026-10-17 following maker outreach (Jeetu Maker, 2026-10-12). Verified 2026-10-17 against: snugprotocol.org
// (MIT-licensed open protocol; macOS desktop app + browser Playground; no version/date/pricing stated on the site) and the
// GitHub API for snugprotocol/snug (MIT, created 2026-07-31, 2 stars, last push 2026-10-15; newest release "Snug desktop v0.1.3",
// 2026-09-05). Maker says the specification is 1.0 and the implementation is pre-1.0; the desktop app is macOS-only.
// Deliberately NOT claimed: independent adoption, third-party hosts, independent security audit, "industry standard".
// Hardware floor, pricing of the desktop app and installer type were not found in a primary source, so those stay unset.
// No maker quote yet — the founder write-up is a separate step after the maker reviews the feature post.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'snug-protocol',
  name: 'Snug Protocol',
  categories: ['emerging-protocols', 'personal-assistants'],
  interfaces: ['desktop', 'web', 'library'],
  locality: 'hybrid', // host can use local inference (Ollama / OpenAI-compatible endpoints) or hosted models, which see what the app sends them
  platforms: ['mac', 'web'], // macOS desktop reference app + browser Playground
  worksWith: ['Ollama', 'OpenAI-compatible APIs', 'SQLite'],
  engine: 'external', // the host supplies the model at runtime; Snug is the protocol and runtime around it
  license: 'MIT',
  price: 'free', // protocol, specification and reference implementation are MIT-licensed; no paid tier stated
  hardware: null,
  stars: 2,
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['build', 'agent'],
  url: 'snugprotocol.org',
  storeLinks: {
    github: 'https://github.com/snugprotocol/snug',
    web: 'https://playground.snugprotocol.org',
  },
  tagline: {
    en: 'Early-stage open protocol for AI-built personal apps that live in a portable, user-owned .snug file and run on any compatible host',
    de: 'Frühes offenes Protokoll für KI-erstellte persönliche Apps, die in einer portablen, nutzereigenen .snug-Datei leben und auf jedem kompatiblen Host laufen',
    fr: 'Protocole ouvert en phase précoce pour des applications personnelles créées par IA, stockées dans un fichier .snug portable que l\'utilisateur possède et exécutables sur tout hôte compatible',
    ja: 'AIが作る個人用アプリを、ユーザー所有のポータブルな.snugファイルに保存し、互換ホストで動かす初期段階のオープンプロトコル',
    zh: '处于早期阶段的开放协议:由 AI 构建的个人应用保存在用户自有、可移植的 .snug 文件中,可在任何兼容的宿主上运行',
    es: 'Protocolo abierto en fase temprana para aplicaciones personales creadas con IA, guardadas en un archivo .snug portátil y propiedad del usuario, que se ejecutan en cualquier host compatible',
    pt: 'Protocolo aberto em fase inicial para aplicativos pessoais criados por IA, guardados num arquivo .snug portátil e de propriedade do usuário, executáveis em qualquer host compatível',
    ar: 'بروتوكول مفتوح في مرحلة مبكرة لتطبيقات شخصية يبنيها الذكاء الاصطناعي، تُحفظ في ملف .snug محمول يملكه المستخدم وتعمل على أي مضيف متوافق',
    ko: 'AI가 만든 개인용 앱을 사용자가 소유한 이동 가능한 .snug 파일에 담아 호환 호스트에서 실행하는 초기 단계의 오픈 프로토콜',
  },
  compare: {},
  lastVerifiedDate: '2026-10-17',
  lastUpstreamUpdate: '2026-10-15', // newer of latest GitHub release (2026-09-05) and last push (2026-10-15)
  lastUpstreamUpdateSource: 'https://github.com/snugprotocol/snug',
  verdict: 'An idea worth watching rather than a proven standard: the specification, reference implementation, Playground and macOS app are published, but independent hosts, third-party adoption and an independent security review are not established, and the implementation is pre-1.0.',
}
