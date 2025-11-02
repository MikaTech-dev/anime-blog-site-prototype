"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Grid3x3, Star, Gamepad2, Cpu, Newspaper, BookOpen 
} from "lucide-react"

const categories = [
  { name: "All", count: 156, icon: Grid3x3 },
  { name: "Anime", count: 64, icon: Star },
  { name: "Gaming", count: 48, icon: Gamepad2 },
  { name: "Tech Review", count: 32, icon: Cpu },
  { name: "News", count: 28, icon: Newspaper },
  { name: "Guides", count: 24, icon: BookOpen },
]

export function BlogNavigation() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <nav className="bg-gradient-to-b from-white to-pink-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
            Browse by Category
          </h3>
          <p className="text-muted-foreground font-body">
            Filter posts by topic to find exactly what you're looking for
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.name
            
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`
                  group relative flex items-center gap-3 px-6 py-4 rounded-2xl
                  transition-all duration-300 font-body
                  ${
                    isActive
                      ? "bg-[#D32F2F] text-white shadow-lg shadow-[#D32F2F]/30 scale-105"
                      : "bg-white text-gray-700 hover:bg-pink-50 hover:shadow-md border border-gray-200"
                  }
                `}
              >
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-colors
                  ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-pink-100 text-[#D32F2F] group-hover:bg-[#D32F2F] group-hover:text-white"
                  }
                `}>
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="flex flex-col items-start">
                  <span className={`font-semibold text-sm ${isActive ? "text-white" : "text-foreground"}`}>
                    {category.name}
                  </span>
                  <span className={`
                    text-xs
                    ${isActive ? "text-white/80" : "text-muted-foreground"}
                  `}>
                    {category.count} posts
                  </span>
                </div>
                
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#D32F2F] rounded-full"></div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
