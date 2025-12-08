"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { 
  Heart, Users, Award, Zap, Target, Rocket, 
  ArrowRight, Terminal, Shield, Crosshair 
} from "lucide-react"
import { BlogFooter } from "@/components/blog-footer"

// Assets
import skyline from "@/assets/futuristic-skylines.webp"
import gamingImage from "@/assets/gaming-consoles-futuristic-technology.png"

// --- Components ---

// 1. Animated Counter Component
function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 })
  const rounded = useTransform(springValue, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })
  }, [rounded])

  return (
    <div ref={ref} className="text-center group">
      <div className="text-5xl md:text-6xl font-black text-white mb-2 font-mono group-hover:text-[#D32F2F] transition-colors">
        {displayValue}+
      </div>
      <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">
        {label}
      </div>
    </div>
  )
}

// 2. Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
      delayChildren: 0.2
    }
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D32F2F] selection:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        {/* Parallax BG */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={skyline}
            alt="City Skyline"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </motion.div>

        <div className="container relative z-10 px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#D32F2F]" />
              <span className="text-[#D32F2F] font-mono text-sm uppercase tracking-widest">Est. 2020</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8">
              DEFINING THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">NEW STANDARD.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-2xl leading-relaxed border-l-2 border-white/10 pl-6">
              We aren't just a store. We are building the infrastructure for Nigeria's gaming and tech community. A place where passion meets premium quality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="py-12 border-y border-white/10 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter value={500} label="Community Members" />
            <Counter value={50} label="Events Hosted" />
            <Counter value={1000} label="Products Sold" />
            <Counter value={5} label="Years Active" />
          </div>
        </div>
      </section>

      {/* --- ORIGIN STORY --- */}
      <section className="py-24 px-4 bg-white text-black relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 skew-x-12 translate-x-32 z-0" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
                Our <span className="text-[#D32F2F]">Story</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  <span className="font-bold text-black">It started in 2020.</span> What began as a small group of friends organizing local LAN parties quickly realized something: there was a massive gap between the gaming culture we loved and the access to quality hardware in Nigeria.
                </p>
                <p>
                  We believe technology should amplify your potential. Whether you are building a streaming rig, hunting for authentic anime figures, or competing for a prize pool, we provide the platform to make it happen.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-1 w-12 bg-[#D32F2F]"></div>
                  <span className="font-bold text-sm uppercase">Bridging the gap</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] w-full"
            >
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 rounded-none" />
              <div className="absolute inset-0 bg-gray-200 border-2 border-black overflow-hidden">
                 <Image src={gamingImage} alt="Setup" fill className="object-cover" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#D32F2F] text-white p-6 shadow-xl max-w-xs">
                <p className="font-black text-2xl uppercase leading-none mb-2">Authentic Gear</p>
                <p className="text-xs font-mono opacity-90">No fakes. No shortcuts.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 px-4 bg-[#0a0a0a] relative">
        <div className="container mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">Core <span className="text-[#D32F2F]">Values</span></h2>
            <p className="text-gray-400">The principles that guide every decision we make.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Heart, title: "Passion", desc: "We don't just sell tech; we use it. We are gamers and fans first." },
              { icon: Shield, title: "Integrity", desc: "We guarantee authenticity. High-performance gear you can trust." },
              { icon: Users, title: "Community", desc: "We build spaces for people to connect, compete, and collaborate." },
              { icon: Zap, title: "Innovation", desc: "Staying ahead of the curve. If it's new, we're already testing it." },
              { icon: Target, title: "Excellence", desc: "From our tournaments to our customer service, we aim for the best." },
              { icon: Rocket, title: "Growth", desc: "Constantly evolving to better serve the Nigerian tech ecosystem." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group p-8 border border-white/10 hover:border-[#D32F2F] bg-white/5 backdrop-blur-sm transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D32F2F] transition-colors text-white">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-mono mb-3 uppercase">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- MISSION / VISION SPLIT --- */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#D32F2F] p-16 lg:p-24 flex flex-col justify-center text-white relative overflow-hidden group">
          <Crosshair className="absolute top-12 right-12 opacity-20 w-32 h-32 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Our Mission</h2>
          <p className="text-lg font-medium opacity-90 max-w-md">
            To create the ultimate destination where gamers and enthusiasts can find premium products, participate in events, and build lasting connections.
          </p>
        </div>
        <div className="bg-[#1a1a1a] p-16 lg:p-24 flex flex-col justify-center text-white relative overflow-hidden group">
          <Rocket className="absolute top-12 right-12 opacity-10 w-32 h-32 -rotate-12 group-hover:-rotate-45 transition-transform duration-700" />
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Our Vision</h2>
          <p className="text-lg font-medium text-gray-400 max-w-md">
            To become the leading platform that bridges gaming, technology, and anime culture in Africa, fostering a thriving community of creators.
          </p>
        </div>
      </section>

      {/* --- THE TEAM --- */}
      <section className="py-24 px-4 bg-white text-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase">Our <span className="text-[#D32F2F]">Team</span></h2>
            <p className="text-slate-600 mt-2">The people working behind the scenes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Chibuike Charles", role: "Founder / CEO", int: "CC", spec: "Hardware Specialist" },
              { name: "Sarah James", role: "Head of Esports", int: "SJ", spec: "Tournament Organizer" },
              { name: "Carl Johnson", role: "Lead Curator", int: "CJ", spec: "Anime Merchandise" },
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                {/* Card Top */}
                <div className="h-64 bg-gray-100 flex items-center justify-center border-2 border-black group-hover:border-[#D32F2F] transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200 to-transparent opacity-50" />
                  <span className="text-8xl font-black text-gray-300 select-none group-hover:text-[#D32F2F]/20 transition-colors">{member.int}</span>
                  
                  {/* Overlay Effect on Hover */}
                  <div className="absolute inset-0 bg-[#D32F2F] mix-blend-color opacity-0 group-hover:opacity-10 transition-opacity" />
                </div>
                
                {/* Card Info */}
                <div className="pt-6 text-center">
                  <h3 className="text-xl font-bold uppercase">{member.name}</h3>
                  <div className="text-[#D32F2F] font-bold text-sm uppercase tracking-wider mb-2">{member.role}</div>
                  <div className="text-xs font-bold text-gray-500 bg-gray-100 inline-block px-3 py-1 rounded-full">
                    {member.spec}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-32 px-4 bg-black relative overflow-hidden">
         {/* Grid Background */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
         
         <div className="container relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-orange-600">JOIN US?</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
              Become part of the community. Whether you're shopping for a new GPU or signing up for the next event, your journey starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/events" className="px-10 py-5 bg-[#D32F2F] text-white font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-[#D32F2F] transition-all duration-300 skew-x-[-10deg]">
                <div className="skew-x-[10deg]">Upcoming Events</div>
              </Link>
              <Link href="/blog" className="px-10 py-5 border-2 border-white text-white font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 skew-x-[-10deg]">
                <div className="skew-x-[10deg] flex items-center gap-2">
                  Read The Blog <ArrowRight size={18} />
                </div>
              </Link>
            </div>
         </div>
      </section>
      <BlogFooter />
    </div>
  )
}