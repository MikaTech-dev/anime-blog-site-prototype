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
    <section id="latest" className="space-y-12 py-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground">
          Latest Posts
        </h2>
        <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
          Stay updated with the freshest content from the gaming, tech, and anime universe
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
            category={post.category}
          />
        ))}
      </div>

      {/* Load more section */}
      <div className="text-center pt-8">
        <Button 
          size="lg" 
          variant="outline" 
          className="border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-black font-body px-8 py-6 rounded-lg"
        >
          Load More Posts
        </Button>
      </div>
    </section>
  )
}
