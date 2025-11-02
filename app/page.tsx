import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { StaticImageData } from "next/image"
import { BlogFooter } from "@/components/blog-footer"
import { 
  CheckCircle, Gamepad2, Laptop, Star, Users, Trophy, ArrowRight, 
  Cpu, Sparkles, Newspaper, Heart, Calendar, Zap, Gift, Handshake, 
  Clock 
} from "lucide-react"
import gamingImage from "@/assets/gaming-consoles-futuristic-technology.png"
import animeImage from "@/assets/anime-characters-colorful-scene.png"
import cyberpunkImage from "@/assets/cyberpunk-futuristic-city-neon-lights.png"
import ladyGaming from "@/assets/lady-gaming.jpg"
import eldenRingImage from "@/assets/elden-ring-fantasy-landscape-dark-souls.png"
import demonSlayerImage from "@/assets/demon-slayer-animation-fire-effects.png"
import blogImage from "@/assets/blog-1660679033240.jpg"

interface FeaturedPost {
  id: string
  title: string
  excerpt: string
  image: string | StaticImageData
  category: string
  date: string
  readTime: string
  slug: string
}

const featuredPosts: FeaturedPost[] = [
  {
    id: "1",
    title: "Latest Gaming Hardware Reviews",
    excerpt: "Discover the newest graphics cards, processors, and gaming peripherals that will elevate your setup.",
    image: gamingImage,
    category: "Tech Review",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    slug: "latest-gaming-hardware-reviews",
  },
  {
    id: "2",
    title: "Top Anime Merchandise This Season",
    excerpt: "From collectible figures to limited edition apparel, explore the hottest anime merchandise available now.",
    image: animeImage,
    category: "Anime Culture",
    date: "Dec 12, 2024",
    readTime: "4 min read",
    slug: "top-anime-merchandise-season",
  },
  {
    id: "3",
    title: "Gaming Setup Guide 2024",
    excerpt: "Build the ultimate gaming battlestation with our comprehensive guide to the best components and accessories.",
    image: cyberpunkImage,
    category: "Gaming",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    slug: "gaming-setup-guide-2024",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Section 2: Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#121212]">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={ladyGaming}
            alt="Gaming competition background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-20">
            {/* Left Side Content */}
            <div className="space-y-8 text-white">
              <div className="inline-block">
                <span className="px-4 py-2 bg-[#D32F2F] text-white text-sm font-semibold rounded-full font-heading">
                  Your Gaming & Tech Community Hub
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                Level Up Your{" "}
                <span className="text-[#D32F2F]">Gaming Experience</span> with Premium Tech & Epic Events
              </h1>
              
              <p className="text-xl text-gray-300 font-body max-w-xl">
                Join a vibrant community where gaming gear, anime collectibles, tournaments, and meetups come together. 
                Discover premium tech and connect with fellow enthusiasts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-body px-8 py-6 rounded-lg text-lg"
                >
                  <Link href="/events">Claim Your Spot</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-body px-8 py-6 rounded-lg text-lg"
                >
                  <Link href="/store">Browse Premium Gear</Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-2 text-gray-300 font-body">
                <CheckCircle className="w-5 h-5 text-[#D32F2F]" />
                <span>Free entry • No fees • All gamers welcome</span>
              </div>
            </div>

            {/* Right Side: Feature Cards (Desktop Only) */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="glass-effect bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-[#D32F2F]/20 rounded-full flex items-center justify-center mb-4">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-heading font-semibold mb-2">Epic Tournaments</h3>
                <p className="text-gray-300 text-sm font-body">Compete with the best</p>
              </div>
              
              <div className="glass-effect bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 transition-transform mt-8">
                <div className="w-12 h-12 bg-[#1976D2]/20 rounded-full flex items-center justify-center mb-4">
                  <Laptop className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-heading font-semibold mb-2">Latest Tech</h3>
                <p className="text-gray-300 text-sm font-body">Cutting-edge equipment</p>
              </div>
              
              <div className="glass-effect bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-[#FFC107]/20 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-heading font-semibold mb-2">Anime Culture</h3>
                <p className="text-gray-300 text-sm font-body">Exclusive collectibles</p>
              </div>
              
              <div className="glass-effect bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 transition-transform mt-8">
                <div className="w-12 h-12 bg-[#FF7043]/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-heading font-semibold mb-2">Vibrant Community</h3>
                <p className="text-gray-300 text-sm font-body">Connect with gamers</p>
              </div>
            </div>
          </div>
        </div>

        {/* White Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Section 3: Features Grid - "Why Case Blogs" */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground">
              Why Case Blogs is Your Ultimate Gaming Destination
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              More than a store, we're your gaming community hub where passion meets premium tech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-pink-50 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#D32F2F]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D32F2F] to-[#FF7043] rounded-full flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Regular Tournaments</h3>
              <p className="text-muted-foreground font-body mb-4">
                Compete in weekly gaming tournaments with amazing prizes and recognition
              </p>
              <Link href="/events" className="text-[#D32F2F] font-body hover:gap-2 flex items-center gap-1 group">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-pink-50 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#D32F2F]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1976D2] to-[#FF7043] rounded-full flex items-center justify-center mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Premium Tech</h3>
              <p className="text-muted-foreground font-body mb-4">
                Latest gaming hardware, peripherals, and tech innovations at competitive prices
              </p>
              <Link href="/store" className="text-[#D32F2F] font-body hover:gap-2 flex items-center gap-1 group">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-pink-50 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#D32F2F]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFC107] to-[#FF7043] rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Anime & Collectibles</h3>
              <p className="text-muted-foreground font-body mb-4">
                Exclusive anime merchandise, figures, and collectibles from popular series
              </p>
              <Link href="/store" className="text-[#D32F2F] font-body hover:gap-2 flex items-center gap-1 group">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-pink-50 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#D32F2F]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8D6E63] to-[#FF7043] rounded-full flex items-center justify-center mb-4">
                <Newspaper className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">In-Depth Blog</h3>
              <p className="text-muted-foreground font-body mb-4">
                Expert reviews, guides, and insights on gaming, tech, and anime culture
              </p>
              <Link href="/blog" className="text-[#D32F2F] font-body hover:gap-2 flex items-center gap-1 group">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-pink-50 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#D32F2F]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D32F2F] to-[#1976D2] rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Passionate Community</h3>
              <p className="text-muted-foreground font-body mb-4">
                Join thousands of passionate gamers and tech enthusiasts in our vibrant community
              </p>
              <Link href="/about" className="text-[#D32F2F] font-body hover:gap-2 flex items-center gap-1 group">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-pink-50 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#D32F2F]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF7043] to-[#FFC107] rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Easy Sign-Ups</h3>
              <p className="text-muted-foreground font-body mb-4">
                Simple registration process for events and tournaments, get started in minutes
              </p>
              <Link href="/events" className="text-[#D32F2F] font-body hover:gap-2 flex items-center gap-1 group">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Community Showcase */}
      <section className="py-20 px-4 bg-[#121212] relative overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Photo Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden hover:scale-105 transition-transform shadow-lg">
                <Image src={ladyGaming} alt="Community gaming" fill className="object-cover" />
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden hover:scale-105 transition-transform shadow-lg mt-8">
                <Image src={gamingImage} alt="Esports tournament" fill className="object-cover" />
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden hover:scale-105 transition-transform shadow-lg">
                <Image src={animeImage} alt="Anime community" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden hover:scale-105 transition-transform shadow-lg mt-8">
                <Image src={cyberpunkImage} alt="Gaming event" fill className="object-cover" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8 text-white">
              <div className="inline-block">
                <span className="px-4 py-2 bg-[#D32F2F] text-white text-sm font-semibold rounded-full font-heading">
                  Join the Movement
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
                Where Gaming <span className="text-[#D32F2F]">Passion</span> Meets Community Spirit
              </h2>
              
              <p className="text-xl text-gray-300 font-body">
                We're building more than a store we're creating an ecosystem where gamers, tech enthusiasts, 
                and anime fans come together to share experiences, learn, compete, and grow.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D32F2F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Real-Time Updates</h3>
                    <p className="text-gray-300 font-body">Get instant notifications about tournaments, new products, and community events</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF7043] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Exclusive Perks</h3>
                    <p className="text-gray-300 font-body">Access member-only discounts, early product releases, and special events</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1976D2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">All gamers Welcome</h3>
                    <p className="text-gray-300 font-body">Whether you're a pro or just starting, find your place in our inclusive community</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-body px-8 py-6 rounded-lg text-lg"
                >
                  <Link href="/events">Register for Next Event</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-body px-8 py-6 rounded-lg text-lg"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Blog Posts Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#D32F2F] text-white text-sm font-semibold rounded-full font-heading">
                Latest From The Blog
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground">
              Stay Updated with <span className="text-[#D32F2F]">Tech, Gaming & Anime</span> Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#D32F2F] text-white text-xs font-semibold rounded-full font-heading">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground font-body mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 hover:text-[#D32F2F] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground font-body mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-[#D32F2F] font-body hover:gap-2 flex items-center gap-1 group"
                  >
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-body px-8 py-6 rounded-lg text-lg"
            >
              <Link href="/blog">Explore All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA Banner */}
      <section className="py-20 px-4 bg-[#D32F2F] relative overflow-hidden">
        {/* Decorative Blur Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10 space-y-8">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
            <Gamepad2 className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white">
            Ready to Join the Ultimate Gaming Community?
          </h2>
          
          <p className="text-xl text-white/90 font-body max-w-2xl mx-auto">
            Experience epic tournaments, exclusive tech deals, and connect with thousands of passionate gamers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              className="bg-white text-[#D32F2F] hover:bg-gray-100 font-body px-8 py-6 rounded-lg text-lg font-semibold"
            >
              <Link href="/events">Sign Up for Next Event</Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-body px-8 py-6 rounded-lg text-lg"
            >
              <Link href="/store">Browse Our Store</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="font-body text-sm">Free Access</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="font-body text-sm">All gamers</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="font-body text-sm">Regular Events</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="font-body text-sm">Expert Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Footer */}
      <BlogFooter />
    </div>
  )
}
