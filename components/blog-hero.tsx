import { Button } from "@/components/ui/button"
import blogBg from "@/assets/Infinite_Tsukuyomi_Activated_Red_Moon.webp"
import Image from "next/image"
import Link from "next/link"

export function BlogHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#121212]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={blogBg}
          alt="Blog background"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4 py-20">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-[#D32F2F] text-white text-sm font-semibold rounded-full font-heading">
            Our Blog
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight text-white">
          Stay Updated with <span className="text-[#D32F2F]">Tech, Gaming & Anime</span> Insights
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-body max-w-3xl mx-auto text-pretty">
          Dive into expert reviews, in-depth guides, breaking news, and everything happening in the gaming, tech, and anime world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg" 
            className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-body text-lg px-8 py-6 rounded-lg"
          >
            <Link href="#latest">Latest Reviews</Link>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-body text-lg px-8 py-6 rounded-lg"
          >
            <Link href="/events">Upcoming Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
