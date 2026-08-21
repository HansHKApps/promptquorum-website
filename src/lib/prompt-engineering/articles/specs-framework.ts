// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: specs-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    theme: 'Frameworks',
    heroImage: '/images/specs-framework-overview-hero-en.webp',
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
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
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
      whatIsSPECS: {
        title: 'What the SPECS Framework Is',
        content: [
          '**The SPECS Framework is a specification-first prompt pattern that treats every prompt like a mini requirements document instead of a casual chat message.** It is designed for tasks where accuracy, structure, and repeatability matter more than open-ended creativity. SPECS works well with models such as GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and local models, because it removes ambiguity from your instructions.',
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
          'Apply the same SPECS-based prompt to multiple models in parallel, making it easy to compare how different vendors handle strict formats.',
          'Save and share SPECS templates for recurring workflows such as ticket summaries, report generation, or code reviews.',
        ],
      },
      usingSpecsWithOthers: {
        title: 'Using SPECS with Other Frameworks',
        content: [
          '**You should position the SPECS Framework as the backbone for structured outputs and combine it with other frameworks for complementary tasks.** A practical pattern is:',
        ],
        items: [
          'Use SPECS for anything that must produce predictable structures or feed into tools.',
          'Use creative frameworks like CRAFT for marketing and copywriting.',
          'Use reasoning-oriented frameworks like Analyze–Plan–Execute (APE) when you want visible intermediate reasoning.',
          'Use single-step general frameworks for quick tasks that don\'t justify a full specification.',
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
      relatedReading: {
        title: 'Related Reading',
        items: [
          '[Which Prompt Framework Should You Use?](/prompt-engineering/which-prompt-framework-should-you-use)',
          '[CO-STAR Prompt Framework](/prompt-engineering/co-star-framework)',
          '[RISEN Framework](/prompt-engineering/risen-framework)',
          '[Build Your Own Prompt Framework](/prompt-engineering/build-your-own-prompt-framework)',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    theme: 'Frameworks',
    heroImage: '/images/specs-framework-overview-hero-de.webp',
    title: 'Das SPECS-Framework',
    intro: 'Das SPECS-Framework ist eine Prompt-Struktur, die vage Anfragen in präzise Spezifikationen verwandelt, damit große Sprachmodelle vorhersagbare, maschinell verwertbare Ausgaben erzeugen. In PromptQuorum steht das SPECS-Framework als integrierte Option zur Verfügung, die jeder Nutzer direkt in der App auswählen und anwenden kann.',
    publishDate: '2026-03-24',
    readTime: '8 Min. Lesezeit',
    seoTitle: 'SPECS-Framework 2026: präzise Prompt-Struktur',
    metaDescription: 'SPECS: Scope, Purpose, Examples, Constraints, Steps. Detaillierte Prompt-Struktur mit Leitfaden und Best Practices für vorhersagbare Ausgaben.',
    educationalLevel: 'Intermediate',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Das SPECS-Framework',
      description: 'Wie das SPECS-Framework (Scope, Purpose, Examples, Constraints, Steps) funktioniert, wann Sie es einsetzen und wie PromptQuorum SPECS als integrierte Option anbietet.',
      datePublished: '2026-03-24',
      dateModified: '2026-03-24',
      keywords: ['SPECS Framework', 'Scope Purpose Examples Constraints Steps', 'prompt frameworks', 'prompt engineering', 'structured prompts', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Prompt-Frameworks' },
        { '@type': 'Thing', name: 'Große Sprachmodelle' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
        { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
        { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
      ],
    },
    sections: {
      whatIsSPECS: {
        title: 'Was das SPECS-Framework ist',
        content: [
          '**Das SPECS-Framework ist ein spezifikationsorientiertes Prompt-Muster, das jeden Prompt wie ein kleines Anforderungsdokument behandelt statt wie eine beiläufige Chat-Nachricht.** Es ist für Aufgaben gedacht, bei denen Genauigkeit, Struktur und Wiederholbarkeit wichtiger sind als offene Kreativität. SPECS funktioniert gut mit Modellen wie GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und lokalen Modellen, weil es Mehrdeutigkeit aus Ihren Anweisungen entfernt.',
          'SPECS ist besonders nützlich, wenn verschiedene Personen oder Systeme denselben Prompt ausführen und konsistente Ergebnisse erhalten müssen. Indem Sie den Prompt in eine klare Spezifikation verwandeln, erleichtern Sie das Debuggen von Problemen, den Vergleich des Modellverhaltens und die Durchsetzung von Standards in Ihren Workflows.',
        ],
      },
      fiveComponents: {
        title: 'Die fünf SPECS-Komponenten',
        content: [
          '**Ein guter SPECS-Prompt definiert alle fünf Komponenten, damit das Modell genau weiß, was zu tun ist, warum und wie die Antwort zu formatieren ist.** Jede Komponente konzentriert sich auf einen anderen Teil der Anweisung.',
          'Typische Definitionen sind:',
        ],
        items: [
          'Scope (Umfang): Was die Aufgabe abdeckt und was ausdrücklich nicht.',
          'Purpose (Zweck): Das zugrunde liegende Ziel oder die Entscheidung, die die Ausgabe unterstützen soll.',
          'Examples (Beispiele): Ein oder mehrere Beispiel-Ein- und -Ausgaben, um das Modell zu verankern.',
          'Constraints (Einschränkungen): Harte Regeln wie Längenlimits, Formate oder verbotene Verhaltensweisen.',
          'Steps (Schritte): Die interne Abfolge, der das Modell folgen soll, um zur Ausgabe zu gelangen.',
        ],
      },
      whySPECSIsUseful: {
        title: 'Warum das SPECS-Framework nützlich ist',
        content: [
          '**Das SPECS-Framework ist nützlich für analytische, operative und Integrationsaufgaben, bei denen Sie maschinell verwertbare Ergebnisse benötigen, nicht nur lesbaren Text.** Es reduziert verborgene Annahmen und macht jeden Teil des Prompts explizit, was für Produktions-Workflows entscheidend ist.',
          'Häufige Vorteile sind:',
        ],
        items: [
          'Einfacheres Debuggen, da Sie einzelne Komponenten der Spezifikation anpassen oder testen können.',
          'Stabilere Ausgaben über Modelle und Durchläufe hinweg, dank Einschränkungen und Beispielen.',
          'Bessere Eignung für die Weiterverarbeitung, da die Struktur im Voraus bekannt ist.',
        ],
      },
      badVsGoodExample: {
        title: 'Beispiel: schlechter vs. guter SPECS-Prompt',
        content: [
          '**Der Unterschied zwischen einer unstrukturierten Anfrage und einer SPECS-basierten Anfrage wird deutlich, wenn Sie dieselbe Aufgabe in beiden Formen sehen.** Hier ein Beispiel für das Extrahieren von Informationen aus Text.',
          '**[Schlechter Prompt]**',
          '"Lies diese Kunden-E-Mail und fasse die wichtigsten Punkte zusammen."',
          '**[Guter Prompt]**',
          '"Scope: Analysiere eine einzelne Kundensupport-E-Mail und extrahiere die für unser Support-Team relevanten Schlüsselinformationen. Ignoriere Marketing- oder Verkaufschancen. Purpose: Erstelle eine strukturierte Zusammenfassung, die in unserem Ticketsystem protokolliert und von Agenten für schnellere Antworten genutzt werden kann. Examples: Eingabe: \'Ich habe heute zweimal versucht, mein Passwort zurückzusetzen, und der Link ist beide Male abgelaufen…\' Ausgabe: {"issue_type": "password_reset", "urgency": "medium", "summary": "Der Zurücksetzungs-Link läuft ab, bevor der Nutzer den Vorgang abschließt"} Constraints: Die Ausgabe muss gültiges JSON mit den Schlüsseln `issue_type`, `urgency` und `summary` sein. Füge keine zusätzlichen Felder hinzu. `urgency` muss einer von folgenden sein: low, medium, high. Steps: 1) Identifiziere das Hauptproblem, 2) leite die Dringlichkeit aus Auswirkung und Frustration ab, 3) schreibe eine prägnante Zusammenfassung unter 25 Wörtern."',
          'Die SPECS-Version definiert genau, was das Modell ausgeben soll, wie es denken soll und wie das Ergebnis verwendet wird.',
        ],
      },
      whenToUse: {
        title: 'Wann Sie das SPECS-Framework verwenden sollten',
        content: [
          '**Sie sollten das SPECS-Framework verwenden, wenn Ihr Hauptziel strukturierte, zuverlässige Ausgaben statt explorativem Brainstorming sind.** Das umfasst häufig:',
        ],
        items: [
          'Datenextraktion aus E-Mails, Chats oder Dokumenten in feste Schemas.',
          'Code-Transformation, Dokumentationserstellung und Refactoring mit strikten Regeln.',
          'Berichterstellung, bei der Überschriften, Kennzahlen und Formate vordefiniert sind.',
          'Jeden Workflow, bei dem die KI-Ausgabe direkt in ein anderes System oder Skript einfließt.',
        ],
      },
      howPQImplements: {
        title: 'Wie PromptQuorum das SPECS-Framework umsetzt',
        content: [
          '**PromptQuorum ist ein Multi-Model-AI-Dispatch-Tool, das das SPECS-Framework als eine seiner integrierten Prompt-Strukturen anbietet, damit Nutzer Spezifikations-Prompts entwerfen können, ohne sie von Grund auf neu zu erstellen.** Wenn Sie in PromptQuorum SPECS wählen, zeigt die App eigene Felder für Scope, Purpose, Examples, Constraints und Steps an und fügt sie zu einer einzigen, gut strukturierten Anweisung zusammen.',
          'Innerhalb von PromptQuorum ermöglicht Ihnen das SPECS-Framework:',
        ],
        items: [
          'Jede Komponente in einem separaten Feld zu erfassen, damit die Spezifikation lesbar und leicht zu bearbeiten bleibt.',
          'Denselben SPECS-basierten Prompt parallel auf mehrere Modelle anzuwenden, was den Vergleich erleichtert, wie verschiedene Anbieter strikte Formate handhaben.',
          'SPECS-Vorlagen für wiederkehrende Workflows wie Ticket-Zusammenfassungen, Berichterstellung oder Code-Reviews zu speichern und zu teilen.',
        ],
      },
      usingSpecsWithOthers: {
        title: 'SPECS mit anderen Frameworks kombinieren',
        content: [
          '**Sie sollten das SPECS-Framework als Rückgrat für strukturierte Ausgaben positionieren und es für ergänzende Aufgaben mit anderen Frameworks kombinieren.** Ein praktisches Muster ist:',
        ],
        items: [
          'Verwenden Sie SPECS für alles, was vorhersagbare Strukturen erzeugen oder in Tools einfließen muss.',
          'Verwenden Sie kreative Frameworks wie CRAFT für Marketing und Texterstellung.',
          'Verwenden Sie reasoning-orientierte Frameworks wie Analyze–Plan–Execute (APE), wenn Sie sichtbare Zwischenschritte wünschen.',
          'Verwenden Sie einfache Single-Step-Frameworks für schnelle Aufgaben, die keine vollständige Spezifikation rechtfertigen.',
        ],
      },
      howToStart: {
        title: 'So verwenden Sie das SPECS-Framework',
        numberedItems: [
          '**Setting: Geben Sie Kontext zur Umgebung, zum System oder zur Domäne.** Beispiel: \'Sie sind Datenanalyst in einem Gesundheitsunternehmen. Der Patientendatenschutz ist entscheidend. Alle Abfragen müssen HIPAA entsprechen.\'',
          '**Problemstellung: Nennen Sie das konkrete Problem, das Sie lösen.** Beispiel: \'Identifizieren Sie, welche Patientenkohorten in den letzten 90 Tagen eine geringe Medikamententreue zeigen.\'',
          '**Examples: Geben Sie 2–3 konkrete Beispiele für gute Ausgaben.** Zeigen Sie für Analysen eine Beispieltabelle oder Befunde. Zeigen Sie für die Codegenerierung funktionierenden Code, der Ihrem Stil entspricht.',
          '**Constraints: Listen Sie harte Regeln und Präferenzen auf.** Beispiel: \'Verwenden Sie nur SQL (kein Python). Die Abfrage muss in unter 5 Sekunden laufen. Die Ausgabe muss anonymisiert sein (keine Patientennamen).\'',
          '**Style: Legen Sie Ton, Sprache und Formatpräferenzen fest.** Beispiel: \'Technisches Publikum. Verwenden Sie präzise Terminologie. Geben Sie einen Markdown-Bericht zurück.\'',
        ],
      },
      relatedReading: {
        title: 'Weiterführende Lektüre',
        items: [
          '[Welches Prompt-Framework sollten Sie verwenden?](/de/prompt-engineering/which-prompt-framework-should-you-use)',
          '[CO-STAR Prompt-Framework](/de/prompt-engineering/co-star-framework)',
          '[RISEN Framework](/de/prompt-engineering/risen-framework)',
          '[Eigenes Prompt-Framework erstellen](/de/prompt-engineering/build-your-own-prompt-framework)',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    theme: 'Frameworks',
    heroImage: '/images/specs-framework-overview-hero-es.webp',
    title: 'El Framework SPECS',
    intro: 'El Framework SPECS es una estructura de prompts que convierte solicitudes vagas en especificaciones precisas para que los grandes modelos de lenguaje produzcan salidas predecibles y procesables. En PromptQuorum, el Framework SPECS está disponible como una opción integrada que cualquier usuario puede seleccionar y aplicar directamente en la app.',
    publishDate: '2026-03-24',
    readTime: '8 min de lectura',
    seoTitle: 'Framework SPECS 2026: estructura de prompts precisa',
    metaDescription: 'SPECS: Scope, Purpose, Examples, Constraints, Steps. Estructura de prompts detallada con guía y buenas prácticas para salidas predecibles.',
    educationalLevel: 'Intermediate',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'El Framework SPECS',
      description: 'Cómo funciona el Framework SPECS (Scope, Purpose, Examples, Constraints, Steps), cuándo usarlo y cómo PromptQuorum lo ofrece como opción integrada.',
      datePublished: '2026-03-24',
      dateModified: '2026-03-24',
      keywords: ['SPECS Framework', 'Scope Purpose Examples Constraints Steps', 'prompt frameworks', 'prompt engineering', 'structured prompts', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Frameworks de prompts' },
        { '@type': 'Thing', name: 'Grandes modelos de lenguaje' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
        { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
        { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
      ],
    },
    sections: {
      whatIsSPECS: {
        title: 'Qué es el Framework SPECS',
        content: [
          '**El Framework SPECS es un patrón de prompts orientado a la especificación que trata cada prompt como un mini documento de requisitos en lugar de un mensaje de chat informal.** Está diseñado para tareas donde la precisión, la estructura y la repetibilidad importan más que la creatividad abierta. SPECS funciona bien con modelos como GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y modelos locales, porque elimina la ambigüedad de tus instrucciones.',
          'SPECS es especialmente útil cuando distintas personas o sistemas deben ejecutar el mismo prompt y obtener resultados consistentes. Al convertir el prompt en una especificación clara, facilitas la depuración de problemas, la comparación del comportamiento de los modelos y el cumplimiento de estándares en tus flujos de trabajo.',
        ],
      },
      fiveComponents: {
        title: 'Los cinco componentes de SPECS',
        content: [
          '**Un buen prompt SPECS define los cinco componentes para que el modelo sepa exactamente qué hacer, por qué y cómo dar formato a la respuesta.** Cada componente se centra en una parte distinta de la instrucción.',
          'Las definiciones habituales son:',
        ],
        items: [
          'Scope (alcance): qué abarca la tarea y qué queda explícitamente fuera.',
          'Purpose (propósito): el objetivo o la decisión que debe respaldar la salida.',
          'Examples (ejemplos): una o más entradas y salidas de muestra para guiar al modelo.',
          'Constraints (restricciones): reglas estrictas como límites de longitud, formatos o comportamientos prohibidos.',
          'Steps (pasos): la secuencia interna que el modelo debe seguir para llegar a la salida.',
        ],
      },
      whySPECSIsUseful: {
        title: 'Por qué el Framework SPECS es útil',
        content: [
          '**El Framework SPECS es útil para tareas analíticas, operativas y de integración donde necesitas resultados utilizables por una máquina, no solo prosa legible.** Reduce las suposiciones ocultas y hace explícita cada parte del prompt, algo esencial para los flujos de trabajo en producción.',
          'Entre sus beneficios habituales están:',
        ],
        items: [
          'Depuración más sencilla, porque puedes ajustar o probar componentes individuales de la especificación.',
          'Salidas más estables entre modelos y ejecuciones, gracias a las restricciones y los ejemplos.',
          'Mejor encaje con el procesamiento posterior, ya que la estructura se conoce de antemano.',
        ],
      },
      badVsGoodExample: {
        title: 'Ejemplo: prompt SPECS malo vs bueno',
        content: [
          '**La diferencia entre una solicitud sin estructura y una basada en SPECS se hace evidente cuando ves la misma tarea escrita de ambas formas.** Aquí tienes un ejemplo para extraer información de un texto.',
          '**[Prompt malo]**',
          '"Lee este correo de un cliente y resume los puntos principales."',
          '**[Prompt bueno]**',
          '"Scope: Analiza un único correo de soporte al cliente y extrae la información clave relevante para nuestro equipo de soporte. Ignora oportunidades de marketing o ventas. Purpose: Produce un resumen estructurado que pueda registrarse en nuestro sistema de tickets y que ayude a los agentes a responder más rápido. Examples: Entrada: \'Intenté restablecer mi contraseña dos veces hoy y el enlace caducó las dos veces…\' Salida: {"issue_type": "password_reset", "urgency": "medium", "summary": "El enlace de restablecimiento caduca antes de que el usuario complete el proceso"} Constraints: La salida debe ser JSON válido con las claves `issue_type`, `urgency` y `summary`. No añadas campos adicionales. `urgency` debe ser uno de: low, medium, high. Steps: 1) Identifica el problema principal, 2) infiere la urgencia según el impacto y la frustración, 3) escribe un resumen conciso de menos de 25 palabras."',
          'La versión SPECS define exactamente qué debe producir el modelo, cómo debe razonar y cómo se usará el resultado.',
        ],
      },
      whenToUse: {
        title: 'Cuándo usar el Framework SPECS',
        content: [
          '**Deberías usar el Framework SPECS cuando tu objetivo principal es una salida estructurada y fiable, no la lluvia de ideas exploratoria.** Esto suele incluir:',
        ],
        items: [
          'Extracción de datos de correos, chats o documentos hacia esquemas fijos.',
          'Transformación de código, generación de documentación y refactorización con reglas estrictas.',
          'Generación de informes donde los encabezados, las métricas y los formatos están predefinidos.',
          'Cualquier flujo de trabajo donde la salida de la IA alimenta directamente a otro sistema o script.',
        ],
      },
      howPQImplements: {
        title: 'Cómo implementa PromptQuorum el Framework SPECS',
        content: [
          '**PromptQuorum es una herramienta de dispatch de IA multimodelo que ofrece el Framework SPECS como una de sus estructuras de prompts integradas, para que los usuarios diseñen prompts tipo especificación sin construirlos desde cero.** Cuando eliges SPECS en PromptQuorum, la app muestra campos dedicados para Scope, Purpose, Examples, Constraints y Steps y luego los ensambla en una única instrucción bien estructurada.',
          'Dentro de PromptQuorum, el Framework SPECS te permite:',
        ],
        items: [
          'Capturar cada componente en un campo aparte para que la especificación se mantenga legible y fácil de editar.',
          'Aplicar el mismo prompt basado en SPECS a varios modelos en paralelo, lo que facilita comparar cómo manejan los distintos proveedores los formatos estrictos.',
          'Guardar y compartir plantillas SPECS para flujos recurrentes como resúmenes de tickets, generación de informes o revisiones de código.',
        ],
      },
      usingSpecsWithOthers: {
        title: 'Usar SPECS con otros frameworks',
        content: [
          '**Deberías posicionar el Framework SPECS como la columna vertebral de las salidas estructuradas y combinarlo con otros frameworks para tareas complementarias.** Un patrón práctico es:',
        ],
        items: [
          'Usa SPECS para todo lo que deba producir estructuras predecibles o alimentar herramientas.',
          'Usa frameworks creativos como CRAFT para marketing y redacción publicitaria.',
          'Usa frameworks orientados al razonamiento como Analizar–Planificar–Ejecutar (APE) cuando quieras ver el razonamiento intermedio.',
          'Usa frameworks generales de un solo paso para tareas rápidas que no justifican una especificación completa.',
        ],
      },
      howToStart: {
        title: 'Cómo usar el Framework SPECS',
        numberedItems: [
          '**Setting (entorno): Aporta contexto sobre el entorno, el sistema o el dominio.** Ejemplo: \'Eres un analista de datos en una empresa de salud. La privacidad del paciente es crítica. Todas las consultas deben cumplir con HIPAA.\'',
          '**Problem statement (problema): Indica el problema específico que estás resolviendo.** Ejemplo: \'Identifica qué cohortes de pacientes muestran baja adherencia a la medicación en los últimos 90 días.\'',
          '**Examples (ejemplos): Aporta 2–3 ejemplos concretos de buena salida.** Para análisis, muestra una tabla o hallazgos de muestra. Para generación de código, muestra código funcional que siga tu estilo.',
          '**Constraints (restricciones): Enumera reglas y preferencias estrictas.** Ejemplo: \'Usa solo SQL (nada de Python). La consulta debe ejecutarse en menos de 5 segundos. La salida debe estar anonimizada (sin nombres de pacientes).\'',
          '**Style (estilo): Especifica el tono, el idioma y el formato preferidos.** Ejemplo: \'Audiencia técnica. Usa terminología precisa. Devuelve un informe en markdown.\'',
        ],
      },
      relatedReading: {
        title: 'Lectura relacionada',
        items: [
          '[¿Qué framework de prompts deberías usar?](/es/prompt-engineering/which-prompt-framework-should-you-use)',
          '[CO-STAR Prompt Framework](/es/prompt-engineering/co-star-framework)',
          '[RISEN Framework](/es/prompt-engineering/risen-framework)',
          '[Construye tu propio framework de prompts](/es/prompt-engineering/build-your-own-prompt-framework)',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    theme: 'Frameworks',
    heroImage: '/images/specs-framework-overview-hero-zh.webp',
    title: 'SPECS 框架',
    intro: 'SPECS 框架是一种提示词结构，可将模糊的请求转化为精确的规范，使大语言模型产出可预测、可执行的输出。在 PromptQuorum 中，SPECS 框架作为内置选项提供，任何用户都可以直接在应用中选择并应用它。',
    publishDate: '2026-03-24',
    readTime: '8 分钟阅读',
    seoTitle: 'SPECS 框架 2026：精确的提示词结构',
    metaDescription: 'SPECS：Scope、Purpose、Examples、Constraints、Steps。详尽的提示词结构，附指南与最佳实践，助你获得可预测的输出。',
    educationalLevel: 'Intermediate',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SPECS 框架',
      description: 'SPECS 框架（Scope、Purpose、Examples、Constraints、Steps）的工作原理、何时使用，以及 PromptQuorum 如何将其作为内置选项提供。',
      datePublished: '2026-03-24',
      dateModified: '2026-03-24',
      keywords: ['SPECS Framework', 'Scope Purpose Examples Constraints Steps', 'prompt frameworks', 'prompt engineering', 'structured prompts', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: '提示词框架' },
        { '@type': 'Thing', name: '大语言模型' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
        { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
        { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
      ],
    },
    sections: {
      whatIsSPECS: {
        title: '什么是 SPECS 框架',
        content: [
          '**SPECS 框架是一种面向规范的提示词模式，它将每个提示词视为一份微型需求文档，而不是随意的聊天消息。** 它专为那些精确性、结构性和可重复性比开放式创意更重要的任务而设计。SPECS 对 GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro 及本地模型都很有效，因为它消除了指令中的歧义。',
          '当不同的人或系统必须执行同一个提示词并获得一致的结果时，SPECS 尤其有用。通过将提示词转化为清晰的规范，你可以更轻松地排查问题、比较模型行为，并在工作流中保持标准一致。',
        ],
      },
      fiveComponents: {
        title: 'SPECS 的五个组成部分',
        content: [
          '**一个好的 SPECS 提示词会定义全部五个组成部分，使模型确切知道要做什么、为什么做，以及如何为回答设定格式。** 每个组成部分聚焦于指令的不同部分。',
          '常见的定义如下：',
        ],
        items: [
          'Scope（范围）：任务涵盖什么，以及明确排除什么。',
          'Purpose（目的）：输出应支持的目标或决策。',
          'Examples（示例）：一个或多个示例输入与输出，用于引导模型。',
          'Constraints（约束）：严格的规则，如长度限制、格式或禁止的行为。',
          'Steps（步骤）：模型为得出输出而应遵循的内部顺序。',
        ],
      },
      whySPECSIsUseful: {
        title: 'SPECS 框架为什么有用',
        content: [
          '**SPECS 框架适用于分析型、运营型和集成型任务，当你需要机器可用的结果而不仅仅是可读的文字时，它尤其有用。** 它减少了隐含假设，并使提示词的每个部分都明确化——这对生产环境的工作流至关重要。',
          '其常见的好处包括：',
        ],
        items: [
          '排查更简单，因为你可以单独调整或测试规范中的各个组成部分。',
          '得益于约束与示例，跨模型、跨运行的输出更稳定。',
          '与后续处理更契合，因为结构是事先已知的。',
        ],
      },
      badVsGoodExample: {
        title: '示例：糟糕的 SPECS 提示词 vs 优秀的 SPECS 提示词',
        content: [
          '**当你看到同一个任务用两种方式书写时，无结构请求与基于 SPECS 的请求之间的差异就一目了然。** 这里有一个从文本中提取信息的示例。',
          '**[糟糕的提示词]**',
          '"阅读这封客户邮件并总结要点。"',
          '**[优秀的提示词]**',
          '"Scope：分析单封客户支持邮件，提取与我们支持团队相关的关键信息。忽略营销或销售机会。Purpose：产出一份结构化摘要，可记录到我们的工单系统中，并帮助客服人员更快回复。Examples：输入：\'我今天尝试重置密码两次，链接两次都过期了……\' 输出：{"issue_type": "password_reset", "urgency": "medium", "summary": "重置链接在用户完成流程前就过期了"} Constraints：输出必须是有效的 JSON，包含 `issue_type`、`urgency` 和 `summary` 键。不要添加额外字段。`urgency` 必须为以下之一：low、medium、high。Steps：1) 识别主要问题，2) 根据影响和受挫程度推断紧急度，3) 写一份少于 25 个词的简明摘要。"',
          'SPECS 版本确切地定义了模型应产出什么、应如何推理，以及结果将如何被使用。',
        ],
      },
      whenToUse: {
        title: '何时使用 SPECS 框架',
        content: [
          '**当你的主要目标是结构化、可靠的输出，而非探索性的头脑风暴时，你应当使用 SPECS 框架。** 这通常包括：',
        ],
        items: [
          '将邮件、聊天或文档中的数据提取到固定模式。',
          '带有严格规则的代码转换、文档生成与重构。',
          '标题、指标和格式均已预定义的报告生成。',
          '任何 AI 输出直接馈入另一个系统或脚本的工作流。',
        ],
      },
      howPQImplements: {
        title: 'PromptQuorum 如何实现 SPECS 框架',
        content: [
          '**PromptQuorum 是一款多模型 AI 调度工具，它将 SPECS 框架作为内置提示词结构之一提供，使用户无需从零构建即可设计规范式提示词。** 当你在 PromptQuorum 中选择 SPECS 时，应用会显示用于 Scope、Purpose、Examples、Constraints 和 Steps 的专用字段，然后将它们组装成一条结构良好的指令。',
          '在 PromptQuorum 中，SPECS 框架让你能够：',
        ],
        items: [
          '在各自独立的字段中捕获每个组成部分，使规范保持可读且易于编辑。',
          '将同一个基于 SPECS 的提示词并行应用于多个模型，便于比较不同供应商如何处理严格的格式。',
          '为工单摘要、报告生成或代码审查等重复性工作流保存和共享 SPECS 模板。',
        ],
      },
      usingSpecsWithOthers: {
        title: '将 SPECS 与其他框架搭配使用',
        content: [
          '**你应当将 SPECS 框架定位为结构化输出的主干，并为互补任务将其与其他框架结合。** 一种实用的模式是：',
        ],
        items: [
          '凡是必须产出可预测结构或馈入工具的内容，都使用 SPECS。',
          '将 CRAFT 等创意型框架用于营销与文案。',
          '当你想看到中间推理时，使用分析–规划–执行（APE）等面向推理的框架。',
          '对不值得编写完整规范的快速任务，使用通用的单步框架。',
        ],
      },
      howToStart: {
        title: '如何使用 SPECS 框架',
        numberedItems: [
          '**Setting（环境）：提供关于环境、系统或领域的上下文。** 示例：\'你是一家医疗健康公司的数据分析师。患者隐私至关重要。所有查询都必须符合 HIPAA。\'',
          '**Problem statement（问题陈述）：说明你正在解决的具体问题。** 示例：\'识别在过去 90 天内用药依从性较低的患者群组。\'',
          '**Examples（示例）：提供 2–3 个良好输出的具体示例。** 对于分析，展示一张表格或示例发现。对于代码生成，展示遵循你风格的可运行代码。',
          '**Constraints（约束）：列出严格的规则与偏好。** 示例：\'仅使用 SQL（不使用 Python）。查询必须在 5 秒内执行完毕。输出必须匿名化（不含患者姓名）。\'',
          '**Style（风格）：指定偏好的语气、语言和格式。** 示例：\'技术受众。使用精确术语。返回一份 markdown 报告。\'',
        ],
      },
      relatedReading: {
        title: '相关阅读',
        items: [
          '[应该使用哪种提示框架？](/zh/prompt-engineering/which-prompt-framework-should-you-use)',
          '[CO-STAR 提示框架](/zh/prompt-engineering/co-star-framework)',
          '[RISEN 框架](/zh/prompt-engineering/risen-framework)',
          '[构建自己的提示框架](/zh/prompt-engineering/build-your-own-prompt-framework)',
        ],
      },
    },
  },
  pt: {
    theme: 'Frameworks',
    heroImage: '/images/specs-framework-overview-hero-pt.webp',
    title: 'O Framework SPECS',
    intro: 'O Framework SPECS é uma estrutura de prompts que transforma solicitações vagas em especificações precisas para que os grandes modelos de linguagem produzam resultados previsíveis e processáveis por máquinas. No PromptQuorum, o Framework SPECS está disponível como uma opção integrada que qualquer usuário pode selecionar e aplicar diretamente no aplicativo.',
    publishDate: '2026-03-24',
    readTime: '8 min de leitura',
    seoTitle: 'Framework SPECS 2026: estrutura de prompts precisa',
    metaDescription: 'SPECS: Scope, Purpose, Examples, Constraints, Steps. Estrutura detalhada de prompts com guia e boas práticas para resultados previsíveis.',
    educationalLevel: 'Intermediate',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'O Framework SPECS',
      description: 'Como funciona o Framework SPECS (Scope, Purpose, Examples, Constraints, Steps), quando usá-lo e como o PromptQuorum o oferece como opção integrada.',
      datePublished: '2026-03-24',
      dateModified: '2026-03-24',
      url: 'https://www.promptquorum.com/pt/prompt-engineering/specs-framework',
      inLanguage: 'pt-BR',
      keywords: ['SPECS Framework', 'Scope Purpose Examples Constraints Steps', 'frameworks de prompts', 'prompt engineering', 'prompts estruturados', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Frameworks de Prompts' },
        { '@type': 'Thing', name: 'Grandes Modelos de Linguagem' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
        { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
        { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
      ],
    },
    sections: {
      whatIsSPECS: {
        title: 'O que é o Framework SPECS',
        content: [
          '**O Framework SPECS é um padrão de prompts orientado à especificação que trata cada prompt como um mini documento de requisitos, e não como uma mensagem casual de chat.** É projetado para tarefas em que precisão, estrutura e repetibilidade importam mais do que criatividade aberta. O SPECS funciona bem com modelos como GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e modelos locais, pois elimina a ambiguidade das suas instruções.',
          'O SPECS é especialmente útil quando diferentes pessoas ou sistemas precisam executar o mesmo prompt e obter resultados consistentes. Ao transformar o prompt em uma especificação clara, você facilita a depuração de problemas, a comparação do comportamento dos modelos e a aplicação de padrões nos seus fluxos de trabalho.',
        ],
      },
      fiveComponents: {
        title: 'Os cinco componentes do SPECS',
        content: [
          '**Um bom prompt SPECS define todos os cinco componentes para que o modelo saiba exatamente o que fazer, por quê e como formatar a resposta.** Cada componente foca em uma parte diferente da instrução.',
          'As definições típicas são:',
        ],
        items: [
          'Scope (escopo): o que a tarefa abrange e o que explicitamente não abrange.',
          'Purpose (propósito): o objetivo subjacente ou a decisão que o resultado deve apoiar.',
          'Examples (exemplos): uma ou mais entradas e saídas de exemplo para ancorar o modelo.',
          'Constraints (restrições): regras rígidas como limites de tamanho, formatos ou comportamentos proibidos.',
          'Steps (passos): a sequência interna que o modelo deve seguir para chegar ao resultado.',
        ],
      },
      whySPECSIsUseful: {
        title: 'Por que o Framework SPECS é útil',
        content: [
          '**O Framework SPECS é útil para tarefas analíticas, operacionais e de integração em que você precisa de resultados utilizáveis por máquinas, não apenas de texto legível.** Ele reduz suposições ocultas e torna explícita cada parte do prompt — algo essencial para fluxos de trabalho em produção.',
          'Os benefícios comuns incluem:',
        ],
        items: [
          'Depuração mais fácil, pois você pode ajustar ou testar componentes individuais da especificação.',
          'Resultados mais estáveis entre modelos e execuções, graças às restrições e aos exemplos.',
          'Melhor adequação ao processamento posterior, já que a estrutura é conhecida com antecedência.',
        ],
      },
      badVsGoodExample: {
        title: 'Exemplo: prompt SPECS ruim vs bom',
        content: [
          '**A diferença entre uma solicitação sem estrutura e uma baseada em SPECS fica evidente quando você vê a mesma tarefa escrita das duas formas.** Aqui está um exemplo de extração de informações de um texto.',
          '**[Prompt ruim]**',
          '"Leia este e-mail de um cliente e resuma os pontos principais."',
          '**[Prompt bom]**',
          '"Scope: Analise um único e-mail de suporte ao cliente e extraia as informações-chave relevantes para nossa equipe de suporte. Ignore oportunidades de marketing ou vendas. Purpose: Produza um resumo estruturado que possa ser registrado no nosso sistema de tickets e usado pelos agentes para responder mais rapidamente. Examples: Entrada: \'Tentei redefinir minha senha duas vezes hoje e o link expirou nas duas tentativas…\' Saída: {"issue_type": "password_reset", "urgency": "medium", "summary": "Link de redefinição expira antes de o usuário concluir o processo"} Constraints: O resultado deve ser JSON válido com as chaves `issue_type`, `urgency` e `summary`. Não adicione campos extras. `urgency` deve ser um dos seguintes: low, medium, high. Steps: 1) Identifique o problema principal, 2) infira a urgência com base no impacto e na frustração, 3) escreva um resumo conciso com menos de 25 palavras."',
          'A versão SPECS define exatamente o que o modelo deve produzir, como deve raciocinar e como o resultado será utilizado.',
        ],
      },
      whenToUse: {
        title: 'Quando usar o Framework SPECS',
        content: [
          '**Você deve usar o Framework SPECS quando seu principal objetivo é uma saída estruturada e confiável, não uma exploração criativa.** Isso frequentemente inclui:',
        ],
        items: [
          'Extração de dados de e-mails, chats ou documentos para esquemas fixos.',
          'Transformação de código, geração de documentação e refatoração com regras rígidas.',
          'Geração de relatórios em que cabeçalhos, métricas e formatos estão predefinidos.',
          'Qualquer fluxo de trabalho em que o resultado da IA alimenta diretamente outro sistema ou script.',
        ],
      },
      howPQImplements: {
        title: 'Como o PromptQuorum implementa o Framework SPECS',
        content: [
          '**O PromptQuorum é uma ferramenta de despacho de IA multi-modelo que oferece o Framework SPECS como uma de suas estruturas de prompts integradas, para que os usuários possam criar prompts no estilo de especificação sem precisar construí-los do zero.** Quando você escolhe SPECS no PromptQuorum, o aplicativo exibe campos dedicados para Scope, Purpose, Examples, Constraints e Steps e os monta em uma única instrução bem estruturada.',
          'No PromptQuorum, o Framework SPECS permite que você:',
        ],
        items: [
          'Capture cada componente em um campo separado para que a especificação permaneça legível e fácil de editar.',
          'Aplique o mesmo prompt baseado em SPECS a vários modelos em paralelo, facilitando a comparação de como diferentes fornecedores lidam com formatos rígidos.',
          'Salve e compartilhe templates SPECS para fluxos de trabalho recorrentes, como resumos de tickets, geração de relatórios ou revisões de código.',
        ],
      },
      usingSpecsWithOthers: {
        title: 'Usando SPECS com outros frameworks',
        content: [
          '**Você deve posicionar o Framework SPECS como a espinha dorsal para saídas estruturadas e combiná-lo com outros frameworks para tarefas complementares.** Um padrão prático é:',
        ],
        items: [
          'Use SPECS para tudo que precisa produzir estruturas previsíveis ou alimentar ferramentas.',
          'Use frameworks criativos como CRAFT para marketing e redação publicitária.',
          'Use frameworks orientados ao raciocínio como Analyze–Plan–Execute (APE) quando quiser raciocínio intermediário visível.',
          'Use frameworks gerais de passo único para tarefas rápidas que não justificam uma especificação completa.',
        ],
      },
      howToStart: {
        title: 'Como usar o Framework SPECS',
        numberedItems: [
          '**Setting (contexto): Forneça contexto sobre o ambiente, o sistema ou o domínio.** Exemplo: \'Você é um analista de dados em uma empresa de saúde. A privacidade do paciente é crítica. Todas as consultas devem estar em conformidade com a LGPD.\'',
          '**Problem statement (problema): Declare o problema específico que está resolvendo.** Exemplo: \'Identifique quais coortes de pacientes apresentam baixa adesão à medicação nos últimos 90 dias.\'',
          '**Examples (exemplos): Forneça 2–3 exemplos concretos de boa saída.** Para análises, mostre uma tabela de exemplo ou descobertas. Para geração de código, mostre um código funcional que corresponda ao seu estilo.',
          '**Constraints (restrições): Liste regras e preferências rígidas.** Exemplo: \'Use apenas SQL (sem Python). A consulta deve ser executada em menos de 5 segundos. O resultado deve ser anonimizado (sem nomes de pacientes).\'',
          '**Style (estilo): Especifique tom, linguagem e preferências de formato.** Exemplo: \'Público técnico. Use terminologia precisa. Retorne como relatório em markdown.\'',
        ],
      },
      relatedReading: {
        title: 'Leitura relacionada',
        items: [
          '[Qual framework de prompt você deve usar?](/pt/prompt-engineering/which-prompt-framework-should-you-use)',
          '[CO-STAR Prompt Framework](/pt/prompt-engineering/co-star-framework)',
          '[RISEN Framework](/pt/prompt-engineering/risen-framework)',
          '[Construa seu próprio framework de prompts](/pt/prompt-engineering/build-your-own-prompt-framework)',
        ],
      },
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    theme: 'Frameworks',
    heroImage: '/images/specs-framework-overview-hero-ar.webp',
    title: 'إطار ⁨SPECS⁩ لهندسة البرومبت: دليل عملي',
    intro: 'يُوفّر إطار SPECS هيكلاً منضبطاً لكتابة البرومبتات من خلال خمسة مكوّنات: الموضوع، والهدف، والسياق، والمتطلبات، والأسلوب. يمكّن هذا الهيكل المطوّرين وفرق المحتوى من توحيد البرومبتات وتكرارها بدلاً من الاعتماد على الصياغة العشوائية.',
    publishDate: '2025-09-15',
    readTime: '8 دقائق للقراءة',
    seoTitle: 'إطار ⁨SPECS⁩ لهندسة البرومبت: ⁨5⁩ مكوّنات عملية',
    metaDescription: '⁨5⁩ مكوّنات تُحوّل البرومبتات الغامضة إلى مواصفات دقيقة: ⁨Scope⁩ و⁨Purpose⁩ و⁨Examples⁩ و⁨Constraints⁩ و⁨Steps⁩. مقارنة برومبتات جيدة وضعيفة في ⁨PromptQuorum⁩.',
    educationalLevel: 'Intermediate',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/ar/prompt-engineering/specs-framework',
      inLanguage: 'ar',
      headline: 'إطار SPECS لهندسة البرومبت: الموضوع، الهدف، السياق، المتطلبات، الأسلوب',
      description: 'دليل عملي لإطار SPECS لهندسة البرومبت — خمسة مكوّنات تضمن التوجيه الواضح والقابل للتكرار للنماذج اللغوية الكبيرة.',
      datePublished: '2025-09-15',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      keywords: ['هندسة البرومبت', 'إطار SPECS', 'البرومبتات المنظمة', 'نماذج اللغة الكبيرة', 'تصميم البرومبت'],
      'proficiencyLevel': 'Intermediate',
    },
    sections: {
      whatIsSPECS: {
        title: 'ما هو إطار SPECS؟',
        content: [
          '**SPECS اختصار لـ: الموضوع (Subject)، الهدف (Purpose)، السياق (Context)، المتطلبات (Requirements)، الأسلوب (Style).** يُعدّ هذا الإطار نهجاً منظّماً لكتابة البرومبتات يُضمن تحديد جميع المعلومات التي تحتاجها النماذج اللغوية الكبيرة قبل توليد الناتج.',
          'يعتمد معظم المستخدمين على برومبتات غير مكتملة تُغفل السياق أو القيود أو التفضيلات المتعلقة بالأسلوب، مما يُفضي إلى نتائج متذبذبة تستلزم مراجعات متعددة. يُعالج SPECS هذه الفجوة من خلال قائمة تحقق قابلة للتكرار.',
        ],
      },
      fiveComponents: {
        title: 'المكوّنات الخمسة لإطار SPECS',
        content: [
          '**يُحدّد كل مكوّن من مكوّنات SPECS نوعاً مختلفاً من المعلومات التي يحتاجها النموذج.** إغفال أي منها يُفضي إلى غموض يتعيّن على النموذج سدّه بافتراضات قد لا تتوافق مع توقعاتك.',
        ],
        items: [
          '**الموضوع (Subject):** الموضوع المركزي للمهمة — ما الذي يتناوله البرومبت تحديداً؟',
          '**الهدف (Purpose):** النتيجة المرجوّة من هذا الناتج — ما الذي ينبغي أن يُحقّقه؟',
          '**السياق (Context):** المعلومات الأساسية التي يحتاجها النموذج لتأطير الإجابة — من يستخدم هذا الناتج، وفي أي بيئة؟',
          '**المتطلبات (Requirements):** القيود الصارمة والمواصفات غير القابلة للتفاوض — ما الذي يجب أن يتضمّنه الناتج أو يستبعده؟',
          '**الأسلوب (Style):** النبرة والصياغة ومتطلبات التنسيق — كيف ينبغي أن يبدو الناتج؟',
        ],
      },
      whySPECSIsUseful: {
        title: 'لماذا إطار SPECS مفيد؟',
        content: [
          '**يُعالج SPECS السبب الجذري للبرومبتات ضعيفة الأداء: الغموض.** حين تغيب المعلومات من البرومبت، يلجأ النموذج إلى تخمين الهدف والجمهور والقيود والأسلوب المطلوب — وغالباً ما تكون تخميناته مغايرة لما تتوقعه.',
        ],
        items: [
          '**تقليل المراجعات:** يُحدّد SPECS التوقعات مسبقاً ليُنتج النموذج الناتج المطلوب من المحاولة الأولى.',
          '**توحيد البرومبتات:** حين تعتمد الفرق على هيكل موحّد، يُقلّص ذلك الاختلافات الشخصية في أسلوب الكتابة.',
          '**تسهيل التصحيح:** حين يُخفق برومبت ما، يُمكّنك وجود مكوّنات SPECS المُحدَّدة من تشخيص العنصر المفقود.',
          '**قابلية إعادة الاستخدام:** تغدو برومبتات SPECS قوالب يمكن تحديثها دون الحاجة إلى إعادة الكتابة من الصفر.',
        ],
      },
      badVsGoodExample: {
        title: 'مثال مقارن: برومبت ضعيف مقابل برومبت SPECS',
        content: [
          '**برومبت ضعيف:** "اكتب لي محتوى تسويقياً عن منتجنا."\n\n**برومبت SPECS:** "الموضوع: منصة SaaS لإدارة المشاريع للشركات الصغيرة. الهدف: توليد ثلاثة مقترحات قيمة مميّزة لصفحة الهبوط. السياق: المستخدمون المستهدفون هم أصحاب الشركات الصغيرة الذين يواجهون صعوبات في تتبع المهام بمساعدة الذكاء الاصطناعي. المتطلبات: يجب أن يشتمل كل مقترح على نتيجة قابلة للقياس؛ لا ذكر للمنافسين. الأسلوب: صياغة مباشرة ومركّزة، بجملتين لكل مقترح على الأكثر."\n\nيُلغي الإطار الغموض ويُمكّن النموذج من توليد ناتج يُلبّي المتطلبات الفعلية.',
        ],
      },
      whenToUse: {
        title: 'متى تستخدم إطار SPECS؟',
        content: [
          '**SPECS أكثر نفعاً حين تكون هناك متطلبات محدّدة وسياق لا يمكن للنموذج استنتاجه بمفرده.** للبرومبتات البسيطة التي تسعى لإجابات واقعية مباشرة، قد يُشكّل الهيكل الكامل تعقيداً غير ضروري.',
        ],
        items: [
          '**استخدمه** لإنشاء المحتوى الذي يستلزم نبرة وجمهوراً وتنسيقاً محدّداً.',
          '**استخدمه** لمهام التحليل التي تُحدّد مدى عمق أو اتساع ما يجب تغطيته.',
          '**استخدمه** لبرومبتات قوالب الفريق التي يُعيد أعضاء متعدّدون استخدامها.',
          '**تجنّبه** لأسئلة المعلومات الواقعية المباشرة، أو لاستكشاف ما إذا كان النموذج يعرف شيئاً ما.',
        ],
      },
      howPQImplements: {
        title: 'كيف يُطبّق PromptQuorum مبادئ SPECS؟',
        content: [
          '**تُحلّل أداة مقارنة البرومبتات في PromptQuorum برومبتاتك وفق أبعاد تتوافق مع مكوّنات SPECS.** يُبيّن لك ذلك الأبعاد التي يُؤدّي فيها نموذج ما أداءً أفضل من آخر بالنسبة لهيكل برومبت بعينه.',
        ],
        items: [
          'تحليل وضوح الموضوع عبر نماذج متعددة.',
          'مقارنة كيفية تفسير كل نموذج للمتطلبات.',
          'قياس الفجوة بين الأسلوب المُحدَّد والناتج الفعلي.',
          'تحديد المكوّن المسؤول عن الانحراف في الناتج.',
        ],
      },
      usingSpecsWithOthers: {
        title: 'استخدام SPECS مع أطر أخرى',
        content: [
          '**SPECS مكمّل لأطر البرومبتات الأخرى لا منافس لها.** يمكنك دمج مكوّنات SPECS مع CO-STAR أو CRAFT أو RTF — مستخدِماً SPECS لبناء المعلومات التفصيلية قبل تطبيق الأطر الأخرى.',
        ],
        items: [
          '**SPECS + CO-STAR:** استخدم SPECS لتجميع المعلومات، ثم رتّبها وفق هيكل CO-STAR لمهام الاستعلام المعقّدة.',
          '**SPECS + CRAFT:** ابدأ بتحديد الموضوع والهدف والجمهور باستخدام SPECS، ثم استكمل برومبت CRAFT بهذه التفاصيل.',
          '**SPECS + RTF:** حدّد المتطلبات التفصيلية لبرومبت RTF باستخدام SPECS مسبقاً.',
          '**القوالب الفريق:** صمّم نماذج SPECS وشاركها كقوالب للفريق لضمان التوحيد.',
        ],
      },
      howToStart: {
        title: 'كيف تبدأ مع إطار SPECS',
        numberedItems: [
          'اختر برومبتاً حالياً يُنتج نتائج غير متسقة أو يستلزم مراجعات متعددة.',
          'أضف المكوّنات الخمسة: الموضوع والهدف والسياق والمتطلبات والأسلوب. لا بأس إن اتخذت شكل ملاحظات موجزة في البداية.',
          'اختبر البرومبت المُعاد هيكلته في PromptQuorum عبر نماذج متعددة.',
          'قارن نتيجة البرومبت المُعاد هيكلته بالأصلي — لاحظ المكوّنات التي أسهمت أكثر في تحسين الناتج.',
          'أنشئ قالب SPECS لهذا النوع من المهام وشاركه مع فريقك لتوحيد أسلوب كتابة البرومبتات.',
        ],
      },
      relatedReading: {
        title: 'قراءة ذات صلة',
        items: [
          '[أي إطار طلب يجب استخدامه؟](/ar/prompt-engineering/which-prompt-framework-should-you-use)',
          '[إطار CO-STAR للطلبات](/ar/prompt-engineering/co-star-framework)',
          '[إطار RISEN](/ar/prompt-engineering/risen-framework)',
          '[بناء إطار طلباتك الخاص](/ar/prompt-engineering/build-your-own-prompt-framework)',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    theme: 'Frameworks',
    heroImage: '/images/specs-framework-overview-hero-ko.webp',
    title: 'SPECS 프레임워크',
    intro: 'SPECS 프레임워크는 모호한 요청을 정밀한 명세로 전환하여 대형 언어 모델이 예측 가능하고 파싱 가능한 출력을 생성하도록 하는 프롬프트 구조입니다. PromptQuorum에서 SPECS 프레임워크는 사용자가 앱에서 직접 선택하고 적용할 수 있는 기본 제공 옵션으로 제공됩니다.',
    publishDate: '2026-03-24',
    readTime: '8 min read',
    seoTitle: 'SPECS Framework 2026: 스타일, 목적, 예시',
    metaDescription: 'SPECS: Style, Purpose, Examples, Context, Specificity. 세부 프롬프트 구조. 출력물을 위한 가이드 및 모범 사례.',
    educationalLevel: 'Intermediate',
    leadAnswerBlock: 'SPECS 프레임워크는 모든 프롬프트를 간단한 채팅 메시지가 아닌 요구사항 문서처럼 작성하는 명세 우선 프롬프트 패턴입니다. Scope, Purpose, Examples, Constraints, Steps의 다섯 가지 구성 요소로 이루어져 있으며, 정확성과 반복성이 중요한 운영 워크플로에 특히 적합합니다.',
    sections: {
      whatIsSPECS: {
        title: 'SPECS 프레임워크란 무엇인가',
        content: [
          '**SPECS 프레임워크는 모든 프롬프트를 일상적인 채팅 메시지가 아닌 소형 요구사항 문서처럼 취급하는 명세 우선 프롬프트 패턴입니다.** 개방형 창의성보다 정확성, 구조, 반복성이 더 중요한 작업을 위해 설계되었습니다. SPECS는 GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, 그리고 로컬 모델과 같은 모델과 잘 작동하는데, 지시사항에서 모호성을 제거하기 때문입니다.',
          'SPECS는 서로 다른 사람이나 시스템이 동일한 프롬프트를 실행하여 일관된 결과를 얻어야 할 때 특히 유용합니다. 프롬프트를 명확한 명세로 전환함으로써 문제를 디버깅하고, 모델 동작을 비교하며, 워크플로 전반에 걸쳐 표준을 적용하기가 더 쉬워집니다.',
        ],
      },
      fiveComponents: {
        title: 'SPECS의 다섯 가지 구성 요소',
        content: [
          '**강력한 SPECS 프롬프트는 다섯 가지 구성 요소를 모두 정의하여 모델이 무엇을, 왜, 어떤 형식으로 답변해야 하는지 정확히 알 수 있도록 합니다.** 각 구성 요소는 지시사항의 서로 다른 부분에 초점을 맞춥니다.',
          '일반적인 정의는 다음과 같습니다:',
        ],
        items: [
          'Scope: 작업이 다루는 범위와 명시적으로 제외되는 내용.',
          'Purpose: 출력물이 지원해야 하는 근본적인 목표 또는 의사결정.',
          'Examples: 모델을 고정하기 위한 하나 이상의 샘플 입력 및 출력.',
          'Constraints: 길이 제한, 형식, 또는 금지된 동작과 같은 엄격한 규칙.',
          'Steps: 모델이 출력에 도달하기 위해 따라야 하는 내부 순서.',
        ],
      },
      whySPECSIsUseful: {
        title: 'SPECS 프레임워크가 유용한 이유',
        content: [
          '**SPECS 프레임워크는 단순히 읽기 쉬운 산문이 아닌 기계가 사용할 수 있는 결과물이 필요한 분석, 운영, 통합 작업에 유용합니다.** 숨겨진 가정을 줄이고 프롬프트의 모든 부분을 명시적으로 만들어 프로덕션 워크플로에 필수적입니다.',
          '주요 이점은 다음과 같습니다:',
        ],
        items: [
          '명세의 개별 구성 요소를 조정하거나 테스트할 수 있어 디버깅이 더 쉬워집니다.',
          'Constraints와 Examples 덕분에 모델과 실행에 걸쳐 더 안정적인 출력물을 얻을 수 있습니다.',
          '구조가 미리 알려져 있으므로 다운스트림 처리에 더 잘 맞습니다.',
        ],
      },
      badVsGoodExample: {
        title: '예시: 나쁜 프롬프트 vs 좋은 SPECS 프롬프트',
        content: [
          '**비구조적 요청과 SPECS 기반 요청의 차이는 같은 작업을 두 가지 방식으로 작성해 보면 명확해집니다.** 텍스트에서 정보를 추출하는 예시를 살펴보겠습니다.',
          '**[나쁜 프롬프트]**',
          '"이 고객 이메일을 읽고 주요 내용을 요약해 주세요."',
          '**[좋은 프롬프트]**',
          '"Scope: 단일 고객 지원 이메일을 분석하여 지원팀과 관련된 핵심 정보를 추출하십시오. 마케팅이나 영업 기회는 무시하십시오. Purpose: 티켓팅 시스템에 기록하고 상담원이 더 빠르게 응답하는 데 사용할 수 있는 구조화된 요약을 생성하십시오. Examples: 입력: \'오늘 비밀번호를 두 번 재설정하려고 했는데 링크가 두 번 다 만료되었습니다…\' 출력: {\"issue_type\": \"password_reset\", \"urgency\": \"medium\", \"summary\": \"사용자가 재설정을 완료하기 전에 비밀번호 재설정 링크가 만료됨\"} Constraints: 출력은 `issue_type`, `urgency`, `summary` 키를 가진 유효한 JSON이어야 합니다. 추가 필드를 더하지 마십시오. `urgency`는 low, medium, high 중 하나여야 합니다. Steps: 1) 주요 문제를 파악하고, 2) 영향과 불편함을 바탕으로 긴급도를 추론하며, 3) 25단어 이내의 간결한 요약을 작성하십시오."',
          'SPECS 버전은 모델이 출력해야 하는 내용, 사고 방식, 결과가 어떻게 사용될지를 정확히 정의합니다.',
        ],
      },
      whenToUse: {
        title: 'SPECS 프레임워크를 사용해야 할 때',
        content: [
          '**탐색적 브레인스토밍보다 구조화되고 신뢰할 수 있는 출력이 주요 목표일 때 SPECS 프레임워크를 사용해야 합니다.** 주요 사례는 다음과 같습니다:',
        ],
        items: [
          '이메일, 채팅, 또는 문서에서 고정된 스키마로의 데이터 추출.',
          '엄격한 규칙이 있는 코드 변환, 문서 생성, 리팩토링.',
          '섹션 제목, 지표, 형식이 미리 정해진 보고서 생성.',
          'AI 출력물이 다른 시스템이나 스크립트에 직접 입력되는 모든 워크플로.',
        ],
      },
      howPQImplements: {
        title: 'PromptQuorum이 SPECS 프레임워크를 구현하는 방법',
        content: [
          '**PromptQuorum은 사용자가 처음부터 직접 만들지 않고도 명세 스타일의 프롬프트를 설계할 수 있도록 SPECS 프레임워크를 기본 제공 프롬프트 구조 중 하나로 제공하는 멀티모델 AI 디스패치 도구입니다.** PromptQuorum에서 SPECS를 선택하면 앱이 Scope, Purpose, Examples, Constraints, Steps에 대한 전용 필드를 표시하고 이를 하나의 잘 구조화된 지시사항으로 조합합니다.',
          'PromptQuorum 내에서 SPECS 프레임워크를 사용하면:',
        ],
        items: [
          '각 구성 요소를 별도의 필드에 입력하여 명세를 읽기 쉽고 편집하기 쉬운 상태로 유지할 수 있습니다.',
          '동일한 SPECS 기반 프롬프트를 여러 모델에 병렬로 적용하여 서로 다른 공급업체가 엄격한 형식을 어떻게 처리하는지 쉽게 비교할 수 있습니다.',
          '티켓 요약, 보고서 생성, 코드 리뷰 등 반복적인 워크플로를 위한 SPECS 템플릿을 저장하고 공유할 수 있습니다.',
        ],
      },
      usingSpecsWithOthers: {
        title: '다른 프레임워크와 SPECS 함께 사용하기',
        content: [
          '**SPECS 프레임워크는 구조화된 출력의 근간으로 활용하고, 보완적인 작업을 위해 다른 프레임워크와 결합해야 합니다.** 실용적인 패턴은 다음과 같습니다:',
        ],
        items: [
          '예측 가능한 구조를 생성하거나 도구에 입력되어야 하는 모든 작업에는 SPECS를 사용하십시오.',
          '마케팅 및 카피라이팅에는 CRAFT와 같은 창의적 프레임워크를 사용하십시오.',
          '가시적인 중간 추론을 원할 때는 Analyze–Plan–Execute (APE)와 같은 추론 지향 프레임워크를 사용하십시오.',
          '전체 명세를 작성할 필요가 없는 빠른 작업에는 단일 단계의 일반 프레임워크를 사용하십시오.',
        ],
      },
      howToStart: {
        title: 'SPECS 프레임워크 사용 방법',
        numberedItems: [
          '**Setting: 환경, 시스템, 또는 도메인에 대한 맥락을 제공하십시오.** 예시: \'당신은 의료 회사의 데이터 분석가입니다. 환자 개인 정보 보호가 매우 중요합니다. 모든 쿼리는 HIPAA를 준수해야 합니다.\'',
          '**Problem statement: 해결하고자 하는 구체적인 문제를 명시하십시오.** 예시: \'지난 90일 동안 약물 복용 순응도가 낮은 환자 코호트를 파악하십시오.\'',
          '**Examples: 좋은 출력의 구체적인 예시를 2–3개 제공하십시오.** 분석의 경우 샘플 출력 테이블이나 결과를 보여주십시오. 코드 생성의 경우 스타일에 맞는 작동하는 코드를 보여주십시오.',
          '**Constraints: 엄격한 규칙과 선호사항을 나열하십시오.** 예시: \'SQL만 사용하십시오 (Python 불가). 쿼리는 5초 이내에 실행되어야 합니다. 출력물은 익명화되어야 합니다 (환자 이름 불가).\'',
          '**Style: 어조, 언어, 형식 선호사항을 지정하십시오.** 예시: \'기술적인 독자 대상. 정확한 용어를 사용하십시오. 마크다운 보고서로 반환하십시오.\'',
        ],
      },
      relatedReading: {
        title: '관련 자료',
        items: [
          '[어떤 프롬프트 프레임워크를 사용해야 합니까?](/ko/prompt-engineering/which-prompt-framework-should-you-use)',
          '[CO-STAR 프롬프트 프레임워크](/ko/prompt-engineering/co-star-framework)',
          '[RISEN 프레임워크](/ko/prompt-engineering/risen-framework)',
          '[나만의 프롬프트 프레임워크 만들기](/ko/prompt-engineering/build-your-own-prompt-framework)',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    theme: 'Frameworks',
    heroImage: '/images/specs-framework-overview-hero-fr.webp',
    title: 'Le Framework SPECS',
    intro: 'Le Framework SPECS est une structure de prompt qui transforme des demandes vagues en spécifications précises, afin que les grands modèles de langage produisent des sorties prévisibles et exploitables. Dans PromptQuorum, le Framework SPECS est proposé comme option intégrée que tout utilisateur peut sélectionner et appliquer directement dans l\'application.',
    publishDate: '2026-03-24',
    readTime: '8 min de lecture',
    seoTitle: 'Framework SPECS 2026 : structure de prompt précise',
    metaDescription: 'SPECS : Scope, Purpose, Examples, Constraints, Steps. Structure de prompt détaillée avec guide et bonnes pratiques pour des sorties prévisibles.',
    educationalLevel: 'Intermediate',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Le Framework SPECS',
      description: 'Comment fonctionne le Framework SPECS (Scope, Purpose, Examples, Constraints, Steps), quand l\'utiliser et comment PromptQuorum le propose en option intégrée.',
      datePublished: '2026-03-24',
      dateModified: '2026-03-24',
      keywords: ['SPECS Framework', 'Scope Purpose Examples Constraints Steps', 'prompt frameworks', 'prompt engineering', 'structured prompts', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Frameworks de prompt' },
        { '@type': 'Thing', name: 'Grands modèles de langage' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
        { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
        { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
      ],
    },
    sections: {
      whatIsSPECS: {
        title: 'Ce qu\'est le Framework SPECS',
        content: [
          '**Le Framework SPECS est un modèle de prompt axé sur la spécification, qui traite chaque prompt comme un mini cahier des charges plutôt que comme un message de chat informel.** Il est conçu pour les tâches où la précision, la structure et la reproductibilité comptent davantage que la créativité libre. SPECS fonctionne bien avec des modèles comme GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et les modèles locaux, car il élimine l\'ambiguïté de vos instructions.',
          'SPECS est particulièrement utile lorsque différentes personnes ou différents systèmes doivent exécuter le même prompt et obtenir des résultats cohérents. En transformant le prompt en une spécification claire, vous facilitez le débogage, la comparaison du comportement des modèles et l\'application de standards dans vos workflows.',
        ],
      },
      fiveComponents: {
        title: 'Les cinq composants de SPECS',
        content: [
          '**Un bon prompt SPECS définit les cinq composants, afin que le modèle sache exactement quoi faire, pourquoi et comment formater la réponse.** Chaque composant porte sur une partie différente de l\'instruction.',
          'Les définitions habituelles sont :',
        ],
        items: [
          'Scope (portée) : ce que la tâche couvre et ce qu\'elle exclut explicitement.',
          'Purpose (objectif) : le but sous-jacent ou la décision que la sortie doit soutenir.',
          'Examples (exemples) : une ou plusieurs paires entrée-sortie pour ancrer le modèle.',
          'Constraints (contraintes) : règles strictes comme les limites de longueur, les formats ou les comportements interdits.',
          'Steps (étapes) : la séquence interne que le modèle doit suivre pour aboutir à la sortie.',
        ],
      },
      whySPECSIsUseful: {
        title: 'Pourquoi le Framework SPECS est utile',
        content: [
          '**Le Framework SPECS est utile pour les tâches analytiques, opérationnelles et d\'intégration, où vous avez besoin de résultats exploitables par une machine, et pas seulement de texte lisible.** Il réduit les hypothèses implicites et rend explicite chaque partie du prompt, ce qui est essentiel pour les workflows en production.',
          'Ses avantages courants sont :',
        ],
        items: [
          'Un débogage plus simple, car vous pouvez ajuster ou tester des composants individuels de la spécification.',
          'Des sorties plus stables d\'un modèle et d\'une exécution à l\'autre, grâce aux contraintes et aux exemples.',
          'Une meilleure adéquation au traitement en aval, puisque la structure est connue à l\'avance.',
        ],
      },
      badVsGoodExample: {
        title: 'Exemple : mauvais vs bon prompt SPECS',
        content: [
          '**La différence entre une demande non structurée et une demande fondée sur SPECS devient évidente lorsque vous voyez la même tâche rédigée des deux façons.** Voici un exemple d\'extraction d\'informations à partir d\'un texte.',
          '**[Mauvais prompt]**',
          '"Lisez cet e-mail client et résumez les points principaux."',
          '**[Bon prompt]**',
          '"Scope : Analysez un unique e-mail de support client et extrayez les informations clés pertinentes pour notre équipe de support. Ignorez les opportunités de marketing ou de vente. Purpose : Produisez un résumé structuré pouvant être consigné dans notre système de tickets et utilisé par les agents pour répondre plus vite. Examples : Entrée : \'J\'ai essayé de réinitialiser mon mot de passe deux fois aujourd\'hui et le lien a expiré à chaque fois…\' Sortie : {"issue_type": "password_reset", "urgency": "medium", "summary": "Le lien de réinitialisation expire avant que l\'utilisateur ne termine le processus"} Constraints : La sortie doit être un JSON valide avec les clés `issue_type`, `urgency` et `summary`. N\'ajoutez aucun champ supplémentaire. `urgency` doit être l\'une des valeurs : low, medium, high. Steps : 1) Identifiez le problème principal, 2) déduisez l\'urgence d\'après l\'impact et la frustration, 3) rédigez un résumé concis de moins de 25 mots."',
          'La version SPECS définit exactement ce que le modèle doit produire, comment il doit raisonner et comment le résultat sera utilisé.',
        ],
      },
      whenToUse: {
        title: 'Quand utiliser le Framework SPECS',
        content: [
          '**Vous devriez utiliser le Framework SPECS lorsque votre objectif premier est une sortie structurée et fiable, plutôt qu\'un brainstorming exploratoire.** Cela inclut souvent :',
        ],
        items: [
          'L\'extraction de données à partir d\'e-mails, de chats ou de documents vers des schémas fixes.',
          'La transformation de code, la génération de documentation et le refactoring avec des règles strictes.',
          'La génération de rapports où les titres de section, les métriques et les formats sont prédéfinis.',
          'Tout workflow où la sortie de l\'IA alimente directement un autre système ou script.',
        ],
      },
      howPQImplements: {
        title: 'Comment PromptQuorum met en œuvre le Framework SPECS',
        content: [
          '**PromptQuorum est un outil de dispatch d\'IA multi-modèle qui propose le Framework SPECS comme l\'une de ses structures de prompt intégrées, afin que les utilisateurs conçoivent des prompts de type spécification sans les construire de zéro.** Lorsque vous choisissez SPECS dans PromptQuorum, l\'application affiche des champs dédiés pour Scope, Purpose, Examples, Constraints et Steps, puis les assemble en une seule instruction bien structurée.',
          'Au sein de PromptQuorum, le Framework SPECS vous permet de :',
        ],
        items: [
          'Saisir chaque composant dans un champ distinct, pour que la spécification reste lisible et facile à modifier.',
          'Appliquer le même prompt fondé sur SPECS à plusieurs modèles en parallèle, ce qui facilite la comparaison de la façon dont les différents fournisseurs gèrent les formats stricts.',
          'Enregistrer et partager des modèles SPECS pour des workflows récurrents comme les résumés de tickets, la génération de rapports ou les revues de code.',
        ],
      },
      usingSpecsWithOthers: {
        title: 'Combiner SPECS avec d\'autres frameworks',
        content: [
          '**Vous devriez positionner le Framework SPECS comme l\'ossature des sorties structurées et le combiner avec d\'autres frameworks pour les tâches complémentaires.** Un schéma pratique est :',
        ],
        items: [
          'Utilisez SPECS pour tout ce qui doit produire des structures prévisibles ou alimenter des outils.',
          'Utilisez des frameworks créatifs comme CRAFT pour le marketing et la rédaction publicitaire.',
          'Utilisez des frameworks orientés raisonnement comme Analyze–Plan–Execute (APE) lorsque vous voulez un raisonnement intermédiaire visible.',
          'Utilisez des frameworks généralistes en une seule étape pour les tâches rapides qui ne justifient pas une spécification complète.',
        ],
      },
      howToStart: {
        title: 'Comment utiliser le Framework SPECS',
        numberedItems: [
          '**Setting (cadre) : Fournissez le contexte sur l\'environnement, le système ou le domaine.** Exemple : \'Vous êtes analyste de données dans une entreprise de santé. La confidentialité des patients est critique. Toutes les requêtes doivent respecter la HIPAA.\'',
          '**Problem statement (énoncé du problème) : Formulez le problème précis que vous résolvez.** Exemple : \'Identifiez les cohortes de patients présentant une faible observance médicamenteuse sur les 90 derniers jours.\'',
          '**Examples (exemples) : Fournissez 2–3 exemples concrets de bonne sortie.** Pour une analyse, montrez un tableau ou des résultats d\'exemple. Pour la génération de code, montrez du code fonctionnel conforme à votre style.',
          '**Constraints (contraintes) : Listez les règles strictes et les préférences.** Exemple : \'Utilisez uniquement SQL (pas de Python). La requête doit s\'exécuter en moins de 5 secondes. La sortie doit être anonymisée (aucun nom de patient).\'',
          '**Style : Précisez le ton, la langue et le format souhaités.** Exemple : \'Public technique. Employez une terminologie précise. Renvoyez un rapport au format markdown.\'',
        ],
      },
      relatedReading: {
        title: 'Lectures complémentaires',
        items: [
          '[Quel framework de prompt utiliser ?](/fr/prompt-engineering/which-prompt-framework-should-you-use)',
          '[Framework de prompt CO-STAR](/fr/prompt-engineering/co-star-framework)',
          '[Framework RISEN](/fr/prompt-engineering/risen-framework)',
          '[Créez votre propre framework de prompt](/fr/prompt-engineering/build-your-own-prompt-framework)',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    theme: 'Frameworks',
    heroImage: '/images/specs-framework-overview-hero-ja.webp',
    title: 'SPECS フレームワーク',
    intro: 'SPECS フレームワークは、曖昧なリクエストを精密な仕様に変換し、大規模言語モデルが予測可能で解析しやすい出力を生成できるようにするプロンプト構造です。PromptQuorum では、SPECS フレームワークが組み込みオプションとして提供されており、どのユーザーもアプリ内で直接選択して適用できます。',
    publishDate: '2026-03-24',
    readTime: '8分で読める',
    seoTitle: 'SPECS フレームワーク 2026：精密なプロンプト構造',
    metaDescription: 'SPECS：Scope、Purpose、Examples、Constraints、Steps。予測可能な出力を得るためのガイドとベストプラクティスを備えた詳細なプロンプト構造。',
    educationalLevel: 'Intermediate',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SPECS フレームワーク',
      description: 'SPECS フレームワーク（Scope、Purpose、Examples、Constraints、Steps）の仕組み、使うべきタイミング、そして PromptQuorum がどのように SPECS を組み込みオプションとして提供しているか。',
      datePublished: '2026-03-24',
      dateModified: '2026-03-24',
      url: 'https://www.promptquorum.com/ja/prompt-engineering/specs-framework',
      inLanguage: 'ja',
      keywords: ['SPECS Framework', 'Scope Purpose Examples Constraints Steps', 'prompt frameworks', 'prompt engineering', 'structured prompts', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'プロンプトフレームワーク' },
        { '@type': 'Thing', name: '大規模言語モデル' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
        { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
        { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
      ],
    },
    sections: {
      whatIsSPECS: {
        title: 'SPECS フレームワークとは',
        content: [
          '**SPECS フレームワークは、すべてのプロンプトを気軽なチャットメッセージではなく小さな要件定義書のように扱う、仕様重視のプロンプトパターンです。** 正確性・構造・再現性が自由な創造性よりも重要なタスク向けに設計されています。SPECS は指示から曖昧さを取り除くため、GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、そしてローカルモデルなどのモデルと相性が良いです。',
          'SPECS は、異なる担当者やシステムが同じプロンプトを実行して一貫した結果を得る必要がある場合に特に役立ちます。プロンプトを明確な仕様に変えることで、問題のデバッグ、モデル挙動の比較、ワークフロー全体での基準の徹底が容易になります。',
        ],
      },
      fiveComponents: {
        title: 'SPECS の 5 つの構成要素',
        content: [
          '**優れた SPECS プロンプトは 5 つの構成要素すべてを定義し、モデルが何を、なぜ、どのように回答を整形すべきかを正確に把握できるようにします。** 各構成要素は指示の異なる部分に焦点を当てます。',
          '一般的な定義は次のとおりです。',
        ],
        items: [
          'Scope（範囲）：タスクが何をカバーし、何を明示的にカバーしないか。',
          'Purpose（目的）：出力が支援すべき根本的な目標や意思決定。',
          'Examples（例）：モデルを方向付けるための 1 つ以上のサンプル入力と出力。',
          'Constraints（制約）：長さ制限、フォーマット、禁止する挙動などの厳格なルール。',
          'Steps（手順）：モデルが出力に至るために従うべき内部的な順序。',
        ],
      },
      whySPECSIsUseful: {
        title: 'SPECS フレームワークが役立つ理由',
        content: [
          '**SPECS フレームワークは、読みやすい文章だけでなく機械で利用できる結果が必要な、分析・運用・統合系のタスクに役立ちます。** 隠れた前提を減らし、プロンプトのあらゆる部分を明示化するため、本番ワークフローに不可欠です。',
          'よくあるメリットは次のとおりです。',
        ],
        items: [
          '仕様の個々の構成要素を調整・テストできるため、デバッグが容易になります。',
          '制約と例のおかげで、モデルや実行をまたいで出力がより安定します。',
          '構造が事前に分かっているため、後続処理との相性が良くなります。',
        ],
      },
      badVsGoodExample: {
        title: '例：悪い SPECS プロンプト vs 良い SPECS プロンプト',
        content: [
          '**同じタスクを両方の書き方で見ると、構造のないリクエストと SPECS ベースのリクエストの違いが一目瞭然になります。** ここでは、テキストから情報を抽出する例を示します。',
          '**[悪いプロンプト]**',
          '「この顧客メールを読んで、要点を要約してください。」',
          '**[良いプロンプト]**',
          '"Scope：単一の顧客サポートメールを分析し、サポートチームに関連する重要情報を抽出します。マーケティングや営業の機会は無視します。Purpose：チケットシステムに記録でき、エージェントがより速く返信するために使える構造化された要約を作成します。Examples：入力：\'今日パスワードを2回リセットしようとしましたが、リンクが両方とも期限切れになりました…\' 出力：{"issue_type": "password_reset", "urgency": "medium", "summary": "ユーザーがリセットを完了する前にパスワードリセットのリンクが期限切れになる"} Constraints：出力は `issue_type`、`urgency`、`summary` のキーを持つ有効な JSON でなければなりません。追加のフィールドは加えないでください。`urgency` は low、medium、high のいずれかでなければなりません。Steps：1) 主要な問題を特定する、2) 影響と不満の度合いに基づいて緊急度を推測する、3) 25 語未満の簡潔な要約を書く。"',
          'SPECS 版では、モデルが何を出力すべきか、どのように考えるべきか、そして結果がどのように使われるかが正確に定義されています。',
        ],
      },
      whenToUse: {
        title: 'SPECS フレームワークを使うタイミング',
        content: [
          '**主な目標が探索的なブレインストーミングではなく、構造化された信頼性の高い出力である場合は、SPECS フレームワークを使うべきです。** これには次のようなものが多く含まれます。',
        ],
        items: [
          'メール、チャット、ドキュメントから固定スキーマへのデータ抽出。',
          '厳格なルールに基づくコード変換、ドキュメント生成、リファクタリング。',
          '見出し、指標、フォーマットが事前定義されたレポート生成。',
          'AI の出力が別のシステムやスクリプトに直接送り込まれるあらゆるワークフロー。',
        ],
      },
      howPQImplements: {
        title: 'PromptQuorum が SPECS フレームワークをどう実装しているか',
        content: [
          '**PromptQuorum はマルチモデルの AI ディスパッチツールで、SPECS フレームワークを組み込みのプロンプト構造の 1 つとして提供し、ユーザーがゼロから作らなくても仕様形式のプロンプトを設計できるようにします。** PromptQuorum で SPECS を選ぶと、アプリは Scope、Purpose、Examples、Constraints、Steps 専用のフィールドを表示し、それらを 1 つの構造化された指示にまとめます。',
          'PromptQuorum 内では、SPECS フレームワークによって次のことができます。',
        ],
        items: [
          '各構成要素を別々のフィールドに記録し、仕様を読みやすく編集しやすい状態に保ちます。',
          '同じ SPECS ベースのプロンプトを複数のモデルに並行して適用し、各ベンダーが厳格なフォーマットをどう扱うかを簡単に比較できます。',
          'チケット要約、レポート生成、コードレビューなどの繰り返し行うワークフロー向けに SPECS テンプレートを保存・共有できます。',
        ],
      },
      usingSpecsWithOthers: {
        title: 'SPECS を他のフレームワークと組み合わせて使う',
        content: [
          '**SPECS フレームワークは構造化された出力の土台として位置づけ、補完的なタスクには他のフレームワークと組み合わせるべきです。** 実用的なパターンは次のとおりです。',
        ],
        items: [
          '予測可能な構造を生み出す必要があるもの、またはツールに送り込む必要があるものすべてに SPECS を使います。',
          'マーケティングやコピーライティングには CRAFT のような創造的なフレームワークを使います。',
          '途中の推論を可視化したい場合は、Analyze–Plan–Execute（APE）のような推論志向のフレームワークを使います。',
          '完全な仕様を書くほどではない手軽なタスクには、単一ステップの汎用フレームワークを使います。',
        ],
      },
      howToStart: {
        title: 'SPECS フレームワークの使い方',
        numberedItems: [
          '**Setting（設定）：環境、システム、ドメインに関するコンテキストを提供します。** 例：\'あなたはヘルスケア企業のデータアナリストです。患者のプライバシーが最重要です。すべてのクエリは HIPAA に準拠しなければなりません。\'',
          '**Problem statement（問題定義）：解決しようとしている具体的な問題を述べます。** 例：\'直近 90 日間で服薬アドヒアランスが低い患者コホートを特定してください。\'',
          '**Examples（例）：良い出力の具体例を 2〜3 個提供します。** 分析の場合は、サンプルの出力テーブルや所見を示します。コード生成の場合は、あなたのスタイルに合った動作するコードを示します。',
          '**Constraints（制約）：厳格なルールと好みを列挙します。** 例：\'SQL のみを使用（Python は不可）。クエリは 5 秒未満で実行される必要があります。出力は匿名化される必要があります（患者名なし）。\'',
          '**Style（スタイル）：好みのトーン、言語、フォーマットを指定します。** 例：\'技術的な読者。正確な用語を使用。markdown レポートとして返してください。\'',
        ],
      },
      relatedReading: {
        title: '関連記事',
        items: [
          '[どのプロンプトフレームワークを使うべきか？](/ja/prompt-engineering/which-prompt-framework-should-you-use)',
          '[CO-STAR プロンプトフレームワーク](/ja/prompt-engineering/co-star-framework)',
          '[RISEN フレームワーク](/ja/prompt-engineering/risen-framework)',
          '[独自のプロンプトフレームワークを作る](/ja/prompt-engineering/build-your-own-prompt-framework)',
        ],
      },
    },
  },
};
