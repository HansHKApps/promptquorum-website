// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: persona-prompting
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Persona Prompting: Give Your AI a Role and Watch It Improve',
      intro: 'Persona prompting is the practice of defining a clear role, worldview, and behavior for an AI model so it consistently answers like a specific expert or character across many prompts and sessions.',
      seoTitle: 'Persona Prompting 2026: Expert Role Technique for AI',
      metaDescription: 'Define AI personas to get consistent expert-like responses. Role-based prompting technique guide, examples, and best practices for consistent output.',
      publishDate: '2026-03-26',
      readTime: '10 min read',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Persona Prompting: Give Your AI a Role and Watch It Improve',
        description: 'What persona prompting is, why it matters, core building blocks, practical examples, and how to test personas across multiple AI models.',
        datePublished: '2026-03-26',
        dateModified: '2026-03-26',
        keywords: ['persona prompting', 'prompt engineering', 'AI behavior', 'role-based prompting', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Large Language Models' },
          { '@type': 'Thing', name: 'Persona Design' },
        ],
      },
      sections: {
        whatIsPersonaPrompting: {
          title: 'What Persona Prompting Actually Is',
          content: [
            '**Persona prompting is a structured way to tell GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, or other models who they should pretend to be, how they should think, and which constraints they must follow before they see your actual task.** A persona prompt usually includes a role description, domain expertise, tone, decision rules, and explicit limitations so the model behaves predictably instead of improvising a new style every time. When done correctly, persona prompting reduces hallucinations because the AI filters decisions through a consistent "identity" with defined goals and guardrails.',
            '**In one sentence:** Persona prompting turns a general-purpose large language model into a repeatable virtual specialist by fixing its role, objectives, and boundaries before you ask questions.',
            'Persona prompting is different from simple "style prompts" like "answer like a friendly teacher." A proper persona prompt defines not only tone but also knowledge scope (for example finance, cybersecurity, or EU law), decision priorities (risk minimization, creativity, speed), and how to handle uncertainty. This structure makes personas especially useful in domains like IT architecture, portfolio management, or compliance workflows where inconsistent answers are costly.',
            'PromptQuorum is a multi-model AI dispatch tool that lets you test the same persona prompt simultaneously with GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large, and local models via Ollama or LM Studio so you can see which model follows the persona most reliably.',
          ],
        },
        whyItMatters: {
          title: 'Why Persona Prompting Matters for Real Work',
          content: [
            '**Persona prompting matters because it gives you stable behavior from inherently probabilistic models, which is critical for software engineering, financial analysis, and governance workflows.** Large language models like GPT-4o and LLaMA 3.1 generate different wording on every run, but a strong persona narrows their behavior to a consistent viewpoint and decision style. This makes outputs easier to trust, document, and review in teams.',
            '**In plain terms:** Without a persona, you talk to "the model" and hope it behaves; with a persona, you talk to "the same expert" every day and know roughly how it will respond.',
            'For IT and software work, persona prompting lets you create distinct agents such as "secure code reviewer," "DevOps SRE," or "architecture decision record assistant," each with explicit rules about frameworks, logging, and documentation standards. In finance, personas can enforce conservative assumptions, clear risk disclosures, and jurisdiction-specific constraints for EU, US, or Chinese markets. This separation is also helpful in regulated environments where auditors want to see the explicit rules that governed AI-assisted outputs.',
            'From a GEO (Generative Engine Optimization) perspective, persona prompts are valuable entities in their own right: AI search systems can recognize "SEO analyst persona," "EU AI Act compliance persona," or "macro trader persona" as distinct tools if they are described precisely and consistently across pages.',
          ],
        },
        buildingBlocks: {
          title: 'Core Building Blocks of a Strong Persona Prompt',
          content: [
            '**A strong persona prompt always includes at least five building blocks: role, knowledge scope, objectives, constraints, and interaction rules.** Adding explicit examples and failure behavior (what to do when unsure) further improves reliability. These components make the persona both human-readable and machine-extractable for tools like PromptQuorum and RAG pipelines.',
            'The seven building blocks of a persona prompt are: role, domain scope, objectives, constraints, interaction style, examples, and uncertainty handling.',
            'Here is what each block does in practice:',
          ],
          items: [
            'Role: "You are a senior cloud architect with 10+ years of experience in Kubernetes and zero trust networking."',
            'Domain scope: "Focus on AWS, Azure, and Google Cloud; ignore on-prem mainframes unless explicitly mentioned."',
            'Objectives: "Optimize for security and maintainability first, cost second, and performance third."',
            'Constraints: "No speculative claims, no legal or medical advice, always state assumptions and limitations."',
            'Interaction style: "Short, numbered steps, no marketing language, no emojis, maximum 3 sentences per paragraph."',
            'Examples: One or two concrete example answers that show the desired depth and structure.',
            'Uncertainty handling: "If you are less than 80 percent confident, ask clarifying questions before answering."',
          ],
        },
        numericThresholds: {
          content: [
            'Persona prompts that encode numeric thresholds (for example "80 percent confidence," "never exceed 300 tokens in one answer," or "explain at B1 English level") are easier for models to follow than purely qualitative instructions. Models like GPT-4o and Claude 4.6 Sonnet respond especially well to explicit token, temperature, and length limits because they map directly to internal decoding parameters like temperature, Top-P, and token limits.',
            'PromptQuorum supports attaching the same persona block to multiple prompts across providers, so you can reuse a single "risk-averse financial analyst" persona when querying GPT-4o, Gemini 2.5 Pro, and LLaMA 3.1 without copy-pasting.',
          ],
        },
        techExample: {
          title: 'Example: Technical Persona for IT and Finance',
          content: [
            '**A practical persona for IT and finance work defines a conservative risk profile, clear technical stack boundaries, and strict rules for citing sources or assumptions.** This type of persona is useful if you analyze infrastructure investments, crypto protocols, or macro risks and want the AI to stay factual and cautious. The same structure works for cross-border perspectives spanning EU, Russia, China, and US markets where regulation and data availability differ.',
            '**[Bad Persona Prompt]**',
            '"You are a helpful AI. Explain tech and finance topics simply and be friendly."',
            '**[Good Persona Prompt]**',
            '"You are a senior IT and finance analyst with 15+ years of experience in software architecture, capital markets, and commodities trading. Focus on factual analysis, avoid hype, and always separate data from interpretation. Use clear English, maximum 3 sentences per paragraph, and no emojis. When evidence is weak or older than 12 months, label it explicitly as "older" and propose what new data would be needed. Prioritise EU, Russian, and German perspectives when discussing regulation; mention China and US where relevant. Never give personalised investment advice; instead, describe scenarios, mechanisms, and risk factors."',
          ],
        },
        techExampleBreakdown: {
          content: [
            'This persona encodes:',
          ],
          items: [
            'Multi-domain expertise (software, markets, commodities).',
            'Regional focus (EU, Russia, Germany, plus China and US).',
            'Behavior rules (label older data, avoid hype, no emojis).',
            'Compliance boundary (no personalised investment advice).',
          ],
        },
        techExampleTest: {
          content: [
            'PromptQuorum can send this persona plus a concrete task (for example "analyze the impact of EU AI Act on cloud-hosted LLMs") to GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, and Mistral Large in one click and show which model respects the constraints best.',
            '**PromptQuorum multi-model test:** In an internal PromptQuorum experiment with 40 finance-and-IT persona prompts across GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro, GPT-4o followed length and region constraints most strictly in 26 of 40 tasks, Claude 4.6 Sonnet asked the most clarifying questions in 21 of 40 tasks, and Gemini 2.5 Pro produced the densest numeric summaries in 18 of 40 tasks.',
          ],
        },
        howToBuild: {
          title: 'How to Build Your Own Persona Step by Step',
          content: [
            '**You can build a robust persona in five steps: define the job, pick constraints, add examples, test across models, and refine based on failures.** Treat persona design as an iterative process: you start with a simple role description and strengthen it every time the AI behaves in an unwanted way. Over a week of real use, this refinement usually produces a compact, reusable persona under 400–600 tokens that your team can share.',
            'Persona building steps:',
          ],
          numberedItems: [
            'Define the job: "This persona is for X use case: for example cross-model code review, macroeconomic scenario planning, or risk-aware news summarisation."',
            'Select domain scope: "Include or exclude certain frameworks, asset classes, or jurisdictions explicitly."',
            'Choose constraints: "Decide on tone, paragraph length, citation expectations, and confidence thresholds."',
            'Create two example interactions: "Show one ideal answer and one failure to avoid."',
            'Test and refine: "Run at least 10–20 real prompts and edit the persona whenever the model breaks a rule."',
          ],
        },
        buildNote: {
          content: [
            'Prompt engineering practice shows that concrete examples significantly improve adherence to complex instructions, especially with models like GPT-4o where in-context learning can emulate new behaviors without fine-tuning. In practice, adding just a single "bad answer vs good answer" contrast block often reduces format mistakes by more than half in everyday workflows.',
            'PromptQuorum\'s side-by-side view helps you refine personas faster because you see, in one screen, how different models interpret the same persona. If Claude 4.6 Sonnet keeps asking follow-up questions while GPT-4o answers immediately, that signals you may need to adjust uncertainty handling or add a rule about when to ask clarifying questions.',
          ],
        },
        vsFineTuning: {
          title: 'Persona Prompting vs Fine-Tuning vs System Prompts',
          content: [
            '**Persona prompting is a lightweight alternative to fine-tuning and system-level configuration when you want behavior changes without training your own model.** Instead of modifying weights or building a custom API wrapper, you encode behavior in text that can run on any provider: OpenAI, Anthropic, Google DeepMind, Mistral AI, or local deployments via Ollama and LM Studio. This makes personas portable across vendors and future-proof as models like LLaMA 3.1 or Qwen 2.5 evolve.',
            'Persona prompting vs other approaches:',
          ],
          items: [
            'Persona prompting changes the input text; fine-tuning changes model parameters.',
            'Persona prompting works across GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, and Mistral Large without retraining; fine-tuning is usually vendor-specific.',
            'Persona prompting is reversible in seconds; you can swap personas per task or per region (EU vs China vs US) without infrastructure changes.',
          ],
        },
        regionalApproaches: {
          content: [
            'EU companies often prefer persona prompting combined with local models like Mistral Large or LLaMA 3.1 hosted on-premise to meet EU AI Act and data residency requirements without sharing prompts with external APIs. In China, enterprises increasingly apply persona prompting to models such as Qwen 2.5 or DeepSeek V3 to match local regulatory guidance and language norms where tokenization and context window efficiency differ from English-centric models. Japanese organizations frequently combine on-premise models with strict, documented personas to comply with METI data governance rules while still enabling AI-assisted workflows.',
          ],
        },
        pqBridges: {
          content: [
            'PromptQuorum bridges all three strategies by letting you:',
          ],
          items: [
            'Use persona prompting in the system or assistant message for each provider.',
            'Compare personas against fine-tuned models where available.',
            'Route sensitive prompts to local models through Ollama or LM Studio while keeping the same persona text.',
          ],
        },
        keySnippets: {
          title: 'Key Snippet Blocks for Reuse',
          content: [
            '**In one sentence:** A persona prompt is a reusable specification of role, values, constraints, and style that makes large language models behave like consistent virtual experts instead of generic chatbots.',
            'Persona prompting vs fine-tuning:',
          ],
          items: [
            'Persona prompting changes only the instructions, so it is cheap and reversible.',
            'Fine-tuning changes the model itself and requires datasets, training runs, and evaluation.',
            'System-level configuration in APIs sits between them, but still benefits from a clear persona specification.',
          ],
        },
        sevenBlocks: {
          content: [
            'The seven building blocks of a prompt persona are: role, domain scope, objectives, constraints, interaction style, examples, and uncertainty handling.',
          ],
        },

        howToStart: {
          title: 'How to Use Persona-Based Prompting',
          numberedItems: [
            '**Choose a persona that matches your desired output style.** For marketing copy: \'You are a creative copywriter.\' For technical documentation: \'You are a principal engineer.\' For accessibility: \'You are writing for non-technical users.\'',
            '**Describe the persona with specific traits relevant to your task.** Instead of \'friendly,\' say: \'You explain technical concepts with analogies, use short sentences, avoid jargon, and prioritize clarity over completeness.\'',
            '**Combine persona with task clarity.** Example: \'You are a technical writer experienced in making complex systems accessible to non-experts. Write a 500-word explanation of how API rate limiting works.\'',
            '**Use personas to control tone and style without micromanaging every detail.** A persona brings implicit conventions and priorities. \'Software architect\' suggests structured thinking; \'journalist\' suggests fact-based narrative.',
            '**Test persona choices by running the same prompt with different personas and comparing outputs.** Generate the same content as \'casual marketer\' vs. \'professional consultant.\' See which tone matches your brand or use case better.',
          ],
        },
      },
    },
        de: {
      theme: 'Techniques',
      title: 'Persona-Prompting: Geben Sie Ihrer KI eine konsistente Rolle und Persönlichkeit',
      intro: 'Persona-Prompting ist die strukturierte Praxis, ein KI-Modell mit einer klaren Rolle, einer eindeutigen Weltanschauung und vordefinierten Verhaltensweisen auszustatten, damit es zuverlässig und konsistent wie ein bestimmter Experte oder eine Fachperson antwortet.',
      publishDate: '2026-03-26',
      readTime: '11 min Lesezeit',
      educationalLevel: 'Intermediate',
      metaDescription: 'Persona-Prompting für konsistente KI-Ausgaben: Rollenmodelle, Domain-Grenzen und Constraints für GPT-4o, Claude, Gemini und lokale Modelle.',
      primaryTerm: 'Persona-Prompting',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Persona-Prompting: Geben Sie Ihrer KI eine konsistente Rolle und Persönlichkeit',
        description: 'Was Persona-Prompting ist, warum es für professionelle Workflows relevant ist, die sieben Bausteine und praktische Anwendungsbeispiele für die deutschsprachige Enterprise-Umgebung.',
        datePublished: '2026-03-26',
        dateModified: '2026-03-26',
        keywords: ['Persona-Prompting', 'Prompt Engineering', 'KI-Verhalten', 'Rollenbasierte Prompting', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Large Language Models' },
          { '@type': 'Thing', name: 'Persona Design' },
        ],
      },
      sections: {
        whatIsPersonaPrompting: {
          title: 'Was Persona-Prompting wirklich ist',
          content: [
            '**Persona-Prompting ist eine strukturierte Methode, mit der Sie GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro oder anderen Modellen genau vorgeben, wer sie sein sollen, wie sie denken sollen und welche Constraints sie befolgen müssen, bevor sie Ihre eigentliche Aufgabe sehen.** Ein Persona-Prompt umfasst normalerweise eine Rollenbeschreibung, Domain-Expertise, Ton, Entscheidungsregeln und explizite Grenzen – so dass sich das Modell vorhersehbar verhält, anstatt jedes Mal einen neuen Stil zu improvisieren. Wenn es richtig gemacht wird, reduziert Persona-Prompting Halluzinationen, weil die KI Entscheidungen durch eine konsistente „Identität" mit definierten Zielen und Schutzmaßnahmen filtert.',
            '**Zusammengefasst:** Persona-Prompting verwandelt ein universelles Sprachmodell in einen wiederverwendbaren virtuellen Spezialisten, indem es Rolle, Ziele und Grenzen festlegt, bevor Sie Fragen stellen.',
            'Persona-Prompting unterscheidet sich von einfachen „Stil-Prompts" wie „antworte wie ein freundlicher Lehrer". Ein echtes Persona-Prompt definiert nicht nur den Ton, sondern auch den Umfang des Wissens (zum Beispiel Finanzen, Cybersicherheit oder EU-Recht), Entscheidungspriorität (Risikominderung, Kreativität, Geschwindigkeit) und wie man mit Unsicherheit umgeht. Diese Struktur macht Personas besonders wertvoll in Bereichen wie IT-Architektur, Portfolio-Management oder Compliance-Workflows, wo inkonsistente Antworten teuer werden können.',
            'PromptQuorum ist ein Multi-Model-Dispatch-Tool, mit dem Sie denselben Persona-Prompt gleichzeitig mit GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large und lokalen Modellen über Ollama oder LM Studio testen können – um zu sehen, welches Modell die Persona am zuverlässigsten befolgt.',
          ],
        },
        whyItMatters: {
          title: 'Warum Persona-Prompting für professionelle Arbeit entscheidend ist',
          content: [
            '**Persona-Prompting ist wichtig, weil es Ihnen stabiles Verhalten von grundsätzlich stochastischen Modellen gibt, was für Software-Engineering, Finanzanalyse und Governance-Workflows kritisch ist.** Große Sprachmodelle wie GPT-4o und LLaMA 3.1 generieren bei jedem Durchlauf andere Formulierungen, aber ein starkes Persona reduziert ihr Verhalten auf eine konsistente Perspektive und einen konsistenten Entscheidungsstil. Dies macht Ausgaben einfacher zu überprüfen, zu dokumentieren und in Teams zu bewerten.',
            '**Kurz gesagt:** Ohne Persona sprechen Sie mit „dem Modell" und hoffen auf gutes Verhalten; mit Persona sprechen Sie jeden Tag mit „demselben Experten" und wissen ungefähr, wie es reagieren wird.',
            'Für IT- und Softwarearbeit ermöglicht Persona-Prompting die Erstellung unterschiedlicher Agenten wie „Secure Code Reviewer", „DevOps SRE" oder „Architecture Decision Record Assistant", jeweils mit expliziten Regeln über Frameworks, Logging und Dokumentationsstandards. Im deutschen und europäischen Kontext sind Personas für Compliance-Workflows besonders wertvoll, da Auditors die expliziten Regeln sehen möchten, die KI-gestützte Ausgaben gouverniert haben – besonders relevant für DSGVO, BSI-Richtlinien und EU-AI-Act-Konformität.',
            'Aus einer GEO-Perspektive (Generative Engine Optimization) sind Persona-Prompts eigenständige Entitäten von Wert: KI-Suchsysteme können „SEO-Analyst-Persona", „EU-AI-Act-Compliance-Persona" oder „Macro-Trader-Persona" als unterschiedliche Tools erkennen, wenn sie präzise und konsistent über Seiten hinweg beschrieben sind.',
          ],
        },
        buildingBlocks: {
          title: 'Die sieben Bausteine eines starken Persona-Prompts',
          content: [
            '**Ein starker Persona-Prompt umfasst immer mindestens fünf Bausteine: Rolle, Wissensspektrum, Ziele, Constraints und Interaktionsregeln.** Das Hinzufügen expliziter Beispiele und Fehlerbehandlung (was zu tun ist, wenn Sie unsicher sind) verbessert die Zuverlässigkeit weiter. Diese Komponenten machen die Persona sowohl menschenlesbar als auch maschinenextrahierbar für Tools wie PromptQuorum und RAG-Pipelines.',
            'Die sieben Bausteine eines Persona-Prompts sind: Rolle, Domain-Umfang, Ziele, Constraints, Interaktionsstil, Beispiele und Unsicherheitsbehandlung.',
            'Hier ist, was jeder Baustein in der Praxis tut:',
          ],
          items: [
            'Rolle: „Sie sind ein Senior Cloud Architect mit 10+ Jahren Erfahrung in Kubernetes und Zero Trust Networking."',
            'Domain-Umfang: „Konzentrieren Sie sich auf AWS, Azure und Google Cloud; ignorieren Sie On-Prem-Mainframes, es sei denn, sie werden explizit erwähnt."',
            'Ziele: „Optimieren Sie für Sicherheit und Wartbarkeit an erster Stelle, Kosten an zweiter Stelle und Performance an dritter Stelle."',
            'Constraints: „Keine spekulativen Aussagen, keine Rechts- oder Medizinberatung, geben Sie immer Annahmen und Grenzen an."',
            'Interaktionsstil: „Kurze, nummerierte Schritte, keine Marketingsprache, keine Emojis, maximal 3 Sätze pro Absatz."',
            'Beispiele: Ein oder zwei konkrete Beispielantworten, die zeigen, wie die gewünschte Tiefe und Struktur aussieht.',
            'Unsicherheitsbehandlung: „Falls Sie weniger als 80 Prozent sicher sind, stellen Sie Klärungsfragen, bevor Sie antworten."',
          ],
        },
        numericThresholds: {
          content: [
            'Persona-Prompts, die numerische Schwellenwerte kodieren (zum Beispiel „80 Prozent Sicherheit", „niemals mehr als 300 Token in einer Antwort" oder „erklären auf B1-Englischniveau"), sind für Modelle leichter zu befolgen als rein qualitative Anweisungen. Modelle wie GPT-4o und Claude 4.6 Sonnet reagieren besonders gut auf explizite Token-, Temperatur- und Längengrenzen, weil diese direkt auf interne Dekodierungsparameter wie Temperatur, Top-P und Token-Grenzen abbilden.',
            'PromptQuorum unterstützt das Anhängen desselben Persona-Blocks an mehrere Prompts über Provider hinweg, sodass Sie eine einzelne „risikoaverse Finanzanalyst"-Persona bei Abfragen von GPT-4o, Gemini 2.5 Pro und LLaMA 3.1 wiederverwenden können – ohne Copy-Paste.',
          ],
        },
        techExample: {
          title: 'Beispiel: Technical Persona für IT und Finanzen',
          content: [
            '**Eine praktische Persona für IT- und Finanzarbeit definiert ein konservatives Risikoprofil, klare technische Stack-Grenzen und strikte Regeln für die Zitierung von Quellen oder Annahmen.** Diese Art von Persona ist nützlich, wenn Sie Infrastruktur-Investitionen, Krypto-Protokolle oder Makrorisiken analysieren und möchten, dass die KI sachlich und vorsichtig bleibt. Die gleiche Struktur funktioniert für grenzüberschreitende Perspektiven, die EU-, Russland-, China- und US-Märkte abdecken, wo Regulierung und Datenverfügbarkeit unterschiedlich sind.',
            '**[Schlechter Persona-Prompt]**',
            '"Du bist eine hilfreiche KI. Erkläre Tech- und Finanzen-Themen einfach und sei freundlich."',
            '**[Guter Persona-Prompt]**',
            '"Du bist ein Senior IT- und Finanzanalyst mit 15+ Jahren Erfahrung in Softwarearchitektur, Kapitalmärkten und Rohstoffhandel. Konzentriere dich auf faktische Analyse, vermeide Hype und trenne immer Daten von Interpretation. Nutze klares Englisch, maximal 3 Sätze pro Absatz und keine Emojis. Wenn Belege schwach sind oder älter als 12 Monate, markiere sie explizit als „älter" und schlag vor, welche neuen Daten benötigt würden. Priorisiere EU-, russische und deutsche Perspektiven bei der Diskussion von Regulierung; erwähne China und USA wo relevant. Gib niemals personalisierte Anlageratschläge; beschreibe stattdessen Szenarien, Mechanismen und Risikofaktoren."',
          ],
        },
        techExampleBreakdown: {
          content: [
            'Diese Persona kodiert:',
          ],
          items: [
            'Multi-Domain-Expertise (Software, Märkte, Rohstoffe).',
            'Regionaler Fokus (EU, Russland, Deutschland, plus China und USA).',
            'Verhaltensregeln (ältere Daten kennzeichnen, Hype vermeiden, keine Emojis).',
            'Compliance-Grenze (keine personalisierten Anlageratschläge).',
          ],
        },
        techExampleTest: {
          content: [
            'PromptQuorum kann diese Persona plus eine konkrete Aufgabe (zum Beispiel „analysiere die Auswirkungen des EU-AI-Acts auf Cloud-gehostete LLMs") mit einem Klick an GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro und Mistral Large senden und zeigen, welches Modell die Constraints am besten einhält.',
            '**PromptQuorum Multi-Model-Test:** In einem internen PromptQuorum-Experiment mit 40 Finanz- und IT-Persona-Prompts über GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro befolgte GPT-4o Längen- und Regions-Constraints am strengsten in 26 von 40 Aufgaben, Claude 4.6 Sonnet stellte die meisten Klärungsfragen in 21 von 40 Aufgaben und Gemini 2.5 Pro produzierte die dichtesten numerischen Zusammenfassungen in 18 von 40 Aufgaben.',
          ],
        },
        howToBuild: {
          title: 'Wie Sie Ihr eigenes Persona-Prompt Schritt für Schritt aufbauen',
          content: [
            '**Sie können ein robustes Persona in fünf Schritten aufbauen: die Aufgabe definieren, Constraints wählen, Beispiele hinzufügen, über Modelle testen und basierend auf Fehlern verfeinern.** Behandeln Sie Persona-Design als iterativen Prozess: Sie beginnen mit einer einfachen Rollenbeschreibung und stärken sie jedes Mal, wenn die KI sich unerwünscht verhält. Über eine Woche realer Nutzung produziert diese Verfeinerung normalerweise ein kompaktes, wiederverwendbares Persona unter 400–600 Token, das Ihr Team teilen kann.',
            'Persona-Aufbau-Schritte:',
          ],
          numberedItems: [
            'Definieren Sie die Aufgabe: „Diese Persona ist für X Use-Case gedacht: zum Beispiel Cross-Model Code Review, makroökonomische Szenarioplanning oder risikoaware Nachrichtenzusammenfassung."',
            'Wählen Sie Domain-Umfang: „Schließen oder schließen Sie explizit bestimmte Frameworks, Assetklassen oder Jurisdiktionen ein."',
            'Entscheiden Sie sich für Constraints: „Definieren Sie Ton, Absatzlänge, Zitiererwartungen und Sicherheitsschwellen."',
            'Erstellen Sie zwei Beispielinteraktionen: „Zeigen Sie eine ideale Antwort und einen Fehler, den Sie vermeiden möchten."',
            'Testen und verfeinern: „Führen Sie mindestens 10–20 echte Prompts durch und bearbeiten Sie die Persona jedes Mal, wenn das Modell eine Regel bricht."',
          ],
        },
        buildNote: {
          content: [
            'Prompt-Engineering-Praktiken zeigen, dass konkrete Beispiele die Einhaltung komplexer Anweisungen erheblich verbessern, besonders bei Modellen wie GPT-4o, wo In-Context-Learning neuen Verhaltensweisen emulieren kann, ohne Fine-Tuning. In der Praxis reduziert das Hinzufügen nur eines „schlechten vs. guten Antwort"-Kontrast-Blocks Format-Fehler oft um mehr als die Hälfte in alltäglichen Workflows.',
            'PromptQuorums Seite-an-Seite-Ansicht hilft Ihnen, Personas schneller zu verfeinern, da Sie auf einem Bildschirm sehen, wie verschiedene Modelle dieselbe Persona interpretieren. Falls Claude 4.6 Sonnet immer Anschluss-Fragen stellt, während GPT-4o sofort antwortet, bedeutet das, dass Sie möglicherweise die Unsicherheitsbehandlung anpassen oder eine Regel hinzufügen müssen, wann Klärungsfragen gestellt werden sollen.',
          ],
        },
        vsFineTuning: {
          title: 'Persona-Prompting vs Fine-Tuning vs System-Prompts',
          content: [
            '**Persona-Prompting ist eine leichte Alternative zu Fine-Tuning und Systemkonfiguration, wenn Sie Verhaltensänderungen ohne Training eines eigenen Modells möchten.** Anstatt Gewichte zu ändern oder einen benutzerdefinierten API-Wrapper zu bauen, kodieren Sie Verhalten in Text, das auf jedem Provider läuft: OpenAI, Anthropic, Google DeepMind, Mistral AI oder lokale Deployments über Ollama und LM Studio. Dies macht Personas portabel über Anbieter hinweg und zukunftssicher, während Modelle wie LLaMA 3.1 oder Qwen 2.5 sich entwickeln.',
            'Persona-Prompting im Vergleich zu anderen Ansätzen:',
          ],
          items: [
            'Persona-Prompting ändert den Input-Text; Fine-Tuning ändert Modellparameter.',
            'Persona-Prompting funktioniert über GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro und Mistral Large ohne Umschulung; Fine-Tuning ist normalerweise anbieterspezifisch.',
            'Persona-Prompting ist in Sekunden umkehrbar; Sie können Personas pro Aufgabe oder pro Region (EU vs. China vs. USA) wechseln, ohne Infrastruktur-Änderungen.',
          ],
        },
        regionalApproaches: {
          content: [
            'EU-Unternehmen bevorzugen Persona-Prompting kombiniert mit lokalen Modellen wie Mistral Large oder LLaMA 3.1, die On-Premise gehostet sind, um EU-AI-Act- und Datenspeicherungsanforderungen zu erfüllen, ohne Prompts mit externen APIs zu teilen. Im Kontext der DSGVO und BSI-Richtlinien ist dies besonders wertvoll. In Deutschland und der ganzen DACH-Region wollen Organisationen Personas mit klarer Dokumentation verwenden, um die technische Governance und Compliance-Anforderungen zu erfüllen.',
          ],
        },
        pqBridges: {
          content: [
            'PromptQuorum überbrückt alle drei Strategien, indem Sie:',
          ],
          items: [
            'Persona-Prompting in der System- oder Assistant-Nachricht für jeden Provider nutzen.',
            'Personas gegen Fine-tuned-Modelle vergleichen, wo verfügbar.',
            'Sensible Prompts zu lokalen Modellen über Ollama oder LM Studio routen, während Sie denselben Persona-Text behalten.',
          ],
        },
        keySnippets: {
          title: 'Wichtige Snippet-Blöcke zur Wiederverwendung',
          content: [
            '**In einem Satz:** Ein Persona-Prompt ist eine wiederverwendbare Spezifikation von Rolle, Werten, Constraints und Stil, die große Sprachmodelle wie konsistente virtuelle Experten verhalten lässt, anstatt wie generische Chatbots.',
            'Persona-Prompting im Vergleich zu Fine-Tuning:',
          ],
          items: [
            'Persona-Prompting ändert nur die Anweisungen, daher ist es billig und reversibel.',
            'Fine-Tuning ändert das Modell selbst und erfordert Datensätze, Trainingsläufe und Bewertung.',
            'Systemebenen-Konfiguration in APIs sitzt zwischen ihnen, profitiert aber immer noch von einer klaren Persona-Spezifikation.',
          ],
        },
        sevenBlocks: {
          content: [
            'Die sieben Bausteine eines Prompt-Persona sind: Rolle, Domain-Umfang, Ziele, Constraints, Interaktionsstil, Beispiele und Unsicherheitsbehandlung.',
          ],
        },
        howToStart: {
          title: 'Wie Sie mit Persona-basiertem Prompting beginnen',
          numberedItems: [
            '**Wählen Sie eine Persona, die zu Ihrem gewünschten Ausgabenstil passt.** Für Marketing-Copy: „Sie sind ein kreativer Copywriter." Für technische Dokumentation: „Sie sind ein Principal Engineer." Für Barrierefreiheit: „Sie schreiben für nicht-technische Nutzer."',
            '**Beschreiben Sie die Persona mit spezifischen Eigenschaften, die für Ihre Aufgabe relevant sind.** Anstatt „freundlich", sagen Sie: „Sie erklären technische Konzepte mit Analogien, verwenden kurze Sätze, vermeiden Jargon und priorisieren Klarheit über Vollständigkeit."',
            '**Kombinieren Sie Persona mit Aufgabenklarheit.** Beispiel: „Sie sind ein technischer Schriftsteller mit Erfahrung darin, komplexe Systeme für Nicht-Experten zugänglich zu machen. Schreiben Sie eine 500-Wort-Erklärung, wie API-Rate-Limiting funktioniert."',
            '**Nutzen Sie Personas, um Ton und Stil zu steuern, ohne jedes Detail zu kontrollieren.** Eine Persona bringt implizite Konventionen und Prioritäten mit sich. „Software-Architekt" deutet auf strukturiertes Denken hin; „Journalist" deutet auf faktengestützte Erzählung hin.',
            '**Testen Sie Persona-Entscheidungen, indem Sie denselben Prompt mit verschiedenen Personas ausführen und Ausgaben vergleichen.** Erstellen Sie denselben Content als „zufälliger Marketer" vs. „professioneller Berater." Sehen Sie, welcher Ton besser zu Ihrer Marke oder Ihrem Use-Case passt.',
          ],
        },
        deutscheEnterpriseHinweise: {
          title: 'DACH-spezifische Enterprise-Nutzung: Personas für Compliance und Governance',
          content: [
            'In German- und deutschsprachigen Unternehmensumgebungen ist Persona-Prompting ein leistungsstarkes Werkzeug zur Dokumentation von KI-Entscheidungen und zum Nachweis von Compliance. Personas können explizite Regeln zur Einhaltung von DSGVO, BSI C5, oder EU-AI-Act-Anforderungen enthalten, was es Auditors leicht macht, die Governance zu überprüfen. Ein Persona-Prompt kann zum Beispiel „Sie beachten strengstens DSGVO-Anforderungen, anonymisieren personenbezogene Daten, und lehnen Anfragen zur Profilierung ab" enthalten.',
            'Enterprise-Teams in Banken, Versicherungen, Behörden und großen Industrieunternehmen verwenden zunehmend Personas als Standard, weil sie es erlauben, KI-Verhalten vorab zu definieren und zu dokumentieren – ein wesentlicher Bestandteil von MITI-Ready und BSI-C5-zertifizierten Deployments.',
          ],
        },
        zusatzFaqs: {
          title: 'Häufig gestellte Fragen zu Personas in der DACH-Enterprise-Umgebung',
          faqs: [
            {
              q: 'Ist Persona-Prompting ein Ersatz für Data Governance und DSGVO-Compliance?',
              a: 'Nein. Ein Persona-Prompt ist eine Schicht zur Verhaltenskontrolle, aber Sie benötigen nach wie vor eine vollständige Datenschutz-Architektur: Data Governance-Richtlinien, Datenschutz-Folgenabschätzung (DSFA), Auftragsverarbeitungsverträge (AV) und Audit-Logs. Personas dokumentieren jedoch die KI-Entscheidungsregeln und machen Compliance einfacher nachzuweisen.',
            },
            {
              q: 'Kann ich eine Persona mit auf-Premise-Modellen wie Mistral Large lokal hosten und EU-Data-Residency-Anforderungen erfüllen?',
              a: 'Ja. Mit PromptQuorum können Sie eine Persona gegen lokale Ollama- oder LM-Studio-Deployments testen. Die Persona-Text bleibt in Ihrem System; Daten verlassen nie Ihre Infrastruktur. Dies ist besonders wertvoll für Banken und Organisationen mit strengen Datenspeicherungsanforderungen (z. B. Deutsche Telekom, Bundesverwaltung).',
            },
          ],
        },
      },
    },

    fr: {
      theme: 'Techniques',
      title: 'Persona Prompting : Donnez un Rôle Cohérent à Votre IA',
      intro: 'Le persona prompting est la pratique structurée d\'attribuer une IA à un rôle clair, une vision du monde et des comportements prédéfinis pour qu\'elle réponde de manière fiable et cohérente comme un expert spécifique ou un professionnel.',
      publishDate: '2026-03-26',
      readTime: '9 min de lecture',
      educationalLevel: 'Intermediate',
      metaDescription: 'Persona Prompting : Créez des rôles stables pour GPT-4o, Claude, Gemini et renforcez la cohérence des réponses IA sans entraînement.',
      primaryTerm: 'Persona Prompting',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Persona Prompting : Donnez un Rôle Cohérent à Votre IA',
        description: 'Créer des personas stables pour contrôler le comportement de l\'IA, les sept éléments clés, des exemples pratiques et comment tester les personas sur plusieurs modèles.',
        datePublished: '2026-03-26',
        dateModified: '2026-03-26',
        keywords: ['persona prompting', 'prompt engineering', 'comportement IA', 'prompting basé sur rôles', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Large Language Models' },
          { '@type': 'Thing', name: 'Persona Design' },
        ],
      },
      sections: {
        whatIsPersonaPrompting: {
          title: 'Qu\'est-ce que le Persona Prompting',
          content: [
            '**Le persona prompting est une méthode structurée pour spécifier qui une IA doit incarner, comment penser et quelles limites respecter.** Un prompt persona inclut une description de rôle, une expertise métier, un ton et des règles explicites. Cela rend le modèle prévisible au lieu d\'improviser, et réduit les hallucinations en filtrant les décisions à travers une « identité » cohérente.',
            '**En une phrase :** Le persona prompting transforme un modèle généraliste en expert virtuel réutilisable en fixant rôle, objectifs et limites.',
            'Le persona prompting diffère des simples prompts de style. Un vrai persona prompt définit le périmètre des connaissances, les priorités décisionnelles et la gestion de l\'incertitude. Cela le rend particulièrement utile pour l\'architecture IT, la gestion de portefeuille ou les workflows de conformité où les réponses incohérentes coûtent cher.',
            'PromptQuorum vous permet de tester le même prompt persona simultanément avec GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large et des modèles locaux pour découvrir quel modèle suit le persona le plus fidèlement.',
          ],
        },
        whyItMatters: {
          title: 'Pourquoi le Persona Prompting est Essentiel',
          content: [
            '**Le persona prompting stabilise des modèles intrinsèquement probabilistes, ce qui est crucial pour l\'ingénierie logicielle, la finance et la conformité.** Un persona robuste restreint le comportement à un point de vue et un style décisionnel cohérents, rendant les résultats plus faciles à valider et à examiner en équipe.',
            '**Autrement dit :** Sans persona, vous espérez un bon résultat ; avec un persona, vous parlez chaque jour au même expert qui répond de manière prévisible.',
            'Pour IT et développement, créez des agents distincts comme « Code reviewer sécurisé » ou « SRE DevOps » avec des règles explicites. En finance, imposez des hypothèses conservatrices et des risques clairs adaptés aux marchés EU, USA ou Chine. Les environnements réglementés apprécient que les règles gouvernant les résultats IA soient documentées de manière explicite.',
          ],
        },
        buildingBlocks: {
          title: 'Les Sept Éléments Fondamentaux d\'un Persona Solide',
          content: [
            '**Un persona prompt solide inclut sept éléments : rôle, champ de connaissances, objectifs, contraintes, style d\'interaction, exemples et gestion de l\'incertitude.** Ces composants rendent le persona lisible par les humains et extractible par les machines pour des outils comme PromptQuorum et les pipelines RAG.',
          ],
          items: [
            'Rôle : « Vous êtes un architecte cloud senior avec 10+ ans d\'expérience en Kubernetes et en zéro confiance réseau. »',
            'Champ de connaissances : « Concentrez-vous sur AWS, Azure et Google Cloud ; ignorez l\'infrastructure on-prem sauf si elle est explicitement mentionnée. »',
            'Objectifs : « Optimisez d\'abord la sécurité et la maintenabilité, puis les coûts, puis la performance. »',
            'Contraintes : « Pas d\'affirmations spéculatives, pas de conseils juridiques ou médicaux, énoncez toujours vos hypothèses et limitations. »',
            'Style d\'interaction : « Étapes courtes et numérotées, pas de langage marketing, pas d\'emojis, maximum 3 phrases par paragraphe. »',
            'Exemples : Une ou deux réponses d\'exemple concrètes qui montrent la profondeur et la structure souhaitées.',
            'Gestion de l\'incertitude : « Si vous êtes moins de 80% confiant, posez des questions de clarification avant de répondre. »',
          ],
        },
        numericThresholds: {
          content: [
            'Les seuils numériques (« 80% de confiance », « max 300 tokens », « niveau anglais B1 ») sont plus faciles à suivre pour les modèles. GPT-4o et Claude réagissent bien aux limites explicites de tokens, température et longueur car elles correspondent aux paramètres de décodage internes.',
          ],
        },
        techExample: {
          title: 'Exemple : Un Persona Technique pour l\'IT et la Finance',
          content: [
            '**Un persona IT-finance définit un profil de risque conservateur, des frontières techniques claires et des règles strictes pour citer les sources.** Cette approche est utile pour analyser les investissements infrastructure ou les risques macro en restant factuel.',
            '**[Mauvais Persona]** « Vous êtes une IA utile. Expliquez les sujets tech et finance simplement et soyez sympathique. »',
            '**[Bon Persona]** « Vous êtes un analyste IT-finance avec 15+ ans d\'expérience en architecture logicielle et marchés financiers. Concentrez-vous sur l\'analyse factuelle, séparez données et interprétation. Max 3 phrases par paragraphe, pas d\'emojis. Étiquetez explicitement les données anciennes (>12 mois). Priorisez les perspectives EU-allemandes pour la régulation. Ne donnez jamais de conseils d\'investissement personnalisés ; décrivez les scénarios et facteurs de risque. »',
          ],
        },
        techExampleBreakdown: {
          content: [
            'Ce persona encode :',
          ],
          items: [
            'Expertise multi-domaines (logiciel, marchés, matières premières).',
            'Focus régional (EU, Russie, Allemagne, plus Chine et États-Unis).',
            'Règles de comportement (étiquetez les données anciennes, évitez le battage, pas d\'emojis).',
            'Frontière de conformité (pas de conseils d\'investissement personnalisés).',
          ],
        },
        techExampleTest: {
          content: [
            'PromptQuorum peut envoyer ce persona plus une tâche concrète (par exemple « analysez l\'impact de la loi EU AI Act sur les LLMs hébergés en cloud ») à GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro et Mistral Large en un seul clic et vous montrer quel modèle respecte le mieux les contraintes.',
            '**Test multi-modèle PromptQuorum :** Dans une expérience interne PromptQuorum avec 40 prompts persona finance-et-IT sur GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro, GPT-4o a suivi les contraintes de longueur et région le plus strictement dans 26 sur 40 tâches, Claude 4.6 Sonnet a posé le plus de questions de clarification dans 21 sur 40 tâches et Gemini 2.5 Pro a produit les résumés numériques les plus denses dans 18 sur 40 tâches.',
          ],
        },
        howToBuild: {
          title: 'Comment Construire Votre Propre Persona',
          content: [
            '**Construisez un persona robuste en cinq étapes : définir le métier, choisir les contraintes, ajouter les exemples, tester et affiner.** Traitez-le comme un processus itératif. Après une semaine d\'utilisation réelle, vous obtenez généralement un persona compact et réutilisable de 400–600 tokens.',
          ],
          numberedItems: [
            'Définissez le métier : « Ce persona est pour le cas d\'usage X : par exemple, revue de code multi-modèles, planification de scénarios macroéconomiques ou résumé de nouvelles conscient du risque. »',
            'Sélectionnez le champ : « Incluez ou excluez explicitement certains frameworks, classes d\'actifs ou juridictions. »',
            'Choisissez les contraintes : « Décidez du ton, longueur de paragraphe, attentes de citation et seuils de confiance. »',
            'Créez deux interactions d\'exemple : « Montrez une réponse idéale et une erreur à éviter. »',
            'Testez et affinez : « Exécutez au moins 10–20 vrais prompts et modifiez le persona chaque fois que le modèle enfreint une règle. »',
          ],
        },
        buildNote: {
          content: [
            'Les exemples concrets améliorent l\'adhérence aux instructions complexes. Ajouter un seul bloc de contraste « mauvaise vs bonne réponse » réduit souvent les erreurs de format de plus de moitié.',
            'La vue côte à côte de PromptQuorum vous aide à affiner les personas car vous voyez comment différents modèles les interprètent. Si Claude pose des questions tandis que GPT-4o répond immédiatement, ajustez la gestion de l\'incertitude.',
          ],
        },
        vsFineTuning: {
          title: 'Persona Prompting vs Fine-Tuning vs Prompts Système',
          content: [
            '**Le persona prompting est une alternative légère au fine-tuning quand vous voulez des changements de comportement sans entraîner un modèle.** Vous encodez le comportement en texte qui fonctionne chez tous les fournisseurs, ce qui rend les personas portables et durables.',
            'Comparaisons clés :',
          ],
          items: [
            'Le persona prompting change le texte d\'entrée ; le fine-tuning change les paramètres du modèle.',
            'Le persona prompting fonctionne sur GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro et Mistral Large sans recyclage ; le fine-tuning est généralement spécifique au fournisseur.',
            'Le persona prompting est réversible en secondes ; vous pouvez changer de persona par tâche ou par région (EU vs Chine vs États-Unis) sans modification d\'infrastructure.',
          ],
        },
        regionalApproaches: {
          content: [
            'Les entreprises francophones combinant le persona prompting avec des modèles locaux (Mistral Large, LLaMA 3.1) hébergés sur site respectent les exigences EU AI Act et de résidence des données. En France, Belgique et Canada, les organisations utilisent de plus en plus le persona prompting pour la conformité et les normes linguistiques locales.',
          ],
        },
        pqBridges: {
          content: [
            'PromptQuorum comble les lacunes en vous permettant de :',
          ],
          items: [
            'Utiliser le persona prompting dans le message système ou assistant pour chaque fournisseur.',
            'Comparer les personas aux modèles fine-tunés quand disponibles.',
            'Diriger les prompts sensibles vers les modèles locaux via Ollama ou LM Studio tout en gardant le même texte persona.',
          ],
        },
        keySnippets: {
          title: 'Blocs Clés à Réutiliser',
          content: [
            '**Un persona prompt est une spécification réutilisable qui rend les LLMs des experts virtuels cohérents au lieu de chatbots génériques.**',
          ],
          items: [
            'Le persona prompting change seulement les instructions, donc c\'est bon marché et réversible.',
            'Le fine-tuning change le modèle lui-même et nécessite des données, des exécutions d\'entraînement et une évaluation.',
            'La configuration au niveau du système dans les APIs se situe entre les deux, mais bénéficie toujours d\'une spécification clara de persona.',
          ],
        },
        sevenBlocks: {
          content: [
            'Les sept éléments d\'un persona prompt sont : rôle, champ d\'expertise, objectifs, contraintes, style d\'interaction, exemples et gestion de l\'incertitude.',
          ],
        },
        howToStart: {
          title: 'Comment Commencer avec le Persona Prompting',
          numberedItems: [
            '**Choisissez un persona aligné à votre objectif.** Copywriter créatif pour le marketing, ingénieur principal pour la documentation technique.',
            '**Décrivez le persona avec des traits spécifiques.** Plutôt que « sympathique », dites : « Expliquez avec des analogies, phrases courtes, évitez le jargon. »',
            '**Combinez persona et clarté de tâche.** Exemple : « Rédacteur technique. Écrivez une explication de 500 mots sur la limitation de débit API. »',
            '**Utilisez les personas pour le ton et le style.** Un persona apporte des conventions implicites : « Architecte » suggère la structure, « journaliste » suggère la factualité.',
            '**Testez les choix de persona.** Exécutez le même prompt avec différents personas et comparez les résultats pour voir ce qui correspond à votre marque.',
          ],
        },
      },
    },
    ja: {
      theme: 'Techniques',
      title: 'ペルソナプロンプティング：AIに役割を与えて性能を飛躍させる',
      intro: 'ペルソナプロンプティングとは、AIモデルに対して明確な役割、世界観、行動パターンを定義する手法です。これにより、複数のプロンプトやセッションにわたって、特定の専門家やキャラクターのように一貫した回答を得られます。',
      publishDate: '2026-03-26',
      readTime: '10分で読める',
      educationalLevel: 'Intermediate',
      metaDescription: 'ペルソナプロンプティングの実践ガイド。役割定義、建築ブロック、実例を通じて、AIモデルの動作を安定させ、正確な回答を引き出す方法を解説します。',
      primaryTerm: 'ペルソナプロンプティング',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'ペルソナプロンプティング：AIに役割を与えて性能を飛躍させる',
        description: 'ペルソナプロンプティングとは何か、なぜ重要か、中核となる構築要素、実践的な例、複数のAIモデルでのテスト方法を解説します。',
        datePublished: '2026-03-26',
        dateModified: '2026-03-26',
        keywords: ['ペルソナプロンプティング', 'プロンプトエンジニアリング', 'AI動作制御', '役割ベースプロンプティング', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'プロンプトエンジニアリング' },
          { '@type': 'Thing', name: '大規模言語モデル' },
          { '@type': 'Thing', name: 'ペルソナデザイン' },
        ],
      },
      sections: {
        whatIsPersonaPrompting: {
          title: 'ペルソナプロンプティングとは何か',
          content: [
            '**ペルソナプロンプティングとは、GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、その他のモデルに対して、実際のタスクを与える前に、誰になるべきか、どのように考えるべきか、どの制約に従うべきかを構造化して伝える手法です。** ペルソナプロンプトは通常、役割説明、専門知識、トーン、判断ルール、明確な制限を含み、AIが毎回新しいスタイルを創作するのではなく、予測可能な方法で動作するようにします。正しく実装すれば、ペルソナプロンプティングは幻覚を削減します。なぜなら、AIは定義された目標と保護措置を備えた一貫した「アイデンティティ」を通じて判断をフィルタリングするからです。',
            '**一文で言えば：** ペルソナプロンプティングは、汎用の大規模言語モデルを、役割、目的、境界を固定することで、繰り返し使用できる仮想専門家に変えます。',
            'ペルソナプロンプティングは、「親切な教師のように答える」といった単純な「スタイルプロンプト」とは異なります。適切なペルソナプロンプトは、トーンだけでなく、知識範囲（たとえば金融、サイバーセキュリティ、EU法など）、判断優先度（リスク最小化、創造性、速度）、不確実性への対処方法も定義します。この構造により、ペルソナプロンプティングはIT建築、ポートフォリオ管理、コンプライアンスワークフローなど、一貫性のない回答が高コストとなる領域で特に有用です。',
            'PromptQuorumはマルチモデルAIディスパッチツールで、GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Mistral Large、OllamaまたはLM Studioを通じたローカルモデルと同時に同じペルソナプロンプトをテストして、どのモデルがペルソナに最も確実に従うかを確認できます。',
          ],
        },
        whatIsPersonaPromptingExpandedNote: {
          title: '注意点：ペルソナプロンプティングの設計原則',
          content: [
            'ペルソナプロンプティングを成功させるには、役割説明の具体性が重要です。「親切なAI」では不十分で、「10年以上のクラウドアーキテクチャ経験を持つシニアクラウドアーキテクト」など、具体的な背景と専門知識を記述する必要があります。',
            'また、モデルごとにペルソナの解釈が異なる場合があることに注意してください。GPT-4oは詳細で構造化された回答を好む傾向がありますが、Claude 4.6 Sonnetはより慎重で質問を重視する傾向があります。これを理解することで、複数のモデル間での一貫性を高めるためにペルソナを調整できます。',
          ],
        },
        whyItMatters: {
          title: 'ペルソナプロンプティングが実務で重要である理由',
          content: [
            '**ペルソナプロンプティングが重要な理由は、本質的に確率的なモデルから安定した動作を得られるからです。これはソフトウェアエンジニアリング、金融分析、ガバナンスワークフローにおいて非常に重要です。** GPT-4oやLLaMA 3.1などの大規模言語モデルは実行するたびに異なる表現を生成しますが、強力なペルソナはそれらの動作を一貫した視点と判断スタイルに縮小します。これにより、出力がより信頼しやすく、チーム内で文書化・レビューしやすくなります。',
            '**平易に言えば：** ペルソナなしでは「モデルに話しかけて、うまく動作することを祈る」という状況になります。ペルソナがあれば、「毎日同じ専門家に話しかけて、大体どう応答するか知っている」という状況になります。',
            'IT・ソフトウェア業務では、ペルソナプロンプティングにより、「セキュアコードレビュアー」「DevOps SRE」「アーキテクチャ決定記録アシスタント」など、フレームワーク、ログ、ドキュメント標準に関する明確なルールを持つ異なるエージェントを作成できます。金融では、ペルソナにより保守的な前提、明確なリスク開示、EU・US・中国市場の地域別制約を実施できます。この分離は、監査人がAIアシスト出力を管理した明確なルールを見たい規制環境でも役立ちます。',
            'GEO（生成エンジン最適化）の観点からは、ペルソナプロンプトはそれ自体が価値のあるエンティティです。AIサーチシステムは、「SEOアナリストペルソナ」「EU AI法コンプライアンスペルソナ」「マクロトレーダーペルソナ」をページ全体で正確かつ一貫性を持って説明されていれば、異なるツールとして認識できます。',
          ],
        },
        buildingBlocks: {
          title: '強力なペルソナプロンプトの中核となる構築要素',
          content: [
            '**強力なペルソナプロンプトは常に少なくとも5つの構築要素を含みます：役割、知識範囲、目的、制約、相互作用ルール。** 明確な例と失敗動作（不確かな場合の対応）を追加することで、信頼性がさらに向上します。これらのコンポーネントは、ペルソナを人間が読める形と機械が抽出できる形の両方にします。PromptQuorumやRAGパイプラインなどのツールでも役立ちます。',
            'ペルソナプロンプトの7つの構築要素は：役割、領域範囲、目的、制約、相互作用スタイル、例、不確実性への対応です。',
            '実践で各ブロックが何をするかを以下に示します：',
          ],
          items: [
            '役割：「Kubernetes とゼロトラストネットワークで10年以上の経験を持つシニアクラウドアーキテクト。」',
            '領域範囲：「AWS、Azure、Google Cloud に注力；オンプレミスのメインフレームは明示されない限り無視。」',
            '目的：「セキュリティと保守性を最優先、次にコスト、最後にパフォーマンスを最適化。」',
            '制約：「推測はしない、法律・医療のアドバイスは与えない、常に前提と制限を述べる。」',
            '相互作用スタイル：「短い、番号付きのステップ、マーケティング言語なし、絵文字なし、段落ごと最大3文。」',
            '例：望ましい深さと構造を示す具体的な例1～2つ。',
            '不確実性への対応：「80%以上確信が持てない場合は、回答する前に明確な質問をする。」',
          ],
        },
        numericThresholds: {
          title: '数値閾値の重要性と活用',
          content: [
            'ペルソナプロンプトに数値閾値をエンコードする（たとえば「80%の確信度」「1つの回答で300トークンを超えない」「B1英語レベルで説明」など）ことで、純粋に定性的な指示よりもモデルが従いやすくなります。GPT-4oやClaude 4.6 Sonnetなどのモデルは、明確なトークン数、温度、長さ制限に特に反応しやすいため、温度、Top-P、トークン制限などの内部デコーディングパラメータに直接マップされます。',
            'PromptQuorumは同じペルソナブロックを複数のプロンプトおよびプロバイダーにわたって取り付けることをサポートしているため、単一の「リスク回避的な金融アナリスト」ペルソナをGPT-4o、Gemini 2.5 Pro、LLaMA 3.1に問い合わせるときにコピー貼り付けなしで再利用できます。',
          ],
        },
        techExample: {
          title: 'IT・金融向けテクニカルペルソナの例',
          content: [
            '**IT・金融業務のための実用的なペルソナは、保守的なリスク・プロファイル、明確なテクニカルスタック境界、ソース引用または前提条件引用の厳格なルールを定義します。** このタイプのペルソナは、インフラストラクチャ投資、暗号プロトコル、またはマクロリスクを分析し、AIが事実的で慎重な状態を保つ場合に有用です。同じ構造は、EU・ロシア・中国・米国の市場にまたがるクロスボーダー視点でも機能します。規制とデータ可用性が異なります。',
            '**[悪いペルソナプロンプト]**',
            '「AIで、テクノロジーと金融のトピックをシンプルに説明し、友好的になってください。」',
            '**[良いペルソナプロンプト]**',
            '「ソフトウェアアーキテクチャ、資本市場、コモディティ取引で15年以上の経験を持つシニアIT・金融アナリスト。事実的な分析に焦点を当て、誇大広告を避け、常にデータと解釈を分離します。明確な英語を使用し、段落ごと最大3文、絵文字なし。証拠が弱いか12ヶ月以上前の場合は、明示的に「古い」とラベル付けし、どのような新しいデータが必要かを提案します。規制について議論する際はEU・ロシア・ドイツの視点を優先；中国と米国も関連する場合は言及します。個人的な投資アドバイスは提供しないでください；代わりに、シナリオ、メカニズム、リスク要因を説明してください。」',
          ],
        },
        techExampleBreakdown: {
          content: [
            'このペルソナは以下をエンコードします：',
          ],
          items: [
            '複数領域の専門知識（ソフトウェア、市場、コモディティ）。',
            '地域フォーカス（EU、ロシア、ドイツ、および中国と米国）。',
            '動作ルール（古いデータをラベル付け、誇大広告を避ける、絵文字なし）。',
            'コンプライアンス境界（個人的な投資アドバイスなし）。',
          ],
        },
        techExampleTest: {
          content: [
            'PromptQuorumはこのペルソナに具体的なタスク（たとえば「EU AI法がクラウド・ホスト型LLMに与える影響を分析する」）を追加して、GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Mistral Largeに1クリックで送信し、どのモデルが制約を最もよく尊重するかを表示できます。',
            '**PromptQuorum マルチモデルテスト：** 内部PromptQuorum実験では、GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro全体で40のファイナンス・ITペルソナプロンプトを使用し、GPT-4oは40個中26のタスクで長さと地域の制約を最も厳密に遵守し、Claude 4.6 Sonnetは40個中21のタスクで最も明確な質問をしました。Gemini 2.5 Proは40個中18のタスクで最も密度の高い数値サマリーを生成しました。',
          ],
        },
        howToBuild: {
          title: 'ペルソナを段階的に構築する方法',
          content: [
            '**5つのステップで堅牢なペルソナを構築できます：仕事を定義する、制約を選ぶ、例を追加する、複数のモデルでテストする、失敗に基づいて調整する。** ペルソナ設計を反復的なプロセスとして扱ってください。シンプルな役割説明から開始し、AIが望ましくない動作をするたびにそれを強化します。1週間の実際の使用では、このリファイニングは通常、チームが共有できる400～600トークン以下のコンパクト再利用可能なペルソナを生成します。',
            'ペルソナ構築の段階：',
          ],
          numberedItems: [
            '仕事を定義する：「このペルソナは X 用途です。たとえば、クロスモデルコードレビュー、マクロ経済シナリオプランニング、またはリスク認識ニュース要約。」',
            '領域範囲を選択する：「特定のフレームワーク、資産クラス、または管轄区域を明確に含めるか除外するか。」',
            '制約を選択する：「トーン、段落の長さ、引用期待、確信閾値を決定する。」',
            '2つのサンプル相互作用を作成する：「1つの理想的な回答と1つの失敗回答を避けるように示す。」',
            'テストと調整：「少なくとも10～20の実際のプロンプトを実行し、モデルがルールを破るたびにペルソナを編集する。」',
          ],
        },
        buildNote: {
          content: [
            'プロンプトエンジニアリングの実践によれば、具体的な例は複雑な指示への適応性を大幅に向上させます。特に、インコンテキスト学習が微調整なしに新しい動作をエミュレートできるGPT-4oの場合に効果的です。実際には、単一の「悪い回答 vs 良い回答」コントラストブロックを追加するだけでも、日常的なワークフローにおいてフォーマットミスを50%以上削減することができます。',
            'PromptQuorumのサイド・バイ・サイドビューは、異なるモデルが同じペルソナをどのように解釈するかが1つの画面に表示されるため、ペルソナの調整を高速化するのに役立ちます。Claude 4.6 Sonnetがフォローアップ質問をし続ける一方、GPT-4oが直ちに回答する場合、これは不確実性の処理を調整する必要があるか、質問する時機に関するルールを追加する必要があることを示唆しています。',
          ],
        },
        vsFineTuning: {
          title: 'ペルソナプロンプティング、ファインチューニング、システムプロンプトの比較',
          content: [
            '**ペルソナプロンプティングは、自分のモデルを訓練することなく動作変更を望む場合、ファインチューニングとシステムレベル構成に対する軽量な代替案です。** 重みを変更したり、カスタムAPIラッパーを構築する代わりに、任意のプロバイダーで実行できるテキストで動作をエンコードします。OpenAI、Anthropic、Google DeepMind、Mistral AI、またはOllamaおよびLM Studioを通じたローカル展開。これにより、ペルソナはベンダー間でポータブルになり、LLaMA 3.1やQwen 2.5などのモデルが進化するにつれて将来耐性があります。',
            'ペルソナプロンプティング対他のアプローチ：',
          ],
          items: [
            'ペルソナプロンプティングは入力テキストを変更します；ファインチューニングはモデルパラメータを変更します。',
            'ペルソナプロンプティングはGPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Mistral Largeで再訓練なしで機能します；ファインチューニングは通常ベンダー固有です。',
            'ペルソナプロンプティングは秒単位で可逆的です；インフラストラクチャ変更なしにタスクごとまたは地域ごと（EU vs 中国 vs 米国）ペルソナをスワップできます。',
          ],
        },
        regionalApproaches: {
          title: '地域別のペルソナアプローチ',
          content: [
            'EU企業は、多くの場合、EU AI法とデータレジデンシー要件を満たし、外部APIとプロンプトを共有せずに、オンプレミスでホストされているMistral LargeまたはLLaMA 3.1などのローカルモデルと組み合わせてペルソナプロンプティングを好みます。中国では、企業はQwen 2.5やDeepSeek V3などのモデルにペルソナプロンプティングを適用して、トークン化とコンテキストウィンドウ効率がEnglish中心モデルと異なるローカル規制ガイダンスと言語規範に一致させます。日本の組織は、METI データガバナンス規則を遵守しながら、AIアシスト・ワークフローを有効化する厳密な文書化されたペルソナとオンプレミス・モデルを組み合わせることが多いです。',
          ],
        },
        pqBridges: {
          content: [
            'PromptQuorumは、以下のことを可能にして、3つのすべてのストラテジーをブリッジします：',
          ],
          items: [
            '各プロバイダーのシステムまたはアシスタント・メッセージでペルソナプロンプティングを使用する。',
            '利用可能な場合、ペルソナをファインチューニング・モデルと比較する。',
            'OllamaまたはLM Studioを通じた機密プロンプトをローカル・モデルにルーティングしながら、同じペルソナテキストを保持する。',
          ],
        },
        keySnippets: {
          title: '再利用可能なキースニペットブロック',
          content: [
            '**一文で言えば：** ペルソナプロンプトは、役割、価値観、制約、スタイルの再利用可能な仕様で、大規模言語モデルを汎用チャットボットではなく一貫した仮想専門家のように動作させます。',
            'ペルソナプロンプティング対ファインチューニング：',
          ],
          items: [
            'ペルソナプロンプティングは命令のみを変更するため、低コストで可逆的です。',
            'ファインチューニングはモデル自体を変更し、データセット、訓練実行、評価が必要です。',
            'API内のシステムレベル構成はこの2つの中間にありますが、それでも明確なペルソナ仕様から利益を受けます。',
          ],
        },
        sevenBlocks: {
          content: [
            'プロンプト・ペルソナの7つの構築要素は、役割、領域範囲、目的、制約、相互作用スタイル、例、不確実性への対応です。',
          ],
        },
        howToStart: {
          title: 'ペルソナベースのプロンプティングの使い方',
          numberedItems: [
            '**望ましい出力スタイルに合わせたペルソナを選択する。** マーケティングコピーの場合：「創造的なコピーライター。」技術ドキュメントの場合：「プリンシパルエンジニア。」アクセシビリティの場合：「非技術ユーザー向けに執筆中。」',
            '**タスクに関連する具体的な特性でペルソナを説明する。** 「親切」の代わりに、以下のように述べてください：「技術概念をアナロジーで説明し、短い文を使い、専門用語を避け、完全性よりも明確さを優先します。」',
            '**ペルソナをタスク明確さと組み合わせる。** 例：「複雑なシステムを非専門家にアクセス可能にするのに経験豊富な技術ライター。APIレート制限の仕組みについて500語の説明を書く。」',
            '**ペルソナを使用して、細部をマイクロマネージせずにトーンとスタイルをコントロールする。** ペルソナは暗黙の慣例と優先事項をもたらします。「ソフトウェアアーキテクト」は構造化された思考を示唆；「ジャーナリスト」は事実ベースのナラティブを示唆します。',
            '**異なるペルソナで同じプロンプトを実行して、異なるペルソナの選択をテストし、出力を比較します。** 「カジュアル・マーケター」対「プロフェッショナル・コンサルタント」として同じコンテンツを生成。どのトーンがブランドまたはユースケースに最も適切かを確認。',
          ],
        },
        practiceTips: {
          title: '実践的なヒントと推奨される活用方法',
          content: [
            'ペルソナの効果を最大化するには、フィードバックループが重要です。定期的にペルソナの出力をテストし、実際の使用ケースに基づいて改善します。',
            'また、複数のモデルでペルソナをテストすることで、どのモデルが最もペルソナに適切に従うかを理解できます。このプロセスを通じて、ペルソナを継続的に精緻化し、組織の要件に最適化できます。',
          ],
        },
      },
    },

    zh: {
      theme: 'Techniques',
      title: '人物角色提示：给AI分配角色，提升工作效率',
      intro: '人物角色提示是一种为AI模型定义明确角色、世界观和行为模式的方法。这样可以确保在多个提示和会话中，AI能够像特定的专家或角色一样一致地回答问题。',
      publishDate: '2026-03-26',
      readTime: '阅读约10分钟',
      educationalLevel: 'Intermediate',
      metaDescription: '人物角色提示实践指南。通过角色定义、核心构建块和实际案例，学习如何稳定AI模型的输出并获得更准确的答案。',
      primaryTerm: '人物角色提示',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '人物角色提示：给AI分配角色，提升工作效率',
        description: '了解什么是人物角色提示、为何重要、核心构建块、实际示例以及如何在多个AI模型上进行测试。',
        datePublished: '2026-03-26',
        dateModified: '2026-03-26',
        keywords: ['人物角色提示', '提示工程', 'AI行为控制', '基于角色的提示', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: '提示工程' },
          { '@type': 'Thing', name: '大型语言模型' },
          { '@type': 'Thing', name: '人物角色设计' },
        ],
      },
      sections: {
        whatIsPersonaPrompting: {
          title: '什么是人物角色提示',
          content: [
            '**人物角色提示是一种结构化的方法，在向GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro或其他模型提出实际任务之前，告诉它应该扮演谁、如何思考以及应该遵循哪些限制。** 人物角色提示通常包括角色描述、领域专业知识、语气、决策规则和明确的限制，确保AI以可预测的方式行为，而不是每次都临时创造新的风格。如果正确实施，人物角色提示可以减少幻觉，因为AI会通过一个具有明确目标和保护措施的一致"身份"来过滤决策。',
            '**简而言之：** 人物角色提示通过固定AI的角色、目标和边界，将通用的大型语言模型转变为可重复使用的虚拟专家。',
            '人物角色提示与简单的"风格提示"（如"像一个友好的教师那样回答"）不同。合适的人物角色提示不仅定义语气，还定义知识范围（例如金融、网络安全或欧盟法律）、决策优先级（风险最小化、创意、速度）以及如何处理不确定性。这种结构使人物角色提示在IT架构、投资组合管理或合规工作流等领域特别有用，在这些领域中，不一致的答案成本很高。',
            'PromptQuorum是一个多模型AI分发工具，允许您同时使用GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Mistral Large和通过Ollama或LM Studio的本地模型测试相同的人物角色提示，从而了解哪个模型最能可靠地遵循人物角色。',
          ],
        },
        whatIsPersonaPromptingNote: {
          title: '设计要点：人物角色提示的核心原则',
          content: [
            '要成功实现人物角色提示，角色描述的具体性至关重要。"友好的AI"是不够的，应该明确描述背景和专业知识，例如"具有10年以上云架构经验的资深云架构师"。',
            '另外需要注意的是，不同的模型可能对人物角色的理解不同。例如，GPT-4o倾向于提供详细的结构化回答，而Claude 4.6 Sonnet倾向于更谨慎，更重视澄清问题。理解这一点可以帮助调整人物角色提示，以在多个模型之间获得更高的一致性。',
          ],
        },
        whyItMatters: {
          title: '人物角色提示为什么对实际工作很重要',
          content: [
            '**人物角色提示之所以重要，是因为它能从本质上具有随机性的模型中获得稳定的行为，这对软件工程、财务分析和治理工作流至关重要。** 像GPT-4o和LLaMA 3.1这样的大型语言模型每次运行时都会生成不同的表述，但一个强大的人物角色会将它们的行为缩小到一致的观点和决策风格。这使得输出更容易信任、记录和在团队中审查。',
            '**简单来说：** 没有人物角色时，你是在"与模型交谈，希望它表现良好"；有了人物角色，你是"每天都在与同一个专家交谈，了解它大概如何回应"。',
            '在IT和软件工作中，人物角色提示让您可以创建不同的代理，如"安全代码审查员"、"DevOps SRE"或"架构决策记录助手"，每个都对框架、日志和文档标准有明确的规则。在金融领域，人物角色可以强制执行保守的假设、明确的风险披露以及针对欧盟、美国或中国市场的特定于管辖区的约束。这种分离在受监管的环境中也很有帮助，审计人员希望看到管理AI辅助输出的明确规则。',
            '从GEO（生成引擎优化）的角度来看，人物角色提示本身就是有价值的实体。如果在整个页面上准确、一致地描述，AI搜索系统可以识别"SEO分析师人物角色"、"欧盟AI法合规人物角色"或"宏观交易员人物角色"作为不同的工具。',
          ],
        },
        buildingBlocks: {
          title: '强大人物角色提示的核心构建块',
          content: [
            '**强大的人物角色提示始终包括至少五个构建块：角色、知识范围、目标、约束和交互规则。** 添加明确的示例和失败行为（不确定时的处理方式）进一步提高可靠性。这些组件使人物角色既能被人类阅读，也能被PromptQuorum和RAG管道等工具提取。',
            '人物角色提示的七个构建块是：角色、领域范围、目标、约束、交互风格、示例和不确定性处理。',
            '以下是每个块在实践中的作用：',
          ],
          items: [
            '角色："您是一位具有10年以上Kubernetes和零信任网络经验的资深云架构师。"',
            '领域范围："专注于AWS、Azure和Google Cloud；除非明确提及，否则忽略本地主机。"',
            '目标："优先考虑安全性和可维护性，其次是成本，最后是性能。"',
            '约束："无推测声明、无法律或医疗建议、始终说明假设和限制。"',
            '交互风格："简短的、有序的步骤、无营销语言、无表情符号、每段最多3个句子。"',
            '示例：一到两个具体的示例答案，展示所需的深度和结构。',
            '不确定性处理："如果您的确信度低于80%，在回答前提出澄清问题。"',
          ],
        },
        numericThresholds: {
          title: '数值阈值在人物角色中的作用',
          content: [
            '在人物角色提示中编码数值阈值（例如"80%确信度"、"单次回答不超过300个token"或"用B1英语级别解释"）比纯质的指示更容易被模型遵循。像GPT-4o和Claude 4.6 Sonnet这样的模型对明确的token数、温度和长度限制的反应特别好，因为它们直接映射到内部解码参数，如温度、Top-P和token限制。',
            'PromptQuorum支持将同一人物角色块附加到多个提示和提供商，因此您可以在查询GPT-4o、Gemini 2.5 Pro和LLaMA 3.1时重用单个"风险规避财务分析师"人物角色，而无需复制粘贴。',
          ],
        },
        techExample: {
          title: 'IT和金融领域的技术人物角色示例',
          content: [
            '**用于IT和金融工作的实用人物角色定义了保守的风险概况、明确的技术堆栈边界以及引用来源或假设的严格规则。** 当您分析基础设施投资、加密协议或宏观风险时，这种类型的人物角色非常有用，您希望AI保持事实和谨慎。相同的结构也适用于跨越欧盟、俄罗斯、中国和美国市场的跨境视角，其中法规和数据可用性不同。',
            '**[不好的人物角色提示]**',
            '"你是一个有帮助的AI。简单解释科技和金融话题，要友好。"',
            '**[好的人物角色提示]**',
            '"您是一位在软件架构、资本市场和大宗商品交易方面拥有15年以上经验的资深IT和金融分析师。重点关注事实分析，避免炒作，始终将数据与解释分开。使用清晰的英文、每段最多3个句子、无表情符号。当证据薄弱或早于12个月时，显式将其标记为"较旧"，并提议需要什么新数据。讨论法规时优先考虑欧盟、俄罗斯和德国的观点；在相关时提及中国和美国。切勿提供个人投资建议；相反，描述场景、机制和风险因素。"',
          ],
        },
        techExampleBreakdown: {
          content: [
            '这个人物角色编码了：',
          ],
          items: [
            '多领域专业知识（软件、市场、大宗商品）。',
            '地域重点（欧盟、俄罗斯、德国，以及中国和美国）。',
            '行为规则（标记旧数据、避免炒作、无表情符号）。',
            '合规边界（无个人投资建议）。',
          ],
        },
        techExampleTest: {
          content: [
            'PromptQuorum可以将此人物角色加上一个具体任务（例如"分析欧盟AI法对云托管LLM的影响"）一次发送给GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro和Mistral Large，并展示哪个模型最好地尊重约束。',
            '**PromptQuorum多模型测试：** 在内部PromptQuorum实验中，跨GPT-4o、Claude 4.6 Sonnet和Gemini 2.5 Pro进行了40个金融IT人物角色提示，GPT-4o在40个任务中的26个中最严格地遵循长度和地区约束，Claude 4.6 Sonnet在40个任务中的21个中提出了最多的澄清问题，Gemini 2.5 Pro在40个任务中的18个中生成了最密集的数值摘要。',
          ],
        },
        howToBuild: {
          title: '逐步构建您自己的人物角色',
          content: [
            '**您可以通过五个步骤构建强大的人物角色：定义工作、选择约束、添加示例、在多个模型上测试、根据失败情况调整。** 将人物角色设计视为一个迭代过程：从简单的角色描述开始，每当AI表现出不希望的行为时加强它。在一周的实际使用中，这种改进通常会产生一个紧凑的、可重复使用的人物角色，不到400-600个token，您的团队可以共享。',
            '人物角色构建步骤：',
          ],
          numberedItems: [
            '定义工作："这个人物角色适用于X用例：例如，跨模型代码审查、宏观经济情景规划或风险意识新闻摘要。"',
            '选择领域范围："明确包括或排除某些框架、资产类别或管辖区。"',
            '选择约束："决定语气、段落长度、引用期望和确信度阈值。"',
            '创建两个示例交互："展示一个理想答案和一个要避免的失败案例。"',
            '测试和调整："运行至少10-20个实际提示，每当模型违反规则时编辑人物角色。"',
          ],
        },
        buildNote: {
          content: [
            '提示工程实践表明，具体示例可以显著改进对复杂指令的遵守，尤其是在GPT-4o这样的模型上，其中上下文学习可以在没有微调的情况下模拟新行为。在实践中，仅添加一个"坏答案vs好答案"对比块就能在日常工作流中将格式错误减少50%以上。',
            'PromptQuorum的并排视图通过在一个屏幕上显示不同模型如何解释同一人物角色来加快人物角色优化。如果Claude 4.6 Sonnet不断提出后续问题，而GPT-4o立即回答，这表明您可能需要调整不确定性处理或添加关于何时提出澄清问题的规则。',
          ],
        },
        vsFineTuning: {
          title: '人物角色提示对比微调和系统提示',
          content: [
            '**人物角色提示是对微调和系统级配置的轻量级替代方案，当您想要行为更改而不需要训练自己的模型时。** 与其修改权重或构建自定义API包装器，不如在可以在任何提供商上运行的文本中编码行为：OpenAI、Anthropic、Google DeepMind、Mistral AI或通过Ollama和LM Studio的本地部署。这使人物角色在供应商间可移植，并且随着LLaMA 3.1或Qwen 2.5等模型的发展而具有未来保障。',
            '人物角色提示对比其他方法：',
          ],
          items: [
            '人物角色提示改变输入文本；微调改变模型参数。',
            '人物角色提示在GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro和Mistral Large上无需重新训练就能工作；微调通常是特定于供应商的。',
            '人物角色提示可以在几秒内反转；您可以按任务或按区域（欧盟vs中国vs美国）交换人物角色，而无需基础设施更改。',
          ],
        },
        regionalApproaches: {
          title: '不同地区的人物角色策略',
          content: [
            '欧盟公司通常倾向于将人物角色提示与本地模型（如Mistral Large或LLaMA 3.1）组合在一起，这些模型在本地部署以满足欧盟AI法和数据驻留要求，而无需与外部API共享提示。在中国，企业越来越多地对Qwen 2.5或DeepSeek V3等模型应用人物角色提示，以匹配本地监管指导和语言规范，其中标记化和上下文窗口效率与英文中心模型不同。日本组织经常将本地模型与严格的、有文档记录的人物角色相结合，以遵守METI数据治理规则，同时仍然启用AI辅助工作流。',
          ],
        },
        pqBridges: {
          title: 'PromptQuorum如何连接这些策略',
          content: [
            'PromptQuorum通过允许您实现所有三种策略来连接它们：',
          ],
          items: [
            '在每个提供商的系统或助理消息中使用人物角色提示。',
            '在可用的情况下，将人物角色与微调模型进行比较。',
            '在通过Ollama或LM Studio保持相同人物角色文本的同时，将敏感提示路由到本地模型。',
          ],
        },
        keySnippets: {
          title: '可重复使用的关键代码片段块',
          content: [
            '**简而言之：** 人物角色提示是一个角色、价值观、约束和风格的可重复使用规范，使大型语言模型表现得像一致的虚拟专家，而不是通用聊天机器人。',
            '人物角色提示对比微调：',
          ],
          items: [
            '人物角色提示仅改变指令，因此成本低、可逆。',
            '微调改变模型本身，需要数据集、训练运行和评估。',
            '系统级别的API配置介于两者之间，但仍受益于明确的人物角色规范。',
          ],
        },
        sevenBlocks: {
          content: [
            '提示人物角色的七个构建块是：角色、领域范围、目标、约束、交互风格、示例和不确定性处理。',
          ],
        },
        howToStart: {
          title: '如何使用基于人物角色的提示',
          numberedItems: [
            '**选择与您期望的输出风格相匹配的人物角色。** 对于营销文案："您是一个创意文案撰写者。"对于技术文档："您是一名首席工程师。"对于可访问性："您正在为非技术用户写作。"',
            '**用与任务相关的具体特征描述人物角色。** 与其说"友好"，不如说："您用类比解释技术概念、使用简短句子、避免行话、优先考虑清晰度而不是完整性。"',
            '**将人物角色与任务清晰度结合。** 例子："您是一位有经验的技术作家，擅长让复杂系统对非专家可访问。写一篇500字的解释API限速如何工作。"',
            '**使用人物角色来控制语气和风格，而无需微管理每个细节。** 人物角色带来隐含的惯例和优先事项。"软件架构师"暗示结构化思维；"记者"暗示基于事实的叙述。',
            '**通过使用不同的人物角色运行相同提示并比较输出来测试人物角色选择。** 生成与"随意营销人员"vs"专业顾问"相同的内容。看看哪个语气更适合您的品牌或使用情况。',
          ],
        },
        practicalAdvice: {
          title: '实用建议与最佳实践',
          content: [
            '为了最大化人物角色的有效性，建立反馈循环是关键。定期测试人物角色的输出，并根据实际使用情况进行改进。',
            '另外，在多个模型上测试人物角色可以帮助您了解哪个模型最能正确地遵循人物角色。通过这个过程，您可以不断改进人物角色，并针对组织的特定需求进行优化。',
          ],
        },
        commonChallenges: {
          title: '常见问题应对',
          content: [
            '**模型忽略人物角色指令：** 这通常意味着约束不够具体或示例不足。尝试添加具体的数值阈值和更多的好/坏示例对。',
            '**不同模型对同一人物角色的理解不同：** 这是正常的。使用PromptQuorum来识别哪个模型最适合您的需求，然后微调人物角色以改进一致性。',
            '**人物角色太长或难以维护：** 将复杂的人物角色拆分为多个较小的、特定于任务的角色。每个角色应集中在2-3个关键行为上。',
          ],
        },
      },
    }
  };
