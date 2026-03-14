import { BlogPost } from './BlogPost'

export function OptimizationBlog() {
  return (
    <BlogPost
      postId="optimization"
      backUrl="/"
      langUrl={(lang) => `/blog/prompt-optimization?lang=${lang}`}
    />
  )
}
