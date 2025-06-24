"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Factory,
  Wrench,
  Users,
  Globe,
  ArrowRight,
  Download,
} from "lucide-react";
import { useDownloadPage } from "@/hooks/use-download-page";

export default function IndustryProgrammePage() {
  const { downloadPageContent } = useDownloadPage();

  const handleDownload = async () => {
    await downloadPageContent(
      "Industrial Decarbonization Programme",
      "sector-analysis.html"
    );
  };

  const sectors = [
    {
      name: "Steel Industry",
      description:
        "Decarbonization pathways for Nigeria's steel production sector",
      challenges: [
        "High energy intensity and carbon emissions",
        "Technology transition requirements",
        "Economic competitiveness concerns",
        "Workforce transition needs",
      ],
      solutions: [
        "Electric arc furnace technology adoption",
        "Hydrogen-based steel production",
        "Carbon capture and utilization",
        "Circular economy approaches",
      ],
    },
    {
      name: "Cement Industry",
      description:
        "Sustainable transformation of cement manufacturing processes",
      challenges: [
        "Process emissions from limestone calcination",
        "Energy-intensive production methods",
        "Raw material sourcing impacts",
        "Market demand fluctuations",
      ],
      solutions: [
        "Alternative cement chemistries",
        "Carbon capture and storage (CCS)",
        "Waste heat recovery systems",
        "Sustainable raw material substitution",
      ],
    },
    {
      name: "Chemical Sector",
      description:
        "Green chemistry and sustainable chemical production pathways",
      challenges: [
        "Complex chemical processes and feedstocks",
        "Energy and resource intensity",
        "Waste and emission management",
        "Supply chain transformation",
      ],
      solutions: [
        "Bio-based feedstock development",
        "Process electrification",
        "Catalytic efficiency improvements",
        "Circular chemical economy",
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.25-rXKOZRjlbmm9C1srDsT3JwXyGEyjd3.jpeg"
            alt="Industrial decarbonization and sustainable agriculture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <Factory className="w-4 h-4 mr-2" />
              Industry Programme
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Industrial Decarbonization
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Developing scenarios and proposals for the decarbonization of
              steel, cement and chemical sectors with special focus on energy
              intensive industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-primary-900 hover:bg-primary-50"
                onClick={handleDownload}
              >
                Download Sector Analysis
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Programme Approach
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                YELF Climate Trust Foundation aims to develop scenarios and
                proposals for the decarbonization of the steel, cement and
                chemical sectors with special focus on energy intensive
                industries.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Quantitative and qualitative analysis will provide possible
                decarbonization pathways and identify the most cost-effective,
                financially feasible and socially just technological options.
              </p>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-900 mb-3">
                  Integration with Policy
                </h3>
                <p className="text-yellow-800">
                  The network will link possible industry decarbonization
                  choices to those in the National Assembly of Nigeria, ECOWAS
                  and the African Union.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.23-LQF1rLI24u4VUsi4MWfXOFJl9wUafP.jpeg"
                alt="Renewable energy integration in agriculture"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  3
                </div>
                <div className="text-gray-600 text-sm">Key Sectors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Sectors */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Focus Sectors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive analysis covers the most energy-intensive
              industrial sectors in Nigeria, providing tailored decarbonization
              strategies for each.
            </p>
          </div>

          <div className="space-y-8">
            {sectors.map((sector, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                        {sector.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {sector.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Key Challenges:
                      </h4>
                      <ul className="space-y-2">
                        {sector.challenges.map((challenge, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Decarbonization Solutions:
                      </h4>
                      <ul className="space-y-2">
                        {sector.solutions.map((solution, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Just Transition */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/52702805_2024249154357260_6263685437248765952_n.jpg-KGm8OQBmeATnFsPXqdWGC94t48bNMC.jpeg"
                alt="Traditional farming practices and community work"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Just Transition Focus
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The programme will explore practical examples of just transition
                in the areas most affected by the industrial sector transition.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Workforce Development
                    </h3>
                    <p className="text-gray-600">
                      Retraining and reskilling programs for workers
                      transitioning from traditional to green industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Wrench className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Technology Transfer
                    </h3>
                    <p className="text-gray-600">
                      Facilitating access to clean technologies and supporting
                      local innovation capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Community Development
                    </h3>
                    <p className="text-gray-600">
                      Supporting affected communities through economic
                      diversification and sustainable development initiatives.
                    </p>
                  </div>
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
            <h2 className="text-4xl font-serif font-bold mb-6">
              Research Methodology
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Our comprehensive approach combines quantitative analysis with
              qualitative assessment to identify optimal decarbonization
              pathways.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">1</div>
              <h3 className="font-semibold mb-3">Technology Assessment</h3>
              <p className="text-yellow-100 text-sm">
                Evaluation of available and emerging decarbonization
                technologies
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">2</div>
              <h3 className="font-semibold mb-3">Economic Analysis</h3>
              <p className="text-yellow-100 text-sm">
                Cost-benefit analysis and financial feasibility studies
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">3</div>
              <h3 className="font-semibold mb-3">Social Impact</h3>
              <p className="text-yellow-100 text-sm">
                Assessment of social implications and just transition
                requirements
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">4</div>
              <h3 className="font-semibold mb-3">Policy Integration</h3>
              <p className="text-yellow-100 text-sm">
                Alignment with national and regional policy frameworks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Transform Nigeria's Industrial Future
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in developing and implementing decarbonization strategies
              that ensure Nigeria's industrial competitiveness while achieving
              climate goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700"
                asChild
              >
                <a
                  href="mailto:info@yelfclimatetrustfoundation.org?subject=Collaborate on Research"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Collaborate on Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
