import { HtmlLangUpdater } from '@/components/HtmlLangUpdater'

export default function KoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLangUpdater lang="ko" />
      {children}
    </>
  )
}
