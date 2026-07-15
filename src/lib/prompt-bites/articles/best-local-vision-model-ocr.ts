import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Capability Picks',
    title: 'Best Local Vision Model for OCR?',
    seoTitle: 'Best Local Vision Model for OCR | Prompt Bites',
    metaDescription: 'A quick guide to picking a local vision-language model for OCR: what actually determines accuracy on documents, and how document-specialized models differ from general multimodal chat models.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers picking a local vision-language model for OCR and document-reading tasks',
    siblingBites: ['best-structured-json-output-local-llm', 'best-local-llm-for-sql-data-analysis'],
    is_living_page: false,
    leadAnswerBlock: '<strong>The best local vision model for OCR is a multimodal model specifically fine-tuned on document and text-in-image data, not a general-purpose captioning model.</strong> A general vision-language model can describe a photo well but often struggles with small, dense, or rotated text — a document-specialized fine-tune trained on scanned forms, receipts, and multi-column layouts performs noticeably better on exactly that content.',
    quickAnswerTop: {
      en: {
        question: 'What should you look for in a local vision model for OCR?',
        answer: 'Prioritize models that support high native image resolution (documents need far more detail than a typical photo), were fine-tuned on document-specific data rather than general captions, and can return structured output (bounding boxes or JSON) instead of only plain text.',
        bullets: [
          'Native resolution handling matters more than parameter count for small or dense text',
          'Document-specialized fine-tunes outperform general-purpose vision models on scans and forms',
          'Structured output support (JSON, bounding boxes) matters if you need layout, not just text',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A model must be multimodal (vision-language) to read text in images at all — a text-only local LLM cannot process image input regardless of size',
          'Document-specialized vision fine-tunes consistently beat general-purpose multimodal chat models on dense, small, or rotated text',
          'Native image resolution support matters more for OCR accuracy than raw parameter count',
          'If you need table structure or form fields back as JSON, confirm the model supports structured output before picking it — plain-text transcription alone is not enough for downstream automation',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'The best local vision model for OCR is a document-specialized multimodal fine-tune, not a general-purpose captioning model.' },
          { type: 'plain-terms', text: 'In plain terms: pick a vision model trained specifically on scanned documents and forms, not one only trained to describe photos — it will read small or messy text far more reliably.' },
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: 'What to Look For in an OCR-Capable Vision Model',
        content: [
          '<strong>Resolution handling is the single biggest factor in OCR accuracy.</strong> Most vision-language models downscale input images to a fixed, relatively small resolution before processing — fine for describing a photo, but disastrous for reading an 8-point font in a scanned invoice. Models built for document work typically support higher native resolution or tile large images into sections, preserving enough detail to read small text.',
          'Training data matters as much as architecture. A model trained mostly on natural photos and captions learns to recognize objects and scenes, not to transcribe dense text accurately. A model fine-tuned on scanned documents, receipts, forms, and multi-column layouts learns the specific skill of reading structured text under real-world scan conditions — skew, low contrast, handwriting mixed with print.',
          'Multilingual script coverage varies significantly between models. If your documents mix scripts (e.g., Latin text with another writing system in the same image), verify the model was trained on multilingual document data specifically, not just multilingual chat data — chat-focused multilingual training doesn\'t guarantee strong text-in-image recognition for the same languages.',
        ],
      },
      modelClasses: {
        id: 'model-classes',
        title: 'Three Classes of OCR-Capable Tools to Compare',
        content: [
          'Before picking a specific model, decide which class fits your workload — the tradeoffs are different enough that the "best" pick depends heavily on what you actually need.',
        ],
        items: [
          '**Document-specialized vision fine-tunes:** trained specifically on scanned documents, forms, and receipts. Best raw OCR accuracy on dense or low-quality scans; the model has effectively practiced this exact task. Worse general conversational ability if you also want to use it for other tasks.',
          '**General-purpose multimodal chat models:** handle OCR as one capability among many. Convenient if you already run one for other tasks, but consistently less accurate on small, rotated, or low-contrast text than a document-specialized fine-tune — expect noticeably more transcription errors on real scans.',
          '**Dedicated OCR pipelines (non-LLM):** traditional text-detection-plus-recognition engines paired with layout analysis. Fastest and cheapest per page, and often more accurate on clean, well-lit scans of standard fonts. Can\'t reason about the content the way a vision-language model can — no summarizing, no answering questions about a form, no restructuring extracted fields.',
          'For a hands-on setup walkthrough of running one specific document-OCR-capable vision model locally, see [Document OCR with a Local Vision Model — Setup Guide](/local-llms/run-qwen-vl-locally-2026).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can a general-purpose local LLM read text in images?',
            a: 'Only if it is multimodal (vision-language). A text-only LLM cannot process image input at all, regardless of parameter count — it needs a vision encoder attached and trained alongside the language model to accept images as input.',
          },
          {
            q: 'How much VRAM does a local OCR-capable vision model need?',
            a: 'Roughly the same as a text-only model of the same parameter count, plus extra headroom for image tokens. Budget 1–2 GB more VRAM than the text-only figure quoted for that model size, and more if you process high-resolution images or multiple pages in one request.',
          },
          {
            q: 'Does image resolution actually affect OCR accuracy that much?',
            a: 'Yes, significantly. A model that downscales your document to a low fixed resolution before processing will lose the fine detail needed to read small text, even if the model itself is otherwise capable. Check whether a model supports high native resolution or image tiling before relying on it for dense documents.',
          },
          {
            q: 'Can these models output structured data like tables or JSON instead of plain text?',
            a: 'Some can, if trained or prompted for it — this is a separate capability from raw text recognition. See our guide on getting reliable structured JSON output from a local LLM for the prompting and constrained-decoding techniques that make this reliable.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Reading',
        items: [
          '[Best Structured JSON Output From a Local LLM](/prompt-bites/best-structured-json-output-local-llm) — techniques for getting reliable structured data, not just plain text',
          '[Best Local LLM for SQL & Data Analysis](/prompt-bites/best-local-llm-for-sql-data-analysis) — picking a model for structured data tasks downstream of OCR',
        ],
      },
    },
  },
  de: {
    theme: 'Model Capability Picks',
    title: "Bestes lokales Vision-Modell für OCR?",
    seoTitle: "Bestes lokales Vision-Modell für OCR | Prompt Bites",
    metaDescription: "Ein kurzer Leitfaden zur Auswahl eines lokalen Vision-Language-Modells für OCR: Was die Genauigkeit bei Dokumenten wirklich bestimmt und wie sich dokumentenspezialisierte Modelle von allgemeinen multimodalen Chat-Modellen unterscheiden.",
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "Entwickler, die ein lokales Vision-Language-Modell für OCR- und Dokumentenlese-Aufgaben auswählen",
    siblingBites: ['best-structured-json-output-local-llm', 'best-local-llm-for-sql-data-analysis'],
    is_living_page: false,
    leadAnswerBlock: "<strong>Das beste lokale Vision-Modell für OCR ist ein multimodales Modell, das speziell auf Dokumente und Text-in-Bild-Daten feinabgestimmt wurde, kein allgemeines Bildbeschreibungsmodell.</strong> Ein allgemeines Vision-Language-Modell kann ein Foto gut beschreiben, hat aber oft Schwierigkeiten mit kleinem, dichtem oder gedrehtem Text — ein dokumentenspezialisiertes Modell, das mit gescannten Formularen, Quittungen und mehrspaltigen Layouts trainiert wurde, schneidet bei genau diesen Inhalten spürbar besser ab.",
    quickAnswerTop: {
      de: {
        question: "Worauf sollten Sie bei einem lokalen Vision-Modell für OCR achten?",
        answer: "Bevorzugen Sie Modelle, die eine hohe native Bildauflösung unterstützen (Dokumente benötigen weit mehr Detail als ein typisches Foto), die auf dokumentenspezifischen Daten statt auf allgemeinen Bildbeschreibungen feinabgestimmt wurden und strukturierte Ausgaben (Bounding Boxes oder JSON) statt nur reinen Text liefern können.",
        bullets: [
          "Native Auflösungsverarbeitung ist für kleinen oder dichten Text wichtiger als die Parameteranzahl",
          "Dokumentenspezialisierte Feinabstimmungen übertreffen allgemeine Vision-Modelle bei Scans und Formularen",
          "Unterstützung für strukturierte Ausgaben (JSON, Bounding Boxes) ist wichtig, wenn Sie Layout und nicht nur Text benötigen",
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Ein Modell muss multimodal (Vision-Language) sein, um überhaupt Text in Bildern lesen zu können — ein reines Text-LLM kann unabhängig von seiner Größe keine Bildeingaben verarbeiten",
          "Dokumentenspezialisierte Vision-Feinabstimmungen schlagen bei dichtem, kleinem oder gedrehtem Text durchgängig allgemeine multimodale Chat-Modelle",
          "Die Unterstützung nativer Bildauflösung ist für die OCR-Genauigkeit wichtiger als die reine Parameteranzahl",
          "Wenn Sie Tabellenstrukturen oder Formularfelder als JSON zurückbekommen möchten, prüfen Sie vor der Auswahl, ob das Modell strukturierte Ausgaben unterstützt — reine Texttranskription allein reicht für nachgelagerte Automatisierung nicht aus",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "Das beste lokale Vision-Modell für OCR ist ein dokumentenspezialisiertes multimodales Modell, kein allgemeines Bildbeschreibungsmodell." },
          { type: 'plain-terms', text: "In einfachen Worten: Wählen Sie ein Vision-Modell, das speziell auf gescannte Dokumente und Formulare trainiert wurde, nicht eines, das nur Fotos beschreiben kann — es liest kleinen oder unordentlichen Text deutlich zuverlässiger." },
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: "Worauf Sie bei einem OCR-fähigen Vision-Modell achten sollten",
        content: [
          "<strong>Die Auflösungsverarbeitung ist der wichtigste Einzelfaktor für die OCR-Genauigkeit.</strong> Die meisten Vision-Language-Modelle skalieren Eingabebilder vor der Verarbeitung auf eine feste, relativ niedrige Auflösung herunter — für die Beschreibung eines Fotos in Ordnung, aber verheerend für das Lesen einer 8-Punkt-Schrift auf einer gescannten Rechnung. Für Dokumentenarbeit entwickelte Modelle unterstützen in der Regel eine höhere native Auflösung oder zerlegen große Bilder in Kacheln, um genug Detail für kleinen Text zu erhalten.",
          "Die Trainingsdaten sind ebenso wichtig wie die Architektur. Ein Modell, das überwiegend mit natürlichen Fotos und Bildbeschreibungen trainiert wurde, lernt, Objekte und Szenen zu erkennen, nicht dichten Text präzise zu transkribieren. Ein Modell, das auf gescannten Dokumenten, Quittungen, Formularen und mehrspaltigen Layouts feinabgestimmt wurde, erlernt die spezifische Fähigkeit, strukturierten Text unter realen Scanbedingungen zu lesen — Schräglage, geringer Kontrast, handschriftlicher Text vermischt mit Druckschrift.",
          "Die Abdeckung mehrsprachiger Schriftsysteme unterscheidet sich zwischen Modellen erheblich. Wenn Ihre Dokumente Schriftsysteme mischen (z. B. lateinischer Text zusammen mit einem anderen Schriftsystem im selben Bild), prüfen Sie, ob das Modell speziell mit mehrsprachigen Dokumentdaten trainiert wurde und nicht nur mit mehrsprachigen Chat-Daten — mehrsprachiges Chat-Training garantiert keine starke Texterkennung in Bildern für dieselben Sprachen.",
        ],
      },
      modelClasses: {
        id: 'model-classes',
        title: "Drei Klassen OCR-fähiger Werkzeuge im Vergleich",
        content: [
          "Bevor Sie ein bestimmtes Modell auswählen, entscheiden Sie, welche Klasse zu Ihrer Arbeitslast passt — die Kompromisse unterscheiden sich stark genug, dass die „beste“ Wahl stark davon abhängt, was Sie tatsächlich benötigen.",
        ],
        items: [
          "**Dokumentenspezialisierte Vision-Feinabstimmungen:** speziell auf gescannten Dokumenten, Formularen und Quittungen trainiert. Beste rohe OCR-Genauigkeit bei dichten oder qualitativ schlechten Scans; das Modell hat diese genaue Aufgabe praktisch geübt. Schlechtere allgemeine Konversationsfähigkeit, wenn Sie es auch für andere Aufgaben nutzen möchten.",
          "**Allgemeine multimodale Chat-Modelle:** behandeln OCR als eine Fähigkeit unter vielen. Praktisch, wenn Sie bereits eines für andere Aufgaben betreiben, aber durchgängig weniger genau bei kleinem, gedrehtem oder kontrastarmem Text als eine dokumentenspezialisierte Feinabstimmung — erwarten Sie spürbar mehr Transkriptionsfehler bei echten Scans.",
          "**Dedizierte OCR-Pipelines (kein LLM):** klassische Kombinationen aus Texterkennung und -zuordnung gepaart mit Layoutanalyse. Am schnellsten und günstigsten pro Seite und oft genauer bei sauberen, gut beleuchteten Scans mit Standardschriften. Kann Inhalte nicht so verstehen wie ein Vision-Language-Modell — kein Zusammenfassen, kein Beantworten von Fragen zu einem Formular, kein Umstrukturieren extrahierter Felder.",
          "Eine praktische Einrichtungsanleitung für den lokalen Betrieb eines bestimmten dokumenten-OCR-fähigen Vision-Modells finden Sie unter [Dokument-OCR mit einem lokalen Vision-Modell — Einrichtungsanleitung](/de/local-llms/run-qwen-vl-locally-2026).",
        ],
      },
      faq: {
        id: 'faq',
        title: "Häufig gestellte Fragen",
        faqs: [
          {
            q: "Kann ein allgemeines lokales LLM Text in Bildern lesen?",
            a: "Nur wenn es multimodal ist (Vision-Language). Ein reines Text-LLM kann unabhängig von der Parameteranzahl überhaupt keine Bildeingaben verarbeiten — es benötigt einen Vision-Encoder, der zusammen mit dem Sprachmodell trainiert wurde, um Bilder als Eingabe zu akzeptieren.",
          },
          {
            q: "Wie viel VRAM benötigt ein lokales OCR-fähiges Vision-Modell?",
            a: "Ungefähr so viel wie ein reines Textmodell derselben Parameteranzahl, plus zusätzlichen Spielraum für Bild-Tokens. Kalkulieren Sie 1–2 GB mehr VRAM ein als den für die reine Textvariante dieser Modellgröße angegebenen Wert, und mehr, wenn Sie hochauflösende Bilder oder mehrere Seiten in einer Anfrage verarbeiten.",
          },
          {
            q: "Beeinflusst die Bildauflösung die OCR-Genauigkeit wirklich so stark?",
            a: "Ja, erheblich. Ein Modell, das Ihr Dokument vor der Verarbeitung auf eine niedrige feste Auflösung herunterskaliert, verliert das feine Detail, das zum Lesen kleinen Textes nötig ist, selbst wenn das Modell selbst ansonsten leistungsfähig ist. Prüfen Sie vor dem Einsatz bei dichten Dokumenten, ob ein Modell eine hohe native Auflösung oder Bildkachelung unterstützt.",
          },
          {
            q: "Können diese Modelle strukturierte Daten wie Tabellen oder JSON statt reinen Text ausgeben?",
            a: "Manche können das, wenn sie entsprechend trainiert oder angewiesen wurden — das ist eine eigenständige Fähigkeit, getrennt von der reinen Texterkennung. Weitere Prompting- und Constrained-Decoding-Techniken, die dies zuverlässig machen, finden Sie in unserem Leitfaden zu zuverlässiger strukturierter JSON-Ausgabe aus einem lokalen LLM.",
          },
        ],
      },
      relatedReading: {
        title: "Weiterführende Themen",
        items: [
          "[Beste strukturierte JSON-Ausgabe aus einem lokalen LLM](/de/prompt-bites/best-structured-json-output-local-llm) — Techniken für zuverlässige strukturierte Daten, nicht nur reinen Text",
          "[Bestes lokales LLM für SQL & Datenanalyse](/de/prompt-bites/best-local-llm-for-sql-data-analysis) — Auswahl eines Modells für nachgelagerte strukturierte Datenaufgaben nach OCR",
        ],
      },
    },
  },
  fr: {
    theme: 'Model Capability Picks',
    title: "Quel est le meilleur modèle de vision local pour l'OCR ?",
    seoTitle: "Meilleur modèle de vision local pour l'OCR | Prompt Bites",
    metaDescription: "Un guide rapide pour choisir un modèle de vision-langage local pour l'OCR : ce qui détermine réellement la précision sur les documents, et en quoi les modèles spécialisés dans les documents diffèrent des modèles de chat multimodaux généralistes.",
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "Développeurs choisissant un modèle de vision-langage local pour l'OCR et la lecture de documents",
    siblingBites: ['best-structured-json-output-local-llm', 'best-local-llm-for-sql-data-analysis'],
    is_living_page: false,
    leadAnswerBlock: "<strong>Le meilleur modèle de vision local pour l'OCR est un modèle multimodal spécifiquement affiné sur des données de documents et de texte dans l'image, pas un modèle de légendage généraliste.</strong> Un modèle de vision-langage généraliste peut bien décrire une photo, mais peine souvent avec du texte petit, dense ou pivoté — un modèle spécialisé, affiné sur des formulaires scannés, des reçus et des mises en page multi-colonnes, obtient des résultats nettement meilleurs sur ce type de contenu précis.",
    quickAnswerTop: {
      fr: {
        question: "Que rechercher dans un modèle de vision local pour l'OCR ?",
        answer: "Privilégiez les modèles qui prennent en charge une résolution d'image native élevée (les documents nécessitent bien plus de détail qu'une photo classique), qui ont été affinés sur des données spécifiques aux documents plutôt que sur des légendes génériques, et qui peuvent renvoyer une sortie structurée (zones de délimitation ou JSON) au lieu de simple texte brut.",
        bullets: [
          "La gestion de la résolution native compte plus que le nombre de paramètres pour le texte petit ou dense",
          "Les modèles spécialisés dans les documents surpassent les modèles de vision généralistes sur les scans et formulaires",
          "La prise en charge de sorties structurées (JSON, zones de délimitation) compte si vous avez besoin de la mise en page, pas seulement du texte",
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Un modèle doit être multimodal (vision-langage) pour lire du texte dans une image — un LLM purement textuel ne peut traiter aucune entrée image, quelle que soit sa taille",
          "Les modèles de vision spécialisés dans les documents surpassent systématiquement les modèles de chat multimodaux généralistes sur du texte dense, petit ou pivoté",
          "La prise en charge de la résolution d'image native compte plus pour la précision OCR que le nombre brut de paramètres",
          "Si vous avez besoin de récupérer la structure d'un tableau ou des champs de formulaire en JSON, vérifiez que le modèle prend en charge une sortie structurée avant de le choisir — la simple transcription en texte brut ne suffit pas pour l'automatisation en aval",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "Le meilleur modèle de vision local pour l'OCR est un modèle multimodal spécialisé dans les documents, pas un modèle de légendage généraliste." },
          { type: 'plain-terms', text: "En clair : choisissez un modèle de vision entraîné spécifiquement sur des documents et formulaires scannés, pas un modèle entraîné uniquement à décrire des photos — il lira le texte petit ou désordonné de façon bien plus fiable." },
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: "Que rechercher dans un modèle de vision compatible OCR",
        content: [
          "<strong>La gestion de la résolution est le facteur individuel le plus déterminant pour la précision OCR.</strong> La plupart des modèles de vision-langage réduisent l'image d'entrée à une résolution fixe et relativement basse avant traitement — acceptable pour décrire une photo, mais désastreux pour lire une police de 8 points sur une facture scannée. Les modèles conçus pour le travail documentaire prennent généralement en charge une résolution native plus élevée ou découpent les grandes images en sections, en conservant assez de détail pour lire du texte petit.",
          "Les données d'entraînement comptent autant que l'architecture. Un modèle entraîné principalement sur des photos naturelles et des légendes apprend à reconnaître des objets et des scènes, pas à transcrire du texte dense avec précision. Un modèle affiné sur des documents scannés, des reçus, des formulaires et des mises en page multi-colonnes acquiert la compétence spécifique de lire du texte structuré dans des conditions de numérisation réelles — inclinaison, faible contraste, écriture manuscrite mêlée à du texte imprimé.",
          "La couverture des systèmes d'écriture multilingues varie sensiblement d'un modèle à l'autre. Si vos documents mélangent plusieurs systèmes d'écriture (par exemple du texte latin avec un autre système dans la même image), vérifiez que le modèle a été entraîné spécifiquement sur des données documentaires multilingues, pas seulement sur des données de chat multilingues — un entraînement multilingue axé sur le chat ne garantit pas une bonne reconnaissance de texte dans l'image pour les mêmes langues.",
        ],
      },
      modelClasses: {
        id: 'model-classes',
        title: "Trois classes d'outils compatibles OCR à comparer",
        content: [
          "Avant de choisir un modèle précis, déterminez quelle classe correspond à votre charge de travail — les compromis diffèrent suffisamment pour que le « meilleur » choix dépende fortement de vos besoins réels.",
        ],
        items: [
          "**Modèles de vision spécialisés dans les documents :** entraînés spécifiquement sur des documents scannés, des formulaires et des reçus. Meilleure précision OCR brute sur des scans denses ou de qualité médiocre ; le modèle s'est en pratique entraîné exactement sur cette tâche. Capacité conversationnelle générale moindre si vous souhaitez aussi l'utiliser pour d'autres tâches.",
          "**Modèles de chat multimodaux généralistes :** traitent l'OCR comme une capacité parmi d'autres. Pratiques si vous en utilisez déjà un pour d'autres tâches, mais systématiquement moins précis sur du texte petit, pivoté ou à faible contraste qu'un modèle spécialisé dans les documents — attendez-vous à nettement plus d'erreurs de transcription sur des scans réels.",
          "**Pipelines OCR dédiés (non-LLM) :** moteurs classiques de détection et reconnaissance de texte associés à une analyse de mise en page. Les plus rapides et les moins coûteux par page, et souvent plus précis sur des scans propres et bien éclairés avec des polices standards. Ne peuvent pas raisonner sur le contenu comme un modèle de vision-langage — pas de résumé, pas de réponse à des questions sur un formulaire, pas de restructuration des champs extraits.",
          "Pour un tutoriel pratique de mise en place d'un modèle de vision compatible OCR documentaire en local, consultez [OCR de documents avec un modèle de vision local — guide de mise en place](/fr/local-llms/run-qwen-vl-locally-2026).",
        ],
      },
      faq: {
        id: 'faq',
        title: "Questions fréquentes",
        faqs: [
          {
            q: "Un LLM local généraliste peut-il lire du texte dans des images ?",
            a: "Seulement s'il est multimodal (vision-langage). Un LLM purement textuel ne peut traiter aucune entrée image, quel que soit le nombre de paramètres — il faut un encodeur visuel intégré et entraîné avec le modèle de langage pour accepter des images en entrée.",
          },
          {
            q: "De combien de VRAM un modèle de vision local compatible OCR a-t-il besoin ?",
            a: "Approximativement autant qu'un modèle purement textuel du même nombre de paramètres, plus une marge supplémentaire pour les tokens d'image. Prévoyez 1 à 2 Go de VRAM de plus que le chiffre indiqué pour la version texte seule de cette taille de modèle, davantage si vous traitez des images haute résolution ou plusieurs pages en une seule requête.",
          },
          {
            q: "La résolution de l'image affecte-t-elle vraiment autant la précision OCR ?",
            a: "Oui, significativement. Un modèle qui réduit votre document à une résolution fixe basse avant traitement perdra le détail fin nécessaire pour lire du texte petit, même si le modèle est par ailleurs performant. Vérifiez qu'un modèle prend en charge une résolution native élevée ou le découpage d'image avant de vous y fier pour des documents denses.",
          },
          {
            q: "Ces modèles peuvent-ils produire des données structurées comme des tableaux ou du JSON au lieu de texte brut ?",
            a: "Certains le peuvent, s'ils sont entraînés ou sollicités en ce sens — c'est une capacité distincte de la reconnaissance de texte brute. Consultez notre guide sur l'obtention fiable d'une sortie JSON structurée depuis un LLM local pour les techniques de prompting et de décodage contraint qui la rendent fiable.",
          },
        ],
      },
      relatedReading: {
        title: "Pour aller plus loin",
        items: [
          "[Meilleure sortie JSON structurée depuis un LLM local](/fr/prompt-bites/best-structured-json-output-local-llm) — techniques pour obtenir des données structurées fiables, pas seulement du texte brut",
          "[Meilleur LLM local pour le SQL et l'analyse de données](/fr/prompt-bites/best-local-llm-for-sql-data-analysis) — choisir un modèle pour les tâches de données structurées en aval de l'OCR",
        ],
      },
    },
  },
  ja: {
    theme: 'Model Capability Picks',
    title: "OCRに最適なローカルビジョンモデルは?",
    seoTitle: "OCRに最適なローカルビジョンモデル | Prompt Bites",
    metaDescription: "OCR用のローカルビジョン言語モデルを選ぶための簡潔なガイドです。文書の精度を実際に左右する要因と、文書特化型モデルが汎用マルチモーダルチャットモデルとどう違うかを解説します。",
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "OCRや文書読み取りタスク向けにローカルビジョン言語モデルを選定する開発者",
    siblingBites: ['best-structured-json-output-local-llm', 'best-local-llm-for-sql-data-analysis'],
    is_living_page: false,
    leadAnswerBlock: "<strong>OCRに最適なローカルビジョンモデルは、文書や画像内テキストのデータで特別にファインチューニングされたマルチモーダルモデルであり、汎用的なキャプション生成モデルではありません。</strong>汎用ビジョン言語モデルは写真の説明は得意ですが、小さい文字や密集したテキスト、回転したテキストには弱いことが多いです。スキャンされたフォームや領収書、複数列のレイアウトで訓練された文書特化型モデルは、まさにこうしたコンテンツで明確に優れた性能を発揮します。",
    quickAnswerTop: {
      ja: {
        question: "OCR用のローカルビジョンモデルで何を確認すべきですか?",
        answer: "高いネイティブ画像解像度に対応しているか(文書は一般的な写真よりはるかに多くの詳細が必要です)、汎用的なキャプションではなく文書特化データでファインチューニングされているか、単なるプレーンテキストではなく構造化出力(バウンディングボックスやJSON)を返せるかを優先して確認してください。",
        bullets: [
          "ネイティブ解像度への対応は、小さい文字や密集したテキストではパラメータ数よりも重要です",
          "文書特化型のファインチューニングモデルは、スキャンやフォームにおいて汎用ビジョンモデルより優れています",
          "レイアウト情報が必要な場合、テキストだけでなく構造化出力(JSON、バウンディングボックス)への対応が重要です",
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "そもそも画像内のテキストを読み取るには、モデルがマルチモーダル(ビジョン言語)である必要があります。テキスト専用のローカルLLMはサイズに関わらず画像入力を処理できません",
          "文書特化型のビジョンファインチューニングモデルは、密集した小さい文字や回転したテキストにおいて、汎用マルチモーダルチャットモデルを一貫して上回ります",
          "OCRの精度には、パラメータ数そのものよりネイティブ画像解像度への対応の方が重要です",
          "テーブル構造やフォーム項目をJSONとして取得する必要がある場合は、選定前にモデルが構造化出力に対応しているか確認してください。プレーンテキストの書き起こしだけでは後続の自動化には不十分です",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "OCRに最適なローカルビジョンモデルは、汎用的なキャプション生成モデルではなく、文書特化型のマルチモーダルモデルです。" },
          { type: 'plain-terms', text: "簡単に言うと、写真の説明だけを学習したモデルではなく、スキャンされた文書やフォームに特化して訓練されたビジョンモデルを選んでください。小さい文字や乱れたテキストをはるかに確実に読み取れます。" },
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: "OCR対応ビジョンモデルで確認すべきポイント",
        content: [
          "<strong>解像度への対応は、OCR精度を左右する最大の要因です。</strong>ほとんどのビジョン言語モデルは、処理前に入力画像を固定の比較的低い解像度に縮小します。写真の説明には問題ありませんが、スキャンされた請求書の8ポイントフォントを読み取るには致命的です。文書処理向けに設計されたモデルは、通常より高いネイティブ解像度に対応するか、大きな画像をタイル分割して処理し、小さい文字を読み取れるだけの詳細を保持します。",
          "学習データはアーキテクチャと同じくらい重要です。自然な写真とキャプションを中心に学習したモデルは、物体やシーンの認識は得意でも、密集したテキストを正確に書き起こす能力は身につきません。スキャンされた文書、領収書、フォーム、複数列レイアウトでファインチューニングされたモデルは、傾き、低コントラスト、手書きと印刷が混在するといった実際のスキャン条件下で構造化テキストを読み取るという特定のスキルを習得します。",
          "多言語の文字体系への対応範囲はモデルによって大きく異なります。文書内で複数の文字体系が混在する場合(例えば同じ画像内にラテン文字と別の文字体系が含まれる場合)、モデルが多言語チャットデータだけでなく、多言語の文書データで特別に訓練されているかを確認してください。チャット重視の多言語学習は、同じ言語における画像内テキスト認識の精度を保証するものではありません。",
        ],
      },
      modelClasses: {
        id: 'model-classes',
        title: "比較すべきOCR対応ツールの3つのクラス",
        content: [
          "特定のモデルを選ぶ前に、自分のワークロードにどのクラスが合うかを決めましょう。トレードオフの違いが大きいため、「最適」な選択は実際に必要なものに大きく左右されます。",
        ],
        items: [
          "**文書特化型ビジョンファインチューニングモデル:** スキャンされた文書、フォーム、領収書に特化して訓練されています。密集した低品質なスキャンでも生のOCR精度が最も高く、このタスクを実質的に専門的に学習しています。他のタスクにも使いたい場合、一般的な会話能力は劣ります。",
          "**汎用マルチモーダルチャットモデル:** OCRを数ある機能の一つとして扱います。他のタスクですでに運用している場合は便利ですが、文書特化型モデルと比べて小さい文字や回転したテキスト、低コントラストのテキストで一貫して精度が劣ります。実際のスキャンでは書き起こしエラーが明らかに増える見込みです。",
          "**専用OCRパイプライン(LLMを使わない方式):** レイアウト解析と組み合わせた従来型のテキスト検出・認識エンジンです。ページあたりの処理が最速かつ最安で、標準フォントのクリーンで照明の良いスキャンではより高精度なことが多いです。ビジョン言語モデルのようにコンテンツについて推論することはできません。要約、フォームに関する質問への回答、抽出したフィールドの再構成もできません。",
          "特定の文書OCR対応ビジョンモデルをローカルで実行する具体的な手順については、[ローカルビジョンモデルによる文書OCR — セットアップガイド](/ja/local-llms/run-qwen-vl-locally-2026)を参照してください。",
        ],
      },
      faq: {
        id: 'faq',
        title: "よくある質問",
        faqs: [
          {
            q: "汎用的なローカルLLMは画像内のテキストを読み取れますか?",
            a: "マルチモーダル(ビジョン言語)である場合のみ可能です。テキスト専用のLLMは、パラメータ数に関係なく画像入力をまったく処理できません。画像を入力として受け付けるには、言語モデルと一緒に訓練されたビジョンエンコーダーが必要です。",
          },
          {
            q: "OCR対応のローカルビジョンモデルにはどれくらいのVRAMが必要ですか?",
            a: "同じパラメータ数のテキスト専用モデルとほぼ同程度で、それに加えて画像トークン用の余裕が必要です。そのモデルサイズのテキスト専用モデルに記載された数値より1〜2GB多く見積もってください。高解像度画像や1回のリクエストで複数ページを処理する場合はさらに多く必要です。",
          },
          {
            q: "画像解像度はOCR精度に本当にそれほど影響しますか?",
            a: "はい、大きく影響します。処理前に文書を低い固定解像度に縮小するモデルは、モデル自体が優れていても、小さい文字を読み取るのに必要な細部を失います。密集した文書に頼る前に、モデルが高いネイティブ解像度や画像タイル分割に対応しているか確認してください。",
          },
          {
            q: "これらのモデルはプレーンテキストではなく、テーブルやJSONのような構造化データを出力できますか?",
            a: "訓練やプロンプト次第で対応できるモデルもあります。これは生のテキスト認識とは別の能力です。信頼性の高い方法については、ローカルLLMから信頼できる構造化JSON出力を得るためのプロンプトおよび制約付きデコーディングの手法をまとめたガイドをご覧ください。",
          },
        ],
      },
      relatedReading: {
        title: "関連記事",
        items: [
          "[ローカルLLMからの最適な構造化JSON出力](/ja/prompt-bites/best-structured-json-output-local-llm) — プレーンテキストだけでなく信頼性の高い構造化データを得るための手法",
          "[SQL・データ分析に最適なローカルLLM](/ja/prompt-bites/best-local-llm-for-sql-data-analysis) — OCRの後工程となる構造化データタスク向けのモデル選定",
        ],
      },
    },
  },
  zh: {
    theme: 'Model Capability Picks',
    title: "OCR最佳本地视觉模型选择",
    seoTitle: "OCR最佳本地视觉模型 | Prompt Bites",
    metaDescription: "快速指南:如何为OCR选择本地视觉语言模型,真正决定文档识别精度的因素,以及文档专用模型与通用多模态聊天模型的区别。",
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "为OCR和文档读取任务挑选本地视觉语言模型的开发者",
    siblingBites: ['best-structured-json-output-local-llm', 'best-local-llm-for-sql-data-analysis'],
    is_living_page: false,
    leadAnswerBlock: "<strong>OCR最佳本地视觉模型是专门针对文档和图像中文字数据微调的多模态模型,而不是通用图像描述模型。</strong>通用视觉语言模型可以很好地描述照片,但常常难以处理细小、密集或旋转的文字——而在扫描表单、收据和多栏排版数据上微调的文档专用模型,在这类内容上的表现明显更好。",
    quickAnswerTop: {
      zh: {
        question: "为OCR选择本地视觉模型时应关注哪些要点?",
        answer: "优先选择支持高原生图像分辨率的模型(文档所需细节远超普通照片),在文档专用数据而非通用图像描述数据上微调过的模型,以及能返回结构化输出(边界框或JSON)而不仅仅是纯文本的模型。",
        bullets: [
          "对细小或密集文字而言,原生分辨率处理能力比参数量更重要",
          "文档专用微调模型在扫描件和表单上的表现优于通用视觉模型",
          "如果需要版面结构而不只是文字,结构化输出(JSON、边界框)支持很关键",
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "模型必须是多模态(视觉语言)才能读取图像中的文字——纯文本本地LLM无论参数量多大都无法处理图像输入",
          "文档专用视觉微调模型在密集、细小或旋转文字上持续优于通用多模态聊天模型",
          "对OCR精度而言,原生图像分辨率支持比参数量本身更重要",
          "如果需要以JSON形式返回表格结构或表单字段,选型前请确认模型支持结构化输出——单纯的纯文本转录不足以支撑下游自动化",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "OCR最佳本地视觉模型是文档专用的多模态微调模型,而不是通用图像描述模型。" },
          { type: 'plain-terms', text: "简单来说:选择专门针对扫描文档和表单训练的视觉模型,而不是只训练来描述照片的模型——它读取细小或杂乱文字的可靠性要高得多。" },
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: "选择支持OCR的视觉模型时应关注的要点",
        content: [
          "<strong>分辨率处理是决定OCR精度的最重要单一因素。</strong>大多数视觉语言模型在处理前会将输入图像缩小到固定的较低分辨率——描述照片时没问题,但读取扫描发票上的8磅小字时就会效果很差。为文档场景设计的模型通常支持更高的原生分辨率,或将大图像切分为多个区块处理,以保留足够细节来读取小字。",
          "训练数据与架构同样重要。主要用自然照片和图像描述训练的模型,学会的是识别物体和场景,而不是精确转录密集文字。在扫描文档、收据、表单和多栏排版上微调的模型,学到的是在真实扫描条件下读取结构化文字的具体技能——包括倾斜、低对比度、手写与印刷混排等情况。",
          "不同模型对多语言文字系统的覆盖差异很大。如果文档中混合了多种文字系统(例如同一张图像中同时出现拉丁文字和另一种文字系统),请确认该模型是专门在多语言文档数据上训练的,而不仅仅是多语言聊天数据——以聊天为主的多语言训练并不能保证在同样的语言上有强大的图像文字识别能力。",
        ],
      },
      modelClasses: {
        id: 'model-classes',
        title: "三类支持OCR的工具对比",
        content: [
          "在选定具体模型之前,先确定哪类工具适合你的工作负载——不同类别之间的取舍差异很大,\"最佳\"选择很大程度上取决于你的实际需求。",
        ],
        items: [
          "**文档专用视觉微调模型:** 专门针对扫描文档、表单和收据训练。在密集或低质量扫描件上具有最佳的原始OCR精度,该模型相当于已经专门针对这项任务反复练习过。如果还想用它处理其他任务,通用对话能力会较弱。",
          "**通用多模态聊天模型:** 将OCR作为众多能力之一。如果你已经用它处理其他任务会很方便,但在细小、旋转或低对比度文字上,精度持续低于文档专用微调模型——在真实扫描件上预计会有明显更多的转录错误。",
          "**专用OCR流水线(非LLM):** 结合版面分析的传统文字检测加识别引擎。每页处理速度最快、成本最低,在标准字体、清晰光照的干净扫描件上往往更准确。无法像视觉语言模型那样对内容进行推理——不能总结、不能回答关于表单的问题、不能重组提取出的字段。",
          "关于在本地运行某个支持文档OCR的具体视觉模型的实操搭建指南,请参见[使用本地视觉模型进行文档OCR——搭建指南](/zh/local-llms/run-qwen-vl-locally-2026)。",
        ],
      },
      faq: {
        id: 'faq',
        title: "常见问题",
        faqs: [
          {
            q: "通用本地LLM能读取图像中的文字吗?",
            a: "只有在它是多模态(视觉语言)模型时才可以。纯文本LLM无论参数量多大都完全无法处理图像输入——它需要一个与语言模型一起训练的视觉编码器,才能接受图像作为输入。",
          },
          {
            q: "支持OCR的本地视觉模型需要多少显存(VRAM)?",
            a: "大致与同等参数量的纯文本模型相当,再加上处理图像token所需的额外余量。建议比该模型尺寸对应的纯文本显存数字多预留1到2GB,如果处理高分辨率图像或单次请求中的多页文档,则需要更多。",
          },
          {
            q: "图像分辨率真的会显著影响OCR精度吗?",
            a: "是的,影响很大。如果模型在处理前将文档缩小到固定的低分辨率,即使模型本身能力不错,也会丢失读取小字所需的细节。在依赖模型处理密集文档之前,请确认它是否支持高原生分辨率或图像切块处理。",
          },
          {
            q: "这些模型能输出表格或JSON等结构化数据,而不只是纯文本吗?",
            a: "部分模型可以,前提是经过相应训练或提示——这是与纯文字识别相互独立的能力。关于让本地LLM可靠输出结构化JSON的提示词和约束解码技巧,请参阅我们的相关指南。",
          },
        ],
      },
      relatedReading: {
        title: "相关阅读",
        items: [
          "[本地LLM最佳结构化JSON输出](/zh/prompt-bites/best-structured-json-output-local-llm) — 获得可靠结构化数据而不仅是纯文本的技巧",
          "[SQL与数据分析最佳本地LLM](/zh/prompt-bites/best-local-llm-for-sql-data-analysis) — 为OCR之后的结构化数据任务挑选模型",
        ],
      },
    },
  },
  es: {
    theme: 'Model Capability Picks',
    title: "¿Cuál es el mejor modelo de visión local para OCR?",
    seoTitle: "Mejor modelo de visión local para OCR | Prompt Bites",
    metaDescription: "Una guía rápida para elegir un modelo de visión-lenguaje local para OCR: qué determina realmente la precisión en documentos y en qué se diferencian los modelos especializados en documentos de los modelos de chat multimodales de propósito general.",
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "Desarrolladores que eligen un modelo de visión-lenguaje local para OCR y lectura de documentos",
    siblingBites: ['best-structured-json-output-local-llm', 'best-local-llm-for-sql-data-analysis'],
    is_living_page: false,
    leadAnswerBlock: "<strong>El mejor modelo de visión local para OCR es un modelo multimodal ajustado específicamente con datos de documentos y texto en imágenes, no un modelo de descripción de imágenes de propósito general.</strong> Un modelo de visión-lenguaje generalista puede describir bien una foto, pero suele tener problemas con texto pequeño, denso o girado — un modelo especializado, ajustado con formularios escaneados, recibos y diseños a varias columnas, rinde notablemente mejor con ese tipo de contenido.",
    quickAnswerTop: {
      es: {
        question: "¿Qué debes buscar en un modelo de visión local para OCR?",
        answer: "Prioriza modelos que admitan una alta resolución de imagen nativa (los documentos necesitan mucho más detalle que una foto típica), que hayan sido ajustados con datos específicos de documentos en lugar de descripciones genéricas, y que puedan devolver salida estructurada (cuadros delimitadores o JSON) en lugar de solo texto plano.",
        bullets: [
          "El manejo de resolución nativa importa más que el número de parámetros para texto pequeño o denso",
          "Los modelos especializados en documentos superan a los modelos de visión generalistas en escaneos y formularios",
          "El soporte de salida estructurada (JSON, cuadros delimitadores) importa si necesitas el diseño, no solo el texto",
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Un modelo debe ser multimodal (visión-lenguaje) para leer texto en imágenes — un LLM solo de texto no puede procesar entradas de imagen sin importar su tamaño",
          "Los ajustes de visión especializados en documentos superan de forma consistente a los modelos de chat multimodales generalistas en texto denso, pequeño o girado",
          "El soporte de resolución de imagen nativa importa más para la precisión de OCR que el número bruto de parámetros",
          "Si necesitas la estructura de una tabla o los campos de un formulario como JSON, confirma que el modelo admite salida estructurada antes de elegirlo — la transcripción en texto plano por sí sola no basta para la automatización posterior",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "El mejor modelo de visión local para OCR es un ajuste multimodal especializado en documentos, no un modelo de descripción de imágenes de propósito general." },
          { type: 'plain-terms', text: "En términos simples: elige un modelo de visión entrenado específicamente con documentos y formularios escaneados, no uno entrenado solo para describir fotos — leerá texto pequeño o desordenado de forma mucho más fiable." },
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: "Qué buscar en un modelo de visión con capacidad de OCR",
        content: [
          "<strong>El manejo de resolución es el factor individual más importante para la precisión de OCR.</strong> La mayoría de los modelos de visión-lenguaje reducen la imagen de entrada a una resolución fija y relativamente baja antes de procesarla — aceptable para describir una foto, pero desastroso para leer una fuente de 8 puntos en una factura escaneada. Los modelos diseñados para trabajo con documentos suelen admitir una resolución nativa más alta o dividen las imágenes grandes en secciones, conservando suficiente detalle para leer texto pequeño.",
          "Los datos de entrenamiento importan tanto como la arquitectura. Un modelo entrenado sobre todo con fotos naturales y descripciones aprende a reconocer objetos y escenas, no a transcribir texto denso con precisión. Un modelo ajustado con documentos escaneados, recibos, formularios y diseños a varias columnas aprende la habilidad específica de leer texto estructurado en condiciones reales de escaneo — inclinación, bajo contraste, texto manuscrito mezclado con impreso.",
          "La cobertura de escrituras multilingües varía mucho entre modelos. Si tus documentos mezclan escrituras (por ejemplo, texto latino con otro sistema de escritura en la misma imagen), verifica que el modelo se haya entrenado específicamente con datos de documentos multilingües, no solo con datos de chat multilingües — el entrenamiento multilingüe centrado en chat no garantiza un buen reconocimiento de texto en imagen para esos mismos idiomas.",
        ],
      },
      modelClasses: {
        id: 'model-classes',
        title: "Tres clases de herramientas con OCR para comparar",
        content: [
          "Antes de elegir un modelo concreto, decide qué clase se ajusta a tu carga de trabajo — las ventajas y desventajas son lo bastante distintas como para que la mejor opción dependa mucho de lo que realmente necesitas.",
        ],
        items: [
          "**Ajustes de visión especializados en documentos:** entrenados específicamente con documentos escaneados, formularios y recibos. Mejor precisión de OCR en bruto en escaneos densos o de baja calidad; el modelo prácticamente ha practicado esta tarea exacta. Peor capacidad conversacional general si también quieres usarlo para otras tareas.",
          "**Modelos de chat multimodales generalistas:** tratan el OCR como una capacidad más entre muchas. Prácticos si ya usas uno para otras tareas, pero consistentemente menos precisos con texto pequeño, girado o de bajo contraste que un ajuste especializado en documentos — espera notablemente más errores de transcripción en escaneos reales.",
          "**Canales de OCR dedicados (sin LLM):** motores tradicionales de detección y reconocimiento de texto combinados con análisis de diseño. Los más rápidos y económicos por página, y a menudo más precisos en escaneos limpios y bien iluminados con fuentes estándar. No pueden razonar sobre el contenido como un modelo de visión-lenguaje — no resumen, no responden preguntas sobre un formulario, no reestructuran los campos extraídos.",
          "Para una guía práctica de configuración de un modelo de visión específico con capacidad de OCR de documentos en local, consulta [OCR de documentos con un modelo de visión local — guía de configuración](/es/local-llms/run-qwen-vl-locally-2026).",
        ],
      },
      faq: {
        id: 'faq',
        title: "Preguntas frecuentes",
        faqs: [
          {
            q: "¿Puede un LLM local de propósito general leer texto en imágenes?",
            a: "Solo si es multimodal (visión-lenguaje). Un LLM solo de texto no puede procesar entradas de imagen en absoluto, sin importar el número de parámetros — necesita un codificador de visión conectado y entrenado junto con el modelo de lenguaje para aceptar imágenes como entrada.",
          },
          {
            q: "¿Cuánta VRAM necesita un modelo de visión local con capacidad de OCR?",
            a: "Aproximadamente lo mismo que un modelo solo de texto del mismo número de parámetros, más margen extra para los tokens de imagen. Calcula entre 1 y 2 GB más de VRAM que la cifra indicada para la versión solo de texto de ese tamaño de modelo, y más si procesas imágenes de alta resolución o varias páginas en una sola solicitud.",
          },
          {
            q: "¿La resolución de la imagen afecta realmente tanto a la precisión del OCR?",
            a: "Sí, de forma significativa. Un modelo que reduce tu documento a una resolución fija baja antes de procesarlo perderá el detalle fino necesario para leer texto pequeño, aunque el modelo en sí sea capaz por lo demás. Verifica si un modelo admite alta resolución nativa o división de imagen en mosaicos antes de confiar en él para documentos densos.",
          },
          {
            q: "¿Pueden estos modelos generar datos estructurados como tablas o JSON en lugar de texto plano?",
            a: "Algunos pueden hacerlo, si se entrenan o se les indica correctamente — esta es una capacidad independiente del reconocimiento de texto en bruto. Consulta nuestra guía sobre cómo obtener salida JSON estructurada fiable desde un LLM local para conocer las técnicas de prompting y decodificación restringida que lo hacen posible.",
          },
        ],
      },
      relatedReading: {
        title: "Lecturas relacionadas",
        items: [
          "[Mejor salida JSON estructurada desde un LLM local](/es/prompt-bites/best-structured-json-output-local-llm) — técnicas para obtener datos estructurados fiables, no solo texto plano",
          "[Mejor LLM local para SQL y análisis de datos](/es/prompt-bites/best-local-llm-for-sql-data-analysis) — elegir un modelo para tareas de datos estructurados posteriores al OCR",
        ],
      },
    },
  },
  pt: {
    theme: 'Model Capability Picks',
    title: "Qual o melhor modelo de visão local para OCR?",
    seoTitle: "Melhor modelo de visão local para OCR | Prompt Bites",
    metaDescription: "Um guia rápido para escolher um modelo de visão-linguagem local para OCR: o que realmente determina a precisão em documentos e como os modelos especializados em documentos se diferenciam dos modelos de chat multimodais de uso geral.",
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "Desenvolvedores escolhendo um modelo de visão-linguagem local para OCR e leitura de documentos",
    siblingBites: ['best-structured-json-output-local-llm', 'best-local-llm-for-sql-data-analysis'],
    is_living_page: false,
    leadAnswerBlock: "<strong>O melhor modelo de visão local para OCR é um modelo multimodal ajustado especificamente com dados de documentos e texto em imagens, não um modelo de legendagem de uso geral.</strong> Um modelo de visão-linguagem genérico pode descrever bem uma foto, mas costuma ter dificuldade com texto pequeno, denso ou rotacionado — um modelo especializado, ajustado com formulários digitalizados, recibos e layouts em várias colunas, tem um desempenho visivelmente melhor exatamente nesse tipo de conteúdo.",
    quickAnswerTop: {
      pt: {
        question: "O que você deve procurar em um modelo de visão local para OCR?",
        answer: "Priorize modelos que suportem alta resolução de imagem nativa (documentos precisam de muito mais detalhe do que uma foto comum), que tenham sido ajustados com dados específicos de documentos em vez de legendas genéricas, e que consigam retornar saída estruturada (caixas delimitadoras ou JSON) em vez de apenas texto simples.",
        bullets: [
          "O tratamento de resolução nativa importa mais do que o número de parâmetros para texto pequeno ou denso",
          "Modelos especializados em documentos superam modelos de visão genéricos em digitalizações e formulários",
          "Suporte a saída estruturada (JSON, caixas delimitadoras) importa se você precisa do layout, não só do texto",
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Um modelo precisa ser multimodal (visão-linguagem) para conseguir ler texto em imagens — um LLM apenas de texto não consegue processar entrada de imagem, independentemente do tamanho",
          "Modelos de visão especializados em documentos superam consistentemente os modelos de chat multimodais genéricos em texto denso, pequeno ou rotacionado",
          "O suporte a resolução de imagem nativa importa mais para a precisão do OCR do que o número bruto de parâmetros",
          "Se você precisa da estrutura de uma tabela ou de campos de formulário como JSON, confirme se o modelo suporta saída estruturada antes de escolhê-lo — a transcrição em texto simples sozinha não é suficiente para automação posterior",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "O melhor modelo de visão local para OCR é um ajuste multimodal especializado em documentos, não um modelo de legendagem de uso geral." },
          { type: 'plain-terms', text: "Em termos simples: escolha um modelo de visão treinado especificamente em documentos e formulários digitalizados, não um treinado apenas para descrever fotos — ele vai ler texto pequeno ou bagunçado de forma muito mais confiável." },
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: "O que procurar em um modelo de visão com capacidade de OCR",
        content: [
          "<strong>O tratamento de resolução é o fator individual mais importante para a precisão do OCR.</strong> A maioria dos modelos de visão-linguagem reduz a imagem de entrada para uma resolução fixa e relativamente baixa antes de processar — o que é aceitável para descrever uma foto, mas desastroso para ler uma fonte de 8 pontos em uma nota fiscal digitalizada. Modelos criados para trabalho com documentos costumam suportar resolução nativa mais alta ou dividem imagens grandes em blocos, preservando detalhe suficiente para ler texto pequeno.",
          "Os dados de treinamento importam tanto quanto a arquitetura. Um modelo treinado majoritariamente com fotos naturais e legendas aprende a reconhecer objetos e cenas, não a transcrever texto denso com precisão. Um modelo ajustado com documentos digitalizados, recibos, formulários e layouts em várias colunas aprende a habilidade específica de ler texto estruturado em condições reais de digitalização — inclinação, baixo contraste, texto manuscrito misturado com impresso.",
          "A cobertura de sistemas de escrita multilíngues varia bastante entre modelos. Se seus documentos misturam sistemas de escrita (por exemplo, texto latino com outro sistema de escrita na mesma imagem), verifique se o modelo foi treinado especificamente com dados de documentos multilíngues, não apenas com dados de chat multilíngues — treinamento multilíngue focado em chat não garante um bom reconhecimento de texto em imagem para os mesmos idiomas.",
        ],
      },
      modelClasses: {
        id: 'model-classes',
        title: "Três classes de ferramentas com OCR para comparar",
        content: [
          "Antes de escolher um modelo específico, decida qual classe se encaixa na sua carga de trabalho — as vantagens e desvantagens são diferentes o suficiente para que a melhor escolha dependa muito do que você realmente precisa.",
        ],
        items: [
          "**Modelos de visão especializados em documentos:** treinados especificamente em documentos digitalizados, formulários e recibos. Melhor precisão bruta de OCR em digitalizações densas ou de baixa qualidade; o modelo praticamente já treinou exatamente essa tarefa. Capacidade conversacional geral pior se você também quiser usá-lo para outras tarefas.",
          "**Modelos de chat multimodais de uso geral:** tratam o OCR como uma capacidade entre muitas. Convenientes se você já roda um para outras tarefas, mas consistentemente menos precisos em texto pequeno, rotacionado ou de baixo contraste do que um modelo especializado em documentos — espere significativamente mais erros de transcrição em digitalizações reais.",
          "**Pipelines de OCR dedicados (sem LLM):** motores tradicionais de detecção e reconhecimento de texto combinados com análise de layout. Os mais rápidos e baratos por página, e frequentemente mais precisos em digitalizações limpas e bem iluminadas com fontes padrão. Não conseguem raciocinar sobre o conteúdo como um modelo de visão-linguagem — sem resumir, sem responder perguntas sobre um formulário, sem reestruturar os campos extraídos.",
          "Para um passo a passo prático de configuração de um modelo de visão específico com capacidade de OCR de documentos rodando localmente, veja [OCR de documentos com um modelo de visão local — guia de configuração](/pt/local-llms/run-qwen-vl-locally-2026).",
        ],
      },
      faq: {
        id: 'faq',
        title: "Perguntas frequentes",
        faqs: [
          {
            q: "Um LLM local de uso geral consegue ler texto em imagens?",
            a: "Só se ele for multimodal (visão-linguagem). Um LLM apenas de texto não consegue processar entrada de imagem de forma alguma, independentemente do número de parâmetros — ele precisa de um encoder de visão acoplado e treinado junto com o modelo de linguagem para aceitar imagens como entrada.",
          },
          {
            q: "Quanta VRAM um modelo de visão local com capacidade de OCR precisa?",
            a: "Aproximadamente o mesmo que um modelo apenas de texto com o mesmo número de parâmetros, mais uma margem extra para os tokens de imagem. Calcule de 1 a 2 GB a mais de VRAM do que o valor indicado para a versão apenas de texto daquele tamanho de modelo, e mais se você processar imagens de alta resolução ou várias páginas em uma única requisição.",
          },
          {
            q: "A resolução da imagem realmente afeta tanto assim a precisão do OCR?",
            a: "Sim, significativamente. Um modelo que reduz seu documento para uma resolução fixa baixa antes de processar vai perder o detalhe fino necessário para ler texto pequeno, mesmo que o modelo em si seja capaz. Verifique se um modelo suporta alta resolução nativa ou divisão de imagem em blocos antes de confiar nele para documentos densos.",
          },
          {
            q: "Esses modelos conseguem gerar dados estruturados como tabelas ou JSON em vez de texto simples?",
            a: "Alguns conseguem, se treinados ou solicitados para isso — essa é uma capacidade separada do reconhecimento bruto de texto. Veja nosso guia sobre como obter saída JSON estruturada confiável de um LLM local para as técnicas de prompting e decodificação restrita que tornam isso confiável.",
          },
        ],
      },
      relatedReading: {
        title: "Leituras relacionadas",
        items: [
          "[Melhor saída JSON estruturada de um LLM local](/pt/prompt-bites/best-structured-json-output-local-llm) — técnicas para obter dados estruturados confiáveis, não só texto simples",
          "[Melhor LLM local para SQL e análise de dados](/pt/prompt-bites/best-local-llm-for-sql-data-analysis) — escolhendo um modelo para tarefas de dados estruturados após o OCR",
        ],
      },
    },
  },
  ar: {
    theme: 'Model Capability Picks',
    title: "ما هو أفضل نموذج رؤية محلي للتعرف الضوئي على الحروف (OCR)؟",
    seoTitle: "أفضل نموذج رؤية محلي لـ OCR | Prompt Bites",
    metaDescription: "دليل سريع لاختيار نموذج رؤية-لغة محلي لـ OCR: ما الذي يحدد الدقة فعليًا على المستندات، وكيف تختلف النماذج المتخصصة في المستندات عن نماذج الدردشة متعددة الوسائط العامة.",
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "المطورون الذين يختارون نموذج رؤية-لغة محلي لمهام OCR وقراءة المستندات",
    siblingBites: ['best-structured-json-output-local-llm', 'best-local-llm-for-sql-data-analysis'],
    is_living_page: false,
    leadAnswerBlock: "<strong>أفضل نموذج رؤية محلي لـ OCR هو نموذج متعدد الوسائط تم ضبطه بدقة خصيصًا على بيانات المستندات والنصوص داخل الصور، وليس نموذج وصف صور عام.</strong> يمكن لنموذج رؤية-لغة عام أن يصف الصورة جيدًا، لكنه غالبًا ما يواجه صعوبة مع النصوص الصغيرة أو الكثيفة أو المائلة — بينما يحقق نموذج متخصص في المستندات، تم ضبطه على مستندات ممسوحة ضوئيًا وإيصالات وتخطيطات متعددة الأعمدة، أداءً أفضل بشكل ملحوظ على هذا النوع من المحتوى تحديدًا.",
    quickAnswerTop: {
      ar: {
        question: "ما الذي يجب البحث عنه في نموذج رؤية محلي لـ OCR؟",
        answer: "أعطِ الأولوية للنماذج التي تدعم دقة صورة أصلية عالية (تحتاج المستندات إلى تفاصيل أكثر بكثير من الصورة الفوتوغرافية العادية)، والتي تم ضبطها على بيانات خاصة بالمستندات بدلاً من الأوصاف العامة، والتي يمكنها إرجاع مخرجات منظّمة (صناديق تحديد أو JSON) بدلاً من نص عادي فقط.",
        bullets: [
          "معالجة الدقة الأصلية أهم من عدد المعاملات بالنسبة للنصوص الصغيرة أو الكثيفة",
          "النماذج المتخصصة في المستندات تتفوق على نماذج الرؤية العامة في المستندات الممسوحة ضوئيًا والنماذج",
          "دعم المخرجات المنظمة (JSON، صناديق التحديد) مهم إذا كنت تحتاج إلى التخطيط وليس النص فقط",
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "يجب أن يكون النموذج متعدد الوسائط (رؤية-لغة) حتى يتمكن من قراءة النص داخل الصور على الإطلاق — لا يمكن لنموذج لغوي محلي نصي فقط معالجة مدخلات الصور مهما كان حجمه",
          "النماذج المتخصصة في المستندات تتفوق باستمرار على نماذج الدردشة متعددة الوسائط العامة في النصوص الكثيفة أو الصغيرة أو المائلة",
          "دعم الدقة الأصلية للصورة أهم لدقة OCR من عدد المعاملات الخام",
          "إذا كنت بحاجة إلى بنية الجدول أو حقول النماذج كـ JSON، تأكد من دعم النموذج للمخرجات المنظمة قبل اختياره — النسخ النصي البسيط وحده لا يكفي للأتمتة اللاحقة",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "أفضل نموذج رؤية محلي لـ OCR هو نموذج متعدد الوسائط متخصص في المستندات، وليس نموذج وصف صور عام." },
          { type: 'plain-terms', text: "بعبارة أبسط: اختر نموذج رؤية تم تدريبه خصيصًا على المستندات والنماذج الممسوحة ضوئيًا، وليس نموذجًا تم تدريبه فقط على وصف الصور — سيقرأ النص الصغير أو غير المنظم بموثوقية أكبر بكثير." },
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: "ما الذي يجب البحث عنه في نموذج رؤية قادر على OCR",
        content: [
          "<strong>معالجة الدقة هي أهم عامل منفرد في دقة OCR.</strong> تقوم معظم نماذج الرؤية-اللغة بتقليل حجم الصورة المدخلة إلى دقة ثابتة ومنخفضة نسبيًا قبل المعالجة — وهذا مقبول لوصف صورة فوتوغرافية، لكنه كارثي لقراءة خط بحجم 8 نقاط في فاتورة ممسوحة ضوئيًا. النماذج المصممة للعمل مع المستندات تدعم عادةً دقة أصلية أعلى أو تقسم الصور الكبيرة إلى أجزاء، مع الحفاظ على تفاصيل كافية لقراءة النص الصغير.",
          "بيانات التدريب مهمة بقدر أهمية البنية المعمارية. النموذج المدرَّب بشكل أساسي على صور طبيعية وأوصاف عامة يتعلم التعرف على الأجسام والمشاهد، وليس نسخ النصوص الكثيفة بدقة. أما النموذج المضبوط على مستندات ممسوحة ضوئيًا وإيصالات ونماذج وتخطيطات متعددة الأعمدة فيكتسب المهارة المحددة المتمثلة في قراءة النص المنظم في ظروف مسح واقعية — الانحراف، وضعف التباين، والخط اليدوي الممزوج بالنص المطبوع.",
          "تختلف تغطية أنظمة الكتابة متعددة اللغات اختلافًا كبيرًا بين النماذج. إذا كانت مستنداتك تمزج بين أنظمة كتابة (مثل نص لاتيني مع نظام كتابة آخر في الصورة نفسها)، تحقق من أن النموذج تم تدريبه خصيصًا على بيانات مستندات متعددة اللغات، وليس فقط على بيانات دردشة متعددة اللغات — فالتدريب متعدد اللغات المركّز على الدردشة لا يضمن تعرفًا قويًا على النص داخل الصور لهذه اللغات نفسها.",
        ],
      },
      modelClasses: {
        id: 'model-classes',
        title: "ثلاث فئات من أدوات OCR للمقارنة بينها",
        content: [
          "قبل اختيار نموذج محدد، حدد الفئة التي تناسب حِمل العمل لديك — الفروقات بين هذه الفئات كبيرة بما يكفي لجعل الاختيار الأفضل يعتمد بشكل كبير على ما تحتاجه فعليًا.",
        ],
        items: [
          "**النماذج المتخصصة في المستندات:** مدرَّبة خصيصًا على مستندات وإيصالات ونماذج ممسوحة ضوئيًا. تقدم أفضل دقة OCR خام على المسح الكثيف أو منخفض الجودة؛ فالنموذج قد تدرب فعليًا على هذه المهمة بالذات. قدرة محادثة عامة أضعف إذا كنت تريد استخدامه أيضًا لمهام أخرى.",
          "**نماذج الدردشة متعددة الوسائط العامة:** تتعامل مع OCR كقدرة واحدة من بين قدرات عديدة. مريحة إذا كنت تستخدم بالفعل نموذجًا كهذا لمهام أخرى، لكنها أقل دقة باستمرار مع النصوص الصغيرة أو المائلة أو ضعيفة التباين مقارنة بنموذج متخصص في المستندات — توقع أخطاء نسخ أكثر بشكل ملحوظ على المسوحات الحقيقية.",
          "**خطوط أنابيب OCR المخصصة (بدون نماذج لغوية):** محركات تقليدية للكشف عن النص والتعرف عليه مقترنة بتحليل التخطيط. الأسرع والأرخص لكل صفحة، وغالبًا أكثر دقة على المسوحات النظيفة الجيدة الإضاءة بخطوط قياسية. لا تستطيع الاستدلال بشأن المحتوى كما يفعل نموذج الرؤية-اللغة — لا تلخيص، ولا الإجابة عن أسئلة بخصوص نموذج ما، ولا إعادة هيكلة الحقول المستخرجة.",
          "للحصول على دليل عملي لإعداد نموذج رؤية محدد قادر على OCR للمستندات محليًا، راجع [التعرف الضوئي على المستندات باستخدام نموذج رؤية محلي — دليل الإعداد](/ar/local-llms/run-qwen-vl-locally-2026).",
        ],
      },
      faq: {
        id: 'faq',
        title: "الأسئلة الشائعة",
        faqs: [
          {
            q: "هل يمكن لنموذج لغوي محلي عام قراءة النص داخل الصور؟",
            a: "فقط إذا كان متعدد الوسائط (رؤية-لغة). لا يمكن لنموذج لغوي نصي فقط معالجة مدخلات الصور على الإطلاق، بغض النظر عن عدد المعاملات — فهو يحتاج إلى مُرمِّز رؤية مرفق ومدرَّب جنبًا إلى جنب مع النموذج اللغوي ليقبل الصور كمدخل.",
          },
          {
            q: "كم من VRAM يحتاجه نموذج رؤية محلي قادر على OCR؟",
            a: "تقريبًا نفس ما يحتاجه نموذج نصي فقط بنفس عدد المعاملات، بالإضافة إلى هامش إضافي لرموز الصور (tokens). خصص من 1 إلى 2 GB إضافية من VRAM مقارنة بالرقم المذكور للنسخة النصية فقط من ذلك الحجم من النماذج، وأكثر إذا كنت تعالج صورًا عالية الدقة أو عدة صفحات في طلب واحد.",
          },
          {
            q: "هل تؤثر دقة الصورة فعلًا بهذا القدر على دقة OCR؟",
            a: "نعم، وبشكل كبير. النموذج الذي يقلل دقة مستندك إلى دقة ثابتة منخفضة قبل المعالجة سيفقد التفاصيل الدقيقة اللازمة لقراءة النص الصغير، حتى لو كان النموذج نفسه قادرًا من نواحٍ أخرى. تحقق مما إذا كان النموذج يدعم دقة أصلية عالية أو تقسيم الصور إلى أجزاء قبل الاعتماد عليه في المستندات الكثيفة.",
          },
          {
            q: "هل يمكن لهذه النماذج إخراج بيانات منظمة مثل الجداول أو JSON بدلاً من نص عادي؟",
            a: "يمكن لبعضها ذلك، إذا تم تدريبها أو توجيهها لذلك — وهذه قدرة منفصلة عن التعرف الخام على النص. راجع دليلنا حول الحصول على مخرجات JSON منظمة وموثوقة من نموذج لغوي محلي للاطلاع على تقنيات الصياغة (prompting) وفك التشفير المقيّد التي تجعل هذا موثوقًا.",
          },
        ],
      },
      relatedReading: {
        title: "قراءات ذات صلة",
        items: [
          "[أفضل مخرجات JSON منظمة من نموذج لغوي محلي](/ar/prompt-bites/best-structured-json-output-local-llm) — تقنيات للحصول على بيانات منظمة موثوقة، وليس نصًا عاديًا فقط",
          "[أفضل نموذج لغوي محلي لـ SQL وتحليل البيانات](/ar/prompt-bites/best-local-llm-for-sql-data-analysis) — اختيار نموذج لمهام البيانات المنظمة اللاحقة لـ OCR",
        ],
      },
    },
  },
  ko: {
    theme: 'Model Capability Picks',
    title: "OCR에 가장 적합한 로컬 비전 모델은 무엇입니까?",
    seoTitle: "OCR에 가장 적합한 로컬 비전 모델 | Prompt Bites",
    metaDescription: "OCR용 로컬 비전-언어 모델을 선택하기 위한 간단한 가이드입니다. 문서 인식 정확도를 실제로 결정하는 요소와 문서 특화 모델이 범용 멀티모달 채팅 모델과 어떻게 다른지 설명합니다.",
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "OCR 및 문서 판독 작업을 위해 로컬 비전-언어 모델을 선택하는 개발자",
    siblingBites: ['best-structured-json-output-local-llm', 'best-local-llm-for-sql-data-analysis'],
    is_living_page: false,
    leadAnswerBlock: "<strong>OCR에 가장 적합한 로컬 비전 모델은 문서 및 이미지 속 텍스트 데이터로 특별히 파인튜닝된 멀티모달 모델이며, 범용 이미지 캡션 모델이 아닙니다.</strong> 범용 비전-언어 모델은 사진을 잘 설명할 수 있지만, 작거나 밀도가 높거나 회전된 텍스트에는 자주 어려움을 겪습니다. 스캔된 양식, 영수증, 다단 레이아웃 데이터로 파인튜닝된 문서 특화 모델은 바로 이러한 콘텐츠에서 눈에 띄게 더 나은 성능을 보입니다.",
    quickAnswerTop: {
      ko: {
        question: "OCR용 로컬 비전 모델을 선택할 때 무엇을 확인해야 합니까?",
        answer: "높은 네이티브 이미지 해상도를 지원하는지(문서는 일반적인 사진보다 훨씬 더 많은 디테일을 필요로 합니다), 범용 캡션이 아닌 문서 특화 데이터로 파인튜닝되었는지, 단순 텍스트가 아닌 구조화된 출력(바운딩 박스 또는 JSON)을 반환할 수 있는지를 우선적으로 확인하십시오.",
        bullets: [
          "작거나 밀도가 높은 텍스트의 경우 파라미터 수보다 네이티브 해상도 처리 능력이 더 중요합니다",
          "문서 특화 파인튜닝 모델은 스캔 및 양식 처리에서 범용 비전 모델보다 우수합니다",
          "텍스트뿐 아니라 레이아웃이 필요한 경우 구조화된 출력(JSON, 바운딩 박스) 지원 여부가 중요합니다",
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "이미지 속 텍스트를 읽으려면 모델이 멀티모달(비전-언어)이어야 합니다. 텍스트 전용 로컬 LLM은 크기와 관계없이 이미지 입력을 처리할 수 없습니다",
          "문서 특화 비전 파인튜닝 모델은 밀도가 높거나 작거나 회전된 텍스트에서 범용 멀티모달 채팅 모델을 지속적으로 능가합니다",
          "OCR 정확도에는 원시 파라미터 수보다 네이티브 이미지 해상도 지원이 더 중요합니다",
          "표 구조나 양식 필드를 JSON으로 받아야 한다면 선택 전에 모델이 구조화된 출력을 지원하는지 확인하십시오. 단순 텍스트 변환만으로는 후속 자동화에 충분하지 않습니다",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "OCR에 가장 적합한 로컬 비전 모델은 범용 이미지 캡션 모델이 아니라 문서 특화 멀티모달 모델입니다." },
          { type: 'plain-terms', text: "쉽게 말해, 사진 설명만 학습한 모델이 아니라 스캔된 문서와 양식을 대상으로 특별히 훈련된 비전 모델을 선택하십시오. 작거나 지저분한 텍스트를 훨씬 더 안정적으로 읽어냅니다." },
        ],
      },
      whatToLookFor: {
        id: 'what-to-look-for',
        title: "OCR 지원 비전 모델에서 확인해야 할 사항",
        content: [
          "<strong>해상도 처리 능력은 OCR 정확도를 결정하는 가장 큰 단일 요인입니다.</strong> 대부분의 비전-언어 모델은 처리 전에 입력 이미지를 고정된 비교적 낮은 해상도로 축소합니다. 사진을 설명하는 데는 문제가 없지만, 스캔된 인보이스의 8포인트 글꼴을 읽는 데는 치명적입니다. 문서 작업용으로 설계된 모델은 일반적으로 더 높은 네이티브 해상도를 지원하거나 큰 이미지를 여러 구획으로 나누어 처리하여 작은 텍스트를 읽는 데 필요한 디테일을 유지합니다.",
          "학습 데이터는 아키텍처만큼 중요합니다. 주로 자연 사진과 캡션으로 학습된 모델은 객체와 장면을 인식하는 법을 배우지만, 밀도 높은 텍스트를 정확하게 변환하는 법은 배우지 못합니다. 스캔된 문서, 영수증, 양식, 다단 레이아웃으로 파인튜닝된 모델은 기울어짐, 낮은 대비, 손글씨와 인쇄체가 섞인 상황 등 실제 스캔 조건에서 구조화된 텍스트를 읽는 특정 기술을 습득합니다.",
          "다국어 문자 체계 지원 범위는 모델마다 크게 다릅니다. 문서에 여러 문자 체계가 섞여 있는 경우(예: 같은 이미지 안에 라틴 문자와 다른 문자 체계가 함께 있는 경우), 모델이 다국어 채팅 데이터가 아니라 다국어 문서 데이터로 특별히 학습되었는지 확인하십시오. 채팅 중심의 다국어 학습이 동일한 언어에 대한 강력한 이미지 내 텍스트 인식을 보장하지는 않습니다.",
        ],
      },
      modelClasses: {
        id: 'model-classes',
        title: "비교해야 할 OCR 지원 도구 3가지 유형",
        content: [
          "특정 모델을 선택하기 전에 어떤 유형이 작업 부하에 적합한지 결정하십시오. 유형 간의 장단점 차이가 크기 때문에 최적의 선택은 실제로 무엇이 필요한지에 크게 좌우됩니다.",
        ],
        items: [
          "**문서 특화 비전 파인튜닝 모델:** 스캔된 문서, 양식, 영수증을 대상으로 특별히 훈련되었습니다. 밀도가 높거나 품질이 낮은 스캔에서 가장 높은 원시 OCR 정확도를 제공합니다. 이 모델은 사실상 정확히 이 작업만을 위해 훈련되었습니다. 다른 작업에도 사용하려는 경우 일반적인 대화 능력은 떨어집니다.",
          "**범용 멀티모달 채팅 모델:** OCR을 여러 기능 중 하나로 다룹니다. 이미 다른 작업에 사용 중이라면 편리하지만, 작거나 회전되었거나 대비가 낮은 텍스트에서는 문서 특화 파인튜닝 모델보다 지속적으로 정확도가 낮습니다. 실제 스캔에서는 눈에 띄게 더 많은 변환 오류가 발생할 것으로 예상해야 합니다.",
          "**전용 OCR 파이프라인(비-LLM):** 레이아웃 분석과 결합된 전통적인 텍스트 감지 및 인식 엔진입니다. 페이지당 처리 속도가 가장 빠르고 비용이 가장 저렴하며, 표준 글꼴의 깨끗하고 조명이 좋은 스캔에서는 더 정확한 경우가 많습니다. 비전-언어 모델처럼 콘텐츠에 대해 추론할 수는 없습니다. 요약도, 양식에 대한 질문 답변도, 추출된 필드의 재구성도 할 수 없습니다.",
          "문서 OCR을 지원하는 특정 비전 모델을 로컬에서 실행하는 실습 설정 안내는 [로컬 비전 모델을 이용한 문서 OCR — 설정 가이드](/ko/local-llms/run-qwen-vl-locally-2026)를 참고하십시오.",
        ],
      },
      faq: {
        id: 'faq',
        title: "자주 묻는 질문",
        faqs: [
          {
            q: "범용 로컬 LLM이 이미지 속 텍스트를 읽을 수 있습니까?",
            a: "멀티모달(비전-언어) 모델인 경우에만 가능합니다. 텍스트 전용 LLM은 파라미터 수와 관계없이 이미지 입력을 전혀 처리할 수 없습니다. 이미지를 입력으로 받으려면 언어 모델과 함께 학습된 비전 인코더가 연결되어 있어야 합니다.",
          },
          {
            q: "OCR을 지원하는 로컬 비전 모델에는 VRAM이 얼마나 필요합니까?",
            a: "동일한 파라미터 수의 텍스트 전용 모델과 대체로 비슷하며, 이미지 토큰을 위한 추가 여유분이 필요합니다. 해당 모델 크기의 텍스트 전용 수치보다 1~2GB 더 많은 VRAM을 확보하고, 고해상도 이미지나 한 번의 요청에서 여러 페이지를 처리하는 경우에는 더 많이 확보하십시오.",
          },
          {
            q: "이미지 해상도가 실제로 OCR 정확도에 그렇게 큰 영향을 미칩니까?",
            a: "예, 상당히 큰 영향을 미칩니다. 처리 전에 문서를 낮은 고정 해상도로 축소하는 모델은 모델 자체의 성능과 관계없이 작은 텍스트를 읽는 데 필요한 세밀한 디테일을 잃게 됩니다. 밀도 높은 문서에 사용하기 전에 모델이 높은 네이티브 해상도나 이미지 타일링을 지원하는지 확인하십시오.",
          },
          {
            q: "이러한 모델이 단순 텍스트가 아닌 표나 JSON 같은 구조화된 데이터를 출력할 수 있습니까?",
            a: "일부 모델은 그렇게 훈련되었거나 그렇게 요청받은 경우 가능합니다. 이는 원시 텍스트 인식과는 별개의 능력입니다. 이를 안정적으로 만드는 프롬프팅 및 제약 디코딩 기법에 대해서는 로컬 LLM에서 신뢰할 수 있는 구조화된 JSON 출력을 얻는 방법에 대한 가이드를 참고하십시오.",
          },
        ],
      },
      relatedReading: {
        title: "관련 읽을거리",
        items: [
          "[로컬 LLM에서 얻는 최적의 구조화된 JSON 출력](/ko/prompt-bites/best-structured-json-output-local-llm) — 단순 텍스트가 아닌 신뢰할 수 있는 구조화된 데이터를 얻는 기법",
          "[SQL 및 데이터 분석을 위한 최적의 로컬 LLM](/ko/prompt-bites/best-local-llm-for-sql-data-analysis) — OCR 이후 구조화된 데이터 작업을 위한 모델 선택",
        ],
      },
    },
  },
}
