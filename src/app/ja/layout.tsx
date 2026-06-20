import { HtmlLangUpdater } from '@/components/HtmlLangUpdater'

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLangUpdater lang="ja" />
      {children}
    </>
  )
}
