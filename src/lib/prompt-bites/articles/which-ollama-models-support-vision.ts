import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'Which Ollama Models Support Vision?',
    seoTitle: 'Ollama Vision Models 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'LLaVA, Gemma 3 multimodal, and Qwen-VL support vision on Ollama. Start: ollama run llava. All accept images via the Ollama API. Updated 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['LLaVA', 'Gemma 3', 'Qwen-VL'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers using vision models with Ollama',
    parentArticle: '/local-llms/multimodal-local-llms',
    siblingBites: ['can-you-run-qwen3-on-ollama', 'ollama-128k-context-models'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Which Ollama models support vision?',
        answer: 'Ollama supports several vision models: LLaVA, Gemma 3 multimodal, and Qwen-VL. Run ollama run llava for the easiest start. All accept images via the Ollama API.',
        bullets: [
          'llava: original vision model, best compatibility',
          'gemma3: Google multimodal model, good quality',
          'qwen-vl: strong for document understanding',
        ],
        updatedDate: '2026-05',
      },
      de: { question: 'Welche Ollama-Modelle unterstützen Vision?', answer: 'Ollama unterstützt mehrere Vision-Modelle: LLaVA, Gemma 3 multimodal und Qwen-VL. Mit ollama run llava starten Sie am einfachsten. Alle nehmen Bilder über die Ollama API entgegen.', bullets: ['llava: Original-Vision-Modell, beste Kompatibilität', 'gemma3: Googles Multimodal-Modell, gute Qualität', 'qwen-vl: stark bei der Dokumentenanalyse'], updatedDate: '2026-05' },
      fr: { question: 'Quels modèles Ollama prennent en charge la vision ?', answer: 'Ollama supporte plusieurs modèles de vision : LLaVA, Gemma 3 multimodal et Qwen-VL. Lancez ollama run llava pour le démarrage le plus simple. Tous acceptent des images via l\'API Ollama.', bullets: ['llava : modèle de vision original, meilleure compatibilité', 'gemma3 : modèle multimodal de Google, bonne qualité', 'qwen-vl : efficace pour la compréhension de documents'], updatedDate: '2026-05' },
      ja: { question: 'Ollamaのビジョン対応モデルは？', answer: 'OllamaはLLaVA、Gemma 3マルチモーダル、Qwen-VLなど複数のビジョンモデルに対応しています。ollama run llavaが最も手軽なスタートです。すべてOllama API経由で画像入力に対応しています。', bullets: ['llava：オリジナルビジョンモデル、互換性最高', 'gemma3：Googleのマルチモーダルモデル、高品質', 'qwen-vl：文書理解に強み'], updatedDate: '2026-05' },
      zh: { question: 'Ollama哪些模型支持视觉功能？', answer: 'Ollama支持多个视觉模型：LLaVA、Gemma 3多模态和Qwen-VL。运行ollama run llava是最简单的入门方式。所有模型均可通过Ollama API接收图像输入。', bullets: ['llava：原始视觉模型，兼容性最佳', 'gemma3：谷歌多模态模型，质量优良', 'qwen-vl：文档理解能力强'], updatedDate: '2026-05' },
      es: { question: '¿Qué modelos de Ollama son compatibles con visión?', answer: 'Ollama admite varios modelos de visión: LLaVA, Gemma 3 multimodal y Qwen-VL. Ejecuta ollama run llava para empezar fácilmente. Todos aceptan imágenes a través de la API de Ollama.', bullets: ['llava: modelo de visión original, mejor compatibilidad', 'gemma3: modelo multimodal de Google, buena calidad', 'qwen-vl: potente para la comprensión de documentos'], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Four Ollama vision models are production-ready: LLaVA, Llama 3.2 Vision, Qwen-VL, and Gemma 3',
          'Vision models need 1–3 GB more VRAM than their text-only equivalents — the image encoder runs alongside the LLM',
          'LLaVA 7B is the safest starting point (~7 GB VRAM, broad client compatibility)',
          'Use Qwen-VL for chart and diagram analysis; use Llama 3.2 Vision 11B for OCR and multi-step reasoning',
        ],
      },
      body1: {
        title: 'The Top Vision Models on Ollama',
        content: [
          '<strong>As of May 2026, Ollama supports four production-ready vision models: LLaVA, Llama 3.2 Vision, Qwen-VL, and Gemma 3.</strong> Each has a distinct strength and VRAM profile.',
          'LLaVA is the safest starting point — it has the broadest client compatibility and works with any image format Ollama accepts. Llama 3.2 Vision 11B is the best choice for OCR and multi-step visual reasoning. Qwen-VL leads on charts, diagrams, and structured documents. Gemma 3\'s vision variant handles 35+ languages — useful when images contain non-English text like signage, foreign-language documents, or charts with localized labels. LLaVA and Qwen-VL are strongest on English text.',
          'All vision models load an image encoder alongside the LLM weights. This encoder adds 1–3 GB of VRAM above what the base text-only model needs — plan for that overhead when checking your VRAM budget.',
        ],
      },
      body2: {
        title: 'VRAM Requirements for Vision',
        content: [
          '<strong>Every vision model needs more VRAM than its text-only equivalent.</strong> A 7B vision model typically requires 7–9 GB VRAM, not the ~6 GB you would budget for a 7B text model.',
          'For chart and document analysis, Qwen-VL 7B and Gemma 3 offer the most VRAM-efficient options with strong diagram understanding. For OCR and complex reasoning on images, Llama 3.2 Vision 11B justifies the extra VRAM. For the full guide on multimodal local models and use-case matching, see the <a href="/local-llms/multimodal-local-llms" class="text-primary hover:underline">multimodal local LLMs guide</a>.',
        ],
        columns: ['Model', 'VRAM at Q4', 'Image Capability'],
        rows: [
          { 'Model': 'LLaVA 7B', 'VRAM at Q4': '~7 GB', 'Image Capability': 'General image Q&A, broad compatibility' },
          { 'Model': 'Llama 3.2 Vision 11B', 'VRAM at Q4': '~10 GB', 'Image Capability': 'OCR, multi-step visual reasoning' },
          { 'Model': 'Qwen-VL 7B', 'VRAM at Q4': '~7 GB', 'Image Capability': 'Charts, diagrams, document analysis' },
          { 'Model': 'Gemma 3 (vision)', 'VRAM at Q4': '~6 GB', 'Image Capability': 'Multilingual image understanding' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Ollama Vision Models',
        faqs: [
          {
            q: 'How do I send an image to Ollama via the API?',
            a: 'POST to the <code>/api/chat</code> endpoint with the image as a base64 string in the <code>images</code> array. Minimum working JSON body: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> See <a href="/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Qwen 3 on Ollama</a> for a multimodal-capable option with strong tool calling support.',
          },
          {
            q: 'Can vision models do OCR (read text from images)?',
            a: 'Yes, but quality varies. Llama 3.2 Vision 11B is the strongest for OCR among Ollama-supported models. LLaVA 7B can read clearly printed text but struggles with handwriting or small fonts.',
          },
          {
            q: 'Which Ollama vision model is best for charts and diagrams?',
            a: 'Qwen-VL 7B. It was fine-tuned on structured visual data including charts, tables, and diagrams, and outperforms LLaVA and Gemma 3 on document understanding benchmarks.',
          },
          {
            q: 'Do vision models support multiple images in one prompt?',
            a: 'Support varies by model. LLaVA and Qwen-VL currently process one image per turn in Ollama. Llama 3.2 Vision supports multi-image inputs depending on the Ollama version and client implementation.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Ollama',
    title: 'Welche Ollama-Modelle unterstützen Vision?',
    seoTitle: 'Ollama Vision-Modelle 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'LLaVA, Gemma 3 multimodal und Qwen-VL unterstützen Vision in Ollama. Start: ollama run llava. Alle akzeptieren Bilder via Ollama API. Stand Mai 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Welche Ollama-Modelle unterstützen Vision?',
        answer: 'Ollama unterstützt mehrere Vision-Modelle: LLaVA, Gemma 3 multimodal und Qwen-VL. Der einfachste Einstieg ist ollama run llava. Alle akzeptieren Bilder über die Ollama API.',
        bullets: [
          'llava: Original-Vision-Modell, beste Kompatibilität',
          'gemma3: Googles multimodales Modell, gute Qualität',
          'qwen-vl: stark bei Dokumentenverständnis',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Vier Ollama-Vision-Modelle sind produktionsreif: LLaVA, Llama 3.2 Vision, Qwen-VL und Gemma 3',
          'Vision-Modelle benötigen 1–3 GB mehr VRAM als ihre Text-only-Äquivalente — der Bild-Encoder läuft neben dem LLM',
          'LLaVA 7B ist der sicherste Einstieg (~7 GB VRAM, breite Client-Kompatibilität)',
          'Nutzen Sie Qwen-VL für Diagramm- und Chart-Analyse; Llama 3.2 Vision 11B für OCR und mehrstufiges Schlussfolgern',
        ],
      },
      body1: {
        title: 'Die wichtigsten Vision-Modelle auf Ollama',
        content: [
          '<strong>Stand Mai 2026 unterstützt Ollama vier produktionsreife Vision-Modelle: LLaVA, Llama 3.2 Vision, Qwen-VL und Gemma 3.</strong> Jedes hat eine spezifische Stärke und ein eigenes VRAM-Profil.',
          'LLaVA ist der sicherste Einstiegspunkt — es bietet die breiteste Client-Kompatibilität und funktioniert mit jedem Bildformat, das Ollama akzeptiert. Llama 3.2 Vision 11B ist die beste Wahl für OCR und mehrstufiges visuelles Schlussfolgern. Qwen-VL führt bei Charts, Diagrammen und strukturierten Dokumenten. Die Vision-Variante von Gemma 3 verarbeitet 35+ Sprachen — nützlich, wenn Bilder nicht-englischen Text enthalten, z. B. Beschilderungen, fremdsprachige Dokumente oder Diagramme mit lokalisierten Beschriftungen. LLaVA und Qwen-VL sind am stärksten bei englischem Text.',
          'Alle Vision-Modelle laden einen Bild-Encoder neben den LLM-Gewichten. Dieser Encoder benötigt 1–3 GB VRAM zusätzlich zu dem, was das reine Textmodell benötigt — planen Sie diesen Overhead beim Prüfen Ihres VRAM-Budgets ein.',
        ],
      },
      body2: {
        title: 'VRAM-Anforderungen für Vision',
        content: [
          '<strong>Jedes Vision-Modell benötigt mehr VRAM als sein Text-only-Äquivalent.</strong> Ein 7B-Vision-Modell benötigt typischerweise 7–9 GB VRAM, nicht die ~6 GB, die Sie für ein 7B-Textmodell einplanen würden.',
          'Für Diagramm- und Dokumentenanalyse bieten Qwen-VL 7B und Gemma 3 die VRAM-effizientesten Optionen mit starkem Diagrammverständnis. Für OCR und komplexes Schlussfolgern auf Bildern rechtfertigt Llama 3.2 Vision 11B den höheren VRAM-Bedarf. Den vollständigen Leitfaden zu multimodalen lokalen Modellen und Anwendungsfall-Matching finden Sie im <a href="/de/local-llms/multimodal-local-llms" class="text-primary hover:underline">Leitfaden für multimodale lokale LLMs</a>.',
        ],
        columns: ['Modell', 'VRAM bei Q4', 'Bildfähigkeit'],
        rows: [
          { 'Modell': 'LLaVA 7B', 'VRAM bei Q4': '~7 GB', 'Bildfähigkeit': 'Allgemeine Bild-Q&A, breite Kompatibilität' },
          { 'Modell': 'Llama 3.2 Vision 11B', 'VRAM bei Q4': '~10 GB', 'Bildfähigkeit': 'OCR, mehrstufiges visuelles Schlussfolgern' },
          { 'Modell': 'Qwen-VL 7B', 'VRAM bei Q4': '~7 GB', 'Bildfähigkeit': 'Charts, Diagramme, Dokumentenanalyse' },
          { 'Modell': 'Gemma 3 (Vision)', 'VRAM bei Q4': '~6 GB', 'Bildfähigkeit': 'Mehrsprachiges Bildverständnis' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Ollama-Vision-Modellen',
        faqs: [
          {
            q: 'Wie sende ich ein Bild über die API an Ollama?',
            a: 'Senden Sie einen POST-Request an den <code>/api/chat</code>-Endpunkt mit dem Bild als Base64-String im <code>images</code>-Array. Minimaler JSON-Body: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> Für eine multimodale Option mit starker Tool-Call-Unterstützung siehe <a href="/de/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Qwen 3 auf Ollama</a>.',
          },
          {
            q: 'Können Vision-Modelle OCR (Text aus Bildern lesen)?',
            a: 'Ja, aber die Qualität variiert. Llama 3.2 Vision 11B ist unter den von Ollama unterstützten Modellen am stärksten für OCR. LLaVA 7B kann klar gedruckten Text lesen, hat aber Schwierigkeiten mit Handschrift oder kleinen Schriftgrößen.',
          },
          {
            q: 'Welches Ollama-Vision-Modell eignet sich am besten für Charts und Diagramme?',
            a: 'Qwen-VL 7B. Es wurde auf strukturierten Bilddaten einschließlich Charts, Tabellen und Diagrammen feinabgestimmt und übertrifft LLaVA und Gemma 3 in Dokumentenverständnis-Benchmarks.',
          },
          {
            q: 'Unterstützen Vision-Modelle mehrere Bilder in einem Prompt?',
            a: 'Die Unterstützung variiert je nach Modell. LLaVA und Qwen-VL verarbeiten derzeit ein Bild pro Turn in Ollama. Llama 3.2 Vision unterstützt Multi-Bild-Eingaben je nach Ollama-Version und Client-Implementierung.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Ollama',
    title: 'Quels modèles Ollama supportent la vision ?',
    seoTitle: 'Ollama modèles vision 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'LLaVA, Gemma 3 multimodal et Qwen-VL supportent la vision sur Ollama. Démarrez : ollama run llava. Images acceptées via l\'API Ollama. Vérifié mai 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Quels modèles Ollama supportent la vision ?',
        answer: 'Ollama supporte plusieurs modèles de vision : LLaVA, Gemma 3 multimodal et Qwen-VL. Démarrez facilement avec ollama run llava. Tous acceptent des images via l\'API Ollama.',
        bullets: [
          'llava : modèle de vision original, meilleure compatibilité',
          'gemma3 : modèle multimodal de Google, bonne qualité',
          'qwen-vl : excellent pour la compréhension de documents',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Quatre modèles de vision Ollama sont prêts pour la production : LLaVA, Llama 3.2 Vision, Qwen-VL et Gemma 3',
          'Les modèles de vision nécessitent 1–3 GB de VRAM supplémentaires par rapport à leurs équivalents texte seul — l\'encodeur d\'image s\'exécute en parallèle du LLM',
          'LLaVA 7B est le point de départ le plus sûr (~7 GB VRAM, large compatibilité client)',
          'Utilisez Qwen-VL pour l\'analyse de graphiques et diagrammes ; Llama 3.2 Vision 11B pour l\'OCR et le raisonnement visuel multi-étapes',
        ],
      },
      body1: {
        title: 'Les principaux modèles de vision sur Ollama',
        content: [
          '<strong>En mai 2026, Ollama supporte quatre modèles de vision prêts pour la production : LLaVA, Llama 3.2 Vision, Qwen-VL et Gemma 3.</strong> Chacun a une force distincte et un profil VRAM spécifique.',
          'LLaVA est le point de départ le plus sûr — il offre la meilleure compatibilité client et fonctionne avec tous les formats d\'image acceptés par Ollama. Llama 3.2 Vision 11B est le meilleur choix pour l\'OCR et le raisonnement visuel multi-étapes. Qwen-VL excelle sur les graphiques, diagrammes et documents structurés. La variante vision de Gemma 3 traite 35+ langues — utile quand les images contiennent du texte non anglais comme de la signalétique, des documents en langue étrangère ou des graphiques avec des étiquettes localisées. LLaVA et Qwen-VL sont les plus performants sur le texte anglais.',
          'Tous les modèles de vision chargent un encodeur d\'image en parallèle des poids LLM. Cet encodeur ajoute 1–3 GB de VRAM au-delà de ce que le modèle texte seul nécessite — prévoyez cette surcharge lors de la vérification de votre budget VRAM.',
        ],
      },
      body2: {
        title: 'Besoins en VRAM pour la vision',
        content: [
          '<strong>Chaque modèle de vision nécessite plus de VRAM que son équivalent texte seul.</strong> Un modèle de vision 7B requiert typiquement 7–9 GB de VRAM, et non les ~6 GB prévus pour un modèle texte 7B.',
          'Pour l\'analyse de graphiques et de documents, Qwen-VL 7B et Gemma 3 offrent les options les plus efficaces en VRAM avec une bonne compréhension des diagrammes. Pour l\'OCR et le raisonnement complexe sur images, Llama 3.2 Vision 11B justifie la VRAM supplémentaire. Pour le guide complet sur les modèles locaux multimodaux, consultez le <a href="/fr/local-llms/multimodal-local-llms" class="text-primary hover:underline">guide des LLMs locaux multimodaux</a>.',
        ],
        columns: ['Modèle', 'VRAM en Q4', 'Capacité image'],
        rows: [
          { 'Modèle': 'LLaVA 7B', 'VRAM en Q4': '~7 GB', 'Capacité image': 'Q&R sur images générales, large compatibilité' },
          { 'Modèle': 'Llama 3.2 Vision 11B', 'VRAM en Q4': '~10 GB', 'Capacité image': 'OCR, raisonnement visuel multi-étapes' },
          { 'Modèle': 'Qwen-VL 7B', 'VRAM en Q4': '~7 GB', 'Capacité image': 'Graphiques, diagrammes, analyse de documents' },
          { 'Modèle': 'Gemma 3 (vision)', 'VRAM en Q4': '~6 GB', 'Capacité image': 'Compréhension d\'images multilingue' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les modèles de vision Ollama',
        faqs: [
          {
            q: 'Comment envoyer une image à Ollama via l\'API ?',
            a: 'Faites un POST vers le point de terminaison <code>/api/chat</code> avec l\'image en base64 dans le tableau <code>images</code>. Corps JSON minimal : <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> Voir <a href="/fr/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Qwen 3 sur Ollama</a> pour une option multimodale avec un fort support de l\'appel d\'outils.',
          },
          {
            q: 'Les modèles de vision peuvent-ils faire de l\'OCR (lire du texte depuis des images) ?',
            a: 'Oui, mais la qualité varie. Llama 3.2 Vision 11B est le plus performant pour l\'OCR parmi les modèles supportés par Ollama. LLaVA 7B peut lire du texte clairement imprimé mais peine avec l\'écriture manuscrite ou les petites polices.',
          },
          {
            q: 'Quel modèle de vision Ollama est le meilleur pour les graphiques et diagrammes ?',
            a: 'Qwen-VL 7B. Il a été affiné sur des données visuelles structurées incluant graphiques, tableaux et diagrammes, et surpasse LLaVA et Gemma 3 sur les benchmarks de compréhension de documents.',
          },
          {
            q: 'Les modèles de vision supportent-ils plusieurs images dans un seul prompt ?',
            a: 'Le support varie selon le modèle. LLaVA et Qwen-VL traitent actuellement une image par tour dans Ollama. Llama 3.2 Vision supporte les entrées multi-images selon la version d\'Ollama et l\'implémentation client.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Ollama',
    title: 'OllamaでVisionに対応しているモデルは？',
    seoTitle: 'OllamaのVision対応モデル2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'OllamaではLLaVA、Gemma 3マルチモーダル、Qwen-VLがVisionに対応しています。まずは ollama run llava から始めましょう。すべてOllama APIで画像を受け付けます。2026年5月確認済み。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'OllamaでVisionに対応しているモデルは？',
        answer: 'OllamaはLLaVA、Gemma 3マルチモーダル、Qwen-VLなど複数のVisionモデルに対応しています。最も簡単な始め方は ollama run llava です。すべてOllama API経由で画像を受け付けます。',
        bullets: [
          'llava：オリジナルのVisionモデル、互換性が最も広い',
          'gemma3：Googleのマルチモーダルモデル、高品質',
          'qwen-vl：ドキュメント理解に強い',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '本番利用可能なOllama Visionモデルは4つ：LLaVA、Llama 3.2 Vision、Qwen-VL、Gemma 3',
          'VisionモデルはテキストのみのモデルよりVRAMが1–3 GB多く必要です——画像エンコーダーがLLMと並行して動作するためです',
          'LLaVA 7Bが最も安全な出発点（~7 GB VRAM、広いクライアント互換性）',
          'チャートや図の分析にはQwen-VL、OCRや多段階推論にはLlama 3.2 Vision 11Bを使用してください',
        ],
      },
      body1: {
        title: 'OllamaのトップVisionモデル',
        content: [
          '<strong>2026年5月時点で、Ollamaは本番利用可能な4つのVisionモデルをサポートしています：LLaVA、Llama 3.2 Vision、Qwen-VL、Gemma 3。</strong>それぞれ異なる強みとVRAMプロファイルを持ちます。',
          'LLaVAは最も安全な出発点です——最も広いクライアント互換性を持ち、Ollamaが受け付けるあらゆる画像フォーマットで動作します。Llama 3.2 Vision 11BはOCRと多段階の視覚的推論に最適です。Qwen-VLはチャート、図、構造化ドキュメントで優れています。Gemma 3のVisionバリアントは35以上の言語に対応しており、標識や外国語文書、ローカライズされたラベルの入ったグラフなど、英語以外のテキストを含む画像に有効です。LLaVAとQwen-VLは英語テキストで最も強力です。',
          'すべてのVisionモデルはLLMの重みと並行して画像エンコーダーを読み込みます。このエンコーダーはベースのテキストモデルが必要とするVRAMに加えて1–3 GB追加されます——VRAMの予算を確認する際はこのオーバーヘッドを計画に含めてください。',
        ],
      },
      body2: {
        title: 'VisionのVRAM要件',
        content: [
          '<strong>すべてのVisionモデルは、テキストのみの同等モデルよりも多くのVRAMを必要とします。</strong>7BのVisionモデルは通常7–9 GB VRAMが必要で、7Bテキストモデルで想定する~6 GBではありません。',
          'チャートやドキュメント分析には、Qwen-VL 7BとGemma 3が強力な図の理解力を持ちながら最もVRAM効率の高い選択肢です。画像上のOCRや複雑な推論には、Llama 3.2 Vision 11BがVRAMの追加使用を正当化します。マルチモーダルローカルモデルのユースケース別ガイドは、<a href="/ja/local-llms/multimodal-local-llms" class="text-primary hover:underline">マルチモーダルローカルLLMガイド</a>をご覧ください。',
        ],
        columns: ['モデル', 'Q4でのVRAM', '画像機能'],
        rows: [
          { 'モデル': 'LLaVA 7B', 'Q4でのVRAM': '~7 GB', '画像機能': '一般的な画像Q&A、広い互換性' },
          { 'モデル': 'Llama 3.2 Vision 11B', 'Q4でのVRAM': '~10 GB', '画像機能': 'OCR、多段階視覚推論' },
          { 'モデル': 'Qwen-VL 7B', 'Q4でのVRAM': '~7 GB', '画像機能': 'チャート、図、ドキュメント分析' },
          { 'モデル': 'Gemma 3（Vision）', 'Q4でのVRAM': '~6 GB', '画像機能': '多言語画像理解' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Ollama Visionモデルへのよくある質問',
        faqs: [
          {
            q: 'API経由でOllamaに画像を送るにはどうすればいいですか？',
            a: '<code>/api/chat</code>エンドポイントにPOSTリクエストを送り、<code>images</code>配列にbase64文字列として画像を含めます。最小動作JSONボディ: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> ツールコールサポートが強いマルチモーダル対応オプションは<a href="/ja/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">OllamaでのQwen 3</a>をご覧ください。',
          },
          {
            q: 'VisionモデルはOCR（画像からテキストを読み取る）できますか？',
            a: 'はい、ただし品質は異なります。Llama 3.2 Vision 11BはOllamaがサポートするモデルの中でOCRが最も優れています。LLaVA 7Bは明瞭に印刷されたテキストは読めますが、手書きや小さいフォントは苦手です。',
          },
          {
            q: 'チャートや図に最適なOllama Visionモデルはどれですか？',
            a: 'Qwen-VL 7Bです。チャート、表、図を含む構造化された視覚データでファインチューニングされており、ドキュメント理解ベンチマークでLLaVAとGemma 3を上回ります。',
          },
          {
            q: 'Visionモデルは1つのプロンプトで複数の画像をサポートしていますか？',
            a: 'モデルによって対応状況が異なります。LLaVAとQwen-VLは現在Ollamaで1ターンに1枚の画像を処理します。Llama 3.2 VisionはOllamaのバージョンとクライアントの実装によってマルチ画像入力をサポートしています。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Ollama',
    title: '哪些Ollama模型支持视觉功能？',
    seoTitle: '哪些Ollama模型支持视觉2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'LLaVA、Gemma 3多模态和Qwen-VL支持Ollama上的视觉功能。使用 ollama run llava 快速开始。所有模型均通过Ollama API接受图片。2026年5月更新。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '哪些Ollama模型支持视觉功能？',
        answer: 'Ollama支持多个视觉模型：LLaVA、Gemma 3多模态和Qwen-VL。最简单的入门方式是 ollama run llava。所有模型均通过Ollama API接受图片。',
        bullets: [
          'llava：原始视觉模型，兼容性最广',
          'gemma3：Google多模态模型，质量优秀',
          'qwen-vl：文档理解能力强',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '四个Ollama视觉模型已可用于生产：LLaVA、Llama 3.2 Vision、Qwen-VL和Gemma 3',
          '视觉模型比纯文本模型需要多1–3 GB VRAM——图像编码器与LLM并行运行',
          'LLaVA 7B是最安全的起点（~7 GB VRAM，广泛的客户端兼容性）',
          '图表和图形分析使用Qwen-VL；OCR和多步推理使用Llama 3.2 Vision 11B',
        ],
      },
      body1: {
        title: 'Ollama上的顶级视觉模型',
        content: [
          '<strong>截至2026年5月，Ollama支持四个可用于生产的视觉模型：LLaVA、Llama 3.2 Vision、Qwen-VL和Gemma 3。</strong>每个模型都有独特的优势和VRAM需求。',
          'LLaVA是最安全的起点——它具有最广泛的客户端兼容性，支持Ollama接受的所有图片格式。Llama 3.2 Vision 11B是OCR和多步视觉推理的最佳选择。Qwen-VL在图表、图形和结构化文档方面领先。Gemma 3的视觉版本支持35种以上的语言——适用于图片包含非英文文本的场景，如标识、外语文档或带有本地化标签的图表。LLaVA和Qwen-VL在英文文本上最为强大。',
          '所有视觉模型都会在LLM权重的基础上加载图像编码器。此编码器在纯文本模型所需VRAM之上额外增加1–3 GB——规划VRAM预算时请考虑这一开销。',
        ],
      },
      body2: {
        title: '视觉功能的VRAM需求',
        content: [
          '<strong>每个视觉模型所需的VRAM都多于其纯文本版本。</strong>7B视觉模型通常需要7–9 GB VRAM，而不是7B文本模型预算的~6 GB。',
          '对于图表和文档分析，Qwen-VL 7B和Gemma 3提供了最具VRAM效率的选项，同时具有强大的图形理解能力。对于图片上的OCR和复杂推理，Llama 3.2 Vision 11B的额外VRAM是值得的。关于多模态本地模型及用例匹配的完整指南，请参阅<a href="/zh/local-llms/multimodal-local-llms" class="text-primary hover:underline">多模态本地LLM指南</a>。',
        ],
        columns: ['模型', 'Q4量化的VRAM', '图像能力'],
        rows: [
          { '模型': 'LLaVA 7B', 'Q4量化的VRAM': '~7 GB', '图像能力': '通用图像问答，广泛兼容' },
          { '模型': 'Llama 3.2 Vision 11B', 'Q4量化的VRAM': '~10 GB', '图像能力': 'OCR，多步视觉推理' },
          { '模型': 'Qwen-VL 7B', 'Q4量化的VRAM': '~7 GB', '图像能力': '图表、图形、文档分析' },
          { '模型': 'Gemma 3（视觉版）', 'Q4量化的VRAM': '~6 GB', '图像能力': '多语言图像理解' },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于Ollama视觉模型的快速解答',
        faqs: [
          {
            q: '如何通过API向Ollama发送图片？',
            a: '向<code>/api/chat</code>端点发送POST请求，将图片作为base64字符串放在<code>images</code>数组中。最简JSON请求体：<code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> 如需多模态能力加强大工具调用支持，参见<a href="/zh/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">在Ollama上运行Qwen 3</a>。',
          },
          {
            q: '视觉模型可以做OCR（从图片中读取文字）吗？',
            a: '可以，但质量因模型而异。Llama 3.2 Vision 11B在Ollama支持的模型中OCR能力最强。LLaVA 7B能读取清晰印刷的文字，但对手写或小字体有困难。',
          },
          {
            q: '哪个Ollama视觉模型最适合图表和图形？',
            a: 'Qwen-VL 7B。它在结构化视觉数据（包括图表、表格和图形）上进行了微调，在文档理解基准测试中超越了LLaVA和Gemma 3。',
          },
          {
            q: '视觉模型支持在单个提示中处理多张图片吗？',
            a: '支持情况因模型而异。LLaVA和Qwen-VL目前在Ollama中每轮处理一张图片。Llama 3.2 Vision根据Ollama版本和客户端实现支持多图片输入。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Ollama',
    title: 'Quais modelos do Ollama suportam visão?',
    seoTitle: 'Modelos de visão do Ollama 2026 | PromptQuorum',
    metaDescription: 'LLaVA, Gemma 3 multimodal e Qwen-VL suportam visão no Ollama. Comece com: ollama run llava. Todos aceitam imagens via a API do Ollama. Atualizado em 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Quais modelos do Ollama suportam visão?',
        answer: 'Ollama suporta vários modelos de visão: LLaVA, Gemma 3 multimodal e Qwen-VL. Execute ollama run llava para começar facilmente. Todos aceitam imagens via a API do Ollama.',
        bullets: [
          'llava: modelo de visão original, melhor compatibilidade',
          'gemma3: modelo multimodal do Google, boa qualidade',
          'qwen-vl: potente para compreensão de documentos',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Quatro modelos de visão do Ollama estão prontos para produção: LLaVA, Llama 3.2 Vision, Qwen-VL e Gemma 3',
          'Os modelos de visão precisam de 1–3 GB a mais de VRAM que seus equivalentes apenas de texto — o codificador de imagem roda junto ao LLM',
          'LLaVA 7B é o ponto de partida mais seguro (~7 GB de VRAM, ampla compatibilidade com clientes)',
          'Use Qwen-VL para análise de gráficos e diagramas; use Llama 3.2 Vision 11B para OCR e raciocínio visual de múltiplas etapas',
        ],
      },
      body1: {
        title: 'Os principais modelos de visão no Ollama',
        content: [
          '<strong>Em maio de 2026, Ollama suporta quatro modelos de visão prontos para produção: LLaVA, Llama 3.2 Vision, Qwen-VL e Gemma 3.</strong> Cada um tem uma força distinta e um perfil de VRAM específico.',
          'LLaVA é o ponto de partida mais seguro — tem a maior compatibilidade com clientes e funciona com qualquer formato de imagem que o Ollama aceita. Llama 3.2 Vision 11B é a melhor escolha para OCR e raciocínio visual de múltiplas etapas. Qwen-VL lidera em gráficos, diagramas e documentos estruturados. A variante de visão do Gemma 3 lida com mais de 35 idiomas — útil quando as imagens contêm texto que não está em inglês, como sinalizações, documentos em idiomas estrangeiros ou gráficos com rótulos localizados. LLaVA e Qwen-VL são mais fortes em texto em inglês.',
          'Todos os modelos de visão carregam um codificador de imagem junto aos pesos do LLM. Esse codificador adiciona 1–3 GB de VRAM além do que o modelo base apenas de texto precisa — considere esse overhead ao verificar seu orçamento de VRAM.',
        ],
      },
      body2: {
        title: 'Requisitos de VRAM para visão',
        content: [
          '<strong>Cada modelo de visão precisa de mais VRAM que seu equivalente apenas de texto.</strong> Um modelo de visão 7B normalmente requer 7–9 GB de VRAM, não os ~6 GB que você orçaria para um modelo de texto 7B.',
          'Para análise de gráficos e documentos, Qwen-VL 7B e Gemma 3 oferecem as opções mais eficientes em VRAM com forte compreensão de diagramas. Para OCR e raciocínio complexo em imagens, Llama 3.2 Vision 11B justifica a VRAM adicional. Para o guia completo sobre modelos locais multimodais e correspondência por caso de uso, veja o <a href="/pt/local-llms/multimodal-local-llms" class="text-primary hover:underline">guia de LLMs locais multimodais</a>.',
        ],
        columns: ['Modelo', 'VRAM em Q4', 'Capacidade de imagem'],
        rows: [
          { 'Modelo': 'LLaVA 7B', 'VRAM em Q4': '~7 GB', 'Capacidade de imagem': 'Perguntas e respostas gerais sobre imagens, ampla compatibilidade' },
          { 'Modelo': 'Llama 3.2 Vision 11B', 'VRAM em Q4': '~10 GB', 'Capacidade de imagem': 'OCR, raciocínio visual de múltiplas etapas' },
          { 'Modelo': 'Qwen-VL 7B', 'VRAM em Q4': '~7 GB', 'Capacidade de imagem': 'Gráficos, diagramas, análise de documentos' },
          { 'Modelo': 'Gemma 3 (visão)', 'VRAM em Q4': '~6 GB', 'Capacidade de imagem': 'Compreensão multilíngue de imagens' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre modelos de visão do Ollama',
        faqs: [
          {
            q: 'Como envio uma imagem ao Ollama via API?',
            a: 'Faça um POST para o endpoint <code>/api/chat</code> com a imagem como string base64 no array <code>images</code>. Corpo JSON mínimo funcional: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> Veja <a href="/pt/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Qwen 3 no Ollama</a> para uma opção multimodal com forte suporte a chamadas de ferramentas.',
          },
          {
            q: 'Os modelos de visão podem fazer OCR (ler texto de imagens)?',
            a: 'Sim, mas a qualidade varia. Llama 3.2 Vision 11B é o mais forte para OCR entre os modelos suportados pelo Ollama. LLaVA 7B consegue ler texto claramente impresso, mas tem dificuldade com caligrafia ou fontes pequenas.',
          },
          {
            q: 'Qual modelo de visão do Ollama é melhor para gráficos e diagramas?',
            a: 'Qwen-VL 7B. Foi ajustado em dados visuais estruturados incluindo gráficos, tabelas e diagramas, e supera LLaVA e Gemma 3 nos benchmarks de compreensão de documentos.',
          },
          {
            q: 'Os modelos de visão suportam múltiplas imagens em um único prompt?',
            a: 'O suporte varia por modelo. LLaVA e Qwen-VL atualmente processam uma imagem por turno no Ollama. Llama 3.2 Vision suporta entradas de múltiplas imagens dependendo da versão do Ollama e da implementação do cliente.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Ollama',
    title: '¿Qué modelos de Ollama son compatibles con visión?',
    seoTitle: 'Modelos de visión de Ollama 2026 | PromptQuorum',
    metaDescription: 'LLaVA, Gemma 3 multimodal y Qwen-VL soportan visión en Ollama. Empieza con: ollama run llava. Todos aceptan imágenes vía la API de Ollama. Actualizado 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Qué modelos de Ollama son compatibles con visión?',
        answer: 'Ollama admite varios modelos de visión: LLaVA, Gemma 3 multimodal y Qwen-VL. Ejecuta ollama run llava para empezar fácilmente. Todos aceptan imágenes a través de la API de Ollama.',
        bullets: [
          'llava: modelo de visión original, mejor compatibilidad',
          'gemma3: modelo multimodal de Google, buena calidad',
          'qwen-vl: potente para la comprensión de documentos',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Cuatro modelos de visión de Ollama están listos para producción: LLaVA, Llama 3.2 Vision, Qwen-VL y Gemma 3',
          'Los modelos de visión necesitan entre 1 y 3 GB más de VRAM que sus equivalentes solo de texto — el codificador de imagen se ejecuta junto al LLM',
          'LLaVA 7B es el punto de partida más seguro (~7 GB de VRAM, amplia compatibilidad con clientes)',
          'Usa Qwen-VL para análisis de gráficos y diagramas; usa Llama 3.2 Vision 11B para OCR y razonamiento visual de múltiples pasos',
        ],
      },
      body1: {
        title: 'Los principales modelos de visión en Ollama',
        content: [
          '<strong>A mayo de 2026, Ollama admite cuatro modelos de visión listos para producción: LLaVA, Llama 3.2 Vision, Qwen-VL y Gemma 3.</strong> Cada uno tiene una fortaleza distinta y un perfil de VRAM propio.',
          'LLaVA es el punto de partida más seguro — tiene la mayor compatibilidad con clientes y funciona con cualquier formato de imagen que acepte Ollama. Llama 3.2 Vision 11B es la mejor opción para OCR y razonamiento visual de múltiples pasos. Qwen-VL lidera en gráficos, diagramas y documentos estructurados. La variante de visión de Gemma 3 maneja más de 35 idiomas — útil cuando las imágenes contienen texto que no está en inglés, como señales, documentos en idiomas extranjeros o gráficos con etiquetas localizadas. LLaVA y Qwen-VL son más potentes con texto en inglés.',
          'Todos los modelos de visión cargan un codificador de imagen junto a los pesos del LLM. Este codificador añade entre 1 y 3 GB de VRAM sobre lo que necesita el modelo base solo de texto — ten en cuenta este overhead al revisar tu presupuesto de VRAM.',
        ],
      },
      body2: {
        title: 'Requisitos de VRAM para visión',
        content: [
          '<strong>Cada modelo de visión necesita más VRAM que su equivalente solo de texto.</strong> Un modelo de visión 7B normalmente requiere entre 7 y 9 GB de VRAM, no los ~6 GB que presupuestarías para un modelo de texto 7B.',
          'Para análisis de gráficos y documentos, Qwen-VL 7B y Gemma 3 ofrecen las opciones más eficientes en VRAM con gran capacidad de comprensión de diagramas. Para OCR y razonamiento complejo sobre imágenes, Llama 3.2 Vision 11B justifica el VRAM adicional. Para la guía completa sobre modelos locales multimodales y la elección según el caso de uso, consulta la <a href="/es/local-llms/multimodal-local-llms" class="text-primary hover:underline">guía de LLM locales multimodales</a>.',
        ],
        columns: ['Modelo', 'VRAM en Q4', 'Capacidad de imagen'],
        rows: [
          { 'Modelo': 'LLaVA 7B', 'VRAM en Q4': '~7 GB', 'Capacidad de imagen': 'Preguntas y respuestas generales sobre imágenes, amplia compatibilidad' },
          { 'Modelo': 'Llama 3.2 Vision 11B', 'VRAM en Q4': '~10 GB', 'Capacidad de imagen': 'OCR, razonamiento visual de múltiples pasos' },
          { 'Modelo': 'Qwen-VL 7B', 'VRAM en Q4': '~7 GB', 'Capacidad de imagen': 'Gráficos, diagramas, análisis de documentos' },
          { 'Modelo': 'Gemma 3 (visión)', 'VRAM en Q4': '~6 GB', 'Capacidad de imagen': 'Comprensión multilingüe de imágenes' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre los modelos de visión de Ollama',
        faqs: [
          {
            q: '¿Cómo envío una imagen a Ollama a través de la API?',
            a: 'Haz un POST al endpoint <code>/api/chat</code> con la imagen como cadena base64 en el array <code>images</code>. Cuerpo JSON mínimo funcional: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> Consulta <a href="/es/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Qwen 3 en Ollama</a> para una opción multimodal con soporte potente de llamadas a herramientas.',
          },
          {
            q: '¿Pueden los modelos de visión hacer OCR (leer texto de imágenes)?',
            a: 'Sí, pero la calidad varía. Llama 3.2 Vision 11B es el más potente para OCR entre los modelos admitidos por Ollama. LLaVA 7B puede leer texto impreso con claridad, pero tiene dificultades con la escritura a mano o las fuentes pequeñas.',
          },
          {
            q: '¿Qué modelo de visión de Ollama es el mejor para gráficos y diagramas?',
            a: 'Qwen-VL 7B. Fue ajustado con datos visuales estructurados, incluyendo gráficos, tablas y diagramas, y supera a LLaVA y Gemma 3 en los benchmarks de comprensión de documentos.',
          },
          {
            q: '¿Los modelos de visión admiten múltiples imágenes en un solo prompt?',
            a: 'El soporte varía según el modelo. LLaVA y Qwen-VL procesan actualmente una imagen por turno en Ollama. Llama 3.2 Vision admite entradas de múltiples imágenes según la versión de Ollama y la implementación del cliente.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Ollama',
    title: 'ما نماذج Ollama التي تدعم الرؤية؟',
    seoTitle: 'نماذج Ollama للرؤية 2026: LLaVA و Qwen-VL و Gemma 3',
    metaDescription: '4 نماذج رؤية جاهزة في Ollama: LLaVA و Llama 3.2 Vision و Qwen-VL و Gemma 3. كل نموذج يحتاج 1–3 GB VRAM إضافية؛ ابدأ بـ ollama run llava.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'ما نماذج Ollama التي تدعم الرؤية؟',
        answer: 'يدعم Ollama عدة نماذج رؤية: LLaVA و Gemma 3 متعدد الوسائط و Qwen-VL. شغّل ollama run llava للبدء بسهولة. جميعها تقبل الصور عبر واجهة Ollama البرمجية.',
        bullets: [
          'llava: نموذج الرؤية الأصلي، أوسع توافق',
          'gemma3: نموذج متعدد الوسائط من Google، جودة جيدة',
          'qwen-vl: قوي في فهم المستندات',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أربعة نماذج رؤية في Ollama جاهزة للإنتاج: LLaVA و Llama 3.2 Vision و Qwen-VL و Gemma 3',
          'تحتاج نماذج الرؤية 1–3 GB VRAM إضافية فوق ما تحتاجه نظيراتها النصية فقط — يعمل مشفّر الصور جنبًا إلى جنب مع نموذج اللغة',
          'LLaVA 7B هو نقطة البداية الأأمن (~7 GB VRAM، توافق واسع مع العملاء)',
          'استخدم Qwen-VL لتحليل الرسوم البيانية والمخططات؛ استخدم Llama 3.2 Vision 11B لـ OCR والاستدلال البصري متعدد الخطوات',
        ],
      },
      body1: {
        title: 'أبرز نماذج الرؤية في Ollama',
        content: [
          '<strong>اعتبارًا من مايو 2026، يدعم Ollama أربعة نماذج رؤية جاهزة للإنتاج: LLaVA و Llama 3.2 Vision و Qwen-VL و Gemma 3.</strong> لكل منها قوة مميزة وملف VRAM خاص.',
          'LLaVA هو نقطة البداية الأأمن — يتمتع بأوسع توافق مع العملاء ويعمل مع أي صيغة صورة يقبلها Ollama. Llama 3.2 Vision 11B هو الأفضل لـ OCR والاستدلال البصري متعدد الخطوات. Qwen-VL يتصدر في الرسوم البيانية والمخططات والمستندات المنظمة. متغير Gemma 3 للرؤية يتعامل مع أكثر من 35 لغة — مفيد حين تحتوي الصور على نص غير إنجليزي كاللافتات والمستندات الأجنبية أو الرسوم البيانية ذات التسميات المحلية. LLaVA و Qwen-VL أقوى في النص الإنجليزي.',
          'تحمّل جميع نماذج الرؤية مشفّر صور إلى جانب أوزان نموذج اللغة. يضيف هذا المشفّر 1–3 GB VRAM فوق ما يحتاجه النموذج الأساسي النصي فقط — ضع هذا الحمل الإضافي في حسبانك عند مراجعة ميزانية VRAM.',
        ],
      },
      body2: {
        title: 'متطلبات VRAM للرؤية',
        content: [
          '<strong>كل نموذج رؤية يحتاج VRAM أكثر من نظيره النصي.</strong> يتطلب نموذج رؤية 7B عادةً 7–9 GB VRAM، وليس ~6 GB التي ستُخصصها لنموذج نصي 7B.',
          'لتحليل الرسوم البيانية والمستندات، يقدم Qwen-VL 7B و Gemma 3 الخيارات الأكثر كفاءة في VRAM مع قدرة قوية على فهم المخططات. لـ OCR والاستدلال المعقد على الصور، يبرر Llama 3.2 Vision 11B VRAM الإضافية. للدليل الكامل حول نماذج اللغة المحلية متعددة الوسائط ومطابقة حالات الاستخدام، راجع <a href="/ar/local-llms/multimodal-local-llms" class="text-primary hover:underline">دليل نماذج اللغة المحلية متعددة الوسائط</a>.',
        ],
        columns: ['الطراز', 'VRAM بتحديد Q4', 'قدرة معالجة الصور'],
        rows: [
          { 'الطراز': 'LLaVA 7B', 'VRAM بتحديد Q4': '~7 GB', 'قدرة معالجة الصور': 'أسئلة وأجوبة عامة على الصور، توافق واسع' },
          { 'الطراز': 'Llama 3.2 Vision 11B', 'VRAM بتحديد Q4': '~10 GB', 'قدرة معالجة الصور': 'OCR، استدلال بصري متعدد الخطوات' },
          { 'الطراز': 'Qwen-VL 7B', 'VRAM بتحديد Q4': '~7 GB', 'قدرة معالجة الصور': 'رسوم بيانية، مخططات، تحليل مستندات' },
          { 'الطراز': 'Gemma 3 (رؤية)', 'VRAM بتحديد Q4': '~6 GB', 'قدرة معالجة الصور': 'فهم الصور متعدد اللغات' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج رؤية Ollama',
        faqs: [
          {
            q: 'كيف أرسل صورة إلى Ollama عبر الواجهة البرمجية؟',
            a: 'أرسل طلب POST إلى نقطة النهاية <code>/api/chat</code> مع الصورة كسلسلة base64 في مصفوفة <code>images</code>. نص JSON الأدنى المطلوب: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> راجع <a href="/ar/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Qwen 3 على Ollama</a> لخيار متعدد الوسائط مع دعم قوي لاستدعاء الأدوات.',
          },
          {
            q: 'هل تستطيع نماذج الرؤية إجراء OCR (قراءة النص من الصور)؟',
            a: 'نعم، لكن الجودة تتفاوت. Llama 3.2 Vision 11B هو الأقوى في OCR بين النماذج المدعومة في Ollama. LLaVA 7B يستطيع قراءة النص المطبوع بوضوح، لكنه يواجه صعوبة مع الخط اليدوي أو الخطوط الصغيرة.',
          },
          {
            q: 'ما أفضل نموذج رؤية في Ollama للرسوم البيانية والمخططات؟',
            a: 'Qwen-VL 7B. ضُبط على بيانات بصرية منظمة تشمل الرسوم البيانية والجداول والمخططات، ويتفوق على LLaVA و Gemma 3 في معايير فهم المستندات.',
          },
          {
            q: 'هل تدعم نماذج الرؤية صورًا متعددة في موجّه واحد؟',
            a: 'يتفاوت الدعم حسب النموذج. LLaVA و Qwen-VL يعالجان حاليًا صورة واحدة لكل دور في Ollama. يدعم Llama 3.2 Vision مدخلات صور متعددة حسب إصدار Ollama وتنفيذ العميل.',
          },
        ],
      },
    },
  },
}
