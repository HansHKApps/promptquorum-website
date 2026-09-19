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
            <h2 className="text-2xl font-bold text-text-primary mb-2">كيف يعمل</h2>
            <p className="text-text-secondary mb-3">سير عمل من 4 مراحل: اكتب موجّهاً منظماً باستخدام أحد 9 أُطر، حسّنه باستخدام نموذجك الخاص، أرسله في آنٍ واحد إلى أكثر من 25 خدمة ذكاء اصطناعي، ثم حلّل جميع الردود باستخدام 13 نوعاً من تحليل الإجماع.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              يعمل بالكامل في متصفحك — لا يرى أي خادم من خوادم PromptQuorum موجّهاتك أو مفاتيح API
            </div>

            <div className="space-y-8 mb-16">
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">كتابة</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">نظّم موجّهك</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">الموجّهات المنظمة بأُطر تنتج مخرجات أعلى جودة. يتضمن PromptQuorum 9 أُطر مدمجة (Single Prompt Line وCRAFT وCO-STAR وRISEN وTRACE وAPE وSPECS وGoogle Prompt وRTF) إضافةً إلى فتحتَي أُطر مخصصتَين.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Single Prompt Line — حد أدنى من البنية للمهام السريعة</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CRAFT — Context, Role, Action, Format, Target (الكتابة الإبداعية)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CO-STAR — Context, Objective, Style, Tone, Audience, Response (التسويق والأعمال)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>RISEN — Role, Instructions, Steps, End Goal, Narrowing (مهام المؤسسات التسلسلية)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>TRACE — Task, Request, Action, Context, Example (التعلم بالأمثلة القليلة)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>APE وSPECS وGoogle Prompt وRTF — محسّنة لأنواع مهام محددة</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      يوصي معالج الأُطر بأفضل إطار بناءً على نوع مهمتك.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">تحسين</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">صقّل باستخدام نموذجك الخاص</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">تتحسن جودة الموجّه بشكل ملحوظ مع التحسين — تحصل الموجّهات المنظمة على درجات أعلى بنسبة 25-45% في تقييم النماذج. يطبّق PromptQuorum 8 أنواع من التحسين (الاختصار، توسيع التفاصيل، التقسيم إلى خطوات، زيادة التحديد، التبسيط، إضافة ضوابط الجودة، الاستشارة متعددة الخبراء، الضغط إلى الجوهر) مع الكشف الذكي عن درجة الحرارة.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>تقييم الجودة — تسجيل 0-100% على الوضوح والتحديد والبنية والقيود</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>الحرارة الذكية — توصي بمستوى الإبداع الأمثل (0.0-1.0) بناءً على نوع المهمة</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>سجل الإصدارات — كل تحسين محفوظ؛ تفرّع وقارن مسارات التحسين</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>وضع التعليم — يشرح لماذا يحسّن كل تغيير الجودة والوضوح</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>8 تحسينات بنقرة واحدة — تطبيق تحويلات منظمة فوراً</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>تعليمات مخصصة — تحسين بنص حر باستخدام نموذجك الخاص</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      نموذجك. مفتاح API الخاص بك. لا شيء يمر عبر خوادم PromptQuorum.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">إرسال</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">أرسل إلى أكثر من 25 خدمة ذكاء اصطناعي</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">إرسال الموجّه ذاته إلى نماذج ذكاء اصطناعي متعددة يكشف أي نموذج يؤدي أفضل لمهمتك. يفتح PromptQuorum علامات تبويب متوازية في المتصفح لأكثر من 25 وجهة دون الحاجة إلى النسخ واللصق.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>الإرسال التلقائي (17 خدمة): OpenAI ChatGPT وGoogle Gemini وAnthropic Claude وPerplexity وxAI Grok وDeepSeek وMistral وCohere وAzure وTogether وGroq والمزيد</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>نسخ ولصق (8 خدمات): Qwen وMeta AI وPoe وKimi وLM Studio وJan AI وGPT4All وغيرها</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Perplexity يرسل تلقائياً — يُرسل الموجّه فور الوصول</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>فتحتا عنوان URL مخصص — قم بتهيئة أي خدمة ذكاء اصطناعي غير موجودة في القائمة الافتراضية</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>تحسين اختياري قبل الإرسال — تحسين نهائي بالنموذج قبل الإرسال</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>تنفيذ متوازٍ — تُفتح جميع علامات التبويب في آنٍ واحد؛ اجمع الردود في أقل من دقيقة</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      تُفتح جميع علامات التبويب في آنٍ واحد. لا نسخ ولصق بين التبويبات.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Quorum</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">ابحث عن الإجماع عبر جميع النماذج</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">عندما تتفق 5 نماذج مستقلة أو أكثر على إجابة، تكون درجة الثقة أعلى مما هي عليه مع نموذج واحد. الصق جميع الردود مرة أخرى في PromptQuorum وطبّق 13 نوعاً من تحليل الإجماع.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>ملخص الإجماع — يحدد المواضيع المشتركة والاتفاقيات بالإجماع</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>كشف التناقضات — يُشير إلى أين تتباين النماذج؛ يحدد الآراء الأقلية</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>كشف الهلوسة — يحدد الادعاءات التي تظهر في عدد قليل من النماذج؛ الحقائق الكاذبة المحتملة</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>تسجيل الثقة — مستوى اليقين لكل نموذج ولكل ادعاء</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>اختيار أفضل إجابة — يختار الاستجابة الفردية الأعلى جودة</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>دمج مرجّح — يُركّب استجابة هجينة باستخدام أفضل عناصر جميع النماذج</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      عندما تتقارب 5 نماذج مستقلة أو أكثر على الإجابة ذاتها، يكون خطر الهلوسة أقل مما هو عليه مع نموذج واحد.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">9 أُطر موجّهات مدمجة</h3>
              <p className="text-text-secondary mb-6">الموجّهات المنظمة بأُطر تنتج مخرجات أفضل قياسياً من الطلبات غير المنظمة. كل إطار ينظّم المدخلات بشكل مختلف لأنواع مهام محددة. يوصي معالج الأُطر بالأنسب، أو أنشئ إطارَين مخصصَين.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary">الإطار</th>
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">البنية</th>
                      <th className="text-left py-2 sm:py-3 font-semibold text-text-primary">الأمثل لـ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Single Prompt Line</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">—</td>
                      <td className="py-2 sm:py-3 text-text-secondary">استعلامات سريعة وغير رسمية بلا بنية</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">APE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Action · Purpose · Expectation</td>
                      <td className="py-2 sm:py-3 text-text-secondary">بنية بسيطة بـ3 حقول؛ المهام البسيطة</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CRAFT</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Role · Action · Format · Target</td>
                      <td className="py-2 sm:py-3 text-text-secondary">الكتابة الإبداعية؛ المهام العامة</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CO-STAR</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Objective · Style · Tone · Audience · Response</td>
                      <td className="py-2 sm:py-3 text-text-secondary">نصوص تسويقية؛ التواصل التجاري</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">SPECS</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Situation · Purpose · Expected Output · Context · Style</td>
                      <td className="py-2 sm:py-3 text-text-secondary">التحليل؛ البحث؛ الكتابة التقنية</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RISEN</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Instructions · Steps · End Goal · Narrowing</td>
                      <td className="py-2 sm:py-3 text-text-secondary">سير عمل المؤسسات متعددة الخطوات</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">TRACE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Request · Action · Context · Example</td>
                      <td className="py-2 sm:py-3 text-text-secondary">التعلم بالأمثلة القليلة؛ المهام القائمة على الأمثلة</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Google Prompt</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Context · Persona</td>
                      <td className="py-2 sm:py-3 text-text-secondary">المهام المهنية؛ الموجّهات القائمة على الأدوار</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RTF</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Task · Format</td>
                      <td className="py-2 sm:py-3 text-text-secondary">بنية بسيطة؛ 3 حقول أساسية فقط</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">13 نوعاً من تحليل Quorum</h3>
              <p className="text-text-secondary mb-6">طبّق 2 أو جميع التحليلات الـ13 على ردود نماذج متعددة. كل تحليل يُشغَّل بواسطة نموذجك المتصل، وليس خوادم PromptQuorum. حدّد الإجماع والتناقضات والهلوسة ومستويات الثقة عبر جميع المخرجات.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">توليف (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      ملخص الإجماع — المواضيع المشتركة عبر جميع النماذج
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      دمج مرجّح — استجابة هجينة تجمع أفضل ما في كل نموذج
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      استخراج الحقائق الذرية — تقسيم الادعاءات إلى حقائق منفصلة؛ إحصاء الاتفاق بين النماذج
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">مقارنة (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      رسم خريطة التداخل — يحدد النماذج التي أنتجت نتائج متطابقة
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      كشف التناقضات — يُشير إلى الادعاءات التي تتباين فيها النماذج
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      تسجيل الثقة — يقيس مستوى اليقين لكل نموذج ولكل ادعاء
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">جودة (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      التحقق من الاكتمال — يتحقق من وجود جميع المعلومات المطلوبة
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      كشف الهلوسة — يحدد الادعاءات في عدد قليل من النماذج؛ البيانات الكاذبة المحتملة
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      إزالة التكرار — يزيل الادعاءات المكررة أو شبه المكررة
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">اختيار (4)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      اختيار أفضل إجابة — يختار الاستجابة الفردية الأعلى جودة
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      مجموعة متعددة النماذج — يجمع النتائج باستخدام ترجيح موثوقية النماذج
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      علامة الجدل — يُبرز الادعاءات حيث يكون الاتفاق بين النماذج ضعيفاً
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      تحليل مخصص — نموذج تحليل يحدده المستخدم
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-secondary/30 border border-primary/20 rounded-xl p-6">
                <div className="text-sm font-semibold text-text-primary mb-2">تصدير النتائج بـ6 صيغ</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.txt</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.md</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.json</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.csv</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.html</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.pdf</span>
                </div>
                <p className="text-xs text-text-muted mt-2">صيغ متعددة → تُنزَّل كملف .zip. File System Access API لاختيار المجلد (Chrome/Edge/Safari 16+).</p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-6">المفاهيم الأساسية</h3>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">الإرسال متعدد النماذج</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">إرسال موجّه في آنٍ واحد إلى أكثر من 25 نموذج ذكاء اصطناعي بنقرة واحدة. يُحمّل PromptQuorum موجّهك مسبقاً في كل وجهة عبر URL — بلا نسخ ولصق، تُفتح جميع التبويبات في آنٍ واحد.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">تحليل Quorum</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">مقارنة منظمة لردود نماذج ذكاء اصطناعي متعددة لتحديد الإجماع والتناقضات ومستويات الثقة. يوفر PromptQuorum 13 نوعاً من التحليل، بما في ذلك كشف الهلوسة واختيار أفضل إجابة.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">درجة الإجماع</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">تصنيف ثقة مشتق من مدى اتفاق ردود نماذج متعددة. إجماع أعلى = موثوقية أعلى. إجماع أقل يُشير إلى مناطق عدم يقين أو هلوسة محتملة.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">كشف الهلوسة</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">تحديد الادعاءات الواقعية التي تظهر في نموذج واحد فقط أو في أقلية من النماذج، مما يُشير إلى احتمال الاختلاق من قِبل الذكاء الاصطناعي. التحقق من أكثر من 5 نماذج مستقلة يقلل بشكل كبير من معدل الهلوسات غير المكتشفة.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">BYOM — أحضر نموذجك الخاص</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">ربط مفاتيح API الخاصة بك مباشرةً بمزوّدي الذكاء الاصطناعي. تُخزَّن المفاتيح فقط في localStorage متصفحك وتتصل مباشرةً بالمزوّدين — لا يستقبل أي خادم من خوادم PromptQuorum بيانات اعتمادك ولا يُرسلها.</dd>
                </div>
              </dl>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">أحضر نموذجك الخاص (BYOM) — بلا بنية تحتية من PromptQuorum</h3>
              <p className="text-text-secondary mb-6">لا يستضيف PromptQuorum أي نموذج LLM ولا يُشغّله. كل استدعاء API يذهب مباشرةً من متصفحك إلى المزوّد المختار. تبقى مفاتيح API في localStorage المتصفح ولا تُرسل أبداً إلى خوادم PromptQuorum.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">واجهات API السحابية (أحضر مفتاح API الخاص بك)</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      OpenAI (GPT-4, GPT-4o)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Anthropic (Claude 3.5)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Google Gemini 1.5
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Grok (xAI)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      DeepSeek
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Mistral
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Cohere
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Together AI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Groq
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      OpenRouter (free tier)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">النماذج المحلية (بلا مفتاح API؛ تعمل على جهازك)</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Ollama (localhost:11434)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      LM Studio (localhost:1234)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Jan AI (localhost:1337)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      GPT4All (localhost:4891)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Open WebUI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      KoboldCpp
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      vLLM
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      oobabooga
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Any OpenAI-compatible endpoint
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-16">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">بلا قياسات</h3>
                  <p className="text-text-secondary text-sm">بلا تحليلات، بلا تتبع، بلا تسجيل، بلا جمع بيانات. حتى إحصاءات الاستخدام المجهولة أو وقت الجلسة غير موجودة.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">بلا تسجيل</h3>
                  <p className="text-text-secondary text-sm">لا يلزم التسجيل. بلا بريد إلكتروني، بلا حساب، بلا تسجيل دخول. افتح التطبيق وابدأ فوراً.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">يعمل بلا اتصال</h3>
                  <p className="text-text-secondary text-sm">تطبيق سطح المكتب (Electron) والتطبيق المحمول (Capacitor) يدعمان التشغيل الكامل دون اتصال مع النماذج المحلية عبر Ollama وLM Studio وJan AI أو أي نقطة نهاية متوافقة.</p>
                </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-3">كيف نختبر</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">تستند بيانات الأداء المُستشهد بها في مقالات PromptQuorum إلى جلسات إرسال خاضعة للرقابة باستخدام PromptQuorum. عندما يذكر مقال أرقاماً محددة (درجات جودة الموجّه، مقارنات درجات الحرارة، قيم المعيار)، فإنها تعكس اختبارات تحريرية أو بيانات معيار عامة — وليس قياسات خاصة بـPromptQuorum ما لم يُذكر ذلك صراحةً.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  إرسال الموجّهات: مُرسَلة في آنٍ واحد إلى النماذج المحددة عبر الإرسال بنقرة واحدة في PromptQuorum
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  حجم العينة: تستخدم الاختبارات التحريرية 30 موجّهاً على الأقل لكل حالة ما لم يُذكر غير ذلك
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  التقييم: تُسجَّل الردود من قِبل مقيِّمَين مستقلَّين على الأقل في مراجعة عمياء
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  معايير الجهات الخارجية (HumanEval وSWE-bench وMBPP): مستخرجة من المنشورات الرسمية للنماذج أو لوحات المتصدرين المجتمعية؛ تاريخ التقييم مذكور في كل مقال
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  اختبارات النماذج المحلية: مُشغَّلة على أجهزة المستهلكين عند مستوى التكميم المذكور في المقال
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  الإفصاح: حيثما يُستشهد باختبارات PromptQuorum الداخلية، تُحدَّد بعلامة "Tested in PromptQuorum" في نص المقال
                </li>
              </ul>
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

            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed mb-8">
              <strong>ملاحظة دقة:</strong>
               تم التحقق من معلومات الميزات والأسعار في مارس 2026 وتُقدَّم بحسن نية استنادًا إلى الوثائق العامة لكل منتج. تتغير المنتجات كثيرًا — تحقق من الميزات الحالية مباشرة مع كل مزوّد. إذا رأيت أن أي معلومة في هذه الصفحة غير دقيقة أو قديمة، 
              <a href="mailto:hello@promptquorum.com" className="underline hover:text-amber-900">تواصل معنا</a>
               وسنصحح ذلك فورًا. هذه المقارنة من إعداد PromptQuorum وتعكس وجهة نظرنا بوصفنا مشاركًا في هذا السوق.
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-3">ما هي أداة مقارنة نماذج LLM المتعددة؟</h3>
              <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 mb-4">
                <p className="text-text-primary text-[15px] leading-relaxed">أداة مقارنة نماذج LLM المتعددة هي أداة ترسل الطلب ذاته إلى نماذج لغوية كبيرة متعددة في آنٍ واحد وتعرض الإجابات بالتوازي، مما يُتيح للمستخدمين تقييم الفروق في التفكير والدقة والأسلوب بين أنظمة الذكاء الاصطناعي — GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro وMistral Large وغيرها — دون التبديل بين التبويبات أو تكرار الإدخال.</p>
              </div>
              <p className="text-text-secondary mb-3">لا يُعدّ أي نموذج ذكاء اصطناعي منفرد مرجعًا لجميع المهام في 2026. يمتلك كل من GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro بيانات تدريب وتحيزات معمارية ونقاط قوة استدلالية مختلفة. الإجابة التي تبدو صحيحة من نموذج قد تُدحض أو تُقيَّد أو تُوسَّع بشكل كبير من نموذج آخر.</p>
              <p className="text-text-secondary">تمثّل الأدوات الخمس المقارنة هنا المناهج الرئيسية المتاحة حاليًا: المنصات الاستهلاكية (Poe من Quora)، والمعايير المجتمعية (LM Arena)، وأدوات تقييم المطورين (OpenMark)، وبيئات العمل متعددة النماذج الموحّدة (AiZolo)، ومنصات تقييم التوافق (PromptQuorum). كل منها يخدم سير عمل مختلف.</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-2">ما الفروق الرئيسية بين الأدوات الخمس متعددة النماذج؟</h3>
              <p className="text-text-secondary mb-4">يقارن الجدول التالي الأدوات الخمس في أهم الميزات لسير العمل متعدد النماذج الاحترافي — الإرسال المتزامن، وتقييم التوافق، ودعم LLM المحلي، والتحكم في مفتاح API، والتسعير.</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-semibold text-xs uppercase tracking-wider">الأداة</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">إرسال متزامن</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">تقييم التوافق</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">LLM محلي</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">التحكم في مفتاح API</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider">السعر</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">PromptQuorum</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ نعم</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Quorum Verdict</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Ollama + LM Studio</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ مفاتيحك</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">بيتا مجانية</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">Poe (Quora)</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ تسلسلي / محدود</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ لا</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ سحابي فقط</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ محدود</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">مجاني / $19.99/شهر</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">LM Arena</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ نموذجان فقط</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ تصويت بشري فقط</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ سحابي فقط</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ لا</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">مجاني</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">OpenMark</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ متوازٍ</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ تقييم حتمي</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ سحابي فقط</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ نعم</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">طبقة مجانية / رصيد</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">AiZolo</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ نعم</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ لا</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ سحابي فقط</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ نعم</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">من $9.90/شهر</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs font-mono text-text-secondary mt-3">✓ نعم · ~ جزئي · ✗ لا · استنادًا إلى الوثائق العامة، مارس 2026. الأسعار والميزات قابلة للتغيير — تحقق مع كل مزوّد. هذه المقارنة من إعداد PromptQuorum.</p>
            </div>

            <div className="mb-10">
              <div className="border border-primary/25 bg-primary/5 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-primary">PromptQuorum</span>
                  <span className="text-xs font-mono bg-green-100 text-green-700 border-green-200 border px-3 py-1 rounded-full">الأفضل لـ: المطورين والمستخدمين المتقدمين</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">بيتا · يوليو 2026</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">promptquorum.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">مفاتيح API مطلوبة</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Ollama + LM Studio</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>PromptQuorum هو الأداة الوحيدة بين المُراجَعة التي تجمع بين الإرسال المتزامن للطلبات وتقييم التوافق الآلي.</strong> تكتب طلبًا، تختار نماذجك — GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro وMistral Large والنماذج المحلية — ويُرسل PromptQuorum إلى الجميع بالتوازي. يحلّل Quorum Verdict بعد ذلك أين تتفق النماذج، وأين تختلف، وما الذي تعنيه هذه الأنماط لموثوقية الإجابة.</p>
<p className="text-text-secondary mb-3 leading-relaxed">الميزة المحورية هي دعم LLM المحلي. من خلال التكامل مع Ollama وLM Studio، يُدرج PromptQuorum النماذج التي تعمل محليًا — يحتاج LLaMA 3.1 7B إلى 8 غيغابايت RAM، و13B إلى 16 غيغابايت — في عملية الإرسال، لذا لا تغادر الطلبات الحساسة جهازك أبدًا. بالنسبة للمحامين والعاملين في الرعاية الصحية والمحللين الماليين والمطورين العاملين على كود خاص، هذا ليس خيارًا بل ضرورة.</p>
<p className="text-text-secondary leading-relaxed">يشترط PromptQuorum على المستخدمين إحضار مفاتيح API الخاصة بهم من OpenAI وAnthropic وGoogle وMistral. يُبقي هذا البيانات تحت سيطرتك، والتكاليف شفافة، والاستخدام مرتبطًا بشروطك التجارية مع كل مزوّد.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">من يجب أن يستخدم PromptQuorum؟</h4>
              <p className="text-text-secondary mb-8">صُمِّم PromptQuorum للمطورين الذين يقيّمون النموذج المراد دمجه في خط إنتاج، والباحثين الذين يحتاجون إلى التحقق المتقاطع من النتائج عبر النماذج، والمهنيين الذين يتعاملون مع معلومات سرية لا يمكن إرسالها إلى خوادم سحابية خارجية.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">Poe (by Quora)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">الأفضل لـ: الاستخدام اليومي / الاستهلاكي</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">poe.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">مجاني / $19.99/شهر</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">iOS وAndroid والويب</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">ملايين المستخدمين</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>Poe (المملوك لـ Quora) هو منصة دردشة متعددة النماذج تتيح الوصول إلى GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro وLlama وMistral وآلاف البوتات التي أنشأها المجتمع.</strong> الواجهة الاستهلاكية مُحسَّنة لاستكشاف نماذج متعددة دون مفاتيح API أو إعداد تقني.</p>
<p className="text-text-secondary leading-relaxed">لا يوفّر Poe تقييم التوافق — يمكنك التبديل بين النماذج أو مقارنة اثنين جنبًا إلى جنب، لكن دون تحليل آلي للتطابق. استنادًا إلى الوثائق العامة في مارس 2026، لا يدعم الاستدلال المحلي عبر Ollama أو LM Studio.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">Poe مقابل PromptQuorum: الفروق الرئيسية</h4>
              <p className="text-text-secondary mb-8">Poe منصة استهلاكية تركّز على الوصول والمحادثة. PromptQuorum أداة احترافية تركّز على تقييم الطلبات وتقييم التوافق. Poe أنسب للدردشة اليومية واستكشاف البوتات. PromptQuorum أنسب لتقييم الطلبات المضبوط وتحليل التوافق وسير عمل LLM المحلي.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">LM Arena (lmarena.ai)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">الأفضل لـ: المعايرة الأكاديمية</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">lmarena.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">مجاني</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">ويب فقط</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">نظام التصويت البشري</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>LM Arena (المعروفة سابقًا بـ Chatbot Arena) هي لوحة تصنيف نماذج الذكاء الاصطناعي الأكثر استشهادًا، وتستخدم تقييمات Elo مستمدة من ملايين أصوات التفضيل البشري.</strong> يُرسل المستخدمون طلبات ويصوّتون على أيٍّ من النموذجين المجهولَين أنتج إجابة أفضل.</p>
<p className="text-text-secondary leading-relaxed">تعرض LM Arena نموذجين جنبًا إلى جنب وتجمع صوت تفضيل بشري واحد — لا تقدّم تحليل توافق آليًا، ولا تدعم نماذج LLM المحلية، ولا تتيح اختيار نماذج بعينها في وضع المقارنة الرئيسي. هي منصة معايرة وليست أداة سير عمل.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">LM Arena مقابل PromptQuorum: الفروق الرئيسية</h4>
              <p className="text-text-secondary mb-8">LM Arena أنسب لفهم اتجاهات التفضيل البشري المُجمَّعة في الصناعة. PromptQuorum أنسب لتقييم طلباتك المحددة عبر النماذج التي اخترتها بتحليل متسق وآلي. LM Arena تخبرك بما يُفضّله المجتمع؛ PromptQuorum يخبرك بما ينتجه طلبك في كل نموذج يهمّك.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">OpenMark (openmark.ai)</span>
                  <span className="text-xs font-mono bg-green-50 text-green-700 border-green-200 border px-3 py-1 rounded-full">الأفضل لـ: تحليل التكلفة/الجودة</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">openmark.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">طبقة مجانية / رصيد</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">أكثر من 100 نموذج</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">تقييم حتمي</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>OpenMark أداة معايرة موجّهة للمطورين تُشغّل الطلبات على أكثر من 100 نموذج ذكاء اصطناعي في آنٍ واحد وتُقيّم النتائج بصورة حتمية — الطلب ذاته يُنتج دائمًا الترتيب ذاته.</strong> تُظهر بدقة تكلفة كل نموذج لكل طلب إلى جانب درجات الجودة.</p>
<p className="text-text-secondary leading-relaxed">يتميّز OpenMark بالاتساع (أكثر من 100 نموذج) وشفافية التكاليف، لكنه لا يُنتج حكمًا بالتوافق — يُقيّم كل نموذج منفردًا بدلًا من تحليل أنماط التطابق. لا يدعم نماذج LLM المحلية عبر Ollama أو LM Studio.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">OpenMark مقابل PromptQuorum: الفروق الرئيسية</h4>
              <p className="text-text-secondary mb-8">يُجيب OpenMark على: "أيّ نموذج منفرد يؤدي أفضل لهذه المهمة وبأي تكلفة؟". يُجيب PromptQuorum على: "إلى أي مدى تتفق النماذج على هذا الطلب وماذا يعني اختلافها؟". كلاهما يتطلب مفاتيح API؛ يدعم OpenMark أكثر من 100 نموذج؛ يُضيف PromptQuorum الاستدلال المحلي وتقييم التوافق.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">AiZolo (aizolo.com)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">الأفضل لـ: فرق المحتوى</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">aizolo.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">يبدأ من $9.90/شهر</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">GPT-4o وClaude وGemini وGrok</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">مكتبة الطلبات</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>AiZolo بيئة عمل متعددة النماذج موحّدة مُصمَّمة لصنّاع المحتوى وفرق التسويق، مع إرسال متزامن بالتوازي إلى GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro وGrok.</strong> اعتبارًا من مارس 2026، بدأت الباقات من $9.90/شهر — تحقق من السعر الحالي على aizolo.com.</p>
<p className="text-text-secondary leading-relaxed">لا يقدّم AiZolo تقييم التوافق — يعرض الإجابات جنبًا إلى جنب لكنه يترك التحليل للمستخدم. يدعم فقط أربعة نماذج سحابية دون خيار LLM محلي. هو أداة سير عمل لإنتاج المحتوى وليس منصة تقييم تقنية.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">AiZolo مقابل PromptQuorum: الفروق الرئيسية</h4>
              <p className="text-text-secondary mb-8">AiZolo أنسب لفرق المحتوى التي تحتاج إلى بيئة عمل كتابة متعددة النماذج بأسعار معقولة للاستخدام اليومي. PromptQuorum أنسب للمستخدمين المتقدمين الذين يحتاجون إلى تحليل توافق آلي، وخصوصية LLM المحلي، والوصول المضبوط بمفتاح API لمجموعة أوسع من النماذج بما فيها الأنظمة مفتوحة المصدر.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">أي أداة متعددة النماذج يجب أن تستخدم؟</h3>
              <div className="space-y-3">
                <div className="rounded-lg px-5 py-4 bg-primary/8 border border-primary/20">
                  <span className="font-semibold text-primary">اختر PromptQuorum</span>
                  <span className="text-text-secondary"> إذا كنت بحاجة إلى تقييم التوافق بين النماذج، أو دعم LLM المحلي للعمل الحساس، أو سير عمل تقييم مضبوط بمفاتيح API الخاصة بك.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">اختر Poe</span>
                  <span className="text-text-secondary"> إذا أردت وصولًا سهلًا إلى GPT-4o وClaude 4.6 Sonnet وGemini وآلاف البوتات للدردشة اليومية والاستكشاف دون إدارة مفاتيح API.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">اختر LM Arena</span>
                  <span className="text-text-secondary"> إذا أردت المساهمة في بيانات تفضيل النماذج المدفوعة مجتمعيًا أو دراستها وتصنيفات Elo في الصناعة.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">اختر OpenMark</span>
                  <span className="text-text-secondary"> إذا كنت مطوّرًا تختار نموذجًا لتطبيق إنتاجي وتحتاج إلى تقييم جودة حتمي مع بيانات تكلفة شفافة عبر أكثر من 100 نموذج.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">اختر AiZolo</span>
                  <span className="text-text-secondary"> إذا كنت صانع محتوى أو مسوّقًا يحتاج إلى بيئة عمل متعددة النماذج ميسورة التكلفة ومصمَّمة جيدًا لسير عمل الكتابة اليومية.</span>
                </div>
              </div>
            </div>
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
