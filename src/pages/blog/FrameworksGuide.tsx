import { BlogPost } from './BlogPost'

export function FrameworksGuide() {
  return (
    <BlogPost
      postId="frameworks"
      backUrl="/"
      langUrl={(lang) => `/blog/prompt-frameworks?lang=${lang}`}
    />
  )
}
