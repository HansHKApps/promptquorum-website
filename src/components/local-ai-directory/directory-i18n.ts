// Local AI App Directory — shared UI-string dictionary for every chrome
// element (labels, buttons, aria-labels, placeholders, empty states) in
// src/components/local-ai-directory/*. Follows the same
// `Record<key, Record<Language, string>>` shape as `POST_UI` in
// PowerLocalLLMPostClient.tsx.
//
// Scope: this file only covers UI CHROME — the filter/search/sort/drawer
// controls around the tools. Tool DATA (ToolRecord.tagline, .name,
// .category labels sourced from src/lib/power-local-llm/apps/categories.ts,
// founder quotes, pqReview text) is out of scope; those already carry their
// own per-language fields or are proper nouns (OS names, tool names).
//
// Usage: `t('someKey', lang)` or `t('templateKey', lang, { name: 'Foo' })`
// for `{name}`-style placeholders.

import type { Language } from '@/lib/blog/blogContent'
import type { MachineType } from './types'
import type { UseCaseKey } from '@/lib/power-local-llm/apps/types'

type Dict = Record<Language, string>

const DIR_UI = {
  // --- DirectoryClient: toolbar ---
  filtersButton: {
    en: 'Filters', de: 'Filter', fr: 'Filtres', ja: 'フィルター', zh: '筛选',
    es: 'Filtros', pt: 'Filtros', ar: 'الفلاتر', ko: '필터',
  },
  searchAriaLabel: {
    en: 'Search by name, tagline, or license',
    de: 'Suche nach Name, Beschreibung oder Lizenz',
    fr: 'Rechercher par nom, description ou licence',
    ja: '名前、キャッチコピー、ライセンスで検索',
    zh: '按名称、简介或许可证搜索',
    es: 'Buscar por nombre, descripción o licencia',
    pt: 'Pesquisar por nome, descrição ou licença',
    ar: 'البحث حسب الاسم أو الوصف أو الترخيص',
    ko: '이름, 소개, 라이선스로 검색',
  },
  searchPlaceholder: {
    en: 'Search by name, tagline, or license…',
    de: 'Suche nach Name, Beschreibung oder Lizenz …',
    fr: 'Rechercher par nom, description ou licence…',
    ja: '名前、キャッチコピー、ライセンスで検索…',
    zh: '按名称、简介或许可证搜索…',
    es: 'Buscar por nombre, descripción o licencia…',
    pt: 'Pesquisar por nome, descrição ou licença…',
    ar: 'البحث حسب الاسم أو الوصف أو الترخيص…',
    ko: '이름, 소개, 라이선스로 검색…',
  },
  clearSearchAriaLabel: {
    en: 'Clear search', de: 'Suche löschen', fr: 'Effacer la recherche',
    ja: '検索をクリア', zh: '清除搜索', es: 'Borrar búsqueda',
    pt: 'Limpar pesquisa', ar: 'مسح البحث', ko: '검색 지우기',
  },
  myMachineLabel: {
    en: 'My machine:', de: 'Mein Gerät:', fr: 'Mon appareil :',
    ja: '使用機器:', zh: '我的设备：', es: 'Mi equipo:',
    pt: 'Meu equipamento:', ar: 'جهازي:', ko: '내 기기:',
  },
  sortLabel: {
    en: 'Sort:', de: 'Sortieren:', fr: 'Trier :', ja: '並び替え:',
    zh: '排序：', es: 'Ordenar:', pt: 'Ordenar:', ar: 'الترتيب:', ko: '정렬:',
  },
  sortName: {
    en: 'Name', de: 'Name', fr: 'Nom', ja: '名前', zh: '名称',
    es: 'Nombre', pt: 'Nome', ar: 'الاسم', ko: '이름',
  },
  sortAdded: {
    en: 'Recently added', de: 'Zuletzt hinzugefügt', fr: 'Ajouté récemment',
    ja: '新着順', zh: '最近添加', es: 'Añadido recientemente',
    pt: 'Adicionado recentemente', ar: 'أُضيف مؤخرًا', ko: '최근 추가순',
  },
  sortRam: {
    en: 'Hardware requirement', de: 'Hardware-Anforderung', fr: 'Configuration requise',
    ja: '必要スペック', zh: '硬件要求', es: 'Requisito de hardware',
    pt: 'Requisito de hardware', ar: 'متطلبات الجهاز', ko: '하드웨어 요구 사항',
  },
  toggleSortDirAriaLabel: {
    en: 'Toggle sort direction', de: 'Sortierrichtung umkehren', fr: "Inverser l'ordre de tri",
    ja: '並び順を切り替え', zh: '切换排序方向', es: 'Invertir orden de clasificación',
    pt: 'Inverter direção da ordenação', ar: 'تبديل اتجاه الترتيب', ko: '정렬 방향 전환',
  },
  viewModeAriaLabel: {
    en: 'View mode', de: 'Ansicht', fr: "Mode d'affichage", ja: '表示モード',
    zh: '视图模式', es: 'Modo de vista', pt: 'Modo de exibição',
    ar: 'وضع العرض', ko: '보기 모드',
  },
  viewCards: {
    en: 'Cards', de: 'Karten', fr: 'Cartes', ja: 'カード', zh: '卡片',
    es: 'Tarjetas', pt: 'Cartões', ar: 'بطاقات', ko: '카드',
  },
  viewTable: {
    en: 'Table', de: 'Tabelle', fr: 'Tableau', ja: '表', zh: '表格',
    es: 'Tabla', pt: 'Tabela', ar: 'جدول', ko: '표',
  },
  appsCountTemplate: {
    en: '{visible} of {total} apps', de: '{visible} von {total} Apps',
    fr: '{visible} sur {total} applis', ja: '{total}件中{visible}件のアプリ',
    zh: '共{total}款应用，显示{visible}款', es: '{visible} de {total} apps',
    pt: '{visible} de {total} apps', ar: '{visible} من {total} تطبيقًا',
    ko: '{total}개 중 {visible}개 앱',
  },
  noToolsMatch: {
    en: 'No tools match these filters.', de: 'Keine Tools passen zu diesen Filtern.',
    fr: 'Aucun outil ne correspond à ces filtres.', ja: 'これらの条件に一致するツールはありません。',
    zh: '没有符合这些筛选条件的工具。', es: 'Ninguna herramienta coincide con estos filtros.',
    pt: 'Nenhuma ferramenta corresponde a esses filtros.', ar: 'لا توجد أدوات تطابق هذه الفلاتر.',
    ko: '이 필터와 일치하는 도구가 없습니다.',
  },
  showMoreTemplate: {
    en: 'Show {n} more · {remaining} remaining',
    de: '{n} weitere anzeigen · noch {remaining}',
    fr: 'Afficher {n} de plus · {remaining} restants',
    ja: 'あと{n}件表示 · 残り{remaining}件',
    zh: '显示{n}个更多 · 还剩{remaining}个',
    es: 'Mostrar {n} más · quedan {remaining}',
    pt: 'Mostrar mais {n} · restam {remaining}',
    ar: 'عرض {n} إضافية · تبقّى {remaining}',
    ko: '{n}개 더 보기 · {remaining}개 남음',
  },

  // --- machine type selector ---
  machineDgpu: {
    en: 'Graphics Card', de: 'Grafikkarte', fr: 'Carte graphique',
    ja: 'グラフィックカード', zh: '独立显卡', es: 'Tarjeta gráfica',
    pt: 'Placa de vídeo', ar: 'بطاقة رسومات', ko: '그래픽카드',
  },
  machineApple: {
    en: 'Apple Silicon', de: 'Apple Silicon', fr: 'Apple Silicon',
    ja: 'Apple Silicon', zh: 'Apple 芯片', es: 'Apple Silicon',
    pt: 'Apple Silicon', ar: 'Apple Silicon', ko: 'Apple Silicon',
  },
  machineCpu: {
    en: 'CPU only', de: 'Nur CPU', fr: 'CPU uniquement', ja: 'CPUのみ',
    zh: '仅CPU', es: 'Solo CPU', pt: 'Somente CPU', ar: 'المعالج فقط', ko: 'CPU만',
  },

  // --- "I want to…" chips (WantChips + ActiveFilterChips share these) ---
  wantChat: { en: 'Chat', de: 'Chatten', fr: 'Discuter', ja: 'チャット', zh: '聊天', es: 'Chatear', pt: 'Conversar', ar: 'الدردشة', ko: '채팅' },
  wantCode: { en: 'Code', de: 'Programmieren', fr: 'Coder', ja: 'コーディング', zh: '编程', es: 'Programar', pt: 'Programar', ar: 'البرمجة', ko: '코딩' },
  wantAgent: { en: 'Run agents', de: 'Agenten ausführen', fr: 'Exécuter des agents', ja: 'エージェントを実行', zh: '运行智能体', es: 'Ejecutar agentes', pt: 'Executar agentes', ar: 'تشغيل الوكلاء', ko: '에이전트 실행' },
  wantDocs: { en: 'Chat with docs', de: 'Mit Dokumenten chatten', fr: 'Discuter avec des documents', ja: 'ドキュメントとチャット', zh: '与文档对话', es: 'Chatear con documentos', pt: 'Conversar com documentos', ar: 'الدردشة مع المستندات', ko: '문서와 채팅' },
  wantImage: { en: 'Generate images', de: 'Bilder generieren', fr: 'Générer des images', ja: '画像を生成', zh: '生成图像', es: 'Generar imágenes', pt: 'Gerar imagens', ar: 'توليد الصور', ko: '이미지 생성' },
  wantAudio: { en: 'Voice / audio', de: 'Sprache / Audio', fr: 'Voix / audio', ja: '音声・オーディオ', zh: '语音/音频', es: 'Voz / audio', pt: 'Voz / áudio', ar: 'الصوت', ko: '음성 / 오디오' },
  wantPhone: { en: 'Use on my phone', de: 'Auf dem Handy nutzen', fr: 'Utiliser sur mon téléphone', ja: 'スマホで使う', zh: '在手机上使用', es: 'Usar en mi teléfono', pt: 'Usar no celular', ar: 'الاستخدام على هاتفي', ko: '휴대폰에서 사용' },
  wantBuild: { en: 'Build my own app', de: 'Eigene App entwickeln', fr: 'Créer ma propre appli', ja: '自分でアプリを作る', zh: '构建自己的应用', es: 'Crear mi propia app', pt: 'Criar meu próprio app', ar: 'بناء تطبيقي الخاص', ko: '내 앱 만들기' },
  wantServe: { en: 'Serve a model', de: 'Ein Modell bereitstellen', fr: 'Servir un modèle', ja: 'モデルを配信する', zh: '部署模型', es: 'Servir un modelo', pt: 'Servir um modelo', ar: 'تشغيل نموذج كخدمة', ko: '모델 서빙' },
  wantGroupAriaLabel: {
    en: 'I want to…', de: 'Ich möchte …', fr: 'Je veux…', ja: 'やりたいこと…',
    zh: '我想要…', es: 'Quiero…', pt: 'Quero…', ar: 'أريد أن…', ko: '하고 싶은 것…',
  },

  activeFiltersAriaLabel: {
    en: 'Active filters', de: 'Aktive Filter', fr: 'Filtres actifs', ja: '適用中のフィルター',
    zh: '当前筛选条件', es: 'Filtros activos', pt: 'Filtros ativos', ar: 'الفلاتر النشطة', ko: '적용된 필터',
  },

  // --- SubcategoryChips ---
  narrowDownAriaLabel: {
    en: 'Narrow down by type', de: 'Nach Typ eingrenzen', fr: 'Affiner par type',
    ja: '種類で絞り込む', zh: '按类型筛选', es: 'Filtrar por tipo',
    pt: 'Filtrar por tipo', ar: 'التضييق حسب النوع', ko: '유형별로 좁히기',
  },
  narrowDownLabel: {
    en: 'Narrow down:', de: 'Eingrenzen:', fr: 'Affiner :', ja: '絞り込み:',
    zh: '缩小范围：', es: 'Filtrar:', pt: 'Refinar:', ar: 'تضييق:', ko: '좁히기:',
  },
  clear: {
    en: 'Clear', de: 'Zurücksetzen', fr: 'Effacer', ja: 'クリア', zh: '清除',
    es: 'Borrar', pt: 'Limpar', ar: 'مسح', ko: '지우기',
  },

  // --- FilterBar: group legends ---
  groupRuns: { en: 'Runs', de: 'Läuft', fr: 'Exécution', ja: '実行環境', zh: '运行方式', es: 'Ejecución', pt: 'Execução', ar: 'طريقة التشغيل', ko: '실행 방식' },
  groupEngine: { en: 'How it runs models', de: 'Wie Modelle ausgeführt werden', fr: 'Comment il exécute les modèles', ja: 'モデルの実行方法', zh: '模型运行方式', es: 'Cómo ejecuta los modelos', pt: 'Como executa os modelos', ar: 'كيفية تشغيل النماذج', ko: '모델 실행 방식' },
  groupWorksWith: { en: 'Works with', de: 'Kompatibel mit', fr: 'Compatible avec', ja: '対応先', zh: '兼容', es: 'Compatible con', pt: 'Compatível com', ar: 'يعمل مع', ko: '호환 대상' },
  groupPlatform: { en: 'Platform', de: 'Plattform', fr: 'Plateforme', ja: 'プラットフォーム', zh: '平台', es: 'Plataforma', pt: 'Plataforma', ar: 'المنصة', ko: '플랫폼' },
  groupCategory: { en: 'Category', de: 'Kategorie', fr: 'Catégorie', ja: 'カテゴリー', zh: '类别', es: 'Categoría', pt: 'Categoria', ar: 'الفئة', ko: '카테고리' },
  groupInterface: { en: 'Interface', de: 'Schnittstelle', fr: 'Interface', ja: 'インターフェース', zh: '界面', es: 'Interfaz', pt: 'Interface', ar: 'الواجهة', ko: '인터페이스' },
  groupPrice: { en: 'Price', de: 'Preis', fr: 'Prix', ja: '価格', zh: '价格', es: 'Precio', pt: 'Preço', ar: 'السعر', ko: '가격' },
  notCatalogued: {
    en: 'Not yet catalogued for these tools', de: 'Für diese Tools noch nicht erfasst',
    fr: 'Pas encore répertorié pour ces outils', ja: 'これらのツールではまだ未分類',
    zh: '这些工具尚未收录该信息', es: 'Aún no catalogado para estas herramientas',
    pt: 'Ainda não catalogado para essas ferramentas', ar: 'لم يُصنَّف بعد لهذه الأدوات', ko: '아직 분류되지 않음',
  },
  clearAllFilters: {
    en: 'Clear all filters', de: 'Alle Filter zurücksetzen', fr: 'Réinitialiser tous les filtres',
    ja: 'すべてのフィルターをクリア', zh: '清除所有筛选条件', es: 'Borrar todos los filtros',
    pt: 'Limpar todos os filtros', ar: 'مسح كل الفلاتر', ko: '모든 필터 지우기',
  },

  // --- locality / engine / price filter VALUES (FilterBar + ActiveFilterChips + ToolDrawer) ---
  localityLocalFilter: { en: 'Fully local', de: 'Vollständig lokal', fr: 'Entièrement local', ja: '完全ローカル', zh: '完全本地', es: 'Totalmente local', pt: 'Totalmente local', ar: 'محلي بالكامل', ko: '완전 로컬' },
  localityHybridFilter: { en: 'Hybrid (local + cloud)', de: 'Hybrid (lokal + Cloud)', fr: 'Hybride (local + cloud)', ja: 'ハイブリッド（ローカル＋クラウド）', zh: '混合（本地+云端）', es: 'Híbrido (local + nube)', pt: 'Híbrido (local + nuvem)', ar: 'هجين (محلي + سحابي)', ko: '하이브리드 (로컬 + 클라우드)' },
  localityCloud: { en: 'Cloud', de: 'Cloud', fr: 'Cloud', ja: 'クラウド', zh: '云端', es: 'Nube', pt: 'Nuvem', ar: 'سحابي', ko: '클라우드' },
  localityHybridShort: { en: 'Hybrid', de: 'Hybrid', fr: 'Hybride', ja: 'ハイブリッド', zh: '混合', es: 'Híbrido', pt: 'Híbrido', ar: 'هجين', ko: '하이브리드' },
  engineBuiltin: { en: 'Built-in engine', de: 'Integrierte Engine', fr: 'Moteur intégré', ja: '内蔵エンジン', zh: '内置引擎', es: 'Motor integrado', pt: 'Motor integrado', ar: 'محرك مدمج', ko: '내장 엔진' },
  engineExternal: { en: 'Needs external engine', de: 'Benötigt externe Engine', fr: 'Nécessite un moteur externe', ja: '外部エンジンが必要', zh: '需要外部引擎', es: 'Requiere motor externo', pt: 'Requer motor externo', ar: 'يحتاج محركًا خارجيًا', ko: '외부 엔진 필요' },
  engineBoth: { en: 'Either', de: 'Beides', fr: 'Les deux', ja: 'どちらも可', zh: '均可', es: 'Ambos', pt: 'Ambos', ar: 'كلاهما', ko: '둘 다 가능' },
  engineLibrary: { en: 'Library / SDK', de: 'Bibliothek / SDK', fr: 'Bibliothèque / SDK', ja: 'ライブラリ / SDK', zh: '库 / SDK', es: 'Biblioteca / SDK', pt: 'Biblioteca / SDK', ar: 'مكتبة / SDK', ko: '라이브러리 / SDK' },
  priceFree: { en: 'Free', de: 'Kostenlos', fr: 'Gratuit', ja: '無料', zh: '免费', es: 'Gratis', pt: 'Grátis', ar: 'مجاني', ko: '무료' },
  priceFreemium: { en: 'Freemium', de: 'Freemium', fr: 'Freemium', ja: 'フリーミアム', zh: '免费增值', es: 'Freemium', pt: 'Freemium', ar: 'مجاني جزئيًا', ko: '프리미엄(일부 유료)' },
  pricePaid: { en: 'Paid', de: 'Kostenpflichtig', fr: 'Payant', ja: '有料', zh: '付费', es: 'De pago', pt: 'Pago', ar: 'مدفوع', ko: '유료' },

  // --- StatsBar ---
  statsLocalityLocal: { en: 'Fully local', de: 'Vollständig lokal', fr: 'Entièrement local', ja: '完全ローカル', zh: '完全本地', es: 'Totalmente local', pt: 'Totalmente local', ar: 'محلي بالكامل', ko: '완전 로컬' },
  statsToolsTotal: { en: '{total} tools', de: '{total} Tools', fr: '{total} outils', ja: 'ツール{total}件', zh: '{total}款工具', es: '{total} herramientas', pt: '{total} ferramentas', ar: '{total} أداة', ko: '도구 {total}개' },
  statsToolsVisible: { en: '{visible} of {total} tools', de: '{visible} von {total} Tools', fr: '{visible} sur {total} outils', ja: '{total}件中{visible}件のツール', zh: '共{total}款工具，显示{visible}款', es: '{visible} de {total} herramientas', pt: '{visible} de {total} ferramentas', ar: '{visible} من {total} أداة', ko: '{total}개 중 {visible}개 도구' },

  // --- ToolCard ---
  cardLocalityLocal: { en: '100% local', de: '100 % lokal', fr: '100 % local', ja: '100%ローカル', zh: '100%本地', es: '100 % local', pt: '100% local', ar: 'محلي 100٪', ko: '100% 로컬' },
  founderReviewedBadge: { en: 'Founder-reviewed', de: 'Vom Gründer geprüft', fr: 'Vérifié par le fondateur', ja: '創業者が確認済み', zh: '创始人已审核', es: 'Revisado por el fundador', pt: 'Revisado pelo fundador', ar: 'راجعه المؤسس', ko: '창립자 검토 완료' },
  founderReviewedTooltip: {
    en: "The founder reviewed this entry's technical specs and description for accuracy",
    de: 'Der Gründer hat die technischen Angaben und die Beschreibung dieses Eintrags auf Richtigkeit geprüft',
    fr: "Le fondateur a vérifié l'exactitude des caractéristiques techniques et de la description de cette fiche",
    ja: '創業者がこの項目の技術仕様と説明の正確性を確認しました',
    zh: '创始人已核实此条目的技术规格和描述的准确性',
    es: 'El fundador revisó la exactitud de las especificaciones técnicas y la descripción de esta ficha',
    pt: 'O fundador revisou a precisão das especificações técnicas e da descrição deste registro',
    ar: 'راجع المؤسس دقة المواصفات التقنية ووصف هذا العنصر',
    ko: '창립자가 이 항목의 기술 사양과 설명의 정확성을 검토했습니다',
  },
  fromTheMaker: { en: 'From the Maker', de: 'Vom Entwickler', fr: 'Par le créateur', ja: '開発者より', zh: '来自开发者', es: 'Del creador', pt: 'Do criador', ar: 'من صانع الأداة', ko: '제작자로부터' },
  cardEngineBuiltin: { en: 'Runs its own engine', de: 'Läuft mit eigener Engine', fr: 'Fonctionne avec son propre moteur', ja: '独自エンジンで動作', zh: '使用自带引擎运行', es: 'Funciona con su propio motor', pt: 'Funciona com motor próprio', ar: 'يعمل بمحرك خاص به', ko: '자체 엔진으로 실행' },
  cardEngineExternal: { en: 'Needs Ollama/LM Studio', de: 'Benötigt Ollama/LM Studio', fr: 'Nécessite Ollama/LM Studio', ja: 'Ollama/LM Studioが必要', zh: '需要Ollama/LM Studio', es: 'Requiere Ollama/LM Studio', pt: 'Requer Ollama/LM Studio', ar: 'يحتاج Ollama/LM Studio', ko: 'Ollama/LM Studio 필요' },
  cardEngineBoth: { en: 'Own engine + external', de: 'Eigene Engine + extern', fr: 'Moteur propre + externe', ja: '独自エンジン＋外部対応', zh: '自带引擎+外部引擎', es: 'Motor propio + externo', pt: 'Motor próprio + externo', ar: 'محرك خاص + خارجي', ko: '자체 엔진 + 외부 엔진' },
  cardPriceFreemium: { en: 'Free + paid tier', de: 'Kostenlos + kostenpflichtige Stufe', fr: 'Gratuit + offre payante', ja: '無料＋有料プラン', zh: '免费+付费版', es: 'Gratis + plan de pago', pt: 'Grátis + plano pago', ar: 'مجاني + خطة مدفوعة', ko: '무료 + 유료 요금제' },
  articleCountOne: { en: '{count} article', de: '{count} Artikel', fr: '{count} article', ja: '記事{count}件', zh: '{count}篇文章', es: '{count} artículo', pt: '{count} artigo', ar: '{count} مقال', ko: '기사 {count}개' },
  articleCountOther: { en: '{count} articles', de: '{count} Artikel', fr: '{count} articles', ja: '記事{count}件', zh: '{count}篇文章', es: '{count} artículos', pt: '{count} artigos', ar: '{count} مقالات', ko: '기사 {count}개' },
  readReview: { en: 'Read review', de: 'Testbericht lesen', fr: "Lire l'avis", ja: 'レビューを読む', zh: '阅读评测', es: 'Leer la reseña', pt: 'Ler a análise', ar: 'قراءة المراجعة', ko: '리뷰 읽기' },
  // Badge/link shown only when the tool has an authoritative, single-subject
  // dedicated review (src/generated/feature-review-index.json) — visually
  // distinct from the plain "Read review" text link and from the "N articles
  // mention this tool" count, both of which stay unchanged.
  featureArticleBadge: { en: 'Feature Article', de: 'Ausführlicher Test', fr: 'Article dédié', ja: '特集記事', zh: '专题评测', es: 'Artículo destacado', pt: 'Artigo destacado', ar: 'مقال متخصص', ko: '심층 리뷰' },
  detailsButton: { en: 'Details', de: 'Details', fr: 'Détails', ja: '詳細', zh: '详情', es: 'Detalles', pt: 'Detalhes', ar: 'التفاصيل', ko: '상세 정보' },
  githubLink: { en: 'GitHub ↗', de: 'GitHub ↗', fr: 'GitHub ↗', ja: 'GitHub ↗', zh: 'GitHub ↗', es: 'GitHub ↗', pt: 'GitHub ↗', ar: 'GitHub ↗', ko: 'GitHub ↗' },
  getItLink: { en: 'Get it ↗', de: 'Herunterladen ↗', fr: 'Télécharger ↗', ja: '入手する ↗', zh: '立即获取 ↗', es: 'Obtenerlo ↗', pt: 'Obter ↗', ar: 'احصل عليه ↗', ko: '받기 ↗' },

  // --- ToolDrawer ---
  statusListed: { en: 'Listed', de: 'Gelistet', fr: 'Répertorié', ja: '掲載中', zh: '已收录', es: 'Listado', pt: 'Listado', ar: 'مُدرج', ko: '등재됨' },
  statusVerified: { en: 'Verified', de: 'Verifiziert', fr: 'Vérifié', ja: '検証済み', zh: '已验证', es: 'Verificado', pt: 'Verificado', ar: 'مُتحقَّق منه', ko: '검증됨' },
  statusTested: { en: 'PromptQuorum-tested', de: 'Von PromptQuorum getestet', fr: 'Testé par PromptQuorum', ja: 'PromptQuorumがテスト済み', zh: 'PromptQuorum已测试', es: 'Probado por PromptQuorum', pt: 'Testado pela PromptQuorum', ar: 'اختبرته PromptQuorum', ko: 'PromptQuorum 테스트 완료' },
  detailCategory: { en: 'Category', de: 'Kategorie', fr: 'Catégorie', ja: 'カテゴリー', zh: '类别', es: 'Categoría', pt: 'Categoria', ar: 'الفئة', ko: '카테고리' },
  detailInterface: { en: 'Interface', de: 'Schnittstelle', fr: 'Interface', ja: 'インターフェース', zh: '界面', es: 'Interfaz', pt: 'Interface', ar: 'الواجهة', ko: '인터페이스' },
  detailRuns: { en: 'Runs', de: 'Läuft', fr: 'Exécution', ja: '実行環境', zh: '运行方式', es: 'Ejecución', pt: 'Execução', ar: 'طريقة التشغيل', ko: '실행 방식' },
  detailEngine: { en: 'Engine', de: 'Engine', fr: 'Moteur', ja: 'エンジン', zh: '引擎', es: 'Motor', pt: 'Motor', ar: 'المحرك', ko: '엔진' },
  detailPrice: { en: 'Price', de: 'Preis', fr: 'Prix', ja: '価格', zh: '价格', es: 'Precio', pt: 'Preço', ar: 'السعر', ko: '가격' },
  detailLicense: { en: 'License', de: 'Lizenz', fr: 'Licence', ja: 'ライセンス', zh: '许可证', es: 'Licencia', pt: 'Licença', ar: 'الترخيص', ko: '라이선스' },
  detailPlatforms: { en: 'Platforms', de: 'Plattformen', fr: 'Plateformes', ja: '対応プラットフォーム', zh: '支持平台', es: 'Plataformas', pt: 'Plataformas', ar: 'المنصات', ko: '플랫폼' },
  detailWorksWith: { en: 'Works with', de: 'Kompatibel mit', fr: 'Compatible avec', ja: '対応先', zh: '兼容', es: 'Compatible con', pt: 'Compatível com', ar: 'يعمل مع', ko: '호환 대상' },
  detailHardware: { en: 'Hardware', de: 'Hardware', fr: 'Matériel', ja: 'ハードウェア', zh: '硬件', es: 'Hardware', pt: 'Hardware', ar: 'العتاد', ko: '하드웨어' },
  detailAdded: { en: 'Added', de: 'Hinzugefügt', fr: 'Ajouté', ja: '追加日', zh: '添加日期', es: 'Añadido', pt: 'Adicionado', ar: 'تاريخ الإضافة', ko: '추가일' },
  detailLastVerified: { en: 'Last verified', de: 'Zuletzt geprüft', fr: 'Dernière vérification', ja: '最終確認日', zh: '最后验证日期', es: 'Última verificación', pt: 'Última verificação', ar: 'آخر تحقق', ko: '마지막 확인일' },
  bestFor: { en: 'Best for:', de: 'Am besten für:', fr: 'Idéal pour :', ja: '最適な用途:', zh: '最适合：', es: 'Ideal para:', pt: 'Ideal para:', ar: 'الأنسب لـ:', ko: '적합한 용도:' },
  limits: { en: 'Limits:', de: 'Grenzen:', fr: 'Limites :', ja: '制限:', zh: '局限性：', es: 'Limitaciones:', pt: 'Limitações:', ar: 'القيود:', ko: '한계:' },
  claimEntryTemplate: {
    en: 'Claim this entry — if you build or maintain {appName}, email hello@promptquorum.com to add a founder statement.',
    de: 'Diesen Eintrag beanspruchen — wenn du {appName} entwickelst oder betreust, schreib an hello@promptquorum.com, um ein Gründer-Statement hinzuzufügen.',
    fr: 'Revendiquer cette fiche — si vous développez ou maintenez {appName}, écrivez à hello@promptquorum.com pour ajouter une déclaration du fondateur.',
    ja: 'このエントリーを申請する — {appName}を開発・運営している場合は、hello@promptquorum.com宛にメールして創業者コメントを追加してください。',
    zh: '认领此条目——如果你开发或维护{appName}，请发邮件至hello@promptquorum.com添加创始人声明。',
    es: 'Reclamar esta ficha: si desarrollas o mantienes {appName}, escribe a hello@promptquorum.com para añadir una declaración del fundador.',
    pt: 'Reivindicar este registro — se você desenvolve ou mantém o {appName}, envie um e-mail para hello@promptquorum.com para adicionar um depoimento do fundador.',
    ar: 'طالِب بهذا العنصر — إذا كنت تطوّر أو تُشرف على {appName}، راسلنا على hello@promptquorum.com لإضافة تصريح من المؤسس.',
    ko: '이 항목 소유권 주장하기 — {appName}을(를) 개발하거나 운영하신다면 hello@promptquorum.com으로 이메일을 보내 창립자 의견을 추가하세요.',
  },
  whyClaimIt: { en: 'Why claim it', de: 'Warum beanspruchen?', fr: 'Pourquoi la revendiquer', ja: '申請するメリット', zh: '为什么要认领', es: 'Por qué reclamarla', pt: 'Por que reivindicar', ar: 'لماذا تطالب بها', ko: '소유권 주장하는 이유' },
  hideDetails: { en: 'Hide details', de: 'Details ausblenden', fr: 'Masquer les détails', ja: '詳細を非表示', zh: '隐藏详情', es: 'Ocultar detalles', pt: 'Ocultar detalhes', ar: 'إخفاء التفاصيل', ko: '상세 정보 숨기기' },
  verifiedBadgeTitle: { en: 'Get the "Verified" badge.', de: 'Erhalte das „Verifiziert"-Abzeichen.', fr: 'Obtenez le badge « Vérifié ».', ja: '「検証済み」バッジを取得。', zh: '获取"已验证"徽章。', es: 'Consigue la insignia "Verificado".', pt: 'Obtenha o selo "Verificado".', ar: 'احصل على شارة "مُتحقَّق منه".', ko: "'검증됨' 배지 받기." },
  verifiedBadgeBodyTemplate: {
    en: 'Claimed entries carry a visible marker showing the details on this page were confirmed by the people who actually build {appName}, not just pulled from a repository.',
    de: 'Beanspruchte Einträge tragen ein sichtbares Zeichen, das zeigt, dass die Angaben auf dieser Seite von den Leuten bestätigt wurden, die {appName} tatsächlich entwickeln — nicht nur aus einem Repository übernommen.',
    fr: "Les fiches revendiquées portent un repère visible indiquant que les informations de cette page ont été confirmées par les personnes qui développent réellement {appName}, et non simplement extraites d'un dépôt.",
    ja: '申請済みのエントリーには、このページの情報が{appName}を実際に開発している人によって確認されたことを示す目印が表示されます。単にリポジトリから取得したものではありません。',
    zh: '已认领的条目会带有明显标记，表明此页面上的信息已由实际开发{appName}的团队确认，而非仅从代码仓库抓取。',
    es: 'Las fichas reclamadas llevan una marca visible que indica que la información de esta página fue confirmada por las personas que realmente desarrollan {appName}, no solo extraída de un repositorio.',
    pt: 'Os registros reivindicados exibem uma marca visível mostrando que as informações desta página foram confirmadas pelas pessoas que realmente desenvolvem o {appName}, e não apenas extraídas de um repositório.',
    ar: 'تحمل العناصر التي تمت المطالبة بها علامة واضحة تُظهر أن المعلومات في هذه الصفحة أكدها الأشخاص الذين يطوّرون {appName} فعليًا، وليست مأخوذة فقط من مستودع الشيفرة.',
    ko: '소유권이 확인된 항목에는 이 페이지의 정보가 {appName}을(를) 실제로 개발하는 사람들이 확인한 내용임을 보여주는 표시가 붙습니다. 단순히 저장소에서 가져온 정보가 아닙니다.',
  },
  correctRecordTitle: { en: 'Correct the record.', de: 'Fehler korrigieren.', fr: 'Corriger les informations.', ja: '情報を修正する。', zh: '更正信息。', es: 'Corregir la información.', pt: 'Corrigir as informações.', ar: 'تصحيح المعلومات.', ko: '정보 수정하기.' },
  correctRecordBody: {
    en: 'Flag wrong specs, outdated benchmarks, or missing features directly to us, and they get fixed in the article — before the next reader sees them.',
    de: 'Melde uns falsche Angaben, veraltete Benchmarks oder fehlende Funktionen direkt — sie werden im Artikel korrigiert, bevor der nächste Leser sie sieht.',
    fr: "Signalez-nous directement des caractéristiques erronées, des benchmarks obsolètes ou des fonctionnalités manquantes, et elles seront corrigées dans l'article avant que le prochain lecteur ne les voie.",
    ja: '誤った仕様、古いベンチマーク、不足している機能を直接私たちに知らせてください。次の読者が見る前に記事内で修正します。',
    zh: '直接向我们反馈错误的规格、过时的基准数据或缺失的功能，我们会在下一位读者看到之前更正文章内容。',
    es: 'Avísanos directamente de especificaciones incorrectas, puntos de referencia desactualizados o funciones faltantes, y los corregiremos en el artículo antes de que el próximo lector los vea.',
    pt: 'Aponte diretamente para nós especificações incorretas, benchmarks desatualizados ou recursos ausentes, e eles serão corrigidos no artigo antes que o próximo leitor os veja.',
    ar: 'أبلغنا مباشرة عن المواصفات الخاطئة أو المعايير القديمة أو الميزات الناقصة، وسيتم تصحيحها في المقال قبل أن يراها القارئ التالي.',
    ko: '잘못된 사양, 오래된 벤치마크, 누락된 기능을 저희에게 직접 알려주시면 다음 독자가 보기 전에 기사에서 수정하겠습니다.',
  },
  addStatementTitle: { en: 'Add your own statement.', de: 'Eigenes Statement hinzufügen.', fr: 'Ajouter votre propre déclaration.', ja: '独自のコメントを追加。', zh: '添加你自己的声明。', es: 'Añade tu propia declaración.', pt: 'Adicione seu próprio depoimento.', ar: 'أضف تصريحك الخاص.', ko: '나만의 의견 추가하기.' },
  addStatementBody: {
    en: "A short founder note — why you built it, what it's best at, where it falls short — runs next to the editorial review, in your own words.",
    de: 'Ein kurzes Statement des Gründers — warum du es entwickelt hast, worin es besonders gut ist, wo es Grenzen hat — erscheint neben der redaktionellen Bewertung, in deinen eigenen Worten.',
    fr: "Une brève note du fondateur — pourquoi vous l'avez créé, ce en quoi il excelle, ses limites — s'affiche à côté de l'avis éditorial, dans vos propres mots.",
    ja: 'なぜ開発したのか、何が得意なのか、どこに限界があるのか — 創業者からの短いコメントが、あなた自身の言葉で編集レビューの隣に掲載されます。',
    zh: '一段简短的创始人说明——为什么开发它、擅长什么、局限在哪里——将以你自己的话呈现在编辑评测旁边。',
    es: 'Una breve nota del fundador — por qué lo creaste, en qué destaca, dónde tiene límites — aparece junto a la reseña editorial, en tus propias palabras.',
    pt: 'Uma breve nota do fundador — por que você o criou, no que ele se destaca, onde ele tem limitações — aparece ao lado da análise editorial, em suas próprias palavras.',
    ar: 'ملاحظة قصيرة من المؤسس — لماذا طوّرته، وما الذي يتميز فيه، وأين تكمن حدوده — تظهر بجانب المراجعة التحريرية، بكلماتك أنت.',
    ko: '왜 만들었는지, 무엇을 가장 잘하는지, 어떤 한계가 있는지에 대한 창립자의 짧은 메모가 여러분 자신의 말로 편집 리뷰 옆에 실립니다.',
  },
  freeVisibilityTitle: { en: 'Free, ongoing visibility.', de: 'Kostenlose, dauerhafte Sichtbarkeit.', fr: 'Visibilité gratuite et continue.', ja: '無料で継続的な露出。', zh: '免费的长期曝光。', es: 'Visibilidad gratuita y continua.', pt: 'Visibilidade gratuita e contínua.', ar: 'ظهور مستمر ومجاني.', ko: '무료로 지속되는 노출.' },
  freeVisibilityBodyTemplate: {
    en: 'No cost, no ad spend. Everyone who compares {appName} against alternatives on this site sees your correction and your statement.',
    de: 'Keine Kosten, keine Werbeausgaben. Jeder, der {appName} auf dieser Seite mit Alternativen vergleicht, sieht deine Korrektur und dein Statement.',
    fr: 'Aucun coût, aucune dépense publicitaire. Toute personne qui compare {appName} aux alternatives sur ce site voit votre correction et votre déclaration.',
    ja: '費用も広告費も不要です。このサイトで{appName}を他の選択肢と比較する人は誰でも、あなたの修正とコメントを目にします。',
    zh: '无需费用，无需广告支出。每个在本站将{appName}与其他方案对比的人都会看到你的更正和声明。',
    es: 'Sin costo, sin gasto publicitario. Todos los que comparen {appName} con alternativas en este sitio verán tu corrección y tu declaración.',
    pt: 'Sem custo, sem gasto com anúncios. Todos que comparam o {appName} com alternativas neste site veem sua correção e seu depoimento.',
    ar: 'بلا تكلفة وبلا إنفاق إعلاني. كل من يقارن {appName} بالبدائل على هذا الموقع سيرى تصحيحك وتصريحك.',
    ko: '비용도, 광고비도 들지 않습니다. 이 사이트에서 {appName}을(를) 다른 대안과 비교하는 모든 사람이 여러분의 수정 사항과 의견을 보게 됩니다.',
  },
  emailPrefix: { en: 'Email', de: 'E-Mail an', fr: 'Envoyez un e-mail à', ja: 'メール送信先:', zh: '发送邮件至', es: 'Envía un correo a', pt: 'Envie um e-mail para', ar: 'راسلنا على', ko: '이메일 보내기:' },
  emailSuffixTemplate: {
    en: '— put {appName} in the subject line.', de: '— gib {appName} als Betreff an.',
    fr: "— indiquez {appName} dans l'objet.", ja: '— 件名に{appName}と記載してください。',
    zh: '——请在邮件主题中注明{appName}。', es: '— indica {appName} en el asunto.',
    pt: '— coloque {appName} no assunto.', ar: '— واذكر {appName} في سطر الموضوع.',
    ko: '— 제목에 {appName}을(를) 적어주세요.',
  },
  copyEntryAriaLabel: { en: 'Copy entry details', de: 'Eintragsdetails kopieren', fr: 'Copier les détails de la fiche', ja: 'エントリーの詳細をコピー', zh: '复制条目详情', es: 'Copiar detalles de la ficha', pt: 'Copiar detalhes do registro', ar: 'نسخ تفاصيل العنصر', ko: '항목 세부정보 복사' },
  copied: { en: 'Copied', de: 'Kopiert', fr: 'Copié', ja: 'コピーしました', zh: '已复制', es: 'Copiado', pt: 'Copiado', ar: 'تم النسخ', ko: '복사됨' },
  copyLabel: { en: 'Copy', de: 'Kopieren', fr: 'Copier', ja: 'コピー', zh: '复制', es: 'Copiar', pt: 'Copiar', ar: 'نسخ', ko: '복사' },
  closeAriaLabel: { en: 'Close', de: 'Schließen', fr: 'Fermer', ja: '閉じる', zh: '关闭', es: 'Cerrar', pt: 'Fechar', ar: 'إغلاق', ko: '닫기' },
  founderReviewedBannerLabel: { en: 'Founder-reviewed.', de: 'Vom Gründer geprüft.', fr: 'Vérifié par le fondateur.', ja: '創業者確認済み。', zh: '创始人已审核。', es: 'Revisado por el fundador.', pt: 'Revisado pelo fundador.', ar: 'راجعه المؤسس.', ko: '창립자 검토 완료.' },
  founderReviewedBannerBodyTemplate: {
    en: "{name}'s founder reviewed this entry's technical specs and description for accuracy. The review itself remains independent PromptQuorum editorial content.",
    de: 'Der Gründer von {name} hat die technischen Angaben und die Beschreibung dieses Eintrags auf Richtigkeit geprüft. Die Bewertung selbst bleibt unabhängiger redaktioneller Inhalt von PromptQuorum.',
    fr: "Le fondateur de {name} a vérifié l'exactitude des caractéristiques techniques et de la description de cette fiche. L'avis lui-même reste un contenu éditorial indépendant de PromptQuorum.",
    ja: '{name}の創業者が、このエントリーの技術仕様と説明の正確性を確認しました。レビュー自体はPromptQuorumの独立した編集コンテンツのままです。',
    zh: '{name}的创始人已核实此条目的技术规格和描述的准确性。评测本身仍为PromptQuorum独立的编辑内容。',
    es: 'El fundador de {name} revisó la exactitud de las especificaciones técnicas y la descripción de esta ficha. La reseña en sí sigue siendo contenido editorial independiente de PromptQuorum.',
    pt: 'O fundador do {name} revisou a precisão das especificações técnicas e da descrição deste registro. A análise em si continua sendo conteúdo editorial independente da PromptQuorum.',
    ar: 'راجع مؤسس {name} دقة المواصفات التقنية ووصف هذا العنصر. تبقى المراجعة نفسها محتوى تحريريًا مستقلاً من PromptQuorum.',
    ko: '{name}의 창립자가 이 항목의 기술 사양과 설명의 정확성을 검토했습니다. 리뷰 자체는 PromptQuorum의 독립적인 편집 콘텐츠로 유지됩니다.',
  },
  pqReviewHeading: { en: 'PromptQuorum review', de: 'PromptQuorum-Bewertung', fr: 'Avis de PromptQuorum', ja: 'PromptQuorumレビュー', zh: 'PromptQuorum评测', es: 'Reseña de PromptQuorum', pt: 'Análise da PromptQuorum', ar: 'مراجعة PromptQuorum', ko: 'PromptQuorum 리뷰' },
  testedOnTemplate: { en: 'Tested {date} on {hw}', de: 'Getestet am {date} auf {hw}', fr: 'Testé le {date} sur {hw}', ja: '{hw}で{date}にテスト', zh: '于{date}在{hw}上测试', es: 'Probado el {date} en {hw}', pt: 'Testado em {date} em {hw}', ar: 'اختُبر في {date} على {hw}', ko: '{hw}에서 {date}에 테스트' },
  pqArticlesHeading: { en: 'PromptQuorum articles', de: 'PromptQuorum-Artikel', fr: 'Articles PromptQuorum', ja: 'PromptQuorumの記事', zh: 'PromptQuorum文章', es: 'Artículos de PromptQuorum', pt: 'Artigos da PromptQuorum', ar: 'مقالات PromptQuorum', ko: 'PromptQuorum 기사' },
  alternativesHeading: { en: 'Alternatives', de: 'Alternativen', fr: 'Alternatives', ja: '代替ツール', zh: '替代方案', es: 'Alternativas', pt: 'Alternativas', ar: 'بدائل', ko: '대안' },

  // --- ArticlesBlock ---
  noArticlesYet: {
    en: 'No PromptQuorum articles mention this tool yet.',
    de: 'Noch keine PromptQuorum-Artikel erwähnen dieses Tool.',
    fr: 'Aucun article PromptQuorum ne mentionne encore cet outil.',
    ja: 'この項目に言及するPromptQuorumの記事はまだありません。',
    zh: '目前还没有PromptQuorum文章提到此工具。',
    es: 'Ningún artículo de PromptQuorum menciona aún esta herramienta.',
    pt: 'Nenhum artigo da PromptQuorum menciona esta ferramenta ainda.',
    ar: 'لا توجد مقالات من PromptQuorum تذكر هذه الأداة بعد.',
    ko: '아직 이 도구를 언급한 PromptQuorum 기사가 없습니다.',
  },
  alsoMentionedIn: { en: 'Also mentioned in:', de: 'Auch erwähnt in:', fr: 'Également mentionné dans :', ja: 'その他の言及記事:', zh: '其他提及：', es: 'También mencionado en:', pt: 'Também mencionado em:', ar: 'مذكور أيضًا في:', ko: '다음에서도 언급됨:' },
  updatedPrefix: { en: 'Updated', de: 'Aktualisiert', fr: 'Mis à jour', ja: '更新日', zh: '更新于', es: 'Actualizado', pt: 'Atualizado', ar: 'تم التحديث', ko: '업데이트됨' },
  moreNotShownTemplate: { en: '+{n} more not shown', de: '+{n} weitere nicht angezeigt', fr: '+{n} de plus non affichés', ja: '他{n}件は非表示', zh: '另有{n}篇未显示', es: '+{n} más sin mostrar', pt: '+{n} não exibidos', ar: '+{n} أخرى غير معروضة', ko: '+{n}개 더 있음 (표시 안 됨)' },

  // --- ToolTable columns ---
  colTool: { en: 'Tool', de: 'Tool', fr: 'Outil', ja: 'ツール', zh: '工具', es: 'Herramienta', pt: 'Ferramenta', ar: 'الأداة', ko: '도구' },
  colStars: { en: 'Stars', de: 'Sterne', fr: 'Étoiles', ja: 'スター数', zh: '星标数', es: 'Estrellas', pt: 'Estrelas', ar: 'النجوم', ko: '스타 수' },
  colStatus: { en: 'Status', de: 'Status', fr: 'Statut', ja: 'ステータス', zh: '状态', es: 'Estado', pt: 'Status', ar: 'الحالة', ko: '상태' },
  colCategory: { en: 'Category', de: 'Kategorie', fr: 'Catégorie', ja: 'カテゴリー', zh: '类别', es: 'Categoría', pt: 'Categoria', ar: 'الفئة', ko: '카테고리' },

  // --- hardware.ts headline/detail strings ---
  hwSetByEngine: { en: 'Set by your engine', de: 'Wird von deiner Engine bestimmt', fr: 'Déterminé par votre moteur', ja: '使用エンジンにより異なる', zh: '由所用引擎决定', es: 'Depende de tu motor', pt: 'Definido pelo seu motor', ar: 'يحدده المحرك الذي تستخدمه', ko: '사용 중인 엔진에 따라 결정됨' },
  hwSetByEngineDetail: {
    en: 'This is a client — Ollama, LM Studio or your server holds the model',
    de: 'Dies ist ein Client — Ollama, LM Studio oder dein Server hält das Modell vor',
    fr: 'Ceci est un client — Ollama, LM Studio ou votre serveur héberge le modèle',
    ja: 'これはクライアントです — モデルはOllama、LM Studio、またはあなたのサーバーが保持します',
    zh: '这是一个客户端——模型由Ollama、LM Studio或你的服务器承载',
    es: 'Esto es un cliente: Ollama, LM Studio o tu servidor aloja el modelo',
    pt: 'Isto é um cliente — o modelo fica no Ollama, LM Studio ou no seu servidor',
    ar: 'هذا عميل — يحتفظ Ollama أو LM Studio أو خادمك بالنموذج',
    ko: '이것은 클라이언트입니다 — Ollama, LM Studio 또는 사용자의 서버가 모델을 보유합니다',
  },
  hwSetByModel: { en: 'Set by the model you load', de: 'Wird vom geladenen Modell bestimmt', fr: 'Déterminé par le modèle que vous chargez', ja: '読み込むモデルにより異なる', zh: '由所加载的模型决定', es: 'Depende del modelo que cargues', pt: 'Definido pelo modelo que você carrega', ar: 'يحدده النموذج الذي تحمّله', ko: '로드하는 모델에 따라 결정됨' },
  hwSetByModelDetail: { en: 'The library itself is lightweight', de: 'Die Bibliothek selbst ist schlank', fr: 'La bibliothèque elle-même est légère', ja: 'ライブラリ自体は軽量です', zh: '该库本身非常轻量', es: 'La biblioteca en sí es ligera', pt: 'A biblioteca em si é leve', ar: 'المكتبة نفسها خفيفة', ko: '라이브러리 자체는 가볍습니다' },
  hwApproxRamHeadline: { en: '≈8 GB RAM for a 7B model', de: '≈8 GB RAM für ein 7B-Modell', fr: '≈8 Go de RAM pour un modèle 7B', ja: '7Bモデルで約8GBのRAM', zh: '7B模型约需8GB内存', es: '≈8 GB de RAM para un modelo de 7B', pt: '≈8 GB de RAM para um modelo de 7B', ar: '≈8 جيجابايت رام لنموذج 7B', ko: '7B 모델 기준 약 8GB RAM' },
  hwApproxRamDetail: {
    en: 'Loads models itself — scales with model size and quantisation',
    de: 'Lädt Modelle selbst — abhängig von Modellgröße und Quantisierung',
    fr: 'Charge les modèles lui-même — dépend de la taille du modèle et de la quantisation',
    ja: 'モデルを自身で読み込みます — モデルサイズと量子化によって変動します',
    zh: '自行加载模型——需求随模型大小和量化方式变化',
    es: 'Carga los modelos por sí mismo — varía según el tamaño del modelo y la cuantización',
    pt: 'Carrega os modelos sozinho — varia conforme o tamanho do modelo e a quantização',
    ar: 'يحمّل النماذج بنفسه — يختلف حسب حجم النموذج والتكميم',
    ko: '모델을 직접 로드함 — 모델 크기와 양자화 수준에 따라 달라짐',
  },
  hwUnifiedMemoryTemplate: { en: '{n} GB unified memory', de: '{n} GB Unified Memory', fr: '{n} Go de mémoire unifiée', ja: '{n}GBのユニファイドメモリ', zh: '{n}GB统一内存', es: '{n} GB de memoria unificada', pt: '{n} GB de memória unificada', ar: '{n} جيجابايت ذاكرة موحدة', ko: '{n}GB 통합 메모리' },
  hwRunsCpuOnlySlower: {
    en: 'Runs CPU-only if needed (slower)', de: 'Läuft bei Bedarf auch nur mit CPU (langsamer)',
    fr: 'Fonctionne uniquement sur CPU si nécessaire (plus lent)', ja: '必要に応じてCPUのみでも動作します（低速）',
    zh: '需要时可仅用CPU运行（速度较慢）', es: 'Funciona solo con CPU si es necesario (más lento)',
    pt: 'Funciona apenas com CPU se necessário (mais lento)', ar: 'يعمل بالمعالج فقط عند الحاجة (أبطأ)', ko: '필요 시 CPU만으로도 실행 가능(속도 느림)',
  },
  hwGpuRecommended: { en: 'GPU recommended', de: 'GPU empfohlen', fr: 'GPU recommandé', ja: 'GPU推奨', zh: '建议使用GPU', es: 'Se recomienda GPU', pt: 'GPU recomendada', ar: 'يُنصح باستخدام معالج رسومات', ko: 'GPU 권장' },
  hwRamMinimumCpuSlowTemplate: {
    en: '{n} GB RAM minimum — CPU-only will be slow',
    de: 'Mindestens {n} GB RAM — nur mit CPU ist es langsam',
    fr: '{n} Go de RAM minimum — le mode CPU seul sera lent',
    ja: '最低{n}GBのRAMが必要 — CPUのみでは低速です',
    zh: '至少需要{n}GB内存——仅用CPU运行会很慢',
    es: 'Mínimo {n} GB de RAM — solo con CPU será lento',
    pt: 'Mínimo de {n} GB de RAM — apenas com CPU será lento',
    ar: 'الحد الأدنى {n} جيجابايت رام — التشغيل بالمعالج فقط سيكون بطيئًا',
    ko: '최소 {n}GB RAM 필요 — CPU만 사용 시 느림',
  },
  hwCpuOnlySlowGeneric: {
    en: 'CPU-only will be slow for this tool', de: 'Nur mit CPU ist dieses Tool langsam',
    fr: 'Le mode CPU seul sera lent pour cet outil', ja: 'このツールはCPUのみでは低速になります',
    zh: '此工具仅用CPU运行会很慢', es: 'Solo con CPU, esta herramienta será lenta',
    pt: 'Apenas com CPU, esta ferramenta será lenta', ar: 'سيكون التشغيل بالمعالج فقط بطيئًا لهذه الأداة', ko: '이 도구는 CPU만 사용 시 느립니다',
  },
  hwRamTemplate: { en: '{n} GB RAM', de: '{n} GB RAM', fr: '{n} Go de RAM', ja: '{n}GBのRAM', zh: '{n}GB内存', es: '{n} GB de RAM', pt: '{n} GB de RAM', ar: '{n} جيجابايت رام', ko: '{n}GB RAM' },
  hwCpuOnlySupported: { en: 'CPU-only supported', de: 'Nur-CPU-Betrieb unterstützt', fr: 'Fonctionnement CPU seul pris en charge', ja: 'CPUのみでの動作に対応', zh: '支持仅用CPU运行', es: 'Compatible con solo CPU', pt: 'Compatível com apenas CPU', ar: 'يدعم التشغيل بالمعالج فقط', ko: 'CPU 전용 실행 지원' },
  hwVramTemplate: { en: '{n} GB VRAM', de: '{n} GB VRAM', fr: '{n} Go de VRAM', ja: '{n}GBのVRAM', zh: '{n}GB显存', es: '{n} GB de VRAM', pt: '{n} GB de VRAM', ar: '{n} جيجابايت VRAM', ko: '{n}GB VRAM' },
  hwPlusSystemRamTemplate: { en: '+ {n} GB system RAM', de: '+ {n} GB System-RAM', fr: '+ {n} Go de RAM système', ja: '＋システムRAM {n}GB', zh: '+{n}GB系统内存', es: '+ {n} GB de RAM del sistema', pt: '+ {n} GB de RAM do sistema', ar: '+ {n} جيجابايت رام النظام', ko: '+ 시스템 RAM {n}GB' },
  hwNoDedicatedGpu: { en: 'No dedicated GPU required', de: 'Keine dedizierte GPU erforderlich', fr: 'Aucun GPU dédié requis', ja: '専用GPUは不要', zh: '无需独立显卡', es: 'No requiere GPU dedicada', pt: 'Não requer GPU dedicada', ar: 'لا يتطلب معالج رسومات مخصصًا', ko: '전용 GPU 불필요' },
} satisfies Record<string, Dict>

export type DirUiKey = keyof typeof DIR_UI

/** Looks up one UI string in the caller's language, falling back to English, with optional `{token}` substitution. */
export function t(key: DirUiKey, lang: Language, vars?: Record<string, string | number>): string {
  const entry = DIR_UI[key]
  let text = entry[lang] ?? entry.en
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.split(`{${k}}`).join(String(v))
    }
  }
  return text
}

export function getMachineLabels(lang: Language): Record<MachineType, string> {
  return {
    dgpu: t('machineDgpu', lang),
    apple: t('machineApple', lang),
    cpu: t('machineCpu', lang),
  }
}

export function getWantLabels(lang: Language): Record<UseCaseKey, string> {
  return {
    chat: t('wantChat', lang),
    code: t('wantCode', lang),
    agent: t('wantAgent', lang),
    docs: t('wantDocs', lang),
    image: t('wantImage', lang),
    audio: t('wantAudio', lang),
    phone: t('wantPhone', lang),
    build: t('wantBuild', lang),
    serve: t('wantServe', lang),
  }
}
