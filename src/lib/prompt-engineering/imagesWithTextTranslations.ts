import type { PESection } from './content'

export const imagesWithTextDe: Record<string, PESection> = {
  definition: {
    title: 'Was ist Multimodales Prompting?',
    content: '**Multimodales Prompting kombiniert Text und Bilder in einem einzelnen Prompt, um die KI-Ausgabe zu steuern.** Vision-Language-Modelle (VLMs) – neuronale Netzwerke, die auf Bild- und Textdaten trainiert wurden – verarbeiten diese multimodalen Eingaben, um Fragen zu beantworten, Szenen zu beschreiben, neue Bilder zu generieren oder bestehende zu bearbeiten.\n\nIm Gegensatz zu reinem Text-Prompting ermöglicht multimodales Prompting das Zeigen statt Sagen. Ein Modell kann genau sehen, was du meinst, indem es visuelle Details, räumliche Beziehungen und Farben untersucht, statt sich nur auf schriftliche Beschreibung zu verlassen.',
  },

  tldr: {
    title: 'Wichtige Erkenntnisse',
    isTldr: true,
    items: [
      'Multimodales Prompting kombiniert Text und Bilder; Modelle wie GPT-4o und Claude 3.5 Sonnet zeichnen sich durch Bildanalyse und Beschreibung aus',
      'Es gibt drei Modi: Bild→Text (beschreiben/analysieren), Text→Bild (generieren) und Bild↔Bild (bearbeiten/transformieren)',
      'Vision-Language-Modelle kämpfen mit präzisem Zählen, detaillierten Objektgrenzen und dem Lesen von kleinem Text in Bildern',
      'Folge strukturierten Mustern: sei spezifisch bei Analysezielen, gib Kontext und nutze Beispiele für Konsistenz',
      'PromptQuorum ermöglicht es dir, multimodale Prompts über mehrere Modelle zu testen und Ausgaben zu vergleichen, um die beste Lösung zu finden',
    ],
  },

  modes: {
    title: 'Drei Modi des Multimodalen Prompting',
    content: 'Multimodales Prompting nimmt drei Hauptformen an, jede geeignet für verschiedene Aufgaben.',
    columns: ['Modus', 'Eingabe', 'Ausgabe', 'Beste Anwendungsfälle'],
    rows: [
      {
        'Modus': 'Bild → Text',
        'Eingabe': 'Bild + Textfrage',
        'Ausgabe': 'Textantwort',
        'Beste Anwendungsfälle': 'Bildunterschriften, Inhaltsmoderation, Objekterkennung, Dokumentenanalyse',
      },
      {
        'Modus': 'Text → Bild',
        'Eingabe': 'Textprompt',
        'Ausgabe': 'Generiertes Bild',
        'Beste Anwendungsfälle': 'Kreative Visualisierung, Design-Iteration, Illustration-Generierung',
      },
      {
        'Modus': 'Bild ↔ Bild',
        'Eingabe': 'Vorhandenes Bild + Anweisungen',
        'Ausgabe': 'Geändertes Bild',
        'Beste Anwendungsfälle': 'Inpainting, Stilübertragung, Hochskalierung, Bildkomposition',
      },
    ],
    tableFormat: true,
  },

  howVisionWorks: {
    title: 'Wie Vision-Language-Modelle Bilder sehen',
    content: [
      '**Vision-Language-Modelle wie GPT-4o, Claude 3.5 Sonnet und Gemini 1.5 Pro wandeln Bilder in hochdimensionale Vektoren (Embeddings) mit einem visuellen Encoder um und verarbeiten diese Embeddings dann neben Text-Token in einem gemeinsamen semantischen Raum.** Dieser Ansatz gibt VLMs klare Stärken über mehrere Aufgaben hinweg: Sie identifizieren Objekte, lesen Text, verstehen räumliche Beziehungen und schlussfolgern über Inhalte über mehrere Bilder hinweg. Gemini 1.5 Pro unterstützt bis zu 1 Million Token, was die Analyse längerer Multimodal-Sequenzen ermöglicht als das 128k-Kontextfenster von GPT-4o. Das Verstehen von [Kontextfenster-Limits](/prompt-engineering/context-windows-explained-why-ai-forgets?lang=de) hilft dir, Prompts zu strukturieren, die Kürzungen vermeiden, wenn du mit langen Bildbeschreibungen oder Multi-Bild-Sequenzen arbeitest.',
      'VLMs zeichnen sich durch Szenenverständnis, Dokumentenanalyse und den Vergleich visueller Elemente aus. Sie haben jedoch vorhersehbare Schwächen:',
    ],
    items: [
      'Präzises Zählen (besonders von kleinen Objekten oder Elementen in dichten Szenen)',
      'Detaillierte Objektgrenzen und genaue räumliche Messungen',
      'Lesen von winzigem Text in Bildern oder komplexen Diagrammen',
      'Verständnis von dreidimensionalen räumlichen Beziehungen aus einzelnen Winkeln',
      'Vermeidung von halluzinierten Details, die nicht im Bild vorhanden sind',
    ],
  },

  imageToText: {
    title: 'Prompt-Muster für Bild → Text',
    content: 'Wenn du ein Modell auffordert, ein Bild zu analysieren oder zu beschreiben, strukturiere deine Anfrage um vier Muster:',
    items: [
      '**Bilder beschreiben:** Gib das Analyseziel an, dann spezifiziere das Detailniveau. „Beschreibe dieses Produktfoto in 2–3 Sätzen und konzentriere dich auf Materialien, Farbe und Form" ist hilfreicher als „beschreibe das Bild."',
      '**Informationen extrahieren:** Stelle konkrete Fragen. Statt „Was ist in diesem Dokument?" fragst du „Extrahiere das Datum, die Rechnungsnummer und den Gesamtbetrag aus diesem Beleg." Sei explizit über das Format: „Listenbeschreibung aller Personen als Aufzählungspunkte."',
      '**Gezielte Fragen stellen:** Beschränke deine Frage eng. Statt „Hat dieses Bild Text?" fragst du „Lese alle sichtbaren Texte in diesem Diagramm und transkribiere sie genau." Vergleiche helfen, Halluzinationen zu vermeiden: „Welches Objekt ist am größten? Welches am kleinsten?"',
      '**Alt-Text generieren:** Für Barrierefreiheit fordere das Modell auf, WCAG-konformen Alt-Text zu erstellen. „Schreibe prägnanten Alt-Text (≤125 Zeichen) für dieses Bild, der seinen visuellen Inhalt und Kontext für einen blinden Benutzer beschreibt."',
    ],
  },

  textToImage: {
    title: 'Prompt-Muster für Text → Bild',
    content: '**Text-zu-Bild-Generierung hängt von gut strukturierten Prompts ab. Organisiere jeden Prompt um fünf Kernbausteine:**',
    items: [
      '**Subjekt:** Benenne, was du sehen möchtest. Sei spezifisch: „ein goldener Labrador mit Sonnenbrille" schlägt „ein Hund". Nutze Eigennamen: „ein Jaguar E-Type von 1961" vermittelt mehr als „ein klassisches Auto."',
      '**Aktion oder Zustand:** Beschreibe, was das Subjekt tut. „durch einen Reifen springen," „auf einem Thron sitzen," „sich in Wasser auflösen." Aktive Verben machen Bilder dynamisch; statische Beschreibungen produzieren statische Ergebnisse.',
      '**Stil und Ästhetik:** Gib die visuelle Behandlung an. Referenziere bekannte Stile: „Ölmalerei," „Noir-Filmstill," „CGI-Render," „Aquarell," „Art-Déco-Plakat." Vermeiden vage Begriffe wie „schön" – nutze konkrete Stilreferenzen.',
      '**Kontext und Umgebung:** Sag dem Modell, wo das Subjekt existiert. „in einem nebligen Wald bei Tagesanbruch," „in einer neon-beleuchteten Cyberpunk-Stadt," „auf einem Marmorsockel in einem Museum." Kontext verankert Komposition und Stimmung.',
      '**Technische Details:** Gib Beleuchtung und Kamerawinkel an. „von oben fotografiert, Goldenes-Stunden-Beleuchtung, geringe Tiefenschärfe" oder „Ultra-Weitwinkel, dramatische Schatten, hoher Kontrast." Technische Details steuern die Stimmung.',
    ],
  },

  imageEditing: {
    title: 'Prompt-Muster für Bildbearbeitung',
    content: 'Bildbearbeitung (Inpainting, Stilübertragung oder Komposition) erfordert klare Vor- und Nachher-Beschreibung und präzise Einschränkungen.',
    items: [
      '**Inpainting:** Markiere oder beschreibe die Region, die geändert werden soll. „Ersetze den Hintergrund (derzeit eine graue Wand) mit einem Sonnenuntergang über Bergen." Gib an, was unverändert bleibt: „Halte die Pose und Mimik der Person identisch; ändere nur den Hintergrund."',
      '**Stilübertragung:** Biete sowohl Referenz als auch Ziel. „Wende die Farbpalette und den Pinselstrich-Stil dieses Van-Gogh-Gemäldes (Referenz) auf diese Fotografie (Ziel) an." Gib Konservierung an: „Behalte alle Details des Originals; wende nur den Stil an."',
      '**Multi-Bild-Komposition:** Wenn du Bilder kombinierst, sei explizit. „Kombiniere diese drei Objekte in eine einzelne Szene. Ordne sie von links nach rechts auf einem Holztisch an, beleuchtet vom Sonnenlicht von oben. Blende Kanten nahtlos; stelle konsistente Schatten sicher."',
    ],
  },

  reliableOutputs: {
    title: 'Zuverlässige Ausgaben erreichen: Vier Techniken',
    content: 'Multimodale Modelle erzeugen unterschiedliche Ausgaben über verschiedene Bildtypen hinweg, aber strukturierte Prompts verbessern die Ergebnisse messbar. Diese vier Techniken erhöhen die Zuverlässigkeit:',
    items: [
      '**Detailniveau angeben:** Vage Anfragen erzeugen vage Ergebnisse. „Analysiere dieses Bild in extremem Detail" funktioniert besser als „analysiere dieses Bild." Für Generierung: „photorealistisch, 4K-Qualität, jedes Detail scharf" schlägt „ein schönes Bild."',
      '**Positive Formulierung nutzen:** Sag dem Modell, was einzubeziehen ist, nicht was auszuschließen ist. Statt „Mache die Farben nicht zu hell," sag „Nutze gedämpfte, kühle Farbtöne mit niedriger Sättigung." Statt „Füge keinen Text hinzu," sag „Stelle sicher, dass kein sichtbarer Text erscheint."',
      '**Einschränkungen explizit setzen:** Einschränkungen verankern Ausgaben. „Extrahiere genau 10 Farben aus diesem Bild, geordnet nach Häufigkeit" ist besser als „welche Farben sind in diesem Bild?" Für Generierung: „1:1 Quadrat, genau zwei Personen, einzelner Innenraum."',
      '**Vor- und Nachher-Beispiele bereitstellen:** Zeige dem Modell, wie Gutes aussieht. Füge Beispielbilder zusammen mit deiner Anfrage ein. [Few-Shot-Beispiele](/prompt-engineering/zero-shot-vs-few-shot?lang=de) verbessern die Konsistenz bei Bearbeitung und Stilübertragung dramatisch.',
    ],
  },

  pitfalls: {
    title: 'Häufige Multimodale Fallstricke',
    content: 'Vermeiden diese Fehler, um multimodale Ergebnisse zu verbessern:',
    items: [
      '**Vage Bild-Prompts:** [Schlechter Prompt] „Analysiere dieses Bild." [Guter Prompt] „Dies ist ein Screenshot einer Web-Oberfläche. Identifiziere alle Schaltflächen, Eingabefelder und Links. Für jedes, beachte seine Farbe, Position und sichtbaren Text."',
      '**Bild-Labels oder Kontext vergessen:** Sag dem Modell, was das Bild zeigt, bevor du Fragen stellst. „Dies ist ein Mikroskopiebild eines Viruspartikels. Beschreibe die sichtbare Struktur." ist besser als „Was ist das?"',
      '**Falscher Analysierungsumfang:** [Schlechter Prompt] „Zähle die Objekte in diesem Bild." [Guter Prompt] „Zähle nur die roten Äpfel in dieser Obstschale. Zähle keine anderen Früchte. Falls unsicher, beachte es."',
      '**Präzision annehmen:** Vision-Language-Modelle sind anfällig für Halluzinationen. Verlass dich nicht auf sie für Pixel-perfekte Genauigkeit. Für kritische Aufgaben verwende spezialisierte Werkzeuge (OCR für Text, Objekterkennungs-APIs für Zählen) zusammen mit VLMs.',
      '**Mit mehreren Bildern überlasten:** Die meisten VLMs handhaben 2–10 Bilder zuverlässig; die Leistung verschlechtert sich darüber hinaus. Batch sie: „Analysiere die ersten 5 Bilder. Dann analysiere die nächsten 5." Label klar: „Bild 1: [Beschreibung], Bild 2: [Beschreibung]."',
      '**Datenschutz und Jurisdiktionsrisiken mit Cloud-VLMs:** In der EU fällt das Senden von Bildern mit persönlichen Daten an Cloud-VLMs wie GPT-4o oder Gemini unter GDPR-Artikel 9, wenn biometrische Informationen beteiligt sind. Lokale Modelle über Ollama oder LM Studio verarbeiten Bilder vor Ort, halten Daten innerhalb deiner Jurisdiktion ohne externe API-Aufrufe.',
    ],
  },

  promptquorumHelps: {
    title: 'Wie PromptQuorum dir beim Prompting mit Bildern hilft',
    content: [
      '**PromptQuorum ist eine Multi-Model-Prompt-Dispatch-Plattform, mit der du multimodale Prompts gleichzeitig über GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro und andere Modelle testen kannst.** Beim Testen desselben Produktbild-Beschreibungs-Prompts über drei Modelle lieferte GPT-4o die strukturierteste Ausgabe, Claude 3.5 Sonnet erzielte die höchste Präzision bei Textextraktion und Gemini 1.5 Pro erfasste die meisten kontextuellen Details – was offenbarte, dass verschiedene Modelle bei verschiedenen Bildanalysaufgaben hervorragend sind. Claude 3.5 Sonnet ist präzise bei Dokumentenanalyse; GPT-4o zeichnet sich durch Szenenverständnis aus; Gemini 1.5 Pro handhabt komplexe Multi-Bild-Vernunft.',
      'Durch das Dispatch desselben multimodalen Prompts an alle drei siehst du, welches Modell am besten antwortet, und nutzt dann Consensus Scoring, um ihre Ausgaben zu gewichten.',
    ],
    items: [
      '**Multi-Model-Bildvergleich:** Lade ein Bild hoch und stelle dieselbe Frage über alle Modelle. Vergleiche Antworten in Sekunden, um herauszufinden, welches Modell deinen Anwendungsfall passt.',
      '**Framework-Anwendung:** Wende PromptQuorums strukturiertes Prompt-Framework auf multimodale Anfragen an. Definiere Rollen, Kontext, Einschränkungen und Ausgabeformat – dann füge ein Bild ein. Dies stellt Konsistenz über Modelle sicher.',
      '**Consensus Scoring auf Bildausgaben:** Wenn mehrere Modelle dasselbe Bild analysieren, identifiziert Consensus Scoring, welche Analysen am zuverlässigsten sind. Falls drei Modelle zustimmen, aber eins nicht, kennzeichnet der Score den Ausreißer.',
    ],
  },

  recipes: {
    title: 'Mini-Rezepte: Copy-Paste Multimodale Prompts',
    content: 'Nutze diese Vorlagen als Startpunkte für häufige Aufgaben. Jede folgt [strukturierten Prompt-Bausteinen](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=de), um Konsistenz und Wiederholbarkeit zu sichern.',
    items: [
      '**Produktfotografie:** „Analysiere dieses Produktbild und extrahiere: (1) Hauptmaterialien, (2) Farbpalette, (3) Größe relativ zur Umgebung, (4) Beleuchtungsrichtung, (5) Mängel. Sei spezifisch; vermeide generische Adjektive."',
      '**Dokumentenextraktion:** „Extrahiere allen sichtbaren Text aus diesem Dokument. Behalte Formatierung, Zeilenumbrüche und Hervorhebung. Falls Text teilweise unleserlich ist, beachte [UNKLAR] und deine beste Vermutung. Formatiere als Markdown-Codeblock."',
      '**UI/UX-Kritik:** „Identifiziere: (1) primärer Call-to-Action und Sichtbarkeit, (2) visuelle Hierarchie, (3) Abstands- und Ausrichtungsprobleme, (4) Farbkontrast-Probleme. Konzentriere dich nur auf funktionale und Barrierefreiheit-Bedenken."',
      '**Text-zu-Bild-Vorlage:** „Subjekt: [Substantiv]. Aktion: [Verb + Zustand]. Stil: [Kunststil]. Kontext: [Einstellung]. Technisch: [Kamerawinkel, Beleuchtung]. Beispiel: Subjekt: Vintage-Grammophon. Aktion: spielt mit sichtbaren Schallwellen. Stil: Surrealismus, Ölmalerei. Kontext: Antiquitätenladen, gedimmt. Technisch: Seitenwinkel, goldenes Licht, geringe Tiefenschärfe."',
      '**Bildbearbeitung:** „Bearbeite dieses Zielfeld, um den Stil dieses Referenzbildes anzupassen und dabei die Komposition und das Subjekt des Zielbildes zu bewahren. Füge keine großen Elemente hinzu oder entferne sie; wende nur Farb-, Beleuchtungs- und Texturveränderungen an."',
      '**Alt-Text-Generierung:** „Schreibe Alt-Text für dieses Bild. Muss ≤125 Zeichen sein. Beschreibe, was ein blinder oder sehbehinderter Benutzer wissen muss. Beispiel: \'ein Mann in einem blauen Anzug schüttelt einer Frau in einem roten Kleid die Hand bei einem formellen Ereignis mit einer Stadtkulisse im Hintergrund.\'"',
    ],
  },

  faq: {
    title: 'FAQ',
    faqs: [
      {
        q: 'Welches Vision-Language-Modell ist am besten zur Bildanalyse?',
        a: 'Es gibt kein einzelnes bestes Modell. GPT-4o zeichnet sich durch allgemeines Szenenverständnis und komplexe Logik aus. Claude 3.5 Sonnet ist präzise bei Dokumentenanalyse und Textextraktion. Gemini 1.5 Pro handhabt längere multimodale Kontexte (1 Million Token). Nutze PromptQuorum, um alle drei gegen deine spezifische Aufgabe zu testen.',
      },
      {
        q: 'Können Vision-Language-Modelle Objekte genau zählen?',
        a: 'Nein. VLMs kämpfen mit präzisem Zählen, besonders von kleinen oder dicht gepackten Objekten. Für genaue Zählungen verwende spezialisierte Objekterkennungs-APIs, oder bitte das Modell, Objekte mit expliziten Einschränkungen aufzuzählen: „Zähle nur rote Elemente; sei konservativ – falls unsicher, zähle es nicht."',
      },
      {
        q: 'Wie viele Bilder kann ich in einen Prompt aufnehmen?',
        a: 'Die meisten VLMs handhaben 2–10 Bilder zuverlässig. Die Leistung verschlechtert sich über 10 hinaus. Falls du viele Bilder analysieren musst, batch sie und verarbeite in Runden. Beschrifte jedes Bild klar: „Bild 1: [Beschreibung], Bild 2: [Beschreibung]."',
      },
      {
        q: 'Welche Bildformate unterstützen Vision-Language-Modelle?',
        a: 'GPT-4o, Claude 3.5 Sonnet und Gemini 1.5 Pro akzeptieren JPEG, PNG, GIF und WebP. Die meisten unterstützen Bilder bis zu 20 MB. Spezifische Limits variieren nach Modell; überprüfe OpenAI- und Anthropic-Dokumentation für aktuelle Details.',
      },
      {
        q: 'Kann ich lokale Modelle wie Ollama für multimodales Prompting verwenden?',
        a: 'Ja. Modelle wie LLaVA und Ollama unterstützen lokale Bildanalyse. Lokale Modelle bieten Datenschutz, aber niedrigere Genauigkeit als GPT-4o oder Claude 3.5 Sonnet. Nutze sie für unkritische Aufgaben oder wenn Datenschutz essentiell ist.',
      },
      {
        q: 'Wie verbessere ich die Konsistenz in der Text-zu-Bild-Generierung?',
        a: 'Nutze strukturierte Vorlagen (Subjekt/Aktion/Stil/Kontext/Technisch), gib Referenzbilder und gib Einschränkungen an (Auflösung, Komposition, Elementanzahl). Iteriere mit demselben Modell – das Wechseln von Modellen zwischen Iterationen erzeugt inkonsistente Ergebnisse.',
      },
      {
        q: 'Was ist der Unterschied zwischen Prompting für Bildanalyse versus Generierung?',
        a: 'Analyseprompts geben den Informationsumfang an („Extrahiere nur das Datum und die Rechnungsnummer"). Generierungsprompts müssen alle visuellen Elemente klar beschreiben (Subjekt, Aktion, Stil, Kontext, technische Details). Generierung erfordert mehr Präzision, da das Modell vorausdenkt statt wahrzunehmen.',
      },
    ],
  },

  relatedReading: {
    title: 'Verwandte Lektüre',
    items: [
      '[Was ist Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering?lang=de) – Grundkonzepte für alle Prompting',
      '[Die 5 Bausteine jedes Prompts](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=de) – wie Struktur auf alle Prompts, einschließlich Multimodal, anwendbar ist',
      '[Chain-of-Thought-Prompting](/prompt-engineering/chain-of-thought-prompting?lang=de) – Denkweisen, die sich mit Bild-Prompting für komplexe Aufgaben kombinieren',
    ],
  },

  sources: {
    title: 'Quellen und Weiterführende Lektüre',
    items: [
      '[OpenAI Vision API-Dokumentation](https://platform.openai.com/docs/guides/vision)',
      '[Anthropic Claude Vision-Dokumentation](https://docs.anthropic.com/en/docs/vision)',
      '[Google DeepMind Gemini Multimodal-Übersicht](https://deepmind.google/technologies/gemini/)',
    ],
  },
}

export const imagesWithTextFr: Record<string, PESection> = {
  definition: {
    title: 'Qu\'est-ce que le Prompting Multimodal?',
    content: '**Le prompting multimodal combine du texte et des images dans un seul prompt pour guider la sortie de l\'IA.** Les modèles vision-langage (VLM) – des réseaux de neurones entraînés sur des données d\'image et de texte – traitent ces entrées multimodales pour répondre aux questions, décrire des scènes, générer de nouvelles images ou modifier des images existantes.\n\nContrairement au prompting en texte seul, le prompting multimodal vous permet de montrer plutôt que dire. Un modèle peut voir exactement ce que vous entendez en examinant les détails visuels, les relations spatiales et les couleurs plutôt que de se fier uniquement à la description écrite.',
  },

  tldr: {
    title: 'Points Clés',
    isTldr: true,
    items: [
      'Le prompting multimodal combine texte et images ; des modèles comme GPT-4o et Claude 3.5 Sonnet excèlent à l\'analyse et à la description d\'images',
      'Trois modes existent : Image→Texte (décrire/analyser), Texte→Image (générer) et Image↔Image (éditer/transformer)',
      'Les modèles vision-langage ont du mal avec le comptage précis, les limites d\'objets granulaires et la lecture de petit texte dans les images',
      'Suivez des modèles structurés : soyez précis sur les objectifs d\'analyse, fournissez du contexte et utilisez des exemples pour la cohérence',
      'PromptQuorum vous permet de tester des prompts multimodaux sur plusieurs modèles pour comparer les résultats et trouver le meilleur ajustement',
    ],
  },

  modes: {
    title: 'Trois Modes du Prompting Multimodal',
    content: 'Le prompting multimodal prend trois formes principales, chacune adaptée à des tâches différentes.',
    columns: ['Mode', 'Entrée', 'Sortie', 'Meilleurs Cas d\'Usage'],
    rows: [
      {
        'Mode': 'Image → Texte',
        'Entrée': 'Image + question textuelle',
        'Sortie': 'Réponse textuelle',
        'Meilleurs Cas d\'Usage': 'Légendes, modération de contenu, détection d\'objets, analyse de documents',
      },
      {
        'Mode': 'Texte → Image',
        'Entrée': 'Prompt textuel',
        'Sortie': 'Image générée',
        'Meilleurs Cas d\'Usage': 'Visualisation créative, itération de conception, génération d\'illustrations',
      },
      {
        'Mode': 'Image ↔ Image',
        'Entrée': 'Image existante + instructions',
        'Sortie': 'Image modifiée',
        'Meilleurs Cas d\'Usage': 'Inpainting, transfert de style, mise à l\'échelle, composition d\'images',
      },
    ],
    tableFormat: true,
  },

  howVisionWorks: {
    title: 'Comment les Modèles Vision-Langage Voient les Images',
    content: [
      '**Les modèles vision-langage comme GPT-4o, Claude 3.5 Sonnet et Gemini 1.5 Pro convertissent les images en vecteurs de haute dimension (embeddings) en utilisant un encodeur visuel, puis traitent ces embeddings aux côtés des tokens de texte dans un espace sémantique partagé.** Cette approche donne aux VLM des forces claires sur plusieurs tâches : ils identifient les objets, lisent le texte, comprennent les relations spatiales et raisonnent sur le contenu dans plusieurs images. Gemini 1.5 Pro supporte jusqu\'à 1 million de tokens, permettant l\'analyse de séquences multimodales plus longues que la fenêtre de contexte 128k de GPT-4o. Comprendre [les limites des fenêtres de contexte](/prompt-engineering/context-windows-explained-why-ai-forgets?lang=fr) vous aide à structurer des prompts qui évitent la troncature lorsque vous travaillez avec de longues descriptions d\'images ou des séquences multi-images.',
      'Les VLM excellent à la compréhension de scènes, l\'analyse de documents et la comparaison d\'éléments visuels. Cependant, ils ont des faiblesses prévisibles :',
    ],
    items: [
      'Comptage précis (surtout des petits objets ou des articles dans des scènes denses)',
      'Limites d\'objets granulaires et mesures spatiales exactes',
      'Lecture du petit texte dans les images ou les diagrammes complexes',
      'Compréhension des relations spatiales tridimensionnelles sous des angles simples',
      'Éviter les détails hallucines non présents dans l\'image',
    ],
  },

  imageToText: {
    title: 'Modèles de Prompting pour Image → Texte',
    content: 'Lorsque vous demandez à un modèle d\'analyser ou de décrire une image, structurez votre demande autour de quatre modèles :',
    items: [
      '**Description d\'images :** Énoncez l\'objectif de l\'analyse, puis spécifiez le niveau de détail. « Décrivez cette photo de produit en 2–3 phrases, en mettant l\'accent sur les matériaux, la couleur et la forme » est plus utile que « décrivez l\'image. »',
      '**Extraction d\'informations :** Posez des questions concrètes. Au lieu de « Qu\'est-ce qui est dans ce document ? », posez « Extrayez la date, le numéro de facture et le montant total de ce reçu. » Soyez explicite sur le format : « Listez toutes les personnes mentionnées sous forme de points de liste. »',
      '**Questions ciblées :** Limitez votre question étroitement. Au lieu de « Cette image contient-elle du texte ? », demandez « Lisez tout le texte visible dans ce diagramme et transcrivez-le exactement. » Les comparaisons aident à éviter les hallucinations : « Quel objet est le plus grand ? Quel est le plus petit ? »',
      '**Génération de texte alternatif :** Pour l\'accessibilité, demandez au modèle de créer du texte alternatif conforme à WCAG. « Écrivez un texte alternatif concis (≤125 caractères) pour cette image qui décrit son contenu visuel et son contexte pour un utilisateur aveugle. »',
    ],
  },

  textToImage: {
    title: 'Modèles de Prompting pour Texte → Image',
    content: '**La génération texte-image dépend de prompts bien structurés. Organisez chaque prompt autour de cinq éléments fondamentaux :**',
    items: [
      '**Sujet :** Nommez ce que vous voulez voir. Soyez précis : « un Golden Retriever portant des lunettes de soleil » surpasse « un chien ». Utilisez les noms propres : « une Jaguar E-Type de 1961 » transmet plus qu\'« une voiture classique. »',
      '**Action ou état :** Décrivez ce que fait le sujet. « sauter dans un cerceau, » « assis sur un trône, » « se fondre dans l\'eau. » Les verbes actifs rendent les images dynamiques ; les descriptions statiques produisent des résultats statiques.',
      '**Style et esthétique :** Spécifiez le traitement visuel. Référencez les styles connus : « peinture à l\'huile, » « still de film noir, » « rendu CGI, » « aquarelle, » « affiche Art Déco. » Évitez les termes vagues comme « beau » – utilisez des références de style concrètes.',
      '**Contexte et environnement :** Dites au modèle où le sujet existe. « dans une forêt brumeuse à l\'aube, » « dans une ville cyberpunk éclairée au néon, » « sur un socle de marbre dans un musée. » Le contexte ancre la composition et l\'ambiance.',
      '**Détails techniques :** Spécifiez l\'éclairage et l\'angle de caméra. « photographié d\'en haut, éclairage golden hour, faible profondeur de champ » ou « ultra grand angle, ombres dramatiques, contraste élevé. » Les détails techniques contrôlent l\'ambiance.',
    ],
  },

  imageEditing: {
    title: 'Modèles de Prompting pour l\'Édition d\'Images',
    content: 'L\'édition d\'images (inpainting, transfert de style ou composition) nécessite une description avant/après claire et des contraintes précises.',
    items: [
      '**Inpainting :** Marquez ou décrivez la région à modifier. « Remplacez l\'arrière-plan (actuellement un mur gris) par un coucher de soleil sur les montagnes. » Spécifiez ce qui reste inchangé : « Gardez la pose et l\'expression de la personne identiques ; changez uniquement l\'arrière-plan. »',
      '**Transfert de style :** Fournissez à la fois la référence et la cible. « Appliquez la palette de couleurs et le style de coup de pinceau de cette peinture de Van Gogh (référence) à cette photographie (cible). » Spécifiez la préservation : « Gardez tous les détails de l\'original ; appliquez uniquement le style. »',
      '**Composition multi-images :** Lors de la combinaison d\'images, soyez explicite. « Combinez ces trois objets dans une seule scène. Arrangez-les de gauche à droite sur une table en bois, éclairés par la lumière du soleil d\'en haut. Mélangez les bords en toute transparence ; assurez-vous des ombres cohérentes. »',
    ],
  },

  reliableOutputs: {
    title: 'Obtenir des Résultats Fiables : Quatre Techniques',
    content: 'Les modèles multimodaux produisent des résultats inconsistants selon les types d\'images, mais les prompts structurés améliorent mesurément les résultats. Ces quatre techniques augmentent la fiabilité :',
    items: [
      '**Spécifiez le niveau de détail :** Les demandes vagues produisent des résultats vagues. « Analysez cette image en détail extrême » fonctionne mieux que « analysez cette image. » Pour la génération : « photorealisque, qualité 4K, chaque détail net » surpasse « une belle image. »',
      '**Utilisez un cadrage positif :** Dites au modèle ce à inclure, pas ce à exclure. Au lieu de « Ne rendez pas les couleurs trop brillantes, » dites « Utilisez des couleurs sourdes et froides avec une faible saturation. » Au lieu de « N\'ajoutez pas de texte, » dites « Assurez-vous qu\'aucun texte visible n\'apparaît. »',
      '**Définissez des contraintes explicitement :** Les contraintes ancrent les résultats. « Extrayez exactement 10 couleurs de cette image, classées par fréquence » est mieux que « quelles sont les couleurs dans cette image ? » Pour la génération : « carré 1:1, exactement deux personnes, pièce intérieure unique. »',
      '**Fournir des exemples avant/après :** Montrez au modèle ce que le bien ressemble. Incluez des images d\'exemple aux côtés de votre demande. [Les exemples few-shot](/prompt-engineering/zero-shot-vs-few-shot?lang=fr) améliorent dramatiquement la cohérence pour l\'édition et le transfert de style.',
    ],
  },

  pitfalls: {
    title: 'Pièges Multimodaux Courants',
    content: 'Évitez ces erreurs pour améliorer les résultats multimodaux :',
    items: [
      '**Prompts d\'image vagues :** [Mauvais Prompt] « Analysez cette image. » [Bon Prompt] « Ceci est une capture d\'écran d\'une interface Web. Identifiez tous les boutons, les champs de saisie et les liens. Pour chacun, notez sa couleur, sa position et son texte visible. »',
      '**Oublier les étiquettes d\'image ou le contexte :** Dites au modèle ce que l\'image montre avant de poser des questions. « Ceci est une image microscopique d\'une particule de virus. Décrivez la structure visible. » est mieux que « Qu\'est-ce que c\'est ? »',
      '**Mauvaise portée d\'analyse :** [Mauvais Prompt] « Comptez les objets dans cette image. » [Bon Prompt] « Comptez uniquement les pommes rouges dans ce panier de fruits. Ne comptez pas les autres fruits. Si incertain, notez-le. »',
      '**Assumant la précision :** Les modèles vision-langage sont sujets aux hallucinations. Ne vous fiez pas à eux pour une précision au pixel près. Pour les tâches critiques, utilisez des outils spécialisés (OCR pour le texte, APIs de détection d\'objets pour le comptage) aux côtés des VLM.',
      '**Surcharger avec plusieurs images :** La plupart des VLM gèrent 2–10 images de manière fiable ; les performances se dégradent au-delà. Groupez-les : « Analysez les 5 premières images. Ensuite, analysez les 5 prochaines. » Étiquetez clairement : « Image 1 : [description], Image 2 : [description]. »',
      '**Risques de confidentialité et de juridiction avec les VLM cloud :** Dans l\'UE, l\'envoi d\'images contenant des données personnelles aux VLM cloud comme GPT-4o ou Gemini relève de l\'article 9 du RGPD si des informations biométriques sont impliquées. Les modèles locaux via Ollama ou LM Studio traitent les images sur l\'appareil, gardant les données dans votre juridiction sans appels d\'API externes.',
    ],
  },

  promptquorumHelps: {
    title: 'Comment PromptQuorum Vous Aide à Faire des Prompts avec des Images',
    content: [
      '**PromptQuorum est une plateforme de dispatch multi-modèle qui vous permet de tester des prompts multimodaux sur GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro et d\'autres modèles simultanément.** Lors du test du même prompt de description d\'image de produit sur trois modèles, GPT-4o a renvoyé la sortie la plus structurée, Claude 3.5 Sonnet a atteint la plus haute précision sur l\'extraction de texte et Gemini 1.5 Pro a capturé le plus de détails contextuels – révélant que différents modèles excellent à différentes tâches d\'analyse d\'images. Claude 3.5 Sonnet est précis pour l\'analyse de documents ; GPT-4o excelle à la compréhension de scènes ; Gemini 1.5 Pro gère le raisonnement multi-image complexe.',
      'En distribuant le même prompt multimodal aux trois, vous voyez quel modèle répond le mieux, puis utilisez Consensus Scoring pour peser leurs résultats.',
    ],
    items: [
      '**Comparaison d\'images multi-modèles :** Téléchargez une image et posez la même question sur tous les modèles. Comparez les réponses en secondes pour découvrir quel modèle convient à votre cas d\'usage.',
      '**Application du framework :** Appliquez le framework de prompt structuré de PromptQuorum aux demandes multimodales. Définissez les rôles, le contexte, les contraintes et le format de sortie – puis incluez une image. Cela assure la cohérence entre les modèles.',
      '**Consensus Scoring sur les résultats d\'image :** Lorsque plusieurs modèles analysent la même image, Consensus Scoring identifie quelles analyses sont les plus fiables. Si trois modèles sont d\'accord mais qu\'un ne l\'est pas, le score signale l\'anomalie.',
    ],
  },

  recipes: {
    title: 'Mini Recettes : Prompts Multimodaux Copy-Paste',
    content: 'Utilisez ces modèles comme points de départ pour les tâches courantes. Chacun suit [les éléments de construction de prompt structurés](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=fr) pour assurer la cohérence et la répétabilité.',
    items: [
      '**Photographie de produit :** « Analysez cette image de produit et extrayez : (1) matériaux principaux, (2) palette de couleurs, (3) taille relative aux environs, (4) direction d\'éclairage, (5) défauts. Soyez précis ; évitez les adjectifs génériques. »',
      '**Extraction de documents :** « Extrayez tout le texte visible de ce document. Préservez la mise en forme, les sauts de ligne et l\'emphase. Si le texte est partiellement illisible, notez [FLOU] et votre meilleure supposition. Formatez comme un bloc de code markdown. »',
      '**Critique d\'interface utilisateur :** « Identifiez : (1) appel à l\'action principal et proéminence, (2) hiérarchie visuelle, (3) problèmes d\'espacement et d\'alignement, (4) problèmes de contraste des couleurs. Concentrez-vous uniquement sur les préoccupations fonctionnelles et d\'accessibilité. »',
      '**Modèle texte-image :** « Sujet : [nom]. Action : [verbe + état]. Style : [style d\'art]. Contexte : [paramètre]. Technique : [angle de caméra, éclairage]. Exemple : Sujet : gramophone vintage. Action : joue avec des ondes sonores visibles. Style : surréalisme, peinture à l\'huile. Contexte : magasin d\'antiquités, faiblement éclairé. Technique : angle latéral, lumière dorée, faible profondeur de champ. »',
      '**Édition d\'image :** « Éditez cette image cible pour correspondre au style de cette image de référence tout en préservant la composition et le sujet de l\'image cible. N\'ajoutez pas et ne supprimez pas les éléments majeurs ; appliquez uniquement les modifications de couleur, d\'éclairage et de texture. »',
      '**Génération de texte alternatif :** « Écrivez le texte alternatif pour cette image. Doit être ≤125 caractères. Décrivez ce qu\'un utilisateur aveugle ou malvoyant doit savoir. Exemple : \'un homme en costume bleu serre la main d\'une femme en robe rouge lors d\'un événement formel avec une vue urbaine en arrière-plan.\' »',
    ],
  },

  faq: {
    title: 'FAQ',
    faqs: [
      {
        q: 'Quel modèle vision-langage est le meilleur pour analyser les images?',
        a: 'Il n\'y a pas de modèle unique meilleur. GPT-4o excelle à la compréhension générale des scènes et au raisonnement complexe. Claude 3.5 Sonnet est précis pour l\'analyse de documents et l\'extraction de texte. Gemini 1.5 Pro gère des contextes multimodaux plus longs (1 million de tokens). Utilisez PromptQuorum pour tester les trois contre votre tâche spécifique.',
      },
      {
        q: 'Les modèles vision-langage peuvent-ils compter les objets avec précision?',
        a: 'Non. Les VLM ont du mal avec le comptage précis, surtout des petits objets ou d\'articles densément emballés. Pour des comptages exacts, utilisez des APIs de détection d\'objets spécialisées, ou demandez au modèle d\'énumérer les objets avec des contraintes explicites : « Comptez uniquement les éléments rouges ; soyez conservateur – en cas de doute, ne le comptez pas. »',
      },
      {
        q: 'Combien d\'images puis-je inclure dans un seul prompt?',
        a: 'La plupart des VLM gèrent 2–10 images de manière fiable. Les performances se dégradent au-delà de 10. Si vous avez besoin d\'analyser beaucoup d\'images, groupez-les et traitez-les par cycles. Étiquetez chaque image clairement : « Image 1 : [description], Image 2 : [description]. »',
      },
      {
        q: 'Quels formats d\'image les modèles vision-langage supportent-ils?',
        a: 'GPT-4o, Claude 3.5 Sonnet et Gemini 1.5 Pro acceptent JPEG, PNG, GIF et WebP. La plupart prennent en charge des images jusqu\'à 20 MB. Les limites spécifiques varient selon le modèle ; consultez la documentation OpenAI et Anthropic pour les détails actuels.',
      },
      {
        q: 'Puis-je utiliser des modèles locaux comme Ollama pour le prompting multimodal?',
        a: 'Oui. Des modèles comme LLaVA et Ollama prennent en charge l\'analyse d\'images locales. Les modèles locaux offrent la confidentialité mais une précision inférieure à GPT-4o ou Claude 3.5 Sonnet. Utilisez-les pour les tâches non critiques ou lorsque la confidentialité est essentielle.',
      },
      {
        q: 'Comment améliorer la cohérence dans la génération texte-image?',
        a: 'Utilisez des modèles structurés (Sujet/Action/Style/Contexte/Technique), fournissez des images de référence et spécifiez des contraintes (résolution, composition, nombre d\'éléments). Itérez avec le même modèle – changer de modèles entre les itérations produit des résultats incohérents.',
      },
      {
        q: 'Quelle est la différence entre le prompting pour l\'analyse d\'images par rapport à la génération?',
        a: 'Les prompts d\'analyse spécifient la portée de l\'information (« Extrayez uniquement la date et le numéro de facture »). Les prompts de génération doivent décrire clairement tous les éléments visuels (sujet, action, style, contexte, détails techniques). La génération exige plus de précision car le modèle imagine plutôt que de percevoir.',
      },
    ],
  },

  relatedReading: {
    title: 'Lectures Connexes',
    items: [
      '[Qu\'est-ce que le Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering?lang=fr) – concepts fondamentaux pour tous les prompts',
      '[Les 5 Éléments Fondamentaux de Chaque Prompt](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=fr) – comment la structure s\'applique à tous les prompts, y compris multimodal',
      '[Prompting Chain-of-Thought](/prompt-engineering/chain-of-thought-prompting?lang=fr) – modèles de raisonnement qui se combinent avec les prompts d\'image pour les tâches complexes',
    ],
  },

  sources: {
    title: 'Sources et Lectures Complémentaires',
    items: [
      '[Documentation de l\'API OpenAI Vision](https://platform.openai.com/docs/guides/vision)',
      '[Documentation de Claude Vision d\'Anthropic](https://docs.anthropic.com/en/docs/vision)',
      '[Aperçu Multimodal Google DeepMind Gemini](https://deepmind.google/technologies/gemini/)',
    ],
  },
}

export const imagesWithTextJa: Record<string, PESection> = {
  definition: {
    title: 'マルチモーダルプロンプティングとは何か?',
    content: '**マルチモーダルプロンプティングは、単一のプロンプトにテキストと画像を組み合わせて、AI出力をガイドすることです。** ビジョン言語モデル(VLM)—画像とテキストの両方のデータで訓練されたニューラルネットワーク—これらのマルチモーダル入力を処理して、質問に回答したり、シーンを説明したり、新しい画像を生成したり、既存の画像を編集したりします。\n\nテキストのみのプロンプティングとは異なり、マルチモーダルプロンプティングは話すのではなく見せることができます。モデルは、書かれた説明だけに頼るのではなく、視覚的な詳細、空間的関係、および色を検査することで、あなたが何を意味するかを正確に見ることができます。',
  },

  tldr: {
    title: '重要なポイント',
    isTldr: true,
    items: [
      'マルチモーダルプロンプティングはテキストと画像を組み合わせます; GPT-4oやClaude 3.5 Sonnetのようなモデルは画像分析と説明に優れています',
      '3つのモードが存在します: 画像→テキスト(説明/分析)、テキスト→画像(生成)、画像↔画像(編集/変換)',
      'ビジョン言語モデルは正確なカウント、細粒度のオブジェクト境界、および画像内の小さなテキストの読み取りに苦労します',
      '構造化されたパターンに従います: 分析の目標について具体的であり、文脈を提供し、一貫性のための例を使用してください',
      'PromptQuorumを使用すると、複数のモデル間でマルチモーダルプロンプトをテストして、出力を比較し、最適なフィットを見つけることができます',
    ],
  },

  modes: {
    title: 'マルチモーダルプロンプティングの3つのモード',
    content: 'マルチモーダルプロンプティングは、さまざまなタスクに適した3つの主要な形式をとります。',
    columns: ['モード', '入力', '出力', '最適なユースケース'],
    rows: [
      {
        'モード': '画像 → テキスト',
        '入力': '画像 + テキスト質問',
        '出力': 'テキスト応答',
        '最適なユースケース': 'キャプション、コンテンツモデレーション、オブジェクト検出、ドキュメント解析',
      },
      {
        'モード': 'テキスト → 画像',
        '入力': 'テキストプロンプト',
        '出力': '生成された画像',
        '最適なユースケース': 'クリエイティブな視覚化、デザイン反復、イラスト生成',
      },
      {
        'モード': '画像 ↔ 画像',
        '入力': '既存の画像 + 指示',
        '出力': '修正された画像',
        '最適なユースケース': 'インペインティング、スタイル転送、アップスケーリング、画像合成',
      },
    ],
    tableFormat: true,
  },

  howVisionWorks: {
    title: 'ビジョン言語モデルが画像を見る方法',
    content: [
      '**GPT-4o、Claude 3.5 Sonnet、Gemini 1.5 Proなどのビジョン言語モデルは、ビジュアルエンコーダーを使用して画像を高次元ベクトル(埋め込み)に変換し、その後、共有されたセマンティック空間のテキストトークンと並行してこれらの埋め込みを処理します。** このアプローチはVLMに複数のタスク全体にわたって明確な強みを与えます: オブジェクトを識別し、テキストを読み、空間的関係を理解し、複数の画像全体でコンテンツについて推論します。Gemini 1.5 Proは最大100万トークンをサポートしており、GPT-4oの128kコンテキストウィンドウよりも長いマルチモーダルシーケンスの分析を可能にします。[コンテキストウィンドウの制限](/prompt-engineering/context-windows-explained-why-ai-forgets?lang=ja)を理解することは、長い画像説明またはマルチ画像シーケンスで作業する際にトリミングを回避するプロンプトを構造化するのに役立ちます。',
      'VLMはシーン理解、ドキュメント分析、および視覚的要素の比較に優れています。ただし、予測可能な弱点があります:',
    ],
    items: [
      '正確なカウント(特に小さなオブジェクトまたは密集した場面のアイテム)',
      '細粒度のオブジェクト境界と正確な空間測定',
      '画像内の小さいテキストまたは複雑な図の読み取り',
      '単一の角度からの3次元空間的関係の理解',
      '画像に存在しない幻想的な詳細の回避',
    ],
  },

  imageToText: {
    title: '画像 → テキストのプロンプトパターン',
    content: 'モデルに画像を分析または説明するよう求める場合は、4つのパターンの周りに要求を構造化します:',
    items: [
      '**画像を説明する:** 分析の目標を述べ、詳細のレベルを指定します。「この製品写真を2〜3文で説明し、材料、色、形に焦点を当ててください」は「画像を説明してください」よりも役立ちます。',
      '**情報を抽出する:** 具体的な質問をしてください。「このドキュメントには何がありますか?」の代わりに、「このレシートから日付、請求書番号、および合計金額を抽出してください。」形式について明確にしてください: 「すべての言及された人をリストアイテムとしてリスト化してください。」',
      '**ターゲットを絞った質問:** 質問を狭く範囲を絞ります。「この画像にはテキストがありますか?」の代わりに、「このダイアグラムのすべての表示テキストを読み、正確に転写してください。」比較は幻想を回避するのに役立ちます: 「どのオブジェクトが最大ですか? どのオブジェクトが最も小さいですか?」',
      '**代替テキスト生成:** アクセシビリティのために、モデルにWCAG準拠の代替テキストを作成するよう依頼してください。「この画像の代替テキスト(≤125文字)を書いて、視覚的なコンテンツと盲目のユーザーの文脈を説明してください。」',
    ],
  },

  textToImage: {
    title: 'テキスト → 画像のプロンプトパターン',
    content: '**テキスト-画像生成は、構造化されたプロンプトに依存しています。すべてのプロンプトを5つのコア構成要素の周りに組織してください:**',
    items: [
      '**主題:** あなたが見たいものを名前で指定してください。具体的にしてください: 「サングラスをかけたゴールデンレトリーバー」は「犬」を打ちます。固有名詞を使用してください: 「1961年のジャガーEタイプ」は「クラシックカー」よりも多くを伝えます。',
      '**アクションまたは状態:** 主題が何をしているかを説明します。「フープを飛び越える」、「王座に座っている」、「水に溶ける」。能動的な動詞は画像をダイナミックにします。静的な説明は静的な結果を生み出します。',
      '**スタイルと美学:** 視覚的な扱いを指定します。既知のスタイルを参照してください: 「油絵」、「ノワール映画スティル」、「CGIレンダー」、「水彩」、「アールデコポスター」。「美しい」のような曖昧な用語を避けてください—具体的なスタイル参照を使用してください。',
      '**文脈と環境:** モデルに主題が存在する場所を伝えます。「夜明けで霧のかかった森の中」、「ネオンで明るいサイバーパンクの街」、「美術館の大理石の台座の上」。文脈は構成と気分を固定します。',
      '**技術的な詳細:** 照明とカメラアングルを指定します。「上から撮影、ゴールデンアワーライティング、浅い被写界深度」または「超広角、劇的な影、高いコントラスト」。技術的な詳細は気分を制御します。',
    ],
  },

  imageEditing: {
    title: '画像編集のプロンプトパターン',
    content: '画像編集(インペインティング、スタイル転送、または合成)には、明確な前後の説明と正確な制約が必要です。',
    items: [
      '**インペインティング:** 変更する領域をマークまたは説明します。「背景(現在は灰色の壁)を山上の日没に置き換えます。」変わらないものを指定してください: 「人のポーズと表現を同じに保ってください; 背景のみを変更してください。」',
      '**スタイル転送:** リファレンスとターゲットの両方を提供します。「このファン・ゴッホの絵画(リファレンス)の色パレットとブラシストロークスタイルをこの写真(ターゲット)に適用します。」保存を指定してください: 「オリジナルのすべての詳細を保持してください; スタイルのみを適用してください。」',
      '**マルチ画像合成:** 画像を組み合わせるときは、明示的にしてください。「これら3つのオブジェクトを単一のシーンに組み合わせます。木製のテーブルの上に左から右に配置し、上から日光で照らします。端をシームレスにブレンドします; 一貫した影を確保します。」',
    ],
  },

  reliableOutputs: {
    title: '信頼できる出力の取得: 4つのテクニック',
    content: 'マルチモーダルモデルは異なる画像タイプ全体で不一致な出力を生成しますが、構造化されたプロンプトは測定可能に結果を改善します。これら4つのテクニックは信頼性を向上させます:',
    items: [
      '**詳細レベルを指定:** あいまいなリクエストはあいまいな結果を生み出します。「この画像を非常に詳細に分析する」は「この画像を分析する」よりも機能します。生成の場合: 「フォトリアリスティック、4K品質、すべての詳細がシャープ」は「良い画像」を打ちます。',
      '**前向きなフレーミングを使用:** 除外するのではなく、何を含めるかをモデルに伝えます。「色を明るくしないでください」の代わりに、「柔らかく、涼しい色で低彩度を使用してください」と言ってください。「テキストを追加しないでください」の代わりに、「目に見えるテキストが表示されないようにしてください」と言ってください。',
      '**制約を明示的に設定:** 制約は出力を固定します。「この画像から正確に10色を抽出し、頻度でランク付けしてください」は「この画像の色は何ですか?」よりも優れています。生成の場合: 「1:1正方形、正確に2人、単一の室内室」。',
      '**前後の例を提供:** モデルに良いものの例を見せてください。リクエストと一緒にサンプル画像を含めてください。[フューショットの例](/prompt-engineering/zero-shot-vs-few-shot?lang=ja)は編集とスタイル転送の一貫性を劇的に改善します。',
    ],
  },

  pitfalls: {
    title: '一般的なマルチモーダルの落とし穴',
    content: 'これらの間違いを回避して、マルチモーダルの結果を改善します:',
    items: [
      '**曖昧な画像プロンプト:** [悪いプロンプト] 「この画像を分析してください。」[良いプロンプト] 「これはウェブインターフェイスのスクリーンショットです。すべてのボタン、入力フィールド、リンクを識別します。それぞれについて、その色、位置、目に見えるテキストをメモしてください。」',
      '**画像ラベルまたはコンテキストを忘れる:** 質問する前に、画像が何を示しているかをモデルに伝えます。「これはウイルス粒子の顕微鏡画像です。表示される構造を説明してください。」は「それは何ですか?」よりも優れています。',
      '**間違った分析スコープ:** [悪いプロンプト] 「この画像のオブジェクトをカウントします。」[良いプロンプト] 「この果物ボウルの赤いリンゴのみをカウントしてください。他の果物をカウントしないでください。確実でない場合は、それをメモしてください。」',
      '**精度を仮定する:** ビジョン言語モデルは幻想の影響を受けやすいです。ピクセルパーフェクトの精度に頼らないでください。重大なタスクでは、VLMと一緒に特殊なツール(テキストの場合はOCR、カウントの場合はオブジェクト検出API)を使用してください。',
      '**複数の画像で過負荷にする:** ほとんどのVLMは2〜10個の画像を確実に処理します; パフォーマンスはそれ以上に低下します。それらをバッチ化してください: 「最初の5つの画像を分析してください。その後、次の5つを分析します。」明確にラベル付けしてください: 「画像1:[説明]、画像2:[説明]。」',
      '**クラウドVLMを使用した違反と法的管轄権リスク:** EUでは、生体認証情報が関連する場合、GPT-4oやGeminiなどのクラウドVLMに個人データを含む画像を送信することはGDPR第9条に該当します。OllamaまたはLM Studioを介したローカルモデルは、外部APIコールなしに、デバイス上で画像を処理し、管轄区域内にデータを保ちます。',
    ],
  },

  promptquorumHelps: {
    title: 'PromptQuorumが画像でのプロンプティングを支援する方法',
    content: [
      '**PromptQuorumはマルチモデルプロンプトディスパッチプラットフォームで、GPT-4o、Claude 3.5 Sonnet、Gemini 1.5 Pro、および他のモデル全体でマルチモーダルプロンプトを同時にテストできます。** 3つのモデル全体で同じ製品画像説明プロンプトをテストしたとき、GPT-4oは最も構造化された出力を返し、Claude 3.5 Sonnetはテキスト抽出で最高の精度を達成し、Gemini 1.5 Proは最も状況に応じた詳細をキャプチャしました—異なるモデルが異なる画像分析タスクで優れていることを明らかにしました。Claude 3.5 Sonnetはドキュメント分析に正確です; GPT-4oはシーン理解に優れています; Gemini 1.5 Proは複雑なマルチ画像推論を処理します。',
      'マルチモーダルプロンプトを3つすべてにディスパッチすることで、どのモデルが最適に回答するか、その後、Consensus Scoringを使用して出力に重み付けします。',
    ],
    items: [
      '**マルチモデル画像比較:** 画像をアップロードし、すべてのモデル全体で同じ質問をしてください。数秒で応答を比較して、どのモデルがユースケースに適しているかを発見してください。',
      '**フレームワークアプリケーション:** PromptQuorumの構造化プロンプトフレームワークをマルチモーダルリクエストに適用します。ロール、文脈、制約、および出力形式を定義し、次に画像を含めます。これはモデル全体の一貫性を確保します。',
      '**画像出力のコンセンサススコアリング:** 複数のモデルが同じ画像を分析するとき、Consensus Scoringはどの分析が最も信頼できるかを識別します。3つのモデルが同意しているが1つがそうでない場合、スコアは異常値にフラグを立てます。',
    ],
  },

  recipes: {
    title: 'ミニレシピ: コピー-ペーストマルチモーダルプロンプト',
    content: '一般的なタスクのスターティングポイントとしてこれらのテンプレートを使用してください。それぞれは[構造化されたプロンプト構成要素](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=ja)に従って、一貫性と反復性を確保します。',
    items: [
      '**製品写真:** 「この製品画像を分析して抽出します: (1)主な材料、(2)カラーパレット、(3)周辺への大きさ、(4)照明方向、(5)欠陥。具体的であること; 一般的な形容詞を避けてください。」',
      '**ドキュメント抽出:** 「このドキュメントからすべての目に見えるテキストを抽出します。フォーマット、改行、強調を保持します。テキストが部分的に読めない場合は、[不明]とあなたの最良の推測をメモしてください。マークダウンコードブロックとしてフォーマットします。」',
      '**UI/UXクリティーク:** 「識別: (1)主なコールトゥアクションとプロミネンス、(2)視覚的階層、(3)間隔と配置の問題、(4)色のコントラスト問題。機能的およびアクセシビリティの懸念のみに焦点を当ててください。」',
      '**テキスト-イメージテンプレート:** 「主題: [名詞]。アクション: [動詞+状態]。スタイル: [アートスタイル]。文脈: [設定]。技術的: [カメラアングル、照明]。例: 主題:ビンテージグラモフォン。アクション:見える音波で演奏。スタイル:シュルレアリスム、油絵。文脈:アンティークショップ、薄暗い。技術的:サイドアングル、ゴールデンライト、浅い被写界深度。」',
      '**画像編集:** 「このターゲット画像を編集して、このリファレンス画像のスタイルに一致させながら、ターゲット画像の構成と主題を保持します。主要な要素を追加または削除しないでください; 色、照明、テクスチャの変更のみを適用してください。」',
      '**代替テキスト生成:** 「この画像の代替テキストを書きます。≤125文字である必要があります。盲目または弱視のユーザーが知る必要があることを説明してください。例: \'青いスーツを着た男性は、都市の背景を持つ正式なイベントで赤いドレスを着た女性と握手します。\'」',
    ],
  },

  faq: {
    title: 'よくある質問',
    faqs: [
      {
        q: '画像を分析するのに最適なビジョン言語モデルはどれですか?',
        a: '単一の最良のモデルはありません。GPT-4oは一般的なシーン理解と複雑な推論に優れています。Claude 3.5 Sonnetはドキュメント分析とテキスト抽出に正確です。Gemini 1.5 Proはより長いマルチモーダルコンテキスト(100万トークン)を処理します。PromptQuorumを使用して、特定のタスクに対して3つすべてをテストします。',
      },
      {
        q: 'ビジョン言語モデルはオブジェクトを正確にカウントできますか?',
        a: 'いいえ。VLMは正確なカウント、特に小さなオブジェクトまたは密集したアイテムのカウントに苦労しています。正確なカウントの場合は、特殊なオブジェクト検出API、またはモデルに明示的な制約を使用してオブジェクトを列挙するよう求めます: 「赤いアイテムのみをカウントしてください; 保守的であってください—確実でない場合はカウントしないでください。」',
      },
      {
        q: '1つのプロンプトに何個の画像を含めることができますか?',
        a: 'ほとんどのVLMは2〜10個の画像を確実に処理します。パフォーマンスはそれ以上に低下します。多数の画像を分析する必要がある場合は、バッチ化して処理してください。各画像に明確にラベルを付けてください: 「画像1:[説明]、画像2:[説明]。」',
      },
      {
        q: 'ビジョン言語モデルはどの画像形式をサポートしていますか?',
        a: 'GPT-4o、Claude 3.5 Sonnet、Gemini 1.5 ProはJPEG、PNG、GIF、WebPを受け入れます。ほとんどは最大20 MBの画像をサポートしています。具体的な制限はモデルによって異なります。現在の詳細についてはOpenAIおよびAnthropicのドキュメントを確認してください。',
      },
      {
        q: 'Ollamaなどのローカルモデルをマルチモーダルプロンプティングに使用できますか?',
        a: 'はい。LLaVAやOllamaなどのモデルはローカル画像分析をサポートしています。ローカルモデルはプライバシーを提供しますが、GPT-4oやClaude 3.5 Sonnetよりも精度が低くなります。それらを重要でないタスクまたはプライバシーが不可欠な場合に使用してください。',
      },
      {
        q: 'テキスト-画像生成で一貫性を改善するにはどうすればよいですか?',
        a: '構造化テンプレート(主題/アクション/スタイル/文脈/技術的)を使用し、リファレンス画像を提供し、制約(解像度、構成、要素数)を指定します。同じモデルで反復処理します—反復間でモデルを切り替えると不一貫な結果が生成されます。',
      },
      {
        q: '画像分析と生成のプロンプティングの違いは何ですか?',
        a: '分析プロンプトは情報スコープを指定します(「日付と請求書番号のみを抽出します」)。生成プロンプトはすべてのビジュアル要素を明確に説明する必要があります(主題、アクション、スタイル、文脈、技術的詳細)。生成はモデルが知覚するのではなく想像するため、より多くの精度が必要です。',
      },
    ],
  },

  relatedReading: {
    title: '関連する読書',
    items: [
      '[プロンプトエンジニアリングとは何か?](/prompt-engineering/what-is-prompt-engineering?lang=ja) – すべてのプロンプティングの基本概念',
      '[すべてのプロンプトが必要とする5つの構成要素](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=ja) – マルチモーダルを含む、すべてのプロンプトに構造がどのように適用されるか',
      '[チェーン-オブ-ソートプロンプティング](/prompt-engineering/chain-of-thought-prompting?lang=ja) – 複雑なタスクのための画像プロンプティングと組み合わせる推論パターン',
    ],
  },

  sources: {
    title: 'ソースと参考資料',
    items: [
      '[OpenAI Vision APIドキュメント](https://platform.openai.com/docs/guides/vision)',
      '[Anthropicクロードビジョンドキュメンテーション](https://docs.anthropic.com/en/docs/vision)',
      '[Google DeepMind Geminiマルチモーダル概要](https://deepmind.google/technologies/gemini/)',
    ],
  },
}

export const imagesWithTextZh: Record<string, PESection> = {
  definition: {
    title: '什么是多模态提示?',
    content: '**多模态提示是在单个提示中组合文本和图像，以指导AI输出。** 视觉语言模型(VLM)—在图像和文本数据上训练的神经网络—处理这些多模态输入来回答问题、描述场景、生成新图像或编辑现有图像。\n\n与纯文本提示不同，多模态提示让您能够展示而非讲述。模型可以通过检查视觉细节、空间关系和颜色来准确看到您的含义，而不仅仅依赖书面描述。',
  },

  tldr: {
    title: '关键要点',
    isTldr: true,
    items: [
      '多模态提示组合文本和图像；GPT-4o和Claude 3.5 Sonnet等模型在图像分析和描述方面表现出色',
      '存在三种模式：图像→文本(描述/分析)、文本→图像(生成)和图像↔图像(编辑/转换)',
      '视觉语言模型在精确计数、细粒度对象边界和读取图像中的小文本方面存在困难',
      '遵循结构化模式：对分析目标具体，提供上下文，并使用示例来实现一致性',
      'PromptQuorum让您在多个模型中测试多模态提示，以比较输出并找到最佳拟合',
    ],
  },

  modes: {
    title: '多模态提示的三种模式',
    content: '多模态提示有三种主要形式，每种形式适合不同的任务。',
    columns: ['模式', '输入', '输出', '最佳用例'],
    rows: [
      {
        '模式': '图像 → 文本',
        '输入': '图像 + 文本问题',
        '输出': '文本响应',
        '最佳用例': '字幕、内容审核、对象检测、文档解析',
      },
      {
        '模式': '文本 → 图像',
        '输入': '文本提示',
        '输出': '生成的图像',
        '最佳用例': '创意可视化、设计迭代、插图生成',
      },
      {
        '模式': '图像 ↔ 图像',
        '输入': '现有图像 + 指令',
        '输出': '修改的图像',
        '最佳用例': '修复、风格转移、放大、图像合成',
      },
    ],
    tableFormat: true,
  },

  howVisionWorks: {
    title: '视觉语言模型如何看到图像',
    content: [
      '**GPT-4o、Claude 3.5 Sonnet和Gemini 1.5 Pro等视觉语言模型使用视觉编码器将图像转换为高维向量(嵌入)，然后在共享的语义空间中处理这些嵌入以及文本令牌。** 这种方法给VLM在多项任务中提供了明确的优势：它们识别对象、读取文本、理解空间关系，并推理多个图像中的内容。Gemini 1.5 Pro支持最多100万个令牌，允许比GPT-4o的128k上下文窗口更长的多模态序列分析。理解[上下文窗口限制](/prompt-engineering/context-windows-explained-why-ai-forgets?lang=zh)有助于您在处理长图像描述或多图像序列时构建避免截断的提示。',
      'VLM在场景理解、文档分析和比较视觉元素方面表现出色。但是，它们有可预测的弱点：',
    ],
    items: [
      '精确计数(特别是小对象或密集场景中的项目)',
      '细粒度对象边界和精确空间测量',
      '读取图像中的小文本或复杂图表',
      '从单个角度理解三维空间关系',
      '避免图像中不存在的幻觉细节',
    ],
  },

  imageToText: {
    title: '图像→文本的提示模式',
    content: '当您要求模型分析或描述图像时，围绕四个模式构建您的请求：',
    items: [
      '**描述图像：** 说明分析目标，然后指定细节级别。「在2–3句话中描述这个产品照片，重点关注材料、颜色和形状」比「描述这个图像」更有用。',
      '**提取信息：** 提出具体问题。不要问「这个文档中有什么?」，而是问「从这个收据中提取日期、发票号和总金额。」对格式明确：「将所有提到的人列为项目符号。」',
      '**提出有针对性的问题：** 狭隘地范围化您的问题。不要问「这个图像有文本吗?」，而是问「读取这个图表中的所有可见文本并准确转录。」比较有助于避免幻觉：「哪个对象最大？哪个最小？」',
      '**生成替代文本：** 为了可访问性，要求模型创建WCAG兼容的替代文本。「为此图像编写简明替代文本(≤125个字符)，为盲用户描述其视觉内容和背景。」',
    ],
  },

  textToImage: {
    title: '文本→图像的提示模式',
    content: '**文本到图像的生成取决于结构良好的提示。围绕五个核心构建块组织每个提示：**',
    items: [
      '**主题：** 命名你想看的东西。要具体：「一只戴着太阳镜的金毛寻回犬」比「一只狗」更好。使用专有名词：「一辆1961年的捷豹E型」比「一辆经典车」传达更多信息。',
      '**行动或状态：** 描述主题在做什么。「跳过一个呼啦圈」、「坐在王座上」、「融化成水」。积极的动词使图像动态化；静态的描述产生静态的结果。',
      '**风格和美学：** 指定视觉处理。参考已知的风格：「油画」、「黑色电影剧照」、「CGI渲染」、「水彩」、「艺术装饰海报」。避免模糊的术语如「美丽」—使用具体的风格参考。',
      '**背景和环境：** 告诉模型主题存在的地方。「在黎明时分的雾林中」、「在霓虹闪烁的赛博朋克城市」、「在博物馆的大理石台座上」。背景锚定构图和氛围。',
      '**技术细节：** 指定照明和相机角度。「从上方拍摄、金色时段照明、浅景深」或「超广角、戏剧性阴影、高对比度」。技术细节控制氛围。',
    ],
  },

  imageEditing: {
    title: '图像编辑的提示模式',
    content: '图像编辑(修复、风格转移或合成)需要清晰的前后描述和精确的约束。',
    items: [
      '**修复：** 标记或描述要修改的区域。「将背景(目前是灰色墙)替换为山脉上的日落。」指定保持不变的内容：「保持人物的姿态和表情相同；仅更改背景。」',
      '**风格转移：** 提供参考和目标。「将这幅梵高绘画(参考)的色调和笔触风格应用于这张照片(目标)。」指定保留：「保持原始的所有细节；仅应用风格。」',
      '**多图像合成：** 合并图像时要明确。「将这三个对象组合成一个场景。从左到右排列在木制桌子上，上方阳光照射。无缝混合边缘；确保一致的阴影。」',
    ],
  },

  reliableOutputs: {
    title: '获得可靠的输出：四种技术',
    content: '多模态模型在不同图像类型间产生不一致的输出，但结构化提示可以显著改善结果。这四种技术提高了可靠性：',
    items: [
      '**指定细节水平：** 模糊的请求产生模糊的结果。「非常详细地分析这个图像」比「分析这个图像」更有效。对于生成：「照片级逼真、4K质量、每个细节清晰」比「一个好的图像」更好。',
      '**使用积极框架：** 告诉模型包含什么，而不是排除什么。与其「不要使颜色太亮」不如说「使用柔和、冷色调，饱和度低」。与其「不要添加文本」不如说「确保没有可见的文本出现」。',
      '**明确设置约束：** 约束锚定输出。「从这个图像中提取正好10种颜色，按频率排列」比「这个图像中有什么颜色？」更好。对于生成：「1:1正方形、恰好两个人、单个室内房间」。',
      '**提供前后示例：** 向模型展示好的样子。在您的请求旁包含示例图像。[少样本示例](/prompt-engineering/zero-shot-vs-few-shot?lang=zh)显著改善编辑和风格转移的一致性。',
    ],
  },

  pitfalls: {
    title: '常见的多模态陷阱',
    content: '避免这些错误以改善多模态结果：',
    items: [
      '**模糊的图像提示：** [坏提示] 「分析这个图像。」[好提示] 「这是一个网络界面的屏幕截图。识别所有按钮、输入字段和链接。对于每个，注意其颜色、位置和可见文本。」',
      '**忘记图像标签或背景：** 在提问之前告诉模型图像显示的内容。「这是病毒粒子的显微镜图像。描述可见的结构。」比「这是什么？」更好。',
      '**错误的分析范围：** [坏提示] 「计数这个图像中的对象。」[好提示] 「仅计数这个果盘中的红苹果。不要计数其他水果。如果不确定，请记录。」',
      '**假设精度：** 视觉语言模型容易产生幻觉。不要依赖它们获得像素级精度。对于关键任务，在VLM旁使用专用工具(用于文本的OCR、用于计数的对象检测API)。',
      '**用多个图像过载：** 大多数VLM可靠地处理2–10个图像；性能在此之外会下降。分批处理它们：「分析前5张图像。然后分析接下来的5张。」清楚地标记：「图像1:[描述]、图像2:[描述]。」',
      '**云VLM的隐私和司法管辖权风险：** 在欧盟中，将包含个人数据的图像发送到GPT-4o或Gemini等云VLM如果涉及生物特征信息，则属于GDPR第9条。通过Ollama或LM Studio的本地模型在设备上处理图像，将数据保持在您的司法管辖范围内，无外部API调用。',
    ],
  },

  promptquorumHelps: {
    title: 'PromptQuorum如何帮助您用图像提示',
    content: [
      '**PromptQuorum是一个多模型提示分发平台，让您在GPT-4o、Claude 3.5 Sonnet、Gemini 1.5 Pro和其他模型中同时测试多模态提示。** 在三个模型中测试相同的产品图像描述提示时，GPT-4o返回了最结构化的输出，Claude 3.5 Sonnet在文本提取中达到了最高精度，Gemini 1.5 Pro捕获了最多的上下文细节—揭示不同模型在不同图像分析任务中表现出色。Claude 3.5 Sonnet在文档分析中精准；GPT-4o在场景理解中表现出色；Gemini 1.5 Pro处理复杂的多图像推理。',
      '通过向全部三个分派相同的多模态提示，您可以看到哪个模型回答最好，然后使用共识评分来权衡它们的输出。',
    ],
    items: [
      '**多模型图像比较：** 上传图像并跨所有模型提出相同问题。在几秒内比较响应，以发现哪个模型适合您的用例。',
      '**框架应用：** 将PromptQuorum的结构化提示框架应用于多模态请求。定义角色、背景、约束和输出格式—然后包含图像。这确保了跨模型的一致性。',
      '**图像输出上的共识评分：** 当多个模型分析同一图像时，共识评分识别哪些分析最可靠。如果三个模型同意但一个不同意，评分会标记异常值。',
    ],
  },

  recipes: {
    title: '迷你食谱：复制粘贴多模态提示',
    content: '使用这些模板作为常见任务的起点。每个都遵循[结构化提示构建块](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=zh)以确保一致性和可重复性。',
    items: [
      '**产品摄影：** 「分析这张产品图像并提取：(1)主要材料、(2)色调、(3)相对于周围的大小、(4)光线方向、(5)任何缺陷。具体；避免通用形容词。」',
      '**文档提取：** 「从这个文档提取所有可见文本。保留格式、换行符和强调。如果文本部分不清楚，请注明[不清楚]和您的最佳猜测。格式为Markdown代码块。」',
      '**UI/UX评论：** 「识别：(1)主要号召行动及其突出度、(2)视觉层级、(3)间距和对齐问题、(4)颜色对比问题。仅关注功能和可访问性问题。」',
      '**文本到图像模板：** 「主题：[名词]。动作：[动词+状态]。风格：[艺术风格]。背景：[设置]。技术：[相机角度、照明]。例子：主题：古董留声机。动作：播放可见的声波。风格：超现实主义、油画。背景：古董店、光线昏暗。技术：侧角、金色光、浅景深。」',
      '**图像编辑：** 「编辑此目标图像以匹配此参考图像的风格，同时保持目标图像的构图和主题。不要添加或删除主要元素；仅应用颜色、光线和纹理变化。」',
      '**替代文本生成：** 「为此图像编写替代文本。必须≤125个字符。描述盲人或弱视用户需要了解的内容。例子：「一名穿着蓝色西装的男性与一名穿着红色连衣裙的女性在背景为城市景观的正式活动上握手。」',
    ],
  },

  faq: {
    title: '常见问题',
    faqs: [
      {
        q: '分析图像的最佳视觉语言模型是什么?',
        a: '没有单一的最佳模型。GPT-4o在通用场景理解和复杂推理中表现出色。Claude 3.5 Sonnet在文档分析和文本提取中精准。Gemini 1.5 Pro处理更长的多模态上下文(100万个令牌)。使用PromptQuorum来针对您的特定任务测试所有三个。',
      },
      {
        q: '视觉语言模型能否精确计数对象?',
        a: '否。VLM在精确计数(尤其是小对象或密集排列的项目)方面存在困难。对于精确计数，使用专用对象检测API，或要求模型以明确的约束列举对象：「仅计数红色项目；保守—如果不确定，不要计数。」',
      },
      {
        q: '我可以在一个提示中包含多少个图像?',
        a: '大多数VLM可靠地处理2–10个图像。性能在此之外会下降。如果需要分析许多图像，分批处理并分轮处理。清楚地标记每个图像：「图像1:[描述]、图像2:[描述]。」',
      },
      {
        q: '视觉语言模型支持哪些图像格式?',
        a: 'GPT-4o、Claude 3.5 Sonnet和Gemini 1.5 Pro接受JPEG、PNG、GIF和WebP。大多数支持高达20 MB的图像。具体限制因模型而异；查看OpenAI和Anthropic文档了解当前详情。',
      },
      {
        q: '我可以使用Ollama等本地模型进行多模态提示吗?',
        a: '是的。LLaVA和Ollama等模型支持本地图像分析。本地模型提供隐私但精度低于GPT-4o或Claude 3.5 Sonnet。将它们用于非关键任务或隐私至关重要时。',
      },
      {
        q: '如何提高文本到图像生成中的一致性?',
        a: '使用结构化模板(主题/动作/风格/背景/技术)、提供参考图像并指定约束(分辨率、构图、元素数量)。使用同一模型迭代—在迭代之间切换模型会产生不一致的结果。',
      },
      {
        q: '图像分析提示和生成提示有什么区别?',
        a: '分析提示指定信息范围(「仅提取日期和发票号码」)。生成提示必须清楚地描述所有视觉元素(主题、动作、风格、背景、技术细节)。生成需要更高的精度，因为模型想象而不是感知。',
      },
    ],
  },

  relatedReading: {
    title: '相关阅读',
    items: [
      '[什么是提示工程?](/prompt-engineering/what-is-prompt-engineering?lang=zh) – 所有提示的基础概念',
      '[每个提示需要的5个构建块](/prompt-engineering/5-building-blocks-every-prompt-needs?lang=zh) – 结构如何应用于所有提示，包括多模态',
      '[链式思考提示](/prompt-engineering/chain-of-thought-prompting?lang=zh) – 与图像提示结合进行复杂任务的推理模式',
    ],
  },

  sources: {
    title: '来源和进一步阅读',
    items: [
      '[OpenAI Vision API文档](https://platform.openai.com/docs/guides/vision)',
      '[Anthropic Claude Vision文档](https://docs.anthropic.com/en/docs/vision)',
      '[Google DeepMind Gemini多模态概览](https://deepmind.google/technologies/gemini/)',
    ],
  },
}
