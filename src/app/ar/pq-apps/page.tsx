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
