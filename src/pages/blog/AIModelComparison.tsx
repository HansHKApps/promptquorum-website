import { BlogPost } from './BlogPost'

export function AIModelComparison() {
  return (
    <BlogPost
      postId="comparison"
      backUrl="/"
      langUrl={(lang) => `/blog/ai-model-comparison?lang=${lang}`}
    />
  )
}
