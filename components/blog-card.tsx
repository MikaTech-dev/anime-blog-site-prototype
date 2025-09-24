import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string | StaticImageData
  tags: string[]
  date: string
  slug: string
}

export function BlogCard({ title, excerpt, image, tags, date, slug }: BlogCardProps) {
  return (
    <Card className="anime-gradient gaming-border gaming-border-hover glow-red-hover transition-all duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="destructive" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-lg transition-colors">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{excerpt}</p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </CardContent>
    </Card>
  )
}
