"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { BlogFooter } from "@/components/blog-footer"
import { Home, Search, ArrowLeft, AlertTriangle, Terminal } from "lucide-react"
import { motion } from "framer-motion"

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const

const glitchVariants = {
  hidden: { x: 0 },
  visible: {
    x: [0, -2, 2, -2, 0],
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: 0.2,
      repeatDelay: 3,
    },
  },
}

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-full bg-[#050505] text-white flex flex-col font-sans selection:bg-[#D32F2F] selection:text-white relative overflow-hidden">
      
      {/* Background Grid Pattern (CSS) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D32F2F] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex-1 flex items-center justify-center relative z-10 p-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl w-full text-center"
        >
          
          {/* Glitchy 404 */}
          <div className="relative mb-8 select-none">
            <motion.h1 
              variants={glitchVariants}
              className="text-[150px] md:text-[220px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 opacity-20 absolute inset-0 flex items-center justify-center"
            >
              404
            </motion.h1>
            <h1 className="text-[80px] md:text-[120px] font-black leading-none tracking-tighter text-white relative z-10 mix-blend-overlay">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[#D32F2F] font-mono text-sm tracking-[1em] uppercase opacity-60">
              Critical_Error
            </div>
          </div>

          {/* Main Text */}
          <motion.div variants={itemVariants} className="space-y-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
              Webpage was <span className="text-[#D32F2F]">not found </span> on the server
            </h2>
            <p className="text-xl text-gray-400 max-w-lg mx-auto font-light">
              Looks like this page, much like the <span className="text-white font-medium">One Piece</span>, cannot be found.
            </p>
          </motion.div>

          {/* Diagnostic Box */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm text-left max-w-xl mx-auto mb-10"
          >
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
              <Terminal className="w-5 h-5 text-[#D32F2F]" />
              <span className="font-mono text-sm text-gray-400 uppercase">What_You_Can_Do.exe</span>
            </div>
            
            <ul className="space-y-3 font-mono text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full" />
                <span>Check the URL for typos</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                <span>Return to previous page</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                <span>Go to Homepage</span>
              </li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary Button */}
            <Link 
              href="/" 
              className="group relative px-8 py-4 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-widest overflow-hidden skew-x-[-10deg] hover:bg-white hover:text-[#D32F2F] transition-colors duration-300 min-w-[180px] flex justify-center"
            >
              <div className="flex items-center gap-2 skew-x-[10deg]">
                <Home className="w-4 h-4" />
                <span>Return Home</span>
              </div>
            </Link>

            {/* Secondary Button */}
            <Link 
              href="/blog" 
              className="group relative px-8 py-4 bg-transparent border border-white/30 text-white font-bold text-sm uppercase tracking-widest hover:border-[#D32F2F] hover:text-[#D32F2F] transition-colors duration-300 min-w-[180px] flex justify-center"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span>Read Blog</span>
              </div>
            </Link>

            {/* Back Button */}
            <button 
              onClick={() => router.back()}
              className="group relative px-8 py-4 bg-transparent text-gray-500 font-bold text-sm uppercase tracking-widest hover:text-white transition-colors duration-300 flex justify-center"
            >
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </div>
            </button>
          </motion.div>

        </motion.div>
      </div>
      <BlogFooter />
    </div>
  )
}