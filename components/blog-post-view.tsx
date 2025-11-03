import Link from "next/link"
import Image from "next/image"
import animeImage from "@/assets/anime-characters-colorful-scene.png"
import profilePhoto from "@/assets/Ayumu Osaka Kasuga.jpg"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar, Eye, MessageCircle, Share2, ThumbsUp, Send, UserMinus } from "lucide-react"

// Mock comments data
const mockComments = [
  {
    id: 1,
    author: "progamer67",
    avatar: profilePhoto,
    content: "This analysis is spot on! The animation in the latest season was insane",
    date: "2 hours ago",
    likes: 42,
    replies: [
      {
        id: 11,
        author: "Jaramaster5000",
        avatar: profilePhoto,
        content: "I don't know man that garou slide animation was horrible 😭",
        date: "1 hour ago",
        likes: 15
      }
    ]
  },
  {
    id: 2,
    author: "FoolyCooly",
    avatar: profilePhoto,
    content: "Great breakdown of the story elements. Really helped me understand some more stuff about them.",
    date: "5 hours ago",
    likes: 28,
    replies: []
  }
]

// Mock related posts data
const relatedPosts = [
  {
    slug: "cyberpunk-2077-guide",
    title: "Cyberpunk 2077: Ultimate Gaming Guide",
    category: "Gaming",
    date: "Dec 12, 2024"
  },
  {
    slug: "attack-on-titan-final",
    title: "Attack on Titan Final Season Review",
    category: "Reviews",
    date: "Dec 10, 2024"
  },
  {
    slug: "demon-slayer-animation",
    title: "Demon Slayer Animation Analysis",
    category: "Analysis",
    date: "Dec 5, 2024"
  }
]

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
    <article className="min-h-screen bg-background">
      {/* Hero Section with Title */}
      <div className="relative h-dvh w-full bg-black">
        <Image
          src={mockPost.image}
          alt={mockPost.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        {/* CHANGES HERE:
          1. Added `relative z-10` to make sure this container is above the `fill` Image.
          2. Removed `mt-16` and `pt-24` from the outer div.
          3. Added `pt-24` (to clear your header) and increased `pb-12` to `pb-24` for more padding.
        */}
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-end pt-24 pb-24">
          {/* Back button */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="gaming-border-hover text-white bg-background/20 backdrop-blur-sm">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
          
          {/* Hero content */}
          {/* CHANGE: Removed redundant `z-10` from here */}
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {mockPost.tags.map((tag) => (
                <Badge key={tag} variant="destructive" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-montserrat post-title">
              {mockPost.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mb-6">
              {mockPost.excerpt}
            </p>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{mockPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{mockPost.views} views</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>{mockPost.comments} comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="container mx-auto px-4 py-12">
        {/* Article content and sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Article content */}
            <Card className="anime-gradient gaming-border">
              <CardContent className="p-8">
                <div className="prose prose-invert prose-red max-w-none">
                  <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                    {mockPost.content.split("\n").map((line, index) => {
                      if (line.startsWith("# ")) {
                        return (
                          <h1 key={index} className="text-3xl font-bold text-primary mb-6 mt-8 post-title font-montserrat">
                            {line.substring(2)}
                          </h1>
                        )
                      }
                      if (line.startsWith("## ")) {
                        return (
                          <h2 key={index} className="text-2xl font-bold text-foreground mb-4 mt-6 font-montserrat">
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
                        <p key={index} className="text-foreground mb-4 leading-relaxed font-nunito">
                          {line}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share buttons */}
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline" className="gaming-border-hover bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
              <Button variant="outline" className="gaming-border-hover bg-transparent">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Like Post
              </Button>
            </div>

            {/* Comments section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold font-montserrat text-primary">Comments ({mockComments.length})</h3>
              
              {/* Add comment form */}
              <Card className="gaming-border bg-card/50">
                <CardContent className="p-6 space-y-4">
                  <Textarea 
                    placeholder="Share your thoughts..."
                    className="gaming-border bg-background/50"
                  />
                  <div className="flex justify-end">
                    <Button className="gaming-border-hover cursor-pointer">
                      <Send className="w-4 h-4 mr-2" />
                      Post Comment
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Comments list */}
              <div className="space-y-6">
                {mockComments.map((comment) => (
                  <Card key={comment.id} className="gaming-border bg-card/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden gaming-border">
                          <Image
                            src={comment.avatar}
                            alt={comment.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-primary">{comment.author}</h4>
                            <span className="text-sm text-muted-foreground">{comment.date}</span>
                          </div>
                          <p className="text-foreground mb-4">{comment.content}</p>
                          <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="gaming-border-hover cursor-pointer">
                              Reply
                            </Button>
                          </div>
                          
                          {/* Replies */}
                          {comment.replies && comment.replies.length > 0 && (
                            <div className="mt-4 pl-6 border-l-2 border-primary/20">
                              {comment.replies.map((reply) => (
                                <div key={reply.id} className="mt-4">
                                  <div className="flex items-start gap-4">
                                    <div className="relative w-8 h-8 rounded-full overflow-hidden gaming-border cursor-pointer">
                                      <Image
                                        src={reply.avatar}
                                        alt={reply.author}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-bold text-primary">{reply.author}</h4>
                                        <span className="text-sm text-muted-foreground">{reply.date}</span>
                                      </div>
                                      <p className="text-foreground mb-2">{reply.content}</p>
                                      <Button variant="ghost" size="sm" className="gaming-border-hover cursor-pointer">
                                        Reply
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author info */}
            <Card className="anime-gradient gaming-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-primary mb-4 sidebar-heading font-montserrat">About the Author</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center gaming-border">
                    <span className="text-primary-foreground font-bold">A</span>
                  </div>
                  <div>
                    <p className="font-medium">{mockPost.author}</p>
                    <p className="text-sm text-muted-foreground">Blog Administrator</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Passionate about anime and gaming, bringing you the latest gist and insights from around the world.
                </p>
              </CardContent>
            </Card>

            {/* Related posts */}
            <Card className="anime-gradient gaming-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-primary mb-4 sidebar-heading font-montserrat">Related Posts</h3>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block p-3 rounded-lg bg-secondary/20 gaming-border-hover transition-colors hover:bg-secondary/30"
                    >
                      <h4 className="font-medium text-sm mb-1">{post.title}</h4>
                      <div className="flex items-center justify-between">
                        <Badge variant="destructive" className="text-xs">
                          {post.category}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </article>
  )
}
