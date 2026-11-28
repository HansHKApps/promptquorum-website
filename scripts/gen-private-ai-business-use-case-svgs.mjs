// Writes the "industries" diagram of private-local-ai-for-business in all 9 locales.
// The diagram names safeguards only; it makes no compliance claim.
// Usage: node scripts/gen-private-ai-business-use-case-svgs.mjs
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')

// Per column: [title lines, use lines, safeguard heading, detail lines]
const T = {
  en: ['On-Premises AI: Use Cases by Industry', [
    [['Healthcare'], ['Medical NLP', 'Note summaries'], 'HIPAA safeguards', ['Supports local', 'data handling']],
    [['Finance'], ['Risk assessment', 'Compliance analysis'], 'Data security', ['Can avoid cloud', 'transfer']],
    [['Legal'], ['Document review', 'Contract analysis'], 'Audit trails', ['Access and audit', 'logging']],
    [['Manufacturing &', 'Government'], ['Predictive maintenance', 'Quality control', 'Classified processing'], 'Proprietary data', ['Can stay on-site']],
  ]],
  de: ['Lokale KI: Anwendungen nach Branche', [
    [['Gesundheit'], ['Medizinische NLP', 'Zusammenfassungen'], 'HIPAA-Maßnahmen', ['Unterstützt lokale', 'Datenhaltung']],
    [['Finanzen'], ['Risikobewertung', 'Compliance-Analyse'], 'Datensicherheit', ['Cloud-Transfer', 'vermeidbar']],
    [['Recht'], ['Dokumentprüfung', 'Vertragsanalyse'], 'Audit-Logs', ['Zugriffs- und', 'Prüfprotokolle']],
    [['Fertigung &', 'Behörden'], ['Vorausschauende Wartung', 'Qualitätskontrolle', 'Verschlusssachen'], 'Proprietäre Daten', ['Können vor Ort bleiben']],
  ]],
  es: ['IA on-premises: usos por sector', [
    [['Sanidad'], ['NLP médico', 'Resumen de notas'], 'Salvaguardas HIPAA', ['Facilita el manejo', 'local de datos']],
    [['Finanzas'], ['Evaluación de riesgos', 'Análisis normativo'], 'Seguridad de datos', ['Puede evitar el', 'envío a la nube']],
    [['Legal'], ['Revisión documental', 'Análisis de contratos'], 'Auditoría', ['Registro de accesos', 'y auditoría']],
    [['Industria y', 'Gobierno'], ['Mantenimiento predictivo', 'Control de calidad', 'Procesamiento clasificado'], 'Datos propietarios', ['Pueden quedarse en sitio']],
  ]],
  fr: ['IA sur site : usages par secteur', [
    [['Santé'], ['NLP médical', 'Résumés de notes'], 'Mesures HIPAA', ['Facilite le traitement', 'local des données']],
    [['Finance'], ['Évaluation des risques', 'Analyse de conformité'], 'Sécurité des données', ['Peut éviter l’envoi', 'vers le cloud']],
    [['Juridique'], ['Revue de documents', 'Analyse de contrats'], 'Journaux d’audit', ['Journalisation des', 'accès et audits']],
    [['Industrie et', 'secteur public'], ['Maintenance prédictive', 'Contrôle qualité', 'Traitement classifié'], 'Données propriétaires', ['Peuvent rester sur site']],
  ]],
  pt: ['IA on-premises: usos por setor', [
    [['Saúde'], ['NLP médico', 'Resumo de notas'], 'Proteções HIPAA', ['Apoia o tratamento', 'local dos dados']],
    [['Finanças'], ['Avaliação de risco', 'Análise de conformidade'], 'Segurança de dados', ['Pode evitar envio', 'à nuvem']],
    [['Jurídico'], ['Revisão de documentos', 'Análise de contratos'], 'Trilhas de auditoria', ['Registro de acessos', 'e auditoria']],
    [['Indústria e', 'Governo'], ['Manutenção preditiva', 'Controle de qualidade', 'Processamento sigiloso'], 'Dados proprietários', ['Podem ficar no local']],
  ]],
  ja: ['オンプレミスAI：業界別の用途', [
    [['医療'], ['医療NLP', 'メモの要約'], 'HIPAAの保護措置', ['データのローカル', '管理を支援']],
    [['金融'], ['リスク評価', 'コンプライアンス分析'], 'データセキュリティ', ['クラウド送信を', '回避できる場合あり']],
    [['法務'], ['文書レビュー', '契約分析'], '監査ログ', ['アクセスと監査の', '記録']],
    [['製造・行政'], ['予知保全', '品質管理', '機密処理'], '独自データ', ['社内に保持できます']],
  ]],
  zh: ['本地部署AI：各行业用途', [
    [['医疗'], ['医疗NLP', '病历摘要'], 'HIPAA安全措施', ['支持数据', '本地处理']],
    [['金融'], ['风险评估', '合规分析'], '数据安全', ['可避免向云端', '传输数据']],
    [['法律'], ['文档审阅', '合同分析'], '审计跟踪', ['记录访问', '与审计日志']],
    [['制造与政府'], ['预测性维护', '质量控制', '涉密处理'], '专有数据', ['可保留在本地']],
  ]],
  ko: ['온프레미스 AI: 산업별 활용', [
    [['의료'], ['의료 NLP', '기록 요약'], 'HIPAA 보호 조치', ['로컬 데이터', '처리를 지원']],
    [['금융'], ['위험 평가', '규정 준수 분석'], '데이터 보안', ['클라우드 전송을', '피할 수 있음']],
    [['법률'], ['문서 검토', '계약 분석'], '감사 추적', ['접근 및 감사', '기록']],
    [['제조 및 정부'], ['예지 정비', '품질 관리', '기밀 처리'], '독점 데이터', ['사내에 보관 가능']],
  ]],
  ar: ['الذكاء الاصطناعي في الموقع: الاستخدامات حسب القطاع', [
    [['الصحة'], ['معالجة النصوص الطبية', 'تلخيص الملاحظات'], 'ضمانات HIPAA', ['تدعم معالجة', 'البيانات محليًا']],
    [['المالية'], ['تقييم المخاطر', 'تحليل الامتثال'], 'أمان البيانات', ['يمكن تجنب النقل', 'إلى السحابة']],
    [['القانون'], ['مراجعة المستندات', 'تحليل العقود'], 'سجلات التدقيق', ['تسجيل الوصول', 'والتدقيق']],
    [['التصنيع', 'والحكومة'], ['الصيانة التنبؤية', 'مراقبة الجودة', 'معالجة مصنّفة'], 'بيانات مملوكة', ['يمكن إبقاؤها في الموقع']],
  ]],
}

const COLS = [
  { x: 40, w: 140, bg: '#F3E5F5', c: '#9C27B0', icon: '🏥' },
  { x: 210, w: 140, bg: '#E3F2FD', c: '#1976D2', icon: '💰' },
  { x: 380, w: 140, bg: '#F3E5F5', c: '#7B1FA2', icon: '⚖️' },
  { x: 550, w: 210, bg: '#E8F5E9', c: '#388E3C', icon: '🏭' },
]
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

for (const [lang, [title, cols]] of Object.entries(T)) {
  const rtl = lang === 'ar' ? ' direction="rtl"' : ''
  const text = (x, y, s, size, fill, bold) =>
    `  <text x="${x}" y="${y}" font-family="system-ui, sans-serif" font-size="${size}"${bold ? ' font-weight="700"' : ''} fill="${fill}" text-anchor="middle"${rtl}>${esc(s)}</text>`
  const out = [
    '<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">',
    '  <metadata>',
    `    <dc:title xmlns:dc="http://purl.org/dc/elements/1.1/">${esc(title)}</dc:title>`,
    '    <dc:creator xmlns:dc="http://purl.org/dc/elements/1.1/">PromptQuorum</dc:creator>',
    '    <dc:rights xmlns:dc="http://purl.org/dc/elements/1.1/">© PromptQuorum 2026</dc:rights>',
    `    <dc:source xmlns:dc="http://purl.org/dc/elements/1.1/">https://www.promptquorum.com${lang === 'en' ? '' : '/' + lang}/local-llms/private-local-ai-for-business</dc:source>`,
    '  </metadata>',
    '  <rect width="800" height="400" fill="#FFFFFF"/>',
    text(400, 35, title, 20, '#1C1B1F', true),
  ]
  COLS.forEach((col, i) => {
    // Arabic reads right to left, so the first industry sits on the right.
    const [names, uses, guard, detail] = cols[i]
    const x = lang === 'ar' ? 800 - col.x - col.w : col.x
    const mid = x + col.w / 2
    out.push(`  <rect x="${x}" y="70" width="${col.w}" height="280" rx="6" fill="${col.bg}" stroke="${col.c}" stroke-width="2"/>`)
    out.push(`  <circle cx="${mid}" cy="100" r="20" fill="${col.c}"/>`)
    out.push(text(mid, 108, col.icon, 22, 'white', false))
    let y = 144
    for (const s of names) { out.push(text(mid, y, s, 14, '#1C1B1F', true)); y += 18 }
    y += 10
    for (const s of uses) { out.push(text(mid, y, s, 11, '#49454F', false)); y += 16 }
    y += 16
    out.push(text(mid, y, guard, 11, col.c, true))
    y += 22
    for (const s of detail) { out.push(text(mid, y, s, 10, '#49454F', false)); y += 14 }
  })
  out.push('  <text x="792" y="390" font-family="system-ui, sans-serif" font-size="10" fill="#999999" text-anchor="end">promptquorum.com</text>', '</svg>', '')
  fs.writeFileSync(path.join(ROOT, `public/images/private-local-ai-for-business-use-cases-${lang}.svg`), out.join('\n'))
}
console.log('Wrote 9 diagrams.')
