"use client"

import { useMemo, useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogFooter } from "@/components/blog-footer"
import { Home, Search, ArrowLeft } from "lucide-react"
import Particles from "@tsparticles/react"
import { type Container, type Engine } from "@tsparticles/engine"
import { initParticlesEngine } from "@tsparticles/react"

export default function NotFound() {
  const [particlesReady, setParticlesReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      const { loadSlim } = await import("@tsparticles/slim")
      await loadSlim(engine)
      setParticlesReady(true)
    })
  }, [])

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push" as const,
          },
          onHover: {
            enable: true,
            mode: "repulse" as const,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#D32F2F", // Brand red
        },
        links: {
          color: "#D32F2F",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50,
        },
        opacity: {
          value: 0.6,
        },
        shape: {
          type: "circle" as const,
        },
        size: {
          value: { min: 3, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  )

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-8 max-w-2xl mx-auto relative">
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
                Looks like this page like the one piece, can't be found.
              </p>
            </div>

      {/* Particles Background */}
      {particlesReady && (
        <Particles
          id="tsparticles"
          options={options as any}
          className="absolute inset-0 z-0"
        />
      )}
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
              <Button asChild variant="outline" size="lg" className="gaming-border-hover hover:text-black bg-transparent">
                <Link href="/blog">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Blog
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.history.back()} className="hover:text-black bg-transparent cursor-pointer">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BlogFooter />
    </div>
  )
}
