// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: specs-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
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
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    theme: 'Frameworks',
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
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
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
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    theme: 'Frameworks',
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
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
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
    },
  },
  pt: {
    theme: 'Frameworks',
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
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
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
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    theme: 'Frameworks',
    title: 'إطار SPECS لهندسة البرومبت: دليل عملي',
    intro: 'يُوفّر إطار SPECS هيكلاً منضبطاً لكتابة البرومبتات من خلال خمسة مكوّنات: الموضوع، والهدف، والسياق، والمتطلبات، والأسلوب. يمكّن هذا الهيكل المطوّرين وفرق المحتوى من توحيد البرومبتات وتكرارها بدلاً من الاعتماد على الصياغة العشوائية.',
    publishDate: '2025-09-15',
    readTime: '8 دقائق للقراءة',
    seoTitle: 'إطار SPECS: الموضوع، الهدف، السياق، المتطلبات، الأسلوب | PromptQuorum',
    metaDescription: 'تعرّف على إطار SPECS لهندسة البرومبت — خمسة مكوّنات تضمن وضوح التوجيهات وقابليتها للتكرار. أمثلة عملية مقارنة بين البرومبتات الجيدة والضعيفة.',
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
    },
  },
};
