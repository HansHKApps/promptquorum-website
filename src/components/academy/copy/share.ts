// PromptQuorum Academy — texts for the share buttons (WhatsApp, Telegram, email, copy, Word, PDF), all nine languages.
// Brand names (WhatsApp, Telegram, Word, PDF) are not translated.

import type { AcademyLang } from '@/lib/academy/types'

export interface ShareCopy {
  plan: string
  result: string
  copy: string
  copied: string
  intro: (subject: string) => string
  done: (subject: string, percent: number) => string
  tryIt: string
  docTitle: string
  objectives: string
  lessons: string
}

export const SHARE_COPY: Record<AcademyLang, ShareCopy> = {
  en: {
    plan: 'Share this learning plan',
    result: 'Share your result',
    copy: 'Copy',
    copied: 'Copied',
    intro: (s) => `I'm learning “${s}” with PromptQuorum Academy: free, personalized AI learning.`,
    done: (s, p) => `I completed “${s}” on PromptQuorum Academy and scored ${p}%.`,
    tryIt: 'Try it free:',
    docTitle: 'Learning plan',
    objectives: 'Objectives',
    lessons: 'Lessons',
  },
  de: {
    plan: 'Dieses Programm teilen',
    result: 'Ergebnis teilen',
    copy: 'Kopieren',
    copied: 'Kopiert',
    intro: (s) => `Ich lerne „${s}“ mit der PromptQuorum Academy: persönliches KI-Lernen, kostenlos.`,
    done: (s, p) => `Ich habe „${s}“ in der PromptQuorum Academy abgeschlossen und ${p} % erreicht.`,
    tryIt: 'Kostenlos ausprobieren:',
    docTitle: 'Programm',
    objectives: 'Lernziele',
    lessons: 'Lektionen',
  },
  fr: {
    plan: 'Partager ce programme',
    result: 'Partager mon résultat',
    copy: 'Copier',
    copied: 'Copié',
    intro: (s) => `J’apprends « ${s} » avec PromptQuorum Academy : apprentissage de l’IA personnalisé et gratuit.`,
    done: (s, p) => `J’ai terminé « ${s} » sur PromptQuorum Academy avec un score de ${p} %.`,
    tryIt: 'Essayez gratuitement :',
    docTitle: 'Programme',
    objectives: 'Objectifs',
    lessons: 'Leçons',
  },
  es: {
    plan: 'Compartir este programa',
    result: 'Compartir mi resultado',
    copy: 'Copiar',
    copied: 'Copiado',
    intro: (s) => `Estoy aprendiendo «${s}» con PromptQuorum Academy: aprendizaje de IA personalizado y gratis.`,
    done: (s, p) => `He completado «${s}» en PromptQuorum Academy con un resultado del ${p} %.`,
    tryIt: 'Pruébalo gratis:',
    docTitle: 'Programa',
    objectives: 'Objetivos',
    lessons: 'Lecciones',
  },
  pt: {
    plan: 'Compartilhar este programa',
    result: 'Compartilhar meu resultado',
    copy: 'Copiar',
    copied: 'Copiado',
    intro: (s) => `Estou aprendendo “${s}” com a PromptQuorum Academy: aprendizado de IA personalizado e grátis.`,
    done: (s, p) => `Concluí “${s}” na PromptQuorum Academy e tive ${p}% de acertos.`,
    tryIt: 'Experimente grátis:',
    docTitle: 'Programa',
    objectives: 'Objetivos',
    lessons: 'Aulas',
  },
  ja: {
    plan: 'このプログラムを共有',
    result: '結果を共有',
    copy: 'コピー',
    copied: 'コピーしました',
    intro: (s) => `PromptQuorum Academyで「${s}」を学んでいます。パーソナライズされたAI学習（無料）です。`,
    done: (s, p) => `PromptQuorum Academyで「${s}」を修了し、正答率は${p}%でした。`,
    tryIt: '無料でお試しいただけます：',
    docTitle: 'プログラム',
    objectives: '学習目標',
    lessons: 'レッスン',
  },
  zh: {
    plan: '分享这个学习计划',
    result: '分享我的成绩',
    copy: '复制',
    copied: '已复制',
    intro: (s) => `我正在 PromptQuorum Academy 学习“${s}”：个性化 AI 学习，免费。`,
    done: (s, p) => `我在 PromptQuorum Academy 完成了“${s}”，得分 ${p}%。`,
    tryIt: '免费试用：',
    docTitle: '学习计划',
    objectives: '学习目标',
    lessons: '课程',
  },
  ar: {
    plan: 'مشاركة هذا البرنامج',
    result: 'مشاركة نتيجتي',
    copy: 'نسخ',
    copied: 'تم النسخ',
    intro: (s) => `أتعلّم «${s}» مع PromptQuorum Academy: تعلّم مخصص للذكاء الاصطناعي، مجانًا.`,
    done: (s, p) => `أنهيت «${s}» في PromptQuorum Academy وحققت نتيجة ${p}%.`,
    tryIt: 'جرّبه مجانًا:',
    docTitle: 'البرنامج',
    objectives: 'الأهداف',
    lessons: 'الدروس',
  },
  ko: {
    plan: '이 프로그램 공유',
    result: '결과 공유',
    copy: '복사',
    copied: '복사됨',
    intro: (s) => `PromptQuorum Academy에서 “${s}” 과정을 배우고 있습니다. 맞춤형 AI 학습, 무료입니다.`,
    done: (s, p) => `PromptQuorum Academy에서 “${s}” 과정을 마치고 ${p}%를 받았습니다.`,
    tryIt: '무료로 이용하실 수 있습니다:',
    docTitle: '프로그램',
    objectives: '학습 목표',
    lessons: '레슨',
  },
}
