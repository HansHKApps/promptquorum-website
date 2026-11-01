import type { Language } from '@/lib/blog/blogContent'

// Power Local LLM — Local AI App Directory taxonomy (v2, 2026-11-01).
//
// Two orthogonal facets describe every tool:
//
//   `category`   — WHAT the tool does. Multi-assign, hierarchical: 14 groups (the stable public
//                   surface) and 93 categories underneath. First entry in a tool's `categories[]` is its
//                   primary category (used for counts); the rest are secondary tags.
//   `interface`  — HOW you use the tool (desktop / web / CLI / plugin / mobile / library).
//
// Rules (owner decisions, taxonomy v2):
//   - EVERY category is listed in the overview even when no tool is in it yet. Empty is fine; never hide a
//     category for having no tools and never require a minimum app count.
//   - Keys are stable URL/ID slugs decoupled from labels: re-label freely, but never rename a key that has tools
//     or inbound links. Comparison segments (compare-schema.ts) reference category keys, not group keys.
//   - Growth = new categories inside a group (append to CATEGORY_GROUPS) and new tools; never a new level.
//     Split an over-full category with a facet (platform, interface, locality, …), not with a new category.
//   - API serving is NOT a category: it is the `ToolRecord.exposesApi` facet, because it is a capability of
//     inference engines, runtimes and chat apps rather than a kind of product.
//
// This file is the single source of truth for the enums and their display labels — component code imports from
// here rather than hardcoding category/interface strings.

export type CategoryGroupKey =
  | 'run-serve'
  | 'chat-assistants'
  | 'agents-automation'
  | 'code-development'
  | 'documents-research'
  | 'knowledge-retrieval'
  | 'voice-audio'
  | 'images-video'
  | 'photos-cameras-home'
  | 'train-operate'
  | 'llmops-security'
  | 'hardware-edge'
  | 'industry-domain'
  | 'at-the-edge'

export type CategorySubKey =
  // Run & Serve
  | 'inference-engines'
  | 'runtimes-managers'
  | 'routers-gateways'
  | 'quantization-conversion'
  | 'model-hubs'
  | 'one-click-installers'
  | 'distributed-inference'
  | 'in-browser-webgpu'
  // Chat & Assistants
  | 'general-chat-clients'
  | 'personal-assistants'
  | 'roleplay-companions'
  | 'chat-app-bots'
  | 'hotkey-menubar-assistants'
  | 'browser-sidebars'
  | 'terminal-chat-clients'
  | 'tutors-learning'
  // Agents & Automation
  | 'agent-frameworks'
  | 'autonomous-agents'
  | 'workflow-node-builders'
  | 'computer-browser-agents'
  | 'agent-memory'
  | 'mcp-servers-skills'
  | 'multi-agent-orchestration'
  | 'web-scraping-for-ai'
  // Code & Development
  | 'code-assistants-ide-plugins'
  | 'sdks-libraries'
  | 'ai-code-editors'
  | 'terminal-coding-agents'
  | 'code-review'
  | 'prompt-to-app-builders'
  | 'dev-tools-testing-docs'
  // Documents & Research
  | 'document-pdf-chat'
  | 'contract-review'
  | 'notes-integrations'
  | 'search-deep-research'
  | 'translation'
  | 'writing-email'
  | 'ocr-document-parsing'
  | 'chat-with-data'
  | 'summarizers'
  | 'presentation-generation'
  // Knowledge & Retrieval
  | 'rag-frameworks'
  | 'vector-databases'
  | 'embeddings-indexing'
  | 'local-search'
  | 'knowledge-graphs'
  // Voice & Audio
  | 'speech-to-text'
  | 'text-to-speech'
  | 'voice-cloning'
  | 'realtime-voice-agents'
  | 'music-audio'
  | 'dictation'
  | 'meeting-notes'
  | 'voice-assistants'
  | 'stem-separation-cleanup'
  // Images & Video
  | 'image-generation'
  | 'editing-upscaling'
  | 'vision-ocr'
  | 'video-generation'
  | 'avatars-lipsync'
  | '3d-generation'
  | 'subtitles-dubbing'
  | 'video-editing'
  | 'creative-app-plugins'
  // Photos, Cameras & Home
  | 'photo-libraries'
  | 'security-cameras-nvr'
  | 'smart-home-ai'
  // Train & Customize
  | 'fine-tuning-lora'
  | 'datasets-synthetic-data'
  | 'lora-image-training'
  | 'data-labeling'
  | 'training-frameworks'
  // LLMOps & Security
  | 'evaluation-benchmarking'
  | 'observability'
  | 'prompt-tooling-evals'
  | 'guardrails'
  | 'privacy-pii'
  | 'sandboxing'
  // Hardware & Edge
  | 'edge-embedded'
  | 'gpu-monitoring'
  | 'kubernetes-cloud-native'
  | 'robotics-embodied'
  | 'workstation-appliance-software'
  // Industry & Domain
  | 'health-wellness'
  | 'education'
  | 'legal-compliance'
  | 'finance'
  | 'science-research'
  | 'gaming-npcs'
  | 'accessibility'
  | 'enterprise-compliance'
  // At the Edge
  | 'emerging-protocols'
  | 'experimental-concepts'

export type InterfaceKey = 'desktop' | 'web' | 'cli' | 'plugin' | 'mobile' | 'library'

/** Group labels in all 9 languages. Single source for the directory, the comparison UI and the homepage chips. */
export const CATEGORY_GROUP_LABEL_I18N: Record<CategoryGroupKey, Record<Language, string>> = {
  'run-serve': { en: 'Run & Serve', de: 'Ausführen & Bereitstellen', fr: 'Exécution & serveur', ja: '実行・サーバー', zh: '运行与服务', es: 'Ejecutar y servir', pt: 'Executar e servir', ar: 'التشغيل والخدمة', ko: '실행·서빙' },
  'chat-assistants': { en: 'Chat & Assistants', de: 'Chat & Assistenten', fr: 'Chat & assistants', ja: 'チャット＆アシスタント', zh: '聊天与助手', es: 'Chat y asistentes', pt: 'Chat e assistentes', ar: 'الدردشة والمساعدون', ko: '채팅·어시스턴트' },
  'agents-automation': { en: 'Agents & Automation', de: 'Agenten & Automatisierung', fr: 'Agents & automatisation', ja: 'エージェント＆自動化', zh: '智能体与自动化', es: 'Agentes y automatización', pt: 'Agentes e automação', ar: 'الوكلاء والأتمتة', ko: '에이전트·자동화' },
  'code-development': { en: 'Code & Development', de: 'Code & Entwicklung', fr: 'Code & développement', ja: 'コード＆開発', zh: '代码与开发', es: 'Código y desarrollo', pt: 'Código e desenvolvimento', ar: 'البرمجة والتطوير', ko: '코드·개발' },
  'documents-research': { en: 'Documents & Research', de: 'Dokumente & Recherche', fr: 'Documents & recherche', ja: 'ドキュメント＆リサーチ', zh: '文档与研究', es: 'Documentos e investigación', pt: 'Documentos e pesquisa', ar: 'المستندات والبحث', ko: '문서·리서치' },
  'knowledge-retrieval': { en: 'Knowledge & Retrieval', de: 'Wissen & Retrieval', fr: 'Connaissances & recherche', ja: 'ナレッジ＆検索', zh: '知识与检索', es: 'Conocimiento y recuperación', pt: 'Conhecimento e recuperação', ar: 'المعرفة والاسترجاع', ko: '지식·검색' },
  'voice-audio': { en: 'Voice & Audio', de: 'Sprache & Audio', fr: 'Voix & audio', ja: '音声＆オーディオ', zh: '语音与音频', es: 'Voz y audio', pt: 'Voz e áudio', ar: 'الصوت والكلام', ko: '음성·오디오' },
  'images-video': { en: 'Images & Video', de: 'Bilder & Video', fr: 'Images & vidéo', ja: '画像＆動画', zh: '图像与视频', es: 'Imágenes y vídeo', pt: 'Imagens e vídeo', ar: 'الصور والفيديو', ko: '이미지·영상' },
  'photos-cameras-home': { en: 'Photos, Cameras & Home', de: 'Fotos, Kameras & Zuhause', fr: 'Photos, caméras & maison', ja: '写真・カメラ・ホーム', zh: '照片、摄像头与家居', es: 'Fotos, cámaras y hogar', pt: 'Fotos, câmeras e casa', ar: 'الصور والكاميرات والمنزل', ko: '사진·카메라·홈' },
  'train-operate': { en: 'Train & Customize', de: 'Training & Anpassung', fr: 'Entraînement & personnalisation', ja: 'トレーニング＆カスタマイズ', zh: '训练与定制', es: 'Entrenamiento y personalización', pt: 'Treinamento e personalização', ar: 'التدريب والتخصيص', ko: '학습·커스터마이징' },
  'llmops-security': { en: 'LLMOps & Security', de: 'LLMOps & Sicherheit', fr: 'LLMOps & sécurité', ja: 'LLMOps＆セキュリティ', zh: 'LLMOps 与安全', es: 'LLMOps y seguridad', pt: 'LLMOps e segurança', ar: 'LLMOps والأمان', ko: 'LLMOps·보안' },
  'hardware-edge': { en: 'Hardware & Edge', de: 'Hardware & Edge', fr: 'Matériel & edge', ja: 'ハードウェア＆エッジ', zh: '硬件与边缘', es: 'Hardware y edge', pt: 'Hardware e edge', ar: 'العتاد والحافة', ko: '하드웨어·엣지' },
  'industry-domain': { en: 'Industry & Domain', de: 'Branchen & Fachbereiche', fr: 'Secteurs & domaines', ja: '業界＆専門分野', zh: '行业与专业领域', es: 'Sectores y ámbitos', pt: 'Setores e áreas especializadas', ar: 'الصناعات والمجالات المتخصصة', ko: '산업·전문 분야' },
  'at-the-edge': { en: 'At the Edge', de: 'An der Grenze', fr: 'À la pointe', ja: '最前線', zh: '前沿探索', es: 'En la frontera', pt: 'Na fronteira', ar: 'على الحافة', ko: '최전선' },
}

export const CATEGORY_GROUP_LABEL: Record<CategoryGroupKey, string> = {
  'run-serve': 'Run & Serve',
  'chat-assistants': 'Chat & Assistants',
  'agents-automation': 'Agents & Automation',
  'code-development': 'Code & Development',
  'documents-research': 'Documents & Research',
  'knowledge-retrieval': 'Knowledge & Retrieval',
  'voice-audio': 'Voice & Audio',
  'images-video': 'Images & Video',
  'photos-cameras-home': 'Photos, Cameras & Home',
  'train-operate': 'Train & Customize',
  'llmops-security': 'LLMOps & Security',
  'hardware-edge': 'Hardware & Edge',
  'industry-domain': 'Industry & Domain',
  'at-the-edge': 'At the Edge',
}

export const TOTAL_CATEGORY_GROUP_COUNT = Object.keys(CATEGORY_GROUP_LABEL).length

export const CATEGORY_SUB_LABEL: Record<CategorySubKey, Record<Language, string>> = {
  'inference-engines': { en: 'Inference engines', de: 'Inferenz-Engines', fr: "Moteurs d'inférence", ja: '推論エンジン', zh: '推理引擎', es: 'Motores de inferencia', pt: 'Motores de inferência', ar: 'محركات الاستدلال', ko: '추론 엔진' },
  'runtimes-managers': { en: 'Runtimes & model managers', de: 'Laufzeitumgebungen & Modell-Manager', fr: 'Runtimes et gestionnaires de modèles', ja: 'ランタイム＆モデル管理', zh: '运行时与模型管理器', es: 'Entornos de ejecución y gestores de modelos', pt: 'Ambientes de execução e gerenciadores de modelos', ar: 'بيئات التشغيل ومديرو النماذج', ko: '런타임 및 모델 관리자' },
  'routers-gateways': { en: 'Routers & gateways', de: 'Router & Gateways', fr: 'Routeurs et passerelles', ja: 'ルーター＆ゲートウェイ', zh: '路由器与网关', es: 'Enrutadores y pasarelas', pt: 'Roteadores e gateways', ar: 'أجهزة التوجيه والبوابات', ko: '라우터 및 게이트웨이' },
  'quantization-conversion': { en: 'Quantization & conversion', de: 'Quantisierung & Konvertierung', fr: 'Quantification et conversion', ja: '量子化＆変換', zh: '量化与转换', es: 'Cuantización y conversión', pt: 'Quantização e conversão', ar: 'التكميم والتحويل', ko: '양자화 및 변환' },
  'model-hubs': { en: 'Model hubs', de: 'Modell-Hubs', fr: 'Hubs de modèles', ja: 'モデルハブ', zh: '模型枢纽', es: 'Repositorios de modelos', pt: 'Repositórios de modelos', ar: 'مراكز النماذج', ko: '모델 허브' },
  'one-click-installers': { en: 'One-click installers', de: 'Ein-Klick-Installer', fr: 'Installeurs en un clic', ja: 'ワンクリックインストーラー', zh: '一键安装器', es: 'Instaladores con un clic', pt: 'Instaladores de um clique', ar: 'مثبّتات بنقرة واحدة', ko: '원클릭 설치 프로그램' },
  'distributed-inference': { en: 'Distributed inference & clusters', de: 'Verteilte Inferenz & Cluster', fr: 'Inférence distribuée et clusters', ja: '分散推論＆クラスター', zh: '分布式推理与集群', es: 'Inferencia distribuida y clústeres', pt: 'Inferência distribuída e clusters', ar: 'الاستدلال الموزّع والعناقيد', ko: '분산 추론 및 클러스터' },
  'in-browser-webgpu': { en: 'In-browser & WebGPU runtimes', de: 'Browser- & WebGPU-Laufzeiten', fr: 'Runtimes navigateur et WebGPU', ja: 'ブラウザ内＆WebGPUランタイム', zh: '浏览器内与 WebGPU 运行时', es: 'Entornos de ejecución en navegador y WebGPU', pt: 'Ambientes de execução no navegador e WebGPU', ar: 'بيئات التشغيل داخل المتصفح وWebGPU', ko: '브라우저 내 및 WebGPU 런타임' },
  'general-chat-clients': { en: 'General chat clients', de: 'Allgemeine Chat-Clients', fr: 'Clients de chat généraux', ja: '汎用チャットクライアント', zh: '通用聊天客户端', es: 'Clientes de chat generales', pt: 'Clientes de chat gerais', ar: 'عملاء الدردشة العامة', ko: '범용 채팅 클라이언트' },
  'personal-assistants': { en: 'Personal assistants', de: 'Persönliche Assistenten', fr: 'Assistants personnels', ja: 'パーソナルアシスタント', zh: '个人助理', es: 'Asistentes personales', pt: 'Assistentes pessoais', ar: 'المساعدون الشخصيون', ko: '개인 비서' },
  'roleplay-companions': { en: 'Roleplay & companions', de: 'Rollenspiel & Begleiter', fr: 'Jeu de rôle et compagnons', ja: 'ロールプレイ＆コンパニオン', zh: '角色扮演与陪伴', es: 'Rol y compañeros virtuales', pt: 'Interpretação de papéis e companheiros', ar: 'لعب الأدوار والرفقاء الافتراضيون', ko: '롤플레이 및 컴패니언' },
  'chat-app-bots': { en: 'Chat-app bots', de: 'Chat-App-Bots', fr: 'Bots pour messageries', ja: 'チャットアプリボット', zh: '聊天应用机器人', es: 'Bots para apps de mensajería', pt: 'Bots para apps de mensagens', ar: 'روبوتات تطبيقات المراسلة', ko: '메신저 앱 봇' },
  'hotkey-menubar-assistants': { en: 'Hotkey & menu-bar assistants', de: 'Hotkey- & Menüleisten-Assistenten', fr: 'Assistants par raccourci et barre de menus', ja: 'ホットキー＆メニューバーアシスタント', zh: '快捷键与菜单栏助手', es: 'Asistentes con atajo y barra de menús', pt: 'Assistentes por atalho e barra de menus', ar: 'المساعدون عبر الاختصارات وشريط القوائم', ko: '단축키 및 메뉴 막대 어시스턴트' },
  'browser-sidebars': { en: 'Browser sidebars & AI browsers', de: 'Browser-Seitenleisten & KI-Browser', fr: 'Barres latérales de navigateur et navigateurs IA', ja: 'ブラウザサイドバー＆AIブラウザ', zh: '浏览器侧边栏与 AI 浏览器', es: 'Barras laterales de navegador y navegadores con IA', pt: 'Barras laterais de navegador e navegadores com IA', ar: 'الأشرطة الجانبية للمتصفح ومتصفحات الذكاء الاصطناعي', ko: '브라우저 사이드바 및 AI 브라우저' },
  'terminal-chat-clients': { en: 'Terminal chat clients', de: 'Terminal-Chat-Clients', fr: 'Clients de chat en terminal', ja: 'ターミナルチャットクライアント', zh: '终端聊天客户端', es: 'Clientes de chat en terminal', pt: 'Clientes de chat no terminal', ar: 'عملاء الدردشة عبر الطرفية', ko: '터미널 채팅 클라이언트' },
  'tutors-learning': { en: 'Tutors & learning companions', de: 'Tutoren & Lernbegleiter', fr: "Tuteurs et compagnons d'apprentissage", ja: 'チューター＆学習パートナー', zh: '辅导与学习伙伴', es: 'Tutores y compañeros de aprendizaje', pt: 'Tutores e companheiros de aprendizagem', ar: 'المعلّمون الذكيون ورفقاء التعلّم', ko: '튜터 및 학습 도우미' },
  'agent-frameworks': { en: 'Agent frameworks', de: 'Agenten-Frameworks', fr: "Frameworks d'agents", ja: 'エージェントフレームワーク', zh: '智能体框架', es: 'Frameworks de agentes', pt: 'Frameworks de agentes', ar: 'أطر عمل الوكلاء', ko: '에이전트 프레임워크' },
  'autonomous-agents': { en: 'Autonomous agents', de: 'Autonome Agenten', fr: 'Agents autonomes', ja: '自律型エージェント', zh: '自主智能体', es: 'Agentes autónomos', pt: 'Agentes autônomos', ar: 'الوكلاء المستقلون', ko: '자율 에이전트' },
  'workflow-node-builders': { en: 'Workflow & node builders', de: 'Workflow- & Node-Builder', fr: 'Générateurs de workflows et de nœuds', ja: 'ワークフロー＆ノードビルダー', zh: '工作流与节点构建工具', es: 'Constructores de flujos de trabajo y nodos', pt: 'Construtores de fluxos de trabalho e nós', ar: 'أدوات بناء سير العمل والعقد', ko: '워크플로 및 노드 빌더' },
  'computer-browser-agents': { en: 'Computer & browser agents', de: 'Computer- & Browser-Agenten', fr: "Agents d'ordinateur et de navigateur", ja: 'コンピューター＆ブラウザエージェント', zh: '电脑与浏览器智能体', es: 'Agentes de PC y de navegador', pt: 'Agentes de computador e navegador', ar: 'وكلاء الحاسوب والمتصفح', ko: '컴퓨터 및 브라우저 에이전트' },
  'agent-memory': { en: 'Agent memory', de: 'Agenten-Gedächtnis', fr: "Mémoire d'agents", ja: 'エージェントメモリ', zh: '智能体记忆', es: 'Memoria de agentes', pt: 'Memória de agentes', ar: 'ذاكرة الوكلاء', ko: '에이전트 메모리' },
  'mcp-servers-skills': { en: 'MCP servers & skills', de: 'MCP-Server & Skills', fr: 'Serveurs MCP et skills', ja: 'MCPサーバー＆スキル', zh: 'MCP 服务器与技能', es: 'Servidores MCP y skills', pt: 'Servidores MCP e skills', ar: 'خوادم MCP والمهارات', ko: 'MCP 서버 및 스킬' },
  'multi-agent-orchestration': { en: 'Multi-agent orchestration', de: 'Multi-Agenten-Orchestrierung', fr: 'Orchestration multi-agents', ja: 'マルチエージェントオーケストレーション', zh: '多智能体编排', es: 'Orquestación multiagente', pt: 'Orquestração multiagente', ar: 'تنسيق الوكلاء المتعددين', ko: '멀티 에이전트 오케스트레이션' },
  'web-scraping-for-ai': { en: 'Web scraping for AI', de: 'Web-Scraping für KI', fr: "Web scraping pour l'IA", ja: 'AI向けWebスクレイピング', zh: '面向 AI 的网页抓取', es: 'Web scraping para IA', pt: 'Web scraping para IA', ar: 'استخراج بيانات الويب للذكاء الاصطناعي', ko: 'AI용 웹 스크레이핑' },
  'code-assistants-ide-plugins': { en: 'Code assistants & IDE plugins', de: 'Code-Assistenten & IDE-Plugins', fr: 'Assistants de code et plugins IDE', ja: 'コードアシスタント＆IDEプラグイン', zh: '代码助手与 IDE 插件', es: 'Asistentes de código y plugins de IDE', pt: 'Assistentes de código e plugins de IDE', ar: 'مساعدو الكود وإضافات IDE', ko: '코드 어시스턴트 및 IDE 플러그인' },
  'sdks-libraries': { en: 'SDKs & libraries', de: 'SDKs & Bibliotheken', fr: 'SDK et bibliothèques', ja: 'SDK＆ライブラリ', zh: 'SDK 与库', es: 'SDKs y bibliotecas', pt: 'SDKs e bibliotecas', ar: 'حزم SDK والمكتبات', ko: 'SDK 및 라이브러리' },
  'ai-code-editors': { en: 'AI code editors', de: 'KI-Code-Editoren', fr: 'Éditeurs de code IA', ja: 'AIコードエディタ', zh: 'AI 代码编辑器', es: 'Editores de código con IA', pt: 'Editores de código com IA', ar: 'محررات الكود بالذكاء الاصطناعي', ko: 'AI 코드 에디터' },
  'terminal-coding-agents': { en: 'Terminal coding agents', de: 'Terminal-Coding-Agenten', fr: 'Agents de code en terminal', ja: 'ターミナルコーディングエージェント', zh: '终端编程智能体', es: 'Agentes de programación en terminal', pt: 'Agentes de programação no terminal', ar: 'وكلاء البرمجة عبر الطرفية', ko: '터미널 코딩 에이전트' },
  'code-review': { en: 'AI code review', de: 'KI-Code-Review', fr: 'Revue de code IA', ja: 'AIコードレビュー', zh: 'AI 代码审查', es: 'Revisión de código con IA', pt: 'Revisão de código com IA', ar: 'مراجعة الكود بالذكاء الاصطناعي', ko: 'AI 코드 리뷰' },
  'prompt-to-app-builders': { en: 'Prompt-to-app builders', de: 'Prompt-zu-App-Builder', fr: "Créateurs d'apps par prompt", ja: 'プロンプトからのアプリ生成', zh: '提示词生成应用工具', es: 'Creadores de apps a partir de prompts', pt: 'Criadores de apps a partir de prompts', ar: 'منشئو التطبيقات من البرومبت', ko: '프롬프트 기반 앱 빌더' },
  'dev-tools-testing-docs': { en: 'Testing, docs & commit tools', de: 'Test-, Doku- & Commit-Tools', fr: 'Outils de test, docs et commits', ja: 'テスト・ドキュメント・コミットツール', zh: '测试、文档与提交工具', es: 'Herramientas de pruebas, docs y commits', pt: 'Ferramentas de testes, docs e commits', ar: 'أدوات الاختبار والتوثيق ورسائل commit', ko: '테스트, 문서 및 커밋 도구' },
  'document-pdf-chat': { en: 'Document & PDF chat', de: 'Dokument- & PDF-Chat', fr: 'Chat de documents et PDF', ja: 'ドキュメント＆PDFチャット', zh: '文档与 PDF 对话', es: 'Chat de documentos y PDF', pt: 'Chat de documentos e PDF', ar: 'الدردشة مع المستندات وملفات PDF', ko: '문서 및 PDF 채팅' },
  'contract-review': { en: 'Contract review', de: 'Vertragsprüfung', fr: 'Revue de contrats', ja: '契約書レビュー', zh: '合同审查', es: 'Revisión de contratos', pt: 'Revisão de contratos', ar: 'مراجعة العقود', ko: '계약서 검토' },
  'notes-integrations': { en: 'Notes & knowledge bases', de: 'Notizen & Wissensdatenbanken', fr: 'Notes et bases de connaissances', ja: 'メモ＆ナレッジベース', zh: '笔记与知识库', es: 'Notas y bases de conocimiento', pt: 'Notas e bases de conhecimento', ar: 'الملاحظات وقواعد المعرفة', ko: '노트 및 지식 베이스' },
  'search-deep-research': { en: 'AI search & deep research', de: 'KI-Suche & Deep Research', fr: 'Recherche IA et recherche approfondie', ja: 'AI検索＆ディープリサーチ', zh: 'AI 搜索与深度研究', es: 'Búsqueda con IA e investigación profunda', pt: 'Busca com IA e pesquisa aprofundada', ar: 'البحث بالذكاء الاصطناعي والبحث المعمّق', ko: 'AI 검색 및 딥 리서치' },
  translation: { en: 'Translation', de: 'Übersetzung', fr: 'Traduction', ja: '翻訳', zh: '翻译', es: 'Traducción', pt: 'Tradução', ar: 'الترجمة', ko: '번역' },
  'writing-email': { en: 'Writing & email assistants', de: 'Schreib- & E-Mail-Assistenten', fr: "Assistants d'écriture et d'e-mail", ja: '文章作成＆メールアシスタント', zh: '写作与邮件助手', es: 'Asistentes de escritura y correo', pt: 'Assistentes de escrita e e-mail', ar: 'مساعدو الكتابة والبريد الإلكتروني', ko: '글쓰기 및 이메일 어시스턴트' },
  'ocr-document-parsing': { en: 'OCR & document parsing', de: 'OCR & Dokumentenanalyse', fr: 'OCR et analyse de documents', ja: 'OCR＆ドキュメント解析', zh: 'OCR 与文档解析', es: 'OCR y análisis de documentos', pt: 'OCR e análise de documentos', ar: 'OCR وتحليل المستندات', ko: 'OCR 및 문서 파싱' },
  'chat-with-data': { en: 'Chat with spreadsheets & databases', de: 'Chat mit Tabellen & Datenbanken', fr: 'Chat avec tableurs et bases de données', ja: '表計算＆データベースとチャット', zh: '与表格和数据库对话', es: 'Chat con hojas de cálculo y bases de datos', pt: 'Chat com planilhas e bancos de dados', ar: 'الدردشة مع الجداول وقواعد البيانات', ko: '스프레드시트 및 데이터베이스 채팅' },
  summarizers: { en: 'Summarizers', de: 'Zusammenfassungs-Tools', fr: 'Outils de résumé', ja: '要約ツール', zh: '摘要工具', es: 'Resumidores', pt: 'Resumidores', ar: 'أدوات التلخيص', ko: '요약 도구' },
  'presentation-generation': { en: 'Presentation generation', de: 'Präsentationserstellung', fr: 'Génération de présentations', ja: 'プレゼンテーション生成', zh: '演示文稿生成', es: 'Generación de presentaciones', pt: 'Geração de apresentações', ar: 'إنشاء العروض التقديمية', ko: '프레젠테이션 생성' },
  'rag-frameworks': { en: 'RAG frameworks', de: 'RAG-Frameworks', fr: 'Frameworks RAG', ja: 'RAGフレームワーク', zh: 'RAG 框架', es: 'Frameworks RAG', pt: 'Frameworks RAG', ar: 'أطر عمل RAG', ko: 'RAG 프레임워크' },
  'vector-databases': { en: 'Vector databases', de: 'Vektordatenbanken', fr: 'Bases de données vectorielles', ja: 'ベクトルデータベース', zh: '向量数据库', es: 'Bases de datos vectoriales', pt: 'Bancos de dados vetoriais', ar: 'قواعد البيانات المتجهة', ko: '벡터 데이터베이스' },
  'embeddings-indexing': { en: 'Embeddings & indexing', de: 'Embeddings & Indexierung', fr: 'Embeddings et indexation', ja: '埋め込み＆インデックス作成', zh: '嵌入与索引', es: 'Embeddings e indexación', pt: 'Embeddings e indexação', ar: 'التضمينات والفهرسة', ko: '임베딩 및 인덱싱' },
  'local-search': { en: 'Local & desktop search', de: 'Lokale & Desktop-Suche', fr: 'Recherche locale et sur le bureau', ja: 'ローカル＆デスクトップ検索', zh: '本地与桌面搜索', es: 'Búsqueda local y de escritorio', pt: 'Busca local e no desktop', ar: 'البحث المحلي وعلى سطح المكتب', ko: '로컬 및 데스크톱 검색' },
  'knowledge-graphs': { en: 'Knowledge graphs', de: 'Wissensgraphen', fr: 'Graphes de connaissances', ja: 'ナレッジグラフ', zh: '知识图谱', es: 'Grafos de conocimiento', pt: 'Grafos de conhecimento', ar: 'الرسوم البيانية المعرفية', ko: '지식 그래프' },
  'speech-to-text': { en: 'Speech-to-text', de: 'Sprache-zu-Text', fr: 'Reconnaissance vocale', ja: '音声認識', zh: '语音转文字', es: 'Voz a texto', pt: 'Voz para texto', ar: 'تحويل الكلام إلى نص', ko: '음성 인식' },
  'text-to-speech': { en: 'Text-to-speech', de: 'Text-zu-Sprache', fr: 'Synthèse vocale', ja: '音声合成', zh: '文字转语音', es: 'Texto a voz', pt: 'Texto para voz', ar: 'تحويل النص إلى كلام', ko: '텍스트 음성 변환' },
  'voice-cloning': { en: 'Voice cloning', de: 'Stimmenklonung', fr: 'Clonage vocal', ja: '音声クローニング', zh: '语音克隆', es: 'Clonación de voz', pt: 'Clonagem de voz', ar: 'استنساخ الصوت', ko: '음성 복제' },
  'realtime-voice-agents': { en: 'Real-time voice agents', de: 'Echtzeit-Sprachagenten', fr: 'Agents vocaux en temps réel', ja: 'リアルタイム音声エージェント', zh: '实时语音智能体', es: 'Agentes de voz en tiempo real', pt: 'Agentes de voz em tempo real', ar: 'وكلاء صوتيون في الوقت الفعلي', ko: '실시간 음성 에이전트' },
  'music-audio': { en: 'Music & audio', de: 'Musik & Audio', fr: 'Musique et audio', ja: '音楽＆オーディオ', zh: '音乐与音频', es: 'Música y audio', pt: 'Música e áudio', ar: 'الموسيقى والصوت', ko: '음악 및 오디오' },
  dictation: { en: 'Dictation & voice typing', de: 'Diktat & Spracheingabe', fr: 'Dictée et saisie vocale', ja: '音声入力＆ディクテーション', zh: '听写与语音输入', es: 'Dictado y escritura por voz', pt: 'Ditado e digitação por voz', ar: 'الإملاء والكتابة الصوتية', ko: '받아쓰기 및 음성 입력' },
  'meeting-notes': { en: 'Meeting notes & transcription', de: 'Meeting-Notizen & Transkription', fr: 'Comptes rendus de réunion et transcription', ja: '議事録＆文字起こし', zh: '会议纪要与转录', es: 'Notas de reuniones y transcripción', pt: 'Atas de reuniões e transcrição', ar: 'محاضر الاجتماعات والتفريغ النصي', ko: '회의록 및 전사' },
  'voice-assistants': { en: 'Voice assistants', de: 'Sprachassistenten', fr: 'Assistants vocaux', ja: '音声アシスタント', zh: '语音助手', es: 'Asistentes de voz', pt: 'Assistentes de voz', ar: 'المساعدون الصوتيون', ko: '음성 어시스턴트' },
  'stem-separation-cleanup': { en: 'Stem separation & audio cleanup', de: 'Stem-Trennung & Audiobereinigung', fr: 'Séparation de pistes et nettoyage audio', ja: 'ステム分離＆音声ノイズ除去', zh: '音轨分离与音频降噪', es: 'Separación de stems y limpieza de audio', pt: 'Separação de stems e limpeza de áudio', ar: 'فصل المسارات وتنقية الصوت', ko: '스템 분리 및 오디오 정리' },
  'image-generation': { en: 'Image generation', de: 'Bildgenerierung', fr: "Génération d'images", ja: '画像生成', zh: '图像生成', es: 'Generación de imágenes', pt: 'Geração de imagens', ar: 'توليد الصور', ko: '이미지 생성' },
  'editing-upscaling': { en: 'Photo editing & upscaling', de: 'Fotobearbeitung & Upscaling', fr: 'Retouche photo et upscaling', ja: '写真編集＆アップスケーリング', zh: '照片编辑与放大', es: 'Edición de fotos y escalado', pt: 'Edição de fotos e upscaling', ar: 'تحرير الصور ورفع الدقة', ko: '사진 편집 및 업스케일링' },
  'vision-ocr': { en: 'Vision & image understanding', de: 'Bildverständnis & Vision', fr: "Vision et compréhension d'images", ja: 'ビジョン＆画像理解', zh: '视觉与图像理解', es: 'Visión y comprensión de imágenes', pt: 'Visão e compreensão de imagens', ar: 'الرؤية وفهم الصور', ko: '비전 및 이미지 이해' },
  'video-generation': { en: 'Video generation', de: 'Videogenerierung', fr: 'Génération de vidéos', ja: '動画生成', zh: '视频生成', es: 'Generación de vídeo', pt: 'Geração de vídeo', ar: 'توليد الفيديو', ko: '영상 생성' },
  'avatars-lipsync': { en: 'Avatars & lip sync', de: 'Avatare & Lippensynchronisation', fr: 'Avatars et synchronisation labiale', ja: 'アバター＆リップシンク', zh: '虚拟形象与口型同步', es: 'Avatares y sincronización labial', pt: 'Avatares e sincronização labial', ar: 'الأفاتار ومزامنة الشفاه', ko: '아바타 및 립싱크' },
  '3d-generation': { en: '3D generation', de: '3D-Generierung', fr: 'Génération 3D', ja: '3D生成', zh: '3D 生成', es: 'Generación 3D', pt: 'Geração 3D', ar: 'توليد المجسمات ثلاثية الأبعاد', ko: '3D 생성' },
  'subtitles-dubbing': { en: 'Subtitles & dubbing', de: 'Untertitel & Synchronisation', fr: 'Sous-titres et doublage', ja: '字幕＆吹き替え', zh: '字幕与配音', es: 'Subtítulos y doblaje', pt: 'Legendas e dublagem', ar: 'الترجمة النصية والدبلجة', ko: '자막 및 더빙' },
  'video-editing': { en: 'Video editing & clipping', de: 'Videobearbeitung & Clipping', fr: 'Montage vidéo et extraits', ja: '動画編集＆クリップ作成', zh: '视频编辑与剪辑', es: 'Edición de vídeo y clips', pt: 'Edição de vídeo e cortes', ar: 'تحرير الفيديو وقص المقاطع', ko: '영상 편집 및 클립 제작' },
  'creative-app-plugins': { en: 'Plugins for creative apps', de: 'Plugins für Kreativ-Apps', fr: 'Plugins pour apps créatives', ja: 'クリエイティブアプリ向けプラグイン', zh: '创意应用插件', es: 'Plugins para apps creativas', pt: 'Plugins para apps criativos', ar: 'إضافات للتطبيقات الإبداعية', ko: '크리에이티브 앱 플러그인' },
  'photo-libraries': { en: 'Photo libraries & search', de: 'Fotobibliotheken & Suche', fr: 'Photothèques et recherche', ja: 'フォトライブラリ＆検索', zh: '相册库与搜索', es: 'Fototecas y búsqueda', pt: 'Bibliotecas de fotos e busca', ar: 'مكتبات الصور والبحث', ko: '사진 라이브러리 및 검색' },
  'security-cameras-nvr': { en: 'Security cameras & NVR', de: 'Überwachungskameras & NVR', fr: 'Caméras de sécurité et NVR', ja: '防犯カメラ＆NVR', zh: '监控摄像头与 NVR', es: 'Cámaras de seguridad y NVR', pt: 'Câmeras de segurança e NVR', ar: 'كاميرات المراقبة وNVR', ko: '보안 카메라 및 NVR' },
  'smart-home-ai': { en: 'Smart home AI', de: 'KI für Smart Home', fr: 'IA pour la maison connectée', ja: 'スマートホームAI', zh: '智能家居 AI', es: 'IA para el hogar inteligente', pt: 'IA para casa inteligente', ar: 'الذكاء الاصطناعي للمنزل الذكي', ko: '스마트홈 AI' },
  'fine-tuning-lora': { en: 'Fine-tuning & LoRA', de: 'Fine-Tuning & LoRA', fr: 'Fine-tuning et LoRA', ja: 'ファインチューニング＆LoRA', zh: '微调与 LoRA', es: 'Ajuste fino y LoRA', pt: 'Ajuste fino e LoRA', ar: 'الضبط الدقيق و LoRA', ko: '파인튜닝 및 LoRA' },
  'datasets-synthetic-data': { en: 'Datasets & synthetic data', de: 'Datensätze & synthetische Daten', fr: 'Jeux de données et données synthétiques', ja: 'データセット＆合成データ', zh: '数据集与合成数据', es: 'Conjuntos de datos y datos sintéticos', pt: 'Conjuntos de dados e dados sintéticos', ar: 'مجموعات البيانات والبيانات الاصطناعية', ko: '데이터셋 및 합성 데이터' },
  'lora-image-training': { en: 'LoRA & image-model training', de: 'LoRA- & Bildmodell-Training', fr: "Entraînement LoRA et modèles d'image", ja: 'LoRA＆画像モデルの学習', zh: 'LoRA 与图像模型训练', es: 'Entrenamiento de LoRA y modelos de imagen', pt: 'Treinamento de LoRA e modelos de imagem', ar: 'تدريب LoRA ونماذج الصور', ko: 'LoRA 및 이미지 모델 학습' },
  'data-labeling': { en: 'Data labeling & annotation', de: 'Datenlabeling & Annotation', fr: 'Étiquetage et annotation de données', ja: 'データラベリング＆アノテーション', zh: '数据标注与注释', es: 'Etiquetado y anotación de datos', pt: 'Rotulagem e anotação de dados', ar: 'تصنيف البيانات وتوصيفها', ko: '데이터 라벨링 및 주석' },
  'training-frameworks': { en: 'Training frameworks', de: 'Trainings-Frameworks', fr: "Frameworks d'entraînement", ja: 'トレーニングフレームワーク', zh: '训练框架', es: 'Frameworks de entrenamiento', pt: 'Frameworks de treinamento', ar: 'أطر عمل التدريب', ko: '학습 프레임워크' },
  'evaluation-benchmarking': { en: 'Evaluation & benchmarking', de: 'Evaluierung & Benchmarking', fr: 'Évaluation et benchmarking', ja: '評価＆ベンチマーク', zh: '评估与基准测试', es: 'Evaluación y benchmarking', pt: 'Avaliação e benchmarking', ar: 'التقييم والمقارنة المعيارية', ko: '평가 및 벤치마킹' },
  observability: { en: 'Observability', de: 'Observability', fr: 'Observabilité', ja: 'オブザーバビリティ', zh: '可观测性', es: 'Observabilidad', pt: 'Observabilidade', ar: 'قابلية الملاحظة', ko: '옵저버빌리티' },
  'prompt-tooling-evals': { en: 'Prompt management & tooling', de: 'Prompt-Verwaltung & Tools', fr: 'Gestion et outils de prompts', ja: 'プロンプト管理＆ツール', zh: '提示词管理与工具', es: 'Gestión y herramientas de prompts', pt: 'Gerenciamento e ferramentas de prompts', ar: 'إدارة البرومبت وأدواته', ko: '프롬프트 관리 및 도구' },
  guardrails: { en: 'Guardrails & safety', de: 'Guardrails & Sicherheit', fr: 'Garde-fous et sécurité', ja: 'ガードレール＆安全対策', zh: '护栏与安全', es: 'Guardrails y seguridad', pt: 'Guardrails e segurança', ar: 'حواجز الحماية والأمان', ko: '가드레일 및 안전' },
  'privacy-pii': { en: 'Privacy & PII redaction', de: 'Datenschutz & PII-Schwärzung', fr: 'Confidentialité et masquage des PII', ja: 'プライバシー＆PIIマスキング', zh: '隐私与 PII 脱敏', es: 'Privacidad y anonimización de PII', pt: 'Privacidade e ocultação de PII', ar: 'الخصوصية وإخفاء بيانات PII', ko: '개인정보 보호 및 PII 마스킹' },
  sandboxing: { en: 'Sandboxing & isolation', de: 'Sandboxing & Isolierung', fr: 'Sandboxing et isolation', ja: 'サンドボックス＆分離', zh: '沙箱与隔离', es: 'Sandboxing y aislamiento', pt: 'Sandboxing e isolamento', ar: 'بيئات Sandbox والعزل', ko: '샌드박싱 및 격리' },
  'edge-embedded': { en: 'Edge & embedded AI', de: 'Edge- & Embedded-KI', fr: 'IA en périphérie et embarquée', ja: 'エッジ＆組み込みAI', zh: '边缘与嵌入式 AI', es: 'IA en el borde y embebida', pt: 'IA de borda e embarcada', ar: 'الذكاء الاصطناعي على الحافة والمدمج', ko: '엣지 및 임베디드 AI' },
  'gpu-monitoring': { en: 'GPU management & monitoring', de: 'GPU-Verwaltung & -Monitoring', fr: 'Gestion et surveillance des GPU', ja: 'GPU管理＆モニタリング', zh: 'GPU 管理与监控', es: 'Gestión y monitorización de GPU', pt: 'Gerenciamento e monitoramento de GPU', ar: 'إدارة GPU ومراقبتها', ko: 'GPU 관리 및 모니터링' },
  'kubernetes-cloud-native': { en: 'Kubernetes & cloud-native AI', de: 'Kubernetes & Cloud-native-KI', fr: 'Kubernetes et IA cloud-native', ja: 'Kubernetes＆クラウドネイティブAI', zh: 'Kubernetes 与云原生 AI', es: 'Kubernetes e IA cloud-native', pt: 'Kubernetes e IA cloud-native', ar: 'Kubernetes والذكاء الاصطناعي السحابي الأصلي', ko: 'Kubernetes 및 클라우드 네이티브 AI' },
  'robotics-embodied': { en: 'Robotics & embodied AI', de: 'Robotik & Embodied AI', fr: 'Robotique et IA incarnée', ja: 'ロボティクス＆身体性AI', zh: '机器人与具身智能', es: 'Robótica e IA encarnada', pt: 'Robótica e IA incorporada', ar: 'الروبوتات والذكاء الاصطناعي المجسّد', ko: '로보틱스 및 임바디드 AI' },
  'workstation-appliance-software': { en: 'AI workstation & appliance software', de: 'KI-Workstation- & Appliance-Software', fr: 'Logiciels pour stations de travail et appliances IA', ja: 'AIワークステーション＆アプライアンスソフトウェア', zh: 'AI 工作站与一体机软件', es: 'Software para estaciones de trabajo y appliances de IA', pt: 'Software para estações de trabalho e appliances de IA', ar: 'برامج محطات العمل وأجهزة الذكاء الاصطناعي', ko: 'AI 워크스테이션 및 어플라이언스 소프트웨어' },
  'health-wellness': { en: 'Health & wellness', de: 'Gesundheit & Wellness', fr: 'Santé et bien-être', ja: 'ヘルス＆ウェルネス', zh: '健康与养生', es: 'Salud y bienestar', pt: 'Saúde e bem-estar', ar: 'الصحة والعافية', ko: '건강 및 웰니스' },
  education: { en: 'Education', de: 'Bildung', fr: 'Éducation', ja: '教育', zh: '教育', es: 'Educación', pt: 'Educação', ar: 'التعليم', ko: '교육' },
  'legal-compliance': { en: 'Legal & compliance', de: 'Recht & Compliance', fr: 'Juridique et conformité', ja: '法務＆コンプライアンス', zh: '法律与合规', es: 'Legal y cumplimiento normativo', pt: 'Jurídico e conformidade', ar: 'القانون والامتثال', ko: '법률 및 컴플라이언스' },
  finance: { en: 'Finance', de: 'Finanzen', fr: 'Finance', ja: '金融', zh: '金融', es: 'Finanzas', pt: 'Finanças', ar: 'المالية', ko: '금융' },
  'science-research': { en: 'Science & research', de: 'Wissenschaft & Forschung', fr: 'Sciences et recherche', ja: '科学＆研究', zh: '科学与研究', es: 'Ciencia e investigación', pt: 'Ciência e pesquisa', ar: 'العلوم والبحث', ko: '과학 및 연구' },
  'gaming-npcs': { en: 'Gaming & NPCs', de: 'Gaming & NPCs', fr: 'Jeux vidéo et PNJ', ja: 'ゲーム＆NPC', zh: '游戏与 NPC', es: 'Videojuegos y NPC', pt: 'Games e NPCs', ar: 'الألعاب وشخصيات NPC', ko: '게임 및 NPC' },
  accessibility: { en: 'Accessibility', de: 'Barrierefreiheit', fr: 'Accessibilité', ja: 'アクセシビリティ', zh: '无障碍', es: 'Accesibilidad', pt: 'Acessibilidade', ar: 'إمكانية الوصول', ko: '접근성' },
  'enterprise-compliance': { en: 'Enterprise & compliance', de: 'Unternehmen & Compliance', fr: 'Entreprise et conformité', ja: 'エンタープライズ＆コンプライアンス', zh: '企业与合规', es: 'Empresa y cumplimiento normativo', pt: 'Empresas e conformidade', ar: 'المؤسسات والامتثال', ko: '엔터프라이즈 및 컴플라이언스' },
  'emerging-protocols': { en: 'Emerging protocols & open standards', de: 'Neue Protokolle & offene Standards', fr: 'Protocoles émergents et standards ouverts', ja: '新興プロトコル＆オープン標準', zh: '新兴协议与开放标准', es: 'Protocolos emergentes y estándares abiertos', pt: 'Protocolos emergentes e padrões abertos', ar: 'البروتوكولات الناشئة والمعايير المفتوحة', ko: '신흥 프로토콜 및 개방형 표준' },
  'experimental-concepts': { en: 'Experimental concepts', de: 'Experimentelle Konzepte', fr: 'Concepts expérimentaux', ja: '実験的コンセプト', zh: '实验性概念', es: 'Conceptos experimentales', pt: 'Conceitos experimentais', ar: 'مفاهيم تجريبية', ko: '실험적 개념' },
}

/** Which top-level group each subcategory belongs to — drives per-group accent colour and grouped filter UI. */
export const CATEGORY_SUB_GROUP: Record<CategorySubKey, CategoryGroupKey> = {
  'inference-engines': 'run-serve',
  'runtimes-managers': 'run-serve',
  'routers-gateways': 'run-serve',
  'quantization-conversion': 'run-serve',
  'model-hubs': 'run-serve',
  'one-click-installers': 'run-serve',
  'distributed-inference': 'run-serve',
  'in-browser-webgpu': 'run-serve',
  'general-chat-clients': 'chat-assistants',
  'personal-assistants': 'chat-assistants',
  'roleplay-companions': 'chat-assistants',
  'chat-app-bots': 'chat-assistants',
  'hotkey-menubar-assistants': 'chat-assistants',
  'browser-sidebars': 'chat-assistants',
  'terminal-chat-clients': 'chat-assistants',
  'tutors-learning': 'chat-assistants',
  'agent-frameworks': 'agents-automation',
  'autonomous-agents': 'agents-automation',
  'workflow-node-builders': 'agents-automation',
  'computer-browser-agents': 'agents-automation',
  'agent-memory': 'agents-automation',
  'mcp-servers-skills': 'agents-automation',
  'multi-agent-orchestration': 'agents-automation',
  'web-scraping-for-ai': 'agents-automation',
  'code-assistants-ide-plugins': 'code-development',
  'sdks-libraries': 'code-development',
  'ai-code-editors': 'code-development',
  'terminal-coding-agents': 'code-development',
  'code-review': 'code-development',
  'prompt-to-app-builders': 'code-development',
  'dev-tools-testing-docs': 'code-development',
  'document-pdf-chat': 'documents-research',
  'contract-review': 'documents-research',
  'notes-integrations': 'documents-research',
  'search-deep-research': 'documents-research',
  translation: 'documents-research',
  'writing-email': 'documents-research',
  'ocr-document-parsing': 'documents-research',
  'chat-with-data': 'documents-research',
  summarizers: 'documents-research',
  'presentation-generation': 'documents-research',
  'rag-frameworks': 'knowledge-retrieval',
  'vector-databases': 'knowledge-retrieval',
  'embeddings-indexing': 'knowledge-retrieval',
  'local-search': 'knowledge-retrieval',
  'knowledge-graphs': 'knowledge-retrieval',
  'speech-to-text': 'voice-audio',
  'text-to-speech': 'voice-audio',
  'voice-cloning': 'voice-audio',
  'realtime-voice-agents': 'voice-audio',
  'music-audio': 'voice-audio',
  dictation: 'voice-audio',
  'meeting-notes': 'voice-audio',
  'voice-assistants': 'voice-audio',
  'stem-separation-cleanup': 'voice-audio',
  'image-generation': 'images-video',
  'editing-upscaling': 'images-video',
  'vision-ocr': 'images-video',
  'video-generation': 'images-video',
  'avatars-lipsync': 'images-video',
  '3d-generation': 'images-video',
  'subtitles-dubbing': 'images-video',
  'video-editing': 'images-video',
  'creative-app-plugins': 'images-video',
  'photo-libraries': 'photos-cameras-home',
  'security-cameras-nvr': 'photos-cameras-home',
  'smart-home-ai': 'photos-cameras-home',
  'fine-tuning-lora': 'train-operate',
  'datasets-synthetic-data': 'train-operate',
  'lora-image-training': 'train-operate',
  'data-labeling': 'train-operate',
  'training-frameworks': 'train-operate',
  'evaluation-benchmarking': 'llmops-security',
  observability: 'llmops-security',
  'prompt-tooling-evals': 'llmops-security',
  guardrails: 'llmops-security',
  'privacy-pii': 'llmops-security',
  sandboxing: 'llmops-security',
  'edge-embedded': 'hardware-edge',
  'gpu-monitoring': 'hardware-edge',
  'kubernetes-cloud-native': 'hardware-edge',
  'robotics-embodied': 'hardware-edge',
  'workstation-appliance-software': 'hardware-edge',
  'health-wellness': 'industry-domain',
  education: 'industry-domain',
  'legal-compliance': 'industry-domain',
  finance: 'industry-domain',
  'science-research': 'industry-domain',
  'gaming-npcs': 'industry-domain',
  accessibility: 'industry-domain',
  'enterprise-compliance': 'industry-domain',
  'emerging-protocols': 'at-the-edge',
  'experimental-concepts': 'at-the-edge',
}

/** Display order of the whole taxonomy (overview, filter panel, default sort). */
export const CATEGORY_GROUPS: { key: CategoryGroupKey; subs: CategorySubKey[] }[] = [
  { key: 'run-serve', subs: ['inference-engines', 'runtimes-managers', 'routers-gateways', 'quantization-conversion', 'model-hubs', 'one-click-installers', 'distributed-inference', 'in-browser-webgpu'] },
  { key: 'chat-assistants', subs: ['general-chat-clients', 'personal-assistants', 'roleplay-companions', 'chat-app-bots', 'hotkey-menubar-assistants', 'browser-sidebars', 'terminal-chat-clients', 'tutors-learning'] },
  { key: 'agents-automation', subs: ['agent-frameworks', 'autonomous-agents', 'workflow-node-builders', 'computer-browser-agents', 'agent-memory', 'mcp-servers-skills', 'multi-agent-orchestration', 'web-scraping-for-ai'] },
  { key: 'code-development', subs: ['code-assistants-ide-plugins', 'sdks-libraries', 'ai-code-editors', 'terminal-coding-agents', 'code-review', 'prompt-to-app-builders', 'dev-tools-testing-docs'] },
  { key: 'documents-research', subs: ['document-pdf-chat', 'contract-review', 'notes-integrations', 'search-deep-research', 'translation', 'writing-email', 'ocr-document-parsing', 'chat-with-data', 'summarizers', 'presentation-generation'] },
  { key: 'knowledge-retrieval', subs: ['rag-frameworks', 'vector-databases', 'embeddings-indexing', 'local-search', 'knowledge-graphs'] },
  { key: 'voice-audio', subs: ['speech-to-text', 'text-to-speech', 'voice-cloning', 'realtime-voice-agents', 'music-audio', 'dictation', 'meeting-notes', 'voice-assistants', 'stem-separation-cleanup'] },
  { key: 'images-video', subs: ['image-generation', 'editing-upscaling', 'vision-ocr', 'video-generation', 'avatars-lipsync', '3d-generation', 'subtitles-dubbing', 'video-editing', 'creative-app-plugins'] },
  { key: 'photos-cameras-home', subs: ['photo-libraries', 'security-cameras-nvr', 'smart-home-ai'] },
  { key: 'train-operate', subs: ['fine-tuning-lora', 'datasets-synthetic-data', 'lora-image-training', 'data-labeling', 'training-frameworks'] },
  { key: 'llmops-security', subs: ['evaluation-benchmarking', 'observability', 'prompt-tooling-evals', 'guardrails', 'privacy-pii', 'sandboxing'] },
  { key: 'hardware-edge', subs: ['edge-embedded', 'gpu-monitoring', 'kubernetes-cloud-native', 'robotics-embodied', 'workstation-appliance-software'] },
  { key: 'industry-domain', subs: ['health-wellness', 'education', 'legal-compliance', 'finance', 'science-research', 'gaming-npcs', 'accessibility', 'enterprise-compliance'] },
  { key: 'at-the-edge', subs: ['emerging-protocols', 'experimental-concepts'] },
]

export const INTERFACE_LABEL: Record<InterfaceKey, Record<Language, string>> = {
  desktop: { en: 'Desktop app', de: 'Desktop-App', fr: 'Application de bureau', ja: 'デスクトップアプリ', zh: '桌面应用', es: 'Aplicación de escritorio', pt: 'Aplicativo de desktop', ar: 'تطبيق سطح المكتب', ko: '데스크톱 앱' },
  web: { en: 'Web app', de: 'Web-App', fr: 'Application web', ja: 'Webアプリ', zh: '网页应用', es: 'Aplicación web', pt: 'Aplicativo web', ar: 'تطبيق ويب', ko: '웹 앱' },
  cli: { en: 'Command line', de: 'Kommandozeile', fr: 'Ligne de commande', ja: 'コマンドライン', zh: '命令行', es: 'Línea de comandos', pt: 'Linha de comando', ar: 'سطر الأوامر', ko: '명령줄' },
  plugin: { en: 'Editor / notes plugin', de: 'Editor-/Notiz-Plugin', fr: 'Plugin éditeur / notes', ja: 'エディタ／メモアプリのプラグイン', zh: '编辑器／笔记插件', es: 'Plugin de editor o notas', pt: 'Plugin de editor/notas', ar: 'إضافة محرر / ملاحظات', ko: '에디터/메모 플러그인' },
  mobile: { en: 'Mobile app', de: 'Mobile App', fr: 'Application mobile', ja: 'モバイルアプリ', zh: '移动应用', es: 'Aplicación móvil', pt: 'Aplicativo móvel', ar: 'تطبيق جوال', ko: '모바일 앱' },
  library: { en: 'Library / SDK', de: 'Bibliothek / SDK', fr: 'Bibliothèque / SDK', ja: 'ライブラリ／SDK', zh: '库／SDK', es: 'Biblioteca / SDK', pt: 'Biblioteca / SDK', ar: 'مكتبة / SDK', ko: '라이브러리/SDK' },
}
