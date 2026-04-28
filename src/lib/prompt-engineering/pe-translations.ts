// PE Article Translations — German, French, Japanese, Chinese
// For: system-prompt-vs-user-prompt, ai-hallucinations-how-to-stop,
//      gpt-claude-gemini-which-model, write-better-code-with-ai
//
// Usage: Import and merge these translations into content.ts entries
// Each translation object is keyed by language code (de, fr, ja, zh)

export const systemPromptTranslations = {
  de: {
    theme: 'Grundlagen',
    title: 'System-Prompt vs. User-Prompt: Der Unterschied',
    intro: 'System-Prompts definieren, wie ein KI-Modell während einer gesamten Sitzung denkt und sich verhält; User-Prompts definieren, was es gerade tut. Lerne den Unterschied, wann du jede Art einsetzt, wie sie zusammenwirken und warum PromptQuorum dir beide zeigt.',
    publishDate: '2026-03-22',
    readTime: '8 min Lesezeit',
    sections: {
      definition: {
        title: 'System-Prompt vs. User-Prompt: Der grundlegende Unterschied',
        content: [
          '**Ein System-Prompt definiert, wie die KI während einer gesamten Sitzung denkt; ein User-Prompt definiert, was sie für diese spezifische Anfrage tut.** In einem Satz: System-Prompts sind die permanente Stellenbeschreibung der KI, und User-Prompts sind einzelne Aufgaben innerhalb dieser Rolle.',
          'Jede LLM-Konversation hat beide. Der System-Prompt (oft für Endnutzer unsichtbar) läuft einmal zu Beginn und legt die Persönlichkeit, Einschränkungen und Rolle des Modells fest. Der User-Prompt läuft pro Anfrage und spezifiziert die Aufgabe oder Frage. Beide sind Text — beide folgen Prompt-Engineering-Prinzipien — und beide erfordern sorgfältige Gestaltung für zuverlässige Ausgaben.',
        ],
      },
      tldr: {
        title: 'Wichtigste Erkenntnisse',
        isTldr: true,
        items: [
          'System-Prompts definieren die Rolle, Einschränkungen und das Verhalten des Modells für die gesamte Sitzung — einmalig gesetzt, für alle Anfragen genutzt',
          'User-Prompts definieren die spezifische Aufgabe für jede Interaktion — vom Benutzer bereitgestellt, ändern sich mit jeder Anfrage',
          'System-Prompts machen etwa 70 % der Verhaltenskonsistenz aus basierend auf PromptQuorum-Tests über GPT-5.5, Claude Opus 4.7 und Gemini 3.1 Pro; User-Prompts formen spezifische Ausgaben',
          'Unsichtbare System-Prompts in Apps wie ChatGPT und Claude enthalten versteckte Logik — [PromptQuorum zeigt dir alles](/prompt-engineering/system-prompt-vs-user-prompt)',
          'Lokale LLMs (Ollama, LM Studio) mit versteckten System-Prompts verursachen Debugging-Probleme — gelöst durch Transparenz',
          'Schlechte System-Prompts zwingen User-Prompts, härter zu arbeiten; gute System-Prompts machen jeden User-Prompt besser',
        ],
      },
      whereTheyLive: {
        title: 'Wo leben System- und User-Prompts im API-Stack?',
        content: [
          '**System-Prompts leben in der Anwendungsschicht; User-Prompts leben in der Interaktionsschicht.** Wenn du GPT-5.5 über die OpenAI-API aufrufst, akzeptiert der Endpoint zwei separate Eingaben: `system` (die persistenten Anweisungen) und `messages` (per-Anfrage-Benutzereingabe). Dasselbe gilt für Claude Opus 4.7 über die Anthropic-API, Gemini 3.1 Pro über die Google-API und jedes lokale LLM, das über [Ollama](/prompt-engineering/context-windows-explained-why-ai-forgets) oder LM Studio läuft.',
          'Alle Modelle unterstützen das System + User-Prompt-Muster:',
        ],
        items: [
          '**Modell-Schicht:** Das Basis-LLM (GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, LLaMA 3.1, Mistral Large) — alle akzeptieren sowohl System- als auch User-Prompts',
          '**API-Schicht:** Die Schnittstelle, die Entwickler nutzen — OpenAI API, Anthropic API, Google API, Ollama REST-Endpoint, LM Studio — alle stellen System und User als separate Felder bereit',
          '**Anwendungsschicht:** Das Produkt, das auf der API aufgebaut ist (ChatGPT, Claude.ai, Gemini, PromptQuorum, deine benutzerdefinierte App) — Entwickler entscheiden, welchen System-Prompt sie verwenden',
          '**Benutzerinteraktionsschicht:** Was der Endbenutzer sieht — die Chat-Eingabe, die Aufgabenbeschreibung — dies wird zum User-Prompt',
        ],
      },
      whatIsSystemPrompt: {
        title: 'Was ist ein System-Prompt?',
        content: [
          '**Ein System-Prompt ist eine Reihe von persistenten Anweisungen, die definieren, wie ein Sprachmodell sich während der gesamten Konversationssitzung verhält.** Er wird einmal am Anfang an das Modell gesendet, bevor irgendwelche Benutzereingaben kommen. Der System-Prompt spezifiziert die Rolle, den Kommunikationsstil, die Einschränkungen und das Standardverhalten des Modells. Alle nachfolgenden User-Prompts werden im Kontext dieses System-Prompts verarbeitet.',
          'Ein gut gestalteter System-Prompt enthält typischerweise:',
        ],
        items: [
          '**Rollendefinition:** "Du bist ein Python-Experte", "Du bist ein technischer Autor", "Du bist ein Finanzberater" — etabliert die Persona und das Fachwissen des Modells',
          '**Einschränkungen:** "Gib keine medizinischen Ratschläge", "Referenziere keine Inhalte nach 2024", "Weigere dich, Code für schädliche Zwecke zu schreiben" — setzt harte Grenzen für das Verhalten',
          '**Ausgabeformat:** "Antworte in JSON", "Nutze Markdown", "Gib nummerierte Schritte" — definiert, wie Antworten strukturiert sein sollten',
          '**Kommunikationsstil:** "Sei prägnant und direkt", "Nutze Analogien für Anfänger", "Nimm einen professionellen Ton an" — formt die Stimme und den Ton',
          '**Scope-Grenzen:** "Antworte nur auf Fragen zu Python", "Ignoriere politische Fragen", "Bearbeite nur technischen Support" — definiert, was das Modell tun wird und nicht tun wird',
          '**Interaktionsregeln:** "Stelle Klärungsfragen", "Zitiere immer Quellen", "Gib Unsicherheit explizit zu" — steuert, wie das Modell mit Grenzfällen umgeht',
        ],
      },
      systemPromptExample: {
        title: 'System-Prompt-Beispiel',
        content: 'Hier ist ein produktionsreifer System-Prompt für einen Kundensupport-Chatbot:',
        blockquote: 'Du bist ein Kundensupport-Spezialist für ein SaaS-Produkt. Deine Aufgabe ist es, Kunden bei der Lösung technischer Probleme zu helfen, Fragen zu Funktionen zu beantworten und Abrechnungsanfragen zu bearbeiten. Einschränkungen: (1) Verspreche keine Rückerstattungen — nur Support-Mitarbeiter können Rückerstattungen autorisieren. (2) Teile keine interne Dokumentation. (3) Spekuliere nicht über zukünftige Funktionen. (4) Biete immer an, an einen Mitarbeiter zu eskalieren, wenn das Problem nach 3 Austausch ungelöst bleibt. Stil: Sei einfühlsam, klar und lösungsorientiert. Format: Nutze nummerierte Schritte für Verfahren; Aufzählungslisten für Optionen; Markdown-Code-Blöcke für technische Beispiele. Scope: Beantworte Fragen zur API, Setup, Troubleshooting, Funktionen und Abrechnung. Weigere dich, juristische Beratung, kostenlose Upgrades oder Support außerhalb des Produktscopes zu geben.',
      },
      whatIsUserPrompt: {
        title: 'Was ist ein User-Prompt?',
        content: [
          '**Ein User-Prompt ist die per-Anfrage-Eingabe — die spezifische Aufgabe, Frage oder Anweisung, die der Endbenutzer für diese einzelne Interaktion bereitstellt.** Er wird nach dem System-Prompt an das Modell gesendet und wird im Kontext der Einschränkungen und Rollendefinition des System-Prompts evaluiert. Eine einzelne Konversation kann viele User-Prompts haben; der System-Prompt bleibt gleich.',
          'Ein User-Prompt enthält typischerweise:',
        ],
        items: [
          '**Die spezifische Aufgabe oder Frage:** "Fasse diesen Artikel zusammen", "Schreibe Produktkopie", "Debug diesen Fehler" — die konkrete Anfrage für diese Interaktion',
          '**Kontext für diese Anfrage:** "Für ein B2B-Publikum", "Für Anfänger", "Für Dokumentation" — klärt, wer und wofür dies ist',
          '**Zusätzliche Anweisungen für diese Aufgabe:** "In 200 Worten", "Mit Beispielen", "In professionellem Ton" — verfeinert die Ausgabe für diese spezifische Anfrage',
          '**Beispiele (wenn nötig):** "Hier ist ein gutes Beispiel:" — lehrt das Modell den Stil, den du möchtest',
          '**Einschränkungen für diese Aufgabe:** "Erwähne keine Preise", "Vermeide Fachjargon", "In Französisch" — limitiert, was für diese Anfrage gilt',
        ],
      },
      userPromptExample: {
        title: 'User-Prompt-Beispiel',
        content: 'Hier ist ein kompletter User-Prompt, der an den oben definierten Kundensupport-Chatbot gesendet wird:',
        blockquote: 'Ich versuche, Single Sign-On (SSO) über SAML 2.0 einzurichten, aber unsere Okta-Integration gibt immer wieder einen "signature verification failed"-Fehler zurück. Ich habe die Setup-Anleitung befolgt, die Metadaten-Datei hochgeladen, aber es funktioniert immer noch nicht. Kannst du mich durch die Troubleshooting-Schritte führen?'
      },
      comparison: {
        title: 'System-Prompt vs. User-Prompt auf einen Blick',
        tableFormat: true,
        columns: ['Dimension', 'System-Prompt', 'User-Prompt'],
        rows: [
          { 'Dimension': 'Scope', 'System-Prompt': 'Gesamte Sitzung', 'User-Prompt': 'Einzelne Anfrage' },
          { 'Dimension': 'Gesetzt von', 'System-Prompt': 'Entwickler/Produktteam', 'User-Prompt': 'Endbenutzer' },
          { 'Dimension': 'Häufigkeit', 'System-Prompt': 'Einmal am Anfang', 'User-Prompt': 'Jede Anfrage' },
          { 'Dimension': 'Definiert', 'System-Prompt': 'Rolle, Einschränkungen, Stil, Verhalten', 'User-Prompt': 'Aufgabe, Kontext, Format für diese Anfrage' },
          { 'Dimension': 'Sichtbarkeit', 'System-Prompt': 'Normalerweise verborgen vor Benutzern', 'User-Prompt': 'Immer sichtbar für Benutzer' },
          { 'Dimension': 'Änderungen', 'System-Prompt': 'Selten (App-Update erforderlich)', 'User-Prompt': 'Jede Interaktion' },
          { 'Dimension': 'Prompt-Engineering %', 'System-Prompt': 'Etwa 70 % der konsistenten Ausgabequalität', 'User-Prompt': 'Etwa 30 % der konsistenten Ausgabequalität' },
          { 'Dimension': 'Überschreibungsrisiko', 'System-Prompt': 'Schwer zu überschreiben — persistent, entwicklergesteuert', 'User-Prompt': 'Leicht zu anpassen — benutzergesteuert pro Anfrage' },
          { 'Dimension': 'Am besten für', 'System-Prompt': 'Rollenkonsistenz, Safety-Guardrails, Ausgabeformat', 'User-Prompt': 'Aufgabenspezifische Details, Kontext, Few-Shot-Beispiele' },
        ],
      },
      designingSystemPrompt: {
        title: 'Was macht einen effektiven System-Prompt aus?',
        content: [
          '**Ein System-Prompt muss spezifisch, geschichtet und constraint-fokussiert sein, um konsistentes Verhalten über alle Benutzerinteraktionen hinweg zu erzeugen.** Die besten System-Prompts sind detailliert — sie spezifizieren nicht nur, was das Modell tun sollte, sondern auch, was es ablehnen sollte, wie es Antworten formatiert und welche Einschränkungen universell gelten.',
          'Fünf Prinzipien für effektive System-Prompts:',
        ],
        items: [
          '**1. Explizite Rollendefinition:** Setze nicht voraus, dass das Modell seine Aufgabe kennt. Sag "Du bist ein [Rolle]" am Anfang. Vergleich: "Helfe beim Schreiben" (vage) vs. "Du bist ein technischer Copywriter spezialisiert auf B2B-SaaS-Produktbeschreibungen für LinkedIn-Kampagnen" (spezifisch).',
          '**2. Constraint-first-Gestaltung:** Listet auf, was das Modell NICHT tun darf, bevor du auflistest, was es tun sollte. "Erfinde keine Statistiken", "Nutze keine Übertreibung", "Schlag keine aufgelisteten Funktionen vor" — explizite Ablehnungen erzeugen konsistente Grenzen.',
          '**3. Format-Spezifikation:** Setze nicht voraus, dass das Modell die Ausgabe so formatiert, wie du es möchtest. Spezifiziere: "Nutze immer nummerierte Schritte", "Nutze Markdown-Tabellen", "Gib JSON mit diesen Feldern zurück" — explizite Format-Regeln stellen konsistente Struktur sicher.',
          '**4. Geschichtete Einschränkungen:** Stapel mehrere Einschränkungen der Priorität nach. "Weigere dich, medizinische Ratschläge zu geben (Priorität 1). Referenziere keine Informationen nach 2024 (Priorität 2). Gib Unsicherheit zu (Priorität 3)" — Schichtung verhindert Konflikte.',
          '**5. Verhaltensbeispiele:** Gib dem Modell 1–2 Beispiele guten Verhaltens. "Schlecht: \'ChatGPT ist das Beste.\' Gut: \'ChatGPT ist eine Option; andere sind Claude und Gemini.\'" — Beispiele lehren das Modell, was du möchtest.',
        ],
      },
      promptquorumDifference: {
        title: 'Warum PromptQuorum sowohl System- als auch User-Prompts zeigt',
        content: [
          '**Die meisten KI-Produkte verstecken ihre System-Prompts.** ChatGPT sagt dir nicht, was sein System-Prompt aussagt. Claude.ai stellt ihn nicht bereit. Gemini zeigt ihn nicht. Der System-Prompt ist eine Black Box — bestimmt vom Produktteam, unsichtbar für Benutzer und unmöglich zu verstehen oder zu prüfen.',
          'Das schafft drei Probleme:',
        ],
        items: [
          '**1. Du kannst Verhalten nicht prüfen oder verifizieren.** Wenn ChatGPT sich weigert, eine Frage zu beantworten, weißt du nicht, ob das eine harte Einschränkung im System-Prompt ist oder eine Limitation des Modells selbst. Du kannst nicht debuggen.',
          '**2. Du kannst Verhalten nicht über Modelle replizieren.** Wenn du einen System-Prompt-Design entdeckst, der gut für Claude Opus 4.7 funktioniert, kannst du ihn nicht zu GPT-5.5 kopieren, weil du Claudes System-Prompt nie gesehen hast. Du musst ihn reverse-engineern.',
          '**3. Du kannst konsistentes Verhalten in deiner eigenen App nicht aufbauen.** Wenn du einen Chatbot auf GPT-5.5 aufbaust, ist dein System-Prompt das EINZIGE, das du kontrollierst. Aber die meisten Entwickler verstehen die Auswirkung von System-Prompts nicht — also schreiben sie schwache und beklagen sich dann, dass das Modell "inkonsistent" oder "unzuverlässig" ist.',
        ],
      },
      promptquorum: {
        title: 'PromptQuorum: Sieh alle Prompts, vergleiche Verhalten',
        content: [
          '**PromptQuorum ist das einzige Tool, das dir den System-Prompt UND User-Prompt für jedes Modell nebeneinander zeigt.** Wenn du einen Prompt über PromptQuorum gleichzeitig an GPT-5.5, Claude Opus 4.7 und Gemini 3.1 Pro sendest, siehst du:',
        ],
        items: [
          '**Den System-Prompt des Modells** (wenn verfügbar) — welche Persönlichkeit und Einschränkungen jedem Modell gegeben wurden',
          '**Den User-Prompt, den du gesendet hast** (identisch über alle Modelle) — die exakte Eingabe, die jedes Modell verarbeitet',
          '**Die Ausgabe von jedem Modell** — damit du sehen kannst, wie unterschiedliche System-Prompts + identische User-Eingaben = unterschiedliches Verhalten',
          '**Die Begründung** — warum jedes Modell so antwortete, basierend auf seinen Einschränkungen und der Rollendefinition',
        ],
      },
      relatedReading: {
        title: 'Weiterführende Lektüre',
        items: [
          '[Was ist Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — die grundlegende Definition von Prompt Engineering',
          '[Wie man einen System-Prompt schreibt](/prompt-engineering/how-to-write-a-system-prompt) — Schritt-für-Schritt-Anleitung zur Gestaltung effektiver System-Prompts',
          '[Prompt-Engineering-Geschichte](/prompt-engineering/prompt-engineering-history) — wie Prompt Engineering sich von GPT-3 zu GPT-5.5 und Claude Opus 4.7 entwickelt hat',
        ],
      },
    },
  },
  fr: {
    theme: 'Fondamentaux',
    title: 'Prompt Système vs Prompt Utilisateur : Quelle est la Différence ?',
    intro: 'Les prompts système définissent comment un modèle IA réfléchit et se comporte pendant toute une session ; les prompts utilisateur définissent ce qu\'il fait en ce moment. Apprenez la différence, quand utiliser chacun, comment ils interagissent, et pourquoi PromptQuorum vous montre les deux.',
    publishDate: '2026-03-22',
    readTime: '8 min de lecture',
    sections: {
      definition: {
        title: 'Prompt Système vs Prompt Utilisateur : La Différence Fondamentale',
        content: [
          '**Un prompt système définit comment l\'IA réfléchit pendant toute une session ; un prompt utilisateur définit ce qu\'elle fait pour cette demande spécifique.** En une phrase : les prompts système sont la description de poste permanente de l\'IA, et les prompts utilisateur sont des tâches individuelles au sein de ce rôle.',
          'Chaque conversation LLM en a deux. Le prompt système (souvent invisible pour les utilisateurs finaux) s\'exécute une fois au début et établit la personnalité, les contraintes et le rôle du modèle. Le prompt utilisateur s\'exécute par demande et spécifie la tâche ou la question. Les deux sont du texte — tous deux suivent les principes de l\'ingénierie des prompts — et tous deux nécessitent une conception soignée pour une sortie fiable.',
        ],
      },
      tldr: {
        title: 'Points Clés à Retenir',
        isTldr: true,
        items: [
          'Les prompts système définissent le rôle, les contraintes et le comportement du modèle pour toute la session — définis une fois, utilisés pour toutes les demandes',
          'Les prompts utilisateur définissent la tâche spécifique pour chaque interaction — fournis par l\'utilisateur, changent à chaque demande',
          'Les prompts système représentent environ 70 % de la cohérence comportementale selon les tests PromptQuorum sur GPT-5.5, Claude Opus 4.7 et Gemini 3.1 Pro ; les prompts utilisateur façonnent les sorties spécifiques',
          'Les prompts système invisibles dans des applications comme ChatGPT et Claude contiennent une logique cachée — [PromptQuorum vous montre tout](/prompt-engineering/system-prompt-vs-user-prompt)',
          'Les LLM locaux (Ollama, LM Studio) avec des prompts système cachés causent des problèmes de débogage — résolus par la transparence',
          'Les mauvais prompts système forcent les prompts utilisateur à travailler plus dur ; les bons prompts système rendent chaque prompt utilisateur meilleur',
        ],
      },
      whereTheyLive: {
        title: 'Où vivent les prompts système et utilisateur dans la pile API ?',
        content: [
          '**Les prompts système vivent dans la couche application ; les prompts utilisateur vivent dans la couche interaction.** Lorsque vous appelez GPT-5.5 via l\'API OpenAI, le point de terminaison accepte deux entrées distinctes : `system` (les instructions persistantes) et `messages` (entrée utilisateur par demande). Il en va de même pour Claude Opus 4.7 via l\'API d\'Anthropic, Gemini 3.1 Pro via l\'API Google, et tout LLM local exécuté via [Ollama](/prompt-engineering/context-windows-explained-why-ai-forgets) ou LM Studio.',
          'Tous les modèles prennent en charge le modèle prompt système + utilisateur :',
        ],
        items: [
          '**Couche modèle :** Le LLM de base (GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, LLaMA 3.1, Mistral Large) — tous acceptent les prompts système et utilisateur',
          '**Couche API :** L\'interface utilisée par les développeurs — API OpenAI, API Anthropic, API Google, point de terminaison REST Ollama, LM Studio — tous exposent le système et l\'utilisateur comme des champs distincts',
          '**Couche application :** Le produit construit sur l\'API (ChatGPT, Claude.ai, Gemini, PromptQuorum, votre application personnalisée) — les développeurs décident quel prompt système utiliser',
          '**Couche interaction utilisateur :** Ce que l\'utilisateur final voit — l\'entrée de chat, la spécification de tâche — c\'est ce qui devient le prompt utilisateur',
        ],
      },
      whatIsSystemPrompt: {
        title: 'Qu\'est-ce qu\'un prompt système ?',
        content: [
          '**Un prompt système est un ensemble d\'instructions persistantes qui définissent comment un modèle de langage se comporte pendant toute la session de conversation.** Il est envoyé au modèle une fois au début, avant toute entrée utilisateur. Le prompt système spécifie le rôle, le style de communication, les contraintes et le comportement par défaut du modèle. Tous les prompts utilisateur suivants sont traités dans le contexte de ce prompt système.',
          'Un prompt système bien conçu contient généralement :',
        ],
        items: [
          '**Définition de rôle :** "Tu es un expert en Python", "Tu es un auteur technique", "Tu es un conseiller financier" — établit la personnalité et l\'expertise du modèle',
          '**Contraintes :** "Ne donne pas de conseils médicaux", "Ne référence aucun contenu après 2024", "Refuse d\'écrire du code à des fins nuisibles" — établit des limites strictes pour le comportement',
          '**Format de sortie :** "Réponds en JSON", "Utilise Markdown", "Donne des étapes numérotées" — définit comment les réponses doivent être structurées',
          '**Style de communication :** "Sois concis et direct", "Utilise des analogies pour les débutants", "Adopte un ton professionnel" — façonne la voix et le ton',
          '**Limites de portée :** "Réponds uniquement aux questions sur Python", "Ignore les questions politiques", "Traite uniquement le support technique" — définit ce que le modèle va et ne va pas faire',
          '**Règles d\'interaction :** "Pose des questions de clarification", "Cite toujours les sources", "Reconnais explicitement l\'incertitude" — contrôle comment le modèle gère les cas limites',
        ],
      },
      systemPromptExample: {
        title: 'Exemple de Prompt Système',
        content: 'Voici un prompt système prêt pour la production pour un chatbot de support client :',
        blockquote: 'Tu es un spécialiste du support client pour un produit SaaS. Ta tâche est d\'aider les clients à résoudre les problèmes techniques, répondre aux questions sur les fonctionnalités et traiter les demandes de facturation. Contraintes : (1) Ne promets pas de remboursements — seul le personnel de support peut autoriser les remboursements. (2) Ne partage pas la documentation interne. (3) Ne spécule pas sur les fonctionnalités futures. (4) Propose toujours de faire remonter à un employé si le problème reste non résolu après 3 échanges. Style : Sois empathique, clair et axé sur les solutions. Format : Utilise des étapes numérotées pour les procédures ; des listes à puces pour les options ; des blocs de code Markdown pour les exemples techniques. Portée : Réponds aux questions sur l\'API, la configuration, la résolution des problèmes, les fonctionnalités et la facturation. Refuse de donner des conseils juridiques, des mises à niveau gratuites ou du support en dehors du domaine du produit.',
      },
      whatIsUserPrompt: {
        title: 'Qu\'est-ce qu\'un prompt utilisateur ?',
        content: [
          '**Un prompt utilisateur est l\'entrée par demande — la tâche, la question ou l\'instruction spécifique que l\'utilisateur final fournit pour cette interaction unique.** Il est envoyé au modèle après le prompt système et est évalué dans le contexte des contraintes et de la définition de rôle du prompt système. Une conversation unique peut avoir de nombreux prompts utilisateur ; le prompt système reste le même.',
          'Un prompt utilisateur contient généralement :',
        ],
        items: [
          '**La tâche ou la question spécifique :** "Résume cet article", "Écris de la copie de produit", "Débogue cette erreur" — la demande concrète pour cette interaction',
          '**Contexte pour cette demande :** "Pour un public B2B", "Pour les débutants", "Pour la documentation" — clarifie qui c\'est et pour quoi',
          '**Instructions supplémentaires pour cette tâche :** "En 200 mots", "Avec des exemples", "En ton professionnel" — affine la sortie pour cette demande spécifique',
          '**Exemples (si nécessaire) :** "Voici un bon exemple :" — enseigne au modèle le style que tu veux',
          '**Contraintes pour cette tâche :** "Ne mentionne pas les prix", "Évite le jargon", "En français" — limite ce qui s\'applique pour cette demande',
        ],
      },
      userPromptExample: {
        title: 'Exemple de Prompt Utilisateur',
        content: 'Voici un prompt utilisateur complet envoyé au chatbot de support client défini ci-dessus :',
        blockquote: 'Je tente de configurer l\'authentification unique (SSO) via SAML 2.0, mais notre intégration Okta renvoie continuellement une erreur "signature verification failed". J\'ai suivi le guide de configuration, j\'ai téléchargé le fichier de métadonnées, mais cela ne fonctionne toujours pas. Peux-tu me guider à travers les étapes de dépannage ?',
      },
      comparison: {
        title: 'Prompt Système vs Prompt Utilisateur en un Coup d\'Oeil',
        tableFormat: true,
        columns: ['Dimension', 'Prompt Système', 'Prompt Utilisateur'],
        rows: [
          { 'Dimension': 'Portée', 'Prompt Système': 'Session entière', 'Prompt Utilisateur': 'Demande unique' },
          { 'Dimension': 'Défini par', 'Prompt Système': 'Développeur/équipe produit', 'Prompt Utilisateur': 'Utilisateur final' },
          { 'Dimension': 'Fréquence', 'Prompt Système': 'Une fois au début', 'Prompt Utilisateur': 'Chaque demande' },
          { 'Dimension': 'Définit', 'Prompt Système': 'Rôle, contraintes, style, comportement', 'Prompt Utilisateur': 'Tâche, contexte, format pour cette demande' },
          { 'Dimension': 'Visibilité', 'Prompt Système': 'Normalement caché aux utilisateurs', 'Prompt Utilisateur': 'Toujours visible pour l\'utilisateur' },
          { 'Dimension': 'Changements', 'Prompt Système': 'Rarement (mise à jour d\'application requise)', 'Prompt Utilisateur': 'Chaque interaction' },
          { 'Dimension': '% Ingénierie des Prompts', 'Prompt Système': 'Environ 70 % de la qualité de sortie cohérente', 'Prompt Utilisateur': 'Environ 30 % de la qualité de sortie cohérente' },
          { 'Dimension': 'Risque de remplacement', 'Prompt Système': 'Difficile à remplacer — persistant, contrôlé par le développeur', 'Prompt Utilisateur': 'Facile à ajuster — contrôlé par l\'utilisateur par demande' },
          { 'Dimension': 'Meilleur pour', 'Prompt Système': 'Cohérence de rôle, garde-fous de sécurité, format de sortie', 'Prompt Utilisateur': 'Détails spécifiques à la tâche, contexte, exemples few-shot' },
        ],
      },
      designingSystemPrompt: {
        title: 'Qu\'est-ce qui rend un prompt système efficace ?',
        content: [
          '**Un prompt système doit être spécifique, en couches et axé sur les contraintes pour produire un comportement cohérent à travers toutes les interactions utilisateur.** Les meilleurs prompts système sont détaillés — ils ne spécifient pas seulement ce que le modèle devrait faire, mais aussi ce qu\'il devrait refuser, comment il formate les réponses et quelles contraintes s\'appliquent universellement.',
          'Cinq principes pour des prompts système efficaces :',
        ],
        items: [
          '**1. Définition de rôle explicite :** Ne suppose pas que le modèle connaît sa tâche. Dis "Tu es un [rôle]" au début. Comparaison : "Aide à écrire" (vague) vs "Tu es un rédacteur technique spécialisé dans les descriptions de produits B2B SaaS pour les campagnes LinkedIn" (spécifique).',
          '**2. Conception axée sur les contraintes :** Liste ce que le modèle ne doit PAS faire avant de lister ce qu\'il devrait faire. "N\'invente pas de statistiques", "N\'utilise pas d\'exagération", "Ne propose pas de fonctionnalités répertoriées" — les refus explicites créent des limites cohérentes.',
          '**3. Spécification de format :** Ne suppose pas que le modèle formate la sortie comme tu le souhaites. Spécifie : "Utilise toujours des étapes numérotées", "Utilise des tableaux Markdown", "Retourne du JSON avec ces champs" — les règles de format explicites assurent une structure cohérente.',
          '**4. Contraintes en couches :** Empile plusieurs contraintes par ordre de priorité. "Refuse de donner des conseils médicaux (Priorité 1). Ne référence pas d\'informations après 2024 (Priorité 2). Reconnais l\'incertitude (Priorité 3)" — la stratification évite les conflits.',
          '**5. Exemples de comportement :** Donne au modèle 1–2 exemples de bon comportement. "Mauvais : \'ChatGPT est le meilleur.\' Bon : \'ChatGPT est une option ; les autres sont Claude et Gemini.\'" — les exemples enseignent au modèle ce que tu veux.',
        ],
      },
      promptquorumDifference: {
        title: 'Pourquoi PromptQuorum montre à la fois les prompts système et utilisateur',
        content: [
          '**La plupart des produits IA cachent leurs prompts système.** ChatGPT ne te dit pas ce que dit son prompt système. Claude.ai ne le fournit pas. Gemini ne le montre pas. Le prompt système est une boîte noire — déterminé par l\'équipe produit, invisible pour les utilisateurs et impossible à comprendre ou à vérifier.',
          'Cela crée trois problèmes :',
        ],
        items: [
          '**1. Tu ne peux pas vérifier ou valider le comportement.** Si ChatGPT refuse de répondre à une question, tu ne sais pas si c\'est une contrainte stricte dans le prompt système ou une limitation du modèle lui-même. Tu ne peux pas déboguer.',
          '**2. Tu ne peux pas répliquer le comportement entre les modèles.** Si tu découvres un design de prompt système qui fonctionne bien pour Claude Opus 4.7, tu ne peux pas le copier à GPT-5.5 parce que tu n\'as jamais vu le prompt système de Claude. Tu dois le rétro-ingéniérer.',
          '**3. Tu ne peux pas construire un comportement cohérent dans ta propre application.** Si tu construis un chatbot sur GPT-5.5, ton prompt système est la SEULE chose que tu contrôles. Mais la plupart des développeurs ne comprennent pas l\'impact des prompts système — alors ils écrivent des prompts faibles et se plaignent ensuite que le modèle est "incohérent" ou "peu fiable".',
        ],
      },
      promptquorum: {
        title: 'PromptQuorum : Vois tous les prompts, compare les comportements',
        content: [
          '**PromptQuorum est le seul outil qui te montre le prompt système ET le prompt utilisateur pour chaque modèle côte à côte.** Lorsque tu envoies un prompt via PromptQuorum simultanément à GPT-5.5, Claude Opus 4.7 et Gemini 3.1 Pro, tu vois :',
        ],
        items: [
          '**Le prompt système du modèle** (si disponible) — quelle personnalité et quelles contraintes ont été données à chaque modèle',
          '**Le prompt utilisateur que tu as envoyé** (identique sur tous les modèles) — l\'entrée exacte que chaque modèle traite',
          '**La sortie de chaque modèle** — pour que tu puisses voir comment les différents prompts système + identiques entrées utilisateur = comportement différent',
          '**Le raisonnement** — pourquoi chaque modèle a répondu comme il l\'a fait, basé sur ses contraintes et sa définition de rôle',
        ],
      },
      relatedReading: {
        title: 'Lectures Complémentaires',
        items: [
          '[Qu\'est-ce que l\'ingénierie des prompts ?](/prompt-engineering/what-is-prompt-engineering) — la définition fondamentale de l\'ingénierie des prompts',
          '[Comment écrire un prompt système](/prompt-engineering/how-to-write-a-system-prompt) — guide étape par étape pour concevoir des prompts système efficaces',
          '[Histoire de l\'ingénierie des prompts](/prompt-engineering/prompt-engineering-history) — comment l\'ingénierie des prompts a évolué de GPT-3 à GPT-5.5 et Claude Opus 4.7',
        ],
      },
    },
  },
  ja: {
    theme: '基礎知識',
    title: 'システムプロンプト vs ユーザープロンプト：何が違うのか',
    intro: 'システムプロンプトはAIモデルがセッション全体を通じてどのように考え、行動するかを定義し、ユーザープロンプトは今何をすべきかを定義します。違いを学び、それぞれをいつ使用するか、どのように相互作用するか、そしてPromptQuorumがなぜ両方を表示するのかを理解します。',
    publishDate: '2026-03-22',
    readTime: '8分読了',
    sections: {
      definition: {
        title: 'システムプロンプト vs ユーザープロンプト：基本的な違い',
        content: [
          '**システムプロンプトはAIがセッション全体を通じてどのように考えるかを定義し、ユーザープロンプトはその特定のリクエストで何をするかを定義します。** 一言で言えば、システムプロンプトはAIの永遠の職務記述書であり、ユーザープロンプトはその役割内での個別タスクです。',
          'すべてのLLM会話には両者があります。システムプロンプト（エンドユーザーには見えないことが多い）は最初に1回実行され、モデルの個性、制約、役割を設定します。ユーザープロンプトはリクエストごとに実行され、タスクまたは質問を指定します。両者はテキストです—両者はプロンプトエンジニアリング原則に従います—そして両者は信頼できる出力のための慎重な設計が必要です。',
        ],
      },
      tldr: {
        title: '重要なポイント',
        isTldr: true,
        items: [
          'システムプロンプトはセッション全体でのモデルの役割、制約、動作を定義します—一度設定され、すべてのリクエストに使用されます',
          'ユーザープロンプトは各相互作用の特定のタスクを定義します—ユーザーが提供し、リクエストごとに変わります',
          'システムプロンプトはGPT-5.5、Claude Opus 4.7、Gemini 3.1 Proにおける動作一貫性の約70%を占めます（PromptQuorumテストに基づく）；ユーザープロンプトは特定の出力を形成します',
          'ChatGPTやClaudeなどのアプリの非表示システムプロンプトには隠れたロジックが含まれています—[PromptQuorumはすべてを表示します](/prompt-engineering/system-prompt-vs-user-prompt)',
          'Ollama、LM Studioなどのローカルモデルは非表示のシステムプロンプトでデバッグ問題を引き起こします—透明性で解決',
          '悪いシステムプロンプトはユーザープロンプトをより努力させます；良いシステムプロンプトはすべてのユーザープロンプトをより良くします',
        ],
      },
      whereTheyLive: {
        title: 'システムプロンプトとユーザープロンプトはAPIスタックのどこに存在するか',
        content: [
          '**システムプロンプトはアプリケーション層に存在し、ユーザープロンプトはインタラクション層に存在します。** OpenAI APIを通じてGPT-5.5を呼び出すと、エンドポイントは2つの別の入力を受け入れます：`system`（永続的な指示）と`messages`（リクエストごとのユーザー入力）。これはAnthropic APIを通じたClaude Opus 4.7、Google APIを通じたGemini 3.1 Pro、[Ollama](/prompt-engineering/context-windows-explained-why-ai-forgets)またはLM Studioで実行されるローカルLLMでも同じです。',
          'すべてのモデルはシステム+ユーザープロンプトパターンをサポートしています：',
        ],
        items: [
          '**モデル層：** ベースLLM（GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro、LLaMA 3.1、Mistral Large）—すべてシステムとユーザープロンプトを受け入れます',
          '**API層：** 開発者が使用するインターフェース—OpenAI API、Anthropic API、Google API、Ollama RESTエンドポイント、LM Studio—すべてシステムとユーザーを別フィールドとして公開',
          '**アプリケーション層：** API上に構築されたプロダクト（ChatGPT、Claude.ai、Gemini、PromptQuorum、カスタムアプリ）—開発者が使用するシステムプロンプトを決定',
          '**ユーザーインタラクション層：** エンドユーザーが見るもの—チャット入力、タスク仕様—これがユーザープロンプトになります',
        ],
      },
      whatIsSystemPrompt: {
        title: 'システムプロンプトとは何か',
        content: [
          '**システムプロンプトは、言語モデルが会話セッション全体を通じてどのように動作するかを定義する一連の永続的な指示です。** これはユーザー入力の前に最初に一度だけモデルに送信されます。システムプロンプトは、モデルの役割、コミュニケーションスタイル、制約、デフォルト動作を指定します。その後のすべてのユーザープロンプトは、このシステムプロンプトのコンテキスト内で処理されます。',
          'よく設計されたシステムプロンプトには通常以下が含まれます：',
        ],
        items: [
          '**役割定義：** "あなたはPythonの専門家です"、"あなたはテクニカルライターです"、"あなたはファイナンシャルアドバイザーです"—モデルの個性と専門知識を確立',
          '**制約：** "医学的助言を与えない"、"2024年以降のコンテンツを参照しない"、"有害な目的のためにコードを書く必要がある"—行動の硬い境界線を設定',
          '**出力形式：** "JSONで回答"、"Markdownを使用"、"番号付きステップを提供"—応答がどのように構造化されるべきかを定義',
          '**コミュニケーションスタイル：** "簡潔で直接的"、"初心者向けのアナロジーを使用"、"プロフェッショナルなトーンを採用"—声とトーンを形成',
          '**スコープ境界：** "Pythonに関する質問にのみ回答"、"政治的質問を無視"、"技術サポートのみ処理"—モデルが行うこと、行わないことを定義',
          '**相互作用ルール：** "明確化に関する質問をする"、"常にソースを引用"、"明示的に不確実性を認める"—モデルがエッジケースをどのように処理するかを制御',
        ],
      },
      systemPromptExample: {
        title: 'システムプロンプトの例',
        content: 'カスタマーサポートチャットボット用のプロダクションレディーなシステムプロンプトは以下の通りです：',
        blockquote: 'あなたはSaaSプロダクトのカスタマーサポートスペシャリストです。あなたの仕事は、顧客が技術的な問題を解決する際に支援し、機能に関する質問に答え、請求リクエストを処理することです。制約：(1)払い戻しを約束しない—サポートスタッフのみが払い戻しを認可できます。(2)内部ドキュメントを共有しない。(3)将来の機能について推測しない。(4)問題が3回のやり取り後に未解決の場合は、常にスタッフへのエスカレーションを提案。スタイル：同情的で、明確で、ソリューション指向。形式：手順には番号付きステップを使用；オプションには箇条書きを使用；技術的な例にはMarkdownコードブロックを使用。スコープ：API、セットアップ、トラブルシューティング、機能、課金に関する質問に答える。法的助言、無料アップグレード、またはプロダクトスコープ外のサポートを提供することを拒否。',
      },
      whatIsUserPrompt: {
        title: 'ユーザープロンプトとは何か',
        content: [
          '**ユーザープロンプトはリクエストごとの入力です—その特定の相互作用のためにエンドユーザーが提供する特定のタスク、質問、または指示。** これはシステムプロンプトの後にモデルに送信され、システムプロンプトの制約と役割定義のコンテキスト内で評価されます。1つの会話は多くのユーザープロンプトを持つことができます；システムプロンプトは同じままです。',
          'ユーザープロンプトは通常以下を含みます：',
        ],
        items: [
          '**特定のタスクまたは質問：** "この記事を要約"、"プロダクトコピーを書く"、"このエラーをデバッグ"—この相互作用の具体的なリクエスト',
          '**このリクエストのコンテキスト：** "B2Bオーディエンス向け"、"初心者向け"、"ドキュメント用"—これが誰でどのような目的かを明確化',
          '**このタスクの追加指示：** "200語で"、"例を含めて"、"プロフェッショナルなトーンで"—この特定のリクエストの出力を調整',
          '**例（必要な場合）：** "良い例はこれです："—モデルに望むスタイルを教える',
          '**このタスクの制約：** "価格を言及しない"、"ジャーゴンを避ける"、"日本語で"—このリクエストに何が適用されるかを制限',
        ],
      },
      userPromptExample: {
        title: 'ユーザープロンプトの例',
        content: '上記で定義したカスタマーサポートチャットボットに送信される完全なユーザープロンプトは以下の通りです：',
        blockquote: '私はSAML 2.0を使用してシングルサインオン（SSO）をセットアップしようとしていますが、私たちのOkta統合は継続的に「signature verification failed」エラーを返します。セットアップガイドに従い、メタデータファイルをアップロードしましたが、まだ機能しません。トラブルシューティング手順を通じてガイドしてもらえますか？',
      },
      comparison: {
        title: 'システムプロンプト vs ユーザープロンプト一目でわかる',
        tableFormat: true,
        columns: ['次元', 'システムプロンプト', 'ユーザープロンプト'],
        rows: [
          { '次元': 'スコープ', 'システムプロンプト': 'セッション全体', 'ユーザープロンプト': '単一リクエスト' },
          { '次元': '設定者', 'システムプロンプト': '開発者/プロダクトチーム', 'ユーザープロンプト': 'エンドユーザー' },
          { '次元': '頻度', 'システムプロンプト': 'セッション開始時に1回', 'ユーザープロンプト': '毎回のリクエスト' },
          { '次元': '定義するもの', 'システムプロンプト': '役割、制約、スタイル、動作', 'ユーザープロンプト': 'タスク、コンテキスト、このリクエストの形式' },
          { '次元': '可視性', 'システムプロンプト': '通常ユーザーに隠れている', 'ユーザープロンプト': '常にユーザーに見える' },
          { '次元': '変更', 'システムプロンプト': 'まれ（アプリアップデート必須）', 'ユーザープロンプト': '毎回の相互作用' },
          { '次元': 'プロンプトエンジニアリング %', 'システムプロンプト': '一貫した出力品質の約70%', 'ユーザープロンプト': '一貫した出力品質の約30%' },
          { '次元': 'オーバーライドリスク', 'システムプロンプト': 'オーバーライド困難—永続的、開発者管理', 'ユーザープロンプト': '簡単に調整可能—リクエストごとにユーザー管理' },
          { '次元': '最適なもの', 'システムプロンプト': '役割一貫性、セーフティガードレール、出力形式', 'ユーザープロンプト': 'タスク固有の詳細、コンテキスト、few-shotの例' },
        ],
      },
      designingSystemPrompt: {
        title: '効果的なシステムプロンプトとは何か',
        content: [
          '**システムプロンプトは、すべてのユーザー相互作用にわたって一貫した動作を生成するために、具体的で層状的で制約中心である必要があります。** 最良のシステムプロンプトは詳細です—モデルが何をすべきかを指定するだけでなく、何を拒否すべきか、どのように応答をフォーマットするか、どの制約が普遍的に適用されるかも指定します。',
          '効果的なシステムプロンプトの5つの原則：',
        ],
        items: [
          '**1.明確な役割定義：** モデルがそのタスクを知っていると想定しないでください。最初に「あなたは[役割]です」と言ってください。比較：「書くのを手伝ってください」（曖昧）vs「あなたはLinkedInキャンペーンのB2B SaaS製品説明を専門とするテクニカルライターです」（具体的）。',
          '**2.制約中心の設計：** リストすべきことの前に、モデルがすべきでないことをリストしてください。「統計を作り上げない」、「誇張を使わない」、「リストされた機能を提案しない」—明示的な拒否は一貫した境界を作成',
          '**3.形式仕様：** モデルが望む方法で出力をフォーマットすると想定しないでください。指定してください：「常に番号付きステップを使用」、「Markdownテーブルを使用」、「これらのフィールドを持つJSONを返す」—明示的な形式ルールは一貫した構造を確保',
          '**4.層状の制約：** 優先度順に複数の制約をスタック。「医学的助言を与えることを拒否（優先度1）。2024年以降の情報を参照しない（優先度2）。不確実性を認める（優先度3）」—層状化は競合を防止',
          '**5.動作の例：** モデルに良い動作の1～2の例を提供してください。「悪い例：\'ChatGPTは最高です。\' 良い例：\'ChatGPTはオプションです；その他はClaudeとGeminiです。\'」—例はモデルに望むものを教える',
        ],
      },
      promptquorumDifference: {
        title: 'PromptQuorumがシステムプロンプトとユーザープロンプトの両方を表示する理由',
        content: [
          '**ほとんどのAIプロダクトはシステムプロンプトを隠します。** ChatGPTは何を言っているのかを教えません。Claude.aiは提供していません。Geminiは表示しません。システムプロンプトはブラックボックスです—プロダクトチームによって決定され、ユーザーには見えず、理解または検証不可能。',
          'これは3つの問題を作成します：',
        ],
        items: [
          '**1.動作を検証または確認できません。** ChatGPTが質問に答えることを拒否する場合、それがシステムプロンプトの硬い制約なのか、モデル自体の制限なのかはわかりません。デバッグできません。',
          '**2.モデル間で動作を複製できません。** Claude Opus 4.7で機能するシステムプロンプト設計を発見した場合、ClaudeのシステムプロンプトをGPT-5.5にコピーすることはできません（見たことがないため）。リバースエンジニアリングが必要です。',
          '**3.独自のアプリで一貫した動作を構築できません。** GPT-5.5上にチャットボットを構築する場合、システムプロンプトが唯一のコントロール手段です。しかし、ほとんどの開発者はシステムプロンプトの影響を理解していません—弱いプロンプトを書き、モデルが「矛盾している」または「信頼できない」と不平を言います。',
        ],
      },
      promptquorum: {
        title: 'PromptQuorum：すべてのプロンプトを表示し、動作を比較',
        content: [
          '**PromptQuorumは、各モデルのシステムプロンプトとユーザープロンプトの両方を並べて表示する唯一のツールです。** PromptQuorumを通じてGPT-5.5、Claude Opus 4.7、Gemini 3.1 Proにプロンプトを同時に送信すると、次が表示されます：',
        ],
        items: [
          '**モデルのシステムプロンプト**（利用可能な場合）—各モデルに与えられた個性と制約',
          '**送信したユーザープロンプト**（すべてのモデルで同じ）—各モデルが処理する正確な入力',
          '**各モデルの出力**—異なるシステムプロンプト+同じユーザー入力=異なる動作を見ることができます',
          '**推論**—各モデルが制約と役割定義に基づいてなぜそのように応答したか',
        ],
      },
      relatedReading: {
        title: '関連読書',
        items: [
          '[プロンプトエンジニアリングとは何か](/prompt-engineering/what-is-prompt-engineering)—プロンプトエンジニアリングの基本定義',
          '[システムプロンプトを書く方法](/prompt-engineering/how-to-write-a-system-prompt)—効果的なシステムプロンプトを設計するステップバイステップガイド',
          '[プロンプトエンジニアリングの歴史](/prompt-engineering/prompt-engineering-history)—プロンプトエンジニアリングがGPT-3からGPT-5.5とClaude Opus 4.7へどのように進化したか',
        ],
      },
    },
  },
  zh: {
    theme: '基础',
    title: '系统提示 vs 用户提示：有什么区别',
    intro: '系统提示定义 AI 模型在整个会话中的思考和行为方式；用户提示定义它现在要做什么。学习区别、何时使用每种、它们如何交互，以及为什么 PromptQuorum 显示两者。',
    publishDate: '2026-03-22',
    readTime: '8 分钟阅读',
    sections: {
      definition: {
        title: '系统提示 vs 用户提示：核心差异',
        content: [
          '**系统提示定义 AI 在整个会话中的思考方式；用户提示定义它对该特定请求的处理方式。** 简而言之：系统提示是 AI 的永久职位描述，用户提示是该角色内的个别任务。',
          '每个 LLM 对话都有两者。系统提示（通常对最终用户不可见）在开始时运行一次，设置模型的个性、约束和角色。用户提示按请求运行，指定任务或问题。两者都是文本——两者都遵循提示工程原则——两者都需要仔细设计以获得可靠的输出。',
        ],
      },
      tldr: {
        title: '关键要点',
        isTldr: true,
        items: [
          '系统提示为整个会话定义模型的角色、约束和行为——设置一次，用于所有请求',
          '用户提示为每个交互定义特定任务——由用户提供，每个请求都会改变',
          '根据 PromptQuorum 在 GPT-5.5、Claude Opus 4.7 和 Gemini 3.1 Pro 上的测试，系统提示占行为一致性的约 70%；用户提示塑造特定输出',
          'ChatGPT 和 Claude 等应用中的隐藏系统提示包含隐藏逻辑——[PromptQuorum 向您显示所有内容](/prompt-engineering/system-prompt-vs-user-prompt)',
          '具有隐藏系统提示的本地 LLM（Ollama、LM Studio）会导致调试问题——通过透明性解决',
          '糟糕的系统提示使用户提示工作更努力；好的系统提示使每个用户提示更好',
        ],
      },
      whereTheyLive: {
        title: '系统和用户提示在 API 堆栈中的位置',
        content: [
          '**系统提示位于应用层；用户提示位于交互层。** 通过 OpenAI API 调用 GPT-5.5 时，端点接受两个独立输入：`system`（持久指令）和 `messages`（每请求用户输入）。Claude Opus 4.7 通过 Anthropic API、Gemini 3.1 Pro 通过 Google API，以及通过 [Ollama](/prompt-engineering/context-windows-explained-why-ai-forgets) 或 LM Studio 运行的任何本地 LLM 都是如此。',
          '所有模型都支持系统+用户提示模式：',
        ],
        items: [
          '**模型层：** 基础 LLM（GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro、LLaMA 3.1、Mistral Large）——所有都接受系统和用户提示',
          '**API 层：** 开发人员使用的接口——OpenAI API、Anthropic API、Google API、Ollama REST 端点、LM Studio——所有都将系统和用户公开为单独的字段',
          '**应用层：** 在 API 上构建的产品（ChatGPT、Claude.ai、Gemini、PromptQuorum、您的自定义应用）——开发人员决定使用哪个系统提示',
          '**用户交互层：** 最终用户看到的——聊天输入、任务规范——这变成了用户提示',
        ],
      },
      whatIsSystemPrompt: {
        title: '什么是系统提示',
        content: [
          '**系统提示是一组持久指令，定义语言模型在整个对话会话中的行为方式。** 它在任何用户输入之前在开始时发送到模型一次。系统提示指定模型的角色、通信风格、约束和默认行为。所有后续用户提示在该系统提示的上下文中处理。',
          '设计良好的系统提示通常包括：',
        ],
        items: [
          '**角色定义：** "你是一位 Python 专家"、"你是一位技术作家"、"你是一位财务顾问"——建立模型的个性和专业知识',
          '**约束：** "不提供医学建议"、"不引用 2024 年后的内容"、"拒绝为有害目的编写代码"——为行为设定硬边界',
          '**输出格式：** "用 JSON 回答"、"使用 Markdown"、"提供编号步骤"——定义响应应如何构造',
          '**沟通风格：** "简洁直接"、"为初学者使用类比"、"采取专业语气"——塑造语音和语调',
          '**范围边界：** "仅回答 Python 问题"、"忽略政治问题"、"仅处理技术支持"——定义模型会和不会做什么',
          '**交互规则：** "提出澄清问题"、"始终引用来源"、"明确承认不确定性"——控制模型如何处理边界情况',
        ],
      },
      systemPromptExample: {
        title: '系统提示示例',
        content: '以下是客户支持聊天机器人的生产就绪系统提示：',
        blockquote: '您是 SaaS 产品的客户支持专家。您的任务是帮助客户解决技术问题、回答有关功能的问题并处理计费请求。约束：(1) 不要承诺退款——只有支持人员可以授权退款。(2) 不要共享内部文档。(3) 不要推测未来的功能。(4) 如果问题在 3 次交流后仍未解决，请始终提议升级给员工。风格：富有同情心、清晰和面向解决方案。格式：对于程序使用编号步骤；对于选项使用项目符号列表；对于技术示例使用 Markdown 代码块。范围：回答有关 API、设置、故障排除、功能和计费的问题。拒绝提供法律建议、免费升级或产品范围外的支持。',
      },
      whatIsUserPrompt: {
        title: '什么是用户提示',
        content: [
          '**用户提示是按请求的输入——最终用户为此特定交互提供的特定任务、问题或指令。** 它在系统提示之后发送到模型，并在系统提示的约束和角色定义的上下文中进行评估。一个对话可以有许多用户提示；系统提示保持不变。',
          '用户提示通常包含：',
        ],
        items: [
          '**特定任务或问题：** "总结这篇文章"、"写产品文案"、"调试这个错误"——这个交互的具体请求',
          '**此请求的上下文：** "针对 B2B 受众"、"针对初学者"、"用于文档"——说明这是针对谁以及为什么',
          '**此任务的其他说明：** "用 200 个单词"、"带示例"、"用专业语气"——为此特定请求微调输出',
          '**示例（如果需要）：** "这是一个很好的例子："——教模型您想要的风格',
          '**此任务的约束：** "不提及价格"、"避免术语"、"用中文"——限制此请求适用的内容',
        ],
      },
      userPromptExample: {
        title: '用户提示示例',
        content: '以下是发送给上面定义的客户支持聊天机器人的完整用户提示：',
        blockquote: '我尝试通过 SAML 2.0 设置单点登录 (SSO)，但我们的 Okta 集成不断返回"签名验证失败"错误。我遵循了设置指南，上传了元数据文件，但仍然无法正常工作。您能否指导我完成故障排除步骤？',
      },
      comparison: {
        title: '系统提示 vs 用户提示一目了然',
        tableFormat: true,
        columns: ['维度', '系统提示', '用户提示'],
        rows: [
          { '维度': '范围', '系统提示': '整个会话', '用户提示': '单个请求' },
          { '维度': '设置者', '系统提示': '开发人员/产品团队', '用户提示': '最终用户' },
          { '维度': '频率', '系统提示': '在会话开始时一次', '用户提示': '每个请求' },
          { '维度': '定义', '系统提示': '角色、约束、风格、行为', '用户提示': '此请求的任务、上下文、格式' },
          { '维度': '可见性', '系统提示': '通常对用户隐藏', '用户提示': '始终对用户可见' },
          { '维度': '变化', '系统提示': '很少（需要应用更新）', '用户提示': '每次交互' },
          { '维度': '提示工程 %', '系统提示': '一致输出质量的约 70%', '用户提示': '一致输出质量的约 30%' },
          { '维度': '覆盖风险', '系统提示': '难以覆盖——持久的、开发人员控制的', '用户提示': '易于调整——按请求由用户控制' },
          { '维度': '最适合', '系统提示': '角色一致性、安全防护栏、输出格式', '用户提示': '任务特定的细节、上下文、少样本示例' },
        ],
      },
      designingSystemPrompt: {
        title: '什么让系统提示有效',
        content: [
          '**系统提示必须具体、分层和约束为中心，以在所有用户交互中产生一致的行为。** 最好的系统提示是详细的——它们不仅指定模型应该做什么，还指定它应该拒绝什么、如何格式化响应以及哪些约束普遍适用。',
          '有效系统提示的五个原则：',
        ],
        items: [
          '**1. 明确的角色定义：** 不要假设模型知道它的任务。在开始时说"你是[角色]"。比较："帮助写作"（模糊）vs"你是 LinkedIn 活动 B2B SaaS 产品描述的专业技术作家"（具体）。',
          '**2. 约束优先设计：** 在列出应该做的事情之前，列出模型不应该做的事情。"不要编造统计数据"、"不要使用夸张"、"不要提议列出的功能"——明确的拒绝创建一致的边界。',
          '**3. 格式规范：** 不要假设模型以您希望的方式格式化输出。指定："始终使用编号步骤"、"使用 Markdown 表"、"返回具有这些字段的 JSON"——显式格式规则确保一致的结构。',
          '**4. 分层约束：** 按优先级堆叠多个约束。"拒绝提供医学建议（优先级 1）。不要引用 2024 年后的信息（优先级 2）。承认不确定性（优先级 3）"——分层可防止冲突。',
          '**5. 行为示例：** 为模型提供 1–2 个良好行为的示例。"坏的：\'ChatGPT 是最好的。\' 好的：\'ChatGPT 是一个选项；其他的是 Claude 和 Gemini。\'\"——示例教模型您想要什么。',
        ],
      },
      promptquorumDifference: {
        title: '为什么 PromptQuorum 显示系统和用户提示',
        content: [
          '**大多数 AI 产品隐藏其系统提示。** ChatGPT 不会告诉您它的系统提示说什么。Claude.ai 不提供它。Gemini 不显示它。系统提示是一个黑匣子——由产品团队确定，对用户不可见，无法理解或验证。',
          '这造成了三个问题：',
        ],
        items: [
          '**1. 你无法验证或确认行为。** 如果 ChatGPT 拒绝回答问题，你不知道它是系统提示中的硬性约束还是模型本身的限制。你无法调试。',
          '**2. 你无法跨模型复制行为。** 如果你发现一个对 Claude Opus 4.7 有效的系统提示设计，你无法将其复制到 GPT-5.5，因为你从未看过 Claude 的系统提示。你必须对其进行逆向工程。',
          '**3. 你无法在自己的应用中构建一致的行为。** 如果你在 GPT-5.5 上构建聊天机器人，你的系统提示是你能控制的唯一东西。但大多数开发人员不理解系统提示的影响——所以他们写了弱提示，然后抱怨模型"不一致"或"不可靠"。',
        ],
      },
      promptquorum: {
        title: 'PromptQuorum：查看所有提示，比较行为',
        content: [
          '**PromptQuorum 是唯一向您并排显示每个模型的系统提示和用户提示的工具。** 当您通过 PromptQuorum 同时向 GPT-5.5、Claude Opus 4.7 和 Gemini 3.1 Pro 发送提示时，您会看到：',
        ],
        items: [
          '**模型的系统提示**（如果可用）——给每个模型的个性和约束',
          '**您发送的用户提示**（跨所有模型相同）——每个模型处理的确切输入',
          '**每个模型的输出**——这样您可以看到不同的系统提示 + 相同的用户输入 = 不同的行为',
          '**推理**——为什么每个模型根据其约束和角色定义这样回应',
        ],
      },
      relatedReading: {
        title: '相关阅读',
        items: [
          '[什么是提示工程？](/prompt-engineering/what-is-prompt-engineering)——提示工程的基本定义',
          '[如何写系统提示](/prompt-engineering/how-to-write-a-system-prompt)——设计有效系统提示的分步指南',
          '[提示工程历史](/prompt-engineering/prompt-engineering-history)——提示工程如何从 GPT-3 演变到 GPT-5.5 和 Claude Opus 4.7',
        ],
      },
    },
  },
};
