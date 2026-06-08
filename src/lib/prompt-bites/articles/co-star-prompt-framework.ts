import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Prompt Engineering',
    title: 'What Is the CO-STAR Prompt Framework?',
    seoTitle: 'CO-STAR Framework 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'CO-STAR is a six-part prompt framework: Context, Objective, Style, Tone, Audience, Response. Structures prompts for consistent output in 60–120 words.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers and writers learning structured prompting frameworks',
    parentArticle: '/prompt-engineering/co-star-framework',
    siblingBites: ['best-llm-right-now'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'What is the CO-STAR prompt framework?',
        answer: 'CO-STAR is a six-part prompt structure for consistent LLM output: Context (background), Objective (task), Style (writing style), Tone (emotional register), Audience (who reads it), Response (output format). It helps produce targeted outputs by making every constraint explicit and reduces ambiguity in instructions.',
        bullets: [
          'C = Context: background information the LLM needs',
          'O = Objective: the specific task to complete',
          'S/T/A = Style, Tone, Audience: how and for whom to write',
          'R = Response: format (list, paragraph, JSON, etc.)',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Was ist das CO-STAR-Prompt-Framework?',
        answer: 'CO-STAR ist eine sechsteilige Prompt-Struktur für konsistente LLM-Ausgabe: Context (Hintergrund), Objective (Aufgabe), Style (Schreibstil), Tone (emotionaler Register), Audience (Leserschaft), Response (Ausgabeformat). Es produziert zielgerichtete Ausgaben, indem jede Einschränkung explizit gemacht wird und Mehrdeutigkeit in Anweisungen reduziert wird.',
        bullets: [
          'C = Context: Hintergrundinformationen, die das LLM benötigt',
          'O = Objective: die spezifische zu erledigende Aufgabe',
          'S/T/A = Style, Tone, Audience: wie und für wen geschrieben wird',
          'R = Response: Format (Liste, Absatz, JSON usw.)',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Qu\'est-ce que le framework de prompt CO-STAR ?',
        answer: 'CO-STAR est une structure de prompt en six parties pour sorties LLM cohérentes : Context (contexte), Objective (objectif), Style (style d\'écriture), Tone (registre émotionnel), Audience (lecteurs cibles), Response (format de sortie). Elle produit des sorties ciblées en rendant chaque contrainte explicite et en réduisant l\'ambiguïté des instructions.',
        bullets: [
          'C = Context : informations de contexte dont le LLM a besoin',
          'O = Objective : la tâche spécifique à accomplir',
          'S/T/A = Style, Tone, Audience : comment et pour qui écrire',
          'R = Response : format (liste, paragraphe, JSON, etc.)',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'CO-STARプロンプトフレームワークとは何ですか？',
        answer: 'CO-STARは一貫したLLM出力のための6部構成プロンプト構造です：Context（背景）、Objective（目標）、Style（文体）、Tone（感情的調子）、Audience（読者）、Response（出力形式）。すべての制約を明示してターゲット出力を生成し、指示の曖昧性を低減します。',
        bullets: [
          'C = Context：LLMが必要とする背景情報',
          'O = Objective：完了すべき具体的なタスク',
          'S/T/A = Style、Tone、Audience：どのように、誰のために書くか',
          'R = Response：形式（リスト、段落、JSONなど）',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'CO-STAR 提示框架是什么？',
        answer: 'CO-STAR 是六部分提示结构，用于一致的 LLM 输出：Context（背景）、Objective（目标）、Style（写作风格）、Tone（情感基调）、Audience（受众）、Response（输出格式）。通过明确所有约束来产生有针对性的输出，减少指示中的歧义。',
        bullets: [
          'C = Context：LLM 需要的背景信息',
          'O = Objective：要完成的具体任务',
          'S/T/A = Style、Tone、Audience：如何写以及为谁写',
          'R = Response：格式（列表、段落、JSON 等）',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CO-STAR stands for Context, Objective, Style, Tone, Audience, Response — a six-component prompt structure for consistent output',
          'The framework forces you to make every assumption explicit, which reduces vague or misaligned responses from large language models',
          'CO-STAR works best for document drafting, customer-facing emails, and any task requiring a specific voice or format',
          'For simple factual lookups or one-line commands, CO-STAR adds overhead without meaningful quality gain',
        ],
      },
      body1: {
        title: 'What CO-STAR Stands For',
        content: [
          '<strong>CO-STAR is a six-part prompt structure: Context, Objective, Style, Tone, Audience, Response format. As of May 2026, it is one of the most-cited frameworks for structuring complex LLM prompts because it forces the writer to specify each dimension that affects output quality.</strong>',
          'The framework was developed to solve a recurring problem in prompt engineering: prompts that are technically clear but miss implicit constraints. When you write "Summarize this document," the model makes assumptions about length, formality, audience, and format. CO-STAR replaces those assumptions with explicit instructions.',
          'Each component targets a different dimension of the output. Context anchors the model in the relevant situation. Objective pins the exact deliverable. Style and Tone control the writing register. Audience calibrates vocabulary and complexity. Response specifies the structural format.',
        ],
        columns: ['Letter', 'Element', 'Purpose'],
        rows: [
          { 'Letter': 'C', 'Element': 'Context', 'Purpose': 'Background information the model needs' },
          { 'Letter': 'O', 'Element': 'Objective', 'Purpose': 'What you want the model to do' },
          { 'Letter': 'S', 'Element': 'Style', 'Purpose': 'Writing style (formal, casual, technical, etc.)' },
          { 'Letter': 'T', 'Element': 'Tone', 'Purpose': 'Emotional register (neutral, encouraging, direct)' },
          { 'Letter': 'A', 'Element': 'Audience', 'Purpose': 'Who reads the output (expert, beginner, executive)' },
          { 'Letter': 'R', 'Element': 'Response format', 'Purpose': 'Structure (bullets, paragraphs, JSON, table)' },
        ],
      },
      body2: {
        title: 'When CO-STAR Beats Quick Prompts',
        content: [
          'CO-STAR is not the right tool for every task. It adds the most value for document creation, customer-facing communications, formal reports, and any output where voice, format, and audience consistency matter. A well-structured CO-STAR prompt typically takes 60–120 words of setup but eliminates multiple rounds of correction.',
          'Consider a real example. <strong>BEFORE:</strong> "Write an email to the team about the project delay." <strong>AFTER:</strong> "Context: Q2 project is 3 weeks behind schedule due to vendor delays. Objective: Inform the team and reassure them. Style: Professional. Tone: Empathetic, solution-focused. Audience: 12 engineers, varied seniority. Response: 150-word email with subject line." The CO-STAR version produces a more specific, usable first draft.',
          '<strong>For simple factual queries, code generation, or one-shot lookups, CO-STAR adds overhead without meaningful quality gain.</strong> Asking "What does the Python `zip()` function do?" does not benefit from a six-component structure. Reserve CO-STAR for tasks where the output will be read by real people in a specific context. For a deeper look at prompt patterns that pair well with CO-STAR, see the <a href="/prompt-engineering/co-star-framework" class="text-primary hover:underline">full CO-STAR prompt engineering guide</a> covering advanced examples and common failure modes.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About the CO-STAR Framework',
        faqs: [
          {
            q: 'How does CO-STAR differ from other prompt frameworks like RISEN or TRACE?',
            a: 'CO-STAR focuses specifically on output characteristics — style, tone, audience, and format. RISEN (Role, Instructions, Steps, End Goal, Narrowing) emphasizes process and constraints. TRACE (Task, Role, Audience, Context, Examples) overlaps heavily with CO-STAR. The key advantage of CO-STAR is its explicit separation of Style and Tone, which most other frameworks merge into a single "voice" parameter.',
          },
          {
            q: 'What is the most important component in CO-STAR?',
            a: 'The Objective component has the highest impact. A vague objective produces a vague response regardless of how carefully Style, Tone, and Audience are specified. Write the Objective first and make it as specific as possible — one concrete deliverable with measurable completion criteria.',
          },
          {
            q: 'Does CO-STAR work with all large language models?',
            a: 'Yes. CO-STAR is a structural technique, not a model-specific feature. It works with any language model that processes natural language instructions. Models with stronger instruction-following capabilities will apply the constraints more reliably, but the framework is universally applicable.',
          },
          {
            q: 'When should I skip CO-STAR entirely?',
            a: 'Skip CO-STAR for: single-line factual queries, code generation where the output format is fixed, quick data extraction, and any task where the output format is obvious from the request. See <a href="/prompt-bites/best-llm-right-now" class="text-primary hover:underline">our LLM comparison guide</a> to pair the right model with structured prompting for your use case.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Prompt Engineering',
    title: 'Was ist das CO-STAR-Prompt-Framework?',
    seoTitle: 'CO-STAR: 6-Teil-Framework 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'CO-STAR-Framework mit sechs Komponenten: Context, Objective, Style, Tone, Audience, Response. Strukturiert Prompts für konsistente Ausgaben in 60–120 Wörtern.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Was ist das CO-STAR-Prompt-Framework?',
        answer: 'CO-STAR ist eine sechsteilige Prompt-Struktur: Context (Hintergrund), Objective (Aufgabe), Style (Schreibstil), Tone (emotionaler Register), Audience (Leserschaft), Response (Ausgabeformat). Es hilft, konsistente, zielgerichtete LLM-Ausgaben zu erzeugen, indem jede Einschränkung explizit gemacht wird.',
        bullets: [
          'C = Context: Hintergrundinformationen, die das LLM benötigt',
          'O = Objective: die spezifische zu erledigende Aufgabe',
          'S/T/A = Style, Tone, Audience: wie und für wen geschrieben wird',
          'R = Response: Format (Liste, Absatz, JSON usw.)',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CO-STAR steht für Context, Objective, Style, Tone, Audience, Response — eine sechskomponentige Prompt-Struktur für konsistente Ausgaben',
          'Das Framework zwingt Sie, jede Annahme explizit zu machen, was vage oder fehlerhafte Antworten von Sprachmodellen reduziert',
          'CO-STAR funktioniert am besten für Dokumenterstellung, kundengerichtete E-Mails und Aufgaben, die eine spezifische Stimme oder Format erfordern',
          'Für einfache Faktenabfragen oder einzeilige Befehle fügt CO-STAR Mehraufwand ohne wesentlichen Qualitätsgewinn hinzu',
        ],
      },
      body1: {
        title: 'Was jede CO-STAR-Komponente bewirkt',
        content: [
          '<strong>CO-STAR ist eine sechskomponentige Prompt-Struktur, die jede Variable abdeckt, die ein Sprachmodell benötigt, um zielgerichtete, konsistente Ausgaben zu erzeugen: die Hintergrundsituation, die Aufgabe, den gewünschten Schreibstil, den emotionalen Ton, den beabsichtigten Leser und das erforderliche Ausgabeformat.</strong> Die Verwendung aller sechs Komponenten eliminiert die häufigste Ursache für fehlerhafte Antworten — fehlenden Kontext.',
          'Das Framework wurde entwickelt, um ein wiederkehrendes Problem im Prompt Engineering zu lösen: Prompts, die technisch klar sind, aber implizite Einschränkungen verfehlen. Wenn Sie "Fasse dieses Dokument zusammen" schreiben, trifft das Modell Annahmen über Länge, Formalität, Leserschaft und Format. CO-STAR ersetzt diese Annahmen durch explizite Anweisungen.',
          'Jede Komponente zielt auf eine andere Dimension der Ausgabe ab. Context verankert das Modell in der relevanten Situation. Objective legt das genaue Ergebnis fest. Style und Tone steuern das Schreibregister. Audience kalibriert Vokabular und Komplexität. Response gibt das strukturelle Format an.',
        ],
        columns: ['Komponente', 'Beantwortet die Frage', 'Beispiel'],
        rows: [
          { 'Komponente': 'Context', 'Beantwortet die Frage': 'Was ist die Situation?', 'Beispiel': 'Sie fassen einen Rechtsvertrag für einen Nicht-Juristen zusammen' },
          { 'Komponente': 'Objective', 'Beantwortet die Frage': 'Was muss erstellt werden?', 'Beispiel': 'Eine 3-Punkte-Zusammenfassung der wichtigsten Pflichten' },
          { 'Komponente': 'Style', 'Beantwortet die Frage': 'Wie soll es geschrieben werden?', 'Beispiel': 'Einfache Sprache, kein Fachjargon' },
          { 'Komponente': 'Tone', 'Beantwortet die Frage': 'Welcher emotionale Register?', 'Beispiel': 'Neutral und informativ' },
          { 'Komponente': 'Audience', 'Beantwortet die Frage': 'Wer wird das lesen?', 'Beispiel': 'Kleinunternehmer ohne Rechtshintergrund' },
          { 'Komponente': 'Response', 'Beantwortet die Frage': 'Was ist das Ausgabeformat?', 'Beispiel': 'Aufzählungsliste, max. 3 Punkte' },
        ],
      },
      body2: {
        title: 'Wann CO-STAR und wann einfachere Prompts verwenden',
        content: [
          'CO-STAR ist nicht das richtige Werkzeug für jede Aufgabe. Es bietet den größten Mehrwert bei der Dokumenterstellung, kundengerichteten Kommunikation, formellen Berichten und jeder Ausgabe, bei der Konsistenz von Stimme, Format und Leserschaft wichtig ist. Ein gut strukturierter CO-STAR-Prompt benötigt typischerweise 60–120 Wörter Vorlauf, eliminiert aber mehrere Korrekturrunden.',
          '<strong>Bei einfachen Faktenabfragen, Code-Generierung oder einmaligen Lookups fügt CO-STAR Mehraufwand ohne wesentlichen Qualitätsgewinn hinzu.</strong> Die Frage "Was macht die Python-Funktion `zip()`?" profitiert nicht von einer sechskomponentigen Struktur. Reservieren Sie CO-STAR für Aufgaben, bei denen die Ausgabe von echten Personen in einem spezifischen Kontext gelesen wird.',
          'Für einen tieferen Einblick in Prompt-Muster, die gut mit CO-STAR harmonieren, lesen Sie den <a href="/de/prompt-engineering/co-star-framework" class="text-primary hover:underline">vollständigen CO-STAR-Prompt-Engineering-Leitfaden</a> mit fortgeschrittenen Beispielen und häufigen Fehlerquellen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zum CO-STAR-Framework',
        faqs: [
          {
            q: 'Wie unterscheidet sich CO-STAR von anderen Prompt-Frameworks wie RISEN oder TRACE?',
            a: 'CO-STAR konzentriert sich speziell auf Ausgabemerkmale — Stil, Ton, Leserschaft und Format. RISEN (Role, Instructions, Steps, End Goal, Narrowing) betont Prozess und Einschränkungen. TRACE (Task, Role, Audience, Context, Examples) überschneidet sich stark mit CO-STAR. Der wesentliche Vorteil von CO-STAR ist die explizite Trennung von Style und Tone, die die meisten anderen Frameworks in einen einzelnen "Voice"-Parameter zusammenführen.',
          },
          {
            q: 'Was ist die wichtigste Komponente in CO-STAR?',
            a: 'Die Objective-Komponente hat den größten Einfluss. Ein vages Objective produziert eine vage Antwort, unabhängig davon, wie sorgfältig Style, Tone und Audience spezifiziert werden. Schreiben Sie das Objective zuerst und machen Sie es so spezifisch wie möglich — ein konkretes Ergebnis mit messbaren Abschlusskriterien.',
          },
          {
            q: 'Funktioniert CO-STAR mit allen großen Sprachmodellen?',
            a: 'Ja. CO-STAR ist eine strukturelle Technik, kein modellspezifisches Feature. Es funktioniert mit jedem Sprachmodell, das natürlichsprachige Anweisungen verarbeitet. Modelle mit stärkeren Instruction-Following-Fähigkeiten werden die Einschränkungen zuverlässiger anwenden, aber das Framework ist universell anwendbar.',
          },
          {
            q: 'Wann sollte ich CO-STAR komplett weglassen?',
            a: 'Lassen Sie CO-STAR weg für: einzeilige Faktenabfragen, Code-Generierung mit festem Ausgabeformat, schnelle Datenextraktion und Aufgaben, bei denen das Ausgabeformat aus der Anfrage offensichtlich ist.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Prompt Engineering',
    title: 'Qu\'est-ce que le framework de prompt CO-STAR ?',
    seoTitle: 'Framework CO-STAR 2026 expliqué | Prompt Bites | PromptQuorum',
    metaDescription: 'CO-STAR structure les prompts en six composants : Context, Objective, Style, Tone, Audience, Response. Produit des sorties LLM cohérentes en 60–120 mots.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que le framework de prompt CO-STAR ?',
        answer: 'CO-STAR est une structure de prompt en six parties : Context (contexte), Objective (objectif), Style (style d\'écriture), Tone (registre émotionnel), Audience (lecteurs cibles), Response (format de sortie). Il aide à produire des sorties LLM cohérentes et ciblées en rendant chaque contrainte explicite.',
        bullets: [
          'C = Context : informations de contexte dont le LLM a besoin',
          'O = Objective : la tâche spécifique à accomplir',
          'S/T/A = Style, Tone, Audience : comment et pour qui écrire',
          'R = Response : format (liste, paragraphe, JSON, etc.)',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CO-STAR signifie Context, Objective, Style, Tone, Audience, Response — une structure de prompt à six composants pour des sorties cohérentes',
          'Le framework vous oblige à rendre chaque hypothèse explicite, ce qui réduit les réponses vagues ou mal alignées des grands modèles de langage',
          'CO-STAR est plus efficace pour la rédaction de documents, les communications client et les tâches nécessitant une voix ou un format spécifique',
          'Pour les requêtes factuelles simples ou les commandes en une ligne, CO-STAR ajoute une surcharge sans gain de qualité significatif',
        ],
      },
      body1: {
        title: 'Ce que fait chaque composant de CO-STAR',
        content: [
          '<strong>CO-STAR est une structure de prompt à six composants qui couvre toutes les variables dont un modèle de langage a besoin pour produire une sortie ciblée et cohérente : la situation de fond, la tâche, le style d\'écriture souhaité, le ton émotionnel, le lecteur visé et le format de sortie requis.</strong> L\'utilisation des six composants élimine la cause la plus fréquente de réponses mal alignées — le contexte manquant.',
          'Le framework a été développé pour résoudre un problème récurrent dans l\'ingénierie des prompts : des prompts techniquement clairs mais manquant de contraintes implicites. Quand vous écrivez "Résume ce document", le modèle fait des hypothèses sur la longueur, la formalité, l\'audience et le format. CO-STAR remplace ces hypothèses par des instructions explicites.',
          'Chaque composant cible une dimension différente de la sortie. Context ancre le modèle dans la situation pertinente. Objective fixe le livrable exact. Style et Tone contrôlent le registre d\'écriture. Audience calibre le vocabulaire et la complexité. Response spécifie le format structurel.',
        ],
        columns: ['Composant', 'Question à laquelle il répond', 'Exemple'],
        rows: [
          { 'Composant': 'Context', 'Question à laquelle il répond': 'Quelle est la situation ?', 'Exemple': 'Vous résumez un contrat juridique pour un non-juriste' },
          { 'Composant': 'Objective', 'Question à laquelle il répond': 'Qu\'est-ce qui doit être produit ?', 'Exemple': 'Un résumé en 3 points des obligations clés' },
          { 'Composant': 'Style', 'Question à laquelle il répond': 'Comment doit-il être écrit ?', 'Exemple': 'Langage simple, sans jargon' },
          { 'Composant': 'Tone', 'Question à laquelle il répond': 'Quel est le registre émotionnel ?', 'Exemple': 'Neutre et informatif' },
          { 'Composant': 'Audience', 'Question à laquelle il répond': 'Qui va lire ceci ?', 'Exemple': 'Propriétaire de petite entreprise sans formation juridique' },
          { 'Composant': 'Response', 'Question à laquelle il répond': 'Quel est le format de sortie ?', 'Exemple': 'Liste à puces, max 3 éléments' },
        ],
      },
      body2: {
        title: 'Quand utiliser CO-STAR et quand préférer des prompts plus simples',
        content: [
          'CO-STAR n\'est pas l\'outil adapté à toutes les tâches. Il apporte le plus de valeur pour la création de documents, les communications client, les rapports formels et toute sortie nécessitant une cohérence de voix, de format et d\'audience. Un prompt CO-STAR bien structuré prend typiquement 60 à 120 mots de mise en place, mais élimine plusieurs cycles de correction.',
          '<strong>Pour les requêtes factuelles simples, la génération de code ou les lookups ponctuels, CO-STAR ajoute une surcharge sans gain de qualité significatif.</strong> Demander "Que fait la fonction Python `zip()` ?" ne bénéficie pas d\'une structure à six composants. Réservez CO-STAR aux tâches dont la sortie sera lue par de vraies personnes dans un contexte spécifique.',
          'Pour un aperçu approfondi des patterns de prompt qui se combinent bien avec CO-STAR, consultez le <a href="/fr/prompt-engineering/co-star-framework" class="text-primary hover:underline">guide complet d\'ingénierie des prompts CO-STAR</a> couvrant des exemples avancés et les modes d\'échec courants.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le framework CO-STAR',
        faqs: [
          {
            q: 'En quoi CO-STAR diffère-t-il d\'autres frameworks de prompt comme RISEN ou TRACE ?',
            a: 'CO-STAR se concentre spécifiquement sur les caractéristiques de sortie — style, ton, audience et format. RISEN (Role, Instructions, Steps, End Goal, Narrowing) met l\'accent sur le processus et les contraintes. TRACE (Task, Role, Audience, Context, Examples) se superpose largement à CO-STAR. L\'avantage clé de CO-STAR est sa séparation explicite du Style et du Tone, que la plupart des autres frameworks fusionnent en un seul paramètre de "voix".',
          },
          {
            q: 'Quel est le composant le plus important dans CO-STAR ?',
            a: 'Le composant Objective a l\'impact le plus fort. Un Objective vague produit une réponse vague quelle que soit la précision du Style, du Tone et de l\'Audience. Rédigez l\'Objective en premier et soyez aussi précis que possible — un livrable concret avec des critères de réalisation mesurables.',
          },
          {
            q: 'CO-STAR fonctionne-t-il avec tous les grands modèles de langage ?',
            a: 'Oui. CO-STAR est une technique structurelle, pas une fonctionnalité spécifique à un modèle. Il fonctionne avec tout modèle de langage traitant des instructions en langage naturel. Les modèles avec de meilleures capacités de suivi d\'instructions appliqueront les contraintes de façon plus fiable, mais le framework est universellement applicable.',
          },
          {
            q: 'Quand devrais-je complètement ignorer CO-STAR ?',
            a: 'Ignorez CO-STAR pour : les requêtes factuelles en une ligne, la génération de code avec un format de sortie fixe, l\'extraction rapide de données et toute tâche où le format de sortie est évident à partir de la demande.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Prompt Engineering',
    title: 'CO-STARプロンプトフレームワークとは？',
    seoTitle: 'CO-STAR：6部構成フレームワーク 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'CO-STARは6部構成のプロンプトフレームワーク。Context、Objective、Style、Tone、Audience、Responseで一貫した目的に合ったLLM出力を生成。60～120語で構造化。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'CO-STARプロンプトフレームワークとは何ですか？',
        answer: 'CO-STARは6つの部分からなるプロンプト構造です：Context（背景）、Objective（目標）、Style（文体）、Tone（感情的な調子）、Audience（読者）、Response（出力形式）。すべての制約を明示することで、一貫した目的に合ったLLM出力を生み出すのに役立ちます。',
        bullets: [
          'C = Context：LLMが必要とする背景情報',
          'O = Objective：完了すべき具体的なタスク',
          'S/T/A = Style、Tone、Audience：どのように、誰のために書くか',
          'R = Response：形式（リスト、段落、JSONなど）',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CO-STARはContext、Objective、Style、Tone、Audience、Responseの略 — 一貫した出力のための6コンポーネントのプロンプト構造',
          'このフレームワークはすべての前提を明示することを強制し、大規模言語モデルからの曖昧または不整合な応答を減らす',
          'CO-STARは文書作成、顧客向けメール、特定の声や形式が必要なタスクに最も効果的',
          '単純な事実確認や一行コマンドの場合、CO-STARは品質向上なしにオーバーヘッドを追加するだけ',
        ],
      },
      body1: {
        title: 'CO-STARの各コンポーネントが行うこと',
        content: [
          '<strong>CO-STARは、言語モデルが目的に合った一貫した出力を生み出すために必要なすべての変数をカバーする6コンポーネントのプロンプト構造です：背景状況、タスク、望ましい文体、感情的な調子、意図した読者、必要な出力形式。</strong> 6つのコンポーネントすべてを使用することで、不整合な応答の最も一般的な原因である「コンテキストの欠如」を排除します。',
          'このフレームワークは、プロンプトエンジニアリングの繰り返し発生する問題を解決するために開発されました：技術的には明確だが暗黙の制約を見逃すプロンプト。「このドキュメントを要約してください」と書くと、モデルは長さ、形式、読者、フォーマットについて仮定を行います。CO-STARはそれらの仮定を明示的な指示に置き換えます。',
          'それぞれのコンポーネントは出力の異なる次元を対象にしています。Contextはモデルを関連する状況に固定します。Objectiveは正確な成果物を決定します。StyleとToneは文章のレジスターを制御します。Audienceは語彙と複雑さを調整します。Responseは構造的なフォーマットを指定します。',
        ],
        columns: ['コンポーネント', '答える質問', '例'],
        rows: [
          { 'コンポーネント': 'Context', '答える質問': '状況は何か？', '例': '法律の専門知識のない人のために法的契約を要約している' },
          { 'コンポーネント': 'Objective', '答える質問': '何を作成すべきか？', '例': '主要な義務の3点箇条書き要約' },
          { 'コンポーネント': 'Style', '答える質問': 'どのように書かれるべきか？', '例': '平易な言葉、専門用語なし' },
          { 'コンポーネント': 'Tone', '答える質問': '感情的な調子は何か？', '例': 'ニュートラルで情報的' },
          { 'コンポーネント': 'Audience', '答える質問': '誰がこれを読むか？', '例': '法律の背景知識のない中小企業のオーナー' },
          { 'コンポーネント': 'Response', '答える質問': '出力形式は何か？', '例': '箇条書きリスト、最大3項目' },
        ],
      },
      body2: {
        title: 'CO-STARを使う場合とよりシンプルなプロンプトを使う場合',
        content: [
          'CO-STARはすべてのタスクに適したツールではありません。文書作成、顧客向けコミュニケーション、正式なレポート、声やフォーマットや読者の一貫性が重要な出力に最も価値をもたらします。よく構造化されたCO-STARプロンプトは通常60〜120ワードの準備が必要ですが、複数回の修正ラウンドを排除します。',
          '<strong>単純な事実クエリ、コード生成、ワンショットのルックアップには、CO-STARは意味のある品質向上なしにオーバーヘッドを追加します。</strong> 「Pythonの`zip()`関数は何をしますか？」という質問は、6コンポーネントの構造から恩恵を受けません。CO-STARは、実際の人々が特定のコンテキストで出力を読むタスクのために取っておいてください。',
          'CO-STARとうまく組み合わさるプロンプトパターンの詳細については、高度な例と一般的な失敗モードをカバーした<a href="/ja/prompt-engineering/co-star-framework" class="text-primary hover:underline">完全なCO-STARプロンプトエンジニアリングガイド</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'CO-STARフレームワークに関するよくある質問',
        faqs: [
          {
            q: 'CO-STARはRISENやTRACEなどの他のプロンプトフレームワークとどう違いますか？',
            a: 'CO-STARは出力特性 — スタイル、トーン、読者、フォーマット — に特化しています。RISEN（Role、Instructions、Steps、End Goal、Narrowing）はプロセスと制約を重視します。TRACE（Task、Role、Audience、Context、Examples）はCO-STARと大幅に重複しています。CO-STARの重要な利点は、ほとんどの他のフレームワークが単一の「声」パラメータにまとめているStyleとToneを明示的に分離していることです。',
          },
          {
            q: 'CO-STARで最も重要なコンポーネントは何ですか？',
            a: 'Objectiveコンポーネントが最も大きな影響を持ちます。曖昧なObjectiveは、StyleやTone、Audienceがどれほど丁寧に指定されていても曖昧な応答を生み出します。Objectiveを最初に書き、できるだけ具体的にしてください — 測定可能な完了基準を持つ1つの具体的な成果物。',
          },
          {
            q: 'CO-STARはすべての大規模言語モデルで機能しますか？',
            a: 'はい。CO-STARは構造的な技術であり、モデル固有の機能ではありません。自然言語の指示を処理するすべての言語モデルで機能します。Instruction Followingの能力が強いモデルは制約をより確実に適用しますが、フレームワークは普遍的に適用可能です。',
          },
          {
            q: 'CO-STARを完全にスキップすべき場合はいつですか？',
            a: 'CO-STARをスキップする場合：一行の事実クエリ、出力形式が固定されたコード生成、素早いデータ抽出、リクエストから出力形式が明白な任意のタスク。私たちの<a href="/ja/prompt-bites/best-llm-right-now" class="text-primary hover:underline">LLM比較ガイド</a>を参照して、ユースケースに合わせた構造化プロンプトに最適なモデルを組み合わせてください。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Prompt Engineering',
    title: 'O que é o framework CO-STAR para prompts?',
    seoTitle: 'Framework CO-STAR 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'CO-STAR é um framework de 6 partes: Context, Objective, Style, Tone, Audience, Response. Estrutura prompts para outputs consistentes em 60–120 palavras.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'O que é o framework CO-STAR?',
        answer: 'CO-STAR é uma estrutura de prompt de 6 partes para outputs consistentes de LLM: Context (contexto), Objective (objetivo), Style (estilo de escrita), Tone (registro emocional), Audience (audiência), Response (formato de resposta). Ajuda a produzir outputs direcionados e coerentes ao tornar cada restrição explícita.',
        bullets: [
          'C = Context: informações de contexto que o LLM precisa',
          'O = Objective: a tarefa específica a ser concluída',
          'S/T/A = Style, Tone, Audience: como e para quem escrever',
          'R = Response: formato (lista, parágrafo, JSON, etc.)',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CO-STAR significa Context, Objective, Style, Tone, Audience, Response — uma estrutura de prompt de 6 componentes para outputs consistentes',
          'O framework força você a tornar cada suposição explícita, reduzindo respostas vagas ou desalinhadas de modelos de linguagem grandes',
          'CO-STAR funciona melhor para redação de documentos, comunicações com clientes e qualquer tarefa que exija uma voz ou formato específico',
          'Para consultas factuais simples ou comandos de uma linha, CO-STAR adiciona overhead sem ganho significativo de qualidade',
        ],
      },
      body1: {
        title: 'O que CO-STAR representa',
        content: [
          '<strong>CO-STAR é uma estrutura de prompt de 6 partes: Context, Objective, Style, Tone, Audience, Response format. É um dos frameworks mais citados para estruturar prompts complexos de LLM porque obriga o escritor a especificar cada dimensão que afeta a qualidade do output.</strong>',
          'O framework foi desenvolvido para resolver um problema recorrente em prompt engineering: prompts que são tecnicamente claros, mas perdem restrições implícitas. Quando você escreve "Resuma este documento", o modelo faz suposições sobre comprimento, formalidade, audiência e formato. CO-STAR substitui essas suposições por instruções explícitas.',
          'Cada componente foca em uma dimensão diferente do output. Context ancora o modelo na situação relevante. Objective define o entregável exato. Style e Tone controlam o registro de escrita. Audience calibra vocabulário e complexidade. Response especifica o formato estrutural.',
        ],
        columns: ['Letra', 'Elemento', 'Propósito'],
        rows: [
          { 'Letra': 'C', 'Elemento': 'Context', 'Propósito': 'Informações de fundo que o modelo precisa' },
          { 'Letra': 'O', 'Elemento': 'Objective', 'Propósito': 'O que você quer que o modelo faça' },
          { 'Letra': 'S', 'Elemento': 'Style', 'Propósito': 'Estilo de escrita (formal, casual, técnico, etc.)' },
          { 'Letra': 'T', 'Elemento': 'Tone', 'Propósito': 'Registro emocional (neutro, encorajador, direto)' },
          { 'Letra': 'A', 'Elemento': 'Audience', 'Propósito': 'Quem lê o output (especialista, iniciante, executivo)' },
          { 'Letra': 'R', 'Elemento': 'Response format', 'Propósito': 'Estrutura (marcadores, parágrafos, JSON, tabela)' },
        ],
      },
      body2: {
        title: 'Quando CO-STAR supera os prompts rápidos',
        content: [
          'CO-STAR não é a ferramenta certa para cada tarefa. Adiciona mais valor para criação de documentos, comunicações com clientes, relatórios formais e qualquer output onde voz, formato e consistência de audiência importam. Um prompt CO-STAR bem estruturado tipicamente leva 60–120 palavras de configuração, mas elimina múltiplas rodadas de correção.',
          'Considere um exemplo real. <strong>ANTES:</strong> "Escreva um e-mail para a equipe sobre o atraso do projeto." <strong>DEPOIS:</strong> "Context: O projeto Q2 está 3 semanas atrasado devido a atrasos do fornecedor. Objective: Informar a equipe e tranquilizá-la. Style: Profissional. Tone: Empático, focado em soluções. Audience: 12 engenheiros, senioridade variada. Response: E-mail de 150 palavras com linha de assunto." A versão CO-STAR produz um rascunho inicial mais específico e utilizável.',
          '<strong>Para consultas factuais simples, geração de código ou pesquisas pontuais, CO-STAR adiciona overhead sem ganho significativo de qualidade.</strong> Perguntar "O que faz a função `zip()` do Python?" não se beneficia de uma estrutura de 6 componentes. Reserve o CO-STAR para tarefas onde o output será lido por pessoas reais em um contexto específico. Para uma análise mais profunda de padrões de prompt que funcionam bem com CO-STAR, veja o <a href="/pt/prompt-engineering/co-star-framework" class="text-primary hover:underline">guia completo de prompt engineering CO-STAR</a> que cobre exemplos avançados e modos de falha comuns.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre o framework CO-STAR',
        faqs: [
          {
            q: 'Como CO-STAR se diferencia de outros frameworks como RISEN ou TRACE?',
            a: 'CO-STAR foca especificamente em características do output — estilo, tom, audiência e formato. RISEN (Role, Instructions, Steps, End Goal, Narrowing) enfatiza processo e restrições. TRACE (Task, Role, Audience, Context, Examples) se sobrepõe amplamente ao CO-STAR. A principal vantagem do CO-STAR é sua separação explícita de Style e Tone, que a maioria dos outros frameworks combina em um único parâmetro de "voz".',
          },
          {
            q: 'Qual é o componente mais importante no CO-STAR?',
            a: 'O componente Objective tem o maior impacto. Um Objective vago produz uma resposta vaga independentemente de quão cuidadosamente você especifique Style, Tone e Audience. Escreva o Objective primeiro e torne-o o mais específico possível — um entregável concreto com critérios de conclusão mensuráveis.',
          },
          {
            q: 'CO-STAR funciona com todos os modelos de linguagem grandes?',
            a: 'Sim. CO-STAR é uma técnica estrutural, não uma funcionalidade específica do modelo. Funciona com qualquer modelo de linguagem que processe instruções em linguagem natural. Modelos com melhores capacidades de seguimento de instruções aplicarão as restrições de forma mais confiável, mas o framework é universalmente aplicável.',
          },
          {
            q: 'Quando devo pular completamente o CO-STAR?',
            a: 'Pule o CO-STAR para: consultas factuais de uma linha, geração de código onde o formato de output é fixo, extração rápida de dados e qualquer tarefa onde o formato de output é óbvio pela solicitação. Veja nosso <a href="/pt/prompt-bites/best-llm-right-now" class="text-primary hover:underline">guia de comparação de LLMs</a> para combinar o modelo certo com prompt engineering estruturado para seu caso de uso.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Prompt Engineering',
    title: '¿Qué es el framework CO-STAR para prompts?',
    seoTitle: 'Framework CO-STAR 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'CO-STAR es un framework de 6 partes: Context, Objective, Style, Tone, Audience, Response. Estructura prompts para outputs consistentes en 60–120 palabras.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Qué es el framework CO-STAR?',
        answer: 'CO-STAR es una estructura de prompt de 6 partes para outputs consistentes de LLM: Context (contexto), Objective (objetivo), Style (estilo de escritura), Tone (tono emocional), Audience (audiencia), Response (formato de respuesta). Ayuda a producir outputs dirigidos y coherentes haciendo cada restricción explícita.',
        bullets: [
          'C = Context: información de contexto que el LLM necesita',
          'O = Objective: la tarea específica a completar',
          'S/T/A = Style, Tone, Audience: cómo y para quién escribir',
          'R = Response: formato (lista, párrafo, JSON, etc.)',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CO-STAR significa Context, Objective, Style, Tone, Audience, Response — una estructura de prompt de 6 componentes para outputs consistentes',
          'El framework te obliga a hacer cada suposición explícita, reduciendo respuestas vagas o desalineadas de modelos de lenguaje grandes',
          'CO-STAR funciona mejor para redacción de documentos, comunicaciones al cliente, y cualquier tarea que requiera una voz o formato específico',
          'Para consultas factuales simples o comandos de una línea, CO-STAR añade overhead sin ganancia significativa de calidad',
        ],
      },
      body1: {
        title: 'Qué representa CO-STAR',
        content: [
          '<strong>CO-STAR es una estructura de prompt de 6 partes: Context, Objective, Style, Tone, Audience, Response format. Es uno de los frameworks más citados para estructurar prompts complejos de LLM porque obliga al escritor a especificar cada dimensión que afecta la calidad del output.</strong>',
          'El framework fue desarrollado para resolver un problema recurrente en prompt engineering: prompts que son técnicamente claros pero pierden restricciones implícitas. Cuando escribes "Resume este documento", el modelo hace suposiciones sobre largo, formalidad, audiencia y formato. CO-STAR reemplaza esas suposiciones con instrucciones explícitas.',
          'Cada componente enfoca una dimensión diferente del output. Context ancla el modelo en la situación relevante. Objective fija el entregable exacto. Style y Tone controlan el registro de escritura. Audience calibra vocabulario y complejidad. Response especifica el formato estructural.',
        ],
        columns: ['Letra', 'Elemento', 'Propósito'],
        rows: [
          { 'Letra': 'C', 'Elemento': 'Context', 'Propósito': 'Información de fondo que el modelo necesita' },
          { 'Letra': 'O', 'Elemento': 'Objective', 'Propósito': 'Qué quieres que el modelo haga' },
          { 'Letra': 'S', 'Elemento': 'Style', 'Propósito': 'Estilo de escritura (formal, casual, técnico, etc.)' },
          { 'Letra': 'T', 'Elemento': 'Tone', 'Propósito': 'Registro emocional (neutral, alentador, directo)' },
          { 'Letra': 'A', 'Elemento': 'Audience', 'Propósito': 'Quién lee el output (experto, principiante, ejecutivo)' },
          { 'Letra': 'R', 'Elemento': 'Response format', 'Propósito': 'Estructura (viñetas, párrafos, JSON, tabla)' },
        ],
      },
      body2: {
        title: 'Cuándo CO-STAR supera los prompts rápidos',
        content: [
          'CO-STAR no es la herramienta correcta para cada tarea. Añade más valor para creación de documentos, comunicaciones al cliente, reportes formales, y cualquier output donde voz, formato y consistencia de audiencia importan. Un prompt CO-STAR bien estructurado típicamente toma 60–120 palabras de setup pero elimina múltiples rondas de corrección.',
          'Considera un ejemplo real. <strong>ANTES:</strong> "Escribe un email al equipo sobre el retraso del proyecto." <strong>DESPUÉS:</strong> "Context: El proyecto Q2 va 3 semanas atrasado por retrasos de proveedor. Objective: Informar al equipo y tranquilizarlos. Style: Profesional. Tone: Empático, enfocado en soluciones. Audience: 12 ingenieros, senioridad variada. Response: Email de 150 palabras con línea de asunto." La versión CO-STAR produce un borrador inicial más específico y usable.',
          '<strong>Para consultas factuales simples, generación de código, o lookups puntuales, CO-STAR añade overhead sin ganancia significativa de calidad.</strong> Preguntar "¿Qué hace la función `zip()` de Python?" no se beneficia de una estructura de 6 componentes. Reserva CO-STAR para tareas donde el output será leído por personas reales en un contexto específico. Para un análisis más profundo de patrones de prompt que funcionan bien con CO-STAR, ve la <a href="/es/prompt-engineering/co-star-framework" class="text-primary hover:underline">guía completa de prompt engineering CO-STAR</a> que cubre ejemplos avanzados y modos de fallo comunes.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre el framework CO-STAR',
        faqs: [
          {
            q: '¿Cómo se diferencia CO-STAR de otros frameworks como RISEN o TRACE?',
            a: 'CO-STAR se enfoca específicamente en características de output — estilo, tono, audiencia y formato. RISEN (Role, Instructions, Steps, End Goal, Narrowing) enfatiza proceso y restricciones. TRACE (Task, Role, Audience, Context, Examples) se superpone ampliamente con CO-STAR. La ventaja clave de CO-STAR es su separación explícita de Style y Tone, que la mayoría de otros frameworks combinan en un único parámetro de "voz".',
          },
          {
            q: '¿Cuál es el componente más importante en CO-STAR?',
            a: 'El componente Objective tiene el mayor impacto. Un Objective vago produce una respuesta vaga sin importar cuán cuidadosamente especifiques Style, Tone y Audience. Escribe el Objective primero y hazlo lo más específico posible — un entregable concreto con criterios de finalización mesurables.',
          },
          {
            q: '¿Funciona CO-STAR con todos los modelos de lenguaje grandes?',
            a: 'Sí. CO-STAR es una técnica estructural, no una característica específica del modelo. Funciona con cualquier modelo de lenguaje que procese instrucciones en lenguaje natural. Los modelos con mejores capacidades de instruction-following aplicarán las restricciones más confiablemente, pero el framework es universalmente aplicable.',
          },
          {
            q: '¿Cuándo debería omitir completamente CO-STAR?',
            a: 'Omite CO-STAR para: consultas factuales de una línea, generación de código donde el formato de output es fijo, extracción rápida de datos, y cualquier tarea donde el formato de output es obvio a partir de la solicitud. Ve nuestra <a href="/es/prompt-bites/best-llm-right-now" class="text-primary hover:underline">guía de comparación de LLMs</a> para emparejar el modelo correcto con prompt engineering estructurado para tu caso de uso.',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Prompt Engineering',
    title: 'CO-STAR 提示框架是什么？',
    seoTitle: 'CO-STAR 提示框架：6部分结构 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'CO-STAR提示框架，六个部分：Context、Objective、Style、Tone、Audience、Response。结构化提示以实现一致、有针对性的LLM输出。60-120词编写。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: 'CO-STAR 提示框架是什么？',
        answer: 'CO-STAR 是一个六部分的提示结构：Context（背景）、Objective（目标）、Style（写作风格）、Tone（情感基调）、Audience（受众）、Response（输出格式）。它通过明确所有约束来帮助产生一致的、有针对性的 LLM 输出。',
        bullets: [
          'C = Context：LLM 需要的背景信息',
          'O = Objective：要完成的具体任务',
          'S/T/A = Style、Tone、Audience：如何写以及为谁写',
          'R = Response：格式（列表、段落、JSON 等）',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CO-STAR 代表 Context、Objective、Style、Tone、Audience、Response——一个六组件提示结构，用于产生一致的输出',
          '该框架迫使您明确每个假设，从而减少大型语言模型给出模糊或不对齐的响应',
          'CO-STAR 最适合文档起草、面向客户的邮件，以及任何需要特定语气或格式的任务',
          '对于简单的事实查询或单行命令，CO-STAR 增加了开销但没有带来显著质量提升',
        ],
      },
      body1: {
        title: '每个 CO-STAR 组件的作用',
        content: [
          '<strong>CO-STAR 是一个六组件提示结构，涵盖了语言模型产生有针对性、一致输出所需的每个变量：背景情况、任务、期望的写作风格、情感基调、目标读者和所需的输出格式。</strong> 使用全部六个组件可以消除不对齐响应的最常见来源——缺少上下文。',
          '该框架是为了解决提示工程中反复出现的问题而开发的：技术上清晰但遗漏了隐含约束的提示。当您写"总结这份文档"时，模型会对长度、正式程度、受众和格式做出假设。CO-STAR 用明确的指令替换了这些假设。',
          '每个组件针对输出的不同维度。Context 将模型锚定在相关情境中。Objective 确定精确的交付物。Style 和 Tone 控制写作语气。Audience 校准词汇和复杂度。Response 指定结构格式。',
        ],
        columns: ['组件', '回答的问题', '示例'],
        rows: [
          { '组件': 'Context', '回答的问题': '情况是什么？', '示例': '您正在为非法律专业人士总结法律合同' },
          { '组件': 'Objective', '回答的问题': '需要产出什么？', '示例': '主要义务的 3 点摘要' },
          { '组件': 'Style', '回答的问题': '应该怎么写？', '示例': '平白语言，无专业术语' },
          { '组件': 'Tone', '回答的问题': '情感基调是什么？', '示例': '中立且具有信息性' },
          { '组件': 'Audience', '回答的问题': '谁会阅读这个？', '示例': '没有法律背景的小企业主' },
          { '组件': 'Response', '回答的问题': '输出格式是什么？', '示例': '项目符号列表，最多 3 项' },
        ],
      },
      body2: {
        title: '何时使用 CO-STAR，何时使用更简单的提示',
        content: [
          'CO-STAR 并非适合所有任务的工具。它对文档创建、面向客户的沟通、正式报告以及需要语气、格式和受众一致性的输出最有价值。一个结构良好的 CO-STAR 提示通常需要 60-120 个词的设置，但可以消除多轮修改。',
          '<strong>对于简单的事实查询、代码生成或一次性查找，CO-STAR 增加了开销但没有带来显著的质量提升。</strong> 问"Python 的 `zip()` 函数是做什么的？"不会从六组件结构中受益。将 CO-STAR 保留给输出将被特定背景下真实用户阅读的任务。',
          '有关与 CO-STAR 配合良好的提示模式的深入介绍，请参阅涵盖高级示例和常见失败模式的<a href="/zh/prompt-engineering/co-star-framework" class="text-primary hover:underline">完整 CO-STAR 提示工程指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 CO-STAR 框架的快速解答',
        faqs: [
          {
            q: 'CO-STAR 与 RISEN 或 TRACE 等其他提示框架有何不同？',
            a: 'CO-STAR 专注于输出特征——风格、基调、受众和格式。RISEN（Role、Instructions、Steps、End Goal、Narrowing）强调过程和约束。TRACE（Task、Role、Audience、Context、Examples）与 CO-STAR 大量重叠。CO-STAR 的关键优势在于明确区分了 Style 和 Tone，而大多数其他框架将它们合并为单一的"语气"参数。',
          },
          {
            q: 'CO-STAR 中最重要的组件是什么？',
            a: 'Objective 组件影响最大。无论 Style、Tone 和 Audience 指定得多么仔细，模糊的 Objective 都会产生模糊的响应。首先写 Objective，并尽可能具体——一个具有可测量完成标准的具体交付物。',
          },
          {
            q: 'CO-STAR 适用于所有大型语言模型吗？',
            a: '是的。CO-STAR 是一种结构性技术，不是特定模型的功能。它适用于任何处理自然语言指令的语言模型。指令遵循能力更强的模型会更可靠地应用约束，但该框架普遍适用。',
          },
          {
            q: '什么时候应该完全跳过 CO-STAR？',
            a: '在以下情况跳过 CO-STAR：单行事实查询、输出格式固定的代码生成、快速数据提取，以及任何从请求中输出格式显而易见的任务。参阅我们的<a href="/zh/prompt-bites/best-llm-right-now" class="text-primary hover:underline">LLM 对比指南</a>，为您的使用场景选择与结构化提示配合的正确模型。',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Prompt Engineering',
    title: 'ما هو إطار عمل CO-STAR للأوامر؟',
    seoTitle: 'إطار CO-STAR 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'CO-STAR إطار أوامر من 6 أجزاء: Context وObjective وStyle وTone وAudience وResponse. يُهيكل الأوامر لمخرجات متسقة في 60–120 كلمة.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'ما هو إطار عمل CO-STAR؟',
        answer: 'CO-STAR هو بنية أوامر من 6 أجزاء لمخرجات LLM متسقة: Context (السياق)، وObjective (الهدف)، وStyle (أسلوب الكتابة)، وTone (النبرة العاطفية)، وAudience (الجمهور)، وResponse (تنسيق الاستجابة). يُساعد على إنتاج مخرجات موجَّهة ومتماسكة بجعل كل قيد صريحًا.',
        bullets: [
          'C = Context: معلومات السياق التي يحتاجها النموذج',
          'O = Objective: المهمة المحددة المطلوب إنجازها',
          'S/T/A = Style وTone وAudience: كيفية الكتابة ولمن',
          'R = Response: التنسيق (قائمة، فقرة، JSON، إلخ)',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CO-STAR اختصار لـ Context وObjective وStyle وTone وAudience وResponse — بنية أوامر ذات 6 مكونات لمخرجات متسقة',
          'يُجبرك الإطار على جعل كل افتراض صريحًا، مما يُقلل من الردود الغامضة أو غير الملائمة من النماذج اللغوية الكبيرة',
          'يعمل CO-STAR بشكل أفضل لصياغة الوثائق والتواصل مع العملاء وأي مهمة تتطلب صوتًا أو تنسيقًا محددًا',
          'للاستعلامات الواقعية البسيطة أو الأوامر المفردة، يضيف CO-STAR عبئًا إضافيًا دون مكسب ملحوظ في الجودة',
        ],
      },
      body1: {
        title: 'ما يمثله CO-STAR',
        content: [
          '<strong>CO-STAR هو بنية أوامر من 6 أجزاء: Context وObjective وStyle وTone وAudience وResponse. يُعدّ من أكثر أطر هيكلة أوامر LLM المعقدة استشهادًا لأنه يُلزم الكاتب بتحديد كل بُعد يؤثر على جودة المخرجات.</strong>',
          'طُوِّر الإطار لحل مشكلة متكررة في هندسة الأوامر: أوامر واضحة تقنيًا لكنها تفتقر إلى القيود الضمنية. عندما تكتب "لخّص هذه الوثيقة"، يضع النموذج افتراضات حول الطول والرسمية والجمهور والتنسيق. يستبدل CO-STAR تلك الافتراضات بتعليمات صريحة.',
          'يستهدف كل مكوّن بُعدًا مختلفًا من المخرجات. Context يُرسّخ النموذج في الموقف ذي الصلة. Objective يُحدد المخرج الدقيق. Style وTone يتحكمان في مستوى الكتابة. Audience يُعايِر المفردات والتعقيد. Response يُحدد التنسيق الهيكلي.',
        ],
        columns: ['الحرف', 'العنصر', 'الغرض'],
        rows: [
          { 'الحرف': 'C', 'العنصر': 'Context', 'الغرض': 'معلومات الخلفية التي يحتاجها النموذج' },
          { 'الحرف': 'O', 'العنصر': 'Objective', 'الغرض': 'ما تريد من النموذج فعله' },
          { 'الحرف': 'S', 'العنصر': 'Style', 'الغرض': 'أسلوب الكتابة (رسمي، غير رسمي، تقني، إلخ)' },
          { 'الحرف': 'T', 'العنصر': 'Tone', 'الغرض': 'النبرة العاطفية (محايد، تشجيعي، مباشر)' },
          { 'الحرف': 'A', 'العنصر': 'Audience', 'الغرض': 'من يقرأ المخرجات (خبير، مبتدئ، مدير تنفيذي)' },
          { 'الحرف': 'R', 'العنصر': 'Response format', 'الغرض': 'البنية (نقاط، فقرات، JSON، جدول)' },
        ],
      },
      body2: {
        title: 'متى يتفوق CO-STAR على الأوامر السريعة',
        content: [
          'CO-STAR ليس الأداة المناسبة لكل مهمة. يُضيف أكبر قيمة لإنشاء الوثائق والتواصل مع العملاء والتقارير الرسمية وأي مخرجات تتطلب تناسقًا في الصوت والتنسيق والجمهور. يستغرق الأمر عادةً 60–120 كلمة للإعداد لكنه يُلغي جولات تصحيح متعددة.',
          'انظر مثالًا واقعيًا. <strong>قبل:</strong> "اكتب بريدًا إلكترونيًا للفريق حول تأخر المشروع." <strong>بعد:</strong> "Context: المشروع متأخر 3 أسابيع بسبب تأخر المورّد. Objective: إبلاغ الفريق وطمأنته. Style: احترافي. Tone: متعاطف، مُركّز على الحلول. Audience: 12 مهندسًا بخبرات متفاوتة. Response: بريد 150 كلمة مع سطر موضوع." نسخة CO-STAR تُنتج مسودة أولى أكثر تحديدًا وقابلية للاستخدام.',
          '<strong>للاستعلامات الواقعية البسيطة وتوليد الكود والبحث الآني، يضيف CO-STAR عبئًا دون مكسب ملحوظ في الجودة.</strong> السؤال "ما وظيفة `zip()` في Python؟" لا يستفيد من بنية ذات 6 مكونات. احتفظ بـ CO-STAR للمهام التي ستُقرأ مخرجاتها من أشخاص حقيقيين في سياق محدد. لنظرة أعمق على أنماط الأوامر التي تتناسب جيدًا مع CO-STAR، اطّلع على <a href="/ar/prompt-engineering/co-star-framework" class="text-primary hover:underline">الدليل الكامل لهندسة أوامر CO-STAR</a> الذي يغطي أمثلة متقدمة وأنماط الفشل الشائعة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول إطار CO-STAR',
        faqs: [
          {
            q: 'كيف يختلف CO-STAR عن أطر أخرى كـ RISEN أو TRACE؟',
            a: 'CO-STAR يُركّز تحديدًا على خصائص المخرجات — الأسلوب والنبرة والجمهور والتنسيق. RISEN (Role وInstructions وSteps وEnd Goal وNarrowing) يُركّز على العملية والقيود. TRACE (Task وRole وAudience وContext وExamples) يتداخل كثيرًا مع CO-STAR. الميزة الرئيسية لـ CO-STAR هي فصله الصريح بين Style وTone، وهو ما تدمجه معظم الأطر الأخرى في معامل "صوت" واحد.',
          },
          {
            q: 'ما أهم مكوّن في CO-STAR؟',
            a: 'مكوّن Objective له أكبر تأثير. Objective غامض يُنتج ردًا غامضًا بصرف النظر عن دقة Style وTone وAudience. اكتب Objective أولًا واجعله محددًا قدر الإمكان — مخرج واحد ملموس بمعايير إنجاز قابلة للقياس.',
          },
          {
            q: 'هل يعمل CO-STAR مع جميع النماذج اللغوية الكبيرة؟',
            a: 'نعم. CO-STAR تقنية هيكلية وليست ميزة خاصة بنموذج معين. يعمل مع أي نموذج لغوي يعالج تعليمات اللغة الطبيعية. النماذج ذات قدرات اتباع التعليمات الأقوى ستُطبّق القيود بشكل أكثر موثوقية، لكن الإطار قابل للتطبيق بشكل عالمي.',
          },
          {
            q: 'متى يجب تخطّي CO-STAR كليًا؟',
            a: 'تخطَّ CO-STAR في: الاستعلامات الواقعية الأحادية السطر، وتوليد الكود حيث تنسيق المخرجات ثابت، واستخراج البيانات السريع، وأي مهمة يكون فيها تنسيق المخرجات واضحًا من الطلب. راجع <a href="/ar/prompt-bites/best-llm-right-now" class="text-primary hover:underline">دليل مقارنة LLMs</a> لاختيار النموذج المناسب مع هندسة الأوامر المنظَّمة لحالتك.',
          },
        ],
      },
    },
  },
}
