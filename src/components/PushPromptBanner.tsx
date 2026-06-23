'use client'

import { useEffect, useState, useCallback } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { Suspense } from 'react'

const STORAGE_KEY = 'push_prompt_dismissed_until'
const SESSION_COUNT_KEY = 'pq_session_count'
const SESSION_ACTIVE_KEY = 'pq_session_active'
const SUPPRESS_DURATION_MS = 90 * 24 * 60 * 60 * 1000 // 3 months
const NEW_VISITOR_DELAY_MS = 10 * 60 * 1000 // 10 minutes
const RETURN_VISITOR_DELAY_MS = 30 * 1000 // 30 seconds on return visit

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
    title: 'Make AI do what you actually want',
    body: 'Real techniques. Tested prompts. Zero fluff. Land in your browser the moment we publish.',
    allow: "I'm in",
    dismiss: 'Maybe later',
  },
  de: {
    title: 'KI die wirklich funktioniert',
    body: 'Echte Techniken. Getestete Prompts. Kein Bullshit. Direkt in deinen Browser, sobald wir veröffentlichen.',
    allow: 'Dabei sein',
    dismiss: 'Vielleicht später',
  },
  fr: {
    title: "L'IA qui fait enfin ce que vous voulez",
    body: 'Techniques testées, prompts concrets, zéro théorie creuse. Livré dès la publication.',
    allow: 'Je suis partant',
    dismiss: 'Peut-être plus tard',
  },
  ja: {
    title: 'AIを本当に使いこなす',
    body: '実証済みのプロンプト技術。理論ではなく実践。公開と同時に通知。',
    allow: '参加する',
    dismiss: '後で',
  },
  zh: {
    title: '让 AI 真正听你的',
    body: '实测提示词技巧，零废话，零理论。发布即推送。',
    allow: '加入',
    dismiss: '暂不',
  },
}

function PushPromptBannerInner() {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  // Detect language from query param, pathname, or default to en
  const rawLang = searchParams?.get('lang') ?? ''
  let lang = 'en'
  if (['en', 'de', 'fr', 'ja', 'zh'].includes(rawLang)) {
    lang = rawLang
  } else {
    // Try to detect from pathname (e.g., /de/prompt-bites → de)
    const pathMatch = pathname?.match(/^\/([a-z]{2})\//)
    if (pathMatch && ['en', 'de', 'fr', 'ja', 'zh'].includes(pathMatch[1])) {
      lang = pathMatch[1]
    }
  }
  const c = (COPY[lang as keyof typeof COPY] ?? COPY.en)!

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const until = localStorage.getItem(STORAGE_KEY)
      if (until && Date.now() < parseInt(until, 10)) return
    } catch {
      /* ignore */
    }

    // Count distinct sessions — sessionStorage clears on tab/browser close
    let sessionCount = 1
    try {
      if (!sessionStorage.getItem(SESSION_ACTIVE_KEY)) {
        sessionCount = parseInt(localStorage.getItem(SESSION_COUNT_KEY) || '0', 10) + 1
        localStorage.setItem(SESSION_COUNT_KEY, String(sessionCount))
        sessionStorage.setItem(SESSION_ACTIVE_KEY, '1')
      } else {
        sessionCount = parseInt(localStorage.getItem(SESSION_COUNT_KEY) || '1', 10)
      }
    } catch {
      /* ignore */
    }

    const isReturning = sessionCount >= 2
    const delay = isReturning ? RETURN_VISITOR_DELAY_MS : NEW_VISITOR_DELAY_MS

    // Don't show if already subscribed via OneSignal
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
    }, delay)

    return () => clearTimeout(timer)
  }, [])

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now() + SUPPRESS_DURATION_MS))
    } catch {
      /* ignore */
    }
    setVisible(false)
  }, [])

  const allow = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now() + SUPPRESS_DURATION_MS))
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
        background: 'linear-gradient(145deg, #1C1B1F 0%, #211F28 100%)',
        border: '1px solid #5B4B8A',
        borderRadius: '16px',
        padding: '20px 24px',
        maxWidth: '520px',
        width: 'calc(100vw - 48px)',
        boxShadow: '0 0 0 1px rgba(103,80,164,0.15), 0 8px 40px rgba(103,80,164,0.25), 0 2px 8px rgba(0,0,0,0.5)',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '16px', lineHeight: 1 }}>⚡</span>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#EDE8F5', letterSpacing: '-0.01em' }}>
            {c.title}
          </p>
        </div>
        <p style={{ margin: 0, fontSize: '13px', color: '#B8B0C8', lineHeight: 1.6 }}>
          {c.body}
        </p>
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <button
          onClick={dismiss}
          style={{
            padding: '8px 18px',
            borderRadius: '100px',
            border: '1px solid #3A3545',
            background: 'transparent',
            color: '#8A8499',
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
            padding: '8px 22px',
            borderRadius: '100px',
            border: 'none',
            background: 'linear-gradient(135deg, #7C5CBF 0%, #5B3FA0 100%)',
            color: '#FFFFFF',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            whiteSpace: 'nowrap',
            letterSpacing: '0.01em',
            boxShadow: '0 2px 12px rgba(103,80,164,0.4)',
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
