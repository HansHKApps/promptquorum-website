import { HtmlLangUpdater } from '@/components/HtmlLangUpdater'

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLangUpdater lang="es" />
      {children}
    </>
  )
}
