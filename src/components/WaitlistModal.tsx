'use client'

import { useLang } from '@/hooks/useLang'
import type { Lang } from '@/hooks/useLang'
import { useWaitlist } from '@/context/WaitlistContext'

// The "Waitlist" label stays as-is across the site (nav, buttons). What
// changes here is the destination: PromptQuorum desktop is in public beta
// now, so this invites the visitor straight into the beta instead of
// collecting an email for a later invite.
const T: Record<Lang, { eyebrow: string; title: string; desc: string; downloadCta: string; guideCta: string }> = {
  en: {
    eyebrow: 'Beta Testing',
    title: "You're Invited",
    desc: 'PromptQuorum\'s desktop app is in public beta and ready to install today — no waiting. Dispatch one prompt to many AI models and compare their answers, on macOS, Windows, or Linux.',
    downloadCta: 'Download the Beta',
    guideCta: 'Read the install guide & details',
  },
  de: {
    eyebrow: 'Beta-Test',
    title: 'Sie sind eingeladen',
    desc: 'Die Desktop-App von PromptQuorum befindet sich in der öffentlichen Beta und lässt sich noch heute installieren — kein Warten nötig. Senden Sie einen Prompt an viele KI-Modelle und vergleichen Sie die Antworten, auf macOS, Windows oder Linux.',
    downloadCta: 'Beta herunterladen',
    guideCta: 'Installationsanleitung & Details lesen',
  },
  fr: {
    eyebrow: 'Test bêta',
    title: 'Vous êtes invité(e)',
    desc: 'L\'application de bureau PromptQuorum est en bêta publique et s\'installe dès aujourd\'hui — sans attente. Envoyez un même prompt à plusieurs modèles IA et comparez leurs réponses, sur macOS, Windows ou Linux.',
    downloadCta: 'Télécharger la bêta',
    guideCta: 'Lire le guide d\'installation et les détails',
  },
  ja: {
    eyebrow: 'ベータテスト',
    title: 'ご招待します',
    desc: 'PromptQuorumのデスクトップアプリはパブリックベータ公開中で、今すぐインストールできます。待つ必要はありません。1つのプロンプトを複数のAIモデルに送信し、回答を比較できます。macOS、Windows、Linuxに対応。',
    downloadCta: 'ベータ版をダウンロード',
    guideCta: 'インストールガイドと詳細を見る',
  },
  zh: {
    eyebrow: '内测邀请',
    title: '诚邀您加入',
    desc: 'PromptQuorum 桌面应用现已开放公开测试，今天就能安装——无需等待。将同一条提示词发送给多个 AI 模型并比较回答，支持 macOS、Windows 和 Linux。',
    downloadCta: '下载测试版',
    guideCta: '查看安装指南与详情',
  },
  es: {
    eyebrow: 'Beta de prueba',
    title: 'Estás invitado',
    desc: 'La app de escritorio de PromptQuorum está en beta pública y se instala hoy mismo — sin listas de espera. Envía un mismo prompt a varios modelos de IA y compara sus respuestas, en macOS, Windows o Linux.',
    downloadCta: 'Descargar la beta',
    guideCta: 'Leer la guía de instalación y detalles',
  },
  pt: {
    eyebrow: 'Teste Beta',
    title: 'Você Está Convidado',
    desc: 'O aplicativo desktop do PromptQuorum está em beta público e pode ser instalado hoje mesmo — sem espera. Envie um único prompt para vários modelos de IA e compare as respostas, no macOS, Windows ou Linux.',
    downloadCta: 'Baixar o Beta',
    guideCta: 'Ler o guia de instalação e detalhes',
  },
  ar: {
    eyebrow: 'اختبار تجريبي',
    title: 'أنت مدعو',
    desc: 'تطبيق PromptQuorum لسطح المكتب متاح الآن في النسخة التجريبية العامة ويمكن تثبيته اليوم — دون انتظار. أرسل أمرًا واحدًا إلى عدة نماذج ذكاء اصطناعي وقارن إجاباتها، على macOS أو Windows أو Linux.',
    downloadCta: 'تنزيل النسخة التجريبية',
    guideCta: 'اطّلع على دليل التثبيت والتفاصيل',
  },
  ko: {
    eyebrow: '베타 테스트',
    title: '초대합니다',
    desc: 'PromptQuorum 데스크톱 앱은 퍼블릭 베타 단계이며 지금 바로 설치할 수 있습니다 — 대기가 필요하지 않습니다. 하나의 프롬프트를 여러 AI 모델에 전송하고 응답을 비교하십시오. macOS, Windows, Linux를 지원합니다.',
    downloadCta: '베타 다운로드',
    guideCta: '설치 가이드 및 세부 정보 보기',
  },
}

function downloadHref(lang: string) {
  return lang === 'en' ? '/download' : `/download?lang=${lang}`
}

function guideHref(lang: string) {
  return lang === 'en'
    ? '/blog/promptquorum-desktop-app-beta'
    : `/${lang}/blog/promptquorum-desktop-app-beta`
}

function WaitlistModalInner() {
  const { isOpen, closeWaitlist } = useWaitlist()
  const lang = useLang()
  const t = T[lang as Lang] ?? T.en
  const dir = lang === 'ar' ? 'rtl' : undefined

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={closeWaitlist}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-md rounded-lg bg-white shadow-xl" dir={dir}>
          {/* Close Button */}
          <button
            onClick={closeWaitlist}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground mb-3">
              {t.eyebrow}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.title}</h2>
            <p className="text-gray-600 text-sm mb-6">{t.desc}</p>

            <div className="flex flex-col gap-3">
              <a
                href={downloadHref(lang)}
                onClick={closeWaitlist}
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t.downloadCta}
              </a>
              <a
                href={guideHref(lang)}
                onClick={closeWaitlist}
                className="inline-flex items-center justify-center rounded-md border border-primary/25 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                {t.guideCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WaitlistModal() {
  return <WaitlistModalInner />
}
