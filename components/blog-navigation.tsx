"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Search, X, Hash } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", label: "All Feeds", href: "/blog" },
  { id: "tech", label: "Tech News", href: "/blog?category=tech" },
  { id: "gaming", label: "Gaming", href: "/blog?category=gaming" },
  { id: "anime", label: "Anime", href: "/blog?category=anime" },
  { id: "guides", label: "Youtube Guides & Playthrouhs", href: "/blog?category=guides" },
]

export function BlogNavigation() {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  return (
    <div className="sticky top-[72px] z-40 w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Category Scroll Area */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar mask-gradient flex-1 mr-4">
          {categories.map((cat) => {
            const isActive = currentCategory === cat.id || (cat.id === "all" && !searchParams.get("category"))
            
            return (
              <Link 
                key={cat.id} 
                href={cat.href}
                className="relative px-4 py-2 flex-shrink-0 group"
              >
                <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}>
                  {cat.label}
                </span>
                
                {/* Active Indicator */}
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D32F2F]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Search Module */}
        <div className="flex items-center">
          <motion.div 
            initial={false}
            animate={{ width: isSearchOpen ? "auto" : 0, opacity: isSearchOpen ? 1 : 0 }}
            className="overflow-hidden mr-2"
          >
            <div className="relative w-full max-w-[200px] md:max-w-[300px]">
               <Input 
                 ref={inputRef}
                 type="text" 
                 placeholder="SEARCH DATABASE..." 
                 className="h-9 bg-white/10 border-transparent focus:border-[#D32F2F] text-white text-xs font-mono rounded-none placeholder:text-gray-500 w-full"
               />
            </div>
          </motion.div>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSearch}
            className="text-gray-400 hover:text-white hover:bg-white/10 rounded-none w-9 h-9"
          >
            {isSearchOpen ? <X size={18} /> : <Search size={18} />}
          </Button>
        </div>

      </div>
    </div>
  )
}