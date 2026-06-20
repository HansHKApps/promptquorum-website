import { HtmlLangUpdater } from '@/components/HtmlLangUpdater'

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLangUpdater lang="de" />
      {children}
    </>
  )
}
