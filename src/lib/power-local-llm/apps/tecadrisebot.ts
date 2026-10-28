// Local AI App Directory — TecAdRiseBot (layer: agent, Windows desktop multi-agent chat on the Cursor SDK)
// Added 2026-10-28 on Hans's request from the product page https://tecadrise.ai/products/tecadrisebot (maker statements arrived the same day, see `founder` below).
// Verified 2026-10-28 against: the product page and its bundled FAQ/comparison pages (tecadrise.ai/products/tecadrisebot,
// /vs/tecadrisebot-vs-grok-bot), the GitHub repo tecadrise-ai/TecAdRiseBot (README, package.json "version": "0.1.0", MIT LICENSE,
// created 2026-09-19, last push 2026-10-23, 0 stars, Releases = one "demo-video" tag with tecadrisebot-demo.mp4 and no installer) and the Cursor
// TypeScript SDK docs (cursor.com/docs/sdk/typescript: "All inference goes through Cursor's hosted models in both modes").
// Locality is `hybrid`, NOT `local`: the app, agent config, memory and workspaces live on the PC, but every model call goes to Cursor's hosted
// models through a Cursor API key, which Cursor bills separately. The vendor's "runs locally" / "local-first" wording describes the app and its files.
// Install: the README's only path is `git clone` + `npm install` + `npm run dev` (Node 22.13+), so the tier is `terminal-setup`.
// No founder is named on the site; the legal page (tecadrise.ai/terms) is the company's general website/services policy (updated "January 2025")
// and does not mention the app.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'tecadrisebot',
  name: 'TecAdRiseBot',
  categories: ['autonomous-agents'],
  interfaces: ['desktop'],
  locality: 'hybrid', // app, memory and workspaces on the PC; all inference through Cursor's hosted models (Cursor SDK docs, 2026-10-28)
  platforms: ['win'], // Windows 10/11 only; the site says "Mac support may come later"
  worksWith: ['Cursor API', 'MCP', 'Playwright MCP', 'AgentMail'],
  engine: 'external', // no model is bundled; the Cursor SDK calls Cursor's hosted catalog
  license: 'MIT',
  price: 'free', // the app is free; Cursor bills the pasted API key separately (site, 2026-10-28)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // no RAM/GPU figures stated; needs Node.js 22.13+ and npm 10+ (README, 2026-10-28)
  stars: 0, // GitHub API, 2026-10-28 (repo created 2026-09-19)
  addedDate: '2026-10-28',
  status: 'listed',
  uses: ['agent', 'chat'],
  mcpSupport: true, // global and per-agent MCP JSON; Playwright and AgentMail MCP servers bundled on first launch (README)
  reviewSlug: 'tecadrisebot-review',
  url: 'tecadrise.ai/products/tecadrisebot',
  storeLinks: {
    github: 'https://github.com/tecadrise-ai/TecAdRiseBot',
    web: 'https://tecadrise.ai/products/tecadrisebot',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'README quick start is git clone, npm install, npm run dev (Node 22.13+, npm 10+); GitHub Releases holds only a "demo-video" tag with tecadrisebot-demo.mp4 and no installer; read 2026-10-28',
  pqReview: {
    date: '2026-10-28',
    version: '0.1.0',
    versionSourceUrl: 'https://raw.githubusercontent.com/tecadrise-ai/TecAdRiseBot/master/package.json',
  },
  tagline: {
    en: 'Free Windows desktop for named AI agents with memory, MCP, skills and schedules, built on the Cursor SDK',
    de: 'Kostenloser Windows-Desktop für benannte KI-Agenten mit Gedächtnis, MCP, Skills und Zeitplänen, auf Basis des Cursor SDK',
    fr: 'Bureau Windows gratuit pour agents IA nommés avec mémoire, MCP, skills et planification, basé sur le SDK Cursor',
    ja: 'Cursor SDKベースの無料Windowsデスクトップ。メモリ、MCP、スキル、スケジュールを備えた名前付きAIエージェントを管理',
    zh: '基于 Cursor SDK 的免费 Windows 桌面应用，管理具备记忆、MCP、技能和定时任务的命名 AI 智能体',
    es: 'Escritorio gratuito para Windows con agentes de IA con nombre, memoria, MCP, skills y programación, basado en el SDK de Cursor',
    pt: 'Desktop gratuito para Windows com agentes de IA nomeados, memória, MCP, skills e agendamento, baseado no SDK do Cursor',
    ar: 'تطبيق سطح مكتب مجاني لنظام Windows لوكلاء ذكاء اصطناعي مسمّين بذاكرة وMCP ومهارات وجداول زمنية، مبني على Cursor SDK',
    ko: 'Cursor SDK 기반의 무료 Windows 데스크톱 앱. 메모리, MCP, 스킬, 일정을 갖춘 이름 있는 AI 에이전트를 관리합니다',
  },
  // Comparison attributes: each value verified 2026-10-28 against the project's README/site and the Cursor SDK docs; a missing key = not stated there.
  compare: { localLlm: false, memory: true, webBrowsing: true },
  lastVerifiedDate: null, // TODO: the maker sent comments on 2026-10-28 but has not reviewed the finished review
  lastUpstreamUpdate: '2026-10-23', // GitHub API pushed_at, read 2026-10-28 (latest commit "Add per-agent workspace memory.md next to shared host Memory")
  lastUpstreamUpdateSource: 'https://github.com/tecadrise-ai/TecAdRiseBot',
  // 2026-10-28: TecAdRise (the maker; the message was unsigned, no individual is named) sent a "why we built it" note, an "on local LLMs and Cursor" statement and links.
  // founderReviewedDate is deliberately NOT set: the maker supplied comments but has not reviewed or approved the finished review (owner rule 2026-10-20).
  founder: {
    who: {
      en: 'TecAdRise, maker of TecAdRiseBot',
      de: 'TecAdRise, Hersteller von TecAdRiseBot',
      es: 'TecAdRise, creador de TecAdRiseBot',
      fr: 'TecAdRise, éditeur de TecAdRiseBot',
      ja: 'TecAdRise、TecAdRiseBotの開発元',
      pt: 'TecAdRise, desenvolvedora do TecAdRiseBot',
      ar: 'TecAdRise، الجهة المطوّرة لتطبيق TecAdRiseBot',
      zh: 'TecAdRise，TecAdRiseBot 的开发方',
      ko: 'TecAdRise, TecAdRiseBot 개발사',
    },
    providedDate: '2026-10-28',
    why: {
      en: 'We built TecAdRise Bot because we needed a local multi-agent desktop shell on Windows that we could own end to end, without locking the workflow into a hosted chat UI.',
      de: 'Wir haben TecAdRise Bot gebaut, weil wir eine lokale Multi-Agent-Desktop-Shell für Windows brauchten, die wir von Anfang bis Ende selbst besitzen können, ohne den Workflow an eine gehostete Chat-Oberfläche zu binden.',
      es: 'Creamos TecAdRise Bot porque necesitábamos un shell de escritorio multiagente local en Windows del que pudiéramos ser dueños de principio a fin, sin encerrar el flujo de trabajo en una interfaz de chat alojada.',
      fr: 'Nous avons créé TecAdRise Bot parce que nous avions besoin d\'un shell de bureau multi-agents local sous Windows que nous pouvions maîtriser de bout en bout, sans enfermer le flux de travail dans une interface de chat hébergée.',
      ja: 'TecAdRise Botを作ったのは、ワークフローをホスト型のチャットUIに縛りつけることなく、Windows上で最初から最後まで自分たちで管理できるローカルのマルチエージェント用デスクトップシェルが必要だったからです。',
      pt: 'Criamos o TecAdRise Bot porque precisávamos de um shell de desktop multiagente local no Windows que pudéssemos controlar de ponta a ponta, sem prender o fluxo de trabalho a uma interface de chat hospedada.',
      ar: 'بنينا TecAdRise Bot لأننا احتجنا إلى غلاف سطح مكتب محلي متعدد الوكلاء على Windows نملكه من البداية إلى النهاية، دون حبس سير العمل داخل واجهة دردشة مستضافة.',
      zh: '我们开发 TecAdRise Bot，是因为我们需要一个可以从头到尾完全自主掌控的 Windows 本地多智能体桌面外壳，而不是把工作流锁死在托管的聊天界面里。',
      ko: '저희는 Windows에서 처음부터 끝까지 직접 소유할 수 있는 로컬 멀티 에이전트 데스크톱 셸이 필요해서, 워크플로를 호스팅된 채팅 UI에 묶어 두지 않고 TecAdRise Bot을 만들었습니다.',
    },
    limits: {
      en: 'Today the chat shell talks to models through the Cursor SDK (and Cursor\'s model routing). We are not yet wired to a fully offline local LLM stack for agent coding work.',
      de: 'Heute spricht die Chat-Shell über das Cursor SDK (und das Modell-Routing von Cursor) mit den Modellen. Wir sind noch nicht an einen vollständig offline laufenden lokalen LLM-Stack für Agenten-Coding-Aufgaben angebunden.',
      es: 'Hoy el shell de chat habla con los modelos a través del Cursor SDK (y del enrutamiento de modelos de Cursor). Todavía no estamos conectados a una pila de LLM local totalmente sin conexión para el trabajo de programación con agentes.',
      fr: 'Aujourd\'hui, le shell de chat dialogue avec les modèles via le SDK Cursor (et le routage de modèles de Cursor). Nous ne sommes pas encore reliés à une pile de LLM locaux entièrement hors ligne pour le travail de codage d\'agents.',
      ja: '現時点では、チャットシェルはCursor SDK（およびCursorのモデルルーティング）を通じてモデルとやり取りします。エージェントによるコーディング作業向けの、完全オフラインのローカルLLM環境にはまだ接続していません。',
      pt: 'Hoje o shell de chat conversa com os modelos por meio do Cursor SDK (e do roteamento de modelos do Cursor). Ainda não estamos conectados a uma pilha de LLM local totalmente offline para trabalho de programação com agentes.',
      ar: 'اليوم يتحدث غلاف الدردشة إلى النماذج عبر Cursor SDK (وعبر توجيه النماذج لدى Cursor). لم نربطه بعد بمنظومة LLM محلية تعمل دون اتصال بالكامل لأعمال البرمجة بالوكلاء.',
      zh: '目前，聊天外壳通过 Cursor SDK（以及 Cursor 的模型路由）与模型对话。我们还没有接入可完全离线运行的本地大模型方案来完成智能体编程工作。',
      ko: '현재 채팅 셸은 Cursor SDK(그리고 Cursor의 모델 라우팅)를 통해 모델과 통신합니다. 저희는 에이전트 코딩 작업을 위한 완전한 오프라인 로컬 LLM 스택에는 아직 연결되어 있지 않습니다.',
    },
    pullQuote: {
      en: 'Today the chat shell talks to models through the Cursor SDK (and Cursor\'s model routing). We are not yet wired to a fully offline local LLM stack for agent coding work.',
      de: 'Heute spricht die Chat-Shell über das Cursor SDK (und das Modell-Routing von Cursor) mit den Modellen. Wir sind noch nicht an einen vollständig offline laufenden lokalen LLM-Stack für Agenten-Coding-Aufgaben angebunden.',
      es: 'Hoy el shell de chat habla con los modelos a través del Cursor SDK (y del enrutamiento de modelos de Cursor). Todavía no estamos conectados a una pila de LLM local totalmente sin conexión para el trabajo de programación con agentes.',
      fr: 'Aujourd\'hui, le shell de chat dialogue avec les modèles via le SDK Cursor (et le routage de modèles de Cursor). Nous ne sommes pas encore reliés à une pile de LLM locaux entièrement hors ligne pour le travail de codage d\'agents.',
      ja: '現時点では、チャットシェルはCursor SDK（およびCursorのモデルルーティング）を通じてモデルとやり取りします。エージェントによるコーディング作業向けの、完全オフラインのローカルLLM環境にはまだ接続していません。',
      pt: 'Hoje o shell de chat conversa com os modelos por meio do Cursor SDK (e do roteamento de modelos do Cursor). Ainda não estamos conectados a uma pilha de LLM local totalmente offline para trabalho de programação com agentes.',
      ar: 'اليوم يتحدث غلاف الدردشة إلى النماذج عبر Cursor SDK (وعبر توجيه النماذج لدى Cursor). لم نربطه بعد بمنظومة LLM محلية تعمل دون اتصال بالكامل لأعمال البرمجة بالوكلاء.',
      zh: '目前，聊天外壳通过 Cursor SDK（以及 Cursor 的模型路由）与模型对话。我们还没有接入可完全离线运行的本地大模型方案来完成智能体编程工作。',
      ko: '현재 채팅 셸은 Cursor SDK(그리고 Cursor의 모델 라우팅)를 통해 모델과 통신합니다. 저희는 에이전트 코딩 작업을 위한 완전한 오프라인 로컬 LLM 스택에는 아직 연결되어 있지 않습니다.',
    },
    fullQuote: {
      en: [
        'We built TecAdRise Bot because we needed a local multi-agent desktop shell on Windows that we could own end to end: separate agents with their own models, instructions, workspaces, scheduled routines, and tools, without locking the workflow into a hosted chat UI. Existing options were either cloud-only, single-agent, or closed. TecAdRise Bot is a free open-source Grok Bot-style Electron app driven by the Cursor TypeScript SDK, so agents run on the machine with skills, MCP/tools, inter-bot messages, and a localhost control plane. We use it ourselves for outbound, research, and ops, and published it so others can run the same pattern.',
        'Today the chat shell talks to models through the Cursor SDK (and Cursor\'s model routing). We are not yet wired to a fully offline local LLM stack for agent coding work. Connecting local / open-weight models when quality is strong enough for multi-agent coding and tool use is on the roadmap; the product already runs as a local Windows desktop app with local workspaces, skills, and tools. When that local-model path lands, we will be a better fit for a pure local-LLM page; until then the honest framing is local desktop multi-agent shell + Cursor SDK, not fully offline inference.',
      ],
      de: [
        'Wir haben TecAdRise Bot gebaut, weil wir eine lokale Multi-Agent-Desktop-Shell für Windows brauchten, die wir von Anfang bis Ende selbst besitzen können: getrennte Agenten mit eigenen Modellen, Anweisungen, Arbeitsbereichen, geplanten Routinen und Werkzeugen, ohne den Workflow an eine gehostete Chat-Oberfläche zu binden. Die vorhandenen Optionen waren entweder reine Cloud-Lösungen, Single-Agent-Lösungen oder geschlossen. TecAdRise Bot ist eine kostenlose Open-Source-Electron-App im Stil von Grok Bot, gesteuert über das Cursor TypeScript SDK, sodass die Agenten mit Skills, MCP/Tools, Nachrichten zwischen den Bots und einer Localhost-Steuerungsebene auf dem Rechner laufen. Wir nutzen sie selbst für Outbound, Recherche und Betrieb und haben sie veröffentlicht, damit andere dasselbe Muster einsetzen können.',
        'Heute spricht die Chat-Shell über das Cursor SDK (und das Modell-Routing von Cursor) mit den Modellen. Wir sind noch nicht an einen vollständig offline laufenden lokalen LLM-Stack für Agenten-Coding-Aufgaben angebunden. Die Anbindung lokaler Modelle bzw. Open-Weight-Modelle, sobald deren Qualität für Multi-Agent-Coding und Tool-Nutzung ausreicht, steht auf der Roadmap; das Produkt läuft bereits als lokale Windows-Desktop-App mit lokalen Arbeitsbereichen, Skills und Tools. Sobald dieser Weg zu lokalen Modellen steht, passen wir besser zu einer reinen Seite über lokale LLMs; bis dahin lautet die ehrliche Einordnung: lokale Desktop-Multi-Agent-Shell + Cursor SDK, keine vollständig offline laufende Inferenz.',
      ],
      es: [
        'Creamos TecAdRise Bot porque necesitábamos un shell de escritorio multiagente local en Windows del que pudiéramos ser dueños de principio a fin: agentes independientes, cada uno con sus propios modelos, instrucciones, espacios de trabajo, rutinas programadas y herramientas, sin encerrar el flujo de trabajo en una interfaz de chat alojada. Las opciones existentes eran solo en la nube, de un solo agente o cerradas. TecAdRise Bot es una app Electron gratuita y de código abierto al estilo de Grok Bot, impulsada por el Cursor TypeScript SDK, de modo que los agentes se ejecutan en la máquina con skills, MCP/herramientas, mensajes entre bots y un plano de control en localhost. Nosotros mismos la usamos para outbound, investigación y operaciones, y la publicamos para que otros puedan seguir el mismo patrón.',
        'Hoy el shell de chat habla con los modelos a través del Cursor SDK (y del enrutamiento de modelos de Cursor). Todavía no estamos conectados a una pila de LLM local totalmente sin conexión para el trabajo de programación con agentes. Conectar modelos locales / de pesos abiertos cuando su calidad sea lo bastante buena para la programación multiagente y el uso de herramientas está en la hoja de ruta; el producto ya funciona como una app de escritorio local para Windows con espacios de trabajo, skills y herramientas locales. Cuando ese camino de modelos locales llegue, encajaremos mejor en una página exclusivamente de LLM locales; hasta entonces, el planteamiento honesto es shell de escritorio multiagente local + Cursor SDK, no inferencia totalmente sin conexión.',
      ],
      fr: [
        'Nous avons créé TecAdRise Bot parce que nous avions besoin d\'un shell de bureau multi-agents local sous Windows que nous pouvions maîtriser de bout en bout : des agents distincts avec leurs propres modèles, instructions, espaces de travail, routines planifiées et outils, sans enfermer le flux de travail dans une interface de chat hébergée. Les solutions existantes étaient soit uniquement cloud, soit mono-agent, soit fermées. TecAdRise Bot est une appli Electron gratuite et open source de type Grok Bot-style, pilotée par le Cursor TypeScript SDK, de sorte que les agents tournent sur la machine avec des skills, du MCP/des outils, des messages entre bots et un plan de contrôle en localhost. Nous l\'utilisons nous-mêmes pour l\'outbound, la recherche et les opérations, et nous l\'avons publiée pour que d\'autres puissent appliquer le même schéma.',
        'Aujourd\'hui, le shell de chat dialogue avec les modèles via le SDK Cursor (et le routage de modèles de Cursor). Nous ne sommes pas encore reliés à une pile de LLM locaux entièrement hors ligne pour le travail de codage d\'agents. Connecter des modèles locaux / à poids ouverts, lorsque leur qualité sera suffisante pour le codage multi-agents et l\'usage d\'outils, figure sur la feuille de route ; le produit fonctionne déjà comme une appli de bureau Windows locale, avec des espaces de travail, des skills et des outils locaux. Quand cette voie des modèles locaux sera disponible, nous conviendrons mieux à une page purement consacrée aux LLM locaux ; d\'ici là, le cadrage honnête est : shell de bureau multi-agents local + SDK Cursor, et non une inférence entièrement hors ligne.',
      ],
      ja: [
        'TecAdRise Botを作ったのは、Windows上で最初から最後まで自分たちで管理できるローカルのマルチエージェント用デスクトップシェルが必要だったからです。エージェントごとに独自のモデル、指示、ワークスペース、スケジュール実行のルーティン、ツールを持たせられ、ワークフローをホスト型のチャットUIに縛りつけないものです。既存の選択肢は、クラウド専用か、単一エージェントか、クローズドのいずれかでした。TecAdRise Botは、Cursor TypeScript SDKで動く、無料でオープンソースのGrok Bot-style Electronアプリで、エージェントはスキル、MCP/ツール、ボット間メッセージ、localhostのコントロールプレーンとともにマシン上で動作します。私たち自身もアウトバウンド、リサーチ、運用に使っており、同じやり方を他の人も実行できるよう公開しました。',
        '現時点では、チャットシェルはCursor SDK（およびCursorのモデルルーティング）を通じてモデルとやり取りします。エージェントによるコーディング作業向けの、完全オフラインのローカルLLM環境にはまだ接続していません。マルチエージェントによるコーディングやツール利用に十分な品質になった段階で、ローカル／オープンウェイトのモデルに接続することはロードマップに入っています。製品はすでに、ローカルのワークスペース、スキル、ツールを備えたローカルのWindowsデスクトップアプリとして動作しています。そのローカルモデル対応が実現すれば、純粋なローカルLLMのページにより適したものになりますが、それまでの正直な位置づけは、ローカルのデスクトップ型マルチエージェントシェル＋Cursor SDKであり、完全オフラインの推論ではありません。',
      ],
      pt: [
        'Criamos o TecAdRise Bot porque precisávamos de um shell de desktop multiagente local no Windows que pudéssemos controlar de ponta a ponta: agentes separados, cada um com seus próprios modelos, instruções, workspaces, rotinas agendadas e ferramentas, sem prender o fluxo de trabalho a uma interface de chat hospedada. As opções existentes eram apenas em nuvem, de agente único ou fechadas. O TecAdRise Bot é um app Electron gratuito e de código aberto, no estilo do Grok Bot, movido pelo Cursor TypeScript SDK, de modo que os agentes rodam na máquina com skills, MCP/ferramentas, mensagens entre bots e um plano de controle em localhost. Nós mesmos o usamos para prospecção (outbound), pesquisa e operações, e o publicamos para que outros possam rodar o mesmo padrão.',
        'Hoje o shell de chat conversa com os modelos por meio do Cursor SDK (e do roteamento de modelos do Cursor). Ainda não estamos conectados a uma pilha de LLM local totalmente offline para trabalho de programação com agentes. Conectar modelos locais / de pesos abertos, quando a qualidade for boa o bastante para programação multiagente e uso de ferramentas, está no roteiro; o produto já roda como um app desktop local no Windows, com workspaces, skills e ferramentas locais. Quando esse caminho com modelos locais chegar, seremos mais adequados para uma página de LLM local pura; até lá, o enquadramento honesto é shell desktop multiagente local + Cursor SDK, não inferência totalmente offline.',
      ],
      ar: [
        'بنينا TecAdRise Bot لأننا احتجنا إلى غلاف سطح مكتب محلي متعدد الوكلاء على Windows نملكه من البداية إلى النهاية: وكلاء منفصلون لكلٍّ منهم نماذجه وتعليماته ومساحات عمله وروتيناته المجدولة وأدواته، دون حبس سير العمل داخل واجهة دردشة مستضافة. كانت الخيارات القائمة إما سحابية فقط، أو بوكيل واحد، أو مغلقة. TecAdRise Bot تطبيق Electron مجاني ومفتوح المصدر على غرار Grok Bot، يعمل بواسطة Cursor TypeScript SDK، فتعمل الوكلاء على الجهاز مع المهارات وأدوات MCP والرسائل بين الروبوتات وواجهة تحكم محلية على localhost. نستخدمه بأنفسنا في التواصل الصادر والبحث والعمليات، ونشرناه ليتمكن الآخرون من تشغيل النمط نفسه.',
        'اليوم يتحدث غلاف الدردشة إلى النماذج عبر Cursor SDK (وعبر توجيه النماذج لدى Cursor). لم نربطه بعد بمنظومة LLM محلية تعمل دون اتصال بالكامل لأعمال البرمجة بالوكلاء. ربط النماذج المحلية / مفتوحة الأوزان حين تصبح جودتها كافية للبرمجة متعددة الوكلاء واستخدام الأدوات مدرج في خارطة الطريق؛ والمنتج يعمل بالفعل كتطبيق سطح مكتب محلي على Windows بمساحات عمل ومهارات وأدوات محلية. وعندما يصل مسار النماذج المحلية هذا سنكون أنسب لصفحة مخصصة للنماذج المحلية بحتة؛ وإلى ذلك الحين فالتوصيف الصادق هو: غلاف سطح مكتب محلي متعدد الوكلاء + Cursor SDK، وليس استدلالًا يعمل دون اتصال بالكامل.',
      ],
      zh: [
        '我们开发 TecAdRise Bot，是因为我们需要一个可以从头到尾完全自主掌控的 Windows 本地多智能体桌面外壳：各个智能体有各自的模型、指令、工作区、定时任务和工具，而不是把工作流锁死在托管的聊天界面里。现有的选择要么只有云端，要么只支持单智能体，要么是闭源的。TecAdRise Bot 是一款免费开源、Grok Bot 风格的 Electron 应用，由 Cursor TypeScript SDK 驱动，因此智能体在本机运行，并带有技能、MCP/工具、智能体之间的消息，以及一个 localhost 控制平面。我们自己也用它来做外联、研究和运维，并把它发布出来，让别人也能采用同样的做法。',
        '目前，聊天外壳通过 Cursor SDK（以及 Cursor 的模型路由）与模型对话。我们还没有接入可完全离线运行的本地大模型方案来完成智能体编程工作。当质量强到足以胜任多智能体编程和工具调用时，接入本地/开放权重模型已列入路线图；产品本身已经是一款带有本地工作区、技能和工具的本地 Windows 桌面应用。等本地模型这条路径落地后，我们会更适合出现在纯本地大模型页面上；在那之前，诚实的定位是本地桌面多智能体外壳 + Cursor SDK，而不是完全离线推理。',
      ],
      ko: [
        '저희는 Windows에서 처음부터 끝까지 직접 소유할 수 있는 로컬 멀티 에이전트 데스크톱 셸이 필요해서 TecAdRise Bot을 만들었습니다. 에이전트마다 고유한 모델, 지침, 작업 공간, 예약 루틴, 도구를 갖추고, 워크플로를 호스팅된 채팅 UI에 묶어 두지 않는 구조입니다. 기존 선택지는 클라우드 전용이거나, 단일 에이전트이거나, 폐쇄형이었습니다. TecAdRise Bot은 Cursor TypeScript SDK로 구동되는 무료 오픈소스 Grok Bot 스타일의 Electron 앱이므로, 에이전트가 스킬, MCP/도구, 봇 간 메시지, localhost 제어 플레인과 함께 컴퓨터에서 실행됩니다. 저희는 아웃바운드, 리서치, 운영에 직접 사용하고 있으며, 다른 분들도 같은 방식으로 쓸 수 있도록 공개했습니다.',
        '현재 채팅 셸은 Cursor SDK(그리고 Cursor의 모델 라우팅)를 통해 모델과 통신합니다. 저희는 에이전트 코딩 작업을 위한 완전한 오프라인 로컬 LLM 스택에는 아직 연결되어 있지 않습니다. 멀티 에이전트 코딩과 도구 사용에 충분한 품질이 확보되는 시점에 로컬/오픈 웨이트 모델을 연결하는 것이 로드맵에 있습니다. 이 제품은 이미 로컬 작업 공간, 스킬, 도구를 갖춘 로컬 Windows 데스크톱 앱으로 실행됩니다. 이 로컬 모델 경로가 갖춰지면 순수 로컬 LLM 페이지에 더 잘 맞게 될 것입니다. 그때까지 솔직한 설명은 로컬 데스크톱 멀티 에이전트 셸 + Cursor SDK이며, 완전한 오프라인 추론이 아닙니다.',
      ],
    },
  },
}
