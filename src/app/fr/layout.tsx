import { HtmlLangUpdater } from '@/components/HtmlLangUpdater'

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLangUpdater lang="fr" />
      {children}
    </>
  )
}
