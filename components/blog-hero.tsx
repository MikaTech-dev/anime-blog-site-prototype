"use client"

import Link from "next/link"
import Image from "next/image"
import blogBg from "@/assets/Infinite_Tsukuyomi_Activated_Red_Moon.webp"
import { motion } from "framer-motion"
import { ArrowRight, Hash } from "lucide-react"

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
} as const

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

export function BlogHero() {
  return (
    <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-[#050505]">
      
      {/* Background Image with Parallax-like scaling */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={blogBg}
          alt="Featured Article Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent" />
        
        {/* Tech Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </motion.div>

      {/* Hero Content - Aligned Bottom Left for Editorial Feel */}
      <div className="relative z-10 w-full container mx-auto px-4 pb-20">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Tagline */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-8 h-8 bg-[#D32F2F] text-white">
              <Hash size={16} />
            </div>
            <span className="text-[#D32F2F] font-mono text-sm uppercase tracking-widest font-bold">
              News & Reviews
            </span>
            <span className="h-[1px] w-12 bg-white/20"></span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
            HARDWARE & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              HEADLINES
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 font-medium max-w-2xl mb-10 leading-relaxed">
            Deep dives into the latest hardware drops, anime releases, and competitive gaming updates.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
            <Link 
              href="#latest"
              className="group relative px-8 py-4 bg-[#D32F2F] text-white font-bold text-lg uppercase tracking-wider overflow-hidden skew-x-[-10deg] hover:bg-white hover:text-[#D32F2F] transition-all duration-300 inline-block text-center w-full sm:w-auto"
            >
              <span className="block skew-x-[10deg]">Read Latest</span>
            </Link>

            <Link 
              href="/events"
              className="group relative px-8 py-4 border border-white/30 text-white font-bold text-lg uppercase tracking-wider hover:border-white hover:bg-white hover:text-black transition-all duration-300 skew-x-[-10deg] inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <div className="skew-x-[10deg] flex items-center gap-2">
                <span>Browse Events</span>
                <ArrowRight size={18} />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}