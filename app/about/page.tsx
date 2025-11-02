import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Award, Zap, Target, Rocket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BlogFooter } from "@/components/blog-footer"
import skyline from "@/assets/futuristic-skylines.webp"
import gamingImage from "@/assets/gaming-consoles-futuristic-technology.png"
import animeImage from "@/assets/anime-characters-colorful-scene.png"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#121212]">
        <div className="absolute inset-0 z-0">
          <Image
            src={skyline}
            alt="Futuristic skylines background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4 py-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#D32F2F] text-white text-sm font-semibold rounded-full font-heading">
              About Case Blogs
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight">
            Where Gaming <span className="text-[#D32F2F]">Passion</span> Meets Innovation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-body max-w-3xl mx-auto text-pretty">
            Born from passion, driven by innovation. We're more than a store, we're a community hub for tech enthusiasts, 
            gamers, and anime lovers.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground">
              Our <span className="text-[#D32F2F]">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              How Case Blogs became your ultimate gaming & tech destination
            </p>
          </div>

          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-body">
            <p>
              Founded in 2020 by a group of passionate tech enthusiasts and anime lovers, Case Blogs began as a 
              small dream to bridge the gap between cutting-edge technology and pop culture. What started as a weekend 
              project has grown into a thriving community hub for like-minded individuals.
            </p>

            <p>
              We believe that technology should enhance your passions, not complicate them. Whether you're building the 
              ultimate gaming setup, searching for the latest anime collectibles, or need the newest tech gadgets, we're 
              here to help you find exactly what you need with expert guidance and genuine enthusiasm.
            </p>

            <p>
              Our team consists of certified technicians, competitive gamers, and dedicated anime fans who understand 
              the importance of quality, authenticity, and performance. We don't just sell products—we share knowledge, 
              experiences, and passion with every customer who walks through our doors or joins our online community.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold font-heading text-[#D32F2F] mb-2">500+</div>
              <div className="text-sm text-muted-foreground font-body">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-heading text-[#D32F2F] mb-2">50+</div>
              <div className="text-sm text-muted-foreground font-body">Events Yearly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-heading text-[#D32F2F] mb-2">1000+</div>
              <div className="text-sm text-muted-foreground font-body">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-heading text-[#D32F2F] mb-2">5+</div>
              <div className="text-sm text-muted-foreground font-body">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground">
              Our <span className="text-[#D32F2F]">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#D32F2F] text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#D32F2F] to-[#FF7043] rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading font-bold">Passion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  We're genuinely passionate about tech, gaming, and anime. This enthusiasm drives everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#D32F2F] text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#1976D2] to-[#FF7043] rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading font-bold">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  We carefully curate our products to ensure only the highest quality items reach our customers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#D32F2F] text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#FF7043] to-[#FFC107] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading font-bold">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  We foster a welcoming community where enthusiasts can share knowledge and experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#D32F2F] text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#FFC107] to-[#FF7043] rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading font-bold">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  We stay ahead of trends to bring you the latest and greatest in tech and pop culture.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#D32F2F] text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#8D6E63] to-[#FF7043] rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading font-bold">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  We strive for excellence in every product, event, and interaction with our community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#D32F2F] text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#D32F2F] to-[#1976D2] rounded-full flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading font-bold">Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  We're constantly growing, learning, and evolving to better serve our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground">
              Meet the <span className="text-[#D32F2F]">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              The passionate individuals behind Case Blogs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center border border-gray-200">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-[#D32F2F] to-[#FF7043] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white font-heading">CC</span>
                </div>
                <CardTitle className="text-xl font-heading font-bold">Chibuike Charles</CardTitle>
                <p className="text-[#D32F2F] text-sm font-body font-semibold">Founder & CEO</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm font-body">
                  Tech enthusiast with 10+ years in hardware. Passionate about bringing cutting-edge technology 
                  to the gaming and anime community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center border border-gray-200">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-[#1976D2] to-[#FF7043] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white font-heading">SJ</span>
                </div>
                <CardTitle className="text-xl font-heading font-bold">Sarah James</CardTitle>
                <p className="text-[#D32F2F] text-sm font-body font-semibold">Gaming Specialist</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm font-body">
                  Professional esports player turned consultant. Expert in gaming peripherals, competitive setups, 
                  and tournament organization.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center border border-gray-200">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-[#FFC107] to-[#FF7043] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white font-heading">CJ</span>
                </div>
                <CardTitle className="text-xl font-heading font-bold">Carl Johnson</CardTitle>
                <p className="text-[#D32F2F] text-sm font-body font-semibold">Anime Curator</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm font-body">
                  Dedicated anime fan with extensive knowledge of collectibles, figures, and merchandise. 
                  Ensures authentic and exclusive items for our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D32F2F] to-[#FF7043] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To create the ultimate destination where gamers, tech enthusiasts, and anime fans can discover 
                premium products, participate in epic events, and build lasting connections within an inclusive 
                and passionate community.
              </p>
            </Card>

            <Card className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1976D2] to-[#FF7043] rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To become the leading global platform that bridges gaming, technology, and anime culture, 
                fostering innovation, community growth, and unforgettable experiences for enthusiasts worldwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#121212]">
        <div className="container mx-auto text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white">
              Ready to Join Our <span className="text-[#D32F2F]">Community</span>?
            </h2>
            <p className="text-xl text-gray-300 font-body">
              Whether you're looking for the latest tech, gaming gear, or anime merchandise, we're here to help you 
              find exactly what you need and connect with fellow enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-body px-8 py-6 rounded-lg text-lg"
              >
                <Link href="/events">Join an Event</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-body px-8 py-6 rounded-lg text-lg"
              >
                <Link href="/blog">Read Our Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <BlogFooter />
    </div>
  )
}
