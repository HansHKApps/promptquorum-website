// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: craft-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The CRAFT Framework',
      intro: 'The CRAFT Framework is a prompt structure designed to produce targeted, audience-aware content by focusing on Context, Role, Audience, Format, and Tone in a single, well-formed instruction. In PromptQuorum, the CRAFT Framework is available as a built-in option that any user can select and apply across all supported models.',
      publishDate: '2026-03-24',
      readTime: '7 min read',
      educationalLevel: 'Intermediate',
      seoTitle: 'The CRAFT Framework: Context, Role, Audience 2026',
      metaDescription: 'The CRAFT prompt framework breaks creative tasks into Context, Role, Audience, Format, Tone for consistent, on-brand outputs. Works with GPT-5.5, Claude.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'The CRAFT Framework',
        description: 'How the CRAFT Framework for Context, Role, Audience, Format, and Tone works, when to use it, and how PromptQuorum offers CRAFT as a built-in option.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        'url': 'https://www.promptquorum.com/prompt-engineering/craft-framework',
        'inLanguage': 'en',
        keywords: ['CRAFT Framework', 'prompt frameworks', 'prompt engineering', 'creative prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
          { '@type': 'Thing', name: 'Large Language Models' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
        ],
      },
      sections: {
        whatIsCRAFT: {
          title: 'What the CRAFT Framework Is',
          content: [
            '**The CRAFT Framework is a prompt template for creative and marketing tasks that makes large language models specify who they are writing as, who they are writing for, and how the output should look.** Instead of sending a vague request like "write a post about our product," you define each CRAFT element so models such as GPT-5.5, Claude Opus 4.7, and Gemini 3.1 Pro can produce consistent, reusable copy. If you\'re new to structured prompting, see [What is Prompt Engineering](/prompt-engineering/what-is-prompt-engineering) for foundational concepts.',
            'The acronym typically expands as:',
          ],
          items: [
            'Context: Background information about the product, situation, or campaign.',
            'Role: The voice or professional perspective the model should adopt.',
            'Audience: The target reader and their needs or pain points.',
            'Format: The concrete output structure, such as "LinkedIn post" or "landing page hero section."',
            'Tone: The style of writing, from formal to conversational, plus any style constraints.',
          ],
        },
        whyCRAFTWorks: {
          title: 'Why the CRAFT Framework Works for Creative Tasks',
          content: [
            '**The CRAFT Framework works well for creative and marketing prompts because it encodes the same fields that human copywriters use in real briefs.** When models see explicit context, audience, and tone, they spend less effort guessing and more effort tailoring language to your goals.',
            'This structure is especially helpful when you:',
          ],
          items: [
            'Need to maintain a consistent brand voice across many pieces of content.',
            'Want to compare how different models handle the same creative brief.',
            'Work in a team where prompts must be understandable and editable by non-technical colleagues.',
          ],
        },
        fiveComponents: {
          title: 'The Five CRAFT Components in Detail',
          content: [
            '**A strong CRAFT prompt includes clear instructions for each of the five components so that nothing important is left implicit.** You can phrase them as labeled lines or as a compact paragraph; the key is that each part is present.',
            'Typical component descriptions:',
          ],
          items: [
            'Context: What is being promoted, what it does, and any key facts the model must respect.',
            'Role: For example "You are a B2B SaaS copywriter" or "You are a senior growth marketer."',
            'Audience: Who will read this, such as "technical founders at seed-stage startups" or "HR managers in large enterprises."',
            'Format: The final artifact, like "Twitter thread with 5 tweets," "email follow-up," or "product announcement blog intro."',
            'Tone: Style constraints, such as "professional but approachable," "no hype words," or "plain language with short sentences."',
          ],
        },
        badVsGoodExample: {
          title: 'Example: Bad vs Good CRAFT Prompt',
          content: [
            '**The difference between an unstructured creative prompt and a CRAFT-based prompt is easiest to see on the same task.** Below is a simple example for a LinkedIn post about a new feature.',
            '**[Bad Prompt]**',
            '"Write a LinkedIn post about our new AI feature."',
            '**[Good Prompt]**',
            '"Context: We are launching a new AI feature that automatically summarizes weekly customer support tickets into a one-page report for managers. It integrates with existing helpdesk tools and reduces manual reporting time. Role: You are a B2B SaaS copywriter. Audience: Busy customer support leaders in mid-size companies who struggle to keep an overview of recurring issues. Format: LinkedIn post with 3 short paragraphs and 3 bullet points. Maximum 180 words. Tone: Professional but conversational. Avoid hype words like \'revolutionary\' or \'game-changing\'. End with a clear call to action to book a demo."',
            'The CRAFT version behaves like a mini creative brief: any model receiving it can produce on-brand copy with less trial and error.',
          ],
        },
        whenToUse: {
          title: 'When to Use the CRAFT Framework',
          content: [
            '**You should use the CRAFT Framework whenever you are creating content where audience, format, and voice matter as much as the factual content.** This includes most marketing, sales, and communication workflows.',
            'Typical use cases:',
          ],
          items: [
            'Social media posts for platforms like LinkedIn, X, or company blogs.',
            'Email campaigns, onboarding sequences, and product announcements.',
            'Landing page copy, feature descriptions, and app store listings.',
            'Video scripts or webinar invitations where tone and pacing are important.',
          ],
        },
        howPQImplements: {
          title: 'How PromptQuorum Implements the CRAFT Framework',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that includes the CRAFT Framework as one of its built-in prompt structures so users can generate creative content consistently across many models.** When you choose the CRAFT option in PromptQuorum, the app exposes dedicated fields for each component and assembles them into a single, well-formed prompt.',
            'Within PromptQuorum, the CRAFT Framework lets you:',
          ],
          items: [
            'Fill in Context, Role, Audience, Format, and Tone through structured inputs instead of remembering the pattern manually.',
            'Apply the same CRAFT-based prompt to multiple models in parallel, comparing how GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and local models respond to the same creative brief.',
            'Save and reuse CRAFT templates for recurring workflows such as "feature launch LinkedIn post," "customer success case study," or "sales outreach email." (For simpler, single-step prompts, consider the [Single Step Framework](/prompt-engineering/the-single-step-prompt-method) instead.)',
          ],
        },
        usingCRAFTWithOthers: {
          title: 'Using CRAFT Alongside Other Frameworks',
          content: [
            '**You should combine the CRAFT Framework with other frameworks in your toolkit by aligning each one with the type of task it serves best.** CRAFT is not a universal solution; it is optimized for content where audience and tone are central.',
            'A practical pattern is:',
          ],
          items: [
            'Use CRAFT for creative outputs: posts, emails, scripts, landing pages.',
            'Use the [APE Framework](/prompt-engineering/ape-framework) or [SPECS Framework](/prompt-engineering/specs-framework) for structured outputs, checklists, or JSON specifications.',
            'Use the [CO-STAR Framework](/prompt-engineering/co-star-framework) or reasoning-oriented structures like Chain-of-Thought for complex analysis, planning, and multi-constraint communication tasks.',
          ],
        },

        howToStart: {
          title: 'How to Use the CRAFT Framework',
          numberedItems: [
            '**C—Clarify the task with a one-sentence objective.** Example: \'Classify customer feedback sentiment.\' Not: \'Help with analysis.\' Be specific.',
            '**R—Rank constraints by priority.** Example: (1) Must preserve customer tone, (2) Response should be ≤100 words, (3) Classify complaint type if possible. Prioritize what matters most to your outcome.',
            '**A—Articulate the audience and desired style.** Example: \'Audience: support managers (non-technical). Style: professional, concise, actionable.\' This shapes tone and detail level.',
            '**F—Frame examples that illustrate what you want and don\'t want.** Provide 2–3 good examples and 1–2 counter-examples. This teaches the model by contrast.',
            '**T—Test your prompt on representative cases before deployment.** Use CRAFT structure to build the prompt, then validate on a small batch. If results are poor, iterate: clarify constraints, add better examples, or adjust audience framing.',
          ],
        },
      },
    },
    de: {
      theme: 'Frameworks',
      title: 'The CRAFT Framework',
      intro: 'Das CRAFT-Framework ist eine Prompt-Struktur, die zielgerichtete, zielgruppengerechte Inhalte erzeugt, indem Kontext, Rolle, Zielgruppe, Format und Ton in einer einzigen, wohlgeformten Anweisung kombiniert werden. In PromptQuorum ist das CRAFT-Framework eine integrierte Option, die Benutzer auswählen und auf alle unterstützten Modelle anwenden können.',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      seoTitle: 'CRAFT-Framework: Kontext, Rolle, Audience 2026',
      metaDescription: 'Das CRAFT-Framework zerlegt kreative Aufgaben in Kontext, Rolle, Zielgruppe, Format, Ton für konsistente, markengerechte Ausgaben. Mit GPT-5.5, Claude, Gemini.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/craft-framework?lang=de',
        'inLanguage': 'de',
        headline: 'The CRAFT Framework',
        description: 'Das CRAFT-Framework zerlegt kreative Aufgaben in Kontext, Rolle, Zielgruppe, Format, Ton für konsistente, markengerechte Ausgaben.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['CRAFT-Framework', 'Prompt-Frameworks', 'Prompt-Engineering', 'kreative Prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      sections: {
        whatIsCRAFT: {
          title: 'Was das CRAFT-Framework ist',
          content: [
            '**Das CRAFT-Framework ist eine Prompt-Vorlage für kreative und Marketing-Aufgaben, die große Sprachmodelle dazu bringt, festzulegen, aus welcher Perspektive sie schreiben, für wen sie schreiben und wie die Ausgabe aussehen soll.** Anstatt eine vage Anfrage wie \"Schreibe einen Beitrag über unser Produkt\" zu stellen, definieren Sie jedes CRAFT-Element, damit Modelle wie GPT-5.5, Claude Opus 4.7 und Gemini 3.1 Pro konsistente, wiederverwendbare Texte erzeugen können. Wenn Sie neu in strukturiertem Prompting sind, lesen Sie [Was ist Prompt Engineering](/prompt-engineering/what-is-prompt-engineering?lang=de), um Grundkonzepte zu verstehen.',
            'Das Akronym wird typischerweise wie folgt ausgedehnt:',
          ],
          items: [
            'Kontext: Hintergrundinformationen über das Produkt, die Situation oder die Kampagne.',
            'Rolle: Die Stimme oder professionelle Perspektive, die das Modell annehmen sollte.',
            'Zielgruppe: Der Zielleser und deren Bedürfnisse oder Schmerzpunkte.',
            'Format: Die konkrete Output-Struktur, z. B. \"LinkedIn-Beitrag\" oder \"Landingpage-Hero-Sektion\".',
            'Ton: Der Schreibstil, von formell bis umgangssprachlich, plus alle Stilbeschränkungen.',
          ],
        },
        whyCRAFTWorks: {
          title: 'Warum das CRAFT-Framework für kreative Aufgaben funktioniert',
          content: [
            '**Das CRAFT-Framework funktioniert gut für kreative und Marketing-Prompts, weil es die gleichen Felder codiert, die menschliche Texter in echten Briefings verwenden.** Wenn Modelle expliziten Kontext, Zielgruppe und Ton sehen, geben sie weniger Energie auf das Raten aus und mehr auf das Anpassen der Sprache an Ihre Ziele.',
            'Diese Struktur ist besonders hilfreich, wenn Sie:',
          ],
          items: [
            'Eine konsistente Markenstimme über viele Inhalte hinweg beibehalten müssen.',
            'Vergleichen möchten, wie verschiedene Modelle das gleiche kreative Briefing handhaben.',
            'In einem Team arbeiten, in dem Prompts verständlich und bearbeitbar durch nicht-technische Kollegen sein müssen.',
          ],
        },
        fiveComponents: {
          title: 'Die fünf CRAFT-Komponenten im Detail',
          content: [
            '**Ein starker CRAFT-Prompt enthält klare Anweisungen für jede der fünf Komponenten, sodass nichts Wichtiges implizit bleibt.** Sie können diese als beschriftete Zeilen oder als einen kompakten Absatz formulieren; das Wichtigste ist, dass jeder Teil vorhanden ist.',
            'Typische Komponentenbeschreibungen:',
          ],
          items: [
            'Kontext: Was wird beworben, was tut es, und welche Schlüsselfakten muss das Modell beachten?',
            'Rolle: Zum Beispiel \"Sie sind ein B2B-SaaS-Texter\" oder \"Sie sind ein leitender Growth-Marketing-Manager.\"',
            'Zielgruppe: Wer wird dies lesen, z. B. \"technische Gründer bei Seed-Stage-Startups\" oder \"HR-Manager in großen Unternehmen.\"',
            'Format: Das Endergebnis, z. B. \"Twitter-Thread mit 5 Tweets\", \"E-Mail-Nachverfolgung\" oder \"Produktankündigungs-Blog-Intro.\"',
            'Ton: Stilbeschränkungen, z. B. \"professionell aber zugänglich\", \"keine Hype-Wörter\" oder \"einfache Sprache mit kurzen Sätzen.\"',
          ],
        },
        badVsGoodExample: {
          title: 'Beispiel: Schlechter vs. guter CRAFT-Prompt',
          content: [
            '**Der Unterschied zwischen einem unstrukturierten kreativen Prompt und einem CRAFT-basierten Prompt wird am leichtesten bei derselben Aufgabe sichtbar.** Hier ist ein einfaches Beispiel für einen LinkedIn-Beitrag über eine neue Funktion.',
            '**[Schlechter Prompt]**',
            '\"Schreibe einen LinkedIn-Beitrag über unsere neue KI-Funktion.\"',
            '**[Guter Prompt]**',
            '\"Kontext: Wir starten eine neue KI-Funktion, die Kundensupport-Tickets der Woche automatisch in einen einseitigen Bericht für Manager zusammenfasst. Sie integriert sich mit bestehenden Helpdesk-Tools und spart manuelle Berichterstellung. Rolle: Sie sind ein B2B-SaaS-Texter. Zielgruppe: Beschäftigte Kundensupport-Leiter in mittelständischen Unternehmen, die Schwierigkeiten haben, den Überblick über wiederkehrende Probleme zu behalten. Format: LinkedIn-Post mit 3 kurzen Absätzen und 3 Bullet Points. Maximum 180 Wörter. Ton: Professionell aber umgangssprachlich. Vermeiden Sie Hype-Wörter wie \'revolutionär\' oder \'spielverändernd\'. Enden Sie mit einem klaren Call-to-Action zum Buchen einer Demo.\"',
            'Die CRAFT-Version funktioniert wie ein Mini-Kreativ-Briefing: Jedes Modell, das es erhält, kann markengerechten Text mit weniger Trial and Error erzeugen.',
          ],
        },
        whenToUse: {
          title: 'Wann das CRAFT-Framework anwenden',
          content: [
            '**Sie sollten das CRAFT-Framework anwenden, wenn Sie Inhalte erstellen, bei denen Zielgruppe, Format und Stimme genauso wichtig sind wie der sachliche Inhalt.** Dies umfasst die meisten Marketing-, Vertriebs- und Kommunikations-Arbeitsabläufe.',
            'Typische Anwendungsfälle:',
          ],
          items: [
            'Social-Media-Beiträge für Plattformen wie LinkedIn, X oder Unternehmensblogs.',
            'E-Mail-Kampagnen, Onboarding-Sequenzen und Produktankündigungen.',
            'Landingpage-Texte, Funktionsbeschreibungen und App-Store-Listen.',
            'Video-Skripte oder Webinar-Einladungen, bei denen Ton und Pacing wichtig sind.',
          ],
        },
        howPQImplements: {
          title: 'Wie PromptQuorum das CRAFT-Framework umsetzt',
          content: [
            '**PromptQuorum ist ein Multi-Model-KI-Dispatch-Tool, das das CRAFT-Framework als eine seiner integrierten Prompt-Strukturen bereitstellt, damit Benutzer konsistent kreative Inhalte über viele Modelle hinweg generieren können.** Wenn Sie in PromptQuorum die CRAFT-Option auswählen, zeigt die App dedizierte Felder für jede Komponente und setzt sie in einen einzelnen, wohlgeformten Prompt zusammen.',
            'Innerhalb von PromptQuorum ermöglicht Ihnen das CRAFT-Framework:',
          ],
          items: [
            'Kontext, Rolle, Zielgruppe, Format und Ton durch strukturierte Eingaben ausfüllen, anstatt das Muster manuell zu merken.',
            'Den gleichen CRAFT-basierten Prompt parallel auf mehrere Modelle anwenden und vergleichen, wie GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro und lokale Modelle auf das gleiche Kreativ-Briefing reagieren.',
            'CRAFT-Vorlagen für wiederkehrende Arbeitsabläufe speichern und wiederverwenden, z. B. \"Feature-Launch LinkedIn-Post\", \"Customer-Success-Fallstudie\" oder \"Sales-Outreach-Email\". (Für einfachere, einstufige Prompts, betrachten Sie das [Single-Step-Framework](/prompt-engineering/the-single-step-prompt-method?lang=de).)',
          ],
        },
        usingCRAFTWithOthers: {
          title: 'CRAFT zusammen mit anderen Frameworks anwenden',
          content: [
            '**Sie sollten das CRAFT-Framework mit anderen Frameworks in Ihrem Toolkit kombinieren, indem Sie jedes an die Art von Aufgabe ausrichten, für die es am besten geeignet ist.** CRAFT ist keine universelle Lösung; es ist optimiert für Inhalte, bei denen Zielgruppe und Ton zentral sind.',
            'Ein praktisches Muster ist:',
          ],
          items: [
            'Nutzen Sie CRAFT für kreative Ausgaben: Beiträge, E-Mails, Skripte, Landingpages.',
            'Nutzen Sie das [APE-Framework](/prompt-engineering/ape-framework?lang=de) oder [SPECS-Framework](/prompt-engineering/specs-framework?lang=de) für strukturierte Ausgaben, Checklisten oder JSON-Spezifikationen.',
            'Nutzen Sie das [CO-STAR-Framework](/prompt-engineering/co-star-framework?lang=de) oder reasoning-orientierte Strukturen wie Chain-of-Thought für komplexe Analyse, Planung und Multi-Constraint-Kommunikationsaufgaben.',
          ],
        },
        howToStart: {
          title: 'Wie Sie das CRAFT-Framework anwenden',
          numberedItems: [
            '**K—Klären Sie die Aufgabe mit einem einzigen Satz Ziel.** Beispiel: \"Klassifizieren Sie Kundenfeedback-Stimmung.\" Nicht: \"Helfen Sie mit der Analyse.\" Seien Sie spezifisch.',
            '**R—Rangieren Sie Einschränkungen nach Priorität.** Beispiel: (1) Muss den Ton des Kunden bewahren, (2) Antwort sollte ≤100 Wörter sein, (3) Klassifizieren Sie Beschwerdetyp, wenn möglich. Priorisieren Sie, was für Ihr Ergebnis am meisten zählt.',
            '**A—Artikulieren Sie Zielgruppe und gewünschten Stil.** Beispiel: \"Zielgruppe: Support-Manager (nicht-technisch). Stil: professionell, prägnant, handlungsorientiert.\" Dies bestimmt Ton und Detailebene.',
            '**F—Rahmen Sie Beispiele, die zeigen, was Sie wollen und was nicht.** Geben Sie 2–3 gute Beispiele und 1–2 Gegenbeispiele. Dies unterrichtet das Modell durch Kontrast.',
            '**T—Testen Sie Ihren Prompt auf repräsentative Fälle vor dem Deployment.** Nutzen Sie CRAFT-Struktur, um den Prompt zu erstellen, dann validieren Sie auf einem kleinen Batch. Wenn die Ergebnisse schlecht sind, iterieren Sie: Klären Sie Einschränkungen, fügen Sie bessere Beispiele hinzu oder passen Sie die Zielgruppen-Rahmung an.',
          ],
        },
      },
    },
    fr: {
      theme: 'Frameworks',
      title: 'The CRAFT Framework',
      intro: 'Le CRAFT Framework est une structure de prompt conçue pour générer du contenu ciblé et adapté à l\'audience en mettant l\'accent sur le Contexte, le Rôle, l\'Audience, le Format et le Ton dans une seule instruction bien formée. Dans PromptQuorum, le CRAFT Framework est une option intégrée que tout utilisateur peut sélectionner et appliquer sur tous les modèles supportés.',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      seoTitle: 'Framework CRAFT : Contexte, Rôle, Audience 2026',
      metaDescription: 'Le framework CRAFT décompose les tâches créatives en contexte, rôle, audience, format, ton pour des résultats cohérents et conformes à la marque. GPT-5.5, Claude.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/craft-framework?lang=fr',
        'inLanguage': 'fr',
        headline: 'The CRAFT Framework',
        description: 'Le framework CRAFT décompose les tâches créatives en contexte, rôle, audience, format, ton pour des résultats cohérents.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['Framework CRAFT', 'Frameworks de prompt', 'Prompt Engineering', 'prompts créatifs', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      sections: {
        whatIsCRAFT: {
          title: 'Qu\'est-ce que le framework CRAFT',
          content: [
            '**Le CRAFT Framework est un modèle de prompt pour les tâches créatives et marketing qui pousse les grands modèles de langage à définir qui ils sont, pour qui ils écrivent et comment le résultat doit se présenter.** Au lieu d\'envoyer une demande vague comme \"écris un post sur notre produit\", vous définissez chaque élément CRAFT pour que GPT-5.5, Claude Opus 4.7 et Gemini 3.1 Pro produisent du texte cohérent et réutilisable. Si vous découvrez le prompting structuré, consultez [Qu\'est-ce que le Prompt Engineering](/prompt-engineering/what-is-prompt-engineering?lang=fr) pour les concepts fondamentaux.',
            'L\'acronyme se divise habituellement ainsi :',
          ],
          items: [
            'Contexte : informations de fond sur le produit, la situation ou la campagne.',
            'Rôle : la voix ou la perspective professionnelle que le modèle doit adopter.',
            'Audience : le lecteur cible et ses besoins ou difficultés.',
            'Format : la structure de sortie concrète, comme \"post LinkedIn\" ou \"section hero de landing page\".',
            'Ton : le style d\'écriture, du formel à conversationnel, plus les contraintes de style.',
          ],
        },
        whyCRAFTWorks: {
          title: 'Pourquoi le CRAFT Framework fonctionne pour les tâches créatives',
          content: [
            '**Le CRAFT Framework excelle pour les prompts créatifs et marketing car il encode les mêmes champs qu\'utilisent les vrais copywriters.** Quand les modèles voient un contexte, une audience et un ton explicites, ils consacrent moins d\'énergie à deviner et plus à adapter la langue à vos objectifs.',
            'Cette structure aide particulièrement quand vous :',
          ],
          items: [
            'Devez maintenir une voix de marque cohérente sur plusieurs contenus.',
            'Voulez comparer comment différents modèles traitent le même brief créatif.',
            'Travaillez en équipe où les prompts doivent être compréhensibles par des collègues non techniques.',
          ],
        },
        fiveComponents: {
          title: 'Les cinq composants CRAFT en détail',
          content: [
            '**Un bon prompt CRAFT inclut des instructions claires pour chaque composant afin que rien d\'important ne reste implicite.** Vous pouvez les formater comme des lignes étiquetées ou un paragraphe compact ; l\'essentiel est que chaque partie soit présente.',
            'Descriptions de composants typiques :',
          ],
          items: [
            'Contexte : ce qui est promu, ce qu\'il fait et les faits clés que le modèle doit respecter.',
            'Rôle : par exemple \"vous êtes un copywriter SaaS B2B\" ou \"vous êtes un senior growth marketer\".',
            'Audience : qui lira ceci, par exemple \"fondateurs techniques en startups seed\" ou \"responsables RH en grandes entreprises\".',
            'Format : l\'artefact final, comme \"fil Twitter de 5 tweets\", \"email de suivi\" ou \"intro blog d\'annonce produit\".',
            'Ton : contraintes de style, comme \"professionnel mais accessible\", \"pas de mots hype\" ou \"langage simple avec des phrases courtes\".',
          ],
        },
        badVsGoodExample: {
          title: 'Exemple : mauvais vs bon prompt CRAFT',
          content: [
            '**La différence entre un prompt créatif non structuré et un prompt basé sur CRAFT apparaît clairement sur la même tâche.** Voici un exemple simple pour un post LinkedIn sur une nouvelle fonctionnalité.',
            '**[Mauvais Prompt]**',
            '\"Écris un post LinkedIn sur notre nouvelle fonctionnalité IA.\"',
            '**[Bon Prompt]**',
            '\"Contexte : nous lançons une nouvelle fonctionnalité IA qui résume automatiquement les tickets de support de la semaine en un rapport d\'une page pour les managers. Elle s\'intègre aux outils helpdesk existants et réduit les rapports manuels. Rôle : vous êtes un copywriter SaaS B2B. Audience : les responsables support occupés dans les PME qui luttent pour avoir une vue d\'ensemble des problèmes récurrents. Format : post LinkedIn avec 3 courts paragraphes et 3 puces. Maximum 180 mots. Ton : professionnel mais conversationnel. Évitez les mots hype comme \'révolutionnaire\' ou \'game-changing\'. Terminez par un appel à l\'action clair pour réserver une démo.\"',
            'La version CRAFT fonctionne comme un mini-brief créatif : chaque modèle peut produire du texte conforme à la marque avec moins d\'essais-erreurs.',
          ],
        },
        whenToUse: {
          title: 'Quand utiliser le CRAFT Framework',
          content: [
            '**Utilisez le CRAFT Framework quand l\'audience, le format et la voix sont aussi importants que le contenu factuel.** Cela couvre la plupart des flux de travail marketing, ventes et communication.',
            'Cas d\'usage typiques :',
          ],
          items: [
            'Posts réseaux sociaux pour LinkedIn, X ou blogs d\'entreprise.',
            'Campagnes email, séquences d\'onboarding et annonces produit.',
            'Textes landing page, descriptions de fonctionnalités et annonces app store.',
            'Scripts vidéo ou invitations webinaire où le ton et le rythme importent.',
          ],
        },
        howPQImplements: {
          title: 'Comment PromptQuorum implémente le CRAFT Framework',
          content: [
            '**PromptQuorum est un outil de dispatch multi-modèles qui inclut le CRAFT Framework comme l\'une de ses structures de prompt intégrées pour que les utilisateurs génèrent du contenu créatif cohérent sur plusieurs modèles.** Quand vous choisissez l\'option CRAFT, l\'app expose des champs dédiés pour chaque composant et les assemble en un seul prompt bien formé.',
            'Dans PromptQuorum, le CRAFT Framework vous permet :',
          ],
          items: [
            'Remplir Contexte, Rôle, Audience, Format et Ton par des entrées structurées au lieu de mémoriser le motif.',
            'Appliquer le même prompt CRAFT à plusieurs modèles en parallèle, comparant comment GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro et modèles locaux réagissent au même brief. (Pour les prompts plus simples, considérez le [Framework Single-Step](/prompt-engineering/the-single-step-prompt-method?lang=fr).)',
            'Sauvegarder et réutiliser des templates CRAFT pour des workflows récurrents comme \"post LinkedIn de lancement feature\", \"case study customer success\" ou \"email outreach sales\".',
          ],
        },
        usingCRAFTWithOthers: {
          title: 'Utiliser CRAFT aux côtés d\'autres frameworks',
          content: [
            '**Combinez le CRAFT Framework avec d\'autres frameworks en alignant chacun sur le type de tâche pour lequel il excelle.** CRAFT n\'est pas une solution universelle ; il est optimisé pour le contenu où l\'audience et le ton sont centraux.',
            'Un motif pratique :',
          ],
          items: [
            'CRAFT pour les outputs créatifs : posts, emails, scripts, landing pages.',
            'Utilisez le [Framework APE](/prompt-engineering/ape-framework?lang=fr) ou [Framework SPECS](/prompt-engineering/specs-framework?lang=fr) pour les outputs structurés, checklists ou spécifications JSON.',
            'Utilisez le [Framework CO-STAR](/prompt-engineering/co-star-framework?lang=fr) ou structures orientées reasoning comme Chain-of-Thought pour l\'analyse complexe, la planification et les tâches multi-contraintes.',
          ],
        },
        howToStart: {
          title: 'Comment utiliser le CRAFT Framework',
          numberedItems: [
            '**C—Clarifiez la tâche en une phrase objective.** Exemple : \"Classifiez le sentiment du feedback client.\" Pas : \"Aidez avec l\'analyse.\" Soyez spécifique.',
            '**R—Classez les contraintes par priorité.** Exemple : (1) Doit préserver le ton client, (2) La réponse doit être ≤100 mots, (3) Classifiez le type de plainte si possible. Priorisez ce qui compte.',
            '**A—Articlez l\'audience et le style désiré.** Exemple : \"Audience : support managers (non-technique). Style : professionnel, concis, actionnable.\" Cela définit le ton et le niveau de détail.',
            '**F—Formez des exemples illustrant ce que vous voulez et ne voulez pas.** Donnez 2–3 bons exemples et 1–2 contre-exemples. Cela enseigne par contraste.',
            '**T—Testez votre prompt sur des cas représentatifs avant déploiement.** Utilisez la structure CRAFT pour construire le prompt, puis validez sur un petit batch. Si les résultats sont mauvais, itérez : clarifiez les contraintes, ajoutez de meilleurs exemples ou ajustez le framing.',
          ],
        },
      },
    },
    ja: {
      theme: 'Frameworks',
      title: 'The CRAFT Framework',
      intro: 'CRAFTフレームワークは、コンテキスト、役割、オーディエンス、フォーマット、トーンに焦点を当てることで、ターゲットを絞った、オーディエンス対応のコンテンツを生成するためのプロンプト構造です。PromptQuorumでは、CRAFTフレームワークがビルトイン機能として提供されており、任意のユーザーが選択して、サポートされているすべてのモデルに適用できます。',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      seoTitle: 'CRAFTフレームワーク：コンテキスト・役割 2026',
      metaDescription: 'CRAFTフレームワークはコンテキスト・役割・オーディエンス・フォーマット・トーンで創造的タスクを構成。',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/craft-framework?lang=ja',
        'inLanguage': 'ja',
        headline: 'The CRAFT Framework',
        description: 'CRAFTフレームワークはコンテキスト・役割・オーディエンス・フォーマット・トーンで創造的タスクを構成。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['CRAFTフレームワーク', 'プロンプトフレームワーク', 'プロンプトエンジニアリング', 'creative prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      sections: {
        whatIsCRAFT: {
          title: 'CRAFTフレームワークとは',
          content: [
            '**CRAFTフレームワークは、クリエイティブおよびマーケティングタスク向けのプロンプトテンプレートです。**大規模言語モデルに対して「誰の視点から書くのか」「誰を対象に書くのか」「出力をどのような形式にするのか」を明確に指示します。「我が社の製品について書いて」といったあいまいなリクエストの代わりに、CRAFTの5つの要素を定義することで、GPT-5.5、Claude Opus 4.7、Gemini 3.1 Proが一貫性のある再利用可能なコピーを生成できます。',
            'プロンプトエンジニアリングが初めての場合は、[プロンプトエンジニアリングとは何か](/prompt-engineering/what-is-prompt-engineering?lang=ja)をご覧ください。',
            'CRAFTの各要素：',
          ],
          items: [
            'コンテキスト：製品、状況、またはキャンペーンに関する背景情報',
            '役割：モデルが採用すべき声または専門的視点（例：「あなたはB2Bマーケターです」）',
            'オーディエンス：対象読者とその課題やニーズ',
            'フォーマット：「LinkedInポスト」や「ランディングページのヒーロー文」など、具体的な出力形式',
            'トーン：公式から会話的まで、文体とスタイル制約',
          ],
        },
        whyCRAFTWorks: {
          title: 'なぜCRAFTフレームワークが有効か',
          content: [
            '**CRAFTフレームワークは、実際のコピーライターが使用するのと同じフィールドをエンコードしているため、クリエイティブおよびマーケティングプロンプトに特に有効です。**モデルが明確なコンテキスト、オーディエンス、トーンを見ると、推測に費やす努力を減らし、あなたの目標に合わせて言語を調整することに集中できます。',
            'このフレームワークが特に役立つ場面：',
          ],
          items: [
            '複数のコンテンツにわたって一貫したブランドボイスを保つ必要がある',
            '異なるモデルが同じクリエイティブブリーフにどう対応するかを比較したい',
            'プロンプトが非技術系の同僚にも理解・編集可能なチーム環境で作業している',
          ],
        },
        fiveComponents: {
          title: 'CRAFTの5つの要素を詳しく解説',
          content: [
            '**効果的なCRAFTプロンプトには、5つの要素それぞれに明確な指示が含まれています。**各要素がしっかり定義されていれば、重要な指示があいまいに残ることはありません。',
            'ラベル付きの行として、または1つのコンパクトな段落として記述できます。重要なのは、各パートが明確で編集可能であることです。',
            '典型的なコンポーネント説明：',
          ],
          items: [
            'コンテキスト：何が売られているのか、何をするのか、モデルが尊重すべき重要な事実',
            '役割：例えば「あなたはB2B SaaS コピーライターです」または「あなたはシニアグロースマーケターです」',
            'オーディエンス：「シード段階のスタートアップの技術的創業者」または「大企業のHR部長」など、具体的なターゲット',
            'フォーマット：「Twitterスレッド5ツイート」「フォローアップメール」「プロダクト発表ブログイントロ」など',
            'トーン：「プロフェッショナルで親しみやすい」「ハイプワードなし」「短い文の平易な言葉」などのスタイル指定',
          ],
        },
        badVsGoodExample: {
          title: 'サンプル：悪いプロンプト vs 良いプロンプト',
          content: [
            '**構造化されていないクリエイティブプロンプトとCRAFTベースのプロンプトの違いは、同じタスクで比較するのが最もわかりやすいです。**新機能のLinkedInポストを作成する例を見てみましょう。',
            '**[悪いプロンプト]**',
            '「我が社の新しいAI機能についてLinkedInポストを書いて」',
            '**[良いプロンプト]**',
            '「コンテキスト：新しいAI機能をリリースします。この機能は週単位のカスタマーサポートチケットを自動的に1ページのマネージャーレポートに要約します。既存のヘルプデスクツールと統合でき、手動レポート作成時間を削減します。役割：あなたはB2B SaaS コピーライターです。オーディエンス：中堅企業の忙しいカスタマーサポート部長で、継続的な問題の把握に苦労しています。フォーマット：3つの短いパラグラフと3つの箇条書きのLinkedInポスト。最大180ワード。トーン：プロフェッショナルで会話的。「革新的」や「ゲーム チェンジャー」といったハイプワードは避けてください。デモ予約のための明確なコールトゥアクションで終わります。」',
            'CRAFTバージョンはミニクリエイティブブリーフのように機能します。どのモデルもそれを受け取れば、試行錯誤を少なくしてブランド準拠のコピーを生成できます。',
          ],
        },
        whenToUse: {
          title: 'CRAFTフレームワークを使うべき場面',
          content: [
            '**オーディエンス、フォーマット、ボイスがファクト同じくらい重要なコンテンツを作成する場合、CRAFTフレームワークを使うべきです。**これは、ほとんどのマーケティング、営業、コミュニケーションワークフローに当てはまります。',
            '典型的なユースケース：',
          ],
          items: [
            'LinkedIn、X、企業ブログなどのソーシャルメディアポスト',
            'メールキャンペーン、オンボーディングシーケンス、製品発表',
            'ランディングページコピー、機能説明、アプリストア説明文',
            'トーンとペースが重要なビデオスクリプトやウェビナー招待',
          ],
        },
        howPQImplements: {
          title: 'PromptQuorumがCRAFTフレームワークを実装する方法',
          content: [
            '**PromptQuorumはマルチモデルAIディスパッチツールで、CRAFTフレームワークをビルトイン機能として提供しています。**ユーザーが多くのモデルにわたってクリエイティブコンテンツを一貫して生成できるようにするためです。PromptQuorumでCRAFTオプションを選択すると、アプリは各コンポーネント用の専用フィールドを表示し、それらを1つの整形された正しいプロンプトに組み立てます。',
            'PromptQuorum内でのCRAFTフレームワークの活用：',
          ],
          items: [
            'パターンを手動で覚える代わりに、構造化された入力でコンテキスト、役割、オーディエンス、フォーマット、トーンを入力できます',
            '同じCRAFTベースプロンプトを複数のモデルに並行適用し、GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro、ローカルモデルが同じクリエイティブブリーフにどう応答するかを比較します。(より単純な1ステップのプロンプトには、[シングルステップフレームワーク](/prompt-engineering/the-single-step-prompt-method?lang=ja)を検討してください。)',
            'CRAFTテンプレートを繰り返しのワークフロー（「機能ローンチLinkedInポスト」「カスタマーサクセスケーススタディ」「営業アウトリーチメール」など）に保存して再利用できます',
          ],
        },
        usingCRAFTWithOthers: {
          title: '他のフレームワークとCRAFTを組み合わせる',
          content: [
            '**CRAFTフレームワークを他のプロンプトフレームワークと組み合わせるには、各フレームワークを最適なタスクタイプに対応させます。**CRAFTは万能ではなく、オーディエンスとトーンが中心的な役割を果たすコンテンツに最適化されています。',
            '実践的なパターン：',
          ],
          items: [
            'クリエイティブ出力（ポスト、メール、スクリプト、ランディングページ）にはCRAFTを使用します',
            '構造化された出力、チェックリスト、JSON仕様には、[APEフレームワーク](/prompt-engineering/ape-framework?lang=ja)または[SPECSフレームワーク](/prompt-engineering/specs-framework?lang=ja)を使用します',
            '複雑な分析、計画、マルチ制約通信には、[CO-STARフレームワーク](/prompt-engineering/co-star-framework?lang=ja)またはChain-of-Thoughtなどの推論志向の構造を使用します',
          ],
        },
        howToStart: {
          title: 'CRAFTフレームワークの使い方',
          numberedItems: [
            '**C—1文のオブジェクティブでタスクを明確化。**例：「顧客フィードバックの感情を分類する」ではなく「分析を手伝って」ではなく。具体的に。',
            '**R—制約を優先度順にランク付け。**例：(1) 顧客の声を保持する必要がある、(2) 応答は≤100ワード、(3) 可能なら苦情タイプを分類。最も重要な部分を優先します。',
            '**A—オーディエンスと望む文体を明確に。**例：「オーディエンス：サポートマネージャー（非技術的）。文体：プロフェッショナル、簡潔、実行可能。」これがトーンと詳細度を決定します。',
            '**F—望む形と望まない形を示す例を作成。**2～3の良い例と1～2の反例を示してください。これはモデルを対比法で教えます。',
            '**T—デプロイ前に代表的なケースでプロンプトをテスト。**CRAFT構造を使用してプロンプトを構築してから、小さいバッチで検証します。結果が悪い場合は、反復します：制約を明確化し、より良い例を追加し、オーディエンスフレーミングを調整します。',
          ],
        },
      },
    },
    zh: {
      theme: 'Frameworks',
      title: 'The CRAFT Framework',
      intro: 'CRAFT框架是一种提示结构，通过聚焦背景、角色、受众、格式和语气五个要素，帮助生成有针对性、因人而异的内容。在PromptQuorum中，CRAFT框架作为内置功能提供，任何用户都可以选择并应用于所有支持的模型。',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      seoTitle: 'CRAFT框架：背景·角色·受众 2026',
      metaDescription: 'CRAFT框架将创意任务分为背景、角色、受众、格式、语气。与GPT-5.5、Claude兼容。',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/craft-framework?lang=zh',
        'inLanguage': 'zh',
        headline: 'The CRAFT Framework',
        description: 'CRAFT框架将创意任务分为背景、角色、受众、格式、语气。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['CRAFT框架', '提示框架', '提示工程', '创意提示', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      sections: {
        whatIsCRAFT: {
          title: 'CRAFT框架是什么',
          content: [
            '**CRAFT框架是创意和营销任务的提示模板。**它让大语言模型明确：你以谁的身份写作、为谁写作、输出应该什么样子。与其发送模糊指令（如"为产品写一个帖子"），你定义每个CRAFT元素，让GPT-5.5、Claude Opus 4.7和Gemini 3.1 Pro生成一致、可复用的文案。',
            '如果你刚开始接触结构化提示，请阅读[什么是提示工程](/prompt-engineering/what-is-prompt-engineering?lang=zh)了解基础概念。',
            'CRAFT的5个要素：',
          ],
          items: [
            '1. 背景：产品、情况或活动的背景信息',
            '2. 角色：模型应该采用的声音或专业视角',
            '3. 受众：目标读者及其需求或难点',
            '4. 格式：具体的输出结构（如"LinkedIn帖子"或"落地页标题文案"）',
            '5. 语气：文风和风格约束（从正式到随意）',
          ],
        },
        whyCRAFTWorks: {
          title: '为什么CRAFT框架有效',
          content: [
            '**CRAFT框架编码了专业文案撰写人员在真实文案需求中使用的相同字段。**当模型看到明确的背景、受众和语气时，它们花费更少的能量去猜测，花费更多的能量去调整语言以匹配你的目标。',
            '这个结构特别有用的情况：',
          ],
          items: [
            '1. 你需要在多个内容中保持一致的品牌声音',
            '2. 你想比较不同模型如何处理同一个创意需求',
            '3. 你在团队环境中工作，非技术同事也需要理解和编辑提示',
          ],
        },
        fiveComponents: {
          title: 'CRAFT的5个要素详解',
          content: [
            '**有效的CRAFT提示为所有5个要素提供清晰指导。**没有什么重要的信息会被留作隐含的。',
            '你可以把这些写成标签行，也可以写成一个紧凑的段落。关键是每个部分都清晰且可编辑。',
            '典型的要素描述：',
          ],
          items: [
            '1. 背景：产品是什么、做什么、模型需要遵守哪些关键事实',
            '2. 角色：例如"你是B2B SaaS文案撰写人"或"你是高级增长营销经理"',
            '3. 受众：具体的目标，如"早期创业公司的技术创始人"或"大企业的HR部长"',
            '4. 格式：最终交付物，如"5条推文的Twitter线程"、"跟进邮件"或"产品发布博客开篇"',
            '5. 语气：风格约束，如"专业但平易近人"、"不用营销术语"或"短句、简单用词"',
          ],
        },
        badVsGoodExample: {
          title: '案例：不好的提示 vs 好的提示',
          content: [
            '**非结构化提示和CRAFT提示的差异，用同一个任务对比最清楚。**以下是为新功能写LinkedIn帖子的例子。',
            '**[不好的提示]**',
            '"为我们的新AI功能写一篇LinkedIn帖子"',
            '**[好的提示]**',
            '"背景：我们发布新AI功能，自动将周度客户支持工单总结为1页经理报告。它与现有帮助台工具集成，减少手动报告工作。角色：你是B2B SaaS文案撰写人。受众：忙碌的中型企业客户支持主管，难以掌握循环出现的问题。格式：3个短段落和3个要点的LinkedIn帖子。最多180字。语气：专业但随意。避免"革命性""颠覆性"等营销术语。以预订演示的明确号召行动结束。"',
            'CRAFT版本像一个小文案需求。任何收到它的模型都能生成品牌一致的文案，试错更少。',
          ],
        },
        whenToUse: {
          title: '何时使用CRAFT框架',
          content: [
            '**当受众、格式和声音与事实内容同等重要时，使用CRAFT框架。**这涵盖大多数营销、销售和沟通工作流程。',
            '典型用途：',
          ],
          items: [
            '1. LinkedIn、X、企业博客等社交媒体帖子',
            '2. 邮件活动、新用户入门和产品发布',
            '3. 落地页文案、功能说明、应用商店描述',
            '4. 视频脚本和网络研讨会邀请（语气和节奏很重要）',
          ],
        },
        howPQImplements: {
          title: 'PromptQuorum如何实现CRAFT框架',
          content: [
            '**PromptQuorum是多模型AI分派工具，内置CRAFT框架作为提示结构选项。**这让用户在多个模型中一致地生成创意内容。选择CRAFT选项时，应用会展示各要素的专用字段，将它们组装成一个格式正确的提示。',
            'PromptQuorum中CRAFT框架的用途：',
          ],
          items: [
            '1. 通过结构化输入填写背景、角色、受众、格式和语气，而不是手动记忆',
            '2. 将同一个CRAFT提示并行应用于多个模型，比较GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro和本地模型对同一文案需求的响应。（对于更简单的单步提示，可考虑[单步框架](/prompt-engineering/the-single-step-prompt-method?lang=zh)。）',
            '3. 为重复工作流保存并重复使用CRAFT模板，如"功能发布LinkedIn帖子""客户成功案例"或"销售外联邮件"',
          ],
        },
        usingCRAFTWithOthers: {
          title: '将CRAFT与其他框架结合使用',
          content: [
            '**将CRAFT框架与工具箱中的其他框架结合，为每个框架分配最适合的任务类型。**CRAFT不是万能解决方案，它针对受众和语气至关重要的内容优化。',
            '实用模式：',
          ],
          items: [
            '1. 创意输出（帖子、邮件、脚本、落地页）用CRAFT',
            '2. 结构化输出、清单、JSON规范用[APE框架](/prompt-engineering/ape-framework?lang=zh)或[SPECS框架](/prompt-engineering/specs-framework?lang=zh)',
            '3. 复杂分析、规划和多约束通信用[CO-STAR框架](/prompt-engineering/co-star-framework?lang=zh)或思维链推理结构',
          ],
        },
        howToStart: {
          title: '如何使用CRAFT框架',
          numberedItems: [
            '**C—用一句目标澄清任务。**例如："分类客户反馈情绪"而非"帮助分析"。要具体。',
            '**R—按优先级排列约束。**例如：(1) 保留客户的语气，(2) 回复≤100字，(3) 如可能分类投诉类型。排序最重要的事项。',
            '**A—说明受众和期望的风格。**例如："受众：支持经理（非技术性）。风格：专业、简洁、可操作。"这决定了语气和细节程度。',
            '**F—创建示例说明你想要和不想要的。**给出2-3个好例子和1-2个反面例子。用对比法教导模型。',
            '**T—在部署前对代表性案例测试提示。**用CRAFT结构构建提示，然后在小批量上验证。如果结果不好，迭代：澄清约束、添加更好的例子或调整受众说明。',
          ],
        },
      },
    },
  };
