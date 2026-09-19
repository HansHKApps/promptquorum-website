import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PQ Apps — PromptQuorum',
    description: 'تعرف على كيفية عمل تطبيق PromptQuorum: اكتب التعليمات باستخدام أطر مدمجة، أرسلها إلى أكثر من 25 نموذج ذكاء اصطناعي، وقارن النتائج بتحليل Quorum.',
    alternates: generateAlternates('/pq-apps', 'ar', true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: 'PQ Apps — PromptQuorum',
      description: 'تعرف على كيفية عمل تطبيق PromptQuorum: اكتب التعليمات باستخدام أطر مدمجة، أرسلها إلى أكثر من 25 نموذج ذكاء اصطناعي، وقارن النتائج بتحليل Quorum.',
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PQ Apps — PromptQuorum',
      description: 'تعرف على كيفية عمل تطبيق PromptQuorum: اكتب التعليمات باستخدام أطر مدمجة، أرسلها إلى أكثر من 25 نموذج ذكاء اصطناعي، وقارن النتائج بتحليل Quorum.',
    },
  }
}

export default function ArPQAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'url': 'https://www.promptquorum.com/ar/pq-apps',
              'name': 'PQ Apps — PromptQuorum',
              'description': 'تعرف على كيفية عمل تطبيق PromptQuorum: اكتب التعليمات باستخدام أطر مدمجة، أرسلها إلى أكثر من 25 نموذج ذكاء اصطناعي، وقارن النتائج بتحليل Quorum.',
              'inLanguage': 'ar',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'الرئيسية', 'item': 'https://www.promptquorum.com/ar' },
                { '@type': 'ListItem', 'position': 2, 'name': 'PQ Apps', 'item': 'https://www.promptquorum.com/ar/pq-apps' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20" dir="rtl">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16 text-center">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">PQ Apps</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              PromptQuorum، أينما تعمل
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              تعليمة واحدة تُرسل في آن واحد إلى أكثر من 25 نموذج ذكاء اصطناعي — مع دعم النماذج المحلية وتحليل التوافق متعدد النماذج، كل ذلك من متصفحك.
            </p>
            <Link
              href="/ar/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              جرّب النسخة التجريبية
            </Link>
          </div>

          {/* How It Works */}
          <section id="how-it-works" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">كيف يعمل</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">1</div>
                <div className="text-text-primary font-semibold mb-1">اكتب تعليمتك المُهيكلة</div>
                <div className="text-sm text-text-secondary">ابدأ بأحد الأطر التسعة المدمجة — CO-STAR وCRAFT وRISEN وTRACE وAPE وSPECS وGoogle Prompt وRTF أو Single Prompt Line.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2</div>
                <div className="text-text-primary font-semibold mb-1">حسّنه باستخدام نموذجك الخاص</div>
                <div className="text-sm text-text-secondary">يمكنك اختياريًا تحسين بنية تعليمتك وصياغتها عبر نموذجك المتصل قبل الإرسال.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">3</div>
                <div className="text-text-primary font-semibold mb-1">أرسل إلى أكثر من 25 نموذج ذكاء اصطناعي</div>
                <div className="text-sm text-text-secondary">نقرة واحدة تفتح جميع الوجهات في آن واحد — GPT-4o وClaude وGemini وGrok وDeepSeek وMistral وغيرها، بالإضافة إلى نماذج محلية عبر Ollama.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">4</div>
                <div className="text-text-primary font-semibold mb-1">شغّل تحليل Quorum</div>
                <div className="text-sm text-text-secondary">قارن الردود باستخدام 13 نوع تحليل — كشف الهلوسة وكشف التناقضات وملخص التوافق وغيرها.</div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">الميزات</h2>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">التسعير</div>
                  <div className="text-text-primary font-medium">مجاني. استخدم مفتاح API الخاص بك.</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">نموذج الخصوصية</div>
                  <div className="text-text-primary font-medium">BYOM — بلا نقل بيانات إلى أي خادم</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">نماذج الذكاء الاصطناعي المدعومة</div>
                  <div className="text-text-primary font-medium">25+ سحابيًا + غير محدود محليًا عبر Ollama</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">أطر التعليمات</div>
                  <div className="text-text-primary font-medium">9 مدمجة + خانتان مخصصتان</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">أنواع تحليل Quorum</div>
                  <div className="text-text-primary font-medium">13 نوعًا، بما في ذلك كشف الهلوسة</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">الدعم دون اتصال</div>
                  <div className="text-text-primary font-medium">كامل — عبر Ollama وLM Studio وJan AI</div>
                </div>
            </div>
          </section>

          {/* Compare Tools */}
          <section id="compare-tools" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-4">مقارنة الأدوات</h2>
            <p className="text-text-secondary mb-4">اطّلع على كيفية مقارنة PromptQuorum بأدوات التعليمات الأخرى للذكاء الاصطناعي.</p>
            <Link href="/ar/compare" className="text-primary hover:text-primary/80 font-medium">
              عرض المقارنة الكاملة →
            </Link>
          </section>

          {/* Repeat CTA */}
          <div className="text-center py-12 border-t border-primary/20">
            <Link
              href="/ar/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              جرّب النسخة التجريبية
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
