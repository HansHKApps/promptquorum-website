// Homepage (src/components/home/*) — shared UI-string dictionary for the
// 11-block dynamic hub. Follows the same `Record<key, Record<Language, string>>`
// shape and `t(key, lang, vars?)` lookup pattern as
// src/components/local-ai-directory/directory-i18n.ts.
//
// Scope: UI chrome only (headings, labels, empty states, buttons). Actual
// content (article titles, app names/taglines, founder quotes) already
// carries its own per-language fields elsewhere and is out of scope here.

import type { Language } from '@/lib/blog/blogContent'

type Dict = Record<Language, string>

const HOME_UI = {
  // --- Page ---
  pageH1: {
    en: 'PromptQuorum: Local LLM Directory & Guides',
    de: 'PromptQuorum: Local-LLM-Verzeichnis & Guides',
    fr: 'PromptQuorum : annuaire et guides des LLM locaux',
    ja: 'PromptQuorum：ローカルLLMディレクトリ＆ガイド',
    zh: 'PromptQuorum：本地 LLM 目录与指南',
    es: 'PromptQuorum: directorio y guías de LLM locales',
    pt: 'PromptQuorum: diretório e guias de LLM locais',
    ar: 'PromptQuorum: دليل وأدلة نماذج اللغة المحلية',
    ko: 'PromptQuorum: 로컬 LLM 디렉터리 및 가이드',
  },

  // --- Intent-Guided Search ---
  searchHeading: {
    en: 'Find What You Need', de: 'Finden Sie, was Sie brauchen', fr: 'Trouvez ce dont vous avez besoin',
    ja: '必要なものを見つける', zh: '找到你需要的内容', es: 'Encuentra lo que necesitas',
    pt: 'Encontre o que você precisa', ar: 'اعثر على ما تحتاجه', ko: '필요한 것을 찾아보세요',
  },
  searchSubheading: {
    en: "Pick what you're after, then search.",
    de: 'Wählen Sie aus, wonach Sie suchen, und starten Sie die Suche.',
    fr: 'Choisissez ce que vous cherchez, puis lancez la recherche.',
    ja: '目的を選んでから検索してください。',
    zh: '先选择你的目标，再进行搜索。',
    es: 'Elige lo que buscas y luego busca.',
    pt: 'Escolha o que você procura e pesquise.',
    ar: 'اختر ما تبحث عنه ثم ابدأ البحث.',
    ko: '원하는 항목을 선택한 후 검색하세요.',
  },
  intentFindApp: {
    en: 'Find an app', de: 'App finden', fr: 'Trouver une appli', ja: 'アプリを探す', zh: '查找应用',
    es: 'Buscar una app', pt: 'Encontrar um app', ar: 'ابحث عن تطبيق', ko: '앱 찾기',
  },
  intentLearn: {
    en: 'Learn / understand', de: 'Lernen / verstehen', fr: 'Apprendre / comprendre', ja: '学ぶ／理解する',
    zh: '学习／了解', es: 'Aprender / entender', pt: 'Aprender / entender', ar: 'تعلّم / افهم', ko: '학습 / 이해',
  },
  intentCompare: {
    en: 'Compare tools', de: 'Tools vergleichen', fr: 'Comparer les outils', ja: 'ツールを比較',
    zh: '比较工具', es: 'Comparar herramientas', pt: 'Comparar ferramentas', ar: 'قارن الأدوات', ko: '도구 비교',
  },
  exampleFindApp: {
    en: 'chat client with MCP support', de: 'Chat-Client mit MCP-Unterstützung', fr: 'client de chat avec support MCP',
    ja: 'MCP対応のチャットクライアント', zh: '支持 MCP 的聊天客户端', es: 'cliente de chat con soporte MCP',
    pt: 'cliente de chat com suporte a MCP', ar: 'عميل دردشة يدعم MCP', ko: 'MCP를 지원하는 채팅 클라이언트',
  },
  exampleLearn: {
    en: 'what is quantization', de: 'was ist Quantisierung', fr: "qu'est-ce que la quantification",
    ja: '量子化とは', zh: '什么是量化', es: 'qué es la cuantización', pt: 'o que é quantização',
    ar: 'ما هو التكميم', ko: '양자화란 무엇인가',
  },
  exampleCompare: {
    en: 'compare image tools', de: 'Bildtools vergleichen', fr: "comparer les outils d'image",
    ja: '画像ツールを比較', zh: '比较图像工具', es: 'comparar herramientas de imagen',
    pt: 'comparar ferramentas de imagem', ar: 'قارن أدوات الصور', ko: '이미지 도구 비교',
  },
  searchPlaceholderTemplate: {
    en: 'e.g. "{example}"', de: 'z. B. „{example}"', fr: 'p. ex. « {example} »', ja: '例：「{example}」',
    zh: '例如："{example}"', es: 'p. ej. "{example}"', pt: 'ex.: "{example}"', ar: 'مثال: "{example}"',
    ko: '예: "{example}"',
  },
  searchButton: {
    en: 'Search', de: 'Suchen', fr: 'Rechercher', ja: '検索', zh: '搜索', es: 'Buscar', pt: 'Pesquisar',
    ar: 'بحث', ko: '검색',
  },
  noResults: {
    en: 'No results — try a different search.', de: 'Keine Ergebnisse — versuchen Sie eine andere Suche.',
    fr: 'Aucun résultat — essayez une autre recherche.', ja: '結果が見つかりません。別のキーワードでお試しください。',
    zh: '未找到结果——请尝试其他搜索词。', es: 'Sin resultados — prueba con otra búsqueda.',
    pt: 'Nenhum resultado — tente outra pesquisa.', ar: 'لا توجد نتائج — جرّب بحثًا آخر.',
    ko: '결과가 없습니다 — 다른 검색어를 시도해 보세요.',
  },

  // --- Comparison Tool ---
  compareHeading: {
    en: 'Compare Tools', de: 'Tools vergleichen', fr: 'Comparer les outils', ja: 'ツールを比較',
    zh: '比较工具', es: 'Comparar herramientas', pt: 'Comparar ferramentas', ar: 'قارن الأدوات', ko: '도구 비교',
  },
  compareSubheading: {
    en: "Comparison tool launching soon — we're building out category comparisons.",
    de: 'Vergleichstool startet bald — wir bauen gerade die Kategorievergleiche auf.',
    fr: "Outil de comparaison bientôt disponible — nous préparons les comparaisons par catégorie.",
    ja: '比較ツールは近日公開予定です。現在カテゴリ別の比較を準備中です。',
    zh: '比较工具即将上线——我们正在构建分类比较功能。',
    es: 'La herramienta de comparación llega pronto — estamos preparando las comparaciones por categoría.',
    pt: 'Ferramenta de comparação em breve — estamos preparando as comparações por categoria.',
    ar: 'أداة المقارنة قادمة قريبًا — نعمل على بناء مقارنات الفئات.',
    ko: '비교 도구가 곧 출시됩니다 — 카테고리별 비교를 준비 중입니다.',
  },
  compareNoCategoryPicked: {
    en: 'Pick a category above to preview its comparison table once it exists.',
    de: 'Wählen Sie oben eine Kategorie aus, um eine Vorschau der Vergleichstabelle zu sehen, sobald sie verfügbar ist.',
    fr: 'Choisissez une catégorie ci-dessus pour prévisualiser son tableau comparatif une fois disponible.',
    ja: '上のカテゴリを選ぶと、比較表が公開され次第プレビューできます。',
    zh: '在上方选择一个分类，比较表上线后即可在此预览。',
    es: 'Elige una categoría arriba para previsualizar su tabla comparativa cuando esté disponible.',
    pt: 'Escolha uma categoria acima para pré-visualizar sua tabela comparativa quando estiver disponível.',
    ar: 'اختر فئة أعلاه لمعاينة جدول المقارنة الخاص بها بمجرد توفره.',
    ko: '위에서 카테고리를 선택하면 비교표가 생성되는 대로 미리 볼 수 있습니다.',
  },
  compareCategoryPickedTemplate: {
    en: 'Comparison tables for "{category}" aren\'t published yet.',
    de: 'Vergleichstabellen für „{category}" sind noch nicht veröffentlicht.',
    fr: 'Les tableaux comparatifs pour « {category} » ne sont pas encore publiés.',
    ja: '「{category}」の比較表はまだ公開されていません。',
    zh: '"{category}"的比较表尚未发布。',
    es: 'Las tablas comparativas de "{category}" aún no están publicadas.',
    pt: 'As tabelas comparativas de "{category}" ainda não foram publicadas.',
    ar: 'جداول مقارنة "{category}" لم تُنشر بعد.',
    ko: '"{category}" 비교표는 아직 게시되지 않았습니다.',
  },

  // --- Category group labels (CATEGORY_GROUP_LABEL in categories.ts is EN-only) ---
  catRunServe: {
    en: 'Run & Serve', de: 'Ausführen & Bereitstellen', fr: 'Exécution et service', ja: '実行＆提供',
    zh: '运行与服务', es: 'Ejecutar y servir', pt: 'Executar e servir', ar: 'التشغيل والخدمة', ko: '실행 및 서빙',
  },
  catChatAssistants: {
    en: 'Chat & Assistants', de: 'Chat & Assistenten', fr: 'Chat et assistants', ja: 'チャット＆アシスタント',
    zh: '聊天与助手', es: 'Chat y asistentes', pt: 'Chat e assistentes', ar: 'الدردشة والمساعدون', ko: '채팅 및 어시스턴트',
  },
  catCodeDevelopment: {
    en: 'Code & Development', de: 'Code & Entwicklung', fr: 'Code et développement', ja: 'コード＆開発',
    zh: '代码与开发', es: 'Código y desarrollo', pt: 'Código e desenvolvimento', ar: 'البرمجة والتطوير', ko: '코드 및 개발',
  },
  catKnowledgeRetrieval: {
    en: 'Knowledge & Retrieval', de: 'Wissen & Retrieval', fr: 'Connaissances et recherche', ja: 'ナレッジ＆検索',
    zh: '知识与检索', es: 'Conocimiento y recuperación', pt: 'Conhecimento e recuperação',
    ar: 'المعرفة والاسترجاع', ko: '지식 및 검색',
  },
  catVoiceAudio: {
    en: 'Voice & Audio', de: 'Sprache & Audio', fr: 'Voix et audio', ja: '音声＆オーディオ', zh: '语音与音频',
    es: 'Voz y audio', pt: 'Voz e áudio', ar: 'الصوت والصوتيات', ko: '음성 및 오디오',
  },
  catImagesVideo: {
    en: 'Images & Video', de: 'Bilder & Video', fr: 'Images et vidéo', ja: '画像＆動画', zh: '图像与视频',
    es: 'Imágenes y vídeo', pt: 'Imagens e vídeo', ar: 'الصور والفيديو', ko: '이미지 및 동영상',
  },
  catTrainOperate: {
    en: 'Train & Operate', de: 'Trainieren & Betreiben', fr: 'Entraînement et exploitation', ja: '学習＆運用',
    zh: '训练与运维', es: 'Entrenar y operar', pt: 'Treinar e operar', ar: 'التدريب والتشغيل', ko: '학습 및 운영',
  },

  // --- Shared card empty state ---
  dataComingSoon: {
    en: 'Data coming soon.', de: 'Daten folgen in Kürze.', fr: 'Données bientôt disponibles.',
    ja: 'データは近日公開予定です。', zh: '数据即将上线。', es: 'Datos disponibles próximamente.',
    pt: 'Dados em breve.', ar: 'البيانات قادمة قريبًا.', ko: '데이터가 곧 제공됩니다.',
  },

  // --- Latest Posts ---
  latestPostsTitle: {
    en: 'Latest Posts', de: 'Neueste Beiträge', fr: 'Derniers articles', ja: '最新記事', zh: '最新文章',
    es: 'Últimas publicaciones', pt: 'Últimas publicações', ar: 'أحدث المقالات', ko: '최신 게시물',
  },
  latestPostsEmpty: {
    en: 'New articles coming soon.', de: 'Neue Artikel folgen in Kürze.', fr: 'Nouveaux articles bientôt disponibles.',
    ja: '新しい記事は近日公開予定です。', zh: '新文章即将上线。', es: 'Nuevos artículos próximamente.',
    pt: 'Novos artigos em breve.', ar: 'مقالات جديدة قادمة قريبًا.', ko: '새 게시물이 곧 제공됩니다.',
  },

  // --- Latest Apps Added ---
  latestAppsTitle: {
    en: 'Latest Apps Added', de: 'Neueste Apps', fr: 'Dernières applications ajoutées', ja: '最新追加アプリ',
    zh: '最新添加的应用', es: 'Últimas apps añadidas', pt: 'Últimos apps adicionados', ar: 'أحدث التطبيقات المضافة',
    ko: '최근 추가된 앱',
  },
  latestAppsEmpty: {
    en: 'New apps coming soon.', de: 'Neue Apps folgen in Kürze.', fr: 'Nouvelles applications bientôt disponibles.',
    ja: '新しいアプリは近日公開予定です。', zh: '新应用即将上线。', es: 'Nuevas apps próximamente.',
    pt: 'Novos apps em breve.', ar: 'تطبيقات جديدة قادمة قريبًا.', ko: '새 앱이 곧 제공됩니다.',
  },

  // --- Founder Reviews ---
  founderReviewsTitle: {
    en: 'Latest Founder/Maker Reviews', de: 'Neueste Gründer-/Macher-Bewertungen',
    fr: 'Derniers avis de fondateurs/créateurs', ja: '最新の開発者レビュー', zh: '最新创始人／开发者点评',
    es: 'Últimas reseñas de fundadores/creadores', pt: 'Últimas avaliações de fundadores/criadores',
    ar: 'أحدث مراجعات المؤسسين/الصانعين', ko: '최신 창업자/제작자 리뷰',
  },
  founderReviewsEmpty: {
    en: 'Founder reviews are being added — check back soon.',
    de: 'Gründer-Bewertungen werden gerade hinzugefügt — schauen Sie bald wieder vorbei.',
    fr: "Les avis de fondateurs sont en cours d'ajout — revenez bientôt.",
    ja: '開発者レビューを追加中です。近日中にまたご確認ください。',
    zh: '创始人点评正在添加中——请稍后再来查看。',
    es: 'Estamos añadiendo reseñas de fundadores — vuelve pronto.',
    pt: 'Estamos adicionando avaliações de fundadores — volte em breve.',
    ar: 'يتم إضافة مراجعات المؤسسين — تحقق مرة أخرى قريبًا.',
    ko: '창업자 리뷰를 추가하고 있습니다 — 곧 다시 확인해 주세요.',
  },

  // --- Trending ---
  trendingTitle: {
    en: 'Trending / Most-Read', de: 'Trends / Meistgelesen', fr: 'Tendances / les plus lus', ja: '急上昇／人気記事',
    zh: '热门／最多阅读', es: 'Tendencias / más leídos', pt: 'Tendências / mais lidos', ar: 'الأكثر رواجًا / قراءة',
    ko: '트렌드 / 최다 조회',
  },
  trendingEmpty: {
    en: 'Trending pages coming soon.', de: 'Trend-Seiten folgen in Kürze.', fr: 'Pages tendances bientôt disponibles.',
    ja: '急上昇ページは近日公開予定です。', zh: '热门页面即将上线。', es: 'Páginas de tendencia próximamente.',
    pt: 'Páginas em alta em breve.', ar: 'الصفحات الرائجة قادمة قريبًا.', ko: '트렌드 페이지가 곧 제공됩니다.',
  },
  trendingMostRecent: {
    en: 'Most Recent', de: 'Zuletzt', fr: 'Le plus récent', ja: '最新', zh: '最新', es: 'Más reciente',
    pt: 'Mais recente', ar: 'الأحدث', ko: '최신',
  },
  snapshotAsOfTemplate: {
    en: 'Snapshot as of {date}', de: 'Momentaufnahme vom {date}', fr: 'Instantané au {date}',
    ja: '{date} 時点のスナップショット', zh: '截至 {date} 的快照', es: 'Instantánea al {date}',
    pt: 'Instantâneo em {date}', ar: 'لقطة بتاريخ {date}', ko: '{date} 기준 스냅샷',
  },
  clicksLabel: {
    en: '{n} clicks', de: '{n} Klicks', fr: '{n} clics', ja: '{n} クリック', zh: '{n} 次点击', es: '{n} clics',
    pt: '{n} cliques', ar: '{n} نقرة', ko: '조회수 {n}회',
  },

  // --- Recently Updated ---
  recentlyUpdatedTitle: {
    en: 'Recently Updated Content', de: 'Kürzlich aktualisierte Inhalte', fr: 'Contenu récemment mis à jour',
    ja: '最近更新されたコンテンツ', zh: '最近更新的内容', es: 'Contenido actualizado recientemente',
    pt: 'Conteúdo atualizado recentemente', ar: 'المحتوى المحدَّث مؤخرًا', ko: '최근 업데이트된 콘텐츠',
  },
  recentlyUpdatedEmpty: {
    en: 'Updated content tracking coming soon.', de: 'Die Erfassung aktualisierter Inhalte folgt in Kürze.',
    fr: 'Le suivi des contenus mis à jour arrive bientôt.', ja: '更新コンテンツの追跡は近日公開予定です。',
    zh: '更新内容追踪即将上线。', es: 'El seguimiento de contenido actualizado llega pronto.',
    pt: 'O rastreamento de conteúdo atualizado chega em breve.', ar: 'تتبع المحتوى المحدَّث قادم قريبًا.',
    ko: '업데이트된 콘텐츠 추적 기능이 곧 제공됩니다.',
  },
  updatedOnTemplate: {
    en: 'Updated {date}', de: 'Aktualisiert am {date}', fr: 'Mis à jour le {date}', ja: '{date} 更新',
    zh: '更新于 {date}', es: 'Actualizado el {date}', pt: 'Atualizado em {date}', ar: 'تم التحديث في {date}',
    ko: '{date} 업데이트',
  },

  // --- By the Numbers ---
  statsTitle: {
    en: 'By the Numbers', de: 'In Zahlen', fr: 'En chiffres', ja: '数字で見る', zh: '数据一览',
    es: 'En cifras', pt: 'Em números', ar: 'بالأرقام', ko: '숫자로 보기',
  },
  statAppsTracked: {
    en: 'Apps tracked', de: 'Erfasste Apps', fr: 'Applications suivies', ja: '登録アプリ数', zh: '收录应用数',
    es: 'Apps registradas', pt: 'Apps monitorados', ar: 'التطبيقات المتتبَّعة', ko: '추적 중인 앱',
  },
  statLanguages: {
    en: 'Languages', de: 'Sprachen', fr: 'Langues', ja: '対応言語', zh: '语言数', es: 'Idiomas',
    pt: 'Idiomas', ar: 'اللغات', ko: '언어',
  },
  statFounderVerified: {
    en: 'Founder-verified', de: 'Von Gründern bestätigt', fr: 'Vérifié par le fondateur', ja: '開発者確認済み',
    zh: '创始人已验证', es: 'Verificado por el fundador', pt: 'Verificado pelo fundador',
    ar: 'موثَّق من المؤسس', ko: '창업자 검증 완료',
  },
  statArticlesPublished: {
    en: 'Articles published', de: 'Veröffentlichte Artikel', fr: 'Articles publiés', ja: '公開記事数',
    zh: '已发布文章数', es: 'Artículos publicados', pt: 'Artigos publicados', ar: 'المقالات المنشورة',
    ko: '게시된 글',
  },

  // --- Recent Mentions ---
  mentionsTitle: {
    en: 'Recent Mentions', de: 'Aktuelle Erwähnungen', fr: 'Mentions récentes', ja: '最近の言及', zh: '近期提及',
    es: 'Menciones recientes', pt: 'Menções recentes', ar: 'الإشارات الأخيرة', ko: '최근 언급',
  },
  mentionsEmpty: {
    en: 'Mentions coming soon.', de: 'Erwähnungen folgen in Kürze.', fr: 'Mentions bientôt disponibles.',
    ja: '言及情報は近日公開予定です。', zh: '相关提及即将上线。', es: 'Menciones disponibles próximamente.',
    pt: 'Menções em breve.', ar: 'الإشارات قادمة قريبًا.', ko: '언급 정보가 곧 제공됩니다.',
  },

  // --- Feedback ---
  feedbackQuestion: {
    en: "What's your biggest local LLM headache?", de: 'Was ist Ihr größtes Problem mit lokalen LLMs?',
    fr: 'Quel est votre plus gros problème avec les LLM locaux ?', ja: 'ローカルLLMで一番困っていることは？',
    zh: '你在本地 LLM 上遇到的最大难题是什么？', es: '¿Cuál es tu mayor dolor de cabeza con los LLM locales?',
    pt: 'Qual é o seu maior desafio com LLMs locais?', ar: 'ما أكبر مشكلة تواجهك مع نماذج اللغة المحلية؟',
    ko: '로컬 LLM 사용 중 가장 큰 고민은 무엇인가요?',
  },
  feedbackPlaceholder: {
    en: "Tell us what's frustrating you...", de: 'Erzählen Sie uns, was Sie stört …',
    fr: 'Dites-nous ce qui vous pose problème…', ja: '困っていることを教えてください…',
    zh: '告诉我们你遇到的问题……', es: 'Cuéntanos qué te frustra...', pt: 'Conte-nos o que está te incomodando...',
    ar: 'أخبرنا بما يزعجك...', ko: '불편한 점을 알려주세요...',
  },
  feedbackSend: {
    en: 'Send', de: 'Senden', fr: 'Envoyer', ja: '送信', zh: '发送', es: 'Enviar', pt: 'Enviar',
    ar: 'إرسال', ko: '보내기',
  },
  feedbackSending: {
    en: 'Sending…', de: 'Wird gesendet …', fr: 'Envoi…', ja: '送信中…', zh: '发送中…', es: 'Enviando…',
    pt: 'Enviando…', ar: 'جارٍ الإرسال…', ko: '전송 중…',
  },
  feedbackThanks: {
    en: 'Thanks — that helps.', de: 'Danke — das hilft uns weiter.', fr: 'Merci, cela nous aide.',
    ja: 'ありがとうございます。とても参考になります。', zh: '谢谢，这对我们很有帮助。', es: 'Gracias, esto nos ayuda.',
    pt: 'Obrigado — isso ajuda.', ar: 'شكرًا — هذا يساعدنا.', ko: '감사합니다 — 큰 도움이 됩니다.',
  },
  feedbackError: {
    en: 'Something went wrong — try again later.', de: 'Etwas ist schiefgelaufen — bitte versuchen Sie es später erneut.',
    fr: "Une erreur s'est produite — réessayez plus tard.", ja: 'エラーが発生しました。しばらくしてから再度お試しください。',
    zh: '出了点问题——请稍后再试。', es: 'Algo salió mal — inténtalo de nuevo más tarde.',
    pt: 'Algo deu errado — tente novamente mais tarde.', ar: 'حدث خطأ ما — حاول مرة أخرى لاحقًا.',
    ko: '문제가 발생했습니다 — 나중에 다시 시도해 주세요.',
  },
  feedbackFounderLink: {
    en: 'Are you a founder? Tell us about your app →', de: 'Sind Sie Gründer/in? Erzählen Sie uns von Ihrer App →',
    fr: 'Vous êtes fondateur/fondatrice ? Parlez-nous de votre appli →', ja: '開発者の方ですか？あなたのアプリについて教えてください →',
    zh: '你是开发者吗？欢迎告诉我们你的应用 →', es: '¿Eres fundador/a? Cuéntanos sobre tu app →',
    pt: 'Você é fundador(a)? Conte-nos sobre seu app →', ar: 'هل أنت مؤسس؟ أخبرنا عن تطبيقك ←',
    ko: '창업자이신가요? 앱에 대해 알려주세요 →',
  },

  // --- Quick Tip ---
  quickTipTitle: {
    en: 'Did You Know?', de: 'Wussten Sie schon?', fr: 'Le saviez-vous ?', ja: '豆知識', zh: '小知识',
    es: '¿Sabías que...?', pt: 'Você sabia?', ar: 'هل تعلم؟', ko: '알고 계셨나요?',
  },
  readMoreTemplate: {
    en: 'Read more: {title} →', de: 'Mehr lesen: {title} →', fr: 'En savoir plus : {title} →',
    ja: '続きを読む：{title} →', zh: '阅读更多：{title} →', es: 'Leer más: {title} →',
    pt: 'Leia mais: {title} →', ar: 'اقرأ المزيد: {title} ←', ko: '더 읽기: {title} →',
  },

  // --- Expand/collapse (ExpandableList, BatchedList) ---
  showMoreTemplate: {
    en: 'Show {n} more', de: '{n} weitere anzeigen', fr: 'Afficher {n} de plus', ja: 'さらに{n}件表示',
    zh: '显示更多 {n} 项', es: 'Mostrar {n} más', pt: 'Mostrar mais {n}', ar: 'إظهار {n} المزيد',
    ko: '{n}개 더 보기',
  },
  showLess: {
    en: 'Show less', de: 'Weniger anzeigen', fr: 'Afficher moins', ja: '表示を減らす', zh: '收起',
    es: 'Mostrar menos', pt: 'Mostrar menos', ar: 'إظهار أقل', ko: '간략히 보기',
  },
  showEarlierSnapshotsTemplate: {
    en: 'Show {n} earlier snapshots', de: '{n} frühere Snapshots anzeigen', fr: 'Afficher {n} instantanés précédents',
    ja: '以前のスナップショットを{n}件表示', zh: '显示更早的 {n} 个快照', es: 'Mostrar {n} instantáneas anteriores',
    pt: 'Mostrar {n} instantâneos anteriores', ar: 'إظهار {n} لقطات سابقة', ko: '이전 스냅샷 {n}개 보기',
  },
} satisfies Record<string, Dict>

export type HomeUiKey = keyof typeof HOME_UI

/** Looks up one homepage UI string in the caller's language, falling back to English, with optional `{token}` substitution. */
export function t(key: HomeUiKey, lang: Language, vars?: Record<string, string | number>): string {
  const entry = HOME_UI[key]
  let text = entry[lang] ?? entry.en
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.split(`{${k}}`).join(String(v))
    }
  }
  return text
}
