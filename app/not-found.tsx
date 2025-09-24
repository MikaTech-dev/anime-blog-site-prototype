"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          {/* Animated 404 */}
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold text-primary/20 select-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-7xl font-bold text-primary glow-red animate-pulse">404</div>
            </div>
          </div>

          {/* Error message */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Page <span className="text-primary">Not Found</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Looks like this page got lost in the digital void. Even our best anime protagonists couldn't find it!
            </p>
          </div>

          {/* Suggestions */}
          <Card className="anime-gradient gaming-border text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                What you can do:
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Check the URL for typos</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Go back to the previous page</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Visit our homepage to explore</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Browse our latest blog posts</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="glow-red-hover">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gaming-border-hover bg-transparent">
              <Link href="/blog">
                <Search className="w-4 h-4 mr-2" />
                Browse Blog
              </Link>
            </Button>
            <Button variant="ghost" size="lg" onClick={() => window.history.back()} className="hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Floating anime-style elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-bounce opacity-60" />
          <div className="absolute top-40 right-20 w-6 h-6 bg-primary/50 rounded-full animate-pulse" />
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary rounded-full animate-ping" />
          <div className="absolute bottom-40 right-10 w-5 h-5 bg-primary/30 rounded-full animate-bounce delay-1000" />
        </div>
      </div>
    </div>
  )
}
