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
  };
