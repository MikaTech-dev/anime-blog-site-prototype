"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/CASE_PROPERTIES_LOGO_HD.png"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`w-full sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="Case Blogs" width={48} height={48} className="object-contain" />
          <span className="font-heading font-bold text-xl text-foreground">Case Blogs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            Home
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            About Us
          </Link>
          {/* <Link href="/store" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            Store
          </Link> */}
          {/* <Link href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            Events
          </Link> */}
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            Blog
          </Link>
          <Button asChild className="bg-primary hover:bg-[#B71C1C] text-white font-body px-6 py-2 rounded-lg">
            <Link href="https://www.instagram.com/case_properties">Join our community</Link>
          </Button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md text-foreground focus:outline-none"
          >
            {open ? (
              < X className="w-8 h-8 text-black"/>
            ) : (
              < Menu className="w-8 h-8 text-black" />
            )}
          </button>

          {/* Mobile Menu */}
          {open && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t">
              <div className="flex flex-col p-4 space-y-4">
                <Link 
                  href="/about" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body py-2"
                  onClick={() => setOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/store" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body py-2"
                  onClick={() => setOpen(false)}
                >
                  Store
                </Link>
                <Link 
                  href="/events" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body py-2"
                  onClick={() => setOpen(false)}
                >
                  Events
                </Link>
                <Link 
                  href="/blog" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body py-2"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
                <Button 
                  asChild 
                  className="bg-primary hover:bg-[#B71C1C] text-white font-body px-6 py-2 rounded-lg mt-2"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/join">Join our community</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
