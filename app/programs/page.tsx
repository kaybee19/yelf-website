import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Factory, DollarSign, Building, Leaf, ArrowRight, Users, Target } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { generateMetadata } from "@/lib/seo"

export const metadata: Metadata = generateMetadata({
  title: "Climate Action Programs - Energy, Industry, Finance & Governance",
  description:
    "Explore YCTF's comprehensive climate programs covering energy transition, industrial decarbonization, climate finance, governance reform, and resilience development across Nigeria and Africa.",
  url: "/programs",
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Climate Action Programs",
  description:
    "Comprehensive climate action programs addressing national priorities and key subnational constituencies critical for Nigeria's ecological transition.",
  hasPart: [
    {
      "@type": "Service",
      name: "Energy Programme",
      description: "Accelerating decarbonization and efficiency of Nigeria's energy system",
    },
    {
      "@type": "Service",
      name: "Industry Programme",
      description: "Decarbonization of steel, cement and chemical sectors",
    },
    {
      "@type": "Service",
      name: "Finance Programme",
      description: "Transforming Nigeria's financial system for climate alignment",
    },
    {
      "@type": "Service",
      name: "Governance Programme",
      description: "Institutional reforms for effective climate action",
    },
    {
      "@type": "Service",
      name: "Resilience Programme",
      description: "Climate resilience and sustainable development",
    },
  ],
}

export default function ProgramsPage() {
  const programs = [
    {
      icon: Zap,
      title: "Energy Programme",
      slug: "energy",
      description:
        "Accelerating the decarbonization and efficiency of Nigeria's energy system to achieve climate neutrality and position Nigeria as a success model in Africa.",
      keyFocus: [
        "Renewable energy integration and storage solutions",
        "Smart grid technology and energy efficiency",
        "Compressed Natural Gas (CNG) transition strategies",
        "Consumer demand unlocking and flexible energy systems",
      ],
      color: "yellow",
    },
    {
      icon: Factory,
      title: "Industry Programme",
      slug: "industry",
      description:
        "Developing scenarios and proposals for the decarbonization of steel, cement and chemical sectors with special focus on energy intensive industries.",
      keyFocus: [
        "Steel, cement, and chemical sector decarbonization",
        "Cost-effective and financially feasible technological options",
        "Just transition in areas affected by industrial transformation",
        "Integration with National Assembly, ECOWAS, and African Union policies",
      ],
      color: "yellow",
    },
    {
      icon: DollarSign,
      title: "Finance Programme",
      slug: "finance",
      description:
        "Transforming Nigeria's public and private financial system, aligning it with the Paris Agreement to drive ecological transition.",
      keyFocus: [
        "Climate risk disclosure and global taxonomy adoption",
        "Alignment of public spending and private portfolios with net-zero goals",
        "Carbon emission tax reform proposals",
        "Dialogue with international financial institutions",
      ],
      color: "yellow",
    },
    {
      icon: Building,
      title: "Governance Programme",
      slug: "governance",
      description:
        "Investigating and proposing reforms to Federal and State governments on mandates, rules, and responsibilities for effective climate action.",
      keyFocus: [
        "Institutional mandate and competency reforms",
        "Multi-level governance coordination",
        "Effective achievement of climate objectives",
        "Subsidiary governance structures optimization",
      ],
      color: "yellow",
    },
    {
      icon: Leaf,
      title: "Resilience and Development Programme",
      slug: "resilience",
      description:
        "Developing analysis and proposals for rethinking cooperation and development in the face of climate risks and decarbonization opportunities.",
      keyFocus: [
        "Climate vulnerability assessment in fragile states",
        "Green deal development for Nigeria",
        "Economic priorities shift from fossil fuels to climate resilience",
        "Sustainable development pathway design",
      ],
      color: "yellow",
    },
  ]

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 text-white">
        <div className="container-max">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Programmes</h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Our work programmes encompass domestic and international levels, addressing national priorities and key
              subnational constituencies critical for Nigeria's ecological transition.
            </p>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Comprehensive Climate Action</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At the domestic level we address the national level as well as key subnational constituencies including
              states, local communities, and regions highly relevant for ecological transition. Monitoring the
              implementation of national policies, programs and resilience plans is a central and cross-cutting theme.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <program.icon className="h-8 w-8 text-yellow-600" />
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{program.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Focus Areas:</h4>
                      <ul className="space-y-2">
                        {program.keyFocus.map((focus, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {focus}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={`/programs/${program.slug}`}>
                      <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                        Learn More About This Programme
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
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Cross-Cutting Themes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Several important themes run across all our programmes, ensuring integrated and comprehensive climate
              action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Policy Implementation Monitoring</h3>
                <p className="text-gray-600">
                  Continuous assessment and monitoring of national policies, programs and resilience plan implementation
                  across all sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">International Cooperation</h3>
                <p className="text-gray-600">
                  Focus on diplomacy, foreign policy cooperation and development, including Nigeria's leadership role in
                  Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Just Transition</h3>
                <p className="text-gray-600">
                  Ensuring that the transition to a low-carbon economy is socially equitable and environmentally
                  responsible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-yellow-600 to-amber-600 rounded-3xl p-8 lg:p-16 text-white text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Partner With Our Programmes</h2>
            <p className="text-yellow-100 mb-8 text-lg max-w-2xl mx-auto">
              We work in ongoing dialogue with stakeholders from politics, institutions, business, civil society,
              philanthropy and the scientific community. Join us in accelerating climate action across Nigeria and
              Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-yellow-600 hover:bg-yellow-50"
                asChild
              >
                <a 
                  href="mailto:info@yelfclimatetrustfoundation.org?subject=Partnership Opportunities"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Partnership Opportunities
                </a>
              </Button>
              {/* <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Contact Programme Teams
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
