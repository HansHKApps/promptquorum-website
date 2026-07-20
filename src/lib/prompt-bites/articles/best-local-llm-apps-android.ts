import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    title: 'Best Local LLM Apps for Android?',
    seoTitle: 'Best Offline AI Apps for Android 2026: Quick Picks',
    metaDescription: 'Run AI offline on Android in 2026. Top pick: MLC Chat for most phones — easy setup, no cloud needed. Plus Pocketpal and Termux + Ollama. RAM guide included.',
    heroImage: '/images/best-local-llm-apps-android-app-comparison-hero-en.png',
    publishDate: '2026-05-18',
    dateModified: '2026-06-14',
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
        question: 'What is the best local LLM app for Android in 2026?',
        answer: 'For most people, MLC Chat is the best local LLM app for Android in 2026 — it installs from Google Play in under a minute, uses preoptimized models, and runs fully offline without any technical setup. Pocketpal is the upgrade for users who want to load custom GGUF models; Termux + Ollama is for developers who want the full Ollama CLI on their phone.',
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
          '<strong>Looking for the technical deep-dive?</strong> For performance benchmarks, NPU speed data on real Android phones, and all 6 apps compared — see our <a href="/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">in-depth Android local-LLM technical guide</a>. This page gives the quick "which app to install" answer.',
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
        image: '/images/best-local-llm-apps-android-app-comparison-hero-en.png',
        imageCaption: 'Best Local LLM Apps for Android -- Setup effort vs model flexibility',
      },
      body2: {
        title: 'Which to Install First',
        content: [
          '<strong>Start with MLC Chat if this is your first Android LLM setup — it has the fastest time to first token and the least configuration.</strong> Pocketpal is the upgrade path for users who want to swap models frequently. Termux + Ollama is for developers who already know Ollama and want the exact same CLI workflow on mobile.',
          'A flagship Android phone with 8+ GB RAM handles a 2–3B model at 4–8 tok/s on CPU. Mid-range phones from 2023–2024 are slower (1–3 tok/s) — usable for batch tasks, frustrating for live chat. Do not attempt 7B models on any device with less than 8 GB RAM.',
          '<strong>Termux + Ollama is the most powerful option but has the steepest setup curve.</strong> You install Termux from F-Droid, then run <code>pkg install ollama</code> inside the terminal. Once installed, all standard Ollama commands work including <code>ollama pull</code> and <code>ollama run</code>. This approach is best for developers who already use Ollama on desktop.',
          'Battery drain matters at the 7B tier and above. A 30-minute chat session with Llama 3 8B Q4 on a flagship phone uses 8–12% battery on average. For frequent use, plug in or stick to 2–3B models like Phi-3 Mini and Gemma 2B that draw less power.',
          'Want the technical deep-dive — performance benchmarks, NPU speeds on real phones, and quantization trade-offs? See our <a href="/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">in-depth Android local-LLM technical guide</a>.',
          'For Japan-specific app options with Xperia and AQUOS device support, see our <a href="/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">best Android LLM apps for Japan guide</a>.',
        ],
        image: '/images/best-local-llm-apps-android-battery-ram-hero-en.png',
        imageCaption: 'Battery & RAM by Model Tier -- What Android hardware needs',
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
    seoTitle: 'Beste LLM-Apps für Android 2026: Schnelle Empfehlungen',
    metaDescription: 'KI offline auf Android 2026: MLC Chat ist die Top-Empfehlung für die meisten Geräte. Pocketpal für eigene Modelle, Termux + Ollama für Power-User. RAM-Guide inklusive.',
    heroImage: '/images/best-local-llm-apps-android-app-comparison-hero-de.png',
    publishDate: '2026-05-18',
    dateModified: '2026-06-14',
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
          '<strong>Technischen Tiefen-Dive gesucht?</strong> Benchmarks, NPU-Geschwindigkeitsdaten auf echten Geräten und alle 6 Android-LLM-Apps im Vergleich: <a href="/de/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">ausführlicher technischer Android-LLM-Leitfaden</a>. Diese Seite liefert die schnelle Installationsempfehlung.',
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
        image: '/images/best-local-llm-apps-android-app-comparison-hero-de.png',
        imageCaption: 'Beste Lokale LLM-Apps für Android -- Einrichtungsaufwand vs. Modellflexibilität',
      },
      body2: {
        title: 'Welche App zuerst installieren',
        content: [
          '<strong>Beginnen Sie mit MLC Chat, wenn dies Ihr erstes Android-LLM-Setup ist — es hat die schnellste Zeit bis zum ersten Token und die wenigste Konfiguration.</strong> Pocketpal ist der Upgrade-Pfad für Nutzer, die häufig Modelle wechseln möchten. Termux + Ollama ist für Entwickler, die Ollama bereits kennen und denselben CLI-Workflow auf dem Mobilgerät nutzen wollen.',
          'Ein Android-Flaggschiff mit 8+ GB RAM verarbeitet ein 2–3B-Modell mit 4–8 tok/s auf der CPU. Mittelklasse-Handys aus 2023–2024 sind langsamer (1–3 tok/s) — für Batch-Aufgaben nutzbar, für Live-Chat frustrierend. Versuchen Sie keine 7B-Modelle auf Geräten mit weniger als 8 GB RAM.',
          '<strong>Termux + Ollama ist die leistungsstärkste Option, hat aber die steilste Einrichtungskurve.</strong> Sie installieren Termux von F-Droid und führen dann <code>pkg install ollama</code> im Terminal aus. Nach der Installation funktionieren alle Standard-Ollama-Befehle, einschließlich <code>ollama pull</code> und <code>ollama run</code>. Dieser Ansatz eignet sich am besten für Entwickler, die Ollama bereits auf dem Desktop verwenden.',
          'Der Akkuverbrauch spielt ab dem 7B-Bereich eine Rolle. Eine 30-minütige Chat-Session mit Llama 3 8B Q4 auf einem Flaggschiff-Handy verbraucht im Durchschnitt 8–12 % Akku. Für häufigen Einsatz am Ladekabel bleiben oder auf 2–3B-Modelle wie Phi-3 Mini und Gemma 2B wechseln, die weniger Strom benötigen.',
          'Ausführliche Benchmarks, NPU-Daten auf echten Android-Geräten und Quantisierungsvergleiche gewünscht? Dann der <a href="/de/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">technische Android-LLM-Tiefen-Leitfaden</a>.',
          'Für Japan-spezifische App-Optionen mit Xperia- und AQUOS-Geräteunterstützung, lesen Sie unseren <a href="/de/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">Leitfaden für die besten Android-LLM-Apps in Japan</a>.',
        ],
        image: '/images/best-local-llm-apps-android-battery-ram-hero-de.png',
        imageCaption: 'Akku und RAM nach Modellklasse -- Was Android-Hardware benötigt',
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
    seoTitle: 'Apps LLM Offline Android 2026 : Sélection Rapide',
    metaDescription: 'IA hors ligne sur Android 2026 : MLC Chat est le top pick pour la plupart des téléphones. Pocketpal et Termux + Ollama comparés. Guide RAM inclus.',
    heroImage: '/images/best-local-llm-apps-android-app-comparison-hero-fr.png',
    publishDate: '2026-05-18',
    dateModified: '2026-06-14',
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
          '<strong>Besoin de la comparaison technique complète ?</strong> Benchmarks NPU sur des téléphones réels et 6 apps Android comparées : <a href="/fr/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">guide technique Android LLM approfondi</a>. Cette page donne la réponse rapide "quelle app installer".',
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
        image: '/images/best-local-llm-apps-android-app-comparison-hero-fr.png',
        imageCaption: 'Meilleures Apps LLM Locales pour Android -- Effort d\'installation vs flexibilité du modèle',
      },
      body2: {
        title: 'Quelle application installer en premier',
        content: [
          '<strong>Commencez par MLC Chat si c\'est votre premier setup LLM Android — c\'est le plus rapide jusqu\'au premier token et le moins de configuration.</strong> Pocketpal est la voie d\'évolution pour les utilisateurs qui veulent changer de modèles fréquemment. Termux + Ollama est destiné aux développeurs qui connaissent déjà Ollama et veulent le même workflow CLI sur mobile.',
          'Un téléphone Android haut de gamme avec 8+ Go de RAM gère un modèle 2–3B à 4–8 tok/s sur CPU. Les téléphones milieu de gamme de 2023–2024 sont plus lents (1–3 tok/s) — utilisables pour les tâches en lot, frustrants pour le chat en direct. N\'essayez pas les modèles 7B sur un appareil avec moins de 8 Go de RAM.',
          '<strong>Termux + Ollama est l\'option la plus puissante mais présente la courbe de configuration la plus abrupte.</strong> Vous installez Termux depuis F-Droid, puis exécutez <code>pkg install ollama</code> dans le terminal. Une fois installé, toutes les commandes Ollama standard fonctionnent, y compris <code>ollama pull</code> et <code>ollama run</code>. Cette approche convient mieux aux développeurs qui utilisent déjà Ollama sur desktop.',
          'La consommation de batterie est importante à partir du niveau 7B. Une session de chat de 30 minutes avec Llama 3 8B Q4 sur un téléphone haut de gamme utilise en moyenne 8–12 % de batterie. Pour une utilisation fréquente, branchez l\'appareil ou restez sur des modèles 2–3B comme Phi-3 Mini et Gemma 2B qui consomment moins.',
          'Benchmarks techniques, données NPU sur matériel Android réel et compromis de quantisation : <a href="/fr/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">guide technique Android LLM approfondi</a>.',
          'Pour des options d\'applications spécifiques au Japon avec les appareils Xperia et AQUOS, consultez notre <a href="/fr/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">guide des meilleures apps LLM Android pour le Japon</a>.',
        ],
        image: '/images/best-local-llm-apps-android-battery-ram-hero-fr.png',
        imageCaption: 'Batterie et RAM par Niveau de Modèle -- Ce dont le matériel Android a besoin',
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
    seoTitle: 'Androidローカル AI アプリ 2026年：おすすめ 3 選クイックガイド',
    metaDescription: 'Android 2026年のオフライン AI：MLC Chat がほとんどの端末に最適。Pocketpal と Termux + Ollama も比較。RAM ガイド付き。',
    heroImage: '/images/best-local-llm-apps-android-app-comparison-hero-ja.png',
    publishDate: '2026-05-18',
    dateModified: '2026-06-14',
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
          '<strong>技術的な詳細が必要ですか？</strong> 実機ベンチマーク、NPU 速度データ、6 つの Android LLM アプリ比較は、<a href="/ja/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">詳細な Android LLM テクニカルガイド</a>をご覧ください。このページは「どのアプリをインストールすべきか」の素早い回答です。',
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
        image: '/images/best-local-llm-apps-android-app-comparison-hero-ja.png',
        imageCaption: 'Android向けベストローカルLLMアプリ -- セットアップの手間対モデルの柔軟性',
      },
      body2: {
        title: '最初にインストールするアプリの選び方',
        content: [
          '<strong>初めてのAndroid LLMセットアップならMLC Chatから始めてください — 最初のトークンまでの時間が最短で、設定も最小限です。</strong> Pocketpalは頻繁にモデルを切り替えたいユーザーへのアップグレードパスです。Termux + OllamaはすでにOllamaを知っており、モバイルでも同じCLIワークフローを使いたい開発者向けです。',
          '8GB以上のRAMを搭載したAndroidフラッグシップは、CPU上で2–3Bモデルを4–8 tok/sで処理します。2023–2024年のミッドレンジスマートフォンは遅く（1–3 tok/s）、バッチタスクには使えますがライブチャットには不向きです。8GB RAM未満のデバイスで7Bモデルは使わないでください。',
          '<strong>Termux + Ollamaは最も強力な選択肢ですが、セットアップの難易度が最も高いです。</strong> F-DroidからTermuxをインストールし、ターミナル内で<code>pkg install ollama</code>を実行します。インストール後、<code>ollama pull</code>や<code>ollama run</code>を含むすべての標準Ollamaコマンドが動作します。このアプローチはデスクトップですでにOllamaを使用している開発者に最適です。',
          'バッテリー消費は7B以上のモデルで重要になります。フラッグシップスマートフォンでLlama 3 8B Q4を30分チャットすると、平均8–12%のバッテリーを消費します。頻繁に使用する場合は充電しながら使うか、Phi-3 MiniやGemma 2Bのような消費電力の少ない2–3Bモデルにとどめてください。',
          'パフォーマンスベンチマーク、NPU データ、量子化の比較が必要な方へ：<a href="/ja/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">詳細な Android LLM テクニカルガイド</a>。',
          'XperiaやAQUOSデバイスへの日本固有のアプリについては、<a href="/ja/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">日本のAndroid向けベストLLMアプリガイド</a>をご覧ください。',
        ],
        image: '/images/best-local-llm-apps-android-battery-ram-hero-ja.png',
        imageCaption: 'モデル階層別バッテリーとRAM -- Androidハードウェアに必要なもの',
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
    seoTitle: 'Android 本地 LLM 应用 2026：精选快速推荐',
    metaDescription: 'Android 2026 离线 AI：MLC Chat 为大多数手机首选，Pocketpal 适合自定义模型，Termux + Ollama 适合高级用户。含 RAM 指南。',
    heroImage: '/images/best-local-llm-apps-android-app-comparison-hero-zh.png',
    publishDate: '2026-05-18',
    dateModified: '2026-06-14',
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
          '<strong>需要技术深度分析？</strong> 真实手机性能基准、NPU 速度数据和 6 款 Android LLM 应用对比，请参阅<a href="/zh/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">深度 Android LLM 技术指南</a>。本页提供"安装哪款应用"的快速答案。',
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
        image: '/images/best-local-llm-apps-android-app-comparison-hero-zh.png',
        imageCaption: 'Android最佳本地LLM应用 -- 安装难度与模型灵活性',
      },
      body2: {
        title: '优先安装哪款应用',
        content: [
          '<strong>如果这是您第一次配置 Android LLM，请从 MLC Chat 开始——它的首个 token 生成速度最快，配置最少。</strong> Pocketpal 是想频繁切换模型的用户的进阶选择。Termux + Ollama 适合已熟悉 Ollama 并希望在移动端使用相同 CLI 工作流的开发者。',
          '配备 8+ GB 内存的 Android 旗舰机在 CPU 上处理 2–3B 模型可达 4–8 tok/s。2023–2024 年的中端手机较慢（1–3 tok/s）——适合批量任务，但实时对话体验较差。内存低于 8 GB 的设备不要尝试运行 7B 模型。',
          '<strong>Termux + Ollama 是最强大的选项，但安装难度最高。</strong> 您从 F-Droid 安装 Termux，然后在终端中运行 <code>pkg install ollama</code>。安装后，所有标准 Ollama 命令均可使用，包括 <code>ollama pull</code> 和 <code>ollama run</code>。这种方式最适合已在桌面使用 Ollama 的开发者。',
          '电池消耗在 7B 及以上模型时需要关注。在旗舰手机上使用 Llama 3 8B Q4 进行 30 分钟对话平均消耗 8–12% 电量。频繁使用时请插电，或选择 Phi-3 Mini 和 Gemma 2B 等耗电更少的 2–3B 模型。',
          '技术深度分析——真实 Android 硬件上的 NPU 基准与量子化权衡：<a href="/zh/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">深度 Android LLM 技术指南</a>。',
          '如需Xperia和AQUOS设备的日本专用应用选项，请参阅我们的<a href="/zh/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">日本Android最佳LLM应用指南</a>。',
        ],
        image: '/images/best-local-llm-apps-android-battery-ram-hero-zh.png',
        imageCaption: '按模型档位划分的电池与内存 -- Android硬件所需配置',
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
    seoTitle: 'Mejores Apps LLM Offline Android 2026: Picks Rápidos',
    metaDescription: 'IA sin conexión en Android 2026: MLC Chat es el top pick para la mayoría de móviles. Pocketpal y Termux + Ollama comparados. Guía de RAM incluida.',
    heroImage: '/images/best-local-llm-apps-android-app-comparison-hero-es.png',
    publishDate: '2026-05-18',
    dateModified: '2026-06-14',
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
          '<strong>¿Quieres el análisis técnico completo?</strong> Benchmarks de rendimiento, datos de NPU en teléfonos reales y 6 apps Android comparadas: <a href="/es/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">guía técnica profunda de Android LLM</a>. Esta página te da la respuesta rápida "qué app instalar".',
          '<strong>MLC Chat (descarga más fácil)</strong> — Instala en 1 minuto desde Google Play. Incluye una lista seleccionada de modelos preoptimizados para Android (Phi-2, Llama 3B). Sin línea de comandos, sin configuración. La mejor opción para principiantes.',
          '<strong>Pocketpal AI (más flexible)</strong> — Carga cualquier modelo GGUF directamente desde Hugging Face. Requiere más configuración que MLC Chat pero te da libertad para elegir cualquier modelo. Interfaz de chat integrada.',
          '<strong>Termux + Ollama (control total)</strong> — Instala Ollama completo en Android. Todos los comandos de Ollama disponibles. Requiere terminal, 8+ GB RAM, conocimiento técnico. Para usuarios avanzados solo.',
        ],
        image: '/images/best-local-llm-apps-android-app-comparison-hero-es.png',
        imageCaption: 'Mejores Apps de LLM Local para Android -- Esfuerzo de configuración vs flexibilidad de modelo',
      },
      body2: {
        title: 'Cuál elegir',
        content: [
          'Comienza con <strong>MLC Chat</strong> si nunca has ejecutado LLMs en tu teléfono. Es la opción más accesible.',
          'Usa <strong>Pocketpal</strong> si quieres control sobre qué modelos ejecutas y no quieres tocar la terminal.',
          'Elige <strong>Termux + Ollama</strong> si eres desarrollador o quieres Ollama completo en tu dispositivo.',
          'Para análisis técnico profundo — benchmarks de NPU, datos de hardware Android real y comparativas de cuantización: <a href="/es/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">guía técnica profunda de Android LLM</a>.',
        ],
        image: '/images/best-local-llm-apps-android-battery-ram-hero-es.png',
        imageCaption: 'Batería y RAM por Nivel de Modelo -- Lo que necesita el hardware Android',
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
  pt: {
    theme: 'Tool Comparisons',
    title: 'Quais são os melhores apps de LLM local para Android?',
    seoTitle: 'Melhores Apps LLM Offline Android 2026: Escolhas Rápidas',
    metaDescription: 'IA offline no Android 2026: MLC Chat é o top pick para a maioria dos celulares. Pocketpal e Termux + Ollama comparados. Guia de RAM incluído.',
    heroImage: '/images/best-local-llm-apps-android-app-comparison-hero-pt.png',
    publishDate: '2026-05-18',
    dateModified: '2026-06-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Principiante',
    audience: 'Usuários de Android executando LLMs no telefone',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'Quais são os melhores apps de LLM local para Android?',
        answer: 'Os melhores apps Android para executar LLMs localmente são MLC Chat para configuração fácil com modelos pré-otimizados, Pocketpal para carregamento flexível de GGUF, e Termux com Ollama para controle total. Todos funcionam completamente offline.',
        bullets: [
          'MLC Chat: configuração mais fácil, modelos pré-otimizados para Android',
          'Pocketpal: carregamento flexível de modelos GGUF',
          'Termux + Ollama: Ollama completo no Android, precisa de 8+ GB de RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat é a opção mais fácil: baixe do Google Play, modelos pré-otimizados, sem linha de comando',
          'Pocketpal LLM é mais flexível: carrega qualquer modelo GGUF do Hugging Face, mas precisa de mais configuração',
          'Termux + Ollama dá controle total do Ollama no seu telefone — mas requer 8+ GB de RAM e conhecimento de terminal',
        ],
      },
      body1: {
        title: 'Comparação rápida das 3 melhores opções',
        content: [
          '<strong>Quer a análise técnica completa?</strong> Benchmarks de desempenho, dados de NPU em celulares reais e 6 apps Android comparados: <a href="/pt/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">guia técnico detalhado de Android LLM</a>. Esta página fornece a resposta rápida "qual app instalar".',
          '<strong>MLC Chat (download mais fácil)</strong> — Instala em 1 minuto a partir do Google Play. Inclui uma lista selecionada de modelos pré-otimizados para Android (Phi-2, Llama 3B). Sem linha de comando, sem configuração. A melhor opção para iniciantes.',
          '<strong>Pocketpal AI (mais flexível)</strong> — Carrega qualquer modelo GGUF diretamente do Hugging Face. Requer mais configuração do que o MLC Chat, mas dá liberdade para escolher qualquer modelo. Interface de chat integrada.',
          '<strong>Termux + Ollama (controle total)</strong> — Instala o Ollama completo no Android. Todos os comandos Ollama disponíveis. Requer terminal, 8+ GB de RAM, conhecimento técnico. Somente para usuários avançados.',
        ],
        image: '/images/best-local-llm-apps-android-app-comparison-hero-pt.png',
        imageCaption: 'Melhores Apps de LLM Local para Android -- Esforço de configuração vs flexibilidade de modelo',
      },
      body2: {
        title: 'Qual escolher',
        content: [
          'Comece com <strong>MLC Chat</strong> se nunca executou LLMs no seu telefone. É a opção mais acessível.',
          'Use <strong>Pocketpal</strong> se quiser controle sobre quais modelos executa e não quiser usar o terminal.',
          'Escolha <strong>Termux + Ollama</strong> se for desenvolvedor ou quiser o Ollama completo no seu dispositivo.',
          'Para análise técnica aprofundada — benchmarks de NPU, dados de hardware Android real e comparações de quantização: <a href="/pt/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">guia técnico detalhado de Android LLM</a>.',
        ],
        image: '/images/best-local-llm-apps-android-battery-ram-hero-pt.png',
        imageCaption: 'Bateria e RAM por Nível de Modelo -- O que o hardware Android precisa',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas rápidas sobre apps Android para LLMs',
        faqs: [
          {
            q: 'Quais requisitos de RAM o MLC Chat precisa?',
            a: 'O MLC Chat funciona em telefones com 4+ GB de RAM. Para melhores resultados, 8+ GB. Os modelos pré-otimizados são comprimidos para rodar em dispositivos móveis.',
          },
          {
            q: 'Posso usar o Pocketpal sem uma conta no Hugging Face?',
            a: 'Sim. O Pocketpal AI pode baixar modelos GGUF de repositórios públicos do Hugging Face sem conta. Você só precisa de uma conta do Hugging Face para acessar repositórios privados ou restritos.',
          },
          {
            q: 'Como instalo o Ollama no Android via Termux?',
            a: 'Instale o Termux pelo F-Droid (não use o Google Play — a versão da Play Store está desatualizada). No Termux execute <code>pkg update && pkg install ollama</code>. Depois use os comandos padrão do Ollama: <code>ollama pull llama3</code> e <code>ollama run llama3</code>. Seu dispositivo precisa de 8+ GB de memória para funcionar de forma estável.',
          },
          {
            q: 'Qual é o melhor app Android para LLMs para iniciantes?',
            a: 'MLC Chat é o melhor ponto de partida. Instala-se do Google Play em um minuto, fornece uma lista selecionada de modelos pré-otimizados e não requer experiência em linha de comando. Para uma interface de chat mais completa, consulte o <a href="/pt/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">guia dos melhores frontends para Ollama</a>.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    title: 'ما أفضل تطبيقات النماذج اللغوية الكبيرة المحلية لنظام ⁨Android⁩؟',
    seoTitle: 'أفضل تطبيقات ⁨AI⁩ بلا إنترنت على ⁨Android 2026⁩',
    metaDescription: 'ذكاء اصطناعي بلا إنترنت على ⁨Android 2026⁩: ⁨MLC Chat⁩ الأفضل لمعظم الهواتف. مقارنة مع ⁨Pocketpal⁩ و⁨Termux + Ollama⁩. دليل ⁨RAM⁩ مضمّن.',
    heroImage: '/images/best-local-llm-apps-android-app-comparison-hero-ar.png',
    publishDate: '2026-05-18',
    dateModified: '2026-06-20',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'مبتدئ',
    audience: 'مستخدمو Android الذين يشغّلون النماذج اللغوية الكبيرة على هواتفهم',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل تطبيقات النماذج اللغوية الكبيرة المحلية لنظام Android؟',
        answer: 'أفضل تطبيقات Android لتشغيل النماذج اللغوية الكبيرة محلياً هي MLC Chat للإعداد السهل مع النماذج المُحسَّنة مسبقاً، وPocketpal للتحميل المرن لملفات GGUF، وTermux مع Ollama للتحكم الكامل. جميعها تعمل دون اتصال بالإنترنت بالكامل.',
        bullets: [
          'MLC Chat: أسهل إعداد، نماذج مُحسَّنة مسبقاً لنظام Android',
          'Pocketpal: تحميل مرن لنماذج GGUF',
          'Termux + Ollama: Ollama كاملة على Android، يحتاج 8 جيجابايت RAM أو أكثر',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat هو الخيار الأسهل — حمّله من Google Play واختر نموذجاً وابدأ الاستخدام دون اتصال بالإنترنت فوراً',
          'Pocketpal LLM أكثر مرونة: يمكنك تحميل أي نموذج GGUF من Hugging Face، لكنه يحتاج إعداداً أكبر',
          'Termux + Ollama يمنحك تحكماً كاملاً في Ollama على هاتفك — لكنه يتطلب 8 جيجابايت RAM أو أكثر ومعرفة بالطرفية',
        ],
      },
      body1: {
        title: 'مقارنة سريعة لأفضل 3 خيارات',
        content: [
          '<strong>هل تريد التحليل التقني المعمّق؟</strong> بيانات NPU وقياسات الأداء على هواتف حقيقية و6 تطبيقات مقارنة: <a href="/ar/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">دليل Android LLM التقني المفصّل</a>. هذه الصفحة تقدّم الإجابة السريعة "أيّ تطبيق تثبّت؟".',
          '<strong>MLC Chat (التنزيل الأسهل)</strong> — يُثبَّت في دقيقة واحدة من Google Play. يتضمن قائمة منتقاة من النماذج المُحسَّنة مسبقاً لنظام Android (Phi-2، Llama 3B). لا سطر أوامر، لا إعداد. الخيار الأفضل للمبتدئين.',
          '<strong>Pocketpal AI (الأكثر مرونة)</strong> — يُحمِّل أي نموذج GGUF مباشرةً من Hugging Face. يتطلب إعداداً أكبر من MLC Chat لكنه يمنحك حرية اختيار أي نموذج. يتضمن واجهة دردشة مدمجة.',
          '<strong>Termux + Ollama (تحكم كامل)</strong> — يُثبّت Ollama الكاملة على Android. جميع أوامر Ollama متاحة. يتطلب طرفية و8 جيجابايت RAM أو أكثر ومعرفة تقنية. للمستخدمين المتقدمين فقط.',
        ],
        image: '/images/best-local-llm-apps-android-app-comparison-hero-ar.png',
        imageCaption: 'أفضل تطبيقات LLM المحلية لأندرويد -- جهد الإعداد مقابل مرونة النموذج',
      },
      body2: {
        title: 'أيها تختار',
        content: [
          'ابدأ بـ<strong>MLC Chat</strong> إذا لم تشغّل نماذج لغوية كبيرة على هاتفك من قبل. إنه الخيار الأكثر سهولة.',
          'استخدم <strong>Pocketpal</strong> إذا أردت التحكم في النماذج التي تشغّلها دون الحاجة إلى الطرفية.',
          'اختر <strong>Termux + Ollama</strong> إذا كنت مطوراً أو تريد Ollama الكاملة على جهازك.',
          'للتحليل التقني المعمّق — بيانات NPU وقياسات الأداء على أجهزة Android حقيقية: <a href="/ar/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">دليل Android LLM التقني المفصّل</a>.',
        ],
        image: '/images/best-local-llm-apps-android-battery-ram-hero-ar.png',
        imageCaption: 'البطارية والذاكرة حسب فئة النموذج -- ما تحتاجه أجهزة أندرويد',
      },
      faq: {
        id: 'faq',
        title: 'أسئلة سريعة حول تطبيقات Android للنماذج اللغوية الكبيرة',
        faqs: [
          {
            q: 'ما متطلبات RAM لتطبيق MLC Chat؟',
            a: 'يعمل MLC Chat على الهواتف التي تحتوي على 4 جيجابايت RAM أو أكثر. للحصول على أفضل النتائج، يُوصى بـ8 جيجابايت أو أكثر. النماذج المُحسَّنة مسبقاً مضغوطة للتشغيل على الأجهزة المحمولة.',
          },
          {
            q: 'هل يمكنني استخدام Pocketpal بدون حساب Hugging Face؟',
            a: 'نعم. يستطيع Pocketpal AI تنزيل نماذج GGUF من مستودعات Hugging Face العامة بدون حساب. تحتاج إلى حساب Hugging Face فقط للوصول إلى المستودعات الخاصة أو المقيّدة.',
          },
          {
            q: 'كيف أثبّت Ollama على Android عبر Termux؟',
            a: 'ثبّت Termux من F-Droid (لا تستخدم Google Play — نسخة متجر Play قديمة). في Termux نفّذ <code>pkg update && pkg install ollama</code>. ثم استخدم أوامر Ollama القياسية: <code>ollama pull llama3</code> و<code>ollama run llama3</code>. يحتاج جهازك إلى 8 جيجابايت RAM أو أكثر للتشغيل المستقر.',
          },
          {
            q: 'ما أفضل تطبيق Android للنماذج اللغوية الكبيرة للمبتدئين؟',
            a: 'MLC Chat هو أفضل نقطة انطلاق. يُثبَّت من Google Play في دقيقة واحدة، يوفر قائمة منتقاة من النماذج المُحسَّنة مسبقاً، ولا يتطلب أي خبرة في سطر الأوامر. للحصول على واجهة دردشة أغنى، راجع <a href="/ar/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">دليل أفضل واجهات Ollama</a>.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Tool Comparisons',
    title: 'Android용 최고의 로컬 LLM 앱은 무엇입니까?',
    seoTitle: 'Android 오프라인 AI 앱 2026: 빠른 추천 3선',
    metaDescription: 'Android 2026 오프라인 AI: MLC Chat이 대부분의 기기에 최적. Pocketpal과 Termux + Ollama 비교. RAM 가이드 포함.',
    heroImage: '/images/best-local-llm-apps-android-app-comparison-hero-ko.png',
    publishDate: '2026-05-18',
    dateModified: '2026-06-20',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: '초급',
    audience: 'Android 기기에서 LLM을 실행하는 사용자',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: 'Android용 최고의 로컬 LLM 앱은 무엇입니까?',
        answer: 'Android에서 LLM을 로컬로 실행하기 위한 최고의 앱은 사전 최적화된 모델로 간편하게 설정할 수 있는 MLC Chat, 유연한 GGUF 모델 로딩을 지원하는 Pocketpal, 그리고 완전한 제어를 위한 Termux + Ollama입니다. 모두 완전히 오프라인에서 작동합니다.',
        bullets: [
          'MLC Chat: 가장 간편한 설정, Android용 사전 최적화 모델 제공',
          'Pocketpal: GGUF 모델을 유연하게 로드 가능',
          'Termux + Ollama: Android에서 전체 Ollama 실행, 8GB 이상 RAM 필요',
        ],
        updatedDate: '2026-05',
      },
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Android에서 로컬 LLM을 실행하려면 MLC Chat(초보자), Pocketpal(중급자), Termux + Ollama(고급자) 중 하나를 선택하면 됩니다.',
      },
      {
        type: 'plain-terms',
        text: '로컬 LLM 앱은 인터넷 연결 없이 Android 스마트폰에서 AI 언어 모델을 직접 실행하는 애플리케이션입니다. MLC Chat은 Google Play에서 1분 만에 설치할 수 있으며, Pocketpal은 Hugging Face의 GGUF 모델을 자유롭게 선택할 수 있고, Termux + Ollama는 개발자 수준의 완전한 제어를 제공합니다.',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Android용 최고의 로컬 LLM 앱은 무엇입니까?',
      description: 'Android에서 로컬 LLM을 실행하는 최고의 앱 비교: MLC Chat, Pocketpal, Termux + Ollama.',
      inLanguage: 'ko',
      url: 'https://www.promptquorum.com/ko/prompt-bites/best-local-llm-apps-android',
      datePublished: '2026-05-18',
      dateModified: '2026-05-18',
      'proficiencyLevel': '초급',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '홈',
          item: 'https://www.promptquorum.com/ko',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Prompt Bites',
          item: 'https://www.promptquorum.com/ko/prompt-bites',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Android용 최고의 로컬 LLM 앱',
          item: 'https://www.promptquorum.com/ko/prompt-bites/best-local-llm-apps-android',
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLC Chat은 가장 간편한 선택입니다: Google Play에서 다운로드하고 사전 최적화된 모델을 선택하면 바로 오프라인에서 사용 가능합니다.',
          'Pocketpal LLM은 더 유연합니다: Hugging Face에서 GGUF 모델을 자유롭게 로드할 수 있지만 설정이 조금 더 복잡합니다.',
          'Termux + Ollama는 스마트폰에서 Ollama를 완전히 제어할 수 있게 해줍니다. 단, 8GB 이상의 RAM과 터미널 사용 능력이 필요합니다.',
        ],
      },
      body1: {
        title: '3가지 최고 옵션 빠른 비교',
        content: [
          '<strong>기술적인 상세 분석이 필요하신가요?</strong> 실제 스마트폰 벤치마크, NPU 속도 데이터, 6개 Android LLM 앱 비교는 <a href="/ko/power-local-llm/best-local-llm-apps-android-2026" class="text-primary hover:underline">심층 Android LLM 기술 가이드</a>를 참조하세요. 이 페이지는 "어떤 앱을 설치할지" 빠른 답변을 제공합니다.',
          '<strong>MLC Chat(가장 간편한 다운로드)</strong> — Google Play에서 1분 만에 설치할 수 있습니다. Android용으로 사전 최적화된 모델 목록(Phi-2, Llama 3B)이 포함되어 있습니다. 명령줄이나 별도 설정이 필요 없으며 초보자에게 가장 적합한 선택입니다.',
          '<strong>Pocketpal AI(더 유연함)</strong> — Hugging Face에서 직접 GGUF 모델을 로드할 수 있습니다. MLC Chat보다 설정이 복잡하지만 원하는 모델을 자유롭게 선택할 수 있습니다. 통합 채팅 인터페이스가 제공됩니다.',
          '<strong>Termux + Ollama(완전 제어)</strong> — Android에 전체 Ollama를 설치합니다. 모든 Ollama 명령어를 사용할 수 있습니다. 터미널, 8GB 이상의 RAM, 기술적 지식이 필요하며 고급 사용자 전용입니다.',
        ],
        image: '/images/best-local-llm-apps-android-app-comparison-hero-ko.png',
        imageCaption: '안드로이드 최고의 로컬 LLM 앱 -- 설정 난이도 대 모델 유연성',
      },
      body2: {
        title: '어떤 앱을 선택해야 합니까',
        content: [
          '스마트폰에서 LLM을 처음 실행해보신다면 <strong>MLC Chat</strong>으로 시작하시기 바랍니다. 가장 접근하기 쉬운 옵션입니다.',
          '터미널을 사용하지 않고 실행할 모델을 직접 선택하고 싶다면 <strong>Pocketpal</strong>을 사용하시기 바랍니다.',
          '개발자이거나 기기에서 완전한 Ollama 기능을 원하신다면 <strong>Termux + Ollama</strong>를 선택하시기 바랍니다.',
        ],
        image: '/images/best-local-llm-apps-android-battery-ram-hero-ko.png',
        imageCaption: '모델 등급별 배터리 및 RAM -- 안드로이드 하드웨어 요구사항',
      },
      faq: {
        id: 'faq',
        title: 'Android LLM 앱에 관한 자주 묻는 질문',
        faqs: [
          {
            q: 'MLC Chat은 얼마나 많은 RAM이 필요합니까?',
            a: 'MLC Chat은 4GB 이상의 RAM을 갖춘 스마트폰에서 작동합니다. 최적의 성능을 위해서는 8GB 이상을 권장합니다. 사전 최적화된 모델은 모바일 기기에서 실행할 수 있도록 압축되어 있습니다.',
          },
          {
            q: 'Hugging Face 계정 없이 Pocketpal을 사용할 수 있습니까?',
            a: '네, 가능합니다. Pocketpal AI는 계정 없이도 Hugging Face의 공개 저장소에서 GGUF 모델을 다운로드할 수 있습니다. Hugging Face 계정은 비공개 또는 제한된 저장소에 접근할 때만 필요합니다.',
          },
          {
            q: 'Termux를 통해 Android에 Ollama를 설치하려면 어떻게 합니까?',
            a: 'F-Droid에서 Termux를 설치하시기 바랍니다(Google Play 버전은 오래되어 사용하지 마십시오). Termux에서 <code>pkg update && pkg install ollama</code>를 실행합니다. 그런 다음 표준 Ollama 명령어를 사용하십시오: <code>ollama pull llama3</code> 및 <code>ollama run llama3</code>. 안정적인 실행을 위해 기기에 8GB 이상의 메모리가 필요합니다.',
          },
          {
            q: '초보자에게 가장 적합한 Android LLM 앱은 무엇입니까?',
            a: 'MLC Chat이 가장 좋은 시작점입니다. Google Play에서 1분 만에 설치할 수 있고, 사전 최적화된 모델 목록을 제공하며, 명령줄 경험이 전혀 필요하지 않습니다. 더 풍부한 채팅 인터페이스를 원하신다면 <a href="/ko/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">Ollama 최고의 프론트엔드 가이드</a>를 참조하시기 바랍니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 자료',
        items: [
          '[Ollama 최고의 프론트엔드 비교](/ko/prompt-bites/best-frontend-for-ollama)',
          '[Jan vs LM Studio 비교](/ko/prompt-bites/jan-vs-lm-studio)',
          '[Android LLM 심층 기술 가이드 — NPU 속도, 벤치마크, 6개 앱 비교](/ko/power-local-llm/best-local-llm-apps-android-2026)',
        ],
      },
    },
  },
}
