// UI-string dictionary for the "Local AI Tools" homepage section and its two
// new standalone tool pages (What Can I Run? / Can I Run This?). Same shape
// and t() lookup pattern as src/components/home/home-i18n.ts — kept as a
// separate file rather than added to that one so these tool pages (which
// have their own routes, not just a homepage block) can import only what
// they need.

import type { Language } from '@/lib/blog/blogContent'

type Dict = Record<Language, string>

const TOOLS_UI = {
  // --- Homepage "Local AI Tools" section ---
  toolsSectionHeading: {
    en: 'Local AI Tools', de: 'Lokale-KI-Werkzeuge', fr: 'Outils IA locale',
    ja: 'ローカルAIツール', zh: '本地 AI 工具', es: 'Herramientas de IA local',
    pt: 'Ferramentas de IA local', ar: 'أدوات الذكاء الاصطناعي المحلي', ko: '로컬 AI 도구',
  },
  toolsSectionSub: {
    en: 'Three ways to match your hardware to the right software.',
    de: 'Drei Wege, Ihre Hardware mit der passenden Software abzugleichen.',
    fr: 'Trois façons de faire correspondre votre matériel au bon logiciel.',
    ja: 'お使いのハードウェアに合ったソフトウェアを見つける3つの方法。',
    zh: '三种方式，帮你把硬件和合适的软件匹配起来。',
    es: 'Tres formas de hacer coincidir tu hardware con el software adecuado.',
    pt: 'Três formas de combinar seu hardware com o software certo.',
    ar: 'ثلاث طرق لمطابقة جهازك مع البرنامج المناسب.',
    ko: '하드웨어에 맞는 소프트웨어를 찾는 세 가지 방법입니다.',
  },

  // --- Card: VRAM Calculator (links to the existing article/tool page) ---
  vramCalcCardTitle: {
    en: 'VRAM Calculator', de: 'VRAM-Rechner', fr: 'Calculateur de VRAM',
    ja: 'VRAM計算ツール', zh: 'VRAM 计算器', es: 'Calculadora de VRAM',
    pt: 'Calculadora de VRAM', ar: 'حاسبة VRAM', ko: 'VRAM 계산기',
  },
  vramCalcCardDesc: {
    en: 'Work out how much VRAM a model needs before you download it.',
    de: 'Ermitteln Sie, wie viel VRAM ein Modell braucht, bevor Sie es herunterladen.',
    fr: 'Découvrez la VRAM nécessaire pour un modèle avant de le télécharger.',
    ja: 'ダウンロード前に、モデルに必要なVRAM量を確認できます。',
    zh: '在下载模型之前，先算清楚它需要多少 VRAM。',
    es: 'Calcula cuánta VRAM necesita un modelo antes de descargarlo.',
    pt: 'Calcule quanta VRAM um modelo precisa antes de baixá-lo.',
    ar: 'اعرف مقدار VRAM الذي يحتاجه النموذج قبل تنزيله.',
    ko: '다운로드 전에 모델에 필요한 VRAM 용량을 계산해 보세요.',
  },
  vramCalcCardCta: {
    en: 'Open the calculator', de: 'Rechner öffnen', fr: 'Ouvrir le calculateur',
    ja: '計算ツールを開く', zh: '打开计算器', es: 'Abrir la calculadora',
    pt: 'Abrir a calculadora', ar: 'افتح الحاسبة', ko: '계산기 열기',
  },

  // --- Card: What Can I Run? ---
  whatCanIRunCardTitle: {
    en: 'What Can I Run?', de: 'Was kann ich betreiben?', fr: 'Que puis-je exécuter ?',
    ja: '何が動かせる？', zh: '我能运行什么？', es: '¿Qué puedo ejecutar?',
    pt: 'O que posso rodar?', ar: 'ما الذي يمكنني تشغيله؟', ko: '무엇을 실행할 수 있나요?',
  },
  whatCanIRunCardDesc: {
    en: 'Enter your hardware, get local-AI apps that fit.',
    de: 'Geben Sie Ihre Hardware ein und erhalten Sie passende lokale KI-Apps.',
    fr: 'Indiquez votre matériel, obtenez les applications d\'IA locale adaptées.',
    ja: 'ハードウェアを入力すると、動作するローカルAIアプリがわかります。',
    zh: '输入你的硬件配置，获取适合的本地 AI 应用。',
    es: 'Indica tu hardware y obtén las apps de IA local que encajan.',
    pt: 'Informe seu hardware e veja os apps de IA local compatíveis.',
    ar: 'أدخل مواصفات جهازك واحصل على تطبيقات الذكاء الاصطناعي المحلي المناسبة.',
    ko: '하드웨어 사양을 입력하면 맞는 로컬 AI 앱을 알려드립니다.',
  },
  whatCanIRunCardCta: {
    en: 'Find compatible apps', de: 'Passende Apps finden', fr: 'Trouver des applications compatibles',
    ja: '対応アプリを探す', zh: '查找兼容应用', es: 'Buscar apps compatibles',
    pt: 'Encontrar apps compatíveis', ar: 'ابحث عن تطبيقات متوافقة', ko: '호환 앱 찾기',
  },

  // --- Card: Can I Run This? ---
  canIRunThisCardTitle: {
    en: 'Can I Run This?', de: 'Kann ich das betreiben?', fr: 'Puis-je l\'exécuter ?',
    ja: 'これは動かせる？', zh: '我能运行它吗？', es: '¿Puedo ejecutar esto?',
    pt: 'Posso rodar isso?', ar: 'هل يمكنني تشغيل هذا؟', ko: '이것을 실행할 수 있나요?',
  },
  canIRunThisCardDesc: {
    en: 'Pick an app, check it against your hardware.',
    de: 'Wählen Sie eine App und prüfen Sie sie gegen Ihre Hardware.',
    fr: 'Choisissez une application et vérifiez-la avec votre matériel.',
    ja: 'アプリを選んで、お使いのハードウェアと照合します。',
    zh: '选择一个应用，对照你的硬件检查兼容性。',
    es: 'Elige una app y compárala con tu hardware.',
    pt: 'Escolha um app e compare com seu hardware.',
    ar: 'اختر تطبيقًا وتحقق منه مقابل جهازك.',
    ko: '앱을 선택하고 하드웨어와 비교해 보세요.',
  },
  canIRunThisCardCta: {
    en: 'Check an app', de: 'App prüfen', fr: 'Vérifier une application',
    ja: 'アプリを確認', zh: '检查应用', es: 'Comprobar una app',
    pt: 'Verificar um app', ar: 'تحقق من تطبيق', ko: '앱 확인하기',
  },

  // --- Card: Connect via MCP ---
  mcpCardTitle: {
    en: 'Connect via MCP', de: 'Über MCP verbinden', fr: 'Se connecter via MCP',
    ja: 'MCPで接続', zh: '通过 MCP 连接', es: 'Conectar vía MCP',
    pt: 'Conectar via MCP', ar: 'اتصل عبر MCP', ko: 'MCP로 연결',
  },
  mcpCardDesc: {
    en: 'Let Claude, ChatGPT, or any MCP client query this directory directly. Setup, tools, and live usage stats.',
    de: 'Lassen Sie Claude, ChatGPT oder einen beliebigen MCP-Client dieses Verzeichnis direkt abfragen. Einrichtung, Werkzeuge und Live-Nutzungsstatistiken.',
    fr: 'Laissez Claude, ChatGPT ou tout client MCP interroger directement ce répertoire. Configuration, outils et statistiques d\'utilisation en direct.',
    ja: 'Claude、ChatGPT、その他のMCPクライアントからこのディレクトリに直接アクセスできます。セットアップ、ツール、利用統計をご覧いただけます。',
    zh: '让 Claude、ChatGPT 或任何 MCP 客户端直接查询此目录。包含设置说明、工具列表和实时使用统计。',
    es: 'Deja que Claude, ChatGPT o cualquier cliente MCP consulten este directorio directamente. Configuración, herramientas y estadísticas de uso en vivo.',
    pt: 'Deixe o Claude, o ChatGPT ou qualquer cliente MCP consultar este diretório diretamente. Configuração, ferramentas e estatísticas de uso em tempo real.',
    ar: 'اسمح لـ Claude أو ChatGPT أو أي عميل MCP بالاستعلام عن هذا الدليل مباشرة. الإعداد، الأدوات، وإحصاءات الاستخدام الحيّة.',
    ko: 'Claude, ChatGPT 또는 모든 MCP 클라이언트가 이 디렉터리를 직접 조회하도록 하세요. 설정 방법, 도구 목록, 실시간 사용 통계를 확인할 수 있습니다.',
  },
  mcpCardCta: {
    en: 'Set up MCP', de: 'MCP einrichten', fr: 'Configurer MCP',
    ja: 'MCPを設定', zh: '设置 MCP', es: 'Configurar MCP',
    pt: 'Configurar MCP', ar: 'إعداد MCP', ko: 'MCP 설정하기',
  },

  // --- Homepage full-width MCP banner ---
  mcpBannerEyebrow: {
    en: 'PromptQuorum MCP', de: 'PromptQuorum MCP', fr: 'PromptQuorum MCP',
    ja: 'PromptQuorum MCP', zh: 'PromptQuorum MCP', es: 'PromptQuorum MCP',
    pt: 'PromptQuorum MCP', ar: 'PromptQuorum MCP', ko: 'PromptQuorum MCP',
  },
  mcpBannerHeading: {
    en: 'Ask your AI about anything on PromptQuorum. Answers straight from the site.',
    de: 'Fragen Sie Ihre KI zu allem auf PromptQuorum. Antworten direkt von der Website.',
    fr: 'Interrogez votre IA sur tout ce que contient PromptQuorum. Des réponses directement issues du site.',
    ja: 'PromptQuorumのすべてのコンテンツについて、AIに直接質問。回答はサイトから届きます。',
    zh: '就 PromptQuorum 的全部内容直接问你的 AI，答案直接来自本站。',
    es: 'Pregunta a tu IA sobre cualquier contenido de PromptQuorum. Respuestas directamente del sitio.',
    pt: 'Pergunte à sua IA sobre qualquer conteúdo do PromptQuorum. Respostas direto do site.',
    ar: 'اسأل الذكاء الاصطناعي لديك عن أي شيء في PromptQuorum، والإجابات تأتي مباشرة من الموقع.',
    ko: 'PromptQuorum의 모든 콘텐츠에 대해 AI에게 바로 물어보세요. 답변은 사이트에서 직접 가져옵니다.',
  },
  mcpBannerSub: {
    en: 'Connect Claude, ChatGPT, or any MCP client to all of PromptQuorum: the app directory, guides, hands-on tests, and the latest updates. Get sourced answers right inside your chat.',
    de: 'Verbinden Sie Claude, ChatGPT oder einen beliebigen MCP-Client mit ganz PromptQuorum: App-Verzeichnis, Ratgeber, Praxistests und aktuelle Neuigkeiten. Sie erhalten belegte Antworten direkt im Chat.',
    fr: 'Connectez Claude, ChatGPT ou tout client MCP à l\'ensemble de PromptQuorum : répertoire d\'apps, guides, tests pratiques et dernières mises à jour. Obtenez des réponses sourcées directement dans votre chat.',
    ja: 'Claude、ChatGPT、その他のMCPクライアントをPromptQuorum全体（アプリディレクトリ、ガイド、実機テスト、最新情報）に接続。出典付きの回答をチャット内で受け取れます。',
    zh: '将 Claude、ChatGPT 或任何 MCP 客户端连接到整个 PromptQuorum：应用目录、指南、实测评测和最新动态。直接在聊天中获得带来源的回答。',
    es: 'Conecta Claude, ChatGPT o cualquier cliente MCP a todo PromptQuorum: el directorio de apps, guías, pruebas prácticas y las últimas novedades. Recibe respuestas con fuentes sin salir del chat.',
    pt: 'Conecte o Claude, o ChatGPT ou qualquer cliente MCP a todo o PromptQuorum: diretório de apps, guias, testes práticos e as novidades mais recentes. Receba respostas com fontes dentro do próprio chat.',
    ar: 'اربط Claude أو ChatGPT أو أي عميل MCP بكامل PromptQuorum: دليل التطبيقات والأدلة والاختبارات العملية وآخر المستجدات، واحصل على إجابات موثّقة بالمصادر داخل المحادثة نفسها.',
    ko: 'Claude, ChatGPT 또는 모든 MCP 클라이언트를 PromptQuorum 전체(앱 디렉터리, 가이드, 직접 테스트, 최신 소식)에 연결하세요. 출처가 달린 답변을 채팅 안에서 바로 받을 수 있습니다.',
  },
  mcpBannerChip1: {
    en: 'Search the whole site',
    de: 'Die ganze Website durchsuchen',
    fr: 'Rechercher sur tout le site',
    ja: 'サイト全体を検索',
    zh: '搜索全站内容',
    es: 'Buscar en todo el sitio',
    pt: 'Pesquisar no site inteiro',
    ar: 'البحث في الموقع كله',
    ko: '사이트 전체 검색',
  },
  mcpBannerChipDesc1: {
    en: 'Find guides, reviews, and hands-on tests on any topic, with links to the source.',
    de: 'Ratgeber, Reviews und Praxistests zu jedem Thema finden, mit Link zur Quelle.',
    fr: 'Trouvez guides, tests et avis sur n\'importe quel sujet, avec le lien vers la source.',
    ja: 'あらゆるテーマのガイド、レビュー、実機テストを、出典リンク付きで探せます。',
    zh: '按任意主题查找指南、评测和实测，并附来源链接。',
    es: 'Encuentra guías, reseñas y pruebas prácticas de cualquier tema, con enlace a la fuente.',
    pt: 'Encontre guias, análises e testes práticos sobre qualquer tema, com link para a fonte.',
    ar: 'اعثر على الأدلة والمراجعات والاختبارات العملية في أي موضوع مع رابط المصدر.',
    ko: '어떤 주제든 가이드, 리뷰, 직접 테스트를 출처 링크와 함께 찾아줍니다.',
  },
  mcpBannerChip2: {
    en: 'Compare & choose apps',
    de: 'Apps vergleichen & auswählen',
    fr: 'Comparer et choisir des apps',
    ja: 'アプリの比較・選定',
    zh: '对比并挑选应用',
    es: 'Comparar y elegir apps',
    pt: 'Comparar e escolher apps',
    ar: 'مقارنة التطبيقات واختيارها',
    ko: '앱 비교·추천',
  },
  mcpBannerChipDesc2: {
    en: 'Side-by-side comparisons, best-fit picks, local alternatives, and plain-language license explanations.',
    de: 'Vergleiche nebeneinander, passende Empfehlungen, lokale Alternativen und verständliche Lizenzerklärungen.',
    fr: 'Comparatifs côte à côte, recommandations adaptées, alternatives locales et licences expliquées simplement.',
    ja: '並べて比較、最適なアプリの提案、ローカル代替、ライセンスのやさしい解説。',
    zh: '并排对比、最佳匹配推荐、本地替代方案，以及通俗易懂的许可证解读。',
    es: 'Comparativas lado a lado, recomendaciones a medida, alternativas locales y licencias explicadas en lenguaje claro.',
    pt: 'Comparações lado a lado, recomendações sob medida, alternativas locais e licenças explicadas em linguagem simples.',
    ar: 'مقارنات جنبًا إلى جنب، وترشيحات مناسبة، وبدائل محلية، وشرح مبسّط للتراخيص.',
    ko: '나란히 비교, 맞춤 추천, 로컬 대안, 쉬운 라이선스 설명까지 제공합니다.',
  },
  mcpBannerChip3: {
    en: 'Hardware & VRAM checks',
    de: 'Hardware- & VRAM-Checks',
    fr: 'Vérifications matériel et VRAM',
    ja: 'ハードウェア・VRAM確認',
    zh: '硬件与显存检查',
    es: 'Comprobación de hardware y VRAM',
    pt: 'Verificação de hardware e VRAM',
    ar: 'فحص العتاد وVRAM',
    ko: '하드웨어·VRAM 확인',
  },
  mcpBannerChipDesc3: {
    en: 'Tell it your GPU, RAM, or Mac and see which apps and models will actually run.',
    de: 'Nennen Sie GPU, RAM oder Mac und sehen Sie, welche Apps und Modelle wirklich laufen.',
    fr: 'Indiquez votre GPU, votre RAM ou votre Mac et voyez quelles apps et quels modèles tourneront vraiment.',
    ja: 'GPU・RAM・Macの構成を伝えるだけで、実際に動くアプリやモデルがわかります。',
    zh: '告诉它你的 GPU、内存或 Mac，即可知道哪些应用和模型真正跑得动。',
    es: 'Indica tu GPU, RAM o Mac y comprueba qué apps y modelos funcionarán de verdad.',
    pt: 'Informe sua GPU, RAM ou Mac e veja quais apps e modelos realmente rodam.',
    ar: 'أخبره بوحدة GPU أو الذاكرة أو جهاز Mac لديك لترى التطبيقات والنماذج التي ستعمل فعلًا.',
    ko: 'GPU, RAM, Mac 사양을 알려주면 실제로 실행되는 앱과 모델을 알려줍니다.',
  },
  mcpBannerChip4: {
    en: 'Always up to date',
    de: 'Immer aktuell',
    fr: 'Toujours à jour',
    ja: '常に最新',
    zh: '始终保持最新',
    es: 'Siempre al día',
    pt: 'Sempre atualizado',
    ar: 'محدّث دائمًا',
    ko: '항상 최신 상태',
  },
  mcpBannerChipDesc4: {
    en: 'Ask what is new: the latest articles and updates, plus live usage stats of the MCP server.',
    de: 'Fragen Sie nach Neuem: aktuelle Artikel und Updates sowie Live-Nutzungsstatistiken des MCP-Servers.',
    fr: 'Demandez les nouveautés : derniers articles et mises à jour, plus les statistiques d\'usage en direct du serveur MCP.',
    ja: '最新記事や更新情報、MCPサーバーのリアルタイム利用統計を質問できます。',
    zh: '询问最新动态：最新文章与更新，以及 MCP 服务器的实时使用统计。',
    es: 'Pregunta qué hay de nuevo: últimos artículos y actualizaciones, más estadísticas de uso en vivo del servidor MCP.',
    pt: 'Pergunte o que há de novo: últimos artigos e atualizações, além das estatísticas de uso ao vivo do servidor MCP.',
    ar: 'اسأل عن الجديد: أحدث المقالات والتحديثات، مع إحصاءات الاستخدام الحيّة لخادم MCP.',
    ko: '새 소식도 물어보세요. 최신 글과 업데이트, MCP 서버의 실시간 사용 통계를 확인할 수 있습니다.',
  },
  mcpBannerTryLabel: {
    en: 'Try asking',
    de: 'Zum Beispiel fragen',
    fr: 'Essayez de demander',
    ja: 'こんな質問ができます',
    zh: '试试这样问',
    es: 'Prueba a preguntar',
    pt: 'Experimente perguntar',
    ar: 'جرّب أن تسأل',
    ko: '이렇게 물어보세요',
  },
  mcpBannerExample1: {
    en: '“I have a MacBook with 16 GB of RAM. Which local chat apps and models will run well on it?”',
    de: '„Ich habe ein MacBook mit 16 GB RAM. Welche lokalen Chat-Apps und Modelle laufen darauf gut?“',
    fr: '« J\'ai un MacBook avec 16 Go de RAM. Quelles apps de chat locales et quels modèles tourneront bien dessus ? »',
    ja: '「RAM 16GBのMacBookを使っています。快適に動くローカルチャットアプリとモデルは？」',
    zh: '“我有一台 16 GB 内存的 MacBook，哪些本地聊天应用和模型能流畅运行？”',
    es: '«Tengo un MacBook con 16 GB de RAM. ¿Qué apps de chat locales y modelos funcionarán bien?»',
    pt: '“Tenho um MacBook com 16 GB de RAM. Quais apps de chat locais e modelos rodam bem nele?”',
    ar: '«لديّ MacBook بذاكرة 16 جيجابايت. ما تطبيقات الدردشة المحلية والنماذج التي ستعمل جيدًا عليه؟»',
    ko: '“RAM 16GB 맥북을 쓰고 있어요. 잘 돌아가는 로컬 채팅 앱과 모델은 뭐가 있나요?”',
  },
  mcpBannerExample2: {
    en: '“Compare LM Studio and Ollama for a beginner, and check whether either license allows commercial use.”',
    de: '„Vergleiche LM Studio und Ollama für Einsteiger und prüfe, ob die Lizenzen eine kommerzielle Nutzung erlauben.“',
    fr: '« Compare LM Studio et Ollama pour un débutant et vérifie si leurs licences autorisent un usage commercial. »',
    ja: '「初心者向けにLM StudioとOllamaを比較して、ライセンス上商用利用できるかも教えて」',
    zh: '“为新手对比 LM Studio 和 Ollama，并查一下两者的许可证是否允许商用。”',
    es: '«Compara LM Studio y Ollama para un principiante y comprueba si sus licencias permiten uso comercial.»',
    pt: '“Compare LM Studio e Ollama para um iniciante e verifique se as licenças permitem uso comercial.”',
    ar: '«قارن بين LM Studio وOllama لمبتدئ، وتحقق مما إذا كان ترخيصاهما يسمح بالاستخدام التجاري.»',
    ko: '“입문자용으로 LM Studio와 Ollama를 비교하고, 두 라이선스가 상업적 이용을 허용하는지도 알려줘.”',
  },
  mcpBannerExample3: {
    en: '“What did PromptQuorum publish recently on prompt engineering? Summarize the most useful article for me.”',
    de: '„Was hat PromptQuorum zuletzt zum Thema Prompt Engineering veröffentlicht? Fasse mir den nützlichsten Artikel zusammen.“',
    fr: '« Qu\'a publié récemment PromptQuorum sur le prompt engineering ? Résume-moi l\'article le plus utile. »',
    ja: '「PromptQuorumが最近公開したプロンプトエンジニアリングの記事は？一番役立つ記事を要約して」',
    zh: '“PromptQuorum 最近发布了哪些提示工程文章？帮我总结最有用的一篇。”',
    es: '«¿Qué ha publicado PromptQuorum últimamente sobre ingeniería de prompts? Resúmeme el artículo más útil.»',
    pt: '“O que o PromptQuorum publicou recentemente sobre engenharia de prompts? Resuma o artigo mais útil para mim.”',
    ar: '«ماذا نشر PromptQuorum مؤخرًا عن هندسة الأوامر؟ لخّص لي أكثر المقالات فائدة.»',
    ko: '“PromptQuorum이 최근 프롬프트 엔지니어링에 대해 어떤 글을 올렸어? 가장 유용한 글을 요약해줘.”',
  },

  // --- Shared form labels ---
  formOsLabel: {
    en: 'Operating system', de: 'Betriebssystem', fr: 'Système d\'exploitation',
    ja: 'OS', zh: '操作系统', es: 'Sistema operativo',
    pt: 'Sistema operacional', ar: 'نظام التشغيل', ko: '운영체제',
  },
  formOsAny: {
    en: 'Any', de: 'Beliebig', fr: 'Peu importe', ja: '指定なし', zh: '不限',
    es: 'Cualquiera', pt: 'Qualquer', ar: 'أي نظام', ko: '전체',
  },
  formRamLabel: {
    en: 'RAM (GB)', de: 'RAM (GB)', fr: 'RAM (Go)', ja: 'RAM（GB）', zh: 'RAM（GB）',
    es: 'RAM (GB)', pt: 'RAM (GB)', ar: 'الذاكرة العشوائية (GB)', ko: 'RAM (GB)',
  },
  formVramLabel: {
    en: 'VRAM / unified memory (GB)', de: 'VRAM / Unified Memory (GB)', fr: 'VRAM / mémoire unifiée (Go)',
    ja: 'VRAM／ユニファイドメモリ（GB）', zh: 'VRAM／统一内存（GB）', es: 'VRAM / memoria unificada (GB)',
    pt: 'VRAM / memória unificada (GB)', ar: 'VRAM / الذاكرة الموحدة (GB)', ko: 'VRAM / 통합 메모리 (GB)',
  },
  formSubmit: {
    en: 'Find apps', de: 'Apps finden', fr: 'Rechercher', ja: '検索する', zh: '开始查找',
    es: 'Buscar', pt: 'Buscar', ar: 'ابحث', ko: '찾기',
  },
  formCheck: {
    en: 'Check compatibility', de: 'Kompatibilität prüfen', fr: 'Vérifier la compatibilité',
    ja: '互換性を確認', zh: '检查兼容性', es: 'Comprobar compatibilidad',
    pt: 'Verificar compatibilidade', ar: 'تحقق من التوافق', ko: '호환성 확인',
  },

  // --- What Can I Run? page ---
  whatCanIRunPageTitle: {
    en: 'What Can I Run?', de: 'Was kann ich betreiben?', fr: 'Que puis-je exécuter ?',
    ja: '何が動かせる？', zh: '我能运行什么？', es: '¿Qué puedo ejecutar?',
    pt: 'O que posso rodar?', ar: 'ما الذي يمكنني تشغيله؟', ko: '무엇을 실행할 수 있나요?',
  },
  whatCanIRunPageLead: {
    en: 'Enter your hardware and we\'ll show local-AI apps from the directory that fit — pulled from the same {appCount}-app database PromptQuorum\'s MCP server uses.',
    de: 'Geben Sie Ihre Hardware ein — wir zeigen passende lokale KI-Apps aus dem Verzeichnis, aus derselben {appCount}-App-Datenbank, die auch der PromptQuorum-MCP-Server nutzt.',
    fr: 'Indiquez votre matériel : nous affichons les applications d\'IA locale du répertoire qui conviennent, tirées de la même base de {appCount} applications utilisée par le serveur MCP de PromptQuorum.',
    ja: 'ハードウェアを入力すると、ディレクトリの中から動作するローカルAIアプリを表示します。PromptQuorumのMCPサーバーと同じ{appCount}件のアプリデータベースを使用しています。',
    zh: '输入你的硬件配置，我们会从目录中筛选出兼容的本地 AI 应用——数据来自与 PromptQuorum MCP 服务器相同的 {appCount} 款应用数据库。',
    es: 'Indica tu hardware y te mostraremos las apps de IA local del directorio que encajan, tomadas de la misma base de {appCount} apps que usa el servidor MCP de PromptQuorum.',
    pt: 'Informe seu hardware e mostraremos os apps de IA local do diretório que são compatíveis, extraídos do mesmo banco de {appCount} apps usado pelo servidor MCP do PromptQuorum.',
    ar: 'أدخل مواصفات جهازك وسنعرض لك تطبيقات الذكاء الاصطناعي المحلي من الدليل المناسبة لك، من نفس قاعدة بيانات الـ {appCount} تطبيقًا التي يستخدمها خادم MCP الخاص بـ PromptQuorum.',
    ko: '하드웨어 사양을 입력하면 디렉터리에서 호환되는 로컬 AI 앱을 보여드립니다. PromptQuorum MCP 서버가 사용하는 것과 동일한 {appCount}개 앱 데이터베이스를 사용합니다.',
  },
  resultsHeadingKnown: {
    en: '{n} apps that fit your hardware', de: '{n} passende Apps für Ihre Hardware', fr: '{n} applications compatibles avec votre matériel',
    ja: 'ハードウェアに合うアプリ {n} 件', zh: '{n} 款适合你硬件的应用', es: '{n} apps que encajan con tu hardware',
    pt: '{n} apps compatíveis com seu hardware', ar: '{n} تطبيقًا مناسبًا لجهازك', ko: '하드웨어에 맞는 앱 {n}개',
  },
  resultsHeadingTruncated: {
    en: 'Showing {shown} of {total} apps that fit your hardware', de: '{shown} von {total} passenden Apps für Ihre Hardware werden angezeigt', fr: 'Affichage de {shown} applications sur {total} compatibles avec votre matériel',
    ja: 'ハードウェアに合うアプリ {total} 件中 {shown} 件を表示', zh: '显示 {total} 款适合你硬件的应用中的 {shown} 款', es: 'Mostrando {shown} de {total} apps que encajan con tu hardware',
    pt: 'Mostrando {shown} de {total} apps compatíveis com seu hardware', ar: 'يتم عرض {shown} من {total} تطبيقًا مناسبًا لجهازك', ko: '하드웨어에 맞는 앱 {total}개 중 {shown}개 표시',
  },
  resultsHeadingUnfiltered: {
    en: 'Top apps in the directory', de: 'Top-Apps im Verzeichnis', fr: 'Meilleures applications du répertoire',
    ja: 'ディレクトリの人気アプリ', zh: '目录中的热门应用', es: 'Las mejores apps del directorio',
    pt: 'Os melhores apps do diretório', ar: 'أفضل التطبيقات في الدليل', ko: '디렉터리 인기 앱',
  },
  resultsEmpty: {
    en: 'No apps matched that hardware. Try raising RAM/VRAM, or browse the full directory below.',
    de: 'Keine Apps passen zu dieser Hardware. Erhöhen Sie RAM/VRAM oder durchsuchen Sie unten das gesamte Verzeichnis.',
    fr: 'Aucune application ne correspond à ce matériel. Augmentez la RAM/VRAM ou parcourez le répertoire complet ci-dessous.',
    ja: '条件に合うアプリが見つかりませんでした。RAM/VRAMを増やすか、以下のディレクトリ全体をご覧ください。',
    zh: '没有应用符合该硬件条件。请尝试提高 RAM/VRAM，或在下方浏览完整目录。',
    es: 'Ninguna app coincide con ese hardware. Prueba a aumentar la RAM/VRAM o explora el directorio completo abajo.',
    pt: 'Nenhum app corresponde a esse hardware. Tente aumentar a RAM/VRAM ou explore o diretório completo abaixo.',
    ar: 'لم يتطابق أي تطبيق مع هذا الجهاز. جرّب زيادة الذاكرة العشوائية/VRAM أو تصفح الدليل الكامل أدناه.',
    ko: '이 하드웨어에 맞는 앱이 없습니다. RAM/VRAM을 늘려보거나 아래에서 전체 디렉터리를 확인해 보세요.',
  },
  readFullReview: {
    en: 'Read the full review', de: 'Vollständige Bewertung lesen', fr: 'Lire l\'avis complet',
    ja: '詳しいレビューを読む', zh: '阅读完整点评', es: 'Leer la reseña completa',
    pt: 'Ler a análise completa', ar: 'اقرأ المراجعة الكاملة', ko: '전체 리뷰 읽기',
  },
  browseDirectory: {
    en: 'Browse the full directory', de: 'Gesamtes Verzeichnis durchsuchen', fr: 'Parcourir le répertoire complet',
    ja: 'ディレクトリ全体を見る', zh: '浏览完整目录', es: 'Explorar el directorio completo',
    pt: 'Explorar o diretório completo', ar: 'تصفح الدليل الكامل', ko: '전체 디렉터리 보기',
  },
  hardwareUnresearched: {
    en: 'Hardware requirements not yet researched for this app.',
    de: 'Hardware-Anforderungen für diese App noch nicht erfasst.',
    fr: 'Configuration matérielle pas encore renseignée pour cette application.',
    ja: 'このアプリのハードウェア要件はまだ調査されていません。',
    zh: '该应用的硬件要求尚未整理。',
    es: 'Aún no se han investigado los requisitos de hardware de esta app.',
    pt: 'Requisitos de hardware ainda não pesquisados para este app.',
    ar: 'لم يتم بعد بحث متطلبات الجهاز لهذا التطبيق.',
    ko: '이 앱의 하드웨어 요구 사항은 아직 조사되지 않았습니다.',
  },

  // --- Can I Run This? page ---
  canIRunThisPageTitle: {
    en: 'Can I Run This?', de: 'Kann ich das betreiben?', fr: 'Puis-je l\'exécuter ?',
    ja: 'これは動かせる？', zh: '我能运行它吗？', es: '¿Puedo ejecutar esto?',
    pt: 'Posso rodar isso?', ar: 'هل يمكنني تشغيل هذا؟', ko: '이것을 실행할 수 있나요?',
  },
  canIRunThisPageLead: {
    en: 'Pick any app from the {appCount}-app directory, enter your hardware, and get a straight fit/no-fit answer.',
    de: 'Wählen Sie eine App aus dem {appCount}-App-Verzeichnis, geben Sie Ihre Hardware ein und erhalten Sie eine klare Ja/Nein-Antwort.',
    fr: 'Choisissez une application parmi les {appCount} du répertoire, indiquez votre matériel, et obtenez une réponse claire.',
    ja: '{appCount}件のディレクトリからアプリを選び、ハードウェアを入力すると、動くかどうかがすぐわかります。',
    zh: '从 {appCount} 款应用目录中选择一个，输入你的硬件，即可获得明确的兼容与否结论。',
    es: 'Elige cualquier app del directorio de {appCount} apps, indica tu hardware y obtén una respuesta clara.',
    pt: 'Escolha qualquer app do diretório de {appCount} apps, informe seu hardware e receba uma resposta direta.',
    ar: 'اختر أي تطبيق من دليل الـ {appCount} تطبيقًا، أدخل مواصفات جهازك، واحصل على إجابة واضحة.',
    ko: '{appCount}개 앱 디렉터리에서 앱을 선택하고 하드웨어를 입력하면 명확한 호환 여부를 알려드립니다.',
  },
  appPickerLabel: {
    en: 'App', de: 'App', fr: 'Application', ja: 'アプリ', zh: '应用',
    es: 'App', pt: 'App', ar: 'التطبيق', ko: '앱',
  },
  appPickerPlaceholder: {
    en: 'Search for an app…', de: 'App suchen …', fr: 'Rechercher une application…',
    ja: 'アプリを検索…', zh: '搜索应用…', es: 'Buscar una app…',
    pt: 'Buscar um app…', ar: 'ابحث عن تطبيق…', ko: '앱 검색…',
  },
  verdictFits: {
    en: 'Yes — this should run on your hardware.',
    de: 'Ja — das sollte auf Ihrer Hardware laufen.',
    fr: 'Oui — cela devrait fonctionner sur votre matériel.',
    ja: 'はい — お使いのハードウェアで動作するはずです。',
    zh: '可以——应该能在你的硬件上运行。',
    es: 'Sí — debería funcionar en tu hardware.',
    pt: 'Sim — deve rodar no seu hardware.',
    ar: 'نعم — من المفترض أن يعمل على جهازك.',
    ko: '네 — 이 하드웨어에서 실행될 것입니다.',
  },
  verdictTooDemanding: {
    en: 'No — this needs more than you have.',
    de: 'Nein — das benötigt mehr, als Sie haben.',
    fr: 'Non — cela nécessite plus que ce que vous avez.',
    ja: 'いいえ — お使いのハードウェアでは不足しています。',
    zh: '不可以——所需硬件超过你现有的配置。',
    es: 'No — necesita más de lo que tienes.',
    pt: 'Não — precisa de mais do que você tem.',
    ar: 'لا — يتطلب أكثر مما لديك.',
    ko: '아니요 — 현재 사양보다 더 많은 자원이 필요합니다.',
  },
  verdictUnknown: {
    en: 'Unknown — enter your RAM/VRAM above, or this app\'s hardware requirements haven\'t been researched yet.',
    de: 'Unbekannt — geben Sie oben RAM/VRAM ein, oder die Hardware-Anforderungen dieser App wurden noch nicht erfasst.',
    fr: 'Inconnu — indiquez votre RAM/VRAM ci-dessus, ou la configuration matérielle de cette application n\'a pas encore été renseignée.',
    ja: '不明 — 上でRAM/VRAMを入力するか、このアプリのハードウェア要件はまだ調査されていません。',
    zh: '未知——请在上方输入 RAM/VRAM，或该应用的硬件要求尚未整理。',
    es: 'Desconocido — indica tu RAM/VRAM arriba, o aún no se han investigado los requisitos de hardware de esta app.',
    pt: 'Desconhecido — informe RAM/VRAM acima, ou os requisitos de hardware deste app ainda não foram pesquisados.',
    ar: 'غير معروف — أدخل الذاكرة العشوائية/VRAM أعلاه، أو أن متطلبات الجهاز لهذا التطبيق لم تُبحث بعد.',
    ko: '알 수 없음 — 위에 RAM/VRAM을 입력하거나, 이 앱의 하드웨어 요구 사항이 아직 조사되지 않았습니다.',
  },
  variesByModelNote: {
    en: 'This app is a runtime — it has no single hardware number, because that depends on the model you load into it. Use the VRAM Calculator for a specific model, or read the review for recommendations.',
    de: 'Diese App ist eine Laufzeitumgebung — es gibt keine feste Hardware-Angabe, da das vom geladenen Modell abhängt. Nutzen Sie den VRAM-Rechner für ein bestimmtes Modell oder lesen Sie die Bewertung für Empfehlungen.',
    fr: 'Cette application est un moteur d\'exécution — il n\'y a pas de chiffre matériel unique, cela dépend du modèle chargé. Utilisez le calculateur de VRAM pour un modèle précis, ou consultez l\'avis pour des recommandations.',
    ja: 'このアプリはランタイムです。ロードするモデルによって必要なハードウェアが変わるため、単一の数値はありません。特定のモデルについてはVRAM計算ツールを、推奨についてはレビューをご覧ください。',
    zh: '该应用是一个运行时环境——没有固定的硬件数值，因为这取决于你加载的模型。请针对具体模型使用 VRAM 计算器，或阅读点评获取建议。',
    es: 'Esta app es un runtime: no tiene un requisito de hardware único, porque depende del modelo que cargues. Usa la calculadora de VRAM para un modelo concreto, o lee la reseña para recomendaciones.',
    pt: 'Este app é um runtime — não há um número de hardware único, pois depende do modelo carregado. Use a calculadora de VRAM para um modelo específico, ou leia a análise para recomendações.',
    ar: 'هذا التطبيق عبارة عن بيئة تشغيل — لا يوجد رقم جهاز واحد لأن ذلك يعتمد على النموذج الذي تحمّله. استخدم حاسبة VRAM لنموذج محدد، أو اقرأ المراجعة للحصول على توصيات.',
    ko: '이 앱은 런타임입니다 — 로드하는 모델에 따라 달라지므로 고정된 하드웨어 수치가 없습니다. 특정 모델은 VRAM 계산기를 사용하고, 추천 사항은 리뷰를 확인하세요.',
  },
  disclaimerText: {
    en: 'Directory data is editorial, may be outdated, and download links are not verified by PromptQuorum. Check the official source before installing.',
    de: 'Verzeichnisdaten sind redaktionell, können veraltet sein, und Download-Links werden nicht von PromptQuorum verifiziert. Prüfen Sie die offizielle Quelle vor der Installation.',
    fr: 'Les données du répertoire sont éditoriales, peuvent être obsolètes, et les liens de téléchargement ne sont pas vérifiés par PromptQuorum. Vérifiez la source officielle avant d\'installer.',
    ja: 'ディレクトリのデータは編集情報であり、古くなっている場合があります。ダウンロードリンクはPromptQuorumによって検証されていません。インストール前に公式ソースをご確認ください。',
    zh: '目录数据为编辑内容，可能已过期，下载链接未经 PromptQuorum 验证。安装前请核实官方来源。',
    es: 'Los datos del directorio son editoriales, pueden estar desactualizados, y los enlaces de descarga no están verificados por PromptQuorum. Comprueba la fuente oficial antes de instalar.',
    pt: 'Os dados do diretório são editoriais, podem estar desatualizados, e os links de download não são verificados pela PromptQuorum. Confira a fonte oficial antes de instalar.',
    ar: 'بيانات الدليل تحريرية وقد تكون قديمة، وروابط التنزيل غير موثقة من قبل PromptQuorum. تحقق من المصدر الرسمي قبل التثبيت.',
    ko: '디렉터리 데이터는 편집 콘텐츠이며 오래되었을 수 있고, 다운로드 링크는 PromptQuorum이 검증하지 않았습니다. 설치 전 공식 출처를 확인하세요.',
  },
  breadcrumbHome: {
    en: 'Home', de: 'Startseite', fr: 'Accueil', ja: 'ホーム', zh: '首页',
    es: 'Inicio', pt: 'Início', ar: 'الصفحة الرئيسية', ko: '홈',
  },
} satisfies Record<string, Dict>

export type ToolsUiKey = keyof typeof TOOLS_UI

/** Looks up one tools-section UI string in the caller's language, falling back to English, with optional `{token}` substitution. */
export function t(key: ToolsUiKey, lang: Language, vars?: Record<string, string | number>): string {
  const entry = TOOLS_UI[key]
  let text = entry[lang] ?? entry.en
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.split(`{${k}}`).join(String(v))
    }
  }
  return text
}
