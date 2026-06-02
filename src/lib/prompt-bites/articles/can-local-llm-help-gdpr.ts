import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Privacy & Security',
    title: 'Can a Local LLM Help with GDPR Compliance?',
    seoTitle: 'Can Local LLM Help GDPR Compliance? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — running an open-weight LLM locally eliminates the GDPR Article 44 third-country transfer problem entirely. Best models for data-sensitive orgs in 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: ['Qwen 3 14B', 'Llama 4 Scout', 'Qwen 3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'DPOs, legal ops, HR, and IT teams investigating AI compliance options',
    parentArticle: '/local-llms/qwen-local-gdpr-setup-guide-2026',
    siblingBites: ['is-qwen-gdpr-compliant', 'is-deepseek-gdpr-safe'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Can a local LLM help with GDPR compliance?',
        answer: 'Yes — running an open-weight model locally eliminates the Article 44 third-country data transfer that makes cloud AI legally complex under GDPR, meaning your prompts and responses never leave your server. Local models like Qwen 3 14B or Llama 4 Scout can handle HR, legal, and medical text entirely on-premises.',
        bullets: [
          'No transfer = no Article 44 problem: the biggest GDPR hurdle for cloud AI disappears',
          'Article 25 (privacy by design) satisfied: data never leaves your jurisdiction by architecture',
          'Best for 12 GB VRAM: Qwen 3 14B Q4_K_M via Ollama — general + coding capable',
        ],
        updatedDate: '2026-05',
      },
      de: { question: 'Kann ein lokales LLM bei der DSGVO-Compliance helfen?', answer: 'Ja — ein Open-Weight-Modell lokal zu betreiben beseitigt den Artikel-44-Drittlandtransfer, der Cloud-KI unter der DSGVO rechtlich komplex macht: Prompts und Antworten verlassen Ihren Server nie. Lokale Modelle wie Qwen 3 14B oder Llama 4 Scout können HR-, Rechts- und medizinische Texte vollständig lokal verarbeiten.', bullets: ['Kein Transfer = kein Artikel-44-Problem: die größte DSGVO-Hürde für Cloud-KI entfällt', 'Artikel 25 (Datenschutz durch Technikgestaltung) erfüllt: Daten verlassen Ihre Jurisdiktion durch Architektur nie', 'Bestes für 12 GB VRAM: Qwen 3 14B Q4_K_M via Ollama — allgemein und coding-fähig'], updatedDate: '2026-05' },
      fr: { question: 'Un LLM local peut-il aider à la conformité RGPD ?', answer: 'Oui — exécuter un modèle open-weight localement élimine le transfert vers un pays tiers de l\'Article 44 qui complexifie juridiquement l\'IA cloud sous le RGPD : vos prompts et réponses ne quittent jamais votre serveur. Les modèles locaux comme Qwen 3 14B ou Llama 4 Scout peuvent traiter les textes RH, juridiques et médicaux entièrement sur site.', bullets: ['Pas de transfert = pas de problème Article 44 : le principal obstacle RGPD pour l\'IA cloud disparaît', 'Article 25 (protection dès la conception) satisfait : les données ne quittent jamais votre juridiction par architecture', 'Meilleur pour 12 Go VRAM : Qwen 3 14B Q4_K_M via Ollama — polyvalent et capable en code'], updatedDate: '2026-05' },
      ja: { question: 'ローカルLLMはGDPRコンプライアンスに役立ちますか？', answer: 'はい——オープンウェイトモデルをローカル実行すると、クラウドAIをGDPR下で法的に複雑にする第44条の第三国転送が排除され、プロンプトと応答がサーバーを離れることがありません。Qwen 3 14BやLlama 4 ScoutなどのローカルモデルはHR・法務・医療テキストをすべてオンプレミスで処理できます。', bullets: ['転送なし = 第44条問題なし：クラウドAIの最大のGDPLハードルが消える', '第25条（プライバシーバイデザイン）満足：アーキテクチャによりデータが管轄を離れない', '12 GB VRAMに最適：Ollama経由Qwen 3 14B Q4_K_M——汎用＋コーディング対応'], updatedDate: '2026-05' },
      zh: { question: '本地LLM能帮助GDPR合规吗？', answer: '可以——在本地运行开源权重模型完全消除了第44条第三国数据传输问题（这正是云AI在GDPR下法律复杂的原因），提示词和响应永远不会离开您的服务器。Qwen 3 14B或Llama 4 Scout等本地模型可以完全在本地处理HR、法律和医疗文本。', bullets: ['无传输 = 无第44条问题：云AI的最大GDPR障碍消失', '满足第25条（隐私设计）：通过架构确保数据不离开您的管辖范围', '12 GB VRAM最佳选择：Ollama本地Qwen 3 14B Q4_K_M——通用+代码能力兼备'], updatedDate: '2026-05' },
      es: { question: '¿Puede un LLM local ayudar con el cumplimiento del RGPD?', answer: 'Sí — ejecutar un modelo de código abierto localmente elimina la transferencia de datos a terceros países del Artículo 44 que hace legalmente complejo el uso de IA en la nube bajo el RGPD, lo que significa que tus prompts y respuestas nunca salen de tu servidor. Modelos locales como Qwen 3 14B o Llama 4 Scout pueden manejar textos de RRHH, legal y médico completamente en las instalaciones.', bullets: ['Sin transferencia = sin problema del Artículo 44: el mayor obstáculo RGPD para la IA en la nube desaparece', 'Artículo 25 (privacidad desde el diseño) satisfecho: los datos nunca abandonan tu jurisdicción por arquitectura', 'El mejor para 12 GB de VRAM: Qwen 3 14B Q4_K_M via Ollama — versátil y con capacidad de código'], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'The core GDPR problem with cloud AI is Article 44: any prompt containing personal data sent to a non-EU server is a third-country transfer requiring legal basis',
          'Local LLMs eliminate the transfer entirely — no transfer means no Article 44 issue, regardless of what the prompt contains',
          'GDPR Article 25 (privacy by design) is directly satisfied: your infrastructure processes data in-jurisdiction by default',
          'Practical starting point: Qwen 3 14B Q4_K_M via Ollama on a 12 GB VRAM GPU — handles HR summaries, legal drafting, and medical text at production quality',
        ],
      },
      body1: {
        title: 'The GDPR Problem with Cloud AI — and Why Local Solves It',
        content: [
          '<strong>Every time you send a prompt to a cloud LLM (ChatGPT, Claude, Gemini), any personal data in that prompt is transferred to a server outside the EU. GDPR Article 44 requires a legal basis for that transfer — typically Standard Contractual Clauses plus a Transfer Impact Assessment. That is the compliance burden cloud AI creates. Local LLMs eliminate it by removing the transfer entirely.</strong>',
          'When a local model runs on your own hardware, data processing happens in-jurisdiction. The model receives your prompt and generates a response entirely on your CPU or GPU — no network call leaves your building. This satisfies Article 44 (no transfer, no legal basis needed), Article 25 (privacy by design: your default architecture prevents external transfer), and Article 5(1)(f) (data integrity and confidentiality: data is processed only by systems under your control).',
          'This is not a technicality or a workaround — it is the intended privacy-by-design architecture GDPR regulators describe. When EU institutions publish guidance on AI and GDPR, local processing is consistently identified as the lowest-risk deployment model.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A local LLM helps GDPR compliance by eliminating the Article 44 third-country transfer entirely — no data ever leaves your server, so no legal basis for international transfer is required.' },
          { type: 'plain-terms', text: 'Cloud AI sends your questions to servers abroad. GDPR restricts that. A local AI model processes everything on your own computer — the data never travels, so the GDPR rules about data leaving the EU simply do not apply.' },
        ],
      },
      body2: {
        title: 'Which Local Models Are Practical for GDPR-Regulated Work',
        content: [
          '<strong>Three open-weight models cover the main GDPR-regulated workflows in 2026. For general HR, legal, and document drafting: Qwen 3 14B Q4_K_M (needs 10–12 GB VRAM). For code analysis and technical documentation: Qwen 3 Coder 14B (same VRAM, stronger on structured output). For organisations with a single GPU or tighter hardware: Qwen 3 8B Q4_K_M (6–8 GB VRAM).</strong>',
          'All three run via Ollama with a single command and require no cloud connectivity after the one-time model download. The download happens once from Hugging Face over HTTPS and can be done on an air-gapped machine via sneakernet. After that: fully offline.',
          'For larger organisations needing near-frontier quality: Llama 4 Scout (17B MoE) fits on 24 GB VRAM with a 10M token context window — suitable for processing long contracts, HR policy documents, or medical records in a single context.',
        ],
        columns: ['Workflow', 'Recommended Model', 'VRAM Required', 'Ollama Command'],
        rows: [
          { 'Workflow': 'HR documents, summaries', 'Recommended Model': 'Qwen 3 14B Q4_K_M', 'VRAM Required': '10–12 GB', 'Ollama Command': 'ollama run qwen2.5:14b' },
          { 'Workflow': 'Legal drafting, contracts', 'Recommended Model': 'Qwen 3 14B Q4_K_M', 'VRAM Required': '10–12 GB', 'Ollama Command': 'ollama run qwen2.5:14b' },
          { 'Workflow': 'Code, technical docs', 'Recommended Model': 'Qwen 3 Coder 14B', 'VRAM Required': '10–12 GB', 'Ollama Command': 'ollama run qwen2.5-coder:14b' },
          { 'Workflow': 'Budget / 8 GB VRAM', 'Recommended Model': 'Qwen 3 8B Q4_K_M', 'VRAM Required': '6–8 GB', 'Ollama Command': 'ollama run qwen3:8b' },
          { 'Workflow': 'Long documents (>100K tokens)', 'Recommended Model': 'Llama 4 Scout', 'VRAM Required': '24 GB', 'Ollama Command': 'ollama run llama4:scout' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers: Local LLMs and GDPR',
        faqs: [
          {
            q: 'Does using a local LLM mean I have no GDPR obligations at all?',
            a: 'No — GDPR obligations apply whenever you process personal data, regardless of whether AI is involved. A local LLM reduces the Article 44 transfer risk but does not eliminate obligations like maintaining an Article 30 processing record, obtaining lawful basis for processing, and ensuring data minimisation. It removes one of the hardest GDPR problems (international transfers) — not all of them.',
          },
          {
            q: 'Can I use Ollama in a corporate environment for GDPR compliance?',
            a: 'Yes. Ollama is a local inference runtime with no cloud telemetry for inference traffic (check the Ollama documentation for the current telemetry policy on model downloads). In a corporate setup: disable automatic model updates, document the Ollama version and model checksums in your Article 30 processing register, and run on an isolated network segment. See the <a href="/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">full GDPR-compliant Qwen setup guide</a> for a complete checklist.',
          },
          {
            q: 'Is a local LLM sufficient for processing medical or legal data under GDPR?',
            a: 'From a transfer-law perspective: yes — local processing eliminates the main GDPR hurdle. You still need to satisfy the substantive legal bases for processing that category of data (Article 9 for medical data, Article 6 for general personal data). Running a local LLM does not substitute for a valid lawful basis or a Data Protection Impact Assessment where required.',
          },
          {
            q: 'Do open-source LLM weights carry GDPR risk from their training data?',
            a: 'Potentially. If a model was trained on personal data scraped without consent (a common concern for early LLMs), deploying that model could create indirect GDPR liability. For production use, prefer models with documented training data provenance: Qwen 3 (Alibaba Tongyi), Llama 4 (Meta), or Mistral (EU-based). Avoid models with undisclosed training data for high-risk GDPR environments.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Privacy & Security',
    title: 'Kann ein lokales LLM bei der DSGVO-Compliance helfen?',
    seoTitle: 'Hilft ein lokales LLM bei der DSGVO?',
    metaDescription: 'Ja — lokales Open-Weight-LLM beseitigt das DSGVO-Artikel-44-Drittlandtransfer-Problem vollständig. Beste Modelle für datensensible Organisationen 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      de: {
        question: 'Kann ein lokales LLM bei der DSGVO-Compliance helfen?',
        answer: 'Ja — ein Open-Weight-Modell lokal zu betreiben beseitigt den Artikel-44-Drittlandtransfer, der Cloud-KI unter der DSGVO rechtlich komplex macht: Prompts und Antworten verlassen Ihren Server nie. Lokale Modelle wie Qwen 3 14B oder Llama 4 Scout können HR-, Rechts- und medizinische Texte vollständig lokal verarbeiten.',
        bullets: [
          'Kein Transfer = kein Artikel-44-Problem: die größte DSGVO-Hürde für Cloud-KI entfällt',
          'Artikel 25 (Datenschutz durch Technikgestaltung) erfüllt: Daten verlassen Ihre Jurisdiktion durch Architektur nie',
          'Bestes für 12 GB VRAM: Qwen 3 14B Q4_K_M via Ollama — allgemein und coding-fähig',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Das DSGVO-Kernproblem mit Cloud-KI ist Artikel 44: jeder Prompt mit personenbezogenen Daten an einen Nicht-EU-Server ist ein Drittlandtransfer, der einer Rechtsgrundlage bedarf',
          'Lokale LLMs beseitigen den Transfer vollständig — kein Transfer bedeutet kein Artikel-44-Problem, unabhängig vom Inhalt des Prompts',
          'DSGVO-Artikel 25 (Datenschutz durch Technikgestaltung) wird direkt erfüllt: Ihre Infrastruktur verarbeitet Daten standardmäßig jurisdiktionsintern',
          'Praktischer Einstieg: Qwen 3 14B Q4_K_M via Ollama auf einer 12-GB-VRAM-GPU — verarbeitet HR-Zusammenfassungen, Rechtsentwürfe und medizinische Texte in Produktionsqualität',
        ],
      },
      body1: {
        title: 'Das DSGVO-Problem mit Cloud-KI — und warum lokale Modelle es lösen',
        content: [
          '<strong>Jedes Mal, wenn Sie einen Prompt an ein Cloud-LLM (ChatGPT, Claude, Gemini) senden, werden alle personenbezogenen Daten in diesem Prompt auf einen Server außerhalb der EU übertragen. DSGVO-Artikel 44 erfordert eine Rechtsgrundlage für diesen Transfer — üblicherweise Standardvertragsklauseln plus eine Transferfolgenabschätzung. Das ist die Compliance-Last, die Cloud-KI erzeugt. Lokale LLMs beseitigen sie, indem sie den Transfer vollständig vermeiden.</strong>',
          'Wenn ein lokales Modell auf Ihrer eigenen Hardware läuft, erfolgt die Datenverarbeitung jurisdiktionsintern. Das Modell empfängt Ihren Prompt und generiert eine Antwort vollständig auf Ihrer CPU oder GPU — kein Netzwerkaufruf verlässt Ihr Gebäude. Dies erfüllt Artikel 44 (kein Transfer, keine Rechtsgrundlage nötig), Artikel 25 (Datenschutz durch Technikgestaltung) und Artikel 5(1)(f) (Integrität und Vertraulichkeit der Daten).',
          'Dies ist keine Ausrede oder Umgehung — es ist die von DSGVO-Regulatoren beschriebene Privacy-by-Design-Architektur. Wenn EU-Institutionen Leitlinien zu KI und DSGVO veröffentlichen, wird lokale Verarbeitung konsequent als Deployment-Modell mit geringstem Risiko identifiziert.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ein lokales LLM hilft bei der DSGVO-Compliance, indem es den Artikel-44-Drittlandtransfer vollständig beseitigt — Daten verlassen Ihren Server nie, daher ist keine Rechtsgrundlage für internationalen Transfer erforderlich.' },
          { type: 'plain-terms', text: 'Cloud-KI schickt Ihre Fragen an Server im Ausland. Die DSGVO schränkt das ein. Ein lokales KI-Modell verarbeitet alles auf Ihrem eigenen Computer — die Daten reisen nie, daher gelten die DSGVO-Regeln zu Datenabfluss aus der EU schlicht nicht.' },
        ],
      },
      body2: {
        title: 'Welche lokalen Modelle für DSGVO-regulierte Arbeit praktikabel sind',
        content: [
          '<strong>Drei Open-Weight-Modelle decken die wichtigsten DSGVO-regulierten Workflows im Jahr 2026 ab. Für allgemeines HR, Recht und Dokumentenerststellung: Qwen 3 14B Q4_K_M (benötigt 10–12 GB VRAM). Für Code-Analyse und technische Dokumentation: Qwen 3 Coder 14B (gleiches VRAM, stärker bei strukturierter Ausgabe). Für Organisationen mit einer GPU oder engerer Hardware: Qwen 3 8B Q4_K_M (6–8 GB VRAM).</strong>',
          'Alle drei laufen via Ollama mit einem einzigen Befehl und benötigen nach dem einmaligen Modell-Download keine Cloud-Konnektivität mehr. Das Modell kann einmalig über HTTPS von Hugging Face heruntergeladen werden, auch auf einem Air-Gap-Rechner via Datenträger. Danach: vollständig offline.',
          'Für größere Organisationen, die nahezu frontier-nahe Qualität benötigen: Llama 4 Scout (17B MoE) passt auf 24 GB VRAM mit einem 10M-Token-Kontextfenster — geeignet für die Verarbeitung langer Verträge, HR-Richtlinien oder medizinischer Unterlagen in einem einzigen Kontext.',
        ],
        columns: ['Workflow', 'Empfohlenes Modell', 'Benötigtes VRAM', 'Ollama-Befehl'],
        rows: [
          { 'Workflow': 'HR-Dokumente, Zusammenfassungen', 'Empfohlenes Modell': 'Qwen 3 14B Q4_K_M', 'Benötigtes VRAM': '10–12 GB', 'Ollama-Befehl': 'ollama run qwen2.5:14b' },
          { 'Workflow': 'Rechtsentwürfe, Verträge', 'Empfohlenes Modell': 'Qwen 3 14B Q4_K_M', 'Benötigtes VRAM': '10–12 GB', 'Ollama-Befehl': 'ollama run qwen2.5:14b' },
          { 'Workflow': 'Code, technische Dokumente', 'Empfohlenes Modell': 'Qwen 3 Coder 14B', 'Benötigtes VRAM': '10–12 GB', 'Ollama-Befehl': 'ollama run qwen2.5-coder:14b' },
          { 'Workflow': 'Budget / 8 GB VRAM', 'Empfohlenes Modell': 'Qwen 3 8B Q4_K_M', 'Benötigtes VRAM': '6–8 GB', 'Ollama-Befehl': 'ollama run qwen3:8b' },
          { 'Workflow': 'Lange Dokumente (>100K Token)', 'Empfohlenes Modell': 'Llama 4 Scout', 'Benötigtes VRAM': '24 GB', 'Ollama-Befehl': 'ollama run llama4:scout' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten: Lokale LLMs und DSGVO',
        faqs: [
          {
            q: 'Bedeutet die Nutzung eines lokalen LLMs, dass ich keine DSGVO-Pflichten mehr habe?',
            a: 'Nein — DSGVO-Pflichten gelten immer, wenn personenbezogene Daten verarbeitet werden, unabhängig davon, ob KI im Spiel ist. Ein lokales LLM reduziert das Artikel-44-Transferrisiko, beseitigt aber nicht Pflichten wie Verarbeitungsverzeichnis (Art. 30), rechtmäßige Verarbeitungsgrundlage und Datensparsamkeit. Es löst eines der schwierigsten DSGVO-Probleme (internationale Transfers) — aber nicht alle.',
          },
          {
            q: 'Welches lokale Modell empfehlen Sie für die DSGVO-Compliance?',
            a: 'Für 12 GB VRAM ist Qwen 3 14B Q4_K_M via Ollama der Ausgangspunkt: stark bei deutschen und mehrsprachigen Texten, allgemein einsatzfähig, Apache-2.0-Lizenz mit prüfbaren Gewichten. Für 8 GB VRAM: Qwen 3 8B Q4_K_M. Vollständige Einrichtungsschritte mit DSGVO-Checkliste finden Sie im <a href="/de/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">DSGVO-Qwen-Einrichtungsleitfaden</a>.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Privacy & Security',
    title: 'Un LLM local peut-il aider à la conformité RGPD ?',
    seoTitle: 'LLM local pour la conformité RGPD 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Oui — un LLM open-weight local élimine entièrement le problème de transfert vers pays tiers de l\'Article 44 du RGPD. Meilleurs modèles pour orgs data-sensibles 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      fr: {
        question: 'Un LLM local peut-il aider à la conformité RGPD ?',
        answer: 'Oui — exécuter un modèle open-weight localement élimine le transfert vers un pays tiers de l\'Article 44 qui complexifie juridiquement l\'IA cloud sous le RGPD : vos prompts et réponses ne quittent jamais votre serveur. Les modèles locaux comme Qwen 3 14B ou Llama 4 Scout peuvent traiter les textes RH, juridiques et médicaux entièrement sur site.',
        bullets: [
          'Pas de transfert = pas de problème Article 44 : le principal obstacle RGPD pour l\'IA cloud disparaît',
          'Article 25 (protection dès la conception) satisfait : les données ne quittent jamais votre juridiction par architecture',
          'Meilleur pour 12 Go VRAM : Qwen 3 14B Q4_K_M via Ollama — polyvalent et capable en code',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Le problème RGPD central avec l\'IA cloud est l\'Article 44 : tout prompt contenant des données personnelles envoyé à un serveur hors UE est un transfert vers un pays tiers nécessitant une base légale',
          'Les LLMs locaux éliminent entièrement le transfert — pas de transfert signifie pas de problème Article 44, quel que soit le contenu du prompt',
          'L\'Article 25 du RGPD (protection dès la conception) est directement satisfait : votre infrastructure traite les données dans votre juridiction par défaut',
          'Point de départ pratique : Qwen 3 14B Q4_K_M via Ollama sur un GPU 12 Go VRAM — traite résumés RH, rédaction juridique et textes médicaux en qualité production',
        ],
      },
      body1: {
        title: 'Le problème RGPD avec l\'IA cloud — et pourquoi le local le résout',
        content: [
          '<strong>À chaque fois que vous envoyez un prompt à un LLM cloud (ChatGPT, Claude, Gemini), toute donnée personnelle dans ce prompt est transférée vers un serveur hors UE. L\'Article 44 du RGPD exige une base légale pour ce transfert — généralement des CCT et une EIT. C\'est la charge de conformité que crée l\'IA cloud. Les LLMs locaux l\'éliminent en supprimant entièrement le transfert.</strong>',
          'Quand un modèle local tourne sur votre propre matériel, le traitement des données s\'effectue dans votre juridiction. Le modèle reçoit votre prompt et génère une réponse entièrement sur votre CPU ou GPU — aucun appel réseau ne quitte votre bâtiment. Cela satisfait l\'Article 44 (pas de transfert, pas de base légale nécessaire), l\'Article 25 (protection dès la conception) et l\'Article 5(1)(f) (intégrité et confidentialité des données).',
          'Ce n\'est pas une technicité ou un contournement — c\'est l\'architecture de protection des données dès la conception que décrivent les régulateurs RGPD. Lorsque les institutions européennes publient des orientations sur l\'IA et le RGPD, le traitement local est systématiquement identifié comme le modèle de déploiement à risque le plus faible.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Un LLM local aide à la conformité RGPD en éliminant entièrement le transfert vers un pays tiers de l\'Article 44 — aucune donnée ne quitte jamais votre serveur, aucune base légale pour un transfert international n\'est donc requise.' },
          { type: 'plain-terms', text: 'L\'IA cloud envoie vos questions à des serveurs à l\'étranger. Le RGPD l\'encadre. Un modèle IA local traite tout sur votre propre ordinateur — les données ne voyagent jamais, donc les règles RGPD sur les données quittant l\'UE ne s\'appliquent tout simplement pas.' },
        ],
      },
      body2: {
        title: 'Quels modèles locaux sont pratiques pour le travail réglementé RGPD',
        content: [
          '<strong>Trois modèles open-weight couvrent les principaux flux de travail réglementés RGPD en 2026. Pour les RH généraux, le juridique et la rédaction documentaire : Qwen 3 14B Q4_K_M (nécessite 10–12 Go VRAM). Pour l\'analyse de code et la documentation technique : Qwen 3 Coder 14B (même VRAM, plus fort sur les sorties structurées). Pour les organisations avec un seul GPU ou matériel limité : Qwen 3 8B Q4_K_M (6–8 Go VRAM).</strong>',
          'Les trois fonctionnent via Ollama avec une seule commande et ne nécessitent plus de connectivité cloud après le téléchargement unique du modèle. Le téléchargement s\'effectue une fois depuis Hugging Face via HTTPS et peut se faire sur une machine isolée par support physique. Ensuite : entièrement hors ligne.',
          'Pour les grandes organisations nécessitant une qualité proche du frontier : Llama 4 Scout (17B MoE) tient sur 24 Go VRAM avec une fenêtre de contexte de 10M tokens — adapté au traitement de longs contrats, politiques RH ou dossiers médicaux dans un seul contexte.',
        ],
        columns: ['Flux de travail', 'Modèle recommandé', 'VRAM requis', 'Commande Ollama'],
        rows: [
          { 'Flux de travail': 'Documents RH, résumés', 'Modèle recommandé': 'Qwen 3 14B Q4_K_M', 'VRAM requis': '10–12 Go', 'Commande Ollama': 'ollama run qwen2.5:14b' },
          { 'Flux de travail': 'Rédaction juridique, contrats', 'Modèle recommandé': 'Qwen 3 14B Q4_K_M', 'VRAM requis': '10–12 Go', 'Commande Ollama': 'ollama run qwen2.5:14b' },
          { 'Flux de travail': 'Code, documentation technique', 'Modèle recommandé': 'Qwen 3 Coder 14B', 'VRAM requis': '10–12 Go', 'Commande Ollama': 'ollama run qwen2.5-coder:14b' },
          { 'Flux de travail': 'Budget / 8 Go VRAM', 'Modèle recommandé': 'Qwen 3 8B Q4_K_M', 'VRAM requis': '6–8 Go', 'Commande Ollama': 'ollama run qwen3:8b' },
          { 'Flux de travail': 'Longs documents (>100K tokens)', 'Modèle recommandé': 'Llama 4 Scout', 'VRAM requis': '24 Go', 'Commande Ollama': 'ollama run llama4:scout' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides : LLMs locaux et RGPD',
        faqs: [
          {
            q: 'Utiliser un LLM local signifie-t-il que je n\'ai plus aucune obligation RGPD ?',
            a: 'Non — les obligations RGPD s\'appliquent dès lors que vous traitez des données personnelles, indépendamment de l\'utilisation d\'IA. Un LLM local réduit le risque de transfert de l\'Article 44 mais n\'élimine pas les obligations comme le registre de traitement (Art. 30), la base légale du traitement, et la minimisation des données. Il supprime l\'un des problèmes RGPD les plus difficiles (transferts internationaux) — pas tous.',
          },
          {
            q: 'Quel modèle local recommandez-vous pour la conformité RGPD ?',
            a: 'Pour 12 Go de VRAM, Qwen 3 14B Q4_K_M via Ollama est le point de départ : fort sur le français et les textes multilingues, polyvalent, licence Apache 2.0 avec poids auditables. Pour 8 Go de VRAM : Qwen 3 8B Q4_K_M. Les étapes d\'installation complètes avec une check-list RGPD sont dans le <a href="/fr/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">guide de configuration RGPD pour Qwen</a>.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Privacy & Security',
    title: 'ローカルLLMはGDPRコンプライアンスに役立ちますか？',
    seoTitle: 'ローカルLLMでGDPRコンプライアンス？2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'はい——オープンウェイトLLMをローカル実行するとGDPR第44条の第三国転送問題が完全に排除されます。2026年のデータ機密組織向け最適モデル。',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMはGDPRコンプライアンスに役立ちますか？',
        answer: 'はい——オープンウェイトモデルをローカル実行すると、クラウドAIをGDPR下で法的に複雑にする第44条の第三国転送が排除され、プロンプトと応答がサーバーを離れることがありません。Qwen 3 14BやLlama 4 ScoutなどのローカルモデルはHR・法務・医療テキストをすべてオンプレミスで処理できます。',
        bullets: [
          '転送なし = 第44条問題なし：クラウドAIの最大のGDPRハードルが消える',
          '第25条（プライバシーバイデザイン）満足：アーキテクチャによりデータが管轄を離れない',
          '12 GB VRAMに最適：Ollama経由Qwen 3 14B Q4_K_M——汎用＋コーディング対応',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'クラウドAIのGDPRコア問題は第44条：EU外サーバーに個人データを含むプロンプトを送ると、法的根拠が必要な第三国転送になる',
          'ローカルLLMは転送を完全に排除——転送がなければ、プロンプトの内容に関わらず第44条問題は発生しない',
          'GDPR第25条（プライバシーバイデザイン）が直接満たされる：インフラがデフォルトで管轄内でデータを処理する',
          '実践的な出発点：12 GB VRAM GPUでOllama経由Qwen 3 14B Q4_K_M——HR要約・法的起草・医療テキストを本番品質で処理',
        ],
      },
      body1: {
        title: 'クラウドAIのGDPR問題——ローカルモデルが解決する理由',
        content: [
          '<strong>クラウドLLM（ChatGPT、Claude、Gemini）にプロンプトを送るたびに、そのプロンプト内の個人データはEU外のサーバーに転送されます。GDPR第44条はその転送に法的根拠——通常はSCC＋TIA——を要求します。これがクラウドAIが生み出すコンプライアンス負担です。ローカルLLMは転送を完全に排除することでそれを解消します。</strong>',
          'ローカルモデルが自社ハードウェアで動作する場合、データ処理は管轄内で行われます。モデルはプロンプトを受け取り、CPUまたはGPU上で完全に応答を生成します——ネットワーク呼び出しは建物を出ません。これにより第44条（転送なし、法的根拠不要）、第25条（プライバシーバイデザイン）、第5条(1)(f)（データの完全性と機密性）が満たされます。',
          'これは抜け道や技術的解釈ではありません——GDPRレギュレーターが説明するプライバシーバイデザインアーキテクチャです。EU機関がAIとGDPRに関するガイダンスを公開する際、ローカル処理は一貫して最低リスクの展開モデルと識別されています。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'ローカルLLMはGDPR第44条の第三国転送を完全に排除することでコンプライアンスを支援します——データはサーバーを離れないため、国際転送の法的根拠は不要です。' },
          { type: 'plain-terms', text: 'クラウドAIはあなたの質問を海外のサーバーに送ります。GDPRはそれを制限します。ローカルAIモデルは自分のコンピューター上ですべてを処理します——データは移動しないため、データがEUを離れることについてのGDPR規則は単純に適用されません。' },
        ],
      },
      body2: {
        title: 'GDPR規制業務に実用的なローカルモデル',
        content: [
          '<strong>2026年には3つのオープンウェイトモデルが主要なGDPR規制ワークフローをカバーします。汎用HR・法務・文書作成：Qwen 3 14B Q4_K_M（10〜12 GB VRAMが必要）。コード分析と技術文書：Qwen 3 Coder 14B（同VRAM、構造化出力で強い）。単一GPUまたはハードウェアが限られる組織：Qwen 3 8B Q4_K_M（6〜8 GB VRAM）。</strong>',
          '3つとも単一コマンドでOllama経由で動作し、一度のモデルダウンロード後はクラウド接続が不要です。ダウンロードはHTTPS経由でHugging Faceから一度行い、エアギャップマシンでも物理メディア経由で可能です。その後は完全オフライン。',
          '大規模組織でフロンティア近くの品質が必要な場合：Llama 4 Scout（17B MoE）は24 GB VRAMに収まり、10Mトークンコンテキストウィンドウを持ちます——長い契約書・HR方針文書・医療記録の処理に適しています。',
        ],
        columns: ['ワークフロー', '推奨モデル', '必要VRAM', 'Ollamaコマンド'],
        rows: [
          { 'ワークフロー': 'HR文書、要約', '推奨モデル': 'Qwen 3 14B Q4_K_M', '必要VRAM': '10〜12 GB', 'Ollamaコマンド': 'ollama run qwen2.5:14b' },
          { 'ワークフロー': '法的起草、契約書', '推奨モデル': 'Qwen 3 14B Q4_K_M', '必要VRAM': '10〜12 GB', 'Ollamaコマンド': 'ollama run qwen2.5:14b' },
          { 'ワークフロー': 'コード、技術文書', '推奨モデル': 'Qwen 3 Coder 14B', '必要VRAM': '10〜12 GB', 'Ollamaコマンド': 'ollama run qwen2.5-coder:14b' },
          { 'ワークフロー': 'バジェット / 8 GB VRAM', '推奨モデル': 'Qwen 3 8B Q4_K_M', '必要VRAM': '6〜8 GB', 'Ollamaコマンド': 'ollama run qwen3:8b' },
          { 'ワークフロー': '長文書（100Kトークン以上）', '推奨モデル': 'Llama 4 Scout', '必要VRAM': '24 GB', 'Ollamaコマンド': 'ollama run llama4:scout' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'ローカルLLMとGDPRに関するよくある質問',
        faqs: [
          {
            q: 'ローカルLLMを使うとGDPLの義務が一切なくなりますか？',
            a: 'いいえ——GDPRの義務はAIの有無に関わらず個人データを処理するときは常に適用されます。ローカルLLMは第44条転送リスクを低減しますが、第30条の処理記録、合法的処理根拠、データ最小化などの義務は排除しません。最も困難なGDPR問題の一つ（国際転送）を解決しますが、すべてではありません。',
          },
          {
            q: 'GDPRコンプライアンスにどのローカルモデルを推奨しますか？',
            a: '12 GB VRAMにはOllama経由のQwen 3 14B Q4_K_Mが出発点：日本語と多言語テキストに強く、汎用で、検証可能な重みのApache 2.0ライセンス。8 GB VRAM：Qwen 3 8B Q4_K_M。GDPRチェックリスト付きの完全なセットアップ手順は<a href="/ja/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">Qwen GDPRセットアップガイド</a>をご覧ください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Privacy & Security',
    title: '本地LLM能帮助GDPR合规吗？',
    seoTitle: '本地LLM助力GDPR合规 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '可以——本地运行开源权重LLM完全消除GDPR第44条第三国数据传输问题。2026年数据敏感机构最佳模型推荐。',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      zh: {
        question: '本地LLM能帮助GDPR合规吗？',
        answer: '可以——在本地运行开源权重模型完全消除了第44条第三国数据传输问题（这正是云AI在GDPR下法律复杂的原因），提示词和响应永远不会离开您的服务器。Qwen 3 14B或Llama 4 Scout等本地模型可以完全在本地处理HR、法律和医疗文本。',
        bullets: [
          '无传输 = 无第44条问题：云AI的最大GDPR障碍消失',
          '满足第25条（隐私设计）：通过架构确保数据不离开您的管辖范围',
          '12 GB VRAM最佳选择：Ollama本地Qwen 3 14B Q4_K_M——通用+代码能力兼备',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '云AI的GDPR核心问题是第44条：包含个人数据的提示词发送到非欧盟服务器就是需要法律依据的第三国传输',
          '本地LLM完全消除传输——无传输意味着无第44条问题，无论提示词包含什么内容',
          'GDPR第25条（隐私设计）直接满足：您的基础设施默认在管辖范围内处理数据',
          '实践起点：12 GB VRAM GPU上通过Ollama运行Qwen 3 14B Q4_K_M——以生产质量处理HR摘要、法律起草和医疗文本',
        ],
      },
      body1: {
        title: '云AI的GDPR问题——以及本地为何能解决',
        content: [
          '<strong>每次向云LLM（ChatGPT、Claude、Gemini）发送提示词时，提示词中的个人数据都会传输到欧盟以外的服务器。GDPR第44条要求该传输有法律依据——通常是标准合同条款加传输影响评估。这是云AI带来的合规负担。本地LLM通过完全消除传输来解决这一问题。</strong>',
          '当本地模型在您自己的硬件上运行时，数据处理在管辖范围内进行。模型在您的CPU或GPU上接收提示词并完全在本地生成响应——没有网络调用离开您的建筑。这满足了第44条（无传输，无需法律依据）、第25条（隐私设计）和第5(1)(f)条（数据完整性和保密性）。',
          '这不是技术细节或规避措施——这正是GDPR监管机构所描述的隐私设计架构。欧盟机构发布关于AI和GDPR的指导意见时，本地处理始终被认定为风险最低的部署模式。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '本地LLM通过完全消除第44条第三国传输来帮助GDPR合规——数据永远不会离开您的服务器，因此不需要国际传输的法律依据。' },
          { type: 'plain-terms', text: '云AI将您的问题发送到国外服务器。GDPR对此有限制。本地AI模型在您自己的电脑上处理所有内容——数据从不传输，因此关于数据离开欧盟的GDPR规则根本不适用。' },
        ],
      },
      body2: {
        title: '适合GDPR监管工作的实用本地模型',
        content: [
          '<strong>2026年有三个开源权重模型涵盖主要GDPR监管工作流程。通用HR、法务和文档起草：Qwen 3 14B Q4_K_M（需要10-12 GB VRAM）。代码分析和技术文档：Qwen 3 Coder 14B（相同VRAM，结构化输出更强）。单GPU或硬件受限的机构：Qwen 3 8B Q4_K_M（6-8 GB VRAM）。</strong>',
          '三者都通过Ollama单命令运行，一次性下载模型后无需云连接。下载可通过HTTPS从Hugging Face一次性完成，也可在隔离机器上通过物理介质完成。之后完全离线。',
          '对于需要接近前沿质量的大型机构：Llama 4 Scout（17B MoE）可在24 GB VRAM上运行，拥有10M令牌上下文窗口——适合在单一上下文中处理长合同、HR政策文档或医疗记录。',
        ],
        columns: ['工作流程', '推荐模型', '所需VRAM', 'Ollama命令'],
        rows: [
          { '工作流程': 'HR文档、摘要', '推荐模型': 'Qwen 3 14B Q4_K_M', '所需VRAM': '10-12 GB', 'Ollama命令': 'ollama run qwen2.5:14b' },
          { '工作流程': '法律起草、合同', '推荐模型': 'Qwen 3 14B Q4_K_M', '所需VRAM': '10-12 GB', 'Ollama命令': 'ollama run qwen2.5:14b' },
          { '工作流程': '代码、技术文档', '推荐模型': 'Qwen 3 Coder 14B', '所需VRAM': '10-12 GB', 'Ollama命令': 'ollama run qwen2.5-coder:14b' },
          { '工作流程': '预算型 / 8 GB VRAM', '推荐模型': 'Qwen 3 8B Q4_K_M', '所需VRAM': '6-8 GB', 'Ollama命令': 'ollama run qwen3:8b' },
          { '工作流程': '长文档（>10万令牌）', '推荐模型': 'Llama 4 Scout', '所需VRAM': '24 GB', 'Ollama命令': 'ollama run llama4:scout' },
        ],
      },
      faq: {
        id: 'faq',
        title: '本地LLM与GDPR快速解答',
        faqs: [
          {
            q: '使用本地LLM意味着我完全没有GDPR义务了吗？',
            a: '不——只要处理个人数据，GDPR义务就适用，无论是否使用AI。本地LLM降低了第44条传输风险，但不消除维护第30条处理记录、获得合法处理依据和确保数据最小化等义务。它解决了最困难的GDPR问题之一（国际传输）——而不是全部问题。',
          },
          {
            q: 'GDPR合规推荐哪个本地模型？',
            a: '12 GB VRAM推荐通过Ollama使用Qwen 3 14B Q4_K_M：中文和多语言文本表现强，通用性好，Apache 2.0许可证权重可审计。8 GB VRAM：Qwen 3 8B Q4_K_M。带GDPR检查清单的完整安装步骤请参阅<a href="/zh/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">Qwen GDPR配置完整指南</a>。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Privacy & Security',
    title: '¿Puede un LLM local ayudar con el cumplimiento del RGPD?',
    seoTitle: '¿LLM local ayuda con el RGPD? 2026 | PromptQuorum',
    metaDescription: 'Sí: ejecutar un LLM de código abierto en local elimina el problema de transferencia del Artículo 44 del RGPD. Mejores modelos para datos sensibles en 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      es: {
        question: '¿Puede un LLM local ayudar con el cumplimiento del RGPD?',
        answer: 'Sí — ejecutar un modelo de código abierto localmente elimina la transferencia de datos a terceros países del Artículo 44 que hace legalmente complejo el uso de IA en la nube bajo el RGPD, lo que significa que tus prompts y respuestas nunca salen de tu servidor. Modelos locales como Qwen 3 14B o Llama 4 Scout pueden manejar textos de RRHH, legal y médico completamente en las instalaciones.',
        bullets: [
          'Sin transferencia = sin problema del Artículo 44: el mayor obstáculo RGPD para la IA en la nube desaparece',
          'Artículo 25 (privacidad desde el diseño) satisfecho: los datos nunca abandonan tu jurisdicción por arquitectura',
          'El mejor para 12 GB de VRAM: Qwen 3 14B Q4_K_M via Ollama — versátil y con capacidad de código',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'El problema central del RGPD con la IA en la nube es el Artículo 44: cualquier prompt con datos personales enviado a un servidor fuera de la UE es una transferencia a terceros países que requiere base legal',
          'Los LLMs locales eliminan la transferencia por completo: sin transferencia no hay problema con el Artículo 44, independientemente del contenido del prompt',
          'El Artículo 25 del RGPD (privacidad desde el diseño) queda directamente satisfecho: tu infraestructura procesa los datos dentro de tu jurisdicción por defecto',
          'Punto de partida práctico: Qwen 3 14B Q4_K_M via Ollama en una GPU con 12 GB de VRAM — gestiona resúmenes de RRHH, redacción legal y texto médico con calidad de producción',
        ],
      },
      body1: {
        title: 'El problema del RGPD con la IA en la nube — y por qué el uso local lo soluciona',
        content: [
          '<strong>Cada vez que envías un prompt a un LLM en la nube (ChatGPT, Claude, Gemini), cualquier dato personal en ese prompt se transfiere a un servidor fuera de la UE. El Artículo 44 del RGPD requiere una base legal para esa transferencia: habitualmente Cláusulas Contractuales Tipo más una Evaluación de Impacto de Transferencia. Esa es la carga de cumplimiento que genera la IA en la nube. Los LLMs locales la eliminan al suprimir la transferencia por completo.</strong>',
          'Cuando un modelo local se ejecuta en tu propio hardware, el procesamiento de datos ocurre dentro de tu jurisdicción. El modelo recibe tu prompt y genera una respuesta íntegramente en tu CPU o GPU: ninguna llamada de red sale de tu edificio. Esto satisface el Artículo 44 (sin transferencia, sin necesidad de base legal), el Artículo 25 (privacidad desde el diseño: tu arquitectura por defecto impide la transferencia externa), y el Artículo 5(1)(f) (integridad y confidencialidad de los datos: los datos son procesados solo por sistemas bajo tu control).',
          'Esto no es una tecnicidad ni un truco: es la arquitectura de privacidad desde el diseño que describen los reguladores del RGPD. Cuando las instituciones de la UE publican orientaciones sobre IA y RGPD, el procesamiento local se identifica sistemáticamente como el modelo de despliegue de menor riesgo.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Un LLM local ayuda con el cumplimiento del RGPD al eliminar por completo la transferencia a terceros países del Artículo 44: ningún dato abandona jamás tu servidor, por lo que no se requiere base legal para la transferencia internacional.' },
          { type: 'plain-terms', text: 'La IA en la nube envía tus preguntas a servidores en el extranjero. El RGPD lo restringe. Un modelo de IA local procesa todo en tu propio equipo: los datos nunca se mueven, por lo que las reglas del RGPD sobre datos que salen de la UE sencillamente no se aplican.' },
        ],
      },
      body2: {
        title: 'Qué modelos locales son prácticos para el trabajo regulado por el RGPD',
        content: [
          '<strong>Tres modelos de código abierto cubren los principales flujos de trabajo regulados por el RGPD en 2026. Para RRHH general, legal y redacción de documentos: Qwen 3 14B Q4_K_M (necesita 10–12 GB de VRAM). Para análisis de código y documentación técnica: Qwen 3 Coder 14B (mismo VRAM, más potente en salida estructurada). Para organizaciones con una sola GPU o hardware más limitado: Qwen 3 8B Q4_K_M (6–8 GB de VRAM).</strong>',
          'Los tres funcionan via Ollama con un solo comando y no requieren conectividad en la nube tras la descarga única del modelo. La descarga se realiza una vez desde Hugging Face a través de HTTPS y puede hacerse en una máquina air-gapped mediante soporte físico. Después: completamente offline.',
          'Para organizaciones más grandes que necesitan calidad cercana a la frontera: Llama 4 Scout (17B MoE) cabe en 24 GB de VRAM con una ventana de contexto de 10M tokens, ideal para procesar contratos largos, documentos de política de RRHH o registros médicos en un único contexto.',
        ],
        columns: ['Flujo de trabajo', 'Modelo recomendado', 'VRAM requerida', 'Comando Ollama'],
        rows: [
          { 'Flujo de trabajo': 'Documentos de RRHH, resúmenes', 'Modelo recomendado': 'Qwen 3 14B Q4_K_M', 'VRAM requerida': '10–12 GB', 'Comando Ollama': 'ollama run qwen2.5:14b' },
          { 'Flujo de trabajo': 'Redacción legal, contratos', 'Modelo recomendado': 'Qwen 3 14B Q4_K_M', 'VRAM requerida': '10–12 GB', 'Comando Ollama': 'ollama run qwen2.5:14b' },
          { 'Flujo de trabajo': 'Código, documentación técnica', 'Modelo recomendado': 'Qwen 3 Coder 14B', 'VRAM requerida': '10–12 GB', 'Comando Ollama': 'ollama run qwen2.5-coder:14b' },
          { 'Flujo de trabajo': 'Presupuesto / 8 GB VRAM', 'Modelo recomendado': 'Qwen 3 8B Q4_K_M', 'VRAM requerida': '6–8 GB', 'Comando Ollama': 'ollama run qwen3:8b' },
          { 'Flujo de trabajo': 'Documentos largos (>100K tokens)', 'Modelo recomendado': 'Llama 4 Scout', 'VRAM requerida': '24 GB', 'Comando Ollama': 'ollama run llama4:scout' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas: LLMs locales y el RGPD',
        faqs: [
          {
            q: '¿Usar un LLM local significa que no tengo ninguna obligación bajo el RGPD?',
            a: 'No. Las obligaciones del RGPD aplican siempre que proceses datos personales, independientemente de si se usa IA. Un LLM local reduce el riesgo de transferencia del Artículo 44, pero no elimina obligaciones como mantener un registro de tratamientos del Artículo 30, obtener una base legal de tratamiento y garantizar la minimización de datos. Resuelve uno de los problemas más difíciles del RGPD (las transferencias internacionales), no todos.',
          },
          {
            q: '¿Puedo usar Ollama en un entorno corporativo para el cumplimiento del RGPD?',
            a: 'Sí. Ollama es un runtime de inferencia local sin telemetría en la nube para el tráfico de inferencia (consulta la documentación de Ollama para la política de telemetría actual sobre descargas de modelos). En un entorno corporativo: desactiva las actualizaciones automáticas de modelos, documenta la versión de Ollama y los checksums de los modelos en tu registro de tratamientos del Artículo 30, y ejecútalo en un segmento de red aislado. Consulta la <a href="/es/local-llms/qwen-local-gdpr-setup-guide-2026" class="text-primary hover:underline">guía completa de configuración de Qwen para el RGPD</a> para una lista de verificación completa.',
          },
          {
            q: '¿Es suficiente un LLM local para procesar datos médicos o legales bajo el RGPD?',
            a: 'Desde la perspectiva de la ley de transferencias: sí, el procesamiento local elimina el principal obstáculo del RGPD. Aún necesitas satisfacer las bases legales sustantivas para tratar esa categoría de datos (Artículo 9 para datos médicos, Artículo 6 para datos personales generales). Ejecutar un LLM local no sustituye una base legal válida ni una Evaluación de Impacto en la Protección de Datos cuando esta sea necesaria.',
          },
          {
            q: '¿Los pesos de LLMs de código abierto conllevan riesgo RGPD por sus datos de entrenamiento?',
            a: 'Potencialmente. Si un modelo fue entrenado con datos personales obtenidos sin consentimiento (una preocupación común para los primeros LLMs), desplegarlo podría crear responsabilidad indirecta bajo el RGPD. Para uso en producción, prefiere modelos con procedencia documentada de datos de entrenamiento: Qwen 3 (Alibaba Tongyi), Llama 4 (Meta) o Mistral (empresa europea). Evita modelos con datos de entrenamiento no divulgados en entornos de RGPD de alto riesgo.',
          },
        ],
      },
    },
  },
}
