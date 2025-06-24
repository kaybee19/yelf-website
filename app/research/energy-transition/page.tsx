"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Users, Target, Download, ArrowRight, Battery, Sun } from "lucide-react"
import { useDownloadPage } from "@/hooks/use-download-page"

export default function EnergyTransitionResearchPage() {
  const { downloadPageContent } = useDownloadPage();

  const handleDownload = async () => {
    await downloadPageContent("Energy Transition Research", "energy-transition-research.html");
  };

  const researchFocus = [
    {
      icon: Sun,
      title: "Universal Energy Access",
      description:
        "Research on achieving universal access to reliable and affordable energy through clean energy solutions.",
      activities: [
        "Energy access gap analysis",
        "Distributed renewable energy solutions",
        "Off-grid and mini-grid systems",
        "Energy poverty alleviation strategies",
      ],
    },
    {
      icon: Battery,
      title: "Renewable Energy Development",
      description:
        "Accelerated renewable energy development pathways and integration strategies for Nigeria's energy system.",
      activities: [
        "Renewable energy potential assessment",
        "Grid integration studies",
        "Energy storage solutions",
        "Policy framework development",
      ],
    },
    {
      icon: Users,
      title: "People-Centric Transition",
      description:
        "Ensuring the energy transition is socially equitable and environmentally responsible with community focus.",
      activities: [
        "Community engagement strategies",
        "Social impact assessments",
        "Participatory planning approaches",
        "Gender-inclusive energy access",
      ],
    },
    {
      icon: Target,
      title: "Green Economy Employment",
      description:
        "Research on employment prospects in the green economy and just transition pathways for energy workers.",
      activities: [
        "Green jobs market analysis",
        "Skills development programs",
        "Workforce transition strategies",
        "Economic impact assessments",
      ],
    },
  ]

  const keyObjectives = [
    "Support Nigeria's double leapfrog to a clean energy future",
    "Ensure socially equitable and environmentally responsible transition",
    "Achieve universal access to reliable and affordable energy",
    "Accelerate renewable energy development and deployment",
    "Create employment opportunities in the green economy",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.25%20%283%29-yOCVlEa9dWEbh71pjA2oUPUIXrkWTp.jpeg"
            alt="Solar energy integration in agricultural systems"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <Zap className="w-4 h-4 mr-2" />
              Energy Transition Research
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Energy Transition Research</h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Supporting Nigeria's double leapfrog to a clean energy future in a socially equitable and environmentally
              responsible manner through comprehensive research and analysis.
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
                Our Energy Transition research supports Nigeria's double leapfrog to a clean energy future in a socially
                equitable and environmentally responsible manner.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We focus on universal access to reliable and affordable energy, accelerated renewable energy
                development, people-centric approaches, and employment prospects in the green economy.
              </p>

              <div className="space-y-4">
                {keyObjectives.map((objective, index) => (
                  <div key={index} className="flex items-center">
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/close-up-hands-holding-outdoors_23-2148931129-E00c1eZXJ1j4D6VRBUK0dVcw5zCyLH.avif"
                alt="Hands protecting environment - energy transition stewardship"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-1">100%</div>
                <div className="text-gray-600 text-sm">Clean Energy Goal</div>
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
              Our comprehensive research approach covers all aspects of Nigeria's energy transition journey.
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

      {/* Double Leapfrog Concept */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/close-up-man-writing-notebook_23-2148894050.jpg-zMjc2XAi0soZTVtDoGUKCR4sB0VhS7.jpeg"
                alt="Energy transition planning and research"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Double Leapfrog Strategy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nigeria has the opportunity to achieve a double leapfrog - bypassing both fossil fuel dependence and
                centralized grid systems to move directly to clean, distributed energy solutions.
              </p>

              <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-yellow-900 mb-3">Leapfrog Opportunities</h3>
                <p className="text-yellow-800">
                  By leveraging distributed renewable energy, smart grid technologies, and innovative financing, Nigeria
                  can achieve universal energy access while building a clean energy economy.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold text-sm">1</span>
                  </div>
                  <span className="text-gray-700">Distributed renewable energy deployment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold text-sm">2</span>
                  </div>
                  <span className="text-gray-700">Smart grid and digital energy solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold text-sm">3</span>
                  </div>
                  <span className="text-gray-700">Innovative financing and business models</span>
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
              Our research employs mixed-methods approaches combining quantitative analysis with participatory research
              methods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">GIS</div>
              <h3 className="font-semibold mb-3">Spatial Analysis</h3>
              <p className="text-yellow-100 text-sm">Geographic information systems for energy resource mapping</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">TEA</div>
              <h3 className="font-semibold mb-3">Techno-Economic</h3>
              <p className="text-yellow-100 text-sm">Technical and economic feasibility assessments</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">SIA</div>
              <h3 className="font-semibold mb-3">Social Impact</h3>
              <p className="text-yellow-100 text-sm">Community-based participatory research methods</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">LCA</div>
              <h3 className="font-semibold mb-3">Life Cycle</h3>
              <p className="text-yellow-100 text-sm">Environmental impact and sustainability assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Contribute to Energy Transition Research
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our research community and contribute to Nigeria's clean energy future. We welcome collaboration from
              researchers, practitioners, and communities.
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
