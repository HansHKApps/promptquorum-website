// Noema Review: Multi-Format Local AI for iPhone, iPad, Mac, and Vision Pro
// Slug: noema-review
// Companion to: private-llm-review, pocketpal-ai-review, enclave-ai-review, locally-ai-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

const APP_STORE_URL = 'https://apps.apple.com/us/app/noema-local-ai-offline-llm/id6751169935'
const SITE_URL = 'https://noemaai.com/'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/noema-review-hero-en.webp',
    title: 'Noema Review (2026): Multi-Format Local AI for iPhone, iPad, and Mac',
    seoTitle: 'Noema Review 2026: Local AI App for iPhone & Mac',
    intro:
      'Noema, listed on the App Store as "Noema: Local AI & Offline LLM" (developer account: Alexandru Stamate; company: [NoemaAI LLC](https://noemaai.com/ownership)), is a free app for iPhone, iPad, Mac (Apple Silicon), and Apple Vision Pro that runs open-source language models entirely on-device. It is free to download from the [Apple App Store](' +
      APP_STORE_URL +
      '), with no subscription and no in-app purchases. As of this review, the current version was 3.9, rated 4.5 out of 5 from only 26 ratings — check the live App Store listing for the current figures, since this app ships updates on a near-daily cadence. What sets Noema apart from many single-format mobile local-AI apps is that it loads models in five different ways — GGUF, MLX, ExecuTorch, Core ML, and Apple\'s own on-device Foundation Models — instead of locking a user into one runtime. It also supports document chat: importing PDFs and EPUBs and asking grounded questions against indexed passages, a retrieval-style workflow that runs entirely on-device rather than through a cloud RAG pipeline.',
    metaDescription:
      'Noema review: free iPhone/iPad/Mac app supporting 5 model formats (GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models) plus on-device PDF/EPUB document chat. Pricing, privacy, and alternatives.',
    twitterDescription:
      'Noema review: a free app for iPhone, iPad, and Mac that runs local AI models in five formats — GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models — plus on-device document chat for PDFs and EPUBs.',
    audience:
      'iPhone, iPad, and Mac users evaluating a free, multi-format local-AI app with document chat against alternatives like Private LLM, PocketPal AI, and Enclave AI — covers supported formats, document Q&A, privacy, and the rating-sample-size caveat.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Noema review',
    targetKeywords: [
      'noema review',
      'noema app iphone',
      'noema local ai',
      'noema ios app',
      'noema vs private llm',
      'on-device ai document chat',
      'gguf mlx executorch core ml app',
      'best free local llm app for iphone',
    ],
    current_models_mentioned: ['Noema 1.5 2B'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple Silicon Mac (M1 or later)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Noema is a free iOS, iPadOS, macOS, and visionOS app, made by independent developer Alexandru Stamate ([NoemaAI LLC](https://noemaai.com/ownership)), that runs open-source language models entirely on-device in five different formats: GGUF, MLX, ExecuTorch, Core ML, and Apple\'s own Foundation Models.** It costs nothing on the [Apple App Store](' +
      APP_STORE_URL +
      '), with no subscription or in-app purchases, and adds on-device document chat for PDFs and EPUBs. As of this review it held a 4.5-out-of-5 rating from only 26 ratings — a small enough sample that it should not be read as equivalent to an app with thousands of reviews. Readers who want a longer-established track record should also compare it with [Private LLM](/power-local-llm/private-llm-review) or [Enclave AI](/power-local-llm/enclave-ai-review).',
    quickAnswerTop: {
      en: {
        question: 'Is Noema a good free local AI app for iPhone and Mac?',
        answer:
          'Yes, if you want a free, actively maintained app that loads models in multiple formats (GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models) and adds on-device document chat for PDFs and EPUBs. Its 4.5-star rating is based on only 26 ratings, so treat that as an early signal rather than a proven track record — apps like Private LLM and Enclave AI have longer public histories.',
        bullets: [
          'Free on the Apple App Store, no subscription and no in-app purchases listed.',
          'iPhone, iPad, Mac (Apple Silicon), and Apple Vision Pro — requires iOS/iPadOS 18 or later.',
          'Loads models in five formats: GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models.',
          'Document chat: import PDFs and EPUBs for on-device, indexed, grounded Q&A.',
          'Version 3.9 at time of writing, updated within hours of this review — check the App Store for the current version.',
          '4.5/5 rating from 26 ratings as of this review — a small sample size.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Ist Noema eine gute kostenlose lokale KI-App für iPhone und Mac?',
        answer:
          'Ja, wenn Sie eine kostenlose, aktiv gepflegte App möchten, die Modelle in mehreren Formaten lädt (GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models) und einen Dokument-Chat auf dem Gerät für PDFs und EPUBs bietet. Die 4,5-Sterne-Bewertung basiert auf nur 26 Bewertungen — betrachten Sie das eher als frühes Signal denn als belegte Erfolgsbilanz. Apps wie Private LLM und Enclave AI haben eine längere öffentliche Historie.',
        bullets: [
          'Kostenlos im Apple App Store, kein Abonnement und keine In-App-Käufe gelistet.',
          'iPhone, iPad, Mac (Apple Silicon) und Apple Vision Pro — erfordert iOS/iPadOS 18 oder neuer.',
          'Lädt Modelle in fünf Formaten: GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models.',
          'Dokument-Chat: PDFs und EPUBs importieren für indexierte, fundierte Fragen und Antworten auf dem Gerät.',
          'Version 3.9 zum Zeitpunkt der Erstellung, wenige Stunden vor diesem Test aktualisiert — aktuelle Version im App Store prüfen.',
          '4,5/5 Bewertung aus 26 Bewertungen zum Zeitpunkt dieses Tests — eine kleine Stichprobe.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'Noema est-elle une bonne application d\'IA locale gratuite pour iPhone et Mac ?',
        answer:
          'Oui, si vous voulez une application gratuite et activement maintenue qui charge des modèles dans plusieurs formats (GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models) et propose un chat de documents sur l\'appareil pour les PDF et EPUB. Sa note de 4,5 étoiles repose sur seulement 26 avis, à considérer comme un signal précoce plutôt qu\'un historique éprouvé — des applications comme Private LLM et Enclave AI ont un historique public plus long.',
        bullets: [
          'Gratuite sur l\'App Store d\'Apple, sans abonnement ni achat intégré répertorié.',
          'iPhone, iPad, Mac (Apple Silicon) et Apple Vision Pro — nécessite iOS/iPadOS 18 ou version ultérieure.',
          'Charge les modèles dans cinq formats : GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models.',
          'Chat de documents : importez des PDF et EPUB pour des questions-réponses indexées et fondées, sur l\'appareil.',
          'Version 3.9 au moment de la rédaction, mise à jour quelques heures avant ce test — vérifiez la version actuelle sur l\'App Store.',
          'Note de 4,5/5 sur seulement 26 avis au moment de ce test — un échantillon restreint.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Es Noema una buena app de IA local gratuita para iPhone y Mac?',
        answer:
          'Sí, si buscas una app gratuita y activamente mantenida que carga modelos en varios formatos (GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models) y añade chat de documentos en el dispositivo para PDF y EPUB. Su calificación de 4.5 estrellas se basa en solo 26 valoraciones, así que trátala como una señal temprana y no como un historial comprobado — apps como Private LLM y Enclave AI tienen un historial público más largo.',
        bullets: [
          'Gratis en la App Store de Apple, sin suscripción ni compras dentro de la app.',
          'iPhone, iPad, Mac (Apple Silicon) y Apple Vision Pro — requiere iOS/iPadOS 18 o posterior.',
          'Carga modelos en cinco formatos: GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models.',
          'Chat de documentos: importa PDF y EPUB para preguntas y respuestas indexadas y fundamentadas en el dispositivo.',
          'Versión 3.9 al momento de esta reseña, actualizada horas antes de su publicación — verifica la versión actual en la App Store.',
          'Calificación de 4.5/5 con solo 26 valoraciones al momento de esta reseña — una muestra pequeña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O Noema é um bom aplicativo gratuito de IA local para iPhone e Mac?',
        answer:
          'Sim, se você quer um aplicativo gratuito e mantido ativamente que carrega modelos em vários formatos (GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models) e oferece chat de documentos no dispositivo para PDFs e EPUBs. A avaliação de 4,5 estrelas se baseia em apenas 26 avaliações, então trate isso como um sinal inicial, não um histórico comprovado — apps como Private LLM e Enclave AI têm um histórico público mais longo.',
        bullets: [
          'Gratuito na App Store da Apple, sem assinatura e sem compras no aplicativo listadas.',
          'iPhone, iPad, Mac (Apple Silicon) e Apple Vision Pro — exige iOS/iPadOS 18 ou posterior.',
          'Carrega modelos em cinco formatos: GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models.',
          'Chat de documentos: importe PDFs e EPUBs para perguntas e respostas indexadas e fundamentadas no dispositivo.',
          'Versão 3.9 no momento desta análise, atualizada poucas horas antes da publicação — confira a versão atual na App Store.',
          'Avaliação de 4,5/5 com apenas 26 avaliações no momento desta análise — uma amostra pequena.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'Noemaは iPhone と Mac 向けの優れた無料ローカルAIアプリですか?',
        answer:
          '複数の形式(GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models)でモデルを読み込める、無料で積極的にメンテナンスされているアプリを求めるなら、はいです。PDFやEPUBのオンデバイス文書チャットも追加されています。4.5の評価はわずか26件の評価に基づくもので、実績というより初期のシグナルとして捉えてください — Private LLMやEnclave AIはより長い公開履歴を持っています。',
        bullets: [
          'Apple App Storeで無料。サブスクリプションやアプリ内課金は掲載されていません。',
          'iPhone、iPad、Mac(Apple Silicon)、Apple Vision Pro対応 — iOS/iPadOS 18以降が必要です。',
          '5つの形式でモデルを読み込み: GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models。',
          '文書チャット: PDFやEPUBをインポートし、オンデバイスでインデックス化された根拠のある質問応答が可能。',
          '本レビュー執筆時点でバージョン3.9。公開の数時間前に更新済み — 現在のバージョンはApp Storeで確認してください。',
          '本レビュー時点で評価4.5/5、評価数はわずか26件 — サンプルサイズは小さいです。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'Noema 是适合 iPhone 和 Mac 的优质免费本地 AI 应用吗?',
        answer:
          '如果你想要一款免费、持续维护、支持多种格式加载模型(GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models)并提供设备端文档聊天功能(支持 PDF 和 EPUB)的应用,答案是肯定的。它的 4.5 星评分仅基于 26 条评价,应视为早期信号,而非成熟的长期记录 — Private LLM 和 Enclave AI 拥有更长的公开历史。',
        bullets: [
          '在 Apple App Store 免费提供,未列出订阅或应用内购买。',
          '支持 iPhone、iPad、Mac(Apple Silicon)和 Apple Vision Pro — 需要 iOS/iPadOS 18 或更高版本。',
          '支持五种模型格式加载: GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models。',
          '文档聊天: 导入 PDF 和 EPUB,进行设备端索引、有据可查的问答。',
          '撰写本评测时的版本为 3.9,发布前几小时刚更新 — 请在 App Store 确认当前版本。',
          '截至本评测,评分为 4.5/5,仅基于 26 条评价 — 样本量较小。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل Noema تطبيق ذكاء اصطناعي محلي مجاني جيد لأجهزة iPhone و Mac؟',
        answer:
          'نعم، إذا كنت تريد تطبيقًا مجانيًا يُصان بنشاط ويُحمّل النماذج بعدة صيغ (GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation) ويضيف محادثة مستندات على الجهاز لملفات PDF وEPUB. يستند تقييمه البالغ 4.5 نجوم إلى 26 تقييمًا فقط، لذا تعامل معه كإشارة مبكرة وليس سجلًا موثوقًا طويل الأمد — تطبيقات مثل Private LLM وEnclave AI لها تاريخ عام أطول.',
        bullets: [
          'مجاني على متجر تطبيقات Apple؛ لا يوجد اشتراك ولا مشتريات داخل التطبيق مذكورة.',
          'يعمل على iPhone وiPad وMac (Apple Silicon) وApple Vision Pro — يتطلب iOS/iPadOS 18 أو أحدث.',
          'يُحمّل النماذج بخمس صيغ: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation.',
          'محادثة المستندات: استيراد ملفات PDF وEPUB للحصول على إجابات مفهرسة ومبنية على الجهاز.',
          'الإصدار 3.9 وقت كتابة هذه المراجعة، وقد تم تحديثه قبل ساعات من نشرها — تحقق من الإصدار الحالي على متجر التطبيقات.',
          'تقييم 4.5 من 5 بناءً على 26 تقييمًا فقط وقت هذه المراجعة — عينة صغيرة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'Noema는 iPhone과 Mac에 적합한 우수한 무료 로컬 AI 앱입니까?',
        answer:
          '여러 형식(GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models)으로 모델을 불러올 수 있고 PDF와 EPUB를 위한 온디바이스 문서 채팅 기능을 갖춘, 무료이면서 활발히 유지 관리되는 앱을 원한다면 그렇습니다. 4.5점 평점은 단 26개의 평가에 근거한 것이므로, 검증된 실적이 아니라 초기 신호로 받아들여야 합니다 — Private LLM과 Enclave AI는 더 긴 공개 이력을 가지고 있습니다.',
        bullets: [
          'Apple App Store에서 무료로 제공되며, 구독이나 인앱 구매가 게재되어 있지 않습니다.',
          'iPhone, iPad, Mac(Apple Silicon), Apple Vision Pro를 지원하며 iOS/iPadOS 18 이상이 필요합니다.',
          '다섯 가지 형식으로 모델을 불러옵니다: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
          '문서 채팅: PDF와 EPUB를 가져와 온디바이스에서 색인화되고 근거에 기반한 질의응답이 가능합니다.',
          '이 리뷰 작성 시점 버전은 3.9이며, 발행 몇 시간 전에 업데이트되었습니다 — 현재 버전은 App Store에서 확인하십시오.',
          '이 리뷰 시점 기준 26개의 평가만으로 4.5/5점을 받았습니다 — 표본 크기가 작습니다.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Noema Is', anchor: 'what-is-noema' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Supported Model Formats', anchor: 'supported-model-formats' },
      { label: 'Document Chat: PDF and EPUB Q&A', anchor: 'document-chat' },
      { label: 'Platforms and Requirements', anchor: 'platforms' },
      { label: 'Privacy: What Noema Does and Does Not Collect', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Noema vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Noema', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Noema', anchor: 'who-should-not-use' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Noema is a free iPhone, iPad, Mac, and Vision Pro app by independent developer Alexandru Stamate (NoemaAI LLC) that runs local AI models in five formats — GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models — and adds on-device document chat for PDFs and EPUBs.',
          },
          {
            type: 'plain-terms',
            text: 'Most local-AI phone apps only run one type of model file. Noema can load several different types, plus Apple\'s own built-in AI model, so you are not stuck if your preferred model only ships in one format — and it can also read a PDF or EPUB you give it and answer questions grounded in that document, all without an internet connection.',
          },
        ],
        items: [
          'Price: free on the [Apple App Store](' + APP_STORE_URL + '); no subscription and no in-app purchases listed as of this review.',
          'Platforms: iPhone, iPad, Mac (Apple Silicon), and Apple Vision Pro — no official Android, Windows, or Linux app.',
          'Developer: [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) / [NoemaAI LLC](https://noemaai.com/ownership).',
          'Model formats: GGUF, MLX, ExecuTorch, Core ML, and Apple\'s on-device Foundation Models — five formats in one app.',
          'Document chat: import PDFs and EPUBs; the app indexes passages for on-device, grounded question answering.',
          'Privacy: the developer states the app collects no data; no account is required to use it.',
          'Rating: 4.5 out of 5 from only 26 ratings as of this review — a small sample, not a long track record.',
          'Version 3.9 at time of writing, with an update logged within hours of this review — confirm the current version on the App Store before relying on a specific feature.',
        ],
      },
      whatIsNoema: {
        id: 'what-is-noema',
        title: 'What Noema Is',
        content: [
          '**Noema is a native Apple app that downloads and runs open-source language models directly on an iPhone, iPad, Mac, or Vision Pro headset, with no server-side component required for local chat.** Once a model is downloaded, the app can generate a response without an internet connection.',
          'It is built by [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674), whose company [NoemaAI LLC](https://noemaai.com/ownership) owns and operates both the app and the [noemaai.com](' +
          SITE_URL +
          ') site, per the site\'s own ownership page. The app is listed on the App Store under App Store ID 6751169935. This review evaluates the developer\'s own claims — "0 cloud required for local chat," no account requirement, no data collection — against the App Store privacy label and the app\'s public description, rather than taking the marketing copy at face value.',
          'The app updates unusually often: the version checked for this review, 3.9, had shipped within hours of this review being written, and the "what\'s new" notes for that release described fixes to MLX model stability, document indexing, vision models, and Core ML compatibility — evidence of active, ongoing maintenance rather than a stalled or abandoned project.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Getting Noema running takes a few minutes and no account creation.**',
        ],
        numberedItems: [
          {
            title: 'Download the app',
            whyItMatters: 'Get [Noema from the Apple App Store](' + APP_STORE_URL + ') for free. There is no trial tier to worry about and no subscription to cancel later — the full app is free from the first launch.',
          },
          {
            title: 'Pick a model format and source',
            whyItMatters: 'Browse and download a GGUF model from Hugging Face directly inside the app, or use an MLX, ExecuTorch, or Core ML model, or fall back to Apple\'s built-in on-device Foundation Model if you would rather not download anything at all.',
          },
          {
            title: 'Import a document for document chat',
            whyItMatters: 'Add a PDF or EPUB from the Files app or iCloud Drive. Noema indexes the document\'s passages on-device so you can ask grounded questions about its content instead of only chatting from the model\'s general knowledge.',
          },
          {
            title: 'Chat, summarize, or generate flashcards',
            whyItMatters: 'Once a model and, optionally, a document are loaded, use the app entirely offline for chat, document summaries, notes, or flashcard generation.',
          },
          {
            title: 'Optional: enable web search or a remote provider',
            whyItMatters: 'By default Noema runs local-only. The developer\'s own site describes an "Off-grid Mode" that blocks external HTTP and HTTPS traffic; web search or a remote model provider is an explicit, separate opt-in rather than the default behavior.',
          },
        ],
        note: 'Exact download sizes, the current supported-model list, and minimum device requirements can change between App Store updates — confirm the current specifics inside the app or on [noemaai.com](' + SITE_URL + ') before committing to a large download on a limited data plan.',
      },
      supportedModelFormats: {
        id: 'supported-model-formats',
        title: 'Supported Model Formats',
        itemHeadings: true,
        content: [
          '**Noema\'s stated differentiator is loading models in five different formats rather than one.** Most mobile local-AI apps commit to a single runtime — llama.cpp and GGUF is the most common choice across this cluster of reviews. Noema instead supports GGUF, MLX, ExecuTorch, Core ML, and Apple\'s own on-device Foundation Models side by side, per the app\'s own App Store description and [noemaai.com](' + SITE_URL + ').',
        ],
        columns: ['Format', 'What it is', 'Why it matters here'],
        rows: [
          {
            'Format': 'GGUF',
            'What it is': 'The llama.cpp quantized model format used by most open-source local-AI apps and the majority of community-quantized models on Hugging Face.',
            'Why it matters here': 'Gives access to the largest pool of ready-to-use community model files without waiting for a format-specific conversion.',
          },
          {
            'Format': 'MLX',
            'What it is': 'Apple\'s own machine-learning array framework, built to use Apple Silicon\'s unified memory and Metal GPU acceleration directly.',
            'Why it matters here': 'Can run noticeably faster on Apple Silicon than a generic CPU-bound format, at the cost of only working well on Apple hardware.',
          },
          {
            'Format': 'ExecuTorch',
            'What it is': 'PyTorch\'s on-device inference runtime, designed for exporting PyTorch models to run efficiently on mobile and edge hardware.',
            'Why it matters here': 'Broadens the pool of models Noema can load beyond the GGUF/MLX ecosystem to models exported directly from PyTorch.',
          },
          {
            'Format': 'Core ML',
            'What it is': 'Apple\'s native machine-learning model format, optimized to run across the CPU, GPU, and Neural Engine on Apple devices.',
            'Why it matters here': 'Lets the app load models specifically optimized for Apple\'s Neural Engine rather than only general-purpose formats.',
          },
          {
            'Format': 'Apple Foundation Models',
            'What it is': 'Apple\'s own built-in, on-device large language model, available system-wide starting with iOS 18 on supported hardware.',
            'Why it matters here': 'Lets a user try document chat or general chat immediately with zero model download, using the model already on the device.',
          },
        ],
        note: 'Format support and the exact model list can change between App Store updates. Confirm current format compatibility and hardware requirements for a specific model inside the app before relying on it.',
      },
      documentChat: {
        id: 'document-chat',
        title: 'Document Chat: PDF and EPUB Q&A',
        content: [
          '**Noema imports PDFs and EPUBs, including textbooks, and indexes their passages on-device so a loaded model can answer questions grounded in that specific document.** The developer\'s own site describes this as reading a document "more thoroughly" and grounding answers "in your own datasets with retrieval that stays on device" — a retrieval-style workflow similar in spirit to server-side retrieval-augmented generation (RAG), but running locally rather than against a cloud vector database.',
          'Beyond question answering, the app can generate summaries, notes, and flashcards from an imported document, and supports vision-capable models for documents or images that include diagrams or scanned pages.',
          'This review has not independently benchmarked the retrieval accuracy of Noema\'s document indexing against dedicated desktop RAG tools — the description above reflects the developer\'s own stated feature set, not an independent accuracy test.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Platforms and Requirements',
        itemHeadings: true,
        columns: ['Platform', 'What to expect', 'Important note'],
        rows: [
          {
            'Platform': 'iPhone / iPad',
            'What to expect': 'Requires iOS or iPadOS 18 or later, per the App Store listing. Runs the full model-format lineup and document chat.',
            'Important note': 'Larger models and larger imported documents need more free storage and RAM; smaller quantized models are the safer starting point on older devices.',
          },
          {
            'Platform': 'Mac',
            'What to expect': 'Native app for Apple Silicon Macs (M1 or later), per the App Store listing.',
            'Important note': 'Apple Silicon\'s unified memory generally allows larger models than an equivalent iPhone or iPad.',
          },
          {
            'Platform': 'Apple Vision Pro',
            'What to expect': 'Listed as a supported device on the App Store.',
            'Important note': 'This review did not independently test the Vision Pro experience; treat it as App Store-listed compatibility rather than a hands-on verified feature.',
          },
          {
            'Platform': 'Android, Windows, Linux',
            'What to expect': 'No official app on Google Play, the Microsoft Store, or any Linux package repository, per the developer\'s own site.',
            'Important note': 'Readers on these platforms should look at [PocketPal AI](/power-local-llm/pocketpal-ai-review) (Android/iOS) or another cross-platform option instead.',
          },
        ],
        note: 'App size was approximately 368 MB at time of review, with the interface available in English plus ten additional languages (Arabic, French, German, Hindi, Japanese, Korean, Romanian, Simplified Chinese, Spanish, Turkish), per the App Store listing. The App Store lists a 13+ age rating.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy: What Noema Does and Does Not Collect',
        content: [
          '**Noema\'s App Store privacy label states the developer does not collect any data from the app**, and the app requires no account, login, or sign-up to use.',
          'The developer\'s own site describes an "Off-grid Mode" that blocks external HTTP and HTTPS traffic, and states that local chat requires zero cloud connectivity. Optional features — web search and connecting to a remote model provider — are described as explicit opt-ins, not defaults.',
        ],
        items: [
          '**No account required.** Download and use the app without creating a profile or signing in.',
          '**No data collection, per the App Store label.** Apple\'s privacy nutrition label for this listing shows no data collected from the app.',
          '**Off-grid Mode.** The developer\'s own site describes a mode that blocks external HTTP and HTTPS traffic for readers who want a hard guarantee against any outbound network call.',
          '**Optional network features are opt-in.** Web search and remote-provider connections are described as features the user must explicitly enable, not the default state.',
          '**Local API and Noema Relay.** The developer\'s site describes a private local-network API for connecting other apps to models running in Noema, and a "Noema Relay" feature for cross-device model access — this review treats these as developer-described features rather than independently verified network-security audits.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Free, no subscription',
            'What it means in real use': 'Every feature, including document chat, is available at no cost from the first launch.',
            'Limitation / caveat': 'A free, one-developer app has less institutional backing than a paid app from a larger, longer-established team.',
          },
          {
            'Benefit': 'Five supported model formats',
            'What it means in real use': 'GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models cover a wider slice of the model ecosystem than a single-format competitor.',
            'Limitation / caveat': 'More formats can mean more edge cases; the app\'s own July-to-September release notes describe ongoing fixes to MLX and Core ML compatibility.',
          },
          {
            'Benefit': 'On-device document chat',
            'What it means in real use': 'Import a PDF or EPUB and ask grounded questions, generate summaries, or build flashcards, without uploading the document anywhere.',
            'Limitation / caveat': 'Retrieval accuracy on long or complex documents has not been independently benchmarked by PromptQuorum against dedicated desktop RAG tools.',
          },
          {
            'Benefit': 'No account, no data collection',
            'What it means in real use': 'Use the app immediately with nothing to sign up for; the App Store privacy label shows no data collected.',
            'Limitation / caveat': 'This review did not independently source-audit the app\'s code; it relies on the App Store privacy label and the developer\'s own claims.',
          },
          {
            'Benefit': 'Very active update cadence',
            'What it means in real use': 'Frequent releases suggest an actively maintained app rather than an abandoned one.',
            'Limitation / caveat': 'A high release frequency also means specific version numbers, feature details, and bug states in this review can go stale faster than for a slower-moving app — verify current behavior in the app.',
          },
          {
            'Benefit': 'Rated 4.5 out of 5',
            'What it means in real use': 'The average rating is strong.',
            'Limitation / caveat': 'That average is based on only 26 ratings at time of review — a small sample that should not be treated as equivalent to an app with a large, established rating base.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Noema vs. Alternatives',
        columns: ['App', 'Platforms', 'Price', 'Model flexibility', 'Key difference'],
        rows: [
          {
            'App': 'Noema',
            'Platforms': 'iPhone/iPad/Mac/Vision Pro (Apple only)',
            'Price': 'Free',
            'Model flexibility': 'Five formats: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models',
            'Key difference': 'Multi-format loading plus on-device document chat; small rating sample so far',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'Price': '$4.99 one-time purchase',
            'Model flexibility': '140+ curated models; OmniQuant/GPTQ quantization',
            'Key difference': 'Paid, closed-source, curated library with three years of public release history',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iPhone/iPad, with some Android support',
            'Price': 'Free, open source',
            'Model flexibility': 'Any GGUF file the user sources from Hugging Face or elsewhere',
            'Key difference': 'Free and open-source; GGUF only, no built-in document chat',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Platforms': 'See current listing',
            'Price': 'See current listing',
            'Model flexibility': 'See full review for current model support',
            'Key difference': 'See the full Enclave AI review for a detailed comparison',
          },
          {
            'App': '[Locally AI](/power-local-llm/locally-ai-review)',
            'Platforms': 'iPhone/iPad/Mac',
            'Price': 'Free',
            'Model flexibility': 'Built on Apple MLX only; access to Apple\'s on-device foundation model',
            'Key difference': 'Free MLX-only alternative, versus Noema\'s five-format support',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently — verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Noema',
        items: [
          '**Apple users who want format flexibility.** Readers who already have model files in different formats — or who want to try GGUF, MLX, ExecuTorch, and Core ML models without switching apps — get all four plus Apple\'s built-in Foundation Model in one place.',
          '**Readers who want on-device document Q&A.** Importing a PDF or EPUB and asking grounded questions locally is a distinct feature not every mobile local-AI app offers.',
          '**Budget-conscious users.** The app is free with no subscription, which matters for readers who want to try local AI without committing money up front.',
          '**Early adopters comfortable with a young rating history.** Readers who do not mind that the 4.5-star average rests on only 26 ratings, and who value an actively, frequently updated app over one with a longer public track record.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Noema',
        items: [
          '**Android, Windows, or Linux users.** Noema has no official app on any of these platforms — choose [PocketPal AI](/power-local-llm/pocketpal-ai-review) (partial Android support) or another cross-platform option instead.',
          '**Readers who want a long, established rating history before trusting an app.** With only 26 ratings as of this review, readers who prioritize social proof should also weigh [Private LLM](/power-local-llm/private-llm-review), which has a multi-year public release history.',
          '**Readers who want the largest possible curated model library.** Noema\'s format flexibility is broad, but it does not ship a 140+ model curated library the way [Private LLM](/power-local-llm/private-llm-review) does.',
          '**Teams wanting a centrally managed deployment.** Noema is a single-user, single-device consumer app with no admin console or team billing — organizations should look at self-hosted, server-side local-LLM infrastructure instead.',
          '**Readers who need independent, third-party benchmarks of document-retrieval accuracy.** This review relies on the developer\'s own description of the document-chat feature, not an independent accuracy benchmark against dedicated RAG tools.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'How much does Noema cost?',
            a: 'Noema is [free on the Apple App Store](' + APP_STORE_URL + '), verified for this review on 2026-09-12. There is no subscription and no in-app purchases listed on the current App Store listing. App Store availability can change over time — confirm the current price before downloading.',
          },
          {
            q: 'What model formats does Noema support?',
            a: 'Noema loads models in five formats: GGUF, MLX, ExecuTorch, Core ML, and Apple\'s own on-device Foundation Models, per the app\'s App Store description and [noemaai.com](' + SITE_URL + '). This multi-format support is broader than most single-format competing apps, which typically commit to only GGUF or only MLX.',
          },
          {
            q: 'Is Noema available on Android or Windows?',
            a: 'No official version exists on Google Play, the Microsoft Store, or any Linux package repository. Noema is built specifically for iPhone, iPad, Mac, and Apple Vision Pro.',
          },
          {
            q: 'Who develops Noema?',
            a: 'Noema is developed by [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674); the [noemaai.com](' + SITE_URL + ') site and app are owned and operated by NoemaAI LLC, per the site\'s own [ownership page](https://noemaai.com/ownership).',
          },
          {
            q: 'What is document chat in Noema?',
            a: 'Document chat lets you import a PDF or EPUB, including textbooks, and ask questions grounded in that specific document. Noema indexes the document\'s passages on-device, a retrieval-style workflow similar in spirit to server-side RAG but running locally. The app can also generate summaries, notes, and flashcards from an imported document.',
          },
          {
            q: 'Does Noema work completely offline?',
            a: 'Yes, for local chat and document chat once a model and any document are loaded. The developer\'s own site describes an "Off-grid Mode" that blocks external HTTP and HTTPS traffic; optional features like web search or a remote model provider are separate, explicit opt-ins rather than the default.',
          },
          {
            q: 'Does Noema collect any personal data?',
            a: 'Apple\'s App Store privacy nutrition label for this listing states the developer does not collect any data from the app, and no account or sign-in is required. This review relies on the App Store\'s privacy label and the developer\'s own claims, not an independent source-code audit.',
          },
          {
            q: 'How reliable is Noema\'s 4.5-star rating?',
            a: 'The 4.5-out-of-5 average is based on only 26 ratings as of this review — a small sample compared to apps with hundreds or thousands of reviews. Treat it as an early, positive signal rather than proof of a long, proven track record, and re-check the current rating count on the App Store before relying on it.',
          },
          {
            q: 'How does Noema compare to Private LLM?',
            a: 'Noema is free and supports five model formats (GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models) plus on-device document chat, but has only 26 ratings as of this review. [Private LLM](/power-local-llm/private-llm-review) costs $4.99 one-time, ships a curated 140+ model library, and has a three-year public release history. Choose Noema for format flexibility and document chat at no cost; choose Private LLM for a longer-established, curated experience.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Noema stands out in the mobile local-AI cluster for one specific, verifiable reason: it loads models in five different formats — GGUF, MLX, ExecuTorch, Core ML, and Apple\'s own Foundation Models — where most competing apps commit to just one or two. It pairs that with on-device document chat for PDFs and EPUBs, all for free with no subscription. Its very frequent update cadence, evidenced by a version that shipped within hours of this review, points to active maintenance rather than an abandoned side project. The honest caveat is its youth as a rated product: a 4.5-star average sitting on only 26 ratings is a positive early signal, not the kind of large-sample track record that [Private LLM](/power-local-llm/private-llm-review) or [PocketPal AI](/power-local-llm/pocketpal-ai-review) can show after years on the App Store. Readers who want format flexibility and document chat at zero cost should try it; readers who weight social proof and a longer public history more heavily should start with Private LLM or PocketPal AI instead, and revisit Noema once its rating count grows.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Noema on the App Store](' + APP_STORE_URL + ') — price, platform compatibility, privacy label, rating, version, and size.',
          '[Noema official site (noemaai.com)](' + SITE_URL + ') — product overview, supported model formats, document chat and privacy claims.',
          '[Noema ownership page](https://noemaai.com/ownership) — legal entity (NoemaAI LLC) behind the app and site.',
          '[Alexandru Stamate on the App Store](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) — developer account listing.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Private LLM Review](/power-local-llm/private-llm-review) — a paid, curated-library alternative with a longer release history.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source, GGUF-only alternative.',
          '[Enclave AI Review](/power-local-llm/enclave-ai-review) — another on-device AI app for comparison.',
          '[Locally AI Review](/power-local-llm/locally-ai-review) — a free, Apple MLX-only alternative.',
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/noema-review-hero-de.webp',
    title: 'Noema im Test (2026): Multi-Format-KI lokal für iPhone, iPad und Mac',
    seoTitle: 'Noema Test 2026: Lokale KI-App für iPhone & Mac',
    intro:
      'Noema, im App Store als "Noema: Local AI & Offline LLM" gelistet (Entwicklerkonto: Alexandru Stamate; Unternehmen: [NoemaAI LLC](https://noemaai.com/ownership)), ist eine kostenlose App für iPhone, iPad, Mac (Apple Silicon) und Apple Vision Pro, die Open-Source-Sprachmodelle vollständig auf dem Gerät ausführt. Sie ist kostenlos im [Apple App Store](' +
      APP_STORE_URL +
      ') erhältlich, ohne Abonnement und ohne In-App-Käufe. Zum Zeitpunkt dieses Tests lag die aktuelle Version bei 3.9, bewertet mit 4,5 von 5 Sternen aus nur 26 Bewertungen — prüfen Sie die aktuelle App-Store-Auflistung für die aktuellen Zahlen, da die App fast täglich Updates erhält. Was Noema von vielen Mobil-Apps für lokale KI mit nur einem Format unterscheidet, ist, dass sie Modelle auf fünf verschiedene Arten lädt — GGUF, MLX, ExecuTorch, Core ML und Apples eigene On-Device-Foundation-Models — statt Nutzer auf ein einziges Laufzeitformat festzulegen. Sie unterstützt außerdem Dokument-Chat: PDFs und EPUBs importieren und fundierte Fragen zu indexierten Textstellen stellen — ein Retrieval-ähnlicher Ablauf, der vollständig auf dem Gerät läuft statt über eine Cloud-RAG-Pipeline.',
    metaDescription:
      'Noema im Test: kostenlose iPhone/iPad/Mac-App mit 5 Modellformaten (GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models) plus PDF/EPUB-Dokument-Chat auf dem Gerät. Preis, Datenschutz und Alternativen.',
    twitterDescription:
      'Noema im Test: eine kostenlose App für iPhone, iPad und Mac, die lokale KI-Modelle in fünf Formaten ausführt — GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models — plus Dokument-Chat auf dem Gerät für PDFs und EPUBs.',
    audience:
      'iPhone-, iPad- und Mac-Nutzer, die eine kostenlose Multi-Format-App für lokale KI mit Dokument-Chat gegenüber Alternativen wie Private LLM, PocketPal AI und Enclave AI bewerten — behandelt unterstützte Formate, Dokument-Q&A, Datenschutz und die Einschränkung durch die kleine Bewertungsstichprobe.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Noema review',
    targetKeywords: [
      'noema review',
      'noema app iphone',
      'noema local ai',
      'noema ios app',
      'noema vs private llm',
      'on-device ai document chat',
      'gguf mlx executorch core ml app',
      'best free local llm app for iphone',
    ],
    current_models_mentioned: ['Noema 1.5 2B'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple Silicon Mac (M1 oder neuer)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Noema ist eine kostenlose iOS-, iPadOS-, macOS- und visionOS-App des unabhängigen Entwicklers Alexandru Stamate ([NoemaAI LLC](https://noemaai.com/ownership)), die Open-Source-Sprachmodelle vollständig auf dem Gerät in fünf verschiedenen Formaten ausführt: GGUF, MLX, ExecuTorch, Core ML und Apples eigene Foundation Models.** Sie kostet nichts im [Apple App Store](' +
      APP_STORE_URL +
      '), ohne Abonnement oder In-App-Käufe, und bietet zusätzlich Dokument-Chat auf dem Gerät für PDFs und EPUBs. Zum Zeitpunkt dieses Tests hielt sie eine Bewertung von 4,5 von 5 aus nur 26 Bewertungen — eine Stichprobe, die klein genug ist, um sie nicht mit einer App mit Tausenden Bewertungen gleichzusetzen. Leser, die eine länger etablierte Erfolgsbilanz wünschen, sollten sie auch mit [Private LLM](/de/power-local-llm/private-llm-review) oder [Enclave AI](/de/power-local-llm/enclave-ai-review) vergleichen.',
    quickAnswerTop: {
      en: {
        question: 'Is Noema a good free local AI app for iPhone and Mac?',
        answer:
          'Yes, if you want a free, actively maintained app that loads models in multiple formats (GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models) and adds on-device document chat for PDFs and EPUBs. Its 4.5-star rating is based on only 26 ratings, so treat that as an early signal rather than a proven track record — apps like Private LLM and Enclave AI have longer public histories.',
        bullets: [
          'Free on the Apple App Store, no subscription and no in-app purchases listed.',
          'iPhone, iPad, Mac (Apple Silicon), and Apple Vision Pro — requires iOS/iPadOS 18 or later.',
          'Loads models in five formats: GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models.',
          'Document chat: import PDFs and EPUBs for on-device, indexed, grounded Q&A.',
          'Version 3.9 at time of writing, updated within hours of this review — check the App Store for the current version.',
          '4.5/5 rating from 26 ratings as of this review — a small sample size.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Ist Noema eine gute kostenlose lokale KI-App für iPhone und Mac?',
        answer:
          'Ja, wenn Sie eine kostenlose, aktiv gepflegte App möchten, die Modelle in mehreren Formaten lädt (GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models) und einen Dokument-Chat auf dem Gerät für PDFs und EPUBs bietet. Die 4,5-Sterne-Bewertung basiert auf nur 26 Bewertungen — betrachten Sie das eher als frühes Signal denn als belegte Erfolgsbilanz. Apps wie Private LLM und Enclave AI haben eine längere öffentliche Historie.',
        bullets: [
          'Kostenlos im Apple App Store, kein Abonnement und keine In-App-Käufe gelistet.',
          'iPhone, iPad, Mac (Apple Silicon) und Apple Vision Pro — erfordert iOS/iPadOS 18 oder neuer.',
          'Lädt Modelle in fünf Formaten: GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models.',
          'Dokument-Chat: PDFs und EPUBs importieren für indexierte, fundierte Fragen und Antworten auf dem Gerät.',
          'Version 3.9 zum Zeitpunkt der Erstellung, wenige Stunden vor diesem Test aktualisiert — aktuelle Version im App Store prüfen.',
          '4,5/5 Bewertung aus 26 Bewertungen zum Zeitpunkt dieses Tests — eine kleine Stichprobe.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'Noema est-elle une bonne application d\'IA locale gratuite pour iPhone et Mac ?',
        answer:
          'Oui, si vous voulez une application gratuite et activement maintenue qui charge des modèles dans plusieurs formats (GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models) et propose un chat de documents sur l\'appareil pour les PDF et EPUB. Sa note de 4,5 étoiles repose sur seulement 26 avis, à considérer comme un signal précoce plutôt qu\'un historique éprouvé — des applications comme Private LLM et Enclave AI ont un historique public plus long.',
        bullets: [
          'Gratuite sur l\'App Store d\'Apple, sans abonnement ni achat intégré répertorié.',
          'iPhone, iPad, Mac (Apple Silicon) et Apple Vision Pro — nécessite iOS/iPadOS 18 ou version ultérieure.',
          'Charge les modèles dans cinq formats : GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models.',
          'Chat de documents : importez des PDF et EPUB pour des questions-réponses indexées et fondées, sur l\'appareil.',
          'Version 3.9 au moment de la rédaction, mise à jour quelques heures avant ce test — vérifiez la version actuelle sur l\'App Store.',
          'Note de 4,5/5 sur seulement 26 avis au moment de ce test — un échantillon restreint.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Es Noema una buena app de IA local gratuita para iPhone y Mac?',
        answer:
          'Sí, si buscas una app gratuita y activamente mantenida que carga modelos en varios formatos (GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models) y añade chat de documentos en el dispositivo para PDF y EPUB. Su calificación de 4.5 estrellas se basa en solo 26 valoraciones, así que trátala como una señal temprana y no como un historial comprobado — apps como Private LLM y Enclave AI tienen un historial público más largo.',
        bullets: [
          'Gratis en la App Store de Apple, sin suscripción ni compras dentro de la app.',
          'iPhone, iPad, Mac (Apple Silicon) y Apple Vision Pro — requiere iOS/iPadOS 18 o posterior.',
          'Carga modelos en cinco formatos: GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models.',
          'Chat de documentos: importa PDF y EPUB para preguntas y respuestas indexadas y fundamentadas en el dispositivo.',
          'Versión 3.9 al momento de esta reseña, actualizada horas antes de su publicación — verifica la versión actual en la App Store.',
          'Calificación de 4.5/5 con solo 26 valoraciones al momento de esta reseña — una muestra pequeña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O Noema é um bom aplicativo gratuito de IA local para iPhone e Mac?',
        answer:
          'Sim, se você quer um aplicativo gratuito e mantido ativamente que carrega modelos em vários formatos (GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models) e oferece chat de documentos no dispositivo para PDFs e EPUBs. A avaliação de 4,5 estrelas se baseia em apenas 26 avaliações, então trate isso como um sinal inicial, não um histórico comprovado — apps como Private LLM e Enclave AI têm um histórico público mais longo.',
        bullets: [
          'Gratuito na App Store da Apple, sem assinatura e sem compras no aplicativo listadas.',
          'iPhone, iPad, Mac (Apple Silicon) e Apple Vision Pro — exige iOS/iPadOS 18 ou posterior.',
          'Carrega modelos em cinco formatos: GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models.',
          'Chat de documentos: importe PDFs e EPUBs para perguntas e respostas indexadas e fundamentadas no dispositivo.',
          'Versão 3.9 no momento desta análise, atualizada poucas horas antes da publicação — confira a versão atual na App Store.',
          'Avaliação de 4,5/5 com apenas 26 avaliações no momento desta análise — uma amostra pequena.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'Noemaは iPhone と Mac 向けの優れた無料ローカルAIアプリですか?',
        answer:
          '複数の形式(GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models)でモデルを読み込める、無料で積極的にメンテナンスされているアプリを求めるなら、はいです。PDFやEPUBのオンデバイス文書チャットも追加されています。4.5の評価はわずか26件の評価に基づくもので、実績というより初期のシグナルとして捉えてください — Private LLMやEnclave AIはより長い公開履歴を持っています。',
        bullets: [
          'Apple App Storeで無料。サブスクリプションやアプリ内課金は掲載されていません。',
          'iPhone、iPad、Mac(Apple Silicon)、Apple Vision Pro対応 — iOS/iPadOS 18以降が必要です。',
          '5つの形式でモデルを読み込み: GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models。',
          '文書チャット: PDFやEPUBをインポートし、オンデバイスでインデックス化された根拠のある質問応答が可能。',
          '本レビュー執筆時点でバージョン3.9。公開の数時間前に更新済み — 現在のバージョンはApp Storeで確認してください。',
          '本レビュー時点で評価4.5/5、評価数はわずか26件 — サンプルサイズは小さいです。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'Noema 是适合 iPhone 和 Mac 的优质免费本地 AI 应用吗?',
        answer:
          '如果你想要一款免费、持续维护、支持多种格式加载模型(GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models)并提供设备端文档聊天功能(支持 PDF 和 EPUB)的应用,答案是肯定的。它的 4.5 星评分仅基于 26 条评价,应视为早期信号,而非成熟的长期记录 — Private LLM 和 Enclave AI 拥有更长的公开历史。',
        bullets: [
          '在 Apple App Store 免费提供,未列出订阅或应用内购买。',
          '支持 iPhone、iPad、Mac(Apple Silicon)和 Apple Vision Pro — 需要 iOS/iPadOS 18 或更高版本。',
          '支持五种模型格式加载: GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models。',
          '文档聊天: 导入 PDF 和 EPUB,进行设备端索引、有据可查的问答。',
          '撰写本评测时的版本为 3.9,发布前几小时刚更新 — 请在 App Store 确认当前版本。',
          '截至本评测,评分为 4.5/5,仅基于 26 条评价 — 样本量较小。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل Noema تطبيق ذكاء اصطناعي محلي مجاني جيد لأجهزة iPhone و Mac؟',
        answer:
          'نعم، إذا كنت تريد تطبيقًا مجانيًا يُصان بنشاط ويُحمّل النماذج بعدة صيغ (GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation) ويضيف محادثة مستندات على الجهاز لملفات PDF وEPUB. يستند تقييمه البالغ 4.5 نجوم إلى 26 تقييمًا فقط، لذا تعامل معه كإشارة مبكرة وليس سجلًا موثوقًا طويل الأمد — تطبيقات مثل Private LLM وEnclave AI لها تاريخ عام أطول.',
        bullets: [
          'مجاني على متجر تطبيقات Apple؛ لا يوجد اشتراك ولا مشتريات داخل التطبيق مذكورة.',
          'يعمل على iPhone وiPad وMac (Apple Silicon) وApple Vision Pro — يتطلب iOS/iPadOS 18 أو أحدث.',
          'يُحمّل النماذج بخمس صيغ: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation.',
          'محادثة المستندات: استيراد ملفات PDF وEPUB للحصول على إجابات مفهرسة ومبنية على الجهاز.',
          'الإصدار 3.9 وقت كتابة هذه المراجعة، وقد تم تحديثه قبل ساعات من نشرها — تحقق من الإصدار الحالي على متجر التطبيقات.',
          'تقييم 4.5 من 5 بناءً على 26 تقييمًا فقط وقت هذه المراجعة — عينة صغيرة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'Noema는 iPhone과 Mac에 적합한 우수한 무료 로컬 AI 앱입니까?',
        answer:
          '여러 형식(GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models)으로 모델을 불러올 수 있고 PDF와 EPUB를 위한 온디바이스 문서 채팅 기능을 갖춘, 무료이면서 활발히 유지 관리되는 앱을 원한다면 그렇습니다. 4.5점 평점은 단 26개의 평가에 근거한 것이므로, 검증된 실적이 아니라 초기 신호로 받아들여야 합니다 — Private LLM과 Enclave AI는 더 긴 공개 이력을 가지고 있습니다.',
        bullets: [
          'Apple App Store에서 무료로 제공되며, 구독이나 인앱 구매가 게재되어 있지 않습니다.',
          'iPhone, iPad, Mac(Apple Silicon), Apple Vision Pro를 지원하며 iOS/iPadOS 18 이상이 필요합니다.',
          '다섯 가지 형식으로 모델을 불러옵니다: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
          '문서 채팅: PDF와 EPUB를 가져와 온디바이스에서 색인화되고 근거에 기반한 질의응답이 가능합니다.',
          '이 리뷰 작성 시점 버전은 3.9이며, 발행 몇 시간 전에 업데이트되었습니다 — 현재 버전은 App Store에서 확인하십시오.',
          '이 리뷰 시점 기준 26개의 평가만으로 4.5/5점을 받았습니다 — 표본 크기가 작습니다.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was Noema ist', anchor: 'what-is-noema' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Unterstützte Modellformate', anchor: 'supported-model-formats' },
      { label: 'Dokument-Chat: PDF- und EPUB-Q&A', anchor: 'document-chat' },
      { label: 'Plattformen und Voraussetzungen', anchor: 'platforms' },
      { label: 'Datenschutz: Was Noema sammelt und was nicht', anchor: 'privacy' },
      { label: 'Kompromisse: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Noema vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Wer Noema nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer Noema nicht nutzen sollte', anchor: 'who-should-not-use' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Lektüre', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Noema ist eine kostenlose iPhone-, iPad-, Mac- und Vision-Pro-App des unabhängigen Entwicklers Alexandru Stamate (NoemaAI LLC), die lokale KI-Modelle in fünf Formaten ausführt — GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models — und Dokument-Chat auf dem Gerät für PDFs und EPUBs bietet.',
          },
          {
            type: 'plain-terms',
            text: 'Die meisten lokalen KI-Apps fürs Handy führen nur einen einzigen Modelltyp aus. Noema kann mehrere verschiedene Typen laden, dazu Apples eigenes integriertes KI-Modell, sodass Sie nicht feststecken, wenn Ihr bevorzugtes Modell nur in einem Format erscheint — und sie kann auch ein PDF oder EPUB lesen, das Sie ihr geben, und darauf gestützte Fragen beantworten, alles ohne Internetverbindung.',
          },
        ],
        items: [
          'Preis: kostenlos im [Apple App Store](' + APP_STORE_URL + '); kein Abonnement und keine In-App-Käufe zum Zeitpunkt dieses Tests gelistet.',
          'Plattformen: iPhone, iPad, Mac (Apple Silicon) und Apple Vision Pro — keine offizielle Android-, Windows- oder Linux-App.',
          'Entwickler: [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) / [NoemaAI LLC](https://noemaai.com/ownership).',
          'Modellformate: GGUF, MLX, ExecuTorch, Core ML und Apples On-Device-Foundation-Models — fünf Formate in einer App.',
          'Dokument-Chat: PDFs und EPUBs importieren; die App indexiert Textstellen für fundierte Fragen und Antworten auf dem Gerät.',
          'Datenschutz: Der Entwickler gibt an, dass die App keine Daten sammelt; für die Nutzung ist kein Konto erforderlich.',
          'Bewertung: 4,5 von 5 aus nur 26 Bewertungen zum Zeitpunkt dieses Tests — eine kleine Stichprobe, keine lange Erfolgsbilanz.',
          'Version 3.9 zum Zeitpunkt der Erstellung, mit einem Update wenige Stunden vor diesem Test — bestätigen Sie die aktuelle Version im App Store, bevor Sie sich auf ein bestimmtes Feature verlassen.',
        ],
      },
      whatIsNoema: {
        id: 'what-is-noema',
        title: 'Was Noema ist',
        content: [
          '**Noema ist eine native Apple-App, die Open-Source-Sprachmodelle direkt auf einem iPhone, iPad, Mac oder Vision-Pro-Headset herunterlädt und ausführt, ohne dass eine serverseitige Komponente für lokalen Chat erforderlich ist.** Sobald ein Modell heruntergeladen ist, kann die App eine Antwort ohne Internetverbindung generieren.',
          'Sie wird von [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) entwickelt, dessen Unternehmen [NoemaAI LLC](https://noemaai.com/ownership) laut der eigenen Ownership-Seite der Seite die App und die Website [noemaai.com](' +
          SITE_URL +
          ') besitzt und betreibt. Die App ist im App Store unter der App-Store-ID 6751169935 gelistet. Dieser Test prüft die eigenen Angaben des Entwicklers — "0 Cloud für lokalen Chat erforderlich", keine Kontopflicht, keine Datensammlung — anhand des App-Store-Datenschutzlabels und der öffentlichen Beschreibung der App, statt die Marketingtexte einfach zu übernehmen.',
          'Die App wird ungewöhnlich häufig aktualisiert: Die für diesen Test geprüfte Version 3.9 war erst wenige Stunden vor Erstellung dieses Tests erschienen, und die "Neuerungen"-Hinweise dieser Version beschrieben Fixes für MLX-Modellstabilität, Dokumentindexierung, Vision-Modelle und Core-ML-Kompatibilität — ein Beleg für aktive, laufende Pflege statt für ein stillgelegtes oder aufgegebenes Projekt.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Noema zum Laufen zu bringen dauert wenige Minuten und erfordert keine Kontoerstellung.**',
        ],
        numberedItems: [
          {
            title: 'App herunterladen',
            whyItMatters: 'Laden Sie [Noema aus dem Apple App Store](' + APP_STORE_URL + ') kostenlos herunter. Es gibt keine Testversion, um die man sich sorgen müsste, und kein Abonnement, das später gekündigt werden muss — die vollständige App ist ab dem ersten Start kostenlos.',
          },
          {
            title: 'Modellformat und -quelle wählen',
            whyItMatters: 'Durchsuchen und laden Sie ein GGUF-Modell direkt in der App von Hugging Face herunter, oder verwenden Sie ein MLX-, ExecuTorch- oder Core-ML-Modell, oder greifen Sie auf Apples integriertes On-Device-Foundation-Model zurück, wenn Sie lieber gar nichts herunterladen möchten.',
          },
          {
            title: 'Ein Dokument für Dokument-Chat importieren',
            whyItMatters: 'Fügen Sie ein PDF oder EPUB aus der Dateien-App oder iCloud Drive hinzu. Noema indexiert die Textstellen des Dokuments auf dem Gerät, sodass Sie fundierte Fragen zu dessen Inhalt stellen können, statt nur aus dem allgemeinen Wissen des Modells zu chatten.',
          },
          {
            title: 'Chatten, zusammenfassen oder Karteikarten erstellen',
            whyItMatters: 'Sobald ein Modell und optional ein Dokument geladen sind, nutzen Sie die App vollständig offline für Chat, Dokumentzusammenfassungen, Notizen oder die Erstellung von Karteikarten.',
          },
          {
            title: 'Optional: Websuche oder einen entfernten Anbieter aktivieren',
            whyItMatters: 'Standardmäßig läuft Noema ausschließlich lokal. Die eigene Website des Entwicklers beschreibt einen "Off-grid-Modus", der externen HTTP- und HTTPS-Verkehr blockiert; Websuche oder eine Verbindung zu einem entfernten Modellanbieter ist ein ausdrückliches, separates Opt-in und nicht das Standardverhalten.',
          },
        ],
        note: 'Genaue Downloadgrößen, die aktuelle Liste unterstützter Modelle und Mindestanforderungen an das Gerät können sich zwischen App-Store-Updates ändern — bestätigen Sie die aktuellen Angaben in der App oder auf [noemaai.com](' + SITE_URL + '), bevor Sie sich bei einem begrenzten Datentarif auf einen großen Download festlegen.',
      },
      supportedModelFormats: {
        id: 'supported-model-formats',
        title: 'Unterstützte Modellformate',
        itemHeadings: true,
        content: [
          '**Noemas erklärtes Unterscheidungsmerkmal ist das Laden von Modellen in fünf verschiedenen Formaten statt nur einem.** Die meisten mobilen KI-Apps für lokale Inferenz legen sich auf eine einzige Laufzeit fest — llama.cpp und GGUF ist die häufigste Wahl in diesem Cluster von Reviews. Noema unterstützt stattdessen GGUF, MLX, ExecuTorch, Core ML und Apples eigene On-Device-Foundation-Models nebeneinander, laut der eigenen App-Store-Beschreibung der App und [noemaai.com](' + SITE_URL + ').',
        ],
        columns: ['Format', 'Was es ist', 'Warum es hier wichtig ist'],
        rows: [
          {
            'Format': 'GGUF',
            'Was es ist': 'Das von llama.cpp genutzte quantisierte Modellformat, das von den meisten Open-Source-Apps für lokale KI und der Mehrheit der von der Community quantisierten Modelle auf Hugging Face verwendet wird.',
            'Warum es hier wichtig ist': 'Bietet Zugang zum größten Pool an einsatzbereiten Community-Modelldateien, ohne auf eine formatspezifische Konvertierung warten zu müssen.',
          },
          {
            'Format': 'MLX',
            'Was es ist': 'Apples eigenes Framework für maschinelles Lernen mit Arrays, entwickelt, um den Unified Memory und die Metal-GPU-Beschleunigung von Apple Silicon direkt zu nutzen.',
            'Warum es hier wichtig ist': 'Kann auf Apple Silicon spürbar schneller laufen als ein generisches, CPU-gebundenes Format, allerdings nur mit guter Leistung auf Apple-Hardware.',
          },
          {
            'Format': 'ExecuTorch',
            'Was es ist': 'PyTorchs Laufzeitumgebung für Inferenz auf dem Gerät, entwickelt, um PyTorch-Modelle für mobile und Edge-Hardware zu exportieren und effizient auszuführen.',
            'Warum es hier wichtig ist': 'Erweitert den Pool an Modellen, die Noema laden kann, über das GGUF/MLX-Ökosystem hinaus auf Modelle, die direkt aus PyTorch exportiert wurden.',
          },
          {
            'Format': 'Core ML',
            'Was es ist': 'Apples natives Format für maschinelles Lernen, optimiert, um auf CPU, GPU und Neural Engine von Apple-Geräten zu laufen.',
            'Warum es hier wichtig ist': 'Ermöglicht der App, Modelle zu laden, die speziell für Apples Neural Engine optimiert sind, statt nur allgemeine Formate.',
          },
          {
            'Format': 'Apple Foundation Models',
            'Was es ist': 'Apples eigenes integriertes, auf dem Gerät laufendes großes Sprachmodell, systemweit verfügbar ab iOS 18 auf unterstützter Hardware.',
            'Warum es hier wichtig ist': 'Ermöglicht es, Dokument-Chat oder allgemeinen Chat sofort ohne jeglichen Modell-Download auszuprobieren, mit dem bereits auf dem Gerät vorhandenen Modell.',
          },
        ],
        note: 'Die Formatunterstützung und die genaue Modellliste können sich zwischen App-Store-Updates ändern. Bestätigen Sie die aktuelle Formatkompatibilität und die Hardwareanforderungen für ein bestimmtes Modell in der App, bevor Sie sich darauf verlassen.',
      },
      documentChat: {
        id: 'document-chat',
        title: 'Dokument-Chat: PDF- und EPUB-Q&A',
        content: [
          '**Noema importiert PDFs und EPUBs, einschließlich Lehrbücher, und indexiert deren Textstellen auf dem Gerät, sodass ein geladenes Modell Fragen beantworten kann, die auf diesem spezifischen Dokument beruhen.** Die eigene Website des Entwicklers beschreibt dies als ein "gründlicheres" Lesen eines Dokuments und als Fundierung der Antworten "in Ihren eigenen Datensätzen mit Retrieval, das auf dem Gerät bleibt" — ein Retrieval-ähnlicher Ablauf, im Geiste ähnlich der serverseitigen Retrieval-Augmented Generation (RAG), aber lokal statt gegen eine Cloud-Vektordatenbank ausgeführt.',
          'Über die Fragebeantwortung hinaus kann die App Zusammenfassungen, Notizen und Karteikarten aus einem importierten Dokument erstellen und unterstützt Vision-fähige Modelle für Dokumente oder Bilder mit Diagrammen oder gescannten Seiten.',
          'Dieser Test hat die Retrieval-Genauigkeit von Noemas Dokumentindexierung nicht unabhängig gegenüber dedizierten Desktop-RAG-Tools benchmarkt — die obige Beschreibung gibt die vom Entwickler selbst angegebenen Funktionen wieder, keinen unabhängigen Genauigkeitstest.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Plattformen und Voraussetzungen',
        itemHeadings: true,
        columns: ['Plattform', 'Was Sie erwartet', 'Wichtiger Hinweis'],
        rows: [
          {
            'Plattform': 'iPhone / iPad',
            'Was Sie erwartet': 'Erfordert laut App-Store-Eintrag iOS oder iPadOS 18 oder neuer. Führt die vollständige Modellformat-Palette und Dokument-Chat aus.',
            'Wichtiger Hinweis': 'Größere Modelle und größere importierte Dokumente benötigen mehr freien Speicher und RAM; kleinere quantisierte Modelle sind auf älteren Geräten der sicherere Einstieg.',
          },
          {
            'Plattform': 'Mac',
            'Was Sie erwartet': 'Native App für Apple-Silicon-Macs (M1 oder neuer), laut App-Store-Eintrag.',
            'Wichtiger Hinweis': 'Der Unified Memory von Apple Silicon erlaubt generell größere Modelle als ein vergleichbares iPhone oder iPad.',
          },
          {
            'Plattform': 'Apple Vision Pro',
            'Was Sie erwartet': 'Als unterstütztes Gerät im App Store gelistet.',
            'Wichtiger Hinweis': 'Dieser Test hat die Vision-Pro-Erfahrung nicht unabhängig getestet; behandeln Sie dies als im App Store gelistete Kompatibilität, nicht als praktisch verifiziertes Feature.',
          },
          {
            'Plattform': 'Android, Windows, Linux',
            'Was Sie erwartet': 'Laut eigener Website des Entwicklers keine offizielle App bei Google Play, im Microsoft Store oder in einem Linux-Paketverzeichnis.',
            'Wichtiger Hinweis': 'Leser auf diesen Plattformen sollten stattdessen [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) (Android/iOS) oder eine andere plattformübergreifende Option in Betracht ziehen.',
          },
        ],
        note: 'Die App-Größe betrug zum Zeitpunkt des Tests etwa 368 MB, mit einer Benutzeroberfläche laut App-Store-Eintrag in Englisch plus zehn weiteren Sprachen (Arabisch, Französisch, Deutsch, Hindi, Japanisch, Koreanisch, Rumänisch, vereinfachtes Chinesisch, Spanisch, Türkisch). Der App Store weist eine Altersfreigabe ab 13 Jahren aus.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz: Was Noema sammelt und was nicht',
        content: [
          '**Noemas App-Store-Datenschutzlabel gibt an, dass der Entwickler keine Daten aus der App sammelt**, und die App erfordert kein Konto, kein Login und keine Registrierung zur Nutzung.',
          'Die eigene Website des Entwicklers beschreibt einen "Off-grid-Modus", der externen HTTP- und HTTPS-Verkehr blockiert, und gibt an, dass lokaler Chat keine Cloud-Konnektivität erfordert. Optionale Funktionen — Websuche und die Verbindung zu einem entfernten Modellanbieter — werden als ausdrückliche Opt-ins beschrieben, nicht als Standard.',
        ],
        items: [
          '**Kein Konto erforderlich.** Laden Sie die App herunter und nutzen Sie sie, ohne ein Profil zu erstellen oder sich anzumelden.',
          '**Keine Datensammlung laut App-Store-Label.** Apples Datenschutz-Nährwertkennzeichnung für diesen Eintrag zeigt keine gesammelten Daten aus der App.',
          '**Off-grid-Modus.** Die eigene Website des Entwicklers beschreibt einen Modus, der externen HTTP- und HTTPS-Verkehr blockiert — für Leser, die eine feste Garantie gegen jeglichen ausgehenden Netzwerkaufruf wollen.',
          '**Optionale Netzwerkfunktionen sind Opt-in.** Websuche und Verbindungen zu entfernten Anbietern werden als Funktionen beschrieben, die Nutzer ausdrücklich aktivieren müssen, nicht als Standardzustand.',
          '**Lokale API und Noema Relay.** Die Website des Entwicklers beschreibt eine private lokale Netzwerk-API, um andere Apps mit in Noema laufenden Modellen zu verbinden, sowie ein "Noema Relay"-Feature für geräteübergreifenden Modellzugriff — dieser Test behandelt dies als vom Entwickler beschriebene Funktionen, nicht als unabhängig verifizierte Netzwerksicherheitsprüfungen.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Kompromisse: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Was das in der Praxis bedeutet', 'Einschränkung / Vorbehalt'],
        rows: [
          {
            'Vorteil': 'Kostenlos, kein Abonnement',
            'Was das in der Praxis bedeutet': 'Jede Funktion, einschließlich Dokument-Chat, ist ab dem ersten Start kostenlos verfügbar.',
            'Einschränkung / Vorbehalt': 'Eine kostenlose Ein-Entwickler-App hat weniger institutionellen Rückhalt als eine kostenpflichtige App eines größeren, länger etablierten Teams.',
          },
          {
            'Vorteil': 'Fünf unterstützte Modellformate',
            'Was das in der Praxis bedeutet': 'GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models decken einen breiteren Teil des Modell-Ökosystems ab als ein Konkurrent mit nur einem Format.',
            'Einschränkung / Vorbehalt': 'Mehr Formate können mehr Randfälle bedeuten; die eigenen Release Notes der App von Juli bis September beschreiben laufende Korrekturen an der MLX- und Core-ML-Kompatibilität.',
          },
          {
            'Vorteil': 'Dokument-Chat auf dem Gerät',
            'Was das in der Praxis bedeutet': 'Importieren Sie ein PDF oder EPUB und stellen Sie fundierte Fragen, erstellen Sie Zusammenfassungen oder Karteikarten, ohne das Dokument irgendwohin hochzuladen.',
            'Einschränkung / Vorbehalt': 'Die Retrieval-Genauigkeit bei langen oder komplexen Dokumenten wurde von PromptQuorum nicht unabhängig gegenüber dedizierten Desktop-RAG-Tools benchmarkt.',
          },
          {
            'Vorteil': 'Kein Konto, keine Datensammlung',
            'Was das in der Praxis bedeutet': 'Nutzen Sie die App sofort, ohne sich für irgendetwas anmelden zu müssen; das App-Store-Datenschutzlabel zeigt keine gesammelten Daten.',
            'Einschränkung / Vorbehalt': 'Dieser Test hat den Quellcode der App nicht unabhängig geprüft; er stützt sich auf das App-Store-Datenschutzlabel und die eigenen Angaben des Entwicklers.',
          },
          {
            'Vorteil': 'Sehr aktive Update-Frequenz',
            'Was das in der Praxis bedeutet': 'Häufige Releases deuten auf eine aktiv gepflegte App hin statt auf ein aufgegebenes Projekt.',
            'Einschränkung / Vorbehalt': 'Eine hohe Release-Frequenz bedeutet auch, dass bestimmte Versionsnummern, Feature-Details und Fehlerzustände in diesem Test schneller veralten können als bei einer langsamer entwickelten App — prüfen Sie das aktuelle Verhalten in der App.',
          },
          {
            'Vorteil': 'Bewertet mit 4,5 von 5',
            'Was das in der Praxis bedeutet': 'Die durchschnittliche Bewertung ist stark.',
            'Einschränkung / Vorbehalt': 'Dieser Durchschnitt basiert zum Zeitpunkt des Tests auf nur 26 Bewertungen — eine kleine Stichprobe, die nicht mit einer App mit einer großen, etablierten Bewertungsbasis gleichgesetzt werden sollte.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Noema vs. Alternativen',
        columns: ['App', 'Plattformen', 'Preis', 'Modellflexibilität', 'Wichtiger Unterschied'],
        rows: [
          {
            'App': 'Noema',
            'Plattformen': 'iPhone/iPad/Mac/Vision Pro (nur Apple)',
            'Preis': 'Kostenlos',
            'Modellflexibilität': 'Fünf Formate: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models',
            'Wichtiger Unterschied': 'Multi-Format-Laden plus Dokument-Chat auf dem Gerät; bisher kleine Bewertungsstichprobe',
          },
          {
            'App': '[Private LLM](/de/power-local-llm/private-llm-review)',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Preis': '4,99 $ Einmalkauf',
            'Modellflexibilität': '140+ kuratierte Modelle; OmniQuant/GPTQ-Quantisierung',
            'Wichtiger Unterschied': 'Kostenpflichtig, closed-source, kuratierte Bibliothek mit dreijähriger öffentlicher Release-Historie',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iPhone/iPad, mit teilweiser Android-Unterstützung',
            'Preis': 'Kostenlos, Open Source',
            'Modellflexibilität': 'Jede GGUF-Datei, die der Nutzer von Hugging Face oder anderswo bezieht',
            'Wichtiger Unterschied': 'Kostenlos und Open Source; nur GGUF, kein integrierter Dokument-Chat',
          },
          {
            'App': '[Enclave AI](/de/power-local-llm/enclave-ai-review)',
            'Plattformen': 'Siehe aktuellen Eintrag',
            'Preis': 'Siehe aktuellen Eintrag',
            'Modellflexibilität': 'Siehe vollständigen Test für aktuelle Modellunterstützung',
            'Wichtiger Unterschied': 'Siehe den vollständigen Enclave-AI-Test für einen detaillierten Vergleich',
          },
          {
            'App': '[Locally AI](/de/power-local-llm/locally-ai-review)',
            'Plattformen': 'iPhone/iPad/Mac',
            'Preis': 'Kostenlos',
            'Modellflexibilität': 'Basiert ausschließlich auf Apple MLX; Zugang zu Apples On-Device-Foundation-Model',
            'Wichtiger Unterschied': 'Kostenlose, nur-MLX-Alternative, gegenüber Noemas Unterstützung für fünf Formate',
          },
        ],
        note: 'Plattform-, Preis- und Feature-Details für Drittanbieter-Apps ändern sich häufig — prüfen Sie die aktuellen Angaben im jeweiligen App-Eintrag, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer Noema nutzen sollte',
        items: [
          '**Apple-Nutzer, die Formatflexibilität wollen.** Leser, die bereits Modelldateien in unterschiedlichen Formaten haben — oder die GGUF-, MLX-, ExecuTorch- und Core-ML-Modelle ausprobieren möchten, ohne die App zu wechseln — bekommen alle vier plus Apples integriertes Foundation Model an einem Ort.',
          '**Leser, die On-Device-Dokument-Q&A wollen.** Ein PDF oder EPUB zu importieren und fundierte Fragen lokal zu stellen, ist ein eigenständiges Feature, das nicht jede mobile App für lokale KI bietet.',
          '**Budgetbewusste Nutzer.** Die App ist kostenlos, ohne Abonnement — wichtig für Leser, die lokale KI ohne Vorabkosten ausprobieren möchten.',
          '**Early Adopter, die mit einer jungen Bewertungshistorie leben können.** Leser, die sich nicht daran stören, dass der 4,5-Sterne-Durchschnitt auf nur 26 Bewertungen beruht, und die eine aktiv, häufig aktualisierte App gegenüber einer mit längerer öffentlicher Erfolgsbilanz bevorzugen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer Noema nicht nutzen sollte',
        items: [
          '**Android-, Windows- oder Linux-Nutzer.** Noema hat keine offizielle App auf einer dieser Plattformen — wählen Sie stattdessen [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) (teilweise Android-Unterstützung) oder eine andere plattformübergreifende Option.',
          '**Leser, die vor dem Vertrauen in eine App eine lange, etablierte Bewertungshistorie wollen.** Mit nur 26 Bewertungen zum Zeitpunkt dieses Tests sollten Leser, die auf sozialen Beweis Wert legen, auch [Private LLM](/de/power-local-llm/private-llm-review) abwägen, das eine mehrjährige öffentliche Release-Historie hat.',
          '**Leser, die die größtmögliche kuratierte Modellbibliothek wollen.** Noemas Formatflexibilität ist groß, aber sie liefert nicht die 140+ Modelle umfassende kuratierte Bibliothek, wie es [Private LLM](/de/power-local-llm/private-llm-review) tut.',
          '**Teams, die eine zentral verwaltete Bereitstellung wollen.** Noema ist eine Einzelnutzer-, Einzelgeräte-Consumer-App ohne Admin-Konsole oder Team-Abrechnung — Organisationen sollten stattdessen selbstgehostete, serverseitige Infrastruktur für lokale LLMs in Betracht ziehen.',
          '**Leser, die unabhängige Drittbenchmarks der Dokument-Retrieval-Genauigkeit benötigen.** Dieser Test stützt sich auf die eigene Beschreibung des Dokument-Chat-Features durch den Entwickler, nicht auf einen unabhängigen Genauigkeitsbenchmark gegenüber dedizierten RAG-Tools.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wie viel kostet Noema?',
            a: 'Noema ist [kostenlos im Apple App Store](' + APP_STORE_URL + '), verifiziert für diesen Test am 2026-09-12. Es gibt kein Abonnement und keine In-App-Käufe im aktuellen App-Store-Eintrag. Die App-Store-Verfügbarkeit kann sich mit der Zeit ändern — prüfen Sie den aktuellen Preis vor dem Herunterladen.',
          },
          {
            q: 'Welche Modellformate unterstützt Noema?',
            a: 'Noema lädt Modelle in fünf Formaten: GGUF, MLX, ExecuTorch, Core ML und Apples eigene On-Device-Foundation-Models, laut der eigenen App-Store-Beschreibung der App und [noemaai.com](' + SITE_URL + '). Diese Multi-Format-Unterstützung ist breiter als bei den meisten konkurrierenden Apps mit nur einem Format, die sich typischerweise nur auf GGUF oder nur auf MLX festlegen.',
          },
          {
            q: 'Ist Noema unter Android oder Windows verfügbar?',
            a: 'Es existiert keine offizielle Version bei Google Play, im Microsoft Store oder in einem Linux-Paketverzeichnis. Noema ist speziell für iPhone, iPad, Mac und Apple Vision Pro gebaut.',
          },
          {
            q: 'Wer entwickelt Noema?',
            a: 'Noema wird von [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) entwickelt; die Website [noemaai.com](' + SITE_URL + ') und die App werden von NoemaAI LLC besessen und betrieben, laut der eigenen [Ownership-Seite](https://noemaai.com/ownership) der Website.',
          },
          {
            q: 'Was ist Dokument-Chat in Noema?',
            a: 'Dokument-Chat lässt Sie ein PDF oder EPUB, einschließlich Lehrbücher, importieren und fundierte Fragen zu diesem spezifischen Dokument stellen. Noema indexiert die Textstellen des Dokuments auf dem Gerät — ein Retrieval-ähnlicher Ablauf, im Geiste ähnlich der serverseitigen RAG, aber lokal ausgeführt. Die App kann außerdem Zusammenfassungen, Notizen und Karteikarten aus einem importierten Dokument erstellen.',
          },
          {
            q: 'Funktioniert Noema vollständig offline?',
            a: 'Ja, für lokalen Chat und Dokument-Chat, sobald ein Modell und ein etwaiges Dokument geladen sind. Die eigene Website des Entwicklers beschreibt einen "Off-grid-Modus", der externen HTTP- und HTTPS-Verkehr blockiert; optionale Funktionen wie Websuche oder ein entfernter Modellanbieter sind separate, ausdrückliche Opt-ins und nicht der Standard.',
          },
          {
            q: 'Sammelt Noema persönliche Daten?',
            a: 'Apples App-Store-Datenschutz-Nährwertkennzeichnung für diesen Eintrag gibt an, dass der Entwickler keine Daten aus der App sammelt, und es ist kein Konto oder Login erforderlich. Dieser Test stützt sich auf das App-Store-Datenschutzlabel und die eigenen Angaben des Entwicklers, nicht auf eine unabhängige Quellcode-Prüfung.',
          },
          {
            q: 'Wie verlässlich ist Noemas 4,5-Sterne-Bewertung?',
            a: 'Der Durchschnitt von 4,5 von 5 basiert auf nur 26 Bewertungen zum Zeitpunkt dieses Tests — eine kleine Stichprobe im Vergleich zu Apps mit Hunderten oder Tausenden Bewertungen. Betrachten Sie es als frühes, positives Signal statt als Beweis für eine lange, belegte Erfolgsbilanz, und prüfen Sie die aktuelle Bewertungsanzahl im App Store, bevor Sie sich darauf verlassen.',
          },
          {
            q: 'Wie schneidet Noema im Vergleich zu Private LLM ab?',
            a: 'Noema ist kostenlos und unterstützt fünf Modellformate (GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models) plus Dokument-Chat auf dem Gerät, hat aber zum Zeitpunkt dieses Tests nur 26 Bewertungen. [Private LLM](/de/power-local-llm/private-llm-review) kostet 4,99 $ als Einmalkauf, liefert eine kuratierte Bibliothek mit 140+ Modellen und hat eine dreijährige öffentliche Release-Historie. Wählen Sie Noema für Formatflexibilität und Dokument-Chat ohne Kosten; wählen Sie Private LLM für eine länger etablierte, kuratierte Erfahrung.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Noema sticht im Cluster der mobilen KI-Apps für lokale Inferenz aus einem konkreten, überprüfbaren Grund hervor: Sie lädt Modelle in fünf verschiedenen Formaten — GGUF, MLX, ExecuTorch, Core ML und Apples eigenen Foundation Models —, während sich die meisten konkurrierenden Apps auf nur ein oder zwei festlegen. Sie kombiniert das mit Dokument-Chat auf dem Gerät für PDFs und EPUBs, alles kostenlos ohne Abonnement. Ihre sehr häufige Update-Frequenz, belegt durch eine Version, die wenige Stunden vor diesem Test erschien, deutet auf aktive Pflege statt auf ein aufgegebenes Nebenprojekt hin. Der ehrliche Vorbehalt betrifft ihre Jugend als bewertetes Produkt: Ein 4,5-Sterne-Durchschnitt auf Basis von nur 26 Bewertungen ist ein positives frühes Signal, aber keine Erfolgsbilanz mit großer Stichprobe, wie sie [Private LLM](/de/power-local-llm/private-llm-review) oder [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) nach Jahren im App Store vorweisen können. Leser, die Formatflexibilität und Dokument-Chat zu null Kosten wollen, sollten sie ausprobieren; Leser, die sozialen Beweis und eine längere öffentliche Historie stärker gewichten, sollten stattdessen mit Private LLM oder PocketPal AI beginnen und Noema erneut betrachten, sobald ihre Bewertungsanzahl wächst.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Noema im App Store](' + APP_STORE_URL + ') — Preis, Plattformkompatibilität, Datenschutzlabel, Bewertung, Version und Größe.',
          '[Offizielle Noema-Website (noemaai.com)](' + SITE_URL + ') — Produktübersicht, unterstützte Modellformate, Dokument-Chat- und Datenschutzangaben.',
          '[Noema-Ownership-Seite](https://noemaai.com/ownership) — juristische Person (NoemaAI LLC) hinter der App und der Website.',
          '[Alexandru Stamate im App Store](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) — Eintrag des Entwicklerkontos.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Private LLM Test](/de/power-local-llm/private-llm-review) — eine kostenpflichtige Alternative mit kuratierter Bibliothek und längerer Release-Historie.',
          '[PocketPal AI Test](/de/power-local-llm/pocketpal-ai-review) — eine kostenlose, Open-Source-Alternative nur für GGUF.',
          '[Enclave AI Test](/de/power-local-llm/enclave-ai-review) — eine weitere On-Device-KI-App zum Vergleich.',
          '[Locally AI Test](/de/power-local-llm/locally-ai-review) — eine kostenlose, nur-Apple-MLX-Alternative.',
          '[Das vollständige Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory) — ein umfassenderes Verzeichnis von Tools für lokale LLMs auf allen Plattformen.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/noema-review-hero-fr.webp',
    title: 'Noema : notre avis (2026) — IA multi-format en local pour iPhone, iPad et Mac',
    seoTitle: 'Noema : avis 2026 — IA locale pour iPhone et Mac',
    intro:
      'Noema, référencée sur l\'App Store sous le nom « Noema: Local AI & Offline LLM » (compte développeur : Alexandru Stamate ; société : [NoemaAI LLC](https://noemaai.com/ownership)), est une application gratuite pour iPhone, iPad, Mac (Apple Silicon) et Apple Vision Pro qui exécute des modèles de langage open source entièrement sur l\'appareil. Elle est gratuite au téléchargement sur l\'[App Store d\'Apple](' +
      APP_STORE_URL +
      '), sans abonnement ni achat intégré. Au moment de la rédaction, la version en cours était la 3.9, notée 4,5 sur 5 à partir de seulement 26 avis — consultez la fiche App Store actuelle pour les chiffres à jour, l\'application recevant des mises à jour à un rythme quasi quotidien. Ce qui distingue Noema de nombreuses applications mobiles d\'IA locale limitées à un seul format, c\'est qu\'elle charge les modèles de cinq façons différentes — GGUF, MLX, ExecuTorch, Core ML et les Foundation Models d\'Apple — au lieu d\'enfermer l\'utilisateur dans un seul environnement d\'exécution. Elle prend aussi en charge le chat de documents : importer des PDF et des EPUB et poser des questions fondées sur des passages indexés, un fonctionnement de type recherche documentaire qui s\'exécute entièrement sur l\'appareil plutôt que via un pipeline RAG dans le cloud.',
    metaDescription:
      'Avis Noema : application gratuite iPhone/iPad/Mac prenant en charge 5 formats de modèles (GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models) et le chat de documents PDF/EPUB en local. Prix, confidentialité et alternatives.',
    twitterDescription:
      'Avis Noema : une application gratuite pour iPhone, iPad et Mac qui exécute des modèles d\'IA locale dans cinq formats — GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models — plus un chat de documents en local pour les PDF et EPUB.',
    audience:
      'Utilisateurs d\'iPhone, iPad et Mac évaluant une application gratuite multi-format d\'IA locale avec chat de documents face à des alternatives comme Private LLM, PocketPal AI et Enclave AI — couvre les formats pris en charge, les questions-réponses documentaires, la confidentialité et la réserve liée au petit échantillon d\'avis.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Noema review',
    targetKeywords: [
      'noema review',
      'noema app iphone',
      'noema local ai',
      'noema ios app',
      'noema vs private llm',
      'on-device ai document chat',
      'gguf mlx executorch core ml app',
      'best free local llm app for iphone',
    ],
    current_models_mentioned: ['Noema 1.5 2B'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac Apple Silicon (M1 ou ultérieur)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Noema est une application gratuite iOS, iPadOS, macOS et visionOS, développée par le développeur indépendant Alexandru Stamate ([NoemaAI LLC](https://noemaai.com/ownership)), qui exécute des modèles de langage open source entièrement sur l\'appareil dans cinq formats différents : GGUF, MLX, ExecuTorch, Core ML et les Foundation Models d\'Apple.** Elle ne coûte rien sur l\'[App Store d\'Apple](' +
      APP_STORE_URL +
      '), sans abonnement ni achat intégré, et ajoute un chat de documents en local pour les PDF et EPUB. Au moment de cet avis, elle affichait une note de 4,5 sur 5 à partir de seulement 26 avis — un échantillon suffisamment restreint pour ne pas être mis sur le même plan qu\'une application comptant des milliers d\'avis. Les lecteurs souhaitant un historique plus long devraient aussi comparer avec [Private LLM](/fr/power-local-llm/private-llm-review) ou [Enclave AI](/fr/power-local-llm/enclave-ai-review).',
    quickAnswerTop: {
      en: {
        question: 'Is Noema a good free local AI app for iPhone and Mac?',
        answer:
          'Yes, if you want a free, actively maintained app that loads models in multiple formats (GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models) and adds on-device document chat for PDFs and EPUBs. Its 4.5-star rating is based on only 26 ratings, so treat that as an early signal rather than a proven track record — apps like Private LLM and Enclave AI have longer public histories.',
        bullets: [
          'Free on the Apple App Store, no subscription and no in-app purchases listed.',
          'iPhone, iPad, Mac (Apple Silicon), and Apple Vision Pro — requires iOS/iPadOS 18 or later.',
          'Loads models in five formats: GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models.',
          'Document chat: import PDFs and EPUBs for on-device, indexed, grounded Q&A.',
          'Version 3.9 at time of writing, updated within hours of this review — check the App Store for the current version.',
          '4.5/5 rating from 26 ratings as of this review — a small sample size.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Ist Noema eine gute kostenlose lokale KI-App für iPhone und Mac?',
        answer:
          'Ja, wenn Sie eine kostenlose, aktiv gepflegte App möchten, die Modelle in mehreren Formaten lädt (GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models) und einen Dokument-Chat auf dem Gerät für PDFs und EPUBs bietet. Die 4,5-Sterne-Bewertung basiert auf nur 26 Bewertungen — betrachten Sie das eher als frühes Signal denn als belegte Erfolgsbilanz. Apps wie Private LLM und Enclave AI haben eine längere öffentliche Historie.',
        bullets: [
          'Kostenlos im Apple App Store, kein Abonnement und keine In-App-Käufe gelistet.',
          'iPhone, iPad, Mac (Apple Silicon) und Apple Vision Pro — erfordert iOS/iPadOS 18 oder neuer.',
          'Lädt Modelle in fünf Formaten: GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models.',
          'Dokument-Chat: PDFs und EPUBs importieren für indexierte, fundierte Fragen und Antworten auf dem Gerät.',
          'Version 3.9 zum Zeitpunkt der Erstellung, wenige Stunden vor diesem Test aktualisiert — aktuelle Version im App Store prüfen.',
          '4,5/5 Bewertung aus 26 Bewertungen zum Zeitpunkt dieses Tests — eine kleine Stichprobe.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'Noema est-elle une bonne application d\'IA locale gratuite pour iPhone et Mac ?',
        answer:
          'Oui, si vous voulez une application gratuite et activement maintenue qui charge des modèles dans plusieurs formats (GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models) et propose un chat de documents sur l\'appareil pour les PDF et EPUB. Sa note de 4,5 étoiles repose sur seulement 26 avis, à considérer comme un signal précoce plutôt qu\'un historique éprouvé — des applications comme Private LLM et Enclave AI ont un historique public plus long.',
        bullets: [
          'Gratuite sur l\'App Store d\'Apple, sans abonnement ni achat intégré répertorié.',
          'iPhone, iPad, Mac (Apple Silicon) et Apple Vision Pro — nécessite iOS/iPadOS 18 ou version ultérieure.',
          'Charge les modèles dans cinq formats : GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models.',
          'Chat de documents : importez des PDF et EPUB pour des questions-réponses indexées et fondées, sur l\'appareil.',
          'Version 3.9 au moment de la rédaction, mise à jour quelques heures avant ce test — vérifiez la version actuelle sur l\'App Store.',
          'Note de 4,5/5 sur seulement 26 avis au moment de ce test — un échantillon restreint.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Es Noema una buena app de IA local gratuita para iPhone y Mac?',
        answer:
          'Sí, si buscas una app gratuita y activamente mantenida que carga modelos en varios formatos (GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models) y añade chat de documentos en el dispositivo para PDF y EPUB. Su calificación de 4.5 estrellas se basa en solo 26 valoraciones, así que trátala como una señal temprana y no como un historial comprobado — apps como Private LLM y Enclave AI tienen un historial público más largo.',
        bullets: [
          'Gratis en la App Store de Apple, sin suscripción ni compras dentro de la app.',
          'iPhone, iPad, Mac (Apple Silicon) y Apple Vision Pro — requiere iOS/iPadOS 18 o posterior.',
          'Carga modelos en cinco formatos: GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models.',
          'Chat de documentos: importa PDF y EPUB para preguntas y respuestas indexadas y fundamentadas en el dispositivo.',
          'Versión 3.9 al momento de esta reseña, actualizada horas antes de su publicación — verifica la versión actual en la App Store.',
          'Calificación de 4.5/5 con solo 26 valoraciones al momento de esta reseña — una muestra pequeña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O Noema é um bom aplicativo gratuito de IA local para iPhone e Mac?',
        answer:
          'Sim, se você quer um aplicativo gratuito e mantido ativamente que carrega modelos em vários formatos (GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models) e oferece chat de documentos no dispositivo para PDFs e EPUBs. A avaliação de 4,5 estrelas se baseia em apenas 26 avaliações, então trate isso como um sinal inicial, não um histórico comprovado — apps como Private LLM e Enclave AI têm um histórico público mais longo.',
        bullets: [
          'Gratuito na App Store da Apple, sem assinatura e sem compras no aplicativo listadas.',
          'iPhone, iPad, Mac (Apple Silicon) e Apple Vision Pro — exige iOS/iPadOS 18 ou posterior.',
          'Carrega modelos em cinco formatos: GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models.',
          'Chat de documentos: importe PDFs e EPUBs para perguntas e respostas indexadas e fundamentadas no dispositivo.',
          'Versão 3.9 no momento desta análise, atualizada poucas horas antes da publicação — confira a versão atual na App Store.',
          'Avaliação de 4,5/5 com apenas 26 avaliações no momento desta análise — uma amostra pequena.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'Noemaは iPhone と Mac 向けの優れた無料ローカルAIアプリですか?',
        answer:
          '複数の形式(GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models)でモデルを読み込める、無料で積極的にメンテナンスされているアプリを求めるなら、はいです。PDFやEPUBのオンデバイス文書チャットも追加されています。4.5の評価はわずか26件の評価に基づくもので、実績というより初期のシグナルとして捉えてください — Private LLMやEnclave AIはより長い公開履歴を持っています。',
        bullets: [
          'Apple App Storeで無料。サブスクリプションやアプリ内課金は掲載されていません。',
          'iPhone、iPad、Mac(Apple Silicon)、Apple Vision Pro対応 — iOS/iPadOS 18以降が必要です。',
          '5つの形式でモデルを読み込み: GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models。',
          '文書チャット: PDFやEPUBをインポートし、オンデバイスでインデックス化された根拠のある質問応答が可能。',
          '本レビュー執筆時点でバージョン3.9。公開の数時間前に更新済み — 現在のバージョンはApp Storeで確認してください。',
          '本レビュー時点で評価4.5/5、評価数はわずか26件 — サンプルサイズは小さいです。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'Noema 是适合 iPhone 和 Mac 的优质免费本地 AI 应用吗?',
        answer:
          '如果你想要一款免费、持续维护、支持多种格式加载模型(GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models)并提供设备端文档聊天功能(支持 PDF 和 EPUB)的应用,答案是肯定的。它的 4.5 星评分仅基于 26 条评价,应视为早期信号,而非成熟的长期记录 — Private LLM 和 Enclave AI 拥有更长的公开历史。',
        bullets: [
          '在 Apple App Store 免费提供,未列出订阅或应用内购买。',
          '支持 iPhone、iPad、Mac(Apple Silicon)和 Apple Vision Pro — 需要 iOS/iPadOS 18 或更高版本。',
          '支持五种模型格式加载: GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models。',
          '文档聊天: 导入 PDF 和 EPUB,进行设备端索引、有据可查的问答。',
          '撰写本评测时的版本为 3.9,发布前几小时刚更新 — 请在 App Store 确认当前版本。',
          '截至本评测,评分为 4.5/5,仅基于 26 条评价 — 样本量较小。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل Noema تطبيق ذكاء اصطناعي محلي مجاني جيد لأجهزة iPhone و Mac؟',
        answer:
          'نعم، إذا كنت تريد تطبيقًا مجانيًا يُصان بنشاط ويُحمّل النماذج بعدة صيغ (GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation) ويضيف محادثة مستندات على الجهاز لملفات PDF وEPUB. يستند تقييمه البالغ 4.5 نجوم إلى 26 تقييمًا فقط، لذا تعامل معه كإشارة مبكرة وليس سجلًا موثوقًا طويل الأمد — تطبيقات مثل Private LLM وEnclave AI لها تاريخ عام أطول.',
        bullets: [
          'مجاني على متجر تطبيقات Apple؛ لا يوجد اشتراك ولا مشتريات داخل التطبيق مذكورة.',
          'يعمل على iPhone وiPad وMac (Apple Silicon) وApple Vision Pro — يتطلب iOS/iPadOS 18 أو أحدث.',
          'يُحمّل النماذج بخمس صيغ: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation.',
          'محادثة المستندات: استيراد ملفات PDF وEPUB للحصول على إجابات مفهرسة ومبنية على الجهاز.',
          'الإصدار 3.9 وقت كتابة هذه المراجعة، وقد تم تحديثه قبل ساعات من نشرها — تحقق من الإصدار الحالي على متجر التطبيقات.',
          'تقييم 4.5 من 5 بناءً على 26 تقييمًا فقط وقت هذه المراجعة — عينة صغيرة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'Noema는 iPhone과 Mac에 적합한 우수한 무료 로컬 AI 앱입니까?',
        answer:
          '여러 형식(GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models)으로 모델을 불러올 수 있고 PDF와 EPUB를 위한 온디바이스 문서 채팅 기능을 갖춘, 무료이면서 활발히 유지 관리되는 앱을 원한다면 그렇습니다. 4.5점 평점은 단 26개의 평가에 근거한 것이므로, 검증된 실적이 아니라 초기 신호로 받아들여야 합니다 — Private LLM과 Enclave AI는 더 긴 공개 이력을 가지고 있습니다.',
        bullets: [
          'Apple App Store에서 무료로 제공되며, 구독이나 인앱 구매가 게재되어 있지 않습니다.',
          'iPhone, iPad, Mac(Apple Silicon), Apple Vision Pro를 지원하며 iOS/iPadOS 18 이상이 필요합니다.',
          '다섯 가지 형식으로 모델을 불러옵니다: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
          '문서 채팅: PDF와 EPUB를 가져와 온디바이스에서 색인화되고 근거에 기반한 질의응답이 가능합니다.',
          '이 리뷰 작성 시점 버전은 3.9이며, 발행 몇 시간 전에 업데이트되었습니다 — 현재 버전은 App Store에서 확인하십시오.',
          '이 리뷰 시점 기준 26개의 평가만으로 4.5/5점을 받았습니다 — 표본 크기가 작습니다.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Ce qu\'est Noema', anchor: 'what-is-noema' },
      { label: 'Comment démarrer', anchor: 'how-to-get-started' },
      { label: 'Formats de modèles pris en charge', anchor: 'supported-model-formats' },
      { label: 'Chat de documents : questions-réponses PDF et EPUB', anchor: 'document-chat' },
      { label: 'Plateformes et prérequis', anchor: 'platforms' },
      { label: 'Confidentialité : ce que Noema collecte ou non', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'Noema face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'À qui Noema est destinée', anchor: 'who-should-use' },
      { label: 'À qui Noema n\'est pas destinée', anchor: 'who-should-not-use' },
      { label: 'Questions fréquemment posées', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'En bref',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Noema est une application gratuite pour iPhone, iPad, Mac et Vision Pro du développeur indépendant Alexandru Stamate (NoemaAI LLC) qui exécute des modèles d\'IA locale dans cinq formats — GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models — et ajoute un chat de documents en local pour les PDF et EPUB.',
          },
          {
            type: 'plain-terms',
            text: 'La plupart des applications d\'IA locale pour téléphone ne font tourner qu\'un seul type de fichier de modèle. Noema peut en charger plusieurs types différents, plus le modèle intégré d\'Apple, afin que vous ne soyez pas bloqué si votre modèle préféré n\'existe que dans un seul format — et elle peut aussi lire un PDF ou un EPUB que vous lui fournissez et répondre à des questions fondées sur ce document, le tout sans connexion internet.',
          },
        ],
        items: [
          'Prix : gratuite sur l\'[App Store d\'Apple](' + APP_STORE_URL + ') ; ni abonnement ni achat intégré répertorié au moment de cet avis.',
          'Plateformes : iPhone, iPad, Mac (Apple Silicon) et Apple Vision Pro — aucune application Android, Windows ou Linux officielle.',
          'Développeur : [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) / [NoemaAI LLC](https://noemaai.com/ownership).',
          'Formats de modèles : GGUF, MLX, ExecuTorch, Core ML et les Foundation Models d\'Apple sur l\'appareil — cinq formats dans une seule application.',
          'Chat de documents : importez des PDF et EPUB ; l\'application indexe les passages pour des questions-réponses fondées, en local.',
          'Confidentialité : le développeur déclare que l\'application ne collecte aucune donnée ; aucun compte n\'est requis pour l\'utiliser.',
          'Note : 4,5 sur 5 à partir de seulement 26 avis au moment de cet avis — un échantillon restreint, pas un long historique.',
          'Version 3.9 au moment de la rédaction, avec une mise à jour publiée quelques heures avant cet avis — confirmez la version actuelle sur l\'App Store avant de compter sur une fonctionnalité précise.',
        ],
      },
      whatIsNoema: {
        id: 'what-is-noema',
        title: 'Ce qu\'est Noema',
        content: [
          '**Noema est une application Apple native qui télécharge et exécute des modèles de langage open source directement sur un iPhone, un iPad, un Mac ou un casque Vision Pro, sans aucun composant serveur requis pour le chat local.** Une fois un modèle téléchargé, l\'application peut générer une réponse sans connexion internet.',
          'Elle est développée par [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674), dont la société [NoemaAI LLC](https://noemaai.com/ownership) possède et exploite à la fois l\'application et le site [noemaai.com](' +
          SITE_URL +
          '), selon la propre page de propriété du site. L\'application est référencée sur l\'App Store sous l\'identifiant 6751169935. Cet avis évalue les affirmations du développeur lui-même — « 0 cloud requis pour le chat local », aucune exigence de compte, aucune collecte de données — en les confrontant à l\'étiquette de confidentialité de l\'App Store et à la description publique de l\'application, plutôt que de prendre le discours marketing au pied de la lettre.',
          'L\'application est mise à jour à un rythme inhabituellement soutenu : la version examinée pour cet avis, la 3.9, avait été publiée quelques heures avant la rédaction de cet avis, et les notes de version « nouveautés » de cette mise à jour décrivaient des corrections pour la stabilité des modèles MLX, l\'indexation des documents, les modèles de vision et la compatibilité Core ML — preuve d\'une maintenance active et continue plutôt que d\'un projet à l\'arrêt ou abandonné.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Comment démarrer',
        content: [
          '**Mettre Noema en route prend quelques minutes et ne nécessite aucune création de compte.**',
        ],
        numberedItems: [
          {
            title: 'Télécharger l\'application',
            whyItMatters: 'Récupérez [Noema sur l\'App Store d\'Apple](' + APP_STORE_URL + ') gratuitement. Il n\'y a pas de palier d\'essai à surveiller ni d\'abonnement à résilier plus tard — l\'application complète est gratuite dès le premier lancement.',
          },
          {
            title: 'Choisir un format et une source de modèle',
            whyItMatters: 'Parcourez et téléchargez un modèle GGUF depuis Hugging Face directement dans l\'application, ou utilisez un modèle MLX, ExecuTorch ou Core ML, ou repliez-vous sur le Foundation Model intégré d\'Apple si vous préférez ne rien télécharger du tout.',
          },
          {
            title: 'Importer un document pour le chat de documents',
            whyItMatters: 'Ajoutez un PDF ou un EPUB depuis l\'application Fichiers ou iCloud Drive. Noema indexe les passages du document en local afin que vous puissiez poser des questions fondées sur son contenu plutôt que de discuter uniquement à partir des connaissances générales du modèle.',
          },
          {
            title: 'Discuter, résumer ou générer des fiches de révision',
            whyItMatters: 'Une fois un modèle et, éventuellement, un document chargés, utilisez l\'application entièrement hors ligne pour le chat, les résumés de documents, les notes ou la génération de fiches de révision.',
          },
          {
            title: 'Optionnel : activer la recherche web ou un fournisseur distant',
            whyItMatters: 'Par défaut, Noema fonctionne uniquement en local. Le site du développeur décrit un « mode hors réseau » qui bloque le trafic HTTP et HTTPS externe ; la recherche web ou un fournisseur de modèle distant est une option explicite et distincte, et non le comportement par défaut.',
          },
        ],
        note: 'Les tailles de téléchargement exactes, la liste actuelle des modèles pris en charge et les prérequis matériels minimums peuvent changer d\'une mise à jour de l\'App Store à l\'autre — vérifiez les informations actuelles dans l\'application ou sur [noemaai.com](' + SITE_URL + ') avant de vous engager dans un gros téléchargement avec un forfait de données limité.',
      },
      supportedModelFormats: {
        id: 'supported-model-formats',
        title: 'Formats de modèles pris en charge',
        itemHeadings: true,
        content: [
          '**Le principal argument de différenciation de Noema est de charger les modèles dans cinq formats différents plutôt qu\'un seul.** La plupart des applications mobiles d\'IA locale s\'engagent sur un seul environnement d\'exécution — llama.cpp et GGUF est le choix le plus courant dans ce groupe d\'avis. Noema prend au contraire en charge GGUF, MLX, ExecuTorch, Core ML et les Foundation Models d\'Apple côte à côte, selon la propre description App Store de l\'application et [noemaai.com](' + SITE_URL + ').',
        ],
        columns: ['Format', 'Ce que c\'est', 'Pourquoi c\'est important ici'],
        rows: [
          {
            'Format': 'GGUF',
            'Ce que c\'est': 'Le format de modèle quantifié de llama.cpp, utilisé par la plupart des applications d\'IA locale open source et la majorité des modèles quantifiés par la communauté sur Hugging Face.',
            'Pourquoi c\'est important ici': 'Donne accès au plus grand réservoir de fichiers de modèles communautaires prêts à l\'emploi sans attendre une conversion spécifique au format.',
          },
          {
            'Format': 'MLX',
            'Ce que c\'est': 'Le framework de tableaux pour l\'apprentissage automatique propre à Apple, conçu pour exploiter directement la mémoire unifiée et l\'accélération GPU Metal d\'Apple Silicon.',
            'Pourquoi c\'est important ici': 'Peut fonctionner nettement plus vite sur Apple Silicon qu\'un format générique reposant sur le CPU, au prix de ne bien fonctionner que sur le matériel Apple.',
          },
          {
            'Format': 'ExecuTorch',
            'Ce que c\'est': 'L\'environnement d\'exécution d\'inférence sur l\'appareil de PyTorch, conçu pour exporter des modèles PyTorch et les exécuter efficacement sur du matériel mobile et embarqué.',
            'Pourquoi c\'est important ici': 'Élargit le réservoir de modèles que Noema peut charger au-delà de l\'écosystème GGUF/MLX, vers des modèles exportés directement depuis PyTorch.',
          },
          {
            'Format': 'Core ML',
            'Ce que c\'est': 'Le format natif d\'apprentissage automatique d\'Apple, optimisé pour fonctionner sur le CPU, le GPU et le moteur neuronal des appareils Apple.',
            'Pourquoi c\'est important ici': 'Permet à l\'application de charger des modèles spécifiquement optimisés pour le moteur neuronal d\'Apple plutôt que seulement des formats génériques.',
          },
          {
            'Format': 'Apple Foundation Models',
            'Ce que c\'est': 'Le grand modèle de langage intégré et embarqué d\'Apple, disponible dans tout le système à partir d\'iOS 18 sur le matériel compatible.',
            'Pourquoi c\'est important ici': 'Permet d\'essayer immédiatement le chat de documents ou le chat général sans aucun téléchargement de modèle, en utilisant celui déjà présent sur l\'appareil.',
          },
        ],
        note: 'La prise en charge des formats et la liste exacte des modèles peuvent changer d\'une mise à jour de l\'App Store à l\'autre. Vérifiez la compatibilité de format actuelle et les prérequis matériels pour un modèle donné dans l\'application avant de vous y fier.',
      },
      documentChat: {
        id: 'document-chat',
        title: 'Chat de documents : questions-réponses PDF et EPUB',
        content: [
          '**Noema importe des PDF et des EPUB, y compris des manuels scolaires, et indexe leurs passages en local afin qu\'un modèle chargé puisse répondre à des questions fondées sur ce document précis.** Le site du développeur décrit cela comme une lecture « plus approfondie » d\'un document et une réponse fondée « sur vos propres données avec une recherche qui reste sur l\'appareil » — un fonctionnement de type recherche documentaire proche dans l\'esprit de la génération augmentée par récupération (RAG) côté serveur, mais exécuté en local plutôt que contre une base de données vectorielle dans le cloud.',
          'Au-delà des questions-réponses, l\'application peut générer des résumés, des notes et des fiches de révision à partir d\'un document importé, et prend en charge des modèles capables de vision pour des documents ou des images comportant des schémas ou des pages numérisées.',
          'Cet avis n\'a pas testé de manière indépendante la précision de récupération de l\'indexation documentaire de Noema face à des outils RAG de bureau dédiés — la description ci-dessus reflète les fonctionnalités déclarées par le développeur lui-même, pas un test de précision indépendant.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Plateformes et prérequis',
        itemHeadings: true,
        columns: ['Plateforme', 'À quoi s\'attendre', 'Remarque importante'],
        rows: [
          {
            'Plateforme': 'iPhone / iPad',
            'À quoi s\'attendre': 'Nécessite iOS ou iPadOS 18 ou version ultérieure, selon la fiche App Store. Exécute la gamme complète de formats de modèles et le chat de documents.',
            'Remarque importante': 'Les modèles plus volumineux et les documents importés plus volumineux nécessitent plus d\'espace libre et de RAM ; les modèles quantifiés plus petits constituent le point de départ le plus sûr sur les appareils plus anciens.',
          },
          {
            'Plateforme': 'Mac',
            'À quoi s\'attendre': 'Application native pour les Mac Apple Silicon (M1 ou ultérieur), selon la fiche App Store.',
            'Remarque importante': 'La mémoire unifiée d\'Apple Silicon permet généralement des modèles plus volumineux qu\'un iPhone ou iPad équivalent.',
          },
          {
            'Plateforme': 'Apple Vision Pro',
            'À quoi s\'attendre': 'Répertorié comme appareil pris en charge sur l\'App Store.',
            'Remarque importante': 'Cet avis n\'a pas testé l\'expérience Vision Pro de manière indépendante ; considérez cela comme une compatibilité répertoriée sur l\'App Store plutôt qu\'une fonctionnalité vérifiée en pratique.',
          },
          {
            'Plateforme': 'Android, Windows, Linux',
            'À quoi s\'attendre': 'Aucune application officielle sur Google Play, le Microsoft Store ou un dépôt de paquets Linux, selon le site du développeur.',
            'Remarque importante': 'Les lecteurs sur ces plateformes devraient plutôt regarder [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) (Android/iOS) ou une autre option multiplateforme.',
          },
        ],
        note: 'La taille de l\'application était d\'environ 368 Mo au moment de l\'avis, avec une interface disponible en anglais plus dix langues supplémentaires (arabe, français, allemand, hindi, japonais, coréen, roumain, chinois simplifié, espagnol, turc), selon la fiche App Store. L\'App Store indique une classification d\'âge 13+.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité : ce que Noema collecte ou non',
        content: [
          '**L\'étiquette de confidentialité App Store de Noema indique que le développeur ne collecte aucune donnée depuis l\'application**, et l\'application ne nécessite ni compte, ni connexion, ni inscription pour être utilisée.',
          'Le site du développeur décrit un « mode hors réseau » qui bloque le trafic HTTP et HTTPS externe, et affirme que le chat local ne nécessite aucune connectivité cloud. Les fonctionnalités optionnelles — recherche web et connexion à un fournisseur de modèle distant — sont décrites comme des options explicites, pas des réglages par défaut.',
        ],
        items: [
          '**Aucun compte requis.** Téléchargez et utilisez l\'application sans créer de profil ni vous connecter.',
          '**Aucune collecte de données, selon l\'étiquette App Store.** L\'étiquette nutritionnelle de confidentialité d\'Apple pour cette fiche montre qu\'aucune donnée n\'est collectée par l\'application.',
          '**Mode hors réseau.** Le site du développeur décrit un mode qui bloque le trafic HTTP et HTTPS externe, pour les lecteurs qui souhaitent une garantie ferme contre tout appel réseau sortant.',
          '**Les fonctionnalités réseau optionnelles sont facultatives.** La recherche web et les connexions à des fournisseurs distants sont décrites comme des fonctionnalités que l\'utilisateur doit activer explicitement, pas l\'état par défaut.',
          '**API locale et Noema Relay.** Le site du développeur décrit une API réseau locale privée permettant de connecter d\'autres applications aux modèles exécutés dans Noema, ainsi qu\'une fonctionnalité « Noema Relay » pour l\'accès aux modèles entre appareils — cet avis traite cela comme des fonctionnalités décrites par le développeur, pas comme des audits de sécurité réseau vérifiés de manière indépendante.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', 'Ce que cela signifie en pratique', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Gratuite, sans abonnement',
            'Ce que cela signifie en pratique': 'Chaque fonctionnalité, y compris le chat de documents, est disponible gratuitement dès le premier lancement.',
            'Limite / réserve': 'Une application gratuite d\'un seul développeur a moins de soutien institutionnel qu\'une application payante d\'une équipe plus grande et plus établie.',
          },
          {
            'Avantage': 'Cinq formats de modèles pris en charge',
            'Ce que cela signifie en pratique': 'GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models couvrent une part plus large de l\'écosystème de modèles qu\'un concurrent limité à un seul format.',
            'Limite / réserve': 'Plus de formats peut signifier plus de cas particuliers ; les propres notes de version de juillet à septembre de l\'application décrivent des corrections continues de la compatibilité MLX et Core ML.',
          },
          {
            'Avantage': 'Chat de documents en local',
            'Ce que cela signifie en pratique': 'Importez un PDF ou un EPUB et posez des questions fondées, générez des résumés ou des fiches de révision, sans téléverser le document nulle part.',
            'Limite / réserve': 'La précision de récupération sur des documents longs ou complexes n\'a pas été testée de manière indépendante par PromptQuorum face à des outils RAG de bureau dédiés.',
          },
          {
            'Avantage': 'Aucun compte, aucune collecte de données',
            'Ce que cela signifie en pratique': 'Utilisez l\'application immédiatement sans rien à créer ; l\'étiquette de confidentialité App Store montre qu\'aucune donnée n\'est collectée.',
            'Limite / réserve': 'Cet avis n\'a pas audité le code source de l\'application de manière indépendante ; il s\'appuie sur l\'étiquette de confidentialité App Store et les affirmations du développeur lui-même.',
          },
          {
            'Avantage': 'Rythme de mise à jour très actif',
            'Ce que cela signifie en pratique': 'Des publications fréquentes suggèrent une application activement maintenue plutôt qu\'abandonnée.',
            'Limite / réserve': 'Une fréquence de publication élevée signifie aussi que les numéros de version précis, les détails des fonctionnalités et l\'état des bugs de cet avis peuvent devenir obsolètes plus vite que pour une application évoluant plus lentement — vérifiez le comportement actuel dans l\'application.',
          },
          {
            'Avantage': 'Notée 4,5 sur 5',
            'Ce que cela signifie en pratique': 'La note moyenne est élevée.',
            'Limite / réserve': 'Cette moyenne repose sur seulement 26 avis au moment de cet avis — un échantillon restreint qui ne devrait pas être mis sur le même plan qu\'une application disposant d\'une large base d\'avis établie.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Noema face aux alternatives',
        columns: ['Application', 'Plateformes', 'Prix', 'Flexibilité des modèles', 'Différence clé'],
        rows: [
          {
            'Application': 'Noema',
            'Plateformes': 'iPhone/iPad/Mac/Vision Pro (Apple uniquement)',
            'Prix': 'Gratuite',
            'Flexibilité des modèles': 'Cinq formats : GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models',
            'Différence clé': 'Chargement multi-format plus chat de documents en local ; échantillon d\'avis encore restreint',
          },
          {
            'Application': '[Private LLM](/fr/power-local-llm/private-llm-review)',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Prix': '4,99 $ à l\'achat unique',
            'Flexibilité des modèles': '140+ modèles sélectionnés ; quantification OmniQuant/GPTQ',
            'Différence clé': 'Payante, fermée, bibliothèque sélectionnée avec trois ans d\'historique public de publication',
          },
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iPhone/iPad, avec un certain support Android',
            'Prix': 'Gratuite, open source',
            'Flexibilité des modèles': 'N\'importe quel fichier GGUF que l\'utilisateur récupère sur Hugging Face ou ailleurs',
            'Différence clé': 'Gratuite et open source ; uniquement GGUF, aucun chat de documents intégré',
          },
          {
            'Application': '[Enclave AI](/fr/power-local-llm/enclave-ai-review)',
            'Plateformes': 'Voir la fiche actuelle',
            'Prix': 'Voir la fiche actuelle',
            'Flexibilité des modèles': 'Voir l\'avis complet pour la prise en charge actuelle des modèles',
            'Différence clé': 'Voir l\'avis complet sur Enclave AI pour une comparaison détaillée',
          },
          {
            'Application': '[Locally AI](/fr/power-local-llm/locally-ai-review)',
            'Plateformes': 'iPhone/iPad/Mac',
            'Prix': 'Gratuite',
            'Flexibilité des modèles': 'Construite uniquement sur Apple MLX ; accès au modèle Foundation intégré d\'Apple',
            'Différence clé': 'Alternative gratuite exclusivement MLX, contre les cinq formats pris en charge par Noema',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctionnalités des applications tierces changent fréquemment — vérifiez les informations actuelles sur la fiche de chaque application avant de vous décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui Noema est destinée',
        items: [
          '**Les utilisateurs Apple qui veulent de la flexibilité de format.** Les lecteurs qui possèdent déjà des fichiers de modèles dans différents formats — ou qui veulent essayer des modèles GGUF, MLX, ExecuTorch et Core ML sans changer d\'application — obtiennent les quatre plus le Foundation Model intégré d\'Apple au même endroit.',
          '**Les lecteurs qui veulent des questions-réponses documentaires en local.** Importer un PDF ou un EPUB et poser des questions fondées localement est une fonctionnalité distincte que toutes les applications mobiles d\'IA locale n\'offrent pas.',
          '**Les utilisateurs soucieux de leur budget.** L\'application est gratuite, sans abonnement, ce qui compte pour les lecteurs qui veulent essayer l\'IA locale sans engager d\'argent au préalable.',
          '**Les adopteurs précoces à l\'aise avec un historique de notes récent.** Les lecteurs qui ne sont pas gênés que la moyenne de 4,5 étoiles repose sur seulement 26 avis, et qui valorisent une application activement et fréquemment mise à jour plutôt qu\'un historique public plus long.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'À qui Noema n\'est pas destinée',
        items: [
          '**Les utilisateurs Android, Windows ou Linux.** Noema n\'a d\'application officielle sur aucune de ces plateformes — choisissez plutôt [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) (support Android partiel) ou une autre option multiplateforme.',
          '**Les lecteurs qui veulent un long historique d\'avis établi avant de faire confiance à une application.** Avec seulement 26 avis au moment de cet avis, les lecteurs qui privilégient la preuve sociale devraient aussi considérer [Private LLM](/fr/power-local-llm/private-llm-review), qui dispose d\'un historique public de plusieurs années.',
          '**Les lecteurs qui veulent la plus grande bibliothèque de modèles sélectionnés possible.** La flexibilité de format de Noema est large, mais elle ne propose pas une bibliothèque sélectionnée de 140+ modèles comme le fait [Private LLM](/fr/power-local-llm/private-llm-review).',
          '**Les équipes souhaitant un déploiement géré de manière centralisée.** Noema est une application grand public mono-utilisateur, mono-appareil, sans console d\'administration ni facturation d\'équipe — les organisations devraient plutôt se tourner vers une infrastructure de LLM local auto-hébergée côté serveur.',
          '**Les lecteurs qui ont besoin de benchmarks indépendants et tiers sur la précision de récupération documentaire.** Cet avis s\'appuie sur la description du développeur lui-même de la fonctionnalité de chat de documents, pas sur un benchmark de précision indépendant face à des outils RAG dédiés.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Combien coûte Noema ?',
            a: 'Noema est [gratuite sur l\'App Store d\'Apple](' + APP_STORE_URL + '), vérifié pour cet avis le 2026-09-12. Il n\'y a ni abonnement ni achat intégré sur la fiche App Store actuelle. La disponibilité sur l\'App Store peut changer avec le temps — vérifiez le prix actuel avant de télécharger.',
          },
          {
            q: 'Quels formats de modèles Noema prend-elle en charge ?',
            a: 'Noema charge les modèles dans cinq formats : GGUF, MLX, ExecuTorch, Core ML et les Foundation Models d\'Apple sur l\'appareil, selon la description App Store de l\'application et [noemaai.com](' + SITE_URL + '). Cette prise en charge multi-format est plus large que la plupart des applications concurrentes limitées à un seul format, qui se limitent généralement à GGUF ou à MLX uniquement.',
          },
          {
            q: 'Noema est-elle disponible sur Android ou Windows ?',
            a: 'Aucune version officielle n\'existe sur Google Play, le Microsoft Store ou un dépôt de paquets Linux. Noema est conçue spécifiquement pour iPhone, iPad, Mac et Apple Vision Pro.',
          },
          {
            q: 'Qui développe Noema ?',
            a: 'Noema est développée par [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) ; le site [noemaai.com](' + SITE_URL + ') et l\'application sont détenus et exploités par NoemaAI LLC, selon la propre [page de propriété](https://noemaai.com/ownership) du site.',
          },
          {
            q: 'Qu\'est-ce que le chat de documents dans Noema ?',
            a: 'Le chat de documents permet d\'importer un PDF ou un EPUB, y compris des manuels scolaires, et de poser des questions fondées sur ce document précis. Noema indexe les passages du document en local, un fonctionnement de type recherche documentaire proche dans l\'esprit de la RAG côté serveur, mais exécuté en local. L\'application peut aussi générer des résumés, des notes et des fiches de révision à partir d\'un document importé.',
          },
          {
            q: 'Noema fonctionne-t-elle entièrement hors ligne ?',
            a: 'Oui, pour le chat local et le chat de documents une fois qu\'un modèle et un éventuel document sont chargés. Le site du développeur décrit un « mode hors réseau » qui bloque le trafic HTTP et HTTPS externe ; les fonctionnalités optionnelles comme la recherche web ou un fournisseur de modèle distant sont des options explicites et distinctes, pas le comportement par défaut.',
          },
          {
            q: 'Noema collecte-t-elle des données personnelles ?',
            a: 'L\'étiquette nutritionnelle de confidentialité App Store d\'Apple pour cette fiche indique que le développeur ne collecte aucune donnée depuis l\'application, et aucun compte ni connexion n\'est requis. Cet avis s\'appuie sur l\'étiquette de confidentialité de l\'App Store et les affirmations du développeur lui-même, pas sur un audit indépendant du code source.',
          },
          {
            q: 'Quelle est la fiabilité de la note de 4,5 étoiles de Noema ?',
            a: 'La moyenne de 4,5 sur 5 repose sur seulement 26 avis au moment de cet avis — un échantillon restreint comparé à des applications comptant des centaines ou des milliers d\'avis. Considérez-le comme un signal précoce et positif plutôt qu\'une preuve d\'un historique long et établi, et vérifiez le nombre d\'avis actuel sur l\'App Store avant de vous y fier.',
          },
          {
            q: 'Comment Noema se compare-t-elle à Private LLM ?',
            a: 'Noema est gratuite et prend en charge cinq formats de modèles (GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models) plus un chat de documents en local, mais ne compte que 26 avis au moment de cet avis. [Private LLM](/fr/power-local-llm/private-llm-review) coûte 4,99 $ à l\'achat unique, propose une bibliothèque sélectionnée de 140+ modèles et dispose d\'un historique public de publication de trois ans. Choisissez Noema pour la flexibilité de format et le chat de documents sans frais ; choisissez Private LLM pour une expérience plus établie et sélectionnée.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Noema se distingue dans le groupe des applications mobiles d\'IA locale pour une raison précise et vérifiable : elle charge les modèles dans cinq formats différents — GGUF, MLX, ExecuTorch, Core ML et les Foundation Models d\'Apple — là où la plupart des applications concurrentes se limitent à un ou deux. Elle associe cela à un chat de documents en local pour les PDF et EPUB, le tout gratuitement, sans abonnement. Son rythme de mise à jour très soutenu, illustré par une version publiée quelques heures avant cet avis, témoigne d\'une maintenance active plutôt que d\'un projet secondaire abandonné. La réserve honnête concerne sa jeunesse en tant que produit noté : une moyenne de 4,5 étoiles reposant sur seulement 26 avis est un signal précoce positif, pas le genre d\'historique à grand échantillon que peuvent afficher [Private LLM](/fr/power-local-llm/private-llm-review) ou [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) après des années sur l\'App Store. Les lecteurs qui veulent de la flexibilité de format et un chat de documents sans frais devraient l\'essayer ; ceux qui accordent plus de poids à la preuve sociale et à un historique public plus long devraient plutôt commencer par Private LLM ou PocketPal AI, et revenir sur Noema une fois que son nombre d\'avis aura augmenté.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Noema sur l\'App Store](' + APP_STORE_URL + ') — prix, compatibilité de plateforme, étiquette de confidentialité, note, version et taille.',
          '[Site officiel de Noema (noemaai.com)](' + SITE_URL + ') — présentation du produit, formats de modèles pris en charge, chat de documents et déclarations de confidentialité.',
          '[Page de propriété de Noema](https://noemaai.com/ownership) — entité juridique (NoemaAI LLC) derrière l\'application et le site.',
          '[Alexandru Stamate sur l\'App Store](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) — fiche du compte développeur.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Private LLM](/fr/power-local-llm/private-llm-review) — une alternative payante à bibliothèque sélectionnée, avec un historique de publication plus long.',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — une alternative gratuite et open source, GGUF uniquement.',
          '[Avis Enclave AI](/fr/power-local-llm/enclave-ai-review) — une autre application d\'IA en local pour comparaison.',
          '[Avis Locally AI](/fr/power-local-llm/locally-ai-review) — une alternative gratuite exclusivement Apple MLX.',
          '[Le répertoire complet des logiciels de LLM local](/fr/power-local-llm/local-llm-software-directory) — un répertoire plus large d\'outils de LLM local sur toutes les plateformes.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/noema-review-hero-es.webp',
    title: 'Noema: reseña (2026) — IA local multiformato para iPhone, iPad y Mac',
    seoTitle: 'Noema: reseña 2026 — IA local para iPhone y Mac',
    intro:
      'Noema, listada en la App Store como "Noema: Local AI & Offline LLM" (cuenta de desarrollador: Alexandru Stamate; empresa: [NoemaAI LLC](https://noemaai.com/ownership)), es una app gratuita para iPhone, iPad, Mac (Apple Silicon) y Apple Vision Pro que ejecuta modelos de lenguaje de código abierto totalmente en el dispositivo. Es gratuita para descargar desde la [App Store de Apple](' +
      APP_STORE_URL +
      '), sin suscripción ni compras dentro de la app. Al momento de esta reseña, la versión actual era la 3.9, calificada con 4.5 de 5 a partir de solo 26 valoraciones — revisa la ficha actual de la App Store para conocer las cifras vigentes, ya que la app recibe actualizaciones casi a diario. Lo que distingue a Noema de muchas apps móviles de IA local limitadas a un solo formato es que carga modelos de cinco maneras distintas — GGUF, MLX, ExecuTorch, Core ML y los propios Foundation Models de Apple en el dispositivo — en lugar de atar al usuario a un solo entorno de ejecución. También admite chat de documentos: importar PDF y EPUB y hacer preguntas fundamentadas en pasajes indexados, un flujo de tipo recuperación que se ejecuta enteramente en el dispositivo en lugar de a través de un pipeline de RAG en la nube.',
    metaDescription:
      'Reseña de Noema: app gratuita para iPhone/iPad/Mac con 5 formatos de modelo (GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models) y chat de documentos PDF/EPUB en el dispositivo. Precio, privacidad y alternativas.',
    twitterDescription:
      'Reseña de Noema: una app gratuita para iPhone, iPad y Mac que ejecuta modelos de IA local en cinco formatos — GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models — más chat de documentos en el dispositivo para PDF y EPUB.',
    audience:
      'Usuarios de iPhone, iPad y Mac que evalúan una app gratuita multiformato de IA local con chat de documentos frente a alternativas como Private LLM, PocketPal AI y Enclave AI — cubre formatos compatibles, preguntas y respuestas documentales, privacidad y la salvedad del tamaño de muestra de valoraciones.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Noema review',
    targetKeywords: [
      'noema review',
      'noema app iphone',
      'noema local ai',
      'noema ios app',
      'noema vs private llm',
      'on-device ai document chat',
      'gguf mlx executorch core ml app',
      'best free local llm app for iphone',
    ],
    current_models_mentioned: ['Noema 1.5 2B'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac Apple Silicon (M1 o posterior)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Noema es una app gratuita para iOS, iPadOS, macOS y visionOS, creada por el desarrollador independiente Alexandru Stamate ([NoemaAI LLC](https://noemaai.com/ownership)), que ejecuta modelos de lenguaje de código abierto totalmente en el dispositivo en cinco formatos distintos: GGUF, MLX, ExecuTorch, Core ML y los propios Foundation Models de Apple.** No cuesta nada en la [App Store de Apple](' +
      APP_STORE_URL +
      '), sin suscripción ni compras dentro de la app, y añade chat de documentos en el dispositivo para PDF y EPUB. Al momento de esta reseña tenía una calificación de 4.5 sobre 5 a partir de solo 26 valoraciones — una muestra lo bastante pequeña como para no equipararla con una app que tiene miles de reseñas. Los lectores que quieran un historial más largo también deberían comparar con [Private LLM](/es/power-local-llm/private-llm-review) o [Enclave AI](/es/power-local-llm/enclave-ai-review).',
    quickAnswerTop: {
      en: {
        question: 'Is Noema a good free local AI app for iPhone and Mac?',
        answer:
          'Yes, if you want a free, actively maintained app that loads models in multiple formats (GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models) and adds on-device document chat for PDFs and EPUBs. Its 4.5-star rating is based on only 26 ratings, so treat that as an early signal rather than a proven track record — apps like Private LLM and Enclave AI have longer public histories.',
        bullets: [
          'Free on the Apple App Store, no subscription and no in-app purchases listed.',
          'iPhone, iPad, Mac (Apple Silicon), and Apple Vision Pro — requires iOS/iPadOS 18 or later.',
          'Loads models in five formats: GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models.',
          'Document chat: import PDFs and EPUBs for on-device, indexed, grounded Q&A.',
          'Version 3.9 at time of writing, updated within hours of this review — check the App Store for the current version.',
          '4.5/5 rating from 26 ratings as of this review — a small sample size.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Ist Noema eine gute kostenlose lokale KI-App für iPhone und Mac?',
        answer:
          'Ja, wenn Sie eine kostenlose, aktiv gepflegte App möchten, die Modelle in mehreren Formaten lädt (GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models) und einen Dokument-Chat auf dem Gerät für PDFs und EPUBs bietet. Die 4,5-Sterne-Bewertung basiert auf nur 26 Bewertungen — betrachten Sie das eher als frühes Signal denn als belegte Erfolgsbilanz. Apps wie Private LLM und Enclave AI haben eine längere öffentliche Historie.',
        bullets: [
          'Kostenlos im Apple App Store, kein Abonnement und keine In-App-Käufe gelistet.',
          'iPhone, iPad, Mac (Apple Silicon) und Apple Vision Pro — erfordert iOS/iPadOS 18 oder neuer.',
          'Lädt Modelle in fünf Formaten: GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models.',
          'Dokument-Chat: PDFs und EPUBs importieren für indexierte, fundierte Fragen und Antworten auf dem Gerät.',
          'Version 3.9 zum Zeitpunkt der Erstellung, wenige Stunden vor diesem Test aktualisiert — aktuelle Version im App Store prüfen.',
          '4,5/5 Bewertung aus 26 Bewertungen zum Zeitpunkt dieses Tests — eine kleine Stichprobe.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'Noema est-elle une bonne application d\'IA locale gratuite pour iPhone et Mac ?',
        answer:
          'Oui, si vous voulez une application gratuite et activement maintenue qui charge des modèles dans plusieurs formats (GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models) et propose un chat de documents sur l\'appareil pour les PDF et EPUB. Sa note de 4,5 étoiles repose sur seulement 26 avis, à considérer comme un signal précoce plutôt qu\'un historique éprouvé — des applications comme Private LLM et Enclave AI ont un historique public plus long.',
        bullets: [
          'Gratuite sur l\'App Store d\'Apple, sans abonnement ni achat intégré répertorié.',
          'iPhone, iPad, Mac (Apple Silicon) et Apple Vision Pro — nécessite iOS/iPadOS 18 ou version ultérieure.',
          'Charge les modèles dans cinq formats : GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models.',
          'Chat de documents : importez des PDF et EPUB pour des questions-réponses indexées et fondées, sur l\'appareil.',
          'Version 3.9 au moment de la rédaction, mise à jour quelques heures avant ce test — vérifiez la version actuelle sur l\'App Store.',
          'Note de 4,5/5 sur seulement 26 avis au moment de ce test — un échantillon restreint.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Es Noema una buena app de IA local gratuita para iPhone y Mac?',
        answer:
          'Sí, si buscas una app gratuita y activamente mantenida que carga modelos en varios formatos (GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models) y añade chat de documentos en el dispositivo para PDF y EPUB. Su calificación de 4.5 estrellas se basa en solo 26 valoraciones, así que trátala como una señal temprana y no como un historial comprobado — apps como Private LLM y Enclave AI tienen un historial público más largo.',
        bullets: [
          'Gratis en la App Store de Apple, sin suscripción ni compras dentro de la app.',
          'iPhone, iPad, Mac (Apple Silicon) y Apple Vision Pro — requiere iOS/iPadOS 18 o posterior.',
          'Carga modelos en cinco formatos: GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models.',
          'Chat de documentos: importa PDF y EPUB para preguntas y respuestas indexadas y fundamentadas en el dispositivo.',
          'Versión 3.9 al momento de esta reseña, actualizada horas antes de su publicación — verifica la versión actual en la App Store.',
          'Calificación de 4.5/5 con solo 26 valoraciones al momento de esta reseña — una muestra pequeña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O Noema é um bom aplicativo gratuito de IA local para iPhone e Mac?',
        answer:
          'Sim, se você quer um aplicativo gratuito e mantido ativamente que carrega modelos em vários formatos (GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models) e oferece chat de documentos no dispositivo para PDFs e EPUBs. A avaliação de 4,5 estrelas se baseia em apenas 26 avaliações, então trate isso como um sinal inicial, não um histórico comprovado — apps como Private LLM e Enclave AI têm um histórico público mais longo.',
        bullets: [
          'Gratuito na App Store da Apple, sem assinatura e sem compras no aplicativo listadas.',
          'iPhone, iPad, Mac (Apple Silicon) e Apple Vision Pro — exige iOS/iPadOS 18 ou posterior.',
          'Carrega modelos em cinco formatos: GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models.',
          'Chat de documentos: importe PDFs e EPUBs para perguntas e respostas indexadas e fundamentadas no dispositivo.',
          'Versão 3.9 no momento desta análise, atualizada poucas horas antes da publicação — confira a versão atual na App Store.',
          'Avaliação de 4,5/5 com apenas 26 avaliações no momento desta análise — uma amostra pequena.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'Noemaは iPhone と Mac 向けの優れた無料ローカルAIアプリですか?',
        answer:
          '複数の形式(GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models)でモデルを読み込める、無料で積極的にメンテナンスされているアプリを求めるなら、はいです。PDFやEPUBのオンデバイス文書チャットも追加されています。4.5の評価はわずか26件の評価に基づくもので、実績というより初期のシグナルとして捉えてください — Private LLMやEnclave AIはより長い公開履歴を持っています。',
        bullets: [
          'Apple App Storeで無料。サブスクリプションやアプリ内課金は掲載されていません。',
          'iPhone、iPad、Mac(Apple Silicon)、Apple Vision Pro対応 — iOS/iPadOS 18以降が必要です。',
          '5つの形式でモデルを読み込み: GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models。',
          '文書チャット: PDFやEPUBをインポートし、オンデバイスでインデックス化された根拠のある質問応答が可能。',
          '本レビュー執筆時点でバージョン3.9。公開の数時間前に更新済み — 現在のバージョンはApp Storeで確認してください。',
          '本レビュー時点で評価4.5/5、評価数はわずか26件 — サンプルサイズは小さいです。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'Noema 是适合 iPhone 和 Mac 的优质免费本地 AI 应用吗?',
        answer:
          '如果你想要一款免费、持续维护、支持多种格式加载模型(GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models)并提供设备端文档聊天功能(支持 PDF 和 EPUB)的应用,答案是肯定的。它的 4.5 星评分仅基于 26 条评价,应视为早期信号,而非成熟的长期记录 — Private LLM 和 Enclave AI 拥有更长的公开历史。',
        bullets: [
          '在 Apple App Store 免费提供,未列出订阅或应用内购买。',
          '支持 iPhone、iPad、Mac(Apple Silicon)和 Apple Vision Pro — 需要 iOS/iPadOS 18 或更高版本。',
          '支持五种模型格式加载: GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models。',
          '文档聊天: 导入 PDF 和 EPUB,进行设备端索引、有据可查的问答。',
          '撰写本评测时的版本为 3.9,发布前几小时刚更新 — 请在 App Store 确认当前版本。',
          '截至本评测,评分为 4.5/5,仅基于 26 条评价 — 样本量较小。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل Noema تطبيق ذكاء اصطناعي محلي مجاني جيد لأجهزة iPhone و Mac؟',
        answer:
          'نعم، إذا كنت تريد تطبيقًا مجانيًا يُصان بنشاط ويُحمّل النماذج بعدة صيغ (GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation) ويضيف محادثة مستندات على الجهاز لملفات PDF وEPUB. يستند تقييمه البالغ 4.5 نجوم إلى 26 تقييمًا فقط، لذا تعامل معه كإشارة مبكرة وليس سجلًا موثوقًا طويل الأمد — تطبيقات مثل Private LLM وEnclave AI لها تاريخ عام أطول.',
        bullets: [
          'مجاني على متجر تطبيقات Apple؛ لا يوجد اشتراك ولا مشتريات داخل التطبيق مذكورة.',
          'يعمل على iPhone وiPad وMac (Apple Silicon) وApple Vision Pro — يتطلب iOS/iPadOS 18 أو أحدث.',
          'يُحمّل النماذج بخمس صيغ: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation.',
          'محادثة المستندات: استيراد ملفات PDF وEPUB للحصول على إجابات مفهرسة ومبنية على الجهاز.',
          'الإصدار 3.9 وقت كتابة هذه المراجعة، وقد تم تحديثه قبل ساعات من نشرها — تحقق من الإصدار الحالي على متجر التطبيقات.',
          'تقييم 4.5 من 5 بناءً على 26 تقييمًا فقط وقت هذه المراجعة — عينة صغيرة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'Noema는 iPhone과 Mac에 적합한 우수한 무료 로컬 AI 앱입니까?',
        answer:
          '여러 형식(GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models)으로 모델을 불러올 수 있고 PDF와 EPUB를 위한 온디바이스 문서 채팅 기능을 갖춘, 무료이면서 활발히 유지 관리되는 앱을 원한다면 그렇습니다. 4.5점 평점은 단 26개의 평가에 근거한 것이므로, 검증된 실적이 아니라 초기 신호로 받아들여야 합니다 — Private LLM과 Enclave AI는 더 긴 공개 이력을 가지고 있습니다.',
        bullets: [
          'Apple App Store에서 무료로 제공되며, 구독이나 인앱 구매가 게재되어 있지 않습니다.',
          'iPhone, iPad, Mac(Apple Silicon), Apple Vision Pro를 지원하며 iOS/iPadOS 18 이상이 필요합니다.',
          '다섯 가지 형식으로 모델을 불러옵니다: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
          '문서 채팅: PDF와 EPUB를 가져와 온디바이스에서 색인화되고 근거에 기반한 질의응답이 가능합니다.',
          '이 리뷰 작성 시점 버전은 3.9이며, 발행 몇 시간 전에 업데이트되었습니다 — 현재 버전은 App Store에서 확인하십시오.',
          '이 리뷰 시점 기준 26개의 평가만으로 4.5/5점을 받았습니다 — 표본 크기가 작습니다.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es Noema', anchor: 'what-is-noema' },
      { label: 'Cómo empezar', anchor: 'how-to-get-started' },
      { label: 'Formatos de modelo compatibles', anchor: 'supported-model-formats' },
      { label: 'Chat de documentos: preguntas y respuestas de PDF y EPUB', anchor: 'document-chat' },
      { label: 'Plataformas y requisitos', anchor: 'platforms' },
      { label: 'Privacidad: qué recopila Noema y qué no', anchor: 'privacy' },
      { label: 'Ventajas y desventajas', anchor: 'tradeoffs' },
      { label: 'Noema frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'A quién le conviene Noema', anchor: 'who-should-use' },
      { label: 'A quién no le conviene Noema', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Resumen',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Noema es una app gratuita para iPhone, iPad, Mac y Vision Pro del desarrollador independiente Alexandru Stamate (NoemaAI LLC) que ejecuta modelos de IA local en cinco formatos — GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models — y añade chat de documentos en el dispositivo para PDF y EPUB.',
          },
          {
            type: 'plain-terms',
            text: 'La mayoría de las apps de IA local para el teléfono solo ejecutan un tipo de archivo de modelo. Noema puede cargar varios tipos distintos, además del propio modelo integrado de Apple, para que no te quedes atascado si tu modelo preferido solo viene en un formato — y también puede leer un PDF o EPUB que le des y responder preguntas fundamentadas en ese documento, todo sin conexión a internet.',
          },
        ],
        items: [
          'Precio: gratis en la [App Store de Apple](' + APP_STORE_URL + '); sin suscripción ni compras dentro de la app al momento de esta reseña.',
          'Plataformas: iPhone, iPad, Mac (Apple Silicon) y Apple Vision Pro — sin app oficial de Android, Windows o Linux.',
          'Desarrollador: [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) / [NoemaAI LLC](https://noemaai.com/ownership).',
          'Formatos de modelo: GGUF, MLX, ExecuTorch, Core ML y los Foundation Models de Apple en el dispositivo — cinco formatos en una sola app.',
          'Chat de documentos: importa PDF y EPUB; la app indexa pasajes para preguntas y respuestas fundamentadas en el dispositivo.',
          'Privacidad: el desarrollador declara que la app no recopila datos; no se necesita cuenta para usarla.',
          'Calificación: 4.5 de 5 a partir de solo 26 valoraciones al momento de esta reseña — una muestra pequeña, no un historial largo.',
          'Versión 3.9 al momento de escribir esto, con una actualización publicada horas antes de esta reseña — confirma la versión actual en la App Store antes de depender de una función específica.',
        ],
      },
      whatIsNoema: {
        id: 'what-is-noema',
        title: 'Qué es Noema',
        content: [
          '**Noema es una app nativa de Apple que descarga y ejecuta modelos de lenguaje de código abierto directamente en un iPhone, iPad, Mac o visor Vision Pro, sin ningún componente del lado del servidor necesario para el chat local.** Una vez descargado un modelo, la app puede generar una respuesta sin conexión a internet.',
          'Está creada por [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674), cuya empresa [NoemaAI LLC](https://noemaai.com/ownership) posee y opera tanto la app como el sitio [noemaai.com](' +
          SITE_URL +
          '), según la propia página de titularidad del sitio. La app está listada en la App Store con el ID 6751169935. Esta reseña evalúa las propias afirmaciones del desarrollador — "0 nube requerida para el chat local", sin requisito de cuenta, sin recopilación de datos — frente a la etiqueta de privacidad de la App Store y la descripción pública de la app, en lugar de tomar el discurso de marketing al pie de la letra.',
          'La app se actualiza con una frecuencia inusual: la versión revisada para esta reseña, la 3.9, se había publicado apenas horas antes de escribir esta reseña, y las notas de "novedades" de esa versión describían correcciones a la estabilidad de los modelos MLX, la indexación de documentos, los modelos de visión y la compatibilidad con Core ML — evidencia de mantenimiento activo y continuo en lugar de un proyecto estancado o abandonado.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**Poner Noema en marcha toma unos minutos y no requiere crear una cuenta.**',
        ],
        numberedItems: [
          {
            title: 'Descarga la app',
            whyItMatters: 'Consigue [Noema en la App Store de Apple](' + APP_STORE_URL + ') gratis. No hay un nivel de prueba de qué preocuparse ni una suscripción que cancelar después — la app completa es gratis desde el primer lanzamiento.',
          },
          {
            title: 'Elige un formato y una fuente de modelo',
            whyItMatters: 'Explora y descarga un modelo GGUF de Hugging Face directamente dentro de la app, o usa un modelo MLX, ExecuTorch o Core ML, o recurre al Foundation Model integrado de Apple si prefieres no descargar nada en absoluto.',
          },
          {
            title: 'Importa un documento para el chat de documentos',
            whyItMatters: 'Añade un PDF o EPUB desde la app Archivos o iCloud Drive. Noema indexa los pasajes del documento en el dispositivo para que puedas hacer preguntas fundamentadas sobre su contenido en lugar de solo conversar a partir del conocimiento general del modelo.',
          },
          {
            title: 'Chatea, resume o genera tarjetas de estudio',
            whyItMatters: 'Una vez cargados un modelo y, opcionalmente, un documento, usa la app completamente sin conexión para chatear, resumir documentos, tomar notas o generar tarjetas de estudio.',
          },
          {
            title: 'Opcional: activa la búsqueda web o un proveedor remoto',
            whyItMatters: 'Por defecto, Noema funciona solo en local. El propio sitio del desarrollador describe un "modo sin conexión externa" que bloquea el tráfico HTTP y HTTPS externo; la búsqueda web o un proveedor de modelo remoto es una opción explícita y separada, no el comportamiento predeterminado.',
          },
        ],
        note: 'Los tamaños de descarga exactos, la lista actual de modelos compatibles y los requisitos mínimos del dispositivo pueden cambiar entre actualizaciones de la App Store — confirma las especificaciones actuales dentro de la app o en [noemaai.com](' + SITE_URL + ') antes de comprometerte con una descarga grande con un plan de datos limitado.',
      },
      supportedModelFormats: {
        id: 'supported-model-formats',
        title: 'Formatos de modelo compatibles',
        itemHeadings: true,
        content: [
          '**El principal diferenciador declarado de Noema es cargar modelos en cinco formatos distintos en lugar de uno solo.** La mayoría de las apps móviles de IA local se comprometen con un solo motor de ejecución — llama.cpp y GGUF es la elección más común en este grupo de reseñas. Noema, en cambio, admite GGUF, MLX, ExecuTorch, Core ML y los propios Foundation Models de Apple en el dispositivo, según la propia descripción en la App Store de la app y [noemaai.com](' + SITE_URL + ').',
        ],
        columns: ['Formato', 'Qué es', 'Por qué importa aquí'],
        rows: [
          {
            'Formato': 'GGUF',
            'Qué es': 'El formato de modelo cuantizado de llama.cpp, usado por la mayoría de las apps de IA local de código abierto y la mayoría de los modelos cuantizados por la comunidad en Hugging Face.',
            'Por qué importa aquí': 'Da acceso al mayor conjunto de archivos de modelo comunitarios listos para usar sin esperar una conversión específica de formato.',
          },
          {
            'Formato': 'MLX',
            'Qué es': 'El propio framework de arreglos de aprendizaje automático de Apple, diseñado para usar directamente la memoria unificada y la aceleración GPU Metal de Apple Silicon.',
            'Por qué importa aquí': 'Puede funcionar notablemente más rápido en Apple Silicon que un formato genérico basado en CPU, a costa de funcionar bien solo en hardware de Apple.',
          },
          {
            'Formato': 'ExecuTorch',
            'Qué es': 'El motor de inferencia en el dispositivo de PyTorch, diseñado para exportar modelos de PyTorch y ejecutarlos eficientemente en hardware móvil y de borde.',
            'Por qué importa aquí': 'Amplía el conjunto de modelos que Noema puede cargar más allá del ecosistema GGUF/MLX, hacia modelos exportados directamente desde PyTorch.',
          },
          {
            'Formato': 'Core ML',
            'Qué es': 'El formato nativo de aprendizaje automático de Apple, optimizado para ejecutarse en la CPU, GPU y Neural Engine de los dispositivos de Apple.',
            'Por qué importa aquí': 'Permite a la app cargar modelos específicamente optimizados para el Neural Engine de Apple en lugar de solo formatos de propósito general.',
          },
          {
            'Formato': 'Apple Foundation Models',
            'Qué es': 'El propio gran modelo de lenguaje integrado en el dispositivo de Apple, disponible en todo el sistema desde iOS 18 en hardware compatible.',
            'Por qué importa aquí': 'Permite probar de inmediato el chat de documentos o el chat general sin ninguna descarga de modelo, usando el que ya está en el dispositivo.',
          },
        ],
        note: 'La compatibilidad de formatos y la lista exacta de modelos pueden cambiar entre actualizaciones de la App Store. Confirma la compatibilidad de formato actual y los requisitos de hardware para un modelo específico dentro de la app antes de depender de ello.',
      },
      documentChat: {
        id: 'document-chat',
        title: 'Chat de documentos: preguntas y respuestas de PDF y EPUB',
        content: [
          '**Noema importa PDF y EPUB, incluidos libros de texto, e indexa sus pasajes en el dispositivo para que un modelo cargado pueda responder preguntas fundamentadas en ese documento específico.** El propio sitio del desarrollador describe esto como leer un documento "más a fondo" y fundamentar las respuestas "en tus propios conjuntos de datos con recuperación que permanece en el dispositivo" — un flujo de tipo recuperación similar en espíritu a la generación aumentada por recuperación (RAG) del lado del servidor, pero ejecutado localmente en lugar de contra una base de datos vectorial en la nube.',
          'Más allá de responder preguntas, la app puede generar resúmenes, notas y tarjetas de estudio a partir de un documento importado, y admite modelos con capacidad de visión para documentos o imágenes que incluyan diagramas o páginas escaneadas.',
          'Esta reseña no ha comparado de forma independiente la precisión de recuperación de la indexación de documentos de Noema frente a herramientas de RAG de escritorio dedicadas — la descripción anterior refleja las funciones declaradas por el propio desarrollador, no una prueba de precisión independiente.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Plataformas y requisitos',
        itemHeadings: true,
        columns: ['Plataforma', 'Qué esperar', 'Nota importante'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Qué esperar': 'Requiere iOS o iPadOS 18 o posterior, según la ficha de la App Store. Ejecuta la gama completa de formatos de modelo y el chat de documentos.',
            'Nota importante': 'Los modelos más grandes y los documentos importados más grandes necesitan más almacenamiento libre y RAM; los modelos cuantizados más pequeños son el punto de partida más seguro en dispositivos más antiguos.',
          },
          {
            'Plataforma': 'Mac',
            'Qué esperar': 'App nativa para Mac con Apple Silicon (M1 o posterior), según la ficha de la App Store.',
            'Nota importante': 'La memoria unificada de Apple Silicon generalmente permite modelos más grandes que un iPhone o iPad equivalente.',
          },
          {
            'Plataforma': 'Apple Vision Pro',
            'Qué esperar': 'Aparece como dispositivo compatible en la App Store.',
            'Nota importante': 'Esta reseña no probó de forma independiente la experiencia en Vision Pro; trátalo como compatibilidad listada en la App Store, no como una función verificada de primera mano.',
          },
          {
            'Plataforma': 'Android, Windows, Linux',
            'Qué esperar': 'Sin app oficial en Google Play, la Microsoft Store ni ningún repositorio de paquetes de Linux, según el propio sitio del desarrollador.',
            'Nota importante': 'Los lectores en estas plataformas deberían considerar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) (Android/iOS) u otra opción multiplataforma.',
          },
        ],
        note: 'El tamaño de la app era de aproximadamente 368 MB al momento de la reseña, con la interfaz disponible en inglés más otros diez idiomas (árabe, francés, alemán, hindi, japonés, coreano, rumano, chino simplificado, español, turco), según la ficha de la App Store. La App Store indica una clasificación de edad 13+.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad: qué recopila Noema y qué no',
        content: [
          '**La etiqueta de privacidad de la App Store de Noema indica que el desarrollador no recopila ningún dato de la app**, y la app no requiere cuenta, inicio de sesión ni registro para usarla.',
          'El propio sitio del desarrollador describe un "modo sin conexión externa" que bloquea el tráfico HTTP y HTTPS externo, y afirma que el chat local no requiere ninguna conectividad en la nube. Las funciones opcionales — búsqueda web y conexión a un proveedor de modelo remoto — se describen como opciones explícitas, no comportamientos predeterminados.',
        ],
        items: [
          '**No se requiere cuenta.** Descarga y usa la app sin crear un perfil ni iniciar sesión.',
          '**Sin recopilación de datos, según la etiqueta de la App Store.** La etiqueta nutricional de privacidad de Apple para esta ficha muestra que no se recopilan datos de la app.',
          '**Modo sin conexión externa.** El propio sitio del desarrollador describe un modo que bloquea el tráfico HTTP y HTTPS externo, para lectores que quieran una garantía firme contra cualquier llamada de red saliente.',
          '**Las funciones de red opcionales son de activación voluntaria.** La búsqueda web y las conexiones a proveedores remotos se describen como funciones que el usuario debe activar explícitamente, no el estado predeterminado.',
          '**API local y Noema Relay.** El sitio del desarrollador describe una API de red local privada para conectar otras apps con modelos que se ejecutan en Noema, y una función "Noema Relay" para acceso a modelos entre dispositivos — esta reseña trata esto como funciones descritas por el desarrollador, no como auditorías de seguridad de red verificadas de forma independiente.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y desventajas',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / salvedad'],
        rows: [
          {
            'Ventaja': 'Gratis, sin suscripción',
            'Qué significa en el uso real': 'Cada función, incluido el chat de documentos, está disponible sin costo desde el primer lanzamiento.',
            'Limitación / salvedad': 'Una app gratuita de un solo desarrollador tiene menos respaldo institucional que una app de pago de un equipo más grande y establecido.',
          },
          {
            'Ventaja': 'Cinco formatos de modelo compatibles',
            'Qué significa en el uso real': 'GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models cubren una porción más amplia del ecosistema de modelos que un competidor de un solo formato.',
            'Limitación / salvedad': 'Más formatos puede significar más casos límite; las propias notas de versión de julio a septiembre de la app describen correcciones continuas a la compatibilidad con MLX y Core ML.',
          },
          {
            'Ventaja': 'Chat de documentos en el dispositivo',
            'Qué significa en el uso real': 'Importa un PDF o EPUB y haz preguntas fundamentadas, genera resúmenes o tarjetas de estudio, sin subir el documento a ningún lado.',
            'Limitación / salvedad': 'La precisión de recuperación en documentos largos o complejos no ha sido comparada de forma independiente por PromptQuorum frente a herramientas de RAG de escritorio dedicadas.',
          },
          {
            'Ventaja': 'Sin cuenta, sin recopilación de datos',
            'Qué significa en el uso real': 'Usa la app de inmediato sin nada que registrar; la etiqueta de privacidad de la App Store muestra que no se recopilan datos.',
            'Limitación / salvedad': 'Esta reseña no auditó de forma independiente el código fuente de la app; se basa en la etiqueta de privacidad de la App Store y en las propias afirmaciones del desarrollador.',
          },
          {
            'Ventaja': 'Ritmo de actualización muy activo',
            'Qué significa en el uso real': 'Los lanzamientos frecuentes sugieren una app mantenida activamente en lugar de abandonada.',
            'Limitación / salvedad': 'Una alta frecuencia de lanzamientos también significa que los números de versión específicos, los detalles de funciones y los estados de errores de esta reseña pueden quedar obsoletos más rápido que en una app de evolución más lenta — verifica el comportamiento actual en la app.',
          },
          {
            'Ventaja': 'Calificada con 4.5 de 5',
            'Qué significa en el uso real': 'La calificación promedio es alta.',
            'Limitación / salvedad': 'Ese promedio se basa en solo 26 valoraciones al momento de esta reseña — una muestra pequeña que no debería equipararse a una app con una base de valoraciones grande y establecida.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Noema frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio', 'Flexibilidad de modelos', 'Diferencia clave'],
        rows: [
          {
            'App': 'Noema',
            'Plataformas': 'iPhone/iPad/Mac/Vision Pro (solo Apple)',
            'Precio': 'Gratis',
            'Flexibilidad de modelos': 'Cinco formatos: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models',
            'Diferencia clave': 'Carga multiformato más chat de documentos en el dispositivo; muestra de valoraciones aún pequeña',
          },
          {
            'App': '[Private LLM](/es/power-local-llm/private-llm-review)',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Precio': '$4.99 pago único',
            'Flexibilidad de modelos': '140+ modelos seleccionados; cuantización OmniQuant/GPTQ',
            'Diferencia clave': 'De pago, código cerrado, biblioteca seleccionada con tres años de historial público de lanzamientos',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, con cierto soporte para Android',
            'Precio': 'Gratis, código abierto',
            'Flexibilidad de modelos': 'Cualquier archivo GGUF que el usuario obtenga de Hugging Face o de otro lugar',
            'Diferencia clave': 'Gratis y de código abierto; solo GGUF, sin chat de documentos integrado',
          },
          {
            'App': '[Enclave AI](/es/power-local-llm/enclave-ai-review)',
            'Plataformas': 'Consulta la ficha actual',
            'Precio': 'Consulta la ficha actual',
            'Flexibilidad de modelos': 'Consulta la reseña completa para conocer la compatibilidad actual de modelos',
            'Diferencia clave': 'Consulta la reseña completa de Enclave AI para una comparación detallada',
          },
          {
            'App': '[Locally AI](/es/power-local-llm/locally-ai-review)',
            'Plataformas': 'iPhone/iPad/Mac',
            'Precio': 'Gratis',
            'Flexibilidad de modelos': 'Construida solo sobre Apple MLX; acceso al modelo de fundación integrado de Apple',
            'Diferencia clave': 'Alternativa gratuita solo de MLX, frente a la compatibilidad de cinco formatos de Noema',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de apps de terceros cambian con frecuencia — verifica las especificaciones actuales en la ficha de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'A quién le conviene Noema',
        items: [
          '**Usuarios de Apple que quieren flexibilidad de formato.** Los lectores que ya tienen archivos de modelo en distintos formatos — o que quieren probar modelos GGUF, MLX, ExecuTorch y Core ML sin cambiar de app — obtienen los cuatro más el Foundation Model integrado de Apple en un solo lugar.',
          '**Lectores que quieren preguntas y respuestas de documentos en el dispositivo.** Importar un PDF o EPUB y hacer preguntas fundamentadas de forma local es una función distintiva que no todas las apps móviles de IA local ofrecen.',
          '**Usuarios con presupuesto limitado.** La app es gratis y sin suscripción, algo importante para lectores que quieren probar la IA local sin comprometer dinero por adelantado.',
          '**Adoptadores tempranos que se sienten cómodos con un historial de valoraciones joven.** Lectores a quienes no les importa que el promedio de 4.5 estrellas descanse en solo 26 valoraciones, y que valoran una app activa y frecuentemente actualizada por encima de un historial público más largo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'A quién no le conviene Noema',
        items: [
          '**Usuarios de Android, Windows o Linux.** Noema no tiene app oficial en ninguna de estas plataformas — elige [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) (soporte parcial en Android) u otra opción multiplataforma.',
          '**Lectores que quieren un historial de valoraciones largo y establecido antes de confiar en una app.** Con solo 26 valoraciones al momento de esta reseña, los lectores que priorizan la prueba social también deberían considerar [Private LLM](/es/power-local-llm/private-llm-review), que tiene un historial público de varios años.',
          '**Lectores que quieren la mayor biblioteca de modelos seleccionados posible.** La flexibilidad de formato de Noema es amplia, pero no ofrece una biblioteca seleccionada de 140+ modelos como sí lo hace [Private LLM](/es/power-local-llm/private-llm-review).',
          '**Equipos que quieren un despliegue gestionado de forma centralizada.** Noema es una app de consumo de un solo usuario y un solo dispositivo, sin consola de administración ni facturación de equipo — las organizaciones deberían buscar infraestructura de LLM local autoalojada del lado del servidor.',
          '**Lectores que necesitan benchmarks independientes de terceros sobre la precisión de recuperación de documentos.** Esta reseña se basa en la descripción propia del desarrollador de la función de chat de documentos, no en un benchmark de precisión independiente frente a herramientas de RAG dedicadas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuánto cuesta Noema?',
            a: 'Noema es [gratuita en la App Store de Apple](' + APP_STORE_URL + '), verificado para esta reseña el 2026-09-12. No hay suscripción ni compras dentro de la app en la ficha actual de la App Store. La disponibilidad en la App Store puede cambiar con el tiempo — confirma el precio actual antes de descargarla.',
          },
          {
            q: '¿Qué formatos de modelo admite Noema?',
            a: 'Noema carga modelos en cinco formatos: GGUF, MLX, ExecuTorch, Core ML y los propios Foundation Models de Apple en el dispositivo, según la descripción en la App Store de la app y [noemaai.com](' + SITE_URL + '). Esta compatibilidad multiformato es más amplia que la de la mayoría de las apps competidoras de un solo formato, que suelen limitarse solo a GGUF o solo a MLX.',
          },
          {
            q: '¿Está Noema disponible en Android o Windows?',
            a: 'No existe una versión oficial en Google Play, la Microsoft Store ni ningún repositorio de paquetes de Linux. Noema está construida específicamente para iPhone, iPad, Mac y Apple Vision Pro.',
          },
          {
            q: '¿Quién desarrolla Noema?',
            a: 'Noema es desarrollada por [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674); el sitio [noemaai.com](' + SITE_URL + ') y la app son propiedad y están operados por NoemaAI LLC, según la propia [página de titularidad](https://noemaai.com/ownership) del sitio.',
          },
          {
            q: '¿Qué es el chat de documentos en Noema?',
            a: 'El chat de documentos te permite importar un PDF o EPUB, incluidos libros de texto, y hacer preguntas fundamentadas en ese documento específico. Noema indexa los pasajes del documento en el dispositivo, un flujo de tipo recuperación similar en espíritu a la RAG del lado del servidor, pero ejecutado localmente. La app también puede generar resúmenes, notas y tarjetas de estudio a partir de un documento importado.',
          },
          {
            q: '¿Funciona Noema completamente sin conexión?',
            a: 'Sí, para el chat local y el chat de documentos una vez que un modelo y cualquier documento están cargados. El propio sitio del desarrollador describe un "modo sin conexión externa" que bloquea el tráfico HTTP y HTTPS externo; las funciones opcionales como la búsqueda web o un proveedor de modelo remoto son opciones explícitas y separadas, no el comportamiento predeterminado.',
          },
          {
            q: '¿Recopila Noema algún dato personal?',
            a: 'La etiqueta nutricional de privacidad de la App Store de Apple para esta ficha indica que el desarrollador no recopila ningún dato de la app, y no se requiere cuenta ni inicio de sesión. Esta reseña se basa en la etiqueta de privacidad de la App Store y en las propias afirmaciones del desarrollador, no en una auditoría independiente del código fuente.',
          },
          {
            q: '¿Qué tan confiable es la calificación de 4.5 estrellas de Noema?',
            a: 'El promedio de 4.5 sobre 5 se basa en solo 26 valoraciones al momento de esta reseña — una muestra pequeña comparada con apps que tienen cientos o miles de reseñas. Trátalo como una señal temprana y positiva más que como prueba de un historial largo y comprobado, y vuelve a verificar el número actual de valoraciones en la App Store antes de depender de ello.',
          },
          {
            q: '¿Cómo se compara Noema con Private LLM?',
            a: 'Noema es gratuita y admite cinco formatos de modelo (GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models) más chat de documentos en el dispositivo, pero solo tiene 26 valoraciones al momento de esta reseña. [Private LLM](/es/power-local-llm/private-llm-review) cuesta $4.99 de pago único, ofrece una biblioteca seleccionada de 140+ modelos y tiene un historial público de lanzamientos de tres años. Elige Noema por la flexibilidad de formato y el chat de documentos sin costo; elige Private LLM por una experiencia más establecida y seleccionada.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Noema destaca en el grupo de apps móviles de IA local por una razón específica y verificable: carga modelos en cinco formatos distintos — GGUF, MLX, ExecuTorch, Core ML y los propios Foundation Models de Apple — donde la mayoría de las apps competidoras se comprometen con solo uno o dos. Combina eso con chat de documentos en el dispositivo para PDF y EPUB, todo de forma gratuita y sin suscripción. Su ritmo de actualización muy frecuente, evidenciado por una versión publicada horas antes de esta reseña, apunta a un mantenimiento activo en lugar de un proyecto paralelo abandonado. La salvedad honesta es su juventud como producto calificado: un promedio de 4.5 estrellas que descansa en solo 26 valoraciones es una señal temprana positiva, no el tipo de historial de muestra grande que pueden mostrar [Private LLM](/es/power-local-llm/private-llm-review) o [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) tras años en la App Store. Los lectores que quieran flexibilidad de formato y chat de documentos sin costo deberían probarla; los lectores que valoran más la prueba social y un historial público más largo deberían empezar con Private LLM o PocketPal AI, y volver a revisar Noema cuando su número de valoraciones crezca.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Noema en la App Store](' + APP_STORE_URL + ') — precio, compatibilidad de plataformas, etiqueta de privacidad, calificación, versión y tamaño.',
          '[Sitio oficial de Noema (noemaai.com)](' + SITE_URL + ') — descripción del producto, formatos de modelo compatibles, afirmaciones sobre chat de documentos y privacidad.',
          '[Página de titularidad de Noema](https://noemaai.com/ownership) — entidad legal (NoemaAI LLC) detrás de la app y el sitio.',
          '[Alexandru Stamate en la App Store](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) — ficha de la cuenta de desarrollador.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Private LLM](/es/power-local-llm/private-llm-review) — una alternativa de pago con biblioteca seleccionada y un historial de lanzamientos más largo.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — una alternativa gratuita, de código abierto, solo GGUF.',
          '[Reseña de Enclave AI](/es/power-local-llm/enclave-ai-review) — otra app de IA en el dispositivo para comparar.',
          '[Reseña de Locally AI](/es/power-local-llm/locally-ai-review) — una alternativa gratuita solo de Apple MLX.',
          '[El directorio completo de software de LLM local](/es/power-local-llm/local-llm-software-directory) — un directorio más amplio de herramientas de LLM local en todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/noema-review-hero-pt.webp',
    title: 'Noema: análise (2026) — IA local multiformato para iPhone, iPad e Mac',
    seoTitle: 'Noema: análise 2026 — IA local para iPhone e Mac',
    intro:
      'O Noema, listado na App Store como "Noema: Local AI & Offline LLM" (conta de desenvolvedor: Alexandru Stamate; empresa: [NoemaAI LLC](https://noemaai.com/ownership)), é um aplicativo gratuito para iPhone, iPad, Mac (Apple Silicon) e Apple Vision Pro que executa modelos de linguagem de código aberto totalmente no dispositivo. É gratuito para baixar na [App Store da Apple](' +
      APP_STORE_URL +
      '), sem assinatura e sem compras no aplicativo. No momento desta análise, a versão atual era a 3.9, avaliada com 4,5 de 5 a partir de apenas 26 avaliações — confira a ficha atual da App Store para os números vigentes, já que o app recebe atualizações em ritmo quase diário. O que diferencia o Noema de muitos aplicativos móveis de IA local limitados a um único formato é que ele carrega modelos de cinco maneiras diferentes — GGUF, MLX, ExecuTorch, Core ML e os próprios Foundation Models da Apple — em vez de prender o usuário a um único ambiente de execução. Ele também oferece chat de documentos: importar PDFs e EPUBs e fazer perguntas fundamentadas em trechos indexados, um fluxo do tipo recuperação que roda inteiramente no dispositivo em vez de por um pipeline de RAG na nuvem.',
    metaDescription:
      'Análise do Noema: app gratuito para iPhone/iPad/Mac com 5 formatos de modelo (GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models) e chat de documentos PDF/EPUB no dispositivo. Preço, privacidade e alternativas.',
    twitterDescription:
      'Análise do Noema: um app gratuito para iPhone, iPad e Mac que executa modelos de IA local em cinco formatos — GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models — mais chat de documentos no dispositivo para PDFs e EPUBs.',
    audience:
      'Usuários de iPhone, iPad e Mac avaliando um app gratuito multiformato de IA local com chat de documentos frente a alternativas como Private LLM, PocketPal AI e Enclave AI — cobre formatos suportados, perguntas e respostas de documentos, privacidade e a ressalva do tamanho amostral de avaliações.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Noema review',
    targetKeywords: [
      'noema review',
      'noema app iphone',
      'noema local ai',
      'noema ios app',
      'noema vs private llm',
      'on-device ai document chat',
      'gguf mlx executorch core ml app',
      'best free local llm app for iphone',
    ],
    current_models_mentioned: ['Noema 1.5 2B'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac Apple Silicon (M1 ou posterior)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**O Noema é um app gratuito para iOS, iPadOS, macOS e visionOS, feito pelo desenvolvedor independente Alexandru Stamate ([NoemaAI LLC](https://noemaai.com/ownership)), que executa modelos de linguagem de código aberto totalmente no dispositivo em cinco formatos diferentes: GGUF, MLX, ExecuTorch, Core ML e os próprios Foundation Models da Apple.** Ele não custa nada na [App Store da Apple](' +
      APP_STORE_URL +
      '), sem assinatura ou compras no aplicativo, e adiciona chat de documentos no dispositivo para PDFs e EPUBs. No momento desta análise, tinha uma avaliação de 4,5 de 5 a partir de apenas 26 avaliações — uma amostra pequena o bastante para não ser equiparada a um app com milhares de avaliações. Leitores que queiram um histórico mais longo também devem comparar com [Private LLM](/pt/power-local-llm/private-llm-review) ou [Enclave AI](/pt/power-local-llm/enclave-ai-review).',
    quickAnswerTop: {
      en: {
        question: 'Is Noema a good free local AI app for iPhone and Mac?',
        answer:
          'Yes, if you want a free, actively maintained app that loads models in multiple formats (GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models) and adds on-device document chat for PDFs and EPUBs. Its 4.5-star rating is based on only 26 ratings, so treat that as an early signal rather than a proven track record — apps like Private LLM and Enclave AI have longer public histories.',
        bullets: [
          'Free on the Apple App Store, no subscription and no in-app purchases listed.',
          'iPhone, iPad, Mac (Apple Silicon), and Apple Vision Pro — requires iOS/iPadOS 18 or later.',
          'Loads models in five formats: GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models.',
          'Document chat: import PDFs and EPUBs for on-device, indexed, grounded Q&A.',
          'Version 3.9 at time of writing, updated within hours of this review — check the App Store for the current version.',
          '4.5/5 rating from 26 ratings as of this review — a small sample size.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Ist Noema eine gute kostenlose lokale KI-App für iPhone und Mac?',
        answer:
          'Ja, wenn Sie eine kostenlose, aktiv gepflegte App möchten, die Modelle in mehreren Formaten lädt (GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models) und einen Dokument-Chat auf dem Gerät für PDFs und EPUBs bietet. Die 4,5-Sterne-Bewertung basiert auf nur 26 Bewertungen — betrachten Sie das eher als frühes Signal denn als belegte Erfolgsbilanz. Apps wie Private LLM und Enclave AI haben eine längere öffentliche Historie.',
        bullets: [
          'Kostenlos im Apple App Store, kein Abonnement und keine In-App-Käufe gelistet.',
          'iPhone, iPad, Mac (Apple Silicon) und Apple Vision Pro — erfordert iOS/iPadOS 18 oder neuer.',
          'Lädt Modelle in fünf Formaten: GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models.',
          'Dokument-Chat: PDFs und EPUBs importieren für indexierte, fundierte Fragen und Antworten auf dem Gerät.',
          'Version 3.9 zum Zeitpunkt der Erstellung, wenige Stunden vor diesem Test aktualisiert — aktuelle Version im App Store prüfen.',
          '4,5/5 Bewertung aus 26 Bewertungen zum Zeitpunkt dieses Tests — eine kleine Stichprobe.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'Noema est-elle une bonne application d\'IA locale gratuite pour iPhone et Mac ?',
        answer:
          'Oui, si vous voulez une application gratuite et activement maintenue qui charge des modèles dans plusieurs formats (GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models) et propose un chat de documents sur l\'appareil pour les PDF et EPUB. Sa note de 4,5 étoiles repose sur seulement 26 avis, à considérer comme un signal précoce plutôt qu\'un historique éprouvé — des applications comme Private LLM et Enclave AI ont un historique public plus long.',
        bullets: [
          'Gratuite sur l\'App Store d\'Apple, sans abonnement ni achat intégré répertorié.',
          'iPhone, iPad, Mac (Apple Silicon) et Apple Vision Pro — nécessite iOS/iPadOS 18 ou version ultérieure.',
          'Charge les modèles dans cinq formats : GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models.',
          'Chat de documents : importez des PDF et EPUB pour des questions-réponses indexées et fondées, sur l\'appareil.',
          'Version 3.9 au moment de la rédaction, mise à jour quelques heures avant ce test — vérifiez la version actuelle sur l\'App Store.',
          'Note de 4,5/5 sur seulement 26 avis au moment de ce test — un échantillon restreint.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Es Noema una buena app de IA local gratuita para iPhone y Mac?',
        answer:
          'Sí, si buscas una app gratuita y activamente mantenida que carga modelos en varios formatos (GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models) y añade chat de documentos en el dispositivo para PDF y EPUB. Su calificación de 4.5 estrellas se basa en solo 26 valoraciones, así que trátala como una señal temprana y no como un historial comprobado — apps como Private LLM y Enclave AI tienen un historial público más largo.',
        bullets: [
          'Gratis en la App Store de Apple, sin suscripción ni compras dentro de la app.',
          'iPhone, iPad, Mac (Apple Silicon) y Apple Vision Pro — requiere iOS/iPadOS 18 o posterior.',
          'Carga modelos en cinco formatos: GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models.',
          'Chat de documentos: importa PDF y EPUB para preguntas y respuestas indexadas y fundamentadas en el dispositivo.',
          'Versión 3.9 al momento de esta reseña, actualizada horas antes de su publicación — verifica la versión actual en la App Store.',
          'Calificación de 4.5/5 con solo 26 valoraciones al momento de esta reseña — una muestra pequeña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O Noema é um bom aplicativo gratuito de IA local para iPhone e Mac?',
        answer:
          'Sim, se você quer um aplicativo gratuito e mantido ativamente que carrega modelos em vários formatos (GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models) e oferece chat de documentos no dispositivo para PDFs e EPUBs. A avaliação de 4,5 estrelas se baseia em apenas 26 avaliações, então trate isso como um sinal inicial, não um histórico comprovado — apps como Private LLM e Enclave AI têm um histórico público mais longo.',
        bullets: [
          'Gratuito na App Store da Apple, sem assinatura e sem compras no aplicativo listadas.',
          'iPhone, iPad, Mac (Apple Silicon) e Apple Vision Pro — exige iOS/iPadOS 18 ou posterior.',
          'Carrega modelos em cinco formatos: GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models.',
          'Chat de documentos: importe PDFs e EPUBs para perguntas e respostas indexadas e fundamentadas no dispositivo.',
          'Versão 3.9 no momento desta análise, atualizada poucas horas antes da publicação — confira a versão atual na App Store.',
          'Avaliação de 4,5/5 com apenas 26 avaliações no momento desta análise — uma amostra pequena.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'Noemaは iPhone と Mac 向けの優れた無料ローカルAIアプリですか?',
        answer:
          '複数の形式(GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models)でモデルを読み込める、無料で積極的にメンテナンスされているアプリを求めるなら、はいです。PDFやEPUBのオンデバイス文書チャットも追加されています。4.5の評価はわずか26件の評価に基づくもので、実績というより初期のシグナルとして捉えてください — Private LLMやEnclave AIはより長い公開履歴を持っています。',
        bullets: [
          'Apple App Storeで無料。サブスクリプションやアプリ内課金は掲載されていません。',
          'iPhone、iPad、Mac(Apple Silicon)、Apple Vision Pro対応 — iOS/iPadOS 18以降が必要です。',
          '5つの形式でモデルを読み込み: GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models。',
          '文書チャット: PDFやEPUBをインポートし、オンデバイスでインデックス化された根拠のある質問応答が可能。',
          '本レビュー執筆時点でバージョン3.9。公開の数時間前に更新済み — 現在のバージョンはApp Storeで確認してください。',
          '本レビュー時点で評価4.5/5、評価数はわずか26件 — サンプルサイズは小さいです。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'Noema 是适合 iPhone 和 Mac 的优质免费本地 AI 应用吗?',
        answer:
          '如果你想要一款免费、持续维护、支持多种格式加载模型(GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models)并提供设备端文档聊天功能(支持 PDF 和 EPUB)的应用,答案是肯定的。它的 4.5 星评分仅基于 26 条评价,应视为早期信号,而非成熟的长期记录 — Private LLM 和 Enclave AI 拥有更长的公开历史。',
        bullets: [
          '在 Apple App Store 免费提供,未列出订阅或应用内购买。',
          '支持 iPhone、iPad、Mac(Apple Silicon)和 Apple Vision Pro — 需要 iOS/iPadOS 18 或更高版本。',
          '支持五种模型格式加载: GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models。',
          '文档聊天: 导入 PDF 和 EPUB,进行设备端索引、有据可查的问答。',
          '撰写本评测时的版本为 3.9,发布前几小时刚更新 — 请在 App Store 确认当前版本。',
          '截至本评测,评分为 4.5/5,仅基于 26 条评价 — 样本量较小。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل Noema تطبيق ذكاء اصطناعي محلي مجاني جيد لأجهزة iPhone و Mac؟',
        answer:
          'نعم، إذا كنت تريد تطبيقًا مجانيًا يُصان بنشاط ويُحمّل النماذج بعدة صيغ (GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation) ويضيف محادثة مستندات على الجهاز لملفات PDF وEPUB. يستند تقييمه البالغ 4.5 نجوم إلى 26 تقييمًا فقط، لذا تعامل معه كإشارة مبكرة وليس سجلًا موثوقًا طويل الأمد — تطبيقات مثل Private LLM وEnclave AI لها تاريخ عام أطول.',
        bullets: [
          'مجاني على متجر تطبيقات Apple؛ لا يوجد اشتراك ولا مشتريات داخل التطبيق مذكورة.',
          'يعمل على iPhone وiPad وMac (Apple Silicon) وApple Vision Pro — يتطلب iOS/iPadOS 18 أو أحدث.',
          'يُحمّل النماذج بخمس صيغ: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation.',
          'محادثة المستندات: استيراد ملفات PDF وEPUB للحصول على إجابات مفهرسة ومبنية على الجهاز.',
          'الإصدار 3.9 وقت كتابة هذه المراجعة، وقد تم تحديثه قبل ساعات من نشرها — تحقق من الإصدار الحالي على متجر التطبيقات.',
          'تقييم 4.5 من 5 بناءً على 26 تقييمًا فقط وقت هذه المراجعة — عينة صغيرة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'Noema는 iPhone과 Mac에 적합한 우수한 무료 로컬 AI 앱입니까?',
        answer:
          '여러 형식(GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models)으로 모델을 불러올 수 있고 PDF와 EPUB를 위한 온디바이스 문서 채팅 기능을 갖춘, 무료이면서 활발히 유지 관리되는 앱을 원한다면 그렇습니다. 4.5점 평점은 단 26개의 평가에 근거한 것이므로, 검증된 실적이 아니라 초기 신호로 받아들여야 합니다 — Private LLM과 Enclave AI는 더 긴 공개 이력을 가지고 있습니다.',
        bullets: [
          'Apple App Store에서 무료로 제공되며, 구독이나 인앱 구매가 게재되어 있지 않습니다.',
          'iPhone, iPad, Mac(Apple Silicon), Apple Vision Pro를 지원하며 iOS/iPadOS 18 이상이 필요합니다.',
          '다섯 가지 형식으로 모델을 불러옵니다: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
          '문서 채팅: PDF와 EPUB를 가져와 온디바이스에서 색인화되고 근거에 기반한 질의응답이 가능합니다.',
          '이 리뷰 작성 시점 버전은 3.9이며, 발행 몇 시간 전에 업데이트되었습니다 — 현재 버전은 App Store에서 확인하십시오.',
          '이 리뷰 시점 기준 26개의 평가만으로 4.5/5점을 받았습니다 — 표본 크기가 작습니다.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Noema', anchor: 'what-is-noema' },
      { label: 'Como começar', anchor: 'how-to-get-started' },
      { label: 'Formatos de modelo suportados', anchor: 'supported-model-formats' },
      { label: 'Chat de documentos: perguntas e respostas de PDF e EPUB', anchor: 'document-chat' },
      { label: 'Plataformas e requisitos', anchor: 'platforms' },
      { label: 'Privacidade: o que o Noema coleta e o que não coleta', anchor: 'privacy' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Noema vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Noema é indicado', anchor: 'who-should-use' },
      { label: 'Para quem o Noema não é indicado', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Resumo',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Noema é um app gratuito para iPhone, iPad, Mac e Vision Pro do desenvolvedor independente Alexandru Stamate (NoemaAI LLC) que executa modelos de IA local em cinco formatos — GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models — e adiciona chat de documentos no dispositivo para PDFs e EPUBs.',
          },
          {
            type: 'plain-terms',
            text: 'A maioria dos apps de IA local para celular só executa um único tipo de arquivo de modelo. O Noema pode carregar vários tipos diferentes, além do próprio modelo integrado da Apple, para que você não fique travado se o seu modelo preferido só vier em um formato — e ele também pode ler um PDF ou EPUB que você fornecer e responder perguntas fundamentadas nesse documento, tudo sem conexão com a internet.',
          },
        ],
        items: [
          'Preço: gratuito na [App Store da Apple](' + APP_STORE_URL + '); sem assinatura e sem compras no aplicativo listadas no momento desta análise.',
          'Plataformas: iPhone, iPad, Mac (Apple Silicon) e Apple Vision Pro — sem app oficial para Android, Windows ou Linux.',
          'Desenvolvedor: [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) / [NoemaAI LLC](https://noemaai.com/ownership).',
          'Formatos de modelo: GGUF, MLX, ExecuTorch, Core ML e os Foundation Models da Apple no dispositivo — cinco formatos em um só app.',
          'Chat de documentos: importe PDFs e EPUBs; o app indexa trechos para perguntas e respostas fundamentadas no dispositivo.',
          'Privacidade: o desenvolvedor declara que o app não coleta dados; nenhuma conta é necessária para usá-lo.',
          'Avaliação: 4,5 de 5 a partir de apenas 26 avaliações no momento desta análise — uma amostra pequena, não um histórico longo.',
          'Versão 3.9 no momento da redação, com uma atualização lançada poucas horas antes desta análise — confirme a versão atual na App Store antes de depender de um recurso específico.',
        ],
      },
      whatIsNoema: {
        id: 'what-is-noema',
        title: 'O que é o Noema',
        content: [
          '**O Noema é um app nativo da Apple que baixa e executa modelos de linguagem de código aberto diretamente em um iPhone, iPad, Mac ou visor Vision Pro, sem nenhum componente do lado do servidor necessário para o chat local.** Depois de baixar um modelo, o app pode gerar uma resposta sem conexão com a internet.',
          'Ele é desenvolvido por [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674), cuja empresa [NoemaAI LLC](https://noemaai.com/ownership) possui e opera tanto o app quanto o site [noemaai.com](' +
          SITE_URL +
          '), segundo a própria página de titularidade do site. O app está listado na App Store com o ID 6751169935. Esta análise avalia as próprias declarações do desenvolvedor — "0 nuvem necessária para o chat local", nenhuma exigência de conta, nenhuma coleta de dados — em confronto com o rótulo de privacidade da App Store e a descrição pública do app, em vez de aceitar o discurso de marketing sem verificação.',
          'O app é atualizado com uma frequência incomum: a versão avaliada para esta análise, a 3.9, havia sido lançada poucas horas antes da redação desta análise, e as notas de "novidades" dessa versão descreviam correções na estabilidade de modelos MLX, indexação de documentos, modelos de visão e compatibilidade com Core ML — evidência de manutenção ativa e contínua, não de um projeto parado ou abandonado.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como começar',
        content: [
          '**Colocar o Noema para funcionar leva poucos minutos e não exige criação de conta.**',
        ],
        numberedItems: [
          {
            title: 'Baixe o aplicativo',
            whyItMatters: 'Baixe o [Noema na App Store da Apple](' + APP_STORE_URL + ') gratuitamente. Não há período de teste com o qual se preocupar nem assinatura para cancelar depois — o app completo é gratuito desde o primeiro uso.',
          },
          {
            title: 'Escolha um formato e uma fonte de modelo',
            whyItMatters: 'Navegue e baixe um modelo GGUF do Hugging Face diretamente dentro do app, ou use um modelo MLX, ExecuTorch ou Core ML, ou recorra ao Foundation Model integrado da Apple se preferir não baixar nada.',
          },
          {
            title: 'Importe um documento para o chat de documentos',
            whyItMatters: 'Adicione um PDF ou EPUB pelo app Arquivos ou pelo iCloud Drive. O Noema indexa os trechos do documento no dispositivo para que você possa fazer perguntas fundamentadas sobre o conteúdo, em vez de conversar apenas com base no conhecimento geral do modelo.',
          },
          {
            title: 'Converse, resuma ou gere flashcards',
            whyItMatters: 'Depois de carregar um modelo e, opcionalmente, um documento, use o app totalmente offline para conversar, resumir documentos, tomar notas ou gerar flashcards.',
          },
          {
            title: 'Opcional: ative a busca na web ou um provedor remoto',
            whyItMatters: 'Por padrão, o Noema roda apenas localmente. O próprio site do desenvolvedor descreve um "modo off-grid" que bloqueia tráfego HTTP e HTTPS externo; a busca na web ou uma conexão com um provedor de modelo remoto é uma opção explícita e separada, não o comportamento padrão.',
          },
        ],
        note: 'Os tamanhos exatos de download, a lista atual de modelos suportados e os requisitos mínimos de dispositivo podem mudar entre atualizações da App Store — confirme as especificações atuais dentro do app ou em [noemaai.com](' + SITE_URL + ') antes de se comprometer com um download grande em um plano de dados limitado.',
      },
      supportedModelFormats: {
        id: 'supported-model-formats',
        title: 'Formatos de modelo suportados',
        itemHeadings: true,
        content: [
          '**O principal diferencial declarado do Noema é carregar modelos em cinco formatos diferentes, em vez de apenas um.** A maioria dos apps móveis de IA local se compromete com um único ambiente de execução — llama.cpp e GGUF é a escolha mais comum neste grupo de análises. O Noema, em vez disso, suporta GGUF, MLX, ExecuTorch, Core ML e os próprios Foundation Models da Apple lado a lado, segundo a própria descrição do app na App Store e [noemaai.com](' + SITE_URL + ').',
        ],
        columns: ['Formato', 'O que é', 'Por que importa aqui'],
        rows: [
          {
            'Formato': 'GGUF',
            'O que é': 'O formato de modelo quantizado do llama.cpp, usado pela maioria dos apps de IA local de código aberto e pela maioria dos modelos quantizados pela comunidade no Hugging Face.',
            'Por que importa aqui': 'Dá acesso ao maior conjunto de arquivos de modelo prontos da comunidade sem esperar uma conversão específica de formato.',
          },
          {
            'Formato': 'MLX',
            'O que é': 'O próprio framework de arrays de aprendizado de máquina da Apple, criado para usar diretamente a memória unificada e a aceleração de GPU Metal do Apple Silicon.',
            'Por que importa aqui': 'Pode rodar consideravelmente mais rápido no Apple Silicon do que um formato genérico ligado à CPU, ao custo de funcionar bem apenas em hardware Apple.',
          },
          {
            'Formato': 'ExecuTorch',
            'O que é': 'O ambiente de execução de inferência no dispositivo do PyTorch, projetado para exportar modelos PyTorch e executá-los com eficiência em hardware móvel e de borda.',
            'Por que importa aqui': 'Amplia o conjunto de modelos que o Noema pode carregar para além do ecossistema GGUF/MLX, incluindo modelos exportados diretamente do PyTorch.',
          },
          {
            'Formato': 'Core ML',
            'O que é': 'O formato nativo de aprendizado de máquina da Apple, otimizado para rodar na CPU, GPU e Neural Engine de dispositivos Apple.',
            'Por que importa aqui': 'Permite que o app carregue modelos especificamente otimizados para o Neural Engine da Apple, e não apenas formatos genéricos.',
          },
          {
            'Formato': 'Apple Foundation Models',
            'O que é': 'O próprio grande modelo de linguagem integrado da Apple, executado no dispositivo, disponível em todo o sistema a partir do iOS 18 em hardware compatível.',
            'Por que importa aqui': 'Permite experimentar o chat de documentos ou o chat geral imediatamente, sem nenhum download de modelo, usando o que já está no dispositivo.',
          },
        ],
        note: 'O suporte a formatos e a lista exata de modelos podem mudar entre atualizações da App Store. Confirme a compatibilidade de formato atual e os requisitos de hardware para um modelo específico dentro do app antes de depender disso.',
      },
      documentChat: {
        id: 'document-chat',
        title: 'Chat de documentos: perguntas e respostas de PDF e EPUB',
        content: [
          '**O Noema importa PDFs e EPUBs, incluindo livros didáticos, e indexa seus trechos no dispositivo para que um modelo carregado possa responder perguntas fundamentadas nesse documento específico.** O próprio site do desenvolvedor descreve isso como ler um documento "mais a fundo" e fundamentar as respostas "em seus próprios conjuntos de dados com recuperação que permanece no dispositivo" — um fluxo do tipo recuperação semelhante em espírito à geração aumentada por recuperação (RAG) do lado do servidor, mas executado localmente em vez de contra um banco de dados vetorial na nuvem.',
          'Além de responder perguntas, o app pode gerar resumos, notas e flashcards a partir de um documento importado, e suporta modelos com capacidade de visão para documentos ou imagens que incluam diagramas ou páginas digitalizadas.',
          'Esta análise não comparou de forma independente a precisão de recuperação da indexação de documentos do Noema com ferramentas de RAG de desktop dedicadas — a descrição acima reflete os recursos declarados pelo próprio desenvolvedor, não um teste de precisão independente.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Plataformas e requisitos',
        itemHeadings: true,
        columns: ['Plataforma', 'O que esperar', 'Nota importante'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'O que esperar': 'Exige iOS ou iPadOS 18 ou posterior, segundo a ficha da App Store. Executa toda a gama de formatos de modelo e o chat de documentos.',
            'Nota importante': 'Modelos maiores e documentos importados maiores exigem mais armazenamento livre e RAM; modelos quantizados menores são o ponto de partida mais seguro em dispositivos mais antigos.',
          },
          {
            'Plataforma': 'Mac',
            'O que esperar': 'App nativo para Macs com Apple Silicon (M1 ou posterior), segundo a ficha da App Store.',
            'Nota importante': 'A memória unificada do Apple Silicon geralmente permite modelos maiores do que um iPhone ou iPad equivalente.',
          },
          {
            'Plataforma': 'Apple Vision Pro',
            'O que esperar': 'Listado como dispositivo suportado na App Store.',
            'Nota importante': 'Esta análise não testou a experiência no Vision Pro de forma independente; trate isso como compatibilidade listada na App Store, não como um recurso verificado na prática.',
          },
          {
            'Plataforma': 'Android, Windows, Linux',
            'O que esperar': 'Sem app oficial no Google Play, na Microsoft Store ou em qualquer repositório de pacotes Linux, segundo o próprio site do desenvolvedor.',
            'Nota importante': 'Leitores nessas plataformas devem considerar o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) (Android/iOS) ou outra opção multiplataforma.',
          },
        ],
        note: 'O tamanho do app era de aproximadamente 368 MB no momento da análise, com a interface disponível em inglês mais dez outros idiomas (árabe, francês, alemão, hindi, japonês, coreano, romeno, chinês simplificado, espanhol, turco), segundo a ficha da App Store. A App Store indica classificação etária 13+.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade: o que o Noema coleta e o que não coleta',
        content: [
          '**O rótulo de privacidade da App Store do Noema indica que o desenvolvedor não coleta nenhum dado do app**, e o app não exige conta, login ou cadastro para ser usado.',
          'O próprio site do desenvolvedor descreve um "modo off-grid" que bloqueia tráfego HTTP e HTTPS externo, e afirma que o chat local não exige nenhuma conectividade com a nuvem. Recursos opcionais — busca na web e conexão com um provedor de modelo remoto — são descritos como opções explícitas, não padrões.',
        ],
        items: [
          '**Nenhuma conta necessária.** Baixe e use o app sem criar um perfil ou fazer login.',
          '**Nenhuma coleta de dados, segundo o rótulo da App Store.** O rótulo de nutrição de privacidade da Apple para esta ficha mostra que nenhum dado é coletado pelo app.',
          '**Modo off-grid.** O próprio site do desenvolvedor descreve um modo que bloqueia tráfego HTTP e HTTPS externo, para leitores que queiram uma garantia firme contra qualquer chamada de rede de saída.',
          '**Recursos de rede opcionais são opt-in.** A busca na web e as conexões a provedores remotos são descritas como recursos que o usuário precisa ativar explicitamente, não o estado padrão.',
          '**API local e Noema Relay.** O site do desenvolvedor descreve uma API de rede local privada para conectar outros apps a modelos rodando no Noema, além de um recurso "Noema Relay" para acesso a modelos entre dispositivos — esta análise trata isso como recursos descritos pelo desenvolvedor, não como auditorias de segurança de rede verificadas de forma independente.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Vantagem': 'Gratuito, sem assinatura',
            'O que significa no uso real': 'Todo recurso, incluindo o chat de documentos, está disponível sem custo desde o primeiro uso.',
            'Limitação / ressalva': 'Um app gratuito de um único desenvolvedor tem menos respaldo institucional do que um app pago de uma equipe maior e mais estabelecida.',
          },
          {
            'Vantagem': 'Cinco formatos de modelo suportados',
            'O que significa no uso real': 'GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models cobrem uma fatia mais ampla do ecossistema de modelos do que um concorrente de formato único.',
            'Limitação / ressalva': 'Mais formatos podem significar mais casos extremos; as próprias notas de versão do app, de julho a setembro, descrevem correções contínuas na compatibilidade com MLX e Core ML.',
          },
          {
            'Vantagem': 'Chat de documentos no dispositivo',
            'O que significa no uso real': 'Importe um PDF ou EPUB e faça perguntas fundamentadas, gere resumos ou flashcards, sem enviar o documento a lugar nenhum.',
            'Limitação / ressalva': 'A precisão de recuperação em documentos longos ou complexos não foi comparada de forma independente pela PromptQuorum com ferramentas de RAG de desktop dedicadas.',
          },
          {
            'Vantagem': 'Sem conta, sem coleta de dados',
            'O que significa no uso real': 'Use o app imediatamente, sem nada para cadastrar; o rótulo de privacidade da App Store mostra que nenhum dado é coletado.',
            'Limitação / ressalva': 'Esta análise não auditou de forma independente o código-fonte do app; ela se baseia no rótulo de privacidade da App Store e nas próprias declarações do desenvolvedor.',
          },
          {
            'Vantagem': 'Ritmo de atualização muito ativo',
            'O que significa no uso real': 'Lançamentos frequentes sugerem um app mantido ativamente, e não abandonado.',
            'Limitação / ressalva': 'Uma frequência alta de lançamentos também significa que números de versão específicos, detalhes de recursos e estados de bugs nesta análise podem ficar desatualizados mais rápido do que em um app de evolução mais lenta — verifique o comportamento atual no app.',
          },
          {
            'Vantagem': 'Avaliado com 4,5 de 5',
            'O que significa no uso real': 'A avaliação média é alta.',
            'Limitação / ressalva': 'Essa média se baseia em apenas 26 avaliações no momento desta análise — uma amostra pequena, que não deve ser equiparada a um app com uma base de avaliações grande e estabelecida.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Noema vs. alternativas',
        columns: ['App', 'Plataformas', 'Preço', 'Flexibilidade de modelos', 'Diferença principal'],
        rows: [
          {
            'App': 'Noema',
            'Plataformas': 'iPhone/iPad/Mac/Vision Pro (somente Apple)',
            'Preço': 'Gratuito',
            'Flexibilidade de modelos': 'Cinco formatos: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models',
            'Diferença principal': 'Carregamento multiformato mais chat de documentos no dispositivo; amostra de avaliações ainda pequena',
          },
          {
            'App': '[Private LLM](/pt/power-local-llm/private-llm-review)',
            'Plataformas': 'iPhone/iPad/Mac (somente Apple)',
            'Preço': 'US$ 4,99 compra única',
            'Flexibilidade de modelos': '140+ modelos selecionados; quantização OmniQuant/GPTQ',
            'Diferença principal': 'Pago, código fechado, biblioteca selecionada com três anos de histórico público de lançamentos',
          },
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, com algum suporte a Android',
            'Preço': 'Gratuito, código aberto',
            'Flexibilidade de modelos': 'Qualquer arquivo GGUF que o usuário obtenha no Hugging Face ou em outro lugar',
            'Diferença principal': 'Gratuito e de código aberto; apenas GGUF, sem chat de documentos integrado',
          },
          {
            'App': '[Enclave AI](/pt/power-local-llm/enclave-ai-review)',
            'Plataformas': 'Veja a ficha atual',
            'Preço': 'Veja a ficha atual',
            'Flexibilidade de modelos': 'Veja a análise completa para o suporte atual de modelos',
            'Diferença principal': 'Veja a análise completa do Enclave AI para uma comparação detalhada',
          },
          {
            'App': '[Locally AI](/pt/power-local-llm/locally-ai-review)',
            'Plataformas': 'iPhone/iPad/Mac',
            'Preço': 'Gratuito',
            'Flexibilidade de modelos': 'Construído somente sobre o Apple MLX; acesso ao modelo de fundação integrado da Apple',
            'Diferença principal': 'Alternativa gratuita, somente MLX, contra o suporte a cinco formatos do Noema',
          },
        ],
        note: 'Os detalhes de plataforma, preço e recursos de apps de terceiros mudam com frequência — verifique as especificações atuais na ficha de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Noema é indicado',
        items: [
          '**Usuários da Apple que querem flexibilidade de formato.** Leitores que já têm arquivos de modelo em formatos diferentes — ou que querem experimentar modelos GGUF, MLX, ExecuTorch e Core ML sem trocar de app — obtêm os quatro mais o Foundation Model integrado da Apple em um só lugar.',
          '**Leitores que querem perguntas e respostas de documentos no dispositivo.** Importar um PDF ou EPUB e fazer perguntas fundamentadas localmente é um recurso distinto que nem todo app móvel de IA local oferece.',
          '**Usuários com orçamento limitado.** O app é gratuito, sem assinatura, o que importa para leitores que querem experimentar IA local sem comprometer dinheiro antecipadamente.',
          '**Early adopters confortáveis com um histórico de avaliações recente.** Leitores que não se importam que a média de 4,5 estrelas se baseie em apenas 26 avaliações, e que valorizam um app ativo e frequentemente atualizado mais do que um histórico público mais longo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Noema não é indicado',
        items: [
          '**Usuários de Android, Windows ou Linux.** O Noema não tem app oficial em nenhuma dessas plataformas — escolha o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) (suporte parcial a Android) ou outra opção multiplataforma.',
          '**Leitores que querem um histórico de avaliações longo e estabelecido antes de confiar em um app.** Com apenas 26 avaliações no momento desta análise, leitores que priorizam prova social também devem considerar o [Private LLM](/pt/power-local-llm/private-llm-review), que tem um histórico público de vários anos.',
          '**Leitores que querem a maior biblioteca de modelos selecionados possível.** A flexibilidade de formato do Noema é ampla, mas ele não oferece uma biblioteca selecionada de 140+ modelos como o [Private LLM](/pt/power-local-llm/private-llm-review) oferece.',
          '**Equipes que querem uma implantação gerenciada centralmente.** O Noema é um app de consumo de usuário único e dispositivo único, sem console de administração ou faturamento de equipe — organizações devem buscar infraestrutura de LLM local autogerenciada no lado do servidor.',
          '**Leitores que precisam de benchmarks independentes de terceiros sobre a precisão de recuperação de documentos.** Esta análise se baseia na própria descrição do desenvolvedor sobre o recurso de chat de documentos, não em um benchmark de precisão independente frente a ferramentas de RAG dedicadas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quanto custa o Noema?',
            a: 'O Noema é [gratuito na App Store da Apple](' + APP_STORE_URL + '), verificado para esta análise em 2026-09-12. Não há assinatura nem compras no aplicativo na ficha atual da App Store. A disponibilidade na App Store pode mudar com o tempo — confirme o preço atual antes de baixar.',
          },
          {
            q: 'Quais formatos de modelo o Noema suporta?',
            a: 'O Noema carrega modelos em cinco formatos: GGUF, MLX, ExecuTorch, Core ML e os próprios Foundation Models da Apple no dispositivo, segundo a descrição do app na App Store e [noemaai.com](' + SITE_URL + '). Esse suporte multiformato é mais amplo do que a maioria dos apps concorrentes de formato único, que geralmente se limitam a GGUF ou a MLX apenas.',
          },
          {
            q: 'O Noema está disponível no Android ou no Windows?',
            a: 'Não existe versão oficial no Google Play, na Microsoft Store ou em qualquer repositório de pacotes Linux. O Noema é construído especificamente para iPhone, iPad, Mac e Apple Vision Pro.',
          },
          {
            q: 'Quem desenvolve o Noema?',
            a: 'O Noema é desenvolvido por [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674); o site [noemaai.com](' + SITE_URL + ') e o app são de propriedade e operados pela NoemaAI LLC, segundo a própria [página de titularidade](https://noemaai.com/ownership) do site.',
          },
          {
            q: 'O que é o chat de documentos no Noema?',
            a: 'O chat de documentos permite importar um PDF ou EPUB, incluindo livros didáticos, e fazer perguntas fundamentadas nesse documento específico. O Noema indexa os trechos do documento no dispositivo, um fluxo do tipo recuperação semelhante em espírito à RAG do lado do servidor, mas executado localmente. O app também pode gerar resumos, notas e flashcards a partir de um documento importado.',
          },
          {
            q: 'O Noema funciona totalmente offline?',
            a: 'Sim, para o chat local e o chat de documentos assim que um modelo e um eventual documento estiverem carregados. O próprio site do desenvolvedor descreve um "modo off-grid" que bloqueia tráfego HTTP e HTTPS externo; recursos opcionais como busca na web ou um provedor de modelo remoto são opções explícitas e separadas, não o padrão.',
          },
          {
            q: 'O Noema coleta algum dado pessoal?',
            a: 'O rótulo de nutrição de privacidade da App Store da Apple para esta ficha indica que o desenvolvedor não coleta nenhum dado do app, e nenhuma conta ou login é exigido. Esta análise se baseia no rótulo de privacidade da App Store e nas próprias declarações do desenvolvedor, não em uma auditoria independente do código-fonte.',
          },
          {
            q: 'Quão confiável é a avaliação de 4,5 estrelas do Noema?',
            a: 'A média de 4,5 de 5 se baseia em apenas 26 avaliações no momento desta análise — uma amostra pequena comparada a apps com centenas ou milhares de avaliações. Trate isso como um sinal inicial e positivo, e não como prova de um histórico longo e comprovado, e verifique novamente o número atual de avaliações na App Store antes de confiar nele.',
          },
          {
            q: 'Como o Noema se compara ao Private LLM?',
            a: 'O Noema é gratuito e suporta cinco formatos de modelo (GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models) mais chat de documentos no dispositivo, mas tem apenas 26 avaliações no momento desta análise. O [Private LLM](/pt/power-local-llm/private-llm-review) custa US$ 4,99 em compra única, oferece uma biblioteca selecionada de 140+ modelos e tem um histórico público de lançamentos de três anos. Escolha o Noema pela flexibilidade de formato e pelo chat de documentos sem custo; escolha o Private LLM por uma experiência mais estabelecida e selecionada.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Noema se destaca no grupo de apps móveis de IA local por um motivo específico e verificável: ele carrega modelos em cinco formatos diferentes — GGUF, MLX, ExecuTorch, Core ML e os próprios Foundation Models da Apple — enquanto a maioria dos apps concorrentes se limita a um ou dois. Ele combina isso com chat de documentos no dispositivo para PDFs e EPUBs, tudo gratuitamente e sem assinatura. Seu ritmo de atualização muito frequente, evidenciado por uma versão lançada poucas horas antes desta análise, aponta para manutenção ativa, e não para um projeto paralelo abandonado. A ressalva honesta é sua juventude como produto avaliado: uma média de 4,5 estrelas apoiada em apenas 26 avaliações é um sinal inicial positivo, não o tipo de histórico com amostra grande que [Private LLM](/pt/power-local-llm/private-llm-review) ou [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) conseguem mostrar depois de anos na App Store. Leitores que querem flexibilidade de formato e chat de documentos sem custo devem experimentá-lo; leitores que dão mais peso à prova social e a um histórico público mais longo devem começar pelo Private LLM ou pelo PocketPal AI, e reconsiderar o Noema quando seu número de avaliações crescer.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Noema na App Store](' + APP_STORE_URL + ') — preço, compatibilidade de plataforma, rótulo de privacidade, avaliação, versão e tamanho.',
          '[Site oficial do Noema (noemaai.com)](' + SITE_URL + ') — visão geral do produto, formatos de modelo suportados, chat de documentos e declarações de privacidade.',
          '[Página de titularidade do Noema](https://noemaai.com/ownership) — entidade jurídica (NoemaAI LLC) por trás do app e do site.',
          '[Alexandru Stamate na App Store](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) — ficha da conta de desenvolvedor.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Private LLM](/pt/power-local-llm/private-llm-review) — uma alternativa paga com biblioteca selecionada e histórico de lançamentos mais longo.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — uma alternativa gratuita e de código aberto, somente GGUF.',
          '[Análise do Enclave AI](/pt/power-local-llm/enclave-ai-review) — outro app de IA no dispositivo para comparação.',
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — uma alternativa gratuita, somente Apple MLX.',
          '[O diretório completo de software de LLM local](/pt/power-local-llm/local-llm-software-directory) — um diretório mais amplo de ferramentas de LLM local em todas as plataformas.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/noema-review-hero-ja.webp',
    title: 'Noemaレビュー(2026):iPhone・iPad・Mac向けマルチフォーマットのローカルAI',
    seoTitle: 'Noemaレビュー2026:iPhone・Mac向けローカルAIアプリ',
    intro:
      'Noemaは、App Storeで「Noema: Local AI & Offline LLM」として掲載されているアプリです(開発者アカウント:Alexandru Stamate、企業:[NoemaAI LLC](https://noemaai.com/ownership))。iPhone、iPad、Mac(Apple Silicon)、Apple Vision Pro向けの無料アプリで、オープンソースの言語モデルを完全にオンデバイスで実行します。[Apple App Store](' +
      APP_STORE_URL +
      ')から無料でダウンロードでき、サブスクリプションもアプリ内課金もありません。本レビュー時点での現行バージョンは3.9で、評価はわずか26件から4.5/5でした — アプリはほぼ毎日更新されるため、最新の数値は現在のApp Storeの掲載情報を確認してください。Noemaが単一形式に限定された多くのモバイル向けローカルAIアプリと異なる点は、モデルを5つの異なる方法 — GGUF、MLX、ExecuTorch、Core ML、Apple独自のFoundation Models — で読み込める点で、ユーザーを単一のランタイムに縛り付けません。文書チャットもサポートしており、PDFやEPUBをインポートしてインデックス化された文章に基づく質問ができます。これはクラウドのRAGパイプラインではなく、完全にオンデバイスで動作する検索型のワークフローです。',
    metaDescription:
      'Noemaレビュー:iPhone/iPad/Mac向け無料アプリ。5つのモデル形式(GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models)とオンデバイスのPDF/EPUB文書チャットに対応。価格、プライバシー、代替アプリを解説。',
    twitterDescription:
      'Noemaレビュー:iPhone、iPad、Mac向けの無料アプリで、GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Modelsという5つの形式でローカルAIモデルを実行。PDFとEPUB向けのオンデバイス文書チャットも搭載。',
    audience:
      'Private LLM、PocketPal AI、Enclave AIなどの代替アプリと比較しながら、文書チャット機能を備えた無料のマルチフォーマット・ローカルAIアプリを検討しているiPhone・iPad・Macユーザー向け。対応形式、文書Q&A、プライバシー、評価件数の少なさに関する注意点を解説。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Noema review',
    targetKeywords: [
      'noema review',
      'noema app iphone',
      'noema local ai',
      'noema ios app',
      'noema vs private llm',
      'on-device ai document chat',
      'gguf mlx executorch core ml app',
      'best free local llm app for iphone',
    ],
    current_models_mentioned: ['Noema 1.5 2B'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple SiliconMac(M1以降)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Noemaは、独立系開発者Alexandru Stamate氏([NoemaAI LLC](https://noemaai.com/ownership))によるiOS・iPadOS・macOS・visionOS向けの無料アプリで、オープンソースの言語モデルをGGUF、MLX、ExecuTorch、Core ML、Apple独自のFoundation Modelsという5つの異なる形式で完全にオンデバイス実行します。**[Apple App Store](' +
      APP_STORE_URL +
      ')では無料で、サブスクリプションもアプリ内課金もなく、PDFやEPUB向けのオンデバイス文書チャットも追加されています。本レビュー時点では、わずか26件の評価から4.5/5の評価を得ていました — これは数千件の評価を持つアプリと同列に扱うには十分に小さいサンプルです。より長い実績を求める読者は、[Private LLM](/ja/power-local-llm/private-llm-review)や[Enclave AI](/ja/power-local-llm/enclave-ai-review)とも比較すべきです。',
    quickAnswerTop: {
      en: {
        question: 'Is Noema a good free local AI app for iPhone and Mac?',
        answer:
          'Yes, if you want a free, actively maintained app that loads models in multiple formats (GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models) and adds on-device document chat for PDFs and EPUBs. Its 4.5-star rating is based on only 26 ratings, so treat that as an early signal rather than a proven track record — apps like Private LLM and Enclave AI have longer public histories.',
        bullets: [
          'Free on the Apple App Store, no subscription and no in-app purchases listed.',
          'iPhone, iPad, Mac (Apple Silicon), and Apple Vision Pro — requires iOS/iPadOS 18 or later.',
          'Loads models in five formats: GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models.',
          'Document chat: import PDFs and EPUBs for on-device, indexed, grounded Q&A.',
          'Version 3.9 at time of writing, updated within hours of this review — check the App Store for the current version.',
          '4.5/5 rating from 26 ratings as of this review — a small sample size.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Ist Noema eine gute kostenlose lokale KI-App für iPhone und Mac?',
        answer:
          'Ja, wenn Sie eine kostenlose, aktiv gepflegte App möchten, die Modelle in mehreren Formaten lädt (GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models) und einen Dokument-Chat auf dem Gerät für PDFs und EPUBs bietet. Die 4,5-Sterne-Bewertung basiert auf nur 26 Bewertungen — betrachten Sie das eher als frühes Signal denn als belegte Erfolgsbilanz. Apps wie Private LLM und Enclave AI haben eine längere öffentliche Historie.',
        bullets: [
          'Kostenlos im Apple App Store, kein Abonnement und keine In-App-Käufe gelistet.',
          'iPhone, iPad, Mac (Apple Silicon) und Apple Vision Pro — erfordert iOS/iPadOS 18 oder neuer.',
          'Lädt Modelle in fünf Formaten: GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models.',
          'Dokument-Chat: PDFs und EPUBs importieren für indexierte, fundierte Fragen und Antworten auf dem Gerät.',
          'Version 3.9 zum Zeitpunkt der Erstellung, wenige Stunden vor diesem Test aktualisiert — aktuelle Version im App Store prüfen.',
          '4,5/5 Bewertung aus 26 Bewertungen zum Zeitpunkt dieses Tests — eine kleine Stichprobe.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'Noema est-elle une bonne application d\'IA locale gratuite pour iPhone et Mac ?',
        answer:
          'Oui, si vous voulez une application gratuite et activement maintenue qui charge des modèles dans plusieurs formats (GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models) et propose un chat de documents sur l\'appareil pour les PDF et EPUB. Sa note de 4,5 étoiles repose sur seulement 26 avis, à considérer comme un signal précoce plutôt qu\'un historique éprouvé — des applications comme Private LLM et Enclave AI ont un historique public plus long.',
        bullets: [
          'Gratuite sur l\'App Store d\'Apple, sans abonnement ni achat intégré répertorié.',
          'iPhone, iPad, Mac (Apple Silicon) et Apple Vision Pro — nécessite iOS/iPadOS 18 ou version ultérieure.',
          'Charge les modèles dans cinq formats : GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models.',
          'Chat de documents : importez des PDF et EPUB pour des questions-réponses indexées et fondées, sur l\'appareil.',
          'Version 3.9 au moment de la rédaction, mise à jour quelques heures avant ce test — vérifiez la version actuelle sur l\'App Store.',
          'Note de 4,5/5 sur seulement 26 avis au moment de ce test — un échantillon restreint.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Es Noema una buena app de IA local gratuita para iPhone y Mac?',
        answer:
          'Sí, si buscas una app gratuita y activamente mantenida que carga modelos en varios formatos (GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models) y añade chat de documentos en el dispositivo para PDF y EPUB. Su calificación de 4.5 estrellas se basa en solo 26 valoraciones, así que trátala como una señal temprana y no como un historial comprobado — apps como Private LLM y Enclave AI tienen un historial público más largo.',
        bullets: [
          'Gratis en la App Store de Apple, sin suscripción ni compras dentro de la app.',
          'iPhone, iPad, Mac (Apple Silicon) y Apple Vision Pro — requiere iOS/iPadOS 18 o posterior.',
          'Carga modelos en cinco formatos: GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models.',
          'Chat de documentos: importa PDF y EPUB para preguntas y respuestas indexadas y fundamentadas en el dispositivo.',
          'Versión 3.9 al momento de esta reseña, actualizada horas antes de su publicación — verifica la versión actual en la App Store.',
          'Calificación de 4.5/5 con solo 26 valoraciones al momento de esta reseña — una muestra pequeña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O Noema é um bom aplicativo gratuito de IA local para iPhone e Mac?',
        answer:
          'Sim, se você quer um aplicativo gratuito e mantido ativamente que carrega modelos em vários formatos (GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models) e oferece chat de documentos no dispositivo para PDFs e EPUBs. A avaliação de 4,5 estrelas se baseia em apenas 26 avaliações, então trate isso como um sinal inicial, não um histórico comprovado — apps como Private LLM e Enclave AI têm um histórico público mais longo.',
        bullets: [
          'Gratuito na App Store da Apple, sem assinatura e sem compras no aplicativo listadas.',
          'iPhone, iPad, Mac (Apple Silicon) e Apple Vision Pro — exige iOS/iPadOS 18 ou posterior.',
          'Carrega modelos em cinco formatos: GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models.',
          'Chat de documentos: importe PDFs e EPUBs para perguntas e respostas indexadas e fundamentadas no dispositivo.',
          'Versão 3.9 no momento desta análise, atualizada poucas horas antes da publicação — confira a versão atual na App Store.',
          'Avaliação de 4,5/5 com apenas 26 avaliações no momento desta análise — uma amostra pequena.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'Noemaは iPhone と Mac 向けの優れた無料ローカルAIアプリですか?',
        answer:
          '複数の形式(GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models)でモデルを読み込める、無料で積極的にメンテナンスされているアプリを求めるなら、はいです。PDFやEPUBのオンデバイス文書チャットも追加されています。4.5の評価はわずか26件の評価に基づくもので、実績というより初期のシグナルとして捉えてください — Private LLMやEnclave AIはより長い公開履歴を持っています。',
        bullets: [
          'Apple App Storeで無料。サブスクリプションやアプリ内課金は掲載されていません。',
          'iPhone、iPad、Mac(Apple Silicon)、Apple Vision Pro対応 — iOS/iPadOS 18以降が必要です。',
          '5つの形式でモデルを読み込み: GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models。',
          '文書チャット: PDFやEPUBをインポートし、オンデバイスでインデックス化された根拠のある質問応答が可能。',
          '本レビュー執筆時点でバージョン3.9。公開の数時間前に更新済み — 現在のバージョンはApp Storeで確認してください。',
          '本レビュー時点で評価4.5/5、評価数はわずか26件 — サンプルサイズは小さいです。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'Noema 是适合 iPhone 和 Mac 的优质免费本地 AI 应用吗?',
        answer:
          '如果你想要一款免费、持续维护、支持多种格式加载模型(GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models)并提供设备端文档聊天功能(支持 PDF 和 EPUB)的应用,答案是肯定的。它的 4.5 星评分仅基于 26 条评价,应视为早期信号,而非成熟的长期记录 — Private LLM 和 Enclave AI 拥有更长的公开历史。',
        bullets: [
          '在 Apple App Store 免费提供,未列出订阅或应用内购买。',
          '支持 iPhone、iPad、Mac(Apple Silicon)和 Apple Vision Pro — 需要 iOS/iPadOS 18 或更高版本。',
          '支持五种模型格式加载: GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models。',
          '文档聊天: 导入 PDF 和 EPUB,进行设备端索引、有据可查的问答。',
          '撰写本评测时的版本为 3.9,发布前几小时刚更新 — 请在 App Store 确认当前版本。',
          '截至本评测,评分为 4.5/5,仅基于 26 条评价 — 样本量较小。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل Noema تطبيق ذكاء اصطناعي محلي مجاني جيد لأجهزة iPhone و Mac؟',
        answer:
          'نعم، إذا كنت تريد تطبيقًا مجانيًا يُصان بنشاط ويُحمّل النماذج بعدة صيغ (GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation) ويضيف محادثة مستندات على الجهاز لملفات PDF وEPUB. يستند تقييمه البالغ 4.5 نجوم إلى 26 تقييمًا فقط، لذا تعامل معه كإشارة مبكرة وليس سجلًا موثوقًا طويل الأمد — تطبيقات مثل Private LLM وEnclave AI لها تاريخ عام أطول.',
        bullets: [
          'مجاني على متجر تطبيقات Apple؛ لا يوجد اشتراك ولا مشتريات داخل التطبيق مذكورة.',
          'يعمل على iPhone وiPad وMac (Apple Silicon) وApple Vision Pro — يتطلب iOS/iPadOS 18 أو أحدث.',
          'يُحمّل النماذج بخمس صيغ: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation.',
          'محادثة المستندات: استيراد ملفات PDF وEPUB للحصول على إجابات مفهرسة ومبنية على الجهاز.',
          'الإصدار 3.9 وقت كتابة هذه المراجعة، وقد تم تحديثه قبل ساعات من نشرها — تحقق من الإصدار الحالي على متجر التطبيقات.',
          'تقييم 4.5 من 5 بناءً على 26 تقييمًا فقط وقت هذه المراجعة — عينة صغيرة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'Noema는 iPhone과 Mac에 적합한 우수한 무료 로컬 AI 앱입니까?',
        answer:
          '여러 형식(GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models)으로 모델을 불러올 수 있고 PDF와 EPUB를 위한 온디바이스 문서 채팅 기능을 갖춘, 무료이면서 활발히 유지 관리되는 앱을 원한다면 그렇습니다. 4.5점 평점은 단 26개의 평가에 근거한 것이므로, 검증된 실적이 아니라 초기 신호로 받아들여야 합니다 — Private LLM과 Enclave AI는 더 긴 공개 이력을 가지고 있습니다.',
        bullets: [
          'Apple App Store에서 무료로 제공되며, 구독이나 인앱 구매가 게재되어 있지 않습니다.',
          'iPhone, iPad, Mac(Apple Silicon), Apple Vision Pro를 지원하며 iOS/iPadOS 18 이상이 필요합니다.',
          '다섯 가지 형식으로 모델을 불러옵니다: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
          '문서 채팅: PDF와 EPUB를 가져와 온디바이스에서 색인화되고 근거에 기반한 질의응답이 가능합니다.',
          '이 리뷰 작성 시점 버전은 3.9이며, 발행 몇 시간 전에 업데이트되었습니다 — 현재 버전은 App Store에서 확인하십시오.',
          '이 리뷰 시점 기준 26개의 평가만으로 4.5/5점을 받았습니다 — 표본 크기가 작습니다.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Noemaとは', anchor: 'what-is-noema' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '対応モデル形式', anchor: 'supported-model-formats' },
      { label: '文書チャット:PDF・EPUBのQ&A', anchor: 'document-chat' },
      { label: 'プラットフォームと動作要件', anchor: 'platforms' },
      { label: 'プライバシー:Noemaが収集するもの・しないもの', anchor: 'privacy' },
      { label: 'トレードオフ:メリットとデメリット', anchor: 'tradeoffs' },
      { label: 'Noemaと代替アプリの比較', anchor: 'vs-alternatives' },
      { label: 'Noemaが向いている人', anchor: 'who-should-use' },
      { label: 'Noemaが向いていない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'まとめ',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Noemaは、独立系開発者Alexandru Stamate氏(NoemaAI LLC)によるiPhone・iPad・Mac・Vision Pro向けの無料アプリで、GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Modelsという5つの形式でローカルAIモデルを実行し、PDFとEPUB向けのオンデバイス文書チャットも搭載する。',
          },
          {
            type: 'plain-terms',
            text: 'ほとんどのスマホ向けローカルAIアプリは、1種類のモデルファイルしか実行できません。Noemaは複数の異なる種類を読み込めるうえ、Apple独自の内蔵AIモデルも使えるため、お気に入りのモデルが特定の形式でしか提供されていなくても困りません。さらに、渡したPDFやEPUBを読んで、その内容に基づいた質問に答えることもでき、すべてインターネット接続なしで行えます。',
          },
        ],
        items: [
          '価格:[Apple App Store](' + APP_STORE_URL + ')で無料。本レビュー時点でサブスクリプションもアプリ内課金も掲載なし。',
          'プラットフォーム:iPhone、iPad、Mac(Apple Silicon)、Apple Vision Pro — 公式のAndroid、Windows、Linux版なし。',
          '開発者:[Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) / [NoemaAI LLC](https://noemaai.com/ownership)。',
          'モデル形式:GGUF、MLX、ExecuTorch、Core ML、Apple のオンデバイスFoundation Models — 1つのアプリで5形式に対応。',
          '文書チャット:PDFとEPUBをインポート。アプリが文章をオンデバイスでインデックス化し、根拠のある質問応答が可能。',
          'プライバシー:開発者はアプリがデータを収集しないと明言。利用にアカウントは不要。',
          '評価:本レビュー時点でわずか26件の評価から4.5/5 — サンプルは小さく、長い実績とは言えない。',
          '執筆時点のバージョンは3.9で、本レビューの数時間前に更新済み — 特定の機能に依存する前に、App Storeで現在のバージョンを確認すること。',
        ],
      },
      whatIsNoema: {
        id: 'what-is-noema',
        title: 'Noemaとは',
        content: [
          '**Noemaは、iPhone、iPad、Mac、Vision Proヘッドセット上で直接オープンソースの言語モデルをダウンロードして実行するネイティブAppleアプリで、ローカルチャットにサーバー側のコンポーネントは一切必要ありません。** モデルをダウンロードすれば、インターネット接続なしで応答を生成できます。',
          '開発者は[Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674)氏で、同氏の会社[NoemaAI LLC](https://noemaai.com/ownership)がサイト自身の所有者情報ページによれば、アプリと[noemaai.com](' +
          SITE_URL +
          ')サイトの両方を所有・運営している。アプリはApp Store IDの6751169935で掲載されている。本レビューは、「ローカルチャットに0クラウドで対応」「アカウント不要」「データ収集なし」という開発者自身の主張を、マーケティング文言をそのまま受け取るのではなく、App Storeのプライバシーラベルとアプリの公開説明文に照らして検証している。',
          'アプリは異例なほど頻繁に更新される:本レビューで確認したバージョン3.9は、本レビュー執筆のわずか数時間前にリリースされたもので、そのリリースの「新機能」の記述には、MLXモデルの安定性、文書インデックス化、ビジョンモデル、Core ML互換性に関する修正が含まれていた — これは停滞・放棄されたプロジェクトではなく、活発かつ継続的なメンテナンスの証拠である。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**Noemaを使い始めるのに数分しかかからず、アカウント作成も不要です。**',
        ],
        numberedItems: [
          {
            title: 'アプリをダウンロードする',
            whyItMatters: '[Apple App StoreからNoema](' + APP_STORE_URL + ')を無料でダウンロードする。心配すべき試用ティアや後でキャンセルするサブスクリプションはなく、初回起動から完全なアプリが無料で利用できる。',
          },
          {
            title: 'モデルの形式と入手元を選ぶ',
            whyItMatters: 'アプリ内でHugging FaceからGGUFモデルを直接閲覧・ダウンロードするか、MLX、ExecuTorch、Core MLのモデルを使うか、あるいは何もダウンロードしたくない場合はApple内蔵のFoundation Modelにフォールバックする。',
          },
          {
            title: '文書チャット用の文書をインポートする',
            whyItMatters: 'ファイルアプリまたはiCloud DriveからPDFまたはEPUBを追加する。Noemaは文書の文章をオンデバイスでインデックス化するので、モデルの一般知識だけに頼るのではなく、その内容に基づいた質問ができる。',
          },
          {
            title: 'チャット、要約、フラッシュカード生成を行う',
            whyItMatters: 'モデル(および任意で文書)を読み込んだら、チャット、文書の要約、メモ、フラッシュカード生成のために完全にオフラインでアプリを使う。',
          },
          {
            title: 'オプション:ウェブ検索やリモートプロバイダーを有効にする',
            whyItMatters: 'デフォルトでNoemaはローカルのみで動作する。開発者自身のサイトは、外部HTTP・HTTPS通信をブロックする「Off-gridモード」を説明している。ウェブ検索やリモートモデルプロバイダーへの接続は、デフォルトの動作ではなく、明示的で別個のオプトインである。',
          },
        ],
        note: '正確なダウンロードサイズ、現在対応しているモデルの一覧、最小デバイス要件は、App Storeの更新のたびに変わる可能性がある — データ容量に制限のあるプランで大きなダウンロードを行う前に、アプリ内または[noemaai.com](' + SITE_URL + ')で現在の詳細を確認すること。',
      },
      supportedModelFormats: {
        id: 'supported-model-formats',
        title: '対応モデル形式',
        itemHeadings: true,
        content: [
          '**Noemaが掲げる差別化ポイントは、単一形式ではなく5つの異なる形式でモデルを読み込める点である。** ほとんどのモバイル向けローカルAIアプリは単一のランタイムに絞っており、このレビュー群では llama.cpp とGGUFが最も一般的な選択肢である。Noemaはそれに対し、GGUF、MLX、ExecuTorch、Core ML、Apple独自のオンデバイスFoundation Modelsを併せて対応する。これはアプリ自身のApp Store説明文と[noemaai.com](' + SITE_URL + ')に基づく。',
        ],
        columns: ['形式', '内容', 'ここでの重要性'],
        rows: [
          {
            '形式': 'GGUF',
            '内容': 'llama.cppの量子化モデル形式で、ほとんどのオープンソース・ローカルAIアプリと、Hugging Face上のコミュニティ量子化モデルの大多数で使われる。',
            'ここでの重要性': '形式固有の変換を待たずに、すぐ使えるコミュニティ製モデルファイルの最大のプールにアクセスできる。',
          },
          {
            '形式': 'MLX',
            '内容': 'Apple独自の機械学習配列フレームワークで、Apple Siliconのユニファイドメモリとメタル(Metal)GPUアクセラレーションを直接活用するよう設計されている。',
            'ここでの重要性': 'Apple Silicon上では汎用的なCPU依存の形式より目に見えて高速に動作しうるが、Appleのハードウェアでしか十分に機能しない。',
          },
          {
            '形式': 'ExecuTorch',
            '内容': 'PyTorchのオンデバイス推論ランタイムで、PyTorchモデルをエクスポートしてモバイル・エッジ向けハードウェア上で効率的に実行するために設計されている。',
            'ここでの重要性': 'Noemaが読み込めるモデルの範囲を、GGUF/MLXのエコシステムを超えて、PyTorchから直接エクスポートされたモデルにまで広げる。',
          },
          {
            '形式': 'Core ML',
            '内容': 'Apple独自の機械学習向けネイティブ形式で、Appleデバイスの CPU、GPU、Neural Engine上で動作するよう最適化されている。',
            'ここでの重要性': '汎用形式だけでなく、Apple の Neural Engine 向けに特別に最適化されたモデルをアプリが読み込めるようになる。',
          },
          {
            '形式': 'Apple Foundation Models',
            '内容': 'Apple独自の内蔵オンデバイス大規模言語モデルで、対応ハードウェア上でiOS 18以降からシステム全体で利用可能。',
            'ここでの重要性': 'モデルのダウンロードなしに、デバイスに既にあるモデルを使ってすぐに文書チャットや一般チャットを試せる。',
          },
        ],
        note: '形式対応と正確なモデルリストは、App Storeの更新のたびに変わる可能性がある。特定のモデルの現在の形式互換性とハードウェア要件は、依存する前にアプリ内で確認すること。',
      },
      documentChat: {
        id: 'document-chat',
        title: '文書チャット:PDF・EPUBのQ&A',
        content: [
          '**Noemaは教科書を含むPDFとEPUBをインポートし、その文章をオンデバイスでインデックス化することで、読み込まれたモデルがその特定の文書に基づいた質問に答えられるようにする。** 開発者自身のサイトは、これを文書を「より徹底的に」読み、「オンデバイスにとどまる検索であなた自身のデータセットに」根拠を置いて回答すると説明している — これは、クラウドのベクトルデータベースに対してではなくローカルで実行される点を除けば、サーバー側の検索拡張生成(RAG)に近い、検索型のワークフローである。',
          '質問応答に加えて、アプリはインポートした文書から要約、メモ、フラッシュカードを生成でき、図表やスキャンされたページを含む文書や画像向けにビジョン対応モデルもサポートする。',
          '本レビューは、Noemaの文書インデックス化の検索精度を専用のデスクトップ向けRAGツールと独立して比較検証していない — 上記の説明は開発者自身が明言する機能を反映したものであり、独立した精度テストではない。',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'プラットフォームと動作要件',
        itemHeadings: true,
        columns: ['プラットフォーム', '想定される内容', '重要な注意点'],
        rows: [
          {
            'プラットフォーム': 'iPhone / iPad',
            '想定される内容': 'App Storeの掲載によれば、iOSまたはiPadOS 18以降が必要。モデル形式のフルラインナップと文書チャットを実行できる。',
            '重要な注意点': 'より大きなモデルやより大きなインポート文書には、より多くの空き容量とRAMが必要。古い端末では、より小さい量子化モデルの方が安全な出発点となる。',
          },
          {
            'プラットフォーム': 'Mac',
            '想定される内容': 'App Storeの掲載によれば、Apple Silicon Mac(M1以降)向けのネイティブアプリ。',
            '重要な注意点': 'Apple Siliconのユニファイドメモリにより、一般的に同等のiPhoneやiPadよりも大きなモデルが動作する。',
          },
          {
            'プラットフォーム': 'Apple Vision Pro',
            '想定される内容': 'App Storeで対応デバイスとして掲載されている。',
            '重要な注意点': '本レビューではVision Proでの体験を独自にテストしていない。実際に検証済みの機能としてではなく、App Storeに掲載された互換性として扱うこと。',
          },
          {
            'プラットフォーム': 'Android、Windows、Linux',
            '想定される内容': '開発者自身のサイトによれば、Google Play、Microsoft Store、いかなるLinuxパッケージリポジトリにも公式アプリはない。',
            '重要な注意点': 'これらのプラットフォームの読者は、代わりに[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)(Android/iOS)または他のクロスプラットフォームの選択肢を検討すべきである。',
          },
        ],
        note: 'レビュー時点のアプリサイズは約368 MBで、App Storeの掲載によれば、インターフェースは英語に加えて10言語(アラビア語、フランス語、ドイツ語、ヒンディー語、日本語、韓国語、ルーマニア語、簡体字中国語、スペイン語、トルコ語)で利用可能。App Storeでは13歳以上の年齢レーティングが表示されている。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー:Noemaが収集するもの・しないもの',
        content: [
          '**NoemaのApp Storeプライバシーラベルは、開発者がアプリからいかなるデータも収集しないと明示しており**、アプリの利用にアカウント、ログイン、登録は一切不要である。',
          '開発者自身のサイトは、外部HTTP・HTTPS通信をブロックする「Off-gridモード」を説明しており、ローカルチャットにはクラウド接続が一切不要であるとしている。ウェブ検索やリモートモデルプロバイダーへの接続といったオプション機能は、デフォルトではなく明示的なオプトインとして記述されている。',
        ],
        items: [
          '**アカウント不要。** プロフィール作成やログインなしでアプリをダウンロードして利用できる。',
          '**App Storeラベルによればデータ収集なし。** この掲載に対するAppleのプライバシー栄養ラベルは、アプリからのデータ収集がないことを示している。',
          '**Off-gridモード。** 開発者自身のサイトは、外部HTTP・HTTPS通信をブロックするモードを説明しており、外向きのネットワーク呼び出しを一切行わないという強い保証を求める読者向けである。',
          '**オプションのネットワーク機能はオプトイン。** ウェブ検索とリモートプロバイダーへの接続は、デフォルトの状態ではなく、ユーザーが明示的に有効化する必要のある機能として記述されている。',
          '**ローカルAPIとNoema Relay。** 開発者のサイトは、Noemaで実行されているモデルに他のアプリを接続するための非公開のローカルネットワークAPIと、デバイス間でモデルにアクセスするための「Noema Relay」機能を説明している — 本レビューはこれらを、独立して検証されたネットワークセキュリティ監査ではなく、開発者が説明する機能として扱う。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットとデメリット',
        columns: ['メリット', '実際の利用での意味', '制限・注意点'],
        rows: [
          {
            'メリット': '無料、サブスクリプションなし',
            '実際の利用での意味': '文書チャットを含むすべての機能が、初回起動から無料で利用できる。',
            '制限・注意点': '無料の単独開発者アプリは、より大規模で長く確立されたチームによる有料アプリよりも組織的な後ろ盾が少ない。',
          },
          {
            'メリット': '5つの対応モデル形式',
            '実際の利用での意味': 'GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Modelsは、単一形式の競合アプリよりも広いモデルエコシステムをカバーする。',
            '制限・注意点': '形式が多いほどエッジケースも増えうる。アプリ自身の7月から9月のリリースノートは、MLXとCore MLの互換性に関する継続的な修正を記述している。',
          },
          {
            'メリット': 'オンデバイス文書チャット',
            '実際の利用での意味': 'PDFやEPUBをインポートして根拠のある質問をしたり、要約やフラッシュカードを生成したりでき、文書をどこにもアップロードしない。',
            '制限・注意点': '長い、あるいは複雑な文書での検索精度は、PromptQuorumによって専用のデスクトップ向けRAGツールと独立して比較検証されていない。',
          },
          {
            'メリット': 'アカウント不要、データ収集なし',
            '実際の利用での意味': '何かに登録する必要なくすぐにアプリを使える。App Storeのプライバシーラベルはデータ収集がないことを示す。',
            '制限・注意点': '本レビューはアプリのソースコードを独立して監査していない。App Storeのプライバシーラベルと開発者自身の主張に依拠している。',
          },
          {
            'メリット': '非常に活発な更新頻度',
            '実際の利用での意味': '頻繁なリリースは、放棄されたのではなく活発にメンテナンスされているアプリを示唆する。',
            '制限・注意点': 'リリース頻度が高いことは、より緩やかに進化するアプリよりも、本レビューの特定のバージョン番号、機能の詳細、バグの状態が早く陳腐化しうることも意味する — アプリ内で現在の動作を確認すること。',
          },
          {
            'メリット': '4.5/5の評価',
            '実際の利用での意味': '平均評価は高い。',
            '制限・注意点': 'この平均は本レビュー時点でわずか26件の評価に基づいており、大規模で確立された評価基盤を持つアプリと同列に扱うべきではない小さなサンプルである。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Noemaと代替アプリの比較',
        columns: ['アプリ', 'プラットフォーム', '価格', 'モデルの柔軟性', '主な違い'],
        rows: [
          {
            'アプリ': 'Noema',
            'プラットフォーム': 'iPhone/iPad/Mac/Vision Pro(Appleのみ)',
            '価格': '無料',
            'モデルの柔軟性': '5形式:GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models',
            '主な違い': 'マルチフォーマット読み込みとオンデバイス文書チャット;評価件数はまだ少ない',
          },
          {
            'アプリ': '[Private LLM](/ja/power-local-llm/private-llm-review)',
            'プラットフォーム': 'iPhone/iPad/Mac(Appleのみ)',
            '価格': '4.99ドルの買い切り',
            'モデルの柔軟性': '140以上の厳選モデル;OmniQuant/GPTQ量子化',
            '主な違い': '有料・クローズドソースの厳選ライブラリ、3年間の公開リリース実績',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iPhone/iPad(一部Android対応)',
            '価格': '無料・オープンソース',
            'モデルの柔軟性': 'Hugging Faceなどからユーザーが入手する任意のGGUFファイル',
            '主な違い': '無料でオープンソース;GGUFのみで、内蔵の文書チャットなし',
          },
          {
            'アプリ': '[Enclave AI](/ja/power-local-llm/enclave-ai-review)',
            'プラットフォーム': '現在の掲載を参照',
            '価格': '現在の掲載を参照',
            'モデルの柔軟性': '現在のモデル対応状況は全文レビューを参照',
            '主な違い': '詳細な比較は全文のEnclave AIレビューを参照',
          },
          {
            'アプリ': '[Locally AI](/ja/power-local-llm/locally-ai-review)',
            'プラットフォーム': 'iPhone/iPad/Mac',
            '価格': '無料',
            'モデルの柔軟性': 'Apple MLXのみを基盤に構築;Apple のオンデバイスFoundation Modelにアクセス可能',
            '主な違い': 'Noemaの5形式対応に対し、MLXのみの無料代替アプリ',
          },
        ],
        note: 'サードパーティ製アプリのプラットフォーム、価格、機能の詳細は頻繁に変わる — 判断する前に、各アプリ自身の掲載で現在の詳細を確認すること。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Noemaが向いている人',
        items: [
          '**形式の柔軟性を求めるAppleユーザー。** すでに異なる形式のモデルファイルを持っている、またはアプリを切り替えずにGGUF、MLX、ExecuTorch、Core MLのモデルを試したい読者は、この4つに加えてAppleの内蔵Foundation Modelを一つの場所で利用できる。',
          '**オンデバイス文書Q&Aを求める読者。** PDFやEPUBをインポートしてローカルで根拠のある質問をすることは、すべてのモバイル向けローカルAIアプリが提供しているわけではない独自の機能である。',
          '**予算を意識するユーザー。** アプリは無料でサブスクリプションもなく、事前にお金をかけずにローカルAIを試したい読者にとって重要である。',
          '**若い評価履歴を許容できるアーリーアダプター。** 4.5星の平均がわずか26件の評価に基づいていることを気にせず、長い公開実績よりも活発かつ頻繁に更新されるアプリを重視する読者向け。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Noemaが向いていない人',
        items: [
          '**Android、Windows、Linuxユーザー。** Noemaはこれらのどのプラットフォームにも公式アプリを持たない — 代わりに[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)(一部Android対応)や他のクロスプラットフォームの選択肢を選ぶこと。',
          '**アプリを信頼する前に長く確立された評価履歴を求める読者。** 本レビュー時点でわずか26件の評価しかないため、社会的証明を重視する読者は、複数年の公開リリース実績を持つ[Private LLM](/ja/power-local-llm/private-llm-review)も検討すべきである。',
          '**可能な限り最大の厳選モデルライブラリを求める読者。** Noemaの形式柔軟性は広いが、[Private LLM](/ja/power-local-llm/private-llm-review)のような140以上のモデルからなる厳選ライブラリは提供していない。',
          '**一元管理された展開を求めるチーム。** Noemaは管理コンソールやチーム課金機能を持たない、単一ユーザー・単一デバイス向けのコンシューマーアプリである — 組織は代わりにセルフホストのサーバー側ローカルLLMインフラを検討すべきである。',
          '**文書検索精度の独立した第三者ベンチマークを必要とする読者。** 本レビューは、専用のRAGツールとの独立した精度ベンチマークではなく、文書チャット機能に関する開発者自身の説明に依拠している。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Noemaの料金はいくらですか?',
            a: 'Noemaは[Apple App Storeで無料](' + APP_STORE_URL + ')で、本レビューでは2026-09-12に確認済み。現在のApp Store掲載にはサブスクリプションもアプリ内課金も掲載されていない。App Storeでの提供状況は時間とともに変わる可能性がある — ダウンロード前に現在の価格を確認すること。',
          },
          {
            q: 'Noemaはどのモデル形式に対応していますか?',
            a: 'Noemaは、アプリ自身のApp Store説明文と[noemaai.com](' + SITE_URL + ')によれば、GGUF、MLX、ExecuTorch、Core ML、Apple独自のオンデバイスFoundation Modelsという5つの形式でモデルを読み込む。このマルチフォーマット対応は、GGUFのみまたはMLXのみに絞ることが多い、大半の単一形式の競合アプリよりも幅広い。',
          },
          {
            q: 'NoemaはAndroidやWindowsで利用できますか?',
            a: 'Google Play、Microsoft Store、いかなるLinuxパッケージリポジトリにも公式バージョンは存在しない。Noemaは特にiPhone、iPad、Mac、Apple Vision Pro向けに構築されている。',
          },
          {
            q: '誰がNoemaを開発していますか?',
            a: 'Noemaは[Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674)氏によって開発されている。[noemaai.com](' + SITE_URL + ')サイトとアプリは、サイト自身の[所有者情報ページ](https://noemaai.com/ownership)によればNoemaAI LLCによって所有・運営されている。',
          },
          {
            q: 'Noemaの文書チャットとは何ですか?',
            a: '文書チャットでは、教科書を含むPDFやEPUBをインポートし、その特定の文書に基づいた質問ができる。Noemaは文書の文章をオンデバイスでインデックス化する。これはサーバー側のRAGに近いが、ローカルで実行される検索型のワークフローである。アプリはインポートした文書から要約、メモ、フラッシュカードも生成できる。',
          },
          {
            q: 'Noemaは完全にオフラインで動作しますか?',
            a: 'はい、モデルおよび任意の文書が読み込まれれば、ローカルチャットと文書チャットの両方で動作する。開発者自身のサイトは、外部HTTP・HTTPS通信をブロックする「Off-gridモード」を説明している。ウェブ検索やリモートモデルプロバイダーなどのオプション機能は、デフォルトではなく明示的で別個のオプトインである。',
          },
          {
            q: 'Noemaは個人データを収集しますか?',
            a: 'この掲載に対するAppleのApp Storeプライバシー栄養ラベルは、開発者がアプリからいかなるデータも収集しないと示しており、アカウントやログインは不要である。本レビューは、独立したソースコード監査ではなく、App Storeのプライバシーラベルと開発者自身の主張に依拠している。',
          },
          {
            q: 'Noemaの4.5星評価はどの程度信頼できますか?',
            a: '4.5/5の平均は、本レビュー時点でわずか26件の評価に基づいている — 数百件、数千件の評価を持つアプリと比較すると小さなサンプルである。長く確立された実績の証明としてではなく、早期の好意的なシグナルとして捉え、依存する前にApp Storeで現在の評価件数を再確認すること。',
          },
          {
            q: 'NoemaはPrivate LLMと比べてどうですか?',
            a: 'Noemaは無料で、5つのモデル形式(GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models)とオンデバイス文書チャットに対応するが、本レビュー時点で評価はわずか26件である。[Private LLM](/ja/power-local-llm/private-llm-review)は4.99ドルの買い切りで、140以上の厳選モデルライブラリを提供し、3年間の公開リリース実績を持つ。形式の柔軟性と無料の文書チャットを求めるならNoemaを、より確立された厳選体験を求めるならPrivate LLMを選ぶこと。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Noemaは、モバイル向けローカルAIアプリ群の中で、具体的かつ検証可能な理由から際立っている:多くの競合アプリが1つか2つの形式に絞る中で、GGUF、MLX、ExecuTorch、Core ML、Apple独自のFoundation Modelsという5つの異なる形式でモデルを読み込む。これに加えて、PDFとEPUB向けのオンデバイス文書チャットを、すべて無料でサブスクリプションなしに提供する。本レビューの数時間前にリリースされたバージョンに示される非常に頻繁な更新頻度は、放棄された副業プロジェクトではなく、活発なメンテナンスを示している。正直な注意点は、評価対象製品としての若さである:わずか26件の評価に基づく4.5星の平均は、[Private LLM](/ja/power-local-llm/private-llm-review)や[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)がApp Storeで何年も経て示せるような大規模サンプルの実績ではなく、好意的な早期シグナルにすぎない。形式の柔軟性と無料の文書チャットを求める読者は試すべきであり、社会的証明と長い公開実績をより重視する読者は、代わりにPrivate LLMやPocketPal AIから始め、評価件数が増えた頃にNoemaを再検討すべきである。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのNoema](' + APP_STORE_URL + ') — 価格、プラットフォーム互換性、プライバシーラベル、評価、バージョン、サイズ。',
          '[Noema公式サイト(noemaai.com)](' + SITE_URL + ') — 製品概要、対応モデル形式、文書チャットおよびプライバシーに関する記述。',
          '[Noemaの所有者情報ページ](https://noemaai.com/ownership) — アプリとサイトの背後にある法人(NoemaAI LLC)。',
          '[App StoreのAlexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) — 開発者アカウントの掲載。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Private LLMレビュー](/ja/power-local-llm/private-llm-review) — より長いリリース実績を持つ厳選ライブラリの有料代替アプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — 無料でオープンソース、GGUF専用の代替アプリ。',
          '[Enclave AIレビュー](/ja/power-local-llm/enclave-ai-review) — 比較対象となる別のオンデバイスAIアプリ。',
          '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — 無料でApple MLX専用の代替アプリ。',
          '[ローカルLLMソフトウェア完全ディレクトリ](/ja/power-local-llm/local-llm-software-directory) — 全プラットフォームにわたるローカルLLMツールのより広範なディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/noema-review-hero-zh.webp',
    title: 'Noema 评测(2026):适用于 iPhone、iPad 和 Mac 的多格式本地 AI',
    seoTitle: 'Noema 评测 2026:iPhone 和 Mac 本地 AI 应用',
    intro:
      'Noema 在 App Store 上的名称是 "Noema: Local AI & Offline LLM"(开发者账号:Alexandru Stamate;公司:[NoemaAI LLC](https://noemaai.com/ownership)),是一款适用于 iPhone、iPad、Mac(Apple Silicon)和 Apple Vision Pro 的免费应用,完全在设备端运行开源语言模型。它可以从 [Apple App Store](' +
      APP_STORE_URL +
      ') 免费下载,没有订阅,也没有应用内购买。截至本评测时,当前版本为 3.9,仅根据 26 条评价获得 4.5 分(满分 5 分)——由于该应用几乎每天都会更新,请查看当前的 App Store 页面以获取最新数字。Noema 与许多仅支持单一格式的移动端本地 AI 应用不同之处在于,它以五种不同方式加载模型——GGUF、MLX、ExecuTorch、Core ML 以及 Apple 自家的 Foundation Models——而不是把用户锁定在单一运行环境中。它还支持文档聊天:导入 PDF 和 EPUB,针对索引过的文本段落提出有据可查的问题,这是一种检索式工作流程,完全在设备端运行,而不经过云端 RAG 管道。',
    metaDescription:
      'Noema 评测:适用于 iPhone/iPad/Mac 的免费应用,支持 5 种模型格式(GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models),并提供设备端 PDF/EPUB 文档聊天。价格、隐私与替代方案解析。',
    twitterDescription:
      'Noema 评测:一款适用于 iPhone、iPad 和 Mac 的免费应用,以五种格式运行本地 AI 模型——GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models——并为 PDF 和 EPUB 提供设备端文档聊天。',
    audience:
      '面向正在评估一款支持文档聊天的免费多格式本地 AI 应用、并将其与 Private LLM、PocketPal AI 和 Enclave AI 等替代方案进行比较的 iPhone、iPad 和 Mac 用户——涵盖支持的格式、文档问答、隐私,以及评价样本量偏小的注意事项。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Noema review',
    targetKeywords: [
      'noema review',
      'noema app iphone',
      'noema local ai',
      'noema ios app',
      'noema vs private llm',
      'on-device ai document chat',
      'gguf mlx executorch core ml app',
      'best free local llm app for iphone',
    ],
    current_models_mentioned: ['Noema 1.5 2B'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple Silicon Mac(M1 或更新)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Noema 是一款适用于 iOS、iPadOS、macOS 和 visionOS 的免费应用,由独立开发者 Alexandru Stamate([NoemaAI LLC](https://noemaai.com/ownership))制作,以五种不同格式——GGUF、MLX、ExecuTorch、Core ML 和 Apple 自家的 Foundation Models——完全在设备端运行开源语言模型。**它在 [Apple App Store](' +
      APP_STORE_URL +
      ') 上完全免费,没有订阅或应用内购买,并新增了针对 PDF 和 EPUB 的设备端文档聊天功能。截至本评测时,它仅凭 26 条评价获得 4.5 分(满分 5 分)——这一样本量小到不应与拥有数千条评价的应用相提并论。希望了解更长期口碑记录的读者,也应比较 [Private LLM](/zh/power-local-llm/private-llm-review) 或 [Enclave AI](/zh/power-local-llm/enclave-ai-review)。',
    quickAnswerTop: {
      en: {
        question: 'Is Noema a good free local AI app for iPhone and Mac?',
        answer:
          'Yes, if you want a free, actively maintained app that loads models in multiple formats (GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models) and adds on-device document chat for PDFs and EPUBs. Its 4.5-star rating is based on only 26 ratings, so treat that as an early signal rather than a proven track record — apps like Private LLM and Enclave AI have longer public histories.',
        bullets: [
          'Free on the Apple App Store, no subscription and no in-app purchases listed.',
          'iPhone, iPad, Mac (Apple Silicon), and Apple Vision Pro — requires iOS/iPadOS 18 or later.',
          'Loads models in five formats: GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models.',
          'Document chat: import PDFs and EPUBs for on-device, indexed, grounded Q&A.',
          'Version 3.9 at time of writing, updated within hours of this review — check the App Store for the current version.',
          '4.5/5 rating from 26 ratings as of this review — a small sample size.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Ist Noema eine gute kostenlose lokale KI-App für iPhone und Mac?',
        answer:
          'Ja, wenn Sie eine kostenlose, aktiv gepflegte App möchten, die Modelle in mehreren Formaten lädt (GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models) und einen Dokument-Chat auf dem Gerät für PDFs und EPUBs bietet. Die 4,5-Sterne-Bewertung basiert auf nur 26 Bewertungen — betrachten Sie das eher als frühes Signal denn als belegte Erfolgsbilanz. Apps wie Private LLM und Enclave AI haben eine längere öffentliche Historie.',
        bullets: [
          'Kostenlos im Apple App Store, kein Abonnement und keine In-App-Käufe gelistet.',
          'iPhone, iPad, Mac (Apple Silicon) und Apple Vision Pro — erfordert iOS/iPadOS 18 oder neuer.',
          'Lädt Modelle in fünf Formaten: GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models.',
          'Dokument-Chat: PDFs und EPUBs importieren für indexierte, fundierte Fragen und Antworten auf dem Gerät.',
          'Version 3.9 zum Zeitpunkt der Erstellung, wenige Stunden vor diesem Test aktualisiert — aktuelle Version im App Store prüfen.',
          '4,5/5 Bewertung aus 26 Bewertungen zum Zeitpunkt dieses Tests — eine kleine Stichprobe.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'Noema est-elle une bonne application d\'IA locale gratuite pour iPhone et Mac ?',
        answer:
          'Oui, si vous voulez une application gratuite et activement maintenue qui charge des modèles dans plusieurs formats (GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models) et propose un chat de documents sur l\'appareil pour les PDF et EPUB. Sa note de 4,5 étoiles repose sur seulement 26 avis, à considérer comme un signal précoce plutôt qu\'un historique éprouvé — des applications comme Private LLM et Enclave AI ont un historique public plus long.',
        bullets: [
          'Gratuite sur l\'App Store d\'Apple, sans abonnement ni achat intégré répertorié.',
          'iPhone, iPad, Mac (Apple Silicon) et Apple Vision Pro — nécessite iOS/iPadOS 18 ou version ultérieure.',
          'Charge les modèles dans cinq formats : GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models.',
          'Chat de documents : importez des PDF et EPUB pour des questions-réponses indexées et fondées, sur l\'appareil.',
          'Version 3.9 au moment de la rédaction, mise à jour quelques heures avant ce test — vérifiez la version actuelle sur l\'App Store.',
          'Note de 4,5/5 sur seulement 26 avis au moment de ce test — un échantillon restreint.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Es Noema una buena app de IA local gratuita para iPhone y Mac?',
        answer:
          'Sí, si buscas una app gratuita y activamente mantenida que carga modelos en varios formatos (GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models) y añade chat de documentos en el dispositivo para PDF y EPUB. Su calificación de 4.5 estrellas se basa en solo 26 valoraciones, así que trátala como una señal temprana y no como un historial comprobado — apps como Private LLM y Enclave AI tienen un historial público más largo.',
        bullets: [
          'Gratis en la App Store de Apple, sin suscripción ni compras dentro de la app.',
          'iPhone, iPad, Mac (Apple Silicon) y Apple Vision Pro — requiere iOS/iPadOS 18 o posterior.',
          'Carga modelos en cinco formatos: GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models.',
          'Chat de documentos: importa PDF y EPUB para preguntas y respuestas indexadas y fundamentadas en el dispositivo.',
          'Versión 3.9 al momento de esta reseña, actualizada horas antes de su publicación — verifica la versión actual en la App Store.',
          'Calificación de 4.5/5 con solo 26 valoraciones al momento de esta reseña — una muestra pequeña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O Noema é um bom aplicativo gratuito de IA local para iPhone e Mac?',
        answer:
          'Sim, se você quer um aplicativo gratuito e mantido ativamente que carrega modelos em vários formatos (GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models) e oferece chat de documentos no dispositivo para PDFs e EPUBs. A avaliação de 4,5 estrelas se baseia em apenas 26 avaliações, então trate isso como um sinal inicial, não um histórico comprovado — apps como Private LLM e Enclave AI têm um histórico público mais longo.',
        bullets: [
          'Gratuito na App Store da Apple, sem assinatura e sem compras no aplicativo listadas.',
          'iPhone, iPad, Mac (Apple Silicon) e Apple Vision Pro — exige iOS/iPadOS 18 ou posterior.',
          'Carrega modelos em cinco formatos: GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models.',
          'Chat de documentos: importe PDFs e EPUBs para perguntas e respostas indexadas e fundamentadas no dispositivo.',
          'Versão 3.9 no momento desta análise, atualizada poucas horas antes da publicação — confira a versão atual na App Store.',
          'Avaliação de 4,5/5 com apenas 26 avaliações no momento desta análise — uma amostra pequena.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'Noemaは iPhone と Mac 向けの優れた無料ローカルAIアプリですか?',
        answer:
          '複数の形式(GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models)でモデルを読み込める、無料で積極的にメンテナンスされているアプリを求めるなら、はいです。PDFやEPUBのオンデバイス文書チャットも追加されています。4.5の評価はわずか26件の評価に基づくもので、実績というより初期のシグナルとして捉えてください — Private LLMやEnclave AIはより長い公開履歴を持っています。',
        bullets: [
          'Apple App Storeで無料。サブスクリプションやアプリ内課金は掲載されていません。',
          'iPhone、iPad、Mac(Apple Silicon)、Apple Vision Pro対応 — iOS/iPadOS 18以降が必要です。',
          '5つの形式でモデルを読み込み: GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models。',
          '文書チャット: PDFやEPUBをインポートし、オンデバイスでインデックス化された根拠のある質問応答が可能。',
          '本レビュー執筆時点でバージョン3.9。公開の数時間前に更新済み — 現在のバージョンはApp Storeで確認してください。',
          '本レビュー時点で評価4.5/5、評価数はわずか26件 — サンプルサイズは小さいです。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'Noema 是适合 iPhone 和 Mac 的优质免费本地 AI 应用吗?',
        answer:
          '如果你想要一款免费、持续维护、支持多种格式加载模型(GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models)并提供设备端文档聊天功能(支持 PDF 和 EPUB)的应用,答案是肯定的。它的 4.5 星评分仅基于 26 条评价,应视为早期信号,而非成熟的长期记录 — Private LLM 和 Enclave AI 拥有更长的公开历史。',
        bullets: [
          '在 Apple App Store 免费提供,未列出订阅或应用内购买。',
          '支持 iPhone、iPad、Mac(Apple Silicon)和 Apple Vision Pro — 需要 iOS/iPadOS 18 或更高版本。',
          '支持五种模型格式加载: GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models。',
          '文档聊天: 导入 PDF 和 EPUB,进行设备端索引、有据可查的问答。',
          '撰写本评测时的版本为 3.9,发布前几小时刚更新 — 请在 App Store 确认当前版本。',
          '截至本评测,评分为 4.5/5,仅基于 26 条评价 — 样本量较小。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل Noema تطبيق ذكاء اصطناعي محلي مجاني جيد لأجهزة iPhone و Mac؟',
        answer:
          'نعم، إذا كنت تريد تطبيقًا مجانيًا يُصان بنشاط ويُحمّل النماذج بعدة صيغ (GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation) ويضيف محادثة مستندات على الجهاز لملفات PDF وEPUB. يستند تقييمه البالغ 4.5 نجوم إلى 26 تقييمًا فقط، لذا تعامل معه كإشارة مبكرة وليس سجلًا موثوقًا طويل الأمد — تطبيقات مثل Private LLM وEnclave AI لها تاريخ عام أطول.',
        bullets: [
          'مجاني على متجر تطبيقات Apple؛ لا يوجد اشتراك ولا مشتريات داخل التطبيق مذكورة.',
          'يعمل على iPhone وiPad وMac (Apple Silicon) وApple Vision Pro — يتطلب iOS/iPadOS 18 أو أحدث.',
          'يُحمّل النماذج بخمس صيغ: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation.',
          'محادثة المستندات: استيراد ملفات PDF وEPUB للحصول على إجابات مفهرسة ومبنية على الجهاز.',
          'الإصدار 3.9 وقت كتابة هذه المراجعة، وقد تم تحديثه قبل ساعات من نشرها — تحقق من الإصدار الحالي على متجر التطبيقات.',
          'تقييم 4.5 من 5 بناءً على 26 تقييمًا فقط وقت هذه المراجعة — عينة صغيرة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'Noema는 iPhone과 Mac에 적합한 우수한 무료 로컬 AI 앱입니까?',
        answer:
          '여러 형식(GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models)으로 모델을 불러올 수 있고 PDF와 EPUB를 위한 온디바이스 문서 채팅 기능을 갖춘, 무료이면서 활발히 유지 관리되는 앱을 원한다면 그렇습니다. 4.5점 평점은 단 26개의 평가에 근거한 것이므로, 검증된 실적이 아니라 초기 신호로 받아들여야 합니다 — Private LLM과 Enclave AI는 더 긴 공개 이력을 가지고 있습니다.',
        bullets: [
          'Apple App Store에서 무료로 제공되며, 구독이나 인앱 구매가 게재되어 있지 않습니다.',
          'iPhone, iPad, Mac(Apple Silicon), Apple Vision Pro를 지원하며 iOS/iPadOS 18 이상이 필요합니다.',
          '다섯 가지 형식으로 모델을 불러옵니다: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
          '문서 채팅: PDF와 EPUB를 가져와 온디바이스에서 색인화되고 근거에 기반한 질의응답이 가능합니다.',
          '이 리뷰 작성 시점 버전은 3.9이며, 발행 몇 시간 전에 업데이트되었습니다 — 현재 버전은 App Store에서 확인하십시오.',
          '이 리뷰 시점 기준 26개의 평가만으로 4.5/5점을 받았습니다 — 표본 크기가 작습니다.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'Noema 是什么', anchor: 'what-is-noema' },
      { label: '如何开始使用', anchor: 'how-to-get-started' },
      { label: '支持的模型格式', anchor: 'supported-model-formats' },
      { label: '文档聊天:PDF 与 EPUB 问答', anchor: 'document-chat' },
      { label: '平台与系统要求', anchor: 'platforms' },
      { label: '隐私:Noema 收集什么、不收集什么', anchor: 'privacy' },
      { label: '权衡取舍:优势与局限', anchor: 'tradeoffs' },
      { label: 'Noema 与替代方案对比', anchor: 'vs-alternatives' },
      { label: '谁适合使用 Noema', anchor: 'who-should-use' },
      { label: '谁不适合使用 Noema', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Noema 是一款适用于 iPhone、iPad、Mac 和 Vision Pro 的免费应用,由独立开发者 Alexandru Stamate(NoemaAI LLC)开发,以五种格式——GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models——运行本地 AI 模型,并为 PDF 和 EPUB 新增设备端文档聊天功能。',
          },
          {
            type: 'plain-terms',
            text: '大多数手机端本地 AI 应用只能运行一种模型文件类型。Noema 可以加载多种不同类型,再加上 Apple 自带的内置 AI 模型,这样即使你偏好的模型只有一种格式,你也不会被卡住——而且它还能读取你提供的 PDF 或 EPUB,并回答基于该文档内容的问题,整个过程无需联网。',
          },
        ],
        items: [
          '价格:在 [Apple App Store](' + APP_STORE_URL + ') 免费提供;截至本评测,未列出订阅或应用内购买。',
          '平台:iPhone、iPad、Mac(Apple Silicon)和 Apple Vision Pro——没有官方的 Android、Windows 或 Linux 应用。',
          '开发者:[Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) / [NoemaAI LLC](https://noemaai.com/ownership)。',
          '模型格式:GGUF、MLX、ExecuTorch、Core ML 和 Apple 的设备端 Foundation Models——一款应用支持五种格式。',
          '文档聊天:导入 PDF 和 EPUB;应用会在设备端对文本段落进行索引,以实现有据可查的问答。',
          '隐私:开发者声明该应用不收集任何数据;使用无需账户。',
          '评分:截至本评测,仅凭 26 条评价获得 4.5 分(满分 5 分)——样本量小,算不上长期记录。',
          '撰写本文时的版本为 3.9,在本评测发布前几小时刚刚更新——在依赖某项具体功能之前,请在 App Store 确认当前版本。',
        ],
      },
      whatIsNoema: {
        id: 'what-is-noema',
        title: 'Noema 是什么',
        content: [
          '**Noema 是一款原生 Apple 应用,可直接在 iPhone、iPad、Mac 或 Vision Pro 头显上下载并运行开源语言模型,本地聊天无需任何服务器端组件。** 模型下载完成后,应用无需联网即可生成回复。',
          '它由 [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) 开发,根据该网站自己的所有权说明页面,其公司 [NoemaAI LLC](https://noemaai.com/ownership) 拥有并运营该应用以及 [noemaai.com](' +
          SITE_URL +
          ') 网站。该应用在 App Store 上的 ID 为 6751169935。本评测将开发者自身的声明——"本地聊天无需任何云端"、无需账户、不收集数据——与 App Store 隐私标签及应用的公开说明进行对照核实,而不是照单全收营销文案。',
          '该应用的更新频率异常高:本评测所审查的版本 3.9,在撰写本评测前仅数小时才刚刚发布,该版本的"新功能"更新说明描述了对 MLX 模型稳定性、文档索引、视觉模型以及 Core ML 兼容性的修复——这是持续、活跃维护的证据,而非停滞或被放弃的项目。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始使用',
        content: [
          '**让 Noema 运行起来只需几分钟,且无需创建账户。**',
        ],
        numberedItems: [
          {
            title: '下载应用',
            whyItMatters: '免费在 [Apple App Store 下载 Noema](' + APP_STORE_URL + ')。没有需要留意的试用等级,也没有以后需要取消的订阅——从首次启动起,完整应用就是免费的。',
          },
          {
            title: '选择模型格式和来源',
            whyItMatters: '直接在应用内浏览并从 Hugging Face 下载 GGUF 模型,或使用 MLX、ExecuTorch 或 Core ML 模型;如果你完全不想下载任何东西,也可以退而使用 Apple 内置的 Foundation Model。',
          },
          {
            title: '导入文档以使用文档聊天',
            whyItMatters: '从"文件"应用或 iCloud Drive 添加 PDF 或 EPUB。Noema 会在设备端对文档的文本段落进行索引,这样你就可以针对其内容提出有据可查的问题,而不只是依赖模型的通用知识进行对话。',
          },
          {
            title: '聊天、总结或生成记忆卡',
            whyItMatters: '加载模型(以及可选的文档)后,可以完全离线使用该应用进行聊天、文档总结、笔记记录或生成记忆卡。',
          },
          {
            title: '可选:启用网络搜索或远程提供商',
            whyItMatters: '默认情况下,Noema 仅在本地运行。开发者自己的网站描述了一种"离网模式"(Off-grid Mode),可阻止外部 HTTP 和 HTTPS 流量;网络搜索或连接远程模型提供商是明确、独立的可选开启项,而不是默认行为。',
          },
        ],
        note: '确切的下载体积、当前支持的模型列表以及最低设备要求可能会随 App Store 更新而变化——在有限流量套餐下进行较大下载前,请在应用内或 [noemaai.com](' + SITE_URL + ') 上确认当前的具体信息。',
      },
      supportedModelFormats: {
        id: 'supported-model-formats',
        title: '支持的模型格式',
        itemHeadings: true,
        content: [
          '**Noema 所宣称的差异化优势在于,它可以以五种不同格式加载模型,而不是只支持一种。** 大多数移动端本地 AI 应用只专注于单一运行环境——在这类评测中,llama.cpp 和 GGUF 是最常见的选择。而 Noema 同时支持 GGUF、MLX、ExecuTorch、Core ML 以及 Apple 自家的设备端 Foundation Models,这一点来自该应用自身的 App Store 说明以及 [noemaai.com](' + SITE_URL + ')。',
        ],
        columns: ['格式', '是什么', '为何在此重要'],
        rows: [
          {
            '格式': 'GGUF',
            '是什么': 'llama.cpp 使用的量化模型格式,被大多数开源本地 AI 应用以及 Hugging Face 上大多数社区量化模型所采用。',
            '为何在此重要': '无需等待特定格式转换,即可获得目前最大规模、可直接使用的社区模型文件库。',
          },
          {
            '格式': 'MLX',
            '是什么': 'Apple 自家的机器学习数组框架,专为直接利用 Apple Silicon 的统一内存和 Metal GPU 加速而设计。',
            '为何在此重要': '在 Apple Silicon 上运行速度可能明显快于通用的 CPU 依赖格式,但代价是仅在 Apple 硬件上才能良好运行。',
          },
          {
            '格式': 'ExecuTorch',
            '是什么': 'PyTorch 的设备端推理运行时,专为导出 PyTorch 模型并在移动和边缘硬件上高效运行而设计。',
            '为何在此重要': '将 Noema 可加载的模型范围从 GGUF/MLX 生态系统进一步扩展到直接从 PyTorch 导出的模型。',
          },
          {
            '格式': 'Core ML',
            '是什么': 'Apple 原生的机器学习格式,针对在 Apple 设备的 CPU、GPU 和神经网络引擎上运行进行了优化。',
            '为何在此重要': '让应用能够加载专为 Apple 神经网络引擎优化的模型,而不仅限于通用格式。',
          },
          {
            '格式': 'Apple Foundation Models',
            '是什么': 'Apple 自家内置的设备端大语言模型,自 iOS 18 起在支持的硬件上全系统可用。',
            '为何在此重要': '无需任何模型下载,即可利用设备上已有的模型立即体验文档聊天或通用聊天功能。',
          },
        ],
        note: '格式支持情况和确切的模型列表可能会随 App Store 更新而变化。在依赖某个特定模型之前,请在应用内确认当前的格式兼容性和硬件要求。',
      },
      documentChat: {
        id: 'document-chat',
        title: '文档聊天:PDF 与 EPUB 问答',
        content: [
          '**Noema 可导入包括教科书在内的 PDF 和 EPUB,并在设备端对其文本段落建立索引,让已加载的模型能够回答基于该特定文档的问题。** 开发者自己的网站将其描述为"更深入"地阅读一份文档,并"利用留存在设备端的检索,基于你自己的数据集"来给出答案——从原理上看,这是一种类似服务器端检索增强生成(RAG)的检索式工作流程,只不过是在本地运行,而非针对云端向量数据库。',
          '除了问答之外,该应用还可以根据导入的文档生成摘要、笔记和记忆卡,并支持具备视觉能力的模型,用于处理包含图表或扫描页面的文档或图像。',
          '本评测并未就 Noema 文档索引的检索准确性,与专用桌面端 RAG 工具进行独立对比测试——以上描述反映的是开发者自身声明的功能,而非独立的准确性测试。',
        ],
      },
      platforms: {
        id: 'platforms',
        title: '平台与系统要求',
        itemHeadings: true,
        columns: ['平台', '预期表现', '重要说明'],
        rows: [
          {
            '平台': 'iPhone / iPad',
            '预期表现': '根据 App Store 页面,需要 iOS 或 iPadOS 18 或更高版本。可运行完整的模型格式阵容以及文档聊天功能。',
            '重要说明': '较大的模型和较大的导入文档需要更多的可用存储空间和 RAM;在较旧设备上,较小的量化模型是更安全的起点。',
          },
          {
            '平台': 'Mac',
            '预期表现': '根据 App Store 页面,为 Apple Silicon Mac(M1 或更新)提供原生应用。',
            '重要说明': 'Apple Silicon 的统一内存通常可以支持比同等 iPhone 或 iPad 更大的模型。',
          },
          {
            '平台': 'Apple Vision Pro',
            '预期表现': '在 App Store 上被列为受支持的设备。',
            '重要说明': '本评测未对 Vision Pro 体验进行独立测试;请将其视为 App Store 所列的兼容性,而非经过实机验证的功能。',
          },
          {
            '平台': 'Android、Windows、Linux',
            '预期表现': '根据开发者自己的网站,Google Play、Microsoft Store 或任何 Linux 软件仓库中均无官方应用。',
            '重要说明': '这些平台上的读者应改为考虑 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)(Android/iOS)或其他跨平台选择。',
          },
        ],
        note: '根据 App Store 页面,评测时应用体积约为 368 MB,界面除英语外还支持另外十种语言(阿拉伯语、法语、德语、印地语、日语、韩语、罗马尼亚语、简体中文、西班牙语、土耳其语)。App Store 显示的年龄分级为 13 岁以上。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私:Noema 收集什么、不收集什么',
        content: [
          '**Noema 的 App Store 隐私标签显示,开发者不从该应用中收集任何数据**,且该应用无需账户、登录或注册即可使用。',
          '开发者自己的网站描述了一种"离网模式"(Off-grid Mode),可阻止外部 HTTP 和 HTTPS 流量,并声明本地聊天无需任何云端连接。网络搜索和连接远程模型提供商等可选功能,被描述为明确的可选开启项,而非默认设置。',
        ],
        items: [
          '**无需账户。** 无需创建个人资料或登录即可下载并使用该应用。',
          '**根据 App Store 标签,不收集数据。** Apple 针对该应用页面的隐私标签显示未从该应用收集任何数据。',
          '**离网模式。** 开发者自己的网站描述了一种可阻止外部 HTTP 和 HTTPS 流量的模式,适合希望对任何外发网络调用都获得硬性保证的读者。',
          '**可选的网络功能均为可选开启。** 网络搜索和连接远程提供商被描述为用户必须明确启用的功能,而非默认状态。',
          '**本地 API 和 Noema Relay。** 开发者的网站描述了一个私有的本地网络 API,可将其他应用连接到在 Noema 中运行的模型,以及一个用于跨设备模型访问的 "Noema Relay" 功能——本评测将这些视为开发者自述的功能,而非经过独立验证的网络安全审计。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡取舍:优势与局限',
        columns: ['优势', '实际使用中的意义', '局限 / 注意事项'],
        rows: [
          {
            '优势': '免费,无订阅',
            '实际使用中的意义': '包括文档聊天在内的每一项功能,从首次启动起即可免费使用。',
            '局限 / 注意事项': '一款由单一开发者制作的免费应用,其机构支持力度不及由更大、更成熟团队开发的付费应用。',
          },
          {
            '优势': '支持五种模型格式',
            '实际使用中的意义': 'GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models 覆盖了比单一格式竞品更广泛的模型生态系统。',
            '局限 / 注意事项': '格式越多可能意味着边缘情况越多;该应用自身 7 月至 9 月的发布说明中,记录了对 MLX 和 Core ML 兼容性的持续修复。',
          },
          {
            '优势': '设备端文档聊天',
            '实际使用中的意义': '导入 PDF 或 EPUB,提出有据可查的问题、生成摘要或记忆卡,而无需将文档上传到任何地方。',
            '局限 / 注意事项': 'PromptQuorum 尚未就长文档或复杂文档的检索准确性,与专用桌面端 RAG 工具进行独立对比测试。',
          },
          {
            '优势': '无需账户,不收集数据',
            '实际使用中的意义': '无需注册任何内容即可立即使用该应用;App Store 隐私标签显示未收集数据。',
            '局限 / 注意事项': '本评测未对该应用的源代码进行独立审计;而是依据 App Store 隐私标签和开发者自身的声明。',
          },
          {
            '优势': '更新节奏非常活跃',
            '实际使用中的意义': '频繁的发布表明该应用得到积极维护,而非被放弃。',
            '局限 / 注意事项': '发布频率高也意味着,与更新节奏较慢的应用相比,本评测中具体的版本号、功能细节和 bug 状态可能更快过时——请在应用内确认当前行为。',
          },
          {
            '优势': '获得 4.5 分(满分 5 分)',
            '实际使用中的意义': '平均评分较高。',
            '局限 / 注意事项': '截至本评测,该平均分仅基于 26 条评价——样本量较小,不应与拥有大规模、成熟评价基础的应用相提并论。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Noema 与替代方案对比',
        columns: ['应用', '平台', '价格', '模型灵活性', '主要区别'],
        rows: [
          {
            '应用': 'Noema',
            '平台': 'iPhone/iPad/Mac/Vision Pro(仅限 Apple)',
            '价格': '免费',
            '模型灵活性': '五种格式:GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models',
            '主要区别': '多格式加载加上设备端文档聊天;目前评价样本量仍较小',
          },
          {
            '应用': '[Private LLM](/zh/power-local-llm/private-llm-review)',
            '平台': 'iPhone/iPad/Mac(仅限 Apple)',
            '价格': '一次性付费 4.99 美元',
            '模型灵活性': '140 多个精选模型;OmniQuant/GPTQ 量化',
            '主要区别': '付费、闭源、精选模型库,拥有三年公开发布历史',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iPhone/iPad,部分支持 Android',
            '价格': '免费,开源',
            '模型灵活性': '用户可从 Hugging Face 或其他来源获取任意 GGUF 文件',
            '主要区别': '免费且开源;仅支持 GGUF,没有内置文档聊天',
          },
          {
            '应用': '[Enclave AI](/zh/power-local-llm/enclave-ai-review)',
            '平台': '请参阅当前页面',
            '价格': '请参阅当前页面',
            '模型灵活性': '当前模型支持情况请参阅完整评测',
            '主要区别': '详细对比请参阅完整的 Enclave AI 评测',
          },
          {
            '应用': '[Locally AI](/zh/power-local-llm/locally-ai-review)',
            '平台': 'iPhone/iPad/Mac',
            '价格': '免费',
            '模型灵活性': '仅基于 Apple MLX 构建;可访问 Apple 的设备端 Foundation Model',
            '主要区别': '相对于 Noema 支持五种格式,这是一款仅支持 MLX 的免费替代方案',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化——在做决定之前,请在各应用自己的页面上核实当前的具体信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用 Noema',
        items: [
          '**希望获得格式灵活性的 Apple 用户。** 已经拥有不同格式模型文件的读者,或想在不切换应用的情况下尝试 GGUF、MLX、ExecuTorch 和 Core ML 模型的读者,可以在同一个地方获得这四种格式,再加上 Apple 内置的 Foundation Model。',
          '**希望获得设备端文档问答的读者。** 导入 PDF 或 EPUB 并在本地提出有据可查的问题,是一项并非所有移动端本地 AI 应用都提供的独特功能。',
          '**预算有限的用户。** 该应用免费且无需订阅,这对希望在不预先投入资金的情况下尝试本地 AI 的读者很重要。',
          '**能够接受较新评价历史的早期采用者。** 对于不介意 4.5 星的平均分仅基于 26 条评价的读者,以及相较于更长的公开记录、更看重活跃且频繁更新的应用的读者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用 Noema',
        items: [
          '**Android、Windows 或 Linux 用户。** Noema 在这些平台上均无官方应用——请改为选择 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)(部分支持 Android)或其他跨平台选择。',
          '**希望在信任一款应用之前看到长期、成熟评价历史的读者。** 截至本评测,该应用仅有 26 条评价,重视社会认可证明的读者也应权衡 [Private LLM](/zh/power-local-llm/private-llm-review),后者拥有长达数年的公开发布历史。',
          '**希望获得尽可能大的精选模型库的读者。** Noema 的格式灵活性很广,但它并未提供像 [Private LLM](/zh/power-local-llm/private-llm-review) 那样拥有 140 多个模型的精选库。',
          '**希望进行集中管理部署的团队。** Noema 是一款面向单用户、单设备的消费级应用,没有管理控制台或团队计费功能——组织机构应转而考虑自托管的服务器端本地 LLM 基础设施。',
          '**需要独立第三方基准测试文档检索准确性的读者。** 本评测依据的是开发者自己对文档聊天功能的描述,而非针对专用 RAG 工具的独立准确性基准测试。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Noema 的价格是多少?',
            a: 'Noema 在 [Apple App Store 上免费提供](' + APP_STORE_URL + '),已于 2026-09-12 为本评测核实。当前 App Store 页面未列出订阅或应用内购买。App Store 的供货情况可能会随时间变化——下载前请确认当前价格。',
          },
          {
            q: 'Noema 支持哪些模型格式?',
            a: '根据该应用自身的 App Store 说明以及 [noemaai.com](' + SITE_URL + '),Noema 以五种格式加载模型:GGUF、MLX、ExecuTorch、Core ML 以及 Apple 自家的设备端 Foundation Models。这种多格式支持比大多数仅支持单一格式的竞品应用更广泛,后者通常只专注于 GGUF 或仅支持 MLX。',
          },
          {
            q: 'Noema 是否支持 Android 或 Windows?',
            a: 'Google Play、Microsoft Store 或任何 Linux 软件仓库中均不存在官方版本。Noema 是专为 iPhone、iPad、Mac 和 Apple Vision Pro 打造的。',
          },
          {
            q: '谁开发了 Noema?',
            a: 'Noema 由 [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) 开发;根据网站自己的[所有权说明页面](https://noemaai.com/ownership),[noemaai.com](' + SITE_URL + ') 网站和该应用均由 NoemaAI LLC 拥有并运营。',
          },
          {
            q: 'Noema 中的文档聊天是什么?',
            a: '文档聊天让你可以导入包括教科书在内的 PDF 或 EPUB,并针对该特定文档提出有据可查的问题。Noema 会在设备端对文档的文本段落建立索引,这是一种从原理上类似服务器端 RAG、但在本地运行的检索式工作流程。该应用还可以根据导入的文档生成摘要、笔记和记忆卡。',
          },
          {
            q: 'Noema 是否可以完全离线使用?',
            a: '是的,一旦模型和任何文档加载完成,本地聊天和文档聊天都可以离线使用。开发者自己的网站描述了一种可阻止外部 HTTP 和 HTTPS 流量的"离网模式";网络搜索或远程模型提供商等可选功能,是明确、独立的可选开启项,而非默认行为。',
          },
          {
            q: 'Noema 是否收集任何个人数据?',
            a: 'Apple 针对该应用页面的 App Store 隐私标签显示,开发者不从该应用中收集任何数据,且无需账户或登录。本评测依据的是 App Store 隐私标签和开发者自身的声明,而非对源代码的独立审计。',
          },
          {
            q: 'Noema 的 4.5 星评分有多可靠?',
            a: '截至本评测,4.5 分(满分 5 分)的平均分仅基于 26 条评价——与拥有数百甚至数千条评价的应用相比,样本量偏小。请将其视为一个早期的积极信号,而非长期、成熟记录的证明,并在依赖它之前,在 App Store 上重新确认当前的评价数量。',
          },
          {
            q: 'Noema 与 Private LLM 相比如何?',
            a: 'Noema 免费,支持五种模型格式(GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models)加上设备端文档聊天,但截至本评测仅有 26 条评价。[Private LLM](/zh/power-local-llm/private-llm-review) 售价 4.99 美元(一次性付费),提供 140 多个模型的精选库,并拥有三年的公开发布历史。若看重格式灵活性和免费的文档聊天,选择 Noema;若看重更成熟、更精选的体验,选择 Private LLM。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Noema 在移动端本地 AI 应用这一类别中,凭借一个具体且可验证的原因脱颖而出:它以五种不同格式——GGUF、MLX、ExecuTorch、Core ML 和 Apple 自家的 Foundation Models——加载模型,而大多数竞品应用只专注于其中一到两种。它将这一点与针对 PDF 和 EPUB 的设备端文档聊天相结合,而且完全免费、无需订阅。其非常频繁的更新节奏——本评测发布前仅数小时就发布了新版本——表明这是一款得到积极维护的应用,而非被放弃的副业项目。诚实地说,其局限在于作为一款被评价产品的"年轻":仅基于 26 条评价的 4.5 星平均分是一个积极的早期信号,而非 [Private LLM](/zh/power-local-llm/private-llm-review) 或 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 在 App Store 上历经多年后所能展示的那种大样本记录。希望获得格式灵活性和免费文档聊天的读者应该尝试它;更看重社会认可证明和更长公开历史的读者,应改为从 Private LLM 或 PocketPal AI 开始,并在 Noema 的评价数量增长后再重新考虑它。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[App Store 上的 Noema](' + APP_STORE_URL + ') —— 价格、平台兼容性、隐私标签、评分、版本和体积。',
          '[Noema 官方网站(noemaai.com)](' + SITE_URL + ') —— 产品概览、支持的模型格式、文档聊天与隐私声明。',
          '[Noema 所有权说明页面](https://noemaai.com/ownership) —— 该应用和网站背后的法人实体(NoemaAI LLC)。',
          '[App Store 上的 Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) —— 开发者账号页面。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Private LLM 评测](/zh/power-local-llm/private-llm-review) —— 一款拥有精选模型库和更长发布历史的付费替代方案。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) —— 一款免费、开源、仅支持 GGUF 的替代方案。',
          '[Enclave AI 评测](/zh/power-local-llm/enclave-ai-review) —— 另一款可供比较的设备端 AI 应用。',
          '[Locally AI 评测](/zh/power-local-llm/locally-ai-review) —— 一款免费、仅支持 Apple MLX 的替代方案。',
          '[本地 LLM 软件完整目录](/zh/power-local-llm/local-llm-software-directory) —— 涵盖各平台本地 LLM 工具的更广泛目录。',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/noema-review-hero-ar.webp',
    title: 'مراجعة Noema (2026): ذكاء اصطناعي محلي متعدد الصيغ لأجهزة iPhone وiPad وMac',
    seoTitle: 'مراجعة Noema 2026: تطبيق ذكاء اصطناعي محلي لـ iPhone وMac',
    intro:
      'Noema، المدرَج في متجر التطبيقات باسم "Noema: Local AI & Offline LLM" (حساب المطور: Alexandru Stamate؛ الشركة: [NoemaAI LLC](https://noemaai.com/ownership))، هو تطبيق مجاني لأجهزة iPhone وiPad وMac (Apple Silicon) وApple Vision Pro يشغّل نماذج لغوية مفتوحة المصدر بالكامل على الجهاز. يمكن تنزيله مجانًا من [متجر تطبيقات Apple](' +
      APP_STORE_URL +
      ')، دون اشتراك ودون مشتريات داخل التطبيق. وقت كتابة هذه المراجعة، كان الإصدار الحالي هو 3.9، بتقييم 4.5 من 5 استنادًا إلى 26 تقييمًا فقط — راجع صفحة متجر التطبيقات الحالية للحصول على الأرقام المحدّثة، إذ يتلقى التطبيق تحديثات بوتيرة شبه يومية. ما يميز Noema عن كثير من تطبيقات الذكاء الاصطناعي المحلي للهواتف المحمولة المقتصرة على صيغة واحدة هو أنه يحمّل النماذج بخمس طرق مختلفة — GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation الخاصة بها — بدلاً من حصر المستخدم في بيئة تشغيل واحدة. كما يدعم محادثة المستندات: استيراد ملفات PDF وEPUB وطرح أسئلة مبنية على مقاطع مفهرسة، وهو مسار عمل شبيه بالاسترجاع يعمل بالكامل على الجهاز بدلاً من عبور خط أنابيب RAG سحابي.',
    metaDescription:
      'مراجعة Noema: تطبيق مجاني لأجهزة iPhone/iPad/Mac يدعم 5 صيغ نماذج (GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation) بالإضافة إلى محادثة مستندات PDF/EPUB على الجهاز. السعر والخصوصية والبدائل.',
    twitterDescription:
      'مراجعة Noema: تطبيق مجاني لأجهزة iPhone وiPad وMac يشغّل نماذج ذكاء اصطناعي محلية بخمس صيغ — GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation — بالإضافة إلى محادثة مستندات على الجهاز لملفات PDF وEPUB.',
    audience:
      'مستخدمو iPhone وiPad وMac الذين يقيّمون تطبيقًا مجانيًا متعدد الصيغ للذكاء الاصطناعي المحلي مع محادثة مستندات مقابل بدائل مثل Private LLM وPocketPal AI وEnclave AI — يغطي الصيغ المدعومة وأسئلة وأجوبة المستندات والخصوصية وتنبيه حجم عينة التقييمات الصغير.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Noema review',
    targetKeywords: [
      'noema review',
      'noema app iphone',
      'noema local ai',
      'noema ios app',
      'noema vs private llm',
      'on-device ai document chat',
      'gguf mlx executorch core ml app',
      'best free local llm app for iphone',
    ],
    current_models_mentioned: ['Noema 1.5 2B'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac بمعالج Apple Silicon (M1 أو أحدث)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Noema هو تطبيق مجاني لأنظمة iOS وiPadOS وmacOS وvisionOS، من صنع المطور المستقل Alexandru Stamate ([NoemaAI LLC](https://noemaai.com/ownership))، يشغّل نماذج لغوية مفتوحة المصدر بالكامل على الجهاز بخمس صيغ مختلفة: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation الخاصة بها.** لا يكلف شيئًا على [متجر تطبيقات Apple](' +
      APP_STORE_URL +
      ')، دون اشتراك أو مشتريات داخل التطبيق، ويضيف محادثة مستندات على الجهاز لملفات PDF وEPUB. وقت كتابة هذه المراجعة، كان يحمل تقييمًا قدره 4.5 من 5 استنادًا إلى 26 تقييمًا فقط — وهي عينة صغيرة بما يكفي لعدم معادلتها بتطبيق يحمل آلاف المراجعات. القراء الذين يريدون سجلًا أطول أمدًا ينبغي أن يقارنوا أيضًا مع [Private LLM](/ar/power-local-llm/private-llm-review) أو [Enclave AI](/ar/power-local-llm/enclave-ai-review).',
    quickAnswerTop: {
      en: {
        question: 'Is Noema a good free local AI app for iPhone and Mac?',
        answer:
          'Yes, if you want a free, actively maintained app that loads models in multiple formats (GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models) and adds on-device document chat for PDFs and EPUBs. Its 4.5-star rating is based on only 26 ratings, so treat that as an early signal rather than a proven track record — apps like Private LLM and Enclave AI have longer public histories.',
        bullets: [
          'Free on the Apple App Store, no subscription and no in-app purchases listed.',
          'iPhone, iPad, Mac (Apple Silicon), and Apple Vision Pro — requires iOS/iPadOS 18 or later.',
          'Loads models in five formats: GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models.',
          'Document chat: import PDFs and EPUBs for on-device, indexed, grounded Q&A.',
          'Version 3.9 at time of writing, updated within hours of this review — check the App Store for the current version.',
          '4.5/5 rating from 26 ratings as of this review — a small sample size.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Ist Noema eine gute kostenlose lokale KI-App für iPhone und Mac?',
        answer:
          'Ja, wenn Sie eine kostenlose, aktiv gepflegte App möchten, die Modelle in mehreren Formaten lädt (GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models) und einen Dokument-Chat auf dem Gerät für PDFs und EPUBs bietet. Die 4,5-Sterne-Bewertung basiert auf nur 26 Bewertungen — betrachten Sie das eher als frühes Signal denn als belegte Erfolgsbilanz. Apps wie Private LLM und Enclave AI haben eine längere öffentliche Historie.',
        bullets: [
          'Kostenlos im Apple App Store, kein Abonnement und keine In-App-Käufe gelistet.',
          'iPhone, iPad, Mac (Apple Silicon) und Apple Vision Pro — erfordert iOS/iPadOS 18 oder neuer.',
          'Lädt Modelle in fünf Formaten: GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models.',
          'Dokument-Chat: PDFs und EPUBs importieren für indexierte, fundierte Fragen und Antworten auf dem Gerät.',
          'Version 3.9 zum Zeitpunkt der Erstellung, wenige Stunden vor diesem Test aktualisiert — aktuelle Version im App Store prüfen.',
          '4,5/5 Bewertung aus 26 Bewertungen zum Zeitpunkt dieses Tests — eine kleine Stichprobe.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'Noema est-elle une bonne application d\'IA locale gratuite pour iPhone et Mac ?',
        answer:
          'Oui, si vous voulez une application gratuite et activement maintenue qui charge des modèles dans plusieurs formats (GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models) et propose un chat de documents sur l\'appareil pour les PDF et EPUB. Sa note de 4,5 étoiles repose sur seulement 26 avis, à considérer comme un signal précoce plutôt qu\'un historique éprouvé — des applications comme Private LLM et Enclave AI ont un historique public plus long.',
        bullets: [
          'Gratuite sur l\'App Store d\'Apple, sans abonnement ni achat intégré répertorié.',
          'iPhone, iPad, Mac (Apple Silicon) et Apple Vision Pro — nécessite iOS/iPadOS 18 ou version ultérieure.',
          'Charge les modèles dans cinq formats : GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models.',
          'Chat de documents : importez des PDF et EPUB pour des questions-réponses indexées et fondées, sur l\'appareil.',
          'Version 3.9 au moment de la rédaction, mise à jour quelques heures avant ce test — vérifiez la version actuelle sur l\'App Store.',
          'Note de 4,5/5 sur seulement 26 avis au moment de ce test — un échantillon restreint.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Es Noema una buena app de IA local gratuita para iPhone y Mac?',
        answer:
          'Sí, si buscas una app gratuita y activamente mantenida que carga modelos en varios formatos (GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models) y añade chat de documentos en el dispositivo para PDF y EPUB. Su calificación de 4.5 estrellas se basa en solo 26 valoraciones, así que trátala como una señal temprana y no como un historial comprobado — apps como Private LLM y Enclave AI tienen un historial público más largo.',
        bullets: [
          'Gratis en la App Store de Apple, sin suscripción ni compras dentro de la app.',
          'iPhone, iPad, Mac (Apple Silicon) y Apple Vision Pro — requiere iOS/iPadOS 18 o posterior.',
          'Carga modelos en cinco formatos: GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models.',
          'Chat de documentos: importa PDF y EPUB para preguntas y respuestas indexadas y fundamentadas en el dispositivo.',
          'Versión 3.9 al momento de esta reseña, actualizada horas antes de su publicación — verifica la versión actual en la App Store.',
          'Calificación de 4.5/5 con solo 26 valoraciones al momento de esta reseña — una muestra pequeña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O Noema é um bom aplicativo gratuito de IA local para iPhone e Mac?',
        answer:
          'Sim, se você quer um aplicativo gratuito e mantido ativamente que carrega modelos em vários formatos (GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models) e oferece chat de documentos no dispositivo para PDFs e EPUBs. A avaliação de 4,5 estrelas se baseia em apenas 26 avaliações, então trate isso como um sinal inicial, não um histórico comprovado — apps como Private LLM e Enclave AI têm um histórico público mais longo.',
        bullets: [
          'Gratuito na App Store da Apple, sem assinatura e sem compras no aplicativo listadas.',
          'iPhone, iPad, Mac (Apple Silicon) e Apple Vision Pro — exige iOS/iPadOS 18 ou posterior.',
          'Carrega modelos em cinco formatos: GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models.',
          'Chat de documentos: importe PDFs e EPUBs para perguntas e respostas indexadas e fundamentadas no dispositivo.',
          'Versão 3.9 no momento desta análise, atualizada poucas horas antes da publicação — confira a versão atual na App Store.',
          'Avaliação de 4,5/5 com apenas 26 avaliações no momento desta análise — uma amostra pequena.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'Noemaは iPhone と Mac 向けの優れた無料ローカルAIアプリですか?',
        answer:
          '複数の形式(GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models)でモデルを読み込める、無料で積極的にメンテナンスされているアプリを求めるなら、はいです。PDFやEPUBのオンデバイス文書チャットも追加されています。4.5の評価はわずか26件の評価に基づくもので、実績というより初期のシグナルとして捉えてください — Private LLMやEnclave AIはより長い公開履歴を持っています。',
        bullets: [
          'Apple App Storeで無料。サブスクリプションやアプリ内課金は掲載されていません。',
          'iPhone、iPad、Mac(Apple Silicon)、Apple Vision Pro対応 — iOS/iPadOS 18以降が必要です。',
          '5つの形式でモデルを読み込み: GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models。',
          '文書チャット: PDFやEPUBをインポートし、オンデバイスでインデックス化された根拠のある質問応答が可能。',
          '本レビュー執筆時点でバージョン3.9。公開の数時間前に更新済み — 現在のバージョンはApp Storeで確認してください。',
          '本レビュー時点で評価4.5/5、評価数はわずか26件 — サンプルサイズは小さいです。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'Noema 是适合 iPhone 和 Mac 的优质免费本地 AI 应用吗?',
        answer:
          '如果你想要一款免费、持续维护、支持多种格式加载模型(GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models)并提供设备端文档聊天功能(支持 PDF 和 EPUB)的应用,答案是肯定的。它的 4.5 星评分仅基于 26 条评价,应视为早期信号,而非成熟的长期记录 — Private LLM 和 Enclave AI 拥有更长的公开历史。',
        bullets: [
          '在 Apple App Store 免费提供,未列出订阅或应用内购买。',
          '支持 iPhone、iPad、Mac(Apple Silicon)和 Apple Vision Pro — 需要 iOS/iPadOS 18 或更高版本。',
          '支持五种模型格式加载: GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models。',
          '文档聊天: 导入 PDF 和 EPUB,进行设备端索引、有据可查的问答。',
          '撰写本评测时的版本为 3.9,发布前几小时刚更新 — 请在 App Store 确认当前版本。',
          '截至本评测,评分为 4.5/5,仅基于 26 条评价 — 样本量较小。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل Noema تطبيق ذكاء اصطناعي محلي مجاني جيد لأجهزة iPhone و Mac؟',
        answer:
          'نعم، إذا كنت تريد تطبيقًا مجانيًا يُصان بنشاط ويُحمّل النماذج بعدة صيغ (GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation) ويضيف محادثة مستندات على الجهاز لملفات PDF وEPUB. يستند تقييمه البالغ 4.5 نجوم إلى 26 تقييمًا فقط، لذا تعامل معه كإشارة مبكرة وليس سجلًا موثوقًا طويل الأمد — تطبيقات مثل Private LLM وEnclave AI لها تاريخ عام أطول.',
        bullets: [
          'مجاني على متجر تطبيقات Apple؛ لا يوجد اشتراك ولا مشتريات داخل التطبيق مذكورة.',
          'يعمل على iPhone وiPad وMac (Apple Silicon) وApple Vision Pro — يتطلب iOS/iPadOS 18 أو أحدث.',
          'يُحمّل النماذج بخمس صيغ: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation.',
          'محادثة المستندات: استيراد ملفات PDF وEPUB للحصول على إجابات مفهرسة ومبنية على الجهاز.',
          'الإصدار 3.9 وقت كتابة هذه المراجعة، وقد تم تحديثه قبل ساعات من نشرها — تحقق من الإصدار الحالي على متجر التطبيقات.',
          'تقييم 4.5 من 5 بناءً على 26 تقييمًا فقط وقت هذه المراجعة — عينة صغيرة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'Noema는 iPhone과 Mac에 적합한 우수한 무료 로컬 AI 앱입니까?',
        answer:
          '여러 형식(GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models)으로 모델을 불러올 수 있고 PDF와 EPUB를 위한 온디바이스 문서 채팅 기능을 갖춘, 무료이면서 활발히 유지 관리되는 앱을 원한다면 그렇습니다. 4.5점 평점은 단 26개의 평가에 근거한 것이므로, 검증된 실적이 아니라 초기 신호로 받아들여야 합니다 — Private LLM과 Enclave AI는 더 긴 공개 이력을 가지고 있습니다.',
        bullets: [
          'Apple App Store에서 무료로 제공되며, 구독이나 인앱 구매가 게재되어 있지 않습니다.',
          'iPhone, iPad, Mac(Apple Silicon), Apple Vision Pro를 지원하며 iOS/iPadOS 18 이상이 필요합니다.',
          '다섯 가지 형식으로 모델을 불러옵니다: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
          '문서 채팅: PDF와 EPUB를 가져와 온디바이스에서 색인화되고 근거에 기반한 질의응답이 가능합니다.',
          '이 리뷰 작성 시점 버전은 3.9이며, 발행 몇 시간 전에 업데이트되었습니다 — 현재 버전은 App Store에서 확인하십시오.',
          '이 리뷰 시점 기준 26개의 평가만으로 4.5/5점을 받았습니다 — 표본 크기가 작습니다.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما هو Noema', anchor: 'what-is-noema' },
      { label: 'كيفية البدء', anchor: 'how-to-get-started' },
      { label: 'صيغ النماذج المدعومة', anchor: 'supported-model-formats' },
      { label: 'محادثة المستندات: أسئلة وأجوبة PDF وEPUB', anchor: 'document-chat' },
      { label: 'المنصات والمتطلبات', anchor: 'platforms' },
      { label: 'الخصوصية: ما يجمعه Noema وما لا يجمعه', anchor: 'privacy' },
      { label: 'المقايضات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'Noema مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم Noema', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم Noema', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'خلاصة سريعة',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Noema تطبيق مجاني لأجهزة iPhone وiPad وMac وVision Pro من صنع المطور المستقل Alexandru Stamate (NoemaAI LLC)، يشغّل نماذج ذكاء اصطناعي محلية بخمس صيغ — GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation — ويضيف محادثة مستندات على الجهاز لملفات PDF وEPUB.',
          },
          {
            type: 'plain-terms',
            text: 'معظم تطبيقات الذكاء الاصطناعي المحلي للهواتف لا تشغّل سوى نوع واحد من ملفات النماذج. أما Noema فيمكنه تحميل عدة أنواع مختلفة، إضافة إلى نموذج Apple المدمج الخاص بها، حتى لا تكون عالقًا إذا كان النموذج المفضل لديك متاحًا بصيغة واحدة فقط — ويمكنه أيضًا قراءة ملف PDF أو EPUB تزوده به والإجابة عن أسئلة مبنية على ذلك المستند، كل ذلك دون اتصال بالإنترنت.',
          },
        ],
        items: [
          'السعر: مجاني على [متجر تطبيقات Apple](' + APP_STORE_URL + ')؛ لا اشتراك ولا مشتريات داخل التطبيق مذكورة وقت هذه المراجعة.',
          'المنصات: iPhone وiPad وMac (Apple Silicon) وApple Vision Pro — لا يوجد تطبيق رسمي لـ Android أو Windows أو Linux.',
          'المطور: [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) / [NoemaAI LLC](https://noemaai.com/ownership).',
          'صيغ النماذج: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation على الجهاز — خمس صيغ في تطبيق واحد.',
          'محادثة المستندات: استيراد ملفات PDF وEPUB؛ يفهرس التطبيق المقاطع للحصول على أسئلة وأجوبة مبنية على أساس على الجهاز.',
          'الخصوصية: يصرّح المطور بأن التطبيق لا يجمع أي بيانات؛ لا حاجة إلى حساب لاستخدامه.',
          'التقييم: 4.5 من 5 استنادًا إلى 26 تقييمًا فقط وقت هذه المراجعة — عينة صغيرة، وليست سجلًا طويلًا.',
          'الإصدار 3.9 وقت الكتابة، مع تحديث قبل ساعات من هذه المراجعة — تأكد من الإصدار الحالي على متجر التطبيقات قبل الاعتماد على ميزة معينة.',
        ],
      },
      whatIsNoema: {
        id: 'what-is-noema',
        title: 'ما هو Noema',
        content: [
          '**Noema تطبيق Apple أصلي يقوم بتنزيل وتشغيل نماذج لغوية مفتوحة المصدر مباشرة على جهاز iPhone أو iPad أو Mac أو سماعة Vision Pro، دون الحاجة إلى أي مكوّن خادم للمحادثة المحلية.** بمجرد تنزيل النموذج، يمكن للتطبيق توليد إجابة دون اتصال بالإنترنت.',
          'قام ببنائه [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674)، وشركته [NoemaAI LLC](https://noemaai.com/ownership) تمتلك وتشغّل التطبيق وموقع [noemaai.com](' +
          SITE_URL +
          ') وفقًا لصفحة الملكية الخاصة بالموقع نفسه. التطبيق مُدرَج في متجر التطبيقات برقم معرف 6751169935. تقيّم هذه المراجعة ادعاءات المطور نفسه — "لا حاجة إلى أي سحابة للمحادثة المحلية"، لا حاجة إلى حساب، لا جمع للبيانات — مقارنةً بملصق الخصوصية على متجر التطبيقات والوصف العام للتطبيق، بدلاً من قبول الخطاب التسويقي كما هو.',
          'يُحدَّث التطبيق بوتيرة غير معتادة: الإصدار الذي تمت مراجعته لهذا التقرير، وهو 3.9، كان قد صدر قبل ساعات فقط من كتابة هذه المراجعة، ووصفت ملاحظات "الجديد" لهذا الإصدار إصلاحات لاستقرار نماذج MLX وفهرسة المستندات ونماذج الرؤية والتوافق مع Core ML — دليل على صيانة نشطة ومستمرة، وليس مشروعًا متوقفًا أو مهجورًا.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**تشغيل Noema يستغرق بضع دقائق ولا يتطلب إنشاء حساب.**',
        ],
        numberedItems: [
          {
            title: 'تنزيل التطبيق',
            whyItMatters: 'احصل على [Noema من متجر تطبيقات Apple](' + APP_STORE_URL + ') مجانًا. لا توجد فئة تجريبية للقلق بشأنها ولا اشتراك يلزم إلغاؤه لاحقًا — التطبيق الكامل مجاني منذ أول تشغيل.',
          },
          {
            title: 'اختيار صيغة ومصدر النموذج',
            whyItMatters: 'تصفح ونزّل نموذج GGUF من Hugging Face مباشرة داخل التطبيق، أو استخدم نموذج MLX أو ExecuTorch أو Core ML، أو استخدم نموذج Apple Foundation المدمج إذا كنت تفضل عدم تنزيل أي شيء على الإطلاق.',
          },
          {
            title: 'استيراد مستند لمحادثة المستندات',
            whyItMatters: 'أضف ملف PDF أو EPUB من تطبيق الملفات أو iCloud Drive. يفهرس Noema مقاطع المستند على الجهاز حتى تتمكن من طرح أسئلة مبنية على محتواه بدلاً من الاعتماد فقط على المعرفة العامة للنموذج.',
          },
          {
            title: 'المحادثة أو التلخيص أو توليد بطاقات المراجعة',
            whyItMatters: 'بمجرد تحميل نموذج، ومستند اختياريًا، استخدم التطبيق بالكامل دون اتصال للمحادثة وتلخيص المستندات وتدوين الملاحظات أو توليد بطاقات المراجعة.',
          },
          {
            title: 'اختياري: تفعيل بحث الويب أو مزود بعيد',
            whyItMatters: 'بشكل افتراضي، يعمل Noema محليًا فقط. يصف موقع المطور نفسه "وضع خارج الشبكة" يحظر حركة HTTP وHTTPS الخارجية؛ بحث الويب أو الاتصال بمزود نموذج بعيد هو خيار صريح ومنفصل، وليس السلوك الافتراضي.',
          },
        ],
        note: 'قد تتغير أحجام التنزيل الدقيقة، وقائمة النماذج المدعومة حاليًا، والحد الأدنى من متطلبات الجهاز بين تحديثات متجر التطبيقات — تأكد من التفاصيل الحالية داخل التطبيق أو على [noemaai.com](' + SITE_URL + ') قبل الالتزام بتنزيل كبير على باقة بيانات محدودة.',
      },
      supportedModelFormats: {
        id: 'supported-model-formats',
        title: 'صيغ النماذج المدعومة',
        itemHeadings: true,
        content: [
          '**الميزة المميّزة المعلنة لـ Noema هي تحميل النماذج بخمس صيغ مختلفة بدلاً من صيغة واحدة.** تلتزم معظم تطبيقات الذكاء الاصطناعي المحلي للهواتف ببيئة تشغيل واحدة — وllama.cpp وGGUF هما الخيار الأكثر شيوعًا في هذه المجموعة من المراجعات. يدعم Noema بدلاً من ذلك GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation الخاصة بها جنبًا إلى جنب، وفقًا لوصف التطبيق نفسه على متجر التطبيقات وموقع [noemaai.com](' + SITE_URL + ').',
        ],
        columns: ['الصيغة', 'ما هي', 'لماذا تهم هنا'],
        rows: [
          {
            'الصيغة': 'GGUF',
            'ما هي': 'صيغة النموذج المكمّم التي يستخدمها llama.cpp، ويستخدمها معظم تطبيقات الذكاء الاصطناعي المحلي مفتوحة المصدر وغالبية النماذج المكمّمة من قِبل المجتمع على Hugging Face.',
            'لماذا تهم هنا': 'يمنح الوصول إلى أكبر مجموعة من ملفات نماذج المجتمع الجاهزة للاستخدام دون انتظار تحويل خاص بالصيغة.',
          },
          {
            'الصيغة': 'MLX',
            'ما هي': 'إطار عمل Apple الخاص بمصفوفات التعلم الآلي، مصمم لاستخدام الذاكرة الموحدة وتسريع GPU من نوع Metal الخاصين بـ Apple Silicon مباشرة.',
            'لماذا تهم هنا': 'يمكن أن يعمل بسرعة أكبر بشكل ملحوظ على Apple Silicon مقارنة بصيغة عامة تعتمد على المعالج، على حساب العمل جيدًا فقط على أجهزة Apple.',
          },
          {
            'الصيغة': 'ExecuTorch',
            'ما هي': 'بيئة تشغيل الاستدلال على الجهاز الخاصة بـ PyTorch، مصممة لتصدير نماذج PyTorch وتشغيلها بكفاءة على أجهزة الهواتف والحوسبة الطرفية.',
            'لماذا تهم هنا': 'يوسّع مجموعة النماذج التي يمكن لـ Noema تحميلها إلى ما وراء نظام GGUF/MLX، لتشمل نماذج مُصدَّرة مباشرة من PyTorch.',
          },
          {
            'الصيغة': 'Core ML',
            'ما هي': 'صيغة التعلم الآلي الأصلية من Apple، مُحسَّنة للعمل عبر المعالج والـ GPU ومحرك Neural Engine في أجهزة Apple.',
            'لماذا تهم هنا': 'يتيح للتطبيق تحميل نماذج محسّنة خصيصًا لمحرك Neural Engine من Apple بدلاً من الصيغ العامة فقط.',
          },
          {
            'الصيغة': 'Apple Foundation Models',
            'ما هي': 'النموذج اللغوي الكبير المدمج والخاص بـ Apple والذي يعمل على الجهاز، متاح على مستوى النظام بدءًا من iOS 18 على الأجهزة المدعومة.',
            'لماذا تهم هنا': 'يتيح تجربة محادثة المستندات أو المحادثة العامة فورًا دون أي تنزيل للنموذج، باستخدام النموذج الموجود بالفعل على الجهاز.',
          },
        ],
        note: 'قد يتغير دعم الصيغ والقائمة الدقيقة للنماذج بين تحديثات متجر التطبيقات. تأكد من توافق الصيغة الحالية ومتطلبات الأجهزة لنموذج معين داخل التطبيق قبل الاعتماد عليه.',
      },
      documentChat: {
        id: 'document-chat',
        title: 'محادثة المستندات: أسئلة وأجوبة PDF وEPUB',
        content: [
          '**يستورد Noema ملفات PDF وEPUB، بما في ذلك الكتب الدراسية، ويفهرس مقاطعها على الجهاز حتى يتمكن نموذج مُحمَّل من الإجابة عن أسئلة مبنية على ذلك المستند تحديدًا.** يصف موقع المطور نفسه هذا بأنه قراءة مستند "بشكل أكثر تعمقًا" وتأسيس الإجابات "على مجموعات بياناتك الخاصة مع استرجاع يبقى على الجهاز" — وهو مسار عمل شبيه بالاسترجاع يشبه من حيث الجوهر التوليد المعزَّز بالاسترجاع (RAG) من جانب الخادم، لكنه يعمل محليًا بدلاً من العمل مقابل قاعدة بيانات متجهية سحابية.',
          'إلى جانب الإجابة عن الأسئلة، يمكن للتطبيق توليد ملخصات وملاحظات وبطاقات مراجعة من مستند مستورد، ويدعم نماذج قادرة على الرؤية للمستندات أو الصور التي تتضمن رسومًا بيانية أو صفحات ممسوحة ضوئيًا.',
          'لم تختبر هذه المراجعة بشكل مستقل دقة استرجاع فهرسة المستندات في Noema مقابل أدوات RAG مخصصة لسطح المكتب — الوصف أعلاه يعكس الميزات التي يصرّح بها المطور نفسه، وليس اختبار دقة مستقل.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'المنصات والمتطلبات',
        itemHeadings: true,
        columns: ['المنصة', 'ما يمكن توقعه', 'ملاحظة مهمة'],
        rows: [
          {
            'المنصة': 'iPhone / iPad',
            'ما يمكن توقعه': 'يتطلب iOS أو iPadOS 18 أو أحدث، وفقًا لصفحة متجر التطبيقات. يشغّل كامل مجموعة صيغ النماذج ومحادثة المستندات.',
            'ملاحظة مهمة': 'تحتاج النماذج الأكبر والمستندات المستوردة الأكبر إلى مساحة تخزين وذاكرة RAM متاحة أكبر؛ النماذج المكمّمة الأصغر هي نقطة البداية الأكثر أمانًا على الأجهزة الأقدم.',
          },
          {
            'المنصة': 'Mac',
            'ما يمكن توقعه': 'تطبيق أصلي لأجهزة Mac بمعالج Apple Silicon (M1 أو أحدث)، وفقًا لصفحة متجر التطبيقات.',
            'ملاحظة مهمة': 'تسمح الذاكرة الموحدة في Apple Silicon عمومًا بنماذج أكبر مقارنة بجهاز iPhone أو iPad مماثل.',
          },
          {
            'المنصة': 'Apple Vision Pro',
            'ما يمكن توقعه': 'مُدرَج كجهاز مدعوم على متجر التطبيقات.',
            'ملاحظة مهمة': 'لم تختبر هذه المراجعة تجربة Vision Pro بشكل مستقل؛ تعامل معها كتوافق مُدرَج على متجر التطبيقات وليس كميزة تم التحقق منها عمليًا.',
          },
          {
            'المنصة': 'Android وWindows وLinux',
            'ما يمكن توقعه': 'لا يوجد تطبيق رسمي على Google Play أو Microsoft Store أو أي مستودع حزم Linux، وفقًا لموقع المطور نفسه.',
            'ملاحظة مهمة': 'ينبغي على القراء على هذه المنصات النظر بدلاً من ذلك إلى [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) (Android/iOS) أو خيار آخر متعدد المنصات.',
          },
        ],
        note: 'بلغ حجم التطبيق نحو 368 ميغابايت وقت المراجعة، مع واجهة متاحة بالإنجليزية إضافة إلى عشر لغات أخرى (العربية والفرنسية والألمانية والهندية واليابانية والكورية والرومانية والصينية المبسطة والإسبانية والتركية)، وفقًا لصفحة متجر التطبيقات. يُظهر متجر التطبيقات تصنيفًا عمريًا 13+.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية: ما يجمعه Noema وما لا يجمعه',
        content: [
          '**يشير ملصق الخصوصية على متجر تطبيقات Noema إلى أن المطور لا يجمع أي بيانات من التطبيق**، ولا يتطلب التطبيق حسابًا أو تسجيل دخول أو اشتراكًا لاستخدامه.',
          'يصف موقع المطور نفسه "وضع خارج الشبكة" يحظر حركة HTTP وHTTPS الخارجية، ويصرّح بأن المحادثة المحلية لا تتطلب أي اتصال سحابي. تُوصف الميزات الاختيارية — بحث الويب والاتصال بمزود نموذج بعيد — بأنها خيارات صريحة، وليست إعدادات افتراضية.',
        ],
        items: [
          '**لا حاجة إلى حساب.** نزّل التطبيق واستخدمه دون إنشاء ملف شخصي أو تسجيل الدخول.',
          '**لا جمع للبيانات، وفقًا لملصق متجر التطبيقات.** يُظهر ملصق التغذية الخاص بالخصوصية من Apple لهذه الصفحة عدم جمع أي بيانات من التطبيق.',
          '**وضع خارج الشبكة.** يصف موقع المطور نفسه وضعًا يحظر حركة HTTP وHTTPS الخارجية، للقراء الذين يريدون ضمانًا صارمًا ضد أي استدعاء شبكي صادر.',
          '**ميزات الشبكة الاختيارية اختيارية التفعيل.** تُوصف ميزتا بحث الويب والاتصال بمزودين بعيدين بأنهما ميزتان يجب على المستخدم تفعيلهما صراحة، وليستا الحالة الافتراضية.',
          '**واجهة برمجة محلية وNoema Relay.** يصف موقع المطور واجهة برمجة تطبيقات شبكية محلية خاصة لربط تطبيقات أخرى بالنماذج التي تعمل داخل Noema، وميزة "Noema Relay" للوصول إلى النماذج عبر الأجهزة — تعامل هذه المراجعة هذه الميزات على أنها ميزات وصفها المطور، وليست عمليات تدقيق أمان شبكي تم التحقق منها بشكل مستقل.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المقايضات: المزايا مقابل القيود',
        columns: ['الميزة', 'ماذا تعني في الاستخدام الفعلي', 'القيد / التحفظ'],
        rows: [
          {
            'الميزة': 'مجاني، دون اشتراك',
            'ماذا تعني في الاستخدام الفعلي': 'كل ميزة، بما فيها محادثة المستندات، متاحة مجانًا منذ أول تشغيل.',
            'القيد / التحفظ': 'يحظى تطبيق مجاني من مطور واحد بدعم مؤسسي أقل من تطبيق مدفوع من فريق أكبر وأكثر رسوخًا.',
          },
          {
            'الميزة': 'خمس صيغ نماذج مدعومة',
            'ماذا تعني في الاستخدام الفعلي': 'تغطي GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation جزءًا أوسع من نظام النماذج مقارنة بمنافس محصور بصيغة واحدة.',
            'القيد / التحفظ': 'قد تعني الصيغ الأكثر حالات حدّية أكثر؛ تصف ملاحظات إصدار التطبيق نفسه من يوليو إلى سبتمبر إصلاحات مستمرة لتوافق MLX وCore ML.',
          },
          {
            'الميزة': 'محادثة مستندات على الجهاز',
            'ماذا تعني في الاستخدام الفعلي': 'استورد ملف PDF أو EPUB واطرح أسئلة مبنية على أساس، وأنشئ ملخصات أو بطاقات مراجعة، دون رفع المستند إلى أي مكان.',
            'القيد / التحفظ': 'لم تختبر PromptQuorum بشكل مستقل دقة الاسترجاع في المستندات الطويلة أو المعقدة مقابل أدوات RAG مخصصة لسطح المكتب.',
          },
          {
            'الميزة': 'لا حساب، لا جمع للبيانات',
            'ماذا تعني في الاستخدام الفعلي': 'استخدم التطبيق فورًا دون التسجيل في أي شيء؛ يُظهر ملصق الخصوصية على متجر التطبيقات عدم جمع أي بيانات.',
            'القيد / التحفظ': 'لم تدقق هذه المراجعة الشيفرة المصدرية للتطبيق بشكل مستقل؛ فهي تعتمد على ملصق الخصوصية في متجر التطبيقات وادعاءات المطور نفسه.',
          },
          {
            'الميزة': 'وتيرة تحديث نشطة جدًا',
            'ماذا تعني في الاستخدام الفعلي': 'تشير الإصدارات المتكررة إلى تطبيق يُصان بنشاط بدلاً من كونه مهجورًا.',
            'القيد / التحفظ': 'يعني تكرار الإصدارات العالي أيضًا أن أرقام الإصدارات المحددة وتفاصيل الميزات وحالات الأخطاء في هذه المراجعة قد تصبح قديمة أسرع من تطبيق يتطور بوتيرة أبطأ — تحقق من السلوك الحالي داخل التطبيق.',
          },
          {
            'الميزة': 'تقييم 4.5 من 5',
            'ماذا تعني في الاستخدام الفعلي': 'متوسط التقييم مرتفع.',
            'القيد / التحفظ': 'يستند هذا المتوسط إلى 26 تقييمًا فقط وقت هذه المراجعة — عينة صغيرة لا ينبغي معادلتها بتطبيق لديه قاعدة تقييمات كبيرة وراسخة.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Noema مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر', 'مرونة النماذج', 'الفرق الأساسي'],
        rows: [
          {
            'التطبيق': 'Noema',
            'المنصات': 'iPhone/iPad/Mac/Vision Pro (Apple فقط)',
            'السعر': 'مجاني',
            'مرونة النماذج': 'خمس صيغ: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation',
            'الفرق الأساسي': 'تحميل متعدد الصيغ مع محادثة مستندات على الجهاز؛ عينة تقييمات لا تزال صغيرة',
          },
          {
            'التطبيق': '[Private LLM](/ar/power-local-llm/private-llm-review)',
            'المنصات': 'iPhone/iPad/Mac (Apple فقط)',
            'السعر': 'شراء لمرة واحدة بسعر 4.99 دولار',
            'مرونة النماذج': 'أكثر من 140 نموذجًا منتقًى؛ تكميم OmniQuant/GPTQ',
            'الفرق الأساسي': 'مدفوع، مغلق المصدر، مكتبة منتقاة مع سجل عام لثلاث سنوات من الإصدارات',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iPhone/iPad، مع دعم جزئي لـ Android',
            'السعر': 'مجاني، مفتوح المصدر',
            'مرونة النماذج': 'أي ملف GGUF يحصل عليه المستخدم من Hugging Face أو مصدر آخر',
            'الفرق الأساسي': 'مجاني ومفتوح المصدر؛ GGUF فقط، دون محادثة مستندات مدمجة',
          },
          {
            'التطبيق': '[Enclave AI](/ar/power-local-llm/enclave-ai-review)',
            'المنصات': 'راجع الصفحة الحالية',
            'السعر': 'راجع الصفحة الحالية',
            'مرونة النماذج': 'راجع المراجعة الكاملة للاطلاع على دعم النماذج الحالي',
            'الفرق الأساسي': 'راجع مراجعة Enclave AI الكاملة للحصول على مقارنة تفصيلية',
          },
          {
            'التطبيق': '[Locally AI](/ar/power-local-llm/locally-ai-review)',
            'المنصات': 'iPhone/iPad/Mac',
            'السعر': 'مجاني',
            'مرونة النماذج': 'مبني حصريًا على Apple MLX؛ وصول إلى نموذج Apple Foundation المدمج على الجهاز',
            'الفرق الأساسي': 'بديل مجاني يعتمد على MLX فقط، مقابل دعم Noema لخمس صيغ',
          },
        ],
        note: 'تتغير تفاصيل المنصة والسعر والميزات لتطبيقات الجهات الخارجية بشكل متكرر — تحقق من التفاصيل الحالية على صفحة كل تطبيق قبل اتخاذ القرار.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم Noema',
        items: [
          '**مستخدمو Apple الذين يريدون مرونة في الصيغ.** القراء الذين لديهم بالفعل ملفات نماذج بصيغ مختلفة — أو الذين يريدون تجربة نماذج GGUF وMLX وExecuTorch وCore ML دون تبديل التطبيق — يحصلون على الأربعة جميعًا بالإضافة إلى نموذج Apple Foundation المدمج في مكان واحد.',
          '**القراء الذين يريدون أسئلة وأجوبة مستندات على الجهاز.** استيراد ملف PDF أو EPUB وطرح أسئلة مبنية على أساس محليًا هو ميزة مستقلة لا يقدمها كل تطبيق ذكاء اصطناعي محلي للهواتف.',
          '**المستخدمون المهتمون بالميزانية.** التطبيق مجاني ودون اشتراك، وهو أمر مهم للقراء الذين يريدون تجربة الذكاء الاصطناعي المحلي دون التزام مالي مسبق.',
          '**المتبنّون الأوائل المرتاحون لسجل تقييمات حديث.** القراء الذين لا يزعجهم أن متوسط 4.5 نجوم يستند إلى 26 تقييمًا فقط، والذين يقدّرون تطبيقًا نشطًا ومحدَّثًا بشكل متكرر أكثر من سجل عام أطول أمدًا.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم Noema',
        items: [
          '**مستخدمو Android أو Windows أو Linux.** لا يمتلك Noema تطبيقًا رسميًا على أي من هذه المنصات — اختر بدلاً من ذلك [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) (دعم جزئي لـ Android) أو خيارًا آخر متعدد المنصات.',
          '**القراء الذين يريدون سجل تقييمات طويلًا وراسخًا قبل الوثوق بتطبيق.** مع 26 تقييمًا فقط وقت هذه المراجعة، ينبغي على القراء الذين يعطون الأولوية للدليل الاجتماعي أن يزنوا أيضًا [Private LLM](/ar/power-local-llm/private-llm-review)، الذي لديه سجل عام من الإصدارات يمتد لعدة سنوات.',
          '**القراء الذين يريدون أكبر مكتبة نماذج منتقاة ممكنة.** مرونة الصيغ في Noema واسعة، لكنه لا يقدّم مكتبة منتقاة من أكثر من 140 نموذجًا كما يفعل [Private LLM](/ar/power-local-llm/private-llm-review).',
          '**الفرق التي تريد نشرًا مُدارًا مركزيًا.** Noema هو تطبيق استهلاكي لمستخدم واحد وجهاز واحد، دون وحدة تحكم إدارية أو فوترة للفرق — ينبغي على المؤسسات النظر بدلاً من ذلك إلى بنية تحتية مستضافة ذاتيًا لنماذج LLM محلية من جانب الخادم.',
          '**القراء الذين يحتاجون إلى معايير قياس مستقلة من طرف ثالث لدقة استرجاع المستندات.** تعتمد هذه المراجعة على وصف المطور نفسه لميزة محادثة المستندات، وليس على معيار قياس دقة مستقل مقابل أدوات RAG مخصصة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كم تكلفة Noema؟',
            a: 'Noema [مجاني على متجر تطبيقات Apple](' + APP_STORE_URL + ')، تم التحقق منه لهذه المراجعة بتاريخ 2026-09-12. لا يوجد اشتراك ولا مشتريات داخل التطبيق مذكورة في صفحة متجر التطبيقات الحالية. قد تتغير التوفرية على متجر التطبيقات بمرور الوقت — تأكد من السعر الحالي قبل التنزيل.',
          },
          {
            q: 'ما صيغ النماذج التي يدعمها Noema؟',
            a: 'يحمّل Noema النماذج بخمس صيغ: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation الخاصة بها على الجهاز، وفقًا لوصف التطبيق نفسه على متجر التطبيقات وموقع [noemaai.com](' + SITE_URL + '). هذا الدعم متعدد الصيغ أوسع من معظم التطبيقات المنافسة المحصورة بصيغة واحدة، والتي عادة ما تقتصر فقط على GGUF أو فقط على MLX.',
          },
          {
            q: 'هل Noema متاح على Android أو Windows؟',
            a: 'لا يوجد إصدار رسمي على Google Play أو Microsoft Store أو أي مستودع حزم Linux. تم بناء Noema خصيصًا لأجهزة iPhone وiPad وMac وApple Vision Pro.',
          },
          {
            q: 'من يطوّر Noema؟',
            a: 'يطوّر Noema [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674)؛ يمتلك موقع [noemaai.com](' + SITE_URL + ') والتطبيق ويشغّلهما NoemaAI LLC، وفقًا لصفحة [الملكية](https://noemaai.com/ownership) الخاصة بالموقع نفسه.',
          },
          {
            q: 'ما محادثة المستندات في Noema؟',
            a: 'تتيح لك محادثة المستندات استيراد ملف PDF أو EPUB، بما في ذلك الكتب الدراسية، وطرح أسئلة مبنية على أساس على ذلك المستند تحديدًا. يفهرس Noema مقاطع المستند على الجهاز، وهو مسار عمل شبيه بالاسترجاع يشبه من حيث الجوهر RAG من جانب الخادم لكنه يعمل محليًا. يمكن للتطبيق أيضًا توليد ملخصات وملاحظات وبطاقات مراجعة من مستند مستورد.',
          },
          {
            q: 'هل يعمل Noema دون اتصال بالكامل؟',
            a: 'نعم، للمحادثة المحلية ومحادثة المستندات بمجرد تحميل نموذج وأي مستند. يصف موقع المطور نفسه "وضع خارج الشبكة" يحظر حركة HTTP وHTTPS الخارجية؛ الميزات الاختيارية مثل بحث الويب أو مزود نموذج بعيد هي خيارات صريحة ومنفصلة، وليست السلوك الافتراضي.',
          },
          {
            q: 'هل يجمع Noema أي بيانات شخصية؟',
            a: 'يشير ملصق التغذية الخاص بالخصوصية من Apple على متجر التطبيقات لهذه الصفحة إلى أن المطور لا يجمع أي بيانات من التطبيق، ولا يُطلب حساب أو تسجيل دخول. تعتمد هذه المراجعة على ملصق الخصوصية في متجر التطبيقات وادعاءات المطور نفسه، وليس على تدقيق مستقل للشيفرة المصدرية.',
          },
          {
            q: 'ما مدى موثوقية تقييم Noema البالغ 4.5 نجوم؟',
            a: 'يستند متوسط 4.5 من 5 إلى 26 تقييمًا فقط وقت هذه المراجعة — عينة صغيرة مقارنة بتطبيقات لديها مئات أو آلاف المراجعات. تعامل معه كإشارة إيجابية مبكرة وليس دليلًا على سجل طويل وموثوق، وتحقق مجددًا من عدد التقييمات الحالي على متجر التطبيقات قبل الاعتماد عليه.',
          },
          {
            q: 'كيف يقارَن Noema بـ Private LLM؟',
            a: 'Noema مجاني ويدعم خمس صيغ نماذج (GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation) بالإضافة إلى محادثة مستندات على الجهاز، لكن لديه 26 تقييمًا فقط وقت هذه المراجعة. [Private LLM](/ar/power-local-llm/private-llm-review) يكلف 4.99 دولار شراءً لمرة واحدة، ويقدّم مكتبة منتقاة من أكثر من 140 نموذجًا، وله سجل عام من الإصدارات يمتد لثلاث سنوات. اختر Noema من أجل مرونة الصيغ ومحادثة المستندات دون تكلفة؛ اختر Private LLM من أجل تجربة أكثر رسوخًا وانتقاءً.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'يتميز Noema ضمن مجموعة تطبيقات الذكاء الاصطناعي المحلي للهواتف لسبب محدد وقابل للتحقق: فهو يحمّل النماذج بخمس صيغ مختلفة — GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation الخاصة بها — بينما تقتصر معظم التطبيقات المنافسة على واحدة أو اثنتين فقط. ويقرن ذلك بمحادثة مستندات على الجهاز لملفات PDF وEPUB، كل ذلك مجانًا ودون اشتراك. وتشير وتيرة تحديثه المتكررة جدًا، والتي يثبتها إصدار صدر قبل ساعات فقط من هذه المراجعة، إلى صيانة نشطة وليس مشروعًا جانبيًا مهجورًا. التحفظ الصادق يتعلق بحداثته كمنتج مُقيَّم: متوسط 4.5 نجوم مبني على 26 تقييمًا فقط هو إشارة إيجابية مبكرة، وليس نوع السجل ذي العينة الكبيرة الذي يمكن لـ [Private LLM](/ar/power-local-llm/private-llm-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) إظهاره بعد سنوات على متجر التطبيقات. ينبغي على القراء الذين يريدون مرونة الصيغ ومحادثة المستندات دون تكلفة تجربته؛ أما القراء الذين يعطون وزنًا أكبر للدليل الاجتماعي والسجل العام الأطول فينبغي أن يبدأوا بـ Private LLM أو PocketPal AI، وإعادة النظر في Noema عندما يزداد عدد تقييماته.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Noema على متجر التطبيقات](' + APP_STORE_URL + ') — السعر وتوافق المنصات وملصق الخصوصية والتقييم والإصدار والحجم.',
          '[موقع Noema الرسمي (noemaai.com)](' + SITE_URL + ') — نظرة عامة على المنتج، وصيغ النماذج المدعومة، ومحادثة المستندات، وادعاءات الخصوصية.',
          '[صفحة ملكية Noema](https://noemaai.com/ownership) — الكيان القانوني (NoemaAI LLC) وراء التطبيق والموقع.',
          '[Alexandru Stamate على متجر التطبيقات](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) — صفحة حساب المطور.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Private LLM](/ar/power-local-llm/private-llm-review) — بديل مدفوع بمكتبة منتقاة وسجل إصدارات أطول.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — بديل مجاني ومفتوح المصدر يقتصر على GGUF فقط.',
          '[مراجعة Enclave AI](/ar/power-local-llm/enclave-ai-review) — تطبيق آخر للذكاء الاصطناعي على الجهاز للمقارنة.',
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — بديل مجاني يقتصر على Apple MLX فقط.',
          '[دليل برمجيات LLM المحلية الكامل](/ar/power-local-llm/local-llm-software-directory) — دليل أوسع لأدوات LLM المحلية عبر جميع المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/noema-review-hero-ko.webp',
    title: 'Noema 리뷰(2026): iPhone·iPad·Mac용 멀티 포맷 로컬 AI',
    seoTitle: 'Noema 리뷰 2026: iPhone·Mac용 로컬 AI 앱',
    intro:
      'App Store에 "Noema: Local AI & Offline LLM"으로 등록된 Noema(개발자 계정: Alexandru Stamate, 회사: [NoemaAI LLC](https://noemaai.com/ownership))는 iPhone, iPad, Mac(Apple Silicon), Apple Vision Pro용 무료 앱으로, 오픈소스 언어 모델을 완전히 온디바이스에서 실행합니다. [Apple App Store](' +
      APP_STORE_URL +
      ')에서 무료로 다운로드할 수 있으며 구독이나 인앱 구매가 없습니다. 이 리뷰 작성 시점의 현재 버전은 3.9였고, 단 26개의 평가로 4.5/5점을 받았습니다 — 앱이 거의 매일 업데이트되므로 최신 수치는 현재 App Store 페이지에서 확인하십시오. Noema가 단일 형식에 한정된 많은 모바일 로컬 AI 앱과 다른 점은, 모델을 GGUF, MLX, ExecuTorch, Core ML, 그리고 Apple 자체의 Foundation Models라는 다섯 가지 방식으로 불러올 수 있다는 것입니다. 사용자를 단일 런타임에 묶어두지 않습니다. 문서 채팅도 지원하여, PDF와 EPUB를 가져와 색인된 구절에 근거한 질문을 할 수 있습니다. 이는 클라우드 RAG 파이프라인이 아니라 완전히 온디바이스에서 실행되는 검색 방식의 워크플로입니다.',
    metaDescription:
      'Noema 리뷰: iPhone/iPad/Mac용 무료 앱으로 5가지 모델 형식(GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models)과 온디바이스 PDF/EPUB 문서 채팅을 지원합니다. 가격, 개인정보 보호, 대안 앱을 다룹니다.',
    twitterDescription:
      'Noema 리뷰: iPhone, iPad, Mac용 무료 앱으로 GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models라는 다섯 가지 형식으로 로컬 AI 모델을 실행하며, PDF와 EPUB를 위한 온디바이스 문서 채팅도 제공합니다.',
    audience:
      'Private LLM, PocketPal AI, Enclave AI 등의 대안과 비교하며 문서 채팅 기능을 갖춘 무료 멀티 포맷 로컬 AI 앱을 검토하는 iPhone·iPad·Mac 사용자 대상. 지원 형식, 문서 질의응답, 개인정보 보호, 그리고 평가 표본 크기가 작다는 점에 대한 유의사항을 다룹니다.',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Noema review',
    targetKeywords: [
      'noema review',
      'noema app iphone',
      'noema local ai',
      'noema ios app',
      'noema vs private llm',
      'on-device ai document chat',
      'gguf mlx executorch core ml app',
      'best free local llm app for iphone',
    ],
    current_models_mentioned: ['Noema 1.5 2B'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple Silicon Mac(M1 이상)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Noema는 독립 개발자 Alexandru Stamate([NoemaAI LLC](https://noemaai.com/ownership))가 만든 무료 iOS·iPadOS·macOS·visionOS 앱으로, 오픈소스 언어 모델을 GGUF, MLX, ExecuTorch, Core ML, Apple 자체 Foundation Models라는 다섯 가지 형식으로 완전히 온디바이스에서 실행합니다.** [Apple App Store](' +
      APP_STORE_URL +
      ')에서 무료이며 구독이나 인앱 구매가 없고, PDF와 EPUB를 위한 온디바이스 문서 채팅도 추가되어 있습니다. 이 리뷰 시점에는 단 26개의 평가로 4.5/5점을 받았습니다 — 이는 수천 개의 리뷰를 가진 앱과 동일 선상에 놓기에는 충분히 작은 표본입니다. 더 긴 실적을 원하는 독자는 [Private LLM](/ko/power-local-llm/private-llm-review)이나 [Enclave AI](/ko/power-local-llm/enclave-ai-review)도 비교해야 합니다.',
    quickAnswerTop: {
      en: {
        question: 'Is Noema a good free local AI app for iPhone and Mac?',
        answer:
          'Yes, if you want a free, actively maintained app that loads models in multiple formats (GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models) and adds on-device document chat for PDFs and EPUBs. Its 4.5-star rating is based on only 26 ratings, so treat that as an early signal rather than a proven track record — apps like Private LLM and Enclave AI have longer public histories.',
        bullets: [
          'Free on the Apple App Store, no subscription and no in-app purchases listed.',
          'iPhone, iPad, Mac (Apple Silicon), and Apple Vision Pro — requires iOS/iPadOS 18 or later.',
          'Loads models in five formats: GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models.',
          'Document chat: import PDFs and EPUBs for on-device, indexed, grounded Q&A.',
          'Version 3.9 at time of writing, updated within hours of this review — check the App Store for the current version.',
          '4.5/5 rating from 26 ratings as of this review — a small sample size.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Ist Noema eine gute kostenlose lokale KI-App für iPhone und Mac?',
        answer:
          'Ja, wenn Sie eine kostenlose, aktiv gepflegte App möchten, die Modelle in mehreren Formaten lädt (GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models) und einen Dokument-Chat auf dem Gerät für PDFs und EPUBs bietet. Die 4,5-Sterne-Bewertung basiert auf nur 26 Bewertungen — betrachten Sie das eher als frühes Signal denn als belegte Erfolgsbilanz. Apps wie Private LLM und Enclave AI haben eine längere öffentliche Historie.',
        bullets: [
          'Kostenlos im Apple App Store, kein Abonnement und keine In-App-Käufe gelistet.',
          'iPhone, iPad, Mac (Apple Silicon) und Apple Vision Pro — erfordert iOS/iPadOS 18 oder neuer.',
          'Lädt Modelle in fünf Formaten: GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models.',
          'Dokument-Chat: PDFs und EPUBs importieren für indexierte, fundierte Fragen und Antworten auf dem Gerät.',
          'Version 3.9 zum Zeitpunkt der Erstellung, wenige Stunden vor diesem Test aktualisiert — aktuelle Version im App Store prüfen.',
          '4,5/5 Bewertung aus 26 Bewertungen zum Zeitpunkt dieses Tests — eine kleine Stichprobe.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'Noema est-elle une bonne application d\'IA locale gratuite pour iPhone et Mac ?',
        answer:
          'Oui, si vous voulez une application gratuite et activement maintenue qui charge des modèles dans plusieurs formats (GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models) et propose un chat de documents sur l\'appareil pour les PDF et EPUB. Sa note de 4,5 étoiles repose sur seulement 26 avis, à considérer comme un signal précoce plutôt qu\'un historique éprouvé — des applications comme Private LLM et Enclave AI ont un historique public plus long.',
        bullets: [
          'Gratuite sur l\'App Store d\'Apple, sans abonnement ni achat intégré répertorié.',
          'iPhone, iPad, Mac (Apple Silicon) et Apple Vision Pro — nécessite iOS/iPadOS 18 ou version ultérieure.',
          'Charge les modèles dans cinq formats : GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models.',
          'Chat de documents : importez des PDF et EPUB pour des questions-réponses indexées et fondées, sur l\'appareil.',
          'Version 3.9 au moment de la rédaction, mise à jour quelques heures avant ce test — vérifiez la version actuelle sur l\'App Store.',
          'Note de 4,5/5 sur seulement 26 avis au moment de ce test — un échantillon restreint.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Es Noema una buena app de IA local gratuita para iPhone y Mac?',
        answer:
          'Sí, si buscas una app gratuita y activamente mantenida que carga modelos en varios formatos (GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models) y añade chat de documentos en el dispositivo para PDF y EPUB. Su calificación de 4.5 estrellas se basa en solo 26 valoraciones, así que trátala como una señal temprana y no como un historial comprobado — apps como Private LLM y Enclave AI tienen un historial público más largo.',
        bullets: [
          'Gratis en la App Store de Apple, sin suscripción ni compras dentro de la app.',
          'iPhone, iPad, Mac (Apple Silicon) y Apple Vision Pro — requiere iOS/iPadOS 18 o posterior.',
          'Carga modelos en cinco formatos: GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models.',
          'Chat de documentos: importa PDF y EPUB para preguntas y respuestas indexadas y fundamentadas en el dispositivo.',
          'Versión 3.9 al momento de esta reseña, actualizada horas antes de su publicación — verifica la versión actual en la App Store.',
          'Calificación de 4.5/5 con solo 26 valoraciones al momento de esta reseña — una muestra pequeña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O Noema é um bom aplicativo gratuito de IA local para iPhone e Mac?',
        answer:
          'Sim, se você quer um aplicativo gratuito e mantido ativamente que carrega modelos em vários formatos (GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models) e oferece chat de documentos no dispositivo para PDFs e EPUBs. A avaliação de 4,5 estrelas se baseia em apenas 26 avaliações, então trate isso como um sinal inicial, não um histórico comprovado — apps como Private LLM e Enclave AI têm um histórico público mais longo.',
        bullets: [
          'Gratuito na App Store da Apple, sem assinatura e sem compras no aplicativo listadas.',
          'iPhone, iPad, Mac (Apple Silicon) e Apple Vision Pro — exige iOS/iPadOS 18 ou posterior.',
          'Carrega modelos em cinco formatos: GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models.',
          'Chat de documentos: importe PDFs e EPUBs para perguntas e respostas indexadas e fundamentadas no dispositivo.',
          'Versão 3.9 no momento desta análise, atualizada poucas horas antes da publicação — confira a versão atual na App Store.',
          'Avaliação de 4,5/5 com apenas 26 avaliações no momento desta análise — uma amostra pequena.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'Noemaは iPhone と Mac 向けの優れた無料ローカルAIアプリですか?',
        answer:
          '複数の形式(GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models)でモデルを読み込める、無料で積極的にメンテナンスされているアプリを求めるなら、はいです。PDFやEPUBのオンデバイス文書チャットも追加されています。4.5の評価はわずか26件の評価に基づくもので、実績というより初期のシグナルとして捉えてください — Private LLMやEnclave AIはより長い公開履歴を持っています。',
        bullets: [
          'Apple App Storeで無料。サブスクリプションやアプリ内課金は掲載されていません。',
          'iPhone、iPad、Mac(Apple Silicon)、Apple Vision Pro対応 — iOS/iPadOS 18以降が必要です。',
          '5つの形式でモデルを読み込み: GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models。',
          '文書チャット: PDFやEPUBをインポートし、オンデバイスでインデックス化された根拠のある質問応答が可能。',
          '本レビュー執筆時点でバージョン3.9。公開の数時間前に更新済み — 現在のバージョンはApp Storeで確認してください。',
          '本レビュー時点で評価4.5/5、評価数はわずか26件 — サンプルサイズは小さいです。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'Noema 是适合 iPhone 和 Mac 的优质免费本地 AI 应用吗?',
        answer:
          '如果你想要一款免费、持续维护、支持多种格式加载模型(GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models)并提供设备端文档聊天功能(支持 PDF 和 EPUB)的应用,答案是肯定的。它的 4.5 星评分仅基于 26 条评价,应视为早期信号,而非成熟的长期记录 — Private LLM 和 Enclave AI 拥有更长的公开历史。',
        bullets: [
          '在 Apple App Store 免费提供,未列出订阅或应用内购买。',
          '支持 iPhone、iPad、Mac(Apple Silicon)和 Apple Vision Pro — 需要 iOS/iPadOS 18 或更高版本。',
          '支持五种模型格式加载: GGUF、MLX、ExecuTorch、Core ML 和 Apple Foundation Models。',
          '文档聊天: 导入 PDF 和 EPUB,进行设备端索引、有据可查的问答。',
          '撰写本评测时的版本为 3.9,发布前几小时刚更新 — 请在 App Store 确认当前版本。',
          '截至本评测,评分为 4.5/5,仅基于 26 条评价 — 样本量较小。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل Noema تطبيق ذكاء اصطناعي محلي مجاني جيد لأجهزة iPhone و Mac؟',
        answer:
          'نعم، إذا كنت تريد تطبيقًا مجانيًا يُصان بنشاط ويُحمّل النماذج بعدة صيغ (GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation) ويضيف محادثة مستندات على الجهاز لملفات PDF وEPUB. يستند تقييمه البالغ 4.5 نجوم إلى 26 تقييمًا فقط، لذا تعامل معه كإشارة مبكرة وليس سجلًا موثوقًا طويل الأمد — تطبيقات مثل Private LLM وEnclave AI لها تاريخ عام أطول.',
        bullets: [
          'مجاني على متجر تطبيقات Apple؛ لا يوجد اشتراك ولا مشتريات داخل التطبيق مذكورة.',
          'يعمل على iPhone وiPad وMac (Apple Silicon) وApple Vision Pro — يتطلب iOS/iPadOS 18 أو أحدث.',
          'يُحمّل النماذج بخمس صيغ: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation.',
          'محادثة المستندات: استيراد ملفات PDF وEPUB للحصول على إجابات مفهرسة ومبنية على الجهاز.',
          'الإصدار 3.9 وقت كتابة هذه المراجعة، وقد تم تحديثه قبل ساعات من نشرها — تحقق من الإصدار الحالي على متجر التطبيقات.',
          'تقييم 4.5 من 5 بناءً على 26 تقييمًا فقط وقت هذه المراجعة — عينة صغيرة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'Noema는 iPhone과 Mac에 적합한 우수한 무료 로컬 AI 앱입니까?',
        answer:
          '여러 형식(GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models)으로 모델을 불러올 수 있고 PDF와 EPUB를 위한 온디바이스 문서 채팅 기능을 갖춘, 무료이면서 활발히 유지 관리되는 앱을 원한다면 그렇습니다. 4.5점 평점은 단 26개의 평가에 근거한 것이므로, 검증된 실적이 아니라 초기 신호로 받아들여야 합니다 — Private LLM과 Enclave AI는 더 긴 공개 이력을 가지고 있습니다.',
        bullets: [
          'Apple App Store에서 무료로 제공되며, 구독이나 인앱 구매가 게재되어 있지 않습니다.',
          'iPhone, iPad, Mac(Apple Silicon), Apple Vision Pro를 지원하며 iOS/iPadOS 18 이상이 필요합니다.',
          '다섯 가지 형식으로 모델을 불러옵니다: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
          '문서 채팅: PDF와 EPUB를 가져와 온디바이스에서 색인화되고 근거에 기반한 질의응답이 가능합니다.',
          '이 리뷰 작성 시점 버전은 3.9이며, 발행 몇 시간 전에 업데이트되었습니다 — 현재 버전은 App Store에서 확인하십시오.',
          '이 리뷰 시점 기준 26개의 평가만으로 4.5/5점을 받았습니다 — 표본 크기가 작습니다.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Noema란 무엇인가', anchor: 'what-is-noema' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '지원되는 모델 형식', anchor: 'supported-model-formats' },
      { label: '문서 채팅: PDF·EPUB 질의응답', anchor: 'document-chat' },
      { label: '플랫폼 및 요구 사항', anchor: 'platforms' },
      { label: '개인정보 보호: Noema가 수집하는 것과 하지 않는 것', anchor: 'privacy' },
      { label: '장단점: 장점과 한계', anchor: 'tradeoffs' },
      { label: 'Noema와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Noema를 사용해야 하는 사람', anchor: 'who-should-use' },
      { label: 'Noema를 사용하지 말아야 하는 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 요약',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Noema는 독립 개발자 Alexandru Stamate(NoemaAI LLC)가 만든 iPhone·iPad·Mac·Vision Pro용 무료 앱으로, GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models라는 다섯 가지 형식으로 로컬 AI 모델을 실행하며, PDF와 EPUB를 위한 온디바이스 문서 채팅도 추가되어 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '대부분의 모바일 로컬 AI 앱은 한 가지 모델 파일 유형만 실행할 수 있습니다. Noema는 여러 다른 유형을 불러올 수 있는 데다 Apple 자체의 내장 AI 모델까지 사용할 수 있어, 선호하는 모델이 특정 형식으로만 제공되더라도 막히지 않습니다. 또한 제공한 PDF나 EPUB를 읽고 해당 문서에 근거한 질문에 답할 수 있으며, 이 모든 과정이 인터넷 연결 없이 이루어집니다.',
          },
        ],
        items: [
          '가격: [Apple App Store](' + APP_STORE_URL + ')에서 무료. 이 리뷰 작성 시점에는 구독이나 인앱 구매가 게재되어 있지 않습니다.',
          '플랫폼: iPhone, iPad, Mac(Apple Silicon), Apple Vision Pro — 공식 Android, Windows, Linux 앱은 없습니다.',
          '개발자: [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) / [NoemaAI LLC](https://noemaai.com/ownership).',
          '모델 형식: GGUF, MLX, ExecuTorch, Core ML, 그리고 Apple의 온디바이스 Foundation Models — 하나의 앱에서 5가지 형식을 지원합니다.',
          '문서 채팅: PDF와 EPUB를 가져옵니다. 앱이 구절을 온디바이스에서 색인화하여 근거에 기반한 질의응답이 가능합니다.',
          '개인정보 보호: 개발자는 앱이 데이터를 수집하지 않는다고 명시하며, 이용에 계정이 필요하지 않습니다.',
          '평가: 이 리뷰 시점 기준 단 26개의 평가로 4.5/5점 — 작은 표본이며 긴 실적은 아닙니다.',
          '작성 시점의 버전은 3.9이며, 이 리뷰 발행 몇 시간 전에 업데이트가 있었습니다 — 특정 기능에 의존하기 전에 App Store에서 현재 버전을 확인하십시오.',
        ],
      },
      whatIsNoema: {
        id: 'what-is-noema',
        title: 'Noema란 무엇인가',
        content: [
          '**Noema는 iPhone, iPad, Mac, Vision Pro 헤드셋에서 오픈소스 언어 모델을 직접 다운로드하여 실행하는 네이티브 Apple 앱으로, 로컬 채팅에는 서버 측 구성 요소가 전혀 필요하지 않습니다.** 모델을 다운로드하면 앱은 인터넷 연결 없이 응답을 생성할 수 있습니다.',
          '이 앱은 [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674)가 개발했으며, 그의 회사 [NoemaAI LLC](https://noemaai.com/ownership)는 사이트 자체의 소유권 페이지에 따르면 이 앱과 [noemaai.com](' +
          SITE_URL +
          ') 사이트를 모두 소유·운영합니다. 이 앱은 App Store ID 6751169935로 등재되어 있습니다. 이 리뷰는 "로컬 채팅에 클라우드가 전혀 필요 없음", 계정 불필요, 데이터 미수집이라는 개발자 자체의 주장을 마케팅 문구 그대로 받아들이는 대신 App Store 개인정보 보호 라벨 및 앱의 공개 설명과 대조하여 평가합니다.',
          '이 앱은 이례적으로 자주 업데이트됩니다. 본 리뷰에서 검토한 버전 3.9는 리뷰 작성 불과 몇 시간 전에 출시된 것이었고, 해당 버전의 "새로운 기능" 노트에는 MLX 모델 안정성, 문서 색인화, 비전 모델, Core ML 호환성에 대한 수정 사항이 기술되어 있었습니다 — 이는 정체되거나 방치된 프로젝트가 아니라 활발하고 지속적인 유지 관리의 증거입니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**Noema를 실행하는 데는 몇 분이면 충분하며 계정 생성도 필요하지 않습니다.**',
        ],
        numberedItems: [
          {
            title: '앱 다운로드',
            whyItMatters: '[Apple App Store에서 Noema](' + APP_STORE_URL + ')를 무료로 받으십시오. 신경 써야 할 체험판 등급도 없고 나중에 해지해야 할 구독도 없습니다 — 첫 실행부터 전체 앱이 무료입니다.',
          },
          {
            title: '모델 형식과 소스 선택',
            whyItMatters: '앱 내에서 Hugging Face의 GGUF 모델을 직접 탐색하고 다운로드하거나, MLX, ExecuTorch, Core ML 모델을 사용하거나, 아무것도 다운로드하고 싶지 않다면 Apple 내장 Foundation Model을 사용하십시오.',
          },
          {
            title: '문서 채팅용 문서 가져오기',
            whyItMatters: '파일 앱이나 iCloud Drive에서 PDF나 EPUB를 추가하십시오. Noema는 문서의 구절을 온디바이스에서 색인화하여, 모델의 일반 지식에만 의존하는 대화가 아니라 해당 내용에 근거한 질문을 할 수 있게 합니다.',
          },
          {
            title: '채팅, 요약, 또는 학습 카드 생성',
            whyItMatters: '모델을 불러오고 선택적으로 문서까지 불러온 후에는, 완전히 오프라인 상태에서 채팅, 문서 요약, 메모, 학습 카드 생성에 앱을 활용하십시오.',
          },
          {
            title: '선택 사항: 웹 검색 또는 원격 제공자 활성화',
            whyItMatters: '기본적으로 Noema는 로컬에서만 작동합니다. 개발자 자체 사이트는 외부 HTTP·HTTPS 트래픽을 차단하는 "오프그리드 모드"를 설명하고 있습니다. 웹 검색이나 원격 모델 제공자 연결은 기본 동작이 아니라 명시적이고 별도의 옵트인 사항입니다.',
          },
        ],
        note: '정확한 다운로드 용량, 현재 지원되는 모델 목록, 최소 기기 요구 사항은 App Store 업데이트마다 달라질 수 있습니다 — 데이터 요금제가 제한된 상태에서 대용량 다운로드를 하기 전에 앱 내 또는 [noemaai.com](' + SITE_URL + ')에서 현재 세부 사항을 확인하십시오.',
      },
      supportedModelFormats: {
        id: 'supported-model-formats',
        title: '지원되는 모델 형식',
        itemHeadings: true,
        content: [
          '**Noema가 내세우는 차별점은 단일 형식이 아니라 다섯 가지 다른 형식으로 모델을 불러올 수 있다는 점입니다.** 대부분의 모바일 로컬 AI 앱은 단일 런타임에 국한되며, 이 리뷰 그룹에서는 llama.cpp와 GGUF가 가장 흔한 선택입니다. 이와 달리 Noema는 앱 자체의 App Store 설명과 [noemaai.com](' + SITE_URL + ')에 따르면 GGUF, MLX, ExecuTorch, Core ML, 그리고 Apple 자체의 온디바이스 Foundation Models를 나란히 지원합니다.',
        ],
        columns: ['형식', '설명', '중요한 이유'],
        rows: [
          {
            '형식': 'GGUF',
            '설명': '대부분의 오픈소스 로컬 AI 앱과 Hugging Face 상 커뮤니티 양자화 모델의 대다수가 사용하는, llama.cpp의 양자화 모델 형식입니다.',
            '중요한 이유': '형식별 변환을 기다릴 필요 없이, 바로 사용할 수 있는 가장 큰 커뮤니티 모델 파일 풀에 접근할 수 있습니다.',
          },
          {
            '형식': 'MLX',
            '설명': 'Apple Silicon의 통합 메모리와 Metal GPU 가속을 직접 활용하도록 설계된, Apple 자체의 머신러닝 배열 프레임워크입니다.',
            '중요한 이유': 'Apple Silicon에서는 CPU에 의존하는 범용 형식보다 눈에 띄게 빠르게 작동할 수 있지만, Apple 하드웨어에서만 잘 작동합니다.',
          },
          {
            '형식': 'ExecuTorch',
            '설명': 'PyTorch 모델을 내보내 모바일·엣지 하드웨어에서 효율적으로 실행하도록 설계된, PyTorch의 온디바이스 추론 런타임입니다.',
            '중요한 이유': 'Noema가 불러올 수 있는 모델 범위를 GGUF/MLX 생태계 너머로, PyTorch에서 직접 내보낸 모델까지 넓혀 줍니다.',
          },
          {
            '형식': 'Core ML',
            '설명': 'Apple 기기의 CPU, GPU, Neural Engine에서 실행되도록 최적화된 Apple의 네이티브 머신러닝 형식입니다.',
            '중요한 이유': '범용 형식뿐 아니라 Apple의 Neural Engine에 특화되어 최적화된 모델을 앱이 불러올 수 있게 해 줍니다.',
          },
          {
            '형식': 'Apple Foundation Models',
            '설명': '지원 하드웨어에서 iOS 18부터 시스템 전반에 걸쳐 사용할 수 있는, Apple 자체의 내장 온디바이스 대규모 언어 모델입니다.',
            '중요한 이유': '모델을 전혀 다운로드하지 않고도 기기에 이미 있는 모델을 사용해 문서 채팅이나 일반 채팅을 즉시 시도해 볼 수 있습니다.',
          },
        ],
        note: '형식 지원 여부와 정확한 모델 목록은 App Store 업데이트마다 달라질 수 있습니다. 특정 모델에 의존하기 전에 앱 내에서 현재의 형식 호환성과 하드웨어 요구 사항을 확인하십시오.',
      },
      documentChat: {
        id: 'document-chat',
        title: '문서 채팅: PDF·EPUB 질의응답',
        content: [
          '**Noema는 교과서를 포함한 PDF와 EPUB를 가져와 그 구절을 온디바이스에서 색인화함으로써, 불러온 모델이 해당 특정 문서에 근거한 질문에 답할 수 있게 합니다.** 개발자 자체 사이트는 이를 문서를 "더 철저히" 읽고, "기기에 머무는 검색을 통해 사용자 자신의 데이터세트에" 근거하여 답변을 제공하는 것이라고 설명합니다 — 이는 원리상 서버 측 검색 증강 생성(RAG)과 유사하지만, 클라우드 벡터 데이터베이스가 아니라 로컬에서 실행되는 검색 방식의 워크플로입니다.',
          '질의응답 외에도 이 앱은 가져온 문서로부터 요약, 메모, 학습 카드를 생성할 수 있으며, 도표나 스캔된 페이지가 포함된 문서나 이미지를 위한 비전 지원 모델도 지원합니다.',
          '본 리뷰는 Noema의 문서 색인화 검색 정확도를 전용 데스크톱 RAG 도구와 독립적으로 벤치마크하지 않았습니다 — 위 설명은 개발자가 직접 명시한 기능을 반영한 것이며, 독립적인 정확도 테스트가 아닙니다.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: '플랫폼 및 요구 사항',
        itemHeadings: true,
        columns: ['플랫폼', '예상되는 사항', '중요 참고사항'],
        rows: [
          {
            '플랫폼': 'iPhone / iPad',
            '예상되는 사항': 'App Store 페이지에 따르면 iOS 또는 iPadOS 18 이상이 필요합니다. 전체 모델 형식 라인업과 문서 채팅을 실행할 수 있습니다.',
            '중요 참고사항': '더 큰 모델과 더 큰 가져온 문서는 더 많은 여유 저장 공간과 RAM이 필요합니다. 오래된 기기에서는 더 작은 양자화 모델이 더 안전한 시작점입니다.',
          },
          {
            '플랫폼': 'Mac',
            '예상되는 사항': 'App Store 페이지에 따르면 Apple Silicon Mac(M1 이상)용 네이티브 앱입니다.',
            '중요 참고사항': 'Apple Silicon의 통합 메모리는 일반적으로 동급의 iPhone이나 iPad보다 더 큰 모델을 허용합니다.',
          },
          {
            '플랫폼': 'Apple Vision Pro',
            '예상되는 사항': 'App Store에 지원 기기로 등재되어 있습니다.',
            '중요 참고사항': '본 리뷰는 Vision Pro 경험을 독립적으로 테스트하지 않았습니다. 실제로 검증된 기능이 아니라 App Store에 등재된 호환성으로 취급하십시오.',
          },
          {
            '플랫폼': 'Android, Windows, Linux',
            '예상되는 사항': '개발자 자체 사이트에 따르면 Google Play, Microsoft Store, 어떤 Linux 패키지 저장소에도 공식 앱이 없습니다.',
            '중요 참고사항': '이러한 플랫폼의 독자는 대신 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)(Android/iOS)나 다른 크로스 플랫폼 옵션을 고려해야 합니다.',
          },
        ],
        note: '리뷰 시점 앱 용량은 약 368 MB였으며, App Store 페이지에 따르면 인터페이스는 영어 외에 10개 언어(아랍어, 프랑스어, 독일어, 힌디어, 일본어, 한국어, 루마니아어, 중국어 간체, 스페인어, 터키어)로 제공됩니다. App Store에는 13세 이상 연령 등급이 표시되어 있습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호: Noema가 수집하는 것과 하지 않는 것',
        content: [
          '**Noema의 App Store 개인정보 보호 라벨은 개발자가 앱에서 어떠한 데이터도 수집하지 않는다고 명시하며**, 앱 이용에 계정, 로그인, 가입이 전혀 필요하지 않습니다.',
          '개발자 자체 사이트는 외부 HTTP·HTTPS 트래픽을 차단하는 "오프그리드 모드"를 설명하고 있으며, 로컬 채팅에는 클라우드 연결이 전혀 필요하지 않다고 밝힙니다. 웹 검색과 원격 모델 제공자 연결 같은 선택적 기능은 기본값이 아니라 명시적인 옵트인으로 설명됩니다.',
        ],
        items: [
          '**계정 불필요.** 프로필을 만들거나 로그인하지 않고도 앱을 다운로드하여 사용할 수 있습니다.',
          '**App Store 라벨에 따르면 데이터 수집 없음.** 이 페이지에 대한 Apple의 개인정보 보호 영양 라벨은 앱에서 수집되는 데이터가 없음을 보여줍니다.',
          '**오프그리드 모드.** 개발자 자체 사이트는 외부 HTTP·HTTPS 트래픽을 차단하는 모드를 설명하며, 이는 모든 외부 발신 네트워크 호출에 대한 확실한 보장을 원하는 독자를 위한 것입니다.',
          '**선택적 네트워크 기능은 옵트인입니다.** 웹 검색과 원격 제공자 연결은 사용자가 명시적으로 활성화해야 하는 기능으로 설명되며, 기본 상태가 아닙니다.',
          '**로컬 API와 Noema Relay.** 개발자 사이트는 Noema에서 실행 중인 모델에 다른 앱을 연결하기 위한 비공개 로컬 네트워크 API와, 기기 간 모델 접근을 위한 "Noema Relay" 기능을 설명합니다 — 본 리뷰는 이를 독립적으로 검증된 네트워크 보안 감사가 아니라 개발자가 설명하는 기능으로 취급합니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 유의사항'],
        rows: [
          {
            '장점': '무료, 구독 없음',
            '실제 사용에서의 의미': '문서 채팅을 포함한 모든 기능이 첫 실행부터 무료로 제공됩니다.',
            '한계 / 유의사항': '단독 개발자의 무료 앱은 더 크고 오래 자리 잡은 팀의 유료 앱보다 조직적 뒷받침이 적습니다.',
          },
          {
            '장점': '5가지 지원 모델 형식',
            '실제 사용에서의 의미': 'GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models는 단일 형식 경쟁 앱보다 더 넓은 모델 생태계를 아우릅니다.',
            '한계 / 유의사항': '형식이 많을수록 예외 상황도 늘어날 수 있습니다. 앱 자체의 7월~9월 릴리스 노트는 MLX와 Core ML 호환성에 대한 지속적인 수정을 기술하고 있습니다.',
          },
          {
            '장점': '온디바이스 문서 채팅',
            '실제 사용에서의 의미': 'PDF나 EPUB를 가져와 근거에 기반한 질문을 하고, 요약이나 학습 카드를 생성할 수 있으며, 문서를 어디에도 업로드하지 않습니다.',
            '한계 / 유의사항': '길거나 복잡한 문서에서의 검색 정확도는 PromptQuorum이 전용 데스크톱 RAG 도구와 독립적으로 벤치마크한 바 없습니다.',
          },
          {
            '장점': '계정 불필요, 데이터 수집 없음',
            '실제 사용에서의 의미': '가입할 필요 없이 즉시 앱을 사용할 수 있습니다. App Store 개인정보 보호 라벨은 데이터 수집이 없음을 보여줍니다.',
            '한계 / 유의사항': '본 리뷰는 앱의 소스 코드를 독립적으로 감사하지 않았습니다. App Store 개인정보 보호 라벨과 개발자 자체의 주장에 의존합니다.',
          },
          {
            '장점': '매우 활발한 업데이트 빈도',
            '실제 사용에서의 의미': '잦은 릴리스는 방치된 것이 아니라 활발히 유지 관리되는 앱임을 시사합니다.',
            '한계 / 유의사항': '릴리스 빈도가 높다는 것은 더 천천히 발전하는 앱보다, 본 리뷰의 특정 버전 번호, 기능 세부 사항, 버그 상태가 더 빨리 낡아질 수 있다는 의미이기도 합니다 — 앱 내에서 현재 동작을 확인하십시오.',
          },
          {
            '장점': '4.5/5점 평가',
            '실제 사용에서의 의미': '평균 평점이 높습니다.',
            '한계 / 유의사항': '이 평균은 본 리뷰 시점 기준 단 26개의 평가에 근거한 것으로, 크고 확고한 평가 기반을 갖춘 앱과 동일 선상에 두어서는 안 되는 작은 표본입니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Noema와 대안 비교',
        columns: ['앱', '플랫폼', '가격', '모델 유연성', '핵심 차이점'],
        rows: [
          {
            '앱': 'Noema',
            '플랫폼': 'iPhone/iPad/Mac/Vision Pro(Apple 전용)',
            '가격': '무료',
            '모델 유연성': '5가지 형식: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models',
            '핵심 차이점': '멀티 포맷 로딩과 온디바이스 문서 채팅; 아직 평가 표본은 적음',
          },
          {
            '앱': '[Private LLM](/ko/power-local-llm/private-llm-review)',
            '플랫폼': 'iPhone/iPad/Mac(Apple 전용)',
            '가격': '4.99달러 일회성 구매',
            '모델 유연성': '140개 이상의 엄선된 모델; OmniQuant/GPTQ 양자화',
            '핵심 차이점': '유료, 클로즈드소스, 3년간의 공개 릴리스 실적을 갖춘 엄선된 라이브러리',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iPhone/iPad, Android 일부 지원',
            '가격': '무료, 오픈소스',
            '모델 유연성': 'Hugging Face 등에서 사용자가 확보한 임의의 GGUF 파일',
            '핵심 차이점': '무료이자 오픈소스; GGUF만 지원하며 내장 문서 채팅 없음',
          },
          {
            '앱': '[Enclave AI](/ko/power-local-llm/enclave-ai-review)',
            '플랫폼': '현재 페이지 참조',
            '가격': '현재 페이지 참조',
            '모델 유연성': '현재 모델 지원 현황은 전체 리뷰 참조',
            '핵심 차이점': '자세한 비교는 Enclave AI 전체 리뷰 참조',
          },
          {
            '앱': '[Locally AI](/ko/power-local-llm/locally-ai-review)',
            '플랫폼': 'iPhone/iPad/Mac',
            '가격': '무료',
            '모델 유연성': 'Apple MLX만을 기반으로 구축; Apple의 온디바이스 Foundation Model 접근 가능',
            '핵심 차이점': 'Noema의 5가지 형식 지원과 달리 MLX만 지원하는 무료 대안',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능 세부 사항은 자주 변경됩니다 — 결정하기 전에 각 앱의 자체 페이지에서 현재 세부 사항을 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Noema를 사용해야 하는 사람',
        items: [
          '**형식 유연성을 원하는 Apple 사용자.** 이미 서로 다른 형식의 모델 파일을 가지고 있거나, 앱을 바꾸지 않고 GGUF, MLX, ExecuTorch, Core ML 모델을 시도해 보고 싶은 독자는 이 네 가지에 더해 Apple 내장 Foundation Model까지 한곳에서 얻을 수 있습니다.',
          '**온디바이스 문서 질의응답을 원하는 독자.** PDF나 EPUB를 가져와 로컬에서 근거에 기반한 질문을 하는 것은 모든 모바일 로컬 AI 앱이 제공하지는 않는 독자적인 기능입니다.',
          '**예산을 의식하는 사용자.** 이 앱은 무료이며 구독이 없어, 사전에 돈을 쓰지 않고 로컬 AI를 시도해 보고 싶은 독자에게 중요합니다.',
          '**신생 평가 이력을 편안하게 받아들이는 얼리어답터.** 4.5점 평균이 단 26개의 평가에 근거한다는 점을 개의치 않으며, 더 긴 공개 실적보다 활발하고 자주 업데이트되는 앱을 중시하는 독자입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Noema를 사용하지 말아야 하는 사람',
        items: [
          '**Android, Windows, Linux 사용자.** Noema는 이들 플랫폼 어디에도 공식 앱이 없습니다 — 대신 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)(Android 일부 지원)나 다른 크로스 플랫폼 옵션을 선택하십시오.',
          '**앱을 신뢰하기 전에 길고 확고한 평가 이력을 원하는 독자.** 이 리뷰 시점 기준 단 26개의 평가만 있으므로, 사회적 증거를 우선시하는 독자는 여러 해에 걸친 공개 릴리스 실적을 가진 [Private LLM](/ko/power-local-llm/private-llm-review)도 함께 고려해야 합니다.',
          '**가능한 한 가장 큰 엄선된 모델 라이브러리를 원하는 독자.** Noema의 형식 유연성은 넓지만, [Private LLM](/ko/power-local-llm/private-llm-review)처럼 140개 이상의 엄선된 라이브러리를 제공하지는 않습니다.',
          '**중앙에서 관리되는 배포를 원하는 팀.** Noema는 관리 콘솔이나 팀 청구 기능이 없는 단일 사용자, 단일 기기용 소비자 앱입니다 — 조직은 대신 자체 호스팅되는 서버 측 로컬 LLM 인프라를 검토해야 합니다.',
          '**문서 검색 정확도에 대한 독립적인 제3자 벤치마크가 필요한 독자.** 본 리뷰는 전용 RAG 도구에 대한 독립적인 정확도 벤치마크가 아니라, 문서 채팅 기능에 대한 개발자 자체의 설명에 의존합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Noema의 가격은 얼마입니까?',
            a: 'Noema는 [Apple App Store에서 무료](' + APP_STORE_URL + ')이며, 이 리뷰를 위해 2026-09-12에 확인되었습니다. 현재 App Store 페이지에는 구독이나 인앱 구매가 게재되어 있지 않습니다. App Store의 제공 여부는 시간이 지나면서 변경될 수 있습니다 — 다운로드 전에 현재 가격을 확인하십시오.',
          },
          {
            q: 'Noema는 어떤 모델 형식을 지원합니까?',
            a: '앱 자체의 App Store 설명과 [noemaai.com](' + SITE_URL + ')에 따르면, Noema는 GGUF, MLX, ExecuTorch, Core ML, 그리고 Apple 자체의 온디바이스 Foundation Models라는 다섯 가지 형식으로 모델을 불러옵니다. 이러한 멀티 포맷 지원은 보통 GGUF나 MLX 중 하나에만 국한되는 대부분의 단일 형식 경쟁 앱보다 더 폭넓습니다.',
          },
          {
            q: 'Noema는 Android나 Windows에서 사용할 수 있습니까?',
            a: 'Google Play, Microsoft Store, 어떤 Linux 패키지 저장소에도 공식 버전은 존재하지 않습니다. Noema는 iPhone, iPad, Mac, Apple Vision Pro를 위해 특별히 제작되었습니다.',
          },
          {
            q: 'Noema는 누가 개발합니까?',
            a: 'Noema는 [Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674)가 개발합니다. [noemaai.com](' + SITE_URL + ') 사이트와 앱은 사이트 자체의 [소유권 페이지](https://noemaai.com/ownership)에 따르면 NoemaAI LLC가 소유하고 운영합니다.',
          },
          {
            q: 'Noema의 문서 채팅이란 무엇입니까?',
            a: '문서 채팅을 사용하면 교과서를 포함한 PDF나 EPUB를 가져와 그 특정 문서에 근거한 질문을 할 수 있습니다. Noema는 문서의 구절을 온디바이스에서 색인화하는데, 이는 원리상 서버 측 RAG와 유사하지만 로컬에서 실행되는 검색 방식의 워크플로입니다. 이 앱은 또한 가져온 문서로부터 요약, 메모, 학습 카드를 생성할 수 있습니다.',
          },
          {
            q: 'Noema는 완전히 오프라인으로 작동합니까?',
            a: '네, 모델과 문서(있는 경우)가 불러와진 후에는 로컬 채팅과 문서 채팅 모두 오프라인으로 작동합니다. 개발자 자체 사이트는 외부 HTTP·HTTPS 트래픽을 차단하는 "오프그리드 모드"를 설명합니다. 웹 검색이나 원격 모델 제공자 같은 선택적 기능은 기본 동작이 아니라 명시적이고 별도의 옵트인 사항입니다.',
          },
          {
            q: 'Noema는 개인 데이터를 수집합니까?',
            a: '이 페이지에 대한 Apple의 App Store 개인정보 보호 영양 라벨은 개발자가 앱에서 어떠한 데이터도 수집하지 않는다고 명시하며, 계정이나 로그인이 필요하지 않습니다. 본 리뷰는 독립적인 소스 코드 감사가 아니라 App Store 개인정보 보호 라벨과 개발자 자체의 주장에 의존합니다.',
          },
          {
            q: 'Noema의 4.5점 평가는 얼마나 신뢰할 수 있습니까?',
            a: '4.5/5점 평균은 본 리뷰 시점 기준 단 26개의 평가에 근거한 것으로, 수백 또는 수천 개의 리뷰를 가진 앱과 비교하면 작은 표본입니다. 이를 길고 검증된 실적의 증거가 아니라 초기의 긍정적 신호로 받아들이고, 의존하기 전에 App Store에서 현재 평가 수를 다시 확인하십시오.',
          },
          {
            q: 'Noema는 Private LLM과 비교하면 어떻습니까?',
            a: 'Noema는 무료이며 5가지 모델 형식(GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models)과 온디바이스 문서 채팅을 지원하지만, 본 리뷰 시점 기준 평가는 26개뿐입니다. [Private LLM](/ko/power-local-llm/private-llm-review)은 4.99달러 일회성 구매로, 140개 이상의 엄선된 모델 라이브러리를 제공하며 3년간의 공개 릴리스 실적을 갖추고 있습니다. 형식 유연성과 무료 문서 채팅을 원한다면 Noema를, 더 확고하고 엄선된 경험을 원한다면 Private LLM을 선택하십시오.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Noema는 모바일 로컬 AI 앱 그룹에서 구체적이고 검증 가능한 한 가지 이유로 두드러집니다. 대부분의 경쟁 앱이 하나 또는 두 가지 형식에만 국한되는 반면, Noema는 GGUF, MLX, ExecuTorch, Core ML, 그리고 Apple 자체의 Foundation Models라는 다섯 가지 다른 형식으로 모델을 불러옵니다. 여기에 PDF와 EPUB를 위한 온디바이스 문서 채팅을 결합하면서도 모두 무료이고 구독이 없습니다. 이 리뷰 발행 몇 시간 전에 출시된 버전으로 입증되는 매우 잦은 업데이트 빈도는 방치된 부업 프로젝트가 아니라 활발한 유지 관리를 가리킵니다. 정직하게 말해야 할 유의점은 평가 대상 제품으로서의 짧은 연혁입니다. 단 26개의 평가에 근거한 4.5점 평균은 긍정적인 초기 신호이지, [Private LLM](/ko/power-local-llm/private-llm-review)이나 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)가 App Store에서 수년을 거친 뒤 보여줄 수 있는 종류의 대규모 표본 실적은 아닙니다. 형식 유연성과 무료 문서 채팅을 원하는 독자는 시도해 볼 만하며, 사회적 증거와 더 긴 공개 실적에 더 큰 비중을 두는 독자는 Private LLM이나 PocketPal AI로 먼저 시작한 뒤, Noema의 평가 수가 늘어나면 다시 검토해야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Noema](' + APP_STORE_URL + ') — 가격, 플랫폼 호환성, 개인정보 보호 라벨, 평가, 버전, 용량.',
          '[Noema 공식 사이트(noemaai.com)](' + SITE_URL + ') — 제품 개요, 지원되는 모델 형식, 문서 채팅 및 개인정보 보호 관련 주장.',
          '[Noema 소유권 페이지](https://noemaai.com/ownership) — 앱과 사이트 뒤에 있는 법인(NoemaAI LLC).',
          '[App Store의 Alexandru Stamate](https://apps.apple.com/ro/developer/alexandru-stamate/id1833786674) — 개발자 계정 페이지.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Private LLM 리뷰](/ko/power-local-llm/private-llm-review) — 더 긴 릴리스 실적을 가진 엄선된 라이브러리의 유료 대안.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 무료이자 오픈소스인 GGUF 전용 대안.',
          '[Enclave AI 리뷰](/ko/power-local-llm/enclave-ai-review) — 비교를 위한 또 다른 온디바이스 AI 앱.',
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — 무료이자 Apple MLX 전용인 대안.',
          '[로컬 LLM 소프트웨어 전체 디렉터리](/ko/power-local-llm/local-llm-software-directory) — 모든 플랫폼에 걸친 로컬 LLM 도구의 더 넓은 디렉터리.',
        ],
      },
    },
  },
}
