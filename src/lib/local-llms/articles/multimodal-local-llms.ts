// Auto-generated from src/lib/local-llms/content.ts
// Slug: multimodal-local-llms
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Advanced Techniques',
      title: 'Multimodal Local LLMs: Vision, Audio, and Text Processing',
      seoTitle: 'Multimodal Local LLMs',
      intro: 'Multimodal models process images, text, and audio. As of April 2026, Llama 3.2 Vision, Gemma 3 Vision, and Qwen2-VL are practical multimodal models for local deployment. They enable document OCR, image analysis, and visual question-answering without cloud APIs.',
      metaDescription: 'Multimodal local LLMs 2026: vision, image processing, OCR, audio models. LLaVA, Qwen-VL guides with use cases.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Multimodal models process images, text, and audio. As of April 2026, Llama 3.2 Vision, Gemma 3 Vision, and Qwen2-VL are practical multimodal models for local deployment.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '10 min read',
      educationalLevel: 'Intermediate to Advanced',
      primaryTerm: 'multimodal models',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Multimodal Models Available', anchor: '#models' },
        { label: 'Vision Capabilities', anchor: '#vision' },
        { label: 'Setup and Usage', anchor: '#setup' },
        { label: 'Real-World Use Cases', anchor: '#use-cases' },
        { label: 'Performance and Limitations', anchor: '#performance' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Related Reading', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Multimodal = text + images (+ audio).** Process images natively without OCR preprocessing.',
            '**Best models (2026):** Llama 3.2 Vision 11B, Qwen2-VL 7B, Gemma 3 Vision 9B.',
            '**Use cases:** Document OCR, image analysis, visual Q&A, table extraction.',
            '**Speed:** 2-5 seconds per image (11B model). Slower than text-only, but practical.',
            'As of April 2026, multimodal is mature for specific use cases, not yet general-purpose.',
          ],
        },
        models: {
          title: 'Multimodal Models Available (April 2026)',
          rows: [
            { 'Model': 'Llama 3.2 Vision 11B', 'Image Support': 'Yes', 'VRAM': '8 GB', 'Speed': '3-5 sec/image', 'Best For': 'General vision' },
            { 'Model': 'Qwen2-VL 7B', 'Image Support': 'Yes', 'VRAM': '5 GB', 'Speed': '2-3 sec/image', 'Best For': 'Fast vision' },
            { 'Model': 'Gemma 3 Vision 9B', 'Image Support': 'Yes', 'VRAM': '6 GB', 'Speed': '3 sec/image', 'Best For': 'Balanced' },
            { 'Model': 'Llama 3.2 Vision 90B', 'Image Support': 'Yes', 'VRAM': '55 GB', 'Speed': '10+ sec/image', 'Best For': 'High quality' },
          ],
          columns: ['Model', 'Image Support', 'VRAM', 'Speed per Image', 'Best For'],
        },
        vision: {
          title: 'Vision Capabilities',
          content: [
            'Multimodal models can:',
          ],
          items: [
            '**Image description:** Explain what is in an image.',
            '**OCR (Optical Character Recognition):** Extract text from images (business card, document scan).',
            '**Visual Q&A:** Answer questions about images ("What is the brand of the car?").',
            '**Table extraction:** Parse tables from images into structured data.',
            '**Chart analysis:** Interpret data visualizations.',
            '**Object detection:** Identify and locate objects in images.',
          ],
        },
        setup: {
          title: 'Setup and Usage',
          content: 'Using Llama 3.2 Vision with Ollama:',
          codeBlock: '# Pull the model\nollama pull llama3.2-vision:11b\n\n# Use it\nfrom ollama import Client\nclient = Client()\n\nwith open("image.jpg", "rb") as f:\n    image_data = f.read()\n\nresponse = client.generate(\n  model="llama3.2-vision:11b",\n  prompt="Describe this image",\n  images=[image_data]  # Pass image data\n)\n\nprint(response["response"])',
          codeLanguage: 'python',
        },
        useCases: {
          title: 'Real-World Use Cases',
          items: [
            '**Document processing:** Extract text from scanned PDFs without external OCR service.',
            '**Content moderation:** Flag inappropriate images without sending to cloud.',
            '**Accessibility:** Describe images for visually impaired users.',
            '**Product analysis:** Analyze product images in e-commerce (category, condition, defects).',
            '**Research:** Analyze scientific charts and diagrams.',
          ],
        },
        performance: {
          title: 'Performance and Limitations',
          content: [
            '**Accuracy:** Good for document OCR and description, but not perfect for detailed analysis or small objects.',
            '**Speed:** 2-5 seconds per image. Cloud models (GPT-4 Vision) are 10-50× faster.',
            '**Image size:** Supports up to ~1000×1000 pixels. Larger images are downsampled.',
            '**Limitations:** Cannot match GPT-4 Vision accuracy on complex scenes. Trade-off: privacy vs. quality.',
          ],
        },
        commonMistakes: {
          title: 'Common Mistakes',
          items: [
            '**Expecting accuracy of GPT-4 Vision.** Local models are 20-30% less accurate. Use for specific domains, not general vision.',
            '**Not preparing images.** Crop images to focus area. Remove noise. Better input = better output.',
            '**Using 7B models for complex vision.** Small models struggle with subtle details. Use 11B+ for reliable vision.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding) -- Vision can help code understanding.',
            '[Local RAG 2026](/local-llms/local-rag-2026) -- Combine vision with RAG for document processing.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Llama 3.2 Vision Model Card -- huggingface.co/meta-llama/Llama-3.2-11B-Vision',
            'Qwen2-VL -- github.com/QwenLM/Qwen2-VL',
          ],
        },
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      theme: 'Advanced Techniques',
      title: 'Multimodale lokale LLMs: Vision, Audio und Textverarbeitung',
      seoTitle: 'Multimodale lokale LLMs',
      intro: 'Multimodale Modelle verarbeiten Bilder, Text und Audio. Ab April 2026 sind Llama 3.2 Vision, Gemma 3 Vision und Qwen2-VL praktische multimodale Modelle für lokale Bereitstellung. Sie ermöglichen Dokumenten-OCR, Bildanalyse und visuelle Frage-Antwort-Verarbeitung ohne Cloud-APIs.',
      metaDescription: 'Multimodale lokale LLMs 2026: Vision, Bildverarbeitung, OCR, Audio-Modelle. LLaVA, Qwen-VL-Anleitungen mit Anwendungsfällen.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Multimodale Modelle verarbeiten Bilder, Text und Audio. Ab April 2026 sind Llama 3.2 Vision, Gemma 3 Vision und Qwen2-VL praktische multimodale Modelle für lokale Bereitstellung.**',
      audience: 'Anfänger, die ihr erstes lokales LLM auf Consumer-Hardware ausführen',
      readTime: '10 Min. Lesezeit',
      educationalLevel: 'Intermediate to Advanced',
      primaryTerm: 'multimodale Modelle',
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Verfügbare multimodale Modelle', anchor: '#models' },
        { label: 'Vision-Fähigkeiten', anchor: '#vision' },
        { label: 'Setup und Verwendung', anchor: '#setup' },
        { label: 'Praktische Anwendungsfälle', anchor: '#use-cases' },
        { label: 'Performance und Einschränkungen', anchor: '#performance' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Weiterführende Literatur', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Multimodal = Text + Bilder (+ Audio).** Verarbeiten Sie Bilder nativ ohne OCR-Vorverarbeitung.',
            '**Beste Modelle (2026):** Llama 3.2 Vision 11B, Qwen2-VL 7B, Gemma 3 Vision 9B.',
            '**Anwendungsfälle:** Dokumenten-OCR, Bildanalyse, visuelle Q&A, Tabellenextraktion.',
            '**Geschwindigkeit:** 2-5 Sekunden pro Bild (11B-Modell). Langsamer als reiner Text, aber praktisch.',
            'Ab April 2026 ist Multimodal für spezifische Anwendungsfälle reif, noch nicht für allgemeine Zwecke.',
          ],
        },
        models: {
          title: 'Verfügbare multimodale Modelle (April 2026)',
          rows: [
            { 'Modell': 'Llama 3.2 Vision 11B', 'Bildunterstützung': 'Ja', 'VRAM': '8 GB', 'Geschwindigkeit': '3-5 Sek./Bild', 'Am besten für': 'Allgemeine Vision' },
            { 'Modell': 'Qwen2-VL 7B', 'Bildunterstützung': 'Ja', 'VRAM': '5 GB', 'Geschwindigkeit': '2-3 Sek./Bild', 'Am besten für': 'Schnelle Vision' },
            { 'Modell': 'Gemma 3 Vision 9B', 'Bildunterstützung': 'Ja', 'VRAM': '6 GB', 'Geschwindigkeit': '3 Sek./Bild', 'Am besten für': 'Ausgeglichen' },
            { 'Modell': 'Llama 3.2 Vision 90B', 'Bildunterstützung': 'Ja', 'VRAM': '55 GB', 'Geschwindigkeit': '10+ Sek./Bild', 'Am besten für': 'Hohe Qualität' },
          ],
          columns: ['Modell', 'Bildunterstützung', 'VRAM', 'Geschwindigkeit pro Bild', 'Am besten für'],
        },
        vision: {
          title: 'Vision-Fähigkeiten',
          content: [
            'Multimodale Modelle können:',
          ],
          items: [
            '**Bildbeschreibung:** Erklären Sie, was in einem Bild zu sehen ist.',
            '**OCR (Optische Zeichenerkennung):** Text aus Bildern extrahieren (Visitenkarte, Dokumentenscan).',
            '**Visuelle Q&A:** Fragen zu Bildern beantworten („Was ist die Marke des Autos?").',
            '**Tabellenextraktion:** Tabellen aus Bildern in strukturierte Daten umwandeln.',
            '**Diagrammanalyse:** Datenvisualisierungen interpretieren.',
            '**Objekterkennung:** Objekte in Bildern identifizieren und lokalisieren.',
          ],
        },
        setup: {
          title: 'Setup und Verwendung',
          content: 'Verwendung von Llama 3.2 Vision mit Ollama:',
          codeBlock: '# Pull the model\nollama pull llama3.2-vision:11b\n\n# Use it\nfrom ollama import Client\nclient = Client()\n\nwith open("image.jpg", "rb") as f:\n    image_data = f.read()\n\nresponse = client.generate(\n  model="llama3.2-vision:11b",\n  prompt="Describe this image",\n  images=[image_data]  # Pass image data\n)\n\nprint(response["response"])',
          codeLanguage: 'python',
        },
        useCases: {
          title: 'Praktische Anwendungsfälle',
          items: [
            '**Dokumentenverarbeitung:** Text aus gescannten PDFs extrahieren ohne externen OCR-Service.',
            '**Inhaltsmoderation:** Unangemessene Bilder kennzeichnen, ohne an die Cloud zu senden.',
            '**Barrierefreiheit:** Bilder für sehbehinderte Benutzer beschreiben.',
            '**Produktanalyse:** Produktbilder im E-Commerce analysieren (Kategorie, Zustand, Mängel).',
            '**Forschung:** Wissenschaftliche Diagramme und Schaubilder analysieren.',
          ],
        },
        performance: {
          title: 'Performance und Einschränkungen',
          content: [
            '**Genauigkeit:** Gut für Dokumenten-OCR und Beschreibung, aber nicht perfekt für detaillierte Analysen oder kleine Objekte.',
            '**Geschwindigkeit:** 2-5 Sekunden pro Bild. Cloud-Modelle (GPT-4 Vision) sind 10-50× schneller.',
            '**Bildgröße:** Unterstützt bis zu etwa 1.000×1.000 Pixel. Größere Bilder werden herunterskaliert.',
            '**Einschränkungen:** Können GPT-4 Vision-Genauigkeit bei komplexen Szenen nicht erreichen. Kompromiss: Datenschutz vs. Qualität.',
          ],
        },
        commonMistakes: {
          title: 'Häufige Fehler',
          items: [
            '**Erwarten Sie die Genauigkeit von GPT-4 Vision.** Lokale Modelle sind 20-30% weniger genau. Verwenden Sie für spezifische Domänen, nicht für allgemeine Vision.',
            '**Bilder nicht vorbereiten.** Schneiden Sie Bilder auf den Fokusbereich zu. Entfernen Sie Rauschen. Bessere Eingabe = bessere Ausgabe.',
            '**7B-Modelle für komplexe Vision verwenden.** Kleine Modelle kämpfen mit subtilen Details. Verwenden Sie 11B+ für zuverlässige Vision.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Literatur',
          items: [
            '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding?lang=de) -- Vision kann bei Code-Verständnis helfen.',
            '[Local RAG 2026](/local-llms/local-rag-2026?lang=de) -- Kombinieren Sie Vision mit RAG für Dokumentenverarbeitung.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            'Llama 3.2 Vision Model Card -- huggingface.co/meta-llama/Llama-3.2-11B-Vision',
            'Qwen2-VL -- github.com/QwenLM/Qwen2-VL',
          ],
        },
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Advanced Techniques',
      title: 'Modèles multimodaux locaux : vision, audio et traitement de texte',
      seoTitle: 'Modèles multimodaux locaux',
      intro: 'Les modèles multimodaux traitent images, texte et audio. Depuis avril 2026, Llama 3.2 Vision, Gemma 3 Vision et Qwen2-VL sont des modèles multimodaux pratiques pour déploiement local. Ils activent OCR de documents, analyse d\'images et question-réponse visuelle sans API cloud.',
      metaDescription: 'Modèles multimodaux locaux 2026 : vision, traitement d\'images, OCR, modèles audio. Guides LLaVA, Qwen-VL avec cas d\'usage.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Les modèles multimodaux traitent images, texte et audio. Depuis avril 2026, Llama 3.2 Vision, Gemma 3 Vision et Qwen2-VL sont des modèles multimodaux pratiques pour déploiement local.**',
      audience: 'Débutants exécutant leur premier LLM local sur matériel grand public',
      readTime: '10 min de lecture',
      educationalLevel: 'Intermediate to Advanced',
      primaryTerm: 'modèles multimodaux',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Modèles multimodaux disponibles', anchor: '#models' },
        { label: 'Capacités de vision', anchor: '#vision' },
        { label: 'Installation et utilisation', anchor: '#setup' },
        { label: 'Cas d\'usage réels', anchor: '#use-cases' },
        { label: 'Performance et limitations', anchor: '#performance' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Lectures complémentaires', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Multimodal = texte + images (+ audio).** Traitez images nativement sans prétraitement OCR.',
            '**Meilleurs modèles (2026) :** Llama 3.2 Vision 11B, Qwen2-VL 7B, Gemma 3 Vision 9B.',
            '**Cas d\'usage :** OCR de documents, analyse d\'images, question-réponse visuelle, extraction de tableaux.',
            '**Vitesse :** 2-5 secondes par image (modèle 11B). Plus lent que texte seul, mais pratique.',
            'Depuis avril 2026, multimodal est mature pour cas d\'usage spécifiques, pas encore général.',
          ],
        },
        models: {
          title: 'Modèles multimodaux disponibles (avril 2026)',
          rows: [
            { 'Modèle': 'Llama 3.2 Vision 11B', 'Support d\'image': 'Oui', 'VRAM': '8 GB', 'Vitesse': '3-5 sec/image', 'Idéal pour': 'Vision générale' },
            { 'Modèle': 'Qwen2-VL 7B', 'Support d\'image': 'Oui', 'VRAM': '5 GB', 'Vitesse': '2-3 sec/image', 'Idéal pour': 'Vision rapide' },
            { 'Modèle': 'Gemma 3 Vision 9B', 'Support d\'image': 'Oui', 'VRAM': '6 GB', 'Vitesse': '3 sec/image', 'Idéal pour': 'Équilibré' },
            { 'Modèle': 'Llama 3.2 Vision 90B', 'Support d\'image': 'Oui', 'VRAM': '55 GB', 'Vitesse': '10+ sec/image', 'Idéal pour': 'Haute qualité' },
          ],
          columns: ['Modèle', 'Support d\'image', 'VRAM', 'Vitesse par image', 'Idéal pour'],
        },
        vision: {
          title: 'Capacités de vision',
          content: [
            'Les modèles multimodaux peuvent :',
          ],
          items: [
            '**Description d\'images :** Expliquez ce qui figure dans une image.',
            '**OCR (reconnaissance optique de caractères) :** Extrayez texte d\'images (carte de visite, scan de document).',
            '**Question-réponse visuelle :** Répondez à des questions sur images (« Quelle est la marque de la voiture ? »).',
            '**Extraction de tableaux :** Analysez tableaux d\'images en données structurées.',
            '**Analyse de diagrammes :** Interprétez visualisations de données.',
            '**Détection d\'objets :** Identifiez et localisez objets dans images.',
          ],
        },
        setup: {
          title: 'Installation et utilisation',
          content: 'Utilisation de Llama 3.2 Vision avec Ollama :',
          codeBlock: '# Pull the model\nollama pull llama3.2-vision:11b\n\n# Use it\nfrom ollama import Client\nclient = Client()\n\nwith open("image.jpg", "rb") as f:\n    image_data = f.read()\n\nresponse = client.generate(\n  model="llama3.2-vision:11b",\n  prompt="Describe this image",\n  images=[image_data]  # Pass image data\n)\n\nprint(response["response"])',
          codeLanguage: 'python',
        },
        useCases: {
          title: 'Cas d\'usage réels',
          items: [
            '**Traitement de documents :** Extrayez texte de PDFs numérisés sans service OCR externe.',
            '**Modération de contenu :** Signalez images inappropriées sans envoyer vers le cloud.',
            '**Accessibilité :** Décrivez images pour utilisateurs malvoyants.',
            '**Analyse de produits :** Analysez images produits en e-commerce (catégorie, état, défauts).',
            '**Recherche :** Analysez diagrammes et graphiques scientifiques.',
          ],
        },
        performance: {
          title: 'Performance et limitations',
          content: [
            '**Précision :** Bonne pour OCR de documents et description, mais pas parfaite pour analyse détaillée ou petits objets.',
            '**Vitesse :** 2-5 secondes par image. Modèles cloud (GPT-4 Vision) sont 10-50× plus rapides.',
            '**Taille d\'image :** Supporte jusqu\'à ~1000×1000 pixels. Images plus larges sont réduites.',
            '**Limitations :** Ne peut égaler précision GPT-4 Vision sur scènes complexes. Compromis : confidentialité vs. qualité.',
          ],
        },
        commonMistakes: {
          title: 'Erreurs courantes',
          items: [
            '**Attendre précision de GPT-4 Vision.** Modèles locaux sont 20-30% moins précis. Utilisez pour domaines spécifiques, pas vision générale.',
            '**Ne pas préparer images.** Recadrez images vers zone focale. Supprimez bruit. Meilleure entrée = meilleure sortie.',
            '**Utiliser modèles 7B pour vision complexe.** Petits modèles peinent sur détails subtils. Utilisez 11B+ pour vision fiable.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures complémentaires',
          items: [
            '[Meilleurs LLMs locaux pour coding](/local-llms/best-local-llms-for-coding?lang=fr) -- Vision peut aider compréhension code.',
            '[RAG local 2026](/local-llms/local-rag-2026?lang=fr) -- Combinez vision avec RAG pour traitement documents.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Llama 3.2 Vision Model Card -- huggingface.co/meta-llama/Llama-3.2-11B-Vision',
            'Qwen2-VL -- github.com/QwenLM/Qwen2-VL',
          ],
        },
      },
    },
    ja: {
      freshness_tier: 'semi_annual',
      theme: 'Advanced Techniques',
      title: 'マルチモーダルローカルLLM: ビジョン、オーディオ、テキスト処理',
      seoTitle: 'マルチモーダルローカルLLM',
      intro: 'マルチモーダルモデルは画像、テキスト、オーディオを処理します。2026年4月現在、Llama 3.2 Vision、Gemma 3 Vision、Qwen2-VLはローカル展開に実用的なマルチモーダルモデルです。クラウドAPIなしでドキュメントOCR、画像分析、視覚的質問応答が可能です。',
      metaDescription: 'マルチモーダルローカルLLM 2026: ビジョン、画像処理、OCR、オーディオモデル。LLaVA、Qwen-VLガイドと使用例。',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**マルチモーダルモデルは画像、テキスト、オーディオを処理します。2026年4月現在、Llama 3.2 Vision、Gemma 3 Vision、Qwen2-VLはローカル展開に実用的なマルチモーダルモデルです。**',
      audience: 'コンシューマーハードウェアで初めてのローカルLLMを実行する初心者',
      readTime: '10分の読了',
      educationalLevel: 'Intermediate to Advanced',
      primaryTerm: 'マルチモーダルモデル',
      toc: [
        { label: '重要なポイント', anchor: '#key-takeaways' },
        { label: '利用可能なマルチモーダルモデル', anchor: '#models' },
        { label: 'ビジョン機能', anchor: '#vision' },
        { label: 'セットアップと使用', anchor: '#setup' },
        { label: '実世界の使用例', anchor: '#use-cases' },
        { label: 'パフォーマンスと制限', anchor: '#performance' },
        { label: 'よくある間違い', anchor: '#common-mistakes' },
        { label: '関連記事', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**マルチモーダル = テキスト + 画像 (+ オーディオ)。** OCR前処理なしで画像をネイティブに処理します。',
            '**最適なモデル (2026年):** Llama 3.2 Vision 11B、Qwen2-VL 7B、Gemma 3 Vision 9B。',
            '**使用例:** ドキュメントOCR、画像分析、視覚的Q&A、表抽出。',
            '**速度:** 画像あたり2-5秒（11Bモデル）。テキストのみより遅いが実用的。',
            '2026年4月現在、マルチモーダルは特定の使用例に成熟していますが、まだ汎用的ではありません。',
          ],
        },
        models: {
          title: '利用可能なマルチモーダルモデル (2026年4月)',
          rows: [
            { 'モデル': 'Llama 3.2 Vision 11B', '画像サポート': 'はい', 'VRAM': '8 GB', '速度': '3-5秒/画像', '最適用途': '汎用ビジョン' },
            { 'モデル': 'Qwen2-VL 7B', '画像サポート': 'はい', 'VRAM': '5 GB', '速度': '2-3秒/画像', '最適用途': '高速ビジョン' },
            { 'モデル': 'Gemma 3 Vision 9B', '画像サポート': 'はい', 'VRAM': '6 GB', '速度': '3秒/画像', '最適用途': 'バランス型' },
            { 'モデル': 'Llama 3.2 Vision 90B', '画像サポート': 'はい', 'VRAM': '55 GB', '速度': '10+秒/画像', '最適用途': '高品質' },
          ],
          columns: ['モデル', '画像サポート', 'VRAM', '画像あたりの速度', '最適用途'],
        },
        vision: {
          title: 'ビジョン機能',
          content: [
            'マルチモーダルモデルは以下が可能です:',
          ],
          items: [
            '**画像説明:** 画像に何が含まれているかを説明します。',
            '**OCR (光学文字認識):** 画像からテキストを抽出 (名刺、スキャンドキュメント)。',
            '**視覚的Q&A:** 画像についての質問に回答 (「車のブランドは何ですか？」)。',
            '**表抽出:** 画像から表を構造化データに変換。',
            '**グラフ分析:** データビジュアライゼーションを解釈。',
            '**物体検出:** 画像内の物体を識別して配置。',
          ],
        },
        setup: {
          title: 'セットアップと使用',
          content: 'Ollama でLlama 3.2 Visionを使用:',
          codeBlock: '# Pull the model\nollama pull llama3.2-vision:11b\n\n# Use it\nfrom ollama import Client\nclient = Client()\n\nwith open("image.jpg", "rb") as f:\n    image_data = f.read()\n\nresponse = client.generate(\n  model="llama3.2-vision:11b",\n  prompt="Describe this image",\n  images=[image_data]  # Pass image data\n)\n\nprint(response["response"])',
          codeLanguage: 'python',
        },
        useCases: {
          title: '実世界の使用例',
          items: [
            '**ドキュメント処理:** 外部OCRサービスなしでスキャンされたPDFからテキストを抽出。',
            '**コンテンツモデレーション:** クラウドに送信せず不適切な画像にフラグを立てます。',
            '**アクセシビリティ:** 視覚障害者ユーザーのために画像を説明。',
            '**製品分析:** eコマースで製品画像を分析 (カテゴリー、状態、欠陥)。',
            '**研究:** 科学図表やダイアグラムを分析。',
          ],
        },
        performance: {
          title: 'パフォーマンスと制限',
          content: [
            '**精度:** ドキュメントOCRと説明には適していますが、詳細な分析や小さな物体には完全ではありません。',
            '**速度:** 画像あたり2-5秒。クラウドモデル (GPT-4 Vision) は10-50倍高速です。',
            '**画像サイズ:** 最大 ~1000×1000ピクセルをサポート。より大きな画像はダウンサンプリングされます。',
            '**制限:** 複雑なシーンではGPT-4 Vision精度と同等にはできません。トレードオフ: プライバシー対品質。',
          ],
        },
        commonMistakes: {
          title: 'よくある間違い',
          items: [
            '**GPT-4 Visionの精度を期待する。** ローカルモデルは20-30%精度が低い。汎用ビジョンではなく、特定の領域に使用します。',
            '**画像を準備しない。** 画像をフォーカス領域にトリミングします。ノイズを除去します。入力が良い = 出力が良い。',
            '**複雑なビジョンに7Bモデルを使用する。** 小さいモデルは微細な詳細で苦しみます。信頼できるビジョンには11B+を使用します。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連記事',
          items: [
            '[コーディング用最適なローカルLLM](/local-llms/best-local-llms-for-coding?lang=ja) -- ビジョンはコード理解に役立ちます。',
            '[ローカルRAG 2026](/local-llms/local-rag-2026?lang=ja) -- ビジョンをRAGと組み合わせてドキュメント処理。',
          ],
        },
        sources: {
          id: 'sources',
          title: 'ソース',
          items: [
            'Llama 3.2 Vision Model Card -- huggingface.co/meta-llama/Llama-3.2-11B-Vision',
            'Qwen2-VL -- github.com/QwenLM/Qwen2-VL',
          ],
        },
      },
    },
    zh: {
      freshness_tier: 'semi_annual',
      theme: 'Advanced Techniques',
      title: '多模态本地LLM：视觉、音频和文本处理',
      seoTitle: '多模态本地LLM',
      intro: '多模态模型处理图像、文本和音频。截至2026年4月，Llama 3.2 Vision、Gemma 3 Vision和Qwen2-VL是实用的本地部署多模态模型。它们支持文档OCR、图像分析和视觉问答，无需云API。',
      metaDescription: '多模态本地LLM 2026: 视觉、图像处理、OCR、音频模型。LLaVA、Qwen-VL指南和用例。',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**多模态模型处理图像、文本和音频。截至2026年4月，Llama 3.2 Vision、Gemma 3 Vision和Qwen2-VL是实用的本地部署多模态模型。**',
      audience: '在消费级硬件上运行首个本地LLM的初学者',
      readTime: '10分钟阅读',
      educationalLevel: 'Intermediate to Advanced',
      primaryTerm: '多模态模型',
      toc: [
        { label: '关键要点', anchor: '#key-takeaways' },
        { label: '可用的多模态模型', anchor: '#models' },
        { label: '视觉能力', anchor: '#vision' },
        { label: '设置和使用', anchor: '#setup' },
        { label: '真实世界用例', anchor: '#use-cases' },
        { label: '性能和限制', anchor: '#performance' },
        { label: '常见错误', anchor: '#common-mistakes' },
        { label: '相关阅读', anchor: '#related-reading' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**多模态 = 文本 + 图像 (+ 音频)。** 无需OCR预处理即可本机处理图像。',
            '**最佳模型 (2026年)：** Llama 3.2 Vision 11B、Qwen2-VL 7B、Gemma 3 Vision 9B。',
            '**用例：** 文档OCR、图像分析、视觉问答、表格提取。',
            '**速度：** 每张图像2-5秒（11B模型）。比纯文本慢，但实用。',
            '截至2026年4月，多模态对特定用例已成熟，但尚未通用。',
          ],
        },
        models: {
          title: '可用的多模态模型 (2026年4月)',
          rows: [
            { '模型': 'Llama 3.2 Vision 11B', '图像支持': '是', 'VRAM': '8 GB', '速度': '3-5秒/图像', '最适用': '通用视觉' },
            { '模型': 'Qwen2-VL 7B', '图像支持': '是', 'VRAM': '5 GB', '速度': '2-3秒/图像', '最适用': '快速视觉' },
            { '模型': 'Gemma 3 Vision 9B', '图像支持': '是', 'VRAM': '6 GB', '速度': '3秒/图像', '最适用': '均衡' },
            { '模型': 'Llama 3.2 Vision 90B', '图像支持': '是', 'VRAM': '55 GB', '速度': '10+秒/图像', '最适用': '高质量' },
          ],
          columns: ['模型', '图像支持', 'VRAM', '每张图像速度', '最适用'],
        },
        vision: {
          title: '视觉能力',
          content: [
            '多模态模型可以：',
          ],
          items: [
            '**图像描述：** 解释图像中的内容。',
            '**OCR (光学字符识别)：** 从图像提取文本（名片、文档扫描）。',
            '**视觉问答：** 回答有关图像的问题（"这辆车的品牌是什么？"）。',
            '**表格提取：** 将图像中的表格解析为结构化数据。',
            '**图表分析：** 解读数据可视化。',
            '**物体检测：** 识别和定位图像中的物体。',
          ],
        },
        setup: {
          title: '设置和使用',
          content: '使用Ollama运行Llama 3.2 Vision：',
          codeBlock: '# Pull the model\nollama pull llama3.2-vision:11b\n\n# Use it\nfrom ollama import Client\nclient = Client()\n\nwith open("image.jpg", "rb") as f:\n    image_data = f.read()\n\nresponse = client.generate(\n  model="llama3.2-vision:11b",\n  prompt="Describe this image",\n  images=[image_data]  # Pass image data\n)\n\nprint(response["response"])',
          codeLanguage: 'python',
        },
        useCases: {
          title: '真实世界用例',
          items: [
            '**文档处理：** 无需外部OCR服务从扫描PDF提取文本。',
            '**内容审核：** 标记不适当的图像，无需发送到云端。',
            '**无障碍：** 为视障用户描述图像。',
            '**产品分析：** 分析电商产品图像（类别、状态、缺陷）。',
            '**研究：** 分析科学图表和图解。',
          ],
        },
        performance: {
          title: '性能和限制',
          content: [
            '**准确性：** 适合文档OCR和描述，但不完美用于详细分析或小物体。',
            '**速度：** 每张图像2-5秒。云模型（GPT-4 Vision）快10-50倍。',
            '**图像大小：** 支持~1000×1000像素。更大的图像将被缩小采样。',
            '**限制：** 复杂场景下无法匹配GPT-4 Vision准确性。权衡：隐私对质量。',
          ],
        },
        commonMistakes: {
          title: '常见错误',
          items: [
            '**期望GPT-4 Vision的准确性。** 本地模型准确性低20-30%。用于特定领域，不是通用视觉。',
            '**不准备图像。** 将图像裁剪到焦点区域。去除噪声。更好的输入 = 更好的输出。',
            '**使用7B模型处理复杂视觉。** 小模型在微妙细节上困难重重。使用11B+获得可靠视觉。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[编码最佳本地LLM](/local-llms/best-local-llms-for-coding?lang=zh) -- 视觉可以帮助代码理解。',
            '[本地RAG 2026](/local-llms/local-rag-2026?lang=zh) -- 将视觉与RAG结合进行文档处理。',
          ],
        },
        sources: {
          id: 'sources',
          title: '来源',
          items: [
            'Llama 3.2 Vision Model Card -- huggingface.co/meta-llama/Llama-3.2-11B-Vision',
            'Qwen2-VL -- github.com/QwenLM/Qwen2-VL',
          ],
        },
      },
    },
  };
