import { BlogPost } from './BlogPost'

export function LocalAIVsCloud() {
  return (
    <BlogPost
      postId="localAI"
      backUrl="/"
      langUrl={(lang) => `/blog/local-ai-vs-cloud?lang=${lang}`}
    />
  )
}
