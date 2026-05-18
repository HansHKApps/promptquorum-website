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
          'Ollama runs as a background service; start it with `ollama serve`, pull models with `ollama pull`, and query it via `curl localhost:11434`',
          'LM Studio is a desktop GUI — download at lmstudio.ai, no terminal required, models load by clicking a button',
          'Both expose an OpenAI-compatible local REST API, so Python and JavaScript apps can switch between them with one line change',
          'Ollama is the better fit for developers building apps; LM Studio is the better fit for non-technical users who want to chat with models',
        ],
      },
      body1: {
        title: 'Ollama Is a Developer Tool; LM Studio Is a Desktop App',
        content: [
          '<strong>Ollama is a CLI tool that runs as a background service and exposes an OpenAI-compatible REST API on localhost:11434 — it has no graphical interface.</strong> LM Studio is a polished desktop application with a built-in chat interface, model browser, and one-click model downloads.',
          'Ollama requires three terminal commands to get started: `ollama serve` to start the service, `ollama pull modelname` to download a model, and then a `curl` or Python/JavaScript call to query it. LM Studio requires only downloading the installer from lmstudio.ai and clicking through a GUI.',
          'The table below compares the four most important dimensions for developers deciding between them.',
        ],
        columns: ['Dimension', 'Ollama', 'LM Studio'],
        rows: [
          { 'Dimension': 'Interface', 'Ollama': 'CLI only', 'LM Studio': 'Desktop GUI' },
          { 'Dimension': 'API', 'Ollama': 'OpenAI-compatible REST', 'LM Studio': 'Local REST' },
          { 'Dimension': 'Setup', 'Ollama': '3 CLI commands', 'LM Studio': 'Download + click' },
          { 'Dimension': 'Best for', 'Ollama': 'Developers', 'LM Studio': 'Non-technical users' },
        ],
      },
      body2: {
        title: 'Both Expose an OpenAI-Compatible API — Apps Can Use Either',
        content: [
          'Both Ollama and LM Studio expose a local REST API that is compatible with the OpenAI client SDK. Any Python or JavaScript app built against the OpenAI API can point to either tool by changing the base URL — no other code changes are required.',
          'Ollama has a larger ecosystem of third-party frontends including Open WebUI, which adds a ChatGPT-style interface on top of Ollama. LM Studio is self-contained with a built-in chat UI that covers most use cases without additional software.',
          'For a guide to adding a graphical chat interface to Ollama without installing LM Studio, see the <a href="/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">best Ollama frontend comparison</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Ollama vs LM Studio',
        faqs: [
          {
            q: 'Can Ollama and LM Studio run at the same time?',
            a: 'Yes, but both default to port 11434 for their local API. If you run both simultaneously, change one of the port numbers to avoid conflicts. Ollama\'s port is set via the OLLAMA_HOST environment variable.',
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
            a: 'Yes. Ollama is designed for headless and server use. It runs as a systemd service on Linux, has no GUI dependencies, and integrates natively with tools like <a href="/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">Open WebUI for a browser-based chat interface</a>.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    title: 'Ollama vs LM Studio: Welches sollten Sie wählen?',
    seoTitle: 'Ollama vs LM Studio? | Prompt Bites | PromptQuorum',
    metaDescription: 'Nutzen Sie Ollama, wenn Sie mit dem Terminal arbeiten und APIs entwickeln. Nehmen Sie LM Studio für eine grafische Oberfläche. Beide sind kostenlos und laufen lokal. Schnelle Antwort von PromptQuorum.',
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
          'Ollama läuft als Hintergrunddienst; starten mit `ollama serve`, Modelle laden mit `ollama pull`, abfragen über `curl localhost:11434`',
          'LM Studio ist eine Desktop-GUI — herunterladen unter lmstudio.ai, kein Terminal erforderlich, Modelle per Klick laden',
          'Beide bieten eine OpenAI-kompatible lokale REST-API, sodass Python- und JavaScript-Apps mit einer Zeilenänderung zwischen ihnen wechseln können',
          'Ollama eignet sich besser für Entwickler, die Apps erstellen; LM Studio besser für nicht-technische Nutzer, die mit Modellen chatten möchten',
        ],
      },
      body1: {
        title: 'Ollama ist ein Entwicklertool; LM Studio ist eine Desktop-App',
        content: [
          '<strong>Ollama ist ein CLI-Tool, das als Hintergrunddienst läuft und eine OpenAI-kompatible REST-API auf localhost:11434 bereitstellt — es hat keine grafische Oberfläche.</strong> LM Studio ist eine ausgereifte Desktop-Anwendung mit integriertem Chat-Interface, Modell-Browser und Ein-Klick-Modell-Downloads.',
          'Ollama erfordert drei Terminal-Befehle zum Einstieg: `ollama serve` zum Starten des Dienstes, `ollama pull modellname` zum Herunterladen eines Modells, und dann einen `curl`- oder Python/JavaScript-Aufruf zur Abfrage. LM Studio erfordert nur das Herunterladen des Installers von lmstudio.ai und das Durchklicken einer GUI.',
          'Die folgende Tabelle vergleicht die vier wichtigsten Dimensionen für Entwickler, die zwischen beiden wählen.',
        ],
        columns: ['Dimension', 'Ollama', 'LM Studio'],
        rows: [
          { 'Dimension': 'Oberfläche', 'Ollama': 'Nur CLI', 'LM Studio': 'Desktop-GUI' },
          { 'Dimension': 'API', 'Ollama': 'OpenAI-kompatibles REST', 'LM Studio': 'Lokales REST' },
          { 'Dimension': 'Einrichtung', 'Ollama': '3 CLI-Befehle', 'LM Studio': 'Download + Klick' },
          { 'Dimension': 'Geeignet für', 'Ollama': 'Entwickler', 'LM Studio': 'Nicht-technische Nutzer' },
        ],
      },
      body2: {
        title: 'Beide bieten eine OpenAI-kompatible API — Apps können beides nutzen',
        content: [
          'Sowohl Ollama als auch LM Studio stellen eine lokale REST-API bereit, die mit dem OpenAI-Client-SDK kompatibel ist. Jede Python- oder JavaScript-App, die gegen die OpenAI-API erstellt wurde, kann auf beide Tools verweisen, indem nur die Basis-URL geändert wird — keine weiteren Code-Änderungen sind erforderlich.',
          'Ollama hat ein größeres Ökosystem an Drittanbieter-Frontends einschließlich Open WebUI, das ein ChatGPT-ähnliches Interface auf Ollama aufsetzt. LM Studio ist in sich geschlossen mit einer integrierten Chat-UI, die die meisten Anwendungsfälle ohne zusätzliche Software abdeckt.',
          'Einen Leitfaden zum Hinzufügen einer grafischen Chat-Oberfläche zu Ollama ohne Installation von LM Studio finden Sie im <a href="/de/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">besten Ollama-Frontend-Vergleich</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Ollama vs LM Studio',
        faqs: [
          {
            q: 'Können Ollama und LM Studio gleichzeitig laufen?',
            a: 'Ja, aber beide verwenden standardmäßig Port 11434 für ihre lokale API. Wenn Sie beide gleichzeitig ausführen, ändern Sie eine der Portnummern, um Konflikte zu vermeiden. Der Port von Ollama wird über die Umgebungsvariable OLLAMA_HOST festgelegt.',
          },
          {
            q: 'Was ist schneller — Ollama oder LM Studio?',
            a: 'Die Leistung ist nahezu identisch, da beide llama.cpp unter der Haube verwenden, um GGUF-Modelle auszuführen. Der Unterschied in der Token-Generierungsgeschwindigkeit beträgt weniger als 5 % für dasselbe Modell und dieselbe Quantisierungsstufe.',
          },
          {
            q: 'Hat LM Studio eine Befehlszeilenschnittstelle?',
            a: 'LM Studio hat keine CLI zum Ausführen von Modellen. Es ist eine reine Desktop-Anwendung. Wenn Sie CLI-Zugriff benötigen oder Modell-Inferenz in Skripte integrieren möchten, verwenden Sie stattdessen Ollama.',
          },
          {
            q: 'Kann ich Ollama vollständig ohne GUI verwenden?',
            a: 'Ja. Ollama ist für den headless- und Server-Einsatz konzipiert. Es läuft als systemd-Dienst unter Linux, hat keine GUI-Abhängigkeiten und integriert sich nativ in Tools wie <a href="/de/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">Open WebUI für ein browserbasiertes Chat-Interface</a>.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    title: 'Ollama vs LM Studio : lequel choisir ?',
    seoTitle: 'Ollama vs LM Studio ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Utilisez Ollama si vous travaillez en terminal et développez avec des API. Utilisez LM Studio pour une interface graphique. Les deux sont gratuits et fonctionnent localement. Réponse rapide par PromptQuorum.',
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
          'Ollama fonctionne comme un service en arrière-plan ; démarrer avec `ollama serve`, télécharger avec `ollama pull`, interroger via `curl localhost:11434`',
          'LM Studio est une interface graphique de bureau — téléchargeable sur lmstudio.ai, aucun terminal requis, modèles chargés en un clic',
          'Les deux exposent une API REST locale compatible OpenAI, permettant aux apps Python et JavaScript de basculer entre eux avec une seule modification',
          'Ollama convient mieux aux développeurs créant des applications ; LM Studio convient mieux aux utilisateurs non techniques souhaitant discuter avec des modèles',
        ],
      },
      body1: {
        title: 'Ollama est un outil développeur ; LM Studio est une application de bureau',
        content: [
          '<strong>Ollama est un outil CLI qui fonctionne comme un service en arrière-plan et expose une API REST compatible OpenAI sur localhost:11434 — il n\'a pas d\'interface graphique.</strong> LM Studio est une application de bureau soignée avec une interface de chat intégrée, un navigateur de modèles et des téléchargements en un clic.',
          'Ollama nécessite trois commandes en terminal pour démarrer : `ollama serve` pour lancer le service, `ollama pull nomdumodele` pour télécharger un modèle, puis un appel `curl` ou Python/JavaScript pour l\'interroger. LM Studio nécessite uniquement de télécharger l\'installateur depuis lmstudio.ai et de suivre une interface graphique.',
          'Le tableau ci-dessous compare les quatre dimensions les plus importantes pour les développeurs choisissant entre les deux.',
        ],
        columns: ['Dimension', 'Ollama', 'LM Studio'],
        rows: [
          { 'Dimension': 'Interface', 'Ollama': 'CLI uniquement', 'LM Studio': 'Interface graphique' },
          { 'Dimension': 'API', 'Ollama': 'REST compatible OpenAI', 'LM Studio': 'REST local' },
          { 'Dimension': 'Configuration', 'Ollama': '3 commandes CLI', 'LM Studio': 'Téléchargement + clic' },
          { 'Dimension': 'Idéal pour', 'Ollama': 'Développeurs', 'LM Studio': 'Utilisateurs non techniques' },
        ],
      },
      body2: {
        title: 'Les deux exposent une API compatible OpenAI — les apps peuvent utiliser l\'un ou l\'autre',
        content: [
          'Ollama et LM Studio exposent tous deux une API REST locale compatible avec le SDK client OpenAI. Toute application Python ou JavaScript développée contre l\'API OpenAI peut pointer vers l\'un ou l\'autre en changeant uniquement l\'URL de base — aucune autre modification de code n\'est requise.',
          'Ollama dispose d\'un écosystème plus large de frontends tiers incluant Open WebUI, qui ajoute une interface style ChatGPT au-dessus d\'Ollama. LM Studio est autonome avec une interface de chat intégrée couvrant la plupart des cas d\'usage sans logiciel supplémentaire.',
          'Pour un guide permettant d\'ajouter une interface de chat graphique à Ollama sans installer LM Studio, consultez la <a href="/fr/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">comparaison des meilleurs frontends Ollama</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Ollama vs LM Studio',
        faqs: [
          {
            q: 'Ollama et LM Studio peuvent-ils fonctionner simultanément ?',
            a: 'Oui, mais les deux utilisent par défaut le port 11434 pour leur API locale. Si vous les exécutez simultanément, modifiez l\'un des numéros de port pour éviter les conflits. Le port d\'Ollama se configure via la variable d\'environnement OLLAMA_HOST.',
          },
          {
            q: 'Lequel est plus rapide — Ollama ou LM Studio ?',
            a: 'Les performances sont quasi identiques car les deux utilisent llama.cpp sous le capot pour exécuter des modèles GGUF. La différence de vitesse de génération de tokens est inférieure à 5 % pour le même modèle et le même niveau de quantification.',
          },
          {
            q: 'LM Studio dispose-t-il d\'une interface en ligne de commande ?',
            a: 'LM Studio ne dispose pas de CLI pour exécuter des modèles. C\'est une application de bureau uniquement. Si vous avez besoin d\'un accès CLI ou souhaitez intégrer l\'inférence de modèle dans des scripts, utilisez Ollama à la place.',
          },
          {
            q: 'Puis-je utiliser Ollama sans aucune interface graphique ?',
            a: 'Oui. Ollama est conçu pour une utilisation headless et serveur. Il fonctionne comme un service systemd sous Linux, n\'a pas de dépendances GUI et s\'intègre nativement avec des outils comme <a href="/fr/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">Open WebUI pour une interface de chat dans le navigateur</a>.',
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
          'Ollamaはバックグラウンドサービスとして動作；`ollama serve`で起動、`ollama pull`でモデル取得、`curl localhost:11434`でクエリ',
          'LM StudioはデスクトップGUI — lmstudio.aiでダウンロード、ターミナル不要、ボタンクリックでモデル読み込み',
          '両方ともOpenAI互換のローカルRESTを公開するため、PythonとJavaScriptアプリはURLを1行変えるだけで切り替え可能',
          'Ollamaはアプリを構築するデベロッパーに最適；LM Studioはモデルとチャットしたい非技術者に最適',
        ],
      },
      body1: {
        title: 'Ollamaはデベロッパーツール；LM Studioはデスクトップアプリ',
        content: [
          '<strong>Ollamaはバックグラウンドサービスとしてlocalhost:11434でOpenAI互換のREST APIを公開するCLIツールです — グラフィカルインターフェースはありません。</strong> LM Studioは組み込みのチャットインターフェース、モデルブラウザー、ワンクリックモデルダウンロードを備えた洗練されたデスクトップアプリです。',
          'Ollamaの開始には3つのターミナルコマンドが必要です：サービスを起動する`ollama serve`、モデルをダウンロードする`ollama pull モデル名`、そしてクエリするための`curl`またはPython/JavaScript呼び出し。LM Studioはlmstudio.aiからインストーラーをダウンロードしてGUIをクリックするだけです。',
          '以下の表は、両者を選択する際の最も重要な4つの次元を比較しています。',
        ],
        columns: ['次元', 'Ollama', 'LM Studio'],
        rows: [
          { '次元': 'インターフェース', 'Ollama': 'CLIのみ', 'LM Studio': 'デスクトップGUI' },
          { '次元': 'API', 'Ollama': 'OpenAI互換REST', 'LM Studio': 'ローカルREST' },
          { '次元': 'セットアップ', 'Ollama': '3つのCLIコマンド', 'LM Studio': 'ダウンロード＋クリック' },
          { '次元': '最適用途', 'Ollama': 'デベロッパー', 'LM Studio': '非技術者' },
        ],
      },
      body2: {
        title: '両方ともOpenAI互換APIを公開 — アプリはどちらでも使用可能',
        content: [
          'OllamaとLM Studioはどちらも、OpenAIクライアントSDKと互換性のあるローカルREST APIを公開しています。OpenAI APIに対して構築されたPythonまたはJavaScriptアプリは、ベースURLを変更するだけでどちらのツールにも向けることができます — 他のコード変更は不要です。',
          'OllamaにはOpen WebUIを含む豊富なサードパーティフロントエンドのエコシステムがあり、Ollama上にChatGPT風のインターフェースを追加します。LM Studioは組み込みのチャットUIを持つ自己完結型で、追加ソフトウェアなしにほとんどのユースケースをカバーします。',
          'LM StudioをインストールせずにOllamaにグラフィカルチャットインターフェースを追加するガイドについては、<a href="/ja/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">最適なOllamaフロントエンド比較</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Ollama vs LM Studioに関するよくある質問',
        faqs: [
          {
            q: 'OllamaとLM Studioは同時に動作できますか？',
            a: 'はい、ただし両方ともデフォルトでローカルAPIにポート11434を使用します。同時に実行する場合は、競合を避けるためにどちらかのポート番号を変更してください。OllamaのポートはOLLAMA_HOST環境変数で設定します。',
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
            a: 'はい。Ollamaはヘッドレスおよびサーバー使用向けに設計されています。LinuxでsystemdサービスとしてGUI依存なしで動作し、<a href="/ja/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">Open WebUIなどのブラウザーベースのチャットインターフェース</a>とネイティブに統合されます。',
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
          'Ollama 作为后台服务运行；用 `ollama serve` 启动，`ollama pull` 下载模型，通过 `curl localhost:11434` 查询',
          'LM Studio 是桌面图形界面——在 lmstudio.ai 下载，无需终端，点击按钮加载模型',
          '两者均提供 OpenAI 兼容的本地 REST API，Python 和 JavaScript 应用只需改一行代码即可切换',
          'Ollama 更适合构建应用的开发者；LM Studio 更适合想与模型聊天的非技术用户',
        ],
      },
      body1: {
        title: 'Ollama 是开发者工具；LM Studio 是桌面应用',
        content: [
          '<strong>Ollama 是一个 CLI 工具，作为后台服务运行，在 localhost:11434 上公开 OpenAI 兼容的 REST API——它没有图形界面。</strong> LM Studio 是一款精致的桌面应用，内置聊天界面、模型浏览器和一键模型下载功能。',
          'Ollama 需要三条终端命令入门：`ollama serve` 启动服务，`ollama pull 模型名` 下载模型，然后通过 `curl` 或 Python/JavaScript 调用查询。LM Studio 只需从 lmstudio.ai 下载安装程序并点击图形界面即可。',
          '下表比较了开发者在两者之间选择时最重要的四个维度。',
        ],
        columns: ['维度', 'Ollama', 'LM Studio'],
        rows: [
          { '维度': '界面', 'Ollama': '仅 CLI', 'LM Studio': '桌面图形界面' },
          { '维度': 'API', 'Ollama': 'OpenAI 兼容 REST', 'LM Studio': '本地 REST' },
          { '维度': '配置', 'Ollama': '3 条 CLI 命令', 'LM Studio': '下载 + 点击' },
          { '维度': '最适合', 'Ollama': '开发者', 'LM Studio': '非技术用户' },
        ],
      },
      body2: {
        title: '两者均提供 OpenAI 兼容 API——应用可使用任意一个',
        content: [
          'Ollama 和 LM Studio 都提供与 OpenAI 客户端 SDK 兼容的本地 REST API。任何基于 OpenAI API 构建的 Python 或 JavaScript 应用，只需更改基础 URL 即可指向任意一个工具——不需要其他代码修改。',
          'Ollama 有更大的第三方前端生态系统，包括 Open WebUI，它在 Ollama 之上添加了类似 ChatGPT 的界面。LM Studio 是自包含的，内置聊天界面，无需额外软件即可覆盖大多数使用场景。',
          '有关在不安装 LM Studio 的情况下为 Ollama 添加图形聊天界面的指南，请参阅 <a href="/zh/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">最佳 Ollama 前端比较</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 Ollama vs LM Studio 的快速解答',
        faqs: [
          {
            q: 'Ollama 和 LM Studio 可以同时运行吗？',
            a: '可以，但两者默认都使用端口 11434 作为本地 API 端口。如果同时运行，请更改其中一个端口号以避免冲突。Ollama 的端口通过 OLLAMA_HOST 环境变量设置。',
          },
          {
            q: '哪个更快——Ollama 还是 LM Studio？',
            a: '性能几乎相同，因为两者都使用 llama.cpp 来运行 GGUF 模型。对于相同的模型和量化级别，两者之间的 token 生成速度差异不超过 5%。',
          },
          {
            q: 'LM Studio 有命令行界面吗？',
            a: 'LM Studio 没有用于运行模型的 CLI。它是仅限桌面的应用程序。如果需要 CLI 访问或想将模型推理集成到脚本中，请改用 Ollama。',
          },
          {
            q: '我可以完全不用图形界面使用 Ollama 吗？',
            a: '可以。Ollama 专为无头和服务器使用而设计。它在 Linux 上作为 systemd 服务运行，没有 GUI 依赖，并与 <a href="/zh/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">Open WebUI 等基于浏览器的聊天界面</a>原生集成。',
          },
        ],
      },
    },
  },
}
