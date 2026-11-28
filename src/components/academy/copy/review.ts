// PromptQuorum Academy — texts for rereading an earlier lesson (segmented lesson bar, read-only screen).
// en is the source; the other eight follow docs/geo-translation.md per-language rules (de Sie, fr vous, es tú, pt você,
// ja です/ます, ko 합쇼체, ar MSA, zh Simplified). Machine-drafted: native review recommended (docs/academy/NOT-DONE.md).
// Keys are code-side identifiers: never translate them.

import type { AcademyLang } from '@/lib/academy/types'

export interface ReviewCopy {
  notice: string
  back: string
  noteTitle: string
  sectionAnswers: string
  tutorAnswers: string
  quizTitle: string
}

export const REVIEW_COPY: Record<AcademyLang, ReviewCopy> = {
  en: {
    notice: 'Read-only: you are rereading an earlier lesson. Tests cannot be taken again here.',
    back: 'Back to the current lesson',
    noteTitle: 'Your note',
    sectionAnswers: 'Saved AI answers for this section',
    tutorAnswers: 'Your saved AI tutor answers',
    quizTitle: 'Your result in the lesson quiz',
  },
  de: {
    notice: 'Nur lesen: Sie lesen eine frühere Lektion erneut. Tests können hier nicht wiederholt werden.',
    back: 'Zurück zur aktuellen Lektion',
    noteTitle: 'Ihre Notiz',
    sectionAnswers: 'Gespeicherte KI-Antworten zu diesem Abschnitt',
    tutorAnswers: 'Ihre gespeicherten Antworten des KI-Tutors',
    quizTitle: 'Ihr Ergebnis im Lektionsquiz',
  },
  fr: {
    notice: 'Lecture seule : vous relisez une leçon précédente. Les tests ne peuvent pas être repassés ici.',
    back: 'Revenir à la leçon en cours',
    noteTitle: 'Votre note',
    sectionAnswers: 'Réponses de l’IA enregistrées pour cette section',
    tutorAnswers: 'Vos réponses enregistrées du tuteur IA',
    quizTitle: 'Votre résultat au quiz de la leçon',
  },
  ja: {
    notice: '閲覧のみ：以前のレッスンを読み返しています。ここではテストを受け直せません。',
    back: '現在のレッスンに戻る',
    noteTitle: 'あなたのメモ',
    sectionAnswers: 'このセクションの保存されたAIの回答',
    tutorAnswers: '保存されたAIチューターの回答',
    quizTitle: 'レッスンクイズの結果',
  },
  zh: {
    notice: '只读：你正在重温之前的课程。此处无法重新参加测试。',
    back: '返回当前课程',
    noteTitle: '你的笔记',
    sectionAnswers: '本节已保存的 AI 回答',
    tutorAnswers: '已保存的 AI 导师回答',
    quizTitle: '你的课程测验结果',
  },
  es: {
    notice: 'Solo lectura: estás releyendo una lección anterior. Aquí no puedes repetir las pruebas.',
    back: 'Volver a la lección actual',
    noteTitle: 'Tu nota',
    sectionAnswers: 'Respuestas de la IA guardadas para esta sección',
    tutorAnswers: 'Tus respuestas guardadas del tutor de IA',
    quizTitle: 'Tu resultado en el cuestionario de la lección',
  },
  pt: {
    notice: 'Somente leitura: você está relendo uma lição anterior. Aqui não é possível refazer os testes.',
    back: 'Voltar à lição atual',
    noteTitle: 'Sua anotação',
    sectionAnswers: 'Respostas de IA salvas para esta seção',
    tutorAnswers: 'Suas respostas salvas do tutor de IA',
    quizTitle: 'Seu resultado no quiz da lição',
  },
  ar: {
    notice: 'للقراءة فقط: أنت تعيد قراءة درس سابق. لا يمكن إعادة الاختبارات هنا.',
    back: 'العودة إلى الدرس الحالي',
    noteTitle: 'ملاحظتك',
    sectionAnswers: 'إجابات الذكاء الاصطناعي المحفوظة لهذا القسم',
    tutorAnswers: 'إجابات المعلّم الآلي المحفوظة',
    quizTitle: 'نتيجتك في اختبار الدرس',
  },
  ko: {
    notice: '읽기 전용: 이전 레슨을 다시 읽고 있습니다. 여기에서는 테스트를 다시 볼 수 없습니다.',
    back: '현재 레슨으로 돌아가기',
    noteTitle: '내 메모',
    sectionAnswers: '이 섹션의 저장된 AI 답변',
    tutorAnswers: '저장된 AI 튜터 답변',
    quizTitle: '레슨 퀴즈 결과',
  },
}
