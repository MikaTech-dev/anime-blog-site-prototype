"use client"

import Link from "next/link"
import Image from "next/image"
import animeImage from "@/assets/anime-characters-colorful-scene.png"
import profilePhoto from "@/assets/Ayumu Osaka Kasuga.jpg"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { 
  ArrowLeft, Calendar, Eye, MessageSquare, Share2, ThumbsUp, Send, 
  Hash, User, Clock, ChevronRight 
} from "lucide-react"

// --- Mock Data (Sanitized) ---
const mockComments = [
  {
    id: 1,
    author: "Alex_K",
    avatar: profilePhoto,
    content: "The breakdown of the animation techniques in section 3 was spot on. Ufotable really pushed the bar.",
    date: "2h ago",
    likes: 42,
    replies: [
      {
        id: 11,
        author: "Sarah_J",
        avatar: profilePhoto,
        content: "Agreed. The compositing work alone deserves an award.",
        date: "1h ago",
        likes: 15
      }
    ]
  },
  {
    id: 2,
    author: "User_992",
    avatar: profilePhoto,
    content: "Solid review. I think you missed the pacing issues in the middle arc, though.",
    date: "5h ago",
    likes: 28,
    replies: []
  }
]

const relatedPosts = [
  {
    slug: "cyberpunk-2077-guide",
    title: "Cyberpunk 2077: System Requirements & Optimization",
    category: "Tech",
    date: "Dec 12"
  },
  {
    slug: "attack-on-titan-final",
    title: "AOT Finale: Narrative Analysis",
    category: "Review",
    date: "Dec 10"
  },
  {
    slug: "demon-slayer-animation",
    title: "The State of Modern Shonen Animation",
    category: "Industry",
    date: "Dec 05"
  }
]

const mockPost = {
  id: "1",
  title: "2024 ANIME RETROSPECTIVE: INDUSTRY SHIFTS & HIGHLIGHTS",
  content: `
# A Year of Technical Excellence

2024 marked a significant shift in production standards across the industry. We saw a departure from traditional schedules and a move towards high-fidelity, cinema-quality broadcast episodes.

## 1. Demon Slayer: Infinity Castle Arc

The technical achievement here cannot be overstated. The integration of 3D environments with 2D character assets has reached a level of seamlessness previously thought impossible for TV budgets.

**Key Technical Achievements:**
- Dynamic camera mapping
- Advanced particle rendering
- High-fidelity composite work

## 2. Attack on Titan: The Conclusion

MAPPA's handling of the finale prioritized narrative weight over flash. The color grading shifted to a more somber, desaturated palette that perfectly matched the thematic conclusion.

## 3. Production Pipeline Analysis

We are seeing more studios adopt hybrid workflows. The use of Blender for background assets is becoming standard, allowing for more complex camera movements and dynamic staging.

## Conclusion

The bar has been raised. As we move into 2025, expect to see these production values become the baseline for flagship titles.
  `,
  excerpt: "An in-depth look at the production quality and narrative trends that defined the 2024 anime landscape.",
  tags: ["Industry", "Analysis", "2024"],
  date: "Dec 15, 2024",
  author: "C. Charles",
  role: "Lead Editor",
  views: "2.4K",
  comments: "45",
  image: animeImage,
  category: "Report",
}

interface BlogPostViewProps {
  slug: string
}

export function BlogPostView({ slug }: BlogPostViewProps) {
  return (
    <article className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D32F2F] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] w-full bg-[#050505] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={mockPost.image}
            alt={mockPost.title}
            fill
            className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[2s]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Content Container */}
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <div className="max-w-4xl">
            {/* Back Link */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm font-mono text-[#D32F2F] hover:text-white mb-6 uppercase tracking-widest transition-colors"
            >
              <ArrowLeft size={14} /> Return to Feed
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {mockPost.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-gray-300">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[0.9] uppercase tracking-tight">
              {mockPost.title}
            </h1>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-gray-400 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#D32F2F]" />
                <span>{mockPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>5 MIN READ</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={14} />
                <span>{mockPost.views}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={14} />
                <span>{mockPost.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT LAYOUT --- */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Column (Span 8) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Prose Content */}
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-[#D32F2F] prose-li:text-gray-300">
              <div className="whitespace-pre-wrap font-sans">
                {mockPost.content.split("\n").map((line, index) => {
                  if (line.startsWith("# ")) {
                    return <h1 key={index} className="text-3xl mt-12 mb-6">{line.substring(2)}</h1>
                  }
                  if (line.startsWith("## ")) {
                    return <h2 key={index} className="text-2xl mt-10 mb-4 border-l-4 border-[#D32F2F] pl-4">{line.substring(3)}</h2>
                  }
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return <p key={index} className="font-bold text-[#D32F2F] mt-6 mb-2 uppercase tracking-wide">{line.substring(2, line.length - 2)}</p>
                  }
                  if (line.startsWith("- ")) {
                    return (
                      <div key={index} className="flex items-start gap-3 mb-2 ml-4">
                        <span className="w-1.5 h-1.5 bg-[#D32F2F] mt-2.5 flex-shrink-0" />
                        <span className="text-gray-300">{line.substring(2)}</span>
                      </div>
                    )
                  }
                  if (line.trim() === "") return <br key={index} />
                  return <p key={index} className="mb-4">{line}</p>
                })}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between py-6 border-y border-white/10">
              <div className="flex gap-4">
                <Button variant="outline" className="border-white/20 hover:bg-white hover:text-black rounded-none h-10 gap-2 font-mono text-xs uppercase">
                  <ThumbsUp size={14} /> Like
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white hover:text-black rounded-none h-10 gap-2 font-mono text-xs uppercase">
                  <Share2 size={14} /> Share Post
                </Button>
              </div>
            </div>

            {/* Comments Module */}
            <div className="space-y-8 pt-8">
              <div className="flex items-center gap-2 mb-8">
                <MessageSquare className="text-[#D32F2F]" />
                <h3 className="text-xl font-black uppercase">Discussion ({mockComments.length})</h3>
              </div>
              
              {/* Comment Input */}
              <div className="bg-white/5 border border-white/10 p-6">
                <Textarea 
                  placeholder="INITIATE RESPONSE..."
                  className="bg-black/50 border-white/10 focus:border-[#D32F2F] min-h-[100px] text-white placeholder:text-gray-600 font-mono text-sm mb-4 rounded-none resize-none"
                />
                <div className="flex justify-end">
                  <Button className="bg-[#D32F2F] hover:bg-white hover:text-[#D32F2F] text-white rounded-none uppercase font-bold text-xs tracking-widest px-8">
                    <Send size={14} className="mr-2" /> Post
                  </Button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {mockComments.map((comment) => (
                  <div key={comment.id} className="bg-transparent border-l-2 border-white/10 pl-6 py-2">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="relative w-10 h-10 border border-white/20 bg-black">
                        <Image src={comment.avatar} alt={comment.author} fill className="object-cover grayscale" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-bold text-[#D32F2F] uppercase text-sm">{comment.author}</span>
                          <span className="text-xs font-mono text-gray-500">{comment.date}</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">{comment.content}</p>
                        <button className="text-xs font-mono text-gray-500 hover:text-white uppercase tracking-wider flex items-center gap-1">
                           <ArrowLeft size={10} className="rotate-180" /> Reply
                        </button>

                        {/* Nested Replies */}
                        {comment.replies && comment.replies.length > 0 && (
                          <div className="mt-4 space-y-4">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="flex items-start gap-4 border-l border-white/10 pl-4">
                                <div className="relative w-8 h-8 border border-white/20 bg-black">
                                  <Image src={reply.avatar} alt={reply.author} fill className="object-cover grayscale" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-3 mb-1">
                                    <span className="font-bold text-white uppercase text-xs">{reply.author}</span>
                                    <span className="text-[10px] font-mono text-gray-500">{reply.date}</span>
                                  </div>
                                  <p className="text-gray-400 text-xs">{reply.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column (Span 4) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Author Protocol Card */}
            <div className="bg-white/5 border border-white/10 p-6">
              <h3 className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest mb-6">Author Protocol</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 border border-white/20 relative">
                   {/* Placeholder for Author Image if needed, using initials for now */}
                   <div className="absolute inset-0 bg-black flex items-center justify-center text-xl font-black text-gray-700">CC</div>
                </div>
                <div>
                  <p className="font-bold uppercase text-lg leading-none mb-1">{mockPost.author}</p>
                  <p className="text-xs font-mono text-gray-400">{mockPost.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Specializing in industry analysis and hardware benchmarks. Tracking the intersection of technology and culture.
              </p>
              <Button variant="outline" className="w-full border-white/20 hover:bg-white hover:text-black rounded-none uppercase text-xs font-bold">
                View Profile
              </Button>
            </div>

            {/* Related Data Card */}
            <div className="bg-white/5 border border-white/10 p-6">
              <h3 className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-widest mb-6">Related Data</h3>
              <div className="space-y-4">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block border-b border-white/5 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] font-mono text-gray-500 uppercase">{post.category} // {post.date}</span>
                    </div>
                    <h4 className="font-bold text-sm text-gray-300 group-hover:text-white transition-colors leading-snug">
                      {post.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sticky Ad / Promo Placeholder */}
            <div className="sticky top-24 bg-[#D32F2F] p-8 text-center text-white">
              <h3 className="text-2xl font-black uppercase mb-2">Join the Squad</h3>
              <p className="text-sm opacity-90 mb-6">Get exclusive gear drops and tournament invites.</p>
              <Button className="w-full bg-white text-[#D32F2F] hover:bg-black hover:text-white rounded-none uppercase font-bold text-sm tracking-widest transition-colors">
                Sign Up
              </Button>
            </div>

          </aside>

        </div>
      </div>
    </article>
  )
}