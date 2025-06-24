"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Droplets, Sprout, ArrowRight, Download, TreePine, Home } from "lucide-react"
import { useDownloadPage } from "@/hooks/use-download-page"

export default function ResiliencePage() {
  const { downloadPageContent } = useDownloadPage();

  const handleDownload = async () => {
    await downloadPageContent("Climate Resilience & Development Programme", "resilience-strategy.html");
  };

  const focusAreas = [
    {
      icon: Sprout,
      title: "Climate-Smart Agriculture",
      description:
        "Promoting agricultural practices that increase productivity, enhance resilience, and reduce greenhouse gas emissions.",
      initiatives: [
        "Drought-resistant crop varieties",
        "Sustainable farming techniques",
        "Soil health improvement programs",
        "Integrated pest management systems",
      ],
    },
    {
      icon: Droplets,
      title: "Water Resource Management",
      description:
        "Developing sustainable water management systems to ensure reliable access to clean water for communities and agriculture.",
      initiatives: [
        "Rainwater harvesting systems",
        "Efficient irrigation technologies",
        "Watershed management programs",
        "Water quality monitoring systems",
      ],
    },
    {
      icon: Shield,
      title: "Disaster Preparedness",
      description:
        "Building community capacity to prepare for, respond to, and recover from climate-related disasters and extreme weather events.",
      initiatives: [
        "Early warning systems",
        "Emergency response planning",
        "Infrastructure resilience upgrades",
        "Community disaster training",
      ],
    },
    {
      icon: Home,
      title: "Sustainable Livelihoods",
      description:
        "Creating economic opportunities that are resilient to climate change while supporting community development and poverty reduction.",
      initiatives: [
        "Climate-resilient value chains",
        "Alternative livelihood programs",
        "Microfinance for adaptation",
        "Skills development training",
      ],
    },
  ]

  const keyObjectives = [
    "Build adaptive capacity of vulnerable communities to climate change impacts",
    "Promote climate-smart agricultural practices and technologies",
    "Strengthen water security and sustainable resource management",
    "Develop early warning systems and disaster preparedness capabilities",
    "Create sustainable livelihood opportunities for climate resilience",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amazing-mountain-view-bali_72229-895.jpg-40XsKLG8Z2IgjXUQ04u531MpYC2VXU.jpeg"
            alt="Rural landscape and climate resilience"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <Shield className="w-4 h-4 mr-2" />
              Resilience Programme
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Climate Resilience & Development</h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Building adaptive capacity and resilience of vulnerable communities to climate change impacts through
              sustainable development, innovative technologies, and community empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary-900 hover:bg-primary-50" onClick={handleDownload}>
                Download Resilience Strategy
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
                Our Climate Resilience Programme focuses on empowering communities to adapt to the impacts of climate
                change. We work with local stakeholders to develop and implement sustainable solutions that address the
                unique challenges faced by each community.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through integrated approaches that combine traditional knowledge with modern technologies, we build
                long-term resilience while promoting sustainable development and poverty reduction.
              </p>

              <div className="space-y-4">
                {keyObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medium-shot-boy-father-walking-together_23-2149142900.jpg-z5OmbIQzdFVNxdgnzfpMQi10xWTcA0.jpeg"
                alt="Father and son in rural community representing sustainable livelihoods"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary-600 mb-1">50M</div>
                <div className="text-gray-600 text-sm">People Reached</div>
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
              Our comprehensive approach addresses all dimensions of climate resilience, from agricultural adaptation to
              disaster preparedness and sustainable livelihoods.
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

      {/* Youth Leadership */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medium-shot-boy-working-with-plants_23-2149142895.jpg-9srjbPE2QAlv5KWjSsbtxvCm7IztfX.jpeg"
                alt="Young person engaged in sustainable agriculture"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Youth Leadership in Climate Action</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that young people are key drivers of climate resilience. Our program actively engages youth
                in learning about sustainable practices, environmental stewardship, and climate adaptation strategies.
              </p>

              <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-yellow-900 mb-3">Intergenerational Knowledge Transfer</h3>
                <p className="text-yellow-800">
                  Through hands-on training and mentorship, we empower the next generation to become climate leaders in
                  their communities, ensuring that knowledge and skills are passed down and continuously improved.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold text-sm">1</span>
                  </div>
                  <span className="text-gray-700">Youth climate leadership training programs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold text-sm">2</span>
                  </div>
                  <span className="text-gray-700">Mentorship and knowledge sharing networks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold text-sm">3</span>
                  </div>
                  <span className="text-gray-700">Community-based adaptation projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Technology for Resilience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We integrate modern technologies with traditional practices to enhance climate resilience and improve
              livelihoods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/449616442_497425966094534_2757402193935548131_n-zkvvj6OmJF6vtIOj2L2eEdz6ThNSka.jpeg"
                alt="Modern agricultural technology in rice farming"
                className="rounded-2xl shadow-lg mb-6 w-full h-64 object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">Smart Agriculture</h3>
              <p className="text-gray-600">
                Integrating modern technology with traditional farming practices to improve productivity and resilience
                to climate variability.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.24%20%281%29-06256MijOkhoSBVv6pBZLPIQK9z6FX.jpeg"
                alt="Solar-powered irrigation systems"
                className="rounded-2xl shadow-lg mb-6 w-full h-64 object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">Renewable Energy Solutions</h3>
              <p className="text-gray-600">
                Deploying solar-powered irrigation and water management systems to ensure reliable access to clean
                energy and water resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Diversity */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Promoting Agricultural Diversity</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Climate resilience requires diverse agricultural systems that can adapt to changing conditions. We
                support farmers in developing crop rotation strategies, intercropping systems, and diversified farming
                approaches.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This diversity not only improves resilience to climate shocks but also enhances food security,
                biodiversity conservation, and economic stability for farming communities.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <TreePine className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Agroforestry Systems</h3>
                    <p className="text-gray-600">
                      Integrating trees with crops and livestock to improve soil health, carbon sequestration, and farm
                      productivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/486988241_122238080246018301_7020088886027853682_n.jpg-qxjnUSHIWoFbLrfhqE8QWcqOlgRLBX.jpeg"
                alt="Diverse agricultural landscape with multiple crop types"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="section-padding bg-yellow-600 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Research & Innovation</h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Our resilience programme is supported by cutting-edge research and innovation to develop effective
              adaptation strategies and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Climate Risk Assessment</h3>
              <p className="text-yellow-100 mb-4">
                Comprehensive analysis of climate risks and vulnerabilities to inform adaptation planning and
                implementation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Adaptation Technologies</h3>
              <p className="text-yellow-100 mb-4">
                Development and testing of climate adaptation technologies suitable for local conditions and needs.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Community Studies</h3>
              <p className="text-yellow-100 mb-4">
                Research on community-based adaptation strategies and traditional knowledge systems for resilience.
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
              Build Climate Resilience in Your Community
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in building adaptive capacity and resilience to climate change. Whether you're a community leader,
              farmer, or development practitioner, there are opportunities to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700" asChild>
                <a 
                  href="mailto:info@yelfclimatetrustfoundation.org?subject=Partner With Us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Partner With Us
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
