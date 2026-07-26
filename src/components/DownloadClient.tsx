'use client'

import { useLang } from '@/hooks/useLang'
import type { Lang } from '@/hooks/useLang'

// Current shipping build. Bump this (and public/version.json) on each release.
const APP_VERSION = '0.1.0'

// Exact filenames as uploaded to the shared beta Google Drive folder — must
// match verbatim so testers can find the right file inside it. NOT the
// electron-builder default naming; update by hand whenever the Drive folder
// contents change (these are ad-hoc per-batch names, not a fixed pattern).
const FILES = {
  macArm: 'PromptQuorum 0.1.0 - Apple Silicon (M1-M5) (July13-final).dmg',
  macIntel: 'PromptQuorum 0.1.0 - Apple Intel Chip (July13-final).dmg',
  win: 'PromptQuorum 0.1.0 - Windows 10 and 11 (July13-final).zip',
  linuxX64: 'PromptQuorum 0.1.0 - Linux (Ubuntu and other distros) (July13-final).AppImage',
  linuxArm64: 'PromptQuorum 0.1.0 - Linux ARM64 (Raspberry Pi 5 etc) (July13-final).AppImage',
}

// Interim distribution: a single shared Google Drive folder containing every
// platform's installer (Drive doesn't give distinct per-file public URLs
// without per-file sharing setup). All platform buttons point here until
// installers are hosted individually. See docs/APP_VERSION_RELEASE.md.
const GOOGLE_DRIVE_URL = 'https://tnpvzv.s.gy/vx3ueD'

// TODO(Hans): swap these for distinct per-file URLs once installers are
// hosted individually (Vercel static / GitHub Release assets / etc.).
const INSTALLER_URLS = {
  macArm: GOOGLE_DRIVE_URL,
  macIntel: GOOGLE_DRIVE_URL,
  win: GOOGLE_DRIVE_URL,
  linuxX64: GOOGLE_DRIVE_URL,
  linuxArm64: GOOGLE_DRIVE_URL,
}

type Copy = {
  heading: string
  tagline: string
  beta: string
  versionLabel: string
  macArm: string
  macIntel: string
  win: string
  linuxX64: string
  linuxArm64: string
  fileLabel: string
  download: string
  betaNote: string
  unsignedHeading: string
  unsignedIntro: string
  macStep: string
  winStep: string
  linuxStep: string
  backHome: string
}

const COPY: Record<string, Copy> = {
  en: {
    heading: 'Download PromptQuorum',
    tagline:
      'Dispatch one prompt to many AI models, compare their answers, and run consensus analysis — on macOS, Windows, and Linux.',
    beta: 'Beta',
    versionLabel: 'Current version',
    macArm: 'macOS — Apple Silicon (M1–M5)',
    macIntel: 'macOS — Intel',
    win: 'Windows',
    linuxX64: 'Linux — x64 (Intel/AMD)',
    linuxArm64: 'Linux — ARM64 (Raspberry Pi 5, etc.)',
    fileLabel: 'File',
    download: 'Download',
    betaNote:
      'PromptQuorum is in private beta. All installers are hosted in one shared folder — pick the button for your platform above.',
    unsignedHeading: 'Opening the app on a beta (unsigned) build',
    unsignedIntro:
      'PromptQuorum is in beta and not yet code-signed, so your operating system may warn you the first time you open it. This is expected — the app is safe to run.',
    macStep:
      'macOS: right-click (or Control-click) the app and choose "Open", then confirm "Open" in the dialog. If you double-click and see "unidentified developer", use right-click → Open instead.',
    winStep:
      'Windows: if SmartScreen shows "Windows protected your PC" / "unknown publisher", click "More info" → "Run anyway".',
    linuxStep:
      'Linux: make the AppImage executable first — chmod +x [filename].AppImage — then run it directly, no installation needed. If Ubuntu blocks it, launch from a terminal with --no-sandbox.',
    backHome: '← Back to Home',
  },
  de: {
    heading: 'PromptQuorum herunterladen',
    tagline:
      'Senden Sie einen Prompt an viele KI-Modelle, vergleichen Sie die Antworten und führen Sie eine Konsensanalyse durch — für macOS, Windows und Linux.',
    beta: 'Beta',
    versionLabel: 'Aktuelle Version',
    macArm: 'macOS — Apple Silicon (M1–M5)',
    macIntel: 'macOS — Intel',
    win: 'Windows',
    linuxX64: 'Linux — x64 (Intel/AMD)',
    linuxArm64: 'Linux — ARM64 (z. B. Raspberry Pi 5)',
    fileLabel: 'Datei',
    download: 'Herunterladen',
    betaNote:
      'PromptQuorum befindet sich in der privaten Beta. Alle Installer liegen in einem gemeinsamen Ordner — wählen Sie oben die Schaltfläche für Ihre Plattform.',
    unsignedHeading: 'Die App aus einem Beta-Build (unsigniert) öffnen',
    unsignedIntro:
      'PromptQuorum befindet sich in der Beta-Phase und ist noch nicht code-signiert. Ihr Betriebssystem zeigt beim ersten Öffnen möglicherweise eine Warnung an. Das ist normal — die App kann sicher ausgeführt werden.',
    macStep:
      'macOS: Klicken Sie mit der rechten Maustaste (oder Ctrl-Klick) auf die App und wählen Sie „Öffnen", dann im Dialog erneut „Öffnen". Bei einem Doppelklick erscheint „nicht verifizierter Entwickler" — nutzen Sie stattdessen Rechtsklick → Öffnen.',
    winStep:
      'Windows: Zeigt SmartScreen „Der Computer wurde durch Windows geschützt" / „unbekannter Herausgeber", klicken Sie auf „Weitere Informationen" → „Trotzdem ausführen".',
    linuxStep:
      'Linux: Machen Sie die AppImage-Datei zuerst ausführbar — chmod +x [Dateiname].AppImage — und starten Sie sie direkt, ohne Installation. Blockiert Ubuntu den Start, starten Sie sie im Terminal mit --no-sandbox.',
    backHome: '← Zurück zur Startseite',
  },
  fr: {
    heading: 'Télécharger PromptQuorum',
    tagline:
      'Envoyez un même prompt à plusieurs modèles d\'IA, comparez leurs réponses et exécutez une analyse de consensus — sur macOS, Windows et Linux.',
    beta: 'Bêta',
    versionLabel: 'Version actuelle',
    macArm: 'macOS — Apple Silicon (M1–M5)',
    macIntel: 'macOS — Intel',
    win: 'Windows',
    linuxX64: 'Linux — x64 (Intel/AMD)',
    linuxArm64: 'Linux — ARM64 (Raspberry Pi 5, etc.)',
    fileLabel: 'Fichier',
    download: 'Télécharger',
    betaNote:
      'PromptQuorum est en bêta privée. Tous les installateurs sont hébergés dans un dossier partagé — choisissez le bouton correspondant à votre plateforme ci-dessus.',
    unsignedHeading: 'Ouvrir l\'application depuis une build bêta (non signée)',
    unsignedIntro:
      'PromptQuorum est en bêta et n\'est pas encore signé numériquement, votre système d\'exploitation peut donc afficher un avertissement la première fois que vous l\'ouvrez. C\'est normal — l\'application est sûre à utiliser.',
    macStep:
      'macOS : cliquez avec le bouton droit (ou Ctrl-clic) sur l\'application et choisissez « Ouvrir », puis confirmez « Ouvrir » dans la boîte de dialogue. Si un double-clic affiche « développeur non identifié », utilisez plutôt clic droit → Ouvrir.',
    winStep:
      'Windows : si SmartScreen affiche « Windows a protégé votre PC » / « éditeur inconnu », cliquez sur « Plus d\'infos » → « Exécuter quand même ».',
    linuxStep:
      'Linux : rendez d\'abord l\'AppImage exécutable — chmod +x [nomdufichier].AppImage — puis lancez-la directement, sans installation. Si Ubuntu la bloque, lancez-la depuis un terminal avec --no-sandbox.',
    backHome: '← Retour à l\'accueil',
  },
  ja: {
    heading: 'PromptQuorumをダウンロード',
    tagline:
      '1つのプロンプトを複数のAIモデルに送信し、回答を比較して、コンセンサス分析を実行できます — macOS、Windows、Linuxに対応。',
    beta: 'ベータ',
    versionLabel: '現在のバージョン',
    macArm: 'macOS — Apple Silicon (M1–M5)',
    macIntel: 'macOS — Intel',
    win: 'Windows',
    linuxX64: 'Linux — x64（Intel/AMD）',
    linuxArm64: 'Linux — ARM64（Raspberry Pi 5など）',
    fileLabel: 'ファイル',
    download: 'ダウンロード',
    betaNote:
      'PromptQuorumはプライベートベータ版です。すべてのインストーラーは共有フォルダにまとめて保存されています — 上のボタンからお使いのプラットフォームを選択してください。',
    unsignedHeading: 'ベータ（未署名）ビルドでアプリを開く',
    unsignedIntro:
      'PromptQuorumはベータ版でまだコード署名されていないため、初めて開く際にOSが警告を表示する場合があります。これは想定内の動作で、アプリの実行は安全です。',
    macStep:
      'macOS: アプリを右クリック（またはControlキーを押しながらクリック）し、「開く」を選択後、ダイアログで再度「開く」を確認してください。ダブルクリックして「開発元が未確認」と表示された場合は、右クリック→開くを使用してください。',
    winStep:
      'Windows: SmartScreenに「WindowsによってPCが保護されました」/「発行元不明」と表示された場合は、「詳細情報」→「実行」をクリックしてください。',
    linuxStep:
      'Linux: まずAppImageに実行権限を付与してください — chmod +x [ファイル名].AppImage — その後インストール不要で直接実行できます。Ubuntuでブロックされる場合は、ターミナルから --no-sandbox オプションで起動してください。',
    backHome: '← ホームに戻る',
  },
  zh: {
    heading: '下载 PromptQuorum',
    tagline:
      '将同一条提示词发送给多个 AI 模型，比较它们的回答，并运行共识分析——支持 macOS、Windows 和 Linux。',
    beta: '测试版',
    versionLabel: '当前版本',
    macArm: 'macOS — Apple 芯片 (M1–M5)',
    macIntel: 'macOS — Intel',
    win: 'Windows',
    linuxX64: 'Linux — x64（Intel/AMD）',
    linuxArm64: 'Linux — ARM64（如 Raspberry Pi 5）',
    fileLabel: '文件',
    download: '下载',
    betaNote:
      'PromptQuorum 目前处于私测阶段。所有安装包都存放在同一个共享文件夹中——请点击上方对应您平台的按钮。',
    unsignedHeading: '打开测试版（未签名）构建版本的应用',
    unsignedIntro:
      'PromptQuorum 处于测试阶段，尚未进行代码签名，因此您的操作系统在首次打开时可能会显示警告。这是正常现象——该应用可以安全运行。',
    macStep:
      'macOS：右键点击（或按住 Control 键点击）应用，选择"打开"，然后在对话框中再次确认"打开"。如果双击后显示"身份不明的开发者"，请改用右键→打开。',
    winStep:
      'Windows：如果 SmartScreen 显示"Windows 已保护你的电脑"/"发布者未知"，请点击"更多信息"→"仍要运行"。',
    linuxStep:
      'Linux：先为 AppImage 添加可执行权限——chmod +x [文件名].AppImage——然后直接运行，无需安装。如果 Ubuntu 阻止运行，请在终端中使用 --no-sandbox 参数启动。',
    backHome: '← 返回首页',
  },
  es: {
    heading: 'Descargar PromptQuorum',
    tagline:
      'Envía un mismo prompt a varios modelos de IA, compara sus respuestas y ejecuta un análisis de consenso — en macOS, Windows y Linux.',
    beta: 'Beta',
    versionLabel: 'Versión actual',
    macArm: 'macOS — Apple Silicon (M1–M5)',
    macIntel: 'macOS — Intel',
    win: 'Windows',
    linuxX64: 'Linux — x64 (Intel/AMD)',
    linuxArm64: 'Linux — ARM64 (Raspberry Pi 5, etc.)',
    fileLabel: 'Archivo',
    download: 'Descargar',
    betaNote:
      'PromptQuorum está en beta privada. Todos los instaladores están alojados en una carpeta compartida — elige el botón de tu plataforma arriba.',
    unsignedHeading: 'Abrir la app en una compilación beta (sin firmar)',
    unsignedIntro:
      'PromptQuorum está en beta y aún no tiene firma de código, por lo que tu sistema operativo puede advertirte la primera vez que la abras. Esto es normal — la app es segura de ejecutar.',
    macStep:
      'macOS: haz clic derecho (o Ctrl-clic) en la app y elige "Abrir", luego confirma "Abrir" en el cuadro de diálogo. Si haces doble clic y ves "desarrollador no identificado", usa clic derecho → Abrir en su lugar.',
    winStep:
      'Windows: si SmartScreen muestra "Windows protegió tu PC" / "editor desconocido", haz clic en "Más información" → "Ejecutar de todos modos".',
    linuxStep:
      'Linux: primero haz que el AppImage sea ejecutable — chmod +x [nombredearchivo].AppImage — y luego ejecútalo directamente, sin instalación. Si Ubuntu lo bloquea, inícialo desde una terminal con --no-sandbox.',
    backHome: '← Volver al inicio',
  },
  pt: {
    heading: 'Baixar o PromptQuorum',
    tagline:
      'Envie um único prompt para vários modelos de IA, compare as respostas e execute uma análise de consenso — no macOS, Windows e Linux.',
    beta: 'Beta',
    versionLabel: 'Versão atual',
    macArm: 'macOS — Apple Silicon (M1–M5)',
    macIntel: 'macOS — Intel',
    win: 'Windows',
    linuxX64: 'Linux — x64 (Intel/AMD)',
    linuxArm64: 'Linux — ARM64 (Raspberry Pi 5, etc.)',
    fileLabel: 'Arquivo',
    download: 'Baixar',
    betaNote:
      'O PromptQuorum está em beta privada. Todos os instaladores estão hospedados em uma pasta compartilhada — escolha o botão da sua plataforma acima.',
    unsignedHeading: 'Abrindo o app em uma versão beta (não assinada)',
    unsignedIntro:
      'O PromptQuorum está em beta e ainda não possui assinatura de código, então seu sistema operacional pode exibir um aviso na primeira vez que você abri-lo. Isso é esperado — o app é seguro para executar.',
    macStep:
      'macOS: clique com o botão direito (ou Ctrl-clique) no app e escolha "Abrir", depois confirme "Abrir" na caixa de diálogo. Se você clicar duas vezes e ver "desenvolvedor não identificado", use clique com o botão direito → Abrir.',
    winStep:
      'Windows: se o SmartScreen mostrar "O Windows protegeu o computador" / "editor desconhecido", clique em "Mais informações" → "Executar assim mesmo".',
    linuxStep:
      'Linux: primeiro torne o AppImage executável — chmod +x [nomedoarquivo].AppImage — depois execute-o diretamente, sem instalação. Se o Ubuntu bloquear, inicie-o pelo terminal com --no-sandbox.',
    backHome: '← Voltar ao Início',
  },
  ar: {
    heading: 'تنزيل PromptQuorum',
    tagline:
      'أرسل أمرًا واحدًا إلى عدة نماذج ذكاء اصطناعي، قارن إجاباتها، وشغّل تحليل الإجماع — على macOS وWindows وLinux.',
    beta: 'تجريبي',
    versionLabel: 'الإصدار الحالي',
    macArm: 'macOS — شريحة Apple (M1–M5)',
    macIntel: 'macOS — Intel',
    win: 'Windows',
    linuxX64: 'Linux — x64 (Intel/AMD)',
    linuxArm64: 'Linux — ARM64 (مثل Raspberry Pi 5)',
    fileLabel: 'الملف',
    download: 'تنزيل',
    betaNote:
      'يتوفر PromptQuorum حاليًا في نسخة تجريبية خاصة. جميع برامج التثبيت مستضافة في مجلد مشترك واحد — اختر الزر المناسب لمنصتك أعلاه.',
    unsignedHeading: 'فتح التطبيق في إصدار تجريبي (غير موقّع)',
    unsignedIntro:
      'يتوفر PromptQuorum في نسخة تجريبية ولم يتم توقيعه بعد، لذا قد يعرض نظام التشغيل تحذيرًا عند فتحه لأول مرة. هذا أمر متوقع — التطبيق آمن للتشغيل.',
    macStep:
      'macOS: انقر بزر الماوس الأيمن (أو Control+نقر) على التطبيق واختر "فتح"، ثم أكّد "فتح" في مربع الحوار. إذا نقرت نقرًا مزدوجًا وظهرت رسالة "مطوّر غير معروف"، استخدم النقر بزر الماوس الأيمن ← فتح بدلاً من ذلك.',
    winStep:
      'Windows: إذا أظهرت SmartScreen رسالة "قام Windows بحماية جهاز الكمبيوتر الخاص بك" / "ناشر غير معروف"، انقر على "مزيد من المعلومات" ← "تشغيل على أي حال".',
    linuxStep:
      'Linux: اجعل ملف AppImage قابلاً للتنفيذ أولاً — chmod +x [اسم-الملف].AppImage — ثم شغّله مباشرة دون الحاجة إلى التثبيت. إذا منعه Ubuntu، شغّله من الطرفية باستخدام --no-sandbox.',
    backHome: '← العودة إلى الصفحة الرئيسية',
  },
  ko: {
    heading: 'PromptQuorum 다운로드',
    tagline:
      '하나의 프롬프트를 여러 AI 모델에 전송하고 응답을 비교하며 합의 분석을 실행하세요 — macOS, Windows, Linux를 지원합니다.',
    beta: '베타',
    versionLabel: '현재 버전',
    macArm: 'macOS — Apple 실리콘 (M1–M5)',
    macIntel: 'macOS — Intel',
    win: 'Windows',
    linuxX64: 'Linux — x64 (Intel/AMD)',
    linuxArm64: 'Linux — ARM64 (Raspberry Pi 5 등)',
    fileLabel: '파일',
    download: '다운로드',
    betaNote:
      'PromptQuorum은 비공개 베타 단계입니다. 모든 설치 파일은 하나의 공유 폴더에 있습니다 — 위에서 사용 중인 플랫폼에 맞는 버튼을 선택하세요.',
    unsignedHeading: '베타(서명되지 않은) 빌드에서 앱 열기',
    unsignedIntro:
      'PromptQuorum은 베타 단계이며 아직 코드 서명이 되어 있지 않아, 처음 열 때 운영체제가 경고를 표시할 수 있습니다. 이는 정상적인 동작이며 — 앱을 실행해도 안전합니다.',
    macStep:
      'macOS: 앱을 마우스 오른쪽 버튼으로 클릭(또는 Control 키를 누른 채 클릭)하고 "열기"를 선택한 다음, 대화 상자에서 다시 "열기"를 확인하세요. 더블 클릭 시 "확인되지 않은 개발자"가 표시되면 마우스 오른쪽 버튼 클릭 → 열기를 사용하세요.',
    winStep:
      'Windows: SmartScreen에 "Windows에서 PC를 보호했습니다" / "게시자 알 수 없음"이 표시되면 "추가 정보" → "실행"을 클릭하세요.',
    linuxStep:
      'Linux: 먼저 AppImage를 실행 가능하게 설정하세요 — chmod +x [파일명].AppImage — 그런 다음 설치 없이 바로 실행하세요. Ubuntu에서 차단되면 터미널에서 --no-sandbox 옵션으로 실행하세요.',
    backHome: '← 홈으로 돌아가기',
  },
}

function PlatformCard({
  name,
  file,
  href,
  fileLabel,
  download,
}: {
  name: string
  file: string
  href: string
  fileLabel: string
  download: string
}) {
  // A real URL lights up a download button; placeholders show none.
  const isPlaceholder = href.startsWith('[[')
  return (
    <div className="flex flex-col rounded-lg border border-primary/15 bg-surface-elevated p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-text-primary">{name}</h3>
      <p className="mt-2 text-sm text-text-secondary">
        <span className="text-text-muted">{fileLabel}:</span>{' '}
        <span className="font-mono text-[13px] text-text-primary break-all">{file}</span>
      </p>
      {!isPlaceholder && (
        <div className="mt-auto pt-5">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {download}
          </a>
        </div>
      )}
    </div>
  )
}

export function DownloadClient({ initialLang }: { initialLang?: Lang }) {
  const lang = useLang(initialLang)
  const c = COPY[lang] ?? COPY.en
  const dir = lang === 'ar' ? 'rtl' : undefined
  const homeHref = lang === 'en' ? '/' : `/${lang}`

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6" dir={dir}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              {c.beta}
            </span>
            <span className="text-sm font-medium text-text-muted">
              {c.versionLabel}: <span className="font-mono text-text-secondary">v{APP_VERSION}</span>
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">{c.heading}</h1>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">{c.tagline}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PlatformCard name={c.macArm} file={FILES.macArm} href={INSTALLER_URLS.macArm} fileLabel={c.fileLabel} download={c.download} />
          <PlatformCard name={c.macIntel} file={FILES.macIntel} href={INSTALLER_URLS.macIntel} fileLabel={c.fileLabel} download={c.download} />
          <PlatformCard name={c.win} file={FILES.win} href={INSTALLER_URLS.win} fileLabel={c.fileLabel} download={c.download} />
          <PlatformCard name={c.linuxX64} file={FILES.linuxX64} href={INSTALLER_URLS.linuxX64} fileLabel={c.fileLabel} download={c.download} />
          <PlatformCard name={c.linuxArm64} file={FILES.linuxArm64} href={INSTALLER_URLS.linuxArm64} fileLabel={c.fileLabel} download={c.download} />
        </div>

        <div className="mt-8 rounded-lg border border-primary/15 bg-surface p-8 text-center">
          <p className="mx-auto max-w-2xl text-sm text-text-secondary">{c.betaNote}</p>
        </div>

        <div className="mt-8 rounded-lg border border-tertiary/25 bg-surface p-6">
          <h2 className="text-base font-semibold text-text-primary">{c.unsignedHeading}</h2>
          <p className="mt-2 text-sm text-text-secondary">{c.unsignedIntro}</p>
          <ul className="mt-3 space-y-2 text-sm text-text-secondary">
            <li className="flex gap-2">
              <span aria-hidden className="text-tertiary">•</span>
              <span>{c.macStep}</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden className="text-tertiary">•</span>
              <span>{c.winStep}</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden className="text-tertiary">•</span>
              <span>{c.linuxStep}</span>
            </li>
          </ul>
        </div>

        <p className="mt-14 text-center">
          <a href={homeHref} className="text-primary hover:text-primary/80">
            {c.backHome}
          </a>
        </p>
      </div>
    </div>
  )
}
