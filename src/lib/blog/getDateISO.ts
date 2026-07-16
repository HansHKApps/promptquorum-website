// Parses a hand-translated, human-readable publishDate string (e.g. "Published March 14, 2026",
// "Veröffentlicht 14. März 2026", "发布于 2026年3月14日") into an ISO date for the <time dateTime>
// attribute. The visible text stays as the translated string; only the machine-readable
// attribute is derived here.
const MONTH_MAP: Record<string, string> = {
  january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
  july: '07', august: '08', september: '09', october: '10', november: '11', december: '12',
  januar: '01', februar: '02', märz: '03', mai: '05', juni: '06', juli: '07',
  dezember: '12', oktober: '10',
  janvier: '01', février: '02', mars: '03', avril: '04', juin: '06', juillet: '07',
  août: '08', septembre: '09', octobre: '10', novembre: '11', décembre: '12',
  enero: '01', febrero: '02', marzo: '03', mayo: '05', junio: '06', julio: '07',
  agosto: '08', octubre: '10', noviembre: '11', diciembre: '12',
  janeiro: '01', fevereiro: '02', março: '03', maio: '05', junho: '06', julho: '07',
  setembro: '09', outubro: '10', novembro: '11', dezembro: '12',
  'يناير': '01', 'فبراير': '02', 'مارس': '03', 'أبريل': '04', 'مايو': '05', 'يونيو': '06',
  'يوليو': '07', 'أغسطس': '08', 'سبتمبر': '09', 'أكتوبر': '10', 'نوفمبر': '11', 'ديسمبر': '12',
}

/** Converts a localized "Published ..." date string to "YYYY-MM-DD" for HTML `dateTime`. */
export function getDateISO(dateStr: string): string {
  const yearMatch = dateStr.match(/(\d{4})/)
  if (!yearMatch) return dateStr

  const year = yearMatch[1]

  // Chinese/Japanese use 年/月/日, Korean uses 년/월/일 — extract digits next to those markers.
  const monthMarkerMatch = dateStr.match(/(\d{1,2})\s*[月월]/)
  if (monthMarkerMatch) {
    const month = monthMarkerMatch[1].padStart(2, '0')
    const dayMarkerMatch = dateStr.match(/(\d{1,2})\s*[日일]/)
    const day = dayMarkerMatch ? dayMarkerMatch[1].padStart(2, '0') : '01'
    return `${year}-${month}-${day}`
  }

  const lower = dateStr.toLowerCase()
  const monthEntry = Object.entries(MONTH_MAP).find(([name]) => lower.includes(name))
  if (!monthEntry) return dateStr
  const month = monthEntry[1]

  const dayMatch = dateStr.replace(year, '').match(/\d{1,2}/)
  const day = dayMatch ? dayMatch[0].padStart(2, '0') : '01'

  return `${year}-${month}-${day}`
}
