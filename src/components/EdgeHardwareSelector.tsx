'use client'

import { useState, useMemo } from 'react'
import { useLang } from '@/hooks/useLang'

type Language = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

interface Platform {
  name: string
  classLabel: string
  minPowerW: number
  maxPowerW: number
  maxModelParamsB: number
  videoCapable: boolean
  industrialTemp: boolean
  note: string
}

// Figures sourced from vendor documentation as of 2026-09-02 — see edge-ai-hardware-for-local-llms
// comparison table for citations. Ranges are illustrative fit bands, not guaranteed benchmarks.
const PLATFORMS: Platform[] = [
  { name: 'Hailo-10H (M.2 accelerator)', classLabel: 'Dedicated accelerator', minPowerW: 1, maxPowerW: 3, maxModelParamsB: 2, videoCapable: true, industrialTemp: true, note: '2.1 W average running Qwen2-1.5B; 9.45 tok/s' },
  { name: 'Rockchip RK3588 (SBC NPU)', classLabel: 'SBC + NPU', minPowerW: 2, maxPowerW: 8, maxModelParamsB: 3, videoCapable: true, industrialTemp: false, note: '6 TOPS NPU; cheapest credible SBC-class path' },
  { name: 'NVIDIA Jetson Orin Nano Super', classLabel: 'Integrated edge SoC', minPowerW: 7, maxPowerW: 25, maxModelParamsB: 8, videoCapable: true, industrialTemp: true, note: 'Entry dev kit; natural upgrade from a Raspberry Pi' },
  { name: 'NVIDIA Jetson Orin NX', classLabel: 'Integrated edge SoC', minPowerW: 10, maxPowerW: 40, maxModelParamsB: 13, videoCapable: true, industrialTemp: true, note: 'Mid-tier module, up to 157 TOPS' },
  { name: 'NVIDIA Jetson AGX Orin 64GB', classLabel: 'Integrated edge SoC', minPowerW: 15, maxPowerW: 60, maxModelParamsB: 34, videoCapable: true, industrialTemp: true, note: '275 TOPS; current volume robotics workhorse' },
  { name: 'NVIDIA Jetson AGX Thor (T5000)', classLabel: 'Embedded GPU module', minPowerW: 40, maxPowerW: 130, maxModelParamsB: 70, videoCapable: true, industrialTemp: true, note: '2,070 TFLOPS sparse FP4; up to 32 MIPI CSI-2 cameras' },
]

const UI: Record<Language, {
  powerBudget: string; modelSize: string; videoIngest: string; industrial: string
  needsVideo: string; needsIndustrial: string
  results: string; noMatch: string
  platform: string; power: string; fitsModel: string; note: string
}> = {
  en: { powerBudget: 'Power budget (W)', modelSize: 'Target model size (B params)', videoIngest: 'Video ingest needed', industrial: 'Industrial temperature range', needsVideo: 'Yes', needsIndustrial: 'Yes', results: 'Platforms that fit', noMatch: 'No platform in this table fits — widen the power budget or reduce the model size.', platform: 'Platform', power: 'Power', fitsModel: 'Fits up to', note: 'Note' },
  de: { powerBudget: 'Leistungsbudget (W)', modelSize: 'Zielmodellgröße (Mrd. Parameter)', videoIngest: 'Videoerfassung erforderlich', industrial: 'Industrieller Temperaturbereich', needsVideo: 'Ja', needsIndustrial: 'Ja', results: 'Passende Plattformen', noMatch: 'Keine Plattform in dieser Tabelle passt — Leistungsbudget erweitern oder Modellgröße reduzieren.', platform: 'Plattform', power: 'Leistung', fitsModel: 'Passt bis zu', note: 'Hinweis' },
  fr: { powerBudget: 'Budget de puissance (W)', modelSize: 'Taille de modèle cible (Md paramètres)', videoIngest: 'Ingestion vidéo requise', industrial: 'Plage de température industrielle', needsVideo: 'Oui', needsIndustrial: 'Oui', results: 'Plateformes compatibles', noMatch: "Aucune plateforme de ce tableau ne convient — élargissez le budget de puissance ou réduisez la taille du modèle.", platform: 'Plateforme', power: 'Puissance', fitsModel: "Jusqu'à", note: 'Remarque' },
  ja: { powerBudget: '電力予算（W）', modelSize: '対象モデルサイズ（B パラメータ）', videoIngest: '映像入力が必要', industrial: '産業用温度範囲', needsVideo: 'はい', needsIndustrial: 'はい', results: '適合するプラットフォーム', noMatch: 'この表に適合するプラットフォームはありません。電力予算を広げるかモデルサイズを縮小してください。', platform: 'プラットフォーム', power: '電力', fitsModel: '対応上限', note: '備考' },
  zh: { powerBudget: '功耗预算（W）', modelSize: '目标模型规模（十亿参数）', videoIngest: '需要视频输入', industrial: '工业温度范围', needsVideo: '是', needsIndustrial: '是', results: '匹配的平台', noMatch: '此表中没有平台匹配——请放宽功耗预算或减小模型规模。', platform: '平台', power: '功耗', fitsModel: '最高支持', note: '备注' },
  es: { powerBudget: 'Presupuesto de potencia (W)', modelSize: 'Tamaño de modelo objetivo (B parámetros)', videoIngest: 'Requiere ingesta de vídeo', industrial: 'Rango de temperatura industrial', needsVideo: 'Sí', needsIndustrial: 'Sí', results: 'Plataformas compatibles', noMatch: 'Ninguna plataforma de esta tabla encaja — amplía el presupuesto de potencia o reduce el tamaño del modelo.', platform: 'Plataforma', power: 'Potencia', fitsModel: 'Soporta hasta', note: 'Nota' },
  pt: { powerBudget: 'Orçamento de potência (W)', modelSize: 'Tamanho de modelo alvo (B parâmetros)', videoIngest: 'Requer ingestão de vídeo', industrial: 'Faixa de temperatura industrial', needsVideo: 'Sim', needsIndustrial: 'Sim', results: 'Plataformas compatíveis', noMatch: 'Nenhuma plataforma desta tabela se encaixa — amplie o orçamento de potência ou reduza o tamanho do modelo.', platform: 'Plataforma', power: 'Potência', fitsModel: 'Suporta até', note: 'Nota' },
  ar: { powerBudget: 'ميزانية الطاقة (واط)', modelSize: 'حجم النموذج المستهدف (مليار معامل)', videoIngest: 'يتطلب استقبال فيديو', industrial: 'نطاق درجة الحرارة الصناعي', needsVideo: 'نعم', needsIndustrial: 'نعم', results: 'المنصات المطابقة', noMatch: 'لا توجد منصة في هذا الجدول تطابق متطلباتك — وسّع ميزانية الطاقة أو قلّل حجم النموذج.', platform: 'المنصة', power: 'الطاقة', fitsModel: 'يدعم حتى', note: 'ملاحظة' },
  ko: { powerBudget: '전력 예산 (W)', modelSize: '목표 모델 크기 (B 파라미터)', videoIngest: '영상 입력 필요', industrial: '산업용 온도 범위', needsVideo: '예', needsIndustrial: '예', results: '적합한 플랫폼', noMatch: '이 표에서 적합한 플랫폼이 없습니다 — 전력 예산을 늘리거나 모델 크기를 줄이세요.', platform: '플랫폼', power: '전력', fitsModel: '최대 지원', note: '참고' },
}

export function EdgeHardwareSelector() {
  const lang = (useLang() as Language) || 'en'
  const t = UI[lang] ?? UI.en

  const [power, setPower] = useState(20)
  const [modelSize, setModelSize] = useState(3)
  const [needsVideo, setNeedsVideo] = useState(false)
  const [needsIndustrial, setNeedsIndustrial] = useState(false)

  const matches = useMemo(() => {
    return PLATFORMS.filter((p) => {
      if (power < p.minPowerW || power > p.maxPowerW * 1.5) return false
      if (modelSize > p.maxModelParamsB) return false
      if (needsVideo && !p.videoCapable) return false
      if (needsIndustrial && !p.industrialTemp) return false
      return true
    })
  }, [power, modelSize, needsVideo, needsIndustrial])

  return (
    <div className="my-8 border border-primary/20 rounded-xl overflow-hidden bg-card">
      <div className="p-5 grid sm:grid-cols-2 gap-5 border-b border-primary/10">
        <label className="text-sm">
          <span className="block font-semibold text-text-primary mb-1">{t.powerBudget}</span>
          <input
            type="range" min={1} max={130} value={power}
            onChange={(e) => setPower(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-text-secondary">{power} W</span>
        </label>
        <label className="text-sm">
          <span className="block font-semibold text-text-primary mb-1">{t.modelSize}</span>
          <input
            type="range" min={0.5} max={70} step={0.5} value={modelSize}
            onChange={(e) => setModelSize(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-text-secondary">{modelSize}B</span>
        </label>
        <label className="flex items-center gap-2 text-sm text-text-primary">
          <input type="checkbox" checked={needsVideo} onChange={(e) => setNeedsVideo(e.target.checked)} />
          {t.videoIngest}
        </label>
        <label className="flex items-center gap-2 text-sm text-text-primary">
          <input type="checkbox" checked={needsIndustrial} onChange={(e) => setNeedsIndustrial(e.target.checked)} />
          {t.industrial}
        </label>
      </div>

      <div className="p-5">
        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{t.results}</p>
        {matches.length === 0 ? (
          <p className="text-sm text-text-secondary">{t.noMatch}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left font-semibold text-text-primary border border-primary/15 px-3 py-2">{t.platform}</th>
                  <th className="text-left font-semibold text-text-primary border border-primary/15 px-3 py-2">{t.power}</th>
                  <th className="text-left font-semibold text-text-primary border border-primary/15 px-3 py-2">{t.fitsModel}</th>
                  <th className="text-left font-semibold text-text-primary border border-primary/15 px-3 py-2">{t.note}</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((p) => (
                  <tr key={p.name}>
                    <td className="border border-primary/15 px-3 py-2 text-text-primary font-medium">{p.name}</td>
                    <td className="border border-primary/15 px-3 py-2 text-text-secondary">{p.minPowerW}–{p.maxPowerW} W</td>
                    <td className="border border-primary/15 px-3 py-2 text-text-secondary">{p.maxModelParamsB}B</td>
                    <td className="border border-primary/15 px-3 py-2 text-text-secondary">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
