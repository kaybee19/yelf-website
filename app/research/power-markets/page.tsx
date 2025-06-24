"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Grid3x3, Settings, TrendingUp, Download, ArrowRight, BarChart3 } from "lucide-react"
import { useDownloadPage } from "@/hooks/use-download-page"

export default function PowerMarketsResearchPage() {
  const { downloadPageContent } = useDownloadPage();

  const handleDownload = async () => {
    await downloadPageContent("Power Markets Research", "power-markets-research.html");
  };

  const researchFocus = [
    {
      icon: Grid3x3,
      title: "Grid Flexibility Enhancement",
      description:
        "Research on enhancing grid flexibility and operations to accommodate high levels of renewable energy integration.",
      activities: [
        "Grid flexibility assessment and planning",
        "Smart grid technology integration",
        "Grid stability and reliability studies",
        "Renewable energy integration strategies",
      ],
    },
    {
      icon: TrendingUp,
      title: "Demand as Flexible Resource",
      description:
        "Tapping demand as a flexible resource through demand response programs and smart energy management systems.",
      activities: [
        "Demand response program design",
        "Smart metering and automation",
        "Consumer behavior analysis",
        "Load management strategies",
      ],
    },
    {
      icon: Settings,
      title: "Responsive Regulations",
      description:
        "Developing responsive and dynamic regulations that can adapt to the evolving power market landscape.",
      activities: [
        "Regulatory framework assessment",
        "Market rule development",
        "Policy impact analysis",
        "Stakeholder engagement processes",
      ],
    },
    {
      icon: BarChart3,
      title: "Innovative Business Models",
      description:
        "Research on innovative business models and financial instruments for clean energy market development.",
      activities: [
        "Business model innovation",
        "Financial instrument design",
        "Market mechanism development",
        "Investment framework analysis",
      ],
    },
  ]

  const keyObjectives = [
    "Inform and shape the evolution of power markets in Nigeria for a clean energy future",
    "Enhance grid flexibility and operations for renewable energy integration",
    "Tap demand as a flexible resource through smart technologies",
    "Develop responsive and dynamic regulatory frameworks",
    "Create innovative business models and financial instruments",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/449616442_497425966094534_2757402193935548131_n-zkvvj6OmJF6vtIOj2L2eEdz6ThNSka.jpeg"
            alt="Modern agricultural technology and power systems"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <Grid3x3 className="w-4 h-4 mr-2" />
              Power Markets Research
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Power Markets Research</h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Informing and shaping the evolution of power markets in Nigeria for a clean energy future through grid
              flexibility, demand response, responsive regulations, and innovative business models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-yellow-50" onClick={handleDownload}>
                Download Market Analysis
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
                Our Power Markets research aims to inform and shape the evolution of power markets in Nigeria for a
                clean energy future through comprehensive analysis of grid operations, market mechanisms, and regulatory
                frameworks.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We focus on enhancing grid flexibility, tapping demand as a flexible resource, developing responsive
                regulations, and creating innovative business models for the clean energy transition.
              </p>

              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medium-shot-boy-working-with-plants_23-2149142895.jpg-9srjbPE2QAlv5KWjSsbtxvCm7IztfX.jpeg"
                  alt="Youth engagement in sustainable agriculture and energy systems"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">24/7</div>
                  <div className="text-gray-600 text-sm">Clean Energy</div>
                </div>
              </div>

              <div className="space-y-4 mt-16">
                {keyObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GettyImages-1244636088.jpg-ulei1xXTPueYNFSxotwxVZXOQ3xywa.jpeg"
                alt="Power market evolution"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-1">24/7</div>
                <div className="text-gray-600 text-sm">Clean Energy</div>
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
              Our comprehensive research approach covers all aspects of power market transformation for clean energy
              integration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
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

      {/* Market Evolution */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GlCMy3gW8AExLHK.jpg-oILOfAQ7e7DPZVpS1dwDeG7aWWGIlr.jpeg"
                alt="Solar integration in agricultural systems"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Market Transformation</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nigeria's power market is undergoing significant transformation as it integrates more renewable energy
                sources and adopts smart grid technologies. Our research provides insights to guide this evolution.
              </p>

              <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-yellow-900 mb-3">Key Market Trends</h3>
                <p className="text-yellow-800">
                  Increasing renewable energy penetration, distributed generation growth, demand response adoption, and
                  digitalization of grid operations are reshaping Nigeria's power market landscape.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold text-sm">1</span>
                  </div>
                  <span className="text-gray-700">Renewable energy market integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold text-sm">2</span>
                  </div>
                  <span className="text-gray-700">Distributed generation and prosumer markets</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold text-sm">3</span>
                  </div>
                  <span className="text-gray-700">Smart grid and digital market platforms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="section-padding bg-yellow-600 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Research Methodology</h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Our research employs advanced modeling techniques and market analysis tools to understand power market
              dynamics and transformation pathways.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">PSM</div>
              <h3 className="font-semibold mb-3">Power System</h3>
              <p className="text-yellow-100 text-sm">Power system modeling and grid analysis</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">MMA</div>
              <h3 className="font-semibold mb-3">Market Modeling</h3>
              <p className="text-yellow-100 text-sm">Electricity market modeling and analysis</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">RIA</div>
              <h3 className="font-semibold mb-3">Regulatory Impact</h3>
              <p className="text-yellow-100 text-sm">Regulatory impact assessment and policy analysis</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">SCA</div>
              <h3 className="font-semibold mb-3">Scenario Analysis</h3>
              <p className="text-yellow-100 text-sm">Future scenario development and analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Shape Nigeria's Power Market Future</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our research community and contribute to the evolution of Nigeria's power markets. We welcome
              collaboration from market participants, regulators, and researchers.
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
