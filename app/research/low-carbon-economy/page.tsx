"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Target, BarChart3, Globe, Download, ArrowRight } from "lucide-react"
import { useDownloadPage } from "@/hooks/use-download-page"

export default function LowCarbonEconomyPage() {
  const { downloadPageContent } = useDownloadPage();

  const handleDownload = async () => {
    await downloadPageContent("Low-Carbon Economy Research", "low-carbon-economy-research.html");
  };

  const researchFocus = [
    {
      icon: Target,
      title: "Climate Target Setting",
      description:
        "Enabling government to set and operationalize local and national climate targets to meet global climate action commitments.",
      activities: [
        "National climate target development",
        "Subnational target alignment",
        "Implementation pathway design",
        "Progress monitoring frameworks",
      ],
    },
    {
      icon: BarChart3,
      title: "Integrated Assessment Modelling",
      description:
        "Specialized modeling of energy and land use systems to understand transition pathways and cross-sectoral impacts.",
      activities: [
        "Energy system modeling",
        "Land use change analysis",
        "Economic impact assessment",
        "Scenario development and analysis",
      ],
    },
    {
      icon: Globe,
      title: "Cross-Sectoral Analysis",
      description:
        "Examining synergies and trade-offs across the energy-water-food-climate nexus and sustainable development goals.",
      activities: [
        "Nexus approach implementation",
        "SDG integration analysis",
        "Political economy of transition",
        "Multi-sectoral coordination",
      ],
    },
  ]

  const sectorAnalysis = [
    {
      sector: "Transport",
      description: "Decarbonization pathways for Nigeria's transportation sector",
      keyAreas: [
        "Electric vehicle adoption",
        "Public transport systems",
        "Freight optimization",
        "Aviation and shipping",
      ],
    },
    {
      sector: "Industry",
      description: "Industrial transformation and energy efficiency improvements",
      keyAreas: ["Manufacturing processes", "Energy intensive industries", "Circular economy", "Technology adoption"],
    },
    {
      sector: "Power",
      description: "Electricity sector transformation and grid modernization",
      keyAreas: ["Renewable integration", "Grid flexibility", "Storage solutions", "Market mechanisms"],
    },
    {
      sector: "Buildings",
      description: "Energy efficiency and sustainable building practices",
      keyAreas: ["Green building standards", "Energy retrofits", "Cooling solutions", "Smart building systems"],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/486988241_122238080246018301_7020088886027853682_n.jpg-qxjnUSHIWoFbLrfhqE8QWcqOlgRLBX.jpeg"
            alt="Diverse agricultural landscape for low-carbon economy"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <TrendingUp className="w-4 h-4 mr-2" />
              Low-Carbon Economy Research
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Low-Carbon Economy</h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Supporting Federal government policies with robust quantitative and qualitative analysis for an improved
              understanding of Nigeria's low-carbon transition pathways.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-yellow-50" onClick={handleDownload}>
                Download Research Reports
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Research Objectives</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                YELF Climate Trust Foundation seeks to support the Federal government policies with robust quantitative
                and qualitative analysis for an improved understanding of Nigeria's low-carbon transition pathways.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our research focuses on enabling government to set and operationalize local and national climate targets
                to meet global climate action commitments.
              </p>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-900 mb-3">Key Research Questions</h3>
                <ul className="space-y-2 text-yellow-800">
                  <li>• How can Nigeria achieve its climate commitments while maintaining economic growth?</li>
                  <li>• What are the most cost-effective pathways to decarbonization?</li>
                  <li>• How can we ensure a just and equitable transition?</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iStock-153555572.jpg-mMLjHxpZPC8epOTCSfetdcf9QaySDw.jpeg"
                alt="Modern irrigation and agricultural technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-1">2050</div>
                <div className="text-gray-600 text-sm">Net-Zero Target</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Research Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive research approach covers multiple dimensions of the low-carbon economy transition.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {researchFocus.map((focus, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{focus.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{focus.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {focus.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {activity}
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

      {/* Sector-Specific Analysis */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Sector-Specific Analysis</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team specializes in sector-specific analyses across transport, industry, power, and other key economic
              sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sectorAnalysis.map((sector, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{sector.sector} Sector</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{sector.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Research Areas:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {sector.keyAreas.map((area, idx) => (
                        <div key={idx} className="bg-yellow-50 px-3 py-2 rounded-lg text-sm text-yellow-800">
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-yellow-600 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Research Methodology</h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Our research employs cutting-edge analytical tools and methodologies to provide robust evidence for policy
              making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">IAM</div>
              <h3 className="font-semibold mb-3">Integrated Assessment</h3>
              <p className="text-yellow-100 text-sm">Comprehensive modeling of energy and land use systems</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">CGE</div>
              <h3 className="font-semibold mb-3">Economic Modeling</h3>
              <p className="text-yellow-100 text-sm">Computable general equilibrium analysis</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">LCA</div>
              <h3 className="font-semibold mb-3">Life Cycle Assessment</h3>
              <p className="text-yellow-100 text-sm">Environmental impact evaluation</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">MCA</div>
              <h3 className="font-semibold mb-3">Multi-Criteria Analysis</h3>
              <p className="text-yellow-100 text-sm">Decision support and trade-off analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Collaborate on Low-Carbon Research</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our research initiatives and contribute to Nigeria's low-carbon transition. We welcome collaboration
              from researchers, policymakers, and practitioners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700" asChild>
                <a href="mailto:info@yelfclimatetrustfoundation.org?subject=Join Research Network" target="_blank" rel="noopener noreferrer">
                  Join Research Network
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
