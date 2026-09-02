'use client'

import { useState, useMemo } from 'react'
import { useLang } from '@/hooks/useLang'

type Language = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

// H.264 bitrate estimates per resolution at typical surveillance-quality settings (Mbps per stream).
const BITRATE_MBPS: Record<string, number> = { '1080p': 4, '4K': 16, '8K': 60 }

const UI: Record<Language, {
  cameras: string; resolution: string; fps: string; retention: string
  result: string; bandwidth: string; storage: string; note: string
}> = {
  en: { cameras: 'Camera count', resolution: 'Resolution', fps: 'Frame rate (fps)', retention: 'Retention (days)', result: 'Estimated bandwidth & storage', bandwidth: 'Continuous bandwidth (all streams)', storage: 'Storage for the retention window', note: 'Estimates from typical H.264 surveillance-quality bitrates, scaled linearly with frame rate. Actual bitrate varies with scene complexity and codec.' },
  de: { cameras: 'Anzahl Kameras', resolution: 'Auflösung', fps: 'Bildrate (fps)', retention: 'Aufbewahrung (Tage)', result: 'Geschätzte Bandbreite & Speicher', bandwidth: 'Dauerbandbreite (alle Streams)', storage: 'Speicher für den Aufbewahrungszeitraum', note: 'Schätzungen auf Basis typischer H.264-Überwachungsbitraten, linear mit der Bildrate skaliert. Die tatsächliche Bitrate hängt von Szenenkomplexität und Codec ab.' },
  fr: { cameras: 'Nombre de caméras', resolution: 'Résolution', fps: "Fréquence d'images (fps)", retention: 'Rétention (jours)', result: 'Bande passante et stockage estimés', bandwidth: 'Bande passante continue (tous flux)', storage: 'Stockage pour la fenêtre de rétention', note: "Estimations basées sur des débits H.264 typiques de vidéosurveillance, mis à l'échelle linéairement avec la fréquence d'images. Le débit réel varie selon la complexité de la scène et le codec." },
  ja: { cameras: 'カメラ台数', resolution: '解像度', fps: 'フレームレート（fps）', retention: '保存期間（日）', result: '推定帯域幅とストレージ', bandwidth: '連続帯域幅（全ストリーム）', storage: '保存期間分のストレージ', note: '典型的なH.264監視品質ビットレートに基づく推定値で、フレームレートに比例してスケーリングしています。実際のビットレートはシーンの複雑さとコーデックにより異なります。' },
  zh: { cameras: '摄像头数量', resolution: '分辨率', fps: '帧率（fps）', retention: '保留期（天）', result: '预估带宽与存储', bandwidth: '持续带宽（全部流）', storage: '保留期所需存储', note: '基于典型 H.264 监控质量码率的估算，按帧率线性缩放。实际码率因场景复杂度和编解码器而异。' },
  es: { cameras: 'Número de cámaras', resolution: 'Resolución', fps: 'Tasa de fotogramas (fps)', retention: 'Retención (días)', result: 'Ancho de banda y almacenamiento estimados', bandwidth: 'Ancho de banda continuo (todos los flujos)', storage: 'Almacenamiento para la ventana de retención', note: 'Estimaciones basadas en tasas de bits típicas de videovigilancia H.264, escaladas linealmente con la tasa de fotogramas. La tasa real varía según la complejidad de la escena y el códec.' },
  pt: { cameras: 'Número de câmeras', resolution: 'Resolução', fps: 'Taxa de quadros (fps)', retention: 'Retenção (dias)', result: 'Largura de banda e armazenamento estimados', bandwidth: 'Largura de banda contínua (todos os fluxos)', storage: 'Armazenamento para a janela de retenção', note: 'Estimativas com base em taxas de bits típicas de videovigilância H.264, escaladas linearmente com a taxa de quadros. A taxa real varia com a complexidade da cena e o codec.' },
  ar: { cameras: 'عدد الكاميرات', resolution: 'الدقة', fps: 'معدل الإطارات (fps)', retention: 'مدة الاحتفاظ (أيام)', result: 'تقدير النطاق الترددي والتخزين', bandwidth: 'النطاق الترددي المستمر (كل التدفقات)', storage: 'التخزين لمدة الاحتفاظ', note: 'تقديرات مبنية على معدلات بت نموذجية لمراقبة H.264، تتغير خطيًا مع معدل الإطارات. يختلف معدل البت الفعلي حسب تعقيد المشهد والترميز.' },
  ko: { cameras: '카메라 수', resolution: '해상도', fps: '프레임 속도 (fps)', retention: '보존 기간 (일)', result: '예상 대역폭 및 저장 용량', bandwidth: '연속 대역폭 (전체 스트림)', storage: '보존 기간 동안의 저장 용량', note: '일반적인 H.264 감시 품질 비트레이트를 기준으로 프레임 속도에 비례해 산출한 추정치입니다. 실제 비트레이트는 장면 복잡도와 코덱에 따라 다릅니다.' },
}

export function EdgeVideoBandwidthCalculator() {
  const lang = (useLang() as Language) || 'en'
  const t = UI[lang] ?? UI.en

  const [cameras, setCameras] = useState(8)
  const [resolution, setResolution] = useState('4K')
  const [fps, setFps] = useState(15)
  const [retention, setRetention] = useState(30)

  const { bandwidthMbps, storageTB } = useMemo(() => {
    const baseMbps = BITRATE_MBPS[resolution] ?? BITRATE_MBPS['1080p']
    const perStreamMbps = baseMbps * (fps / 15)
    const totalMbps = perStreamMbps * cameras
    const bytesPerSecond = (totalMbps * 1_000_000) / 8
    const totalBytes = bytesPerSecond * 86400 * retention
    return { bandwidthMbps: totalMbps, storageTB: totalBytes / 1e12 }
  }, [cameras, resolution, fps, retention])

  return (
    <div className="my-8 border border-primary/20 rounded-xl overflow-hidden bg-card">
      <div className="p-5 grid sm:grid-cols-4 gap-5 border-b border-primary/10">
        <label className="text-sm">
          <span className="block font-semibold text-text-primary mb-1">{t.cameras}</span>
          <input type="number" min={1} max={256} value={cameras} onChange={(e) => setCameras(Number(e.target.value))} className="w-full border border-primary/20 rounded-lg px-2 py-1.5 bg-surface text-text-primary" />
        </label>
        <label className="text-sm">
          <span className="block font-semibold text-text-primary mb-1">{t.resolution}</span>
          <select value={resolution} onChange={(e) => setResolution(e.target.value)} className="w-full border border-primary/20 rounded-lg px-2 py-1.5 bg-surface text-text-primary">
            {Object.keys(BITRATE_MBPS).map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </label>
        <label className="text-sm">
          <span className="block font-semibold text-text-primary mb-1">{t.fps}</span>
          <input type="number" min={1} max={60} value={fps} onChange={(e) => setFps(Number(e.target.value))} className="w-full border border-primary/20 rounded-lg px-2 py-1.5 bg-surface text-text-primary" />
        </label>
        <label className="text-sm">
          <span className="block font-semibold text-text-primary mb-1">{t.retention}</span>
          <input type="number" min={1} max={365} value={retention} onChange={(e) => setRetention(Number(e.target.value))} className="w-full border border-primary/20 rounded-lg px-2 py-1.5 bg-surface text-text-primary" />
        </label>
      </div>
      <div className="p-5">
        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{t.result}</p>
        <p className="text-sm text-text-primary mb-1">{t.bandwidth}: <strong>{bandwidthMbps.toFixed(0)} Mbps</strong></p>
        <p className="text-sm text-text-primary mb-3">{t.storage}: <strong>{storageTB.toFixed(1)} TB</strong></p>
        <p className="text-xs text-text-secondary">{t.note}</p>
      </div>
    </div>
  )
}
