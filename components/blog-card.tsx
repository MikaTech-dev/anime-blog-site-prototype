import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#D32F2F] text-white text-xs font-semibold rounded-full font-heading">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground font-body mb-4">
          <span className="flex items-center gap-2">
            <i className="far fa-calendar text-xs"></i> {date}
          </span>
          <span className="flex items-center gap-2">
            <i className="far fa-clock text-xs"></i> 5 min read
          </span>
        </div>
        <h3 className="text-xl font-heading font-bold mb-3 hover:text-[#D32F2F] transition-colors">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-muted-foreground font-body mb-4 line-clamp-3 text-sm">{excerpt}</p>
        <Link 
          href={`/blog/${slug}`}
          className="text-[#D32F2F] font-body hover:gap-2 flex items-center gap-1 group text-sm font-semibold"
        >
          Read More <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform text-xs"></i>
        </Link>
      </div>
    </div>
  )
}
