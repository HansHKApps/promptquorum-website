import Link from 'next/link'
import { getRotatingTip } from '@/lib/home/quick-tips'

export function QuickTipBlock() {
  const tip = getRotatingTip()

  return (
    <div className="rounded-xl border border-border bg-card p-4 h-full flex flex-col">
      <h3 className="text-sm font-bold text-text-primary mb-1.5">Did You Know?</h3>
      <p className="text-sm text-text-secondary flex-1">{tip.text}</p>
      <Link href={tip.sourceUrl} className="mt-2 text-xs font-bold text-primary hover:underline self-start">
        Read more: {tip.sourceTitle} →
      </Link>
    </div>
  )
}
