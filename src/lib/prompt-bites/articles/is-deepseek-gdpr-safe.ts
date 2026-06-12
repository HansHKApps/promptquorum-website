import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Privacy & Security',
    title: 'Is DeepSeek GDPR Safe to Use?',
    seoTitle: 'Is DeepSeek GDPR Safe? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'DeepSeek API is the highest-risk LLM for GDPR: Chinese data law jurisdiction, no EU adequacy decision. DeepSeek local weights are lower risk. May 2026 update.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: ['DeepSeek R1', 'DeepSeek V3', 'DeepSeek Coder V2'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'DPOs, CISOs, and developers in GDPR-regulated organisations evaluating DeepSeek',
    parentArticle: '/local-llms/gdpr-llm-risk-comparison-2026',
    siblingBites: ['is-qwen-gdpr-compliant', 'can-local-llm-help-gdpr'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is DeepSeek GDPR safe to use?',
        answer: 'DeepSeek API poses the highest GDPR risk of any major LLM because servers are subject to Chinese data-access law (PIPL), there is no EU adequacy decision for China, and the Terms of Service explicitly reserve the right to share data with Chinese authorities. DeepSeek local open-weight models carry a different, lower risk profile.',
        bullets: [
          'DeepSeek API: servers in China, subject to PIPL data disclosure law — highest risk',
          'No EU adequacy decision for China: SCCs + TIA required, but TIA outcome may be unfavourable',
          'DeepSeek R1/V3 local weights (Apache 2.0): much lower risk if deployed locally without API calls',
        ],
        updatedDate: '2026-05',
      },
      de: { question: 'Ist DeepSeek DSGVO-konform?', answer: 'Die DeepSeek-API stellt das höchste DSGVO-Risiko unter allen großen LLMs dar, weil Server dem chinesischen Datenzugriffsrecht (PIPL) unterliegen, keine EU-Angemessenheitsentscheidung für China besteht und die Nutzungsbedingungen ausdrücklich das Recht vorbehält, Daten mit chinesischen Behörden zu teilen. Lokale DeepSeek-Open-Weight-Modelle haben ein anderes, geringeres Risikoprofil.', bullets: ['DeepSeek-API: Server in China, PIPL-Datenweitergabepflicht — höchstes Risiko', 'Keine EU-Angemessenheitsentscheidung für China: SCC + TFA erforderlich, TFA-Ergebnis aber möglicherweise ungünstig', 'DeepSeek R1/V3 lokale Gewichte (Apache 2.0): wesentlich geringeres Risiko bei lokaler Bereitstellung ohne API-Aufrufe'], updatedDate: '2026-05' },
      fr: { question: 'DeepSeek est-il sûr au regard du RGPD ?', answer: 'L\'API DeepSeek présente le risque RGPD le plus élevé parmi les LLMs majeurs car les serveurs sont soumis à la loi chinoise d\'accès aux données (PIPL), aucune décision d\'adéquation UE n\'existe pour la Chine, et les Conditions d\'utilisation se réservent explicitement le droit de partager des données avec les autorités chinoises. Les modèles DeepSeek open-weight en local ont un profil de risque différent et plus faible.', bullets: ['API DeepSeek : serveurs en Chine, loi PIPL de divulgation — risque le plus élevé', 'Pas de décision d\'adéquation UE pour la Chine : CCT + EIT requis, mais résultat de l\'EIT potentiellement défavorable', 'Poids locaux DeepSeek R1/V3 (Apache 2.0) : risque beaucoup plus faible si déployés localement sans appels API'], updatedDate: '2026-05' },
      ja: { question: 'DeepSeekはGDPR的に安全ですか？', answer: 'DeepSeek APIは主要LLMの中でGDPRリスクが最も高い。理由はサーバーが中国の個人情報アクセス法（PIPL）に従属し、中国にEU十分性認定がなく、利用規約が中国当局とのデータ共有権を明示的に留保しているためです。DeepSeekのローカルオープンウェイトモデルはリスクプロファイルが異なり、より低いリスクです。', bullets: ['DeepSeek API：中国サーバー、PILPデータ開示義務あり——最高リスク', '中国のEU十分性認定なし：SCC + TIA必要、ただしTIA結果は不利になる可能性', 'DeepSeek R1/V3ローカル重み（Apache 2.0）：APIコールなしでローカル展開すれば大幅リスク低減'], updatedDate: '2026-05' },
      zh: { question: 'DeepSeek在GDPR方面安全吗？', answer: 'DeepSeek API在主要LLM中具有最高的GDPR风险，因为服务器受中国数据访问法（PIPL）管辖，中国没有欧盟充分性认定，且服务条款明确保留了与中国当局共享数据的权利。DeepSeek本地开源权重模型具有不同且更低的风险状况。', bullets: ['DeepSeek API：服务器在中国，受PIPL数据披露法约束——风险最高', '中国无欧盟充分性认定：需要SCCs + TIA，但TIA结果可能不利', 'DeepSeek R1/V3本地权重（Apache 2.0）：本地部署无API调用风险大幅降低'], updatedDate: '2026-05' },
      es: { question: '¿Es seguro usar DeepSeek bajo el RGPD?', answer: 'La API de DeepSeek presenta el mayor riesgo para el RGPD entre los principales LLMs, porque los servidores están sujetos a la ley china de acceso a datos (PIPL), no existe una decisión de adecuación de la UE para China, y los Términos de Servicio se reservan explícitamente el derecho a compartir datos con las autoridades chinas. Los modelos de código abierto de DeepSeek ejecutados localmente tienen un perfil de riesgo diferente y más bajo.', bullets: ['API de DeepSeek: servidores en China, sujetos a la ley PIPL de divulgación — riesgo máximo', 'Sin decisión de adecuación de la UE para China: CCT + EIT requeridas, pero el resultado de la EIT puede ser desfavorable', 'Pesos locales de DeepSeek R1/V3 (Apache 2.0): riesgo mucho menor si se despliegan localmente sin llamadas a la API'], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API is the highest-risk LLM for GDPR use: Chinese jurisdiction, PIPL data-access law, no EU adequacy decision',
          'Standard Contractual Clauses are technically possible but a Transfer Impact Assessment for China is likely to produce an unfavourable result for sensitive data',
          'DeepSeek open-weight models (R1, V3, Coder V2) are Apache 2.0 — running them locally carries the same low risk as local Qwen or Llama',
          'For EU-regulated data: avoid the DeepSeek API; use local weights or switch to a model with EU-hosted API options',
        ],
      },
      body1: {
        title: 'Why the DeepSeek API Is High-Risk Under GDPR',
        content: [
          '<strong>Three compounding factors make the DeepSeek API the highest-risk option for GDPR-regulated data among major LLMs. First: servers are in China, meaning every API call is a GDPR Article 44 third-country transfer. Second: China has no EU adequacy decision (unlike the US, which has the EU-US Data Privacy Framework). Third: China\'s Personal Information Protection Law (PIPL) compels organisations operating in China to provide data to state authorities on request.</strong>',
          'Standard Contractual Clauses are a valid legal mechanism for transfers to China. However, post-Schrems II, organisations must also conduct a Transfer Impact Assessment evaluating whether SCCs provide real protection in practice. For China, the TIA is difficult to pass for sensitive data: PIPL overrides contractual protections, and the Chinese government can demand access. The EU\'s EDPB guidance makes clear that where supplementary measures cannot compensate for deficiencies in the destination country\'s legal framework, the transfer should not go ahead.',
          'This applies to any personal data: HR records, customer information, medical notes, legal correspondence. If your prompts contain any of this, the DeepSeek API creates regulatory exposure that SCCs alone may not cure.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'DeepSeek API is the highest GDPR risk among major LLMs because China\'s PIPL law can override Standard Contractual Clauses and compel data disclosure to state authorities.' },
          { type: 'plain-terms', text: 'Chinese law requires companies to hand over data to the government on request, and that law can override any privacy contracts you sign. This means promising to protect EU data with DeepSeek\'s API may not be legally enforceable.' },
        ],
      },
      body2: {
        title: 'DeepSeek Local Weights — A Completely Different Risk Profile',
        content: [
          '<strong>The open-weight DeepSeek models (R1, V3, Coder V2) are a separate product from the API. They are released under Apache 2.0 and can be downloaded and run locally with no connection to DeepSeek servers.</strong> Running local weights eliminates the GDPR Article 44 transfer problem entirely — the same way local Qwen or local Llama does.',
          'Local DeepSeek R1 7B or 8B runs comfortably via Ollama on a 6–8 GB VRAM GPU. The performance is excellent: R1 is one of the strongest reasoning models available at the 7B tier. For coding tasks, DeepSeek Coder V2 is available in smaller variants.',
          'The one remaining question for local DeepSeek: model training. DeepSeek has not published full details of what data was used to train these models. For high-assurance environments (healthcare, legal, government), this uncertainty may be relevant even for local deployment. Qwen 3 (Alibaba/Tongyi) and Llama 4 (Meta) provide more transparency about training data provenance.',
        ],
        columns: ['Deployment', 'GDPR Risk', 'Reason', 'Recommended Action'],
        rows: [
          { 'Deployment': 'DeepSeek API', 'GDPR Risk': 'Highest', 'Reason': 'Chinese servers, PIPL, no adequacy decision', 'Recommended Action': 'Avoid for personal or sensitive data' },
          { 'Deployment': 'DeepSeek local (R1/V3)', 'GDPR Risk': 'Low', 'Reason': 'No transfer, Apache 2.0 weights', 'Recommended Action': 'Acceptable; note training-data opacity' },
          { 'Deployment': 'Qwen local (2.5/3)', 'GDPR Risk': 'Low', 'Reason': 'No transfer, Apache 2.0, published training info', 'Recommended Action': 'Recommended for data-sensitive use' },
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
            q: 'Is DeepSeek R1 the same as the DeepSeek API?',
            a: 'No. DeepSeek R1 refers to the open-weight model released on Hugging Face under Apache 2.0. The DeepSeek API (api.deepseek.com) is a separate cloud service with servers in China. The GDPR risk applies to the API, not to the weights. Running R1 locally via Ollama (<code>ollama run deepseek-r1:7b</code>) has no transfer risk.',
          },
          {
            q: 'What is the PIPL and why does it matter for GDPR?',
            a: 'China\'s Personal Information Protection Law (PIPL), effective November 2021, requires organisations operating in China to provide personal information to public security or national security authorities on request, regardless of where those organisations are headquartered. This means that DeepSeek — as a Chinese company — can be compelled to hand over data processed through its API. SCCs cannot override a mandatory disclosure obligation in the destination country\'s law. This is the core reason EU DPAs treat Chinese data transfers as high-risk.',
          },
          {
            q: 'Which LLM is safest for GDPR-regulated data?',
            a: 'For maximum GDPR safety: any local open-weight model (Qwen 3, Llama 4, DeepSeek R1 local) running offline with no external API calls. Among these, Qwen 3 and Llama 4 have more transparent training data provenance. See the <a href="/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">full GDPR LLM risk comparison</a> for a structured decision tool.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Privacy & Security',
    title: 'Ist DeepSeek DSGVO-sicher?',
    seoTitle: 'Ist DeepSeek DSGVO-konform?',
    metaDescription: 'Ist DeepSeek DSGVO-konform? Die DeepSeek-API speichert Daten in China – ein DSGVO-Risiko. Lokal über Ollama betrieben bleibt DeepSeek DSGVO-konform.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      de: {
        question: 'Ist DeepSeek DSGVO-sicher?',
        answer: 'Die DeepSeek-API stellt das höchste DSGVO-Risiko unter den großen LLMs dar: Server unterliegen dem chinesischen Datenzugriffsrecht (PIPL), es gibt keine EU-Angemessenheitsentscheidung für China, und die Nutzungsbedingungen behalten ausdrücklich das Recht vor, Daten mit chinesischen Behörden zu teilen. Lokale DeepSeek-Open-Weight-Modelle haben ein deutlich niedrigeres Risikoprofil.',
        bullets: [
          'DeepSeek-API: Server in China, PIPL-Datenweitergabepflicht — höchstes Risiko',
          'Keine EU-Angemessenheitsentscheidung: SCC + TFA erforderlich, Ergebnis für sensible Daten wahrscheinlich ungünstig',
          'Lokale DeepSeek R1/V3 Gewichte (Apache 2.0): wesentlich geringeres Risiko ohne API-Aufrufe',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek-API hat das höchste DSGVO-Risiko: chinesische Jurisdiktion, PIPL-Datenzugriffsgesetz, keine EU-Angemessenheitsentscheidung',
          'SCC sind technisch möglich, aber eine Transferfolgenabschätzung für China wird für sensible Daten wahrscheinlich ein ungünstiges Ergebnis liefern',
          'DeepSeek-Open-Weight-Modelle (R1, V3, Coder V2) sind Apache 2.0 — lokal betrieben haben sie dasselbe geringe Risiko wie lokales Qwen oder Llama',
          'Für EU-regulierte Daten: DeepSeek-API vermeiden; lokale Gewichte nutzen oder auf ein Modell mit EU-gehosteten API-Optionen umsteigen',
        ],
      },
      body1: {
        title: 'Warum die DeepSeek-API unter der DSGVO hohes Risiko birgt',
        content: [
          '<strong>Drei kumulative Faktoren machen die DeepSeek-API zur riskantesten Option für DSGVO-regulierte Daten unter den großen LLMs. Erstens: Server befinden sich in China, was jeden API-Aufruf zu einem DSGVO-Artikel-44-Drittlandtransfer macht. Zweitens: China hat keine EU-Angemessenheitsentscheidung. Drittens: Chinas Datenschutzgesetz für personenbezogene Informationen (PIPL) verpflichtet in China tätige Organisationen, Daten auf staatliche Anfrage bereitzustellen.</strong>',
          'Standardvertragsklauseln sind ein gültiger rechtlicher Mechanismus für Transfers nach China. Nach Schrems II müssen Organisationen jedoch auch eine Transferfolgenabschätzung durchführen, die bewertet, ob SCC in der Praxis wirksamen Schutz bieten. Für China ist die TFA für sensible Daten schwer zu bestehen: PIPL überschreibt vertragliche Schutzmaßnahmen.',
          'Dies gilt für alle personenbezogenen Daten: HR-Unterlagen, Kundendaten, medizinische Notizen, rechtliche Korrespondenz. Falls Ihre Prompts derartige Daten enthalten, schafft die DeepSeek-API regulatorisches Risiko, das SCC allein möglicherweise nicht heilen kann.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Die DeepSeek-API ist das höchste DSGVO-Risiko unter den großen LLMs, weil Chinas PIPL-Gesetz Standardvertragsklauseln außer Kraft setzen und staatliche Datenweitergabe erzwingen kann.' },
          { type: 'plain-terms', text: 'Das chinesische Recht verpflichtet Unternehmen, Daten auf Anfrage an die Regierung weiterzugeben, und das Gesetz kann jede Datenschutzvereinbarung außer Kraft setzen. Datenschutzversprechen mit der DeepSeek-API sind möglicherweise rechtlich nicht durchsetzbar.' },
        ],
      },
      body2: {
        title: 'Lokale DeepSeek-Gewichte — ein völlig anderes Risikoprofil',
        content: [
          '<strong>Die Open-Weight-DeepSeek-Modelle (R1, V3, Coder V2) sind ein separates Produkt von der API. Sie sind unter Apache 2.0 verfügbar und können ohne Verbindung zu DeepSeek-Servern lokal ausgeführt werden.</strong> Die Ausführung lokaler Gewichte beseitigt das DSGVO-Artikel-44-Transferproblem vollständig.',
          'Lokales DeepSeek R1 7B oder 8B läuft komfortabel über Ollama auf einer 6–8 GB VRAM GPU. R1 ist eines der stärksten Reasoning-Modelle auf dem 7B-Tier. Für Coding-Aufgaben ist DeepSeek Coder V2 in kleineren Varianten verfügbar.',
          'Die verbleibende Frage für lokales DeepSeek: Model-Training. DeepSeek hat keine vollständigen Details zu den Trainingsdaten veröffentlicht. Für hochsichere Umgebungen (Gesundheitswesen, Recht, Behörden) kann diese Unklarheit relevant sein. Qwen 3 und Llama 4 bieten mehr Transparenz bei der Herkunft der Trainingsdaten.',
        ],
        columns: ['Bereitstellung', 'DSGVO-Risiko', 'Begründung', 'Empfohlene Maßnahme'],
        rows: [
          { 'Bereitstellung': 'DeepSeek-API', 'DSGVO-Risiko': 'Höchstes', 'Begründung': 'Chinesische Server, PIPL, keine Angemessenheitsentscheidung', 'Empfohlene Maßnahme': 'Für personenbezogene oder sensible Daten vermeiden' },
          { 'Bereitstellung': 'DeepSeek lokal (R1/V3)', 'DSGVO-Risiko': 'Niedrig', 'Begründung': 'Kein Transfer, Apache-2.0-Gewichte', 'Empfohlene Maßnahme': 'Akzeptabel; Intransparenz bei Trainingsdaten beachten' },
          { 'Bereitstellung': 'Qwen lokal (2.5/3)', 'DSGVO-Risiko': 'Niedrig', 'Begründung': 'Kein Transfer, Apache 2.0, veröffentlichte Trainingsdaten-Info', 'Empfohlene Maßnahme': 'Für datensensible Nutzung empfohlen' },
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
            a: 'Chinas Datenschutzgesetz für personenbezogene Informationen (PIPL, in Kraft seit November 2021) verpflichtet in China tätige Organisationen, personenbezogene Daten auf Anfrage von Sicherheits- oder nationalen Sicherheitsbehörden bereitzustellen, unabhängig vom Firmensitz. SCC können keine obligatorische Offenlegungspflicht im Recht des Bestimmungslandes außer Kraft setzen.',
          },
          {
            q: 'Welches LLM ist für DSGVO-regulierte Daten am sichersten?',
            a: 'Für maximale DSGVO-Sicherheit: jedes lokale Open-Weight-Modell (Qwen 3, Llama 4, DeepSeek R1 lokal), das offline ohne externe API-Aufrufe läuft. Qwen 3 und Llama 4 haben transparentere Trainingsdatenherkunft. Den vollständigen Vergleich finden Sie im <a href="/de/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">vollständigen DSGVO-LLM-Risikoausblick</a>.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Privacy & Security',
    title: 'DeepSeek est-il sûr au regard du RGPD ?',
    seoTitle: 'DeepSeek sûr pour le RGPD 2026 ? | Prompt Bites | PromptQuorum',
    metaDescription: 'L\'API DeepSeek est le LLM le plus risqué pour le RGPD : juridiction chinoise, PIPL, pas de décision d\'adéquation UE. Les poids locaux DeepSeek sont moins risqués. Mai 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      fr: {
        question: 'DeepSeek est-il sûr au regard du RGPD ?',
        answer: 'L\'API DeepSeek présente le risque RGPD le plus élevé parmi les LLMs majeurs car les serveurs sont soumis à la loi chinoise d\'accès aux données (PIPL), aucune décision d\'adéquation UE n\'existe pour la Chine, et les CGU se réservent explicitement le droit de partager les données avec les autorités chinoises. Les modèles DeepSeek open-weight en local ont un profil de risque différent et plus faible.',
        bullets: [
          'API DeepSeek : serveurs en Chine, loi PIPL de divulgation — risque le plus élevé',
          'Pas de décision d\'adéquation UE pour la Chine : CCT + EIT requis, résultat potentiellement défavorable',
          'Poids DeepSeek R1/V3 en local (Apache 2.0) : risque bien plus faible sans appels API',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'L\'API DeepSeek présente le risque RGPD le plus élevé : juridiction chinoise, loi PIPL d\'accès aux données, pas de décision d\'adéquation UE',
          'Les CCT sont techniquement possibles mais une EIT pour la Chine aboutira probablement à un résultat défavorable pour les données sensibles',
          'Les modèles open-weight DeepSeek (R1, V3, Coder V2) sont Apache 2.0 — en local, risque aussi faible que Qwen ou Llama local',
          'Pour les données réglementées UE : éviter l\'API DeepSeek ; utiliser les poids locaux ou un modèle avec des options API hébergées en UE',
        ],
      },
      body1: {
        title: 'Pourquoi l\'API DeepSeek est à haut risque sous le RGPD',
        content: [
          '<strong>Trois facteurs cumulatifs font de l\'API DeepSeek l\'option la plus risquée pour les données réglementées RGPD. Premièrement : les serveurs sont en Chine, ce qui fait de chaque appel API un transfert vers un pays tiers selon l\'Article 44 du RGPD. Deuxièmement : la Chine n\'a pas de décision d\'adéquation UE. Troisièmement : la loi chinoise PIPL contraint les organisations opérant en Chine à fournir des données aux autorités d\'État sur demande.</strong>',
          'Les CCT sont un mécanisme juridique valide pour les transferts vers la Chine. Cependant, post-Schrems II, les organisations doivent aussi conduire une EIT évaluant si les CCT fournissent une protection réelle en pratique. Pour la Chine, l\'EIT est difficile à valider pour les données sensibles : PIPL peut outrepasser les protections contractuelles.',
          'Cela s\'applique à toutes les données personnelles : dossiers RH, données clients, notes médicales, correspondance juridique. Si vos prompts contiennent ces données, l\'API DeepSeek crée une exposition réglementaire que les CCT seules peuvent ne pas résoudre.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'L\'API DeepSeek est le risque RGPD le plus élevé parmi les LLMs majeurs car la loi PIPL chinoise peut outrepasser les CCT et contraindre à divulguer des données aux autorités.' },
          { type: 'plain-terms', text: 'La loi chinoise oblige les entreprises à transmettre des données au gouvernement sur demande, et cette loi peut annuler tout contrat de confidentialité. Les promesses de protection des données UE avec l\'API DeepSeek peuvent ne pas être juridiquement opposables.' },
        ],
      },
      body2: {
        title: 'Poids locaux DeepSeek — un profil de risque totalement différent',
        content: [
          '<strong>Les modèles DeepSeek open-weight (R1, V3, Coder V2) sont un produit distinct de l\'API. Publiés sous Apache 2.0, ils peuvent être téléchargés et exécutés localement sans connexion aux serveurs DeepSeek.</strong> L\'exécution locale élimine entièrement le problème de transfert de l\'Article 44 du RGPD.',
          'DeepSeek R1 7B ou 8B en local tourne confortablement via Ollama sur un GPU 6–8 Go de VRAM. R1 est l\'un des meilleurs modèles de raisonnement disponibles au tier 7B. Pour les tâches de code, DeepSeek Coder V2 est disponible en variantes plus compactes.',
          'Question résiduelle pour DeepSeek local : la formation du modèle. DeepSeek n\'a pas publié les détails complets des données d\'entraînement. Pour les environnements à haute assurance (santé, juridique, gouvernement), cette incertitude peut être pertinente. Qwen 3 et Llama 4 offrent plus de transparence sur la provenance des données d\'entraînement.',
        ],
        columns: ['Déploiement', 'Risque RGPD', 'Raison', 'Action recommandée'],
        rows: [
          { 'Déploiement': 'API DeepSeek', 'Risque RGPD': 'Le plus élevé', 'Raison': 'Serveurs chinois, PIPL, pas de décision d\'adéquation', 'Action recommandée': 'Éviter pour données personnelles ou sensibles' },
          { 'Déploiement': 'DeepSeek local (R1/V3)', 'Risque RGPD': 'Faible', 'Raison': 'Pas de transfert, poids Apache 2.0', 'Action recommandée': 'Acceptable ; noter l\'opacité des données d\'entraînement' },
          { 'Déploiement': 'Qwen local (2.5/3)', 'Risque RGPD': 'Faible', 'Raison': 'Pas de transfert, Apache 2.0, info formation publiée', 'Action recommandée': 'Recommandé pour usage data-sensible' },
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
            a: 'La loi chinoise sur la protection des informations personnelles (PIPL, en vigueur depuis novembre 2021) oblige les organisations opérant en Chine à fournir des informations personnelles aux autorités de sécurité publique ou nationale sur demande, quel que soit le siège de ces organisations. Les CCT ne peuvent pas outrepasser une obligation de divulgation obligatoire dans le droit du pays de destination.',
          },
          {
            q: 'Quel LLM est le plus sûr pour les données réglementées RGPD ?',
            a: 'Pour une sécurité RGPD maximale : tout modèle open-weight local (Qwen 3, Llama 4, DeepSeek R1 local) fonctionnant hors ligne sans appels API externes. Qwen 3 et Llama 4 ont une provenance de données d\'entraînement plus transparente. Consultez la <a href="/fr/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">comparaison complète des risques RGPD des LLMs</a>.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Privacy & Security',
    title: 'DeepSeekはGDPR的に安全ですか？',
    seoTitle: 'DeepSeekはGDPR安全？2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'DeepSeek APIは主要LLM中でGDPRリスクが最高：中国管轄・PIPL・EU十分性認定なし。ローカルDeepSeek重みはリスクが低い。2026年5月更新。',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      ja: {
        question: 'DeepSeekはGDPR的に安全ですか？',
        answer: 'DeepSeek APIは主要LLMの中でGDPRリスクが最も高い。サーバーが中国の個人情報保護法（PIPL）に従属し、中国にEU十分性認定がなく、利用規約が中国当局とのデータ共有を明示的に留保しています。DeepSeekのローカルオープンウェイトモデルはリスクプロファイルが異なり、はるかに低いリスクです。',
        bullets: [
          'DeepSeek API：中国サーバー、PIPL開示義務あり——最高リスク',
          '中国のEU十分性認定なし：SCC + TIA必要、感度データへの結果は不利になる可能性',
          'DeepSeek R1/V3ローカル重み（Apache 2.0）：APIなしでローカル展開すればリスク大幅低減',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek APIはGDPRリスクが最高：中国管轄、PILPデータアクセス法、EU十分性認定なし',
          'SCCは技術的に可能だが、中国のTIAは感度データに不利な結果をもたらす可能性が高い',
          'DeepSeekオープンウェイトモデル（R1、V3、Coder V2）はApache 2.0——ローカル実行ならQwenやLlamaと同様の低リスク',
          'EU規制対象データ：DeepSeek APIを避け、ローカル重みかEUホストAPIのあるモデルに切り替える',
        ],
      },
      body1: {
        title: 'DeepSeek APIがGDPR下で高リスクな理由',
        content: [
          '<strong>3つの累積的要因がDeepSeek APIをGDPR規制データに対して最もリスクの高い主要LLMにしています。第一：サーバーが中国にあり、すべてのAPI呼び出しがGDPR第44条の第三国転送になります。第二：中国はEU十分性認定を取得していません。第三：中国の個人情報保護法（PIPL）は中国で事業を行う組織に国家要求時のデータ提供を義務付けています。</strong>',
          '中国への転送にはSCCが有効な法的手段です。ただしPost-Schrems II以降、組織はSCCが実際に保護を提供するかどうかを評価するTIAも実施する必要があります。中国では、PILPが契約上の保護を覆すことができるため、感度データについてTIAをパスすることは困難です。',
          'これはすべての個人データ（HR記録、顧客情報、医療ノート、法的書類）に適用されます。プロンプトにこれらのデータが含まれている場合、DeepSeek APIはSCCだけでは解決できない規制上のリスクを生じさせます。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'DeepSeek APIは主要LLM中でGDPRリスクが最高です。中国のPIPL法がSCCを覆し、当局へのデータ開示を強制できるためです。' },
          { type: 'plain-terms', text: '中国の法律は政府の要求に応じてデータを引き渡すことを企業に義務付けており、この法律はあらゆるプライバシー契約を無効にできます。DeepSeek APIでのEUデータ保護の約束は法的に執行できない可能性があります。' },
        ],
      },
      body2: {
        title: 'ローカルDeepSeek重み——まったく異なるリスクプロファイル',
        content: [
          '<strong>DeepSeekオープンウェイトモデル（R1、V3、Coder V2）はAPIとは別製品です。Apache 2.0でリリースされており、DeepSeekサーバーへの接続なしにローカル実行できます。</strong>ローカル重みの実行はGDPR第44条の転送問題を完全に排除します——ローカルQwenやLlamaと同様です。',
          'ローカルDeepSeek R1 7BまたはBは6〜8 GB VRAM GPUでOllama経由で快適に動作します。R1は7Bティアで最高の推論モデルの一つです。コーディングタスクにはDeepSeek Coder V2の小型バリアントが利用可能です。',
          'ローカルDeepSeekの残る問題：モデル訓練。DeepSeekは訓練データの詳細を完全には公開していません。医療・法務・政府などの高保証環境では、この不確実性はローカル展開でも関連性を持つ場合があります。Qwen 3とLlama 4は訓練データの出所についてより透明です。',
        ],
        columns: ['展開方法', 'GDPRリスク', '理由', '推奨アクション'],
        rows: [
          { '展開方法': 'DeepSeek API', 'GDPRリスク': '最高', '理由': '中国サーバー、PIPL、十分性認定なし', '推奨アクション': '個人・機密データには使用を避ける' },
          { '展開方法': 'DeepSeek ローカル（R1/V3）', 'GDPRリスク': '低', '理由': '転送なし、Apache 2.0重み', '推奨アクション': '許容可能；訓練データの不透明性に注意' },
          { '展開方法': 'Qwen ローカル（2.5/3）', 'GDPRリスク': '低', '理由': '転送なし、Apache 2.0、訓練情報公開済み', '推奨アクション': 'データ機密用途に推奨' },
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
            a: '中国の個人情報保護法（PIPL、2021年11月施行）は、中国で事業を行う組織に対し、本社所在地に関わらず、公安や国家安全保障当局の要求に応じて個人情報を提供することを義務付けています。SCCは転送先国の法律における必須開示義務を覆すことができません。',
          },
          {
            q: 'GDPR規制対象データに最も安全なLLMはどれですか？',
            a: 'GDPR最大安全を求めるなら：外部APIなしでオフライン動作するローカルオープンウェイトモデル（Qwen 3、Llama 4、DeepSeek R1ローカル）。Qwen 3とLlama 4は訓練データの出所が透明です。構造化された決定ツールについては<a href="/ja/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">GDPR LLMリスク比較全文</a>を参照してください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Privacy & Security',
    title: 'DeepSeek在GDPR方面安全吗？',
    seoTitle: 'DeepSeek符合GDPR安全标准吗？2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'DeepSeek API是GDPR风险最高的LLM：中国数据访问法管辖，无欧盟充分性认定。本地DeepSeek权重风险较低。2026年5月更新。',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      zh: {
        question: 'DeepSeek在GDPR方面安全吗？',
        answer: 'DeepSeek API在主要LLM中具有最高的GDPR风险，因为服务器受中国数据访问法（PIPL）管辖，中国没有欧盟充分性认定，且服务条款明确保留了与中国当局共享数据的权利。DeepSeek本地开源权重模型具有完全不同且更低的风险状况。',
        bullets: [
          'DeepSeek API：服务器在中国，受PIPL数据披露法约束——风险最高',
          '中国无欧盟充分性认定：需要SCCs + TIA，敏感数据结果可能不利',
          'DeepSeek R1/V3本地权重（Apache 2.0）：无API调用本地部署风险大幅降低',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API的GDPR风险最高：中国管辖、PIPL数据访问法、无欧盟充分性认定',
          'SCCs在技术上可行，但针对中国的TIA对敏感数据可能产生不利结果',
          'DeepSeek开源权重模型（R1、V3、Coder V2）为Apache 2.0——本地运行风险与本地Qwen或Llama一样低',
          '对于欧盟监管数据：避免使用DeepSeek API；使用本地权重或切换到有欧盟托管API选项的模型',
        ],
      },
      body1: {
        title: 'DeepSeek API在GDPR下高风险的原因',
        content: [
          '<strong>三个叠加因素使DeepSeek API成为GDPR监管数据中主要LLM里风险最高的选择。第一：服务器在中国，使每次API调用都成为GDPR第44条的第三国传输。第二：中国没有欧盟充分性认定。第三：中国个人信息保护法（PIPL）要求在中国运营的组织在国家要求时提供数据。</strong>',
          '标准合同条款是向中国传输的有效法律机制。但Post-Schrems II之后，组织还必须进行传输影响评估，评估SCCs是否在实践中提供真正保护。对于中国，感度数据的TIA很难通过：PIPL可以覆盖合同保护。',
          '这适用于所有个人数据：HR记录、客户信息、医疗笔记、法律文件。如果您的提示词包含这些数据，DeepSeek API会产生SCCs单独可能无法解决的监管风险。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'DeepSeek API是主要LLM中GDPR风险最高的，因为中国PIPL法律可以覆盖标准合同条款并强制向当局披露数据。' },
          { type: 'plain-terms', text: '中国法律要求企业在政府要求时交出数据，这项法律可以使任何隐私合同失效。使用DeepSeek API保护欧盟数据的承诺可能在法律上无法执行。' },
        ],
      },
      body2: {
        title: '本地DeepSeek权重——完全不同的风险状况',
        content: [
          '<strong>DeepSeek开源权重模型（R1、V3、Coder V2）与API是完全不同的产品。它们以Apache 2.0发布，可以在不连接DeepSeek服务器的情况下本地下载和运行。</strong>本地运行权重完全消除了GDPR第44条的传输问题——与本地Qwen或Llama相同。',
          '本地DeepSeek R1 7B或8B通过Ollama在6-8 GB VRAM GPU上运行流畅。R1是7B层级最强的推理模型之一。对于编程任务，DeepSeek Coder V2有更小的变体可用。',
          '本地DeepSeek的剩余问题：模型训练。DeepSeek没有公布训练数据的完整细节。对于高保证环境（医疗、法律、政府），即使是本地部署，这种不确定性也可能相关。Qwen 3和Llama 4在训练数据来源方面更透明。',
        ],
        columns: ['部署方式', 'GDPR风险', '原因', '推荐操作'],
        rows: [
          { '部署方式': 'DeepSeek API', 'GDPR风险': '最高', '原因': '中国服务器、PIPL、无充分性认定', '推荐操作': '个人或敏感数据应避免使用' },
          { '部署方式': 'DeepSeek本地（R1/V3）', 'GDPR风险': '低', '原因': '无传输，Apache 2.0权重', '推荐操作': '可接受；注意训练数据不透明' },
          { '部署方式': 'Qwen本地（2.5/3）', 'GDPR风险': '低', '原因': '无传输，Apache 2.0，已公布训练信息', '推荐操作': '推荐用于数据敏感用途' },
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
            a: '中国个人信息保护法（PIPL，2021年11月生效）要求在中国运营的组织在公安或国家安全机关要求时提供个人信息，无论这些组织总部在哪里。SCCs无法覆盖目的地国法律中的强制披露义务。这就是欧盟DPA将中国数据传输视为高风险的核心原因。',
          },
          {
            q: 'GDPR监管数据最安全的LLM是哪个？',
            a: '最大GDPR安全性：任何无外部API调用、离线运行的本地开源权重模型（Qwen 3、Llama 4、DeepSeek R1本地）。Qwen 3和Llama 4的训练数据来源更透明。结构化决策工具请参阅<a href="/zh/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">GDPR LLM风险完整对比</a>。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Privacy & Security',
    title: 'O DeepSeek é seguro para uso sob o RGPD?',
    seoTitle: 'DeepSeek é seguro para o RGPD? 2026 | PromptQuorum',
    metaDescription: 'A API do DeepSeek é o LLM de maior risco para o RGPD: jurisdição da lei de dados chinesa, sem decisão de adequação da UE. Pesos locais do DeepSeek têm menor risco. Maio de 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      pt: {
        question: 'O DeepSeek é seguro para uso sob o RGPD?',
        answer: 'A API do DeepSeek apresenta o maior risco para o RGPD entre os principais LLMs, porque os servidores estão sujeitos à lei chinesa de acesso a dados (PIPL), não existe uma decisão de adequação da UE para a China, e os Termos de Serviço reservam explicitamente o direito de compartilhar dados com as autoridades chinesas. Os modelos de código aberto do DeepSeek executados localmente têm um perfil de risco diferente e mais baixo.',
        bullets: [
          'API do DeepSeek: servidores na China, sujeitos à lei PIPL de divulgação — risco máximo',
          'Sem decisão de adequação da UE para a China: CCT + AIT requeridas, mas o resultado da AIT pode ser desfavorável',
          'Pesos locais do DeepSeek R1/V3 (Apache 2.0): risco muito menor se implantados localmente sem chamadas à API',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A API do DeepSeek é o LLM de maior risco para o RGPD: jurisdição chinesa, lei PIPL de acesso a dados, sem decisão de adequação da UE',
          'As CCT são tecnicamente possíveis, mas uma Avaliação de Impacto de Transferência para a China provavelmente produzirá um resultado desfavorável para dados sensíveis',
          'Os modelos de código aberto do DeepSeek (R1, V3, Coder V2) são Apache 2.0: executados localmente, têm o mesmo baixo risco que Qwen ou Llama local',
          'Para dados regulados pela UE: evite a API do DeepSeek; use pesos locais ou mude para um modelo com opções de API hospedadas na UE',
        ],
      },
      body1: {
        title: 'Por que a API do DeepSeek tem alto risco sob o RGPD',
        content: [
          '<strong>Três fatores cumulativos fazem da API do DeepSeek a opção de maior risco para dados regulados pelo RGPD entre os principais LLMs. Primeiro: os servidores estão na China, tornando cada chamada à API uma transferência para país terceiro segundo o Artigo 44 do RGPD. Segundo: a China não tem decisão de adequação da UE (ao contrário dos EUA, que têm o Quadro de Privacidade de Dados UE-EUA). Terceiro: a Lei de Proteção de Informações Pessoais da China (PIPL) obriga organizações que operam na China a fornecer dados às autoridades estatais mediante solicitação.</strong>',
          'As Cláusulas Contratuais Padrão são um mecanismo jurídico válido para transferências para a China. No entanto, após o Schrems II, as organizações também devem conduzir uma Avaliação de Impacto de Transferência avaliando se as CCT fornecem proteção real na prática. Para a China, a AIT é difícil de superar para dados sensíveis: a PIPL pode substituir as proteções contratuais e o governo chinês pode exigir acesso. A orientação do CEPD da UE deixa claro que onde medidas suplementares não podem compensar deficiências no quadro jurídico do país de destino, a transferência não deve ser realizada.',
          'Isso se aplica a qualquer dado pessoal: registros de RH, informações de clientes, notas médicas, correspondência jurídica. Se seus prompts contiverem algum desses dados, a API do DeepSeek cria exposição regulatória que as CCT sozinhas podem não resolver.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A API do DeepSeek é o maior risco de RGPD entre os principais LLMs porque a lei PIPL da China pode substituir as Cláusulas Contratuais Padrão e obrigar a divulgação de dados às autoridades estatais.' },
          { type: 'plain-terms', text: 'A lei chinesa exige que empresas entreguem dados ao governo mediante solicitação, e essa lei pode anular qualquer contrato de privacidade assinado. Isso significa que as promessas de proteger dados da UE com a API do DeepSeek podem não ser legalmente exequíveis.' },
        ],
      },
      body2: {
        title: 'Pesos locais do DeepSeek — um perfil de risco completamente diferente',
        content: [
          '<strong>Os modelos de código aberto do DeepSeek (R1, V3, Coder V2) são um produto distinto da API. São lançados sob Apache 2.0 e podem ser baixados e executados localmente sem nenhuma conexão com os servidores do DeepSeek.</strong> A execução de pesos locais elimina completamente o problema de transferência do Artigo 44 do RGPD — da mesma forma que o Qwen ou Llama local.',
          'O DeepSeek R1 7B ou 8B local funciona confortavelmente via Ollama em uma GPU com 6–8 GB de VRAM. O desempenho é excelente: o R1 é um dos modelos de raciocínio mais fortes disponíveis no nível 7B. Para tarefas de codificação, o DeepSeek Coder V2 está disponível em variantes menores.',
          'A questão restante para o DeepSeek local: treinamento do modelo. O DeepSeek não publicou detalhes completos sobre quais dados foram usados para treinar esses modelos. Para ambientes de alta garantia (saúde, jurídico, governo), essa incerteza pode ser relevante mesmo para implantação local. Qwen 3 (Alibaba/Tongyi) e Llama 4 (Meta) fornecem mais transparência sobre a procedência dos dados de treinamento.',
        ],
        columns: ['Implantação', 'Risco RGPD', 'Motivo', 'Ação recomendada'],
        rows: [
          { 'Implantação': 'API do DeepSeek', 'Risco RGPD': 'Máximo', 'Motivo': 'Servidores chineses, PIPL, sem decisão de adequação', 'Ação recomendada': 'Evitar para dados pessoais ou sensíveis' },
          { 'Implantação': 'DeepSeek local (R1/V3)', 'Risco RGPD': 'Baixo', 'Motivo': 'Sem transferência, pesos Apache 2.0', 'Ação recomendada': 'Aceitável; note a opacidade dos dados de treinamento' },
          { 'Implantação': 'Qwen local (2.5/3)', 'Risco RGPD': 'Baixo', 'Motivo': 'Sem transferência, Apache 2.0, informações de treinamento publicadas', 'Ação recomendada': 'Recomendado para uso com dados sensíveis' },
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
            q: 'DeepSeek R1 é a mesma coisa que a API do DeepSeek?',
            a: 'Não. DeepSeek R1 se refere ao modelo de código aberto lançado no Hugging Face sob Apache 2.0. A API do DeepSeek (api.deepseek.com) é um serviço em nuvem separado com servidores na China. O risco para o RGPD aplica-se à API, não aos pesos. Executar R1 localmente via Ollama (<code>ollama run deepseek-r1:7b</code>) não implica nenhum risco de transferência.',
          },
          {
            q: 'O que é a PIPL e por que importa para o RGPD?',
            a: 'A Lei de Proteção de Informações Pessoais da China (PIPL), em vigor desde novembro de 2021, exige que organizações que operam na China forneçam informações pessoais às autoridades de segurança pública ou segurança nacional mediante solicitação, independentemente de onde essas organizações estejam sediadas. Isso significa que o DeepSeek — como empresa chinesa — pode ser compelido a entregar dados processados através de sua API. As CCT não podem substituir uma obrigação de divulgação obrigatória na lei do país de destino. Essa é a razão principal pela qual as APDs da UE consideram as transferências de dados para a China de alto risco.',
          },
          {
            q: 'Qual LLM é o mais seguro para dados regulados pelo RGPD?',
            a: 'Para máxima segurança sob o RGPD: qualquer modelo de código aberto local (Qwen 3, Llama 4, DeepSeek R1 local) rodando offline sem chamadas a APIs externas. Entre eles, Qwen 3 e Llama 4 têm proveniência de dados de treinamento mais transparente. Consulte a <a href="/pt/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">comparação completa de riscos RGPD entre LLMs</a> para uma ferramenta de decisão estruturada.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Privacy & Security',
    title: '¿Es seguro usar DeepSeek bajo el RGPD?',
    seoTitle: '¿DeepSeek es seguro para el RGPD? 2026 | PromptQuorum',
    metaDescription: 'La API de DeepSeek es el LLM de mayor riesgo RGPD: jurisdicción china, ley PIPL y sin adecuación de la UE. Los pesos locales son de menor riesgo. Mayo 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      es: {
        question: '¿Es seguro usar DeepSeek bajo el RGPD?',
        answer: 'La API de DeepSeek presenta el mayor riesgo para el RGPD entre los principales LLMs, porque los servidores están sujetos a la ley china de acceso a datos (PIPL), no existe una decisión de adecuación de la UE para China, y los Términos de Servicio se reservan explícitamente el derecho a compartir datos con las autoridades chinas. Los modelos de código abierto de DeepSeek ejecutados localmente tienen un perfil de riesgo diferente y más bajo.',
        bullets: [
          'API de DeepSeek: servidores en China, sujetos a la ley PIPL de divulgación — riesgo máximo',
          'Sin decisión de adecuación de la UE para China: CCT + EIT requeridas, pero el resultado de la EIT puede ser desfavorable',
          'Pesos locales de DeepSeek R1/V3 (Apache 2.0): riesgo mucho menor si se despliegan localmente sin llamadas a la API',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La API de DeepSeek es el LLM de mayor riesgo para el RGPD: jurisdicción china, ley PIPL de acceso a datos, sin decisión de adecuación de la UE',
          'Las CCT son técnicamente posibles, pero una Evaluación de Impacto de Transferencia para China probablemente producirá un resultado desfavorable para datos sensibles',
          'Los modelos de código abierto de DeepSeek (R1, V3, Coder V2) son Apache 2.0: ejecutados localmente, tienen el mismo bajo riesgo que Qwen o Llama local',
          'Para datos regulados en la UE: evita la API de DeepSeek; usa pesos locales o cambia a un modelo con opciones de API alojadas en la UE',
        ],
      },
      body1: {
        title: 'Por qué la API de DeepSeek tiene alto riesgo bajo el RGPD',
        content: [
          '<strong>Tres factores acumulativos hacen de la API de DeepSeek la opción de mayor riesgo para datos regulados por el RGPD entre los principales LLMs. Primero: los servidores están en China, lo que convierte cada llamada a la API en una transferencia a un tercer país según el Artículo 44 del RGPD. Segundo: China no tiene decisión de adecuación de la UE (a diferencia de EE.UU., que cuenta con el Marco de Privacidad de Datos UE-EE.UU.). Tercero: la Ley de Protección de la Información Personal de China (PIPL) obliga a las organizaciones que operan en China a proporcionar datos a las autoridades estatales bajo petición.</strong>',
          'Las Cláusulas Contractuales Tipo son un mecanismo legal válido para las transferencias a China. Sin embargo, tras Schrems II, las organizaciones también deben realizar una Evaluación de Impacto de Transferencia que evalúe si las CCT ofrecen protección real en la práctica. Para China, la EIT es difícil de superar para datos sensibles: la PIPL puede invalidar las protecciones contractuales, y el gobierno chino puede exigir acceso. Las directrices del EDPB dejan claro que donde las medidas suplementarias no pueden compensar las deficiencias del marco legal del país de destino, la transferencia no debe realizarse.',
          'Esto se aplica a cualquier dato personal: registros de RRHH, información de clientes, notas médicas, correspondencia legal. Si tus prompts contienen alguno de estos datos, la API de DeepSeek crea una exposición regulatoria que las CCT por sí solas pueden no resolver.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'La API de DeepSeek es el mayor riesgo para el RGPD entre los principales LLMs porque la ley PIPL china puede invalidar las CCT y obligar a revelar datos a las autoridades estatales.' },
          { type: 'plain-terms', text: 'La ley china obliga a las empresas a entregar datos al gobierno bajo petición, y esa ley puede invalidar cualquier contrato de privacidad que firmes. Esto significa que las promesas de proteger datos europeos con la API de DeepSeek pueden no ser legalmente ejecutables.' },
        ],
      },
      body2: {
        title: 'Pesos locales de DeepSeek — un perfil de riesgo completamente diferente',
        content: [
          '<strong>Los modelos de código abierto de DeepSeek (R1, V3, Coder V2) son un producto distinto a la API. Se publican bajo Apache 2.0 y pueden descargarse y ejecutarse localmente sin ninguna conexión a los servidores de DeepSeek.</strong> Ejecutar los pesos localmente elimina por completo el problema de transferencia del Artículo 44 del RGPD, de la misma forma que Qwen o Llama local.',
          'DeepSeek R1 7B u 8B local funciona cómodamente via Ollama en una GPU con 6–8 GB de VRAM. El rendimiento es excelente: R1 es uno de los modelos de razonamiento más potentes disponibles en el nivel de 7B. Para tareas de código, DeepSeek Coder V2 está disponible en variantes más pequeñas.',
          'La pregunta restante para DeepSeek local: el entrenamiento del modelo. DeepSeek no ha publicado detalles completos sobre los datos usados para entrenar estos modelos. Para entornos de alta garantía (sanidad, legal, administración pública), esta incertidumbre puede ser relevante incluso en el despliegue local. Qwen 3 (Alibaba/Tongyi) y Llama 4 (Meta) ofrecen más transparencia sobre la procedencia de los datos de entrenamiento.',
        ],
        columns: ['Despliegue', 'Riesgo RGPD', 'Motivo', 'Acción recomendada'],
        rows: [
          { 'Despliegue': 'API de DeepSeek', 'Riesgo RGPD': 'Máximo', 'Motivo': 'Servidores chinos, PIPL, sin decisión de adecuación', 'Acción recomendada': 'Evitar para datos personales o sensibles' },
          { 'Despliegue': 'DeepSeek local (R1/V3)', 'Riesgo RGPD': 'Bajo', 'Motivo': 'Sin transferencia, pesos Apache 2.0', 'Acción recomendada': 'Aceptable; ten en cuenta la opacidad de los datos de entrenamiento' },
          { 'Despliegue': 'Qwen local (2.5/3)', 'Riesgo RGPD': 'Bajo', 'Motivo': 'Sin transferencia, Apache 2.0, información de entrenamiento publicada', 'Acción recomendada': 'Recomendado para uso con datos sensibles' },
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
            q: '¿DeepSeek R1 es lo mismo que la API de DeepSeek?',
            a: 'No. DeepSeek R1 se refiere al modelo de código abierto publicado en Hugging Face bajo Apache 2.0. La API de DeepSeek (api.deepseek.com) es un servicio en la nube separado con servidores en China. El riesgo para el RGPD aplica a la API, no a los pesos. Ejecutar R1 localmente via Ollama (<code>ollama run deepseek-r1:7b</code>) no implica ningún riesgo de transferencia.',
          },
          {
            q: '¿Qué es la PIPL y por qué importa para el RGPD?',
            a: 'La Ley de Protección de la Información Personal de China (PIPL), en vigor desde noviembre de 2021, obliga a las organizaciones que operan en China a proporcionar información personal a las autoridades de seguridad pública o seguridad nacional bajo petición, independientemente de dónde estén ubicadas. Esto significa que DeepSeek, como empresa china, puede ser obligada a entregar datos procesados a través de su API. Las CCT no pueden invalidar una obligación de divulgación obligatoria en la ley del país de destino. Esta es la razón principal por la que las autoridades de protección de datos de la UE consideran las transferencias a China de alto riesgo.',
          },
          {
            q: '¿Qué LLM es el más seguro para datos regulados por el RGPD?',
            a: 'Para la máxima seguridad bajo el RGPD: cualquier modelo de código abierto local (Qwen 3, Llama 4, DeepSeek R1 local) ejecutado offline sin llamadas a APIs externas. Entre ellos, Qwen 3 y Llama 4 tienen una procedencia de datos de entrenamiento más transparente. Consulta la <a href="/es/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">comparación completa de riesgos RGPD entre LLMs</a> para una herramienta de decisión estructurada.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Privacy & Security',
    title: 'هل استخدام DeepSeek آمن وفق اللائحة الأوروبية لحماية البيانات GDPR؟',
    seoTitle: 'DeepSeek وGDPR 2026: API أم أوزان محلية؟',
    metaDescription: 'API DeepSeek هو الأعلى خطورة على GDPR: اختصاص صيني، قانون PIPL، ولا قرار كفاية أوروبي. الأوزان المحلية تُجنّب نقل البيانات تماماً.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      ar: {
        question: 'هل استخدام DeepSeek آمن وفق اللائحة الأوروبية لحماية البيانات GDPR؟',
        answer: 'واجهة برمجة DeepSeek تُشكّل أعلى خطر على GDPR بين النماذج اللغوية الكبرى؛ إذ تخضع الخوادم لقانون الوصول إلى البيانات الصيني (PIPL)، ولا يوجد قرار كفاية أوروبي للصين، وتحتفظ شروط الخدمة صراحةً بحق مشاركة البيانات مع السلطات الصينية. أما نماذج DeepSeek المحلية مفتوحة الأوزان فلها ملف مخاطر مختلف وأقل.',
        bullets: [
          'واجهة DeepSeek البرمجية: خوادم في الصين، قانون PIPL لإلزامية الكشف — أعلى خطورة',
          'لا قرار كفاية أوروبي للصين: يلزم SCCs + TIA، لكن نتيجة TIA قد تكون غير مواتية',
          'أوزان DeepSeek R1/V3 المحلية (Apache 2.0): خطورة أقل بكثير عند النشر محلياً دون استدعاء API',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'واجهة DeepSeek البرمجية هي النموذج الأعلى خطورة على GDPR: اختصاص صيني، قانون PIPL للوصول إلى البيانات، لا قرار كفاية أوروبي',
          'البنود التعاقدية القياسية (SCCs) ممكنة تقنياً لكن تقييم أثر النقل (TIA) للصين سيُفضي على الأرجح إلى نتيجة غير مواتية للبيانات الحساسة',
          'نماذج DeepSeek مفتوحة الأوزان (R1، V3، Coder V2) مرخصة بـ Apache 2.0 — تشغيلها محلياً يحمل نفس المخاطر المنخفضة كـ Qwen أو Llama المحليين',
          'للبيانات الخاضعة لتنظيم أوروبي: تجنب واجهة DeepSeek البرمجية؛ استخدم الأوزان المحلية أو انتقل إلى نموذج بخيارات API مستضافة في الاتحاد الأوروبي',
        ],
      },
      body1: {
        title: 'لماذا تُشكّل واجهة DeepSeek البرمجية خطراً مرتفعاً وفق GDPR',
        content: [
          '<strong>ثلاثة عوامل متراكمة تجعل واجهة DeepSeek البرمجية الخيار الأعلى خطورة للبيانات الخاضعة لـ GDPR بين النماذج اللغوية الكبرى. أولاً: الخوادم في الصين، مما يجعل كل استدعاء API نقلاً لجهة خارجية وفق المادة 44 من GDPR. ثانياً: لا يوجد قرار كفاية أوروبي للصين. ثالثاً: قانون حماية المعلومات الشخصية الصيني (PIPL) يُلزم المنظمات العاملة في الصين بتقديم البيانات للسلطات الحكومية عند الطلب.</strong>',
          'البنود التعاقدية القياسية آلية قانونية صالحة للنقل إلى الصين. غير أنه بعد حكم Schrems II، يجب على المنظمات إجراء تقييم أثر النقل لتقييم مدى توفير SCCs لحماية فعلية في الممارسة. بالنسبة للصين، يصعب اجتياز TIA للبيانات الحساسة: PIPL يتجاوز الحماية التعاقدية، والحكومة الصينية يمكنها المطالبة بالوصول.',
          'ينطبق هذا على أي بيانات شخصية: سجلات الموارد البشرية، معلومات العملاء، الملاحظات الطبية، المراسلات القانونية. إذا احتوت مطالباتك على شيء من هذا، فإن واجهة DeepSeek البرمجية تُنشئ تعرضاً تنظيمياً قد لا تُعالجه SCCs وحدها.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'واجهة DeepSeek البرمجية هي الأعلى خطورة على GDPR بين النماذج اللغوية الكبرى لأن قانون PIPL الصيني يمكنه تجاوز البنود التعاقدية القياسية وإجبار الكشف عن البيانات للسلطات الحكومية.' },
          { type: 'plain-terms', text: 'القانون الصيني يُلزم الشركات بتسليم البيانات للحكومة عند الطلب، ويمكن لهذا القانون أن يُبطل أي عقود خصوصية توقّعها. هذا يعني أن وعود حماية البيانات الأوروبية مع واجهة DeepSeek البرمجية قد لا تكون قابلة للتطبيق قانونياً.' },
        ],
      },
      body2: {
        title: 'أوزان DeepSeek المحلية — ملف مخاطر مختلف تماماً',
        content: [
          '<strong>نماذج DeepSeek مفتوحة الأوزان (R1، V3، Coder V2) منتج مستقل عن الواجهة البرمجية. تُطرح بموجب Apache 2.0 ويمكن تنزيلها وتشغيلها محلياً دون أي اتصال بخوادم DeepSeek.</strong> تشغيل الأوزان محلياً يُزيل مشكلة النقل وفق المادة 44 من GDPR كلياً، تماماً كما يفعل Qwen أو Llama المحليان.',
          'DeepSeek R1 7B أو 8B المحلي يعمل بسلاسة عبر Ollama على GPU بسعة 6–8 GB VRAM. الأداء ممتاز: R1 أحد أقوى نماذج الاستدلال المتاحة في فئة 7B. لمهام البرمجة، DeepSeek Coder V2 متاح بأحجام أصغر.',
          'السؤال المتبقي لـ DeepSeek المحلي: بيانات التدريب. لم يُنشر DeepSeek تفاصيل كاملة حول البيانات المستخدمة في تدريب هذه النماذج. في البيئات عالية الضمان (الرعاية الصحية، القانون، الحكومة)، هذا الغموض قد يكون ذا صلة حتى في النشر المحلي. Qwen 3 وLlama 4 يوفران مزيداً من الشفافية حول مصدر بيانات التدريب.',
        ],
        columns: ['النشر', 'مخاطر GDPR', 'السبب', 'الإجراء الموصى به'],
        rows: [
          { 'النشر': 'واجهة DeepSeek البرمجية', 'مخاطر GDPR': 'أعلى', 'السبب': 'خوادم صينية، PIPL، لا قرار كفاية', 'الإجراء الموصى به': 'تجنب للبيانات الشخصية أو الحساسة' },
          { 'النشر': 'DeepSeek محلي (R1/V3)', 'مخاطر GDPR': 'منخفض', 'السبب': 'لا نقل، أوزان Apache 2.0', 'الإجراء الموصى به': 'مقبول؛ لاحظ غموض بيانات التدريب' },
          { 'النشر': 'Qwen محلي (2.5/3)', 'مخاطر GDPR': 'منخفض', 'السبب': 'لا نقل، Apache 2.0، معلومات تدريب منشورة', 'الإجراء الموصى به': 'موصى به للاستخدام مع البيانات الحساسة' },
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
            q: 'هل DeepSeek R1 هو نفسه واجهة DeepSeek البرمجية؟',
            a: 'لا. DeepSeek R1 يشير إلى النموذج مفتوح الأوزان المُطرح على Hugging Face بموجب Apache 2.0. واجهة DeepSeek البرمجية (api.deepseek.com) خدمة سحابية منفصلة بخوادم في الصين. خطر GDPR ينطبق على الواجهة البرمجية لا على الأوزان. تشغيل R1 محلياً عبر Ollama (<code>ollama run deepseek-r1:7b</code>) لا ينطوي على أي خطر نقل.',
          },
          {
            q: 'ما هو PIPL ولماذا يهم في GDPR؟',
            a: 'قانون حماية المعلومات الشخصية الصيني (PIPL)، الساري منذ نوفمبر 2021، يُلزم المنظمات العاملة في الصين بتقديم المعلومات الشخصية لسلطات الأمن العام أو الأمن القومي عند الطلب، بصرف النظر عن مقر مقارّها. هذا يعني أن DeepSeek — بوصفها شركة صينية — يمكن إجبارها على تسليم البيانات المعالجة عبر واجهتها البرمجية. SCCs لا يمكنها تجاوز التزام الكشف الإلزامي في قانون الدولة المستقبِلة.',
          },
          {
            q: 'أي نموذج لغوي هو الأأمن للبيانات الخاضعة لـ GDPR؟',
            a: 'لأقصى قدر من الأمان وفق GDPR: أي نموذج مفتوح الأوزان محلي (Qwen 3، Llama 4، DeepSeek R1 محلي) يعمل دون اتصال بدون استدعاءات API خارجية. من بينها، Qwen 3 وLlama 4 لهما مصدر أكثر شفافية لبيانات التدريب. راجع <a href="/ar/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">مقارنة مخاطر GDPR الكاملة بين النماذج اللغوية</a> للحصول على أداة قرار منظمة.',
          },
        ],
      },
    },
  },
}

