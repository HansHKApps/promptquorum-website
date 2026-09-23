// UI-string dictionary for /mcp-stats (all 9 locales). Same shape and t()
// lookup pattern as src/components/home/home-i18n.ts and
// src/components/tools/tools-i18n.ts. "Model Context Protocol" and "MCP"
// stay as-is in every language — a protocol name, not a translatable phrase,
// same convention as keeping "API" or "JSON-LD" untranslated site-wide.

import type { Language } from '@/lib/blog/blogContent'

type Dict = Record<Language, string>

const MCP_STATS_UI = {
  eyebrow: {
    en: 'Model Context Protocol', de: 'Model Context Protocol', fr: 'Model Context Protocol',
    ja: 'Model Context Protocol', zh: 'Model Context Protocol', es: 'Model Context Protocol',
    pt: 'Model Context Protocol', ar: 'Model Context Protocol', ko: 'Model Context Protocol',
  },
  pageTitle: {
    en: 'PromptQuorum Speaks MCP', de: 'PromptQuorum spricht MCP', fr: 'PromptQuorum parle MCP',
    ja: 'PromptQuorumはMCPに対応', zh: 'PromptQuorum 支持 MCP', es: 'PromptQuorum habla MCP',
    pt: 'PromptQuorum fala MCP', ar: 'PromptQuorum يتحدث MCP', ko: 'PromptQuorum는 MCP를 지원합니다',
  },
  pageMetaTitle: {
    en: 'MCP Server for AI Assistants', de: 'MCP-Server für KI-Assistenten', fr: 'Serveur MCP pour assistants IA',
    ja: 'AIアシスタント向けMCPサーバー', zh: '面向 AI 助手的 MCP 服务器', es: 'Servidor MCP para asistentes de IA',
    pt: 'Servidor MCP para assistentes de IA', ar: 'خادم MCP لمساعدي الذكاء الاصطناعي', ko: 'AI 어시스턴트를 위한 MCP 서버',
  },
  pageMetaDescription: {
    en: 'Connect Claude or any other MCP-compatible AI assistant to PromptQuorum\'s local-LLM directory and guides. See what the server can do and how much it\'s used.',
    de: 'Verbinden Sie Claude oder einen anderen MCP-kompatiblen KI-Assistenten mit dem lokale-LLM-Verzeichnis und den Guides von PromptQuorum. Sehen Sie, was der Server kann und wie stark er genutzt wird.',
    fr: 'Connectez Claude ou tout autre assistant IA compatible MCP à l\'annuaire et aux guides de LLM locaux de PromptQuorum. Découvrez ce que le serveur peut faire et son niveau d\'utilisation.',
    ja: 'ClaudeなどMCP対応のAIアシスタントを、PromptQuorumのローカルLLMディレクトリとガイドに接続できます。サーバーの機能と利用状況をご覧ください。',
    zh: '将 Claude 或其他兼容 MCP 的 AI 助手连接到 PromptQuorum 的本地 LLM 目录与指南。了解该服务器的功能及使用情况。',
    es: 'Conecta Claude o cualquier otro asistente de IA compatible con MCP al directorio y las guías de LLM locales de PromptQuorum. Descubre qué puede hacer el servidor y cuánto se usa.',
    pt: 'Conecte o Claude ou qualquer outro assistente de IA compatível com MCP ao diretório e aos guias de LLM local da PromptQuorum. Veja o que o servidor pode fazer e o quanto é usado.',
    ar: 'اربط Claude أو أي مساعد ذكاء اصطناعي آخر متوافق مع MCP بدليل وأدلة نماذج اللغة المحلية الخاصة بـ PromptQuorum. تعرّف على قدرات الخادم ومدى استخدامه.',
    ko: 'Claude를 비롯한 MCP 호환 AI 어시스턴트를 PromptQuorum의 로컬 LLM 디렉터리 및 가이드에 연결하세요. 서버가 할 수 있는 일과 사용 현황을 확인해 보세요.',
  },
  intro: {
    en: 'PromptQuorum runs a public, read-only MCP server, so any MCP-compatible AI assistant — Claude, or any other client speaking the open Model Context Protocol — can search the directory and guides, recommend apps for your hardware, and compare tools directly inside your own chat, without you opening a browser tab.',
    de: 'PromptQuorum betreibt einen öffentlichen, schreibgeschützten MCP-Server. Jeder MCP-kompatible KI-Assistent — Claude oder jeder andere Client, der das offene Model Context Protocol spricht — kann damit das Verzeichnis und die Guides durchsuchen, Apps für Ihre Hardware empfehlen und Tools direkt in Ihrem Chat vergleichen, ohne einen Browser-Tab zu öffnen.',
    fr: 'PromptQuorum exploite un serveur MCP public, en lecture seule. N\'importe quel assistant IA compatible MCP — Claude, ou tout autre client parlant le protocole ouvert Model Context Protocol — peut ainsi parcourir l\'annuaire et les guides, recommander des applications selon votre matériel et comparer des outils directement dans votre chat, sans ouvrir d\'onglet de navigateur.',
    ja: 'PromptQuorumは公開・読み取り専用のMCPサーバーを運用しています。Claudeなど、オープンなModel Context Protocolに対応したAIアシスタントであれば、ディレクトリやガイドを検索したり、お使いのハードウェアに合ったアプリを推薦したり、ツールを比較したりすることが、ブラウザを開かずにチャット内で直接できます。',
    zh: 'PromptQuorum 运行着一个公开的只读 MCP 服务器。任何兼容 MCP 的 AI 助手——Claude，或任何其他支持开放 Model Context Protocol 的客户端——都可以直接在你的聊天中搜索目录和指南、根据你的硬件推荐应用、比较各类工具，无需打开浏览器标签页。',
    es: 'PromptQuorum ejecuta un servidor MCP público de solo lectura. Cualquier asistente de IA compatible con MCP —Claude, o cualquier otro cliente que hable el protocolo abierto Model Context Protocol— puede buscar en el directorio y las guías, recomendar apps según tu hardware y comparar herramientas directamente dentro de tu chat, sin abrir una pestaña del navegador.',
    pt: 'A PromptQuorum opera um servidor MCP público e somente leitura. Qualquer assistente de IA compatível com MCP — Claude, ou qualquer outro cliente que fale o protocolo aberto Model Context Protocol — pode buscar no diretório e nos guias, recomendar apps para seu hardware e comparar ferramentas diretamente no seu chat, sem abrir uma aba do navegador.',
    ar: 'تُشغّل PromptQuorum خادم MCP عامًا للقراءة فقط، بحيث يمكن لأي مساعد ذكاء اصطناعي متوافق مع MCP — مثل Claude، أو أي عميل آخر يتحدث بروتوكول Model Context Protocol المفتوح — أن يبحث في الدليل والأدلة الإرشادية، ويوصي بتطبيقات تناسب جهازك، ويقارن الأدوات مباشرة داخل محادثتك، دون فتح علامة تبويب في المتصفح.',
    ko: 'PromptQuorum는 공개된 읽기 전용 MCP 서버를 운영합니다. Claude를 비롯해 개방형 Model Context Protocol을 지원하는 모든 AI 어시스턴트가 브라우저 탭을 열지 않고도 채팅 안에서 디렉터리와 가이드를 검색하고, 사용자의 하드웨어에 맞는 앱을 추천받고, 도구를 직접 비교할 수 있습니다.',
  },
  connectCta: {
    en: 'Connect your AI assistant →', de: 'KI-Assistenten verbinden →', fr: 'Connecter votre assistant IA →',
    ja: 'AIアシスタントを接続 →', zh: '连接你的 AI 助手 →', es: 'Conecta tu asistente de IA →',
    pt: 'Conecte seu assistente de IA →', ar: 'اربط مساعد الذكاء الاصطناعي الخاص بك ←', ko: 'AI 어시스턴트 연결하기 →',
  },
  toolsHeading: {
    en: 'What it can do', de: 'Das kann der Server', fr: 'Ce qu\'il peut faire', ja: 'できること',
    zh: '它能做什么', es: 'Qué puede hacer', pt: 'O que ele pode fazer', ar: 'ما الذي يمكنه فعله',
    ko: '할 수 있는 일',
  },
  usageHeading: {
    en: 'Live usage', de: 'Live-Nutzung', fr: 'Utilisation en direct', ja: 'リアルタイム利用状況',
    zh: '实时使用情况', es: 'Uso en vivo', pt: 'Uso ao vivo', ar: 'الاستخدام المباشر', ko: '실시간 사용 현황',
  },
  usageExplainer: {
    en: 'Aggregate, PII-free call counters — no IP address, user agent, or other identifier is ever recorded, only how many times each tool has been called. Generated {date} UTC.',
    de: 'Aggregierte, PII-freie Aufrufzähler — es werden weder IP-Adresse noch User-Agent oder andere Kennungen gespeichert, sondern nur, wie oft jedes Tool aufgerufen wurde. Erstellt am {date} UTC.',
    fr: 'Compteurs d\'appels agrégés et sans DCP — aucune adresse IP, user agent ou autre identifiant n\'est jamais enregistré, seulement le nombre d\'appels de chaque outil. Généré le {date} UTC.',
    ja: '集計された、個人を特定できない呼び出しカウンターです。IPアドレスやユーザーエージェントなどの識別情報は一切記録されず、各ツールが呼び出された回数のみを記録します。{date} UTC 時点。',
    zh: '这是汇总且不含个人身份信息的调用计数——不记录 IP 地址、User-Agent 或任何其他标识信息，只记录每个工具被调用的次数。生成于 {date} UTC。',
    es: 'Contadores de llamadas agregados y sin datos personales: nunca se registra la dirección IP, el user agent ni ningún otro identificador, solo cuántas veces se ha llamado a cada herramienta. Generado el {date} UTC.',
    pt: 'Contadores de chamadas agregados e sem dados pessoais — nenhum endereço IP, user agent ou outro identificador é registrado, apenas quantas vezes cada ferramenta foi chamada. Gerado em {date} UTC.',
    ar: 'عدادات استدعاء إجمالية وخالية من البيانات الشخصية — لا يُسجَّل عنوان IP أو معرّف المتصفح أو أي معرّف آخر، بل فقط عدد مرات استدعاء كل أداة. تم الإنشاء في {date} بتوقيت UTC.',
    ko: '집계된, 개인 식별 정보 없는 호출 카운터입니다 — IP 주소, 사용자 에이전트, 그 밖의 식별자는 전혀 기록되지 않으며 각 도구가 호출된 횟수만 기록됩니다. {date} UTC 기준 생성됨.',
  },
  totalAllTime: {
    en: 'Total calls, all time', de: 'Aufrufe gesamt', fr: 'Total des appels (depuis le début)',
    ja: '累計呼び出し回数', zh: '历史总调用次数', es: 'Llamadas totales (histórico)',
    pt: 'Total de chamadas (histórico)', ar: 'إجمالي الاستدعاءات منذ البداية', ko: '전체 누적 호출 수',
  },
  tableTool: {
    en: 'Tool', de: 'Tool', fr: 'Outil', ja: 'ツール', zh: '工具', es: 'Herramienta',
    pt: 'Ferramenta', ar: 'الأداة', ko: '도구',
  },
  tableTotalCalls: {
    en: 'Total calls', de: 'Aufrufe gesamt', fr: 'Total des appels', ja: '累計呼び出し回数',
    zh: '总调用次数', es: 'Llamadas totales', pt: 'Total de chamadas', ar: 'إجمالي الاستدعاءات',
    ko: '누적 호출 수',
  },
  tableCallsToday: {
    en: 'Calls today (UTC)', de: 'Aufrufe heute (UTC)', fr: 'Appels aujourd\'hui (UTC)',
    ja: '本日の呼び出し回数（UTC）', zh: '今日调用次数（UTC）', es: 'Llamadas hoy (UTC)',
    pt: 'Chamadas hoje (UTC)', ar: 'الاستدعاءات اليوم (بتوقيت UTC)', ko: '오늘 호출 수 (UTC 기준)',
  },
  rawJsonNote: {
    en: 'Raw JSON: /api/mcp-status. Directory data is editorial, may be outdated, and download links are not verified by PromptQuorum.',
    de: 'Rohdaten (JSON): /api/mcp-status. Verzeichnisdaten sind redaktionell, können veraltet sein, und Download-Links werden nicht von PromptQuorum verifiziert.',
    fr: 'JSON brut : /api/mcp-status. Les données de l\'annuaire sont éditoriales, peuvent être obsolètes, et les liens de téléchargement ne sont pas vérifiés par PromptQuorum.',
    ja: '生のJSON: /api/mcp-status。ディレクトリのデータは編集情報であり、古くなっている場合があります。ダウンロードリンクはPromptQuorumによって検証されていません。',
    zh: '原始 JSON：/api/mcp-status。目录数据为编辑内容，可能已过期，下载链接未经 PromptQuorum 验证。',
    es: 'JSON sin procesar: /api/mcp-status. Los datos del directorio son editoriales, pueden estar desactualizados, y los enlaces de descarga no están verificados por PromptQuorum.',
    pt: 'JSON bruto: /api/mcp-status. Os dados do diretório são editoriais, podem estar desatualizados, e os links de download não são verificados pela PromptQuorum.',
    ar: 'بيانات JSON الخام: /api/mcp-status. بيانات الدليل تحريرية وقد تكون قديمة، وروابط التنزيل غير موثقة من قبل PromptQuorum.',
    ko: '원본 JSON: /api/mcp-status. 디렉터리 데이터는 편집 콘텐츠이며 오래되었을 수 있고, 다운로드 링크는 PromptQuorum이 검증하지 않았습니다.',
  },

  // --- The 8 registered MCP tools (src/app/api/mcp/route.ts) ---
  toolSearchPromptquorumTitle: {
    en: 'Search PromptQuorum', de: 'PromptQuorum durchsuchen', fr: 'Rechercher sur PromptQuorum',
    ja: 'PromptQuorumを検索', zh: '搜索 PromptQuorum', es: 'Buscar en PromptQuorum',
    pt: 'Buscar na PromptQuorum', ar: 'البحث في PromptQuorum', ko: 'PromptQuorum 검색',
  },
  toolSearchPromptquorumDesc: {
    en: 'Search local-LLM guides, prompt-engineering articles, and the software directory.',
    de: 'Durchsucht lokale-LLM-Guides, Prompt-Engineering-Artikel und das Software-Verzeichnis.',
    fr: 'Recherche dans les guides sur les LLM locaux, les articles de prompt engineering et l\'annuaire logiciel.',
    ja: 'ローカルLLMガイド、プロンプトエンジニアリング記事、ソフトウェアディレクトリを検索します。',
    zh: '搜索本地 LLM 指南、提示词工程文章和软件目录。',
    es: 'Busca en las guías de LLM locales, los artículos de ingeniería de prompts y el directorio de software.',
    pt: 'Busca nos guias de LLM local, artigos de engenharia de prompt e no diretório de software.',
    ar: 'يبحث في أدلة نماذج اللغة المحلية، ومقالات هندسة المحفزات، ودليل البرامج.',
    ko: '로컬 LLM 가이드, 프롬프트 엔지니어링 아티클, 소프트웨어 디렉터리를 검색합니다.',
  },
  toolGetArticleTitle: {
    en: 'Get PromptQuorum article', de: 'PromptQuorum-Artikel abrufen', fr: 'Récupérer un article PromptQuorum',
    ja: 'PromptQuorumの記事を取得', zh: '获取 PromptQuorum 文章', es: 'Obtener artículo de PromptQuorum',
    pt: 'Obter artigo da PromptQuorum', ar: 'جلب مقالة من PromptQuorum', ko: 'PromptQuorum 아티클 가져오기',
  },
  toolGetArticleDesc: {
    en: 'Fetch the full content of one article by cluster and slug.',
    de: 'Ruft den vollständigen Inhalt eines Artikels anhand von Cluster und Slug ab.',
    fr: 'Récupère le contenu complet d\'un article via son cluster et son slug.',
    ja: 'クラスターとスラッグを指定して記事の全文を取得します。',
    zh: '通过所属集群和 slug 获取一篇文章的完整内容。',
    es: 'Obtiene el contenido completo de un artículo mediante su clúster y slug.',
    pt: 'Busca o conteúdo completo de um artigo pelo cluster e slug.',
    ar: 'يجلب المحتوى الكامل لمقالة واحدة عبر المجموعة والمعرّف.',
    ko: '클러스터와 슬러그로 아티클의 전체 내용을 가져옵니다.',
  },
  toolListClustersTitle: {
    en: 'List content clusters', de: 'Inhaltscluster auflisten', fr: 'Lister les clusters de contenu',
    ja: 'コンテンツクラスターを一覧表示', zh: '列出内容集群', es: 'Listar clústeres de contenido',
    pt: 'Listar clusters de conteúdo', ar: 'سرد مجموعات المحتوى', ko: '콘텐츠 클러스터 목록',
  },
  toolListClustersDesc: {
    en: 'List every content section on the site with a short description.',
    de: 'Listet jeden Inhaltsbereich der Website mit einer kurzen Beschreibung auf.',
    fr: 'Liste chaque section de contenu du site avec une courte description.',
    ja: 'サイト内のすべてのコンテンツセクションを簡単な説明とともに一覧表示します。',
    zh: '列出网站上的每个内容板块及简短说明。',
    es: 'Lista todas las secciones de contenido del sitio con una breve descripción.',
    pt: 'Lista todas as seções de conteúdo do site com uma breve descrição.',
    ar: 'يسرد كل قسم من أقسام المحتوى في الموقع مع وصف موجز.',
    ko: '사이트의 모든 콘텐츠 섹션을 간단한 설명과 함께 나열합니다.',
  },
  toolGetAppDetailsTitle: {
    en: 'Get directory entry', de: 'Verzeichniseintrag abrufen', fr: 'Obtenir une fiche de l\'annuaire',
    ja: 'ディレクトリの詳細を取得', zh: '获取目录条目', es: 'Obtener ficha del directorio',
    pt: 'Obter ficha do diretório', ar: 'جلب بيانات من الدليل', ko: '디렉터리 항목 가져오기',
  },
  toolGetAppDetailsDesc: {
    en: 'Fetch license, hardware requirements, platforms, price and URL for one tool.',
    de: 'Ruft Lizenz, Hardware-Anforderungen, Plattformen, Preis und URL für ein Tool ab.',
    fr: 'Récupère la licence, la configuration matérielle requise, les plateformes, le prix et l\'URL d\'un outil.',
    ja: '1つのツールのライセンス、ハードウェア要件、対応プラットフォーム、価格、URLを取得します。',
    zh: '获取某个工具的许可证、硬件要求、支持平台、价格和链接。',
    es: 'Obtiene la licencia, los requisitos de hardware, las plataformas, el precio y la URL de una herramienta.',
    pt: 'Busca licença, requisitos de hardware, plataformas, preço e URL de uma ferramenta.',
    ar: 'يجلب الترخيص ومتطلبات الجهاز والمنصات المدعومة والسعر ورابط أداة واحدة.',
    ko: '특정 도구의 라이선스, 하드웨어 요구 사항, 지원 플랫폼, 가격, URL을 가져옵니다.',
  },
  toolListCategoriesTitle: {
    en: 'List categories', de: 'Kategorien auflisten', fr: 'Lister les catégories', ja: 'カテゴリーを一覧表示',
    zh: '列出分类', es: 'Listar categorías', pt: 'Listar categorias', ar: 'سرد الفئات', ko: '카테고리 목록',
  },
  toolListCategoriesDesc: {
    en: 'List directory categories, use cases and operating systems.',
    de: 'Listet Verzeichniskategorien, Anwendungsfälle und Betriebssysteme auf.',
    fr: 'Liste les catégories de l\'annuaire, les cas d\'usage et les systèmes d\'exploitation.',
    ja: 'ディレクトリのカテゴリー、ユースケース、対応OSを一覧表示します。',
    zh: '列出目录分类、使用场景和操作系统。',
    es: 'Lista las categorías del directorio, los casos de uso y los sistemas operativos.',
    pt: 'Lista as categorias do diretório, os casos de uso e os sistemas operacionais.',
    ar: 'يسرد فئات الدليل وحالات الاستخدام وأنظمة التشغيل.',
    ko: '디렉터리 카테고리, 사용 사례, 운영체제를 나열합니다.',
  },
  toolSearchAppsTitle: {
    en: 'Recommend apps', de: 'Apps empfehlen', fr: 'Recommander des applications', ja: 'アプリを推薦',
    zh: '推荐应用', es: 'Recomendar apps', pt: 'Recomendar apps', ar: 'التوصية بتطبيقات', ko: '앱 추천',
  },
  toolSearchAppsDesc: {
    en: 'Recommend local-AI apps from the directory that match a stated goal and hardware.',
    de: 'Empfiehlt lokale KI-Apps aus dem Verzeichnis, die zu einem genannten Ziel und der Hardware passen.',
    fr: 'Recommande des applications d\'IA locale de l\'annuaire correspondant à un objectif et à un matériel donnés.',
    ja: '指定した目的とハードウェアに合ったローカルAIアプリをディレクトリから推薦します。',
    zh: '根据指定目标和硬件，从目录中推荐本地 AI 应用。',
    es: 'Recomienda apps de IA local del directorio que coincidan con un objetivo y un hardware indicados.',
    pt: 'Recomenda apps de IA local do diretório que combinem com um objetivo e hardware informados.',
    ar: 'يوصي بتطبيقات الذكاء الاصطناعي المحلي من الدليل التي تناسب هدفًا وجهازًا محددين.',
    ko: '명시한 목표와 하드웨어에 맞는 로컬 AI 앱을 디렉터리에서 추천합니다.',
  },
  toolCompareAppsTitle: {
    en: 'Compare apps', de: 'Apps vergleichen', fr: 'Comparer des applications', ja: 'アプリを比較',
    zh: '比较应用', es: 'Comparar apps', pt: 'Comparar apps', ar: 'مقارنة التطبيقات', ko: '앱 비교',
  },
  toolCompareAppsDesc: {
    en: 'Compare local-AI apps side by side on license, hardware, platforms and price.',
    de: 'Vergleicht lokale KI-Apps direkt nebeneinander nach Lizenz, Hardware, Plattformen und Preis.',
    fr: 'Compare des applications d\'IA locale côte à côte sur la licence, le matériel, les plateformes et le prix.',
    ja: 'ライセンス、ハードウェア、対応プラットフォーム、価格でローカルAIアプリを並べて比較します。',
    zh: '从许可证、硬件、平台和价格等维度并排比较本地 AI 应用。',
    es: 'Compara apps de IA local una junto a otra según licencia, hardware, plataformas y precio.',
    pt: 'Compara apps de IA local lado a lado por licença, hardware, plataformas e preço.',
    ar: 'يقارن تطبيقات الذكاء الاصطناعي المحلي جنبًا إلى جنب من حيث الترخيص والجهاز والمنصات والسعر.',
    ko: '라이선스, 하드웨어, 플랫폼, 가격 기준으로 로컬 AI 앱을 나란히 비교합니다.',
  },
  toolExplainLicenseTitle: {
    en: 'Explain a license', de: 'Lizenz erklären', fr: 'Expliquer une licence', ja: 'ライセンスを説明',
    zh: '解释许可证', es: 'Explicar una licencia', pt: 'Explicar uma licença', ar: 'شرح الترخيص', ko: '라이선스 설명',
  },
  toolExplainLicenseDesc: {
    en: 'Explain the core rule of a software license (AGPL-3.0, Apache 2.0, MIT, …) in plain language.',
    de: 'Erklärt die Kernregel einer Software-Lizenz (AGPL-3.0, Apache 2.0, MIT, …) in einfacher Sprache.',
    fr: 'Explique la règle essentielle d\'une licence logicielle (AGPL-3.0, Apache 2.0, MIT, …) en langage simple.',
    ja: 'ソフトウェアライセンス（AGPL-3.0、Apache 2.0、MITなど）の核心的なルールを平易な言葉で説明します。',
    zh: '用通俗语言解释某个软件许可证（AGPL-3.0、Apache 2.0、MIT 等）的核心规则。',
    es: 'Explica la regla principal de una licencia de software (AGPL-3.0, Apache 2.0, MIT, …) en lenguaje sencillo.',
    pt: 'Explica a regra principal de uma licença de software (AGPL-3.0, Apache 2.0, MIT, …) em linguagem simples.',
    ar: 'يشرح القاعدة الأساسية لترخيص برمجي (AGPL-3.0، Apache 2.0، MIT، ...) بلغة مبسطة.',
    ko: '소프트웨어 라이선스(AGPL-3.0, Apache 2.0, MIT 등)의 핵심 규칙을 쉬운 말로 설명합니다.',
  },
} as const satisfies Record<string, Dict>

type McpStatsUiKey = keyof typeof MCP_STATS_UI

export function t(key: McpStatsUiKey, lang: Language, vars?: Record<string, string | number>): string {
  const entry = MCP_STATS_UI[key]
  let text: string = entry[lang] ?? entry.en
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.split(`{${k}}`).join(String(v))
    }
  }
  return text
}
