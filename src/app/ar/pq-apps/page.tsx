import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'
import { Sparkles, Layers, Brain, Zap, Shield } from 'lucide-react'
import { PromptOptimizerShowcase } from '@/components/PromptOptimizerShowcase'
import { OptimizationShowcase } from '@/components/OptimizationShowcase'
import { QuorumShowcase } from '@/components/QuorumShowcase'

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

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">الميزات الرئيسية في لمحة</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">9 أطر عمل لهندسة الموجهات (CO-STAR، CRAFT، RISEN، TRACE، APE، SPECS، Google، RTF)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">إرسال إلى 25+ نموذج سحابي في آنٍ واحد (GPT-4o، Claude، Gemini، DeepSeek والمزيد)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">13 نوع تحليل توافق Quorum عبر 4 فئات (التوليف، المقارنة، الجودة، الاختيار)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">كشف الهلوسة يُعلّم الادعاءات التي تظهر في نموذج واحد فقط أو تتعارض مع التوافق</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">دعم النماذج المحلية: Ollama، LM Studio، Jan AI، GPT4All، Open WebUI، vLLM، وأي نقطة نهاية متوافقة مع OpenAI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">الخصوصية أولًا: تنفيذ كامل بلا اتصال، لا تسجيل مطلوب، لا شيء يغادر جهازك</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">مقارنة فورية للاستجابات جنبًا إلى جنب عبر جميع النماذج في الوقت الفعلي</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">تحسين تلقائي للموجهات بـ 8 تقنيات تحسين لمخرجات ذكاء اصطناعي أفضل</span>
              </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">تحسين الموجهات</h3>
                <p className="text-text-secondary">قم بتحسين موجهاتك تلقائيًا باستخدام 8 تقنيات تحسين مجربة لمخرجات ذكاء اصطناعي أفضل.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">إرسال متعدد النماذج</h3>
                <p className="text-text-secondary">شغّل الموجهات عبر ChatGPT وClaude وGemini وأكثر من 25 نموذجًا آخر في آنٍ واحد.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">تقييم Quorum</h3>
                <p className="text-text-secondary">اعثر على إجابات توافقية عبر النماذج مع تقييم الثقة. يكشف الهلوسة على الفور.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">مقارنة فورية</h3>
                <p className="text-text-secondary">احصل على الاستجابات بالتوازي بنقرة واحدة — دون نسخ ولصق يدوي بين نوافذ المتصفح.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">الخصوصية أولًا</h3>
                <p className="text-text-secondary">خيار التنفيذ المحلي. لا تسجيل مطلوب. تحكم كامل في موجهاتك.</p>
              </div>
            </div>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-8">
              <PromptOptimizerShowcase lang="ar" />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">كيف تراجع نتائج التحسين؟</h3>
              <p className="text-text-secondary mb-6">راجع تقييمات الجودة وسجل الإصدارات واقتراحات التحسين لموجهاتك المُحسَّنة.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <OptimizationShowcase lang="ar" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">التحكم في الإصدارات</h4>
                  <p className="text-text-secondary text-sm">تتبّع جميع التكرارات لتعليمتك. ارجع إلى إصدارات سابقة في أي وقت أو تفرّع لاستكشاف مسارات تحسين مختلفة.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">رؤى الجودة</h4>
                  <p className="text-text-secondary text-sm">افهم بدقة سبب تحسين تعليمتك. احصل على ملاحظات مفصّلة حول نقاط القوة والمجالات التي تحتاج إلى تحسين.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">تحسينات ذكية</h4>
                  <p className="text-text-secondary text-sm">طبّق تحسينات بنقرة واحدة لجعل تعليمتك أكثر إيجازًا أو وضوحًا أو احترافية أو تفصيلاً حسب الحاجة.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">ما هو Quorum — التوافق متعدد النماذج؟</h3>
              <p className="text-text-secondary mb-6">اجمع الاستجابات من 25+ نموذج ذكاء اصطناعي، وحلّل أنماط التوافق، واستخلص الرؤى من منظورات مختلفة.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <QuorumShowcase lang="ar" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">جمع الاستجابات</h4>
                  <p className="text-text-secondary text-sm">شغّل تعليمتك عبر ChatGPT وClaude وGemini وأكثر من 25 نموذجًا آخر. احصل على وجهات نظر واستجابات متنوعة فورًا.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">تحليل الأنماط</h4>
                  <p className="text-text-secondary text-sm">حدّد ما تتفق عليه جميع النماذج (التوافق)، وأين تختلف، وأي الاستجابات الأعلى جودة لحالة استخدامك.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">تجميع الرؤى</h4>
                  <p className="text-text-secondary text-sm">ادمج نقاط قوة نماذج متعددة للحصول على إجابات أفضل. صدّر النتائج بصيغ متعددة لاستخدامها لاحقًا.</p>
                </div>
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
