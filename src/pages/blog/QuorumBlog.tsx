import { BlogPost } from './BlogPost'

export function QuorumBlog() {
  return (
    <BlogPost
      postId="quorum"
      backUrl="/"
      langUrl={(lang) => `/blog/quorum?lang=${lang}`}
    />
  )
}
