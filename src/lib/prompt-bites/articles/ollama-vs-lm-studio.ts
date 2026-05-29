import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    title: 'Ollama vs LM Studio: Which Should You Pick?',
    seoTitle: 'Ollama vs LM Studio? | Prompt Bites | PromptQuorum',
    metaDescription: 'Use Ollama if you use a terminal and build with APIs. Use LM Studio if you want a GUI. Both are free and run models locally. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing between Ollama and LM Studio',
    parentArticle: '/local-llms/ollama-vs-lm-studio',
    siblingBites: ['jan-vs-lm-studio', 'best-frontend-for-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Ollama vs LM Studio: which should you pick?',
        answer: 'If you use a terminal and build with APIs, choose Ollama. If you prefer a GUI and just want to chat with models, use LM Studio. Both are free and run models locally.',
        bullets: [
          'Ollama: CLI-first, OpenAI-compatible API, developer tool',
          'LM Studio: desktop GUI, drag-and-drop models, beginner-friendly',
          'Both run on Mac, Windows, and Linux',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Ollama vs LM Studio: Welches sollten Sie wählen?',
        answer: 'Wenn Sie ein Terminal nutzen und mit APIs entwickeln, wählen Sie Ollama. Wenn Sie eine grafische Oberfläche bevorzugen und einfach mit Modellen chatten möchten, nehmen Sie LM Studio. Beide sind kostenlos und führen Modelle lokal aus.',
        bullets: [
          'Ollama: CLI-first, OpenAI-kompatibler API, Entwicklertool',
          'LM Studio: Desktop-GUI, Drag-and-Drop-Modelle, einsteigerfreundlich',
          'Beide laufen auf Mac, Windows und Linux',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Ollama vs LM Studio : lequel choisir ?',
        answer: 'Si vous utilisez un terminal et développez avec des API, choisissez Ollama. Si vous préférez une interface graphique et souhaitez simplement discuter avec des modèles, utilisez LM Studio. Les deux sont gratuits et exécutent les modèles localement.',
        bullets: [
          'Ollama : CLI-first, API compatible OpenAI, outil pour développeurs',
          'LM Studio : interface graphique, modèles glisser-déposer, idéal pour débutants',
          'Les deux fonctionnent sur Mac, Windows et Linux',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Ollama vs LM Studio：どちらを選ぶべきですか？',
        answer: 'ターミナルを使用してAPIで開発する場合はOllamaを選んでください。GUIを好み、モデルとチャットしたいだけならLM Studioを使用してください。両方とも無料でモデルをローカルで実行します。',
        bullets: [
          'Ollama：CLIファースト、OpenAI互換API、デベロッパーツール',
          'LM Studio：デスクトップGUI、ドラッグ＆ドロップでモデル追加、初心者向け',
          '両方ともMac、Windows、Linuxで動作',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'Ollama vs LM Studio：应该选哪个？',
        answer: '如果您使用终端并通过 API 开发，选 Ollama。如果您更喜欢图形界面，只想与模型聊天，使用 LM Studio。两者均免费且在本地运行模型。',
        bullets: [
          'Ollama：CLI 优先，OpenAI 兼容 API，开发者工具',
          'LM Studio：桌面图形界面，拖放模型，适合初学者',
          '两者均支持 Mac、Windows 和 Linux',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama runs as a CLI background service on port 11434 — start it with `ollama serve`, pull models with `ollama pull`, query via curl or any OpenAI-compatible client',
          'LM Studio is a desktop GUI app — download from lmstudio.ai, browse and load models with a click, built-in chat window included',
          'Both use llama.cpp and GGUF under the hood, so token generation speed is nearly identical for the same model and quantization',
        ],
      },
      body1: {
        title: 'Where Each Tool Wins',
        content: [
          '<strong>Ollama wins for developers: it has no GUI overhead, integrates with Python and JavaScript apps via its OpenAI-compatible REST API, and runs headless on Linux servers.</strong> LM Studio wins for beginners: its built-in model store lets you download and run a model in under three minutes without touching a terminal.',
          'Both tools use llama.cpp under the hood, so the model itself runs identically. The choice is workflow: command line vs visual interface. The table below maps five practical dimensions to the tool that handles each better.',
        ],
        columns: ['Feature', 'Ollama', 'LM Studio'],
        rows: [
          { 'Feature': 'Install method', 'Ollama': 'CLI (`brew install ollama`)', 'LM Studio': 'GUI installer' },
          { 'Feature': 'Chat interface', 'Ollama': 'None (API only)', 'LM Studio': 'Built-in' },
          { 'Feature': 'API server', 'Ollama': 'REST, port 11434', 'LM Studio': 'REST, port 1234' },
          { 'Feature': 'Model management', 'Ollama': '`ollama pull <model>`', 'LM Studio': 'Browse + click' },
          { 'Feature': 'Best for', 'Ollama': 'Developers + servers', 'LM Studio': 'Beginners + chat use' },
        ],
      },
      body2: {
        title: 'When to Use Both',
        content: [
          'You can run Ollama and LM Studio simultaneously. Use LM Studio to browse and test new models, then switch to Ollama once you know which model you want to integrate into a Python or JavaScript app.',
          'Ollama defaults to port 11434, LM Studio defaults to port 1234 — they don\'t conflict by default. If you\'ve customized either port, set the OLLAMA_HOST environment variable or change LM Studio\'s server port in Settings.',
          'For the full guide covering installation, model selection, and performance tuning, see the <a href="/local-llms/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio in-depth comparison</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Ollama vs LM Studio',
        faqs: [
          {
            q: 'Can Ollama and LM Studio run at the same time?',
            a: 'Yes. Ollama defaults to port 11434, LM Studio defaults to port 1234, so they don\'t conflict by default. You only need to change a port if you\'ve customized one of them.',
          },
          {
            q: 'Which is faster — Ollama or LM Studio?',
            a: 'Performance is nearly identical because both use llama.cpp under the hood to run GGUF models. The difference in token generation speed between the two is less than 5% for the same model and quantization level.',
          },
          {
            q: 'Does LM Studio have a command-line interface?',
            a: 'LM Studio does not have a CLI for running models. It is a desktop-only application. If you need CLI access or want to integrate model inference into scripts, use Ollama instead.',
          },
          {
            q: 'Can I use Ollama without a GUI at all?',
            a: 'Yes. Ollama is designed for headless and server use. It runs as a systemd service on Linux, has no GUI dependencies, and can be paired with a browser-based chat UI if needed. See <a href="/prompt-bites/jan-vs-lm-studio" class="text-primary hover:underline">Jan vs LM Studio</a> for a comparison of desktop GUI options.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    title: 'Ollama vs LM Studio: Welches sollten Sie wählen?',
    seoTitle: 'Ollama vs LM Studio? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ollama (Port 11434): Terminal und APIs. LM Studio (Port 1234): GUI-Oberfläche. Beide kostenlos, Modelle laufen lokal. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Ollama vs LM Studio: Welches sollten Sie wählen?',
        answer: 'Wenn Sie ein Terminal nutzen und mit APIs entwickeln, wählen Sie Ollama. Wenn Sie eine grafische Oberfläche bevorzugen und einfach mit Modellen chatten möchten, nehmen Sie LM Studio. Beide sind kostenlos und führen Modelle lokal aus.',
        bullets: [
          'Ollama: CLI-first, OpenAI-kompatibler API, Entwicklertool',
          'LM Studio: Desktop-GUI, Drag-and-Drop-Modelle, einsteigerfreundlich',
          'Beide laufen auf Mac, Windows und Linux',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama läuft als CLI-Hintergrunddienst auf Port 11434 — starten mit `ollama serve`, Modelle laden mit `ollama pull`, abfragen über curl oder jeden OpenAI-kompatiblen Client',
          'LM Studio ist eine Desktop-GUI-App — herunterladen unter lmstudio.ai, Modelle per Klick durchsuchen und laden, integriertes Chat-Fenster inklusive',
          'Beide verwenden llama.cpp und GGUF unter der Haube, daher ist die Token-Generierungsgeschwindigkeit für dasselbe Modell und dieselbe Quantisierung nahezu identisch',
        ],
      },
      body1: {
        title: 'Wo jedes Tool punktet',
        content: [
          '<strong>Ollama punktet für Entwickler: kein GUI-Overhead, Integration mit Python- und JavaScript-Apps über die OpenAI-kompatible REST-API, und läuft headless auf Linux-Servern.</strong> LM Studio punktet für Einsteiger: der integrierte Modell-Store ermöglicht das Herunterladen und Ausführen eines Modells in unter drei Minuten, ohne ein Terminal zu berühren.',
          'Beide Tools verwenden llama.cpp unter der Haube, sodass das Modell selbst identisch läuft. Die Wahl ist eine Workflow-Frage: Befehlszeile vs. visuelle Oberfläche. Die folgende Tabelle ordnet fünf praktische Dimensionen dem Tool zu, das jede davon besser handhabt.',
        ],
        columns: ['Funktion', 'Ollama', 'LM Studio'],
        rows: [
          { 'Funktion': 'Installationsmethode', 'Ollama': 'CLI (`brew install ollama`)', 'LM Studio': 'GUI-Installer' },
          { 'Funktion': 'Chat-Oberfläche', 'Ollama': 'Keine (nur API)', 'LM Studio': 'Integriert' },
          { 'Funktion': 'API-Server', 'Ollama': 'REST, port 11434', 'LM Studio': 'REST, port 1234' },
          { 'Funktion': 'Modellverwaltung', 'Ollama': '`ollama pull <model>`', 'LM Studio': 'Durchsuchen + Klick' },
          { 'Funktion': 'Am besten für', 'Ollama': 'Entwickler + Server', 'LM Studio': 'Einsteiger + Chat-Nutzung' },
        ],
      },
      body2: {
        title: 'Wenn man beide verwenden sollte',
        content: [
          'Sie können Ollama und LM Studio gleichzeitig ausführen. Verwenden Sie LM Studio zum Durchsuchen und Testen neuer Modelle, und wechseln Sie dann zu Ollama, sobald Sie wissen, welches Modell Sie in eine Python- oder JavaScript-App integrieren möchten.',
          'Ollama verwendet standardmäßig Port 11434, LM Studio verwendet standardmäßig Port 1234 — sie kollidieren standardmäßig nicht. Wenn Sie einen der Ports angepasst haben, setzen Sie die Umgebungsvariable OLLAMA_HOST oder ändern Sie den Server-Port von LM Studio in den Einstellungen.',
          'Den vollständigen Leitfaden zu Installation, Modellauswahl und Performance-Optimierung finden Sie im <a href="/de/local-llms/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio Vertiefungsvergleich</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Ollama vs LM Studio',
        faqs: [
          {
            q: 'Können Ollama und LM Studio gleichzeitig laufen?',
            a: 'Ja. Ollama verwendet standardmäßig Port 11434, LM Studio verwendet standardmäßig Port 1234, daher kollidieren sie standardmäßig nicht. Sie müssen nur einen Port ändern, wenn Sie einen davon angepasst haben.',
          },
          {
            q: 'Was ist schneller — Ollama oder LM Studio?',
            a: 'Die Leistung ist nahezu identisch, da beide llama.cpp unter der Haube verwenden, um GGUF-Modelle auszuführen. Der Unterschied in der Token-Generierungsgeschwindigkeit zwischen den beiden beträgt weniger als 5 % für dasselbe Modell und dieselbe Quantisierungsstufe.',
          },
          {
            q: 'Hat LM Studio eine Befehlszeilenschnittstelle?',
            a: 'LM Studio hat keine CLI zum Ausführen von Modellen. Es ist eine reine Desktop-Anwendung. Wenn Sie CLI-Zugriff benötigen oder Modell-Inferenz in Skripte integrieren möchten, verwenden Sie stattdessen Ollama.',
          },
          {
            q: 'Kann ich Ollama vollständig ohne GUI verwenden?',
            a: 'Ja. Ollama ist für den headless- und Server-Einsatz konzipiert. Es läuft als systemd-Dienst unter Linux, hat keine GUI-Abhängigkeiten und kann bei Bedarf mit einer browserbasierten Chat-UI kombiniert werden. Siehe <a href="/de/prompt-bites/jan-vs-lm-studio" class="text-primary hover:underline">Jan vs LM Studio</a> für einen Vergleich von Desktop-GUI-Optionen.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    title: 'Ollama vs LM Studio : lequel choisir ?',
    seoTitle: 'Ollama vs LM Studio ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ollama (port 11434) pour terminal et API. LM Studio (port 1234) pour interface graphique. Gratuits, modèles en local. Réponse rapide de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Ollama vs LM Studio : lequel choisir ?',
        answer: 'Si vous utilisez un terminal et développez avec des API, choisissez Ollama. Si vous préférez une interface graphique et souhaitez simplement discuter avec des modèles, utilisez LM Studio. Les deux sont gratuits et exécutent les modèles localement.',
        bullets: [
          'Ollama : CLI-first, API compatible OpenAI, outil pour développeurs',
          'LM Studio : interface graphique, modèles glisser-déposer, idéal pour débutants',
          'Les deux fonctionnent sur Mac, Windows et Linux',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama fonctionne comme un service CLI en arrière-plan sur le port 11434 — démarrer avec `ollama serve`, télécharger des modèles avec `ollama pull`, interroger via curl ou tout client compatible OpenAI',
          'LM Studio est une application de bureau avec interface graphique — télécharger sur lmstudio.ai, parcourir et charger des modèles en un clic, fenêtre de chat intégrée incluse',
          'Les deux utilisent llama.cpp et GGUF sous le capot, donc la vitesse de génération de tokens est presque identique pour le même modèle et la même quantification',
        ],
      },
      body1: {
        title: 'Où chaque outil excelle',
        content: [
          '<strong>Ollama excelle pour les développeurs : aucune surcharge GUI, intégration avec les applications Python et JavaScript via son API REST compatible OpenAI, et fonctionne sans interface sur des serveurs Linux.</strong> LM Studio excelle pour les débutants : son magasin de modèles intégré permet de télécharger et d\'exécuter un modèle en moins de trois minutes sans toucher à un terminal.',
          'Les deux outils utilisent llama.cpp sous le capot, donc le modèle lui-même s\'exécute de manière identique. Le choix est une question de flux de travail : ligne de commande vs interface visuelle. Le tableau ci-dessous associe cinq dimensions pratiques à l\'outil qui gère chacune le mieux.',
        ],
        columns: ['Fonctionnalité', 'Ollama', 'LM Studio'],
        rows: [
          { 'Fonctionnalité': 'Méthode d\'installation', 'Ollama': 'CLI (`brew install ollama`)', 'LM Studio': 'Installateur graphique' },
          { 'Fonctionnalité': 'Interface de chat', 'Ollama': 'Aucune (API uniquement)', 'LM Studio': 'Intégrée' },
          { 'Fonctionnalité': 'Serveur API', 'Ollama': 'REST, port 11434', 'LM Studio': 'REST, port 1234' },
          { 'Fonctionnalité': 'Gestion des modèles', 'Ollama': '`ollama pull <model>`', 'LM Studio': 'Parcourir + clic' },
          { 'Fonctionnalité': 'Idéal pour', 'Ollama': 'Développeurs + serveurs', 'LM Studio': 'Débutants + utilisation chat' },
        ],
      },
      body2: {
        title: 'Quand utiliser les deux',
        content: [
          'Vous pouvez exécuter Ollama et LM Studio simultanément. Utilisez LM Studio pour parcourir et tester de nouveaux modèles, puis passez à Ollama une fois que vous savez quel modèle vous souhaitez intégrer dans une application Python ou JavaScript.',
          'Ollama utilise par défaut le port 11434, LM Studio utilise par défaut le port 1234 — ils n\'entrent pas en conflit par défaut. Si vous avez personnalisé l\'un ou l\'autre port, définissez la variable d\'environnement OLLAMA_HOST ou modifiez le port serveur de LM Studio dans les Paramètres.',
          'Pour le guide complet couvrant l\'installation, la sélection de modèles et l\'optimisation des performances, consultez la <a href="/fr/local-llms/ollama-vs-lm-studio" class="text-primary hover:underline">comparaison approfondie Ollama vs LM Studio</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Ollama vs LM Studio',
        faqs: [
          {
            q: 'Ollama et LM Studio peuvent-ils fonctionner en même temps ?',
            a: 'Oui. Ollama utilise par défaut le port 11434, LM Studio utilise par défaut le port 1234, donc ils n\'entrent pas en conflit par défaut. Vous n\'avez besoin de changer un port que si vous en avez personnalisé un.',
          },
          {
            q: 'Lequel est plus rapide — Ollama ou LM Studio ?',
            a: 'Les performances sont presque identiques car les deux utilisent llama.cpp sous le capot pour exécuter des modèles GGUF. La différence de vitesse de génération de tokens entre les deux est inférieure à 5 % pour le même modèle et le même niveau de quantification.',
          },
          {
            q: 'LM Studio dispose-t-il d\'une interface en ligne de commande ?',
            a: 'LM Studio ne dispose pas de CLI pour exécuter des modèles. C\'est une application de bureau uniquement. Si vous avez besoin d\'un accès CLI ou souhaitez intégrer l\'inférence de modèle dans des scripts, utilisez Ollama à la place.',
          },
          {
            q: 'Puis-je utiliser Ollama sans aucune interface graphique ?',
            a: 'Oui. Ollama est conçu pour une utilisation sans interface et serveur. Il fonctionne comme un service systemd sous Linux, n\'a aucune dépendance GUI et peut être associé à une interface de chat dans le navigateur si nécessaire. Voir <a href="/fr/prompt-bites/jan-vs-lm-studio" class="text-primary hover:underline">Jan vs LM Studio</a> pour une comparaison des options d\'interface graphique de bureau.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    title: 'Ollama vs LM Studio：どちらを選ぶべきですか？',
    seoTitle: 'Ollama vs LM Studio？ | Prompt Bites | PromptQuorum',
    metaDescription: 'ターミナルを使用してAPIで開発するならOllamaを選んでください。GUIを好む場合はLM Studioを使用してください。両方とも無料でローカルでモデルを実行します。PromptQuorumによる簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'Ollama vs LM Studio：どちらを選ぶべきですか？',
        answer: 'ターミナルを使用してAPIで開発する場合はOllamaを選んでください。GUIを好み、モデルとチャットしたいだけならLM Studioを使用してください。両方とも無料でモデルをローカルで実行します。',
        bullets: [
          'Ollama：CLIファースト、OpenAI互換API、デベロッパーツール',
          'LM Studio：デスクトップGUI、ドラッグ＆ドロップでモデル追加、初心者向け',
          '両方ともMac、Windows、Linuxで動作',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'OllamaはCLIバックグラウンドサービスとしてポート11434で動作します — `ollama serve`で起動、`ollama pull`でモデルを取得、curlまたはOpenAI互換クライアントでクエリ',
          'LM StudioはデスクトップGUIアプリです — lmstudio.aiからダウンロード、クリックでモデルを参照・読み込み、内蔵チャットウィンドウ付き',
          '両方ともllama.cppとGGUFを使用しているため、同じモデルと量子化では、トークン生成速度はほぼ同一です',
        ],
      },
      body1: {
        title: '各ツールが優れている点',
        content: [
          '<strong>Ollamaはデベロッパーに優れています：GUIのオーバーヘッドがなく、OpenAI互換のREST APIでPythonおよびJavaScriptアプリと統合でき、Linuxサーバーでヘッドレス動作します。</strong> LM Studioは初心者に優れています：内蔵モデルストアにより、ターミナルを触らずに3分以内でモデルのダウンロードと実行が可能です。',
          '両方のツールはllama.cppを使用しているため、モデル自体は同一に動作します。選択はワークフローの問題です：コマンドラインか視覚的インターフェースか。以下の表は、5つの実践的な次元をそれぞれをより得意とするツールに対応させています。',
        ],
        columns: ['機能', 'Ollama', 'LM Studio'],
        rows: [
          { '機能': 'インストール方法', 'Ollama': 'CLI (`brew install ollama`)', 'LM Studio': 'GUIインストーラー' },
          { '機能': 'チャットインターフェース', 'Ollama': 'なし（APIのみ）', 'LM Studio': '内蔵' },
          { '機能': 'APIサーバー', 'Ollama': 'REST, port 11434', 'LM Studio': 'REST, port 1234' },
          { '機能': 'モデル管理', 'Ollama': '`ollama pull <model>`', 'LM Studio': '参照＋クリック' },
          { '機能': '最適用途', 'Ollama': 'デベロッパー＋サーバー', 'LM Studio': '初心者＋チャット利用' },
        ],
      },
      body2: {
        title: '両方を使う場合',
        content: [
          'OllamaとLM Studioは同時に実行できます。LM Studioで新しいモデルを参照・テストし、PythonまたはJavaScriptアプリに組み込みたいモデルが決まったらOllamaに切り替えてください。',
          'Ollamaはデフォルトでポート11434、LM Studioはデフォルトでポート1234を使用します — デフォルトでは衝突しません。どちらかのポートをカスタマイズした場合は、OLLAMA_HOST環境変数を設定するか、LM StudioのサーバーポートをSettingsで変更してください。',
          'インストール、モデル選択、パフォーマンス調整を網羅した完全なガイドは、<a href="/ja/local-llms/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio 詳細比較</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Ollama vs LM Studioに関するよくある質問',
        faqs: [
          {
            q: 'OllamaとLM Studioは同時に動作できますか？',
            a: 'はい。Ollamaはデフォルトでポート11434、LM Studioはデフォルトでポート1234を使用するため、デフォルトでは衝突しません。どちらかをカスタマイズした場合にのみポートを変更する必要があります。',
          },
          {
            q: 'どちらが速いですか — OllamaとLM Studio？',
            a: '両方ともGGUFモデルの実行にllama.cppを使用しているため、パフォーマンスはほぼ同一です。同じモデルと量子化レベルでのトークン生成速度の差は5%未満です。',
          },
          {
            q: 'LM Studioにはコマンドラインインターフェースがありますか？',
            a: 'LM Studioにはモデルを実行するCLIがありません。デスクトップ専用のアプリケーションです。CLIアクセスが必要な場合やモデル推論をスクリプトに組み込みたい場合は、代わりにOllamaを使用してください。',
          },
          {
            q: 'OllamaはGUIなしで完全に使用できますか？',
            a: 'はい。Ollamaはヘッドレスおよびサーバー使用向けに設計されています。LinuxでsystemdサービスとしてGUI依存なしで動作し、必要に応じてブラウザーベースのチャットUIと組み合わせることができます。デスクトップGUIオプションの比較については<a href="/ja/prompt-bites/jan-vs-lm-studio" class="text-primary hover:underline">Jan vs LM Studio</a>をご覧ください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    title: 'Ollama vs LM Studio：应该选哪个？',
    seoTitle: 'Ollama vs LM Studio？| Prompt Bites | PromptQuorum',
    metaDescription: '如果使用终端并通过 API 开发，选 Ollama。如果想要图形界面，使用 LM Studio。两者均免费且在本地运行模型。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: 'Ollama vs LM Studio：应该选哪个？',
        answer: '如果您使用终端并通过 API 开发，选 Ollama。如果您更喜欢图形界面，只想与模型聊天，使用 LM Studio。两者均免费且在本地运行模型。',
        bullets: [
          'Ollama：CLI 优先，OpenAI 兼容 API，开发者工具',
          'LM Studio：桌面图形界面，拖放模型，适合初学者',
          '两者均支持 Mac、Windows 和 Linux',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama 作为 CLI 后台服务运行，监听端口 11434 — 用 `ollama serve` 启动，用 `ollama pull` 拉取模型，通过 curl 或任何 OpenAI 兼容客户端查询',
          'LM Studio 是一款桌面图形界面应用 — 从 lmstudio.ai 下载，点击即可浏览和加载模型，内置聊天窗口',
          '两者均在底层使用 llama.cpp 和 GGUF，因此对于相同的模型和量化级别，token 生成速度几乎相同',
        ],
      },
      body1: {
        title: '各工具的优势所在',
        content: [
          '<strong>Ollama 在开发者场景中胜出：无 GUI 开销，通过 OpenAI 兼容的 REST API 与 Python 和 JavaScript 应用集成，并可在 Linux 服务器上无头运行。</strong> LM Studio 在初学者场景中胜出：内置模型商店让您无需接触终端，即可在三分钟内下载并运行模型。',
          '两款工具底层均使用 llama.cpp，因此模型本身的运行方式完全相同。选择取决于工作流：命令行还是可视化界面。下表将五个实际维度分别映射到更擅长处理各项的工具。',
        ],
        columns: ['功能', 'Ollama', 'LM Studio'],
        rows: [
          { '功能': '安装方式', 'Ollama': 'CLI (`brew install ollama`)', 'LM Studio': '图形界面安装程序' },
          { '功能': '聊天界面', 'Ollama': '无（仅 API）', 'LM Studio': '内置' },
          { '功能': 'API 服务器', 'Ollama': 'REST, port 11434', 'LM Studio': 'REST, port 1234' },
          { '功能': '模型管理', 'Ollama': '`ollama pull <model>`', 'LM Studio': '浏览 + 点击' },
          { '功能': '最适合', 'Ollama': '开发者 + 服务器', 'LM Studio': '初学者 + 聊天使用' },
        ],
      },
      body2: {
        title: '何时同时使用两者',
        content: [
          '您可以同时运行 Ollama 和 LM Studio。使用 LM Studio 浏览和测试新模型，确定要集成到 Python 或 JavaScript 应用中的模型后，再切换到 Ollama。',
          'Ollama 默认使用端口 11434，LM Studio 默认使用端口 1234 — 默认情况下不会冲突。如果您自定义了任一端口，请设置 OLLAMA_HOST 环境变量或在 LM Studio 的设置中更改服务器端口。',
          '有关安装、模型选择和性能调优的完整指南，请参阅 <a href="/zh/local-llms/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio 深度对比</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 Ollama vs LM Studio 的快速解答',
        faqs: [
          {
            q: 'Ollama 和 LM Studio 可以同时运行吗？',
            a: '可以。Ollama 默认使用端口 11434，LM Studio 默认使用端口 1234，因此默认情况下不会冲突。只有在您自定义了其中某个端口时，才需要更改端口。',
          },
          {
            q: '哪个更快——Ollama 还是 LM Studio？',
            a: '性能几乎相同，因为两者都使用 llama.cpp 在底层运行 GGUF 模型。对于相同的模型和量化级别，两者之间的 token 生成速度差异不超过 5%。',
          },
          {
            q: 'LM Studio 有命令行界面吗？',
            a: 'LM Studio 没有用于运行模型的 CLI。它是仅限桌面的应用程序。如果需要 CLI 访问或想将模型推理集成到脚本中，请改用 Ollama。',
          },
          {
            q: '我可以完全不用图形界面使用 Ollama 吗？',
            a: '可以。Ollama 专为无头和服务器使用而设计。它在 Linux 上作为 systemd 服务运行，没有 GUI 依赖，如有需要可与基于浏览器的聊天 UI 配合使用。有关桌面图形界面选项的比较，请参阅 <a href="/zh/prompt-bites/jan-vs-lm-studio" class="text-primary hover:underline">Jan vs LM Studio</a>。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    title: 'Ollama vs LM Studio: ¿Cuál deberías elegir?',
    seoTitle: 'Ollama vs LM Studio | Prompt Bites | PromptQuorum',
    metaDescription: 'Si usas terminal y desarrollas con APIs, elige Ollama. Si prefieres GUI y quieres chatear con modelos, usa LM Studio. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermedio',
    audience: 'Desarrolladores eligiendo entre Ollama y LM Studio',
    parentArticle: '/local-llms/ollama-vs-lm-studio',
    siblingBites: ['jan-vs-lm-studio', 'best-frontend-for-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Ollama vs LM Studio: cuál deberías elegir?',
        answer: 'Si usas terminal y desarrollas con APIs, elige Ollama. Si prefieres una GUI y solo quieres chatear con modelos, usa LM Studio. Ambos son gratuitos y ejecutan modelos localmente.',
        bullets: [
          'Ollama: CLI-first, API compatible con OpenAI, herramienta para desarrolladores',
          'LM Studio: GUI de escritorio, modelos de arrastrar y soltar, amigable para principiantes',
          'Ambos funcionan en Mac, Windows y Linux',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama se ejecuta como servicio de fondo CLI en el puerto 11434 — inicia con `ollama serve`, descarga modelos con `ollama pull`, consulta con curl o cualquier cliente compatible con OpenAI',
          'LM Studio es una aplicación GUI de escritorio — descarga desde lmstudio.ai, explora y carga modelos con un clic, ventana de chat integrada incluida',
          'Ambos usan llama.cpp y GGUF bajo el capó, por lo que la velocidad de generación de tokens es casi idéntica para el mismo modelo y cuantización',
        ],
      },
      body1: {
        title: 'Dónde destaca cada herramienta',
        content: [
          '<strong>Ollama destaca para desarrolladores: sin sobrecarga de GUI, se integra con aplicaciones Python y JavaScript a través de su API REST compatible con OpenAI, y se ejecuta sin interfaz en servidores Linux.</strong> LM Studio destaca para principiantes: su tienda integrada de modelos te permite descargar y ejecutar un modelo en menos de tres minutos sin tocar la terminal.',
          'Ambas herramientas usan llama.cpp bajo el capó, por lo que el modelo en sí se ejecuta de forma idéntica. La elección es cuestión de flujo de trabajo: línea de comandos vs interfaz visual. La siguiente tabla asigna cinco dimensiones prácticas a la herramienta que maneja cada una mejor.',
        ],
        columns: ['Característica', 'Ollama', 'LM Studio'],
        rows: [
          { 'Característica': 'Método de instalación', 'Ollama': 'CLI (`brew install ollama`)', 'LM Studio': 'Instalador GUI' },
          { 'Característica': 'Interfaz de chat', 'Ollama': 'Ninguna (solo API)', 'LM Studio': 'Integrada' },
          { 'Característica': 'Servidor API', 'Ollama': 'REST, puerto 11434', 'LM Studio': 'REST, puerto 1234' },
          { 'Característica': 'Gestión de modelos', 'Ollama': '`ollama pull <model>`', 'LM Studio': 'Explorar + clic' },
          { 'Característica': 'Mejor para', 'Ollama': 'Desarrolladores + servidores', 'LM Studio': 'Principiantes + uso de chat' },
        ],
      },
      body2: {
        title: 'Cuándo usar ambos',
        content: [
          'Puedes ejecutar Ollama y LM Studio simultáneamente. Usa LM Studio para explorar y probar nuevos modelos, luego cambia a Ollama una vez que sepas qué modelo quieres integrar en una aplicación Python o JavaScript.',
          'Ollama utiliza por defecto el puerto 11434, LM Studio utiliza por defecto el puerto 1234 — no entran en conflicto por defecto. Si has personalizado alguno de los puertos, establece la variable de entorno OLLAMA_HOST o cambia el puerto del servidor de LM Studio en Configuración.',
          'Para la guía completa que cubre instalación, selección de modelos y ajuste del rendimiento, consulta la <a href="/es/local-llms/ollama-vs-lm-studio" class="text-primary hover:underline">comparación en profundidad de Ollama vs LM Studio</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre Ollama vs LM Studio',
        faqs: [
          {
            q: '¿Pueden ejecutarse Ollama y LM Studio al mismo tiempo?',
            a: 'Sí. Ollama utiliza por defecto el puerto 11434, LM Studio utiliza por defecto el puerto 1234, por lo que no entran en conflicto por defecto. Solo necesitas cambiar un puerto si has personalizado uno de ellos.',
          },
          {
            q: '¿Cuál es más rápido — Ollama o LM Studio?',
            a: 'El rendimiento es casi idéntico porque ambos usan llama.cpp bajo el capó para ejecutar modelos GGUF. La diferencia en la velocidad de generación de tokens entre los dos es inferior al 5% para el mismo modelo y nivel de cuantización.',
          },
          {
            q: '¿Tiene LM Studio una interfaz de línea de comandos?',
            a: 'LM Studio no tiene una CLI para ejecutar modelos. Es una aplicación solo de escritorio. Si necesitas acceso CLI o quieres integrar la inferencia de modelos en scripts, usa Ollama en su lugar.',
          },
          {
            q: '¿Puedo usar Ollama completamente sin GUI?',
            a: 'Sí. Ollama está diseñado para uso sin interfaz y en servidores. Se ejecuta como servicio systemd en Linux, no tiene dependencias de GUI, y puede combinarse con una interfaz de chat basada en navegador si es necesario. Consulta <a href="/es/prompt-bites/jan-vs-lm-studio" class="text-primary hover:underline">Jan vs LM Studio</a> para una comparación de opciones de GUI de escritorio.',
          },
        ],
      },
    },
  },
}
