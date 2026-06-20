import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '../types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'GDPR Risk Comparison: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'GDPR Risk Matrix: LLM Comparison Qwen DeepSeek Llama Claude | PromptQuorum',
    metaDescription: 'GDPR-compliant LLM comparison: DeepSeek API (highest risk), Qwen local (lowest), Llama local, Claude/GPT API (mid-risk). Risk matrix by data residency, jurisdiction, ToS, and SCC requirements. Updated May 2026.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8 min read',
    educationalLevel: 'Advanced',
    audience: 'CISOs, procurement teams, and compliance officers choosing between proprietary and open-weight LLMs',
    primaryTerm: 'GDPR risk comparison LLM models',
    leadAnswerBlock: '**DeepSeek API presents the highest GDPR risk of any major LLM due to Chinese data-access law (PIPL); Qwen and Llama run locally carry equivalent low risk; Claude and GPT-5.5 APIs with EU residency carry medium risk and require Standard Contractual Clauses (SCCs).**',
    current_models_mentioned: ['DeepSeek', 'DeepSeek API', 'Qwen 3 14B', 'Qwen local', 'Llama 4 Scout', 'Claude Sonnet 4.6', 'GPT-5.5 Instant', 'Claude Opus 4.8'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', 'multi-GPU'],
    quickAnswerTop: {
      en: {
        question: 'Which LLM is safest under GDPR?',
        answer: 'Qwen 3 14B or Llama 4 Scout run locally on your own hardware—no data leaves your jurisdiction, no Article 44 transfer, no SCC or TIA needed. DeepSeek API is highest-risk because servers obey Chinese data law (PIPL). Claude and GPT-5.5 APIs require EU data residency + SCCs for medium-risk compliance.',
        bullets: [
          'Qwen local: Lowest risk. No transfer, Apache 2.0 weights, 12–24 GB VRAM, <30 min setup.',
          'DeepSeek API: Highest risk. PIPL jurisdiction, no EU adequacy, ToS allows state-mandated data sharing.',
          'Claude/GPT EU+SCC: Medium risk. Residency contracts + SCCs help but still involve transfer.',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Welches LLM ist unter DSGVO am sichersten?',
        answer: 'Qwen 3 14B oder Llama 4 Scout lokal auf eigener Hardware — keine Daten verlassen die Gerichtsbarkeit, kein Artikel-44-Transfer, keine SCC oder TIA erforderlich. DeepSeek API ist höchstes Risiko, da Server chinesisches Datenrecht (PIPL) befolgen. Claude und GPT-5.5 APIs erfordern EU-Datenspeicherung + SCCs für mittleres Konformitätsrisiko.',
        bullets: [
          'Qwen lokal: Geringestes Risiko. Kein Transfer, Apache-2.0-Gewichte, 12–24 GB VRAM, <30-Minuten-Setup.',
          'DeepSeek API: Höchstes Risiko. PIPL-Jurisdiktion, keine EU-Adäquanz, ToS ermöglicht staatlich angeforderte Datenteilung.',
          'Claude/GPT EU+SCC: Mittleres Risiko. Wohnortsverträge + SCCs helfen, aber immer noch Transfer erforderlich.',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Quel LLM est le plus sûr selon le RGPD ?',
        answer: 'Qwen 3 14B ou Llama 4 Scout exécutés localement sur votre propre matériel — aucune donnée ne quitte votre juridiction, aucun transfert Article 44, aucune SCC ou TIA requise. DeepSeek API présente le risque le plus élevé car les serveurs obéissent à la loi chinoise sur les données (PIPL). Les API Claude et GPT-5.5 nécessitent une résidence des données dans l\'UE + SCC pour un risque de conformité moyen.',
        bullets: [
          'Qwen local : Risque le plus faible. Aucun transfert, poids Apache 2.0, 12–24 Go VRAM, configuration < 30 min.',
          'DeepSeek API : Risque le plus élevé. Juridiction PIPL, pas d\'adéquation UE, ToS permet le partage de données mandaté par l\'État.',
          'Claude/GPT EU+SCC : Risque moyen. Contrats de résidence + SCC aident mais impliquent toujours un transfert.',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'GDPRの下で最も安全なLLMは何ですか？',
        answer: 'Qwen 3 14BまたはLlama 4 Scoutを自分のハードウェア上でローカル実行——データはあなたの管轄権を離れず、第44条転送なし、SCC or TIA不要。DeepSeek APIは中国データ法（PIPL）に従うサーバーのため最高リスク。Claude/GPT-5.5 APIはEUデータ拠点+SCCで中程度リスク対応が必要。',
        bullets: [
          'Qwen local：最低リスク。転送なし、Apache 2.0ウェイト、12–24 GB VRAM、<30分セットアップ。',
          'DeepSeek API：最高リスク。PIPL管轄権、EU妥当性なし、ToS国家命令によるデータ共有を許可。',
          'Claude/GPT EU+SCC：中程度リスク。拠点契約+SCC有効だが転送は必須。',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '在GDPR下哪个LLM最安全？',
        answer: 'Qwen 3 14B或Llama 4 Scout在您自己的硬件上本地运行——数据不离开您的司法管辖区、无第44条转移、无需SCC或TIA。DeepSeek API风险最高，因为服务器受中国数据法律（PIPL）约束。Claude和GPT-5.5 API需要EU数据驻留+SCC才能获得中等风险合规。',
        bullets: [
          'Qwen本地：风险最低。无转移，Apache 2.0权重，12–24 GB VRAM，<30分钟设置。',
          'DeepSeek API：风险最高。PIPL管辖权、无EU充分性、ToS允许政府命令数据共享。',
          'Claude/GPT EU+SCC：中等风险。驻留合同+SCC有效但仍需转移。',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Four GDPR Risk Vectors for LLMs', anchor: 'risk-vectors' },
      { label: 'Risk Matrix: Model-by-Model Comparison', anchor: 'risk-matrix' },
      { label: 'Per-Model Verdict and Recommended Use', anchor: 'model-verdicts' },
      { label: 'Recommended Stack by Organization Type', anchor: 'org-stacks' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API is highest-risk: servers are subject to Chinese data-access law (PIPL), there is no EU adequacy decision for China, and the ToS explicitly allows data sharing with Chinese authorities',
          'Qwen 3 14B and Llama 4 Scout run locally are lowest-risk: no Article 44 transfer, no SCC required, data stays on your hardware',
          'Claude API and GPT-5.5 Instant are medium-risk: US jurisdiction requires Standard Contractual Clauses + Transfer Impact Assessment; EU-data-residency options (Claude EU) reduce risk',
          'Recommended stacks: startups (Claude + SCC), data-sensitive orgs (Qwen 24 GB local), enterprises (multi-GPU Qwen + air-gap)',
          'Risk decision matrix covers five vectors: data residency, training-data jurisdiction, ToS data retention, SCC requirement, and legal verdict',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'Four GDPR Risk Vectors for LLMs',
        content: [
          'Not all LLM deployments carry the same GDPR risk. The legal and operational risk of using an LLM is determined by four independent factors:',
        ],
        subsections: [
          {
            title: 'Data Residency',
            text: 'Where the model servers physically live. If servers are in the EU and the model provider commits to keeping your data in the EU (contractually), data residency risk is low. If servers are outside the EU with no SCC, data residency risk is high.',
          },
          {
            title: 'Training-Data Jurisdiction',
            text: 'Which country\'s laws govern the training data and the provider\'s right to retain it. US data law (CFAA, SCA) allows law enforcement access. Chinese data law (PIPL) mandates far broader state access rights. EU data stays protected under GDPR and ePrivacy Directive.',
          },
          {
            title: 'ToS Data Retention',
            text: 'What does the Terms of Service say about keeping your data after inference completes? OpenAI and DeepSeek have said (in different forums) that they may retain user prompts for model improvement or legally mandated disclosure. Qwen and Llama run locally have no ToS — you control retention.',
          },
          {
            title: 'SCC / TIA Requirement',
            text: 'Post-Schrems II, any transfer of EU personal data outside the EU requires Standard Contractual Clauses (SCCs) plus a Transfer Impact Assessment (TIA) to confirm the destination jurisdiction provides adequate protection. Cloud APIs require this; local models do not.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Risk Matrix: Model-by-Model Comparison',
        content: [
          'The table below summarizes the GDPR risk profile of each deployment option. Higher scores indicate higher legal and operational risk.',
        ],
        columns: ['Deployment', 'Data Residency', 'Training-Data Jurisdiction', 'ToS Retention Risk', 'SCC / TIA Required?', 'Overall Risk Level'],
        rows: [
          { Deployment: 'DeepSeek API', 'Data Residency': 'China (Alibaba Cloud)', 'Training-Data Jurisdiction': 'China (PIPL)', 'ToS Retention Risk': 'Explicitly reserves right to share with authorities', 'SCC / TIA Required?': 'Yes, but ineffective (no EU-China adequacy)', 'Overall Risk Level': '🔴 Highest' },
          { Deployment: 'Claude API (US)', 'Data Residency': 'US (Virginia)', 'Training-Data Jurisdiction': 'US', 'ToS Retention Risk': 'Anthropic commits to deletion on request; 30-day default retention', 'SCC / TIA Required?': 'Yes, requires SCC + TIA', 'Overall Risk Level': '🟠 Medium-High' },
          { Deployment: 'GPT-5.5 (US)', 'Data Residency': 'US (multiple regions)', 'Training-Data Jurisdiction': 'US', 'ToS Retention Risk': 'OpenAI may retain for model improvement; policy opaque', 'SCC / TIA Required?': 'Yes, requires SCC + TIA', 'Overall Risk Level': '🟠 Medium-High' },
          { Deployment: 'Claude (EU data residency)', 'Data Residency': 'EU (Ireland or Germany)', 'Training-Data Jurisdiction': 'US (Anthropic), data stays EU', 'ToS Retention Risk': 'Anthropic commits to EU-only residency + GDPR compliance', 'SCC / TIA Required?': 'Yes, SCC adequate due to EU processing', 'Overall Risk Level': '🟡 Medium' },
          { Deployment: 'Llama 4 Scout (local)', 'Data Residency': 'Your hardware (LAN)', 'Training-Data Jurisdiction': 'Open-source, no commercial retention', 'ToS Retention Risk': 'You control retention via local logs only', 'SCC / TIA Required?': 'No', 'Overall Risk Level': '🟢 Lowest' },
          { Deployment: 'Qwen 3 14B (local)', 'Data Residency': 'Your hardware (LAN)', 'Training-Data Jurisdiction': 'Open-source (Apache 2.0), no commercial retention', 'ToS Retention Risk': 'You control retention via local logs only', 'SCC / TIA Required?': 'No', 'Overall Risk Level': '🟢 Lowest' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'Per-Model Verdict and Recommended Use',
        content: [
          'Use this section to understand when each deployment is appropriate for your GDPR compliance posture.',
        ],
        subsections: [
          {
            title: 'DeepSeek API — Avoid for GDPR workflows',
            text: 'DeepSeek API presents the highest risk of any major LLM because: (1) servers are in mainland China, subject to PIPL data-access mandates; (2) there is no EU-China adequacy decision (Schrems II renders SCCs insufficient); (3) the ToS explicitly reserves the right to share data with Chinese authorities. If your prompts contain personal data of EU residents, DeepSeek API violates GDPR Article 44 unless you have explicit consent from each data subject and a documented legal basis for the transfer. For non-sensitive tasks (competitive analysis, brainstorming), risk is lower, but contract review is mandatory before any use.',
          },
          {
            title: 'Claude API (US) — Medium risk, manageable with SCC + TIA',
            text: 'Claude API requires Standard Contractual Clauses and a Transfer Impact Assessment, but is more compliant than GPT-5.5 because: (1) Anthropic has a clearer commitment to deletion on request; (2) Anthropic has published Data Processing Addenda (DPA) that explicitly reference GDPR Articles 28 and 32; (3) US law, while allowing law-enforcement access, does not mandate commercial data retention. For non-sensitive personal data (job titles, generic business context), Claude API with SCC + TIA is acceptable. For high-sensitivity data (health, financial, biometric), local deployment is required.',
          },
          {
            title: 'Claude (EU data residency) — Medium risk, lower due to EU processing',
            text: 'Anthropic offers an EU data residency option where prompts are processed in Ireland or Germany. This reduces risk because: (1) data stays within the EU during processing; (2) data is deleted after 30 days; (3) Anthropic commits to GDPR compliance. However, the training data behind Claude models is still US-trained, and Anthropic is a US company, so full Article 44 compliance still requires SCCs. Better than US Claude for GDPR, but not equivalent to local deployment.',
          },
          {
            title: 'GPT-5.5 / GPT-5.5 Instant — Medium-high risk',
            text: 'OpenAI APIs carry higher risk than Claude because: (1) OpenAI\'s data retention policy is opaque — the company has said it may retain user data for "research and safety improvements"; (2) no published DPA; (3) no EU data residency option. If you choose OpenAI, require explicit SCC + comprehensive TIA, and avoid sending high-sensitivity data (health, financial, biometric, genetic). For low-sensitivity tasks, acceptable with SCC.',
          },
          {
            title: 'Llama 4 Scout (local) — Lowest risk, no transfer',
            text: 'Llama weights are open-source under a commercial-use-friendly license. Running Llama locally on your own hardware means: (1) zero Article 44 transfer; (2) you control all data retention; (3) no SCC or TIA required; (4) full Article 25 (privacy by design) compliance. Suitable for all data sensitivity levels. Llama 4 Scout at 8 GB or Llama 3.2 70B at 48 GB covers most enterprise use cases.',
          },
          {
            title: 'Qwen 3 / 3 (local) — Lowest risk, no transfer',
            text: 'Qwen weights are open-source under Apache 2.0. Like Llama, running Qwen locally means: (1) zero Article 44 transfer; (2) you control retention; (3) no legal basis required (no transfer = no transfer risk). Qwen 3 14B is the most widely deployed in Europe due to excellent multilingual performance and a smaller VRAM footprint (12–16 GB vs Llama 3.2 70B\'s 48 GB). Suitable for all sensitivity levels.',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'Recommended Stack by Organization Type',
        content: [
          'The right LLM stack depends on your organization\'s data sensitivity, budget, and regulatory posture. Use these recommendations as a starting point for procurement decisions.',
        ],
        subsections: [
          {
            title: 'Early-stage startup (low regulatory pressure)',
            text: 'Use Claude API with SCC. Rationale: Claude is high-quality, production-ready, managed overhead is low, and SCCs are standard for US-based AI vendors. Cost is ~$3–5/month for experimental use. Risk is acceptable because: startup data is typically low-sensitivity (anonymous usage patterns, generic business logic). If you grow into healthcare or fintech, migrate to local Qwen.',
          },
          {
            title: 'SME with employee/customer data (medium regulatory pressure)',
            text: 'Use Qwen 3 14B or Llama 3.2 32B locally. Rationale: You handle personal data (employee roster, customer contact info, transaction history), so zero-transfer architecture is required. Deploy on a single on-prem GPU (RTX 4070 Ti, 12 GB VRAM for Qwen 3 at Q4 quantization). Cost is ~$500 one-time hardware + ~$100/year electricity. Setup time: <1 hour (Ollama is trivial). Compliance burden: zero (no SCC, no TIA, no DPA negotiation).',
          },
          {
            title: 'Enterprise (high regulatory pressure: healthcare, fintech, law)',
            text: 'Use multi-GPU Qwen 3 33B with air-gap deployment. Rationale: High sensitivity data requires the strongest possible architecture. Multi-GPU (2× RTX 3090 or 4× RTX 4090) allows you to run larger, more capable models with lower latency. Air-gap means the inference cluster has no outbound internet access — prompts cannot leak, even if a vulnerability is discovered. Cost is ~$5–15K hardware, setup 1–2 weeks by your infrastructure team. Compliance: Full GDPR Article 32 (security) satisfaction, Article 30 audit trail with full access logs.',
          },
          {
            title: 'Organization with existing legal agreement (special case)',
            text: 'If you already have a Data Processing Addendum (DPA) with Claude or OpenAI, use those. The switching cost of migrating to local is often lower than renegotiating your DPA, and if the existing agreement is recent (2024–2026) and includes SCC + TIA, the risk is manageable. Review with your legal team before deciding.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Is DeepSeek GDPR compliant if I use it with an SCC?',
            a: 'No. SCCs alone do not satisfy GDPR Article 44 transfers to mainland China because: (1) there is no EU-China adequacy decision post-Schrems II; (2) Chinese law (PIPL) mandates that companies share data with state authorities on request, which SCCs cannot override; (3) Anthropic, OpenAI, and other major vendors do not offer SCC enforcement in China—they refuse to operate there. For any personal data of EU residents, do not use DeepSeek API. If you need DeepSeek, use the local weights (run `ollama run deepseek-coder:latest` on your hardware).',
          },
          {
            q: 'Does using Claude EU with SCC satisfy GDPR?',
            a: 'Mostly yes, with caveats. Claude EU keeps your data in Ireland or Germany during processing and deletes it within 30 days. Anthropic has published a GDPR-compliant DPA and SCC. However, Claude models were trained on US-based data, and Anthropic is a US company, so technically there is still a "transfer" in the form of model training and vendor relationship. For practical compliance, Claude EU + SCC is acceptable for most organizations. For the absolute strongest posture (no transfer risk at all), use local Qwen or Llama.',
          },
          {
            q: 'Can I use Llama 4 Scout as a drop-in replacement for Claude?',
            a: 'For GDPR compliance: yes. Llama 4 Scout is open-source and can run locally, so it satisfies Articles 44, 25, and 32 fully. For capability and performance: maybe. Llama 4 Scout is smaller (8 GB VRAM) than Claude (which is proprietary and very large), so it is faster and cheaper to run locally, but may be less capable on some benchmarks. Test on your workload first. For simple Q&A, summarization, and code tasks, Llama 4 Scout is competitive. For very complex reasoning, Claude is still better, but local Qwen 3 14B or Llama 3.2 70B can handle most enterprise tasks.',
          },
          {
            q: 'What happens if I log my prompts locally for audit purposes?',
            a: 'Logging is encouraged for Article 30 compliance. Log the following: model name, session timestamp, input token count, output token count, and a SHA-256 hash of the prompt and response. Do NOT log the raw text of prompts containing personal data. Hash-based logging satisfies Article 30 (processing records) and Article 32 (security) without violating Article 5(1)(e) (storage limitation). Store logs on an encrypted, access-controlled system (e.g., log aggregation server with role-based access). Retain logs for 3 years per DPA standard.',
          },
          {
            q: 'Is running an LLM on-prem more expensive than cloud APIs?',
            a: 'Upfront: yes. Hardware (RTX 4070 Ti) costs ~$500–1000. Monthly: no. On-prem electricity is ~$5–10/month. Cloud APIs cost $0.001–0.01 per 1K tokens, which for heavy usage (>1M tokens/month) exceeds $100. Break-even is typically 6–12 months for medium-to-heavy usage. If you run <100K tokens/month, cloud APIs are cheaper. If you run >1M tokens/month, on-prem is cheaper. GDPR compliance is an additional business case: on-prem means zero SCC/TIA legal cost.',
          },
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'GDPR risk for LLMs is determined by data residency, training-data jurisdiction, ToS retention policies, and SCC/TIA requirements.',
        plainTerms: 'Your LLM choice matters for GDPR because of where your data sits, which country owns the model, how long the vendor keeps your data, and whether you need legal contracts to move data across borders.',
      },
    ],
  },
  es: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'Comparación de riesgos RGPD: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'Matriz de riesgo RGPD: Qwen, DeepSeek, Llama y Claude',
    metaDescription: 'Comparación de LLM conforme al RGPD: DeepSeek API (mayor riesgo), Qwen local (menor riesgo), Llama local y Claude/GPT API (riesgo medio). Matriz por datos.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8 min de lectura',
    educationalLevel: 'Advanced',
    audience: 'CISOs, equipos de adquisiciones y responsables de cumplimiento que eligen entre LLMs propietarios y de pesos abiertos',
    primaryTerm: 'comparación de riesgo RGPD modelos LLM',
    leadAnswerBlock: '**La API de DeepSeek presenta el mayor riesgo RGPD de cualquier LLM importante debido a la ley china de acceso a datos (PIPL); Qwen y Llama ejecutados localmente tienen un riesgo igualmente bajo; las API de Claude y GPT-5.5 con residencia EU tienen riesgo medio y requieren Cláusulas Contractuales Estándar (SCCs).**',
    current_models_mentioned: ['DeepSeek', 'DeepSeek API', 'Qwen 3 14B', 'Qwen local', 'Llama 4 Scout', 'Claude Sonnet 4.6', 'GPT-5.5 Instant', 'Claude Opus 4.8'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', 'multi-GPU'],
    toc: [
      { label: 'Cuatro vectores de riesgo RGPD para LLMs', anchor: 'risk-vectors' },
      { label: 'Matriz de riesgo: comparación modelo por modelo', anchor: 'risk-matrix' },
      { label: 'Veredicto por modelo y uso recomendado', anchor: 'model-verdicts' },
      { label: 'Stack recomendado según el tipo de organización', anchor: 'org-stacks' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La API de DeepSeek tiene el mayor riesgo RGPD de todos los LLMs importantes: los servidores están sujetos a la ley china de acceso a datos (PIPL), no existe decisión de adecuación UE-China, y los ToS permiten explícitamente compartir datos con las autoridades chinas',
          'Qwen 3 14B y Llama 4 Scout ejecutados localmente son los de menor riesgo: sin transferencia según el Artículo 44, sin SCC requerida, los datos permanecen en tu hardware',
          'Las API de Claude y GPT-5.5 Instant tienen riesgo medio: la jurisdicción estadounidense requiere Cláusulas Contractuales Estándar más Evaluación de Impacto de Transferencia; las opciones de residencia de datos en la UE (Claude EU) reducen el riesgo',
          'Stacks recomendados: startups (Claude + SCC), organizaciones con datos sensibles (Qwen 24 GB local), empresas (Qwen multi-GPU + air-gap)',
          'La matriz de decisión de riesgo cubre cinco vectores: residencia de datos, jurisdicción de datos de entrenamiento, retención de datos en ToS, requisito SCC y veredicto legal',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'Cuatro vectores de riesgo RGPD para LLMs',
        content: [
          'No todos los despliegues de LLM conllevan el mismo riesgo RGPD. El riesgo legal y operativo de usar un LLM está determinado por cuatro factores independientes:',
        ],
        subsections: [
          {
            title: 'Residencia de datos',
            text: 'Dónde se ubican físicamente los servidores del modelo. Si los servidores están en la UE y el proveedor se compromete contractualmente a mantener tus datos en la UE, el riesgo de residencia de datos es bajo. Si los servidores están fuera de la UE sin SCC, el riesgo de residencia de datos es alto. Para organizaciones en México (LFPDPPP), Argentina (Ley 25.326) o Colombia (Ley 1581 de 2012), aplican requisitos equivalentes de localización de datos.',
          },
          {
            title: 'Jurisdicción de los datos de entrenamiento',
            text: 'Qué leyes del país rigen los datos de entrenamiento y el derecho del proveedor a retenerlos. La ley de datos de EE. UU. (CFAA, SCA) permite el acceso de las autoridades. La ley de datos china (PIPL) impone derechos de acceso estatal mucho más amplios. Los datos de la UE permanecen protegidos bajo el RGPD y la Directiva ePrivacy; los datos latinoamericanos se rigen por sus respectivas leyes nacionales.',
          },
          {
            title: 'Retención de datos en los ToS',
            text: '¿Qué dice los Términos de Servicio sobre guardar tus datos tras completar la inferencia? OpenAI y DeepSeek han indicado (en distintos foros) que pueden retener los prompts de los usuarios para mejorar el modelo o por divulgación legalmente obligatoria. Qwen y Llama ejecutados localmente no tienen ToS: tú controlas la retención.',
          },
          {
            title: 'Requisito de SCC / TIA',
            text: 'Tras el caso Schrems II, cualquier transferencia de datos personales de la UE fuera de la UE requiere Cláusulas Contractuales Estándar (SCCs) más una Evaluación de Impacto de Transferencia (TIA) para confirmar que la jurisdicción de destino ofrece protección adecuada. Las API en la nube requieren esto; los modelos locales no.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Matriz de riesgo: comparación modelo por modelo',
        content: [
          'La siguiente tabla resume el perfil de riesgo RGPD de cada opción de despliegue. Una puntuación más alta indica mayor riesgo legal y operativo.',
        ],
        columns: ['Despliegue', 'Residencia de datos', 'Jurisdicción de datos de entrenamiento', 'Riesgo de retención en ToS', '¿SCC / TIA requerida?', 'Nivel de riesgo global'],
        rows: [
          { Despliegue: 'DeepSeek API', 'Residencia de datos': 'China (Alibaba Cloud)', 'Jurisdicción de datos de entrenamiento': 'China (PIPL)', 'Riesgo de retención en ToS': 'Se reserva explícitamente el derecho a compartir datos con las autoridades', '¿SCC / TIA requerida?': 'Sí, pero ineficaz (sin adecuación UE-China)', 'Nivel de riesgo global': '🔴 Mayor' },
          { Despliegue: 'Claude API (EE. UU.)', 'Residencia de datos': 'EE. UU. (Virginia)', 'Jurisdicción de datos de entrenamiento': 'EE. UU.', 'Riesgo de retención en ToS': 'Anthropic se compromete a eliminar los datos bajo petición; retención por defecto de 30 días', '¿SCC / TIA requerida?': 'Sí, requiere SCC + TIA', 'Nivel de riesgo global': '🟠 Medio-alto' },
          { Despliegue: 'GPT-5.5 (EE. UU.)', 'Residencia de datos': 'EE. UU. (múltiples regiones)', 'Jurisdicción de datos de entrenamiento': 'EE. UU.', 'Riesgo de retención en ToS': 'OpenAI puede retener datos para mejorar el modelo; política opaca', '¿SCC / TIA requerida?': 'Sí, requiere SCC + TIA', 'Nivel de riesgo global': '🟠 Medio-alto' },
          { Despliegue: 'Claude (residencia de datos UE)', 'Residencia de datos': 'UE (Irlanda o Alemania)', 'Jurisdicción de datos de entrenamiento': 'EE. UU. (Anthropic), datos permanecen en la UE', 'Riesgo de retención en ToS': 'Anthropic se compromete a residencia solo en la UE + cumplimiento RGPD', '¿SCC / TIA requerida?': 'Sí, SCC adecuada por procesamiento en la UE', 'Nivel de riesgo global': '🟡 Medio' },
          { Despliegue: 'Llama 4 Scout (local)', 'Residencia de datos': 'Tu hardware (LAN)', 'Jurisdicción de datos de entrenamiento': 'Código abierto, sin retención comercial', 'Riesgo de retención en ToS': 'Tú controlas la retención solo a través de logs locales', '¿SCC / TIA requerida?': 'No', 'Nivel de riesgo global': '🟢 Menor' },
          { Despliegue: 'Qwen 3 14B (local)', 'Residencia de datos': 'Tu hardware (LAN)', 'Jurisdicción de datos de entrenamiento': 'Código abierto (Apache 2.0), sin retención comercial', 'Riesgo de retención en ToS': 'Tú controlas la retención solo a través de logs locales', '¿SCC / TIA requerida?': 'No', 'Nivel de riesgo global': '🟢 Menor' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'Veredicto por modelo y uso recomendado',
        content: [
          'Usa esta sección para entender cuándo es apropiado cada despliegue según tu postura de cumplimiento RGPD.',
        ],
        subsections: [
          {
            title: 'DeepSeek API — Evitar para flujos de trabajo RGPD',
            text: 'La API de DeepSeek presenta el mayor riesgo de cualquier LLM importante porque: (1) los servidores están en China continental, sujetos a los mandatos de acceso a datos de la PIPL; (2) no existe decisión de adecuación UE-China (Schrems II hace que las SCCs sean insuficientes); (3) los ToS se reservan explícitamente el derecho a compartir datos con las autoridades chinas. Si tus prompts contienen datos personales de residentes en la UE o en países latinoamericanos con leyes de protección de datos (LFPDPPP en México, Ley 25.326 en Argentina, Ley 1581 en Colombia), la API de DeepSeek viola el marco de protección aplicable salvo que tengas consentimiento explícito de cada interesado y una base legal documentada para la transferencia. Para tareas no sensibles (análisis de competencia, lluvia de ideas), el riesgo es menor, pero la revisión del contrato es obligatoria antes de cualquier uso.',
          },
          {
            title: 'Claude API (EE. UU.) — Riesgo medio, gestionable con SCC + TIA',
            text: 'La API de Claude requiere Cláusulas Contractuales Estándar y una Evaluación de Impacto de Transferencia, pero es más conforme que GPT-5.5 porque: (1) Anthropic tiene un compromiso más claro de eliminación bajo petición; (2) Anthropic ha publicado Addendas de Procesamiento de Datos (DPA) que hacen referencia explícita a los Artículos 28 y 32 del RGPD; (3) la ley de EE. UU., aunque permite el acceso de las autoridades, no obliga a retener datos comerciales. Para datos personales no sensibles (cargos de trabajo, contexto empresarial genérico), la API de Claude con SCC + TIA es aceptable. Para datos de alta sensibilidad (salud, financieros, biométricos), se requiere despliegue local.',
          },
          {
            title: 'Claude (residencia de datos UE) — Riesgo medio, reducido por procesamiento en la UE',
            text: 'Anthropic ofrece una opción de residencia de datos en la UE donde los prompts se procesan en Irlanda o Alemania. Esto reduce el riesgo porque: (1) los datos permanecen dentro de la UE durante el procesamiento; (2) los datos se eliminan a los 30 días; (3) Anthropic se compromete al cumplimiento del RGPD. Sin embargo, los datos de entrenamiento detrás de los modelos Claude son de entrenamiento en EE. UU., y Anthropic es una empresa estadounidense, por lo que el cumplimiento total del Artículo 44 sigue requiriendo SCCs. Mejor que Claude EE. UU. para el RGPD, pero no equivalente al despliegue local.',
          },
          {
            title: 'GPT-5.5 / GPT-5.5 Instant — Riesgo medio-alto',
            text: 'Las API de OpenAI conllevan mayor riesgo que Claude porque: (1) la política de retención de datos de OpenAI es opaca — la empresa ha dicho que puede retener datos de usuarios para "mejoras de investigación y seguridad"; (2) no hay DPA publicada; (3) no hay opción de residencia de datos en la UE. Si eliges OpenAI, exige SCC explícita + TIA exhaustiva, y evita enviar datos de alta sensibilidad (salud, financieros, biométricos, genéticos). Para tareas de baja sensibilidad, es aceptable con SCC.',
          },
          {
            title: 'Llama 4 Scout (local) — Menor riesgo, sin transferencia',
            text: 'Los pesos de Llama son de código abierto bajo una licencia amigable para uso comercial. Ejecutar Llama localmente en tu propio hardware significa: (1) cero transferencia según el Artículo 44; (2) tú controlas toda la retención de datos; (3) no se requiere SCC ni TIA; (4) cumplimiento total del Artículo 25 (privacidad desde el diseño). Apto para todos los niveles de sensibilidad de datos. Llama 4 Scout a 8 GB o Llama 3.2 70B a 48 GB cubre la mayoría de los casos de uso empresarial.',
          },
          {
            title: 'Qwen 3 / 3 (local) — Menor riesgo, sin transferencia',
            text: 'Los pesos de Qwen son de código abierto bajo Apache 2.0. Al igual que Llama, ejecutar Qwen localmente significa: (1) cero transferencia según el Artículo 44; (2) tú controlas la retención; (3) no se requiere base legal (sin transferencia = sin riesgo de transferencia). Qwen 3 14B es el más ampliamente desplegado en Europa y en organizaciones latinoamericanas con requisitos de privacidad estrictos, gracias a su excelente rendimiento multilingüe y menor huella de VRAM (12–16 GB frente a los 48 GB de Llama 3.2 70B). Apto para todos los niveles de sensibilidad.',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'Stack recomendado según el tipo de organización',
        content: [
          'El stack de LLM adecuado depende de la sensibilidad de datos de tu organización, el presupuesto y la postura regulatoria. Usa estas recomendaciones como punto de partida para las decisiones de adquisición.',
        ],
        subsections: [
          {
            title: 'Startup en etapa temprana (poca presión regulatoria)',
            text: 'Usa la API de Claude con SCC. Justificación: Claude es de alta calidad, listo para producción, la carga de gestión es baja, y las SCCs son estándar para proveedores de IA con sede en EE. UU. El costo es de aproximadamente $3–5/mes para uso experimental. El riesgo es aceptable porque los datos de las startups son típicamente de baja sensibilidad (patrones de uso anónimos, lógica empresarial genérica). Si creces en salud o fintech, migra a Qwen local.',
          },
          {
            title: 'PYME con datos de empleados/clientes (presión regulatoria media)',
            text: 'Usa Qwen 3 14B o Llama 3.2 32B localmente. Justificación: Gestionas datos personales (nómina de empleados, información de contacto de clientes, historial de transacciones), por lo que se requiere arquitectura de cero transferencia. Aplica tanto para RGPD en la UE como para LFPDPPP en México, Ley 25.326 en Argentina y Ley 1581 en Colombia. Despliega en una GPU on-prem (RTX 4070 Ti, 12 GB VRAM para Qwen 3 en cuantización Q4). Costo: ~$500 hardware único + ~$100/año en electricidad. Tiempo de configuración: menos de 1 hora (Ollama es trivial). Carga de cumplimiento: cero (sin SCC, sin TIA, sin negociación de DPA).',
          },
          {
            title: 'Empresa (alta presión regulatoria: salud, fintech, derecho)',
            text: 'Usa Qwen 3 33B multi-GPU con despliegue air-gap. Justificación: Los datos de alta sensibilidad requieren la arquitectura más robusta posible. Multi-GPU (2× RTX 3090 o 4× RTX 4090) permite ejecutar modelos más grandes y capaces con menor latencia. Air-gap significa que el clúster de inferencia no tiene acceso saliente a internet — los prompts no pueden filtrarse, incluso si se descubre una vulnerabilidad. Costo: ~$5–15K en hardware, 1–2 semanas de configuración por el equipo de infraestructura. Cumplimiento: Satisfacción total del Artículo 32 del RGPD (seguridad), registro de auditoría del Artículo 30 con logs de acceso completos.',
          },
          {
            title: 'Organización con acuerdo legal existente (caso especial)',
            text: 'Si ya tienes un Addendum de Procesamiento de Datos (DPA) con Claude u OpenAI, úsalos. El costo de cambiar a local suele ser inferior al de renegociar tu DPA, y si el acuerdo existente es reciente (2024–2026) e incluye SCC + TIA, el riesgo es manejable. Revisa con tu equipo legal antes de decidir.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '¿Es DeepSeek conforme al RGPD si lo uso con una SCC?',
            a: 'No. Las SCCs por sí solas no satisfacen las transferencias del Artículo 44 del RGPD a China continental porque: (1) no existe decisión de adecuación UE-China tras Schrems II; (2) la ley china (PIPL) obliga a las empresas a compartir datos con las autoridades estatales bajo petición, lo que las SCCs no pueden anular; (3) Anthropic, OpenAI y otros grandes proveedores no ofrecen ejecución de SCCs en China y se niegan a operar allí. Para cualquier dato personal de residentes en la UE — o bajo leyes latinoamericanas equivalentes como la LFPDPPP (México), la Ley 25.326 (Argentina) o la Ley 1581 (Colombia) — no uses la API de DeepSeek. Si necesitas DeepSeek, usa los pesos locales (ejecuta `ollama run deepseek-coder:latest` en tu hardware).',
          },
          {
            q: '¿El uso de Claude EU con SCC satisface el RGPD?',
            a: 'En su mayor parte sí, con matices. Claude EU mantiene tus datos en Irlanda o Alemania durante el procesamiento y los elimina en 30 días. Anthropic ha publicado una DPA conforme al RGPD y SCCs. Sin embargo, los modelos Claude fueron entrenados con datos en EE. UU., y Anthropic es una empresa estadounidense, por lo que técnicamente sigue existiendo una "transferencia" en forma de entrenamiento del modelo y relación con el proveedor. Para el cumplimiento práctico, Claude EU + SCC es aceptable para la mayoría de las organizaciones. Para la postura más sólida (sin ningún riesgo de transferencia), usa Qwen o Llama local.',
          },
          {
            q: '¿Puedo usar Llama 4 Scout como sustituto directo de Claude?',
            a: 'Para el cumplimiento RGPD: sí. Llama 4 Scout es de código abierto y puede ejecutarse localmente, por lo que satisface plenamente los Artículos 44, 25 y 32. Para capacidad y rendimiento: quizás. Llama 4 Scout es más pequeño (8 GB VRAM) que Claude (que es propietario y muy grande), por lo que es más rápido y barato de ejecutar localmente, pero puede ser menos capaz en algunos benchmarks. Pruébalo en tu carga de trabajo primero. Para Q&A simple, resumen y tareas de código, Llama 4 Scout es competitivo. Para razonamiento muy complejo, Claude sigue siendo mejor, pero Qwen 3 14B local o Llama 3.2 70B pueden manejar la mayoría de las tareas empresariales.',
          },
          {
            q: '¿Qué ocurre si registro mis prompts localmente con fines de auditoría?',
            a: 'Se recomienda el registro para el cumplimiento del Artículo 30. Registra lo siguiente: nombre del modelo, marca de tiempo de la sesión, recuento de tokens de entrada, recuento de tokens de salida y un hash SHA-256 del prompt y la respuesta. NO registres el texto sin formato de los prompts que contengan datos personales. El registro basado en hash satisface el Artículo 30 (registros de procesamiento) y el Artículo 32 (seguridad) sin violar el Artículo 5(1)(e) (limitación del almacenamiento). Almacena los logs en un sistema cifrado con control de acceso (por ejemplo, servidor de agregación de logs con acceso basado en roles). Retén los logs durante 3 años según el estándar DPA.',
          },
          {
            q: '¿Es más caro ejecutar un LLM on-prem que usar APIs en la nube?',
            a: 'Por adelantado: sí. El hardware (RTX 4070 Ti) cuesta ~$500–1000. Mensualmente: no. La electricidad on-prem es de ~$5–10/mes. Las API en la nube cuestan $0,001–0,01 por 1K tokens, lo que para un uso intensivo (>1M tokens/mes) supera los $100. El punto de equilibrio suele ser de 6–12 meses para uso medio-alto. Si ejecutas <100K tokens/mes, las API en la nube son más baratas. Si ejecutas >1M tokens/mes, el on-prem es más barato. El cumplimiento RGPD es un argumento empresarial adicional: el on-prem elimina el costo legal de SCC/TIA.',
          },
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'El riesgo RGPD para los LLMs está determinado por la residencia de datos, la jurisdicción de los datos de entrenamiento, las políticas de retención de los ToS y los requisitos de SCC/TIA.',
        plainTerms: 'Tu elección de LLM importa para el RGPD por el lugar donde se almacenan tus datos, qué país es propietario del modelo, cuánto tiempo guarda el proveedor tus datos y si necesitas contratos legales para mover datos entre fronteras.',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Comparación de riesgos RGPD: Qwen vs DeepSeek vs Llama vs Claude 2026',
      description: 'Comparación de LLM conforme al RGPD: matriz de riesgo para DeepSeek, Qwen, Llama y Claude.',
      url: 'https://www.promptquorum.com/es/local-llms/gdpr-llm-risk-comparison-2026',
      inLanguage: 'es',
      datePublished: '2026-05-22',
      dateModified: '2026-05-22',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  ar: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'مقارنة مخاطر GDPR: Qwen مقابل DeepSeek مقابل Llama مقابل Claude 2026',
    seoTitle: 'مخاطر GDPR لنماذج LLM: Qwen وDeepSeek وLlama وClaude',
    metaDescription: 'DeepSeek API أعلى مخاطر GDPR؛ Qwen المحلي الأدنى خطراً؛ Claude/GPT API مخاطر متوسطة. مصفوفة مقارنة بالولاية القضائية وإقامة البيانات وSCC.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Advanced',
    audience: 'مديرو أمن المعلومات وفرق المشتريات ومسؤولو الامتثال الذين يختارون بين نماذج LLM الاحتكارية ومفتوحة الأوزان',
    primaryTerm: 'مقارنة مخاطر GDPR لنماذج LLM',
    leadAnswerBlock: '**يمثل DeepSeek API أعلى مخاطر GDPR بين جميع نماذج LLM الرئيسية بسبب قانون الوصول إلى البيانات الصيني (PIPL)؛ ويتمتع Qwen و Llama المشغّلان محليًا بمخاطر منخفضة بالقدر نفسه؛ وتنطوي واجهات Claude و GPT-5.5 مع إقامة بيانات في الاتحاد الأوروبي على مخاطر متوسطة وتتطلب البنود التعاقدية القياسية (SCCs).**',
    current_models_mentioned: ['DeepSeek', 'DeepSeek API', 'Qwen 3 14B', 'Qwen local', 'Llama 4 Scout', 'Claude Sonnet 4.6', 'GPT-5.5 Instant', 'Claude Opus 4.8'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', 'multi-GPU'],
    toc: [
      { label: 'أربعة متجهات مخاطر GDPR لنماذج LLM', anchor: 'risk-vectors' },
      { label: 'مصفوفة المخاطر: مقارنة نموذجًا بنموذج', anchor: 'risk-matrix' },
      { label: 'الحكم حسب النموذج والاستخدام الموصى به', anchor: 'model-verdicts' },
      { label: 'الحزمة الموصى بها حسب نوع المؤسسة', anchor: 'org-stacks' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'يمتلك DeepSeek API أعلى مخاطر GDPR بين جميع نماذج LLM الرئيسية: تخضع الخوادم لقانون الوصول إلى البيانات الصيني (PIPL)، ولا يوجد قرار كفاية بين الاتحاد الأوروبي والصين، وتسمح شروط الخدمة صراحةً بمشاركة البيانات مع السلطات الصينية',
          'يُعد Qwen 3 14B و Llama 4 Scout المشغّلان محليًا الأقل مخاطرة: لا نقل بموجب المادة 44، ولا حاجة لـ SCC، وتبقى البيانات على أجهزتك',
          'تنطوي واجهات Claude و GPT-5.5 Instant على مخاطر متوسطة: تتطلب الولاية القضائية الأمريكية البنود التعاقدية القياسية إضافةً إلى تقييم أثر النقل؛ وتقلل خيارات إقامة البيانات في الاتحاد الأوروبي (Claude EU) من المخاطر',
          'الحزم الموصى بها: الشركات الناشئة (Claude + SCC)، المؤسسات ذات البيانات الحساسة (Qwen 24 GB محلي)، الشركات الكبرى (Qwen multi-GPU + عزل شبكي)',
          'تغطي مصفوفة قرار المخاطر خمسة متجهات: إقامة البيانات، الولاية القضائية لبيانات التدريب، الاحتفاظ بالبيانات في شروط الخدمة، اشتراط SCC، والحكم القانوني',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'أربعة متجهات مخاطر GDPR لنماذج LLM',
        content: [
          'لا تحمل جميع عمليات نشر LLM مخاطر GDPR نفسها. تتحدد المخاطر القانونية والتشغيلية لاستخدام نموذج LLM بأربعة عوامل مستقلة:',
        ],
        subsections: [
          {
            title: 'إقامة البيانات',
            text: 'أين تقع خوادم النموذج فعليًا. إذا كانت الخوادم في الاتحاد الأوروبي والتزم المزوّد تعاقديًا بإبقاء بياناتك داخله، فإن مخاطر إقامة البيانات منخفضة. وإذا كانت الخوادم خارج الاتحاد دون SCC، فإن مخاطر إقامة البيانات مرتفعة. وبالنسبة للمؤسسات في السعودية (نظام حماية البيانات الشخصية PDPL) والإمارات (قانون حماية البيانات الاتحادي) ودول الخليج التي تطبق متطلبات سيادة البيانات، تنطبق متطلبات معادلة لتوطين البيانات.',
          },
          {
            title: 'الولاية القضائية لبيانات التدريب',
            text: 'أي قوانين دولة تحكم بيانات التدريب وحق المزوّد في الاحتفاظ بها. يتيح قانون البيانات الأمريكي (CFAA, SCA) وصول السلطات. ويفرض قانون البيانات الصيني (PIPL) حقوق وصول حكومية أوسع بكثير. تبقى بيانات الاتحاد الأوروبي محمية بموجب GDPR وتوجيه ePrivacy؛ وتخضع بيانات دول الخليج لأنظمتها الوطنية مثل PDPL السعودي وقانون حماية البيانات الإماراتي.',
          },
          {
            title: 'الاحتفاظ بالبيانات في شروط الخدمة',
            text: 'ماذا تقول شروط الخدمة عن حفظ بياناتك بعد إتمام الاستدلال؟ أشارت OpenAI و DeepSeek (في منتديات مختلفة) إلى أنهما قد تحتفظان بـ prompts المستخدمين لتحسين النموذج أو للإفصاح المُلزِم قانونًا. أما Qwen و Llama المشغّلان محليًا فلا تخضعان لأي شروط خدمة: أنت تتحكم في الاحتفاظ.',
          },
          {
            title: 'اشتراط SCC / TIA',
            text: 'بعد قضية Schrems II، يتطلب أي نقل لبيانات شخصية من الاتحاد الأوروبي إلى خارجه البنود التعاقدية القياسية (SCCs) إضافةً إلى تقييم أثر النقل (TIA) للتأكد من أن الولاية القضائية المستقبِلة توفر حماية كافية. تتطلب واجهات API السحابية ذلك؛ أما النماذج المحلية فلا.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'مصفوفة المخاطر: مقارنة نموذجًا بنموذج',
        content: [
          'يلخص الجدول التالي ملف مخاطر GDPR لكل خيار نشر. تشير الدرجة الأعلى إلى مخاطر قانونية وتشغيلية أكبر.',
        ],
        columns: ['النشر', 'إقامة البيانات', 'الولاية القضائية لبيانات التدريب', 'مخاطر الاحتفاظ في شروط الخدمة', 'هل SCC / TIA مطلوبة؟', 'مستوى المخاطر الإجمالي'],
        rows: [
          { 'النشر': 'DeepSeek API', 'إقامة البيانات': 'الصين (Alibaba Cloud)', 'الولاية القضائية لبيانات التدريب': 'الصين (PIPL)', 'مخاطر الاحتفاظ في شروط الخدمة': 'تحتفظ صراحةً بحق مشاركة البيانات مع السلطات', 'هل SCC / TIA مطلوبة؟': 'نعم، لكنها غير فعّالة (لا كفاية بين الاتحاد الأوروبي والصين)', 'مستوى المخاطر الإجمالي': '🔴 الأعلى' },
          { 'النشر': 'Claude API (الولايات المتحدة)', 'إقامة البيانات': 'الولايات المتحدة (فرجينيا)', 'الولاية القضائية لبيانات التدريب': 'الولايات المتحدة', 'مخاطر الاحتفاظ في شروط الخدمة': 'تلتزم Anthropic بحذف البيانات عند الطلب؛ احتفاظ افتراضي 30 يومًا', 'هل SCC / TIA مطلوبة؟': 'نعم، تتطلب SCC + TIA', 'مستوى المخاطر الإجمالي': '🟠 متوسط-مرتفع' },
          { 'النشر': 'GPT-5.5 (الولايات المتحدة)', 'إقامة البيانات': 'الولايات المتحدة (مناطق متعددة)', 'الولاية القضائية لبيانات التدريب': 'الولايات المتحدة', 'مخاطر الاحتفاظ في شروط الخدمة': 'قد تحتفظ OpenAI بالبيانات لتحسين النموذج؛ سياسة غامضة', 'هل SCC / TIA مطلوبة؟': 'نعم، تتطلب SCC + TIA', 'مستوى المخاطر الإجمالي': '🟠 متوسط-مرتفع' },
          { 'النشر': 'Claude (إقامة بيانات في الاتحاد الأوروبي)', 'إقامة البيانات': 'الاتحاد الأوروبي (أيرلندا أو ألمانيا)', 'الولاية القضائية لبيانات التدريب': 'الولايات المتحدة (Anthropic)، تبقى البيانات في الاتحاد الأوروبي', 'مخاطر الاحتفاظ في شروط الخدمة': 'تلتزم Anthropic بإقامة في الاتحاد الأوروبي فقط + امتثال GDPR', 'هل SCC / TIA مطلوبة؟': 'نعم، SCC مناسبة لمعالجة في الاتحاد الأوروبي', 'مستوى المخاطر الإجمالي': '🟡 متوسط' },
          { 'النشر': 'Llama 4 Scout (محلي)', 'إقامة البيانات': 'أجهزتك (LAN)', 'الولاية القضائية لبيانات التدريب': 'مفتوح المصدر، لا احتفاظ تجاري', 'مخاطر الاحتفاظ في شروط الخدمة': 'أنت تتحكم في الاحتفاظ عبر السجلات المحلية فقط', 'هل SCC / TIA مطلوبة؟': 'لا', 'مستوى المخاطر الإجمالي': '🟢 الأدنى' },
          { 'النشر': 'Qwen 3 14B (محلي)', 'إقامة البيانات': 'أجهزتك (LAN)', 'الولاية القضائية لبيانات التدريب': 'مفتوح المصدر (Apache 2.0)، لا احتفاظ تجاري', 'مخاطر الاحتفاظ في شروط الخدمة': 'أنت تتحكم في الاحتفاظ عبر السجلات المحلية فقط', 'هل SCC / TIA مطلوبة؟': 'لا', 'مستوى المخاطر الإجمالي': '🟢 الأدنى' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'الحكم حسب النموذج والاستخدام الموصى به',
        content: [
          'استخدم هذا القسم لفهم متى يكون كل نشر مناسبًا وفق موقفك من امتثال GDPR.',
        ],
        subsections: [
          {
            title: 'DeepSeek API — يُتجنّب لمسارات عمل GDPR',
            text: 'يمثل DeepSeek API أعلى مخاطر بين جميع نماذج LLM الرئيسية لأن: (1) الخوادم في الصين القارية وتخضع لتفويضات الوصول إلى البيانات في PIPL؛ (2) لا يوجد قرار كفاية بين الاتحاد الأوروبي والصين (تجعل Schrems II بنود SCC غير كافية)؛ (3) تحتفظ شروط الخدمة صراحةً بحق مشاركة البيانات مع السلطات الصينية. إذا احتوت prompts على بيانات شخصية لمقيمين في الاتحاد الأوروبي أو في دول الخليج التي تطبق أنظمة حماية بيانات (PDPL في السعودية، قانون حماية البيانات الاتحادي في الإمارات)، فإن DeepSeek API ينتهك إطار الحماية المطبّق ما لم تحصل على موافقة صريحة من كل صاحب بيانات وأساس قانوني موثّق للنقل. وللمهام غير الحساسة (تحليل المنافسة، العصف الذهني) تكون المخاطر أقل، لكن مراجعة العقد إلزامية قبل أي استخدام.',
          },
          {
            title: 'Claude API (الولايات المتحدة) — مخاطر متوسطة، قابلة للإدارة بـ SCC + TIA',
            text: 'يتطلب Claude API البنود التعاقدية القياسية وتقييم أثر النقل، لكنه أكثر امتثالًا من GPT-5.5 لأن: (1) لدى Anthropic التزام أوضح بالحذف عند الطلب؛ (2) نشرت Anthropic ملاحق معالجة بيانات (DPA) تشير صراحةً إلى المادتين 28 و32 من GDPR؛ (3) القانون الأمريكي، رغم سماحه بوصول السلطات، لا يُلزم بالاحتفاظ بالبيانات التجارية. وللبيانات الشخصية غير الحساسة (المسميات الوظيفية، السياق المؤسسي العام)، يكون Claude API مع SCC + TIA مقبولًا. أما للبيانات شديدة الحساسية (الصحية، المالية، الحيوية)، فيلزم النشر المحلي.',
          },
          {
            title: 'Claude (إقامة بيانات في الاتحاد الأوروبي) — مخاطر متوسطة، مخففة بالمعالجة داخل الاتحاد',
            text: 'تقدم Anthropic خيار إقامة بيانات في الاتحاد الأوروبي حيث تُعالج prompts في أيرلندا أو ألمانيا. يقلل ذلك المخاطر لأن: (1) تبقى البيانات داخل الاتحاد أثناء المعالجة؛ (2) تُحذف البيانات بعد 30 يومًا؛ (3) تلتزم Anthropic بامتثال GDPR. ومع ذلك، فإن بيانات التدريب خلف نماذج Claude مدرَّبة في الولايات المتحدة، و Anthropic شركة أمريكية، لذا يظل الامتثال الكامل للمادة 44 يتطلب SCCs. أفضل من Claude الأمريكي لـ GDPR، لكنه ليس معادلًا للنشر المحلي.',
          },
          {
            title: 'GPT-5.5 / GPT-5.5 Instant — مخاطر متوسطة-مرتفعة',
            text: 'تحمل واجهات OpenAI مخاطر أعلى من Claude لأن: (1) سياسة الاحتفاظ بالبيانات لدى OpenAI غامضة — صرّحت الشركة بأنها قد تحتفظ ببيانات المستخدمين لأغراض "تحسينات البحث والأمان"؛ (2) لا توجد DPA منشورة؛ (3) لا يوجد خيار إقامة بيانات في الاتحاد الأوروبي. إذا اخترت OpenAI، فاشترط SCC صريحة + TIA شاملة، وتجنّب إرسال بيانات شديدة الحساسية (صحية، مالية، حيوية، جينية). وللمهام منخفضة الحساسية تكون مقبولة مع SCC.',
          },
          {
            title: 'Llama 4 Scout (محلي) — أقل مخاطرة، دون نقل',
            text: 'أوزان Llama مفتوحة المصدر بموجب ترخيص ودود للاستخدام التجاري. يعني تشغيل Llama محليًا على أجهزتك: (1) صفر نقل بموجب المادة 44؛ (2) أنت تتحكم في كل الاحتفاظ بالبيانات؛ (3) لا حاجة لـ SCC أو TIA؛ (4) امتثال كامل للمادة 25 (الخصوصية بحكم التصميم). مناسب لجميع مستويات حساسية البيانات. يغطي Llama 4 Scout بسعة 8 GB أو Llama 3.2 70B بسعة 48 GB معظم حالات الاستخدام المؤسسي.',
          },
          {
            title: 'Qwen 3 / 3 (محلي) — أقل مخاطرة، دون نقل',
            text: 'أوزان Qwen مفتوحة المصدر بموجب Apache 2.0. وكما هي حال Llama، يعني تشغيل Qwen محليًا: (1) صفر نقل بموجب المادة 44؛ (2) أنت تتحكم في الاحتفاظ؛ (3) لا حاجة لأساس قانوني (لا نقل = لا مخاطر نقل). يُعد Qwen 3 14B الأوسع انتشارًا في أوروبا وفي مؤسسات الخليج ذات متطلبات الخصوصية الصارمة، بفضل أدائه المتعدد اللغات الممتاز وبصمته الأقل لـ VRAM (12–16 GB مقابل 48 GB لـ Llama 3.2 70B). مناسب لجميع مستويات الحساسية، ويُكمّله توافر نماذج عربية سيادية مثل Jais و ALLaM و Falcon لمؤسسات الخليج التي تفضّل أوزانًا مدرَّبة على العربية.',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'الحزمة الموصى بها حسب نوع المؤسسة',
        content: [
          'تعتمد حزمة LLM المناسبة على حساسية بيانات مؤسستك وميزانيتها وموقفها التنظيمي. استخدم هذه التوصيات كنقطة انطلاق لقرارات المشتريات.',
        ],
        subsections: [
          {
            title: 'شركة ناشئة في مرحلة مبكرة (ضغط تنظيمي منخفض)',
            text: 'استخدم Claude API مع SCC. المبرر: Claude عالي الجودة وجاهز للإنتاج، وعبء الإدارة منخفض، وبنود SCC قياسية لمزودي الذكاء الاصطناعي ومقرهم الولايات المتحدة. التكلفة نحو 3–5 دولارات شهريًا للاستخدام التجريبي. المخاطر مقبولة لأن بيانات الشركات الناشئة عادةً منخفضة الحساسية (أنماط استخدام مجهولة، منطق أعمال عام). وإذا نمت إلى مجال الصحة أو التقنية المالية، فانتقل إلى Qwen محلي.',
          },
          {
            title: 'شركة صغيرة ومتوسطة ببيانات موظفين/عملاء (ضغط تنظيمي متوسط)',
            text: 'استخدم Qwen 3 14B أو Llama 3.2 32B محليًا. المبرر: أنت تدير بيانات شخصية (رواتب الموظفين، معلومات اتصال العملاء، سجل المعاملات)، لذا تلزم بنية صفر نقل. ينطبق ذلك على GDPR في الاتحاد الأوروبي وكذلك PDPL في السعودية وقانون حماية البيانات الاتحادي في الإمارات وأنظمة الخليج المماثلة. انشر على GPU داخل المقر (RTX 4070 Ti، 12 GB VRAM لـ Qwen 3 بتكميم Q4). التكلفة: ~500 دولار أجهزة لمرة واحدة + ~100 دولار/سنة كهرباء. وقت الإعداد: أقل من ساعة (Ollama بسيط). عبء الامتثال: صفر (لا SCC، لا TIA، لا تفاوض على DPA).',
          },
          {
            title: 'شركة كبرى (ضغط تنظيمي مرتفع: صحة، تقنية مالية، قانون)',
            text: 'استخدم Qwen 3 33B متعدد الـ GPU مع نشر معزول شبكيًا. المبرر: تتطلب البيانات شديدة الحساسية أقوى بنية ممكنة. يتيح تعدد الـ GPU (2× RTX 3090 أو 4× RTX 4090) تشغيل نماذج أكبر وأكثر قدرة بزمن استجابة أقل. ويعني العزل الشبكي أن عنقود الاستدلال لا يملك وصولًا صادرًا إلى الإنترنت — لا يمكن تسريب prompts حتى لو اكتُشفت ثغرة. التكلفة: ~5–15 ألف دولار أجهزة، وأسبوع إلى أسبوعين إعداد من فريق البنية التحتية. الامتثال: استيفاء كامل للمادة 32 من GDPR (الأمان)، وسجل تدقيق للمادة 30 بسجلات وصول كاملة. ويمكن لمؤسسات الخليج التي تفضّل السيادة الوطنية اعتماد نماذج عربية سيادية (Jais, ALLaM, Falcon) بالبنية نفسها.',
          },
          {
            title: 'مؤسسة لديها اتفاق قانوني قائم (حالة خاصة)',
            text: 'إذا كان لديك بالفعل ملحق معالجة بيانات (DPA) مع Claude أو OpenAI، فاستخدمه. غالبًا ما تكون تكلفة التحول إلى المحلي أقل من إعادة التفاوض على DPA، وإذا كان الاتفاق القائم حديثًا (2024–2026) ويشمل SCC + TIA، فإن المخاطر قابلة للإدارة. راجع مع فريقك القانوني قبل اتخاذ القرار.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'هل DeepSeek متوافق مع GDPR إذا استخدمته مع SCC؟',
            a: 'لا. لا تكفي بنود SCC وحدها لاستيفاء عمليات النقل بموجب المادة 44 من GDPR إلى الصين القارية لأن: (1) لا يوجد قرار كفاية بين الاتحاد الأوروبي والصين بعد Schrems II؛ (2) يُلزم القانون الصيني (PIPL) الشركات بمشاركة البيانات مع سلطات الدولة عند الطلب، وهو ما لا تستطيع بنود SCC إبطاله؛ (3) لا يقدّم كبار المزودين تنفيذ SCC في الصين ويرفضون العمل هناك. وبالنسبة لأي بيانات شخصية لمقيمين في الاتحاد الأوروبي — أو بموجب أنظمة الخليج المعادلة مثل PDPL (السعودية) وقانون حماية البيانات الاتحادي (الإمارات) — لا تستخدم DeepSeek API. وإذا احتجت DeepSeek، فاستخدم الأوزان المحلية (شغّل `ollama run deepseek-coder:latest` على أجهزتك).',
          },
          {
            q: 'هل يستوفي استخدام Claude EU مع SCC متطلبات GDPR؟',
            a: 'في معظمه نعم، مع تحفظات. يُبقي Claude EU بياناتك في أيرلندا أو ألمانيا أثناء المعالجة ويحذفها خلال 30 يومًا. ونشرت Anthropic DPA متوافقة مع GDPR وبنود SCC. ومع ذلك، دُرّبت نماذج Claude على بيانات في الولايات المتحدة، و Anthropic شركة أمريكية، لذا يظل هناك تقنيًا "نقل" في صورة تدريب النموذج وعلاقة المزوّد. وللامتثال العملي، يكون Claude EU + SCC مقبولًا لمعظم المؤسسات. وللحصول على أقوى موقف (دون أي مخاطر نقل)، استخدم Qwen أو Llama محليًا.',
          },
          {
            q: 'هل يمكنني استخدام Llama 4 Scout كبديل مباشر لـ Claude؟',
            a: 'للامتثال لـ GDPR: نعم. Llama 4 Scout مفتوح المصدر ويمكن تشغيله محليًا، لذا يستوفي بالكامل المواد 44 و25 و32. أما للقدرة والأداء: ربما. Llama 4 Scout أصغر (8 GB VRAM) من Claude (الاحتكاري وكبير جدًا)، لذا فهو أسرع وأرخص في التشغيل محليًا، لكنه قد يكون أقل قدرة في بعض المعايير. اختبره على حمل عملك أولًا. للأسئلة والأجوبة البسيطة والتلخيص ومهام الكود، يكون Llama 4 Scout تنافسيًا. وللاستدلال شديد التعقيد يبقى Claude أفضل، لكن Qwen 3 14B المحلي أو Llama 3.2 70B يمكنهما إنجاز معظم المهام المؤسسية.',
          },
          {
            q: 'ماذا لو سجّلت prompts محليًا لأغراض التدقيق؟',
            a: 'يُوصى بالتسجيل لاستيفاء المادة 30. سجّل ما يلي: اسم النموذج، الطابع الزمني للجلسة، عدد tokens الإدخال، عدد tokens الإخراج، وتجزئة SHA-256 لـ prompt والاستجابة. لا تسجّل النص الخام لـ prompts التي تحتوي على بيانات شخصية. يستوفي التسجيل القائم على التجزئة المادة 30 (سجلات المعالجة) والمادة 32 (الأمان) دون انتهاك المادة 5(1)(هـ) (تحديد التخزين). خزّن السجلات في نظام مشفّر بضوابط وصول (مثل خادم تجميع سجلات بوصول قائم على الأدوار). احتفظ بالسجلات لمدة 3 سنوات وفق معيار DPA.',
          },
          {
            q: 'هل تشغيل LLM داخل المقر أغلى من استخدام واجهات API السحابية؟',
            a: 'مقدمًا: نعم. تكلف الأجهزة (RTX 4070 Ti) نحو 500–1000 دولار. شهريًا: لا. كهرباء المقر نحو 5–10 دولارات شهريًا. وتكلف واجهات API السحابية 0.001–0.01 دولار لكل 1K tokens، وهو ما يتجاوز 100 دولار للاستخدام الكثيف (>1M tokens/شهر). نقطة التعادل عادةً 6–12 شهرًا للاستخدام المتوسط-المرتفع. إذا شغّلت <100K tokens/شهر، تكون واجهات API السحابية أرخص. وإذا شغّلت >1M tokens/شهر، يكون المقر أرخص. والامتثال لـ GDPR حجة أعمال إضافية: يلغي المقر التكلفة القانونية لـ SCC/TIA.',
          },
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'تتحدد مخاطر GDPR لنماذج LLM بإقامة البيانات والولاية القضائية لبيانات التدريب وسياسات الاحتفاظ في شروط الخدمة ومتطلبات SCC/TIA.',
        plainTerms: 'يهم اختيارك لنموذج LLM في GDPR بسبب مكان تخزين بياناتك، وأي دولة تملك النموذج، ومدة احتفاظ المزوّد ببياناتك، وما إذا كنت تحتاج عقودًا قانونية لنقل البيانات عبر الحدود.',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مقارنة مخاطر GDPR: Qwen مقابل DeepSeek مقابل Llama مقابل Claude 2026',
      description: 'مقارنة نماذج LLM متوافقة مع GDPR: مصفوفة مخاطر لـ DeepSeek و Qwen و Llama و Claude.',
      url: 'https://www.promptquorum.com/ar/local-llms/gdpr-llm-risk-comparison-2026',
      inLanguage: 'ar',
      datePublished: '2026-05-22',
      dateModified: '2026-05-22',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  de: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'DSGVO-Risikovergleich: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'DSGVO-Risikomatrix 2026: Qwen, DeepSeek, Llama, Claude',
    metaDescription: 'DSGVO-LLM-Vergleich: DeepSeek API (höchstes Risiko), Qwen lokal (niedrigstes), Llama lokal, Claude/GPT API. Risikomatrix nach Speicherung und ToS.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8 min Lesedauer',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API trägt das höchste DSGVO-Risiko aller großen LLMs, da Server dem chinesischen Datenzugangsgesetz (PIPL) unterliegen; Qwen und Llama lokal haben gleichwertiges niedriges Risiko',
          'Claude und GPT-5.5 APIs mit EU-Datenspeicherung tragen mittleres Risiko und erfordern Standardvertragsklauseln (SVKs)',
          'Empfohlene Stacks: Startups (Claude + SVK), datenempfindliche Orgs (Qwen 24 GB lokal), Unternehmen (Multi-GPU Qwen + Air-Gap)',
          'Risikoentscheidungsmatrix behandelt fünf Vektoren: Datenspeicherung, Ausbildungsdaten-Gerichtsbarkeit, ToS-Datenspeicherung, SVK-Anforderung und rechtliches Urteil',
          'Lokale Qwen- und Llama-Modelle erfüllen Artikel 44 (kein Transfer), Artikel 25 (Datenschutz durch Design) und Artikel 32 (Sicherheit)',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'Vier DSGVO-Risikovektoren für LLMs',
        content: [
          'Das DSGVO-Risiko bei der Verwendung eines LLMs wird durch vier unabhängige Faktoren bestimmt: Datenspeicherung, Ausbildungsdaten-Gerichtsbarkeit, ToS-Datenspeicherung und SVK/TIA-Anforderungen.',
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Risikohauptrix: Modellweiser Vergleich',
        content: [
          'Die folgende Tabelle fasst das DSGVO-Risikoprofil der einzelnen Bereitstellungsoptionen zusammen.',
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'Modellweises Urteil und empfohlene Verwendung',
        content: [
          'Verwenden Sie diesen Abschnitt, um zu verstehen, wann jede Bereitstellung für Ihre DSGVO-Compliance-Position angemessen ist.',
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'Empfohlener Stack nach Organisationstyp',
        content: [
          'Der richtige LLM-Stack hängt von der Datenempfindlichkeit, dem Budget und der Compliance-Position Ihrer Organisation ab.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Ist DeepSeek DSGVO-konform, wenn ich es mit einer SVK verwende?',
            a: 'Nein. SVKs allein sind nicht ausreichend für DSGVO-Transfers nach Artikel 44 nach China, weil: (1) es keine EU-China-Angemessenheitsentscheidung nach Schrems II gibt; (2) chinesisches Gesetz (PIPL) Unternehmen verpflichtet, Daten mit staatlichen Behörden zu teilen; (3) große Anbieter weigern sich, mit SVKs in China zu operieren. Verwenden Sie DeepSeek API nicht für personenbezogene Daten von EU-Bewohnern. Für nicht-sensible Aufgaben ist das lokale Gewichtsmodell sicherer.',
          },
          {
            q: 'Erfüllt die Verwendung von Claude EU mit SVK die DSGVO?',
            a: 'Ja, mit Vorbehalten. Claude EU hält Ihre Daten während der Verarbeitung in Irland oder Deutschland und löscht sie nach 30 Tagen. Anthropic hat ein DSGVO-konformes DPA veröffentlicht. Technisch ist es jedoch immer noch ein "Transfer" aufgrund von Training und Beziehung. Für praktische Compliance ist Claude EU + SVK akzeptabel. Für die stärkste Position (kein Transferrisiko) verwenden Sie lokale Qwen oder Llama.',
          },
          {
            q: 'Kann ich Llama 4 Scout als direkten Ersatz für Claude verwenden?',
            a: 'Für DSGVO-Compliance: Ja. Llama ist Open-Source und kann lokal ausgeführt werden, daher erfüllt es die Anforderungen vollständig. Für Leistung: vielleicht. Llama ist kleiner als Claude, daher schneller und billiger lokal auszuführen, aber möglicherweise weniger fähig bei komplexen Aufgaben. Testen Sie es mit Ihrem Workload.',
          },
          {
            q: 'Was passiert, wenn ich meine Prompts lokal für Auditzwecke protokolliere?',
            a: 'Protokollierung wird für Artikel-30-Compliance empfohlen. Protokollieren Sie: Modellname, Sitzungs-Zeitstempel, Input-Token-Anzahl, Output-Token-Anzahl und einen SHA-256-Hash des Prompts und der Antwort. Protokollieren Sie NICHT den Rohtexte von Prompts mit personenbezogenen Daten. Hash-basierte Protokollierung erfüllt Artikel 30 (Verarbeitungsverzeichnis) und Artikel 32 (Sicherheit), ohne gegen Artikel 5(1)(e) (Speicherbegrenzung) zu verstoßen.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'Comparaison des risques RGPD : Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'Matrice de risque RGPD : comparaison LLM Qwen DeepSeek Llama Claude | PromptQuorum',
    metaDescription: 'Comparaison LLM conforme au RGPD : DeepSeek API (risque le plus élevé), Qwen local (risque le plus faible), Llama local, API Claude/GPT (risque moyen). Matrice de risque par résidence des données, juridiction, ToS et exigences SCC. Mise à jour mai 2026.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8 min de lecture',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API présente le risque RGPD le plus élevé de tous les grands LLM car les serveurs sont soumis à la loi chinoise sur l\'accès aux données (PIPL) ; Qwen et Llama locaux portent un risque équivalent plus faible',
          'Claude et les API GPT-5.5 avec résidence des données dans l\'UE portent un risque moyen et nécessitent des clauses contractuelles types (CCT)',
          'Piles recommandées : startups (Claude + CCT), organisations sensibles aux données (Qwen 24 Go local), entreprises (Qwen multi-GPU + air-gap)',
          'La matrice de décision des risques couvre cinq vecteurs : résidence des données, juridiction des données d\'entraînement, conservation des données ToS et exigence CCT/TIA',
          'Les modèles Qwen et Llama locaux satisfont les articles 44 (pas de transfert), 25 (protection des données dès la conception) et 32 (sécurité)',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'Quatre vecteurs de risque RGPD pour les LLM',
        content: [
          'Le risque RGPD pour les LLM est déterminé par quatre facteurs indépendants : résidence des données, juridiction des données d\'entraînement, politiques de conservation des données ToS et exigences CCT/TIA.',
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Matrice de risque : comparaison modèle par modèle',
        content: [
          'Le tableau ci-dessous résume le profil de risque RGPD de chaque option de déploiement.',
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'Verdict par modèle et utilisation recommandée',
        content: [
          'Utilisez cette section pour comprendre quand chaque déploiement est approprié pour votre posture de conformité RGPD.',
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'Pile recommandée par type d\'organisation',
        content: [
          'La bonne pile LLM dépend de la sensibilité des données, du budget et de la posture de conformité de votre organisation.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'DeepSeek est-il conforme au RGPD si je l\'utilise avec une CCT ?',
            a: 'Non. Les CCT seules ne satisfont pas les transferts RGPD Article 44 vers la Chine continentale car : (1) il n\'y a pas de décision d\'adéquation UE-Chine post-Schrems II ; (2) la loi chinoise (PIPL) mandate que les entreprises partagent les données avec les autorités gouvernementales ; (3) les principaux fournisseurs refusent d\'opérer avec des CCT en Chine. Pour les données personnelles des résidents de l\'UE, n\'utilisez pas DeepSeek API. Si vous avez besoin de DeepSeek, utilisez les poids locaux.',
          },
          {
            q: 'L\'utilisation de Claude EU avec CCT satisfait-elle le RGPD ?',
            a: 'Essentiellement oui, avec des réserves. Claude EU garde vos données en Irlande ou en Allemagne pendant le traitement et les supprime dans les 30 jours. Anthropic a publié une CCT conforme au RGPD. Cependant, les données d\'entraînement de Claude sont toujours basées aux États-Unis, et Anthropic est une entreprise américaine. Pour la conformité pratique, Claude EU + CCT est acceptable. Pour la position la plus solide (sans risque de transfert), utilisez Qwen ou Llama locaux.',
          },
          {
            q: 'Puis-je utiliser Llama 4 Scout comme remplacement pour Claude ?',
            a: 'Pour la conformité RGPD : oui. Llama est open-source et peut s\'exécuter localement, il satisfait donc les articles 44, 25 et 32 complètement. Pour les capacités : peut-être. Testez sur votre charge de travail d\'abord. Pour les tâches simples de questions-réponses et de résumé, Llama 4 Scout est compétitif.',
          },
          {
            q: 'Que se passe-t-il si j\'enregistre mes prompts localement à des fins d\'audit ?',
            a: 'L\'enregistrement est encouragé pour la conformité Article 30. Enregistrez : nom du modèle, horodatage de la session, nombre de jetons d\'entrée, nombre de jetons de sortie et un hash SHA-256 du prompt et de la réponse. N\'enregistrez PAS le texte brut des prompts contenant des données personnelles. L\'enregistrement basé sur le hash satisfait l\'article 30 (registres des traitements) et l\'article 32 (sécurité).',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'GDPR リスク比較: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'GDPR リスク行列: LLM 比較 Qwen DeepSeek Llama Claude | PromptQuorum',
    metaDescription: 'GDPR準拠のLLM比較: DeepSeek API（最高リスク）、Qwen ローカル（最低リスク）、Llama ローカル、Claude/GPT API（中程度リスク）。データ拠点、管轄権、ToS、SCC要件によるリスク行列。2026年5月更新。',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8分間の読取',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek APIはすべての主要なLLMの中で最高のGDPRリスクを持っています。サーバーが中国のデータアクセス法（PIPL）の対象となるためです。QwenおよびLlamaをローカルで実行すると、同等の低リスクになります。',
          'ClaudeおよびGPT-5.5 APIはEUデータ拠点を備えた場合、中程度のリスクを負い、標準契約条項（SCC）が必要です。',
          '推奨スタック：スタートアップ（Claude + SCC）、データ敏感な組織（Qwen 24 GBローカル）、エンタープライズ（マルチGPU Qwen + エアギャップ）',
          'リスク決定行列は5つのベクトルをカバーしています：データ拠点、トレーニングデータ管轄権、ToSデータ保持、SCC要件、および法的判断',
          'ローカルQwenおよびLlamaモデルは、第44条（転送なし）、第25条（デザインによるデータ保護）、および第32条（セキュリティ）を満たします。',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'LLMのためのGDPRリスクの4つのベクトル',
        content: [
          'LLMの使用におけるGDPRリスクは、4つの独立した要因によって決定されます：データ拠点、トレーニングデータ管轄権、ToSデータ保持ポリシー、およびSCC/TIA要件。',
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'リスク行列：モデル別比較',
        content: [
          '下の表は、各デプロイメントオプションのGDPRリスクプロファイルをまとめています。',
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'モデル別の判断と推奨される使用法',
        content: [
          'このセクションを使用して、各デプロイメントがGDPRコンプライアンスポジャーに適切である場合を理解してください。',
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: '組織タイプ別の推奨スタック',
        content: [
          '正しいLLMスタックは、組織のデータセンシティビティ、予算、および規制スタンスに依存します。',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'SCCを使用する場合、DeepSeekはGDPR準拠ですか？',
            a: 'いいえ。SCC単独では、次の理由からGDPR第44条の中国への転送を満たしていません：（1）EU-中国の妥当性決定がSchrems II以降存在しない; （2）中国法（PIPL）は企業が政府機関とデータを共有することを義務付けている; （3）主要ベンダーはSCCで中国で操業することを拒否しています。EUの住民の個人データについては、DeepSeek APIを使用しないでください。DeepSeekが必要な場合は、ローカルウェイトを使用してください。',
          },
          {
            q: 'Claude EU をSCCで使用する場合、GDPRを満たしていますか？',
            a: 'ほぼはい、注意点があります。Claude EUは処理中あなたのデータをアイルランドまたはドイツに保持し、30日以内に削除します。Anthropicはグローバルに準拠したDPAを公開しています。ただし、Claude モデルは米国ベースの訓練データを使用しており、Anthropicは米国企業です。実用的なコンプライアンスについては、Claude EU + SCC は許容できます。最も強いポジション（転送リスクなし）については、ローカルQwenまたはLlamaを使用してください。',
          },
          {
            q: 'Llama 4 Scout を Claude の直接的な代替として使用できますか？',
            a: 'GDPRコンプライアンスについて：はい。Llama はオープンソースで、ローカルで実行できるため、第44条、第25条、および第32条を完全に満たしています。機能とパフォーマンスについて：おそらく。最初にあなたのワークロードでテストしてください。単純なQ&A、要約、およびコードタスクについて、Llama 4 Scout は競争力があります。',
          },
          {
            q: '監査の目的でプロンプトをローカルで記録した場合はどうなりますか？',
            a: '記録は第30条のコンプライアンスのために推奨されます。記録：モデル名、セッションタイムスタンプ、入力トークン数、出力トークン数、およびプロンプトと応答のSHA-256ハッシュ。個人データを含むプロンプトの生のテキストを記録しないでください。ハッシュベースのログは、第30条（処理記録）と第32条（セキュリティ）を満たし、第5条第1項e号（保存制限）に違反しません。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'GDPR 风险比较: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'GDPR 风险矩阵: LLM 比较 Qwen DeepSeek Llama Claude | PromptQuorum',
    metaDescription: 'GDPR合规LLM比较: DeepSeek API（风险最高）、Qwen本地（风险最低）、Llama本地、Claude/GPT API（中等风险）。按数据驻留、管辖权、ToS和SCC要求的风险矩阵。更新于2026年5月。',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8分钟阅读',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API在所有主要LLM中呈现最高的GDPR风险，因为服务器受中国数据访问法（PIPL）约束；Qwen和Llama本地运行风险相同且最低',
          'Claude和GPT-5.5 API具有欧盟数据驻留时承担中等风险，需要标准合同条款（SCC）',
          '推荐堆栈：初创企业（Claude + SCC）、数据敏感组织（Qwen 24GB本地）、企业（多GPU Qwen + 气隙）',
          '风险决策矩阵涵盖五个向量：数据驻留、训练数据管辖权、ToS数据保留、SCC要求和法律裁定',
          '本地Qwen和Llama模型满足第44条（无转移）、第25条（设计中的数据保护）和第32条（安全性）',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: '隆道风险的四个GDPR风险向量',
        content: [
          'LLM使用的GDPR风险由四个独立因素确定：数据驻留、训练数据管辖权、ToS数据保留政策和SCC/TIA要求。',
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: '风险矩阵：模型对比',
        content: [
          '下表总结了每个部署选项的GDPR风险概况。',
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: '模型裁定和推荐用法',
        content: [
          '使用本部分理解每个部署对于您的GDPR合规态势何时合适。',
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: '按组织类型推荐的堆栈',
        content: [
          '正确的LLM堆栈取决于您组织的数据敏感性、预算和监管态势。',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '如果我使用SCC，DeepSeek是否符合GDPR？',
            a: '不是。仅凭SCC无法满足GDPR第44条到中国大陆的转移，因为：（1）Schrems II后不存在欧盟-中国充分性决定；（2）中国法律（PIPL）要求公司与政府部门共享数据；（3）主要供应商拒绝在中国以SCC方式运营。对于欧盟居民的个人数据，请勿使用DeepSeek API。如果需要DeepSeek，请使用本地权重。',
          },
          {
            q: '使用Claude EU与SCC是否满足GDPR？',
            a: '基本上是的，有注意事项。Claude EU在处理期间将您的数据保留在爱尔兰或德国，并在30天内删除。Anthropic已发布GDPR合规DPA。但是，Claude模型仍基于美国训练数据，Anthropic是美国公司，因此在技术上仍存在"转移"。对于实际合规，Claude EU + SCC是可接受的。对于最强硬的立场（无转移风险），请使用本地Qwen或Llama。',
          },
          {
            q: '我能否将Llama 4 Scout用作Claude的直接替代品？',
            a: '对于GDPR合规：是的。Llama是开源的，可以在本地运行，因此完全满足第44、25和32条要求。对于功能和性能：也许。首先在您的工作负载上进行测试。对于简单的问答、摘要和代码任务，Llama 4 Scout具有竞争力。',
          },
          {
            q: '如果我在本地记录提示以供审计之用会怎样？',
            a: '建议记录以符合第30条。记录：模型名称、会话时间戳、输入令牌数、输出令牌数和提示与响应的SHA-256哈希。不要记录包含个人数据的提示的原始文本。基于哈希的日志记录满足第30条（处理记录）和第32条（安全性），同时不违反第5条第(1)项e（存储限制）。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'Comparação de riscos GDPR: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'Matriz de risco GDPR: Qwen, DeepSeek, Llama e Claude',
    metaDescription: 'Comparação de LLMs em conformidade com GDPR/LGPD: DeepSeek API (maior risco), Qwen local (menor risco), Llama local e Claude/GPT API (risco médio). Matriz por residência de dados.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8 min de leitura',
    educationalLevel: 'Advanced',
    audience: 'CISOs, equipes de compras e responsáveis por conformidade que escolhem entre LLMs proprietários e de pesos abertos',
    primaryTerm: 'comparação de risco GDPR modelos LLM',
    leadAnswerBlock: '**A API da DeepSeek apresenta o maior risco de GDPR entre os principais LLMs por causa da lei chinesa de acesso a dados (PIPL); Qwen e Llama executados localmente têm risco igualmente baixo; as APIs de Claude e GPT-5.5 com residência na UE têm risco médio e exigem Cláusulas Contratuais Padrão (SCCs).**',
    current_models_mentioned: ['DeepSeek', 'DeepSeek API', 'Qwen 3 14B', 'Qwen local', 'Llama 4 Scout', 'Claude Sonnet 4.6', 'GPT-5.5 Instant', 'Claude Opus 4.8'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', 'multi-GPU'],
    quickAnswerTop: {
      pt: {
        question: 'Qual LLM é mais seguro sob o GDPR?', // VERIFY
        answer: 'Qwen 3 14B ou Llama 4 Scout executados localmente no seu próprio hardware — nenhum dado sai da sua jurisdição, sem transferência do Artigo 44, sem SCC ou TIA necessária. A API da DeepSeek é a de maior risco porque os servidores obedecem à lei chinesa de dados (PIPL). As APIs de Claude e GPT-5.5 exigem residência de dados na UE + SCCs para conformidade de risco médio.', // VERIFY
        bullets: [
          'Qwen local: menor risco. Sem transferência, pesos Apache 2.0, 12–24 GB VRAM, configuração em <30 min.', // VERIFY
          'DeepSeek API: maior risco. Jurisdição PIPL, sem adequação da UE, os ToS permitem compartilhamento de dados determinado pelo Estado.', // VERIFY
          'Claude/GPT EU+SCC: risco médio. Contratos de residência + SCCs ajudam, mas ainda envolvem transferência.', // VERIFY
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Quatro vetores de risco GDPR para LLMs', anchor: 'risk-vectors' },
      { label: 'Matriz de risco: comparação modelo a modelo', anchor: 'risk-matrix' },
      { label: 'Veredito por modelo e uso recomendado', anchor: 'model-verdicts' },
      { label: 'Stack recomendado por tipo de organização', anchor: 'org-stacks' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A API da DeepSeek tem o maior risco de GDPR entre todos os principais LLMs: os servidores estão sujeitos à lei chinesa de acesso a dados (PIPL), não existe decisão de adequação UE-China, e os ToS permitem explicitamente compartilhar dados com as autoridades chinesas',
          'Qwen 3 14B e Llama 4 Scout executados localmente têm o menor risco: sem transferência segundo o Artigo 44, sem SCC exigida, os dados permanecem no seu hardware',
          'As APIs de Claude e GPT-5.5 Instant têm risco médio: a jurisdição dos EUA exige Cláusulas Contratuais Padrão mais Avaliação de Impacto da Transferência; as opções de residência de dados na UE (Claude EU) reduzem o risco',
          'Stacks recomendados: startups (Claude + SCC), organizações com dados sensíveis (Qwen 24 GB local), empresas (Qwen multi-GPU + air-gap)',
          'A matriz de decisão de risco cobre cinco vetores: residência de dados, jurisdição dos dados de treinamento, retenção de dados nos ToS, exigência de SCC e veredito jurídico',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'Quatro vetores de risco GDPR para LLMs',
        content: [
          'Nem toda implantação de LLM carrega o mesmo risco de GDPR. O risco jurídico e operacional de usar um LLM é determinado por quatro fatores independentes:',
        ],
        subsections: [
          {
            title: 'Residência de dados',
            text: 'Onde os servidores do modelo ficam fisicamente. Se os servidores estão na UE e o provedor se compromete contratualmente a manter seus dados na UE, o risco de residência de dados é baixo. Se os servidores estão fora da UE sem SCC, o risco é alto. Para organizações no Brasil, a LGPD (Lei nº 13.709/2018) impõe requisitos equivalentes de base legal e de transferência internacional de dados (art. 33), fiscalizados pela ANPD.',
          },
          {
            title: 'Jurisdição dos dados de treinamento',
            text: 'Quais leis de país regem os dados de treinamento e o direito do provedor de retê-los. A lei de dados dos EUA (CFAA, SCA) permite o acesso das autoridades. A lei de dados chinesa (PIPL) impõe direitos de acesso estatal muito mais amplos. Os dados da UE permanecem protegidos pelo GDPR e pela Diretiva ePrivacy; os dados no Brasil são regidos pela LGPD.',
          },
          {
            title: 'Retenção de dados nos ToS',
            text: 'O que os Termos de Serviço dizem sobre guardar seus dados depois que a inferência termina? OpenAI e DeepSeek já indicaram (em diferentes fóruns) que podem reter os prompts dos usuários para melhoria do modelo ou divulgação legalmente exigida. Qwen e Llama executados localmente não têm ToS — você controla a retenção.',
          },
          {
            title: 'Exigência de SCC / TIA',
            text: 'Após Schrems II, qualquer transferência de dados pessoais da UE para fora da UE exige Cláusulas Contratuais Padrão (SCCs) mais uma Avaliação de Impacto da Transferência (TIA) para confirmar que a jurisdição de destino oferece proteção adequada. As APIs em nuvem exigem isso; os modelos locais não.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Matriz de risco: comparação modelo a modelo',
        content: [
          'A tabela abaixo resume o perfil de risco de GDPR de cada opção de implantação. Pontuações mais altas indicam maior risco jurídico e operacional.',
        ],
        columns: ['Implantação', 'Residência de dados', 'Jurisdição dos dados de treinamento', 'Risco de retenção nos ToS', 'SCC / TIA exigida?', 'Nível de risco geral'],
        rows: [
          { 'Implantação': 'DeepSeek API', 'Residência de dados': 'China (Alibaba Cloud)', 'Jurisdição dos dados de treinamento': 'China (PIPL)', 'Risco de retenção nos ToS': 'Reserva-se explicitamente o direito de compartilhar dados com as autoridades', 'SCC / TIA exigida?': 'Sim, mas ineficaz (sem adequação UE-China)', 'Nível de risco geral': '🔴 Maior' },
          { 'Implantação': 'Claude API (EUA)', 'Residência de dados': 'EUA (Virgínia)', 'Jurisdição dos dados de treinamento': 'EUA', 'Risco de retenção nos ToS': 'A Anthropic se compromete a excluir os dados mediante solicitação; retenção padrão de 30 dias', 'SCC / TIA exigida?': 'Sim, exige SCC + TIA', 'Nível de risco geral': '🟠 Médio-alto' },
          { 'Implantação': 'GPT-5.5 (EUA)', 'Residência de dados': 'EUA (várias regiões)', 'Jurisdição dos dados de treinamento': 'EUA', 'Risco de retenção nos ToS': 'A OpenAI pode reter para melhoria do modelo; política opaca', 'SCC / TIA exigida?': 'Sim, exige SCC + TIA', 'Nível de risco geral': '🟠 Médio-alto' },
          { 'Implantação': 'Claude (residência de dados na UE)', 'Residência de dados': 'UE (Irlanda ou Alemanha)', 'Jurisdição dos dados de treinamento': 'EUA (Anthropic), dados permanecem na UE', 'Risco de retenção nos ToS': 'A Anthropic se compromete com residência apenas na UE + conformidade com GDPR', 'SCC / TIA exigida?': 'Sim, SCC adequada por processamento na UE', 'Nível de risco geral': '🟡 Médio' },
          { 'Implantação': 'Llama 4 Scout (local)', 'Residência de dados': 'Seu hardware (LAN)', 'Jurisdição dos dados de treinamento': 'Código aberto, sem retenção comercial', 'Risco de retenção nos ToS': 'Você controla a retenção apenas via logs locais', 'SCC / TIA exigida?': 'Não', 'Nível de risco geral': '🟢 Menor' },
          { 'Implantação': 'Qwen 3 14B (local)', 'Residência de dados': 'Seu hardware (LAN)', 'Jurisdição dos dados de treinamento': 'Código aberto (Apache 2.0), sem retenção comercial', 'Risco de retenção nos ToS': 'Você controla a retenção apenas via logs locais', 'SCC / TIA exigida?': 'Não', 'Nível de risco geral': '🟢 Menor' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'Veredito por modelo e uso recomendado',
        content: [
          'Use esta seção para entender quando cada implantação é apropriada para a sua postura de conformidade com GDPR.',
        ],
        subsections: [
          {
            title: 'DeepSeek API — Evite para fluxos de trabalho sob GDPR',
            text: 'A API da DeepSeek apresenta o maior risco entre os principais LLMs porque: (1) os servidores ficam na China continental, sujeitos aos mandatos de acesso a dados da PIPL; (2) não existe decisão de adequação UE-China (Schrems II torna as SCCs insuficientes); (3) os ToS reservam-se explicitamente o direito de compartilhar dados com as autoridades chinesas. Se seus prompts contêm dados pessoais de residentes na UE — ou de titulares no Brasil sob a LGPD (Lei nº 13.709/2018) — a API da DeepSeek viola o marco aplicável, salvo se você tiver consentimento explícito de cada titular e uma base legal documentada para a transferência. Para tarefas não sensíveis (análise de concorrência, brainstorming), o risco é menor, mas a revisão do contrato é obrigatória antes de qualquer uso.',
          },
          {
            title: 'Claude API (EUA) — Risco médio, gerenciável com SCC + TIA',
            text: 'A API do Claude exige Cláusulas Contratuais Padrão e uma Avaliação de Impacto da Transferência, mas é mais conforme que o GPT-5.5 porque: (1) a Anthropic tem um compromisso mais claro de exclusão mediante solicitação; (2) a Anthropic publicou Adendos de Processamento de Dados (DPA) que fazem referência explícita aos Artigos 28 e 32 do GDPR; (3) a lei dos EUA, embora permita o acesso das autoridades, não obriga a retenção comercial de dados. Para dados pessoais não sensíveis (cargos, contexto empresarial genérico), a API do Claude com SCC + TIA é aceitável. Para dados de alta sensibilidade (saúde, financeiros, biométricos), é necessária a implantação local.',
          },
          {
            title: 'Claude (residência de dados na UE) — Risco médio, reduzido pelo processamento na UE',
            text: 'A Anthropic oferece uma opção de residência de dados na UE em que os prompts são processados na Irlanda ou na Alemanha. Isso reduz o risco porque: (1) os dados permanecem dentro da UE durante o processamento; (2) os dados são excluídos após 30 dias; (3) a Anthropic se compromete com a conformidade com o GDPR. Porém, os dados de treinamento por trás dos modelos Claude ainda são treinados nos EUA, e a Anthropic é uma empresa americana, então a conformidade total com o Artigo 44 ainda exige SCCs. Melhor que o Claude dos EUA para o GDPR, mas não equivalente à implantação local.',
          },
          {
            title: 'GPT-5.5 / GPT-5.5 Instant — Risco médio-alto',
            text: 'As APIs da OpenAI carregam maior risco que o Claude porque: (1) a política de retenção de dados da OpenAI é opaca — a empresa já disse que pode reter dados de usuários para "melhorias de pesquisa e segurança"; (2) não há DPA publicado; (3) não há opção de residência de dados na UE. Se você escolher a OpenAI, exija SCC explícita + TIA abrangente e evite enviar dados de alta sensibilidade (saúde, financeiros, biométricos, genéticos). Para tarefas de baixa sensibilidade, é aceitável com SCC.',
          },
          {
            title: 'Llama 4 Scout (local) — Menor risco, sem transferência',
            text: 'Os pesos do Llama são de código aberto sob uma licença amigável ao uso comercial. Executar o Llama localmente no seu próprio hardware significa: (1) zero transferência segundo o Artigo 44; (2) você controla toda a retenção de dados; (3) nenhuma SCC ou TIA exigida; (4) conformidade total com o Artigo 25 (privacidade desde a concepção). Adequado para todos os níveis de sensibilidade de dados. Llama 4 Scout em 8 GB ou Llama 3.2 70B em 48 GB cobre a maioria dos casos de uso empresarial.',
          },
          {
            title: 'Qwen 3 / 3 (local) — Menor risco, sem transferência',
            text: 'Os pesos do Qwen são de código aberto sob Apache 2.0. Assim como o Llama, executar o Qwen localmente significa: (1) zero transferência segundo o Artigo 44; (2) você controla a retenção; (3) nenhuma base legal exigida (sem transferência = sem risco de transferência). O Qwen 3 14B é o mais implantado na Europa e em organizações brasileiras com requisitos rígidos de privacidade sob a LGPD, graças ao excelente desempenho multilíngue e à menor pegada de VRAM (12–16 GB ante os 48 GB do Llama 3.2 70B). Adequado para todos os níveis de sensibilidade.',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'Stack recomendado por tipo de organização',
        content: [
          'O stack de LLM ideal depende da sensibilidade de dados da sua organização, do orçamento e da postura regulatória. Use estas recomendações como ponto de partida para decisões de compra.',
        ],
        subsections: [
          {
            title: 'Startup em estágio inicial (baixa pressão regulatória)',
            text: 'Use a API do Claude com SCC. Justificativa: o Claude é de alta qualidade, pronto para produção, a sobrecarga de gestão é baixa e as SCCs são padrão para fornecedores de IA sediados nos EUA. O custo é de cerca de US$ 3–5/mês para uso experimental (a API é cobrada em dólar). O risco é aceitável porque os dados de startups costumam ser de baixa sensibilidade (padrões de uso anônimos, lógica de negócio genérica). Se você crescer para saúde ou fintech, migre para o Qwen local.',
          },
          {
            title: 'PME com dados de funcionários/clientes (pressão regulatória média)',
            text: 'Use Qwen 3 14B ou Llama 3.2 32B localmente. Justificativa: você lida com dados pessoais (folha de funcionários, contatos de clientes, histórico de transações), então a arquitetura de zero transferência é necessária. Aplica-se tanto ao GDPR na UE quanto à LGPD no Brasil. Implante em uma GPU on-premise (RTX 4070 Ti, 12 GB de VRAM para o Qwen 3 em quantização Q4). Custo: ~R$ 4.500 de hardware único (varejo brasileiro) + ~R$ 600/ano de eletricidade. Tempo de configuração: menos de 1 hora (o Ollama é trivial). Carga de conformidade: zero (sem SCC, sem TIA, sem negociação de DPA).',
          },
          {
            title: 'Empresa (alta pressão regulatória: saúde, fintech, jurídico)',
            text: 'Use Qwen 3 33B multi-GPU com implantação air-gap. Justificativa: dados de alta sensibilidade exigem a arquitetura mais robusta possível. Multi-GPU (2× RTX 3090 ou 4× RTX 4090) permite rodar modelos maiores e mais capazes com menor latência. Air-gap significa que o cluster de inferência não tem acesso de saída à internet — os prompts não podem vazar, mesmo que uma vulnerabilidade seja descoberta. Custo: ~R$ 40.000–120.000 de hardware no varejo brasileiro, 1–2 semanas de configuração pela sua equipe de infraestrutura. Conformidade: satisfação total do Artigo 32 do GDPR (segurança), trilha de auditoria do Artigo 30 com logs de acesso completos.',
          },
          {
            title: 'Organização com acordo jurídico existente (caso especial)',
            text: 'Se você já tem um Adendo de Processamento de Dados (DPA) com o Claude ou a OpenAI, use-os. O custo de migrar para local costuma ser menor que o de renegociar seu DPA e, se o acordo existente for recente (2024–2026) e incluir SCC + TIA, o risco é gerenciável. Revise com sua equipe jurídica antes de decidir.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'A DeepSeek está em conformidade com o GDPR se eu a usar com uma SCC?',
            a: 'Não. As SCCs por si só não satisfazem as transferências do Artigo 44 do GDPR para a China continental porque: (1) não existe decisão de adequação UE-China após Schrems II; (2) a lei chinesa (PIPL) obriga as empresas a compartilhar dados com as autoridades estatais mediante solicitação, o que as SCCs não podem anular; (3) Anthropic, OpenAI e outros grandes fornecedores não oferecem execução de SCCs na China — eles se recusam a operar lá. Para quaisquer dados pessoais de residentes na UE — ou sob a LGPD brasileira (Lei nº 13.709/2018) — não use a API da DeepSeek. Se você precisa da DeepSeek, use os pesos locais (execute `ollama run deepseek-coder:latest` no seu hardware).',
          },
          {
            q: 'Usar o Claude EU com SCC satisfaz o GDPR?',
            a: 'Em grande parte sim, com ressalvas. O Claude EU mantém seus dados na Irlanda ou na Alemanha durante o processamento e os exclui em 30 dias. A Anthropic publicou um DPA e SCCs em conformidade com o GDPR. Porém, os modelos Claude foram treinados com dados nos EUA, e a Anthropic é uma empresa americana, então tecnicamente ainda existe uma "transferência" na forma de treinamento do modelo e relação com o fornecedor. Para conformidade prática, o Claude EU + SCC é aceitável para a maioria das organizações. Para a postura mais sólida (sem nenhum risco de transferência), use Qwen ou Llama local.',
          },
          {
            q: 'Posso usar o Llama 4 Scout como substituto direto do Claude?',
            a: 'Para conformidade com GDPR: sim. O Llama 4 Scout é de código aberto e pode rodar localmente, então satisfaz plenamente os Artigos 44, 25 e 32. Para capacidade e desempenho: talvez. O Llama 4 Scout é menor (8 GB de VRAM) que o Claude (proprietário e muito grande), então é mais rápido e barato de rodar localmente, mas pode ser menos capaz em alguns benchmarks. Teste na sua carga de trabalho primeiro. Para Q&A simples, resumo e tarefas de código, o Llama 4 Scout é competitivo. Para raciocínio muito complexo, o Claude ainda é melhor, mas o Qwen 3 14B local ou o Llama 3.2 70B dão conta da maioria das tarefas empresariais.',
          },
          {
            q: 'O que acontece se eu registrar meus prompts localmente para fins de auditoria?',
            a: 'O registro é incentivado para a conformidade com o Artigo 30. Registre o seguinte: nome do modelo, carimbo de data/hora da sessão, contagem de tokens de entrada, contagem de tokens de saída e um hash SHA-256 do prompt e da resposta. NÃO registre o texto bruto de prompts que contenham dados pessoais. O registro baseado em hash satisfaz o Artigo 30 (registros de processamento) e o Artigo 32 (segurança) sem violar o Artigo 5(1)(e) (limitação de armazenamento). Armazene os logs em um sistema criptografado com controle de acesso (por exemplo, servidor de agregação de logs com acesso baseado em papéis). Retenha os logs por 3 anos, conforme o padrão de DPA.',
          },
          {
            q: 'Rodar um LLM on-premise é mais caro que usar APIs em nuvem?',
            a: 'No investimento inicial: sim. O hardware (RTX 4070 Ti) custa ~R$ 4.500–6.500 no varejo brasileiro. Mensalmente: não. A eletricidade on-premise é de ~R$ 50–90/mês. As APIs em nuvem custam US$ 0,001–0,01 por 1K tokens (cobradas em dólar), o que para uso intenso (>1M tokens/mês) ultrapassa US$ 100. O ponto de equilíbrio costuma ser de 6–12 meses para uso médio a alto. Se você roda <100K tokens/mês, as APIs em nuvem são mais baratas. Se roda >1M tokens/mês, o on-premise é mais barato. A conformidade com GDPR/LGPD é um argumento de negócio adicional: o on-premise elimina o custo jurídico de SCC/TIA.',
          },
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'O risco de GDPR para LLMs é determinado pela residência de dados, pela jurisdição dos dados de treinamento, pelas políticas de retenção dos ToS e pelas exigências de SCC/TIA.',
        plainTerms: 'Sua escolha de LLM importa para o GDPR/LGPD por causa de onde seus dados ficam, qual país é dono do modelo, por quanto tempo o fornecedor guarda seus dados e se você precisa de contratos jurídicos para mover dados entre fronteiras.',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Comparação de riscos GDPR: Qwen vs DeepSeek vs Llama vs Claude 2026',
      description: 'Comparação de LLMs em conformidade com GDPR/LGPD: matriz de risco para DeepSeek, Qwen, Llama e Claude.',
      url: 'https://www.promptquorum.com/pt/local-llms/gdpr-llm-risk-comparison-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-22',
      dateModified: '2026-05-22',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  // VERIFY: preços de hardware on-premise em BRL (RTX 4070 Ti ~R$ 4.500-6.500; multi-GPU ~R$ 40.000-120.000) e eletricidade (~R$ 50-90/mês, ~R$ 600/ano) são estimativas de varejo BR (jun/2026); custos de API/tokens da nuvem mantidos em USD (cobrados em dólar). Referências jurídicas latino-americanas do bloco es foram trocadas pela LGPD/ANPD do Brasil. Confirmar antes de publicar.
  ko: {
    theme: '개인정보 보호 및 보안',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'GDPR 리스크 비교: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'GDPR 리스크 매트릭스: Qwen·DeepSeek·Llama·Claude 비교',
    metaDescription: 'GDPR 준수 LLM 비교: DeepSeek API(최고 위험), Qwen 로컬(최저), Llama 로컬, Claude/GPT API(중간 위험). 데이터 거주지, 관할권, ToS, SCC 요건별 리스크 매트릭스. 2026년 5월 업데이트.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8분 읽기',
    educationalLevel: 'Advanced',
    audience: '독점적 LLM과 오픈 웨이트 LLM 중에서 선택하는 CISO, 조달팀, 컴플라이언스 담당자',
    primaryTerm: 'GDPR 리스크 비교 LLM 모델',
    leadAnswerBlock: '**DeepSeek API는 중국 데이터 접근법(PIPL)으로 인해 주요 LLM 중 GDPR 리스크가 가장 높습니다. Qwen과 Llama를 로컬로 실행하면 동등하게 낮은 위험을 가집니다. EU 데이터 거주지를 갖춘 Claude 및 GPT-5.5 API는 중간 위험을 가지며 표준 계약 조항(SCC)이 필요합니다.**',
    current_models_mentioned: ['DeepSeek', 'DeepSeek API', 'Qwen 3 14B', 'Qwen local', 'Llama 4 Scout', 'Claude Sonnet 4.6', 'GPT-5.5 Instant', 'Claude Opus 4.8'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', 'multi-GPU'],
    quickAnswerTop: {
      ko: {
        question: 'GDPR 하에서 가장 안전한 LLM은 무엇입니까?',
        answer: 'Qwen 3 14B 또는 Llama 4 Scout을 자체 하드웨어에서 로컬로 실행하는 것이 가장 안전합니다. 데이터가 관할권을 벗어나지 않으며, 제44조 이전도 없고, SCC나 TIA도 필요하지 않습니다. DeepSeek API는 서버가 중국 데이터법(PIPL)을 따르기 때문에 위험도가 가장 높습니다. Claude 및 GPT-5.5 API는 중간 수준의 규정 준수를 위해 EU 데이터 거주지 + SCC가 필요합니다.',
        bullets: [
          'Qwen 로컬: 최저 위험. 이전 없음, Apache 2.0 가중치, 12–24 GB VRAM, 30분 이내 설정.',
          'DeepSeek API: 최고 위험. PIPL 관할권, EU 적정성 결정 없음, ToS는 국가 명령에 의한 데이터 공유를 허용.',
          'Claude/GPT EU+SCC: 중간 위험. 거주지 계약 + SCC가 도움이 되지만 이전은 여전히 수반됨.',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'LLM의 4가지 GDPR 리스크 벡터', anchor: 'risk-vectors' },
      { label: '리스크 매트릭스: 모델별 비교', anchor: 'risk-matrix' },
      { label: '모델별 판정 및 권장 용도', anchor: 'model-verdicts' },
      { label: '조직 유형별 권장 스택', anchor: 'org-stacks' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API는 최고 위험: 서버가 중국 데이터 접근법(PIPL)의 적용을 받으며, 중국에 대한 EU 적정성 결정이 없고, ToS는 중국 당국과의 데이터 공유를 명시적으로 허용합니다',
          'Qwen 3 14B 및 Llama 4 Scout을 로컬로 실행하면 최저 위험: 제44조 이전 없음, SCC 불필요, 데이터가 자체 하드웨어에 보관됩니다',
          'Claude API 및 GPT-5.5 Instant는 중간 위험: 미국 관할권은 표준 계약 조항 + 이전 영향 평가를 필요로 하며, EU 데이터 거주지 옵션(Claude EU)이 위험을 줄여줍니다',
          '권장 스택: 스타트업(Claude + SCC), 데이터 민감 조직(Qwen 24 GB 로컬), 기업(멀티 GPU Qwen + 에어갭)',
          '리스크 결정 매트릭스는 데이터 거주지, 학습 데이터 관할권, ToS 데이터 보존, SCC 요건, 법적 판정의 5가지 벡터를 다룹니다',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'LLM의 4가지 GDPR 리스크 벡터',
        content: [
          '모든 LLM 배포가 동일한 GDPR 리스크를 가지는 것은 아닙니다. LLM 사용의 법적·운영적 위험은 네 가지 독립적인 요소에 의해 결정됩니다.',
        ],
        subsections: [
          {
            title: '데이터 거주지',
            text: '모델 서버가 물리적으로 위치한 곳입니다. 서버가 EU 내에 있고, 모델 제공업체가 계약상으로 데이터를 EU 내에 보관하기로 약정하면 데이터 거주지 위험은 낮습니다. SCC 없이 EU 외부에 서버가 있으면 데이터 거주지 위험은 높습니다.',
          },
          {
            title: '학습 데이터 관할권',
            text: '학습 데이터와 제공업체의 보존 권리를 규율하는 국가의 법률입니다. 미국 데이터법(CFAA, SCA)은 법 집행 기관의 접근을 허용합니다. 중국 데이터법(PIPL)은 훨씬 광범위한 국가 접근 권한을 의무화합니다. EU 데이터는 GDPR 및 ePrivacy 지침에 따라 보호됩니다.',
          },
          {
            title: 'ToS 데이터 보존',
            text: '추론이 완료된 후 데이터를 보관하는 것에 대해 이용약관은 무엇을 말하고 있습니까? OpenAI와 DeepSeek는 여러 포럼에서 모델 개선 또는 법적으로 의무화된 공개를 위해 사용자 프롬프트를 보존할 수 있다고 밝혔습니다. Qwen과 Llama를 로컬로 실행하면 ToS가 없으며 보존은 사용자가 통제합니다.',
          },
          {
            title: 'SCC / TIA 요건',
            text: 'Schrems II 이후, EU 외부로의 EU 개인정보 이전에는 대상 관할권이 적절한 보호를 제공함을 확인하기 위해 표준 계약 조항(SCC) 및 이전 영향 평가(TIA)가 필요합니다. 클라우드 API는 이를 필요로 하지만 로컬 모델은 그렇지 않습니다.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: '리스크 매트릭스: 모델별 비교',
        content: [
          '아래 표는 각 배포 옵션의 GDPR 리스크 프로필을 요약합니다. 점수가 높을수록 법적·운영적 위험이 높습니다.',
        ],
        columns: ['배포 환경', '데이터 거주지', '학습 데이터 관할권', 'ToS 보존 위험', 'SCC / TIA 필요 여부', '전체 위험 수준'],
        rows: [
          { '배포 환경': 'DeepSeek API', '데이터 거주지': '중국(Alibaba Cloud)', '학습 데이터 관할권': '중국(PIPL)', 'ToS 보존 위험': '당국 공유 권한 명시적 유보', 'SCC / TIA 필요 여부': '필요하나 효과 없음(EU-중국 적정성 결정 없음)', '전체 위험 수준': '🔴 최고' },
          { '배포 환경': 'Claude API (미국)', '데이터 거주지': '미국(버지니아)', '학습 데이터 관할권': '미국', 'ToS 보존 위험': 'Anthropic은 요청 시 삭제 약정; 기본 30일 보존', 'SCC / TIA 필요 여부': 'SCC + TIA 필요', '전체 위험 수준': '🟠 중상' },
          { '배포 환경': 'GPT-5.5 (미국)', '데이터 거주지': '미국(다수 지역)', '학습 데이터 관할권': '미국', 'ToS 보존 위험': 'OpenAI는 모델 개선 목적 보존 가능; 정책 불투명', 'SCC / TIA 필요 여부': 'SCC + TIA 필요', '전체 위험 수준': '🟠 중상' },
          { '배포 환경': 'Claude (EU 데이터 거주지)', '데이터 거주지': 'EU(아일랜드 또는 독일)', '학습 데이터 관할권': '미국(Anthropic), 데이터는 EU에 보관', 'ToS 보존 위험': 'Anthropic은 EU 전용 거주지 + GDPR 준수 약정', 'SCC / TIA 필요 여부': 'EU 처리로 SCC 충분', '전체 위험 수준': '🟡 중간' },
          { '배포 환경': 'Llama 4 Scout (로컬)', '데이터 거주지': '자체 하드웨어(LAN)', '학습 데이터 관할권': '오픈소스, 상업적 보존 없음', 'ToS 보존 위험': '로컬 로그를 통해 사용자가 보존 통제', 'SCC / TIA 필요 여부': '없음', '전체 위험 수준': '🟢 최저' },
          { '배포 환경': 'Qwen 3 14B (로컬)', '데이터 거주지': '자체 하드웨어(LAN)', '학습 데이터 관할권': '오픈소스(Apache 2.0), 상업적 보존 없음', 'ToS 보존 위험': '로컬 로그를 통해 사용자가 보존 통제', 'SCC / TIA 필요 여부': '없음', '전체 위험 수준': '🟢 최저' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: '모델별 판정 및 권장 용도',
        content: [
          '이 섹션을 통해 GDPR 컴플라이언스 상황에 맞는 각 배포 방식을 파악하십시오.',
        ],
        subsections: [
          {
            title: 'DeepSeek API — GDPR 워크플로에서 사용 금지',
            text: 'DeepSeek API는 주요 LLM 중 가장 높은 위험을 가집니다. (1) 서버가 중국 본토에 있어 PIPL 데이터 접근 의무의 적용을 받으며, (2) EU-중국 간 적정성 결정이 없어 Schrems II로 인해 SCC가 불충분하고, (3) ToS는 중국 당국과의 데이터 공유 권한을 명시적으로 유보합니다. 프롬프트에 EU 거주자의 개인정보가 포함된 경우, 각 정보 주체의 명시적 동의와 이전에 대한 문서화된 법적 근거가 없으면 DeepSeek API는 GDPR 제44조를 위반합니다. 민감하지 않은 작업(경쟁 분석, 브레인스토밍)의 경우 위험이 낮지만, 사용 전 계약 검토가 필수입니다.',
          },
          {
            title: 'Claude API (미국) — 중간 위험, SCC + TIA로 관리 가능',
            text: 'Claude API는 표준 계약 조항 및 이전 영향 평가가 필요하지만 GPT-5.5보다 더 준수됩니다. (1) Anthropic은 요청 시 삭제에 대한 명확한 약정을 가지고 있으며, (2) Anthropic은 GDPR 제28조 및 제32조를 명시적으로 참조하는 데이터 처리 부속서(DPA)를 공개했고, (3) 미국법은 법 집행 기관의 접근을 허용하지만 상업적 데이터 보존을 의무화하지는 않습니다. 민감하지 않은 개인정보(직함, 일반 비즈니스 컨텍스트)의 경우 SCC + TIA를 갖춘 Claude API가 허용됩니다. 고감도 데이터(건강, 금융, 생체정보)는 로컬 배포가 필요합니다.',
          },
          {
            title: 'Claude (EU 데이터 거주지) — 중간 위험, EU 처리로 위험 감소',
            text: 'Anthropic은 프롬프트가 아일랜드 또는 독일에서 처리되는 EU 데이터 거주지 옵션을 제공합니다. (1) 처리 중 데이터가 EU 내에 보관되고, (2) 30일 후 삭제되며, (3) Anthropic이 GDPR 준수를 약정합니다. 그러나 Claude 모델의 학습 데이터는 여전히 미국에서 학습되었고 Anthropic은 미국 기업이므로, 완전한 제44조 준수를 위해서는 여전히 SCC가 필요합니다. 미국 Claude보다 GDPR 측면에서 낫지만 로컬 배포와 동등하지는 않습니다.',
          },
          {
            title: 'GPT-5.5 / GPT-5.5 Instant — 중상 위험',
            text: 'OpenAI API는 Claude보다 높은 위험을 가집니다. (1) OpenAI의 데이터 보존 정책이 불투명하며 "연구 및 안전 개선"을 위해 사용자 데이터를 보존할 수 있다고 밝혔고, (2) 공개된 DPA가 없으며, (3) EU 데이터 거주지 옵션이 없습니다. OpenAI를 선택하는 경우, 명시적인 SCC + 포괄적인 TIA가 필요하며 고감도 데이터(건강, 금융, 생체정보, 유전자 정보)는 전송하지 마십시오. 저감도 작업의 경우 SCC를 갖추면 허용됩니다.',
          },
          {
            title: 'Llama 4 Scout (로컬) — 최저 위험, 이전 없음',
            text: 'Llama 가중치는 상업적 사용이 가능한 라이선스 하에 오픈소스입니다. 자체 하드웨어에서 Llama를 로컬로 실행하면 (1) 제44조 이전이 전혀 없고, (2) 모든 데이터 보존을 사용자가 통제하며, (3) SCC나 TIA가 필요 없고, (4) 제25조(프라이버시 바이 디자인)를 완전히 준수합니다. 모든 데이터 민감도 수준에 적합합니다. 8 GB VRAM의 Llama 4 Scout 또는 48 GB의 Llama 3.2 70B로 대부분의 기업 사용 사례를 처리할 수 있습니다.',
          },
          {
            title: 'Qwen 3 / 3 (로컬) — 최저 위험, 이전 없음',
            text: 'Qwen 가중치는 Apache 2.0 하에 오픈소스입니다. Llama와 마찬가지로 Qwen을 로컬로 실행하면 (1) 제44조 이전이 전혀 없고, (2) 보존을 사용자가 통제하며, (3) 법적 근거가 필요 없습니다(이전이 없으면 이전 위험도 없음). Qwen 3 14B는 우수한 다국어 성능과 작은 VRAM 사용량(Llama 3.2 70B의 48 GB 대비 12–16 GB)으로 인해 유럽에서 가장 널리 배포됩니다. 모든 민감도 수준에 적합합니다.',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: '조직 유형별 권장 스택',
        content: [
          '올바른 LLM 스택은 조직의 데이터 민감도, 예산, 규제 태세에 따라 달라집니다. 이 권장 사항을 조달 결정의 출발점으로 활용하십시오.',
        ],
        subsections: [
          {
            title: '초기 스타트업(낮은 규제 압력)',
            text: 'SCC를 갖춘 Claude API를 사용하십시오. 근거: Claude는 품질이 높고 프로덕션 준비가 되어 있으며, 관리 오버헤드가 낮고, SCC는 미국 기반 AI 벤더에게 표준입니다. 실험적 사용 비용은 월 약 $3–5입니다. 위험이 허용 가능한 이유: 스타트업 데이터는 일반적으로 저감도(익명 사용 패턴, 일반 비즈니스 로직)입니다. 헬스케어나 핀테크로 성장하면 로컬 Qwen으로 마이그레이션하십시오.',
          },
          {
            title: '직원/고객 데이터를 보유한 중소기업(중간 규제 압력)',
            text: 'Qwen 3 14B 또는 Llama 3.2 32B를 로컬로 사용하십시오. 근거: 개인정보(직원 명단, 고객 연락처, 거래 내역)를 처리하므로 제로 이전 아키텍처가 필요합니다. 단일 온프레미스 GPU(RTX 4070 Ti, Q4 양자화 시 Qwen 3용 12 GB VRAM)에 배포하십시오. 비용은 하드웨어 약 $500 일시불 + 연간 전기 약 $100입니다. 설정 시간: 1시간 미만(Ollama는 간단합니다). 컴플라이언스 부담: 없음(SCC, TIA, DPA 협상 불필요).',
          },
          {
            title: '기업(높은 규제 압력: 헬스케어, 핀테크, 법률)',
            text: '에어갭 배포로 멀티 GPU Qwen 3 33B를 사용하십시오. 근거: 고감도 데이터는 가능한 가장 강력한 아키텍처가 필요합니다. 멀티 GPU(2× RTX 3090 또는 4× RTX 4090)를 사용하면 더 크고 유능한 모델을 낮은 지연으로 실행할 수 있습니다. 에어갭은 추론 클러스터가 외부 인터넷에 접근할 수 없음을 의미하며, 취약점이 발견되더라도 프롬프트가 유출될 수 없습니다. 비용은 하드웨어 약 $5–15K이며, 인프라 팀이 1–2주 내에 설정합니다. 컴플라이언스: GDPR 제32조(보안) 완전 충족, 전체 접근 로그를 갖춘 제30조 감사 추적.',
          },
          {
            title: '기존 법적 계약을 보유한 조직(특수 사례)',
            text: 'Claude 또는 OpenAI와 이미 데이터 처리 부속서(DPA)를 체결한 경우, 해당 서비스를 사용하십시오. 로컬로 마이그레이션하는 전환 비용이 DPA 재협상보다 낮은 경우가 많으며, 기존 계약이 최근(2024–2026) 체결되었고 SCC + TIA를 포함한다면 위험은 관리 가능합니다. 결정 전 법무팀과 검토하십시오.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'SCC를 사용하면 DeepSeek가 GDPR을 준수합니까?',
            a: '아닙니다. SCC만으로는 중국 본토로의 GDPR 제44조 이전을 충족하지 못합니다. (1) Schrems II 이후 EU-중국 간 적정성 결정이 없고, (2) 중국법(PIPL)은 기업이 요청 시 국가 당국과 데이터를 공유하도록 의무화하며 SCC로 이를 재정의할 수 없고, (3) Anthropic, OpenAI 및 기타 주요 벤더들은 중국에서 SCC 집행을 제공하지 않으며 운영 자체를 거부합니다. EU 거주자의 개인정보에 대해서는 DeepSeek API를 사용하지 마십시오. DeepSeek가 필요하다면 로컬 가중치를 사용하십시오(`ollama run deepseek-coder:latest`를 자체 하드웨어에서 실행).',
          },
          {
            q: 'SCC를 갖춘 Claude EU가 GDPR을 충족합니까?',
            a: '대부분 그렇습니다만, 몇 가지 주의사항이 있습니다. Claude EU는 처리 중 데이터를 아일랜드 또는 독일에 보관하고 30일 이내에 삭제합니다. Anthropic은 GDPR 준수 DPA와 SCC를 공개했습니다. 그러나 Claude 모델은 미국 기반 데이터로 학습되었고 Anthropic은 미국 기업이므로, 기술적으로는 모델 학습 및 벤더 관계 형태의 "이전"이 여전히 존재합니다. 실질적인 컴플라이언스 측면에서 Claude EU + SCC는 대부분의 조직에게 허용됩니다. 이전 위험이 전혀 없는 가장 강력한 태세를 원한다면 로컬 Qwen 또는 Llama를 사용하십시오.',
          },
          {
            q: 'Llama 4 Scout를 Claude의 대체재로 사용할 수 있습니까?',
            a: 'GDPR 컴플라이언스 측면에서: 그렇습니다. Llama 4 Scout는 오픈소스이며 로컬로 실행할 수 있으므로 제44조, 제25조, 제32조를 완전히 충족합니다. 기능 및 성능 측면에서: 경우에 따라 다릅니다. Llama 4 Scout는 Claude보다 소형(8 GB VRAM)이므로 로컬 실행이 빠르고 저렴하지만, 일부 벤치마크에서는 성능이 낮을 수 있습니다. 먼저 워크로드에서 테스트하십시오. 단순한 Q&A, 요약, 코드 작업의 경우 Llama 4 Scout는 경쟁력이 있습니다. 매우 복잡한 추론의 경우 Claude가 여전히 우수하지만, 로컬 Qwen 3 14B 또는 Llama 3.2 70B는 대부분의 기업 작업을 처리할 수 있습니다.',
          },
          {
            q: '감사 목적으로 프롬프트를 로컬에 로깅하면 어떻게 됩니까?',
            a: '로깅은 제30조 컴플라이언스를 위해 권장됩니다. 다음을 로깅하십시오: 모델 이름, 세션 타임스탬프, 입력 토큰 수, 출력 토큰 수, 프롬프트 및 응답의 SHA-256 해시. 개인정보가 포함된 프롬프트의 원문 텍스트는 로깅하지 마십시오. 해시 기반 로깅은 제5조 제1항 제e호(저장 제한)를 위반하지 않고도 제30조(처리 기록) 및 제32조(보안)를 충족합니다. 암호화된 접근 통제 시스템(예: 역할 기반 접근을 갖춘 로그 집계 서버)에 로그를 저장하십시오. DPA 표준에 따라 로그를 3년간 보존하십시오.',
          },
          {
            q: '온프레미스 LLM 실행이 클라우드 API보다 비용이 많이 듭니까?',
            a: '초기 비용: 그렇습니다. 하드웨어(RTX 4070 Ti) 비용은 약 $500–1000입니다. 월별 비용: 아닙니다. 온프레미스 전기 비용은 월 약 $5–10입니다. 클라우드 API는 1K 토큰당 $0.001–0.01이며, 대량 사용(월 >1M 토큰)의 경우 $100를 초과합니다. 손익분기점은 일반적으로 중간-대량 사용의 경우 6–12개월입니다. 월 <100K 토큰을 실행하는 경우 클라우드 API가 더 저렴합니다. 월 >1M 토큰을 실행하는 경우 온프레미스가 더 저렴합니다. GDPR 컴플라이언스는 추가적인 비즈니스 케이스입니다: 온프레미스는 SCC/TIA 법적 비용이 없습니다.',
          },
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'LLM에 대한 GDPR 리스크는 데이터 거주지, 학습 데이터 관할권, ToS 보존 정책, SCC/TIA 요건에 의해 결정됩니다.',
        plainTerms: 'LLM 선택은 데이터가 어디에 있는지, 어느 나라가 모델을 소유하는지, 벤더가 데이터를 얼마나 오래 보관하는지, 국경을 초과하여 데이터를 이동하기 위해 법적 계약이 필요한지에 따라 GDPR에 영향을 미칩니다.',
      },
    ],
  },
}
