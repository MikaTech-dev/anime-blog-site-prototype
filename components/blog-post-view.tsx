import Link from "next/link"
import Image from "next/image"
import animeImage from "@/assets/anime-characters-colorful-scene.png"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Eye, MessageCircle, Share2 } from "lucide-react"

// Mock post data - would be fetched from API based on slug
const mockPost = {
  id: "1",
  title: "Top 10 Anime of 2024: A Complete Review",
  content: `# Top 10 Anime of 2024: A Complete Review

This year has been absolutely incredible for anime fans! From epic adventures to heartwarming slice-of-life stories, 2024 has delivered some truly unforgettable series that have captivated audiences worldwide.

## 1. Demon Slayer: Infinity Castle Arc

The animation quality continues to blow our minds with Ufotable's masterful work. The Infinity Castle Arc brings us deeper into the final confrontation with Muzan, featuring some of the most spectacular fight sequences ever animated.

**Why it's amazing:**
- Unparalleled animation quality
- Emotional character development
- Epic battle sequences

## 2. Attack on Titan: The Final Chapters

An emotional conclusion to one of the greatest anime series of all time. The final chapters delivered on every promise, providing closure to character arcs that have been building for over a decade.

## 3. Jujutsu Kaisen Season 2

The Shibuya Incident arc proved why JJK is considered one of the best modern shonen anime. The animation, storytelling, and character development reached new heights.

## 4. Chainsaw Man

Denji's chaotic journey continues to surprise and delight fans with its unique blend of horror, comedy, and heart. MAPPA's adaptation brings Fujimoto's wild imagination to life perfectly.

## 5. Spy x Family Season 2

The Forger family continues to warm our hearts while delivering top-tier comedy and action. Anya remains the most adorable character in anime.

## Conclusion

2024 has been a phenomenal year for anime, with each series bringing something unique to the table. Whether you're into action, romance, comedy, or drama, there's been something for everyone.

What was your favorite anime of 2024? Let us know in the comments below!`,
  excerpt:
    "Discover the most captivating anime series that defined this year, from epic adventures to heartwarming slice-of-life stories.",
  tags: ["Anime", "Reviews", "2024"],
  date: "December 15, 2024",
  author: "Admin",
  views: "2.4K",
  comments: "45",
  image: animeImage,
  category: "Anime",
}

interface BlogPostViewProps {
  slug: string
}

export function BlogPostView({ slug }: BlogPostViewProps) {
  return (
    <article className="container mx-auto px-4 py-8">
      {/* Back button */}
      <div className="mb-8">
        <Button asChild variant="ghost" className="gaming-border-hover">
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article header */}
      <header className="mb-12 text-center space-y-6">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {mockPost.tags.map((tag) => (
            <Badge key={tag} variant="destructive">
              {tag}
            </Badge>
          ))}
        </div>

  <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight post-title">{mockPost.title}</h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{mockPost.excerpt}</p>

        <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{mockPost.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span>{mockPost.views} views</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>{mockPost.comments} comments</span>
          </div>
        </div>
      </header>

      {/* Featured image */}
      <div className="mb-12">
        <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl gaming-border">
          <Image
            src={mockPost.image || "/placeholder.svg"}
            alt={mockPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3">
          <Card className="anime-gradient gaming-border">
            <CardContent className="p-8">
              <div className="prose prose-invert prose-red max-w-none">
                <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                  {mockPost.content.split("\n").map((line, index) => {
                    if (line.startsWith("# ")) {
                      return (
                        <h1 key={index} className="text-3xl font-bold text-primary mb-6 mt-8 post-title">
                          {line.substring(2)}
                        </h1>
                      )
                    }
                    if (line.startsWith("## ")) {
                      return (
                        <h2 key={index} className="text-2xl font-bold text-foreground mb-4 mt-6">
                          {line.substring(3)}
                        </h2>
                      )
                    }
                    if (line.startsWith("**") && line.endsWith("**")) {
                      return (
                        <p key={index} className="font-bold text-primary mb-4">
                          {line.substring(2, line.length - 2)}
                        </p>
                      )
                    }
                    if (line.startsWith("- ")) {
                      return (
                        <li key={index} className="text-muted-foreground mb-2 ml-4">
                          {line.substring(2)}
                        </li>
                      )
                    }
                    if (line.trim() === "") {
                      return <br key={index} />
                    }
                    return (
                      <p key={index} className="text-foreground mb-4 leading-relaxed">
                        {line}
                      </p>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Share buttons */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <Button variant="outline" className="gaming-border-hover bg-transparent">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Author info */}
          <Card className="anime-gradient gaming-border">
            <CardContent className="p-6">
              <h3 className="font-bold text-primary mb-4 sidebar-heading">About the Author</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">A</span>
                </div>
                <div>
                  <p className="font-medium">{mockPost.author}</p>
                  <p className="text-sm text-muted-foreground">Blog Administrator</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Passionate about anime and gaming culture, bringing you the latest reviews and insights from the otaku
                world.
              </p>
            </CardContent>
          </Card>

          {/* Related posts */}
          <Card className="anime-gradient gaming-border">
            <CardContent className="p-6">
              <h3 className="font-bold text-primary mb-4 sidebar-heading">Related Posts</h3>
              <div className="space-y-4">
                <Link
                  href="/blog/cyberpunk-2077-guide"
                  className="block p-3 rounded-lg bg-secondary/20 gaming-border-hover transition-colors hover:bg-secondary/30"
                >
                  <h4 className="font-medium text-sm mb-1">Cyberpunk 2077: Ultimate Gaming Guide</h4>
                  <p className="text-xs text-muted-foreground">Gaming • Dec 12, 2024</p>
                </Link>
                <Link
                  href="/blog/attack-on-titan-final"
                  className="block p-3 rounded-lg bg-secondary/20 gaming-border-hover transition-colors hover:bg-secondary/30"
                >
                  <h4 className="font-medium text-sm mb-1">Attack on Titan Final Season Review</h4>
                  <p className="text-xs text-muted-foreground">Reviews • Dec 10, 2024</p>
                </Link>
                <Link
                  href="/blog/demon-slayer-animation"
                  className="block p-3 rounded-lg bg-secondary/20 gaming-border-hover transition-colors hover:bg-secondary/30"
                >
                  <h4 className="font-medium text-sm mb-1">Demon Slayer Animation Analysis</h4>
                  <p className="text-xs text-muted-foreground">Analysis • Dec 5, 2024</p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </article>
  )
}
