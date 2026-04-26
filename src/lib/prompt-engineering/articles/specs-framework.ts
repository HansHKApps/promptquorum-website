// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: specs-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The SPECS Framework',
      intro: 'The SPECS Framework is a prompt structure that turns vague requests into precise specifications so that large language models produce predictable, parseable outputs. In PromptQuorum, the SPECS Framework is available as a built-in option that any user can select and apply directly in the app.',
      publishDate: '2026-03-24',
      readTime: '8 min read',

      seoTitle: 'SPECS Framework 2026: Style, Purpose, Examples',

      metaDescription: 'SPECS: Style, Purpose, Examples, Context, Specificity. Detailed prompt structure. Guide and best practices for outputs.',

      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'The SPECS Framework',
        description: 'How the SPECS Framework (Scope, Purpose, Examples, Constraints, Steps) works, when to use it, and how PromptQuorum offers SPECS as a built-in option.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['SPECS Framework', 'Scope Purpose Examples Constraints Steps', 'prompt frameworks', 'prompt engineering', 'structured prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
          { '@type': 'Thing', name: 'Large Language Models' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4o', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
        ],
      },
      sections: {
        whatIsSPECS: {
          title: 'What the SPECS Framework Is',
          content: [
            '**The SPECS Framework is a specification-first prompt pattern that treats every prompt like a mini requirements document instead of a casual chat message.** It is designed for tasks where accuracy, structure, and repeatability matter more than open-ended creativity. SPECS works well with models such as GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, and local models, because it removes ambiguity from your instructions.',
            'SPECS is especially useful when different people or systems must run the same prompt and get consistent results. By turning the prompt into a clear specification, you make it easier to debug issues, compare model behavior, and enforce standards across your workflows.',
          ],
        },
        fiveComponents: {
          title: 'The Five SPECS Components',
          content: [
            '**A strong SPECS prompt defines all five components so that the model knows exactly what to do, why, and how to format the answer.** Each component focuses on a different part of the instruction.',
            'Typical definitions are:',
          ],
          items: [
            'Scope: What the task covers and what it explicitly does not cover.',
            'Purpose: The underlying goal or decision the output should support.',
            'Examples: One or more sample inputs and outputs to anchor the model.',
            'Constraints: Hard rules such as length limits, formats, or banned behaviors.',
            'Steps: The internal sequence the model should follow to reach the output.',
          ],
        },
        whySPECSIsUseful: {
          title: 'Why the SPECS Framework Is Useful',
          content: [
            '**The SPECS Framework is useful for analytical, operational, and integration tasks where you need machine-usable results, not just readable prose.** It reduces hidden assumptions and makes every part of the prompt explicit, which is essential for production workflows.',
            'Common benefits include:',
          ],
          items: [
            'Easier debugging, because you can adjust or test individual components of the specification.',
            'More stable outputs across models and runs, thanks to constraints and examples.',
            'Better fit for downstream processing, since the structure is known in advance.',
          ],
        },
        badVsGoodExample: {
          title: 'Example: Bad vs Good SPECS Prompt',
          content: [
            '**The difference between an unstructured request and a SPECS-based request becomes obvious when you look at the same task written both ways.** Here is an example for extracting information from text.',
            '**[Bad Prompt]**',
            '"Read this customer email and summarize the main points."',
            '**[Good Prompt]**',
            '"Scope: Analyze a single customer support email and extract key information relevant to our support team. Ignore marketing or sales opportunities. Purpose: Produce a structured summary that can be logged in our ticketing system and used by agents to respond faster. Examples: Input: \'I tried to reset my password twice today and the link expired both times…\' Output: {\"issue_type\": \"password_reset\", \"urgency\": \"medium\", \"summary\": \"Password reset link expires before user can complete reset\"} Constraints: Output must be valid JSON with the keys `issue_type`, `urgency`, and `summary`. Do not add extra fields. `urgency` must be one of: low, medium, high. Steps: 1) Identify the main issue, 2) infer urgency based on impact and frustration, 3) write a concise summary under 25 words."',
            'The SPECS version defines exactly what the model should output, how it should think, and how the result will be used.',
          ],
        },
        whenToUse: {
          title: 'When to Use the SPECS Framework',
          content: [
            '**You should use the SPECS Framework when your primary goal is structured, reliable output rather than exploratory brainstorming.** This often includes:',
          ],
          items: [
            'Data extraction from emails, chats, or documents into fixed schemas.',
            'Code transformation, documentation generation, and refactoring with strict rules.',
            'Report generation where section headings, metrics, and formats are predefined.',
            'Any workflow where AI output feeds directly into another system or script.',
          ],
        },
        howPQImplements: {
          title: 'How PromptQuorum Implements the SPECS Framework',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that offers the SPECS Framework as one of its built-in prompt structures so users can design specification-style prompts without building them from scratch.** When you choose SPECS in PromptQuorum, the app exposes dedicated fields for Scope, Purpose, Examples, Constraints, and Steps and then assembles them into a single, well-structured instruction.',
            'Within PromptQuorum, the SPECS Framework lets you:',
          ],
          items: [
            'Capture each component in a separate field so the specification stays readable and easy to edit.',
            'Apply the same SPECS-based prompt to multiple models in parallel, making it simple to compare how different providers handle strict formats.',
            'Save and share SPECS templates for recurring workflows such as ticket summarization, report generation, or code reviews.',
          ],
        },
        usingSpecsWithOthers: {
          title: 'Using SPECS With Other Frameworks',
          content: [
            '**You should position the SPECS Framework as the backbone for structured outputs and combine it with other frameworks for complementary tasks.** A practical pattern is:',
          ],
          items: [
            'Use SPECS for anything that must produce predictable structures or feed into tools.',
            'Use creative frameworks like CRAFT for marketing and copywriting.',
            'Use reasoning-oriented frameworks such as Analyze–Plan–Execute (APE) when you want visible intermediate reasoning.',
            'Use single-step general-purpose frameworks for quick tasks that do not justify a full specification.',
          ],
        },

        howToStart: {
          title: 'How to Use the SPECS Framework',
          numberedItems: [
            '**Setting: Provide context about the environment, system, or domain.** Example: \'You are a data analyst at a healthcare company. Patient privacy is critical. All queries must comply with HIPAA.\'',
            '**Problem statement: State the specific problem you\'re solving.** Example: \'Identify which patient cohorts show low medication adherence in the last 90 days.\'',
            '**Examples: Provide 2–3 concrete examples of good output.** For analysis, show a sample output table or findings. For code generation, show working code that matches your style.',
            '**Constraints: List hard rules and preferences.** Example: \'Use only SQL (no Python). Query must run in under 5 seconds. Output must be anonymized (no patient names).\'',
            '**Style: Specify tone, language, and format preferences.** Example: \'Technical audience. Use precise terminology. Return as a markdown report.\'',
          ],
        },
      },
    },
    de: { theme: 'Frameworks', title: 'Das SPECS-Framework', intro: 'Das SPECS-Framework ist ein Spezifikations-First-Prompt-Pattern, das jede Anfrage als ein Mini-Anforderungsdokument behandelt, anstatt nur eine beliebige Chat-Nachricht zu sein. Es ist für Aufgaben konzipiert, bei denen Genauigkeit, Struktur und Wiederholbarkeit wichtiger sind als offene Kreativität. In PromptQuorum ist das SPECS-Framework als integrierte Option verfügbar, die jeder Nutzer auswählen und direkt in der App verwenden kann.', publishDate: '2026-03-24', readTime: '8 Min. Lesezeit', educationalLevel: 'Intermediate', primaryTerm: 'SPECS Prompt Framework', sections: {
  whatIsSPECS: {
    title: 'Was das SPECS-Framework ist',
    content: [
      '**Das SPECS-Framework ist ein spezifikationsorientiertes Prompt-Muster, das jede Eingabeaufforderung wie ein Mini-Anforderungsdokument behandelt statt wie eine beiläufige Chat-Nachricht.** Es ist für Aufgaben konzipiert, bei denen Genauigkeit, Struktur und Wiederholbarkeit wichtiger sind als offene Kreativität. SPECS funktioniert gut mit Modellen wie GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro und lokalen Modellen, da es Mehrdeutigkeiten in Ihren Anweisungen beseitigt.',
      'SPECS ist besonders nützlich, wenn verschiedene Personen oder Systeme die gleiche Eingabeaufforderung ausführen und konsistente Ergebnisse erhalten müssen. Durch die Umwandlung der Eingabeaufforderung in eine klare Spezifikation wird es einfacher, Probleme zu debuggen, das Verhalten von Modellen zu vergleichen und Standards in Ihren Workflows durchzusetzen.',
    ],
  },
  fiveComponents: {
    title: 'Die fünf SPECS-Komponenten',
    content: [
      '**Ein starker SPECS-Prompt definiert alle fünf Komponenten, damit das Modell genau weiß, was es tun soll, warum und wie die Antwort formatiert werden sollte.** Jede Komponente konzentriert sich auf einen anderen Teil der Anweisung.',
      'Typische Definitionen sind:',
    ],
    items: [
      'Scope: Was die Aufgabe abdeckt und was sie explizit nicht abdeckt.',
      'Purpose: Das zugrunde liegende Ziel oder die Entscheidung, die die Ausgabe unterstützen soll.',
      'Examples: Eine oder mehrere Beispiele für Ein- und Ausgaben, um das Modell zu verankern.',
      'Constraints: Harte Regeln wie Längenbeschränkungen, Formate oder untersagte Verhaltensweisen.',
      'Steps: Die interne Abfolge, die das Modell befolgen sollte, um die Ausgabe zu erreichen.',
    ],
  },
  whySPECSIsUseful: {
    title: 'Warum das SPECS-Framework nützlich ist',
    content: [
      '**Das SPECS-Framework ist nützlich für analytische, operative und Integrations-Aufgaben, bei denen Sie maschinenlesbare Ergebnisse benötigen, nicht nur lesbare Prosa.** Es reduziert versteckte Annahmen und macht jeden Teil der Eingabeaufforderung explizit, was für Produktions-Workflows wesentlich ist.',
      'Häufige Vorteile sind:',
    ],
    items: [
      'Einfacheres Debuggen, da Sie einzelne Komponenten der Spezifikation anpassen oder testen können.',
      'Stabilere Ausgaben über Modelle und Durchläufe hinweg dank Constraints und Beispiele.',
      'Bessere Eignung für nachgelagerte Verarbeitung, da die Struktur im Voraus bekannt ist.',
    ],
  },
  badVsGoodExample: {
    title: 'Beispiel: Schlechter vs. guter SPECS-Prompt',
    content: [
      '**Der Unterschied zwischen einer unstrukturierten Anfrage und einer SPECS-basierten Anfrage wird deutlich, wenn Sie dieselbe Aufgabe auf beide Arten geschrieben betrachten.** Hier ist ein Beispiel für die Extraktion von Informationen aus Text.',
      '**[Schlechter Prompt]**',
      '"Lesen Sie diese Kundenemails durch und fassen Sie die Hauptpunkte zusammen."',
      '**[Guter Prompt]**',
      '"Scope: Analysieren Sie eine einzelne Customer-Support-Email und extrahieren Sie wichtige Informationen, die für unser Support-Team relevant sind. Ignorieren Sie Marketing- oder Sales-Chancen. Purpose: Erstellen Sie eine strukturierte Zusammenfassung, die in unserem Ticket-System protokolliert und von Agenten zur schnelleren Antwort verwendet werden kann. Examples: Input: \'Ich habe heute zweimal versucht, mein Passwort zurückzusetzen, und der Link ist beide Male abgelaufen…\' Output: {\"issue_type\": \"password_reset\", \"urgency\": \"medium\", \"summary\": \"Passwort-Reset-Link läuft ab, bevor Benutzer den Reset abschließen kann\"} Constraints: Die Ausgabe muss gültiges JSON mit den Schlüsseln `issue_type`, `urgency` und `summary` sein. Fügen Sie keine zusätzlichen Felder hinzu. `urgency` muss eines der folgenden sein: low, medium, high. Steps: 1) Identifizieren Sie das Hauptproblem, 2) leiten Sie die Dringlichkeit basierend auf Auswirkung und Frustration ab, 3) schreiben Sie eine prägnante Zusammenfassung unter 25 Wörtern."',
      'Die SPECS-Version definiert genau, was das Modell ausgeben sollte, wie es denken sollte und wie das Ergebnis verwendet wird.',
    ],
  },
  whenToUse: {
    title: 'Wann sollte das SPECS-Framework verwendet werden',
    content: [
      '**Sie sollten das SPECS-Framework verwenden, wenn Ihr Hauptziel eine strukturierte, zuverlässige Ausgabe statt explorativen Brainstormings ist.** Dies umfasst häufig:',
    ],
    items: [
      'Datenextration aus Emails, Chats oder Dokumenten in feste Schemas.',
      'Code-Transformation, Dokumentationserstellung und Refactoring mit strikten Regeln.',
      'Report-Generierung, bei der Überschriften, Metriken und Formate vordefiniert sind.',
      'Jeder Workflow, bei dem KI-Ausgabe direkt in ein anderes System oder Skript fließt.',
    ],
  },
  howPQImplements: {
    title: 'Wie PromptQuorum das SPECS-Framework implementiert',
    content: [
      '**PromptQuorum ist ein Multi-Model-KI-Dispatch-Tool, das das SPECS-Framework als eine der integrierten Prompt-Strukturen bietet, damit Benutzer Spezifikations-Prompts ohne den Aufbau von Grund auf entwerfen können.** Wenn Sie das SPECS-Framework in PromptQuorum auswählen, stellt die App dedizierte Felder für Scope, Purpose, Examples, Constraints und Steps zur Verfügung und setzt sie dann in eine einzelne, gut strukturierte Anweisung zusammen.',
      'Innerhalb von PromptQuorum ermöglicht das SPECS-Framework Ihnen:',
    ],
    items: [
      'Jede Komponente in einem separaten Feld zu erfassen, damit die Spezifikation lesbar und einfach zu bearbeiten bleibt.',
      'Den gleichen SPECS-basierten Prompt auf mehrere Modelle parallel anzuwenden, um zu vergleichen, wie verschiedene Anbieter strikte Formate handhaben.',
      'SPECS-Templates für wiederkehrende Workflows wie Ticket-Zusammenfassungen, Report-Generierung oder Code-Reviews zu speichern und zu teilen.',
    ],
  },
  usingSpecsWithOthers: {
    title: 'SPECS mit anderen Frameworks kombinieren',
    content: [
      '**Sie sollten das SPECS-Framework als Rückgrat für strukturierte Ausgaben positionieren und es mit anderen Frameworks für ergänzende Aufgaben kombinieren.** Ein praktisches Muster ist:',
    ],
    items: [
      'Verwenden Sie SPECS für alles, das vorhersagbare Strukturen produzieren oder in Tools fließen muss.',
      'Verwenden Sie kreative Frameworks wie CRAFT für Marketing und Copywriting.',
      'Verwenden Sie reasoning-orientierte Frameworks wie Analyze–Plan–Execute (APE), wenn Sie sichtbare Zwischenüberlegungen möchten.',
      'Verwenden Sie einfache allgemeine Frameworks für schnelle Aufgaben, die keine vollständige Spezifikation rechtfertigen.',
    ],
  },
  howToStart: {
    title: 'Wie man das SPECS-Framework verwendet',
    numberedItems: [
      '**Setting: Stellen Sie Kontext über die Umgebung, das System oder die Domain bereit.** Beispiel: \'Sie sind ein Datenanalyst bei einem Gesundheitsunternehmen. Datenschutz ist kritisch. Alle Abfragen müssen HIPAA-konform sein.\'',
      '**Problem statement: Nennen Sie das spezifische Problem, das Sie lösen.** Beispiel: \'Identifizieren Sie, welche Patient*innengruppen in den letzten 90 Tagen eine niedrige Medikamenteneinhaltung zeigen.\'',
      '**Examples: Geben Sie 2–3 konkrete Beispiele für gute Ausgaben.** Für Analysen zeigen Sie eine Beispielausgabetabelle oder Erkenntnisse. Für Code-Generierung zeigen Sie funktionierenden Code, der Ihrem Stil entspricht.',
      '**Constraints: Nennen Sie harte Regeln und Voreinstellungen.** Beispiel: \'Verwenden Sie nur SQL (kein Python). Abfrage muss in unter 5 Sekunden laufen. Ausgabe muss anonymisiert sein (keine Patientennamen).\'',
      '**Style: Geben Sie Ton, Sprache und Format-Voreinstellungen an.** Beispiel: \'Technisches Publikum. Verwenden Sie präzise Terminologie. Geben Sie als Markdown-Report aus.\'',
    ],
  },
} },
    fr: { theme: 'Frameworks', title: "Le cadre SPECS", intro: "Le cadre SPECS est un modèle de prompt axé sur les spécifications qui traite chaque demande comme un mini-document de nécessités plutôt que comme un simple message de conversation. Il est conçu pour les tâches où la précision, la structure et la répétabilité sont plus importantes que la créativité ouverte. Dans PromptQuorum, le cadre SPECS est disponible en tant qu'option intégrée que tout utilisateur peut sélectionner et utiliser directement dans l'application.", publishDate: '2026-03-24', readTime: '8 min de lecture', educationalLevel: 'Intermediate', primaryTerm: 'SPECS Prompt Framework', sections: {
  whatIsSPECS: {
    title: "Ce qu'est le Framework SPECS",
    content: [
      "**Le Framework SPECS est un motif de prompt axé sur les spécifications qui traite chaque prompt comme un mini-document d'exigences plutôt que comme un message de chat désinvolte.** Il est conçu pour les tâches où la précision, la structure et la répétabilité importent davantage que la créativité ouverte. SPECS fonctionne bien avec des modèles tels que GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro et les modèles locaux, car il élimine l'ambiguïté de vos instructions.",
      "SPECS est particulièrement utile lorsque différentes personnes ou systèmes doivent exécuter le même prompt et obtenir des résultats cohérents. En transformant le prompt en une spécification claire, vous facilitez le débogage des problèmes, la comparaison du comportement des modèles et l'application de normes dans vos workflows.",
    ],
  },
  fiveComponents: {
    title: "Les cinq composants SPECS",
    content: [
      "**Un prompt SPECS robuste définit les cinq composants afin que le modèle sache exactement quoi faire, pourquoi et comment formater la réponse.** Chaque composant se concentre sur une partie différente de l'instruction.",
      "Les définitions typiques sont :",
    ],
    items: [
      "Scope : Ce que la tâche couvre et ce qu'elle ne couvre pas explicitement.",
      "Purpose : L'objectif sous-jacent ou la décision que la sortie doit soutenir.",
      "Examples : Un ou plusieurs exemples d'entrées et de sorties pour ancrer le modèle.",
      "Constraints : Des règles strictes telles que les limites de longueur, les formats ou les comportements interdits.",
      "Steps : La séquence interne que le modèle doit suivre pour atteindre la sortie.",
    ],
  },
  whySPECSIsUseful: {
    title: "Pourquoi le Framework SPECS est utile",
    content: [
      "**Le Framework SPECS est utile pour les tâches analytiques, opérationnelles et d'intégration où vous avez besoin de résultats exploitables par machine, pas seulement de prose lisible.** Il réduit les hypothèses cachées et rend chaque partie du prompt explicite, ce qui est essentiel pour les workflows de production.",
      "Les avantages courants incluent :",
    ],
    items: [
      "Un débogage plus facile, car vous pouvez ajuster ou tester des composants individuels de la spécification.",
      "Des sorties plus stables sur les modèles et les exécutions, grâce aux contraintes et aux exemples.",
      "Une meilleure adéquation pour le traitement en aval, car la structure est connue à l'avance.",
    ],
  },
  badVsGoodExample: {
    title: "Exemple : Mauvais vs bon prompt SPECS",
    content: [
      "**La différence entre une demande non structurée et une demande basée sur SPECS devient évidente lorsque vous regardez la même tâche écrite des deux manières.** Voici un exemple d'extraction d'informations à partir de texte.",
      "**[Mauvais Prompt]**",
      "\"Lisez cet e-mail client et résumez les points principaux.\"",
      "**[Bon Prompt]**",
      "\"Scope : Analysez un seul e-mail d'assistance client et extrayez les informations clés pertinentes pour notre équipe d'assistance. Ignorez les opportunités marketing ou commerciales. Purpose : Produisez un résumé structuré qui peut être consigné dans notre système de tickets et utilisé par les agents pour répondre plus rapidement. Examples : Input : 'J'ai tenté deux fois de réinitialiser mon mot de passe aujourd'hui et le lien a expiré les deux fois…' Output : {\"issue_type\": \"password_reset\", \"urgency\": \"medium\", \"summary\": \"Le lien de réinitialisation du mot de passe expire avant que l'utilisateur puisse terminer la réinitialisation\"} Constraints : La sortie doit être un JSON valide avec les clés `issue_type`, `urgency` et `summary`. N'ajoutez pas de champs supplémentaires. `urgency` doit être l'un des éléments suivants : low, medium, high. Steps : 1) Identifiez le problème principal, 2) déduisez l'urgence en fonction de l'impact et de la frustration, 3) écrivez un résumé concis en moins de 25 mots.\"",
      "La version SPECS définit exactement ce que le modèle doit produire, comment il doit réfléchir et comment le résultat sera utilisé.",
    ],
  },
  whenToUse: {
    title: "Quand utiliser le Framework SPECS",
    content: [
      "**Vous devez utiliser le Framework SPECS lorsque votre objectif principal est une sortie structurée et fiable plutôt qu'un brainstorming exploratoire.** Cela inclut souvent :",
    ],
    items: [
      "L'extraction de données à partir d'e-mails, de chats ou de documents dans des schémas fixes.",
      "La transformation du code, la génération de documentation et le refactoring avec des règles strictes.",
      "La génération de rapports où les en-têtes, les métriques et les formats sont prédéfinis.",
      "Tout workflow où la sortie de l'IA s'alimente directement dans un autre système ou script.",
    ],
  },
  howPQImplements: {
    title: "Comment PromptQuorum implémente le Framework SPECS",
    content: [
      "**PromptQuorum est un outil de dispatch multi-modèle IA qui propose le Framework SPECS comme l'une de ses structures de prompt intégrées afin que les utilisateurs puissent concevoir des prompts de style spécification sans les construire de zéro.** Lorsque vous choisissez SPECS dans PromptQuorum, l'application expose des champs dédiés pour Scope, Purpose, Examples, Constraints et Steps, puis les assemble dans une instruction unique et bien structurée.",
      "Dans PromptQuorum, le Framework SPECS vous permet de :",
    ],
    items: [
      "Capturer chaque composant dans un champ séparé afin que la spécification reste lisible et facile à modifier.",
      "Appliquer le même prompt basé sur SPECS à plusieurs modèles en parallèle, ce qui facilite la comparaison de la façon dont différents fournisseurs gèrent des formats stricts.",
      "Sauvegarder et partager des templates SPECS pour les workflows récurrents tels que la synthèse de tickets, la génération de rapports ou les révisions de code.",
    ],
  },
  usingSpecsWithOthers: {
    title: 'Utiliser SPECS avec d\'autres frameworks',
    content: [
      "**Vous devez positionner le Framework SPECS comme l'épine dorsale des sorties structurées et le combiner avec d'autres frameworks pour les tâches complémentaires.** Un motif pratique est :",
    ],
    items: [
      "Utilisez SPECS pour tout ce qui doit produire des structures prévisibles ou s'alimenter dans des outils.",
      "Utilisez des frameworks créatifs comme CRAFT pour le marketing et la rédaction.",
      "Utilisez des frameworks axés sur le raisonnement comme Analyze–Plan–Execute (APE) lorsque vous voulez un raisonnement intermédiaire visible.",
      "Utilisez des frameworks génériques à une seule étape pour les tâches rapides qui ne justifient pas une spécification complète.",
    ],
  },
  howToStart: {
    title: "Comment utiliser le Framework SPECS",
    numberedItems: [
      "**Setting : Fournissez un contexte sur l'environnement, le système ou le domaine.** Exemple : 'Vous êtes analyste de données dans une entreprise de santé. La confidentialité des patients est critique. Tous les requêtes doivent être conformes à la HIPAA.'",
      "**Problem statement : Énoncez le problème spécifique que vous résolvez.** Exemple : 'Identifiez les groupes de patients qui présentent une faible observance de la médication au cours des 90 derniers jours.'",
      "**Examples : Fournissez 2–3 exemples concrets de bonne sortie.** Pour les analyses, montrez un tableau de sortie ou des résultats d'exemple. Pour la génération de code, montrez du code fonctionnel qui correspond à votre style.",
      "**Constraints : Énumérez les règles strictes et les préférences.** Exemple : 'Utilisez uniquement SQL (pas de Python). La requête doit s'exécuter en moins de 5 secondes. La sortie doit être anonymisée (pas de noms de patients).'",
      "**Style : Spécifiez les préférences de ton, de langue et de format.** Exemple : 'Audience technique. Utilisez une terminologie précise. Renvoyez en tant que rapport markdown.'",
    ],
  },
} },
    ja: { theme: 'Frameworks', title: 'SPECSフレームワーク', intro: 'SPECSフレームワークは、仕様ファーストのプロンプトパターンで、すべてのプロンプトを単なるカジュアルなチャットメッセージではなく、ミニ要件ドキュメントとして扱います。精密性、構造性、再現性が開放的な創造性よりも重要なタスク向けに設計されています。PromptQuorumではSPECSフレームワークが組み込みオプションとして利用可能で、あらゆるユーザーがアプリで直接選択して使用できます。', publishDate: '2026-03-24', readTime: '8分で読める', educationalLevel: 'Intermediate', primaryTerm: 'SPECS Prompt Framework', sections: {
  whatIsSPECS: {
    title: 'SPECSフレームワークとは',
    content: [
      '**SPECSフレームワークは、すべてのプロンプトをカジュアルなチャットメッセージではなく、ミニ要件ドキュメントとして扱う仕様優先型プロンプトパターンです。** これは、オープンエンドの創造性よりも精度、構造、再現性が重要なタスク向けに設計されています。SPECSはGPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、およびローカルモデルなどのモデルで適切に機能します。これらのモデルは、命令の曖昧さを排除するためです。',
      '異なる人またはシステムが同じプロンプトを実行して一貫した結果を取得する必要がある場合、SPECSは特に有用です。プロンプトを明確な仕様に変換することで、問題のデバッグ、モデルの動作の比較、ワークフロー全体の標準の実施が容易になります。',
    ],
  },
  fiveComponents: {
    title: 'SPECS 5つのコンポーネント',
    content: [
      '**強力なSPECSプロンプトは、モデルが正確に何をすべきか、なぜそうすべきか、どのように回答をフォーマットすべきかを知るように、5つのコンポーネントをすべて定義します。** 各コンポーネントは、命令の異なる部分に焦点を当てています。',
      '典型的な定義は以下の通りです：',
    ],
    items: [
      'Scope : タスクがカバーする内容と、明示的にカバーされないもの。',
      'Purpose : 出力がサポートする基本的な目標または決定。',
      'Examples : モデルを固定するための1つ以上の入力/出力サンプル。',
      'Constraints : 長さの制限、フォーマット、禁止事項などのハード制約。',
      'Steps : 出力に到達するためにモデルが従うべき内部シーケンス。',
    ],
  },
  whySPECSIsUseful: {
    title: 'SPECSフレームワークが有用である理由',
    content: [
      '**SPECSフレームワークは、読みやすいプローズではなく、機械が利用可能な結果を必要とする分析的、操作的、および統合タスクに有用です。** これは隠された仮定を減らし、プロンプトのすべての部分を明示的にします。これは本番ワークフローに不可欠です。',
      '一般的なメリットには以下が含まれます：',
    ],
    items: [
      '仕様の個々のコンポーネントを調整またはテストできるため、デバッグが簡単。',
      '制約と例により、モデルと実行全体でより安定した出力。',
      'ダウンストリーム処理に適しており、構造が事前にわかっています。',
    ],
  },
  badVsGoodExample: {
    title: '例：悪いSPECSプロンプト対良いSPECSプロンプト',
    content: [
      '**構造化されていない要求とSPECSベースの要求の違いは、同じタスクを両方の方法で記述されたものを見ると明らかになります。** テキストから情報を抽出する例を以下に示します。',
      '**[悪いプロンプト]**',
      '"このカスタマー メールを読んで、要点をまとめてください。"',
      '**[良いプロンプト]**',
      '"Scope : 単一のカスタマー サポート メールを分析し、サポート チームに関連する主要な情報を抽出します。マーケティングまたは営業の機会は無視してください。Purpose : チケット システムに記録し、エージェントがより迅速に対応するために使用できる構造化された概要を作成します。Examples : Input : \'本日2回パスワードをリセットしようとしましたが、両方ともリンクが期限切れになってしまいました…\' Output : {\"issue_type\": \"password_reset\", \"urgency\": \"medium\", \"summary\": \"パスワード リセット リンクはユーザーがリセットを完了する前に期限切れになります\"} Constraints : 出力は `issue_type`、`urgency`、`summary` のキーを持つ有効な JSON である必要があります。追加のフィールドは追加しないでください。`urgency` は以下のいずれかである必要があります : low、medium、high。Steps : 1）メインの問題を特定する、2）影響と不満に基づいて緊急度を推測する、3）25語以下の簡潔な概要を作成する。"',
      'SPECSバージョンは、モデルが何を出力すべきか、どのように考えるべきか、結果がどのように使用されるかを正確に定義しています。',
    ],
  },
  whenToUse: {
    title: 'SPECSフレームワークをいつ使用するか',
    content: [
      '**探索的なブレーンストーミングではなく、構造化された信頼性の高い出力が主な目標の場合は、SPECSフレームワークを使用すべきです。** これには以下が含まることが多いです：',
    ],
    items: [
      'メール、チャット、またはドキュメントから固定スキーマへのデータ抽出。',
      '厳密なルールでのコード変換、ドキュメント生成、リファクタリング。',
      'セクション見出し、メトリクス、フォーマットが事前定義されたレポート生成。',
      'AI出力が別のシステムまたはスクリプトに直接フィードされるワークフロー。',
    ],
  },
  howPQImplements: {
    title: 'PromptQuorumがSPECSフレームワークを実装する方法',
    content: [
      '**PromptQuorumはマルチモデルAIディスパッチ ツールで、SPECSフレームワークを組み込みプロンプト構造の1つとして提供しており、ユーザーは最初からそれを構築することなく、仕様スタイルのプロンプトを設計できます。** PromptQuorumでSPECSを選択すると、アプリはScope、Purpose、Examples、Constraints、およびStepsの専用フィールドを公開し、それらを単一の構造化された命令に組み立てます。',
      'PromptQuorum内では、SPECSフレームワークにより以下が可能になります：',
    ],
    items: [
      '各コンポーネントを個別のフィールドで取得して、仕様が読みやすく編集しやすい状態に保ちます。',
      'SPECS ベースの同じプロンプトを複数のモデルに並行して適用して、異なるプロバイダーが厳密なフォーマットをどのように処理するかを簡単に比較できます。',
      'チケット要約、レポート生成、コード レビューなどの繰り返しワークフロー向けのSPECSテンプレートを保存して共有します。',
    ],
  },
  usingSpecsWithOthers: {
    title: 'SPECSを他のフレームワークと組み合わせる',
    content: [
      '**SPECSフレームワークを構造化された出力のバックボーンとして配置し、補完的なタスクに他のフレームワークと組み合わせるべきです。** 実用的なパターンは以下の通りです：',
    ],
    items: [
      '予測可能な構造を生成する必要があるもの、またはツールにフィードする必要があるものはすべてSPECSを使用します。',
      'マーケティングとコピーライティングの場合は、CRAFTなどの創造的なフレームワークを使用します。',
      '可視的な中間推論が必要な場合は、Analyze–Plan–Execute（APE）などの推論指向のフレームワークを使用します。',
      '完全な仕様を正当化しない迅速なタスクには、シングルステップの汎用フレームワークを使用します。',
    ],
  },
  howToStart: {
    title: 'SPECSフレームワークの使用方法',
    numberedItems: [
      '**Setting : 環境、システム、またはドメインに関するコンテキストを提供します。** 例 : \'あなたはヘルスケア企業のデータアナリストです。患者のプライバシーは重要です。すべてのクエリはHIPAAに準拠する必要があります。\'',
      '**Problem statement : 解決している特定の問題を述べます。** 例 : \'過去90日間にメディケーション順応が低い患者集団を特定します。\'',
      '**Examples : 適切な出力の2～3つの具体的な例を提供します。** 分析の場合は、サンプル出力テーブルまたは検出結果を表示します。コード生成の場合は、スタイルに合わせた動作コードを表示します。',
      '**Constraints : ハード ルールと設定を列挙します。** 例 : \'SQLのみを使用してください（Pythonなし）。クエリは5秒以内に実行される必要があります。出力は匿名化される必要があります（患者名なし）。\'',
      '**Style : トーン、言語、フォーマットの設定を指定します。** 例 : \'技術的な視聴者。正確な用語を使用してください。マークダウン レポートとして返却してください。\'',
    ],
  },
} },
    zh: { theme: 'Frameworks', title: 'SPECS框架', intro: 'SPECS框架是一个规范优先的提示模式，将每个请求视为一份迷你需求文档，而非随意的聊天消息。它专为需要精准性、结构性和可重复性的任务设计，而非开放式创意。在PromptQuorum中，SPECS框架作为内置选项提供，任何用户都可以选择并直接在应用中使用。', publishDate: '2026-03-24', readTime: '阅读约8分钟', educationalLevel: 'Intermediate', primaryTerm: 'SPECS Prompt Framework', sections: {
  whatIsSPECS: {
    title: 'SPECS 框架是什么',
    content: [
      '**SPECS框架是一个规范优先的提示模式，它将每个提示视为迷你需求文档，而不是随意的聊天信息。** 它专为需要精确性、结构和可重复性而不是开放式创意的任务而设计。SPECS 与 GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro 和本地模型等模型配合良好，因为它消除了指令中的歧义。',
      '当不同的人或系统需要运行相同的提示并获得一致的结果时，SPECS 特别有用。通过将提示转换为清晰的规范，您可以更轻松地调试问题、比较模型行为并在工作流中执行标准。',
    ],
  },
  fiveComponents: {
    title: 'SPECS 五大组件',
    content: [
      '**强有力的 SPECS 提示定义了所有五个组件，以便模型确切知道该做什么、为什么以及如何格式化答案。** 每个组件关注指令的不同部分。',
      '典型的定义是：',
    ],
    items: [
      'Scope（范围）：任务涵盖的内容及明确不涵盖的内容。',
      'Purpose（目的）：输出应支持的基本目标或决策。',
      'Examples（示例）：一个或多个样本输入和输出以固定模型。',
      'Constraints（约束）：硬性规则，如长度限制、格式或禁止的行为。',
      'Steps（步骤）：模型应遵循以达到输出的内部序列。',
    ],
  },
  whySPECSIsUseful: {
    title: 'SPECS 框架为什么有用',
    content: [
      '**SPECS 框架对需要机器可用结果（而不仅仅是可读散文）的分析、操作和集成任务很有用。** 它减少了隐藏的假设，并使提示的每个部分都显式化，这对生产工作流至关重要。',
      '常见的好处包括：',
    ],
    items: [
      '调试更容易，因为您可以调整或测试规范的各个组件。',
      '由于约束和示例，跨模型和运行的输出更稳定。',
      '更适合下游处理，因为结构是提前已知的。',
    ],
  },
  badVsGoodExample: {
    title: '示例：不好的 SPECS 提示与好的 SPECS 提示',
    content: [
      '**当您看到以两种方式编写的相同任务时，非结构化请求和基于 SPECS 的请求之间的区别变得明显。** 以下是从文本中提取信息的示例。',
      '**[不好的提示]**',
      '"阅读此客户电子邮件并总结要点。"',
      '**[好的提示]**',
      '"Scope：分析单个客户支持电子邮件并提取与我们支持团队相关的关键信息。忽略营销或销售机会。Purpose：生成一份结构化摘要，可以记录在我们的工单系统中，供代理人更快地做出响应。Examples：Input："我今天尝试两次重置密码，两次链接都过期了……" Output：{"issue_type":"password_reset"，"urgency":"medium"，"summary":"密码重置链接在用户完成重置前过期"}Constraints：输出必须是有效的 JSON，包含 `issue_type`、`urgency` 和 `summary` 键。不要添加额外的字段。`urgency` 必须是以下之一：low、medium、high。Steps：1）识别主要问题，2）根据影响和挫折推断紧迫性，3）写一份少于 25 个单词的简洁摘要。"',
      'SPECS 版本准确定义了模型应输出的内容、思考方式以及结果的使用方式。',
    ],
  },
  whenToUse: {
    title: '何时使用 SPECS 框架',
    content: [
      '**当您的主要目标是结构化、可靠的输出而不是探索性头脑风暴时，您应该使用 SPECS 框架。** 这通常包括：',
    ],
    items: [
      '从电子邮件、聊天或文档中提取数据到固定架构。',
      '具有严格规则的代码转换、文档生成和重构。',
      '生成部分标题、指标和格式预定义的报告。',
      '任何 AI 输出直接流入另一个系统或脚本的工作流。',
    ],
  },
  howPQImplements: {
    title: 'PromptQuorum 如何实现 SPECS 框架',
    content: [
      '**PromptQuorum 是一个多模型 AI 调度工具，它将 SPECS 框架作为其内置提示结构之一提供，以便用户无需从头开始构建即可设计规范风格的提示。** 当您在 PromptQuorum 中选择 SPECS 时，应用程序会为 Scope、Purpose、Examples、Constraints 和 Steps 公开专用字段，然后将它们组合成单一、结构化的指令。',
      '在 PromptQuorum 中，SPECS 框架允许您：',
    ],
    items: [
      '在单独的字段中捕获每个组件，以便规范保持可读且易于编辑。',
      '将相同的基于 SPECS 的提示并行应用于多个模型，轻松比较不同提供商如何处理严格格式。',
      '为工单总结、报告生成或代码评审等重复工作流保存和共享 SPECS 模板。',
    ],
  },
  usingSpecsWithOthers: {
    title: '将 SPECS 与其他框架结合使用',
    content: [
      '**您应该将 SPECS 框架定位为结构化输出的支柱，并将其与其他框架结合用于补充任务。** 一个实用的模式是：',
    ],
    items: [
      '对于任何必须产生可预测结构或流入工具的内容，使用 SPECS。',
      '对于营销和文案，使用 CRAFT 等创意框架。',
      '当您想要可见的中间推理时，使用 Analyze–Plan–Execute (APE) 等推理导向的框架。',
      '对于不需要完整规范的快速任务，使用单步通用框架。',
    ],
  },
  howToStart: {
    title: '如何使用 SPECS 框架',
    numberedItems: [
      '**Setting：提供有关环境、系统或域的上下文。** 示例："您是医疗保健公司的数据分析师。患者隐私至关重要。所有查询必须符合 HIPAA。"',
      '**Problem statement：陈述您要解决的具体问题。** 示例："确定在过去 90 天内显示药物依从性低的患者群体。"',
      '**Examples：提供 2-3 个良好输出的具体示例。** 对于分析，显示样本输出表或结果。对于代码生成，显示与您的风格相匹配的工作代码。',
      '**Constraints：列出硬规则和偏好。** 示例："仅使用 SQL（无 Python）。查询必须在 5 秒内运行。输出必须匿名（无患者姓名）。"',
      '**Style：指定音调、语言和格式偏好。** 示例："技术受众。使用精确的术语。以 markdown 报告的形式返回。"',
    ],
  },
} },
  };
