import { TrendingUp, Users, Globe, Award } from "lucide-react"

export default function ImpactStats() {
  const stats = [
    {
      icon: TrendingUp,
      number: "50+",
      label: "Research Publications",
      description: "Evidence-based policy recommendations and climate solutions",
    },
    {
      icon: Users,
      number: "100K+",
      label: "Lives Impacted",
      description: "Communities reached through our programs and initiatives",
    },
    {
      icon: Globe,
      number: "25+",
      label: "Partner Organizations",
      description: "Strategic collaborations across Nigeria and West Africa",
    },
    {
      icon: Award,
      number: "15+",
      label: "Policy Wins",
      description: "Successful policy advocacy and implementation support",
    },
  ]

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Our Impact in Numbers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Through strategic research, advocacy, and community engagement, we're driving measurable climate action
            across Nigeria and Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-900 mb-3">{stat.label}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
