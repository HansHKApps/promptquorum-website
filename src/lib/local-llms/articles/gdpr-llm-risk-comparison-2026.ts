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
      url: 'https://www.promptquorum.com/es/es/local-llms/gdpr-llm-risk-comparison-2026',
      inLanguage: 'es',
      datePublished: '2026-05-22',
      dateModified: '2026-05-22',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
  ar: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'مقارنة مخاطر GDPR: Qwen مقابل DeepSeek مقابل Llama مقابل Claude 2026',
    seoTitle: 'مصفوفة مخاطر GDPR: Qwen و DeepSeek و Llama و Claude',
    metaDescription: 'مقارنة نماذج LLM متوافقة مع GDPR: DeepSeek API (أعلى مخاطر)، Qwen محلي (أقل مخاطر)، Llama محلي و Claude/GPT API (مخاطر متوسطة). مصفوفة حسب البيانات.',
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
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
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
      url: 'https://www.promptquorum.com/pt/pt/local-llms/gdpr-llm-risk-comparison-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-22',
      dateModified: '2026-05-22',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
  // VERIFY: preços de hardware on-premise em BRL (RTX 4070 Ti ~R$ 4.500-6.500; multi-GPU ~R$ 40.000-120.000) e eletricidade (~R$ 50-90/mês, ~R$ 600/ano) são estimativas de varejo BR (jun/2026); custos de API/tokens da nuvem mantidos em USD (cobrados em dólar). Referências jurídicas latino-americanas do bloco es foram trocadas pela LGPD/ANPD do Brasil. Confirmar antes de publicar.
}
