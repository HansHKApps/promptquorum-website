// Local AI App Directory — Cherry Studio (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'cherry-studio',
  name: 'Cherry Studio',
  categories: ['general-chat-clients'],
  interfaces: ['desktop'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio'],
  engine: 'external',
  license: 'AGPL 3.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // github.com/CherryHQ/cherry-studio has no published hardware requirements (open issue CherryHQ/cherry-studio#9440 requests adding them); floor depends on the model backend configured, verified 2026-09-13
  stars: 52008, // github.com/CherryHQ/cherry-studio, checked 2026-09-20
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat', 'agent', 'docs'],
  mcpSupport: true,
  url: 'cherryai.com',
  tagline: {
    en: 'Agent-based AI desktop app with many providers and MCP tools',
    de: 'Agent-basierte KI-Desktop-App mit vielen Anbietern und MCP-Tools',
    fr: 'App de bureau IA à Agents, multi-fournisseurs et outils MCP',
    ja: 'エージェント型AIデスクトップアプリ。多数のプロバイダーとMCPツールに対応',
    zh: '以Agent为核心的AI桌面应用,支持多家提供商和MCP工具',
    es: 'App de IA de escritorio con agentes, muchos proveedores y MCP',
    pt: 'App de IA para desktop com Agentes, vários provedores e MCP',
    ar: 'تطبيق سطح مكتب قائم على الوكلاء مع مزودين كثر وأدوات MCP',
    ko: '다수 제공업체와 MCP 도구를 지원하는 에이전트 기반 AI 데스크톱 앱',
  },
  reviewSlug: 'cherry-studio-ai-desktop-client-2026', // dedicated PromptQuorum review — pinned to #1 in the article index
  storeLinks: {
    github: 'https://github.com/CherryHQ/cherry-studio',
    web: 'https://cherryai.com',
  },
  lastVerifiedDate: '2026-09-20', // license, stars, platforms and release status checked against the GitHub repo/releases API; maker statement supplied by the Cherry Studio team by email 2026-09-20
  // No founderReviewedDate on purpose: the "Founder-reviewed" badge means the maker fact-checked this
  // entry's specs. Seth supplied a statement and corrections but has not yet reviewed the updated entry.
  founder: {
    who: {
      en: 'Seth, Cherry Studio Team',
      de: 'Seth, Cherry-Studio-Team',
      fr: 'Seth, équipe Cherry Studio',
      ja: 'Seth、Cherry Studioチーム',
      zh: 'Seth,Cherry Studio团队',
      es: 'Seth, equipo de Cherry Studio',
      pt: 'Seth, equipe do Cherry Studio',
      ar: 'Seth، فريق Cherry Studio',
      ko: 'Seth, Cherry Studio 팀',
    },
    // The statement's own closing idea, verbatim; used where the full quote isn't shown (copy-as-text).
    why: {
      en: 'All they should need to say is "Help me get this done," and the Agent will automatically decide whether to query the knowledge base, trigger OCR, generate an image, process a file, or write a note.',
      de: 'Sie sollen nur noch sagen: „Hilf mir, das zu erledigen“, und der Agent entscheidet automatisch, ob er die Wissensdatenbank abfragt, OCR auslöst, ein Bild generiert, eine Datei verarbeitet oder eine Notiz schreibt.',
      fr: 'Il leur suffira de dire « Aide-moi à faire ça », et l\'Agent décidera automatiquement s\'il faut interroger la base de connaissances, déclencher l\'OCR, générer une image, traiter un fichier ou rédiger une note.',
      ja: '必要なのは「これを片付けて」と言うだけ。あとはエージェントが、ナレッジベースに問い合わせるか、OCRを起動するか、画像を生成するか、ファイルを処理するか、ノートを書くかを自動的に判断します。',
      zh: '他们只需要说一句“帮我把这件事办好”,Agent就会自动决定是查询知识库、触发OCR、生成图片、处理文件,还是写一条笔记。',
      es: 'Todo lo que deberían necesitar decir es “Ayúdame a terminar esto”, y el agente decidirá automáticamente si consulta la base de conocimiento, activa el OCR, genera una imagen, procesa un archivo o escribe una nota.',
      pt: 'Tudo o que precisarão dizer é “Ajude-me a resolver isto”, e o Agente decidirá automaticamente se deve consultar a base de conhecimento, acionar o OCR, gerar uma imagem, processar um arquivo ou escrever uma nota.',
      ar: 'كل ما يحتاجون إلى قوله هو «ساعدني في إنجاز هذا»، وسيقرر الوكيل تلقائياً هل يستعلم من قاعدة المعرفة، أو يشغّل OCR، أو يولّد صورة، أو يعالج ملفاً، أو يكتب ملاحظة.',
      ko: '사용자는 ‘이 일을 처리해 줘’라고 말하기만 하면 되고, 에이전트가 지식 베이스를 조회할지, OCR을 실행할지, 이미지를 생성할지, 파일을 처리할지, 노트를 작성할지 자동으로 결정합니다.',
    },
    // Tile excerpt: the statement's key sentence, verbatim (the full quote opens with the 1.x-era problem).
    pullQuote: {
      en: 'All they should need to say is "Help me get this done," and the Agent will automatically decide whether to query the knowledge base, trigger OCR, generate an image, process a file, or write a note.',
      de: 'Sie sollen nur noch sagen: „Hilf mir, das zu erledigen“, und der Agent entscheidet automatisch, ob er die Wissensdatenbank abfragt, OCR auslöst, ein Bild generiert, eine Datei verarbeitet oder eine Notiz schreibt.',
      fr: 'Il leur suffira de dire « Aide-moi à faire ça », et l\'Agent décidera automatiquement s\'il faut interroger la base de connaissances, déclencher l\'OCR, générer une image, traiter un fichier ou rédiger une note.',
      ja: '必要なのは「これを片付けて」と言うだけ。あとはエージェントが、ナレッジベースに問い合わせるか、OCRを起動するか、画像を生成するか、ファイルを処理するか、ノートを書くかを自動的に判断します。',
      zh: '他们只需要说一句“帮我把这件事办好”,Agent就会自动决定是查询知识库、触发OCR、生成图片、处理文件,还是写一条笔记。',
      es: 'Todo lo que deberían necesitar decir es “Ayúdame a terminar esto”, y el agente decidirá automáticamente si consulta la base de conocimiento, activa el OCR, genera una imagen, procesa un archivo o escribe una nota.',
      pt: 'Tudo o que precisarão dizer é “Ajude-me a resolver isto”, e o Agente decidirá automaticamente se deve consultar a base de conhecimento, acionar o OCR, gerar uma imagem, processar um arquivo ou escrever uma nota.',
      ar: 'كل ما يحتاجون إلى قوله هو «ساعدني في إنجاز هذا»، وسيقرر الوكيل تلقائياً هل يستعلم من قاعدة المعرفة، أو يشغّل OCR، أو يولّد صورة، أو يعالج ملفاً، أو يكتب ملاحظة.',
      ko: '사용자는 ‘이 일을 처리해 줘’라고 말하기만 하면 되고, 에이전트가 지식 베이스를 조회할지, OCR을 실행할지, 이미지를 생성할지, 파일을 처리할지, 노트를 작성할지 자동으로 결정합니다.',
    },
    providedDate: '2026-09-20',
    // Verbatim statement from the Cherry Studio team (English original; other languages are translations),
    // same text as the "From the Maker" section in the review article.
    fullQuote: {
      en: ['In the past, users had to actively learn how to create a knowledge base, call tools, configure models, and navigate different features. But moving forward, we want users to never have to think about any of that. All they should need to say is "Help me get this done," and the Agent will automatically decide whether to query the knowledge base, trigger OCR, generate an image, process a file, or write a note. Every capability becomes nothing more than another tool the Agent can call.'],
      de: ['Früher mussten Nutzer aktiv lernen, wie man eine Wissensdatenbank anlegt, Tools aufruft, Modelle konfiguriert und sich durch verschiedene Funktionen navigiert. Künftig wollen wir aber, dass Nutzer an nichts davon mehr denken müssen. Sie sollen nur noch sagen: „Hilf mir, das zu erledigen“, und der Agent entscheidet automatisch, ob er die Wissensdatenbank abfragt, OCR auslöst, ein Bild generiert, eine Datei verarbeitet oder eine Notiz schreibt. Jede Fähigkeit wird zu nichts weiter als einem weiteren Tool, das der Agent aufrufen kann.'],
      fr: ['Autrefois, les utilisateurs devaient apprendre activement à créer une base de connaissances, à appeler des outils, à configurer des modèles et à naviguer entre différentes fonctions. Mais à l\'avenir, nous voulons que les utilisateurs n\'aient plus jamais à y penser. Il leur suffira de dire « Aide-moi à faire ça », et l\'Agent décidera automatiquement s\'il faut interroger la base de connaissances, déclencher l\'OCR, générer une image, traiter un fichier ou rédiger une note. Chaque capacité devient simplement un outil de plus que l\'Agent peut appeler.'],
      ja: ['これまでユーザーは、ナレッジベースの作り方、ツールの呼び出し方、モデルの設定方法、さまざまな機能の操作方法を、自分から学ぶ必要がありました。しかしこれからは、ユーザーがそうしたことを一切考えなくて済むようにしたいと考えています。必要なのは「これを片付けて」と言うだけ。あとはエージェントが、ナレッジベースに問い合わせるか、OCRを起動するか、画像を生成するか、ファイルを処理するか、ノートを書くかを自動的に判断します。あらゆる機能は、エージェントが呼び出せる単なるツールの1つになります。'],
      zh: ['过去,用户必须主动学习如何创建知识库、调用工具、配置模型,并在不同功能之间来回切换。但今后,我们希望用户完全不必再考虑这些。他们只需要说一句“帮我把这件事办好”,Agent就会自动决定是查询知识库、触发OCR、生成图片、处理文件,还是写一条笔记。每一项能力都只是Agent可以调用的又一个工具。'],
      es: ['Antes, los usuarios tenían que aprender activamente a crear una base de conocimiento, llamar a herramientas, configurar modelos y moverse entre distintas funciones. Pero de ahora en adelante queremos que los usuarios nunca tengan que pensar en nada de eso. Todo lo que deberían necesitar decir es “Ayúdame a terminar esto”, y el agente decidirá automáticamente si consulta la base de conocimiento, activa el OCR, genera una imagen, procesa un archivo o escribe una nota. Cada capacidad pasa a ser simplemente otra herramienta que el agente puede usar.'],
      pt: ['No passado, os usuários precisavam aprender ativamente a criar uma base de conhecimento, chamar ferramentas, configurar modelos e navegar por diferentes recursos. Daqui para frente, porém, queremos que os usuários nunca precisem pensar em nada disso. Tudo o que precisarão dizer é “Ajude-me a resolver isto”, e o Agente decidirá automaticamente se deve consultar a base de conhecimento, acionar o OCR, gerar uma imagem, processar um arquivo ou escrever uma nota. Cada capacidade passa a ser apenas mais uma ferramenta que o Agente pode chamar.'],
      ar: ['في الماضي كان على المستخدمين أن يتعلموا بأنفسهم كيف ينشئون قاعدة معرفة، ويستدعون الأدوات، ويضبطون النماذج، ويتنقلون بين الميزات المختلفة. أما في المستقبل فنريد ألا يضطر المستخدمون إلى التفكير في أي من ذلك. كل ما يحتاجون إلى قوله هو «ساعدني في إنجاز هذا»، وسيقرر الوكيل تلقائياً هل يستعلم من قاعدة المعرفة، أو يشغّل OCR، أو يولّد صورة، أو يعالج ملفاً، أو يكتب ملاحظة. تصبح كل قدرة مجرد أداة أخرى يمكن للوكيل استدعاؤها.'],
      ko: ['과거에는 사용자가 지식 베이스를 만드는 방법, 도구를 호출하는 방법, 모델을 설정하는 방법, 여러 기능을 탐색하는 방법을 직접 배워야 했습니다. 하지만 앞으로는 사용자가 그런 것을 전혀 고민할 필요가 없기를 바랍니다. 사용자는 ‘이 일을 처리해 줘’라고 말하기만 하면 되고, 에이전트가 지식 베이스를 조회할지, OCR을 실행할지, 이미지를 생성할지, 파일을 처리할지, 노트를 작성할지 자동으로 결정합니다. 모든 기능은 에이전트가 호출할 수 있는 또 하나의 도구에 지나지 않게 됩니다.'],
    },
  },
  changelog: [
    {
      date: '2026-09-20',
      note: 'Updated for Cherry Studio 2.0 (stable 2026-08-05): now Agent-centric; official site moved to cherryai.com; latest release v2.1.0.',
      source: 'founder',
    },
  ],
}
