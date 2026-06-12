import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    title: 'Jan vs LM Studio: Which Is Better?',
    seoTitle: 'Jan vs LM Studio: Which to Use | Prompt Bites | PromptQuorum',
    metaDescription: 'Jan: open source, ~30 extensions. LM Studio: polished UI, larger library. For customization pick Jan; for ease, LM Studio. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing a local LLM desktop app',
    parentArticle: '/local-llms/lm-studio-vs-jan-ai',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Jan vs LM Studio: which is better?',
        answer: 'Jan is fully open source with an extension system. LM Studio has a more polished UI and a larger built-in model library. For power users who want customization, choose Jan. For ease of use, choose LM Studio.',
        bullets: [
          'Jan: open source, extensions, runs well on Linux',
          'LM Studio: polished UI, larger model library, better UX',
          'Both are free and work fully offline',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Jan vs LM Studio: Welches ist besser?',
        answer: 'Jan ist vollständig Open Source mit einem Erweiterungssystem. LM Studio hat eine ausgefeiltere Benutzeroberfläche und eine größere integrierte Modellbibliothek. Für Power-User, die Anpassbarkeit wünschen, empfiehlt sich Jan. Für einfache Bedienung ist LM Studio besser.',
        bullets: [
          'Jan: Open Source, Erweiterungen, läuft gut unter Linux',
          'LM Studio: ausgefeilte Oberfläche, größere Modellbibliothek, bessere Nutzererfahrung',
          'Beide sind kostenlos und funktionieren vollständig offline',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Jan vs LM Studio : lequel est le meilleur ?',
        answer: 'Jan est entièrement open source avec un système d\'extensions. LM Studio propose une interface plus soignée et une bibliothèque de modèles plus grande. Pour les utilisateurs avancés qui veulent de la personnalisation, choisissez Jan. Pour la facilité d\'utilisation, optez pour LM Studio.',
        bullets: [
          'Jan : open source, extensions, fonctionne bien sous Linux',
          'LM Studio : interface soignée, grande bibliothèque de modèles, meilleure UX',
          'Les deux sont gratuits et fonctionnent entièrement hors ligne',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Jan vs LM Studio：どちらが優れていますか？',
        answer: 'Janは拡張システムを備えた完全オープンソースです。LM Studioはより洗練されたUIと大規模な組み込みモデルライブラリを持ちます。カスタマイズを望むパワーユーザーにはJanを、使いやすさを求めるならLM Studioをお勧めします。',
        bullets: [
          'Jan：オープンソース、拡張機能、Linuxで良好に動作',
          'LM Studio：洗練されたUI、大規模モデルライブラリ、優れたUX',
          '両方とも無料で完全オフライン動作',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'Jan vs LM Studio：哪个更好？',
        answer: 'Jan 是完全开源的，具有扩展系统。LM Studio 拥有更精致的界面和更大的内置模型库。需要自定义的高级用户选 Jan；追求易用性选 LM Studio。',
        bullets: [
          'Jan：开源、支持扩展、在 Linux 上运行良好',
          'LM Studio：精致界面、更大模型库、更好的用户体验',
          '两者均免费且完全离线运行',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan is MIT-licensed and open source; LM Studio is proprietary but free to use for personal and commercial projects',
          'Jan supports all three OSes natively with both NVIDIA and AMD GPU acceleration; LM Studio is Mac and Windows only (Linux support is beta-only as of May 2026)',
          'LM Studio has a built-in model store with one-click downloads; Jan relies on third-party model sources like Hugging Face',
          'Both apps use GGUF format, include a local API server, and work fully offline — the choice is customization vs. polish',
        ],
      },
      body1: {
        title: 'The Open Source vs Polish Trade-off',
        content: [
          '<strong>Jan (github.com/janhq/jan) is MIT-licensed and fully open source — you can read, fork, and modify the code.</strong> LM Studio (lmstudio.ai) is proprietary software that is free to use but closed source. Jan ships an extension system that lets developers add custom functionality, a feature LM Studio does not offer.',
          'Real extension use cases include: connecting Jan to cloud APIs (OpenAI, Anthropic, Groq) for hybrid local/cloud workflows, adding custom prompt templates and chat presets, and integrating with external tools like Obsidian for note-taking. Around 30 community extensions exist as of May 2026.',
          'LM Studio\'s main advantage is its built-in model store. You can browse, preview, and download hundreds of GGUF models without leaving the app. Jan requires you to find models on Hugging Face or import them manually — more friction for users who just want to get started quickly.',
          'For developers who want to build on top of the application, Jan\'s open-source codebase and extension API are meaningful advantages. For everyone else, the choice comes down to which workflow matches your daily use.',
        ],
      },
      body2: {
        title: 'Which Fits Your Workflow',
        content: [
          '<strong>Use Jan if you want to extend the app, run it on Linux, or need AMD GPU support.</strong> Use LM Studio if you want a polished experience with a built-in model library and do not need customization.',
          'For the full comparison with setup steps and API details, see the <a href="/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">Jan vs LM Studio in-depth guide</a>.',
        ],
        columns: ['Feature', 'Jan', 'LM Studio'],
        rows: [
          { 'Feature': 'License', 'Jan': 'MIT (open source)', 'LM Studio': 'Proprietary (free)' },
          { 'Feature': 'OS support', 'Jan': 'Mac / Windows / Linux', 'LM Studio': 'Mac / Windows' },
          { 'Feature': 'GPU backends', 'Jan': 'NVIDIA + AMD', 'LM Studio': 'NVIDIA only' },
          { 'Feature': 'Model library', 'Jan': '3rd-party (Hugging Face)', 'LM Studio': 'Built-in store' },
          { 'Feature': 'Best for', 'Jan': 'Customization / extensibility', 'LM Studio': 'Ease of use / model variety' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Jan vs LM Studio',
        faqs: [
          {
            q: 'Is Jan really free?',
            a: 'Yes. Jan is MIT-licensed open source software. There are no paid tiers, no telemetry by default, and the full source code is on GitHub at github.com/janhq/jan.',
          },
          {
            q: 'Does LM Studio work on Linux?',
            a: 'LM Studio does not have an official stable Linux release. It runs on Mac and Windows. Linux users should use Jan, Ollama, or Open WebUI instead.',
          },
          {
            q: 'Can both Jan and LM Studio use AMD GPUs?',
            a: 'Jan supports AMD GPU acceleration via ROCm on Linux. LM Studio supports NVIDIA only on Windows (no stable Linux release). On macOS, Apple Metal handles GPU acceleration for both apps regardless of GPU brand. For a terminal-based alternative on any OS, see <a href="/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
          {
            q: 'Which app has a larger model library?',
            a: 'LM Studio has a larger built-in model store with curated GGUF models you can browse and download in one click. Jan requires importing models from Hugging Face or another source.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    title: 'Jan vs LM Studio: Welches ist besser?',
    seoTitle: 'Jan vs LM Studio: Was wählen? | Prompt Bites | PromptQuorum',
    metaDescription: 'Jan: Open Source, ~30 Erweiterungen. LM Studio: ausgefeiltere UI, mehr Modelle. Anpassung: Jan, einfache Nutzung: LM Studio. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Jan vs LM Studio: Welches ist besser?',
        answer: 'Jan ist vollständig Open Source mit einem Erweiterungssystem. LM Studio hat eine ausgefeiltere Benutzeroberfläche und eine größere integrierte Modellbibliothek. Für Power-User, die Anpassbarkeit wünschen, empfiehlt sich Jan. Für einfache Bedienung ist LM Studio besser.',
        bullets: [
          'Jan: Open Source, Erweiterungen, läuft gut unter Linux',
          'LM Studio: ausgefeilte Oberfläche, größere Modellbibliothek, bessere Nutzererfahrung',
          'Beide sind kostenlos und funktionieren vollständig offline',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan ist MIT-lizenziert und Open Source; LM Studio ist proprietär, aber für persönliche und kommerzielle Projekte kostenlos nutzbar',
          'Jan unterstützt alle drei Betriebssysteme nativ mit NVIDIA- und AMD-GPU-Beschleunigung; LM Studio ist nur für Mac und Windows verfügbar (Linux-Unterstützung ist Stand Mai 2026 nur als Beta)',
          'LM Studio verfügt über einen integrierten Modellshop mit Ein-Klick-Downloads; Jan setzt auf Drittanbieterquellen wie Hugging Face',
          'Beide Apps nutzen das GGUF-Format, enthalten einen lokalen API-Server und arbeiten vollständig offline — die Wahl liegt zwischen Anpassbarkeit und Komfort',
        ],
      },
      body1: {
        title: 'Open Source vs. Komfort: Der Kompromiss',
        content: [
          '<strong>Jan (github.com/janhq/jan) ist MIT-lizenziert und vollständig Open Source — Sie können den Code lesen, forken und verändern.</strong> LM Studio (lmstudio.ai) ist proprietäre Software, die kostenlos nutzbar, aber closed source ist. Jan verfügt über ein Erweiterungssystem, mit dem Entwickler benutzerdefinierte Funktionen hinzufügen können — eine Funktion, die LM Studio nicht bietet.',
          'Konkrete Anwendungsfälle für Erweiterungen: Jan mit Cloud-APIs (OpenAI, Anthropic, Groq) für hybride lokale/Cloud-Workflows verbinden, benutzerdefinierte Prompt-Vorlagen und Chat-Presets hinzufügen, sowie die Integration mit externen Tools wie Obsidian für Notizen. Stand Mai 2026 gibt es rund 30 Community-Erweiterungen.',
          'Der Hauptvorteil von LM Studio ist sein integrierter Modellshop. Sie können Hunderte von GGUF-Modellen durchsuchen, in der Vorschau anzeigen und herunterladen, ohne die App zu verlassen. Bei Jan müssen Sie Modelle auf Hugging Face suchen oder manuell importieren — mehr Aufwand für Nutzer, die schnell loslegen möchten.',
          'Für Entwickler, die auf der Anwendung aufbauen möchten, sind Jans Open-Source-Codebase und die Extension-API bedeutende Vorteile. Für alle anderen hängt die Wahl davon ab, welcher Workflow zum täglichen Einsatz passt.',
        ],
      },
      body2: {
        title: 'Was zu Ihrem Workflow passt',
        content: [
          '<strong>Nutzen Sie Jan, wenn Sie die App erweitern, unter Linux betreiben oder AMD-GPU-Unterstützung benötigen.</strong> Nutzen Sie LM Studio, wenn Sie ein ausgereiftes Erlebnis mit einer integrierten Modellbibliothek wünschen und keine Anpassungen benötigen.',
          'Den vollständigen Vergleich mit Einrichtungsschritten und API-Details finden Sie im <a href="/de/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">Jan vs LM Studio Vertiefungsvergleich</a>.',
        ],
        columns: ['Funktion', 'Jan', 'LM Studio'],
        rows: [
          { 'Funktion': 'Lizenz', 'Jan': 'MIT (Open Source)', 'LM Studio': 'Proprietär (kostenlos)' },
          { 'Funktion': 'Betriebssystem', 'Jan': 'Mac / Windows / Linux', 'LM Studio': 'Mac / Windows' },
          { 'Funktion': 'GPU-Backends', 'Jan': 'NVIDIA + AMD', 'LM Studio': 'Nur NVIDIA' },
          { 'Funktion': 'Modellbibliothek', 'Jan': 'Drittanbieter (Hugging Face)', 'LM Studio': 'Integrierter Shop' },
          { 'Funktion': 'Am besten für', 'Jan': 'Anpassbarkeit / Erweiterbarkeit', 'LM Studio': 'Bedienkomfort / Modellvielfalt' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Jan vs LM Studio',
        faqs: [
          {
            q: 'Ist Jan wirklich kostenlos?',
            a: 'Ja. Jan ist MIT-lizenzierte Open-Source-Software. Es gibt keine kostenpflichtigen Stufen, standardmäßig keine Telemetrie, und der vollständige Quellcode ist auf GitHub unter github.com/janhq/jan verfügbar.',
          },
          {
            q: 'Funktioniert LM Studio unter Linux?',
            a: 'LM Studio hat kein offizielles stabiles Linux-Release. Es läuft auf Mac und Windows. Linux-Nutzer sollten stattdessen Jan, Ollama oder Open WebUI verwenden.',
          },
          {
            q: 'Können sowohl Jan als auch LM Studio AMD-GPUs nutzen?',
            a: 'Jan unterstützt AMD-GPU-Beschleunigung via ROCm unter Linux. LM Studio unterstützt nur NVIDIA unter Windows (kein stabiles Linux-Release). Auf macOS übernimmt Apple Metal die GPU-Beschleunigung für beide Apps, unabhängig von der GPU-Marke. Eine terminalbasierte Alternative für jedes Betriebssystem finden Sie bei <a href="/de/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
          {
            q: 'Welche App hat die größere Modellbibliothek?',
            a: 'LM Studio hat einen größeren integrierten Modellshop mit kuratierten GGUF-Modellen, die Sie mit einem Klick durchsuchen und herunterladen können. Bei Jan müssen Sie Modelle von Hugging Face oder einer anderen Quelle importieren.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    title: 'Jan vs LM Studio : lequel est le meilleur ?',
    seoTitle: 'Jan ou LM Studio 2026 ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Jan : open source, ~30 extensions. LM Studio : interface soignée, plus de modèles. Personnalisation : Jan. Facilité : LM Studio. Réponse rapide de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Jan vs LM Studio : lequel est le meilleur ?',
        answer: 'Jan est entièrement open source avec un système d\'extensions. LM Studio propose une interface plus soignée et une bibliothèque de modèles plus grande. Pour les utilisateurs avancés qui veulent de la personnalisation, choisissez Jan. Pour la facilité d\'utilisation, optez pour LM Studio.',
        bullets: [
          'Jan : open source, extensions, fonctionne bien sous Linux',
          'LM Studio : interface soignée, grande bibliothèque de modèles, meilleure UX',
          'Les deux sont gratuits et fonctionnent entièrement hors ligne',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan est sous licence MIT et open source ; LM Studio est propriétaire mais gratuit pour les projets personnels et commerciaux',
          'Jan prend en charge les trois OS nativement avec l\'accélération GPU NVIDIA et AMD ; LM Studio est réservé à Mac et Windows (le support Linux est en bêta uniquement en mai 2026)',
          'LM Studio dispose d\'un magasin de modèles intégré avec téléchargements en un clic ; Jan s\'appuie sur des sources tierces comme Hugging Face',
          'Les deux apps utilisent le format GGUF, incluent un serveur API local et fonctionnent hors ligne — le choix se fait entre personnalisation et ergonomie',
        ],
      },
      body1: {
        title: 'Open source vs ergonomie : le compromis',
        content: [
          '<strong>Jan (github.com/janhq/jan) est sous licence MIT et entièrement open source — vous pouvez lire, forker et modifier le code.</strong> LM Studio (lmstudio.ai) est un logiciel propriétaire gratuit mais à source fermée. Jan propose un système d\'extensions permettant aux développeurs d\'ajouter des fonctionnalités personnalisées — une fonctionnalité absente de LM Studio.',
          'Cas d\'usage concrets des extensions : connecter Jan à des API cloud (OpenAI, Anthropic, Groq) pour des workflows hybrides local/cloud, ajouter des modèles de prompt et des préréglages de chat personnalisés, et s\'intégrer à des outils externes comme Obsidian pour la prise de notes. Environ 30 extensions communautaires existent en mai 2026.',
          'Le principal avantage de LM Studio est son magasin de modèles intégré. Vous pouvez parcourir, prévisualiser et télécharger des centaines de modèles GGUF sans quitter l\'application. Jan nécessite de trouver des modèles sur Hugging Face ou de les importer manuellement — plus de friction pour les utilisateurs qui veulent démarrer rapidement.',
          'Pour les développeurs souhaitant construire sur l\'application, la base de code open source de Jan et son API d\'extension constituent des avantages significatifs. Pour les autres, le choix dépend du workflow qui correspond à votre usage quotidien.',
        ],
      },
      body2: {
        title: 'Ce qui correspond à votre workflow',
        content: [
          '<strong>Utilisez Jan si vous souhaitez étendre l\'application, l\'exécuter sous Linux ou avoir besoin du support AMD GPU.</strong> Utilisez LM Studio si vous souhaitez une expérience soignée avec une bibliothèque de modèles intégrée et n\'avez pas besoin de personnalisation.',
          'Pour la comparaison complète avec les étapes de configuration et les détails de l\'API, consultez le <a href="/fr/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">guide approfondi Jan vs LM Studio</a>.',
        ],
        columns: ['Fonctionnalité', 'Jan', 'LM Studio'],
        rows: [
          { 'Fonctionnalité': 'Licence', 'Jan': 'MIT (open source)', 'LM Studio': 'Propriétaire (gratuit)' },
          { 'Fonctionnalité': 'Support OS', 'Jan': 'Mac / Windows / Linux', 'LM Studio': 'Mac / Windows' },
          { 'Fonctionnalité': 'Backends GPU', 'Jan': 'NVIDIA + AMD', 'LM Studio': 'NVIDIA uniquement' },
          { 'Fonctionnalité': 'Bibliothèque de modèles', 'Jan': 'Tiers (Hugging Face)', 'LM Studio': 'Magasin intégré' },
          { 'Fonctionnalité': 'Idéal pour', 'Jan': 'Personnalisation / extensibilité', 'LM Studio': 'Facilité d\'utilisation / variété de modèles' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Jan vs LM Studio',
        faqs: [
          {
            q: 'Jan est-il vraiment gratuit ?',
            a: 'Oui. Jan est un logiciel open source sous licence MIT. Il n\'y a pas de niveaux payants, pas de télémétrie par défaut, et le code source complet est disponible sur GitHub à github.com/janhq/jan.',
          },
          {
            q: 'LM Studio fonctionne-t-il sous Linux ?',
            a: 'LM Studio ne dispose pas de version Linux stable officielle. Il fonctionne sur Mac et Windows. Les utilisateurs Linux devraient utiliser Jan, Ollama ou Open WebUI à la place.',
          },
          {
            q: 'Jan et LM Studio peuvent-ils tous deux utiliser des GPU AMD ?',
            a: 'Jan prend en charge l\'accélération GPU AMD via ROCm sous Linux. LM Studio ne supporte que NVIDIA sous Windows (pas de version Linux stable). Sur macOS, Apple Metal gère l\'accélération GPU pour les deux applications quelle que soit la marque de GPU. Pour une alternative en ligne de commande sur n\'importe quel OS, consultez <a href="/fr/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
          {
            q: 'Quelle application dispose d\'une plus grande bibliothèque de modèles ?',
            a: 'LM Studio dispose d\'un magasin de modèles intégré plus grand avec des modèles GGUF sélectionnés que vous pouvez parcourir et télécharger en un clic. Jan nécessite d\'importer des modèles depuis Hugging Face ou une autre source.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    title: 'Jan vs LM Studio：どちらが優れていますか？',
    seoTitle: 'Jan vs LM Studio：どちらを使う？ | Prompt Bites | PromptQuorum',
    metaDescription: 'Janは拡張機能付きの完全オープンソースです。LM Studioはより洗練されたUIと大規模なモデルライブラリを持ちます。カスタマイズにはJan、使いやすさにはLM Studio。PromptQuorumによる簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'Jan vs LM Studio：どちらが優れていますか？',
        answer: 'Janは拡張システムを備えた完全オープンソースです。LM Studioはより洗練されたUIと大規模な組み込みモデルライブラリを持ちます。カスタマイズを望むパワーユーザーにはJanを、使いやすさを求めるならLM Studioをお勧めします。',
        bullets: [
          'Jan：オープンソース、拡張機能、Linuxで良好に動作',
          'LM Studio：洗練されたUI、大規模モデルライブラリ、優れたUX',
          '両方とも無料で完全オフライン動作',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'JanはMITライセンスのオープンソース；LM Studioは個人・商用プロジェクト向けに無料の独自ソフトウェア',
          'Janは3つのOSすべてをネイティブサポートし、NVIDIAとAMD両方のGPUアクセラレーションに対応；LM StudioはMacとWindowsのみ（Linux対応は2026年5月時点でベータのみ）',
          'LM Studioにはワンクリックダウンロード付きの組み込みモデルストアがある；JanはHugging Faceなどのサードパーティソースを使用',
          '両アプリともGGUF形式、ローカルAPIサーバー、完全オフライン動作に対応 — 選択はカスタマイズ性か使いやすさか',
        ],
      },
      body1: {
        title: 'オープンソース vs 使いやすさ：トレードオフ',
        content: [
          '<strong>Jan（github.com/janhq/jan）はMITライセンスの完全オープンソースで、コードの読み込み、フォーク、変更が可能です。</strong> LM Studio（lmstudio.ai）は無料で使用できる独自ソフトウェアですが、クローズドソースです。Janはカスタム機能を追加できる拡張システムを搭載しており、LM Studioにはこの機能がありません。',
          '拡張機能の具体的な使用例：Jan をクラウドAPI（OpenAI、Anthropic、Groq）に接続してローカル/クラウドのハイブリッドワークフローを実現する、カスタムプロンプトテンプレートとチャットプリセットを追加する、Obsidianなどの外部ツールとメモ連携する。2026年5月時点で約30のコミュニティ拡張機能が存在します。',
          'LM Studioの主な利点は組み込みのモデルストアです。アプリを離れることなく数百のGGUFモデルを閲覧、プレビュー、ダウンロードできます。JanはHugging Faceでモデルを探すか手動でインポートする必要があり、すぐに使い始めたいユーザーにとっては手間がかかります。',
          'アプリケーション上に構築したいデベロッパーにとって、JanのオープンソースコードベースとExtension APIは大きな利点です。それ以外の人にとっては、どちらのワークフローが日常利用に合うかが選択の基準となります。',
        ],
      },
      body2: {
        title: 'あなたのワークフローに合うのはどちら',
        content: [
          '<strong>アプリを拡張したい、Linuxで動かしたい、またはAMD GPUサポートが必要な場合はJanを使用してください。</strong> 組み込みモデルライブラリを備えた洗練されたエクスペリエンスを求め、カスタマイズが不要な場合はLM Studioを使用してください。',
          'セットアップ手順やAPIの詳細を含む完全な比較については、<a href="/ja/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">Jan vs LM Studio 詳細ガイド</a>をご覧ください。',
        ],
        columns: ['機能', 'Jan', 'LM Studio'],
        rows: [
          { '機能': 'ライセンス', 'Jan': 'MIT（オープンソース）', 'LM Studio': '独自（無料）' },
          { '機能': 'OS対応', 'Jan': 'Mac / Windows / Linux', 'LM Studio': 'Mac / Windows' },
          { '機能': 'GPUバックエンド', 'Jan': 'NVIDIA + AMD', 'LM Studio': 'NVIDIAのみ' },
          { '機能': 'モデルライブラリ', 'Jan': 'サードパーティ（Hugging Face）', 'LM Studio': '組み込みストア' },
          { '機能': '最適な用途', 'Jan': 'カスタマイズ / 拡張性', 'LM Studio': '使いやすさ / モデルの多様性' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Jan vs LM Studioに関するよくある質問',
        faqs: [
          {
            q: 'Janは本当に無料ですか？',
            a: 'はい。JanはMITライセンスのオープンソースソフトウェアです。有料プランはなく、デフォルトでテレメトリーもなく、完全なソースコードはgithub.com/janhq/janで公開されています。',
          },
          {
            q: 'LM StudioはLinuxで動作しますか？',
            a: 'LM Studioには公式の安定版Linuxリリースがありません。MacとWindowsで動作します。Linuxユーザーは代わりにJan、Ollama、またはOpen WebUIを使用してください。',
          },
          {
            q: 'JanとLM StudioはどちらもAMD GPUを使用できますか？',
            a: 'JanはLinux上でROCm経由のAMD GPUアクセラレーションをサポートします。LM StudioはWindows上でNVIDIAのみをサポートします（安定版Linuxリリースなし）。macOS上ではApple MetalがGPUブランドに関わらず両アプリのGPUアクセラレーションを処理します。あらゆるOSでのターミナルベースの代替手段については、<a href="/ja/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>をご覧ください。',
          },
          {
            q: 'どちらのアプリのモデルライブラリが大きいですか？',
            a: 'LM Studioにはワンクリックで閲覧・ダウンロードできるキュレーションされたGGUFモデルを持つ大規模な組み込みモデルストアがあります。JanはモデルをHugging Faceか別のソースからインポートする必要があります。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    title: 'Jan vs LM Studio：哪个更好？',
    seoTitle: 'Jan vs LM Studio：哪个更好？ | Prompt Bites | PromptQuorum',
    metaDescription: 'Jan 是完全开源的，支持扩展。LM Studio 界面更精致，模型库更大。需要自定义选 Jan；追求易用性选 LM Studio。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: 'Jan vs LM Studio：哪个更好？',
        answer: 'Jan 是完全开源的，具有扩展系统。LM Studio 拥有更精致的界面和更大的内置模型库。需要自定义的高级用户选 Jan；追求易用性选 LM Studio。',
        bullets: [
          'Jan：开源、支持扩展、在 Linux 上运行良好',
          'LM Studio：精致界面、更大模型库、更好的用户体验',
          '两者均免费且完全离线运行',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan 采用 MIT 许可证开源；LM Studio 是专有软件但个人和商业项目均可免费使用',
          'Jan 原生支持全部三个操作系统，并支持 NVIDIA 和 AMD GPU 加速；LM Studio 仅支持 Mac 和 Windows（截至 2026 年 5 月，Linux 支持仅为测试版）',
          'LM Studio 有内置模型商店，支持一键下载；Jan 依赖 Hugging Face 等第三方来源',
          '两款应用均使用 GGUF 格式，内置本地 API 服务器，完全离线运行——选择取决于定制性还是易用性',
        ],
      },
      body1: {
        title: '开源 vs 易用性：权衡取舍',
        content: [
          '<strong>Jan（github.com/janhq/jan）采用 MIT 许可证完全开源——您可以阅读、fork 并修改代码。</strong> LM Studio（lmstudio.ai）是免费使用的专有软件，但为闭源。Jan 具有扩展系统，允许开发者添加自定义功能——这是 LM Studio 没有的功能。',
          '扩展的实际使用场景包括：将 Jan 连接到云 API（OpenAI、Anthropic、Groq）实现本地/云混合工作流、添加自定义提示模板和聊天预设，以及与 Obsidian 等外部笔记工具集成。截至 2026 年 5 月，约有 30 个社区扩展可用。',
          'LM Studio 的主要优势是其内置模型商店。您可以在不离开应用的情况下浏览、预览和下载数百个 GGUF 模型。Jan 则需要在 Hugging Face 上查找模型或手动导入，对希望快速上手的用户来说增加了摩擦。',
          '对于希望在应用基础上进行开发的开发者来说，Jan 的开源代码库和扩展 API 是重要优势。对其他用户来说，选择取决于哪种工作流更符合日常使用习惯。',
        ],
      },
      body2: {
        title: '哪款应用适合您的工作流',
        content: [
          '<strong>如果您想扩展应用、在 Linux 上运行或需要 AMD GPU 支持，请使用 Jan。</strong> 如果您想要精致的使用体验和内置模型库且无需自定义，请使用 LM Studio。',
          '有关包含安装步骤和 API 详情的完整对比，请参阅 <a href="/zh/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">Jan vs LM Studio 深度指南</a>。',
        ],
        columns: ['功能', 'Jan', 'LM Studio'],
        rows: [
          { '功能': '许可证', 'Jan': 'MIT（开源）', 'LM Studio': '专有（免费）' },
          { '功能': '操作系统支持', 'Jan': 'Mac / Windows / Linux', 'LM Studio': 'Mac / Windows' },
          { '功能': 'GPU 后端', 'Jan': 'NVIDIA + AMD', 'LM Studio': '仅 NVIDIA' },
          { '功能': '模型库', 'Jan': '第三方（Hugging Face）', 'LM Studio': '内置商店' },
          { '功能': '最适合', 'Jan': '自定义 / 可扩展性', 'LM Studio': '易用性 / 模型多样性' },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 Jan vs LM Studio 的快速解答',
        faqs: [
          {
            q: 'Jan 真的免费吗？',
            a: '是的。Jan 是 MIT 许可证的开源软件。没有付费层级，默认无遥测，完整源代码在 GitHub 上的 github.com/janhq/jan 可获取。',
          },
          {
            q: 'LM Studio 在 Linux 上能用吗？',
            a: 'LM Studio 没有官方稳定的 Linux 版本。它在 Mac 和 Windows 上运行。Linux 用户应改用 Jan、Ollama 或 Open WebUI。',
          },
          {
            q: 'Jan 和 LM Studio 都能使用 AMD GPU 吗？',
            a: 'Jan 在 Linux 上通过 ROCm 支持 AMD GPU 加速。LM Studio 在 Windows 上仅支持 NVIDIA（无稳定 Linux 版本）。在 macOS 上，Apple Metal 为两款应用处理 GPU 加速，与 GPU 品牌无关。如需在任意操作系统上使用基于终端的替代方案，请参阅 <a href="/zh/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>。',
          },
          {
            q: '哪款应用的模型库更大？',
            a: 'LM Studio 拥有更大的内置模型商店，提供精选的 GGUF 模型，可一键浏览和下载。Jan 需要从 Hugging Face 或其他来源导入模型。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Tool Comparisons',
    title: 'Jan vs LM Studio: Qual é melhor?',
    seoTitle: 'Jan vs LM Studio: Qual usar | Prompt Bites | PromptQuorum',
    metaDescription: 'Jan: código aberto, ~30 extensões. LM Studio: interface mais refinada e biblioteca maior. Para personalização escolha Jan; para facilidade, LM Studio. Resposta rápida.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores escolhendo um aplicativo desktop para LLMs locais',
    parentArticle: '/local-llms/lm-studio-vs-jan-ai',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'Jan vs LM Studio: qual é melhor?',
        answer: 'Jan é completamente código aberto com um sistema de extensões. LM Studio tem uma interface mais refinada e uma biblioteca de modelos integrada maior. Para usuários avançados que querem personalização, escolha Jan. Para facilidade de uso, escolha LM Studio.',
        bullets: [
          'Jan: código aberto, extensões, funciona bem no Linux',
          'LM Studio: interface refinada, biblioteca de modelos maior, melhor UX',
          'Ambos são gratuitos e funcionam completamente offline',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan é licenciado sob MIT e código aberto; LM Studio é proprietário, mas gratuito para projetos pessoais e comerciais',
          'Jan suporta os três sistemas operacionais nativamente com aceleração GPU NVIDIA e AMD; LM Studio é apenas Mac e Windows (suporte Linux está apenas em beta a partir de maio de 2026)',
          'LM Studio tem uma loja de modelos integrada com downloads em um clique; Jan depende de fontes de modelos de terceiros como Hugging Face',
          'Ambos os apps usam o formato GGUF, incluem um servidor API local e funcionam completamente offline — a escolha é personalização vs. refinamento',
        ],
      },
      body1: {
        title: 'O dilema: código aberto vs. refinamento',
        content: [
          '<strong>Jan (github.com/janhq/jan) tem licença MIT e é completamente código aberto — você pode ler, fazer fork e modificar o código.</strong> LM Studio (lmstudio.ai) é software proprietário que é gratuito, mas de código fechado. Jan inclui um sistema de extensões que permite aos desenvolvedores adicionar funcionalidades personalizadas, recurso que o LM Studio não oferece.',
          'Casos de uso reais de extensões incluem: conectar Jan a APIs em nuvem (OpenAI, Anthropic, Groq) para fluxos de trabalho híbridos local/nuvem, adicionar modelos de prompt personalizados e predefinições de chat, e integrar com ferramentas externas como o Obsidian para anotações. Cerca de 30 extensões comunitárias existem a partir de maio de 2026.',
          'A principal vantagem do LM Studio é sua loja de modelos integrada. Você pode navegar, visualizar e baixar centenas de modelos GGUF sem sair do app. Jan exige que você encontre modelos no Hugging Face ou os importe manualmente — mais atrito para usuários que só querem começar rapidamente.',
          'Para desenvolvedores que querem construir sobre a aplicação, a base de código aberto do Jan e a API de extensões são vantagens significativas. Para todos os outros, a escolha depende de qual fluxo de trabalho combina com seu uso diário.',
        ],
      },
      body2: {
        title: 'Qual se adapta ao seu fluxo de trabalho',
        content: [
          '<strong>Use Jan se quiser estender o app, executá-lo no Linux ou precisar de suporte a GPU AMD.</strong> Use LM Studio se quiser uma experiência refinada com uma biblioteca de modelos integrada e não precisar de personalização.',
          'Para a comparação completa com etapas de configuração e detalhes da API, consulte o <a href="/pt/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">guia aprofundado Jan vs LM Studio</a>.',
        ],
        columns: ['Característica', 'Jan', 'LM Studio'],
        rows: [
          { 'Característica': 'Licença', 'Jan': 'MIT (código aberto)', 'LM Studio': 'Proprietário (gratuito)' },
          { 'Característica': 'Extensões', 'Jan': '~30 disponíveis', 'LM Studio': 'Não' },
          { 'Característica': 'Sistemas operacionais', 'Jan': 'Mac, Windows, Linux', 'LM Studio': 'Mac, Windows (Linux beta)' },
          { 'Característica': 'Backend GPU', 'Jan': 'NVIDIA + AMD', 'LM Studio': 'Apenas NVIDIA' },
          { 'Característica': 'Biblioteca de modelos', 'Jan': 'Terceiros (Hugging Face)', 'LM Studio': 'Loja integrada' },
          { 'Característica': 'Melhor para', 'Jan': 'Personalização / Extensibilidade', 'LM Studio': 'Facilidade / Variedade de modelos' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre Jan vs LM Studio',
        faqs: [
          {
            q: 'Jan é realmente gratuito?',
            a: 'Sim. Jan é software de código aberto com licença MIT. Não há níveis pagos, sem telemetria por padrão, e o código-fonte completo está disponível no GitHub em github.com/janhq/jan.',
          },
          {
            q: 'LM Studio funciona no Linux?',
            a: 'LM Studio não tem uma versão Linux estável oficial. Funciona no Mac e Windows. Usuários Linux devem usar Jan, Ollama ou Open WebUI.',
          },
          {
            q: 'Tanto Jan quanto LM Studio podem usar GPUs AMD?',
            a: 'Jan suporta aceleração GPU AMD via ROCm no Linux. LM Studio suporta apenas NVIDIA no Windows (sem versão Linux estável). No macOS, o Apple Metal cuida da aceleração GPU para ambos os apps, independentemente da marca da GPU. Para uma alternativa baseada em terminal em qualquer SO, veja <a href="/pt/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
          {
            q: 'Qual app tem uma biblioteca de modelos maior?',
            a: 'LM Studio tem uma loja de modelos integrada maior com modelos GGUF curados que você pode navegar e baixar com um clique. Jan exige importar modelos do Hugging Face ou de outra fonte.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    title: '¿Jan vs LM Studio: Cuál es mejor?',
    seoTitle: 'Jan vs LM Studio: Cuál usar | Prompt Bites | PromptQuorum',
    metaDescription: 'Jan: open source, ~30 extensiones. LM Studio: interfaz pulida y librería más grande. Para personalizar elige Jan; para facilidad, LM Studio. Respuesta rápida.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermedio',
    audience: 'Desarrolladores eligiendo una app de escritorio para LLMs locales',
    parentArticle: '/local-llms/lm-studio-vs-jan-ai',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Jan vs LM Studio: cuál es mejor?',
        answer: 'Jan es completamente código abierto con un sistema de extensiones. LM Studio tiene una interfaz más pulida y una librería de modelos integrada más grande. Para usuarios avanzados que quieren personalización, elige Jan. Para facilidad de uso, elige LM Studio.',
        bullets: [
          'Jan: código abierto, extensiones, funciona bien en Linux',
          'LM Studio: interfaz pulida, librería de modelos más grande, mejor UX',
          'Ambos son gratuitos y funcionan completamente sin conexión',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan es licenciado bajo MIT y código abierto; LM Studio es propietario pero gratuito para proyectos personales y comerciales',
          'Jan soporta los tres sistemas operativos nativamente con aceleración GPU NVIDIA y AMD; LM Studio es solo Mac y Windows (soporte Linux es beta-only a partir de mayo 2026)',
          'LM Studio tiene una tienda de modelos integrada con descargas de un clic; Jan depende de fuentes de modelos de terceros como Hugging Face',
          'Ambas apps usan formato GGUF, incluyen servidor API local, y funcionan completamente sin conexión — la elección es personalización vs. pulido',
        ],
      },
      body1: {
        title: 'El dilema: código abierto vs. pulido',
        content: [
          '<strong>Jan (github.com/janhq/jan) tiene licencia MIT y es completamente código abierto — puedes leer, hacer fork y modificar el código.</strong> LM Studio (lmstudio.ai) es software propietario que es gratuito pero cerrado. Jan incluye un sistema de extensiones que permite a los desarrolladores agregar funcionalidad personalizada, característica que LM Studio no ofrece.',
          'Los casos de uso reales de extensiones incluyen: conectar Jan a APIs en la nube (OpenAI, Anthropic, Groq) para flujos de trabajo híbridos local/nube, agregar plantillas de prompt personalizadas y presets de chat, e integrar con herramientas externas como Obsidian para tomar notas. Alrededor de 30 extensiones comunitarias existen a partir de mayo 2026.',
          'La ventaja principal de LM Studio es su tienda de modelos integrada. Puedes explorar, previsualizar y descargar cientos de modelos GGUF sin salir de la app. Jan requiere que encuentres modelos en Hugging Face o los importes manualmente — más fricción para usuarios que solo quieren empezar rápidamente.',
          'Para desarrolladores que quieren construir sobre la aplicación, la base de código de código abierto de Jan y su API de extensiones son ventajas significativas. Para todos los demás, la elección depende del flujo de trabajo que coincida con tu uso diario.',
        ],
      },
      body2: {
        title: 'Cuál se adapta a tu flujo de trabajo',
        content: [
          '<strong>Usa Jan si quieres extender la app, ejecutarla en Linux, o necesitas soporte para GPU AMD.</strong> Usa LM Studio si quieres una experiencia pulida con una librería de modelos integrada y no necesitas personalización.',
          'Para la comparación completa con pasos de instalación y detalles de API, consulta la <a href="/es/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">guía en profundidad de Jan vs LM Studio</a>.',
        ],
        columns: ['Característica', 'Jan', 'LM Studio'],
        rows: [
          { 'Característica': 'Licencia', 'Jan': 'MIT (código abierto)', 'LM Studio': 'Propietario (gratuito)' },
          { 'Característica': 'Extensiones', 'Jan': '~30 disponibles', 'LM Studio': 'No' },
          { 'Característica': 'Sistemas operativos', 'Jan': 'Mac, Windows, Linux', 'LM Studio': 'Mac, Windows (Linux beta)' },
          { 'Característica': 'Backend GPU', 'Jan': 'NVIDIA + AMD', 'LM Studio': 'Solo NVIDIA' },
          { 'Característica': 'Librería de modelos', 'Jan': 'Terceros (Hugging Face)', 'LM Studio': 'Tienda integrada' },
          { 'Característica': 'Mejor para', 'Jan': 'Personalización / Extensibilidad', 'LM Studio': 'Facilidad / Variedad de modelos' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre Jan vs LM Studio',
        faqs: [
          {
            q: '¿Jan es realmente gratuito?',
            a: 'Sí. Jan es software de código abierto con licencia MIT. No hay niveles de pago, sin telemetría por defecto, y el código fuente completo está disponible en GitHub en github.com/janhq/jan.',
          },
          {
            q: '¿LM Studio funciona en Linux?',
            a: 'LM Studio no tiene una versión estable oficial para Linux. Funciona en Mac y Windows. Los usuarios de Linux deberían usar Jan, Ollama u Open WebUI en su lugar.',
          },
          {
            q: '¿Tanto Jan como LM Studio pueden usar GPU AMD?',
            a: 'Jan soporta aceleración GPU AMD en Linux a través de ROCm. LM Studio en Windows solo soporta NVIDIA (sin versión estable de Linux). En macOS, Apple Metal maneja la aceleración GPU para ambas aplicaciones, independientemente de la marca de GPU. Para una alternativa basada en terminal en cualquier sistema operativo, consulta <a href="/es/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
          {
            q: '¿Cuál app tiene una librería de modelos más grande?',
            a: 'LM Studio tiene una tienda de modelos integrada más grande con modelos GGUF seleccionados que puedes explorar y descargar con un clic. Jan requiere importar modelos desde Hugging Face u otras fuentes.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    title: 'Jan مقابل LM Studio: أيهما أفضل؟',
    seoTitle: 'Jan مقابل LM Studio: أيهما أفضل للـ LLMs؟',
    metaDescription: 'Jan مفتوح المصدر MIT مع ~30 إضافة ويعمل على Linux. LM Studio واجهة مصقولة ومتجر نماذج GGUF مدمج. Jan للتخصيص، LM Studio للسهولة الفورية.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يختارون تطبيق سطح مكتب لتشغيل النماذج اللغوية الكبيرة محلياً',
    parentArticle: '/local-llms/lm-studio-vs-jan-ai',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'Jan مقابل LM Studio: أيهما أفضل؟',
        answer: 'Jan مفتوح المصدر بالكامل مع نظام إضافات. LM Studio يمتلك واجهة أكثر صقلاً ومكتبة نماذج مدمجة أكبر. للمستخدمين المتقدمين الراغبين في التخصيص، اختر Jan. لسهولة الاستخدام، اختر LM Studio.',
        bullets: [
          'Jan: مفتوح المصدر، إضافات، يعمل بشكل جيد على Linux',
          'LM Studio: واجهة مصقولة، مكتبة نماذج أكبر، تجربة مستخدم أفضل',
          'كلاهما مجاني ويعمل بالكامل دون اتصال بالإنترنت',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Jan مرخص بموجب MIT ومفتوح المصدر؛ LM Studio ملكية خاصة لكن مجاني للمشاريع الشخصية والتجارية',
          'Jan يدعم أنظمة التشغيل الثلاثة بشكل أصلي مع تسريع GPU لـ NVIDIA وAMD؛ LM Studio يعمل على Mac وWindows فقط (دعم Linux تجريبي اعتباراً من مايو 2026)',
          'LM Studio يمتلك متجر نماذج مدمجاً مع تنزيل بنقرة واحدة؛ Jan يعتمد على مصادر نماذج خارجية كـ Hugging Face',
          'كلا التطبيقين يستخدمان تنسيق GGUF، يتضمنان خادم API محلياً، ويعملان بالكامل دون اتصال — الاختيار بين التخصيص والصقل',
        ],
      },
      body1: {
        title: 'المعضلة: مفتوح المصدر مقابل الصقل',
        content: [
          '<strong>Jan (github.com/janhq/jan) مرخص بموجب MIT ومفتوح المصدر بالكامل — يمكنك قراءة الكود وعمل fork وتعديله.</strong> LM Studio (lmstudio.ai) برنامج ملكية خاصة مجاني لكن مغلق المصدر. Jan يتضمن نظام إضافات يسمح للمطورين بإضافة وظائف مخصصة، وهي ميزة لا يقدمها LM Studio.',
          'حالات الاستخدام الفعلية للإضافات تشمل: ربط Jan بواجهات API سحابية (OpenAI، Anthropic، Groq) لسير عمل هجينة محلية/سحابية، إضافة قوالب مطالبات مخصصة وإعدادات دردشة مسبقة، والتكامل مع أدوات خارجية مثل Obsidian لتدوين الملاحظات. حوالي 30 إضافة مجتمعية متاحة اعتباراً من مايو 2026.',
          'الميزة الرئيسية لـ LM Studio هي متجر النماذج المدمج. يمكنك تصفح مئات من نماذج GGUF ومعاينتها وتنزيلها دون مغادرة التطبيق. Jan يتطلب منك العثور على النماذج في Hugging Face أو استيرادها يدوياً — احتكاك أكبر للمستخدمين الراغبين في البدء بسرعة.',
          'للمطورين الراغبين في البناء على التطبيق، كود Jan مفتوح المصدر وAPI الإضافات مزايا مهمة. لجميع المستخدمين الآخرين، يعتمد الاختيار على سير العمل الذي يتناسب مع استخدامك اليومي.',
        ],
      },
      body2: {
        title: 'أيهما يناسب سير عملك',
        content: [
          '<strong>استخدم Jan إذا أردت توسيع التطبيق، أو تشغيله على Linux، أو احتجت لدعم GPU من AMD.</strong> استخدم LM Studio إذا أردت تجربة مصقولة مع مكتبة نماذج مدمجة ولا تحتاج للتخصيص.',
          'للمقارنة الكاملة مع خطوات التثبيت وتفاصيل API، راجع <a href="/ar/local-llms/lm-studio-vs-jan-ai" class="text-primary hover:underline">الدليل المعمّق لـ Jan مقابل LM Studio</a>.',
        ],
        columns: ['الميزة', 'Jan', 'LM Studio'],
        rows: [
          { 'الميزة': 'الترخيص', 'Jan': 'MIT (مفتوح المصدر)', 'LM Studio': 'ملكية خاصة (مجاني)' },
          { 'الميزة': 'الإضافات', 'Jan': '~30 متاحة', 'LM Studio': 'لا' },
          { 'الميزة': 'أنظمة التشغيل', 'Jan': 'Mac، Windows، Linux', 'LM Studio': 'Mac، Windows (Linux تجريبي)' },
          { 'الميزة': 'خلفية GPU', 'Jan': 'NVIDIA + AMD', 'LM Studio': 'NVIDIA فقط' },
          { 'الميزة': 'مكتبة النماذج', 'Jan': 'جهات خارجية (Hugging Face)', 'LM Studio': 'متجر مدمج' },
          { 'الميزة': 'الأفضل لـ', 'Jan': 'التخصيص / قابلية التوسع', 'LM Studio': 'السهولة / تنوع النماذج' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة حول Jan مقابل LM Studio',
        faqs: [
          {
            q: 'هل Jan مجاني فعلاً؟',
            a: 'نعم. Jan برنامج مفتوح المصدر بموجب ترخيص MIT. لا توجد مستويات مدفوعة، ولا قياس عن بُعد بشكل افتراضي، والكود المصدري الكامل متاح على GitHub في github.com/janhq/jan.',
          },
          {
            q: 'هل LM Studio يعمل على Linux؟',
            a: 'LM Studio لا يمتلك إصداراً Linux رسمياً مستقراً. يعمل على Mac وWindows. مستخدمو Linux يجب أن يستخدموا Jan أو Ollama أو Open WebUI بدلاً من ذلك.',
          },
          {
            q: 'هل يستطيع كل من Jan وLM Studio استخدام GPU من AMD؟',
            a: 'Jan يدعم تسريع GPU من AMD عبر ROCm على Linux. LM Studio على Windows يدعم NVIDIA فقط (بدون إصدار Linux مستقر). على macOS، يتولى Apple Metal تسريع GPU لكلا التطبيقين بغض النظر عن العلامة التجارية للـ GPU. للحصول على بديل قائم على سطر الأوامر على أي نظام تشغيل، راجع <a href="/ar/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama مقابل LM Studio</a>.',
          },
          {
            q: 'أي تطبيق يمتلك مكتبة نماذج أكبر؟',
            a: 'LM Studio يمتلك متجر نماذج مدمجاً أكبر مع نماذج GGUF مختارة يمكنك تصفحها وتنزيلها بنقرة واحدة. Jan يتطلب استيراد النماذج من Hugging Face أو مصادر أخرى.',
          },
        ],
      },
    },
  },
}

