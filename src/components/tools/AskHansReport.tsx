// Ask Hans usage report on /askhans: renders the shared usage view (also used on /mcp-stats) with the Ask Hans data.
import type { Language } from '@/lib/blog/blogContent'
import type { AskHansReport as AskHansReportData } from '@/lib/askhans/report'
import { UsageReportView } from './UsageReportView'

export function AskHansReport({ lang, report }: { lang: Language; report: AskHansReportData }) {
  return <UsageReportView lang={lang} report={report} kind="askhans" />
}
