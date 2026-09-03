'use client'

import { useMemo, useState } from 'react'
import { useLang } from '@/hooks/useLang'

type Language = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

type AnswerKey = 'scope' | 'credentialLifetime' | 'reversibility' | 'humanGate' | 'auditTrail'

interface Option { value: string; label: Record<Language, string>; points: number }
interface Question { key: AnswerKey; label: Record<Language, string>; options: Option[] }

const T: Record<Language, {
  title: string
  intro: string
  scoreLabel: string
  resultTitle: string
  resultIntro: (tier: string) => string
  recLabel: string
  restart: string
  tiers: Record<'Low' | 'Medium' | 'High' | 'Critical', { name: string; recommendation: string }>
}> = {
  en: {
    title: 'Agent Blast-Radius Calculator',
    intro: 'Answer 5 questions about one agent deployment to get a blast-radius risk tier and a matched least-privilege recommendation. Nothing is sent anywhere — scoring runs entirely in your browser.',
    scoreLabel: 'Blast-radius score',
    resultTitle: 'Your blast-radius tier',
    resultIntro: (tier) => `Based on your answers, this agent deployment sits in the ${tier} blast-radius tier.`,
    recLabel: 'Matched recommendation',
    restart: 'Start over',
    tiers: {
      Low: { name: 'Low', recommendation: 'Current scope is proportionate. Keep credentials short-lived, keep the audit trail in place, and re-run this assessment before expanding the agent\'s tool access or capability scope.' },
      Medium: { name: 'Medium', recommendation: 'Add a human-in-the-loop gate for any action that would be hard to undo, and confirm credentials rotate on a schedule rather than relying on a static key. Re-check this assessment after the next capability expansion.' },
      High: { name: 'High', recommendation: 'Move to short-lived, rotated credentials within 30 days. Require human approval specifically on irreversible actions — not on every action, which would defeat the point of automation. Add per-agent audit logging with attribution to an authorizing human before expanding scope further.' },
      Critical: { name: 'Critical', recommendation: 'Require a human approval gate on irreversible actions within 2 weeks. Move off long-lived static credentials to short-lived, rotated ones. Add a per-agent audit trail with attribution to an authorizing human before this agent\'s scope grows any further.' },
    },
  },
  de: {
    title: 'Agent-Blast-Radius-Rechner',
    intro: 'Beantworten Sie 5 Fragen zu einer Agent-Bereitstellung, um eine Blast-Radius-Risikostufe und eine passende Least-Privilege-Empfehlung zu erhalten. Es werden keine Daten übertragen — die Auswertung läuft vollständig in Ihrem Browser.',
    scoreLabel: 'Blast-Radius-Wert',
    resultTitle: 'Ihre Blast-Radius-Stufe',
    resultIntro: (tier) => `Basierend auf Ihren Antworten liegt diese Agent-Bereitstellung in der Blast-Radius-Stufe „${tier}".`,
    recLabel: 'Passende Empfehlung',
    restart: 'Neu starten',
    tiers: {
      Low: { name: 'Niedrig', recommendation: 'Der aktuelle Umfang ist angemessen. Halten Sie Zugangsdaten kurzlebig, behalten Sie den Audit-Trail bei und wiederholen Sie diese Einschätzung, bevor Sie Tool-Zugriff oder Fähigkeiten des Agents erweitern.' },
      Medium: { name: 'Mittel', recommendation: 'Fügen Sie ein Human-in-the-Loop-Gate für schwer rückgängig zu machende Aktionen hinzu und stellen Sie sicher, dass Zugangsdaten planmäßig rotieren statt auf einem statischen Schlüssel zu beruhen. Prüfen Sie dies erneut nach der nächsten Erweiterung der Fähigkeiten.' },
      High: { name: 'Hoch', recommendation: 'Wechseln Sie innerhalb von 30 Tagen zu kurzlebigen, rotierenden Zugangsdaten. Verlangen Sie eine menschliche Freigabe speziell für irreversible Aktionen — nicht für jede Aktion, das würde den Sinn der Automatisierung untergraben. Fügen Sie ein Audit-Log pro Agent mit Zuordnung zu einer autorisierenden Person hinzu, bevor Sie den Umfang weiter erweitern.' },
      Critical: { name: 'Kritisch', recommendation: 'Verlangen Sie innerhalb von 2 Wochen ein Freigabe-Gate für irreversible Aktionen. Wechseln Sie von statischen, langlebigen Zugangsdaten zu kurzlebigen, rotierenden. Fügen Sie einen Audit-Trail pro Agent mit Zuordnung zu einer autorisierenden Person hinzu, bevor der Umfang dieses Agents weiter wächst.' },
    },
  },
  fr: {
    title: 'Calculateur de rayon d\'impact des agents',
    intro: 'Répondez à 5 questions sur un déploiement d\'agent pour obtenir un niveau de risque de rayon d\'impact et une recommandation de moindre privilège adaptée. Rien n\'est transmis — le calcul s\'effectue entièrement dans votre navigateur.',
    scoreLabel: 'Score de rayon d\'impact',
    resultTitle: 'Votre niveau de rayon d\'impact',
    resultIntro: (tier) => `D'après vos réponses, ce déploiement d'agent se situe au niveau de rayon d'impact « ${tier} ».`,
    recLabel: 'Recommandation adaptée',
    restart: 'Recommencer',
    tiers: {
      Low: { name: 'Faible', recommendation: 'Le périmètre actuel est proportionné. Conservez des identifiants de courte durée, maintenez la piste d\'audit en place, et relancez cette évaluation avant d\'étendre l\'accès aux outils ou le périmètre de capacités de l\'agent.' },
      Medium: { name: 'Moyen', recommendation: 'Ajoutez une validation humaine pour toute action difficile à annuler et vérifiez que les identifiants sont bien renouvelés selon un calendrier plutôt que basés sur une clé statique. Refaites cette évaluation après la prochaine extension de capacités.' },
      High: { name: 'Élevé', recommendation: 'Passez à des identifiants de courte durée et renouvelés sous 30 jours. Exigez une validation humaine spécifiquement pour les actions irréversibles — pas pour chaque action, ce qui annulerait l\'intérêt de l\'automatisation. Ajoutez une journalisation d\'audit par agent avec attribution à une personne autorisatrice avant d\'étendre davantage le périmètre.' },
      Critical: { name: 'Critique', recommendation: 'Exigez une validation humaine pour les actions irréversibles sous 2 semaines. Abandonnez les identifiants statiques de longue durée au profit d\'identifiants courts et renouvelés. Ajoutez une piste d\'audit par agent avec attribution à une personne autorisatrice avant toute nouvelle extension du périmètre de cet agent.' },
    },
  },
  ja: {
    title: 'エージェント被害範囲（Blast Radius）計算ツール',
    intro: 'エージェントの導入について5つの質問に答えると、被害範囲リスクレベルとそれに対応した最小権限の推奨事項が表示されます。データはどこにも送信されません — 判定はすべてブラウザ内で行われます。',
    scoreLabel: '被害範囲スコア',
    resultTitle: '被害範囲レベル',
    resultIntro: (tier) => `回答に基づくと、このエージェント導入の被害範囲レベルは「${tier}」です。`,
    recLabel: '推奨対応',
    restart: 'やり直す',
    tiers: {
      Low: { name: '低', recommendation: '現在のスコープは妥当です。認証情報は短期・ローテーション運用のまま維持し、監査証跡を継続してください。ツールアクセスや権限範囲を拡大する前に、この評価を再実行してください。' },
      Medium: { name: '中', recommendation: '取り消しが難しいアクションには人間の承認ゲートを追加し、静的キーではなくスケジュールに沿って認証情報がローテーションされているか確認してください。次に権限を拡大する際に再評価してください。' },
      High: { name: '高', recommendation: '30日以内に短期・ローテーション型の認証情報へ移行してください。取り消し不能なアクションに限定して人間の承認を必須にしてください（すべてのアクションに適用すると自動化の意味が失われます）。権限をさらに拡大する前に、承認者を特定できるエージェント単位の監査ログを追加してください。' },
      Critical: { name: '重大', recommendation: '2週間以内に、取り消し不能なアクションへの人間承認ゲートを必須化してください。長期固定の認証情報から短期・ローテーション型へ移行してください。このエージェントの権限をこれ以上拡大する前に、承認者を特定できるエージェント単位の監査証跡を追加してください。' },
    },
  },
  zh: {
    title: 'Agent 影响半径计算器',
    intro: '回答关于某个 Agent 部署的5个问题，即可获得影响半径风险等级和匹配的最小权限建议。数据不会被发送到任何地方——评分完全在您的浏览器中完成。',
    scoreLabel: '影响半径分数',
    resultTitle: '您的影响半径等级',
    resultIntro: (tier) => `根据您的回答，该 Agent 部署处于影响半径的「${tier}」等级。`,
    recLabel: '匹配建议',
    restart: '重新开始',
    tiers: {
      Low: { name: '低', recommendation: '当前范围是相称的。保持凭证短期有效，保留审计留痕，并在扩大该 Agent 的工具访问权限或能力范围之前重新运行本评估。' },
      Medium: { name: '中', recommendation: '为任何难以撤销的操作添加人工审批环节，并确认凭证按计划轮换，而非依赖静态密钥。在下一次能力扩展后重新检查本评估。' },
      High: { name: '高', recommendation: '在30天内改用短期、可轮换的凭证。仅对不可逆操作要求人工审批——不要对每个操作都要求审批，否则会削弱自动化的意义。在进一步扩大范围之前，添加可追溯到授权人的按 Agent 审计日志。' },
      Critical: { name: '严重', recommendation: '在2周内为不可逆操作建立人工审批环节。停止使用长期静态凭证，改用短期轮换凭证。在该 Agent 的范围进一步扩大之前，添加可追溯到授权人的按 Agent 审计留痕。' },
    },
  },
  es: {
    title: 'Calculadora de radio de impacto del agente',
    intro: 'Responde 5 preguntas sobre el despliegue de un agente para obtener un nivel de riesgo de radio de impacto y una recomendación de mínimo privilegio a la medida. No se envía nada a ningún servidor — el cálculo se realiza por completo en tu navegador.',
    scoreLabel: 'Puntuación de radio de impacto',
    resultTitle: 'Tu nivel de radio de impacto',
    resultIntro: (tier) => `Según tus respuestas, este despliegue de agente se sitúa en el nivel de radio de impacto "${tier}".`,
    recLabel: 'Recomendación a la medida',
    restart: 'Empezar de nuevo',
    tiers: {
      Low: { name: 'Bajo', recommendation: 'El alcance actual es proporcional. Mantén las credenciales de corta duración, conserva el registro de auditoría, y repite esta evaluación antes de ampliar el acceso a herramientas o el alcance de capacidades del agente.' },
      Medium: { name: 'Medio', recommendation: 'Añade una validación humana para cualquier acción difícil de revertir y confirma que las credenciales rotan según un calendario en lugar de depender de una clave estática. Vuelve a revisar esta evaluación tras la próxima ampliación de capacidades.' },
      High: { name: 'Alto', recommendation: 'Cambia a credenciales de corta duración y rotación en un plazo de 30 días. Exige aprobación humana específicamente para acciones irreversibles — no para cada acción, lo que anularía el propósito de la automatización. Añade un registro de auditoría por agente con atribución a una persona autorizante antes de ampliar más el alcance.' },
      Critical: { name: 'Crítico', recommendation: 'Exige una validación humana para acciones irreversibles en un plazo de 2 semanas. Abandona las credenciales estáticas de larga duración por credenciales cortas y rotativas. Añade un registro de auditoría por agente con atribución a una persona autorizante antes de que el alcance de este agente crezca más.' },
    },
  },
  pt: {
    title: 'Calculadora de raio de impacto do agente',
    intro: 'Responda 5 perguntas sobre uma implantação de agente para obter um nível de risco de raio de impacto e uma recomendação de privilégio mínimo correspondente. Nada é enviado a lugar nenhum — o cálculo acontece inteiramente no seu navegador.',
    scoreLabel: 'Pontuação de raio de impacto',
    resultTitle: 'Seu nível de raio de impacto',
    resultIntro: (tier) => `Com base nas suas respostas, esta implantação de agente está no nível de raio de impacto "${tier}".`,
    recLabel: 'Recomendação correspondente',
    restart: 'Recomeçar',
    tiers: {
      Low: { name: 'Baixo', recommendation: 'O escopo atual é proporcional. Mantenha as credenciais de curta duração, preserve a trilha de auditoria e refaça esta avaliação antes de ampliar o acesso a ferramentas ou o escopo de capacidades do agente.' },
      Medium: { name: 'Médio', recommendation: 'Adicione uma validação humana para qualquer ação difícil de reverter e confirme que as credenciais são rotacionadas em um cronograma, em vez de depender de uma chave estática. Reavalie após a próxima expansão de capacidades.' },
      High: { name: 'Alto', recommendation: 'Migre para credenciais de curta duração e rotativas em até 30 dias. Exija aprovação humana especificamente para ações irreversíveis — não para toda ação, o que anularia o propósito da automação. Adicione um log de auditoria por agente com atribuição a uma pessoa autorizadora antes de ampliar ainda mais o escopo.' },
      Critical: { name: 'Crítico', recommendation: 'Exija um gate de aprovação humana para ações irreversíveis em até 2 semanas. Migre de credenciais estáticas de longa duração para credenciais curtas e rotativas. Adicione uma trilha de auditoria por agente com atribuição a uma pessoa autorizadora antes que o escopo deste agente cresça mais.' },
    },
  },
  ar: {
    title: 'حاسبة نطاق التأثير للوكيل',
    intro: 'أجب عن 5 أسئلة حول عملية نشر وكيل واحد للحصول على مستوى مخاطر نطاق التأثير وتوصية مطابقة بأقل الامتيازات. لا تُرسَل أي بيانات إلى أي جهة — يتم الحساب بالكامل داخل متصفحك.',
    scoreLabel: 'درجة نطاق التأثير',
    resultTitle: 'مستوى نطاق التأثير لديك',
    resultIntro: (tier) => `بناءً على إجاباتك، يقع نشر هذا الوكيل في مستوى نطاق تأثير «${tier}».`,
    recLabel: 'التوصية المطابقة',
    restart: 'إعادة البدء',
    tiers: {
      Low: { name: 'منخفض', recommendation: 'النطاق الحالي متناسب. حافظ على بيانات اعتماد قصيرة الأجل، وأبقِ سجل التدقيق قائمًا، وأعد إجراء هذا التقييم قبل توسيع وصول الوكيل إلى الأدوات أو نطاق قدراته.' },
      Medium: { name: 'متوسط', recommendation: 'أضِف بوابة موافقة بشرية لأي إجراء يصعب التراجع عنه، وتأكّد من تدوير بيانات الاعتماد وفق جدول بدلاً من الاعتماد على مفتاح ثابت. أعد فحص هذا التقييم بعد التوسيع القادم للقدرات.' },
      High: { name: 'مرتفع', recommendation: 'انتقل إلى بيانات اعتماد قصيرة الأجل وقابلة للتدوير خلال 30 يومًا. اشترط موافقة بشرية على الإجراءات التي لا يمكن التراجع عنها تحديدًا — وليس على كل إجراء، لأن ذلك يُبطل الغرض من الأتمتة. أضِف سجل تدقيق لكل وكيل يتضمن نسب الإجراء إلى شخص مخوّل قبل توسيع النطاق أكثر.' },
      Critical: { name: 'حرج', recommendation: 'اشترط بوابة موافقة بشرية على الإجراءات التي لا يمكن التراجع عنها خلال أسبوعين. انتقل من بيانات الاعتماد الثابتة طويلة الأجل إلى بيانات قصيرة الأجل وقابلة للتدوير. أضِف سجل تدقيق لكل وكيل يتضمن نسب الإجراء إلى شخص مخوّل قبل أن يتوسع نطاق هذا الوكيل أكثر.' },
    },
  },
  ko: {
    title: '에이전트 블라스트 반경 계산기',
    intro: '하나의 에이전트 배포에 관한 5개 질문에 답하면 블라스트 반경 위험 등급과 이에 맞는 최소 권한 권장 사항을 확인할 수 있습니다. 어떤 데이터도 전송되지 않습니다 — 채점은 브라우저 내에서만 이루어집니다.',
    scoreLabel: '블라스트 반경 점수',
    resultTitle: '블라스트 반경 등급',
    resultIntro: (tier) => `답변을 기준으로 이 에이전트 배포는 블라스트 반경 「${tier}」 등급에 해당합니다.`,
    recLabel: '맞춤 권장 사항',
    restart: '다시 시작',
    tiers: {
      Low: { name: '낮음', recommendation: '현재 범위는 적절합니다. 자격 증명을 단기·순환 방식으로 유지하고 감사 추적을 계속 유지하며, 에이전트의 도구 접근 권한이나 기능 범위를 확장하기 전에 이 평가를 다시 실행하십시오.' },
      Medium: { name: '중간', recommendation: '되돌리기 어려운 작업에 대해 사람의 승인 절차를 추가하고, 정적 키에 의존하지 않고 일정에 따라 자격 증명이 순환되는지 확인하십시오. 다음 기능 확장 후 이 평가를 다시 확인하십시오.' },
      High: { name: '높음', recommendation: '30일 이내에 단기·순환 자격 증명으로 전환하십시오. 되돌릴 수 없는 작업에 한해 사람의 승인을 요구하십시오 — 모든 작업에 요구하면 자동화의 의미가 사라집니다. 범위를 더 확장하기 전에 승인 권한자를 특정할 수 있는 에이전트별 감사 로그를 추가하십시오.' },
      Critical: { name: '심각', recommendation: '2주 이내에 되돌릴 수 없는 작업에 대한 사람의 승인 절차를 의무화하십시오. 장기 고정 자격 증명에서 단기·순환 자격 증명으로 전환하십시오. 이 에이전트의 범위가 더 확장되기 전에 승인 권한자를 특정할 수 있는 에이전트별 감사 추적을 추가하십시오.' },
    },
  },
}

const QUESTIONS: Question[] = [
  {
    key: 'scope',
    label: { en: '1. What is the agent\'s capability scope?', de: '1. Wie ist der Funktionsumfang des Agents?', fr: '1. Quel est le périmètre de capacités de l\'agent ?', ja: '1. エージェントの権限範囲は？', zh: '1. Agent 的能力范围是什么？', es: '1. ¿Cuál es el alcance de capacidades del agente?', pt: '1. Qual é o escopo de capacidades do agente?', ar: '1. ما نطاق قدرات الوكيل؟', ko: '1. 에이전트의 기능 범위는 무엇입니까?' },
    options: [
      { value: 'readonly', points: 0, label: { en: 'Read-only', de: 'Nur lesend', fr: 'Lecture seule', ja: '読み取り専用', zh: '仅只读', es: 'Solo lectura', pt: 'Somente leitura', ar: 'قراءة فقط', ko: '읽기 전용' } },
      { value: 'readwrite', points: 1, label: { en: 'Read-write', de: 'Lesend und schreibend', fr: 'Lecture-écriture', ja: '読み書き', zh: '读写', es: 'Lectura y escritura', pt: 'Leitura e escrita', ar: 'قراءة وكتابة', ko: '읽기-쓰기' } },
      { value: 'writedelete', points: 2, label: { en: 'Write + delete', de: 'Schreiben + löschen', fr: 'Écriture + suppression', ja: '書き込み＋削除', zh: '写入＋删除', es: 'Escritura + eliminación', pt: 'Escrita + exclusão', ar: 'كتابة + حذف', ko: '쓰기+삭제' } },
      { value: 'writeexternal', points: 3, label: { en: 'Write + external API calls', de: 'Schreiben + externe API-Aufrufe', fr: 'Écriture + appels API externes', ja: '書き込み＋外部API呼び出し', zh: '写入＋外部API调用', es: 'Escritura + llamadas a API externas', pt: 'Escrita + chamadas de API externas', ar: 'كتابة + استدعاءات API خارجية', ko: '쓰기+외부 API 호출' } },
    ],
  },
  {
    key: 'credentialLifetime',
    label: { en: '2. What is the credential lifetime the agent uses?', de: '2. Wie lange sind die vom Agent verwendeten Zugangsdaten gültig?', fr: '2. Quelle est la durée de vie des identifiants utilisés par l\'agent ?', ja: '2. エージェントが使用する認証情報の有効期間は？', zh: '2. Agent 使用的凭证有效期是多久？', es: '2. ¿Cuál es la duración de las credenciales que usa el agente?', pt: '2. Qual é a duração das credenciais usadas pelo agente?', ar: '2. ما مدة صلاحية بيانات الاعتماد التي يستخدمها الوكيل؟', ko: '2. 에이전트가 사용하는 자격 증명의 유효 기간은 무엇입니까?' },
    options: [
      { value: 'shortlived', points: 0, label: { en: 'Short-lived, rotated', de: 'Kurzlebig, rotierend', fr: 'Courte durée, renouvelée', ja: '短期・ローテーション', zh: '短期，定期轮换', es: 'Corta duración, rotativa', pt: 'Curta duração, rotativa', ar: 'قصيرة الأجل ودوارة', ko: '단기, 순환' } },
      { value: 'longlived', points: 2, label: { en: 'Long-lived, static', de: 'Langlebig, statisch', fr: 'Longue durée, statique', ja: '長期・固定', zh: '长期，静态', es: 'Larga duración, estática', pt: 'Longa duração, estática', ar: 'طويلة الأجل وثابتة', ko: '장기, 고정' } },
    ],
  },
  {
    key: 'reversibility',
    label: { en: '3. How reversible are the agent\'s actions?', de: '3. Wie rückgängig zu machen sind die Aktionen des Agents?', fr: '3. Dans quelle mesure les actions de l\'agent sont-elles réversibles ?', ja: '3. エージェントのアクションはどの程度取り消し可能ですか？', zh: '3. Agent 的操作可逆程度如何？', es: '3. ¿Qué tan reversibles son las acciones del agente?', pt: '3. Quão reversíveis são as ações do agente?', ar: '3. إلى أي مدى يمكن التراجع عن إجراءات الوكيل؟', ko: '3. 에이전트 작업의 되돌림 가능성은 어느 정도입니까?' },
    options: [
      { value: 'full', points: 0, label: { en: 'Fully reversible', de: 'Vollständig rückgängig zu machen', fr: 'Entièrement réversibles', ja: '完全に取り消し可能', zh: '完全可逆', es: 'Totalmente reversibles', pt: 'Totalmente reversíveis', ar: 'قابلة للتراجع الكامل', ko: '완전히 되돌릴 수 있음' } },
      { value: 'partial', points: 1, label: { en: 'Partially reversible', de: 'Teilweise rückgängig zu machen', fr: 'Partiellement réversibles', ja: '部分的に取り消し可能', zh: '部分可逆', es: 'Parcialmente reversibles', pt: 'Parcialmente reversíveis', ar: 'قابلة للتراجع جزئيًا', ko: '부분적으로 되돌릴 수 있음' } },
      { value: 'irreversible', points: 3, label: { en: 'Irreversible', de: 'Nicht rückgängig zu machen', fr: 'Irréversibles', ja: '取り消し不能', zh: '不可逆', es: 'Irreversibles', pt: 'Irreversíveis', ar: 'غير قابلة للتراجع', ko: '되돌릴 수 없음' } },
    ],
  },
  {
    key: 'humanGate',
    label: { en: '4. Does a human-in-the-loop approval gate exist for high-impact actions?', de: '4. Gibt es ein Human-in-the-Loop-Freigabe-Gate für Aktionen mit hoher Auswirkung?', fr: '4. Existe-t-il une validation humaine pour les actions à fort impact ?', ja: '4. 影響の大きいアクションに人間の承認ゲートはありますか？', zh: '4. 是否存在针对高影响操作的人工审批环节？', es: '4. ¿Existe una validación humana para acciones de alto impacto?', pt: '4. Existe um gate de aprovação humana para ações de alto impacto?', ar: '4. هل توجد بوابة موافقة بشرية للإجراءات عالية التأثير؟', ko: '4. 영향이 큰 작업에 대한 사람의 승인 절차가 있습니까?' },
    options: [
      { value: 'yes', points: 0, label: { en: 'Yes', de: 'Ja', fr: 'Oui', ja: 'はい', zh: '有', es: 'Sí', pt: 'Sim', ar: 'نعم', ko: '예' } },
      { value: 'partial', points: 1, label: { en: 'Partial', de: 'Teilweise', fr: 'Partielle', ja: '一部あり', zh: '部分存在', es: 'Parcial', pt: 'Parcial', ar: 'جزئيًا', ko: '부분적' } },
      { value: 'no', points: 2, label: { en: 'No', de: 'Nein', fr: 'Non', ja: 'いいえ', zh: '没有', es: 'No', pt: 'Não', ar: 'لا', ko: '아니요' } },
    ],
  },
  {
    key: 'auditTrail',
    label: { en: '5. Is there an audit trail with attribution to an authorizing human?', de: '5. Gibt es einen Audit-Trail mit Zuordnung zu einer autorisierenden Person?', fr: '5. Existe-t-il une piste d\'audit avec attribution à une personne autorisatrice ?', ja: '5. 承認者を特定できる監査証跡はありますか？', zh: '5. 是否有可追溯到授权人的审计留痕？', es: '5. ¿Existe un registro de auditoría con atribución a una persona autorizante?', pt: '5. Existe uma trilha de auditoria com atribuição a uma pessoa autorizadora?', ar: '5. هل يوجد سجل تدقيق يتضمن نسب الإجراء إلى شخص مخوّل؟', ko: '5. 승인 권한자를 특정할 수 있는 감사 추적이 있습니까?' },
    options: [
      { value: 'yes', points: 0, label: { en: 'Yes', de: 'Ja', fr: 'Oui', ja: 'はい', zh: '有', es: 'Sí', pt: 'Sim', ar: 'نعم', ko: '예' } },
      { value: 'partial', points: 1, label: { en: 'Partial', de: 'Teilweise', fr: 'Partielle', ja: '一部あり', zh: '部分存在', es: 'Parcial', pt: 'Parcial', ar: 'جزئيًا', ko: '부분적' } },
      { value: 'no', points: 2, label: { en: 'No', de: 'Nein', fr: 'Non', ja: 'いいえ', zh: '没有', es: 'No', pt: 'Não', ar: 'لا', ko: '아니요' } },
    ],
  },
]

const MAX_SCORE = QUESTIONS.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.points)), 0)

function tierForScore(score: number, max: number): 'Low' | 'Medium' | 'High' | 'Critical' {
  const pct = score / max
  if (pct < 0.25) return 'Low'
  if (pct < 0.5) return 'Medium'
  if (pct < 0.75) return 'High'
  return 'Critical'
}

export function AgentBlastRadiusCalculator() {
  const lang = useLang() as Language
  const t = T[lang] ?? T.en
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = QUESTIONS.every(q => Boolean(answers[q.key]))

  const score = useMemo(() => {
    return QUESTIONS.reduce((sum, q) => {
      const val = answers[q.key]
      const opt = q.options.find(o => o.value === val)
      return sum + (opt?.points ?? 0)
    }, 0)
  }, [answers])

  const tier = tierForScore(score, MAX_SCORE)

  function select(qKey: AnswerKey, value: string) {
    setAnswers(prev => ({ ...prev, [qKey]: value }))
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
        <p className="text-sm font-bold text-text-primary mb-2">{t.recLabel}</p>
        <p className="text-sm text-text-secondary leading-relaxed mb-5">{tierInfo.recommendation}</p>
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
                const selected = answers[q.key] === opt.value
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => select(q.key, opt.value)}
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
