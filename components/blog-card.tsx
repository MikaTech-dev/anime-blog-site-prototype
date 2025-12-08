"use client"

import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Hash } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string | StaticImageData
  tags: string[]
  date: string
  slug: string
  category: string
}

export function BlogCard({ title, excerpt, image, tags, date, slug, category }: BlogCardProps) {
  return (
    <motion.div 
      className="group flex flex-col h-full bg-white border border-gray-200 overflow-hidden hover:border-[#D32F2F] transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <Link href={`/blog/${slug}`} className="block h-full w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </Link>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-4 uppercase tracking-tight">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-[#D32F2F]" />
            <span>{date}</span>
          </div>
          <div className="w-px h-3 bg-gray-300" />
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            <span>5 min read</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-[#D32F2F] transition-colors">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {excerpt}
        </p>

        {/* Footer / Tags */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex gap-2 overflow-hidden">
            {tags && tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="text-[10px] font-mono text-gray-400 uppercase bg-gray-50 px-2 py-1 rounded-sm border border-gray-100 flex items-center gap-1">
                <Hash className="w-2 h-2" /> {tag}
              </span>
            ))}
          </div>

          <Link 
            href={`/blog/${slug}`}
            className="text-slate-900 text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            Read <ArrowRight className="w-3 h-3 text-[#D32F2F]" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}