import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Technique & Concept Explainers',
    title: 'How Do You Customize an Ollama Modelfile?',
    seoTitle: 'Ollama Modelfile Customization Guide | Prompt Bites',
    metaDescription: 'How to customize an Ollama Modelfile for a specific use case: the four core directives, a worked example, and when Modelfile customization is not enough and you need real fine-tuning instead.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers customizing an Ollama Modelfile for a specific use case',
    siblingBites: ['wsl2-vs-native-windows-ollama', 'lora-vs-full-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>An Ollama Modelfile lets you customize a base model\'s system prompt, sampling parameters, and prompt template without retraining it.</strong> Write a text file with `FROM`, `SYSTEM`, `PARAMETER`, and `TEMPLATE` instructions, then run `ollama create` to register it as a new named model. This wraps the base model — it does not change its weights, so it cannot teach the model new facts or skills.',
    quickAnswerTop: {
      en: {
        question: 'How do you customize an Ollama Modelfile for a specific use case?',
        answer: 'Create a text file named Modelfile with a FROM line pointing to a base model, then add SYSTEM for a custom system prompt, PARAMETER lines for sampling settings like temperature, and optionally TEMPLATE for prompt formatting. Run `ollama create mymodel -f ./Modelfile` to register it, then `ollama run mymodel` to use it.',
        bullets: [
          'FROM sets the base model the Modelfile wraps',
          'SYSTEM sets a persistent system prompt without repeating it in every request',
          'PARAMETER controls sampling: temperature, context length, stop sequences, and more',
          'A Modelfile changes behavior, not knowledge — for new facts or skills, you need fine-tuning instead',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A Modelfile is a text file with four core directives — FROM, SYSTEM, PARAMETER, TEMPLATE — that wraps a base model with a custom configuration',
          'It does not retrain or change the model\'s weights: it only changes how the model behaves at inference time (system prompt, sampling settings, prompt formatting)',
          'Run `ollama create mymodel -f ./Modelfile` to register a customized model, then use it like any other model with `ollama run mymodel`',
          'If your use case needs the model to learn new facts, terminology, or a skill it doesn\'t already have, a Modelfile alone won\'t get you there — you need fine-tuning',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'An Ollama Modelfile customizes a base model\'s system prompt, sampling parameters, and prompt template without changing its weights.' },
          { type: 'plain-terms', text: 'In plain terms: a Modelfile is a config file that wraps an existing model with your own instructions and settings — it does not teach the model anything new.' },
        ],
      },
      coreDirectives: {
        id: 'core-directives',
        title: 'The Four Core Modelfile Directives',
        content: [
          'A Modelfile is a plain text file, conventionally named `Modelfile`, made up of a small set of directives. Four cover the vast majority of customization needs.',
        ],
        items: [
          '**FROM:** the base model this Modelfile is built on, e.g. `FROM <base-model>:<tag>`. Every Modelfile needs exactly one of these, and it must reference a model already pulled locally (or another custom model you\'ve already created).',
          '**SYSTEM:** a persistent system prompt baked into the model, so you don\'t have to repeat instructions in every request. Useful for giving the model a fixed role, tone, or set of constraints for a specific use case.',
          '**PARAMETER:** sampling and runtime settings, one per line — `temperature` (randomness), `num_ctx` (context window size), `top_p`, `repeat_penalty`, and `stop` (sequences that end generation). These override the base model\'s defaults for this custom model only.',
          '**TEMPLATE:** the prompt formatting template controlling how system prompts, user messages, and responses are assembled before being sent to the model. Usually left alone unless you\'re working with a base model that has non-standard formatting requirements.',
        ],
      },
      workedExample: {
        id: 'worked-example',
        title: 'Worked Example: Customizing for a Specific Use Case',
        content: [
          'Say you want a version of a base model tuned to answer strictly within a narrow domain, with lower randomness and a hard stop on a specific phrase. A Modelfile for that looks roughly like:',
        ],
        codeBlock: 'FROM <base-model>:<tag>\nSYSTEM """\nYou are a support assistant for a specific product. Only answer\nquestions about that product. If asked anything else, say you\ncannot help with that topic.\n"""\nPARAMETER temperature 0.3\nPARAMETER num_ctx 4096\nPARAMETER stop "<END>"',
        codeLanguage: 'text',
        callouts: [
          { type: 'tip', text: 'Save that as <code>Modelfile</code>, then run <code>ollama create support-bot -f ./Modelfile</code> to register it, and <code>ollama run support-bot</code> to use it — the system prompt and parameters apply automatically on every call, with no need to pass them in each request.' },
          { type: 'note', text: 'A Modelfile is the right tool when the problem is behavior — tone, scope, response format, default settings. It is the wrong tool when the problem is knowledge — the model doesn\'t know your internal terminology, hasn\'t seen your domain\'s documents, or consistently gets facts wrong in a way no system prompt can fully correct. That\'s a fine-tuning problem instead — see <a href="/prompt-bites/lora-vs-full-fine-tuning" class="text-primary hover:underline">LoRA vs. Full Fine-Tuning</a> for how to decide between the two fine-tuning approaches once a Modelfile isn\'t enough.' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does a Modelfile change the model\'s weights?',
            a: 'No. A Modelfile only wraps the base model with a system prompt, sampling parameters, and prompt template — the underlying weights are completely unchanged. If you need the model to actually learn new facts or a new skill, you need fine-tuning instead, not a Modelfile.',
          },
          {
            q: 'Can one Modelfile build on another custom model instead of a base model?',
            a: 'Yes — the FROM line can reference any model already available locally, including one you created from a previous Modelfile. This lets you layer customizations, though it\'s usually clearer to keep one Modelfile per distinct use case rather than chaining several.',
          },
          {
            q: 'What happens if I set num_ctx higher than the base model actually supports?',
            a: 'Behavior varies by model, but in general you risk either the setting being silently capped at the model\'s real maximum, or degraded output quality beyond the length the model was trained to handle well. Check the base model\'s documented context length before setting num_ctx significantly higher than its default.',
          },
          {
            q: 'How do I share a customized Modelfile with someone else?',
            a: 'Run `ollama show --modelfile <your-model-name>` to print the exact Modelfile for an already-created custom model, then share that file directly — the recipient runs `ollama create` with it locally, as long as they have the same base model pulled.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Technique & Concept Explainers',
    title: 'Wie passen Sie eine Ollama Modelfile an?',
    seoTitle: 'Ollama Modelfile anpassen: Leitfaden | Prompt Bites',
    metaDescription: 'So passen Sie eine Ollama Modelfile für einen bestimmten Anwendungsfall an: die vier Kern-Direktiven, ein Praxisbeispiel und wann eine Modelfile-Anpassung nicht ausreicht und Sie stattdessen echtes Fine-Tuning benötigen.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die eine Ollama Modelfile für einen bestimmten Anwendungsfall anpassen',
    siblingBites: ['wsl2-vs-native-windows-ollama', 'lora-vs-full-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Mit einer Ollama Modelfile passen Sie den System-Prompt, die Sampling-Parameter und die Prompt-Vorlage eines Basismodells an, ohne es neu zu trainieren.</strong> Schreiben Sie eine Textdatei mit den Anweisungen `FROM`, `SYSTEM`, `PARAMETER` und `TEMPLATE` und führen Sie dann `ollama create` aus, um sie als neues benanntes Modell zu registrieren. Dies umschließt das Basismodell lediglich — die Gewichte ändern sich nicht, daher kann das Modell dadurch keine neuen Fakten oder Fähigkeiten lernen.',
    quickAnswerTop: {
      de: {
        question: 'Wie passen Sie eine Ollama Modelfile für einen bestimmten Anwendungsfall an?',
        answer: 'Erstellen Sie eine Textdatei namens Modelfile mit einer FROM-Zeile, die auf ein Basismodell verweist, und fügen Sie dann SYSTEM für einen eigenen System-Prompt hinzu, PARAMETER-Zeilen für Sampling-Einstellungen wie die Temperatur sowie optional TEMPLATE für die Prompt-Formatierung. Führen Sie `ollama create mymodel -f ./Modelfile` aus, um sie zu registrieren, und anschließend `ollama run mymodel`, um sie zu verwenden.',
        bullets: [
          'FROM legt das Basismodell fest, das die Modelfile umschließt',
          'SYSTEM legt einen dauerhaften System-Prompt fest, ohne ihn in jeder Anfrage zu wiederholen',
          'PARAMETER steuert das Sampling: Temperatur, Kontextlänge, Stop-Sequenzen und mehr',
          'Eine Modelfile ändert das Verhalten, nicht das Wissen — für neue Fakten oder Fähigkeiten benötigen Sie stattdessen Fine-Tuning',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Eine Modelfile ist eine Textdatei mit vier Kern-Direktiven — FROM, SYSTEM, PARAMETER, TEMPLATE —, die ein Basismodell mit einer eigenen Konfiguration umschließt',
          'Sie trainiert das Modell nicht neu und ändert seine Gewichte nicht: Sie ändert nur, wie sich das Modell zur Inferenzzeit verhält (System-Prompt, Sampling-Einstellungen, Prompt-Formatierung)',
          'Führen Sie `ollama create mymodel -f ./Modelfile` aus, um ein angepasstes Modell zu registrieren, und verwenden Sie es dann wie jedes andere Modell mit `ollama run mymodel`',
          'Wenn Ihr Anwendungsfall erfordert, dass das Modell neue Fakten, Terminologie oder eine Fähigkeit lernt, die es noch nicht besitzt, reicht eine Modelfile allein nicht aus — dafür benötigen Sie Fine-Tuning',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Eine Ollama Modelfile passt den System-Prompt, die Sampling-Parameter und die Prompt-Vorlage eines Basismodells an, ohne dessen Gewichte zu ändern.' },
          { type: 'plain-terms', text: 'Vereinfacht gesagt: Eine Modelfile ist eine Konfigurationsdatei, die ein bestehendes Modell mit Ihren eigenen Anweisungen und Einstellungen umschließt — sie bringt dem Modell nichts Neues bei.' },
        ],
      },
      coreDirectives: {
        id: 'core-directives',
        title: 'Die vier Kern-Direktiven der Modelfile',
        content: [
          'Eine Modelfile ist eine einfache Textdatei, üblicherweise mit dem Namen `Modelfile`, die aus einer kleinen Anzahl von Direktiven besteht. Vier davon decken den Großteil der Anpassungsbedürfnisse ab.',
        ],
        items: [
          '**FROM:** das Basismodell, auf dem diese Modelfile aufbaut, z. B. `FROM <base-model>:<tag>`. Jede Modelfile benötigt genau eine solche Zeile, die auf ein bereits lokal vorhandenes Modell verweisen muss (oder ein anderes bereits erstelltes eigenes Modell).',
          '**SYSTEM:** ein dauerhafter, ins Modell eingebetteter System-Prompt, sodass Sie Anweisungen nicht in jeder Anfrage wiederholen müssen. Nützlich, um dem Modell für einen bestimmten Anwendungsfall eine feste Rolle, einen Ton oder feste Einschränkungen zu geben.',
          '**PARAMETER:** Sampling- und Laufzeiteinstellungen, eine pro Zeile — `temperature` (Zufälligkeit), `num_ctx` (Größe des Kontextfensters), `top_p`, `repeat_penalty` und `stop` (Sequenzen, die die Generierung beenden). Diese überschreiben die Standardwerte des Basismodells nur für dieses eigene Modell.',
          '**TEMPLATE:** die Vorlage für die Prompt-Formatierung, die steuert, wie System-Prompts, Nutzernachrichten und Antworten zusammengesetzt werden, bevor sie an das Modell gesendet werden. Wird meist unverändert gelassen, außer Sie arbeiten mit einem Basismodell, das nicht standardmäßige Formatierungsanforderungen hat.',
        ],
      },
      workedExample: {
        id: 'worked-example',
        title: 'Praxisbeispiel: Anpassung für einen bestimmten Anwendungsfall',
        content: [
          'Angenommen, Sie möchten eine Version eines Basismodells, die strikt innerhalb einer engen Domäne antwortet, mit geringerer Zufälligkeit und einem festen Stopp bei einer bestimmten Phrase. Eine Modelfile dafür sieht ungefähr so aus:',
        ],
        codeBlock: 'FROM <base-model>:<tag>\nSYSTEM """\nYou are a support assistant for a specific product. Only answer\nquestions about that product. If asked anything else, say you\ncannot help with that topic.\n"""\nPARAMETER temperature 0.3\nPARAMETER num_ctx 4096\nPARAMETER stop "<END>"',
        codeLanguage: 'text',
        callouts: [
          { type: 'tip', text: 'Speichern Sie das als <code>Modelfile</code>, führen Sie dann <code>ollama create support-bot -f ./Modelfile</code> aus, um es zu registrieren, und <code>ollama run support-bot</code>, um es zu verwenden — der System-Prompt und die Parameter gelten automatisch bei jedem Aufruf, ohne dass Sie sie bei jeder Anfrage erneut übergeben müssen.' },
          { type: 'note', text: 'Eine Modelfile ist das richtige Werkzeug, wenn das Problem das Verhalten betrifft — Ton, Umfang, Antwortformat, Standardeinstellungen. Sie ist das falsche Werkzeug, wenn das Problem das Wissen betrifft — das Modell kennt Ihre interne Terminologie nicht, hat Ihre Fachdokumente nicht gesehen oder liegt bei Fakten konsequent falsch, was kein System-Prompt vollständig korrigieren kann. Das ist stattdessen ein Fine-Tuning-Problem — siehe <a href="/de/prompt-bites/lora-vs-full-fine-tuning" class="text-primary hover:underline">LoRA vs. Full Fine-Tuning</a>, um zu entscheiden, welcher der beiden Fine-Tuning-Ansätze infrage kommt, sobald eine Modelfile nicht mehr ausreicht.' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ändert eine Modelfile die Gewichte des Modells?',
            a: 'Nein. Eine Modelfile umschließt das Basismodell lediglich mit einem System-Prompt, Sampling-Parametern und einer Prompt-Vorlage — die zugrunde liegenden Gewichte bleiben vollständig unverändert. Wenn das Modell tatsächlich neue Fakten oder eine neue Fähigkeit lernen soll, benötigen Sie stattdessen Fine-Tuning, keine Modelfile.',
          },
          {
            q: 'Kann eine Modelfile auf einem anderen eigenen Modell statt auf einem Basismodell aufbauen?',
            a: 'Ja — die FROM-Zeile kann auf jedes bereits lokal verfügbare Modell verweisen, einschließlich eines Modells, das Sie zuvor aus einer anderen Modelfile erstellt haben. So lassen sich Anpassungen schichten, auch wenn es meist übersichtlicher ist, pro klar abgegrenztem Anwendungsfall eine eigene Modelfile zu führen, statt mehrere zu verketten.',
          },
          {
            q: 'Was passiert, wenn ich num_ctx höher setze, als das Basismodell tatsächlich unterstützt?',
            a: 'Das Verhalten unterscheidet sich je nach Modell, aber generell riskieren Sie entweder, dass die Einstellung stillschweigend auf das tatsächliche Maximum des Modells begrenzt wird, oder eine verschlechterte Ausgabequalität jenseits der Länge, für die das Modell gut trainiert wurde. Prüfen Sie die dokumentierte Kontextlänge des Basismodells, bevor Sie num_ctx deutlich über dessen Standardwert hinaus setzen.',
          },
          {
            q: 'Wie teile ich eine angepasste Modelfile mit jemand anderem?',
            a: 'Führen Sie `ollama show --modelfile <ihr-modellname>` aus, um die exakte Modelfile eines bereits erstellten eigenen Modells auszugeben, und teilen Sie diese Datei dann direkt — der Empfänger führt `ollama create` damit lokal aus, sofern er dasselbe Basismodell bereits lokal vorliegen hat.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Technique & Concept Explainers',
    title: 'Comment personnaliser un Modelfile Ollama ?',
    seoTitle: 'Personnaliser un Modelfile Ollama : Guide | Prompt Bites',
    metaDescription: 'Comment personnaliser un Modelfile Ollama pour un cas d\'usage précis : les quatre directives principales, un exemple concret, et quand la personnalisation du Modelfile ne suffit pas et qu\'il faut un véritable fine-tuning.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Développeurs qui personnalisent un Modelfile Ollama pour un cas d\'usage précis',
    siblingBites: ['wsl2-vs-native-windows-ollama', 'lora-vs-full-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Un Modelfile Ollama vous permet de personnaliser le prompt système, les paramètres d\'échantillonnage et le modèle de prompt d\'un modèle de base sans le réentraîner.</strong> Rédigez un fichier texte avec les instructions `FROM`, `SYSTEM`, `PARAMETER` et `TEMPLATE`, puis exécutez `ollama create` pour l\'enregistrer comme nouveau modèle nommé. Cela ne fait qu\'envelopper le modèle de base — cela ne modifie pas ses poids, il ne peut donc pas lui apprendre de nouveaux faits ou compétences.',
    quickAnswerTop: {
      fr: {
        question: 'Comment personnaliser un Modelfile Ollama pour un cas d\'usage précis ?',
        answer: 'Créez un fichier texte nommé Modelfile avec une ligne FROM pointant vers un modèle de base, puis ajoutez SYSTEM pour un prompt système personnalisé, des lignes PARAMETER pour les réglages d\'échantillonnage comme la température, et éventuellement TEMPLATE pour le formatage du prompt. Exécutez `ollama create mymodel -f ./Modelfile` pour l\'enregistrer, puis `ollama run mymodel` pour l\'utiliser.',
        bullets: [
          'FROM définit le modèle de base que le Modelfile enveloppe',
          'SYSTEM définit un prompt système persistant sans avoir à le répéter à chaque requête',
          'PARAMETER contrôle l\'échantillonnage : température, longueur de contexte, séquences d\'arrêt, et plus',
          'Un Modelfile change le comportement, pas les connaissances — pour de nouveaux faits ou compétences, il faut du fine-tuning à la place',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Un Modelfile est un fichier texte avec quatre directives principales — FROM, SYSTEM, PARAMETER, TEMPLATE — qui enveloppe un modèle de base avec une configuration personnalisée',
          'Il ne réentraîne pas le modèle et ne modifie pas ses poids : il change uniquement son comportement au moment de l\'inférence (prompt système, réglages d\'échantillonnage, formatage du prompt)',
          'Exécutez `ollama create mymodel -f ./Modelfile` pour enregistrer un modèle personnalisé, puis utilisez-le comme n\'importe quel autre modèle avec `ollama run mymodel`',
          'Si votre cas d\'usage exige que le modèle apprenne de nouveaux faits, une terminologie ou une compétence qu\'il ne possède pas déjà, un Modelfile seul n\'y suffira pas — il faut du fine-tuning',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Un Modelfile Ollama personnalise le prompt système, les paramètres d\'échantillonnage et le modèle de prompt d\'un modèle de base sans modifier ses poids.' },
          { type: 'plain-terms', text: 'En termes simples : un Modelfile est un fichier de configuration qui enveloppe un modèle existant avec vos propres instructions et réglages — il ne lui apprend rien de nouveau.' },
        ],
      },
      coreDirectives: {
        id: 'core-directives',
        title: 'Les quatre directives principales du Modelfile',
        content: [
          'Un Modelfile est un simple fichier texte, généralement nommé `Modelfile`, composé d\'un petit ensemble de directives. Quatre d\'entre elles couvrent la grande majorité des besoins de personnalisation.',
        ],
        items: [
          '**FROM :** le modèle de base sur lequel s\'appuie ce Modelfile, par exemple `FROM <base-model>:<tag>`. Chaque Modelfile en a besoin d\'exactement une, et elle doit référencer un modèle déjà téléchargé localement (ou un autre modèle personnalisé déjà créé).',
          '**SYSTEM :** un prompt système persistant intégré au modèle, pour éviter de répéter des instructions à chaque requête. Utile pour donner au modèle un rôle fixe, un ton ou des contraintes précises pour un cas d\'usage donné.',
          '**PARAMETER :** réglages d\'échantillonnage et d\'exécution, un par ligne — `temperature` (aléatoire), `num_ctx` (taille de la fenêtre de contexte), `top_p`, `repeat_penalty` et `stop` (séquences qui terminent la génération). Ces valeurs remplacent celles par défaut du modèle de base, uniquement pour ce modèle personnalisé.',
          '**TEMPLATE :** le modèle de formatage du prompt qui contrôle comment les prompts système, les messages utilisateur et les réponses sont assemblés avant d\'être envoyés au modèle. Généralement laissé tel quel, sauf si vous travaillez avec un modèle de base ayant des exigences de formatage non standard.',
        ],
      },
      workedExample: {
        id: 'worked-example',
        title: 'Exemple concret : personnalisation pour un cas d\'usage précis',
        content: [
          'Supposons que vous vouliez une version d\'un modèle de base répondant strictement dans un domaine restreint, avec un aléatoire plus faible et un arrêt strict sur une phrase donnée. Un Modelfile pour ce cas ressemble à peu près à ceci :',
        ],
        codeBlock: 'FROM <base-model>:<tag>\nSYSTEM """\nYou are a support assistant for a specific product. Only answer\nquestions about that product. If asked anything else, say you\ncannot help with that topic.\n"""\nPARAMETER temperature 0.3\nPARAMETER num_ctx 4096\nPARAMETER stop "<END>"',
        codeLanguage: 'text',
        callouts: [
          { type: 'tip', text: 'Enregistrez ce fichier sous <code>Modelfile</code>, puis exécutez <code>ollama create support-bot -f ./Modelfile</code> pour l\'enregistrer, et <code>ollama run support-bot</code> pour l\'utiliser — le prompt système et les paramètres s\'appliquent automatiquement à chaque appel, sans besoin de les repasser à chaque requête.' },
          { type: 'note', text: 'Un Modelfile est le bon outil quand le problème concerne le comportement — ton, périmètre, format de réponse, réglages par défaut. C\'est le mauvais outil quand le problème concerne les connaissances — le modèle ne connaît pas votre terminologie interne, n\'a pas vu vos documents métier, ou se trompe systématiquement sur des faits d\'une manière qu\'aucun prompt système ne peut pleinement corriger. C\'est alors un problème de fine-tuning — voir <a href="/fr/prompt-bites/lora-vs-full-fine-tuning" class="text-primary hover:underline">LoRA vs. Full Fine-Tuning</a> pour choisir entre les deux approches de fine-tuning une fois qu\'un Modelfile ne suffit plus.' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Un Modelfile modifie-t-il les poids du modèle ?',
            a: 'Non. Un Modelfile ne fait qu\'envelopper le modèle de base avec un prompt système, des paramètres d\'échantillonnage et un modèle de prompt — les poids sous-jacents restent totalement inchangés. Si le modèle doit réellement apprendre de nouveaux faits ou une nouvelle compétence, il faut du fine-tuning à la place, pas un Modelfile.',
          },
          {
            q: 'Un Modelfile peut-il s\'appuyer sur un autre modèle personnalisé plutôt que sur un modèle de base ?',
            a: 'Oui — la ligne FROM peut référencer n\'importe quel modèle déjà disponible localement, y compris un modèle que vous avez créé à partir d\'un précédent Modelfile. Cela permet de superposer des personnalisations, même s\'il est généralement plus clair de garder un Modelfile par cas d\'usage distinct plutôt que d\'en enchaîner plusieurs.',
          },
          {
            q: 'Que se passe-t-il si je règle num_ctx plus haut que ce que le modèle de base supporte réellement ?',
            a: 'Le comportement varie selon les modèles, mais en général vous risquez soit que le réglage soit silencieusement plafonné au maximum réel du modèle, soit une dégradation de la qualité des sorties au-delà de la longueur pour laquelle le modèle a été bien entraîné. Vérifiez la longueur de contexte documentée du modèle de base avant de régler num_ctx nettement au-dessus de sa valeur par défaut.',
          },
          {
            q: 'Comment partager un Modelfile personnalisé avec quelqu\'un d\'autre ?',
            a: 'Exécutez `ollama show --modelfile <nom-de-votre-modele>` pour afficher le Modelfile exact d\'un modèle personnalisé déjà créé, puis partagez ce fichier directement — le destinataire exécute `ollama create` avec ce fichier localement, à condition d\'avoir déjà le même modèle de base téléchargé.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Technique & Concept Explainers',
    title: 'Ollama Modelfileをカスタマイズする方法',
    seoTitle: 'Ollama Modelfileカスタマイズガイド | Prompt Bites',
    metaDescription: '特定のユースケース向けにOllama Modelfileをカスタマイズする方法を解説します。4つのコアディレクティブ、実践例、そしてModelfileのカスタマイズだけでは不十分で本格的なファインチューニングが必要になるケースまで。',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '特定のユースケース向けにOllama Modelfileをカスタマイズする開発者',
    siblingBites: ['wsl2-vs-native-windows-ollama', 'lora-vs-full-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollama Modelfileを使うと、ベースモデルを再学習せずにシステムプロンプト、サンプリングパラメータ、プロンプトテンプレートをカスタマイズできます。</strong>`FROM`、`SYSTEM`、`PARAMETER`、`TEMPLATE`の各命令を記述したテキストファイルを作成し、`ollama create`を実行して新しい名前付きモデルとして登録します。これはベースモデルをラップするだけで、重み自体は変更されません。そのため、新しい事実やスキルをモデルに教えることはできません。',
    quickAnswerTop: {
      ja: {
        question: '特定のユースケース向けにOllama Modelfileをカスタマイズするにはどうすればよいですか?',
        answer: 'Modelfileという名前のテキストファイルを作成し、ベースモデルを指すFROM行を記述します。次にカスタムシステムプロンプト用のSYSTEM、temperatureなどのサンプリング設定用のPARAMETER行、必要に応じてプロンプト整形用のTEMPLATEを追加します。`ollama create mymodel -f ./Modelfile`を実行して登録し、`ollama run mymodel`で使用します。',
        bullets: [
          'FROMはModelfileがラップするベースモデルを指定します',
          'SYSTEMはリクエストごとに繰り返す必要のない、持続的なシステムプロンプトを設定します',
          'PARAMETERはtemperature、コンテキスト長、ストップシーケンスなどサンプリングを制御します',
          'Modelfileは知識ではなく振る舞いを変えます。新しい事実やスキルが必要な場合は代わりにファインチューニングが必要です',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Modelfileは、FROM、SYSTEM、PARAMETER、TEMPLATEという4つのコアディレクティブを持つテキストファイルで、カスタム設定でベースモデルをラップします',
          'モデルを再学習したり重みを変更したりはしません。推論時の振る舞い(システムプロンプト、サンプリング設定、プロンプト整形)だけを変更します',
          '`ollama create mymodel -f ./Modelfile`を実行してカスタマイズしたモデルを登録し、その後は`ollama run mymodel`で他のモデルと同様に使用します',
          'ユースケースでモデルがまだ持っていない新しい事実、専門用語、スキルを学習する必要がある場合、Modelfileだけでは不十分です。ファインチューニングが必要になります',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ollama Modelfileは、重みを変更せずにベースモデルのシステムプロンプト、サンプリングパラメータ、プロンプトテンプレートをカスタマイズします。' },
          { type: 'plain-terms', text: '簡単に言うと、Modelfileは既存のモデルを独自の指示や設定でラップする設定ファイルであり、モデルに新しいことを教えるものではありません。' },
        ],
      },
      coreDirectives: {
        id: 'core-directives',
        title: 'Modelfileの4つのコアディレクティブ',
        content: [
          'Modelfileは通常`Modelfile`という名前の単純なテキストファイルで、少数のディレクティブで構成されます。そのうち4つでカスタマイズニーズの大部分をカバーできます。',
        ],
        items: [
          '**FROM:** このModelfileが構築されるベースモデル。例: `FROM <base-model>:<tag>`。すべてのModelfileにはこの行が1つ必要で、すでにローカルにpull済みのモデル(または既に作成した別のカスタムモデル)を参照する必要があります。',
          '**SYSTEM:** モデルに組み込まれる持続的なシステムプロンプトです。これにより、リクエストごとに指示を繰り返す必要がなくなります。特定のユースケースに向けて、モデルに固定の役割、トーン、制約セットを与えるのに便利です。',
          '**PARAMETER:** サンプリングおよび実行時設定を1行ずつ記述します。`temperature`(ランダム性)、`num_ctx`(コンテキストウィンドウのサイズ)、`top_p`、`repeat_penalty`、`stop`(生成を終了させるシーケンス)などです。これらはこのカスタムモデルに限りベースモデルのデフォルト値を上書きします。',
          '**TEMPLATE:** システムプロンプト、ユーザーメッセージ、応答がモデルに送信される前にどのように組み立てられるかを制御するプロンプト整形テンプレートです。標準的でない整形要件を持つベースモデルを扱う場合を除き、通常は変更しません。',
        ],
      },
      workedExample: {
        id: 'worked-example',
        title: '実践例: 特定のユースケース向けのカスタマイズ',
        content: [
          '特定の狭いドメイン内でのみ厳密に回答し、ランダム性を下げ、特定のフレーズで生成を確実に停止させたいベースモデルのバージョンが欲しいとします。そのためのModelfileはおおよそ次のようになります。',
        ],
        codeBlock: 'FROM <base-model>:<tag>\nSYSTEM """\nYou are a support assistant for a specific product. Only answer\nquestions about that product. If asked anything else, say you\ncannot help with that topic.\n"""\nPARAMETER temperature 0.3\nPARAMETER num_ctx 4096\nPARAMETER stop "<END>"',
        codeLanguage: 'text',
        callouts: [
          { type: 'tip', text: 'これを<code>Modelfile</code>として保存し、<code>ollama create support-bot -f ./Modelfile</code>を実行して登録し、<code>ollama run support-bot</code>で使用します。システムプロンプトとパラメータは呼び出しのたびに自動的に適用されるため、リクエストごとに渡し直す必要はありません。' },
          { type: 'note', text: 'Modelfileは、トーン、範囲、応答形式、デフォルト設定といった振る舞いの問題を解決する場合に適したツールです。逆に、モデルが社内の専門用語を知らない、対象分野のドキュメントを見たことがない、あるいはどのシステムプロンプトでも完全には修正できない形で事実を一貫して間違えるといった知識の問題には向きません。それはファインチューニングの問題であり、Modelfileだけでは不十分になった時点でどちらのファインチューニング手法を選ぶかについては<a href="/ja/prompt-bites/lora-vs-full-fine-tuning" class="text-primary hover:underline">LoRA vs. Full Fine-Tuning</a>を参照してください。' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Modelfileはモデルの重みを変更しますか?',
            a: 'いいえ。Modelfileはシステムプロンプト、サンプリングパラメータ、プロンプトテンプレートでベースモデルをラップするだけで、基盤となる重みは完全に変更されません。モデルに実際に新しい事実や新しいスキルを学習させたい場合は、Modelfileではなくファインチューニングが必要です。',
          },
          {
            q: '1つのModelfileはベースモデルの代わりに別のカスタムモデルを基にできますか?',
            a: 'はい。FROM行はすでにローカルで利用可能な任意のモデルを参照でき、以前のModelfileから作成したモデルも含まれます。これによりカスタマイズを重ねることができますが、複数を連鎖させるより、明確に区別されたユースケースごとに1つのModelfileを保つ方が通常は分かりやすくなります。',
          },
          {
            q: 'num_ctxをベースモデルが実際にサポートする値より高く設定するとどうなりますか?',
            a: '挙動はモデルによって異なりますが、一般的には設定がモデルの実際の最大値に暗黙的に制限されるか、モデルがうまく扱えるよう学習された長さを超えて出力品質が低下するリスクがあります。num_ctxをデフォルト値より大幅に高く設定する前に、ベースモデルのドキュメントに記載されたコンテキスト長を確認してください。',
          },
          {
            q: 'カスタマイズしたModelfileを他の人と共有するにはどうすればよいですか?',
            a: '`ollama show --modelfile <モデル名>`を実行すると、既に作成済みのカスタムモデルの正確なModelfileが出力されます。そのファイルを直接共有すれば、受け取った側は同じベースモデルをローカルにpull済みであれば、それを使ってローカルで`ollama create`を実行できます。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Technique & Concept Explainers',
    title: '如何自定义 Ollama Modelfile？',
    seoTitle: 'Ollama Modelfile 自定义指南 | Prompt Bites',
    metaDescription: '如何针对特定用例自定义 Ollama Modelfile：四个核心指令、一个实战示例，以及何时 Modelfile 自定义还不够、需要真正的微调。',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '为特定用例自定义 Ollama Modelfile 的开发者',
    siblingBites: ['wsl2-vs-native-windows-ollama', 'lora-vs-full-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollama Modelfile 让你无需重新训练基础模型，就能自定义其系统提示词、采样参数和提示词模板。</strong>编写一个包含 `FROM`、`SYSTEM`、`PARAMETER` 和 `TEMPLATE` 指令的文本文件，然后运行 `ollama create` 将其注册为新的命名模型。这只是对基础模型的封装——不会改变其权重，因此无法让模型学到新的事实或技能。',
    quickAnswerTop: {
      zh: {
        question: '如何针对特定用例自定义 Ollama Modelfile？',
        answer: '创建一个名为 Modelfile 的文本文件，用 FROM 行指向一个基础模型，然后添加 SYSTEM 设置自定义系统提示词，用 PARAMETER 行设置采样参数（如温度），可选地用 TEMPLATE 设置提示词格式。运行 `ollama create mymodel -f ./Modelfile` 完成注册，再运行 `ollama run mymodel` 即可使用。',
        bullets: [
          'FROM 设定 Modelfile 所封装的基础模型',
          'SYSTEM 设定持久的系统提示词，无需在每次请求中重复',
          'PARAMETER 控制采样：温度、上下文长度、停止序列等',
          'Modelfile 改变的是行为而非知识——若需要新的事实或技能，需要改用微调',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Modelfile 是一个包含四个核心指令的文本文件——FROM、SYSTEM、PARAMETER、TEMPLATE——用自定义配置封装基础模型',
          '它不会重新训练模型或改变其权重：只会改变模型在推理时的行为（系统提示词、采样设置、提示词格式）',
          '运行 `ollama create mymodel -f ./Modelfile` 注册自定义模型，之后即可像使用任何其他模型一样，通过 `ollama run mymodel` 使用它',
          '如果你的用例需要模型学习它尚不具备的新事实、术语或技能，仅靠 Modelfile 无法实现——你需要的是微调',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ollama Modelfile 可以在不改变基础模型权重的前提下，自定义其系统提示词、采样参数和提示词模板。' },
          { type: 'plain-terms', text: '简单来说：Modelfile 是一个配置文件，用你自己的指令和设置封装一个现有模型——它不会教会模型任何新东西。' },
        ],
      },
      coreDirectives: {
        id: 'core-directives',
        title: 'Modelfile 的四个核心指令',
        content: [
          'Modelfile 是一个纯文本文件，通常命名为 `Modelfile`，由少量指令组成。其中四个指令能覆盖绝大多数自定义需求。',
        ],
        items: [
          '**FROM：**该 Modelfile 所基于的基础模型，例如 `FROM <base-model>:<tag>`。每个 Modelfile 都需要且仅需要一行 FROM，并且必须指向本地已拉取的模型（或你已创建的其他自定义模型）。',
          '**SYSTEM：**内置到模型中的持久系统提示词，让你无需在每次请求中重复指令。适合为特定用例赋予模型固定的角色、语气或一组约束条件。',
          '**PARAMETER：**采样与运行时设置，每行一项——`temperature`（随机性）、`num_ctx`（上下文窗口大小）、`top_p`、`repeat_penalty`，以及 `stop`（终止生成的序列）。这些设置仅针对该自定义模型覆盖基础模型的默认值。',
          '**TEMPLATE：**提示词格式模板，控制系统提示词、用户消息和回复在发送给模型前如何组装。除非所用基础模型有非标准的格式要求，通常保持默认即可。',
        ],
      },
      workedExample: {
        id: 'worked-example',
        title: '实战示例：针对特定用例自定义',
        content: [
          '假设你想要一个基础模型的版本，严格只在一个狭窄领域内回答问题，随机性更低，并在特定短语处强制停止生成。对应的 Modelfile 大致如下：',
        ],
        codeBlock: 'FROM <base-model>:<tag>\nSYSTEM """\nYou are a support assistant for a specific product. Only answer\nquestions about that product. If asked anything else, say you\ncannot help with that topic.\n"""\nPARAMETER temperature 0.3\nPARAMETER num_ctx 4096\nPARAMETER stop "<END>"',
        codeLanguage: 'text',
        callouts: [
          { type: 'tip', text: '将其保存为 <code>Modelfile</code>，然后运行 <code>ollama create support-bot -f ./Modelfile</code> 完成注册，再运行 <code>ollama run support-bot</code> 即可使用——系统提示词和参数会在每次调用时自动生效，无需在每次请求中重新传入。' },
          { type: 'note', text: '当问题出在行为层面——语气、范围、回复格式、默认设置——Modelfile 是正确的工具。但当问题出在知识层面——模型不了解你的内部术语，没见过你的领域文档，或在事实上持续出错到任何系统提示词都无法完全纠正的程度——Modelfile 就不是合适的工具了。这属于微调问题，参见<a href="/zh/prompt-bites/lora-vs-full-fine-tuning" class="text-primary hover:underline">LoRA vs. Full Fine-Tuning</a>，了解当 Modelfile 已不够用时如何在两种微调方案之间做选择。' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Modelfile 会改变模型的权重吗？',
            a: '不会。Modelfile 只是用系统提示词、采样参数和提示词模板封装基础模型——底层权重完全不变。如果你确实需要模型学习新的事实或新技能，需要的是微调，而不是 Modelfile。',
          },
          {
            q: '一个 Modelfile 能否基于另一个自定义模型而非基础模型构建？',
            a: '可以——FROM 行可以指向本地已有的任何模型，包括你之前用某个 Modelfile 创建的模型。这样可以叠加自定义配置，不过通常每个明确的用例保留一个独立的 Modelfile，会比链式叠加多个更清晰。',
          },
          {
            q: '如果将 num_ctx 设置得比基础模型实际支持的值更高会怎样？',
            a: '具体表现因模型而异，但通常你会面临两种风险：设置被静默限制在模型实际支持的最大值，或者超出模型训练时能良好处理的长度后输出质量下降。在将 num_ctx 设置得明显高于默认值之前，请先查看基础模型文档中记录的上下文长度。',
          },
          {
            q: '如何将自定义的 Modelfile 分享给其他人？',
            a: '运行 `ollama show --modelfile <你的模型名>`，即可打印出某个已创建的自定义模型的确切 Modelfile，然后直接分享该文件——只要对方本地已拉取相同的基础模型，就可以用它在本地运行 `ollama create`。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Technique & Concept Explainers',
    title: '¿Cómo personalizar un Modelfile de Ollama?',
    seoTitle: 'Guía para personalizar un Modelfile de Ollama | Prompt Bites',
    metaDescription: 'Cómo personalizar un Modelfile de Ollama para un caso de uso específico: las cuatro directivas principales, un ejemplo práctico y cuándo personalizar el Modelfile no es suficiente y necesitas fine-tuning real.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que personalizan un Modelfile de Ollama para un caso de uso específico',
    siblingBites: ['wsl2-vs-native-windows-ollama', 'lora-vs-full-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Un Modelfile de Ollama te permite personalizar el system prompt, los parámetros de sampling y la plantilla de prompt de un modelo base sin reentrenarlo.</strong> Escribe un archivo de texto con las instrucciones `FROM`, `SYSTEM`, `PARAMETER` y `TEMPLATE`, y luego ejecuta `ollama create` para registrarlo como un nuevo modelo con nombre. Esto solo envuelve al modelo base — no cambia sus pesos, así que no puede enseñarle hechos ni habilidades nuevas.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo personalizas un Modelfile de Ollama para un caso de uso específico?',
        answer: 'Crea un archivo de texto llamado Modelfile con una línea FROM que apunte a un modelo base, luego añade SYSTEM para un system prompt personalizado, líneas PARAMETER para ajustes de sampling como la temperature, y opcionalmente TEMPLATE para el formato del prompt. Ejecuta `ollama create mymodel -f ./Modelfile` para registrarlo, y luego `ollama run mymodel` para usarlo.',
        bullets: [
          'FROM define el modelo base que envuelve el Modelfile',
          'SYSTEM define un system prompt persistente sin tener que repetirlo en cada solicitud',
          'PARAMETER controla el sampling: temperature, longitud de contexto, secuencias de parada y más',
          'Un Modelfile cambia el comportamiento, no el conocimiento — para hechos o habilidades nuevas necesitas fine-tuning en su lugar',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Un Modelfile es un archivo de texto con cuatro directivas principales — FROM, SYSTEM, PARAMETER, TEMPLATE — que envuelve a un modelo base con una configuración personalizada',
          'No reentrena el modelo ni cambia sus pesos: solo cambia cómo se comporta el modelo en el momento de la inferencia (system prompt, ajustes de sampling, formato del prompt)',
          'Ejecuta `ollama create mymodel -f ./Modelfile` para registrar un modelo personalizado, y luego úsalo como cualquier otro modelo con `ollama run mymodel`',
          'Si tu caso de uso necesita que el modelo aprenda hechos, terminología o una habilidad nueva que aún no tiene, un Modelfile por sí solo no basta — necesitas fine-tuning',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Un Modelfile de Ollama personaliza el system prompt, los parámetros de sampling y la plantilla de prompt de un modelo base sin cambiar sus pesos.' },
          { type: 'plain-terms', text: 'En términos simples: un Modelfile es un archivo de configuración que envuelve un modelo existente con tus propias instrucciones y ajustes — no le enseña nada nuevo al modelo.' },
        ],
      },
      coreDirectives: {
        id: 'core-directives',
        title: 'Las cuatro directivas principales del Modelfile',
        content: [
          'Un Modelfile es un archivo de texto plano, normalmente llamado `Modelfile`, compuesto por un pequeño conjunto de directivas. Cuatro de ellas cubren la gran mayoría de las necesidades de personalización.',
        ],
        items: [
          '**FROM:** el modelo base sobre el que se construye este Modelfile, por ejemplo `FROM <base-model>:<tag>`. Todo Modelfile necesita exactamente una de estas líneas, y debe hacer referencia a un modelo ya descargado localmente (u otro modelo personalizado que ya hayas creado).',
          '**SYSTEM:** un system prompt persistente integrado en el modelo, para que no tengas que repetir instrucciones en cada solicitud. Útil para darle al modelo un rol fijo, un tono o un conjunto de restricciones para un caso de uso específico.',
          '**PARAMETER:** ajustes de sampling y de ejecución, uno por línea — `temperature` (aleatoriedad), `num_ctx` (tamaño de la ventana de contexto), `top_p`, `repeat_penalty` y `stop` (secuencias que terminan la generación). Estos sobrescriben los valores por defecto del modelo base solo para este modelo personalizado.',
          '**TEMPLATE:** la plantilla de formato del prompt que controla cómo se ensamblan el system prompt, los mensajes del usuario y las respuestas antes de enviarse al modelo. Normalmente se deja tal cual, salvo que trabajes con un modelo base con requisitos de formato no estándar.',
        ],
      },
      workedExample: {
        id: 'worked-example',
        title: 'Ejemplo práctico: personalización para un caso de uso específico',
        content: [
          'Supongamos que quieres una versión de un modelo base que responda estrictamente dentro de un dominio acotado, con menor aleatoriedad y una parada fija ante una frase específica. Un Modelfile para eso se vería más o menos así:',
        ],
        codeBlock: 'FROM <base-model>:<tag>\nSYSTEM """\nYou are a support assistant for a specific product. Only answer\nquestions about that product. If asked anything else, say you\ncannot help with that topic.\n"""\nPARAMETER temperature 0.3\nPARAMETER num_ctx 4096\nPARAMETER stop "<END>"',
        codeLanguage: 'text',
        callouts: [
          { type: 'tip', text: 'Guarda esto como <code>Modelfile</code>, luego ejecuta <code>ollama create support-bot -f ./Modelfile</code> para registrarlo, y <code>ollama run support-bot</code> para usarlo — el system prompt y los parámetros se aplican automáticamente en cada llamada, sin necesidad de pasarlos en cada solicitud.' },
          { type: 'note', text: 'Un Modelfile es la herramienta correcta cuando el problema es de comportamiento — tono, alcance, formato de respuesta, ajustes por defecto. Es la herramienta incorrecta cuando el problema es de conocimiento — el modelo no conoce tu terminología interna, no ha visto los documentos de tu dominio, o se equivoca sistemáticamente en hechos de una forma que ningún system prompt puede corregir del todo. Eso es un problema de fine-tuning en su lugar — consulta <a href="/es/prompt-bites/lora-vs-full-fine-tuning" class="text-primary hover:underline">LoRA vs. Full Fine-Tuning</a> para decidir entre los dos enfoques de fine-tuning una vez que un Modelfile ya no sea suficiente.' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Un Modelfile cambia los pesos del modelo?',
            a: 'No. Un Modelfile solo envuelve el modelo base con un system prompt, parámetros de sampling y una plantilla de prompt — los pesos subyacentes permanecen completamente sin cambios. Si necesitas que el modelo aprenda realmente hechos o una habilidad nueva, necesitas fine-tuning en su lugar, no un Modelfile.',
          },
          {
            q: '¿Puede un Modelfile construirse sobre otro modelo personalizado en lugar de sobre un modelo base?',
            a: 'Sí — la línea FROM puede hacer referencia a cualquier modelo ya disponible localmente, incluido uno que hayas creado a partir de un Modelfile anterior. Esto te permite ir superponiendo personalizaciones, aunque normalmente es más claro mantener un Modelfile por cada caso de uso distinto en lugar de encadenar varios.',
          },
          {
            q: '¿Qué pasa si configuro num_ctx más alto de lo que realmente soporta el modelo base?',
            a: 'El comportamiento varía según el modelo, pero en general te arriesgas a que el ajuste se limite silenciosamente al máximo real del modelo, o a una degradación de la calidad de salida más allá de la longitud para la que el modelo fue bien entrenado. Revisa la longitud de contexto documentada del modelo base antes de fijar num_ctx significativamente por encima de su valor por defecto.',
          },
          {
            q: '¿Cómo comparto un Modelfile personalizado con otra persona?',
            a: 'Ejecuta `ollama show --modelfile <nombre-de-tu-modelo>` para imprimir el Modelfile exacto de un modelo personalizado ya creado, y luego comparte ese archivo directamente — quien lo reciba ejecuta `ollama create` con él de forma local, siempre que tenga descargado el mismo modelo base.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Technique & Concept Explainers',
    title: 'Como personalizar um Modelfile do Ollama?',
    seoTitle: 'Guia para personalizar um Modelfile do Ollama | Prompt Bites',
    metaDescription: 'Como personalizar um Modelfile do Ollama para um caso de uso específico: as quatro diretivas principais, um exemplo prático e quando personalizar o Modelfile não é suficiente e você precisa de fine-tuning de verdade.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores que personalizam um Modelfile do Ollama para um caso de uso específico',
    siblingBites: ['wsl2-vs-native-windows-ollama', 'lora-vs-full-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Um Modelfile do Ollama permite personalizar o system prompt, os parâmetros de sampling e o template de prompt de um modelo base sem retreiná-lo.</strong> Escreva um arquivo de texto com as instruções `FROM`, `SYSTEM`, `PARAMETER` e `TEMPLATE`, e execute `ollama create` para registrá-lo como um novo modelo nomeado. Isso apenas envolve o modelo base — não altera os pesos dele, então não é possível ensinar novos fatos ou habilidades dessa forma.',
    quickAnswerTop: {
      pt: {
        question: 'Como você personaliza um Modelfile do Ollama para um caso de uso específico?',
        answer: 'Crie um arquivo de texto chamado Modelfile com uma linha FROM apontando para um modelo base, depois adicione SYSTEM para um system prompt personalizado, linhas PARAMETER para ajustes de sampling como temperature, e opcionalmente TEMPLATE para a formatação do prompt. Execute `ollama create mymodel -f ./Modelfile` para registrá-lo, e depois `ollama run mymodel` para usá-lo.',
        bullets: [
          'FROM define o modelo base que o Modelfile envolve',
          'SYSTEM define um system prompt persistente sem precisar repeti-lo em cada requisição',
          'PARAMETER controla o sampling: temperature, tamanho de contexto, sequências de parada e mais',
          'Um Modelfile muda o comportamento, não o conhecimento — para novos fatos ou habilidades, você precisa de fine-tuning em vez disso',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Um Modelfile é um arquivo de texto com quatro diretivas principais — FROM, SYSTEM, PARAMETER, TEMPLATE — que envolve um modelo base com uma configuração personalizada',
          'Ele não retreina o modelo nem altera seus pesos: apenas muda como o modelo se comporta no momento da inferência (system prompt, ajustes de sampling, formatação do prompt)',
          'Execute `ollama create mymodel -f ./Modelfile` para registrar um modelo personalizado e depois use-o como qualquer outro modelo com `ollama run mymodel`',
          'Se o seu caso de uso exige que o modelo aprenda novos fatos, terminologia ou uma habilidade que ele ainda não tem, um Modelfile sozinho não resolve — você precisa de fine-tuning',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Um Modelfile do Ollama personaliza o system prompt, os parâmetros de sampling e o template de prompt de um modelo base sem alterar seus pesos.' },
          { type: 'plain-terms', text: 'Em termos simples: um Modelfile é um arquivo de configuração que envolve um modelo já existente com suas próprias instruções e ajustes — ele não ensina nada de novo ao modelo.' },
        ],
      },
      coreDirectives: {
        id: 'core-directives',
        title: 'As quatro diretivas principais do Modelfile',
        content: [
          'Um Modelfile é um arquivo de texto simples, geralmente chamado `Modelfile`, composto por um pequeno conjunto de diretivas. Quatro delas cobrem a grande maioria das necessidades de personalização.',
        ],
        items: [
          '**FROM:** o modelo base sobre o qual esse Modelfile é construído, por exemplo `FROM <base-model>:<tag>`. Todo Modelfile precisa de exatamente uma dessas linhas, e ela deve referenciar um modelo já baixado localmente (ou outro modelo personalizado que você já criou).',
          '**SYSTEM:** um system prompt persistente embutido no modelo, para que você não precise repetir instruções em cada requisição. Útil para dar ao modelo um papel fixo, um tom ou um conjunto de restrições para um caso de uso específico.',
          '**PARAMETER:** ajustes de sampling e de execução, um por linha — `temperature` (aleatoriedade), `num_ctx` (tamanho da janela de contexto), `top_p`, `repeat_penalty` e `stop` (sequências que encerram a geração). Eles sobrescrevem os valores padrão do modelo base apenas para esse modelo personalizado.',
          '**TEMPLATE:** o template de formatação do prompt que controla como o system prompt, as mensagens do usuário e as respostas são montados antes de serem enviados ao modelo. Geralmente é deixado como está, a menos que você trabalhe com um modelo base com requisitos de formatação não padrão.',
        ],
      },
      workedExample: {
        id: 'worked-example',
        title: 'Exemplo prático: personalização para um caso de uso específico',
        content: [
          'Digamos que você queira uma versão de um modelo base que responda estritamente dentro de um domínio restrito, com menor aleatoriedade e uma parada fixa em uma frase específica. Um Modelfile para isso ficaria mais ou menos assim:',
        ],
        codeBlock: 'FROM <base-model>:<tag>\nSYSTEM """\nYou are a support assistant for a specific product. Only answer\nquestions about that product. If asked anything else, say you\ncannot help with that topic.\n"""\nPARAMETER temperature 0.3\nPARAMETER num_ctx 4096\nPARAMETER stop "<END>"',
        codeLanguage: 'text',
        callouts: [
          { type: 'tip', text: 'Salve isso como <code>Modelfile</code>, depois execute <code>ollama create support-bot -f ./Modelfile</code> para registrá-lo, e <code>ollama run support-bot</code> para usá-lo — o system prompt e os parâmetros se aplicam automaticamente em cada chamada, sem precisar passá-los novamente em cada requisição.' },
          { type: 'note', text: 'Um Modelfile é a ferramenta certa quando o problema é de comportamento — tom, escopo, formato de resposta, ajustes padrão. É a ferramenta errada quando o problema é de conhecimento — o modelo não conhece sua terminologia interna, não viu os documentos do seu domínio, ou erra fatos de forma consistente de um jeito que nenhum system prompt consegue corrigir totalmente. Nesse caso, o problema é de fine-tuning — veja <a href="/pt/prompt-bites/lora-vs-full-fine-tuning" class="text-primary hover:underline">LoRA vs. Full Fine-Tuning</a> para decidir entre as duas abordagens de fine-tuning quando um Modelfile já não for suficiente.' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Um Modelfile altera os pesos do modelo?',
            a: 'Não. Um Modelfile apenas envolve o modelo base com um system prompt, parâmetros de sampling e um template de prompt — os pesos subjacentes permanecem completamente inalterados. Se você precisa que o modelo realmente aprenda novos fatos ou uma nova habilidade, precisa de fine-tuning em vez de um Modelfile.',
          },
          {
            q: 'Um Modelfile pode se basear em outro modelo personalizado em vez de um modelo base?',
            a: 'Sim — a linha FROM pode referenciar qualquer modelo já disponível localmente, incluindo um que você criou a partir de um Modelfile anterior. Isso permite empilhar personalizações, embora geralmente seja mais claro manter um Modelfile por caso de uso distinto em vez de encadear vários.',
          },
          {
            q: 'O que acontece se eu definir num_ctx mais alto do que o modelo base realmente suporta?',
            a: 'O comportamento varia de modelo para modelo, mas em geral você corre o risco de o ajuste ser silenciosamente limitado ao máximo real do modelo, ou de uma queda na qualidade da saída além do comprimento para o qual o modelo foi bem treinado. Verifique o comprimento de contexto documentado do modelo base antes de definir num_ctx significativamente acima do padrão.',
          },
          {
            q: 'Como compartilho um Modelfile personalizado com outra pessoa?',
            a: 'Execute `ollama show --modelfile <nome-do-seu-modelo>` para exibir o Modelfile exato de um modelo personalizado já criado, e compartilhe esse arquivo diretamente — quem recebe executa `ollama create` com ele localmente, desde que tenha o mesmo modelo base já baixado.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Technique & Concept Explainers',
    title: 'كيف تُخصّص ملف Modelfile في Ollama؟',
    seoTitle: 'دليل تخصيص Modelfile في Ollama | Prompt Bites',
    metaDescription: 'كيفية تخصيص ملف Modelfile في Ollama لحالة استخدام محددة: التوجيهات الأربعة الأساسية، مثال عملي متكامل، ومتى لا يكفي تخصيص Modelfile وتحتاج إلى fine-tuning حقيقي بدلاً منه.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يخصّصون ملف Modelfile في Ollama لحالة استخدام محددة',
    siblingBites: ['wsl2-vs-native-windows-ollama', 'lora-vs-full-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>يتيح لك ملف Modelfile في Ollama تخصيص system prompt وإعدادات sampling وقالب الـ prompt الخاصة بنموذج أساسي دون إعادة تدريبه.</strong> اكتب ملفًا نصيًا يحتوي على التوجيهات `FROM` و`SYSTEM` و`PARAMETER` و`TEMPLATE`، ثم نفّذ الأمر `ollama create` لتسجيله كنموذج جديد باسم مخصص. هذا لا يفعل أكثر من تغليف النموذج الأساسي — فهو لا يغيّر أوزانه (weights)، وبالتالي لا يمكنه تعليم النموذج حقائق أو مهارات جديدة.',
    quickAnswerTop: {
      ar: {
        question: 'كيف تخصّص ملف Modelfile في Ollama لحالة استخدام محددة؟',
        answer: 'أنشئ ملفًا نصيًا باسم Modelfile يحتوي على سطر FROM يشير إلى نموذج أساسي، ثم أضف SYSTEM لتحديد system prompt مخصص، وأسطر PARAMETER لإعدادات sampling مثل temperature، واختياريًا TEMPLATE لتنسيق الـ prompt. نفّذ الأمر `ollama create mymodel -f ./Modelfile` لتسجيله، ثم `ollama run mymodel` لاستخدامه.',
        bullets: [
          'FROM يحدد النموذج الأساسي الذي يغلّفه Modelfile',
          'SYSTEM يحدد system prompt دائمًا دون الحاجة إلى تكراره في كل طلب',
          'PARAMETER يتحكم في sampling: temperature وطول السياق وتسلسلات التوقف والمزيد',
          'يغيّر Modelfile السلوك وليس المعرفة — للحصول على حقائق أو مهارات جديدة، تحتاج إلى fine-tuning بدلاً من ذلك',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Modelfile هو ملف نصي يحتوي على أربعة توجيهات أساسية — FROM وSYSTEM وPARAMETER وTEMPLATE — يغلّف نموذجًا أساسيًا بتهيئة مخصصة',
          'لا يعيد تدريب النموذج ولا يغيّر أوزانه: يغيّر فقط سلوك النموذج أثناء الاستدلال (system prompt، إعدادات sampling، تنسيق الـ prompt)',
          'نفّذ الأمر `ollama create mymodel -f ./Modelfile` لتسجيل نموذج مخصص، ثم استخدمه مثل أي نموذج آخر عبر `ollama run mymodel`',
          'إذا كانت حالة استخدامك تتطلب من النموذج تعلّم حقائق أو مصطلحات أو مهارة لا يمتلكها بالفعل، فإن Modelfile وحده لن يكفي — ستحتاج إلى fine-tuning',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يخصّص ملف Modelfile في Ollama system prompt وإعدادات sampling وقالب الـ prompt للنموذج الأساسي دون تغيير أوزانه.' },
          { type: 'plain-terms', text: 'بعبارة بسيطة: Modelfile هو ملف تهيئة يغلّف نموذجًا موجودًا بتعليماتك وإعداداتك الخاصة — ولا يعلّم النموذج أي شيء جديد.' },
        ],
      },
      coreDirectives: {
        id: 'core-directives',
        title: 'التوجيهات الأربعة الأساسية في Modelfile',
        content: [
          'Modelfile هو ملف نصي بسيط، يُسمى عادة `Modelfile`، ويتكوّن من مجموعة صغيرة من التوجيهات. أربعة منها تغطي الغالبية العظمى من احتياجات التخصيص.',
        ],
        items: [
          '**FROM:** النموذج الأساسي الذي يُبنى عليه هذا الـ Modelfile، مثل `FROM <base-model>:<tag>`. يحتاج كل Modelfile إلى سطر واحد بالضبط من هذا النوع، ويجب أن يشير إلى نموذج تم تنزيله محليًا بالفعل (أو نموذج مخصص آخر أنشأته سابقًا).',
          '**SYSTEM:** system prompt دائم مدمج في النموذج، حتى لا تضطر إلى تكرار التعليمات في كل طلب. مفيد لإعطاء النموذج دورًا ثابتًا أو نبرة أو مجموعة من القيود لحالة استخدام محددة.',
          '**PARAMETER:** إعدادات sampling وإعدادات وقت التشغيل، سطر واحد لكل إعداد — `temperature` (العشوائية)، و`num_ctx` (حجم نافذة السياق)، و`top_p`، و`repeat_penalty`، و`stop` (تسلسلات تنهي التوليد). هذه الإعدادات تتجاوز القيم الافتراضية للنموذج الأساسي، لكن فقط لهذا النموذج المخصص.',
          '**TEMPLATE:** قالب تنسيق الـ prompt الذي يتحكم في كيفية تجميع system prompt ورسائل المستخدم والردود قبل إرسالها إلى النموذج. عادة ما يُترك دون تغيير، إلا إذا كنت تعمل مع نموذج أساسي له متطلبات تنسيق غير قياسية.',
        ],
      },
      workedExample: {
        id: 'worked-example',
        title: 'مثال عملي: التخصيص لحالة استخدام محددة',
        content: [
          'لنفترض أنك تريد نسخة من نموذج أساسي تجيب بشكل صارم ضمن مجال ضيق محدد، مع عشوائية أقل وتوقف ثابت عند عبارة معينة. يبدو Modelfile الخاص بذلك تقريبًا كما يلي:',
        ],
        codeBlock: 'FROM <base-model>:<tag>\nSYSTEM """\nYou are a support assistant for a specific product. Only answer\nquestions about that product. If asked anything else, say you\ncannot help with that topic.\n"""\nPARAMETER temperature 0.3\nPARAMETER num_ctx 4096\nPARAMETER stop "<END>"',
        codeLanguage: 'text',
        callouts: [
          { type: 'tip', text: 'احفظ هذا الملف باسم <code>Modelfile</code>، ثم نفّذ الأمر <code>ollama create support-bot -f ./Modelfile</code> لتسجيله، و<code>ollama run support-bot</code> لاستخدامه — يُطبّق system prompt والإعدادات تلقائيًا مع كل استدعاء، دون الحاجة إلى تمريرها في كل طلب.' },
          { type: 'note', text: 'Modelfile هو الأداة الصحيحة عندما تكون المشكلة متعلقة بالسلوك — النبرة، النطاق، تنسيق الرد، الإعدادات الافتراضية. وهو الأداة الخاطئة عندما تكون المشكلة متعلقة بالمعرفة — عندما لا يعرف النموذج مصطلحاتك الداخلية، أو لم يطّلع على مستندات مجالك، أو يخطئ باستمرار في حقائق بطريقة لا يمكن لأي system prompt تصحيحها بالكامل. هذه مشكلة fine-tuning بدلاً من ذلك — راجع <a href="/ar/prompt-bites/lora-vs-full-fine-tuning" class="text-primary hover:underline">LoRA vs. Full Fine-Tuning</a> لمعرفة كيفية الاختيار بين أسلوبَي fine-tuning بمجرد أن يصبح Modelfile غير كافٍ.' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يغيّر Modelfile أوزان النموذج؟',
            a: 'لا. يقوم Modelfile فقط بتغليف النموذج الأساسي بـ system prompt وإعدادات sampling وقالب prompt — تبقى الأوزان الأساسية دون تغيير تمامًا. إذا كنت تريد أن يتعلّم النموذج فعليًا حقائق جديدة أو مهارة جديدة، فأنت بحاجة إلى fine-tuning بدلاً من Modelfile.',
          },
          {
            q: 'هل يمكن أن يُبنى Modelfile واحد على نموذج مخصص آخر بدلاً من نموذج أساسي؟',
            a: 'نعم — يمكن لسطر FROM أن يشير إلى أي نموذج متاح محليًا بالفعل، بما في ذلك نموذج أنشأته من Modelfile سابق. يتيح هذا تكديس التخصيصات، رغم أنه عادة ما يكون من الأوضح الاحتفاظ بملف Modelfile واحد لكل حالة استخدام مميزة بدلاً من ربط عدة ملفات ببعضها.',
          },
          {
            q: 'ماذا يحدث إذا ضبطت num_ctx على قيمة أعلى مما يدعمه النموذج الأساسي فعليًا؟',
            a: 'يختلف السلوك حسب النموذج، لكن بشكل عام تخاطر إما بتقييد الإعداد ضمنيًا عند الحد الأقصى الفعلي للنموذج، أو بتراجع جودة المخرجات بعد تجاوز الطول الذي دُرّب النموذج للتعامل معه جيدًا. تحقق من طول السياق الموثّق للنموذج الأساسي قبل ضبط num_ctx على قيمة أعلى بكثير من الافتراضي.',
          },
          {
            q: 'كيف أشارك Modelfile مخصصًا مع شخص آخر؟',
            a: 'نفّذ الأمر `ollama show --modelfile <اسم-نموذجك>` لطباعة Modelfile الدقيق لنموذج مخصص تم إنشاؤه بالفعل، ثم شارك هذا الملف مباشرة — يقوم المستلم بتنفيذ `ollama create` به محليًا، طالما أن لديه نفس النموذج الأساسي مُنزّلاً بالفعل.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Technique & Concept Explainers',
    title: 'Ollama Modelfile을 커스터마이징하는 방법',
    seoTitle: 'Ollama Modelfile 커스터마이징 가이드 | Prompt Bites',
    metaDescription: '특정 사용 사례에 맞게 Ollama Modelfile을 커스터마이징하는 방법을 설명합니다. 네 가지 핵심 지시어, 실제 예제, 그리고 Modelfile 커스터마이징만으로는 부족하고 진짜 fine-tuning이 필요한 경우까지 다룹니다.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '특정 사용 사례에 맞게 Ollama Modelfile을 커스터마이징하는 개발자',
    siblingBites: ['wsl2-vs-native-windows-ollama', 'lora-vs-full-fine-tuning'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollama Modelfile을 사용하면 기본 모델을 재학습하지 않고도 system prompt, 샘플링 파라미터, 프롬프트 템플릿을 커스터마이징할 수 있습니다.</strong> `FROM`, `SYSTEM`, `PARAMETER`, `TEMPLATE` 지시어를 담은 텍스트 파일을 작성한 뒤 `ollama create`를 실행하면 새로운 이름의 모델로 등록됩니다. 이는 기본 모델을 감싸는 것일 뿐이며, 가중치(weights)를 변경하지 않으므로 모델에 새로운 사실이나 능력을 가르칠 수는 없습니다.',
    quickAnswerTop: {
      ko: {
        question: '특정 사용 사례에 맞게 Ollama Modelfile을 어떻게 커스터마이징합니까?',
        answer: 'Modelfile이라는 이름의 텍스트 파일을 만들고 기본 모델을 가리키는 FROM 줄을 작성합니다. 그런 다음 커스텀 system prompt를 위한 SYSTEM, temperature와 같은 샘플링 설정을 위한 PARAMETER 줄, 필요하다면 프롬프트 형식을 위한 TEMPLATE을 추가합니다. `ollama create mymodel -f ./Modelfile`을 실행해 등록하고, `ollama run mymodel`로 사용합니다.',
        bullets: [
          'FROM은 Modelfile이 감싸는 기본 모델을 지정합니다',
          'SYSTEM은 매 요청마다 반복할 필요 없는 지속적인 system prompt를 설정합니다',
          'PARAMETER는 temperature, 컨텍스트 길이, 정지 시퀀스 등 샘플링을 제어합니다',
          'Modelfile은 지식이 아니라 행동을 바꿉니다. 새로운 사실이나 능력이 필요하다면 대신 fine-tuning이 필요합니다',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Modelfile은 FROM, SYSTEM, PARAMETER, TEMPLATE이라는 네 가지 핵심 지시어로 구성된 텍스트 파일이며, 커스텀 설정으로 기본 모델을 감쌉니다',
          '모델을 재학습시키거나 가중치를 변경하지 않습니다. 추론 시점의 행동(system prompt, 샘플링 설정, 프롬프트 형식)만 바꿉니다',
          '`ollama create mymodel -f ./Modelfile`을 실행해 커스터마이징된 모델을 등록한 뒤, `ollama run mymodel`로 다른 모델과 동일하게 사용합니다',
          '사용 사례에서 모델이 아직 갖고 있지 않은 새로운 사실, 용어, 능력을 학습해야 한다면 Modelfile만으로는 부족합니다. fine-tuning이 필요합니다',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ollama Modelfile은 가중치를 변경하지 않고도 기본 모델의 system prompt, 샘플링 파라미터, 프롬프트 템플릿을 커스터마이징합니다.' },
          { type: 'plain-terms', text: '쉽게 말하면, Modelfile은 기존 모델을 자신만의 지시와 설정으로 감싸는 설정 파일입니다. 모델에 새로운 것을 가르치지는 않습니다.' },
        ],
      },
      coreDirectives: {
        id: 'core-directives',
        title: 'Modelfile의 네 가지 핵심 지시어',
        content: [
          'Modelfile은 보통 `Modelfile`이라는 이름을 가진 순수 텍스트 파일이며, 소수의 지시어로 구성됩니다. 그중 네 가지가 대부분의 커스터마이징 요구를 충족합니다.',
        ],
        items: [
          '**FROM:** 이 Modelfile이 기반으로 하는 기본 모델을 지정합니다. 예: `FROM <base-model>:<tag>`. 모든 Modelfile은 정확히 하나의 FROM 줄이 필요하며, 이미 로컬에 받아둔 모델(또는 이미 만들어 둔 다른 커스텀 모델)을 참조해야 합니다.',
          '**SYSTEM:** 모델에 내장되는 지속적인 system prompt로, 매 요청마다 지시를 반복할 필요가 없게 해줍니다. 특정 사용 사례를 위해 모델에 고정된 역할, 톤, 제약 조건 집합을 부여할 때 유용합니다.',
          '**PARAMETER:** 샘플링 및 런타임 설정을 한 줄씩 지정합니다. `temperature`(무작위성), `num_ctx`(컨텍스트 윈도우 크기), `top_p`, `repeat_penalty`, 생성을 종료시키는 시퀀스인 `stop`이 있습니다. 이 값들은 이 커스텀 모델에 한해 기본 모델의 기본값을 덮어씁니다.',
          '**TEMPLATE:** system prompt, 사용자 메시지, 응답이 모델로 전송되기 전에 어떻게 조합되는지를 제어하는 프롬프트 형식 템플릿입니다. 비표준 형식을 요구하는 기본 모델을 다루는 경우가 아니라면 보통 그대로 둡니다.',
        ],
      },
      workedExample: {
        id: 'worked-example',
        title: '실제 예제: 특정 사용 사례에 맞춘 커스터마이징',
        content: [
          '좁은 특정 도메인 안에서만 엄격하게 답변하고, 무작위성을 낮추며, 특정 문구에서 확실히 생성을 멈추는 기본 모델 버전을 원한다고 가정해 보겠습니다. 이를 위한 Modelfile은 대략 다음과 같습니다.',
        ],
        codeBlock: 'FROM <base-model>:<tag>\nSYSTEM """\nYou are a support assistant for a specific product. Only answer\nquestions about that product. If asked anything else, say you\ncannot help with that topic.\n"""\nPARAMETER temperature 0.3\nPARAMETER num_ctx 4096\nPARAMETER stop "<END>"',
        codeLanguage: 'text',
        callouts: [
          { type: 'tip', text: '이 내용을 <code>Modelfile</code>로 저장한 뒤 <code>ollama create support-bot -f ./Modelfile</code>을 실행해 등록하고, <code>ollama run support-bot</code>으로 사용합니다. system prompt와 파라미터는 매 호출마다 자동으로 적용되므로 매 요청마다 다시 전달할 필요가 없습니다.' },
          { type: 'note', text: 'Modelfile은 문제가 행동에 관한 것일 때, 즉 톤, 범위, 응답 형식, 기본 설정에 관한 것일 때 적합한 도구입니다. 반면 문제가 지식에 관한 것일 때, 즉 모델이 내부 용어를 모르거나, 도메인 문서를 본 적이 없거나, 어떤 system prompt로도 완전히 고칠 수 없는 방식으로 사실을 지속적으로 틀리는 경우라면 Modelfile은 적합한 도구가 아닙니다. 이는 대신 fine-tuning 문제이며, Modelfile만으로 부족해졌을 때 두 가지 fine-tuning 방식 중 무엇을 선택할지는 <a href="/ko/prompt-bites/lora-vs-full-fine-tuning" class="text-primary hover:underline">LoRA vs. Full Fine-Tuning</a>을 참고하십시오.' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Modelfile은 모델의 가중치를 변경합니까?',
            a: '아닙니다. Modelfile은 system prompt, 샘플링 파라미터, 프롬프트 템플릿으로 기본 모델을 감쌀 뿐이며, 기저 가중치는 전혀 변경되지 않습니다. 모델이 실제로 새로운 사실이나 새로운 능력을 학습하게 하려면 Modelfile이 아니라 fine-tuning이 필요합니다.',
          },
          {
            q: '하나의 Modelfile이 기본 모델 대신 다른 커스텀 모델을 기반으로 만들어질 수 있습니까?',
            a: '가능합니다. FROM 줄은 이미 로컬에서 사용 가능한 어떤 모델이든 참조할 수 있으며, 이전 Modelfile로 만든 모델도 포함됩니다. 이를 통해 커스터마이징을 겹겹이 쌓을 수 있지만, 여러 개를 연쇄적으로 연결하기보다는 뚜렷이 구분되는 사용 사례마다 하나의 Modelfile을 유지하는 편이 대체로 더 명확합니다.',
          },
          {
            q: 'num_ctx를 기본 모델이 실제로 지원하는 값보다 높게 설정하면 어떻게 됩니까?',
            a: '동작은 모델마다 다르지만, 일반적으로 설정값이 모델의 실제 최댓값으로 조용히 제한되거나, 모델이 잘 처리하도록 학습된 길이를 넘어서면서 출력 품질이 저하될 위험이 있습니다. num_ctx를 기본값보다 훨씬 높게 설정하기 전에 기본 모델의 문서화된 컨텍스트 길이를 확인하십시오.',
          },
          {
            q: '커스터마이징한 Modelfile을 다른 사람과 어떻게 공유합니까?',
            a: '`ollama show --modelfile <모델-이름>`을 실행하면 이미 만들어진 커스텀 모델의 정확한 Modelfile이 출력됩니다. 이 파일을 그대로 공유하면, 수신자는 동일한 기본 모델을 로컬에 이미 받아 두었다는 전제 하에 로컬에서 `ollama create`를 실행할 수 있습니다.',
          },
        ],
      },
    },
  },
}
