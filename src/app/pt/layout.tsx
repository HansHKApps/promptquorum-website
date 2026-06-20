import { HtmlLangUpdater } from '@/components/HtmlLangUpdater'

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLangUpdater lang="pt" />
      {children}
    </>
  )
}
