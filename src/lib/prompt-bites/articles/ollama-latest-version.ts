import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'What Is the Latest Ollama Version?',
    seoTitle: 'Latest Ollama Version 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Latest Ollama release on GitHub. Run ollama --version to check. Linux: rerun install script. Mac/Windows: download from ollama.com. Updated May 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'Developers keeping Ollama up to date',
    parentArticle: '/local-llms/local-llm-model-updates-2026',
    siblingBites: ['best-ollama-models-right-now', 'can-you-run-qwen3-on-ollama'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'What is the latest Ollama version?',
        answer: 'Check ollama.com or the Ollama GitHub releases page for the current version. On Linux, run the install script to update. On Mac/Windows, download the latest installer.',
        bullets: [
          'Check: github.com/ollama/ollama/releases for the latest version',
          'Linux update: curl -fsSL https://ollama.com/install.sh | sh',
          'Mac/Windows: re-download installer from ollama.com',
        ],
        updatedDate: '2026-05',
      },
      de: { question: 'Was ist die neueste Ollama-Version?', answer: 'Die aktuelle Version finden Sie auf ollama.com oder der Ollama GitHub-Release-Seite. Unter Linux aktualisieren Sie mit dem Installationsskript. Unter Mac/Windows laden Sie den neuesten Installer herunter.', bullets: ['Prüfen: github.com/ollama/ollama/releases für die neueste Version', 'Linux-Update: curl -fsSL https://ollama.com/install.sh | sh', 'Mac/Windows: Installer von ollama.com erneut herunterladen'], updatedDate: '2026-05' },
      fr: { question: 'Quelle est la dernière version d\'Ollama ?', answer: 'Consultez ollama.com ou la page des releases GitHub d\'Ollama pour la version actuelle. Sur Linux, utilisez le script d\'installation pour mettre à jour. Sur Mac/Windows, téléchargez le dernier installateur.', bullets: ['Vérifier : github.com/ollama/ollama/releases pour la dernière version', 'Mise à jour Linux : curl -fsSL https://ollama.com/install.sh | sh', 'Mac/Windows : re-télécharger l\'installateur depuis ollama.com'], updatedDate: '2026-05' },
      ja: { question: 'Ollamaの最新バージョンは何ですか？', answer: '現在のバージョンはollama.comまたはOllama GitHubリリースページで確認できます。Linuxはインストールスクリプトで更新します。Mac/Windowsは最新インストーラーをダウンロードしてください。', bullets: ['確認先：github.com/ollama/ollama/releases', 'Linuxアップデート：curl -fsSL https://ollama.com/install.sh | sh', 'Mac/Windows：ollama.comからインストーラーを再ダウンロード'], updatedDate: '2026-05' },
      zh: { question: 'Ollama的最新版本是什么？', answer: '请访问ollama.com或Ollama GitHub发布页面查看当前版本。Linux用户运行安装脚本即可更新。Mac/Windows用户重新下载最新安装程序即可。', bullets: ['查看：github.com/ollama/ollama/releases获取最新版本', 'Linux更新：curl -fsSL https://ollama.com/install.sh | sh', 'Mac/Windows：从ollama.com重新下载安装程序'], updatedDate: '2026-05' },
      es: { question: '¿Cuál es la versión más reciente de Ollama?', answer: 'Comprueba ollama.com o la página de lanzamientos de GitHub de Ollama para la versión actual. En Linux, ejecuta el script de instalación para actualizar. En Mac/Windows, descarga el instalador más reciente.', bullets: ['Comprobar: github.com/ollama/ollama/releases para la versión más reciente', 'Actualización en Linux: curl -fsSL https://ollama.com/install.sh | sh', 'Mac/Windows: volver a descargar el instalador desde ollama.com'], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Run <code>ollama --version</code> to see your installed build; compare it to the GitHub releases page',
          'Linux update is one command: <code>curl -fsSL https://ollama.com/install.sh | sh</code>',
          'Mac and Windows: re-download the installer from ollama.com — no command line needed',
          'Updating never deletes your models — GGUF files are stored separately from the Ollama binary',
        ],
      },
      body1: {
        title: 'Where to Check Ollama\'s Version',
        content: [
          '<strong>As of May 2026, the latest stable Ollama release is listed at github.com/ollama/ollama/releases — that page shows the exact version number and release notes. This page is updated monthly — last verified May 2026.</strong>',
          'Run <code>ollama --version</code> in a terminal to see your installed build. The output is one line. If the GitHub releases page shows a higher version number, your install is behind.',
          'New model families — including Llama 3.3 and Qwen 3 — require a minimum Ollama version to load correctly. Recent releases also include faster GGUF loading and better multi-GPU context handling — improvements that compound across daily use.',
        ],
      },
      body2: {
        title: 'How to Update Ollama Safely',
        content: [
          '<strong>Updating is safe: your downloaded models are stored in a separate directory and are never removed by an Ollama update.</strong> The user-facing REST API has maintained backwards compatibility since version 0.1.',
          'If you are several versions behind, run <code>ollama list</code> before updating to note your current models. Nothing will break, but this 30-second step eliminates uncertainty before a major version jump.',
          'For a complete changelog of what each Ollama release changed and which model families benefit, see the <a href="/local-llms/local-llm-model-updates-2026" class="text-primary hover:underline">local LLM model updates guide for 2026</a>.',
        ],
        columns: ['Platform', 'Update Method', 'Notes'],
        rows: [
          { 'Platform': 'Linux', 'Update Method': 'Run install script (one command)', 'Notes': 'Overwrites binary, keeps models' },
          { 'Platform': 'macOS', 'Update Method': 'Re-download from ollama.com', 'Notes': 'Drag to Applications, models kept' },
          { 'Platform': 'Windows', 'Update Method': 'Re-download .exe from ollama.com', 'Notes': 'Run installer, models kept' },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
        callouts: [{ type: 'info', text: 'Last verified: May 2026. If the data above looks stale, check the official Ollama GitHub releases page or model library.' }],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Ollama Updates',
        faqs: [
          {
            q: 'How do I check which Ollama version I have installed?',
            a: 'Run <code>ollama --version</code> in a terminal. It prints your build number in one line, for example <code>ollama version 0.x.y</code>.',
          },
          {
            q: 'Will updating Ollama delete my downloaded models?',
            a: 'No. Ollama stores model files in <code>~/.ollama/models/</code> on Linux and macOS, separate from the application binary. Updates never touch that directory. See <a href="/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">the best Ollama models right now</a> if you want to add new ones after updating.',
          },
          {
            q: 'Is it safe to skip multiple Ollama versions when updating?',
            a: 'Yes. The Ollama installer always brings you to the latest version in one step regardless of how many versions you have missed. No incremental updates are required.',
          },
          {
            q: 'Does updating Ollama require updating my installed models?',
            a: 'No. GGUF model files are forward-compatible. The same files you downloaded for an older Ollama version run on the current version without re-downloading.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Ollama',
    title: 'Was ist die neueste Ollama-Version?',
    seoTitle: 'Neueste Ollama-Version 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Aktuelle Ollama-Version auf GitHub prüfen. Linux-Update: Installationsskript neu ausführen. Mac/Windows: Installer von ollama.com herunterladen. Stand Mai 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    quickAnswerTop: {
      de: {
        question: 'Was ist die neueste Ollama-Version?',
        answer: 'Aktuelle Version auf ollama.com oder der Ollama GitHub-Releases-Seite prüfen. Unter Linux das Installationsskript ausführen. Auf Mac/Windows das neueste Installationsprogramm herunterladen.',
        bullets: [
          'Prüfen: github.com/ollama/ollama/releases für die neueste Version',
          'Linux-Update: curl -fsSL https://ollama.com/install.sh | sh',
          'Mac/Windows: Installationsprogramm von ollama.com erneut herunterladen',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '<code>ollama --version</code> ausführen, um den installierten Build zu sehen; mit der GitHub-Releases-Seite vergleichen',
          'Linux-Update mit einem Befehl: <code>curl -fsSL https://ollama.com/install.sh | sh</code>',
          'Mac und Windows: das Installationsprogramm von ollama.com erneut herunterladen — keine Kommandozeile erforderlich',
          'Ein Update löscht keine Modelle — GGUF-Dateien werden separat vom Ollama-Binary gespeichert',
        ],
      },
      body1: {
        title: 'Wo Sie die Ollama-Version prüfen können',
        content: [
          '<strong>Stand Mai 2026: Die neueste stabile Ollama-Version ist unter github.com/ollama/ollama/releases aufgeführt — dort sind die genaue Versionsnummer und die Release-Notes zu finden. Diese Seite wird monatlich aktualisiert — zuletzt überprüft im Mai 2026.</strong>',
          '<code>ollama --version</code> in einem Terminal ausführen, um den installierten Build zu sehen. Die Ausgabe besteht aus einer Zeile. Wenn die GitHub-Releases-Seite eine höhere Versionsnummer anzeigt, ist Ihre Installation veraltet.',
          'Neue Modellfamilien — darunter Llama 3.3 und Qwen 3 — erfordern eine Mindestversion von Ollama, um korrekt geladen zu werden. Neuere Releases beinhalten auch schnelleres GGUF-Laden und bessere Multi-GPU-Kontextverarbeitung — Verbesserungen, die sich im täglichen Einsatz summieren.',
        ],
      },
      body2: {
        title: 'Ollama sicher aktualisieren',
        content: [
          '<strong>Ein Update ist sicher: Ihre heruntergeladenen Modelle werden in einem separaten Verzeichnis gespeichert und niemals durch ein Ollama-Update entfernt.</strong> Die REST-API für Benutzer hat seit Version 0.1 Abwärtskompatibilität gewahrt.',
          'Wenn Sie mehrere Versionen im Rückstand sind, führen Sie vor dem Update <code>ollama list</code> aus, um Ihre aktuellen Modelle zu notieren. Nichts wird kaputt gehen, aber dieser 30-Sekunden-Schritt beseitigt Unsicherheit vor einem größeren Versionssprung.',
          'Für ein vollständiges Changelog der Änderungen je Ollama-Release und welche Modellfamilien davon profitieren, lesen Sie den <a href="/de/local-llms/local-llm-model-updates-2026" class="text-primary hover:underline">Leitfaden zu lokalen LLM-Modell-Updates 2026</a>.',
        ],
        columns: ['Plattform', 'Updatemethode', 'Hinweise'],
        rows: [
          { 'Plattform': 'Linux', 'Updatemethode': 'Installationsskript ausführen (ein Befehl)', 'Hinweise': 'Überschreibt Binary, behält Modelle' },
          { 'Plattform': 'macOS', 'Updatemethode': 'Von ollama.com erneut herunterladen', 'Hinweise': 'In Programme ziehen, Modelle bleiben erhalten' },
          { 'Plattform': 'Windows', 'Updatemethode': '.exe von ollama.com erneut herunterladen', 'Hinweise': 'Installer ausführen, Modelle bleiben erhalten' },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
        callouts: [{ type: 'info', text: 'Zuletzt überprüft: Mai 2026. Wenn die Daten oben veraltet aussehen, prüfen Sie die offizielle Ollama GitHub-Release-Seite oder die Modell-Bibliothek.' }],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Ollama-Updates',
        faqs: [
          {
            q: 'Wie kann ich prüfen, welche Ollama-Version ich installiert habe?',
            a: '<code>ollama --version</code> in einem Terminal ausführen. Es gibt Ihre Build-Nummer in einer Zeile aus, zum Beispiel <code>ollama version 0.x.y</code>.',
          },
          {
            q: 'Löscht ein Ollama-Update meine heruntergeladenen Modelle?',
            a: 'Nein. Ollama speichert Modelldateien unter <code>~/.ollama/models/</code> auf Linux und macOS, getrennt vom Anwendungs-Binary. Updates berühren dieses Verzeichnis nie. Lesen Sie <a href="/de/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">die besten Ollama-Modelle aktuell</a>, wenn Sie nach dem Update neue hinzufügen möchten.',
          },
          {
            q: 'Ist es sicher, beim Update mehrere Ollama-Versionen zu überspringen?',
            a: 'Ja. Das Ollama-Installationsprogramm bringt Sie in einem Schritt auf die neueste Version, unabhängig davon, wie viele Versionen Sie verpasst haben. Schrittweise Updates sind nicht erforderlich.',
          },
          {
            q: 'Muss ich nach einem Ollama-Update auch meine installierten Modelle aktualisieren?',
            a: 'Nein. GGUF-Modelldateien sind vorwärtskompatibel. Dieselben Dateien, die Sie für eine ältere Ollama-Version heruntergeladen haben, laufen auf der aktuellen Version ohne erneuten Download.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Ollama',
    title: 'Quelle est la dernière version d\'Ollama ?',
    seoTitle: 'Version Ollama actuelle 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Sur GitHub : dernière version Ollama. Linux : relancer le script d\'installation. Mac/Windows : réinstaller depuis ollama.com. Vérifié mai 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la dernière version d\'Ollama ?',
        answer: 'Consultez ollama.com ou la page des releases GitHub d\'Ollama pour la version actuelle. Sur Linux, exécutez le script d\'installation pour mettre à jour. Sur Mac/Windows, téléchargez le dernier installeur.',
        bullets: [
          'Vérifier : github.com/ollama/ollama/releases pour la dernière version',
          'Mise à jour Linux : curl -fsSL https://ollama.com/install.sh | sh',
          'Mac/Windows : retélécharger l\'installeur depuis ollama.com',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Exécutez <code>ollama --version</code> pour voir votre build installé ; comparez-le à la page des releases GitHub',
          'Mise à jour Linux en une commande : <code>curl -fsSL https://ollama.com/install.sh | sh</code>',
          'Mac et Windows : retéléchargez l\'installeur depuis ollama.com — aucune ligne de commande nécessaire',
          'Une mise à jour ne supprime jamais vos modèles — les fichiers GGUF sont stockés séparément du binaire Ollama',
        ],
      },
      body1: {
        title: 'Où vérifier la version d\'Ollama',
        content: [
          '<strong>En mai 2026, la dernière version stable d\'Ollama est listée sur github.com/ollama/ollama/releases — cette page affiche le numéro de version exact et les notes de release. Cette page est mise à jour mensuellement — dernière vérification mai 2026.</strong>',
          'Exécutez <code>ollama --version</code> dans un terminal pour voir votre build installé. La sortie tient sur une ligne. Si la page des releases GitHub affiche un numéro de version supérieur, votre installation est en retard.',
          'Les nouvelles familles de modèles — dont Llama 3.3 et Qwen 3 — nécessitent une version minimale d\'Ollama pour se charger correctement. Les versions récentes incluent également un chargement GGUF plus rapide et une meilleure gestion du contexte multi-GPU — des améliorations qui s\'accumulent à l\'usage quotidien.',
        ],
      },
      body2: {
        title: 'Comment mettre à jour Ollama en toute sécurité',
        content: [
          '<strong>La mise à jour est sans risque : vos modèles téléchargés sont stockés dans un répertoire séparé et ne sont jamais supprimés lors d\'une mise à jour d\'Ollama.</strong> L\'API REST côté utilisateur a maintenu la compatibilité ascendante depuis la version 0.1.',
          'Si vous avez plusieurs versions de retard, exécutez <code>ollama list</code> avant de mettre à jour pour noter vos modèles actuels. Rien ne se cassera, mais cette étape de 30 secondes élimine toute incertitude avant un saut de version majeur.',
          'Pour un journal complet des modifications de chaque release Ollama et des familles de modèles concernées, consultez le <a href="/fr/local-llms/local-llm-model-updates-2026" class="text-primary hover:underline">guide des mises à jour de modèles LLM locaux 2026</a>.',
        ],
        columns: ['Plateforme', 'Méthode de mise à jour', 'Remarques'],
        rows: [
          { 'Plateforme': 'Linux', 'Méthode de mise à jour': 'Exécuter le script d\'installation (une commande)', 'Remarques': 'Remplace le binaire, conserve les modèles' },
          { 'Plateforme': 'macOS', 'Méthode de mise à jour': 'Retélécharger depuis ollama.com', 'Remarques': 'Glisser dans Applications, modèles conservés' },
          { 'Plateforme': 'Windows', 'Méthode de mise à jour': 'Retélécharger le .exe depuis ollama.com', 'Remarques': 'Lancer l\'installeur, modèles conservés' },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
        callouts: [{ type: 'info', text: 'Dernière vérification : mai 2026. Si les données ci-dessus semblent obsolètes, consultez la page officielle des releases GitHub d\'Ollama ou la bibliothèque de modèles.' }],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les mises à jour Ollama',
        faqs: [
          {
            q: 'Comment vérifier quelle version d\'Ollama j\'ai installée ?',
            a: 'Exécutez <code>ollama --version</code> dans un terminal. Cela affiche votre numéro de build en une ligne, par exemple <code>ollama version 0.x.y</code>.',
          },
          {
            q: 'La mise à jour d\'Ollama supprime-t-elle mes modèles téléchargés ?',
            a: 'Non. Ollama stocke les fichiers de modèles dans <code>~/.ollama/models/</code> sur Linux et macOS, séparément du binaire de l\'application. Les mises à jour ne touchent jamais ce répertoire. Consultez <a href="/fr/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">les meilleurs modèles Ollama en ce moment</a> si vous souhaitez en ajouter après la mise à jour.',
          },
          {
            q: 'Est-il sûr de sauter plusieurs versions Ollama lors d\'une mise à jour ?',
            a: 'Oui. L\'installeur Ollama vous amène toujours à la dernière version en une seule étape, quel que soit le nombre de versions manquées. Aucune mise à jour incrémentale n\'est requise.',
          },
          {
            q: 'La mise à jour d\'Ollama nécessite-t-elle de mettre à jour mes modèles installés ?',
            a: 'Non. Les fichiers de modèles GGUF sont compatibles vers l\'avant. Les mêmes fichiers téléchargés pour une ancienne version d\'Ollama fonctionnent sur la version actuelle sans nouveau téléchargement.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Ollama',
    title: 'Ollamaの最新バージョンは？',
    seoTitle: 'Ollama 2026最新バージョン確認 | Prompt Bites | PromptQuorum',
    metaDescription: 'ollama --versionで現在のバージョンを確認できます。最新リリースはGitHubで公開。Linuxはインストールスクリプト再実行、Mac/Windowsはollama.comから再ダウンロード。2026年5月更新。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    quickAnswerTop: {
      ja: {
        question: 'Ollamaの最新バージョンは？',
        answer: 'ollama.comまたはOllama GitHubリリースページで現在のバージョンを確認してください。Linuxはインストールスクリプトを実行して更新。Mac/Windowsは最新インストーラーをダウンロードしてください。',
        bullets: [
          '確認先: github.com/ollama/ollama/releases で最新バージョンをチェック',
          'Linux更新: curl -fsSL https://ollama.com/install.sh | sh',
          'Mac/Windows: ollama.comからインストーラーを再ダウンロード',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '<code>ollama --version</code> を実行してインストール済みのビルドを確認し、GitHubリリースページと比較してください',
          'Linux更新は1コマンド: <code>curl -fsSL https://ollama.com/install.sh | sh</code>',
          'MacとWindows: ollama.comからインストーラーを再ダウンロード — コマンドライン不要',
          '更新でモデルは削除されません — GGUFファイルはOllamaバイナリとは別に保存されています',
        ],
      },
      body1: {
        title: 'Ollamaのバージョンを確認する場所',
        content: [
          '<strong>2026年5月現在、最新の安定版Ollamaリリースはgithub.com/ollama/ollama/releasesに掲載されています — 正確なバージョン番号とリリースノートが確認できます。このページは毎月更新されています — 最終確認: 2026年5月。</strong>',
          'ターミナルで <code>ollama --version</code> を実行して、インストール済みのビルドを確認してください。出力は1行です。GitHubリリースページがより高いバージョン番号を示している場合、インストールが古くなっています。',
          'Llama 3.3やQwen 3を含む新しいモデルファミリーは、正しく読み込むために最低限のOllamaバージョンが必要です。最近のリリースには、より高速なGGUFロードとマルチGPUコンテキスト処理の改善も含まれており、日常的な使用での効果が蓄積されます。',
        ],
      },
      body2: {
        title: 'Ollamaを安全に更新する方法',
        content: [
          '<strong>更新は安全です: ダウンロード済みのモデルは別のディレクトリに保存されており、Ollamaの更新によって削除されることはありません。</strong> ユーザー向けREST APIはバージョン0.1以降、後方互換性を維持しています。',
          '複数のバージョンが遅れている場合は、更新前に <code>ollama list</code> を実行して現在のモデルを確認しておくとよいでしょう。何も壊れませんが、この30秒のステップでメジャーバージョンアップ前の不確実性を解消できます。',
          '各Ollamaリリースの変更内容と恩恵を受けるモデルファミリーの詳細については、<a href="/ja/local-llms/local-llm-model-updates-2026" class="text-primary hover:underline">2026年ローカルLLMモデル更新ガイド</a>をご覧ください。',
        ],
        columns: ['プラットフォーム', '更新方法', '備考'],
        rows: [
          { 'プラットフォーム': 'Linux', '更新方法': 'インストールスクリプトを実行（1コマンド）', '備考': 'バイナリを上書き、モデルは保持' },
          { 'プラットフォーム': 'macOS', '更新方法': 'ollama.comから再ダウンロード', '備考': 'Applicationsにドラッグ、モデルは保持' },
          { 'プラットフォーム': 'Windows', '更新方法': 'ollama.comから.exeを再ダウンロード', '備考': 'インストーラーを実行、モデルは保持' },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
        callouts: [{ type: 'info', text: '最終確認: 2026年5月。上記のデータが古くなっている場合は、公式のOllama GitHubリリースページまたはモデルライブラリを確認してください。' }],
      },
      faq: {
        id: 'faq',
        title: 'Ollama更新に関するクイックアンサー',
        faqs: [
          {
            q: 'インストール済みのOllamaバージョンを確認するには？',
            a: 'ターミナルで <code>ollama --version</code> を実行してください。例えば <code>ollama version 0.x.y</code> のように、ビルド番号が1行で表示されます。',
          },
          {
            q: 'Ollamaを更新するとダウンロード済みのモデルは削除されますか？',
            a: 'いいえ。OllamaはLinuxとmacOSで <code>~/.ollama/models/</code> にモデルファイルを保存しており、アプリケーションバイナリとは別になっています。更新でそのディレクトリが変更されることはありません。更新後に新しいモデルを追加したい場合は、<a href="/ja/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">今おすすめのOllamaモデル</a>をご覧ください。',
          },
          {
            q: '更新時に複数のOllamaバージョンをスキップしても安全ですか？',
            a: 'はい。Ollamaインストーラーは、スキップしたバージョン数に関わらず、1ステップで常に最新バージョンに更新します。段階的な更新は不要です。',
          },
          {
            q: 'Ollamaを更新する際にインストール済みのモデルも更新が必要ですか？',
            a: 'いいえ。GGUFモデルファイルは前方互換性があります。古いOllamaバージョン用にダウンロードした同じファイルが、再ダウンロードなしで現在のバージョンで動作します。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Ollama',
    title: 'Ollama最新版本是什么？',
    seoTitle: 'Ollama 2026 最新版本查询 | Prompt Bites | PromptQuorum',
    metaDescription: '在GitHub查看最新Ollama版本。运行ollama --version检查已安装版本。Linux重新运行安装脚本，Mac/Windows从ollama.com重新下载安装程序。2026年5月更新。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    quickAnswerTop: {
      zh: {
        question: 'Ollama最新版本是什么？',
        answer: '访问ollama.com或Ollama GitHub发布页面查看当前版本。Linux运行安装脚本更新，Mac/Windows下载最新安装程序。',
        bullets: [
          '查看: github.com/ollama/ollama/releases 获取最新版本',
          'Linux更新: curl -fsSL https://ollama.com/install.sh | sh',
          'Mac/Windows: 从ollama.com重新下载安装程序',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '运行 <code>ollama --version</code> 查看已安装的版本，与GitHub发布页面进行比较',
          'Linux一键更新: <code>curl -fsSL https://ollama.com/install.sh | sh</code>',
          'Mac和Windows: 从ollama.com重新下载安装程序 — 无需命令行',
          '更新不会删除模型 — GGUF文件与Ollama二进制文件分开存储',
        ],
      },
      body1: {
        title: '在哪里查看Ollama版本',
        content: [
          '<strong>截至2026年5月，最新稳定版Ollama发布在github.com/ollama/ollama/releases — 该页面显示确切的版本号和发布说明。此页面每月更新 — 最后验证于2026年5月。</strong>',
          '在终端运行 <code>ollama --version</code> 查看已安装的版本。输出只有一行。如果GitHub发布页面显示更高的版本号，说明您的安装已过时。',
          '包括Llama 3.3和Qwen 3在内的新模型系列需要最低Ollama版本才能正确加载。最新版本还包括更快的GGUF加载和更好的多GPU上下文处理 — 日常使用中积累的改进效果明显。',
        ],
      },
      body2: {
        title: '如何安全更新Ollama',
        content: [
          '<strong>更新是安全的：下载的模型存储在单独的目录中，Ollama更新不会删除它们。</strong> 面向用户的REST API自版本0.1以来一直保持向后兼容。',
          '如果落后多个版本，更新前运行 <code>ollama list</code> 记录当前模型。不会出现问题，但这个30秒的步骤能消除大版本跳级前的不确定性。',
          '有关每个Ollama版本更改内容及受益模型系列的完整变更日志，请参阅<a href="/zh/local-llms/local-llm-model-updates-2026" class="text-primary hover:underline">2026年本地LLM模型更新指南</a>。',
        ],
        columns: ['平台', '更新方式', '备注'],
        rows: [
          { '平台': 'Linux', '更新方式': '运行安装脚本（一条命令）', '备注': '覆盖二进制文件，模型保留' },
          { '平台': 'macOS', '更新方式': '从ollama.com重新下载', '备注': '拖入Applications，模型保留' },
          { '平台': 'Windows', '更新方式': '从ollama.com重新下载.exe', '备注': '运行安装程序，模型保留' },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
        callouts: [{ type: 'info', text: '最后核实: 2026年5月。如果上述数据已过时,请查看Ollama的官方GitHub发布页面或模型库。' }],
      },
      faq: {
        id: 'faq',
        title: '关于Ollama更新的快速解答',
        faqs: [
          {
            q: '如何查看已安装的Ollama版本？',
            a: '在终端运行 <code>ollama --version</code>。它会在一行内输出版本号，例如 <code>ollama version 0.x.y</code>。',
          },
          {
            q: '更新Ollama会删除已下载的模型吗？',
            a: '不会。Ollama在Linux和macOS上将模型文件存储在 <code>~/.ollama/models/</code>，与应用程序二进制文件分开。更新不会触及该目录。如果更新后想添加新模型，请参阅<a href="/zh/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">当前最佳Ollama模型</a>。',
          },
          {
            q: '更新时跳过多个Ollama版本安全吗？',
            a: '安全。无论跳过多少版本，Ollama安装程序始终一步将您升级到最新版本。无需逐步更新。',
          },
          {
            q: '更新Ollama需要同时更新已安装的模型吗？',
            a: '不需要。GGUF模型文件具有前向兼容性。为旧版Ollama下载的同一文件无需重新下载即可在当前版本上运行。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Ollama',
    title: 'Qual é a versão mais recente do Ollama?',
    seoTitle: 'Versão mais recente do Ollama 2026 | PromptQuorum',
    metaDescription: 'Verifique a versão atual do Ollama no GitHub. Execute ollama --version. Linux: execute novamente o script de instalação; Mac/Windows: baixe em ollama.com.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    quickAnswerTop: {
      pt: {
        question: 'Qual é a versão mais recente do Ollama?',
        answer: 'Verifique ollama.com ou a página de lançamentos do GitHub do Ollama para a versão atual. No Linux, execute o script de instalação para atualizar. No Mac/Windows, baixe o instalador mais recente.',
        bullets: [
          'Verificar: github.com/ollama/ollama/releases para a versão mais recente',
          'Atualização no Linux: curl -fsSL https://ollama.com/install.sh | sh',
          'Mac/Windows: baixar novamente o instalador em ollama.com',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Execute <code>ollama --version</code> para ver sua versão instalada; compare com a página de lançamentos do GitHub',
          'Atualização no Linux com um único comando: <code>curl -fsSL https://ollama.com/install.sh | sh</code>',
          'Mac e Windows: baixe novamente o instalador em ollama.com — sem linha de comando',
          'As atualizações nunca excluem seus modelos — os arquivos GGUF são armazenados separadamente do binário do Ollama',
        ],
      },
      body1: {
        title: 'Onde verificar a versão do Ollama',
        content: [
          '<strong>Em maio de 2026, o lançamento estável mais recente do Ollama está listado em github.com/ollama/ollama/releases — essa página mostra o número exato da versão e as notas de lançamento. Esta página é atualizada mensalmente — última verificação em maio de 2026.</strong>',
          'Execute <code>ollama --version</code> em um terminal para ver sua versão instalada. A saída é uma única linha. Se a página de lançamentos do GitHub mostrar um número de versão mais alto, sua instalação está desatualizada.',
          'Novas famílias de modelos — incluindo Llama 3.3 e Qwen 3 — requerem uma versão mínima do Ollama para carregar corretamente. Lançamentos recentes também incluem carregamento GGUF mais rápido e melhor gerenciamento de contexto multi-GPU — melhorias que se acumulam no uso diário.',
        ],
      },
      body2: {
        title: 'Como atualizar o Ollama com segurança',
        content: [
          '<strong>A atualização é segura: seus modelos baixados são armazenados em um diretório separado e nunca são removidos por uma atualização do Ollama.</strong> A API REST voltada para o usuário manteve compatibilidade retroativa desde a versão 0.1.',
          'Se você estiver vários lançamentos atrasado, execute <code>ollama list</code> antes de atualizar para registrar seus modelos atuais. Nada quebrará, mas esse passo de 30 segundos elimina a incerteza antes de um salto de versão principal.',
          'Para um registro completo de mudanças de cada lançamento do Ollama e quais famílias de modelos se beneficiam, consulte o <a href="/pt/local-llms/local-llm-model-updates-2026" class="text-primary hover:underline">guia de atualizações de modelos LLM locais para 2026</a>.',
        ],
        columns: ['Plataforma', 'Método de atualização', 'Notas'],
        rows: [
          { 'Plataforma': 'Linux', 'Método de atualização': 'Executar script de instalação (um comando)', 'Notas': 'Substitui o binário, mantém os modelos' },
          { 'Plataforma': 'macOS', 'Método de atualização': 'Baixar novamente em ollama.com', 'Notas': 'Arraste para Aplicativos, modelos mantidos' },
          { 'Plataforma': 'Windows', 'Método de atualização': 'Baixar novamente o .exe em ollama.com', 'Notas': 'Execute o instalador, modelos mantidos' },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
        callouts: [{ type: 'info', text: 'Última verificação: maio de 2026. Se os dados acima parecerem desatualizados, consulte a página oficial de lançamentos do GitHub do Ollama ou a biblioteca de modelos.' }],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre atualizações do Ollama',
        faqs: [
          {
            q: 'Como posso verificar qual versão do Ollama tenho instalada?',
            a: 'Execute <code>ollama --version</code> em um terminal. Ele exibe seu número de compilação em uma linha, por exemplo <code>ollama version 0.x.y</code>.',
          },
          {
            q: 'Atualizar o Ollama excluirá meus modelos baixados?',
            a: 'Não. O Ollama armazena os arquivos de modelos em <code>~/.ollama/models/</code> no Linux e macOS, separados do binário do aplicativo. As atualizações nunca tocam nesse diretório. Consulte <a href="/pt/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">os melhores modelos do Ollama agora</a> se quiser adicionar novos após atualizar.',
          },
          {
            q: 'É seguro pular várias versões do Ollama ao atualizar?',
            a: 'Sim. O instalador do Ollama sempre leva você à versão mais recente em um único passo, independentemente de quantas versões você perdeu. Não são necessárias atualizações incrementais.',
          },
          {
            q: 'Atualizar o Ollama requer atualizar também os modelos instalados?',
            a: 'Não. Os arquivos de modelos GGUF são compatíveis para frente. Os mesmos arquivos que você baixou para uma versão mais antiga do Ollama funcionam na versão atual sem necessidade de baixar novamente.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Ollama',
    title: '¿Cuál es la versión más reciente de Ollama?',
    seoTitle: 'Versión más reciente de Ollama 2026 | PromptQuorum',
    metaDescription: 'Consulta la versión actual de Ollama en GitHub. Ejecuta ollama --version. Linux: relanza el script de instalación; Mac/Windows: descarga desde ollama.com.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    is_living_page: true,
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la versión más reciente de Ollama?',
        answer: 'Comprueba ollama.com o la página de lanzamientos de GitHub de Ollama para la versión actual. En Linux, ejecuta el script de instalación para actualizar. En Mac/Windows, descarga el instalador más reciente.',
        bullets: [
          'Comprobar: github.com/ollama/ollama/releases para la versión más reciente',
          'Actualización en Linux: curl -fsSL https://ollama.com/install.sh | sh',
          'Mac/Windows: volver a descargar el instalador desde ollama.com',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ejecuta <code>ollama --version</code> para ver tu versión instalada; compárala con la página de lanzamientos de GitHub',
          'Actualización en Linux con un solo comando: <code>curl -fsSL https://ollama.com/install.sh | sh</code>',
          'Mac y Windows: vuelve a descargar el instalador desde ollama.com — sin línea de comandos',
          'Las actualizaciones nunca eliminan tus modelos — los archivos GGUF se almacenan separados del binario de Ollama',
        ],
      },
      body1: {
        title: 'Dónde comprobar la versión de Ollama',
        content: [
          '<strong>A mayo de 2026, la última versión estable de Ollama está disponible en github.com/ollama/ollama/releases — esa página muestra el número de versión exacto y las notas de lanzamiento. Esta página se actualiza mensualmente — última verificación mayo 2026.</strong>',
          'Ejecuta <code>ollama --version</code> en una terminal para ver tu versión instalada. La salida es una sola línea. Si la página de lanzamientos de GitHub muestra un número de versión superior, tu instalación está desactualizada.',
          'Las nuevas familias de modelos — incluyendo Llama 3.3 y Qwen 3 — requieren una versión mínima de Ollama para cargarse correctamente. Los lanzamientos recientes también incluyen carga GGUF más rápida y mejor gestión de contexto multi-GPU — mejoras que se acumulan en el uso diario.',
        ],
      },
      body2: {
        title: 'Cómo actualizar Ollama de forma segura',
        content: [
          '<strong>La actualización es segura: tus modelos descargados se almacenan en un directorio separado y nunca son eliminados por una actualización de Ollama.</strong> La API REST para usuarios ha mantenido compatibilidad con versiones anteriores desde la versión 0.1.',
          'Si estás varios lanzamientos atrasado, ejecuta <code>ollama list</code> antes de actualizar para anotar tus modelos actuales. Nada se romperá, pero este paso de 30 segundos elimina la incertidumbre antes de un salto de versión mayor.',
          'Para un registro de cambios completo de cada lanzamiento de Ollama y qué familias de modelos se benefician, consulta la <a href="/es/local-llms/local-llm-model-updates-2026" class="text-primary hover:underline">guía de actualizaciones de modelos LLM locales para 2026</a>.',
        ],
        columns: ['Plataforma', 'Método de actualización', 'Notas'],
        rows: [
          { 'Plataforma': 'Linux', 'Método de actualización': 'Ejecutar script de instalación (un comando)', 'Notas': 'Sobrescribe el binario, conserva los modelos' },
          { 'Plataforma': 'macOS', 'Método de actualización': 'Volver a descargar desde ollama.com', 'Notas': 'Arrastra a Aplicaciones, modelos conservados' },
          { 'Plataforma': 'Windows', 'Método de actualización': 'Volver a descargar .exe desde ollama.com', 'Notas': 'Ejecuta el instalador, modelos conservados' },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
        callouts: [{ type: 'info', text: 'Última verificación: mayo 2026. Si los datos anteriores parecen desactualizados, consulta la página oficial de lanzamientos de GitHub de Ollama o la biblioteca de modelos.' }],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre las actualizaciones de Ollama',
        faqs: [
          {
            q: '¿Cómo puedo comprobar qué versión de Ollama tengo instalada?',
            a: 'Ejecuta <code>ollama --version</code> en una terminal. Muestra tu número de compilación en una línea, por ejemplo <code>ollama version 0.x.y</code>.',
          },
          {
            q: '¿Actualizar Ollama eliminará mis modelos descargados?',
            a: 'No. Ollama almacena los archivos de modelos en <code>~/.ollama/models/</code> en Linux y macOS, separados del binario de la aplicación. Las actualizaciones nunca tocan ese directorio. Consulta <a href="/es/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">los mejores modelos de Ollama ahora mismo</a> si deseas añadir nuevos tras actualizar.',
          },
          {
            q: '¿Es seguro omitir varias versiones de Ollama al actualizar?',
            a: 'Sí. El instalador de Ollama siempre te lleva a la versión más reciente en un solo paso, independientemente de cuántas versiones hayas omitido. No se requieren actualizaciones incrementales.',
          },
          {
            q: '¿Actualizar Ollama requiere actualizar también los modelos instalados?',
            a: 'No. Los archivos de modelos GGUF son compatibles hacia adelante. Los mismos archivos que descargaste para una versión antigua de Ollama funcionan con la versión actual sin necesidad de volver a descargarlos.',
          },
        ],
      },
    },
  },
}
