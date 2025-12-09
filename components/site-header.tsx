"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/CASE_PROPERTIES_LOGO_HD.png"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled || open
            ? "bg-[#050505]/90 backdrop-blur-md border-white/10 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 relative z-50">
            <div className="relative w-14 h-14">
              <Image src={logo} alt="Case Blogs" fill className="object-contain" />
            </div>
            <span className="font-black text-xl text-white tracking-tight uppercase">
              Case Games
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "The Case Feed", href: "/blog" },
              // { label: "Events", href: "/events" },
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-bold text-gray-300 hover:text-white uppercase tracking-widest transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D32F2F] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            <Link 
              href="https://www.instagram.com/case_properties"
              target="_blank"
              className="group relative px-6 py-2 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider overflow-hidden skew-x-[-10deg] hover:bg-white hover:text-[#D32F2F] transition-all duration-300"
            >
              <div className="skew-x-[10deg] flex items-center gap-2">
                <span>Join Community</span>
              </div>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-50 p-2 text-white hover:text-[#D32F2F] transition-colors"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#050505] md:hidden flex flex-col pt-32 px-6"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            <nav className="flex flex-col gap-6 relative z-10">
              {[
                { label: "Home Base", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "The Feed", href: "/blog" },
                { label: "Store", href: "/store" },
                { label: "Events", href: "/events" },
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between text-3xl font-black text-white uppercase border-b border-white/10 pb-4"
                  >
                    <span className="group-hover:text-[#D32F2F] transition-colors">{link.label}</span>
                    <ChevronRight className="text-[#D32F2F] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Button 
                  asChild 
                  className="w-full bg-[#D32F2F] hover:bg-white hover:text-[#D32F2F] text-white font-bold h-14 text-lg uppercase tracking-widest rounded-none"
                  onClick={() => setOpen(false)}
                >
                  <Link href="https://www.instagram.com/case_properties">Join Community</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}