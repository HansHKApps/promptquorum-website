'use client'

import { useMemo, useState } from 'react'
import { useLang } from '@/hooks/useLang'

type Language = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'
type RiskKey = 'ownership' | 'infringement' | 'tradeSecret'
type Tier = 'Low' | 'Medium' | 'High'

interface ContentTypeSpec { value: string; label: Record<Language, string>; points: Record<RiskKey, number> }
interface DeploymentSpec { value: string; label: Record<Language, string>; modifier: Record<RiskKey, number> }

const CONTENT_TYPES: ContentTypeSpec[] = [
  { value: 'marketing', points: { ownership: 3, infringement: 2, tradeSecret: 1 }, label: { en: 'Marketing copy', de: 'Marketingtexte', fr: 'Contenu marketing', ja: 'マーケティングコピー', zh: '营销文案', es: 'Textos de marketing', pt: 'Textos de marketing', ar: 'محتوى تسويقي', ko: '마케팅 카피' } },
  { value: 'sourceCode', points: { ownership: 1, infringement: 3, tradeSecret: 3 }, label: { en: 'Source code', de: 'Quellcode', fr: 'Code source', ja: 'ソースコード', zh: '源代码', es: 'Código fuente', pt: 'Código-fonte', ar: 'شيفرة المصدر', ko: '소스 코드' } },
  { value: 'productDesign', points: { ownership: 2, infringement: 2, tradeSecret: 2 }, label: { en: 'Product design', de: 'Produktdesign', fr: 'Design produit', ja: '製品デザイン', zh: '产品设计', es: 'Diseño de producto', pt: 'Design de produto', ar: 'تصميم المنتج', ko: '제품 디자인' } },
  { value: 'customerComms', points: { ownership: 2, infringement: 1, tradeSecret: 2 }, label: { en: 'Customer communications', de: 'Kundenkommunikation', fr: 'Communications clients', ja: '顧客コミュニケーション', zh: '客户沟通内容', es: 'Comunicaciones con clientes', pt: 'Comunicações com clientes', ar: 'مراسلات العملاء', ko: '고객 커뮤니케이션' } },
  { value: 'trainingMaterial', points: { ownership: 1, infringement: 2, tradeSecret: 3 }, label: { en: 'Internal training material', de: 'Internes Schulungsmaterial', fr: 'Supports de formation internes', ja: '社内研修資料', zh: '内部培训资料', es: 'Material de formación interno', pt: 'Material de treinamento interno', ar: 'مواد تدريب داخلية', ko: '내부 교육 자료' } },
]

const DEPLOYMENT_MODES: DeploymentSpec[] = [
  { value: 'public', modifier: { ownership: 1, infringement: 1, tradeSecret: 3 }, label: { en: 'Public consumer API', de: 'Öffentliche Consumer-API', fr: 'API grand public', ja: '一般消費者向けAPI', zh: '公共消费级 API', es: 'API pública de consumo', pt: 'API pública de consumo', ar: 'واجهة API استهلاكية عامة', ko: '공개 소비자용 API' } },
  { value: 'enterpriseApi', modifier: { ownership: 0, infringement: 0, tradeSecret: 1 }, label: { en: 'Enterprise-tier API with data controls', de: 'Enterprise-API mit Datenkontrollen', fr: 'API entreprise avec contrôles de données', ja: 'データ制御付きエンタープライズAPI', zh: '带数据控制的企业级 API', es: 'API empresarial con controles de datos', pt: 'API empresarial com controles de dados', ar: 'واجهة API مؤسسية بضوابط بيانات', ko: '데이터 제어 기능이 있는 엔터프라이즈 API' } },
  { value: 'selfHosted', modifier: { ownership: -1, infringement: 0, tradeSecret: -2 }, label: { en: 'Self-hosted', de: 'Selbst gehostet', fr: 'Auto-hébergé', ja: '自社ホスティング', zh: '自托管', es: 'Autoalojado', pt: 'Autoalojado', ar: 'مستضاف ذاتيًا', ko: '자체 호스팅' } },
]

const RISK_MAX: Record<RiskKey, number> = {
  ownership: Math.max(...CONTENT_TYPES.map(c => c.points.ownership)) + Math.max(...DEPLOYMENT_MODES.map(d => d.modifier.ownership)),
  infringement: Math.max(...CONTENT_TYPES.map(c => c.points.infringement)) + Math.max(...DEPLOYMENT_MODES.map(d => d.modifier.infringement)),
  tradeSecret: Math.max(...CONTENT_TYPES.map(c => c.points.tradeSecret)) + Math.max(...DEPLOYMENT_MODES.map(d => d.modifier.tradeSecret)),
}

function tierForScore(score: number, max: number): Tier {
  const pct = score / max
  if (pct < 0.34) return 'Low'
  if (pct < 0.67) return 'Medium'
  return 'High'
}

const T: Record<Language, {
  title: string
  intro: string
  contentTypeLabel: string
  deploymentLabel: string
  resultTitle: string
  resultIntro: string
  restart: string
  riskNames: Record<RiskKey, string>
  tierNames: Record<Tier, string>
  recommendations: Record<RiskKey, Record<Tier, string>>
  disclaimer: string
}> = {
  en: {
    title: 'IP Risk Triage Matrix',
    intro: 'Pick a content type and a deployment mode to get a separate risk rating for ownership, infringement, and trade-secret exposure — plus a matched control for each. Nothing is sent anywhere; this runs entirely in your browser.',
    contentTypeLabel: 'What kind of content is this?',
    deploymentLabel: 'How is it generated?',
    resultTitle: 'Your risk ratings',
    resultIntro: 'These three ratings are deliberately separate — a single blended score would hide which specific risk you actually need to manage.',
    restart: 'Start over',
    riskNames: { ownership: 'Risk A — Can we own it?', infringement: 'Risk B — Does it infringe?', tradeSecret: 'Risk C — Did we leak a trade secret?' },
    tierNames: { Low: 'Low', Medium: 'Medium', High: 'High' },
    recommendations: {
      ownership: {
        Low: 'Document the human creative input behind this content (prompt design, selection, editing) as routine practice — it strengthens any future ownership claim even at low exposure.',
        Medium: 'Have a named person substantially edit or restructure the AI draft before publication, and keep a record of that human contribution — an ownership claim depends on evidence of it.',
        High: 'Treat this content as likely unprotectable by copyright in its raw AI-generated form. Budget for meaningful human authorship — structure, selection, substantial edits — before relying on it as a defensible ownership asset.',
      },
      infringement: {
        Low: 'Standard prompting hygiene (avoid asking the model to reproduce a named, identifiable existing work) is a proportionate control at this exposure level.',
        Medium: 'Review your vendor\'s indemnification terms for this use case and avoid prompts that request close imitation of a named creator\'s style or a specific existing work.',
        High: 'Treat commercial publication of this content as carrying real, hard-to-eliminate infringement exposure. Confirm whether your vendor tier offers indemnification and what it excludes, and have legal review high-visibility output before it ships.',
      },
      tradeSecret: {
        Low: 'Confirm the deployment\'s data-retention setting explicitly, even at low exposure — vendor defaults change without much notice.',
        Medium: 'Restrict which content types can go through this deployment mode, and get contractual confirmation that prompts are not used to train the vendor\'s models.',
        High: 'This is the strongest case in this content set for moving to a sanctioned self-hosted or fully enterprise-controlled deployment — it eliminates the underlying mechanism (proprietary content leaving to a third-party model) instead of just mitigating it.',
      },
    },
    disclaimer: 'This is an illustrative triage tool, not legal advice — confirm specific determinations with counsel.',
  },
  de: {
    title: 'IP-Risiko-Triage-Matrix',
    intro: 'Wählen Sie einen Inhaltstyp und einen Bereitstellungsmodus, um für Eigentum, Rechtsverletzung und Geschäftsgeheimnis-Exposition jeweils eine getrennte Risikobewertung samt passender Kontrolle zu erhalten. Es werden keine Daten übertragen — die Auswertung läuft vollständig in Ihrem Browser.',
    contentTypeLabel: 'Um welche Art von Inhalt handelt es sich?',
    deploymentLabel: 'Wie wird er erzeugt?',
    resultTitle: 'Ihre Risikobewertungen',
    resultIntro: 'Diese drei Bewertungen sind bewusst getrennt — ein einzelner Gesamtwert würde verbergen, welches konkrete Risiko Sie tatsächlich steuern müssen.',
    restart: 'Neu starten',
    riskNames: { ownership: 'Risiko A — Können wir es besitzen?', infringement: 'Risiko B — Verletzt es fremde Rechte?', tradeSecret: 'Risiko C — Haben wir ein Geschäftsgeheimnis preisgegeben?' },
    tierNames: { Low: 'Niedrig', Medium: 'Mittel', High: 'Hoch' },
    recommendations: {
      ownership: {
        Low: 'Dokumentieren Sie den menschlichen kreativen Beitrag zu diesem Inhalt (Prompt-Gestaltung, Auswahl, Überarbeitung) routinemäßig — das stärkt einen späteren Eigentumsanspruch auch bei geringer Exposition.',
        Medium: 'Lassen Sie eine benannte Person den KI-Entwurf vor Veröffentlichung inhaltlich überarbeiten oder umstrukturieren und dokumentieren Sie diesen menschlichen Beitrag — ein Eigentumsanspruch hängt vom Nachweis dieses Beitrags ab.',
        High: 'Behandeln Sie diesen Inhalt in seiner rohen KI-generierten Form als voraussichtlich urheberrechtlich nicht schutzfähig. Planen Sie substanzielle menschliche Autorenschaft — Struktur, Auswahl, wesentliche Überarbeitung —, bevor Sie sich auf ihn als verteidigungsfähiges Eigentumsgut verlassen.',
      },
      infringement: {
        Low: 'Übliche Prompt-Hygiene (das Modell nicht bitten, ein benanntes, identifizierbares bestehendes Werk zu reproduzieren) ist bei diesem Expositionsgrad eine angemessene Kontrolle.',
        Medium: 'Prüfen Sie die Freistellungsklauseln (Indemnification) Ihres Anbieters für diesen Anwendungsfall und vermeiden Sie Prompts, die eine enge Nachahmung des Stils eines benannten Urhebers oder eines konkreten bestehenden Werks verlangen.',
        High: 'Behandeln Sie die kommerzielle Veröffentlichung dieses Inhalts als reale, schwer vollständig auszuschließende Verletzungsexposition. Klären Sie, ob Ihre Vertragsstufe eine Freistellung bietet und was diese ausschließt, und lassen Sie sichtbare Inhalte vor Veröffentlichung juristisch prüfen.',
      },
      tradeSecret: {
        Low: 'Bestätigen Sie die Datenspeicherungs-Einstellung der Bereitstellung ausdrücklich, auch bei geringer Exposition — Anbieter-Standardeinstellungen ändern sich mitunter ohne große Ankündigung.',
        Medium: 'Beschränken Sie, welche Inhaltstypen über diesen Bereitstellungsmodus laufen dürfen, und lassen Sie sich vertraglich bestätigen, dass Prompts nicht zum Training der Anbietermodelle verwendet werden.',
        High: 'Dies ist in diesem Themenfeld das stärkste Argument für den Wechsel zu einer freigegebenen selbst gehosteten oder vollständig unternehmenskontrollierten Bereitstellung — sie beseitigt den zugrunde liegenden Mechanismus (proprietärer Inhalt verlässt das Unternehmen an ein Drittanbieter-Modell), statt ihn nur abzumildern.',
      },
    },
    disclaimer: 'Dies ist ein illustratives Triage-Werkzeug, keine Rechtsberatung — bestätigen Sie konkrete Einschätzungen mit einer Rechtsberatung.',
  },
  fr: {
    title: 'Matrice de triage du risque de PI',
    intro: 'Choisissez un type de contenu et un mode de déploiement pour obtenir une évaluation de risque distincte pour la propriété, la contrefaçon et l\'exposition des secrets d\'affaires — avec un contrôle adapté pour chacune. Rien n\'est transmis ; le calcul s\'effectue entièrement dans votre navigateur.',
    contentTypeLabel: 'De quel type de contenu s\'agit-il ?',
    deploymentLabel: 'Comment est-il généré ?',
    resultTitle: 'Vos évaluations de risque',
    resultIntro: 'Ces trois évaluations sont volontairement distinctes — un score unique combiné masquerait le risque précis que vous devez réellement gérer.',
    restart: 'Recommencer',
    riskNames: { ownership: 'Risque A — Pouvons-nous en être propriétaires ?', infringement: 'Risque B — Enfreint-il des droits ?', tradeSecret: 'Risque C — Avons-nous divulgué un secret d\'affaires ?' },
    tierNames: { Low: 'Faible', Medium: 'Moyen', High: 'Élevé' },
    recommendations: {
      ownership: {
        Low: 'Documentez systématiquement l\'apport créatif humain derrière ce contenu (conception du prompt, sélection, édition) — cela renforce toute revendication de propriété future, même à faible exposition.',
        Medium: 'Faites réviser ou restructurer substantiellement le brouillon généré par IA par une personne nommée avant publication, et conservez une trace de cette contribution humaine — une revendication de propriété en dépend.',
        High: 'Considérez ce contenu comme probablement non protégeable par le droit d\'auteur sous sa forme brute générée par IA. Prévoyez une contribution humaine réelle — structure, sélection, modifications substantielles — avant de vous appuyer dessus comme un actif de propriété défendable.',
      },
      infringement: {
        Low: 'Une hygiène de prompt standard (éviter de demander au modèle de reproduire une œuvre existante nommée et identifiable) constitue un contrôle proportionné à ce niveau d\'exposition.',
        Medium: 'Vérifiez les clauses d\'indemnisation de votre fournisseur pour cet usage et évitez les prompts demandant une imitation étroite du style d\'un créateur nommé ou d\'une œuvre existante précise.',
        High: 'Considérez la publication commerciale de ce contenu comme comportant une exposition réelle à la contrefaçon, difficile à éliminer totalement. Vérifiez si votre formule fournisseur offre une indemnisation et ce qu\'elle exclut, et faites réviser juridiquement tout contenu à forte visibilité avant publication.',
      },
      tradeSecret: {
        Low: 'Confirmez explicitement le paramètre de rétention des données du déploiement, même à faible exposition — les réglages par défaut des fournisseurs changent parfois sans grand préavis.',
        Medium: 'Restreignez les types de contenu autorisés à passer par ce mode de déploiement, et obtenez une confirmation contractuelle que les prompts ne servent pas à entraîner les modèles du fournisseur.',
        High: 'C\'est, dans cet ensemble de contenus, l\'argument le plus solide pour basculer vers un déploiement auto-hébergé ou entièrement contrôlé par l\'entreprise et validé en interne — cela élimine le mécanisme sous-jacent (contenu propriétaire transmis à un modèle tiers) au lieu de simplement l\'atténuer.',
      },
    },
    disclaimer: 'Cet outil de triage est illustratif, pas un avis juridique — validez toute décision précise avec un conseil.',
  },
  ja: {
    title: 'IPリスク・トリアージ・マトリクス',
    intro: 'コンテンツの種類と生成方法を選ぶと、所有権・侵害・営業秘密の3つのリスクをそれぞれ個別に評価し、それぞれに対応する具体的な対策を表示します。データはどこにも送信されません — 判定はすべてブラウザ内で行われます。',
    contentTypeLabel: 'どのようなコンテンツですか？',
    deploymentLabel: 'どのように生成されていますか？',
    resultTitle: 'リスク評価結果',
    resultIntro: 'この3つの評価はあえて別々に示しています。単一の合成スコアにしてしまうと、実際に管理すべき具体的なリスクが見えなくなるためです。',
    restart: 'やり直す',
    riskNames: { ownership: 'リスクA — 所有できるか？', infringement: 'リスクB — 他者の権利を侵害していないか？', tradeSecret: 'リスクC — 営業秘密を漏らしていないか？' },
    tierNames: { Low: '低', Medium: '中', High: '高' },
    recommendations: {
      ownership: {
        Low: 'リスクが低い場合でも、このコンテンツにおける人間の創作的関与（プロンプト設計、選択、編集）を日常的に記録してください。将来の所有権主張を裏付ける材料になります。',
        Medium: '公開前に、担当者を明確にしてAIの下書きを実質的に編集・再構成し、その人間の関与を記録として残してください。所有権の主張はこの証拠に依存します。',
        High: 'このコンテンツは、AI生成のままの状態では著作権による保護を受けられない可能性が高いと考えてください。防御可能な所有権資産として扱う前に、構成・選択・大幅な編集といった実質的な人間による創作を組み込む予算を確保してください。',
      },
      infringement: {
        Low: 'この程度のリスクであれば、モデルに特定の既存作品の再現を求めないといった標準的なプロンプト運用で十分な対策になります。',
        Medium: 'このユースケースについてベンダーの補償（インデムニフィケーション）条項を確認し、特定の作者のスタイルや既存作品を強く模倣させるようなプロンプトは避けてください。',
        High: 'このコンテンツを商用公開することは、完全には排除しにくい現実の侵害リスクを伴うと考えてください。利用しているプランに補償条項があるか、何が除外されているかを確認し、露出度の高いアウトプットは公開前に法務レビューを受けてください。',
      },
      tradeSecret: {
        Low: 'リスクが低くても、この生成方法のデータ保持設定を明示的に確認してください。ベンダー側のデフォルト設定は予告なく変わることがあります。',
        Medium: 'この生成方法で扱えるコンテンツの種類を制限し、プロンプトがベンダーのモデル学習に使われないことを契約上確認してください。',
        High: 'この組み合わせは、この記事群の中で、承認済みの自社ホスティングまたは完全に企業管理下にある導入へ移行すべき最も強い根拠です。データが第三者モデルへ出ていくという根本的な仕組み自体をなくすことができ、単なる緩和にとどまりません。',
      },
    },
    disclaimer: 'これは例示のためのトリアージツールであり、法的助言ではありません。具体的な判断は専門家に確認してください。',
  },
  zh: {
    title: 'IP 风险分诊矩阵',
    intro: '选择内容类型和部署方式，即可分别获得所有权、侵权、商业秘密三类风险的独立评级，以及针对每类风险的匹配控制建议。数据不会被发送到任何地方——评分完全在您的浏览器中完成。',
    contentTypeLabel: '这是什么类型的内容？',
    deploymentLabel: '它是如何生成的？',
    resultTitle: '您的风险评级',
    resultIntro: '这三项评级刻意分开呈现——单一的综合分数会掩盖您实际需要管理的具体风险。',
    restart: '重新开始',
    riskNames: { ownership: '风险 A——我们能拥有它吗？', infringement: '风险 B——它是否侵犯他人权利？', tradeSecret: '风险 C——我们是否泄露了商业秘密？' },
    tierNames: { Low: '低', Medium: '中', High: '高' },
    recommendations: {
      ownership: {
        Low: '即使风险较低，也应将这类内容背后的人类创作投入（提示设计、筛选、编辑）作为常规做法记录下来——这能强化未来任何所有权主张。',
        Medium: '发布前指定专人对 AI 生成的草稿进行实质性编辑或重构，并保留该人类贡献的记录——所有权主张需要这类证据支撑。',
        High: '应将这类内容在其原始 AI 生成形式下视为很可能无法获得版权保护。在将其作为可主张的所有权资产之前，应投入实质性的人类创作——结构安排、内容筛选、大幅修改。',
      },
      infringement: {
        Low: '在这一风险水平下，标准的提示词使用规范（避免要求模型复制某个具名、可识别的现有作品）是相称的控制措施。',
        Medium: '针对该用例审查供应商的赔偿（indemnification）条款，并避免要求模型高度模仿某个具名创作者风格或特定现有作品的提示词。',
        High: '应将这类内容的商业发布视为存在真实且难以完全消除的侵权风险。请确认您所用的服务层级是否提供赔偿条款及其排除范围，并在高曝光度内容发布前安排法务审查。',
      },
      tradeSecret: {
        Low: '即使风险较低，也应明确核实该部署方式的数据保留设置——供应商的默认设置有时会在不作充分提示的情况下变更。',
        Medium: '限制可通过该部署方式处理的内容类型，并在合同中明确确认提示词不会被用于训练供应商的模型。',
        High: '在本系列内容中，这是转向经批准的自托管或完全由企业掌控的部署方式的最有力理由——它从根本上消除了专有内容流向第三方模型这一机制，而不仅仅是缓解它。',
      },
    },
    disclaimer: '这是一个示例性的分诊工具，不构成法律意见——具体判断请与法律顾问确认。',
  },
  es: {
    title: 'Matriz de triaje de riesgo de PI',
    intro: 'Elige un tipo de contenido y un modo de despliegue para obtener una calificación de riesgo independiente sobre propiedad, infracción y exposición de secretos comerciales, junto con un control específico para cada uno. No se envía nada a ningún servidor — el cálculo se realiza por completo en tu navegador.',
    contentTypeLabel: '¿Qué tipo de contenido es?',
    deploymentLabel: '¿Cómo se genera?',
    resultTitle: 'Tus calificaciones de riesgo',
    resultIntro: 'Estas tres calificaciones se muestran deliberadamente por separado — una puntuación combinada única ocultaría qué riesgo concreto necesitas gestionar realmente.',
    restart: 'Empezar de nuevo',
    riskNames: { ownership: 'Riesgo A — ¿Podemos ser dueños de esto?', infringement: 'Riesgo B — ¿Infringe derechos de otros?', tradeSecret: 'Riesgo C — ¿Filtramos un secreto comercial?' },
    tierNames: { Low: 'Bajo', Medium: 'Medio', High: 'Alto' },
    recommendations: {
      ownership: {
        Low: 'Documenta como práctica habitual el aporte creativo humano detrás de este contenido (diseño del prompt, selección, edición) — refuerza cualquier reclamación de propiedad futura incluso con baja exposición.',
        Medium: 'Haz que una persona designada edite o reestructure de forma sustancial el borrador generado por IA antes de publicarlo, y conserva un registro de esa contribución humana — una reclamación de propiedad depende de esa evidencia.',
        High: 'Trata este contenido como probablemente no protegible por derechos de autor en su forma bruta generada por IA. Presupuesta una autoría humana significativa —estructura, selección, ediciones sustanciales— antes de considerarlo un activo de propiedad defendible.',
      },
      infringement: {
        Low: 'Una higiene de prompts estándar (evitar pedirle al modelo que reproduzca una obra existente concreta e identificable) es un control proporcional a este nivel de exposición.',
        Medium: 'Revisa las cláusulas de indemnización de tu proveedor para este caso de uso y evita prompts que pidan imitar de cerca el estilo de un creador con nombre o una obra existente específica.',
        High: 'Trata la publicación comercial de este contenido como una exposición real a infracción, difícil de eliminar por completo. Confirma si tu nivel de contrato ofrece indemnización y qué excluye, y haz que legal revise el contenido de alta visibilidad antes de publicarlo.',
      },
      tradeSecret: {
        Low: 'Confirma explícitamente la configuración de retención de datos del despliegue, incluso con baja exposición — los ajustes predeterminados de los proveedores cambian a veces sin mucho aviso.',
        Medium: 'Restringe qué tipos de contenido pueden pasar por este modo de despliegue y obtén confirmación contractual de que los prompts no se usan para entrenar los modelos del proveedor.',
        High: 'Este es, dentro de este conjunto de contenidos, el argumento más sólido para pasar a un despliegue autoalojado o totalmente controlado por la empresa y ya aprobado — elimina el mecanismo subyacente (contenido propietario que sale hacia un modelo de terceros) en lugar de solo mitigarlo.',
      },
    },
    disclaimer: 'Esta es una herramienta de triaje ilustrativa, no asesoramiento legal — confirma las determinaciones concretas con un abogado.',
  },
  pt: {
    title: 'Matriz de triagem de risco de PI',
    intro: 'Escolha um tipo de conteúdo e um modo de implantação para obter uma classificação de risco separada para propriedade, infração e exposição de segredos comerciais — com um controle correspondente para cada uma. Nada é enviado a lugar nenhum — o cálculo acontece inteiramente no seu navegador.',
    contentTypeLabel: 'Que tipo de conteúdo é esse?',
    deploymentLabel: 'Como ele é gerado?',
    resultTitle: 'Suas classificações de risco',
    resultIntro: 'Essas três classificações são propositalmente separadas — uma pontuação única combinada esconderia qual risco específico você realmente precisa gerenciar.',
    restart: 'Recomeçar',
    riskNames: { ownership: 'Risco A — Podemos ser donos disso?', infringement: 'Risco B — Isso infringe direitos de terceiros?', tradeSecret: 'Risco C — Vazamos um segredo comercial?' },
    tierNames: { Low: 'Baixo', Medium: 'Médio', High: 'Alto' },
    recommendations: {
      ownership: {
        Low: 'Documente como prática de rotina a contribuição criativa humana por trás desse conteúdo (design do prompt, seleção, edição) — isso reforça qualquer reivindicação de propriedade futura, mesmo em baixa exposição.',
        Medium: 'Faça com que uma pessoa designada edite ou reestruture substancialmente o rascunho gerado por IA antes da publicação, e mantenha um registro dessa contribuição humana — uma reivindicação de propriedade depende dessa evidência.',
        High: 'Trate esse conteúdo como provavelmente não protegível por direitos autorais em sua forma bruta gerada por IA. Reserve orçamento para autoria humana significativa — estrutura, seleção, edições substanciais — antes de considerá-lo um ativo de propriedade defensável.',
      },
      infringement: {
        Low: 'Uma higiene padrão de prompts (evitar pedir ao modelo que reproduza uma obra existente específica e identificável) é um controle proporcional nesse nível de exposição.',
        Medium: 'Revise as cláusulas de indenização do seu fornecedor para esse caso de uso e evite prompts que peçam imitação próxima do estilo de um criador nomeado ou de uma obra existente específica.',
        High: 'Trate a publicação comercial desse conteúdo como tendo exposição real a infração, difícil de eliminar por completo. Confirme se o seu nível de contrato oferece indenização e o que ela exclui, e peça revisão jurídica de conteúdo de alta visibilidade antes de publicar.',
      },
      tradeSecret: {
        Low: 'Confirme explicitamente a configuração de retenção de dados da implantação, mesmo em baixa exposição — as configurações padrão dos fornecedores às vezes mudam sem muito aviso.',
        Medium: 'Restrinja quais tipos de conteúdo podem passar por esse modo de implantação e obtenha confirmação contratual de que os prompts não são usados para treinar os modelos do fornecedor.',
        High: 'Este é, dentro deste conjunto de conteúdos, o argumento mais forte para migrar para uma implantação autoalojada ou totalmente controlada pela empresa e já aprovada — isso elimina o mecanismo subjacente (conteúdo proprietário saindo para um modelo de terceiros) em vez de apenas mitigá-lo.',
      },
    },
    disclaimer: 'Esta é uma ferramenta de triagem ilustrativa, não um parecer jurídico — confirme determinações específicas com um advogado.',
  },
  ar: {
    title: 'مصفوفة فرز مخاطر الملكية الفكرية',
    intro: 'اختر نوع المحتوى ونمط النشر للحصول على تقييم منفصل لكل من مخاطر الملكية، والتعدي، وتسريب الأسرار التجارية — إضافة إلى ضابط مطابق لكل منها. لا تُرسَل أي بيانات إلى أي جهة — يتم الحساب بالكامل داخل متصفحك.',
    contentTypeLabel: 'ما نوع هذا المحتوى؟',
    deploymentLabel: 'كيف يتم توليده؟',
    resultTitle: 'تقييمات المخاطر لديك',
    resultIntro: 'هذه التقييمات الثلاثة منفصلة عمدًا — فأي درجة واحدة مُدمَجة ستُخفي المخاطرة المحددة التي تحتاج فعلاً إلى إدارتها.',
    restart: 'إعادة البدء',
    riskNames: { ownership: 'المخاطرة أ — هل يمكننا امتلاكه؟', infringement: 'المخاطرة ب — هل يتعدى على حقوق الغير؟', tradeSecret: 'المخاطرة ج — هل سرّبنا سرًا تجاريًا؟' },
    tierNames: { Low: 'منخفض', Medium: 'متوسط', High: 'مرتفع' },
    recommendations: {
      ownership: {
        Low: 'وثّق كممارسة روتينية المساهمة الإبداعية البشرية وراء هذا المحتوى (تصميم التعليمة، الاختيار، التحرير) — فهذا يعزز أي مطالبة ملكية مستقبلية حتى عند انخفاض المخاطرة.',
        Medium: 'اجعل شخصًا محددًا يحرر أو يعيد هيكلة مسودة الذكاء الاصطناعي بشكل جوهري قبل النشر، واحتفظ بسجل لتلك المساهمة البشرية — فمطالبة الملكية تعتمد على وجود هذا الدليل.',
        High: 'تعامل مع هذا المحتوى في شكله الخام المولَّد بالذكاء الاصطناعي على أنه على الأرجح غير قابل للحماية بحقوق النشر. خصّص ميزانية لتأليف بشري جوهري — هيكلة، اختيار، تعديلات جوهرية — قبل الاعتماد عليه كأصل ملكية يمكن الدفاع عنه.',
      },
      infringement: {
        Low: 'اتباع ممارسات كتابة تعليمات معتادة (تجنّب مطالبة النموذج بإعادة إنتاج عمل قائم محدد وقابل للتعرف) ضابط متناسب عند هذا المستوى من المخاطرة.',
        Medium: 'راجع شروط التعويض (indemnification) لدى مزوّدك لهذا الاستخدام، وتجنّب التعليمات التي تطلب تقليدًا وثيقًا لأسلوب مبدع محدد أو عمل قائم بعينه.',
        High: 'تعامل مع النشر التجاري لهذا المحتوى على أنه يحمل تعرضًا حقيقيًا للتعدي يصعب إزالته بالكامل. تأكد مما إذا كانت خطتك التعاقدية تقدّم تعويضًا وما تستثنيه، واحرص على مراجعة قانونية للمخرجات عالية الظهور قبل نشرها.',
      },
      tradeSecret: {
        Low: 'تأكد صراحةً من إعداد الاحتفاظ بالبيانات لهذا النمط من النشر، حتى عند انخفاض المخاطرة — فإعدادات المزوّد الافتراضية قد تتغيّر أحيانًا دون إشعار كافٍ.',
        Medium: 'قيّد أنواع المحتوى المسموح بمرورها عبر نمط النشر هذا، واحصل على تأكيد تعاقدي بأن التعليمات لا تُستخدم لتدريب نماذج المزوّد.',
        High: 'هذا، ضمن مجموعة المحتوى هذه، أقوى حجة للانتقال إلى نشر مستضاف ذاتيًا أو خاضع بالكامل لسيطرة المؤسسة ومعتمد رسميًا — فهو يُزيل الآلية الأساسية (خروج محتوى مملوك إلى نموذج طرف ثالث) بدلاً من مجرد التخفيف منها.',
      },
    },
    disclaimer: 'هذه أداة فرز توضيحية وليست استشارة قانونية — تأكد من أي تحديد محدد مع مستشار قانوني مختص.',
  },
  ko: {
    title: 'IP 위험 분류 매트릭스',
    intro: '콘텐츠 유형과 배포 방식을 선택하면 소유권, 침해, 영업비밀 노출에 대해 각각 별도의 위험 등급과 그에 맞는 통제 방안을 확인할 수 있습니다. 어떤 데이터도 전송되지 않습니다 — 채점은 브라우저 내에서만 이루어집니다.',
    contentTypeLabel: '어떤 종류의 콘텐츠입니까?',
    deploymentLabel: '어떻게 생성됩니까?',
    resultTitle: '위험 등급 결과',
    resultIntro: '이 세 가지 등급은 의도적으로 분리되어 있습니다 — 하나의 통합 점수로 표시하면 실제로 관리해야 할 구체적인 위험이 가려집니다.',
    restart: '다시 시작',
    riskNames: { ownership: '위험 A — 소유할 수 있는가?', infringement: '위험 B — 타인의 권리를 침해하는가?', tradeSecret: '위험 C — 영업비밀을 유출했는가?' },
    tierNames: { Low: '낮음', Medium: '중간', High: '높음' },
    recommendations: {
      ownership: {
        Low: '노출도가 낮더라도 이 콘텐츠 뒤에 있는 인간의 창작적 기여(프롬프트 설계, 선택, 편집)를 일상적으로 기록해 두십시오. 향후 소유권 주장을 뒷받침하는 근거가 됩니다.',
        Medium: '게시 전에 담당자를 지정해 AI 초안을 실질적으로 편집하거나 재구성하고, 그 인간의 기여를 기록으로 남기십시오 — 소유권 주장은 이 증거에 좌우됩니다.',
        High: '이 콘텐츠는 AI가 생성한 원본 형태로는 저작권 보호를 받지 못할 가능성이 높다고 가정하십시오. 방어 가능한 소유권 자산으로 취급하기 전에 구조, 선택, 실질적인 수정 등 의미 있는 인간 저작 활동에 예산을 배정하십시오.',
      },
      infringement: {
        Low: '이 수준의 노출도에서는 모델에 특정한 기존 작품의 재현을 요청하지 않는 등 표준적인 프롬프트 관리가 적절한 통제입니다.',
        Medium: '이 사용 사례에 대한 벤더의 배상(indemnification) 조항을 검토하고, 특정 창작자의 스타일이나 구체적인 기존 작품을 가깝게 모방하도록 요청하는 프롬프트는 피하십시오.',
        High: '이 콘텐츠의 상업적 게시는 완전히 없애기 어려운 실질적인 침해 노출을 수반한다고 가정하십시오. 사용 중인 요금제가 배상을 제공하는지, 무엇을 제외하는지 확인하고, 노출도가 높은 결과물은 게시 전에 법무 검토를 받으십시오.',
      },
      tradeSecret: {
        Low: '노출도가 낮더라도 해당 배포 방식의 데이터 보존 설정을 명시적으로 확인하십시오 — 벤더의 기본 설정은 별다른 공지 없이 바뀌기도 합니다.',
        Medium: '이 배포 방식으로 처리할 수 있는 콘텐츠 유형을 제한하고, 프롬프트가 벤더 모델 학습에 사용되지 않는다는 계약상 확인을 받으십시오.',
        High: '이 콘텐츠 세트 안에서, 이는 승인된 자체 호스팅 또는 기업이 완전히 통제하는 배포 방식으로 전환해야 하는 가장 강력한 근거입니다 — 단순히 완화하는 것이 아니라 독점 콘텐츠가 제3자 모델로 유출되는 근본 메커니즘 자체를 없앱니다.',
      },
    },
    disclaimer: '이는 예시용 분류 도구이며 법률 자문이 아닙니다 — 구체적인 판단은 법률 전문가와 확인하십시오.',
  },
}

export function IpRiskTriageMatrix() {
  const lang = useLang() as Language
  const t = T[lang] ?? T.en
  const [contentType, setContentType] = useState<string>('')
  const [deployment, setDeployment] = useState<string>('')
  const [submitted, setSubmitted] = useState(false)

  const ready = Boolean(contentType && deployment)

  const results = useMemo(() => {
    const ct = CONTENT_TYPES.find(c => c.value === contentType)
    const dep = DEPLOYMENT_MODES.find(d => d.value === deployment)
    if (!ct || !dep) return null
    const riskKeys: RiskKey[] = ['ownership', 'infringement', 'tradeSecret']
    return riskKeys.map((key) => {
      const raw = ct.points[key] + dep.modifier[key]
      const score = Math.max(0, raw)
      const tier = tierForScore(score, RISK_MAX[key])
      return { key, tier }
    })
  }, [contentType, deployment])

  function reset() {
    setContentType('')
    setDeployment('')
    setSubmitted(false)
  }

  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  if (submitted && results) {
    return (
      <div className="border border-primary/20 rounded-2xl p-6 bg-primary/5" dir={dir}>
        <h3 className="text-lg font-bold text-text-primary mb-1">{t.resultTitle}</h3>
        <p className="text-text-secondary text-sm mb-5">{t.resultIntro}</p>
        <div className="space-y-4">
          {results.map((r) => (
            <div key={r.key} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between gap-3 mb-2">
                <p className="text-sm font-bold text-text-primary">{t.riskNames[r.key]}</p>
                <span
                  className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    r.tier === 'Low'
                      ? 'bg-green-100 text-green-700'
                      : r.tier === 'Medium'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-red-100 text-red-700'
                  }`}
                >
                  {t.tierNames[r.tier]}
                </span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{t.recommendations[r.key][r.tier]}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-secondary/70 mt-5 italic">{t.disclaimer}</p>
        <button
          onClick={reset}
          className="mt-5 px-4 py-2 text-sm font-medium border border-primary/30 rounded-lg text-primary hover:bg-primary/10 transition-colors"
        >
          {t.restart}
        </button>
      </div>
    )
  }

  return (
    <div className="border border-primary/20 rounded-2xl p-6" dir={dir}>
      <h3 className="text-lg font-bold text-text-primary mb-1">{t.title}</h3>
      <p className="text-text-secondary text-sm mb-6">{t.intro}</p>

      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold text-text-primary mb-2">{t.contentTypeLabel}</p>
          <div className="flex flex-wrap gap-2">
            {CONTENT_TYPES.map((c) => {
              const selected = contentType === c.value
              return (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setContentType(c.value)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                    selected
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-300 text-text-secondary hover:border-primary/50'
                  }`}
                >
                  {c.label[lang] ?? c.label.en}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-text-primary mb-2">{t.deploymentLabel}</p>
          <div className="flex flex-wrap gap-2">
            {DEPLOYMENT_MODES.map((d) => {
              const selected = deployment === d.value
              return (
                <button
                  key={d.value}
                  type="button"
                  onClick={() => setDeployment(d.value)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                    selected
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-300 text-text-secondary hover:border-primary/50'
                  }`}
                >
                  {d.label[lang] ?? d.label.en}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <button
        type="button"
        disabled={!ready}
        onClick={() => setSubmitted(true)}
        className="mt-6 px-6 py-2.5 text-sm font-medium bg-primary text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
      >
        {t.resultTitle}
      </button>
    </div>
  )
}
