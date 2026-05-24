'use client'

import { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const STORAGE_KEY = 'push_prompt_dismissed_until'
const OPTED_IN_KEY = 'push_prompt_opted_in'
const DISMISS_DURATION_MS = 60 * 24 * 60 * 60 * 1000 // 60 days (~2 months)
const SHOW_DELAY_MS = 10_000 // 10 seconds

interface OneSignalType {
  init: (config: {
    appId: string
    serviceWorkerPath?: string
    notifyButton?: { enable: boolean }
    promptOptions?: { autoPrompt: boolean }
  }) => Promise<void>
  Notifications?: {
    requestPermission: () => Promise<void>
  }
  User: {
    PushSubscription: {
      optedIn: boolean
    }
    addTags: (tags: Record<string, string>) => Promise<void>
  }
}

declare global {
  interface Window {
    OneSignalDeferred?: Array<(onesignal: OneSignalType) => void>
    OneSignal?: OneSignalType
  }
}

const COPY: Record<
  string,
  {
    title: string
    body: string
    allow: string
    dismiss: string
  }
> = {
  en: {
    title: 'Stay ahead of AI news',
    body: 'Get notified when we publish new prompt engineering guides and PromptQuorum updates.',
    allow: 'Notify me',
    dismiss: 'No thanks',
  },
  de: {
    title: 'Bleib auf dem Laufenden',
    body: 'Erhalte Benachrichtigungen zu neuen Prompt-Engineering-Guides und PromptQuorum-Updates.',
    allow: 'Benachrichtigen',
    dismiss: 'Nein danke',
  },
  fr: {
    title: 'Restez informé',
    body: 'Recevez une notification pour nos nouveaux guides de prompt engineering et les mises à jour PromptQuorum.',
    allow: "M'avertir",
    dismiss: 'Non merci',
  },
  ja: {
    title: 'AI情報をいち早く',
    body: 'プロンプトエンジニアリングの新ガイドとPromptQuorumのアップデートをお知らせします。',
    allow: '通知を受け取る',
    dismiss: 'いいえ',
  },
  zh: {
    title: '抢先获取 AI 资讯',
    body: '新的提示词工程指南和 PromptQuorum 更新发布时，第一时间收到通知。',
    allow: '订阅通知',
    dismiss: '不了，谢谢',
  },
}

function PushPromptBannerInner() {
  const searchParams = useSearchParams()
  const rawLang = searchParams?.get('lang') ?? ''
  const lang = (
    ['en', 'de', 'fr', 'ja', 'zh'].includes(rawLang) ? rawLang : 'en'
  ) as string
  const c = COPY[lang] ?? COPY.en

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(OPTED_IN_KEY)) return
      const until = localStorage.getItem(STORAGE_KEY)
      if (until && Date.now() < parseInt(until, 10)) return
    } catch {
      /* ignore */
    }

    // Don't show if already subscribed
    const checkSubscribed = () => {
      try {
        const w = window as Window & { OneSignal?: OneSignalType }
        if (w.OneSignal?.User?.PushSubscription?.optedIn) return true
      } catch {
        /* ignore */
      }
      return false
    }

    const timer = setTimeout(() => {
      if (!checkSubscribed()) {
        setVisible(true)
      }
    }, SHOW_DELAY_MS)

    return () => clearTimeout(timer)
  }, [])

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now() + DISMISS_DURATION_MS))
    } catch {
      /* ignore */
    }
    setVisible(false)
  }, [])

  const allow = useCallback(() => {
    try {
      localStorage.setItem(OPTED_IN_KEY, '1')
    } catch {
      /* ignore */
    }
    setVisible(false)
    window.OneSignalDeferred = window.OneSignalDeferred || []
    window.OneSignalDeferred.push(async (OneSignal: OneSignalType) => {
      await OneSignal.Notifications?.requestPermission()
      // After permission, tag with language (mirrors OneSignalInit.tsx)
      if (OneSignal.User.PushSubscription.optedIn) {
        await OneSignal.User.addTags({ lang })
      }
    })
  }, [lang])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Push notification opt-in"
      style={{
        position: 'fixed',
        bottom: '96px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9997,
        background: '#1C1B1F',
        border: '1px solid #49454F',
        borderRadius: '16px',
        padding: '20px 24px',
        maxWidth: '520px',
        width: 'calc(100vw - 48px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#E6E1E5' }}>
          {c.title}
        </p>
        <p style={{ margin: 0, fontSize: '13px', color: '#CAC4D0', lineHeight: 1.6 }}>
          {c.body}
        </p>
      </div>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <button
          onClick={dismiss}
          style={{
            padding: '8px 20px',
            borderRadius: '100px',
            border: '1px solid #49454F',
            background: 'transparent',
            color: '#CAC4D0',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            whiteSpace: 'nowrap',
          }}
        >
          {c.dismiss}
        </button>
        <button
          onClick={allow}
          style={{
            padding: '8px 20px',
            borderRadius: '100px',
            border: 'none',
            background: '#6750A4',
            color: '#FFFFFF',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            whiteSpace: 'nowrap',
          }}
        >
          {c.allow}
        </button>
      </div>
    </div>
  )
}

export function PushPromptBanner() {
  return (
    <Suspense>
      <PushPromptBannerInner />
    </Suspense>
  )
}
