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
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D32F2F] rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D32F2F] rounded-lg flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5" />
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
