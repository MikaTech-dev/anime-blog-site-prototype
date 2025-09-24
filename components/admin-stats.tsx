import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Eye, MessageCircle, Users, TrendingUp, Calendar } from "lucide-react"

const stats = [
  {
    title: "Total Posts",
    value: "156",
    change: "+12%",
    icon: FileText,
    trend: "up",
  },
  {
    title: "Total Views",
    value: "24.8K",
    change: "+18%",
    icon: Eye,
    trend: "up",
  },
  {
    title: "Comments",
    value: "1,247",
    change: "+8%",
    icon: MessageCircle,
    trend: "up",
  },
  {
    title: "Subscribers",
    value: "3,421",
    change: "+23%",
    icon: Users,
    trend: "up",
  },
  {
    title: "Monthly Growth",
    value: "15.2%",
    change: "+5%",
    icon: TrendingUp,
    trend: "up",
  },
  {
    title: "Posts This Month",
    value: "28",
    change: "+4",
    icon: Calendar,
    trend: "up",
  },
]

export function AdminStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="anime-gradient gaming-border gaming-border-hover glow-red-hover transition-all duration-300"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center space-x-1 text-xs">
              <span className="text-primary font-medium">{stat.change}</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
