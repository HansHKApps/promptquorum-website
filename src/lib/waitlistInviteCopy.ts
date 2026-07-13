import type { Lang } from '@/hooks/useLang'

// Shared copy for the beta-testing invite shown both in the "Waitlist" modal
// (WaitlistModal.tsx) and as the static /waitlist page content behind it
// (WaitlistPageContent.tsx) — the page content is what a visitor lands on if
// they dismiss the modal or arrive with JS disabled, so it must stand on its
// own, not just exist as a modal-only message.
export type WaitlistInviteCopy = {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  desc: string
  downloadCta: string
  guideCta: string
  backHome: string
}

export const WAITLIST_INVITE_COPY: Record<Lang, WaitlistInviteCopy> = {
  en: {
    metaTitle: 'PromptQuorum Beta Testing — You\'re Invited',
    metaDescription: 'PromptQuorum\'s desktop app is in public beta. Download it today for macOS, Windows, or Linux — no waiting list.',
    eyebrow: 'Beta Testing',
    title: "You're Invited",
    desc: 'PromptQuorum\'s desktop app is in public beta and ready to install today — no waiting. Dispatch one prompt to many AI models and compare their answers, on macOS, Windows, or Linux.',
    downloadCta: 'Download the Beta',
    guideCta: 'Read the install guide & details',
    backHome: '← Back to Home',
  },
  de: {
    metaTitle: 'PromptQuorum Beta-Test — Sie sind eingeladen',
    metaDescription: 'Die Desktop-App von PromptQuorum befindet sich in der öffentlichen Beta. Laden Sie sie noch heute für macOS, Windows oder Linux herunter — ohne Warteliste.',
    eyebrow: 'Beta-Test',
    title: 'Sie sind eingeladen',
    desc: 'Die Desktop-App von PromptQuorum befindet sich in der öffentlichen Beta und lässt sich noch heute installieren — kein Warten nötig. Senden Sie einen Prompt an viele KI-Modelle und vergleichen Sie die Antworten, auf macOS, Windows oder Linux.',
    downloadCta: 'Beta herunterladen',
    guideCta: 'Installationsanleitung & Details lesen',
    backHome: '← Zurück zur Startseite',
  },
  fr: {
    metaTitle: 'Test bêta PromptQuorum — Vous êtes invité(e)',
    metaDescription: 'L\'application de bureau PromptQuorum est en bêta publique. Téléchargez-la dès aujourd\'hui pour macOS, Windows ou Linux — sans liste d\'attente.',
    eyebrow: 'Test bêta',
    title: 'Vous êtes invité(e)',
    desc: 'L\'application de bureau PromptQuorum est en bêta publique et s\'installe dès aujourd\'hui — sans attente. Envoyez un même prompt à plusieurs modèles IA et comparez leurs réponses, sur macOS, Windows ou Linux.',
    downloadCta: 'Télécharger la bêta',
    guideCta: 'Lire le guide d\'installation et les détails',
    backHome: '← Retour à l\'accueil',
  },
  ja: {
    metaTitle: 'PromptQuorumベータテスト — ご招待します',
    metaDescription: 'PromptQuorumのデスクトップアプリはパブリックベータ公開中です。macOS、Windows、Linux向けに今すぐダウンロードできます。待機リストは不要です。',
    eyebrow: 'ベータテスト',
    title: 'ご招待します',
    desc: 'PromptQuorumのデスクトップアプリはパブリックベータ公開中で、今すぐインストールできます。待つ必要はありません。1つのプロンプトを複数のAIモデルに送信し、回答を比較できます。macOS、Windows、Linuxに対応。',
    downloadCta: 'ベータ版をダウンロード',
    guideCta: 'インストールガイドと詳細を見る',
    backHome: '← ホームに戻る',
  },
  zh: {
    metaTitle: 'PromptQuorum 内测邀请 — 诚邀您加入',
    metaDescription: 'PromptQuorum 桌面应用现已开放公开测试，今天就能下载，支持 macOS、Windows 和 Linux——无需排队等待。',
    eyebrow: '内测邀请',
    title: '诚邀您加入',
    desc: 'PromptQuorum 桌面应用现已开放公开测试，今天就能安装——无需等待。将同一条提示词发送给多个 AI 模型并比较回答，支持 macOS、Windows 和 Linux。',
    downloadCta: '下载测试版',
    guideCta: '查看安装指南与详情',
    backHome: '← 返回首页',
  },
  es: {
    metaTitle: 'Beta de prueba de PromptQuorum — Estás invitado',
    metaDescription: 'La app de escritorio de PromptQuorum está en beta pública. Descárgala hoy mismo para macOS, Windows o Linux — sin lista de espera.',
    eyebrow: 'Beta de prueba',
    title: 'Estás invitado',
    desc: 'La app de escritorio de PromptQuorum está en beta pública y se instala hoy mismo — sin listas de espera. Envía un mismo prompt a varios modelos de IA y compara sus respuestas, en macOS, Windows o Linux.',
    downloadCta: 'Descargar la beta',
    guideCta: 'Leer la guía de instalación y detalles',
    backHome: '← Volver al inicio',
  },
  pt: {
    metaTitle: 'Teste Beta do PromptQuorum — Você Está Convidado',
    metaDescription: 'O aplicativo desktop do PromptQuorum está em beta público. Baixe hoje mesmo para macOS, Windows ou Linux — sem lista de espera.',
    eyebrow: 'Teste Beta',
    title: 'Você Está Convidado',
    desc: 'O aplicativo desktop do PromptQuorum está em beta público e pode ser instalado hoje mesmo — sem espera. Envie um único prompt para vários modelos de IA e compare as respostas, no macOS, Windows ou Linux.',
    downloadCta: 'Baixar o Beta',
    guideCta: 'Ler o guia de instalação e detalhes',
    backHome: '← Voltar ao Início',
  },
  ar: {
    metaTitle: 'اختبار PromptQuorum التجريبي — أنت مدعو',
    metaDescription: 'تطبيق PromptQuorum لسطح المكتب متاح الآن في النسخة التجريبية العامة. نزّله اليوم لأنظمة macOS وWindows وLinux — دون قائمة انتظار.',
    eyebrow: 'اختبار تجريبي',
    title: 'أنت مدعو',
    desc: 'تطبيق PromptQuorum لسطح المكتب متاح الآن في النسخة التجريبية العامة ويمكن تثبيته اليوم — دون انتظار. أرسل أمرًا واحدًا إلى عدة نماذج ذكاء اصطناعي وقارن إجاباتها، على macOS أو Windows أو Linux.',
    downloadCta: 'تنزيل النسخة التجريبية',
    guideCta: 'اطّلع على دليل التثبيت والتفاصيل',
    backHome: '← العودة إلى الصفحة الرئيسية',
  },
  ko: {
    metaTitle: 'PromptQuorum 베타 테스트 — 초대합니다',
    metaDescription: 'PromptQuorum 데스크톱 앱은 퍼블릭 베타 단계입니다. 대기자 명단 없이 지금 바로 macOS, Windows, Linux용으로 다운로드하십시오.',
    eyebrow: '베타 테스트',
    title: '초대합니다',
    desc: 'PromptQuorum 데스크톱 앱은 퍼블릭 베타 단계이며 지금 바로 설치할 수 있습니다 — 대기가 필요하지 않습니다. 하나의 프롬프트를 여러 AI 모델에 전송하고 응답을 비교하십시오. macOS, Windows, Linux를 지원합니다.',
    downloadCta: '베타 다운로드',
    guideCta: '설치 가이드 및 세부 정보 보기',
    backHome: '← 홈으로 돌아가기',
  },
}

export function waitlistDownloadHref(lang: string) {
  return lang === 'en' ? '/download' : `/download?lang=${lang}`
}

export function waitlistGuideHref(lang: string) {
  return lang === 'en'
    ? '/blog/promptquorum-desktop-app-beta'
    : `/${lang}/blog/promptquorum-desktop-app-beta`
}
