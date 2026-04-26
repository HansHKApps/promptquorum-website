// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: rtf-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The RTF Framework',
      intro: 'The RTF Framework is a prompt structure that focuses on Role, Task, and Format so you can give models a complete instruction in one compact message. PromptQuorum includes the RTF Framework as a built-in option that any user can select and apply across all supported models.',
      publishDate: '2026-03-24',
      readTime: '6 min read',

      seoTitle: 'RTF Framework 2026: Role, Task, Format',

      metaDescription: 'RTF: Role, Task, Format. Simple prompt structure for consistency. Guide and examples for all models and use cases.',

      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'The RTF Framework',
        description: 'How the RTF Framework (Role, Task, Format) works, when to use it, and how PromptQuorum offers RTF as a built-in option.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['RTF Framework', 'Role Task Format', 'prompt frameworks', 'prompt engineering', 'PromptQuorum'],
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
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
      },
      sections: {
        whatIsRTF: {
          title: 'What the RTF Framework Is',
          content: [
            '**The RTF Framework is a three-part prompt pattern that tells the model who it is, what to do, and exactly how the answer should look.** Instead of sending a loose question, you specify Role, Task, and Format explicitly. This works across GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, and local models you run via Ollama or LM Studio.',
            'RTF is intentionally minimal. With only three fields, it is easy to remember, fast to fill in, and flexible enough for many day-to-day tasks. You can treat it as a "default prompt skeleton" whenever you are not sure which specialized framework to use.',
          ],
        },
        threeComponents: {
          title: 'The Three RTF Components',
          content: [
            '**A strong RTF prompt clearly defines each of the three components so the model has no ambiguity about its job.** You can write them as labeled lines or as one sentence that still contains all three parts.',
            'Typical definitions:',
          ],
          items: [
            'Role: The perspective or expertise the model should adopt (for example "You are a senior data analyst").',
            'Task: The concrete action you want, described in one or two sentences.',
            'Format: The structure, length, and style of the output (for example "3 bullet points plus a 2-sentence summary").',
          ],
        },
        whyRTFIsUseful: {
          title: 'Why the RTF Framework Is Useful',
          content: [
            '**The RTF Framework is useful because it gives you most of the benefits of more complex frameworks with almost no overhead.** It forces you to make three decisions—who, what, and how—before sending a prompt.',
            'Practical advantages include:',
          ],
          items: [
            'Faster prompt writing than multi-section frameworks for routine work.',
            'Better consistency across models and runs, since the format is always explicit.',
            'Easy onboarding for teammates who can learn RTF in a few minutes and reuse it everywhere.',
          ],
        },
        badVsGoodExample: {
          title: 'Example: Bad vs Good RTF Prompt',
          content: [
            '**The difference between an unstructured request and an RTF-based prompt becomes clear when you look at the same task written both ways.** Here is an example for summarizing a meeting.',
            '**[Bad Prompt]**',
            '"Summarize this meeting."',
            '**[Good Prompt]**',
            '"Role: You are an operations manager summarizing a project status meeting for senior leadership. Task: Read the transcript and identify the key decisions, open risks, and next steps discussed in the meeting. Format: Output a Markdown summary with three sections (`Decisions`, `Risks`, `Next steps`). Under each section, use 3–5 bullet points. Keep the total summary under 250 words."',
            'The RTF version tells the model exactly how to think about the content and how to package the result so others can use it immediately.',
          ],
        },
        whenToUse: {
          title: 'When to Use the RTF Framework',
          content: [
            '**You should use the RTF Framework when you want a simple, reusable pattern that still enforces clarity and structure.** It is a strong default whenever you do not need long specifications or multi-step reasoning traces.',
            'Typical use cases include:',
          ],
          items: [
            'Short reports, recaps, and summaries for emails or chat.',
            'Drafting responses to customers or internal stakeholders with clear structure.',
            'Generating small code snippets or refactors with a specified output format.',
            'Quick content pieces like product blurbs, FAQ entries, or simple checklists.',
          ],
        },
        howPQImplements: {
          title: 'How PromptQuorum Implements the RTF Framework',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that includes the RTF Framework as one of its built-in prompt structures so users can apply Role–Task–Format prompting in a consistent way.** When you choose the RTF option inside PromptQuorum, the interface exposes fields for Role, Task, and Format and assembles them into a single well-formed instruction.',
            'In PromptQuorum, the RTF Framework lets you:',
          ],
          items: [
            'Fill in Role, Task, and Format once and send the same structured prompt to multiple models such as GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, and local models configured through Ollama or LM Studio.',
            'Save RTF prompts as templates for recurring workflows—for example "weekly status summary," "customer reply draft," or "bug report recap."',
            'Share RTF templates across your team so that even non-experts can create prompts that produce consistent, structured outputs.',
          ],
        },
        combiningRTF: {
          title: 'Combining RTF With Other Frameworks',
          content: [
            '**You should combine the RTF Framework with other frameworks by treating RTF as your lightweight default and switching to heavier frameworks when constraints increase.** A practical pattern is:',
          ],
          items: [
            'Start with RTF for most new tasks where you just need clear structure quickly.',
            'Move to SPECS when you need strict schemas, examples, and constraints.',
            'Use TRACE or APE when you want explicit reasoning steps before the final answer.',
            'Use creative frameworks like CRAFT when audience and tone are central.',
          ],
        },

        howToStart: {
          title: 'How to Use the RTF (Role, Task, Format) Framework',
          numberedItems: [
            '**Role: Define who the AI is playing.** Example: \'You are a product manager at a B2B SaaS company.\'',
            '**Task: State what the AI should do.** Example: \'Write product requirements for a new analytics dashboard feature.\'',
            '**Format: Specify the structure and style of output.** Example: \'Return as a PRD document with sections: Overview, Goals, User Personas, Key Features, Success Metrics, Timeline. Use professional, clear language.\'',
            '**Combine RTF with constraints for better control.** Example: \'RTF: Role = Product Manager, Task = Write PRD, Format = Markdown document. Constraints: 2000 words max, focus on enterprise users, no buzzwords.\'',
            '**Test RTF prompts on sample tasks to ensure clarity before using them repeatedly.** RTF is a simple framework—validate that your role, task, and format choices actually produce the output you need.',
          ],
        },
      },
    },
    de: {
  theme: 'Frameworks',
  title: 'Das RTF-Framework',
  intro: 'Das RTF-Framework ist eine Prompt-Struktur, die sich auf Rolle, Aufgabe und Format konzentriert, sodass Sie Modellen eine vollständige Anweisung in einer kompakten Nachricht geben können. PromptQuorum bietet das RTF-Framework als integrierte Option an, die jeder Benutzer auswählen und auf alle unterstützten Modelle anwenden kann.',
  publishDate: '2026-03-24',
  readTime: '6 min Lesezeit',
  educationalLevel: 'Intermediate',
  metaDescription: 'Das RTF-Framework (Rolle, Aufgabe, Format) erklärt: Wie es funktioniert, wann Sie es verwenden sollten und wie PromptQuorum RTF als integrierte Option bietet.',
  primaryTerm: 'RTF-Framework',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Das RTF-Framework',
    description: 'Das RTF-Framework (Rolle, Aufgabe, Format) erklärt: Wie es funktioniert, wann Sie es verwenden sollten und wie PromptQuorum RTF als integrierte Option bietet.',
    datePublished: '2026-03-24',
    dateModified: '2026-03-24',
    keywords: ['RTF-Framework', 'Rolle Aufgabe Format', 'Prompt-Frameworks', 'Prompt Engineering', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'Prompt Engineering' },
      { '@type': 'Thing', name: 'Prompt-Frameworks' },
      { '@type': 'Thing', name: 'Large Language Models' },
    ],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      { '@type': 'SoftwareApplication', name: 'GPT-4o', url: 'https://openai.com' },
      { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
      { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
      { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
      { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
    ],
  },
  sections: {
    whatIsRTF: {
      title: 'Das RTF-Framework verstehen',
      content: [
        '**Das RTF-Framework ist ein dreiteiliges Prompt-Muster, das dem Modell mitteilt, wer es ist, was es tun soll und wie die Antwort genau aussehen sollte.** Statt eine lockere Frage zu stellen, geben Sie Rolle, Aufgabe und Format explizit an. Dies funktioniert über GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro und lokale Modelle, die Sie über Ollama oder LM Studio ausführen.',
        'Das RTF-Framework ist bewusst minimal strukturiert. Mit nur drei Feldern ist es leicht zu merken, schnell auszufüllen und flexibel genug für viele tägliche Aufgaben. Sie können es als „Standard-Prompt-Grundgerüst" verwenden, wenn Sie sich nicht sicher sind, welches spezialisierte Framework Sie verwenden sollten.',
      ],
    },
    threeComponents: {
      title: 'Die drei Komponenten des RTF-Frameworks',
      content: [
        '**Ein starker RTF-Prompt definiert alle drei Komponenten klar, sodass das Modell keine Unklarheiten über seine Aufgabe hat.** Sie können sie als beschriftete Zeilen oder als einen Satz schreiben, der alle drei Teile enthält.',
        'Typische Definitionen:',
      ],
      items: [
        'R — Role (Rolle): Die Perspektive oder das Fachwissen, das das Modell annehmen soll (zum Beispiel „Sie sind ein leitender Datenanalyst").',
        'T — Task (Aufgabe): Die konkrete Aktion, die Sie möchten, beschrieben in ein oder zwei Sätzen.',
        'F — Format (Format): Die Struktur, Länge und den Stil der Ausgabe (zum Beispiel „3 Aufzählungspunkte plus eine 2-Satz-Zusammenfassung").',
      ],
    },
    whyRTFIsUseful: {
      title: 'Warum das RTF-Framework nützlich ist',
      content: [
        '**Das RTF-Framework ist nützlich, weil es Ihnen die meisten Vorteile komplexerer Frameworks mit fast keinem Overhead bietet.** Es zwingt Sie, drei Entscheidungen zu treffen—wer, was und wie—bevor Sie den Prompt senden.',
        'Praktische Vorteile sind:',
      ],
      items: [
        'Schnellere Prompt-Erstellung als Multi-Section-Frameworks für Routineaufgaben.',
        'Bessere Konsistenz über Modelle und Läufe hinweg, da das Format immer explizit ist.',
        'Einfaches Onboarding für Teamkollegen, die RTF in wenigen Minuten lernen und überall wiederverwenden können.',
      ],
    },
    badVsGoodExample: {
      title: 'Beispiel: Schlechter vs. guter RTF-Prompt',
      content: [
        '**Der Unterschied zwischen einer unstrukturierten Anfrage und einem RTF-basierten Prompt wird klar, wenn Sie dieselbe Aufgabe auf beide Arten schreiben.** Hier ist ein Beispiel für die Zusammenfassung eines Meetings.',
        '**[Schlechter Prompt]**',
        '"Fassen Sie dieses Meeting zusammen."',
        '**[Guter Prompt]**',
        '"Rolle: Sie sind ein Operations Manager, der ein Project-Status-Meeting für die Geschäftsführung zusammenfasst. Aufgabe: Lesen Sie das Protokoll und identifizieren Sie die im Meeting besprochenen Schlüsselbeschlüsse, offenen Risiken und nächsten Schritte. Format: Geben Sie eine Markdown-Zusammenfassung mit drei Abschnitten aus (`Beschlüsse`, `Risiken`, `Nächste Schritte`). Verwenden Sie unter jedem Abschnitt 3–5 Aufzählungspunkte. Halten Sie die Gesamtzusammenfassung unter 250 Wörtern."',
        'Die RTF-Version teilt dem Modell genau mit, wie es über den Inhalt nachdenken soll und wie es das Ergebnis so gestaltet, dass andere es sofort nutzen können.',
      ],
    },
    whenToUse: {
      title: 'Wann das RTF-Framework zu verwenden ist',
      content: [
        '**Sie sollten das RTF-Framework verwenden, wenn Sie ein einfaches, wiederverwendbares Muster möchten, das trotzdem Klarheit und Struktur erzwingt.** Es ist eine starke Standardwahl, wenn Sie keine langen Spezifikationen oder mehrstufige Reasoning-Traces benötigen.',
        'Typische Anwendungsfälle sind:',
      ],
      items: [
        'Kurze Berichte, Zusammenfassungen und Überblicke für E-Mails oder Chat.',
        'Entwurf von Antworten an Kunden oder interne Interessengruppen mit klarer Struktur.',
        'Generierung von kleinen Code-Snippets oder Umgestaltungen mit einem angegebenen Output-Format.',
        'Schnelle Inhalte wie Produkt-Blurbs, FAQ-Einträge oder einfache Checklisten.',
      ],
    },
    howPQImplements: {
      title: 'Wie PromptQuorum das RTF-Framework implementiert',
      content: [
        '**PromptQuorum ist ein Multi-Model-AI-Dispatch-Tool, das das RTF-Framework als eine seiner integrierten Prompt-Strukturen enthält, sodass Benutzer Role–Task–Format-Prompting konsistent anwenden können.** Wenn Sie die RTF-Option in PromptQuorum auswählen, stellt die Benutzeroberfläche Felder für Rolle, Aufgabe und Format bereit und fügt sie zu einer einzigen wohlgeformten Anweisung zusammen.',
        'In PromptQuorum ermöglicht Ihnen das RTF-Framework:',
      ],
      items: [
        'Rolle, Aufgabe und Format einmal ausfüllen und denselben strukturierten Prompt an mehrere Modelle wie GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro und lokale Modelle senden, die über Ollama oder LM Studio konfiguriert sind.',
        'RTF-Prompts als Vorlagen für wiederkehrende Workflows speichern—zum Beispiel „wöchentliche Status-Zusammenfassung", „Kunden-Antwort-Entwurf" oder „Bug-Bericht-Zusammenfassung".',
        'RTF-Vorlagen über Ihr Team hinweg teilen, sodass auch Nicht-Experten Prompts erstellen können, die konsistente, strukturierte Ausgaben erzeugen.',
      ],
    },
    combiningRTF: {
      title: 'RTF mit anderen Frameworks kombinieren',
      content: [
        '**Sie sollten das RTF-Framework mit anderen Frameworks kombinieren, indem Sie RTF als leichte Standardwahl behandeln und zu schwereren Frameworks wechseln, wenn die Anforderungen zunehmen.** Ein praktisches Muster ist:',
      ],
      items: [
        'Beginnen Sie mit RTF für die meisten neuen Aufgaben, bei denen Sie nur schnelle klare Struktur benötigen.',
        'Wechseln Sie zu SPECS, wenn Sie strikte Schemas, Beispiele und Einschränkungen benötigen.',
        'Verwenden Sie TRACE oder APE, wenn Sie explizite Reasoning-Schritte vor der endgültigen Antwort möchten.',
        'Verwenden Sie kreative Frameworks wie CRAFT, wenn Publikum und Ton zentral sind.',
      ],
    },
    howToStart: {
      title: 'So verwenden Sie das RTF-Framework (Rolle, Aufgabe, Format)',
      numberedItems: [
        '**R — Role (Rolle): Definieren Sie, wen der KI spielt.** Beispiel: \'Sie sind ein Product Manager in einem B2B-SaaS-Unternehmen.\'',
        '**T — Task (Aufgabe): Geben Sie an, was der KI tun soll.** Beispiel: \'Schreiben Sie Produktanforderungen für eine neue Analytics-Dashboard-Funktion.\'',
        '**F — Format (Format): Geben Sie die Struktur und den Stil der Ausgabe an.** Beispiel: \'Geben Sie als PRD-Dokument mit Abschnitten aus: Überblick, Ziele, Benutzer-Personas, Schlüsselfunktionen, Erfolgskennzahlen, Zeitplan. Verwenden Sie professionelle, klare Sprache.\'',
        '**Kombinieren Sie RTF mit Einschränkungen für bessere Kontrolle.** Beispiel: \'RTF: Role = Product Manager, Task = Write PRD, Format = Markdown document. Constraints: 2000 words max, focus on enterprise users, no buzzwords.\'',
        '**Testen Sie RTF-Prompts an Beispielaufgaben, um Klarheit zu gewährleisten, bevor Sie sie wiederholt verwenden.** Das RTF-Framework ist einfach—überprüfen Sie, dass Ihre Rolle-, Aufgaben- und Format-Entscheidungen tatsächlich die erforderliche Ausgabe erzeugen.',
      ],
    },
    zusammenfassung: {
      title: 'Zusammenfassung: RTF-Framework Essentials',
      content: [
        '**Das RTF-Framework ist ein schlankes, effektives Muster für strukturierte Prompts.** Es erfordert drei Entscheidungen (Rolle, Aufgabe, Format), garantiert aber Klarheit und Konsistenz über alle Modelle hinweg. Verwenden Sie es als Ihre Standard-Wahl, wenn Sie keine speziellen Frameworks benötigen—und kombinieren Sie es mit SPECS, TRACE oder CRAFT, wenn die Anforderungen komplexer werden.',
      ],
    },
    dachKontext: {
      title: 'RTF-Framework im DACH-Kontext',
      content: [
        '**Das RTF-Framework ist für Unternehmen und Teams im deutschsprachigen Raum besonders wertvoll, da es präzise Anforderungsformulierung erzwingt.**',
        'Typische Anwendungen im DACH-Raum:',
      ],
      items: [
        'Technische Dokumentation und Spezifikationen (z. B. Anforderungslisten für Softwareentwickler in Deutschland, Österreich oder der Schweiz).',
        'Compliance-Dokumentation: RTF hilft, DSGVO-konforme, präzise Anforderungen zu formulieren, die Ihrer Datenschutz-Dokumentation entsprechen.',
        'Unternehmenskommunikation: Deutsche Unternehmen schätzen strukturierte, präzise Kommunikation—RTF erzwingt dies zwangsweise.',
        'Integration mit lokalen LLMs: RTF funktioniert hervorragend mit lokalen Modellen wie Mistral oder DeepSeek, die in DACH-Infrastrukturen gehostet werden.',
      ],
    },
  },
},
    fr: {
  theme: 'Frameworks',
  title: 'Le Framework RTF',
  intro: 'Le Framework RTF est une structure de prompt qui se concentre sur le Rôle, la Tâche et le Format pour donner aux modèles une instruction complète en un seul message compact. PromptQuorum inclut le Framework RTF comme option intégrée que tout utilisateur peut sélectionner et appliquer à tous les modèles supportés.',
  publishDate: '2026-03-24',
  readTime: '6 min de lecture',
  educationalLevel: 'Intermediate',
  metaDescription: 'Le Framework RTF (Rôle, Tâche, Format) expliqué : son fonctionnement, quand l\'utiliser, et comment PromptQuorum l\'offre comme option intégrée.',
  primaryTerm: 'Framework RTF',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Le Framework RTF',
    description: 'Le Framework RTF (Rôle, Tâche, Format) expliqué : son fonctionnement, quand l\'utiliser, et comment PromptQuorum l\'offre comme option intégrée.',
    datePublished: '2026-03-24',
    dateModified: '2026-03-24',
    keywords: ['Framework RTF', 'Rôle Tâche Format', 'frameworks de prompt', 'prompt engineering', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'Prompt Engineering' },
      { '@type': 'Thing', name: 'Frameworks de Prompt' },
      { '@type': 'Thing', name: 'Large Language Models' },
    ],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      { '@type': 'SoftwareApplication', name: 'GPT-4o', url: 'https://openai.com' },
      { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
      { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
      { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
      { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
    ],
  },
  sections: {
    whatIsRTF: {
      title: 'Ce qu\'est le Framework RTF',
      content: [
        '**Le Framework RTF est un modèle de prompt en trois parties qui indique au modèle qui il est, ce qu\'il doit faire et comment la réponse doit exactement ressembler.** Au lieu d\'envoyer une question vague, vous spécifiez le Rôle, la Tâche et le Format explicitement. Cela fonctionne sur GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro et les modèles locaux exécutés via Ollama ou LM Studio.',
        'Le Framework RTF est intentionnellement minimaliste. Avec seulement trois champs, il est facile à retenir, rapide à remplir et flexible pour la plupart des tâches quotidiennes. Vous pouvez l\'utiliser comme « squelette de prompt par défaut » quand vous ne savez pas quel framework spécialisé utiliser.',
      ],
    },
    threeComponents: {
      title: 'Les trois composants du Framework RTF',
      content: [
        '**Un prompt RTF solide définit clairement chacun des trois composants pour qu\'il n\'y ait aucune ambiguïté sur le travail du modèle.** Vous pouvez les écrire comme des lignes étiquetées ou comme une phrase unique qui contient toujours les trois parties.',
        'Définitions typiques :',
      ],
      items: [
        'R — Rôle (Rôle) : La perspective ou l\'expertise que le modèle doit adopter (par exemple « Vous êtes un analyste de données senior »).',
        'T — Tâche (Tâche) : L\'action concrète que vous souhaitez, décrite en une ou deux phrases.',
        'F — Format (Format) : La structure, la longueur et le style de la sortie (par exemple « 3 points de liste plus un résumé de 2 phrases »).',
      ],
    },
    whyRTFIsUseful: {
      title: 'Pourquoi le Framework RTF est utile',
      content: [
        '**Le Framework RTF est utile car il vous offre la plupart des avantages des frameworks plus complexes avec presque aucune surcharge.** Il vous force à prendre trois décisions—qui, quoi, comment—avant d\'envoyer votre prompt.',
        'Les avantages pratiques incluent :',
      ],
      items: [
        'Rédaction plus rapide de prompts que les frameworks multi-sections pour les tâches routinières.',
        'Meilleure cohérence entre les modèles et les exécutions, car le format est toujours explicite.',
        'Intégration facile des collègues qui peuvent apprendre RTF en quelques minutes et l\'utiliser partout.',
      ],
    },
    badVsGoodExample: {
      title: 'Exemple : prompt RTF mauvais et bon',
      content: [
        '**La différence entre une demande non structurée et un prompt basé sur RTF devient claire quand vous écrivez la même tâche des deux façons.** Voici un exemple de résumé de réunion.',
        '**[Mauvais Prompt]**',
        '"Résumez cette réunion."',
        '**[Bon Prompt]**',
        '"Rôle : Vous êtes un directeur des opérations résumant une réunion de statut de projet pour la direction générale. Tâche : Lisez la transcription et identifiez les décisions clés, les risques ouverts et les prochaines étapes discutés lors de la réunion. Format : Produisez un résumé Markdown avec trois sections (`Décisions`, `Risques`, `Prochaines étapes`). Sous chaque section, utilisez 3–5 points de liste. Gardez le résumé total sous 250 mots."',
        'La version RTF indique au modèle exactement comment penser au contenu et comment structurer le résultat afin que d\'autres puissent l\'utiliser immédiatement.',
      ],
    },
    whenToUse: {
      title: 'Quand utiliser le Framework RTF',
      content: [
        '**Vous devez utiliser le Framework RTF quand vous voulez un modèle simple, réutilisable qui impose toujours clarté et structure.** C\'est un choix par défaut solide quand vous n\'avez pas besoin de longues spécifications ou de traces de raisonnement multi-étapes.',
        'Les cas d\'usage typiques incluent :',
      ],
      items: [
        'Rapports courts, résumés et synthèses pour e-mail ou chat.',
        'Brouillon de réponses aux clients ou aux parties prenantes internes avec structure claire.',
        'Génération de petits extraits de code ou de refactorisations avec un format de sortie spécifié.',
        'Contenus rapides comme des résumés de produits, des entrées FAQ ou de simples listes de contrôle.',
      ],
    },
    howPQImplements: {
      title: 'Comment PromptQuorum implémente le Framework RTF',
      content: [
        '**PromptQuorum est un outil d\'envoi multi-modèles IA qui inclut le Framework RTF comme l\'une de ses structures de prompt intégrées afin que les utilisateurs puissent appliquer le prompting Rôle–Tâche–Format de manière cohérente.** Quand vous choisissez l\'option RTF dans PromptQuorum, l\'interface expose des champs pour Rôle, Tâche et Format et les assemble en une instruction unique bien formée.',
        'Dans PromptQuorum, le Framework RTF vous permet :',
      ],
      items: [
        'Remplir Rôle, Tâche et Format une fois et envoyer le même prompt structuré à plusieurs modèles comme GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro et des modèles locaux configurés via Ollama ou LM Studio.',
        'Enregistrer les prompts RTF comme modèles pour les flux de travail récurrents—par exemple « résumé de statut hebdomadaire », « brouillon de réponse client » ou « résumé de rapport de bogue ».',
        'Partager les modèles RTF à travers votre équipe afin que même les non-experts puissent créer des prompts qui produisent des résultats cohérents et structurés.',
      ],
    },
    combiningRTF: {
      title: 'Combiner RTF avec d\'autres frameworks',
      content: [
        '**Vous devez combiner le Framework RTF avec d\'autres frameworks en traitant RTF comme votre choix par défaut léger et en basculant vers des frameworks plus lourds quand les contraintes augmentent.** Un modèle pratique est :',
      ],
      items: [
        'Commencez par RTF pour la plupart des nouvelles tâches où vous avez juste besoin de structure claire rapidement.',
        'Passez à SPECS quand vous avez besoin de schémas stricts, d\'exemples et de contraintes.',
        'Utilisez TRACE ou APE quand vous voulez des étapes de raisonnement explicites avant la réponse finale.',
        'Utilisez des frameworks créatifs comme CRAFT quand l\'audience et le ton sont centraux.',
      ],
    },
    howToStart: {
      title: 'Comment utiliser le Framework RTF (Rôle, Tâche, Format)',
      numberedItems: [
        '**R — Rôle : Définissez qui l\'IA joue.** Exemple : \'Vous êtes un responsable produit dans une entreprise SaaS B2B.\'',
        '**T — Tâche : Indiquez ce que l\'IA doit faire.** Exemple : \'Écrivez les exigences produit pour une nouvelle fonctionnalité de tableau de bord analytique.\'',
        '**F — Format : Spécifiez la structure et le style de la sortie.** Exemple : \'Retournez en tant que document PRD avec sections : Vue d\'ensemble, Objectifs, Personas Utilisateur, Fonctionnalités clés, Métriques de Succès, Calendrier. Utilisez un langage professionnel et clair.\'',
        '**Combinez RTF avec des contraintes pour un meilleur contrôle.** Exemple : \'RTF: Role = Product Manager, Task = Write PRD, Format = Markdown document. Constraints: 2000 words max, focus on enterprise users, no buzzwords.\'',
        '**Testez les prompts RTF sur des tâches exemples pour assurer la clarté avant de les utiliser régulièrement.** RTF est un framework simple—validez que vos choix de rôle, tâche et format produisent effectivement la sortie dont vous avez besoin.',
      ],
    },
    avantagesCles: {
      title: 'Avantages clés du Framework RTF',
      content: [
        '**Le Framework RTF offre simplicité, rapidité et cohérence sans sacrifier la clarté.** Voici pourquoi les équipes francophones—en France, en Belgique, en Suisse et au Canada—l\'apprécient particulièrement :',
      ],
      items: [
        'Rédaction de prompt plus rapide : Trois champs seulement, pas de longues sections ou de formats complexes.',
        'Cohérence cross-modèle : Le même RTF produit des résultats structurés sur GPT-4o, Claude, Gemini et les modèles locaux.',
        'Intégration d\'équipe facile : Les collègues non-techniques peuvent apprendre RTF en quelques minutes.',
        'Réutilisabilité : Enregistrez vos meilleurs prompts RTF comme modèles et utilisez-les pour des tâches similaires.',
      ],
    },
  },
},
    ja: {
  theme: 'Frameworks',
  title: 'RTFフレームワーク',
  intro: 'RTFフレームワークは、ロール、タスク、フォーマットに焦点を当てたプロンプト構造であり、モデルに1つのコンパクトなメッセージで完全な指示を与えることができます。PromptQuorumは、任意のユーザーが選択して、サポートされているすべてのモデルに適用できる組み込みオプションとしてRTFフレームワークを含めています。',
  publishDate: '2026-03-24',
  readTime: '6分で読める',
  educationalLevel: 'Intermediate',
  metaDescription: 'RTFフレームワーク（ロール、タスク、フォーマット）の解説：仕組み、使うべき時、PromptQuorumが組み込みオプションとして提供する方法。',
  primaryTerm: 'RTFフレームワーク',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'RTFフレームワーク',
    description: 'RTFフレームワーク（ロール、タスク、フォーマット）の解説：仕組み、使うべき時、PromptQuorumが組み込みオプションとして提供する方法。',
    datePublished: '2026-03-24',
    dateModified: '2026-03-24',
    keywords: ['RTFフレームワーク', 'ロールタスクフォーマット', 'プロンプトフレームワーク', 'プロンプトエンジニアリング', 'PromptQuorum'],
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
      { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
      { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
    ],
  },
  sections: {
    whatIsRTF: {
      title: 'RTFフレームワークとは何か',
      content: [
        '**RTFフレームワークは、モデルに対して「誰であるか」「何をすべきか」「答えがどのように見えるべきか」を示す3部構成のプロンプトパターンです。** ぼんやりした質問を送る代わりに、ロール、タスク、フォーマットを明示的に指定します。これはGPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、およびOllamaまたはLM Studioを介して実行するローカルモデルに対して機能します。',
        'RTFフレームワークは意図的に最小限に設計されています。3つのフィールドだけなので、覚えやすく、素早く入力でき、多くの日常的なタスクに十分な柔軟性があります。特化したフレームワークを使うべきかどうか不明な場合は、「デフォルトプロンプトスケルトン」として使用できます。',
      ],
    },
    threeComponentsOverview: {
      title: 'RTFの3つの構成要素概要',
      content: [
        'RTFフレームワークはシンプルですが、3つの重要な部分で構成されています。各部分を理解することで、効果的なプロンプトを作成できます。',
      ],
    },
    threeComponents: {
      title: 'RTFフレームワークの3つの構成要素詳細',
      content: [
        '**強力なRTFプロンプトは3つの構成要素を明確に定義し、モデルが自分の役割について曖昧性がないようにします。** ラベルのついた行として、または3つの部分をすべて含む1つの文として書くことができます。',
        '典型的な定義：',
      ],
      items: [
        'R — ロール（役割）：モデルが採用すべき視点または専門知識（例：「あなたは上級データアナリストです」）。',
        'T — タスク（課題）：あなたが望む具体的なアクション、1～2文で説明される。',
        'F — フォーマット（形式）：出力の構造、長さ、スタイル（例：「3つの箇条書き項目と2文の要約」）。',
      ],
    },
    whyRTFIsUseful: {
      title: 'RTFフレームワークが有用な理由',
      content: [
        '**RTFフレームワークは有用です。なぜなら、より複雑なフレームワークのほとんどの利点をほぼ無負荷で提供するからです。** これにより、プロンプトを送信する前に、3つの決定—誰が、何を、どのように—を強制します。',
        '実用的な利点には：',
      ],
      items: [
        'ルーチンワークの場合、複数セクションのフレームワークよりもプロンプト作成が速い。',
        'フォーマットが常に明示的であるため、モデルと実行間での一貫性が向上。',
        'チームメンバーがRTFを数分で学び、どこでも再利用できるため、オンボーディングが簡単。',
      ],
    },
    badVsGoodExample: {
      title: '例：RTFプロンプトの悪い例と良い例',
      content: [
        '**構造化されていないリクエストとRTFベースのプロンプトの違いは、同じタスクを両方の方法で書くと明確になります。** ここに会議を要約する例があります。',
        '**[悪いプロンプト]**',
        '"この会議を要約してください。"',
        '**[良いプロンプト]**',
        '"ロール：あなたはシニアリーダーシップのためのプロジェクトステータス会議を要約するオペレーションマネージャーです。タスク：トランスクリプトを読んで、会議で議論された主要な決定、未解決のリスク、および次のステップを特定します。フォーマット：3つのセクション（`決定`、`リスク`、`次のステップ`）を持つMarkdown要約を出力します。各セクションの下に、3～5個の箇条書き項目を使用します。合計要約を250語未満に保ちます。"',
        'RTFバージョンは、モデルにコンテンツについてどのように考えるべきか、また他の人がすぐに使用できるようにどのように結果をパッケージ化するべきかを正確に指示します。',
      ],
    },
    whenToUse: {
      title: 'RTFフレームワークをいつ使うべきか',
      content: [
        '**明確さと構造を強制しながら、シンプルで再利用可能なパターンが必要な場合は、RTFフレームワークを使用すべきです。** これは長い仕様や複数ステップの推論トレースが不要な場合の強力なデフォルトです。',
        '典型的なユースケース：',
      ],
      items: [
        'メールやチャット用の短いレポート、要約、概要。',
        '顧問または内部ステークホルダーへの明確な構造のあるレスポンスの作成。',
        '指定された出力フォーマットの小さなコードスニペットまたはリファクタリングの生成。',
        '製品の説明文、FAQエントリ、簡単なチェックリストなどの迅速なコンテンツピース。',
      ],
    },
    howPQImplements: {
      title: 'PromptQuorumがRTFフレームワークを実装する方法',
      content: [
        '**PromptQuorumはマルチモデルAI派遣ツールであり、RTFフレームワークを組み込みプロンプト構造の1つとして含めているため、ユーザーはロール・タスク・フォーマットプロンプティングを一貫した方法で適用できます。** PromptQuorum内でRTFオプションを選択すると、インターフェースはロール、タスク、フォーマットのフィールドを公開し、それらを単一のよく形成された指示に組み立てます。',
        'PromptQuorumでは、RTFフレームワークは次を可能にします：',
      ],
      items: [
        'ロール、タスク、フォーマットを一度入力して、GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、およびOllamaまたはLM Studioを介して構成されたローカルモデルなどの複数のモデルに同じ構造化されたプロンプトを送信。',
        'RTFプロンプトを定期的なワークフローのテンプレートとして保存（例：「週次ステータスサマリー」、「カスタマーレプライドラフト」、「バグレポートサマリー」）。',
        'チームディメンション全体でRTFテンプレートを共有して、非専門家でも一貫性のある構造化された出力を生成するプロンプトを作成できるようにする。',
      ],
    },
    combiningRTF: {
      title: 'RTFを他のフレームワークと組み合わせる',
      content: [
        '**RTFフレームワークを他のフレームワークと組み合わせるには、RTFを軽量デフォルトとして扱い、制約が増加したときに重いフレームワークに切り替える必要があります。** 実践的なパターンは次のとおりです：',
      ],
      items: [
        'ほとんどの新しいタスク用にRTFで開始します。そこでは迅速に明確な構造を必要とします。',
        '厳密なスキーマ、例、制約が必要な場合はSPECSに移動。',
        '最終的な答えの前に明示的な推論ステップが必要な場合はTRACEまたはAPEを使用。',
        'オーディエンスとトーンが中央の場合は、CRAFTなどの創造的なフレームワークを使用。',
      ],
    },
    howToStart: {
      title: 'RTFフレームワークの使い方：5ステップガイド',
      numberedItems: [
        '**R — ロール：AIが演じるべき人物を定義します。** 例：\'あなたはB2B SaaS企業のプロダクトマネージャーです。\'',
        '**T — タスク：AIが何をすべきかを述べてください。** 例：\'新しい分析ダッシュボード機能のプロダクト要件を書いてください。\'',
        '**F — フォーマット：出力の構造とスタイルを指定してください。** 例：\'概要、目標、ユーザーペルソナ、主要機能、成功メトリクス、タイムライン：概要、目標、ユーザーペルソナ、主要機能、成功メトリクス、タイムラインをセクションとしたPRDドキュメントとして返します。専門的で明確な言語を使用します。\'',
        '**制約を加えてコントロールを強化します。** 例：\'RTF：Role = Product Manager、Task = Write PRD、Format = Markdown document。Constraints: 2000 words max、focus on enterprise users、no buzzwords.\'',
        '**RTFプロンプトをサンプルタスクでテストしてから定期的に使用します。** RTFはシンプルなフレームワークです—ロール、タスク、フォーマットの選択が実際に必要な出力を生成することを検証します。',
      ],
    },
    practicalTips: {
      title: 'RTFフレームワークの実践Tips',
      content: [
        'RTFフレームワークを最大限に活用するための実用的なテクニックと推奨事項：',
      ],
      items: [
        'ロール選択をシンプルに：「上級データアナリスト」は「初級ジュニアデータサイエンティスト」よりも良い。具体的で認識可能な専門知識を選択。',
        'タスクは明確で測定可能に：「記事を書く」ではなく「SEOブログ記事を書く、1500語、H2見出し3つ以上」。',
        'フォーマットは出力を形作る：モデルはフォーマット指定で出力構造を正確に把握します。',
        'テンプレートを作成して再利用：「顧客対応ドラフト」「週次レポート」「コード要件定義」など、繰り返されるタスク用のRTFテンプレートを作成。',
        'モデル間で一貫性をテスト：同じRTFプロンプトをGPT-4oとClaudeで実行して、出力が期待どおりであることを確認。',
      ],
    },
    cautions: {
      title: '注意点：RTFを使う際の留意事項',
      content: [
        'RTFフレームワークは強力ですが、いくつかの注意が必要です：',
      ],
      items: [
        '複雑な推論が必要な場合は不十分：複数のステップを解く前に考える必要がある場合は、TRACE を検討。',
        'ロールの曖昧性を避ける：「エキスパート」は不明確。「マーケティング主任で3年の経験」の方がよい。',
        'フォーマットは細かすぎてはいけない：「1段落、5文、テキスト幅60文字未満」のような過度に詳細な指定は反効果。',
        '更新されたプロンプトをテスト：ロール、タスク、フォーマットを変更したら、再度テストして結果品質を確認。',
      ],
    },
  },
},
    zh: {
  theme: 'Frameworks',
  title: 'RTF框架',
  intro: 'RTF框架是一种专注于角色、任务和格式的提示词结构，让你能够在一条简洁的信息中向模型提供完整的指令。PromptQuorum将RTF框架作为内置选项包括在内，任何用户都可以选择它并将其应用于所有支持的模型。',
  publishDate: '2026-03-24',
  readTime: '阅读约6分钟',
  educationalLevel: 'Intermediate',
  metaDescription: 'RTF框架（角色、任务、格式）解释：它的工作原理、何时使用以及PromptQuorum如何将其作为内置选项提供。',
  primaryTerm: 'RTF框架',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'RTF框架',
    description: 'RTF框架（角色、任务、格式）解释：它的工作原理、何时使用以及PromptQuorum如何将其作为内置选项提供。',
    datePublished: '2026-03-24',
    dateModified: '2026-03-24',
    keywords: ['RTF框架', '角色任务格式', '提示框架', '提示工程', 'PromptQuorum'],
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
      { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
      { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
    ],
  },
  sections: {
    whatIsRTF: {
      title: 'RTF框架是什么',
      content: [
        '**RTF框架是一个三部分提示词模式，告诉模型它是谁、应该做什么，以及答案应该确切地如何显示。** 不是发送含糊的问题，而是明确指定角色、任务和格式。它在GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro和通过Ollama或LM Studio运行的本地模型上都有效。',
        'RTF框架设计得有意简洁。只有三个字段，易于记住、快速填写，并且对许多日常任务都足够灵活。当你不确定应使用哪个专门框架时，可以将其作为"默认提示词框架"使用。',
      ],
    },
    threeComponentsOverview: {
      title: 'RTF框架的三部分结构',
      content: [
        'RTF框架的强大之处在于它的简洁性和有效性。理解这三个部分是掌握框架的关键。',
      ],
    },
    threeComponents: {
      title: '详细解析：RTF的三个核心组件',
      content: [
        '**强大的RTF提示词清晰地定义三个组件，使模型对其工作没有任何歧义。** 你可以将它们写成标记行，或写成仍包含所有三个部分的单个句子。',
        '典型定义：',
      ],
      items: [
        'R — 角色（Role）：模型应采用的视角或专业知识（例如"你是一位资深数据分析师"）。',
        'T — 任务（Task）：你想要的具体行动，用一到两句话描述。',
        'F — 格式（Format）：输出的结构、长度和风格（例如"3个要点加一个2句话的总结"）。',
      ],
    },
    whyRTFIsUseful: {
      title: 'RTF框架为什么有用',
      content: [
        '**RTF框架之所以有用，是因为它提供了更复杂框架的大多数优点，几乎没有额外开销。** 它在你发送提示词之前强制你做出三个决策—谁、什么和如何。',
        '实际优势包括：',
      ],
      items: [
        '对日常工作来说，提示词编写速度快于多部分框架。',
        '由于格式始终明确，在模型和运行之间获得更好的一致性。',
        '团队成员可以在几分钟内学习RTF并在任何地方重复使用，轻松入门。',
      ],
    },
    badVsGoodExample: {
      title: '实例：不好的vs优秀的RTF提示词',
      content: [
        '**非结构化请求和基于RTF的提示词之间的差异在你用两种方式写同一任务时变得明显。** 这是一个会议总结的例子。',
        '**[不好的提示词]**',
        '"总结这个会议。"',
        '**[优秀的提示词]**',
        '"角色：你是一名运营经理，正在为高管总结项目状态会议。任务：阅读记录并识别会议中讨论的关键决策、未解决的风险和后续步骤。格式：输出一个包含三个部分的Markdown总结（`决策`、`风险`、`后续步骤`）。在每个部分下，使用3-5个要点。总结保持在250字以下。"',
        'RTF版本确切地告诉模型如何思考内容，以及如何打包结果使其他人可以立即使用。',
      ],
    },
    whenToUse: {
      title: '何时使用RTF框架',
      content: [
        '**当你希望有一个简单、可重复使用的模式，同时仍然强制清晰和结构时，应该使用RTF框架。** 当你不需要长规范或多步推理跟踪时，这是一个强大的默认选择。',
        '典型用例包括：',
      ],
      items: [
        '电子邮件或聊天的简短报告、总结和摘要。',
        '起草给客户或内部利益相关者的回复，带清晰的结构。',
        '生成指定输出格式的小代码片段或重构。',
        '产品描述、常见问题条目或简单清单等快速内容。',
      ],
    },
    howPQImplements: {
      title: 'PromptQuorum如何实现RTF框架',
      content: [
        '**PromptQuorum是一个多模型AI调度工具，它将RTF框架作为其内置提示词结构之一包括在内，因此用户可以以一致的方式应用角色-任务-格式提示词。** 当你在PromptQuorum中选择RTF选项时，界面会为角色、任务和格式公开字段，并将它们组装成单个格式良好的指令。',
        'PromptQuorum中的RTF框架让你能够：',
      ],
      items: [
        '一次性填写角色、任务和格式，并将相同的结构化提示词发送到多个模型，如GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro和通过Ollama或LM Studio配置的本地模型。',
        '将RTF提示词保存为模板以供重复工作流使用—例如"周报状态总结"、"客户回复草稿"或"错误报告摘要"。',
        '在团队中共享RTF模板，使即使是非专家也能创建产生一致、结构化输出的提示词。',
      ],
    },
    combiningRTF: {
      title: '将RTF与其他框架组合',
      content: [
        '**你应该通过将RTF视为轻量级默认选项并在约束增加时切换到更重的框架，来将RTF框架与其他框架结合使用。** 一个实用的模式是：',
      ],
      items: [
        '对于大多数你只需要快速清晰结构的新任务，从RTF开始。',
        '当你需要严格的架构、示例和约束时转到SPECS。',
        '当你想要最终答案前的明确推理步骤时，使用TRACE或APE。',
        '当受众和语气是中心时，使用CRAFT等创意框架。',
      ],
    },
    howToStart: {
      title: '如何使用RTF框架：5步实施指南',
      numberedItems: [
        '**R — 角色：定义AI应该扮演的人物。** 例如：\'你是一家B2B SaaS公司的产品经理。\'',
        '**T — 任务：说明AI应该做什么。** 例如：\'为新的分析仪表板功能编写产品需求。\'',
        '**F — 格式：指定输出的结构和风格。** 例如：\'作为PRD文档返回，包含部分：概览、目标、用户角色、关键功能、成功指标、时间表。使用专业、清晰的语言。\'',
        '**将RTF与约束相结合以获得更好的控制。** 例如：\'RTF: Role = Product Manager、Task = Write PRD、Format = Markdown document。Constraints: 2000 words max、focus on enterprise users、no buzzwords.\'',
        '**在重复使用之前，在示例任务上测试RTF提示词以确保清晰。** RTF是一个简单框架—验证你的角色、任务和格式选择确实产生你需要的输出。',
      ],
    },
    practicalAdvice: {
      title: '实用建议：最大化RTF框架的效果',
      content: [
        '以下是如何在实际工作中有效使用RTF框架的建议：',
      ],
      items: [
        '保持角色具体：选择"资深Python开发工程师"而非"开发者"。具体的头衔和经验水平产生更好的结果。',
        '任务应该清晰可衡量：不只是"写代码"，而是"用Python写一个递归函数来计算最长子串，带注释和单元测试"。',
        '格式驱动结构：模型会严格遵循格式指定，产生可预测的结构。充分利用这一点。',
        '创建可复用模板：为重复的任务保存RTF模板。"客户支持邮件"、"代码审查反馈"、"项目提案"—建立库。',
        '跨模型验证：同一RTF提示词在GPT-4o、Claude和Gemini上应该产生类似结构和质量的输出。',
      ],
    },
    importantNotes: {
      title: '注意事项：使用RTF时的关键考虑',
      content: [
        '使用RTF框架时需要注意以下几点：',
      ],
      items: [
        '复杂推理：如果任务涉及多步推理或需要在得出结论前思考，考虑使用TRACE框架。',
        '避免角色歧义：不要用"专家"这样的词。使用"拥有5年数据科学经验的初创公司首席数据官"。',
        '格式不应过度具体：过度详细的格式（"恰好5段，每段50个字"）会限制模型并产生不自然的输出。',
        '定期更新和测试：修改提示词时，在生产使用之前用样本任务重新测试。',
        '中文用户注意：使用中文时确保角色和任务都用简洁的中文表达，避免冗长的句子。',
      ],
    },
  },
},
  };
