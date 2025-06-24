import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, DollarSign, Users, Factory, BookOpen } from "lucide-react"
import Link from "next/link"

export default function ProgramsOverview() {
  const programs = [
    {
      icon: Zap,
      title: "Energy Programme",
      description:
        "Accelerating Nigeria's transition to clean, reliable, and affordable energy systems through research, policy advocacy, and community engagement.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.23%20%281%29-yfxegr1GiUSwqtxjYK61ZqQBAgjU5V.jpeg",
      link: "/programs/energy",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Resilience Programme",
      description:
        "Building climate resilience in vulnerable communities through adaptive strategies, sustainable livelihoods, and disaster risk reduction.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.25-rXKOZRjlbmm9C1srDsT3JwXyGEyjd3.jpeg",
      link: "/programs/resilience",
      color: "primary",
    },
    {
      icon: DollarSign,
      title: "Finance Programme",
      description:
        "Mobilizing climate finance and developing innovative financing mechanisms for sustainable development across Nigeria.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.25%20%282%29-5Z5SA4KNgnSTHVakabvsuKhawPfNXa.jpeg",
      link: "/programs/finance",
      color: "primary",
    },
    {
      icon: Users,
      title: "Governance Programme",
      description:
        "Strengthening climate governance frameworks and institutional capacity for effective climate action implementation.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.25%20%281%29-2QzLN31wy6ofQdxa1HuB5o64m9oaV8.jpeg",
      link: "/programs/governance",
      color: "primary",
    },
    {
      icon: Factory,
      title: "Industry Programme",
      description:
        "Supporting industrial decarbonization and sustainable manufacturing practices across key economic sectors.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.23%20%281%29-yfxegr1GiUSwqtxjYK61ZqQBAgjU5V.jpeg",
      link: "/programs/industry",
      color: "primary",
    },
    {
      icon: BookOpen,
      title: "Research Programme",
      description:
        "Conducting cutting-edge research on climate solutions, policy frameworks, and sustainable development pathways.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medium-shot-boy-father-working-together_23-2149142899.jpg-V5Rmdy0LXvAuMqErl7qvZISUsQi8c2.jpeg",
      link: "/research",
      color: "primary",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Programmes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We drive transformative climate action through six integrated programmes that address Nigeria's most
            pressing climate challenges with evidence-based solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white"
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {/* <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <program.icon className="h-6 w-6 text-white" />
                  </div> */}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary-600 hover:text-primary-700 font-semibold"
                    asChild
                  >
                    <a href={program.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary-600 hover:bg-primary-700" asChild>
            <Link href="/programs">
              View All Programmes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
