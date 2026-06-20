import { HtmlLangUpdater } from '@/components/HtmlLangUpdater'

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLangUpdater lang="ar" />
      {children}
    </>
  )
}
