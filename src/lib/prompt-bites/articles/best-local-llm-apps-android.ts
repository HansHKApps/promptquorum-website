import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    title: 'Best Local LLM Apps for Android?',
    seoTitle: 'Best Android LLM Apps 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Top Android apps for local LLMs: MLC Chat (easiest), Pocketpal (flexible), Termux + Ollama (full control). All run offline. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'Android users running LLMs on their phone',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best local LLM apps for Android?',
        answer: 'The top Android apps for running LLMs locally are MLC Chat for easy setup with preoptimized models, Pocketpal for flexible GGUF loading, and Termux with Ollama for full control. All run fully offline.',
        bullets: [
          'MLC Chat: easiest setup, preoptimized models for Android',
          'Pocketpal: flexible GGUF model loading',
          'Termux + Ollama: full Ollama on Android, needs 8+ GB RAM',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Die besten lokalen LLM-Apps für Android?',
        answer: 'Die besten Android-Apps für lokale LLM sind MLC Chat für einfache Einrichtung mit voroptimiertem Modellen, Pocketpal für flexibles GGUF-Laden und Termux mit Ollama für vollständige Kontrolle. Alle laufen vollständig offline.',
        bullets: [
          'MLC Chat: einfachste Einrichtung, voroptimierte Modelle für Android',
          'Pocketpal: flexibles GGUF-Modell-Laden',
          'Termux + Ollama: vollständiges Ollama auf Android, benötigt 8+ GB RAM',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleures applications LLM locales pour Android ?',
        answer: 'Les meilleures applications Android pour LLMs locaux sont MLC Chat pour configuration facile avec modèles préoptimisés, Pocketpal pour chargement flexible GGUF, et Termux avec Ollama pour contrôle total. Toutes fonctionnent entièrement hors ligne.',
        bullets: [
          'MLC Chat : configuration la plus simple, modèles préoptimisés pour Android',
          'Pocketpal : chargement de modèles GGUF flexible',
          'Termux + Ollama : Ollama complet sur Android, nécessite 8+ Go de RAM',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Androidで最良のローカルLLMアプリは？',
        answer: 'Android向けローカルLLM実行アプリの最良選択肢はMLC Chat（簡単セットアップと最適化済みモデル）、Pocketpal（柔軟なGGUF読み込み）、Termux + Ollama（フル制御）です。すべて完全オフラインで動作します。',
        bullets: [
          'MLC Chat：最も簡単なセットアップ、Android向け最適化済みモデル',
          'Pocketpal：柔軟なGGUFモデル読み込み',
          'Termux + Ollama：Android上で完全なOllama、8GB以上のRAMが必要',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'Android 上最好的本地 LLM 应用？',
        answer: 'Android 上运行本地 LLM 的最佳应用是 MLC Chat（简便设置和预优化模型）、Pocketpal（灵活 GGUF 加载）和 Termux + Ollama（完全控制）。所有应用均可完全离线运行。',
        bullets: [
          'MLC Chat：最简单的安装，Android 预优化模型',
          'Pocketpal：灵活的 GGUF 模型加载',
          'Termux + Ollama：Android 上的完整 Ollama，需要 8+ GB 内存',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat is the easiest starting point for Android LLMs — install from Google Play, pick a model, run offline immediately',
          'Pocketpal supports loading any GGUF file from Hugging Face, giving power users full model flexibility on Android',
          'Termux + Ollama brings the full Ollama CLI to Android but requires an 8+ GB RAM device and comfort with the terminal',
          'Android requires 8 GB RAM for 7B models and at least 4 GB RAM for 2–4B models; check device specs before installing',
        ],
      },
      body1: {
        title: 'The Three Working Options',
        content: [
          '<strong>As of May 2026, there are three practical ways to run a local LLM on Android: MLC Chat (Machine Learning Compilation), Pocketpal AI, and Termux with Ollama.</strong> All three run 100% offline after initial model download — no API key or internet connection required.',
          'MLC Chat uses the MLC-LLM compilation framework to pre-optimize model weights for mobile hardware. You download it from Google Play, select a supported model (Llama 3, Gemma, Phi), and the model downloads and runs directly on the device. Setup takes under 10 minutes.',
          'Pocketpal AI is built by the Hugging Face community and supports loading GGUF model files directly from Hugging Face. This means you can run any GGUF-compatible model, not just a prebuilt list. The tradeoff is a slightly more complex setup requiring manual model selection and download.',
        ],
        columns: ['App', 'Setup Effort', 'Model Flexibility'],
        rows: [
          { 'App': 'MLC Chat', 'Setup Effort': 'Easy (Play Store)', 'Model Flexibility': 'Prebuilt models only' },
          { 'App': 'Pocketpal', 'Setup Effort': 'Medium', 'Model Flexibility': 'GGUF from Hugging Face' },
          { 'App': 'Termux + Ollama', 'Setup Effort': 'Advanced (CLI)', 'Model Flexibility': 'Full Ollama library' },
        ],
      },
      body2: {
        title: 'Which to Install First',
        content: [
          '<strong>Start with MLC Chat if this is your first Android LLM setup — it has the fastest time to first token and the least configuration.</strong> Pocketpal is the upgrade path for users who want to swap models frequently. Termux + Ollama is for developers who already know Ollama and want the exact same CLI workflow on mobile.',
          'A flagship Android phone with 8+ GB RAM handles a 2–3B model at 4–8 tok/s on CPU. Mid-range phones from 2023–2024 are slower (1–3 tok/s) — usable for batch tasks, frustrating for live chat. Do not attempt 7B models on any device with less than 8 GB RAM.',
          '<strong>Termux + Ollama is the most powerful option but has the steepest setup curve.</strong> You install Termux from F-Droid, then run <code>pkg install ollama</code> inside the terminal. Once installed, all standard Ollama commands work including <code>ollama pull</code> and <code>ollama run</code>. This approach is best for developers who already use Ollama on desktop.',
          'Battery drain matters at the 7B tier and above. A 30-minute chat session with Llama 3 8B Q4 on a flagship phone uses 8–12% battery on average. For frequent use, plug in or stick to 2–3B models like Phi-3 Mini and Gemma 2B that draw less power.',
          'For a full guide to running LLMs on Android including hardware requirements and model recommendations, see the <a href="/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">best local LLM apps for Android guide</a>.',
          'For Japan-specific app options with Xperia and AQUOS device support, see our <a href="/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">best Android LLM apps for Japan guide</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Android LLM Apps',
        faqs: [
          {
            q: 'Does MLC Chat work on all Android phones?',
            a: 'MLC Chat requires Android 10 or later and at least 4 GB of RAM. For 7B models, 8 GB RAM is recommended. The app is available on Google Play and supports Llama, Gemma, and Phi model families.',
          },
          {
            q: 'Can I use Pocketpal AI without a Hugging Face account?',
            a: 'Yes. Pocketpal AI can download GGUF models from public Hugging Face repositories without an account. A Hugging Face account is only needed for private or gated model repositories.',
          },
          {
            q: 'How do I install Ollama on Android via Termux?',
            a: 'Install Termux from F-Droid (not Google Play — the Play Store version is outdated). Inside Termux, run <code>pkg update && pkg install ollama</code>. Then use standard Ollama commands: <code>ollama pull llama3</code> and <code>ollama run llama3</code>. Your device needs 8+ GB RAM for reliable operation.',
          },
          {
            q: 'Which Android LLM app is best for beginners?',
            a: 'MLC Chat is the best starting point. It installs from Google Play in under a minute, offers a curated list of preoptimized models, and requires no command-line experience. See the <a href="/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">best Ollama frontend guide</a> for options if you want a richer chat interface.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    title: 'Die besten lokalen LLM-Apps für Android?',
    seoTitle: 'Android LLM-Apps 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Beste Android-LLM-Apps: MLC Chat (einfachste), Pocketpal (flexibel), Termux + Ollama (volle Kontrolle). Alle offline. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Die besten lokalen LLM-Apps für Android?',
        answer: 'Die besten Android-Apps für den lokalen LLM-Betrieb sind MLC Chat, Pocketpal und Termux mit Ollama. MLC Chat ist am einfachsten für Einsteiger. Alle laufen vollständig offline.',
        bullets: [
          'MLC Chat: einfachste Einrichtung, voroptimierte Modelle für Android',
          'Pocketpal: flexibles GGUF-Modell-Laden',
          'Termux + Ollama: vollständiges Ollama auf Android, benötigt 8+ GB RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat ist der einfachste Einstieg für Android-LLMs — aus Google Play installieren, Modell auswählen, sofort offline nutzen',
          'Pocketpal unterstützt das Laden beliebiger GGUF-Dateien von Hugging Face und bietet Power-Usern volle Modellflexibilität auf Android',
          'Termux + Ollama bringt die vollständige Ollama-CLI auf Android, erfordert aber ein Gerät mit 8+ GB RAM und Terminal-Kenntnisse',
          'Android benötigt 8 GB RAM für 7B-Modelle und mindestens 4 GB RAM für 2–4B-Modelle — vor der Installation Gerätespezifikationen prüfen',
        ],
      },
      body1: {
        title: 'Die drei funktionierenden Optionen',
        content: [
          '<strong>Stand Mai 2026 gibt es drei praktische Möglichkeiten, ein lokales LLM auf Android zu betreiben: MLC Chat (Machine Learning Compilation), Pocketpal AI und Termux mit Ollama.</strong> Alle drei laufen nach dem ersten Modell-Download zu 100 % offline — kein API-Key oder Internetzugang erforderlich.',
          'MLC Chat verwendet das MLC-LLM-Kompilierungsframework, um Modellgewichte für mobile Hardware vorzuoptimieren. Sie laden es aus dem Google Play Store herunter, wählen ein unterstütztes Modell (Llama 3, Gemma, Phi) aus, und das Modell wird direkt auf dem Gerät heruntergeladen und ausgeführt. Die Einrichtung dauert unter 10 Minuten.',
          'Pocketpal AI wurde von der Hugging-Face-Community entwickelt und unterstützt das direkte Laden von GGUF-Modelldateien von Hugging Face. Das bedeutet, dass Sie ein beliebiges GGUF-kompatibles Modell ausführen können, nicht nur eine vordefinierte Liste. Der Kompromiss ist eine etwas komplexere Einrichtung mit manueller Modellauswahl und -download.',
        ],
        columns: ['App', 'Einrichtungsaufwand', 'Modellflexibilität'],
        rows: [
          { 'App': 'MLC Chat', 'Einrichtungsaufwand': 'Einfach (Play Store)', 'Modellflexibilität': 'Nur voroptimierte Modelle' },
          { 'App': 'Pocketpal', 'Einrichtungsaufwand': 'Mittel', 'Modellflexibilität': 'GGUF from Hugging Face' },
          { 'App': 'Termux + Ollama', 'Einrichtungsaufwand': 'Fortgeschritten (CLI)', 'Modellflexibilität': 'Vollständige Ollama-Bibliothek' },
        ],
      },
      body2: {
        title: 'Welche App zuerst installieren',
        content: [
          '<strong>Beginnen Sie mit MLC Chat, wenn dies Ihr erstes Android-LLM-Setup ist — es hat die schnellste Zeit bis zum ersten Token und die wenigste Konfiguration.</strong> Pocketpal ist der Upgrade-Pfad für Nutzer, die häufig Modelle wechseln möchten. Termux + Ollama ist für Entwickler, die Ollama bereits kennen und denselben CLI-Workflow auf dem Mobilgerät nutzen wollen.',
          'Ein Android-Flaggschiff mit 8+ GB RAM verarbeitet ein 2–3B-Modell mit 4–8 tok/s auf der CPU. Mittelklasse-Handys aus 2023–2024 sind langsamer (1–3 tok/s) — für Batch-Aufgaben nutzbar, für Live-Chat frustrierend. Versuchen Sie keine 7B-Modelle auf Geräten mit weniger als 8 GB RAM.',
          '<strong>Termux + Ollama ist die leistungsstärkste Option, hat aber die steilste Einrichtungskurve.</strong> Sie installieren Termux von F-Droid und führen dann <code>pkg install ollama</code> im Terminal aus. Nach der Installation funktionieren alle Standard-Ollama-Befehle, einschließlich <code>ollama pull</code> und <code>ollama run</code>. Dieser Ansatz eignet sich am besten für Entwickler, die Ollama bereits auf dem Desktop verwenden.',
          'Der Akkuverbrauch spielt ab dem 7B-Bereich eine Rolle. Eine 30-minütige Chat-Session mit Llama 3 8B Q4 auf einem Flaggschiff-Handy verbraucht im Durchschnitt 8–12 % Akku. Für häufigen Einsatz am Ladekabel bleiben oder auf 2–3B-Modelle wie Phi-3 Mini und Gemma 2B wechseln, die weniger Strom benötigen.',
          'Einen vollständigen Leitfaden zum Ausführen von LLMs auf Android mit Hardware-Anforderungen und Modellempfehlungen finden Sie im <a href="/de/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">Leitfaden für die besten lokalen LLM-Apps für Android</a>.',
          'Für Japan-spezifische App-Optionen mit Xperia- und AQUOS-Geräteunterstützung, lesen Sie unseren <a href="/de/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">Leitfaden für die besten Android-LLM-Apps in Japan</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Android-LLM-Apps',
        faqs: [
          {
            q: 'Funktioniert MLC Chat auf allen Android-Handys?',
            a: 'MLC Chat erfordert Android 10 oder höher und mindestens 4 GB RAM. Für 7B-Modelle werden 8 GB RAM empfohlen. Die App ist im Google Play Store verfügbar und unterstützt die Modellfamilien Llama, Gemma und Phi.',
          },
          {
            q: 'Kann ich Pocketpal AI ohne Hugging-Face-Konto verwenden?',
            a: 'Ja. Pocketpal AI kann GGUF-Modelle aus öffentlichen Hugging-Face-Repositories ohne Konto herunterladen. Ein Hugging-Face-Konto wird nur für private oder zugangsbeschränkte Modell-Repositories benötigt.',
          },
          {
            q: 'Wie installiere ich Ollama auf Android über Termux?',
            a: 'Installieren Sie Termux von F-Droid (nicht von Google Play — die Play-Store-Version ist veraltet). Führen Sie in Termux <code>pkg update && pkg install ollama</code> aus. Verwenden Sie dann Standard-Ollama-Befehle: <code>ollama pull llama3</code> und <code>ollama run llama3</code>. Ihr Gerät benötigt 8+ GB RAM für einen zuverlässigen Betrieb.',
          },
          {
            q: 'Welche Android-LLM-App eignet sich am besten für Einsteiger?',
            a: 'MLC Chat ist der beste Einstiegspunkt. Es installiert sich aus dem Google Play Store in unter einer Minute, bietet eine kuratierte Liste voroptimierter Modelle und erfordert keine Terminal-Kenntnisse. Den <a href="/de/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">besten Ollama-Frontend-Vergleich</a> finden Sie dort, wenn Sie eine reichhaltigere Chat-Oberfläche bevorzugen.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    title: 'Meilleures applications LLM locales pour Android ?',
    seoTitle: 'Meilleures apps LLM Android | Prompt Bites | PromptQuorum',
    metaDescription: 'Apps Android pour LLM locaux : MLC Chat (plus facile), Pocketpal (flexible), Termux + Ollama. Toutes hors ligne. Réponse rapide de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Meilleures applications LLM locales pour Android ?',
        answer: 'Les meilleures applications Android pour exécuter des LLMs localement sont MLC Chat, Pocketpal et Termux avec Ollama. MLC Chat est la plus facile pour les débutants. Toutes fonctionnent entièrement hors ligne.',
        bullets: [
          'MLC Chat : configuration la plus simple, modèles préoptimisés pour Android',
          'Pocketpal : chargement de modèles GGUF flexible',
          'Termux + Ollama : Ollama complet sur Android, nécessite 8+ Go de RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat est le point de départ le plus facile pour les LLMs Android — installez depuis Google Play, choisissez un modèle, utilisez hors ligne immédiatement',
          'Pocketpal prend en charge le chargement de tout fichier GGUF depuis Hugging Face, offrant aux utilisateurs avancés une flexibilité totale de modèles sur Android',
          'Termux + Ollama apporte le CLI Ollama complet sur Android, mais nécessite un appareil avec 8+ Go de RAM et une aisance avec le terminal',
          'Android nécessite 8 Go de RAM pour les modèles 7B et au moins 4 Go de RAM pour les modèles 2–4B ; vérifiez les specs avant d\'installer',
        ],
      },
      body1: {
        title: 'Les trois options qui fonctionnent',
        content: [
          '<strong>En mai 2026, il existe trois méthodes pratiques pour exécuter un LLM local sur Android : MLC Chat (Machine Learning Compilation), Pocketpal AI et Termux avec Ollama.</strong> Les trois fonctionnent 100 % hors ligne après le téléchargement initial du modèle — aucune clé API ni connexion internet requise.',
          'MLC Chat utilise le framework de compilation MLC-LLM pour préoptimiser les poids des modèles pour le matériel mobile. Vous le téléchargez depuis Google Play, sélectionnez un modèle pris en charge (Llama 3, Gemma, Phi), et le modèle se télécharge et s\'exécute directement sur l\'appareil. La configuration prend moins de 10 minutes.',
          'Pocketpal AI est développée par la communauté Hugging Face et prend en charge le chargement de fichiers GGUF directement depuis Hugging Face. Cela signifie que vous pouvez exécuter n\'importe quel modèle compatible GGUF, pas seulement une liste prédéfinie. La contrepartie est une configuration légèrement plus complexe nécessitant une sélection et un téléchargement manuel du modèle.',
        ],
        columns: ['Application', 'Effort de configuration', 'Flexibilité des modèles'],
        rows: [
          { 'Application': 'MLC Chat', 'Effort de configuration': 'Facile (Play Store)', 'Flexibilité des modèles': 'Modèles préoptimisés uniquement' },
          { 'Application': 'Pocketpal', 'Effort de configuration': 'Moyen', 'Flexibilité des modèles': 'GGUF from Hugging Face' },
          { 'Application': 'Termux + Ollama', 'Effort de configuration': 'Avancé (CLI)', 'Flexibilité des modèles': 'Bibliothèque Ollama complète' },
        ],
      },
      body2: {
        title: 'Quelle application installer en premier',
        content: [
          '<strong>Commencez par MLC Chat si c\'est votre premier setup LLM Android — c\'est le plus rapide jusqu\'au premier token et le moins de configuration.</strong> Pocketpal est la voie d\'évolution pour les utilisateurs qui veulent changer de modèles fréquemment. Termux + Ollama est destiné aux développeurs qui connaissent déjà Ollama et veulent le même workflow CLI sur mobile.',
          'Un téléphone Android haut de gamme avec 8+ Go de RAM gère un modèle 2–3B à 4–8 tok/s sur CPU. Les téléphones milieu de gamme de 2023–2024 sont plus lents (1–3 tok/s) — utilisables pour les tâches en lot, frustrants pour le chat en direct. N\'essayez pas les modèles 7B sur un appareil avec moins de 8 Go de RAM.',
          '<strong>Termux + Ollama est l\'option la plus puissante mais présente la courbe de configuration la plus abrupte.</strong> Vous installez Termux depuis F-Droid, puis exécutez <code>pkg install ollama</code> dans le terminal. Une fois installé, toutes les commandes Ollama standard fonctionnent, y compris <code>ollama pull</code> et <code>ollama run</code>. Cette approche convient mieux aux développeurs qui utilisent déjà Ollama sur desktop.',
          'La consommation de batterie est importante à partir du niveau 7B. Une session de chat de 30 minutes avec Llama 3 8B Q4 sur un téléphone haut de gamme utilise en moyenne 8–12 % de batterie. Pour une utilisation fréquente, branchez l\'appareil ou restez sur des modèles 2–3B comme Phi-3 Mini et Gemma 2B qui consomment moins.',
          'Pour un guide complet sur l\'exécution de LLMs sur Android incluant les exigences matérielles et les recommandations de modèles, consultez le <a href="/fr/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">guide des meilleures applis LLM locales pour Android</a>.',
          'Pour des options d\'applications spécifiques au Japon avec les appareils Xperia et AQUOS, consultez notre <a href="/fr/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">guide des meilleures apps LLM Android pour le Japon</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les applications LLM Android',
        faqs: [
          {
            q: 'MLC Chat fonctionne-t-il sur tous les téléphones Android ?',
            a: 'MLC Chat nécessite Android 10 ou version ultérieure et au moins 4 Go de RAM. Pour les modèles 7B, 8 Go de RAM sont recommandés. L\'application est disponible sur Google Play et prend en charge les familles de modèles Llama, Gemma et Phi.',
          },
          {
            q: 'Puis-je utiliser Pocketpal AI sans compte Hugging Face ?',
            a: 'Oui. Pocketpal AI peut télécharger des modèles GGUF depuis des dépôts Hugging Face publics sans compte. Un compte Hugging Face n\'est nécessaire que pour les dépôts de modèles privés ou à accès restreint.',
          },
          {
            q: 'Comment installer Ollama sur Android via Termux ?',
            a: 'Installez Termux depuis F-Droid (pas Google Play — la version du Play Store est obsolète). Dans Termux, exécutez <code>pkg update && pkg install ollama</code>. Utilisez ensuite les commandes Ollama standard : <code>ollama pull llama3</code> et <code>ollama run llama3</code>. Votre appareil nécessite 8+ Go de RAM pour un fonctionnement fiable.',
          },
          {
            q: 'Quelle application LLM Android est la meilleure pour les débutants ?',
            a: 'MLC Chat est le meilleur point de départ. Elle s\'installe depuis Google Play en moins d\'une minute, propose une liste organisée de modèles préoptimisés et ne nécessite aucune expérience en ligne de commande. Consultez le <a href="/fr/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">guide des meilleurs frontends Ollama</a> pour des options si vous souhaitez une interface de chat plus riche.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    title: 'Androidで最良のローカルLLMアプリは？',
    seoTitle: 'Android最良ローカルLLMアプリ？ | Prompt Bites | PromptQuorum',
    metaDescription: 'Android最良ローカルLLMアプリ：MLC Chat（最も簡単）、Pocketpal（柔軟）、Termux + Ollama（完全制御）。すべてオフライン動作。PromptQuorumによる簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'Androidで最良のローカルLLMアプリは？',
        answer: 'ローカルLLMを実行するAndroidの最良アプリはMLC Chat、Pocketpal、Termux + Ollamaです。MLC Chatは初心者に最も簡単です。すべて完全オフラインで動作します。',
        bullets: [
          'MLC Chat：最も簡単なセットアップ、Android向け最適化済みモデル',
          'Pocketpal：柔軟なGGUFモデル読み込み',
          'Termux + Ollama：Android上で完全なOllama、8GB以上のRAMが必要',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC ChatはAndroid LLMの最も簡単な出発点 — Google Playからインストール、モデルを選択、すぐにオフラインで使用可能',
          'PocketpalはHugging Faceから任意のGGUFファイルをロードでき、パワーユーザーにAndroid上での完全なモデル柔軟性を提供する',
          'Termux + OllamaはAndroidに完全なOllama CLIをもたらすが、8GB以上のRAMのデバイスとターミナルの操作に慣れていることが必要',
          'Androidは7Bモデルに8GB RAM、2–4Bモデルに最低4GB RAMが必要 — インストール前にデバイスのスペックを確認すること',
        ],
      },
      body1: {
        title: '動作する3つの選択肢',
        content: [
          '<strong>2026年5月時点で、AndroidでローカルLLMを実行するための実用的な3つの方法があります：MLC Chat（Machine Learning Compilation）、Pocketpal AI、Termux + Ollama。</strong> 3つすべてが最初のモデルダウンロード後は100%オフラインで動作します — APIキーやインターネット接続は不要です。',
          'MLC ChatはMLC-LLMコンパイルフレームワークを使用してモデルの重みをモバイルハードウェア向けに事前最適化します。Google Playからダウンロードし、サポートされているモデル（Llama 3、Gemma、Phi）を選択すると、モデルがデバイスに直接ダウンロードされて実行されます。セットアップは10分以内に完了します。',
          'Pocketpal AIはHugging Faceコミュニティによって開発され、Hugging FaceからGGUFモデルファイルを直接ロードできます。これにより、事前定義リストだけでなく、任意のGGUF互換モデルを実行できます。トレードオフは手動でのモデル選択とダウンロードが必要なやや複雑なセットアップです。',
        ],
        columns: ['アプリ', 'セットアップの難易度', 'モデルの柔軟性'],
        rows: [
          { 'アプリ': 'MLC Chat', 'セットアップの難易度': '簡単（Play Store）', 'モデルの柔軟性': '事前最適化モデルのみ' },
          { 'アプリ': 'Pocketpal', 'セットアップの難易度': '中程度', 'モデルの柔軟性': 'GGUF from Hugging Face' },
          { 'アプリ': 'Termux + Ollama', 'セットアップの難易度': '上級（CLI）', 'モデルの柔軟性': '完全なOllamaライブラリ' },
        ],
      },
      body2: {
        title: '最初にインストールするアプリの選び方',
        content: [
          '<strong>初めてのAndroid LLMセットアップならMLC Chatから始めてください — 最初のトークンまでの時間が最短で、設定も最小限です。</strong> Pocketpalは頻繁にモデルを切り替えたいユーザーへのアップグレードパスです。Termux + OllamaはすでにOllamaを知っており、モバイルでも同じCLIワークフローを使いたい開発者向けです。',
          '8GB以上のRAMを搭載したAndroidフラッグシップは、CPU上で2–3Bモデルを4–8 tok/sで処理します。2023–2024年のミッドレンジスマートフォンは遅く（1–3 tok/s）、バッチタスクには使えますがライブチャットには不向きです。8GB RAM未満のデバイスで7Bモデルは使わないでください。',
          '<strong>Termux + Ollamaは最も強力な選択肢ですが、セットアップの難易度が最も高いです。</strong> F-DroidからTermuxをインストールし、ターミナル内で<code>pkg install ollama</code>を実行します。インストール後、<code>ollama pull</code>や<code>ollama run</code>を含むすべての標準Ollamaコマンドが動作します。このアプローチはデスクトップですでにOllamaを使用している開発者に最適です。',
          'バッテリー消費は7B以上のモデルで重要になります。フラッグシップスマートフォンでLlama 3 8B Q4を30分チャットすると、平均8–12%のバッテリーを消費します。頻繁に使用する場合は充電しながら使うか、Phi-3 MiniやGemma 2Bのような消費電力の少ない2–3Bモデルにとどめてください。',
          'ハードウェア要件とモデル推奨を含むAndroidでのLLM実行の完全ガイドについては、<a href="/ja/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">Androidの最良ローカルLLMアプリガイド</a>をご覧ください。',
          'XperiaやAQUOSデバイスへの日本固有のアプリについては、<a href="/ja/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">日本のAndroid向けベストLLMアプリガイド</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Android LLMアプリに関するよくある質問',
        faqs: [
          {
            q: 'MLC ChatはすべてのAndroidスマートフォンで動作しますか？',
            a: 'MLC ChatはAndroid 10以上と最低4GB RAMが必要です。7Bモデルには8GB RAMが推奨されます。アプリはGoogle Playで入手可能で、Llama、Gemma、Phiのモデルファミリーをサポートしています。',
          },
          {
            q: 'Hugging FaceアカウントなしでPocketpal AIを使用できますか？',
            a: 'はい。Pocketpal AIはアカウントなしで公開のHugging FaceリポジトリからGGUFモデルをダウンロードできます。Hugging Faceアカウントはプライベートまたはゲートされたモデルリポジトリにのみ必要です。',
          },
          {
            q: 'TermuxでAndroidにOllamaをインストールする方法は？',
            a: 'F-DroidからTermuxをインストールします（Google Playではありません — Play Store版は古い）。Termux内で<code>pkg update && pkg install ollama</code>を実行します。その後、標準Ollamaコマンドを使用します：<code>ollama pull llama3</code>と<code>ollama run llama3</code>。デバイスは安定した動作のために8GB以上のRAMが必要です。',
          },
          {
            q: '初心者に最適なAndroid LLMアプリはどれですか？',
            a: 'MLC Chatが最良の出発点です。Google Playから1分以内でインストールでき、厳選された事前最適化モデルのリストを提供し、コマンドライン経験は不要です。より充実したチャットインターフェースをお望みなら、<a href="/ja/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">最良のOllamaフロントエンドガイド</a>もご覧ください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    title: 'Android 上最好的本地 LLM 应用？',
    seoTitle: 'Android 最佳本地 LLM 应用？ | Prompt Bites | PromptQuorum',
    metaDescription: 'Android 最佳本地 LLM 应用：MLC Chat（最简单）、Pocketpal（灵活）、Termux + Ollama（完全控制）。全部离线运行。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: 'Android 上最好的本地 LLM 应用？',
        answer: '在 Android 上运行本地 LLM 的最佳应用是 MLC Chat、Pocketpal 和 Termux + Ollama。MLC Chat 对初学者最简单。所有应用均可完全离线运行。',
        bullets: [
          'MLC Chat：最简单的安装，Android 预优化模型',
          'Pocketpal：灵活的 GGUF 模型加载',
          'Termux + Ollama：Android 上的完整 Ollama，需要 8+ GB 内存',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat 是 Android LLM 最简单的起点——从 Google Play 安装，选择模型，立即离线使用',
          'Pocketpal 支持从 Hugging Face 加载任何 GGUF 文件，为高级用户提供 Android 上的完整模型灵活性',
          'Termux + Ollama 将完整 Ollama CLI 带到 Android，但需要 8+ GB 内存的设备和命令行使用经验',
          'Android 运行 7B 模型需要 8 GB 内存，2–4B 模型至少需要 4 GB 内存；安装前检查设备规格',
        ],
      },
      body1: {
        title: '三种可用选项',
        content: [
          '<strong>截至 2026 年 5 月，在 Android 上运行本地 LLM 有三种实用方法：MLC Chat（Machine Learning Compilation）、Pocketpal AI 和 Termux + Ollama。</strong> 三种方式在初始模型下载后均可 100% 离线运行——无需 API 密钥或网络连接。',
          'MLC Chat 使用 MLC-LLM 编译框架将模型权重预优化为适合移动硬件的格式。您从 Google Play 下载，选择支持的模型（Llama 3、Gemma、Phi），模型直接在设备上下载并运行。安装配置不到 10 分钟。',
          'Pocketpal AI 由 Hugging Face 社区开发，支持直接从 Hugging Face 加载 GGUF 模型文件。这意味着您可以运行任何兼容 GGUF 的模型，而不仅仅是预定义列表。代价是需要手动选择和下载模型，配置稍微复杂一些。',
        ],
        columns: ['应用', '安装难度', '模型灵活性'],
        rows: [
          { '应用': 'MLC Chat', '安装难度': '简单（Play Store）', '模型灵活性': '仅预优化模型' },
          { '应用': 'Pocketpal', '安装难度': '中等', '模型灵活性': 'GGUF from Hugging Face' },
          { '应用': 'Termux + Ollama', '安装难度': '高级（CLI）', '模型灵活性': '完整Ollama库' },
        ],
      },
      body2: {
        title: '优先安装哪款应用',
        content: [
          '<strong>如果这是您第一次配置 Android LLM，请从 MLC Chat 开始——它的首个 token 生成速度最快，配置最少。</strong> Pocketpal 是想频繁切换模型的用户的进阶选择。Termux + Ollama 适合已熟悉 Ollama 并希望在移动端使用相同 CLI 工作流的开发者。',
          '配备 8+ GB 内存的 Android 旗舰机在 CPU 上处理 2–3B 模型可达 4–8 tok/s。2023–2024 年的中端手机较慢（1–3 tok/s）——适合批量任务，但实时对话体验较差。内存低于 8 GB 的设备不要尝试运行 7B 模型。',
          '<strong>Termux + Ollama 是最强大的选项，但安装难度最高。</strong> 您从 F-Droid 安装 Termux，然后在终端中运行 <code>pkg install ollama</code>。安装后，所有标准 Ollama 命令均可使用，包括 <code>ollama pull</code> 和 <code>ollama run</code>。这种方式最适合已在桌面使用 Ollama 的开发者。',
          '电池消耗在 7B 及以上模型时需要关注。在旗舰手机上使用 Llama 3 8B Q4 进行 30 分钟对话平均消耗 8–12% 电量。频繁使用时请插电，或选择 Phi-3 Mini 和 Gemma 2B 等耗电更少的 2–3B 模型。',
          '有关在 Android 上运行 LLM 的完整指南（包括硬件要求和模型推荐），请参阅<a href="/zh/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">Android最佳本地LLM应用指南</a>。',
          '如需Xperia和AQUOS设备的日本专用应用选项，请参阅我们的<a href="/zh/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">日本Android最佳LLM应用指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 Android LLM 应用的快速解答',
        faqs: [
          {
            q: 'MLC Chat 适用于所有 Android 手机吗？',
            a: 'MLC Chat 需要 Android 10 或更高版本以及至少 4 GB 内存。7B 模型建议 8 GB 内存。该应用可在 Google Play 上获取，支持 Llama、Gemma 和 Phi 模型系列。',
          },
          {
            q: '没有 Hugging Face 账户可以使用 Pocketpal AI 吗？',
            a: '可以。Pocketpal AI 无需账户即可从公开的 Hugging Face 仓库下载 GGUF 模型。只有访问私有或受限模型仓库才需要 Hugging Face 账户。',
          },
          {
            q: '如何通过 Termux 在 Android 上安装 Ollama？',
            a: '从 F-Droid 安装 Termux（不要用 Google Play——Play Store 版本已过时）。在 Termux 中运行 <code>pkg update && pkg install ollama</code>。然后使用标准 Ollama 命令：<code>ollama pull llama3</code> 和 <code>ollama run llama3</code>。设备需要 8+ GB 内存才能稳定运行。',
          },
          {
            q: '哪款 Android LLM 应用最适合初学者？',
            a: 'MLC Chat 是最佳起点。它可在一分钟内从 Google Play 安装完毕，提供精选的预优化模型列表，无需任何命令行经验。如需更丰富的对话界面，请参阅<a href="/zh/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">最佳Ollama前端指南</a>。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    title: '¿Las mejores apps de LLM local para Android?',
    seoTitle: 'Mejores apps Android para LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Mejores apps Android para LLMs locales: MLC Chat (más fácil), Pocketpal (flexible), Termux + Ollama (control total). Todo funciona sin conexión. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Principiante',
    audience: 'Usuarios Android ejecutando LLMs en su teléfono',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Las mejores apps de LLM local para Android?',
        answer: 'Las mejores apps Android para ejecutar LLMs localmente son MLC Chat para configuración fácil con modelos preoptimizados, Pocketpal para carga flexible de GGUF, y Termux con Ollama para control total. Todas funcionan completamente sin conexión.',
        bullets: [
          'MLC Chat: configuración más fácil, modelos preoptimizados para Android',
          'Pocketpal: carga flexible de modelos GGUF',
          'Termux + Ollama: Ollama completo en Android, necesita 8+ GB RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat es la opción más fácil: descarga de Google Play, modelos preoptimizados, sin línea de comandos',
          'Pocketpal LLM es más flexible: cargas cualquier modelo GGUF desde Hugging Face, pero necesita más configuración',
          'Termux + Ollama te da control total de Ollama en tu teléfono — pero requiere 8+ GB de RAM y conocimiento de terminal',
        ],
      },
      body1: {
        title: 'Comparación rápida de las 3 mejores opciones',
        content: [
          '<strong>MLC Chat (descarga más fácil)</strong> — Instala en 1 minuto desde Google Play. Incluye una lista seleccionada de modelos preoptimizados para Android (Phi-2, Llama 3B). Sin línea de comandos, sin configuración. La mejor opción para principiantes.',
          '<strong>Pocketpal AI (más flexible)</strong> — Carga cualquier modelo GGUF directamente desde Hugging Face. Requiere más configuración que MLC Chat pero te da libertad para elegir cualquier modelo. Interfaz de chat integrada.',
          '<strong>Termux + Ollama (control total)</strong> — Instala Ollama completo en Android. Todos los comandos de Ollama disponibles. Requiere terminal, 8+ GB RAM, conocimiento técnico. Para usuarios avanzados solo.',
        ],
      },
      body2: {
        title: 'Cuál elegir',
        content: [
          'Comienza con <strong>MLC Chat</strong> si nunca has ejecutado LLMs en tu teléfono. Es la opción más accesible.',
          'Usa <strong>Pocketpal</strong> si quieres control sobre qué modelos ejecutas y no quieres tocar la terminal.',
          'Elige <strong>Termux + Ollama</strong> si eres desarrollador o quieres Ollama completo en tu dispositivo.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas rápidas sobre apps Android para LLMs',
        faqs: [
          {
            q: '¿Qué requisitos de RAM necesita MLC Chat?',
            a: 'MLC Chat funciona en teléfonos con 4+ GB de RAM. Para mejores resultados, 8+ GB. Los modelos preoptimizados están comprimidos para ejecutarse en dispositivos móviles.',
          },
          {
            q: '¿Puedo usar Pocketpal sin una cuenta de Hugging Face?',
            a: 'Sí. Pocketpal AI puede descargar modelos GGUF desde repositorios públicos de Hugging Face sin cuenta. Solo necesitas una cuenta de Hugging Face para acceder a repositorios privados o restringidos.',
          },
          {
            q: '¿Cómo instalo Ollama en Android mediante Termux?',
            a: 'Instala Termux desde F-Droid (no uses Google Play — la versión de Play Store está desactualizada). En Termux ejecuta <code>pkg update && pkg install ollama</code>. Luego usa comandos estándar de Ollama: <code>ollama pull llama3</code> y <code>ollama run llama3</code>. Tu dispositivo necesita 8+ GB de memoria para funcionar de manera estable.',
          },
          {
            q: '¿Cuál es la mejor app Android para LLMs para principiantes?',
            a: 'MLC Chat es el mejor punto de partida. Se instala desde Google Play en un minuto, proporciona una lista seleccionada de modelos preoptimizados y no requiere experiencia en línea de comandos. Para una interfaz de chat más enriquecida, consulta la <a href="/es/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">guía de los mejores frontends para Ollama</a>.',
          },
        ],
      },
    },
  },
}
