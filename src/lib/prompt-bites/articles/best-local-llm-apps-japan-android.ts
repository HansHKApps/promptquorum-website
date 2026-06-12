import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    title: 'What Are the Best Local LLM Apps for Android in Japan?',
    seoTitle: 'Best Android LLMs Japan 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'MLC Chat runs Rinna 3.6B on 4 GB RAM. PocketPal AI handles ELYZA-7B on 6 GB. Termux+Ollama adds Qwen3 7B for 8 GB+ devices. All run offline in Japan.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'ELYZA-7B', 'Qwen3 7B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'Android users in Japan running local LLMs',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'What are the best local LLM apps for Android in Japan?',
        answer: 'MLC Chat, PocketPal AI, and Ollama via Termux are the best options for Android users in Japan. Japanese models like Rinna 3.6B and ELYZA-7B run fully locally and support the Japanese Play Store.',
        bullets: [
          'MLC Chat: easiest setup, preoptimized models including Rinna 3.6B for Japanese',
          'PocketPal AI: any GGUF model including ELYZA-7B, full Japanese support',
          'Termux + Ollama: full Ollama library including Qwen3 7B, requires 8 GB RAM',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Welche lokalen LLM-Apps für Android sind in Japan am beliebtesten?',
        answer: 'MLC Chat, PocketPal AI und Ollama (via Termux) sind die besten Optionen für Android-Nutzer in Japan. Japanische Modelle wie Rinna 3.6B und ELYZA-7B sind lokal verfügbar und laufen offline.',
        bullets: [
          'MLC Chat: einfachster Einstieg, voroptimierte Modelle inkl. Rinna 3.6B',
          'PocketPal AI: beliebige GGUF-Modelle inkl. ELYZA-7B, volle Japanisch-Unterstützung',
          'Termux + Ollama: volle Ollama-Bibliothek inkl. Qwen3 7B, benötigt 8 GB RAM',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Quelles sont les meilleures apps LLM locales pour Android au Japon ?',
        answer: 'MLC Chat, PocketPal AI et Ollama via Termux sont les meilleures options pour les utilisateurs Android au Japon. Les modèles japonais Rinna 3.6B et ELYZA-7B fonctionnent entièrement en local.',
        bullets: [
          'MLC Chat : configuration la plus simple, modèles préoptimisés dont Rinna 3.6B',
          'PocketPal AI : tout modèle GGUF dont ELYZA-7B, support japonais complet',
          'Termux + Ollama : bibliothèque Ollama complète dont Qwen3 7B, nécessite 8 Go de RAM',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '日本で人気のAndroidローカルLLMアプリは？',
        answer: 'MLC Chat、PocketPal AI、Termux経由のOllamaが日本のAndroidユーザーに最適です。Rinna 3.6BやELYZA-7Bなどの日本語モデルがローカルで利用可能です。',
        bullets: [
          'MLC Chat：最も簡単なセットアップ、Rinna 3.6Bを含む最適化済みモデル',
          'PocketPal AI：ELYZA-7Bを含む任意のGGUFモデル、完全日本語対応',
          'Termux + Ollama：Qwen3 7Bを含む完全なOllamaライブラリ、8GB RAM必要',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '日本最受欢迎的Android本地LLM应用是什么？',
        answer: 'MLC Chat、PocketPal AI和Termux版Ollama是日本Android用户的最佳选择。Rinna 3.6B和ELYZA-7B等日语模型可在本地运行。',
        bullets: [
          'MLC Chat：最简单安装，含Rinna 3.6B的预优化模型',
          'PocketPal AI：含ELYZA-7B的任意GGUF模型，完整日语支持',
          'Termux + Ollama：含Qwen3 7B的完整Ollama库，需8 GB内存',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat is the easiest entry point in Japan — available on the Japanese Google Play Store with preoptimized Japanese models including Rinna 3.6B',
          'PocketPal AI supports any GGUF model from Hugging Face including ELYZA-7B, the strongest Japanese instruction-following model at the 7B tier',
          'Termux + Ollama on Android unlocks the full Ollama model library including Qwen3 7B for Japanese/Chinese/English multilingual use, but requires 8 GB RAM',
          'Japanese tokenization runs ~30% slower than English on the same model — plan for lower tok/s when benchmarking Japanese inference on mobile',
        ],
      },
      body1: {
        title: 'The 3 Best Apps with Japanese Language Support',
        content: [
          '<strong>As of May 2026, three Android apps support Japanese-language local LLMs on the Japanese Play Store: MLC Chat, PocketPal AI, and Ollama via Termux.</strong> All three run fully offline after the initial model download — no data ever reaches a cloud server, which directly addresses APPI (個人情報保護法, Japan\'s Personal Information Protection Act) compliance for personal conversations.',
          'MLC Chat offers the fastest time to first token. Its preoptimized model list includes Rinna 3.6B, a lightweight Japanese-native model that fits in 3 GB RAM. On a Xperia 1 VI or Samsung Galaxy S24 with 12 GB RAM, Rinna 3.6B Q4 runs at 6–10 tok/s — comfortable for conversational use. Setup takes under 10 minutes with no command-line experience required.',
          'PocketPal AI, developed by the Hugging Face community, loads any GGUF file directly from Hugging Face. This makes ELYZA-7B and Qwen3 7B available without waiting for an app-curated release. The tradeoff is a slightly longer setup requiring manual model selection. See the <a href="/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia local LLM guide</a> for device-specific RAM and storage tips.',
        ],
        columns: ['App', 'Min RAM', 'Japanese Model Support'],
        rows: [
          { 'App': 'MLC Chat', 'Min RAM': '4 GB', 'Japanese Model Support': 'Preoptimized models incl. Rinna 3.6B' },
          { 'App': 'PocketPal AI', 'Min RAM': '4 GB', 'Japanese Model Support': 'Any GGUF incl. ELYZA-7B' },
          { 'App': 'Termux + Ollama', 'Min RAM': '8 GB', 'Japanese Model Support': 'Full Ollama library incl. Qwen3 7B' },
        ],
        note: 'Decision guide: Use MLC Chat for beginner setup. Use PocketPal AI for full model flexibility without a terminal. Use Termux + Ollama only with 8 GB RAM or more.',
      },
      body2: {
        title: 'How to Choose the Right Japanese Model',
        content: [
          '<strong>As of May 2026, three Japanese-capable models cover the practical use cases on mid-range to flagship Android devices.</strong> The right choice depends on your RAM, your primary task, and whether you need multilingual output.',
          'Rinna 3.6B is the lightweight option: Japanese-native, trained on Japanese web corpus, and runs on 3 GB RAM minimum. It handles casual conversation, text summarization, and short-form generation well. It is the right pick for an Xperia 10 VI (4–6 GB RAM) or any mid-range device where a 7B model would be too slow.',
          'ELYZA-7B delivers the strongest Japanese instruction-following performance at the 7B tier. It requires 6 GB RAM minimum and runs comfortably on a Xperia 5 V, Xperia 1 VI, or Samsung Galaxy S24. Use ELYZA-7B for tasks requiring multi-step instructions, structured output, or nuanced Japanese writing.',
          'Qwen3 7B is the multilingual pick: trained on Japanese, Chinese, and English corpora. It requires 6 GB RAM minimum and produces fluent output in all three languages within a single conversation. Use Qwen3 7B when your workflow spans JA/ZH/EN — for example, translating or summarizing cross-language business documents.',
          'Important: Japanese tokenization is approximately 30% heavier than English for the same model. A device that runs a 7B English model at 8 tok/s will produce roughly 5–6 tok/s in Japanese. Factor this into your hardware decision. For CPU-only model recommendations, see <a href="/local-llms/best-cpu-only-llm" class="text-primary hover:underline">best CPU-only LLMs</a>. For a full setup guide, see the <a href="/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">best local LLM apps for Android guide</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Android LLMs in Japan',
        faqs: [
          {
            q: 'Do Japanese local LLM models work offline?',
            a: 'Yes. All three models — Rinna 3.6B, ELYZA-7B, and Qwen3 7B — run fully offline after the initial download. No data is sent to any server, which makes them compliant with APPI requirements for handling personal information locally.',
          },
          {
            q: 'Which model runs best on a Xperia with 6 GB RAM?',
            a: 'ELYZA-7B and Qwen3 7B both run on 6 GB RAM minimum. On a Xperia 5 V with 8 GB RAM you can run either at a comfortable speed. For Xperia 10 VI with 4–6 GB RAM, Rinna 3.6B is the better fit. See the <a href="/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia local LLM guide</a> for step-by-step setup.',
          },
          {
            q: 'What are the APPI benefits of running a local LLM?',
            a: 'Under APPI (個人情報保護法), personal data processed by a cloud AI may require a third-party provision notice and user consent. Running a local LLM means your conversation data never leaves the device — no cloud storage, no third-party data transfer, and no additional consent burden for personal-use applications.',
          },
          {
            q: 'Can you use Japanese voice input with these LLM apps?',
            a: 'Yes. Standard Japanese voice input via the Android keyboard (Google Japanese Input or Gboard) works with all three apps — MLC Chat, PocketPal AI, and Termux + Ollama. Type or dictate in Japanese; the model processes it the same way. No special voice integration setup is required.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    title: 'Welche lokalen LLM-Apps für Android sind in Japan am beliebtesten?',
    seoTitle: 'Beste Android LLMs Japan 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'MLC Chat (Rinna 3.6B, 4 GB RAM), PocketPal AI (ELYZA-7B, 6 GB) und Termux+Ollama (Qwen3 7B, 8 GB) sind die besten Android-Apps für lokale LLMs in Japan.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'ELYZA-7B', 'Qwen3 7B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'Android-Nutzer in Japan, die lokale LLMs betreiben',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      de: {
        question: 'Welche lokalen LLM-Apps für Android sind in Japan am beliebtesten?',
        answer: 'MLC Chat, PocketPal AI und Ollama (via Termux) sind die besten Optionen für Android-Nutzer in Japan. Japanische Modelle wie Rinna 3.6B und ELYZA-7B sind lokal verfügbar und laufen offline.',
        bullets: [
          'MLC Chat: einfachster Einstieg, voroptimierte Modelle inkl. Rinna 3.6B',
          'PocketPal AI: beliebige GGUF-Modelle inkl. ELYZA-7B, volle Japanisch-Unterstützung',
          'Termux + Ollama: volle Ollama-Bibliothek inkl. Qwen3 7B, benötigt 8 GB RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat ist der einfachste Einstieg in Japan — im japanischen Google Play Store erhältlich, mit voroptimiertem Rinna 3.6B für Japanisch',
          'PocketPal AI unterstützt beliebige GGUF-Modelle von Hugging Face, einschließlich ELYZA-7B, dem stärksten japanischen Instruktionsmodell auf 7B-Ebene',
          'Termux + Ollama auf Android schaltet die vollständige Ollama-Bibliothek frei, einschließlich Qwen3 7B für mehrsprachigen Einsatz auf Japanisch, Chinesisch und Englisch',
          'Japanische Tokenisierung läuft beim gleichen Modell ca. 30 % langsamer als Englisch — beim Benchmarking japanischer Inferenz auf Mobilgeräten entsprechend niedrigere tok/s einplanen',
        ],
      },
      body1: {
        title: 'Die 3 besten Apps mit japanischer Sprachunterstützung',
        content: [
          '<strong>Stand Mai 2026 unterstützen drei Android-Apps japanischsprachige lokale LLMs im japanischen Play Store: MLC Chat, PocketPal AI und Ollama via Termux.</strong> Alle drei laufen nach dem ersten Modell-Download vollständig offline — keine Daten gelangen jemals auf einen Cloud-Server, was APPI (個人情報保護法, Japans Datenschutzgesetz) für persönliche Gespräche direkt adressiert.',
          'MLC Chat bietet die kürzeste Zeit bis zum ersten Token. Die voroptimierte Modellliste enthält Rinna 3.6B, ein leichtgewichtiges japanisches Nativmodell, das mit 3 GB RAM auskommt. Auf einem Xperia 1 VI oder Samsung Galaxy S24 mit 12 GB RAM erreicht Rinna 3.6B Q4 eine Geschwindigkeit von 6–10 tok/s — angenehm für die Konversationsnutzung. Die Einrichtung dauert unter 10 Minuten ohne Kommandozeilenerfahrung.',
          'PocketPal AI, entwickelt von der Hugging-Face-Community, lädt beliebige GGUF-Dateien direkt von Hugging Face. Damit sind ELYZA-7B und Qwen3 7B verfügbar, ohne auf eine kurierte App-Version warten zu müssen. Als Kompromiss ist ein etwas längerer Einrichtungsvorgang mit manueller Modellauswahl erforderlich. Gerätespezifische RAM- und Speichertipps finden Sie im <a href="/de/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia-LLM-Leitfaden</a>.',
        ],
        columns: ['App', 'Min. RAM', 'Japanische Modellunterstützung'],
        rows: [
          { 'App': 'MLC Chat', 'Min. RAM': '4 GB', 'Japanische Modellunterstützung': 'Voroptimierte Modelle inkl. Rinna 3.6B' },
          { 'App': 'PocketPal AI', 'Min. RAM': '4 GB', 'Japanische Modellunterstützung': 'Beliebige GGUF inkl. ELYZA-7B' },
          { 'App': 'Termux + Ollama', 'Min. RAM': '8 GB', 'Japanische Modellunterstützung': 'Vollständige Ollama-Bibliothek inkl. Qwen3 7B' },
        ],
        note: 'Entscheidungshilfe: MLC Chat für Einsteiger. PocketPal AI für volle Modellflexibilität ohne Terminal. Termux + Ollama nur mit 8 GB RAM oder mehr.',
      },
      body2: {
        title: 'So wählen Sie das richtige japanische Modell',
        content: [
          '<strong>Stand Mai 2026 decken drei japanischfähige Modelle die praktischen Anwendungsfälle auf Mittelklasse- bis Flaggschiff-Android-Geräten ab.</strong> Die richtige Wahl hängt vom verfügbaren RAM, der primären Aufgabe und dem Bedarf an mehrsprachigem Output ab.',
          'Rinna 3.6B ist die leichtgewichtige Option: japanisches Nativmodell, trainiert auf japanischem Web-Korpus, läuft mit mindestens 3 GB RAM. Es eignet sich gut für Casual-Konversation, Textzusammenfassung und Kurzformgenerierung. Auf einem Xperia 10 VI (4–6 GB RAM) oder jedem Mittelklassegerät, auf dem ein 7B-Modell zu langsam wäre, ist Rinna 3.6B die richtige Wahl.',
          'ELYZA-7B bietet die stärkste japanische Instruktionsausführung auf 7B-Ebene. Es benötigt mindestens 6 GB RAM und läuft komfortabel auf einem Xperia 5 V, Xperia 1 VI oder Samsung Galaxy S24. Verwenden Sie ELYZA-7B für Aufgaben, die mehrstufige Anweisungen, strukturierten Output oder nuanciertes japanisches Schreiben erfordern.',
          'Qwen3 7B ist die mehrsprachige Option: trainiert auf japanischen, chinesischen und englischen Korpora. Es benötigt mindestens 6 GB RAM und erzeugt in einem einzigen Gespräch fließende Ausgaben in allen drei Sprachen. Verwenden Sie Qwen3 7B, wenn Ihr Workflow JA/ZH/EN umfasst — zum Beispiel für die Übersetzung oder Zusammenfassung sprachübergreifender Geschäftsdokumente.',
          'Wichtig: Japanische Tokenisierung ist beim gleichen Modell etwa 30 % aufwendiger als Englisch. Ein Gerät, das ein englisches 7B-Modell mit 8 tok/s betreibt, liefert auf Japanisch etwa 5–6 tok/s. Beziehen Sie dies in Ihre Hardwareentscheidung ein. CPU-only-Modellempfehlungen finden Sie unter <a href="/de/local-llms/best-cpu-only-llm" class="text-primary hover:underline">beste CPU-only LLMs</a>. Den vollständigen Einrichtungsleitfaden finden Sie im <a href="/de/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">Leitfaden für die besten lokalen LLM-Apps für Android</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Android-LLMs in Japan',
        faqs: [
          {
            q: 'Funktionieren japanische lokale LLM-Modelle offline?',
            a: 'Ja. Alle drei Modelle — Rinna 3.6B, ELYZA-7B und Qwen3 7B — laufen nach dem ersten Download vollständig offline. Es werden keine Daten an Server gesendet, was die APPI-Anforderungen für die lokale Verarbeitung personenbezogener Daten erfüllt.',
          },
          {
            q: 'Welches Modell läuft am besten auf einem Xperia mit 6 GB RAM?',
            a: 'ELYZA-7B und Qwen3 7B benötigen jeweils mindestens 6 GB RAM. Auf einem Xperia 5 V mit 8 GB RAM laufen beide mit komfortabler Geschwindigkeit. Für das Xperia 10 VI mit 4–6 GB RAM ist Rinna 3.6B die bessere Wahl. Schritt-für-Schritt-Anleitung im <a href="/de/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia-LLM-Leitfaden</a>.',
          },
          {
            q: 'Welche APPI-Vorteile bietet ein lokales LLM?',
            a: 'Nach dem APPI (個人情報保護法) kann die Cloud-Verarbeitung personenbezogener Daten eine Benachrichtigungspflicht gegenüber Dritten und eine Nutzereinwilligung erfordern. Bei einem lokalen LLM verlässt kein Gesprächsdatum das Gerät — kein Cloud-Speicher, kein Datentransfer an Dritte und keine zusätzliche Einwilligungspflicht für private Anwendungen.',
          },
          {
            q: 'Kann man japanische Spracheingabe mit diesen LLM-Apps kombinieren?',
            a: 'Ja. Die Standard-japanische Spracheingabe über die Android-Tastatur (Google Japanese Input oder Gboard) funktioniert mit allen drei Apps — MLC Chat, PocketPal AI und Termux + Ollama. Sprechen oder tippen Sie auf Japanisch; das Modell verarbeitet die Eingabe auf dieselbe Weise. Eine gesonderte Sprachintegration ist nicht erforderlich.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    title: 'Quelles sont les meilleures apps LLM locales pour Android au Japon ?',
    seoTitle: 'LLM Apps Android Japon 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'MLC Chat, PocketPal AI et Termux+Ollama : les 3 apps Android pour LLM local au Japon. Rinna 3.6B : 4 Go, ELYZA-7B : 6 Go, Qwen3 7B : 8 Go. 2026.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'ELYZA-7B', 'Qwen3 7B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs Android au Japon utilisant des LLM locaux',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      fr: {
        question: 'Quelles sont les meilleures apps LLM locales pour Android au Japon ?',
        answer: 'MLC Chat, PocketPal AI et Ollama via Termux sont les meilleures options pour les utilisateurs Android au Japon. Les modèles japonais Rinna 3.6B et ELYZA-7B fonctionnent entièrement en local.',
        bullets: [
          'MLC Chat : configuration la plus simple, modèles préoptimisés dont Rinna 3.6B',
          'PocketPal AI : tout modèle GGUF dont ELYZA-7B, support japonais complet',
          'Termux + Ollama : bibliothèque Ollama complète dont Qwen3 7B, nécessite 8 Go de RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat est le point d\'entrée le plus facile au Japon — disponible sur le Google Play Store japonais avec Rinna 3.6B préoptimisé pour le japonais',
          'PocketPal AI prend en charge tout modèle GGUF de Hugging Face dont ELYZA-7B, le modèle japonais le plus performant pour le suivi d\'instructions à 7B',
          'Termux + Ollama déverrouille la bibliothèque Ollama complète incluant Qwen3 7B pour un usage multilingue japonais/chinois/anglais, mais nécessite 8 Go de RAM',
          'La tokenisation japonaise est ~30 % plus lente que l\'anglais sur le même modèle — prévoir un tok/s inférieur lors des benchmarks d\'inférence japonaise sur mobile',
        ],
      },
      body1: {
        title: 'Les 3 meilleures apps avec support de la langue japonaise',
        content: [
          '<strong>En mai 2026, trois applications Android prennent en charge les LLM locaux en japonais sur le Play Store japonais : MLC Chat, PocketPal AI et Ollama via Termux.</strong> Les trois fonctionnent entièrement hors ligne après le téléchargement initial du modèle — aucune donnée n\'atteint jamais un serveur cloud, ce qui répond directement aux exigences de l\'APPI (個人情報保護法, loi japonaise sur la protection des données personnelles) pour les conversations personnelles.',
          'MLC Chat offre le temps le plus court jusqu\'au premier token. Sa liste de modèles préoptimisés inclut Rinna 3.6B, un modèle japonais natif léger qui fonctionne avec 3 Go de RAM minimum. Sur un Xperia 1 VI ou Samsung Galaxy S24 avec 12 Go de RAM, Rinna 3.6B Q4 tourne à 6–10 tok/s — confortable pour un usage conversationnel. La configuration prend moins de 10 minutes sans expérience en ligne de commande.',
          'PocketPal AI, développée par la communauté Hugging Face, charge tout fichier GGUF directement depuis Hugging Face. Cela rend ELYZA-7B et Qwen3 7B disponibles sans attendre une version validée par l\'application. La contrepartie est une configuration légèrement plus longue nécessitant une sélection manuelle du modèle. Consultez le <a href="/fr/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">guide LLM Xperia</a> pour les conseils RAM et stockage spécifiques à l\'appareil.',
        ],
        columns: ['Application', 'RAM min.', 'Support modèles japonais'],
        rows: [
          { 'Application': 'MLC Chat', 'RAM min.': '4 Go', 'Support modèles japonais': 'Modèles préoptimisés dont Rinna 3.6B' },
          { 'Application': 'PocketPal AI', 'RAM min.': '4 Go', 'Support modèles japonais': 'Tout GGUF dont ELYZA-7B' },
          { 'Application': 'Termux + Ollama', 'RAM min.': '8 Go', 'Support modèles japonais': 'Bibliothèque Ollama complète dont Qwen3 7B' },
        ],
        note: 'Guide de décision : MLC Chat pour les débutants. PocketPal AI pour la flexibilité totale des modèles sans terminal. Termux + Ollama uniquement avec 8 Go de RAM ou plus.',
      },
      body2: {
        title: 'Comment choisir le bon modèle japonais',
        content: [
          '<strong>En mai 2026, trois modèles capables de japonais couvrent les cas d\'usage pratiques sur les appareils Android milieu de gamme à haut de gamme.</strong> Le bon choix dépend de votre RAM, de votre tâche principale et de votre besoin de sorties multilingues.',
          'Rinna 3.6B est l\'option légère : modèle natif japonais, entraîné sur un corpus web japonais, fonctionne avec 3 Go de RAM minimum. Il gère bien la conversation informelle, la synthèse de texte et la génération de contenu court. C\'est le bon choix pour un Xperia 10 VI (4–6 Go de RAM) ou tout appareil milieu de gamme où un modèle 7B serait trop lent.',
          'ELYZA-7B offre les meilleures performances de suivi d\'instructions japonais au niveau 7B. Il nécessite 6 Go de RAM minimum et tourne confortablement sur un Xperia 5 V, Xperia 1 VI ou Samsung Galaxy S24. Utilisez ELYZA-7B pour les tâches nécessitant des instructions multi-étapes, une sortie structurée ou une rédaction japonaise nuancée.',
          'Qwen3 7B est le choix multilingue : entraîné sur des corpus japonais, chinois et anglais. Il nécessite 6 Go de RAM minimum et produit une sortie fluide dans les trois langues au sein d\'une même conversation. Utilisez Qwen3 7B lorsque votre workflow couvre JA/ZH/EN — par exemple pour traduire ou résumer des documents professionnels multilingues.',
          'Important : la tokenisation japonaise est environ 30 % plus lourde que l\'anglais pour le même modèle. Un appareil qui fait tourner un modèle anglais 7B à 8 tok/s produira environ 5–6 tok/s en japonais. Tenez-en compte dans votre choix matériel. Pour les recommandations de modèles CPU-only, voir <a href="/fr/local-llms/best-cpu-only-llm" class="text-primary hover:underline">meilleurs LLM CPU-only</a>. Pour le guide complet, voir le <a href="/fr/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">guide des meilleures apps LLM locales pour Android</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les LLM Android au Japon',
        faqs: [
          {
            q: 'Les modèles LLM japonais locaux fonctionnent-ils hors ligne ?',
            a: 'Oui. Les trois modèles — Rinna 3.6B, ELYZA-7B et Qwen3 7B — fonctionnent entièrement hors ligne après le téléchargement initial. Aucune donnée n\'est envoyée à un serveur, ce qui satisfait aux exigences de l\'APPI pour le traitement local des données personnelles.',
          },
          {
            q: 'Quel modèle fonctionne le mieux sur un Xperia avec 6 Go de RAM ?',
            a: 'ELYZA-7B et Qwen3 7B nécessitent tous deux 6 Go de RAM minimum. Sur un Xperia 5 V avec 8 Go de RAM, les deux tournent à une vitesse confortable. Pour un Xperia 10 VI avec 4–6 Go de RAM, Rinna 3.6B est le meilleur choix. Consultez le <a href="/fr/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">guide LLM Xperia</a> pour la configuration étape par étape.',
          },
          {
            q: 'Quels sont les avantages APPI d\'un LLM local ?',
            a: 'En vertu de l\'APPI (個人情報保護法), le traitement de données personnelles par un service cloud peut nécessiter une notification à des tiers et un consentement de l\'utilisateur. Avec un LLM local, les données de conversation ne quittent jamais l\'appareil — pas de stockage cloud, pas de transfert de données à des tiers, et aucune obligation de consentement supplémentaire pour les applications à usage personnel.',
          },
          {
            q: 'Peut-on combiner la saisie vocale japonaise avec ces apps LLM ?',
            a: 'Oui. La saisie vocale japonaise standard via le clavier Android (Google Japanese Input ou Gboard) fonctionne avec les trois apps — MLC Chat, PocketPal AI et Termux + Ollama. Parlez ou tapez en japonais ; le modèle traite l\'entrée de la même façon. Aucune configuration d\'intégration vocale spéciale n\'est nécessaire.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    title: '日本で人気のAndroidローカルLLMアプリは？',
    seoTitle: '日本で人気のAndroid LLMアプリ2026 | Prompt Bites | PromptQuorum',
    metaDescription: '日本のAndroidユーザー向けローカルLLMアプリ：MLC Chat、PocketPal AI、Termux + Ollama。Rinna 3.6BとELYZA-7Bが完全オフラインで動作。PromptQuorumによる簡潔な回答。',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'ELYZA-7B', 'Qwen3 7B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'ローカルLLMを利用する日本のAndroidユーザー',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      ja: {
        question: '日本で人気のAndroidローカルLLMアプリは？',
        answer: 'MLC Chat、PocketPal AI、Termux経由のOllamaが日本のAndroidユーザーに最適です。Rinna 3.6BやELYZA-7Bなどの日本語モデルがローカルで利用可能です。',
        bullets: [
          'MLC Chat：最も簡単なセットアップ、Rinna 3.6Bを含む最適化済みモデル',
          'PocketPal AI：ELYZA-7Bを含む任意のGGUFモデル、完全日本語対応',
          'Termux + Ollama：Qwen3 7Bを含む完全なOllamaライブラリ、8GB RAM必要',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chatは日本で最も簡単な入門アプリ — 日本のGoogle Playストアから入手でき、日本語向けに最適化されたRinna 3.6Bが使える',
          'PocketPal AIはHugging FaceからELYZA-7Bを含む任意のGGUFモデルに対応し、7Bクラスで最も強力な日本語指示追従性能を提供する',
          'Termux + OllamaはAndroidでOllamaライブラリ全体（Qwen3 7Bを含む）を利用可能にするが、8GB以上のRAMが必要',
          '日本語トークナイズは同じモデルで英語より約30%重い — モバイルでの日本語推論ベンチマーク時はtok/sが低くなることを想定すること',
        ],
      },
      body1: {
        title: '日本語対応の上位3アプリ',
        content: [
          '<strong>2026年5月時点で、日本のPlayストアで日本語ローカルLLMに対応するAndroidアプリは3つあります：MLC Chat、PocketPal AI、Termux経由のOllamaです。</strong> 3つはいずれも初回モデルダウンロード後は完全オフラインで動作します。データは一切クラウドサーバーに送信されないため、個人情報保護法（APPI）のもとで個人的な会話を安心して扱えます。',
          'MLC Chatは最初のトークンまでの時間が最短です。最適化済みモデルリストにはRinna 3.6Bが含まれており、最小3GB RAMで動作する軽量な日本語ネイティブモデルです。Xperia 1 VIやSamsung Galaxy S24（12GB RAM）ではRinna 3.6B Q4が6〜10 tok/sで動作し、会話用途に十分な速度です。コマンドライン経験不要で10分以内にセットアップ完了。',
          'Hugging Faceコミュニティが開発したPocketPal AIは、Hugging FaceからGGUFファイルを直接読み込めます。これによりELYZA-7BやQwen3 7Bをアプリのリリーススケジュールなしに利用できます。代わりにモデルを手動で選択・ダウンロードする手順が少し複雑になります。デバイスごとのRAM・ストレージに関するヒントは<a href="/ja/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia LLMガイド</a>をご参照ください。',
        ],
        columns: ['アプリ', '最小RAM', '日本語モデル対応'],
        rows: [
          { 'アプリ': 'MLC Chat', '最小RAM': '4 GB', '日本語モデル対応': 'Rinna 3.6Bを含む最適化済みモデル' },
          { 'アプリ': 'PocketPal AI', '最小RAM': '4 GB', '日本語モデル対応': 'ELYZA-7Bを含む任意のGGUF' },
          { 'アプリ': 'Termux + Ollama', '最小RAM': '8 GB', '日本語モデル対応': 'Qwen3 7Bを含む完全なOllamaライブラリ' },
        ],
        note: '選び方の目安：初心者はMLC Chat。ターミナル不要でモデルを自由に選びたい場合はPocketPal AI。8GB RAM以上のデバイスでTermux + Ollama。',
      },
      body2: {
        title: '適切な日本語モデルの選び方',
        content: [
          '<strong>2026年5月時点で、ミドルレンジからフラッグシップのAndroidデバイス向けに実用的な日本語対応モデルが3つあります。</strong> 最適な選択はRAM容量、主な用途、多言語出力の必要性によって異なります。',
          'Rinna 3.6Bは軽量オプションです。日本語Webコーパスで訓練された日本語ネイティブモデルで、最小3GB RAMで動作します。カジュアルな会話、文章要約、短文生成に適しています。Xperia 10 VI（4〜6GB RAM）や7Bモデルが遅すぎるミドルレンジデバイスに最適な選択です。',
          'ELYZA-7Bは7Bクラスで最も強力な日本語指示追従性能を提供します。最小6GB RAMが必要で、Xperia 5 V、Xperia 1 VI、Samsung Galaxy S24で快適に動作します。多段階の指示、構造化された出力、繊細な日本語文章を要するタスクにはELYZA-7Bを使用してください。',
          'Qwen3 7Bは多言語オプションです。日本語・中国語・英語コーパスで訓練されており、最小6GB RAMが必要です。1回の会話で3言語すべての流暢な出力が可能です。日本語・中国語・英語を横断するワークフロー（例：クロスランゲージのビジネス文書の翻訳・要約）に最適です。',
          '重要な注意点：日本語トークナイズは同じモデルで英語より約30%重くなります。英語7Bモデルを8 tok/sで動かせるデバイスでも、日本語では5〜6 tok/s程度になります。ハードウェア選定時にこの点を考慮してください。CPU専用モデルの推奨は<a href="/ja/local-llms/best-cpu-only-llm" class="text-primary hover:underline">CPUのみで動くベストLLM</a>を参照。完全なセットアップガイドは<a href="/ja/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">Android向けローカルLLMアプリ完全ガイド</a>を参照。',
        ],
      },
      faq: {
        id: 'faq',
        title: '日本でのAndroid LLMに関するよくある質問',
        faqs: [
          {
            q: '日本語のローカルLLMモデルはオフラインで動作しますか？',
            a: 'はい。Rinna 3.6B、ELYZA-7B、Qwen3 7Bの3つはすべて、初回ダウンロード後は完全オフラインで動作します。サーバーへのデータ送信は一切なく、個人情報保護法（APPI）のもとで個人情報をローカル処理する要件を満たしています。',
          },
          {
            q: '6GB RAMのXperiaでどのモデルが最適ですか？',
            a: 'ELYZA-7BとQwen3 7Bはどちらも最小6GB RAMで動作します。8GB RAMのXperia 5 Vでは両方が快適な速度で動きます。4〜6GB RAMのXperia 10 VIにはRinna 3.6Bが適しています。ステップバイステップのセットアップは<a href="/ja/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia LLMガイド</a>をご覧ください。',
          },
          {
            q: 'ローカルLLMを使うことでAPPIの面でどんなメリットがありますか？',
            a: '個人情報保護法（APPI）のもとでは、クラウドAIによる個人データの処理は第三者提供の通知とユーザーの同意が必要になる場合があります。ローカルLLMを使えば会話データがデバイス外に出ることはなく、クラウドへの保存なし・第三者へのデータ転送なし・個人利用アプリでの追加同意義務なしを実現できます。',
          },
          {
            q: '日本語音声入力とこれらのLLMアプリを組み合わせて使えますか？',
            a: 'はい。AndroidキーボードのGoogle日本語入力やGboardを使った標準的な日本語音声入力は、MLC Chat、PocketPal AI、Termux + Ollamaの3つすべてで動作します。日本語で話すかタイプすれば、モデルは同様に処理します。特別な音声統合セットアップは不要です。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    title: '¿Cuáles son las mejores apps de LLM local para Android en Japón?',
    seoTitle: 'Mejores LLM Android Japón 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'MLC Chat ejecuta Rinna 3.6B con 4 GB de RAM. PocketPal AI soporta ELYZA-7B con 6 GB. Termux + Ollama añade Qwen3 7B con 8 GB+. Todo offline en Japón.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'ELYZA-7B', 'Qwen3 7B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Android en Japón que ejecutan LLMs locales',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Cuáles son las mejores apps de LLM local para Android en Japón?',
        answer: 'MLC Chat, PocketPal AI y Ollama vía Termux son las mejores opciones para usuarios de Android en Japón. Modelos japoneses como Rinna 3.6B y ELYZA-7B se ejecutan completamente en local y están disponibles en el Play Store japonés.',
        bullets: [
          'MLC Chat: la configuración más sencilla, modelos preoptimizados incluido Rinna 3.6B para japonés',
          'PocketPal AI: cualquier modelo GGUF incluido ELYZA-7B, soporte completo para japonés',
          'Termux + Ollama: biblioteca completa de Ollama incluido Qwen3 7B, requiere 8 GB de RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat es el punto de entrada más sencillo en Japón — disponible en el Google Play Store japonés con modelos japoneses preoptimizados incluido Rinna 3.6B',
          'PocketPal AI soporta cualquier modelo GGUF de Hugging Face, incluido ELYZA-7B, el modelo de seguimiento de instrucciones en japonés más potente del nivel 7B',
          'Termux + Ollama en Android desbloquea la biblioteca completa de Ollama, incluido Qwen3 7B para uso multilingüe en japonés, chino e inglés, pero requiere 8 GB de RAM',
          'La tokenización en japonés es ~30% más lenta que en inglés con el mismo modelo — ten en cuenta que el tok/s será menor al hacer benchmarks de inferencia en japonés en dispositivos móviles',
        ],
      },
      body1: {
        title: 'Las 3 mejores apps con soporte para japonés',
        content: [
          '<strong>En mayo de 2026, tres apps de Android soportan LLMs locales en japonés en el Play Store japonés: MLC Chat, PocketPal AI y Ollama vía Termux.</strong> Las tres funcionan completamente offline tras la descarga inicial del modelo — ningún dato llega jamás a un servidor en la nube, lo que aborda directamente el cumplimiento de la APPI (個人情報保護法, la Ley de Protección de Información Personal de Japón) para conversaciones personales.',
          'MLC Chat ofrece el menor tiempo hasta el primer token. Su lista de modelos preoptimizados incluye Rinna 3.6B, un modelo nativo en japonés y de bajo consumo que funciona con solo 3 GB de RAM. En un Xperia 1 VI o Samsung Galaxy S24 con 12 GB de RAM, Rinna 3.6B Q4 alcanza 6–10 tok/s — suficiente para uso conversacional. La configuración lleva menos de 10 minutos sin necesidad de experiencia en línea de comandos.',
          'PocketPal AI, desarrollada por la comunidad de Hugging Face, carga cualquier archivo GGUF directamente desde Hugging Face. Esto permite usar ELYZA-7B y Qwen3 7B sin esperar a una versión curada por la app. La desventaja es una configuración algo más larga que requiere selección manual del modelo. Consulta la <a href="/es/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">guía de LLM para Xperia</a> para consejos específicos sobre RAM y almacenamiento según dispositivo.',
        ],
        columns: ['App', 'RAM mín.', 'Soporte de modelos japoneses'],
        rows: [
          { 'App': 'MLC Chat', 'RAM mín.': '4 GB', 'Soporte de modelos japoneses': 'Modelos preoptimizados incl. Rinna 3.6B' },
          { 'App': 'PocketPal AI', 'RAM mín.': '4 GB', 'Soporte de modelos japoneses': 'Cualquier GGUF incl. ELYZA-7B' },
          { 'App': 'Termux + Ollama', 'RAM mín.': '8 GB', 'Soporte de modelos japoneses': 'Biblioteca completa de Ollama incl. Qwen3 7B' },
        ],
        note: 'Guía de decisión: usa MLC Chat si eres principiante. Usa PocketPal AI para máxima flexibilidad de modelos sin terminal. Usa Termux + Ollama solo con 8 GB de RAM o más.',
      },
      body2: {
        title: 'Cómo elegir el modelo japonés adecuado',
        content: [
          '<strong>En mayo de 2026, tres modelos con capacidad en japonés cubren los casos de uso prácticos en dispositivos Android de gama media a gama alta.</strong> La elección correcta depende de tu RAM, tu tarea principal y si necesitas salida multilingüe.',
          'Rinna 3.6B es la opción ligera: modelo nativo en japonés, entrenado en corpus web japonés, y funciona con un mínimo de 3 GB de RAM. Maneja bien la conversación casual, el resumen de textos y la generación de contenido corto. Es la opción adecuada para un Xperia 10 VI (4–6 GB de RAM) o cualquier dispositivo de gama media donde un modelo 7B sería demasiado lento.',
          'ELYZA-7B ofrece el mejor rendimiento de seguimiento de instrucciones en japonés en el nivel 7B. Requiere un mínimo de 6 GB de RAM y funciona cómodamente en un Xperia 5 V, Xperia 1 VI o Samsung Galaxy S24. Usa ELYZA-7B para tareas que requieren instrucciones de varios pasos, salida estructurada o redacción en japonés con matices.',
          'Qwen3 7B es la opción multilingüe: entrenado en corpus en japonés, chino e inglés. Requiere un mínimo de 6 GB de RAM y produce salida fluida en los tres idiomas dentro de una misma conversación. Usa Qwen3 7B cuando tu flujo de trabajo abarque JA/ZH/EN — por ejemplo, para traducir o resumir documentos de negocios en varios idiomas.',
          'Importante: la tokenización en japonés es aproximadamente un 30% más pesada que en inglés para el mismo modelo. Un dispositivo que ejecuta un modelo 7B en inglés a 8 tok/s producirá aproximadamente 5–6 tok/s en japonés. Considera esto al elegir tu hardware. Para recomendaciones de modelos solo con CPU, consulta <a href="/es/local-llms/best-cpu-only-llm" class="text-primary hover:underline">los mejores LLMs solo para CPU</a>. Para una guía completa de configuración, consulta la <a href="/es/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">guía de las mejores apps de LLM local para Android</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre LLMs de Android en Japón',
        faqs: [
          {
            q: '¿Los modelos de LLM local japoneses funcionan sin conexión?',
            a: 'Sí. Los tres modelos — Rinna 3.6B, ELYZA-7B y Qwen3 7B — funcionan completamente offline tras la descarga inicial. No se envían datos a ningún servidor, lo que los hace compatibles con los requisitos de la APPI para el manejo local de información personal.',
          },
          {
            q: '¿Qué modelo funciona mejor en un Xperia con 6 GB de RAM?',
            a: 'ELYZA-7B y Qwen3 7B funcionan ambos con un mínimo de 6 GB de RAM. En un Xperia 5 V con 8 GB de RAM puedes ejecutar cualquiera de los dos a una velocidad cómoda. Para el Xperia 10 VI con 4–6 GB de RAM, Rinna 3.6B es la mejor opción. Consulta la <a href="/es/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">guía de LLM para Xperia</a> para la configuración paso a paso.',
          },
          {
            q: '¿Cuáles son las ventajas de la APPI al ejecutar un LLM local?',
            a: 'Según la APPI (個人情報保護法), los datos personales procesados por una IA en la nube pueden requerir un aviso de provisión a terceros y el consentimiento del usuario. Ejecutar un LLM local significa que los datos de tus conversaciones nunca salen del dispositivo — sin almacenamiento en la nube, sin transferencia de datos a terceros y sin obligación adicional de consentimiento para aplicaciones de uso personal.',
          },
          {
            q: '¿Puedes usar la entrada de voz en japonés con estas apps de LLM?',
            a: 'Sí. La entrada de voz estándar en japonés a través del teclado Android (Google Japanese Input o Gboard) funciona con las tres apps — MLC Chat, PocketPal AI y Termux + Ollama. Escribe o dicta en japonés; el modelo lo procesa de la misma manera. No se requiere ninguna configuración especial de integración de voz.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Tool Comparisons',
    title: 'Quais são os melhores apps de LLM local para Android no Japão?',
    seoTitle: 'Melhores LLM Android Japão 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'MLC Chat executa Rinna 3,6B com 4 GB de RAM. PocketPal AI suporta ELYZA-7B com 6 GB. Termux + Ollama adiciona Qwen3 7B com 8 GB+. Tudo offline no Japão.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'ELYZA-7B', 'Qwen3 7B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'Usuários de Android no Japão executando LLMs locais',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'Quais são os melhores apps de LLM local para Android no Japão?',
        answer: 'MLC Chat, PocketPal AI e Ollama via Termux são as melhores opções para usuários de Android no Japão. Modelos japoneses como Rinna 3,6B e ELYZA-7B são executados completamente em local e estão disponíveis na Play Store japonesa.',
        bullets: [
          'MLC Chat: configuração mais simples, modelos pré-otimizados incluindo Rinna 3,6B para japonês',
          'PocketPal AI: qualquer modelo GGUF incluindo ELYZA-7B, suporte completo ao japonês',
          'Termux + Ollama: biblioteca completa do Ollama incluindo Qwen3 7B, requer 8 GB de RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat é o ponto de entrada mais fácil no Japão — disponível na Google Play Store japonesa com modelos japoneses pré-otimizados incluindo Rinna 3,6B',
          'PocketPal AI suporta qualquer modelo GGUF do Hugging Face incluindo ELYZA-7B, o modelo mais potente de seguimento de instruções em japonês no nível 7B',
          'Termux + Ollama no Android desbloqueia a biblioteca completa do Ollama incluindo Qwen3 7B para uso multilíngue em japonês, chinês e inglês, mas requer 8 GB de RAM',
          'A tokenização japonesa é ~30% mais lenta do que o inglês no mesmo modelo — planeje velocidades tok/s menores ao fazer benchmark de inferência japonesa em dispositivos móveis',
        ],
      },
      body1: {
        title: 'Os 3 melhores apps com suporte ao idioma japonês',
        content: [
          '<strong>Em maio de 2026, três apps Android suportam LLMs locais em japonês na Play Store japonesa: MLC Chat, PocketPal AI e Ollama via Termux.</strong> Os três funcionam completamente offline após o download inicial do modelo — nenhum dado chega a um servidor em nuvem, o que aborda diretamente a conformidade com a APPI (個人情報保護法, Lei de Proteção de Informações Pessoais do Japão) para conversas pessoais.',
          'O MLC Chat oferece o menor tempo até o primeiro token. Sua lista de modelos pré-otimizados inclui o Rinna 3,6B, um modelo nativo japonês leve que funciona com apenas 3 GB de RAM. Em um Xperia 1 VI ou Samsung Galaxy S24 com 12 GB de RAM, o Rinna 3,6B Q4 roda a 6–10 tok/s — confortável para uso conversacional. A configuração leva menos de 10 minutos sem experiência em linha de comando.',
          'O PocketPal AI, desenvolvido pela comunidade do Hugging Face, carrega qualquer arquivo GGUF diretamente do Hugging Face. Isso torna ELYZA-7B e Qwen3 7B disponíveis sem esperar por um lançamento curado do app. O trade-off é uma configuração um pouco mais longa que requer seleção manual do modelo. Consulte o <a href="/pt/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">guia de LLM para Xperia</a> para dicas específicas de RAM e armazenamento por dispositivo.',
        ],
        columns: ['App', 'RAM mín.', 'Suporte a modelos japoneses'],
        rows: [
          { 'App': 'MLC Chat', 'RAM mín.': '4 GB', 'Suporte a modelos japoneses': 'Modelos pré-otimizados incl. Rinna 3,6B' },
          { 'App': 'PocketPal AI', 'RAM mín.': '4 GB', 'Suporte a modelos japoneses': 'Qualquer GGUF incl. ELYZA-7B' },
          { 'App': 'Termux + Ollama', 'RAM mín.': '8 GB', 'Suporte a modelos japoneses': 'Biblioteca completa do Ollama incl. Qwen3 7B' },
        ],
        note: 'Guia de decisão: use MLC Chat se for iniciante. Use PocketPal AI para máxima flexibilidade de modelos sem terminal. Use Termux + Ollama somente com 8 GB de RAM ou mais.',
      },
      body2: {
        title: 'Como escolher o modelo japonês certo',
        content: [
          '<strong>Em maio de 2026, três modelos com capacidade para japonês cobrem os casos de uso práticos em dispositivos Android de médio porte a topo de linha.</strong> A escolha correta depende da sua RAM, da sua tarefa principal e se você precisa de saída multilíngue.',
          'O Rinna 3,6B é a opção leve: modelo nativo japonês, treinado em corpus web japonês, e funciona com no mínimo 3 GB de RAM. Lida bem com conversa casual, resumo de texto e geração de conteúdo curto. É a escolha certa para um Xperia 10 VI (4–6 GB de RAM) ou qualquer dispositivo de médio porte onde um modelo 7B seria muito lento.',
          'O ELYZA-7B oferece o melhor desempenho de seguimento de instruções em japonês no nível 7B. Requer no mínimo 6 GB de RAM e roda confortavelmente em um Xperia 5 V, Xperia 1 VI ou Samsung Galaxy S24. Use ELYZA-7B para tarefas que exigem instruções em várias etapas, saída estruturada ou redação japonesa com nuances.',
          'O Qwen3 7B é a opção multilíngue: treinado em corpus japonês, chinês e inglês. Requer no mínimo 6 GB de RAM e produz saída fluente nas três línguas em uma única conversa. Use Qwen3 7B quando seu fluxo de trabalho abranger JA/ZH/EN — por exemplo, traduzir ou resumir documentos de negócios em vários idiomas.',
          'Importante: a tokenização japonesa é aproximadamente 30% mais pesada do que o inglês para o mesmo modelo. Um dispositivo que roda um modelo 7B em inglês a 8 tok/s produzirá aproximadamente 5–6 tok/s em japonês. Leve isso em conta na sua decisão de hardware. Para recomendações de modelos somente CPU, consulte <a href="/pt/local-llms/best-cpu-only-llm" class="text-primary hover:underline">os melhores LLMs somente para CPU</a>. Para um guia completo, consulte o <a href="/pt/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">guia dos melhores apps de LLM local para Android</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre LLMs de Android no Japão',
        faqs: [
          {
            q: 'Os modelos de LLM local japoneses funcionam offline?',
            a: 'Sim. Os três modelos — Rinna 3,6B, ELYZA-7B e Qwen3 7B — funcionam completamente offline após o download inicial. Nenhum dado é enviado a qualquer servidor, o que os torna compatíveis com os requisitos da APPI para o tratamento local de informações pessoais.',
          },
          {
            q: 'Qual modelo funciona melhor em um Xperia com 6 GB de RAM?',
            a: 'ELYZA-7B e Qwen3 7B funcionam ambos com no mínimo 6 GB de RAM. Em um Xperia 5 V com 8 GB de RAM você pode executar qualquer um dos dois a uma velocidade confortável. Para o Xperia 10 VI com 4–6 GB de RAM, o Rinna 3,6B é a melhor opção. Consulte o <a href="/pt/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">guia de LLM para Xperia</a> para configuração passo a passo.',
          },
          {
            q: 'Quais são as vantagens da APPI ao executar um LLM local?',
            a: 'Segundo a APPI (個人情報保護法), dados pessoais processados por uma IA em nuvem podem exigir um aviso de fornecimento a terceiros e o consentimento do usuário. Executar um LLM local significa que os dados da sua conversa nunca saem do dispositivo — sem armazenamento em nuvem, sem transferência de dados a terceiros e sem obrigação adicional de consentimento para aplicativos de uso pessoal.',
          },
          {
            q: 'Você pode usar entrada de voz em japonês com esses apps de LLM?',
            a: 'Sim. A entrada de voz japonesa padrão via teclado Android (Google Japanese Input ou Gboard) funciona com os três apps — MLC Chat, PocketPal AI e Termux + Ollama. Digite ou dite em japonês; o modelo processa da mesma forma. Não é necessária nenhuma configuração especial de integração de voz.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    title: 'ما أفضل تطبيقات النماذج اللغوية الكبيرة المحلية لنظام Android في اليابان؟',
    seoTitle: 'LLMs يابانية على Android: MLC Chat وPocketPal وTermux',
    metaDescription: 'MLC Chat يُشغّل Rinna 3.6B بـ4 GB RAM. PocketPal AI يدعم ELYZA-7B على 6 GB. Termux + Ollama يضيف Qwen3 7B لأجهزة 8 GB+. الثلاثة تعمل دون إنترنت.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'ELYZA-7B', 'Qwen3 7B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Android في اليابان الذين يشغّلون النماذج اللغوية الكبيرة المحلية',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل تطبيقات النماذج اللغوية الكبيرة المحلية لنظام Android في اليابان؟',
        answer: 'MLC Chat وPocketPal AI وOllama عبر Termux هي أفضل الخيارات لمستخدمي Android في اليابان. النماذج اليابانية مثل Rinna 3.6B وELYZA-7B تعمل محلياً بالكامل وتدعم متجر Play الياباني.',
        bullets: [
          'MLC Chat: أسهل إعداد، نماذج مُحسَّنة مسبقاً بما فيها Rinna 3.6B للغة اليابانية',
          'PocketPal AI: أي نموذج GGUF بما فيه ELYZA-7B، دعم كامل للغة اليابانية',
          'Termux + Ollama: مكتبة Ollama الكاملة بما فيها Qwen3 7B، يحتاج 8 جيجابايت RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat هو أسهل نقطة دخول في اليابان — متوفر في متجر Google Play الياباني مع نماذج يابانية مُحسَّنة مسبقاً بما فيها Rinna 3.6B',
          'PocketPal AI يدعم أي نموذج GGUF من Hugging Face بما فيه ELYZA-7B، وهو أقوى نموذج ياباني لاتباع التعليمات في فئة 7B',
          'Termux + Ollama على Android يفتح مكتبة Ollama الكاملة بما فيها Qwen3 7B للاستخدام متعدد اللغات (ياباني/صيني/إنجليزي)، لكنه يحتاج 8 جيجابايت RAM',
          'الترميز الياباني أبطأ بـ~30% من الإنجليزي على نفس النموذج — توقع رموز/ثانية أقل عند قياس أداء الاستنتاج الياباني على الأجهزة المحمولة',
        ],
      },
      body1: {
        title: 'أفضل 3 تطبيقات بدعم اللغة اليابانية',
        content: [
          '<strong>اعتباراً من مايو 2026، ثلاثة تطبيقات Android تدعم النماذج اللغوية الكبيرة المحلية باليابانية في متجر Play الياباني: MLC Chat وPocketPal AI وOllama عبر Termux.</strong> جميعها تعمل دون اتصال بالإنترنت بعد التنزيل الأولي للنموذج — لا تصل أي بيانات إلى خادم سحابي أبداً، مما يعالج مباشرةً متطلبات الامتثال لقانون APPI (個人情報保護法، قانون اليابان لحماية المعلومات الشخصية) للمحادثات الشخصية.',
          'MLC Chat يوفر أسرع وقت للوصول إلى الرمز الأول. قائمة نماذجه المُحسَّنة مسبقاً تتضمن Rinna 3.6B، وهو نموذج ياباني أصلي خفيف يعمل بـ3 جيجابايت RAM كحد أدنى. على Xperia 1 VI أو Samsung Galaxy S24 بـ12 جيجابايت RAM، يعمل Rinna 3.6B Q4 بـ6–10 رمز/ثانية — مريح للاستخدام التحادثي. يستغرق الإعداد أقل من 10 دقائق بدون خبرة في سطر الأوامر.',
          'PocketPal AI، التي طوّرها مجتمع Hugging Face، يُحمِّل أي ملف GGUF مباشرةً من Hugging Face. هذا يجعل ELYZA-7B وQwen3 7B متاحَين دون انتظار إصدار منتقى من التطبيق. المقايضة هي إعداد أطول قليلاً يتطلب اختيار النموذج يدوياً. راجع <a href="/ar/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">دليل Xperia للنماذج اللغوية الكبيرة المحلية</a> للحصول على نصائح خاصة بكل جهاز حول RAM والتخزين.',
        ],
        columns: ['التطبيق', 'الحد الأدنى من RAM', 'دعم النماذج اليابانية'],
        rows: [
          { 'التطبيق': 'MLC Chat', 'الحد الأدنى من RAM': '4 جيجابايت', 'دعم النماذج اليابانية': 'نماذج مُحسَّنة مسبقاً بما فيها Rinna 3.6B' },
          { 'التطبيق': 'PocketPal AI', 'الحد الأدنى من RAM': '4 جيجابايت', 'دعم النماذج اليابانية': 'أي GGUF بما فيه ELYZA-7B' },
          { 'التطبيق': 'Termux + Ollama', 'الحد الأدنى من RAM': '8 جيجابايت', 'دعم النماذج اليابانية': 'مكتبة Ollama الكاملة بما فيها Qwen3 7B' },
        ],
        note: 'دليل القرار: استخدم MLC Chat إذا كنت مبتدئاً. استخدم PocketPal AI لأقصى مرونة في النماذج بدون طرفية. استخدم Termux + Ollama فقط مع 8 جيجابايت RAM أو أكثر.',
      },
      body2: {
        title: 'كيف تختار النموذج الياباني المناسب',
        content: [
          '<strong>اعتباراً من مايو 2026، ثلاثة نماذج قادرة على اللغة اليابانية تغطي حالات الاستخدام العملية على أجهزة Android من المتوسط إلى الرائد.</strong> الاختيار الصحيح يعتمد على RAM لديك ومهمتك الأساسية وما إذا كنت تحتاج إلى إخراج متعدد اللغات.',
          'Rinna 3.6B هو الخيار الخفيف: نموذج ياباني أصلي، مُدرَّب على مجموعة بيانات الويب اليابانية، يعمل بـ3 جيجابايت RAM كحد أدنى. يتعامل جيداً مع المحادثة غير الرسمية وتلخيص النصوص والتوليد القصير. إنه الخيار المناسب لـXperia 10 VI (4–6 جيجابايت RAM) أو أي جهاز متوسط المستوى حيث سيكون نموذج 7B بطيئاً جداً.',
          'ELYZA-7B يوفر أقوى أداء لاتباع التعليمات اليابانية في فئة 7B. يحتاج 6 جيجابايت RAM كحد أدنى ويعمل بشكل مريح على Xperia 5 V وXperia 1 VI وSamsung Galaxy S24. استخدم ELYZA-7B للمهام التي تتطلب تعليمات متعددة الخطوات أو إخراجاً منظماً أو كتابة يابانية دقيقة.',
          'Qwen3 7B هو الخيار متعدد اللغات: مُدرَّب على مجموعات بيانات يابانية وصينية وإنجليزية. يحتاج 6 جيجابايت RAM كحد أدنى وينتج إخراجاً سلساً بالثلاث لغات في محادثة واحدة. استخدم Qwen3 7B عندما يمتد سير عملك على اليابانية والصينية والإنجليزية — مثلاً ترجمة أو تلخيص وثائق عمل متعددة اللغات.',
          'مهم: الترميز الياباني أثقل بنحو 30% من الإنجليزي لنفس النموذج. جهاز يشغّل نموذج 7B إنجليزي بـ8 رمز/ثانية سينتج تقريباً 5–6 رمز/ثانية باليابانية. ضع هذا في الاعتبار عند اختيار الأجهزة. لتوصيات نماذج وحدة المعالجة المركزية فقط، راجع <a href="/ar/local-llms/best-cpu-only-llm" class="text-primary hover:underline">أفضل النماذج اللغوية الكبيرة للمعالج فقط</a>. للدليل الكامل للإعداد، راجع <a href="/ar/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">دليل أفضل تطبيقات النماذج اللغوية الكبيرة المحلية لنظام Android</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة سريعة حول النماذج اللغوية الكبيرة على Android في اليابان',
        faqs: [
          {
            q: 'هل تعمل نماذج اللغة اليابانية المحلية دون اتصال؟',
            a: 'نعم. جميع النماذج الثلاثة — Rinna 3.6B وELYZA-7B وQwen3 7B — تعمل دون اتصال بالكامل بعد التنزيل الأولي. لا تُرسَل أي بيانات إلى أي خادم، مما يجعلها متوافقة مع متطلبات APPI للتعامل المحلي مع المعلومات الشخصية.',
          },
          {
            q: 'أي نموذج يعمل بشكل أفضل على Xperia بـ6 جيجابايت RAM؟',
            a: 'كلٌّ من ELYZA-7B وQwen3 7B يعملان بـ6 جيجابايت RAM كحد أدنى. على Xperia 5 V بـ8 جيجابايت RAM يمكنك تشغيل أي منهما بسرعة مريحة. لـXperia 10 VI بـ4–6 جيجابايت RAM، Rinna 3.6B هو الأنسب. راجع <a href="/ar/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">دليل Xperia للنماذج اللغوية الكبيرة المحلية</a> للإعداد خطوة بخطوة.',
          },
          {
            q: 'ما مزايا تشغيل نموذج لغوي كبير محلي من حيث APPI؟',
            a: 'بموجب APPI (個人情報保護法)، قد تتطلب البيانات الشخصية التي تعالجها ذكاء اصطناعي سحابي إشعاراً بالتوفير لطرف ثالث وموافقة المستخدم. تشغيل نموذج لغوي كبير محلياً يعني أن بيانات محادثتك لا تغادر الجهاز أبداً — لا تخزين سحابي، لا نقل بيانات لأطراف ثالثة، ولا التزام بالموافقة الإضافي للتطبيقات الشخصية.',
          },
          {
            q: 'هل يمكن استخدام الإدخال الصوتي الياباني مع تطبيقات النماذج اللغوية الكبيرة هذه؟',
            a: 'نعم. الإدخال الصوتي الياباني القياسي عبر لوحة مفاتيح Android (Google Japanese Input أو Gboard) يعمل مع التطبيقات الثلاثة — MLC Chat وPocketPal AI وTermux + Ollama. اكتب أو اُملِ باليابانية، النموذج يعالج الإدخال بنفس الطريقة. لا يلزم أي إعداد خاص لتكامل الصوت.',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    title: '日本最受欢迎的Android本地LLM应用是什么？',
    seoTitle: '日本最佳Android本地LLM应用2026 | Prompt Bites | PromptQuorum',
    metaDescription: '日本Android用户最佳本地LLM应用：MLC Chat、PocketPal AI、Termux + Ollama。Rinna 3.6B和ELYZA-7B完全离线运行。PromptQuorum快速解答。',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'ELYZA-7B', 'Qwen3 7B'],
    current_hardware_mentioned: ['Xperia 1 VI', 'Xperia 5 V', 'Xperia 10 VI', 'Samsung Galaxy S24'],
    educationalLevel: 'Intermediate',
    audience: '日本使用本地LLM的Android用户',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-apps-android'],
    is_living_page: false,
    quickAnswerTop: {
      zh: {
        question: '日本最受欢迎的Android本地LLM应用是什么？',
        answer: 'MLC Chat、PocketPal AI和Termux版Ollama是日本Android用户的最佳选择。Rinna 3.6B和ELYZA-7B等日语模型可在本地运行。',
        bullets: [
          'MLC Chat：最简单安装，含Rinna 3.6B的预优化模型',
          'PocketPal AI：含ELYZA-7B的任意GGUF模型，完整日语支持',
          'Termux + Ollama：含Qwen3 7B的完整Ollama库，需8 GB内存',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat是日本最简单的入门应用——可从日本Google Play商店获取，包含为日语优化的Rinna 3.6B预训练模型',
          'PocketPal AI支持Hugging Face上任意GGUF模型，包括ELYZA-7B——7B级别中日语指令跟随性能最强的模型',
          'Termux + Ollama可在Android上使用完整Ollama库，包括Qwen3 7B（日/中/英多语言），但需要8 GB内存',
          '日语分词比英语重约30%——在移动端进行日语推理基准测试时，同款模型的tok/s会低于英语',
        ],
      },
      body1: {
        title: '支持日语的3款最佳应用',
        content: [
          '<strong>截至2026年5月，日本Play商店中有三款Android应用支持日语本地LLM：MLC Chat、PocketPal AI和Termux版Ollama。</strong> 三款应用在首次下载模型后均可完全离线运行——数据永远不会上传至云服务器，这直接满足了APPI（個人情報保護法，日本个人信息保护法）关于个人对话本地化处理的合规要求。',
          'MLC Chat提供最短的首次生成时间。其预优化模型列表包含Rinna 3.6B——一款轻量级日语原生模型，最低只需3 GB内存运行。在配备12 GB内存的Xperia 1 VI或Samsung Galaxy S24上，Rinna 3.6B Q4可达6–10 tok/s，足以满足对话使用需求。无需命令行经验，10分钟内完成配置。',
          'PocketPal AI由Hugging Face社区开发，支持直接从Hugging Face加载任意GGUF文件。这使得ELYZA-7B和Qwen3 7B无需等待应用端更新即可使用。代价是需要手动选择和下载模型，配置步骤稍多。设备RAM与存储的具体建议请参阅<a href="/zh/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia本地LLM指南</a>。',
        ],
        columns: ['应用', '最低内存', '日语模型支持'],
        rows: [
          { '应用': 'MLC Chat', '最低内存': '4 GB', '日语模型支持': '含Rinna 3.6B的预优化模型' },
          { '应用': 'PocketPal AI', '最低内存': '4 GB', '日语模型支持': '含ELYZA-7B的任意GGUF' },
          { '应用': 'Termux + Ollama', '最低内存': '8 GB', '日语模型支持': '含Qwen3 7B的完整Ollama库' },
        ],
        note: '选择指南：初学者选MLC Chat；无需终端且想自由选模型选PocketPal AI；内存8 GB以上再考虑Termux + Ollama。',
      },
      body2: {
        title: '如何选择合适的日语模型',
        content: [
          '<strong>截至2026年5月，三款支持日语的模型覆盖了中端到旗舰Android设备上的主要使用场景。</strong> 正确的选择取决于可用内存、主要任务类型，以及是否需要多语言输出。',
          'Rinna 3.6B是轻量化选项：日语原生模型，在日语网络语料上训练，最低3 GB内存即可运行。擅长日常对话、文本摘要和短文生成。对于Xperia 10 VI（4–6 GB内存）或任何7B模型过慢的中端设备，Rinna 3.6B是最佳选择。',
          'ELYZA-7B在7B级别中提供最强的日语指令跟随性能。最低需要6 GB内存，可在Xperia 5 V、Xperia 1 VI或Samsung Galaxy S24上流畅运行。需要多步骤指令、结构化输出或细腻日语写作的任务请使用ELYZA-7B。',
          'Qwen3 7B是多语言选择：在日语、中文和英语语料上训练，最低需要6 GB内存。可在单次对话中流畅输出三种语言。日语/中文/英语混合工作流（如跨语言商业文档翻译或摘要）请使用Qwen3 7B。',
          '重要提示：日语分词对同款模型约比英语重30%。能以8 tok/s运行英语7B模型的设备，处理日语时约为5–6 tok/s。请将此纳入硬件决策中。仅CPU模型推荐参见<a href="/zh/local-llms/best-cpu-only-llm" class="text-primary hover:underline">最佳纯CPU本地LLM</a>；完整配置指南参见<a href="/zh/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">Android最佳本地LLM应用完整指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于日本Android本地LLM的快速解答',
        faqs: [
          {
            q: '日语本地LLM模型可以离线运行吗？',
            a: '可以。Rinna 3.6B、ELYZA-7B和Qwen3 7B这三款模型在首次下载后均可完全离线运行。不向任何服务器发送数据，满足APPI（個人情報保護法）关于个人信息本地化处理的要求。',
          },
          {
            q: '6 GB内存的Xperia适合运行哪款模型？',
            a: 'ELYZA-7B和Qwen3 7B最低均需6 GB内存。在8 GB内存的Xperia 5 V上，两款模型均可流畅运行。4–6 GB内存的Xperia 10 VI建议选择Rinna 3.6B。分步配置指南请参阅<a href="/zh/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Xperia本地LLM指南</a>。',
          },
          {
            q: '使用本地LLM在APPI合规方面有哪些优势？',
            a: '根据APPI（個人情報保護法），通过云端AI处理个人数据可能需要向第三方发送通知并获取用户同意。使用本地LLM意味着对话数据永远不会离开设备——无云端存储、无第三方数据传输、个人用途应用无需额外同意义务。',
          },
          {
            q: '这些LLM应用支持日语语音输入吗？',
            a: '支持。通过Android键盘（Google日语输入法或Gboard）的标准日语语音输入，可在MLC Chat、PocketPal AI和Termux + Ollama这三款应用中正常使用。用日语说话或打字，模型以相同方式处理输入。无需任何特殊语音集成配置。',
          },
        ],
      },
    },
  },
}
