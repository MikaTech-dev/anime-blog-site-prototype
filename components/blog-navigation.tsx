"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = [
  { name: "All", count: 156 },
  { name: "Anime", count: 64 },
  { name: "Gaming", count: 48 },
  { name: "Reviews", count: 32 },
  { name: "News", count: 28 },
  { name: "Guides", count: 24 },
]

export function BlogNavigation() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <nav className="z-40 bg-background/95 backdrop-blur-sm border-b gaming-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "ghost"}
              onClick={() => setActiveCategory(category.name)}
              className={`
                gaming-border-hover transition-all duration-300
                ${
                  activeCategory === category.name
                    ? "glow-red bg-primary text-primary-foreground"
                    : "hover:bg-secondary/50"
                }
              `}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 bg-background/90 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
