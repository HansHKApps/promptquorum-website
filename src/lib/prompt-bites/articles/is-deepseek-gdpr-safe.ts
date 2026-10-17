import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Privacy & Security',
    heroImage: '/images/is-deepseek-gdpr-safe-overview-hero-en.webp',
    title: 'Is DeepSeek GDPR Safe to Use?',
    dateModified: '2026-10-17',
    seoTitle: 'Is DeepSeek GDPR Compliant? API vs Local Weights 2026',
    metaDescription: 'Is DeepSeek GDPR compliant? The API sends data to China without an EU adequacy decision, and Italy and Berlin acted. Local MIT weights avoid the transfer.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['DeepSeek-R1', 'DeepSeek-V3', 'DeepSeek-V4', 'DeepSeek Coder V2'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'DPOs, CISOs, and developers in GDPR-regulated organisations evaluating DeepSeek',
    parentArticle: '/local-llms/gdpr-llm-risk-comparison-2026',
    siblingBites: ['is-qwen-gdpr-compliant', 'can-local-llm-help-gdpr'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is DeepSeek GDPR safe to use?',
        answer: 'DeepSeek API is among the highest-risk options for GDPR-regulated data: servers are in China, there is no EU adequacy decision for China, and DeepSeek\'s privacy policy states that data is stored in China and may be shared with law enforcement agencies and public authorities. DeepSeek local open-weight models carry a different, much lower risk profile.',
        bullets: [
          'DeepSeek API: servers in China, Chinese state-access laws apply — among the highest risk',
          'No EU adequacy decision for China: SCCs + TIA required, but TIA outcome may be unfavourable',
          'DeepSeek-R1/V3 local weights (MIT): much lower risk if deployed locally without API calls',
        ],
        updatedDate: '2026-10',
      },
      de: { question: 'Ist DeepSeek DSGVO-konform?', answer: 'Die DeepSeek-API gehört zu den DSGVO-riskantesten Optionen für regulierte Daten: Die Server stehen in China, für China gibt es keine EU-Angemessenheitsentscheidung, und die Datenschutzerklärung von DeepSeek nennt China als Speicherort und sieht die Weitergabe an Strafverfolgungs- und andere Behörden vor. Lokale DeepSeek-Open-Weight-Modelle haben ein deutlich anderes, geringeres Risikoprofil.', bullets: ['DeepSeek-API: Server in China, chinesische Staatszugriffsgesetze gelten — gehört zu den höchsten Risiken', 'Keine EU-Angemessenheitsentscheidung für China: SCC + TFA erforderlich, TFA-Ergebnis aber möglicherweise ungünstig', 'DeepSeek-R1/V3 lokale Gewichte (MIT): wesentlich geringeres Risiko bei lokaler Bereitstellung ohne API-Aufrufe'], updatedDate: '2026-10' },
      fr: { question: 'DeepSeek est-il sûr au regard du RGPD ?', answer: 'L\'API DeepSeek figure parmi les options les plus risquées pour les données soumises au RGPD : les serveurs sont en Chine, il n\'existe pas de décision d\'adéquation de l\'UE pour la Chine, et la politique de confidentialité de DeepSeek indique que les données sont stockées en Chine et peuvent être partagées avec les forces de l\'ordre et les autorités publiques. Les modèles DeepSeek open-weight en local ont un profil de risque nettement différent et plus faible.', bullets: ['API DeepSeek : serveurs en Chine, lois chinoises d\'accès de l\'État applicables — parmi les risques les plus élevés', 'Pas de décision d\'adéquation UE pour la Chine : CCT + EIT requis, mais résultat de l\'EIT potentiellement défavorable', 'Poids locaux DeepSeek-R1/V3 (MIT) : risque beaucoup plus faible si déployés localement sans appels API'], updatedDate: '2026-10' },
      ja: { question: 'DeepSeekはGDPR的に安全ですか？', answer: 'DeepSeek APIは、GDPR規制対象データにとって最もリスクの高い選択肢の一つです。サーバーは中国にあり、中国にはEUの十分性認定がなく、DeepSeekのプライバシーポリシーはデータが中国に保存され、法執行機関や公的機関と共有され得ると述べています。ローカルで動かすDeepSeekのオープンウェイトモデルは、リスクプロファイルが大きく異なり、はるかに低リスクです。', bullets: ['DeepSeek API：中国サーバー、中国の国家アクセス関連法が適用——最もリスクが高い部類', '中国のEU十分性認定なし：SCC + TIA必要、ただしTIA結果は不利になる可能性', 'DeepSeek-R1/V3ローカル重み（MIT）：APIコールなしでローカル展開すれば大幅リスク低減'], updatedDate: '2026-10' },
      zh: { question: 'DeepSeek在GDPR方面安全吗？', answer: 'DeepSeek API是GDPR监管数据中风险最高的选项之一：服务器在中国，欧盟没有对中国的充分性认定，且DeepSeek的隐私政策称数据存储在中国，并可能与执法机构和公共机关共享。本地运行的DeepSeek开源权重模型风险状况明显不同且低得多。', bullets: ['DeepSeek API：服务器在中国，适用中国国家调取相关法律——风险最高的选项之一', '中国无欧盟充分性认定：需要SCCs + TIA，但TIA结果可能不利', 'DeepSeek-R1/V3本地权重（MIT）：本地部署无API调用风险大幅降低'], updatedDate: '2026-10' },
      es: { question: '¿Es seguro usar DeepSeek bajo el RGPD?', answer: 'La API de DeepSeek figura entre las opciones de mayor riesgo para datos sujetos al RGPD: los servidores están en China, no existe una decisión de adecuación de la UE para China, y la política de privacidad de DeepSeek indica que los datos se almacenan en China y pueden compartirse con las fuerzas de seguridad y las autoridades públicas. Los modelos de código abierto de DeepSeek ejecutados localmente tienen un perfil de riesgo claramente distinto y más bajo.', bullets: ['API de DeepSeek: servidores en China, se aplican las leyes chinas de acceso estatal — entre los riesgos más altos', 'Sin decisión de adecuación de la UE para China: CCT + EIT requeridas, pero el resultado de la EIT puede ser desfavorable', 'Pesos locales de DeepSeek-R1/V3 (MIT): riesgo mucho menor si se despliegan localmente sin llamadas a la API'], updatedDate: '2026-10' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API is among the highest-risk options for GDPR use: data stored in China, Chinese state-access laws, no EU adequacy decision',
          'Standard Contractual Clauses are technically possible but a Transfer Impact Assessment for China is likely to produce an unfavourable result for sensitive data',
          'DeepSeek open-weight models (R1, V3, V4, Coder V2) are MIT — running them locally carries the same low risk as local Qwen or Llama',
          'For EU-regulated data: avoid the DeepSeek API; use local weights or switch to a model with EU-hosted API options',
        ],
      },
      body1: {
        title: 'Why the DeepSeek API Is High-Risk Under GDPR',
        content: [
          '<strong>Three compounding factors make the DeepSeek API a high-risk option for GDPR-regulated data. First: DeepSeek\'s privacy policy states that personal data is stored in the People\'s Republic of China, so every API call is a GDPR Article 44 third-country transfer. Second: China has no EU adequacy decision (unlike the US, which has the EU-US Data Privacy Framework). Third: Chinese law can oblige organisations to cooperate with state authorities — notably the National Intelligence Law and the Data Security Law, in addition to PIPL — and DeepSeek\'s privacy policy provides for sharing data with law enforcement agencies and public authorities.</strong>',
          'Standard Contractual Clauses are a valid legal mechanism for transfers to China. However, post-Schrems II, organisations must also conduct a Transfer Impact Assessment evaluating whether SCCs provide real protection in practice. For China, the TIA is difficult to pass for sensitive data: Chinese disclosure duties may outweigh contractual protections. The EDPB\'s guidance states that where supplementary measures cannot compensate for deficiencies in the destination country\'s legal framework, the transfer should not go ahead.',
          'This applies to any personal data: HR records, customer information, medical notes, legal correspondence. If your prompts contain any of this, the DeepSeek API creates regulatory exposure that SCCs alone may not cure.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'DeepSeek API is among the highest GDPR risks for LLM use because data is stored in China, where state-access laws may outweigh Standard Contractual Clauses.' },
          { type: 'plain-terms', text: 'Chinese law can require companies to cooperate with the state, and that may outweigh privacy contracts you sign. This means promising to protect EU data with DeepSeek\'s API may not be enforceable in practice.' },
        ],
      },
      body2: {
        title: 'DeepSeek Local Weights — A Completely Different Risk Profile',
        content: [
          '<strong>The open-weight DeepSeek models (R1, V3, V4, Coder V2) are a separate product from the API. R1 and V4 weights are released under the MIT licence (check each model card for its licence) and can be downloaded and run locally with no connection to DeepSeek servers.</strong> Running local weights avoids sending your data to DeepSeek\'s servers, and with it the GDPR Article 44 transfer problem — the same way local Qwen or local Llama does. Other GDPR duties (security, access control, retention) still apply to your own deployment.',
          'Local DeepSeek-R1 7B or 8B runs comfortably via Ollama on a 6–8 GB VRAM GPU. The performance is excellent: R1 is one of the strongest reasoning models available at the 7B tier. For coding tasks, DeepSeek Coder V2 is available in smaller variants. Note that the Ollama tag deepseek-r1:7b is a distilled model based on Qwen, so the MIT licence applies together with the base model\'s licence notice.',
          'The one remaining question for local DeepSeek: model training. DeepSeek has not published full details of what data was used to train these models. For high-assurance environments (healthcare, legal, government), this uncertainty may be relevant even for local deployment. Qwen 3 (Alibaba/Tongyi) and Llama 4 (Meta) provide more transparency about training data provenance.',
          'This page is general information based on publicly documented sources (such as the [DeepSeek privacy policy](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html), version of 10 February 2026, and regulator press releases), not legal advice. The risk comparison is PromptQuorum\'s editorial assessment, not a ranking by a data protection authority. Have your data protection officer or a qualified lawyer assess your specific case.',
        ],
        columns: ['Deployment', 'GDPR Risk', 'Reason', 'Recommended Action'],
        rows: [
          { 'Deployment': 'DeepSeek API', 'GDPR Risk': 'Highest', 'Reason': 'Chinese servers, PIPL, no adequacy decision', 'Recommended Action': 'Avoid for personal or sensitive data' },
          { 'Deployment': 'DeepSeek local (R1/V3)', 'GDPR Risk': 'Low', 'Reason': 'No transfer, MIT weights', 'Recommended Action': 'Acceptable; note training-data opacity' },
          { 'Deployment': 'Qwen local (2.5/3)', 'GDPR Risk': 'Low', 'Reason': 'No transfer, Apache 2.0 (most sizes), published training info', 'Recommended Action': 'Recommended for data-sensitive use' },
          { 'Deployment': 'Claude / OpenAI API', 'GDPR Risk': 'Medium', 'Reason': 'US jurisdiction; EU region reduces but doesn\'t eliminate risk', 'Recommended Action': 'SCCs + DPA required; EU region preferred' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers: DeepSeek and GDPR',
        faqs: [
          {
            q: 'Can I use DeepSeek API with Standard Contractual Clauses for GDPR?',
            a: 'Technically yes — you can sign SCCs with DeepSeek\'s data controller entity. However, you must also complete a Transfer Impact Assessment evaluating whether Chinese law undermines those SCCs in practice. Given China\'s PIPL obligations on data disclosure, a TIA for sensitive personal data is likely to conclude that SCCs are not sufficient. For non-personal data (code, public text), the risk is lower.',
          },
          {
            q: 'Is DeepSeek-R1 the same as the DeepSeek API?',
            a: 'No. DeepSeek-R1 refers to the open-weight model released on Hugging Face under the MIT licence. The DeepSeek API ([api.deepseek.com](https://api.deepseek.com)) is a separate cloud service with servers in China. The GDPR transfer risk applies to the API, not to the weights. Running R1 locally via Ollama (<code>ollama run deepseek-r1:7b</code>) does not send your prompts to DeepSeek\'s servers. Note that the deepseek-r1:7b tag is a distilled model based on Qwen, so the MIT licence applies together with the base model\'s licence notice.',
          },
          {
            q: 'What is the PIPL and why does it matter for GDPR?',
            a: 'China\'s Personal Information Protection Law (PIPL), effective November 2021, regulates how personal information is processed and transferred. Disclosure duties towards state authorities come from several laws — notably the National Intelligence Law (2017) and the Data Security Law (2021) — which oblige organisations and citizens to support state work. In practice, DeepSeek, as a company operating in China, may therefore be required to hand over data processed through its API. SCCs cannot override a mandatory disclosure obligation in the destination country\'s law. This is a core reason EU data protection authorities treat transfers to China with caution.',
          },
          {
            q: 'Which LLM is safest for GDPR-regulated data?',
            a: 'For maximum GDPR safety: any local open-weight model (Qwen 3, Llama 4, DeepSeek-R1 local) running offline with no external API calls. Among these, Qwen 3 and Llama 4 have more transparent training data provenance. See the <a href="/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">full GDPR LLM risk comparison</a> for a structured decision tool.',
          },
          {
            q: 'Have EU data protection authorities acted against DeepSeek?',
            a: 'Yes. In January 2025, Italy\'s data protection authority (the Garante) ordered a limitation on processing of Italian users\' data by DeepSeek. On 27 June 2025, the Berlin Data Protection Commissioner reported the DeepSeek app to Apple and Google as unlawful content because of the transfer of users\' personal data to China ([press release](https://www.datenschutz-berlin.de/pressemitteilungen/)). These actions concern the DeepSeek app and API, not open weights run locally. Chinese government access is not based on PIPL alone: the National Intelligence Law and the Data Security Law also contain cooperation and disclosure duties, and a Transfer Impact Assessment has to weigh them.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Privacy & Security',
    heroImage: '/images/is-deepseek-gdpr-safe-overview-hero-de.webp',
    title: 'Ist DeepSeek DSGVO-sicher?',
    seoTitle: 'Ist DeepSeek DSGVO-konform?',
    metaDescription: 'Ist DeepSeek DSGVO-konform? API-Daten gehen nach China ohne Angemessenheitsbeschluss; Italien und Berlin griffen ein. Lokale MIT-Gewichte vermeiden den Transfer.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'Ist DeepSeek DSGVO-sicher?',
        answer: 'Die DeepSeek-API gehört zu den DSGVO-riskantesten Optionen für regulierte Daten: Die Server stehen in China, für China gibt es keine EU-Angemessenheitsentscheidung, und die Datenschutzerklärung von DeepSeek nennt China als Speicherort und sieht die Weitergabe an Strafverfolgungs- und andere Behörden vor. Lokale DeepSeek-Open-Weight-Modelle haben ein deutlich anderes, geringeres Risikoprofil.',
        bullets: [
          'DeepSeek-API: Server in China, chinesische Staatszugriffsgesetze gelten — gehört zu den höchsten Risiken',
          'Keine EU-Angemessenheitsentscheidung: SCC + TFA erforderlich, Ergebnis für sensible Daten wahrscheinlich ungünstig',
          'Lokale DeepSeek-R1/V3 Gewichte (MIT): wesentlich geringeres Risiko ohne API-Aufrufe',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Die DeepSeek-API gehört zu den DSGVO-riskantesten Optionen: Datenspeicherung in China, chinesische Staatszugriffsgesetze, keine EU-Angemessenheitsentscheidung',
          'SCC sind technisch möglich, aber eine Transferfolgenabschätzung für China wird für sensible Daten wahrscheinlich ein ungünstiges Ergebnis liefern',
          'DeepSeek-Open-Weight-Modelle (R1, V3, V4, Coder V2) sind MIT — lokal betrieben haben sie dasselbe geringe Risiko wie lokales Qwen oder Llama',
          'Für EU-regulierte Daten: DeepSeek-API vermeiden; lokale Gewichte nutzen oder auf ein Modell mit EU-gehosteten API-Optionen umsteigen',
        ],
      },
      body1: {
        title: 'Warum die DeepSeek-API unter der DSGVO hohes Risiko birgt',
        content: [
          '<strong>Drei kumulative Faktoren machen die DeepSeek-API zu einer Hochrisiko-Option für DSGVO-regulierte Daten. Erstens: Laut Datenschutzerklärung von DeepSeek werden personenbezogene Daten in der Volksrepublik China gespeichert, sodass jeder API-Aufruf ein Drittlandtransfer nach Art. 44 DSGVO ist. Zweitens: China hat keine EU-Angemessenheitsentscheidung (anders als die USA mit dem EU-US Data Privacy Framework). Drittens: Chinesisches Recht kann Organisationen zur Zusammenarbeit mit staatlichen Stellen verpflichten – insbesondere das Nachrichtendienstgesetz und das Datensicherheitsgesetz, neben PIPL – und die Datenschutzerklärung von DeepSeek sieht die Weitergabe an Strafverfolgungs- und andere Behörden vor.</strong>',
          'Standardvertragsklauseln sind ein gültiger rechtlicher Mechanismus für Transfers nach China. Nach Schrems II müssen Organisationen jedoch auch eine Transferfolgenabschätzung durchführen, die bewertet, ob SCC in der Praxis wirksamen Schutz bieten. Für China ist die TFA für sensible Daten schwer zu bestehen: Chinesische Offenlegungspflichten können vertragliche Schutzmaßnahmen überwiegen. Nach den EDSA-Leitlinien darf ein Transfer nicht erfolgen, wenn ergänzende Maßnahmen Mängel im Rechtsrahmen des Ziellands nicht ausgleichen können.',
          'Dies gilt für alle personenbezogenen Daten: HR-Unterlagen, Kundendaten, medizinische Notizen, rechtliche Korrespondenz. Falls Ihre Prompts derartige Daten enthalten, schafft die DeepSeek-API regulatorisches Risiko, das SCC allein möglicherweise nicht heilen kann.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Die DeepSeek-API gehört zu den DSGVO-riskantesten LLM-Optionen, weil die Daten in China gespeichert werden, wo staatliche Zugriffsrechte Standardvertragsklauseln überwiegen können.' },
          { type: 'plain-terms', text: 'Chinesisches Recht kann Unternehmen zur Zusammenarbeit mit dem Staat verpflichten, und das kann Datenschutzverträge überwiegen, die Sie abschließen. Datenschutzzusagen für EU-Daten bei der DeepSeek-API sind daher in der Praxis möglicherweise nicht durchsetzbar.' },
        ],
      },
      body2: {
        title: 'Lokale DeepSeek-Gewichte — ein völlig anderes Risikoprofil',
        content: [
          '<strong>Die Open-Weight-DeepSeek-Modelle (R1, V3, V4, Coder V2) sind ein separates Produkt von der API. Die R1- und V4-Gewichte stehen unter der MIT-Lizenz (Lizenz je Modellkarte prüfen) und können ohne Verbindung zu DeepSeek-Servern lokal ausgeführt werden.</strong> Lokale Gewichte vermeiden die Übermittlung Ihrer Daten an DeepSeek-Server und damit das Art.-44-Transferproblem – genau wie lokales Qwen oder Llama. Weitere DSGVO-Pflichten (Sicherheit, Zugriffskontrolle, Aufbewahrung) gelten für Ihren eigenen Betrieb weiterhin.',
          'Lokales DeepSeek-R1 7B oder 8B läuft komfortabel über Ollama auf einer 6–8 GB VRAM GPU. R1 ist eines der stärksten Reasoning-Modelle auf dem 7B-Tier. Für Coding-Aufgaben ist DeepSeek Coder V2 in kleineren Varianten verfügbar. Hinweis: Das Ollama-Tag deepseek-r1:7b ist ein destilliertes Modell auf Qwen-Basis; es gilt die MIT-Lizenz zusammen mit dem Lizenzhinweis des Basismodells.',
          'Die verbleibende Frage für lokales DeepSeek: Model-Training. DeepSeek hat keine vollständigen Details zu den Trainingsdaten veröffentlicht. Für hochsichere Umgebungen (Gesundheitswesen, Recht, Behörden) kann diese Unklarheit relevant sein. Qwen 3 und Llama 4 bieten mehr Transparenz bei der Herkunft der Trainingsdaten.',
          'Diese Seite bietet allgemeine Informationen auf Grundlage öffentlich dokumentierter Quellen (z. B. der [Datenschutzerklärung von DeepSeek](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html), Stand 10. Februar 2026, und Pressemitteilungen von Aufsichtsbehörden) und stellt keine Rechtsberatung dar. Der Risikovergleich ist eine redaktionelle Einschätzung von PromptQuorum, kein Ranking einer Datenschutzbehörde. Lassen Sie Ihren konkreten Fall von Ihrem Datenschutzbeauftragten oder einer Rechtsanwältin bzw. einem Rechtsanwalt prüfen.',
        ],
        columns: ['Bereitstellung', 'DSGVO-Risiko', 'Begründung', 'Empfohlene Maßnahme'],
        rows: [
          { 'Bereitstellung': 'DeepSeek-API', 'DSGVO-Risiko': 'Höchstes', 'Begründung': 'Chinesische Server, PIPL, keine Angemessenheitsentscheidung', 'Empfohlene Maßnahme': 'Für personenbezogene oder sensible Daten vermeiden' },
          { 'Bereitstellung': 'DeepSeek lokal (R1/V3)', 'DSGVO-Risiko': 'Niedrig', 'Begründung': 'Kein Transfer, MIT-Gewichte', 'Empfohlene Maßnahme': 'Akzeptabel; Intransparenz bei Trainingsdaten beachten' },
          { 'Bereitstellung': 'Qwen lokal (2.5/3)', 'DSGVO-Risiko': 'Niedrig', 'Begründung': 'Kein Transfer, Apache 2.0 (die meisten Größen), veröffentlichte Trainingsdaten-Info', 'Empfohlene Maßnahme': 'Für datensensible Nutzung empfohlen' },
          { 'Bereitstellung': 'Claude / OpenAI API', 'DSGVO-Risiko': 'Mittel', 'Begründung': 'US-Jurisdiktion; EU-Region reduziert aber eliminiert nicht das Risiko', 'Empfohlene Maßnahme': 'SCC + AVV erforderlich; EU-Region bevorzugen' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten: DeepSeek und DSGVO',
        faqs: [
          {
            q: 'Kann ich die DeepSeek-API mit Standardvertragsklauseln für die DSGVO nutzen?',
            a: 'Technisch ja — Sie können SCC mit DeepSeeks Datenverantwortlichem abschließen. Sie müssen jedoch auch eine Transferfolgenabschätzung durchführen, die bewertet, ob chinesisches Recht diese SCC in der Praxis untergräbt. Angesichts der PIPL-Offenlegungspflichten wird eine TFA für sensible personenbezogene Daten wahrscheinlich zu dem Schluss kommen, dass SCC nicht ausreichen.',
          },
          {
            q: 'Was ist PIPL und warum ist es für die DSGVO relevant?',
            a: 'Chinas Datenschutzgesetz für personenbezogene Informationen (PIPL, in Kraft seit November 2021) regelt die Verarbeitung und Übermittlung personenbezogener Daten. Offenlegungspflichten gegenüber staatlichen Stellen ergeben sich aus mehreren Gesetzen – insbesondere dem Nachrichtendienstgesetz (2017) und dem Datensicherheitsgesetz (2021), die Organisationen und Bürger zur Unterstützung staatlicher Arbeit verpflichten. In der Praxis kann DeepSeek als in China tätiges Unternehmen daher verpflichtet sein, über die API verarbeitete Daten herauszugeben. SCC können eine zwingende Offenlegungspflicht im Recht des Ziellands nicht außer Kraft setzen. Das ist ein Hauptgrund, warum EU-Datenschutzbehörden Transfers nach China mit Vorsicht behandeln.',
          },
          {
            q: 'Welches LLM ist für DSGVO-regulierte Daten am sichersten?',
            a: 'Für maximale DSGVO-Sicherheit: jedes lokale Open-Weight-Modell (Qwen 3, Llama 4, DeepSeek-R1 lokal), das offline ohne externe API-Aufrufe läuft. Qwen 3 und Llama 4 haben transparentere Trainingsdatenherkunft. Den vollständigen Vergleich finden Sie im <a href="/de/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">vollständigen DSGVO-LLM-Risikoausblick</a>.',
          },
          {
            q: 'Ist DeepSeek-R1 dasselbe wie die DeepSeek-API?',
            a: 'Nein. DeepSeek-R1 bezeichnet das Open-Weight-Modell auf Hugging Face unter MIT-Lizenz. Die DeepSeek-API ([api.deepseek.com](https://api.deepseek.com)) ist ein separater Cloud-Dienst mit Servern in China. Das DSGVO-Transferrisiko betrifft die API, nicht die Gewichte. Wird R1 lokal über Ollama (<code>ollama run deepseek-r1:7b</code>) ausgeführt, werden Ihre Prompts nicht an DeepSeek-Server gesendet. Beachten Sie: Das Tag deepseek-r1:7b ist ein destilliertes Modell auf Qwen-Basis; es gilt die MIT-Lizenz zusammen mit dem Lizenzhinweis des Basismodells.',
          },
          {
            q: 'Sind EU-Datenschutzbehörden gegen DeepSeek vorgegangen?',
            a: 'Ja. Im Januar 2025 ordnete die italienische Datenschutzbehörde (Garante) eine Beschränkung der Verarbeitung von Daten italienischer Nutzer durch DeepSeek an. Am 27. Juni 2025 meldete die Berliner Datenschutzbeauftragte die DeepSeek-App bei Apple und Google als rechtswidrigen Inhalt, weil personenbezogene Daten von Nutzern nach China übermittelt werden ([Pressemitteilung](https://www.datenschutz-berlin.de/pressemitteilungen/)). Diese Maßnahmen betreffen die DeepSeek-App und -API, nicht lokal betriebene Open-Weight-Modelle. Staatlicher Zugriff in China beruht nicht nur auf PIPL: Auch das Nachrichtendienstgesetz und das Datensicherheitsgesetz enthalten Mitwirkungs- und Offenlegungspflichten, die eine Transferfolgenabschätzung berücksichtigen muss.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Privacy & Security',
    heroImage: '/images/is-deepseek-gdpr-safe-overview-hero-fr.webp',
    title: 'DeepSeek est-il sûr au regard du RGPD ?',
    seoTitle: 'DeepSeek sûr pour le RGPD 2026 ? | Prompt Bites | PromptQuorum',
    metaDescription: 'DeepSeek est-il conforme au RGPD ? L\'API envoie les données en Chine sans décision d\'adéquation ; Italie et Berlin sont intervenues. Les poids MIT locaux évitent ce transfert.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'DeepSeek est-il sûr au regard du RGPD ?',
        answer: 'L\'API DeepSeek figure parmi les options les plus risquées pour les données soumises au RGPD : les serveurs sont en Chine, il n\'existe pas de décision d\'adéquation de l\'UE pour la Chine, et la politique de confidentialité de DeepSeek indique que les données sont stockées en Chine et peuvent être partagées avec les forces de l\'ordre et les autorités publiques. Les modèles DeepSeek open-weight en local ont un profil de risque nettement différent et plus faible.',
        bullets: [
          'API DeepSeek : serveurs en Chine, lois chinoises d\'accès de l\'État applicables — parmi les risques les plus élevés',
          'Pas de décision d\'adéquation UE pour la Chine : CCT + EIT requis, résultat potentiellement défavorable',
          'Poids DeepSeek-R1/V3 en local (MIT) : risque bien plus faible sans appels API',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'L\'API DeepSeek figure parmi les options les plus risquées pour le RGPD : données stockées en Chine, lois chinoises d\'accès de l\'État, pas de décision d\'adéquation UE',
          'Les CCT sont techniquement possibles mais une EIT pour la Chine aboutira probablement à un résultat défavorable pour les données sensibles',
          'Les modèles open-weight DeepSeek (R1, V3, V4, Coder V2) sont MIT — en local, risque aussi faible que Qwen ou Llama local',
          'Pour les données réglementées UE : éviter l\'API DeepSeek ; utiliser les poids locaux ou un modèle avec des options API hébergées en UE',
        ],
      },
      body1: {
        title: 'Pourquoi l\'API DeepSeek est à haut risque sous le RGPD',
        content: [
          '<strong>Trois facteurs cumulatifs font de l\'API DeepSeek une option à haut risque pour les données réglementées RGPD. Premièrement : selon la politique de confidentialité de DeepSeek, les données personnelles sont stockées en République populaire de Chine, ce qui fait de chaque appel API un transfert vers un pays tiers selon l\'article 44 du RGPD. Deuxièmement : la Chine n\'a pas de décision d\'adéquation UE (contrairement aux États-Unis, avec le EU-US Data Privacy Framework). Troisièmement : le droit chinois peut obliger les organisations à coopérer avec les autorités de l\'État — notamment la loi sur le renseignement national et la loi sur la sécurité des données, en plus de la PIPL — et la politique de confidentialité de DeepSeek prévoit un partage avec les forces de l\'ordre et les autorités publiques.</strong>',
          'Les CCT sont un mécanisme juridique valide pour les transferts vers la Chine. Cependant, post-Schrems II, les organisations doivent aussi conduire une EIT évaluant si les CCT fournissent une protection réelle en pratique. Pour la Chine, l\'EIT est difficile à valider pour les données sensibles : les obligations chinoises de divulgation peuvent l\'emporter sur les protections contractuelles. Selon les lignes directrices du CEPD, le transfert ne doit pas avoir lieu lorsque des mesures supplémentaires ne peuvent pas compenser les lacunes du cadre juridique du pays de destination.',
          'Cela s\'applique à toutes les données personnelles : dossiers RH, données clients, notes médicales, correspondance juridique. Si vos prompts contiennent ces données, l\'API DeepSeek crée une exposition réglementaire que les CCT seules peuvent ne pas résoudre.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'L\'API DeepSeek figure parmi les risques RGPD les plus élevés pour un LLM, car les données sont stockées en Chine, où les droits d\'accès de l\'État peuvent l\'emporter sur les clauses contractuelles types.' },
          { type: 'plain-terms', text: 'Le droit chinois peut obliger les entreprises à coopérer avec l\'État, ce qui peut l\'emporter sur les contrats de confidentialité que vous signez. Les promesses de protection des données UE avec l\'API DeepSeek peuvent donc ne pas être opposables en pratique.' },
        ],
      },
      body2: {
        title: 'Poids locaux DeepSeek — un profil de risque totalement différent',
        content: [
          '<strong>Les modèles DeepSeek open-weight (R1, V3, V4, Coder V2) sont un produit distinct de l\'API. Les poids R1 et V4 sont publiés sous licence MIT (vérifier la licence sur chaque fiche modèle) et peuvent être exécutés localement sans connexion aux serveurs DeepSeek.</strong> L\'exécution locale évite d\'envoyer vos données aux serveurs DeepSeek, et donc le problème de transfert de l\'article 44 du RGPD — comme avec Qwen ou Llama en local. Les autres obligations RGPD (sécurité, contrôle d\'accès, conservation) continuent de s\'appliquer à votre propre déploiement.',
          'DeepSeek-R1 7B ou 8B en local tourne confortablement via Ollama sur un GPU 6–8 Go de VRAM. R1 est l\'un des meilleurs modèles de raisonnement disponibles au tier 7B. Pour les tâches de code, DeepSeek Coder V2 est disponible en variantes plus compactes. Remarque : le tag Ollama deepseek-r1:7b est un modèle distillé basé sur Qwen ; la licence MIT s\'applique avec la mention de licence du modèle de base.',
          'Question résiduelle pour DeepSeek local : la formation du modèle. DeepSeek n\'a pas publié les détails complets des données d\'entraînement. Pour les environnements à haute assurance (santé, juridique, gouvernement), cette incertitude peut être pertinente. Qwen 3 et Llama 4 offrent plus de transparence sur la provenance des données d\'entraînement.',
          'Cette page fournit des informations générales fondées sur des sources publiques (par exemple la [politique de confidentialité de DeepSeek](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html), version du 10 février 2026, et des communiqués d\'autorités de contrôle) et ne constitue pas un conseil juridique. La comparaison des risques est une appréciation éditoriale de PromptQuorum, et non un classement établi par une autorité de protection des données. Faites évaluer votre situation par votre délégué à la protection des données ou un avocat.',
        ],
        columns: ['Déploiement', 'Risque RGPD', 'Raison', 'Action recommandée'],
        rows: [
          { 'Déploiement': 'API DeepSeek', 'Risque RGPD': 'Le plus élevé', 'Raison': 'Serveurs chinois, PIPL, pas de décision d\'adéquation', 'Action recommandée': 'Éviter pour données personnelles ou sensibles' },
          { 'Déploiement': 'DeepSeek local (R1/V3)', 'Risque RGPD': 'Faible', 'Raison': 'Pas de transfert, poids MIT', 'Action recommandée': 'Acceptable ; noter l\'opacité des données d\'entraînement' },
          { 'Déploiement': 'Qwen local (2.5/3)', 'Risque RGPD': 'Faible', 'Raison': 'Pas de transfert, Apache 2.0 (la plupart des tailles), info formation publiée', 'Action recommandée': 'Recommandé pour usage data-sensible' },
          { 'Déploiement': 'Claude / OpenAI API', 'Risque RGPD': 'Moyen', 'Raison': 'Juridiction US ; région UE réduit sans éliminer le risque', 'Action recommandée': 'CCT + DPA requis ; région UE préférée' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides : DeepSeek et RGPD',
        faqs: [
          {
            q: 'Puis-je utiliser l\'API DeepSeek avec des CCT pour le RGPD ?',
            a: 'Techniquement oui — vous pouvez signer des CCT avec l\'entité responsable de traitement de DeepSeek. Cependant, vous devez aussi conduire une EIT évaluant si la loi chinoise compromet ces CCT en pratique. Compte tenu des obligations PIPL de divulgation de données, une EIT pour des données personnelles sensibles aboutira probablement à la conclusion que les CCT ne sont pas suffisantes.',
          },
          {
            q: 'Qu\'est-ce que PIPL et pourquoi est-ce important pour le RGPD ?',
            a: 'La loi chinoise sur la protection des informations personnelles (PIPL, en vigueur depuis novembre 2021) encadre le traitement et le transfert des informations personnelles. Les obligations de divulgation envers les autorités de l\'État découlent de plusieurs lois — notamment la loi sur le renseignement national (2017) et la loi sur la sécurité des données (2021) — qui obligent organisations et citoyens à soutenir le travail de l\'État. En pratique, DeepSeek, entreprise opérant en Chine, peut donc être tenue de remettre des données traitées via son API. Les CCT ne peuvent pas neutraliser une obligation de divulgation impérative du droit du pays de destination. C\'est l\'une des raisons pour lesquelles les autorités de protection des données de l\'UE traitent les transferts vers la Chine avec prudence.',
          },
          {
            q: 'Quel LLM est le plus sûr pour les données réglementées RGPD ?',
            a: 'Pour une sécurité RGPD maximale : tout modèle open-weight local (Qwen 3, Llama 4, DeepSeek-R1 local) fonctionnant hors ligne sans appels API externes. Qwen 3 et Llama 4 ont une provenance de données d\'entraînement plus transparente. Consultez la <a href="/fr/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">comparaison complète des risques RGPD des LLMs</a>.',
          },
          {
            q: 'DeepSeek-R1 est-il identique à l\'API DeepSeek ?',
            a: 'Non. DeepSeek-R1 désigne le modèle open-weight publié sur Hugging Face sous licence MIT. L\'API DeepSeek ([api.deepseek.com](https://api.deepseek.com)) est un service cloud distinct dont les serveurs sont en Chine. Le risque de transfert RGPD concerne l\'API, pas les poids. Exécuter R1 en local via Ollama (<code>ollama run deepseek-r1:7b</code>) n\'envoie pas vos prompts aux serveurs DeepSeek. Attention : le tag deepseek-r1:7b est un modèle distillé basé sur Qwen ; la licence MIT s\'applique avec la mention de licence du modèle de base.',
          },
          {
            q: 'Des autorités de protection des données de l\'UE ont-elles agi contre DeepSeek ?',
            a: 'Oui. En janvier 2025, l\'autorité italienne de protection des données (le Garante) a ordonné une limitation du traitement des données des utilisateurs italiens par DeepSeek. Le 27 juin 2025, la commissaire berlinoise à la protection des données a signalé l\'application DeepSeek à Apple et Google comme contenu illicite, en raison du transfert de données personnelles d\'utilisateurs vers la Chine ([communiqué](https://www.datenschutz-berlin.de/pressemitteilungen/)). Ces mesures visent l\'application et l\'API DeepSeek, pas les poids ouverts exécutés en local. L\'accès des autorités chinoises ne repose pas sur la seule loi PIPL : la loi sur le renseignement national et la loi sur la sécurité des données contiennent aussi des obligations de coopération et de divulgation, que l\'analyse d\'impact du transfert doit évaluer.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Privacy & Security',
    heroImage: '/images/is-deepseek-gdpr-safe-overview-hero-ja.webp',
    title: 'DeepSeekはGDPR的に安全ですか？',
    seoTitle: 'DeepSeekはGDPR安全？2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'DeepSeekはGDPR準拠？APIはEU十分性認定のない中国へデータを送り、イタリアとベルリンが措置を取りました。ローカルのMIT重みなら移転を避けられます。',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: 'DeepSeekはGDPR的に安全ですか？',
        answer: 'DeepSeek APIは、GDPR規制対象データにとって最もリスクの高い選択肢の一つです。サーバーは中国にあり、中国にはEUの十分性認定がなく、DeepSeekのプライバシーポリシーはデータが中国に保存され、法執行機関や公的機関と共有され得ると述べています。ローカルで動かすDeepSeekのオープンウェイトモデルは、リスクプロファイルが大きく異なり、はるかに低リスクです。',
        bullets: [
          'DeepSeek API：中国サーバー、中国の国家アクセス関連法が適用——最もリスクが高い部類',
          '中国のEU十分性認定なし：SCC + TIA必要、感度データへの結果は不利になる可能性',
          'DeepSeek-R1/V3ローカル重み（MIT）：APIなしでローカル展開すればリスク大幅低減',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek APIはGDPR上、最もリスクの高い選択肢の一つ：中国でのデータ保存、中国の国家アクセス関連法、EU十分性認定なし',
          'SCCは技術的に可能だが、中国のTIAは感度データに不利な結果をもたらす可能性が高い',
          'DeepSeekオープンウェイトモデル（R1、V3、V4、Coder V2）はMIT——ローカル実行ならQwenやLlamaと同様の低リスク',
          'EU規制対象データ：DeepSeek APIを避け、ローカル重みかEUホストAPIのあるモデルに切り替える',
        ],
      },
      body1: {
        title: 'DeepSeek APIがGDPR下で高リスクな理由',
        content: [
          '<strong>3つの累積的要因により、DeepSeek APIはGDPR規制データにとって高リスクの選択肢になります。第一：DeepSeekのプライバシーポリシーによれば個人データは中華人民共和国内に保存されるため、すべてのAPI呼び出しがGDPR第44条の第三国移転になります。第二：中国にはEUの十分性認定がありません（EU-USデータプライバシーフレームワークのある米国とは異なります）。第三：中国法は、PIPLに加えて特に国家情報法とデータセキュリティ法により、組織に国家機関への協力を義務付けることがあり、DeepSeekのプライバシーポリシーも法執行機関や公的機関との共有を認めています。</strong>',
          '中国への移転にはSCCが有効な法的手段です。ただしSchrems II以降、組織はSCCが実際に保護を提供するかどうかを評価するTIAも実施する必要があります。中国では、中国法上の開示義務が契約上の保護に優越し得るため、機微データについてTIAを通過することは困難です。EDPBのガイダンスは、補完的措置が移転先国の法的枠組みの欠陥を補えない場合、移転を行うべきではないとしています。',
          'これはすべての個人データ（HR記録、顧客情報、医療ノート、法的書類）に適用されます。プロンプトにこれらのデータが含まれている場合、DeepSeek APIはSCCだけでは解決できない規制上のリスクを生じさせます。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'DeepSeek APIは、データが中国に保存され、国家のアクセス権がSCCに優越し得るため、LLM利用におけるGDPRリスクが最も高い部類に入ります。' },
          { type: 'plain-terms', text: '中国法は企業に国家への協力を義務付けることがあり、それが締結したプライバシー契約に優越し得ます。そのため、DeepSeek APIでEUデータを保護するという約束は、実際には執行できない可能性があります。' },
        ],
      },
      body2: {
        title: 'ローカルDeepSeek重み——まったく異なるリスクプロファイル',
        content: [
          '<strong>DeepSeekオープンウェイトモデル（R1、V3、V4、Coder V2）はAPIとは別製品です。R1とV4の重みはMITライセンスで公開されており（ライセンスは各モデルカードで確認）、DeepSeekサーバーへの接続なしにローカル実行できます。</strong>ローカルで重みを実行すればDeepSeekのサーバーへデータを送らずに済み、GDPR第44条の移転問題も避けられます——ローカルのQwenやLlamaと同様です。セキュリティ、アクセス管理、保存期間など、その他のGDPR上の義務は自社の運用に引き続き適用されます。',
          'ローカルDeepSeek-R1 7BまたはBは6〜8 GB VRAM GPUでOllama経由で快適に動作します。R1は7Bティアで最高の推論モデルの一つです。コーディングタスクにはDeepSeek Coder V2の小型バリアントが利用可能です。なお、Ollamaのタグdeepseek-r1:7bはQwenをベースにした蒸留モデルであり、MITライセンスはベースモデルのライセンス表示とあわせて適用されます。',
          'ローカルDeepSeekの残る問題：モデル訓練。DeepSeekは訓練データの詳細を完全には公開していません。医療・法務・政府などの高保証環境では、この不確実性はローカル展開でも関連性を持つ場合があります。Qwen 3とLlama 4は訓練データの出所についてより透明です。',
          'このページは公開情報（例：[DeepSeekのプライバシーポリシー](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html)（2026年2月10日版）や監督当局の発表）に基づく一般的な情報であり、法的助言ではありません。リスク比較はPromptQuorum編集部の評価であり、データ保護当局によるランキングではありません。個別のケースについては、データ保護責任者または弁護士にご確認ください。',
        ],
        columns: ['展開方法', 'GDPRリスク', '理由', '推奨アクション'],
        rows: [
          { '展開方法': 'DeepSeek API', 'GDPRリスク': '最高', '理由': '中国サーバー、PIPL、十分性認定なし', '推奨アクション': '個人・機密データには使用を避ける' },
          { '展開方法': 'DeepSeek ローカル（R1/V3）', 'GDPRリスク': '低', '理由': '転送なし、MIT重み', '推奨アクション': '許容可能；訓練データの不透明性に注意' },
          { '展開方法': 'Qwen ローカル（2.5/3）', 'GDPRリスク': '低', '理由': '転送なし、Apache 2.0（ほとんどのサイズ）、訓練情報公開済み', '推奨アクション': 'データ機密用途に推奨' },
          { '展開方法': 'Claude / OpenAI API', 'GDPRリスク': '中', '理由': 'US管轄；EUリージョンはリスクを軽減するが排除しない', '推奨アクション': 'SCC + DPA必要；EUリージョン推奨' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'DeepSeekとGDPRに関するよくある質問',
        faqs: [
          {
            q: 'GDPRのためにSCCでDeepSeek APIを使用できますか？',
            a: '技術的には可能です——DeepSeekのデータ管理者エンティティとSCCを締結できます。ただし、中国法がそれらのSCCを実際に損なうかどうかを評価するTIAも実施する必要があります。PILPのデータ開示義務を考えると、感度個人データのTIAはSCCが不十分との結論を出す可能性が高いです。',
          },
          {
            q: 'PILPとは何ですか？なぜGDPRにとって重要ですか？',
            a: '中国の個人情報保護法（PIPL、2021年11月施行）は、個人情報の処理と移転を規律します。国家機関への開示義務は複数の法律に由来し、特に国家情報法（2017年）とデータセキュリティ法（2021年）は、組織や市民に国家の活動への協力を義務付けています。実際には、中国で事業を行うDeepSeekは、API経由で処理されたデータの提出を求められる可能性があります。SCCは、移転先国の法律上の強制的な開示義務を覆すことはできません。これが、EUのデータ保護当局が中国への移転を慎重に扱う主な理由の一つです。',
          },
          {
            q: 'GDPR規制対象データに最も安全なLLMはどれですか？',
            a: 'GDPR最大安全を求めるなら：外部APIなしでオフライン動作するローカルオープンウェイトモデル（Qwen 3、Llama 4、DeepSeek R1ローカル）。Qwen 3とLlama 4は訓練データの出所が透明です。構造化された決定ツールについては<a href="/ja/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">GDPR LLMリスク比較全文</a>を参照してください。',
          },
          {
            q: 'DeepSeek R1はDeepSeek APIと同じものですか？',
            a: 'いいえ。DeepSeek R1は、MITライセンスでHugging Faceに公開されているオープンウェイトモデルを指します。DeepSeek API（[api.deepseek.com](https://api.deepseek.com)）は、サーバーが中国にある別のクラウドサービスです。GDPRの移転リスクはAPIに関するもので、重みには当てはまりません。OllamaでR1をローカル実行（<code>ollama run deepseek-r1:7b</code>）しても、プロンプトはDeepSeekのサーバーに送信されません。なお、deepseek-r1:7bタグはQwenベースの蒸留モデルで、MITライセンスはベースモデルのライセンス表示とあわせて適用されます。',
          },
          {
            q: 'EUのデータ保護当局はDeepSeekに対して措置を取りましたか？',
            a: 'はい。2025年1月、イタリアのデータ保護当局（Garante）は、DeepSeekによるイタリア利用者のデータ処理の制限を命じました。2025年6月27日には、ベルリンのデータ保護監督官が、利用者の個人データが中国へ移転されているとして、DeepSeekアプリを違法コンテンツとしてAppleとGoogleに通報しました（[プレスリリース](https://www.datenschutz-berlin.de/pressemitteilungen/)）。これらの措置の対象はDeepSeekのアプリとAPIであり、ローカルで実行するオープンウェイトではありません。中国政府によるアクセスの根拠はPIPLだけではなく、国家情報法やデータセキュリティ法にも協力・開示義務があり、移転影響評価（TIA）ではこれらを考慮する必要があります。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Privacy & Security',
    heroImage: '/images/is-deepseek-gdpr-safe-overview-hero-zh.webp',
    title: 'DeepSeek在GDPR方面安全吗？',
    seoTitle: 'DeepSeek符合GDPR安全标准吗？2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'DeepSeek符合GDPR吗？API将数据发往无欧盟充分性认定的中国，意大利和柏林已采取行动。本地MIT权重可避免该传输。',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: 'DeepSeek在GDPR方面安全吗？',
        answer: 'DeepSeek API是GDPR监管数据中风险最高的选项之一：服务器在中国，欧盟没有对中国的充分性认定，且DeepSeek的隐私政策称数据存储在中国，并可能与执法机构和公共机关共享。本地运行的DeepSeek开源权重模型风险状况明显不同且低得多。',
        bullets: [
          'DeepSeek API：服务器在中国，适用中国国家调取相关法律——风险最高的选项之一',
          '中国无欧盟充分性认定：需要SCCs + TIA，敏感数据结果可能不利',
          'DeepSeek-R1/V3本地权重（MIT）：无API调用本地部署风险大幅降低',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API是GDPR风险最高的选项之一：数据存储在中国、适用中国国家调取相关法律、无欧盟充分性认定',
          'SCCs在技术上可行，但针对中国的TIA对敏感数据可能产生不利结果',
          'DeepSeek开源权重模型（R1、V3、V4、Coder V2）为MIT——本地运行风险与本地Qwen或Llama一样低',
          '对于欧盟监管数据：避免使用DeepSeek API；使用本地权重或切换到有欧盟托管API选项的模型',
        ],
      },
      body1: {
        title: 'DeepSeek API在GDPR下高风险的原因',
        content: [
          '<strong>三个叠加因素使DeepSeek API成为GDPR监管数据的高风险选项。第一：根据DeepSeek的隐私政策，个人数据存储在中华人民共和国境内，因此每次API调用都构成GDPR第44条的第三国传输。第二：中国没有欧盟充分性认定（与拥有欧美数据隐私框架的美国不同）。第三：中国法律可以要求组织配合国家机关——除PIPL外，尤其是《国家情报法》和《数据安全法》——且DeepSeek的隐私政策规定可与执法机构和公共机关共享数据。</strong>',
          '标准合同条款是向中国传输的有效法律机制。但Schrems II之后，组织还必须进行传输影响评估，评估SCCs在实践中是否提供真正保护。对于中国，敏感数据的TIA很难通过：中国的披露义务可能优先于合同保护。EDPB指南指出，如果补充措施无法弥补目的地国法律框架的缺陷，则不应进行传输。',
          '这适用于所有个人数据：HR记录、客户信息、医疗笔记、法律文件。如果您的提示词包含这些数据，DeepSeek API会产生SCCs单独可能无法解决的监管风险。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'DeepSeek API是使用LLM时GDPR风险最高的选项之一，因为数据存储在中国，而国家调取权可能优先于标准合同条款。' },
          { type: 'plain-terms', text: '中国法律可以要求企业配合国家，这可能优先于您签署的隐私合同。因此，使用DeepSeek API保护欧盟数据的承诺在实践中可能无法执行。' },
        ],
      },
      body2: {
        title: '本地DeepSeek权重——完全不同的风险状况',
        content: [
          '<strong>DeepSeek开源权重模型（R1、V3、V4、Coder V2）与API是不同的产品。R1和V4的权重以MIT许可发布（请在各模型卡查看许可），可以在不连接DeepSeek服务器的情况下本地运行。</strong>本地运行权重可避免把您的数据发送到DeepSeek服务器，从而避免GDPR第44条的传输问题——与本地Qwen或Llama相同。安全、访问控制、保留期限等其他GDPR义务仍适用于您自己的部署。',
          '本地DeepSeek-R1 7B或8B通过Ollama在6-8 GB VRAM GPU上运行流畅。R1是7B层级最强的推理模型之一。对于编程任务，DeepSeek Coder V2有更小的变体可用。请注意，Ollama标签deepseek-r1:7b是基于Qwen的蒸馏模型，MIT许可需与基础模型的许可声明一并适用。',
          '本地DeepSeek的剩余问题：模型训练。DeepSeek没有公布训练数据的完整细节。对于高保证环境（医疗、法律、政府），即使是本地部署，这种不确定性也可能相关。Qwen 3和Llama 4在训练数据来源方面更透明。',
          '本页提供基于公开来源（如[DeepSeek隐私政策](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html)（2026年2月10日版）和监管机构新闻稿）的一般信息，不构成法律建议。风险比较是PromptQuorum的编辑评估，并非数据保护机构的排名。请让您的数据保护官或律师评估您的具体情况。',
        ],
        columns: ['部署方式', 'GDPR风险', '原因', '推荐操作'],
        rows: [
          { '部署方式': 'DeepSeek API', 'GDPR风险': '最高', '原因': '中国服务器、PIPL、无充分性认定', '推荐操作': '个人或敏感数据应避免使用' },
          { '部署方式': 'DeepSeek本地（R1/V3）', 'GDPR风险': '低', '原因': '无传输，MIT权重', '推荐操作': '可接受；注意训练数据不透明' },
          { '部署方式': 'Qwen本地（2.5/3）', 'GDPR风险': '低', '原因': '无传输，Apache 2.0（多数尺寸），已公布训练信息', '推荐操作': '推荐用于数据敏感用途' },
          { '部署方式': 'Claude / OpenAI API', 'GDPR风险': '中', '原因': '美国管辖；欧盟区域降低但不消除风险', '推荐操作': '需要SCCs + DPA；优选欧盟区域' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'DeepSeek与GDPR快速解答',
        faqs: [
          {
            q: '我可以用标准合同条款在GDPR下使用DeepSeek API吗？',
            a: '技术上可以——您可以与DeepSeek的数据控制实体签署SCCs。但您还必须进行TIA，评估中国法律是否在实践中损害了这些SCCs。鉴于PIPL的数据披露义务，针对敏感个人数据的TIA很可能得出SCCs不足的结论。对于非个人数据（代码、公开文本），风险较低。',
          },
          {
            q: 'PIPL是什么？为什么对GDPR重要？',
            a: '中国个人信息保护法（PIPL，2021年11月生效）规范个人信息的处理与传输。向国家机关披露的义务源自多部法律——尤其是《国家情报法》（2017年）和《数据安全法》（2021年），它们要求组织和公民支持国家工作。实际上，在中国运营的DeepSeek可能被要求交出通过API处理的数据。SCCs无法推翻目的地国法律中的强制披露义务。这是欧盟数据保护机构对向中国传输持谨慎态度的主要原因之一。',
          },
          {
            q: 'GDPR监管数据最安全的LLM是哪个？',
            a: '最大GDPR安全性：任何无外部API调用、离线运行的本地开源权重模型（Qwen 3、Llama 4、DeepSeek R1本地）。Qwen 3和Llama 4的训练数据来源更透明。结构化决策工具请参阅<a href="/zh/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">GDPR LLM风险完整对比</a>。',
          },
          {
            q: 'DeepSeek-R1与DeepSeek API是同一回事吗？',
            a: '不是。DeepSeek-R1指以MIT许可发布在Hugging Face上的开源权重模型。DeepSeek API（[api.deepseek.com](https://api.deepseek.com)）是服务器位于中国的独立云服务。GDPR传输风险适用于API，而非权重。通过Ollama本地运行R1（<code>ollama run deepseek-r1:7b</code>）不会把您的提示词发送到DeepSeek服务器。请注意，deepseek-r1:7b标签是基于Qwen的蒸馏模型，MIT许可需与基础模型的许可声明一并适用。',
          },
          {
            q: '欧盟数据保护机构是否对DeepSeek采取过行动？',
            a: '是的。2025年1月，意大利数据保护机构（Garante）责令限制DeepSeek处理意大利用户的数据。2025年6月27日，柏林数据保护专员因用户个人数据被传输至中国，将DeepSeek应用作为非法内容向苹果和谷歌举报（[新闻稿](https://www.datenschutz-berlin.de/pressemitteilungen/)）。这些措施针对DeepSeek应用和API，而非本地运行的开源权重。中国政府的数据调取依据不只是PIPL：《国家情报法》和《数据安全法》也规定了配合与披露义务，传输影响评估（TIA）必须对此加以权衡。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Privacy & Security',
    heroImage: '/images/is-deepseek-gdpr-safe-overview-hero-pt.webp',
    title: 'O DeepSeek é seguro para uso sob o RGPD?',
    seoTitle: 'DeepSeek é seguro para o RGPD? 2026 | PromptQuorum',
    metaDescription: 'O DeepSeek está em conformidade com o RGPD? A API envia dados à China sem decisão de adequação; Itália e Berlim intervieram. Pesos MIT locais evitam a transferência.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      pt: {
        question: 'O DeepSeek é seguro para uso sob o RGPD?',
        answer: 'A API do DeepSeek figura entre as opções de maior risco para dados sujeitos ao RGPD: os servidores estão na China, não existe decisão de adequação da UE para a China, e a política de privacidade do DeepSeek informa que os dados são armazenados na China e podem ser compartilhados com autoridades policiais e públicas. Os modelos de código aberto do DeepSeek executados localmente têm um perfil de risco claramente diferente e mais baixo.',
        bullets: [
          'API do DeepSeek: servidores na China, aplicam-se as leis chinesas de acesso estatal — entre os maiores riscos',
          'Sem decisão de adequação da UE para a China: CCT + AIT requeridas, mas o resultado da AIT pode ser desfavorável',
          'Pesos locais do DeepSeek-R1/V3 (MIT): risco muito menor se implantados localmente sem chamadas à API',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A API do DeepSeek figura entre as opções de maior risco para o RGPD: dados armazenados na China, leis chinesas de acesso estatal, sem decisão de adequação da UE',
          'As CCT são tecnicamente possíveis, mas uma Avaliação de Impacto de Transferência para a China provavelmente produzirá um resultado desfavorável para dados sensíveis',
          'Os modelos de código aberto do DeepSeek (R1, V3, V4, Coder V2) são MIT: executados localmente, têm o mesmo baixo risco que Qwen ou Llama local',
          'Para dados regulados pela UE: evite a API do DeepSeek; use pesos locais ou mude para um modelo com opções de API hospedadas na UE',
        ],
      },
      body1: {
        title: 'Por que a API do DeepSeek tem alto risco sob o RGPD',
        content: [
          '<strong>Três fatores cumulativos fazem da API do DeepSeek uma opção de alto risco para dados regulados pelo RGPD. Primeiro: segundo a política de privacidade do DeepSeek, os dados pessoais são armazenados na República Popular da China, tornando cada chamada à API uma transferência para país terceiro segundo o Artigo 44 do RGPD. Segundo: a China não tem decisão de adequação da UE (ao contrário dos EUA, que têm o Quadro de Privacidade de Dados UE-EUA). Terceiro: a legislação chinesa pode obrigar organizações a cooperar com autoridades estatais — em especial a Lei de Inteligência Nacional e a Lei de Segurança de Dados, além da PIPL — e a política de privacidade do DeepSeek prevê o compartilhamento de dados com autoridades policiais e públicas.</strong>',
          'As Cláusulas Contratuais Padrão são um mecanismo jurídico válido para transferências para a China. No entanto, após o Schrems II, as organizações também devem conduzir uma Avaliação de Impacto de Transferência avaliando se as CCT fornecem proteção real na prática. Para a China, a AIT é difícil de superar para dados sensíveis: os deveres chineses de divulgação podem prevalecer sobre as proteções contratuais. De acordo com as diretrizes do CEPD, a transferência não deve ser realizada quando medidas suplementares não conseguem compensar deficiências no quadro jurídico do país de destino.',
          'Isso se aplica a qualquer dado pessoal: registros de RH, informações de clientes, notas médicas, correspondência jurídica. Se seus prompts contiverem algum desses dados, a API do DeepSeek cria exposição regulatória que as CCT sozinhas podem não resolver.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A API do DeepSeek figura entre os maiores riscos de RGPD ao usar LLMs porque os dados são armazenados na China, onde direitos de acesso do Estado podem prevalecer sobre as Cláusulas Contratuais Padrão.' },
          { type: 'plain-terms', text: 'A lei chinesa pode obrigar empresas a cooperar com o Estado, e isso pode prevalecer sobre os contratos de privacidade que você assina. Por isso, as promessas de proteger dados da UE com a API do DeepSeek podem não ser exequíveis na prática.' },
        ],
      },
      body2: {
        title: 'Pesos locais do DeepSeek — um perfil de risco completamente diferente',
        content: [
          '<strong>Os modelos de código aberto do DeepSeek (R1, V3, V4, Coder V2) são um produto distinto da API. Os pesos do R1 e do V4 são lançados sob a licença MIT (confira a licença na ficha de cada modelo) e podem ser executados localmente sem nenhuma conexão com os servidores do DeepSeek.</strong> Executar os pesos localmente evita o envio dos seus dados aos servidores do DeepSeek e, com isso, o problema de transferência do Artigo 44 do RGPD, da mesma forma que Qwen ou Llama locais. As demais obrigações do RGPD (segurança, controle de acesso, retenção) continuam valendo para a sua própria implantação.',
          'O DeepSeek-R1 7B ou 8B local funciona confortavelmente via Ollama em uma GPU com 6–8 GB de VRAM. O desempenho é excelente: o R1 é um dos modelos de raciocínio mais fortes disponíveis no nível 7B. Para tarefas de codificação, o DeepSeek Coder V2 está disponível em variantes menores. Observação: a tag do Ollama deepseek-r1:7b é um modelo destilado baseado no Qwen; a licença MIT se aplica junto com o aviso de licença do modelo base.',
          'A questão restante para o DeepSeek local: treinamento do modelo. O DeepSeek não publicou detalhes completos sobre quais dados foram usados para treinar esses modelos. Para ambientes de alta garantia (saúde, jurídico, governo), essa incerteza pode ser relevante mesmo para implantação local. Qwen 3 (Alibaba/Tongyi) e Llama 4 (Meta) fornecem mais transparência sobre a procedência dos dados de treinamento.',
          'Esta página traz informações gerais baseadas em fontes públicas (por exemplo, a [política de privacidade do DeepSeek](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html), versão de 10 de fevereiro de 2026, e comunicados de autoridades de controle) e não constitui aconselhamento jurídico. A comparação de riscos é uma avaliação editorial da PromptQuorum, não um ranking de uma autoridade de proteção de dados. Peça ao seu encarregado de proteção de dados ou a um advogado que avalie o seu caso concreto.',
        ],
        columns: ['Implantação', 'Risco RGPD', 'Motivo', 'Ação recomendada'],
        rows: [
          { 'Implantação': 'API do DeepSeek', 'Risco RGPD': 'Máximo', 'Motivo': 'Servidores chineses, PIPL, sem decisão de adequação', 'Ação recomendada': 'Evitar para dados pessoais ou sensíveis' },
          { 'Implantação': 'DeepSeek local (R1/V3)', 'Risco RGPD': 'Baixo', 'Motivo': 'Sem transferência, pesos MIT', 'Ação recomendada': 'Aceitável; note a opacidade dos dados de treinamento' },
          { 'Implantação': 'Qwen local (2.5/3)', 'Risco RGPD': 'Baixo', 'Motivo': 'Sem transferência, Apache 2.0 (a maioria dos tamanhos), informações de treinamento publicadas', 'Ação recomendada': 'Recomendado para uso com dados sensíveis' },
          { 'Implantação': 'Claude / OpenAI API', 'Risco RGPD': 'Médio', 'Motivo': 'Jurisdição EUA; região UE reduz mas não elimina o risco', 'Ação recomendada': 'CCT + DPA requeridos; preferir região UE' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas: DeepSeek e o RGPD',
        faqs: [
          {
            q: 'Posso usar a API do DeepSeek com Cláusulas Contratuais Padrão para o RGPD?',
            a: 'Tecnicamente sim: você pode assinar CCT com a entidade controladora de dados do DeepSeek. No entanto, também deve concluir uma Avaliação de Impacto de Transferência avaliando se a lei chinesa prejudica essas CCT na prática. Dadas as obrigações de divulgação da PIPL, uma AIT para dados pessoais sensíveis provavelmente concluirá que as CCT não são suficientes. Para dados não pessoais (código, texto público), o risco é menor.',
          },
          {
            q: 'DeepSeek-R1 é a mesma coisa que a API do DeepSeek?',
            a: 'Não. DeepSeek-R1 se refere ao modelo de código aberto lançado no Hugging Face sob licença MIT. A API do DeepSeek ([api.deepseek.com](https://api.deepseek.com)) é um serviço de nuvem distinto, com servidores na China. O risco de transferência do RGPD se aplica à API, não aos pesos. Executar o R1 localmente via Ollama (<code>ollama run deepseek-r1:7b</code>) não envia seus prompts aos servidores do DeepSeek. Observe que a tag deepseek-r1:7b é um modelo destilado baseado no Qwen; a licença MIT se aplica junto com o aviso de licença do modelo base.',
          },
          {
            q: 'O que é a PIPL e por que importa para o RGPD?',
            a: 'A Lei de Proteção de Informações Pessoais da China (PIPL), em vigor desde novembro de 2021, regula o tratamento e a transferência de informações pessoais. Os deveres de divulgação perante autoridades estatais decorrem de várias leis — em especial a Lei de Inteligência Nacional (2017) e a Lei de Segurança de Dados (2021) — que obrigam organizações e cidadãos a apoiar o trabalho do Estado. Na prática, o DeepSeek, como empresa que opera na China, pode ser obrigado a entregar dados processados por meio da API. As CCT não podem anular uma obrigação imperativa de divulgação prevista na lei do país de destino. Essa é uma das principais razões pelas quais as autoridades de proteção de dados da UE tratam transferências para a China com cautela.',
          },
          {
            q: 'Qual LLM é o mais seguro para dados regulados pelo RGPD?',
            a: 'Para máxima segurança sob o RGPD: qualquer modelo de código aberto local (Qwen 3, Llama 4, DeepSeek-R1 local) rodando offline sem chamadas a APIs externas. Entre eles, Qwen 3 e Llama 4 têm proveniência de dados de treinamento mais transparente. Consulte a <a href="/pt/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">comparação completa de riscos RGPD entre LLMs</a> para uma ferramenta de decisão estruturada.',
          },
          {
            q: 'As autoridades de proteção de dados da UE agiram contra o DeepSeek?',
            a: 'Sim. Em janeiro de 2025, a autoridade italiana de proteção de dados (o Garante) determinou a limitação do tratamento de dados de usuários italianos pelo DeepSeek. Em 27 de junho de 2025, a Comissária de Proteção de Dados de Berlim denunciou o aplicativo DeepSeek à Apple e ao Google como conteúdo ilícito, devido à transferência de dados pessoais dos usuários para a China ([comunicado](https://www.datenschutz-berlin.de/pressemitteilungen/)). Essas medidas dizem respeito ao aplicativo e à API do DeepSeek, não aos pesos abertos executados localmente. O acesso do governo chinês não se baseia apenas na PIPL: a Lei de Inteligência Nacional e a Lei de Segurança de Dados também preveem deveres de cooperação e divulgação, que a avaliação de impacto da transferência precisa ponderar.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Privacy & Security',
    heroImage: '/images/is-deepseek-gdpr-safe-overview-hero-es.webp',
    title: '¿Es seguro usar DeepSeek bajo el RGPD?',
    seoTitle: '¿DeepSeek es seguro para el RGPD? 2026 | PromptQuorum',
    metaDescription: '¿DeepSeek cumple el RGPD? La API envía datos a China sin decisión de adecuación; Italia y Berlín intervinieron. Los pesos MIT en local evitan la transferencia.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      es: {
        question: '¿Es seguro usar DeepSeek bajo el RGPD?',
        answer: 'La API de DeepSeek figura entre las opciones de mayor riesgo para datos sujetos al RGPD: los servidores están en China, no existe una decisión de adecuación de la UE para China, y la política de privacidad de DeepSeek indica que los datos se almacenan en China y pueden compartirse con las fuerzas de seguridad y las autoridades públicas. Los modelos de código abierto de DeepSeek ejecutados localmente tienen un perfil de riesgo claramente distinto y más bajo.',
        bullets: [
          'API de DeepSeek: servidores en China, se aplican las leyes chinas de acceso estatal — entre los riesgos más altos',
          'Sin decisión de adecuación de la UE para China: CCT + EIT requeridas, pero el resultado de la EIT puede ser desfavorable',
          'Pesos locales de DeepSeek-R1/V3 (MIT): riesgo mucho menor si se despliegan localmente sin llamadas a la API',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La API de DeepSeek figura entre las opciones de mayor riesgo para el RGPD: datos almacenados en China, leyes chinas de acceso estatal, sin decisión de adecuación de la UE',
          'Las CCT son técnicamente posibles, pero una Evaluación de Impacto de Transferencia para China probablemente producirá un resultado desfavorable para datos sensibles',
          'Los modelos de código abierto de DeepSeek (R1, V3, V4, Coder V2) son MIT: ejecutados localmente, tienen el mismo bajo riesgo que Qwen o Llama local',
          'Para datos regulados en la UE: evita la API de DeepSeek; usa pesos locales o cambia a un modelo con opciones de API alojadas en la UE',
        ],
      },
      body1: {
        title: 'Por qué la API de DeepSeek tiene alto riesgo bajo el RGPD',
        content: [
          '<strong>Tres factores acumulativos hacen de la API de DeepSeek una opción de alto riesgo para datos regulados por el RGPD. Primero: según la política de privacidad de DeepSeek, los datos personales se almacenan en la República Popular China, lo que convierte cada llamada a la API en una transferencia a un tercer país según el artículo 44 del RGPD. Segundo: China no tiene decisión de adecuación de la UE (a diferencia de EE. UU., que cuenta con el Marco de Privacidad de Datos UE-EE. UU.). Tercero: la legislación china puede obligar a las organizaciones a cooperar con las autoridades estatales —en particular la Ley de Inteligencia Nacional y la Ley de Seguridad de Datos, además de la PIPL—, y la política de privacidad de DeepSeek prevé compartir datos con las fuerzas de seguridad y las autoridades públicas.</strong>',
          'Las Cláusulas Contractuales Tipo son un mecanismo legal válido para las transferencias a China. Sin embargo, tras Schrems II, las organizaciones también deben realizar una Evaluación de Impacto de Transferencia que evalúe si las CCT ofrecen protección real en la práctica. Para China, la EIT es difícil de superar para datos sensibles: los deberes chinos de divulgación pueden prevalecer sobre las protecciones contractuales. Según las directrices del EDPB, la transferencia no debe realizarse cuando las medidas suplementarias no pueden compensar las deficiencias del marco legal del país de destino.',
          'Esto se aplica a cualquier dato personal: registros de RRHH, información de clientes, notas médicas, correspondencia legal. Si tus prompts contienen alguno de estos datos, la API de DeepSeek crea una exposición regulatoria que las CCT por sí solas pueden no resolver.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'La API de DeepSeek figura entre los mayores riesgos de RGPD al usar LLMs porque los datos se almacenan en China, donde los derechos de acceso del Estado pueden prevalecer sobre las cláusulas contractuales tipo.' },
          { type: 'plain-terms', text: 'La ley china puede obligar a las empresas a cooperar con el Estado, y eso puede prevalecer sobre los contratos de privacidad que firmes. Por eso, las promesas de proteger datos europeos con la API de DeepSeek pueden no ser exigibles en la práctica.' },
        ],
      },
      body2: {
        title: 'Pesos locales de DeepSeek — un perfil de riesgo completamente diferente',
        content: [
          '<strong>Los modelos de código abierto de DeepSeek (R1, V3, V4, Coder V2) son un producto distinto a la API. Los pesos de R1 y V4 se publican bajo licencia MIT (comprueba la licencia en la ficha de cada modelo) y pueden ejecutarse localmente sin ninguna conexión a los servidores de DeepSeek.</strong> Ejecutar los pesos localmente evita enviar tus datos a los servidores de DeepSeek y, con ello, el problema de transferencia del artículo 44 del RGPD, igual que con Qwen o Llama local. Las demás obligaciones del RGPD (seguridad, control de acceso, conservación) siguen aplicándose a tu propio despliegue.',
          'DeepSeek-R1 7B u 8B local funciona cómodamente via Ollama en una GPU con 6–8 GB de VRAM. El rendimiento es excelente: R1 es uno de los modelos de razonamiento más potentes disponibles en el nivel de 7B. Para tareas de código, DeepSeek Coder V2 está disponible en variantes más pequeñas. Nota: la etiqueta de Ollama deepseek-r1:7b es un modelo destilado basado en Qwen; la licencia MIT se aplica junto con el aviso de licencia del modelo base.',
          'La pregunta restante para DeepSeek local: el entrenamiento del modelo. DeepSeek no ha publicado detalles completos sobre los datos usados para entrenar estos modelos. Para entornos de alta garantía (sanidad, legal, administración pública), esta incertidumbre puede ser relevante incluso en el despliegue local. Qwen 3 (Alibaba/Tongyi) y Llama 4 (Meta) ofrecen más transparencia sobre la procedencia de los datos de entrenamiento.',
          'Esta página ofrece información general basada en fuentes públicas (por ejemplo, la [política de privacidad de DeepSeek](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html), versión del 10 de febrero de 2026, y comunicados de autoridades de control) y no constituye asesoramiento jurídico. La comparación de riesgos es una valoración editorial de PromptQuorum, no una clasificación de una autoridad de protección de datos. Haz que tu delegado de protección de datos o un abogado evalúe tu caso concreto.',
        ],
        columns: ['Despliegue', 'Riesgo RGPD', 'Motivo', 'Acción recomendada'],
        rows: [
          { 'Despliegue': 'API de DeepSeek', 'Riesgo RGPD': 'Máximo', 'Motivo': 'Servidores chinos, PIPL, sin decisión de adecuación', 'Acción recomendada': 'Evitar para datos personales o sensibles' },
          { 'Despliegue': 'DeepSeek local (R1/V3)', 'Riesgo RGPD': 'Bajo', 'Motivo': 'Sin transferencia, pesos MIT', 'Acción recomendada': 'Aceptable; ten en cuenta la opacidad de los datos de entrenamiento' },
          { 'Despliegue': 'Qwen local (2.5/3)', 'Riesgo RGPD': 'Bajo', 'Motivo': 'Sin transferencia, Apache 2.0 (la mayoría de tamaños), información de entrenamiento publicada', 'Acción recomendada': 'Recomendado para uso con datos sensibles' },
          { 'Despliegue': 'Claude / OpenAI API', 'Riesgo RGPD': 'Medio', 'Motivo': 'Jurisdicción EE.UU.; la región UE reduce pero no elimina el riesgo', 'Acción recomendada': 'CCT + DPA requeridos; preferir región UE' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas: DeepSeek y el RGPD',
        faqs: [
          {
            q: '¿Puedo usar la API de DeepSeek con Cláusulas Contractuales Tipo para el RGPD?',
            a: 'Técnicamente sí: puedes firmar CCT con la entidad responsable del tratamiento de DeepSeek. Sin embargo, también debes completar una Evaluación de Impacto de Transferencia que evalúe si la ley china socava esas CCT en la práctica. Dadas las obligaciones de divulgación de la PIPL, una EIT para datos personales sensibles probablemente concluirá que las CCT no son suficientes. Para datos no personales (código, texto público), el riesgo es menor.',
          },
          {
            q: '¿DeepSeek-R1 es lo mismo que la API de DeepSeek?',
            a: 'No. DeepSeek-R1 se refiere al modelo de código abierto publicado en Hugging Face bajo licencia MIT. La API de DeepSeek ([api.deepseek.com](https://api.deepseek.com)) es un servicio en la nube distinto con servidores en China. El riesgo de transferencia del RGPD se aplica a la API, no a los pesos. Ejecutar R1 localmente con Ollama (<code>ollama run deepseek-r1:7b</code>) no envía tus prompts a los servidores de DeepSeek. Ten en cuenta que la etiqueta deepseek-r1:7b es un modelo destilado basado en Qwen; la licencia MIT se aplica junto con el aviso de licencia del modelo base.',
          },
          {
            q: '¿Qué es la PIPL y por qué importa para el RGPD?',
            a: 'La Ley de Protección de la Información Personal de China (PIPL), en vigor desde noviembre de 2021, regula el tratamiento y la transferencia de información personal. Los deberes de divulgación ante las autoridades estatales derivan de varias leyes —en particular la Ley de Inteligencia Nacional (2017) y la Ley de Seguridad de Datos (2021)—, que obligan a organizaciones y ciudadanos a apoyar la labor del Estado. En la práctica, DeepSeek, como empresa que opera en China, puede estar obligada a entregar datos tratados a través de su API. Las CCT no pueden anular una obligación imperativa de divulgación del derecho del país de destino. Es una de las razones principales por las que las autoridades de protección de datos de la UE tratan con cautela las transferencias a China.',
          },
          {
            q: '¿Qué LLM es el más seguro para datos regulados por el RGPD?',
            a: 'Para la máxima seguridad bajo el RGPD: cualquier modelo de código abierto local (Qwen 3, Llama 4, DeepSeek-R1 local) ejecutado offline sin llamadas a APIs externas. Entre ellos, Qwen 3 y Llama 4 tienen una procedencia de datos de entrenamiento más transparente. Consulta la <a href="/es/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">comparación completa de riesgos RGPD entre LLMs</a> para una herramienta de decisión estructurada.',
          },
          {
            q: '¿Han actuado las autoridades de protección de datos de la UE contra DeepSeek?',
            a: 'Sí. En enero de 2025, la autoridad italiana de protección de datos (el Garante) ordenó una limitación del tratamiento de los datos de usuarios italianos por parte de DeepSeek. El 27 de junio de 2025, la Comisionada de Protección de Datos de Berlín notificó la aplicación DeepSeek a Apple y Google como contenido ilícito por la transferencia de datos personales de los usuarios a China ([nota de prensa](https://www.datenschutz-berlin.de/pressemitteilungen/)). Estas medidas afectan a la aplicación y la API de DeepSeek, no a los pesos abiertos ejecutados en local. El acceso del Estado chino no se basa solo en la PIPL: la Ley de Inteligencia Nacional y la Ley de Seguridad de Datos también contienen deberes de cooperación y divulgación, que la evaluación de impacto de la transferencia debe ponderar.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Privacy & Security',
    heroImage: '/images/is-deepseek-gdpr-safe-overview-hero-ar.webp',
    title: 'هل استخدام ⁨DeepSeek⁩ آمن وفق اللائحة الأوروبية لحماية البيانات ⁨GDPR⁩؟',
    seoTitle: '⁨DeepSeek GDPR 2026⁩: ⁨API⁩ الصيني أم أوزان محلية؟',
    metaDescription: 'هل DeepSeek متوافق مع GDPR؟ الواجهة البرمجية ترسل البيانات إلى الصين دون قرار كفاية أوروبي، وتدخلت إيطاليا وبرلين. الأوزان المحلية MIT تتجنب النقل.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ar: {
        question: 'هل استخدام DeepSeek آمن وفق اللائحة الأوروبية لحماية البيانات GDPR؟',
        answer: 'تُعد واجهة DeepSeek البرمجية من أعلى الخيارات خطورة على البيانات الخاضعة لـ GDPR: الخوادم في الصين، ولا يوجد قرار كفاية أوروبي للصين، وتذكر سياسة الخصوصية الخاصة بـ DeepSeek أن البيانات تُخزَّن في الصين وقد تُشارَك مع جهات إنفاذ القانون والسلطات العامة. أما نماذج DeepSeek المحلية مفتوحة الأوزان فلها ملف مخاطر مختلف بوضوح وأقل بكثير.',
        bullets: [
          'واجهة DeepSeek البرمجية: خوادم في الصين، وتسري قوانين الوصول الحكومي الصينية — من أعلى المخاطر',
          'لا قرار كفاية أوروبي للصين: يلزم SCCs + TIA، لكن نتيجة TIA قد تكون غير مواتية',
          'أوزان DeepSeek-R1/V3 المحلية (MIT): خطورة أقل بكثير عند النشر محلياً دون استدعاء API',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'واجهة DeepSeek البرمجية من أعلى الخيارات خطورة على GDPR: تخزين البيانات في الصين، قوانين الوصول الحكومي الصينية، لا قرار كفاية أوروبي',
          'البنود التعاقدية القياسية (SCCs) ممكنة تقنياً لكن تقييم أثر النقل (TIA) للصين سيُفضي على الأرجح إلى نتيجة غير مواتية للبيانات الحساسة',
          'نماذج DeepSeek مفتوحة الأوزان (R1، V3، V4، Coder V2) مرخصة بـ MIT — تشغيلها محلياً يحمل نفس المخاطر المنخفضة كـ Qwen أو Llama المحليين',
          'للبيانات الخاضعة لتنظيم أوروبي: تجنب واجهة DeepSeek البرمجية؛ استخدم الأوزان المحلية أو انتقل إلى نموذج بخيارات API مستضافة في الاتحاد الأوروبي',
        ],
      },
      body1: {
        title: 'لماذا تُشكّل واجهة DeepSeek البرمجية خطراً مرتفعاً وفق GDPR',
        content: [
          '<strong>ثلاثة عوامل متراكمة تجعل واجهة DeepSeek البرمجية خياراً عالي الخطورة للبيانات الخاضعة لـ GDPR. أولاً: تنص سياسة الخصوصية الخاصة بـ DeepSeek على تخزين البيانات الشخصية في جمهورية الصين الشعبية، مما يجعل كل استدعاء API نقلاً إلى بلد ثالث وفق المادة 44 من GDPR. ثانياً: لا يوجد قرار كفاية أوروبي للصين (بخلاف الولايات المتحدة التي لديها إطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة). ثالثاً: قد يُلزم القانون الصيني المنظمات بالتعاون مع السلطات الحكومية — ولا سيما قانون الاستخبارات الوطنية وقانون أمن البيانات إلى جانب PIPL — كما تتيح سياسة الخصوصية الخاصة بـ DeepSeek مشاركة البيانات مع جهات إنفاذ القانون والسلطات العامة.</strong>',
          'البنود التعاقدية القياسية آلية قانونية صالحة للنقل إلى الصين. غير أنه بعد حكم Schrems II، يجب على المنظمات إجراء تقييم أثر النقل (TIA) لتقييم مدى توفير SCCs لحماية فعلية في الممارسة. بالنسبة للصين، يصعب اجتياز TIA للبيانات الحساسة: فقد تتقدم واجبات الكشف الصينية على الحماية التعاقدية. وتنص إرشادات EDPB على أنه لا ينبغي إجراء النقل إذا لم تستطع التدابير التكميلية تعويض أوجه القصور في الإطار القانوني للبلد المقصود.',
          'ينطبق هذا على أي بيانات شخصية: سجلات الموارد البشرية، معلومات العملاء، الملاحظات الطبية، المراسلات القانونية. إذا احتوت مطالباتك على شيء من هذا، فإن واجهة DeepSeek البرمجية تُنشئ تعرضاً تنظيمياً قد لا تُعالجه SCCs وحدها.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'واجهة DeepSeek البرمجية من أعلى مخاطر GDPR عند استخدام النماذج اللغوية لأن البيانات تُخزَّن في الصين، حيث قد تتقدم صلاحيات الوصول الحكومي على البنود التعاقدية القياسية.' },
          { type: 'plain-terms', text: 'قد يُلزم القانون الصيني الشركات بالتعاون مع الدولة، وقد يتقدم ذلك على عقود الخصوصية التي توقّعها. لذلك قد لا تكون وعود حماية البيانات الأوروبية مع واجهة DeepSeek البرمجية قابلة للتطبيق عملياً.' },
        ],
      },
      body2: {
        title: 'أوزان DeepSeek المحلية — ملف مخاطر مختلف تماماً',
        content: [
          '<strong>نماذج DeepSeek مفتوحة الأوزان (R1، V3، V4، Coder V2) منتج مستقل عن الواجهة البرمجية. تُطرح أوزان R1 وV4 بموجب ترخيص MIT (تحقق من الترخيص في بطاقة كل نموذج) ويمكن تشغيلها محلياً دون أي اتصال بخوادم DeepSeek.</strong> تشغيل الأوزان محلياً يتجنب إرسال بياناتك إلى خوادم DeepSeek، وبذلك يتجنب مشكلة النقل وفق المادة 44 من GDPR، تماماً كما يفعل Qwen أو Llama المحليان. وتظل التزامات GDPR الأخرى (الأمان، التحكم في الوصول، مدة الاحتفاظ) سارية على نشرك الخاص.',
          'DeepSeek-R1 7B أو 8B المحلي يعمل بسلاسة عبر Ollama على GPU بسعة 6–8 GB VRAM. الأداء ممتاز: R1 أحد أقوى نماذج الاستدلال المتاحة في فئة 7B. لمهام البرمجة، DeepSeek Coder V2 متاح بأحجام أصغر. ملاحظة: وسم Ollama المسمى deepseek-r1:7b نموذج مُقطَّر مبني على Qwen؛ ويسري ترخيص MIT مع إشعار ترخيص النموذج الأساسي.',
          'السؤال المتبقي لـ DeepSeek المحلي: بيانات التدريب. لم يُنشر DeepSeek تفاصيل كاملة حول البيانات المستخدمة في تدريب هذه النماذج. في البيئات عالية الضمان (الرعاية الصحية، القانون، الحكومة)، هذا الغموض قد يكون ذا صلة حتى في النشر المحلي. Qwen 3 وLlama 4 يوفران مزيداً من الشفافية حول مصدر بيانات التدريب.',
          'تقدم هذه الصفحة معلومات عامة مبنية على مصادر عامة (مثل [سياسة الخصوصية الخاصة بـ DeepSeek](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html)، نسخة 10 فبراير 2026، وبيانات صحفية لهيئات الرقابة) ولا تُعد استشارة قانونية. مقارنة المخاطر تقييم تحريري من PromptQuorum وليست تصنيفاً صادراً عن هيئة لحماية البيانات. اطلب من مسؤول حماية البيانات لديك أو من محامٍ تقييم حالتك المحددة.',
        ],
        columns: ['النشر', 'مخاطر GDPR', 'السبب', 'الإجراء الموصى به'],
        rows: [
          { 'النشر': 'واجهة DeepSeek البرمجية', 'مخاطر GDPR': 'أعلى', 'السبب': 'خوادم صينية، PIPL، لا قرار كفاية', 'الإجراء الموصى به': 'تجنب للبيانات الشخصية أو الحساسة' },
          { 'النشر': 'DeepSeek محلي (R1/V3)', 'مخاطر GDPR': 'منخفض', 'السبب': 'لا نقل، أوزان MIT', 'الإجراء الموصى به': 'مقبول؛ لاحظ غموض بيانات التدريب' },
          { 'النشر': 'Qwen محلي (2.5/3)', 'مخاطر GDPR': 'منخفض', 'السبب': 'لا نقل، Apache 2.0 (لمعظم الأحجام)، معلومات تدريب منشورة', 'الإجراء الموصى به': 'موصى به للاستخدام مع البيانات الحساسة' },
          { 'النشر': 'Claude / OpenAI API', 'مخاطر GDPR': 'متوسط', 'السبب': 'اختصاص أمريكي؛ المنطقة الأوروبية تُخفف لكن لا تُزيل الخطر', 'الإجراء الموصى به': 'SCCs + DPA مطلوبة؛ تُفضَّل المنطقة الأوروبية' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة: DeepSeek وGDPR',
        faqs: [
          {
            q: 'هل يمكنني استخدام واجهة DeepSeek البرمجية مع البنود التعاقدية القياسية لـ GDPR؟',
            a: 'تقنياً نعم — يمكنك توقيع SCCs مع الكيان المتحكم في بيانات DeepSeek. غير أنه يجب أيضاً إجراء تقييم أثر النقل لتقييم ما إذا كان القانون الصيني يُقوّض تلك البنود في الممارسة. نظراً لالتزامات الكشف وفق PIPL، سيستنتج TIA للبيانات الشخصية الحساسة على الأرجح أن SCCs غير كافية. للبيانات غير الشخصية (كود، نص عام)، الخطر أقل.',
          },
          {
            q: 'هل DeepSeek-R1 هو نفسه واجهة DeepSeek البرمجية؟',
            a: 'لا. DeepSeek-R1 يشير إلى النموذج مفتوح الأوزان المنشور على Hugging Face بموجب ترخيص MIT. أما واجهة DeepSeek البرمجية ([api.deepseek.com](https://api.deepseek.com)) فهي خدمة سحابية منفصلة بخوادم في الصين. ينطبق خطر النقل وفق GDPR على الواجهة البرمجية لا على الأوزان. تشغيل R1 محلياً عبر Ollama (<code>ollama run deepseek-r1:7b</code>) لا يرسل مطالباتك إلى خوادم DeepSeek. لاحظ أن الوسم deepseek-r1:7b نموذج مُقطَّر مبني على Qwen؛ ويسري ترخيص MIT مع إشعار ترخيص النموذج الأساسي.',
          },
          {
            q: 'ما هو PIPL ولماذا يهم في GDPR؟',
            a: 'يُنظّم قانون حماية المعلومات الشخصية الصيني (PIPL)، النافذ منذ نوفمبر 2021، معالجة المعلومات الشخصية ونقلها. أما واجبات الكشف أمام السلطات الحكومية فتنبع من عدة قوانين — ولا سيما قانون الاستخبارات الوطنية (2017) وقانون أمن البيانات (2021) — اللذين يُلزمان المنظمات والمواطنين بدعم عمل الدولة. عملياً، قد تُلزَم DeepSeek، بوصفها شركة تعمل في الصين، بتسليم البيانات المعالجة عبر واجهتها البرمجية. ولا تستطيع SCCs إبطال التزام إلزامي بالكشف في قانون البلد المقصود. وهذا أحد الأسباب الرئيسية التي تجعل هيئات حماية البيانات الأوروبية تتعامل بحذر مع النقل إلى الصين.',
          },
          {
            q: 'أي نموذج لغوي هو الأأمن للبيانات الخاضعة لـ GDPR؟',
            a: 'لأقصى قدر من الأمان وفق GDPR: أي نموذج مفتوح الأوزان محلي (Qwen 3، Llama 4، DeepSeek-R1 محلي) يعمل دون اتصال بدون استدعاءات API خارجية. من بينها، Qwen 3 وLlama 4 لهما مصدر أكثر شفافية لبيانات التدريب. راجع <a href="/ar/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">مقارنة مخاطر GDPR الكاملة بين النماذج اللغوية</a> للحصول على أداة قرار منظمة.',
          },
          {
            q: 'هل اتخذت هيئات حماية البيانات في الاتحاد الأوروبي إجراءات ضد DeepSeek؟',
            a: 'نعم. في يناير 2025 أمرت هيئة حماية البيانات الإيطالية (Garante) بتقييد معالجة DeepSeek لبيانات المستخدمين الإيطاليين. وفي 27 يونيو 2025 أبلغت مفوضة حماية البيانات في برلين شركتي Apple وGoogle عن تطبيق DeepSeek بوصفه محتوى غير قانوني بسبب نقل البيانات الشخصية للمستخدمين إلى الصين ([بيان صحفي](https://www.datenschutz-berlin.de/pressemitteilungen/)). تتعلق هذه الإجراءات بتطبيق DeepSeek وواجهته البرمجية API، لا بالأوزان المفتوحة المشغّلة محلياً. ولا يستند وصول الدولة الصينية إلى PIPL وحده، فقانون الاستخبارات الوطنية وقانون أمن البيانات يتضمنان أيضاً واجبات تعاون وإفصاح، ويجب أن يزنها تقييم أثر النقل (TIA).',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Privacy & Security',
    heroImage: '/images/is-deepseek-gdpr-safe-overview-hero-ko.webp',
    title: 'DeepSeek는 GDPR에 안전한가?',
    seoTitle: 'DeepSeek GDPR 안전성 2026 | PromptQuorum',
    metaDescription: 'DeepSeek는 GDPR을 준수합니까? API는 EU 적정성 결정이 없는 중국으로 데이터를 보내며 이탈리아와 베를린이 조치했습니다. 로컬 MIT 가중치는 이전을 피합니다.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    readTime: '5분 분량',
    targetKeywords: [
      'DeepSeek GDPR 안전성',
      'DeepSeek 개인정보보호',
      'DeepSeek PIPL',
      'DeepSeek API 위험성',
      'GDPR LLM 비교',
    ],
    quickAnswerTop: {
      ko: {
        question: 'DeepSeek는 GDPR에 안전하게 사용할 수 있습니까?',
        answer: 'DeepSeek API는 GDPR 규제 데이터에 대해 위험이 가장 높은 선택지 중 하나입니다. 서버가 중국에 있고, 중국에 대한 EU 적정성 결정이 없으며, DeepSeek의 개인정보 처리방침에 따르면 데이터가 중국에 저장되고 법 집행 기관 및 공공기관과 공유될 수 있기 때문입니다. 로컬에서 실행하는 DeepSeek 오픈 가중치 모델은 위험 프로필이 분명히 다르고 훨씬 낮습니다.',
        bullets: [
          'DeepSeek API: 중국 서버, 중국의 국가 접근 관련 법률 적용 — 위험이 가장 높은 축에 속함',
          '중국에 대한 EU 적정성 결정 없음: SCCs + TIA 필요, TIA 결과가 불리할 수 있음',
          'DeepSeek-R1/V3 로컬 가중치(MIT): API 호출 없이 로컬 배포 시 위험 대폭 낮아짐',
        ],
        updatedDate: '2026-10',
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'inLanguage': 'ko',
      'headline': 'DeepSeek는 GDPR에 안전한가?',
      'datePublished': '2026-05-22',
      'dateModified': '2026-10-17',
      'url': 'https://www.promptquorum.com/ko/prompt-bites/is-deepseek-gdpr-safe',
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': '홈',
          'item': 'https://www.promptquorum.com/ko',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Prompt Bites',
          'item': 'https://www.promptquorum.com/ko/prompt-bites',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'DeepSeek는 GDPR에 안전한가?',
          'item': 'https://www.promptquorum.com/ko/prompt-bites/is-deepseek-gdpr-safe',
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API는 GDPR 관점에서 위험이 가장 높은 선택지 중 하나입니다: 중국 내 데이터 저장, 중국의 국가 접근 관련 법률, EU 적정성 결정 없음',
          '표준 계약 조항(SCCs)은 기술적으로 가능하나, 중국에 대한 이전 영향 평가(TIA)는 민감 데이터에 불리한 결과를 낼 가능성이 높습니다',
          'DeepSeek 오픈 가중치 모델(R1, V3, V4, Coder V2)은 MIT — 로컬에서 실행하면 Qwen 또는 Llama 로컬과 동일하게 낮은 위험',
          'EU 규제 데이터의 경우: DeepSeek API를 피하고 로컬 가중치를 사용하거나 EU 호스팅 API 옵션이 있는 모델로 전환하십시오',
        ],
      },
      body1: {
        title: 'DeepSeek API가 GDPR에서 고위험인 이유',
        content: [
          '<strong>세 가지 누적 요인이 DeepSeek API를 GDPR 규제 데이터에 대한 고위험 선택지로 만듭니다. 첫째: DeepSeek의 개인정보 처리방침에 따르면 개인정보는 중화인민공화국 내에 저장되므로 모든 API 호출이 GDPR 제44조에 따른 제3국 이전이 됩니다. 둘째: 중국에는 EU 적정성 결정이 없습니다(EU-미국 데이터 프라이버시 프레임워크가 있는 미국과 다름). 셋째: 중국 법률은 PIPL 외에도 특히 국가정보법과 데이터보안법을 통해 조직에 국가 기관과의 협력을 의무화할 수 있으며, DeepSeek의 개인정보 처리방침도 법 집행 기관 및 공공기관과의 공유를 허용합니다.</strong>',
          '표준 계약 조항(SCCs)은 중국으로의 이전에 유효한 법적 메커니즘입니다. 그러나 Schrems II 이후 조직들은 SCCs가 실제로 실질적인 보호를 제공하는지 평가하는 이전 영향 평가(TIA)도 수행해야 합니다. 중국의 경우 민감 데이터에 대한 TIA 통과가 어렵습니다. 중국의 공개 의무가 계약상 보호보다 우선할 수 있기 때문입니다. EDPB 지침은 보완 조치가 대상 국가의 법적 틀의 결함을 보완할 수 없는 경우 이전을 수행해서는 안 된다고 밝히고 있습니다.',
          '이는 모든 개인 데이터에 적용됩니다: HR 기록, 고객 정보, 의료 메모, 법적 서신. 프롬프트에 이러한 데이터가 포함된 경우, DeepSeek API는 SCCs만으로는 해결되지 않을 수 있는 규제 노출을 야기합니다.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'DeepSeek API는 데이터가 중국에 저장되고 국가의 접근 권한이 SCCs보다 우선할 수 있어, LLM 사용 시 GDPR 위험이 가장 높은 축에 속합니다.' },
          { type: 'plain-terms', text: '중국 법은 기업에 국가와의 협력을 의무화할 수 있으며, 이는 체결한 프라이버시 계약보다 우선할 수 있습니다. 따라서 DeepSeek API로 유럽 데이터를 보호하겠다는 약속은 실제로 집행되지 않을 수 있습니다.' },
        ],
      },
      body2: {
        title: 'DeepSeek 로컬 가중치 — 완전히 다른 위험 프로필',
        content: [
          '<strong>DeepSeek 오픈 소스 모델(R1, V3, V4, Coder V2)은 API와 별개의 제품입니다. R1과 V4 가중치는 MIT 라이선스로 배포되며(라이선스는 각 모델 카드에서 확인) DeepSeek 서버에 연결하지 않고 로컬에서 실행할 수 있습니다.</strong> 로컬에서 가중치를 실행하면 데이터를 DeepSeek 서버로 보내지 않으므로 GDPR 제44조의 이전 문제를 피할 수 있으며, 이는 Qwen 또는 Llama 로컬과 동일합니다. 보안, 접근 통제, 보존 기간 등 그 밖의 GDPR 의무는 자체 배포에 계속 적용됩니다.',
          'DeepSeek-R1 7B 또는 8B 로컬 버전은 6–8 GB VRAM GPU에서 Ollama를 통해 원활하게 작동합니다. 성능이 뛰어납니다: R1은 7B 수준에서 사용 가능한 가장 강력한 추론 모델 중 하나입니다. 코딩 작업의 경우 DeepSeek Coder V2의 더 작은 변형이 제공됩니다. 참고로 Ollama 태그 deepseek-r1:7b는 Qwen 기반 증류 모델이며, MIT 라이선스는 기반 모델의 라이선스 고지와 함께 적용됩니다.',
          'DeepSeek 로컬에 대해 남아 있는 질문: 모델 학습 데이터입니다. DeepSeek는 이 모델 학습에 사용된 데이터에 대한 전체 세부 정보를 공개하지 않았습니다. 고보증 환경(의료, 법률, 공공 부문)에서는 로컬 배포에서도 이 불확실성이 관련될 수 있습니다. Qwen 3(Alibaba/Tongyi)와 Llama 4(Meta)는 학습 데이터 출처에 대해 더 많은 투명성을 제공합니다.',
          '이 페이지는 공개된 자료(예: [DeepSeek 개인정보 처리방침](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html)(2026년 2월 10일 버전)과 감독 당국 보도자료)에 기반한 일반 정보이며 법률 자문이 아닙니다. 위험 비교는 PromptQuorum의 편집상 평가이며 데이터 보호 당국의 순위가 아닙니다. 구체적인 사례는 데이터 보호 책임자나 변호사에게 평가를 받으십시오.',
        ],
        columns: ['배포 방식', 'GDPR 위험', '이유', '권장 조치'],
        rows: [
          { '배포 방식': 'DeepSeek API', 'GDPR 위험': '최고', '이유': '중국 서버, PIPL, 적정성 결정 없음', '권장 조치': '개인 또는 민감 데이터에 사용 금지' },
          { '배포 방식': 'DeepSeek 로컬 (R1/V3)', 'GDPR 위험': '낮음', '이유': '이전 없음, MIT 가중치', '권장 조치': '허용 가능; 학습 데이터 불투명성 유의' },
          { '배포 방식': 'Qwen 로컬 (2.5/3)', 'GDPR 위험': '낮음', '이유': '이전 없음, Apache 2.0(대부분의 크기), 학습 데이터 공개', '권장 조치': '민감 데이터 사용에 권장' },
          { '배포 방식': 'Claude / OpenAI API', 'GDPR 위험': '중간', '이유': '미국 관할권; EU 지역이 위험을 줄이나 제거하지 않음', '권장 조치': 'SCCs + DPA 필요; EU 지역 선호' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문: DeepSeek와 GDPR',
        faqs: [
          {
            q: 'GDPR을 위해 표준 계약 조항과 함께 DeepSeek API를 사용할 수 있습니까?',
            a: '기술적으로 가능합니다: DeepSeek 데이터 관리 법인과 SCCs에 서명할 수 있습니다. 그러나 중국 법이 실제로 해당 조항을 훼손하는지 평가하는 이전 영향 평가(TIA)도 완료해야 합니다. PIPL의 공개 의무를 감안할 때, 민감 개인 데이터에 대한 TIA는 SCCs가 불충분하다는 결론을 내릴 가능성이 높습니다. 비개인 데이터(코드, 공개 텍스트)의 경우 위험이 낮습니다.',
          },
          {
            q: 'DeepSeek R1은 DeepSeek API와 동일합니까?',
            a: '아닙니다. DeepSeek R1은 MIT 라이선스로 Hugging Face에 배포된 오픈 가중치 모델을 가리킵니다. DeepSeek API([api.deepseek.com](https://api.deepseek.com))는 중국에 서버를 둔 별도의 클라우드 서비스입니다. GDPR 이전 위험은 API에 적용되며 가중치에는 해당되지 않습니다. Ollama를 통해 R1을 로컬에서 실행(<code>ollama run deepseek-r1:7b</code>)하면 프롬프트가 DeepSeek 서버로 전송되지 않습니다. 참고로 deepseek-r1:7b 태그는 Qwen 기반 증류 모델이며, MIT 라이선스는 기반 모델의 라이선스 고지와 함께 적용됩니다.',
          },
          {
            q: 'PIPL이란 무엇이며 GDPR에서 왜 중요합니까?',
            a: '중국 개인정보보호법(PIPL)은 2021년 11월부터 시행되며 개인정보의 처리와 이전을 규율합니다. 국가 기관에 대한 공개 의무는 여러 법률에서 비롯되며, 특히 국가정보법(2017)과 데이터보안법(2021)은 조직과 시민에게 국가 업무 지원을 의무화합니다. 실제로 중국에서 운영되는 DeepSeek는 API를 통해 처리된 데이터의 제출을 요구받을 수 있습니다. SCCs는 대상 국가 법률의 강제 공개 의무를 무효화할 수 없습니다. 이는 EU 데이터 보호 당국이 중국으로의 이전을 신중하게 다루는 주요 이유 중 하나입니다.',
          },
          {
            q: 'GDPR 규제 데이터에 가장 안전한 LLM은 무엇입니까?',
            a: 'GDPR 하에서 최대 안전성을 위해서는: 외부 API 호출 없이 오프라인으로 실행되는 오픈 소스 로컬 모델(Qwen 3, Llama 4, DeepSeek-R1 로컬) 중 하나를 선택하십시오. 이 중 Qwen 3와 Llama 4는 학습 데이터 출처가 더 투명합니다. 구조화된 의사결정 도구로는 <a href="/ko/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">LLM 간 GDPR 위험 완전 비교</a>를 참조하십시오.',
          },
          {
            q: 'EU 데이터 보호 당국이 DeepSeek에 조치를 취한 적이 있습니까?',
            a: '네. 2025년 1월 이탈리아 데이터 보호 당국(Garante)은 DeepSeek의 이탈리아 이용자 데이터 처리를 제한하도록 명령했습니다. 2025년 6월 27일 베를린 데이터 보호 책임자는 이용자의 개인 데이터가 중국으로 이전된다는 이유로 DeepSeek 앱을 불법 콘텐츠로 Apple과 Google에 신고했습니다([보도자료](https://www.datenschutz-berlin.de/pressemitteilungen/)). 이 조치는 DeepSeek 앱과 API에 관한 것이며, 로컬에서 실행하는 오픈 가중치에는 해당하지 않습니다. 중국 정부의 접근 근거는 PIPL만이 아니며, 국가정보법과 데이터보안법에도 협력·공개 의무가 있어 이전 영향 평가(TIA)에서 이를 고려해야 합니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽을거리',
        items: [
          '[LLM GDPR 위험 비교 2026](/ko/local-llms/gdpr-llm-risk-comparison-2026)',
          '[Qwen은 GDPR에 안전합니까?](/ko/prompt-bites/is-qwen-gdpr-compliant)',
          '[로컬 LLM이 GDPR 준수에 도움이 됩니까?](/ko/prompt-bites/can-local-llm-help-gdpr)',
          '[Ollama 로컬 설치 가이드](/ko/local-llms/run-first-local-llm)',
        ],
      },
    },
  },
}
