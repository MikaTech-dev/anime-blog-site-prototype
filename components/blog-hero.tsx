import { Button } from "@/components/ui/button"
import blogBg from "@/assets/Infinite_Tsukuyomi_Activated_Red_Moon.webp"
import Link from "next/link"

export function BlogHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <img
          src={blogBg.src || "/assets/Infinite_Tsukuyomi_Activated_Red_Moon.webp"}
          alt="Blog background"
          className="w-full h-full object-cover filter blur-sm scale-105 brightness-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60" />
      </div>
      {/* Animated background */}
      <div className="absolute inset-0 anime-gradient">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/80" />
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
          <span className="text-primary">Case</span> <span className="text-primary glow-text-red">Properties</span>{" "}
          <span className="text-primary">Blog</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-legible max-w-2xl mx-auto text-pretty">
          Dive into the ultimate fusion of anime culture and gaming excellence. Reviews, guides, news, gameplay, unboxings and 
          everything in between!.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="glow-red-hover text-lg px-8 py-6">
            Latest Reviews
          </Button>
          <Button size="lg" className="glow-red-hover gaming-border text-white-hover bg-transparent text-lg px-8 py-6">
            <Link href="https://www.youtube.com">Gameplay Videos</Link>
          </Button>
        </div>
      </div>

      {/* Floating elements for anime/gaming aesthetic */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-bounce opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary/50 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary rounded-full animate-ping" />
      <div className="absolute bottom-40 right-10 w-5 h-5 bg-primary/30 rounded-full animate-bounce delay-1000" />
    </section>
  )
}
