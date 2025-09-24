"use client"

import type React from "react"

import { useState } from "react"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutDashboard, FileText, Tags, Settings, PlusCircle, BarChart3, Save, Eye, Upload, X } from "lucide-react"

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

const categories = ["Anime", "Gaming", "Reviews", "News", "Guides", "Analysis"]

export function CreatePostForm() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [featuredImage, setFeaturedImage] = useState("")
  const [status, setStatus] = useState("draft")

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTag()
    }
  }

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
                Create <span className="text-primary">New Post</span>
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="gaming-border-hover bg-transparent">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button className="glow-red-hover">
                <Save className="w-4 h-4 mr-2" />
                Save Post
              </Button>
            </div>
          </header>

          <main className="flex-1 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="anime-gradient gaming-border">
                  <CardHeader>
                    <CardTitle>Post Content</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        placeholder="Enter post title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="gaming-border bg-background/50 text-lg font-medium"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        placeholder="Brief description of your post..."
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className="gaming-border bg-background/50 min-h-[80px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        placeholder="Write your post content here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="gaming-border bg-background/50 min-h-[400px] font-mono text-sm"
                      />
                      <p className="text-xs text-muted-foreground">
                        Supports Markdown formatting. Use **bold**, *italic*, and other Markdown syntax.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Featured Image */}
                <Card className="anime-gradient gaming-border">
                  <CardHeader>
                    <CardTitle>Featured Image</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="image-url">Image URL</Label>
                      <Input
                        id="image-url"
                        placeholder="https://example.com/image.jpg"
                        value={featuredImage}
                        onChange={(e) => setFeaturedImage(e.target.value)}
                        className="gaming-border bg-background/50"
                      />
                    </div>
                    <div className="border-2 border-dashed gaming-border rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-2">Drag and drop an image here, or click to browse</p>
                      <Button variant="outline" className="gaming-border-hover bg-transparent">
                        Choose File
                      </Button>
                    </div>
                    {featuredImage && (
                      <div className="relative">
                        <img
                          src={featuredImage || "/placeholder.svg"}
                          alt="Featured"
                          className="w-full h-48 object-cover rounded-lg gaming-border"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Publish Settings */}
                <Card className="anime-gradient gaming-border">
                  <CardHeader>
                    <CardTitle>Publish Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger className="gaming-border bg-background/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                          <SelectItem value="scheduled">Scheduled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="gaming-border bg-background/50">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat.toLowerCase()}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Tags */}
                <Card className="anime-gradient gaming-border">
                  <CardHeader>
                    <CardTitle>Tags</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tags">Add Tags</Label>
                      <div className="flex space-x-2">
                        <Input
                          id="tags"
                          placeholder="Enter tag..."
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          onKeyPress={handleKeyPress}
                          className="gaming-border bg-background/50"
                        />
                        <Button onClick={addTag} size="sm" className="glow-red-hover">
                          Add
                        </Button>
                      </div>
                    </div>
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Badge key={tag} variant="destructive" className="flex items-center space-x-1">
                            <span>{tag}</span>
                            <button onClick={() => removeTag(tag)} className="ml-1 hover:text-destructive-foreground">
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* SEO */}
                <Card className="anime-gradient gaming-border">
                  <CardHeader>
                    <CardTitle>SEO Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="slug">URL Slug</Label>
                      <Input id="slug" placeholder="post-url-slug" className="gaming-border bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="meta-description">Meta Description</Label>
                      <Textarea
                        id="meta-description"
                        placeholder="SEO description..."
                        className="gaming-border bg-background/50 min-h-[80px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
