import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    heroImage: '/images/cursor-pro-vs-continue-dev-overview-hero-en.webp',
    title: 'Cursor Pro vs Continue.dev: Is $20/Month Worth It in 2026?',
    seoTitle: 'Cursor Pro vs Continue.dev 2026 | Prompt Bites',
    metaDescription: 'Continue.dev was acquired by Cursor in June 2026 and is shutting down (July 15 data deadline). Cline is now the top free open-source alternative. Cursor Pro stays at $20/mo.',
    publishDate: '2026-05-22',
    dateModified: '2026-07-13',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing an AI coding assistant for VS Code-class workflows',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/replace-github-copilot-with-local-llm',
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    leadAnswerBlock:
      'Cursor Pro at $20/month is worth it if you mostly use frontier cloud models (Claude, GPT) and want a polished editor experience. Note: Continue.dev was acquired by Cursor on June 18, 2026 and is shutting down — existing users have until July 15 to export data. The best free open-source alternative is now Cline (Apache 2.0, VS Code + JetBrains, BYOK). Pick by workflow: cloud IDE → Cursor Pro, local Ollama / BYOK → Cline.',
    toc: [
      { label: 'Best Pick by Workflow', anchor: '#best-pick' },
      { label: 'Cursor Pro vs Continue.dev', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    intro:
      'Cursor Pro and Continue.dev were the two most-compared AI coding assistants in early 2026 — but as of June 18, 2026, Cursor acquired Continue in an acqui-hire that is winding down the product. Continue.dev shipped its final v2.0.0 release, the GitHub repo is read-only, and user data is deleted after July 15. Cursor itself is simultaneously being acquired by SpaceX in a $60 billion deal announced June 16 (expected to close Q3 2026). This article covers Cursor Pro\'s current pricing, the state of Continue.dev as a frozen product, and which open-source alternatives (Cline, Aider) pick up where Continue.dev left off.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Continue.dev was acquired by Cursor on June 18, 2026 and is shutting down — data export deadline is July 15, 2026',
          'Best free open-source replacement for Continue.dev: Cline — Apache 2.0, VS Code + JetBrains, 60+ model providers, Ollama support',
          'Cursor Pro at $20/month still the best pick for cloud frontier models (Claude, GPT) with a polished IDE — now includes unlimited Auto mode + $20 credit pool',
          'If you already pay for Claude or OpenAI API access, Cline (Continue.dev\'s successor) can match Cursor at much lower cost using your own keys',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Cursor Pro for Cloud, Cline for Local (Continue.dev is Shutting Down)',
        content: [
          '<strong>Cursor Pro is the best pick if you mostly use cloud frontier models (Claude Sonnet 5, GPT-class) and want a polished IDE. Continue.dev is no longer an option — it was acquired by Cursor on June 18, 2026 and is shutting down. The best free open-source replacement is Cline.</strong>',
          'Cursor Pro at $20/month bundles model usage with a tightly integrated editor — agent mode, repo-wide context, predictive edits. The plan now includes unlimited Auto mode (Cursor routes to the best model at flat rates) plus a $20 monthly credit pool for manually selected premium models like Claude Sonnet 5 or GPT. For developers who do not already pay for Claude or OpenAI APIs, that $20 is competitive with what model usage alone would cost.',
          'Cline is the recommended free alternative for the workflows Continue.dev served: it is Apache 2.0, runs as a VS Code extension (JetBrains support added in 2025), supports 30+ model providers including Ollama, LM Studio, and vLLM, and has 61K GitHub stars. If you already pay for Claude API access, Cline with your own key is typically cheaper than Cursor Pro at heavy use.',
        ],
        affiliateLinks: [
          {
            url: 'https://cursor.com',
            productName: 'Cursor Pro',
            productCategory: 'ide',
            priceRange: '$20/month',
            label: 'Check Cursor Pro pricing on cursor.com',
          },
          {
            url: 'https://cline.bot',
            productName: 'Cline (free, open source)',
            productCategory: 'ide-extension',
            priceRange: 'Free',
            label: 'Download Cline — the Continue.dev replacement (free)',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Cursor Pro vs Continue.dev (discontinued) vs Cline',
        content: [
          '<strong>Continue.dev was acquired by Cursor on June 18, 2026 and shipped its final v2.0.0 release — no future development.</strong> The table below compares Cursor Pro with the frozen Continue.dev and Cline, the recommended open-source replacement. Pricing as of July 2026.',
        ],
        columns: ['Feature', 'Cursor Pro', 'Continue.dev (frozen)', 'Cline (replacement)'],
        rows: [
          {
            'Feature': 'Status',
            'Cursor Pro': 'Active',
            'Continue.dev (frozen)': 'Discontinued (v2.0.0 final)',
            'Cline (replacement)': 'Active, open source',
          },
          {
            'Feature': 'Price',
            'Cursor Pro': '$20/month ($16 annual)',
            'Continue.dev (frozen)': 'Was free — now frozen',
            'Cline (replacement)': 'Free BYOK; ClinePass $9.99/mo',
          },
          {
            'Feature': 'Editor',
            'Cursor Pro': 'Full editor (VS Code fork)',
            'Continue.dev (frozen)': 'VS Code / JetBrains extension',
            'Cline (replacement)': 'VS Code extension (JetBrains via plugin)',
          },
          {
            'Feature': 'Cloud models included',
            'Cursor Pro': 'Yes — $20 credit pool + unlimited Auto mode',
            'Continue.dev (frozen)': 'No — bring your own API key',
            'Cline (replacement)': 'No — bring your own API key (30+ providers)',
          },
          {
            'Feature': 'Local model support',
            'Cursor Pro': 'Limited',
            'Continue.dev (frozen)': 'First-class (Ollama, LM Studio, vLLM)',
            'Cline (replacement)': 'First-class (Ollama, LM Studio, vLLM)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Cursor Pro and Continue.dev',
        faqs: [
          {
            q: 'Is Continue.dev still available?',
            a: 'Continue.dev is discontinued. Cursor acquired the team on June 18, 2026. The GitHub repo is read-only at v2.0.0 — no future updates. Existing installations still run but receive no security patches or feature updates. User account data is deleted after July 15, 2026. The recommended open-source replacement is Cline.',
          },
          {
            q: 'What should Continue.dev users switch to?',
            a: 'Cline is the closest replacement: Apache 2.0, VS Code extension, 30+ model providers, full Ollama / LM Studio support, and an optional ClinePass managed plan at $9.99/month. Aider is another option for terminal-native workflows.',
          },
          {
            q: 'Is Cursor Pro\'s $20/month worth it?',
            a: 'Yes, if cloud frontier models are your main workflow and you do not already pay for the underlying APIs. The $20/month plan now includes unlimited Auto mode (Cursor routes to the best model, billed at flat rates with no credit draw) plus a $20 monthly credit pool for manually selected models like Claude Sonnet 5. Avoid Cursor Pro if you mostly run local models — use Cline instead.',
          },
          {
            q: 'How does Cursor Pro\'s credit pool work?',
            a: 'Auto mode is unlimited: Cursor picks the model and you pay flat rates ($1.25/M input, $6/M output) without drawing from your credit pool. Manually selecting a premium model (Claude Sonnet 5, GPT-5, etc.) draws from the $20 credit pool. Heavy users who manually select premium models may exhaust the pool; Pro+ at $60/month provides 3x usage.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Best Frontend for Ollama](/prompt-bites/best-frontend-for-ollama) — Cline and other Ollama clients compared (updated for post-Continue.dev landscape)',
          '[Jan vs LM Studio](/prompt-bites/jan-vs-lm-studio) — comparable choices for local chat workflows',
          '[Qwen Coder vs DeepSeek Coder](/prompt-bites/qwen-coder-vs-deepseek-coder) — which local coding model to pair with Cline or Aider',
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    heroImage: '/images/cursor-pro-vs-continue-dev-overview-hero-de.webp',
    title: 'Cursor Pro vs Continue.dev: Lohnen sich 20 $/Monat 2026?',
    seoTitle: 'Cursor Pro vs. Continue.dev 2026: Welches Tool?',
    metaDescription: 'Continue.dev wurde im Juni 2026 von Cursor übernommen und stellt den Betrieb ein (Datenexport-Frist: 15. Juli). Cline ist jetzt die beste Open-Source-Alternative. Cursor Pro bleibt bei ~20 €/Monat.',
    publishDate: '2026-05-22',
    dateModified: '2026-07-13',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die einen AI-Coding-Assistenten für VS-Code-Workflows wählen',
    affiliateDisclosure: true,
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    readTime: '3 Min. Lesezeit',
    leadAnswerBlock:
      'Cursor Pro für ~20 €/Monat lohnt sich, wenn Sie überwiegend Cloud-Frontier-Modelle (Claude, GPT) nutzen und einen polierten Editor wollen. Wichtig: Continue.dev wurde am 18. Juni 2026 von Cursor übernommen und stellt den Betrieb ein — Nutzerdaten werden nach dem 15. Juli gelöscht. Die beste kostenlose Open-Source-Alternative ist jetzt Cline (Apache 2.0, VS Code + JetBrains, BYOK). Wahl nach Workflow: Cloud-IDE → Cursor Pro, lokales Ollama / BYOK → Cline.',
    toc: [
      { label: 'Beste Wahl nach Workflow', anchor: '#best-pick' },
      { label: 'Cursor Pro vs Continue.dev', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    intro:
      'Cursor Pro und Continue.dev waren Anfang 2026 die meistvergleichenen AI-Coding-Assistenten — doch seit dem 18. Juni 2026 hat Cursor Continue in einem Acqui-Hire übernommen und stellt das Produkt ein. Continue.dev veröffentlichte sein finales Release v2.0.0, das GitHub-Repository ist schreibgeschützt, und Nutzerdaten werden nach dem 15. Juli gelöscht. Cursor selbst wird gleichzeitig von SpaceX für 60 Milliarden US-Dollar übernommen (Ankündigung 16. Juni, Abschluss erwartet Q3 2026). Dieser Artikel behandelt das aktuelle Cursor-Pro-Preismodell und welche Open-Source-Alternativen (Cline, Aider) Continue.dev ersetzen.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Continue.dev wurde am 18. Juni 2026 von Cursor übernommen und stellt den Betrieb ein — Frist für Datenexport: 15. Juli 2026',
          'Beste kostenlose Open-Source-Alternative: Cline — Apache 2.0, VS Code + JetBrains, 30+ Modellanbieter, Ollama-Support',
          'Cursor Pro für 20 €/Monat bleibt die beste Wahl für Cloud-Frontier-Modelle — jetzt mit unbegrenztem Auto-Modus plus 20-$-Credit-Pool',
          'Wer bereits Claude/OpenAI API abonniert hat, fährt mit Cline (BYOK) deutlich günstiger als mit Cursor Pro',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: Cursor Pro für Cloud, Cline für lokal (Continue.dev wird eingestellt)',
        content: [
          '<strong>Cursor Pro ist die beste Wahl für Cloud-Frontier-Modelle (Claude Sonnet 5, GPT-Klasse) mit polierter IDE. Continue.dev ist keine Option mehr — es wurde am 18. Juni 2026 von Cursor übernommen und stellt den Betrieb ein. Die beste kostenlose Open-Source-Alternative ist Cline.</strong>',
          'Cursor Pro für 20 €/Monat bündelt Modellnutzung mit einem eng integrierten Editor — Agent-Modus, repository-weiter Kontext, prädiktive Edits. Der Plan beinhaltet nun unbegrenzten Auto-Modus (Cursor wählt das Modell zu Flatrates) sowie einen monatlichen 20-$-Credit-Pool für manuell gewählte Premium-Modelle wie Claude Sonnet 5.',
          'Cline ist die empfohlene kostenlose Alternative für die Workflows, die Continue.dev bediente: Apache 2.0, VS-Code-Erweiterung, 30+ Modellanbieter einschließlich Ollama, LM Studio und vLLM, und 5 Mio. VS-Code-Installationen. Wer bereits Claude-API zahlt, fährt mit Cline und eigenem Schlüssel bei hoher Nutzung günstiger als mit Cursor Pro.',
        ],
        affiliateLinks: [
          {
            url: 'https://cursor.com',
            productName: 'Cursor Pro',
            productCategory: 'ide',
            priceRange: '20 €/Monat',
            label: 'Cursor-Pro-Preise auf cursor.com prüfen',
          },
          {
            url: 'https://cline.bot',
            productName: 'Cline (kostenlos, Open Source)',
            productCategory: 'ide-extension',
            priceRange: 'Kostenlos',
            label: 'Cline herunterladen — der Continue.dev-Nachfolger (kostenlos)',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Cursor Pro vs Continue.dev (eingestellt) vs Cline',
        content: [
          '<strong>Continue.dev wurde am 18. Juni 2026 von Cursor übernommen — finales Release v2.0.0, kein weiterer Betrieb.</strong> Die Tabelle vergleicht Cursor Pro mit dem eingefrorenen Continue.dev und Cline als empfohlenem Open-Source-Ersatz. Preise Stand Juli 2026.',
        ],
        columns: ['Merkmal', 'Cursor Pro', 'Continue.dev (eingestellt)', 'Cline (Ersatz)'],
        rows: [
          { 'Merkmal': 'Status', 'Cursor Pro': 'Aktiv', 'Continue.dev (eingestellt)': 'Eingestellt (v2.0.0 final)', 'Cline (Ersatz)': 'Aktiv, Open Source' },
          { 'Merkmal': 'Preis', 'Cursor Pro': '20 €/Monat (16 € jährlich)', 'Continue.dev (eingestellt)': 'War kostenlos — jetzt eingefroren', 'Cline (Ersatz)': 'Kostenlos BYOK; ClinePass 9,99 $/Monat' },
          { 'Merkmal': 'Editor', 'Cursor Pro': 'Voller Editor (VS-Code-Fork)', 'Continue.dev (eingestellt)': 'VS-Code-/JetBrains-Erweiterung', 'Cline (Ersatz)': 'VS-Code-Erweiterung (JetBrains via Plugin)' },
          { 'Merkmal': 'Cloud-Modelle enthalten', 'Cursor Pro': 'Ja — 20-$-Credit-Pool + unbegrenzter Auto-Modus', 'Continue.dev (eingestellt)': 'Nein — eigener API-Schlüssel', 'Cline (Ersatz)': 'Nein — eigener API-Schlüssel (30+ Anbieter)' },
          { 'Merkmal': 'Unterstützung lokaler Modelle', 'Cursor Pro': 'Begrenzt', 'Continue.dev (eingestellt)': 'First-Class (Ollama, LM Studio, vLLM)', 'Cline (Ersatz)': 'First-Class (Ollama, LM Studio, vLLM)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu Cursor Pro und Continue.dev',
        faqs: [
          {
            q: 'Ist Continue.dev noch verfügbar?',
            a: 'Continue.dev wird eingestellt. Cursor hat das Team am 18. Juni 2026 übernommen. Das GitHub-Repository ist bei v2.0.0 schreibgeschützt — keine weiteren Updates. Nutzerdaten werden nach dem 15. Juli 2026 gelöscht. Der empfohlene Open-Source-Ersatz ist Cline.',
          },
          {
            q: 'Worauf sollen Continue.dev-Nutzer wechseln?',
            a: 'Cline ist der engste Ersatz: Apache 2.0, VS-Code-Erweiterung, 30+ Modellanbieter, vollständige Ollama-/LM-Studio-Unterstützung und ein optionaler ClinePass für 9,99 $/Monat. Aider ist eine weitere Option für Terminal-native Workflows.',
          },
          {
            q: 'Lohnt sich Cursor Pro für 20 €/Monat?',
            a: 'Ja, wenn Cloud-Frontier-Modelle Ihr Hauptworkflow sind und Sie nicht bereits für die zugrunde liegenden APIs zahlen. Der Plan enthält nun unbegrenzten Auto-Modus plus einen monatlichen 20-$-Credit-Pool für manuell gewählte Premium-Modelle. Meiden Sie Cursor Pro, wenn Sie hauptsächlich lokale Modelle nutzen — nutzen Sie stattdessen Cline.',
          },
          {
            q: 'Wie funktioniert der Cursor-Pro-Credit-Pool?',
            a: 'Der Auto-Modus ist unbegrenzt: Cursor wählt das Modell und berechnet Flatrates (1,25 $/Mio. Input, 6 $/Mio. Output), ohne den Credit-Pool zu belasten. Wählt man manuell ein Premium-Modell (Claude Sonnet 5, GPT-5 usw.), wird der 20-$-Pool verbraucht. Vielnutzer, die Premium-Modelle manuell wählen, können den Pool erschöpfen; Pro+ für 60 €/Monat bietet 3-faches Nutzungskontingent.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Bestes Frontend für Ollama](/de/prompt-bites/best-frontend-for-ollama) — Cline und andere Ollama-Clients im Vergleich (aktualisiert für die Zeit nach Continue.dev)',
          '[Jan vs LM Studio](/de/prompt-bites/jan-vs-lm-studio) — vergleichbare Optionen für lokale Chat-Workflows',
          '[Qwen Coder vs DeepSeek Coder](/de/prompt-bites/qwen-coder-vs-deepseek-coder) — welches lokale Coding-Modell zu Cline oder Aider passt',
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    heroImage: '/images/cursor-pro-vs-continue-dev-overview-hero-fr.webp',
    title: 'Cursor Pro vs Continue.dev : 20 $/mois en valent-ils la peine en 2026 ?',
    seoTitle: 'Cursor Pro vs Continue.dev 2026 | Prompt Bites',
    metaDescription: 'Continue.dev a été racheté par Cursor en juin 2026 et ferme ses portes (deadline export : 15 juillet). Cline est désormais la meilleure alternative open source gratuite. Cursor Pro reste à ~20 €/mois.',
    publishDate: '2026-05-22',
    dateModified: '2026-07-13',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Développeurs choisissant un assistant de code IA pour des workflows VS Code',
    affiliateDisclosure: true,
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    readTime: '3 min de lecture',
    leadAnswerBlock:
      'Cursor Pro à ~20 €/mois en vaut la peine si vous utilisez surtout des modèles cloud (Claude, GPT) et voulez un éditeur soigné. Important : Continue.dev a été racheté par Cursor le 18 juin 2026 et ferme ses portes — les données utilisateurs sont supprimées après le 15 juillet. La meilleure alternative open source gratuite est désormais Cline (Apache 2.0, VS Code + JetBrains, BYOK). Choisissez selon votre workflow : IDE cloud → Cursor Pro, Ollama local / BYOK → Cline.',
    toc: [
      { label: 'Meilleur choix par workflow', anchor: '#best-pick' },
      { label: 'Cursor Pro vs Continue.dev', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    intro:
      'Cursor Pro et Continue.dev étaient les deux assistants de code IA les plus comparés début 2026 — mais depuis le 18 juin 2026, Cursor a racheté Continue dans un acqui-hire qui met fin au produit. Continue.dev a publié sa version finale v2.0.0, le dépôt GitHub est en lecture seule, et les données utilisateurs seront supprimées après le 15 juillet. Cursor lui-même est simultanément racheté par SpaceX pour 60 milliards de dollars (annonce du 16 juin, clôture prévue T3 2026). Cet article couvre les tarifs actuels de Cursor Pro et les alternatives open source (Cline, Aider) qui prennent le relais de Continue.dev.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Continue.dev a été racheté par Cursor le 18 juin 2026 et ferme ses portes — deadline export données : 15 juillet 2026',
          'Meilleure alternative open source gratuite : Cline — Apache 2.0, VS Code + JetBrains, 30+ fournisseurs de modèles, support Ollama',
          'Cursor Pro à 20 €/mois reste le meilleur choix pour les modèles cloud — désormais avec mode Auto illimité + pool de 20 $ de crédits',
          'Si vous payez déjà l\'API Claude/OpenAI, Cline (BYOK) est nettement moins cher que Cursor Pro',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : Cursor Pro pour le cloud, Cline pour le local (Continue.dev est arrêté)',
        content: [
          '<strong>Cursor Pro est le meilleur choix pour les modèles cloud (Claude Sonnet 5, classe GPT) avec un IDE soigné. Continue.dev n\'est plus une option — racheté par Cursor le 18 juin 2026 et arrêté. La meilleure alternative open source gratuite est Cline.</strong>',
          'Cursor Pro à 20 €/mois associe l\'usage du modèle à un éditeur étroitement intégré — mode agent, contexte repo-wide, éditions prédictives. Le plan inclut désormais un mode Auto illimité (Cursor choisit le modèle à tarifs fixes) et un pool mensuel de 20 $ de crédits pour les modèles premium sélectionnés manuellement.',
          'Cline est l\'alternative gratuite recommandée pour les workflows que Continue.dev servait : Apache 2.0, extension VS Code, 30+ fournisseurs de modèles dont Ollama, LM Studio et vLLM, et 5 millions d\'installations VS Code. Si vous payez déjà l\'API Claude, Cline avec votre propre clé est généralement moins cher que Cursor Pro en usage intensif.',
        ],
        affiliateLinks: [
          { url: 'https://cursor.com', productName: 'Cursor Pro', productCategory: 'ide', priceRange: '20 €/mois', label: 'Voir les tarifs Cursor Pro sur cursor.com' },
          { url: 'https://cline.bot', productName: 'Cline (gratuit, open source)', productCategory: 'ide-extension', priceRange: 'Gratuit', label: 'Télécharger Cline — le remplaçant de Continue.dev (gratuit)' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Cursor Pro vs Continue.dev (arrêté) vs Cline',
        content: [
          '<strong>Continue.dev a été racheté par Cursor le 18 juin 2026 et a publié sa version finale v2.0.0 — aucun développement futur.</strong> Le tableau compare Cursor Pro avec Continue.dev figé et Cline, le remplaçant recommandé. Tarifs juillet 2026.',
        ],
        columns: ['Fonctionnalité', 'Cursor Pro', 'Continue.dev (arrêté)', 'Cline (remplaçant)'],
        rows: [
          { 'Fonctionnalité': 'Statut', 'Cursor Pro': 'Actif', 'Continue.dev (arrêté)': 'Arrêté (v2.0.0 final)', 'Cline (remplaçant)': 'Actif, open source' },
          { 'Fonctionnalité': 'Prix', 'Cursor Pro': '20 €/mois (16 € annuel)', 'Continue.dev (arrêté)': 'Était gratuit — figé', 'Cline (remplaçant)': 'Gratuit BYOK ; ClinePass 9,99 $/mois' },
          { 'Fonctionnalité': 'Éditeur', 'Cursor Pro': 'Éditeur complet (fork VS Code)', 'Continue.dev (arrêté)': 'Extension VS Code/JetBrains', 'Cline (remplaçant)': 'Extension VS Code (JetBrains via plugin)' },
          { 'Fonctionnalité': 'Modèles cloud inclus', 'Cursor Pro': 'Oui — pool 20 $ + mode Auto illimité', 'Continue.dev (arrêté)': 'Non — votre clé API', 'Cline (remplaçant)': 'Non — votre clé API (30+ fournisseurs)' },
          { 'Fonctionnalité': 'Support modèles locaux', 'Cursor Pro': 'Limité', 'Continue.dev (arrêté)': 'First-class (Ollama, LM Studio, vLLM)', 'Cline (remplaçant)': 'First-class (Ollama, LM Studio, vLLM)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Cursor Pro et Continue.dev',
        faqs: [
          {
            q: 'Continue.dev est-il encore disponible ?',
            a: 'Continue.dev est arrêté. Cursor a racheté l\'équipe le 18 juin 2026. Le dépôt GitHub est en lecture seule à partir de la version v2.0.0 — aucune mise à jour future. Les données utilisateurs sont supprimées après le 15 juillet 2026. L\'alternative open source recommandée est Cline.',
          },
          {
            q: 'Vers quoi les utilisateurs de Continue.dev doivent-ils migrer ?',
            a: 'Cline est le remplaçant le plus proche : Apache 2.0, extension VS Code, 30+ fournisseurs de modèles, support complet Ollama/LM Studio, et un plan géré optionnel ClinePass à 9,99 $/mois. Aider est une autre option pour les workflows en terminal.',
          },
          {
            q: 'Les 20 €/mois de Cursor Pro en valent-ils la peine ?',
            a: 'Oui, si les modèles cloud sont votre workflow principal et que vous ne payez pas déjà les APIs sous-jacentes. Le plan inclut désormais un mode Auto illimité plus un pool mensuel de 20 $ de crédits pour les modèles premium sélectionnés manuellement. Évitez Cursor Pro si vous utilisez principalement des modèles locaux — utilisez Cline à la place.',
          },
          {
            q: 'Comment fonctionne le pool de crédits Cursor Pro ?',
            a: 'Le mode Auto est illimité : Cursor choisit le modèle et facture à tarifs fixes (1,25 $/M input, 6 $/M output) sans puiser dans le pool. Sélectionner manuellement un modèle premium (Claude Sonnet 5, GPT-5, etc.) consomme le pool de 20 $. Les gros utilisateurs qui sélectionnent manuellement des modèles premium peuvent l\'épuiser ; Pro+ à 60 €/mois offre 3x le quota d\'usage.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleur frontend pour Ollama](/fr/prompt-bites/best-frontend-for-ollama) — Cline et autres clients Ollama comparés (mis à jour pour l\'après Continue.dev)',
          '[Jan vs LM Studio](/fr/prompt-bites/jan-vs-lm-studio) — options comparables pour les workflows de chat locaux',
          '[Qwen Coder vs DeepSeek Coder](/fr/prompt-bites/qwen-coder-vs-deepseek-coder) — quel modèle de code local associer à Cline ou Aider',
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    heroImage: '/images/cursor-pro-vs-continue-dev-overview-hero-ja.webp',
    title: 'Cursor Pro vs Continue.dev：2026年に月20ドルの価値はあるか？',
    seoTitle: 'Cursor Pro vs Continue.dev 2026 | Prompt Bites',
    metaDescription: 'Continue.devは2026年6月にCursorに買収され終了（データエクスポート期限：7月15日）。Clineが最良の無料OSS代替ツール。Cursor Proは引き続き月約3,000円。',
    publishDate: '2026-05-22',
    dateModified: '2026-07-13',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'VS Code系ワークフロー向けAIコーディングアシスタントを選ぶ開発者',
    affiliateDisclosure: true,
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    readTime: '3分で読める',
    leadAnswerBlock:
      'Cursor Pro 約¥3,000/月は、主にクラウドフロンティアモデル（Claude、GPT）を使い、洗練されたエディタ体験が欲しいなら価値があります。重要：Continue.devは2026年6月18日にCursorに買収・終了 — ユーザーデータは7月15日以降削除されます。最良の無料OSSの代替はCline（Apache 2.0、VS Code + JetBrains、BYOK）です。ワークフロー別選択：クラウドIDE → Cursor Pro、ローカルOllama/BYOK → Cline。',
    toc: [
      { label: 'ワークフロー別ベスト', anchor: '#best-pick' },
      { label: 'Cursor Pro vs Continue.dev', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    intro:
      'Cursor ProとContinue.devは2026年初頭に最もよく比較されたAIコーディングアシスタントでした。しかし2026年6月18日、CursorはContinueをアクイハイアで買収しサービスを終了しました。Continue.devは最終リリースv2.0.0を公開、GitHubリポジトリは読み取り専用となり、ユーザーデータは7月15日以降削除されます。Cursor自体も同時期にSpaceXによる600億ドルでの買収が発表されています（2026年6月16日発表、Q3 2026クローズ予定）。この記事ではCursor Proの現行料金と、Continue.devに代わるオープンソース代替ツール（Cline、Aider）を解説します。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Continue.devは2026年6月18日にCursorに買収・終了 — データエクスポート期限：2026年7月15日',
          '最良の無料OSS代替：Cline — Apache 2.0、VS Code + JetBrains、30以上のモデルプロバイダ、Ollama対応',
          'Cursor Pro 約¥3,000/月は引き続きクラウドモデルに最適 — 無制限Autoモード＋$20クレジットプール付き',
          '既にClaude/OpenAI APIを契約済みなら、Cline（BYOK）の方がCursor Proより大幅に安い',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベスト：クラウドはCursor Pro、ローカルはCline（Continue.devは終了）',
        content: [
          '<strong>クラウドフロンティアモデル（Claude Sonnet 5、GPT級）と洗練IDEにはCursor Proがベスト。Continue.devはもう選択肢にありません — 2026年6月18日にCursorに買収・終了。最良の無料OSS代替はClineです。</strong>',
          'Cursor Pro 約¥3,000/月はモデル利用と密に統合されたエディタを束ねます — エージェントモード、リポジトリ全体のコンテキスト、予測編集。プランには無制限Autoモード（Cursorがモデルを選択、フラットレート課金）と、手動で選択したプレミアムモデル用の月$20クレジットプールが含まれます。',
          'Clineは、Continue.devが提供していたワークフロー向けの推奨無料代替ツールです：Apache 2.0、VS Code拡張、Ollama・LM Studio・vLLMを含む30以上のモデルプロバイダ対応、VS Codeインストール数500万以上。既にClaude APIを従量課金で支払っているなら、自前キーのClineは高負荷時にCursor Proより安く済みます。',
        ],
        affiliateLinks: [
          { url: 'https://cursor.com', productName: 'Cursor Pro', productCategory: 'ide', priceRange: '~¥3,000/月', label: 'cursor.comでCursor Pro価格を確認' },
          { url: 'https://cline.bot', productName: 'Cline（無料・オープンソース）', productCategory: 'ide-extension', priceRange: '無料', label: 'Clineをダウンロード — Continue.devの後継（無料）' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Cursor Pro vs Continue.dev（終了）vs Cline',
        content: [
          '<strong>Continue.devは2026年6月18日にCursorに買収され最終版v2.0.0をリリース — 今後の開発なし。</strong>表はCursor Pro、凍結されたContinue.dev、推奨OSS代替のClineを比較。価格は2026年7月時点。',
        ],
        columns: ['機能', 'Cursor Pro', 'Continue.dev（終了）', 'Cline（代替）'],
        rows: [
          { '機能': 'ステータス', 'Cursor Pro': 'アクティブ', 'Continue.dev（終了）': '終了（v2.0.0 最終）', 'Cline（代替）': 'アクティブ・OSS' },
          { '機能': '価格', 'Cursor Pro': '~¥3,000/月（年払い¥2,400）', 'Continue.dev（終了）': '無料だったが凍結', 'Cline（代替）': '無料BYOK；ClinePass $9.99/月' },
          { '機能': 'エディタ', 'Cursor Pro': 'フルエディタ（VS Codeフォーク）', 'Continue.dev（終了）': 'VS Code/JetBrains拡張', 'Cline（代替）': 'VS Code拡張（JetBrainsはプラグイン経由）' },
          { '機能': 'クラウドモデル同梱', 'Cursor Pro': 'はい — $20クレジットプール＋無制限Autoモード', 'Continue.dev（終了）': 'いいえ — 自前APIキー', 'Cline（代替）': 'いいえ — 自前APIキー（30以上のプロバイダ）' },
          { '機能': 'ローカルモデル対応', 'Cursor Pro': '限定的', 'Continue.dev（終了）': 'ファーストクラス（Ollama、LM Studio、vLLM）', 'Cline（代替）': 'ファーストクラス（Ollama、LM Studio、vLLM）' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Cursor ProとContinue.devに関する短い回答',
        faqs: [
          {
            q: 'Continue.devはまだ使えますか？',
            a: 'Continue.devは終了しました。Cursorが2026年6月18日にチームを買収。GitHubリポジトリはv2.0.0で読み取り専用 — 今後の更新なし。ユーザーデータは2026年7月15日以降削除されます。推奨OSS代替はClineです。',
          },
          {
            q: 'Continue.devユーザーはどこに移行すべきですか？',
            a: 'Clineが最も近い代替です：Apache 2.0、VS Code拡張、30以上のモデルプロバイダ、Ollama/LM Studio完全対応、オプションのClinePass $9.99/月。ターミナルネイティブなワークフローにはAiderも選択肢です。',
          },
          {
            q: 'Cursor Proの月¥3,000は価値がありますか？',
            a: 'はい、クラウドフロンティアモデルが主ワークフローで基盤APIにまだ支払っていない場合。プランには無制限Autoモードと手動選択プレミアムモデル用の月$20クレジットプールが含まれます。ローカルモデルが主なら使わずClineにしてください。',
          },
          {
            q: 'Cursor Proのクレジットプールはどう機能しますか？',
            a: 'Autoモードは無制限：Cursorがモデルを選択しフラットレート（Input $1.25/M、Output $6/M）で課金、クレジットプールを消費しません。プレミアムモデル（Claude Sonnet 5、GPT-5など）を手動選択すると$20プールが消費されます。手動でプレミアムモデルを多用するユーザーはプールを使い切る場合があり、Pro+（$60/月）なら3倍のクレジットが利用できます。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[Ollama向けベストフロントエンド](/ja/prompt-bites/best-frontend-for-ollama) — Clineと他のOllamaクライアントの比較（Continue.dev後の状況に更新）',
          '[Jan vs LM Studio](/ja/prompt-bites/jan-vs-lm-studio) — ローカルチャットワークフロー向けの同等選択肢',
          '[Qwen Coder vs DeepSeek Coder](/ja/prompt-bites/qwen-coder-vs-deepseek-coder) — ClineまたはAiderと組み合わせるローカルコーディングモデル',
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    heroImage: '/images/cursor-pro-vs-continue-dev-overview-hero-zh.webp',
    title: 'Cursor Pro 与 Continue.dev：2026年20美元/月值得吗？',
    seoTitle: 'Cursor Pro vs Continue.dev 2026 | Prompt Bites',
    metaDescription: 'Continue.dev已于2026年6月被Cursor收购并关闭（数据导出截止7月15日）。Cline是最佳免费开源替代方案。Cursor Pro仍为约$20/月。',
    publishDate: '2026-05-22',
    dateModified: '2026-07-13',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '为VS Code级工作流选择AI编码助手的开发者',
    affiliateDisclosure: true,
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    readTime: '阅读约3分钟',
    leadAnswerBlock:
      'Cursor Pro 约$20/月，若主要使用云端前沿模型（Claude、GPT）且想要精致编辑器，就值得。重要：Continue.dev已于2026年6月18日被Cursor收购并关闭——用户数据将在7月15日后删除。最佳免费开源替代方案现为Cline（Apache 2.0，VS Code + JetBrains，BYOK）。按工作流选择：云端IDE → Cursor Pro，本地Ollama/BYOK → Cline。',
    toc: [
      { label: '按工作流的最佳选择', anchor: '#best-pick' },
      { label: 'Cursor Pro 与 Continue.dev', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related' },
    ],
    intro:
      'Cursor Pro与Continue.dev曾是2026年初最常被比较的两款AI编码助手——但自2026年6月18日起，Cursor以收购招募（acqui-hire）的方式收购了Continue，产品正式关闭。Continue.dev发布了最终版本v2.0.0，GitHub仓库变为只读，用户数据将在7月15日后删除。与此同时，Cursor本身也在被SpaceX以600亿美元收购（2026年6月16日宣布，预计Q3 2026完成交割）。本文介绍Cursor Pro当前的定价模式，以及接替Continue.dev的开源替代方案（Cline、Aider）。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Continue.dev已于2026年6月18日被Cursor收购并关闭——数据导出截止：2026年7月15日',
          '最佳免费开源替代：Cline — Apache 2.0，VS Code + JetBrains，30+模型提供商，支持Ollama',
          'Cursor Pro $20/月仍是云端模型的最佳选择——现包含无限Auto模式 + $20积分池',
          '若已订阅Claude/OpenAI API，Cline（BYOK）比Cursor Pro便宜得多',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：云端用Cursor Pro，本地用Cline（Continue.dev已关闭）',
        content: [
          '<strong>云端前沿模型（Claude Sonnet 5、GPT级）加精致IDE首选Cursor Pro。Continue.dev已不再是选项——2026年6月18日被Cursor收购关闭。最佳免费开源替代方案是Cline。</strong>',
          'Cursor Pro $20/月将模型用量与紧密集成的编辑器打包——代理模式、仓库级上下文、预测编辑。套餐现包含无限Auto模式（Cursor选择模型，按固定费率计费）及每月$20积分池用于手动选择的高级模型。',
          'Cline是接替Continue.dev工作流的推荐免费替代方案：Apache 2.0，VS Code扩展，支持Ollama、LM Studio和vLLM在内的30+模型提供商，VS Code安装量超500万。已订阅Claude API的开发者用自有密钥搭配Cline，重度使用下通常比Cursor Pro更便宜。',
        ],
        affiliateLinks: [
          { url: 'https://cursor.com', productName: 'Cursor Pro', productCategory: 'ide', priceRange: '~$20/月', label: '在cursor.com查看Cursor Pro定价' },
          { url: 'https://cline.bot', productName: 'Cline（免费·开源）', productCategory: 'ide-extension', priceRange: '免费', label: '下载Cline——Continue.dev的替代方案（免费）' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Cursor Pro 与 Continue.dev（已关闭）与 Cline',
        content: [
          '<strong>Continue.dev已于2026年6月18日被Cursor收购，发布最终版v2.0.0后停止开发。</strong>下表对比Cursor Pro、已冻结的Continue.dev和推荐替代方案Cline。价格为2026年7月数据。',
        ],
        columns: ['功能', 'Cursor Pro', 'Continue.dev（已关闭）', 'Cline（替代方案）'],
        rows: [
          { '功能': '状态', 'Cursor Pro': '在运营', 'Continue.dev（已关闭）': '已停止（v2.0.0最终版）', 'Cline（替代方案）': '在运营·开源' },
          { '功能': '价格', 'Cursor Pro': '$20/月（年付$16）', 'Continue.dev（已关闭）': '曾免费，现已冻结', 'Cline（替代方案）': '免费BYOK；ClinePass $9.99/月' },
          { '功能': '编辑器', 'Cursor Pro': '完整编辑器（VS Code分支）', 'Continue.dev（已关闭）': 'VS Code/JetBrains扩展', 'Cline（替代方案）': 'VS Code扩展（JetBrains通过插件）' },
          { '功能': '云模型包含', 'Cursor Pro': '是 — $20积分池 + 无限Auto模式', 'Continue.dev（已关闭）': '否 — 自带API密钥', 'Cline（替代方案）': '否 — 自带API密钥（30+提供商）' },
          { '功能': '本地模型支持', 'Cursor Pro': '有限', 'Continue.dev（已关闭）': '一流（Ollama、LM Studio、vLLM）', 'Cline（替代方案）': '一流（Ollama、LM Studio、vLLM）' },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于Cursor Pro与Continue.dev的快速答案',
        faqs: [
          {
            q: 'Continue.dev还能用吗？',
            a: 'Continue.dev已停止运营。Cursor于2026年6月18日完成收购。GitHub仓库在v2.0.0版本处变为只读——不会有更多更新。用户数据将在2026年7月15日后删除。推荐的开源替代方案是Cline。',
          },
          {
            q: 'Continue.dev用户应该迁移到哪里？',
            a: 'Cline是最接近的替代方案：Apache 2.0，VS Code扩展，30+模型提供商，完整支持Ollama/LM Studio，以及可选的ClinePass托管计划（$9.99/月）。Aider是终端原生工作流的另一选择。',
          },
          {
            q: 'Cursor Pro $20/月值得吗？',
            a: '值得，若云端前沿模型是主要工作流且尚未订阅底层API。套餐现包含无限Auto模式加每月$20积分池用于手动选择的高级模型。如主要使用本地模型，请改用Cline。',
          },
          {
            q: 'Cursor Pro积分池如何运作？',
            a: 'Auto模式无限制：Cursor选择模型并按固定费率计费（输入$1.25/M，输出$6/M），不消耗积分池。手动选择高级模型（Claude Sonnet 5、GPT-5等）则消耗$20积分池。重度使用高级模型的用户可能耗尽积分；Pro+套餐（$60/月）提供3倍配额。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '延伸阅读',
        items: [
          '[Ollama最佳前端](/zh/prompt-bites/best-frontend-for-ollama) — Cline与其他Ollama客户端的比较（已更新反映Continue.dev关闭后的现状）',
          '[Jan 与 LM Studio](/zh/prompt-bites/jan-vs-lm-studio) — 本地聊天工作流的可比选择',
          '[Qwen Coder 与 DeepSeek Coder](/zh/prompt-bites/qwen-coder-vs-deepseek-coder) — 搭配Cline或Aider的本地编码模型',
        ],
      },
    },
  },
  pt: {
    theme: 'Tool Comparisons',
    heroImage: '/images/cursor-pro-vs-continue-dev-overview-hero-pt.webp',
    title: 'Cursor Pro vs Continue.dev: Vale $20/mês em 2026?',
    seoTitle: 'Cursor Pro vs Continue.dev 2026 | Prompt Bites',
    metaDescription: 'Continue.dev foi adquirido pela Cursor em junho de 2026 e está encerrando (prazo exportação: 15 de julho). Cline é agora a melhor alternativa gratuita open source. Cursor Pro permanece em $20/mês.',
    publishDate: '2026-05-22',
    dateModified: '2026-07-13',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores escolhendo um assistente de codificação com IA para fluxos de trabalho tipo VS Code',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/replace-github-copilot-with-local-llm',
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    leadAnswerBlock: 'Cursor Pro a $20/mês vale a pena se você usa principalmente modelos de fronteira em nuvem (Claude, GPT) e quer uma experiência de editor refinada. Importante: Continue.dev foi adquirido pela Cursor em 18 de junho de 2026 e está encerrando — dados de usuários serão deletados após 15 de julho. A melhor alternativa gratuita open source é agora o Cline (Apache 2.0, VS Code + JetBrains, BYOK). Escolha conforme seu workflow: IDE em nuvem → Cursor Pro, Ollama local / BYOK → Cline.',
    toc: [
      { label: 'Melhor opção por fluxo de trabalho', anchor: '#best-pick' },
      { label: 'Cursor Pro vs Continue.dev', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related' },
    ],
    intro: 'Cursor Pro e Continue.dev foram os dois assistentes de codificação com IA mais comparados no início de 2026 — mas em 18 de junho de 2026, a Cursor adquiriu o Continue em um acqui-hire que encerra o produto. Continue.dev publicou sua versão final v2.0.0, o repositório GitHub está somente leitura, e os dados de usuários serão deletados após 15 de julho. A própria Cursor está simultaneamente sendo adquirida pela SpaceX por $60 bilhões (anúncio em 16 de junho, conclusão prevista no T3 2026). Este artigo cobre os preços atuais do Cursor Pro e quais alternativas open source (Cline, Aider) substituem o Continue.dev.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Continue.dev foi adquirido pela Cursor em 18 de junho de 2026 e está encerrando — prazo de exportação de dados: 15 de julho de 2026',
          'Melhor alternativa gratuita open source: Cline — Apache 2.0, VS Code + JetBrains, 30+ provedores de modelos, suporte a Ollama',
          'Cursor Pro a $20/mês continua sendo a melhor escolha para modelos em nuvem — agora com modo Auto ilimitado + pool de $20 em créditos',
          'Se você já paga pela API Claude/OpenAI, o Cline (BYOK) é significativamente mais barato que o Cursor Pro',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor opção: Cursor Pro para nuvem, Cline para local (Continue.dev encerrado)',
        content: [
          '<strong>Cursor Pro é a melhor opção para modelos de fronteira em nuvem (Claude Sonnet 5, GPT) com um IDE refinado. Continue.dev não é mais uma opção — adquirido pela Cursor em 18 de junho de 2026 e encerrado. A melhor alternativa gratuita open source é o Cline.</strong>',
          'Cursor Pro a $20/mês agrupa uso de modelo com um editor estreitamente integrado — modo agente, contexto de repositório, edições preditivas. O plano agora inclui modo Auto ilimitado (Cursor escolhe o modelo a tarifas fixas) mais um pool mensal de $20 em créditos para modelos premium selecionados manualmente.',
          'Cline é a alternativa gratuita recomendada para os fluxos de trabalho que o Continue.dev atendia: Apache 2.0, extensão VS Code, 30+ provedores de modelos incluindo Ollama, LM Studio e vLLM, e 5 milhões de instalações no VS Code. Se você já paga pela API Claude, o Cline com sua própria chave é tipicamente mais barato que o Cursor Pro em uso intenso.',
        ],
        affiliateLinks: [
          {
            url: 'https://cursor.com',
            productName: 'Cursor Pro',
            productCategory: 'ide',
            priceRange: '$20/mês',
            label: 'Verifique os preços do Cursor Pro em cursor.com',
          },
          {
            url: 'https://cline.bot',
            productName: 'Cline (gratuito, código aberto)',
            productCategory: 'ide-extension',
            priceRange: 'Gratuito',
            label: 'Baixe o Cline — o substituto do Continue.dev (gratuito)',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Cursor Pro vs Continue.dev (encerrado) vs Cline',
        content: [
          '<strong>Continue.dev foi adquirido pela Cursor em 18 de junho de 2026 e publicou sua versão final v2.0.0 — nenhum desenvolvimento futuro.</strong> A tabela compara o Cursor Pro com o Continue.dev congelado e o Cline, o substituto recomendado. Preços de julho de 2026.',
        ],
        columns: ['Característica', 'Cursor Pro', 'Continue.dev (encerrado)', 'Cline (substituto)'],
        rows: [
          {
            'Característica': 'Status',
            'Cursor Pro': 'Ativo',
            'Continue.dev (encerrado)': 'Encerrado (v2.0.0 final)',
            'Cline (substituto)': 'Ativo, código aberto',
          },
          {
            'Característica': 'Preço',
            'Cursor Pro': '$20/mês ($16 anual)',
            'Continue.dev (encerrado)': 'Era gratuito — agora congelado',
            'Cline (substituto)': 'Gratuito BYOK; ClinePass $9,99/mês',
          },
          {
            'Característica': 'Editor',
            'Cursor Pro': 'Editor completo (fork VS Code)',
            'Continue.dev (encerrado)': 'Extensão VS Code/JetBrains',
            'Cline (substituto)': 'Extensão VS Code (JetBrains via plugin)',
          },
          {
            'Característica': 'Modelos em nuvem incluídos',
            'Cursor Pro': 'Sim — pool $20 + modo Auto ilimitado',
            'Continue.dev (encerrado)': 'Não — sua própria chave API',
            'Cline (substituto)': 'Não — sua própria chave API (30+ provedores)',
          },
          {
            'Característica': 'Suporte a modelos locais',
            'Cursor Pro': 'Limitado',
            'Continue.dev (encerrado)': 'Primeira classe (Ollama, LM Studio, vLLM)',
            'Cline (substituto)': 'Primeira classe (Ollama, LM Studio, vLLM)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas rápidas: Cursor Pro vs Continue.dev',
        faqs: [
          {
            q: 'Continue.dev ainda está disponível?',
            a: 'Continue.dev foi encerrado. A Cursor adquiriu a equipe em 18 de junho de 2026. O repositório GitHub está somente leitura na versão v2.0.0 — sem atualizações futuras. Os dados de usuários serão deletados após 15 de julho de 2026. A alternativa open source recomendada é o Cline.',
          },
          {
            q: 'Para onde os usuários do Continue.dev devem migrar?',
            a: 'O Cline é o substituto mais próximo: Apache 2.0, extensão VS Code, 30+ provedores de modelos, suporte completo a Ollama/LM Studio, e um plano gerenciado opcional ClinePass a $9,99/mês. O Aider é outra opção para fluxos de trabalho nativos de terminal.',
          },
          {
            q: 'Vale a pena pagar $20/mês pelo Cursor Pro?',
            a: 'Sim, se modelos em nuvem são seu principal fluxo de trabalho e você não paga pelas APIs subjacentes. O plano agora inclui modo Auto ilimitado mais um pool mensal de $20 em créditos para modelos premium selecionados manualmente. Evite o Cursor Pro se você usa principalmente modelos locais — use o Cline.',
          },
          {
            q: 'Como funciona o pool de créditos do Cursor Pro?',
            a: 'O modo Auto é ilimitado: o Cursor escolhe o modelo e cobra a tarifas fixas ($1,25/M input, $6/M output) sem consumir do pool. Selecionar manualmente um modelo premium (Claude Sonnet 5, GPT-5, etc.) consome o pool de $20. Usuários intensivos que selecionam manualmente modelos premium podem esgotar o pool; o Pro+ a $60/mês oferece 3x o uso.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leituras relacionadas',
        items: [
          '[Melhor frontend para Ollama](/pt/prompt-bites/best-frontend-for-ollama) — Cline e outros clientes Ollama comparados (atualizado para o cenário pós-Continue.dev)',
          '[Jan vs LM Studio](/pt/prompt-bites/jan-vs-lm-studio) — Opções comparáveis para fluxos de trabalho de chat local',
          '[Qwen Coder vs DeepSeek Coder](/pt/prompt-bites/qwen-coder-vs-deepseek-coder) — Modelos de codificação locais para usar com Cline ou Aider',
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    heroImage: '/images/cursor-pro-vs-continue-dev-overview-hero-es.webp',
    title: 'Cursor Pro vs Continue.dev: ¿Valen $20/mes en 2026?',
    seoTitle: 'Cursor Pro vs Continue.dev 2026 | Prompt Bites',
    metaDescription: 'Continue.dev fue adquirido por Cursor en junio de 2026 y está cerrando (plazo exportación: 15 de julio). Cline es ahora la mejor alternativa gratuita open source. Cursor Pro sigue en $20/mes.',
    publishDate: '2026-05-22',
    dateModified: '2026-07-13',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermedio',
    audience: 'Desarrolladores eligiendo un asistente de codificación IA para flujos de trabajo tipo VS Code',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/replace-github-copilot-with-local-llm',
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    leadAnswerBlock: 'Cursor Pro a $20/mes vale la pena si usas principalmente modelos en la nube frontera (Claude, GPT) y quieres una experiencia de editor pulida. Importante: Continue.dev fue adquirido por Cursor el 18 de junio de 2026 y está cerrando — los datos de usuarios se eliminarán después del 15 de julio. La mejor alternativa gratuita open source es ahora Cline (Apache 2.0, VS Code + JetBrains, BYOK). Elige según tu flujo de trabajo: IDE en la nube → Cursor Pro, Ollama local / BYOK → Cline.',
    toc: [
      { label: 'Mejor opción por flujo de trabajo', anchor: '#best-pick' },
      { label: 'Cursor Pro vs Continue.dev', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related' },
    ],
    intro: 'Cursor Pro y Continue.dev fueron los dos asistentes de codificación IA más comparados a principios de 2026 — pero desde el 18 de junio de 2026, Cursor adquirió Continue en un acqui-hire que pone fin al producto. Continue.dev publicó su versión final v2.0.0, el repositorio de GitHub está en modo solo lectura, y los datos de usuarios se eliminarán después del 15 de julio. El propio Cursor está siendo simultáneamente adquirido por SpaceX por $60 mil millones (anuncio del 16 de junio, cierre previsto en el T3 2026). Este artículo cubre los precios actuales de Cursor Pro y qué alternativas open source (Cline, Aider) toman el relevo de Continue.dev.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Continue.dev fue adquirido por Cursor el 18 de junio de 2026 y está cerrando — plazo de exportación de datos: 15 de julio de 2026',
          'Mejor alternativa gratuita open source: Cline — Apache 2.0, VS Code + JetBrains, 30+ proveedores de modelos, soporte Ollama',
          'Cursor Pro a $20/mes sigue siendo la mejor opción para modelos en la nube — ahora con modo Auto ilimitado + pool de $20 en créditos',
          'Si ya pagas la API de Claude/OpenAI, Cline (BYOK) es significativamente más barato que Cursor Pro',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor opción: Cursor Pro para nube, Cline para local (Continue.dev cerrado)',
        content: [
          '<strong>Cursor Pro es la mejor opción para modelos frontera en la nube (Claude Sonnet 5, GPT) con un IDE pulido. Continue.dev ya no es una opción — adquirido por Cursor el 18 de junio de 2026 y cerrado. La mejor alternativa gratuita open source es Cline.</strong>',
          'Cursor Pro a $20/mes agrupa uso de modelo con un editor estrechamente integrado — modo agente, contexto de repositorio, ediciones predictivas. El plan ahora incluye modo Auto ilimitado (Cursor elige el modelo a tarifas fijas) más un pool mensual de $20 en créditos para modelos premium seleccionados manualmente.',
          'Cline es la alternativa gratuita recomendada para los flujos de trabajo que servía Continue.dev: Apache 2.0, extensión VS Code, 30+ proveedores de modelos incluyendo Ollama, LM Studio y vLLM, y 5 millones de instalaciones en VS Code. Si ya pagas la API de Claude, Cline con tu propia clave es típicamente más barato que Cursor Pro en uso intenso.',
        ],
        affiliateLinks: [
          {
            url: 'https://cursor.com',
            productName: 'Cursor Pro',
            productCategory: 'ide',
            priceRange: '$20/mes',
            label: 'Verifica los precios de Cursor Pro en cursor.com',
          },
          {
            url: 'https://cline.bot',
            productName: 'Cline (gratuito, código abierto)',
            productCategory: 'ide-extension',
            priceRange: 'Gratuito',
            label: 'Descarga Cline — el sustituto de Continue.dev (gratuito)',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Cursor Pro vs Continue.dev (cerrado) vs Cline',
        content: [
          '<strong>Continue.dev fue adquirido por Cursor el 18 de junio de 2026 y publicó su versión final v2.0.0 — ningún desarrollo futuro.</strong> La tabla compara Cursor Pro con Continue.dev congelado y Cline, el sustituto recomendado. Precios de julio de 2026.',
        ],
        columns: ['Característica', 'Cursor Pro', 'Continue.dev (cerrado)', 'Cline (sustituto)'],
        rows: [
          {
            'Característica': 'Estado',
            'Cursor Pro': 'Activo',
            'Continue.dev (cerrado)': 'Cerrado (v2.0.0 final)',
            'Cline (sustituto)': 'Activo, código abierto',
          },
          {
            'Característica': 'Precio',
            'Cursor Pro': '$20/mes ($16 anual)',
            'Continue.dev (cerrado)': 'Era gratuito — ahora congelado',
            'Cline (sustituto)': 'Gratuito BYOK; ClinePass $9,99/mes',
          },
          {
            'Característica': 'Editor',
            'Cursor Pro': 'Editor completo (fork VS Code)',
            'Continue.dev (cerrado)': 'Extensión VS Code/JetBrains',
            'Cline (sustituto)': 'Extensión VS Code (JetBrains vía plugin)',
          },
          {
            'Característica': 'Modelos en la nube incluidos',
            'Cursor Pro': 'Sí — pool $20 + modo Auto ilimitado',
            'Continue.dev (cerrado)': 'No — tu propia clave API',
            'Cline (sustituto)': 'No — tu propia clave API (30+ proveedores)',
          },
          {
            'Característica': 'Soporte de modelos locales',
            'Cursor Pro': 'Limitado',
            'Continue.dev (cerrado)': 'Primera clase (Ollama, LM Studio, vLLM)',
            'Cline (sustituto)': 'Primera clase (Ollama, LM Studio, vLLM)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas rápidas: Cursor Pro vs Continue.dev',
        faqs: [
          {
            q: '¿Continue.dev sigue disponible?',
            a: 'Continue.dev está cerrado. Cursor adquirió el equipo el 18 de junio de 2026. El repositorio de GitHub está en solo lectura en la versión v2.0.0 — sin actualizaciones futuras. Los datos de usuarios se eliminarán después del 15 de julio de 2026. La alternativa open source recomendada es Cline.',
          },
          {
            q: '¿A qué deben migrar los usuarios de Continue.dev?',
            a: 'Cline es el sustituto más cercano: Apache 2.0, extensión VS Code, 30+ proveedores de modelos, soporte completo a Ollama/LM Studio, y un plan gestionado opcional ClinePass a $9,99/mes. Aider es otra opción para flujos de trabajo nativos de terminal.',
          },
          {
            q: '¿Vale la pena pagar $20/mes por Cursor Pro?',
            a: 'Sí, si los modelos en la nube son tu flujo de trabajo principal y no pagas ya las APIs subyacentes. El plan ahora incluye modo Auto ilimitado más un pool mensual de $20 en créditos para modelos premium seleccionados manualmente. Evita Cursor Pro si usas principalmente modelos locales — usa Cline.',
          },
          {
            q: '¿Cómo funciona el pool de créditos de Cursor Pro?',
            a: 'El modo Auto es ilimitado: Cursor elige el modelo y cobra a tarifas fijas ($1,25/M input, $6/M output) sin consumir del pool. Seleccionar manualmente un modelo premium (Claude Sonnet 5, GPT-5, etc.) consume el pool de $20. Los usuarios intensivos que seleccionan modelos premium manualmente pueden agotarlo; Pro+ a $60/mes ofrece 3x el uso.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejor frontend para Ollama](/es/prompt-bites/best-frontend-for-ollama) — Cline y otros clientes Ollama comparados (actualizado para el escenario post-Continue.dev)',
          '[Jan vs LM Studio](/es/prompt-bites/jan-vs-lm-studio) — Opciones comparables para flujos de trabajo de chat local',
          '[Qwen Coder vs DeepSeek Coder](/es/prompt-bites/qwen-coder-vs-deepseek-coder) — Modelos de codificación locales para usar con Cline o Aider',
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    heroImage: '/images/cursor-pro-vs-continue-dev-overview-hero-ar.webp',
    title: '⁨Cursor Pro⁩ مقابل ⁨Continue.dev⁩: هل تستحق $⁨20⁩/شهر في ⁨2026⁩؟',
    seoTitle: '⁨Cursor Pro⁩ مقابل ⁨Continue.dev 2026⁩ | أيهما للكود؟',
    metaDescription: 'جرى استحواذ Cursor على Continue.dev في يونيو 2026 وهو يُغلق أبوابه (موعد تصدير البيانات: 15 يوليو). Cline هو أفضل بديل مجاني مفتوح المصدر الآن. Cursor Pro لا يزال بـ $20/شهر.',
    publishDate: '2026-05-22',
    dateModified: '2026-07-13',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'مطورون يختارون مساعد برمجة بالذكاء الاصطناعي لسير عمل من نوع VS Code',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/replace-github-copilot-with-local-llm',
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    leadAnswerBlock: 'Cursor Pro بـ $20/شهر يستحق الاشتراك إذا كنت تستخدم أساسًا نماذج السحابة الحدّية (Claude وGPT) وتريد تجربة محرر مصقولة. مهم: جرى استحواذ Cursor على Continue.dev في 18 يونيو 2026 وهو يُغلق — تُحذف بيانات المستخدمين بعد 15 يوليو. أفضل بديل مجاني مفتوح المصدر الآن هو Cline (Apache 2.0، VS Code + JetBrains، BYOK). اختر حسب سير عملك: IDE السحابي → Cursor Pro، Ollama المحلي / BYOK → Cline.',
    toc: [
      { label: 'أفضل اختيار حسب سير العمل', anchor: '#best-pick' },
      { label: 'Cursor Pro مقابل Continue.dev', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    intro: 'كان Cursor Pro وContinue.dev الأداتين الأكثر مقارنةً في مجال مساعدة البرمجة بالذكاء الاصطناعي مطلع 2026 — غير أنه في 18 يونيو 2026 استحوذت Cursor على Continue في صفقة acqui-hire أنهت المنتج. نشرت Continue.dev إصدارها النهائي v2.0.0، وأصبح مستودع GitHub للقراءة فقط، وستُحذف بيانات المستخدمين بعد 15 يوليو. وتتعرض Cursor نفسها في الوقت ذاته لاستحواذ SpaceX عليها بـ 60 مليار دولار (إعلان 16 يونيو، إغلاق متوقع Q3 2026). يتناول هذا المقال الأسعار الحالية لـ Cursor Pro وأبرز البدائل مفتوحة المصدر (Cline وAider) التي تحل محل Continue.dev.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'جرى استحواذ Cursor على Continue.dev في 18 يونيو 2026 وهو يُغلق — موعد تصدير البيانات: 15 يوليو 2026',
          'أفضل بديل مجاني مفتوح المصدر: Cline — Apache 2.0، VS Code + JetBrains، 30+ مزوّد نماذج، دعم Ollama',
          'Cursor Pro بـ $20/شهر لا يزال الخيار الأفضل لنماذج السحابة — مع وضع Auto غير محدود + مجمع رصيد $20',
          'إذا كنت تدفع بالفعل لـ API Claude أو OpenAI، فـ Cline (BYOK) أرخص بكثير من Cursor Pro',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: Cursor Pro للسحابة، Cline للمحلي (Continue.dev مغلق)',
        content: [
          '<strong>Cursor Pro هو الأفضل لنماذج السحابة الحدّية (Claude Sonnet 5 وGPT) مع بيئة تطوير مصقولة. Continue.dev لم يعد خيارًا — استُحوذ عليه من Cursor في 18 يونيو 2026 وأُغلق. أفضل بديل مجاني مفتوح المصدر هو Cline.</strong>',
          'Cursor Pro بـ $20/شهر يجمع استخدام النماذج مع محرر مُدمج تمامًا — وضع الوكيل، سياق المستودع بأكمله، تعديلات تنبؤية. يتضمن الآن وضع Auto غير محدود (يختار Cursor النموذج بأسعار ثابتة) إضافةً إلى مجمع رصيد شهري بـ $20 للنماذج المميزة المختارة يدويًا.',
          'Cline هو البديل المجاني الموصى به لسير العمل الذي كان Continue.dev يخدمه: Apache 2.0، امتداد VS Code، 30+ مزوّد نماذج بما فيها Ollama وLM Studio وvLLM، و5 مليون تثبيت على VS Code. إذا كنت تدفع بالفعل لـ API Claude، فـ Cline بمفتاحك الخاص عادةً أرخص من Cursor Pro في الاستخدام المكثّف.',
        ],
        affiliateLinks: [
          {
            url: 'https://cursor.com',
            productName: 'Cursor Pro',
            productCategory: 'ide',
            priceRange: '$20/شهر',
            label: 'تحقق من أسعار Cursor Pro على cursor.com',
          },
          {
            url: 'https://cline.bot',
            productName: 'Cline (مجاني، مفتوح المصدر)',
            productCategory: 'ide-extension',
            priceRange: 'مجاني',
            label: 'تحميل Cline — البديل عن Continue.dev (مجاني)',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Cursor Pro مقابل Continue.dev (مغلق) مقابل Cline',
        content: [
          '<strong>استُحوذ على Continue.dev من Cursor في 18 يونيو 2026 ونشر إصداره النهائي v2.0.0 — لا تطوير مستقبلي.</strong> يقارن الجدول Cursor Pro مع Continue.dev المجمَّد وCline البديل الموصى به. الأسعار حتى يوليو 2026.',
        ],
        columns: ['الخاصية', 'Cursor Pro', 'Continue.dev (مغلق)', 'Cline (البديل)'],
        rows: [
          {
            'الخاصية': 'الحالة',
            'Cursor Pro': 'نشط',
            'Continue.dev (مغلق)': 'مغلق (v2.0.0 نهائي)',
            'Cline (البديل)': 'نشط، مفتوح المصدر',
          },
          {
            'الخاصية': 'السعر',
            'Cursor Pro': '$20/شهر ($16 سنويًا)',
            'Continue.dev (مغلق)': 'كان مجانيًا — مجمَّد الآن',
            'Cline (البديل)': 'مجاني BYOK؛ ClinePass $9.99/شهر',
          },
          {
            'الخاصية': 'المحرر',
            'Cursor Pro': 'محرر كامل (fork من VS Code)',
            'Continue.dev (مغلق)': 'امتداد VS Code/JetBrains',
            'Cline (البديل)': 'امتداد VS Code (JetBrains عبر plugin)',
          },
          {
            'الخاصية': 'نماذج السحابة مضمّنة',
            'Cursor Pro': 'نعم — مجمع $20 + وضع Auto غير محدود',
            'Continue.dev (مغلق)': 'لا — مفتاح API الخاص بك',
            'Cline (البديل)': 'لا — مفتاح API الخاص بك (30+ مزوّد)',
          },
          {
            'الخاصية': 'دعم النماذج المحلية',
            'Cursor Pro': 'محدود',
            'Continue.dev (مغلق)': 'درجة أولى (Ollama وLM Studio وvLLM)',
            'Cline (البديل)': 'درجة أولى (Ollama وLM Studio وvLLM)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة سريعة: Cursor Pro مقابل Continue.dev',
        faqs: [
          {
            q: 'هل Continue.dev لا يزال متاحًا؟',
            a: 'Continue.dev أُغلق. استحوذت Cursor على الفريق في 18 يونيو 2026. المستودع على GitHub للقراءة فقط عند الإصدار v2.0.0 — لا تحديثات مستقبلية. تُحذف بيانات المستخدمين بعد 15 يوليو 2026. البديل مفتوح المصدر الموصى به هو Cline.',
          },
          {
            q: 'إلى ما يجب أن ينتقل مستخدمو Continue.dev؟',
            a: 'Cline هو الأقرب كبديل: Apache 2.0، امتداد VS Code، 30+ مزوّد نماذج، دعم كامل لـ Ollama وLM Studio، وخطة ClinePass اختيارية بـ $9.99/شهر. Aider خيار آخر لسير العمل في الطرفية.',
          },
          {
            q: 'هل تستحق $20/شهر لـ Cursor Pro؟',
            a: 'نعم إذا كانت نماذج السحابة هي سير عملك الرئيسي ولا تدفع بالفعل لـ APIs الأساسية. يتضمن الآن وضع Auto غير محدود إضافةً إلى مجمع رصيد شهري بـ $20 للنماذج المميزة المختارة يدويًا. تجنّب Cursor Pro إذا كنت تستخدم أساسًا نماذج محلية — استخدم Cline.',
          },
          {
            q: 'كيف يعمل مجمع رصيد Cursor Pro؟',
            a: 'وضع Auto غير محدود: يختار Cursor النموذج ويحسب بأسعار ثابتة ($1.25/مليون رمز إدخال، $6/مليون رمز إخراج) دون الاقتطاع من المجمع. اختيار نموذج مميز يدويًا (Claude Sonnet 5 وGPT-5 وغيرهما) يقتطع من مجمع $20. كثيفو الاستخدام الذين يختارون نماذج مميزة يدويًا قد يستنفدون المجمع؛ Pro+ بـ $60/شهر يمنح 3 أضعاف الاستخدام.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل واجهة لـ Ollama](/ar/prompt-bites/best-frontend-for-ollama) — مقارنة Cline مع عملاء Ollama الآخرين (مُحدَّث لما بعد Continue.dev)',
          '[Jan مقابل LM Studio](/ar/prompt-bites/jan-vs-lm-studio) — خيارات مماثلة لسير عمل المحادثة المحلية',
          '[Qwen Coder مقابل DeepSeek Coder](/ar/prompt-bites/qwen-coder-vs-deepseek-coder) — نماذج البرمجة المحلية للاستخدام مع Cline أو Aider',
        ],
      },
    },
  },
  ko: {
    theme: 'Tool Comparisons',
    heroImage: '/images/cursor-pro-vs-continue-dev-overview-hero-ko.webp',
    title: 'Cursor Pro vs Continue.dev: 2026년 월 $20 가치가 있을까?',
    seoTitle: 'Cursor Pro vs Continue.dev 2026: 로컬 vs 클라우드',
    metaDescription: 'Continue.dev는 2026년 6월 Cursor에 인수되어 서비스를 종료합니다(데이터 내보내기 기한: 7월 15일). Cline이 현재 최고의 무료 오픈소스 대안입니다. Cursor Pro는 여전히 월 $20입니다.',
    publishDate: '2026-05-22',
    dateModified: '2026-07-13',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: '중급',
    audience: 'VS Code 기반 워크플로에서 AI 코딩 어시스턴트를 선택하는 개발자',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/replace-github-copilot-with-local-llm',
    siblingBites: ['best-frontend-for-ollama', 'jan-vs-lm-studio'],
    is_living_page: false,
    readTime: '3분 분량',
    targetKeywords: [
      'Cursor Pro vs Continue.dev 한국어',
      'Cursor Pro 월 구독 가치',
      'Continue.dev Ollama 설정',
      'AI 코딩 어시스턴트 비교 2026',
      'Continue.dev 무료 사용법',
    ],
    leadAnswerBlock: 'Cursor Pro(월 $20)는 주로 클라우드 프론티어 모델(Claude, GPT)을 사용하고 세련된 편집기 경험을 원하는 경우에 가치가 있습니다. 중요: Continue.dev는 2026년 6월 18일 Cursor에 인수되어 서비스를 종료합니다 — 사용자 데이터는 7월 15일 이후 삭제됩니다. 최고의 무료 오픈소스 대안은 이제 Cline(Apache 2.0, VS Code + JetBrains, BYOK)입니다. 워크플로에 따라 선택하십시오: 클라우드 IDE → Cursor Pro, 로컬 Ollama / BYOK → Cline.',
    toc: [
      { label: '워크플로별 최선의 선택', anchor: '#best-pick' },
      { label: 'Cursor Pro vs Continue.dev 비교', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    intro: 'Cursor Pro와 Continue.dev는 2026년 초 가장 많이 비교된 AI 코딩 어시스턴트였습니다. 그러나 2026년 6월 18일, Cursor는 Continue를 인수합병(acqui-hire)하여 제품을 종료했습니다. Continue.dev는 최종 버전 v2.0.0을 배포하고 GitHub 리포지토리를 읽기 전용으로 전환했으며, 사용자 데이터는 7월 15일 이후 삭제됩니다. Cursor 자체도 SpaceX에 600억 달러에 인수되는 중입니다(2026년 6월 16일 발표, Q3 2026 완료 예정). 이 글은 Cursor Pro의 현행 요금제와 Continue.dev를 대체하는 오픈소스 대안(Cline, Aider)을 다룹니다.',
    quickAnswerTop: {
      ko: {
        question: 'Cursor Pro와 Continue.dev 중 어느 것이 더 낫습니까?',
        answer: 'Claude, GPT 등 클라우드 모델을 주로 사용하고 통합된 편집기 경험을 원한다면 Cursor Pro(월 $20)를 선택하십시오. Continue.dev는 2026년 6월 18일 Cursor에 인수되어 종료되었습니다 — 로컬 모델용 무료 오픈소스 대안은 이제 Cline입니다.',
        bullets: [
          '클라우드 모델 사용 → Cursor Pro: 세련된 편집기, 에이전트 모드, 무제한 Auto 모드 + $20 크레딧 풀',
          '로컬 모델 사용 → Cline: 무료, 오픈소스(Apache 2.0), Ollama 완전 지원, 30+ 모델 제공업체',
          '이미 Claude/OpenAI API를 구독 중이라면 Cline(BYOK)이 Cursor Pro보다 훨씬 저렴할 수 있음',
        ],
        updatedDate: '2026-07',
      },
    },
    schema: {
      inLanguage: 'ko',
      headline: 'Cursor Pro vs Continue.dev: 2026년 월 $20 가치가 있을까?',
      description: 'Cursor Pro(월 $20)는 Claude, GPT 등 클라우드 모델과 세련된 편집기 UX에 탁월합니다. Continue.dev는 무료이며 Ollama 로컬 모델에 더 적합합니다.',
      url: 'https://www.promptquorum.com/ko/prompt-bites/cursor-pro-vs-continue-dev',
      datePublished: '2026-05-22',
      dateModified: '2026-07-13',
      'proficiencyLevel': '중급',
    },
    breadcrumbSchema: {
      items: [
        { position: 1, name: '홈', url: 'https://www.promptquorum.com/ko' },
        { position: 2, name: 'Prompt Bites', url: 'https://www.promptquorum.com/ko/prompt-bites' },
        { position: 3, name: 'Cursor Pro vs Continue.dev: 2026년 월 $20 가치가 있을까?', url: 'https://www.promptquorum.com/ko/prompt-bites/cursor-pro-vs-continue-dev' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Continue.dev는 2026년 6월 18일 Cursor에 인수되어 종료 — 데이터 내보내기 기한: 2026년 7월 15일',
          '최고의 무료 오픈소스 대안: Cline — Apache 2.0, VS Code + JetBrains, 30+ 모델 제공업체, Ollama 지원',
          'Cursor Pro(월 $20)는 클라우드 모델에 여전히 최선 — 이제 무제한 Auto 모드 + $20 크레딧 풀 포함',
          '이미 Claude/OpenAI API를 구독 중이라면 Cline(BYOK)이 Cursor Pro보다 훨씬 저렴',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Cursor Pro는 클라우드 모델 워크플로에, Continue.dev는 Ollama 로컬 모델 워크플로에 각각 최적화된 AI 코딩 어시스턴트입니다.' },
          { type: 'plain-terms', text: 'Cursor Pro(월 $20)는 Claude, GPT 등 클라우드 AI 모델을 편집기에 통합한 유료 도구이고, Continue.dev는 무료 확장 프로그램으로 로컬 Ollama 모델을 포함한 다양한 모델을 자유롭게 연결할 수 있습니다.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최선의 선택: 클라우드는 Cursor Pro, 로컬은 Cline(Continue.dev 서비스 종료)',
        content: [
          '<strong>클라우드 프론티어 모델(Claude Sonnet 5, GPT 계열)과 세련된 IDE에는 Cursor Pro가 최선입니다. Continue.dev는 더 이상 선택지가 아닙니다 — 2026년 6월 18일 Cursor에 인수되어 종료되었습니다. 최고의 무료 오픈소스 대안은 Cline입니다.</strong>',
          'Cursor Pro(월 $20)는 모델 사용량과 긴밀하게 통합된 편집기를 묶어 제공합니다 — 에이전트 모드, 저장소 전체 컨텍스트, 예측 편집 기능이 포함됩니다. 이제 무제한 Auto 모드(Cursor가 고정 요금으로 모델 선택)와 수동으로 선택한 프리미엄 모델용 월 $20 크레딧 풀도 포함됩니다.',
          'Cline은 Continue.dev가 제공했던 워크플로를 위한 추천 무료 대안입니다: Apache 2.0, VS Code 확장 프로그램, Ollama·LM Studio·vLLM을 포함한 30+ 모델 제공업체 지원, VS Code 설치 수 500만 이상. 이미 Claude API를 구독하고 있다면 자체 키로 Cline을 사용하는 것이 일반적으로 Cursor Pro보다 저렴합니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://cursor.com',
            productName: 'Cursor Pro',
            productCategory: 'ide',
            priceRange: '월 $20',
            label: 'cursor.com에서 Cursor Pro 가격 확인하기',
          },
          {
            url: 'https://cline.bot',
            productName: 'Cline (무료, 오픈소스)',
            productCategory: 'ide-extension',
            priceRange: '무료',
            label: 'Cline 무료 다운로드 — Continue.dev의 대안',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Cursor Pro vs Continue.dev(종료) vs Cline 비교',
        content: [
          '<strong>Continue.dev는 2026년 6월 18일 Cursor에 인수되어 최종 버전 v2.0.0을 배포하고 개발을 종료했습니다.</strong> 아래 표는 Cursor Pro, 동결된 Continue.dev, 추천 대안 Cline을 비교합니다. 가격 기준: 2026년 7월.',
        ],
        columns: ['기능', 'Cursor Pro', 'Continue.dev(종료)', 'Cline(대안)'],
        rows: [
          {
            '기능': '상태',
            'Cursor Pro': '활성',
            'Continue.dev(종료)': '종료(v2.0.0 최종)',
            'Cline(대안)': '활성, 오픈소스',
          },
          {
            '기능': '가격',
            'Cursor Pro': '월 $20(연간 $16)',
            'Continue.dev(종료)': '무료였으나 동결',
            'Cline(대안)': '무료 BYOK; ClinePass $9.99/월',
          },
          {
            '기능': '편집기',
            'Cursor Pro': '완전 편집기(VS Code 포크)',
            'Continue.dev(종료)': 'VS Code/JetBrains 확장',
            'Cline(대안)': 'VS Code 확장(JetBrains는 플러그인)',
          },
          {
            '기능': '클라우드 모델 포함',
            'Cursor Pro': '예 — $20 크레딧 풀 + 무제한 Auto 모드',
            'Continue.dev(종료)': '아니요 — 자체 API 키',
            'Cline(대안)': '아니요 — 자체 API 키(30+ 제공업체)',
          },
          {
            '기능': '로컬 모델 지원',
            'Cursor Pro': '제한적',
            'Continue.dev(종료)': '최상급(Ollama, LM Studio, vLLM)',
            'Cline(대안)': '최상급(Ollama, LM Studio, vLLM)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Cursor Pro와 Continue.dev에 관한 자주 묻는 질문',
        faqs: [
          {
            q: 'Continue.dev는 아직 사용할 수 있습니까?',
            a: 'Continue.dev는 서비스를 종료했습니다. Cursor가 2026년 6월 18일 팀을 인수했습니다. GitHub 리포지토리는 v2.0.0에서 읽기 전용으로 전환되었으며 향후 업데이트가 없습니다. 사용자 데이터는 2026년 7월 15일 이후 삭제됩니다. 추천 오픈소스 대안은 Cline입니다.',
          },
          {
            q: 'Continue.dev 사용자는 어디로 이전해야 합니까?',
            a: 'Cline이 가장 가까운 대안입니다: Apache 2.0, VS Code 확장, 30+ 모델 제공업체, Ollama/LM Studio 완전 지원, 선택적 ClinePass 월 $9.99 플랜. Aider는 터미널 기반 워크플로를 위한 또 다른 선택지입니다.',
          },
          {
            q: 'Cursor Pro 월 $20은 가치가 있습니까?',
            a: '클라우드 모델이 주요 워크플로이고 기반 API 비용을 지불하지 않는다면 그렇습니다. 이제 무제한 Auto 모드와 수동으로 선택한 프리미엄 모델용 월 $20 크레딧 풀이 포함됩니다. 주로 로컬 모델을 사용한다면 Cursor Pro 대신 Cline을 사용하십시오.',
          },
          {
            q: 'Cursor Pro 크레딧 풀은 어떻게 작동합니까?',
            a: 'Auto 모드는 무제한입니다: Cursor가 모델을 선택하고 고정 요금(입력 $1.25/백만, 출력 $6/백만)으로 청구되며 크레딧 풀을 소모하지 않습니다. 프리미엄 모델(Claude Sonnet 5, GPT-5 등)을 수동으로 선택하면 $20 풀을 소모합니다. 프리미엄 모델을 수동으로 많이 선택하는 사용자는 풀을 소진할 수 있으며, Pro+(월 $60)는 3배의 사용량을 제공합니다.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[Ollama 최고의 프런트엔드](/ko/prompt-bites/best-frontend-for-ollama) — Cline과 다른 Ollama 클라이언트 비교(Continue.dev 이후 상황 반영)',
          '[Jan vs LM Studio](/ko/prompt-bites/jan-vs-lm-studio) — 로컬 채팅 워크플로를 위한 유사한 선택지',
          '[Qwen Coder vs DeepSeek Coder](/ko/prompt-bites/qwen-coder-vs-deepseek-coder) — Cline 또는 Aider와 함께 사용할 로컬 코딩 모델 비교',
        ],
      },
    },
  },
}
