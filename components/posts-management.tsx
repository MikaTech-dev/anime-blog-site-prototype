"use client"

import Link from "next/link"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  LayoutDashboard,
  FileText,
  Tags,
  Settings,
  PlusCircle,
  BarChart3,
  Search,
  Edit,
  Trash2,
  Eye,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
    isActive: false,
  },
  {
    title: "Posts",
    icon: FileText,
    href: "/admin/posts",
    isActive: true,
  },
  {
    title: "Categories",
    icon: Tags,
    href: "/admin/categories",
    isActive: false,
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/admin/analytics",
    isActive: false,
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
    isActive: false,
  },
]

const posts = [
  {
    id: "1",
    title: "Top 10 Anime of 2024: A Complete Review",
    status: "Published",
    views: "2.4K",
    comments: "45",
    date: "Dec 15, 2024",
    category: "Anime",
    author: "Admin",
  },
  {
    id: "2",
    title: "Cyberpunk 2077: Ultimate Gaming Guide",
    status: "Published",
    views: "1.8K",
    comments: "32",
    date: "Dec 12, 2024",
    category: "Gaming",
    author: "Admin",
  },
  {
    id: "3",
    title: "Attack on Titan Final Season Review",
    status: "Draft",
    views: "0",
    comments: "0",
    date: "Dec 10, 2024",
    category: "Reviews",
    author: "Admin",
  },
  {
    id: "4",
    title: "Gaming News: Next-Gen Console Updates",
    status: "Published",
    views: "3.1K",
    comments: "67",
    date: "Dec 8, 2024",
    category: "News",
    author: "Admin",
  },
  {
    id: "5",
    title: "Demon Slayer Animation Analysis",
    status: "Published",
    views: "1.5K",
    comments: "28",
    date: "Dec 5, 2024",
    category: "Analysis",
    author: "Admin",
  },
]

export function PostsManagement() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="gaming-border-hover">
          <SidebarHeader className="border-b gaming-border p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center glow-red">
                <PlusCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-primary">Admin Panel</h2>
                <p className="text-xs text-muted-foreground">Anime Gaming Blog</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu className="p-4 space-y-2">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={item.isActive}
                    className="gaming-border-hover glow-red-hover transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="flex h-16 items-center gap-4 border-b gaming-border bg-background/95 backdrop-blur-sm px-6">
            <SidebarTrigger className="gaming-border-hover" />
            <div className="flex-1">
              <h1 className="text-2xl font-bold">
                Posts <span className="text-primary">Management</span>
              </h1>
            </div>
            <Button asChild className="glow-red-hover">
              <Link href="/admin/posts/new">
                <PlusCircle className="w-4 h-4 mr-2" />
                New Post
              </Link>
            </Button>
          </header>

          <main className="flex-1 p-6">
            <Card className="anime-gradient gaming-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Posts</CardTitle>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input placeholder="Search posts..." className="pl-10 gaming-border bg-background/50" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 gaming-border-hover transition-all duration-300 hover:bg-secondary/30"
                    >
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium">{post.title}</h4>
                          <Badge variant={post.status === "Published" ? "default" : "secondary"}>{post.status}</Badge>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <span>{post.category}</span>
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span>{post.comments} comments</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button asChild variant="ghost" size="sm" className="gaming-border-hover">
                          <Link href={`/admin/posts/edit/${post.id}`}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" className="gaming-border-hover text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
