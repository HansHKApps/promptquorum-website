'use client'

import { useState, useMemo } from 'react'
import { useLang } from '@/hooks/useLang'

type Language = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

// Rough reference throughput bands per hardware tier, for a compact VLA/VLM-class model
// (~0.5–3B params) doing single-frame task-level inference. These are engineering estimates
// for budgeting, not vendor benchmarks — see article text for the sourced figures they derive from.
const HARDWARE_HZ: Record<string, { label: string; hz: number }> = {
  'hailo-10h': { label: 'Hailo-10H (accelerator)', hz: 3 },
  'orin-nano': { label: 'Jetson Orin Nano Super', hz: 8 },
  'orin-nx': { label: 'Jetson Orin NX', hz: 15 },
  'agx-orin': { label: 'Jetson AGX Orin 64GB', hz: 25 },
  'agx-thor': { label: 'Jetson AGX Thor', hz: 45 },
}

const UI: Record<Language, {
  hardware: string; decisionRate: string; cameras: string
  result: string; achievable: string; headroom: string; deficit: string
  needsOffboard: string; okOnboard: string
}> = {
  en: { hardware: 'Target hardware', decisionRate: 'Required decision rate (Hz)', cameras: 'Camera streams', result: 'Estimated slow-tier inference budget', achievable: 'Achievable frequency', headroom: 'Headroom', deficit: 'Deficit — this decision rate is not achievable on this hardware with this many streams', needsOffboard: 'This workload needs an offboard tier or a smaller model — the slow reasoning tier alone cannot hit the requested rate.', okOnboard: 'This fits the onboard slow-reasoning tier. The fast control loop (100–1,000 Hz) still needs to run in classical control code, not through this model.' },
  de: { hardware: 'Zielhardware', decisionRate: 'Erforderliche Entscheidungsrate (Hz)', cameras: 'Kamera-Streams', result: 'Geschätztes Inferenzbudget der langsamen Ebene', achievable: 'Erreichbare Frequenz', headroom: 'Puffer', deficit: 'Defizit — diese Entscheidungsrate ist auf dieser Hardware mit dieser Anzahl Streams nicht erreichbar', needsOffboard: 'Diese Last benötigt eine Offboard-Ebene oder ein kleineres Modell — die langsame Reasoning-Ebene allein erreicht die geforderte Rate nicht.', okOnboard: 'Das passt in die langsame Onboard-Reasoning-Ebene. Der schnelle Regelkreis (100–1.000 Hz) muss weiterhin in klassischem Regelungscode laufen, nicht über dieses Modell.' },
  fr: { hardware: 'Matériel cible', decisionRate: 'Fréquence de décision requise (Hz)', cameras: 'Flux caméra', result: "Budget d'inférence estimé pour le niveau lent", achievable: 'Fréquence atteignable', headroom: 'Marge', deficit: "Déficit — cette fréquence de décision n'est pas atteignable sur ce matériel avec ce nombre de flux", needsOffboard: "Cette charge nécessite un niveau déporté ou un modèle plus petit — le niveau de raisonnement lent seul n'atteint pas la fréquence demandée.", okOnboard: 'Ceci correspond au niveau de raisonnement lent embarqué. La boucle de contrôle rapide (100–1 000 Hz) doit toujours tourner en code de contrôle classique, pas via ce modèle.' },
  ja: { hardware: '対象ハードウェア', decisionRate: '必要な意思決定レート（Hz）', cameras: 'カメラストリーム数', result: '推定される低速層の推論予算', achievable: '達成可能な周波数', headroom: '余裕', deficit: '不足 — このハードウェアとストリーム数ではこの意思決定レートは達成できません', needsOffboard: 'このワークロードにはオフボード層またはより小さいモデルが必要です。低速な推論層だけでは要求レートに届きません。', okOnboard: 'これはオンボードの低速推論層に収まります。高速制御ループ（100〜1,000 Hz）は引き続きこのモデルではなく古典的な制御コードで実行する必要があります。' },
  zh: { hardware: '目标硬件', decisionRate: '所需决策频率（Hz）', cameras: '摄像头流数量', result: '预估的慢速层推理预算', achievable: '可达到的频率', headroom: '余量', deficit: '不足——在此硬件和流数量下无法达到该决策频率', needsOffboard: '该负载需要离板层或更小的模型——仅靠慢速推理层无法达到所需频率。', okOnboard: '这符合板载慢速推理层的能力。快速控制回路（100–1,000 Hz）仍需在经典控制代码中运行，而非通过此模型。' },
  es: { hardware: 'Hardware objetivo', decisionRate: 'Frecuencia de decisión requerida (Hz)', cameras: 'Flujos de cámara', result: 'Presupuesto de inferencia estimado del nivel lento', achievable: 'Frecuencia alcanzable', headroom: 'Margen', deficit: 'Déficit — esta frecuencia de decisión no es alcanzable en este hardware con esta cantidad de flujos', needsOffboard: 'Esta carga necesita un nivel externo o un modelo más pequeño — el nivel de razonamiento lento por sí solo no alcanza la frecuencia solicitada.', okOnboard: 'Esto encaja en el nivel de razonamiento lento a bordo. El bucle de control rápido (100–1.000 Hz) debe seguir ejecutándose en código de control clásico, no a través de este modelo.' },
  pt: { hardware: 'Hardware alvo', decisionRate: 'Taxa de decisão exigida (Hz)', cameras: 'Fluxos de câmera', result: 'Orçamento de inferência estimado do nível lento', achievable: 'Frequência alcançável', headroom: 'Margem', deficit: 'Déficit — esta taxa de decisão não é alcançável neste hardware com esta quantidade de fluxos', needsOffboard: 'Esta carga precisa de um nível externo ou de um modelo menor — o nível de raciocínio lento sozinho não atinge a taxa solicitada.', okOnboard: 'Isso cabe no nível de raciocínio lento embarcado. O loop de controle rápido (100–1.000 Hz) ainda precisa rodar em código de controle clássico, não por este modelo.' },
  ar: { hardware: 'الجهاز المستهدف', decisionRate: 'معدل القرار المطلوب (هرتز)', cameras: 'عدد تدفقات الكاميرا', result: 'ميزانية الاستدلال المقدرة للطبقة البطيئة', achievable: 'التردد القابل للتحقيق', headroom: 'الهامش', deficit: 'عجز — لا يمكن تحقيق معدل القرار هذا على هذا الجهاز بهذا العدد من التدفقات', needsOffboard: 'يحتاج هذا الحمل إلى طبقة خارجية أو نموذج أصغر — طبقة الاستدلال البطيئة وحدها لا تصل إلى المعدل المطلوب.', okOnboard: 'هذا يناسب طبقة الاستدلال البطيئة على متن الجهاز. حلقة التحكم السريعة (100–1000 هرتز) لا تزال بحاجة للعمل عبر كود تحكم كلاسيكي، وليس عبر هذا النموذج.' },
  ko: { hardware: '대상 하드웨어', decisionRate: '요구되는 판단 속도 (Hz)', cameras: '카메라 스트림 수', result: '추정 저속 계층 추론 예산', achievable: '달성 가능한 주파수', headroom: '여유', deficit: '부족 — 이 하드웨어와 스트림 수로는 이 판단 속도를 달성할 수 없습니다', needsOffboard: '이 작업량은 오프보드 계층 또는 더 작은 모델이 필요합니다 — 저속 추론 계층만으로는 요청된 속도를 달성할 수 없습니다.', okOnboard: '이는 온보드 저속 추론 계층에 적합합니다. 고속 제어 루프(100~1,000Hz)는 여전히 이 모델이 아닌 전통적인 제어 코드에서 실행되어야 합니다.' },
}

export function RobotInferenceBudgetCalculator() {
  const lang = (useLang() as Language) || 'en'
  const t = UI[lang] ?? UI.en

  const [hardware, setHardware] = useState('orin-nx')
  const [decisionRate, setDecisionRate] = useState(5)
  const [cameras, setCameras] = useState(1)

  const achievableHz = useMemo(() => {
    const base = HARDWARE_HZ[hardware]?.hz ?? 1
    return Math.max(base / Math.max(cameras, 1), 0.1)
  }, [hardware, cameras])

  const fits = achievableHz >= decisionRate

  return (
    <div className="my-8 border border-primary/20 rounded-xl overflow-hidden bg-card">
      <div className="p-5 grid sm:grid-cols-3 gap-5 border-b border-primary/10">
        <label className="text-sm">
          <span className="block font-semibold text-text-primary mb-1">{t.hardware}</span>
          <select value={hardware} onChange={(e) => setHardware(e.target.value)} className="w-full border border-primary/20 rounded-lg px-2 py-1.5 bg-surface text-text-primary">
            {Object.entries(HARDWARE_HZ).map(([key, v]) => (
              <option key={key} value={key}>{v.label}</option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="block font-semibold text-text-primary mb-1">{t.decisionRate}</span>
          <input type="number" min={0.1} max={100} step={0.5} value={decisionRate} onChange={(e) => setDecisionRate(Number(e.target.value))} className="w-full border border-primary/20 rounded-lg px-2 py-1.5 bg-surface text-text-primary" />
        </label>
        <label className="text-sm">
          <span className="block font-semibold text-text-primary mb-1">{t.cameras}</span>
          <input type="number" min={1} max={8} value={cameras} onChange={(e) => setCameras(Number(e.target.value))} className="w-full border border-primary/20 rounded-lg px-2 py-1.5 bg-surface text-text-primary" />
        </label>
      </div>
      <div className="p-5">
        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{t.result}</p>
        <p className="text-sm text-text-primary mb-2">
          {t.achievable}: <strong>{achievableHz.toFixed(1)} Hz</strong>
        </p>
        {fits ? (
          <p className="text-sm text-emerald-700">{t.headroom}: +{(achievableHz - decisionRate).toFixed(1)} Hz — {t.okOnboard}</p>
        ) : (
          <p className="text-sm text-amber-700">{t.deficit} (−{(decisionRate - achievableHz).toFixed(1)} Hz) — {t.needsOffboard}</p>
        )}
      </div>
    </div>
  )
}
