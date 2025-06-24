import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/women-are-stand-holding-seedlings-are-dry-land-warming-world.jpg-ZyYJFPhH8ApUZVvKmaUPt4T4CX8HLa.jpeg"
          alt="Hope and resilience in climate action - hands protecting a seedling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            Transforming Climate Action in <span className="text-primary-400">Nigeria</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            YELF Climate Trust Foundation drives evidence-based climate solutions through research, policy advocacy, and
            community engagement across Nigeria and Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
              asChild
            >
              <Link href="/about">
                Explore Our Story
              </Link>
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">50+</div>
              <div className="text-gray-300">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">25+</div>
              <div className="text-gray-300">Community Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">100K+</div>
              <div className="text-gray-300">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
