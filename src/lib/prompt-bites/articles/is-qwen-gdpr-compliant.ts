import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Privacy & Security',
    title: 'Is Qwen GDPR Compliant?',
    seoTitle: 'Is Qwen GDPR Compliant? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen run locally is GDPR-compliant — no data transfer, no Article 44 issue. Qwen API (Alibaba Cloud) requires SCCs like any non-EU cloud provider. Updated May 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: ['Qwen 3 14B', 'Qwen 3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'DPOs, IT leads, and developers in GDPR-regulated organisations',
    parentArticle: '/local-llms/qwen-gdpr-privacy-manifesto-2026',
    siblingBites: ['is-deepseek-gdpr-safe', 'can-local-llm-help-gdpr'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is Qwen GDPR compliant?',
        answer: 'Qwen run locally on your own hardware is GDPR-compliant because no prompt data leaves your infrastructure and no Article 44 third-country transfer occurs. The Qwen API via Alibaba Cloud is a different story — it requires Standard Contractual Clauses and a Transfer Impact Assessment like any non-EU cloud provider.',
        bullets: [
          'Local Qwen: no data transfer = no GDPR Article 44 issue',
          'Qwen API (Alibaba Cloud): requires SCCs + TIA under post-Schrems II rules',
          'Recommended: Qwen 3 14B or Qwen 3 8B locally via Ollama for data-sensitive tasks',
        ],
        updatedDate: '2026-05',
      },
      de: { question: 'Ist Qwen DSGVO-konform?', answer: 'Lokal betriebenes Qwen auf eigener Hardware ist DSGVO-konform, da keine Prompt-Daten Ihre Infrastruktur verlassen und kein Drittlandtransfer nach Artikel 44 stattfindet. Die Qwen-API über Alibaba Cloud ist eine andere Sache — sie erfordert wie jeder nicht-europäische Cloud-Anbieter Standardvertragsklauseln und eine Transferfolgenabschätzung.', bullets: ['Lokales Qwen: kein Datentransfer = kein DSGVO-Artikel-44-Problem', 'Qwen-API (Alibaba Cloud): erfordert SCC + TIA nach Post-Schrems-II-Regeln', 'Empfehlung: Qwen 3 14B oder Qwen 3 8B lokal über Ollama für datensensible Aufgaben'], updatedDate: '2026-05' },
      fr: { question: 'Qwen est-il conforme au RGPD ?', answer: 'Qwen exécuté localement sur votre propre infrastructure est conforme au RGPD, car aucune donnée de prompt ne quitte votre infrastructure et aucun transfert vers un pays tiers selon l\'Article 44 n\'a lieu. L\'API Qwen via Alibaba Cloud est différente — elle nécessite des Clauses Contractuelles Types et une Évaluation d\'Impact de Transfert comme tout prestataire cloud non-européen.', bullets: ['Qwen local : pas de transfert = pas de problème Article 44 RGPD', 'API Qwen (Alibaba Cloud) : nécessite CCT + EIT selon les règles post-Schrems II', 'Recommandé : Qwen 3 14B ou Qwen 3 8B en local via Ollama pour les tâches sensibles'], updatedDate: '2026-05' },
      ja: { question: 'QwenはGDPR準拠ですか？', answer: '自社ハードウェアでローカル実行するQwenはGDPR準拠です。プロンプトデータがインフラ外に出ず、第44条の第三国転送も発生しません。Alibaba Cloud経由のQwen APIは別の話で、EUドメイン外のクラウドプロバイダーと同様に標準契約条項と転送影響評価が必要です。', bullets: ['ローカルQwen：データ転送なし = GDPR第44条問題なし', 'Qwen API（Alibaba Cloud）：Post-Schrems II規則下でSCC + TIAが必要', '推奨：データ機密タスクにはOllama経由でQwen 3 14BまたはQwen 3 8Bをローカル実行'], updatedDate: '2026-05' },
      zh: { question: 'Qwen符合GDPR吗？', answer: '在自有硬件上本地运行的Qwen符合GDPR，因为提示词数据不会离开您的基础设施，也不会发生第44条规定的第三国转移。通过阿里云的Qwen API则不同——与任何非欧盟云提供商一样，需要标准合同条款和传输影响评估。', bullets: ['本地Qwen：无数据传输 = 无GDPR第44条问题', 'Qwen API（阿里云）：Post-Schrems II规则下需要SCCs + TIA', '推荐：数据敏感任务使用Ollama本地运行Qwen 3 14B或Qwen 3 8B'], updatedDate: '2026-05' },
      es: { question: '¿Es Qwen compatible con el RGPD?', answer: 'Qwen ejecutado localmente en tu propio hardware es compatible con el RGPD, porque ningún dato de prompt abandona tu infraestructura y no ocurre ninguna transferencia a terceros países según el Artículo 44. La API de Qwen a través de Alibaba Cloud es diferente: requiere Cláusulas Contractuales Tipo y una Evaluación de Impacto de Transferencia, como cualquier proveedor cloud no europeo.', bullets: ['Qwen local: sin transferencia de datos = sin problema del Artículo 44 del RGPD', 'API de Qwen (Alibaba Cloud): requiere CCT + EIT según las reglas post-Schrems II', 'Recomendado: Qwen 3 14B o Qwen 3 8B localmente via Ollama para tareas con datos sensibles'], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Local Qwen deployment is GDPR-compliant: prompts never leave your server, so Article 44 (third-country transfers) does not apply',
          'Qwen API via Alibaba Cloud requires Standard Contractual Clauses + Transfer Impact Assessment — the same burden as OpenAI or Anthropic API',
          'Apache 2.0 licence means weights are auditable: you can verify what the model does, satisfying Article 25 (data protection by design)',
          'For data-sensitive tasks (HR, legal, medical), local Qwen is the lower-risk path over any cloud LLM API',
        ],
      },
      body1: {
        title: 'Local Qwen Is GDPR-Compliant — Architecture Is the Reason',
        content: [
          '<strong>GDPR Article 44 prohibits transferring personal data to a country outside the EU without an adequate legal basis. When you run Qwen locally, no data transfer occurs — the model processes everything on your hardware, inside your jurisdiction. That is why local deployment is the most defensible GDPR position.</strong>',
          'The Qwen model weights (Qwen 3, Qwen 3) are released under Apache 2.0. This means you can download them, inspect them, and run them on your own server permanently — the licence cannot be revoked. Article 25 (data protection by design) is satisfied because you can demonstrate that sensitive data is never transmitted externally.',
          'Run Qwen locally via Ollama: <code>ollama run qwen2.5:14b</code> for a general 14B model, or <code>ollama run qwen3:8b</code> for the current Qwen 3 generation. Both need 10–12 GB VRAM at Q4_K_M. A standard RTX 3080 or RTX 4070 is sufficient.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Local Qwen is GDPR-compliant because no prompt data leaves your infrastructure, eliminating the Article 44 third-country transfer requirement entirely.' },
          { type: 'plain-terms', text: 'Running Qwen on your own computer or server means your data stays on your machine. GDPR only restricts data leaving the EU — if it never leaves your building, there is no GDPR problem.' },
        ],
      },
      body2: {
        title: 'Qwen API via Alibaba Cloud — A Different Risk Profile',
        content: [
          '<strong>The Qwen API (api.qwen.ai, via Alibaba Cloud) is hosted in China. Any personal data sent through the API is a third-country transfer under GDPR Article 44.</strong> China does not have an EU adequacy decision, so you need Standard Contractual Clauses (SCCs) and a Transfer Impact Assessment (TIA) before using it for data containing personal information.',
          'This is the same requirement that applies to OpenAI, Anthropic, and Google Cloud. It is not uniquely a Qwen problem — it is a structural issue with any cloud LLM hosted outside the EU. The additional China-specific risk is the Personal Information Protection Law (PIPL), which can compel data disclosure on government request. This matters for the TIA: EU regulators may view Chinese jurisdiction as higher-risk than US jurisdiction when assessing transfer adequacy.',
          'If you must use the Qwen API, use it only for non-personal data (e.g., public documents, code generation with no PII). For personal or business-confidential data, use local deployment instead.',
        ],
        columns: ['Deployment', 'Data leaves server?', 'GDPR Article 44 applies?', 'Action needed'],
        rows: [
          { 'Deployment': 'Qwen local (Ollama)', 'Data leaves server?': 'No', 'GDPR Article 44 applies?': 'No', 'Action needed': 'None — architecture is compliant' },
          { 'Deployment': 'Qwen API (Alibaba Cloud)', 'Data leaves server?': 'Yes', 'GDPR Article 44 applies?': 'Yes', 'Action needed': 'SCCs + TIA required for personal data' },
          { 'Deployment': 'Claude / OpenAI (EU region)', 'Data leaves server?': 'Yes (EU)', 'GDPR Article 44 applies?': 'Partial', 'Action needed': 'SCCs still required; TIA may be lighter' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers: Qwen and GDPR',
        faqs: [
          {
            q: 'Does running Qwen locally satisfy GDPR Article 25?',
            a: 'Yes. Article 25 requires data protection by design and default — meaning technical measures that prevent unnecessary data exposure. Running Qwen locally on an isolated server, with no outbound network calls for inference, directly satisfies this requirement. Combine with disk encryption (dm-crypt or FileVault) and access controls for a complete Article 25 implementation.',
          },
          {
            q: 'Is Alibaba Cloud GDPR compliant?',
            a: 'Alibaba Cloud offers GDPR-compliant configurations for EU-resident data (Frankfurt region). If you use the Alibaba Cloud EU region with SCCs in place, the GDPR transfer risk is reduced to the same level as AWS or Azure. However, the Qwen API (api.qwen.ai) is a separate product — verify which infrastructure region processes your requests before drawing this conclusion.',
          },
          {
            q: 'Which Qwen model is best for GDPR-sensitive workflows?',
            a: 'For 12 GB VRAM: Qwen 3 14B at Q4_K_M (general tasks) or Qwen 3 Coder 14B (code-heavy workflows). For 6–8 GB VRAM: Qwen 3 8B at Q4_K_M. Both run fully offline via Ollama. See the <a href="/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">complete GDPR Qwen setup guide</a> for Ollama installation steps.',
          },
          {
            q: 'Do I need a Data Processing Agreement with Ollama?',
            a: 'No. Ollama is a local runtime — it has no server component and processes no data on your behalf. There is no DPA required because Ollama is not a data processor under GDPR Article 28. The model runs entirely on your hardware.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Privacy & Security',
    title: 'Ist Qwen DSGVO-konform?',
    seoTitle: 'Ist Qwen DSGVO-konform? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Ist Qwen DSGVO-konform? Die Alibaba-Cloud-API speichert Daten in China. Lokal über Ollama betrieben ist Qwen vollständig DSGVO-konform.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      de: {
        question: 'Ist Qwen DSGVO-konform?',
        answer: 'Lokal auf eigener Hardware betriebenes Qwen ist DSGVO-konform, da keine Prompt-Daten Ihre Infrastruktur verlassen und kein Drittlandtransfer nach Artikel 44 stattfindet. Die Qwen-API über Alibaba Cloud erfordert wie jeder Nicht-EU-Anbieter Standardvertragsklauseln und eine Transferfolgenabschätzung.',
        bullets: [
          'Lokales Qwen: kein Datentransfer = kein Artikel-44-Problem',
          'Qwen-API (Alibaba Cloud): SCC + TIA nach Post-Schrems-II erforderlich',
          'Empfehlung: Qwen 3 14B oder Qwen 3 8B lokal via Ollama für datensensible Aufgaben',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Lokale Qwen-Bereitstellung ist DSGVO-konform: Prompts verlassen niemals Ihren Server, daher gilt Artikel 44 (Drittlandtransfers) nicht',
          'Qwen-API über Alibaba Cloud erfordert Standardvertragsklauseln + Transferfolgenabschätzung — dieselbe Anforderung wie bei OpenAI oder Anthropic-API',
          'Apache-2.0-Lizenz bedeutet, dass Gewichte prüfbar sind: Sie können überprüfen, was das Modell tut, was Artikel 25 (Datenschutz durch Technikgestaltung) erfüllt',
          'Für datensensible Aufgaben (HR, Recht, Medizin) ist lokales Qwen der risikoärmere Weg gegenüber jeder Cloud-LLM-API',
        ],
      },
      body1: {
        title: 'Lokales Qwen ist DSGVO-konform — die Architektur ist der Grund',
        content: [
          '<strong>DSGVO-Artikel 44 verbietet die Übermittlung personenbezogener Daten in ein Land außerhalb der EU ohne angemessene Rechtsgrundlage. Wenn Sie Qwen lokal betreiben, findet keine Datenübermittlung statt — das Modell verarbeitet alles auf Ihrer Hardware innerhalb Ihrer Jurisdiktion. Das ist der Grund, warum die lokale Bereitstellung die am besten verteidigbare DSGVO-Position ist.</strong>',
          'Die Qwen-Modellgewichte (Qwen 3, Qwen 3) werden unter Apache 2.0 veröffentlicht. Das bedeutet, Sie können sie herunterladen, prüfen und dauerhaft auf Ihrem eigenen Server betreiben — die Lizenz kann nicht widerrufen werden. Artikel 25 (Datenschutz durch Technikgestaltung) ist erfüllt, weil Sie nachweisen können, dass sensible Daten niemals extern übertragen werden.',
          'Betreiben Sie Qwen lokal via Ollama: <code>ollama run qwen2.5:14b</code> für ein allgemeines 14B-Modell oder <code>ollama run qwen3:8b</code> für die aktuelle Qwen-3-Generation. Beide benötigen 10–12 GB VRAM bei Q4_K_M. Eine Standard-RTX-3080 oder RTX-4070 ist ausreichend.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Lokales Qwen ist DSGVO-konform, weil keine Prompt-Daten Ihre Infrastruktur verlassen und die Artikel-44-Drittlandtransfer-Anforderung vollständig entfällt.' },
          { type: 'plain-terms', text: 'Qwen auf Ihrem eigenen Computer oder Server zu betreiben bedeutet, dass Ihre Daten auf Ihrem Gerät bleiben. Die DSGVO schränkt nur Daten ein, die die EU verlassen — wenn sie Ihr Gebäude nie verlassen, gibt es kein DSGVO-Problem.' },
        ],
      },
      body2: {
        title: 'Qwen-API über Alibaba Cloud — ein anderes Risikoprofil',
        content: [
          '<strong>Die Qwen-API (api.qwen.ai, über Alibaba Cloud) wird in China gehostet. Alle personenbezogenen Daten, die über die API gesendet werden, sind ein Drittlandtransfer nach DSGVO-Artikel 44.</strong> China hat keine EU-Angemessenheitsentscheidung, daher benötigen Sie Standardvertragsklauseln (SCC) und eine Transferfolgenabschätzung (TIA), bevor Sie es für Daten mit Personenbezug verwenden.',
          'Dies ist dieselbe Anforderung, die für OpenAI, Anthropic und Google Cloud gilt. Es ist kein spezifisches Qwen-Problem — es ist ein strukturelles Problem bei jeder Cloud-LLM außerhalb der EU. Das zusätzliche China-spezifische Risiko ist das Datenschutzgesetz für personenbezogene Informationen (PIPL), das auf staatliche Anfrage Offenlegung erzwingen kann.',
          'Wenn Sie die Qwen-API verwenden müssen, tun Sie dies nur für nicht-personenbezogene Daten (z. B. öffentliche Dokumente, Code-Generierung ohne personenbezogene Daten). Für personenbezogene oder geschäftlich vertrauliche Daten verwenden Sie stattdessen die lokale Bereitstellung.',
        ],
        columns: ['Bereitstellung', 'Daten verlassen Server?', 'DSGVO-Artikel 44 gilt?', 'Erforderliche Maßnahme'],
        rows: [
          { 'Bereitstellung': 'Qwen lokal (Ollama)', 'Daten verlassen Server?': 'Nein', 'DSGVO-Artikel 44 gilt?': 'Nein', 'Erforderliche Maßnahme': 'Keine — Architektur ist konform' },
          { 'Bereitstellung': 'Qwen-API (Alibaba Cloud)', 'Daten verlassen Server?': 'Ja', 'DSGVO-Artikel 44 gilt?': 'Ja', 'Erforderliche Maßnahme': 'SCC + TIA für personenbezogene Daten erforderlich' },
          { 'Bereitstellung': 'Claude / OpenAI (EU-Region)', 'Daten verlassen Server?': 'Ja (EU)', 'DSGVO-Artikel 44 gilt?': 'Teilweise', 'Erforderliche Maßnahme': 'SCC noch erforderlich; TIA kann leichter sein' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten: Qwen und DSGVO',
        faqs: [
          {
            q: 'Erfüllt der lokale Betrieb von Qwen DSGVO-Artikel 25?',
            a: 'Ja. Artikel 25 fordert Datenschutz durch Technikgestaltung und datenschutzfreundliche Voreinstellungen — technische Maßnahmen, die unnötige Datenoffenlegung verhindern. Qwen lokal auf einem isolierten Server ohne ausgehende Netzwerkanrufe für Inferenz direkt zu betreiben, erfüllt diese Anforderung. Ergänzen Sie dies mit Festplattenverschlüsselung und Zugriffskontrollen für eine vollständige Artikel-25-Umsetzung.',
          },
          {
            q: 'Ist Alibaba Cloud DSGVO-konform?',
            a: 'Alibaba Cloud bietet DSGVO-konforme Konfigurationen für EU-ansässige Daten (Region Frankfurt). Wenn Sie die EU-Region von Alibaba Cloud mit aktivierten SCC verwenden, ist das DSGVO-Transferrisiko auf dasselbe Niveau wie AWS oder Azure reduziert. Die Qwen-API (api.qwen.ai) ist jedoch ein separates Produkt — überprüfen Sie, welche Infrastrukturregion Ihre Anfragen verarbeitet.',
          },
          {
            q: 'Welches Qwen-Modell ist am besten für DSGVO-sensible Workflows?',
            a: 'Für 12 GB VRAM: Qwen 3 14B bei Q4_K_M (allgemeine Aufgaben) oder Qwen 3 Coder 14B (code-intensive Workflows). Für 6–8 GB VRAM: Qwen 3 8B bei Q4_K_M. Beide laufen vollständig offline via Ollama. Vollständige Einrichtungsschritte finden Sie im <a href="/de/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">vollständigen DSGVO-Qwen-Einrichtungsleitfaden</a>.',
          },
          {
            q: 'Benötige ich einen Auftragsverarbeitungsvertrag mit Ollama?',
            a: 'Nein. Ollama ist eine lokale Laufzeitumgebung — sie hat keine Serverkomponente und verarbeitet keine Daten in Ihrem Auftrag. Es ist kein AVV erforderlich, da Ollama kein Auftragsverarbeiter nach DSGVO-Artikel 28 ist. Das Modell läuft vollständig auf Ihrer Hardware.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Privacy & Security',
    title: 'Qwen est-il conforme au RGPD ?',
    seoTitle: 'Qwen conforme RGPD 2026 ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen en local est conforme au RGPD — pas de transfert, pas de problème Article 44. L\'API Qwen (Alibaba Cloud) exige des CCT comme tout prestataire hors UE. Mai 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      fr: {
        question: 'Qwen est-il conforme au RGPD ?',
        answer: 'Qwen exécuté localement sur votre propre infrastructure est conforme au RGPD, car aucune donnée de prompt ne quitte votre infrastructure et aucun transfert vers un pays tiers (Article 44) n\'a lieu. L\'API Qwen via Alibaba Cloud nécessite des Clauses Contractuelles Types et une Évaluation d\'Impact de Transfert comme tout prestataire cloud non-européen.',
        bullets: [
          'Qwen local : pas de transfert = pas de problème Article 44 RGPD',
          'API Qwen (Alibaba Cloud) : CCT + EIT requis selon les règles post-Schrems II',
          'Recommandé : Qwen 3 14B ou Qwen 3 8B en local via Ollama pour les tâches sensibles',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Le déploiement local de Qwen est conforme au RGPD : les prompts ne quittent jamais votre serveur, donc l\'Article 44 (transferts vers pays tiers) ne s\'applique pas',
          'L\'API Qwen via Alibaba Cloud nécessite des CCT + EIT — la même contrainte qu\'avec l\'API OpenAI ou Anthropic',
          'La licence Apache 2.0 signifie que les poids sont auditables : vous pouvez vérifier le comportement du modèle, satisfaisant l\'Article 25 (protection des données dès la conception)',
          'Pour les tâches sensibles (RH, juridique, médical), Qwen local est la voie la moins risquée face à toute API LLM cloud',
        ],
      },
      body1: {
        title: 'Qwen local est conforme au RGPD — l\'architecture en est la raison',
        content: [
          '<strong>L\'Article 44 du RGPD interdit le transfert de données personnelles vers un pays hors UE sans base légale adéquate. Lorsque vous exécutez Qwen localement, aucun transfert de données n\'a lieu — le modèle traite tout sur votre matériel, dans votre juridiction. C\'est pourquoi le déploiement local est la position RGPD la plus défendable.</strong>',
          'Les poids des modèles Qwen (Qwen 3, Qwen 3) sont publiés sous Apache 2.0. Cela signifie que vous pouvez les télécharger, les inspecter et les exécuter sur votre propre serveur de façon permanente — la licence ne peut pas être révoquée. L\'Article 25 (protection des données dès la conception) est satisfait car vous pouvez démontrer que les données sensibles ne sont jamais transmises en externe.',
          'Exécutez Qwen localement via Ollama : <code>ollama run qwen2.5:14b</code> pour un modèle 14B généraliste, ou <code>ollama run qwen3:8b</code> pour la génération Qwen 3 actuelle. Les deux nécessitent 10–12 Go de VRAM en Q4_K_M. Une RTX 3080 ou RTX 4070 standard suffit.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen local est conforme au RGPD car aucune donnée de prompt ne quitte votre infrastructure, éliminant entièrement l\'exigence de transfert vers pays tiers de l\'Article 44.' },
          { type: 'plain-terms', text: 'Exécuter Qwen sur votre propre ordinateur ou serveur signifie que vos données restent sur votre machine. Le RGPD ne restreint que les données qui quittent l\'UE — si elles ne quittent jamais votre bâtiment, il n\'y a pas de problème RGPD.' },
        ],
      },
      body2: {
        title: 'L\'API Qwen via Alibaba Cloud — un profil de risque différent',
        content: [
          '<strong>L\'API Qwen (api.qwen.ai, via Alibaba Cloud) est hébergée en Chine. Toute donnée personnelle envoyée via l\'API constitue un transfert vers un pays tiers au sens de l\'Article 44 du RGPD.</strong> La Chine ne dispose pas d\'une décision d\'adéquation de l\'UE, vous devez donc mettre en place des Clauses Contractuelles Types (CCT) et une Évaluation d\'Impact de Transfert (EIT) avant de l\'utiliser pour des données personnelles.',
          'C\'est la même exigence que pour OpenAI, Anthropic et Google Cloud. Ce n\'est pas un problème spécifique à Qwen — c\'est une contrainte structurelle pour tout LLM cloud hébergé hors UE. Le risque spécifique à la Chine est la loi PIPL (loi sur la protection des informations personnelles), qui peut contraindre à divulguer des données sur demande gouvernementale.',
          'Si vous devez utiliser l\'API Qwen, réservez-la aux données non personnelles (ex. : documents publics, génération de code sans PII). Pour les données personnelles ou confidentielles, utilisez le déploiement local.',
        ],
        columns: ['Déploiement', 'Données quittent le serveur ?', 'Article 44 RGPD s\'applique ?', 'Action requise'],
        rows: [
          { 'Déploiement': 'Qwen local (Ollama)', 'Données quittent le serveur ?': 'Non', 'Article 44 RGPD s\'applique ?': 'Non', 'Action requise': 'Aucune — architecture conforme' },
          { 'Déploiement': 'API Qwen (Alibaba Cloud)', 'Données quittent le serveur ?': 'Oui', 'Article 44 RGPD s\'applique ?': 'Oui', 'Action requise': 'CCT + EIT requis pour données personnelles' },
          { 'Déploiement': 'Claude / OpenAI (région UE)', 'Données quittent le serveur ?': 'Oui (UE)', 'Article 44 RGPD s\'applique ?': 'Partiel', 'Action requise': 'CCT toujours requis ; EIT peut être allégée' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides : Qwen et RGPD',
        faqs: [
          {
            q: 'L\'exécution locale de Qwen satisfait-elle l\'Article 25 du RGPD ?',
            a: 'Oui. L\'Article 25 exige la protection des données dès la conception et par défaut — des mesures techniques prévenant l\'exposition inutile des données. Exécuter Qwen localement sur un serveur isolé, sans appels réseau sortants pour l\'inférence, satisfait directement cette exigence. Complétez avec un chiffrement de disque et des contrôles d\'accès pour une implémentation complète.',
          },
          {
            q: 'Alibaba Cloud est-il conforme au RGPD ?',
            a: 'Alibaba Cloud propose des configurations conformes au RGPD pour les données résidant dans l\'UE (région Francfort). Si vous utilisez la région UE d\'Alibaba Cloud avec des CCT en place, le risque de transfert RGPD est réduit au même niveau qu\'AWS ou Azure. Cependant, l\'API Qwen (api.qwen.ai) est un produit distinct — vérifiez quelle région d\'infrastructure traite vos requêtes.',
          },
          {
            q: 'Quel modèle Qwen est le mieux adapté aux flux de travail sensibles sous RGPD ?',
            a: 'Pour 12 Go de VRAM : Qwen 3 14B en Q4_K_M (tâches générales) ou Qwen 3 Coder 14B (flux de travail code-intensifs). Pour 6–8 Go de VRAM : Qwen 3 8B en Q4_K_M. Les deux fonctionnent entièrement hors ligne via Ollama. Consultez le <a href="/fr/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">guide complet de configuration Qwen pour le RGPD</a>.',
          },
          {
            q: 'Ai-je besoin d\'un accord de traitement des données avec Ollama ?',
            a: 'Non. Ollama est un runtime local — il n\'a pas de composant serveur et ne traite aucune donnée en votre nom. Aucun DPA n\'est requis car Ollama n\'est pas un sous-traitant au sens de l\'Article 28 du RGPD. Le modèle s\'exécute entièrement sur votre matériel.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Privacy & Security',
    title: 'QwenはGDPR準拠ですか？',
    seoTitle: 'QwenはGDPR準拠？2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'ローカルQwenはGDPR準拠——データ転送なし、第44条問題なし。Qwen API（Alibaba Cloud）は他の非EU提供者と同様SCCが必要。2026年5月更新。',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      ja: {
        question: 'QwenはGDPR準拠ですか？',
        answer: '自社ハードウェアでローカル実行するQwenはGDPR準拠です。プロンプトデータがインフラ外に出ず、第44条の第三国転送も発生しません。Alibaba Cloud経由のQwen APIはEU域外クラウドプロバイダーと同様に標準契約条項と転送影響評価が必要です。',
        bullets: [
          'ローカルQwen：データ転送なし = GDPR第44条問題なし',
          'Qwen API（Alibaba Cloud）：Post-Schrems II規則でSCC + TIA必要',
          '推奨：Ollama経由Qwen 3 14BまたはQwen 3 8Bをローカル実行（データ機密タスク）',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ローカルQwenはGDPR準拠：プロンプトはサーバーを出ないため第44条（第三国転送）は適用されない',
          'Alibaba Cloud経由Qwen APIは標準契約条項 + 転送影響評価が必要——OpenAIやAnthropicのAPIと同じ要件',
          'Apache 2.0ライセンスでモデル重みが監査可能：第25条（プライバシーバイデザイン）を満たす実証ができる',
          'HR・法務・医療などデータ機密タスクには、ローカルQwenがあらゆるクラウドLLM APIより低リスク',
        ],
      },
      body1: {
        title: 'ローカルQwenはGDPR準拠——アーキテクチャがその理由',
        content: [
          '<strong>GDPR第44条はEU外の国への個人データ転送を適切な法的根拠なしに禁じています。Qwenをローカル実行する場合、データ転送は発生しません——モデルはお客様の管轄内のハードウェアで全処理を行います。これがローカル展開が最も防御しやすいGDPRポジションである理由です。</strong>',
          'Qwenモデル重み（Qwen 3、Qwen 3）はApache 2.0で公開されています。ダウンロード、検査、自社サーバーでの永続的な運用が可能で、ライセンスは取り消せません。機密データが外部転送されないことを証明できるため、第25条（プライバシーバイデザイン）を満たします。',
          'OllamaでQwenをローカル実行：汎用14Bモデルは<code>ollama run qwen2.5:14b</code>、最新Qwen 3世代は<code>ollama run qwen3:8b</code>。Q4_K_Mでどちらも10〜12 GB VRAMが必要。標準的なRTX 3080またはRTX 4070で十分です。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'ローカルQwenはGDPR準拠です。プロンプトデータがインフラを離れないため、第44条の第三国転送要件が完全に排除されます。' },
          { type: 'plain-terms', text: '自分のコンピューターやサーバーでQwenを実行するとデータは自分のマシン上に留まります。GDPRはEUを出るデータのみを制限します——建物を出ることがなければGDPLの問題は生じません。' },
        ],
      },
      body2: {
        title: 'Alibaba Cloud経由Qwen API——異なるリスクプロファイル',
        content: [
          '<strong>Qwen API（api.qwen.ai、Alibaba Cloud経由）は中国でホストされています。APIを通じて送信される個人データはGDPR第44条の第三国転送です。</strong>中国はEUの十分性認定を取得しておらず、個人データを含む利用前に標準契約条款（SCC）と転送影響評価（TIA）が必要です。',
          'これはOpenAI、Anthropic、Google Cloudにも適用される同じ要件です。Qwen固有の問題ではなく、EU外でホストされるすべてのクラウドLLMの構造的な課題です。中国固有の追加リスクは個人情報保護法（PIPL）で、政府要求によるデータ開示を強制できます。これはTIA評価において中国管轄をUS管轄より高リスクと見なす理由となりえます。',
          'Qwen APIを使用しなければならない場合は、非個人データ（公開文書、PIIを含まないコード生成など）のみに限定してください。個人データや業務機密データにはローカル展開を使用してください。',
        ],
        columns: ['展開方法', 'データはサーバーを出るか', 'GDPR第44条は適用か', '必要なアクション'],
        rows: [
          { '展開方法': 'Qwenローカル（Ollama）', 'データはサーバーを出るか': 'いいえ', 'GDPR第44条は適用か': 'いいえ', '必要なアクション': '不要——アーキテクチャが準拠' },
          { '展開方法': 'Qwen API（Alibaba Cloud）', 'データはサーバーを出るか': 'はい', 'GDPR第44条は適用か': 'はい', '必要なアクション': '個人データにはSCC + TIAが必要' },
          { '展開方法': 'Claude / OpenAI（EU地域）', 'データはサーバーを出るか': 'はい（EU内）', 'GDPR第44条は適用か': '一部', '必要なアクション': 'SCC依然必要；TIAは軽微でも可' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'QwenとGDPRに関するよくある質問',
        faqs: [
          {
            q: 'QwenをローカルでGDPR第25条を満たせますか？',
            a: 'はい。第25条はプライバシーバイデザインとデフォルト——不必要なデータ露出を防ぐ技術的対策を要求しています。推論のための外部ネットワーク呼び出しなしに分離サーバーでQwenをローカル実行することで、この要件を直接満たします。完全な第25条実装のためにディスク暗号化とアクセス制御を組み合わせてください。',
          },
          {
            q: 'Alibaba CloudはGDPR準拠ですか？',
            a: 'Alibaba CloudはEU居住データのGDPR準拠構成を提供しています（フランクフルトリージョン）。SCCを設定してAlibaba CloudのEUリージョンを使用する場合、GDPR転送リスクはAWSやAzureと同レベルに低減されます。ただしQwen API（api.qwen.ai）は別製品です——リクエストを処理するインフラリージョンを確認してください。',
          },
          {
            q: 'GDPRに配慮したワークフローに最適なQwenモデルは？',
            a: '12 GB VRAM：Qwen 3 14B（Q4_K_M、汎用タスク）またはQwen 3 Coder 14B（コード重視）。6〜8 GB VRAM：Qwen 3 8B（Q4_K_M）。どちらもOllama経由で完全オフライン動作。詳細なセットアップ手順は<a href="/ja/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">Qwen GDPRセットアップガイド</a>を参照してください。',
          },
          {
            q: 'OllamaとのデータProcessing Agreementは必要ですか？',
            a: 'いいえ。Ollamaはローカルランタイムで、サーバーコンポーネントはなくお客様に代わってデータを処理しません。OllamaはGDPR第28条の意味における処理者ではないためDPAは不要です。モデルはお客様のハードウェア上でのみ実行されます。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Privacy & Security',
    title: 'Qwen符合GDPR吗？',
    seoTitle: 'Qwen符合GDPR吗？2026 | Prompt Bites | PromptQuorum',
    metaDescription: '本地Qwen符合GDPR——无数据传输，无第44条问题。Qwen API（阿里云）与其他非欧盟提供商一样需要SCCs。2026年5月更新。',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      zh: {
        question: 'Qwen符合GDPR吗？',
        answer: '在自有硬件上本地运行的Qwen符合GDPR，因为提示词数据不会离开您的基础设施，也不会发生第44条规定的第三国数据传输。通过阿里云的Qwen API与其他非欧盟云提供商一样，需要标准合同条款和传输影响评估。',
        bullets: [
          '本地Qwen：无数据传输 = 无GDPR第44条问题',
          'Qwen API（阿里云）：Post-Schrems II规则下需要SCCs + TIA',
          '推荐：Ollama本地运行Qwen 3 14B或Qwen 3 8B处理敏感数据任务',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '本地Qwen部署符合GDPR：提示词从不离开您的服务器，因此第44条（第三国转移）不适用',
          'Qwen API（阿里云）需要标准合同条款 + 传输影响评估——与OpenAI或Anthropic API相同的要求',
          'Apache 2.0许可证意味着权重可审计：可验证模型行为，满足第25条（隐私设计）要求',
          '对于敏感数据任务（HR、法务、医疗），本地Qwen是比任何云LLM API更低风险的选择',
        ],
      },
      body1: {
        title: '本地Qwen符合GDPR——原因在于架构',
        content: [
          '<strong>GDPR第44条禁止在没有充分法律依据的情况下将个人数据转移到欧盟以外的国家。在本地运行Qwen时，不会发生任何数据传输——模型在您的硬件上、在您的管辖范围内处理所有内容。这就是为什么本地部署是最站得住脚的GDPR合规立场。</strong>',
          'Qwen模型权重（Qwen 3、Qwen 3）以Apache 2.0发布。这意味着您可以下载、检查并在自己的服务器上永久运行它们——许可证不可撤销。由于您可以证明敏感数据从未外部传输，第25条（隐私设计）得以满足。',
          '通过Ollama本地运行Qwen：通用14B模型使用<code>ollama run qwen2.5:14b</code>，当前Qwen 3代使用<code>ollama run qwen3:8b</code>。两者在Q4_K_M下均需10-12 GB VRAM。标准RTX 3080或RTX 4070即可满足要求。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '本地Qwen符合GDPR，因为提示词数据不会离开您的基础设施，完全消除了第44条的第三国传输要求。' },
          { type: 'plain-terms', text: '在自己的电脑或服务器上运行Qwen意味着您的数据留在您的设备上。GDPR只限制离开欧盟的数据——如果数据从不离开您的建筑，就没有GDPR问题。' },
        ],
      },
      body2: {
        title: '通过阿里云的Qwen API——不同的风险状况',
        content: [
          '<strong>Qwen API（api.qwen.ai，通过阿里云）托管在中国。通过该API发送的任何个人数据都是GDPR第44条规定的第三国转移。</strong>中国没有欧盟充分性认定，因此在将其用于包含个人信息的数据之前，您需要标准合同条款（SCCs）和传输影响评估（TIA）。',
          '这与OpenAI、Anthropic和Google Cloud的要求相同。这不是Qwen特有的问题——而是欧盟以外托管的任何云LLM的结构性问题。中国特有的额外风险是个人信息保护法（PIPL），可在政府要求下强制披露数据。这在TIA评估中意味着中国管辖可能被视为比美国管辖风险更高。',
          '如果必须使用Qwen API，请仅用于非个人数据（如公共文件、不含PII的代码生成）。对于个人或商业机密数据，请改用本地部署。',
        ],
        columns: ['部署方式', '数据会离开服务器吗？', 'GDPR第44条适用吗？', '所需操作'],
        rows: [
          { '部署方式': 'Qwen本地（Ollama）', '数据会离开服务器吗？': '否', 'GDPR第44条适用吗？': '否', '所需操作': '无——架构已合规' },
          { '部署方式': 'Qwen API（阿里云）', '数据会离开服务器吗？': '是', 'GDPR第44条适用吗？': '是', '所需操作': '个人数据需要SCCs + TIA' },
          { '部署方式': 'Claude / OpenAI（欧盟区域）', '数据会离开服务器吗？': '是（欧盟内）', 'GDPR第44条适用吗？': '部分', '所需操作': 'SCCs仍需要；TIA可以更轻松' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Qwen与GDPR快速解答',
        faqs: [
          {
            q: '本地运行Qwen能满足GDPR第25条吗？',
            a: '可以。第25条要求隐私设计和默认保护——防止不必要数据暴露的技术措施。在没有外部网络推理调用的隔离服务器上本地运行Qwen，直接满足了这一要求。结合磁盘加密和访问控制以实现完整的第25条合规。',
          },
          {
            q: '阿里云是否符合GDPR？',
            a: '阿里云为欧盟数据提供GDPR合规配置（法兰克福区域）。如果您使用阿里云欧盟区域并配置了SCCs，GDPR传输风险降低至与AWS或Azure相同水平。但Qwen API（api.qwen.ai）是独立产品——在得出结论之前请验证处理您请求的基础设施区域。',
          },
          {
            q: '哪种Qwen模型最适合GDPR敏感工作流程？',
            a: '12 GB VRAM：Qwen 3 14B（Q4_K_M，通用任务）或Qwen 3 Coder 14B（代码密集型工作流）。6-8 GB VRAM：Qwen 3 8B（Q4_K_M）。两者均通过Ollama完全离线运行。完整设置步骤请参阅<a href="/zh/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">Qwen GDPR完整设置指南</a>。',
          },
          {
            q: '我需要与Ollama签署数据处理协议吗？',
            a: '不需要。Ollama是本地运行时——它没有服务器组件，不代表您处理任何数据。由于Ollama不是GDPR第28条意义上的处理者，因此不需要DPA。模型完全在您的硬件上运行。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Privacy & Security',
    title: 'O Qwen é compatível com o RGPD?',
    seoTitle: 'O Qwen é compatível com o RGPD? 2026 | PromptQuorum',
    metaDescription: 'O Qwen executado localmente cumpre o RGPD: sem transferência de dados, sem problema do Artigo 44. A API do Qwen (Alibaba Cloud) requer CCT como qualquer fornecedor não europeu. 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      pt: {
        question: 'O Qwen é compatível com o RGPD?',
        answer: 'O Qwen executado localmente no seu próprio hardware é compatível com o RGPD, porque nenhum dado de prompt sai da sua infraestrutura e nenhuma transferência para país terceiro segundo o Artigo 44 ocorre. A API do Qwen via Alibaba Cloud é diferente: requer Cláusulas Contratuais Padrão e uma Avaliação de Impacto de Transferência, como qualquer fornecedor cloud não europeu.',
        bullets: [
          'Qwen local: sem transferência de dados = sem problema do Artigo 44 do RGPD',
          'API do Qwen (Alibaba Cloud): requer CCT + AIT conforme as regras pós-Schrems II',
          'Recomendado: Qwen 3 14B ou Qwen 3 8B localmente via Ollama para tarefas com dados sensíveis',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A implantação local do Qwen é compatível com o RGPD: os prompts nunca saem do seu servidor, portanto o Artigo 44 (transferências para países terceiros) não se aplica',
          'A API do Qwen via Alibaba Cloud requer Cláusulas Contratuais Padrão + Avaliação de Impacto de Transferência — o mesmo requisito que a API OpenAI ou Anthropic',
          'A licença Apache 2.0 significa que os pesos são auditáveis: você pode verificar o que o modelo faz, satisfazendo o Artigo 25 (proteção de dados por concepção)',
          'Para tarefas com dados sensíveis (RH, jurídico, médico), o Qwen local é o caminho de menor risco em relação a qualquer API de LLM em nuvem',
        ],
      },
      body1: {
        title: 'O Qwen local é compatível com o RGPD — a arquitetura é a razão',
        content: [
          '<strong>O Artigo 44 do RGPD proíbe a transferência de dados pessoais para um país fora da UE sem base jurídica adequada. Quando você executa o Qwen localmente, nenhuma transferência de dados ocorre — o modelo processa tudo no seu hardware, dentro da sua jurisdição. É por isso que a implantação local é a posição mais defensável em relação ao RGPD.</strong>',
          'Os pesos do modelo Qwen (Qwen 3, Qwen 3) são lançados sob Apache 2.0. Isso significa que você pode baixá-los, inspecioná-los e executá-los no seu próprio servidor de forma permanente — a licença não pode ser revogada. O Artigo 25 (proteção de dados por concepção) é satisfeito porque você pode demonstrar que os dados sensíveis nunca são transmitidos externamente.',
          'Execute o Qwen localmente via Ollama: <code>ollama run qwen2.5:14b</code> para um modelo 14B de propósito geral, ou <code>ollama run qwen3:8b</code> para a geração atual do Qwen 3. Ambos precisam de 10–12 GB de VRAM em Q4_K_M. Uma RTX 3080 ou RTX 4070 padrão é suficiente.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Qwen local é compatível com o RGPD porque nenhum dado de prompt sai da sua infraestrutura, eliminando completamente o requisito de transferência para país terceiro do Artigo 44.' },
          { type: 'plain-terms', text: 'Executar o Qwen no seu próprio computador ou servidor significa que seus dados ficam na sua máquina. O RGPD só restringe dados que saem da UE — se nunca saírem do seu edifício, não há problema com o RGPD.' },
        ],
      },
      body2: {
        title: 'A API do Qwen via Alibaba Cloud — um perfil de risco diferente',
        content: [
          '<strong>A API do Qwen (api.qwen.ai, via Alibaba Cloud) está hospedada na China. Qualquer dado pessoal enviado através da API constitui uma transferência para país terceiro segundo o Artigo 44 do RGPD.</strong> A China não tem uma decisão de adequação da UE, portanto você precisa de Cláusulas Contratuais Padrão (CCT) e de uma Avaliação de Impacto de Transferência (AIT) antes de usá-la para dados que contenham informações pessoais.',
          'Este é o mesmo requisito que se aplica a OpenAI, Anthropic e Google Cloud. Não é um problema exclusivo do Qwen — é uma questão estrutural de qualquer LLM em nuvem hospedado fora da UE. O risco adicional específico da China é a Lei de Proteção de Informações Pessoais (PIPL), que pode obrigar a divulgação de dados mediante solicitações governamentais. Isso importa para a AIT: os reguladores europeus podem considerar a jurisdição chinesa de maior risco que a americana ao avaliar a adequação da transferência.',
          'Se você precisar usar a API do Qwen, use-a apenas para dados não pessoais (p. ex., documentos públicos, geração de código sem PII). Para dados pessoais ou confidenciais do negócio, use a implantação local.',
        ],
        columns: ['Implantação', 'Dados saem do servidor?', 'RGPD Artigo 44 se aplica?', 'Ação requerida'],
        rows: [
          { 'Implantação': 'Qwen local (Ollama)', 'Dados saem do servidor?': 'Não', 'RGPD Artigo 44 se aplica?': 'Não', 'Ação requerida': 'Nenhuma — a arquitetura é conforme' },
          { 'Implantação': 'API do Qwen (Alibaba Cloud)', 'Dados saem do servidor?': 'Sim', 'RGPD Artigo 44 se aplica?': 'Sim', 'Ação requerida': 'CCT + AIT requeridas para dados pessoais' },
          { 'Implantação': 'Claude / OpenAI (região UE)', 'Dados saem do servidor?': 'Sim (UE)', 'RGPD Artigo 44 se aplica?': 'Parcial', 'Ação requerida': 'CCT ainda requeridas; AIT pode ser mais leve' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas: Qwen e o RGPD',
        faqs: [
          {
            q: 'Executar o Qwen localmente satisfaz o Artigo 25 do RGPD?',
            a: 'Sim. O Artigo 25 exige proteção de dados por concepção e por padrão — medidas técnicas que impedem a exposição desnecessária de dados. Executar o Qwen localmente num servidor isolado, sem chamadas de rede externas para a inferência, satisfaz diretamente esse requisito. Combine com criptografia de disco (dm-crypt ou FileVault) e controles de acesso para uma implementação completa do Artigo 25.',
          },
          {
            q: 'A Alibaba Cloud é compatível com o RGPD?',
            a: 'A Alibaba Cloud oferece configurações compatíveis com o RGPD para dados residentes na UE (região de Frankfurt). Se você usar a região UE da Alibaba Cloud com CCT em vigor, o risco de transferência RGPD é reduzido ao mesmo nível que AWS ou Azure. No entanto, a API do Qwen (api.qwen.ai) é um produto separado — verifique qual região de infraestrutura processa suas solicitações antes de tirar essa conclusão.',
          },
          {
            q: 'Qual modelo Qwen é mais adequado para fluxos de trabalho sensíveis sob o RGPD?',
            a: 'Para 12 GB de VRAM: Qwen 3 14B em Q4_K_M (tarefas gerais) ou Qwen 3 Coder 14B (fluxos de trabalho intensivos em código). Para 6–8 GB de VRAM: Qwen 3 8B em Q4_K_M. Ambos funcionam completamente offline via Ollama. Consulte o <a href="/pt/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">guia completo de configuração do Qwen para o RGPD</a> para os passos de instalação com Ollama.',
          },
          {
            q: 'Preciso de um Acordo de Processamento de Dados com o Ollama?',
            a: 'Não. O Ollama é um runtime local — não tem componente de servidor e não processa nenhum dado em seu nome. Não é necessário um DPA porque o Ollama não é um processador de dados segundo o Artigo 28 do RGPD. O modelo é executado inteiramente no seu hardware.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Privacy & Security',
    title: '¿Es Qwen compatible con el RGPD?',
    seoTitle: '¿Es Qwen compatible con el RGPD? 2026 | PromptQuorum',
    metaDescription: 'Qwen en local cumple el RGPD: sin transferencia de datos ni problema del Artículo 44. La API de Qwen (Alibaba Cloud) requiere CCT como toda no europea. 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      es: {
        question: '¿Es Qwen compatible con el RGPD?',
        answer: 'Qwen ejecutado localmente en tu propio hardware es compatible con el RGPD, porque ningún dato de prompt abandona tu infraestructura y no ocurre ninguna transferencia a terceros países según el Artículo 44. La API de Qwen a través de Alibaba Cloud es diferente: requiere Cláusulas Contractuales Tipo y una Evaluación de Impacto de Transferencia, como cualquier proveedor cloud no europeo.',
        bullets: [
          'Qwen local: sin transferencia de datos = sin problema del Artículo 44 del RGPD',
          'API de Qwen (Alibaba Cloud): requiere CCT + EIT según las reglas post-Schrems II',
          'Recomendado: Qwen 3 14B o Qwen 3 8B localmente via Ollama para tareas con datos sensibles',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'El despliegue local de Qwen es compatible con el RGPD: los prompts nunca salen de tu servidor, por lo que el Artículo 44 (transferencias a terceros países) no aplica',
          'La API de Qwen via Alibaba Cloud requiere Cláusulas Contractuales Tipo + Evaluación de Impacto de Transferencia, el mismo requisito que la API de OpenAI o Anthropic',
          'La licencia Apache 2.0 permite auditar los pesos: puedes verificar qué hace el modelo, cumpliendo el Artículo 25 (privacidad desde el diseño)',
          'Para tareas con datos sensibles (RRHH, legal, médico), Qwen local es el camino de menor riesgo frente a cualquier API de LLM en la nube',
        ],
      },
      body1: {
        title: 'Qwen local es compatible con el RGPD — la arquitectura es la razón',
        content: [
          '<strong>El Artículo 44 del RGPD prohíbe transferir datos personales a un país fuera de la UE sin una base legal adecuada. Cuando ejecutas Qwen localmente, no ocurre ninguna transferencia de datos: el modelo procesa todo en tu hardware, dentro de tu jurisdicción. Por eso el despliegue local es la posición más defendible frente al RGPD.</strong>',
          'Los pesos del modelo Qwen (Qwen 3, Qwen 3) se publican bajo Apache 2.0. Esto significa que puedes descargarlos, inspeccionarlos y ejecutarlos en tu propio servidor de forma permanente; la licencia no puede revocarse. El Artículo 25 (privacidad desde el diseño) queda satisfecho porque puedes demostrar que los datos sensibles nunca se transmiten externamente.',
          'Ejecuta Qwen localmente via Ollama: <code>ollama run qwen2.5:14b</code> para un modelo 14B de propósito general, o <code>ollama run qwen3:8b</code> para la generación actual de Qwen 3. Ambos necesitan 10–12 GB de VRAM en Q4_K_M. Una RTX 3080 o RTX 4070 estándar es suficiente.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen local es compatible con el RGPD porque ningún dato de prompt abandona tu infraestructura, eliminando por completo el requisito de transferencia a terceros países del Artículo 44.' },
          { type: 'plain-terms', text: 'Ejecutar Qwen en tu propio equipo o servidor significa que tus datos permanecen en tu máquina. El RGPD solo restringe los datos que salen de la UE; si nunca abandonan tu edificio, no hay ningún problema con el RGPD.' },
        ],
      },
      body2: {
        title: 'La API de Qwen via Alibaba Cloud — un perfil de riesgo diferente',
        content: [
          '<strong>La API de Qwen (api.qwen.ai, via Alibaba Cloud) está alojada en China. Cualquier dato personal enviado a través de la API constituye una transferencia a un tercer país según el Artículo 44 del RGPD.</strong> China no cuenta con una decisión de adecuación de la UE, por lo que necesitas Cláusulas Contractuales Tipo (CCT) y una Evaluación de Impacto de Transferencia (EIT) antes de utilizarla para datos que contengan información personal.',
          'Este es el mismo requisito que se aplica a OpenAI, Anthropic y Google Cloud. No es un problema exclusivo de Qwen: es una cuestión estructural de cualquier LLM en la nube alojado fuera de la UE. El riesgo adicional específico de China es la Ley de Protección de la Información Personal (PIPL), que puede obligar a revelar datos ante solicitudes gubernamentales. Esto importa para la EIT: los reguladores europeos pueden considerar la jurisdicción china de mayor riesgo que la estadounidense al evaluar la adecuación de la transferencia.',
          'Si debes usar la API de Qwen, úsala solo para datos no personales (p. ej., documentos públicos, generación de código sin PII). Para datos personales o confidenciales de negocio, utiliza en cambio el despliegue local.',
        ],
        columns: ['Despliegue', '¿Datos salen del servidor?', '¿RGPD Artículo 44 aplica?', 'Acción requerida'],
        rows: [
          { 'Despliegue': 'Qwen local (Ollama)', '¿Datos salen del servidor?': 'No', '¿RGPD Artículo 44 aplica?': 'No', 'Acción requerida': 'Ninguna — la arquitectura es conforme' },
          { 'Despliegue': 'API de Qwen (Alibaba Cloud)', '¿Datos salen del servidor?': 'Sí', '¿RGPD Artículo 44 aplica?': 'Sí', 'Acción requerida': 'CCT + EIT requeridas para datos personales' },
          { 'Despliegue': 'Claude / OpenAI (región UE)', '¿Datos salen del servidor?': 'Sí (UE)', '¿RGPD Artículo 44 aplica?': 'Parcial', 'Acción requerida': 'CCT aún requeridas; EIT puede ser más ligera' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas: Qwen y el RGPD',
        faqs: [
          {
            q: '¿Ejecutar Qwen localmente cumple el Artículo 25 del RGPD?',
            a: 'Sí. El Artículo 25 exige privacidad desde el diseño y por defecto: medidas técnicas que impidan la exposición innecesaria de datos. Ejecutar Qwen localmente en un servidor aislado, sin llamadas de red externas para la inferencia, cumple directamente este requisito. Combínalo con cifrado de disco (dm-crypt o FileVault) y controles de acceso para una implementación completa del Artículo 25.',
          },
          {
            q: '¿Es Alibaba Cloud compatible con el RGPD?',
            a: 'Alibaba Cloud ofrece configuraciones compatibles con el RGPD para datos residentes en la UE (región de Frankfurt). Si usas la región UE de Alibaba Cloud con CCT en vigor, el riesgo de transferencia RGPD se reduce al mismo nivel que AWS o Azure. Sin embargo, la API de Qwen (api.qwen.ai) es un producto aparte: verifica qué región de infraestructura procesa tus solicitudes antes de llegar a esta conclusión.',
          },
          {
            q: '¿Qué modelo de Qwen es el más adecuado para flujos de trabajo sensibles bajo el RGPD?',
            a: 'Para 12 GB de VRAM: Qwen 3 14B en Q4_K_M (tareas generales) o Qwen 3 Coder 14B (flujos de trabajo intensivos en código). Para 6–8 GB de VRAM: Qwen 3 8B en Q4_K_M. Ambos funcionan completamente offline via Ollama. Consulta la <a href="/es/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">guía completa de configuración de Qwen para el RGPD</a> para los pasos de instalación con Ollama.',
          },
          {
            q: '¿Necesito un Acuerdo de Procesamiento de Datos con Ollama?',
            a: 'No. Ollama es un runtime local: no tiene componente de servidor y no procesa ningún dato en tu nombre. No se requiere un DPA porque Ollama no es un encargado del tratamiento según el Artículo 28 del RGPD. El modelo se ejecuta íntegramente en tu hardware.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Privacy & Security',
    title: 'هل Qwen متوافق مع اللائحة الأوروبية لحماية البيانات GDPR؟',
    seoTitle: 'هل Qwen متوافق مع GDPR؟ 2026 | PromptQuorum',
    metaDescription: 'Qwen المحلي متوافق مع GDPR: لا نقل بيانات ولا مشكلة المادة 44. واجهة Qwen البرمجية (Alibaba Cloud) تتطلب SCCs كسائر المزودين غير الأوروبيين. 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      ar: {
        question: 'هل Qwen متوافق مع اللائحة الأوروبية لحماية البيانات GDPR؟',
        answer: 'تشغيل Qwen محلياً على أجهزتك الخاصة متوافق مع GDPR لأنه لا تغادر أي بيانات من المطالبات بنيتك التحتية ولا يحدث أي نقل لجهة خارجية وفق المادة 44. أما واجهة Qwen البرمجية عبر Alibaba Cloud فهي مختلفة: تتطلب بنوداً تعاقدية قياسية وتقييم أثر النقل، كأي مزود سحابي غير أوروبي.',
        bullets: [
          'Qwen المحلي: لا نقل بيانات = لا مشكلة المادة 44 من GDPR',
          'واجهة Qwen البرمجية (Alibaba Cloud): تتطلب SCCs + TIA وفق قواعد ما بعد Schrems II',
          'موصى به: Qwen 3 14B أو Qwen 3 8B محلياً عبر Ollama للمهام ذات البيانات الحساسة',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'النشر المحلي لـ Qwen متوافق مع GDPR: المطالبات لا تغادر خادمك أبداً، لذا المادة 44 (النقل لجهات خارجية) لا تنطبق',
          'واجهة Qwen البرمجية عبر Alibaba Cloud تتطلب بنوداً تعاقدية قياسية + تقييم أثر النقل، وهو نفس المتطلب لواجهة OpenAI أو Anthropic',
          'ترخيص Apache 2.0 يسمح بتدقيق الأوزان: يمكنك التحقق مما يفعله النموذج، مما يلبي المادة 25 (الخصوصية بالتصميم)',
          'للمهام ذات البيانات الحساسة (الموارد البشرية، القانون، الطب)، Qwen المحلي هو المسار الأقل خطورة مقارنة بأي واجهة برمجية لنموذج لغوي سحابي',
        ],
      },
      body1: {
        title: 'Qwen المحلي متوافق مع GDPR — البنية المعمارية هي السبب',
        content: [
          '<strong>المادة 44 من GDPR تحظر نقل البيانات الشخصية إلى بلد خارج الاتحاد الأوروبي دون أساس قانوني مناسب. عند تشغيل Qwen محلياً، لا يحدث أي نقل بيانات: النموذج يعالج كل شيء على أجهزتك، داخل اختصاصك القانوني. ولهذا النشر المحلي هو الموقف الأكثر دفاعاً أمام GDPR.</strong>',
          'أوزان نموذج Qwen (Qwen 3، Qwen 2.5) تُطرح بموجب Apache 2.0. هذا يعني أنك تستطيع تنزيلها وفحصها وتشغيلها على خادمك الخاص بصفة دائمة؛ الترخيص لا يمكن سحبه. المادة 25 (الخصوصية بالتصميم) مُستوفاة لأنك تستطيع إثبات أن البيانات الحساسة لا تُرسل خارجياً أبداً.',
          'شغّل Qwen محلياً عبر Ollama: <code>ollama run qwen2.5:14b</code> لنموذج 14B متعدد الأغراض، أو <code>ollama run qwen3:8b</code> للجيل الحالي من Qwen 3. كلاهما يحتاج 10–12 GB VRAM عند Q4_K_M. RTX 3080 أو RTX 4070 قياسية كافية.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen المحلي متوافق مع GDPR لأن بيانات المطالبات لا تغادر بنيتك التحتية، مما يُزيل كلياً متطلب نقل الجهات الخارجية وفق المادة 44.' },
          { type: 'plain-terms', text: 'تشغيل Qwen على جهازك الخاص أو خادمك يعني أن بياناتك تبقى على جهازك. GDPR يقيّد البيانات التي تخرج من الاتحاد الأوروبي؛ إذا لم تغادر مبناك، فلا توجد مشكلة مع GDPR.' },
        ],
      },
      body2: {
        title: 'واجهة Qwen البرمجية عبر Alibaba Cloud — ملف مخاطر مختلف',
        content: [
          '<strong>واجهة Qwen البرمجية (api.qwen.ai، عبر Alibaba Cloud) مستضافة في الصين. أي بيانات شخصية تُرسل عبر الواجهة البرمجية تُشكّل نقلاً لجهة خارجية وفق المادة 44 من GDPR.</strong> الصين لا تملك قرار كفاية أوروبي، لذا تحتاج إلى بنود تعاقدية قياسية (SCCs) وتقييم أثر النقل (TIA) قبل استخدامها للبيانات التي تحتوي على معلومات شخصية.',
          'هذا هو نفس المتطلب المطبّق على OpenAI وAnthropic وGoogle Cloud. ليست مشكلة حصرية لـ Qwen: إنها مسألة هيكلية لأي نموذج لغوي سحابي مستضاف خارج الاتحاد الأوروبي. الخطر الإضافي الخاص بالصين هو قانون حماية المعلومات الشخصية (PIPL) الذي يمكنه إجبار الكشف عن البيانات عند طلبات حكومية.',
          'إذا كان يجب عليك استخدام واجهة Qwen البرمجية، استخدمها فقط للبيانات غير الشخصية (مثل المستندات العامة، توليد الكود بدون PII). للبيانات الشخصية أو السرية التجارية، استخدم النشر المحلي بدلاً من ذلك.',
        ],
        columns: ['النشر', 'هل تغادر البيانات الخادم؟', 'هل تنطبق المادة 44 من GDPR؟', 'الإجراء المطلوب'],
        rows: [
          { 'النشر': 'Qwen محلي (Ollama)', 'هل تغادر البيانات الخادم؟': 'لا', 'هل تنطبق المادة 44 من GDPR؟': 'لا', 'الإجراء المطلوب': 'لا شيء — البنية المعمارية متوافقة' },
          { 'النشر': 'واجهة Qwen البرمجية (Alibaba Cloud)', 'هل تغادر البيانات الخادم؟': 'نعم', 'هل تنطبق المادة 44 من GDPR؟': 'نعم', 'الإجراء المطلوب': 'SCCs + TIA مطلوبة للبيانات الشخصية' },
          { 'النشر': 'Claude / OpenAI (منطقة الاتحاد الأوروبي)', 'هل تغادر البيانات الخادم؟': 'نعم (الاتحاد الأوروبي)', 'هل تنطبق المادة 44 من GDPR؟': 'جزئياً', 'الإجراء المطلوب': 'SCCs لا تزال مطلوبة؛ TIA قد تكون أخف' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة: Qwen وGDPR',
        faqs: [
          {
            q: 'هل تشغيل Qwen محلياً يستوفي المادة 25 من GDPR؟',
            a: 'نعم. المادة 25 تتطلب الخصوصية بالتصميم والافتراض: تدابير تقنية تمنع التعرض غير الضروري للبيانات. تشغيل Qwen محلياً على خادم معزول دون استدعاءات شبكة خارجية للاستدلال يلبي هذا المتطلب مباشرةً. أضف تشفير القرص وضوابط الوصول لتطبيق كامل للمادة 25.',
          },
          {
            q: 'هل Alibaba Cloud متوافق مع GDPR؟',
            a: 'Alibaba Cloud يوفر إعدادات متوافقة مع GDPR للبيانات المقيمة في الاتحاد الأوروبي (منطقة فرانكفورت). إذا استخدمت منطقة الاتحاد الأوروبي من Alibaba Cloud مع SCCs سارية، ينخفض خطر نقل GDPR إلى نفس مستوى AWS أو Azure. غير أن واجهة Qwen البرمجية (api.qwen.ai) منتج منفصل: تحقق من منطقة البنية التحتية التي تعالج طلباتك قبل التوصل إلى هذا الاستنتاج.',
          },
          {
            q: 'ما هو نموذج Qwen الأنسب لسير العمل الحساسة وفق GDPR؟',
            a: 'لـ 12 GB VRAM: Qwen 3 14B بتكميم Q4_K_M (المهام العامة) أو Qwen 3 Coder 14B (سير عمل البرمجة المكثفة). لـ 6–8 GB VRAM: Qwen 3 8B بتكميم Q4_K_M. كلاهما يعمل بالكامل دون اتصال عبر Ollama. راجع <a href="/ar/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">الدليل الكامل لإعداد Qwen لـ GDPR</a> لخطوات التثبيت مع Ollama.',
          },
          {
            q: 'هل أحتاج إلى اتفاقية معالجة بيانات مع Ollama؟',
            a: 'لا. Ollama هو بيئة تشغيل محلية: لا يوجد مكوّن خادم ولا يعالج أي بيانات نيابةً عنك. لا يُشترط DPA لأن Ollama ليس معالجاً وفق المادة 28 من GDPR. النموذج يعمل بالكامل على أجهزتك.',
          },
        ],
      },
    },
  },
}

