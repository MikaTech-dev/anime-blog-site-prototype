"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
  Cpu,
  Palette,
  Twitter, // Lucide doesn't have the X logo, using a custom SVG below or this if acceptable
  Mail
} from "lucide-react"
import logo from "@/assets/CASE_PROPERTIES_LOGO_HD.png"

export function BlogFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 px-4 border-t border-white/10 relative overflow-hidden font-sans">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14">
                <Image src={logo} alt="Case Blogs" fill className="object-contain" />
              </div>
              <span className="text-xl font-black uppercase tracking-tight">Case Blogs</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The Number #1 ecosystem for gaming, technology, and anime culture in Nigeria. 
              Authentic gear. Epic tournaments. Unfiltered reviews.
            </p>
            
            {/* Social Matrix */}
            <div className="flex gap-3 pt-2">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<TwitterXIcon />} />
              <SocialLink href="https://www.instagram.com/case_properties" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Youtube size={18} />} />
            </div>
          </div>

          {/* Navigation Links (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-mono font-bold text-[#D32F2F] uppercase tracking-widest">System</h4>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/blog" label="News and Reviews" />
              {/* <FooterLink href="/contact" label="Contact" /> */}
            </ul>
          </div>

          {/* Newsletter (Span 3) */}
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-sm font-mono font-bold text-[#D32F2F] uppercase tracking-widest">Contact Us</h4>
            <p className="text-xs text-gray-500 mb-4">
              Subscribe for discounts, tournament alerts, and exclusive tech deals.
            </p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <Input 
                  type="email"
                  placeholder="ENTER EMAIL ADDRESS" 
                  className="bg-white/5 border-white/10 pl-10 text-white placeholder:text-gray-600 focus:border-[#D32F2F] rounded-none h-12 text-xs font-mono" 
                />
              </div>
              <Button className="bg-[#D32F2F] hover:bg-white hover:text-[#D32F2F] text-white font-bold uppercase tracking-wider rounded-none h-12 transition-all">
                Initialize
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono uppercase">
          <p>© {currentYear} Case Blogs</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#D32F2F] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#D32F2F] transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-[#D32F2F] transition-colors">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// --- Helper Components for Standardization ---

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all duration-300"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, label }: { href: string, label: string }) {
  return (
    <li>
      <Link href={href} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
        <ChevronRight className="w-3 h-3 text-[#D32F2F] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        <span className="group-hover:translate-x-1 transition-transform duration-300">{label}</span>
      </Link>
    </li>
  )
}

function TwitterXIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}