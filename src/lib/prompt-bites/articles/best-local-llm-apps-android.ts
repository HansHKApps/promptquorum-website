import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    title: 'Best Local LLM Apps for Android?',
    seoTitle: 'Best Local LLM Apps for Android? | Prompt Bites | PromptQuorum',
    metaDescription: 'Top Android apps for local LLMs: MLC Chat (easiest), Pocketpal (flexible), Termux + Ollama (full control). All run offline. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Android users running LLMs on their phone',
    parentArticle: '/power-local-llm/best-local-llm-apps-android-2026',
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best local LLM apps for Android?',
        answer: 'The top Android apps for running LLMs locally are MLC Chat, Pocketpal, and Termux with Ollama. MLC Chat is the easiest for beginners. All run fully offline.',
        bullets: [
          'MLC Chat: easiest setup, preoptimized models for Android',
          'Pocketpal: flexible GGUF model loading',
          'Termux + Ollama: full Ollama on Android, needs 8+ GB RAM',
        ],
        updatedDate: '2026-05',
      },
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
          'MLC Chat is the easiest starting point for Android LLMs — install from Google Play, pick a model, run offline immediately',
          'Pocketpal supports loading any GGUF file from Hugging Face, giving power users full model flexibility on Android',
          'Termux + Ollama brings the full Ollama CLI to Android but requires an 8+ GB RAM device and comfort with the terminal',
          'Android requires 8 GB RAM for 7B models and at least 4 GB RAM for 2–4B models; check device specs before installing',
        ],
      },
      body1: {
        title: 'Three Ways to Run a Local LLM on Android',
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
        title: 'Hardware Requirements and Which App to Choose',
        content: [
          'Android device RAM is the binding constraint for local LLM inference. You need at least 8 GB RAM to run a 7B model comfortably — this rules out most budget phones. For 2–4B models, 4 GB RAM is sufficient. Do not attempt to run a 7B model on a device with 4 GB RAM — the OS will kill the process.',
          '<strong>Termux + Ollama is the most powerful option but has the steepest setup curve.</strong> You install Termux from F-Droid, then run <code>pkg install ollama</code> inside the terminal. Once installed, all standard Ollama commands work including <code>ollama pull</code> and <code>ollama run</code>. This approach is best for developers who already use Ollama on desktop.',
          'For a side-by-side comparison of desktop and mobile local LLM setups, see the <a href="/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">best Ollama models for CPU-only guide</a>.',
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
            a: 'MLC Chat is the best starting point. It installs from Google Play in under a minute, offers a curated list of preoptimized models, and requires no command-line experience. See our <a href="/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">CPU-only Ollama guide</a> for model size recommendations that also apply to Android.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    title: 'Die besten lokalen LLM-Apps für Android?',
    seoTitle: 'Beste lokale LLM-Apps für Android? | Prompt Bites | PromptQuorum',
    metaDescription: 'Die besten Android-Apps für lokale LLMs: MLC Chat (einfachste), Pocketpal (flexibel), Termux + Ollama (volle Kontrolle). Alle offline. Kurze Antwort von PromptQuorum.',
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
          'Pocketpal unterstützt das Laden beliebiger GGUF-Dateien von Hugging Face und bietet Power-Usern volle Modellflexibilität',
          'Termux + Ollama bringt die vollständige Ollama-CLI auf Android, erfordert aber 8+ GB RAM und Terminal-Kenntnisse',
          'Android benötigt 8 GB RAM für 7B-Modelle und mindestens 4 GB RAM für 2–4B-Modelle — vor der Installation Gerätespezifikationen prüfen',
        ],
      },
      body1: {
        title: 'Drei Wege, ein lokales LLM auf Android zu betreiben',
        content: [
          '<strong>Stand Mai 2026 gibt es drei praktische Möglichkeiten, ein lokales LLM auf Android zu betreiben: MLC Chat (Machine Learning Compilation), Pocketpal AI und Termux mit Ollama.</strong> Alle drei laufen nach dem ersten Modell-Download zu 100 % offline — kein API-Key oder Internetzugang erforderlich.',
          'MLC Chat verwendet das MLC-LLM-Kompilierungsframework, um Modellgewichte für mobile Hardware vorzuoptimieren. Sie laden es aus dem Google Play Store herunter, wählen ein unterstütztes Modell (Llama 3, Gemma, Phi) aus, und das Modell wird direkt auf dem Gerät heruntergeladen und ausgeführt. Die Einrichtung dauert unter 10 Minuten.',
          'Pocketpal AI wurde von der Hugging-Face-Community entwickelt und unterstützt das direkte Laden von GGUF-Modelldateien von Hugging Face. Das bedeutet, dass Sie ein beliebiges GGUF-kompatibles Modell ausführen können, nicht nur eine vordefinierte Liste. Der Kompromiss ist eine etwas komplexere Einrichtung mit manueller Modellauswahl und -download.',
        ],
        columns: ['App', 'Einrichtungsaufwand', 'Modellflexibilität'],
        rows: [
          { 'App': 'MLC Chat', 'Einrichtungsaufwand': 'Einfach (Play Store)', 'Modellflexibilität': 'Nur voroptimierte Modelle' },
          { 'App': 'Pocketpal', 'Einrichtungsaufwand': 'Mittel', 'Modellflexibilität': 'GGUF von Hugging Face' },
          { 'App': 'Termux + Ollama', 'Einrichtungsaufwand': 'Fortgeschritten (CLI)', 'Modellflexibilität': 'Vollständige Ollama-Bibliothek' },
        ],
      },
      body2: {
        title: 'Hardware-Anforderungen und App-Auswahl',
        content: [
          'Der RAM des Android-Geräts ist die entscheidende Einschränkung für die lokale LLM-Inferenz. Sie benötigen mindestens 8 GB RAM, um ein 7B-Modell komfortabel zu betreiben — das schließt die meisten Budget-Handys aus. Für 2–4B-Modelle reichen 4 GB RAM. Versuchen Sie nicht, ein 7B-Modell auf einem Gerät mit 4 GB RAM auszuführen — das Betriebssystem wird den Prozess beenden.',
          '<strong>Termux + Ollama ist die leistungsstärkste Option, hat aber die steilste Einrichtungskurve.</strong> Sie installieren Termux von F-Droid, dann führen Sie <code>pkg install ollama</code> im Terminal aus. Nach der Installation funktionieren alle Standard-Ollama-Befehle, einschließlich <code>ollama pull</code> und <code>ollama run</code>. Dieser Ansatz eignet sich am besten für Entwickler, die Ollama bereits auf dem Desktop verwenden.',
          'Einen Vergleich von Desktop- und mobilen lokalen LLM-Setups finden Sie im <a href="/de/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">Leitfaden zu den besten Ollama-Modellen nur für die CPU</a>.',
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
            a: 'MLC Chat ist der beste Einstiegspunkt. Es installiert sich aus dem Google Play Store in unter einer Minute, bietet eine kuratierte Liste voroptimierter Modelle und erfordert keine Terminal-Kenntnisse.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    title: 'Meilleures applications LLM locales pour Android ?',
    seoTitle: 'Meilleures applis LLM locales Android ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Meilleures applis Android pour LLM locaux : MLC Chat (plus facile), Pocketpal (flexible), Termux + Ollama (contrôle total). Tout hors ligne. Réponse rapide par PromptQuorum.',
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
          'Pocketpal prend en charge le chargement de tout fichier GGUF depuis Hugging Face, offrant aux utilisateurs avancés une flexibilité totale sur Android',
          'Termux + Ollama apporte le CLI Ollama complet sur Android, mais nécessite un appareil avec 8+ Go de RAM et une aisance avec le terminal',
          'Android nécessite 8 Go de RAM pour les modèles 7B et au moins 4 Go de RAM pour les modèles 2–4B ; vérifiez les specs avant d\'installer',
        ],
      },
      body1: {
        title: 'Trois façons d\'exécuter un LLM local sur Android',
        content: [
          '<strong>En mai 2026, il existe trois méthodes pratiques pour exécuter un LLM local sur Android : MLC Chat (Machine Learning Compilation), Pocketpal AI et Termux avec Ollama.</strong> Les trois fonctionnent 100 % hors ligne après le téléchargement initial du modèle — aucune clé API ni connexion internet requise.',
          'MLC Chat utilise le framework de compilation MLC-LLM pour préoptimiser les poids des modèles pour le matériel mobile. Vous le téléchargez depuis Google Play, sélectionnez un modèle pris en charge (Llama 3, Gemma, Phi), et le modèle se télécharge et s\'exécute directement sur l\'appareil. La configuration prend moins de 10 minutes.',
          'Pocketpal AI est développée par la communauté Hugging Face et prend en charge le chargement de fichiers GGUF directement depuis Hugging Face. Cela signifie que vous pouvez exécuter n\'importe quel modèle compatible GGUF, pas seulement une liste prédéfinie. La contrepartie est une configuration légèrement plus complexe nécessitant une sélection et un téléchargement manuel du modèle.',
        ],
        columns: ['Application', 'Effort de configuration', 'Flexibilité des modèles'],
        rows: [
          { 'Application': 'MLC Chat', 'Effort de configuration': 'Facile (Play Store)', 'Flexibilité des modèles': 'Modèles préoptimisés uniquement' },
          { 'Application': 'Pocketpal', 'Effort de configuration': 'Moyen', 'Flexibilité des modèles': 'GGUF depuis Hugging Face' },
          { 'Application': 'Termux + Ollama', 'Effort de configuration': 'Avancé (CLI)', 'Flexibilité des modèles': 'Bibliothèque Ollama complète' },
        ],
      },
      body2: {
        title: 'Exigences matérielles et choix de l\'application',
        content: [
          'La RAM de l\'appareil Android est la contrainte principale pour l\'inférence LLM locale. Vous avez besoin d\'au moins 8 Go de RAM pour exécuter confortablement un modèle 7B — ce qui exclut la plupart des téléphones d\'entrée de gamme. Pour les modèles 2–4B, 4 Go de RAM suffisent. N\'essayez pas d\'exécuter un modèle 7B sur un appareil avec 4 Go de RAM — le système d\'exploitation tuera le processus.',
          '<strong>Termux + Ollama est l\'option la plus puissante mais présente la courbe d\'apprentissage la plus élevée.</strong> Vous installez Termux depuis F-Droid, puis exécutez <code>pkg install ollama</code> dans le terminal. Une fois installé, toutes les commandes Ollama standard fonctionnent, y compris <code>ollama pull</code> et <code>ollama run</code>. Cette approche convient mieux aux développeurs qui utilisent déjà Ollama sur desktop.',
          'Pour une comparaison des configurations LLM locales desktop et mobile, consultez le <a href="/fr/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">guide des meilleurs modèles Ollama en mode CPU uniquement</a>.',
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
            a: 'MLC Chat est le meilleur point de départ. Elle s\'installe depuis Google Play en moins d\'une minute, propose une liste organisée de modèles préoptimisés et ne nécessite aucune expérience en ligne de commande. Consultez notre <a href="/fr/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">guide Ollama en mode CPU uniquement</a> pour des recommandations de taille de modèle qui s\'appliquent également à Android.',
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
          'Androidは7Bモデルに8GB RAM、2-4Bモデルに最低4GB RAMが必要 — インストール前にデバイスのスペックを確認すること',
        ],
      },
      body1: {
        title: 'AndroidでローカルLLMを実行する3つの方法',
        content: [
          '<strong>2026年5月時点で、Androidでローカルを実行するための実用的な3つの方法があります：MLC Chat（Machine Learning Compilation）、Pocketpal AI、Termux + Ollama。</strong> 3つすべてが最初のモデルダウンロード後は100%オフラインで動作します — APIキーやインターネット接続は不要です。',
          'MLC ChatはMLC-LLMコンパイルフレームワークを使用してモデルの重みをモバイルハードウェア向けに事前最適化します。Google Playからダウンロードし、サポートされているモデル（Llama 3、Gemma、Phi）を選択すると、モデルがデバイスに直接ダウンロードされて実行されます。セットアップは10分以内に完了します。',
          'Pocketpal AIはHugging Faceコミュニティによって開発され、Hugging FaceからGGUFモデルファイルを直接ロードできます。これにより、事前定義リストだけでなく、任意のGGUF互換モデルを実行できます。トレードオフは手動でのモデル選択とダウンロードが必要なやや複雑なセットアップです。',
        ],
        columns: ['アプリ', 'セットアップの難易度', 'モデルの柔軟性'],
        rows: [
          { 'アプリ': 'MLC Chat', 'セットアップの難易度': '簡単（Play Store）', 'モデルの柔軟性': '事前最適化モデルのみ' },
          { 'アプリ': 'Pocketpal', 'セットアップの難易度': '中程度', 'モデルの柔軟性': 'Hugging FaceのGGUF' },
          { 'アプリ': 'Termux + Ollama', 'セットアップの難易度': '上級（CLI）', 'モデルの柔軟性': '完全なOllamaライブラリ' },
        ],
      },
      body2: {
        title: 'ハードウェア要件とアプリの選択',
        content: [
          'AndroidデバイスのRAMがローカルLLM推論の拘束条件です。7Bモデルを快適に実行するには最低8GB RAMが必要です — これはほとんどの予算帯のスマートフォンを除外します。2-4Bモデルには4GB RAMで十分です。4GB RAMのデバイスで7Bモデルを実行しようとしないでください — OSがプロセスを強制終了します。',
          '<strong>Termux + Ollamaは最も強力な選択肢ですが、最も急な学習曲線があります。</strong> F-DroidからTermuxをインストールし、ターミナル内で<code>pkg install ollama</code>を実行します。インストール後、<code>ollama pull</code>や<code>ollama run</code>を含むすべての標準Ollamaコマンドが動作します。このアプローチはデスクトップですでにOllamaを使用している開発者に最適です。',
          'デスクトップとモバイルのローカルLLMセットアップの並列比較については、<a href="/ja/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">CPU専用向けOllamaモデルガイド</a>をご覧ください。',
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
            a: 'MLC Chatが最良の出発点です。Google Playから1分以内でインストールでき、厳選された事前最適化モデルのリストを提供し、コマンドライン経験は不要です。',
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
          'Android 运行 7B 模型需要 8 GB 内存，2-4B 模型至少需要 4 GB 内存；安装前检查设备规格',
        ],
      },
      body1: {
        title: '在 Android 上运行本地 LLM 的三种方式',
        content: [
          '<strong>截至 2026 年 5 月，在 Android 上运行本地 LLM 有三种实用方法：MLC Chat（Machine Learning Compilation）、Pocketpal AI 和 Termux + Ollama。</strong> 三种方式在初始模型下载后均可 100% 离线运行——无需 API 密钥或网络连接。',
          'MLC Chat 使用 MLC-LLM 编译框架将模型权重预优化为适合移动硬件的格式。您从 Google Play 下载，选择支持的模型（Llama 3、Gemma、Phi），模型直接在设备上下载并运行。安装配置不到 10 分钟。',
          'Pocketpal AI 由 Hugging Face 社区开发，支持直接从 Hugging Face 加载 GGUF 模型文件。这意味着您可以运行任何兼容 GGUF 的模型，而不仅仅是预定义列表。代价是需要手动选择和下载模型，配置稍微复杂一些。',
        ],
        columns: ['应用', '安装难度', '模型灵活性'],
        rows: [
          { '应用': 'MLC Chat', '安装难度': '简单（Play Store）', '模型灵活性': '仅预优化模型' },
          { '应用': 'Pocketpal', '安装难度': '中等', '模型灵活性': 'Hugging Face 的 GGUF' },
          { '应用': 'Termux + Ollama', '安装难度': '高级（CLI）', '模型灵活性': '完整 Ollama 库' },
        ],
      },
      body2: {
        title: '硬件要求和应用选择',
        content: [
          'Android 设备的内存是本地 LLM 推理的关键限制。舒适运行 7B 模型至少需要 8 GB 内存——这排除了大多数入门级手机。2-4B 模型有 4 GB 内存就够了。不要尝试在 4 GB 内存的设备上运行 7B 模型——系统会终止该进程。',
          '<strong>Termux + Ollama 是最强大的选项，但学习曲线最陡。</strong> 您从 F-Droid 安装 Termux，然后在终端中运行 <code>pkg install ollama</code>。安装后，所有标准 Ollama 命令均可使用，包括 <code>ollama pull</code> 和 <code>ollama run</code>。这种方式最适合已在桌面使用 Ollama 的开发者。',
          '有关桌面和移动本地 LLM 设置的对比，请参阅<a href="/zh/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">仅用 CPU 运行 Ollama 最佳模型指南</a>。',
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
            a: 'MLC Chat 是最佳起点。它可在一分钟内从 Google Play 安装完毕，提供精选的预优化模型列表，无需任何命令行经验。请参阅我们的<a href="/zh/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">纯 CPU Ollama 指南</a>获取同样适用于 Android 的模型大小建议。',
          },
        ],
      },
    },
  },
}
