import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Award, Zap } from "lucide-react"
import Link from "next/link"
import skyline from "@/assets/futuristic-skylines.webp"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Blurred background image */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <img
            src={skyline.src || "/assets/futuristic-skylines.webp"}
            alt="Futuristic skylines background"
            className="w-full h-full object-cover filter blur-sm scale-105 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60" />
        </div>
        <div className="absolute inset-0 anime-gradient">
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/80" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
          </div>
        </div>

        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary">
            About Case Properties
          </h1>
          <p className="text-xl md:text-2xl text-primary max-w-3xl mx-auto text-pretty">
            Born from passion, driven by innovation. We're more than a blog - we're a community of tech enthusiasts,
            gamers, and anime lovers.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-primary">Story</span>
            </h2>
          </div>

          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 2020 by a group of passionate tech enthusiasts and anime lovers, Case Properties began as a
              small dream to bridge the gap between cutting-edge technology and pop culture. What started as a weekend
              project in our home has grown into a thriving community hub for like-minded individuals.
            </p>

            <p>
              We believe that technology should enhance your passions, not complicate them. Whether you're building the
              ultimate gaming setup, searching for Home grown, anime related news, or need the latest tech gadgets, we're here to
              help you find exactly what you need with expert guidance and genuine enthusiasm.
            </p>

            <p>
              Our team consists of certified technicians, competitive gamers, and dedicated anime fans who understand
              the importance of quality, authenticity, and performance. We don't just sell products - we share our
              knowledge, experiences, and passion with every customer who walks through our doors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="anime-gradient gaming-border gaming-border-hover glow-red-hover transition-all duration-300 hover:scale-105 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Passion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're genuinely passionate about tech, gaming, and anime. This enthusiasm drives everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="anime-gradient gaming-border gaming-border-hover glow-red-hover transition-all duration-300 hover:scale-105 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We carefully curate our products to ensure only the highest quality items reach our customers.
                </p>
              </CardContent>
            </Card>

            <Card className="anime-gradient gaming-border gaming-border-hover glow-red-hover transition-all duration-300 hover:scale-105 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We foster a welcoming community where enthusiasts can share knowledge and experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="anime-gradient gaming-border gaming-border-hover glow-red-hover transition-all duration-300 hover:scale-105 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We stay ahead of trends to bring you the latest and greatest in tech and pop culture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet the <span className="text-primary">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The passionate individuals behind Case Properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="anime-gradient gaming-border gaming-border-hover glow-red-hover transition-all duration-300 hover:scale-105 text-center">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">CC</span>
                </div>
                <CardTitle className="text-xl">Chibuike Charles</CardTitle>
                <p className="text-primary text-sm">Founder & CEO</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Tech enthusiast with 10+ years in hardware. Loves tinkering with gadgets... Lorem, ipsum dolor sit amet consectetur
                </p>
              </CardContent>
            </Card>

            <Card className="anime-gradient gaming-border gaming-border-hover glow-red-hover transition-all duration-300 hover:scale-105 text-center">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">SJ</span>
                </div>
                <CardTitle className="text-xl">Sarah James</CardTitle>
                <p className="text-primary text-sm">Gaming Specialist</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Professional esports player turned consultant. Expert in gaming peripherals and competitive setups.
                </p>
              </CardContent>
            </Card>

            <Card className="anime-gradient gaming-border gaming-border-hover glow-red-hover transition-all duration-300 hover:scale-105 text-center">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">CJ</span>
                </div>
                <CardTitle className="text-xl">Carl Johnson</CardTitle>
                <p className="text-primary text-sm">Anime Curator</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque temporibus cumque dolorem quam commodi sequi?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Join Our <span className="text-primary">Community</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you're looking for the latest tech, gaming gear, or anime merchandise, we're here to help you find
              exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-red-hover text-lg px-8 py-6">
                <Link href="/">Home</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gaming-border-hover bg-transparent text-lg px-8 py-6"
              >
                <Link href="/blog">Read Our Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
