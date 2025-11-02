import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import {
  Facebook, Twitter, Instagram, MessageCircle, Youtube,
  ChevronRight, Gamepad2, Laptop, Star, Trophy, Cpu, Palette
} from "lucide-react"
import logo from "@/assets/CASE_PROPERTIES_LOGO_HD.png"

export function BlogFooter() {
  return (
    <footer className="bg-[#121212] text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src={logo} alt="Case Blogs" width={40} height={40} className="object-contain" />
              <h3 className="text-xl font-bold font-heading">Case Blogs</h3>
            </div>
            <p className="text-gray-400 text-sm font-body">
              Your ultimate gaming & tech community hub. Premium gear, epic tournaments, and vibrant community.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D32F2F] rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D32F2F] rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/case_properties" className="w-10 h-10 bg-white/10 hover:bg-[#D32F2F] rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D32F2F] rounded-lg flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path 
                  d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D32F2F] rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">Quick Links</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> About
                </Link>
              </li>
              <li>
                <Link href="/store" className="text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Store
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">Categories</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link href="/store?category=gaming" className="text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center gap-2">
                  <Gamepad2 className="w-3 h-3" /> Gaming Gear
                </Link>
              </li>
              <li>
                <Link href="/store?category=tech" className="text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center gap-2">
                  <Laptop className="w-3 h-3" /> Tech Gadgets
                </Link>
              </li>
              <li>
                <Link href="/store?category=anime" className="text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center gap-2">
                  <Star className="w-3 h-3" /> Anime Merchandise
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center gap-2">
                  <Trophy className="w-3 h-3" /> Tournaments
                </Link>
              </li>
              <li>
                <Link href="/blog?category=tech" className="text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center gap-2">
                  <Cpu className="w-3 h-3" /> Tech Reviews
                </Link>
              </li>
              <li>
                <Link href="/blog?category=anime" className="text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center gap-2">
                  <Palette className="w-3 h-3" /> Anime Spotlights
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">Newsletter</h4>
            <p className="text-sm text-gray-400 font-body">
              Subscribe to get updates on new products, events, and exclusive deals
            </p>
            <div className="flex gap-2">
              <Input 
                type="email"
                placeholder="Your email" 
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#D32F2F] font-body" 
              />
              <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-6 rounded-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm font-body">
            <p>© 2025 Case Blogs. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#D32F2F] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#D32F2F] transition-colors">Terms</Link>
              <Link href="/refund" className="hover:text-[#D32F2F] transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
