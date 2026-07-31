import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-obsidian-integration-overview-hero-en.webp',
    title: 'Best Way to Connect a Local LLM to Obsidian?',
    seoTitle: 'Best Local LLM + Obsidian Integration | Prompt Bites',
    metaDescription: 'A quick guide to connecting a local LLM to Obsidian for note-taking: community plugins vs a local API bridge, and what to check before picking one.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'Obsidian users wanting to connect a local LLM to their notes without sending data to the cloud',
    affiliateDisclosure: true,
    siblingBites: ['best-frontend-for-ollama', 'ollama-vs-lm-studio'],
    is_living_page: false,
    leadAnswerBlock: '<strong>The most reliable way to connect a local LLM to Obsidian is through a community plugin that talks to a local OpenAI-compatible API endpoint — most local serving tools expose one by default.</strong> This keeps note content entirely on your machine, since both the plugin and the model run locally, with no request ever leaving your device.',
    quickAnswerTop: {
      en: {
        question: 'What is the best way to connect a local LLM to Obsidian?',
        answer: 'Use an Obsidian community plugin built to talk to a local OpenAI-compatible API endpoint, and point it at your local serving tool\'s address (typically localhost). This keeps everything local — your notes never leave your machine, since both the plugin and the model run on the same device.',
        bullets: [
          'Community plugins connect via a local OpenAI-compatible API, not a cloud service',
          'Point the plugin at your local serving tool\'s address to keep everything on-device',
          'Check a plugin\'s update recency before relying on it — community plugin quality and maintenance vary',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Obsidian community plugins that support a local OpenAI-compatible endpoint are the standard way to connect a local LLM',
          'Point the plugin at your local serving tool\'s address (typically a localhost URL) rather than a cloud API key field',
          'This setup keeps note content fully local — nothing leaves your device at any stage of the request',
          'Plugin maintenance quality varies significantly in the Obsidian community ecosystem — check recent update activity before committing to one for daily use',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'The best way to connect a local LLM to Obsidian is a community plugin pointed at your local serving tool\'s OpenAI-compatible API endpoint.' },
          { type: 'plain-terms', text: 'In plain terms: install a plugin that talks to your own computer instead of the cloud, and tell it where your local model server is running.' },
        ],
      },
      howToConnect: {
        id: 'how-to-connect',
        title: 'How the Connection Actually Works',
        content: [
          '<strong>Most local serving tools — including Ollama and LM Studio — expose an OpenAI-compatible API on your machine by default, typically at a localhost address.</strong> Obsidian community plugins built for LLM integration are usually designed to talk to that same API standard, since it\'s become the de facto interface most local tools and cloud providers alike support.',
          'Setup is generally: install the plugin from Obsidian\'s community plugin browser, then in its settings, point the "API endpoint" or "base URL" field at your local serving tool\'s address instead of a cloud provider\'s. No API key is needed for a purely local setup, since there\'s no cloud authentication involved.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=32GB+RAM+laptop',
            productName: '32GB RAM Laptop',
            productCategory: 'laptop',
            priceRange: '$900-1400',
            label: 'Check 32GB RAM laptop pricing on Amazon (for running a local model alongside Obsidian comfortably)',
          },
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'What to Check Before Picking a Plugin',
        items: [
          '**Update activity:** Obsidian\'s community plugin ecosystem has wide variance in maintenance quality. A plugin last updated long ago may stop working as your local serving tool\'s API changes over time.',
          '**Whether it supports streaming responses:** a plugin that only supports non-streaming requests will feel noticeably slower for longer responses, since you wait for the entire response instead of seeing tokens appear as they generate.',
          '**How it handles your vault content:** some plugins can pull context from your existing notes to include in prompts, others only work with manually typed input — decide whether note-aware context matters for your use case before picking one.',
          '**Whether the API endpoint field is actually configurable:** some plugins are hard-coded to specific cloud providers despite claiming general compatibility — verify you can point it at a local address before installing.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do I need an API key to connect a local LLM to Obsidian?',
            a: 'No — a purely local setup, where both the plugin and the model run on your own machine, doesn\'t need cloud authentication. Some plugins still show an API key field, but it can typically be left blank or filled with a placeholder value for local connections.',
          },
          {
            q: 'Will my notes leave my machine if I use a local LLM plugin in Obsidian?',
            a: 'No, as long as the plugin is genuinely pointed at a local endpoint and not silently falling back to a cloud service. Verify the configured address is a localhost URL, and check the plugin\'s network activity if you want to confirm no external requests are being made.',
          },
          {
            q: 'Can I use the same local model server for Obsidian and other apps at the same time?',
            a: 'Yes — a local serving tool exposing an OpenAI-compatible API can typically serve multiple local applications simultaneously, since it\'s just responding to API requests regardless of which app sends them.',
          },
          {
            q: 'What hardware do I need to run a local LLM alongside Obsidian comfortably?',
            a: 'Obsidian itself is lightweight, so the hardware requirement is really about the local model. A machine that comfortably runs your chosen model on its own will handle Obsidian running alongside it without issue — see our VRAM and RAM sizing guides for model-specific requirements.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-obsidian-integration-overview-hero-de.webp',
    title: 'Best Way to Connect a Local LLM to Obsidian?',
    seoTitle: 'Best Local LLM + Obsidian Integration | Prompt Bites',
    metaDescription: 'Kurzanleitung: ein lokales LLM mit Obsidian verbinden — Community-Plugins vs. lokale API-Brücke, und worauf Sie bei der Wahl achten sollten.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'Obsidian-Nutzer, die ein lokales LLM mit ihren Notizen verbinden möchten, ohne Daten in die Cloud zu senden',
    affiliateDisclosure: true,
    siblingBites: ['best-frontend-for-ollama', 'ollama-vs-lm-studio'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Der zuverlässigste Weg, ein lokales LLM mit Obsidian zu verbinden, ist ein Community-Plugin, das mit einem lokalen OpenAI-kompatiblen API-Endpunkt kommuniziert — die meisten lokalen Serving-Tools stellen standardmäßig einen solchen bereit.</strong> So bleibt der Notizinhalt vollständig auf Ihrem eigenen Gerät, da sowohl das Plugin als auch das Modell lokal laufen und keine Anfrage das Gerät verlässt.',
    quickAnswerTop: {
      de: {
        question: 'Was ist der beste Weg, ein lokales LLM mit Obsidian zu verbinden?',
        answer: 'Verwenden Sie ein Obsidian-Community-Plugin, das für die Kommunikation mit einem lokalen OpenAI-kompatiblen API-Endpunkt gebaut wurde, und richten Sie es auf die Adresse Ihres lokalen Serving-Tools aus (in der Regel localhost). So bleibt alles lokal — Ihre Notizen verlassen nie Ihr Gerät, da Plugin und Modell auf demselben Gerät laufen.',
        bullets: [
          'Community-Plugins verbinden sich über eine lokale OpenAI-kompatible API, nicht über einen Cloud-Dienst',
          'Richten Sie das Plugin auf die Adresse Ihres lokalen Serving-Tools aus, damit alles auf dem Gerät bleibt',
          'Prüfen Sie vor der Nutzung, wie aktuell ein Plugin gepflegt wird — Qualität und Wartung von Community-Plugins schwanken stark',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Obsidian-Community-Plugins, die einen lokalen OpenAI-kompatiblen Endpunkt unterstützen, sind der Standardweg, ein lokales LLM anzubinden',
          'Richten Sie das Plugin auf die Adresse Ihres lokalen Serving-Tools aus (in der Regel eine localhost-URL) statt auf ein Cloud-API-Schlüsselfeld',
          'Dieses Setup hält den Notizinhalt vollständig lokal — nichts verlässt Ihr Gerät zu irgendeinem Zeitpunkt der Anfrage',
          'Die Wartungsqualität von Plugins variiert im Obsidian-Community-Ökosystem erheblich — prüfen Sie die letzte Aktualisierung, bevor Sie sich für den täglichen Einsatz auf eines festlegen',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Der beste Weg, ein lokales LLM mit Obsidian zu verbinden, ist ein Community-Plugin, das auf den OpenAI-kompatiblen API-Endpunkt Ihres lokalen Serving-Tools zeigt.' },
          { type: 'plain-terms', text: 'Einfach gesagt: Installieren Sie ein Plugin, das mit Ihrem eigenen Computer statt mit der Cloud spricht, und teilen Sie ihm mit, wo Ihr lokaler Modell-Server läuft.' },
        ],
      },
      howToConnect: {
        id: 'how-to-connect',
        title: 'Wie die Verbindung tatsächlich funktioniert',
        content: [
          '<strong>Die meisten lokalen Serving-Tools — darunter Ollama und LM Studio — stellen standardmäßig eine OpenAI-kompatible API auf Ihrem Gerät bereit, meist unter einer localhost-Adresse.</strong> Obsidian-Community-Plugins für LLM-Integration sind meist so gebaut, dass sie mit demselben API-Standard kommunizieren, da er sich als De-facto-Schnittstelle für lokale Tools wie auch Cloud-Anbieter etabliert hat.',
          'Die Einrichtung läuft in der Regel so: Installieren Sie das Plugin über den Obsidian-Community-Plugin-Browser und tragen Sie in den Einstellungen im Feld „API-Endpunkt" oder „Basis-URL" die Adresse Ihres lokalen Serving-Tools statt eines Cloud-Anbieters ein. Für ein rein lokales Setup ist kein API-Schlüssel nötig, da keine Cloud-Authentifizierung erforderlich ist.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=32GB+RAM+Laptop',
            productName: '32 GB RAM Laptop',
            productCategory: 'laptop',
            priceRange: '$900-1400',
            label: 'Preise für 32-GB-RAM-Laptops auf Amazon.de prüfen (um ein lokales Modell bequem neben Obsidian laufen zu lassen)',
          },
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'Worauf Sie vor der Wahl eines Plugins achten sollten',
        items: [
          '**Aktuelle Update-Aktivität:** Das Community-Plugin-Ökosystem von Obsidian weist eine große Bandbreite an Wartungsqualität auf. Ein Plugin, dessen letztes Update lange zurückliegt, funktioniert möglicherweise nicht mit aktuellen Versionen der API Ihres lokalen Serving-Tools.',
          '**Ob Streaming-Antworten unterstützt werden:** Ein Plugin, das nur Nicht-Streaming-Anfragen unterstützt, wirkt bei längeren Antworten spürbar langsamer, da Sie auf die vollständige Antwort warten, statt Token für Token beim Generieren zu sehen.',
          '**Wie es mit dem Inhalt Ihres Vaults umgeht:** Manche Plugins können Kontext aus Ihren bestehenden Notizen ziehen, um ihn in Prompts einzubeziehen, andere funktionieren nur mit manuell eingegebenem Text — entscheiden Sie vor der Wahl, ob notizbewusster Kontext für Ihren Anwendungsfall wichtig ist.',
          '**Ob das Feld für den API-Endpunkt tatsächlich konfigurierbar ist:** Manche Plugins sind trotz behaupteter allgemeiner Kompatibilität fest auf bestimmte Cloud-Anbieter eingestellt — prüfen Sie vor der Installation, ob Sie es auf eine lokale Adresse ausrichten können.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Brauche ich einen API-Schlüssel, um ein lokales LLM mit Obsidian zu verbinden?',
            a: 'Nein — ein rein lokales Setup, bei dem sowohl Plugin als auch Modell auf Ihrem eigenen Gerät laufen, benötigt keine Cloud-Authentifizierung. Manche Plugins zeigen trotzdem ein API-Schlüsselfeld an, das für lokale Verbindungen aber meist leer bleiben oder mit einem Platzhalterwert gefüllt werden kann.',
          },
          {
            q: 'Verlassen meine Notizen mein Gerät, wenn ich ein lokales LLM-Plugin in Obsidian nutze?',
            a: 'Nein, solange das Plugin wirklich auf einen lokalen Endpunkt zeigt und nicht stillschweigend auf einen Cloud-Dienst zurückfällt. Prüfen Sie, ob die konfigurierte Adresse eine localhost-URL ist, und kontrollieren Sie bei Bedarf die Netzwerkaktivität des Plugins, um sicherzugehen, dass keine externen Anfragen gesendet werden.',
          },
          {
            q: 'Kann ich denselben lokalen Modell-Server gleichzeitig für Obsidian und andere Apps nutzen?',
            a: 'Ja — ein lokales Serving-Tool, das eine OpenAI-kompatible API bereitstellt, kann in der Regel mehrere lokale Anwendungen gleichzeitig bedienen, da es einfach auf API-Anfragen reagiert, unabhängig davon, welche App sie sendet.',
          },
          {
            q: 'Welche Hardware brauche ich, um ein lokales LLM bequem neben Obsidian laufen zu lassen?',
            a: 'Obsidian selbst ist ressourcenschonend, die Hardware-Anforderung hängt also im Wesentlichen vom lokalen Modell ab. Ein Gerät, das Ihr gewähltes Modell für sich allein bequem ausführt, bewältigt auch Obsidian nebenbei problemlos — Details zu modellspezifischen Anforderungen finden Sie in unseren VRAM- und RAM-Größenleitfäden.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-obsidian-integration-overview-hero-fr.webp',
    title: 'Best Way to Connect a Local LLM to Obsidian?',
    seoTitle: 'Best Local LLM + Obsidian Integration | Prompt Bites',
    metaDescription: 'Guide rapide pour connecter un LLM local à Obsidian pour la prise de notes : plugins communautaires ou pont API local, et ce qu\'il faut vérifier avant de choisir.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'Utilisateurs d\'Obsidian souhaitant connecter un LLM local à leurs notes sans envoyer de données dans le cloud',
    affiliateDisclosure: true,
    siblingBites: ['best-frontend-for-ollama', 'ollama-vs-lm-studio'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Le moyen le plus fiable de connecter un LLM local à Obsidian est un plugin communautaire qui communique avec un point de terminaison API local compatible OpenAI — la plupart des outils de serving locaux en exposent un par défaut.</strong> Le contenu de vos notes reste ainsi entièrement sur votre machine, puisque le plugin et le modèle tournent tous deux en local, sans qu\'aucune requête ne quitte jamais votre appareil.',
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur moyen de connecter un LLM local à Obsidian ?',
        answer: 'Utilisez un plugin communautaire Obsidian conçu pour communiquer avec un point de terminaison API local compatible OpenAI, et pointez-le vers l\'adresse de votre outil de serving local (généralement localhost). Tout reste ainsi local — vos notes ne quittent jamais votre machine, puisque le plugin et le modèle tournent sur le même appareil.',
        bullets: [
          'Les plugins communautaires se connectent via une API locale compatible OpenAI, pas via un service cloud',
          'Pointez le plugin vers l\'adresse de votre outil de serving local pour que tout reste sur l\'appareil',
          'Vérifiez la fréquence de mise à jour d\'un plugin avant d\'y compter — la qualité et la maintenance des plugins communautaires varient fortement',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Les plugins communautaires Obsidian prenant en charge un point de terminaison local compatible OpenAI sont le moyen standard de connecter un LLM local',
          'Pointez le plugin vers l\'adresse de votre outil de serving local (généralement une URL localhost) plutôt que vers un champ de clé API cloud',
          'Cette configuration garde le contenu des notes entièrement local — rien ne quitte votre appareil à aucune étape de la requête',
          'La qualité de maintenance des plugins varie fortement dans l\'écosystème communautaire Obsidian — vérifiez l\'activité de mise à jour récente avant d\'en adopter un pour un usage quotidien',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Le meilleur moyen de connecter un LLM local à Obsidian est un plugin communautaire pointant vers le point de terminaison API compatible OpenAI de votre outil de serving local.' },
          { type: 'plain-terms', text: 'En clair : installez un plugin qui communique avec votre propre ordinateur plutôt qu\'avec le cloud, et indiquez-lui où tourne votre serveur de modèle local.' },
        ],
      },
      howToConnect: {
        id: 'how-to-connect',
        title: 'Comment fonctionne réellement la connexion',
        content: [
          '<strong>La plupart des outils de serving locaux — dont Ollama et LM Studio — exposent par défaut une API compatible OpenAI sur votre machine, généralement à une adresse localhost.</strong> Les plugins communautaires Obsidian conçus pour l\'intégration de LLM sont généralement pensés pour communiquer avec ce même standard d\'API, devenu l\'interface de facto adoptée aussi bien par les outils locaux que par les fournisseurs cloud.',
          'La configuration se déroule généralement ainsi : installez le plugin depuis le navigateur de plugins communautaires d\'Obsidian, puis, dans ses paramètres, faites pointer le champ « point de terminaison API » ou « URL de base » vers l\'adresse de votre outil de serving local plutôt que vers celle d\'un fournisseur cloud. Aucune clé API n\'est nécessaire pour une configuration purement locale, puisqu\'aucune authentification cloud n\'entre en jeu.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=ordinateur+portable+32Go+RAM',
            productName: 'Ordinateur portable 32 Go de RAM',
            productCategory: 'laptop',
            priceRange: '$900-1400',
            label: 'Vérifier les prix des ordinateurs portables 32 Go de RAM sur Amazon.fr (pour faire tourner un modèle local confortablement à côté d\'Obsidian)',
          },
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'Que vérifier avant de choisir un plugin',
        items: [
          '**Activité de mise à jour récente :** l\'écosystème de plugins communautaires d\'Obsidian présente une grande variance en matière de maintenance. Un plugin dont la dernière mise à jour remonte à longtemps peut ne pas fonctionner avec les versions actuelles de l\'API de votre outil de serving local.',
          '**S\'il prend en charge les réponses en streaming :** un plugin qui ne gère que les requêtes non-streaming paraîtra nettement plus lent sur les réponses longues, puisque vous attendez la réponse complète au lieu de voir les tokens apparaître au fur et à mesure.',
          '**Comment il gère le contenu de votre coffre :** certains plugins peuvent extraire du contexte de vos notes existantes pour l\'inclure dans les prompts, d\'autres ne fonctionnent qu\'avec une saisie manuelle — déterminez si un contexte tenant compte de vos notes compte pour votre usage avant de choisir.',
          '**Si le champ du point de terminaison API est réellement configurable :** certains plugins sont figés sur des fournisseurs cloud spécifiques malgré une compatibilité générale annoncée — vérifiez que vous pouvez le pointer vers une adresse locale avant de l\'installer.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Ai-je besoin d\'une clé API pour connecter un LLM local à Obsidian ?',
            a: 'Non — une configuration purement locale, où le plugin et le modèle tournent tous deux sur votre propre machine, ne nécessite aucune authentification cloud. Certains plugins affichent quand même un champ de clé API, mais il peut généralement rester vide ou être rempli d\'une valeur fictive pour les connexions locales.',
          },
          {
            q: 'Mes notes quittent-elles ma machine si j\'utilise un plugin LLM local dans Obsidian ?',
            a: 'Non, tant que le plugin pointe réellement vers un point de terminaison local et ne bascule pas silencieusement vers un service cloud. Vérifiez que l\'adresse configurée est une URL localhost, et contrôlez l\'activité réseau du plugin si vous souhaitez confirmer qu\'aucune requête externe n\'est envoyée.',
          },
          {
            q: 'Puis-je utiliser le même serveur de modèle local pour Obsidian et d\'autres applications en même temps ?',
            a: 'Oui — un outil de serving local exposant une API compatible OpenAI peut généralement servir plusieurs applications locales simultanément, puisqu\'il ne fait que répondre aux requêtes API, quelle que soit l\'application qui les envoie.',
          },
          {
            q: 'De quelle configuration ai-je besoin pour faire tourner un LLM local confortablement à côté d\'Obsidian ?',
            a: 'Obsidian lui-même est léger, la contrainte matérielle dépend donc essentiellement du modèle local. Une machine qui exécute confortablement le modèle choisi à lui seul gérera Obsidian en parallèle sans problème — consultez nos guides de dimensionnement VRAM et RAM pour les besoins spécifiques à chaque modèle.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-obsidian-integration-overview-hero-ja.webp',
    title: 'Best Way to Connect a Local LLM to Obsidian?',
    seoTitle: 'Best Local LLM + Obsidian Integration | Prompt Bites',
    metaDescription: 'ローカルLLMをノート管理アプリのObsidianに接続するための簡単ガイド。コミュニティプラグインとローカルAPIブリッジの違い、選ぶ前に確認すべき点を解説します。',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'クラウドにデータを送信せずに、ローカルLLMをノートに接続したいObsidianユーザー',
    affiliateDisclosure: true,
    siblingBites: ['best-frontend-for-ollama', 'ollama-vs-lm-studio'],
    is_living_page: false,
    leadAnswerBlock: '<strong>ローカルLLMをObsidianに接続する最も確実な方法は、ローカルのOpenAI互換APIエンドポイントと通信するコミュニティプラグインを使うことです。多くのローカルserving toolはデフォルトでこのエンドポイントを公開しています。</strong> プラグインとモデルの両方がローカルで動作するため、リクエストが端末の外に出ることはなく、ノートの内容は完全にご自身のマシン内にとどまります。',
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMをObsidianに接続する最良の方法は何ですか？',
        answer: 'ローカルのOpenAI互換APIエンドポイントと通信するように作られたObsidianコミュニティプラグインを使い、ローカルserving toolのアドレス（通常はlocalhost）を指定してください。プラグインとモデルが同じ端末で動作するため、ノートが外部に送信されることはなく、すべてローカルで完結します。',
        bullets: [
          'コミュニティプラグインはクラウドサービスではなく、ローカルのOpenAI互換APIを介して接続します',
          'すべてを端末内にとどめるため、プラグインにはローカルserving toolのアドレスを指定してください',
          '利用前にプラグインの更新頻度を確認してください — コミュニティプラグインの品質とメンテナンス状況にはばらつきがあります',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ローカルOpenAI互換エンドポイントに対応したObsidianコミュニティプラグインが、ローカルLLMを接続する標準的な方法です',
          'クラウドAPIキー欄ではなく、ローカルserving toolのアドレス（通常はlocalhost URL）をプラグインに指定してください',
          'この構成ではノート内容が完全にローカルにとどまり、リクエストのどの段階でも端末外にデータが出ません',
          'Obsidianコミュニティエコシステムではプラグインのメンテナンス品質に大きなばらつきがあります — 日常利用で使う前に、最近の更新状況を確認してください',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'ローカルLLMをObsidianに接続する最良の方法は、ローカルserving toolのOpenAI互換APIエンドポイントを指定したコミュニティプラグインです。' },
          { type: 'plain-terms', text: '簡単に言うと、クラウドではなく自分のコンピューターと通信するプラグインを導入し、ローカルモデルサーバーの場所を伝えるということです。' },
        ],
      },
      howToConnect: {
        id: 'how-to-connect',
        title: '接続が実際にどう機能するか',
        content: [
          '<strong>OllamaやLM Studioを含む多くのローカルserving toolは、デフォルトで端末上にOpenAI互換APIを公開しており、通常はlocalhostアドレスで提供されます。</strong> LLM連携向けに作られたObsidianコミュニティプラグインは、多くの場合この同じAPI標準と通信するように設計されています。このAPI標準は、ローカルツールとクラウドプロバイダーの双方で事実上の共通インターフェースとなっているためです。',
          '一般的なセットアップ手順は次のとおりです。まずObsidianのコミュニティプラグインブラウザからプラグインをインストールし、設定画面の「APIエンドポイント」または「ベースURL」欄に、クラウドプロバイダーではなくローカルserving toolのアドレスを入力します。純粋にローカルな構成では、クラウド認証が関与しないためAPIキーは不要です。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=32GB+RAM+ノートパソコン',
            productName: '32GB RAMノートパソコン',
            productCategory: 'laptop',
            priceRange: '$900-1400',
            label: 'Amazon.co.jpで32GB RAMノートパソコンの価格を確認する（Obsidianと並行してローカルモデルを快適に動かすため）',
          },
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'プラグインを選ぶ前に確認すべきこと',
        items: [
          '**最近の更新状況：** Obsidianのコミュニティプラグインエコシステムはメンテナンス品質のばらつきが大きいです。最終更新から時間が経っているプラグインは、ローカルserving toolの現行APIと正しく動作しない可能性があります。',
          '**ストリーミング応答に対応しているか：** 非ストリーミングのリクエストにしか対応していないプラグインは、応答が生成されるにつれてトークンが表示されるのではなく完全な応答を待つ必要があるため、長い応答では明らかに遅く感じられます。',
          '**Vault内のコンテンツをどう扱うか：** 一部のプラグインは既存のノートからコンテキストを取得してプロンプトに含められますが、手動入力にしか対応しないものもあります — 自分の用途にノート認識コンテキストが重要かどうかを選定前に判断してください。',
          '**APIエンドポイント欄が実際に設定変更可能か：** 一部のプラグインは汎用的な互換性をうたいながら特定のクラウドプロバイダーに固定されています — インストール前に、ローカルアドレスを指定できることを確認してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'ローカルLLMをObsidianに接続するのにAPIキーは必要ですか？',
            a: 'いいえ — プラグインとモデルの両方が自分の端末で動作する純粋にローカルな構成では、クラウド認証は不要です。プラグインによってはAPIキー欄が表示されますが、ローカル接続では空欄のままか、ダミー値を入力しておけば通常問題ありません。',
          },
          {
            q: 'ObsidianでローカルLLMプラグインを使うと、ノートが端末の外に出ることはありますか？',
            a: 'プラグインが実際にローカルエンドポイントを指定しており、気づかないうちにクラウドサービスへフォールバックしていなければ、出ることはありません。設定されているアドレスがlocalhost URLであることを確認し、外部へのリクエストが発生していないか心配な場合はプラグインのネットワーク通信を確認してください。',
          },
          {
            q: '同じローカルモデルサーバーを、Obsidianと他のアプリで同時に使うことはできますか？',
            a: 'はい — OpenAI互換APIを公開しているローカルserving toolは、どのアプリから送られたリクエストであっても単に応答するだけなので、通常は複数のローカルアプリケーションを同時にサービスできます。',
          },
          {
            q: 'Obsidianと並行してローカルLLMを快適に動かすには、どのようなハードウェアが必要ですか？',
            a: 'Obsidian自体は軽量なため、ハードウェア要件は実質的にローカルモデル側で決まります。選んだモデル単体を快適に実行できるマシンであれば、Obsidianを並行して動かしても問題ありません — モデルごとの要件についてはVRAM・RAMサイジングガイドをご覧ください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-obsidian-integration-overview-hero-zh.webp',
    title: 'Best Way to Connect a Local LLM to Obsidian?',
    seoTitle: 'Best Local LLM + Obsidian Integration | Prompt Bites',
    metaDescription: '快速指南：如何将本地LLM连接到Obsidian用于笔记管理——社区插件与本地API桥接的对比，以及选择前需要检查的要点。',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: '希望在不将数据发送到云端的情况下，把本地LLM连接到笔记的Obsidian用户',
    affiliateDisclosure: true,
    siblingBites: ['best-frontend-for-ollama', 'ollama-vs-lm-studio'],
    is_living_page: false,
    leadAnswerBlock: '<strong>将本地LLM连接到Obsidian最可靠的方法，是使用一个能与本地OpenAI兼容API端点通信的社区插件——大多数本地serving工具默认就会暴露这样一个端点。</strong> 由于插件和模型都在本地运行，请求不会离开设备，笔记内容因此完全留在你自己的机器上。',
    quickAnswerTop: {
      zh: {
        question: '将本地LLM连接到Obsidian的最佳方式是什么？',
        answer: '使用一个专门用于与本地OpenAI兼容API端点通信的Obsidian社区插件，并将其指向本地serving工具的地址（通常是localhost）。由于插件和模型运行在同一台设备上，这样可以让一切保持本地——笔记内容永远不会离开你的机器。',
        bullets: [
          '社区插件通过本地OpenAI兼容API连接，而不是云服务',
          '将插件指向本地serving工具的地址，以保证一切都在设备本地完成',
          '在依赖某个插件之前，先检查它的更新频率——社区插件的质量和维护情况差异很大',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '支持本地OpenAI兼容端点的Obsidian社区插件，是连接本地LLM的标准方式',
          '将插件指向本地serving工具的地址（通常是localhost URL），而不是云端API密钥输入框',
          '这种设置让笔记内容完全保留在本地——请求的任何阶段都不会有数据离开设备',
          'Obsidian社区生态中插件的维护质量差异很大——在日常使用前先检查其近期更新情况',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '将本地LLM连接到Obsidian的最佳方式，是使用一个指向本地serving工具OpenAI兼容API端点的社区插件。' },
          { type: 'plain-terms', text: '简单来说：安装一个与你自己电脑通信、而不是与云端通信的插件，并告诉它本地模型服务器运行在哪里。' },
        ],
      },
      howToConnect: {
        id: 'how-to-connect',
        title: '连接实际是如何工作的',
        content: [
          '<strong>包括Ollama和LM Studio在内的大多数本地serving工具，默认会在你的设备上暴露一个OpenAI兼容API，通常位于localhost地址。</strong> 为LLM集成而设计的Obsidian社区插件，通常也是按照这一相同的API标准构建的，因为它已经成为本地工具和云服务商共同采用的事实标准接口。',
          '常见设置流程是：从Obsidian的社区插件浏览器安装插件，然后在其设置中，将"API端点"或"基础URL"字段指向你的本地serving工具地址，而不是云服务商地址。纯本地设置不需要API密钥，因为不涉及云端身份验证。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=32GB+RAM+laptop',
            productName: '32GB内存笔记本电脑',
            productCategory: 'laptop',
            priceRange: '$900-1400',
            label: '在Amazon查看32GB内存笔记本电脑价格（用于在运行Obsidian的同时流畅运行本地模型）',
          },
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: '选择插件前需要检查的事项',
        items: [
          '**近期更新活跃度：** Obsidian的社区插件生态在维护质量上差异很大。一个很久没更新的插件，可能无法兼容你所用本地serving工具当前版本的API。',
          '**是否支持流式响应：** 只支持非流式请求的插件，在处理较长回复时会明显感觉更慢，因为你需要等待完整回复生成完毕，而不是看到token逐个生成。',
          '**如何处理你的库（vault）内容：** 有些插件可以从你现有的笔记中提取上下文并纳入提示词，另一些则只支持手动输入——在选择前先确定笔记感知的上下文对你的使用场景是否重要。',
          '**API端点字段是否真正可配置：** 有些插件尽管声称通用兼容，实际却被硬编码指向特定云服务商——安装前请确认可以将其指向本地地址。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: '将本地LLM连接到Obsidian需要API密钥吗？',
            a: '不需要——一个纯本地设置中，插件和模型都在你自己的设备上运行，不需要云端身份验证。有些插件仍会显示API密钥字段，但对于本地连接，通常留空或填入一个占位值即可。',
          },
          {
            q: '在Obsidian中使用本地LLM插件时，我的笔记会离开我的设备吗？',
            a: '不会，只要插件确实指向本地端点，而不是悄悄回退到云服务。请确认所配置的地址是localhost URL，如果想确认没有发出外部请求，也可以检查插件的网络活动。',
          },
          {
            q: '我可以让同一个本地模型服务器同时为Obsidian和其他应用提供服务吗？',
            a: '可以——一个暴露OpenAI兼容API的本地serving工具通常可以同时服务多个本地应用，因为它只是响应API请求，而不关心请求来自哪个应用。',
          },
          {
            q: '要在运行Obsidian的同时流畅运行本地LLM，需要什么样的硬件？',
            a: 'Obsidian本身很轻量，因此硬件需求实际上取决于本地模型。一台能单独流畅运行你所选模型的机器，同时运行Obsidian也不会有问题——具体模型的硬件需求可参考我们的VRAM和RAM配置指南。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-obsidian-integration-overview-hero-es.webp',
    title: 'Best Way to Connect a Local LLM to Obsidian?',
    seoTitle: 'Best Local LLM + Obsidian Integration | Prompt Bites',
    metaDescription: 'Guía rápida para conectar un LLM local a Obsidian para tomar notas: plugins de la comunidad frente a un puente API local, y qué comprobar antes de elegir uno.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'Usuarios de Obsidian que quieren conectar un LLM local a sus notas sin enviar datos a la nube',
    affiliateDisclosure: true,
    siblingBites: ['best-frontend-for-ollama', 'ollama-vs-lm-studio'],
    is_living_page: false,
    leadAnswerBlock: '<strong>La forma más fiable de conectar un LLM local a Obsidian es mediante un plugin de la comunidad que se comunique con un endpoint de API local compatible con OpenAI — la mayoría de las herramientas de serving local exponen uno por defecto.</strong> Así el contenido de tus notas permanece por completo en tu equipo, ya que tanto el plugin como el modelo se ejecutan en local y ninguna solicitud sale nunca de tu dispositivo.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor forma de conectar un LLM local a Obsidian?',
        answer: 'Usa un plugin de la comunidad de Obsidian diseñado para comunicarse con un endpoint de API local compatible con OpenAI, y apúntalo a la dirección de tu herramienta de serving local (normalmente localhost). Esto mantiene todo en local — tus notas nunca salen de tu equipo, ya que el plugin y el modelo se ejecutan en el mismo dispositivo.',
        bullets: [
          'Los plugins de la comunidad se conectan mediante una API local compatible con OpenAI, no un servicio en la nube',
          'Apunta el plugin a la dirección de tu herramienta de serving local para que todo permanezca en el dispositivo',
          'Comprueba la frecuencia de actualización de un plugin antes de depender de él — la calidad y el mantenimiento de los plugins de la comunidad varían mucho',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Los plugins de la comunidad de Obsidian compatibles con un endpoint local de tipo OpenAI son la forma estándar de conectar un LLM local',
          'Apunta el plugin a la dirección de tu herramienta de serving local (normalmente una URL localhost) en lugar de a un campo de clave API en la nube',
          'Esta configuración mantiene el contenido de las notas completamente en local — nada sale de tu dispositivo en ninguna fase de la solicitud',
          'La calidad de mantenimiento de los plugins varía mucho en el ecosistema comunitario de Obsidian — comprueba la actividad reciente de actualización antes de usarlo a diario',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'La mejor forma de conectar un LLM local a Obsidian es un plugin de la comunidad apuntado al endpoint de API compatible con OpenAI de tu herramienta de serving local.' },
          { type: 'plain-terms', text: 'En términos simples: instala un plugin que se comunique con tu propio ordenador en lugar de con la nube, e indícale dónde se ejecuta tu servidor de modelo local.' },
        ],
      },
      howToConnect: {
        id: 'how-to-connect',
        title: 'Cómo funciona realmente la conexión',
        content: [
          '<strong>La mayoría de las herramientas de serving local — incluidas Ollama y LM Studio — exponen por defecto una API compatible con OpenAI en tu equipo, normalmente en una dirección localhost.</strong> Los plugins de la comunidad de Obsidian creados para integración con LLM suelen estar diseñados para comunicarse con ese mismo estándar de API, que se ha convertido en la interfaz de facto que adoptan tanto herramientas locales como proveedores en la nube.',
          'La configuración suele ser así: instala el plugin desde el navegador de plugins de la comunidad de Obsidian y, en sus ajustes, apunta el campo "API endpoint" o "base URL" a la dirección de tu herramienta de serving local en lugar de a la de un proveedor en la nube. No se necesita clave API para una configuración puramente local, ya que no hay autenticación en la nube de por medio.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=portatil+32GB+RAM',
            productName: 'Portátil con 32 GB de RAM',
            productCategory: 'laptop',
            priceRange: '$900-1400',
            label: 'Consultar precios de portátiles con 32 GB de RAM en Amazon.es (para ejecutar un modelo local cómodamente junto a Obsidian)',
          },
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'Qué comprobar antes de elegir un plugin',
        items: [
          '**Actividad reciente de actualización:** el ecosistema de plugins de la comunidad de Obsidian tiene una gran variabilidad en calidad de mantenimiento. Un plugin actualizado por última vez hace tiempo puede no funcionar con las versiones actuales de la API de tu herramienta de serving local.',
          '**Si admite respuestas en streaming:** un plugin que solo admite solicitudes sin streaming se sentirá notablemente más lento en respuestas largas, ya que esperas la respuesta completa en lugar de ver los tokens aparecer a medida que se generan.',
          '**Cómo gestiona el contenido de tu vault:** algunos plugins pueden extraer contexto de tus notas existentes para incluirlo en los prompts, otros solo funcionan con texto introducido manualmente — decide si el contexto consciente de tus notas te importa antes de elegir uno.',
          '**Si el campo del endpoint de API es realmente configurable:** algunos plugins están fijados a proveedores en la nube específicos pese a afirmar compatibilidad general — comprueba que puedas apuntarlo a una dirección local antes de instalarlo.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: '¿Necesito una clave API para conectar un LLM local a Obsidian?',
            a: 'No — una configuración puramente local, en la que tanto el plugin como el modelo se ejecutan en tu propio equipo, no necesita autenticación en la nube. Algunos plugins igualmente muestran un campo de clave API, pero normalmente puede dejarse en blanco o rellenarse con un valor de relleno para conexiones locales.',
          },
          {
            q: '¿Mis notas salen de mi equipo si uso un plugin de LLM local en Obsidian?',
            a: 'No, siempre que el plugin apunte realmente a un endpoint local y no recurra silenciosamente a un servicio en la nube. Comprueba que la dirección configurada sea una URL localhost, y revisa la actividad de red del plugin si quieres confirmar que no se realizan solicitudes externas.',
          },
          {
            q: '¿Puedo usar el mismo servidor de modelo local para Obsidian y otras apps al mismo tiempo?',
            a: 'Sí — una herramienta de serving local que expone una API compatible con OpenAI normalmente puede atender a varias aplicaciones locales a la vez, ya que simplemente responde a solicitudes de API sin importar qué app las envíe.',
          },
          {
            q: '¿Qué hardware necesito para ejecutar un LLM local cómodamente junto a Obsidian?',
            a: 'Obsidian en sí es ligero, así que el requisito de hardware depende sobre todo del modelo local. Un equipo que ejecute cómodamente el modelo elegido por sí solo manejará Obsidian en paralelo sin problema — consulta nuestras guías de dimensionamiento de VRAM y RAM para requisitos específicos de cada modelo.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-obsidian-integration-overview-hero-pt.webp',
    title: 'Best Way to Connect a Local LLM to Obsidian?',
    seoTitle: 'Best Local LLM + Obsidian Integration | Prompt Bites',
    metaDescription: 'Um guia rápido para conectar um LLM local ao Obsidian para anotações: plugins da comunidade vs. uma ponte de API local, e o que verificar antes de escolher um.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'Usuários do Obsidian que querem conectar um LLM local às suas notas sem enviar dados para a nuvem',
    affiliateDisclosure: true,
    siblingBites: ['best-frontend-for-ollama', 'ollama-vs-lm-studio'],
    is_living_page: false,
    leadAnswerBlock: '<strong>A forma mais confiável de conectar um LLM local ao Obsidian é por meio de um plugin da comunidade que se comunica com um endpoint de API local compatível com OpenAI — a maioria das ferramentas de serving local expõe um por padrão.</strong> Isso mantém o conteúdo das suas notas totalmente na sua máquina, já que o plugin e o modelo rodam localmente, sem que nenhuma requisição saia do seu dispositivo.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor forma de conectar um LLM local ao Obsidian?',
        answer: 'Use um plugin da comunidade do Obsidian feito para se comunicar com um endpoint de API local compatível com OpenAI, e aponte-o para o endereço da sua ferramenta de serving local (normalmente localhost). Isso mantém tudo local — suas notas nunca saem da sua máquina, já que o plugin e o modelo rodam no mesmo dispositivo.',
        bullets: [
          'Plugins da comunidade se conectam por meio de uma API local compatível com OpenAI, não um serviço em nuvem',
          'Aponte o plugin para o endereço da sua ferramenta de serving local para manter tudo no dispositivo',
          'Verifique a frequência de atualização de um plugin antes de confiar nele — a qualidade e a manutenção dos plugins da comunidade variam bastante',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Plugins da comunidade do Obsidian que suportam um endpoint local compatível com OpenAI são a forma padrão de conectar um LLM local',
          'Aponte o plugin para o endereço da sua ferramenta de serving local (normalmente uma URL localhost), não para um campo de chave de API em nuvem',
          'Essa configuração mantém o conteúdo das notas totalmente local — nada sai do seu dispositivo em nenhuma etapa da requisição',
          'A qualidade de manutenção dos plugins varia bastante no ecossistema comunitário do Obsidian — verifique a atividade recente de atualização antes de adotar um para uso diário',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A melhor forma de conectar um LLM local ao Obsidian é um plugin da comunidade apontado para o endpoint de API compatível com OpenAI da sua ferramenta de serving local.' },
          { type: 'plain-terms', text: 'Em termos simples: instale um plugin que conversa com seu próprio computador em vez da nuvem, e diga a ele onde está rodando seu servidor de modelo local.' },
        ],
      },
      howToConnect: {
        id: 'how-to-connect',
        title: 'Como a conexão funciona de fato',
        content: [
          '<strong>A maioria das ferramentas de serving local — incluindo Ollama e LM Studio — expõe por padrão uma API compatível com OpenAI na sua máquina, geralmente em um endereço localhost.</strong> Plugins da comunidade do Obsidian feitos para integração com LLM costumam ser projetados para conversar com esse mesmo padrão de API, que se tornou a interface de fato adotada tanto por ferramentas locais quanto por provedores de nuvem.',
          'A configuração geralmente é: instale o plugin pelo navegador de plugins da comunidade do Obsidian e, nas configurações, aponte o campo "endpoint da API" ou "URL base" para o endereço da sua ferramenta de serving local em vez do de um provedor de nuvem. Nenhuma chave de API é necessária para uma configuração puramente local, já que não há autenticação em nuvem envolvida.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=32GB+RAM+laptop',
            productName: 'Notebook com 32 GB de RAM',
            productCategory: 'laptop',
            priceRange: '$900-1400',
            label: 'Verificar preços de notebooks com 32 GB de RAM na Amazon (para rodar um modelo local com folga ao lado do Obsidian)',
          },
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'O que verificar antes de escolher um plugin',
        items: [
          '**Atividade recente de atualização:** o ecossistema de plugins da comunidade do Obsidian tem grande variação na qualidade de manutenção. Um plugin cuja última atualização foi há muito tempo pode não funcionar com as versões atuais da API da sua ferramenta de serving local.',
          '**Se ele suporta respostas em streaming:** um plugin que só suporta requisições sem streaming vai parecer visivelmente mais lento em respostas longas, já que você espera a resposta inteira em vez de ver os tokens aparecerem conforme são gerados.',
          '**Como ele lida com o conteúdo do seu vault:** alguns plugins conseguem extrair contexto das suas notas existentes para incluir nos prompts, outros só funcionam com entrada digitada manualmente — decida se o contexto ciente das notas importa para o seu caso de uso antes de escolher um.',
          '**Se o campo do endpoint da API é realmente configurável:** alguns plugins são fixados em provedores de nuvem específicos apesar de alegarem compatibilidade geral — verifique se você consegue apontá-lo para um endereço local antes de instalar.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Preciso de uma chave de API para conectar um LLM local ao Obsidian?',
            a: 'Não — uma configuração puramente local, em que o plugin e o modelo rodam na sua própria máquina, não precisa de autenticação em nuvem. Alguns plugins ainda mostram um campo de chave de API, mas ele geralmente pode ficar em branco ou receber um valor de preenchimento para conexões locais.',
          },
          {
            q: 'Minhas notas saem da minha máquina se eu usar um plugin de LLM local no Obsidian?',
            a: 'Não, desde que o plugin esteja realmente apontado para um endpoint local e não esteja silenciosamente recorrendo a um serviço em nuvem. Verifique se o endereço configurado é uma URL localhost, e confira a atividade de rede do plugin se quiser confirmar que nenhuma requisição externa está sendo feita.',
          },
          {
            q: 'Posso usar o mesmo servidor de modelo local para o Obsidian e outros aplicativos ao mesmo tempo?',
            a: 'Sim — uma ferramenta de serving local que expõe uma API compatível com OpenAI geralmente consegue atender vários aplicativos locais ao mesmo tempo, já que apenas responde a requisições de API, independentemente de qual app as envia.',
          },
          {
            q: 'Que hardware eu preciso para rodar um LLM local com folga ao lado do Obsidian?',
            a: 'O Obsidian em si é leve, então o requisito de hardware depende basicamente do modelo local. Uma máquina que rode com folga o modelo escolhido sozinho vai lidar com o Obsidian rodando junto sem problemas — veja nossos guias de dimensionamento de VRAM e RAM para requisitos específicos de cada modelo.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-obsidian-integration-overview-hero-ar.webp',
    title: 'Best Way to Connect a Local LLM to Obsidian?',
    seoTitle: 'Best Local LLM + Obsidian Integration | Prompt Bites',
    metaDescription: 'دليل سريع لربط نموذج لغوي محلي بتطبيق Obsidian لتدوين الملاحظات: إضافات مجتمعية مقابل جسر API محلي، وما يجب التحقق منه قبل الاختيار.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'مستخدمو Obsidian الذين يريدون ربط نموذج لغوي محلي (LLM) بملاحظاتهم دون إرسال البيانات إلى السحابة',
    affiliateDisclosure: true,
    siblingBites: ['best-frontend-for-ollama', 'ollama-vs-lm-studio'],
    is_living_page: false,
    leadAnswerBlock: '<strong>أفضل طريقة موثوقة لربط نموذج لغوي محلي بتطبيق Obsidian هي استخدام إضافة مجتمعية تتواصل مع نقطة نهاية API محلية متوافقة مع OpenAI — فمعظم أدوات التشغيل المحلية تعرض نقطة نهاية كهذه افتراضيًا.</strong> يظل محتوى الملاحظات بالكامل على جهازك، لأن كلًا من الإضافة والنموذج يعملان محليًا، ولا تغادر أي طلبات جهازك أبدًا.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل طريقة لربط نموذج لغوي محلي بتطبيق Obsidian؟',
        answer: 'استخدم إضافة مجتمعية من Obsidian مصممة للتواصل مع نقطة نهاية API محلية متوافقة مع OpenAI، ووجّهها إلى عنوان أداة التشغيل المحلية لديك (عادةً localhost). هذا يبقي كل شيء محليًا — لا تغادر ملاحظاتك جهازك أبدًا، لأن الإضافة والنموذج يعملان على نفس الجهاز.',
        bullets: [
          'تتصل الإضافات المجتمعية عبر API محلي متوافق مع OpenAI، وليس عبر خدمة سحابية',
          'وجّه الإضافة إلى عنوان أداة التشغيل المحلية لديك لإبقاء كل شيء على الجهاز',
          'تحقق من مدى حداثة تحديث الإضافة قبل الاعتماد عليها — تتفاوت جودة الإضافات المجتمعية وصيانتها بشكل كبير',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'إضافات Obsidian المجتمعية التي تدعم نقطة نهاية محلية متوافقة مع OpenAI هي الطريقة المعتادة لربط نموذج لغوي محلي',
          'وجّه الإضافة إلى عنوان أداة التشغيل المحلية لديك (عادةً رابط localhost) بدلًا من حقل مفتاح API سحابي',
          'يبقي هذا الإعداد محتوى الملاحظات محليًا بالكامل — لا تغادر أي بيانات جهازك في أي مرحلة من مراحل الطلب',
          'تتفاوت جودة صيانة الإضافات بشكل كبير في منظومة Obsidian المجتمعية — تحقق من نشاط التحديث الأخير قبل الاعتماد على إضافة للاستخدام اليومي',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'أفضل طريقة لربط نموذج لغوي محلي بتطبيق Obsidian هي إضافة مجتمعية موجهة إلى نقطة نهاية API المتوافقة مع OpenAI الخاصة بأداة التشغيل المحلية لديك.' },
          { type: 'plain-terms', text: 'بعبارة بسيطة: ثبّت إضافة تتواصل مع جهاز الحاسوب الخاص بك بدلًا من السحابة، وأخبرها بمكان تشغيل خادم النموذج المحلي لديك.' },
        ],
      },
      howToConnect: {
        id: 'how-to-connect',
        title: 'كيف يعمل الاتصال فعليًا',
        content: [
          '<strong>تعرض معظم أدوات التشغيل المحلية — بما فيها Ollama وLM Studio — واجهة API متوافقة مع OpenAI افتراضيًا على جهازك، غالبًا عبر عنوان localhost.</strong> عادةً ما تُصمَّم إضافات Obsidian المجتمعية المخصصة للتكامل مع النماذج اللغوية للتواصل مع معيار API نفسه، الذي أصبح الواجهة الفعلية التي تتبناها كل من الأدوات المحلية ومزودي الخدمات السحابية.',
          'يسير الإعداد عادةً كما يلي: ثبّت الإضافة من متصفح إضافات Obsidian المجتمعية، ثم في إعداداتها، وجّه حقل "نقطة نهاية API" أو "الرابط الأساسي" إلى عنوان أداة التشغيل المحلية لديك بدلًا من عنوان مزود سحابي. لا حاجة لمفتاح API في إعداد محلي بالكامل، لأنه لا يتضمن أي مصادقة سحابية.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=32GB+RAM+laptop',
            productName: 'حاسوب محمول بذاكرة 32 جيجابايت',
            productCategory: 'laptop',
            priceRange: '$900-1400',
            label: 'تحقق من أسعار الحواسيب المحمولة بذاكرة 32 جيجابايت على Amazon (لتشغيل نموذج محلي بسلاسة إلى جانب Obsidian)',
          },
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'ما الذي يجب التحقق منه قبل اختيار إضافة',
        items: [
          '**نشاط التحديث الأخير:** تتفاوت جودة الصيانة بشكل كبير في منظومة إضافات Obsidian المجتمعية. قد لا تعمل الإضافة التي مر وقت طويل منذ آخر تحديث لها مع الإصدارات الحالية من واجهة API الخاصة بأداة التشغيل المحلية لديك.',
          '**ما إذا كانت تدعم الاستجابات المتدفقة (streaming):** الإضافة التي تدعم فقط الطلبات غير المتدفقة ستبدو أبطأ بشكل ملحوظ في الردود الطويلة، لأنك تنتظر الرد كاملًا بدلًا من رؤية الرموز (tokens) تظهر أثناء توليدها.',
          '**كيفية تعاملها مع محتوى خزنتك (vault):** يمكن لبعض الإضافات سحب سياق من ملاحظاتك الحالية لتضمينه في الطلبات، بينما تعمل إضافات أخرى فقط مع إدخال يدوي — قرر ما إذا كان السياق المدرك للملاحظات مهمًا لاستخدامك قبل الاختيار.',
          '**ما إذا كان حقل نقطة نهاية API قابلًا للتهيئة فعليًا:** بعض الإضافات مثبّتة بشكل صارم على مزودين سحابيين محددين رغم ادعائها التوافق العام — تحقق من إمكانية توجيهها إلى عنوان محلي قبل التثبيت.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'هل أحتاج إلى مفتاح API لربط نموذج لغوي محلي بتطبيق Obsidian؟',
            a: 'لا — الإعداد المحلي بالكامل، حيث تعمل كل من الإضافة والنموذج على جهازك الخاص، لا يحتاج إلى مصادقة سحابية. لا تزال بعض الإضافات تعرض حقل مفتاح API، لكن يمكن عادةً تركه فارغًا أو ملؤه بقيمة عشوائية للاتصالات المحلية.',
          },
          {
            q: 'هل تغادر ملاحظاتي جهازي إذا استخدمت إضافة نموذج لغوي محلي في Obsidian؟',
            a: 'لا، طالما أن الإضافة موجهة فعليًا إلى نقطة نهاية محلية ولا تتحول بصمت إلى خدمة سحابية. تحقق من أن العنوان المُعد هو رابط localhost، وتفحّص نشاط الشبكة الخاص بالإضافة إذا أردت التأكد من عدم إرسال أي طلبات خارجية.',
          },
          {
            q: 'هل يمكنني استخدام خادم النموذج المحلي نفسه لتطبيق Obsidian وتطبيقات أخرى في الوقت نفسه؟',
            a: 'نعم — يمكن لأداة تشغيل محلية تعرض واجهة API متوافقة مع OpenAI أن تخدم عادةً عدة تطبيقات محلية في آن واحد، لأنها ببساطة تستجيب لطلبات API بغض النظر عن التطبيق الذي يرسلها.',
          },
          {
            q: 'ما الأجهزة التي أحتاجها لتشغيل نموذج لغوي محلي بسلاسة إلى جانب Obsidian؟',
            a: 'يُعد Obsidian نفسه خفيفًا، لذا يعتمد متطلب الأجهزة فعليًا على النموذج المحلي. أي جهاز يشغّل النموذج الذي اخترته بمفرده بسلاسة سيتعامل مع تشغيل Obsidian إلى جانبه دون مشكلة — راجع أدلة تحديد حجم VRAM وRAM الخاصة بنا للمتطلبات الخاصة بكل نموذج.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Tool Comparisons',
    heroImage: '/images/best-local-llm-obsidian-integration-overview-hero-ko.webp',
    title: 'Best Way to Connect a Local LLM to Obsidian?',
    seoTitle: 'Best Local LLM + Obsidian Integration | Prompt Bites',
    metaDescription: '로컬 LLM을 노트 앱 Obsidian에 연결하는 간단한 가이드: 커뮤니티 플러그인과 로컬 API 브리지 비교, 선택 전에 확인할 사항.',
    publishDate: '2026-07-15',
    dateModified: '2026-07-15',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: '클라우드로 데이터를 전송하지 않고 로컬 LLM을 노트에 연결하려는 Obsidian 사용자',
    affiliateDisclosure: true,
    siblingBites: ['best-frontend-for-ollama', 'ollama-vs-lm-studio'],
    is_living_page: false,
    leadAnswerBlock: '<strong>로컬 LLM을 Obsidian에 연결하는 가장 신뢰할 수 있는 방법은 로컬 OpenAI 호환 API 엔드포인트와 통신하는 커뮤니티 플러그인을 사용하는 것입니다. 대부분의 로컬 serving 도구는 기본적으로 이러한 엔드포인트를 제공합니다.</strong> 플러그인과 모델이 모두 로컬에서 실행되므로 요청이 기기를 벗어나지 않으며, 노트 내용은 완전히 사용자의 기기 안에 머무릅니다.',
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM을 Obsidian에 연결하는 가장 좋은 방법은 무엇입니까?',
        answer: '로컬 OpenAI 호환 API 엔드포인트와 통신하도록 만들어진 Obsidian 커뮤니티 플러그인을 사용하고, 이를 로컬 serving 도구의 주소(일반적으로 localhost)로 지정하십시오. 플러그인과 모델이 동일한 기기에서 실행되므로 모든 것이 로컬에 유지되며, 노트가 기기를 벗어나는 일은 없습니다.',
        bullets: [
          '커뮤니티 플러그인은 클라우드 서비스가 아니라 로컬 OpenAI 호환 API를 통해 연결됩니다',
          '모든 것을 기기 내에 유지하려면 플러그인을 로컬 serving 도구의 주소로 지정하십시오',
          '플러그인에 의존하기 전에 최근 업데이트 빈도를 확인하십시오 — 커뮤니티 플러그인의 품질과 유지관리 수준은 크게 다릅니다',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '로컬 OpenAI 호환 엔드포인트를 지원하는 Obsidian 커뮤니티 플러그인은 로컬 LLM을 연결하는 표준적인 방법입니다',
          '클라우드 API 키 입력란이 아니라 로컬 serving 도구의 주소(일반적으로 localhost URL)를 플러그인에 지정하십시오',
          '이 구성은 노트 내용을 완전히 로컬에 유지합니다 — 요청의 어떤 단계에서도 데이터가 기기를 벗어나지 않습니다',
          'Obsidian 커뮤니티 생태계에서는 플러그인의 유지관리 품질이 크게 다릅니다 — 일상적으로 사용하기 전에 최근 업데이트 활동을 확인하십시오',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '로컬 LLM을 Obsidian에 연결하는 가장 좋은 방법은 로컬 serving 도구의 OpenAI 호환 API 엔드포인트를 지정한 커뮤니티 플러그인입니다.' },
          { type: 'plain-terms', text: '쉽게 말해, 클라우드가 아니라 자신의 컴퓨터와 통신하는 플러그인을 설치하고, 로컬 모델 서버가 어디에서 실행되는지를 알려주는 것입니다.' },
        ],
      },
      howToConnect: {
        id: 'how-to-connect',
        title: '연결이 실제로 작동하는 방식',
        content: [
          '<strong>Ollama와 LM Studio를 포함한 대부분의 로컬 serving 도구는 기본적으로 사용자의 기기에 OpenAI 호환 API를 제공하며, 일반적으로 localhost 주소를 사용합니다.</strong> LLM 연동을 위해 만들어진 Obsidian 커뮤니티 플러그인은 대개 이 동일한 API 표준과 통신하도록 설계되어 있는데, 이는 로컬 도구와 클라우드 제공업체 모두가 채택한 사실상의 표준 인터페이스가 되었기 때문입니다.',
          '일반적인 설정 절차는 다음과 같습니다. Obsidian의 커뮤니티 플러그인 브라우저에서 플러그인을 설치한 다음, 설정에서 "API 엔드포인트" 또는 "기본 URL" 필드를 클라우드 제공업체 대신 로컬 serving 도구의 주소로 지정하십시오. 순수하게 로컬로만 구성하는 경우 클라우드 인증이 필요하지 않으므로 API 키가 필요하지 않습니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=32GB+RAM+laptop',
            productName: '32GB RAM 노트북',
            productCategory: 'laptop',
            priceRange: '$900-1400',
            label: 'Amazon에서 32GB RAM 노트북 가격을 확인하십시오 (Obsidian과 함께 로컬 모델을 원활하게 실행하기 위해)',
          },
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: '플러그인을 선택하기 전에 확인할 사항',
        items: [
          '**최근 업데이트 활동:** Obsidian 커뮤니티 플러그인 생태계는 유지관리 품질의 편차가 큽니다. 마지막 업데이트가 오래된 플러그인은 로컬 serving 도구의 현재 API 버전과 제대로 작동하지 않을 수 있습니다.',
          '**스트리밍 응답을 지원하는지 여부:** 스트리밍을 지원하지 않는 요청만 처리하는 플러그인은 긴 응답에서 눈에 띄게 느리게 느껴지는데, 토큰이 생성되는 대로 표시되는 대신 전체 응답을 기다려야 하기 때문입니다.',
          '**vault 콘텐츠를 처리하는 방식:** 일부 플러그인은 기존 노트에서 컨텍스트를 가져와 프롬프트에 포함할 수 있지만, 다른 플러그인은 수동으로 입력한 내용만 처리합니다 — 선택하기 전에 노트 인식 컨텍스트가 사용 사례에 중요한지 결정하십시오.',
          '**API 엔드포인트 필드가 실제로 구성 가능한지 여부:** 일부 플러그인은 일반적인 호환성을 주장하면서도 특정 클라우드 제공업체에 고정되어 있습니다 — 설치하기 전에 로컬 주소로 지정할 수 있는지 확인하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: '로컬 LLM을 Obsidian에 연결하는 데 API 키가 필요합니까?',
            a: '아닙니다 — 플러그인과 모델이 모두 사용자 자신의 기기에서 실행되는 순수한 로컬 구성에서는 클라우드 인증이 필요하지 않습니다. 일부 플러그인은 여전히 API 키 필드를 표시하지만, 로컬 연결의 경우 일반적으로 비워 두거나 임의의 값을 입력해도 됩니다.',
          },
          {
            q: 'Obsidian에서 로컬 LLM 플러그인을 사용하면 제 노트가 기기를 벗어납니까?',
            a: '아닙니다. 플러그인이 실제로 로컬 엔드포인트를 가리키고 있고 조용히 클라우드 서비스로 전환되지 않는 한 그렇지 않습니다. 구성된 주소가 localhost URL인지 확인하고, 외부 요청이 발생하지 않는지 확인하고 싶다면 플러그인의 네트워크 활동을 점검하십시오.',
          },
          {
            q: '동일한 로컬 모델 서버를 Obsidian과 다른 앱에서 동시에 사용할 수 있습니까?',
            a: '가능합니다 — OpenAI 호환 API를 제공하는 로컬 serving 도구는 어떤 앱이 요청을 보내든 API 요청에 응답할 뿐이므로, 일반적으로 여러 로컬 애플리케이션을 동시에 서비스할 수 있습니다.',
          },
          {
            q: 'Obsidian과 함께 로컬 LLM을 원활하게 실행하려면 어떤 하드웨어가 필요합니까?',
            a: 'Obsidian 자체는 가볍기 때문에 하드웨어 요구사항은 실질적으로 로컬 모델에 좌우됩니다. 선택한 모델을 단독으로 원활하게 실행할 수 있는 기기라면 Obsidian을 함께 실행해도 문제가 없습니다 — 모델별 요구사항은 VRAM 및 RAM 사이징 가이드를 참고하십시오.',
          },
        ],
      },
    },
  },
}
