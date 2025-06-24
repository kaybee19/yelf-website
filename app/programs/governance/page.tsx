"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Users, Target, Scale, ArrowRight, Download, Settings, Globe } from "lucide-react"
import { useDownloadPage } from "@/hooks/use-download-page"

export default function GovernanceProgrammePage() {
  const { downloadPageContent } = useDownloadPage();

  const handleDownload = async () => {
    await downloadPageContent("Climate Governance Reform Programme", "governance-framework.html");
  };

  const focusAreas = [
    {
      icon: Building,
      title: "Institutional Mandates",
      description:
        "Investigating and proposing reforms to Federal and State government institutions' mandates, rules, and responsibilities.",
      initiatives: [
        "Institutional capacity assessment",
        "Mandate clarity and alignment",
        "Organizational restructuring proposals",
        "Performance measurement frameworks",
      ],
    },
    {
      icon: Users,
      title: "Multi-level Governance",
      description:
        "Ensuring effective coordination between Federal, State, and Local government levels for climate action.",
      initiatives: [
        "Intergovernmental coordination mechanisms",
        "Subsidiary governance optimization",
        "Local government capacity building",
        "Vertical integration strategies",
      ],
    },
    {
      icon: Target,
      title: "Climate Objective Achievement",
      description:
        "Developing frameworks and mechanisms to ensure effective achievement of climate objectives at all levels.",
      initiatives: [
        "Climate target operationalization",
        "Implementation monitoring systems",
        "Accountability mechanisms",
        "Performance evaluation frameworks",
      ],
    },
    {
      icon: Scale,
      title: "Regulatory Frameworks",
      description: "Proposing regulatory reforms to enable effective climate governance and policy implementation.",
      initiatives: [
        "Climate law development",
        "Regulatory impact assessments",
        "Enforcement mechanism design",
        "Legal framework harmonization",
      ],
    },
  ]

  const keyObjectives = [
    "Investigate and propose reforms to government institutions for effective climate action",
    "Ensure coordination between Federal, State, and Local government levels",
    "Develop frameworks for climate objective achievement",
    "Strengthen institutional capacity for climate governance",
    "Optimize subsidiary governance structures for climate action",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.25%20%281%29-2QzLN31wy6ofQdxa1HuB5o64m9oaV8.jpeg"
            alt="Community collaboration and governance"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <Building className="w-4 h-4 mr-2" />
              Governance Programme
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Climate Governance Reform</h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Investigating and proposing reforms to Federal and State governments on mandates, rules, and
              responsibilities to ensure effective achievement of climate objectives at all levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-yellow-900 hover:bg-yellow-50" onClick={handleDownload}>
                Download Governance Framework
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Objectives */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Programme Approach</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Governance Programme investigates and proposes reforms to Federal and State governments on mandates,
                rules, and responsibilities to ensure the effective achievement of climate objectives at all levels.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We focus on strengthening institutional capacity, improving coordination mechanisms, and developing
                frameworks that enable effective climate governance across Nigeria.
              </p>

              <div className="space-y-4">
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/full-shot-smiley-kid-outdoors_23-2148931073.jpg-lK59ad08LKM5gqB5ZuVd2brdqh6pbD.jpeg"
                alt="Community development and youth engagement"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-1">3</div>
                <div className="text-gray-600 text-sm">Government Levels</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Key Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses institutional, regulatory, and coordination aspects of climate
              governance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <area.icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{area.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Initiatives:</h4>
                    <ul className="space-y-2">
                      {area.initiatives.map((initiative, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {initiative}
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

      {/* Multi-level Governance */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/485057815_1054937116660267_7862997610321339155_n.jpg-odPeoAGXue9fNjdGKU0IAbikAWwRVB.jpeg"
                alt="Community organization and agricultural planning"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Multi-Level Coordination</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Effective climate governance requires seamless coordination between Federal, State, and Local government
                levels. Our programme develops mechanisms to ensure alignment and effectiveness across all levels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Federal Level</h3>
                    <p className="text-gray-600">
                      National policy frameworks, international commitments, and cross-state coordination mechanisms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Settings className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">State Level</h3>
                    <p className="text-gray-600">
                      State-specific implementation strategies, regional coordination, and local adaptation measures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Level</h3>
                    <p className="text-gray-600">
                      Community-based implementation, local capacity building, and grassroots engagement strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Analysis */}
      <section className="section-padding bg-yellow-600 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Research & Analysis</h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Our governance programme is supported by comprehensive institutional analysis and policy research.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Institutional Analysis</h3>
              <p className="text-yellow-100 mb-4">
                Comprehensive assessment of existing institutional capacities and governance structures.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Policy Frameworks</h3>
              <p className="text-yellow-100 mb-4">
                Development of governance frameworks and policy recommendations for climate action.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
              <p className="text-yellow-100 mb-4">
                International best practices in climate governance and institutional reform.
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
              Strengthen Climate Governance in Nigeria
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in reforming Nigeria's governance structures for effective climate action. Whether you're from
              government, civil society, or academia, there are opportunities to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700" asChild>
                <a 
                  href="mailto:info@yelfclimatetrustfoundation.org?subject=Collaborate on Governance Reform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Collaborate on Governance Reform
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
