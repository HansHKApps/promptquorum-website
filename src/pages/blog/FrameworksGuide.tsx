import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function FrameworksGuide() {
  const languages: { code: string; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' },
    { code: 'ja', name: '日本語' },
    { code: 'zh', name: '中文' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            {languages.map(l => (
              <Link
                key={l.code}
                to={`/blog/prompt-frameworks?lang=${l.code}`}
                className="px-2 py-1 text-xs font-medium text-text-secondary hover:text-primary transition-colors"
              >
                {l.code.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Prompt Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              8 Prompt Engineering Frameworks Explained: CRAFT vs CO-STAR vs APE (2026 Guide)
            </h1>
            <p className="text-lg text-text-secondary mb-4">
              Master the top prompt frameworks and learn which one works best for your use case.
            </p>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span>Published March 14, 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-text-primary">
            <h2 className="text-2xl font-bold mt-8 mb-4">What is a Prompt Framework?</h2>
            <p>
              A prompt framework is a structured template that guides you through the essential elements of a good prompt.
              Instead of writing a rambling paragraph, frameworks break down your request into specific fields—like context,
              objective, tone, and audience. This makes your prompts clearer, more effective, and gives you predictable results.
            </p>

            <p>
              Think of it like a recipe. You could throw random ingredients into a pot and hope for the best, or you could
              follow a structured recipe with measured ingredients in the right order. Frameworks are recipes for prompts.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. CRAFT Framework</h2>
            <p><strong>Best for:</strong> Marketing, copywriting, creative content</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">The Fields:</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Context:</strong> Background information the AI needs to understand</li>
              <li><strong>Role:</strong> What role should the AI take (e.g., "expert copywriter")</li>
              <li><strong>Action:</strong> What you want the AI to do (e.g., "write email subject lines")</li>
              <li><strong>Format:</strong> How you want the output structured (e.g., "bullet list", "paragraph")</li>
              <li><strong>Target:</strong> Who this is for (e.g., "B2B SaaS decision-makers")</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Example:</h3>
            <div className="bg-surface p-4 rounded-lg border border-gray-200 font-mono text-sm">
              <p><strong>Context:</strong> We're launching a productivity app for freelancers</p>
              <p><strong>Role:</strong> You are an expert copywriter specializing in SaaS</p>
              <p><strong>Action:</strong> Write 5 compelling email subject lines</p>
              <p><strong>Format:</strong> Numbered list with a 1-sentence explanation for each</p>
              <p><strong>Target:</strong> Busy freelancers aged 25–45 who value time-saving tools</p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Why It Works:</h3>
            <p>
              CRAFT forces you to think about every angle of your request before asking the AI. The role + target combo
              ensures the AI understands exactly who the content is for and how to speak to them.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. CO-STAR Framework</h2>
            <p><strong>Best for:</strong> Business communication, professional writing, decision-making</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">The Fields:</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Context:</strong> The situation or background</li>
              <li><strong>Objective:</strong> What you're trying to achieve</li>
              <li><strong>Style:</strong> The tone and approach (formal, casual, technical, etc.)</li>
              <li><strong>Tone:</strong> The emotional quality (urgent, reassuring, confident, etc.)</li>
              <li><strong>Audience:</strong> Who will read/use this</li>
              <li><strong>Response:</strong> What format/length/detail level you want</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Example:</h3>
            <div className="bg-surface p-4 rounded-lg border border-gray-200 font-mono text-sm">
              <p><strong>Context:</strong> Our startup just got Series A funding</p>
              <p><strong>Objective:</strong> Announce this to employees</p>
              <p><strong>Style:</strong> Professional but enthusiastic</p>
              <p><strong>Tone:</strong> Celebratory and forward-looking</p>
              <p><strong>Audience:</strong> Internal team (engineers, designers, marketers)</p>
              <p><strong>Response:</strong> 3-paragraph announcement suitable for email</p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Why It Works:</h3>
            <p>
              CO-STAR separates style from tone (style is the presentation, tone is the emotion), which gives you much more
              control over how the AI writes. It's excellent for corporate or professional contexts where precision matters.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. SPECS Framework</h2>
            <p><strong>Best for:</strong> Complex projects, detailed analysis, technical writing</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">The Fields:</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Situation:</strong> The current state or problem</li>
              <li><strong>Purpose:</strong> Why you're asking (what problem does this solve)</li>
              <li><strong>Expected Output:</strong> What the result should look like</li>
              <li><strong>Context:</strong> Additional relevant information</li>
              <li><strong>Style:</strong> The format and tone</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Example:</h3>
            <div className="bg-surface p-4 rounded-lg border border-gray-200 font-mono text-sm">
              <p><strong>Situation:</strong> We have 1000 customer support tickets waiting to be categorized</p>
              <p><strong>Purpose:</strong> To route them to the right team (billing, technical, feature request)</p>
              <p><strong>Expected Output:</strong> A Python script that reads CSV, categorizes, outputs new CSV</p>
              <p><strong>Context:</strong> We use these categories: [list]. Common keywords per category: [list]</p>
              <p><strong>Style:</strong> Code only, no explanation, use pandas library</p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Why It Works:</h3>
            <p>
              SPECS is detail-oriented and excellent when you need to convey complex requirements. The expected output field
              prevents the AI from guessing what you want.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. RISEN Framework</h2>
            <p><strong>Best for:</strong> Multi-step tasks, workflows, processes, instructions</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">The Fields:</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Role:</strong> What role should the AI play</li>
              <li><strong>Instructions:</strong> Detailed steps or requirements</li>
              <li><strong>Steps:</strong> Numbered breakdown of the process</li>
              <li><strong>End Goal:</strong> What success looks like</li>
              <li><strong>Narrowing:</strong> Constraints or specific rules to follow</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Example:</h3>
            <div className="bg-surface p-4 rounded-lg border border-gray-200 font-mono text-sm">
              <p><strong>Role:</strong> You are an expert teacher creating a course outline</p>
              <p><strong>Instructions:</strong> Create a 4-week beginner's course on prompt engineering</p>
              <p><strong>Steps:</strong> 1) Define learning objectives 2) Outline each week 3) List resources</p>
              <p><strong>End Goal:</strong> A student should be able to write professional prompts by week 4</p>
              <p><strong>Narrowing:</strong> No code examples, assume no prior AI knowledge, keep lessons under 30 mins each</p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Why It Works:</h3>
            <p>
              RISEN is perfect for sequences and processes. The "narrowing" field prevents the AI from going off-track and
              ensures the output respects your constraints.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. APE Framework</h2>
            <p><strong>Best for:</strong> Quick requests, simple tasks, when you don't need complexity</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">The Fields:</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Action:</strong> What you want the AI to do</li>
              <li><strong>Purpose:</strong> Why you're asking</li>
              <li><strong>Expectation:</strong> What you expect back</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Example:</h3>
            <div className="bg-surface p-4 rounded-lg border border-gray-200 font-mono text-sm">
              <p><strong>Action:</strong> Summarize this article</p>
              <p><strong>Purpose:</strong> I need a 2-minute overview for a team meeting</p>
              <p><strong>Expectation:</strong> 3-4 bullet points covering key findings</p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Why It Works:</h3>
            <p>
              APE is beautifully simple. Most everyday requests fit into these 3 fields. It's a great starting point
              before graduating to more complex frameworks.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Google Prompt Framework</h2>
            <p><strong>Best for:</strong> General purpose, research, finding information</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">The Fields:</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Task:</strong> What you want to accomplish</li>
              <li><strong>Context:</strong> Relevant background</li>
              <li><strong>Persona:</strong> Who is asking / what perspective to take</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Why It Works:</h3>
            <p>
              Google's framework is lightweight and information-focused. Great for research queries and "what if" scenarios.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. TRACE Framework</h2>
            <p><strong>Best for:</strong> Few-shot learning, examples-based requests, teaching the AI</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">The Fields:</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Task:</strong> What you want</li>
              <li><strong>Request:</strong> Your specific ask</li>
              <li><strong>Action:</strong> What the AI should do</li>
              <li><strong>Context:</strong> Additional info</li>
              <li><strong>Example:</strong> Show the AI an example of perfect output</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Why It Works:</h3>
            <p>
              TRACE is powerful because showing an example teaches the AI exactly what you want. "Do this kind of thing"
              is often clearer than explaining it.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. RTF Framework</h2>
            <p><strong>Best for:</strong> Corporate training, standardized content, teaching materials</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">The Fields:</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Role:</strong> The instructor or expert role</li>
              <li><strong>Task:</strong> The teaching objective</li>
              <li><strong>Format:</strong> How to present (slides, quiz, lesson, etc.)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Why It Works:</h3>
            <p>
              RTF is purpose-built for training and education. It ensures consistent, pedagogically sound output.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Which Framework Should You Use?</h2>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-2 font-semibold">Framework</th>
                    <th className="text-left py-2 font-semibold">Best For</th>
                    <th className="text-left py-2 font-semibold">Complexity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary/20">
                    <td className="py-2">APE</td>
                    <td>Quick, simple requests</td>
                    <td>⭐ Low</td>
                  </tr>
                  <tr className="border-b border-primary/20">
                    <td className="py-2">CRAFT</td>
                    <td>Marketing, copywriting</td>
                    <td>⭐⭐ Medium</td>
                  </tr>
                  <tr className="border-b border-primary/20">
                    <td className="py-2">CO-STAR</td>
                    <td>Business communication</td>
                    <td>⭐⭐ Medium</td>
                  </tr>
                  <tr className="border-b border-primary/20">
                    <td className="py-2">SPECS</td>
                    <td>Complex, technical tasks</td>
                    <td>⭐⭐⭐ High</td>
                  </tr>
                  <tr className="border-b border-primary/20">
                    <td className="py-2">RISEN</td>
                    <td>Multi-step processes</td>
                    <td>⭐⭐⭐ High</td>
                  </tr>
                  <tr className="border-b border-primary/20">
                    <td className="py-2">TRACE</td>
                    <td>Example-based learning</td>
                    <td>⭐⭐⭐ High</td>
                  </tr>
                  <tr className="border-b border-primary/20">
                    <td className="py-2">Google</td>
                    <td>General research</td>
                    <td>⭐⭐ Medium</td>
                  </tr>
                  <tr>
                    <td className="py-2">RTF</td>
                    <td>Training & education</td>
                    <td>⭐⭐ Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Pro Tip: Test Multiple Frameworks</h2>
            <p>
              Here's the secret: the same prompt written in CRAFT vs SPECS might produce different results from the same AI model.
              Different frameworks trigger different reasoning patterns in the AI.
            </p>

            <p>
              That's why <strong>PromptQuorum</strong> lets you switch between frameworks instantly and see how the same idea
              gets restructured. Try your prompt in CRAFT, then switch to SPECS, then CO-STAR. Compare the results.
              You'll learn which frameworks work best for your specific use case.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Next Steps</h2>
            <p>
              Pick one framework that matches your most common task. Master it. Then experiment with others as your skills grow.
            </p>

            <p>
              Ready to put these frameworks into practice? Try them out with PromptQuorum, which includes all 8 frameworks
              plus automatic optimization and multi-AI comparison.
            </p>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
              <p className="text-sm text-text-secondary mb-4">Try these frameworks with PromptQuorum</p>
              <Link to="/#waitlist" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
