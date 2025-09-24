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
import { AdminStats } from "@/components/admin-stats"
import { RecentPosts } from "@/components/recent-posts"
import { QuickActions } from "@/components/quick-actions"
import { LayoutDashboard, FileText, Tags, Settings, PlusCircle, BarChart3 } from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
    isActive: true,
  },
  {
    title: "Posts",
    icon: FileText,
    href: "/admin/posts",
    isActive: false,
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

export function AdminDashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="gaming-border-hover">
          <SidebarHeader className="border-b gaming-border p-6">
            <Link href="/admin" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center glow-red">
                <PlusCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-primary">Admin Panel</h2>
                <p className="text-xs text-muted-foreground">Anime Gaming Blog</p>
              </div>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu className="p-4 space-y-2">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className="gaming-border-hover glow-red-hover transition-all duration-300"
                  >
                    <Link href={item.href}>
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
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
                Dashboard <span className="text-primary">Overview</span>
              </h1>
            </div>
          </header>

          <main className="flex-1 p-6 space-y-8">
            <AdminStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RecentPosts />
              <QuickActions />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
