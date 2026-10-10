// UI strings for the review-page → directory funnel (DirectoryBlock + popup).
// Same `Record<key, Record<Language, string>>` + `{var}` shape as
// src/components/local-ai-directory/directory-i18n.ts. Resolved server-side
// (see directory-funnel.ts) so no client bundle ships the 9-language object.
//
// Counts ({n}) are never written here — they come from the directory data.

import type { Language } from '@/lib/blog/blogContent'

type Dict = Record<Language, string>

const FUNNEL_UI = {
  heading: {
    en: 'Part of the Local AI Directory',
    de: 'Teil des Local-AI-Verzeichnisses',
    fr: "Fait partie de l'annuaire Local AI",
    ja: 'ローカルAIディレクトリの一部',
    zh: '本地 AI 目录的一部分',
    es: 'Parte del directorio de IA local',
    pt: 'Parte do diretório de IA local',
    ar: 'جزء من دليل الذكاء الاصطناعي المحلي',
    ko: '로컬 AI 디렉터리의 일부',
  },
  viewEntry: {
    en: 'View {app} in the directory',
    de: '{app} im Verzeichnis ansehen',
    fr: "Voir {app} dans l'annuaire",
    ja: 'ディレクトリで{app}を見る',
    zh: '在目录中查看 {app}',
    es: 'Ver {app} en el directorio',
    pt: 'Ver {app} no diretório',
    ar: 'عرض {app} في الدليل',
    ko: '디렉터리에서 {app} 보기',
  },
  similarLabel: {
    en: 'Similar tools',
    de: 'Ähnliche Tools',
    fr: 'Outils similaires',
    ja: '類似ツール',
    zh: '类似工具',
    es: 'Herramientas similares',
    pt: 'Ferramentas semelhantes',
    ar: 'أدوات مشابهة',
    ko: '비슷한 도구',
  },
  compareAll: {
    en: 'Compare all {n} tools by platform, license, price',
    de: 'Alle {n} Tools nach Plattform, Lizenz und Preis vergleichen',
    fr: 'Comparer les {n} outils par plateforme, licence et prix',
    ja: '全{n}ツールをプラットフォーム・ライセンス・価格で比較',
    zh: '按平台、许可证和价格比较全部 {n} 个工具',
    es: 'Compara las {n} herramientas por plataforma, licencia y precio',
    pt: 'Compare as {n} ferramentas por plataforma, licença e preço',
    ar: 'قارن بين جميع الأدوات ({n}) حسب المنصة والترخيص والسعر',
    ko: '전체 {n}개 도구를 플랫폼·라이선스·가격별로 비교',
  },
  otherPlatform: {
    en: 'Not on {platform}? See tools for other platforms',
    de: 'Nicht für {platform}? Tools für andere Plattformen ansehen',
    fr: 'Pas sur {platform} ? Voir les outils pour d’autres plateformes',
    ja: '{platform}に非対応？他のプラットフォーム向けツールを見る',
    zh: '不支持 {platform}？查看其他平台的工具',
    es: '¿No está en {platform}? Ver herramientas para otras plataformas',
    pt: 'Não está no {platform}? Veja ferramentas para outras plataformas',
    ar: 'غير متوفر على {platform}؟ اطّلع على أدوات لمنصات أخرى',
    ko: '{platform}에서 쓸 수 없나요? 다른 플랫폼용 도구 보기',
  },
  compareInDirectory: {
    en: 'Compare in directory',
    de: 'Im Verzeichnis vergleichen',
    fr: "Comparer dans l'annuaire",
    ja: 'ディレクトリで比較する',
    zh: '在目录中比较',
    es: 'Comparar en el directorio',
    pt: 'Comparar no diretório',
    ar: 'قارن في الدليل',
    ko: '디렉터리에서 비교',
  },
  // --- popup (Part C) ---
  popupHeadline: {
    en: 'Looking for more local AI apps?',
    de: 'Auf der Suche nach weiteren lokalen KI-Apps?',
    fr: "Vous cherchez d'autres applications d'IA locale ?",
    ja: 'ほかのローカルAIアプリをお探しですか？',
    zh: '想找更多本地 AI 应用？',
    es: '¿Buscas más aplicaciones de IA local?',
    pt: 'Procurando mais apps de IA local?',
    ar: 'تبحث عن المزيد من تطبيقات الذكاء الاصطناعي المحلي؟',
    ko: '더 많은 로컬 AI 앱을 찾고 계신가요?',
  },
  popupBody: {
    en: 'Our directory lists {n} tools. Compare platform, license and more side by side.',
    de: 'Unser Verzeichnis listet {n} Tools. Vergleiche Plattform, Lizenz und mehr nebeneinander.',
    fr: "Notre annuaire recense {n} outils. Comparez plateforme, licence et plus côte à côte.",
    ja: 'ディレクトリには{n}個のツールが掲載されています。プラットフォームやライセンスなどを並べて比較できます。',
    zh: '我们的目录收录了 {n} 个工具。可并排比较平台、许可证等信息。',
    es: 'Nuestro directorio incluye {n} herramientas. Compara plataforma, licencia y más lado a lado.',
    pt: 'Nosso diretório lista {n} ferramentas. Compare plataforma, licença e mais lado a lado.',
    ar: 'يضم دليلنا {n} أداة. قارن المنصة والترخيص وغيرها جنبًا إلى جنب.',
    ko: '디렉터리에 {n}개 도구가 있습니다. 플랫폼, 라이선스 등을 나란히 비교해 보세요.',
  },
  popupCta: {
    en: 'Browse the directory',
    de: 'Verzeichnis durchsuchen',
    fr: "Parcourir l'annuaire",
    ja: 'ディレクトリを見る',
    zh: '浏览目录',
    es: 'Explorar el directorio',
    pt: 'Explorar o diretório',
    ar: 'تصفّح الدليل',
    ko: '디렉터리 둘러보기',
  },
  popupClose: {
    en: 'Close',
    de: 'Schließen',
    fr: 'Fermer',
    ja: '閉じる',
    zh: '关闭',
    es: 'Cerrar',
    pt: 'Fechar',
    ar: 'إغلاق',
    ko: '닫기',
  },
  popupSimilar: {
    en: 'Similar to {app}: {tools}',
    de: 'Ähnlich wie {app}: {tools}',
    fr: 'Similaire à {app} : {tools}',
    ja: '{app}に近いツール：{tools}',
    zh: '与 {app} 类似：{tools}',
    es: 'Similar a {app}: {tools}',
    pt: 'Semelhante a {app}: {tools}',
    ar: 'مشابه لـ {app}: {tools}',
    ko: '{app}와(과) 비슷한 도구: {tools}',
  },
} satisfies Record<string, Dict>

export type FunnelUiKey = keyof typeof FUNNEL_UI

export function funnelT(key: FunnelUiKey, lang: Language, vars?: Record<string, string | number>): string {
  const entry = FUNNEL_UI[key] as Dict
  let out = entry[lang] ?? entry.en
  if (vars) for (const [k, v] of Object.entries(vars)) out = out.split(`{${k}}`).join(String(v))
  return out
}
