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
      'Multimodales Prompting kombiniert Text und Bilder; Modelle wie GPT-4o und Claude 3.5 Sonnet (2024) zeichnen sich durch Bildanalyse und Beschreibung aus',
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
      '**Vision-Language-Modelle wie GPT-4o, Claude 3.5 Sonnet (2024) und Gemini 1.5 Pro wandeln Bilder in hochdimensionale Vektoren (Embeddings) mit einem visuellen Encoder um und verarbeiten diese Embeddings dann neben Text-Token in einem gemeinsamen semantischen Raum.** Dieser Ansatz gibt VLMs klare Stärken über mehrere Aufgaben hinweg: Sie identifizieren Objekte, lesen Text, verstehen räumliche Beziehungen und schlussfolgern über Inhalte über mehrere Bilder hinweg. Gemini 1.5 Pro unterstützt bis zu 1 Million Token, was die Analyse längerer Multimodal-Sequenzen ermöglicht als das 128k-Kontextfenster von GPT-4o. Das Verstehen von [Kontextfenster-Limits](/de/prompt-engineering/context-windows-explained-why-ai-forgets) hilft dir, Prompts zu strukturieren, die Kürzungen vermeiden, wenn du mit langen Bildbeschreibungen oder Multi-Bild-Sequenzen arbeitest.',
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
      '**Vor- und Nachher-Beispiele bereitstellen:** Zeige dem Modell, wie Gutes aussieht. Füge Beispielbilder zusammen mit deiner Anfrage ein. [Few-Shot-Beispiele](/de/prompt-engineering/zero-shot-vs-few-shot) verbessern die Konsistenz bei Bearbeitung und Stilübertragung dramatisch.',
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
      '**PromptQuorum ist eine Multi-Model-Prompt-Dispatch-Plattform, mit der du multimodale Prompts gleichzeitig über GPT-4o, Claude 3.5 Sonnet (2024), Gemini 1.5 Pro und andere Modelle testen kannst.** Beim Testen desselben Produktbild-Beschreibungs-Prompts über drei Modelle lieferte GPT-4o die strukturierteste Ausgabe, Claude 3.5 Sonnet (2024) erzielte die höchste Präzision bei Textextraktion und Gemini 1.5 Pro erfasste die meisten kontextuellen Details – was offenbarte, dass verschiedene Modelle bei verschiedenen Bildanalysaufgaben hervorragend sind. Claude 3.5 Sonnet (2024) ist präzise bei Dokumentenanalyse; GPT-4o zeichnet sich durch Szenenverständnis aus; Gemini 1.5 Pro handhabt komplexe Multi-Bild-Vernunft.',
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
    content: 'Nutze diese Vorlagen als Startpunkte für häufige Aufgaben. Jede folgt [strukturierten Prompt-Bausteinen](/de/prompt-engineering/5-building-blocks-every-prompt-needs), um Konsistenz und Wiederholbarkeit zu sichern.',
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
        a: 'Es gibt kein einzelnes bestes Modell. GPT-4o zeichnet sich durch allgemeines Szenenverständnis und komplexe Logik aus. Claude 3.5 Sonnet (2024) ist präzise bei Dokumentenanalyse und Textextraktion. Gemini 1.5 Pro handhabt längere multimodale Kontexte (1 Million Token). Nutze PromptQuorum, um alle drei gegen deine spezifische Aufgabe zu testen.',
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
        a: 'GPT-4o, Claude 3.5 Sonnet (2024) und Gemini 1.5 Pro akzeptieren JPEG, PNG, GIF und WebP. Die meisten unterstützen Bilder bis zu 20 MB. Spezifische Limits variieren nach Modell; überprüfe OpenAI- und Anthropic-Dokumentation für aktuelle Details.',
      },
      {
        q: 'Kann ich lokale Modelle wie Ollama für multimodales Prompting verwenden?',
        a: 'Ja. Modelle wie LLaVA und Ollama unterstützen lokale Bildanalyse. Lokale Modelle bieten Datenschutz, aber niedrigere Genauigkeit als GPT-4o oder Claude 3.5 Sonnet (2024). Nutze sie für unkritische Aufgaben oder wenn Datenschutz essentiell ist.',
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
      '[Was ist Prompt Engineering?](/de/prompt-engineering/what-is-prompt-engineering) – Grundkonzepte für alle Prompting',
      '[Die 5 Bausteine jedes Prompts](/de/prompt-engineering/5-building-blocks-every-prompt-needs) – wie Struktur auf alle Prompts, einschließlich Multimodal, anwendbar ist',
      '[Chain-of-Thought-Prompting](/de/prompt-engineering/chain-of-thought-prompting) – Denkweisen, die sich mit Bild-Prompting für komplexe Aufgaben kombinieren',
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
      'Le prompting multimodal combine texte et images ; des modèles comme GPT-4o et Claude 3.5 Sonnet (2024) excèlent à l\'analyse et à la description d\'images',
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
      '**Les modèles vision-langage comme GPT-4o, Claude 3.5 Sonnet (2024) et Gemini 1.5 Pro convertissent les images en vecteurs de haute dimension (embeddings) en utilisant un encodeur visuel, puis traitent ces embeddings aux côtés des tokens de texte dans un espace sémantique partagé.** Cette approche donne aux VLM des forces claires sur plusieurs tâches : ils identifient les objets, lisent le texte, comprennent les relations spatiales et raisonnent sur le contenu dans plusieurs images. Gemini 1.5 Pro supporte jusqu\'à 1 million de tokens, permettant l\'analyse de séquences multimodales plus longues que la fenêtre de contexte 128k de GPT-4o. Comprendre [les limites des fenêtres de contexte](/fr/prompt-engineering/context-windows-explained-why-ai-forgets) vous aide à structurer des prompts qui évitent la troncature lorsque vous travaillez avec de longues descriptions d\'images ou des séquences multi-images.',
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
      '**Fournir des exemples avant/après :** Montrez au modèle ce que le bien ressemble. Incluez des images d\'exemple aux côtés de votre demande. [Les exemples few-shot](/fr/prompt-engineering/zero-shot-vs-few-shot) améliorent dramatiquement la cohérence pour l\'édition et le transfert de style.',
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
      '**PromptQuorum est une plateforme de dispatch multi-modèle qui vous permet de tester des prompts multimodaux sur GPT-4o, Claude 3.5 Sonnet (2024), Gemini 1.5 Pro et d\'autres modèles simultanément.** Lors du test du même prompt de description d\'image de produit sur trois modèles, GPT-4o a renvoyé la sortie la plus structurée, Claude 3.5 Sonnet (2024) a atteint la plus haute précision sur l\'extraction de texte et Gemini 1.5 Pro a capturé le plus de détails contextuels – révélant que différents modèles excellent à différentes tâches d\'analyse d\'images. Claude 3.5 Sonnet (2024) est précis pour l\'analyse de documents ; GPT-4o excelle à la compréhension de scènes ; Gemini 1.5 Pro gère le raisonnement multi-image complexe.',
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
    content: 'Utilisez ces modèles comme points de départ pour les tâches courantes. Chacun suit [les éléments de construction de prompt structurés](/fr/prompt-engineering/5-building-blocks-every-prompt-needs) pour assurer la cohérence et la répétabilité.',
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
        a: 'Il n\'y a pas de modèle unique meilleur. GPT-4o excelle à la compréhension générale des scènes et au raisonnement complexe. Claude 3.5 Sonnet (2024) est précis pour l\'analyse de documents et l\'extraction de texte. Gemini 1.5 Pro gère des contextes multimodaux plus longs (1 million de tokens). Utilisez PromptQuorum pour tester les trois contre votre tâche spécifique.',
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
        a: 'GPT-4o, Claude 3.5 Sonnet (2024) et Gemini 1.5 Pro acceptent JPEG, PNG, GIF et WebP. La plupart prennent en charge des images jusqu\'à 20 MB. Les limites spécifiques varient selon le modèle ; consultez la documentation OpenAI et Anthropic pour les détails actuels.',
      },
      {
        q: 'Puis-je utiliser des modèles locaux comme Ollama pour le prompting multimodal?',
        a: 'Oui. Des modèles comme LLaVA et Ollama prennent en charge l\'analyse d\'images locales. Les modèles locaux offrent la confidentialité mais une précision inférieure à GPT-4o ou Claude 3.5 Sonnet (2024). Utilisez-les pour les tâches non critiques ou lorsque la confidentialité est essentielle.',
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
      '[Qu\'est-ce que le Prompt Engineering?](/fr/prompt-engineering/what-is-prompt-engineering) – concepts fondamentaux pour tous les prompts',
      '[Les 5 Éléments Fondamentaux de Chaque Prompt](/fr/prompt-engineering/5-building-blocks-every-prompt-needs) – comment la structure s\'applique à tous les prompts, y compris multimodal',
      '[Prompting Chain-of-Thought](/fr/prompt-engineering/chain-of-thought-prompting) – modèles de raisonnement qui se combinent avec les prompts d\'image pour les tâches complexes',
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
      'マルチモーダルプロンプティングはテキストと画像を組み合わせます; GPT-4oやClaude 3.5 Sonnet (2024)のようなモデルは画像分析と説明に優れています',
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
      '**GPT-4o、Claude 3.5 Sonnet (2024)、Gemini 1.5 Proなどのビジョン言語モデルは、ビジュアルエンコーダーを使用して画像を高次元ベクトル(埋め込み)に変換し、その後、共有されたセマンティック空間のテキストトークンと並行してこれらの埋め込みを処理します。** このアプローチはVLMに複数のタスク全体にわたって明確な強みを与えます: オブジェクトを識別し、テキストを読み、空間的関係を理解し、複数の画像全体でコンテンツについて推論します。Gemini 1.5 Proは最大100万トークンをサポートしており、GPT-4oの128kコンテキストウィンドウよりも長いマルチモーダルシーケンスの分析を可能にします。[コンテキストウィンドウの制限](/ja/prompt-engineering/context-windows-explained-why-ai-forgets)を理解することは、長い画像説明またはマルチ画像シーケンスで作業する際にトリミングを回避するプロンプトを構造化するのに役立ちます。',
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
      '**前後の例を提供:** モデルに良いものの例を見せてください。リクエストと一緒にサンプル画像を含めてください。[フューショットの例](/ja/prompt-engineering/zero-shot-vs-few-shot)は編集とスタイル転送の一貫性を劇的に改善します。',
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
      '**PromptQuorumはマルチモデルプロンプトディスパッチプラットフォームで、GPT-4o、Claude 3.5 Sonnet (2024)、Gemini 1.5 Pro、および他のモデル全体でマルチモーダルプロンプトを同時にテストできます。** 3つのモデル全体で同じ製品画像説明プロンプトをテストしたとき、GPT-4oは最も構造化された出力を返し、Claude 3.5 Sonnet (2024)はテキスト抽出で最高の精度を達成し、Gemini 1.5 Proは最も状況に応じた詳細をキャプチャしました—異なるモデルが異なる画像分析タスクで優れていることを明らかにしました。Claude 3.5 Sonnet (2024)はドキュメント分析に正確です; GPT-4oはシーン理解に優れています; Gemini 1.5 Proは複雑なマルチ画像推論を処理します。',
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
    content: '一般的なタスクのスターティングポイントとしてこれらのテンプレートを使用してください。それぞれは[構造化されたプロンプト構成要素](/ja/prompt-engineering/5-building-blocks-every-prompt-needs)に従って、一貫性と反復性を確保します。',
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
        a: '単一の最良のモデルはありません。GPT-4oは一般的なシーン理解と複雑な推論に優れています。Claude 3.5 Sonnet (2024)はドキュメント分析とテキスト抽出に正確です。Gemini 1.5 Proはより長いマルチモーダルコンテキスト(100万トークン)を処理します。PromptQuorumを使用して、特定のタスクに対して3つすべてをテストします。',
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
        a: 'GPT-4o、Claude 3.5 Sonnet (2024)、Gemini 1.5 ProはJPEG、PNG、GIF、WebPを受け入れます。ほとんどは最大20 MBの画像をサポートしています。具体的な制限はモデルによって異なります。現在の詳細についてはOpenAIおよびAnthropicのドキュメントを確認してください。',
      },
      {
        q: 'Ollamaなどのローカルモデルをマルチモーダルプロンプティングに使用できますか?',
        a: 'はい。LLaVAやOllamaなどのモデルはローカル画像分析をサポートしています。ローカルモデルはプライバシーを提供しますが、GPT-4oやClaude 3.5 Sonnet (2024)よりも精度が低くなります。それらを重要でないタスクまたはプライバシーが不可欠な場合に使用してください。',
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
      '[プロンプトエンジニアリングとは何か?](/ja/prompt-engineering/what-is-prompt-engineering) – すべてのプロンプティングの基本概念',
      '[すべてのプロンプトが必要とする5つの構成要素](/ja/prompt-engineering/5-building-blocks-every-prompt-needs) – マルチモーダルを含む、すべてのプロンプトに構造がどのように適用されるか',
      '[チェーン-オブ-ソートプロンプティング](/ja/prompt-engineering/chain-of-thought-prompting) – 複雑なタスクのための画像プロンプティングと組み合わせる推論パターン',
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

export const imagesWithTextEs: Record<string, PESection> = {
  definition: {
    title: '¿Qué es el Prompting Multimodal?',
    content: '**El prompting multimodal combina texto e imágenes en un solo prompt para guiar la salida de la IA.** Los modelos de visión-lenguaje (VLM, por sus siglas en inglés) —redes neuronales entrenadas con datos de imagen y texto— procesan estas entradas multimodales para responder preguntas, describir escenas, generar nuevas imágenes o editar las existentes.\n\nA diferencia del prompting solo de texto, el prompting multimodal te permite mostrar en lugar de decir. Un modelo puede ver exactamente lo que quieres decir examinando detalles visuales, relaciones espaciales y colores, en lugar de basarse únicamente en la descripción escrita.',
  },

  tldr: {
    title: 'Puntos clave',
    isTldr: true,
    items: [
      'El prompting multimodal combina texto e imágenes; modelos como GPT-4o y Claude Opus 4.8 se destacan en el análisis y la descripción de imágenes',
      'Existen tres modos: Imagen→Texto (describir/analizar), Texto→Imagen (generar) e Imagen↔Imagen (editar/transformar)',
      'Los modelos de visión-lenguaje tienen dificultades con el conteo preciso, los límites de objetos detallados y la lectura de texto pequeño en imágenes',
      'Sigue patrones estructurados: sé específico sobre los objetivos de análisis, proporciona contexto y usa ejemplos para lograr consistencia',
      'PromptQuorum te permite probar prompts multimodales en múltiples modelos para comparar resultados y encontrar el mejor ajuste',
    ],
  },

  modes: {
    title: 'Tres modos del Prompting Multimodal',
    content: 'El prompting multimodal toma tres formas principales, cada una adecuada para diferentes tareas.',
    columns: ['Modo', 'Entrada', 'Salida', 'Mejores casos de uso'],
    rows: [
      {
        'Modo': 'Imagen → Texto',
        'Entrada': 'Imagen + pregunta de texto',
        'Salida': 'Respuesta de texto',
        'Mejores casos de uso': 'Leyendas, moderación de contenido, detección de objetos, análisis de documentos',
      },
      {
        'Modo': 'Texto → Imagen',
        'Entrada': 'Prompt de texto',
        'Salida': 'Imagen generada',
        'Mejores casos de uso': 'Visualización creativa, iteración de diseño, generación de ilustraciones',
      },
      {
        'Modo': 'Imagen ↔ Imagen',
        'Entrada': 'Imagen existente + instrucciones',
        'Salida': 'Imagen modificada',
        'Mejores casos de uso': 'Inpainting, transferencia de estilo, aumento de resolución, composición de imágenes',
      },
    ],
    tableFormat: true,
  },

  howVisionWorks: {
    title: 'Cómo los modelos de visión-lenguaje ven las imágenes',
    content: [
      '**Los modelos de visión-lenguaje como GPT-4o, Claude Opus 4.8 y Gemini 1.5 Pro convierten imágenes en vectores de alta dimensión (embeddings) utilizando un codificador visual y luego procesan esos embeddings junto con los tokens de texto en un espacio semántico compartido.** Este enfoque otorga a los VLM fortalezas claras en múltiples tareas: identifican objetos, leen texto, comprenden relaciones espaciales y razonan sobre el contenido en múltiples imágenes. Gemini 1.5 Pro admite hasta 1 millón de tokens, lo que permite el análisis de secuencias multimodales más largas que la context window de 128k de GPT-4o. Entender los [límites de la context window](/es/prompt-engineering/context-windows-explained-why-ai-forgets) te ayuda a estructurar prompts que eviten la truncación cuando trabajas con descripciones de imágenes largas o secuencias de múltiples imágenes.',
      'Los VLM se destacan en la comprensión de escenas, el análisis de documentos y la comparación de elementos visuales. Sin embargo, tienen debilidades predecibles:',
    ],
    items: [
      'Conteo preciso (especialmente de objetos pequeños o elementos en escenas densas)',
      'Límites de objetos detallados y medidas espaciales exactas',
      'Lectura de texto pequeño en imágenes o diagramas complejos',
      'Comprensión de relaciones espaciales tridimensionales desde ángulos únicos',
      'Evitar detalles alucinados que no están presentes en la imagen',
    ],
  },

  imageToText: {
    title: 'Patrones de prompting para Imagen → Texto',
    content: 'Cuando pides a un modelo que analice o describa una imagen, estructura tu solicitud en torno a cuatro patrones:',
    items: [
      '**Describir imágenes:** Indica el objetivo del análisis y luego especifica el nivel de detalle. "Describe esta foto de producto en 2–3 oraciones, centrándote en los materiales, el color y la forma" es más útil que "describe la imagen."',
      '**Extraer información:** Haz preguntas concretas. En lugar de "¿Qué hay en este documento?", pregunta "Extrae la fecha, el número de factura y el monto total de este recibo." Sé explícito sobre el formato: "Lista a todas las personas mencionadas como viñetas."',
      '**Hacer preguntas específicas:** Limita tu pregunta de forma precisa. En lugar de "¿Esta imagen tiene texto?", pregunta "Lee todo el texto visible en este diagrama y transcríbelo exactamente." Las comparaciones ayudan a evitar alucinaciones: "¿Qué objeto es el más grande? ¿Cuál es el más pequeño?"',
      '**Generar texto alternativo:** Para accesibilidad, pide al modelo que cree texto alternativo compatible con WCAG. "Escribe texto alternativo conciso (≤125 caracteres) para esta imagen que describa su contenido visual y contexto para un usuario ciego."',
    ],
  },

  textToImage: {
    title: 'Patrones de prompting para Texto → Imagen',
    content: '**La generación de texto a imagen depende de prompts bien estructurados. Organiza cada prompt en torno a cinco componentes esenciales:**',
    items: [
      '**Sujeto:** Nombra lo que quieres ver. Sé específico: "un golden retriever con gafas de sol" supera a "un perro." Usa nombres propios: "un Jaguar E-Type de 1961" transmite más que "un auto clásico."',
      '**Acción o estado:** Describe lo que hace el sujeto. "saltando por un aro," "sentado en un trono," "fundiéndose en agua." Los verbos activos hacen las imágenes dinámicas; las descripciones estáticas producen resultados estáticos.',
      '**Estilo y estética:** Especifica el tratamiento visual. Referencia estilos conocidos: "pintura al óleo," "fotograma de cine negro," "render CGI," "acuarela," "póster Art Déco." Evita términos vagos como "hermoso" — usa referencias de estilo concretas.',
      '**Contexto y entorno:** Dile al modelo dónde existe el sujeto. "en un bosque neblinoso al amanecer," "en una ciudad cyberpunk iluminada con neón," "sobre un pedestal de mármol en un museo." El contexto ancla la composición y el estado de ánimo.',
      '**Detalles técnicos:** Especifica la iluminación y el ángulo de la cámara. "fotografiado desde arriba, iluminación de hora dorada, poca profundidad de campo" o "gran angular, sombras dramáticas, alto contraste." Los detalles técnicos controlan el estado de ánimo.',
    ],
  },

  imageEditing: {
    title: 'Patrones de prompting para edición de imágenes',
    content: 'La edición de imágenes (inpainting, transferencia de estilo o composición) requiere una descripción clara de antes/después y restricciones precisas.',
    items: [
      '**Inpainting:** Marca o describe la región a modificar. "Reemplaza el fondo (actualmente una pared gris) con una puesta de sol sobre las montañas." Especifica qué debe permanecer igual: "Mantén la pose y la expresión de la persona idénticas; cambia solo el fondo."',
      '**Transferencia de estilo:** Proporciona tanto la referencia como el objetivo. "Aplica la paleta de colores y el estilo de pincelada de esta pintura de Van Gogh (referencia) a esta fotografía (objetivo)." Especifica la conservación: "Mantén todos los detalles del original; aplica solo el estilo."',
      '**Composición de múltiples imágenes:** Al combinar imágenes, sé explícito. "Combina estos tres objetos en una sola escena. Arréglalos de izquierda a derecha sobre una mesa de madera, iluminados por la luz del sol desde arriba. Mezcla los bordes sin costuras; asegura sombras consistentes."',
    ],
  },

  reliableOutputs: {
    title: 'Obtener resultados confiables: cuatro técnicas',
    content: 'Los modelos multimodales producen resultados inconsistentes en diferentes tipos de imágenes, pero los prompts estructurados mejoran los resultados de forma medible. Estas cuatro técnicas aumentan la fiabilidad:',
    items: [
      '**Especifica el nivel de detalle:** Las solicitudes vagas producen resultados vagos. "Analiza esta imagen con detalle extremo" funciona mejor que "analiza esta imagen." Para generación: "fotorrealista, calidad 4K, cada detalle nítido" supera a "una imagen bonita."',
      '**Usa un enfoque positivo:** Dile al modelo qué incluir, no qué excluir. En lugar de "No hagas los colores demasiado brillantes," di "Usa colores apagados y fríos con baja saturación." En lugar de "No agregues texto," di "Asegúrate de que no aparezca texto visible."',
      '**Establece restricciones de forma explícita:** Las restricciones anclan los resultados. "Extrae exactamente 10 colores de esta imagen, clasificados por frecuencia" es mejor que "¿qué colores hay en esta imagen?" Para generación: "cuadrado 1:1, exactamente dos personas, habitación interior única."',
      '**Proporciona ejemplos de antes/después:** Muéstrale al modelo cómo es un buen resultado. Incluye imágenes de ejemplo junto a tu solicitud. Los [ejemplos few-shot](/es/prompt-engineering/zero-shot-vs-few-shot) mejoran drásticamente la consistencia en edición y transferencia de estilo.',
    ],
  },

  pitfalls: {
    title: 'Errores comunes en el prompting multimodal',
    content: 'Evita estos errores para mejorar los resultados multimodales:',
    items: [
      '**Prompts de imagen vagos:** [Prompt malo] "Analiza esta imagen." [Prompt bueno] "Esta es una captura de pantalla de una interfaz web. Identifica todos los botones, campos de entrada y enlaces. Para cada uno, anota su color, posición y texto visible."',
      '**Olvidar las etiquetas o el contexto de la imagen:** Dile al modelo lo que muestra la imagen antes de hacer preguntas. "Esta es una imagen microscópica de una partícula de virus. Describe la estructura visible." es mejor que "¿Qué es esto?"',
      '**Alcance de análisis incorrecto:** [Prompt malo] "Cuenta los objetos en esta imagen." [Prompt bueno] "Cuenta solo las manzanas rojas en este frutero. No cuentes otras frutas. Si no estás seguro, anótalo."',
      '**Asumir precisión:** Los modelos de visión-lenguaje son propensos a las alucinaciones. No dependas de ellos para una precisión perfecta a nivel de píxel. Para tareas críticas, usa herramientas especializadas (OCR para texto, APIs de detección de objetos para conteo) junto con los VLM.',
      '**Sobrecargar con múltiples imágenes:** La mayoría de los VLM manejan 2–10 imágenes de manera confiable; el rendimiento se degrada a partir de ese número. Procésalas por lotes: "Analiza las primeras 5 imágenes. Luego analiza las siguientes 5." Etiqueta claramente: "Imagen 1: [descripción], Imagen 2: [descripción]."',
      '**Riesgos de privacidad y jurisdicción con VLM en la nube:** En la UE, enviar imágenes que contengan datos personales a VLM en la nube como GPT-4o o Gemini está sujeto al Artículo 9 del RGPD si se involucra información biométrica. Los modelos locales a través de Ollama o LM Studio procesan imágenes en el dispositivo, manteniendo los datos dentro de tu jurisdicción sin llamadas a API externas.',
    ],
  },

  promptquorumHelps: {
    title: 'Cómo PromptQuorum te ayuda a hacer prompts con imágenes',
    content: [
      '**PromptQuorum es una plataforma de distribución de prompts multimodelo que te permite probar prompts multimodales en GPT-4o, Claude Opus 4.8, Gemini 1.5 Pro y otros modelos simultáneamente.** Al probar el mismo prompt de descripción de imagen de producto en tres modelos, GPT-4o devolvió la salida más estructurada, Claude Opus 4.8 logró la mayor precisión en la extracción de texto y Gemini 1.5 Pro capturó más detalles contextuales — revelando que diferentes modelos se destacan en diferentes tareas de análisis de imágenes. Claude Opus 4.8 es preciso en el análisis de documentos; GPT-4o se destaca en la comprensión de escenas; Gemini 1.5 Pro maneja el razonamiento multimodal complejo.',
      'Al distribuir el mismo prompt multimodal a los tres, ves qué modelo responde mejor y luego usas el Consensus Scoring para ponderar sus resultados.',
    ],
    items: [
      '**Comparación de imágenes multimodelo:** Sube una imagen y haz la misma pregunta a todos los modelos. Compara las respuestas en segundos para descubrir qué modelo se adapta a tu caso de uso.',
      '**Aplicación del framework:** Aplica el framework de prompts estructurados de PromptQuorum a las solicitudes multimodales. Define roles, contexto, restricciones y formato de salida — luego incluye una imagen. Esto asegura la consistencia entre modelos.',
      '**Consensus Scoring en resultados de imágenes:** Cuando múltiples modelos analizan la misma imagen, el Consensus Scoring identifica qué análisis son más confiables. Si tres modelos están de acuerdo pero uno no, la puntuación señala el valor atípico.',
    ],
  },

  recipes: {
    title: 'Mini recetas: prompts multimodales para copiar y pegar',
    content: 'Usa estas plantillas como punto de partida para tareas comunes. Cada una sigue los [bloques de construcción de prompts estructurados](/es/prompt-engineering/5-building-blocks-every-prompt-needs) para garantizar consistencia y repetibilidad.',
    items: [
      '**Fotografía de productos:** "Analiza esta imagen de producto y extrae: (1) materiales principales, (2) paleta de colores, (3) tamaño en relación con el entorno, (4) dirección de la iluminación, (5) defectos. Sé específico; evita adjetivos genéricos."',
      '**Extracción de documentos:** "Extrae todo el texto visible de este documento. Preserva el formato, los saltos de línea y el énfasis. Si el texto es parcialmente ilegible, anota [NO CLARO] y tu mejor estimación. Formatea como un bloque de código markdown."',
      '**Crítica de UI/UX:** "Identifica: (1) llamada a la acción principal y prominencia, (2) jerarquía visual, (3) problemas de espaciado y alineación, (4) problemas de contraste de color. Enfócate solo en las preocupaciones funcionales y de accesibilidad."',
      '**Plantilla de texto a imagen:** "Sujeto: [sustantivo]. Acción: [verbo + estado]. Estilo: [estilo artístico]. Contexto: [configuración]. Técnico: [ángulo de cámara, iluminación]. Ejemplo: Sujeto: gramófono vintage. Acción: reproduce con ondas de sonido visibles. Estilo: surrealismo, pintura al óleo. Contexto: tienda de antigüedades, poca iluminación. Técnico: ángulo lateral, luz dorada, poca profundidad de campo."',
      '**Edición de imagen:** "Edita esta imagen objetivo para que coincida con el estilo de esta imagen de referencia, mientras preservas la composición y el sujeto de la imagen objetivo. No agregues ni elimines elementos principales; aplica solo cambios de color, iluminación y textura."',
      '**Generación de texto alternativo:** "Escribe texto alternativo para esta imagen. Debe ser ≤125 caracteres. Describe lo que un usuario ciego o con baja visión necesita saber. Ejemplo: \'un hombre con traje azul le da la mano a una mujer con vestido rojo en un evento formal con un paisaje urbano de fondo.\'"',
    ],
  },

  faq: {
    title: 'FAQ',
    faqs: [
      {
        q: '¿Qué modelo de visión-lenguaje es mejor para analizar imágenes?',
        a: 'No hay un único modelo mejor. GPT-4o se destaca en la comprensión general de escenas y el razonamiento complejo. Claude Opus 4.8 es preciso en el análisis de documentos y la extracción de texto. Gemini 1.5 Pro maneja contextos multimodales más largos (1 millón de tokens). Usa PromptQuorum para probar los tres en tu tarea específica.',
      },
      {
        q: '¿Pueden los modelos de visión-lenguaje contar objetos con precisión?',
        a: 'No. Los VLM tienen dificultades con el conteo preciso, especialmente de objetos pequeños o elementos densamente agrupados. Para conteos exactos, usa APIs de detección de objetos especializadas, o pide al modelo que enumere objetos con restricciones explícitas: "Cuenta solo los elementos rojos; sé conservador — si no estás seguro, no lo cuentes."',
      },
      {
        q: '¿Cuántas imágenes puedo incluir en un solo prompt?',
        a: 'La mayoría de los VLM manejan 2–10 imágenes de manera confiable. El rendimiento se degrada más allá de 10. Si necesitas analizar muchas imágenes, procésalas por lotes y en rondas. Etiqueta cada imagen claramente: "Imagen 1: [descripción], Imagen 2: [descripción]."',
      },
      {
        q: '¿Qué formatos de imagen admiten los modelos de visión-lenguaje?',
        a: 'GPT-4o, Claude Opus 4.8 y Gemini 1.5 Pro aceptan JPEG, PNG, GIF y WebP. La mayoría admite imágenes de hasta 20 MB. Los límites específicos varían según el modelo; consulta la documentación de OpenAI y Anthropic para obtener detalles actuales.',
      },
      {
        q: '¿Puedo usar modelos locales como Ollama para el prompting multimodal?',
        a: 'Sí. Modelos como LLaVA y Ollama admiten el análisis de imágenes local. Los modelos locales ofrecen privacidad, pero menor precisión que GPT-4o o Claude Opus 4.8. Úsalos para tareas no críticas o cuando la privacidad sea esencial.',
      },
      {
        q: '¿Cómo mejoro la consistencia en la generación de texto a imagen?',
        a: 'Usa plantillas estructuradas (Sujeto/Acción/Estilo/Contexto/Técnico), proporciona imágenes de referencia y especifica restricciones (resolución, composición, número de elementos). Itera con el mismo modelo — cambiar de modelo entre iteraciones produce resultados inconsistentes.',
      },
      {
        q: '¿Cuál es la diferencia entre el prompting para análisis de imágenes frente a la generación?',
        a: 'Los prompts de análisis especifican el alcance de la información ("Extrae solo la fecha y el número de factura"). Los prompts de generación deben describir claramente todos los elementos visuales (sujeto, acción, estilo, contexto, detalles técnicos). La generación exige más precisión porque el modelo imagina en lugar de percibir.',
      },
    ],
  },

  relatedReading: {
    title: 'Lecturas relacionadas',
    items: [
      '[¿Qué es la ingeniería de prompts?](/es/prompt-engineering/what-is-prompt-engineering) — conceptos fundamentales para todo tipo de prompting',
      '[Los 5 bloques de construcción que todo prompt necesita](/es/prompt-engineering/5-building-blocks-every-prompt-needs) — cómo la estructura se aplica a todos los prompts, incluidos los multimodales',
      '[Prompting de cadena de pensamiento](/es/prompt-engineering/chain-of-thought-prompting) — patrones de razonamiento que se combinan con el prompting de imágenes para tareas complejas',
    ],
  },

  sources: {
    title: 'Fuentes y lecturas adicionales',
    items: [
      '[Documentación de la API Vision de OpenAI](https://platform.openai.com/docs/guides/vision)',
      '[Documentación de Claude Vision de Anthropic](https://docs.anthropic.com/en/docs/vision)',
      '[Descripción general multimodal de Google DeepMind Gemini](https://deepmind.google/technologies/gemini/)',
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
      '多模态提示组合文本和图像；GPT-4o和Claude 3.5 Sonnet (2024)等模型在图像分析和描述方面表现出色',
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
      '**GPT-4o、Claude 3.5 Sonnet (2024)和Gemini 1.5 Pro等视觉语言模型使用视觉编码器将图像转换为高维向量(嵌入)，然后在共享的语义空间中处理这些嵌入以及文本令牌。** 这种方法给VLM在多项任务中提供了明确的优势：它们识别对象、读取文本、理解空间关系，并推理多个图像中的内容。Gemini 1.5 Pro支持最多100万个令牌，允许比GPT-4o的128k上下文窗口更长的多模态序列分析。理解[上下文窗口限制](/zh/prompt-engineering/context-windows-explained-why-ai-forgets)有助于您在处理长图像描述或多图像序列时构建避免截断的提示。',
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
      '**提供前后示例：** 向模型展示好的样子。在您的请求旁包含示例图像。[少样本示例](/zh/prompt-engineering/zero-shot-vs-few-shot)显著改善编辑和风格转移的一致性。',
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
      '**PromptQuorum是一个多模型提示分发平台，让您在GPT-4o、Claude 3.5 Sonnet (2024)、Gemini 1.5 Pro和其他模型中同时测试多模态提示。** 在三个模型中测试相同的产品图像描述提示时，GPT-4o返回了最结构化的输出，Claude 3.5 Sonnet (2024)在文本提取中达到了最高精度，Gemini 1.5 Pro捕获了最多的上下文细节—揭示不同模型在不同图像分析任务中表现出色。Claude 3.5 Sonnet (2024)在文档分析中精准；GPT-4o在场景理解中表现出色；Gemini 1.5 Pro处理复杂的多图像推理。',
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
    content: '使用这些模板作为常见任务的起点。每个都遵循[结构化提示构建块](/zh/prompt-engineering/5-building-blocks-every-prompt-needs)以确保一致性和可重复性。',
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
        a: '没有单一的最佳模型。GPT-4o在通用场景理解和复杂推理中表现出色。Claude 3.5 Sonnet (2024)在文档分析和文本提取中精准。Gemini 1.5 Pro处理更长的多模态上下文(100万个令牌)。使用PromptQuorum来针对您的特定任务测试所有三个。',
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
        a: 'GPT-4o、Claude 3.5 Sonnet (2024)和Gemini 1.5 Pro接受JPEG、PNG、GIF和WebP。大多数支持高达20 MB的图像。具体限制因模型而异；查看OpenAI和Anthropic文档了解当前详情。',
      },
      {
        q: '我可以使用Ollama等本地模型进行多模态提示吗?',
        a: '是的。LLaVA和Ollama等模型支持本地图像分析。本地模型提供隐私但精度低于GPT-4o或Claude 3.5 Sonnet (2024)。将它们用于非关键任务或隐私至关重要时。',
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
      '[什么是提示工程?](/zh/prompt-engineering/what-is-prompt-engineering) – 所有提示的基础概念',
      '[每个提示需要的5个构建块](/zh/prompt-engineering/5-building-blocks-every-prompt-needs) – 结构如何应用于所有提示，包括多模态',
      '[链式思考提示](/zh/prompt-engineering/chain-of-thought-prompting) – 与图像提示结合进行复杂任务的推理模式',
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

export const imagesWithTextPt: Record<string, PESection> = {
  definition: {
    title: 'O que é Prompting Multimodal?',
    content: '**O prompting multimodal combina texto e imagens em um único prompt para guiar a saída da IA.** Os modelos de visão-linguagem (VLMs) — redes neurais treinadas em dados de imagem e texto — processam essas entradas multimodais para responder perguntas, descrever cenas, gerar novas imagens ou editar as existentes.\n\nAo contrário do prompting apenas com texto, o prompting multimodal permite mostrar em vez de descrever. Um modelo pode ver exatamente o que você quer dizer examinando detalhes visuais, relações espaciais e cores, em vez de depender apenas da descrição escrita.',
  },

  tldr: {
    title: 'Principais conclusões',
    isTldr: true,
    items: [
      'O prompting multimodal combina texto e imagens; modelos como GPT-5.5 e Claude Opus 4.8 se destacam na análise e descrição de imagens',
      'Existem três modos: Imagem→Texto (descrever/analisar), Texto→Imagem (gerar) e Imagem↔Imagem (editar/transformar)',
      'Os modelos de visão-linguagem têm dificuldades com contagem precisa, limites detalhados de objetos e leitura de texto pequeno em imagens',
      'Siga padrões estruturados: seja específico sobre os objetivos de análise, forneça contexto e use exemplos para garantir consistência',
      'O PromptQuorum permite testar prompts multimodais em vários modelos para comparar resultados e encontrar o melhor ajuste',
    ],
  },

  modes: {
    title: 'Três modos do Prompting Multimodal',
    content: 'O prompting multimodal assume três formas principais, cada uma adequada para diferentes tarefas.',
    columns: ['Modo', 'Entrada', 'Saída', 'Melhores casos de uso'],
    rows: [
      {
        'Modo': 'Imagem → Texto',
        'Entrada': 'Imagem + pergunta de texto',
        'Saída': 'Resposta de texto',
        'Melhores casos de uso': 'Legendas, moderação de conteúdo, detecção de objetos, análise de documentos',
      },
      {
        'Modo': 'Texto → Imagem',
        'Entrada': 'Prompt de texto',
        'Saída': 'Imagem gerada',
        'Melhores casos de uso': 'Visualização criativa, iteração de design, geração de ilustrações',
      },
      {
        'Modo': 'Imagem ↔ Imagem',
        'Entrada': 'Imagem existente + instruções',
        'Saída': 'Imagem modificada',
        'Melhores casos de uso': 'Inpainting, transferência de estilo, aumento de resolução, composição de imagens',
      },
    ],
    tableFormat: true,
  },

  howVisionWorks: {
    title: 'Como os modelos de visão-linguagem enxergam imagens',
    content: [
      '**Modelos de visão-linguagem como GPT-5.5, Claude Opus 4.8 e Gemini 3.5 Pro convertem imagens em vetores de alta dimensão (embeddings) usando um codificador visual e, em seguida, processam esses embeddings junto com tokens de texto em um espaço semântico compartilhado.** Essa abordagem confere aos VLMs pontos fortes claros em várias tarefas: eles identificam objetos, leem texto, compreendem relações espaciais e raciocinam sobre conteúdo em múltiplas imagens. O Gemini 3.5 Pro suporta até 1 milhão de tokens, permitindo a análise de sequências multimodais mais longas do que a janela de contexto de 128k do GPT-5.5. Compreender os [limites da janela de contexto](/pt/prompt-engineering/context-windows-explained-why-ai-forgets) ajuda você a estruturar prompts que evitam truncamento ao trabalhar com descrições longas de imagens ou sequências de múltiplas imagens.',
      'Os VLMs se destacam na compreensão de cenas, análise de documentos e comparação de elementos visuais. No entanto, eles têm pontos fracos previsíveis:',
    ],
    items: [
      'Contagem precisa (especialmente de objetos pequenos ou itens em cenas densas)',
      'Limites detalhados de objetos e medidas espaciais exatas',
      'Leitura de texto pequeno em imagens ou diagramas complexos',
      'Compreensão de relações espaciais tridimensionais a partir de ângulos únicos',
      'Evitar detalhes alucinados que não estão presentes na imagem',
    ],
  },

  imageToText: {
    title: 'Padrões de prompting para Imagem → Texto',
    content: 'Quando você pede a um modelo que analise ou descreva uma imagem, estruture sua solicitação em torno de quatro padrões:',
    items: [
      '**Descrever imagens:** Indique o objetivo da análise e especifique o nível de detalhe. "Descreva esta foto de produto em 2–3 frases, com foco em materiais, cor e forma" é mais útil do que "descreva a imagem."',
      '**Extrair informações:** Faça perguntas concretas. Em vez de "O que há neste documento?", pergunte "Extraia a data, o número da fatura e o valor total deste recibo." Seja explícito sobre o formato: "Liste todas as pessoas mencionadas como marcadores."',
      '**Fazer perguntas específicas:** Limite sua pergunta com precisão. Em vez de "Esta imagem tem texto?", pergunte "Leia todo o texto visível neste diagrama e transcreva-o exatamente." Comparações ajudam a evitar alucinações: "Qual objeto é o maior? Qual é o menor?"',
      '**Gerar texto alternativo:** Para acessibilidade, peça ao modelo que crie texto alternativo compatível com WCAG. "Escreva texto alternativo conciso (≤125 caracteres) para esta imagem que descreva seu conteúdo visual e contexto para um usuário cego."',
    ],
  },

  textToImage: {
    title: 'Padrões de prompting para Texto → Imagem',
    content: '**A geração de texto para imagem depende de prompts bem estruturados. Organize cada prompt em torno de cinco componentes essenciais:**',
    items: [
      '**Sujeito:** Nomeie o que você quer ver. Seja específico: "um golden retriever usando óculos de sol" supera "um cachorro." Use nomes próprios: "um Jaguar E-Type de 1961" transmite mais do que "um carro clássico."',
      '**Ação ou estado:** Descreva o que o sujeito está fazendo. "pulando por um arco," "sentado em um trono," "se dissolvendo em água." Verbos ativos tornam as imagens dinâmicas; descrições estáticas produzem resultados estáticos.',
      '**Estilo e estética:** Especifique o tratamento visual. Faça referência a estilos conhecidos: "pintura a óleo," "cena de filme noir," "render CGI," "aquarela," "pôster Art Déco." Evite termos vagos como "bonito" — use referências de estilo concretas.',
      '**Contexto e ambiente:** Diga ao modelo onde o sujeito existe. "em uma floresta nebulosa ao amanhecer," "em uma cidade cyberpunk iluminada por néon," "sobre um pedestal de mármore em um museu." O contexto ancora a composição e o humor.',
      '**Detalhes técnicos:** Especifique iluminação e ângulo de câmera. "fotografado de cima, iluminação da hora dourada, profundidade de campo rasa" ou "grande angular, sombras dramáticas, alto contraste." Os detalhes técnicos controlam o humor.',
    ],
  },

  imageEditing: {
    title: 'Padrões de prompting para edição de imagens',
    content: 'A edição de imagens (inpainting, transferência de estilo ou composição) requer uma descrição clara de antes/depois e restrições precisas.',
    items: [
      '**Inpainting:** Marque ou descreva a região a modificar. "Substitua o fundo (atualmente uma parede cinza) por um pôr do sol sobre montanhas." Especifique o que deve permanecer inalterado: "Mantenha a pose e a expressão da pessoa idênticas; mude apenas o fundo."',
      '**Transferência de estilo:** Forneça tanto a referência quanto o alvo. "Aplique a paleta de cores e o estilo de pincelada desta pintura de Van Gogh (referência) a esta fotografia (alvo)." Especifique a preservação: "Mantenha todos os detalhes do original; aplique apenas o estilo."',
      '**Composição de múltiplas imagens:** Ao combinar imagens, seja explícito. "Combine esses três objetos em uma única cena. Organize-os da esquerda para a direita sobre uma mesa de madeira, iluminados pela luz do sol vinda de cima. Misture as bordas perfeitamente; garanta sombras consistentes."',
    ],
  },

  reliableOutputs: {
    title: 'Obtendo resultados confiáveis: quatro técnicas',
    content: 'Os modelos multimodais produzem resultados inconsistentes em diferentes tipos de imagens, mas prompts estruturados melhoram os resultados de forma mensurável. Estas quatro técnicas aumentam a confiabilidade:',
    items: [
      '**Especifique o nível de detalhe:** Solicitações vagas produzem resultados vagos. "Analise esta imagem em detalhes extremos" funciona melhor do que "analise esta imagem." Para geração: "fotorrealista, qualidade 4K, cada detalhe nítido" supera "uma imagem bonita."',
      '**Use enquadramento positivo:** Diga ao modelo o que incluir, não o que excluir. Em vez de "Não deixe as cores muito brilhantes," diga "Use cores suaves e frias com baixa saturação." Em vez de "Não adicione texto," diga "Garanta que nenhum texto visível apareça."',
      '**Defina restrições explicitamente:** Restrições ancoram os resultados. "Extraia exatamente 10 cores desta imagem, classificadas por frequência" é melhor do que "quais cores estão nesta imagem?" Para geração: "quadrado 1:1, exatamente duas pessoas, único ambiente interno."',
      '**Forneça exemplos de antes/depois:** Mostre ao modelo como é um bom resultado. Inclua imagens de exemplo junto com sua solicitação. [Exemplos few-shot](/pt/prompt-engineering/zero-shot-vs-few-shot) melhoram drasticamente a consistência em edição e transferência de estilo.',
    ],
  },

  pitfalls: {
    title: 'Erros comuns no prompting multimodal',
    content: 'Evite esses erros para melhorar os resultados multimodais:',
    items: [
      '**Prompts de imagem vagos:** [Prompt ruim] "Analise esta imagem." [Prompt bom] "Esta é uma captura de tela de uma interface web. Identifique todos os botões, campos de entrada e links. Para cada um, anote sua cor, posição e texto visível."',
      '**Esquecer rótulos ou contexto da imagem:** Diga ao modelo o que a imagem mostra antes de fazer perguntas. "Esta é uma imagem microscópica de uma partícula de vírus. Descreva a estrutura visível." é melhor do que "O que é isto?"',
      '**Escopo de análise errado:** [Prompt ruim] "Conte os objetos nesta imagem." [Prompt bom] "Conte apenas as maçãs vermelhas nesta fruteira. Não conte outras frutas. Se não tiver certeza, anote."',
      '**Assumir precisão:** Os modelos de visão-linguagem são propensos a alucinações. Não dependa deles para precisão perfeita no nível de pixel. Para tarefas críticas, use ferramentas especializadas (OCR para texto, APIs de detecção de objetos para contagem) junto com os VLMs.',
      '**Sobrecarregar com múltiplas imagens:** A maioria dos VLMs processa 2–10 imagens de forma confiável; o desempenho se degrada além disso. Processe em lotes: "Analise as primeiras 5 imagens. Em seguida, analise as próximas 5." Rotule claramente: "Imagem 1: [descrição], Imagem 2: [descrição]."',
      '**Riscos de privacidade e jurisdição com VLMs na nuvem:** Na UE, enviar imagens contendo dados pessoais para VLMs na nuvem como GPT-5.5 ou Gemini está sujeito ao Artigo 9 do RGPD se informações biométricas estiverem envolvidas. Modelos locais via Ollama ou LM Studio processam imagens no dispositivo, mantendo os dados dentro de sua jurisdição sem chamadas de API externas.',
    ],
  },

  promptquorumHelps: {
    title: 'Como o PromptQuorum ajuda você a fazer prompts com imagens',
    content: [
      '**O PromptQuorum é uma plataforma de despacho de prompts multimódelo que permite testar prompts multimodais no GPT-5.5, Claude Opus 4.8, Gemini 3.5 Pro e outros modelos simultaneamente.** Ao testar o mesmo prompt de descrição de imagem de produto em três modelos, o GPT-5.5 retornou a saída mais estruturada, o Claude Opus 4.8 alcançou a maior precisão na extração de texto e o Gemini 3.5 Pro capturou mais detalhes contextuais — revelando que diferentes modelos se destacam em diferentes tarefas de análise de imagens. O Claude Opus 4.8 é preciso na análise de documentos; o GPT-5.5 se destaca na compreensão de cenas; o Gemini 3.5 Pro lida com raciocínio multimodal complexo.',
      'Ao despachar o mesmo prompt multimodal para os três, você vê qual modelo responde melhor e usa o Consensus Scoring para ponderar os resultados.',
    ],
    items: [
      '**Comparação de imagens multimódelo:** Faça upload de uma imagem e faça a mesma pergunta em todos os modelos. Compare as respostas em segundos para descobrir qual modelo se adapta ao seu caso de uso.',
      '**Aplicação do framework:** Aplique o framework de prompts estruturados do PromptQuorum às solicitações multimodais. Defina funções, contexto, restrições e formato de saída — depois inclua uma imagem. Isso garante consistência entre os modelos.',
      '**Consensus Scoring em resultados de imagens:** Quando vários modelos analisam a mesma imagem, o Consensus Scoring identifica quais análises são mais confiáveis. Se três modelos concordam mas um discorda, a pontuação sinaliza o valor atípico.',
    ],
  },

  recipes: {
    title: 'Mini receitas: prompts multimodais para copiar e colar',
    content: 'Use estes modelos como ponto de partida para tarefas comuns. Cada um segue os [blocos de construção de prompts estruturados](/pt/prompt-engineering/5-building-blocks-every-prompt-needs) para garantir consistência e repetibilidade.',
    items: [
      '**Fotografia de produtos:** "Analise esta imagem de produto e extraia: (1) materiais principais, (2) paleta de cores, (3) tamanho em relação ao ambiente, (4) direção da iluminação, (5) quaisquer defeitos. Seja específico; evite adjetivos genéricos."',
      '**Extração de documentos:** "Extraia todo o texto visível deste documento. Preserve a formatação, quebras de linha e ênfase. Se o texto estiver parcialmente ilegível, anote [ILEGÍVEL] e sua melhor estimativa. Formate como um bloco de código markdown."',
      '**Crítica de UI/UX:** "Identifique: (1) chamada para ação principal e destaque, (2) hierarquia visual, (3) problemas de espaçamento e alinhamento, (4) problemas de contraste de cor. Concentre-se apenas em preocupações funcionais e de acessibilidade."',
      '**Modelo de texto para imagem:** "Sujeito: [substantivo]. Ação: [verbo + estado]. Estilo: [estilo artístico]. Contexto: [cenário]. Técnico: [ângulo de câmera, iluminação]. Exemplo: Sujeito: gramofone vintage. Ação: tocando com ondas sonoras visíveis. Estilo: surrealismo, pintura a óleo. Contexto: loja de antiguidades, pouca iluminação. Técnico: ângulo lateral, luz dourada, profundidade de campo rasa."',
      '**Edição de imagem:** "Edite esta imagem alvo para corresponder ao estilo desta imagem de referência, preservando a composição e o sujeito da imagem alvo. Não adicione nem remova elementos principais; aplique apenas alterações de cor, iluminação e textura."',
      '**Geração de texto alternativo:** "Escreva texto alternativo para esta imagem. Deve ter ≤125 caracteres. Descreva o que um usuário cego ou com baixa visão precisa saber. Exemplo: \'um homem de terno azul aperta a mão de uma mulher de vestido vermelho em um evento formal com paisagem urbana ao fundo.\'"',
    ],
  },

  faq: {
    title: 'FAQ',
    faqs: [
      {
        q: 'Qual modelo de visão-linguagem é melhor para analisar imagens?',
        a: 'Não há um único modelo melhor. O GPT-5.5 se destaca na compreensão geral de cenas e no raciocínio complexo. O Claude Opus 4.8 é preciso na análise de documentos e extração de texto. O Gemini 3.5 Pro lida com contextos multimodais mais longos (1 milhão de tokens). Use o PromptQuorum para testar os três em sua tarefa específica.',
      },
      {
        q: 'Os modelos de visão-linguagem conseguem contar objetos com precisão?',
        a: 'Não. Os VLMs têm dificuldades com contagem precisa, especialmente de objetos pequenos ou itens densamente agrupados. Para contagens exatas, use APIs de detecção de objetos especializadas, ou peça ao modelo que enumere objetos com restrições explícitas: "Conte apenas os itens vermelhos; seja conservador — se não tiver certeza, não conte."',
      },
      {
        q: 'Quantas imagens posso incluir em um único prompt?',
        a: 'A maioria dos VLMs processa 2–10 imagens de forma confiável. O desempenho se degrada além de 10. Se você precisar analisar muitas imagens, processe-as em lotes e em rodadas. Rotule cada imagem claramente: "Imagem 1: [descrição], Imagem 2: [descrição]."',
      },
      {
        q: 'Quais formatos de imagem os modelos de visão-linguagem suportam?',
        a: 'GPT-5.5, Claude Opus 4.8 e Gemini 3.5 Pro aceitam JPEG, PNG, GIF e WebP. A maioria suporta imagens de até 20 MB. Os limites específicos variam por modelo; consulte a documentação da OpenAI e da Anthropic para detalhes atuais.',
      },
      {
        q: 'Posso usar modelos locais como Ollama para prompting multimodal?',
        a: 'Sim. Modelos como LLaVA e Ollama suportam análise de imagens local. Os modelos locais oferecem privacidade, mas menor precisão do que GPT-5.5 ou Claude Opus 4.8. Use-os para tarefas não críticas ou quando a privacidade for essencial.',
      },
      {
        q: 'Como melhoro a consistência na geração de texto para imagem?',
        a: 'Use modelos estruturados (Sujeito/Ação/Estilo/Contexto/Técnico), forneça imagens de referência e especifique restrições (resolução, composição, número de elementos). Itere com o mesmo modelo — trocar de modelo entre iterações produz resultados inconsistentes.',
      },
      {
        q: 'Qual é a diferença entre prompting para análise de imagens e geração?',
        a: 'Prompts de análise especificam o escopo da informação ("Extraia apenas a data e o número da fatura"). Prompts de geração devem descrever claramente todos os elementos visuais (sujeito, ação, estilo, contexto, detalhes técnicos). A geração exige mais precisão porque o modelo imagina em vez de perceber.',
      },
    ],
  },

  relatedReading: {
    title: 'Leitura relacionada',
    items: [
      '[O que é engenharia de prompts?](/pt/prompt-engineering/what-is-prompt-engineering) — conceitos fundamentais para todos os tipos de prompting',
      '[Os 5 blocos de construção que todo prompt precisa](/pt/prompt-engineering/5-building-blocks-every-prompt-needs) — como a estrutura se aplica a todos os prompts, incluindo multimodais',
      '[Prompting de cadeia de pensamento](/pt/prompt-engineering/chain-of-thought-prompting) — padrões de raciocínio que se combinam com prompting de imagens para tarefas complexas',
    ],
  },

  sources: {
    title: 'Fontes e leitura adicional',
    items: [
      '[Documentação da API Vision da OpenAI](https://platform.openai.com/docs/guides/vision)',
      '[Documentação do Claude Vision da Anthropic](https://docs.anthropic.com/en/docs/vision)',
      '[Visão geral multimodal do Google DeepMind Gemini](https://deepmind.google/technologies/gemini/)',
    ],
  },
}

export const imagesWithTextAr: Record<string, PESection> = {
  definition: {
    title: 'ما هو الاستفسار متعدد الوسائط؟',
    content: '**الاستفسار متعدد الوسائط هو دمج النصوص والصور في استفسار واحد لتوجيه مخرجات الذكاء الاصطناعي.** تُعالج نماذج الرؤية واللغة (VLMs) — الشبكات العصبية المدرَّبة على بيانات الصور والنصوص — هذه المدخلات متعددة الوسائط للإجابة على الأسئلة، ووصف المشاهد، وتوليد صور جديدة، أو تعديل الصور الموجودة.\n\nعلى خلاف الاستفسار النصي البحت، يتيح لك الاستفسار متعدد الوسائط إظهار ما تعنيه بدلاً من مجرد وصفه. يستطيع النموذج رؤية ما تقصده بالضبط من خلال فحص التفاصيل البصرية والعلاقات المكانية والألوان، بدلاً من الاعتماد فقط على الوصف الكتابي.',
  },

  tldr: {
    title: 'النقاط الرئيسية',
    isTldr: true,
    items: [
      'يجمع الاستفسار متعدد الوسائط بين النصوص والصور؛ وتتميز نماذج مثل GPT-4o وClaude Opus 4.8 في تحليل الصور ووصفها',
      'توجد ثلاثة أوضاع: صورة←نص (وصف/تحليل)، ونص←صورة (توليد)، وصورة↔صورة (تحرير/تحويل)',
      'تواجه نماذج الرؤية واللغة صعوبات في العد الدقيق، وحدود الكائنات التفصيلية، وقراءة النصوص الصغيرة في الصور',
      'اتبع أنماطاً منظمة: كن محدداً في أهداف التحليل، ووفّر السياق، واستخدم الأمثلة لتحقيق الاتساق',
      'يتيح لك PromptQuorum اختبار الاستفسارات متعددة الوسائط عبر نماذج متعددة لمقارنة النتائج وإيجاد الأنسب',
    ],
  },

  modes: {
    title: 'الأوضاع الثلاثة للاستفسار متعدد الوسائط',
    content: 'يتخذ الاستفسار متعدد الوسائط ثلاثة أشكال رئيسية، كل منها مناسب لمهام مختلفة.',
    columns: ['الوضع', 'المدخل', 'المخرج', 'أفضل حالات الاستخدام'],
    rows: [
      {
        'الوضع': 'صورة → نص',
        'المدخل': 'صورة + سؤال نصي',
        'المخرج': 'إجابة نصية',
        'أفضل حالات الاستخدام': 'التسميات التوضيحية، وإدارة المحتوى، وكشف الكائنات، وتحليل المستندات',
      },
      {
        'الوضع': 'نص → صورة',
        'المدخل': 'استفسار نصي',
        'المخرج': 'صورة مولَّدة',
        'أفضل حالات الاستخدام': 'التصور الإبداعي، وتكرار التصميم، وتوليد الرسوم التوضيحية',
      },
      {
        'الوضع': 'صورة ↔ صورة',
        'المدخل': 'صورة موجودة + تعليمات',
        'المخرج': 'صورة معدَّلة',
        'أفضل حالات الاستخدام': 'الرسم الداخلي، ونقل الأسلوب، وتحسين الدقة، وتركيب الصور',
      },
    ],
    tableFormat: true,
  },

  howVisionWorks: {
    title: 'كيف ترى نماذج الرؤية واللغة الصور',
    content: [
      '**تحوّل نماذج الرؤية واللغة مثل GPT-4o وClaude Opus 4.8 وGemini 1.5 Pro الصورَ إلى متجهات عالية الأبعاد (تضمينات) باستخدام مشفِّر بصري، ثم تعالج هذه التضمينات جنباً إلى جنب مع رموز النص في فضاء دلالي مشترك.** يمنح هذا النهج نماذج VLM مزايا واضحة عبر مهام متعددة: فهي تُعرِّف الكائنات، وتقرأ النصوص، وتفهم العلاقات المكانية، وتستدل على المحتوى عبر صور متعددة. يدعم Gemini 1.5 Pro ما يصل إلى مليون رمز، مما يتيح تحليل متتاليات متعددة الوسائط أطول من نافذة السياق البالغة 128 ألف رمز لـ GPT-4o. يساعدك فهم [حدود نافذة السياق](/ar/prompt-engineering/context-windows-explained-why-ai-forgets) على تنظيم الاستفسارات التي تتجنب الاقتطاع عند العمل مع أوصاف صور طويلة أو متتاليات صور متعددة.',
      'تتميز نماذج VLM في فهم المشاهد، وتحليل المستندات، ومقارنة العناصر البصرية. بيد أن لها نقاط ضعف يمكن التنبؤ بها:',
    ],
    items: [
      'العد الدقيق (لا سيما للكائنات الصغيرة أو العناصر في المشاهد الكثيفة)',
      'حدود الكائنات التفصيلية والقياسات المكانية الدقيقة',
      'قراءة النصوص الصغيرة جداً في الصور أو المخططات المعقدة',
      'فهم العلاقات المكانية ثلاثية الأبعاد من زوايا منفردة',
      'تجنب التفاصيل الوهمية الغائبة عن الصورة',
    ],
  },

  imageToText: {
    title: 'أنماط الاستفسار لصورة → نص',
    content: 'عندما تطلب من نموذج تحليل صورة أو وصفها، نظّم طلبك حول أربعة أنماط:',
    items: [
      '**وصف الصور:** اذكر هدف التحليل، ثم حدد مستوى التفاصيل. "صِف هذه الصورة المنتجية في جملتين إلى ثلاث جمل، مع التركيز على المواد واللون والشكل" أكثر فائدة من "صِف الصورة."',
      '**استخراج المعلومات:** اطرح أسئلة محددة. بدلاً من "ما الموجود في هذه الوثيقة؟"، اسأل "استخرج التاريخ ورقم الفاتورة والمبلغ الإجمالي من هذه الإيصال." كن صريحاً حول التنسيق: "اسرد جميع الأشخاص المذكورين كنقاط."',
      '**طرح أسئلة محددة:** حدّد نطاق سؤالك بدقة. بدلاً من "هل توجد نصوص في هذه الصورة؟"، اسأل "اقرأ جميع النصوص المرئية في هذا المخطط وانسخها بدقة." تساعد المقارنات في تجنب الهلوسة: "أي كائن هو الأكبر؟ أيها الأصغر؟"',
      '**توليد النص البديل:** للوصول الشامل، اطلب من النموذج إنشاء نص بديل متوافق مع معايير WCAG. "اكتب نصاً بديلاً موجزاً (≤125 حرفاً) لهذه الصورة يصف محتواها البصري وسياقها لمستخدم كفيف."',
    ],
  },

  textToImage: {
    title: 'أنماط الاستفسار لنص → صورة',
    content: '**يعتمد توليد الصور من النص على استفسارات منظمة بشكل جيد. نظّم كل استفسار حول خمسة مكونات أساسية:**',
    items: [
      '**الموضوع:** سمِّ ما تريد رؤيته. كن محدداً: "كلب استرداد ذهبي يرتدي نظارات شمسية" أفضل من "كلب." استخدم أسماء الأعلام: "سيارة جاغوار E-Type موديل 1961" تعبّر عن أكثر بكثير من "سيارة كلاسيكية."',
      '**الفعل أو الحالة:** صِف ما يفعله الموضوع. "يقفز عبر حلقة"، "جالس على عرش"، "يذوب في ماء." تجعل الأفعال النشطة الصور ديناميكية؛ أما الأوصاف الساكنة فتنتج نتائج ساكنة.',
      '**الأسلوب والجماليات:** حدد المعالجة البصرية. استشهد بأساليب معروفة: "لوحة زيتية"، "مشهد فيلم نوار"، "تصيير CGI"، "ألوان مائية"، "ملصق Art Déco." تجنب المصطلحات المبهمة كـ "جميل" — استخدم مراجع أسلوبية محددة.',
      '**السياق والبيئة:** أخبر النموذج بالمكان الذي يوجد فيه الموضوع. "في غابة ضبابية عند الفجر"، "في مدينة سايبربانك مضاءة بالنيون"، "على قاعدة رخامية في متحف." يُثبِّت السياقُ التأليفَ والمزاج.',
      '**التفاصيل التقنية:** حدد الإضاءة وزاوية الكاميرا. "مُلتقط من الأعلى، إضاءة الساعة الذهبية، عمق مجال ضيق" أو "زاوية عريضة جداً، ظلال درامية، تباين عالٍ." تتحكم التفاصيل التقنية في المزاج.',
    ],
  },

  imageEditing: {
    title: 'أنماط الاستفسار لتحرير الصور',
    content: 'يتطلب تحرير الصور (الرسم الداخلي، أو نقل الأسلوب، أو التركيب) وصفاً واضحاً للوضع قبل وبعد التعديل، وقيوداً دقيقة.',
    items: [
      '**الرسم الداخلي:** حدد أو صف المنطقة المراد تعديلها. "استبدل الخلفية (حائط رمادي حالياً) بغروب الشمس فوق الجبال." حدد ما يجب أن يبقى دون تغيير: "حافظ على وضعية الشخص وتعبيره كما هما؛ غيّر الخلفية فقط."',
      '**نقل الأسلوب:** وفّر المرجع والهدف معاً. "طبّق لوحة الألوان وأسلوب ضربات الفرشاة من لوحة Van Gogh هذه (مرجع) على هذه الصورة الفوتوغرافية (هدف)." حدد ما يُحفَظ: "احتفظ بجميع تفاصيل الأصل؛ طبّق الأسلوب فقط."',
      '**تركيب صور متعددة:** عند دمج الصور، كن صريحاً. "ادمج هذه الكائنات الثلاثة في مشهد واحد. رتّبها من اليسار إلى اليمين على طاولة خشبية، مضاءة بضوء الشمس من الأعلى. امزج الحواف بسلاسة؛ تأكد من اتساق الظلال."',
    ],
  },

  reliableOutputs: {
    title: 'الحصول على مخرجات موثوقة: أربع تقنيات',
    content: 'تُنتج النماذج متعددة الوسائط مخرجات متفاوتة عبر أنواع مختلفة من الصور، لكن الاستفسارات المنظمة تُحسِّن النتائج بشكل قابل للقياس. هذه التقنيات الأربع تزيد الموثوقية:',
    items: [
      '**حدد مستوى التفاصيل:** الطلبات المبهمة تنتج نتائج مبهمة. "حلِّل هذه الصورة بتفصيل مفرط" أفضل من "حلِّل هذه الصورة." للتوليد: "فوتوغرافي واقعي، جودة 4K، كل التفاصيل حادة" أفضل من "صورة جميلة."',
      '**استخدم الصياغة الإيجابية:** أخبر النموذج بما يجب تضمينه لا باستبعاده. بدلاً من "لا تجعل الألوان ساطعة جداً"، قل "استخدم ألواناً هادئة وباردة ذات تشبع منخفض." بدلاً من "لا تضف نصاً"، قل "تأكد من عدم ظهور أي نص مرئي."',
      '**حدد القيود بشكل صريح:** تُثبِّت القيودُ المخرجاتِ. "استخرج عشرة ألوان بالضبط من هذه الصورة، مرتبة حسب التكرار" أفضل من "ما الألوان الموجودة في هذه الصورة؟" للتوليد: "مربع 1:1، شخصان بالضبط، غرفة داخلية واحدة."',
      '**وفّر أمثلة قبل وبعد:** أرِ النموذج كيف تبدو النتيجة الجيدة. أدرج صور أمثلة جنباً إلى جنب مع طلبك. [أمثلة few-shot](/ar/prompt-engineering/zero-shot-vs-few-shot) تُحسِّن الاتساق في التحرير ونقل الأسلوب بشكل ملحوظ.',
    ],
  },

  pitfalls: {
    title: 'الأخطاء الشائعة في الاستفسار متعدد الوسائط',
    content: 'تجنب هذه الأخطاء لتحسين النتائج متعددة الوسائط:',
    items: [
      '**استفسارات الصور المبهمة:** [استفسار سيئ] "حلِّل هذه الصورة." [استفسار جيد] "هذه لقطة شاشة لواجهة ويب. حدِّد جميع الأزرار وحقول الإدخال والروابط. لكل منها، سجّل لونه وموضعه ونصه المرئي."',
      '**إهمال تسميات الصورة أو سياقها:** أخبر النموذج بما تُظهره الصورة قبل طرح الأسئلة. "هذه صورة مجهرية لجسيم فيروسي. صِف البنية المرئية." أفضل من "ما هذا؟"',
      '**نطاق التحليل الخاطئ:** [استفسار سيئ] "عدّ الكائنات في هذه الصورة." [استفسار جيد] "عدّ التفاح الأحمر فقط في هذه الفاكهة. لا تعدّ الفواكه الأخرى. إن لم تكن متأكداً، اذكر ذلك."',
      '**افتراض الدقة:** نماذج الرؤية واللغة عرضة للهلوسة. لا تعتمد عليها للحصول على دقة تصل إلى مستوى البكسل. للمهام الحرجة، استخدم أدوات متخصصة (OCR للنصوص، وواجهات برمجية لكشف الكائنات للعد) جنباً إلى جنب مع نماذج VLM.',
      '**الإرهاق بصور متعددة:** تتعامل معظم نماذج VLM بشكل موثوق مع 2 إلى 10 صور؛ وتتدهور الأداء بعد ذلك. قسِّمها على دفعات: "حلِّل الصور الخمس الأولى. ثم حلِّل الخمس التالية." اجعل التسميات واضحة: "الصورة 1: [وصف]، الصورة 2: [وصف]."',
      '**مخاطر الخصوصية والاختصاص القضائي مع نماذج VLM السحابية:** في الاتحاد الأوروبي، يخضع إرسال الصور التي تحتوي على بيانات شخصية إلى نماذج VLM السحابية مثل GPT-4o أو Gemini للمادة التاسعة من اللائحة العامة لحماية البيانات (GDPR) إذا كانت تتضمن معلومات بيومترية. تعالج النماذج المحلية عبر Ollama أو LM Studio الصورَ على الجهاز مباشرة، مما يُبقي البيانات ضمن نطاق اختصاصك دون استدعاءات واجهة برمجية خارجية.',
    ],
  },

  promptquorumHelps: {
    title: 'كيف يساعدك PromptQuorum على الاستفسار بالصور',
    content: [
      '**PromptQuorum هي منصة توزيع استفسارات متعددة النماذج تتيح لك اختبار الاستفسارات متعددة الوسائط عبر GPT-4o وClaude Opus 4.8 وGemini 1.5 Pro وغيرها من النماذج في آنٍ واحد.** عند اختبار استفسار وصف صورة المنتج ذاته عبر ثلاثة نماذج، أعاد GPT-4o المخرجات الأكثر تنظيماً، وحقق Claude Opus 4.8 أعلى دقة في استخراج النصوص، والتقط Gemini 1.5 Pro أكثر التفاصيل السياقية — مما يكشف أن نماذج مختلفة تتفوق في مهام تحليل صور مختلفة. Claude Opus 4.8 دقيق في تحليل المستندات؛ GPT-4o يتميز في فهم المشاهد؛ Gemini 1.5 Pro يتعامل مع الاستدلال المعقد متعدد الصور.',
      'بإرسال الاستفسار متعدد الوسائط ذاته إلى النماذج الثلاثة، ترى أي نموذج يجيب بشكل أفضل، ثم تستخدم نظام تقييم الإجماع لترجيح مخرجاتها.',
    ],
    items: [
      '**مقارنة الصور عبر نماذج متعددة:** ارفع صورة واطرح السؤال ذاته على جميع النماذج. قارن الإجابات في ثوانٍ لاكتشاف أي نموذج يناسب حالة استخدامك.',
      '**تطبيق الإطار:** طبّق إطار الاستفسارات المنظمة من PromptQuorum على الطلبات متعددة الوسائط. حدد الأدوار والسياق والقيود وتنسيق المخرجات — ثم أضف صورة. يضمن هذا الاتساق عبر النماذج.',
      '**تقييم الإجماع على مخرجات الصور:** عندما تحلل نماذج متعددة الصورة ذاتها، يُحدِّد تقييمُ الإجماع أي التحليلات أكثر موثوقية. إذا اتفقت ثلاثة نماذج واختلف أحدها، تُشير الدرجة إلى القيمة الشاذة.',
    ],
  },

  recipes: {
    title: 'وصفات مصغرة: استفسارات متعددة الوسائط جاهزة للنسخ واللصق',
    content: 'استخدم هذه القوالب كنقطة انطلاق للمهام الشائعة. كل منها يتبع [مكونات الاستفسار المنظم](/ar/prompt-engineering/5-building-blocks-every-prompt-needs) لضمان الاتساق وقابلية التكرار.',
    items: [
      '**تصوير المنتجات:** "حلِّل هذه الصورة للمنتج واستخرج: (1) المواد الرئيسية، (2) لوحة الألوان، (3) الحجم بالنسبة للمحيط، (4) اتجاه الإضاءة، (5) أي عيوب. كن محدداً؛ تجنب الصفات العامة."',
      '**استخراج المستندات:** "استخرج جميع النصوص المرئية من هذه الوثيقة. احتفظ بالتنسيق وفواصل الأسطر والتأكيد. إذا كان النص غير مقروء جزئياً، اذكر [غير واضح] وأفضل تخمين لك. نسِّق كتلة كود markdown."',
      '**نقد واجهة المستخدم وتجربة المستخدم:** "حدِّد: (1) دعوة الإجراء الرئيسية وبروزها، (2) التسلسل الهرمي البصري، (3) مشكلات التباعد والمحاذاة، (4) مشكلات تباين الألوان. ركّز على المخاوف الوظيفية ومخاوف الوصول الشامل فقط."',
      '**قالب نص إلى صورة:** "الموضوع: [اسم]. الفعل: [فعل + حالة]. الأسلوب: [أسلوب فني]. السياق: [الإعداد]. تقني: [زاوية الكاميرا، الإضاءة]. مثال: الموضوع: فونوغراف عتيق. الفعل: يعزف مع موجات صوتية مرئية. الأسلوب: سريالية، لوحة زيتية. السياق: متجر تحف، إضاءة خافتة. تقني: زاوية جانبية، ضوء ذهبي، عمق مجال ضيق."',
      '**تحرير الصور:** "عدِّل هذه الصورة المستهدفة لتتطابق مع أسلوب هذه الصورة المرجعية مع الحفاظ على تكوين الصورة المستهدفة وموضوعها. لا تضف عناصر رئيسية ولا تحذفها؛ طبّق فقط تغييرات اللون والإضاءة والملمس."',
      '**توليد النص البديل:** "اكتب نصاً بديلاً لهذه الصورة. يجب أن يكون ≤125 حرفاً. صِف ما يحتاج المستخدم الكفيف أو ضعيف البصر معرفته. مثال: \'رجل يرتدي بدلة زرقاء يصافح امرأة ترتدي فستاناً أحمر في حفل رسمي مع منظر المدينة في الخلفية.\'"',
    ],
  },

  faq: {
    title: 'الأسئلة الشائعة',
    faqs: [
      {
        q: 'ما أفضل نموذج رؤية ولغة لتحليل الصور؟',
        a: 'لا يوجد نموذج أفضل بشكل مطلق. يتفوق GPT-4o في الفهم العام للمشاهد والاستدلال المعقد. Claude Opus 4.8 دقيق في تحليل المستندات واستخراج النصوص. Gemini 1.5 Pro يتعامل مع سياقات متعددة الوسائط أطول (مليون رمز). استخدم PromptQuorum لاختبار النماذج الثلاثة على مهمتك المحددة.',
      },
      {
        q: 'هل تستطيع نماذج الرؤية واللغة عد الكائنات بدقة؟',
        a: 'لا. تواجه نماذج VLM صعوبة في العد الدقيق، لا سيما للكائنات الصغيرة أو العناصر المتكدسة بكثافة. للحصول على أعداد دقيقة، استخدم واجهات برمجية متخصصة لكشف الكائنات، أو اطلب من النموذج تعداد الكائنات بقيود صريحة: "عدّ العناصر الحمراء فقط؛ كن محافظاً — إن لم تكن متأكداً، لا تعدّها."',
      },
      {
        q: 'كم صورة يمكنني تضمينها في استفسار واحد؟',
        a: 'تتعامل معظم نماذج VLM بشكل موثوق مع 2 إلى 10 صور. يتدهور الأداء بعد 10 صور. إذا كنت بحاجة إلى تحليل صور كثيرة، قسِّمها على دفعات وجولات. سمِّ كل صورة بوضوح: "الصورة 1: [وصف]، الصورة 2: [وصف]."',
      },
      {
        q: 'ما تنسيقات الصور التي تدعمها نماذج الرؤية واللغة؟',
        a: 'تقبل كل من GPT-4o وClaude Opus 4.8 وGemini 1.5 Pro صيَغ JPEG وPNG وGIF وWebP. تدعم معظمها صوراً بحجم يصل إلى 20 ميجابايت. تتفاوت الحدود المحددة حسب النموذج؛ راجع وثائق OpenAI وAnthropic للاطلاع على التفاصيل الحالية.',
      },
      {
        q: 'هل يمكنني استخدام نماذج محلية مثل Ollama للاستفسار متعدد الوسائط؟',
        a: 'نعم. تدعم نماذج مثل LLaVA وOllama تحليل الصور محلياً. توفر النماذج المحلية الخصوصية لكنها أقل دقة من GPT-4o أو Claude Opus 4.8. استخدمها للمهام غير الحرجة أو عندما تكون الخصوصية ضرورية.',
      },
      {
        q: 'كيف أحسّن الاتساق في توليد صور من نص؟',
        a: 'استخدم قوالب منظمة (الموضوع/الفعل/الأسلوب/السياق/تقني)، ووفّر صور مرجعية، وحدد القيود (الدقة، التكوين، عدد العناصر). كرِّر مع النموذج ذاته — تبديل النماذج بين التكرارات ينتج نتائج غير متسقة.',
      },
      {
        q: 'ما الفرق بين الاستفسار لتحليل الصور مقابل التوليد؟',
        a: 'تحدد استفسارات التحليل نطاق المعلومات ("استخرج التاريخ ورقم الفاتورة فقط"). يجب أن تصف استفسارات التوليد بوضوح جميع العناصر البصرية (الموضوع، الفعل، الأسلوب، السياق، التفاصيل التقنية). يتطلب التوليد دقة أكبر لأن النموذج يتخيل بدلاً من أن يُدرك.',
      },
    ],
  },

  relatedReading: {
    title: 'قراءات ذات صلة',
    items: [
      '[ما هي هندسة الاستفسارات؟](/ar/prompt-engineering/what-is-prompt-engineering) — المفاهيم الأساسية لجميع أنواع الاستفسارات',
      '[المكونات الخمسة التي يحتاجها كل استفسار](/ar/prompt-engineering/5-building-blocks-every-prompt-needs) — كيف تنطبق البنية على جميع الاستفسارات، بما فيها متعددة الوسائط',
      '[استفسار سلسلة التفكير](/ar/prompt-engineering/chain-of-thought-prompting) — أنماط الاستدلال التي تتكامل مع استفسار الصور للمهام المعقدة',
    ],
  },

  sources: {
    title: 'المصادر والقراءات الإضافية',
    items: [
      '[توثيق OpenAI Vision API](https://platform.openai.com/docs/guides/vision)',
      '[توثيق Anthropic Claude Vision](https://docs.anthropic.com/en/docs/vision)',
      '[نظرة عامة على Gemini متعدد الوسائط من Google DeepMind](https://deepmind.google/technologies/gemini/)',
    ],
  },
}

export const imagesWithTextKo: Record<string, PESection> = {
  definition: {
    title: '멀티모달 프롬프팅이란 무엇입니까?',
    content: '**멀티모달 프롬프팅은 AI 출력을 안내하기 위해 단일 프롬프트에 텍스트와 이미지를 결합하는 것입니다.** 비전-언어 모델(VLM) — 이미지와 텍스트 데이터 모두로 훈련된 신경망 — 은 이러한 멀티모달 입력을 처리하여 질문에 답하고, 장면을 설명하며, 새로운 이미지를 생성하거나 기존 이미지를 편집합니다.\n\n텍스트 전용 프롬프팅과 달리 멀티모달 프롬프팅은 설명하는 대신 직접 보여줄 수 있습니다. 모델은 작성된 설명에만 의존하지 않고 시각적 세부 사항, 공간적 관계, 색상을 검토하여 정확히 의미하는 바를 파악할 수 있습니다.',
  },

  tldr: {
    title: '핵심 요점',
    isTldr: true,
    items: [
      '멀티모달 프롬프팅은 텍스트와 이미지를 결합합니다. GPT-5.5 및 Claude Opus 4.8과 같은 모델은 이미지 분석과 설명에 뛰어납니다.',
      '세 가지 모드가 있습니다: Image→Text(설명/분석), Text→Image(생성), Image↔Image(편집/변환)',
      '비전-언어 모델은 정확한 개수 세기, 세밀한 객체 경계, 이미지 내 소형 텍스트 읽기에 어려움을 겪습니다.',
      '구조화된 패턴을 따르십시오: 분석 목표를 구체적으로 명시하고 맥락을 제공하며 일관성을 위해 예시를 활용하십시오.',
      'PromptQuorum을 사용하면 여러 모델에서 멀티모달 프롬프트를 테스트하여 출력을 비교하고 최적의 모델을 찾을 수 있습니다.',
    ],
  },

  modes: {
    title: '멀티모달 프롬프팅의 세 가지 모드',
    content: '멀티모달 프롬프팅은 각기 다른 작업에 적합한 세 가지 주요 형태를 취합니다.',
    columns: ['모드', '입력', '출력', '주요 사용 사례'],
    rows: [
      { '모드': 'Image → Text', '입력': '이미지 + 텍스트 질문', '출력': '텍스트 응답', '주요 사용 사례': '캡션 생성, 콘텐츠 모더레이션, 객체 감지, 문서 파싱' },
      { '모드': 'Text → Image', '입력': '텍스트 프롬프트', '출력': '생성된 이미지', '주요 사용 사례': '창의적 시각화, 디자인 반복, 일러스트레이션 생성' },
      { '모드': 'Image ↔ Image', '입력': '기존 이미지 + 지시사항', '출력': '수정된 이미지', '주요 사용 사례': '인페인팅, 스타일 전이, 업스케일링, 이미지 합성' },
    ],
    tableFormat: true,
  },

  howVisionWorks: {
    title: '비전-언어 모델이 이미지를 인식하는 방법',
    content: [
      '**GPT-5.5, Claude Opus 4.8, Gemini 3.5 Pro와 같은 비전-언어 모델은 시각적 인코더를 사용하여 이미지를 고차원 벡터(임베딩)로 변환한 다음, 공유된 의미 공간에서 텍스트 토큰과 함께 해당 임베딩을 처리합니다.** 이 접근 방식은 VLM에게 여러 작업에 걸쳐 명확한 강점을 부여합니다. 객체를 식별하고 텍스트를 읽으며 공간적 관계를 이해하고 여러 이미지에 걸쳐 콘텐츠를 추론합니다. Gemini 3.5 Pro는 최대 100만 토큰을 지원하여 GPT-5.5의 128k 컨텍스트 창보다 긴 멀티모달 시퀀스를 분석할 수 있습니다. [컨텍스트 창 한계](/ko/prompt-engineering/context-windows-explained-why-ai-forgets)를 이해하면 긴 이미지 설명이나 다중 이미지 시퀀스 작업 시 잘림을 방지하는 프롬프트를 구성하는 데 도움이 됩니다.',
      'VLM은 장면 이해, 문서 분석, 시각적 요소 비교에 뛰어납니다. 그러나 예측 가능한 약점도 있습니다:',
    ],
    items: [
      '정확한 개수 세기(특히 밀집된 장면의 소형 객체)',
      '세밀한 객체 경계와 정확한 공간 측정',
      '이미지 내 소형 텍스트나 복잡한 다이어그램 읽기',
      '단일 각도에서 3차원 공간적 관계 이해',
      '이미지에 없는 세부 사항 환각 방지',
    ],
  },

  imageToText: {
    title: 'Image → Text 프롬프트 패턴',
    content: '모델에게 이미지를 분석하거나 설명하도록 요청할 때 네 가지 패턴을 중심으로 요청을 구성하십시오:',
    items: [
      '**이미지 설명:** 분석 목표를 명시한 다음 세부 수준을 지정하십시오. "소재, 색상, 형태에 집중하여 이 제품 사진을 2–3문장으로 설명하십시오"는 "이미지를 설명하십시오"보다 훨씬 유용합니다.',
      '**정보 추출:** 구체적인 질문을 하십시오. "이 문서에는 무엇이 있습니까?" 대신 "이 영수증에서 날짜, 청구서 번호, 총 금액을 추출하십시오"라고 요청하십시오. 형식을 명시하십시오: "언급된 모든 사람을 글머리 기호 목록으로 나열하십시오."',
      '**목표 지향 질문:** 질문 범위를 좁히십시오. "이 이미지에 텍스트가 있습니까?" 대신 "이 다이어그램의 모든 가시적 텍스트를 읽고 정확히 옮겨 쓰십시오"라고 하십시오. 비교는 환각을 방지하는 데 도움이 됩니다: "어떤 객체가 가장 큽니까? 어떤 것이 가장 작습니까?"',
      '**alt-text 생성:** 접근성을 위해 모델에게 WCAG 준수 alt-text를 작성하도록 요청하십시오. "시각 장애인 사용자를 위해 이 이미지의 시각적 내용과 맥락을 설명하는 간결한 alt-text(≤125자)를 작성하십시오."',
    ],
  },

  textToImage: {
    title: 'Text → Image 프롬프트 패턴',
    content: '**텍스트-이미지 생성은 잘 구조화된 프롬프트에 달려 있습니다. 다섯 가지 핵심 구성 요소를 중심으로 모든 프롬프트를 구성하십시오:**',
    items: [
      '**주제:** 보고 싶은 것을 명명하십시오. 구체적으로 하십시오. "선글라스를 쓴 골든 리트리버"는 "개"보다 낫습니다. 고유명사를 사용하십시오. "1961년형 Jaguar E-Type"은 "클래식 카"보다 더 많은 정보를 전달합니다.',
      '**동작 또는 상태:** 주제가 무엇을 하고 있는지 설명하십시오. "후프를 통과하여 점프하는," "왕좌에 앉아 있는," "물로 녹아드는." 능동적인 동사는 이미지를 역동적으로 만듭니다. 정적인 설명은 정적인 결과를 낳습니다.',
      '**스타일 및 미학:** 시각적 처리를 지정하십시오. 알려진 스타일을 참조하십시오: "유화," "누아르 영화 스틸," "CGI 렌더," "수채화," "아르 데코 포스터." "아름다운"과 같은 모호한 용어는 피하고 구체적인 스타일 참조를 사용하십시오.',
      '**맥락 및 배경:** 주제가 어디에 존재하는지 알려주십시오. "새벽 안개 낀 숲에서," "네온 불빛의 사이버펑크 도시에서," "박물관의 대리석 받침대 위에." 맥락은 구도와 분위기를 고정합니다.',
      '**기술적 세부 사항:** 조명과 카메라 각도를 지정하십시오. "위에서 촬영, 황금빛 시간대 조명, 얕은 피사계 심도" 또는 "초광각, 극적인 그림자, 높은 대비." 기술적 세부 사항은 분위기를 제어합니다.',
    ],
  },

  imageEditing: {
    title: '이미지 편집 프롬프트 패턴',
    content: '이미지 편집(인페인팅, 스타일 전이, 합성)은 명확한 전후 설명과 정확한 제약이 필요합니다.',
    items: [
      '**인페인팅:** 수정할 영역을 표시하거나 설명하십시오. "배경(현재 회색 벽)을 산 위의 일몰로 교체하십시오." 변경되지 않을 부분을 지정하십시오: "인물의 자세와 표정은 동일하게 유지하고 배경만 변경하십시오."',
      '**스타일 전이:** 참조와 대상 모두를 제공하십시오. "이 반 고흐 그림(참조)의 색상 팔레트와 붓터치 스타일을 이 사진(대상)에 적용하십시오." 보존 사항을 지정하십시오: "원본의 모든 세부 사항을 유지하고 스타일만 적용하십시오."',
      '**다중 이미지 합성:** 이미지를 결합할 때 명확하게 하십시오. "이 세 객체를 단일 장면으로 결합하십시오. 위에서 햇빛이 비치는 나무 테이블 위에 왼쪽에서 오른쪽으로 배치하십시오. 가장자리를 매끄럽게 혼합하고 일관된 그림자를 만드십시오."',
    ],
  },

  reliableOutputs: {
    title: '신뢰할 수 있는 출력 얻기: 네 가지 기법',
    content: '멀티모달 모델은 이미지 유형에 따라 일관성 없는 결과를 생성하지만 구조화된 프롬프트는 결과를 측정 가능하게 향상시킵니다. 다음 네 가지 기법이 신뢰성을 높입니다:',
    items: [
      '**세부 수준 지정:** 모호한 요청은 모호한 결과를 낳습니다. "이 이미지를 극도로 상세하게 분석하십시오"는 "이 이미지를 분석하십시오"보다 효과적입니다. 생성의 경우: "사실적, 4K 품질, 모든 세부 사항이 선명한"은 "좋은 이미지"보다 낫습니다.',
      '**긍정적 프레이밍 사용:** 모델에게 무엇을 제외할지가 아니라 무엇을 포함할지 알려주십시오. "색상을 너무 밝게 만들지 마십시오" 대신 "채도가 낮은 차분하고 쿨한 톤의 색상을 사용하십시오"라고 하십시오. "텍스트를 추가하지 마십시오" 대신 "가시적인 텍스트가 나타나지 않도록 하십시오"라고 하십시오.',
      '**명시적 제약 설정:** 제약은 출력을 고정합니다. "이 이미지에서 빈도순으로 정확히 10가지 색상을 추출하십시오"는 "이 이미지에는 어떤 색상이 있습니까?"보다 낫습니다. 생성의 경우: "1:1 정사각형, 정확히 두 사람, 단일 실내 공간."',
      '**전후 예시 제공:** 모델에게 좋은 결과가 어떻게 생겼는지 보여주십시오. 요청과 함께 예시 이미지를 포함하십시오. [Few-shot 예시](/ko/prompt-engineering/zero-shot-vs-few-shot)는 편집 및 스타일 전이의 일관성을 크게 향상시킵니다.',
    ],
  },

  pitfalls: {
    title: '일반적인 멀티모달 함정',
    content: '다음 실수를 인식하고 피하십시오:',
    items: [
      '**모호한 이미지 프롬프트:** [나쁜 프롬프트] "이 이미지를 분석하십시오." [좋은 프롬프트] "이것은 웹 인터페이스의 스크린샷입니다. 모든 버튼, 입력 필드, 링크를 식별하십시오. 각각에 대해 색상, 위치, 가시적 텍스트를 기록하십시오."',
      '**이미지 레이블 또는 컨텍스트 누락:** 질문하기 전에 모델에게 이미지가 무엇을 보여주는지 알려주십시오. "이것은 바이러스 입자의 현미경 이미지입니다. 가시적인 구조를 설명하십시오"는 "이것이 무엇입니까?"보다 낫습니다.',
      '**잘못된 분석 범위:** [나쁜 프롬프트] "이 이미지에서 객체를 세십시오." [좋은 프롬프트] "이 과일 그릇에서 빨간 사과만 세십시오. 다른 과일은 세지 마십시오. 불확실한 경우 명시하십시오."',
      '**정밀도 가정:** 비전-언어 모델은 환각에 취약합니다. 픽셀 수준의 정확성을 위해 의존하지 마십시오. 중요한 작업에는 VLM과 함께 전문 도구(텍스트용 OCR, 개수 세기용 객체 감지 API)를 사용하십시오.',
      '**다중 이미지 과부하:** 대부분의 VLM은 2–10개의 이미지를 안정적으로 처리합니다. 그 이상에서는 성능이 저하됩니다. 배치로 처리하십시오: "처음 5개 이미지를 분석하십시오. 그런 다음 다음 5개를 분석하십시오." 명확하게 레이블을 붙이십시오: "Image 1: [설명], Image 2: [설명]."',
      '**클라우드 VLM의 개인정보 및 관할권 위험:** EU에서 GPT-5.5 또는 Gemini와 같은 클라우드 VLM에 개인 데이터가 포함된 이미지를 전송하는 것은 생체인식 정보가 포함된 경우 GDPR 제9조의 적용을 받습니다. Ollama 또는 LM Studio를 통한 로컬 모델은 이미지를 기기에서 처리하여 외부 API 호출 없이 관할권 내에서 데이터를 유지합니다.',
    ],
  },

  promptquorumHelps: {
    title: 'PromptQuorum이 이미지 프롬프팅을 돕는 방법',
    content: [
      '**PromptQuorum은 GPT-5.5, Claude Opus 4.8, Gemini 3.5 Pro 및 기타 모델에 걸쳐 멀티모달 프롬프트를 동시에 테스트할 수 있는 다중 모델 프롬프트 디스패치 플랫폼입니다.** 동일한 제품 이미지 설명 프롬프트를 세 모델에서 테스트했을 때 GPT-5.5는 가장 구조화된 출력을 반환했고, Claude Opus 4.8은 텍스트 추출에서 가장 높은 정확도를 달성했으며, Gemini 3.5 Pro는 가장 많은 맥락적 세부 사항을 포착했습니다 — 서로 다른 모델이 서로 다른 이미지 분석 작업에 탁월함을 보여줍니다.',
      '세 모델 모두에 동일한 멀티모달 프롬프트를 디스패치함으로써 어떤 모델이 가장 잘 답변하는지 확인한 다음 Consensus Scoring을 사용하여 출력에 가중치를 부여합니다.',
    ],
    items: [
      '**다중 모델 이미지 비교:** 이미지를 업로드하고 모든 모델에 걸쳐 동일한 질문을 하십시오. 몇 초 내에 응답을 비교하여 사용 사례에 맞는 모델을 발견하십시오.',
      '**프레임워크 적용:** PromptQuorum의 구조화된 프롬프트 프레임워크를 멀티모달 요청에 적용하십시오. 역할, 맥락, 제약, 출력 형식을 정의한 다음 이미지를 포함하십시오. 이는 모델 간 일관성을 보장합니다.',
      '**이미지 출력에 대한 Consensus Scoring:** 여러 모델이 동일한 이미지를 분석할 때 Consensus Scoring은 가장 신뢰할 수 있는 분석을 식별합니다. 세 모델이 동의하지만 하나가 동의하지 않는 경우 점수가 이상값을 표시합니다.',
    ],
  },

  recipes: {
    title: '미니 레시피: 복사-붙여넣기 멀티모달 프롬프트',
    content: '이 템플릿을 일반적인 작업의 시작점으로 사용하십시오. 각각은 일관성과 반복 가능성을 보장하기 위해 [구조화된 프롬프트 구성 요소](/ko/prompt-engineering/5-building-blocks-every-prompt-needs)를 따릅니다.',
    items: [
      '**제품 사진:** "이 제품 이미지를 분석하고 다음을 추출하십시오: (1) 주요 소재, (2) 색상 팔레트, (3) 주변 환경 대비 크기, (4) 조명 방향, (5) 결함. 구체적으로 하고 일반적인 형용사는 피하십시오."',
      '**문서 추출:** "이 문서에서 모든 가시적 텍스트를 추출하십시오. 서식, 줄바꿈, 강조를 보존하십시오. 텍스트가 부분적으로 읽기 어려운 경우 [UNCLEAR]로 표시하고 최선의 추측을 제공하십시오. 마크다운 코드 블록으로 형식을 지정하십시오."',
      '**UI/UX 비평:** "다음을 식별하십시오: (1) 기본 행동 유도 및 두드러짐, (2) 시각적 위계, (3) 간격 및 정렬 문제, (4) 색상 대비 문제. 기능적 및 접근성 우려 사항에만 집중하십시오."',
      '**Text-to-Image 템플릿:** "주제: [명사]. 동작: [동사 + 상태]. 스타일: [예술 스타일]. 맥락: [배경]. 기술적: [카메라 각도, 조명]. 예시: 주제: 빈티지 축음기. 동작: 음파가 보이며 재생 중. 스타일: 초현실주의, 유화. 맥락: 골동품 가게, 어두운 조명. 기술적: 측면 각도, 황금빛 조명, 얕은 피사계 심도."',
      '**이미지 편집:** "이 대상 이미지를 참조 이미지의 스타일과 일치하도록 편집하되 대상 이미지의 구도와 주제는 보존하십시오. 주요 요소를 추가하거나 제거하지 말고 색상, 조명, 질감 변경만 적용하십시오."',
      '**Alt-text 생성:** "이 이미지에 대한 alt-text를 작성하십시오. ≤125자여야 합니다. 시각 장애인이나 저시력 사용자가 알아야 할 내용을 설명하십시오. 예시: \'공식 행사에서 붉은 드레스를 입은 여성과 악수하는 파란 정장의 남성, 배경에 도시 전경이 있음.\'"',
    ],
  },

  faq: {
    title: 'FAQ',
    faqs: [
      {
        q: '이미지 분석에 가장 적합한 비전-언어 모델은 무엇입니까?',
        a: '단일 최고 모델은 없습니다. GPT-5.5는 일반적인 장면 이해와 복잡한 추론에 뛰어납니다. Claude Opus 4.8은 문서 분석과 텍스트 추출에 정확합니다. Gemini 3.5 Pro는 더 긴 멀티모달 컨텍스트(100만 토큰)를 처리합니다. PromptQuorum을 사용하여 특정 작업에 대해 세 모델 모두를 테스트하십시오.',
      },
      {
        q: '비전-언어 모델이 객체를 정확하게 셀 수 있습니까?',
        a: '아니요. VLM은 특히 작거나 밀집된 객체의 정확한 개수 세기에 어려움을 겪습니다. 정확한 개수를 위해서는 전문 객체 감지 API를 사용하거나 명시적인 제약과 함께 모델에게 객체를 열거하도록 요청하십시오: "빨간 항목만 세십시오. 보수적으로 — 불확실한 경우 세지 마십시오."',
      },
      {
        q: '하나의 프롬프트에 몇 개의 이미지를 포함할 수 있습니까?',
        a: '대부분의 VLM은 2–10개의 이미지를 안정적으로 처리합니다. 10개 이상에서는 성능이 저하됩니다. 많은 이미지를 분석해야 하는 경우 배치로 처리하고 여러 차례에 걸쳐 진행하십시오. 각 이미지에 명확한 레이블을 붙이십시오: "Image 1: [설명], Image 2: [설명]."',
      },
      {
        q: '비전-언어 모델은 어떤 이미지 형식을 지원합니까?',
        a: 'GPT-5.5, Claude Opus 4.8, Gemini 3.5 Pro는 JPEG, PNG, GIF, WebP를 허용합니다. 대부분은 최대 20 MB의 이미지를 지원합니다. 특정 제한은 모델마다 다릅니다. 현재 세부 사항은 OpenAI 및 Anthropic 문서를 확인하십시오.',
      },
      {
        q: '멀티모달 프롬프팅에 Ollama와 같은 로컬 모델을 사용할 수 있습니까?',
        a: '예. LLaVA 및 Ollama와 같은 모델은 로컬 이미지 분석을 지원합니다. 로컬 모델은 개인정보 보호를 제공하지만 GPT-5.5 또는 Claude Opus 4.8보다 정확도가 낮습니다. 중요하지 않은 작업이나 개인정보 보호가 필수적인 경우에 사용하십시오.',
      },
      {
        q: '텍스트-이미지 생성의 일관성을 어떻게 향상시킵니까?',
        a: '구조화된 템플릿(주제/동작/스타일/맥락/기술적)을 사용하고, 참조 이미지를 제공하며, 제약을 지정하십시오(해상도, 구도, 요소 개수). 동일한 모델로 반복하십시오 — 반복 사이에 모델을 전환하면 일관성 없는 결과가 나타납니다.',
      },
      {
        q: '이미지 분석 프롬프팅과 생성 프롬프팅의 차이는 무엇입니까?',
        a: '분석 프롬프트는 정보 범위를 지정합니다("날짜와 청구서 번호만 추출하십시오"). 생성 프롬프트는 모든 시각적 요소를 명확하게 설명해야 합니다(주제, 동작, 스타일, 맥락, 기술적 세부 사항). 생성은 모델이 인식하는 대신 상상하기 때문에 더 많은 정확성이 요구됩니다.',
      },
    ],
  },

  relatedReading: {
    title: '관련 자료',
    items: [
      '[프롬프트 엔지니어링이란 무엇입니까?](/ko/prompt-engineering/what-is-prompt-engineering) — 모든 프롬프팅의 기본 개념',
      '[모든 프롬프트에 필요한 5가지 구성 요소](/ko/prompt-engineering/5-building-blocks-every-prompt-needs) — 멀티모달을 포함한 모든 프롬프트에 구조가 적용되는 방법',
      '[Chain-of-Thought 프롬프팅](/ko/prompt-engineering/chain-of-thought-prompting) — 복잡한 작업을 위해 이미지 프롬프팅과 결합하는 추론 패턴',
    ],
  },

  sources: {
    title: '출처 및 추가 자료',
    items: [
      '[OpenAI Vision API Documentation](https://platform.openai.com/docs/guides/vision)',
      '[Anthropic Claude Vision Documentation](https://docs.anthropic.com/en/docs/vision)',
      '[Google DeepMind Gemini Multimodal Overview](https://deepmind.google/technologies/gemini/)',
    ],
  },
}
