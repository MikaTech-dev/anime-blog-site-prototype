import { BlogHero } from "@/components/blog-hero"
import { BlogNavigation } from "@/components/blog-navigation"
import { BlogGrid } from "@/components/blog-grid"
import { BlogFooter } from "@/components/blog-footer"
import animeImage from "@/assets/anime-characters-colorful-scene.png"
import cyberpunkImage from "@/assets/cyberpunk-futuristic-city-neon-lights.png"
import aotImage from "@/assets/attack-on-titan-epic-battle-scene.png"
import gamingImage from "@/assets/gaming-consoles-futuristic-technology.png"
import demonSlayerImage from "@/assets/demon-slayer-animation-fire-effects.png"
import eldenRingImage from "@/assets/elden-ring-fantasy-landscape-dark-souls.png"

// Mock blog data - will be replaced with real data later
const mockPosts = [
  {
    id: "1",
    title: "Top 10 Anime of 2024: A Complete Review",
    excerpt:
      "Discover the most captivating anime series that defined this year, from epic adventures to heartwarming slice-of-life stories.",
    image: animeImage,
    tags: ["Anime", "Reviews", "2024"],
    date: "December 15, 2024",
    slug: "top-10-anime-2024",
    category: "Anime",
  },
  {
    id: "2",
    title: "Cyberpunk 2077: Ultimate Gaming Guide",
    excerpt:
      "Master Night City with our comprehensive guide covering builds, quests, and hidden secrets in this futuristic RPG.",
    image: cyberpunkImage,
    tags: ["Gaming", "Guides", "RPG"],
    date: "December 12, 2024",
    slug: "cyberpunk-2077-guide",
    category: "Gaming",
  },
  {
    id: "3",
    title: "Attack on Titan Final Season: Epic Conclusion",
    excerpt:
      "Our spoiler-free review of the final season that brought this legendary anime to its dramatic conclusion.",
    image: aotImage,
    tags: ["Anime", "Reviews", "Final Season"],
    date: "December 10, 2024",
    slug: "attack-on-titan-final",
    category: "Reviews",
  },
  {
    id: "4",
    title: "Gaming News: Next-Gen Console Updates",
    excerpt: "Latest updates on PlayStation 6 rumors, Xbox Series X Pro, and Nintendo Switch 2 development news.",
    image: gamingImage,
    tags: ["Gaming", "News", "Consoles"],
    date: "December 8, 2024",
    slug: "next-gen-console-news",
    category: "News",
  },
  {
    id: "5",
    title: "Demon Slayer: Animation Masterpiece Analysis",
    excerpt: "Breaking down the incredible animation techniques that make Demon Slayer a visual spectacle.",
    image: demonSlayerImage,
    tags: ["Anime", "Analysis", "Animation"],
    date: "December 5, 2024",
    slug: "demon-slayer-animation",
    category: "Anime",
  },
  {
    id: "6",
    title: "Elden Ring DLC: Shadow of the Erdtree Guide",
    excerpt: "Complete walkthrough of the massive DLC expansion with boss strategies and hidden item locations.",
    image: eldenRingImage,
    tags: ["Gaming", "Guides", "DLC"],
    date: "December 3, 2024",
    slug: "elden-ring-dlc-guide",
    category: "Guides",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHero />
      <BlogNavigation />
      <main className="container mx-auto px-4 py-12">
        <BlogGrid posts={mockPosts} />
      </main>
      <BlogFooter />
    </div>
  )
}
