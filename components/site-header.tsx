"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/CASE_PROPERTIES_LOGO_HD.png"
import { useTheme } from "next-themes"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="w-full sticky top-0 border-b border-primary/10 bg-background/60 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center relative">
        {/* Left: logo */}
        <div className="flex items-center flex-1">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="Case Properties" width={48} height={48} className="object-contain" />
            <span className="font-bold">Case Properties</span>
          </Link>
        </div>

        {/* Center: navigation (horizontally centered) */}
        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary nav-link">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary nav-link">
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right: theme toggle + mobile hamburger */}
        <div className="flex items-center justify-end gap-4 flex-1">
          <button
            aria-label="Toggle light mode"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-md border border-primary/10 bg-background/30 hover:bg-primary/5 theme-toggle"
          >
            {mounted ? (
              theme === "light" ? (
                <svg className="w-5 h-5 icon-adapt" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              ) : (
                <svg className="w-5 h-5 icon-adapt" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )
            ) : (
              <svg className="w-5 h-5 icon-adapt" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="3" strokeWidth="2" />
              </svg>
            )}
          </button>

            {/* Mobile hamburger */}
            <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md text-border hover:text-primary focus:outline-none"
            >
              <svg className="w-6 h-6 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {open ? (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
              </svg>
            </button>

            {open && (
              <div className="absolute right-4 top-16 z-60 w-48 bg-background border border-primary/10 rounded-md shadow-lg">
              <ul className="flex flex-col">
                <li>
                <Link href="/" className="block px-4 py-3 text-sm text-muted-foreground hover:bg-primary/5 nav-link">
                  Home
                </Link>
                </li>
                <li>
                <Link href="/blog" className="block px-4 py-3 text-sm text-muted-foreground hover:bg-primary/5 nav-link">
                  Blog
                </Link>
                </li>
                <li>
                <Link href="/about" className="block px-4 py-3 text-sm text-muted-foreground hover:bg-primary/5 nav-link">
                  About Us
                </Link>
                </li>
              </ul>
              </div>
            )}
            </div>
        </div>
      </div>
    </header>
  )
}
