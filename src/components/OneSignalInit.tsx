'use client'

import { useEffect } from 'react'
import { useLang } from '@/hooks/useLang'

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

export function OneSignalInit() {
  const lang = useLang()

  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID
    if (!appId) return

    // Inject SDK script once
    if (!document.getElementById('onesignal-sdk')) {
      const script = document.createElement('script')
      script.id = 'onesignal-sdk'
      script.src = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js'
      script.defer = true
      document.head.appendChild(script)
    }

    window.OneSignalDeferred = window.OneSignalDeferred || []
    window.OneSignalDeferred.push(async (OneSignal: OneSignalType) => {
      await OneSignal.init({
        appId,
        serviceWorkerPath: '/OneSignalSDKWorker.js',
        notifyButton: { enable: false },
        promptOptions: { autoPrompt: false },
      })

      // Tag subscribed users with their language for future targeted sends
      if (OneSignal.User.PushSubscription.optedIn) {
        await OneSignal.User.addTags({ lang })
      }
    })
  }, [lang])

  return null
}
