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
    en: 'Four ways to match your hardware to the right software.',
    de: 'Vier Wege, Ihre Hardware mit der passenden Software abzugleichen.',
    fr: 'Quatre façons de faire correspondre votre matériel au bon logiciel.',
    ja: 'お使いのハードウェアに合ったソフトウェアを見つける4つの方法。',
    zh: '四种方式，帮你把硬件和合适的软件匹配起来。',
    es: 'Cuatro formas de hacer coincidir tu hardware con el software adecuado.',
    pt: 'Quatro formas de combinar seu hardware com o software certo.',
    ar: 'أربع طرق لمطابقة جهازك مع البرنامج المناسب.',
    ko: '하드웨어에 맞는 소프트웨어를 찾는 네 가지 방법입니다.',
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
    ja: '詳しいレビューを読む', zh: '阅读完整评测', es: 'Leer la reseña completa',
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
    zh: '该应用是一个运行时环境——没有固定的硬件数值，因为这取决于你加载的模型。请针对具体模型使用 VRAM 计算器，或阅读评测获取建议。',
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
