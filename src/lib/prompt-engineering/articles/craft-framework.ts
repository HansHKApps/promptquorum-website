// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: craft-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The CRAFT Framework',
      intro: 'The CRAFT Framework is a prompt structure designed to produce targeted, audience-aware content by focusing on Context, Role, Audience, Format, and Tone in a single, well-formed instruction. In PromptQuorum, the CRAFT Framework is available as a built-in option that any user can select and apply across all supported models.',
      publishDate: '2026-03-24',
      readTime: '7 min read',
      educationalLevel: 'Intermediate',
      seoTitle: 'The CRAFT Framework: Context, Role, Audience 2026',
      metaDescription: 'CRAFT framework (Context, Role, Audience, Format, Tone): write on-brand AI copy with 5 structured fields. Templates, examples, and vs CO-STAR.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'The CRAFT Framework',
        description: 'How the CRAFT Framework for Context, Role, Audience, Format, and Tone works, when to use it, and how PromptQuorum offers CRAFT as a built-in option.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        'url': 'https://www.promptquorum.com/prompt-engineering/craft-framework',
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
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
        ],
      },
      sections: {
        whatIsCRAFT: {
          title: 'What the CRAFT Framework Is',
          content: [
            '**The CRAFT Framework is a prompt template for creative and marketing tasks that makes large language models specify who they are writing as, who they are writing for, and how the output should look.** Instead of sending a vague request like "write a post about our product," you define each CRAFT element so models such as GPT-5.5, Claude Opus 4.8, and Gemini 3.1 Pro can produce consistent, reusable copy. If you\'re new to structured prompting, see [What is Prompt Engineering](/prompt-engineering/what-is-prompt-engineering) for foundational concepts.',
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
            'Apply the same CRAFT-based prompt to multiple models in parallel, comparing how GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and local models respond to the same creative brief.',
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
        faqSection: {
          title: 'Frequently Asked Questions',
          faqs: [
            { q: 'What does CRAFT stand for?', a: 'CRAFT stands for Context, Role, Audience, Format, and Tone. It\'s a prompt framework that structures creative tasks by explicitly defining who is writing, who they\'re writing for, and what the output should look like.' },
            { q: 'When should I use CRAFT instead of other frameworks?', a: 'Use CRAFT for creative, marketing, and audience-aware writing tasks: emails, social media posts, landing pages, scripts, and sales copy. For structured data extraction or logical reasoning, use APE or SPECS instead.' },
            { q: 'Can I use CRAFT with any language model?', a: 'Yes. CRAFT works with GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral, and any other model. The framework is model-agnostic; it structures your prompt clearly for any LLM.' },
            { q: 'Do I have to fill in all five CRAFT elements?', a: 'For best results, yes—provide explicit guidance on Context, Role, Audience, Format, and Tone. Omitting any element leaves room for the model to guess and produce inconsistent outputs. Even a one-sentence description of each element is sufficient.' },
            { q: 'How long should my CRAFT prompt be?', a: 'CRAFT prompts can be concise or detailed. A compact version might be 2–3 sentences (one per element), while a robust one might span a paragraph. Length isn\'t the goal—clarity and explicitness are.' },
            { q: 'Can I combine CRAFT with other frameworks?', a: 'Yes. You can nest CRAFT prompts inside Chain-of-Thought for longer outputs, or combine CRAFT with APE if you need both creative content and structured reasoning.' },
            { q: 'What if my task doesn\'t fit the CRAFT structure?', a: 'If your task doesn\'t involve audience, tone, or format decisions, CRAFT probably isn\'t the best fit. Use Chain-of-Thought for reasoning, APE for structured analysis, or SPECS for precise requirements instead.' },
            { q: 'How do I test if my CRAFT prompt is working?', a: 'Run your CRAFT prompt on 3–5 representative examples and compare outputs across runs. Check: (1) Does the tone match what you specified? (2) Is the format consistent? (3) Does the content address the right audience? If any fail, refine the corresponding CRAFT element.' },
            { q: 'What does CRAFT stand for in prompt engineering?', a: 'CRAFT stands for Context, Role, Audience, Format, and Tone. These five components work together to structure creative writing tasks. Context provides background, Role defines the writer\'s perspective, Audience identifies who reads it, Format specifies the output structure, and Tone sets the writing style.' },
            { q: 'How does the CRAFT framework improve prompt quality?', a: 'CRAFT improves quality by eliminating vagueness. Instead of saying \"write copy,\" you specify exactly who\'s writing, for whom, in what style, in what format. This explicitness reduces model ambiguity and produces more consistent, brand-aligned outputs across multiple runs.' },
            { q: 'What is the difference between CRAFT and CO-STAR frameworks?', a: 'Both are 5-component frameworks for creative tasks. CRAFT (Context, Role, Audience, Format, Tone) focuses on writing voice and style. CO-STAR (Context, Objective, Style, Tone, Audience, Response—6 components) focuses on communication goals. CRAFT excels for brand voice consistency; CO-STAR for multi-stakeholder communication.' },
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
        'url': 'https://www.promptquorum.com/de/prompt-engineering/craft-framework',
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
            '**Das CRAFT-Framework ist eine Prompt-Vorlage für kreative und Marketing-Aufgaben, die große Sprachmodelle dazu bringt, festzulegen, aus welcher Perspektive sie schreiben, für wen sie schreiben und wie die Ausgabe aussehen soll.** Anstatt eine vage Anfrage wie \"Schreibe einen Beitrag über unser Produkt\" zu stellen, definieren Sie jedes CRAFT-Element, damit Modelle wie GPT-5.5, Claude Opus 4.8 und Gemini 3.1 Pro konsistente, wiederverwendbare Texte erzeugen können. Wenn Sie neu in strukturiertem Prompting sind, lesen Sie [Was ist Prompt Engineering](/de/prompt-engineering/what-is-prompt-engineering), um Grundkonzepte zu verstehen.',
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
            'Den gleichen CRAFT-basierten Prompt parallel auf mehrere Modelle anwenden und vergleichen, wie GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und lokale Modelle auf das gleiche Kreativ-Briefing reagieren.',
            'CRAFT-Vorlagen für wiederkehrende Arbeitsabläufe speichern und wiederverwenden, z. B. \"Feature-Launch LinkedIn-Post\", \"Customer-Success-Fallstudie\" oder \"Sales-Outreach-Email\". (Für einfachere, einstufige Prompts, betrachten Sie das [Single-Step-Framework](/de/prompt-engineering/the-single-step-prompt-method).)',
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
            'Nutzen Sie das [APE-Framework](/de/prompt-engineering/ape-framework) oder [SPECS-Framework](/de/prompt-engineering/specs-framework) für strukturierte Ausgaben, Checklisten oder JSON-Spezifikationen.',
            'Nutzen Sie das [CO-STAR-Framework](/de/prompt-engineering/co-star-framework) oder reasoning-orientierte Strukturen wie Chain-of-Thought für komplexe Analyse, Planung und Multi-Constraint-Kommunikationsaufgaben.',
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
        faqSection: {
          title: 'Häufig Gestellte Fragen',
          faqs: [
            { q: 'Wofür steht CRAFT?', a: 'CRAFT steht für Kontext, Rolle, Zielgruppe, Format und Ton. Es ist ein Prompt-Framework, das kreative Aufgaben strukturiert, indem explizit festgelegt wird, wer schreibt, für wen sie schreiben und wie die Ausgabe aussehen soll.' },
            { q: 'Wann sollte ich CRAFT statt anderer Frameworks verwenden?', a: 'Verwenden Sie CRAFT für kreative, Marketing- und zielgruppengerichtete Schreibaufgaben: E-Mails, Social-Media-Posts, Landingpages, Skripte und Verkaufstexte. Für strukturierte Datenextraktion oder logisches Denken verwenden Sie stattdessen APE oder SPECS.' },
            { q: 'Kann ich CRAFT mit jedem Sprachmodell verwenden?', a: 'Ja. CRAFT funktioniert mit GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral und jedem anderen Modell. Das Framework ist modellunabhängig; es strukturiert Ihren Prompt klar für alle LLMs.' },
            { q: 'Muss ich alle fünf CRAFT-Elemente ausfüllen?', a: 'Für beste Ergebnisse ja — geben Sie explizite Anleitung zu Kontext, Rolle, Zielgruppe, Format und Ton. Das Weglassen eines Elements gibt dem Modell Raum zu raten und inkonsistente Ausgaben zu produzieren. Selbst eine einzige beschreibende Satz für jedes Element reicht aus.' },
            { q: 'Wie lang sollte mein CRAFT-Prompt sein?', a: 'CRAFT-Prompts können prägnant oder detailliert sein. Eine kompakte Version könnte 2–3 Sätze sein (einer pro Element), während eine robuste über einen Absatz spannen könnte. Länge ist nicht das Ziel – Klarheit und Explizitheit sind.' },
            { q: 'Kann ich CRAFT mit anderen Frameworks kombinieren?', a: 'Ja. Sie können CRAFT-Prompts in Chain-of-Thought verschachteln für längere Ausgaben oder CRAFT mit APE kombinieren, wenn Sie sowohl kreative Inhalte als auch strukturierte Logik benötigen.' },
            { q: 'Was tun, wenn meine Aufgabe nicht zur CRAFT-Struktur passt?', a: 'Wenn Ihre Aufgabe keine Publikums-, Ton- oder Formatentscheidungen beinhaltet, ist CRAFT wahrscheinlich nicht die beste Lösung. Verwenden Sie Chain-of-Thought für Logik, APE für strukturierte Analyse oder SPECS für präzise Anforderungen stattdessen.' },
            { q: 'Wie teste ich, ob mein CRAFT-Prompt funktioniert?', a: 'Führen Sie Ihren CRAFT-Prompt auf 3–5 repräsentativen Beispielen aus und vergleichen Sie Ausgaben über mehrere Läufe. Überprüfen Sie: (1) Entspricht der Ton dem Spezifizierten? (2) Ist das Format konsistent? (3) Spricht der Inhalt die richtige Zielgruppe an? Wenn etwas fehlschlägt, verfeinern Sie das entsprechende CRAFT-Element.' },
          ],
        },
      },
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'El Framework CRAFT',
      intro: 'El Framework CRAFT es una estructura de prompt diseñada para producir contenido específico y consciente de la audiencia al centrarse en el Contexto, Rol, Audiencia, Formato y Tono en una única instrucción bien formada. En PromptQuorum, el Framework CRAFT está disponible como opción integrada que cualquier usuario puede seleccionar y aplicar en todos los modelos compatibles.',
      publishDate: '2026-03-24',
      readTime: '7 min de lectura',
      educationalLevel: 'Intermediate',
      seoTitle: 'El Framework CRAFT: Contexto, Rol, Audiencia 2026',
      metaDescription: 'Framework CRAFT (Contexto, Rol, Audiencia, Formato, Tono): escribe copy de IA con identidad de marca en 5 campos. Plantillas y comparación con CO-STAR.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'El Framework CRAFT',
        description: 'Cómo funciona el Framework CRAFT (Contexto, Rol, Audiencia, Formato y Tono), cuándo usarlo y cómo PromptQuorum ofrece CRAFT como opción integrada.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        url: 'https://www.promptquorum.com/es/prompt-engineering/craft-framework',
        inLanguage: 'es',
        keywords: ['Framework CRAFT', 'frameworks de prompt', 'prompt engineering', 'prompts creativos', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Frameworks de Prompt' },
          { '@type': 'Thing', name: 'Modelos de Lenguaje de Gran Escala' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
        ],
      },
      sections: {
        whatIsCRAFT: {
          title: 'Qué es el Framework CRAFT',
          content: [
            '**El Framework CRAFT es una plantilla de prompt para tareas creativas y de marketing que hace que los modelos de lenguaje especifiquen desde qué perspectiva escriben, para quién escriben y cómo debe verse el resultado.** En lugar de enviar una solicitud vaga como "escribe un post sobre nuestro producto", defines cada elemento CRAFT para que modelos como GPT-5.5, Claude Opus 4.8 y Gemini 3.1 Pro puedan producir copy consistente y reutilizable. Si eres nuevo en el prompting estructurado, consulta [Qué es el Prompt Engineering](/prompt-engineering/what-is-prompt-engineering) para conceptos fundamentales.',
            'El acrónimo se expande típicamente como:',
          ],
          items: [
            'Contexto: Información de fondo sobre el producto, situación o campaña.',
            'Rol: La voz o perspectiva profesional que el modelo debe adoptar.',
            'Audiencia: El lector objetivo y sus necesidades o puntos de dolor.',
            'Formato: La estructura concreta del resultado, como "publicación de LinkedIn" o "sección hero de landing page".',
            'Tono: El estilo de escritura, de formal a conversacional, más restricciones de estilo.',
          ],
        },
        whyCRAFTWorks: {
          title: 'Por qué el Framework CRAFT funciona para tareas creativas',
          content: [
            '**El Framework CRAFT funciona bien para prompts creativos y de marketing porque codifica los mismos campos que los copywriters humanos usan en briefs reales.** Cuando los modelos ven contexto, audiencia y tono explícitos, gastan menos esfuerzo adivinando y más esfuerzo adaptando el lenguaje a tus objetivos.',
            'Esta estructura es especialmente útil cuando:',
          ],
          items: [
            'Necesitas mantener una voz de marca consistente en muchas piezas de contenido.',
            'Quieres comparar cómo diferentes modelos manejan el mismo brief creativo.',
            'Trabajas en un equipo donde los prompts deben ser comprensibles y editables por colegas no técnicos.',
          ],
        },
        fiveComponents: {
          title: 'Los cinco componentes CRAFT en detalle',
          content: [
            '**Un prompt CRAFT sólido incluye instrucciones claras para cada uno de los cinco componentes para que nada importante quede implícito.** Puedes escribirlos como líneas etiquetadas o como un párrafo compacto; lo importante es que cada parte esté presente.',
            'Descripciones típicas de los componentes:',
          ],
          items: [
            'Contexto: Qué se está promocionando, qué hace y cualquier hecho clave que el modelo deba respetar.',
            'Rol: Por ejemplo "Eres un copywriter B2B SaaS" o "Eres un growth marketer sénior".',
            'Audiencia: Quién leerá esto, como "fundadores técnicos en startups en etapa semilla" o "gerentes de RRHH en grandes empresas".',
            'Formato: El artefacto final, como "hilo de Twitter con 5 tweets", "email de seguimiento" o "intro de blog de anuncio de producto".',
            'Tono: Restricciones de estilo, como "profesional pero accesible", "sin palabras de hype" o "lenguaje simple con oraciones cortas".',
          ],
        },
        badVsGoodExample: {
          title: 'Ejemplo: Prompt CRAFT malo vs bueno',
          content: [
            '**La diferencia entre un prompt creativo sin estructura y un prompt basado en CRAFT se ve más fácilmente con la misma tarea.** A continuación hay un ejemplo simple para un post de LinkedIn sobre una nueva función.',
            '**[Prompt Malo]**',
            '"Escribe un post de LinkedIn sobre nuestra nueva función de IA."',
            '**[Prompt Bueno]**',
            '"Contexto: Estamos lanzando una nueva función de IA que resume automáticamente los tickets de soporte al cliente de la semana en un informe de una página para los gerentes. Se integra con las herramientas de helpdesk existentes y reduce el tiempo de informes manuales. Rol: Eres un copywriter B2B SaaS. Audiencia: Líderes de soporte al cliente ocupados en empresas medianas que tienen dificultades para tener una visión general de los problemas recurrentes. Formato: Post de LinkedIn con 3 párrafos cortos y 3 puntos de bala. Máximo 180 palabras. Tono: Profesional pero conversacional. Evita palabras de hype como \'revolucionario\' o \'que cambia el juego\'. Termina con una llamada a la acción clara para reservar una demo."',
            'La versión CRAFT funciona como un mini brief creativo: cualquier modelo que lo reciba puede producir copy acorde a la marca con menos prueba y error.',
          ],
        },
        whenToUse: {
          title: 'Cuándo usar el Framework CRAFT',
          content: [
            '**Debes usar el Framework CRAFT cuando estés creando contenido donde la audiencia, el formato y la voz importan tanto como el contenido factual.** Esto incluye la mayoría de los flujos de trabajo de marketing, ventas y comunicación.',
            'Casos de uso típicos:',
          ],
          items: [
            'Posts en redes sociales para plataformas como LinkedIn, X o blogs corporativos.',
            'Campañas de email, secuencias de onboarding y anuncios de productos.',
            'Copy de landing pages, descripciones de funciones y listados de tiendas de aplicaciones.',
            'Scripts de video o invitaciones a webinars donde el tono y el ritmo son importantes.',
          ],
        },
        howPQImplements: {
          title: 'Cómo PromptQuorum implementa el Framework CRAFT',
          content: [
            '**PromptQuorum es una herramienta de despacho de IA multi-modelo que incluye el Framework CRAFT como una de sus estructuras de prompt integradas para que los usuarios puedan generar contenido creativo de manera consistente en muchos modelos.** Cuando eliges la opción CRAFT en PromptQuorum, la app expone campos dedicados para cada componente y los ensambla en un único prompt bien formado.',
            'Dentro de PromptQuorum, el Framework CRAFT te permite:',
          ],
          items: [
            'Completar los campos de Contexto, Rol, Audiencia, Formato y Tono a través de entradas estructuradas en lugar de recordar el patrón manualmente.',
            'Aplicar el mismo prompt basado en CRAFT a múltiples modelos en paralelo, comparando cómo GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y modelos locales responden al mismo brief creativo.',
            'Guardar y reutilizar plantillas CRAFT para flujos de trabajo recurrentes como "post de LinkedIn de lanzamiento de función", "caso de éxito de cliente" o "email de contacto de ventas". (Para prompts más simples de un solo paso, considera el [Framework de Prompt de Un Solo Paso](/prompt-engineering/the-single-step-prompt-method) en su lugar.)',
          ],
        },
        usingCRAFTWithOthers: {
          title: 'Usar CRAFT junto a otros frameworks',
          content: [
            '**Debes combinar el Framework CRAFT con otros frameworks en tu kit de herramientas alineando cada uno con el tipo de tarea que mejor sirve.** CRAFT no es una solución universal; está optimizado para contenido donde la audiencia y el tono son centrales.',
            'Un patrón práctico es:',
          ],
          items: [
            'Usa CRAFT para outputs creativos: posts, emails, scripts, landing pages.',
            'Usa el [Framework APE](/es/prompt-engineering/ape-framework) o el [Framework SPECS](/es/prompt-engineering/specs-framework) para outputs estructurados, listas de verificación o especificaciones JSON.',
            'Usa el [Framework CO-STAR](/es/prompt-engineering/co-star-framework) o estructuras orientadas al razonamiento como Chain-of-Thought para análisis complejos, planificación y tareas de comunicación con múltiples restricciones.',
          ],
        },

        howToStart: {
          title: 'Cómo usar el Framework CRAFT',
          numberedItems: [
            '**C—Clarifica la tarea con un objetivo de una oración.** Ejemplo: \'Clasifica el sentimiento del feedback de clientes.\' No: \'Ayuda con el análisis.\' Sé específico.',
            '**R—Prioriza las restricciones por orden de importancia.** Ejemplo: (1) Debe preservar el tono del cliente, (2) La respuesta debe ser ≤100 palabras, (3) Clasifica el tipo de queja si es posible. Prioriza lo que más importa para tu resultado.',
            '**A—Articula la audiencia y el estilo deseado.** Ejemplo: \'Audiencia: gerentes de soporte (no técnicos). Estilo: profesional, conciso, orientado a la acción.\' Esto da forma al tono y al nivel de detalle.',
            '**F—Enmarca ejemplos que ilustren lo que quieres y lo que no quieres.** Proporciona 2-3 buenos ejemplos y 1-2 contraejemplos. Esto enseña al modelo por contraste.',
            '**T—Prueba tu prompt en casos representativos antes del despliegue.** Usa la estructura CRAFT para construir el prompt, luego valida en un lote pequeño. Si los resultados son malos, itera: clarifica restricciones, añade mejores ejemplos o ajusta el encuadre de la audiencia.',
          ],
        },
        faqSection: {
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Qué significa CRAFT?', a: 'CRAFT significa Contexto, Rol, Audiencia, Formato y Tono. Es un framework de prompt que estructura las tareas creativas al definir explícitamente quién escribe, para quién escribe y cómo debe verse el resultado.' },
            { q: '¿Cuándo debo usar CRAFT en lugar de otros frameworks?', a: 'Usa CRAFT para tareas creativas, de marketing y de redacción consciente de la audiencia: emails, posts en redes sociales, landing pages, scripts y copy de ventas. Para extracción de datos estructurados o razonamiento lógico, usa APE o SPECS en su lugar.' },
            { q: '¿Puedo usar CRAFT con cualquier modelo de lenguaje?', a: 'Sí. CRAFT funciona con GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral y cualquier otro modelo. El framework es agnóstico al modelo; estructura tu prompt claramente para cualquier LLM.' },
            { q: '¿Tengo que completar los cinco elementos CRAFT?', a: 'Para mejores resultados, sí — proporciona orientación explícita sobre Contexto, Rol, Audiencia, Formato y Tono. Omitir cualquier elemento deja espacio para que el modelo adivine y produzca outputs inconsistentes. Incluso una descripción de una oración para cada elemento es suficiente.' },
            { q: '¿Qué tan largo debe ser mi prompt CRAFT?', a: 'Los prompts CRAFT pueden ser concisos o detallados. Una versión compacta puede ser de 2-3 oraciones (una por elemento), mientras que una robusta puede abarcar un párrafo. La longitud no es el objetivo — la claridad y la explicitud sí lo son.' },
            { q: '¿Puedo combinar CRAFT con otros frameworks?', a: 'Sí. Puedes anidar prompts CRAFT dentro de Chain-of-Thought para outputs más largos, o combinar CRAFT con APE si necesitas tanto contenido creativo como razonamiento estructurado.' },
            { q: '¿Qué pasa si mi tarea no encaja en la estructura CRAFT?', a: 'Si tu tarea no involucra decisiones de audiencia, tono o formato, CRAFT probablemente no sea la mejor opción. Usa Chain-of-Thought para el razonamiento, APE para el análisis estructurado o SPECS para requisitos precisos en su lugar.' },
            { q: '¿Cómo pruebo si mi prompt CRAFT está funcionando?', a: 'Ejecuta tu prompt CRAFT en 3-5 ejemplos representativos y compara los outputs en varias ejecuciones. Verifica: (1) ¿El tono coincide con lo que especificaste? (2) ¿El formato es consistente? (3) ¿El contenido se dirige a la audiencia correcta? Si alguno falla, refina el elemento CRAFT correspondiente.' },
            { q: '¿Qué significa CRAFT en prompt engineering?', a: 'CRAFT significa Contexto, Rol, Audiencia, Formato y Tono. Estos cinco componentes trabajan juntos para estructurar tareas de escritura creativa. El Contexto proporciona antecedentes, el Rol define la perspectiva del escritor, la Audiencia identifica quién lo lee, el Formato especifica la estructura del output y el Tono establece el estilo de escritura.' },
            { q: '¿Cómo mejora el framework CRAFT la calidad del prompt?', a: 'CRAFT mejora la calidad al eliminar la vaguedad. En lugar de decir "escribe copy", especificas exactamente quién escribe, para quién, en qué estilo, en qué formato. Esta explicitud reduce la ambigüedad del modelo y produce outputs más consistentes y alineados con la marca en múltiples ejecuciones.' },
            { q: '¿Cuál es la diferencia entre los frameworks CRAFT y CO-STAR?', a: 'Ambos son frameworks de 5 componentes para tareas creativas. CRAFT (Contexto, Rol, Audiencia, Formato, Tono) se centra en la voz y el estilo de escritura. CO-STAR (Contexto, Objetivo, Estilo, Tono, Audiencia, Respuesta — 6 componentes) se centra en los objetivos de comunicación. CRAFT sobresale en la consistencia de la voz de marca; CO-STAR en la comunicación con múltiples partes interesadas.' },
          ],
        },
      },
    },
    ar: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'إطار CRAFT',
      intro: 'إطار CRAFT هو بنية موجّه مصمّمة لإنتاج محتوى محدد ومدرك للجمهور من خلال التركيز على السياق والدور والجمهور والتنسيق والنبرة في تعليمة واحدة متكاملة. في PromptQuorum، يتوفر إطار CRAFT كخيار مدمج يمكن لأي مستخدم اختياره وتطبيقه عبر جميع النماذج المدعومة.',
      publishDate: '2026-03-24',
      readTime: '٧ دقائق للقراءة',
      educationalLevel: 'متوسط',
      seoTitle: 'إطار CRAFT: السياق والدور والجمهور ٢٠٢٦',
      metaDescription: 'إطار CRAFT (السياق، الدور، الجمهور، التنسيق، النبرة): اكتب نصوص ذكاء اصطناعي بهوية علامة تجارية في ٥ حقول. قوالب ومقارنة مع CO-STAR.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'إطار CRAFT',
        description: 'كيفية عمل إطار CRAFT (السياق والدور والجمهور والتنسيق والنبرة)، متى تستخدمه، وكيف تقدّمه PromptQuorum كخيار مدمج.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/craft-framework',
        inLanguage: 'ar',
        keywords: ['إطار CRAFT', 'أطر الموجّهات', 'هندسة الموجّهات', 'الموجّهات الإبداعية', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'هندسة الموجّهات' },
          { '@type': 'Thing', name: 'أطر الموجّهات' },
          { '@type': 'Thing', name: 'نماذج اللغة الكبيرة' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
        ],
      },
      sections: {
        whatIsCRAFT: {
          title: 'ما هو إطار CRAFT؟',
          content: [
            '**إطار CRAFT هو قالب موجّه للمهام الإبداعية والتسويقية يجعل نماذج اللغة تُحدد من أي منظور تكتب ولمن تكتب وكيف يجب أن يبدو الناتج.** بدلًا من إرسال طلب غامض مثل "اكتب منشورًا عن منتجنا"، تُعرّف كل عنصر من عناصر CRAFT حتى تتمكن نماذج كـGPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro من إنتاج نصوص متسقة وقابلة لإعادة الاستخدام.',
            'الاختصار يتوسّع عادةً إلى:',
          ],
          items: [
            'السياق (Context): معلومات خلفية عن المنتج أو الموقف أو الحملة.',
            'الدور (Role): الصوت أو المنظور المهني الذي يجب أن يتبنّاه النموذج.',
            'الجمهور (Audience): القارئ المستهدف واحتياجاته أو نقاط ألمه.',
            'التنسيق (Format): البنية المحددة للناتج، مثل "منشور LinkedIn" أو "قسم hero لصفحة الهبوط".',
            'النبرة (Tone): أسلوب الكتابة، من الرسمي إلى الودّي، مع قيود الأسلوب.',
          ],
        },
        whyCRAFTWorks: {
          title: 'لماذا يعمل إطار CRAFT للمهام الإبداعية؟',
          content: [
            '**يعمل إطار CRAFT بشكل جيد للموجّهات الإبداعية والتسويقية لأنه يُرمّز نفس الحقول التي يستخدمها كتّاب الإعلانات البشريون في الموجزات الحقيقية.** حين ترى النماذج السياق والجمهور والنبرة بشكل صريح، تُنفق جهدًا أقل في التخمين وجهدًا أكثر في تكييف اللغة مع أهدافك.',
            'هذه البنية مفيدة بشكل خاص حين:',
          ],
          items: [
            'تحتاج إلى الحفاظ على صوت علامة تجارية متسق عبر كثير من قطع المحتوى.',
            'تريد مقارنة كيفية تعامل نماذج مختلفة مع نفس الموجز الإبداعي.',
            'تعمل في فريق حيث يجب أن تكون الموجّهات مفهومة وقابلة للتحرير من قِبل زملاء غير تقنيين.',
          ],
        },
        fiveComponents: {
          title: 'مكوّنات CRAFT الخمسة بالتفصيل',
          content: [
            '**الموجّه CRAFT القوي يتضمن تعليمات واضحة لكل مكوّن من المكوّنات الخمسة حتى لا يُترك شيء مهم ضمنيًّا.** يمكنك كتابتها كسطور مُعلَّمة أو كفقرة موجزة؛ المهم أن تكون كل جزء موجودًا.',
            'أوصاف نموذجية للمكوّنات:',
          ],
          items: [
            'السياق: ما الذي يُروَّج له، وما الذي يفعله، وأي حقائق رئيسية يجب أن يحترمها النموذج.',
            'الدور: مثلًا "أنت كاتب إعلانات SaaS B2B" أو "أنت مسوّق نمو أول".',
            'الجمهور: من سيقرأ هذا، مثل "مؤسسون تقنيون في شركات ناشئة في مرحلة البذرة" أو "مدراء الموارد البشرية في الشركات الكبيرة".',
            'التنسيق: القطعة النهائية، مثل "خيط X بـ٥ تغريدات" أو "بريد إلكتروني متابعة" أو "مقدمة مدونة لإعلان منتج".',
            'النبرة: قيود الأسلوب، مثل "مهني لكن في متناول الجميع" أو "بلا كلمات مبالغة" أو "لغة بسيطة بجمل قصيرة".',
          ],
        },
        badVsGoodExample: {
          title: 'مثال: موجّه CRAFT سيئ مقابل جيد',
          content: [
            '**الفرق بين موجّه إبداعي بلا بنية وموجّه قائم على CRAFT يُرى بأوضح ما يكون مع نفس المهمة.** فيما يلي مثال بسيط لمنشور LinkedIn عن ميزة جديدة.',
            '**[موجّه سيئ]**',
            '"اكتب منشور LinkedIn عن ميزة الذكاء الاصطناعي الجديدة لدينا."',
            '**[موجّه جيد]**',
            '"السياق: نحن نُطلق ميزة ذكاء اصطناعي جديدة تُلخّص تلقائيًّا تذاكر دعم العملاء للأسبوع في تقرير من صفحة واحدة للمدراء. تتكامل مع أدوات مكتب المساعدة الموجودة وتُقلّل وقت التقارير اليدوية. الدور: أنت كاتب إعلانات SaaS B2B. الجمهور: قادة دعم العملاء المشغولون في الشركات المتوسطة الذين يكافحون للحصول على نظرة عامة على المشكلات المتكررة. التنسيق: منشور LinkedIn من ٣ فقرات قصيرة و٣ نقاط. بحد أقصى ١٨٠ كلمة. النبرة: مهني لكن محادثاتي. تجنّب كلمات المبالغة مثل \'ثوري\' أو \'يغيّر قواعد اللعبة\'. اختتم بدعوة واضحة للعمل لحجز عرض توضيحي."',
            'نسخة CRAFT تعمل كموجز إبداعي مصغّر: أي نموذج يستقبله يمكنه إنتاج نصوص مناسبة للعلامة التجارية مع تجربة وخطأ أقل.',
          ],
        },
        whenToUse: {
          title: 'متى تستخدم إطار CRAFT؟',
          content: [
            '**يجب استخدام إطار CRAFT حين تُنشئ محتوى يهم فيه الجمهور والتنسيق والصوت بقدر ما تهم الحقائق.** يشمل ذلك معظم سير عمل التسويق والمبيعات والتواصل.',
            'حالات الاستخدام النموذجية:',
          ],
          items: [
            'منشورات وسائل التواصل الاجتماعي لمنصات كـLinkedIn وX والمدونات المؤسسية.',
            'حملات البريد الإلكتروني وتسلسلات الإعداد وإعلانات المنتجات.',
            'نصوص صفحات الهبوط وأوصاف الميزات وقوائم متاجر التطبيقات.',
            'نصوص الفيديو أو دعوات ندوات الويب حيث تهم النبرة والإيقاع.',
          ],
        },
        howPQImplements: {
          title: 'كيف تُنفّذ PromptQuorum إطار CRAFT؟',
          content: [
            '**PromptQuorum أداة إرسال ذكاء اصطناعي متعددة النماذج تتضمن إطار CRAFT كواحدة من بنى موجّهاتها المدمجة حتى يتمكن المستخدمون من توليد محتوى إبداعي بشكل متسق عبر نماذج كثيرة.** حين تختار خيار CRAFT في PromptQuorum، تعرض التطبيق حقولًا مخصصة لكل مكوّن وتجمّعها في موجّه واحد متكامل.',
            'داخل PromptQuorum، يتيح لك إطار CRAFT:',
          ],
          items: [
            'ملء حقول السياق والدور والجمهور والتنسيق والنبرة عبر مدخلات منظّمة بدلًا من تذكّر النمط يدويًّا.',
            'تطبيق نفس الموجّه القائم على CRAFT على نماذج متعددة بالتوازي، ومقارنة كيفية استجابة GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro والنماذج المحلية للموجز الإبداعي ذاته.',
            'حفظ قوالب CRAFT وإعادة استخدامها لسير العمل المتكررة كـ"منشور LinkedIn لإطلاق ميزة" أو "دراسة حالة عميل" أو "بريد إلكتروني للتواصل مع المبيعات".',
          ],
        },
        usingCRAFTWithOthers: {
          title: 'استخدام CRAFT جنبًا إلى جنب مع أطر أخرى',
          content: [
            '**يجب دمج إطار CRAFT مع أطر أخرى في مجموعة أدواتك من خلال مواءمة كل منها مع نوع المهمة التي يخدمها بشكل أفضل.** CRAFT ليس حلًّا شاملًا؛ إنه مُحسَّن للمحتوى حيث يكون الجمهور والنبرة محوريَّين.',
            'نمط عملي هو:',
          ],
          items: [
            'استخدم CRAFT للمخرجات الإبداعية: المنشورات والبريد الإلكتروني والنصوص وصفحات الهبوط.',
            'استخدم [إطار APE](/ar/prompt-engineering/ape-framework) أو [إطار SPECS](/ar/prompt-engineering/specs-framework) للمخرجات المنظّمة وقوائم التحقق أو مواصفات JSON.',
            'استخدم [إطار CO-STAR](/ar/prompt-engineering/co-star-framework) أو البنى الموجّهة بالاستدلال كـChain-of-Thought للتحليل المعقد والتخطيط والمهام التواصلية متعددة القيود.',
          ],
        },
        howToStart: {
          title: 'كيفية استخدام إطار CRAFT',
          numberedItems: [
            '**C — وضّح المهمة بهدف من جملة واحدة.** مثال: "صنّف مشاعر ملاحظات العملاء." لا: "ساعد في التحليل." كن محددًا.',
            '**R — رتّب القيود حسب الأولوية.** مثال: (١) يجب الحفاظ على نبرة العميل، (٢) يجب أن تكون الإجابة ≤١٠٠ كلمة، (٣) صنّف نوع الشكوى إن أمكن. أعطِ الأولوية لما يهم أكثر في ناتجك.',
            '**A — وضّح الجمهور والأسلوب المطلوب.** مثال: "الجمهور: مدراء الدعم (غير تقنيين). الأسلوب: مهني وموجز وموجّه للعمل." هذا يُشكّل النبرة ومستوى التفصيل.',
            '**F — قدّم أمثلة توضّح ما تريد وما لا تريد.** قدّم ٢-٣ أمثلة جيدة و١-٢ أمثلة مضادة. هذا يُعلّم النموذج من خلال التناقض.',
            '**T — اختبر موجّهك على حالات تمثيلية قبل النشر.** استخدم بنية CRAFT لبناء الموجّه، ثم تحقق على دُفعة صغيرة. إن كانت النتائج سيئة، كرّر: وضّح القيود، أضف أمثلة أفضل، أو عدّل إطار الجمهور.',
          ],
        },
        faqSection: {
          title: 'الأسئلة الشائعة',
          faqs: [
            { q: 'ماذا يعني CRAFT؟', a: 'CRAFT يعني السياق والدور والجمهور والتنسيق والنبرة (Context, Role, Audience, Format, Tone). إنه إطار موجّه يُبنيِّن المهام الإبداعية من خلال تحديد من يكتب صراحةً ولمن يكتب وكيف يجب أن يبدو الناتج.' },
            { q: 'متى يجب أن أستخدم CRAFT بدلًا من أطر أخرى؟', a: 'استخدم CRAFT للمهام الإبداعية والتسويقية والكتابة المدركة للجمهور: البريد الإلكتروني ومنشورات وسائل التواصل الاجتماعي وصفحات الهبوط والنصوص ونصوص المبيعات. لاستخراج البيانات المنظّمة أو الاستدلال المنطقي، استخدم APE أو SPECS بدلًا من ذلك.' },
            { q: 'هل يمكنني استخدام CRAFT مع أي نموذج لغوي؟', a: 'نعم. يعمل CRAFT مع GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro وMistral وأي نموذج آخر. الإطار محايد تجاه النموذج؛ يُبنيِّن موجّهك بوضوح لأي نموذج لغة كبير.' },
            { q: 'هل يجب أن أملأ العناصر الخمسة لـCRAFT؟', a: 'للحصول على أفضل النتائج، نعم — قدّم توجيهًا صريحًا حول السياق والدور والجمهور والتنسيق والنبرة. إغفال أي عنصر يترك مجالًا للنموذج للتخمين وإنتاج مخرجات غير متسقة. حتى وصف من جملة واحدة لكل عنصر كافٍ.' },
            { q: 'كم يجب أن يكون موجّه CRAFT طويلًا؟', a: 'يمكن أن تكون موجّهات CRAFT موجزة أو مفصّلة. يمكن أن تكون نسخة موجزة من ٢-٣ جمل (واحدة لكل عنصر)، بينما يمكن أن تمتد نسخة قوية على فقرة. الطول ليس الهدف — الوضوح والصراحة هما الهدف.' },
            { q: 'هل يمكنني دمج CRAFT مع أطر أخرى؟', a: 'نعم. يمكنك تداخل موجّهات CRAFT داخل Chain-of-Thought للمخرجات الأطول، أو دمج CRAFT مع APE إن كنت تحتاج إلى محتوى إبداعي واستدلال منظّم في آن واحد.' },
            { q: 'ماذا لو لم تتناسب مهمتي مع بنية CRAFT؟', a: 'إن لم تتضمن مهمتك قرارات جمهور أو نبرة أو تنسيق، فمن المرجّح أن CRAFT ليس الخيار الأفضل. استخدم Chain-of-Thought للاستدلال، أو APE للتحليل المنظّم، أو SPECS للمتطلبات الدقيقة بدلًا من ذلك.' },
            { q: 'كيف أختبر إن كان موجّه CRAFT يعمل؟', a: 'شغّل موجّه CRAFT على ٣-٥ أمثلة تمثيلية وقارن المخرجات عبر عدة تشغيلات. تحقق: (١) هل تتطابق النبرة مع ما حدّدته؟ (٢) هل التنسيق متسق؟ (٣) هل المحتوى يخاطب الجمهور الصحيح؟ إن فشل أي منها، نقّح عنصر CRAFT المقابل.' },
            { q: 'ماذا يعني CRAFT في هندسة الموجّهات؟', a: 'CRAFT يعني السياق والدور والجمهور والتنسيق والنبرة. تعمل هذه المكوّنات الخمسة معًا لتبنية مهام الكتابة الإبداعية. السياق يقدّم الخلفية، والدور يُعرّف منظور الكاتب، والجمهور يُحدّد من يقرأ، والتنسيق يُحدد بنية المخرجات، والنبرة تُحدد أسلوب الكتابة.' },
            { q: 'كيف يُحسّن إطار CRAFT جودة الموجّه؟', a: 'يُحسّن CRAFT الجودة من خلال إزالة الغموض. بدلًا من قول "اكتب نصًّا"، تُحدد بدقة من يكتب ولمن وبأي أسلوب وبأي تنسيق. هذه الصراحة تُقلّل الغموض للنموذج وتنتج مخرجات أكثر اتساقًا وتوافقًا مع العلامة التجارية عبر تشغيلات متعددة.' },
            { q: 'ما الفرق بين إطاري CRAFT وCO-STAR؟', a: 'كلاهما إطار من ٥ مكوّنات للمهام الإبداعية. CRAFT (السياق، الدور، الجمهور، التنسيق، النبرة) يُركّز على صوت الكتابة وأسلوبها. CO-STAR (السياق، الهدف، الأسلوب، النبرة، الجمهور، الاستجابة — ٦ مكوّنات) يُركّز على أهداف التواصل. CRAFT يتفوق في اتساق صوت العلامة التجارية؛ CO-STAR في التواصل متعدد أصحاب المصلحة.' },
          ],
        },
      },
    },
    pt: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'O Framework CRAFT',
      intro: 'O Framework CRAFT é uma estrutura de prompt projetada para produzir conteúdo específico e consciente da audiência ao focar em Contexto, Papel, Audiência, Formato e Tom em uma única instrução bem formada. No PromptQuorum, o Framework CRAFT está disponível como opção integrada que qualquer usuário pode selecionar e aplicar em todos os modelos compatíveis.',
      publishDate: '2026-03-24',
      readTime: '7 min de leitura',
      educationalLevel: 'Intermediate',
      seoTitle: 'O Framework CRAFT: Contexto, Papel, Audiência 2026',
      metaDescription: 'Framework CRAFT (Contexto, Papel, Audiência, Formato, Tom): escreva copy de IA com identidade de marca em 5 campos. Modelos e comparação com CO-STAR.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'O Framework CRAFT',
        description: 'Como funciona o Framework CRAFT (Contexto, Papel, Audiência, Formato e Tom), quando usá-lo e como o PromptQuorum oferece o CRAFT como opção integrada.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        url: 'https://www.promptquorum.com/pt/pt/prompt-engineering/craft-framework',
        inLanguage: 'pt-BR',
        keywords: ['Framework CRAFT', 'frameworks de prompt', 'prompt engineering', 'prompts criativos', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Frameworks de Prompt' },
          { '@type': 'Thing', name: 'Modelos de Linguagem de Grande Escala' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
        ],
      },
      sections: {
        whatIsCRAFT: {
          title: 'O que é o Framework CRAFT',
          content: [
            '**O Framework CRAFT é um modelo de prompt para tarefas criativas e de marketing que faz com que os modelos de linguagem especifiquem de qual perspectiva estão escrevendo, para quem estão escrevendo e como deve parecer o resultado.** Em vez de enviar uma solicitação vaga como "escreva um post sobre nosso produto", você define cada elemento CRAFT para que modelos como GPT-5.5, Claude Opus 4.8 e Gemini 3.1 Pro possam produzir copy consistente e reutilizável.',
            'O acrônimo se expande tipicamente como:',
          ],
          items: [
            'Contexto: Informações de fundo sobre o produto, situação ou campanha.',
            'Papel (Role): A voz ou perspectiva profissional que o modelo deve adotar.',
            'Audiência: O leitor-alvo e suas necessidades ou pontos de dor.',
            'Formato: A estrutura concreta do resultado, como "post do LinkedIn" ou "seção hero da landing page".',
            'Tom: O estilo de escrita, de formal a conversacional, mais restrições de estilo.',
          ],
        },
        whyCRAFTWorks: {
          title: 'Por que o Framework CRAFT funciona para tarefas criativas',
          content: [
            '**O Framework CRAFT funciona bem para prompts criativos e de marketing porque codifica os mesmos campos que os copywriters humanos usam em briefings reais.** Quando os modelos veem contexto, audiência e tom explícitos, gastam menos esforço adivinhando e mais esforço adaptando a linguagem aos seus objetivos.',
            'Essa estrutura é especialmente útil quando:',
          ],
          items: [
            'Você precisa manter uma voz de marca consistente em muitas peças de conteúdo.',
            'Você quer comparar como diferentes modelos lidam com o mesmo briefing criativo.',
            'Você trabalha em uma equipe onde os prompts devem ser compreensíveis e editáveis por colegas não técnicos.',
          ],
        },
        fiveComponents: {
          title: 'Os cinco componentes CRAFT em detalhe',
          content: [
            '**Um prompt CRAFT sólido inclui instruções claras para cada um dos cinco componentes para que nada importante fique implícito.**',
            'Descrições típicas dos componentes:',
          ],
          items: [
            'Contexto: O que está sendo promovido, o que faz e quaisquer fatos-chave que o modelo deve respeitar.',
            'Papel: Por exemplo "Você é um copywriter B2B SaaS" ou "Você é um growth marketer sênior".',
            'Audiência: Quem lerá isso, como "fundadores técnicos em startups em estágio semente" ou "gerentes de RH em grandes empresas".',
            'Formato: O artefato final, como "thread do Twitter com 5 tweets", "e-mail de acompanhamento" ou "introdução de blog de anúncio de produto".',
            'Tom: Restrições de estilo, como "profissional mas acessível", "sem palavras de hype" ou "linguagem simples com frases curtas".',
          ],
        },
        badVsGoodExample: {
          title: 'Exemplo: Prompt CRAFT ruim vs bom',
          content: [
            '**A diferença entre um prompt criativo sem estrutura e um prompt baseado em CRAFT fica mais fácil de ver com a mesma tarefa.**',
            '**[Prompt Ruim]**',
            '"Escreva um post do LinkedIn sobre nosso novo recurso de IA."',
            '**[Prompt Bom]**',
            '"Contexto: Estamos lançando um novo recurso de IA que resume automaticamente os tickets de suporte ao cliente da semana em um relatório de uma página para os gerentes. Integra-se com as ferramentas de helpdesk existentes e reduz o tempo de relatórios manuais. Papel: Você é um copywriter B2B SaaS. Audiência: Líderes de suporte ao cliente ocupados em empresas médias que têm dificuldade em ter uma visão geral dos problemas recorrentes. Formato: Post do LinkedIn com 3 parágrafos curtos e 3 marcadores. Máximo 180 palavras. Tom: Profissional mas conversacional. Evite palavras de hype como \'revolucionário\' ou \'que muda o jogo\'. Termine com uma chamada para ação clara para agendar uma demonstração."',
          ],
        },
        whenToUse: {
          title: 'Quando usar o Framework CRAFT',
          content: [
            '**Você deve usar o Framework CRAFT quando estiver criando conteúdo onde a audiência, o formato e a voz importam tanto quanto o conteúdo factual.**',
            'Casos de uso típicos:',
          ],
          items: [
            'Posts em redes sociais para plataformas como LinkedIn, X ou blogs corporativos.',
            'Campanhas de e-mail, sequências de integração e anúncios de produtos.',
            'Copy de landing pages, descrições de recursos e listagens de lojas de aplicativos.',
            'Scripts de vídeo ou convites para webinars onde o tom e o ritmo são importantes.',
          ],
        },
        howPQImplements: {
          title: 'Como o PromptQuorum implementa o Framework CRAFT',
          content: [
            '**O PromptQuorum é uma ferramenta de despacho de IA multi-modelo que inclui o Framework CRAFT como uma de suas estruturas de prompt integradas para que os usuários possam gerar conteúdo criativo de maneira consistente em muitos modelos.**',
            'Dentro do PromptQuorum, o Framework CRAFT permite que você:',
          ],
          items: [
            'Preencha os campos de Contexto, Papel, Audiência, Formato e Tom por meio de entradas estruturadas em vez de lembrar o padrão manualmente.',
            'Aplique o mesmo prompt baseado em CRAFT a múltiplos modelos em paralelo, comparando como GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e modelos locais respondem ao mesmo briefing criativo.',
            'Salve e reutilize modelos CRAFT para fluxos de trabalho recorrentes como "post do LinkedIn de lançamento de recurso", "caso de sucesso de cliente" ou "e-mail de contato de vendas".',
          ],
        },
        usingCRAFTWithOthers: {
          title: 'Usar CRAFT junto a outros frameworks',
          content: [
            '**Você deve combinar o Framework CRAFT com outros frameworks em seu kit de ferramentas alinhando cada um com o tipo de tarefa que melhor serve.**',
            'Um padrão prático é:',
          ],
          items: [
            'Use CRAFT para outputs criativos: posts, e-mails, scripts, landing pages.',
            'Use o Framework APE ou o Framework SPECS para outputs estruturados, listas de verificação ou especificações JSON.',
            'Use o Framework CO-STAR ou estruturas orientadas ao raciocínio como Chain-of-Thought para análises complexas, planejamento e tarefas de comunicação com múltiplas restrições.',
          ],
        },

        howToStart: {
          title: 'Como usar o Framework CRAFT',
          numberedItems: [
            '**C—Clarifica a tarefa com um objetivo de uma frase.** Exemplo: \'Classifique o sentimento do feedback de clientes.\' Não: \'Ajude com a análise.\' Seja específico.',
            '**R—Priorize as restrições por ordem de importância.** Exemplo: (1) Deve preservar o tom do cliente, (2) A resposta deve ter ≤100 palavras, (3) Classifique o tipo de reclamação se possível. Priorize o que mais importa para seu resultado.',
            '**A—Articule a audiência e o estilo desejado.** Exemplo: \'Audiência: gerentes de suporte (não técnicos). Estilo: profissional, conciso, orientado à ação.\' Isso molda o tom e o nível de detalhe.',
            '**F—Enquadre exemplos que ilustrem o que você quer e o que não quer.** Forneça 2-3 bons exemplos e 1-2 contra-exemplos. Isso ensina o modelo por contraste.',
            '**T—Teste seu prompt em casos representativos antes da implantação.** Use a estrutura CRAFT para construir o prompt, depois valide em um lote pequeno. Se os resultados forem ruins, itere: esclareça restrições, adicione melhores exemplos ou ajuste o enquadramento da audiência.',
          ],
        },
        faqSection: {
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'O que significa CRAFT?', a: 'CRAFT significa Contexto, Papel (Role), Audiência, Formato e Tom. É um framework de prompt que estrutura tarefas criativas ao definir explicitamente quem escreve, para quem escreve e como deve parecer o resultado.' },
            { q: 'Quando devo usar CRAFT em vez de outros frameworks?', a: 'Use CRAFT para tarefas criativas, de marketing e de redação consciente da audiência: e-mails, posts em redes sociais, landing pages, scripts e copy de vendas. Para extração de dados estruturados ou raciocínio lógico, use APE ou SPECS.' },
            { q: 'Posso usar CRAFT com qualquer modelo de linguagem?', a: 'Sim. CRAFT funciona com GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral e qualquer outro modelo. O framework é agnóstico ao modelo.' },
            { q: 'Preciso preencher os cinco elementos CRAFT?', a: 'Para melhores resultados, sim — forneça orientação explícita sobre Contexto, Papel, Audiência, Formato e Tom. Omitir qualquer elemento deixa espaço para o modelo adivinhar e produzir outputs inconsistentes.' },
            { q: 'Qual deve ser o comprimento do meu prompt CRAFT?', a: 'Os prompts CRAFT podem ser concisos ou detalhados. Uma versão compacta pode ter 2-3 frases (uma por elemento). O comprimento não é o objetivo — a clareza e a explicitude sim.' },
            { q: 'Posso combinar CRAFT com outros frameworks?', a: 'Sim. Você pode aninhar prompts CRAFT dentro de Chain-of-Thought para outputs mais longos, ou combinar CRAFT com APE se precisar tanto de conteúdo criativo quanto de raciocínio estruturado.' },
            { q: 'O que acontece se minha tarefa não se encaixar na estrutura CRAFT?', a: 'Se sua tarefa não envolver decisões de audiência, tom ou formato, CRAFT provavelmente não é a melhor opção. Use Chain-of-Thought para raciocínio, APE para análise estruturada ou SPECS para requisitos precisos.' },
            { q: 'Como testo se meu prompt CRAFT está funcionando?', a: 'Execute seu prompt CRAFT em 3-5 exemplos representativos e compare os outputs em várias execuções. Verifique: (1) O tom corresponde ao que você especificou? (2) O formato é consistente? (3) O conteúdo se dirige à audiência correta?' },
            { q: 'O que significa CRAFT em prompt engineering?', a: 'CRAFT significa Contexto, Papel, Audiência, Formato e Tom. Esses cinco componentes trabalham juntos para estruturar tarefas de escrita criativa.' },
            { q: 'Como o framework CRAFT melhora a qualidade do prompt?', a: 'O CRAFT melhora a qualidade eliminando a vagueza. Em vez de dizer "escreva copy", você especifica exatamente quem escreve, para quem, em que estilo, em que formato. Essa explicitude reduz a ambiguidade do modelo.' },
            { q: 'Qual é a diferença entre os frameworks CRAFT e CO-STAR?', a: 'Ambos são frameworks de 5 componentes para tarefas criativas. CRAFT (Contexto, Papel, Audiência, Formato, Tom) foca na voz e no estilo de escrita. CO-STAR (Contexto, Objetivo, Estilo, Tom, Audiência, Resposta — 6 componentes) foca nos objetivos de comunicação.' },
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
        'url': 'https://www.promptquorum.com/fr/prompt-engineering/craft-framework',
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
            '**Le CRAFT Framework est un modèle de prompt pour les tâches créatives et marketing qui pousse les grands modèles de langage à définir qui ils sont, pour qui ils écrivent et comment le résultat doit se présenter.** Au lieu d\'envoyer une demande vague comme \"écris un post sur notre produit\", vous définissez chaque élément CRAFT pour que GPT-5.5, Claude Opus 4.8 et Gemini 3.1 Pro produisent du texte cohérent et réutilisable. Si vous découvrez le prompting structuré, consultez [Qu\'est-ce que le Prompt Engineering](/fr/prompt-engineering/what-is-prompt-engineering) pour les concepts fondamentaux.',
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
            'Appliquer le même prompt CRAFT à plusieurs modèles en parallèle, comparant comment GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et modèles locaux réagissent au même brief. (Pour les prompts plus simples, considérez le [Framework Single-Step](/fr/prompt-engineering/the-single-step-prompt-method).)',
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
            'Utilisez le [Framework APE](/fr/prompt-engineering/ape-framework) ou [Framework SPECS](/fr/prompt-engineering/specs-framework) pour les outputs structurés, checklists ou spécifications JSON.',
            'Utilisez le [Framework CO-STAR](/fr/prompt-engineering/co-star-framework) ou structures orientées reasoning comme Chain-of-Thought pour l\'analyse complexe, la planification et les tâches multi-contraintes.',
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
        faqSection: {
          title: 'Questions Fréquemment Posées',
          faqs: [
            { q: 'Que signifie CRAFT ?', a: 'CRAFT signifie Contexte, Rôle, Audience, Format et Ton. C\'est un framework de prompt qui structure les tâches créatives en définissant explicitement qui écrit, pour qui ils écrivent et comment le résultat doit ressembler.' },
            { q: 'Quand devrais-je utiliser CRAFT plutôt que d\'autres frameworks ?', a: 'Utilisez CRAFT pour les tâches créatives, marketing et orientées audience : emails, posts sur réseaux sociaux, landing pages, scripts et copy de vente. Pour l\'extraction de données structurées ou le raisonnement logique, utilisez APE ou SPECS à la place.' },
            { q: 'Puis-je utiliser CRAFT avec n\'importe quel modèle de langage ?', a: 'Oui. CRAFT fonctionne avec GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral et n\'importe quel autre modèle. Le framework est agnostique aux modèles ; il structure votre prompt clairement pour tout LLM.' },
            { q: 'Dois-je remplir les cinq éléments CRAFT ?', a: 'Pour les meilleurs résultats, oui — fournissez une orientation explicite sur Contexte, Rôle, Audience, Format et Ton. Omettre un élément laisse de la place au modèle pour deviner et produire des résultats incohérents. Même une phrase descriptive pour chaque élément suffit.' },
            { q: 'Quelle longueur devrait avoir mon prompt CRAFT ?', a: 'Les prompts CRAFT peuvent être concis ou détaillés. Une version compacte pourrait avoir 2–3 phrases (une par élément), tandis qu\'une version robuste pourrait s\'étendre sur un paragraphe. La longueur n\'est pas l\'objectif — la clarté et l\'explicitude sont.' },
            { q: 'Puis-je combiner CRAFT avec d\'autres frameworks ?', a: 'Oui. Vous pouvez imbriquer les prompts CRAFT dans Chain-of-Thought pour les résultats plus longs, ou combiner CRAFT avec APE si vous avez besoin à la fois de contenu créatif et de raisonnement structuré.' },
            { q: 'Et si ma tâche ne correspond pas à la structure CRAFT ?', a: 'Si votre tâche ne comporte pas de décisions d\'audience, de ton ou de format, CRAFT n\'est probablement pas le mieux adapté. Utilisez Chain-of-Thought pour le raisonnement, APE pour l\'analyse structurée ou SPECS pour les exigences précises.' },
            { q: 'Comment vérifier si mon prompt CRAFT fonctionne ?', a: 'Exécutez votre prompt CRAFT sur 3–5 exemples représentatifs et comparez les résultats sur plusieurs exécutions. Vérifiez : (1) Le ton correspond-il à ce que vous avez spécifié ? (2) Le format est-il cohérent ? (3) Le contenu s\'adresse-t-il à la bonne audience ? Si l\'un échoue, affinez l\'élément CRAFT correspondant.' },
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
        'url': 'https://www.promptquorum.com/ja/prompt-engineering/craft-framework',
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
            '**CRAFTフレームワークは、クリエイティブおよびマーケティングタスク向けのプロンプトテンプレートです。**大規模言語モデルに対して「誰の視点から書くのか」「誰を対象に書くのか」「出力をどのような形式にするのか」を明確に指示します。「我が社の製品について書いて」といったあいまいなリクエストの代わりに、CRAFTの5つの要素を定義することで、GPT-5.5、Claude Opus 4.8、Gemini 3.1 Proが一貫性のある再利用可能なコピーを生成できます。',
            'プロンプトエンジニアリングが初めての場合は、[プロンプトエンジニアリングとは何か](/ja/prompt-engineering/what-is-prompt-engineering)をご覧ください。',
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
            '同じCRAFTベースプロンプトを複数のモデルに並行適用し、GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、ローカルモデルが同じクリエイティブブリーフにどう応答するかを比較します。(より単純な1ステップのプロンプトには、[シングルステップフレームワーク](/ja/prompt-engineering/the-single-step-prompt-method)を検討してください。)',
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
            '構造化された出力、チェックリスト、JSON仕様には、[APEフレームワーク](/ja/prompt-engineering/ape-framework)または[SPECSフレームワーク](/ja/prompt-engineering/specs-framework)を使用します',
            '複雑な分析、計画、マルチ制約通信には、[CO-STARフレームワーク](/ja/prompt-engineering/co-star-framework)またはChain-of-Thoughtなどの推論志向の構造を使用します',
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
        faqSection: {
          title: 'よくある質問',
          faqs: [
            { q: 'CRAFTは何を表していますか？', a: 'CRAFTはContext（コンテキスト）、Role（役割）、Audience（オーディエンス）、Format（フォーマット）、Tone（トーン）を表しています。誰が書いているのか、誰に書いているのか、出力がどのようであるべきかを明確に定義することで、創造的なタスクを構造化するプロンプトフレームワークです。' },
            { q: 'CRAFTを他のフレームワークの代わりに使用すべき場合は？', a: '創造的で、マーケティング指向で、オーディエンス対応の書き込みタスク用にCRAFTを使用します：メール、ソーシャルメディア投稿、ランディングページ、スクリプト、セールスコピー。構造化されたデータ抽出または論理的推論の場合は、代わりにAPEまたはSPECSを使用します。' },
            { q: 'CRAFTをどのような言語モデルでも使用できますか？', a: 'はい。CRAFTはGPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、Mistral、その他すべてのモデルで機能します。フレームワークはモデルに依存しません。すべてのLLMの入力内容を明確に構造化します。' },
            { q: '5つのCRAFT要素すべてを入力する必要がありますか？', a: '最良の結果を得るには、はい——コンテキスト、役割、オーディエンス、フォーマット、トーンに対する明示的なガイダンスを提供してください。要素を削除するとモデルが推測する余地が生まれ、矛盾した出力が生じます。各要素に対して1文の説明でも十分です。' },
            { q: '自分のCRAFTプロンプトはどのくらいの長さにすべきですか？', a: 'CRAFTプロンプトは簡潔または詳細にすることができます。コンパクト版は2～3文（要素ごとに1文）ですが、堅牢な版は段落にまたがる可能性があります。長さが目標ではなく、明確さと明示性が目標です。' },
            { q: 'CRAFTを他のフレームワークと組み合わせることはできますか？', a: 'はい。より長い出力のために、CRAFTプロンプトをChain-of-Thoughtに入れ子にするか、創造的なコンテンツと構造化された推論の両方が必要な場合にCRAFTとAPEを組み合わせることができます。' },
            { q: 'CRAFTの構造に合わないタスクがある場合は？', a: 'タスクがオーディエンス、トーン、またはフォーマットの決定に関わっていない場合、CRAFTはおそらく最適な方法ではありません。論理にはChain-of-Thoughtを、構造化された分析にはAPEを、正確な要件にはSPECSを使用します。' },
            { q: 'CRAFTプロンプトが機能しているかどうかをテストするには？', a: 'CRAFTプロンプトを3～5の代表的な例で実行し、複数回の実行出力を比較します。確認：（1）トーンは指定したものと一致していますか？（2）フォーマットは一貫していますか？（3）コンテンツは適切なオーディエンスに対応していますか？何か失敗した場合、対応するCRAFT要素を改良します。' },
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
        'url': 'https://www.promptquorum.com/zh/prompt-engineering/craft-framework',
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
            '**CRAFT框架是创意和营销任务的提示模板。**它让大语言模型明确：你以谁的身份写作、为谁写作、输出应该什么样子。与其发送模糊指令（如"为产品写一个帖子"），你定义每个CRAFT元素，让GPT-5.5、Claude Opus 4.8和Gemini 3.1 Pro生成一致、可复用的文案。',
            '如果你刚开始接触结构化提示，请阅读[什么是提示工程](/zh/prompt-engineering/what-is-prompt-engineering)了解基础概念。',
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
            '2. 将同一个CRAFT提示并行应用于多个模型，比较GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro和本地模型对同一文案需求的响应。（对于更简单的单步提示，可考虑[单步框架](/zh/prompt-engineering/the-single-step-prompt-method)。）',
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
            '2. 结构化输出、清单、JSON规范用[APE框架](/zh/prompt-engineering/ape-framework)或[SPECS框架](/zh/prompt-engineering/specs-framework)',
            '3. 复杂分析、规划和多约束通信用[CO-STAR框架](/zh/prompt-engineering/co-star-framework)或思维链推理结构',
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
        faqSection: {
          title: '常见问题',
          faqs: [
            { q: 'CRAFT代表什么？', a: 'CRAFT代表背景、角色、受众、格式和语气。它是一个提示框架，通过明确定义谁在写作、他们为谁写作和输出应该是什么样子来结构化创意任务。' },
            { q: '我什么时候应该使用CRAFT而不是其他框架？', a: '将CRAFT用于创意、营销和面向受众的写作任务：电子邮件、社交媒体帖子、落地页、脚本和销售文案。对于结构化数据提取或逻辑推理，改为使用APE或SPECS。' },
            { q: '我可以将CRAFT与任何语言模型一起使用吗？', a: '可以。CRAFT适用于GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、Mistral和任何其他模型。该框架与模型无关；它为所有LLM清晰地结构化您的提示。' },
            { q: '我必须填写所有五个CRAFT要素吗？', a: '为了获得最佳效果，是的——为背景、角色、受众、格式和语气提供明确的指导。删除任何要素会给模型留下猜测的余地，产生不一致的输出。甚至对每个元素的一句描述就足够了。' },
            { q: '我的CRAFT提示应该有多长？', a: 'CRAFT提示可以简洁或详细。紧凑版本可能是2-3句（每个要素一句），而健壮的版本可能跨越一个段落。长度不是目标——清晰和明确性才是。' },
            { q: '我可以将CRAFT与其他框架结合吗？', a: '可以。您可以将CRAFT提示嵌套在Chain-of-Thought中以获得较长的输出，或者如果需要创意内容和结构化推理，可以将CRAFT与APE结合。' },
            { q: '如果我的任务不符合CRAFT结构怎么办？', a: '如果您的任务不涉及受众、语气或格式决策，CRAFT可能不是最佳方案。改为对逻辑使用Chain-of-Thought，对结构化分析使用APE，对精确要求使用SPECS。' },
            { q: '我如何测试我的CRAFT提示是否有效？', a: '在3-5个代表性例子上运行您的CRAFT提示并比较多次运行的输出。检查：（1）语气是否与您指定的相符？（2）格式是否一致？（3）内容是否针对正确的受众？如果有任何失败，改进相应的CRAFT要素。' },
          ],
        },
      },
    },
  };
