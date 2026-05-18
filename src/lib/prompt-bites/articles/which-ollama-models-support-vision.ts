import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'Which Ollama Models Support Vision?',
    seoTitle: 'Which Ollama Models Support Vision? | Prompt Bites | PromptQuorum',
    metaDescription: 'LLaVA, Gemma 3 multimodal, and Qwen-VL support vision on Ollama. Start with: ollama run llava. All accept images via the Ollama API. Quick answer from PromptQuorum.',
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
    seoTitle: 'Welche Ollama-Modelle unterstützen Vision? | Prompt Bites | PromptQuorum',
    metaDescription: 'LLaVA, Gemma 3 multimodal und Qwen-VL unterstützen Vision auf Ollama. Einstieg mit: ollama run llava. Alle akzeptieren Bilder über die Ollama API. Schnelle Antwort von PromptQuorum.',
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
    seoTitle: 'Quels modèles Ollama supportent la vision ? | Prompt Bites | PromptQuorum',
    metaDescription: 'LLaVA, Gemma 3 multimodal et Qwen-VL supportent la vision sur Ollama. Démarrez avec : ollama run llava. Tous acceptent des images via l\'API Ollama. Réponse rapide par PromptQuorum.',
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
    seoTitle: 'OllamaでVisionに対応しているモデルは？ | Prompt Bites | PromptQuorum',
    metaDescription: 'OllamaではLLaVA、Gemma 3マルチモーダル、Qwen-VLがVisionに対応しています。まずは ollama run llava から始めましょう。すべてOllama APIで画像を受け付けます。PromptQuorumによる速答。',
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
    seoTitle: '哪些Ollama模型支持视觉功能？| Prompt Bites | PromptQuorum',
    metaDescription: 'LLaVA、Gemma 3多模态和Qwen-VL支持Ollama上的视觉功能。使用 ollama run llava 快速开始。所有模型均通过Ollama API接受图片。PromptQuorum快速解答。',
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
}
