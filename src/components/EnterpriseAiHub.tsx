'use client'

import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'
import type { EnterpriseAiHubData } from '@/lib/enterprise-ai/hub-data'

interface Props extends EnterpriseAiHubData {
  initialLang?: Language
}

const HUB_TITLE: Record<string, string> = {
  en: 'Enterprise AI: Build, Buy, Govern',
  de: 'Enterprise AI: Build, Buy, Govern',
  fr: 'Enterprise AI : Build, Buy, Govern',
  ja: 'エンタープライズAI：構築・購入・統制',
  zh: '企业AI：构建、采购、治理',
  es: 'IA Empresarial: Build, Buy, Govern',
  pt: 'IA Empresarial: Build, Buy, Govern',
  ar: 'الذكاء الاصطناعي للمؤسسات: البناء والشراء والحوكمة',
  ko: '엔터프라이즈 AI: 구축, 도입, 거버넌스',
}

const HUB_DESC: Record<string, string> = {
  en: 'Practical guidance for enterprises deploying AI at scale, organized into three lanes: building in-house capability, buying vendor tools, and governing AI use across the organization.',
  de: 'Praktische Leitfäden für Unternehmen, die KI im großen Maßstab einsetzen — gegliedert in drei Bereiche: eigene Fähigkeiten aufbauen, Anbieter-Tools einkaufen und den KI-Einsatz im Unternehmen steuern.',
  fr: 'Conseils pratiques pour les entreprises qui déploient l\'IA à grande échelle, organisés en trois axes : développer des capacités internes, acheter des outils fournisseurs, et gouverner l\'usage de l\'IA dans l\'organisation.',
  ja: '大規模にAIを導入する企業向けの実践ガイド。社内能力の構築、ベンダーツールの購入、組織全体でのAI利用統制の3つの領域に分かれています。',
  zh: '面向大规模部署AI的企业的实用指南，分为三个方向：构建内部能力、采购供应商工具、以及在组织范围内治理AI使用。',
  es: 'Guías prácticas para empresas que despliegan IA a gran escala, organizadas en tres áreas: crear capacidad interna, comprar herramientas de proveedores y gobernar el uso de la IA en la organización.',
  pt: 'Orientação prática para empresas que implantam IA em escala, organizada em três frentes: construir capacidade interna, comprar ferramentas de fornecedores e governar o uso de IA na organização.',
  ar: 'إرشادات عملية للمؤسسات التي تنشر الذكاء الاصطناعي على نطاق واسع، منظمة في ثلاثة محاور: بناء القدرات الداخلية، وشراء أدوات الموردين، وحوكمة استخدام الذكاء الاصطناعي داخل المؤسسة.',
  ko: '대규모로 AI를 도입하는 기업을 위한 실용적인 가이드로, 사내 역량 구축, 벤더 도구 구매, 조직 전반의 AI 사용 거버넌스라는 세 가지 방향으로 구성되어 있습니다.',
}

const LANE_LABELS: Record<string, { build: string; buy: string; govern: string }> = {
  en: { build: 'Build', buy: 'Buy', govern: 'Govern' },
  de: { build: 'Build', buy: 'Buy', govern: 'Govern' },
  fr: { build: 'Build', buy: 'Buy', govern: 'Govern' },
  ja: { build: '構築', buy: '購入', govern: '統制' },
  zh: { build: '构建', buy: '采购', govern: '治理' },
  es: { build: 'Construir', buy: 'Comprar', govern: 'Gobernar' },
  pt: { build: 'Construir', buy: 'Comprar', govern: 'Governar' },
  ar: { build: 'البناء', buy: 'الشراء', govern: 'الحوكمة' },
  ko: { build: '구축', buy: '구매', govern: '거버넌스' },
}

function EnterpriseAiHubContent({ initialLang, titlesMap, liveSlugs }: Props) {
  const lang = useLang(initialLang) as Language
  const langPrefix = lang === 'en' ? '' : `/${lang}`
  const lanes = LANE_LABELS[lang] ?? LANE_LABELS.en

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4 leading-tight">
          {HUB_TITLE[lang] ?? HUB_TITLE.en}
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl">
          {HUB_DESC[lang] ?? HUB_DESC.en}
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {(['build', 'buy', 'govern'] as const).map((laneKey) => (
            <div key={laneKey} className="border border-primary/15 rounded-xl p-5">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">{lanes[laneKey]}</h2>
              <p className="text-sm text-text-secondary">
                {laneKey === 'govern' ? (lang === 'en' ? 'Policy, risk, and compliance for AI use across the organization.' : '') : ''}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {liveSlugs.map((slug) => (
            <Link
              key={slug}
              href={`${langPrefix}/enterprise-ai/${slug}`}
              className="block border border-primary/15 rounded-xl p-5 hover:border-primary/40 hover:bg-primary/5 transition-colors"
            >
              <span className="inline-block px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest rounded-full bg-amber-50 text-amber-700 border border-amber-200 mb-2">
                {lanes.govern}
              </span>
              <h3 className="text-lg font-bold text-text-primary">{titlesMap[slug] ?? slug}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function EnterpriseAiHub(props: Props) {
  return <EnterpriseAiHubContent {...props} />
}
