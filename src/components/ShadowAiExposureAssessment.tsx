'use client'

import { useMemo, useState } from 'react'
import { useLang } from '@/hooks/useLang'

type Language = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

type AnswerKey =
  | 'headcount' | 'dataTypes' | 'mdmCoverage' | 'byod' | 'saasEstate'
  | 'sanctionedTool' | 'browserExtensions' | 'aup' | 'priorIncident'
  | 'training' | 'monitoring' | 'jurisdiction'

interface Option { value: string; label: Record<Language, string>; points: number }
interface Question { key: AnswerKey; label: Record<Language, string>; multi?: boolean; options: Option[] }

const T: Record<Language, {
  title: string
  intro: string
  scoreLabel: string
  resultTitle: string
  resultIntro: (tier: string) => string
  controlsLabel: string
  restart: string
  tiers: Record<'Low' | 'Medium' | 'High' | 'Critical', { name: string; controls: string[] }>
}> = {
  en: {
    title: 'Shadow AI Exposure Self-Assessment',
    intro: 'Answer 12 questions about your organization to get a risk tier and a matched starting control set. Nothing is sent anywhere — scoring runs entirely in your browser.',
    scoreLabel: 'Exposure score',
    resultTitle: 'Your risk tier',
    resultIntro: (tier) => `Based on your answers, this organization sits in the ${tier} shadow AI exposure tier.`,
    controlsLabel: 'Suggested starting controls',
    restart: 'Start over',
    tiers: {
      Low: { name: 'Low', controls: ['Publish a short Acceptable Use Policy (AUP) covering AI tools.', 'Run quarterly awareness training on data handling with AI tools.', 'Re-run this assessment in 6 months or after any major SaaS or headcount change.'] },
      Medium: { name: 'Medium', controls: ['Publish and formally roll out an AUP with employee acknowledgment.', 'Stand up at least one sanctioned AI tool so staff have a legitimate alternative.', 'Review the AI features already enabled inside your top 10 SaaS applications.', 'Add AI-usage awareness to onboarding, not just annual training.'] },
      High: { name: 'High', controls: ['Deploy a sanctioned AI alternative within 90 days — internal or vendor-hosted.', 'Extend DLP/CASB coverage to cover AI endpoints and browser-based AI tools.', 'Formalize AUP with manager sign-off for regulated-data teams.', 'Inventory AI features embedded in existing SaaS contracts at renewal.'] },
      Critical: { name: 'Critical', controls: ['Deploy a sanctioned AI alternative within 30 days for regulated-data teams.', 'Extend DLP tuned for AI endpoints across managed and BYOD-reachable channels.', 'Require an AUP with documented acknowledgment before AI tool access.', 'Escalate detection-tooling procurement (CASB/SSE) as a compliance-track item, not an IT backlog item.'] },
    },
  },
  de: {
    title: 'Shadow-AI-Risiko-Selbsteinschätzung',
    intro: 'Beantworten Sie 12 Fragen zu Ihrem Unternehmen, um eine Risikostufe und ein passendes Basis-Kontrollset zu erhalten. Es werden keine Daten übertragen — die Auswertung läuft vollständig in Ihrem Browser.',
    scoreLabel: 'Risikowert',
    resultTitle: 'Ihre Risikostufe',
    resultIntro: (tier) => `Basierend auf Ihren Antworten liegt Ihr Unternehmen in der Shadow-AI-Risikostufe „${tier}“.`,
    controlsLabel: 'Empfohlene Basiskontrollen',
    restart: 'Neu starten',
    tiers: {
      Low: { name: 'Niedrig', controls: ['Veröffentlichen Sie eine kurze Nutzungsrichtlinie (AUP) für KI-Tools.', 'Führen Sie vierteljährliche Schulungen zum Umgang mit Daten in KI-Tools durch.', 'Wiederholen Sie diese Einschätzung in 6 Monaten oder nach größeren SaaS- oder Personalveränderungen.'] },
      Medium: { name: 'Mittel', controls: ['Veröffentlichen und kommunizieren Sie eine AUP mit Bestätigungspflicht.', 'Stellen Sie mindestens ein freigegebenes KI-Tool bereit, damit Mitarbeitende eine legitime Alternative haben.', 'Prüfen Sie, welche KI-Funktionen bereits in Ihren zehn wichtigsten SaaS-Anwendungen aktiv sind.', 'Ergänzen Sie das Onboarding um KI-Nutzungshinweise, nicht nur die Jahresschulung.'] },
      High: { name: 'Hoch', controls: ['Stellen Sie innerhalb von 90 Tagen eine freigegebene KI-Alternative bereit — intern oder über einen Anbieter.', 'Erweitern Sie DLP/CASB auf KI-Endpunkte und browserbasierte KI-Tools.', 'Formalisieren Sie die AUP mit Freigabe durch Vorgesetzte für Teams mit regulierten Daten.', 'Erfassen Sie bei Vertragsverlängerungen, welche KI-Funktionen in bestehenden SaaS-Verträgen enthalten sind.'] },
      Critical: { name: 'Kritisch', controls: ['Stellen Sie innerhalb von 30 Tagen eine freigegebene KI-Alternative für Teams mit regulierten Daten bereit.', 'Erweitern Sie DLP für KI-Endpunkte auf verwaltete und BYOD-erreichbare Kanäle.', 'Verlangen Sie eine AUP mit dokumentierter Bestätigung vor dem Zugriff auf KI-Tools.', 'Eskalieren Sie die Beschaffung von Detektionswerkzeugen (CASB/SSE) als Compliance-Thema, nicht als IT-Backlog-Punkt.'] },
    },
  },
  fr: {
    title: 'Auto-évaluation de l\'exposition au Shadow AI',
    intro: 'Répondez à 12 questions sur votre organisation pour obtenir un niveau de risque et un socle de contrôles adapté. Rien n\'est transmis — le calcul s\'effectue entièrement dans votre navigateur.',
    scoreLabel: 'Score d\'exposition',
    resultTitle: 'Votre niveau de risque',
    resultIntro: (tier) => `D\'après vos réponses, votre organisation se situe au niveau d\'exposition Shadow AI « ${tier} ».`,
    controlsLabel: 'Contrôles de départ suggérés',
    restart: 'Recommencer',
    tiers: {
      Low: { name: 'Faible', controls: ['Publiez une charte d\'utilisation acceptable (AUP) courte couvrant les outils d\'IA.', 'Organisez une sensibilisation trimestrielle sur la gestion des données avec les outils d\'IA.', 'Relancez cette évaluation dans 6 mois ou après un changement majeur de SaaS ou d\'effectif.'] },
      Medium: { name: 'Moyen', controls: ['Publiez et déployez formellement une AUP avec accusé de réception des employés.', 'Mettez en place au moins un outil d\'IA validé pour offrir une alternative légitime.', 'Recensez les fonctionnalités d\'IA déjà activées dans vos 10 principales applications SaaS.', 'Intégrez la sensibilisation à l\'IA dans l\'intégration des nouveaux employés, pas seulement en formation annuelle.'] },
      High: { name: 'Élevé', controls: ['Déployez une alternative d\'IA validée sous 90 jours — interne ou hébergée par un fournisseur.', 'Étendez la couverture DLP/CASB aux points de terminaison IA et outils d\'IA dans le navigateur.', 'Formalisez l\'AUP avec validation managériale pour les équipes traitant des données réglementées.', 'Recensez les fonctionnalités d\'IA intégrées à vos contrats SaaS existants lors du renouvellement.'] },
      Critical: { name: 'Critique', controls: ['Déployez une alternative d\'IA validée sous 30 jours pour les équipes traitant des données réglementées.', 'Étendez le DLP adapté à l\'IA à tous les canaux gérés et accessibles en BYOD.', 'Exigez une AUP avec accusé de réception documenté avant tout accès aux outils d\'IA.', 'Faites remonter l\'achat d\'outils de détection (CASB/SSE) comme un sujet de conformité, pas une tâche IT secondaire.'] },
    },
  },
  ja: {
    title: 'シャドーAIエクスポージャー自己評価',
    intro: '組織に関する12の質問に答えると、リスクレベルとそれに対応した基本的な対策セットが表示されます。データはどこにも送信されません — 判定はすべてブラウザ内で行われます。',
    scoreLabel: 'エクスポージャースコア',
    resultTitle: 'リスクレベル',
    resultIntro: (tier) => `回答に基づくと、この組織のシャドーAIエクスポージャーレベルは「${tier}」です。`,
    controlsLabel: '推奨される初期対策',
    restart: 'やり直す',
    tiers: {
      Low: { name: '低', controls: ['AIツールを対象とした短い利用規定（AUP）を公開する。', 'AIツールでのデータ取り扱いに関する意識向上研修を四半期ごとに実施する。', '6か月後、またはSaaSや人員に大きな変化があった際に再評価する。'] },
      Medium: { name: '中', controls: ['従業員の同意を伴うAUPを正式に公開・展開する。', '従業員が正当な選択肢を持てるよう、承認済みAIツールを少なくとも1つ用意する。', '主要な10のSaaSアプリケーションで既に有効になっているAI機能を確認する。', '年次研修だけでなく、オンボーディングにもAI利用に関する説明を追加する。'] },
      High: { name: '高', controls: ['90日以内に承認済みAIの代替手段（社内または委託）を導入する。', 'DLP/CASBの適用範囲をAIエンドポイントおよびブラウザ上のAIツールに拡大する。', '規制対象データを扱うチームについては、上長承認を伴うAUPを正式化する。', '契約更新時に既存のSaaS契約に組み込まれているAI機能を棚卸しする。'] },
      Critical: { name: '重大', controls: ['規制対象データを扱うチームについては30日以内に承認済みAIの代替手段を導入する。', 'AI向けに調整したDLPを管理端末およびBYODが到達しうる経路全体に拡大する。', 'AIツールへのアクセス前に、記録付きの同意を伴うAUPを必須とする。', '検知ツール（CASB/SSE）の調達をITのバックログではなくコンプライアンス案件として優先度を上げる。'] },
    },
  },
  zh: {
    title: 'Shadow AI 风险敞口自评',
    intro: '回答关于贵组织的12个问题，即可获得风险等级和匹配的起始管控清单。数据不会被发送到任何地方——评分完全在您的浏览器中完成。',
    scoreLabel: '风险敞口分数',
    resultTitle: '您的风险等级',
    resultIntro: (tier) => `根据您的回答，贵组织处于 Shadow AI 风险敞口的「${tier}」等级。`,
    controlsLabel: '建议的起始管控措施',
    restart: '重新开始',
    tiers: {
      Low: { name: '低', controls: ['发布一份简短的可接受使用政策（AUP），涵盖AI工具。', '每季度开展一次关于在AI工具中处理数据的意识培训。', '6个月后或在SaaS/人员发生重大变化后重新进行本评估。'] },
      Medium: { name: '中', controls: ['正式发布并推行AUP，要求员工签署确认。', '至少部署一款经批准的AI工具，为员工提供正当替代方案。', '梳理贵组织前10大SaaS应用中已启用的AI功能。', '在新员工入职培训中加入AI使用须知，而不仅是年度培训。'] },
      High: { name: '高', controls: ['在90天内部署一款经批准的AI替代方案——可自建或由供应商托管。', '将DLP/CASB覆盖范围扩展至AI端点和基于浏览器的AI工具。', '为处理受监管数据的团队正式化AUP，并要求主管签核。', '在合同续签时盘点现有SaaS合同中已内置的AI功能。'] },
      Critical: { name: '严重', controls: ['为处理受监管数据的团队在30天内部署经批准的AI替代方案。', '将针对AI端点优化的DLP扩展至受管设备及BYOD可触达的所有渠道。', '要求在获得AI工具访问权限前签署并留存AUP确认记录。', '将检测工具（CASB/SSE）的采购作为合规事项而非IT待办事项加速推进。'] },
    },
  },
  es: {
    title: 'Autoevaluación de exposición a la IA en la sombra',
    intro: 'Responde 12 preguntas sobre tu organización para obtener un nivel de riesgo y un conjunto de controles iniciales acorde. No se envía nada a ningún servidor — el cálculo se realiza por completo en tu navegador.',
    scoreLabel: 'Puntuación de exposición',
    resultTitle: 'Tu nivel de riesgo',
    resultIntro: (tier) => `Según tus respuestas, tu organización se sitúa en el nivel de exposición a IA en la sombra "${tier}".`,
    controlsLabel: 'Controles iniciales sugeridos',
    restart: 'Empezar de nuevo',
    tiers: {
      Low: { name: 'Bajo', controls: ['Publica una política de uso aceptable (AUP) breve para herramientas de IA.', 'Realiza capacitaciones trimestrales sobre el manejo de datos con herramientas de IA.', 'Repite esta evaluación en 6 meses o tras un cambio importante de SaaS o de plantilla.'] },
      Medium: { name: 'Medio', controls: ['Publica e implementa formalmente una AUP con confirmación de los empleados.', 'Habilita al menos una herramienta de IA autorizada para ofrecer una alternativa legítima.', 'Revisa qué funciones de IA ya están activas en tus 10 aplicaciones SaaS principales.', 'Añade formación sobre el uso de IA a la incorporación de personal, no solo a la formación anual.'] },
      High: { name: 'Alto', controls: ['Implementa una alternativa de IA autorizada en un plazo de 90 días — interna o gestionada por un proveedor.', 'Amplía la cobertura de DLP/CASB a los endpoints de IA y a las herramientas de IA basadas en navegador.', 'Formaliza la AUP con aprobación de los responsables para los equipos que manejan datos regulados.', 'Inventaría las funciones de IA integradas en los contratos SaaS existentes al renovarlos.'] },
      Critical: { name: 'Crítico', controls: ['Implementa una alternativa de IA autorizada en 30 días para los equipos que manejan datos regulados.', 'Amplía el DLP ajustado para IA a los canales gestionados y a los accesibles mediante BYOD.', 'Exige una AUP con confirmación documentada antes de dar acceso a herramientas de IA.', 'Prioriza la adquisición de herramientas de detección (CASB/SSE) como un tema de cumplimiento, no como una tarea pendiente de TI.'] },
    },
  },
  pt: {
    title: 'Autoavaliação de exposição à Shadow AI',
    intro: 'Responda 12 perguntas sobre sua organização para obter um nível de risco e um conjunto de controles iniciais correspondente. Nada é enviado a lugar nenhum — o cálculo acontece inteiramente no seu navegador.',
    scoreLabel: 'Pontuação de exposição',
    resultTitle: 'Seu nível de risco',
    resultIntro: (tier) => `Com base nas suas respostas, sua organização está no nível de exposição à Shadow AI "${tier}".`,
    controlsLabel: 'Controles iniciais sugeridos',
    restart: 'Recomeçar',
    tiers: {
      Low: { name: 'Baixo', controls: ['Publique uma política de uso aceitável (AUP) curta cobrindo ferramentas de IA.', 'Realize treinamentos trimestrais de conscientização sobre manuseio de dados em ferramentas de IA.', 'Refaça esta avaliação em 6 meses ou após alguma mudança relevante de SaaS ou de quadro de funcionários.'] },
      Medium: { name: 'Médio', controls: ['Publique e implemente formalmente uma AUP com confirmação dos funcionários.', 'Disponibilize pelo menos uma ferramenta de IA autorizada para dar aos funcionários uma alternativa legítima.', 'Revise quais recursos de IA já estão habilitados nos seus 10 principais aplicativos SaaS.', 'Inclua conscientização sobre uso de IA no onboarding, não apenas no treinamento anual.'] },
      High: { name: 'Alto', controls: ['Implemente uma alternativa de IA autorizada em até 90 dias — interna ou hospedada por fornecedor.', 'Amplie a cobertura de DLP/CASB para endpoints de IA e ferramentas de IA baseadas em navegador.', 'Formalize a AUP com aprovação dos gestores para equipes que lidam com dados regulados.', 'Faça um inventário dos recursos de IA já embutidos nos contratos SaaS existentes na renovação.'] },
      Critical: { name: 'Crítico', controls: ['Implemente uma alternativa de IA autorizada em 30 dias para equipes que lidam com dados regulados.', 'Amplie o DLP ajustado para IA a todos os canais gerenciados e acessíveis via BYOD.', 'Exija uma AUP com confirmação documentada antes do acesso a ferramentas de IA.', 'Priorize a aquisição de ferramentas de detecção (CASB/SSE) como pauta de compliance, não como item da fila de TI.'] },
    },
  },
  ar: {
    title: 'التقييم الذاتي للتعرّض لـ Shadow AI',
    intro: 'أجب عن 12 سؤالاً حول مؤسستك للحصول على مستوى مخاطر ومجموعة ضوابط أولية مطابقة. لا تُرسَل أي بيانات إلى أي جهة — يتم الحساب بالكامل داخل متصفحك.',
    scoreLabel: 'درجة التعرّض',
    resultTitle: 'مستوى المخاطر لديك',
    resultIntro: (tier) => `بناءً على إجاباتك، تقع مؤسستك في مستوى تعرّض «${tier}» لـ Shadow AI.`,
    controlsLabel: 'الضوابط الأولية المقترحة',
    restart: 'إعادة البدء',
    tiers: {
      Low: { name: 'منخفض', controls: ['انشر سياسة استخدام مقبول (AUP) موجزة تغطي أدوات الذكاء الاصطناعي.', 'نفّذ تدريب توعية ربع سنوي حول التعامل مع البيانات في أدوات الذكاء الاصطناعي.', 'أعد إجراء هذا التقييم بعد 6 أشهر أو بعد أي تغيير كبير في SaaS أو عدد الموظفين.'] },
      Medium: { name: 'متوسط', controls: ['انشر ونفّذ رسميًا سياسة AUP مع إقرار من الموظفين.', 'وفّر أداة ذكاء اصطناعي معتمدة واحدة على الأقل لمنح الموظفين بديلاً مشروعًا.', 'راجع ميزات الذكاء الاصطناعي المفعّلة بالفعل داخل أهم 10 تطبيقات SaaS لديك.', 'أضف التوعية باستخدام الذكاء الاصطناعي إلى برنامج التأهيل، وليس فقط التدريب السنوي.'] },
      High: { name: 'مرتفع', controls: ['انشر بديلاً معتمدًا للذكاء الاصطناعي خلال 90 يومًا — داخليًا أو عبر مزوّد خدمة.', 'وسّع تغطية DLP/CASB لتشمل نقاط نهاية الذكاء الاصطناعي وأدوات الذكاء الاصطناعي المستندة إلى المتصفح.', 'أضفِ الطابع الرسمي على AUP مع موافقة المدير للفرق التي تتعامل مع بيانات منظمة.', 'أجرِ جردًا لميزات الذكاء الاصطناعي المضمّنة في عقود SaaS الحالية عند التجديد.'] },
      Critical: { name: 'حرج', controls: ['انشر بديلاً معتمدًا للذكاء الاصطناعي خلال 30 يومًا للفرق التي تتعامل مع بيانات منظمة.', 'وسّع DLP المُهيأ للذكاء الاصطناعي ليشمل جميع القنوات المُدارة والقابلة للوصول عبر BYOD.', 'اشترط وجود AUP مع إقرار موثّق قبل السماح بالوصول إلى أدوات الذكاء الاصطناعي.', 'صعّد شراء أدوات الكشف (CASB/SSE) كبند امتثال، لا كبند متأخر في قائمة تقنية المعلومات.'] },
    },
  },
  ko: {
    title: 'Shadow AI 노출도 자가진단',
    intro: '조직에 관한 12개 질문에 답하면 위험 등급과 이에 맞는 초기 통제 항목을 확인할 수 있습니다. 어떤 데이터도 전송되지 않습니다 — 채점은 브라우저 내에서만 이루어집니다.',
    scoreLabel: '노출 점수',
    resultTitle: '위험 등급',
    resultIntro: (tier) => `답변을 기준으로 이 조직은 Shadow AI 노출 「${tier}」 등급에 해당합니다.`,
    controlsLabel: '권장 초기 통제 항목',
    restart: '다시 시작',
    tiers: {
      Low: { name: '낮음', controls: ['AI 도구를 포함하는 간단한 사용 정책(AUP)을 게시하십시오.', 'AI 도구를 이용한 데이터 처리에 대한 분기별 인식 교육을 실시하십시오.', '6개월 후 또는 SaaS나 인력에 큰 변화가 있을 때 이 진단을 다시 실행하십시오.'] },
      Medium: { name: '중간', controls: ['직원 확인 절차를 포함한 AUP를 공식적으로 게시하고 시행하십시오.', '직원들이 정당한 대안을 가질 수 있도록 승인된 AI 도구를 최소 하나 이상 도입하십시오.', '상위 10개 SaaS 애플리케이션에 이미 활성화된 AI 기능을 점검하십시오.', '연간 교육뿐 아니라 온보딩 과정에도 AI 사용 안내를 추가하십시오.'] },
      High: { name: '높음', controls: ['90일 이내에 승인된 AI 대안(사내 구축 또는 벤더 호스팅)을 도입하십시오.', 'DLP/CASB 적용 범위를 AI 엔드포인트 및 브라우저 기반 AI 도구까지 확장하십시오.', '규제 데이터를 다루는 팀에는 관리자 승인을 포함한 AUP를 공식화하십시오.', '계약 갱신 시 기존 SaaS 계약에 내장된 AI 기능을 조사하십시오.'] },
      Critical: { name: '심각', controls: ['규제 데이터를 다루는 팀을 위해 30일 이내에 승인된 AI 대안을 도입하십시오.', 'AI에 맞게 조정된 DLP를 관리 기기 및 BYOD 접근 가능한 모든 채널로 확장하십시오.', 'AI 도구 접근 전에 기록된 확인 절차를 포함한 AUP를 의무화하십시오.', '탐지 도구(CASB/SSE) 도입을 IT 백로그가 아닌 컴플라이언스 사안으로 격상시키십시오.'] },
    },
  },
}

const QUESTIONS: Question[] = [
  {
    key: 'headcount',
    label: { en: '1. How many employees does your organization have?', de: '1. Wie viele Mitarbeitende hat Ihr Unternehmen?', fr: '1. Combien de salariés compte votre organisation ?', ja: '1. 貴社の従業員数は？', zh: '1. 贵组织的员工人数是多少？', es: '1. ¿Cuántos empleados tiene tu organización?', pt: '1. Quantos funcionários sua organização possui?', ar: '1. كم عدد موظفي مؤسستك؟', ko: '1. 조직의 직원 수는 몇 명입니까?' },
    options: [
      { value: 'lt200', points: 0, label: { en: 'Under 200', de: 'Unter 200', fr: 'Moins de 200', ja: '200人未満', zh: '少于200人', es: 'Menos de 200', pt: 'Menos de 200', ar: 'أقل من 200', ko: '200명 미만' } },
      { value: '200-1000', points: 1, label: { en: '200–1,000', de: '200–1.000', fr: '200–1 000', ja: '200〜1,000人', zh: '200–1,000人', es: '200–1.000', pt: '200–1.000', ar: '200–1000', ko: '200~1,000명' } },
      { value: '1000-5000', points: 2, label: { en: '1,000–5,000', de: '1.000–5.000', fr: '1 000–5 000', ja: '1,000〜5,000人', zh: '1,000–5,000人', es: '1.000–5.000', pt: '1.000–5.000', ar: '1000–5000', ko: '1,000~5,000명' } },
      { value: 'gt5000', points: 3, label: { en: 'Over 5,000', de: 'Über 5.000', fr: 'Plus de 5 000', ja: '5,000人超', zh: '超过5,000人', es: 'Más de 5.000', pt: 'Mais de 5.000', ar: 'أكثر من 5000', ko: '5,000명 초과' } },
    ],
  },
  {
    key: 'dataTypes',
    multi: true,
    label: { en: '2. Which regulated data types does your organization handle? (select all that apply)', de: '2. Welche regulierten Datentypen verarbeitet Ihr Unternehmen? (Mehrfachauswahl)', fr: '2. Quels types de données réglementées votre organisation traite-t-elle ? (plusieurs choix possibles)', ja: '2. 貴社が扱う規制対象データの種類は？（複数選択可）', zh: '2. 贵组织处理哪些受监管的数据类型？（可多选）', es: '2. ¿Qué tipos de datos regulados maneja tu organización? (selecciona todos los que apliquen)', pt: '2. Quais tipos de dados regulados sua organização lida? (selecione todos que se aplicam)', ar: '2. ما أنواع البيانات المنظمة التي تتعامل معها مؤسستك؟ (اختر كل ما ينطبق)', ko: '2. 조직이 다루는 규제 데이터 유형은 무엇입니까? (해당 항목 모두 선택)' },
    options: [
      { value: 'pii', points: 1, label: { en: 'Personal data (PII)', de: 'Personenbezogene Daten (PII)', fr: 'Données personnelles (PII)', ja: '個人情報（PII）', zh: '个人信息（PII）', es: 'Datos personales (PII)', pt: 'Dados pessoais (PII)', ar: 'بيانات شخصية (PII)', ko: '개인정보(PII)' } },
      { value: 'phi', points: 1, label: { en: 'Health data (PHI)', de: 'Gesundheitsdaten (PHI)', fr: 'Données de santé (PHI)', ja: '医療情報（PHI）', zh: '健康数据（PHI）', es: 'Datos de salud (PHI)', pt: 'Dados de saúde (PHI)', ar: 'بيانات صحية (PHI)', ko: '건강정보(PHI)' } },
      { value: 'pci', points: 1, label: { en: 'Payment card data (PCI)', de: 'Zahlungskartendaten (PCI)', fr: 'Données de carte de paiement (PCI)', ja: '決済カード情報（PCI）', zh: '支付卡数据（PCI）', es: 'Datos de tarjetas de pago (PCI)', pt: 'Dados de cartão de pagamento (PCI)', ar: 'بيانات بطاقات الدفع (PCI)', ko: '결제카드정보(PCI)' } },
      { value: 'trade', points: 1, label: { en: 'Trade secrets / proprietary IP', de: 'Geschäftsgeheimnisse / geistiges Eigentum', fr: 'Secrets commerciaux / propriété intellectuelle', ja: '営業秘密・独自IP', zh: '商业秘密／专有知识产权', es: 'Secretos comerciales / PI propia', pt: 'Segredos comerciais / PI proprietária', ar: 'أسرار تجارية / ملكية فكرية خاصة', ko: '영업비밀/독점 지적재산' } },
      { value: 'none', points: 0, label: { en: 'None of the above', de: 'Nichts davon', fr: 'Aucun de ces éléments', ja: 'いずれも該当なし', zh: '以上均不涉及', es: 'Ninguno de los anteriores', pt: 'Nenhum dos anteriores', ar: 'لا شيء مما سبق', ko: '해당 없음' } },
    ],
  },
  {
    key: 'mdmCoverage',
    label: { en: '3. What share of employee devices are enrolled in mobile device management (MDM)?', de: '3. Wie hoch ist der Anteil der Geräte, die in MDM (Mobile Device Management) eingebunden sind?', fr: '3. Quelle part des appareils des employés est enregistrée dans une solution MDM ?', ja: '3. MDM（モバイルデバイス管理）に登録されている従業員デバイスの割合は？', zh: '3. 有多少比例的员工设备已纳入移动设备管理（MDM）？', es: '3. ¿Qué porcentaje de dispositivos de empleados está inscrito en MDM?', pt: '3. Qual a porcentagem de dispositivos de funcionários inscritos em MDM?', ar: '3. ما نسبة أجهزة الموظفين المسجّلة في إدارة الأجهزة المحمولة (MDM)؟', ko: '3. MDM(모바일 기기 관리)에 등록된 직원 기기의 비율은?' },
    options: [
      { value: 'gt75', points: 0, label: { en: 'Over 75%', de: 'Über 75 %', fr: 'Plus de 75 %', ja: '75%超', zh: '超过75%', es: 'Más del 75 %', pt: 'Mais de 75%', ar: 'أكثر من 75٪', ko: '75% 초과' } },
      { value: '25-75', points: 1, label: { en: '25–75%', de: '25–75 %', fr: '25–75 %', ja: '25〜75%', zh: '25%–75%', es: '25–75 %', pt: '25–75%', ar: '25–75٪', ko: '25~75%' } },
      { value: 'lt25', points: 2, label: { en: 'Under 25%', de: 'Unter 25 %', fr: 'Moins de 25 %', ja: '25%未満', zh: '低于25%', es: 'Menos del 25 %', pt: 'Menos de 25%', ar: 'أقل من 25٪', ko: '25% 미만' } },
      { value: 'none', points: 3, label: { en: 'No MDM in place', de: 'Kein MDM vorhanden', fr: 'Aucun MDM en place', ja: 'MDM未導入', zh: '尚未部署MDM', es: 'No hay MDM implementado', pt: 'Nenhum MDM implementado', ar: 'لا توجد إدارة أجهزة محمولة', ko: 'MDM 미도입' } },
    ],
  },
  {
    key: 'byod',
    label: { en: '4. How common is bring-your-own-device (BYOD) access to company systems?', de: '4. Wie verbreitet ist der Zugriff auf Unternehmenssysteme über private Geräte (BYOD)?', fr: '4. Dans quelle mesure l\'accès aux systèmes de l\'entreprise via des appareils personnels (BYOD) est-il courant ?', ja: '4. 私物端末（BYOD）による社内システムへのアクセスはどの程度一般的ですか？', zh: '4. 员工使用自带设备（BYOD）访问公司系统的情况有多普遍？', es: '4. ¿Qué tan común es el acceso a los sistemas de la empresa mediante dispositivos personales (BYOD)?', pt: '4. Qual a frequência do acesso a sistemas da empresa via dispositivos pessoais (BYOD)?', ar: '4. ما مدى شيوع الوصول إلى أنظمة الشركة عبر الأجهزة الشخصية (BYOD)؟', ko: '4. 개인 기기(BYOD)를 통한 회사 시스템 접근이 얼마나 흔합니까?' },
    options: [
      { value: 'rare', points: 0, label: { en: 'Rare / not permitted', de: 'Selten / nicht erlaubt', fr: 'Rare / non autorisé', ja: 'まれ・許可されていない', zh: '很少／不允许', es: 'Poco frecuente / no permitido', pt: 'Raro / não permitido', ar: 'نادر / غير مسموح', ko: '드묾/허용되지 않음' } },
      { value: 'some', points: 1, label: { en: 'Some teams', de: 'Einige Teams', fr: 'Certaines équipes', ja: '一部のチームのみ', zh: '部分团队', es: 'Algunos equipos', pt: 'Alguns times', ar: 'بعض الفرق', ko: '일부 팀' } },
      { value: 'common', points: 2, label: { en: 'Common across the org', de: 'Unternehmensweit verbreitet', fr: 'Courant dans toute l\'organisation', ja: '組織全体で一般的', zh: '在组织内很普遍', es: 'Común en toda la organización', pt: 'Comum em toda a organização', ar: 'شائع في المؤسسة', ko: '조직 전반에 흔함' } },
    ],
  },
  {
    key: 'saasEstate',
    label: { en: '5. Roughly how many SaaS applications does the organization use?', de: '5. Wie viele SaaS-Anwendungen nutzt Ihr Unternehmen ungefähr?', fr: '5. Combien d\'applications SaaS votre organisation utilise-t-elle environ ?', ja: '5. 貴社が利用しているSaaSアプリケーションの数はおおよそ？', zh: '5. 贵组织大约使用多少款SaaS应用？', es: '5. ¿Aproximadamente cuántas aplicaciones SaaS utiliza la organización?', pt: '5. Aproximadamente quantos aplicativos SaaS a organização utiliza?', ar: '5. كم يقارب عدد تطبيقات SaaS التي تستخدمها المؤسسة؟', ko: '5. 조직에서 사용하는 SaaS 애플리케이션은 대략 몇 개입니까?' },
    options: [
      { value: 'lt20', points: 0, label: { en: 'Under 20', de: 'Unter 20', fr: 'Moins de 20', ja: '20未満', zh: '少于20款', es: 'Menos de 20', pt: 'Menos de 20', ar: 'أقل من 20', ko: '20개 미만' } },
      { value: '20-100', points: 1, label: { en: '20–100', de: '20–100', fr: '20–100', ja: '20〜100', zh: '20–100款', es: '20–100', pt: '20–100', ar: '20–100', ko: '20~100개' } },
      { value: 'gt100', points: 2, label: { en: 'Over 100', de: 'Über 100', fr: 'Plus de 100', ja: '100超', zh: '超过100款', es: 'Más de 100', pt: 'Mais de 100', ar: 'أكثر من 100', ko: '100개 초과' } },
    ],
  },
  {
    key: 'sanctionedTool',
    label: { en: '6. Does the organization already provide a sanctioned AI tool?', de: '6. Stellt Ihr Unternehmen bereits ein freigegebenes KI-Tool bereit?', fr: '6. Votre organisation propose-t-elle déjà un outil d\'IA validé ?', ja: '6. 貴社は既に承認済みのAIツールを提供していますか？', zh: '6. 贵组织是否已经提供经批准的AI工具？', es: '6. ¿La organización ya ofrece una herramienta de IA autorizada?', pt: '6. A organização já oferece uma ferramenta de IA autorizada?', ar: '6. هل توفّر المؤسسة بالفعل أداة ذكاء اصطناعي معتمدة؟', ko: '6. 조직에서 이미 승인된 AI 도구를 제공하고 있습니까?' },
    options: [
      { value: 'yes', points: 0, label: { en: 'Yes, broadly available', de: 'Ja, breit verfügbar', fr: 'Oui, largement disponible', ja: 'はい、広く利用可能', zh: '是的，广泛可用', es: 'Sí, ampliamente disponible', pt: 'Sim, amplamente disponível', ar: 'نعم، متاحة على نطاق واسع', ko: '예, 널리 제공됨' } },
      { value: 'partial', points: 1, label: { en: 'Partial / pilot only', de: 'Teilweise / nur Pilot', fr: 'Partiel / pilote uniquement', ja: '一部・パイロット段階のみ', zh: '部分／仅试点', es: 'Parcial / solo piloto', pt: 'Parcial / apenas piloto', ar: 'جزئياً / تجريبي فقط', ko: '부분적/시범 단계만' } },
      { value: 'no', points: 2, label: { en: 'No', de: 'Nein', fr: 'Non', ja: 'いいえ', zh: '否', es: 'No', pt: 'Não', ar: 'لا', ko: '아니요' } },
    ],
  },
  {
    key: 'browserExtensions',
    label: { en: '7. Are employees free to install browser extensions on managed devices?', de: '7. Dürfen Mitarbeitende auf verwalteten Geräten frei Browser-Erweiterungen installieren?', fr: '7. Les employés peuvent-ils installer librement des extensions de navigateur sur les appareils gérés ?', ja: '7. 管理対象デバイスで従業員は自由にブラウザ拡張機能をインストールできますか？', zh: '7. 员工是否可以在受管理设备上自由安装浏览器扩展程序？', es: '7. ¿Pueden los empleados instalar libremente extensiones de navegador en dispositivos gestionados?', pt: '7. Os funcionários podem instalar livremente extensões de navegador em dispositivos gerenciados?', ar: '7. هل يمكن للموظفين تثبيت إضافات المتصفح بحرية على الأجهزة المُدارة؟', ko: '7. 직원들이 관리되는 기기에 브라우저 확장 프로그램을 자유롭게 설치할 수 있습니까?' },
    options: [
      { value: 'blocked', points: 0, label: { en: 'No, restricted to an approved list', de: 'Nein, nur eine genehmigte Liste', fr: 'Non, limité à une liste approuvée', ja: 'いいえ、承認済みリストのみ', zh: '不可，仅限已批准清单', es: 'No, restringido a una lista aprobada', pt: 'Não, restrito a uma lista aprovada', ar: 'لا، مقتصر على قائمة معتمدة', ko: '아니요, 승인된 목록으로 제한' } },
      { value: 'free', points: 2, label: { en: 'Yes, largely unrestricted', de: 'Ja, weitgehend uneingeschränkt', fr: 'Oui, largement sans restriction', ja: 'はい、ほぼ制限なし', zh: '可以，基本不受限制', es: 'Sí, en gran medida sin restricciones', pt: 'Sim, em grande parte sem restrições', ar: 'نعم، دون قيود إلى حد كبير', ko: '예, 대부분 제한 없음' } },
    ],
  },
  {
    key: 'aup',
    label: { en: '8. Does a written AI Acceptable Use Policy (AUP) exist today?', de: '8. Gibt es bereits eine schriftliche KI-Nutzungsrichtlinie (AUP)?', fr: '8. Existe-t-il aujourd\'hui une charte d\'utilisation acceptable (AUP) écrite pour l\'IA ?', ja: '8. 現在、書面によるAI利用規定（AUP）は存在しますか？', zh: '8. 目前是否有书面的AI可接受使用政策（AUP）？', es: '8. ¿Existe hoy una política de uso aceptable (AUP) de IA por escrito?', pt: '8. Já existe uma política de uso aceitável (AUP) de IA por escrito hoje?', ar: '8. هل توجد اليوم سياسة استخدام مقبول (AUP) مكتوبة للذكاء الاصطناعي؟', ko: '8. 현재 문서화된 AI 사용 정책(AUP)이 존재합니까?' },
    options: [
      { value: 'yes', points: 0, label: { en: 'Yes', de: 'Ja', fr: 'Oui', ja: 'はい', zh: '是', es: 'Sí', pt: 'Sim', ar: 'نعم', ko: '예' } },
      { value: 'no', points: 2, label: { en: 'No', de: 'Nein', fr: 'Non', ja: 'いいえ', zh: '否', es: 'No', pt: 'Não', ar: 'لا', ko: '아니요' } },
    ],
  },
  {
    key: 'priorIncident',
    label: { en: '9. Has the organization had a known incident involving unauthorized AI tool use?', de: '9. Gab es bereits einen bekannten Vorfall im Zusammenhang mit nicht autorisierter KI-Nutzung?', fr: '9. L\'organisation a-t-elle déjà connu un incident lié à une utilisation non autorisée d\'un outil d\'IA ?', ja: '9. 未承認のAIツール利用に関する既知のインシデントはありましたか？', zh: '9. 贵组织是否发生过与未经授权使用AI工具相关的已知事件？', es: '9. ¿La organización ha tenido algún incidente conocido relacionado con el uso no autorizado de herramientas de IA?', pt: '9. A organização já teve algum incidente conhecido envolvendo uso não autorizado de ferramentas de IA?', ar: '9. هل تعرّضت المؤسسة لحادثة معروفة تتعلق باستخدام غير مصرّح به لأداة ذكاء اصطناعي؟', ko: '9. 조직에서 무단 AI 도구 사용과 관련된 알려진 사건이 있었습니까?' },
    options: [
      { value: 'no', points: 0, label: { en: 'No / not aware of one', de: 'Nein / nicht bekannt', fr: 'Non / pas à ma connaissance', ja: 'いいえ・把握していない', zh: '没有／不知道', es: 'No / no tengo conocimiento', pt: 'Não / não tenho conhecimento', ar: 'لا / لست على علم بذلك', ko: '아니요/알려진 바 없음' } },
      { value: 'yes', points: 2, label: { en: 'Yes', de: 'Ja', fr: 'Oui', ja: 'はい', zh: '是的', es: 'Sí', pt: 'Sim', ar: 'نعم', ko: '예' } },
    ],
  },
  {
    key: 'training',
    label: { en: '10. How often does the organization run AI-usage awareness training?', de: '10. Wie oft führt das Unternehmen Schulungen zur KI-Nutzung durch?', fr: '10. À quelle fréquence l\'organisation forme-t-elle sur l\'utilisation de l\'IA ?', ja: '10. AI利用に関する意識向上研修はどのくらいの頻度で実施していますか？', zh: '10. 贵组织多久开展一次AI使用意识培训？', es: '10. ¿Con qué frecuencia realiza la organización formación sobre el uso de IA?', pt: '10. Com que frequência a organização realiza treinamento de conscientização sobre uso de IA?', ar: '10. كم مرة تُجري المؤسسة تدريب توعية حول استخدام الذكاء الاصطناعي؟', ko: '10. 조직에서 AI 사용 인식 교육을 얼마나 자주 실시합니까?' },
    options: [
      { value: 'regular', points: 0, label: { en: 'Quarterly or more often', de: 'Vierteljährlich oder häufiger', fr: 'Trimestriel ou plus fréquent', ja: '四半期ごと以上', zh: '每季度或更频繁', es: 'Trimestral o con más frecuencia', pt: 'Trimestral ou mais frequente', ar: 'كل ثلاثة أشهر أو أكثر', ko: '분기별 이상' } },
      { value: 'annual', points: 1, label: { en: 'Annually', de: 'Jährlich', fr: 'Annuel', ja: '年1回', zh: '每年一次', es: 'Anual', pt: 'Anual', ar: 'سنويًا', ko: '연 1회' } },
      { value: 'never', points: 2, label: { en: 'Never / not currently', de: 'Nie / derzeit nicht', fr: 'Jamais / pas actuellement', ja: 'なし・現在実施していない', zh: '从未／目前没有', es: 'Nunca / actualmente no', pt: 'Nunca / atualmente não', ar: 'أبدًا / لا حاليًا', ko: '없음/현재 없음' } },
    ],
  },
  {
    key: 'monitoring',
    label: { en: '11. Does the organization have any AI-aware detection tooling (CASB/SSE, DNS/egress telemetry, or DLP tuned for AI endpoints)?', de: '11. Verfügt Ihr Unternehmen über KI-fähige Erkennungswerkzeuge (CASB/SSE, DNS-/Egress-Telemetrie oder für KI-Endpunkte angepasstes DLP)?', fr: '11. Votre organisation dispose-t-elle d\'outils de détection adaptés à l\'IA (CASB/SSE, télémétrie DNS/sortante, ou DLP adapté à l\'IA) ?', ja: '11. AIを検知できるツール（CASB/SSE、DNS／アウトバウンド通信の可視化、AI向けDLPなど）はありますか？', zh: '11. 贵组织是否具备任何针对AI的检测工具（CASB/SSE、DNS/出站流量监测，或针对AI端点调优的DLP）？', es: '11. ¿La organización cuenta con alguna herramienta de detección orientada a IA (CASB/SSE, telemetría DNS/salida, o DLP ajustado para IA)?', pt: '11. A organização possui alguma ferramenta de detecção voltada para IA (CASB/SSE, telemetria de DNS/saída, ou DLP ajustado para IA)?', ar: '11. هل تمتلك المؤسسة أي أدوات كشف مدركة للذكاء الاصطناعي (CASB/SSE، أو تتبّع بيانات DNS/الصادر، أو DLP مُهيأ للذكاء الاصطناعي)؟', ko: '11. 조직에 AI 인식 탐지 도구(CASB/SSE, DNS/아웃바운드 텔레메트리, 또는 AI에 맞춘 DLP)가 있습니까?' },
    options: [
      { value: 'yes', points: 0, label: { en: 'Yes', de: 'Ja', fr: 'Oui', ja: 'はい', zh: '有', es: 'Sí', pt: 'Sim', ar: 'نعم', ko: '예' } },
      { value: 'no', points: 2, label: { en: 'No', de: 'Nein', fr: 'Non', ja: 'いいえ', zh: '没有', es: 'No', pt: 'Não', ar: 'لا', ko: '아니요' } },
    ],
  },
  {
    key: 'jurisdiction',
    label: { en: '12. Does the organization operate in a heavily regulated jurisdiction (EU, healthcare, financial services)?', de: '12. Ist Ihr Unternehmen in einer stark regulierten Branche oder Region tätig (EU, Gesundheitswesen, Finanzdienstleistungen)?', fr: '12. Votre organisation opère-t-elle dans une juridiction fortement réglementée (UE, santé, services financiers) ?', ja: '12. 貴社は規制の厳しい地域・業界（EU、医療、金融サービスなど）で事業を行っていますか？', zh: '12. 贵组织是否在监管严格的司法辖区运营（欧盟、医疗保健、金融服务）？', es: '12. ¿La organización opera en una jurisdicción fuertemente regulada (UE, salud, servicios financieros)?', pt: '12. A organização atua em uma jurisdição fortemente regulamentada (UE, saúde, serviços financeiros)?', ar: '12. هل تعمل المؤسسة ضمن نطاق قضائي شديد التنظيم (الاتحاد الأوروبي، الرعاية الصحية، الخدمات المالية)؟', ko: '12. 조직이 규제가 엄격한 관할권(EU, 의료, 금융 서비스)에서 운영됩니까?' },
    options: [
      { value: 'no', points: 0, label: { en: 'No', de: 'Nein', fr: 'Non', ja: 'いいえ', zh: '否', es: 'No', pt: 'Não', ar: 'لا', ko: '아니요' } },
      { value: 'yes', points: 1, label: { en: 'Yes', de: 'Ja', fr: 'Oui', ja: 'はい', zh: '是', es: 'Sí', pt: 'Sim', ar: 'نعم', ko: '예' } },
    ],
  },
]

const MAX_SCORE = QUESTIONS.reduce((sum, q) => {
  if (q.multi) return sum + Math.max(...q.options.map(o => o.points))
  return sum + Math.max(...q.options.map(o => o.points))
}, 0)

function tierForScore(score: number, max: number): 'Low' | 'Medium' | 'High' | 'Critical' {
  const pct = score / max
  if (pct < 0.25) return 'Low'
  if (pct < 0.5) return 'Medium'
  if (pct < 0.75) return 'High'
  return 'Critical'
}

export function ShadowAiExposureAssessment() {
  const lang = useLang() as Language
  const t = T[lang] ?? T.en
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = QUESTIONS.every(q => (answers[q.key]?.length ?? 0) > 0)

  const score = useMemo(() => {
    return QUESTIONS.reduce((sum, q) => {
      const selected = answers[q.key] ?? []
      const points = selected.reduce((s, val) => {
        const opt = q.options.find(o => o.value === val)
        return s + (opt?.points ?? 0)
      }, 0)
      return sum + points
    }, 0)
  }, [answers])

  const tier = tierForScore(score, MAX_SCORE)

  function toggle(qKey: AnswerKey, value: string, multi?: boolean) {
    setAnswers(prev => {
      const current = prev[qKey] ?? []
      if (multi) {
        const exists = current.includes(value)
        const next = exists ? current.filter(v => v !== value) : [...current, value]
        return { ...prev, [qKey]: next }
      }
      return { ...prev, [qKey]: [value] }
    })
  }

  function reset() {
    setAnswers({})
    setSubmitted(false)
  }

  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  if (submitted) {
    const tierInfo = t.tiers[tier]
    return (
      <div className="border border-primary/20 rounded-2xl p-6 bg-primary/5" dir={dir}>
        <h3 className="text-lg font-bold text-text-primary mb-1">{t.resultTitle}</h3>
        <p className="text-text-secondary text-sm mb-4">{t.resultIntro(tierInfo.name)}</p>
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
          {t.scoreLabel}: {score} / {MAX_SCORE}
        </p>
        <p className="text-sm font-bold text-text-primary mb-2">{t.controlsLabel}</p>
        <ul className="space-y-2 mb-5">
          {tierInfo.controls.map((c, i) => (
            <li key={i} className="flex gap-3 text-sm text-text-secondary">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={reset}
          className="px-4 py-2 text-sm font-medium border border-primary/30 rounded-lg text-primary hover:bg-primary/10 transition-colors"
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
        {QUESTIONS.map((q) => (
          <div key={q.key}>
            <p className="text-sm font-semibold text-text-primary mb-2">{q.label[lang] ?? q.label.en}</p>
            <div className="flex flex-wrap gap-2">
              {q.options.map((opt) => {
                const selected = (answers[q.key] ?? []).includes(opt.value)
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => toggle(q.key, opt.value, q.multi)}
                    className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                      selected
                        ? 'bg-primary text-white border-primary'
                        : 'border-gray-300 text-text-secondary hover:border-primary/50'
                    }`}
                  >
                    {opt.label[lang] ?? opt.label.en}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        disabled={!allAnswered}
        onClick={() => setSubmitted(true)}
        className="mt-6 px-6 py-2.5 text-sm font-medium bg-primary text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
      >
        {t.resultTitle}
      </button>
    </div>
  )
}
