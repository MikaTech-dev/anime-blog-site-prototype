"use client"

import Link from "next/link"
import Image from "next/image"
import type { StaticImageData } from "next/image"
import { BlogFooter } from "@/components/blog-footer"
import { motion } from "framer-motion"
import {
  Gamepad2,
  Trophy,
  ArrowRight,
  Cpu,
  Sparkles,
  Newspaper,
  Calendar,
  Zap,
  Star,
  ShoppingBag,
  PlayCircle
} from "lucide-react"

// Assets
import gamingImage from "@/assets/gaming-consoles-futuristic-technology.png"
import animeImage from "@/assets/anime-characters-colorful-scene.png"
import cyberpunkImage from "@/assets/cyberpunk-futuristic-city-neon-lights.png"
import ladyGaming from "@/assets/lady-gaming.jpg"
import guy1gaming from "@/assets/gamr.jpeg"
import guy2gaming from "@/assets/publicContain.jpg"
import africaesports from "@/assets/public.png"

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  } as const
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const revealText = {
  hidden: { y: "100%" },
  visible: { 
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } // Custom bezier for snappy feel
  } as const
}

// --- Data ---
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
    title: "Next-Gen Hardware Reviews",
    excerpt: "The RTX 50-series rumors and what they mean for your rig. Deep dive into specs.",
    image: gamingImage,
    category: "Tech Review",
    date: "Dec 15, 2024",
    readTime: "5 min",
    slug: "latest-gaming-hardware-reviews",
  },
  {
    id: "2",
    title: "Anime Merch Drops: Winter 2024",
    excerpt: "Limited edition figures and streetwear collaborations you can't miss this season.",
    image: animeImage,
    category: "Anime",
    date: "Dec 12, 2024",
    readTime: "4 min",
    slug: "top-anime-merchandise-season",
  },
  {
    id: "3",
    title: "Building the Ultimate Stream Deck",
    excerpt: "Essential tools, lighting, and audio gear to take your content creation pro.",
    image: cyberpunkImage,
    category: "Guides",
    date: "Dec 10, 2024",
    readTime: "7 min",
    slug: "gaming-setup-guide-2024",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans selection:bg-[#D32F2F] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5 }}
            className="relative w-full h-full"
          >
            <Image
              src={ladyGaming}
              alt="Hero Background"
              fill
              className="object-cover grayscale"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-black opacity-80" />
        </div>

        <div className="container relative z-10 px-4 pt-20 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            className="overflow-hidden mb-6 flex justify-center"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 border border-[#D32F2F] text-[#D32F2F] text-sm font-bold tracking-widest uppercase rounded-full bg-black/50 backdrop-blur-md"
            >
              Welcome to the Hub
            </motion.span>
          </motion.div>
          
          <div className="relative overflow-hidden mb-2">
            <motion.h1 
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.15 }}
              className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mix-blend-difference"
            >
              <div className="overflow-hidden">
                <motion.span variants={revealText} className="block">LEVEL UP</motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={revealText} className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">YOUR REALITY</motion.span>
              </div>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            The premier destination for high-end tech, competitive gaming, and anime culture in Nigeria.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="http://casegames.africa/" className="group relative px-8 py-4 bg-[#D32F2F] text-white font-bold text-lg overflow-hidden skew-x-[-10deg] hover:bg-white hover:text-[#D32F2F] transition-colors duration-300">
               <span className="block skew-x-[10deg]">JOIN THE TOURNAMENT</span>
            </Link>
            <Link href="http://caseproperties.africa/" className="group flex items-center gap-2 text-white hover:text-[#D32F2F] transition-colors text-lg font-medium">
              <ShoppingBag className="w-5 h-5" /> Shop Premium Gear
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- INFINITE MARQUEE --- */}
      <div className="bg-[#D32F2F] py-4 overflow-hidden whitespace-nowrap relative z-20 -rotate-1 shadow-xl">
        <motion.div 
          className="inline-flex items-center gap-12 text-white font-black text-2xl uppercase tracking-wider"
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
               <span>• Gaming Tournaments</span>
               <span>• Tech for sale</span>
               <span>• Anime Merch</span>
               <span>• Community Hub</span>
               <span>• Gaming Tournaments</span>
               <span>• Consoles</span>
               <span>• Gaming Laptops</span>
               <span>• Tech news and reviews</span>
               <span>• Nigerian Esports</span>
               <span>• Xbox</span>
               <span>• Playstation</span>
               #<span>• Nintendo</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- FEATURES GRID (The "Why") --- */}
      <section className="py-24 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-gray-100 pb-8">
            <div className="max-w-xl">
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4"
              >
                BUILT FOR <span className="text-[#D32F2F]">ENTHUSIASTS</span>
              </motion.h2>
              <p className="text-lg text-slate-600">More than a store. We are an ecosystem designed for those who yearn for more tech inclusivity in Nigeria.</p>
            </div>
            <div className="hidden md:block pb-2">
               <ArrowRight className="w-12 h-12 text-[#D32F2F] -rotate-45" />
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="group bg-gray-50 border border-gray-200 p-8 hover:bg-black hover:text-white transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy size={100} />
              </div>
              <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center mb-6 group-hover:bg-[#D32F2F] group-hover:border-none transition-colors">
                <Gamepad2 className="w-6 h-6 text-black group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 uppercase">Pro Tournaments</h3>
              <p className="text-slate-600 group-hover:text-gray-300 mb-6">Regular cash-prize tournaments for FC25...67, COD, and Tekken. Come and show workings!!</p>
              <Link href="http://casegames.africa/" className="flex items-center gap-2 text-[#D32F2F] group-hover:text-white font-bold text-sm uppercase tracking-wider">
                Register Now <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="group bg-gray-50 border border-gray-200 p-8 hover:bg-black hover:text-white transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu size={100} />
              </div>
              <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center mb-6 group-hover:bg-[#D32F2F] group-hover:border-none transition-colors">
                <Sparkles className="w-6 h-6 text-black group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 uppercase">Elite Marketplace</h3>
              <p className="text-slate-600 group-hover:text-gray-300 mb-6">From high-end monitors to the consoles and anime merch, we've got it all.</p>
              <Link href="http://casegames.africa/" className="flex items-center gap-2 text-[#D32F2F] group-hover:text-white font-bold text-sm uppercase tracking-wider">
                Shop Gear <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="group bg-gray-50 border border-gray-200 p-8 hover:bg-black hover:text-white transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Newspaper size={100} />
              </div>
              <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center mb-6 group-hover:bg-[#D32F2F] group-hover:border-none transition-colors">
                <Zap className="w-6 h-6 text-black group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 uppercase">Case Community</h3>
              <p className="text-slate-600 group-hover:text-gray-300 mb-6">Join the blog for hot takes, reviews, and community event spotlights.</p>
              <Link href="/blog" className="flex items-center gap-2 text-[#D32F2F] group-hover:text-white font-bold text-sm uppercase tracking-wider">
                Read Blog <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- COMMUNITY SHOWCASE --- */}
      <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative z-10"
            >
              <div className="flex items-center gap-2 mb-6 text-[#D32F2F]">
                <Star className="fill-current" size={20} />
                <span className="font-bold tracking-widest uppercase">The Ecosystem</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8">
                NOT JUST A <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-orange-600">STORE.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We are building the backbone of Nigeria's gaming culture. Whether you are a competitive shooter, an RPG grinder, or an anime connoisseur, Case Properties is your home base.
              </p>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                   <div className="p-2 bg-white/10 rounded-lg"><Calendar className="text-[#D32F2F]" size={24} /></div>
                   <div>
                      <h4 className="font-bold text-xl">Weekly Events</h4>
                      <p className="text-gray-400 text-sm">LAN parties and online gams</p>
                   </div>
                </li>
                <li className="flex items-start gap-4">
                   <div className="p-2 bg-white/10 rounded-lg"><PlayCircle className="text-[#D32F2F]" size={24} /></div>
                   <div>
                      <h4 className="font-bold text-xl">Content Studio</h4>
                      <p className="text-gray-400 text-sm">Space for creators to collaborate.</p>
                   </div>
                </li>
              </ul>

              <ButtonLink href="http://casegames.africa/" variant="primary">
                Join The Community
              </ButtonLink>
            </motion.div>

            {/* Right Masonry Gallery */}
            <div className="lg:col-span-7 relative">
              {/* Decorative Blur */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D32F2F] opacity-20 blur-[100px] rounded-full pointer-events-none" />
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4 translate-y-12">
                   <motion.div variants={fadeInUp} className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/10">
                     <Image src={guy1gaming} alt="Gaming" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                   </motion.div>
                   <motion.div variants={fadeInUp} className="relative h-48 w-full rounded-2xl overflow-hidden border border-white/10">
                     <Image src={africaesports} alt="Event" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                   </motion.div>
                </div>
                <div className="space-y-4">
                   <motion.div variants={fadeInUp} className="relative h-48 w-full rounded-2xl overflow-hidden border border-white/10">
                     <Image src={guy2gaming} alt="Tournament" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                   </motion.div>
                   <motion.div variants={fadeInUp} className="relative h-80 w-full rounded-2xl overflow-hidden border border-white/10">
                     <Image src={ladyGaming} alt="Vibe" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                   </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BLOG SECTION --- */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
             <h2 className="text-3xl md:text-5xl font-black text-slate-900">
               News and <span className="text-[#D32F2F] underline decoration-4 underline-offset-4">Reviews</span>
             </h2>
             <Link href="/blog" className="hidden md:flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-[#D32F2F] transition-colors">
               View All blog posts<ArrowRight size={16} />
             </Link>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredPosts.map((post) => (
              <motion.article 
                key={post.id} 
                variants={fadeInUp}
                className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </div>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 font-medium uppercase tracking-wide">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-[#D32F2F] rounded-full" />
                    <span>{post.readTime} Read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-[#D32F2F] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:gap-3 gap-2 transition-all">
                    Read Article <ArrowRight size={14} className="text-[#D32F2F]" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-12 text-center md:hidden">
             <ButtonLink href="/blog" variant="outline">View All Posts</ButtonLink>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="relative py-32 bg-[#D32F2F] text-white text-center overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[200%] bg-black rotate-12 transform-gpu" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container relative z-10 px-4"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">
            READY TO PLAY?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-medium">
            Join the fastest growing gaming community in Nigeria. Shop the gear, play the games, live the culture.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
             <Link href="http://casegames.africa/" className="bg-white text-[#D32F2F] px-10 py-5 font-bold text-xl rounded shadow-2xl hover:bg-black hover:text-white transition-all duration-300">
               Start Here
             </Link>
          </motion.div>
        </motion.div>
      </section>

      <BlogFooter />
    </div>
  )
}

// Simple Helper for Buttons
function ButtonLink({ href, variant, children }: { href: string, variant: "primary" | "outline", children: React.ReactNode }) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300"
  const variants = {
    primary: "bg-[#D32F2F] text-white hover:bg-white hover:text-[#D32F2F]",
    outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
  }
  
  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </Link>
  )
}