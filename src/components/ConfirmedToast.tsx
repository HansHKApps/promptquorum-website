'use client'

import { useEffect, useState } from 'react'

export function ConfirmedToast() {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const confirmed = params.get('confirmed')
    if (confirmed === 'true') {
      setMessage("You're confirmed! We'll email you at beta launch.")
      setVisible(true)
      // Strip the param from the URL without reload
      const url = new URL(window.location.href)
      url.searchParams.delete('confirmed')
      window.history.replaceState({}, '', url.toString())
    } else if (confirmed === 'invalid' || confirmed === 'error') {
      setMessage('Confirmation link is invalid or expired. Please sign up again.')
      setVisible(true)
      const url = new URL(window.location.href)
      url.searchParams.delete('confirmed')
      window.history.replaceState({}, '', url.toString())
    }
  }, [])

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => setVisible(false), 6000)
    return () => clearTimeout(t)
  }, [visible])

  if (!visible) return null

  const isError = message.startsWith('Confirmation')

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        background: isError ? '#2B1B1F' : '#1C2B1F',
        border: `1px solid ${isError ? '#CF6679' : '#4CAF50'}`,
        color: isError ? '#CF6679' : '#81C784',
        borderRadius: '12px',
        padding: '14px 24px',
        fontSize: '14px',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 500,
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        whiteSpace: 'nowrap',
        maxWidth: 'calc(100vw - 48px)',
      }}
    >
      {message}
    </div>
  )
}
