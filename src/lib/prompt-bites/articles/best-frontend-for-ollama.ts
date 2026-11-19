import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'
import { starsFor } from '@/lib/power-local-llm/app-facts'

const ST = {
  en: starsFor('en'), de: starsFor('de'), fr: starsFor('fr'), ja: starsFor('ja'), zh: starsFor('zh'),
  es: starsFor('es'), pt: starsFor('pt'), ar: starsFor('ar'), ko: starsFor('ko'),
}

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    designSkin: 'hub',
    theme: 'Tool Comparisons',
    heroImage: '/images/best-frontend-for-ollama-overview-hero-en.webp',
    title: 'Best Frontend for Ollama?',
    dateModified: '2026-11-19',
    seoTitle: 'Best Frontend for Ollama? Open WebUI, Jan | Prompt Bites',
    metaDescription: 'Open WebUI is our top Ollama frontend pick: free, with RAG, on Linux and Windows. Jan, Chatbox and Page Assist need no Docker; SillyTavern suits roleplay.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-19',
    last_full_refresh: '2026-11-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers adding a chat UI to their Ollama setup',
    parentArticle: '/local-llms/best-local-llm-frontends',
    siblingBites: ['ollama-vs-lm-studio', 'jan-vs-lm-studio', 'best-local-llm-obsidian-integration'],
    is_living_page: true,
    targetKeywords: ['best frontend for ollama', 'ollama frontend', 'best gui for ollama', 'ollama web ui', 'ollama frontend linux', 'is open webui free'],
    quickAnswerTop: {
      en: {
        question: 'Best frontend for Ollama?',
        answer: 'Open WebUI is the best Ollama frontend and GUI for most users: it is free to self-host, runs in Docker or with pip, and adds RAG and multi-user accounts. Jan and Chatbox are desktop apps with no server to run, SillyTavern is built for roleplay, and Ollama\'s own app covers basic chat on macOS and Windows.',
        bullets: [
          'Open WebUI: best overall, Docker or pip, RAG, works on Windows, macOS, Linux',
          'Jan and Chatbox: desktop apps, no Docker, both connect to Ollama',
          'SillyTavern: roleplay and character cards, needs Node.js 20+ or Docker',
          'Ollama app: built-in chat for macOS and Windows, nothing extra to install',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Open WebUI is the best general-purpose Ollama frontend: RAG, user accounts and several Ollama connections, free to self-host',
          'Open WebUI\'s license is source-available (BSD-based with a branding clause), not OSI open source; SillyTavern, Jan, Chatbox and Page Assist are open source',
          'Jan, Chatbox and Page Assist need no Docker; Chatbox and Page Assist connect to Ollama, and Jan runs its own models and can connect to Ollama too',
          'SillyTavern is the pick for roleplay and character cards; it runs on Node.js 20+ or in Docker',
        ],
      },
      body1: {
        title: 'Open WebUI Is the Default Pick for Ollama',
        content: [
          '<strong>Open WebUI is the best frontend for Ollama for most people: a free, self-hosted web UI (GUI) that runs in Docker or with pip and adds RAG, multi-user accounts and several Ollama connections. It opens in the browser at localhost:3000 on Windows, macOS and Linux.</strong>',
          'Its license is BSD-3-based with a clause that forbids removing the Open WebUI branding once a deployment passes 50 users in 30 days, per the LICENSE file. That makes it source-available, not OSI open source.',
          'The table compares six Ollama frontends by setup and best use. SillyTavern is the pick for roleplay; Jan, Chatbox and Page Assist need no server.',
        ],
        columns: ['Frontend', 'Setup', 'Best for'],
        rows: [
          { 'Frontend': 'Open WebUI', 'Setup': 'Docker or pip', 'Best for': 'Most users, RAG, teams' },
          { 'Frontend': 'SillyTavern', 'Setup': 'Node.js 20+ or Docker', 'Best for': 'Roleplay, character cards' },
          { 'Frontend': 'Jan', 'Setup': 'Desktop app', 'Best for': 'Offline chat + models' },
          { 'Frontend': 'Chatbox', 'Setup': 'Desktop app', 'Best for': 'Simple client, web version' },
          { 'Frontend': 'Page Assist', 'Setup': 'Browser extension', 'Best for': 'Chat on any web page' },
          { 'Frontend': 'Ollama app', 'Setup': 'Built in (Mac, Windows)', 'Best for': 'Basic chat, no install' },
        ],
        callouts: [{ type: 'warning', text: 'Per the Open WebUI docs, when it runs in Docker, Ollama on the host must listen on 0.0.0.0 (set OLLAMA_HOST=0.0.0.0) or the connection fails. That exposes Ollama to your network, so keep it behind a firewall.' }],
      },
      body2: {
        title: 'Jan, Chatbox and Page Assist Skip Docker',
        content: [
          'Jan, Chatbox and Page Assist install like normal apps, so there is no Docker. Jan (Windows, macOS, Linux) runs its own models with a built-in llama.cpp engine and can also use Ollama as a custom provider at http://localhost:11434/v1. Chatbox (Windows, macOS, Linux, web) connects to Ollama through its API address, http://localhost:11434.',
          'Page Assist is a browser extension for Chrome, Firefox and Edge that chats with your Ollama models from any web page. Ollama\'s own desktop app (macOS, Windows) covers basic chat and file drop with nothing else to install.',
          'For install guides and the full ranking, see the <a href="/local-llms/best-local-llm-frontends" class="text-primary hover:underline">best local LLM frontends guide</a>.',
        ],
        callouts: [{ type: 'info', text: `Versions checked against the official GitHub repositories at the last update: Open WebUI 0.13.4 (${ST.en('open-webui')} stars), SillyTavern 1.19.0 (${ST.en('sillytavern')}), Jan 0.8.8 (${ST.en('jan')}), Chatbox 1.24.4 (${ST.en('chatbox')}), Page Assist 1.5.92 (${ST.en('page-assist')}). If a setup step stops working, check the project docs first: install commands change more often than the recommendations.` }],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Ollama Frontends',
        faqs: [
          {
            q: 'Is Open WebUI free?',
            a: 'Yes, it is free to self-host. Its license is BSD-based with a clause that forbids removing the Open WebUI branding above 50 users in 30 days, so it is source-available rather than OSI open source.',
          },
          {
            q: 'Does Open WebUI work with Ollama?',
            a: 'Yes. Run `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main` and open localhost:3000; it looks for Ollama at host.docker.internal:11434. Without Docker, run `pip install open-webui` and `open-webui serve` on Python 3.11 or 3.12.',
          },
          {
            q: 'Which Ollama frontend or GUI works on Linux and Windows?',
            a: 'Open WebUI, SillyTavern, Jan and Chatbox run on Windows, macOS and Linux, and Page Assist runs in Chrome, Firefox and Edge on any of them. Ollama\'s own app is macOS and Windows only.',
          },
          {
            q: 'Can I use SillyTavern with Ollama?',
            a: 'Yes. In SillyTavern open API Connections, choose Text Completion, select Ollama and enter http://localhost:11434. For a side-by-side look, see <a href="/local-llms/open-webui-vs-sillytavern" class="text-primary hover:underline">Open WebUI vs SillyTavern</a>.',
          },
          {
            q: 'Is there an Ollama frontend that does not need Docker?',
            a: 'Yes. Jan, Chatbox and Page Assist install like normal apps. In Jan add Ollama as a custom provider with http://localhost:11434/v1; in Chatbox enter http://localhost:11434. For the runtime itself, see <a href="/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    theme: 'Tool Comparisons',
    heroImage: '/images/best-frontend-for-ollama-overview-hero-de.webp',
    title: 'Bestes Frontend für Ollama?',
    seoTitle: 'Bestes Frontend für Ollama? Open WebUI, Jan | Prompt Bites',
    metaDescription: 'Unsere Wahl für Ollama: Open WebUI, kostenlos, mit RAG, unter Linux und Windows. Jan, Chatbox und Page Assist ohne Docker; SillyTavern fürs Rollenspiel.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    parentArticle: '/local-llms/best-local-llm-frontends',
    siblingBites: ['ollama-vs-lm-studio', 'jan-vs-lm-studio', 'best-local-llm-obsidian-integration'],
    is_living_page: true,
    targetKeywords: ['ollama frontend', 'bestes frontend für ollama', 'ollama frontend linux', 'ollama frontend windows', 'ollama web frontend', 'open webui kostenlos'],
    quickAnswerTop: {
      de: {
        question: 'Bestes Frontend für Ollama?',
        answer: 'Open WebUI ist das beste Ollama-Frontend für die meisten Nutzer: Es ist kostenlos selbst zu hosten, läuft mit Docker oder pip und bringt RAG und Mehrbenutzerkonten mit. Jan und Chatbox sind Desktop-Apps ohne Server, SillyTavern ist fürs Rollenspiel gebaut, und Ollamas eigene App deckt einfachen Chat auf macOS und Windows ab.',
        bullets: [
          'Open WebUI: insgesamt am besten, Docker oder pip, RAG, läuft unter Windows, macOS, Linux',
          'Jan und Chatbox: Desktop-Apps, kein Docker, beide verbinden sich mit Ollama',
          'SillyTavern: Rollenspiel und Charakterkarten, benötigt Node.js 20+ oder Docker',
          'Ollama-App: integrierter Chat für macOS und Windows, nichts extra zu installieren',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Open WebUI ist das beste Allzweck-Frontend für Ollama: RAG, Benutzerkonten und mehrere Ollama-Verbindungen, kostenlos selbst zu hosten',
          'Die Lizenz von Open WebUI ist source-available (BSD-basiert mit Branding-Klausel) und keine OSI-Open-Source-Lizenz; SillyTavern, Jan, Chatbox und Page Assist sind Open Source',
          'Jan, Chatbox und Page Assist brauchen kein Docker; Chatbox und Page Assist verbinden sich mit Ollama, Jan führt eigene Modelle aus und kann sich ebenfalls mit Ollama verbinden',
          'SillyTavern ist die Wahl für Rollenspiel und Charakterkarten; es läuft mit Node.js 20+ oder in Docker',
        ],
      },
      body1: {
        title: 'Open WebUI ist die Standardwahl für Ollama',
        content: [
          '<strong>Open WebUI ist für die meisten Nutzer das beste Frontend für Ollama: Es ist kostenlos selbst zu hosten, läuft mit Docker oder pip und bringt RAG, Mehrbenutzerkonten und mehrere Ollama-Verbindungen mit. Es öffnet sich im Browser unter localhost:3000 und läuft unter Windows, macOS und Linux.</strong>',
          'Laut LICENSE-Datei basiert die Lizenz auf BSD-3 und verbietet das Entfernen des Open-WebUI-Brandings, sobald ein Einsatz 50 Nutzer in 30 Tagen übersteigt. Damit ist sie source-available und keine OSI-Open-Source-Lizenz.',
          'Die Tabelle vergleicht sechs Ollama-Frontends nach Einrichtung und bestem Einsatz. SillyTavern ist die Wahl fürs Rollenspiel; Jan, Chatbox und Page Assist brauchen keinen Server.',
        ],
        columns: ['Frontend', 'Einrichtung', 'Am besten für'],
        rows: [
          { 'Frontend': 'Open WebUI', 'Einrichtung': 'Docker oder pip', 'Am besten für': 'Allgemeiner Chat, RAG, Teams' },
          { 'Frontend': 'SillyTavern', 'Einrichtung': 'Node.js 20+ oder Docker', 'Am besten für': 'Rollenspiel, Charakterkarten' },
          { 'Frontend': 'Jan', 'Einrichtung': 'Desktop-App', 'Am besten für': 'Offline-Chat + Modelle' },
          { 'Frontend': 'Chatbox', 'Einrichtung': 'Desktop-App', 'Am besten für': 'Einfacher Client, Web-Version' },
          { 'Frontend': 'Page Assist', 'Einrichtung': 'Browser-Erweiterung', 'Am besten für': 'Chat auf jeder Webseite' },
          { 'Frontend': 'Ollama-App', 'Einrichtung': 'Integriert (Mac, Windows)', 'Am besten für': 'Einfacher Chat, ohne Setup' },
        ],
        callouts: [{ type: 'warning', text: 'Laut Open-WebUI-Dokumentation muss Ollama auf dem Host bei Betrieb von Open WebUI in Docker auf 0.0.0.0 lauschen (OLLAMA_HOST=0.0.0.0 setzen), sonst scheitert die Verbindung. Das macht Ollama im Netzwerk erreichbar; schützen Sie es mit einer Firewall.' }],
      },
      body2: {
        title: 'Jan, Chatbox und Page Assist kommen ohne Docker aus',
        content: [
          'Jan, Chatbox und Page Assist installieren Sie wie normale Apps, Docker ist nicht nötig. Jan (Windows, macOS, Linux) führt eigene Modelle über eine integrierte llama.cpp-Engine aus und kann Ollama zusätzlich als benutzerdefinierten Anbieter unter http://localhost:11434/v1 nutzen. Chatbox (Windows, macOS, Linux, Web) verbindet sich über die API-Adresse http://localhost:11434 mit Ollama.',
          'Page Assist ist eine Browser-Erweiterung für Chrome, Firefox und Edge, die Ihre Ollama-Modelle auf jeder Webseite ansprechen kann. Ollamas eigene Desktop-App (macOS, Windows) deckt einfachen Chat und Datei-Drop ab, ohne dass Sie etwas Weiteres installieren.',
          'Installationsanleitungen und das vollständige Ranking finden Sie im <a href="/de/local-llms/best-local-llm-frontends" class="text-primary hover:underline">Vergleich der besten lokalen LLM-Frontends</a>.',
        ],
        callouts: [{ type: 'info', text: `Versionen zum Zeitpunkt der letzten Aktualisierung gegen die offiziellen GitHub-Repositories geprüft: Open WebUI 0.13.4 (${ST.de('open-webui')} Sterne), SillyTavern 1.19.0 (${ST.de('sillytavern')}), Jan 0.8.8 (${ST.de('jan')}), Chatbox 1.24.4 (${ST.de('chatbox')}), Page Assist 1.5.92 (${ST.de('page-assist')}). Funktioniert ein Einrichtungsschritt nicht mehr, prüfen Sie zuerst die Projektdokumentation: Installationsbefehle ändern sich häufiger als die Empfehlungen.` }],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Ollama-Frontends',
        faqs: [
          {
            q: 'Ist Open WebUI kostenlos?',
            a: 'Ja, es ist kostenlos selbst zu hosten. Die Lizenz basiert auf BSD und verbietet das Entfernen des Open-WebUI-Brandings ab 50 Nutzern in 30 Tagen; sie ist daher source-available und keine OSI-Open-Source-Lizenz.',
          },
          {
            q: 'Funktioniert Open WebUI mit Ollama?',
            a: 'Ja. Führen Sie `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main` aus und öffnen Sie localhost:3000; es sucht Ollama unter host.docker.internal:11434. Ohne Docker genügen `pip install open-webui` und `open-webui serve` unter Python 3.11 oder 3.12.',
          },
          {
            q: 'Welches Ollama-Frontend läuft unter Linux und Windows?',
            a: 'Open WebUI, SillyTavern, Jan und Chatbox laufen unter Windows, macOS und Linux, Page Assist in Chrome, Firefox und Edge auf allen drei. Ollamas eigene App gibt es nur für macOS und Windows.',
          },
          {
            q: 'Kann ich SillyTavern mit Ollama verwenden?',
            a: 'Ja. Öffnen Sie in SillyTavern API Connections, wählen Sie Text Completion, dann Ollama und tragen Sie http://localhost:11434 ein. Einen direkten Vergleich finden Sie unter <a href="/de/local-llms/open-webui-vs-sillytavern" class="text-primary hover:underline">Open WebUI vs. SillyTavern</a>.',
          },
          {
            q: 'Gibt es ein Ollama-Frontend ohne Docker?',
            a: 'Ja. Jan, Chatbox und Page Assist installieren Sie wie normale Apps. In Jan tragen Sie Ollama als benutzerdefinierten Anbieter mit http://localhost:11434/v1 ein, in Chatbox http://localhost:11434. Zur Laufzeit selbst siehe <a href="/de/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs. LM Studio</a>.',
          },
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    theme: 'Tool Comparisons',
    heroImage: '/images/best-frontend-for-ollama-overview-hero-fr.webp',
    title: 'Meilleur frontend pour Ollama ?',
    seoTitle: 'Meilleur frontend pour Ollama ? Open WebUI, Jan, Chatbox',
    metaDescription: 'Notre choix pour Ollama : Open WebUI, gratuit, avec RAG, sous Linux et Windows. Jan, Chatbox et Page Assist sans Docker ; SillyTavern pour le jeu de rôle.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    parentArticle: '/local-llms/best-local-llm-frontends',
    siblingBites: ['ollama-vs-lm-studio', 'jan-vs-lm-studio', 'best-local-llm-obsidian-integration'],
    is_living_page: true,
    targetKeywords: ['frontend ollama', 'meilleur frontend pour ollama', 'interface web ollama', 'ollama frontend windows', 'open webui gratuit'],
    quickAnswerTop: {
      fr: {
        question: 'Meilleur frontend pour Ollama ?',
        answer: 'Open WebUI est le meilleur frontend Ollama pour la plupart des utilisateurs : gratuit à auto-héberger, il fonctionne avec Docker ou pip et ajoute le RAG et les comptes multi-utilisateurs. Jan et Chatbox sont des applications de bureau sans serveur, SillyTavern vise le jeu de rôle, et l\'application d\'Ollama couvre le chat de base sur macOS et Windows.',
        bullets: [
          'Open WebUI : le meilleur en général, Docker ou pip, RAG, sur Windows, macOS, Linux',
          'Jan et Chatbox : applications de bureau, sans Docker, toutes deux reliées à Ollama',
          'SillyTavern : jeu de rôle et fiches de personnages, Node.js 20+ ou Docker requis',
          'Application Ollama : chat intégré pour macOS et Windows, rien à installer en plus',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Open WebUI est le meilleur frontend polyvalent pour Ollama : RAG, comptes utilisateurs et plusieurs connexions Ollama, gratuit à auto-héberger',
          'La licence d\'Open WebUI est source-available (base BSD avec clause de marque), pas une licence open source OSI ; SillyTavern, Jan, Chatbox et Page Assist sont open source',
          'Jan, Chatbox et Page Assist n\'ont pas besoin de Docker ; Chatbox et Page Assist se connectent à Ollama, Jan exécute ses propres modèles et peut aussi se connecter à Ollama',
          'SillyTavern est le choix pour le jeu de rôle et les fiches de personnages ; il fonctionne avec Node.js 20+ ou dans Docker',
        ],
      },
      body1: {
        title: 'Open WebUI est le choix par défaut pour Ollama',
        content: [
          '<strong>Open WebUI est le meilleur frontend pour Ollama pour la plupart des gens : il est gratuit à auto-héberger, fonctionne avec Docker ou pip et ajoute le RAG, les comptes multi-utilisateurs et plusieurs connexions Ollama. Il s\'ouvre dans le navigateur à localhost:3000 sous Windows, macOS et Linux.</strong>',
          'Selon le fichier LICENSE, sa licence repose sur BSD-3 et interdit de retirer la marque Open WebUI dès qu\'un déploiement dépasse 50 utilisateurs sur 30 jours. Elle est donc source-available, pas open source au sens de l\'OSI.',
          'Le tableau compare six frontends Ollama par installation et meilleur usage. SillyTavern est le choix pour le jeu de rôle ; Jan, Chatbox et Page Assist n\'exigent aucun serveur.',
        ],
        columns: ['Frontend', 'Installation', 'Idéal pour'],
        rows: [
          { 'Frontend': 'Open WebUI', 'Installation': 'Docker ou pip', 'Idéal pour': 'Usage général, RAG, équipes' },
          { 'Frontend': 'SillyTavern', 'Installation': 'Node.js 20+ ou Docker', 'Idéal pour': 'Jeu de rôle, fiches perso' },
          { 'Frontend': 'Jan', 'Installation': 'Application de bureau', 'Idéal pour': 'Chat hors ligne + modèles' },
          { 'Frontend': 'Chatbox', 'Installation': 'Application de bureau', 'Idéal pour': 'Client simple, version web' },
          { 'Frontend': 'Page Assist', 'Installation': 'Extension de navigateur', 'Idéal pour': 'Chat sur toute page web' },
          { 'Frontend': 'App Ollama', 'Installation': 'Intégrée (Mac, Windows)', 'Idéal pour': 'Chat de base, sans installation' },
        ],
        callouts: [{ type: 'warning', text: 'Selon la documentation d\'Open WebUI, lorsqu\'il tourne dans Docker, Ollama sur l\'hôte doit écouter sur 0.0.0.0 (définir OLLAMA_HOST=0.0.0.0), sinon la connexion échoue. Cela expose Ollama à votre réseau ; protégez-le par un pare-feu.' }],
      },
      body2: {
        title: 'Jan, Chatbox et Page Assist se passent de Docker',
        content: [
          'Jan, Chatbox et Page Assist s\'installent comme des applications ordinaires, sans Docker. Jan (Windows, macOS, Linux) exécute ses propres modèles avec un moteur llama.cpp intégré et peut aussi utiliser Ollama comme fournisseur personnalisé à l\'adresse http://localhost:11434/v1. Chatbox (Windows, macOS, Linux, web) se connecte à Ollama via son adresse d\'API, http://localhost:11434.',
          'Page Assist est une extension de navigateur pour Chrome, Firefox et Edge qui dialogue avec vos modèles Ollama depuis n\'importe quelle page web. L\'application de bureau d\'Ollama (macOS, Windows) couvre le chat de base et le dépôt de fichiers, sans rien installer d\'autre.',
          'Pour les guides d\'installation et le classement complet, consultez le <a href="/fr/local-llms/best-local-llm-frontends" class="text-primary hover:underline">guide des meilleurs frontends LLM locaux</a>.',
        ],
        callouts: [{ type: 'info', text: `Versions vérifiées sur les dépôts GitHub officiels à la dernière mise à jour : Open WebUI 0.13.4 (${ST.fr('open-webui')} étoiles), SillyTavern 1.19.0 (${ST.fr('sillytavern')}), Jan 0.8.8 (${ST.fr('jan')}), Chatbox 1.24.4 (${ST.fr('chatbox')}), Page Assist 1.5.92 (${ST.fr('page-assist')}). Si une étape d'installation ne fonctionne plus, consultez d'abord la documentation du projet : les commandes d'installation changent plus souvent que les recommandations.` }],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les frontends Ollama',
        faqs: [
          {
            q: 'Open WebUI est-il gratuit ?',
            a: 'Oui, il est gratuit à auto-héberger. Sa licence repose sur BSD et interdit de retirer la marque Open WebUI au-delà de 50 utilisateurs sur 30 jours ; elle est donc source-available, pas open source au sens de l\'OSI.',
          },
          {
            q: 'Open WebUI fonctionne-t-il avec Ollama ?',
            a: 'Oui. Exécutez `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main` puis ouvrez localhost:3000 ; il cherche Ollama à host.docker.internal:11434. Sans Docker, lancez `pip install open-webui` puis `open-webui serve` avec Python 3.11 ou 3.12.',
          },
          {
            q: 'Quel frontend Ollama fonctionne sous Linux et Windows ?',
            a: 'Open WebUI, SillyTavern, Jan et Chatbox fonctionnent sous Windows, macOS et Linux, et Page Assist dans Chrome, Firefox et Edge sur ces trois systèmes. L\'application d\'Ollama n\'existe que pour macOS et Windows.',
          },
          {
            q: 'Puis-je utiliser SillyTavern avec Ollama ?',
            a: 'Oui. Dans SillyTavern, ouvrez API Connections, choisissez Text Completion, sélectionnez Ollama et saisissez http://localhost:11434. Pour une comparaison directe, voir <a href="/fr/local-llms/open-webui-vs-sillytavern" class="text-primary hover:underline">Open WebUI vs SillyTavern</a>.',
          },
          {
            q: 'Existe-t-il un frontend Ollama sans Docker ?',
            a: 'Oui. Jan, Chatbox et Page Assist s\'installent comme des applications ordinaires. Dans Jan, ajoutez Ollama comme fournisseur personnalisé avec http://localhost:11434/v1 ; dans Chatbox, saisissez http://localhost:11434. Pour le moteur lui-même, voir <a href="/fr/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    theme: 'Tool Comparisons',
    heroImage: '/images/best-frontend-for-ollama-overview-hero-ja.webp',
    title: 'Ollamaに最適なフロントエンドは？',
    seoTitle: 'Ollamaフロントエンド比較｜Open WebUI・Jan',
    metaDescription: 'OllamaにはOpen WebUIが最適です。Docker/pip、RAG対応。Jan・Chatbox・Page AssistはDocker不要、ロールプレイならSillyTavernです。',
    publishDate: '2026-05-18',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    parentArticle: '/local-llms/best-local-llm-frontends',
    siblingBites: ['ollama-vs-lm-studio', 'jan-vs-lm-studio', 'best-local-llm-obsidian-integration'],
    is_living_page: true,
    targetKeywords: ['Ollama フロントエンド', 'Ollama GUI おすすめ', 'Open WebUI 無料', 'SillyTavern Ollama', 'Ollama Linux フロントエンド'],
    quickAnswerTop: {
      ja: {
        question: 'Ollamaに最適なフロントエンドは？',
        answer: 'Open WebUIはほとんどのユーザーにとって最適なOllamaフロントエンドです。無料でセルフホストでき、Dockerまたはpipで動作し、RAGとマルチユーザーアカウントに対応します。JanとChatboxはサーバー不要のデスクトップアプリ、SillyTavernはロールプレイ向け、Ollama標準アプリはmacOSとWindowsで基本的なチャットに使えます。',
        bullets: [
          'Open WebUI：総合最優秀、Dockerまたはpip、RAG対応、Windows・macOS・Linuxで動作',
          'JanとChatbox：デスクトップアプリ、Docker不要、どちらもOllamaに接続可能',
          'SillyTavern：ロールプレイとキャラクターカード向け、Node.js 20以上またはDockerが必要',
          'Ollamaアプリ：macOSとWindows向けの内蔵チャット、追加インストール不要',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Open WebUIは最も汎用的なOllamaフロントエンドです。RAG、ユーザーアカウント、複数のOllama接続に対応し、無料でセルフホストできます',
          'Open WebUIのライセンスはソースアベイラブル（BSDベースにブランディング条項付き）で、OSIのオープンソースではありません。SillyTavern、Jan、Chatbox、Page Assistはオープンソースです',
          'Jan、Chatbox、Page AssistはDocker不要です。ChatboxとPage AssistはOllamaに接続し、Janは独自にモデルを実行しつつOllamaにも接続できます',
          'SillyTavernはロールプレイとキャラクターカード向けで、Node.js 20以上またはDockerで動作します',
        ],
      },
      body1: {
        title: 'Open WebUIがOllamaの標準的な選択',
        content: [
          '<strong>Open WebUIはほとんどの人にとって最適なOllamaフロントエンドです。無料でセルフホストでき、Dockerまたはpipで動作し、RAG、マルチユーザーアカウント、複数のOllama接続を追加します。Windows・macOS・Linuxのブラウザでlocalhost:3000として開きます。</strong>',
          'LICENSEファイルによると、ライセンスはBSD-3をベースに、30日間で50ユーザーを超える運用ではOpen WebUIのブランド表示の削除を禁じています。そのためソースアベイラブルであり、OSIのオープンソースではありません。',
          '以下の表は、6つのOllamaフロントエンドをセットアップと最適用途で比較しています。ロールプレイにはSillyTavern、Jan・Chatbox・Page Assistはサーバー不要です。',
        ],
        columns: ['フロントエンド', 'セットアップ', '最適用途'],
        rows: [
          { 'フロントエンド': 'Open WebUI', 'セットアップ': 'Dockerまたはpip', '最適用途': '一般用途、RAG、チーム' },
          { 'フロントエンド': 'SillyTavern', 'セットアップ': 'Node.js 20以上かDocker', '最適用途': 'ロールプレイ、キャラカード' },
          { 'フロントエンド': 'Jan', 'セットアップ': 'デスクトップアプリ', '最適用途': 'オフラインチャット＋モデル' },
          { 'フロントエンド': 'Chatbox', 'セットアップ': 'デスクトップアプリ', '最適用途': 'シンプルなクライアント、Web版' },
          { 'フロントエンド': 'Page Assist', 'セットアップ': 'ブラウザ拡張機能', '最適用途': '任意のWebページでチャット' },
          { 'フロントエンド': 'Ollamaアプリ', 'セットアップ': '内蔵（Mac、Windows）', '最適用途': '基本チャット、導入不要' },
        ],
        callouts: [{ type: 'warning', text: 'Open WebUIのドキュメントによると、Docker上で動かす場合、ホスト側のOllamaは0.0.0.0で待ち受ける必要があります（OLLAMA_HOST=0.0.0.0を設定）。そうしないと接続に失敗します。これによりOllamaがネットワークに公開されるため、ファイアウォールで保護してください。' }],
      },
      body2: {
        title: 'Jan、Chatbox、Page AssistはDocker不要',
        content: [
          'Jan、Chatbox、Page Assistは通常のアプリと同じようにインストールでき、Dockerは不要です。Jan（Windows、macOS、Linux）は内蔵のllama.cppエンジンで独自にモデルを実行し、http://localhost:11434/v1 のカスタムプロバイダーとしてOllamaも利用できます。Chatbox（Windows、macOS、Linux、Web版）はAPIアドレスhttp://localhost:11434を指定してOllamaに接続します。',
          'Page AssistはChrome、Firefox、Edge向けのブラウザ拡張機能で、任意のWebページからOllamaのモデルとチャットできます。Ollama標準のデスクトップアプリ（macOS、Windows）は、追加インストールなしで基本的なチャットとファイルのドロップに対応します。',
          'インストールガイドと完全なランキングは、<a href="/ja/local-llms/best-local-llm-frontends" class="text-primary hover:underline">最良のローカルLLMフロントエンドガイド</a>をご覧ください。',
        ],
        callouts: [{ type: 'info', text: `最終更新時点で公式GitHubリポジトリと照合したバージョン：Open WebUI 0.13.4（GitHubスター${ST.ja('open-webui')}）、SillyTavern 1.19.0（${ST.ja('sillytavern')}）、Jan 0.8.8（${ST.ja('jan')}）、Chatbox 1.24.4（${ST.ja('chatbox')}）、Page Assist 1.5.92（${ST.ja('page-assist')}）。手順が動かなくなった場合は、まずプロジェクトのドキュメントを確認してください。導入コマンドは推奨内容より頻繁に変わります。` }],
      },
      faq: {
        id: 'faq',
        title: 'Ollamaフロントエンドに関するよくある質問',
        faqs: [
          {
            q: 'Open WebUIは無料ですか？',
            a: 'はい、無料でセルフホストできます。ライセンスはBSDベースで、30日間で50ユーザーを超える運用ではOpen WebUIのブランド表示の削除を禁じているため、ソースアベイラブルでありOSIのオープンソースではありません。',
          },
          {
            q: 'Open WebUIはOllamaと連携しますか？',
            a: 'はい。`docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main`を実行してlocalhost:3000を開きます。Ollamaはhost.docker.internal:11434で探されます。Dockerを使わない場合は、Python 3.11または3.12で`pip install open-webui`と`open-webui serve`を実行します。',
          },
          {
            q: 'LinuxとWindowsで動くOllamaフロントエンドはどれですか？',
            a: 'Open WebUI、SillyTavern、Jan、ChatboxはWindows・macOS・Linuxで動作し、Page AssistはどのOSでもChrome、Firefox、Edgeで動作します。Ollama標準アプリはmacOSとWindowsのみです。',
          },
          {
            q: 'SillyTavernはOllamaで使用できますか？',
            a: 'はい。SillyTavernでAPI Connectionsを開き、Text Completionを選んでOllamaを指定し、http://localhost:11434を入力します。比較は<a href="/ja/local-llms/open-webui-vs-sillytavern" class="text-primary hover:underline">Open WebUI vs SillyTavern</a>をご覧ください。',
          },
          {
            q: 'Dockerが不要なOllamaフロントエンドはありますか？',
            a: 'はい。Jan、Chatbox、Page Assistは通常のアプリと同様にインストールできます。Janではhttp://localhost:11434/v1をカスタムプロバイダーとして追加し、Chatboxではhttp://localhost:11434を入力します。ランタイム自体は<a href="/ja/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>をご覧ください。',
          },
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    theme: 'Tool Comparisons',
    heroImage: '/images/best-frontend-for-ollama-overview-hero-zh.webp',
    title: 'Ollama 最佳前端是什么？',
    seoTitle: 'Ollama 最佳前端：Open WebUI 与 Jan 对比',
    metaDescription: '我们为 Ollama 推荐 Open WebUI：免费，Docker 或 pip，支持 RAG。Jan、Chatbox、Page Assist 无需 Docker，角色扮演选 SillyTavern。',
    publishDate: '2026-05-18',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    parentArticle: '/local-llms/best-local-llm-frontends',
    siblingBites: ['ollama-vs-lm-studio', 'jan-vs-lm-studio', 'best-local-llm-obsidian-integration'],
    is_living_page: true,
    targetKeywords: ['Ollama 前端', 'Ollama 最佳前端', 'Ollama 界面', 'Open WebUI 免费吗', 'Ollama 前端 Windows'],
    quickAnswerTop: {
      zh: {
        question: 'Ollama 最佳前端是什么？',
        answer: 'Open WebUI 是大多数用户的最佳 Ollama 前端：免费自托管，可用 Docker 或 pip 运行，并提供 RAG 和多用户账户。Jan 和 Chatbox 是无需服务器的桌面应用，SillyTavern 专为角色扮演打造，Ollama 自带应用可在 macOS 和 Windows 上完成基础聊天。',
        bullets: [
          'Open WebUI：综合最佳，Docker 或 pip，支持 RAG，可在 Windows、macOS、Linux 使用',
          'Jan 和 Chatbox：桌面应用，无需 Docker，均可连接 Ollama',
          'SillyTavern：角色扮演和角色卡，需要 Node.js 20+ 或 Docker',
          'Ollama 应用：macOS 和 Windows 内置聊天，无需额外安装',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Open WebUI 是最佳通用 Ollama 前端：支持 RAG、用户账户和多个 Ollama 连接，可免费自托管',
          'Open WebUI 的许可证是源码可用（基于 BSD 并带品牌条款），不是 OSI 开源许可证；SillyTavern、Jan、Chatbox 和 Page Assist 均为开源',
          'Jan、Chatbox 和 Page Assist 无需 Docker；Chatbox 和 Page Assist 连接 Ollama，Jan 自带模型运行能力，也可连接 Ollama',
          'SillyTavern 适合角色扮演和角色卡，可用 Node.js 20+ 或 Docker 运行',
        ],
      },
      body1: {
        title: 'Open WebUI 是 Ollama 的默认首选',
        content: [
          '<strong>Open WebUI 是大多数人的最佳 Ollama 前端：免费自托管，可用 Docker 或 pip 运行，并提供 RAG、多用户账户和多个 Ollama 连接。它在 Windows、macOS 和 Linux 上通过浏览器访问 localhost:3000。</strong>',
          '根据 LICENSE 文件，其许可证以 BSD-3 为基础，并禁止在部署于 30 天内超过 50 名用户后移除 Open WebUI 品牌标识。因此它属于源码可用，而不是 OSI 开源。',
          '下表按安装方式和最佳用途比较六款 Ollama 前端。角色扮演选 SillyTavern；Jan、Chatbox 和 Page Assist 无需服务器。',
        ],
        columns: ['前端', '安装方式', '最适合'],
        rows: [
          { '前端': 'Open WebUI', '安装方式': 'Docker 或 pip', '最适合': '大多数用户、RAG、团队' },
          { '前端': 'SillyTavern', '安装方式': 'Node.js 20+ 或 Docker', '最适合': '角色扮演、角色卡' },
          { '前端': 'Jan', '安装方式': '桌面应用', '最适合': '离线聊天 + 模型管理' },
          { '前端': 'Chatbox', '安装方式': '桌面应用', '最适合': '简洁客户端、网页版' },
          { '前端': 'Page Assist', '安装方式': '浏览器扩展', '最适合': '在任意网页聊天' },
          { '前端': 'Ollama 应用', '安装方式': '内置（Mac、Windows）', '最适合': '基础聊天，免安装' },
        ],
        callouts: [{ type: 'warning', text: '根据 Open WebUI 文档，在 Docker 中运行时，宿主机上的 Ollama 必须监听 0.0.0.0（设置 OLLAMA_HOST=0.0.0.0），否则连接会失败。这会让 Ollama 暴露在你的网络中，请用防火墙加以保护。' }],
      },
      body2: {
        title: 'Jan、Chatbox 和 Page Assist 无需 Docker',
        content: [
          'Jan、Chatbox 和 Page Assist 像普通应用一样安装，不需要 Docker。Jan（Windows、macOS、Linux）用内置 llama.cpp 引擎运行自己的模型，也可把 Ollama 添加为自定义提供商，地址为 http://localhost:11434/v1。Chatbox（Windows、macOS、Linux、网页版）通过 API 地址 http://localhost:11434 连接 Ollama。',
          'Page Assist 是适用于 Chrome、Firefox 和 Edge 的浏览器扩展，可在任意网页上与你的 Ollama 模型聊天。Ollama 自带桌面应用（macOS、Windows）无需其他安装，即可完成基础聊天和拖放文件。',
          '安装指南和完整排名请参阅 <a href="/zh/local-llms/best-local-llm-frontends" class="text-primary hover:underline">最佳本地LLM前端指南</a>。',
        ],
        callouts: [{ type: 'info', text: `最近一次更新时已对照官方 GitHub 仓库核实版本：Open WebUI 0.13.4（${ST.zh('open-webui')} GitHub 星标）、SillyTavern 1.19.0（${ST.zh('sillytavern')}）、Jan 0.8.8（${ST.zh('jan')}）、Chatbox 1.24.4（${ST.zh('chatbox')}）、Page Assist 1.5.92（${ST.zh('page-assist')}）。如果上述步骤失效，请先查看项目文档：安装命令的变动比推荐结论更频繁。` }],
      },
      faq: {
        id: 'faq',
        title: '关于 Ollama 前端的快速解答',
        faqs: [
          {
            q: 'Open WebUI 免费吗？',
            a: '免费，可自托管。其许可证以 BSD 为基础，禁止在 30 天内超过 50 名用户的部署中移除 Open WebUI 品牌标识，因此属于源码可用，而不是 OSI 开源。',
          },
          {
            q: 'Open WebUI 与 Ollama 兼容吗？',
            a: '兼容。运行 `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main` 并打开 localhost:3000；它会在 host.docker.internal:11434 查找 Ollama。不用 Docker 时，在 Python 3.11 或 3.12 下运行 `pip install open-webui` 和 `open-webui serve`。',
          },
          {
            q: '哪个 Ollama 前端支持 Linux 和 Windows？',
            a: 'Open WebUI、SillyTavern、Jan 和 Chatbox 可在 Windows、macOS 和 Linux 上运行，Page Assist 可在这三种系统的 Chrome、Firefox 和 Edge 中运行。Ollama 自带应用仅支持 macOS 和 Windows。',
          },
          {
            q: '可以将 SillyTavern 与 Ollama 配合使用吗？',
            a: '可以。在 SillyTavern 中打开 API Connections，选择 Text Completion，选择 Ollama 并填入 http://localhost:11434。对比详见 <a href="/zh/local-llms/open-webui-vs-sillytavern" class="text-primary hover:underline">Open WebUI vs SillyTavern</a>。',
          },
          {
            q: '有不需要 Docker 的 Ollama 前端吗？',
            a: '有。Jan、Chatbox 和 Page Assist 像普通应用一样安装。在 Jan 中把 Ollama 添加为自定义提供商，地址 http://localhost:11434/v1；在 Chatbox 中填入 http://localhost:11434。运行时本身请参阅 <a href="/zh/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>。',
          },
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    theme: 'Tool Comparisons',
    heroImage: '/images/best-frontend-for-ollama-overview-hero-es.webp',
    title: '¿Mejor frontend para Ollama?',
    seoTitle: 'Mejor frontend para Ollama: Open WebUI, Jan | Prompt Bites',
    metaDescription: 'Nuestra elección para Ollama: Open WebUI, gratis, con RAG, en Linux y Windows. Jan, Chatbox y Page Assist sin Docker; SillyTavern para roleplay.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermedio',
    audience: 'Desarrolladores que añaden una interfaz de chat a su configuración de Ollama',
    parentArticle: '/local-llms/best-local-llm-frontends',
    siblingBites: ['ollama-vs-lm-studio', 'jan-vs-lm-studio', 'best-local-llm-obsidian-integration'],
    is_living_page: true,
    targetKeywords: ['frontend para ollama', 'mejor frontend para ollama', 'ollama interfaz', 'ollama web frontend', 'open webui gratis'],
    quickAnswerTop: {
      es: {
        question: '¿Mejor frontend para Ollama?',
        answer: 'Open WebUI es el mejor frontend para Ollama para la mayoría de usuarios: es gratis de autoalojar, funciona con Docker o pip y añade RAG y cuentas multiusuario. Jan y Chatbox son apps de escritorio sin servidor, SillyTavern está hecho para roleplay y la app propia de Ollama cubre el chat básico en macOS y Windows.',
        bullets: [
          'Open WebUI: el mejor en general, Docker o pip, RAG, en Windows, macOS y Linux',
          'Jan y Chatbox: apps de escritorio, sin Docker, ambas se conectan a Ollama',
          'SillyTavern: roleplay y tarjetas de personaje, requiere Node.js 20+ o Docker',
          'App de Ollama: chat integrado en macOS y Windows, sin instalar nada más',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Open WebUI es el mejor frontend de propósito general para Ollama: RAG, cuentas de usuario y varias conexiones a Ollama, gratis de autoalojar',
          'La licencia de Open WebUI es source-available (base BSD con cláusula de marca), no una licencia open source de la OSI; SillyTavern, Jan, Chatbox y Page Assist son open source',
          'Jan, Chatbox y Page Assist no necesitan Docker; Chatbox y Page Assist se conectan a Ollama, y Jan ejecuta sus propios modelos y también puede conectarse a Ollama',
          'SillyTavern es la opción para roleplay y tarjetas de personaje; funciona con Node.js 20+ o en Docker',
        ],
      },
      body1: {
        title: 'Open WebUI es la opción por defecto para Ollama',
        content: [
          '<strong>Open WebUI es el mejor frontend para Ollama para la mayoría de personas: es gratis de autoalojar, funciona con Docker o pip y añade RAG, cuentas multiusuario y varias conexiones a Ollama. Se abre en el navegador en localhost:3000 en Windows, macOS y Linux.</strong>',
          'Según el archivo LICENSE, su licencia se basa en BSD-3 y prohíbe quitar la marca Open WebUI cuando un despliegue supera los 50 usuarios en 30 días. Por eso es source-available y no open source según la OSI.',
          'La tabla compara seis frontends para Ollama por instalación y mejor uso. SillyTavern es la opción para roleplay; Jan, Chatbox y Page Assist no necesitan servidor.',
        ],
        columns: ['Frontend', 'Instalación', 'Ideal para'],
        rows: [
          { 'Frontend': 'Open WebUI', 'Instalación': 'Docker o pip', 'Ideal para': 'Mayoría, RAG, equipos' },
          { 'Frontend': 'SillyTavern', 'Instalación': 'Node.js 20+ o Docker', 'Ideal para': 'Roleplay, tarjetas' },
          { 'Frontend': 'Jan', 'Instalación': 'App de escritorio', 'Ideal para': 'Chat offline + modelos' },
          { 'Frontend': 'Chatbox', 'Instalación': 'App de escritorio', 'Ideal para': 'Cliente simple, versión web' },
          { 'Frontend': 'Page Assist', 'Instalación': 'Extensión del navegador', 'Ideal para': 'Chat en cualquier web' },
          { 'Frontend': 'App de Ollama', 'Instalación': 'Integrada (Mac, Windows)', 'Ideal para': 'Chat básico, sin instalar' },
        ],
        callouts: [{ type: 'warning', text: 'Según la documentación de Open WebUI, cuando se ejecuta en Docker, Ollama en el host debe escuchar en 0.0.0.0 (define OLLAMA_HOST=0.0.0.0) o la conexión falla. Esto expone Ollama a tu red, así que protégelo con un cortafuegos.' }],
      },
      body2: {
        title: 'Jan, Chatbox y Page Assist no necesitan Docker',
        content: [
          'Jan, Chatbox y Page Assist se instalan como apps normales, sin Docker. Jan (Windows, macOS, Linux) ejecuta sus propios modelos con un motor llama.cpp integrado y también puede usar Ollama como proveedor personalizado en http://localhost:11434/v1. Chatbox (Windows, macOS, Linux, web) se conecta a Ollama mediante su dirección de API, http://localhost:11434.',
          'Page Assist es una extensión de navegador para Chrome, Firefox y Edge que chatea con tus modelos de Ollama desde cualquier página web. La app de escritorio de Ollama (macOS, Windows) cubre el chat básico y soltar archivos sin instalar nada más.',
          'Para guías de instalación y el ranking completo, consulta la <a href="/es/local-llms/best-local-llm-frontends" class="text-primary hover:underline">guía de los mejores frontends de LLM locales</a>.',
        ],
        callouts: [{ type: 'info', text: `Versiones comprobadas en los repositorios oficiales de GitHub en la última actualización: Open WebUI 0.13.4 (${ST.es('open-webui')} estrellas), SillyTavern 1.19.0 (${ST.es('sillytavern')}), Jan 0.8.8 (${ST.es('jan')}), Chatbox 1.24.4 (${ST.es('chatbox')}), Page Assist 1.5.92 (${ST.es('page-assist')}). Si un paso de instalación deja de funcionar, consulta primero la documentación del proyecto: los comandos de instalación cambian más a menudo que las recomendaciones.` }],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas rápidas sobre frontends para Ollama',
        faqs: [
          {
            q: '¿Es gratis Open WebUI?',
            a: 'Sí, es gratis de autoalojar. Su licencia se basa en BSD y prohíbe quitar la marca Open WebUI por encima de 50 usuarios en 30 días, así que es source-available y no open source según la OSI.',
          },
          {
            q: '¿Funciona Open WebUI con Ollama?',
            a: 'Sí. Ejecuta `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main` y abre localhost:3000; busca Ollama en host.docker.internal:11434. Sin Docker, ejecuta `pip install open-webui` y `open-webui serve` con Python 3.11 o 3.12.',
          },
          {
            q: '¿Qué frontend de Ollama funciona en Linux y Windows?',
            a: 'Open WebUI, SillyTavern, Jan y Chatbox funcionan en Windows, macOS y Linux, y Page Assist en Chrome, Firefox y Edge en los tres. La app propia de Ollama solo existe para macOS y Windows.',
          },
          {
            q: '¿Puedo usar SillyTavern con Ollama?',
            a: 'Sí. En SillyTavern abre API Connections, elige Text Completion, selecciona Ollama e introduce http://localhost:11434. Para una comparación directa, consulta <a href="/es/local-llms/open-webui-vs-sillytavern" class="text-primary hover:underline">Open WebUI vs SillyTavern</a>.',
          },
          {
            q: '¿Hay un frontend de Ollama que no necesite Docker?',
            a: 'Sí. Jan, Chatbox y Page Assist se instalan como apps normales. En Jan añade Ollama como proveedor personalizado con http://localhost:11434/v1; en Chatbox introduce http://localhost:11434. Para el runtime en sí, consulta <a href="/es/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    theme: 'Tool Comparisons',
    heroImage: '/images/best-frontend-for-ollama-overview-hero-pt.webp',
    title: 'Melhor frontend para Ollama?',
    seoTitle: 'Melhor frontend para Ollama? Open WebUI, Jan, Chatbox',
    metaDescription: 'Nossa escolha para o Ollama: Open WebUI, grátis, com RAG, no Linux e no Windows. Jan, Chatbox e Page Assist sem Docker; SillyTavern para roleplay.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores adicionando uma interface de chat à sua configuração de Ollama',
    parentArticle: '/local-llms/best-local-llm-frontends',
    siblingBites: ['ollama-vs-lm-studio', 'jan-vs-lm-studio', 'best-local-llm-obsidian-integration'],
    is_living_page: true,
    targetKeywords: ['frontend para ollama', 'melhor frontend para ollama', 'interface para ollama', 'open webui é grátis', 'ollama frontend windows'],
    quickAnswerTop: {
      pt: {
        question: 'Melhor frontend para Ollama?',
        answer: 'O Open WebUI é o melhor frontend para Ollama para a maioria dos usuários: é grátis para hospedar, roda com Docker ou pip e adiciona RAG e contas multiusuário. Jan e Chatbox são apps de desktop sem servidor, o SillyTavern é feito para roleplay e o app do Ollama cobre o chat básico no macOS e no Windows.',
        bullets: [
          'Open WebUI: melhor no geral, Docker ou pip, RAG, no Windows, macOS e Linux',
          'Jan e Chatbox: apps de desktop, sem Docker, ambos se conectam ao Ollama',
          'SillyTavern: roleplay e fichas de personagem, exige Node.js 20+ ou Docker',
          'App do Ollama: chat integrado no macOS e no Windows, nada extra para instalar',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O Open WebUI é o melhor frontend de uso geral para Ollama: RAG, contas de usuário e várias conexões com o Ollama, grátis para hospedar por conta própria',
          'A licença do Open WebUI é source-available (base BSD com cláusula de marca), não uma licença open source da OSI; SillyTavern, Jan, Chatbox e Page Assist são open source',
          'Jan, Chatbox e Page Assist não precisam de Docker; Chatbox e Page Assist se conectam ao Ollama, e o Jan roda seus próprios modelos e também pode se conectar ao Ollama',
          'O SillyTavern é a escolha para roleplay e fichas de personagem; roda com Node.js 20+ ou no Docker',
        ],
      },
      body1: {
        title: 'Open WebUI é a escolha padrão para o Ollama',
        content: [
          '<strong>O Open WebUI é o melhor frontend para Ollama para a maioria das pessoas: é grátis para hospedar por conta própria, roda com Docker ou pip e adiciona RAG, contas multiusuário e várias conexões com o Ollama. Abre no navegador em localhost:3000 no Windows, macOS e Linux.</strong>',
          'Segundo o arquivo LICENSE, a licença é baseada na BSD-3 e proíbe remover a marca Open WebUI quando uma implantação passa de 50 usuários em 30 dias. Por isso ela é source-available, e não open source segundo a OSI.',
          'A tabela compara seis frontends para Ollama por instalação e melhor uso. O SillyTavern é a escolha para roleplay; Jan, Chatbox e Page Assist não precisam de servidor.',
        ],
        columns: ['Frontend', 'Instalação', 'Ideal para'],
        rows: [
          { 'Frontend': 'Open WebUI', 'Instalação': 'Docker ou pip', 'Ideal para': 'Maioria, RAG, equipes' },
          { 'Frontend': 'SillyTavern', 'Instalação': 'Node.js 20+ ou Docker', 'Ideal para': 'Roleplay, fichas' },
          { 'Frontend': 'Jan', 'Instalação': 'App de desktop', 'Ideal para': 'Chat offline + modelos' },
          { 'Frontend': 'Chatbox', 'Instalação': 'App de desktop', 'Ideal para': 'Cliente simples, versão web' },
          { 'Frontend': 'Page Assist', 'Instalação': 'Extensão de navegador', 'Ideal para': 'Chat em qualquer página' },
          { 'Frontend': 'App do Ollama', 'Instalação': 'Integrado (Mac, Windows)', 'Ideal para': 'Chat básico, sem instalar' },
        ],
        callouts: [{ type: 'warning', text: 'Segundo a documentação do Open WebUI, quando ele roda no Docker, o Ollama no host precisa escutar em 0.0.0.0 (defina OLLAMA_HOST=0.0.0.0), ou a conexão falha. Isso expõe o Ollama à sua rede, então proteja-o com um firewall.' }],
      },
      body2: {
        title: 'Jan, Chatbox e Page Assist dispensam o Docker',
        content: [
          'Jan, Chatbox e Page Assist se instalam como apps comuns, sem Docker. O Jan (Windows, macOS, Linux) roda seus próprios modelos com um motor llama.cpp integrado e também pode usar o Ollama como provedor personalizado em http://localhost:11434/v1. O Chatbox (Windows, macOS, Linux, web) se conecta ao Ollama pelo endereço da API, http://localhost:11434.',
          'O Page Assist é uma extensão de navegador para Chrome, Firefox e Edge que conversa com seus modelos do Ollama em qualquer página da web. O app de desktop do próprio Ollama (macOS, Windows) cobre o chat básico e o arrastar de arquivos sem nada extra para instalar.',
          'Para guias de instalação e o ranking completo, veja o <a href="/pt/local-llms/best-local-llm-frontends" class="text-primary hover:underline">guia dos melhores frontends de LLM locais</a>.',
        ],
        callouts: [{ type: 'info', text: `Versões conferidas nos repositórios oficiais do GitHub na última atualização: Open WebUI 0.13.4 (${ST.pt('open-webui')} estrelas), SillyTavern 1.19.0 (${ST.pt('sillytavern')}), Jan 0.8.8 (${ST.pt('jan')}), Chatbox 1.24.4 (${ST.pt('chatbox')}), Page Assist 1.5.92 (${ST.pt('page-assist')}). Se uma etapa de instalação parar de funcionar, consulte primeiro a documentação do projeto: os comandos de instalação mudam com mais frequência do que as recomendações.` }],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre frontends para Ollama',
        faqs: [
          {
            q: 'O Open WebUI é grátis?',
            a: 'Sim, é grátis para hospedar por conta própria. A licença é baseada na BSD e proíbe remover a marca Open WebUI acima de 50 usuários em 30 dias, por isso é source-available, e não open source segundo a OSI.',
          },
          {
            q: 'O Open WebUI funciona com o Ollama?',
            a: 'Sim. Execute `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main` e abra localhost:3000; ele procura o Ollama em host.docker.internal:11434. Sem Docker, execute `pip install open-webui` e `open-webui serve` com Python 3.11 ou 3.12.',
          },
          {
            q: 'Qual frontend do Ollama funciona no Linux e no Windows?',
            a: 'Open WebUI, SillyTavern, Jan e Chatbox rodam no Windows, macOS e Linux, e o Page Assist roda no Chrome, Firefox e Edge nos três. O app do próprio Ollama existe apenas para macOS e Windows.',
          },
          {
            q: 'Posso usar o SillyTavern com o Ollama?',
            a: 'Sim. No SillyTavern, abra API Connections, escolha Text Completion, selecione Ollama e informe http://localhost:11434. Para uma comparação direta, veja <a href="/pt/local-llms/open-webui-vs-sillytavern" class="text-primary hover:underline">Open WebUI vs SillyTavern</a>.',
          },
          {
            q: 'Existe um frontend do Ollama que não precisa de Docker?',
            a: 'Sim. Jan, Chatbox e Page Assist se instalam como apps comuns. No Jan, adicione o Ollama como provedor personalizado com http://localhost:11434/v1; no Chatbox, informe http://localhost:11434. Sobre o runtime em si, veja <a href="/pt/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    theme: 'Tool Comparisons',
    heroImage: '/images/best-frontend-for-ollama-overview-hero-ar.webp',
    title: 'أفضل واجهة أمامية لـ Ollama؟',
    seoTitle: 'أفضل واجهة لـ Ollama: Open WebUI أم Jan أم Chatbox',
    metaDescription: 'اختيارنا لـ Ollama هو Open WebUI: مجاني، عبر Docker أو pip، مع RAG. Jan وChatbox وPage Assist بلا Docker، وSillyTavern للعب الأدوار.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'متوسط',
    audience: 'المطورون الذين يضيفون واجهة دردشة إلى إعداد Ollama الخاص بهم',
    parentArticle: '/local-llms/best-local-llm-frontends',
    siblingBites: ['ollama-vs-lm-studio', 'jan-vs-lm-studio', 'best-local-llm-obsidian-integration'],
    is_living_page: true,
    targetKeywords: ['واجهة Ollama', 'أفضل واجهة لـ Ollama', 'Ollama frontend', 'Open WebUI مجاني', 'واجهة ويب لـ Ollama'],
    quickAnswerTop: {
      ar: {
        question: 'أفضل واجهة أمامية لـ Ollama؟',
        answer: 'Open WebUI هي أفضل واجهة أمامية لـ Ollama لمعظم المستخدمين: استضافتها الذاتية مجانية، وتعمل عبر Docker أو pip، وتضيف RAG وحسابات متعددة المستخدمين. Jan وChatbox تطبيقان مكتبيان بلا خادم، وSillyTavern مصممة للعب الأدوار، وتطبيق Ollama الخاص يغطي الدردشة الأساسية على macOS وWindows.',
        bullets: [
          'Open WebUI: الأفضل عموماً، عبر Docker أو pip، مع RAG، على Windows وmacOS وLinux',
          'Jan وChatbox: تطبيقان مكتبيان بلا Docker، وكلاهما يتصل بـ Ollama',
          'SillyTavern: لعب الأدوار وبطاقات الشخصيات، تتطلب Node.js 20+ أو Docker',
          'تطبيق Ollama: دردشة مدمجة لنظامي macOS وWindows دون تثبيت إضافي',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Open WebUI هي أفضل واجهة أمامية عامة لـ Ollama: RAG وحسابات مستخدمين وعدة اتصالات بـ Ollama، واستضافتها الذاتية مجانية',
          'ترخيص Open WebUI متاح المصدر (مبني على BSD مع بند العلامة التجارية) وليس ترخيصاً مفتوح المصدر معتمداً من OSI؛ أما SillyTavern وJan وChatbox وPage Assist فهي مفتوحة المصدر',
          'لا تحتاج Jan وChatbox وPage Assist إلى Docker؛ تتصل Chatbox وPage Assist بـ Ollama، وتشغّل Jan نماذجها الخاصة ويمكنها الاتصال بـ Ollama أيضاً',
          'SillyTavern هي الخيار للعب الأدوار وبطاقات الشخصيات؛ وتعمل عبر Node.js 20+ أو Docker',
        ],
      },
      body1: {
        title: 'Open WebUI هو الخيار الافتراضي لـ Ollama',
        content: [
          '<strong>Open WebUI هي أفضل واجهة أمامية لـ Ollama لمعظم الناس: استضافتها الذاتية مجانية، وتعمل عبر Docker أو pip، وتضيف RAG وحسابات متعددة المستخدمين وعدة اتصالات بـ Ollama. تُفتح في المتصفح على localhost:3000 على Windows وmacOS وLinux.</strong>',
          'وفق ملف LICENSE، يستند الترخيص إلى BSD-3 ويمنع إزالة علامة Open WebUI التجارية عندما يتجاوز النشر 50 مستخدماً خلال 30 يوماً. لذلك فهو متاح المصدر وليس مفتوح المصدر وفق OSI.',
          'يقارن الجدول ست واجهات لـ Ollama من حيث الإعداد وأفضل استخدام. SillyTavern هي الخيار للعب الأدوار، أما Jan وChatbox وPage Assist فلا تحتاج إلى خادم.',
        ],
        columns: ['الواجهة', 'الإعداد', 'الأنسب لـ'],
        rows: [
          { 'الواجهة': 'Open WebUI', 'الإعداد': 'Docker أو pip', 'الأنسب لـ': 'معظم المستخدمين، RAG' },
          { 'الواجهة': 'SillyTavern', 'الإعداد': 'Node.js 20+ أو Docker', 'الأنسب لـ': 'لعب الأدوار والبطاقات' },
          { 'الواجهة': 'Jan', 'الإعداد': 'تطبيق مكتبي', 'الأنسب لـ': 'دردشة محلية + النماذج' },
          { 'الواجهة': 'Chatbox', 'الإعداد': 'تطبيق مكتبي', 'الأنسب لـ': 'عميل بسيط ونسخة ويب' },
          { 'الواجهة': 'Page Assist', 'الإعداد': 'إضافة متصفح', 'الأنسب لـ': 'دردشة في أي صفحة' },
          { 'الواجهة': 'تطبيق Ollama', 'الإعداد': 'مدمج (Mac وWindows)', 'الأنسب لـ': 'دردشة أساسية بلا تثبيت' },
        ],
        callouts: [{ type: 'warning', text: 'وفق وثائق Open WebUI، عند تشغيله داخل Docker يجب أن يستمع Ollama على المضيف إلى 0.0.0.0 (اضبط OLLAMA_HOST=0.0.0.0) وإلا فشل الاتصال. هذا يتيح الوصول إلى Ollama عبر شبكتك، لذا احمِه بجدار حماية.' }],
      },
      body2: {
        title: 'Jan وChatbox وPage Assist لا تحتاج إلى Docker',
        content: [
          'تُثبَّت Jan وChatbox وPage Assist كتطبيقات عادية دون Docker. تشغّل Jan (Windows وmacOS وLinux) نماذجها الخاصة بمحرك llama.cpp مدمج، ويمكنها استخدام Ollama كمزوّد مخصص على http://localhost:11434/v1. وتتصل Chatbox (Windows وmacOS وLinux والويب) بـ Ollama عبر عنوان API الخاص به http://localhost:11434.',
          'Page Assist إضافة متصفح لـ Chrome وFirefox وEdge تتيح الدردشة مع نماذج Ollama من أي صفحة ويب. ويغطي تطبيق سطح المكتب الخاص بـ Ollama (macOS وWindows) الدردشة الأساسية وإفلات الملفات دون تثبيت أي شيء آخر.',
          'لأدلة التثبيت والترتيب الكامل، راجع <a href="/ar/local-llms/best-local-llm-frontends" class="text-primary hover:underline">دليل أفضل واجهات LLM المحلية</a>.',
        ],
        callouts: [{ type: 'info', text: `تم التحقق من الإصدارات مقابل مستودعات GitHub الرسمية عند آخر تحديث: Open WebUI 0.13.4 (${ST.ar('open-webui')} نجمة)، وSillyTavern 1.19.0 (${ST.ar('sillytavern')})، وJan 0.8.8 (${ST.ar('jan')})، وChatbox 1.24.4 (${ST.ar('chatbox')})، وPage Assist 1.5.92 (${ST.ar('page-assist')}). إذا توقفت إحدى خطوات الإعداد عن العمل، فراجع وثائق المشروع أولاً: تتغير أوامر التثبيت أكثر من التوصيات.` }],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول واجهات Ollama',
        faqs: [
          {
            q: 'هل Open WebUI مجاني؟',
            a: 'نعم، استضافته الذاتية مجانية. يستند ترخيصه إلى BSD ويمنع إزالة علامة Open WebUI التجارية عند تجاوز 50 مستخدماً خلال 30 يوماً، لذلك فهو متاح المصدر وليس مفتوح المصدر وفق OSI.',
          },
          {
            q: 'هل يعمل Open WebUI مع Ollama؟',
            a: 'نعم. شغّل `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main` ثم افتح localhost:3000؛ إذ يبحث عن Ollama على host.docker.internal:11434. وبدون Docker نفّذ `pip install open-webui` ثم `open-webui serve` على Python 3.11 أو 3.12.',
          },
          {
            q: 'أي واجهة لـ Ollama تعمل على Linux وWindows؟',
            a: 'تعمل Open WebUI وSillyTavern وJan وChatbox على Windows وmacOS وLinux، وتعمل Page Assist داخل Chrome وFirefox وEdge على الثلاثة. أما تطبيق Ollama الخاص فمتاح لنظامي macOS وWindows فقط.',
          },
          {
            q: 'هل يمكنني استخدام SillyTavern مع Ollama؟',
            a: 'نعم. في SillyTavern افتح API Connections، واختر Text Completion، ثم Ollama، وأدخل http://localhost:11434. وللمقارنة المباشرة راجع <a href="/ar/local-llms/open-webui-vs-sillytavern" class="text-primary hover:underline">Open WebUI vs SillyTavern</a>.',
          },
          {
            q: 'هل توجد واجهة لـ Ollama لا تحتاج إلى Docker؟',
            a: 'نعم. تُثبَّت Jan وChatbox وPage Assist كتطبيقات عادية. في Jan أضف Ollama كمزوّد مخصص بالعنوان http://localhost:11434/v1، وفي Chatbox أدخل http://localhost:11434. وللتعرف على بيئة التشغيل نفسها راجع <a href="/ar/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>.',
          },
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    theme: 'Tool Comparisons',
    heroImage: '/images/best-frontend-for-ollama-overview-hero-ko.webp',
    title: 'Ollama 최적 프론트엔드는?',
    seoTitle: 'Ollama 프론트엔드 추천: Open WebUI, Jan',
    metaDescription: 'Ollama에는 Open WebUI를 추천합니다. Docker 또는 pip, RAG 지원. Jan·Chatbox·Page Assist는 Docker 불필요, 롤플레이는 SillyTavern입니다.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-19',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: '중급',
    audience: 'Ollama 환경에 채팅 UI를 추가하려는 개발자',
    parentArticle: '/local-llms/best-local-llm-frontends',
    siblingBites: ['ollama-vs-lm-studio', 'jan-vs-lm-studio', 'best-local-llm-obsidian-integration'],
    is_living_page: true,
    targetKeywords: ['Ollama 프론트엔드', 'Ollama 프론트엔드 추천', 'Ollama 웹 인터페이스', 'Open WebUI 무료', 'SillyTavern Ollama'],
    quickAnswerTop: {
      ko: {
        question: 'Ollama 최적 프론트엔드는?',
        answer: 'Open WebUI는 대부분의 사용자에게 최적의 Ollama 프론트엔드입니다. 무료로 직접 호스팅할 수 있고, Docker 또는 pip로 실행되며, RAG와 다중 사용자 계정을 지원합니다. Jan과 Chatbox는 서버가 필요 없는 데스크톱 앱이고, SillyTavern은 롤플레이용이며, Ollama 자체 앱은 macOS와 Windows에서 기본 채팅을 제공합니다.',
        bullets: [
          'Open WebUI: 종합 최고, Docker 또는 pip, RAG 지원, Windows·macOS·Linux 사용 가능',
          'Jan과 Chatbox: 데스크톱 앱, Docker 불필요, 둘 다 Ollama 연결 가능',
          'SillyTavern: 롤플레이와 캐릭터 카드용, Node.js 20+ 또는 Docker 필요',
          'Ollama 앱: macOS와 Windows용 내장 채팅, 추가 설치 불필요',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Open WebUI는 가장 범용적인 Ollama 프론트엔드입니다. RAG, 사용자 계정, 여러 Ollama 연결을 지원하며 무료로 직접 호스팅할 수 있습니다',
          'Open WebUI 라이선스는 소스 공개형(BSD 기반에 브랜딩 조항 포함)이며 OSI 오픈소스가 아닙니다. SillyTavern, Jan, Chatbox, Page Assist는 오픈소스입니다',
          'Jan, Chatbox, Page Assist는 Docker가 필요 없습니다. Chatbox와 Page Assist는 Ollama에 연결하고, Jan은 자체 모델을 실행하면서 Ollama에도 연결할 수 있습니다',
          'SillyTavern은 롤플레이와 캐릭터 카드용이며 Node.js 20+ 또는 Docker로 실행됩니다',
        ],
      },
      body1: {
        title: 'Ollama의 기본 선택은 Open WebUI입니다',
        content: [
          '<strong>Open WebUI는 대부분의 사람에게 최적의 Ollama 프론트엔드입니다. 무료로 직접 호스팅할 수 있고, Docker 또는 pip로 실행되며, RAG, 다중 사용자 계정, 여러 Ollama 연결을 제공합니다. Windows, macOS, Linux의 브라우저에서 localhost:3000으로 열립니다.</strong>',
          'LICENSE 파일에 따르면 이 라이선스는 BSD-3를 기반으로 하며, 30일 동안 사용자가 50명을 넘는 배포에서는 Open WebUI 브랜딩 제거를 금지합니다. 따라서 소스 공개형이며 OSI 오픈소스가 아닙니다.',
          '아래 표는 여섯 가지 Ollama 프론트엔드를 설치 방식과 최적 용도로 비교합니다. 롤플레이에는 SillyTavern이 적합하고, Jan·Chatbox·Page Assist는 서버가 필요 없습니다.',
        ],
        columns: ['프론트엔드', '설치 방식', '최적 용도'],
        rows: [
          { '프론트엔드': 'Open WebUI', '설치 방식': 'Docker 또는 pip', '최적 용도': '일반 사용, RAG, 팀' },
          { '프론트엔드': 'SillyTavern', '설치 방식': 'Node.js 20+ 또는 Docker', '최적 용도': '롤플레이, 캐릭터 카드' },
          { '프론트엔드': 'Jan', '설치 방식': '데스크톱 앱', '최적 용도': '오프라인 채팅 + 모델' },
          { '프론트엔드': 'Chatbox', '설치 방식': '데스크톱 앱', '최적 용도': '간단한 클라이언트, 웹 버전' },
          { '프론트엔드': 'Page Assist', '설치 방식': '브라우저 확장', '최적 용도': '모든 웹페이지에서 채팅' },
          { '프론트엔드': 'Ollama 앱', '설치 방식': '내장(Mac, Windows)', '최적 용도': '기본 채팅, 설치 불필요' },
        ],
        callouts: [{ type: 'warning', text: 'Open WebUI 문서에 따르면 Docker에서 실행할 때 호스트의 Ollama는 0.0.0.0에서 수신해야 합니다(OLLAMA_HOST=0.0.0.0 설정). 그렇지 않으면 연결에 실패합니다. 이렇게 하면 Ollama가 네트워크에 노출되므로 방화벽으로 보호하십시오.' }],
      },
      body2: {
        title: 'Jan, Chatbox, Page Assist는 Docker가 필요 없습니다',
        content: [
          'Jan, Chatbox, Page Assist는 일반 앱처럼 설치하므로 Docker가 필요 없습니다. Jan(Windows, macOS, Linux)은 내장 llama.cpp 엔진으로 자체 모델을 실행하며, http://localhost:11434/v1 을 사용자 지정 제공자로 추가해 Ollama도 사용할 수 있습니다. Chatbox(Windows, macOS, Linux, 웹)는 API 주소 http://localhost:11434 로 Ollama에 연결합니다.',
          'Page Assist는 Chrome, Firefox, Edge용 브라우저 확장으로, 모든 웹페이지에서 Ollama 모델과 채팅할 수 있습니다. Ollama 자체 데스크톱 앱(macOS, Windows)은 추가 설치 없이 기본 채팅과 파일 끌어놓기를 지원합니다.',
          '설치 가이드와 전체 순위는 <a href="/ko/local-llms/best-local-llm-frontends" class="text-primary hover:underline">최고의 로컬 LLM 프론트엔드 가이드</a>를 참고하십시오.',
        ],
        callouts: [{ type: 'info', text: `마지막 업데이트 시점에 공식 GitHub 저장소와 대조한 버전: Open WebUI 0.13.4(GitHub 스타 ${ST.ko('open-webui')}), SillyTavern 1.19.0(${ST.ko('sillytavern')}), Jan 0.8.8(${ST.ko('jan')}), Chatbox 1.24.4(${ST.ko('chatbox')}), Page Assist 1.5.92(${ST.ko('page-assist')}). 설정 단계가 더 이상 작동하지 않으면 먼저 프로젝트 문서를 확인하십시오. 설치 명령은 추천 내용보다 더 자주 바뀝니다.` }],
      },
      faq: {
        id: 'faq',
        title: 'Ollama 프론트엔드 빠른 답변',
        faqs: [
          {
            q: 'Open WebUI는 무료인가요?',
            a: '네, 무료로 직접 호스팅할 수 있습니다. 라이선스는 BSD 기반이며 30일 동안 사용자가 50명을 넘는 배포에서는 Open WebUI 브랜딩 제거를 금지하므로, 소스 공개형이며 OSI 오픈소스가 아닙니다.',
          },
          {
            q: 'Open WebUI는 Ollama와 연동되나요?',
            a: '네. `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main` 를 실행하고 localhost:3000을 여십시오. host.docker.internal:11434에서 Ollama를 찾습니다. Docker 없이는 Python 3.11 또는 3.12에서 `pip install open-webui` 와 `open-webui serve` 를 실행합니다.',
          },
          {
            q: 'Linux와 Windows에서 동작하는 Ollama 프론트엔드는 무엇인가요?',
            a: 'Open WebUI, SillyTavern, Jan, Chatbox는 Windows, macOS, Linux에서 동작하고, Page Assist는 세 운영체제의 Chrome, Firefox, Edge에서 동작합니다. Ollama 자체 앱은 macOS와 Windows 전용입니다.',
          },
          {
            q: 'SillyTavern을 Ollama와 함께 사용할 수 있나요?',
            a: '네. SillyTavern에서 API Connections를 열고 Text Completion을 선택한 뒤 Ollama를 고르고 http://localhost:11434 를 입력하십시오. 직접 비교는 <a href="/ko/local-llms/open-webui-vs-sillytavern" class="text-primary hover:underline">Open WebUI vs SillyTavern</a>을 참고하십시오.',
          },
          {
            q: 'Docker가 필요 없는 Ollama 프론트엔드가 있나요?',
            a: '네. Jan, Chatbox, Page Assist는 일반 앱처럼 설치합니다. Jan에서는 http://localhost:11434/v1 을 사용자 지정 제공자로 추가하고, Chatbox에서는 http://localhost:11434 를 입력하십시오. 런타임 자체는 <a href="/ko/prompt-bites/ollama-vs-lm-studio" class="text-primary hover:underline">Ollama vs LM Studio</a>를 참고하십시오.',
          },
        ],
      },
    },
  },
}
