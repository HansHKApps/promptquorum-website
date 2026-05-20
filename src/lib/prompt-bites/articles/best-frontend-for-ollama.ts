import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    title: 'Best Frontend for Ollama?',
    seoTitle: 'Best Frontend for Ollama? | Prompt Bites | PromptQuorum',
    metaDescription: 'Open WebUI is the best Ollama frontend. SillyTavern for roleplay, Jan for model management. All three are free and open source. Updated May 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers adding a chat UI to their Ollama setup',
    parentArticle: '/local-llms/best-local-llm-frontends',
    siblingBites: ['ollama-vs-lm-studio', 'jan-vs-lm-studio'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'Best frontend for Ollama?',
        answer: 'Open WebUI is the best Ollama frontend for most users, offering free access to a feature-rich interface with Docker deployment and RAG support. It is free, feature-rich, and runs as a Docker container. SillyTavern is better for roleplay. Jan adds a local model manager.',
        bullets: [
          'Open WebUI: best overall, Docker-based, ChatGPT-like UI',
          'SillyTavern: best for creative writing and roleplay',
          'Jan: built-in model downloader and local API server',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes Frontend für Ollama?',
        answer: 'Open WebUI ist das beste Ollama-Frontend für die meisten Nutzer, mit kostenlosem Zugriff auf eine funktionsreiche Oberfläche, Docker-Unterstützung und RAG-Funktionen. Es ist kostenlos, funktionsreich und läuft als Docker-Container. SillyTavern eignet sich besser für Rollenspiele. Jan ergänzt einen lokalen Modell-Manager.',
        bullets: [
          'Open WebUI: insgesamt am besten, Docker-basiert, ChatGPT-ähnliche Oberfläche',
          'SillyTavern: am besten für kreatives Schreiben und Rollenspiele',
          'Jan: integrierter Modell-Downloader und lokaler API-Server',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur frontend pour Ollama ?',
        answer: 'Open WebUI est le meilleur frontend Ollama pour la plupart des utilisateurs, avec accès gratuit à une interface riche, déploiement Docker et support RAG intégré. Il est gratuit, riche en fonctionnalités et fonctionne comme un conteneur Docker. SillyTavern est préférable pour le jeu de rôle. Jan ajoute un gestionnaire de modèles local.',
        bullets: [
          'Open WebUI : meilleur en général, basé sur Docker, interface similaire à ChatGPT',
          'SillyTavern : meilleur pour l\'écriture créative et le jeu de rôle',
          'Jan : téléchargeur de modèles intégré et serveur API local',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Ollamaに最適なフロントエンドは？',
        answer: 'Open WebUIはほとんどのユーザーにとって最適なOllamaフロントエンドで、無料で機能豊富な Docker ベースのインターフェースと RAG サポートを提供します。無料で機能豊富でDockerコンテナとして動作します。SillyTavernはロールプレイに最適です。Janはローカルモデルマネージャーを追加します。',
        bullets: [
          'Open WebUI：総合的に最優秀、Docker ベース、ChatGPT 風 UI',
          'SillyTavern：クリエイティブライティングとロールプレイに最適',
          'Jan：組み込みモデルダウンローダーとローカルAPIサーバー',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'Ollama 最佳前端是什么？',
        answer: 'Open WebUI 是大多数用户的最佳 Ollama 前端，提供免费的功能丰富的界面，Docker 部署以及内置 RAG 支持。它免费、功能丰富，作为 Docker 容器运行。SillyTavern 更适合角色扮演。Jan 提供本地模型管理器。',
        bullets: [
          'Open WebUI：综合最佳，基于 Docker，类似 ChatGPT 的界面',
          'SillyTavern：最适合创意写作和角色扮演',
          'Jan：内置模型下载器和本地 API 服务器',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Open WebUI is the best general-purpose Ollama frontend — it supports RAG, user management, and multiple Ollama instances out of the box',
          'SillyTavern is purpose-built for roleplay and creative fiction; it supports character cards and story branching that Open WebUI does not',
          'Jan runs without Docker and adds model download management alongside the chat interface, making it useful for model-switching workflows',
          'All three frontends connect to Ollama via the local REST API and are free to use',
        ],
      },
      body1: {
        title: 'Open WebUI Is the Default Pick',
        content: [
          '<strong>As of May 2026, Open WebUI is the recommended Ollama frontend for general use. This page is updated monthly — last verified May 2026.</strong> Open WebUI provides a ChatGPT-like chat interface, RAG document upload, user management, and support for connecting to multiple Ollama instances — all free and self-hosted as a Docker container accessible at localhost:3000.',
          'SillyTavern is the right choice when the primary use case is roleplay or collaborative fiction. It supports character cards (PNG files with embedded persona definitions), story branching, and lorebook context injection — features that Open WebUI and Jan do not have.',
          'The table below compares setup method and best use case for the three most popular Ollama frontends.',
        ],
        columns: ['Frontend', 'Setup', 'Best for'],
        rows: [
          { 'Frontend': 'Open WebUI', 'Setup': 'Docker', 'Best for': 'General chat + dev' },
          { 'Frontend': 'SillyTavern', 'Setup': 'npm install', 'Best for': 'Roleplay + fiction' },
          { 'Frontend': 'Jan', 'Setup': 'Desktop app', 'Best for': 'Model management + chat' },
        ],
      },
      body2: {
        title: 'Jan Adds Model Management Without Docker',
        content: [
          'Jan is the only frontend in this comparison that does not require Docker or a package manager to install. It is a native desktop application for Mac, Windows, and Linux that combines model download management with a chat interface.',
          'Open WebUI requires Docker and an already-running Ollama instance. SillyTavern requires Node.js and npm. Jan is standalone — install it as a desktop app and it handles model downloads and the chat interface in a single window.',
          'For a full breakdown of local LLM frontends including installation guides, see the <a href="/local-llms/best-local-llm-frontends" class="text-primary hover:underline">best local LLM frontends guide</a>.',
        ],
        callouts: [{ type: 'info', text: 'Last verified: May 2026. If the data above looks stale, check the official project repositories on GitHub.' }],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Ollama Frontends',
        faqs: [
          {
            q: 'Does Open WebUI work with Ollama?',
            a: 'Yes. Open WebUI connects to Ollama by pointing to localhost:11434 (the default Ollama API address). Run `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main` to start it alongside a running Ollama instance.',
          },
          {
            q: 'Can I use SillyTavern with Ollama?',
            a: 'Yes. SillyTavern supports Ollama as a backend via its API connection settings. Set the API type to "Ollama" and the endpoint to http://localhost:11434 in the SillyTavern connection panel.',
          },
          {
            q: 'Is there an Ollama frontend that does not need Docker?',
            a: 'Jan is a native desktop app that does not require Docker. It connects to a local model runner directly and includes its own model download manager. SillyTavern also runs without Docker but requires Node.js.',
          },
          {
            q: 'Does Open WebUI support RAG (retrieval-augmented generation)?',
            a: 'Yes. Open WebUI has built-in RAG support — you can upload PDF, TXT, and other documents directly into a conversation. The embedded content is chunked and retrieved automatically to ground the model\'s responses. For more on Ollama setup options, see the <a href="/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio quick answer</a>.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    title: 'Bestes Frontend für Ollama?',
    seoTitle: 'Bestes Frontend für Ollama? | Prompt Bites | PromptQuorum',
    metaDescription: 'Open WebUI ist das beste Ollama-Frontend. SillyTavern für Rollenspiele. Jan ergänzt die Modellverwaltung. Alle kostenlos und Open Source. Aktualisiert Mai 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      de: {
        question: 'Bestes Frontend für Ollama?',
        answer: 'Open WebUI ist das beste Ollama-Frontend für die meisten Nutzer. Es ist kostenlos, funktionsreich und läuft als Docker-Container. SillyTavern eignet sich besser für Rollenspiele. Jan ergänzt einen lokalen Modell-Manager.',
        bullets: [
          'Open WebUI: insgesamt am besten, Docker-basiert, ChatGPT-ähnliche Oberfläche',
          'SillyTavern: am besten für kreatives Schreiben und Rollenspiele',
          'Jan: integrierter Modell-Downloader und lokaler API-Server',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Open WebUI ist das beste Allzweck-Ollama-Frontend — unterstützt RAG, Benutzerverwaltung und mehrere Ollama-Instanzen direkt',
          'SillyTavern ist speziell für Rollenspiele und kreative Fiktion entwickelt; unterstützt Charakterkarten und Storyverzweigungen, die Open WebUI nicht bietet',
          'Jan läuft ohne Docker und ergänzt die Modell-Download-Verwaltung neben dem Chat-Interface für Modellwechsel-Workflows',
          'Alle drei Frontends verbinden sich über die lokale REST-API mit Ollama und sind kostenlos nutzbar',
        ],
      },
      body1: {
        title: 'Open WebUI ist die erste Wahl',
        content: [
          '<strong>Stand Mai 2026 ist Open WebUI das empfohlene Ollama-Frontend für den allgemeinen Einsatz. Diese Seite wird monatlich aktualisiert — zuletzt überprüft Mai 2026.</strong> Open WebUI bietet ein ChatGPT-ähnliches Chat-Interface, RAG-Dokumenten-Upload, Benutzerverwaltung und Unterstützung für mehrere Ollama-Instanzen — alles kostenlos und selbst gehostet als Docker-Container unter localhost:3000.',
          'SillyTavern ist die richtige Wahl, wenn der primäre Anwendungsfall Rollenspiel oder kollaborative Fiktion ist. Es unterstützt Charakterkarten (PNG-Dateien mit eingebetteten Persona-Definitionen), Storyverzweigungen und Lorebook-Kontextinjektionen — Funktionen, die Open WebUI und Jan nicht haben.',
          'Die folgende Tabelle vergleicht Einrichtungsmethode und besten Anwendungsfall für die drei beliebtesten Ollama-Frontends.',
        ],
        columns: ['Frontend', 'Einrichtung', 'Am besten für'],
        rows: [
          { 'Frontend': 'Open WebUI', 'Einrichtung': 'Docker', 'Am besten für': 'Allgemeiner Chat + Entwicklung' },
          { 'Frontend': 'SillyTavern', 'Einrichtung': 'npm install', 'Am besten für': 'Rollenspiel + Fiktion' },
          { 'Frontend': 'Jan', 'Einrichtung': 'Desktop-App', 'Am besten für': 'Modellverwaltung + Chat' },
        ],
      },
      body2: {
        title: 'Jan ergänzt Modellverwaltung ohne Docker',
        content: [
          'Jan ist das einzige Frontend in diesem Vergleich, das keine Docker- oder Paketmanager-Installation erfordert. Es ist eine native Desktop-Anwendung für Mac, Windows und Linux, die Modell-Download-Verwaltung mit einem Chat-Interface kombiniert.',
          'Open WebUI erfordert Docker und eine bereits laufende Ollama-Instanz. SillyTavern benötigt Node.js und npm. Jan ist eigenständig — installieren Sie es als Desktop-App, und es kümmert sich um Modell-Downloads und das Chat-Interface in einem einzigen Fenster.',
          'Für einen vollständigen Überblick über lokale LLM-Frontends einschließlich Installationsanleitungen siehe den <a href="/de/local-llms/best-local-llm-frontends" class="text-primary hover:underline">Vergleich der besten lokalen LLM-Frontends</a>.',
        ],
        callouts: [{ type: 'info', text: 'Zuletzt überprüft: Mai 2026. Wenn die Daten oben veraltet aussehen, prüfen Sie die offiziellen Projekt-Repositories auf GitHub.' }],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Ollama-Frontends',
        faqs: [
          {
            q: 'Funktioniert Open WebUI mit Ollama?',
            a: 'Ja. Open WebUI verbindet sich mit Ollama durch Verweis auf localhost:11434 (die Standard-Ollama-API-Adresse). Führen Sie `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main` aus, um es neben einer laufenden Ollama-Instanz zu starten.',
          },
          {
            q: 'Kann ich SillyTavern mit Ollama verwenden?',
            a: 'Ja. SillyTavern unterstützt Ollama als Backend über die API-Verbindungseinstellungen. Setzen Sie den API-Typ auf "Ollama" und den Endpunkt auf http://localhost:11434 im SillyTavern-Verbindungsbereich.',
          },
          {
            q: 'Gibt es ein Ollama-Frontend ohne Docker?',
            a: 'Jan ist eine native Desktop-App, die kein Docker erfordert. Es verbindet sich direkt mit einem lokalen Modell-Runner und enthält einen eigenen Modell-Download-Manager. SillyTavern läuft ebenfalls ohne Docker, benötigt aber Node.js.',
          },
          {
            q: 'Unterstützt Open WebUI RAG (Retrieval-Augmented Generation)?',
            a: 'Ja. Open WebUI hat integrierte RAG-Unterstützung — Sie können PDF-, TXT- und andere Dokumente direkt in ein Gespräch hochladen. Der eingebettete Inhalt wird automatisch aufgeteilt und abgerufen, um die Antworten des Modells zu fundieren. Weitere Informationen zu Ollama-Einrichtungsoptionen finden Sie in der <a href="/de/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio Kurzantwort</a>.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    title: 'Meilleur frontend pour Ollama ?',
    seoTitle: 'Meilleur frontend pour Ollama? | Prompt Bites | PromptQuorum',
    metaDescription: 'Open WebUI est le meilleur frontend Ollama. SillyTavern pour le jeu de rôle. Jan ajoute la gestion de modèles. Tous gratuits. Mis à jour mai 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      fr: {
        question: 'Meilleur frontend pour Ollama ?',
        answer: 'Open WebUI est le meilleur frontend Ollama pour la plupart des utilisateurs. Il est gratuit, riche en fonctionnalités et fonctionne comme un conteneur Docker. SillyTavern est préférable pour le jeu de rôle. Jan ajoute un gestionnaire de modèles local.',
        bullets: [
          'Open WebUI : meilleur en général, basé sur Docker, interface similaire à ChatGPT',
          'SillyTavern : meilleur pour l\'écriture créative et le jeu de rôle',
          'Jan : téléchargeur de modèles intégré et serveur API local',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Open WebUI est le meilleur frontend Ollama polyvalent — prend en charge RAG, gestion des utilisateurs et plusieurs instances Ollama directement',
          'SillyTavern est conçu pour le jeu de rôle et la fiction créative ; prend en charge les fiches de personnages et les embranchements narratifs absents d\'Open WebUI',
          'Jan fonctionne sans Docker et ajoute la gestion des téléchargements de modèles à côté de l\'interface de chat, ce qui le rend utile pour les flux de travail de changement de modèles',
          'Les trois frontends se connectent à Ollama via l\'API REST locale et sont gratuits',
        ],
      },
      body1: {
        title: 'Open WebUI est le choix par défaut',
        content: [
          '<strong>En mai 2026, Open WebUI est le frontend Ollama recommandé pour un usage général. Cette page est mise à jour mensuellement — dernière vérification mai 2026.</strong> Open WebUI propose une interface de chat similaire à ChatGPT, le téléversement de documents RAG, la gestion des utilisateurs et la prise en charge de plusieurs instances Ollama — le tout gratuitement et en auto-hébergement comme un conteneur Docker accessible à localhost:3000.',
          'SillyTavern est le bon choix lorsque le cas d\'usage principal est le jeu de rôle ou la fiction collaborative. Il prend en charge les fiches de personnages (fichiers PNG avec définitions de personnages intégrées), les embranchements narratifs et l\'injection de contexte lorebook — des fonctionnalités absentes d\'Open WebUI et de Jan.',
          'Le tableau ci-dessous compare la méthode d\'installation et le meilleur cas d\'usage pour les trois frontends Ollama les plus populaires.',
        ],
        columns: ['Frontend', 'Installation', 'Idéal pour'],
        rows: [
          { 'Frontend': 'Open WebUI', 'Installation': 'Docker', 'Idéal pour': 'Chat général + dev' },
          { 'Frontend': 'SillyTavern', 'Installation': 'npm install', 'Idéal pour': 'Jeu de rôle + fiction' },
          { 'Frontend': 'Jan', 'Installation': 'Application de bureau', 'Idéal pour': 'Gestion modèles + chat' },
        ],
      },
      body2: {
        title: 'Jan ajoute la gestion des modèles sans Docker',
        content: [
          'Jan est le seul frontend de cette comparaison ne nécessitant ni Docker ni gestionnaire de paquets. C\'est une application de bureau native pour Mac, Windows et Linux qui combine gestion des téléchargements de modèles et interface de chat.',
          'Open WebUI nécessite Docker et une instance Ollama déjà en cours d\'exécution. SillyTavern nécessite Node.js et npm. Jan est autonome — installez-le comme une application de bureau et il gère les téléchargements de modèles et l\'interface de chat dans une seule fenêtre.',
          'Pour un aperçu complet des frontends LLM locaux incluant des guides d\'installation, consultez le <a href="/fr/local-llms/best-local-llm-frontends" class="text-primary hover:underline">guide des meilleurs frontends LLM locaux</a>.',
        ],
        callouts: [{ type: 'info', text: 'Dernière vérification : mai 2026. Si les données ci-dessus semblent obsolètes, consultez les dépôts officiels des projets sur GitHub.' }],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les frontends Ollama',
        faqs: [
          {
            q: 'Open WebUI fonctionne-t-il avec Ollama ?',
            a: 'Oui. Open WebUI se connecte à Ollama en pointant vers localhost:11434 (l\'adresse API Ollama par défaut). Exécutez `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main` pour le démarrer aux côtés d\'une instance Ollama en cours d\'exécution.',
          },
          {
            q: 'Puis-je utiliser SillyTavern avec Ollama ?',
            a: 'Oui. SillyTavern prend en charge Ollama comme backend via ses paramètres de connexion API. Définissez le type d\'API sur "Ollama" et le point de terminaison sur http://localhost:11434 dans le panneau de connexion de SillyTavern.',
          },
          {
            q: 'Existe-t-il un frontend Ollama sans Docker ?',
            a: 'Jan est une application de bureau native ne nécessitant pas Docker. Elle se connecte directement à un runner de modèles local et inclut son propre gestionnaire de téléchargement de modèles. SillyTavern fonctionne également sans Docker mais nécessite Node.js.',
          },
          {
            q: 'Open WebUI prend-il en charge le RAG (génération augmentée par récupération) ?',
            a: 'Oui. Open WebUI dispose d\'une prise en charge RAG intégrée — vous pouvez téléverser des fichiers PDF, TXT et d\'autres documents directement dans une conversation. Le contenu intégré est découpé et récupéré automatiquement pour ancrer les réponses du modèle. Pour plus d\'informations sur les options de configuration Ollama, consultez la <a href="/fr/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">réponse rapide Ollama vs LM Studio</a>.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    title: 'Ollamaに最適なフロントエンドは？',
    seoTitle: 'Ollamaに最適なフロントエンドは？| Prompt Bites | PromptQuorum',
    metaDescription: 'Open WebUIはOllamaに最適なフロントエンドです。ロールプレイにはSillyTavern。Janはモデル管理を追加します。すべて無料でオープンソース。2026年5月更新。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      ja: {
        question: 'Ollamaに最適なフロントエンドは？',
        answer: 'Open WebUIはほとんどのユーザーにとって最適なOllamaフロントエンドです。無料で機能豊富でDockerコンテナとして動作します。SillyTavernはロールプレイに最適です。Janはローカルモデルマネージャーを追加します。',
        bullets: [
          'Open WebUI：総合的に最優秀、Docker ベース、ChatGPT 風 UI',
          'SillyTavern：クリエイティブライティングとロールプレイに最適',
          'Jan：組み込みモデルダウンローダーとローカルAPIサーバー',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Open WebUIは最高の汎用Ollamaフロントエンドです — RAG、ユーザー管理、複数のOllamaインスタンスをすぐにサポート',
          'SillyTavernはロールプレイとクリエイティブフィクション専用に開発；Open WebUIにないキャラクターカードとストーリー分岐をサポート',
          'JanはDockerなしで動作し、チャットインターフェースの横にモデルダウンロード管理を追加し、モデル切り替えワークフローに有用',
          '3つのフロントエンドすべてがローカルREST API経由でOllamaに接続し、無料で使用可能',
        ],
      },
      body1: {
        title: 'Open WebUI がデフォルトの選択',
        content: [
          '<strong>2026年5月時点で、Open WebUIは一般用途の推奨Ollamaフロントエンドです。このページは毎月更新されます — 最終確認: 2026年5月。</strong> Open WebUIはChatGPT風のチャットインターフェース、RAGドキュメントアップロード、ユーザー管理、複数のOllamaインスタンスへの接続サポートを提供し、すべて無料かつDockerコンテナとしてlocalhost:3000でセルフホスト可能です。',
          'SillyTavernはロールプレイや共同フィクションが主な用途の場合に適しています。キャラクターカード（ペルソナ定義が埋め込まれたPNGファイル）、ストーリー分岐、ロアブックコンテキスト注入をサポートしており、これらはOpen WebUIとJanにはない機能です。',
          '以下の表は、最も人気の高い3つのOllamaフロントエンドのセットアップ方法と最適な用途を比較しています。',
        ],
        columns: ['フロントエンド', 'セットアップ', '最適用途'],
        rows: [
          { 'フロントエンド': 'Open WebUI', 'セットアップ': 'Docker', '最適用途': '一般チャット＋開発' },
          { 'フロントエンド': 'SillyTavern', 'セットアップ': 'npm install', '最適用途': 'ロールプレイ＋フィクション' },
          { 'フロントエンド': 'Jan', 'セットアップ': 'デスクトップアプリ', '最適用途': 'モデル管理＋チャット' },
        ],
      },
      body2: {
        title: 'JanはDockerなしでモデル管理を追加',
        content: [
          'Janはこの比較の中でDockerやパッケージマネージャーのインストールを必要としない唯一のフロントエンドです。Mac、Windows、Linuxのネイティブデスクトップアプリケーションで、モデルダウンロード管理とチャットインターフェースを組み合わせています。',
          'Open WebUIにはDockerと既に実行中のOllamaインスタンスが必要です。SillyTavernはNode.jsとnpmを必要とします。Janはスタンドアロンです — デスクトップアプリとしてインストールすれば、1つのウィンドウでモデルダウンロードとチャットインターフェースを管理できます。',
          'インストールガイドを含むローカルLLMフロントエンドの詳細な比較については、<a href="/ja/local-llms/best-local-llm-frontends" class="text-primary hover:underline">最良のローカルLLMフロントエンドガイド</a>をご覧ください。',
        ],
        callouts: [{ type: 'info', text: '最終確認: 2026年5月。上記のデータが古くなっている場合は、GitHubの公式プロジェクトリポジトリを確認してください。' }],
      },
      faq: {
        id: 'faq',
        title: 'Ollamaフロントエンドに関するよくある質問',
        faqs: [
          {
            q: 'Open WebUIはOllamaと連携しますか？',
            a: 'はい。Open WebUIはlocalhost:11434（OllamaのデフォルトAPIアドレス）に接続します。`docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main`を実行して、実行中のOllamaインスタンスの横で起動します。',
          },
          {
            q: 'SillyTavernはOllamaで使用できますか？',
            a: 'はい。SillyTavernはAPI接続設定でOllamaをバックエンドとしてサポートします。SillyTavernの接続パネルでAPIタイプを「Ollama」、エンドポイントをhttp://localhost:11434に設定してください。',
          },
          {
            q: 'Dockerが不要なOllamaフロントエンドはありますか？',
            a: 'JanはDockerを必要としないネイティブデスクトップアプリです。ローカルモデルランナーに直接接続し、独自のモデルダウンロードマネージャーを含んでいます。SillyTavernもDockerなしで動作しますが、Node.jsが必要です。',
          },
          {
            q: 'Open WebUIはRAG（検索拡張生成）をサポートしていますか？',
            a: 'はい。Open WebUIには組み込みのRAGサポートがあります — PDF、TXTその他のドキュメントを会話に直接アップロードできます。埋め込まれたコンテンツはチャンク分割され、モデルの回答を根拠付けるために自動的に検索されます。Ollamaの設定オプションの詳細については、<a href="/ja/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio クイック回答</a>もご覧ください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    title: 'Ollama 最佳前端是什么？',
    seoTitle: 'Ollama 最佳前端工具 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Open WebUI 是最佳 Ollama 前端。SillyTavern 适合角色扮演。Jan 提供模型管理。全部免费且开源。2026年5月更新。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    quickAnswerTop: {
      zh: {
        question: 'Ollama 最佳前端是什么？',
        answer: 'Open WebUI 是大多数用户的最佳 Ollama 前端。它免费、功能丰富，作为 Docker 容器运行。SillyTavern 更适合角色扮演。Jan 提供本地模型管理器。',
        bullets: [
          'Open WebUI：综合最佳，基于 Docker，类似 ChatGPT 的界面',
          'SillyTavern：最适合创意写作和角色扮演',
          'Jan：内置模型下载器和本地 API 服务器',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Open WebUI 是最佳通用 Ollama 前端——开箱即支持 RAG、用户管理和多个 Ollama 实例',
          'SillyTavern 专为角色扮演和创意小说设计；支持角色卡和故事分支，这些功能 Open WebUI 没有',
          'Jan 无需 Docker 即可运行，在聊天界面旁边增加了模型下载管理功能，适合模型切换工作流',
          '三个前端均通过本地 REST API 连接 Ollama，均免费使用',
        ],
      },
      body1: {
        title: 'Open WebUI 是默认首选',
        content: [
          '<strong>截至2026年5月，Open WebUI是通用用途的推荐Ollama前端。本页每月更新——最后核实: 2026年5月。</strong> Open WebUI 提供类似 ChatGPT 的聊天界面、RAG 文档上传、用户管理以及连接多个 Ollama 实例的支持——全部免费且作为 Docker 容器自托管，可通过 localhost:3000 访问。',
          'SillyTavern 是角色扮演或协作小说创作为主要用途时的正确选择。它支持角色卡（内嵌人物定义的 PNG 文件）、故事分支和世界书上下文注入——这些功能是 Open WebUI 和 Jan 所没有的。',
          '下表比较了三款最流行的 Ollama 前端的安装方式和最佳使用场景。',
        ],
        columns: ['前端', '安装方式', '最适合'],
        rows: [
          { '前端': 'Open WebUI', '安装方式': 'Docker', '最适合': '通用聊天 + 开发' },
          { '前端': 'SillyTavern', '安装方式': 'npm install', '最适合': '角色扮演 + 小说' },
          { '前端': 'Jan', '安装方式': '桌面应用', '最适合': '模型管理 + 聊天' },
        ],
      },
      body2: {
        title: 'Jan 无需 Docker 即可添加模型管理',
        content: [
          'Jan 是本次比较中唯一不需要 Docker 或包管理器安装的前端。它是适用于 Mac、Windows 和 Linux 的原生桌面应用，将模型下载管理与聊天界面结合在一起。',
          'Open WebUI 需要 Docker 和已运行的 Ollama 实例。SillyTavern 需要 Node.js 和 npm。Jan 是独立的——将其作为桌面应用安装，它在一个窗口中处理模型下载和聊天界面。',
          '有关本地 LLM 前端（含安装指南）的完整对比，请参阅 <a href="/zh/local-llms/best-local-llm-frontends" class="text-primary hover:underline">最佳本地LLM前端指南</a>。',
        ],
        callouts: [{ type: 'info', text: '最后核实: 2026年5月。如果上述数据已过时，请查看GitHub上的官方项目仓库。' }],
      },
      faq: {
        id: 'faq',
        title: '关于 Ollama 前端的快速解答',
        faqs: [
          {
            q: 'Open WebUI 与 Ollama 兼容吗？',
            a: '兼容。Open WebUI 通过指向 localhost:11434（Ollama 默认 API 地址）连接到 Ollama。运行 `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main` 即可在运行中的 Ollama 实例旁启动。',
          },
          {
            q: '可以将 SillyTavern 与 Ollama 配合使用吗？',
            a: '可以。SillyTavern 通过 API 连接设置支持 Ollama 作为后端。在 SillyTavern 连接面板中将 API 类型设置为"Ollama"，端点设置为 http://localhost:11434。',
          },
          {
            q: '有不需要 Docker 的 Ollama 前端吗？',
            a: 'Jan 是不需要 Docker 的原生桌面应用。它直接连接到本地模型运行器并包含自己的模型下载管理器。SillyTavern 也无需 Docker 运行，但需要 Node.js。',
          },
          {
            q: 'Open WebUI 支持 RAG（检索增强生成）吗？',
            a: '支持。Open WebUI 内置 RAG 支持——您可以直接在对话中上传 PDF、TXT 等文档。嵌入的内容会自动分块并检索，以为模型的回答提供依据。有关 Ollama 配置选项的更多信息，请参阅 <a href="/zh/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio 快速解答</a>。',
          },
        ],
      },
    },
  },
}
