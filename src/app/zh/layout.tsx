import { HtmlLangUpdater } from '@/components/HtmlLangUpdater'

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLangUpdater lang="zh" />
      {children}
    </>
  )
}
