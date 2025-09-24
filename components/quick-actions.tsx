import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, FileText, Tags, Settings, BarChart3, Users } from "lucide-react"

const quickActions = [
  {
    title: "Create New Post",
    description: "Write a new blog post",
    icon: PlusCircle,
    href: "/admin/posts/new",
    primary: true,
  },
  {
    title: "Manage Posts",
    description: "Edit existing posts",
    icon: FileText,
    href: "/admin/posts",
    primary: false,
  },
  {
    title: "Categories",
    description: "Organize content",
    icon: Tags,
    href: "/admin/categories",
    primary: false,
  },
  {
    title: "Analytics",
    description: "View detailed stats",
    icon: BarChart3,
    href: "/admin/analytics",
    primary: false,
  },
  {
    title: "User Management",
    description: "Manage subscribers",
    icon: Users,
    href: "/admin/users",
    primary: false,
  },
  {
    title: "Settings",
    description: "Configure blog",
    icon: Settings,
    href: "/admin/settings",
    primary: false,
  },
]

export function QuickActions() {
  return (
    <Card className="anime-gradient gaming-border">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickActions.map((action) => (
            <Button
              key={action.title}
              asChild
              variant={action.primary ? "default" : "outline"}
              className={`
                h-auto p-4 flex flex-col items-start space-y-2 gaming-border-hover transition-all duration-300
                ${action.primary ? "glow-red-hover" : "hover:bg-secondary/30"}
              `}
            >
              <Link href={action.href}>
                <div className="flex items-center space-x-2 w-full">
                  <action.icon className="w-5 h-5" />
                  <span className="font-medium">{action.title}</span>
                </div>
                <span className="text-xs text-muted-foreground text-left">{action.description}</span>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
