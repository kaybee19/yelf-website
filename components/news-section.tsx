import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ExternalLink } from "lucide-react"

export default function NewsSection() {
  const news = [
    {
      category: "Policy Brief",
      title: "Nigeria's Path to Net-Zero: A Comprehensive Roadmap for 2050",
      excerpt:
        "Our latest analysis outlines key strategies for Nigeria to achieve carbon neutrality while maintaining economic growth and social equity.",
      date: "December 15, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      category: "Research",
      title: "Financing the Green Transition: Unlocking Climate Investment in West Africa",
      excerpt:
        "New research reveals innovative financing mechanisms that could mobilize $50 billion for climate projects across the region.",
      date: "December 10, 2024",
      readTime: "12 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      category: "Event",
      title: "YCTF Hosts Regional Climate Leadership Summit in Abuja",
      excerpt:
        "Bringing together policymakers, business leaders, and civil society to accelerate climate action across Nigeria and neighboring countries.",
      date: "December 5, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              Latest Updates
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">News & Insights</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Stay informed about our latest research, policy recommendations, and climate action initiatives across
              Nigeria and Africa.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
              View All News
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                    <span className="mx-2">•</span>
                    {article.readTime}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">{article.excerpt}</p>

                  <Button variant="ghost" className="p-0 h-auto text-primary-600 hover:text-primary-700 font-semibold">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">Stay Updated on Climate Action</h3>
          <p className="text-primary-100 mb-8 text-lg max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest research, policy insights, and climate action updates from across
            Nigeria and Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3">Subscribe</Button>
          </div>

          <p className="text-primary-200 text-sm mt-4">Join 5,000+ climate leaders and policymakers in our community</p>
        </div>
      </div>
    </section>
  )
}
