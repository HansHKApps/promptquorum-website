// User-facing copy for the `start` / consent flow. The consent screen and the
// consent-related replies are authored natively per locale (they are legal
// text). The menu/marketing body is English and the assistant translates it.
//
// Accuracy rule: every statement here must match what handlers.ts and
// profile-store.ts actually do. Release 1 stores ONLY: consent timestamp,
// consent text version, preferred language, created/last-seen timestamps.
// If more data is ever stored, bump CONSENT_VERSION and re-ask.

export const CONSENT_VERSION = '2026-10-v1'
export const PROFILE_TTL_MONTHS = 6

export type StartLang = 'en' | 'de' | 'fr' | 'es' | 'pt' | 'ja' | 'zh' | 'ko' | 'ar'
export const START_LANGS: readonly StartLang[] = ['en', 'de', 'fr', 'es', 'pt', 'ja', 'zh', 'ko', 'ar']

export const LANG_NAMES: Record<StartLang, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  pt: 'Português (Brasil)',
  ja: '日本語',
  zh: '简体中文',
  ko: '한국어',
  ar: 'العربية',
}

export interface ConsentCopy {
  title: string
  intro: string
  yesHeading: string
  yesBody: string
  yesBullets: string[]
  noHeading: string
  noText: string
  rights: string
  prompt: string
  counts: string
  saved: string
  declined: string
  withdrawn: string
  unavailable: string
  forgot: string
  unknownCode: string
  welcomeBack: string
  welcome: string
  langSet: string
  langNotSaved: string
  langSaved: string
  profileHeading: string
}

// Placeholders: {apps} {langs} {region} {contact} {privacyUrl} {code} {language} {months}
export const CONSENT_COPY: Record<StartLang, ConsentCopy> = {
  en: {
    title: 'Before we start — one quick privacy question',
    intro: 'PromptQuorum can remember a few things between sessions. It is your choice, and the directory works fully either way.',
    yesHeading: 'If you say YES, we save (pseudonymous, stored in {region}):',
    yesBody: 'your preferred language and the date you gave this consent, tied to a random profile code — no name, no email, no IP address. In return:',
    yesBullets: [
      'your language is remembered, so you do not have to set it again',
      'a personalised "welcome back" menu when you start with your code',
      'future profile features (such as saved hardware or shortlists) will build on this profile — and we will ask you again before saving anything new',
    ],
    noHeading: 'If you say NO:',
    noText: 'nothing is saved. Search, compare, hardware-check and article tools work exactly the same.',
    rights: 'Profiles are deleted after {months} months without use. You can delete everything at any time by saying "forget me", and see what is stored by saying "my profile". Details: {privacyUrl} · Controller: PromptQuorum · Contact: {contact}',
    prompt: 'Reply "yes" to save my profile, or "no" to continue without saving.',
    counts: '{apps} local-AI apps · {langs} languages',
    saved: 'Saved. Your profile code is:\n\n{code}\n\nKeep it somewhere safe — anyone with the code can use this profile. In a new conversation, say: "start with code {code}".',
    declined: 'Understood — nothing was saved. Everything else works exactly the same.',
    withdrawn: 'Consent withdrawn and your saved profile was deleted.',
    unavailable: 'Saving profiles is not available right now, so nothing was stored. Everything else works exactly the same.',
    forgot: 'Done — your profile and consent record were deleted.',
    unknownCode: 'That profile code is unknown or has expired. Nothing is stored for it.',
    welcomeBack: 'Welcome back!',
    welcome: 'Welcome!',
    langSet: 'Language set to {language}.',
    langNotSaved: 'Not saved to a profile (no profile code or no consent) — it applies to this conversation only.',
    langSaved: 'Also saved to your profile.',
    profileHeading: 'What PromptQuorum has stored for this profile code:',
  },
  de: {
    title: 'Bevor wir starten — eine kurze Datenschutzfrage',
    intro: 'PromptQuorum kann sich zwischen Sitzungen ein paar Dinge merken. Die Entscheidung liegt bei Ihnen, das Verzeichnis funktioniert in beiden Fällen vollständig.',
    yesHeading: 'Wenn Sie JA sagen, speichern wir (pseudonym, gespeichert in {region}):',
    yesBody: 'Ihre bevorzugte Sprache und das Datum dieser Einwilligung, verknüpft mit einem zufälligen Profilcode — ohne Namen, E-Mail-Adresse oder IP-Adresse. Dafür erhalten Sie:',
    yesBullets: [
      'Ihre Sprache wird gemerkt, Sie müssen sie nicht erneut einstellen',
      'ein personalisiertes „Willkommen zurück“-Menü, wenn Sie mit Ihrem Code starten',
      'künftige Profilfunktionen (etwa gespeicherte Hardware oder Merklisten) bauen auf diesem Profil auf — vor dem Speichern neuer Daten fragen wir Sie erneut',
    ],
    noHeading: 'Wenn Sie NEIN sagen:',
    noText: 'wird nichts gespeichert. Such-, Vergleichs-, Hardware-Check- und Artikel-Werkzeuge funktionieren genauso.',
    rights: 'Profile werden nach {months} Monaten ohne Nutzung gelöscht. Sie können jederzeit alles löschen, indem Sie „vergiss mich“ sagen, und mit „mein Profil“ einsehen, was gespeichert ist. Details: {privacyUrl} · Verantwortlicher: PromptQuorum · Kontakt: {contact}',
    prompt: 'Antworten Sie „ja“, um mein Profil zu speichern, oder „nein“, um ohne Speichern fortzufahren.',
    counts: '{apps} lokale KI-Apps · {langs} Sprachen',
    saved: 'Gespeichert. Ihr Profilcode lautet:\n\n{code}\n\nBewahren Sie ihn sicher auf — wer den Code hat, kann dieses Profil nutzen. In einer neuen Unterhaltung sagen Sie: „Start mit Code {code}“.',
    declined: 'Verstanden — es wurde nichts gespeichert. Alles andere funktioniert genauso.',
    withdrawn: 'Einwilligung widerrufen, Ihr gespeichertes Profil wurde gelöscht.',
    unavailable: 'Das Speichern von Profilen ist derzeit nicht verfügbar, daher wurde nichts gespeichert. Alles andere funktioniert genauso.',
    forgot: 'Erledigt — Ihr Profil und Ihr Einwilligungsnachweis wurden gelöscht.',
    unknownCode: 'Dieser Profilcode ist unbekannt oder abgelaufen. Dazu ist nichts gespeichert.',
    welcomeBack: 'Willkommen zurück!',
    welcome: 'Willkommen!',
    langSet: 'Sprache auf {language} gestellt.',
    langNotSaved: 'Nicht in einem Profil gespeichert (kein Profilcode oder keine Einwilligung) — gilt nur für diese Unterhaltung.',
    langSaved: 'Zusätzlich in Ihrem Profil gespeichert.',
    profileHeading: 'Das hat PromptQuorum zu diesem Profilcode gespeichert:',
  },
  fr: {
    title: 'Avant de commencer — une question rapide sur la confidentialité',
    intro: 'PromptQuorum peut mémoriser quelques éléments d’une session à l’autre. C’est votre choix, et l’annuaire fonctionne pleinement dans les deux cas.',
    yesHeading: 'Si vous répondez OUI, nous enregistrons (pseudonymisé, stocké dans : {region}) :',
    yesBody: 'votre langue préférée et la date de ce consentement, liées à un code de profil aléatoire — ni nom, ni e-mail, ni adresse IP. En échange :',
    yesBullets: [
      'votre langue est mémorisée, inutile de la redéfinir',
      'un menu « bon retour » personnalisé quand vous démarrez avec votre code',
      'les futures fonctions de profil (matériel enregistré, listes de favoris) s’appuieront sur ce profil — et nous vous redemanderons votre accord avant d’enregistrer quoi que ce soit de nouveau',
    ],
    noHeading: 'Si vous répondez NON :',
    noText: 'rien n’est enregistré. Les outils de recherche, de comparaison, de vérification matérielle et d’articles fonctionnent exactement de la même façon.',
    rights: 'Les profils sont supprimés après {months} mois sans utilisation. Vous pouvez tout supprimer à tout moment en disant « oublie-moi » et voir ce qui est stocké en disant « mon profil ». Détails : {privacyUrl} · Responsable : PromptQuorum · Contact : {contact}',
    prompt: 'Répondez « oui » pour enregistrer mon profil, ou « non » pour continuer sans enregistrer.',
    counts: '{apps} applis d’IA locale · {langs} langues',
    saved: 'Enregistré. Votre code de profil est :\n\n{code}\n\nConservez-le en lieu sûr — toute personne disposant du code peut utiliser ce profil. Dans une nouvelle conversation, dites : « démarrer avec le code {code} ».',
    declined: 'Compris — rien n’a été enregistré. Tout le reste fonctionne exactement de la même façon.',
    withdrawn: 'Consentement retiré et profil enregistré supprimé.',
    unavailable: 'L’enregistrement de profils n’est pas disponible pour le moment, rien n’a donc été stocké. Tout le reste fonctionne exactement de la même façon.',
    forgot: 'C’est fait — votre profil et votre preuve de consentement ont été supprimés.',
    unknownCode: 'Ce code de profil est inconnu ou a expiré. Rien n’est stocké pour ce code.',
    welcomeBack: 'Bon retour !',
    welcome: 'Bienvenue !',
    langSet: 'Langue définie sur {language}.',
    langNotSaved: 'Non enregistrée dans un profil (pas de code de profil ou pas de consentement) — valable uniquement pour cette conversation.',
    langSaved: 'Également enregistrée dans votre profil.',
    profileHeading: 'Ce que PromptQuorum a enregistré pour ce code de profil :',
  },
  es: {
    title: 'Antes de empezar — una pregunta rápida sobre privacidad',
    intro: 'PromptQuorum puede recordar algunas cosas entre sesiones. Es tu decisión y el directorio funciona completamente en ambos casos.',
    yesHeading: 'Si dices SÍ, guardamos (seudónimo, almacenado en {region}):',
    yesBody: 'tu idioma preferido y la fecha de este consentimiento, vinculados a un código de perfil aleatorio — sin nombre, sin correo, sin dirección IP. A cambio:',
    yesBullets: [
      'se recuerda tu idioma, no tendrás que configurarlo de nuevo',
      'un menú de «bienvenido de nuevo» personalizado cuando empieces con tu código',
      'las futuras funciones de perfil (como hardware guardado o listas de favoritos) se apoyarán en este perfil — y te volveremos a preguntar antes de guardar algo nuevo',
    ],
    noHeading: 'Si dices NO:',
    noText: 'no se guarda nada. Las herramientas de búsqueda, comparación, comprobación de hardware y artículos funcionan exactamente igual.',
    rights: 'Los perfiles se eliminan tras {months} meses sin uso. Puedes borrarlo todo en cualquier momento diciendo «olvídame» y ver qué hay guardado diciendo «mi perfil». Detalles: {privacyUrl} · Responsable: PromptQuorum · Contacto: {contact}',
    prompt: 'Responde «sí» para guardar mi perfil o «no» para continuar sin guardar.',
    counts: '{apps} apps de IA local · {langs} idiomas',
    saved: 'Guardado. Tu código de perfil es:\n\n{code}\n\nGuárdalo en un lugar seguro — cualquiera con el código puede usar este perfil. En una conversación nueva, di: «empezar con el código {code}».',
    declined: 'Entendido — no se guardó nada. Todo lo demás funciona exactamente igual.',
    withdrawn: 'Consentimiento retirado y perfil guardado eliminado.',
    unavailable: 'Guardar perfiles no está disponible ahora mismo, así que no se almacenó nada. Todo lo demás funciona exactamente igual.',
    forgot: 'Listo — tu perfil y tu registro de consentimiento fueron eliminados.',
    unknownCode: 'Ese código de perfil es desconocido o ha caducado. No hay nada guardado para él.',
    welcomeBack: '¡Bienvenido de nuevo!',
    welcome: '¡Bienvenido!',
    langSet: 'Idioma establecido en {language}.',
    langNotSaved: 'No guardado en un perfil (sin código de perfil o sin consentimiento) — solo vale para esta conversación.',
    langSaved: 'También guardado en tu perfil.',
    profileHeading: 'Lo que PromptQuorum tiene guardado para este código de perfil:',
  },
  pt: {
    title: 'Antes de começar — uma pergunta rápida sobre privacidade',
    intro: 'O PromptQuorum pode lembrar algumas coisas entre sessões. A escolha é sua e o diretório funciona por completo nos dois casos.',
    yesHeading: 'Se você disser SIM, salvamos (pseudonimizado, armazenado em {region}):',
    yesBody: 'seu idioma preferido e a data deste consentimento, ligados a um código de perfil aleatório — sem nome, sem e-mail, sem endereço IP. Em troca:',
    yesBullets: [
      'seu idioma é lembrado, você não precisa configurá-lo de novo',
      'um menu personalizado de «bem-vindo de volta» quando você começar com seu código',
      'futuros recursos de perfil (como hardware salvo ou listas de favoritos) usarão este perfil — e perguntaremos de novo antes de salvar qualquer coisa nova',
    ],
    noHeading: 'Se você disser NÃO:',
    noText: 'nada é salvo. As ferramentas de busca, comparação, verificação de hardware e artigos funcionam exatamente do mesmo jeito.',
    rights: 'Os perfis são excluídos após {months} meses sem uso. Você pode apagar tudo a qualquer momento dizendo «esqueça de mim» e ver o que está salvo dizendo «meu perfil». Detalhes: {privacyUrl} · Controlador: PromptQuorum · Contato: {contact}',
    prompt: 'Responda «sim» para salvar meu perfil ou «não» para continuar sem salvar.',
    counts: '{apps} apps de IA local · {langs} idiomas',
    saved: 'Salvo. Seu código de perfil é:\n\n{code}\n\nGuarde-o em local seguro — qualquer pessoa com o código pode usar este perfil. Em uma nova conversa, diga: «começar com o código {code}».',
    declined: 'Entendido — nada foi salvo. Todo o resto funciona exatamente do mesmo jeito.',
    withdrawn: 'Consentimento retirado e perfil salvo excluído.',
    unavailable: 'O salvamento de perfis não está disponível agora, então nada foi armazenado. Todo o resto funciona exatamente do mesmo jeito.',
    forgot: 'Pronto — seu perfil e seu registro de consentimento foram excluídos.',
    unknownCode: 'Esse código de perfil é desconhecido ou expirou. Nada está armazenado para ele.',
    welcomeBack: 'Bem-vindo de volta!',
    welcome: 'Bem-vindo!',
    langSet: 'Idioma definido para {language}.',
    langNotSaved: 'Não salvo em um perfil (sem código de perfil ou sem consentimento) — vale só para esta conversa.',
    langSaved: 'Também salvo no seu perfil.',
    profileHeading: 'O que o PromptQuorum tem salvo para este código de perfil:',
  },
  ja: {
    title: '始める前に — プライバシーに関する簡単な質問',
    intro: 'PromptQuorumはセッションをまたいで一部の情報を記憶できます。選ぶのはあなたで、どちらを選んでもディレクトリはすべて利用できます。',
    yesHeading: '「はい」を選ぶと、次の情報を保存します（仮名化、保存先：{region}）：',
    yesBody: '希望する言語とこの同意を行った日付を、ランダムなプロフィールコードに紐づけて保存します。氏名、メールアドレス、IPアドレスは保存しません。その代わり：',
    yesBullets: [
      '言語が記憶されるため、再設定が不要になります',
      'コードで開始すると、パーソナライズされた「おかえりなさい」メニューが表示されます',
      '今後のプロフィール機能（保存したハードウェアやお気に入りリストなど）はこのプロフィールを基盤にします。新しい情報を保存する前には、改めて確認します',
    ],
    noHeading: '「いいえ」を選ぶと：',
    noText: '何も保存されません。検索、比較、ハードウェア確認、記事のツールはまったく同じように使えます。',
    rights: 'プロフィールは{months}か月間利用がないと削除されます。「忘れて」と伝えればいつでもすべて削除でき、「マイプロフィール」と伝えれば保存内容を確認できます。詳細：{privacyUrl} · 管理者：PromptQuorum · 連絡先：{contact}',
    prompt: 'プロフィールを保存するには「はい」、保存せずに続けるには「いいえ」と返信してください。',
    counts: 'ローカルAIアプリ{apps}件 · {langs}言語',
    saved: '保存しました。プロフィールコードは次のとおりです：\n\n{code}\n\n安全な場所に保管してください。コードを知っている人は誰でもこのプロフィールを使えます。新しい会話では「コード {code} で開始」と伝えてください。',
    declined: '了解しました。何も保存していません。そのほかはすべて同じように動作します。',
    withdrawn: '同意を撤回し、保存されていたプロフィールを削除しました。',
    unavailable: '現在プロフィールの保存は利用できないため、何も保存されていません。そのほかはすべて同じように動作します。',
    forgot: '完了しました。プロフィールと同意の記録を削除しました。',
    unknownCode: 'このプロフィールコードは不明か、有効期限が切れています。このコードに保存された情報はありません。',
    welcomeBack: 'おかえりなさい！',
    welcome: 'ようこそ！',
    langSet: '言語を{language}に設定しました。',
    langNotSaved: 'プロフィールには保存されていません（プロフィールコードがない、または同意がありません）。この会話にのみ適用されます。',
    langSaved: 'プロフィールにも保存しました。',
    profileHeading: 'このプロフィールコードについてPromptQuorumが保存している内容：',
  },
  zh: {
    title: '开始之前 — 一个简短的隐私问题',
    intro: 'PromptQuorum 可以在不同会话之间记住少量信息。是否保存由你决定，无论选择哪种，目录功能都完整可用。',
    yesHeading: '如果你选择“是”，我们会保存（已假名化，存储于：{region}）：',
    yesBody: '你偏好的语言和你同意的日期，并与一个随机生成的档案代码关联——不含姓名、邮箱或 IP 地址。作为回报：',
    yesBullets: [
      '记住你的语言，无需再次设置',
      '使用你的代码开始时，显示个性化的“欢迎回来”菜单',
      '未来的档案功能（例如保存的硬件或收藏清单）将基于此档案——保存任何新内容之前，我们会再次征求你的同意',
    ],
    noHeading: '如果你选择“否”：',
    noText: '不会保存任何内容。搜索、对比、硬件检查和文章工具的使用完全相同。',
    rights: '档案在 {months} 个月未使用后会被删除。你可以随时说“忘记我”来删除全部内容，说“我的档案”来查看已存储的内容。详情：{privacyUrl} · 负责方：PromptQuorum · 联系方式：{contact}',
    prompt: '回复“是”保存我的档案，或回复“否”不保存并继续。',
    counts: '{apps} 款本地 AI 应用 · {langs} 种语言',
    saved: '已保存。你的档案代码是：\n\n{code}\n\n请妥善保管——任何拥有该代码的人都可以使用此档案。在新的对话中，请说：“使用代码 {code} 开始”。',
    declined: '明白——未保存任何内容。其余功能完全相同。',
    withdrawn: '已撤回同意，并删除了已保存的档案。',
    unavailable: '当前无法保存档案，因此未存储任何内容。其余功能完全相同。',
    forgot: '完成——你的档案和同意记录已删除。',
    unknownCode: '该档案代码未知或已过期。没有为其存储任何内容。',
    welcomeBack: '欢迎回来！',
    welcome: '欢迎！',
    langSet: '语言已设置为 {language}。',
    langNotSaved: '未保存到档案（没有档案代码或未同意）——仅适用于本次对话。',
    langSaved: '同时已保存到你的档案。',
    profileHeading: 'PromptQuorum 为此档案代码存储的内容：',
  },
  ko: {
    title: '시작하기 전에 — 간단한 개인정보 질문',
    intro: 'PromptQuorum은 세션 사이에 몇 가지를 기억할 수 있습니다. 선택은 여러분의 몫이며, 어느 쪽이든 디렉터리는 완전히 동작합니다.',
    yesHeading: '"예"를 선택하면 다음을 저장합니다(가명 처리, 저장 위치: {region}):',
    yesBody: '선호 언어와 이 동의를 한 날짜를 무작위 프로필 코드에 연결해 저장합니다. 이름, 이메일, IP 주소는 저장하지 않습니다. 대신 다음을 제공합니다:',
    yesBullets: [
      '언어가 기억되어 다시 설정할 필요가 없습니다',
      '코드로 시작하면 맞춤형 "다시 오신 것을 환영합니다" 메뉴가 표시됩니다',
      '앞으로의 프로필 기능(저장된 하드웨어, 관심 목록 등)은 이 프로필을 바탕으로 합니다. 새로운 정보를 저장하기 전에는 다시 여쭙겠습니다',
    ],
    noHeading: '"아니요"를 선택하면:',
    noText: '아무것도 저장되지 않습니다. 검색, 비교, 하드웨어 확인, 문서 도구는 똑같이 동작합니다.',
    rights: '프로필은 {months}개월 동안 사용하지 않으면 삭제됩니다. "나를 잊어줘"라고 말하면 언제든 모두 삭제할 수 있고, "내 프로필"이라고 말하면 저장된 내용을 볼 수 있습니다. 자세한 내용: {privacyUrl} · 관리자: PromptQuorum · 연락처: {contact}',
    prompt: '프로필을 저장하려면 "예", 저장하지 않고 계속하려면 "아니요"라고 답해 주십시오.',
    counts: '로컬 AI 앱 {apps}개 · {langs}개 언어',
    saved: '저장되었습니다. 프로필 코드는 다음과 같습니다:\n\n{code}\n\n안전한 곳에 보관하십시오. 코드를 아는 사람은 누구나 이 프로필을 사용할 수 있습니다. 새 대화에서는 "코드 {code}로 시작"이라고 말씀하십시오.',
    declined: '알겠습니다. 아무것도 저장되지 않았습니다. 나머지는 모두 똑같이 동작합니다.',
    withdrawn: '동의를 철회했으며 저장된 프로필을 삭제했습니다.',
    unavailable: '지금은 프로필 저장을 사용할 수 없어 아무것도 저장되지 않았습니다. 나머지는 모두 똑같이 동작합니다.',
    forgot: '완료되었습니다. 프로필과 동의 기록이 삭제되었습니다.',
    unknownCode: '이 프로필 코드는 알 수 없거나 만료되었습니다. 해당 코드로 저장된 내용은 없습니다.',
    welcomeBack: '다시 오신 것을 환영합니다!',
    welcome: '환영합니다!',
    langSet: '언어가 {language}(으)로 설정되었습니다.',
    langNotSaved: '프로필에 저장되지 않았습니다(프로필 코드 없음 또는 동의 없음). 이 대화에만 적용됩니다.',
    langSaved: '프로필에도 저장되었습니다.',
    profileHeading: '이 프로필 코드에 대해 PromptQuorum이 저장한 내용:',
  },
  ar: {
    title: 'قبل أن نبدأ — سؤال سريع عن الخصوصية',
    intro: 'يمكن لـ PromptQuorum أن يتذكر بعض الأمور بين الجلسات. القرار لك، ويعمل الدليل بالكامل في الحالتين.',
    yesHeading: 'إذا أجبت بـ «نعم» نحفظ (باسم مستعار، ومخزَّنة في {region}):',
    yesBody: 'لغتك المفضلة وتاريخ هذه الموافقة، مرتبطَين برمز ملف شخصي عشوائي — دون اسم أو بريد إلكتروني أو عنوان IP. وفي المقابل:',
    yesBullets: [
      'تُحفظ لغتك فلا تحتاج إلى ضبطها مجددًا',
      'قائمة «أهلًا بعودتك» مخصصة عند البدء برمزك',
      'ستعتمد ميزات الملف الشخصي المستقبلية (مثل العتاد المحفوظ أو قوائم المفضلة) على هذا الملف — وسنسألك مجددًا قبل حفظ أي شيء جديد',
    ],
    noHeading: 'إذا أجبت بـ «لا»:',
    noText: 'لا يُحفظ شيء. تعمل أدوات البحث والمقارنة وفحص العتاد والمقالات بالطريقة نفسها تمامًا.',
    rights: 'تُحذف الملفات الشخصية بعد {months} أشهر من عدم الاستخدام. يمكنك حذف كل شيء في أي وقت بقول «انسَني»، ومعرفة ما هو مخزَّن بقول «ملفي الشخصي». التفاصيل: {privacyUrl} · المسؤول عن المعالجة: PromptQuorum · للتواصل: {contact}',
    prompt: 'أجب بـ «نعم» لحفظ ملفي الشخصي، أو «لا» للمتابعة دون حفظ.',
    counts: '{apps} تطبيق ذكاء اصطناعي محلي · {langs} لغات',
    saved: 'تم الحفظ. رمز ملفك الشخصي هو:\n\n{code}\n\nاحتفظ به في مكان آمن — يمكن لأي شخص يملك الرمز استخدام هذا الملف. في محادثة جديدة قل: «ابدأ بالرمز {code}».',
    declined: 'مفهوم — لم يُحفظ أي شيء. كل ما عدا ذلك يعمل بالطريقة نفسها تمامًا.',
    withdrawn: 'تم سحب الموافقة وحُذف ملفك الشخصي المحفوظ.',
    unavailable: 'حفظ الملفات الشخصية غير متاح الآن، لذا لم يُخزَّن شيء. كل ما عدا ذلك يعمل بالطريقة نفسها تمامًا.',
    forgot: 'تم — حُذف ملفك الشخصي وسجل موافقتك.',
    unknownCode: 'رمز الملف الشخصي هذا غير معروف أو منتهي الصلاحية. لا يوجد شيء مخزَّن له.',
    welcomeBack: 'أهلًا بعودتك!',
    welcome: 'أهلًا بك!',
    langSet: 'تم ضبط اللغة على {language}.',
    langNotSaved: 'لم تُحفظ في ملف شخصي (لا يوجد رمز ملف أو لا توجد موافقة) — تنطبق على هذه المحادثة فقط.',
    langSaved: 'حُفظت أيضًا في ملفك الشخصي.',
    profileHeading: 'ما خزّنه PromptQuorum لرمز الملف الشخصي هذا:',
  },
}

export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m))
}

export function isStartLang(v: unknown): v is StartLang {
  return typeof v === 'string' && (START_LANGS as readonly string[]).includes(v)
}

/** Maps any client-supplied language tag to a supported code; unknown → 'en'. */
export function normalizeStartLang(v: unknown): StartLang {
  if (typeof v !== 'string') return 'en'
  const base = v.toLowerCase().split(/[-_]/)[0]
  return isStartLang(base) ? base : 'en'
}

export function privacyUrl(lang: StartLang): string {
  return lang === 'en' ? 'https://www.promptquorum.com/privacy' : `https://www.promptquorum.com/${lang}/privacy`
}
