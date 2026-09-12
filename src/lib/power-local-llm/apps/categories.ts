import type { Language } from '@/lib/blog/blogContent'

// Power Local LLM — Local AI App Directory taxonomy.
//
// Replaces the single-select `layer` field (which mixed form-factor —
// desktop/mobile/webui/cli/ide — with function — runtime/agent/rag/image/
// tts/vision/stt — into one value a tool could only ever have one of).
// A tool like LM Studio is simultaneously a desktop app AND a full
// inference runtime AND an API server; `layer` could only ever record one
// of those. Two orthogonal facets fix that:
//
//   `category`   — WHAT the tool does. Multi-assign, hierarchical: a
//                   7-group top level (the stable public surface — meant
//                   to hold for ~2 years without restructuring) and a
//                   35-value subcategory level underneath (where new tool
//                   classes get absorbed as they appear). First entry in a
//                   tool's `categories[]` array is its primary category.
//   `interface`  — HOW you use the tool. desktop app / web app / CLI /
//                   editor-or-notes plugin / mobile app / code library.
//                   Independent of category: a RAG framework can ship as
//                   a CLI, a library, or both.
//
// This file is the single source of truth for both enums and their
// display labels — component code imports from here rather than
// hardcoding category/interface strings.

export type CategoryGroupKey =
  | 'run-serve'
  | 'chat-assistants'
  | 'code-development'
  | 'knowledge-retrieval'
  | 'voice-audio'
  | 'images-video'
  | 'train-operate'

export type CategorySubKey =
  // Run & Serve
  | 'inference-engines'
  | 'runtimes-managers'
  | 'api-servers'
  | 'routers-gateways'
  | 'quantization-conversion'
  // Chat & Assistants
  | 'general-chat-clients'
  | 'roleplay-companions'
  | 'personal-assistants'
  // Code & Development
  | 'code-assistants-ide-plugins'
  | 'agent-frameworks'
  | 'autonomous-agents'
  | 'sdks-libraries'
  | 'workflow-node-builders'
  | 'prompt-tooling-evals'
  // Knowledge & Retrieval
  | 'rag-frameworks'
  | 'document-pdf-chat'
  | 'vector-databases'
  | 'notes-integrations'
  | 'embeddings-indexing'
  | 'local-search'
  // Voice & Audio
  | 'speech-to-text'
  | 'text-to-speech'
  | 'voice-cloning'
  | 'realtime-voice-agents'
  | 'music-audio'
  // Images & Video
  | 'image-generation'
  | 'editing-upscaling'
  | 'vision-ocr'
  | 'video-generation'
  | 'avatars-3d'
  // Train & Operate
  | 'fine-tuning-lora'
  | 'datasets-synthetic-data'
  | 'evaluation-benchmarking'
  | 'observability'
  | 'model-hubs'

export type InterfaceKey = 'desktop' | 'web' | 'cli' | 'plugin' | 'mobile' | 'library'

export const CATEGORY_GROUP_LABEL: Record<CategoryGroupKey, string> = {
  'run-serve': 'Run & Serve',
  'chat-assistants': 'Chat & Assistants',
  'code-development': 'Code & Development',
  'knowledge-retrieval': 'Knowledge & Retrieval',
  'voice-audio': 'Voice & Audio',
  'images-video': 'Images & Video',
  'train-operate': 'Train & Operate',
}

export const TOTAL_CATEGORY_GROUP_COUNT = Object.keys(CATEGORY_GROUP_LABEL).length

export const CATEGORY_SUB_LABEL: Record<CategorySubKey, Record<Language, string>> = {
  'inference-engines': { en: 'Inference engines', de: 'Inferenz-Engines', fr: "Moteurs d'inférence", ja: '推論エンジン', zh: '推理引擎', es: 'Motores de inferencia', pt: 'Motores de inferência', ar: 'محركات الاستدلال', ko: '추론 엔진' },
  'runtimes-managers': { en: 'Runtimes & model managers', de: 'Laufzeitumgebungen & Modell-Manager', fr: 'Runtimes et gestionnaires de modèles', ja: 'ランタイム＆モデル管理', zh: '运行时与模型管理器', es: 'Entornos de ejecución y gestores de modelos', pt: 'Ambientes de execução e gerenciadores de modelos', ar: 'بيئات التشغيل ومديرو النماذج', ko: '런타임 및 모델 관리자' },
  'api-servers': { en: 'API servers', de: 'API-Server', fr: 'Serveurs API', ja: 'APIサーバー', zh: 'API 服务器', es: 'Servidores API', pt: 'Servidores de API', ar: 'خوادم API', ko: 'API 서버' },
  'routers-gateways': { en: 'Routers & gateways', de: 'Router & Gateways', fr: 'Routeurs et passerelles', ja: 'ルーター＆ゲートウェイ', zh: '路由器与网关', es: 'Enrutadores y pasarelas', pt: 'Roteadores e gateways', ar: 'أجهزة التوجيه والبوابات', ko: '라우터 및 게이트웨이' },
  'quantization-conversion': { en: 'Quantization & conversion', de: 'Quantisierung & Konvertierung', fr: 'Quantification et conversion', ja: '量子化＆変換', zh: '量化与转换', es: 'Cuantización y conversión', pt: 'Quantização e conversão', ar: 'التكميم والتحويل', ko: '양자화 및 변환' },
  'general-chat-clients': { en: 'General chat clients', de: 'Allgemeine Chat-Clients', fr: 'Clients de chat généraux', ja: '汎用チャットクライアント', zh: '通用聊天客户端', es: 'Clientes de chat generales', pt: 'Clientes de chat gerais', ar: 'عملاء الدردشة العامة', ko: '범용 채팅 클라이언트' },
  'roleplay-companions': { en: 'Roleplay & companions', de: 'Rollenspiel & Begleiter', fr: 'Jeu de rôle et compagnons', ja: 'ロールプレイ＆コンパニオン', zh: '角色扮演与陪伴', es: 'Rol y compañeros virtuales', pt: 'Interpretação de papéis e companheiros', ar: 'لعب الأدوار والرفقاء الافتراضيون', ko: '롤플레이 및 컴패니언' },
  'personal-assistants': { en: 'Personal assistants', de: 'Persönliche Assistenten', fr: 'Assistants personnels', ja: 'パーソナルアシスタント', zh: '个人助理', es: 'Asistentes personales', pt: 'Assistentes pessoais', ar: 'المساعدون الشخصيون', ko: '개인 비서' },
  'code-assistants-ide-plugins': { en: 'Code assistants & IDE plugins', de: 'Code-Assistenten & IDE-Plugins', fr: 'Assistants de code et plugins IDE', ja: 'コードアシスタント＆IDEプラグイン', zh: '代码助手与 IDE 插件', es: 'Asistentes de código y plugins de IDE', pt: 'Assistentes de código e plugins de IDE', ar: 'مساعدو الكود وإضافات IDE', ko: '코드 어시스턴트 및 IDE 플러그인' },
  'agent-frameworks': { en: 'Agent frameworks', de: 'Agenten-Frameworks', fr: "Frameworks d'agents", ja: 'エージェントフレームワーク', zh: '智能体框架', es: 'Frameworks de agentes', pt: 'Frameworks de agentes', ar: 'أطر عمل الوكلاء', ko: '에이전트 프레임워크' },
  'autonomous-agents': { en: 'Autonomous agents', de: 'Autonome Agenten', fr: 'Agents autonomes', ja: '自律型エージェント', zh: '自主智能体', es: 'Agentes autónomos', pt: 'Agentes autônomos', ar: 'الوكلاء المستقلون', ko: '자율 에이전트' },
  'sdks-libraries': { en: 'SDKs & libraries', de: 'SDKs & Bibliotheken', fr: 'SDK et bibliothèques', ja: 'SDK＆ライブラリ', zh: 'SDK 与库', es: 'SDKs y bibliotecas', pt: 'SDKs e bibliotecas', ar: 'حزم SDK والمكتبات', ko: 'SDK 및 라이브러리' },
  'workflow-node-builders': { en: 'Workflow & node builders', de: 'Workflow- & Node-Builder', fr: 'Générateurs de workflows et de nœuds', ja: 'ワークフロー＆ノードビルダー', zh: '工作流与节点构建工具', es: 'Constructores de flujos de trabajo y nodos', pt: 'Construtores de fluxos de trabalho e nós', ar: 'أدوات بناء سير العمل والعقد', ko: '워크플로 및 노드 빌더' },
  'prompt-tooling-evals': { en: 'Prompt tooling & evals', de: 'Prompt-Tools & Evaluierungen', fr: 'Outils de prompt et évaluations', ja: 'プロンプトツール＆評価', zh: '提示词工具与评估', es: 'Herramientas de prompts y evaluaciones', pt: 'Ferramentas de prompt e avaliações', ar: 'أدوات البرومبت والتقييم', ko: '프롬프트 도구 및 평가' },
  'rag-frameworks': { en: 'RAG frameworks', de: 'RAG-Frameworks', fr: 'Frameworks RAG', ja: 'RAGフレームワーク', zh: 'RAG 框架', es: 'Frameworks RAG', pt: 'Frameworks RAG', ar: 'أطر عمل RAG', ko: 'RAG 프레임워크' },
  'document-pdf-chat': { en: 'Document & PDF chat', de: 'Dokument- & PDF-Chat', fr: 'Chat de documents et PDF', ja: 'ドキュメント＆PDFチャット', zh: '文档与 PDF 对话', es: 'Chat de documentos y PDF', pt: 'Chat de documentos e PDF', ar: 'الدردشة مع المستندات وملفات PDF', ko: '문서 및 PDF 채팅' },
  'vector-databases': { en: 'Vector databases', de: 'Vektordatenbanken', fr: 'Bases de données vectorielles', ja: 'ベクトルデータベース', zh: '向量数据库', es: 'Bases de datos vectoriales', pt: 'Bancos de dados vetoriais', ar: 'قواعد البيانات المتجهة', ko: '벡터 데이터베이스' },
  'notes-integrations': { en: 'Notes integrations', de: 'Notiz-Integrationen', fr: 'Intégrations de notes', ja: 'メモアプリ連携', zh: '笔记应用集成', es: 'Integraciones de notas', pt: 'Integrações de notas', ar: 'تكاملات تطبيقات الملاحظات', ko: '노트 앱 연동' },
  'embeddings-indexing': { en: 'Embeddings & indexing', de: 'Embeddings & Indexierung', fr: 'Embeddings et indexation', ja: '埋め込み＆インデックス作成', zh: '嵌入与索引', es: 'Embeddings e indexación', pt: 'Embeddings e indexação', ar: 'التضمينات والفهرسة', ko: '임베딩 및 인덱싱' },
  'local-search': { en: 'Local search', de: 'Lokale Suche', fr: 'Recherche locale', ja: 'ローカル検索', zh: '本地搜索', es: 'Búsqueda local', pt: 'Busca local', ar: 'البحث المحلي', ko: '로컬 검색' },
  'speech-to-text': { en: 'Speech-to-text', de: 'Sprache-zu-Text', fr: 'Reconnaissance vocale', ja: '音声認識', zh: '语音转文字', es: 'Voz a texto', pt: 'Voz para texto', ar: 'تحويل الكلام إلى نص', ko: '음성 인식' },
  'text-to-speech': { en: 'Text-to-speech', de: 'Text-zu-Sprache', fr: 'Synthèse vocale', ja: '音声合成', zh: '文字转语音', es: 'Texto a voz', pt: 'Texto para voz', ar: 'تحويل النص إلى كلام', ko: '텍스트 음성 변환' },
  'voice-cloning': { en: 'Voice cloning', de: 'Stimmenklonung', fr: 'Clonage vocal', ja: '音声クローニング', zh: '语音克隆', es: 'Clonación de voz', pt: 'Clonagem de voz', ar: 'استنساخ الصوت', ko: '음성 복제' },
  'realtime-voice-agents': { en: 'Real-time voice agents', de: 'Echtzeit-Sprachagenten', fr: 'Agents vocaux en temps réel', ja: 'リアルタイム音声エージェント', zh: '实时语音智能体', es: 'Agentes de voz en tiempo real', pt: 'Agentes de voz em tempo real', ar: 'وكلاء صوتيون في الوقت الفعلي', ko: '실시간 음성 에이전트' },
  'music-audio': { en: 'Music & audio', de: 'Musik & Audio', fr: 'Musique et audio', ja: '音楽＆オーディオ', zh: '音乐与音频', es: 'Música y audio', pt: 'Música e áudio', ar: 'الموسيقى والصوت', ko: '음악 및 오디오' },
  'image-generation': { en: 'Image generation', de: 'Bildgenerierung', fr: "Génération d'images", ja: '画像生成', zh: '图像生成', es: 'Generación de imágenes', pt: 'Geração de imagens', ar: 'توليد الصور', ko: '이미지 생성' },
  'editing-upscaling': { en: 'Editing & upscaling', de: 'Bearbeitung & Hochskalierung', fr: 'Retouche et suréchantillonnage', ja: '編集＆アップスケーリング', zh: '编辑与放大', es: 'Edición y escalado', pt: 'Edição e upscaling', ar: 'التحرير وتحسين الدقة', ko: '편집 및 업스케일링' },
  'vision-ocr': { en: 'Vision & OCR', de: 'Bildverstehen & OCR', fr: 'Vision et OCR', ja: 'ビジョン＆OCR', zh: '视觉与 OCR', es: 'Visión y OCR', pt: 'Visão e OCR', ar: 'الرؤية الحاسوبية والتعرف الضوئي (OCR)', ko: '비전 및 OCR' },
  'video-generation': { en: 'Video generation', de: 'Videogenerierung', fr: 'Génération de vidéos', ja: '動画生成', zh: '视频生成', es: 'Generación de vídeo', pt: 'Geração de vídeo', ar: 'توليد الفيديو', ko: '영상 생성' },
  'avatars-3d': { en: 'Avatars & 3D', de: 'Avatare & 3D', fr: 'Avatars et 3D', ja: 'アバター＆3D', zh: '头像与 3D', es: 'Avatares y 3D', pt: 'Avatares e 3D', ar: 'الصور الرمزية والنماذج ثلاثية الأبعاد', ko: '아바타 및 3D' },
  'fine-tuning-lora': { en: 'Fine-tuning & LoRA', de: 'Fine-Tuning & LoRA', fr: 'Fine-tuning et LoRA', ja: 'ファインチューニング＆LoRA', zh: '微调与 LoRA', es: 'Ajuste fino y LoRA', pt: 'Ajuste fino e LoRA', ar: 'الضبط الدقيق و LoRA', ko: '파인튜닝 및 LoRA' },
  'datasets-synthetic-data': { en: 'Datasets & synthetic data', de: 'Datensätze & synthetische Daten', fr: 'Jeux de données et données synthétiques', ja: 'データセット＆合成データ', zh: '数据集与合成数据', es: 'Conjuntos de datos y datos sintéticos', pt: 'Conjuntos de dados e dados sintéticos', ar: 'مجموعات البيانات والبيانات الاصطناعية', ko: '데이터셋 및 합성 데이터' },
  'evaluation-benchmarking': { en: 'Evaluation & benchmarking', de: 'Evaluierung & Benchmarking', fr: 'Évaluation et benchmarking', ja: '評価＆ベンチマーク', zh: '评估与基准测试', es: 'Evaluación y benchmarking', pt: 'Avaliação e benchmarking', ar: 'التقييم والمقارنة المعيارية', ko: '평가 및 벤치마킹' },
  observability: { en: 'Observability', de: 'Observability', fr: 'Observabilité', ja: 'オブザーバビリティ', zh: '可观测性', es: 'Observabilidad', pt: 'Observabilidade', ar: 'قابلية الملاحظة', ko: '옵저버빌리티' },
  'model-hubs': { en: 'Model hubs', de: 'Modell-Hubs', fr: 'Hubs de modèles', ja: 'モデルハブ', zh: '模型枢纽', es: 'Repositorios de modelos', pt: 'Repositórios de modelos', ar: 'مراكز النماذج', ko: '모델 허브' },
}

/** Which top-level group each subcategory belongs to — drives per-group accent colour and grouped filter UI. */
export const CATEGORY_SUB_GROUP: Record<CategorySubKey, CategoryGroupKey> = {
  'inference-engines': 'run-serve',
  'runtimes-managers': 'run-serve',
  'api-servers': 'run-serve',
  'routers-gateways': 'run-serve',
  'quantization-conversion': 'run-serve',
  'general-chat-clients': 'chat-assistants',
  'roleplay-companions': 'chat-assistants',
  'personal-assistants': 'chat-assistants',
  'code-assistants-ide-plugins': 'code-development',
  'agent-frameworks': 'code-development',
  'autonomous-agents': 'code-development',
  'sdks-libraries': 'code-development',
  'workflow-node-builders': 'code-development',
  'prompt-tooling-evals': 'code-development',
  'rag-frameworks': 'knowledge-retrieval',
  'document-pdf-chat': 'knowledge-retrieval',
  'vector-databases': 'knowledge-retrieval',
  'notes-integrations': 'knowledge-retrieval',
  'embeddings-indexing': 'knowledge-retrieval',
  'local-search': 'knowledge-retrieval',
  'speech-to-text': 'voice-audio',
  'text-to-speech': 'voice-audio',
  'voice-cloning': 'voice-audio',
  'realtime-voice-agents': 'voice-audio',
  'music-audio': 'voice-audio',
  'image-generation': 'images-video',
  'editing-upscaling': 'images-video',
  'vision-ocr': 'images-video',
  'video-generation': 'images-video',
  'avatars-3d': 'images-video',
  'fine-tuning-lora': 'train-operate',
  'datasets-synthetic-data': 'train-operate',
  'evaluation-benchmarking': 'train-operate',
  observability: 'train-operate',
  'model-hubs': 'train-operate',
}

export const CATEGORY_GROUPS: { key: CategoryGroupKey; subs: CategorySubKey[] }[] = [
  { key: 'run-serve', subs: ['inference-engines', 'runtimes-managers', 'api-servers', 'routers-gateways', 'quantization-conversion'] },
  { key: 'chat-assistants', subs: ['general-chat-clients', 'roleplay-companions', 'personal-assistants'] },
  { key: 'code-development', subs: ['code-assistants-ide-plugins', 'agent-frameworks', 'autonomous-agents', 'sdks-libraries', 'workflow-node-builders', 'prompt-tooling-evals'] },
  { key: 'knowledge-retrieval', subs: ['rag-frameworks', 'document-pdf-chat', 'vector-databases', 'notes-integrations', 'embeddings-indexing', 'local-search'] },
  { key: 'voice-audio', subs: ['speech-to-text', 'text-to-speech', 'voice-cloning', 'realtime-voice-agents', 'music-audio'] },
  { key: 'images-video', subs: ['image-generation', 'editing-upscaling', 'vision-ocr', 'video-generation', 'avatars-3d'] },
  { key: 'train-operate', subs: ['fine-tuning-lora', 'datasets-synthetic-data', 'evaluation-benchmarking', 'observability', 'model-hubs'] },
]

export const INTERFACE_LABEL: Record<InterfaceKey, Record<Language, string>> = {
  desktop: { en: 'Desktop app', de: 'Desktop-App', fr: 'Application de bureau', ja: 'デスクトップアプリ', zh: '桌面应用', es: 'Aplicación de escritorio', pt: 'Aplicativo de desktop', ar: 'تطبيق سطح المكتب', ko: '데스크톱 앱' },
  web: { en: 'Web app', de: 'Web-App', fr: 'Application web', ja: 'Webアプリ', zh: '网页应用', es: 'Aplicación web', pt: 'Aplicativo web', ar: 'تطبيق ويب', ko: '웹 앱' },
  cli: { en: 'Command line', de: 'Kommandozeile', fr: 'Ligne de commande', ja: 'コマンドライン', zh: '命令行', es: 'Línea de comandos', pt: 'Linha de comando', ar: 'سطر الأوامر', ko: '명령줄' },
  plugin: { en: 'Editor / notes plugin', de: 'Editor-/Notiz-Plugin', fr: 'Plugin éditeur / notes', ja: 'エディタ／メモアプリのプラグイン', zh: '编辑器／笔记插件', es: 'Plugin de editor o notas', pt: 'Plugin de editor/notas', ar: 'إضافة محرر / ملاحظات', ko: '에디터/메모 플러그인' },
  mobile: { en: 'Mobile app', de: 'Mobile App', fr: 'Application mobile', ja: 'モバイルアプリ', zh: '移动应用', es: 'Aplicación móvil', pt: 'Aplicativo móvel', ar: 'تطبيق جوال', ko: '모바일 앱' },
  library: { en: 'Library / SDK', de: 'Bibliothek / SDK', fr: 'Bibliothèque / SDK', ja: 'ライブラリ／SDK', zh: '库／SDK', es: 'Biblioteca / SDK', pt: 'Biblioteca / SDK', ar: 'مكتبة / SDK', ko: '라이브러리/SDK' },
}
