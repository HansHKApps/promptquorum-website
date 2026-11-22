// PromptQuorum Academy — texts of the learning record (total time, active time, answers) in all nine languages.
// Shown on the results screen and printed in the Course Documentation and on the certificate.

import type { AcademyLang } from '@/lib/academy/types'

export interface RecordCopy {
  title: string
  totalTime: string
  activeTime: string
  awayTime: string
  sessions: string
  inLessons: string
  inTests: string
  perQuestion: string
  answersTitle: string
  quickCheck: string
  lessonQuizzes: string
  finalTest: string
  /** "7 of 10 answered" */
  answeredOf: (answered: number, asked: number) => string
  /** "6 correct" (the number arrives already formatted) */
  correctN: (correct: string) => string
  tutor: string
  attempts: string
  /** the definition of the two times, printed with the record */
  rule: string
  /** short label on the certificate next to the active time */
  totalShort: string
}

const en: RecordCopy = {
  title: 'Your learning record',
  totalTime: 'Total time (start to finish, breaks included)',
  activeTime: 'Active time',
  awayTime: 'Time away (breaks and pauses)',
  sessions: 'Working sessions',
  inLessons: 'Active time in lessons',
  inTests: 'Active time in tests',
  perQuestion: 'Average active time per test question',
  answersTitle: 'Questions and answers',
  quickCheck: 'Quick check',
  lessonQuizzes: 'Lesson quizzes',
  finalTest: 'Final test',
  answeredOf: (a, n) => `${a} of ${n} answered`,
  correctN: (c) => `${c} correct`,
  tutor: 'Tutor requests',
  attempts: 'Final test attempts',
  rule: 'Active time counts while the page is visible and you did something (click, key press, scroll or touch) within the last minute. After one minute without an action you count as away until your next action, and the minute spent waiting is not credited. Total time runs from the start of the program to its completion and includes breaks. The quick check before the program is not included. Both times are measured in your browser and are not independently verified.',
  totalShort: 'total time',
}

const de: RecordCopy = {
  title: 'Ihr Lernprotokoll',
  totalTime: 'Gesamtzeit (vom Start bis zum Ende, Pausen eingeschlossen)',
  activeTime: 'Aktive Zeit',
  awayTime: 'Zeit abwesend (Pausen)',
  sessions: 'Lernsitzungen',
  inLessons: 'Aktive Zeit in Lektionen',
  inTests: 'Aktive Zeit in Tests',
  perQuestion: 'Durchschnittliche aktive Zeit pro Testfrage',
  answersTitle: 'Fragen und Antworten',
  quickCheck: 'Kurzcheck',
  lessonQuizzes: 'Lektionsquizze',
  finalTest: 'Abschlusstest',
  answeredOf: (a, n) => `${a} von ${n} beantwortet`,
  correctN: (c) => `${c} richtig`,
  tutor: 'Anfragen an den Tutor',
  attempts: 'Versuche beim Abschlusstest',
  rule: 'Die aktive Zeit zählt, solange die Seite sichtbar ist und Sie in der letzten Minute etwas getan haben (Klick, Tastendruck, Scrollen oder Berühren). Nach einer Minute ohne Aktion gelten Sie als abwesend, bis Sie wieder etwas tun; die Wartezeit dieser Minute wird nicht angerechnet. Die Gesamtzeit läuft vom Start des Programms bis zum Abschluss und enthält Pausen. Der Kurzcheck vor dem Programm ist nicht enthalten. Beide Zeiten werden in Ihrem Browser gemessen und nicht unabhängig geprüft.',
  totalShort: 'Gesamtzeit',
}

const fr: RecordCopy = {
  title: 'Votre relevé d’apprentissage',
  totalTime: 'Temps total (du début à la fin, pauses comprises)',
  activeTime: 'Temps actif',
  awayTime: 'Temps d’absence (pauses)',
  sessions: 'Séances de travail',
  inLessons: 'Temps actif dans les leçons',
  inTests: 'Temps actif dans les tests',
  perQuestion: 'Temps actif moyen par question de test',
  answersTitle: 'Questions et réponses',
  quickCheck: 'Test rapide',
  lessonQuizzes: 'Quiz de leçon',
  finalTest: 'Test final',
  answeredOf: (a, n) => `${a} sur ${n} répondues`,
  correctN: (c) => `${c} correcte(s)`,
  tutor: 'Demandes au tuteur',
  attempts: 'Tentatives au test final',
  rule: 'Le temps actif compte tant que la page est visible et que vous avez fait quelque chose (clic, touche, défilement ou toucher) au cours de la dernière minute. Après une minute sans action, vous êtes considéré comme absent jusqu’à votre prochaine action, et la minute d’attente n’est pas comptée. Le temps total court du début du programme à son achèvement et comprend les pauses. Le test rapide précédant le programme n’est pas inclus. Les deux durées sont mesurées dans votre navigateur et ne sont pas vérifiées de façon indépendante.',
  totalShort: 'temps total',
}

const es: RecordCopy = {
  title: 'Tu registro de aprendizaje',
  totalTime: 'Tiempo total (de principio a fin, pausas incluidas)',
  activeTime: 'Tiempo activo',
  awayTime: 'Tiempo ausente (pausas)',
  sessions: 'Sesiones de trabajo',
  inLessons: 'Tiempo activo en lecciones',
  inTests: 'Tiempo activo en pruebas',
  perQuestion: 'Tiempo activo medio por pregunta de prueba',
  answersTitle: 'Preguntas y respuestas',
  quickCheck: 'Prueba rápida',
  lessonQuizzes: 'Cuestionarios de lección',
  finalTest: 'Prueba final',
  answeredOf: (a, n) => `${a} de ${n} respondidas`,
  correctN: (c) => `${c} correctas`,
  tutor: 'Consultas al tutor',
  attempts: 'Intentos de la prueba final',
  rule: 'El tiempo activo cuenta mientras la página está visible y has hecho algo (clic, tecla, desplazamiento o toque) en el último minuto. Tras un minuto sin ninguna acción cuentas como ausente hasta tu siguiente acción, y el minuto de espera no se abona. El tiempo total va desde el inicio del programa hasta su finalización e incluye las pausas. La prueba rápida previa al programa no está incluida. Ambos tiempos se miden en tu navegador y no se verifican de forma independiente.',
  totalShort: 'tiempo total',
}

const pt: RecordCopy = {
  title: 'Seu registro de aprendizagem',
  totalTime: 'Tempo total (do início ao fim, incluindo pausas)',
  activeTime: 'Tempo ativo',
  awayTime: 'Tempo ausente (pausas)',
  sessions: 'Sessões de estudo',
  inLessons: 'Tempo ativo nas aulas',
  inTests: 'Tempo ativo nos testes',
  perQuestion: 'Tempo ativo médio por pergunta de teste',
  answersTitle: 'Perguntas e respostas',
  quickCheck: 'Teste rápido',
  lessonQuizzes: 'Questionários das aulas',
  finalTest: 'Teste final',
  answeredOf: (a, n) => `${a} de ${n} respondidas`,
  correctN: (c) => `${c} corretas`,
  tutor: 'Pedidos ao tutor',
  attempts: 'Tentativas do teste final',
  rule: 'O tempo ativo conta enquanto a página está visível e você fez algo (clique, tecla, rolagem ou toque) no último minuto. Depois de um minuto sem nenhuma ação, você conta como ausente até a próxima ação, e o minuto de espera não é creditado. O tempo total vai do início do programa até sua conclusão e inclui as pausas. O teste rápido anterior ao programa não está incluído. Os dois tempos são medidos no seu navegador e não são verificados de forma independente.',
  totalShort: 'tempo total',
}

const ja: RecordCopy = {
  title: '学習記録',
  totalTime: '合計時間（開始から終了まで、休憩を含む）',
  activeTime: 'アクティブ時間',
  awayTime: '離席時間（休憩など）',
  sessions: '学習セッション数',
  inLessons: 'レッスンでのアクティブ時間',
  inTests: 'テストでのアクティブ時間',
  perQuestion: 'テスト1問あたりの平均アクティブ時間',
  answersTitle: '質問と回答',
  quickCheck: 'クイックチェック',
  lessonQuizzes: 'レッスンのクイズ',
  finalTest: '修了テスト',
  answeredOf: (a, n) => `${n}問中${a}問に回答`,
  correctN: (c) => `正解 ${c}`,
  tutor: 'チューターへの質問',
  attempts: '修了テストの受験回数',
  rule: 'アクティブ時間は、ページが表示されていて、直近1分以内に操作（クリック、キー入力、スクロール、タッチ）があった間だけ加算されます。1分間操作がないと、次の操作まで離席扱いとなり、待った1分は加算されません。合計時間はプログラムの開始から修了までの時間で、休憩も含みます。プログラム前のクイックチェックは含まれません。どちらの時間もお使いのブラウザで計測されたもので、第三者による検証は行われていません。',
  totalShort: '合計時間',
}

const zh: RecordCopy = {
  title: '学习记录',
  totalTime: '总时长（从开始到结束，含休息）',
  activeTime: '有效学习时长',
  awayTime: '离开时长（休息、暂停）',
  sessions: '学习次数',
  inLessons: '课程中的有效时长',
  inTests: '测试中的有效时长',
  perQuestion: '每道测试题的平均有效时长',
  answersTitle: '题目与作答',
  quickCheck: '快速检测',
  lessonQuizzes: '课程小测',
  finalTest: '结业测试',
  answeredOf: (a, n) => `共 ${n} 题，已作答 ${a} 题`,
  correctN: (c) => `答对 ${c}`,
  tutor: '向导师提问次数',
  attempts: '结业测试次数',
  rule: '只有在页面可见、且最近一分钟内有操作（点击、按键、滚动或触摸）时才计入有效时长。超过一分钟没有操作，则视为离开，直到下一次操作为止，等待的那一分钟不计入。总时长从课程开始计算到完成，包含休息时间。课程开始前的快速检测不计入。两项时长均由浏览器记录，未经独立核实。',
  totalShort: '总时长',
}

const ar: RecordCopy = {
  title: 'سجل تعلّمك',
  totalTime: 'الوقت الكلي (من البداية إلى النهاية، مع فترات الراحة)',
  activeTime: 'الوقت الفعلي',
  awayTime: 'وقت الغياب (فترات الراحة والتوقف)',
  sessions: 'جلسات التعلّم',
  inLessons: 'الوقت الفعلي في الدروس',
  inTests: 'الوقت الفعلي في الاختبارات',
  perQuestion: 'متوسط الوقت الفعلي لكل سؤال اختبار',
  answersTitle: 'الأسئلة والإجابات',
  quickCheck: 'الفحص السريع',
  lessonQuizzes: 'اختبارات الدروس',
  finalTest: 'الاختبار النهائي',
  answeredOf: (a, n) => `تمت الإجابة عن ${a} من ${n}`,
  correctN: (c) => `${c} صحيحة`,
  tutor: 'طلبات المعلّم الآلي',
  attempts: 'محاولات الاختبار النهائي',
  rule: 'يُحتسب الوقت الفعلي ما دامت الصفحة ظاهرة وقمتَ بإجراء ما (نقرة أو ضغطة مفتاح أو تمرير أو لمس) خلال الدقيقة الأخيرة. وبعد دقيقة دون أي إجراء تُعدّ غائبًا حتى إجرائك التالي، ولا تُحتسب دقيقة الانتظار. أما الوقت الكلي فيمتد من بداية البرنامج حتى إتمامه ويشمل فترات الراحة. ولا يشمل الفحص السريع الذي يسبق البرنامج. يُقاس الوقتان في متصفحك ولا يجري التحقق منهما بشكل مستقل.',
  totalShort: 'الوقت الكلي',
}

const ko: RecordCopy = {
  title: '학습 기록',
  totalTime: '총 시간(시작부터 끝까지, 휴식 포함)',
  activeTime: '활동 시간',
  awayTime: '자리 비운 시간(휴식 등)',
  sessions: '학습 세션 수',
  inLessons: '수업에서의 활동 시간',
  inTests: '테스트에서의 활동 시간',
  perQuestion: '테스트 문항당 평균 활동 시간',
  answersTitle: '문제와 답안',
  quickCheck: '빠른 점검',
  lessonQuizzes: '수업 퀴즈',
  finalTest: '최종 테스트',
  answeredOf: (a, n) => `${n}문항 중 ${a}문항 응답`,
  correctN: (c) => `정답 ${c}`,
  tutor: '튜터 질문 수',
  attempts: '최종 테스트 응시 횟수',
  rule: '활동 시간은 페이지가 표시되어 있고 최근 1분 안에 조작(클릭, 키 입력, 스크롤, 터치)이 있었던 동안만 계산됩니다. 1분 동안 조작이 없으면 다음 조작 전까지 자리를 비운 것으로 보며, 기다린 그 1분은 포함되지 않습니다. 총 시간은 프로그램 시작부터 완료까지이며 휴식도 포함합니다. 프로그램 전의 빠른 점검은 포함되지 않습니다. 두 시간 모두 브라우저에서 측정되며 독립적으로 검증되지 않았습니다.',
  totalShort: '총 시간',
}

export const RECORD_COPY: Record<AcademyLang, RecordCopy> = { en, de, fr, es, pt, ja, zh, ar, ko }
