// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: google-prompting-guide
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: "Google's Prompting Guide",
      intro: "Google's Prompting Guide is a set of practical recommendations from Google DeepMind for writing prompts that make models like Gemini 2.5 Pro more reliable, controllable, and useful in real-world applications. PromptQuorum includes Google's Prompting Guide as a framework that users can select and apply directly across all supported models.",
      publishDate: '2026-03-24',
      readTime: '7 min read',

      seoTitle: 'Google Gemini Prompting 2026 Guide',

      metaDescription: 'Google Gemini prompting best practices: thinking mode, multimodal. Techniques specific to Google AI for quality outputs.',

      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: "Google's Prompting Guide as a Framework",
        description: "How Google's Prompting Guide works, its core techniques, and how PromptQuorum offers it as a reusable framework across multiple AI models.",
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['Google Prompting Guide', 'prompt best practices', 'Gemini 2.5 Pro', 'prompt frameworks', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
          { '@type': 'Thing', name: 'Large Language Models' },
        ],
        mentions: [
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4o', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
      },
      sections: {
        whatIsGoogle: {
          title: "What Google's Prompting Guide Is",
          content: [
            "**Google's Prompting Guide is a collection of patterns and best practices for prompting Gemini and other large language models, focused on specificity, structure, and safety.** The guide translates research from Google DeepMind into concrete rules that non-experts can use. It covers how to define roles, provide context, constrain outputs, and handle tasks such as reasoning, coding, and data extraction.",
            'In practice, the guide functions like a catalog of prompt recipes. Each recipe shows how to phrase instructions, what to avoid, and how to add examples so that the model\'s behavior becomes more predictable. These patterns work not only for Gemini 2.5 Pro but also for models such as GPT-4o and Claude 4.6 Sonnet, because the underlying principles are general.',
          ],
        },
        corePrinciples: {
          title: "Core Principles in Google's Prompting Guide",
          content: [
            "**The core principles in Google's Prompting Guide revolve around clarity, constraint, and iterative refinement rather than clever wording.** The emphasis is on telling the model exactly what you want in a way that is easy to evaluate.",
            'Common themes include:',
          ],
          items: [
            'Be explicit about the task, audience, and output format instead of relying on the model to guess.',
            'Provide representative examples when possible so the model can imitate the pattern.',
            'Break complex tasks into steps and ask the model to reason before answering.',
            'Use clear safety and quality constraints, such as banned content, citation requirements, or length limits.',
          ],
        },
        techniques: {
          title: "Techniques Highlighted in Google's Prompting Guide",
          content: [
            "**Google's Prompting Guide highlights a set of recurring techniques that you can apply across domains, from research to coding to product copy.** While naming and emphasis may vary between versions, the underlying ideas are consistent.",
            'Typical techniques include:',
          ],
          items: [
            'Role prompting: Asking the model to "act as" a specific expert (for example a data analyst or product manager).',
            'Step-by-step reasoning: Requesting intermediate steps or explanations before the final answer.',
            'Few-shot prompting: Supplying several input–output examples to anchor behavior.',
            'Structured output: Asking for answers in defined formats such as bullet lists, tables, or JSON.',
            'Iterative refinement: Reusing the model\'s own output as input for revision and improvement.',
          ],
        },
        badVsGoodExample: {
          title: "Example: Bad vs Good Prompt Using Google's Guide",
          content: [
            "**The impact of Google-style prompting is easiest to see when you compare an unstructured prompt to one that follows these principles for the same task.** Below is a simple example for a product explainer.",
            '**[Bad Prompt]**',
            '"Explain our new AI feature to users."',
            '**[Good Prompt]**',
            '"You are a product educator writing for non-technical users. Task: Explain our new AI feature that automatically summarizes weekly customer support tickets into a one-page report for managers. Audience: Busy support leaders with limited technical background. Requirements: Use plain language with short sentences. Structure the answer with an intro, 3 bullet points for key benefits, and a short closing paragraph. Do not use hype words like \'revolutionary\' or \'game-changing\'. Keep the explanation between 250 and 300 words. Output: Markdown with H2 headings for each section."',
            "This \"good\" version follows Google's recommendations by defining role, audience, structure, constraints, and format in a way that any modern model can follow.",
          ],
        },
        howPQImplements: {
          title: "How PromptQuorum Implements Google's Prompting Guide",
          content: [
            "**PromptQuorum is a multi-model AI dispatch tool that packages Google's Prompting Guide as a reusable framework so users can apply these best practices without memorizing them.** When you select the Google Prompting Guide framework in PromptQuorum, the app exposes fields that reflect the guide's core ideas—task, role, audience, structure, constraints, and examples—and combines them into a single high-quality prompt.",
            'Inside PromptQuorum, you can:',
          ],
          items: [
            'Fill in guide-aligned fields once and send the resulting prompt to Gemini 2.5 Pro, GPT-4o, Claude 4.6 Sonnet, and local models via Ollama or LM Studio in parallel.',
            'Save Google-style prompt templates for recurring workflows such as explainers, code reviews, and structured summaries.',
            'Compare how different models respond when guided by the same Google-derived structure, then choose the provider that best fits each task.',
          ],
        },
        usingWithOthers: {
          title: "Using Google's Guide With Other Frameworks",
          content: [
            "**You should treat Google's Prompting Guide as a set of low-level techniques that work together with higher-level frameworks like Single Step, CO-STAR, SPECS, RISEN, and TRACE.** The guide tells you how to phrase instructions; the frameworks tell you how to structure entire workflows.",
            'A practical approach is:',
          ],
          items: [
            'Use a framework (for example CO-STAR or SPECS) to define the overall structure of the task.',
            "Apply Google's prompting principles inside that structure: explicit roles, clear constraints, few-shot examples, and step-by-step reasoning when needed.",
            'Run the combined prompt in PromptQuorum across multiple models to validate that it behaves consistently.',
          ],
        },

        howToStart: {
          title: 'How to Follow Google\'s Prompting Best Practices',
          numberedItems: [
            '**Be clear and specific: avoid vague instructions.** Instead of \'Tell me about AI,\' ask \'Explain how Large Language Models (LLMs) generate text, with technical detail suitable for computer science students.\'',
            '**Provide examples of the desired output format.** Show a sample answer or code example the model should emulate. Examples teach better than descriptions.',
            '**Give the model a \'role\' to play if it helps.** Example: \'You are a financial advisor. Explain tax-loss harvesting to a high-net-worth individual.\' Roles guide tone and detail level.',
            '**Use step-by-step reasoning for complex tasks.** Ask the model to \'think step by step\' before answering. This forces deliberation and catches errors.',
            '**Test your prompt on varied inputs before deploying at scale.** A prompt that works on one example may fail on edge cases. Validate across diverse scenarios.',
          ],
        },
      },
    },
    de: {
      theme: 'Frameworks',
      title: 'Google Prompting Guide',
      intro: 'Google Prompting Guide ist eine Sammlung praktischer Empfehlungen von Google DeepMind für das Schreiben von Prompts, die Modelle wie Gemini 2.5 Pro zuverlässiger, steuerbarer und hilfreicher in realen Anwendungen machen. Die Anleitung überträgt Forschung in konkrete, nicht-technische Regeln. PromptQuorum bietet diese Anleitung als Framework an, das Benutzer direkt über alle unterstützten Modelle hinweg anwenden können.',
      publishDate: '2026-03-24',
      readTime: '6 min Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Google Prompting Guide',
      metaDescription: 'Google Prompting Guide: 5 Kernprinzipien für klare, strukturierte Prompts. Klarheit, Beispiele, Rollen, Beschränkungen.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Google Prompting Guide',
        description: 'Wie der Google Prompting Guide funktioniert, seine Kernmethoden, und wie PromptQuorum ihn als wiederverwendbares Framework über mehrere KI-Modelle anbietet.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['Google Prompting Guide', 'Prompt Best Practices', 'Gemini 2.5 Pro', 'Prompt Frameworks', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
          { '@type': 'Thing', name: 'Large Language Models' },
        ],
        mentions: [
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
        teaches: 'Wie man die 5 Kernprinzipien des Google Prompting Guide (Klarheit, Beschränkungen, Beispiele, Rollen, Struktur) anwendet, um Prompts präzise und wiederholbar zu schreiben',
        assesses: 'Fähigkeit, Prompts klar zu strukturieren, relevant Beispiele zu liefern, Rollen und Beschränkungen zu definieren, und die Qualität von Modell-Outputs zu bewerten',
      },
      sections: {
        whatIsGoogle: {
          title: 'Was der Google Prompting Guide ist',
          content: [
            '**Der Google Prompting Guide ist eine Sammlung von Mustern und Best Practices zum Prompting von Gemini und anderen großen Sprachmodellen, fokussiert auf Spezifität, Struktur und Sicherheit.** Der Guide übersetzt Forschung von Google DeepMind in konkrete Regeln, die Nicht-Experten verwenden können. Er behandelt, wie man Rollen definiert, Kontext bereitstellt, Outputs einschränkt und mit Tasks wie Reasoning, Coding und Datenextraktion umgeht.',
            'In der Praxis funktioniert der Guide wie ein Katalog von Prompt-Rezepten. Jedes Rezept zeigt, wie man Anweisungen formuliert, was zu vermeiden ist, und wie man Beispiele hinzufügt, damit das Verhalten des Modells vorhersehbarer wird. Diese Muster funktionieren nicht nur für Gemini 2.5 Pro, sondern auch für Modelle wie GPT-4o und Claude 4.6 Sonnet, weil die zugrunde liegenden Prinzipien generell sind.',
          ],
        },
        corePrinciples: {
          title: 'Kernprinzipien im Google Prompting Guide',
          content: [
            '**Die Kernprinzipien im Google Prompting Guide drehen sich um Klarheit, Beschränkung und iterative Verfeinerung statt cleverer Formulierungen.** Der Schwerpunkt liegt darauf, dem Modell genau zu sagen, was man will, auf eine Weise, die leicht zu bewerten ist.',
            'Häufige Themen sind:',
          ],
          items: [
            'Sei explizit über Task, Zielgruppe und Output-Format, statt dich auf das Modell zu verlassen, es zu erraten.',
            'Gib repräsentative Beispiele an, damit das Modell das Muster imitieren kann.',
            'Zerlege komplexe Tasks in Schritte und fordere das Modell auf, vorher zu begründen.',
            'Nutze klare Sicherheits- und Qualitätsbeschränkungen, wie verbotene Inhalte, Zitieranforderungen oder Längenlimits.',
          ],
        },
        techniques: {
          title: 'Techniken im Google Prompting Guide',
          content: [
            '**Der Google Prompting Guide hebt eine Reihe von wiederkehrenden Techniken hervor, die man über Domänen hinweg anwenden kann, von Forschung zu Coding zu Produktkopie.** Während Naming und Schwerpunkt zwischen Versionen variieren können, sind die zugrunde liegenden Ideen konsistent.',
          ],
          items: [
            'Rollen-Prompting: Das Modell auffordern, „als" ein spezifischer Experte zu agieren (z.B. Datenanalyst oder Produktmanager).',
            'Schritt-für-Schritt-Reasoning: Zwischenschritte oder Erklärungen vor der finalen Antwort anfordern.',
            'Few-Shot Prompting: Mehrere Input–Output-Beispiele liefern, um Verhalten zu verankern.',
            'Strukturierte Ausgabe: Antworten in definierten Formaten wie Bullet-Listen, Tabellen oder JSON anfordern.',
            'Iterative Verfeinerung: Die eigene Ausgabe des Modells als Input für Überarbeitung und Verbesserung wiederverwenden.',
          ],
        },
        badVsGoodExample: {
          title: 'Beispiel: Schlechter vs. guter Prompt mit Googles Guide',
          content: [
            '**Die Auswirkung von Google-Style-Prompting sieht man am besten, wenn man einen unstrukturierten Prompt mit einem Prompt vergleicht, der diese Prinzipien für dieselbe Task befolgt.** Hier ist ein einfaches Beispiel für einen Produkterklärer.',
            '**[Schlechter Prompt]**',
            '"Erkläre unsere neue KI-Funktion für Benutzer."',
            '**[Guter Prompt]**',
            '"Du bist ein Produktedukator, der für nicht-technische Benutzer schreibt. Task: Erkläre unsere neue KI-Funktion, die automatisch wöchentliche Kundensupport-Tickets in einen einseitigen Report für Manager zusammenfasst. Zielgruppe: Beschäftigte Support-Führungskräfte mit limitiertem technischem Hintergrund. Anforderungen: Nutze einfache Sprache mit kurzen Sätzen. Strukturiere die Antwort mit einer Intro, 3 Bullet Points für Hauptvorteile und einem kurzen abschließenden Absatz. Nutze keine Hype-Wörter wie \'revolutionär\' oder \'spielverändernd\'. Halte die Erklärung zwischen 250 und 300 Worten. Output: Markdown mit H2-Überschriften für jeden Abschnitt."',
            'Diese „gute" Version folgt Googles Empfehlungen, indem sie Rolle, Zielgruppe, Struktur, Beschränkungen und Format auf eine Weise definiert, die jedes modernes Modell befolgen kann.',
          ],
        },
        howPQImplements: {
          title: 'Wie PromptQuorum den Google Prompting Guide implementiert',
          content: [
            '**PromptQuorum ist ein Multi-Model-AI-Dispatch-Tool, das Googles Prompting Guide als wiederverwendbares Framework paketiert, damit Benutzer diese Best Practices anwenden können, ohne sie auswendig zu lernen.** Wenn du den Google Prompting Guide Framework in PromptQuorum auswählst, zeigt die App Felder an, die den Kernideen des Guide entsprechen—Task, Rolle, Zielgruppe, Struktur, Beschränkungen und Beispiele—und kombiniert sie in einen einzigen hochwertigen Prompt.',
            'In PromptQuorum kannst du:',
          ],
          items: [
            'Guide-ausgerichtete Felder einmal ausfüllen und den resultierenden Prompt an Gemini 2.5 Pro, GPT-4o, Claude 4.6 Sonnet und lokale Modelle via Ollama oder LM Studio parallel senden.',
            'Google-Style-Prompt-Templates für wiederkehrende Workflows wie Erklärer, Code-Reviews und strukturierte Zusammenfassungen speichern.',
            'Vergleichen, wie verschiedene Modelle reagieren, wenn sie von derselben Google-abgeleiteten Struktur geleitet werden, dann den Anbieter auswählen, der am besten zu jeder Task passt.',
          ],
        },
        usingWithOthers: {
          title: 'Google\'s Guide mit anderen Frameworks verwenden',
          content: [
            '**Du solltest Googles Prompting Guide als eine Reihe von Low-Level-Techniken behandeln, die mit höherwertigen Frameworks wie Single Step, CO-STAR, SPECS, RISEN und TRACE zusammenarbeiten.** Der Guide sagt dir, wie du Anweisungen formulierst; die Frameworks sagen dir, wie du ganze Workflows strukturierst.',
          ],
          items: [
            'Nutze ein Framework (z.B. CO-STAR oder SPECS), um die Gesamtstruktur der Task zu definieren.',
            'Wende Googles Prompting-Prinzipien in dieser Struktur an: explizite Rollen, klare Beschränkungen, Few-Shot-Beispiele und Schritt-für-Schritt-Reasoning wenn nötig.',
            'Führe den kombinierten Prompt in PromptQuorum über mehrere Modelle aus, um zu validieren, dass er sich konsistent verhält.',
          ],
        },
        howToStart: {
          title: 'Wie du Googles Prompting Best Practices folgst',
          numberedItems: [
            '**Sei klar und spezifisch: vermeide vage Anweisungen.** Statt \'Erzähl mir von KI,\' frag \'Erkläre, wie Große Sprachmodelle (LLMs) Text generieren, mit technischem Detail passend für Informatik-Studenten.\'',
            '**Gib Beispiele des gewünschten Output-Formats.** Zeige eine Beispielantwort oder Code-Beispiel, das das Modell nachahmen sollte. Beispiele lehren besser als Beschreibungen.',
            '**Gib dem Modell eine \'Rolle\' zum Spielen, wenn es hilft.** Beispiel: \'Du bist ein Finanzberater. Erkläre Tax-Loss Harvesting einem vermögenden Privatperson.\' Rollen leiten Ton und Detaillevel.',
            '**Nutze Schritt-für-Schritt-Reasoning für komplexe Tasks.** Fordere das Modell auf, \'schritt für schritt zu denken\' bevor es antwortet. Dies zwingt zu Überlegung und fängt Fehler ein.',
            '**Teste deinen Prompt auf varied Eingaben, bevor du ihn im Großen einsetzt.** Ein Prompt, der auf einem Beispiel funktioniert, kann bei Edge-Cases fehlschlagen. Validiere über diverse Szenarien.',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Ist der Google Guide auf Gemini beschränkt?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Nein. Die Prinzipien sind generell und funktionieren mit GPT-4o, Claude und allen modernen Modellen. Gemini ist das Primär-Beispiel, aber die Ideen sind universell.' } },
          { '@type': 'Question', 'name': 'Kann ich den Google Guide mit anderen Frameworks kombinieren?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Absolut, und das ist empfohlen. Nutze ein hochrangiges Framework (CO-STAR, SPECS) um die Struktur zu definieren, dann wende Googles Prompting-Prinzipien darin an.' } },
          { '@type': 'Question', 'name': 'Funktioniert der Google Guide für alle Art von Tasks?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Der Guide passt zu den meisten Tasks, außer den sehr einfachen, die keine Struktur brauchen. Für komplexe, mehrstufige Workflows kombiniere ihn mit umfassenderen Frameworks.' } },
          { '@type': 'Question', 'name': 'Muss ich immer ein Beispiel in meinem Prompt zeigen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Nicht obligatorisch, aber stark empfohlen für komplexe oder kreative Tasks. Für simple Tasks reicht eine klare Beschreibung oft aus.' } },
          { '@type': 'Question', 'name': 'Welche DSGVO- und Datenschutz-Überlegungen gelten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Wenn du sensible Daten handhabst, vermeide Cloud-APIs. Nutze lokal gehostete Modelle (Ollama, LM Studio) über PromptQuorum oder stelle sicher, dass der API-Anbieter DSGVO-konform ist.' } },
        ],
      },
    },
    fr: {
      theme: 'Frameworks',
      title: 'Guide Google pour la Rédaction de Prompts',
      intro: 'Le Guide Google pour la Rédaction de Prompts propose des pratiques concrètes de Google DeepMind pour écrire des prompts clairs et structurés. Ces principes rendent les modèles comme Gemini 2.5 Pro plus fiables et prévisibles. PromptQuorum intègre ce guide comme framework directement applicable à tous les modèles supportés.',
      publishDate: '2026-03-24',
      readTime: '6 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Guide Google pour la Rédaction de Prompts',
      metaDescription: 'Principes Google pour rédiger des prompts clairs, structurés et efficaces. Clarté, exemples, contraintes explicites et rôles.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Guide Google pour la Rédaction de Prompts',
        description: 'Comprendre le Guide Google, ses principes clés, et comment l\'appliquer systématiquement dans PromptQuorum.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['Guide Google', 'rédaction de prompts', 'bonnes pratiques', 'Gemini 2.5 Pro', 'frameworks de prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Ingénierie des prompts' },
          { '@type': 'Thing', name: 'Frameworks de prompts' },
          { '@type': 'Thing', name: 'Modèles de langage volumineux' },
        ],
        mentions: [
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
        teaches: 'Comment appliquer les principes Google (clarté, contraintes explicites, exemples concrets, rôles) pour rédiger des prompts fiables et prévisibles',
        assesses: 'Capacité à structurer des prompts clairement, fournir des exemples pertinents, définir des rôles, et mesurer la qualité des résultats',
      },
      sections: {
        whatIsGoogle: {
          title: 'Qu\'est-ce que le Guide Google pour la Rédaction de Prompts',
          content: [
            '**Le Guide Google est un ensemble de règles pratiques pour rédiger des prompts clairs et structure qui fonctionnent avec n\'importe quel modèle.** L\'accent porte sur la clarté, la structure et la sécurité plutôt que sur les formulations « malignes ».',
            'Ces principes s\'appliquent à Gemini 2.5 Pro comme à GPT-4o et Claude 4.6 Sonnet, car les idées sous-jacentes sont universelles.',
          ],
        },
        corePrinciples: {
          title: 'Principes Clés du Guide Google',
          content: [
            '**Le Guide Google privilégie la clarté, les contraintes explicites et l\'itération plutôt que l\'improvisation.** L\'objectif : dire précisément au modèle ce que vous attendez, de manière facile à évaluer.',
          ],
          items: [
            'Soyez explicite sur la tâche, l\'audience et le format de sortie.',
            'Fournissez des exemples concrets pour que le modèle imite le pattern.',
            'Décomposez les tâches complexes en étapes.',
            'Utilisez des contraintes claires : contenu interdit, citations requises, limites de longueur.',
          ],
        },
        techniques: {
          title: 'Techniques Clés du Guide Google',
          content: [
            '**Le Guide Google met en avant des techniques applicables dans tous les domaines.** Ces techniques sont transposables à la recherche, au codage ou à la rédaction marketing.',
          ],
          items: [
            'Rôle : Demander au modèle de « faire comme si » il était un expert (analyste, manager, etc.).',
            'Raisonnement étape par étape : Demander les étapes intermédiaires avant la réponse finale.',
            'Few-shot : Fournir 2-3 exemples pour ancrer le comportement.',
            'Sortie structurée : Demander listes à puces, tableaux, JSON.',
            'Itération : Utiliser la sortie du modèle comme entrée pour l\'améliorer.',
          ],
        },
        badVsGoodExample: {
          title: 'Exemple : Mauvais vs Bon Prompt Google',
          content: [
            '**L\'impact de l\'approche Google est plus visible en comparant deux prompts sur la même tâche.** Voici un exemple de rédaction pour expliquer une nouvelle fonctionnalité.',
            '**[Mauvais Prompt]**',
            '"Explique notre nouvelle fonctionnalité IA aux utilisateurs."',
            '**[Bon Prompt selon Google]**',
            '"Rôle : Tu es un éducateur produit écrivant pour des utilisateurs non-techniques. Tâche : Explique notre nouvelle fonctionnalité IA qui résume automatiquement les tickets support hebdomadaires en un rapport d\'une page pour les managers. Audience : Leaders support occupés, sans formation technique. Exigences : Utilise un langage simple et des phrases courtes. Structure : Intro, 3 points clés sur les bénéfices, conclusion courte. N\'utilise pas de mots creux comme \'révolutionnaire\'. Limite : 250-300 mots. Format : Markdown avec H2 pour chaque section."',
            'Le bon prompt suit les recommandations Google : rôle clair, audience définie, contraintes explicites, format spécifié.',
          ],
        },
        howPQImplements: {
          title: 'Comment PromptQuorum Intègre le Guide Google',
          content: [
            '**PromptQuorum empaquette le Guide Google comme framework réutilisable afin que vous appliquiez ces principes sans les mémoriser.** Quand vous sélectionnez le Guide Google dans PromptQuorum, l\'app expose des champs alignés sur les idées clés du guide.',
          ],
          items: [
            'Remplissez les champs une seule fois, puis envoyez à Gemini 2.5 Pro, GPT-4o, Claude et modèles locaux en parallèle.',
            'Sauvegardez des templates Google-style pour les workflows récurrents : explications, revues de code, résumés structurés.',
            'Comparez les réponses entre modèles quand guidés par la même structure.',
          ],
        },
        usingWithOthers: {
          title: 'Utiliser le Guide Google avec d\'autres Frameworks',
          content: [
            '**Le Guide Google fournit des techniques bas-niveau qui se combinent avec les frameworks haut-niveau comme CO-STAR, SPECS, RISEN et TRACE.** Le Guide dit « comment formuler » ; les frameworks disent « comment structurer le workflow ».',
          ],
          items: [
            'Choisissez un framework pour définir la structure globale (ex : CO-STAR ou SPECS).',
            'Appliquez les principes Google à l\'intérieur : rôles explicites, contraintes claires, exemples, raisonnement étape par étape.',
            'Testez la combinaison dans PromptQuorum sur plusieurs modèles.',
          ],
        },
        howToStart: {
          title: 'Comment Commencer avec le Guide Google',
          numberedItems: [
            '**Soyez clair et spécifique.** Au lieu de « Parle-moi d\'IA », demandez « Explique comment les LLMs génèrent du texte, avec détail technique pour des étudiants en informatique ».',
            '**Montrez un exemple de sortie attendue.** Les exemples enseignent mieux que les descriptions.',
            '**Assignez un rôle quand c\'est utile.** « Tu es un conseiller financier » guide le ton et le niveau de détail.',
            '**Utilisez le raisonnement étape par étape.** Demandez au modèle de « réfléchir étape par étape ». Cela force la délibération.',
            '**Testez sur des entrées variées.** Un prompt qui marche sur un exemple peut échouer sur des cas limites.',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Le Guide Google est-il limité à Gemini ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Non. Les principes Google sont généraux et fonctionnent avec GPT-4o, Claude, et tous les modèles modernes. Gemini est l\'exemple principal, mais les idées sont universelles.' } },
          { '@type': 'Question', 'name': 'Puis-je combiner le Guide Google avec d\'autres frameworks ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, c\'est recommandé. Utilisez un framework haut-niveau comme CO-STAR ou SPECS, puis appliquez les principes Google à l\'intérieur.' } },
          { '@type': 'Question', 'name': 'Le Guide Google fonctionne-t-il pour tous les types de tâches ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Le Guide Google convient à la plupart des tâches, sauf les très simples qui ne nécessitent pas de structure. Pour les workflows complexes multi-étapes, combinez-le avec un framework plus complet.' } },
          { '@type': 'Question', 'name': 'Faut-il toujours montrer un exemple dans mes prompts ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Non, mais fortement recommandé pour les tâches complexes ou créatives. Pour les tâches simples, une description claire suffit.' } },
          { '@type': 'Question', 'name': 'Quelle est la différence entre « rôle » et « persona » ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ils sont similaires. Le « rôle » du Guide Google est une persona spécifique avec expertise (expert, manager, etc.) que vous assignez au modèle.' } },
        ],
      },
    },
    ja: {
      theme: 'Frameworks',
      title: 'Googleプロンプト作成ガイド',
      intro: 'GoogleプロンプトガイドはGoogle DeepMindが提唱する、モデルに「何をしてほしいのか」を明確に伝えるための実践的な原則集です。これらの原則に従うことで、Gemini 2.5 ProやGPT-4o、Claudeなど、どのモデルでも予測可能で信頼できる結果が得られます。PromptQuorumではこのガイドをフレームワークとして統合しており、すべてのユーザーが直接活用できます。',
      publishDate: '2026-03-24',
      readTime: '7分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Googleプロンプト作成ガイド',
      metaDescription: 'Googleプロンプト作成ガイドの原則：明確さ、制約、例、ロール。モデルの挙動を予測可能にする方法。',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Googleプロンプト作成ガイド',
        description: 'Googleプロンプト作成ガイドの仕組み、中核原則、PromptQuorumでの活用方法。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['Googleプロンプトガイド', 'プロンプト作成', 'ベストプラクティス', 'Gemini 2.5 Pro', 'プロンプトフレームワーク', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'プロンプト・エンジニアリング' },
          { '@type': 'Thing', name: 'プロンプトフレームワーク' },
          { '@type': 'Thing', name: '大規模言語モデル' },
        ],
        mentions: [
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
        teaches: 'Googleの原則（明確さ・制約・例・ロール）に基づいてプロンプトを構造化し、AIの出力を予測可能にする方法',
        assesses: 'プロンプトを効果的に構造化できる能力、適切な例と制約を定義する力、モデルの挙動を評価する技術',
      },
      sections: {
        whatIsGoogle: {
          title: 'Googleプロンプト作成ガイドとは',
          content: [
            '**Googleプロンプト作成ガイドは、モデルに正確に指示を伝えるための実践的な原則集です。** Gemini 2.5 Proを中心に提案されていますが、原則は汎用的で、GPT-4oやClaudeでも同じく有効です。',
            'ガイドはレシピ集のように機能します。タスク、例、制約をどう組み合わせるかを示しており、これに従うことで、モデルの挙動がより予測可能になります。',
          ],
        },
        corePrinciples: {
          title: 'Googleガイドの中核原則',
          content: [
            '**Googleガイドは「巧い言い回し」よりも、明確さ・構造・安全性に重点を置きます。** モデルに「何をしたいのか」を正確に、評価しやすいように伝えることが重要です。',
          ],
          items: [
            'タスク・読み手・出力形式を明確に。推測に頼らない。',
            '例を提供。モデルが真似できるようにする。',
            '複雑なタスクは段階的に。推論を求める。',
            '禁止内容・参照要件・文字数制限など、制約を明白に。',
          ],
        },
        techniques: {
          title: 'Googleガイドが示す主要テクニック',
          content: [
            '**Googleガイドで紹介されるテクニックは、研究からコード、マーケティングまで、あらゆる領域に適用できます。**',
          ],
          items: [
            'ロール設定：「データアナリストとして」など、モデルに職務を設定する',
            'ステップバイステップ推論：最終答の前に中間ステップを提示させる',
            'Few-shot例：2～3個の入出力例を示してパターンを示す',
            '構造化出力：箇条書き・表・JSONなど、明確な形式を指定',
            '反復改善：モデルの出力を入力として再度処理し、洗練させる',
          ],
        },
        badVsGoodExample: {
          title: '実例：Googleガイドに沿わない vs 沿う',
          content: [
            '**同じタスクで、構造化されないプロンプトとGoogleガイドに従うプロンプトを比較すると、差は明らか。** 製品説明の例：',
            '**【構造化されないプロンプト】**',
            '"新しいAI機能をユーザーに説明して。"',
            '**【Googleガイドに沿うプロンプト】**',
            '"ロール：あなたは非技術ユーザー向けの製品教育者です。タスク：当社の新機能「週次サポートチケットを1ページレポートに自動要約」を説明してください。読み手：忙しいサポート部長、技術背景はなし。要件：平易な言葉で短い文。構成：序文、3つの利点、短い結論。禁止：「革新的」などの大げさな言葉。制約：250～300字。形式：H2見出しでセクション分け。"',
            'Googleガイドに沿うプロンプトは、ロール・読み手・構造・制約・形式をすべて明確にしている。',
          ],
        },
        howPQImplements: {
          title: 'PromptQuorumでのGoogleガイド統合',
          content: [
            '**PromptQuorumはこのガイドをフレームワークとして統合しており、ユーザーは暗記不要で、これらのベストプラクティスを直接活用できます。** Googleガイドを選ぶと、アプリはガイドの主要な考え方—タスク、ロール、読み手、構造、制約、例—を反映したフィールドを表示します。',
          ],
          items: [
            '一度フィールドを埋めるだけで、Gemini、GPT-4o、Claude、ローカルモデルに並行送信',
            'テンプレートを保存して、同じ種類のタスク（説明文、コード審査、構造化要約）に再利用',
            '複数モデルの応答を比較し、各タスクに最適なプロバイダーを選定',
          ],
        },
        usingWithOthers: {
          title: '他のフレームワークとの組み合わせ',
          content: [
            '**Googleガイドは低レベルのテクニック集で、CO-STAR・SPECS・RISEN・TRACEなど高レベルのフレームワークと組み合わせるのが有効。** ガイドは「どう言うか」；フレームワークは「全体をどう構成するか」を定義します。',
          ],
          items: [
            'まずフレームワークで全体構造を定義（CO-STARなど）',
            'その中でGoogleガイドの原則を適用：明確なロール、制約、例、段階的推論',
            'PromptQuorumで複数モデルをテストして一貫性を確認',
          ],
        },
        howToStart: {
          title: 'Googleガイドの実践ステップ',
          numberedItems: [
            '**明確で具体的に。** 「AIについて教えて」ではなく「大規模言語モデル（LLM）がテキストを生成する仕組みを、情報工学科の学生向けの技術詳細で説明してください」',
            '**期待される出力の例を示す。** 説明や説明よりも、サンプル回答がモデルに学習させやすい。',
            '**役に立つならロールを設定。** 「あなたは財務アドバイザーです。高純資産層の顧客に税差損スワップを説明してください」',
            '**複雑なタスクは段階的に。** 「ステップごとに考えてから答えてください」と指示。これで熟考と誤り防止が促進される。',
            '**多様な入力でテスト。** 一例で機能するプロンプトが、エッジケースで失敗することもある。様々なシナリオで検証。',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'GoogleガイドはGemini限定？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'いいえ。原則は普遍的で、GPT-4o、Claude、すべてのモダンモデルで機能します。Geminiは主な例ですが、考え方は共通です。' } },
          { '@type': 'Question', 'name': 'Googleガイドを他のフレームワークと組み合わせられる？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい、推奨。高レベルのフレームワーク（CO-STAR、SPECS等）で全体構造を定め、その中でGoogleガイドの原則を適用します。' } },
          { '@type': 'Question', 'name': 'すべてのタスクに適用できる？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'ほぼ。ただし単純な質問にはオーバーエンジニアリング。複雑で多段階のワークフローには、より完全なフレームワークとの組み合わせが有効。' } },
          { '@type': 'Question', 'name': 'プロンプトに必ず例を含める必要がある？', 'acceptedAnswer': { '@type': 'Answer', 'text': '必須ではありませんが、複雑・創造的なタスクでは強く推奨。単純なタスク（事実質問など）には説明だけで十分な場合も。' } },
          { '@type': 'Question', 'name': '日本の企業が実務で活用する際の注意点は？', 'acceptedAnswer': { '@type': 'Answer', 'text': '機密データを含むタスクはクラウドAPI（OpenAI、Google等）は避け、Ollama・LM Studioなど自社環境のモデルを使用してください。' } },
        ],
      },
    },
    zh: {
      theme: 'Frameworks',
      title: 'Google提示词撰写指南',
      intro: 'Google提示词撰写指南是Google DeepMind总结的实用原则集，教你如何清晰、结构化地指示AI模型。这些原则对Gemini 2.5 Pro、GPT-4o、Claude都同样有效。遵循这些原则，你的提示词会变得更可控、更可重复、结果更可预测。PromptQuorum已将此指南集成为框架，所有用户可直接使用。',
      publishDate: '2026-03-24',
      readTime: '7分钟阅读',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Google提示词撰写指南',
      metaDescription: '掌握Google提示词撰写指南的5大原则：明确性、约束、例子、角色、结构。让AI输出更可控。',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Google提示词撰写指南',
        description: 'Google提示词撰写指南的核心原则、关键技巧、以及如何在PromptQuorum中应用。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['Google提示词指南', '提示词撰写', '最佳实践', 'Gemini 2.5 Pro', '提示词框架', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: '提示词工程' },
          { '@type': 'Thing', name: '提示词框架' },
          { '@type': 'Thing', name: '大语言模型' },
        ],
        mentions: [
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
        teaches: '如何应用Google的5大原则（明确性、约束、例子、角色、结构）来撰写高效、可重复的提示词',
        assesses: '能否有效地结构化提示词、提供相关例子、定义清晰的约束、评估模型输出质量的能力',
      },
      sections: {
        whatIsGoogle: {
          title: 'Google提示词撰写指南是什么',
          content: [
            '**Google指南是一套实用原则，教你如何清晰、结构化地与AI交互。** 原则不是为了Gemini特设的，而是通用的，对GPT-4o、Claude同样有效。',
            '指南像一本「食谱」。每条原则都指导你如何措辞指示、提供什么样的例子、加什么样的约束，使模型行为更可预测。',
          ],
        },
        corePrinciples: {
          title: 'Google指南的核心5大原则',
          content: [
            '**Google指南强调明确性、约束和结构，而非「巧言妙语」。** 核心是：明白无误地告诉模型你要什么，且容易评估结果。',
          ],
          items: [
            '明确任务、读者、输出格式，不要让模型猜。',
            '提供具体例子，让模型学会你的模式。',
            '复杂任务分解成步骤，要求逐步推理。',
            '清晰约束：禁止内容、要求引用、字数限制。',
          ],
        },
        techniques: {
          title: 'Google指南的5大关键技巧',
          content: [
            '**Google指南推荐的技巧跨越所有领域：研究、编码、营销文案。** 这些是最常用、最有效的方法：',
          ],
          items: [
            '角色分配：告诉模型「扮演数据分析师」或其他身份，引导语气和细节程度。',
            '逐步推理：要求中间步骤，不只要最终答案。',
            'Few-shot：给2～3个例子，让模型学会模式。',
            '结构化输出：指定格式（列表、表格、JSON）。',
            '迭代优化：用模型的输出作为下一轮输入，逐步改进。',
          ],
        },
        badVsGoodExample: {
          title: '对比：普通提示词 vs Google风格提示词',
          content: [
            '**同一任务，普通方式和Google方式的差别一眼可见。** 以解释新功能为例：',
            '**【普通提示词】**',
            '"给用户解释我们的新AI功能。"',
            '**【Google风格提示词】**',
            '"角色：你是为非技术用户写产品解释的教育家。任务：解释我们的新功能「自动将周支持工单汇总为经理用一页报告」。读者：忙碌的支持主管，无技术背景。要求：用简洁语言和短句。结构：开头、3个关键好处、简短结尾。禁止：不用「革命性」等夸大词。字数：250-300字。格式：Markdown，每部分加H2标题。"',
            'Google方式清晰地定义了角色、读者、格式、约束，让模型无歧义。',
          ],
        },
        howPQImplements: {
          title: 'PromptQuorum如何集成Google指南',
          content: [
            '**PromptQuorum将此指南打包为可复用框架，让你无需记住所有原则，直接应用最佳实践。** 选择Google指南框架后，应用会展开符合指南的字段：任务、角色、读者、结构、约束、例子。',
          ],
          items: [
            '一次性填充，然后并行发送给Gemini、GPT-4o、Claude和本地模型。',
            '保存Google风格的模板，用于重复工作：解释文、代码审查、结构化总结。',
            '对比不同模型的回应，选择最适合该任务的提供商。',
          ],
        },
        usingWithOthers: {
          title: '和其他框架的搭配',
          content: [
            '**Google指南是底层技巧，和CO-STAR、SPECS、RISEN、TRACE等高层框架配合效果最好。** 指南教你「如何措辞」；框架教你「如何设计整体流程」。',
          ],
          items: [
            '先选一个框架定义全局结构（如CO-STAR或SPECS）。',
            '在框架内应用Google原则：明确角色、清晰约束、具体例子、分步推理。',
            '在PromptQuorum中跨多模型测试这个组合。',
          ],
        },
        howToStart: {
          title: '开始应用Google提示词指南',
          numberedItems: [
            '**清晰具体。** 不要「告诉我AI」，改成「解释大语言模型（LLM）如何生成文本，面向计算机科学学生的技术深度。」',
            '**提供期望输出的例子。** 例子胜过描述。',
            '**给模型分配角色。** 「你是财务顾问。向高净值客户解释税差损收割。」这引导了语气和细致程度。',
            '**复杂任务用逐步推理。** 「请逐步思考，再回答」这句话能强制审慎和捕捉错误。',
            '**在多种输入上测试。** 在一个例子上有效的提示词可能在其他情况下失败。用多种场景验证。',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Google指南只适用于Gemini吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '不是。原则是通用的，对GPT-4o、Claude和所有现代模型都有效。Gemini是主要例子，但思想是普遍的。' } },
          { '@type': 'Question', 'name': '能把Google指南和其他框架混合吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '完全可以，而且推荐。用高层框架（CO-STAR、SPECS）定义结构，在其中应用Google的5大原则。' } },
          { '@type': 'Question', 'name': 'Google指南适合所有任务吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '几乎所有。除了极简单的问题可能不需要。复杂多步骤流程建议和更全面的框架结合。' } },
          { '@type': 'Question', 'name': '提示词里一定要给例子吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '不是必需，但强烈推荐复杂或创意任务。简单查询用文字描述往往就够。' } },
          { '@type': 'Question', 'name': '国内企业实际应用中有什么注意？', 'acceptedAnswer': { '@type': 'Answer', 'text': '涉及敏感数据（财务、客户等）时，避免云API（OpenAI、Google在境外处理）。改用本地部署（Ollama、LM Studio）或符合《数据安全法》的方案。' } },
          { '@type': 'Question', 'name': 'Google指南和某些框架关系如何？', 'acceptedAnswer': { '@type': 'Answer', 'text': '关系互补。Google指南是「如何写清楚」；框架是「怎样设计流程」。组合使用效果最佳。' } },
          { '@type': 'Question', 'name': '测试提示词时该注意什么？', 'acceptedAnswer': { '@type': 'Answer', 'text': '在多种输入场景下测试，包括边界情况。需多维度验证：不同类型输入、极限情况、不同长度/复杂度的请求都要测。' } },
          { '@type': 'Question', 'name': '多人团队怎样高效使用Google指南？', 'acceptedAnswer': { '@type': 'Answer', 'text': '建立标准化模板库：为常见任务（报告、分析、生成）各建一个Google风格模板，团队共享使用。这样既一致又快速。' } },
        ],
      },
    },
  };
