// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: risen-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The RISEN Framework',
      intro: 'The RISEN Framework is an iterative prompt structure that focuses on Refine, Inspect, Summarize, Evaluate, and Next steps so you can systematically improve AI outputs instead of rewriting prompts from scratch each time. PromptQuorum includes the RISEN Framework as a built-in option that any user can select and use directly in the app.',
      publishDate: '2026-03-24',
      readTime: '8 min read',

      seoTitle: 'RISEN Framework 2026: Role, Input, Steps',

      metaDescription: 'RISEN: Role, Input, Steps, Expectation, Notes. Structures prompts for clarity and consistency. Guide with examples.',

      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'The RISEN Framework',
        description: 'How the RISEN Framework (Refine, Inspect, Summarize, Evaluate, Next steps) works, when to use it, and how PromptQuorum offers RISEN as a built-in option.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['RISEN Framework', 'Refine Inspect Summarize Evaluate Next steps', 'prompt frameworks', 'prompt engineering', 'iterative prompts', 'PromptQuorum'],
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
        whatIsRISEN: {
          title: 'What the RISEN Framework Is',
          content: [
            '**The RISEN Framework is a loop-oriented prompt pattern designed for refining drafts, analyses, and plans over multiple iterations with clear checkpoints.** Instead of treating each prompt as a one-off, you use RISEN to walk a model like GPT-4o, Claude 4.6 Sonnet, or Gemini 2.5 Pro through a structured improvement cycle. This makes your workflow more like continuous editing than random trial-and-error.',
            'RISEN is especially useful when you already have a first version—such as a draft article, strategy note, or code snippet—and you want the model to improve it in a controlled, auditable way. Each RISEN step has a distinct purpose, which keeps revisions focused.',
          ],
        },
        fiveComponents: {
          title: 'The Five RISEN Components',
          content: [
            '**A strong RISEN prompt explicitly asks the model to move through five stages: Refine, Inspect, Summarize, Evaluate, and Next steps.** You can use these stages in one longer prompt or in a short series of prompts, depending on how interactive you want the process to be.',
            'A common interpretation looks like this:',
          ],
          items: [
            'Refine: Improve the existing draft according to your goals (for example clarity, structure, or correctness).',
            'Inspect: Identify concrete changes made, such as sections rewritten, details added, or issues fixed.',
            'Summarize: Provide a concise explanation of what the new version now says or does.',
            'Evaluate: Critique the result against explicit criteria (for example tone, accuracy, or alignment with audience).',
            'Next steps: Recommend further edits or follow-up actions for the next iteration.',
          ],
        },
        whyRISENIsUseful: {
          title: 'Why the RISEN Framework Is Useful',
          content: [
            '**The RISEN Framework is useful whenever you want to turn "make this better" into a transparent, repeatable workflow instead of a black box.** It encourages the model not only to generate, but also to analyze and critique its own work.',
            'Practical benefits include:',
          ],
          items: [
            'Clear visibility into what changed between versions.',
            'Structured self-critique that exposes weaknesses or gaps.',
            'A built-in roadmap for the next iteration so you are never stuck wondering what to try next.',
          ],
        },
        badVsGoodExample: {
          title: 'Example: Bad vs Good RISEN Prompt',
          content: [
            '**The difference between an unstructured revision request and a RISEN-based request becomes clear when you apply both to the same draft.** Below is a simple example for improving a product description.',
            '**[Bad Prompt]**',
            '"Make this product description better."',
            '**[Good Prompt]**',
            '"You are a product marketing editor. I will give you a draft product description. Use the RISEN process as follows: Refine: Rewrite the description for clarity and conciseness while keeping all factual details. Target 120–160 words. Inspect: List 5–7 specific edits you made (for example \'clarified benefit X\', \'removed repeated sentence Y\'). Summarize: In 2–3 sentences, explain what the updated description now emphasizes. Evaluate: Rate the new description on a 1–5 scale for clarity, persuasiveness, and alignment with B2B audiences, and justify each rating in one sentence. Next steps: Suggest 3 focused edits I could request in a future prompt to further improve this copy. Draft: [paste draft here]"',
            'The RISEN version turns a vague request into a mini process, producing not just an improved description but also an audit trail and a plan.',
          ],
        },
        whenToUse: {
          title: 'When to Use the RISEN Framework',
          content: [
            '**You should use the RISEN Framework for iterative improvement tasks where you already have material and care about understanding each change.** Typical use cases include:',
          ],
          items: [
            'Refining blog posts, documentation, or help-center articles over several rounds.',
            'Polishing sales decks, pitch scripts, and executive summaries.',
            'Reviewing and improving prompts themselves, especially complex ones used in production.',
            'Iteratively tightening long analyses so they become clearer and more actionable.',
          ],
        },
        howPQImplements: {
          title: 'How PromptQuorum Implements the RISEN Framework',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that offers the RISEN Framework as one of its built-in prompt structures so users can run structured revision cycles across several models at once.** When you choose the RISEN option in PromptQuorum, the app provides labeled fields that correspond to the framework\'s steps and composes them into a single, reusable instruction.',
            'Inside PromptQuorum, the RISEN Framework allows you to:',
          ],
          items: [
            'Plug in an existing draft and apply a pre-structured "Refine–Inspect–Summarize–Evaluate–Next steps" pattern without writing the full meta-prompt yourself.',
            'Send the same RISEN-based instructions to multiple models—such as GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro—and compare how each one refines and critiques the draft.',
            'Save RISEN templates for recurring workflows, for example "blog draft refinement" or "changelog polishing," and share them with your team.',
          ],
        },
        usingRISENWithOthers: {
          title: 'Using RISEN With Other Frameworks',
          content: [
            '**You should combine the RISEN Framework with other frameworks by assigning RISEN to the revision phase and using generation-focused frameworks earlier in the workflow.** A practical pattern is:',
          ],
          items: [
            'Start with a generation framework such as Single Step, CRAFT, or CO-STAR to create the first draft.',
            'Switch to RISEN when you are ready to refine, inspect changes, and plan further edits.',
            'Optionally move to a specification-style framework like SPECS if the final output must follow a strict schema.',
          ],
        },

        howToStart: {
          title: 'How to Use the RISEN Framework',
          numberedItems: [
            '**Refine:** Start with your existing draft, output, or plan. Give it to the model with clear instructions to improve it toward a specific goal — clarity, accuracy, conciseness, or audience alignment. Example: "Rewrite this product description for clarity. Target 120–160 words. Keep all factual details."',
            '**Inspect:** Ask the model to list every specific change it made. Require concrete edit descriptions, not vague summaries. Example: "List 5–7 specific edits you made. For each one, state what you changed and why."',
            '**Summarize:** Ask the model for a concise explanation of what the new version now says or achieves — not a repeat of the content itself, but a meta-level description. Example: "In 2–3 sentences, explain what the updated version now emphasizes and what changed in its focus."',
            '**Evaluate:** Ask the model to rate the revised output against explicit criteria on a 1–5 scale with one-sentence justification per criterion. Example: "Rate the new version on clarity (1–5), persuasiveness (1–5), and B2B audience alignment (1–5). Justify each rating in one sentence."',
            '**Next steps:** Ask the model to recommend 3 focused improvements for the next iteration so you always have a clear direction. Example: "Suggest 3 specific edits I could request in a future prompt to further improve this output."',
          ],
        },
      },
    },
    de: {
  theme: 'Frameworks',
  title: 'Das RISEN Framework',
  intro: 'Das RISEN Framework ist eine iterative Prompt-Struktur, die sich auf Refine, Inspect, Summarize, Evaluate und Next steps konzentriert, damit Sie AI-Ausgaben systematisch verbessern können, statt Prompts jedes Mal von Grund auf neu zu schreiben. PromptQuorum beinhaltet das RISEN Framework als integrierte Option, die jeder Benutzer direkt in der App auswählen und verwenden kann.',
  publishDate: '2026-03-24',
  readTime: '8 min Lesezeit',
  educationalLevel: 'Intermediate',
  primaryTerm: 'RISEN Framework',
  metaDescription: 'Das RISEN Framework für systematische Prompt-Verbesserung: Refine, Inspect, Summarize, Evaluate, Next steps. Anwendung in PromptQuorum.',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Das RISEN Framework',
    description: 'Wie das RISEN Framework (Refine, Inspect, Summarize, Evaluate, Next steps) funktioniert, wann Sie es verwenden und wie PromptQuorum RISEN als integrierte Option anbietet.',
    datePublished: '2026-03-24',
    dateModified: '2026-03-24',
    keywords: ['RISEN Framework', 'Refine Inspect Summarize Evaluate Next steps', 'Prompt Frameworks', 'Prompt Engineering', 'iterative Prompts', 'PromptQuorum'],
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
    teaches: [
      'Strukturierte iterative Verbesserung von Texten und Analysen durch das RISEN Framework',
      'Anwendung der fünf RISEN-Komponenten (Refine, Inspect, Summarize, Evaluate, Next steps)',
      'Integration des RISEN Framework mit PromptQuorum für Multi-Model-Dispatch',
    ],
    assesses: [
      'Verständnis wann das RISEN Framework dem TRACE Framework oder anderen Frameworks vorzuziehen ist',
      'Fähigkeit zur Unterscheidung zwischen unstrukturierten Revisions-Anfragen und RISEN-basierten Anfragen',
      'Kompetenz zur Kombination des RISEN Framework mit anderen Prompt-Engineering-Frameworks',
    ],
  },
  sections: {
    whatIsRISEN: {
      title: 'Was das RISEN Framework ist',
      content: [
        '**Das RISEN Framework ist ein schleifen-orientiertes Prompt-Muster, das für die Verbesserung von Entwürfen, Analysen und Plänen über mehrere Iterationen mit klaren Kontrollpunkten ausgelegt ist.** Statt jeden Prompt als einmalige Aktion zu behandeln, nutzen Sie RISEN, um ein Modell wie GPT-4o, Claude 4.6 Sonnet oder Gemini 2.5 Pro durch einen strukturierten Verbesserungszyklus zu führen. Dies macht Ihren Arbeitsablauf weniger wie zufälliges Ausprobieren und mehr wie kontinuierliche Bearbeitung.',
        'Das RISEN Framework ist besonders wertvoll, wenn Sie bereits eine erste Version haben – etwa einen Entwurfsartikel, Strategienotiz oder Code-Snippet – und Sie das Modell gebeten möchten, diesen auf kontrollierte, nachverfolgbare Weise zu verbessern. Jeder RISEN-Schritt hat einen eindeutigen Zweck, der Revisionen fokussiert hält.',
      ],
    },
    fiveComponents: {
      title: 'Die fünf RISEN-Komponenten',
      content: [
        '**Ein starker RISEN-Prompt fordert das Modell explizit auf, fünf Phasen zu durchlaufen: Refine, Inspect, Summarize, Evaluate und Next steps.** Sie können diese Phasen in einem längeren Prompt oder in einer kurzen Serie von Prompts verwenden, abhängig davon, wie interaktiv Sie den Prozess gestalten möchten.',
        'Eine häufige Auslegung sieht folgendermaßen aus:',
      ],
      items: [
        'Refine: Verbessern Sie den existierenden Entwurf gemäß Ihren Zielen (zum Beispiel Klarheit, Struktur oder Korrektheit).',
        'Inspect: Identifizieren Sie konkrete Änderungen, wie umgeschriebene Abschnitte, hinzugefügte Details oder behobene Probleme.',
        'Summarize: Bieten Sie eine prägnante Erläuterung dessen, was die neue Version nun sagt oder erreicht.',
        'Evaluate: Kritisieren Sie das Ergebnis anhand expliziter Kriterien (zum Beispiel Ton, Genauigkeit oder Ausrichtung auf Publikum).',
        'Next steps: Empfehlen Sie weitere Änderungen oder Folgemaßnahmen für die nächste Iteration.',
      ],
    },
    whyRISENIsUseful: {
      title: 'Warum das RISEN Framework wertvoll ist',
      content: [
        '**Das RISEN Framework ist wertvoll, wenn Sie eine undurchsichtige „Verbesserungs-Black-Box" in einen transparenten, wiederholbaren Arbeitsablauf umwandeln möchten.** Es ermutigt das Modell nicht nur zu generieren, sondern auch seine eigene Arbeit zu analysieren und zu kritisieren.',
        'Praktische Vorteile sind:',
      ],
      items: [
        'Klare Sichtbarkeit darüber, was sich zwischen Versionen geändert hat.',
        'Strukturierte Selbstkritik, die Schwächen oder Lücken offenlegt.',
        'Ein eingebauter Fahrplan für die nächste Iteration, damit Sie nie unsicher sind, was Sie als nächstes versuchen sollten.',
      ],
    },
    badVsGoodExample: {
      title: 'Beispiel: Schwacher vs. starker RISEN-Prompt',
      content: [
        '**Der Unterschied zwischen einer unstrukturierten Revisionsanfrage und einer RISEN-basierten Anfrage wird deutlich, wenn Sie beide auf denselben Entwurf anwenden.** Nachfolgend ein einfaches Beispiel zur Verbesserung einer Produktbeschreibung.',
        '**[Schwacher Prompt]**',
        '"Verbessere diese Produktbeschreibung."',
        '**[Starker Prompt]**',
        '"Du bist ein Produkt-Marketing-Editor. Ich gebe dir einen Produktbeschreibungs-Entwurf. Nutze den RISEN-Prozess wie folgt: Refine: Schreibe die Beschreibung zur Klarheit und Prägnanz um, behalte aber alle sachlichen Details bei. Ziel: 120–160 Wörter. Inspect: Liste 5–7 spezifische Änderungen auf, die du vorgenommen hast (z.B. \'Vorteil X geklärt\', \'wiederholten Satz Y entfernt\'). Summarize: Erläutere in 2–3 Sätzen, worauf die aktualisierte Beschreibung nun den Fokus legt. Evaluate: Bewerte die neue Beschreibung auf einer Skala von 1–5 für Klarheit, Überzeugungskraft und Ausrichtung auf B2B-Zielgruppen, und begründe jede Bewertung in einem Satz. Next steps: Empfehle 3 fokussierte Änderungen, die ich in einem zukünftigen Prompt anfordern könnte, um diese Beschreibung weiter zu verbessern. Entwurf: [Entwurf hier einfügen]"',
        'Die RISEN-Version verwandelt eine vage Anfrage in einen kleinen Prozess, der nicht nur eine verbesserte Beschreibung liefert, sondern auch eine Audit-Spur und einen Plan.',
      ],
    },
    whenToUse: {
      title: 'Wann das RISEN Framework verwendet werden sollte',
      content: [
        '**Verwenden Sie das RISEN Framework für iterative Verbesserungsaufgaben, bei denen Sie bereits Material haben und es wichtig ist, jede Änderung zu verstehen.** Typische Anwendungsfälle sind:',
      ],
      items: [
        'Verbesserung von Blog-Beiträgen, Dokumentation oder Help-Center-Artikeln über mehrere Runden.',
        'Verfeinerung von Verkaufsdecks, Pitch-Scripts und Geschäftszusammenfassungen.',
        'Überprüfung und Verbesserung von Prompts selbst, besonders komplexer Prompts, die in der Produktion verwendet werden.',
        'Iteratives Straffen langer Analysen, damit diese klarer und handlungsorientierter werden.',
      ],
    },
    dachConsiderations: {
      title: 'RISEN im DACH-Kontext: Enterprise und Unternehmensprozesse',
      content: [
        '**Für deutschsprachige Organisationen (DACH: Deutschland, Österreich, Schweiz) bietet das RISEN Framework spezifische Vorteile bei unternehmensinternen Redaktions- und Compliance-Prozessen.** Im DACH-Raum wird formale Dokumentation und strikte Qualitätskontrolle besonders geschätzt.',
        'Besondere Anwendungen:',
      ],
      items: [
        'Unternehmensrichtlinien und interne Standards: RISEN hilft bei der iterativen Verbesserung von Compliance-Dokumenten, Datenschutzerklärungen (DSGVO-konform) und internen Prozesshandbüchern.',
        'Technische Dokumentation für Ingenieure: Deutsche und Schweizer Ingenieurteams profitieren von RISENs strukturierten Feedback-Schleifen bei technischen Spezifikationen.',
        'Redaktionelle Qualitätssicherung: In Verlagen und Medienunternehmen bietet RISEN einen reproduzierbaren Prozess für die Lektorierung von mehrsprachigen Inhalten.',
      ],
    },
    howPQImplements: {
      title: 'Wie PromptQuorum das RISEN Framework implementiert',
      content: [
        '**PromptQuorum ist ein Multi-Model-AI-Dispatch-Tool, das das RISEN Framework als integrierte Prompt-Struktur anbietet, damit Benutzer strukturierte Revisions-Zyklen über mehrere Modelle gleichzeitig durchführen können.** Wenn Sie die RISEN-Option in PromptQuorum auswählen, stellt die App beschriftete Felder zur Verfügung, die den Framework-Schritten entsprechen, und setzt diese in eine einzelne, wiederverwendbare Anweisung um.',
        'Innerhalb von PromptQuorum ermöglicht das RISEN Framework Ihnen:',
      ],
      items: [
        'Einfügen eines existierenden Entwurfs und Anwenden eines vorstrukturierten „Refine–Inspect–Summarize–Evaluate–Next steps"-Musters, ohne das vollständige Meta-Prompt selbst zu schreiben.',
        'Senden derselben RISEN-basierten Anweisungen an mehrere Modelle – wie GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro – und Vergleichen, wie jedes den Entwurf verfeinert und kritisiert.',
        'Speichern von RISEN-Vorlagen für wiederkehrende Arbeitsabläufe, z.B. „Blog-Entwurf-Verbesserung" oder „Changelog-Polierung", und gemeinsame Nutzung mit Ihrem Team.',
      ],
    },
    usingRISENWithOthers: {
      title: 'RISEN mit anderen Frameworks kombinieren',
      content: [
        '**Sie sollten das RISEN Framework mit anderen Frameworks kombinieren, indem Sie RISEN der Revisionsphase zuordnen und generierungsorientierte Frameworks früher im Arbeitsablauf verwenden.** Ein praktisches Muster ist:',
      ],
      items: [
        'Beginnen Sie mit einem Generierungs-Framework wie Single Step, CRAFT oder CO-STAR, um den ersten Entwurf zu erstellen.',
        'Wechseln Sie zu RISEN, wenn Sie bereit sind zu verfeinern, Änderungen zu überprüfen und weitere Änderungen zu planen.',
        'Optional zu einem spezifikationsorientierten Framework wie SPECS wechseln, wenn die endgültige Ausgabe einem strikten Schema entsprechen muss.',
      ],
    },
    howToStart: {
      title: 'So verwenden Sie das RISEN Framework',
      numberedItems: [
        '**Refine (Verfeinern):** Beginnen Sie mit Ihrem vorhandenen Entwurf, Ausgabe oder Plan. Geben Sie ihn dem Modell mit klaren Anweisungen, um ihn auf ein spezifisches Ziel hin zu verbessern — Klarheit, Genauigkeit, Prägnanz oder Zielgruppenpassung. Beispiel: „Schreiben Sie diese Produktbeschreibung für Klarheit um. Ziel: 120–160 Wörter. Behalten Sie alle sachlichen Details bei."',
        '**Inspect (Prüfen):** Fordern Sie das Modell auf, jede spezifische Änderung aufzulisten, die es vorgenommen hat. Fordern Sie konkrete Bearbeitungsbeschreibungen an, keine vagen Zusammenfassungen. Beispiel: „Listen Sie 5–7 spezifische Änderungen auf, die Sie vorgenommen haben. Geben Sie für jede an, was Sie geändert haben und warum."',
        '**Summarize (Zusammenfassen):** Fordern Sie das Modell auf, eine prägnante Erklärung zu geben, was die neue Version nun sagt oder erreicht — nicht eine Wiederholung des Inhalts selbst, sondern eine Meta-Beschreibung. Beispiel: „Erklären Sie in 2–3 Sätzen, worauf sich die aktualisierte Version nun konzentriert und was sich in ihrem Fokus geändert hat."',
        '**Evaluate (Bewerten):** Fordern Sie das Modell auf, die überarbeitete Ausgabe anhand expliziter Kriterien auf einer Skala von 1–5 zu bewerten, mit je einer Begründung pro Kriterium. Beispiel: „Bewerten Sie die neue Version auf Klarheit (1–5), Überzeugungskraft (1–5) und B2B-Zielgruppenpassung (1–5). Begründen Sie jede Bewertung in einem Satz."',
        '**Next steps (Nächste Schritte):** Fordern Sie das Modell auf, 3 fokussierte Verbesserungen für die nächste Iteration zu empfehlen, damit Sie immer eine klare Richtung haben. Beispiel: „Empfehlen Sie 3 spezifische Bearbeitungen, die ich in einem zukünftigen Prompt anfordern könnte, um diese Ausgabe weiter zu verbessern."',
      ],
    },
    risenAndLlmComparison: {
      title: 'RISEN als Vergleichsmechanismus zwischen Modellen',
      content: [
        '**Eine weniger bekannte Stärke des RISEN Framework ist seine Fähigkeit, systematische Unterschiede zwischen verschiedenen LLM-Anbietern zu offenbaren.** Wenn Sie denselben RISEN-Prompt an GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro senden, werden die unterschiedlichen Revisionsansätze jedes Modells deutlich.',
        'Praktische Beobachtungen:',
      ],
      items: [
        'Claude neigt dazu, tiefergehende, strukturiertere Inspektionen durchzuführen, was für detaillierte technische Verbesserungen wertvoll ist.',
        'GPT-4o erzeugt oft prägnantere Zusammenfassungen, die für schnelle iterative Zyklen nützlich sind.',
        'Gemini 2.5 Pro fokussiert häufiger auf benutzererlebnis-zentrierte Evaluierungen, was für kundenorientierte Inhalte hilfreich ist.',
      ],
    },
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      { '@type': 'Question', 'name': 'Unterscheidet sich RISEN vom TRACE Framework? Wann sollte ich welches verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACE betont explizites Reasoning und Begründung (Think–Reason–Analyze–Conclude–Explain), während RISEN sich auf iterative Verbesserung und Audit-Trails konzentriert. Verwenden Sie TRACE, wenn Sie das Denken des Modells verstehen müssen; verwenden Sie RISEN, wenn Sie einen Entwurf schrittweise verfeinern möchten.' } },
      { '@type': 'Question', 'name': 'Kann ich RISEN in einem einzelnen langen Prompt verwenden oder sollte ich mehrere Prompts senden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Beide Ansätze funktionieren. Ein einziger langer Prompt ist schneller; mehrere aufeinanderfolgende Prompts ermöglichen Ihnen, bei Bedarf zu pausieren und Feedback zu geben. Für maximale Kontrolle und Transparenz senden viele Benutzer die RISEN-Schritte separat, was auch die Token-Kosten sichtbar macht.' } },
      { '@type': 'Question', 'name': 'Wie integriere ich RISEN mit meinen bestehenden Prompt-Workflows in PromptQuorum?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum speichert RISEN-Prompts als Vorlagen. Sie können eine Vorlage für einen bestimmten Arbeitsablauf erstellen (z.B. „Blog-Verbesserung"), sie mit Ihrem Team teilen und sie jedes Mal abrufen, wenn Sie einen ähnlichen Entwurf verfeinern müssen. Dies spart Zeit und stellt Konsistenz sicher.' } },
      { '@type': 'Question', 'name': 'Ist RISEN für Anfänger in Prompt Engineering geeignet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Obwohl RISEN mit dem Zweck entwickelt wurde, fortgeschrittene Verbesserungs-Workflows zu unterstützen, ist die Struktur (Refine–Inspect–Summarize–Evaluate–Next steps) intuitiv und einsteigerfreundlich. PromptQuorums vorausgefüllte Felder machen es noch einfacher.' } },
      { '@type': 'Question', 'name': 'Wie verhindere ich, dass sich die RISEN-Revisionen endlos wiederholen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Setzen Sie explizite Endbedingungen. Definieren Sie vor dem Start klar, wie viele Iterationen Sie durchführen werden und welche Erfolgskriterien Sie festlegen. Beispiel: „Führe maximal 3 RISEN-Zyklen durch oder stoppe, wenn die Qualitätsbewertung ≥4,5 erreicht."' } },
      { '@type': 'Question', 'name': 'Welche DSGVO-Überlegungen gelten bei der Verwendung von RISEN mit Cloud-Modellen in Deutschland?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Wenn Sie vertrauliche interne Dokumente über RISEN verfeinern, seien Sie vorsichtig mit Cloud-APIs (OpenAI, Google, Anthropic verarbeiten Eingaben außerhalb der EU). Verwenden Sie local gehostete Modelle (Ollama, LM Studio) über PromptQuorum für DSGVO-sensitive Arbeitsabläufe, oder nutzen Sie Anthropic Claude mit EU-spezifischen Angeboten.' } },
    ],
  },
},
    fr: {
      theme: 'Frameworks',
      title: 'Le Framework RISEN',
      intro: 'Le Framework RISEN est une structure itérative de prompt qui structure la génération d\'IA autour de cinq étapes : Refine (Affiner), Inspect (Inspecter), Summarize (Synthétiser), Evaluate (Évaluer) et Next steps (Prochaines étapes). Plutôt que de recommencer un prompt de zéro, vous rafinez systématiquement les résultats du modèle pour une meilleure qualité à chaque étape. PromptQuorum intègre nativement le Framework RISEN comme option directement accessible dans l\'application.',
      publishDate: '2026-03-24',
      readTime: '7 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'RISEN Framework',
      metaDescription: 'Maîtrisez le Framework RISEN (Refine, Inspect, Summarize, Evaluate, Next steps) pour améliorer systématiquement les outputs IA. Exemples pratiques et cas d\'usage.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Le Framework RISEN',
        description: 'Comment fonctionne le Framework RISEN (Refine, Inspect, Summarize, Evaluate, Next steps), quand l\'utiliser, et comment PromptQuorum l\'intègre nativement.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['Framework RISEN', 'frameworks de prompts', 'ingénierie des prompts', 'prompts itératifs', 'PromptQuorum', 'modèles de langage'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Ingénierie des prompts' },
          { '@type': 'Thing', name: 'Frameworks de prompts' },
          { '@type': 'Thing', name: 'Modèles de langage volumineux' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
        teaches: 'Comment utiliser une approche itérative pour améliorer les résultats des modèles IA à travers des cycles Refine (Affiner)-Inspect (Inspecter)-Summarize (Synthétiser)-Evaluate (Évaluer)-Next steps (Prochaines étapes)',
        assesses: 'Capacité à structurer des cycles d\'amélioration de prompts, identifier les insuffisances, et optimiser les outputs pour la qualité et la pertinence',
      },
      sections: {
        whatIsRISEN: {
          title: 'Qu\'est-ce que le Framework RISEN',
          content: [
            '**Le Framework RISEN est une structure de prompt itérative qui organise le raffinement en cinq étapes distinctes pour améliorer progressivement les résultats de l\'IA.** Au lieu de réécrire vos prompts à zéro, vous travaillez de manière progressive sur une version existante pour obtenir une meilleure qualité.',
            'Les cinq étapes du Framework RISEN sont :',
          ],
          items: [
            'Refine (Affiner) : Reprendre la réponse précédente et l\'améliorer selon vos objectifs (clarté, structure, exactitude).',
            'Inspect (Inspecter) : Examiner en détail chaque changement concret — sections réécrites, détails ajoutés, problèmes résolus.',
            'Summarize (Synthétiser) : Résumer en peu de mots ce que la version révisée réalise maintenant.',
            'Evaluate (Évaluer) : Mesurer la qualité selon des critères explicites tels que le ton, l\'exactitude et la pertinence pour l\'audience.',
            'Next steps (Prochaines étapes) : Recommander d\'autres modifications ou actions de suivi pour la prochaine itération.',
          ],
        },
        whyRISENIsUseful: {
          title: 'Pourquoi le Framework RISEN est utile',
          content: [
            '**Le Framework RISEN excelle quand vous cherchez à affiner progressivement une réponse plutôt que de la générer parfaite du premier coup.** C\'est particulièrement efficace pour les contenus longs, les analyses complexes, ou les cas où la qualité dépend des itérations.',
            'Avantages clés :',
          ],
          items: [
            'Transparence : Chaque étape documente ce qui change et pourquoi.',
            'Contrôle : Vous restez actif dans chaque boucle, pas dépendant d\'une génération initiale.',
            'Économie de tokens : Plutôt que de régénérer entièrement, vous affinez partiellement.',
            'Qualité progressive : Chaque cycle améliore le résultat vers un standard d\'excellence.',
          ],
        },
        fiveComponents: {
          title: 'Les cinq composants en détail',
          content: [
            '**Un bon prompt RISEN définit pour le modèle exactement ce qu\'il doit faire à chaque étape afin que les améliorations soient prévisibles et cumulables.**',
          ],
          items: [
            'Refine (Affiner) : « Relis ta réponse précédente. Quelles sections manquent de profondeur ? Où pourrais-tu ajouter des exemples concrets ? »',
            'Inspect (Inspecter) : « Évalue chaque paragraphe selon ces trois critères : clarté, précision technique, pertinence pour l\'audience cible. Identifie les trois sections les plus faibles. »',
            'Summarize (Synthétiser) : « Résume tes conclusions. Quels changements te semblent prioritaires ? »',
            'Evaluate (Évaluer) : « Note ta version révisée sur une échelle de 1 à 5 selon ces critères : complétude, rigueur, utilité pratique. »',
            'Next steps (Prochaines étapes) : « Que devrais-je faire ensuite ? Élargir ce sujet ? Approfondir une section spécifique ? »',
          ],
        },
        badVsGoodExample: {
          title: 'Exemple : Mauvais vs bon prompt RISEN',
          content: [
            '**La valeur du Framework RISEN devient évidente en comparant une demande générique à une demande structurée RISEN pour la même tâche.**',
            '**[Mauvais prompt]**',
            '"Améliore ce texte sur l\'IA générative."',
            '**[Bon prompt RISEN]**',
            '"Tu es un éditeur technique spécialisé en IA. Applique la méthode RISEN à ce texte. Refine (Affiner) : Améliore ce texte pour clarté et structure. Inspect (Inspecter) : Identifie tous les changements concrets que tu as faits. Summarize (Synthétiser) : Quel est le problème central à résoudre ? Evaluate (Évaluer) : Note ta version sur une échelle 1–5 en précision et lisibilité. Next steps (Prochaines étapes) : Devrais-je ajouter une section sur les cas d\'usage en France ou dans l\'UE ? Texte à améliorer : [insérer ici]"',
            'La version RISEN structure chaque étape pour que le modèle opère de manière progressive et intentionnelle.',
          ],
        },
        francophoneConsiderations: {
          title: 'Considérations pour les utilisateurs francophones',
          content: [
            '**Le Framework RISEN s\'adapte particulièrement bien aux besoins des équipes en France, Belgique, Canada et Suisse, notamment dans les secteurs exigeant une conformité réglementaire ou une rigueur éditoriale.**',
          ],
          items: [
            'Droit d\'auteur et attribution : Si vous révisez du contenu pour publication, documentez chaque étape RISEN pour justifier les modifications auprès de vos rédacteurs.',
            'Conformité RGPD : Lorsque vous traitez du texte contenant des données personnelles, la phase Inspecter doit inclure une vérification d\'anonymisation.',
            'Accès multilingue : PromptQuorum intègre le Framework RISEN pour tous les modèles, incluant les options French-aware comme des modèles multilingues haute performance.',
            'Contrôle éditorial : Appliquez RISEN pour affiner des traductions, vérifier l\'exactitude technique, ou valider la pertinence culturelle avant publication.',
          ],
        },
        whenToUse: {
          title: 'Quand utiliser le Framework RISEN',
          content: [
            '**Vous devriez utiliser le Framework RISEN quand la qualité finale prime sur la vitesse, notamment pour les contenus éditoriaux, analyses, ou documents importants.**',
          ],
          items: [
            'Rédaction et édition : Articles, documentation, contenu marketing.',
            'Analyse : Évaluations techniques, rapports, analyse de données.',
            'Conception : Spécifications produit, plans de projet, stratégies.',
            'Validation : Vérification de conformité, audits, revues d\'assurance qualité.',
          ],
        },
        howPQImplements: {
          title: 'Comment PromptQuorum intègre le Framework RISEN',
          content: [
            '**PromptQuorum est un outil de dispatch multi-modèles qui intègre nativement le Framework RISEN, vous permettant de structurer des cycles d\'amélioration et d\'envoyer le même prompt affiné à plusieurs modèles en parallèle.**',
            'Capacités clés :',
          ],
          items: [
            'Templates RISEN : Sauvegardez vos séquences Refine–Inspect–Summarize–Evaluate–Next steps comme templates réutilisables.',
            'Comparaison inter-modèles : Envoyez le même cycle RISEN à GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro pour voir comment chaque modèle améliore différemment.',
            'Historique itératif : Conservez un enregistrement complet de chaque itération pour documenter le processus d\'amélioration.',
          ],
        },
        usingRISENWithOthers: {
          title: 'Combiner le Framework RISEN avec d\'autres frameworks',
          content: [
            '**Le Framework RISEN fonctionne mieux quand on le combine avec d\'autres frameworks : utilisez un framework génératif d\'abord, puis passez à RISEN pour l\'amélioration.**',
          ],
          items: [
            'Utiliser Single Step ou CO-STAR pour générer du contenu initial.',
            'Passer à RISEN pour raffiner et améliorer progressivement.',
            'Finir optionnellement avec SPECS si le résultat doit respecter un schéma strict.',
          ],
        },
        howToStart: {
          title: 'Comment utiliser le Framework RISEN',
          numberedItems: [
            '**Refine (Affiner) :** Commencez avec votre brouillon, résultat ou plan existant. Donnez-le au modèle avec des instructions claires pour l\'améliorer vers un objectif spécifique — clarté, précision, concision ou pertinence pour l\'audience. Exemple : « Réécrivez cette description de produit pour la clarté. Ciblez 120–160 mots. Gardez tous les détails factuels. »',
            '**Inspect (Inspecter) :** Demandez au modèle de lister chaque changement spécifique qu\'il a effectué. Exigez des descriptions d\'édits concrètes, pas des résumés vagues. Exemple : « Listez 5–7 édits spécifiques que vous avez effectués. Pour chacun, déclarez ce que vous avez changé et pourquoi. »',
            '**Summarize (Synthétiser) :** Demandez au modèle une explication concise de ce que la nouvelle version dit ou réalise maintenant — pas une répétition du contenu lui-même, mais une description au niveau méta. Exemple : « En 2–3 phrases, expliquez ce sur quoi la version mise à jour met maintenant l\'accent et ce qui a changé dans son orientation. »',
            '**Evaluate (Évaluer) :** Demandez au modèle de noter la sortie révisée selon des critères explicites sur une échelle 1–5 avec une justification d\'une phrase par critère. Exemple : « Notez la nouvelle version sur la clarté (1–5), la persuasion (1–5) et l\'alignement avec l\'audience B2B (1–5). Justifiez chaque note en une phrase. »',
            '**Next steps (Prochaines étapes) :** Demandez au modèle de recommander 3 améliorations ciblées pour la prochaine itération afin que vous ayez toujours une direction claire. Exemple : « Suggérez 3 édits spécifiques que je pourrais demander dans un futur prompt pour améliorer davantage cette sortie. »',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Quelle est la différence entre RISEN et TRACE ? Quand utiliser l\'un ou l\'autre ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACE met l\'accent sur le raisonnement explicite (Penser–Justifier–Analyser–Conclure–Expliquer), tandis que RISEN se concentre sur l\'amélioration itérative. Utilisez TRACE si vous avez besoin de comprendre la logique du modèle ; utilisez RISEN si vous affinez progressivement un résultat.' } },
          { '@type': 'Question', 'name': 'Puis-je utiliser RISEN dans un seul prompt long ou dois-je envoyer plusieurs prompts ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Les deux approches fonctionnent. Un seul prompt est plus rapide ; plusieurs prompts vous permettent de vous arrêter et de donner des retours. Pour le contrôle maximal, nombreux utilisateurs envoient les étapes RISEN séparément, ce qui rend aussi les coûts en tokens transparents.' } },
          { '@type': 'Question', 'name': 'Comment intégrer RISEN à mon workflow de prompts existant dans PromptQuorum ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Créez un template RISEN pour votre cas d\'usage (par exemple « Amélioration d\'article »), partagez-le avec votre équipe, et réutilisez-le pour chaque nouveau contenu. Cela économise du temps et garantit la cohérence.' } },
          { '@type': 'Question', 'name': 'Le Framework RISEN convient-il aux débutants en ingénierie des prompts ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Bien que conçu pour des workflows avancés, la structure (Refine–Inspect–Summarize–Evaluate–Next steps) est intuitive et amicale. Les champs pré-remplis de PromptQuorum rendent l\'adoption encore plus facile.' } },
          { '@type': 'Question', 'name': 'Comment éviter que les cycles RISEN ne se répètent indéfiniment ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Définissez explicitement les conditions d\'arrêt avant de commencer. Précisez le nombre de cycles à effectuer et les critères de succès. Exemple : « Effectue au maximum 3 cycles RISEN ou arrête si le score de qualité ≥ 4,5. »' } },
          { '@type': 'Question', 'name': 'Quelles sont les implications RGPD lors de l\'utilisation de RISEN avec des modèles en cloud en France ou en UE ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Si vous affinez des documents confidentiels, soyez prudent avec les APIs cloud (OpenAI, Google traitent les données en dehors de l\'UE). Utilisez des modèles auto-hébergés (Ollama, LM Studio) via PromptQuorum pour les workflows sensibles au RGPD, ou explorez les offres Anthropic adaptées à l\'UE.' } },
        ],
      },
    },
    ja: {
      theme: 'Frameworks',
      title: 'RISENフレームワーク',
      intro: 'RISENフレームワークは、プロンプトの出力を体系的に改善するための5段階の反復構造です。Refine（洗練）、Inspect（検査）、Summarize（要約）、Evaluate（評価）、Next steps（次のステップ）の流れを通じて、ゼロから書き直さずに段階的に品質を高めます。PromptQuorumはRISENフレームワークをネイティブに統合しており、アプリ内で直接選択して使用できます。',
      publishDate: '2026-03-24',
      readTime: '8分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'RISENフレームワーク',
      metaDescription: 'RISENフレームワーク（洗練・検査・要約・評価・次のステップ）を使ってAIの出力を体系的に改善する方法。実践的な例と活用シーン。',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'RISENフレームワーク',
        description: 'RISENフレームワーク（洗練・検査・要約・評価・次のステップ）の使い方、活用タイミング、PromptQuorumでの実装方法。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['RISENフレームワーク', 'プロンプトフレームワーク', 'プロンプト・エンジニアリング', '反復的なプロンプト', 'PromptQuorum', '大規模言語モデル'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'プロンプト・エンジニアリング' },
          { '@type': 'Thing', name: 'プロンプトフレームワーク' },
          { '@type': 'Thing', name: '大規模言語モデル' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
        teaches: 'RISENフレームワークの5段階（修正→検査→要約→評価→次のステップ）を使ってAIの出力を反復的に改善する方法',
        assesses: 'プロンプトの改善サイクルを構造化できる能力、出力の弱点を特定する力、品質基準に基づいて最適化する技術',
      },
      sections: {
        whatIsRISEN: {
          title: 'RISENフレームワークとは何か',
          content: [
            '**RISENフレームワークは、AIの出力を5つの明確なステップで体系的に改善するための反復構造です。** ゼロから作り直すのではなく、既存の出力に対して段階的に品質を上げていきます。',
            'RISENの5ステップ：',
          ],
          items: [
            'Refine（洗練）：前の出力を見直し、改善できる点を特定する',
            'Inspect（検査）：不足や改善点を詳しく調べる',
            'Summarize（要約）：気づきをまとめ、次のステップに活かす',
            'Evaluate（評価）：明確な基準で品質を測定する',
            'Next steps（次のステップ）：次の方向性や改善方針を定義する',
          ],
        },
        whyRISENIsUseful: {
          title: 'RISENフレームワークが有効な理由',
          content: [
            '**RISENフレームワークは、最初から完璧な出力を求めるのではなく、段階的な改善を重視する場合に特に効果的です。** 長い文章、複雑な分析、品質が繰り返しの最適化に依存するケースで力を発揮します。',
            '主なメリット：',
          ],
          items: [
            '透明性：何がどう変わったか、なぜそうしたのかが記録される',
            'コスト効率：全文の再生成ではなく、部分的な改良なのでトークン消費が少ない',
            '品質の段階的向上：各サイクルで出力が目標に近づく',
            'ユーザーの主導性：各段階でユーザーが能動的に関与できる',
          ],
        },
        fiveComponents: {
          title: 'RISENの5つのステップを詳しく解説',
          content: [
            '**良いRISENプロンプトは、各ステップでモデルが何をすべきかを明確に定義し、改善が予測可能で累積的になるようにしています。**',
          ],
          items: [
            'Refine：「前の回答を読み直して。どこが浅い？具体例が足りない部分は？」',
            'Inspect：「次の3つの基準で各段落を評価しろ：明確さ、技術的正確さ、対象読者への適切さ。最も弱い3つのセクションを特定しろ。」',
            'Summarize：「改善の結論をまとめろ。優先度が高い変更は何か？」',
            'Evaluate：「修正版を1～5で評価しろ。評価基準：完全性、厳密性、実用性。」',
            'Next steps：「次は何をするべき？テーマを広げる？特定セクションを深掘りする？」',
          ],
        },
        badVsGoodExample: {
          title: '実例：悪いプロンプト vs 良いRISENプロンプト',
          content: [
            '**RISENフレームワークの価値は、汎用的な指示と構造化されたRISEN指示を同じタスクで比較するとはっきり見えます。**',
            '**【不十分なプロンプト】**',
            '"このAI生成に関するテキストを改善して。"',
            '**【良いRISENプロンプト】**',
            '"あなたはテクニカルライターでAIが専門。このテキストにRISENメソッドを適用しろ。Refine：最も深さが足りない3つのセクションを指摘しろ。Inspect：各段落をCEO向けの分かりやすさで評価しろ（1～5段階）。Summarize：中心的な問題は何か？Evaluate：修正版を正確性と可読性で採点しろ（1～5）。Next steps：日本の企業事例を追加すべき？それとも規制面での考慮を加えるべき？改善対象のテキスト：【ここに挿入】"',
            'RISENプロンプトは各ステップを構造化し、モデルが意図的かつ段階的に作業できるようにします。',
          ],
        },
        japaneseConsiderations: {
          title: '日本ユーザーのための活用ポイント',
          content: [
            '**RISENフレームワークは特に、品質基準が厳しい日本企業や、複数の改稿を経るメディア・出版業界に向いています。**',
            '注意点と実用的な活用法：',
          ],
          items: [
            'トーン・敬語の統一：改善プロセスで敬語が一貫しているか、フォーマルさのレベルが安定しているか確認する段階を加える',
            '文化的背景：例えば説明文の順序や論理展開が日本読者に自然か、プロンプトの「Summarize」段階で文化的な妥当性をチェック',
            'ドメイン専門用語：技術用語・業界用語が正確に使われているか、各段階で確認する',
            'エージェント企業での導入：複数の校閲者が関わるプロセスで、RISENの各ステップを担当者間で共有し、編集履歴を保存する',
          ],
        },
        whenToUse: {
          title: 'RISENフレームワークを使うべき場面',
          content: [
            '**RISENフレームワークは、スピードより品質を重視する場合、特に重要なコンテンツやドキュメントに適しています。**',
          ],
          items: [
            'ライティング・編集：記事、マニュアル、マーケティングコンテンツの改稿',
            '分析業務：技術評価、ビジネスレポート、データ解析の検証',
            '企画・設計：要件定義、プロジェクト計画、経営戦略の構想',
            'コンプライアンス：規制対応の確認、品質監査、内部監査',
          ],
        },
        howPQImplements: {
          title: 'PromptQuorumでのRISEN実装',
          content: [
            '**PromptQuorumは複数モデル対応のAIディスパッチツールで、RISENフレームワークをネイティブに統合しています。同じプロンプトを複数モデルに並行送信し、改善結果を比較できます。**',
            '主な機能：',
          ],
          items: [
            'テンプレート化：Refine→Inspect→Summarize→Evaluate→Next stepsの流れをテンプレートとして保存・再利用',
            'モデル間比較：GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Proに同じRISENサイクルを並行実行し、モデル固有の改善パターンを分析',
            '改版履歴：各イテレーション全体の記録を保持し、改善プロセスの透明性を確保',
          ],
        },
        recommendedUsage: {
          title: 'おすすめの使い方・ベストプラクティス',
          content: [
            '**RISENフレームワークを最大限活用するには、段階ごとに異なるプロンプト・エンジニアを配置したり、評価基準を明確に定義したりすることが効果的です。**',
          ],
          items: [
            '評価基準の事前定義：Evaluate段階で「正確性：5点、可読性：5点、実用性：5点」など基準を明記する',
            '複数人体制：Refine段階は主担当者、Inspect段階は別のレビュアー、Evaluate段階は責任者という分業で客観性を上げる',
            'ドメイン固有のプロンプト：業界ごと（金融・製造・メディア）に「何を重視するか」をカスタマイズしたRISENテンプレートを作成',
            'フィードバック統合：各サイクルのモデル出力に対して人間からのフィードバックを組み込み、次のRefine段階に反映',
          ],
        },
        usingRISENWithOthers: {
          title: '他のフレームワークとの組み合わせ',
          content: [
            '**RISENフレームワークは他の生成型フレームワークと組み合わせて使うことで、初期生成から最終品質保証まで一貫したプロセスを構築できます。**',
          ],
          items: [
            'Single StepやCO-STARで初期生成 → RISENで段階的な改善',
            'RISENで複数回改稿 → SPECSで最終フォーマット統一',
            'TRACEで論理検証 → RISENで表現の磨きあげ',
          ],
        },
        howToStart: {
          title: 'RISENフレームワークを実際に使う手順',
          numberedItems: [
            '**Refine（修正・洗練）：** 既存のドラフト、出力、または計画から始めます。明確な指示を与えて、特定の目標——明確性、正確性、簡潔性、または対象者への適切性——に向かって改善させます。例：「この製品説明を明確性のために書き直してください。120～160語を目指してください。すべての事実情報を保持してください。」',
            '**Inspect（検査・点検）：** モデルに、実施した具体的な変更をすべてリストアップさせます。曖昧な要約ではなく、具体的な編集説明を求めます。例：「実施した5～7個の具体的な編集をリストアップしてください。それぞれについて、何を変更し、なぜそうしたのかを述べてください。」',
            '**Summarize（要約）：** モデルに、新しいバージョンが何を言っているか、または何を達成しているかについて簡潔な説明を求めます——コンテンツそのものの繰り返しではなく、メタレベルの説明です。例：「2～3文で、更新されたバージョンが今何に焦点を当てているか、そしてその焦点がどう変わったかを説明してください。」',
            '**Evaluate（評価）：** モデルに、修正された出力を1～5スケールの明確な基準に対して評価させ、各基準について1文の正当化を求めます。例：「新しいバージョンを明確性（1～5）、説得力（1～5）、B2B対象者への適合性（1～5）で評価してください。各評価を1文で正当化してください。」',
            '**Next steps（次のステップ）：** モデルに、次の反復のための3つの焦点を絞った改善を推奨させ、常に明確な方向性を持つようにします。例：「次のプロンプトで要求できる3つの具体的な編集を提案してください。この出力をさらに改善するためです。」',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'RISENとTRACEの違いは？どちらをいつ使う？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACEは思考プロセスの可視化に重点を置きます（考える→説明する→分析する→結論→説明）。RISENは既存の出力を段階的に磨くことに特化しています。論理を理解したい場合はTRACE、品質を段階的に高めたい場合はRISENを選びます。' } },
          { '@type': 'Question', 'name': 'RISENの5ステップを1つの長いプロンプトで行うべき？それとも分割すべき？', 'acceptedAnswer': { '@type': 'Answer', 'text': '両方のアプローチが有効です。1つの長いプロンプトは速く済みますが、複数に分割すると各段階で確認・調整でき、透明性が上がります。トークン消費を可視化したい場合は分割がお勧めです。' } },
          { '@type': 'Question', 'name': 'PromptQuorumで既存のプロンプトワークフローにRISENを統合するには？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorumでRISENテンプレートを作成し（例：「ブログ記事改稿」用）、チームと共有してください。同じドキュメント種ごとに呼び出すたびにテンプレートを再利用し、一貫性を確保します。' } },
          { '@type': 'Question', 'name': 'RISENはプロンプト初心者にも向いている？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。5ステップの構造は直感的で分かりやすく、PromptQuorumの事前入力フィールドがあれば、初心者でもすぐに実運用できます。' } },
          { '@type': 'Question', 'name': 'RISENのサイクルが無限ループしないようにするには？', 'acceptedAnswer': { '@type': 'Answer', 'text': '開始前に終了条件を明確に定義します。例：「最大3サイクル実施」「品質スコアが4.5以上で終了」など。Evaluate段階で明確な終了基準を設定することが重要です。' } },
          { '@type': 'Question', 'name': '日本国内での利用で、個人情報を含むテキストでRISENを使う際の注意点は？', 'acceptedAnswer': { '@type': 'Answer', 'text': '機密情報を扱う場合、クラウドAPIの利用を避け、Ollama・LM Studioなどの自社サーバ型モデルをPromptQuorum経由で実行してください。個人情報保護方針との整合性を事前に確認してください。' } },
        ],
      },
    },
    zh: {
      theme: 'Frameworks',
      title: 'RISEN框架',
      intro: 'RISEN框架是一个5阶段的迭代结构，专门用于系统性地改进AI输出。通过精炼（Refine）、检查（Inspect）、总结（Summarize）、评估（Evaluate）和下一步（Next steps）这五个阶段，你可以逐步提升内容质量，而不用每次都从零开始重写。PromptQuorum原生集成了RISEN框架，可以在应用中直接选择和使用。',
      publishDate: '2026-03-24',
      readTime: '8分钟阅读',
      educationalLevel: 'Intermediate',
      primaryTerm: 'RISEN框架',
      metaDescription: '掌握RISEN框架（修正、检查、总结、评估、下一步），系统性改进AI生成内容。包含实用案例和中国企业应用方案。',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'RISEN框架',
        description: 'RISEN框架（修正、检查、总结、评估、下一步）的工作原理、适用场景、以及PromptQuorum中的实现方式。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['RISEN框架', '提示词框架', '提示词工程', '迭代式提示词', 'PromptQuorum', '大语言模型'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: '提示词工程' },
          { '@type': 'Thing', name: '提示词框架' },
          { '@type': 'Thing', name: '大语言模型' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
        teaches: '如何使用RISEN框架的5个阶段（修正→检查→总结→评估→下一步）来系统性地改进AI生成的内容',
        assesses: '能否结构化地进行提示词改进循环、识别输出的薄弱环节、基于明确标准优化内容质量',
      },
      sections: {
        whatIsRISEN: {
          title: 'RISEN框架是什么',
          content: [
            '**RISEN框架是一套5阶段的迭代系统，用来逐步改进AI生成的内容。** 与其每次都推倒重来，不如通过结构化的反复修改来提升质量。',
            'RISEN的5个阶段是：',
          ],
          items: [
            'Refine（精炼）：重新审视前一次的输出，找出能改进的地方',
            'Inspect（检查）：深入检查不足之处和问题',
            'Summarize（总结）：总结发现和改进方向，为下一轮做准备',
            'Evaluate（评估）：根据明确的标准给输出打分',
            'Next steps（下一步）：定义改进方向或后续行动',
          ],
        },
        whyRISENIsUseful: {
          title: 'RISEN框架的优势',
          content: [
            '**RISEN框架在需要逐步精化而不是一次生成完美输出的场景中表现突出。** 对于长文本、复杂分析或质量依赖反复打磨的任务特别有效。',
            '核心优势：',
          ],
          items: [
            '透明度高：每个改进步骤都被记录，清楚地显示什么变了、为什么变',
            '成本低：不需要完全重新生成，只修改和优化关键部分，省钱省token',
            '质量可控：通过明确的评估标准，一步步逼近目标质量',
            '团队协作：各阶段可由不同人员负责，提高客观性',
            '学习曲线缓：对新手也很友好，框架本身就教会你如何改进',
          ],
        },
        fiveComponents: {
          title: 'RISEN的5个阶段详解',
          content: [
            '**好的RISEN提示词会对每个阶段的任务做明确定义，确保改进过程可预测且累积有效。**',
          ],
          items: [
            'Refine：「重读你上一次的回答。哪些地方表述不清？哪里需要加具体案例？」',
            'Inspect：「用以下3个标准评估每个段落：表述清晰度、技术准确性、对目标读者的相关性。指出最薄弱的3个部分。」',
            'Summarize：「总结你的评估结果。哪些改进是最优先的？」',
            'Evaluate：「用1-5分给修改后的版本打分。标准包括：完整性、严谨性、实用性。」',
            'Next steps：「下一步应该做什么？扩展某个主题？深入某个重点？添加案例？」',
          ],
        },
        badVsGoodExample: {
          title: '对比：普通提示词 vs 好的RISEN提示词',
          content: [
            '**把普通要求和结构化的RISEN要求应用在同一个任务上，你就能看到RISEN的威力。**',
            '**【不结构化的提示词】**',
            '"请改进这篇关于生成式AI的文章。"',
            '**【好的RISEN结构提示词】**',
            '"你是资深的AI技术编辑。请对这篇文章应用RISEN方法。Refine：指出表述不清的3个地方。Inspect：按照这些标准评估每个段落：对非技术人员的易理解程度（1-5分）、技术准确性（1-5分）、实用价值（1-5分）。Summarize：在这些发现基础上，最核心的问题是什么？Evaluate：给修改版打分（准确性1-5、可读性1-5）。Next steps：我们是否需要加入阿里巴巴通义千问或腾讯混元的应用案例？要不要添加一个针对国内企业的合规性提示？要改进的文章：【在此插入】"',
            'RISEN版本不只是告诉模型「去改进」，而是精确指导每一步应该做什么。',
          ],
        },
        chinaAdaptation: {
          title: '中国企业的RISEN应用方案',
          content: [
            '**RISEN框架特别适合需要严格质量管理的中国企业和机构，比如大型科技公司、金融机构、内容平台。** 以下是针对中国上下文的实用建议：',
          ],
          items: [
            '互联网大厂应用：像阿里、腾讯、字节跳动这样的大型技术公司，内容改稿流程可以用RISEN来标准化。Refine阶段由初级编辑完成，Inspect由资深审核，Evaluate由管理层确认最终质量。',
            '金融和合规考量：如果你的内容涉及金融产品或企业合规，Inspect阶段必须加入「是否符合相关监管要求（如《网络安全法》《数据安全法》）」这一检查项。',
            '数据属地化：若使用云API（如OpenAI、Google），要注意数据跨境问题。建议在Refine阶段之前确认数据处理位置，或改用本地部署的模型（如通过PromptQuorum使用开源模型）。',
            '多语言和地域适配：Summarize阶段中明确指出是否需要针对中国市场、港澳、台湾或东南亚华语地区的表述调整。',
            '企业内部知识库集成：Refine阶段可以加入「参考公司已发布的类似内容，确保表述风格一致」这一要求。',
          ],
        },
        whenToUse: {
          title: '何时使用RISEN框架',
          content: [
            '**当质量比速度更重要时，RISEN就是你的选择。特别是对于正式发布的内容、重要决策的分析、需要多轮审核的文档。**',
          ],
          items: [
            '内容创作和编辑：文章、产品文档、营销文案需要多稿打磨',
            '数据分析和报告：财务报表、市场研究、数据洞察需要经过检验',
            '战略和规划：产品规划、项目计划、业务策略需要反复推敲',
            '合规审查：政策文件、法律意见、安全评估需要严格把关',
            '跨部门协作：需要多个团队参与审核和确认的任务',
          ],
        },
        practicalTips: {
          title: '实用建议：如何高效使用RISEN',
          content: [
            '**RISEN的威力在细节执行。这些实用建议能帮你更好地应用这个框架：**',
          ],
          items: [
            '提前定义评估标准：不要到Evaluate阶段才想「怎么打分」。开始前就列出3-5个具体的评估维度（如准确性、清晰度、完整性），用数字化标准。',
            '分工配合：Refine可以由内容作者自己完成，Inspect由同行评审，Evaluate由管理者最终确认。分工不但提高客观性，还能发现单人看不到的问题。',
            '用模板固化流程：为常见的内容类型（如技术文档、营销文案、数据报告）制作RISEN模板。PromptQuorum可以保存这些模板，每次复用，确保一致性。',
            '设置停止条件：避免无限改稿。事先说清「最多迭代3次」或「质量分数≥4.5就停止」。Evaluate阶段要明确何时完成。',
            '记录改进过程：每轮改进的输出都保存下来。这样可以看到进展，也便于问责和学习。',
            '和其他框架结合：先用CO-STAR或CRAFT生成初稿，再用RISEN反复打磨，最后如果需要特定格式就用SPECS定型。',
          ],
        },
        howPQImplements: {
          title: 'PromptQuorum中的RISEN实现',
          content: [
            '**PromptQuorum是一个多模型分发平台，原生集成了RISEN框架。** 你可以把RISEN工作流保存为模板，一次性发送给GPT-4o、Claude和Gemini等多个模型，对比它们各自的改进方案。',
            '核心功能：',
          ],
          items: [
            '模板保存和复用：把你的「Refine→Inspect→Summarize→Evaluate→Next steps」流程保存为可复用的模板。',
            '模型对比：同一个RISEN任务并行发送给多个模型。GPT-4o可能给出更简洁的改进意见，Claude可能更注重细节，Gemini可能更关注用户体验。你能一眼看出各家的特点。',
            '完整历史记录：保留每一轮改进的完整记录，方便追溯和学习。',
          ],
        },
        recommendedApproaches: {
          title: '推荐的高效用法',
          content: [
            '**这些是真实企业最常用的RISEN高效应用模式，可以直接借鉴：**',
          ],
          items: [
            '「小步快跑」模式：每轮RISEN只改进一个维度（如准确性、或清晰度），而不是同时改所有方面。这样改进更专注，结果更稳定。',
            '「众智评议」模式：Inspect阶段召集3-5个专家独立评价，然后汇总反馈，给Summarize段提供更全面的观点。',
            '「自动化把关」模式：Evaluate阶段用预定义的量表自动打分（如用Python脚本验证关键指标），减少人工偏差。',
            '「版本管理」模式：用Git或类似工具管理RISEN改稿的不同版本，每轮改进都commit一次，方便版本回滚和对比。',
            '「跨时间段优化」模式：不是一口气做完所有5步，而是分几天进行。Refine在第一天，给团队反馈的时间；Inspect在第二天；Evaluate在第三天。思路更清晰。',
          ],
        },
        usingRISENWithOthers: {
          title: '和其他框架的搭配',
          content: [
            '**RISEN最好和其他生成框架组合使用。常见的组合是：先生成，再改进，最后定型。**',
          ],
          items: [
            '初稿生成：用Single Step或CO-STAR快速生成一版初稿',
            '反复改进：把初稿送进RISEN的5阶段循环，改2-3轮',
            '最终定型：如果要求特定的JSON或表格格式，在最后用SPECS框架来定型',
            '逻辑验证：如果输出涉及复杂推理，可以在最终阶段用TRACE验证逻辑路径',
          ],
        },
        howToStart: {
          title: '从零开始：RISEN实战指南',
          numberedItems: [
            '**Refine（修正/优化）：** 从现有草稿、输出或计划开始。给模型明确的指示，朝着具体目标改进——清晰度、准确性、简洁性或与目标读者的适切性。例：「将这个产品说明改写以提高清晰度。目标120-160字。保留所有事实细节。」',
            '**Inspect（检查/审视）：** 要求模型列出它所做的每个具体变更。要求具体的编辑描述，而非模糊的摘要。例：「列出你所做的5-7个具体编辑。对每一项，说明你改了什么以及为什么。」',
            '**Summarize（总结）：** 要求模型简明扼要地说明新版本现在说了什么或实现了什么——不是对内容的重复，而是元层次的描述。例：「用2-3句话解释更新后的版本现在强调了什么，以及其重点如何改变。」',
            '**Evaluate（评估）：** 要求模型用1-5分的明确标准对修改后的输出进行评分，每个标准需一句话的理由。例：「按清晰度(1-5)、说服力(1-5)、B2B受众契合度(1-5)为新版本评分。每个评分用一句话说明理由。」',
            '**Next steps（下一步）：** 要求模型为下一个迭代推荐3个重点改进，这样你总有明确的方向。例：「建议3个具体编辑，我可以在未来的提示中请求，以进一步改进这个输出。」',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'RISEN和TRACE框架有什么区别？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACE强调推理过程的可见性（想一想→推理→分析→结论→解释），而RISEN强调迭代式的渐进改进。用TRACE是为了看清模型怎么想的；用RISEN是为了逐步提升内容质量。' } },
          { '@type': 'Question', 'name': 'RISEN的5个步骤要分成5个提示词发，还是可以在一个长提示词里完成？', 'acceptedAnswer': { '@type': 'Answer', 'text': '两种都可以。一个长提示词更快；分成多个提示词让你在每步有反馈和调整的机会，也能清楚地看到token成本。如果想要最大的控制力和成本透明度，推荐分步骤发送。' } },
          { '@type': 'Question', 'name': '在PromptQuorum中如何集成RISEN到现有的提示词工作流？', 'acceptedAnswer': { '@type': 'Answer', 'text': '在PromptQuorum中创建RISEN模板（比如「市场分析改稿模板」），保存你的Refine-Inspect-Summarize-Evaluate-Next steps流程，然后和团队分享。每次需要类似的改稿工作，就调用这个模板，快速复用。' } },
          { '@type': 'Question', 'name': '提示词工程初学者适合用RISEN吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '完全适合。RISEN的5个步骤很直观，PromptQuorum的预填字段让新手也能快速上手。它不仅是个框架，还是一套教你怎么改进输出的方法。' } },
          { '@type': 'Question', 'name': '如何防止RISEN改稿陷入无限循环？', 'acceptedAnswer': { '@type': 'Answer', 'text': '启动前明确定义停止条件。例如：「最多改3轮」或「质量分数达到4.5分就停」。在Evaluate阶段时要明白什么时候算「完成」。' } },
          { '@type': 'Question', 'name': '国内企业在云API环境中使用RISEN有什么合规建议？', 'acceptedAnswer': { '@type': 'Answer', 'text': '如果处理敏感业务数据（如财务、客户信息），要注意数据跨境问题。建议：(1) 用本地部署的开源模型（如通过PromptQuorum使用），或者 (2) 确认云API提供方的数据处理协议是否符合《数据安全法》。' } },
          { '@type': 'Question', 'name': '多个团队协作改稿时，RISEN的分工如何安排最合理？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Refine由原作者自己做；Inspect由资深编辑/同行评议；Summarize由组长汇总意见；Evaluate由决策人最后定稿。这样分工能提高客观性，也避免单人看不到的盲点。' } },
          { '@type': 'Question', 'name': 'RISEN框架和我们现有的版本管理系统能配套吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '完全可以。每轮RISEN改稿都可以在Git中commit一次，tag上RISEN的哪个阶段。这样版本历史很清楚，回滚也方便。结合PromptQuorum的历史记录，能形成完整的改稿审计链。' } },
        ],
      },
    },
  };
