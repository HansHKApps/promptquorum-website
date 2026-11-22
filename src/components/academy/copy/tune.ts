// PromptQuorum Academy — texts for fine-tuning the topics on the programme overview (per-topic wish, Confirm, free line).
// en is the source; the other eight follow docs/geo-translation.md per-language rules (de Sie, fr vous, es tú, pt você,
// ja です/ます, ko 합쇼체, ar MSA, zh Simplified). Machine-drafted: native review recommended (docs/academy/NOT-DONE.md).
// Keys are code-side identifiers: never translate them.

import type { AcademyLang } from '@/lib/academy/types'

export interface TuneCopy {
  /** toggle label on a topic row */
  open: string
  close: string
  /** badges on a topic row */
  confirmedBadge: string
  adjustedBadge: string
  /** panel */
  coversTitle: string
  noteLabel: string
  notePlaceholder: string
  counter: (used: number, max: number) => string
  confirm: string
  confirmNote: string
  confirmedHint: string
  /** shown when the lesson text already exists and the wish changed */
  rewriteHint: string
  rewrite: string
  /** free line */
  freeTitle: string
  freeHint: string
  freePlaceholder: string
  freeSave: string
  freeSaved: string
  privacy: string
}

const en: TuneCopy = {
  open: 'Fine-tune',
  close: 'Close',
  confirmedBadge: 'Confirmed',
  adjustedBadge: 'Your wish added',
  coversTitle: 'What this lesson covers',
  noteLabel: 'Anything you want changed or added for this topic? (optional)',
  notePlaceholder: 'For example: more practical examples, less theory, focus on Mac, keep it short.',
  counter: (u, m) => `${u} / ${m}`,
  confirm: 'Confirm as it is',
  confirmNote: 'Confirm with my wish',
  confirmedHint: 'Saved. The lesson will be written with your wish.',
  rewriteHint: 'This lesson is already written. Your new wish only applies if it is written again.',
  rewrite: 'Rewrite this lesson with my wish',
  freeTitle: 'Your own wish for the whole program',
  freeHint: 'Free text, optional. It does not change any topic above. It is passed along when each lesson that is not written yet is created.',
  freePlaceholder: 'For example: I use a laptop without a graphics card; explain things with everyday comparisons.',
  freeSave: 'Save my wish',
  freeSaved: 'Saved',
  privacy: 'Please do not enter personal data. Your text is sent to the AI that writes the lesson and stays in this browser otherwise.',
}

const de: TuneCopy = {
  open: 'Feinjustieren',
  close: 'Schließen',
  confirmedBadge: 'Bestätigt',
  adjustedBadge: 'Ihr Wunsch ergänzt',
  coversTitle: 'Was diese Lektion behandelt',
  noteLabel: 'Möchten Sie bei diesem Thema etwas ändern oder ergänzen? (optional)',
  notePlaceholder: 'Zum Beispiel: mehr praktische Beispiele, weniger Theorie, Schwerpunkt Mac, eher kurz halten.',
  counter: (u, m) => `${u} / ${m}`,
  confirm: 'So bestätigen',
  confirmNote: 'Mit meinem Wunsch bestätigen',
  confirmedHint: 'Gespeichert. Die Lektion wird mit Ihrem Wunsch geschrieben.',
  rewriteHint: 'Diese Lektion ist schon geschrieben. Ihr neuer Wunsch gilt nur, wenn sie neu geschrieben wird.',
  rewrite: 'Lektion mit meinem Wunsch neu schreiben',
  freeTitle: 'Ihr eigener Wunsch für das ganze Programm',
  freeHint: 'Freier Text, optional. Er ändert kein Thema oben. Er wird mitgegeben, wenn eine noch nicht geschriebene Lektion erstellt wird.',
  freePlaceholder: 'Zum Beispiel: Ich nutze einen Laptop ohne Grafikkarte; erklären Sie mit Alltagsvergleichen.',
  freeSave: 'Wunsch speichern',
  freeSaved: 'Gespeichert',
  privacy: 'Bitte geben Sie keine persönlichen Daten ein. Ihr Text wird an die KI gesendet, die die Lektion schreibt, und bleibt sonst in diesem Browser.',
}

const fr: TuneCopy = {
  open: 'Personnaliser',
  close: 'Fermer',
  confirmedBadge: 'Confirmé',
  adjustedBadge: 'Votre souhait ajouté',
  coversTitle: 'Ce que couvre cette leçon',
  noteLabel: 'Souhaitez-vous modifier ou ajouter quelque chose pour ce sujet ? (facultatif)',
  notePlaceholder: 'Par exemple : plus d’exemples pratiques, moins de théorie, accent sur Mac, rester court.',
  counter: (u, m) => `${u} / ${m}`,
  confirm: 'Confirmer tel quel',
  confirmNote: 'Confirmer avec mon souhait',
  confirmedHint: 'Enregistré. La leçon sera rédigée avec votre souhait.',
  rewriteHint: 'Cette leçon est déjà rédigée. Votre nouveau souhait ne s’applique que si elle est rédigée à nouveau.',
  rewrite: 'Réécrire cette leçon avec mon souhait',
  freeTitle: 'Votre propre souhait pour tout le programme',
  freeHint: 'Texte libre, facultatif. Il ne modifie aucun sujet ci-dessus. Il est transmis lors de la création de chaque leçon pas encore rédigée.',
  freePlaceholder: 'Par exemple : j’utilise un portable sans carte graphique ; expliquez avec des comparaisons du quotidien.',
  freeSave: 'Enregistrer mon souhait',
  freeSaved: 'Enregistré',
  privacy: 'Merci de ne pas saisir de données personnelles. Votre texte est envoyé à l’IA qui rédige la leçon et reste sinon dans ce navigateur.',
}

const es: TuneCopy = {
  open: 'Ajustar',
  close: 'Cerrar',
  confirmedBadge: 'Confirmado',
  adjustedBadge: 'Tu deseo añadido',
  coversTitle: 'Qué cubre esta lección',
  noteLabel: '¿Quieres cambiar o añadir algo en este tema? (opcional)',
  notePlaceholder: 'Por ejemplo: más ejemplos prácticos, menos teoría, centrarse en Mac, que sea breve.',
  counter: (u, m) => `${u} / ${m}`,
  confirm: 'Confirmar tal cual',
  confirmNote: 'Confirmar con mi deseo',
  confirmedHint: 'Guardado. La lección se escribirá con tu deseo.',
  rewriteHint: 'Esta lección ya está escrita. Tu nuevo deseo solo se aplica si se escribe de nuevo.',
  rewrite: 'Reescribir esta lección con mi deseo',
  freeTitle: 'Tu propio deseo para todo el programa',
  freeHint: 'Texto libre, opcional. No cambia ningún tema de arriba. Se envía al crear cada lección que aún no está escrita.',
  freePlaceholder: 'Por ejemplo: uso un portátil sin tarjeta gráfica; explica con comparaciones cotidianas.',
  freeSave: 'Guardar mi deseo',
  freeSaved: 'Guardado',
  privacy: 'Por favor, no escribas datos personales. Tu texto se envía a la IA que escribe la lección y, por lo demás, se queda en este navegador.',
}

const pt: TuneCopy = {
  open: 'Ajustar',
  close: 'Fechar',
  confirmedBadge: 'Confirmado',
  adjustedBadge: 'Seu pedido adicionado',
  coversTitle: 'O que esta aula aborda',
  noteLabel: 'Você quer mudar ou acrescentar algo neste tema? (opcional)',
  notePlaceholder: 'Por exemplo: mais exemplos práticos, menos teoria, foco em Mac, manter curto.',
  counter: (u, m) => `${u} / ${m}`,
  confirm: 'Confirmar como está',
  confirmNote: 'Confirmar com o meu pedido',
  confirmedHint: 'Salvo. A aula será escrita com o seu pedido.',
  rewriteHint: 'Esta aula já foi escrita. Seu novo pedido só vale se ela for escrita de novo.',
  rewrite: 'Reescrever esta aula com o meu pedido',
  freeTitle: 'Seu próprio pedido para o programa inteiro',
  freeHint: 'Texto livre, opcional. Ele não altera nenhum tema acima. É enviado quando cada aula ainda não escrita é criada.',
  freePlaceholder: 'Por exemplo: uso um notebook sem placa de vídeo; explique com comparações do dia a dia.',
  freeSave: 'Salvar meu pedido',
  freeSaved: 'Salvo',
  privacy: 'Por favor, não digite dados pessoais. Seu texto é enviado à IA que escreve a aula e, fora isso, fica neste navegador.',
}

const ja: TuneCopy = {
  open: '細かく調整',
  close: '閉じる',
  confirmedBadge: '確認済み',
  adjustedBadge: 'ご希望を追加済み',
  coversTitle: 'このレッスンの内容',
  noteLabel: 'このトピックについて、変更したい点や追加したい点はありますか？（任意）',
  notePlaceholder: '例：実践的な例を増やす、理論は少なめ、Mac中心、短めにまとめる。',
  counter: (u, m) => `${u} / ${m}`,
  confirm: 'このまま確認する',
  confirmNote: 'ご希望つきで確認する',
  confirmedHint: '保存しました。レッスンはご希望を反映して作成されます。',
  rewriteHint: 'このレッスンはすでに作成済みです。新しいご希望は、作成し直した場合のみ反映されます。',
  rewrite: 'ご希望に合わせてレッスンを作り直す',
  freeTitle: 'プログラム全体へのご自由なご希望',
  freeHint: '自由入力、任意です。上のトピックは変更されません。まだ作成されていない各レッスンの作成時に、あわせて渡されます。',
  freePlaceholder: '例：グラフィックスカードのないノートPCを使っています。身近なたとえで説明してください。',
  freeSave: 'ご希望を保存',
  freeSaved: '保存しました',
  privacy: '個人情報は入力しないでください。入力内容は、レッスンを作成するAIに送信され、それ以外はこのブラウザ内にのみ残ります。',
}

const zh: TuneCopy = {
  open: '精细调整',
  close: '关闭',
  confirmedBadge: '已确认',
  adjustedBadge: '已加入你的要求',
  coversTitle: '本课内容',
  noteLabel: '你想为这个主题修改或补充什么吗？（可选）',
  notePlaceholder: '例如：多一些实用示例、少一些理论、侧重 Mac、内容精简。',
  counter: (u, m) => `${u} / ${m}`,
  confirm: '按原样确认',
  confirmNote: '带上我的要求确认',
  confirmedHint: '已保存。本课将按你的要求编写。',
  rewriteHint: '这节课已经写好。你的新要求只有在重新编写后才会生效。',
  rewrite: '按我的要求重写这节课',
  freeTitle: '你对整个课程的自由要求',
  freeHint: '自由输入，可选。不会改动上面的任何主题。每节尚未编写的课程在生成时会一并带上它。',
  freePlaceholder: '例如：我用的笔记本电脑没有独立显卡；请用生活中的类比来讲解。',
  freeSave: '保存我的要求',
  freeSaved: '已保存',
  privacy: '请不要输入个人信息。你的文字会发送给编写课程的 AI，其余只保存在此浏览器中。',
}

const ar: TuneCopy = {
  open: 'ضبط دقيق',
  close: 'إغلاق',
  confirmedBadge: 'تم التأكيد',
  adjustedBadge: 'أُضيف طلبك',
  coversTitle: 'ما يتناوله هذا الدرس',
  noteLabel: 'هل تريد تغيير شيء أو إضافته في هذا الموضوع؟ (اختياري)',
  notePlaceholder: 'مثلًا: أمثلة عملية أكثر، نظرية أقل، التركيز على Mac، الاختصار.',
  counter: (u, m) => `${u} / ${m}`,
  confirm: 'تأكيد كما هو',
  confirmNote: 'تأكيد مع طلبي',
  confirmedHint: 'تم الحفظ. سيُكتب الدرس وفق طلبك.',
  rewriteHint: 'هذا الدرس مكتوب بالفعل. لن يُطبَّق طلبك الجديد إلا إذا أُعيدت كتابته.',
  rewrite: 'أعد كتابة هذا الدرس وفق طلبي',
  freeTitle: 'طلبك الخاص للبرنامج كله',
  freeHint: 'نص حر واختياري. لا يغيّر أي موضوع في الأعلى. يُرسَل عند إنشاء كل درس لم يُكتب بعد.',
  freePlaceholder: 'مثلًا: أستخدم حاسوبًا محمولًا بلا بطاقة رسوميات؛ اشرح بتشبيهات من الحياة اليومية.',
  freeSave: 'احفظ طلبي',
  freeSaved: 'تم الحفظ',
  privacy: 'يُرجى عدم إدخال بيانات شخصية. يُرسَل نصك إلى الذكاء الاصطناعي الذي يكتب الدرس، وفيما عدا ذلك يبقى في هذا المتصفح.',
}

const ko: TuneCopy = {
  open: '세부 조정',
  close: '닫기',
  confirmedBadge: '확인됨',
  adjustedBadge: '요청 사항 추가됨',
  coversTitle: '이 레슨에서 다루는 내용',
  noteLabel: '이 주제에서 바꾸거나 추가하고 싶은 점이 있습니까? (선택)',
  notePlaceholder: '예: 실용적인 예시를 더 많이, 이론은 적게, Mac 중심, 짧게 정리.',
  counter: (u, m) => `${u} / ${m}`,
  confirm: '이대로 확인',
  confirmNote: '요청 사항과 함께 확인',
  confirmedHint: '저장되었습니다. 레슨은 요청 사항을 반영하여 작성됩니다.',
  rewriteHint: '이 레슨은 이미 작성되었습니다. 새 요청 사항은 다시 작성할 때만 반영됩니다.',
  rewrite: '내 요청 사항으로 레슨 다시 작성',
  freeTitle: '프로그램 전체에 대한 자유 요청',
  freeHint: '자유 입력이며 선택 사항입니다. 위의 주제는 바뀌지 않습니다. 아직 작성되지 않은 각 레슨을 만들 때 함께 전달됩니다.',
  freePlaceholder: '예: 그래픽 카드가 없는 노트북을 사용합니다. 일상적인 비유로 설명해 주십시오.',
  freeSave: '요청 사항 저장',
  freeSaved: '저장됨',
  privacy: '개인 정보는 입력하지 마십시오. 입력한 내용은 레슨을 작성하는 AI에 전송되며, 그 밖에는 이 브라우저에만 남습니다.',
}

export const TUNE_COPY: Record<AcademyLang, TuneCopy> = { en, de, fr, es, pt, ja, zh, ar, ko }
