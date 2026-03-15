import { BlogPost } from './BlogPost'

export function DataPrivacyBlog() {
  return (
    <BlogPost
      postId="dataPrivacy"
      backUrl="/"
      langUrl={(lang) => `/blog/enterprise-data-privacy?lang=${lang}`}
    />
  )
}
