import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Zap, Grid3x3, ArrowRight, Target, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { generateMetadata } from "@/lib/seo"

export const metadata: Metadata = generateMetadata({
  title: "Climate Research - Low-Carbon Economy, Energy Transition & Power Markets",
  description:
    "Discover YCTF's evidence-based climate research on low-carbon economy transitions, energy system transformation, and power market evolution in Nigeria and Africa.",
  url: "/research",
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  name: "Climate Research Agenda",
  description:
    "Research focused on enabling government to set and operationalize local and national climate targets through evidence-based analysis.",
  researcher: {
    "@type": "Organization",
    name: "YELF Climate Trust Foundation",
  },
  about: [
    "Low-Carbon Economy",
    "Energy Transition",
    "Power Markets",
    "Industrial Sustainability",
    "Sustainable Livelihoods",
  ],
}

export default function ResearchPage() {
  const researchAreas = [
    {
      icon: TrendingUp,
      title: "Low-Carbon Economy",
      slug: "low-carbon-economy",
      description:
        "Supporting Federal government policies with robust quantitative and qualitative analysis for Nigeria's low-carbon transition pathways.",
      keyFocus: [
        "Integrated assessment modelling of energy and land use systems",
        "Setting and operationalizing local and national climate targets",
        "Cross-sectoral synergies and trade-offs analysis",
        "Sector-specific analyses (transport, industry, power)",
      ],
      color: "yellow",
    },
    {
      icon: Zap,
      title: "Energy Transition",
      slug: "energy-transition",
      description:
        "Supporting Nigeria's double leapfrog to a clean energy future in a socially equitable and environmentally responsible manner.",
      keyFocus: [
        "Universal access to reliable and affordable energy",
        "Accelerated renewable energy development",
        "People-centric energy transition approaches",
        "Employment prospects in the green economy",
      ],
      color: "yellow",
    },
    {
      icon: Grid3x3,
      title: "Power Markets",
      slug: "power-markets",
      description:
        "Informing and shaping the evolution of power markets in Nigeria for a clean energy future through grid flexibility and market reforms.",
      keyFocus: [
        "Enhancing grid flexibility and operations",
        "Tapping demand as a flexible resource",
        "Responsive and dynamic regulations",
        "Innovative business models and financial instruments",
      ],
      color: "yellow",
    },
  ]

  const crossCuttingThemes = [
    {
      icon: Target,
      title: "Industrial Sustainability",
      description:
        "Supporting Nigeria's transition to a net-zero economy through research on energy transition to natural gas (CNG), carbon capture utilization and storage (CCUS), carbon pricing, and innovation.",
      focus: [
        "Practical pathways identification and evaluation",
        "Techno-economics of solutions assessment",
        "Evidence generation through pilots",
        "Macroeconomic impacts understanding",
      ],
    },
    {
      icon: Users,
      title: "Sustainable Livelihoods",
      description:
        "Ensuring Nigeria's development aspirations align with climate ambitions by leveraging clean energy transition to increase jobs and income while mainstreaming climate-resilient livelihoods.",
      focus: [
        "Green jobs and sustainable livelihoods identification",
        "Policy development for economic opportunities",
        "Just and inclusive transition pathways",
        "Market ecosystem development support",
      ],
    },
  ]

  const researchTools = [
    {
      title: "Evidence-based Analyses",
      description:
        "Working with empirical data, analysis, research, scenarios, science and quantitative and qualitative assessments of political, economic, technological, social and geopolitical conditions.",
    },
    {
      title: "Techno-Economic Studies",
      description:
        "Designing bespoke solutions such as business models and pilot programmes, and creating collaborative platforms to mainstream clean energy solutions.",
    },
    {
      title: "Primary Data Collection",
      description:
        "Gathering and analyzing primary data to evaluate policies and programmes, ensuring evidence-based research that deeply understands on-ground realities.",
    },
    {
      title: "Policy Analysis",
      description:
        "Informing policies and programmes targeting equitable access to electricity, clean cooking energy, and accelerated renewable energy development.",
    },
  ]

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 text-white">
        <div className="container-max">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Research Agenda</h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Our research focuses on enabling government to set and operationalize local and national climate targets
              to meet global climate action commitments through evidence-based analysis.
            </p>
            <p className="text-lg text-yellow-100 mb-8">
              YELF Climate Trust Foundation seeks to support Federal government policies with robust quantitative and
              qualitative analysis for an improved understanding of Nigeria's low-carbon transition pathways.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-yellow-600 hover:bg-yellow-50 font-semibold" 
                asChild
              >
                <a 
                  href="/YELF - SPIS Research.pdf" 
                  download="YELF - SPIS Research.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download SPIS Research Report
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Core Research Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our research agenda encompasses three primary areas that are critical to Nigeria's climate transition and
              sustainable development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="h-8 w-8 text-yellow-600" />
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{area.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Focus Areas:</h4>
                      <ul className="space-y-2">
                        {area.keyFocus.map((focus, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {focus}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={`/research/${area.slug}`}>
                      <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                        Explore Research Area
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Cutting Themes */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Cross-Cutting Research Themes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our research also encompasses broader themes that cut across all our focus areas, ensuring comprehensive
              analysis and integrated solutions for Nigeria's sustainable development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {crossCuttingThemes.map((theme, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                    <theme.icon className="h-8 w-8 text-yellow-600" />
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{theme.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{theme.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Research Focus:</h4>
                    <ul className="space-y-2">
                      {theme.focus.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Our Research Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We gather and analyze primary data, evaluate policies and programmes, and undertake techno-economic
              studies to design bespoke solutions and create collaborative platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchTools.map((tool, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-yellow-600">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Livelihoods Focus */}
      <section className="section-padding bg-yellow-600 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Sustainable Livelihoods Programme</h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
              How can Nigeria's development aspirations align with climate ambitions? How can the clean energy
              transition contribute to increasing jobs and income?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Energy Transition",
              "Decentralized Renewables",
              "Bioeconomy",
              "Circular Economy",
              "Nature-Based Solutions",
            ].map((focus, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-800 font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-sm">{focus}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
              We identify and seize opportunities for green jobs, inform policies, suggest transition pathways, and
              support market ecosystem development for sustainable livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Contribute to Climate Research</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our research community and contribute to evidence-based climate solutions for Nigeria and Africa.
              Whether you're a researcher, policymaker, or practitioner, there are opportunities to collaborate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700" asChild>
                <a href="mailto:info@yelfclimatetrustfoundation.org?subject=Collaborate on Research" target="_blank" rel="noopener noreferrer">
                  Collaborate on Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
