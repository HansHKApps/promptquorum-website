import { BlogPost } from './BlogPost'

export function PromptImpactBlog() {
  return (
    <BlogPost
      postId="promptImpact"
      backUrl="/"
      langUrl={(lang) => `/blog/research-prompt-optimization-impact?lang=${lang}`}
    />
  )
}
