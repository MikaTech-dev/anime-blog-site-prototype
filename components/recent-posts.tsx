import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Eye } from "lucide-react"

const recentPosts = [
  {
    id: "1",
    title: "Top 10 Anime of 2024: A Complete Review",
    status: "Published",
    views: "2.4K",
    date: "Dec 15, 2024",
    category: "Anime",
  },
  {
    id: "2",
    title: "Cyberpunk 2077: Ultimate Gaming Guide",
    status: "Published",
    views: "1.8K",
    date: "Dec 12, 2024",
    category: "Gaming",
  },
  {
    id: "3",
    title: "Attack on Titan Final Season Review",
    status: "Draft",
    views: "0",
    date: "Dec 10, 2024",
    category: "Reviews",
  },
  {
    id: "4",
    title: "Gaming News: Next-Gen Console Updates",
    status: "Published",
    views: "3.1K",
    date: "Dec 8, 2024",
    category: "News",
  },
  {
    id: "5",
    title: "Demon Slayer Animation Analysis",
    status: "Published",
    views: "1.5K",
    date: "Dec 5, 2024",
    category: "Analysis",
  },
]

export function RecentPosts() {
  return (
    <Card className="anime-gradient gaming-border">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Recent Posts</span>
          <Button asChild variant="outline" size="sm" className="gaming-border-hover bg-transparent">
            <Link href="/admin/posts">View All</Link>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 gaming-border-hover transition-all duration-300 hover:bg-secondary/30"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium text-sm line-clamp-1">{post.title}</h4>
                  <Badge variant={post.status === "Published" ? "default" : "secondary"} className="text-xs">
                    {post.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button asChild variant="ghost" size="icon" className="h-8 w-8 gaming-border-hover">
                  <Link href={`/admin/posts/edit/${post.id}`}>
                    <Edit className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 gaming-border-hover text-destructive">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
