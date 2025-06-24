"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Sun,
  Battery,
  Grid3X3,
  ArrowRight,
  Download,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useDownloadPage } from "@/hooks/use-download-page";

export default function EnergyProgrammePage() {
  const { downloadPageContent } = useDownloadPage();

  const handleDownload = async () => {
    await downloadPageContent("Energy Transition Programme", "energy-transition-strategy.html");
  };

  const focusAreas = [
    {
      icon: Sun,
      title: "Solar Energy Development",
      description:
        "Advancing solar photovoltaic and thermal technologies for distributed and utility-scale applications across Nigeria.",
      initiatives: [
        "Rooftop solar deployment programs",
        "Solar mini-grid development",
        "Agri-solar integration projects",
        "Solar manufacturing capacity building",
      ],
    },
    {
      icon: Battery,
      title: "Energy Storage Solutions",
      description:
        "Developing battery storage and other energy storage technologies to enable reliable renewable energy systems.",
      initiatives: [
        "Grid-scale battery storage projects",
        "Distributed storage systems",
        "Pumped hydro storage feasibility",
        "Energy storage policy frameworks",
      ],
    },
    {
      icon: Grid3X3,
      title: "Smart Grid Technologies",
      description:
        "Modernizing Nigeria's electricity grid with smart technologies for improved efficiency and renewable integration.",
      initiatives: [
        "Smart meter deployment",
        "Grid modernization programs",
        "Demand response systems",
        "Grid stability solutions",
      ],
    },
    {
      icon: Users,
      title: "Community Energy Projects",
      description:
        "Empowering local communities through decentralized renewable energy projects and capacity building.",
      initiatives: [
        "Community-owned solar projects",
        "Rural electrification programs",
        "Energy cooperative development",
        "Local technician training",
      ],
    },
  ];

  const keyObjectives = [
    "Accelerate deployment of renewable energy technologies across Nigeria",
    "Develop local capacity for renewable energy manufacturing and maintenance",
    "Create sustainable financing mechanisms for clean energy projects",
    "Integrate renewable energy with agricultural and industrial sectors",
    "Build resilient and modern electricity infrastructure",
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/close-up-environment-project_23-2148894092.jpg-ghdWE68Ltvre2ORoGgKizWlXTzP1mm.jpeg"
            alt="Solar panel technology and renewable energy research"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <Zap className="w-4 h-4 mr-2" />
              Energy Programme
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Energy Transition
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Accelerating Nigeria's transition to clean, reliable, and
              affordable renewable energy systems through innovative
              technologies, community engagement, and sustainable financing
              mechanisms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-primary-900 hover:bg-primary-50"
                onClick={handleDownload}
              >
                Download Energy Strategy
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
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Programme Approach
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Energy Programme focuses on accelerating Nigeria's
                transition to clean, reliable, and affordable renewable energy
                systems. We work across the entire energy value chain, from
                technology development to policy advocacy and community
                engagement.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through strategic partnerships and innovative financing
                mechanisms, we aim to unlock Nigeria's vast renewable energy
                potential while ensuring energy access for all.
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5029e3f6d2d62d7f30864813642e8e15-9dQwYgBMUWU0IoCGGBu7hFVYRSgcww.jpeg"
                alt="Solar panels integrated with agriculture in Nigeria"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  85%
                </div>
                <div className="text-gray-600 text-sm">Renewable Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Key Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses all aspects of Nigeria's
              energy transition, from technology deployment to community
              empowerment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <area.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Initiatives:
                    </h4>
                    <ul className="space-y-2">
                      {area.initiatives.map((initiative, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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

      {/* Real-World Applications */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Real-World Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our energy solutions are being implemented across Nigeria,
              demonstrating the practical benefits of renewable energy
              integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.22-fHxTA7WUlit3j7GBcSUEPJGidjxGKz.jpeg"
                alt="Solar integration in agricultural systems"
                className="rounded-2xl shadow-lg mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">Agri-Solar Systems</h3>
              <p className="text-gray-600">
                Combining solar energy generation with agricultural production
                to maximize land use efficiency and farmer income.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.25%20%283%29-yOCVlEa9dWEbh71pjA2oUPUIXrkWTp.jpeg"
                alt="Solar-powered agricultural infrastructure"
                className="rounded-2xl shadow-lg mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">
                Rural Electrification
              </h3>
              <p className="text-gray-600">
                Bringing clean, reliable electricity to rural communities
                through distributed solar and mini-grid systems.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.24%20%283%29-gagpwH6EwvxCllVrQSo0VgRRY4ZcU7.jpeg"
                alt="Solar infrastructure along rural roads"
                className="rounded-2xl shadow-lg mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">
                Infrastructure Integration
              </h3>
              <p className="text-gray-600">
                Integrating renewable energy systems with rural infrastructure
                development and transportation networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/52646446_2024248701023972_5766563305111945216_n.jpg-c3XXcqXzjH3WiwDUaJIDNr3meOCDlK.jpeg"
                alt="Community members working in agricultural development"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Community-Centered Approach
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our energy programs are designed with communities at the center.
                We work directly with local farmers, entrepreneurs, and
                community leaders to ensure that energy solutions meet real
                needs and create lasting benefits.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-primary-900 mb-3">
                  Local Capacity Building
                </h3>
                <p className="text-primary-800">
                  From training local technicians to establishing maintenance
                  networks, we build local capacity to ensure the long-term
                  sustainability of our energy projects.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold text-sm">
                      1
                    </span>
                  </div>
                  <span className="text-gray-700">
                    Community needs assessment and engagement
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold text-sm">
                      2
                    </span>
                  </div>
                  <span className="text-gray-700">
                    Local technician training and certification
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold text-sm">
                      3
                    </span>
                  </div>
                  <span className="text-gray-700">
                    Sustainable financing and ownership models
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Research & Innovation
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our energy programme is supported by cutting-edge research and
              innovation to advance renewable energy technologies and deployment
              strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">
                Technology Assessment
              </h3>
              <p className="text-primary-100 mb-4">
                Evaluation of renewable energy technologies suitable for
                Nigeria's climate and economic conditions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Policy Analysis</h3>
              <p className="text-primary-100 mb-4">
                Development of policy recommendations to accelerate renewable
                energy deployment and investment.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Market Analysis</h3>
              <p className="text-primary-100 mb-4">
                Analysis of renewable energy markets, financing mechanisms, and
                investment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Accelerate Nigeria's Energy Transition
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in building a clean, reliable, and affordable energy
              future for Nigeria. Whether you're a community leader, investor,
              or policy maker, there are opportunities to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700" asChild>
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
  );
}
