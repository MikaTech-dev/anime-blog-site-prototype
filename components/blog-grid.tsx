import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog-card"
import type { StaticImageData } from "next/image"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string | StaticImageData
  tags: string[]
  date: string
  slug: string
  category: string
}

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Latest Posts
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Stay updated with the freshest content from the anime and gaming universe
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            tags={post.tags}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>

      {/* Load more section */}
      <div className="text-center pt-8">
        <Button size="lg" variant="outline" className="gaming-border-hover bg-transparent">
          Load More Posts
        </Button>
      </div>
    </section>
  )
}
