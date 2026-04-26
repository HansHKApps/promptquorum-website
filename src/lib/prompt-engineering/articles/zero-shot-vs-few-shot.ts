// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: zero-shot-vs-few-shot
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Zero-Shot vs. Few-Shot Prompting',
      intro: 'Zero shot prompting uses no examples in the prompt and relies entirely on the model\'s pre-training, while few shot prompting embeds a handful of examples so the model can imitate a desired pattern.',
      seoTitle: 'Zero-Shot vs. Few-Shot Prompting 2026: Which to Use',
      metaDescription: 'Compare zero-shot and few-shot prompting. When to use each technique. Learn context requirements, accuracy tradeoffs, and best practices for both methods.',
      publishDate: '2026-03-26',
      readTime: '6 min read',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Zero-Shot and Few-Shot Prompting',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Zero Shot vs Few Shot Prompting',
        description: 'A practical comparison of zero shot and few shot prompting, when to use each, and how PromptQuorum helps you choose the right strategy.',
        datePublished: '2026-03-26',
        dateModified: '2026-03-26',
        keywords: ['zero shot prompting', 'few shot prompting', 'prompt engineering', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      sections: {
        whatIsZeroShot: {
          title: 'What Zero Shot Prompting Is',
          content: [
            '**Zero shot prompting asks the model to solve a task using only a clear instruction and no in-prompt examples.** The model leans on its general knowledge and instruction-following capabilities learned during pre-training and alignment.',
            'Zero shot is fast to set up because you do not need to design or curate example pairs. It works well for broad tasks such as generic Q&A, simple classification, summarization, or straightforward translation where the instructions alone are usually enough.',
          ],
        },
        whatIsFewShot: {
          title: 'What Few Shot Prompting Is',
          content: [
            '**Few shot prompting adds a small number of input–output examples to the instruction so the model can infer the task pattern from concrete demonstrations.** In practice, few shot usually means between two and ten examples.',
            'These examples act like a mini training set inside the prompt, guiding how the model should interpret ambiguous tasks, specialized formats, or domain-specific language. Few shot prompting is especially helpful when you need a specific style, schema, or nuanced behavior that generic instructions do not capture.',
          ],
        },
        keyDifferences: {
          title: 'Key Differences: Zero Shot vs Few Shot',
          content: [
            '**Zero shot and few shot prompting differ mainly in setup effort, accuracy on specific tasks, and scalability across many use cases.** Both rely on the same underlying model but trade example design effort for better task alignment.',
          ],
          rows: [
            { 'Dimension': 'Examples in prompt', 'Zero Shot': 'None', 'Few Shot': '2–10+ representative examples' },
            { 'Dimension': 'Setup speed', 'Zero Shot': 'Very fast; no example curation', 'Few Shot': 'Slower; examples must be selected and maintained' },
            { 'Dimension': 'Data requirements', 'Zero Shot': 'No labeled examples needed', 'Few Shot': 'Requires at least a few labeled examples' },
            { 'Dimension': 'Accuracy on narrow tasks', 'Zero Shot': 'Often lower or more generic', 'Few Shot': 'Typically higher and more consistent on specific domains' },
            { 'Dimension': 'Scalability across tasks', 'Zero Shot': 'Highly scalable, easy to add new tasks', 'Few Shot': 'Less scalable; each task may need its own examples' },
          ],
          columns: ['Dimension', 'Zero Shot', 'Few Shot'],
        },
        whenToUseZeroShot: {
          title: 'When to Use Zero Shot',
          content: [
            '**You should use zero shot prompting when you need speed, have no labeled examples, and your task is reasonably general.** This pattern works well as a first pass or baseline.',
            'Typical zero shot scenarios:',
          ],
          items: [
            'General Q&A, simple summaries, and basic sentiment classification.',
            'Rapid experimentation when you are still discovering the task shape.',
            'New domains or languages where you lack curated examples.',
          ],
        },
        whenToUseFewShot: {
          title: 'When to Use Few Shot',
          content: [
            '**You should use few shot prompting when the task is specialized, format-sensitive, or high risk, and you can provide good examples.** In these cases, examples significantly improve reliability over pure instructions.',
            'Common few shot scenarios:',
          ],
          items: [
            'Domain-specific classification or extraction (legal, medical, finance) where precise labels and wording matter.',
            'Tasks with strict schemas, such as extracting structured JSON from messy text.',
            'Multilingual or localization tasks where a few examples per language help handle idioms and style.',
          ],
        },
        example: {
          title: 'Example: Zero Shot vs Few Shot Prompt',
          content: [
            '**The practical difference between zero shot and few shot appears clearly when you compare prompts for the same task.** Here we classify support tickets by intent.',
            '**[Bad Prompt – Unstructured]**',
            '"Look at this support ticket and tell me what it is about."',
            '**[Zero Shot Prompt]**',
            '"Classify the following support ticket into one of these categories: `billing_issue`, `login_problem`, `feature_request`, `bug_report`, or `other`. Ticket: "I tried to reset my password three times today and the link always says it expired." Output only the category name."',
            '**[Few Shot Prompt]**',
            '"Classify each support ticket into one of these categories: `billing_issue`, `login_problem`, `feature_request`, `bug_report`, or `other`. Output only the category name. Example 1: Ticket: "You charged me twice this month for the same subscription." Label: `billing_issue` Example 2: Ticket: "Whenever I click \'export report\' nothing happens, even after refreshing the page." Label: `bug_report` Example 3: Ticket: "Could you add support for exporting reports directly to Google Sheets?" Label: `feature_request` Now classify this ticket: "I tried to reset my password three times today and the link always says it expired."',
            'The few shot version shows the pattern explicitly, which usually improves classification quality for nuanced or noisy tickets.',
          ],
        },
        howPQHelps: {
          title: 'How PromptQuorum Helps You Choose',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that lets you test zero shot and few shot prompts across multiple providers in one place.** You can send the same instruction-only prompt and the same example-augmented prompt to models such as GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro side by side.',
            'Inside PromptQuorum, you can:',
          ],
          items: [
            'Start with zero shot prompts using frameworks like Single Step, RTF, or CO-STAR for quick baselines.',
            'Upgrade to few shot prompts by embedding representative examples inside frameworks like SPECS or Google\'s Prompting Guide when you need tighter control.',
            'Save both zero shot and few shot versions as templates, then compare accuracy, latency, and token costs across models over time.',
          ],
        },

        howToStart: {
          title: 'How to Choose Between Zero-Shot and Few-Shot Prompting',
          numberedItems: [
            '**For routine, straightforward tasks, start with zero-shot (no examples).** Example: \'Classify this review as positive or negative.\' If accuracy is sufficient, zero-shot is faster and cheaper.',
            '**When zero-shot performance is poor (< 80% accuracy or quality), add 2–5 few-shot examples.** Show the model 2–3 positive and 2–3 negative reviews with correct labels. Few-shot teaches by example.',
            '**For tasks with subtle distinctions or rare patterns, add 5–10 examples (few-shot+).** If your task requires detecting sarcasm, harmful bias, or domain-specific nuance, more examples help.',
            '**Choose examples that span the range of inputs you expect.** If you\'re classifying product reviews, include enthusiastic, lukewarm, and negative examples. Don\'t show only easy cases.',
            '**Measure few-shot benefit on a test set before committing to it in production.** Run the same prompt with 0 examples and 5 examples on 50 test cases. If few-shot adds 10+ percentage points of accuracy, include examples. If the gain is <5%, stick with zero-shot.',
          ],
        },
      },
    },
    de: {
  theme: 'Techniques',
  title: 'Zero-Shot vs. Few-Shot Prompting',
  intro: 'Zero-Shot Prompting stellt dem Modell kein Beispiel zur Verfügung und verlässt sich vollständig auf das Vorwissen des Modells, während Few-Shot Prompting einige Beispiele einbettet, damit das Modell ein gewünschtes Muster nachahmen kann.',
  publishDate: '2026-03-26',
  readTime: '6 min Lesezeit',
  educationalLevel: 'Intermediate',
  primaryTerm: 'Zero-Shot und Few-Shot Prompting',
  metaDescription: 'Zero-Shot vs. Few-Shot Prompting: Vergleich der beiden Techniken, Anwendungsfälle und wie PromptQuorum Ihnen bei der Wahl hilft.',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Zero-Shot vs. Few-Shot Prompting',
    description: 'Ein praktischer Vergleich von Zero-Shot und Few-Shot Prompting, wann Sie jede Technik verwenden sollten, und wie PromptQuorum Ihnen hilft, die richtige Strategie auszuwählen.',
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    keywords: ['Zero-Shot Prompting', 'Few-Shot Prompting', 'Prompt Engineering', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
  },
  sections: {
    whatIsZeroShot: {
      title: 'Was Zero-Shot Prompting ist',
      content: [
        '**Zero-Shot Prompting beauftragt das Modell, eine Aufgabe nur mit einer klaren Anweisung und ohne Beispiele zu lösen.** Das Modell verlässt sich auf sein Allgemeinwissen und seine Fähigkeiten zur Befolgung von Anweisungen, die während des Vortrainings und der Ausrichtung erlernt wurden.',
        'Zero-Shot ist schnell zu implementieren, da Sie keine Beispielpaare entwerfen oder kuratieren müssen. Es funktioniert gut für breite Aufgaben wie allgemeine Fragen und Antworten, einfache Klassifizierung, Zusammenfassung oder unkomplizierte Übersetzung, wobei die Anweisungen allein normalerweise ausreichen.',
      ],
    },
    whatIsFewShot: {
      title: 'Was Few-Shot Prompting ist',
      content: [
        '**Few-Shot Prompting fügt der Anweisung eine kleine Anzahl von Ein-/Ausgabebeispielen hinzu, damit das Modell das Aufgabenmuster aus konkreten Demonstrationen ableiten kann.** In der Praxis bedeutet Few-Shot normalerweise zwei bis zehn Beispiele.',
        'Diese Beispiele wirken wie ein Mini-Trainingsdatensatz im Prompt und leiten das Modell an, wie es mehrdeutige Aufgaben, spezialisierte Formate oder domänenspezifische Sprache interpretieren sollte. Few-Shot Prompting ist besonders hilfreich, wenn Sie einen bestimmten Stil, ein bestimmtes Schema oder ein nuanciertes Verhalten benötigen, das allgemeine Anweisungen nicht erfassen.',
      ],
    },
    keyDifferences: {
      title: 'Hauptunterschiede: Zero-Shot vs. Few-Shot',
      content: [
        '**Zero-Shot und Few-Shot Prompting unterscheiden sich hauptsächlich im Einrichtungsaufwand, der Genauigkeit bei spezifischen Aufgaben und der Skalierbarkeit über viele Anwendungsfälle hinweg.** Beide stützen sich auf dasselbe zugrunde liegende Modell, tauschen aber den Aufwand für das Beispieldesign gegen eine bessere Aufgabenausrichtung aus.',
      ],
      columns: ['Dimension', 'Zero-Shot', 'Few-Shot'],
      rows: [
        { 'Dimension': 'Beispiele im Prompt', 'Zero-Shot': 'Keine', 'Few-Shot': '2–10+ repräsentative Beispiele' },
        { 'Dimension': 'Einrichtungsgeschwindigkeit', 'Zero-Shot': 'Sehr schnell; keine Beispielkuratierung erforderlich', 'Few-Shot': 'Langsamer; Beispiele müssen ausgewählt und gepflegt werden' },
        { 'Dimension': 'Datenanforderungen', 'Zero-Shot': 'Keine beschrifteten Beispiele erforderlich', 'Few-Shot': 'Erfordert mindestens einige beschriftete Beispiele' },
        { 'Dimension': 'Genauigkeit bei engen Aufgaben', 'Zero-Shot': 'Oft niedriger oder allgemeiner', 'Few-Shot': 'Typischerweise höher und konsistenter in spezifischen Domänen' },
        { 'Dimension': 'Skalierbarkeit über Aufgaben hinweg', 'Zero-Shot': 'Hochgradig skalierbar, einfach neue Aufgaben hinzufügen', 'Few-Shot': 'Weniger skalierbar; jede Aufgabe benötigt möglicherweise ihre eigenen Beispiele' },
      ],
    },
    whenToUseZeroShot: {
      title: 'Wann man Zero-Shot verwendet',
      content: [
        '**Sie sollten Zero-Shot Prompting verwenden, wenn Sie Geschwindigkeit benötigen, keine beschrifteten Beispiele haben und Ihre Aufgabe angemessen allgemein ist.** Dieses Muster funktioniert gut als erster Durchgang oder Grundlinie.',
        'Typische Zero-Shot Szenarien:',
      ],
      items: [
        'Allgemeine Fragen und Antworten, einfache Zusammenfassungen und grundlegende Stimmungsklassifizierung.',
        'Schnelle Experimente, wenn Sie die Aufgabenform noch erforschen.',
        'Neue Domänen oder Sprachen, bei denen Ihnen kuratierte Beispiele fehlen.',
      ],
    },
    whenToUseFewShot: {
      title: 'Wann man Few-Shot verwendet',
      content: [
        '**Sie sollten Few-Shot Prompting verwenden, wenn die Aufgabe spezialisiert, format-empfindlich oder riskant ist und Sie gute Beispiele bereitstellen können.** In diesen Fällen verbessern Beispiele die Zuverlässigkeit gegenüber reinen Anweisungen erheblich.',
        'Häufige Few-Shot Szenarien:',
      ],
      items: [
        'Domänenspezifische Klassifizierung oder Extraktion (Recht, Medizin, Finanzen), bei denen präzise Beschriftungen und Formulierung wichtig sind.',
        'Aufgaben mit strikten Schemas, beispielsweise das Extrahieren von strukturiertem JSON aus ungeordnetem Text.',
        'Mehrsprachige oder Lokalisierungsaufgaben, bei denen einige Beispiele pro Sprache helfen, Redewendungen und Stil zu handhaben.',
      ],
    },
    example: {
      title: 'Beispiel: Zero-Shot vs. Few-Shot Prompt',
      content: [
        '**Der praktische Unterschied zwischen Zero-Shot und Few-Shot erscheint klar, wenn Sie Prompts für dieselbe Aufgabe vergleichen.** Hier klassifizieren wir Support-Tickets nach Absicht.',
        '**[Schlechter Prompt – Unstrukturiert]**',
        '"Schauen Sie sich dieses Support-Ticket an und sagen Sie mir, worum es geht."',
        '**[Zero-Shot Prompt]**',
        '"Klassifizieren Sie das folgende Support-Ticket in eine dieser Kategorien: `billing_issue`, `login_problem`, `feature_request`, `bug_report` oder `other`. Ticket: "Ich habe heute dreimal versucht, mein Passwort zurückzusetzen, und der Link sagt immer, dass er abgelaufen ist." Geben Sie nur den Kategorienamen aus."',
        '**[Few-Shot Prompt]**',
        '"Klassifizieren Sie jedes Support-Ticket in eine dieser Kategorien: `billing_issue`, `login_problem`, `feature_request`, `bug_report` oder `other`. Geben Sie nur den Kategorienamen aus. Beispiel 1: Ticket: "Sie haben mich diesen Monat zweimal für dasselbe Abonnement berechnet." Etikett: `billing_issue` Beispiel 2: Ticket: "Jedes Mal, wenn ich auf \'Report exportieren\' klicke, passiert nichts, auch nicht nach dem Aktualisieren der Seite." Etikett: `bug_report` Beispiel 3: Ticket: "Könnten Sie den Export von Reports direkt zu Google Sheets unterstützen?" Etikett: `feature_request` Klassifizieren Sie nun dieses Ticket: "Ich habe heute dreimal versucht, mein Passwort zurückzusetzen, und der Link sagt immer, dass er abgelaufen ist."',
        'Die Few-Shot Version zeigt das Muster explizit, was normalerweise die Klassifizierungsqualität für nuancierte oder verrauschte Tickets verbessert.',
      ],
    },
    howPQHelps: {
      title: 'Wie PromptQuorum Ihnen bei der Wahl hilft',
      content: [
        '**PromptQuorum ist ein Multi-Model-AI-Dispatch-Tool, mit dem Sie Zero-Shot- und Few-Shot-Prompts an mehreren Anbietern an einem Ort testen können.** Sie können denselben Anweisungs-Only-Prompt und denselben beispielerweiterten Prompt nebeneinander an Modelle wie GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro senden.',
        'Innerhalb von PromptQuorum können Sie:',
      ],
      items: [
        'Beginnen Sie mit Zero-Shot Prompts mit Frameworks wie Single Step, RTF oder CO-STAR für schnelle Grundlagen.',
        'Upgrade auf Few-Shot Prompts durch Einbettung repräsentativer Beispiele in Frameworks wie SPECS oder Googles Prompting Guide, wenn Sie strengere Kontrolle benötigen.',
        'Speichern Sie sowohl Zero-Shot- als auch Few-Shot-Versionen als Vorlagen und vergleichen Sie dann Genauigkeit, Latenz und Token-Kosten über verschiedene Modelle im Laufe der Zeit.',
      ],
    },
    howToStart: {
      title: 'Wie man zwischen Zero-Shot und Few-Shot Prompting wählt',
      numberedItems: [
        '**Beginnen Sie für routinemäßige, unkomplizierte Aufgaben mit Zero-Shot (keine Beispiele).** Beispiel: "Klassifizieren Sie diese Bewertung als positiv oder negativ." Wenn die Genauigkeit ausreichend ist, ist Zero-Shot schneller und billiger.',
        '**Wenn die Zero-Shot Leistung schlecht ist (< 80% Genauigkeit oder Qualität), fügen Sie 2–5 Few-Shot Beispiele hinzu.** Zeigen Sie dem Modell 2–3 positive und 2–3 negative Bewertungen mit korrekten Etiketten. Few-Shot lehrt durch Beispiele.',
        '**Für Aufgaben mit subtilen Unterscheidungen oder seltenen Mustern fügen Sie 5–10 Beispiele hinzu (Few-Shot+).** Wenn Ihre Aufgabe die Erkennung von Sarkasmus, schädlicher Voreingenommenheit oder domänenspezifischer Nuance erfordert, helfen mehr Beispiele.',
        '**Wählen Sie Beispiele aus, die die Bandbreite der Eingaben abdecken, die Sie erwarten.** Wenn Sie Produktbewertungen klassifizieren, fügen Sie enthusiastische, lauwarme und negative Beispiele ein. Zeigen Sie nicht nur einfache Fälle.',
        '**Messen Sie den Few-Shot Nutzen an einem Test-Set, bevor Sie sich in der Produktion danach entscheiden.** Führen Sie denselben Prompt mit 0 Beispielen und 5 Beispielen auf 50 Test-Fällen aus. Wenn Few-Shot 10+ Prozentpunkte Genauigkeit hinzufügt, fügen Sie Beispiele ein. Wenn der Gewinn < 5% ist, bleiben Sie bei Zero-Shot.',
      ],
    },
    zusatzfragen: {
      title: 'Häufige Fragen zu Zero-Shot vs. Few-Shot in der DACH-Region',
      faqs: [
        {
          q: 'Wie verwalten wir Few-Shot Beispiele in unternehmensweiten Workflows in Deutschland?',
          a: 'Deutsche Unternehmen sollten Few-Shot Beispiele zentral in Versionskontrollen speichern und dokumentieren. Erstellen Sie eine Beispieldatenbank mit beschrifteten Eingaben und erwarteten Ausgaben. Dies ist wichtig für Compliance (DSGVO), Reproduzierbarkeit und Team-Onboarding. PromptQuorum unterstützt Template-Speicherung über Modelle hinweg, was für großformatige Enterprise-Deployments in der DACH-Region nützlich ist.',
        },
        {
          q: 'Gibt es Datenschutz- oder Compliance-Implikationen bei der Verwendung von Few-Shot mit Kundenbeispielen?',
          a: 'Ja. Wenn Ihre Few-Shot Beispiele reale Kundendaten enthalten, unterliegen sie DSGVO-Anforderungen. Verwenden Sie anonymisierte oder synthetische Beispiele, um Datenschutzverletzungen zu vermeiden. Dokumentieren Sie, wie Beispiele erfasst, gespeichert und angewendet werden. Dies ist eine kritische Kontrollpunkt für deutsche Unternehmen und Behörden.',
        },
      ],
    },
    zusammenfassung: {
      title: 'Zusammenfassung',
      content: [
        '**Zusammengefasst:** Zero-Shot Prompting bietet Geschwindigkeit und Skalierbarkeit für breite Aufgaben. Few-Shot Prompting bietet höhere Genauigkeit und Kontrolle für spezialisierte, format-empfindliche oder riskante Aufgaben. Beginnen Sie mit Zero-Shot, und upgraden Sie auf Few-Shot, wenn die Leistung unter Ihren Zielen liegt. PromptQuorum macht das Testen und Vergleichen über Modelle hinweg einfach.',
      ],
    },
  },
},
    fr: {
  theme: 'Techniques',
  title: 'Zero-Shot vs. Few-Shot Prompting',
  intro: 'Le Zero-Shot Prompting ne fournit aucun exemple et repose entièrement sur les connaissances préexistantes du modèle, tandis que le Few-Shot Prompting intègre quelques exemples pour que le modèle puisse imiter un motif souhaité.',
  publishDate: '2026-03-26',
  readTime: '6 min de lecture',
  educationalLevel: 'Intermediate',
  primaryTerm: 'Zero-Shot et Few-Shot Prompting',
  metaDescription: 'Zero-Shot vs. Few-Shot Prompting : comparaison, cas d\'utilisation et comment PromptQuorum vous aide à choisir la bonne stratégie.',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Zero-Shot vs. Few-Shot Prompting',
    description: 'Une comparaison pratique du Zero-Shot et Few-Shot Prompting, quand utiliser chacun, et comment PromptQuorum vous aide à choisir la bonne stratégie.',
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    keywords: ['Zero-Shot Prompting', 'Few-Shot Prompting', 'ingénierie des prompts', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
  },
  sections: {
    whatIsZeroShot: {
      title: 'Qu\'est-ce que le Zero-Shot Prompting',
      content: [
        '**Le Zero-Shot Prompting demande au modèle de résoudre une tâche avec une instruction claire et aucun exemple.** Le modèle s\'appuie sur ses connaissances générales et ses capacités de suivi d\'instructions acquises lors de la pré-formation et de l\'alignement.',
        'Zero-Shot est rapide à mettre en place car vous n\'avez pas besoin de concevoir ou de curationner des paires d\'exemples. Il fonctionne bien pour les tâches générales comme les questions-réponses génériques, la classification simple, la résumé ou la traduction directe, où les instructions seules suffisent généralement.',
      ],
    },
    whatIsFewShot: {
      title: 'Qu\'est-ce que le Few-Shot Prompting',
      content: [
        '**Le Few-Shot Prompting ajoute un petit nombre d\'exemples entrée-sortie à l\'instruction pour que le modèle puisse déduire le motif de la tâche à partir de démonstrations concrètes.** En pratique, Few-Shot signifie généralement entre deux et dix exemples.',
        'Ces exemples agissent comme un mini-ensemble d\'entraînement dans le prompt, guidant la façon dont le modèle devrait interpréter les tâches ambiguës, les formats spécialisés ou le langage spécifique au domaine. Few-Shot est particulièrement utile lorsque vous avez besoin d\'un style spécifique, d\'un schéma ou d\'un comportement nuancé que les instructions génériques ne capturent pas.',
      ],
    },
    keyDifferences: {
      title: 'Principales différences : Zero-Shot vs. Few-Shot',
      content: [
        '**Le Zero-Shot et le Few-Shot Prompting diffèrent principalement par l\'effort de configuration, la précision sur les tâches spécifiques et l\'évolutivité sur plusieurs cas d\'usage.** Les deux reposent sur le même modèle sous-jacent, mais échangent l\'effort de conception d\'exemples pour un meilleur alignement des tâches.',
      ],
      columns: ['Dimension', 'Zero-Shot', 'Few-Shot'],
      rows: [
        { 'Dimension': 'Exemples dans le prompt', 'Zero-Shot': 'Aucun', 'Few-Shot': '2–10+ exemples représentatifs' },
        { 'Dimension': 'Vitesse de configuration', 'Zero-Shot': 'Très rapide; pas de curation d\'exemples', 'Few-Shot': 'Plus lent; les exemples doivent être sélectionnés et maintenus' },
        { 'Dimension': 'Exigences en matière de données', 'Zero-Shot': 'Aucun exemple étiqueté requis', 'Few-Shot': 'Nécessite au moins quelques exemples étiquetés' },
        { 'Dimension': 'Précision sur les tâches étroites', 'Zero-Shot': 'Souvent plus faible ou plus générique', 'Few-Shot': 'Généralement plus haute et plus cohérente sur les domaines spécifiques' },
        { 'Dimension': 'Évolutivité entre tâches', 'Zero-Shot': 'Hautement évolutif, facile d\'ajouter de nouvelles tâches', 'Few-Shot': 'Moins évolutif; chaque tâche peut nécessiter ses propres exemples' },
      ],
    },
    whenToUseZeroShot: {
      title: 'Quand utiliser Zero-Shot',
      content: [
        '**Vous devez utiliser le Zero-Shot Prompting lorsque vous avez besoin de rapidité, que vous n\'avez pas d\'exemples étiquetés et que votre tâche est raisonnablement générale.** Ce motif fonctionne bien comme première approche ou référence.',
        'Scénarios typiques de Zero-Shot:',
      ],
      items: [
        'Questions-réponses générales, résumés simples et classification d\'opinions de base.',
        'Expérimentation rapide lorsque vous explorez encore la forme de la tâche.',
        'Nouveaux domaines ou langues où vous n\'avez pas d\'exemples curés.',
      ],
    },
    whenToUseFewShot: {
      title: 'Quand utiliser Few-Shot',
      content: [
        '**Vous devez utiliser le Few-Shot Prompting lorsque la tâche est spécialisée, sensible au format ou à haut risque, et que vous pouvez fournir de bons exemples.** Dans ces cas, les exemples améliorent considérablement la fiabilité par rapport aux instructions pures.',
        'Scénarios courants de Few-Shot:',
      ],
      items: [
        'Classification ou extraction spécifique au domaine (juridique, médical, financier) où les étiquettes précises et la formulation comptent.',
        'Tâches avec des schémas stricts, comme l\'extraction de JSON structuré à partir de texte désordonné.',
        'Tâches multilingues ou de localisation où quelques exemples par langue aident à gérer les idiomes et le style.',
      ],
    },
    example: {
      title: 'Exemple : Prompt Zero-Shot vs. Few-Shot',
      content: [
        '**La différence pratique entre Zero-Shot et Few-Shot apparaît clairement lorsque vous comparez les prompts pour la même tâche.** Ici, nous classons les tickets d\'assistance par intention.',
        '**[Mauvais prompt – Non structuré]**',
        '"Regardez ce ticket d\'assistance et dites-moi de quoi il s\'agit."',
        '**[Prompt Zero-Shot]**',
        '"Classez le ticket d\'assistance suivant dans l\'une de ces catégories: `billing_issue`, `login_problem`, `feature_request`, `bug_report` ou `other`. Ticket: "J\'ai essayé de réinitialiser mon mot de passe trois fois aujourd\'hui et le lien dit toujours qu\'il a expiré." Sortez uniquement le nom de la catégorie."',
        '**[Prompt Few-Shot]**',
        '"Classez chaque ticket d\'assistance dans l\'une de ces catégories: `billing_issue`, `login_problem`, `feature_request`, `bug_report` ou `other`. Sortez uniquement le nom de la catégorie. Exemple 1: Ticket: "Vous m\'avez facturé deux fois ce mois-ci pour le même abonnement." Étiquette: `billing_issue` Exemple 2: Ticket: "Chaque fois que je clique sur \'exporter un rapport\', rien ne se passe, même après avoir actualisé la page." Étiquette: `bug_report` Exemple 3: Ticket: "Pourriez-vous ajouter le support pour exporter les rapports directement vers Google Sheets?" Étiquette: `feature_request` Classez maintenant ce ticket: "J\'ai essayé de réinitialiser mon mot de passe trois fois aujourd\'hui et le lien dit toujours qu\'il a expiré."',
        'La version Few-Shot montre explicitement le motif, ce qui améliore généralement la qualité de la classification pour les tickets nuancés ou bruyants.',
      ],
    },
    howPQHelps: {
      title: 'Comment PromptQuorum vous aide',
      content: [
        '**PromptQuorum est un outil de dispatch multi-modèle qui vous permet de tester les prompts Zero-Shot et Few-Shot chez plusieurs fournisseurs en un seul endroit.** Vous pouvez envoyer le même prompt basé sur les instructions et le même prompt augmenté par des exemples côte à côte aux modèles comme GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro.',
        'Dans PromptQuorum, vous pouvez:',
      ],
      items: [
        'Démarrez avec des prompts Zero-Shot utilisant des frameworks comme Single Step, RTF ou CO-STAR pour des références rapides.',
        'Passez aux prompts Few-Shot en intégrant des exemples représentatifs dans des frameworks comme SPECS ou le Prompting Guide de Google lorsque vous avez besoin d\'un contrôle plus strict.',
        'Enregistrez les versions Zero-Shot et Few-Shot comme modèles, puis comparez la précision, la latence et les coûts de tokens sur les modèles au fil du temps.',
      ],
    },
    howToStart: {
      title: 'Comment choisir entre Zero-Shot et Few-Shot',
      numberedItems: [
        '**Pour les tâches routinières et simples, commencez par Zero-Shot (aucun exemple).** Exemple: "Classez cet avis comme positif ou négatif." Si la précision est suffisante, Zero-Shot est plus rapide et moins cher.',
        '**Lorsque la performance Zero-Shot est mauvaise (< 80% de précision ou de qualité), ajoutez 2–5 exemples Few-Shot.** Montrez au modèle 2–3 avis positifs et 2–3 avis négatifs avec les bonnes étiquettes. Few-Shot enseigne par l\'exemple.',
        '**Pour les tâches avec des distinctions subtiles ou des motifs rares, ajoutez 5–10 exemples (Few-Shot+).** Si votre tâche nécessite de détecter l\'ironie, les biais nuisibles ou la nuance spécifique au domaine, plus d\'exemples aident.',
        '**Choisissez des exemples qui couvrent la plage des entrées que vous attendez.** Si vous classez les avis sur les produits, incluez des exemples enthousiastes, tièdes et négatifs. Ne montrez pas seulement les cas faciles.',
        '**Mesurez le bénéfice Few-Shot sur un ensemble de test avant de vous y engager en production.** Exécutez le même prompt avec 0 exemples et 5 exemples sur 50 cas de test. Si Few-Shot ajoute 10+ points de pourcentage de précision, incluez des exemples. Si le gain est < 5%, restez avec Zero-Shot.',
      ],
    },
    considerationsLocales: {
      title: 'Considérations pour les marchés francophones',
      content: [
        'En France, en Belgique et au Canada francophone, les équipes préfèrent souvent des workflows structurés et documentés. Lors de la mise en œuvre de Few-Shot Prompting dans des contextes professionnels francophones, documentez clairement vos stratégies d\'exemples et vos seuils de précision. Cela facilite l\'adoption et l\'audit dans les organisations régies par des réglementations strictes.',
      ],
    },
    avantagesComparatifs: {
      title: 'Avantages comparatifs et cas limites',
      content: [
        '**Avantage Zero-Shot:** Idéal pour les prototypes rapides, les nouvelles langues ou domaines, et les cas où vous n\'avez pas de données étiquetées.',
        '**Avantage Few-Shot:** Supérieur pour les tâches sensibles (classification juridique, extraction médicale), les formats stricts (JSON structuré) et les nuances multilingues.',
        '**Cas limite:** Si votre domaine est très spécialisé et que Few-Shot avec 5–10 exemples n\'améliore toujours pas la précision, envisagez le fine-tuning d\'un modèle sur des centaines d\'exemples (dépassant Few-Shot).',
      ],
    },
  },
},
    ja: {
  theme: 'Techniques',
  title: 'ゼロショット vs. フューショットプロンプティング',
  intro: 'ゼロショットプロンプティングはプロンプトに例を含めず、モデルの事前学習に完全に依存しますが、フューショットプロンプティングは複数の例を埋め込んで、モデルが望ましいパターンを模倣できるようにします。',
  publishDate: '2026-03-26',
  readTime: '6分で読める',
  educationalLevel: '中級',
  primaryTerm: 'ゼロショットおよびフューショットプロンプティング',
  metaDescription: 'ゼロショットとフューショットプロンプティングの実践的な比較。それぞれを使う時機、そしてPromptQuorumでどのように正しい戦略を選択するかを学びます。',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'ゼロショット vs. フューショットプロンプティング',
    description: 'ゼロショットとフューショットプロンプティングの実践的な比較、それぞれを使う時機、およびPromptQuorumがどのように選択を支援するかを説明しています。',
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    keywords: ['ゼロショットプロンプティング', 'フューショットプロンプティング', 'プロンプトエンジニアリング', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
  },
  sections: {
    whatIsZeroShot: {
      title: 'ゼロショットプロンプティングとは何か',
      content: [
        '**ゼロショットプロンプティングは、プロンプト内の例を使わず、明確な指示だけでモデルにタスクを解かせる手法です。** モデルは、事前学習とアラインメント中に学習した一般的な知識と指示実行能力に依存します。',
        'ゼロショットは設定が迅速です。例のペアを設計・厳選する必要がないため、汎用的なタスク（一般的なQ&A、簡単な分類、要約、素直な翻訳など）で指示だけで十分な場合に適しています。',
      ],
    },
    whatIsFewShot: {
      title: 'フューショットプロンプティングとは何か',
      content: [
        '**フューショットプロンプティングは、少数の入出力例を指示に追加して、モデルが具体的なデモンストレーションからタスクパターンを推測できるようにする手法です。** 実際には、フューショットはふつう2～10個の例を意味します。',
        'これらの例はプロンプト内のミニトレーニングセットのように機能し、モデルが曖昧なタスク・特殊な形式・ドメイン固有の言語をどのように解釈すべきかをガイドします。フューショットプロンプティングは、汎用的な指示では十分ではない特定のスタイル・スキーマ・細かい動作が必要な場合に特に有効です。',
      ],
    },
    whatIsZeroShotExplained: {
      title: 'ゼロショットの仕組み',
      content: [
        'ゼロショットでは、モデルは単純な指示だけで与えられたタスクを実行します。モデルが参考にできる例がないため、タスク説明の明確さが極めて重要です。効果的なゼロショットプロンプトは、期待される出力形式・制約・コンテキストを明示的に規定します。',
      ],
    },
    whatIsFewShotExplained: {
      title: 'フューショットの仕組み',
      content: [
        'フューショットでは、指示の後に具体的な例を提供します。モデルはこれらの例のパターンを認識し、同様のタスクに適用します。このアプローチは、データの形式・出力スタイル・専門用語がモデルの学習データに頻繁に出現しない場合に特に効果的です。',
      ],
    },
    keyDifferences: {
      title: 'キーの違い：ゼロショット vs. フューショット',
      content: [
        '**ゼロショットとフューショットプロンプティングは、主にセットアップの努力・特定タスクの精度・多くのユースケース間のスケーラビリティが異なります。** 両者は同じ基盤モデルに依存していますが、例設計の努力とより良いタスク整合性をトレードオフしています。',
      ],
      columns: ['側面', 'ゼロショット', 'フューショット'],
      rows: [
        { '側面': 'プロンプト内の例', 'ゼロショット': 'なし', 'フューショット': '2～10個以上の代表的な例' },
        { '側面': 'セットアップ速度', 'ゼロショット': '非常に高速；例の厳選が不要', 'フューショット': '遅い；例を選択・維持する必要がある' },
        { '側面': 'データ要件', 'ゼロショット': 'ラベル付き例は不要', 'フューショット': '少なくとも数個のラベル付き例が必要' },
        { '側面': '狭いタスクでの精度', 'ゼロショット': '低いか、より汎用的なことが多い', 'フューショット': '特定のドメインで通常、より高く一貫性がある' },
        { '側面': 'タスク間のスケーラビリティ', 'ゼロショット': '高いスケーラビリティ；新しいタスクの追加が容易', 'フューショット': 'スケーラビリティが低い；各タスクが独自の例を必要とすることがある' },
      ],
    },
    whenToUseZeroShot: {
      title: 'ゼロショットを使う場合',
      content: [
        '**スピードが必要で、ラベル付き例がなく、タスクがかなり一般的な場合はゼロショットプロンプティングを使うべきです。** このパターンは最初の試行やベースラインとして機能します。',
        '典型的なゼロショットの場面：',
      ],
      items: [
        '一般的なQ&A、簡単な要約、基本的なセンチメント分類。',
        'タスクの形が見えてくるまでの素早い実験。',
        'ラベル付き例がない新しいドメインや言語。',
      ],
    },
    whenToUseFewShot: {
      title: 'フューショットを使う場合',
      content: [
        '**タスクが専門的で、形式に敏感か、リスクが高く、良い例を提供できる場合、フューショットプロンプティングを使うべきです。** このような場合、例は純粋な指示よりも信頼性を大幅に向上させます。',
        '一般的なフューショット の場面：',
      ],
      items: [
        'ドメイン固有の分類・抽出（法務・医療・金融）で、正確なラベル付けと単語選択が重要。',
        'JSONの構造化抽出など、厳密なスキーマを持つタスク。',
        'マルチリンガルやローカライゼーションのタスク。言語ごとの数例が慣用句やスタイルの処理に役立つ。',
      ],
    },
    example: {
      title: '例：ゼロショット vs. フューショットプロンプト',
      content: [
        '**ゼロショットとフューショットの実践的な違いは、同じタスクのプロンプトを比較すると明らかです。** ここでは、サポートチケットを目的別に分類します。',
        '**[悪いプロンプト – 非構造的]**',
        '"このサポートチケットを見て、それが何についてであるか教えてください。"',
        '**[ゼロショットプロンプト]**',
        '"以下のサポートチケットを次のいずれかのカテゴリに分類してください：`billing_issue`、`login_problem`、`feature_request`、`bug_report`、または `other`。チケット：「今日3回パスワードをリセットしようとしましたが、リンクはいつも期限切れと言っています。」カテゴリ名だけを出力してください。"',
        '**[フューショットプロンプト]**',
        '"各サポートチケットを次のいずれかのカテゴリに分類してください：`billing_issue`、`login_problem`、`feature_request`、`bug_report`、または `other`。カテゴリ名だけを出力してください。例1：チケット：「同じサブスクリプションで今月2回請求されました。」ラベル：`billing_issue` 例2：チケット：「\'レポートをエクスポート\'をクリックしても何も起こりません。ページを更新した後でも。」ラベル：`bug_report` 例3：チケット：「Google Sheetsにレポートを直接エクスポートするサポートを追加してもらえますか？」ラベル：`feature_request` では、このチケットを分類してください：「今日3回パスワードをリセットしようとしましたが、リンクはいつも期限切れと言っています。」',
        'フューショット版は明示的にパターンを示すため、通常、ニュアンスの多いまたは雑音のあるチケットの分類品質が向上します。',
      ],
    },
    注意点: {
      title: '注意点：よくある落とし穴',
      content: [
        'ゼロショットとフューショットを選択する際に注意すべき点があります。',
      ],
      items: [
        '不適切な例を提供すると、フューショットは実際にパフォーマンスを低下させます。例の質はセットアップ時間を正当化する必要があります。',
        'ゼロショットは簡単ですが、タスク記述の曖昧さはモデルの推測を増加させ、精度を低下させます。',
        'フューショット例の数を増やしても、精度向上が必ずしも続くわけではありません。通常、2～5個の良質な例で十分です。',
        'モデルによってゼロショット vs. フューショットの反応が異なる場合があります。GPT-4oはゼロショットで堅牢ですが、Gemini 2.5 Proはいくつかのドメインでフューショットの恩恵をより受けることがあります。',
      ],
    },
    howPQHelps: {
      title: 'PromptQuorumがどのように選択を支援するか',
      content: [
        '**PromptQuorumは、複数のプロバイダー間でゼロショットとフューショットプロンプトをテストできるマルチモデルAIディスパッチツールです。** 指示のみのプロンプトと例を拡張したプロンプトの両方を、GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Proなどのモデルに並行して送信できます。',
        'PromptQuorum内では、以下を実行できます：',
      ],
      items: [
        'Single Step、RTF、CO-STARなどのフレームワークを使用して、迅速にベースラインのゼロショットプロンプトを開始。',
        'SPECSやGoogleのプロンプティングガイドなどのフレームワーク内に代表的な例を埋め込むことで、フューショットプロンプトにアップグレード。より厳密な制御が必要な場合。',
        'ゼロショット版とフューショット版の両方をテンプレートとして保存し、時間の経過とともにモデル間で精度・レイテンシー・トークンコストを比較。',
      ],
    },
    実践Tips: {
      title: '実践Tips：効果的な使用方法',
      content: [
        'ゼロショットとフューショットの効果を最大化するための実践的なアドバイスです。',
      ],
      items: [
        '最初は常にゼロショットで開始してください。セットアップが高速で、多くのシンプルなタスクで十分です。',
        'ゼロショットの精度が60～70%以下の場合は、フューショットを試してください。',
        '例を選択する際は、テストデータセットのエッジケースを代表するもの選んでください。簡単なケースだけを示すと、モデルは難しい場合に失敗します。',
        '本番環境に導入する前に、テストセット上でゼロショット対フューショットのパフォーマンス差を測定してください。',
      ],
    },
    howToStart: {
      title: 'ゼロショットとフューショットの選択方法',
      numberedItems: [
        '**日常的でシンプルなタスクの場合は、ゼロショット（例なし）で開始してください。** 例：「このレビューをポジティブまたはネガティブとして分類する」。精度が十分であれば、ゼロショットはより高速で安価です。',
        '**ゼロショットのパフォーマンスが悪い場合（精度<80％または品質が低い）、2～5個のフューショット例を追加してください。** モデルに2～3個のポジティブなレビューと2～3個のネガティブなレビューを正しいラベル付けで表示します。フューショットは例で教えます。',
        '**細かい違いや珍しいパターンを含むタスクの場合、5～10個の例（フューショット+）を追加してください。** 皮肉・有害なバイアス・ドメイン固有のニュアンスの検出が必要な場合、より多くの例が役立ちます。',
        '**期待される入力の範囲をカバーする例を選択してください。** 商品レビューを分類する場合、熱狂的・ぬるい・否定的な例を含めてください。簡単なケースだけを表示しないでください。',
        '**本番環境にコミットする前に、テストセット上でフューショットの恩恵を測定してください。** 0個の例と5個の例で同じプロンプトを50個のテストケースで実行します。フューショットが精度を10ポイント以上改善すれば、例を含めます。改善が5％未満であれば、ゼロショットを維持してください。',
      ],
    },
  },
},
    zh: {
  theme: 'Techniques',
  title: '零样本 vs. 少样本提示',
  intro: '零样本提示在提示中不使用任何示例，完全依赖模型的预训练，而少样本提示嵌入少量示例，使模型能够模仿所需的模式。',
  publishDate: '2026-03-26',
  readTime: '阅读约6分钟',
  educationalLevel: '中级',
  primaryTerm: '零样本和少样本提示',
  metaDescription: '零样本和少样本提示的实用对比。学习每种方法的适用场景，以及PromptQuorum如何帮助您选择正确的策略。',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '零样本 vs. 少样本提示',
    description: '零样本和少样本提示的实用对比，何时使用每种方法，以及PromptQuorum如何帮助您进行选择。',
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    keywords: ['零样本提示', '少样本提示', '提示工程', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
  },
  sections: {
    whatIsZeroShot: {
      title: '什么是零样本提示',
      content: [
        '**零样本提示要求模型仅使用清晰的指令完成任务，不需要提示中的示例。** 模型依赖于在预训练和对齐过程中学习的一般知识和遵循指令的能力。',
        '零样本快速易用，因为您不需要设计或精选示例对。对于广泛的任务（如通用问答、简单分类、摘要或直接翻译），仅凭指令通常足以实现良好结果。',
      ],
    },
    whatIsFewShot: {
      title: '什么是少样本提示',
      content: [
        '**少样本提示在指令中添加少量输入-输出示例，使模型能够从具体演示推断任务模式。** 实际上，少样本通常意味着 2 至 10 个示例。',
        '这些示例像提示内的迷你训练集一样工作，指导模型应如何解释模糊的任务、专门的格式或特定领域的语言。当您需要特定的风格、结构或通用指令无法表达的细微行为时，少样本提示特别有效。',
      ],
    },
    keyDifferences: {
      title: '关键差异：零样本 vs. 少样本',
      content: [
        '**零样本和少样本提示主要在设置工作量、特定任务的准确性和跨多个使用场景的可扩展性上有所不同。** 两者都依赖于相同的基础模型，但在示例设计工作和更好的任务对齐之间进行权衡。',
      ],
      columns: ['维度', '零样本', '少样本'],
      rows: [
        { '维度': '提示中的示例', '零样本': '无', '少样本': '2-10+ 个代表性示例' },
        { '维度': '设置速度', '零样本': '非常快速；不需要示例精选', '少样本': '较慢；示例必须经过选择和维护' },
        { '维度': '数据要求', '零样本': '无需标记示例', '少样本': '至少需要几个标记示例' },
        { '维度': '特定任务的准确性', '零样本': '通常较低或更通用', '少样本': '在特定领域通常更高、更一致' },
        { '维度': '任务间的可扩展性', '零样本': '高度可扩展，易于添加新任务', '少样本': '可扩展性较低；每个任务可能需要自己的示例' },
      ],
    },
    whenToUseZeroShot: {
      title: '何时使用零样本',
      content: [
        '**当您需要速度、没有标记示例且任务相当通用时，应使用零样本提示。** 此模式可用作初始尝试或基线。',
        '典型的零样本场景：',
      ],
      items: [
        '通用问答、简单摘要和基本情感分类。',
        '当您仍在探索任务性质时的快速实验。',
        '您缺乏精选示例的新领域或语言。',
      ],
    },
    whenToUseFewShot: {
      title: '何时使用少样本',
      content: [
        '**当任务专业、对格式敏感或风险较高，且您能提供优质示例时，应使用少样本提示。** 在这些情况下，示例会显著提高纯指令的可靠性。',
        '常见的少样本场景：',
      ],
      items: [
        '特定领域的分类或提取（法律、医疗、金融），其中精确的标签和措辞至关重要。',
        '具有严格结构的任务，如从杂乱文本中提取结构化 JSON。',
        '多语言或本地化任务，其中每种语言的几个示例有助于处理习语和风格。',
      ],
    },
    example: {
      title: '示例：零样本 vs. 少样本提示',
      content: [
        '**当您为同一任务比较提示时，零样本和少样本之间的实际差异变得清晰可见。** 这里我们按意图对支持工单进行分类。',
        '**[糟糕的提示 – 无结构]**',
        '"看一下这个支持工单，告诉我它的内容。"',
        '**[零样本提示]**',
        '"将以下支持工单分类为以下其中一个类别：`billing_issue`、`login_problem`、`feature_request`、`bug_report` 或 `other`。工单：\"我今天尝试重置密码三次，链接总是说已过期。\" 仅输出类别名称。"',
        '**[少样本提示]**',
        '"将每个支持工单分类为以下其中一个类别：`billing_issue`、`login_problem`、`feature_request`、`bug_report` 或 `other`。仅输出类别名称。示例1：工单：\"您本月对同一订阅收费了两次。\" 标签：`billing_issue` 示例2：工单：\"无论我点击\'导出报告\'还是刷新页面，都没有反应。\" 标签：`bug_report` 示例3：工单：\"您能否添加将报告直接导出到 Google Sheets 的支持？\" 标签：`feature_request` 现在分类这个工单：\"我今天尝试重置密码三次，链接总是说已过期。\"',
        '少样本版本明确显示模式，通常可改进对微妙或嘈杂工单的分类质量。',
      ],
    },
    howPQHelps: {
      title: 'PromptQuorum 如何帮助您选择',
      content: [
        '**PromptQuorum 是一款多模型 AI 分派工具，让您在一个地方跨多个提供商测试零样本和少样本提示。** 您可以将相同的仅指令提示和相同的示例增强提示并行发送到 GPT-4o、Claude 4.6 Sonnet 和 Gemini 2.5 Pro 等模型。',
        '在 PromptQuorum 中，您可以：',
      ],
      items: [
        '使用 Single Step、RTF 或 CO-STAR 等框架快速使用零样本提示。',
        '通过在 SPECS 或谷歌提示指南等框架内嵌入代表性示例来升级为少样本提示，以获得更严格的控制。',
        '将零样本和少样本版本作为模板保存，然后随时间推移比较模型间的准确性、延迟和令牌成本。',
      ],
    },
    实用建议: {
      title: '实用建议：最大化效果',
      content: [
        '以下是充分利用零样本和少样本提示的实际建议。',
      ],
      items: [
        '总是从零样本开始。它快速易用，对许多简单任务足够。',
        '当零样本精度低于 70% 时，尝试少样本。',
        '选择示例时，选择代表您数据中边界情况的样本。',
        '在生产环境中部署前测试性能差异。',
        '比较不同模型间的零样本 vs. 少样本性能——GPT-4o 可能在零样本中表现出色，而 Gemini 2.5 Pro 可能从少样本获益更多。',
      ],
    },
    howToStart: {
      title: '如何在零样本和少样本间选择',
      numberedItems: [
        '**对于日常、直接的任务，从零样本开始（无示例）。** 示例："将此评论分类为正面或负面。" 如果准确性足够，零样本更快更便宜。',
        '**当零样本性能不佳时（准确性 <80% 或质量较低），添加 2-5 个少样本示例。** 向模型展示 2-3 个正面和 2-3 个负面评论，带正确标签。少样本通过示例教学。',
        '**对于具有细微差别或罕见模式的任务，添加 5-10 个示例（少样本+）。** 如果您的任务需要检测讽刺、有害偏见或特定领域的细微差别，更多示例会有所帮助。',
        '**选择跨越您期望输入范围的示例。** 如果您分类产品评论，包括热情的、平静的和负面的示例。不要只展示简单案例。',
        '**在生产提交前测试测试集上的少样本益处。** 使用 0 个示例和 5 个示例对 50 个测试案例运行相同提示。如果少样本增加 10+ 个百分点的准确性，包含示例。如果收益 <5%，坚持零样本。',
      ],
    },
  },
},
  };
