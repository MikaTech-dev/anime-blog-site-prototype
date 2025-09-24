import { BlogPostView } from "@/components/blog-post-view"
import { BlogFooter } from "@/components/blog-footer"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <BlogPostView slug={params.slug} />
      <BlogFooter />
    </div>
  )
}
