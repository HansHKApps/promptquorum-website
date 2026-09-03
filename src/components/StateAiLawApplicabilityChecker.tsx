'use client'

import { useMemo, useState } from 'react'
import { useLang } from '@/hooks/useLang'

type Language = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

type StateKey = 'CO' | 'CA' | 'IL' | 'TX' | 'NYC' | 'OTHER'
type UseCaseKey = 'hiring' | 'promotion' | 'monitoring' | 'scheduling'

interface LawResult {
  id: string
  name: Record<Language, string>
  appliesWhen: (states: StateKey[], useCases: UseCaseKey[]) => boolean
  effectiveDate: Record<Language, string>
  artifact: Record<Language, string>
  verify: Record<Language, string>
}

const T: Record<Language, {
  title: string
  intro: string
  statesLabel: string
  useCasesLabel: string
  resultTitle: string
  resultIntro: string
  noneTitle: string
  noneText: string
  effectiveLabel: string
  artifactLabel: string
  verifyLabel: string
  restart: string
  states: Record<StateKey, string>
  useCases: Record<UseCaseKey, string>
}> = {
  en: {
    title: 'State AI Employment Law Applicability Checker',
    intro: 'Select the states where you employ people and the AI use cases you actually use, then check the result. Nothing is sent anywhere — this runs entirely in your browser and is not legal advice.',
    statesLabel: 'Where do you employ people?',
    useCasesLabel: 'Which AI use cases apply?',
    resultTitle: 'Laws that likely apply',
    resultIntro: 'Based on your selections, review these — then confirm current status with counsel before relying on this list.',
    noneTitle: 'No state-specific law matched',
    noneText: 'None of the state AI-employment laws tracked here matched your selections. This does not mean no law applies — general anti-discrimination law (Title VII, state FEHA-equivalents) always applies regardless of whether AI is used. Re-run this after adding a state or use case.',
    effectiveLabel: 'Effective date reference',
    artifactLabel: 'Artifact typically required',
    verifyLabel: 'Verify current status',
    restart: 'Start over',
    states: { CO: 'Colorado', CA: 'California', IL: 'Illinois', TX: 'Texas', NYC: 'New York City', OTHER: 'Another US state' },
    useCases: { hiring: 'Hiring / candidate screening', promotion: 'Promotion decisions', monitoring: 'Employee monitoring', scheduling: 'Scheduling / shift assignment' },
  },
  de: {
    title: 'Prüftool: US-Bundesstaaten-KI-Arbeitsrecht',
    intro: 'Wählen Sie die US-Bundesstaaten, in denen Sie Mitarbeitende beschäftigen, sowie die tatsächlich genutzten KI-Anwendungsfälle. Es werden keine Daten übertragen — die Auswertung läuft vollständig im Browser und ersetzt keine Rechtsberatung.',
    statesLabel: 'Wo beschäftigen Sie Mitarbeitende?',
    useCasesLabel: 'Welche KI-Anwendungsfälle treffen zu?',
    resultTitle: 'Wahrscheinlich anwendbare Gesetze',
    resultIntro: 'Prüfen Sie basierend auf Ihrer Auswahl diese Punkte — bestätigen Sie den aktuellen Stand danach mit anwaltlichem Rat, bevor Sie sich darauf verlassen.',
    noneTitle: 'Kein bundesstaatliches Spezialgesetz gefunden',
    noneText: 'Keines der hier erfassten bundesstaatlichen KI-Arbeitsgesetze passt zu Ihrer Auswahl. Das heißt nicht, dass kein Gesetz gilt — allgemeines Diskriminierungsrecht (Title VII, bundesstaatliche FEHA-Äquivalente) gilt immer, unabhängig vom KI-Einsatz. Führen Sie die Prüfung nach Hinzufügen eines Staates oder Anwendungsfalls erneut aus.',
    effectiveLabel: 'Datumsreferenz Inkrafttreten',
    artifactLabel: 'Typisch erforderliches Artefakt',
    verifyLabel: 'Aktuellen Stand prüfen',
    restart: 'Neu starten',
    states: { CO: 'Colorado', CA: 'Kalifornien', IL: 'Illinois', TX: 'Texas', NYC: 'New York City', OTHER: 'Anderer US-Bundesstaat' },
    useCases: { hiring: 'Einstellung / Bewerber-Screening', promotion: 'Beförderungsentscheidungen', monitoring: 'Mitarbeiterüberwachung', scheduling: 'Dienstplanung / Schichteinteilung' },
  },
  fr: {
    title: 'Outil de vérification des lois d\'État sur l\'IA en emploi',
    intro: 'Sélectionnez les États où vous employez du personnel et les cas d\'usage de l\'IA réellement utilisés, puis consultez le résultat. Rien n\'est transmis — le calcul s\'effectue entièrement dans votre navigateur et ne constitue pas un avis juridique.',
    statesLabel: 'Où employez-vous du personnel ?',
    useCasesLabel: 'Quels cas d\'usage de l\'IA s\'appliquent ?',
    resultTitle: 'Lois probablement applicables',
    resultIntro: 'Selon vos sélections, examinez ces éléments — puis confirmez le statut actuel avec un avocat avant de vous y fier.',
    noneTitle: 'Aucune loi spécifique à un État ne correspond',
    noneText: 'Aucune des lois d\'État sur l\'IA en emploi suivies ici ne correspond à vos sélections. Cela ne signifie pas qu\'aucune loi ne s\'applique — le droit général anti-discrimination (Title VII, équivalents FEHA d\'État) s\'applique toujours, que l\'IA soit utilisée ou non. Relancez après avoir ajouté un État ou un cas d\'usage.',
    effectiveLabel: 'Référence de date d\'entrée en vigueur',
    artifactLabel: 'Document généralement requis',
    verifyLabel: 'Vérifier le statut actuel',
    restart: 'Recommencer',
    states: { CO: 'Colorado', CA: 'Californie', IL: 'Illinois', TX: 'Texas', NYC: 'New York City', OTHER: 'Un autre État américain' },
    useCases: { hiring: 'Recrutement / présélection', promotion: 'Décisions de promotion', monitoring: 'Surveillance des employés', scheduling: 'Planification / affectation des horaires' },
  },
  es: {
    title: 'Verificador de leyes estatales de IA en el empleo',
    intro: 'Selecciona los estados donde empleas personal y los casos de uso de IA que realmente utilizas, luego consulta el resultado. No se envía nada — el cálculo se realiza por completo en tu navegador y no constituye asesoría legal.',
    statesLabel: '¿Dónde empleas personal?',
    useCasesLabel: '¿Qué casos de uso de IA aplican?',
    resultTitle: 'Leyes que probablemente aplican',
    resultIntro: 'Según tus selecciones, revisa estos elementos — luego confirma el estado actual con asesoría legal antes de confiar en esta lista.',
    noneTitle: 'Ninguna ley estatal específica coincide',
    noneText: 'Ninguna de las leyes estatales de IA en el empleo aquí registradas coincide con tu selección. Esto no significa que ninguna ley aplique — la ley general antidiscriminación (Title VII, equivalentes estatales de FEHA) siempre aplica, se use o no IA. Vuelve a ejecutar esto tras añadir un estado o caso de uso.',
    effectiveLabel: 'Referencia de fecha de vigencia',
    artifactLabel: 'Documento típicamente requerido',
    verifyLabel: 'Verificar el estado actual',
    restart: 'Empezar de nuevo',
    states: { CO: 'Colorado', CA: 'California', IL: 'Illinois', TX: 'Texas', NYC: 'Nueva York (NYC)', OTHER: 'Otro estado de EE. UU.' },
    useCases: { hiring: 'Contratación / preselección', promotion: 'Decisiones de ascenso', monitoring: 'Monitoreo de empleados', scheduling: 'Programación / asignación de turnos' },
  },
  pt: {
    title: 'Verificador de leis estaduais de IA no emprego (EUA)',
    intro: 'Selecione os estados onde você emprega pessoas e os casos de uso de IA que realmente utiliza, depois veja o resultado. Nada é enviado — o cálculo ocorre inteiramente no seu navegador e não constitui aconselhamento jurídico.',
    statesLabel: 'Onde você emprega pessoas?',
    useCasesLabel: 'Quais casos de uso de IA se aplicam?',
    resultTitle: 'Leis que provavelmente se aplicam',
    resultIntro: 'Com base nas suas seleções, revise estes itens — depois confirme o status atual com aconselhamento jurídico antes de confiar nesta lista.',
    noneTitle: 'Nenhuma lei estadual específica correspondeu',
    noneText: 'Nenhuma das leis estaduais de IA no emprego aqui monitoradas correspondeu às suas seleções. Isso não significa que nenhuma lei se aplica — a legislação geral antidiscriminação (Title VII, equivalentes estaduais de FEHA) sempre se aplica, com ou sem uso de IA. Execute novamente após adicionar um estado ou caso de uso.',
    effectiveLabel: 'Referência de data de vigência',
    artifactLabel: 'Documento tipicamente exigido',
    verifyLabel: 'Verificar status atual',
    restart: 'Recomeçar',
    states: { CO: 'Colorado', CA: 'Califórnia', IL: 'Illinois', TX: 'Texas', NYC: 'Nova York (NYC)', OTHER: 'Outro estado dos EUA' },
    useCases: { hiring: 'Contratação / triagem de candidatos', promotion: 'Decisões de promoção', monitoring: 'Monitoramento de funcionários', scheduling: 'Escalas / atribuição de turnos' },
  },
  zh: {
    title: '美国各州AI雇佣法适用性检查工具',
    intro: '选择您雇用员工的所在州，以及您实际使用的AI应用场景，然后查看结果。不会发送任何数据——计算完全在您的浏览器中完成，且不构成法律意见。',
    statesLabel: '您在哪些州雇用员工？',
    useCasesLabel: '适用哪些AI应用场景？',
    resultTitle: '可能适用的法律',
    resultIntro: '根据您的选择，请查看以下内容——在依赖此列表前，请务必与法律顾问确认最新状态。',
    noneTitle: '未匹配到特定州法律',
    noneText: '此工具跟踪的州级AI雇佣法律均未匹配您的选择。这并不意味着没有法律适用——无论是否使用AI，一般反歧视法（Title VII、各州FEHA同类法律）始终适用。添加州或应用场景后请重新运行。',
    effectiveLabel: '生效日期参考',
    artifactLabel: '通常要求的文件/记录',
    verifyLabel: '核实当前状态',
    restart: '重新开始',
    states: { CO: '科罗拉多州', CA: '加利福尼亚州', IL: '伊利诺伊州', TX: '得克萨斯州', NYC: '纽约市', OTHER: '其他美国州' },
    useCases: { hiring: '招聘／候选人筛选', promotion: '晋升决策', monitoring: '员工监控', scheduling: '排班／班次分配' },
  },
  ja: {
    title: '米国州別AI雇用法 適用チェックツール',
    intro: '従業員を雇用している州と、実際に使用しているAIのユースケースを選択すると結果が表示されます。データはどこにも送信されません — 計算はすべてブラウザ内で行われ、法的助言ではありません。',
    statesLabel: 'どの州で従業員を雇用していますか？',
    useCasesLabel: 'どのAIユースケースが該当しますか？',
    resultTitle: '適用される可能性が高い法律',
    resultIntro: '選択内容に基づき以下を確認してください。このリストに依拠する前に、必ず弁護士に現在の状況を確認してください。',
    noneTitle: '該当する州固有の法律なし',
    noneText: 'ここで追跡している州別AI雇用法のいずれも選択内容と一致しませんでした。これは法律が適用されないことを意味しません — AIの使用有無にかかわらず、一般的な差別禁止法（Title VII、州のFEHA相当法）は常に適用されます。州またはユースケースを追加して再実行してください。',
    effectiveLabel: '施行日の参考情報',
    artifactLabel: '通常必要な成果物',
    verifyLabel: '最新状況を確認',
    restart: 'やり直す',
    states: { CO: 'コロラド州', CA: 'カリフォルニア州', IL: 'イリノイ州', TX: 'テキサス州', NYC: 'ニューヨーク市', OTHER: 'その他の米国州' },
    useCases: { hiring: '採用・候補者選考', promotion: '昇進判断', monitoring: '従業員モニタリング', scheduling: 'シフト・勤務割当' },
  },
  ar: {
    title: 'أداة فحص انطباق قوانين الذكاء الاصطناعي للتوظيف حسب الولاية',
    intro: 'اختر الولايات التي توظّف فيها موظفين وحالات استخدام الذكاء الاصطناعي التي تستخدمها فعليًا، ثم اطّلع على النتيجة. لا تُرسَل أي بيانات — يتم الحساب بالكامل داخل متصفحك وهذا ليس استشارة قانونية.',
    statesLabel: 'أين توظّف الموظفين؟',
    useCasesLabel: 'ما حالات استخدام الذكاء الاصطناعي المنطبقة؟',
    resultTitle: 'القوانين التي يُرجَّح انطباقها',
    resultIntro: 'بناءً على اختياراتك، راجع هذه العناصر — ثم أكّد الوضع الحالي مع مستشار قانوني قبل الاعتماد على هذه القائمة.',
    noneTitle: 'لا يوجد قانون خاص بولاية مطابق',
    noneText: 'لم يتطابق أي من قوانين الذكاء الاصطناعي الخاصة بالولايات المتتبَّعة هنا مع اختياراتك. هذا لا يعني عدم انطباق أي قانون — فقانون مكافحة التمييز العام (Title VII، وما يعادل FEHA على مستوى الولاية) ينطبق دائمًا بغض النظر عن استخدام الذكاء الاصطناعي. أعد التشغيل بعد إضافة ولاية أو حالة استخدام.',
    effectiveLabel: 'مرجع تاريخ النفاذ',
    artifactLabel: 'الوثيقة المطلوبة عادةً',
    verifyLabel: 'تحقّق من الوضع الحالي',
    restart: 'إعادة البدء',
    states: { CO: 'كولورادو', CA: 'كاليفورنيا', IL: 'إلينوي', TX: 'تكساس', NYC: 'مدينة نيويورك', OTHER: 'ولاية أمريكية أخرى' },
    useCases: { hiring: 'التوظيف / فرز المرشحين', promotion: 'قرارات الترقية', monitoring: 'مراقبة الموظفين', scheduling: 'الجدولة / تخصيص المناوبات' },
  },
  ko: {
    title: '미국 주별 AI 고용법 적용 여부 확인 도구',
    intro: '직원을 고용하는 주와 실제로 사용하는 AI 사용 사례를 선택한 뒤 결과를 확인하세요. 어떤 데이터도 전송되지 않습니다 — 계산은 브라우저 내에서만 이루어지며 법률 자문이 아닙니다.',
    statesLabel: '어느 주에서 직원을 고용하고 있습니까?',
    useCasesLabel: '어떤 AI 사용 사례가 해당됩니까?',
    resultTitle: '적용될 가능성이 있는 법률',
    resultIntro: '선택 내용을 기준으로 아래 항목을 검토하십시오 — 이 목록에 의존하기 전에 반드시 변호사와 현재 상태를 확인하십시오.',
    noneTitle: '일치하는 주별 특정 법률 없음',
    noneText: '여기서 추적하는 주별 AI 고용법 중 선택 내용과 일치하는 것이 없습니다. 이는 어떤 법률도 적용되지 않는다는 의미가 아닙니다 — AI 사용 여부와 관계없이 일반 차별금지법(Title VII, 주별 FEHA 상당 법률)은 항상 적용됩니다. 주 또는 사용 사례를 추가한 후 다시 실행하십시오.',
    effectiveLabel: '시행일 참고',
    artifactLabel: '일반적으로 요구되는 문서',
    verifyLabel: '현재 상태 확인',
    restart: '다시 시작',
    states: { CO: '콜로라도주', CA: '캘리포니아주', IL: '일리노이주', TX: '텍사스주', NYC: '뉴욕시', OTHER: '기타 미국 주' },
    useCases: { hiring: '채용/후보자 심사', promotion: '승진 결정', monitoring: '직원 모니터링', scheduling: '스케줄링/근무 배정' },
  },
}

const LAWS: LawResult[] = [
  {
    id: 'colorado-ai-act',
    name: { en: 'Colorado AI Act (SB 24-205, as amended by SB 26-189)', de: 'Colorado AI Act (SB 24-205, geändert durch SB 26-189)', fr: 'Colorado AI Act (SB 24-205, modifiée par le SB 26-189)', es: 'Colorado AI Act (SB 24-205, enmendada por la SB 26-189)', pt: 'Colorado AI Act (SB 24-205, emendada pela SB 26-189)', zh: '科罗拉多州AI法案（SB 24-205，经SB 26-189修订）', ja: 'コロラド州AI法（SB 24-205、SB 26-189により改正）', ar: 'قانون الذكاء الاصطناعي في كولورادو (SB 24-205، بصيغته المعدَّلة بـ SB 26-189)', ko: '콜로라도 AI법(SB 24-205, SB 26-189로 개정)' },
    appliesWhen: (states) => states.includes('CO'),
    effectiveDate: { en: 'Delayed to January 1, 2027 (was June 30, 2026, per SB 26-189 signed May 14, 2026) — verify before that date, since this law has already been amended twice.', de: 'Auf den 1. Januar 2027 verschoben (zuvor 30. Juni 2026, gemäß SB 26-189 vom 14. Mai 2026) — vor diesem Datum prüfen, da das Gesetz bereits zweimal geändert wurde.', fr: 'Reportée au 1er janvier 2027 (initialement 30 juin 2026, selon le SB 26-189 signé le 14 mai 2026) — à vérifier avant cette date, la loi ayant déjà été modifiée deux fois.', es: 'Aplazada al 1 de enero de 2027 (antes 30 de junio de 2026, según la SB 26-189 firmada el 14 de mayo de 2026) — verificar antes de esa fecha, ya que la ley se ha modificado dos veces.', pt: 'Adiada para 1º de janeiro de 2027 (antes 30 de junho de 2026, conforme SB 26-189 assinada em 14 de maio de 2026) — verificar antes dessa data, pois a lei já foi alterada duas vezes.', zh: '已推迟至2027年1月1日生效（原定2026年6月30日，依据2026年5月14日签署的SB 26-189）——由于该法已两次修订，请在此日期前再次核实。', ja: '2027年1月1日に延期（当初2026年6月30日、2026年5月14日署名のSB 26-189による）— 既に2度改正されているため、当日前に再確認すること。', ar: 'تأجّل إلى 1 يناير 2027 (كان 30 يونيو 2026، بموجب SB 26-189 الموقَّع في 14 مايو 2026) — تحقّق قبل ذلك التاريخ لأن القانون عُدِّل مرتين بالفعل.', ko: '2027년 1월 1일로 연기됨(원래 2026년 6월 30일, 2026년 5월 14일 서명된 SB 26-189에 따름) — 이 법은 이미 두 차례 개정되었으므로 해당일 전에 다시 확인할 것.' },
    artifact: { en: 'Pre-use notice to candidates/employees, an adverse-action process with human review, and records retained 3+ years. (SB 26-189 removed the standalone impact-assessment and AG-reporting duties from the original bill.)', de: 'Vorabmitteilung an Bewerbende/Mitarbeitende, ein Verfahren bei ablehnenden Entscheidungen mit menschlicher Überprüfung sowie eine Aufbewahrung der Unterlagen von mindestens 3 Jahren. (SB 26-189 strich die eigenständige Folgenabschätzung und die Meldepflicht an die Generalstaatsanwaltschaft aus dem ursprünglichen Entwurf.)', fr: 'Notification préalable aux candidats/employés, une procédure de décision défavorable avec examen humain, et conservation des dossiers pendant 3 ans ou plus. (Le SB 26-189 a supprimé l\'évaluation d\'impact autonome et l\'obligation de signalement au procureur général du projet initial.)', es: 'Aviso previo a candidatos/empleados, un proceso de decisión adversa con revisión humana, y conservación de registros durante 3 años o más. (La SB 26-189 eliminó la evaluación de impacto independiente y la obligación de informar al fiscal general del proyecto original.)', pt: 'Aviso prévio a candidatos/funcionários, um processo de decisão adversa com revisão humana, e retenção de registros por 3 anos ou mais. (A SB 26-189 removeu a avaliação de impacto independente e a obrigação de reportar ao procurador-geral do projeto original.)', zh: '向候选人/员工发出使用前通知、设立含人工复核的不利决定处理流程，并保留记录至少3年。（SB 26-189已从原法案中删除独立影响评估和向总检察长报告的义务。）', ja: '候補者・従業員への事前通知、人によるレビューを伴う不利益決定プロセス、および3年以上の記録保持。（SB 26-189により、当初法案にあった独立した影響評価と司法長官への報告義務は削除された。）', ar: 'إشعار مسبق للمرشحين/الموظفين، وإجراء للقرار السلبي مع مراجعة بشرية، والاحتفاظ بالسجلات لمدة 3 سنوات أو أكثر. (أزال SB 26-189 تقييم الأثر المستقل والتزام الإبلاغ للنائب العام من مشروع القانون الأصلي.)', ko: '후보자/직원에 대한 사전 통지, 인간 검토를 포함한 불리한 결정 절차, 3년 이상 기록 보관. (SB 26-189는 원안의 독립적 영향평가 및 법무장관 보고 의무를 삭제했다.)' },
    verify: { en: 'Colorado has amended this law twice already — confirm the current effective date and scope before relying on it.', de: 'Colorado hat dieses Gesetz bereits zweimal geändert — vor Verlass darauf das aktuelle Inkrafttretensdatum und den Geltungsbereich bestätigen.', fr: 'Le Colorado a déjà modifié cette loi à deux reprises — confirmez la date d\'entrée en vigueur et le champ d\'application actuels avant de vous y fier.', es: 'Colorado ya ha enmendado esta ley dos veces — confirma la fecha de vigencia y el alcance actuales antes de confiar en ella.', pt: 'O Colorado já emendou esta lei duas vezes — confirme a data de vigência e o escopo atuais antes de confiar nela.', zh: '科罗拉多州已两次修订该法律——在依赖之前请确认当前的生效日期和适用范围。', ja: 'コロラド州はこの法律をすでに2度改正している — 依拠する前に現在の施行日と適用範囲を確認すること。', ar: 'عدّلت كولورادو هذا القانون مرتين بالفعل — تأكّد من تاريخ النفاذ الحالي والنطاق قبل الاعتماد عليه.', ko: '콜로라도는 이미 이 법을 두 차례 개정했습니다 — 의존하기 전에 현재 시행일과 범위를 확인하십시오.' },
  },
  {
    id: 'california-feha-admt',
    name: { en: 'California FEHA Automated-Decision-Making Technology (ADMT) rules', de: 'Kalifornische FEHA-Regeln zu automatisierter Entscheidungstechnologie (ADMT)', fr: 'Règles californiennes FEHA sur les technologies de décision automatisée (ADMT)', es: 'Reglas ADMT de la FEHA de California sobre tecnología de toma de decisiones automatizada', pt: 'Regras ADMT da FEHA da Califórnia sobre tecnologia de decisão automatizada', zh: '加州FEHA自动化决策技术（ADMT）规则', ja: 'カリフォルニア州FEHA 自動意思決定技術（ADMT）規則', ar: 'قواعد تقنية اتخاذ القرار الآلي (ADMT) بموجب قانون FEHA في كاليفورنيا', ko: '캘리포니아 FEHA 자동화 의사결정 기술(ADMT) 규정' },
    appliesWhen: (states) => states.includes('CA'),
    effectiveDate: { en: 'Core rules in force since October 1, 2025; the fuller set (risk assessments, pre-use notice, vendor-contract terms, opt-out rights) phases in by January 1, 2027 — confirm which phase applies to your rollout today.', de: 'Kernregeln seit 1. Oktober 2025 in Kraft; das umfassendere Regelwerk (Risikobewertungen, Vorabmitteilung, Vertragsklauseln mit Anbietern, Opt-out-Rechte) tritt schrittweise bis 1. Januar 2027 in Kraft — prüfen Sie, welche Phase heute für Ihren Rollout gilt.', fr: 'Règles de base en vigueur depuis le 1er octobre 2025 ; l\'ensemble plus large (évaluations des risques, notification préalable, clauses contractuelles fournisseurs, droits de retrait) entre en vigueur progressivement jusqu\'au 1er janvier 2027 — confirmez quelle phase s\'applique à votre déploiement actuel.', es: 'Las reglas principales están en vigor desde el 1 de octubre de 2025; el conjunto más amplio (evaluaciones de riesgo, aviso previo, cláusulas contractuales con proveedores, derechos de exclusión) se implementa gradualmente hasta el 1 de enero de 2027 — confirma qué fase aplica a tu implementación actual.', pt: 'As regras principais estão em vigor desde 1º de outubro de 2025; o conjunto mais amplo (avaliações de risco, aviso prévio, cláusulas contratuais com fornecedores, direitos de exclusão) entra em vigor gradualmente até 1º de janeiro de 2027 — confirme qual fase se aplica à sua implementação atual.', zh: '核心规则自2025年10月1日起生效；更全面的规则（风险评估、使用前通知、供应商合同条款、退出权）将分阶段实施至2027年1月1日——请确认目前适用于您部署的阶段。', ja: '基本規則は2025年10月1日から施行済み。より包括的な規則（リスク評価、事前通知、ベンダー契約条項、オプトアウト権）は2027年1月1日までに段階的に施行される — 現時点でどの段階が自社の導入に適用されるか確認すること。', ar: 'القواعد الأساسية سارية منذ 1 أكتوبر 2025؛ وتُطبَّق المجموعة الأوسع (تقييمات المخاطر، الإشعار المسبق، بنود عقود الموردين، حقوق إلغاء الاشتراك) تدريجيًا حتى 1 يناير 2027 — تحقّق من المرحلة المنطبقة على نشرك الحالي.', ko: '핵심 규정은 2025년 10월 1일부터 시행 중이며, 더 광범위한 규정 세트(위험평가, 사전 통지, 공급업체 계약 조항, 옵트아웃 권리)는 2027년 1월 1일까지 단계적으로 시행됩니다 — 현재 배포에 어느 단계가 적용되는지 확인하십시오.' },
    artifact: { en: 'Risk assessment covering the ADMT use, pre-use notice to applicants/employees, updated privacy-policy disclosures, vendor contract terms, and a process for the opt-out/human-review right.', de: 'Risikobewertung des ADMT-Einsatzes, Vorabmitteilung an Bewerbende/Mitarbeitende, aktualisierte Datenschutzhinweise, Vertragsklauseln mit Anbietern sowie ein Verfahren für das Opt-out-/Recht auf menschliche Überprüfung.', fr: 'Évaluation des risques couvrant l\'usage de l\'ADMT, notification préalable aux candidats/employés, mentions de confidentialité mises à jour, clauses contractuelles fournisseurs, et une procédure pour le droit de retrait/examen humain.', es: 'Evaluación de riesgo del uso de la ADMT, aviso previo a candidatos/empleados, avisos de privacidad actualizados, cláusulas contractuales con proveedores, y un proceso para el derecho de exclusión/revisión humana.', pt: 'Avaliação de risco do uso da ADMT, aviso prévio a candidatos/funcionários, avisos de privacidade atualizados, cláusulas contratuais com fornecedores, e um processo para o direito de exclusão/revisão humana.', zh: '涵盖ADMT使用的风险评估、向申请人/员工发出的使用前通知、更新后的隐私政策披露、供应商合同条款，以及退出权/人工复核流程。', ja: 'ADMT利用を対象とするリスク評価、応募者・従業員への事前通知、更新されたプライバシーポリシー開示、ベンダー契約条項、オプトアウト・人によるレビュー権のためのプロセス。', ar: 'تقييم مخاطر يغطي استخدام ADMT، وإشعار مسبق للمتقدمين/الموظفين، وإفصاحات محدَّثة في سياسة الخصوصية، وبنود عقود الموردين، وإجراء لحق إلغاء الاشتراك/المراجعة البشرية.', ko: 'ADMT 사용을 다루는 위험평가, 지원자/직원 대상 사전 통지, 업데이트된 개인정보처리방침 공개, 공급업체 계약 조항, 옵트아웃/인간 검토권 절차.' },
    verify: { en: 'Confirm which phase of the ADMT rules (Oct 2025 core rules vs. Jan 2027 full set) applies to your specific use case before finalizing a compliance plan.', de: 'Bestätigen Sie, welche Phase der ADMT-Regeln (Kernregeln Okt. 2025 vs. vollständiges Regelwerk Jan. 2027) für Ihren konkreten Anwendungsfall gilt, bevor Sie einen Compliance-Plan finalisieren.', fr: 'Confirmez quelle phase des règles ADMT (règles de base d\'octobre 2025 vs ensemble complet de janvier 2027) s\'applique à votre cas d\'usage avant de finaliser un plan de conformité.', es: 'Confirma qué fase de las reglas ADMT (reglas básicas de oct. 2025 frente al conjunto completo de ene. 2027) aplica a tu caso de uso específico antes de finalizar un plan de cumplimiento.', pt: 'Confirme qual fase das regras ADMT (regras principais de out. 2025 vs. conjunto completo de jan. 2027) se aplica ao seu caso de uso específico antes de finalizar um plano de conformidade.', zh: '在最终确定合规计划前，请确认ADMT规则的哪个阶段（2025年10月核心规则 vs. 2027年1月完整规则）适用于您的具体使用场景。', ja: 'コンプライアンス計画を確定する前に、ADMT規則のどの段階（2025年10月の基本規則か2027年1月の完全な規則セットか）が自社の具体的な用途に適用されるか確認すること。', ar: 'تحقّق من مرحلة قواعد ADMT (القواعد الأساسية لأكتوبر 2025 مقابل المجموعة الكاملة ليناير 2027) المنطبقة على حالة استخدامك المحددة قبل وضع خطة امتثال نهائية.', ko: '컴플라이언스 계획을 확정하기 전, ADMT 규정의 어느 단계(2025년 10월 핵심 규정 vs. 2027년 1월 전체 규정)가 귀사의 구체적 사용 사례에 적용되는지 확인하십시오.' },
  },
  {
    id: 'illinois-hb3773',
    name: { en: 'Illinois HB 3773 (Human Rights Act AI amendment)', de: 'Illinois HB 3773 (KI-Ergänzung zum Human Rights Act)', fr: 'Illinois HB 3773 (amendement IA du Human Rights Act)', es: 'Illinois HB 3773 (enmienda de IA a la Ley de Derechos Humanos)', pt: 'Illinois HB 3773 (emenda de IA à Lei de Direitos Humanos)', zh: '伊利诺伊州HB 3773（《人权法》AI修正案）', ja: 'イリノイ州HB 3773（人権法AI改正）', ar: 'قانون إلينوي HB 3773 (تعديل الذكاء الاصطناعي على قانون حقوق الإنسان)', ko: '일리노이 HB 3773(인권법 AI 개정)' },
    appliesWhen: (states) => states.includes('IL'),
    effectiveDate: { en: 'In force since January 1, 2026. Implementing regulations were proposed May 15, 2026 then temporarily withdrawn June 2, 2026 — the notice obligation itself remains in effect regardless of the regulatory delay.', de: 'In Kraft seit 1. Januar 2026. Durchführungsverordnungen wurden am 15. Mai 2026 vorgeschlagen und am 2. Juni 2026 vorübergehend zurückgezogen — die Mitteilungspflicht selbst gilt unabhängig von dieser Verzögerung weiter.', fr: 'En vigueur depuis le 1er janvier 2026. Les règlements d\'application ont été proposés le 15 mai 2026 puis temporairement retirés le 2 juin 2026 — l\'obligation de notification elle-même reste en vigueur malgré ce retard réglementaire.', es: 'En vigor desde el 1 de enero de 2026. Las regulaciones de implementación se propusieron el 15 de mayo de 2026 y se retiraron temporalmente el 2 de junio de 2026 — la obligación de notificación en sí sigue vigente pese al retraso regulatorio.', pt: 'Em vigor desde 1º de janeiro de 2026. Os regulamentos de implementação foram propostos em 15 de maio de 2026 e temporariamente retirados em 2 de junho de 2026 — a própria obrigação de notificação permanece em vigor apesar desse atraso regulatório.', zh: '自2026年1月1日起生效。实施细则于2026年5月15日提出，后于2026年6月2日暂时撤回——尽管监管延迟，通知义务本身仍然有效。', ja: '2026年1月1日から施行。施行規則は2026年5月15日に提案されたが2026年6月2日に一時撤回された — この規制上の遅延にかかわらず、通知義務自体は引き続き有効。', ar: 'سارٍ منذ 1 يناير 2026. اقتُرحت اللوائح التنفيذية في 15 مايو 2026 ثم سُحبت مؤقتًا في 2 يونيو 2026 — يظل التزام الإشعار نفسه ساريًا رغم هذا التأخير التنظيمي.', ko: '2026년 1월 1일부터 시행 중. 시행 규정은 2026년 5월 15일 제안되었으나 2026년 6월 2일 일시 철회됨 — 이 규제 지연과 무관하게 통지 의무 자체는 계속 유효함.' },
    artifact: { en: 'Plain-language notice to employees/candidates that AI is used in recruitment, hiring, promotion, discipline, discharge, or other covered employment decisions, in languages the workforce commonly speaks.', de: 'Verständliche Mitteilung an Mitarbeitende/Bewerbende, dass KI bei Rekrutierung, Einstellung, Beförderung, Disziplinarmaßnahmen, Kündigung oder anderen erfassten Beschäftigungsentscheidungen eingesetzt wird, in den von der Belegschaft üblicherweise gesprochenen Sprachen.', fr: 'Notification en langage clair aux employés/candidats indiquant que l\'IA est utilisée dans le recrutement, l\'embauche, la promotion, la discipline, le licenciement ou d\'autres décisions d\'emploi couvertes, dans les langues couramment parlées par le personnel.', es: 'Aviso en lenguaje claro a empleados/candidatos de que se usa IA en reclutamiento, contratación, promoción, disciplina, despido u otras decisiones de empleo cubiertas, en los idiomas que habla comúnmente la plantilla.', pt: 'Aviso em linguagem clara a funcionários/candidatos de que a IA é usada em recrutamento, contratação, promoção, disciplina, demissão ou outras decisões de emprego cobertas, nos idiomas comumente falados pela força de trabalho.', zh: '以员工/求职者常用语言，向其发出通俗易懂的通知，说明在招聘、雇用、晋升、纪律处分、解雇或其他相关雇佣决定中使用了AI。', ja: '採用、雇用、昇進、懲戒、解雇その他対象となる雇用上の決定にAIが使用されていることを、従業員・候補者が一般的に話す言語で平易に通知すること。', ar: 'إشعار بلغة واضحة للموظفين/المتقدمين بأن الذكاء الاصطناعي يُستخدم في التوظيف، والتعيين، والترقية، والانضباط، والفصل، أو قرارات توظيف أخرى مشمولة، باللغات التي يتحدثها العاملون عادةً.', ko: '채용, 고용, 승진, 징계, 해고 또는 기타 해당 고용 결정에 AI가 사용됨을 근로자/후보자에게 평이한 언어로, 근로자가 일반적으로 사용하는 언어로 통지.' },
    verify: { en: 'Confirm whether IDHR has re-issued implementing regulations since this was written — the statutory notice duty applies either way.', de: 'Prüfen Sie, ob das IDHR seit Erstellung dieses Textes neue Durchführungsverordnungen erlassen hat — die gesetzliche Mitteilungspflicht gilt in jedem Fall.', fr: 'Vérifiez si l\'IDHR a republié des règlements d\'application depuis la rédaction de ce texte — l\'obligation légale de notification s\'applique dans tous les cas.', es: 'Confirma si el IDHR ha vuelto a emitir regulaciones de implementación desde que se escribió esto — la obligación legal de notificación aplica de todos modos.', pt: 'Confirme se o IDHR reemitiu regulamentos de implementação desde que isso foi escrito — a obrigação legal de notificação se aplica de qualquer forma.', zh: '请确认伊利诺伊州人权部（IDHR）自本文撰写以来是否重新发布了实施细则——无论如何，法定通知义务均适用。', ja: '本稿執筆以降、IDHRが施行規則を再発行したか確認すること — いずれにせよ法定の通知義務は適用される。', ar: 'تحقّق مما إذا كانت IDHR قد أعادت إصدار اللوائح التنفيذية منذ كتابة هذا النص — يظل التزام الإشعار القانوني ساريًا على أي حال.', ko: 'IDHR이 이 글 작성 이후 시행 규정을 재발행했는지 확인하십시오 — 어느 경우든 법정 통지 의무는 적용됩니다.' },
  },
  {
    id: 'texas-traiga',
    name: { en: 'Texas Responsible AI Governance Act (TRAIGA)', de: 'Texas Responsible AI Governance Act (TRAIGA)', fr: 'Texas Responsible AI Governance Act (TRAIGA)', es: 'Texas Responsible AI Governance Act (TRAIGA)', pt: 'Texas Responsible AI Governance Act (TRAIGA)', zh: '得克萨斯州负责任AI治理法（TRAIGA）', ja: 'テキサス州責任あるAIガバナンス法（TRAIGA）', ar: 'قانون تكساس لحوكمة الذكاء الاصطناعي المسؤولة (TRAIGA)', ko: '텍사스 책임 있는 AI 거버넌스법(TRAIGA)' },
    appliesWhen: (states) => states.includes('TX'),
    effectiveDate: { en: 'In force since January 1, 2026. Unlike Colorado/Illinois/California, TRAIGA does not impose a broad private-employer notice or audit regime — it mainly targets government AI use and prohibits AI deployed with intent to unlawfully discriminate. Confirm this narrower scope has not changed.', de: 'In Kraft seit 1. Januar 2026. Anders als Colorado/Illinois/Kalifornien schreibt TRAIGA keine umfassende Mitteilungs- oder Auditpflicht für private Arbeitgeber vor — es zielt hauptsächlich auf den staatlichen KI-Einsatz ab und verbietet KI, die mit der Absicht rechtswidriger Diskriminierung eingesetzt wird. Bestätigen Sie, dass sich dieser engere Geltungsbereich nicht geändert hat.', fr: 'En vigueur depuis le 1er janvier 2026. Contrairement au Colorado, à l\'Illinois et à la Californie, le TRAIGA n\'impose pas de régime général de notification ou d\'audit aux employeurs privés — il vise principalement l\'usage gouvernemental de l\'IA et interdit l\'IA déployée avec l\'intention de discriminer illégalement. Confirmez que cette portée plus étroite n\'a pas changé.', es: 'En vigor desde el 1 de enero de 2026. A diferencia de Colorado/Illinois/California, TRAIGA no impone un régimen amplio de notificación o auditoría a empleadores privados — se centra principalmente en el uso gubernamental de la IA y prohíbe la IA desplegada con intención de discriminar ilegalmente. Confirma que este alcance más limitado no ha cambiado.', pt: 'Em vigor desde 1º de janeiro de 2026. Diferentemente de Colorado/Illinois/Califórnia, o TRAIGA não impõe um regime amplo de notificação ou auditoria a empregadores privados — visa principalmente o uso governamental de IA e proíbe IA implantada com intenção de discriminar ilegalmente. Confirme que esse escopo mais restrito não mudou.', zh: '自2026年1月1日起生效。与科罗拉多州/伊利诺伊州/加利福尼亚州不同，TRAIGA并未对私营雇主施加广泛的通知或审计制度——它主要针对政府AI使用，并禁止出于非法歧视意图部署AI。请确认该较窄的适用范围未发生变化。', ja: '2026年1月1日から施行。コロラド州、イリノイ州、カリフォルニア州とは異なり、TRAIGAは民間雇用主に対する広範な通知・監査制度を課していない — 主に政府によるAI利用を対象とし、違法な差別意図をもって展開されたAIを禁止する。この限定的な範囲が変わっていないか確認すること。', ar: 'سارٍ منذ 1 يناير 2026. على عكس كولورادو وإلينوي وكاليفورنيا، لا يفرض TRAIGA نظام إشعار أو تدقيق واسع على أصحاب العمل من القطاع الخاص — يستهدف بشكل أساسي استخدام الحكومة للذكاء الاصطناعي ويحظر نشر الذكاء الاصطناعي بنية التمييز غير القانوني. تأكّد من أن هذا النطاق الأضيق لم يتغيّر.', ko: '2026년 1월 1일부터 시행 중. 콜로라도/일리노이/캘리포니아와 달리 TRAIGA는 민간 고용주에 대한 광범위한 통지 또는 감사 제도를 부과하지 않습니다 — 주로 정부의 AI 사용을 대상으로 하며 불법 차별 의도로 배치된 AI를 금지합니다. 이 좁은 범위가 변경되지 않았는지 확인하십시오.' },
    artifact: { en: 'No standing notice/audit artifact for most private employers today — document that any AI-assisted employment decision was not made with discriminatory intent, and monitor for scope expansion.', de: 'Für die meisten privaten Arbeitgeber derzeit kein feststehendes Mitteilungs-/Audit-Artefakt erforderlich — dokumentieren Sie, dass keine KI-gestützte Beschäftigungsentscheidung mit diskriminierender Absicht getroffen wurde, und beobachten Sie eine mögliche Ausweitung des Geltungsbereichs.', fr: 'Aucun document permanent de notification/audit requis aujourd\'hui pour la plupart des employeurs privés — documentez qu\'aucune décision d\'emploi assistée par IA n\'a été prise avec une intention discriminatoire, et surveillez un éventuel élargissement du champ d\'application.', es: 'Hoy no existe un documento permanente de notificación/auditoría para la mayoría de los empleadores privados — documenta que ninguna decisión de empleo asistida por IA se tomó con intención discriminatoria, y vigila una posible ampliación del alcance.', pt: 'Hoje não há um documento permanente de notificação/auditoria para a maioria dos empregadores privados — documente que nenhuma decisão de emprego assistida por IA foi tomada com intenção discriminatória, e monitore uma possível ampliação do escopo.', zh: '目前对大多数私营雇主而言并无固定的通知/审计文件要求——请记录任何AI辅助的雇佣决定均非出于歧视意图，并留意适用范围是否扩大。', ja: '現時点でほとんどの民間雇用主に恒常的な通知・監査文書の要求はない — AI支援による雇用上の決定が差別的意図をもって行われていないことを文書化し、適用範囲の拡大がないか注視すること。', ar: 'لا توجد وثيقة إشعار/تدقيق دائمة اليوم لمعظم أصحاب العمل من القطاع الخاص — وثّق أن أي قرار توظيف مدعوم بالذكاء الاصطناعي لم يُتخذ بنية تمييزية، وراقب أي توسّع في النطاق.', ko: '오늘날 대부분의 민간 고용주에게 상시적인 통지/감사 문서 요건은 없습니다 — AI 지원 고용 결정이 차별적 의도로 이루어지지 않았음을 문서화하고 범위 확대 여부를 주시하십시오.' },
    verify: { en: 'TRAIGA is new and its scope for private employers could be expanded by future rulemaking or amendment — check for updates.', de: 'TRAIGA ist neu, und der Geltungsbereich für private Arbeitgeber könnte durch künftige Verordnungen oder Änderungen erweitert werden — auf Aktualisierungen prüfen.', fr: 'Le TRAIGA est récent et son champ d\'application pour les employeurs privés pourrait être élargi par une future réglementation ou modification — vérifiez les mises à jour.', es: 'TRAIGA es nueva y su alcance para empleadores privados podría ampliarse mediante futura reglamentación o enmienda — verifica actualizaciones.', pt: 'O TRAIGA é novo e seu escopo para empregadores privados pode ser ampliado por futura regulamentação ou emenda — verifique atualizações.', zh: 'TRAIGA是一项新法律，未来可能通过新规则制定或修订扩大其对私营雇主的适用范围——请关注更新。', ja: 'TRAIGAは新しい法律であり、今後の規則制定や改正により民間雇用主に対する適用範囲が拡大される可能性がある — 最新情報を確認すること。', ar: 'TRAIGA قانون جديد وقد يتوسّع نطاقه على أصحاب العمل من القطاع الخاص من خلال تنظيم أو تعديل مستقبلي — تحقّق من التحديثات.', ko: 'TRAIGA는 새로운 법률이며 향후 규칙 제정이나 개정을 통해 민간 고용주에 대한 범위가 확대될 수 있습니다 — 업데이트를 확인하십시오.' },
  },
  {
    id: 'nyc-ll144',
    name: { en: 'NYC Local Law 144 (Automated Employment Decision Tools)', de: 'NYC Local Law 144 (Automated Employment Decision Tools)', fr: 'NYC Local Law 144 (Automated Employment Decision Tools)', es: 'NYC Local Law 144 (Automated Employment Decision Tools)', pt: 'NYC Local Law 144 (Automated Employment Decision Tools)', zh: '纽约市第144号地方法（自动化雇佣决策工具）', ja: 'ニューヨーク市地方法144号（自動雇用意思決定ツール）', ar: 'قانون نيويورك المحلي رقم 144 (أدوات قرار التوظيف الآلي)', ko: '뉴욕시 지방법 144호(자동화된 고용 의사결정 도구)' },
    appliesWhen: (states) => states.includes('NYC'),
    effectiveDate: { en: 'Bias-audit and candidate-notice requirements have been enforceable since 2023. A December 2025 city audit found DCWP enforcement "ineffective," so expect a stricter enforcement phase; separate plain-language pre-decision notice requirements are referenced as taking effect October 1, 2027 — verify which level of government (city vs. state) that provision comes from before citing it.', de: 'Bias-Audit- und Bewerber-Mitteilungspflichten sind seit 2023 durchsetzbar. Ein Audit der Stadt vom Dezember 2025 stellte fest, dass die Durchsetzung durch das DCWP „unwirksam" ist — eine strengere Durchsetzungsphase ist daher zu erwarten; separate Pflichten zur verständlichen Vorab-Mitteilung werden mit Wirkung zum 1. Oktober 2027 genannt — vor Zitierung prüfen, von welcher Regierungsebene (Stadt oder Bundesstaat) diese Bestimmung stammt.', fr: 'Les exigences d\'audit de biais et de notification des candidats sont applicables depuis 2023. Un audit municipal de décembre 2025 a jugé l\'application par le DCWP « inefficace » — attendez-vous donc à une phase d\'application plus stricte ; des exigences distinctes de notification préalable en langage clair sont mentionnées comme entrant en vigueur le 1er octobre 2027 — vérifiez de quel niveau de gouvernement (ville ou État) provient cette disposition avant de la citer.', es: 'Los requisitos de auditoría de sesgo y notificación a candidatos son exigibles desde 2023. Una auditoría municipal de diciembre de 2025 determinó que la aplicación por parte del DCWP era "ineficaz", por lo que se espera una fase de aplicación más estricta; se mencionan requisitos separados de notificación previa en lenguaje claro con vigencia a partir del 1 de octubre de 2027 — verifica de qué nivel de gobierno (ciudad o estado) proviene esa disposición antes de citarla.', pt: 'Os requisitos de auditoria de viés e notificação a candidatos são aplicáveis desde 2023. Uma auditoria municipal de dezembro de 2025 considerou a aplicação pelo DCWP "ineficaz" — espera-se, portanto, uma fase de aplicação mais rigorosa; requisitos separados de notificação prévia em linguagem clara são referidos como entrando em vigor em 1º de outubro de 2027 — verifique de qual nível de governo (cidade ou estado) essa disposição vem antes de citá-la.', zh: '偏见审计和候选人通知要求自2023年起已可强制执行。2025年12月的一项市级审计发现DCWP的执法"无效"，因此预计将进入更严格的执法阶段；另有单独的通俗语言事前通知要求被提及将于2027年10月1日生效——引用前请核实该条款来自哪一级政府（市级还是州级）。', ja: 'バイアス監査および候補者への通知要件は2023年から施行されている。2025年12月の市の監査ではDCWPの執行が「効果的でない」とされたため、より厳格な執行段階が予想される。平易な言葉による事前決定通知に関する別の要件が2027年10月1日施行として言及されているが、引用前にこの規定がどの政府レベル（市か州か）由来か確認すること。', ar: 'متطلبات تدقيق التحيز وإشعار المرشحين قابلة للتنفيذ منذ عام 2023. وجد تدقيق للمدينة في ديسمبر 2025 أن إنفاذ DCWP "غير فعّال"، لذا يُتوقّع مرحلة إنفاذ أكثر صرامة؛ وتُذكر متطلبات منفصلة للإشعار المسبق بلغة واضحة بأنها تسري اعتبارًا من 1 أكتوبر 2027 — تحقّق من أي مستوى حكومي (المدينة أم الولاية) يصدر عنه هذا الحكم قبل الاستشهاد به.', ko: '편향 감사 및 후보자 통지 요건은 2023년부터 시행 가능합니다. 2025년 12월 시 감사에서 DCWP의 집행이 "비효율적"이라는 결과가 나와 더 엄격한 집행 단계가 예상됩니다. 2027년 10월 1일 시행으로 언급되는 별도의 평이한 언어 사전 결정 통지 요건은 인용 전에 어느 정부 수준(시 또는 주)에서 나온 조항인지 확인하십시오.' },
    artifact: { en: 'Annual independent bias audit of the AEDT, public summary of audit results, and advance candidate notice that an AEDT will be used.', de: 'Jährliches unabhängiges Bias-Audit des AEDT, öffentliche Zusammenfassung der Audit-Ergebnisse und vorherige Mitteilung an Bewerbende über den Einsatz eines AEDT.', fr: 'Audit de biais indépendant annuel de l\'AEDT, résumé public des résultats de l\'audit, et notification préalable aux candidats de l\'utilisation d\'un AEDT.', es: 'Auditoría de sesgo independiente anual del AEDT, resumen público de los resultados de la auditoría, y notificación previa a los candidatos de que se usará un AEDT.', pt: 'Auditoria de viés independente anual do AEDT, resumo público dos resultados da auditoria, e notificação prévia aos candidatos de que um AEDT será usado.', zh: '每年对AEDT进行独立偏见审计、公开审计结果摘要，并提前通知候选人将使用AEDT。', ja: 'AEDTの年次独立バイアス監査、監査結果の公開概要、AEDTを使用することの候補者への事前通知。', ar: 'تدقيق تحيّز مستقل سنوي لأداة AEDT، وملخص علني لنتائج التدقيق، وإشعار مسبق للمرشحين بأنه سيتم استخدام أداة AEDT.', ko: 'AEDT에 대한 연간 독립 편향 감사, 감사 결과의 공개 요약, AEDT가 사용될 것이라는 후보자 사전 통지.' },
    verify: { en: 'City enforcement is described as weak but under scrutiny — treat this as a rising-risk area, not a low-priority one, and confirm the source and status of any 2027 notice-content changes.', de: 'Die städtische Durchsetzung gilt als schwach, steht aber unter verstärkter Beobachtung — betrachten Sie dies als Bereich mit steigendem Risiko, nicht als niedrige Priorität, und bestätigen Sie Quelle und Status etwaiger Änderungen der Mitteilungsinhalte ab 2027.', fr: 'L\'application par la ville est décrite comme faible mais sous surveillance accrue — considérez-la comme une zone de risque croissant, pas de faible priorité, et confirmez la source et le statut de tout changement du contenu de notification pour 2027.', es: 'La aplicación por parte de la ciudad se describe como débil pero bajo escrutinio — trátalo como un área de riesgo creciente, no de baja prioridad, y confirma la fuente y el estado de cualquier cambio en el contenido de la notificación para 2027.', pt: 'A aplicação pela cidade é descrita como fraca, mas sob escrutínio — trate isso como uma área de risco crescente, não de baixa prioridade, e confirme a fonte e o status de quaisquer mudanças no conteúdo da notificação para 2027.', zh: '市级执法被描述为薄弱但正受到审视——请将其视为风险上升领域而非低优先级事项，并核实2027年通知内容变更的来源和状态。', ja: '市の執行は弱いとされているが監視が強化されている — これを低優先度ではなく、リスクが高まっている領域として扱い、2027年の通知内容変更の出典と状況を確認すること。', ar: 'يُوصَف إنفاذ المدينة بأنه ضعيف لكنه تحت المراقبة — تعامل مع هذا كمنطقة مخاطر متصاعدة وليست منخفضة الأولوية، وتأكّد من مصدر وحالة أي تغييرات في محتوى الإشعار لعام 2027.', ko: '시의 집행은 약하지만 면밀히 검토되고 있는 것으로 설명됩니다 — 이를 우선순위가 낮은 영역이 아니라 위험이 커지는 영역으로 취급하고, 2027년 통지 내용 변경 사항의 출처와 상태를 확인하십시오.' },
  },
]

export function StateAiLawApplicabilityChecker() {
  const lang = useLang() as Language
  const t = T[lang] ?? T.en
  const [states, setStates] = useState<StateKey[]>([])
  const [useCases, setUseCases] = useState<UseCaseKey[]>([])
  const [submitted, setSubmitted] = useState(false)

  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const matched = useMemo(
    () => LAWS.filter((law) => law.appliesWhen(states, useCases)),
    [states, useCases]
  )

  function toggleState(s: StateKey) {
    setStates((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
  }
  function toggleUseCase(u: UseCaseKey) {
    setUseCases((prev) => (prev.includes(u) ? prev.filter((x) => x !== u) : [...prev, u]))
  }
  function reset() {
    setStates([])
    setUseCases([])
    setSubmitted(false)
  }

  const canSubmit = states.length > 0 && useCases.length > 0

  if (submitted) {
    return (
      <div className="border border-primary/20 rounded-2xl p-6 bg-primary/5" dir={dir}>
        <h3 className="text-lg font-bold text-text-primary mb-1">{t.resultTitle}</h3>
        <p className="text-text-secondary text-sm mb-5">{t.resultIntro}</p>
        {matched.length === 0 ? (
          <div className="mb-5">
            <p className="text-sm font-bold text-text-primary mb-2">{t.noneTitle}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{t.noneText}</p>
          </div>
        ) : (
          <div className="space-y-4 mb-5">
            {matched.map((law) => (
              <div key={law.id} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-bold text-text-primary mb-2">{law.name[lang] ?? law.name.en}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-primary mb-1">{t.effectiveLabel}</p>
                <p className="text-sm text-text-secondary mb-2">{law.effectiveDate[lang] ?? law.effectiveDate.en}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-primary mb-1">{t.artifactLabel}</p>
                <p className="text-sm text-text-secondary mb-2">{law.artifact[lang] ?? law.artifact.en}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-orange-600 mb-1">{t.verifyLabel}</p>
                <p className="text-sm text-text-secondary">{law.verify[lang] ?? law.verify.en}</p>
              </div>
            ))}
          </div>
        )}
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

      <div className="mb-6">
        <p className="text-sm font-semibold text-text-primary mb-2">{t.statesLabel}</p>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(t.states) as StateKey[]).map((s) => {
            const selected = states.includes(s)
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggleState(s)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                  selected ? 'bg-primary text-white border-primary' : 'border-gray-300 text-text-secondary hover:border-primary/50'
                }`}
              >
                {t.states[s]}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-text-primary mb-2">{t.useCasesLabel}</p>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(t.useCases) as UseCaseKey[]).map((u) => {
            const selected = useCases.includes(u)
            return (
              <button
                key={u}
                type="button"
                onClick={() => toggleUseCase(u)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                  selected ? 'bg-primary text-white border-primary' : 'border-gray-300 text-text-secondary hover:border-primary/50'
                }`}
              >
                {t.useCases[u]}
              </button>
            )
          })}
        </div>
      </div>

      <button
        type="button"
        disabled={!canSubmit}
        onClick={() => setSubmitted(true)}
        className="mt-6 px-6 py-2.5 text-sm font-medium bg-primary text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
      >
        {t.resultTitle}
      </button>
    </div>
  )
}
