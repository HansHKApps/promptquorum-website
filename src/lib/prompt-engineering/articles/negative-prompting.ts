// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: negative-prompting
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Negative Prompting: Tell the AI What NOT to Do',
      intro: 'Negative prompting is a technique where you tell the model what it must avoid—content, style, structure, or behaviors—so outputs stay inside clear boundaries. It acts as a "guardrail layer" on top of your normal instructions.',
      seoTitle: 'Negative Prompting 2026: Guard Against Bad AI Outputs',
      metaDescription: 'Negative prompting tells AI what to avoid: content, style, structure, behaviors. Prevent unwanted outputs. Full technique guide with prompt examples.',
      publishDate: '2026-03-26',
      readTime: '6 min read',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Negative Prompting: Tell the AI What NOT to Do',
        description: 'What negative prompting is, why it matters, and how to use explicit "do not" rules to keep AI outputs inside safe, on-brand boundaries.',
        datePublished: '2026-03-26',
        dateModified: '2026-03-26',
        keywords: ['negative prompting', 'prompt engineering', 'guardrails', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Large Language Models' },
          { '@type': 'Thing', name: 'Guardrails' },
        ],
      },
      sections: {
        whatIsNegativePrompting: {
          title: 'What Negative Prompting Is',
          content: [
            '**Negative prompting means adding explicit "do not" rules to your prompts alongside what you want the model to do.** Instead of only describing the target output, you also specify unwanted topics, tones, formats, or mistakes.',
            'These negative instructions can cover banned phrases, prohibited content categories, off-limits opinions, or simply styles you do not want (for example "no jokes," "no emojis," or "avoid hype words"). The clearer the "do not" rules, the easier it is for the model to stay aligned.',
          ],
        },
        whyItMatters: {
          title: 'Why Negative Prompting Matters',
          content: [
            '**Negative prompting matters because real-world outputs are constrained not just by goals, but by limits—brand, legal, safety, and quality constraints.** A good result is often "correct and within boundaries," not just "useful."',
            'Negative instructions help you:',
          ],
          items: [
            'Prevent specific failure modes you have already seen, such as overselling, speculation, or unwanted disclaimers.',
            'Enforce brand and tone rules directly in the prompt, like avoiding jargon or banned adjectives.',
            'Reduce manual editing, since many common corrections can be preempted by clear "do not" guidance.',
          ],
        },
        useNote: {
          content: [
            'Used well, negative prompting turns prior mistakes into reusable guardrails.',
          ],
        },
        whatYouCanConstrain: {
          title: 'What You Can Constrain With Negative Prompts',
          content: [
            '**You can apply negative prompting to content, style, structure, and behavior.** The goal is to be specific enough that the model knows exactly what to avoid.',
            'Common negative constraints:',
          ],
          items: [
            'Content: "Do not include medical advice," "do not mention competitors," "do not provide legal conclusions."',
            'Style: "Do not use hype words like "revolutionary" or "game-changing"," "no emojis," "avoid sarcasm."',
            'Structure: "Do not add an introduction section," "do not use numbered lists," "do not include a conclusion."',
            'Behavior: "Do not fabricate statistics," "if you are unsure, say you are unsure instead of guessing."',
          ],
        },
        combiningNote: {
          content: [
            'Combining positive and negative instructions gives you a much tighter prompt specification.',
          ],
        },
        example: {
          title: 'Example: Without vs With Negative Prompting',
          content: [
            '**The effect of negative prompting becomes clear when you compare a generic prompt with one that encodes explicit "do not" rules.** Here is a product description example.',
            '**[Bad Prompt]**',
            '"Write a product description for our new analytics dashboard."',
            '**[Good Prompt]**',
            '"You are a B2B product marketer. Task: Write a product description for our new analytics dashboard targeted at operations managers. Constraints (negative prompting): Do not use hype words such as "revolutionary", "disruptive", or "game-changing". Do not mention competitors or compare us to other tools. Do not promise future features; describe only what exists today. Do not exceed 180 words. Output format: 1 short paragraph for the overview, followed by 3 bullet points for key benefits."',
            'The "good" version encodes known pitfalls (hype, speculation, comparisons) directly into the instructions, reducing the need for manual clean-up.',
          ],
        },
        whenToUse: {
          title: 'When to Use Negative Prompting',
          content: [
            '**You should use negative prompting whenever you have clear examples of what you never want to see again.** It is especially helpful in repeatable workflows where the same mistakes keep reappearing.',
            'Typical use cases:',
          ],
          items: [
            'Customer communication where tone, claims, and promises must stay within strict guidelines.',
            'Regulated contexts (finance, health, legal) where certain kinds of advice or wording must be avoided.',
            'Internal documentation or reports that must not include confidential details, personal data, or speculation.',
            'Public-facing content where you want to avoid sensitive topics, political opinions, or controversial language.',
          ],
        },
        productionNote: {
          content: [
            'For quick, low-risk experiments, you can keep negative prompting light. As prompts mature into production workflows, your list of "do not" rules usually grows.',
          ],
        },
        inPromptQuorum: {
          title: 'Negative Prompting in PromptQuorum',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool where negative prompting can be baked into reusable frameworks instead of retyped each time.** You can define standard negative constraints once and attach them to many tasks.',
            'In PromptQuorum, you can:',
          ],
          items: [
            'Add negative prompting blocks (for example "banned phrases," "forbidden content," "style restrictions") to frameworks like SPECS, RTF, or CRAFT so they are always applied.',
            'Maintain shared lists of "do not" rules for your brand or team, ensuring consistent guardrails across all prompts and models.',
            'Run the same negatively constrained prompt across different models to see which provider adheres best to your boundaries.',
          ],
        },
        pqConversion: {
          content: [
            'By treating negative prompting as part of your prompt architecture, PromptQuorum helps you convert past mistakes into durable, reusable constraints.',
          ],
        },

        howToStart: {
          title: 'How to Use Negative Prompting',
          numberedItems: [
            '**Identify what you don\'t want in the output: specific words, tones, styles, or approaches.** Example: \'Do not use marketing buzzwords. Do not make promises. Do not reference competitors.\'',
            '**State negatives explicitly using \'do not,\' \'must not,\' \'never\' language.** Soft negatives like \'avoid if possible\' are less effective. Be direct: \'Never use the words \"disrupt,\" \"game-change,\" or \"AI-powered.\"\'',
            '**Provide negative examples: show the model what you explicitly don\'t want.** Example: \'Don\'t write like this: \"Unlock explosive growth with our AI solution.\" Don\'t write like this: \"Our cutting-edge platform uses machine learning.\" Write like this: [provide positive example].\'',
            '**Combine positive and negative guidance.** Don\'t just say what to avoid—also say what to do instead. Example: \'Do not use hype language. Instead, focus on specific, measurable benefits.\'',
            '**Use negative prompting sparingly—it can sometimes confuse the model.** Positive guidance (\'write clearly and technically\') often works better than heavy negatives (\'don\'t be vague, don\'t simplify, don\'t omit details\'). Balance both approaches.',
          ],
        },
      },
    },
    de: {
  theme: 'Techniques',
  title: 'Negatives Prompting: Der KI Sagen, Was Sie NICHT Tun Soll',
  intro: 'Negatives Prompting ist eine Technik, um explizit zu definieren, was das Modell vermeiden sollte—Inhalte, Ton, Struktur oder Verhalten—um die Ergebnisse in klaren Grenzen zu halten. Es funktioniert als „Schutzschicht" oberhalb Ihrer Standard-Anweisungen.',
  publishDate: '2026-03-26',
  readTime: '6 min Lesezeit',
  metaDescription: 'Kompletter Leitfaden zum Negatives Prompting: Definition, Bedeutung und Anwendung expliziter „Nicht-Tun"-Regeln zur Kontrolle von KI-Ausgaben in Brand- und Compliance-Grenzen.',
  primaryTerm: 'Negatives Prompting',
  seoTitle: 'Negatives Prompting: KI-Ausgaben mit expliziten Regeln kontrollieren',
  educationalLevel: 'Intermediate',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Negatives Prompting: Der KI Sagen, Was Sie NICHT Tun Soll',
    description: 'Definition, Bedeutung und Implementierung des Negatives Prompting zur Wahrung von Sicherheits-, Compliance- und Brand-Alignment-Grenzen bei KI-Ausgaben.',
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    keywords: ['Negatives Prompting', 'Prompt-Engineering', 'Schutzmaßnahmen', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'Prompt-Engineering' },
      { '@type': 'Thing', name: 'Große Sprachmodelle' },
      { '@type': 'Thing', name: 'Digitale Schutzmaßnahmen' },
    ],
  },
  sections: {
    whatIsNegativePrompting: {
      title: 'Was ist Negatives Prompting?',
      content: [
        '**Negatives Prompting bedeutet, explizite „Nicht-Tun"-Regeln zu Ihren Prompts hinzuzufügen, parallel zu dem, was Sie vom Modell erwarten.** Anstatt nur das gewünschte Ergebnis zu beschreiben, legen Sie auch fest, welche Themen, Töne, Formate oder Fehler zu vermeiden sind.',
        'Diese negativen Anweisungen können verbotene Begriffe, unzulässige Inhaltskategorien, tabuisierte Meinungen oder einfach unerwünschte Stile abdecken (beispielsweise „keine Witze", „keine Emojis", „keine Marketingsprache"). Je expliziter Ihre „Nicht-Tun"-Regeln, desto leichter bleibt das Modell ausgerichtet.',
      ],
    },
    whyItMatters: {
      title: 'Warum Negatives Prompting Wichtig Ist',
      content: [
        '**Negatives Prompting ist wichtig, weil reale Ausgaben nicht nur durch Ziele, sondern durch Grenzen begrenzt werden—Brand-, rechtliche, Sicherheits- und Qualitätsgrenzen.** Ein gutes Ergebnis ist oft „korrekt UND an die Grenzen gebunden", nicht einfach „nützlich".',
        'Negatives Prompting ermöglicht es Ihnen:',
      ],
      items: [
        'Spezifische bereits beobachtete Fehler zu verhindern: Überverkauf, Spekulation, unnötige Haftungsausschlüsse.',
        'Brand- und Tonregeln direkt im Prompt zu erzwingen, indem Sie Fachjargon oder verbotene Adjektive vermeiden.',
        'Manuelle Überarbeitung zu reduzieren, da viele häufige Korrektionen durch explizites negatives Prompting vorweggenommen werden können.',
      ],
    },
    useNote: {
      content: [
        'Richtig umgesetzt wandelt Negatives Prompting frühere Fehler in wiederverwendbare und dauerhafte Schutzmaßnahmen um.',
      ],
    },
    whatYouCanConstrain: {
      title: 'Was Sie Mit Negativem Prompting Einschränken Können',
      content: [
        '**Sie können Negatives Prompting auf Inhalte, Ton, Struktur und Verhalten anwenden.** Das Ziel ist, spezifisch genug zu sein, damit das Modell genau weiß, was zu vermeiden ist.',
        'Übliche negative Einschränkungen:',
      ],
      items: [
        'Inhalt: „Keine medizinischen Ratschläge einschließen", „keine Mitbewerber erwähnen", „keine Rechtsmeinung abgeben".',
        'Ton: „Keine Hype-Begriffe wie \'revolutionär\' oder \'disruptiv\'", „keine Emojis", „Sarkasmus vermeiden".',
        'Struktur: „Keine Einleitung hinzufügen", „keine nummerierten Listen verwenden", „keine Schlussfolgerung einschließen".',
        'Verhalten: „Keine erfundenen Statistiken erfinden", „bei Unsicherheit, Unsicherheit zugeben statt zu raten".',
      ],
    },
    combiningNote: {
      content: [
        'Die Kombination positiver und negativer Anweisungen ergibt eine viel straffere Prompt-Spezifikation.',
      ],
    },
    zusammenfassung: {
      title: 'Zusammenfassung: Negatives Prompting im Überblick',
      content: [
        'Negatives Prompting ist eine grundlegende Technik zur Steuerung von KI-Ausgaben durch explizite „Nicht-Tun"-Regeln. Im Gegensatz zu positiven Anweisungen (die sagen, was zu tun ist) definieren negative Anweisungen, was zu vermeiden ist—und sind oft genau so wirksam. In der Praxis arbeiten positive und negative Prompts zusammen: Sie geben Kontext und Ziele vor, während negative Grenzen setzen. Für regelmäßig wiederholte Aufgaben (Kundenkommunikation, interne Berichte, öffentliche Inhalte) kann Negatives Prompting dazu beitragen, Fehler zu verhindern, bevor sie entstehen. Mit PromptQuorum können Sie diese Regeln einmal definieren und über alle Modelle und Aufgaben hinweg anwenden.',
      ],
    },
    example: {
      title: 'Beispiel: Ohne und Mit Negativem Prompting',
      content: [
        '**Die Auswirkung des Negatives Prompting wird deutlich, wenn Sie einen generischen Prompt mit einem vergleichen, der explizite „Nicht-Tun"-Regeln enthält. Hier ist ein Beispiel aus dem deutschen Geschäftskontext.**',
        '**[Schwacher Prompt]**',
        '„Schreibe eine Produktbeschreibung für unser neues Analyse-Dashboard für unsere deutschen Kunden."',
        '**[Besserer Prompt]**',
        '„Sie sind ein B2B-Produktmanager für deutschsprachige Märkte. Aufgabe: Schreiben Sie eine Produktbeschreibung für unser neues Analyse-Dashboard, das auf Betriebsleiter in DACH-Unternehmen abzielt. Einschränkungen (Negatives Prompting): Verwenden Sie keine Marketing-Begriffe wie \'revolutionär\', \'disruptiv\' oder \'bahnbrechend\'. Erwähnen Sie keine Konkurrenzprodukte und vergleichen Sie uns nicht mit anderen Tools. Versprechen Sie keine zukünftigen Funktionen; beschreiben Sie nur, was heute existiert. Bleiben Sie unter 180 Wörtern. Format: 1 kurzer Absatz für die Übersicht, gefolgt von 3 Stichpunkten für die wichtigsten Vorteile."',
        'Diese „bessere" Version kodiert bekannte Fallstricke (Überverkauf, Spekulation, Vergleiche) direkt in den Anweisungen ein und reduziert den Bedarf für manuelle Überarbeitung.',
      ],
    },
    whenToUse: {
      title: 'Wann Negatives Prompting Verwenden',
      content: [
        '**Verwenden Sie Negatives Prompting, wenn Sie klare Beispiele haben, was Sie nie wieder sehen möchten.** Es ist besonders nützlich in wiederholbaren Workflows, wo die gleichen Fehler immer wieder auftauchen.',
        'Typische Anwendungsfälle:',
      ],
      items: [
        'Kundenkommunikation, wo Ton, Aussagen und Zusagen an strenge Richtlinien gebunden sein müssen.',
        'Regulierte Kontexte (Finanzen, Gesundheit, Recht), wo bestimmte Arten von Ratschlägen oder Formulierungen vermieden werden müssen.',
        'Interne Dokumentation oder Berichte, die keine vertraulichen Details, persönliche Daten oder Spekulationen enthalten dürfen.',
        'Öffentliche Inhalte, wo Sie sensible Themen, politische Meinungen oder kontroverse Sprache vermeiden möchten.',
        'Compliance-Dokumentation und Regulatory Filings in DACH-Unternehmen, wo gesetzliche und normative Vorgaben in jedes Wort eingearbeitet werden müssen.',
      ],
    },
    productionNote: {
      content: [
        'Bei schnellen, risikoarmen Experimenten können Sie Negatives Prompting leicht halten. Wenn Prompts in produktive Workflows übergehen, wächst die Liste der „Nicht-Tun"-Regeln normalerweise.',
      ],
    },
    inPromptQuorum: {
      title: 'Negatives Prompting in PromptQuorum',
      content: [
        '**PromptQuorum ist ein Multi-Modell-Dispatch-Tool, bei dem Negatives Prompting in wiederverwendbare Frameworks integriert werden kann, statt es jedes Mal neu zu schreiben.** Sie definieren Standard-Negative-Constraints einmal und können sie auf viele Aufgaben anwenden.',
        'Mit PromptQuorum können Sie:',
      ],
      items: [
        'Negative-Prompting-Blöcke (z.B. „verbotene Begriffe", „unzulässiger Inhalt", „Stilbeschränkungen") zu Frameworks wie SPECS (S — Umfang | P — Zweck | E — Beispiele | C — Constraints | S — Spezifikation), RTF (R — Rolle | T — Aufgabe | F — Format) oder CRAFT hinzufügen, damit sie sich automatisch anwenden.',
        'Gemeinsame Listen von „Nicht-Tun"-Regeln für Ihre Brand oder Ihr Team pflegen und konsistente Schutzmaßnahmen über alle Prompts und Modelle hinweg sicherstellen.',
        'Denselben negativ constraints Prompt über verschiedene Modelle hinweg ausführen, um zu sehen, welcher Provider sich am besten an Ihre Grenzen hält.',
      ],
    },
    pqConversion: {
      content: [
        'Wenn Sie Negatives Prompting als Teil Ihrer Prompt-Architektur behandeln, hilft Ihnen PromptQuorum, vergangene Fehler in dauerhafte, wiederverwendbare Constraints umzuwandeln.',
      ],
    },
    howToStart: {
      title: 'Wie Sie Negatives Prompting Einsetzen',
      numberedItems: [
        '**Identifizieren Sie, was Sie in der Ausgabe nicht sehen möchten: spezifische Wörter, Töne, Stile oder Ansätze.** Beispiel: „Verwenden Sie keine Marketing-Begriffe. Machen Sie keine Zusagen. Referenzieren Sie keine Konkurrenten."',
        '**Drücken Sie Negative explizit aus, indem Sie „nicht", „darf nicht" oder „niemals" verwenden.** Weiche Formulierungen wie „versuchen zu vermeiden" sind weniger wirksam. Seien Sie direkt: „Verwenden Sie niemals die Wörter \'disruptiv\', \'revolutionär\' oder \'KI-gesteuert\'."',
        '**Geben Sie negative Beispiele an: zeigen Sie dem Modell, was Sie explizit nicht möchten.** Beispiel: „Schreiben Sie nicht so: \'Exponentielles Wachstum mit unserer KI-Lösung.\' Schreiben Sie nicht so: \'Unsere Spitzenplattform nutzt maschinelles Lernen.\' Schreiben Sie stattdessen: [positives Beispiel]."',
        '**Kombinieren Sie positive und negative Anleitung.** Sagen Sie nicht nur, was zu vermeiden ist—sagen Sie auch, was stattdessen zu tun ist. Beispiel: „Verwenden Sie keine Marketing-Sprache. Konzentrieren Sie sich auf spezifische, messbare Vorteile."',
        '**Verwenden Sie Negatives Prompting sparsam—es kann das Modell manchmal verwirren.** Positive Anleitung („schreiben Sie klar und technisch") funktioniert oft besser als schweres negatives Prompting („sei nicht vage, vereinfache nicht, lass keine Details weg"). Balancieren Sie beide Ansätze.',
      ],
    },
    zusatzFaqs: {
      title: 'Häufig Gestellte Fragen zum Negatives Prompting in DACH',
      content: [
        'Zwei zusätzliche Fragen zu DSGVO-Compliance und Enterprise-Herausforderungen:',
      ],
      faqs: [
        {
          q: 'Wie stelle ich sicher, dass mein Negatives Prompting datenschutzkonform ist?',
          a: 'DSGVO-Konformität bei Negatives Prompting bedeutet, dass Sie sensible personenbezogene Daten nicht in die negativen Regeln selbst einbeziehen sollten. Verwenden Sie stattdessen abstrakte Kategorien (z.B. „entfernen Sie alle Kundennamen und E-Mail-Adressen" statt „niemals Max Mustermann@example.de erwähnen"). Dokumentieren Sie Ihre negativen Constraints und deren Zweck in Ihrer Datenschutzerklärung. Wenn Sie PromptQuorum verwenden, stellen Sie sicher, dass Logs mit sensiblen Daten entsprechend geschützt sind.',
        },
        {
          q: 'Welche Herausforderungen gibt es beim Negatives Prompting in DACH-Unternehmen?',
          a: 'DACH-Unternehmen (Deutschland, Österreich, Schweiz) stehen vor besonderen Herausforderungen: (1) Rechtliche Anforderungen sind streng und regional unterschiedlich—Negatives Prompting muss diese nuanciert erfassen. (2) Compliance-Dokumentation ist umfangreich; die Constraints müssen revisionssicher sein. (3) Sprachliche Präzision ist kritisch—German-speaking Nutzer erwarten exakte Formulierungen, keine Vereinfachungen. (4) Große Enterprise-Organisationen benötigen zentrale Templates für Constraints, um konsistente Standards über Teams hinweg zu gewährleisten. PromptQuorum adressiert diese durch wiederverwendbare Constraint-Sets und Audit-Trails.',
        },
      ],
    },
  },
},
    fr: {
      theme: 'Techniques',
      title: 'Guidage Négatif : Dire à l\'IA Ce qu\'Elle NE Doit PAS Faire',
      intro: 'Le guidage négatif est une technique permettant de définir explicitement ce que le modèle doit éviter—contenu, tonalité, structure ou comportements—pour maintenir les résultats dans des limites claires. Il fonctionne comme une « couche de protection » s\'ajoutant à vos instructions standard.',
      publishDate: '2026-03-26',
      readTime: '5 min de lecture',
      metaDescription: 'Guide complet du guidage négatif : définition, enjeux, et application des règles « ne pas faire » pour maîtriser les sorties IA en respect des contraintes de marque et de conformité.',
      primaryTerm: 'Guidage Négatif',
      seoTitle: 'Guidage Négatif : Maîtriser les Sorties IA avec des Règles Explicites',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Guidage Négatif : Dire à l\'IA Ce qu\'Elle NE Doit PAS Faire',
        description: 'Définition, enjeux et mise en œuvre du guidage négatif pour maintenir les sorties IA dans des limites de sécurité, de conformité et d\'alignement de marque.',
        datePublished: '2026-03-26',
        dateModified: '2026-03-26',
        keywords: ['guidage négatif', 'ingénierie des invites', 'garde-fous', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Ingénierie des Invites' },
          { '@type': 'Thing', name: 'Modèles de Langage de Grande Taille' },
          { '@type': 'Thing', name: 'Garde-fous Numériques' },
        ],
      },
      sections: {
        whatIsNegativePrompting: {
          title: 'Qu\'est-ce que le Guidage Négatif ?',
          content: [
            '**Le guidage négatif consiste à ajouter des règles explicites « ne pas faire » à vos invites, aux côtés de ce que vous souhaitez obtenir du modèle.** Au lieu de décrire uniquement le résultat attendu, vous précisez également les sujets, tonalités, formats ou erreurs à éviter.',
            'Ces instructions négatives peuvent porter sur des termes interdits, des catégories de contenu prohibées, des opinions hors limites, ou simplement des styles indésirables (par exemple « pas de blagues », « pas d\'emojis », « éviter le langage marketing »). Plus vos règles « ne pas faire » sont explicites, plus il est aisé pour le modèle de rester aligné.',
          ],
        },
        whyItMatters: {
          title: 'Pourquoi le Guidage Négatif Compte',
          content: [
            '**Le guidage négatif importe parce que les résultats concrètes sont limités non seulement par les objectifs, mais par les contraintes—de marque, légales, de sécurité et de qualité.** Un bon résultat est souvent « exact ET conforme aux limites », pas simplement « utile ».',
            'Le guidage négatif vous permet :',
          ],
          items: [
            'Prévenir les défaillances spécifiques déjà observées : surpromodon, spéculation, mentions inutiles de mises en garde.',
            'Imposer les règles de marque et de tonalité directement dans l\'invite, en évitant le jargon ou les adjectifs proscrits.',
            'Réduire l\'édition manuelle, car nombre de corrections courantes peuvent être anticipées par un guidage explicite « ne pas faire ».',
          ],
        },
        useNote: {
          content: [
            'Bien mis en œuvre, le guidage négatif transforme les erreurs antérieures en garde-fous réutilisables et durables.',
          ],
        },
        whatYouCanConstrain: {
          title: 'Ce Que Vous Pouvez Maîtriser avec le Guidage Négatif',
          content: [
            '**Vous pouvez appliquer le guidage négatif au contenu, à la tonalité, à la structure et au comportement.** L\'objectif est d\'être assez spécifique pour que le modèle sache exactement quoi éviter.',
            'Contraintes négatives courantes :',
          ],
          items: [
            'Contenu : « Ne pas inclure de conseils médicaux », « ne pas mentionner les concurrents », « ne pas émettre de conclusions juridiques ».',
            'Tonalité : « Ne pas utiliser de termes accrocheurs comme « révolutionnaire » ou « disruptif » », « pas d\'emojis », « éviter le sarcasme ».',
            'Structure : « Ne pas ajouter d\'introduction », « ne pas utiliser de listes numérotées », « ne pas inclure de conclusion ».',
            'Comportement : « Ne pas inventer de statistiques », « en cas d\'incertitude, reconnaître l\'incertitude au lieu de deviner ».',
          ],
        },
        combiningNote: {
          content: [
            'L\'association d\'instructions positives et négatives vous offre une spécification d\'invite bien plus rigoureuse.',
          ],
        },
        example: {
          title: 'Exemple : Sans vs Avec Guidage Négatif',
          content: [
            '**L\'effet du guidage négatif apparaît clairement en comparant une invite générique à une invite qui encode des règles explicites « ne pas faire ». Voici un exemple adapté au contexte français.**',
            '**[Invite Faible]**',
            '« Rédige une description de produit pour notre nouveau tableau de bord analytique. »',
            '**[Bonne Invite]**',
            '« Tu es un responsable produit B2B. Tâche : Rédige une description de produit pour notre nouveau tableau de bord analytique destinée aux directeurs d\'exploitation en France. Contraintes (guidage négatif) : Ne pas utiliser de termes marketing comme « révolutionnaire », « disruptif » ou « innovant ». Ne pas mentionner les concurrents. Ne pas promouvoir de fonctionnalités futures ; décrire uniquement ce qui existe aujourd\'hui. Ne pas dépasser 180 mots. Format : 1 paragraphe court pour la présentation générale, suivi de 3 points clés pour les avantages. »',
            'Cette « bonne » version encode les écueils connus (marketing, spéculation, comparaisons) directement dans les instructions, réduisant le besoin de correction manuelle.',
          ],
        },
        whenToUse: {
          title: 'Quand Utiliser le Guidage Négatif',
          content: [
            '**Utilisez le guidage négatif dès que vous avez des exemples clairs de ce que vous ne voulez jamais revoir.** C\'est particulièrement utile dans les workflows répétables où les mêmes erreurs réapparaissent.',
            'Cas d\'usage typiques :',
          ],
          items: [
            'Communication client où la tonalité, les affirmations et les promesses doivent respecter des directives strictes.',
            'Contextes réglementés (finance, santé, droit) où certains types de conseils ou de formulations doivent être évités.',
            'Documentation interne ou rapports ne devant pas contenir de détails confidentiels, de données personnelles ou de spéculation.',
            'Contenu public où vous souhaitez éviter les sujets sensibles, les opinions politiques ou le langage controversé.',
          ],
        },
        productionNote: {
          content: [
            'Pour les expériences rapides et peu risquées, le guidage négatif peut rester léger. À mesure que les invites deviennent opérationnelles, votre liste de règles « ne pas faire » s\'étend généralement.',
          ],
        },
        inPromptQuorum: {
          title: 'Guidage Négatif dans PromptQuorum',
          content: [
            '**PromptQuorum est un outil de dispatch multi-modèles où le guidage négatif peut être intégré dans des cadres réutilisables au lieu d\'être réécrit à chaque fois.** Vous définissez les contraintes négatives standard une seule fois et les attachez à de nombreuses tâches.',
            'Avec PromptQuorum, vous pouvez :',
          ],
          items: [
            'Ajouter des blocs de guidage négatif (« termes interdits », « contenu défendu », « restrictions de style ») aux cadres tels que SPECS (S — Portée | P — Objet | E — Exemples | C — Contraintes | S — Spécification), RTF (R — Rôle | T — Tâche | F — Format) ou CRAFT pour qu\'ils s\'appliquent systématiquement.',
            'Maintenir des listes partagées de règles « ne pas faire » pour votre marque ou équipe, garantissant des garde-fous cohérents sur toutes les invites et modèles.',
            'Exécuter la même invite avec contraintes négatives sur différents modèles pour voir lequel s\'aligne le mieux à vos limites.',
          ],
        },
        pqConversion: {
          content: [
            'En traitant le guidage négatif comme part intégrante de votre architecture d\'invites, PromptQuorum vous aide à convertir les erreurs passées en contraintes durables et réutilisables.',
          ],
        },
        howToStart: {
          title: 'Comment Mettre en Œuvre le Guidage Négatif',
          numberedItems: [
            '**Identifiez ce que vous ne voulez pas dans la sortie : mots spécifiques, tonalités, styles ou approches.** Exemple : « Ne pas utiliser de termes marketing. Ne pas faire de promesses. Ne pas référencer les concurrents. »',
            '**Exprimez les interdictions explicitement en utilisant « ne pas », « ne doit pas » ou « jamais ». Les formulations douces comme « éviter si possible » sont moins efficaces. Soyez direct : « Ne jamais utiliser les mots « disruptif », « révolutionnaire » ou « basé sur l\'IA ». »**',
            '**Fournissez des exemples négatifs : montrez au modèle ce que vous ne voulez explicitement pas.** Exemple : « N\'écris pas comme ceci : « Décupler votre croissance avec notre solution IA. » N\'écris pas ainsi : « Notre plateforme de pointe utilise l\'apprentissage machine. » Écris plutôt : [exemple positif]. »',
            '**Combinez guidage positif et négatif.** Ne dites pas seulement ce à éviter—dites aussi ce à faire. Exemple : « Ne pas utiliser de langage marketing. Concentrez-vous sur les avantages spécifiques et mesurables. »',
            '**Utilisez le guidage négatif avec modération—il peut parfois dérouter le modèle.** Le guidage positif (« écris de manière claire et technique ») fonctionne souvent mieux que de lourdes interdictions (« ne sois pas vague, ne simplifie pas, ne omets rien »). Équilibrez les deux approches.',
          ],
        },
      },
    },
    ja: {
      theme: 'Techniques',
      title: 'ネガティブプロンプティング：AIに「やってはいけないこと」を教える',
      intro: 'ネガティブプロンプティングは、モデルが避けるべきもの—コンテンツ、文体、構造、振る舞い—を明示的に指定し、出力を明確な境界内に保つ手法です。通常の指示の上に「ガードレール層」として機能します。',
      seoTitle: 'ネガティブプロンプティング：AIの出力を制御する明示的なルール設計',
      metaDescription: 'ネガティブプロンプティングの完全ガイド：定義、重要性、および「してはいけない」ルールの実装方法で、ブランドとコンプライアンス制約内でAI出力を管理します。',
      publishDate: '2026-03-26',
      readTime: '5分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'ネガティブプロンプティング',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'ネガティブプロンプティング：AIに「やってはいけないこと」を教える',
        description: 'ネガティブプロンプティングの定義、実装方法、および安全で準拠し、ブランド整合的なAI出力を維持するための戦略。',
        datePublished: '2026-03-26',
        dateModified: '2026-03-26',
        keywords: ['ネガティブプロンプティング', 'プロンプトエンジニアリング', 'ガードレール', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'プロンプトエンジニアリング' },
          { '@type': 'Thing', name: '大規模言語モデル' },
          { '@type': 'Thing', name: 'ガードレール' },
        ],
      },
      sections: {
        whatIsNegativePrompting: { title: 'ネガティブプロンプティングとは', content: ['**ネガティブプロンプティングとは、モデルに望む出力を説明するのと同時に、明示的な「してはいけない」ルールをプロンプトに追加することです。** 目的の出力のみを記述するのではなく、避けるべきテーマ、文体、形式、または誤りも指定します。', 'これらのネガティブ指示は、禁止フレーズ、禁止コンテンツカテゴリー、禁止意見、または不要な文体（例えば「冗談なし」「絵文字なし」「マーケティング用語を避ける」）をカバーできます。「してはいけない」ルールが明確であるほど、モデルが整合性を保つことが容易になります。'] },
        whyItMatters: { title: 'なぜネガティブプロンプティングが重要なのか', content: ['**ネガティブプロンプティングが重要な理由は、実世界の出力が目標だけではなく、制約—ブランド、法律、安全性、品質の制約—によって制限されるからです。** 良い結果とは、単に「有用」ではなく、「正確でかつ境界内に収まっている」ことが多いです。', 'ネガティブ指示は以下のことを可能にします：'], items: ['既に見た特定の失敗パターン、例えば過度な売上予測、推測、または不要な免責事項を防止する。', 'ブランドと文体ルールをプロンプトに直接適用し、専門用語や禁止表現を避ける。', '手動による編集を減らす。多くの一般的な修正は、明確な「してはいけない」ガイダンスで事前に防ぐことができます。'] },
        useNote: { content: ['適切に使用すれば、ネガティブプロンプティングは過去の誤りを再利用可能なガードレールに変えます。'] },
        whatYouCanConstrain: { title: 'ネガティブプロンプトで制約できるもの', content: ['**ネガティブプロンプティングは、コンテンツ、文体、構造、振る舞いに適用できます。** 目標は、モデルが正確に何を避けるべきかを理解するのに十分な具体性です。', '一般的なネガティブ制約：'], items: ['コンテンツ：「医療的アドバイスを含めない」「競合他社に言及しない」「法的結論を出さない」。', '文体：「「革新的」や「ゲームチェンジャー」などのハイプワードを使用しない」「絵文字なし」「皮肉を避ける」。', '構造：「導入セクションを追加しない」「番号付きリストを使用しない」「結論を含めない」。', '振る舞い：「統計情報を捏造しない」「不確実な場合は推測する代わりに不確実であることを述べる」。'] },
        combiningNote: { content: ['ポジティブとネガティブの指示を組み合わせることで、プロンプト仕様がはるかに厳密になります。'] },
        example: { title: '例：ネガティブプロンプティング適用前後の比較', content: ['**ネガティブプロンプティングの効果は、汎用プロンプトと明示的な「してはいけない」ルールを含むプロンプトを比較するとはっきり見えます。** 以下は製品説明の例です。', '**[不十分なプロンプト]**', '「新しい分析ダッシュボードの製品説明を書いてください。」', '**[優れたプロンプト]**', '「あなたはB2Bの製品マーケターです。タスク：運用責任者向けの新しい分析ダッシュボードの製品説明を書いてください。制約（ネガティブプロンプティング）：「革新的」「破壊的」「ゲームチェンジャー」などのハイプワードを使用しないでください。競合他社に言及したり、他のツールと比較したりしないでください。今存在するもののみを説明し、将来の機能を約束しないでください。180語以下に収めてください。出力形式：概要用の短い段落1つ、その後、主な利点について3つの箇条書きを続けてください。」', '「優れた」バージョンは、既知の落とし穴（ハイプ、推測、比較）を指示に直接エンコードし、手動クリーンアップの必要性を減らします。'] },
        whenToUse: { title: 'ネガティブプロンプティングをいつ使うか', content: ['**二度と見たくないものについて明確な例がある場合は、ネガティブプロンプティングを使うべきです。** これは、同じ誤りが繰り返し現れる反復的なワークフローで特に有効です。', '典型的なユースケース：'], items: ['トーン、主張、約束が厳しいガイドラインを守る必要がある顧客コミュニケーション。', '特定の種類のアドバイスまたは文言を避ける必要がある規制環境（金融、医療、法律）。', '機密情報、個人データ、または推測を含めてはいけない内部ドキュメントまたはレポート。', 'センシティブなトピック、政治的意見、または論争的な言語を避けたい公開向けコンテンツ。'] },
        productionNote: { content: ['低リスクの迅速な実験の場合、ネガティブプロンプティングは控えめに保つことができます。プロンプトが本番ワークフローに成熟するにつれて、「してはいけない」ルールのリストは通常拡大します。'] },
        inPromptQuorum: { title: 'PromptQuorumにおけるネガティブプロンプティング', content: ['**PromptQuorumはマルチモデルAIディスパッチツールであり、ネガティブプロンプティングを毎回書き直す代わりに再利用可能なフレームワークに組み込むことができます。** 標準的なネガティブ制約を一度定義し、多くのタスクに適用できます。', 'PromptQuorumでは、以下のことができます：'], items: ['ネガティブプロンプティングブロック（例えば「禁止フレーズ」「禁止コンテンツ」「スタイル制限」）をSPECS（S—スコープ | P—目的 | E—例 | C—制約 | S—仕様）、RTF（R—ロール | T—タスク | F—フォーマット）、またはCRAFTのようなフレームワークに追加し、それらが常に適用されるようにする。', 'ブランドまたはチーム向けの「してはいけない」ルールの共有リストを保持し、すべてのプロンプトとモデル全体で一貫したガードレールを確保する。', '同じネガティブ制約されたプロンプトを異なるモデルで実行し、どのプロバイダーがあなたの境界に最も準拠しているかを確認する。'] },
        pqConversion: { content: ['ネガティブプロンプティングをプロンプトアーキテクチャの一部として扱うことで、PromptQuorumは過去の誤りを耐久性のある再利用可能な制約に変えるのに役立ちます。'] },
        advancedConsiderations: { title: '注意点：ネガティブプロンプティングの落とし穴', content: ['**ネガティブプロンプティングは強力ですが、過度に使用すると裏目に出る場合があります。** 以下の落とし穴に注意してください：'], items: ['過度な制約：ネガティブルールが多すぎると、モデルが混乱し、不完全または矛盾した出力を生成する可能性があります。', 'あいまい性：「してはいけない」ルールが不明確な場合、モデルは意図した方法で解釈できない場合があります。具体的かつ例を示してください。', 'ポジティブとのバランス：ネガティブプロンプティングのみに依存しないでください。常にポジティブガイダンス（やるべきこと）と組み合わせてください。'] },
        implementationStrategy: { title: '実践Tips：効果的なネガティブプロンプティング戦略', content: ['**ネガティブプロンプティングを最大限に活用するには、戦略的なアプローチが必要です。** 以下は実装のベストプラクティスです：'], items: ['段階的に追加：最小限のルールセットから始め、実際の出力を見ながら必要な制約を追加します。', 'テンプレート化：チーム全体で再利用できる標準的なネガティブ制約セットを作成し、一貫性を確保します。', 'テストと検証：フレームワークに新しいネガティブルールを追加する際は、複数のモデルでテストして動作確認します。', 'ドキュメント化：各ネガティブルールが存在する理由を記録し、将来の参照と維持管理を容易にします。'] },
        howToStart: { title: 'ネガティブプロンプティングの使い方', numberedItems: ['**出力で見たくない具体的な単語、文体、スタイル、またはアプローチを特定します。** 例：「マーケティング用語を使用しない。約束をしない。競合他社を参照しない。」', '**「してはいけない」「すべきではない」「絶対に～しない」という明示的な言語を使用します。** 「可能なら避ける」などの柔らかい表現は効果が薄いです。直接的に：「「破壊する」「ゲームチェンジ」「AI対応」という単語を決して使用しないでください。」', '**ネガティブな例を提供します：モデルに明示的に望まない内容を示します。** 例：「こう書かないでください：「AIソリューションで爆発的な成長をアンロック。」こう書かないでください：「当社の最先端プラットフォームは機械学習を使用しています。」代わりにこう書いてください：[ポジティブな例を提供]。」', '**ポジティブとネガティブのガイダンスを組み合わせます。** 何を避けるかを言うだけでなく、何をすべきかも言ってください。例：「ハイプ言語を使用しないでください。代わりに、具体的で測定可能な利点に焦点を当ててください。」', '**ネガティブプロンプティングは控えめに使用します—モデルを混乱させることもあります。** ポジティブガイダンス（「明確で専門的に書く」）は、重いネガティブ（「あいまいであってはいけない、簡略化してはいけない、詳細を省略してはいけない」）より効果的です。両方のアプローチをバランスさせてください。'] },
      },
    },
    zh: {
      theme: 'Techniques',
      title: '消极提示法：告诉AI不要做什么',
      intro: '消极提示法是一种提示工程技术，通过明确指定模型应该避免的内容、风格、结构或行为，确保AI输出保持在明确的边界范围内。它充当您正常指令之上的"安全保护层"。',
      publishDate: '2026-03-26',
      readTime: '阅读约5分钟',
      metaDescription: '掌握消极提示法：如何使用明确的禁止规则维持AI输出在品牌、合规和质量边界内。',
      primaryTerm: '消极提示法',
      seoTitle: '消极提示法：用明确禁止规则控制AI输出',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '消极提示法：告诉AI不要做什么',
        description: '消极提示法的定义、重要性及实施方法，帮助您在安全、合规和品牌对齐的边界内维持AI输出质量。',
        datePublished: '2026-03-26',
        dateModified: '2026-03-26',
        keywords: ['消极提示法', '提示工程', '安全防护', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: '提示工程' },
          { '@type': 'Thing', name: '大语言模型' },
          { '@type': 'Thing', name: '安全防护' },
        ],
      },
      sections: {
        whatIsNegativePrompting: { title: '什么是消极提示法', content: ['**消极提示法是指在提示中添加明确的"不要做"规则，与您期望模型执行的内容并行。** 与其仅描述目标输出，您还需指定不要涉及的主题、语气、格式或常见错误。', '这些负面指令可涵盖：禁用词汇、不能涉及的内容类别、禁区观点或您不需要的特定风格（例如"不要使用笑话""不要用emoji"或"避免营销用语"）。消极规则越清晰，模型越容易保持对齐。'] },
        whyItMatters: { title: '为什么消极提示法很重要', content: ['**消极提示法很重要，因为现实中的AI输出不仅受目标限制，更受品牌、法律、安全和质量约束的限制。** 一个好的结果通常是"准确且符合边界"，而不仅仅是"有用"。', '消极提示法帮助您：'], items: ['防止已经出现过的特定问题，如过度销售、臆断或不必要的免责声明。', '直接在提示中执行品牌和语气规则，例如避免行业术语或禁用形容词。', '减少人工编辑需求，因为许多常见修正都可通过明确的"不要"指导预先排除。'] },
        useNote: { content: ['正确使用消极提示法，可以将过去的错误转化为可复用的防护机制。'] },
        whatYouCanConstrain: { title: '消极提示法可以约束的内容类型', content: ['**您可以将消极提示法应用于内容、语气、结构和行为。** 关键是要足够具体，让模型清楚地知道要避免什么。', '常见的负面约束：'], items: ['内容：不能提供医学建议、不能提及竞争对手、不能给出法律结论。', '语气：不能使用"革命性""颠覆性"等夸大词汇、禁用emoji、避免讽刺语气。', '结构：不能添加前言部分、不能使用序号列表、不能包含总结。', '行为：不能编造数据统计、不能凭空猜测——当不确定时应明确表示。'] },
        combiningNote: { content: ['将正面和负面指导结合，可以显著提高提示的精确性和有效性。'] },
        example: { title: '案例：不使用vs使用消极提示法的对比', content: ['**通过对比通用提示与编码明确"不要"规则的提示，消极提示法的效果就变得清晰了。** 以下是一个针对中国市场的产品描述案例。', '**【弱提示】**', '"为我们的新分析仪表板写一份产品描述。"', '**【好提示】**', '"您是一名B2B产品营销经理，面向国内大中型企业服务。任务：为我们的新数据分析仪表板撰写产品描述，目标受众是互联网和制造业的运营总监。约束条件（消极提示）：不能使用"革命性""突破性""AI赋能"等营销夸大词汇。不能提及竞争对手或进行产品对比。不能承诺未来功能——仅描述现有功能。字数不超过180字。格式要求：1个简洁概览段落+3个核心优势要点。"', '这个"好"提示版本将已知陷阱（营销言语、过度承诺、产品对标）直接编码进指令中，大幅减少了人工修改的必要。'] },
        whenToUse: { title: '何时使用消极提示法', content: ['**当您有明确的例子说明绝对不想看到的输出时，就应该使用消极提示法。** 它在需要重复执行、容易出现相同错误的工作流中特别有效。', '典型应用场景：'], items: ['客户沟通——语气、声明和承诺必须遵守严格规范。', '受管制领域（金融、医疗、法律）——必须避免特定类型的建议或措辞。', '内部文档或报告——不能包含机密内容、个人数据或未经证实的观点。', '对外内容——需避免敏感话题、政治观点或争议性表述。'] },
        productionNote: { content: ['对于快速、低风险的试验，消极提示法可保持简洁。随着提示逐步进入生产环境，您的"不要"规则列表通常会不断扩展。'] },
        inPromptQuorum: { title: 'PromptQuorum中的消极提示法', content: ['**PromptQuorum是一个多模型AI调度工具，可将消极提示法内置于可复用的框架中，而无需每次重新编写。** 您可以定义一次标准的负面约束，然后将其附加到多个任务中。', 'PromptQuorum让您能够：'], items: ['向SPECS（范围-目标-案例-约束-说明）、RTF或CRAFT等框架添加消极提示模块（如"禁用词""禁止内容""风格限制"），确保始终应用这些规则。', '为您的品牌或团队维护共享的"不要"规则列表，确保所有提示和模型中的防护机制保持一致。', '在不同模型上运行相同的负面约束提示，查看哪个模型最好地遵守您的边界限制。'] },
        pqConversion: { content: ['通过将消极提示法视为提示架构的组成部分，PromptQuorum帮助您将过往错误转化为持久可复用的约束条件。'] },
        practicalSuggestions: { title: '实用建议：在中国商业环境中的应用', content: ['消极提示法在国内商业场景中特别有价值。以下是几个务实的建议，帮助您在SaaS、电商、金融科技和供应链等领域有效应用：'], items: ['在SaaS销售描述中：禁用"最先进""全球领先"等绝对化表述。使用"支持""可以帮助"等更保守的措辞，符合国内消费者预期。', '在电商文案中：不能涉及"包治百病"等医疗声称、避免"国外品质"暗示、禁用虚假折扣承诺。', '在金融内容中：不能给出个人投资建议、避免"稳赚不赔"表述、必须清晰标注风险信息。', '在供应链和企业服务中：不能夸大效率提升比例（如"提升300%"）、避免未经验证的案例数字、明确标注假设条件。', '在API文档和开发者指南中：禁止模糊的技术描述、要求所有性能声明必须附带基准数据、避免与开源项目的不当对标。'] },
        howToStart: { title: '如何开始使用消极提示法', numberedItems: ['**第一步：列出您不要的具体内容——特定词汇、语气、风格或做法。** 例如：不使用营销术语、不做虚假承诺、不提及竞争对手品牌。', '**第二步：用明确的禁止性语言表述规则——"不要""必须不""永远不要"。** 模糊的表述如"尽量避免"效果较差。应该直接说："永远不要使用"颠覆""改变游戏规则"或"AI赋能"这样的词。"', '**第三步：提供反面案例——展示给模型看您明确不要什么样的输出。** 例如："不要这样写：\'用我们的AI方案突飞猛进。\'不要这样：\'我们的尖端平台采用机器学习。\'应该这样：[给出正面范文]。"', '**第四步：正负指导相结合——不仅说要避免什么，还要说做什么。** 例如："不要用营销语言。改为专注于具体、可量化的业务收益。"', '**第五步：适度使用消极提示——过多的禁止规则可能混淆模型。** 正面指导（"用清晰、专业的技术语言"）通常比严苛的禁令（"不要含糊、不要简化、不要遗漏细节"）更有效。要在两者之间找到平衡。'] },
        implementationChecklist: { title: '实施清单：确保消极提示法有效执行', content: ['为了确保消极提示法真正有效，建议按照以下清单逐项检查：'], items: ['□ 列出过去出现过至少2-3次的具体错误或不符合预期的输出。', '□ 将这些错误翻译成明确的"不要"规则，用中文直接、无歧义地表述。', '□ 对每条规则提供至少一个反面例子（错误的做法）和一个正面例子（正确的做法）。', '□ 在提示中同时包含3-5条正面指导（您期望看到的做法）。', '□ 在生产前用2-3个实际工作任务测试这些规则，验证模型的遵守程度。', '□ 定期回顾输出结果，如发现新的错误模式，及时补充和更新"不要"规则。'] },
      },
    },
  };
